export const id = 235;
export const ids = [235];
export const modules = {
  37884: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez = bz(37890);
    const nz = [0, 0, 0];
    class iz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nz;
        this.pool = zz, this.origin = uz, this.count = 0, this.free = []
      }
      take() {
        var zz;
        const uz = null !== (zz = this.free.pop()) && void 0 !== zz ? zz : this.count++;
        return uz >= this.pool.Bp && this.pool.grow(Math.max(2 * this.pool.Bp, uz + 1)), this.hide(uz), uz
      }
      release(zz) {
        this.hide(zz), this.free.push(zz)
      }
      write(zz, uz, bz, nz) {
        const {
          records: iz
        } = this.pool, {
          origin: lz
        } = this, Mz = zz * Ez.d;
        iz[Mz] = uz - lz[0], iz[Mz + 1] = bz - lz[1], iz[Mz + 2] = nz - lz[2], iz[Mz + Ez.h] = 0, this.pool.markDirty(zz)
      }
      hide(zz) {
        this.pool.records[zz * Ez.d + Ez.h] = 1, this.pool.markDirty(zz)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class lz {
      constructor(zz, uz, bz) {
        this.api = zz, this.model = uz, this.initialCapacity = bz, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(zz) {
        let uz = this.kinds.get(zz);
        if (void 0 === uz) {
          const bz = this.api.createInstancePool({
            ...this.model,
            item: zz
          }, this.initialCapacity);
          null === bz || void 0 === bz || bz.setOrigin(this.origin[0], this.origin[1], this.origin[2]), uz = bz && new iz(bz, this.origin), this.kinds.set(zz, uz)
        }
        return uz
      }
      follow(zz) {
        const {
          origin: uz
        } = this;
        if (Math.abs(zz[0] - uz[0]) <= 512 && Math.abs(zz[1] - uz[1]) <= 512 && Math.abs(zz[2] - uz[2]) <= 512) return !1;
        uz[0] = Math.floor(zz[0]), uz[1] = Math.floor(zz[1]), uz[2] = Math.floor(zz[2]);
        for (const bz of this.kinds.values()) null === bz || void 0 === bz || bz.pool.setOrigin(uz[0], uz[1], uz[2]);
        return !0
      }
      commit() {
        for (const zz of this.kinds.values()) null === zz || void 0 === zz || zz.commit()
      }
      dispose() {
        for (const zz of this.kinds.values()) null === zz || void 0 === zz || zz.dispose();
        this.kinds.clear()
      }
    }
  },
  37901: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      e: () => Mz,
      h: () => tz
    });
    const Ez = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      nz = [0, 1, 2, 0, 2, 3],
      iz = [4, 5];

    function lz(zz, uz, bz, Ez, nz) {
      for (let lz = 0; lz < 6; lz++) iz.includes(lz) === nz && Hz(zz, uz, bz, Ez, lz)
    }

    function Mz(zz, uz, bz, Ez) {
      for (let nz = 0; nz < 6; nz++) Hz(zz, uz, bz, Ez, nz)
    }

    function tz(zz, uz, bz, iz, lz) {
      for (let Mz = 0; Mz < 6; Mz++)
        for (const tz of [0, 1]) {
          const [Hz, Oz, pz] = [tz + 2, tz + 1, (tz + 3) % 4], dz = zz.length / 3;
          for (const [uz, nz] of [
              [tz, Oz],
              [Hz, Oz],
              [Hz, pz],
              [tz, pz]
            ])
            for (let tz = 0; tz < 3; tz++) {
              const Hz = Ez[3 * (4 * Mz + uz) + tz],
                Oz = Ez[3 * (4 * Mz + nz) + tz];
              zz.push((Hz + (Oz - Hz) * lz) * iz / 2 + bz[tz])
            }
          for (const zz of nz) uz.push(dz + zz)
        }
    }

    function Hz(zz, uz, bz, iz, lz) {
      let [Mz, tz, Hz] = bz, [Oz, pz, dz] = iz;
      const Fz = zz.length / 3;
      for (let nz = 4 * lz; nz < 4 * lz + 4; nz++) zz.push(Ez[3 * nz] * Oz / 2 + Mz, Ez[3 * nz + 1] * pz / 2 + tz, Ez[3 * nz + 2] * dz / 2 + Hz);
      for (const Ez of nz) uz.push(Fz + Ez)
    }
  },
  37872: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => oX
    });
    var Ez = bz(56);
    const nz = [{
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
      iz = 10;
    let lz = !0;

    function Mz() {
      return lz
    }

    function tz(zz) {
      lz = zz
    }
    const Hz = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Oz() {
      return lz ? nz.length : iz
    }

    function pz(zz) {
      var uz, bz;
      return null !== (uz = null === (bz = nz[zz - 1]) || void 0 === bz ? void 0 : bz.reactorTier) && void 0 !== uz ? uz : 0
    }

    function dz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pz(zz) > 0;
      return bz && !lz ? "hidden" : zz <= uz ? "open" : bz ? uz < 5 ? "hidden" : uz < iz ? "teaser" : "locked" : "locked"
    }

    function Fz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Ez,
        n: nz
      } = Kz(zz);
      return {
        key: uz[Ez],
        params: {
          [Ez]: bz ? String(nz) : nz
        }
      }
    }
    const Zz = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Rz(zz, uz) {
      return pz(zz) > 0 && uz < iz
    }

    function Kz(zz) {
      const uz = pz(zz);
      if (uz > 0) return {
        kind: "atomic",
        n: uz,
        short: `A${uz}`
      };
      const bz = function(zz) {
        return zz >= 6 && zz <= 10 ? zz - 6 + 1 : 0
      }(zz);
      return bz > 0 ? {
        kind: "stage",
        n: bz,
        short: `S${bz}`
      } : {
        kind: "tier",
        n: zz,
        short: String(zz)
      }
    }

    function wz(zz) {
      return nz[Math.max(1, Math.min(zz, nz.length)) - 1]
    }

    function Xz(zz, uz) {
      return zz < uz ? function(zz) {
        var uz;
        return null !== (uz = nz[zz]) && void 0 !== uz ? uz : null
      }(zz) : null
    }
    const fz = "baf2coresubmit",
      sz = "baf2corebankpause",
      rz = "baf2coredeposit",
      oz = "baf2corechargepause";

    function Nz(zz) {
      var uz;
      return null !== (uz = zz.baf2CoreOpen) && void 0 !== uz ? uz : iz
    }
    const vz = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function xz(zz) {
      return vz.includes(zz)
    }
    const Jz = (zz, uz) => uz.map((uz => [uz, [zz]])),
      Az = Object.fromEntries([...Jz("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Jz("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Jz("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Jz("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Jz("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Jz("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Jz("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Jz("Parts Bench", ["Focus Lens"]), ...Jz("Machine Bench", ["Laser", "Collider"]), ...Jz("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Jz("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Jz("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Jz("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Jz("Tool Bench", ["Mob Cage"]), ...Jz("Tool Bench", ["Pocket Terminal"]), ...Jz("Tool Bench", ["Comet Beacon"]), ...Jz("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Tz(zz) {
      var uz;
      return null !== (uz = Az[zz]) && void 0 !== uz ? uz : ["Workbench"]
    }

    function Lz(zz) {
      return Tz(zz)[0]
    }
    nz.slice(1).map(((zz, uz) => `Core Tier ${uz+2}`));
    var Pz = bz(9078);
    const Gz = ["on", "hud", "off"];

    function az(zz) {
      return "on" === zz
    }
    var Vz = bz(328);
    const mz = "Mob Farm",
      qz = {
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
      hz = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Uz = {
        1: 20,
        2: 60,
        3: 120
      },
      cz = "baf2farmvoid",
      gz = "Caged ",
      Sz = " Spawner Block";

    function yz(zz) {
      return `lifeform:${(0,Vz.ze)(zz)}`
    }

    function Dz(zz) {
      if (!zz) return null;
      if (zz.startsWith(gz)) {
        const uz = zz.slice(6);
        return hz.includes(uz) ? uz : null
      }
      if (zz.endsWith(Sz)) {
        const uz = zz.slice(0, -14);
        return void 0 !== qz[uz] ? uz : null
      }
      return null
    }

    function Qz(zz) {
      return !0 === zz.mobFarm
    }

    function Wz(zz, uz) {
      return Uz[qz[uz]] * zz.opMs / 1e3
    }
    const ez = new Map;
    const jz = "baf2islands",
      Iz = "baf2islandnew";

    function Bz(zz) {
      const uz = nz.findIndex((uz => uz.unlocks.includes(zz)));
      return uz < 0 ? 1 : uz + 1
    }

    function Cz(zz) {
      return Math.floor(zz).toLocaleString("en-US")
    }
    var Yz = bz(37819);
    const kz = "baf2terminaltake",
      zu = "baf2terminalput",
      uu = ["one", "stack", "fill"];

    function bu(zz, uz, bz) {
      return `${kz} ${zz} ${uz} ${bz}`
    }

    function Eu(zz, uz, bz) {
      return `${zu} ${zz} ${uz} ${bz}`
    }

    function nu(zz) {
      return `${zu} ${zz}`
    }
    const iu = [
      [`${kz} `, "take"],
      [`${zu} `, "put"]
    ];

    function lu(zz) {
      const uz = iu.find((uz => {
        let [bz] = uz;
        return zz.startsWith(bz)
      }));
      if (!uz) return null;
      const [bz, Ez] = uz, [nz, iz, ...lz] = zz.slice(bz.length).trim().split(" "), Mz = Number(nz);
      if (!Number.isSafeInteger(Mz) || Mz <= 0) return null;
      if ("put" === Ez && void 0 === iz) return {
        kind: "putAll",
        seq: Mz
      };
      const tz = function(zz) {
        if (uu.includes(zz)) return zz;
        const uz = Number(zz);
        return /^\d+$/.test(zz) && Number.isSafeInteger(uz) && uz > 0 ? uz : null
      }(null !== iz && void 0 !== iz ? iz : "");
      return null === tz || 0 === lz.length ? null : {
        kind: Ez,
        seq: Mz,
        mode: tz,
        item: lz.join(" ")
      }
    }

    function Mu(zz, uz) {
      const bz = "number" === typeof zz ? zz : "one" === zz ? 1 : "stack" === zz ? 99 : uz;
      return Math.min(uz, bz)
    }

    function tu(zz, uz) {
      const bz = zz => "number" === typeof zz ? zz : "one" === zz ? 1 : 99;
      return "fill" === zz || "fill" === uz ? "fill" : bz(zz) + bz(uz)
    }

    function Hu(zz, uz) {
      const bz = lu(zz),
        Ez = lu(uz),
        nz = bz && Ez ? function(zz, uz) {
          return "take" === zz.kind || "take" === uz.kind ? "take" === zz.kind && "take" === uz.kind && zz.item === uz.item ? {
            ...uz,
            mode: tu(zz.mode, uz.mode)
          } : null : "putAll" === zz.kind || "putAll" === uz.kind ? {
            kind: "putAll",
            seq: uz.seq
          } : zz.item === uz.item ? {
            ...uz,
            mode: tu(zz.mode, uz.mode)
          } : null
        }(bz, Ez) : null;
      return nz ? "putAll" === (iz = nz).kind ? nu(iz.seq) : "put" === iz.kind ? Eu(iz.seq, iz.mode, iz.item) : bu(iz.seq, iz.mode, iz.item) : null;
      var iz
    }
    const Ou = "baf2rx";

    function pu(zz, uz) {
      for (var bz = arguments.length, Ez = new Array(bz > 2 ? bz - 2 : 0), nz = 2; nz < bz; nz++) Ez[nz - 2] = arguments[nz];
      return [Ou, zz[0], zz[1], zz[2], uz, ...Ez].join(" ")
    }
    const du = 2,
      Fu = 4,
      Zu = 8,
      Ru = 16,
      Ku = 32,
      wu = 64,
      Xu = 128,
      fu = 256,
      su = 512,
      ru = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      ou = [{
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
    const Nu = "Biomass",
      vu = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function xu(zz) {
      return {
        input: Nu,
        inputAmount: 1,
        output: zz,
        outputAmount: 1
      }
    }
    const Ju = "baf2synth",
      Au = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Tu = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Lu = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Pu = function(zz, uz) {
        return {
          input: zz,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: uz,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Gu = function(zz, uz) {
        return {
          ...Pu(zz, uz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      au = Tu.map((zz => Gu(zz, "Biomass", 2))),
      Vu = {
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
          recipes: [Pu("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Pu("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Pu("Raw Gold", "Gold Grit", 2), Pu("Messy Stone", "Sand"), Pu("Gravel", "Sand"), Pu("Raw Voltite", "Voltite Dust", 2), Pu("Moonstone", "Moonstone Dust", 4), Pu("Wheat Seeds", "Fertiliser"), Pu("Raw Uranium", "Uranium Grit", 2), Gu("Mossy Messy Stone", "Sand"), ...au],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Pu("Iron Grit", "Iron Bar"), Pu("Copper Grit", "Copper Bar"), Pu("Gold Grit", "Gold Bar"), Pu("Raw Iron", "Iron Bar"), Pu("Raw Copper", "Copper Bar"), Pu("Raw Gold", "Gold Bar"), Pu("Sand", "Glass"), Pu("Messy Stone", "Stone"), ...Vz.$c.map((zz => Pu(zz, "Charcoal", 1, 4))), Pu("Wheat", "Bread", 1, 2), ...Tu.map(((zz, uz) => Gu(zz, Lu[uz])))],
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
          recipes: [Pu("Iron Bar", "Iron Plate"), Pu("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Pu("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Pu("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Pu("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Pu("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Pu("Raw Gold", "Gold Grit", 3), Pu("Raw Voltite", "Voltite Dust", 3), Pu("Messy Stone", "Sand", 2), Pu("Gravel", "Sand", 2), Pu("Moonstone", "Moonstone Dust", 6), Pu("Raw Uranium", "Uranium Grit", 3), Gu("Mossy Messy Stone", "Sand", 2), ...au],
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
          table: ru
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Pu("Coal", "Diamond", 1, 24), Pu("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Yz.l
      },
      mu = {
        Crusher: [Pu("Spent Pellet", "Glow Dust"), Pu("Wheat Seeds", "Biomass"), Pu("Wheat", "Biomass"), Pu("Dead Bush", "Biomass"), Pu("Dusk Moss", "Biomass"), Pu("Rotten Flesh", "Biomass"), Pu("Bone", "Biomass", 2)],
        "Shatter Mill": [Pu("Spent Pellet", "Glow Dust"), Pu("Wheat Seeds", "Biomass"), Pu("Wheat", "Biomass"), Pu("Dead Bush", "Biomass"), Pu("Dusk Moss", "Biomass"), Pu("Rotten Flesh", "Biomass"), Pu("Bone", "Biomass", 2), ...Vz.$c.map((zz => Pu(zz, "Biomass")))],
        Smelter: [Pu("Biomass", "Fertiliser", 2)],
        Press: [Pu("Coal", "Graphite", 1, 4)]
      },
      qu = "Power Coupler",
      hu = "Advanced Coupler",
      Uu = "Nova Coupler",
      cu = [{
        item: qu,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: hu,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: Uu,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const gu = new Map;

    function Su(zz) {
      var uz, bz;
      return null !== (uz = null !== (bz = zz.fuelSlot) && void 0 !== bz ? bz : zz.couplerSlot) && void 0 !== uz ? uz : null
    }

    function yu(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!zz.couplable) throw new Error(`${zz.kind} takes no Power Coupler`);
      let bz = gu.get(zz);
      bz || (bz = [], gu.set(zz, bz));
      let Ez = bz[uz];
      if (!Ez) {
        var nz;
        const {
          divisor: iz,
          powerPerS: lz
        } = cu[uz - 1], Mz = zz.opMs / iz, tz = void 0 !== zz.fluidMade || void 0 !== zz.cryoMade ? zz.powerPerOp : lz * Mz / 1e3;
        Ez = {
          ...zz,
          fuelSlot: null,
          couplerSlot: null !== (nz = Su(zz)) && void 0 !== nz ? nz : void 0,
          opMs: Mz,
          powerPerOp: tz,
          coupled: !0
        }, uz > 1 && (Ez = {
          ...Ez,
          couplerLevel: uz
        }), bz[uz] = Ez
      }
      return Ez
    }
    const Du = new Map;
    const Qu = new Map;

    function Wu(zz, uz) {
      if (null === uz || (bz = uz, !vu.includes(bz))) return zz;
      var bz;
      let Ez = Qu.get(uz);
      return Ez || (Ez = {
        ...zz,
        recipes: [xu(uz)]
      }, Qu.set(uz, Ez)), Ez
    }

    function eu(zz) {
      return !0 === zz.synth
    }
    const ju = (zz, uz, bz, Ez) => ({
        output: zz,
        outputAmount: uz,
        tier: bz,
        inputs: Ez.map((zz => {
          let [uz, bz] = zz;
          return {
            item: uz,
            amount: bz
          }
        }))
      }),
      Iu = Object.fromEntries([ju("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), ju("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), ju("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ju("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), ju("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), ju("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), ju("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), ju("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), ju("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), ju("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), ju("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), ju("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), ju("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), ju("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), ju("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ju("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), ju("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ju("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), ju("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ju("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), ju("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), ju("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), ju("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), ju("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), ju("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), ju("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), ju("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), ju("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), ju("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), ju("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((zz => [zz.output, zz]))),
      Bu = new Map;

    function Cu(zz, uz) {
      let bz = Vu[zz];
      if (uz.atomic && (bz = function(zz) {
          const uz = mu[zz.kind];
          if (!uz) return zz;
          let bz = Du.get(zz.kind);
          if (!bz) {
            const Ez = new Set(uz.map((zz => zz.input))),
              nz = zz.recipes.filter((zz => !Ez.has(zz.input)));
            bz = {
              ...zz,
              recipes: [...nz, ...uz]
            }, Du.set(zz.kind, bz)
          }
          return bz
        }(bz)), bz.synth) return Wu(bz, uz.taught);
      if (uz.coupled && bz.couplable) return yu(bz, uz.level);
      const Ez = bz.inputSlots && null !== uz.taught ? Iu[uz.taught] : void 0;
      if (!Ez) return bz;
      const nz = `${zz}|${Ez.output}`;
      let iz = Bu.get(nz);
      return iz || (iz = {
        ...bz,
        bench: Ez
      }, Bu.set(nz, iz)), iz
    }
    const Yu = ["Diamond", "Moonstone"];

    function ku(zz) {
      return new Set(zz.flatMap((zz => zz.bonus ? [zz.output, zz.bonus.item] : [zz.output])).filter((zz => !Yu.includes(zz))))
    }
    const zb = Object.values(Vu).flatMap((zz => zz.recipes));
    ku(zb.filter((zz => !0 !== zz.nuclear))), ku([...zb.filter((zz => !0 === zz.nuclear)), ...Object.values(mu).flat()]);

    function ub(zz) {
      return null === zz.inputSlot && void 0 === zz.inputSlots && void 0 === zz.powerMade && void 0 === zz.fluidMade && !zz.treeCutter && void 0 === zz.table
    }

    function bb(zz) {
      return !0 === zz.treeCutter
    }
    const Eb = ["Voltite Cell"];

    function nb(zz) {
      var uz, bz;
      return null !== (uz = null === (bz = zz.fuels) || void 0 === bz ? void 0 : bz.some((zz => Eb.includes(zz)))) && void 0 !== uz && uz
    }
    const ib = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Vz.$c.map((zz => [zz, 8e3]))),
        ...Object.fromEntries(Vz.Gd.map((zz => [zz, 2e3]))),
        "Voltite Cell": 12e4
      },
      lb = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Mb = {
        "Uranium Deposit": 4e3
      };

    function tb(zz) {
      var uz;
      return null !== (uz = Object.keys(lb).find((uz => lb[uz] === zz))) && void 0 !== uz ? uz : null
    }

    function Hb(zz) {
      return Au.includes(zz)
    }

    function Ob(zz) {
      return !0 !== zz.nuclear || Mz()
    }
    var pb = bz(316);
    var db = bz(9155),
      Fb = bz(9090),
      Zb = bz(9160),
      Rb = bz(9151);
    const Kb = "Reactor Controller",
      wb = "Reactor Port",
      Xb = "Battery Cell",
      fb = ["fuel", "water", "waste"],
      sb = {
        fuel: wb,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      rb = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      ob = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Nb = "Reactor Frame",
      vb = "Reactor Glass",
      xb = {
        edge: [Nb],
        cap: [vb, wb],
        wall: [vb, wb],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Kb]
      },
      Jb = {
        edge: [Xb],
        cap: [Xb],
        wall: [Xb],
        inside: [Xb],
        ctrl: [Xb]
      },
      Ab = ["edge", "cap", "wall", "inside"],
      Tb = ["Reactor Slag"];

    function Lb(zz) {
      return Tb.includes(Pb(zz))
    }

    function Pb(zz) {
      const uz = zz.indexOf("|");
      return uz < 0 ? zz : zz.slice(0, uz)
    }

    function Gb(zz) {
      return Pb(zz) === Kb ? "reactor" : null
    }

    function ab(zz) {
      return Pb(zz) !== wb ? null : zz.endsWith("|Water") ? "water" : zz.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Vb(zz) {
      const uz = ab(zz);
      return null === uz ? null : hb(sb[fb[(fb.indexOf(uz) + 1) % fb.length]], function(zz) {
        return zz.includes(mb)
      }(zz))
    }
    const mb = "|meta|rot1|Formed",
      qb = new Set([Nb, vb, wb]);

    function hb(zz, uz) {
      var bz;
      const Ez = Pb(zz);
      if (!qb.has(Ez)) return zz;
      if (Ez !== wb) return uz ? Ez + mb : Ez;
      const nz = null !== (bz = ab(zz)) && void 0 !== bz ? bz : "fuel";
      return uz ? "fuel" === nz ? Ez + mb : `${Ez}${mb}|${"water"===nz?"Water":"Waste"}` : sb[nz]
    }

    function Ub(zz, uz) {
      const bz = EE(zz, uz);
      if ("Air" === bz) return !1;
      const Ez = "reactor" === zz ? xb : Jb;
      return Ab.some((zz => Ez[zz].includes(bz))) || "reactor" === zz && Tb.includes(bz)
    }

    function cb(zz) {
      return ob[zz]
    }

    function gb(zz) {
      var uz;
      return null !== (uz = rb[zz]) && void 0 !== uz ? uz : rb[1]
    }

    function Sb(zz) {
      const [uz, , bz] = gb(zz);
      return [bz, 0, -uz]
    }

    function yb(zz, uz, bz, Ez, nz, iz) {
      return {
        ctrl: [zz[0], zz[1], zz[2]],
        rot: rb[uz] ? uz : 1,
        w: bz,
        h: Ez,
        d: nz,
        cu: iz[0],
        cv: iz[1]
      }
    }

    function Db(zz, uz) {
      return "reactor" === zz ? [Math.floor((uz - 1) / 2), 0] : [0, 0]
    }

    function Qb(zz, uz, bz, Ez, nz) {
      let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz.rot;
      if (bz === zz.w && Ez === zz.h && nz === zz.d && iz === zz.rot) return zz;
      const [lz] = Db(uz, zz.w);
      if (zz.cu === lz && zz.cv <= 1) return yb(zz.ctrl, iz, bz, Ez, nz, Db(uz, bz));
      const Mz = (zz, uz) => Math.max(1, Math.min(uz, zz));
      return yb(zz.ctrl, iz, bz, Ez, nz, [Mz(zz.cu, bz - 2), 0 === zz.cv ? 0 : Mz(zz.cv, Ez - 2)])
    }
    const Wb = 11,
      eb = 2 * Wb + 1;
    new Uint8Array(eb * eb * eb);

    function jb(zz) {
      return zz.w * zz.h * zz.d
    }

    function Ib(zz) {
      const uz = Sb(zz.rot);
      return [zz.ctrl[0] - uz[0] * zz.cu, zz.ctrl[1] - zz.cv, zz.ctrl[2] - uz[2] * zz.cu]
    }

    function Bb(zz) {
      return zz.cv * zz.d * zz.w + zz.cu
    }

    function Cb(zz, uz) {
      const bz = uz % zz.w,
        Ez = Math.floor(uz / zz.w) % zz.d;
      return [bz, Math.floor(uz / (zz.w * zz.d)), Ez]
    }

    function Yb(zz, uz) {
      const [bz, Ez, nz] = Cb(zz, uz), iz = Ib(zz), lz = gb(zz.rot), Mz = Sb(zz.rot);
      return [iz[0] + Mz[0] * bz - lz[0] * nz, iz[1] + Ez, iz[2] + Mz[2] * bz - lz[2] * nz]
    }

    function kb(zz, uz) {
      const bz = Ib(zz),
        Ez = gb(zz.rot),
        nz = Sb(zz.rot),
        iz = uz[0] - bz[0],
        lz = uz[2] - bz[2],
        Mz = iz * nz[0] + lz * nz[2],
        tz = -(iz * Ez[0] + lz * Ez[2]),
        Hz = uz[1] - bz[1];
      return Mz < 0 || Mz >= zz.w || Hz < 0 || Hz >= zz.h || tz < 0 || tz >= zz.d ? -1 : (Hz * zz.d + tz) * zz.w + Mz
    }

    function zE(zz, uz) {
      if (uz === Bb(zz)) return "ctrl";
      const [bz, Ez, nz] = Cb(zz, uz), iz = 0 === Ez || Ez === zz.h - 1, lz = Number(0 === bz || bz === zz.w - 1) + Number(iz) + Number(0 === nz || nz === zz.d - 1);
      return lz >= 2 ? "edge" : 1 === lz ? iz ? "cap" : "wall" : "inside"
    }

    function uE(zz, uz) {
      const [bz, Ez, nz] = Cb(zz, uz);
      return 0 === bz || bz === zz.w - 1 || 0 === Ez || Ez === zz.h - 1 || 0 === nz || nz === zz.d - 1 ? -1 : ((Ez - 1) * (zz.d - 2) + (nz - 1)) * (zz.w - 2) + (bz - 1)
    }

    function bE(zz, uz) {
      const bz = zz.w - 2,
        Ez = zz.d - 2,
        nz = uz % bz + 1,
        iz = Math.floor(uz / bz) % Ez + 1;
      return ((Math.floor(uz / (bz * Ez)) + 1) * zz.d + iz) * zz.w + nz
    }

    function EE(zz, uz) {
      const bz = Pb(uz);
      return "reactor" === zz && bz === Kb ? Nb : bz
    }

    function nE(zz, uz, bz) {
      const Ez = "ctrl" === uz ? Pb(bz) : EE(zz, bz);
      return ("reactor" === zz ? xb : Jb)[uz].includes(Ez) ? "ok" : "Air" === Ez ? "missing" : Ub(zz, bz) ? "wrong" : "blocked"
    }

    function iE(zz, uz) {
      return "battery" === zz ? Xb : "inside" === uz ? null : function(zz, uz) {
        if ("inside" === uz || "ctrl" === uz || "battery" === zz) return null;
        return "edge" === uz ? Nb : vb
      }(zz, uz)
    }
    const lE = {
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
      ME = "Collider",
      tE = "Laser",
      HE = "Star Alloy",
      OE = "Glow Dust",
      pE = [ME, "_Collider Focus"];

    function dE(zz) {
      return pE.indexOf(Pb(zz))
    }

    function FE(zz) {
      return Pb(zz) === tE
    }

    function ZE(zz) {
      return [
        [zz[0], zz[1], zz[2]],
        [zz[0], zz[1] + 1, zz[2]]
      ]
    }
    const RE = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function KE(zz, uz, bz) {
      const Ez = RE[uz];
      return [zz[0] + Ez[0] * bz, zz[1], zz[2] + Ez[2] * bz]
    }

    function wE(zz, uz) {
      if (uz[1] !== zz[1]) return null;
      const bz = uz[0] - zz[0],
        Ez = uz[2] - zz[2];
      if (0 !== bz === (0 !== Ez)) return null;
      const nz = Math.abs(bz + Ez);
      if (nz > lE.LASER_D) return null;
      return {
        dir: Ez < 0 ? 0 : bz > 0 ? 1 : Ez > 0 ? 2 : 3,
        oM: nz
      }
    }

    function XE(zz, uz, bz) {
      const Ez = uz => Math.abs(zz[0] - uz[0]) <= 1 && Math.abs(zz[1] - uz[1]) <= 1;
      return Ez(uz) || Ez(bz)
    }

    function fE(zz, uz) {
      return function(zz, uz, bz, Ez) {
        return [0, 1, 2, 3].map((nz => {
          for (let iz = 1; iz <= lE.LASER_D; iz++) {
            const lz = KE(zz, nz, iz);
            if (XE([lz[0], lz[2]], uz, bz) || !Ez(lz)) return !1
          }
          return !0
        }))
      }(ZE(zz)[1], uz.spawnXZ, uz.coreXZ, (zz => zz[1] >= db.s && zz[1] < db.s + db.t && zz[0] >= uz.minXZ[0] && zz[0] <= uz.maxXZ[0] && zz[2] >= uz.minXZ[1] && zz[2] <= uz.maxXZ[1]))
    }
    const sE = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function rE(zz) {
      return Math.max(48 + 16 * zz, wz(zz).machineAllowance)
    }
    const oE = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function NE(zz) {
      const uz = zz.split("|")[0];
      return oE.includes(uz) ? "Solar Panel" : uz === Zb.b ? "Fluid Pipe" : dE(uz) >= 0 ? "Collider" : (bz = uz, sE.includes(bz) ? uz : null);
      var bz
    }
    const vE = "buildAFactory2Game:solarPanelDescription";
    const xE = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function JE(zz, uz) {
      var bz;
      return null !== (bz = xE.find((bz => {
        var Ez;
        return (null !== (Ez = zz.level(bz)) && void 0 !== Ez ? Ez : 0) >= uz
      }))) && void 0 !== bz ? bz : null
    }
    const AE = "buildAFactory2Game:";
    let TE = null;
    const LE = {
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
      PE = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      GE = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      aE = {
        "Loot Chest": `${AE}lookRuinChestName`
      };

    function VE(zz) {
      return "object" === typeof zz && null !== zz && "translationKey" in zz && "string" === typeof zz.translationKey ? zz.translationKey : null
    }

    function mE(zz, uz) {
      var bz;
      return null !== (bz = VE(zz.displayName(uz))) && void 0 !== bz ? bz : `item:${(0,Vz.ze)(uz)}`
    }

    function qE(zz, uz) {
      var bz, Ez, nz, iz;
      let lz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uz;
      if ("Solar Panel" === NE(uz)) return {
        name: VE(zz.displayName("Solar Panel")),
        detail: vE,
        detailItem: null
      };
      const tz = uz.endsWith(" Ore"),
        Hz = (TE ??= new Set([...Object.keys((0, Fb.g)()), ...Object.keys((0, Zb.t)())].map((zz => zz.split("|")[0]))), TE).has(uz),
        Oz = tz || Hz ? null : function(zz) {
          var uz;
          return zz.endsWith(" Log") && !zz.startsWith("Barkless ") ? "lookLog" : zz.endsWith(" Sapling") ? "lookSapling" : zz.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (uz = LE[zz]) && void 0 !== uz ? uz : null
        }(uz);
      if (!zz.isBlock(uz) || !tz && !Hz && null === Oz) return null;
      const pz = null !== (bz = null !== (Ez = aE[uz]) && void 0 !== Ez ? Ez : VE(null !== (nz = zz.displayName(lz)) && void 0 !== nz ? nz : zz.displayName(uz))) && void 0 !== bz ? bz : `item:${(0,Vz.ze)(uz)}`;
      if (null !== Oz) return {
        name: pz,
        detail: `${AE}${Oz}`,
        detailItem: null
      };
      const dz = null !== (iz = PE[uz]) && void 0 !== iz ? iz : Mz() ? GE[uz] : void 0;
      if (Hz && void 0 !== dz) return {
        name: pz,
        detail: `${AE}${dz}`,
        detailItem: null
      };
      const Fz = lb[uz];
      if (void 0 !== Fz) return {
        name: pz,
        detail: `${AE}lookDeposit`,
        detailItem: mE(zz, Fz)
      };
      const Zz = zz.harvestLevel(uz);
      if (tz && "rock" === zz.harvestType(uz) && 0 !== Zz) {
        const uz = JE(zz, null !== Zz && void 0 !== Zz ? Zz : 0);
        if (uz === xE[0]) return {
          name: pz,
          detail: `${AE}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== uz) return {
          name: pz,
          detail: `${AE}lookPickaxe`,
          detailItem: mE(zz, uz)
        }
      }
      return {
        name: pz,
        detail: VE(zz.description(uz)),
        detailItem: null
      }
    }

    function hE(zz) {
      return zz < db.s - 24
    }
    const UE = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const cE = "Wrench",
      gE = "Nova Wrench";

    function SE(zz) {
      return zz === cE || zz === gE
    }
    const yE = [...db.M, "Belt Lift", "Belt Drop"];
    const DE = ["Belt Lift", "Belt Drop"],
      QE = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function WE(zz) {
      return zz.split("|")[0]
    }

    function eE(zz) {
      const uz = /\|rot(\d)/.exec(zz);
      return uz ? Number(uz[1]) : 1
    }

    function jE(zz) {
      return zz % 4 + 1
    }

    function IE(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === uz && "" === bz ? zz : `${zz}|meta|rot${uz}${bz}`
    }

    function BE(zz) {
      return WE(zz) === db.A ? (0, db.U)(zz) ? "gateRight" : "gateLeft" : (0, db.Z)(zz)
    }

    function CE(zz) {
      const uz = WE(zz),
        bz = eE(zz);
      if (db.M.includes(uz)) return (0, db.Q)(uz, jE(bz), null);
      if (uz === db.k) return (0, db.cb)(jE(bz), (0, db.W)(zz));
      if (uz === db.C) {
        const Ez = QE[(0, db.Z)(zz)];
        return null === Ez ? IE(uz, jE(bz)) : IE(uz, bz, db.G[Ez])
      }
      return uz === db.A ? (0, db.U)(zz) ? IE(uz, jE(bz)) : IE(uz, bz, db.r) : Rb.b.includes(uz) && !DE.includes(uz) || Hb(uz) ? IE(uz, jE(bz)) : null
    }

    function YE(zz) {
      return Rb.b.includes(zz) || Hb(zz) || null !== NE(zz)
    }

    function kE(zz) {
      return "Solar Panel" === NE(zz)
    }
    const zn = "buildAFactory2Game:",
      un = {
        leftFront: `${zn}lookSplitDetail_leftFront`,
        frontRight: `${zn}lookSplitDetail_frontRight`,
        gateRight: `${zn}lookGateDetail_gateRight`
      };

    function bn(zz, uz) {
      var bz;
      let Ez = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const nz = BE(zz),
        iz = null === nz ? null : `${zn}${nz.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${nz}`,
        lz = null === nz ? null : null !== (bz = un[nz]) && void 0 !== bz ? bz : null;
      if (SE(uz) && Ez) {
        const bz = WE(zz);
        return uz === gE && Mz() && function(zz) {
          return yE.includes(WE(zz))
        }(zz) ? {
          mode: iz,
          detail: lz,
          next: `${zn}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: iz,
          detail: lz,
          next: YE(bz) && !kE(bz) ? `${zn}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const tz = SE(uz) ? CE(zz) : null;
      if (null === tz) return {
        mode: iz,
        detail: lz,
        next: null,
        nextState: null
      };
      const Hz = BE(tz);
      return null === Hz || eE(tz) !== eE(zz) ? {
        mode: iz,
        detail: lz,
        next: `${zn}lookWrenchTurn`,
        nextState: null
      } : {
        mode: iz,
        detail: lz,
        next: `${zn}lookWrenchNext`,
        nextState: `${zn}lookWrenchState_${Hz}`
      }
    }
    const En = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const nn = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function Mn(zz) {
      return [0, 1, 2, 3].map((uz => 0 !== (zz & 1 << uz)))
    }

    function tn(zz) {
      const uz = [];
      for (let bz = 8; bz + 2 < zz.length; bz += 3) uz.push([zz[bz], zz[bz + 1], zz[bz + 2]]);
      return {
        focus: [zz[0], zz[1], zz[2]],
        lasers: Mn(zz[3]),
        open: Mn(zz[4]),
        live: Mn(zz[5]),
        on: 1 === zz[6],
        state: nn[zz[7]],
        blockers: uz
      }
    }
    const Hn = "Arc Caster",
      On = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      pn = (Object.values(On), "Jet Chestplate"),
      dn = "Nova Jet Chestplate",
      Fn = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Zn = Object.values(Fn);

    function Rn(zz, uz, bz) {
      return Math.min(function(zz) {
        return Mz() && pz(zz) >= 5 ? 20 : 10
      }(bz), Math.floor(function(zz, uz) {
        return Math.max(0, zz) + (Mz() ? Math.max(0, uz) : 0)
      }(zz, uz) / 5))
    }

    function Kn(zz, uz, bz) {
      const Ez = Rn(uz, bz, zz),
        nz = pz(zz),
        iz = (nz >= 3 ? 55 : nz >= 1 ? 50 : zz >= 8 ? 45 : 30) + Ez,
        lz = Math.max(100 + Ez, 2 * iz);
      return {
        arcDamage: iz,
        arcPierce: zz >= 7 ? 2 : 1,
        arcChain: zz >= 10,
        barrierMax: (nz >= 4 ? 100 : nz >= 2 ? 90 : zz >= 9 ? 80 : zz >= 6 ? 60 : 40) + 5 * Ez,
        barrierRegenPerS: nz >= 5 ? 20 : zz >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Ez,
        novaShieldRegenPerS: 32,
        bladeDamage: lz,
        bladePunch: Math.round(.5 * lz),
        forgeRank: Ez
      }
    }
    const wn = {
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
    var Xn = bz(36262),
      fn = bz(36080),
      sn = bz(36071),
      rn = bz(20),
      Nn = bz(1595),
      vn = bz(1038),
      xn = bz.n(vn);

    function Jn(zz) {
      return !0 === zz.field
    }
    const An = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function Tn(zz) {
      return An.has(zz) ? `buildAFactory2Game:itemPlural_${(0,Vz.ze)(zz)}` : null
    }
    var Ln = bz(1181),
      Pn = bz(1047),
      Gn = bz(1856),
      an = bz(1846),
      Vn = bz(36246),
      mn = bz(36254),
      qn = bz(22),
      hn = bz(36243);
    const Un = "baf2QuestView",
      cn = "baf2PlayerY",
      gn = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class Sn {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = zz, this.view = {
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
      set(zz, uz) {
        var bz, Ez, nz, iz, lz, Mz, tz, Hz;
        const Oz = JSON.stringify(zz.baf2QuestName) === JSON.stringify(this.view.name),
          pz = new Set(this.view.rows.filter((zz => zz.done)).map((zz => zz.id))),
          dz = new Set(this.view.rows.filter((zz => zz.justFinished)).map((zz => zz.id))),
          Fz = zz.baf2QuestSide,
          Zz = null !== Fz && !0 === zz.baf2QuestSideFocus;
        let Rz = !1,
          Kz = 0;
        const wz = zz.baf2QuestSteps.map((zz => {
            const uz = Bn(zz, gn.has(zz[0]) ? zz[0] : "" + Kz++),
              bz = Oz && uz.done && !pz.has(uz.id);
            return uz.justFinished = bz || Oz && uz.done && dz.has(uz.id), Rz ||= bz, uz
          })),
          Xz = In(wz);
        Xz >= 0 && !Zz && (wz[Xz].current = !0);
        const fz = !Oz && null !== zz.baf2QuestName,
          sz = JSON.stringify(Fz && [Fz[0], Fz[1]]),
          rz = sz === JSON.stringify(null !== (bz = null === (Ez = this.view.side) || void 0 === Ez ? void 0 : Ez.name) && void 0 !== bz ? bz : null),
          oz = null !== Fz && !this.sidesSeen.has(sz);
        oz && this.sidesSeen.add(sz), this.serverTutorial = null !== (nz = zz.baf2QuestTutorial) && void 0 !== nz ? nz : "on", (null !== (iz = zz.baf2QuestTutorialSeq) && void 0 !== iz ? iz : 0) >= this.pickSeq && this.endPick();
        const Nz = !Oz || !rz || zz.baf2QuestTier !== this.view.tier;
        this.view = {
          name: zz.baf2QuestName,
          rows: wz,
          reward: zz.baf2QuestReward,
          goal: zz.baf2QuestGoal,
          pulse: this.view.pulse + (Rz || fz ? 1 : 0),
          itemNames: uz,
          side: Fz && {
            name: [Fz[0], Fz[1]],
            row: {
              ...Bn(Fz[2], "side"),
              current: Zz
            },
            goal: null !== (lz = Fz[3]) && void 0 !== lz ? lz : null
          },
          sideCameUpAt: oz ? Date.now() : this.view.sideCameUpAt,
          tier: zz.baf2QuestTier,
          core: zz.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (Mz = zz.baf2QuestAlso) && void 0 !== Mz ? Mz : [],
          depth: null !== (tz = zz.baf2QuestDepth) && void 0 !== tz ? tz : null,
          tutorial: null !== (Hz = this.pickedTutorial) && void 0 !== Hz ? Hz : this.serverTutorial,
          tutorialKnown: !0
        }, this.sK(), Rz && this.scheduleClear(), Nz && this.requestBook()
      }
      setTutorial(zz) {
        return this.endPick(), this.pickedTutorial = zz, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.sK()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: zz
        }, this.sK(), this.pickSeq
      }
      onPlayerY(zz) {
        const uz = Math.floor(zz);
        uz !== this.playerY && (this.playerY = uz, this.view.depth && qn.k.sK(cn, uz))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(zz) {
        this.view = {
          ...this.view,
          chapters: zz.baf2BookChapters
        }, this.sK()
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
            rows: this.view.rows.map((zz => zz.justFinished ? {
              ...zz,
              justFinished: !1
            } : zz))
          }, this.sK()
        }), 2400)
      }
      sK() {
        qn.k.sK(Un, this.view, !0)
      }
    }

    function yn(zz, uz) {
      return zz.sideCameUpAt > 0 && uz - zz.sideCameUpAt < 2400
    }

    function Dn(zz) {
      return (null === zz.name || Qn(zz)) && null === zz.side && null !== zz.chapters
    }

    function Qn(zz) {
      var uz;
      return "quest_forgeOngoing" === (null === (uz = zz.name) || void 0 === uz ? void 0 : uz[0])
    }

    function Wn(zz) {
      return zz.filter((zz => !gn.has(zz.key)))
    }

    function en(zz) {
      return zz.key.startsWith("stepCraft")
    }

    function jn(zz, uz) {
      const bz = new Set,
        Ez = zz.side ? [...zz.rows, zz.side.row] : zz.rows;
      for (const iz of Ez)
        if (!iz.done) {
          !iz.item || uz && !en(iz) || bz.add(iz.item);
          for (const [zz, uz, Ez] of null !== (nz = iz.chips) && void 0 !== nz ? nz : []) {
            var nz;
            uz < Ez && bz.add(zz)
          }
        } return bz
    }

    function In(zz) {
      const uz = zz.findIndex((zz => !zz.done && !zz.away));
      return uz >= 0 ? uz : zz.findIndex((zz => !zz.done))
    }

    function Bn(zz, uz) {
      let [bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz] = zz;
      return {
        id: uz,
        key: bz,
        params: Ez,
        item: nz,
        amount: iz,
        total: lz,
        done: Mz,
        chips: null !== tz && void 0 !== tz ? tz : null,
        current: !1,
        away: !0 === Hz,
        madeFor: null !== Oz && void 0 !== Oz ? Oz : [],
        also: null !== pz && void 0 !== pz ? pz : [],
        justFinished: !1
      }
    }
    const Cn = "baf2QuestItems",
      Yn = new Set;
    let kn = new Set,
      zi = null;

    function ui(zz) {
      const uz = az(zz.tutorial),
        bz = uz ? jn(zz, !0) : Yn;
      "inventory" === rn.e.get("openInGameMenuName") ? (zi = null, (0, hn.x)(bz)) : zi = bz;
      const Ez = uz ? jn(zz, !1) : Yn;
      (0, mn.c)(Ez, kn) || (kn = Ez, qn.k.sK(Cn, kn))
    }

    function bi() {
      return (0, Vn.e)(Cn, (() => kn))
    }
    var Ei = bz(9007),
      ni = bz(3043);

    function ii(zz) {
      const uz = (0, ni.e)(zz),
        bz = void 0 === uz ? void 0 : (0, Ei.displayNameOf)(uz);
      return "object" === typeof bz && null !== bz && "translationKey" in bz && "string" === typeof bz.translationKey ? bz.translationKey : `item:${(0,Vz.ze)(zz)}`
    }

    function li(zz, uz) {
      return zz(ii(uz))
    }
    const Mi = [{
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

    function ti(zz, uz) {
      return [`Deposit Seed (${zz})`, {
        item: lb[`${zz} Deposit`],
        amount: uz
      }]
    }
    const Hi = Object.fromEntries([ti("Coal", 8), ti("Iron", 8), ti("Copper", 8), ti("Gold", 6), ti("Voltite", 4), ti("Uranium", 4)]),
      Oi = "Relay Coil",
      di = new Map;

    function Fi(zz) {
      let uz = di.get(zz);
      if (!uz) {
        const bz = Math.max(1, zz);
        uz = Mi.filter((zz => {
          var uz;
          return bz >= zz.fromTier && bz <= (null !== (uz = zz.untilTier) && void 0 !== uz ? uz : 1 / 0)
        })).map((zz => zz.later && bz >= zz.later.tier ? {
          ...zz,
          weight: zz.later.weight
        } : zz)), di.set(zz, uz)
      }
      return uz
    }

    function Zi(zz) {
      return Fi(zz).some((zz => {
        let {
          item: uz
        } = zz;
        return uz === Oi
      }))
    }

    function Ri(zz) {
      return zz.startsWith("Deposit Seed (")
    }

    function Ki(zz, uz) {
      const bz = Fi(zz);
      return uz ? bz.filter((zz => uz(zz.item))) : bz
    }

    function wi(zz) {
      return zz.reduce(((zz, uz) => zz + uz.weight), 0)
    }

    function Xi(zz, uz) {
      const bz = Ki(zz, uz),
        Ez = wi(bz);
      return bz.map((zz => ({
        find: zz,
        chance: zz.weight / Ez
      })))
    }
    const fi = 6e4,
      si = new Intl.NumberFormat("en-US");

    function ri(zz, uz) {
      const bz = zz >= 10 ? Math.round(zz) : Math.round(10 * zz) / 10;
      return 0 === bz ? "0" : `${uz}${si.format(bz)}`
    }

    function oi(zz) {
      return zz < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? si.format(zz) : zz < 1e6 ? `${zz<1e5?Math.floor(zz/100)/10:Math.floor(zz/1e3)}k` : Math.floor(zz / 1e5) / 10 + "M"
    }

    function Ni(zz) {
      return zz < 0 ? "\u2212" + -zz : String(zz)
    }

    function vi(zz, uz) {
      const bz = Math.max(1, Math.round(uz));
      if (bz < 60) return zz("buildAFactory2Game:durationSeconds", {
        seconds: String(bz)
      });
      const Ez = Math.round(bz / 60);
      if (Ez < 60) return zz("buildAFactory2Game:durationMinutes", {
        minutes: String(Ez)
      });
      const nz = String(Math.floor(Ez / 60));
      return Ez % 60 === 0 ? zz("buildAFactory2Game:durationWholeHours", {
        hours: nz
      }) : zz("buildAFactory2Game:durationHours", {
        hours: nz,
        minutes: String(Ez % 60)
      })
    }
    const xi = "(max-height: 420px), (max-width: 650px)";

    function Ji() {
      return "undefined" !== typeof window && window.matchMedia(xi).matches
    }

    function Ai(zz) {
      const uz = window.matchMedia(xi),
        bz = () => {
          zz(uz.matches)
        };
      return uz.addEventListener("change", bz), () => {
        uz.removeEventListener("change", bz)
      }
    }
    var Ti = bz(1089);

    function Li(zz, uz) {
      return null !== zz && zz > uz + 1
    }

    function Pi(zz) {
      const uz = 100 * zz;
      return String(uz <= 0 || uz >= 1 ? Math.round(uz) : Math.max(.1, Math.round(10 * uz) / 10))
    }

    function Gi(zz) {
      let {
        item: uz,
        amount: bz
      } = zz;
      return (0, Ti.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Ti.jsx)(Gn.c, {
            itemName: uz,
            amount: 0
          })
        }), bz > 1 && (0, Ti.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", bz]
        })]
      })
    }

    function ai(zz) {
      let {
        label: uz,
        names: bz
      } = zz;
      const [nz, iz] = (0, Ez.useState)(!1), lz = bz.join(" / ");
      return (0, Ti.jsxs)(Ti.Fragment, {
        children: [(0, Ti.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: lz,
          "aria-expanded": nz,
          onClick: () => {
            iz(!nz)
          },
          children: uz
        }), nz && (0, Ti.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: lz
        })]
      })
    }

    function Vi(zz) {
      let {
        tier: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)(), {
        key: Ez,
        params: nz
      } = Fz(uz, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), iz = bz(`buildAFactory2Game:${Ez}`, nz);
      return (0, Ti.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Ti.jsx)(Pn.c, {
          name: "lock"
        }), iz]
      })
    }
    const mi = (0, Ez.createContext)(null);

    function qi() {
      const {
        t: zz
      } = (0, Ln.F)(), uz = (0, Ez.useContext)(mi);
      return (0, Ez.useEffect)((() => null === uz || void 0 === uz ? void 0 : uz()), [uz]), (0, Ti.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: zz("buildAFactory2Game:recipeForQuest"),
        "aria-label": zz("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Ui(zz) {
      let {
        title: uz,
        count: bz,
        children: nz,
        startOpen: iz = !0
      } = zz;
      const {
        t: lz
      } = (0, Ln.F)(), [Mz, tz] = (0, Ez.useState)((() => iz && !Ji())), [Hz, Oz] = (0, Ez.useState)(0), pz = (0, Ez.useCallback)((() => (Oz((zz => zz + 1)), () => {
        Oz((zz => zz - 1))
      })), []);
      return (0, Ti.jsxs)("div", {
        className: xn()("Baf2Recipes", {
          Open: Mz
        }),
        children: [(0, Ti.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            tz(!Mz)
          },
          "aria-expanded": Mz,
          children: [lz("buildAFactory2Game:recipesToggle", {
            title: uz,
            count: String(bz)
          }), (0, Ti.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: Mz ? "\u25be" : "\u25b8"
          })]
        }), Mz && (0, Ti.jsxs)(mi.Provider, {
          value: pz,
          children: [(0, Ti.jsx)("ul", {
            className: "Baf2RecipeList",
            children: nz
          }), Hz > 0 && (0, Ti.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Ti.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), lz("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const ci = "buildAFactory2Game:",
      gi = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Si = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      yi = {
        "Uranium Grit": iz,
        "Raw Uranium": iz
      };

    function Di(zz) {
      var uz;
      return null !== (uz = yi[zz]) && void 0 !== uz ? uz : Math.max(Bz(zz), Si[zz] ? Bz(Si[zz]) : 1, function(zz) {
        const uz = nz.findIndex((uz => uz.cost.some((uz => uz.item === zz))));
        return uz > iz ? uz : 1
      }(zz))
    }

    function Qi(zz, uz) {
      return Wi(uz) ? Di(uz) : function(zz) {
        if (gi.has(zz)) return 1;
        const uz = nz.findIndex((uz => uz.newDeposits.some((uz => {
          let {
            block: bz
          } = uz;
          return bz === zz
        }))));
        return uz < 0 ? 1 : uz + 1
      }(zz)
    }

    function Wi(zz) {
      return zz in yi || pz(Di(zz)) > 0
    }

    function ei(zz, uz) {
      return Cu(zz, {
        coupled: !1,
        taught: null,
        atomic: Mz() && uz >= 11
      }).recipes
    }

    function ji(zz, uz) {
      const bz = dz(zz, uz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pz(zz) > 0);
      return "open" === bz || "locked" === bz
    }

    function Ii(zz, uz) {
      return zz.map(((zz, bz) => ({
        value: zz,
        idx: bz,
        tier: uz(zz)
      }))).sort(((zz, uz) => zz.tier - uz.tier || zz.idx - uz.idx)).map((zz => {
        let {
          value: uz
        } = zz;
        return uz
      }))
    }

    function Bi(zz, uz, bz) {
      const Ez = dz(zz, uz);
      if ("hidden" === Ez || "open" === Ez) return null;
      if ("teaser" === Ez) return {
        tag: {
          translationKey: `${ci}${bz?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${ci}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const nz = Fz(zz, {
          tier: bz ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        iz = Fz(zz, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${ci}${nz.key}`,
          params: nz.params
        },
        reason: {
          translationKey: `${ci}${iz.key}`,
          params: iz.params
        }
      }
    }

    function Ci(zz) {
      return !Ri(zz)
    }

    function Yi(zz) {
      let {
        seconds: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)();
      return (0, Ti.jsx)(Ui, {
        title: bz("buildAFactory2Game:recipesCuts", {
          seconds: uz
        }),
        count: 1,
        children: (0, Ti.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Ti.jsx)(Gi, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Ti.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ti.jsx)(Gi, {
            item: "Maple Log",
            amount: 1
          }), (0, Ti.jsx)("span", {
            className: "Baf2RecipeName",
            children: bz("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function ki(zz) {
      let {
        fertilised: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)();
      return (0, Ti.jsxs)(Ui, {
        title: bz("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Ti.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Ti.jsx)(Gi, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Ti.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ti.jsx)(Gi, {
            item: "Wheat",
            amount: 1
          }), (0, Ti.jsx)(Gi, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Ti.jsx)("span", {
            className: "Baf2RecipeName",
            children: bz("buildAFactory2Game:recipeField")
          })]
        }), (0, Ti.jsxs)("li", {
          className: xn()("Baf2Recipe", {
            InUse: uz
          }),
          children: [(0, Ti.jsx)(Gi, {
            item: "Fertiliser",
            amount: 1
          }), (0, Ti.jsx)("span", {
            className: "Baf2RecipeName",
            children: bz("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function zl(zz) {
      let {
        tier: uz,
        seconds: bz
      } = zz;
      const {
        t: Ez
      } = (0, Ln.F)(), nz = function(zz) {
        return zz >= 5 ? ou : ru
      }(uz);
      return (0, Ti.jsx)(Ui, {
        title: Ez("buildAFactory2Game:recipesBringsUp", {
          seconds: bz
        }),
        count: nz.length,
        children: nz.map((zz => {
          let {
            item: uz,
            chance: bz
          } = zz;
          return (0, Ti.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Ti.jsx)(Gi, {
              item: uz,
              amount: 1
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeName",
              children: li(Ez, uz)
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Ez("buildAFactory2Game:recipeChance", {
                percent: Pi(bz)
              })
            })]
          }, uz)
        }))
      })
    }

    function ul(zz) {
      let {
        tier: uz,
        seconds: bz,
        noSeeds: Ez
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)(), iz = bi(), lz = Xi(uz, Ez ? Ci : void 0), Mz = Ez && Xi(uz).length > lz.length, tz = Zi(uz);
      return (0, Ti.jsxs)(Ui, {
        title: nz("buildAFactory2Game:recipesRecycles", {
          seconds: bz
        }),
        count: lz.length,
        children: [lz.map((zz => {
          let {
            find: uz,
            chance: bz
          } = zz;
          return (0, Ti.jsxs)("li", {
            className: "Baf2Recipe",
            children: [iz.has(uz.item) && (0, Ti.jsx)(qi, {}), (0, Ti.jsx)(Gi, {
              item: uz.item,
              amount: uz.amount
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeName",
              children: li(nz, uz.item)
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: nz("buildAFactory2Game:recipeChance", {
                percent: Pi(bz)
              })
            })]
          }, uz.item)
        })), Mz && (0, Ti.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ti.jsx)("span", {
            className: "Baf2RecipeName",
            children: nz("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), tz && (0, Ti.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ti.jsx)("span", {
            className: "Baf2RecipeName",
            children: nz("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function bl(zz) {
      let {
        tier: uz,
        seconds: bz
      } = zz;
      const {
        t: Ez
      } = (0, Ln.F)(), nz = Object.entries(Hi).filter((zz => {
        let [, {
          item: bz
        }] = zz;
        return ji(Di(bz), uz, Wi(bz))
      }));
      return (0, Ti.jsx)(Ui, {
        title: Ez("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: bz
        }),
        count: nz.length,
        children: nz.map((zz => {
          let [uz, {
            item: bz,
            amount: nz
          }] = zz;
          return (0, Ti.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Ti.jsx)(Gi, {
              item: uz,
              amount: 1
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ti.jsx)(Gi, {
              item: bz,
              amount: nz
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeName",
              children: li(Ez, bz)
            })]
          }, uz)
        }))
      })
    }

    function El(zz) {
      let {
        tier: uz,
        seconds: bz
      } = zz;
      const {
        t: Ez
      } = (0, Ln.F)(), nz = bi(), iz = Ii(Object.entries(lb).filter((zz => {
        let [bz, Ez] = zz;
        return ji(Qi(bz, Ez), uz, Wi(Ez))
      })), (zz => {
        let [uz, bz] = zz;
        return Qi(uz, bz)
      }));
      return (0, Ti.jsx)(Ui, {
        title: Ez("buildAFactory2Game:recipesDigs", {
          seconds: bz
        }),
        count: iz.length,
        children: iz.map((zz => {
          let [bz, iz] = zz;
          const lz = Qi(bz, iz),
            Mz = lz > uz ? lz : null,
            tz = Mb[bz],
            Hz = null === Mz && nz.has(iz);
          return (0, Ti.jsxs)("li", {
            className: xn()("Baf2Recipe", {
              Locked: null !== Mz,
              Far: Li(Mz, uz)
            }),
            children: [Hz && (0, Ti.jsx)(qi, {}), (0, Ti.jsx)(Gi, {
              item: bz,
              amount: 1
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ti.jsx)(Gi, {
              item: iz,
              amount: 1
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeName",
              children: li(Ez, iz)
            }), void 0 !== tz && (0, Ti.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Ez("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / tz)
              })
            }), null !== Mz && (0, Ti.jsx)(Vi, {
              tier: Mz
            })]
          }, bz)
        }))
      })
    }

    function nl(zz) {
      var uz;
      let {
        def: bz,
        seconds: Ez
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)();
      return (0, Ti.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ti.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (uz = bz.fuels) && void 0 !== uz ? uz : []).map((zz => (0, Ti.jsx)(Gi, {
            item: zz,
            amount: 1
          }, zz))), (0, Ti.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ti.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ti.jsx)(Pn.c, {
              name: "bolt"
            }), nz("buildAFactory2Game:recipePower", {
              power: Cz(bz.powerMade),
              seconds: Ez
            })]
          })]
        })
      })
    }

    function il(zz) {
      let {
        def: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)();
      return (0, Ti.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ti.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ti.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ti.jsx)(Pn.c, {
              name: "bolt"
            }), bz("buildAFactory2Game:recipeMixer", {
              cryo: ri((0, Yz.B)(uz, uz.cryoMade), "")
            })]
          })
        })
      })
    }

    function ll(zz) {
      let {
        def: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)();
      return (0, Ti.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ti.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ti.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ti.jsx)(Pn.c, {
              name: "bolt"
            }), bz("buildAFactory2Game:recipeCondenser", {
              power: ri((0, Yz.B)(uz, uz.powerPerOp), ""),
              water: ri((0, Yz.B)(uz, uz.fluidMade), "")
            })]
          })
        })
      })
    }

    function Ml(zz) {
      let {
        kind: uz,
        def: bz,
        input: Ez,
        tier: nz,
        noSeeds: iz = !1
      } = zz;
      const lz = String(bz.opMs / 1e3);
      return bb(bz) ? (0, Ti.jsx)(Yi, {
        seconds: lz
      }) : bz.field ? (0, Ti.jsx)(ki, {
        fertilised: null !== Ez
      }) : bz.table ? (0, Ti.jsx)(zl, {
        tier: nz,
        seconds: lz
      }) : bz.recycles ? (0, Ti.jsxs)(Ti.Fragment, {
        children: [(0, Ti.jsx)(ul, {
          tier: nz,
          seconds: lz,
          noSeeds: iz
        }), (0, Ti.jsx)(bl, {
          tier: nz,
          seconds: lz
        })]
      }) : ub(bz) ? (0, Ti.jsx)(El, {
        tier: nz,
        seconds: lz
      }) : void 0 !== bz.fluidMade ? (0, Ti.jsx)(ll, {
        def: bz
      }) : void 0 !== bz.cryoMade ? (0, Ti.jsx)(il, {
        def: bz
      }) : void 0 !== bz.powerMade ? (0, Ti.jsx)(nl, {
        def: bz,
        seconds: lz
      }) : (0, Ti.jsx)(tl, {
        kind: uz,
        input: Ez,
        tier: nz,
        seconds: lz
      })
    }

    function tl(zz) {
      let {
        kind: uz,
        input: bz,
        tier: Ez,
        seconds: nz
      } = zz;
      const {
        t: iz
      } = (0, Ln.F)(), lz = bi(), Mz = Ii(function(zz) {
        const uz = new Map;
        for (const nz of zz) {
          var bz, Ez;
          const zz = [nz.output, nz.outputAmount, nz.inputAmount, null === (bz = nz.bonus) || void 0 === bz ? void 0 : bz.item, null === (Ez = nz.bonus) || void 0 === Ez ? void 0 : Ez.chance].join("|"),
            iz = uz.get(zz);
          iz ? iz.inputs.push(nz.input) : uz.set(zz, {
            inputs: [nz.input],
            inputAmount: nz.inputAmount,
            output: nz.output,
            outputAmount: nz.outputAmount,
            bonus: nz.bonus
          })
        }
        return [...uz.values()]
      }(ei(uz, Ez).filter(Ob)), (zz => Di(zz.output))).filter((zz => ji(Di(zz.output), Ez, Wi(zz.output))));
      return (0, Ti.jsx)(Ui, {
        title: iz("buildAFactory2Game:recipesEach", {
          seconds: nz
        }),
        count: Mz.length,
        children: Mz.map((zz => {
          const uz = null !== bz && zz.inputs.includes(bz),
            nz = zz.inputs.length > 3 ? [uz ? bz : zz.inputs[0]] : zz.inputs,
            Mz = Di(zz.output) > Ez ? Di(zz.output) : null,
            tz = null === Mz && lz.has(zz.output);
          return (0, Ti.jsxs)("li", {
            className: xn()("Baf2Recipe", {
              InUse: uz,
              Locked: null !== Mz,
              Far: Li(Mz, Ez)
            }),
            children: [tz && (0, Ti.jsx)(qi, {}), nz.map(((uz, bz) => (0, Ti.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [bz > 0 && (0, Ti.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Ti.jsx)(Gi, {
                item: uz,
                amount: zz.inputAmount
              })]
            }, uz))), nz.length < zz.inputs.length && (0, Ti.jsx)(ai, {
              label: iz("buildAFactory2Game:recipeMore", {
                count: String(zz.inputs.length - nz.length)
              }),
              names: zz.inputs.filter((zz => !nz.includes(zz))).map((zz => li(iz, zz)))
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ti.jsx)(Gi, {
              item: zz.output,
              amount: zz.outputAmount
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeName",
              children: li(iz, zz.output)
            }), zz.bonus && (0, Ti.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [iz("buildAFactory2Game:recipeBonus", {
                percent: Pi(zz.bonus.chance)
              }), (0, Ti.jsx)(Gi, {
                item: zz.bonus.item,
                amount: 1
              })]
            }), null !== Mz && (0, Ti.jsx)(Vi, {
              tier: Mz
            })]
          }, `${zz.output}|${zz.inputs[0]}`)
        }))
      })
    }

    function Hl(zz) {
      let {
        taught: uz,
        tier: bz
      } = zz;
      const {
        t: Ez
      } = (0, Ln.F)(), nz = bi(), iz = Ii(Object.values(Iu), (zz => zz.tier)).filter((zz => ji(zz.tier, bz)));
      return (0, Ti.jsx)(Ui, {
        title: Ez("buildAFactory2Game:benchCanMake"),
        count: iz.length,
        startOpen: !1,
        children: iz.map((zz => {
          const iz = zz.tier > bz,
            lz = !iz && nz.has(zz.output);
          return (0, Ti.jsxs)("li", {
            className: xn()("Baf2Recipe", {
              InUse: zz.output === uz,
              Locked: iz,
              Far: Li(iz ? zz.tier : null, bz)
            }),
            children: [lz && (0, Ti.jsx)(qi, {}), (0, Ti.jsx)(Gi, {
              item: zz.output,
              amount: zz.outputAmount
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeName",
              children: li(Ez, zz.output)
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), zz.inputs.map((zz => (0, Ti.jsx)(Gi, {
              item: zz.item,
              amount: zz.amount
            }, zz.item))), iz && (0, Ti.jsx)(Vi, {
              tier: zz.tier
            })]
          }, zz.output)
        }))
      })
    }
    var Ol, pl, dl, Fl, Zl;
    const Rl = Vu.Generator,
      Kl = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      wl = 1e3 * (null !== (Ol = Rl.powerMade) && void 0 !== Ol ? Ol : 0) / Rl.opMs,
      Xl = Math.min(...(null !== (pl = Rl.fuels) && void 0 !== pl ? pl : []).map((zz => ib[zz]))) / 1e3,
      fl = Vu["Volt Engine"],
      sl = 1e3 * (null !== (dl = fl.powerMade) && void 0 !== dl ? dl : 0) / fl.opMs,
      rl = ib[null !== (Fl = null === (Zl = fl.fuels) || void 0 === Zl ? void 0 : Zl[0]) && void 0 !== Fl ? Fl : ""] / 1e3;

    function ol(zz) {
      let {
        item: uz,
        label: bz,
        value: Ez,
        note: nz,
        dim: iz
      } = zz;
      return (0, Ti.jsxs)("li", {
        className: xn()("Baf2PowerRow", {
          Dim: iz
        }),
        children: [(0, Ti.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Ti.jsx)(Gn.c, {
            itemName: uz,
            amount: 0
          })
        }), (0, Ti.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Ti.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: bz
          }), nz && (0, Ti.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: nz
          })]
        }), (0, Ti.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Ez
        })]
      })
    }

    function Nl(zz, uz, bz, Ez) {
      var nz;
      const iz = void 0 === Ez ? Vu[zz] : function(zz, uz) {
          if (null === uz) return zz;
          let bz = ez.get(uz);
          return bz || (bz = {
            ...zz,
            powerPerOp: Wz(zz, uz),
            farmMob: uz
          }, ez.set(uz, bz)), bz
        }(Vu[zz], Ez),
        lz = uz && iz.couplable ? yu(iz, bz) : iz;
      return 1e3 * (null !== (nz = lz.powerPerOp) && void 0 !== nz ? nz : 0) / lz.opMs
    }

    function vl(zz) {
      var uz, bz, Ez, nz, iz, lz, Mz, tz;
      let {
        message: Hz
      } = zz;
      const {
        t: Oz
      } = (0, Ln.F)(), pz = (zz, uz) => Oz("buildAFactory2Game:powerPerSecond", {
        rate: ri(zz, uz)
      }), [dz, Fz] = Hz.baf2PowerGenerators, Zz = Hz.baf2PowerGeneratorFuel, Rz = Hz.baf2PowerSunPanels, Kz = null !== (uz = Hz.baf2PowerSunShare) && void 0 !== uz ? uz : 1, wz = Hz.baf2PowerVaults, Xz = Hz.baf2PowerUsers, [fz, sz] = null !== (bz = Hz.baf2PowerEngines) && void 0 !== bz ? bz : [0, 0], rz = null !== (Ez = Hz.baf2PowerEngineCells) && void 0 !== Ez ? Ez : 0, oz = null !== (nz = Hz.baf2PowerPads) && void 0 !== nz ? nz : 0, Nz = null !== (iz = Hz.baf2PowerCharge) && void 0 !== iz ? iz : 0, [vz, xz] = null !== (lz = Hz.baf2PowerReactors) && void 0 !== lz ? lz : [0, 0], [Jz, Az] = null !== (Mz = Hz.baf2PowerBatteries) && void 0 !== Mz ? Mz : [0, 0];
      let Tz = Oz("buildAFactory2Game:powerEngineCells", {
        amount: String(rz)
      });
      rz > 0 && sz > 0 && (Tz = Oz("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(rz),
        time: vi(Oz, rz * rl / sz)
      }));
      let Lz = Oz("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(Zz)
      });
      Zz > 0 && Fz > 0 && (Lz = Oz("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(Zz),
        time: vi(Oz, Zz * Xl / Fz)
      }));
      const Pz = dz + fz + Rz + vz;
      return (0, Ti.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Ti.jsxs)("section", {
          children: [(0, Ti.jsxs)("h3", {
            children: [Oz("buildAFactory2Game:powerMaking"), (0, Ti.jsx)("span", {
              children: pz(Hz.baf2PowerMadePerS, "+")
            })]
          }), (0, Ti.jsxs)("ul", {
            children: [0 === Pz && (0, Ti.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Oz("buildAFactory2Game:powerNoMakers")
            }), dz > 0 && (0, Ti.jsx)(ol, {
              item: "Generator",
              label: `${li(Oz,"Generator")} \xd7${dz}`,
              note: `${Oz("buildAFactory2Game:powerRunning",{amount:String(Fz)})} \xb7 ${Lz}`,
              value: pz(Fz * wl, "+"),
              dim: 0 === Fz
            }), fz > 0 && (0, Ti.jsx)(ol, {
              item: "Volt Engine",
              label: `${li(Oz,"Volt Engine")} \xd7${fz}`,
              note: `${Oz("buildAFactory2Game:powerRunning",{amount:String(sz)})} \xb7 ${Tz}`,
              value: pz(sz * sl, "+"),
              dim: 0 === sz
            }), Rz > 0 && (0, Ti.jsx)(ol, {
              item: "Solar Panel",
              label: `${li(Oz,"Solar Panel")} \xd7${Rz}`,
              note: Oz(Kz < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: pz(4 * Rz * Kz, "+")
            }), vz > 0 && (0, Ti.jsx)(ol, {
              item: "Reactor Frame",
              label: `${Oz("buildAFactory2Game:powerReactors")} \xd7${vz}`,
              note: Oz("buildAFactory2Game:powerRunning", {
                amount: String(xz)
              }),
              value: pz(null !== (tz = Hz.baf2PowerReactorPerS) && void 0 !== tz ? tz : 0, "+"),
              dim: 0 === xz
            })]
          })]
        }), (0, Ti.jsxs)("section", {
          children: [(0, Ti.jsxs)("h3", {
            children: [Oz("buildAFactory2Game:powerStorage"), (0, Ti.jsx)("span", {
              children: Cz(Hz.baf2PowerCap)
            })]
          }), (wz > 0 || Jz > 0) && (0, Ti.jsxs)("ul", {
            children: [wz > 0 && (0, Ti.jsx)(ol, {
              item: "Charge Vault",
              label: `${li(Oz,"Charge Vault")} \xd7${wz}`,
              value: `+${Cz(8e3*wz)}`
            }), Jz > 0 && (0, Ti.jsx)(ol, {
              item: "Battery Cell",
              label: `${Oz("buildAFactory2Game:powerBatteries")} \xd7${Jz}`,
              value: `+${Cz(Az)}`
            })]
          })]
        }), (0, Ti.jsxs)("section", {
          children: [(0, Ti.jsxs)("h3", {
            children: [Oz("buildAFactory2Game:powerUsing"), (0, Ti.jsx)("span", {
              children: pz(Hz.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Ti.jsxs)("ul", {
            children: [0 === Xz.length && 0 === oz && 0 === Nz && (0, Ti.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Oz("buildAFactory2Game:powerNoUsers")
            }), Xz.map((zz => {
              let [uz, bz, Ez, nz, iz = 1, lz] = zz, Mz = bz ? Oz(Kl[iz - 1], {
                name: li(Oz, uz)
              }) : li(Oz, uz);
              return void 0 !== lz && (Mz = Oz("buildAFactory2Game:powerFarmName", {
                name: Mz,
                mob: Oz(yz(lz))
              })), (0, Ti.jsx)(ol, {
                item: uz,
                label: `${Mz} \xd7${Ez}`,
                note: Oz("buildAFactory2Game:powerRunning", {
                  amount: String(nz)
                }),
                value: nz > 0 ? pz(nz * Nl(uz, bz, iz, lz), "\u2212") : Oz("buildAFactory2Game:powerIdle"),
                dim: 0 === nz
              }, `${uz}|${bz}|${iz}|${lz}`)
            })), oz > 0 && (0, Ti.jsx)(ol, {
              item: "Charging Pad",
              label: `${li(Oz,"Charging Pad")} \xd7${oz}`,
              value: Oz("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Nz > 0 && (0, Ti.jsx)(ol, {
              item: "Homestead Core",
              label: Oz("buildAFactory2Game:powerCharge"),
              value: pz(Nz, "\u2212")
            }), Hz.baf2PowerStarved > 0 && (0, Ti.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Ti.jsx)(Pn.c, {
                name: "triangle-exclamation"
              }), Oz("buildAFactory2Game:powerStarved", {
                amount: String(Hz.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var xl = bz(4292),
      Jl = bz(1419);
    class Al {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(zz) {
        this.message = zz;
        for (const uz of this.listeners) uz()
      }
      get() {
        return this.message
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
    }
    class Tl extends Al {}

    function Ll(zz, uz) {
      const bz = () => {
          const bz = zz.get();
          if (!bz || !uz) return bz;
          const [Ez, nz, iz] = bz.baf2PowerAt;
          return Ez === uz[0] && nz === uz[1] && iz === uz[2] ? bz : null
        },
        [nz, iz] = (0, Ez.useState)(bz);
      return (0, Ez.useEffect)((() => (iz(bz()), zz.subscribe((() => {
        iz(bz())
      })))), [zz, ...null !== uz && void 0 !== uz ? uz : []]), nz
    }

    function Pl(zz) {
      return {
        stored: zz.baf2PowerStored,
        cap: zz.baf2PowerCap,
        madePerS: zz.baf2PowerMadePerS,
        usedPerS: zz.baf2PowerUsedPerS
      }
    }

    function Gl(zz) {
      let {
        stored: uz,
        cap: bz
      } = zz;
      return (0, Ti.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Ti.jsx)("div", {
          style: {
            width: `${Math.min(100,100*uz/Math.max(1,bz))}%`
          }
        })
      })
    }

    function al(zz) {
      let {
        figures: uz,
        labelled: bz = !1
      } = zz;
      const {
        t: Ez
      } = (0, Ln.F)(), nz = uz.madePerS - uz.usedPerS, {
        text: iz,
        draining: lz
      } = function(zz, uz) {
        let {
          stored: bz,
          cap: Ez,
          madePerS: nz,
          usedPerS: iz
        } = uz;
        const lz = nz - iz;
        return bz >= Ez ? {
          text: zz("buildAFactory2Game:powerFull"),
          draining: !1
        } : lz > .05 ? {
          text: zz("buildAFactory2Game:powerFullIn", {
            time: vi(zz, (Ez - bz) / lz)
          }),
          draining: !1
        } : lz < -.05 ? {
          text: zz("buildAFactory2Game:powerEmptyIn", {
            time: vi(zz, bz / -lz)
          }),
          draining: !0
        } : {
          text: zz("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Ez, uz);
      return (0, Ti.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Ti.jsx)(Gl, {
          stored: uz.stored,
          cap: uz.cap
        }), (0, Ti.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Ti.jsx)("span", {
            children: Ez(bz ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: Cz(uz.stored),
              cap: Cz(uz.cap)
            })
          }), (0, Ti.jsxs)("span", {
            className: xn()("Baf2PowerNet", {
              Draining: lz
            }),
            children: [Ez("buildAFactory2Game:powerPerSecond", {
              rate: ri(Math.abs(nz), nz < 0 ? "\u2212" : "+")
            }), " \xb7 ", iz]
          })]
        })]
      })
    }

    function Vl(zz) {
      let {
        stored: uz,
        cap: bz,
        rates: Ez
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)();
      return Ez ? (0, Ti.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Ti.jsx)(al, {
          figures: {
            stored: uz,
            cap: bz,
            madePerS: Ez[0],
            usedPerS: Ez[1]
          },
          labelled: !0
        })
      }) : (0, Ti.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Ti.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Ti.jsx)(Gl, {
            stored: uz,
            cap: bz
          }), (0, Ti.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Ti.jsx)("span", {
              children: nz("buildAFactory2Game:powerStoredLabelled", {
                stored: Cz(uz),
                cap: Cz(bz)
              })
            })
          })]
        })
      })
    }

    function ml(zz) {
      let {
        store: uz,
        close: bz
      } = zz;
      const {
        t: Ez
      } = (0, Ln.F)(), nz = Ll(uz);
      return (0, Ti.jsx)(xl.d, {
        close: bz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ti.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsxs)("div", {
              children: [(0, Ti.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Ez("buildAFactory2Game:powerTitle")
              }), (0, Ti.jsx)("p", {
                children: Ez("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Ti.jsx)(Jl.m, {
              onClick: bz
            })]
          }), nz && (0, Ti.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Ti.jsx)(al, {
              figures: Pl(nz)
            }), (0, Ti.jsx)(vl, {
              message: nz
            })]
          })]
        })
      })
    }

    function ql(zz) {
      var uz;
      let {
        kind: bz,
        def: nz,
        pl: iz,
        power: lz,
        stored: Mz,
        cap: tz
      } = zz;
      const {
        t: Hz
      } = (0, Ln.F)(), Oz = Ll(lz, iz), [pz, dz] = (0, Ez.useState)(!1);
      return (0, Ti.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Ti.jsx)(Ml, {
          kind: bz,
          def: nz,
          input: null,
          tier: null !== (uz = null === Oz || void 0 === Oz ? void 0 : Oz.baf2PowerTier) && void 0 !== uz ? uz : 1
        }), (0, Ti.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Hz("buildAFactory2Game:powerTitle")
        }), Oz && (0, Ti.jsx)(al, {
          figures: Pl(Oz)
        }), !Oz && (0, Ti.jsx)(Vl, {
          stored: Mz,
          cap: tz,
          rates: null
        }), Oz && (0, Ti.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            dz(!pz)
          },
          "aria-expanded": pz,
          children: Hz(pz ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Oz && pz && (0, Ti.jsx)(vl, {
          message: Oz
        })]
      })
    }
    const hl = 2500,
      Ul = 17500,
      cl = `${rz} `;
    const gl = ["plan", "throttle"];

    function Sl(zz) {
      if (zz.startsWith(`${Ju} `)) return zz.slice(0, zz.lastIndexOf(" "));
      const uz = zz.split(" ");
      return uz[0] === Ou && gl.includes(uz[4]) ? uz.slice(0, 5).join(" ") : null
    }
    class yl {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = zz, this.now = uz, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.hEz = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = uz()
      }
      enqueue(zz) {
        this.queue(zz, this.nextTicket());
        const uz = this.hEz + this.pending.length;
        return this.flush(), uz
      }
      track(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const bz = this.nextTicket();
        if (!uz.urgent) return this.queue(zz, bz), this.flush(), bz;
        const {
          supersedes: Ez
        } = uz;
        for (let iz = this.pending.length - 1; iz >= this.urgent; iz--) {
          const uz = this.pending[iz];
          (uz.command === zz || null !== Ez && void 0 !== Ez && Ez(uz.command)) && (this.pending.splice(iz, 1), this.markLeft(uz.tickets))
        }
        const nz = this.pending.findIndex((uz => {
          let {
            command: bz
          } = uz;
          return bz === zz
        }));
        return -1 !== nz ? this.pending[nz].tickets.push(bz) : (this.pending.splice(this.urgent, 0, {
          command: zz,
          tickets: [bz]
        }), this.urgent += 1), this.flush(), bz
      }
      leftAt(zz) {
        const uz = this.leftTimes.get(zz);
        return void 0 !== uz ? uz : this.pending.some((uz => {
          let {
            tickets: bz
          } = uz;
          return bz.includes(zz)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let zz = !0;
        return () => {
          zz && (zz = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(zz) {
        var uz;
        return (null === (uz = this.pending.at(-1)) || void 0 === uz ? void 0 : uz.command) === zz
      }
      sent() {
        return this.hEz
      }
      clear() {
        for (const {
            tickets: zz
          }
          of this.pending) this.markLeft(zz);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(zz) {
        const uz = this.now();
        for (const bz of zz) this.leftTimes.set(bz, uz);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(zz, uz) {
        const bz = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === bz || void 0 === bz ? void 0 : bz.command) === zz) return void(! function(zz) {
          return zz === oz || zz.startsWith(`${sz} `) || zz.startsWith(`${cz} `)
        }(zz) ? bz.tickets.push(uz) : (this.pending.pop(), this.markLeft([...bz.tickets, uz])));
        const Ez = void 0 === bz ? null : Hu(bz.command, zz);
        if (null !== Ez && void 0 !== bz) return bz.command = Ez, void bz.tickets.push(uz);
        const nz = Sl(zz);
        if (null !== nz && void 0 !== bz && Sl(bz.command) === nz) return bz.command = zz, void bz.tickets.push(uz);
        if (null !== bz && void 0 !== bz && bz.command.startsWith(cl) && zz.startsWith(cl)) {
          const Ez = zz.slice(cl.length);
          if (bz.command.slice(cl.length).split(",").includes(Ez)) return void bz.tickets.push(uz);
          const nz = `${bz.command},${Ez}`;
          if (nz.length <= 119) return bz.command = nz, void bz.tickets.push(uz)
        }
        this.pending.push({
          command: zz,
          tickets: [uz]
        })
      }
      flush() {
        const zz = this.now();
        for (this.tokens = Math.min(5, this.tokens + (zz - this.refilledAt) / hl), this.refilledAt = zz; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.hEz += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: zz,
            tickets: uz
          } = this.pending.shift();
          this.markLeft(uz), this.send(zz)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * hl)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Dl {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new yl(zz, uz)
      }
      send(zz) {
        return this.queue.enqueue(zz)
      }
      sent() {
        return this.queue.sent()
      }
      track(zz, uz) {
        return this.queue.track(zz, uz)
      }
      leftAt(zz) {
        return this.queue.leftAt(zz)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(zz) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = uz, this.send(zz), this.islandEdits.count
      }
      syncIslandEdits(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: bz
        } = this, Ez = uz - bz.lastAtMs < Ul;
        bz.count = Ez ? Math.max(bz.count, zz) : zz
      }
      clear() {
        this.queue.clear()
      }
    }
    const Ql = (0, Ez.createContext)(null);

    function Wl() {
      const zz = (0, Ez.useContext)(Ql);
      if (!zz) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return zz
    }

    function el(zz, uz) {
      return null !== uz && void 0 !== uz ? uz : 1 === zz
    }

    function jl(zz, uz) {
      return zz.every((zz => {
        var bz;
        let [Ez, , nz] = zz;
        return !el(nz, null === (bz = uz.get(Ez)) || void 0 === bz ? void 0 : bz.MZ)
      }))
    }

    function Il(zz, uz, bz) {
      if (0 === zz.size) return zz;
      const Ez = new Map(zz);
      for (const [nz, iz] of zz) {
        const zz = uz.find((zz => {
          let [uz] = zz;
          return uz === nz
        }));
        (!zz || iz.MZ === (1 === zz[2]) || iz.atMs < bz) && Ez.delete(nz)
      }
      return Ez
    }

    function Bl(zz) {
      var uz;
      let {
        pl: bz,
        input: nz,
        drops: iz,
        seconds: lz
      } = zz;
      const {
        t: Mz
      } = (0, Ln.F)(), tz = Wl(), [Hz, Oz] = (0, Ez.useState)(new Map);
      (0, Ez.useEffect)((() => {
        iz && Oz((zz => Il(zz, iz, Date.now() - Ul)))
      }), [iz]), (0, Ez.useEffect)((() => {
        const zz = function(zz, uz) {
          let bz = null;
          for (const {
              atMs: Ez
            }
            of zz.values()) bz = null === bz ? Ez : Math.min(bz, Ez);
          return null === bz ? null : bz + uz
        }(Hz, Ul);
        if (null === zz || !iz) return;
        const uz = setTimeout((() => {
          Oz((zz => Il(zz, iz, Date.now() - Ul)))
        }), Math.max(0, zz - Date.now()) + 1);
        return () => {
          clearTimeout(uz)
        }
      }), [Hz, iz]);
      const pz = Dz(nz),
        dz = null !== pz && null !== iz && jl(iz, Hz),
        Fz = function(zz, uz, bz) {
          return null === zz || null === uz || jl(uz, bz) ? 0 : Uz[qz[zz]]
        }(pz, iz, Hz);
      return (0, Ti.jsxs)(Ui, {
        title: Mz("buildAFactory2Game:farmDropsTitle", {
          seconds: lz
        }),
        count: null !== (uz = null === iz || void 0 === iz ? void 0 : iz.length) && void 0 !== uz ? uz : 0,
        children: [Fz > 0 && (0, Ti.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: Mz("buildAFactory2Game:farmDropsPower", {
            power: String(Fz)
          })
        }), (null === pz || !iz) && (0, Ti.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: Mz("buildAFactory2Game:farmDropsEmpty")
        }), dz && (0, Ti.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: Mz("buildAFactory2Game:farmDropsAllVoided")
        }), null !== pz && (null === iz || void 0 === iz ? void 0 : iz.map((zz => {
          var uz;
          let [Ez, nz, iz] = zz;
          const lz = nz < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            pz = el(iz, null === (uz = Hz.get(Ez)) || void 0 === uz ? void 0 : uz.MZ);
          return (0, Ti.jsxs)("li", {
            className: xn()("Baf2Recipe Baf2FarmDrop", {
              Voided: !pz
            }),
            children: [(0, Ti.jsx)(Gi, {
              item: Ez,
              amount: 1
            }), (0, Ti.jsx)("span", {
              className: "Baf2RecipeName",
              children: li(Mz, Ez)
            }), (0, Ti.jsx)("span", {
              className: "Baf2FarmRate",
              children: Mz(lz, {
                amount: String(nz)
              })
            }), (0, Ti.jsx)("button", {
              type: "button",
              className: xn()("Baf2FarmToggle SmallTextBold", {
                Kept: pz
              }),
              "aria-pressed": pz,
              onClick: () => {
                Oz(new Map(Hz).set(Ez, {
                  MZ: !pz,
                  atMs: Date.now()
                })), tz.send(function(zz, uz, bz, Ez) {
                  return `${cz} ${zz} ${uz} ${bz} ${Ez}`
                }(bz[0], bz[1], bz[2], Ez))
              },
              children: Mz(pz ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Ez)
        })))]
      })
    }
    var Cl;
    const Yl = String(null !== (Cl = Vu.Synthesizer.waterPerOp) && void 0 !== Cl ? Cl : 0);

    function kl(zz) {
      let {
        pl: uz,
        taught: bz
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)(), iz = Wl(), [lz, Mz] = (0, Ez.useState)(null);
      (0, Ez.useEffect)((() => {
        null !== lz && bz === lz && Mz(null)
      }), [lz, bz]);
      const tz = null !== lz && void 0 !== lz ? lz : bz;
      let Hz = nz("buildAFactory2Game:synthPick");
      return null !== tz && (Hz = nz("buildAFactory2Game:synthGrows", {
        name: li(nz, tz),
        input: li(nz, Nu),
        water: Yl
      })), (0, Ti.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Ti.jsx)("div", {
          className: xn()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === tz
          }),
          children: Hz
        }), (0, Ti.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: vu.map(((zz, bz) => {
            const Ez = li(nz, zz),
              lz = zz === tz;
            return (0, Ti.jsx)("li", {
              children: (0, Ti.jsx)("button", {
                type: "button",
                className: xn()("Baf2SynthTile", {
                  Selected: lz
                }),
                title: Ez,
                "aria-label": Ez,
                "aria-pressed": lz,
                onClick: () => {
                  lz || (Mz(zz), iz.send(`${Ju} ${uz[0]} ${uz[1]} ${uz[2]} ${bz}`))
                },
                children: (0, Ti.jsx)(Gn.c, {
                  itemName: zz,
                  amount: 0
                })
              })
            }, zz)
          }))
        })]
      })
    }
    const zM = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function uM(zz) {
      let {
        kind: uz,
        tier: bz,
        coupled: Ez,
        level: nz,
        slot: iz
      } = zz;
      const {
        t: lz
      } = (0, Ln.F)(), tz = Bz(qu);
      if (!Ez && null !== bz && bz < tz) return (0, Ti.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Ti.jsx)(Pn.c, {
            name: "lock"
          })
        }), (0, Ti.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: lz("buildAFactory2Game:upgradeLocked")
        }), (0, Ti.jsx)("span", {
          className: "Baf2TierTag",
          children: lz("buildAFactory2Game:tierTag", {
            tier: String(tz)
          })
        })]
      });
      const Hz = function(zz, uz) {
          if (Mz() && "Crusher" !== zz && null !== uz) {
            if (bM(Uu, uz)) return {
              item: Uu,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (bM(hu, uz)) return {
              item: hu,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: qu,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(uz, bz),
        Oz = lz(Ez ? zM[nz - 1] : Hz.emptyKey),
        pz = null !== bz ? function(zz, uz, bz, Ez) {
          if (!Mz() || !bz || "Crusher" === zz || uz < 10) return null;
          const nz = Bz(Uu);
          if (Ez < 3 && nz > 1 && (2 === Ez || uz >= nz)) return {
            tier: nz,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const iz = Bz(hu);
          if (1 === Ez && iz > 1) return {
            tier: iz,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(uz, bz, Ez, nz) : null;
      return (0, Ti.jsxs)("div", {
        className: xn()("Baf2UpgradeSocket", {
          Fitted: Ez
        }),
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Ez && iz, !Ez && (0, Ti.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Ti.jsx)(Gn.c, {
              itemName: Hz.item,
              amount: 0
            })
          })]
        }), (0, Ti.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Ti.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: lz("buildAFactory2Game:upgradeTitle")
          }), (0, Ti.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Oz
          }), Ez && nz >= 2 && "Crusher" === uz && (0, Ti.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: lz("buildAFactory2Game:couplerCrusherHint")
          }), pz && null !== bz && bz < pz.tier && (0, Ti.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Ti.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Ti.jsx)(Pn.c, {
                name: "lock"
              })
            }), lz(pz.lockedKey), (0, Ti.jsx)("span", {
              className: "Baf2TierTag",
              children: lz("buildAFactory2Game:tierTag", {
                tier: String(pz.tier)
              })
            })]
          }), pz && null !== bz && bz >= pz.tier && (0, Ti.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: lz(pz.nextKey)
          })]
        })]
      })
    }

    function bM(zz, uz) {
      const bz = Bz(zz);
      return bz > 1 && uz >= bz
    }
    var EM = bz(36465);
    const nM = (0, Yz.B)(Vu.Condenser, Vu.Condenser.fluidMade),
      iM = .05;
    class lM extends Al {}

    function MM(zz) {
      return ri(zz, "")
    }

    function tM(zz, uz, bz) {
      return zz(uz ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: bz
      })
    }

    function HM(zz, uz, bz, Ez) {
      return bz <= iM && Ez <= iM ? null : Ez <= iM || bz <= iM ? tM(zz, uz, Ez <= iM ? ri(bz, "+") : ri(Ez, "\u2212")) : zz(uz ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: MM(bz),
        used: MM(Ez)
      })
    }

    function OM(zz, uz) {
      return Math.min(100, 100 * zz / Math.max(1, uz))
    }

    function pM(zz) {
      let {
        stored: uz,
        cap: bz,
        netPerS: Ez,
        rates: nz,
        cryo: iz
      } = zz;
      const {
        t: lz
      } = (0, Ln.F)(), Mz = function(zz, uz, bz, Ez) {
        return bz <= 0 ? zz("buildAFactory2Game:waterNoStorage") : uz >= bz ? zz("buildAFactory2Game:powerFull") : Ez > iM ? zz("buildAFactory2Game:powerFullIn", {
          time: vi(zz, (bz - uz) / Ez)
        }) : Ez < -.05 ? uz <= 0 ? zz("buildAFactory2Game:waterEmpty") : zz("buildAFactory2Game:powerEmptyIn", {
          time: vi(zz, uz / -Ez)
        }) : zz("buildAFactory2Game:powerSteady")
      }(lz, uz, bz, Ez), tz = bz > 0 && uz < bz && Math.abs(Ez) <= iM, Hz = lz(iz ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Oz = null !== nz ? `${nz} \xb7 ${Mz}` : tz ? Hz : `${Hz} \xb7 ${Mz}`;
      return (0, Ti.jsxs)(Ti.Fragment, {
        children: [(0, Ti.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Ti.jsx)("div", {
            style: {
              width: `${OM(uz,bz)}%`
            }
          })
        }), (0, Ti.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Ti.jsx)("span", {
            children: bz > 0 && lz("buildAFactory2Game:powerStored", {
              stored: (0, Yz.I)(uz),
              cap: (0, Yz.I)(bz)
            })
          }), (0, Ti.jsx)("span", {
            className: xn()("Baf2WaterNet", {
              Draining: Ez < -.05
            }),
            children: Oz
          })]
        })]
      })
    }

    function dM(zz) {
      let {
        water: uz,
        at: bz,
        side: Ez = null
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)(), iz = Wl(), [lz, Mz, tz] = uz;
      return (0, Ti.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Ti.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: nz(null === Ez ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Ez}`)
          }), (0, Ti.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              iz.send(`${Yz.x} ${bz[0]} ${bz[1]} ${bz[2]}${"cryoOut"===Ez?" cryo":""}`)
            },
            children: nz("buildAFactory2Game:waterDetails")
          })]
        }), (0, Ti.jsx)(pM, {
          stored: lz,
          cap: Mz,
          netPerS: tz,
          rates: tM(nz, "cryoOut" === Ez, ri(Math.abs(tz), tz < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Ez
        })]
      })
    }

    function FM(zz, uz) {
      var bz, Ez, nz;
      const iz = !0 === uz.baf2WaterCryo,
        lz = null !== (bz = null === (Ez = uz.baf2WaterMakers.find((zz => zz[0] === (iz ? Yz.e : "Condenser")))) || void 0 === Ez ? void 0 : Ez[1]) && void 0 !== bz ? bz : 0,
        Mz = [],
        tz = (uz, bz, Ez) => {
          uz > 0 && Mz.push(zz(1 === uz ? bz : Ez, {
            count: String(uz)
          }))
        };
      return iz ? tz(lz, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : tz(lz, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), tz(null !== (nz = uz.baf2WaterPipes) && void 0 !== nz ? nz : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), tz(uz.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), Mz.join(" \xb7 ")
    }

    function ZM(zz, uz) {
      if (!0 === uz.baf2WaterCryo) return function(zz, uz) {
        const bz = Vu[Yz.e];
        switch (uz.baf2WaterThis) {
          case "pipe":
            return {
              text: zz("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: zz("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: zz("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: zz("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: zz("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: zz("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: zz("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var Ez;
            const [nz, iz] = null !== (Ez = uz.baf2WaterThisRates) && void 0 !== Ez ? Ez : [(0, Yz.B)(bz, bz.cryoMade), (0, Yz.B)(bz, bz.powerPerOp)];
            return !0 === uz.baf2WaterDriven ? {
              text: zz("buildAFactory2Game:cryoThisMixerDriven", {
                rate: MM(nz)
              }),
              bad: !1
            } : {
              text: zz("buildAFactory2Game:cryoThisMixer", {
                rate: MM(nz),
                power: MM(iz)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: zz("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(zz, uz);
      const bz = !0 === uz.baf2WaterDriven,
        Ez = Vu.Condenser;
      switch (uz.baf2WaterThis) {
        case "pipe":
          return {
            text: zz("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: zz("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: zz("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: zz("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: zz("buildAFactory2Game:waterThisTank", {
              tank: (0, Yz.I)(Yz.s),
              cap: (0, Yz.I)(uz.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var nz;
          const [iz, lz] = null !== (nz = uz.baf2WaterThisRates) && void 0 !== nz ? nz : [nM, (0, Yz.B)(Ez, Ez.powerPerOp)];
          return bz ? {
            text: zz("buildAFactory2Game:waterThisCondenserDriven", {
              rate: MM(iz)
            }),
            bad: !1
          } : {
            text: zz("buildAFactory2Game:waterThisCondenser", {
              rate: MM(iz),
              power: MM(lz)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: zz("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function RM(zz, uz) {
      const bz = uz.baf2WaterMakers.some((zz => !0 === zz[5]));
      if (!0 === uz.baf2WaterCryo) {
        const Ez = uz.baf2WaterUsedPerS - uz.baf2WaterMadePerS,
          nz = bz || Ez <= iM ? 0 : (0, Yz.A)(Ez);
        return 0 === nz ? null : nz > 1 ? zz("buildAFactory2Game:cryoNextMixers", {
          mixers: String(nz)
        }) : zz("buildAFactory2Game:cryoNextOne")
      }
      const Ez = bz ? null : function(zz, uz) {
        const bz = uz - zz;
        return bz <= iM ? null : Math.ceil(bz / nM)
      }(uz.baf2WaterMadePerS, uz.baf2WaterUsedPerS);
      return null === Ez ? null : Ez > 1 ? zz("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Ez)
      }) : zz("buildAFactory2Game:waterNextOne")
    }

    function KM(zz) {
      let {
        item: uz,
        label: bz,
        note: Ez,
        value: nz,
        dim: iz,
        bad: lz
      } = zz;
      return (0, Ti.jsxs)("li", {
        className: xn()("Baf2WaterRow", {
          Dim: iz,
          Bad: lz
        }),
        children: [(0, Ti.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Ti.jsx)(Gn.c, {
            itemName: uz,
            amount: 0
          })
        }), (0, Ti.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Ti.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: bz
          }), Ez && (0, Ti.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Ez
          })]
        }), (0, Ti.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: nz
        })]
      })
    }

    function wM(zz) {
      return EM.m[zz] ? zz : "Reactor Port"
    }

    function XM(zz) {
      let {
        message: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)(), Ez = !0 === uz.baf2WaterCryo, nz = (zz, uz) => tM(bz, Ez, ri(zz, uz));
      return (0, Ti.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Ti.jsxs)("section", {
          children: [(0, Ti.jsxs)("h3", {
            children: [bz("buildAFactory2Game:waterMakes"), (0, Ti.jsx)("span", {
              children: nz(uz.baf2WaterMadePerS, "+")
            })]
          }), (0, Ti.jsxs)("ul", {
            children: [0 === uz.baf2WaterMakers.length && (0, Ti.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: bz(Ez ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), uz.baf2WaterMakers.map((zz => {
              let [uz, Ez, iz, lz, Mz, tz] = zz;
              const Hz = bz("buildAFactory2Game:powerRunning", {
                amount: String(iz)
              });
              let Oz = Mz > 0 ? bz("buildAFactory2Game:waterMakerPower", {
                running: Hz,
                power: MM(Mz)
              }) : Hz;
              return tz && (Oz = bz(0 === iz && lz <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Ti.jsx)(KM, {
                item: uz,
                label: `${li(bz,uz)} \xd7${Ez}`,
                note: Oz,
                value: iz > 0 || tz && lz > 0 ? nz(lz, "+") : bz("buildAFactory2Game:powerIdle"),
                dim: 0 === iz && !tz,
                bad: tz
              }, uz)
            }))]
          })]
        }), (0, Ti.jsxs)("section", {
          children: [(0, Ti.jsxs)("h3", {
            children: [bz("buildAFactory2Game:waterUses"), (0, Ti.jsx)("span", {
              children: nz(uz.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Ti.jsxs)("ul", {
            children: [0 === uz.baf2WaterUsers.length && (0, Ti.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: bz(Ez ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), uz.baf2WaterUsers.map((zz => {
              let [uz, Ez, iz, lz] = zz;
              const Mz = EM.m[uz] ? li(bz, uz) : uz;
              return (0, Ti.jsx)(KM, {
                item: wM(uz),
                label: Ez > 1 ? `${Mz} \xd7${Ez}` : Mz,
                note: lz ? bz("buildAFactory2Game:waterPortFirst") : void 0,
                value: iz > 0 ? nz(iz, "\u2212") : bz("buildAFactory2Game:powerIdle"),
                dim: 0 === iz
              }, uz)
            }))]
          })]
        })]
      })
    }

    function fM(zz) {
      var uz, bz, nz, iz, lz;
      let {
        store: Mz,
        close: tz
      } = zz;
      const {
        t: Hz
      } = (0, Ln.F)(), Oz = function(zz) {
        const [uz, bz] = (0, Ez.useState)((() => zz.get()));
        return (0, Ez.useEffect)((() => (bz(zz.get()), zz.subscribe((() => {
          bz(zz.get())
        })))), [zz]), uz
      }(Mz), pz = null !== (uz = null === Oz || void 0 === Oz ? void 0 : Oz.baf2WaterStored) && void 0 !== uz ? uz : 0, dz = null !== (bz = null === Oz || void 0 === Oz ? void 0 : Oz.baf2WaterCap) && void 0 !== bz ? bz : 0, Fz = null !== (nz = null === Oz || void 0 === Oz ? void 0 : Oz.baf2WaterMadePerS) && void 0 !== nz ? nz : 0, Zz = null !== (iz = null === Oz || void 0 === Oz ? void 0 : Oz.baf2WaterUsedPerS) && void 0 !== iz ? iz : 0, Rz = null !== (lz = null === Oz || void 0 === Oz ? void 0 : Oz.baf2WaterNetPerS) && void 0 !== lz ? lz : Fz - Zz, Kz = Oz && ZM(Hz, Oz), wz = Oz && RM(Hz, Oz), Xz = !0 === (null === Oz || void 0 === Oz ? void 0 : Oz.baf2WaterCryo);
      return (0, Ti.jsx)(xl.d, {
        close: tz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ti.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Oz && dz <= 0 ? (0, Ti.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Ti.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Ti.jsx)(Gn.c, {
                  itemName: Xz ? Zb.e : Yz.m,
                  amount: 0
                })
              }), (0, Ti.jsxs)("div", {
                children: [(0, Ti.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Hz(Xz ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Oz && (0, Ti.jsx)("p", {
                  children: FM(Hz, Oz)
                })]
              })]
            }), (0, Ti.jsx)(Jl.m, {
              onClick: tz
            })]
          }), Oz && Kz && (0, Ti.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Ti.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Ti.jsx)(pM, {
                stored: pz,
                cap: dz,
                netPerS: Rz,
                cryo: Xz,
                rates: HM(Hz, Xz, Fz, Zz)
              })
            }), (0, Ti.jsx)("div", {
              className: xn()("Baf2WaterThis", {
                Bad: Kz.bad
              }),
              children: Kz.text
            }), Oz.baf2WaterDriven && (0, Ti.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Ti.jsx)(Pn.c, {
                name: "bolt"
              }), Hz(Xz ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), wz && (0, Ti.jsx)("p", {
              className: "Baf2WaterNext",
              children: wz
            }), (0, Ti.jsx)(XM, {
              message: Oz
            })]
          })]
        })
      })
    }
    class sM {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(zz, uz) {
        const bz = this.get(zz);
        bz && null === uz.opLeftMs && null === uz.fuelLeftMs && uz.status === bz.status ? uz = {
          ...uz,
          opLeftMs: bz.opLeftMs,
          fuelLeftMs: bz.fuelLeftMs,
          burning: bz.burning
        } : this.updates++, this.pos = zz, this.view = uz;
        for (const Ez of this.listeners) Ez()
      }
      get(zz) {
        return null !== this.pos && this.pos[0] === zz[0] && this.pos[1] === zz[1] && this.pos[2] === zz[2] ? this.view : null
      }
      forget(zz) {
        null !== this.get(zz) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
    }

    function rM(zz, uz, bz, Ez) {
      return "noFuel" === uz && Ez && !nb(Vu[zz]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === uz && !0 === (null === bz || void 0 === bz ? void 0 : bz.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === uz && !0 === (null === bz || void 0 === bz ? void 0 : bz.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === uz && !0 === (null === bz || void 0 === bz ? void 0 : bz.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === uz && !0 === (null === bz || void 0 === bz ? void 0 : bz.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : oM(uz, bz) ? "buildAFactory2Game:machineStatus_noInputShort" : function(zz, uz) {
        const bz = Vu[zz];
        if ("noFuel" === uz && void 0 !== bz.fuels) return nb(bz) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (bz.mobFarm && ("noInput" === uz || "badInput" === uz)) return `buildAFactory2Game:machineStatus_${uz}MobFarm`;
        if ("outputFull" === uz && (void 0 !== bz.table || bz.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === uz && eu(bz)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== bz.cryoMade && ("noInput" === uz || "noOutlet" === uz || "fluidFull" === uz)) return `buildAFactory2Game:machineStatus_${uz}Mixer`;
        return `buildAFactory2Game:machineStatus_${uz}`
      }(zz, uz)
    }

    function oM(zz, uz) {
      return "noInput" === zz && null !== uz && void 0 !== uz && uz.input && uz.inputShort ? {
        input: uz.input,
        short: uz.inputShort
      } : null
    }

    function NM(zz) {
      return Jn(zz) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== zz.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function vM(zz) {
      const uz = (0, Vz.ze)(zz);
      return `Baf2Pane Baf2Pane${uz.charAt(0).toUpperCase()}${uz.slice(1)}`
    }

    function xM(zz, uz) {
      const [bz, nz] = (0, Ez.useState)((() => zz.get(uz)));
      return (0, Ez.useEffect)((() => {
        nz(zz.get(uz));
        const bz = zz.subscribe((() => {
          nz(zz.get(uz))
        }));
        return () => {
          bz(), zz.forget(uz)
        }
      }), [zz, ...uz]), bz
    }

    function JM(zz, uz, bz, Ez) {
      const nz = Vu[zz],
        iz = uz && nz.couplable ? yu(nz, bz) : nz,
        lz = null !== Ez && ub(iz) ? function(zz, uz) {
          var bz;
          return null !== (bz = null !== uz && ub(zz) ? Mb[uz] : void 0) && void 0 !== bz ? bz : zz.opMs
        }(iz, tb(Ez)) : iz.opMs;
      return lz === iz.opMs ? iz : {
        ...iz,
        opMs: lz
      }
    }

    function AM(zz) {
      let {
        running: uz,
        opMs: bz,
        opLeftMs: Ez,
        updateCount: nz
      } = zz;
      return (0, Ti.jsx)("div", {
        className: xn()("Baf2MachineProgress", {
          Running: uz
        }),
        children: (0, Ti.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: bz / 1e3 + "s",
            animationDelay: null === Ez ? void 0 : (Ez - bz) / 1e3 + "s"
          }
        }, nz)
      })
    }

    function TM(zz) {
      let {
        running: uz,
        leftMs: bz,
        periodMs: Ez,
        updateCount: nz
      } = zz;
      const {
        t: iz
      } = (0, Ln.F)(), lz = Math.min(Math.max(null !== bz && void 0 !== bz ? bz : 0, 0), Ez), Mz = uz && lz > 0, tz = iz("buildAFactory2Game:machineBarFuel");
      return (0, Ti.jsx)("div", {
        className: xn()("Baf2FuelBurn", {
          Draining: Mz
        }),
        role: "img",
        title: tz,
        "aria-label": tz,
        children: (0, Ti.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: Mz ? {
            animationDuration: Ez / 1e3 + "s",
            animationDelay: (lz - Ez) / 1e3 + "s"
          } : {
            transform: `scaleY(${lz/Ez})`
          }
        }, nz)
      })
    }

    function LM(zz, uz, bz) {
      let [Ez, nz] = bz;
      const iz = 1 !== Ez ? Tn(uz) : null;
      return {
        amount: Ez,
        have: nz,
        item: zz(iz || ii(uz))
      }
    }

    function PM(zz) {
      return ub(zz) ? "buildAFactory2Game:machineBarMining" : bb(zz) ? "buildAFactory2Game:machineBarCutting" : void 0 !== zz.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function GM(zz) {
      var uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz;
      let {
        kind: sz,
        pl: rz,
        store: oz,
        power: Nz,
        renderSlot: vz
      } = zz;
      const {
        t: xz
      } = (0, Ln.F)(), Jz = xM(oz, rz), Az = Vu[sz], Tz = null !== (uz = null === Jz || void 0 === Jz ? void 0 : Jz.coupled) && void 0 !== uz && uz, Lz = null !== (bz = null === Jz || void 0 === Jz ? void 0 : Jz.couplerLevel) && void 0 !== bz ? bz : 1, Pz = JM(sz, Tz, Lz, null !== (Ez = null === Jz || void 0 === Jz || null === (nz = Jz.dug) || void 0 === nz ? void 0 : nz.item) && void 0 !== Ez ? Ez : null), Gz = null !== (iz = null === Jz || void 0 === Jz ? void 0 : Jz.status) && void 0 !== iz ? iz : null, az = null !== (lz = null === Jz || void 0 === Jz ? void 0 : Jz.power) && void 0 !== lz ? lz : null, Vz = null !== (Mz = null === Jz || void 0 === Jz ? void 0 : Jz.opLeftMs) && void 0 !== Mz ? Mz : null, mz = null !== (tz = null === Jz || void 0 === Jz ? void 0 : Jz.dug) && void 0 !== tz ? tz : null, qz = null !== mz && ub(Az) ? Mb[null !== (Hz = tb(mz.item)) && void 0 !== Hz ? Hz : ""] : void 0, hz = void 0 === qz ? null : 6e4 / qz, Uz = null !== (Oz = null === Jz || void 0 === Jz ? void 0 : Jz.powerCap) && void 0 !== Oz ? Oz : 4e3, cz = null !== (pz = null === Jz || void 0 === Jz ? void 0 : Jz.tier) && void 0 !== pz ? pz : null, gz = void 0 !== Pz.powerMade, Sz = null !== Az.fuelSlot ? vz(Az.fuelSlot) : null, yz = Su(Az), Dz = !Tz && !0 === (null === Jz || void 0 === Jz ? void 0 : Jz.fuelFed), Wz = !Tz && !0 === (null === Jz || void 0 === Jz ? void 0 : Jz.fuelFeeds), ez = null !== Az.fuelSlot && !Tz, jz = null !== (dz = null === Jz || void 0 === Jz ? void 0 : Jz.fuelLeftMs) && void 0 !== dz ? dz : null, Iz = function(zz, uz, bz) {
        var Ez;
        const nz = null === uz ? void 0 : ib[uz];
        return Math.max(null !== (Ez = null !== nz && void 0 !== nz ? nz : bz) && void 0 !== Ez ? Ez : 0, zz.opMs)
      }(Pz, null !== (Fz = null === Jz || void 0 === Jz ? void 0 : Jz.burning) && void 0 !== Fz ? Fz : null, jz), Bz = null !== (Zz = null === Jz || void 0 === Jz ? void 0 : Jz.fuelKeep) && void 0 !== Zz ? Zz : null, Cz = null === Gz ? null : rM(sz, Gz, Jz, Dz), Yz = null === Gz ? null : oM(Gz, Jz);
      return (0, Ti.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Ti.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: xz(ii(sz))
          }), mz && (0, Ti.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [xz("Tree Cutter" === sz ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Ti.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Ti.jsx)(Gn.c, {
                itemName: mz.item,
                amount: 0
              })
            }), (0, Ti.jsx)(an.b, {
              text: mz.name
            })]
          }), null !== hz && (0, Ti.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: xz("buildAFactory2Game:machineDigsFixed", {
              perMin: String(hz)
            })
          }), (null === Jz || void 0 === Jz ? void 0 : Jz.field) && (0, Ti.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Ti.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Ti.jsx)(Gn.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), xz("buildAFactory2Game:machineField", {
              planted: String(Jz.field[0]),
              ripe: String(Jz.field[1])
            })]
          }), (0, Ti.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Ti.jsxs)("div", {
              className: xn()("Baf2MachineColumn", {
                Baf2Burns: ez
              }),
              children: [null !== Pz.inputSlot && (0, Ti.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Ti.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: xz(NM(Pz))
                }), vz(Pz.inputSlot)]
              }), null !== Az.fuelSlot && !Tz && (0, Ti.jsxs)("div", {
                className: xn()("Baf2MachineSlot", {
                  Baf2FuelFed: Dz
                }),
                children: [(0, Ti.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [Dz && (0, Ti.jsx)(Pn.c, {
                    name: "fire"
                  }), xz("buildAFactory2Game:machineFuel")]
                }), (0, Ti.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Ti.jsx)(TM, {
                    running: "running" === Gz,
                    leftMs: jz,
                    periodMs: Iz,
                    updateCount: oz.updateCount
                  }), Sz]
                })]
              }), null !== Az.fuelSlot && Tz && (0, Ti.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Ti.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: xz("buildAFactory2Game:machineFuel")
                }), (0, Ti.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: xz("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": xz("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Ti.jsx)(Pn.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Ti.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Ti.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: xz(PM(Pz))
              }), (0, Ti.jsx)(AM, {
                running: "running" === Gz,
                opMs: Pz.opMs,
                opLeftMs: Vz,
                updateCount: oz.updateCount
              })]
            }), Pz.outputSlots.length > 0 && (0, Ti.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Ti.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: xz("buildAFactory2Game:machineOutput")
              }), (0, Ti.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Pz.outputSlots.map((zz => (0, Ti.jsx)("div", {
                  children: vz(zz)
                }, zz)))
              })]
            }), null !== az && gz && (0, Ti.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Ti.jsx)("div", {
                style: {
                  height: 100 * az / Uz + "%"
                }
              })
            })]
          }), ez && null !== Bz && (0, Ti.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Ti.jsx)(Pn.c, {
              name: "arrows-rotate"
            }), xz(bb(Pz) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Bz)
            })]
          }), (Dz || Wz) && (0, Ti.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Ti.jsx)(Pn.c, {
              name: "fire"
            }), xz(Dz ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Az.couplable && (0, Ti.jsx)(uM, {
            kind: sz,
            tier: cz,
            coupled: Tz,
            level: Lz,
            slot: yz === Az.fuelSlot ? Sz : null !== yz ? vz(yz) : null
          }), null !== az && !gz && !0 === (null === Jz || void 0 === Jz ? void 0 : Jz.reactorPowered) && (0, Ti.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: xz("buildAFactory2Game:machineReactorPowered")
          }), null !== az && !gz && !0 !== (null === Jz || void 0 === Jz ? void 0 : Jz.reactorPowered) && (0, Ti.jsx)(Vl, {
            stored: az,
            cap: Uz,
            rates: null !== (Rz = null === Jz || void 0 === Jz ? void 0 : Jz.powerRates) && void 0 !== Rz ? Rz : null
          }), (null === Jz || void 0 === Jz ? void 0 : Jz.water) && (0, Ti.jsx)(dM, {
            water: Jz.water,
            at: rz,
            side: Jz.cryo ? "waterIn" : null
          }), (null === Jz || void 0 === Jz ? void 0 : Jz.cryo) && (0, Ti.jsx)(dM, {
            water: Jz.cryo,
            at: rz,
            side: "cryoOut"
          }), null !== Jz && void 0 !== Jz && Jz.inertCoupler ? (0, Ti.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: xz("buildAFactory2Game:machineStatus_couplerOff", {
              item: li(xz, Jz.inertCoupler)
            })
          }) : null !== Cz && (0, Ti.jsx)("div", {
            className: xn()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Gz
            }),
            children: xz(Cz, Yz ? LM(xz, Yz.input, Yz.short) : void 0)
          })]
        }), (0, Ti.jsxs)("div", {
          className: xn()("Baf2MachineSide", {
            Baf2SynthSide: eu(Az)
          }),
          children: [eu(Az) && (0, Ti.jsx)(kl, {
            pl: rz,
            taught: null !== (Kz = null === Jz || void 0 === Jz ? void 0 : Jz.taught) && void 0 !== Kz ? Kz : null
          }, rz.join(",")), gz && (0, Ti.jsx)(ql, {
            kind: sz,
            def: Pz,
            pl: rz,
            power: Nz,
            stored: null !== az && void 0 !== az ? az : 0,
            cap: Uz
          }), Qz(Az) && (0, Ti.jsx)(Bl, {
            pl: rz,
            input: null !== (wz = null === Jz || void 0 === Jz ? void 0 : Jz.input) && void 0 !== wz ? wz : null,
            drops: null !== (Xz = null === Jz || void 0 === Jz ? void 0 : Jz.farm) && void 0 !== Xz ? Xz : null,
            seconds: String(Pz.opMs / 1e3)
          }), !gz && !Qz(Az) && !eu(Az) && (0, Ti.jsx)(Ml, {
            kind: sz,
            def: Pz,
            input: null !== (fz = null === Jz || void 0 === Jz ? void 0 : Jz.input) && void 0 !== fz ? fz : null,
            tier: null !== cz && void 0 !== cz ? cz : 1,
            noSeeds: !0 === (null === Jz || void 0 === Jz ? void 0 : Jz.noSeeds)
          })]
        })]
      })
    }

    function aM(zz, uz, bz, Ez) {
      var nz;
      const iz = Vu[zz],
        lz = [iz.inputSlot, iz.fuelSlot, ...null !== (nz = iz.inputSlots) && void 0 !== nz ? nz : []].filter((zz => null !== zz));
      return {
        render: nz => {
          let {
            pl: iz,
            renderSlot: lz
          } = nz;
          return (0, Ti.jsx)(Ql.Provider, {
            value: Ez,
            children: (0, Ti.jsx)(GM, {
              kind: zz,
              pl: iz,
              store: uz,
              power: bz,
              renderSlot: lz
            })
          })
        },
        quickMoveRange: lz.length > 0 ? [Math.min(...lz), Math.max(...lz) + 1] : [0, 0],
        className: vM(zz)
      }
    }
    const VM = "Assembler";

    function mM(zz) {
      var uz, bz, Ez, nz, iz, lz, Mz, tz, Hz;
      let {
        pl: Oz,
        store: pz,
        renderSlot: dz
      } = zz;
      const {
        t: Fz
      } = (0, Ln.F)(), Zz = xM(pz, Oz), Rz = null !== (uz = null === Zz || void 0 === Zz ? void 0 : Zz.tier) && void 0 !== uz ? uz : 1, Kz = null !== (bz = null === Zz || void 0 === Zz ? void 0 : Zz.taught) && void 0 !== bz ? bz : null, wz = Cu(VM, {
        coupled: !1,
        taught: Kz
      }), Xz = null !== (Ez = wz.bench) && void 0 !== Ez ? Ez : null, fz = null !== (nz = null === Zz || void 0 === Zz ? void 0 : Zz.status) && void 0 !== nz ? nz : null, sz = null !== (iz = null === Zz || void 0 === Zz ? void 0 : Zz.power) && void 0 !== iz ? iz : null, rz = null !== (lz = null === Zz || void 0 === Zz ? void 0 : Zz.powerCap) && void 0 !== lz ? lz : 4e3;
      return (0, Ti.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Ti.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Fz(ii(VM))
          }), Xz && (0, Ti.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Fz("buildAFactory2Game:benchMakes"), (0, Ti.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Ti.jsx)(Gn.c, {
                itemName: Xz.output,
                amount: 0
              })
            }), (null === Zz || void 0 === Zz ? void 0 : Zz.taughtName) && (0, Ti.jsx)(an.b, {
              text: Zz.taughtName
            }), Xz.outputAmount > 1 && (0, Ti.jsxs)("span", {
              children: ["\xd7", Xz.outputAmount]
            })]
          }), !Xz && (0, Ti.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Fz("buildAFactory2Game:benchTeachHint")
          }), (0, Ti.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Ti.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (Mz = wz.inputSlots) && void 0 !== Mz ? Mz : []).map(((zz, uz) => {
                const bz = null === Xz || void 0 === Xz ? void 0 : Xz.inputs[uz];
                return (0, Ti.jsxs)("div", {
                  className: xn()("Baf2BenchInput", {
                    Spare: !bz
                  }),
                  children: [(0, Ti.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [dz(zz), bz && (0, Ti.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Ti.jsx)(Gn.c, {
                        itemName: bz.item,
                        amount: 0
                      })
                    })]
                  }), (0, Ti.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: bz ? `\xd7${bz.amount}` : "\xa0"
                  })]
                }, zz)
              }))
            }), (0, Ti.jsx)(AM, {
              running: "running" === fz,
              opMs: wz.opMs,
              opLeftMs: null !== (tz = null === Zz || void 0 === Zz ? void 0 : Zz.opLeftMs) && void 0 !== tz ? tz : null,
              updateCount: pz.updateCount
            }), (0, Ti.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Ti.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Fz("buildAFactory2Game:machineOutput")
              }), (0, Ti.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: wz.outputSlots.map((zz => (0, Ti.jsx)("div", {
                  children: dz(zz)
                }, zz)))
              })]
            })]
          }), null !== sz && (0, Ti.jsx)(Vl, {
            stored: sz,
            cap: rz,
            rates: null !== (Hz = null === Zz || void 0 === Zz ? void 0 : Zz.powerRates) && void 0 !== Hz ? Hz : null
          }), null !== fz && (0, Ti.jsx)("div", {
            className: xn()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== fz
            }),
            children: Fz(rM(VM, fz, Zz, !1))
          }), Xz && Xz.inputs.length > 1 && (0, Ti.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Fz("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Ti.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Ti.jsx)(Hl, {
            taught: Kz,
            tier: Rz
          }), Xz && (0, Ti.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Fz("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function qM(zz) {
      var uz;
      const bz = null !== (uz = Vu[VM].inputSlots) && void 0 !== uz ? uz : [];
      return {
        render: uz => {
          let {
            pl: bz,
            renderSlot: Ez
          } = uz;
          return (0, Ti.jsx)(mM, {
            pl: bz,
            store: zz,
            renderSlot: Ez
          })
        },
        quickMoveRange: [Math.min(...bz), Math.max(...bz) + 1],
        className: vM(VM)
      }
    }
    var hM = bz(96),
      UM = bz(1114),
      cM = bz(4035);
    const gM = 600,
      SM = .5,
      yM = 4,
      DM = 1200,
      QM = 140,
      WM = 100,
      eM = 32,
      jM = 16,
      IM = 100.5,
      BM = 90,
      CM = 1.5,
      YM = 50;

    function kM(zz) {
      switch (Pb(zz)) {
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
    const zt = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function ut(zz) {
      const uz = Math.ceil(60 * zz / WM);
      return {
        fuel: Math.max(eM, uz),
        waste: Math.max(jM, uz)
      }
    }

    function bt(zz, uz, bz) {
      const [Ez, nz, iz] = [zz - 2, uz - 2, bz - 2];
      return 2 * (Ez * nz + nz * iz + iz * Ez) * QM
    }

    function Et(zz, uz, bz) {
      return Math.max(0, zz - 2) * Math.max(0, uz - 2) * Math.max(0, bz - 2)
    }

    function nt(zz, uz) {
      const [bz, Ez, nz] = zz, iz = bz * Ez * nz, lz = new Float32Array(iz);
      let Mz = 0,
        tz = 0,
        Hz = 0,
        Oz = 0,
        pz = 0;
      const dz = (zz, iz, lz) => zz < 0 || zz >= bz || iz < 0 || iz >= Ez || lz < 0 || lz >= nz ? 0 : uz[(iz * nz + lz) * bz + zz];
      for (let Kz = 0; Kz < Ez; Kz++)
        for (let zz = 0; zz < nz; zz++)
          for (let Ez = 0; Ez < bz; Ez++) {
            const iz = (Kz * nz + zz) * bz + Ez,
              Fz = uz[iz];
            if (1 === Fz) {
              Mz++;
              let uz = 0;
              for (const [bz, nz, iz] of zt) {
                const lz = dz(Ez + bz, Kz + nz, zz + iz);
                1 !== lz && 2 !== lz || uz++
              }
              lz[iz] = gM * (1 + SM * Math.min(uz, yM)), Oz += lz[iz]
            } else if (2 === Fz) tz++;
            else if (3 === Fz) {
              Hz++;
              zt.some((uz => {
                let [bz, nz, iz] = uz;
                return 1 === dz(Ez + bz, Kz + nz, zz + iz)
              })) && (pz += DM)
            }
          }
      const Fz = bt(bz + 2, Ez + 2, nz + 2),
        Zz = Math.min(Oz, pz, Fz),
        Rz = Mz > 0 ? Oz * WM / Mz : 0;
      return {
        rods: Mz,
        graphite: tz,
        channels: Hz,
        fuelHeat: Oz,
        cooling: pz,
        size: Fz,
        max: Zz,
        vol: iz,
        powerPerUnit: Rz,
        pelletsPerMin: Rz > 0 ? Zz / Rz * 60 : 0,
        waterPerS: Zz * Yz.q,
        rodHeat: lz
      }
    }
    const it = 0,
      lt = 1,
      Mt = 6,
      tt = 7,
      Ht = 8;

    function Ot(zz, uz) {
      const [bz, Ez, nz] = zz, iz = new Uint8Array(bz * Ez * nz), lz = (zz, iz, lz) => zz < 0 || zz >= bz || iz < 0 || iz >= Ez || lz < 0 || lz >= nz ? 0 : uz[(iz * nz + lz) * bz + zz];
      for (let Mz = 0; Mz < Ez; Mz++)
        for (let zz = 0; zz < nz; zz++)
          for (let Ez = 0; Ez < bz; Ez++) {
            const tz = (Mz * nz + zz) * bz + Ez,
              Hz = uz[tz];
            if (1 === Hz) {
              let uz = 0;
              for (const [bz, nz, iz] of zt) {
                const tz = lz(Ez + bz, Mz + nz, zz + iz);
                uz += 1 === tz || 2 === tz ? 1 : 0
              }
              iz[tz] = lt + Math.min(uz, yM)
            } else if (3 === Hz) {
              const uz = zt.some((uz => {
                let [bz, nz, iz] = uz;
                return 1 === lz(Ez + bz, Mz + nz, zz + iz)
              }));
              iz[tz] = uz ? Mt : tt
            } else 2 === Hz && (iz[tz] = Ht)
          }
      return iz
    }

    function pt(zz) {
      return zz.fuelHeat <= zz.cooling && zz.fuelHeat <= zz.size ? "fuel" : zz.cooling <= zz.size ? "cooling" : "size"
    }
    const dt = BM;

    function Ft(zz, uz, bz) {
      return Math.round(zz * uz * bz * 25e3 * (1 + .25 * (Math.min(zz, uz, bz) - 2)))
    }

    function Zt(zz) {
      return Math.max(0, Math.min(Yz.h, zz))
    }

    function Rt(zz, uz, bz) {
      const Ez = uz * Zt(bz);
      return zz <= 0 ? 0 : Ez > 0 ? Math.min(200, 100 * zz / Ez) : 200
    }

    function Kt(zz, uz) {
      const bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? CM : 1;
      return Math.min(zz.fuelHeat * bz, zz.cooling * Zt(uz), zz.size * bz)
    }

    function wt(zz) {
      return 2 + zz / 10
    }
    const Xt = "buildAFactory2Game:";

    function ft(zz) {
      var uz;
      return null !== (uz = zz.baf2RxMood) && void 0 !== uz ? uz : function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const bz = [
          ["calm", 50],
          ["warm", dt],
          ["hot", IM]
        ];
        for (const [Ez, nz] of bz)
          if (zz < nz + (Ez === uz ? 3 : 0)) return Ez;
        return "alarm"
      }(zz.baf2RxHeat)
    }
    const st = 120;

    function rt(zz) {
      const uz = zz.baf2RxState;
      if ("running" === uz && zz.baf2RxHeat > IM) return {
        label: `${Xt}rxState_tooHot`,
        tone: "bad",
        fix: `${Xt}rxFix_tooHot`
      };
      switch (uz) {
        case "running":
          return {
            label: `${Xt}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Xt}rxState_idle`, tone: "off", fix: `${Xt}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Xt}rxState_scram`, tone: "off", fix: zz.baf2RxHeat < YM ? `${Xt}rxFix_scramCool` : `${Xt}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Xt}rxState_${uz}`, tone: "off", fix: `${Xt}rxFix_${uz}`
          };
        case "melted":
          return {
            label: `${Xt}rxState_melted`, tone: "bad", fix: `${Xt}rxFix_melted`
          };
        default:
          return {
            label: `${Xt}rxState_${uz}`, tone: "warn", fix: `${Xt}rxFix_${uz}`
          }
      }
    }

    function ot(zz) {
      const [uz, bz, Ez] = zz.baf2RxStats;
      return {
        fuelHeat: uz,
        cooling: bz * (zz.baf2RxCryo ? Math.max(1, Zt(zz.baf2RxWater / 100)) : 1),
        size: Ez
      }
    }

    function Nt(zz) {
      var uz;
      const bz = "idle" === zz.baf2RxState || "running" === zz.baf2RxState && zz.baf2RxHeat <= IM || "scram" === zz.baf2RxState && zz.baf2RxHeat < YM;
      if (0 === (zz.baf2RxFlags & su) || !zz.baf2RxFormed || !bz) return null;
      const {
        fuelHeat: Ez,
        cooling: nz,
        size: iz
      } = ot(zz), lz = Math.min(Ez, nz, iz), Mz = pt({
        fuelHeat: Ez,
        cooling: nz,
        size: iz
      }), tz = "cooling" === Mz && !0 === zz.baf2RxCryoOpen && !zz.baf2RxCryo, Hz = null !== (uz = zz.baf2RxCells) && void 0 !== uz ? uz : "", Oz = ("fuel" === Mz || "cooling" === Mz && !0 === zz.baf2RxCryo) && Hz.length > 0 && !Hz.includes(String(0)), pz = tz ? "Cryo" : "scram" === zz.baf2RxState ? "Off" : "";
      return lz < 12e3 ? {
        key: `${Xt}rxGrow_${Oz?"full":Mz}${pz}`,
        amount: lz
      } : null
    }

    function vt(zz, uz) {
      return zz[0] === uz[0] && zz[1] === uz[1] && zz[2] === uz[2]
    }

    function xt(zz) {
      return [...zz].sort(((zz, uz) => Number(uz[2] < uz[1]) - Number(zz[2] < zz[1])))
    }

    function Jt(zz, uz) {
      return uz.some((uz => {
        let [bz, Ez] = uz;
        return !(Ez <= 0) && ["edge", "cap", "wall", "inside"].some((uz => bz === iE(zz, uz)))
      }))
    }

    function At(zz, uz, bz) {
      const Ez = zz.baf2RxFuel - zz.baf2RxPu > 0 ? bz : 0;
      return {
        full: zz.baf2RxWaste > uz - 3,
        fullInS: Ez > 0 ? Math.max(0, uz - zz.baf2RxWaste) / Ez : null
      }
    }
    const Tt = {
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

    function Lt(zz) {
      return Pt[zz]
    }
    const Pt = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Gt(zz) {
      let [uz, bz, Ez] = zz;
      return Math.ceil(bt(uz, bz, Ez) * Yz.q)
    }

    function Vt(zz, uz) {
      return "battery" === zz ? uz[0] * uz[1] * uz[2] : function(zz) {
        let [uz, bz, Ez] = zz;
        return uz * bz * Ez - Math.max(0, uz - 2) * Math.max(0, bz - 2) * Math.max(0, Ez - 2)
      }(uz) - 1
    }

    function mt(zz) {
      const uz = Math.max(0, zz);
      if (uz < 10) return String(Math.round(10 * uz) / 10);
      if (uz < 1e4) return Math.round(uz).toLocaleString("en-US");
      if (uz < 1e6) return `${uz<1e5?(Math.floor(uz/100)/10).toFixed(1):Math.floor(uz/1e3)}k`;
      const bz = uz / 1e6;
      return `${bz<10?(Math.floor(100*bz)/100).toFixed(2):bz<100?(Math.floor(10*bz)/10).toFixed(1):Math.floor(bz)}M`
    }

    function qt(zz) {
      return zz <= 0 ? "0" : zz >= 10 ? String(Math.round(zz)) : zz.toFixed(zz >= 1 ? 1 : 2)
    }

    function ht(zz) {
      const uz = Yb(zz, 0),
        bz = Yb(zz, jb(zz) - 1);
      return {
        lo: [Math.min(uz[0], bz[0]), Math.min(uz[1], bz[1]), Math.min(uz[2], bz[2])],
        hi: [Math.max(uz[0], bz[0]) + 1, Math.max(uz[1], bz[1]) + 1, Math.max(uz[2], bz[2]) + 1]
      }
    }

    function Ut(zz, uz, bz) {
      const Ez = [uz[0] - zz[0], uz[1] - zz[1], uz[2] - zz[2]],
        nz = [(zz[0] + uz[0]) / 2, (zz[1] + uz[1]) / 2, (zz[2] + uz[2]) / 2],
        iz = [];
      for (let lz = 0; lz < 3; lz++) {
        const Mz = (lz + 1) % 3,
          tz = (lz + 2) % 3;
        for (const Hz of [zz[Mz], uz[Mz]])
          for (const Oz of [zz[tz], uz[tz]]) {
            const zz = [0, 0, 0],
              uz = [bz, bz, bz];
            zz[lz] = nz[lz], uz[lz] = Ez[lz] + bz, zz[Mz] = Hz, zz[tz] = Oz, iz.push([zz, uz])
          }
      }
      return iz
    }
    const ct = "buildAFactory2Game:",
      gt = [`${ct}colNorth`, `${ct}colEast`, `${ct}colSouth`, `${ct}colWest`];

    function St(zz, uz) {
      const [bz, Ez, nz] = zz.baf2ColAt;
      return `baf2col ${bz} ${Ez} ${nz} ${uz}`
    }

    function yt(zz) {
      return function(zz) {
        if (!Number.isFinite(zz)) return "";
        const uz = Math.max(1, Math.round(zz));
        if (uz < 60) return `${uz}s`;
        const bz = uz % 60;
        return 0 === bz ? uz / 60 + "m" : `${Math.floor(uz/60)}m ${bz}s`
      }(function(zz) {
        const uz = lE.FOCUS_BY_LASERS[Math.max(0, Math.min(4, zz))];
        return uz > 0 ? lE.NOVA_FOCUS / uz : 1 / 0
      }(zz))
    }

    function Dt(zz) {
      const uz = Math.abs(Math.round(zz));
      return uz < 1e3 ? Math.round(zz).toLocaleString("en-US") : uz < 1e6 ? `${uz<1e5?(zz/1e3).toFixed(1).replace(/\.0$/,""):Math.round(zz/1e3)}k` : `${(zz/1e6).toFixed(uz<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Qt(zz, uz, bz) {
      if (dE(uz) >= 0) {
        const uz = function(zz, uz) {
          return zz.find((zz => {
            let {
              focus: bz
            } = zz;
            return bz[0] === uz[0] && bz[2] === uz[2] && (uz[1] === bz[1] || uz[1] === bz[1] - 1)
          }))
        }(zz, bz);
        if (!uz) return null;
        const nz = function(zz) {
          let uz = 0,
            bz = 0;
          for (let Ez = 0; Ez < 4; Ez++) uz += zz.laser[Ez] ? 1 : 0, bz += zz.live[Ez] ? 1 : 0;
          return {
            lasers: uz,
            live: bz,
            focusPerS: lE.FOCUS_BY_LASERS[bz],
            drawPerS: lE.LASER_DRAW * bz
          }
        }({
          laser: uz.lasers,
          live: uz.live
        });
        if (0 === nz.lasers || "noLasers" === uz.state) return {
          key: `${ct}lookColNoLasers`
        };
        if (0 === nz.live) return {
          key: `${ct}lookColOff_blocked`
        };
        if (!(uz.on && nz.live > 0) && ("running" !== (Ez = uz.state) && "slowed" !== Ez)) return {
          key: `${ct}lookColOff_${uz.state}`
        };
        if (nz.live < nz.lasers) return {
          key: `${ct}lookColLasersSome`,
          params: {
            lasers: String(nz.lasers),
            live: String(nz.live)
          }
        };
        const iz = uz.open.filter(Boolean).length;
        return iz < 4 ? {
          key: `${ct}lookColLasersSpots`,
          params: {
            live: String(nz.live),
            spots: String(iz),
            time: yt(nz.live)
          }
        } : {
          key: `${ct}lookColLasers`,
          params: {
            live: String(nz.live),
            time: yt(nz.live)
          }
        }
      }
      var Ez;
      if (!FE(uz)) return null;
      const nz = function(zz, uz) {
        for (const bz of zz) {
          const zz = wE(bz.focus, [uz[0], uz[1], uz[2]]);
          if (zz && zz.oM === lE.LASER_D && bz.lasers[zz.dir]) return {
            entry: bz,
            dir: zz.dir
          }
        }
        return null
      }(zz, bz);
      if (!nz) return {
        key: `${ct}lookLaserNoCollider`
      };
      const {
        entry: iz,
        dir: lz
      } = nz;
      return iz.open[lz] ? iz.live[lz] ? {
        key: iz.on ? `${ct}lookLaserFiring` : `${ct}lookLaserReady`
      } : {
        key: `${ct}lookLaserBlocked`
      } : {
        key: `${ct}lookLaserClosed`
      }
    }

    function Wt(zz, uz) {
      const bz = [];
      for (let Ez = 1; Ez < lE.LASER_D; Ez++) zz & 1 << uz * (lE.LASER_D - 1) + Ez - 1 && bz.push(Ez);
      return bz
    }
    const et = {
      firing: `${ct}colSlotFiring`,
      ready: `${ct}colSlotReady`,
      blocked: `${ct}colSlotBlocked`,
      empty: `${ct}colSlotEmpty`,
      closed: `${ct}colSlotClosed`
    };

    function jt(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const iz = Mn(zz),
        lz = Mn(uz),
        Mz = Mn(bz),
        tz = Mz.filter(Boolean).length,
        Hz = iz.filter(Boolean).length,
        Oz = [0, 1, 2, 3].map((zz => lz[zz] ? iz[zz] ? Mz[zz] ? Ez ? "firing" : "ready" : "blocked" : (zz => Wt(nz, zz).length > 0)(zz) ? "blocked" : "empty" : "closed")),
        pz = Oz.indexOf("blocked"),
        dz = pz < 0 && Hz > 0 ? Oz.indexOf("empty") : -1;
      return Oz.map(((zz, uz) => {
        const bz = uz === pz ? {
          key: `${ct}colSlotClear`
        } : uz === dz ? {
          key: `${ct}colSlotAdd`,
          params: {
            time: yt(Math.min(4, tz + 1))
          }
        } : null;
        return {
          dir: uz,
          tone: zz,
          title: {
            key: "blocked" !== zz || iz[uz] ? et[zz] : `${ct}colSlotGap`,
            keys: {
              dir: gt[uz]
            }
          },
          hint: bz
        }
      }))
    }

    function It(zz) {
      var uz;
      return "noPower" === zz.baf2ColState && zz.baf2ColRxState ? rt({
        baf2RxState: zz.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (uz = zz.baf2ColRxHeat) && void 0 !== uz ? uz : 0
      }) : null
    }

    function Bt(zz) {
      const uz = Mn(zz.baf2ColSpots).filter(Boolean).length,
        bz = Mn(zz.baf2ColLive);
      let Ez = 0,
        nz = 0;
      return Mn(zz.baf2ColLasers).forEach(((zz, uz) => {
        zz && (Ez++, nz += bz[uz] ? 0 : 1)
      })), nz > 0 ? {
        key: `${ct}colSubSome`,
        params: {
          blocked: String(nz),
          lasers: String(Ez)
        }
      } : uz < 4 ? {
        key: `${ct}colSubSpots`,
        params: {
          lasers: String(Ez),
          spots: String(uz)
        }
      } : {
        key: `${ct}colSub`,
        params: {
          lasers: String(Ez)
        }
      }
    }

    function Ct(zz) {
      const uz = It(zz);
      if ("idle" === zz.baf2ColRxState && uz) return {
        key: `${ct}colState_noPowerIdle`
      };
      if (uz) return {
        key: `${ct}colState_noPowerReactor`,
        keys: {
          state: uz.label
        }
      };
      if ("noInput" !== zz.baf2ColState) return {
        key: `${ct}colState_${zz.baf2ColState}`
      };
      const bz = String(Math.max(0, lE.NOVA_SA - zz.baf2ColSa)),
        Ez = String(Math.max(0, lE.NOVA_GD - zz.baf2ColGd));
      return "0" !== bz && "0" !== Ez ? {
        key: `${ct}colState_noInput`,
        params: {
          sa: bz,
          gd: Ez
        }
      } : "0" !== bz ? {
        key: `${ct}colState_noStarAlloy`,
        params: {
          sa: bz
        }
      } : "0" !== Ez ? {
        key: `${ct}colState_noGlowDust`,
        params: {
          gd: Ez
        }
      } : {
        key: `${ct}colState_running`
      }
    }

    function Yt(zz) {
      return zz.baf2ColP < 0 ? `${ct}colNext` : function(zz) {
        const uz = zz.baf2ColState;
        return zz.baf2ColP >= 0 && ("blocked" === uz || "noLasers" === uz || "noPower" === uz)
      }(zz) ? `${ct}colStalled` : null === kt(zz) ? `${ct}colMaking` : `${ct}colNovaIn`
    }

    function kt(zz) {
      if (zz.baf2ColP < 0 || zz.baf2ColWant <= 0) return null;
      const uz = zz.baf2ColFocusPerS * Math.min(1, zz.baf2ColDraw / zz.baf2ColWant);
      return uz > 0 ? Math.max(0, lE.NOVA_FOCUS - zz.baf2ColP) / uz : null
    }

    function zH(zz, uz) {
      const bz = [];
      for (let Ez = 1; Ez <= 3; Ez++) {
        const nz = [zz[0], zz[1] - Ez, zz[2]];
        if (!uz(nz)) return bz;
        bz.push(nz)
      }
      return []
    }

    function uH(zz, uz) {
      const bz = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Ez = 0; Ez < 4; Ez++) {
        const nz = Ez,
          iz = KE(zz.focus, nz, lE.LASER_D);
        if (zz.lasers[Ez] || !zz.open[Ez] || !uz(iz)) continue;
        const lz = [];
        for (let bz = 1; bz < lE.LASER_D; bz++) {
          const Ez = KE(zz.focus, nz, bz);
          uz(Ez) || lz.push(Ez)
        }
        bz.supports.push(...zH(iz, uz)), 0 === lz.length ? bz.free.push(iz) : (bz.blocked.push(iz), bz.gaps.push(...lz))
      }
      return bz
    }
    const bH = lE.LASER_D - .25,
      EH = 4,
      nH = 2,
      iH = 16;
    const lH = {
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
        blendMode: cM.d.Standard,
        soft: !0
      },
      MH = {
        green: lH,
        pink: {
          ...lH,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function tH(zz, uz) {
      const bz = {
        ...uz.params
      };
      for (const [nz, iz] of Object.entries(null !== (Ez = uz.keys) && void 0 !== Ez ? Ez : {})) {
        var Ez;
        bz[nz] = zz(iz)
      }
      return bz
    }
    const HH = "buildAFactory2Game:",
      OH = 2 * lE.LASER_D + 1,
      pH = lE.LASER_D;

    function dH(zz) {
      return zz(`${HH}colFocusTip`, {
        need: Dt(lE.NOVA_FOCUS)
      })
    }

    function FH(zz, uz) {
      return zz(uz.key, tH(zz, uz))
    }

    function ZH(zz) {
      const uz = zz.getStatus();
      return {
        status: uz,
        entry: uz ? zz.entryAtRoot(uz.baf2ColAt) : void 0
      }
    }

    function RH(zz, uz) {
      return {
        left: 100 * (pH + zz) / OH + "%",
        top: 100 * (pH + uz) / OH + "%"
      }
    }

    function KH(zz) {
      let {
        status: uz,
        entry: bz
      } = zz;
      const Ez = Mn(uz.baf2ColLasers),
        nz = Mn(uz.baf2ColSpots),
        iz = Mn(uz.baf2ColLive),
        lz = !0 === (null === bz || void 0 === bz ? void 0 : bz.on),
        Mz = lE.LASER_D,
        tz = [];
      for (let Fz = 0; Fz < 4; Fz++) {
        const [zz, , uz] = RE[Fz];
        if (iz[Fz]) {
          const bz = 100 * (Mz - 1) / OH,
            Ez = zz + uz > 0 ? 100 * (pH + 1) / OH : 100 * (pH - (Mz - 1)) / OH,
            nz = 100 * (pH + .35) / OH,
            iz = 30 / OH,
            Hz = 0 !== zz ? {
              left: `${Ez}%`,
              width: `${bz}%`,
              top: `${nz}%`,
              height: `${iz}%`
            } : {
              top: `${Ez}%`,
              height: `${bz}%`,
              left: `${nz}%`,
              width: `${iz}%`
            };
          tz.push((0, Ti.jsx)("i", {
            className: xn()("Baf2ColDiagramBeam", {
              Off: !lz
            }),
            style: Hz
          }, `beam${Fz}`))
        }
        const bz = Ez[Fz] ? "Baf2ColDiagramLaser" : nz[Fz] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        tz.push((0, Ti.jsx)("i", {
          className: bz,
          style: RH(zz * Mz, uz * Mz)
        }, `spot${Fz}`))
      }
      for (let Fz = 0; Fz < 4; Fz++) {
        if (Ez[Fz] || !nz[Fz]) continue;
        const [zz, , bz] = RE[Fz];
        for (const Ez of Wt(null !== (Hz = uz.baf2ColGaps) && void 0 !== Hz ? Hz : 0, Fz)) {
          var Hz;
          tz.push((0, Ti.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: RH(zz * Ez, bz * Ez)
          }, `gap${Fz},${Ez}`))
        }
      }
      for (const [Fz, , Zz] of null !== (Oz = null === bz || void 0 === bz ? void 0 : bz.blockers) && void 0 !== Oz ? Oz : []) {
        var Oz, pz, dz;
        const zz = Fz - (null !== (pz = null === bz || void 0 === bz ? void 0 : bz.focus[0]) && void 0 !== pz ? pz : 0),
          uz = Zz - (null !== (dz = null === bz || void 0 === bz ? void 0 : bz.focus[2]) && void 0 !== dz ? dz : 0);
        tz.push((0, Ti.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: RH(zz, uz)
        }, `block${zz},${uz}`))
      }
      return (0, Ti.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [tz, (0, Ti.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function wH(zz) {
      let {
        status: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)(), Ez = Mn(uz.baf2ColLive).filter(Boolean).length;
      return (0, Ti.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: dH(bz),
          children: bz(`${HH}colLadder`)
        }), (0, Ti.jsx)("ul", {
          children: [1, 2, 3, 4].map((zz => (0, Ti.jsx)("li", {
            className: xn()({
              On: zz === Ez
            }),
            children: bz(`${HH}colLadderChip`, {
              lasers: String(zz),
              time: yt(zz)
            })
          }, zz)))
        })]
      })
    }

    function XH(zz) {
      let {
        item: uz,
        yM: bz,
        need: Ez,
        cap: nz
      } = zz;
      const {
        t: iz
      } = (0, Ln.F)(), lz = Math.min(bz, Ez);
      return (0, Ti.jsxs)("li", {
        className: xn()("Baf2ColTile", {
          Short: bz < Ez
        }),
        children: [(0, Ti.jsx)(fH, {
          item: uz
        }), (0, Ti.jsx)("b", {
          className: "Baf2ColTileValue",
          children: iz(`${HH}colOutOf`, {
            amount: String(lz),
            cap: String(Ez)
          })
        }), (0, Ti.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Ti.jsx)("i", {
            style: {
              width: 100 * lz / Ez + "%"
            }
          })
        }), bz > Ez && (0, Ti.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: iz(`${HH}colIntakeHeld`, {
            amount: String(bz),
            cap: String(nz)
          })
        })]
      })
    }

    function fH(zz) {
      let {
        item: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)();
      return (0, Ti.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Ti.jsx)(Gn.c, {
            itemName: uz,
            amount: 0
          })
        }), (0, Ti.jsx)("span", {
          className: "Baf2ColTileName",
          children: li(bz, uz)
        })]
      })
    }

    function sH(zz) {
      switch (zz.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function rH(zz) {
      var uz, bz, nz;
      let {
        store: iz,
        close: lz
      } = zz;
      const {
        t: Mz
      } = (0, Ln.F)(), tz = Wl(), {
        status: Hz,
        entry: Oz
      } = function(zz) {
        const [uz, bz] = (0, Ez.useState)((() => ZH(zz)));
        return (0, Ez.useEffect)((() => (bz(ZH(zz)), zz.subscribe((() => {
          bz(ZH(zz))
        })))), [zz]), uz
      }(iz), [pz, dz] = (0, Ez.useState)(null), Fz = null === Hz || void 0 === Hz ? void 0 : Hz.baf2ColHold;
      (0, Ez.useEffect)((() => {
        dz(null)
      }), [Fz]);
      const Zz = (0, Ez.useRef)({
          p: -1,
          n: 0
        }),
        Rz = null !== (uz = null === Hz || void 0 === Hz ? void 0 : Hz.baf2ColP) && void 0 !== uz ? uz : -1;
      Rz < Zz.current.p && Zz.current.n++, Zz.current.p = Rz;
      const Kz = (0, Ez.useRef)(null),
        [wz] = (0, Ez.useState)((() => {
          return (zz = iz.heldAtOpen()) === HE || zz === OE ? {
            key: `${ct}colBeltItIn`,
            item: zz
          } : null;
          var zz
        }));
      if (!Hz) return null;
      const Xz = Hz.baf2ColMember,
        fz = Hz.baf2ColP >= 0,
        sz = function(zz, uz) {
          if (zz.baf2ColP >= 0 && zz.baf2ColDraw > 0) {
            const uz = zz.baf2ColWant > 0 ? Math.min(1, zz.baf2ColDraw / zz.baf2ColWant) : 0;
            return {
              focus: zz.baf2ColFocusPerS * uz,
              draw: zz.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === zz.baf2ColState && uz && uz.draw > 0 ? {
            ...uz,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Hz, Kz.current);
      Kz.current = sz.draw > 0 ? sz : null;
      const rz = "slowed" === Hz.baf2ColState || "noPower" === Hz.baf2ColState,
        oz = kt(Hz),
        Nz = null !== pz && void 0 !== pz ? pz : Hz.baf2ColHold,
        vz = function(zz) {
          var uz, bz;
          return "idle" === zz.baf2ColRxState ? null : null !== (uz = null === (bz = It(zz)) || void 0 === bz ? void 0 : bz.fix) && void 0 !== uz ? uz : null
        }(Hz),
        xz = null === vz && null === wz ? function(zz) {
          var uz;
          const bz = zz.baf2ColSentTo;
          if (!bz) return null;
          const Ez = null !== (uz = zz.baf2ColSentHeld) && void 0 !== uz ? uz : null;
          return {
            key: null === Ez ? `${ct}colNovaSentToMachine` : `${ct}colNovaSentTo`,
            target: bz,
            yM: Ez
          }
        }(Hz) : null,
        Jz = fz ? Mz(`${HH}colFocusOf`, {
          focus: Dt(Hz.baf2ColP),
          need: Dt(lE.NOVA_FOCUS)
        }) : null;
      return (0, Ti.jsx)(xl.d, {
        close: lz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Ti.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Ti.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Ti.jsx)(Gn.c, {
                  itemName: ME,
                  amount: 0
                })
              }), (0, Ti.jsxs)("div", {
                children: [(0, Ti.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: li(Mz, ME)
                }), (0, Ti.jsx)("p", {
                  children: FH(Mz, Bt(Hz))
                })]
              })]
            }), (0, Ti.jsx)(Jl.m, {
              onClick: lz
            })]
          }), (0, Ti.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Ti.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Ti.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Ti.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: Mz(Yt(Hz), {
                    time: null === oz ? "" : vi(Mz, oz)
                  })
                }), (0, Ti.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Ti.jsx)("i", {
                    style: {
                      width: (fz ? 100 * Hz.baf2ColP / lE.NOVA_FOCUS : 0) + "%"
                    }
                  }, Zz.current.n)
                }), (0, Ti.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Ti.jsxs)("span", {
                    title: dH(Mz),
                    children: [(0, Ti.jsx)("b", {
                      children: Dt(sz.focus)
                    }), " ", Mz(`${HH}colFocusPerS`)]
                  }), (0, Ti.jsxs)("span", {
                    className: xn()("Baf2ColDraw", {
                      Short: rz
                    }),
                    children: [(0, Ti.jsx)(Pn.c, {
                      name: "bolt"
                    }), rz ? Mz(`${HH}colDrawOf`, {
                      draw: Dt(Hz.baf2ColDraw),
                      want: Dt(Hz.baf2ColWant)
                    }) : Mz(`${HH}colPowerPerS`, {
                      rate: Dt(sz.draw)
                    })]
                  }), null !== Jz && (0, Ti.jsx)("span", {
                    className: "Soft",
                    children: Jz
                  })]
                })]
              }), (0, Ti.jsx)("p", {
                className: xn()("Baf2ColState", sH(Hz)),
                children: FH(Mz, Ct(Hz))
              }), null !== vz && (0, Ti.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Mz(vz)
              }), null === vz && null !== wz && (0, Ti.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Mz(wz.key, {
                  item: li(Mz, wz.item)
                })
              }), xz && (0, Ti.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Mz(xz.key, {
                  target: li(Mz, xz.target),
                  amount: String(null !== (bz = xz.yM) && void 0 !== bz ? bz : 0)
                })
              }), (0, Ti.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Ti.jsx)(XH, {
                  item: HE,
                  yM: Hz.baf2ColSa,
                  need: lE.NOVA_SA,
                  cap: lE.SA_CAP
                }), (0, Ti.jsx)(XH, {
                  item: OE,
                  yM: Hz.baf2ColGd,
                  need: lE.NOVA_GD,
                  cap: lE.GD_CAP
                }), (0, Ti.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Ti.jsx)(fH, {
                    item: "Nova Matter"
                  }), (0, Ti.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: Mz(`${HH}colNovaHeld`, {
                      amount: String(Hz.baf2ColOut),
                      cap: String(lE.OUT_CAP)
                    })
                  }), Xz && (0, Ti.jsx)(Jl.q, {
                    className: "Baf2ColTake",
                    disabled: 0 === Hz.baf2ColOut,
                    onClick: () => {
                      tz.send(St(Hz, "take"))
                    },
                    children: Mz(`${HH}colTake`)
                  })]
                })]
              }), Xz && (0, Ti.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Nz,
                className: xn()("Baf2ColHold", {
                  On: Nz
                }),
                onClick: zz => {
                  zz.detail > 0 && zz.currentTarget.blur(), dz(!Nz), tz.send(St(Hz, "hold " + (Nz ? 0 : 1)))
                },
                children: [(0, Ti.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Ti.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Ti.jsx)("b", {
                    children: Mz(`${HH}colHold`)
                  }), (0, Ti.jsx)("span", {
                    children: Mz(`${HH}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Ti.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Ti.jsx)(KH, {
                status: Hz,
                entry: Oz
              }), (0, Ti.jsx)("ul", {
                className: "Baf2ColSlots",
                children: jt(Hz.baf2ColLasers, Hz.baf2ColSpots, Hz.baf2ColLive, sz.beamsOn, null !== (nz = Hz.baf2ColGaps) && void 0 !== nz ? nz : 0).map((zz => (0, Ti.jsxs)("li", {
                  className: zz.tone,
                  children: [(0, Ti.jsx)("b", {
                    children: FH(Mz, zz.title)
                  }), null !== zz.hint && (0, Ti.jsx)("span", {
                    children: FH(Mz, zz.hint)
                  })]
                }, zz.dir)))
              }), (0, Ti.jsx)(wH, {
                status: Hz
              })]
            })]
          })]
        })
      })
    }
    const oH = "buildAFactory2Game:",
      NH = 36e5,
      vH = 864e5;

    function xH(zz, uz, bz) {
      return Math.max(0, Math.ceil((zz + uz - Math.max(bz, zz)) / 1e3))
    }

    function JH(zz) {
      return zz.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function AH(zz) {
      return "Homestead" === zz
    }

    function TH(zz) {
      return function(zz) {
        let uz = 0;
        for (const bz of zz) {
          const zz = /^Island ([1-9]\d{0,5})$/.exec(bz);
          zz && (uz = Math.max(uz, Number(zz[1])))
        }
        return `Island ${uz+1}`
      }(zz.map((zz => zz.baf2IslandName)))
    }

    function LH(zz, uz) {
      return function(zz) {
        return `${oH}islandsBlocked${zz[0].toUpperCase()}${zz.slice(1)}`
      }("degraded" === zz && 0 === uz ? "stuck" : zz)
    }

    function PH(zz) {
      return zz.filter((zz => {
        var uz;
        return !zz.baf2IslandActive && void 0 === zz.baf2IslandUnreadable && void 0 === (null === (uz = zz.baf2IslandCoop) || void 0 === uz ? void 0 : uz.baf2CoopState)
      })).length
    }

    function GH(zz) {
      return "coopMoving" === zz || "coopUnreachable" === zz
    }

    function aH(zz, uz) {
      const bz = uz > 0;
      return {
        change: null === zz && !bz,
        switch: (null === zz || "degraded" === zz || GH(zz)) && !bz,
        rename: "loading" !== zz && "degraded" !== zz && "stuck" !== zz
      }
    }

    function VH(zz, uz) {
      return void 0 === zz || "corrupt" === zz && uz
    }
    const mH = Ul;

    function qH(zz, uz, bz) {
      if (null !== zz && void 0 !== zz && zz.untilGone) {
        var Ez;
        return !("dismiss" === zz.untilGone && void 0 === (null === (Ez = uz.baf2IslandCoop) || void 0 === Ez ? void 0 : Ez.baf2CoopState)) && bz - zz.atMs < 32500
      }
      return void 0 !== zz && bz - zz.atMs < mH && uz.baf2IslandName === zz.from
    }
    const hH = Ul;

    function UH(zz) {
      return "core" === (null === zz || void 0 === zz ? void 0 : zz.kind) ? zz.core : "islands" === (null === zz || void 0 === zz ? void 0 : zz.kind) ? zz.backToCore : void 0
    }

    function cH(zz) {
      return `\0${zz}\0`
    }

    function gH(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Ez = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const iz of Object.keys(bz)) Ez[iz] = cH(iz);
      let nz = Object.keys(Ez).length > 0 ? zz(uz, Ez) : zz(uz);
      for (const [iz, lz] of Object.entries(bz)) nz = nz.split(cH(iz)).join(lz);
      return nz
    }

    function SH(zz, uz) {
      return zz ? uz ? "enabled" : "disabled" : "hidden"
    }
    const yH = {
      removed: `${oH}islandsCoopRemoved`,
      deleted: `${oH}islandsCoopDeleted`,
      notReady: `${oH}islandsCoopNotReady`,
      gone: `${oH}islandsCoopGone`
    };

    function DH(zz) {
      var uz;
      return "member" !== (null === (uz = zz.baf2IslandCoop) || void 0 === uz ? void 0 : uz.baf2CoopRole) && "newer" !== zz.baf2IslandUnreadable
    }

    function QH(zz, uz, bz, Ez, nz, iz) {
      const lz = zz.baf2IslandActive,
        Mz = zz.baf2IslandUnreadable,
        tz = zz.baf2IslandCoop,
        Hz = function(zz, uz, bz) {
          return {
            switch: zz.switch && void 0 === uz,
            delete: zz.change && VH(uz, bz)
          }
        }(uz, Mz, Ez),
        Oz = lz && void 0 !== tz && void 0 === tz.baf2CoopState && "coopUnreachable" === iz,
        pz = {
          switch: SH((!lz || Oz) && void 0 === Mz, Oz || Hz.switch),
          switchLabel: Oz ? "tryAgain" : "switch",
          rename: SH(!0, uz.rename),
          delete: SH(!lz, Hz.delete),
          deleteWaits: !lz && VH(Mz, Ez),
          people: SH(void 0 !== zz.baf2IslandInvitable || nz && lz && void 0 === Mz && void 0 === tz, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        dz = !lz && Hz.delete;
      if (void 0 === tz) return bz ? {
        ...pz,
        delete: SH(!lz, !1),
        deleteWaits: !1,
        note: dz ? {
          key: `${oH}islandsCoopKeepOwn`
        } : null
      } : pz;
      const Fz = tz.baf2CoopState,
        Zz = tz.baf2CoopMembers.length > 1,
        Rz = {
          ...pz,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Fz && "member" === tz.baf2CoopRole) return {
        ...Rz,
        dismiss: SH(!0, uz.rename),
        note: {
          key: yH[Fz],
          names: {
            owner: tz.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Fz) {
        let zz = {
          key: `${oH}islandsCoopOwnLost`
        };
        return dz && Zz ? zz = {
          key: `${oH}islandsCoopDeleteMembers`
        } : dz && bz && (zz = {
          key: `${oH}islandsCoopKeepOwn`
        }), {
          ...Rz,
          delete: SH(!lz, Hz.delete && !Zz && !bz),
          deleteWaits: pz.deleteWaits && !Zz && !bz,
          note: zz
        }
      }
      if ("member" === tz.baf2CoopRole) return {
        ...pz,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: SH(!0, lz ? uz.switch : uz.rename)
      };
      const Kz = tz.baf2CoopManageHere;
      let wz = null;
      var Xz;
      Kz || lz ? dz && Zz ? wz = {
        key: `${oH}islandsCoopDeleteMembers`
      } : dz && bz && (wz = {
        key: `${oH}islandsCoopKeepOwn`
      }) : wz = {
        key: null !== (Xz = tz.baf2CoopLeft) && void 0 !== Xz && Xz.length ? `${oH}islandsCoopManageThereClaim` : `${oH}islandsCoopManageThere`
      };
      return {
        ...pz,
        rename: SH(!0, uz.rename && Kz),
        delete: SH(!lz, Hz.delete && !Zz && !bz),
        deleteWaits: pz.deleteWaits && !Zz && !bz,
        people: "enabled",
        peopleLabel: "players",
        unshare: SH(Kz && lz && !Zz, uz.change),
        remove: Kz,
        note: wz
      }
    }

    function WH(zz) {
      var uz;
      const bz = zz.baf2IslandCoop;
      if ("owner" !== (null === bz || void 0 === bz ? void 0 : bz.baf2CoopRole) || void 0 !== bz.baf2CoopState || null === (uz = bz.baf2CoopLeft) || void 0 === uz || !uz.length) return null;
      const Ez = zz.baf2IslandActive && bz.baf2CoopManageHere;
      return {
        left: bz.baf2CoopLeft,
        claim: Ez,
        goThere: !Ez && bz.baf2CoopManageHere
      }
    }

    function eH(zz) {
      return zz.baf2CoopMembers.length >= zz.baf2CoopMax
    }

    function jH(zz, uz, bz) {
      return void 0 !== zz && uz < zz.answer && bz - zz.atMs < mH
    }
    const IH = "buildAFactory2Game:";

    function BH(zz, uz) {
      return {
        onKeyDown: bz => {
          bz.stopPropagation(), bz.nativeEvent.isComposing || 229 === bz.nativeEvent.keyCode || ("Enter" === bz.key ? (bz.preventDefault(), zz()) : "Escape" === bz.key && (bz.preventDefault(), uz()))
        }
      }
    }

    function CH(zz) {
      return {
        onKeyDown: uz => {
          "Escape" !== uz.key || uz.nativeEvent.isComposing || (uz.preventDefault(), uz.stopPropagation(), zz())
        }
      }
    }

    function YH(zz) {
      zz.currentTarget.select()
    }

    function kH(zz, uz) {
      (0, Ez.useEffect)((() => {
        var bz;
        zz && (null === (bz = uz.current) || void 0 === bz || bz.scrollIntoView({
          block: "nearest"
        }))
      }), [zz, uz])
    }

    function zO(zz) {
      const [uz, bz] = (0, Ez.useState)(null);
      return (0, Ez.useEffect)((() => {
        const uz = document.querySelector(".UiRequests"),
          Ez = zz.current;
        if (!uz || !Ez || "undefined" === typeof ResizeObserver) return;
        const nz = () => {
          const zz = uz.getBoundingClientRect(),
            nz = Ez.getBoundingClientRect(),
            iz = Ez.parentElement,
            lz = iz && parseFloat(getComputedStyle(iz).paddingTop) || 0,
            Mz = function(zz, uz, bz, Ez) {
              if (!zz || zz.height <= 0 || zz.right <= uz.left || zz.left >= uz.right) return null;
              const nz = Math.max(Ez, zz.bottom + 8);
              return {
                marginTop: Math.round(nz - Ez),
                maxHeight: Math.max(0, Math.floor(bz - nz - Ez))
              }
            }(zz, nz, window.innerHeight, lz);
          bz((zz => (null === zz || void 0 === zz ? void 0 : zz.marginTop) === (null === Mz || void 0 === Mz ? void 0 : Mz.marginTop) && (null === zz || void 0 === zz ? void 0 : zz.maxHeight) === (null === Mz || void 0 === Mz ? void 0 : Mz.maxHeight) ? zz : Mz))
        };
        nz();
        const iz = new ResizeObserver(nz);
        return iz.observe(uz), window.addEventListener("resize", nz), () => {
          iz.disconnect(), window.removeEventListener("resize", nz)
        }
      }), [zz]), uz
    }

    function uO(zz) {
      (0, Ez.useEffect)((() => {
        var uz;
        null === (uz = zz.current) || void 0 === uz || uz.focus()
      }), [zz])
    }

    function bO(zz) {
      const [uz, bz] = (0, Ez.useState)(Date.now);
      return (0, Ez.useEffect)((() => {
        const uz = window.setInterval((() => {
          bz(Date.now())
        }), zz);
        return () => {
          window.clearInterval(uz)
        }
      }), [zz]), uz
    }

    function EO(zz) {
      let {
        tier: uz,
        t: bz
      } = zz;
      const {
        kind: Ez,
        short: nz
      } = Kz(uz), iz = Fz(uz, Zz), lz = bz(`${IH}${iz.key}`, {
        ...iz.params,
        name: bz(`${IH}${wz(uz).nameKey}`)
      });
      return (0, Ti.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Ti.jsx)("span", {
          className: xn()("Baf2IslandTierPip", {
            Stage: "tier" !== Ez
          }),
          "aria-hidden": "true",
          children: nz
        }), lz]
      })
    }

    function nO(zz) {
      let {
        note: uz,
        className: bz,
        t: Ez
      } = zz;
      return (0, Ti.jsx)("p", {
        className: xn()("Baf2IslandNote", bz),
        children: gH(Ez, uz.key, uz.names, uz.params)
      })
    }
    const iO = "buildAFactory2Game:";

    function lO(zz) {
      let {
        message: uz,
        arrivedAtMs: bz,
        close: nz,
        leave: iz
      } = zz;
      const lz = Wl(),
        {
          t: Mz
        } = (0, Ln.F)(),
        tz = bO(1e3),
        Hz = (0, Ez.useRef)(null);
      (0, Ez.useEffect)((() => {
        var zz;
        null === (zz = Hz.current) || void 0 === zz || zz.focus()
      }), []);
      const Oz = xH(bz, uz.baf2TransferInMs, tz),
        pz = bz + uz.baf2TransferInMs - 1e3,
        [dz, Fz] = (0, Ez.useState)(null);
      (0, Ez.useEffect)((() => {
        const zz = window.setTimeout((() => {
          Fz(pz)
        }), Math.max(0, pz - Date.now()));
        return () => {
          window.clearTimeout(zz)
        }
      }), [pz]);
      const Zz = dz === pz || tz >= pz,
        Rz = uz.baf2TransferIsland,
        Kz = uz.baf2TransferOwner;
      return (0, Ti.jsx)(xl.d, {
        close: nz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Ti.jsxs)("section", {
          ref: Hz,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsxs)("div", {
              children: [(0, Ti.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === Kz ? gH(Mz, `${iO}islandsTransferOwn`, {
                  island: Rz
                }) : gH(Mz, `${iO}islandsTransfer`, {
                  island: Rz,
                  owner: Kz
                })
              }), (0, Ti.jsx)("p", {
                children: Zz ? Mz(`${iO}islandsTransferNow`) : Mz(`${iO}islandsTransferIn`, {
                  time: vi(Mz, Oz)
                })
              })]
            }), (0, Ti.jsx)(Jl.m, {
              ariaLabel: Mz(`${iO}islandsClose`),
              onClick: nz
            })]
          }), !Zz && (0, Ti.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Ti.jsx)("p", {
              className: "Baf2TransferNote",
              children: Mz(`${iO}islandsTransferNote`)
            }), (0, Ti.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Ti.jsx)(Jl.f, {
                onClick: () => {
                  lz.send("baf2coopstay"), iz()
                },
                children: Mz(`${iO}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var MO = bz(1417),
      tO = bz(1127),
      HO = bz.n(tO);
    const OO = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const pO = "buildAFactory2Game:",
      dO = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function FO(zz, uz, bz) {
      return void 0 === uz ? bz : "string" === typeof uz ? uz : Array.isArray(uz) ? uz.map((uz => "string" === typeof uz ? uz : "translationKey" in uz ? zz(uz.translationKey) : "")).join("") : zz(uz.translationKey)
    }

    function ZO(zz) {
      const uz = {};
      for (const [bz, Ez] of Object.entries(null !== zz && void 0 !== zz ? zz : {})) uz[bz] = Ez < 0 ? Ni(Ez) : Ez.toLocaleString("en-US");
      return uz
    }

    function RO(zz, uz) {
      const bz = uz ? "touch" : "mouse";
      return {
        use: zz(`${pO}lookUse_${bz}`),
        Use: zz(`${pO}lookUseStart_${bz}`)
      }
    }
    const KO = (0, Ez.memo)((function(zz) {
      let {
        item: uz
      } = zz;
      return (0, Ti.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Ti.jsx)(Gn.c, {
          itemName: uz,
          amount: 0
        })
      })
    }));

    function wO(zz) {
      let {
        label: uz,
        percent: bz,
        progress: Ez
      } = zz;
      return (0, Ti.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${uz}: ${Ez}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": bz,
          children: (0, Ti.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${bz}%`
            }
          })
        }), (0, Ti.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Ez
        })]
      })
    }

    function XO(zz) {
      let {
        chips: uz
      } = zz;
      return (0, Ti.jsx)("span", {
        className: "Baf2QuestChips",
        children: uz.map((zz => {
          let [uz, bz, Ez] = zz;
          const nz = bz >= Ez;
          return (0, Ti.jsxs)("span", {
            className: xn()("Baf2QuestChip", {
              Met: nz
            }),
            children: [(0, Ti.jsx)(KO, {
              item: uz
            }), (0, Ti.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: nz ? `\u2713${Ez}` : `${bz}/${Ez}`
            })]
          }, uz)
        }))
      })
    }

    function fO(zz, uz) {
      const {
        key: bz,
        params: Ez
      } = Fz(uz, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return zz(`${pO}${bz}`, {
        ...Ez,
        name: zz(`${pO}${wz(uz).nameKey}`)
      })
    }

    function sO(zz) {
      let {
        core: uz,
        t: bz
      } = zz;
      const [Ez, nz] = uz, iz = nz > 0 ? Math.floor(100 * Ez / nz) : 100;
      return (0, Ti.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": bz(`${pO}questCoreLabel`, {
          have: String(Ez),
          need: String(nz)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": iz,
        children: [(0, Ti.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: bz(`${pO}questCore`, {
            percent: String(iz)
          })
        }), (0, Ti.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Ti.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${iz}%`
            }
          })
        })]
      })
    }

    function rO(zz) {
      let {
        rows: uz,
        t: bz
      } = zz;
      const Ez = uz.filter((zz => zz.done)).length;
      return (0, Ti.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": bz(`${pO}questStepsProgress`, {
          done: String(Ez),
          total: String(uz.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": uz.length,
        "aria-valuenow": Ez,
        children: uz.map((zz => (0, Ti.jsx)("span", {
          className: xn()("Baf2QuestSegment", {
            Done: zz.done,
            Current: zz.current
          })
        }, zz.id)))
      })
    }
    const oO = (0, Ez.memo)(vO, NO);

    function NO(zz, uz) {
      const bz = bz => zz.view.itemNames[bz] === uz.view.itemNames[bz];
      return zz.t === uz.t && zz.extra === uz.extra && (null === zz.row.item || bz(zz.row.item)) && zz.row.madeFor.every(bz) && zz.row.also.every(bz) && HO()(zz.row, uz.row)
    }

    function vO(zz) {
      let {
        row: uz,
        view: bz,
        t: Ez,
        extra: nz
      } = zz;
      const {
        isTouchScreen: iz
      } = (0, rn.m)(["isTouchScreen"]), lz = uz.item ? function(zz, uz, bz) {
        return 1 !== bz && OO.has(zz) ? Tn(uz) : null
      }(uz.key, uz.item, uz.total) : null, Mz = lz ? Ez(lz) : uz.item ? FO(Ez, bz.itemNames[uz.item], uz.item) : "", tz = uz.also.map((zz => FO(Ez, bz.itemNames[zz], zz))), Hz = tz.join(", "), Oz = function(zz, uz) {
        var bz;
        return uz.length < 2 ? null !== (bz = uz[0]) && void 0 !== bz ? bz : "" : zz(`${pO}listAnd`, {
          rest: uz.slice(0, -1).join(zz(`${pO}listComma`)),
          last: uz[uz.length - 1]
        })
      }(Ez, [Mz, ...tz]), pz = Ez(`${pO}${uz.key}`, {
        ...RO(Ez, iz),
        ...ZO(uz.params),
        item: Mz,
        also: Hz,
        itemList: Oz,
        total: String(uz.total)
      }), [dz, ...Fz] = pz.split("\n"), Zz = uz.total > 1 && !uz.done && !uz.away;
      return (0, Ti.jsxs)("li", {
        className: xn()("Baf2QuestStep", {
          Done: uz.done,
          Current: uz.current,
          JustFinished: uz.justFinished,
          Away: uz.away
        }),
        children: [!uz.done && null !== uz.item && (0, Ti.jsx)(KO, {
          item: uz.item
        }), (uz.done || null === uz.item) && (0, Ti.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: uz.done ? "\u2713" : "\u25cb"
        }), (0, Ti.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Ti.jsx)("strong", {
            children: dz
          }), Fz.length > 0 && (0, Ti.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Fz.join(" ")
          }), !uz.done && uz.madeFor.length > 0 && (0, Ti.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Ez("buildAFactory2Game:questRowFor", {
              items: uz.madeFor.map((zz => FO(Ez, bz.itemNames[zz], zz))).join(" \u2192 ")
            })
          }), Zz && (0, Ti.jsx)(wO, {
            label: dz,
            percent: Math.round(100 * uz.amount / uz.total),
            progress: `${uz.amount.toLocaleString("en-US")}/${uz.total.toLocaleString("en-US")}`
          }), !uz.done && !uz.away && uz.chips && uz.chips.length > 0 && (0, Ti.jsx)(XO, {
            chips: uz.chips
          }), nz]
        })]
      })
    }

    function xO(zz, uz) {
      let [bz, Ez] = uz;
      return zz(`${pO}${bz}`, ZO(Ez))
    }

    function JO(zz) {
      let [uz, bz] = zz;
      return uz + JSON.stringify(bz)
    }

    function AO(zz) {
      let {
        goal: uz,
        t: bz
      } = zz;
      return uz ? (0, Ti.jsx)("span", {
        className: "Baf2BookGoal",
        children: bz(`${pO}${uz}`)
      }) : null
    }

    function TO(zz) {
      let {
        view: uz,
        t: bz
      } = zz;
      if (!uz.name) return null;
      const Ez = Wn(uz.rows);
      return (0, Ti.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: bz(`${pO}currentQuest`)
        }), (0, Ti.jsx)("strong", {
          className: "Baf2BookTitle",
          children: xO(bz, uz.name)
        }), (0, Ti.jsx)(AO, {
          goal: uz.goal,
          t: bz
        }), Ez.length > 1 && (0, Ti.jsx)(rO, {
          rows: Ez,
          t: bz
        }), (0, Ti.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: uz.rows.map((zz => (0, Ti.jsx)(oO, {
            row: zz,
            view: uz,
            t: bz
          }, zz.id)))
        }), uz.reward && (0, Ti.jsxs)("span", {
          className: "Baf2BookReward",
          children: [bz(`${pO}questReward`), (0, Ti.jsx)(KO, {
            item: uz.reward
          }), FO(bz, uz.itemNames[uz.reward], uz.reward)]
        })]
      })
    }

    function LO(zz) {
      let {
        quest: uz,
        upcoming: bz,
        t: Ez
      } = zz;
      return (0, Ti.jsxs)("li", {
        className: xn()("Baf2BookQuest", {
          Done: uz[3],
          Upcoming: bz
        }),
        children: [(0, Ti.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: uz[3] ? "\u2713" : "\u25cb"
        }), (0, Ti.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Ti.jsx)("strong", {
            className: "Baf2BookTitle",
            children: xO(Ez, uz)
          }), (0, Ti.jsx)(AO, {
            goal: uz[2],
            t: Ez
          })]
        })]
      })
    }

    function PO(zz) {
      let {
        done: uz,
        total: bz,
        t: Ez
      } = zz;
      const nz = bz > 0 ? Math.round(100 * uz / bz) : 0,
        iz = Ez(`${pO}questBookChapterProgress`, {
          done: String(uz),
          total: String(bz)
        });
      return (0, Ti.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": iz,
          "aria-valuemin": 0,
          "aria-valuemax": bz,
          "aria-valuenow": uz,
          children: (0, Ti.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${nz}%`
            }
          })
        }), (0, Ti.jsx)("span", {
          className: "Baf2BookProgressText",
          children: iz
        })]
      })
    }

    function GO(zz) {
      let {
        view: uz,
        tier: bz,
        quests: Ez,
        t: nz
      } = zz;
      const iz = bz === uz.tier,
        lz = (null !== Ez && void 0 !== Ez ? Ez : []).filter((zz => !zz[4])),
        Mz = (null !== Ez && void 0 !== Ez ? Ez : []).filter((zz => zz[4])),
        tz = lz.filter((zz => zz[3])).length,
        Hz = iz && uz.name ? JO(uz.name) : null,
        Oz = lz.findIndex((zz => !zz[3] && JO(zz) === Hz));
      return (0, Ti.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Ti.jsx)("h3", {
            children: fO(nz, bz)
          }), lz.length > 0 && (0, Ti.jsx)(PO, {
            done: tz,
            total: lz.length,
            t: nz
          }), iz && uz.core && (0, Ti.jsx)(sO, {
            core: uz.core,
            t: nz
          })]
        }), (0, Ti.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Ez && iz && (0, Ti.jsx)(TO, {
            view: uz,
            t: nz
          }), lz.map(((zz, bz) => bz === Oz ? (0, Ti.jsx)(TO, {
            view: uz,
            t: nz
          }, JO(zz)) : (0, Ti.jsx)(LO, {
            quest: zz,
            upcoming: !zz[3],
            t: nz
          }, JO(zz))))]
        }), iz && uz.side && (0, Ti.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Ti.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: nz(`${pO}questSide`)
          }), (0, Ti.jsx)("strong", {
            className: "Baf2BookTitle",
            children: xO(nz, uz.side.name)
          }), (0, Ti.jsx)(AO, {
            goal: uz.side.goal,
            t: nz
          }), (0, Ti.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Ti.jsx)(oO, {
              row: uz.side.row,
              view: uz,
              t: nz
            })
          })]
        }), Mz.length > 0 && (0, Ti.jsxs)(Ti.Fragment, {
          children: [(0, Ti.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: nz(`${pO}questBookSidesDone`)
          }), (0, Ti.jsx)("ol", {
            className: "Baf2BookQuests",
            children: Mz.map((zz => (0, Ti.jsx)(LO, {
              quest: zz,
              upcoming: !1,
              t: nz
            }, JO(zz))))
          })]
        })]
      })
    }

    function aO(zz) {
      var uz, bz, iz;
      let {
        store: lz,
        close: Mz
      } = zz;
      const {
        t: tz
      } = (0, Ln.F)(), Hz = (0, MO.h)(Un, lz.get()), pz = null !== (uz = Hz.tier) && void 0 !== uz ? uz : 1, [dz, Fz] = (0, Ez.useState)(null), Zz = (null === dz || void 0 === dz ? void 0 : dz.at) === pz ? dz.tier : pz, wz = (0, Ez.useRef)(null), Xz = null !== Hz.chapters;
      (0, Ez.useEffect)((() => {
        var zz;
        wz.current && (wz.current.scrollTop = 0);
        const uz = null === (zz = wz.current) || void 0 === zz ? void 0 : zz.querySelector(".Baf2BookQuest.Current");
        if (wz.current && uz) {
          const zz = uz.getBoundingClientRect().bottom - wz.current.getBoundingClientRect().bottom;
          zz > 0 && (wz.current.scrollTop += Math.min(zz, uz.getBoundingClientRect().top - wz.current.getBoundingClientRect().top))
        }
      }), [Zz, Xz]);
      const fz = null === (bz = Hz.chapters) || void 0 === bz ? void 0 : bz.find((zz => {
        let [uz] = zz;
        return uz === Zz
      }));
      return (0, Ti.jsx)(xl.d, {
        close: Mz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ti.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: dO,
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: tz(`${pO}questBookTitle`)
            }), (0, Ti.jsx)(Jl.m, {
              onClick: Mz
            })]
          }), (0, Ti.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": tz(`${pO}questBookChapters`),
            children: nz.slice(0, Oz()).map(((zz, uz) => {
              const bz = uz + 1,
                {
                  kind: Ez,
                  short: nz
                } = Kz(bz),
                iz = Rz(bz, pz),
                lz = iz ? tz(`${pO}coreAtomicHidden`) : fO(tz, bz);
              return (0, Ti.jsx)("li", {
                children: (0, Ti.jsx)("button", {
                  type: "button",
                  className: xn()({
                    Stage: "tier" !== Ez,
                    Atomic: "atomic" === Ez,
                    Current: bz === pz,
                    Selected: bz === Zz
                  }),
                  disabled: bz > pz,
                  "aria-pressed": bz === Zz,
                  "aria-label": lz,
                  title: iz ? void 0 : lz,
                  onClick: () => {
                    Fz({
                      tier: bz,
                      at: pz
                    })
                  },
                  children: iz ? "?" : nz
                })
              }, zz.nameKey)
            }))
          }), (0, Ti.jsxs)("div", {
            ref: wz,
            className: "Baf2BookBody",
            children: [Dn(Hz) && Zz === pz && (0, Ti.jsx)("p", {
              className: "Baf2BookEmpty",
              children: tz(`${pO}questBookAllDone`)
            }), (0, Ti.jsx)(GO, {
              view: Hz,
              tier: Zz,
              quests: null !== (iz = null === fz || void 0 === fz ? void 0 : fz[1]) && void 0 !== iz ? iz : null,
              t: tz
            })]
          })]
        })
      })
    }
    const VO = "buildAFactory2Game:";

    function mO(zz) {
      let {
        tiers: uz,
        from: bz,
        tier: Ez,
        shown: nz,
        NF: iz
      } = zz;
      const {
        t: lz
      } = (0, Ln.F)(), Mz = uz.map(((zz, uz) => {
        const Mz = bz + uz,
          {
            kind: tz,
            short: Hz
          } = Kz(Mz),
          Oz = Rz(Mz, Ez);
        return (0, Ti.jsx)("li", {
          children: (0, Ti.jsx)("button", {
            type: "button",
            className: xn()({
              Stage: "tier" !== tz,
              Silhouette: Oz,
              Reached: Mz <= Ez,
              Current: Mz === Ez,
              Next: Mz === Ez + 1,
              Selected: Mz === nz
            }),
            disabled: Oz,
            "aria-pressed": Mz === nz,
            "aria-label": Oz ? lz(`${VO}coreAtomicHidden`) : void 0,
            title: Oz ? void 0 : lz(`${VO}${zz.nameKey}`),
            onClick: () => {
              iz(Mz)
            },
            children: Oz ? "?" : Hz
          })
        }, zz.nameKey)
      }));
      return (0, Ti.jsx)(Ti.Fragment, {
        children: Mz
      })
    }

    function qO(zz) {
      let {
        id: uz,
        label: bz,
        tiers: Ez,
        from: nz,
        ...iz
      } = zz;
      return (0, Ti.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Ti.jsx)("span", {
          id: uz,
          className: "Baf2CoreLadderLabel",
          children: bz
        }), (0, Ti.jsx)("ol", {
          "aria-labelledby": uz,
          children: (0, Ti.jsx)(mO, {
            ...iz,
            tiers: Ez,
            from: nz
          })
        })]
      })
    }

    function hO(zz) {
      const {
        t: uz
      } = (0, Ln.F)(), bz = nz.findIndex((zz => void 0 !== zz.stage)), Ez = nz.findIndex((zz => void 0 !== zz.reactorTier)), iz = bz < 0 ? nz : nz.slice(0, bz), lz = bz < 0 ? [] : nz.slice(bz, Ez < 0 ? void 0 : Ez), tz = Ez < 0 || !Mz() ? [] : nz.slice(Ez);
      return (0, Ti.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Ti.jsx)(qO, {
          ...zz,
          id: "baf2CoreTiersLabel",
          label: uz(`${VO}coreTiersLabel`),
          tiers: iz,
          from: 1
        }), lz.length > 0 && (0, Ti.jsx)(qO, {
          ...zz,
          id: "baf2CoreStagesLabel",
          label: uz(`${VO}coreStagesLabel`),
          tiers: lz,
          from: bz + 1
        }), tz.length > 0 && (0, Ti.jsx)(qO, {
          ...zz,
          id: "baf2CoreAtomicLabel",
          label: uz(`${VO}coreAtomicLabel`),
          tiers: tz,
          from: Ez + 1
        })]
      })
    }
    const UO = "buildAFactory2Game:";

    function cO(zz) {
      let {
        item: uz,
        itemNames: bz,
        children: Ez
      } = zz;
      return (0, Ti.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Ti.jsx)(Gn.c, {
            itemName: uz,
            amount: 0
          })
        }), (0, Ti.jsx)(an.b, {
          text: bz[uz]
        }), Ez]
      })
    }

    function gO(zz) {
      const uz = new Map;
      for (const {
          block: Ez
        }
        of zz.newDeposits) {
        var bz;
        uz.set(Ez, (null !== (bz = uz.get(Ez)) && void 0 !== bz ? bz : 0) + 1)
      }
      return [...uz]
    }

    function SO(zz) {
      let {
        value: uz,
        label: bz,
        more: Ez
      } = zz;
      return (0, Ti.jsxs)("li", {
        children: [(0, Ti.jsx)("strong", {
          children: uz
        }), (0, Ti.jsx)("span", {
          children: bz
        }), Ez > 0 && (0, Ti.jsxs)("em", {
          children: ["+", Ez]
        })]
      })
    }

    function yO(zz) {
      let {
        items: uz,
        itemNames: bz
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)(), [iz, lz] = (0, Ez.useState)(null), Mz = null !== iz && uz.includes(iz) ? iz : null;
      return (0, Ti.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Ti.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: nz(`${UO}coreRewardUnlocks`)
        }), (0, Ti.jsx)("ul", {
          children: uz.map((zz => (0, Ti.jsx)("li", {
            children: (0, Ti.jsx)("button", {
              type: "button",
              className: xn()("Baf2PanelIcon", {
                Picked: zz === Mz
              }),
              title: li(nz, zz),
              "aria-label": li(nz, zz),
              "aria-pressed": zz === Mz,
              onClick: () => {
                lz(zz === Mz ? null : zz)
              },
              children: (0, Ti.jsx)(Gn.c, {
                itemName: zz,
                amount: 0
              })
            })
          }, zz)))
        }), (0, Ti.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== Mz && (0, Ti.jsxs)(Ti.Fragment, {
            children: [(0, Ti.jsx)(an.b, {
              text: bz[Mz]
            }), " \xb7 ", (0, Ti.jsx)(an.b, {
              text: bz[Lz(Mz)]
            })]
          }), null === Mz && nz(`${UO}coreRecipeTap`)]
        })]
      })
    }

    function DO(zz) {
      var uz, bz;
      let {
        def: Ez,
        tier: nz,
        itemNames: iz
      } = zz;
      const {
        t: lz
      } = (0, Ln.F)(), Mz = nz > 1 ? wz(nz - 1) : void 0, tz = Math.round(2 * Ez.islandRadius), Hz = Mz ? Math.round(2 * Mz.islandRadius) : tz, Oz = nz >= 3 ? rE(nz) : null;
      return (0, Ti.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Ti.jsxs)("ul", {
          className: xn()("Baf2CoreStats", {
            Four: null !== Oz
          }),
          children: [(0, Ti.jsx)(SO, {
            value: `${tz}\xd7${tz}`,
            label: lz(`${UO}coreStatIsland`),
            more: tz - Hz
          }), (0, Ti.jsx)(SO, {
            value: String(Ez.machineAllowance),
            label: lz(`${UO}coreStatMachines`),
            more: Ez.machineAllowance - (null !== (uz = null === Mz || void 0 === Mz ? void 0 : Mz.machineAllowance) && void 0 !== uz ? uz : Ez.machineAllowance)
          }), (0, Ti.jsx)(SO, {
            value: String(Ez.beltAllowance),
            label: lz(`${UO}coreStatBelts`),
            more: Ez.beltAllowance - (null !== (bz = null === Mz || void 0 === Mz ? void 0 : Mz.beltAllowance) && void 0 !== bz ? bz : Ez.beltAllowance)
          }), null !== Oz && (0, Ti.jsx)(SO, {
            value: String(Oz),
            label: lz(`${UO}coreStatStorage`),
            more: Oz - (Mz ? rE(nz - 1) : Oz)
          })]
        }), Ez.reward && (0, Ti.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Ti.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: lz(`${UO}coreRewardItem`)
          }), (0, Ti.jsx)(cO, {
            item: Ez.reward,
            itemNames: iz
          })]
        }), Ez.newDeposits.length > 0 && (0, Ti.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Ti.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: lz(Ez.newDeposits.length > 1 ? `${UO}coreRewardDeposits` : `${UO}coreRewardDeposit`)
          }), gO(Ez).map((zz => {
            let [uz, bz] = zz;
            return (0, Ti.jsx)(cO, {
              item: uz,
              itemNames: iz,
              children: bz > 1 && ` \xd7${bz}`
            }, uz)
          }))]
        }), Ez.unlocks.length > 0 && (0, Ti.jsx)(yO, {
          items: Ez.unlocks,
          itemNames: iz
        }), (0, Ti.jsx)(QO, {
          tier: nz
        })]
      })
    }

    function QO(zz) {
      let {
        tier: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)(), Ez = wn[uz];
      if (!Ez) return null;
      const nz = Kn(uz, 0, 0).barrierMax !== Kn(uz - 1, 0, 0).barrierMax;
      return (0, Ti.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Ti.jsx)(Gn.c, {
            itemName: nz ? On.Chestplate : Hn,
            amount: 0
          })
        }), bz(`${UO}gearPerkLine`, {
          perk: bz(`${UO}${Ez}`)
        })]
      })
    }

    function WO(zz, uz) {
      return null === zz ? uz : zz.value
    }

    function eO(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === zz || bz - zz.atMs >= Ez ? null : nz(zz.value, uz) ? zz.armed ? null : zz : zz.armed ? zz : {
        ...zz,
        armed: !0
      }
    }

    function jO(zz, uz) {
      const bz = uz.filter((uz => {
        var bz;
        return !1 !== (null === (bz = zz.get(uz)) || void 0 === bz ? void 0 : bz.value)
      }));
      for (const [Ez, nz] of zz) nz.value && !uz.includes(Ez) && bz.push(Ez);
      return bz
    }

    function IO(zz, uz, bz, nz) {
      const [iz, lz] = (0, Ez.useState)((() => new Map)), Mz = () => {
        lz((uz => function(zz, uz, bz, Ez) {
          var nz;
          let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            lz = null;
          for (const [Mz, tz] of zz) {
            const nz = eO(tz, uz(Mz), bz, Ez, iz);
            nz !== tz && (lz ??= new Map(zz), null === nz ? lz.delete(Mz) : lz.set(Mz, nz))
          }
          return null !== (nz = lz) && void 0 !== nz ? nz : zz
        }(uz, zz, Date.now(), bz, nz)))
      };
      (0, Ez.useEffect)((() => {
        Mz()
      }), [uz, bz]), (0, Ez.useEffect)((() => {
        if (0 === iz.size) return;
        const zz = Math.min(...[...iz.values()].map((zz => zz.atMs))),
          uz = setTimeout(Mz, Math.max(0, zz + bz - Date.now()) + 1);
        return () => {
          clearTimeout(uz)
        }
      }), [iz, uz, bz]);
      return [iz, (uz, bz) => {
        lz((Ez => {
          const iz = new Map(Ez);
          return iz.set(uz, function(zz, uz, bz) {
            return {
              value: zz,
              atMs: bz,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(zz, uz)
            }
          }(bz, zz(uz), Date.now(), nz)), iz
        }))
      }]
    }
    const BO = "buildAFactory2Game:";

    function CO(zz) {
      let {
        message: uz,
        itemNames: bz
      } = zz;
      const nz = Wl(),
        {
          t: iz
        } = (0, Ln.F)(),
        [lz, Mz] = (0, Ez.useState)(!1),
        [tz, Hz] = function(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ul;
          const [bz, Ez] = IO((uz => zz.includes(uz)), zz, uz, Object.is);
          return [jO(bz, zz), Ez]
        }(uz.baf2CoreBankPaused),
        Oz = new Set(tz),
        pz = [...uz.baf2CoreBanked];
      for (const Ez of Oz) pz.some((zz => {
        let [uz] = zz;
        return uz === Ez
      })) || pz.push([Ez, 0]);
      return 0 === pz.length ? null : (0, Ti.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Ti.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": lz,
          onClick: () => {
            Mz(!lz)
          },
          children: [(0, Ti.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: iz(`${BO}coreBankedLater`)
          }), (0, Ti.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: pz.map((zz => {
              let [uz, bz] = zz;
              const Ez = Oz.has(uz);
              return (0, Ti.jsxs)("span", {
                className: xn()({
                  Paused: Ez
                }),
                title: Ez ? iz(`${BO}coreBankPausedTag`) : void 0,
                children: [(0, Ti.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Ti.jsx)(Gn.c, {
                    itemName: uz,
                    amount: 0
                  })
                }), bz, Ez && (0, Ti.jsx)(Pn.c, {
                  name: "pause"
                })]
              }, uz)
            }))
          }), (0, Ti.jsx)(Pn.c, {
            name: lz ? "angle-up" : "angle-down"
          })]
        }), lz && (0, Ti.jsxs)(Ti.Fragment, {
          children: [(0, Ti.jsx)("ul", {
            children: pz.map((zz => {
              let [uz, Ez] = zz;
              const lz = Oz.has(uz);
              return (0, Ti.jsxs)("li", {
                children: [(0, Ti.jsxs)(cO, {
                  item: uz,
                  itemNames: bz,
                  children: [(0, Ti.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Ez
                  }), lz && (0, Ti.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: iz(`${BO}coreBankPausedTag`)
                  })]
                }), (0, Ti.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Ti.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Ez,
                    onClick: () => {
                      nz.send(`baf2corewithdraw ${Ez} ${uz}`)
                    },
                    children: iz(`${BO}coreTake`)
                  }), (0, Ti.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      nz.send(`${sz} ${uz}`), Hz(uz, !lz)
                    },
                    children: iz(lz ? `${BO}coreBankResume` : `${BO}coreBankStop`)
                  })]
                })]
              }, uz)
            }))
          }), (0, Ti.jsx)("p", {
            className: "Baf2CoreHint",
            children: iz(`${BO}coreBankNote`)
          })]
        })]
      })
    }
    const YO = "buildAFactory2Game:";

    function kO(zz) {
      const uz = Math.max(0, Math.floor(zz));
      return `${Math.floor(uz/60)}:${String(uz%60).padStart(2,"0")}`
    }

    function zp(zz) {
      let {
        item: uz
      } = zz;
      return (0, Ti.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Ti.jsx)(Gn.c, {
          itemName: uz,
          amount: 0
        })
      })
    }

    function bp() {
      return (0, Ti.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Ti.jsx)(Pn.c, {
          name: "bolt"
        })
      })
    }

    function Ep(zz) {
      let {
        charge: uz,
        hint: bz,
        itemNames: Ez
      } = zz;
      const nz = Wl(),
        {
          t: iz
        } = (0, Ln.F)(),
        [lz, Mz, tz, Hz, Oz, pz, dz] = uz,
        [Fz, Zz] = function(zz) {
          var uz;
          let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ul,
            Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [nz, iz] = IO((() => zz), zz, bz, Ez);
          return [WO(null !== (uz = nz.get("")) && void 0 !== uz ? uz : null, zz), zz => {
            iz("", zz)
          }]
        }(dz),
        Rz = Fz === dz ? pz : !Fz,
        Kz = Hz >= Oz,
        wz = lz.find((zz => {
          let [, uz, bz] = zz;
          return bz < .9 * uz
        }));
      let Xz = `${YO}coreChargeWaiting`,
        fz = {};
      return Kz ? Xz = `${YO}coreChargeDone` : Fz ? Xz = `${YO}coreChargeStopped` : Rz && bz ? (Xz = `${YO}${bz[0]}`, fz = {
        item: li(iz, bz[1])
      }) : Rz && wz ? (Xz = `${YO}coreChargeShort`, fz = {
        item: li(iz, wz[0])
      }) : Rz && Mz > 0 && !tz ? Xz = `${YO}coreChargePower` : Rz && (Xz = `${YO}coreChargeRunning`), (0, Ti.jsxs)("div", {
        className: xn()("Baf2CoreCharge", {
          Waiting: !Rz && !Kz,
          Done: Kz
        }),
        children: [(0, Ti.jsxs)("h4", {
          children: [iz(`${YO}coreChargeTitle`), (0, Ti.jsx)("span", {
            children: iz(`${YO}coreChargeProgress`, {
              done: kO(Hz),
              need: kO(Oz)
            })
          })]
        }), (0, Ti.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Ti.jsx)("div", {
            style: {
              width: 100 * Math.min(Hz, Oz) / Oz + "%"
            }
          })
        }), (0, Ti.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [lz.map((zz => {
            var uz;
            let [bz, nz, lz] = zz;
            const Mz = lz >= .9 * nz;
            return (0, Ti.jsxs)("li", {
              className: xn()({
                Done: Mz,
                Short: Rz && !Mz
              }),
              children: [(0, Ti.jsx)(zp, {
                item: bz
              }), (0, Ti.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Ti.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Ti.jsx)(an.b, {
                    text: null !== (uz = Ez[bz]) && void 0 !== uz ? uz : bz
                  }), (0, Ti.jsx)("span", {
                    children: iz(`${YO}coreChargeItem`, {
                      now: String(lz),
                      need: String(nz)
                    })
                  })]
                }), (0, Ti.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Ti.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*lz/nz)}%`
                    }
                  })
                })]
              })]
            }, bz)
          })), Mz > 0 && (0, Ti.jsxs)("li", {
            className: xn()("Baf2CoreChargePower", {
              Short: Rz && !tz
            }),
            children: [(0, Ti.jsx)(bp, {}), (0, Ti.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Ti.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Ti.jsx)("span", {
                  children: iz(`${YO}coreChargePowerRow`, {
                    power: Cz(Mz)
                  })
                })
              })
            })]
          })]
        }), (0, Ti.jsx)("p", {
          className: "Baf2CoreHint",
          children: iz(Xz, fz)
        }), !Kz && (Rz || Fz) && (0, Ti.jsx)("button", {
          type: "button",
          className: xn()("Baf2CoreChargeToggle", {
            Stopped: Fz
          }),
          onClick: () => {
            nz.send(oz), Zz(!Fz)
          },
          children: iz(Fz ? `${YO}coreChargeRestart` : `${YO}coreChargeStop`)
        })]
      })
    }

    function np(zz) {
      let {
        charge: uz,
        reached: bz,
        itemNames: Ez
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)();
      return (0, Ti.jsxs)("div", {
        className: xn()("Baf2CoreCharge", {
          Done: bz
        }),
        children: [(0, Ti.jsxs)("h4", {
          children: [nz(`${YO}coreChargeTitle`), (0, Ti.jsx)("span", {
            children: nz(`${YO}coreChargeSpecTime`, {
              time: kO(uz.seconds)
            })
          })]
        }), (0, Ti.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [uz.items.map((zz => {
            var uz;
            let {
              item: iz,
              amount: lz
            } = zz;
            return (0, Ti.jsxs)("li", {
              className: xn()({
                Done: bz
              }),
              children: [(0, Ti.jsx)(zp, {
                item: iz
              }), (0, Ti.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Ti.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Ti.jsx)(an.b, {
                    text: null !== (uz = Ez[iz]) && void 0 !== uz ? uz : iz
                  }), (0, Ti.jsx)("span", {
                    children: nz(`${YO}coreChargeSpecItem`, {
                      need: String(lz)
                    })
                  })]
                })
              })]
            }, iz)
          })), uz.powerPerS > 0 && (0, Ti.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Ti.jsx)(bp, {}), (0, Ti.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Ti.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Ti.jsx)("span", {
                  children: nz(`${YO}coreChargePowerRow`, {
                    power: Cz(uz.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const ip = "buildAFactory2Game:";

    function lp(zz) {
      let {
        def: uz,
        reached: bz,
        banked: Ez,
        itemNames: nz
      } = zz;
      const {
        t: iz
      } = (0, Ln.F)();
      return (0, Ti.jsx)("ul", {
        className: "Baf2CoreCost",
        children: uz.cost.map((zz => {
          let {
            item: uz,
            amount: lz
          } = zz;
          const Mz = bz ? 0 : Ez(uz);
          return (0, Ti.jsx)("li", {
            children: (0, Ti.jsx)(cO, {
              item: uz,
              itemNames: nz,
              children: (0, Ti.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: Mz > 0 ? iz(`${ip}coreBankedFor`, {
                  amount: String(Mz),
                  total: String(lz)
                }) : `\xd7${lz}`
              })
            })
          }, uz)
        }))
      })
    }

    function Mp(zz, uz) {
      if (uz >= Oz()) return zz(`${ip}coreMaxTier`);
      const bz = Hz[uz + 1];
      return bz && !bz.startsWith("upgradeCore") ? zz(`${ip}coreGateQuest`, {
        quest: zz(`${ip}quest_${bz}`)
      }) : zz(`${ip}coreGateClosed`)
    }

    function tp() {
      const {
        t: zz
      } = (0, Ln.F)(), uz = Wl(), bz = (0, Ez.useRef)(null), nz = (0, Ez.useRef)(Date.now());
      return kH(!0, bz), (0, Ti.jsx)("div", {
        ref: bz,
        className: "Baf2CoreGrow",
        children: (0, Ti.jsx)(Jl.q, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - nz.current >= 600 && uz.send(fz)
          },
          children: zz(`${ip}coreGrow`)
        })
      })
    }

    function Hp(zz) {
      let {
        message: uz,
        itemNames: bz,
        next: Ez
      } = zz;
      const nz = Wl(),
        {
          t: iz
        } = (0, Ln.F)(),
        lz = uz.baf2CoreTier,
        Mz = uz.baf2CoreReady,
        tz = uz.baf2CoreNeeds.filter((zz => {
          let [, uz, bz, Ez] = zz;
          return Ez > 0 && uz < bz
        })),
        Hz = uz.baf2CoreNeeds.every((zz => {
          let [, uz, bz] = zz;
          return uz >= bz
        })),
        Oz = uz.baf2CoreKeep;
      return (0, Ti.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [Mz && (0, Ti.jsx)(tp, {}), (0, Ti.jsx)("h3", {
            children: iz(`${ip}coreBring`)
          }), (0, Ti.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: uz.baf2CoreNeeds.map((zz => {
              let [uz, Ez, lz, Mz] = zz;
              return (0, Ti.jsxs)("li", {
                className: xn()({
                  Done: Ez >= lz
                }),
                children: [(0, Ti.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Ti.jsx)(Gn.c, {
                    itemName: uz,
                    amount: 0
                  })
                }), (0, Ti.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Ti.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Ti.jsx)(an.b, {
                      text: bz[uz]
                    }), (0, Ti.jsxs)("span", {
                      children: [Ez, "/", lz]
                    })]
                  }), (0, Ti.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Ti.jsx)("div", {
                      style: {
                        width: 100 * Ez / lz + "%"
                      }
                    }), Mz > 0 && (0, Ti.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * Mz / lz + "%"
                      }
                    })]
                  })]
                }), Mz > 0 && Ez < lz && (0, Ti.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    nz.send(`${rz} ${uz}`)
                  },
                  children: iz(`${ip}coreDeposit`, {
                    amount: String(Mz)
                  })
                })]
              }, uz)
            }))
          }), uz.baf2CoreCharge && (0, Ti.jsx)(Ep, {
            charge: uz.baf2CoreCharge,
            hint: uz.baf2CoreChargeHint,
            itemNames: bz
          }), !Mz && tz.length > 1 && (0, Ti.jsx)(Jl.q, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              nz.send(fz)
            },
            children: iz(`${ip}coreHandOver`)
          }), !Mz && void 0 !== Oz && (0, Ti.jsx)("p", {
            className: "Baf2CoreHint",
            children: iz(`${ip}coreKeepRest`, {
              item: li(iz, Oz)
            })
          }), !Mz && !Hz && 0 === tz.length && void 0 === Oz && (0, Ti.jsx)("p", {
            className: "Baf2CoreHint",
            children: iz(`${ip}coreNothingHeld`)
          }), (0, Ti.jsx)(CO, {
            message: uz,
            itemNames: bz
          })]
        }), (0, Ti.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ti.jsx)("h3", {
            children: iz(`${ip}coreRewards`)
          }), (0, Ti.jsx)(DO, {
            def: Ez,
            tier: lz + 1,
            itemNames: bz
          })]
        })]
      })
    }

    function Op(zz) {
      let {
        message: uz,
        itemNames: bz,
        shown: Ez
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)(), iz = uz.baf2CoreTier, lz = wz(Ez), Mz = Ez <= iz, tz = new Map(uz.baf2CoreBanked), Hz = !Xz(iz, Nz(uz)) && Ez === iz;
      return (0, Ti.jsxs)("div", {
        className: xn()("Baf2CoreBody", {
          Locked: !Mz
        }),
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ti.jsx)("h3", {
            children: nz(Mz ? `${ip}coreItTook` : `${ip}coreItNeeds`)
          }), 0 === lz.cost.length && (0, Ti.jsx)("p", {
            className: "Baf2CoreHint",
            children: nz(`${ip}coreTierStart`)
          }), lz.cost.length > 0 && (0, Ti.jsx)(lp, {
            def: lz,
            reached: Mz,
            banked: zz => {
              var uz;
              return function(zz, uz, bz, Ez) {
                let nz = zz;
                for (let lz = uz + 2; lz <= bz; lz++) {
                  var iz;
                  const zz = wz(lz).cost.find((zz => zz.item === Ez)),
                    uz = Math.min(nz, null !== (iz = null === zz || void 0 === zz ? void 0 : zz.amount) && void 0 !== iz ? iz : 0);
                  if (lz === bz) return uz;
                  nz -= uz
                }
                return 0
              }(null !== (uz = tz.get(zz)) && void 0 !== uz ? uz : 0, iz, Ez, zz)
            },
            itemNames: bz
          }), lz.charge && (0, Ti.jsx)(np, {
            charge: lz.charge,
            reached: Mz,
            itemNames: bz
          }), Hz && (0, Ti.jsxs)(Ti.Fragment, {
            children: [(0, Ti.jsx)("p", {
              className: "Baf2CoreHint",
              children: Mp(nz, iz)
            }), (0, Ti.jsx)(CO, {
              message: uz,
              itemNames: bz
            })]
          })]
        }), (0, Ti.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ti.jsx)("h3", {
            children: nz(Mz ? `${ip}coreGave` : `${ip}coreLockedRewards`)
          }), (0, Ti.jsx)(DO, {
            def: lz,
            tier: Ez,
            itemNames: bz
          })]
        })]
      })
    }

    function pp(zz, uz) {
      const {
        key: bz,
        params: Ez
      } = Fz(uz - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return zz(`${ip}${bz}`, Ez)
    }
    const dp = "buildAFactory2Game:",
      Fp = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Zp = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function Rp(zz) {
      let {
        view: uz,
        close: bz,
        askIslands: nz
      } = zz;
      const {
        t: iz
      } = (0, Ln.F)(), [lz, Mz] = (0, Ez.useState)(!1);
      (0, Ez.useEffect)((() => {
        if (!lz) return;
        const zz = window.setTimeout((() => {
          Mz(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(zz)
        }
      }), [lz]);
      const {
        message: tz,
        itemNames: Hz
      } = uz, Oz = tz.baf2CoreTier, pz = wz(Oz), dz = Xz(Oz, Nz(tz)), [Rz, Kz] = tz.baf2CoreMachines, [fz, sz] = tz.baf2CoreBelts, rz = tz.baf2CoreStorage, oz = tz.baf2CoreReady, [vz, xz] = (0, Ez.useState)(null), Jz = (null === vz || void 0 === vz ? void 0 : vz.at) === Oz && vz.ready === oz ? vz.tier : dz ? Oz + 1 : Oz;
      let Az = "coreTierLocked";
      Jz <= Oz ? Az = "coreTierReached" : Jz === Oz + 1 && (Az = "coreTierNext");
      const Tz = iz(`${dp}${wz(Jz).nameKey}`),
        Lz = Jz === Oz + 1 ? dz : null,
        Pz = Fz(Jz, {
          tier: Az,
          stage: Fp[Az],
          atomic: Zp[Az]
        }),
        Gz = iz(`${dp}${Pz.key}`, {
          ...Pz.params,
          name: Tz
        }),
        az = Fz(Oz, Zz),
        Vz = iz(`${dp}${az.key}`, {
          ...az.params,
          name: iz(`${dp}${pz.nameKey}`)
        });
      return (0, Ti.jsx)(xl.d, {
        close: bz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Ti.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsxs)("div", {
              children: [(0, Ti.jsx)("h2", {
                id: "baf2CoreTitle",
                children: iz(`${dp}coreTitle`)
              }), void 0 !== tz.baf2CoreIslandName && (0, Ti.jsx)("p", {
                className: "Baf2CoreIsland",
                children: tz.baf2CoreIslandName
              }), (0, Ti.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Ti.jsx)("span", {
                  children: Vz
                }), (0, Ti.jsx)("span", {
                  className: xn()({
                    Full: Rz >= Kz
                  }),
                  children: iz(`${dp}coreMachineCount`, {
                    amount: String(Rz),
                    total: String(Kz)
                  })
                }), (0, Ti.jsx)("span", {
                  className: xn()({
                    Full: fz >= sz
                  }),
                  children: iz(`${dp}coreBeltCount`, {
                    amount: String(fz),
                    total: String(sz)
                  })
                }), void 0 !== rz && (0, Ti.jsx)("span", {
                  className: xn()({
                    Full: rz[0] >= rz[1]
                  }),
                  children: iz(`${dp}coreStorageCount`, {
                    amount: String(rz[0]),
                    total: String(rz[1])
                  })
                })]
              })]
            }), (0, Ti.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [tz.baf2CoreIslands && (0, Ti.jsx)(Jl.f, {
                className: "Baf2CoreIslandsButton",
                disabled: lz,
                onClick: () => {
                  Mz(!0), nz()
                },
                children: iz(`${dp}islandsOpenButton`)
              }), (0, Ti.jsx)(Jl.m, {
                onClick: bz
              })]
            })]
          }), (0, Ti.jsx)(hO, {
            tier: Oz,
            shown: Jz,
            NF: zz => {
              xz({
                tier: zz,
                at: Oz,
                ready: oz
              })
            }
          }), (0, Ti.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Gz, Jz > Oz + 1 && (0, Ti.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: pp(iz, Jz)
            })]
          }), 6 === Jz && Jz > Oz && (0, Ti.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: iz(`${dp}coreStagesNote`)
          }), 11 === Jz && Jz > Oz && (0, Ti.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: iz(`${dp}coreAtomicNote`)
          }), Lz && (0, Ti.jsx)(Hp, {
            message: tz,
            itemNames: Hz,
            next: Lz
          }), !Lz && (0, Ti.jsx)(Op, {
            message: tz,
            itemNames: Hz,
            shown: Jz
          })]
        })
      })
    }
    const Kp = {
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
    const wp = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: Oi,
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

    function Xp(zz) {
      return zz.baf2DropCometOreOnly ? "dropCometOre" : zz.baf2DropCometIsotope ? "seed" === zz.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function fp(zz) {
      let {
        message: uz,
        quests: bz,
        close: nz,
        leave: iz
      } = zz;
      const lz = Wl(),
        {
          t: Mz
        } = (0, Ln.F)(),
        tz = (0, MO.h)(Un, bz.get()),
        Hz = function(zz) {
          var uz;
          if (!az(zz.tutorial)) return null;
          const bz = zz.rows.find((zz => zz.current)),
            Ez = bz ? Kp[bz.key] : void 0;
          return null !== (uz = null !== Ez && void 0 !== Ez ? Ez : zz.side ? Kp[zz.side.row.key] : void 0) && void 0 !== uz ? uz : null
        }(tz),
        Oz = null === tz.tier || Zi(tz.tier),
        pz = Oz ? wp : wp.filter((zz => {
          let {
            item: uz
          } = zz;
          return uz !== Oi
        })),
        [dz, Fz] = (0, Ez.useState)(null),
        Zz = null !== dz && void 0 !== dz ? dz : !uz.baf2DropFoundSalvage && Oz,
        Rz = uz.baf2DropRuinDistance,
        Kz = uz.baf2DropComet,
        wz = uz.baf2DropOldWorks,
        Xz = uz.baf2DropGrove,
        fz = function(zz) {
          return 2 + Number(void 0 !== zz.baf2DropComet) + Number(!!zz.baf2DropOwedComet || void 0 !== zz.baf2DropOwedWaitMinutes) + Number(void 0 !== zz.baf2DropDigDistance) + Number(void 0 !== zz.baf2DropOldWorks) + Number(void 0 !== zz.baf2DropGrove)
        }(uz),
        sz = zz => {
          lz.send(function(zz) {
            return `baf2drop ${zz}`
          }(zz)), iz()
        };
      let rz = Mz("buildAFactory2Game:dropRuinNone");
      if (null !== Rz) {
        let zz = uz.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        uz.baf2DropRuinOldWorks && (zz = "dropRuinOldWorks");
        const bz = void 0 === uz.baf2DropRuinCluster ? Mz("buildAFactory2Game:dropRuinOpen") : Mz("buildAFactory2Game:dropRuinCluster", {
          count: String(uz.baf2DropRuinCluster)
        });
        rz = `${Mz(`buildAFactory2Game:${zz}`,{distance:String(Rz)})} ${bz}`
      }
      let oz = Mz("buildAFactory2Game:dropBelowDescription");
      void 0 !== uz.baf2DropBelowLook && (oz = Mz("buildAFactory2Game:dropBelowLook", {
        look: Mz(uz.baf2DropBelowLook)
      }));
      const Nz = "buildAFactory2Game:wildsRegion_survivorGrove" === uz.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        vz = vi(Mz, 60 * function(zz) {
          const [uz, bz] = (0, Ez.useState)((() => Date.now())), [nz, iz] = (0, Ez.useState)(uz);
          return (0, Ez.useEffect)((() => {
            const zz = Date.now();
            bz(zz), iz(zz)
          }), [zz]), (0, Ez.useEffect)((() => {
            const zz = window.setInterval((() => {
              iz(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(zz)
            }
          }), []), Math.max(1, zz.baf2DropRenewMinutes - Math.floor((nz - uz) / 6e4))
        }(uz)),
        xz = function(zz, uz, bz) {
          return "ruin" === zz && !bz || "owed" === zz && !uz.baf2DropOwedComet ? null : zz
        }(Hz, uz, null !== Rz),
        Jz = function(zz) {
          for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
          return xn()("Baf2DropTile", ...bz, {
            Wanted: xz === zz
          })
        };
      return (0, Ti.jsx)(xl.d, {
        close: nz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ti.jsxs)("section", {
          className: xn()("Baf2Panel Baf2DropMap", {
            Many: fz >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsxs)("div", {
              children: [(0, Ti.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: Mz("buildAFactory2Game:dropMapTitle")
              }), (0, Ti.jsx)("p", {
                children: Mz("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Ti.jsx)(Jl.m, {
              onClick: nz
            })]
          }), (0, Ti.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== Kz && (0, Ti.jsxs)(Jl.B, {
              className: Jz("comet", "Baf2DropComet"),
              onClick: () => {
                sz("comet")
              },
              children: [(0, Ti.jsx)("strong", {
                children: Mz("buildAFactory2Game:dropComet")
              }), (0, Ti.jsx)("span", {
                children: Mz(`buildAFactory2Game:${Xp(uz)}`, {
                  distance: String(Kz)
                })
              })]
            }), uz.baf2DropOwedComet && (0, Ti.jsxs)(Jl.B, {
              className: Jz("owed", "Baf2DropComet"),
              onClick: () => {
                sz("owed")
              },
              children: [(0, Ti.jsx)("strong", {
                children: Mz("buildAFactory2Game:dropOwedComet")
              }), (0, Ti.jsx)("span", {
                children: uz.baf2DropOwedIsotope ? Mz("buildAFactory2Game:dropOwedIsotopeDescription") : Mz("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== uz.baf2DropOwedWaitMinutes && (0, Ti.jsxs)(Jl.B, {
              className: Jz("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Ti.jsx)("strong", {
                children: Mz("buildAFactory2Game:dropOwedComet")
              }), (0, Ti.jsx)("span", {
                children: Mz("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(uz.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Ti.jsxs)(Jl.f, {
              className: Jz("below"),
              onClick: () => {
                sz("below")
              },
              children: [(0, Ti.jsx)("strong", {
                children: Mz("buildAFactory2Game:dropBelow")
              }), (0, Ti.jsx)("span", {
                children: oz
              })]
            }), void 0 !== uz.baf2DropDigDistance && (0, Ti.jsxs)(Jl.v, {
              className: Jz("dig"),
              onClick: () => {
                sz("dig")
              },
              children: [(0, Ti.jsx)("strong", {
                children: Mz("buildAFactory2Game:dropDig")
              }), (0, Ti.jsx)("span", {
                children: Mz("buildAFactory2Game:dropDigDescription", {
                  distance: String(uz.baf2DropDigDistance),
                  y: Ni(uz.baf2DropDigY)
                })
              })]
            }), void 0 !== Xz && (0, Ti.jsxs)(Jl.v, {
              className: Jz("grove", "Baf2DropGrove"),
              onClick: () => {
                sz("grove")
              },
              children: [(0, Ti.jsx)("strong", {
                children: Mz("buildAFactory2Game:dropGrove")
              }), (0, Ti.jsx)("span", {
                children: Mz(`buildAFactory2Game:${Nz}`, {
                  distance: String(Xz)
                })
              })]
            }), (0, Ti.jsxs)(Jl.q, {
              className: Jz("ruin"),
              disabled: null === Rz,
              onClick: () => {
                sz("ruin")
              },
              children: [(0, Ti.jsx)("strong", {
                children: Mz("buildAFactory2Game:dropRuin")
              }), (0, Ti.jsx)("span", {
                children: rz
              })]
            }), void 0 !== wz && (0, Ti.jsxs)(Jl.K, {
              className: Jz("works"),
              onClick: () => {
                sz("works")
              },
              children: [(0, Ti.jsx)("strong", {
                children: Mz("buildAFactory2Game:dropOldWorks")
              }), (0, Ti.jsx)("span", {
                children: Mz("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(wz)
                })
              })]
            })]
          }), (0, Ti.jsx)("p", {
            className: "Baf2DropRenew",
            children: Mz("buildAFactory2Game:dropRenew", {
              time: vz
            })
          }), (0, Ti.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: Zz,
            onToggle: zz => {
              zz.currentTarget.open !== Zz && Fz(zz.currentTarget.open)
            },
            children: [(0, Ti.jsx)("summary", {
              children: Mz("buildAFactory2Game:dropSalvageWhat")
            }), (0, Ti.jsx)("p", {
              children: Mz("buildAFactory2Game:dropSalvageIntro")
            }), (0, Ti.jsx)("ul", {
              children: pz.map((zz => {
                let {
                  item: uz,
                  nameKey: bz,
                  useKey: Ez,
                  params: nz
                } = zz;
                return (0, Ti.jsxs)("li", {
                  children: [(0, Ti.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Ti.jsx)(Gn.c, {
                      itemName: uz,
                      amount: 0
                    })
                  }), (0, Ti.jsxs)("span", {
                    children: [(0, Ti.jsx)("strong", {
                      children: Mz(bz)
                    }), ": ", Mz(Ez, nz)]
                  })]
                }, uz)
              }))
            })]
          })]
        })
      })
    }
    const sp = "buildAFactory2Game:";

    function rp(zz, uz) {
      return zz.sendIslandEdit(`baf2coopleave ${uz.baf2IslandId}`)
    }

    function op(zz) {
      let {
        card: uz,
        canRename: bz,
        done: nz,
        t: iz
      } = zz;
      const lz = Wl(),
        [Mz, tz] = (0, Ez.useState)(uz.baf2IslandName),
        Hz = JH(Mz),
        Oz = "" === Hz || AH(Hz),
        pz = () => {
          !Oz && bz && (Hz !== uz.baf2IslandName ? nz(lz.sendIslandEdit(`baf2islandrename ${uz.baf2IslandId} ${Hz}`)) : nz(null))
        },
        dz = () => {
          nz(null)
        };
      return (0, Ti.jsxs)("div", {
        className: "Baf2IslandForm",
        ...CH(dz),
        children: [(0, Ti.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [iz(`${sp}islandsRenameLabel`), (0, Ti.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Mz,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: YH,
            onChange: zz => {
              tz(zz.target.value)
            },
            ...BH(pz, dz)
          })]
        }), "" === Hz && (0, Ti.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: iz(`${sp}islandsRenameEmpty`)
        }), AH(Hz) && (0, Ti.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: iz(`${sp}islandsNameReserved`)
        }), (0, Ti.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Ti.jsx)(Jl.v, {
            disabled: Oz || !bz,
            onClick: pz,
            children: iz(`${sp}islandsRenameSave`)
          }), (0, Ti.jsx)(Jl.f, {
            onClick: dz,
            children: iz(`${sp}islandsCancel`)
          })]
        })]
      })
    }

    function Np(zz) {
      let {
        card: uz,
        canDelete: bz,
        done: nz,
        t: iz
      } = zz;
      const lz = Wl(),
        [Mz, tz] = (0, Ez.useState)(""),
        Hz = function(zz, uz) {
          return JH(zz).toLowerCase() === JH(uz).toLowerCase()
        }(Mz, uz.baf2IslandName),
        Oz = () => {
          Hz && bz && nz(lz.sendIslandEdit(`baf2islanddelete ${uz.baf2IslandId}`))
        },
        pz = () => {
          nz(null)
        },
        dz = cH("name"),
        [Fz, Zz = ""] = iz(`${sp}islandsDeleteConfirm`, {
          name: dz
        }).split(dz);
      return (0, Ti.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...CH(pz),
        children: [(0, Ti.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Ti.jsxs)("span", {
            children: [Fz, (0, Ti.jsx)("strong", {
              children: uz.baf2IslandName
            }), Zz]
          }), (0, Ti.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Mz,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: YH,
            onChange: zz => {
              tz(zz.target.value)
            },
            ...BH(Oz, pz)
          })]
        }), WH(uz) && (0, Ti.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: iz(`${sp}islandsDeleteLeftBack`)
        }), (0, Ti.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Ti.jsx)(Jl.K, {
            disabled: !Hz || !bz,
            onClick: Oz,
            children: iz(`${sp}islandsDeleteForGood`)
          }), (0, Ti.jsx)(Jl.f, {
            onClick: pz,
            children: iz(`${sp}islandsCancel`)
          })]
        })]
      })
    }

    function vp(zz) {
      let {
        members: uz,
        t: bz
      } = zz;
      const Ez = uz.length;
      return (0, Ti.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Ti.jsxs)("span", {
          children: [1 === Ez ? bz(`${sp}islandsPlayersOne`) : bz(`${sp}islandsPlayers`, {
            count: String(Ez)
          }), " "]
        }), uz.map(((zz, uz) => (0, Ti.jsxs)("span", {
          className: xn()("Baf2IslandMember", {
            Here: zz.baf2MemberHere
          }),
          title: zz.baf2MemberHere ? bz(`${sp}islandsPlayerHere`) : void 0,
          children: [zz.baf2MemberName, uz < Ez - 1 ? ", " : ""]
        }, zz.baf2MemberKey)))]
      })
    }

    function xp(zz) {
      let {
        card: uz,
        answered: bz,
        nowMs: nz,
        t: iz
      } = zz;
      const lz = Wl(),
        [Mz, tz] = (0, Ez.useState)(new Map),
        Hz = WH(uz);
      if (!Hz) return null;
      return (0, Ti.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Ti.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: iz(`${sp}islandsLeftTitle`)
        }), (0, Ti.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Hz.left.map((zz => {
            const Ez = zz.baf2LeftKey,
              Oz = jH(Mz.get(Ez), bz, nz),
              pz = function(zz) {
                return 1 === zz ? [`${oH}islandsLeftItemsOne`] : [`${oH}islandsLeftItems`, {
                  count: String(zz)
                }]
              }(zz.baf2LeftItems);
            return (0, Ti.jsx)("li", {
              className: xn()("Baf2IslandPerson", {
                Pending: Oz
              }),
              children: (0, Ti.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Ti.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: zz.baf2LeftName
                }), (0, Ti.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: iz(pz[0], pz[1])
                }), Hz.claim && (0, Ti.jsx)(Jl.v, {
                  className: "Baf2IslandPersonButton",
                  disabled: Oz,
                  onClick: () => {
                    (zz => {
                      const bz = lz.sendIslandEdit(`baf2coopclaim ${uz.baf2IslandId} ${zz}`);
                      tz((uz => new Map(uz).set(zz, {
                        atMs: Date.now(),
                        answer: bz
                      })))
                    })(Ez)
                  },
                  children: iz(`${sp}islandsClaim`)
                })]
              })
            }, Ez)
          }))
        }), Hz.goThere && (0, Ti.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: iz(`${sp}islandsClaimGoThere`)
        })]
      })
    }

    function Jp(zz) {
      let {
        card: uz,
        view: bz,
        blocked: nz,
        maxIslands: iz,
        answered: lz,
        nowMs: Mz,
        done: tz,
        openSocial: Hz,
        t: Oz
      } = zz;
      const pz = Wl(),
        [dz, Fz] = (0, Ez.useState)(new Map),
        [Zz, Rz] = (0, Ez.useState)(new Map),
        [Kz, wz] = (0, Ez.useState)(null),
        Xz = (0, Ez.useRef)(null);
      uO(Xz);
      const fz = uz.baf2IslandId,
        sz = uz.baf2IslandCoop,
        rz = null !== sz && void 0 !== sz && sz.baf2CoopMembers.some((zz => zz.baf2MemberKey === Kz)) ? Kz : null,
        oz = function(zz, uz) {
          const bz = zz.baf2IslandCoop;
          return bz && eH(bz) || null !== uz ? void 0 : zz.baf2IslandInvitable
        }(uz, nz),
        Nz = function(zz, uz) {
          const bz = zz.baf2IslandCoop;
          return bz && eH(bz) ? {
            key: `${oH}islandsCoopFull`,
            params: {
              max: String(bz.baf2CoopMax)
            }
          } : void 0 !== zz.baf2IslandInvitable && null === uz || bz && !bz.baf2CoopManageHere ? null : "degraded" === uz || "stuck" === uz ? {
            key: `${oH}islandsInviteNotLoaded`
          } : null === uz || function(zz) {
            return "notHome" === zz || "wilds" === zz || "visiting" === zz
          }(uz) || GH(uz) ? {
            key: `${oH}islandsInviteGoThere`
          } : {
            key: `${oH}islandsInviteBusy`
          }
        }(uz, nz),
        vz = () => {
          var zz;
          wz(null), null === (zz = Xz.current) || void 0 === zz || zz.focus()
        };
      return (0, Ti.jsxs)("div", {
        ref: Xz,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...CH(null === rz ? tz : vz),
        children: [sz && (0, Ti.jsxs)(Ti.Fragment, {
          children: [(0, Ti.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Oz(`${sp}islandsPlayersTitle`, {
              count: String(sz.baf2CoopMembers.length),
              max: String(sz.baf2CoopMax)
            })
          }), (0, Ti.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: sz.baf2CoopMembers.map(((zz, uz) => {
              const Ez = zz.baf2MemberKey,
                nz = jH(dz.get(Ez), lz, Mz);
              return (0, Ti.jsxs)("li", {
                className: xn()("Baf2IslandPerson", {
                  Pending: nz
                }),
                children: [(0, Ti.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Ti.jsx)("span", {
                    className: xn()("Baf2IslandPersonName", {
                      Here: zz.baf2MemberHere
                    }),
                    children: zz.baf2MemberName
                  }), zz.baf2MemberHere && (0, Ti.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Oz(`${sp}islandsPlayerHere`)
                  }), 0 === uz && (0, Ti.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Oz(`${sp}islandsPlayerOwner`)
                  }), bz.remove && uz > 0 && !nz && rz !== Ez && (0, Ti.jsx)(Jl.O, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var zz;
                      wz(Ez), null === (zz = Xz.current) || void 0 === zz || zz.focus()
                    },
                    children: Oz(`${sp}islandsRemove`)
                  })]
                }), rz === Ez && (0, Ti.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Ti.jsx)("p", {
                    children: gH(Oz, `${sp}islandsRemoveConfirm`, {
                      player: zz.baf2MemberName
                    })
                  }), (0, Ti.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Ti.jsx)(Jl.K, {
                      onClick: () => {
                        (zz => {
                          const uz = pz.sendIslandEdit(`baf2coopremove ${fz} ${zz.baf2MemberKey}`);
                          Fz((bz => new Map(bz).set(zz.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: uz
                          }))), vz()
                        })(zz)
                      },
                      children: Oz(`${sp}islandsRemoveYes`)
                    }), (0, Ti.jsx)(Jl.f, {
                      onClick: vz,
                      children: Oz(`${sp}islandsCancel`)
                    })]
                  })]
                })]
              }, Ez)
            }))
          })]
        }), (void 0 !== oz || null !== Nz) && (0, Ti.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Oz(`${sp}islandsInviteTitle`)
        }), !sz && (void 0 !== oz || null !== Nz) && (0, Ti.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Oz(`${sp}islandsInviteShareNote`)
        }), 0 === (null === oz || void 0 === oz ? void 0 : oz.length) && (0, Ti.jsx)(Ap, {
          openSocial: Hz,
          t: Oz
        }), void 0 !== oz && oz.length > 0 && (0, Ti.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: oz.map((zz => {
            const uz = !0 === zz.baf2InvitableSent || jH(Zz.get(zz.baf2InvitableId), lz, Mz);
            return (0, Ti.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Ti.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Ti.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: zz.baf2InvitableName
                }), zz.baf2InvitableFull && !uz && (0, Ti.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Oz(`${sp}islandsInviteTheirFull`, {
                    max: String(iz)
                  })
                }), (uz || !zz.baf2InvitableFull) && (0, Ti.jsx)(Jl.v, {
                  className: "Baf2IslandPersonButton",
                  disabled: uz,
                  onClick: () => {
                    (zz => {
                      const uz = pz.sendIslandEdit(`baf2coopinvite ${fz} ${zz}`);
                      Rz((bz => new Map(bz).set(zz, {
                        atMs: Date.now(),
                        answer: uz
                      })))
                    })(zz.baf2InvitableId)
                  },
                  children: Oz(uz ? `${sp}islandsInvited` : `${sp}islandsInvite`)
                })]
              })
            }, zz.baf2InvitableId)
          }))
        }), Nz && (0, Ti.jsx)(nO, {
          note: Nz,
          t: Oz
        }), (0, Ti.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Ti.jsx)(Jl.f, {
            onClick: tz,
            children: Oz(`${sp}islandsDone`)
          })
        })]
      })
    }

    function Ap(zz) {
      let {
        openSocial: uz,
        t: bz
      } = zz;
      return (0, Ti.jsxs)(Ti.Fragment, {
        children: [(0, Ti.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: bz(uz ? `${sp}islandsInviteNobody` : `${sp}islandsInviteNobodyGuest`)
        }), uz && (0, Ti.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Ti.jsx)(Jl.f, {
            onClick: uz,
            children: bz("socialBar:social")
          })
        })]
      })
    }

    function Tp(zz) {
      let {
        className: uz,
        text: bz,
        ConfirmButton: nz,
        confirmLabel: iz,
        canConfirm: lz,
        send: Mz,
        done: tz,
        t: Hz
      } = zz;
      const Oz = (0, Ez.useRef)(null);
      uO(Oz);
      const pz = () => {
        tz(null)
      };
      return (0, Ti.jsxs)("div", {
        ref: Oz,
        tabIndex: -1,
        className: xn()("Baf2IslandForm", uz),
        ...CH(pz),
        children: [(0, Ti.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: bz
        }), (0, Ti.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Ti.jsx)(nz, {
            disabled: !lz,
            onClick: () => {
              lz && tz(Mz())
            },
            children: iz
          }), (0, Ti.jsx)(Jl.f, {
            onClick: pz,
            children: Hz(`${sp}islandsCancel`)
          })]
        })]
      })
    }

    function Lp(zz) {
      return "hidden" !== zz
    }

    function Pp(zz) {
      var uz, bz;
      let {
        card: nz,
        keepOwn: iz,
        blocked: lz,
        maxIslands: Mz,
        serverNowMs: tz,
        nowMs: Hz,
        actions: Oz,
        full: pz,
        waits: dz,
        answered: Fz,
        mode: Zz,
        setMode: Rz,
        pending: Kz,
        onSent: wz,
        switchTo: Xz,
        leave: fz,
        coopOn: sz,
        openSocial: rz,
        t: oz
      } = zz;
      const Nz = Wl(),
        vz = nz.baf2IslandActive,
        xz = vz ? null : function(zz, uz) {
          if (zz <= 0) return null;
          const bz = uz - zz;
          if (bz < fi) return [`${oH}islandsPlayedJustNow`];
          if (bz < NH) return [`${oH}islandsPlayedMinutes`, {
            minutes: String(Math.floor(bz / fi))
          }];
          if (bz < vH) return [`${oH}islandsPlayedHours`, {
            hours: String(Math.floor(bz / NH))
          }];
          const Ez = Math.floor(bz / vH);
          return 1 === Ez ? [`${oH}islandsPlayedDay`] : [`${oH}islandsPlayedDays`, {
            days: String(Ez)
          }]
        }(nz.baf2IslandLastPlayedMs, tz),
        Jz = void 0 === (Az = nz.baf2IslandItems) ? null : 0 === Az ? [`${oH}islandsItemsNone`] : 1 === Az ? [`${oH}islandsItemsOne`] : [`${oH}islandsItems`, {
          count: String(Az)
        }];
      var Az;
      const Tz = function(zz) {
          return zz ? 1 === zz ? [`${oH}islandsWaitingOne`] : [`${oH}islandsWaiting`, {
            count: String(zz)
          }] : null
        }(nz.baf2IslandWaiting),
        Lz = nz.baf2IslandUnreadable,
        Pz = nz.baf2IslandCoop,
        Gz = QH(nz, Oz, iz, pz, sz, lz),
        az = (0, Ez.useRef)(null);
      kH(null !== Zz, az);
      const Vz = () => {
          var zz;
          Rz(null), null === (zz = az.current) || void 0 === zz || zz.focus()
        },
        mz = (zz, uz) => {
          Vz(), null !== zz && wz(zz, uz)
        },
        qz = (zz, uz) => oz(`${sp}${zz}`, {
          time: vi(oz, uz)
        });
      return (0, Ti.jsxs)("li", {
        ref: az,
        tabIndex: -1,
        className: xn()("Baf2IslandCard", {
          Active: vz,
          Pending: Kz,
          Shared: void 0 !== Pz
        }),
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Ti.jsx)("strong", {
            className: "Baf2IslandName",
            children: nz.baf2IslandName
          }), vz && (0, Ti.jsx)("span", {
            className: "Baf2IslandBadge",
            children: oz(`${sp}islandsOnThis`)
          }), Pz && (0, Ti.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: oz(`${sp}islandsShared`)
          })]
        }), "member" === (null === Pz || void 0 === Pz ? void 0 : Pz.baf2CoopRole) && (0, Ti.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: gH(oz, `${sp}islandsSharedBy`, {
            owner: Pz.baf2CoopOwner
          })
        }), void 0 !== Lz && (0, Ti.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: oz("newer" === Lz ? `${sp}islandsUnreadable` : `${sp}islandsDamaged`)
        }), "corrupt" === Lz && pz && (0, Ti.jsx)("p", {
          className: "Baf2IslandStats",
          children: oz(`${sp}islandsDamagedFull`)
        }), void 0 === Lz && (0, Ti.jsxs)(Ti.Fragment, {
          children: [(0, Ti.jsx)(EO, {
            tier: nz.baf2IslandTier,
            t: oz
          }), (0, Ti.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Ti.jsx)("span", {
              children: 1 === nz.baf2IslandQuestsDone ? oz(`${sp}islandsQuestsDoneOne`) : oz(`${sp}islandsQuestsDone`, {
                count: String(nz.baf2IslandQuestsDone)
              })
            }), (0, Ti.jsx)("span", {
              children: 1 === nz.baf2IslandMachines ? oz(`${sp}islandsMachinesOne`) : oz(`${sp}islandsMachines`, {
                count: String(nz.baf2IslandMachines)
              })
            }), Jz && (0, Ti.jsx)("span", {
              children: oz(Jz[0], Jz[1])
            }), Tz && (0, Ti.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: oz(Tz[0], Tz[1])
            }), xz && (0, Ti.jsx)("span", {
              children: oz(xz[0], xz[1])
            })]
          })]
        }), Pz && void 0 === Pz.baf2CoopState && "people" !== Zz && (0, Ti.jsx)(vp, {
          members: Pz.baf2CoopMembers,
          t: oz
        }), null === Zz && (0, Ti.jsx)(xp, {
          card: nz,
          answered: Fz,
          nowMs: Hz,
          t: oz
        }), Gz.note && (0, Ti.jsx)(nO, {
          note: Gz.note,
          className: xn()({
            Unreachable: void 0 !== (null === Pz || void 0 === Pz ? void 0 : Pz.baf2CoopState)
          }),
          t: oz
        }), "rename" === Zz && (0, Ti.jsx)(op, {
          card: nz,
          canRename: "enabled" === Gz.rename,
          done: mz,
          t: oz
        }), "delete" === Zz && (0, Ti.jsx)(Np, {
          card: nz,
          canDelete: "enabled" === Gz.delete,
          done: zz => {
            mz(zz, Pz ? "delete" : void 0)
          },
          t: oz
        }), "people" === Zz && (0, Ti.jsx)(Jp, {
          card: nz,
          view: Gz,
          blocked: lz,
          maxIslands: Mz,
          answered: Fz,
          nowMs: Hz,
          done: Vz,
          openSocial: rz,
          t: oz
        }), "leave" === Zz && (0, Ti.jsx)(Tp, {
          className: "Leave",
          text: gH(oz, `${sp}islandsLeaveConfirm`, {
            island: nz.baf2IslandName,
            owner: null !== (uz = null === (bz = nz.baf2IslandCoop) || void 0 === bz ? void 0 : bz.baf2CoopOwner) && void 0 !== uz ? uz : ""
          }),
          ConfirmButton: Jl.K,
          confirmLabel: oz(`${sp}islandsLeaveYes`),
          canConfirm: "enabled" === Gz.leave,
          send: () => rp(Nz, nz),
          done: zz => {
            mz(zz, "leave"), null !== zz && vz && fz()
          },
          t: oz
        }), "unshare" === Zz && (0, Ti.jsx)(Tp, {
          className: "Unshare",
          text: gH(oz, `${sp}islandsStopSharingConfirm`, {
            island: nz.baf2IslandName
          }),
          ConfirmButton: Jl.v,
          confirmLabel: oz(`${sp}islandsStopSharing`),
          canConfirm: "enabled" === Gz.unshare,
          send: () => Nz.sendIslandEdit(`baf2coopunshare ${nz.baf2IslandId}`),
          done: zz => {
            mz(zz), null !== zz && fz()
          },
          t: oz
        }), null === Zz && !Kz && (0, Ti.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": nz.baf2IslandName,
          children: [Lp(Gz.switch) && (0, Ti.jsx)(Jl.v, {
            disabled: "enabled" !== Gz.switch,
            onClick: Xz,
            children: "tryAgain" === Gz.switchLabel ? oz(`${sp}islandsTryAgain`) : dz.switch > 0 ? qz("islandsSwitchIn", dz.switch) : oz(`${sp}islandsSwitch`)
          }), Lp(Gz.rename) && (0, Ti.jsx)(Jl.f, {
            disabled: "enabled" !== Gz.rename,
            onClick: () => {
              Rz("rename")
            },
            children: oz(`${sp}islandsRename`)
          }), Lp(Gz.people) && (0, Ti.jsx)(Jl.f, {
            disabled: "enabled" !== Gz.people,
            onClick: () => {
              Rz("people")
            },
            children: oz("players" === Gz.peopleLabel ? `${sp}islandsPlayersButton` : `${sp}islandsInviteButton`)
          }), Lp(Gz.unshare) && (0, Ti.jsx)(Jl.f, {
            disabled: "enabled" !== Gz.unshare,
            onClick: () => {
              Rz("unshare")
            },
            children: oz(`${sp}islandsStopSharing`)
          }), Lp(Gz.dismiss) && (0, Ti.jsx)(Jl.f, {
            disabled: "enabled" !== Gz.dismiss,
            onClick: () => {
              wz(rp(Nz, nz), "dismiss"), vz && fz()
            },
            children: oz(`${sp}islandsDismiss`)
          }), Lp(Gz.leave) && (0, Ti.jsx)(Jl.O, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Gz.leave,
            onClick: () => {
              Rz("leave")
            },
            children: vz && dz.switch > 0 ? qz("islandsLeaveIn", dz.switch) : oz(`${sp}islandsLeave`)
          }), Lp(Gz.delete) && (0, Ti.jsx)(Jl.O, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Gz.delete,
            onClick: () => {
              Rz("delete")
            },
            children: dz.change > 0 && Gz.deleteWaits ? qz("islandsDeleteIn", dz.change) : oz(`${sp}islandsDelete`)
          })]
        })]
      })
    }
    const Gp = "buildAFactory2Game:";

    function ap(zz) {
      let {
        invite: uz,
        actions: bz,
        full: nz,
        maxIslands: iz,
        waitSeconds: lz,
        focus: Mz,
        focused: tz,
        join: Hz,
        decline: Oz,
        t: pz
      } = zz;
      const [dz, Fz] = (0, Ez.useState)(!1), Zz = (0, Ez.useRef)(null);
      kH(dz, Zz), (0, Ez.useEffect)((() => {
        var zz;
        Mz && (Fz(!0), null === (zz = Zz.current) || void 0 === zz || zz.focus(), tz())
      }), [Mz, tz]);
      const Rz = function(zz, uz, bz, Ez, nz) {
          return bz ? {
            join: !1,
            note: {
              key: `${oH}islandsJoinTooMany`,
              params: {
                max: String(Ez)
              }
            }
          } : zz.baf2InvitePlayers >= nz ? {
            join: !1,
            note: {
              key: `${oH}islandsJoinFull`
            }
          } : {
            join: uz.switch,
            note: null
          }
        }(uz, bz, nz, iz, 10),
        Kz = uz.baf2InviteIsland,
        wz = uz.baf2InvitePlayers,
        Xz = () => {
          var zz;
          Fz(!1), null === (zz = Zz.current) || void 0 === zz || zz.focus()
        },
        fz = lz > 0 && null === Rz.note ? pz(`${Gp}islandsJoinIn`, {
          time: vi(pz, lz)
        }) : pz(`${Gp}islandsJoin`);
      return (0, Ti.jsxs)("li", {
        ref: Zz,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...dz ? CH(Xz) : {},
        children: [(0, Ti.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Ti.jsx)("strong", {
            className: "Baf2IslandName",
            children: Kz
          })
        }), (0, Ti.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: gH(pz, `${Gp}islandsInvitedBy`, {
            owner: uz.baf2InviteOwner
          })
        }), (0, Ti.jsx)(EO, {
          tier: uz.baf2InviteTier,
          t: pz
        }), (0, Ti.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Ti.jsx)("span", {
            children: 1 === wz ? pz(`${Gp}islandsPlayersCountOne`) : pz(`${Gp}islandsPlayersCount`, {
              count: String(wz)
            })
          })
        }), Rz.note && (0, Ti.jsx)(nO, {
          note: Rz.note,
          t: pz
        }), dz && (0, Ti.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: gH(pz, `${Gp}islandsJoinConfirm`, {
            island: Kz
          })
        }), !dz && (0, Ti.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Kz,
          children: [(0, Ti.jsx)(Jl.v, {
            disabled: !Rz.join,
            onClick: () => {
              var zz;
              Fz(!0), null === (zz = Zz.current) || void 0 === zz || zz.focus()
            },
            children: fz
          }), (0, Ti.jsx)(Jl.f, {
            onClick: Oz,
            children: pz(`${Gp}islandsDecline`)
          })]
        }), dz && (0, Ti.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Ti.jsx)(Jl.v, {
            disabled: !Rz.join,
            onClick: Hz,
            children: pz(`${Gp}islandsJoinYes`)
          }), (0, Ti.jsx)(Jl.f, {
            onClick: Xz,
            children: pz(`${Gp}islandsCancel`)
          })]
        })]
      })
    }

    function Vp(zz) {
      let {
        invites: uz,
        actions: bz,
        full: Ez,
        maxIslands: nz,
        waitSeconds: iz,
        focus: lz,
        focused: Mz,
        leave: tz,
        declined: Hz,
        t: Oz
      } = zz;
      const pz = Wl();
      return (0, Ti.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Ti.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Oz(`${Gp}islandsInvitesTitle`)
        }), (0, Ti.jsx)("ul", {
          className: "Baf2IslandCards",
          children: uz.map((zz => {
            const uz = zz.baf2InviteId;
            return (0, Ti.jsx)(ap, {
              invite: zz,
              actions: bz,
              full: Ez,
              maxIslands: nz,
              waitSeconds: iz,
              focus: lz === uz,
              focused: Mz,
              join: () => {
                pz.send(`baf2coopaccept ${uz}`), tz()
              },
              decline: () => {
                pz.send(`baf2coopdecline ${uz}`), Hz(uz)
              },
              t: Oz
            }, uz)
          }))
        })]
      })
    }
    const mp = "buildAFactory2Game:";

    function qp(zz) {
      let {
        cards: uz,
        activeName: bz,
        canStart: nz,
        waitSeconds: iz,
        leave: lz,
        t: Mz
      } = zz;
      const tz = Wl(),
        [Hz, Oz] = (0, Ez.useState)(!1),
        [pz, dz] = (0, Ez.useState)(""),
        Fz = (0, Ez.useRef)(null);
      kH(Hz, Fz), (0, Ez.useEffect)((() => {
        var zz;
        Hz && (null === (zz = Fz.current) || void 0 === zz || zz.focus())
      }), [Hz]);
      const Zz = TH(uz),
        Rz = JH(pz),
        Kz = AH(Rz),
        wz = () => {
          nz && !Kz && (tz.send("" === Rz || Rz === Zz ? Iz : `${Iz} ${Rz}`), lz())
        },
        Xz = () => {
          var zz;
          Oz(!1), null === (zz = Fz.current) || void 0 === zz || zz.focus()
        };
      return (0, Ti.jsxs)("li", {
        ref: Fz,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Hz ? CH(Xz) : {},
        children: [(0, Ti.jsx)("strong", {
          className: "Baf2IslandName",
          children: Mz(`${mp}islandsNewTitle`)
        }), !Hz && (0, Ti.jsx)("p", {
          className: "Baf2IslandStats",
          children: Mz(`${mp}islandsNewNote`)
        }), Hz && (0, Ti.jsxs)(Ti.Fragment, {
          children: [(0, Ti.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: gH(Mz, `${mp}islandsNewConfirm`, {
              name: bz
            })
          }), (0, Ti.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [Mz(`${mp}islandsNewNameLabel`), (0, Ti.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: pz,
              placeholder: Zz,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: YH,
              onChange: zz => {
                dz(zz.target.value)
              },
              ...BH(wz, Xz)
            })]
          }), Kz && (0, Ti.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: Mz(`${mp}islandsNameReserved`)
          })]
        }), (0, Ti.jsxs)("div", {
          className: xn()("Baf2IslandButtons", {
            Stacked: Hz
          }),
          children: [(0, Ti.jsx)(Jl.v, {
            disabled: !nz || Hz && Kz,
            onClick: () => {
              if (!Hz) return dz(Zz), void Oz(!0);
              wz()
            },
            children: iz > 0 ? Mz(`${mp}islandsNewIn`, {
              time: vi(Mz, iz)
            }) : Mz(Hz ? `${mp}islandsNewConfirmButton` : `${mp}islandsNew`)
          }), Hz && (0, Ti.jsx)(Jl.f, {
            onClick: Xz,
            children: Mz(`${mp}islandsCancel`)
          })]
        })]
      })
    }

    function hp(zz) {
      var uz, bz;
      let {
        message: nz,
        arrivedAtMs: iz,
        close: lz,
        leave: Mz,
        openSocial: tz
      } = zz;
      const Hz = Wl(),
        {
          t: Oz
        } = (0, Ln.F)(),
        pz = bO(1e3),
        [dz, Fz] = (0, Ez.useState)(null),
        [Zz, Rz] = (0, Ez.useState)(new Map),
        [Kz, wz] = (0, Ez.useState)(new Set),
        Xz = nz.baf2IslandCards,
        fz = function(zz, uz, bz, Ez) {
          return (null !== zz && void 0 !== zz ? zz : []).filter((zz => uz + zz.baf2InviteLeftMs > bz && !Ez.has(zz.baf2InviteId)))
        }(nz.baf2IslandsInvites, iz, pz, Kz),
        sz = fz.map((zz => zz.baf2InviteId)).join(" "),
        rz = (0, Ez.useRef)(null),
        oz = zO(rz);
      (0, Ez.useEffect)((() => {
        var zz, uz;
        null !== (zz = rz.current) && void 0 !== zz && zz.contains(document.activeElement) || (null === (uz = rz.current) || void 0 === uz || uz.focus())
      }), [nz, sz]), (0, Ez.useEffect)((() => {
        Rz((zz => function(zz, uz, bz, Ez) {
          const nz = new Map;
          for (const iz of uz) {
            const uz = zz.get(iz.baf2IslandId);
            uz && (void 0 !== uz.untilGone || Ez < uz.answer) && qH(uz, iz, bz) && nz.set(iz.baf2IslandId, uz)
          }
          return nz.size === zz.size ? zz : nz
        }(zz, nz.baf2IslandCards, Date.now(), nz.baf2IslandsAnswered)))
      }), [nz]);
      const Nz = xH(iz, nz.baf2IslandsWaitMs, pz),
        vz = nz.baf2IslandsBlocked,
        xz = aH(vz, Nz),
        Jz = function(zz, uz) {
          const bz = aH(zz, 0);
          return {
            switch: bz.switch ? uz : 0,
            change: bz.change ? uz : 0
          }
        }(vz, Nz),
        Az = Xz.length >= nz.baf2IslandsMax,
        Tz = Xz.length > 0,
        Lz = function(zz, uz, bz) {
          return zz + Math.max(0, bz - uz)
        }(nz.baf2IslandsNowMs, iz, pz),
        Pz = null !== (uz = null === (bz = Xz.find((zz => zz.baf2IslandActive))) || void 0 === bz ? void 0 : bz.baf2IslandName) && void 0 !== uz ? uz : "",
        Gz = function(zz) {
          const uz = zz.filter(DH).length;
          return uz <= 1 && uz < zz.length
        }(Xz),
        az = !0 === nz.baf2IslandsCoop,
        Vz = function(zz, uz) {
          const bz = zz.find((zz => zz.baf2IslandActive)),
            Ez = null === bz || void 0 === bz ? void 0 : bz.baf2IslandCoop;
          return bz && "member" === (null === Ez || void 0 === Ez ? void 0 : Ez.baf2CoopRole) ? {
            key: `${oH}islandsKeepOwnMember`,
            names: {
              owner: Ez.baf2CoopOwner,
              island: bz.baf2IslandName
            }
          } : {
            key: uz ? `${oH}islandsKeepOwn` : `${oH}islandsKeepOwnSolo`
          }
        }(Xz, az),
        [mz, qz] = (0, Ez.useState)(null);
      (0, Ez.useEffect)((() => {
        void 0 !== nz.baf2IslandsFocusInvite && qz(nz.baf2IslandsFocusInvite)
      }), [nz]);
      const hz = (0, Ez.useCallback)((() => {
          qz(null)
        }), []),
        Uz = dz ? Xz.find((zz => zz.baf2IslandId === dz.id)) : void 0,
        cz = dz && Uz && "hidden" !== QH(Uz, xz, Gz, Az, az, vz)[dz.mode] ? dz : null;
      return (0, Ti.jsx)(xl.d, {
        close: lz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Ti.jsxs)("section", {
          ref: rz,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: oz ? {
            marginTop: `${oz.marginTop}px`,
            maxHeight: `${oz.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsxs)("div", {
              children: [(0, Ti.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Oz(`${mp}islandsTitle`)
              }), Tz && (0, Ti.jsx)("p", {
                children: Oz(`${mp}islandsSubtitle`, {
                  count: String(Xz.length),
                  max: String(nz.baf2IslandsMax)
                })
              })]
            }), (0, Ti.jsx)(Jl.m, {
              ariaLabel: Oz(`${mp}islandsClose`),
              onClick: lz
            })]
          }), (0, Ti.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== vz && (0, Ti.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: gH(Oz, LH(vz, PH(Xz)), {
                island: Pz
              })
            }), Tz && fz.length > 0 && (0, Ti.jsx)(Vp, {
              invites: fz,
              actions: xz,
              full: Az,
              maxIslands: nz.baf2IslandsMax,
              waitSeconds: Jz.switch,
              focus: mz,
              focused: hz,
              leave: Mz,
              declined: zz => {
                wz((uz => new Set(uz).add(zz)))
              },
              t: Oz
            }), Tz && (0, Ti.jsxs)(Ti.Fragment, {
              children: [Az && (0, Ti.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Oz(`${mp}islandsFull`, {
                  max: String(nz.baf2IslandsMax)
                })
              }), (0, Ti.jsx)("p", {
                className: "Baf2IslandsNote",
                children: gH(Oz, Vz.key, Vz.names)
              }), (0, Ti.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Xz.map((zz => {
                  const uz = zz.baf2IslandId;
                  return (0, Ti.jsx)(Pp, {
                    card: zz,
                    keepOwn: Gz,
                    coopOn: az,
                    openSocial: tz,
                    blocked: vz,
                    maxIslands: nz.baf2IslandsMax,
                    serverNowMs: Lz,
                    nowMs: pz,
                    actions: xz,
                    full: Az,
                    waits: Jz,
                    answered: nz.baf2IslandsAnswered,
                    mode: (null === cz || void 0 === cz ? void 0 : cz.id) === uz ? cz.mode : null,
                    setMode: zz => {
                      Fz(null === zz ? null : {
                        id: uz,
                        mode: zz
                      })
                    },
                    pending: qH(Zz.get(uz), zz, pz),
                    onSent: (bz, Ez) => {
                      Rz((nz => {
                        const iz = {
                          atMs: Date.now(),
                          from: zz.baf2IslandName,
                          answer: bz
                        };
                        return new Map(nz).set(uz, Ez ? {
                          ...iz,
                          untilGone: Ez
                        } : iz)
                      }))
                    },
                    leave: Mz,
                    switchTo: () => {
                      Hz.send(`baf2islandswitch ${uz}`), Mz()
                    },
                    t: Oz
                  }, uz)
                })), !Az && (0, Ti.jsx)(qp, {
                  cards: Xz,
                  activeName: Pz,
                  canStart: xz.change,
                  waitSeconds: Jz.change,
                  leave: Mz,
                  t: Oz
                })]
              })]
            })]
          })]
        })
      })
    }
    var Up = bz(4770);
    const cp = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Hn: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      gp = Object.keys(cp),
      Sp = new Set([...Object.keys(Iu), ...[...Vu.Press.recipes, ...Vu["Wire Mill"].recipes].map((zz => zz.output))]),
      yp = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Dp = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Qp = / Bar$|Alloy$/,
      Wp = /Porkchop|Beef|Mutton|Venison|Steak/,
      ep = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const jp = (0, Ez.memo)((function(zz) {
      let {
        item: uz,
        name: bz,
        amount: Ez,
        selected: nz,
        small: iz,
        onPick: lz
      } = zz;
      return (0, Ti.jsxs)("button", {
        type: "button",
        className: xn()("Baf2TermTile", {
          On: nz,
          Small: iz
        }),
        "aria-label": `${bz}: ${Ez}`,
        "aria-pressed": nz,
        onClick: () => {
          lz(uz)
        },
        children: [(0, Ti.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Ti.jsx)(Gn.c, {
            itemName: uz,
            amount: 0
          })
        }), (0, Ti.jsx)("span", {
          className: "Baf2TermCount",
          children: oi(Ez, 1e4)
        }), !iz && (0, Ti.jsx)("span", {
          className: "Baf2TermName",
          children: bz
        })]
      })
    }));

    function Ip(zz) {
      let {
        store: uz,
        close: bz,
        send: nz
      } = zz;
      const {
        t: iz
      } = (0, Ln.F)(), {
        isTouchScreen: lz
      } = (0, rn.m)(["isTouchScreen"]);
      ! function(zz) {
        const [uz, bz] = (0, Ez.useState)(zz.version);
        (0, Ez.useEffect)((() => (bz(zz.version), zz.subscribe((() => {
          bz(zz.version)
        })))), [zz])
      }(uz);
      const [Mz, tz] = (0, Ez.useState)("all"), [Hz, Oz] = (0, Ez.useState)(!1), [pz, dz] = (0, Ez.useState)(""), [Fz, Zz] = (0, Ez.useState)(""), [Rz, Kz] = (0, Ez.useState)(null), [wz, Xz] = (0, Ez.useState)(!1), [fz, sz, rz] = function() {
        const zz = (0, Ez.useRef)(null),
          [uz, bz] = (0, Ez.useState)(!1),
          nz = () => {
            const uz = zz.current;
            bz(null !== uz && uz.scrollLeft + uz.clientWidth < uz.scrollWidth - 1)
          };
        return (0, Ez.useEffect)(nz), (0, Ez.useEffect)((() => {
          const uz = zz.current;
          if (!uz) return;
          const bz = new ResizeObserver(nz);
          return bz.observe(uz), () => {
            bz.disconnect()
          }
        }), []), [zz, uz, nz]
      }(), oz = (0, Ez.useMemo)((() => new Map), [iz]), Nz = zz => {
        let uz = oz.get(zz);
        return void 0 === uz && (uz = function(zz, uz) {
          const bz = /^(.+) \((.+)\)$/.exec(zz);
          return bz ? uz(bz[2], bz[1]) : zz
        }(li(iz, zz), ((zz, uz) => iz("buildAFactory2Game:terminalTileKind", {
          kind: zz,
          base: uz
        }))), oz.set(zz, uz)), uz
      }, vz = uz.isReadOnly(), xz = wz && !vz, Jz = uz.recent(), Az = uz.items(), Tz = Fz.trim().toLowerCase(), Lz = xz ? uz.heldItems(Rz) : ("recent" === Mz ? Jz : Az).filter((zz => {
        const uz = Nz(zz);
        return ("all" === Mz || "recent" === Mz || function(zz) {
          return Ri(zz) ? "farm" : yp.test(zz) ? "nuclear" : Qp.test(zz) ? "bars" : Wp.test(zz) ? "farm" : Dp.test(zz) ? "Hn" : Sp.has(zz) ? "parts" : ep.test(zz) ? "farm" : "other"
        }(zz) === Mz) && ("" === Tz || uz.toLowerCase().includes(Tz)) && ("" === pz || uz.toUpperCase().startsWith(pz))
      })), Pz = new Set(Az.map((zz => Nz(zz).charAt(0).toUpperCase()))), Gz = zz => xz ? uz.heldAmount(zz) : uz.amount(zz), az = !xz && "recent" !== Mz && Jz.length > 0, Vz = function(zz, uz) {
        return null !== zz && uz.includes(zz) ? zz : null
      }(Rz, az ? [...Lz, ...Jz] : Lz), mz = null === Vz ? 0 : uz.amount(Vz), qz = null === Vz ? 0 : Gz(Vz), hz = (0, Ez.useCallback)((zz => {
        Kz((uz => uz === zz ? null : zz))
      }), []), Uz = zz => qz > 0 || xz && null === Vz && "fill" === zz && Lz.length > 0, cz = xz ? [
        ["one", iz("buildAFactory2Game:terminalStoreOne")],
        ["stack", iz("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", iz(null === Vz ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", iz("buildAFactory2Game:terminalTakeOne")],
        ["stack", iz("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", iz("buildAFactory2Game:terminalFill")]
      ], gz = xz ? iz("buildAFactory2Game:terminalStoreEmpty") : "" !== pz ? iz("buildAFactory2Game:terminalEmptyLetter", {
        letter: pz
      }) : "" !== Tz ? iz("buildAFactory2Game:terminalEmptySearch", {
        query: Fz
      }) : iz("buildAFactory2Game:terminalEmpty");
      return (0, Ti.jsx)(xl.d, {
        close: bz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Ti.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsxs)("div", {
              children: [(0, Ti.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: iz(uz.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Ti.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Ti.jsx)("span", {
                  className: xn()({
                    Off: xz
                  }),
                  children: iz("buildAFactory2Game:terminalSubtitle", {
                    count: String(uz.siloCount())
                  })
                }), !vz && (0, Ti.jsx)("span", {
                  className: xn()({
                    Off: !xz
                  }),
                  children: iz("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !vz && (0, Ti.jsx)(Up.d, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: iz("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: iz("buildAFactory2Game:terminalModeStore")
              }],
              value: xz ? "store" : "take",
              onChange: zz => {
                Xz("store" === zz), Kz(null)
              },
              ariaLabel: iz("buildAFactory2Game:terminalModes")
            }), (0, Ti.jsx)(Jl.m, {
              onClick: bz
            })]
          }), (0, Ti.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Ti.jsxs)("div", {
              className: xn()("Baf2TermTools", {
                Hidden: xz
              }),
              children: [(0, Ti.jsx)("div", {
                ref: fz,
                className: xn()("Baf2TermChips", {
                  MoreRight: sz
                }),
                onScroll: rz,
                children: Hz ? (0, Ti.jsxs)(Ti.Fragment, {
                  children: [(0, Ti.jsx)("button", {
                    type: "button",
                    "aria-label": iz("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Oz(!1), dz("")
                    },
                    children: "\u2190"
                  }), [...Pz].sort().map((zz => (0, Ti.jsx)("button", {
                    type: "button",
                    className: xn()({
                      On: pz === zz
                    }),
                    onClick: () => {
                      dz(pz === zz ? "" : zz)
                    },
                    children: zz
                  }, zz)))]
                }) : (0, Ti.jsxs)(Ti.Fragment, {
                  children: [(0, Ti.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Oz(!0)
                    },
                    children: iz("buildAFactory2Game:terminalLetters")
                  }), gp.map((zz => (0, Ti.jsx)("button", {
                    type: "button",
                    className: xn()({
                      On: Mz === zz
                    }),
                    onClick: () => {
                      tz(zz)
                    },
                    children: iz(cp[zz])
                  }, zz)))]
                })
              }), !lz && (0, Ti.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Fz,
                placeholder: iz("buildAFactory2Game:terminalSearch"),
                "aria-label": iz("buildAFactory2Game:terminalSearch"),
                onChange: zz => {
                  Zz(zz.target.value)
                },
                onKeyDown: zz => {
                  zz.stopPropagation()
                }
              }), (0, Ti.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": iz("buildAFactory2Game:terminalResort"),
                title: iz("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  uz.resort()
                },
                children: "\u21c5"
              })]
            }), az && (0, Ti.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Ti.jsx)("span", {
                children: iz(cp.recent)
              }), Jz.map((zz => (0, Ti.jsx)(jp, {
                item: zz,
                name: Nz(zz),
                amount: uz.amount(zz),
                selected: Vz === zz,
                small: !0,
                onPick: hz
              }, zz)))]
            }), (0, Ti.jsx)("div", {
              className: "Baf2TermTiles",
              children: Lz.length > 0 ? Lz.map((zz => (0, Ti.jsx)(jp, {
                item: zz,
                name: Nz(zz),
                amount: Gz(zz),
                selected: Vz === zz,
                onPick: hz
              }, zz))) : (0, Ti.jsx)("p", {
                className: "Baf2TermEmpty",
                children: gz
              })
            }), (0, Ti.jsxs)("div", {
              className: xn()("Baf2TermActions", {
                Hidden: xz && 0 === Lz.length
              }),
              children: [(0, Ti.jsx)("span", {
                className: "Baf2TermPicked",
                children: vz ? (0, Ti.jsxs)(Ti.Fragment, {
                  children: [null !== Vz && mz > 0 ? Nz(Vz) : iz("buildAFactory2Game:terminalVisiting"), (0, Ti.jsx)("small", {
                    children: iz("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Vz ? (0, Ti.jsxs)(Ti.Fragment, {
                  children: [Nz(Vz), (0, Ti.jsx)("small", {
                    children: iz("buildAFactory2Game:terminalStored", {
                      amount: mz.toLocaleString()
                    })
                  })]
                }) : iz(xz ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !vz && cz.map((zz => {
                let [bz, Ez] = zz;
                const iz = "fill" === bz ? Jl.q : Jl.f;
                return (0, Ti.jsx)(iz, {
                  className: "Baf2TermTake",
                  disabled: !Uz(bz),
                  onClick: () => {
                    (zz => {
                      Uz(zz) && nz(null === Vz ? uz.putAll() : xz ? uz.put(zz, Vz) : uz.take(zz, Vz))
                    })(bz)
                  },
                  children: Ez
                }, bz)
              }))]
            })]
          })]
        })
      })
    }

    function Bp(zz) {
      let {
        kind: uz,
        icon: bz,
        label: Ez,
        number: nz,
        preview: iz,
        note: lz,
        tone: Mz = null,
        share: tz,
        onExplain: Hz
      } = zz;
      return (0, Ti.jsxs)("button", {
        type: "button",
        className: xn()("NxLane", uz, {
          Warn: "warn" === Mz,
          Danger: "danger" === Mz
        }),
        onClick: Hz,
        children: [(0, Ti.jsxs)("span", {
          className: "NxLaneHead",
          children: [bz, (0, Ti.jsx)("span", {
            className: "NxLaneLabel",
            children: Ez
          })]
        }), (0, Ti.jsxs)("span", {
          className: "NxLaneNum",
          children: [nz, iz && (0, Ti.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", iz]
          })]
        }), (0, Ti.jsx)("span", {
          className: "NxLaneNote",
          children: lz
        }), void 0 !== tz && (0, Ti.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, tz)) + "%"
          }
        })]
      })
    }

    function Cp(zz) {
      let {
        kind: uz,
        step: bz,
        short: Ez,
        planned: nz
      } = zz;
      return (0, Ti.jsx)("i", {
        className: xn()("NxPipe", uz, `Step${bz}`, {
          Short: Ez,
          Planned: nz
        }),
        "aria-hidden": "true"
      })
    }

    function Yp(zz) {
      let {
        max: uz,
        bands: bz,
        ticks: Ez,
        now: nz,
        settle: iz,
        settleTone: lz,
        onExplain: Mz
      } = zz;
      const tz = zz => Math.max(0, Math.min(uz, zz)) / uz * 100 + "%";
      let Hz = 0;
      return (0, Ti.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: Mz,
        children: [(0, Ti.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [bz.map((zz => {
            const uz = {
              bottom: tz(Hz),
              height: `calc(${tz(zz.upTo)} - ${tz(Hz)})`
            };
            return Hz = zz.upTo, (0, Ti.jsx)("i", {
              className: xn()("NxGaugeBand", zz.kind),
              style: uz
            }, zz.kind)
          })), null !== nz && (0, Ti.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: tz(nz)
            }
          }), void 0 !== iz && null !== iz && (0, Ti.jsx)("i", {
            className: xn()("NxGaugeSettle", {
              Bad: "bad" === lz
            }),
            style: {
              bottom: tz(iz)
            }
          })]
        }), (0, Ti.jsx)("span", {
          className: "NxGaugeTicks",
          children: Ez.map((zz => (0, Ti.jsx)("small", {
            style: {
              bottom: tz(zz)
            },
            children: zz
          }, zz)))
        })]
      })
    }

    function kp(zz) {
      const [uz, bz] = (0, Ez.useState)(null), [nz, iz] = (0, Ez.useState)((() => {
        try {
          return null === window.localStorage.getItem(zz)
        } catch {
          return !1
        }
      })), lz = (0, Ez.useRef)(null);
      (0, Ez.useEffect)((() => () => {
        null !== lz.current && clearTimeout(lz.current)
      }), []);
      const Mz = (0, Ez.useCallback)((uz => {
          bz(uz), iz(!1);
          try {
            window.localStorage.setItem(zz, "1")
          } catch {}
          null !== lz.current && clearTimeout(lz.current), lz.current = setTimeout((() => {
            lz.current = null, bz(null)
          }), 5e3)
        }), [zz]),
        tz = (0, Ez.useCallback)(((uz, bz) => {
          const Ez = `${zz}:${uz}`;
          try {
            if (null !== window.localStorage.getItem(Ez)) return;
            window.localStorage.setItem(Ez, "1")
          } catch {
            return
          }
          Mz(bz)
        }), [Mz, zz]);
      return {
        explained: uz,
        hinting: nz,
        explain: Mz,
        explainOnce: tz
      }
    }

    function zd(zz) {
      let {
        text: uz,
        tone: bz,
        explained: Ez
      } = zz;
      return (0, Ti.jsxs)("p", {
        className: xn()("NxStatus", null === Ez ? bz : "Explain"),
        "aria-live": "polite",
        children: [null !== Ez && (0, Ti.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Ez && void 0 !== Ez ? Ez : uz]
      })
    }
    const ud = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function bd(zz, uz) {
      const bz = Number(zz[uz]);
      return 1 === bz || 2 === bz || 3 === bz ? bz : 0
    }

    function Ed(zz) {
      return !!Jt("reactor", zz.baf2RxNeed) || void 0 !== zz.baf2RxLayout && zz.baf2RxNeed.some((zz => {
        let [uz, bz] = zz;
        return bz > 0 && ud.includes(uz)
      }))
    }
    const nd = "buildAFactory2Game:";

    function ld(zz) {
      let {
        status: uz,
        store: bz,
        busy: Ez
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)();
      return function(zz) {
        return 0 !== (zz.baf2RxFlags & Ru) && (!zz.baf2RxFormed || void 0 !== zz.baf2RxLayout)
      }(uz) ? (0, Ti.jsx)(Jl.q, {
        disabled: !Ed(uz) || Ez,
        onClick: () => {
          bz.tap("fill", (() => {
            bz.send("fill")
          }))
        },
        children: nz(void 0 !== uz.baf2RxLayout ? `${nd}rxFillLayout` : `${nd}rxFill`)
      }) : null
    }

    function Md(zz) {
      let {
        status: uz,
        store: bz,
        readOnly: nz,
        bare: iz = !1
      } = zz;
      const {
        t: lz
      } = (0, Ln.F)(), Mz = uz.baf2RxLayout, [tz, Hz, Oz] = uz.baf2RxDims, pz = (0, Ez.useMemo)((() => {
        if (void 0 === Mz) return 0;
        const zz = Uint8Array.from(Mz, ((zz, uz) => bd(Mz, uz)));
        return nt([tz - 2, Hz - 2, Oz - 2], zz).max
      }), [Mz, tz, Hz, Oz]);
      return void 0 === Mz ? null : (0, Ti.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!iz && (0, Ti.jsx)("span", {
          className: "Baf2RxHint",
          children: lz(`${nd}rxLayoutLine`, {
            amount: mt(pz)
          })
        }), !nz && (0, Ti.jsx)(Jl.f, {
          onClick: () => {
            bz.send("layout", 0)
          },
          children: lz(`${nd}rxLayoutHide`)
        })]
      })
    }
    const td = "buildAFactory2Game:",
      Hd = {
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

    function Od(zz) {
      let {
        id: uz,
        title: bz,
        body: Ez,
        bodyParams: nz,
        yes: iz,
        cancel: lz,
        confirm: Mz
      } = zz;
      const {
        t: tz
      } = (0, Ln.F)();
      return (0, Ti.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": uz,
        children: [(0, Ti.jsx)("h3", {
          id: uz,
          children: tz(bz)
        }), (0, Ti.jsx)("p", {
          children: tz(Ez, nz)
        }), (0, Ti.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Ti.jsx)(Jl.j, {
            onClick: lz,
            children: tz(`${td}rxCancel`)
          }), (0, Ti.jsx)(Jl.K, {
            onClick: Mz,
            children: tz(iz)
          })]
        })]
      })
    }

    function pd(zz) {
      const [uz, bz] = (0, Ez.useState)((() => zz.get()));
      return (0, Ez.useEffect)((() => (bz(zz.get()), zz.subscribe((() => {
        bz(zz.get())
      })))), [zz]), uz
    }

    function dd(zz) {
      let {
        kind: uz,
        cap: bz,
        busy: nz = !1,
        whyNot: iz = null,
        apart: lz
      } = zz;
      const {
        t: Mz
      } = (0, Ln.F)(), [tz, Hz] = (0, Ez.useState)(!1), Oz = null !== iz, pz = (0, Ez.useRef)(null);
      if ((0, Ez.useEffect)((() => {
          Oz && Hz(!1)
        }), [Oz]), (0, Ez.useLayoutEffect)((() => {
          var zz;
          const uz = null === (zz = pz.current) || void 0 === zz ? void 0 : zz.firstElementChild;
          Oz ? null === uz || void 0 === uz || uz.setAttribute("aria-disabled", "true") : nz || null === uz || void 0 === uz || uz.removeAttribute("aria-disabled")
        })), !tz || Oz) return (0, Ti.jsx)("span", {
        ref: pz,
        className: "Baf2RxApartWrap",
        children: (0, Ti.jsx)(Jl.j, {
          disabled: nz,
          className: xn()({
            Baf2RxNotYet: Oz
          }),
          onClick: () => {
            iz ? iz() : Hz(!0)
          },
          children: Mz(`${td}rxApart`)
        })
      });
      const dz = "battery" === uz,
        Fz = void 0 === bz ? `${td}batApartConfirmBodyPlan` : `${td}batApartConfirmBody`;
      return (0, Ti.jsx)(Od, {
        id: `baf2ApartTitle_${uz}`,
        title: dz ? `${td}batApartConfirmTitle` : `${td}rxApartConfirmTitle`,
        body: dz ? Fz : `${td}rxApartConfirmBody`,
        bodyParams: void 0 === bz ? void 0 : {
          cap: bz
        },
        yes: `${td}rxApart`,
        cancel: () => {
          Hz(!1)
        },
        confirm: () => {
          Hz(!1), lz()
        }
      })
    }

    function Fd(zz) {
      let {
        mood: uz,
        big: bz
      } = zz;
      const Ez = Hd[uz],
        nz = [];
      return Ez.rows.forEach(((zz, uz) => {
        for (let bz = 0; bz < zz.length; bz++) "." !== zz[bz] && nz.push((0, Ti.jsx)("rect", {
          x: bz + 1,
          y: uz + 1,
          width: 1,
          height: 1,
          fill: "w" === zz[bz] ? "#8fd3ff" : Ez.colour
        }, `${bz},${uz}`))
      })), (0, Ti.jsxs)("svg", {
        className: xn()("Baf2RxFace", {
          Big: bz,
          Alarm: "alarm" === uz
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Ti.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Ti.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), nz]
      })
    }

    function Zd(zz) {
      return ri(zz, "+").replace("+", "")
    }

    function Rd(zz) {
      let {
        kind: uz,
        dims: bz,
        cap: Ez,
        disabled: nz,
        compact: iz,
        resize: lz
      } = zz;
      const {
        t: Mz
      } = (0, Ln.F)(), {
        min: tz,
        max: Hz
      } = cb(uz), Oz = Math.min(Ez, Hz), pz = [`${td}rxWide`, `${td}rxTall`, `${td}rxDeep`], dz = {
        w: String(bz[0]),
        h: String(bz[1]),
        d: String(bz[2]),
        blocks: String(Vt(uz, bz))
      };
      return (0, Ti.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Ti.jsx)("div", {
          className: "Baf2RxSteppers",
          children: bz.map(((zz, uz) => {
            const iz = Ez => {
                const nz = [bz[0], bz[1], bz[2]];
                nz[uz] = zz + Ez, lz(nz)
              },
              dz = zz >= Oz;
            return (0, Ti.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Ti.jsx)("button", {
                type: "button",
                "aria-label": Mz(`${td}rxSmaller`),
                disabled: nz || zz <= tz,
                onClick: () => {
                  iz(-1)
                },
                children: "\u2212"
              }), (0, Ti.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [zz, (0, Ti.jsx)("small", {
                  children: Mz(pz[uz])
                })]
              }), (0, Ti.jsx)("button", {
                type: "button",
                "aria-label": Mz(`${td}rxBigger`),
                disabled: nz || dz,
                onClick: () => {
                  iz(1)
                },
                children: dz && Ez < Hz ? "\ud83d\udd12" : "+"
              })]
            }, pz[uz])
          }))
        }), !iz && (0, Ti.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === uz ? Mz(`${td}rxSizeLine`, {
            ...dz,
            water: String(Gt(bz))
          }) : Mz(`${td}batSizeLine`, dz)
        })]
      })
    }

    function Kd(zz) {
      let {
        on: uz,
        label: bz,
        disabled: Ez,
        locked: nz,
        pending: iz,
        toggle: lz
      } = zz;
      return (0, Ti.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": uz,
        disabled: Ez,
        "aria-disabled": nz || void 0,
        className: xn()("Baf2RxSwitch", {
          On: uz,
          Locked: nz,
          Pending: iz
        }),
        onClick: lz,
        children: [(0, Ti.jsx)("span", {
          className: "Baf2RxKnob"
        }), bz]
      })
    }
    const wd = "buildAFactory2Game:",
      Xd = .95;

    function fd(zz, uz) {
      return 0 !== (zz.baf2RxFlags & uz)
    }

    function sd(zz) {
      return "cryo" === zz ? Yz.n : Yz.q
    }

    function rd(zz) {
      var uz, bz, Ez, nz, iz, lz, Mz, tz, Hz;
      return zz.baf2RxCryo ? {
        hF: "cryo",
        usePerS: null !== (nz = zz.baf2RxCryoUse) && void 0 !== nz ? nz : 0,
        needPerS: null !== (iz = zz.baf2RxCryoNeed) && void 0 !== iz ? iz : 0,
        inPerS: null !== (lz = zz.baf2RxCryoIn) && void 0 !== lz ? lz : 0,
        stored: null !== (Mz = zz.baf2RxCryoStored) && void 0 !== Mz ? Mz : 0,
        makersShort: null !== (tz = zz.baf2RxMixersShort) && void 0 !== tz ? tz : 0,
        waterBeside: null !== (Hz = zz.baf2RxWaterUse) && void 0 !== Hz ? Hz : 0,
        pct: zz.baf2RxWater
      } : {
        hF: "water",
        usePerS: null !== (uz = zz.baf2RxWaterUse) && void 0 !== uz ? uz : 0,
        needPerS: null !== (bz = zz.baf2RxWaterNeed) && void 0 !== bz ? bz : 0,
        inPerS: zz.baf2RxWaterIn,
        stored: zz.baf2RxWaterStored,
        makersShort: null !== (Ez = zz.baf2RxCondensersShort) && void 0 !== Ez ? Ez : 0,
        waterBeside: 0,
        pct: zz.baf2RxWater
      }
    }

    function od(zz) {
      const uz = "running" === zz.baf2RxState || "idle" === zz.baf2RxState;
      return zz.baf2RxFormed && zz.baf2RxTarget !== zz.baf2RxThrottle && uz ? Nd(zz, zz.baf2RxTarget) : null
    }

    function Nd(zz, uz) {
      const [bz, Ez, nz, , , , iz, , lz] = zz.baf2RxStats, Mz = fd(zz, Fu), tz = rd(zz), Hz = tz.pct / 100, {
        gen: Oz,
        out: pz,
        load: dz
      } = function(zz, uz, bz, Ez) {
        const nz = bz ? CM : 1,
          iz = Math.min(zz.fuelHeat * nz * Math.max(0, Math.min(1, uz)), zz.size * nz);
        return {
          gen: iz,
          out: iz,
          load: Rt(iz, zz.cooling, Ez)
        }
      }({
        fuelHeat: bz,
        cooling: Ez,
        size: nz
      }, uz / 100, Mz, Hz), Fz = wt(iz || Et(...zz.baf2RxDims)), Zz = zz.baf2RxHeat, Rz = Math.abs(dz - Zz), Kz = function(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Yz.q;
        const iz = bz ? CM : 1,
          lz = Math.min(zz.fuelHeat * iz * uz / 100, zz.size * iz),
          Mz = lz,
          tz = zz.fuelHeat * iz,
          Hz = zz.cooling * Zt(Ez.pct / 100),
          Oz = tz > 0 && Hz < zz.size * iz ? Math.floor(100 * Hz / tz) : 100,
          pz = lz * nz - Ez.inPerS;
        return {
          out: Mz,
          hotAbove: Oz >= 100 ? null : Math.max(0, Oz),
          waterSecs: Ez.pct >= 100 && pz > 1e-6 ? Math.max(0, Ez.stored) / pz : null
        }
      }({
        fuelHeat: bz,
        cooling: Ez,
        size: nz
      }, uz, Mz, {
        pct: tz.pct,
        inPerS: tz.inPerS,
        stored: tz.stored
      }, sd(tz.hF));
      return {
        pct: uz,
        out: pz,
        coolPerS: Oz * sd(tz.hF),
        pelletsPerMin: lz > 0 ? pz / lz * 60 : 0,
        settle: dz,
        settleS: Rz > 2 ? Fz * Math.log(Rz / 2) : 0,
        overheatS: dz > 100 && Zz < 100 ? Fz * Math.log((dz - Zz) / (dz - 100)) : null,
        hotAbove: Kz.hotAbove,
        coolantSecs: Kz.waterSecs
      }
    }

    function vd(zz) {
      return zz.baf2RxThrottle <= 0 && "running" !== zz.baf2RxState ? 0 : Nd(zz, zz.baf2RxTarget).pelletsPerMin / 60
    }

    function xd(zz, uz) {
      if (zz <= 0 || uz <= 0) return 0;
      const bz = zz / uz;
      return bz < .25 ? 1 : bz < .5 ? 2 : bz < .8 ? 3 : 4
    }

    function Jd(zz, uz) {
      const bz = {};
      for (const [Ez, nz] of Object.entries(uz.params)) bz[Ez] = "time" === Ez ? vi(zz, nz) : "amount" === Ez ? mt(nz) : String(Math.round(nz));
      return zz(uz.key, bz)
    }

    function Ad(zz, uz) {
      return {
        key: `${wd}${zz}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: uz
      }
    }

    function Td(zz) {
      var uz;
      const bz = fd(zz, Fu),
        Ez = "running" === zz.baf2RxState,
        nz = rt(zz),
        iz = zz.baf2RxHeat;
      var lz;
      if (Ez && iz > IM) return {
        key: null !== (lz = nz.fix) && void 0 !== lz ? lz : `${wd}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const Mz = Ez ? Nd(zz, zz.baf2RxTarget).coolantSecs : null,
        tz = "cryo" === rd(zz).hF;
      if (null !== Mz && Mz >= 1 && Mz <= 30) return Ad(tz ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Hz = ut(Et(...zz.baf2RxDims)).waste,
        Oz = Ez ? At(zz, Hz, vd(zz)).fullInS : null;
      if (null !== Oz && Oz <= 120 && zz.baf2RxWaste >= .5 * Hz) return Ad("rxWarnWaste", "warn");
      if (null !== Mz && Mz >= 1) return Ad(tz ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: Mz
      });
      const pz = "noWater" === zz.baf2RxState && iz > IM;
      if (zz.baf2RxDamage >= 1 && !pz) return Ad("rxDamagedHeals", "warn", {
        pct: zz.baf2RxDamage
      });
      if (zz.baf2RxCryoCut) return Ad("rxFix_cryoCut", "warn");
      const dz = rd(zz);
      if ("noWater" === zz.baf2RxState && "cryo" === dz.hF) return Ad("noWater" === zz.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Fz = nz.fix === `${wd}rxFix_scramCool` || "idle" === zz.baf2RxState && zz.baf2RxTarget <= 0;
      if (Fz && zz.baf2RxFuel <= 0) return Ad("rxFix_noFuel", "warn");
      if (Fz && zz.baf2RxWaterIn <= 0 && (null !== (uz = zz.baf2RxCryoIn) && void 0 !== uz ? uz : 0) <= 0) return Ad("rxFix_noWater", "warn");
      const Zz = nz.fix === `${wd}rxFix_scramCool` ? Nt(zz) : null;
      if (null !== Zz) return {
        key: Zz.key,
        params: {
          amount: Zz.amount
        },
        tone: "info"
      };
      if ("running" !== zz.baf2RxState && "idle" !== zz.baf2RxState && null !== nz.fix) return {
        key: nz.fix,
        params: {},
        tone: "scram" === zz.baf2RxState ? "info" : pz ? "bad" : "warn"
      };
      var Rz;
      if ("idle" === zz.baf2RxState && zz.baf2RxTarget <= 0) return {
        key: null !== (Rz = nz.fix) && void 0 !== Rz ? Rz : `${wd}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const Kz = zz.baf2RxCryoStarved;
      if ("cryo" === dz.hF && Kz && dz.needPerS > 0 && dz.usePerS < Xd * dz.needPerS) return Ad("noWater" === Kz ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const wz = "cryo" === dz.hF,
        Xz = dz.needPerS > 0 && dz.usePerS < Xd * dz.needPerS;
      if (wz ? Xz || dz.makersShort > 0 && dz.pct < 100 : dz.pct < 100) {
        const uz = wz && Xz ? Math.floor(100 * dz.usePerS / dz.needPerS) : Math.min(100, dz.pct);
        if (dz.makersShort > 0) {
          return Ad(`${wz?"rxCryoShortLine":"rxWaterShortLine"}${1===dz.makersShort?"One":""}${!wz&&zz.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: uz,
            count: dz.makersShort
          })
        }
        return Ad(wz ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: uz
        })
      }
      const fz = function(zz) {
        const [uz, bz, Ez] = zz.baf2RxStats, nz = rd(zz), iz = Kt({
          fuelHeat: uz,
          cooling: bz,
          size: Ez
        }, "cryo" === nz.hF ? Yz.h : 1, !0);
        return Math.max(0, iz * sd(nz.hF) - nz.inPerS)
      }(zz);
      if (bz && fz > 0) return Ad("cryo" === dz.hF ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(fz)
      });
      if (iz >= dt) return Ad("rxHotLine", "warn");
      const sz = Nd(zz, zz.baf2RxTarget);
      var rz;
      if (null !== sz.overheatS) return Ad("rxWillOverheat", "bad", {
        pct: zz.baf2RxTarget,
        time: sz.overheatS,
        safe: null !== (rz = sz.hotAbove) && void 0 !== rz ? rz : 100
      });
      if (Math.abs(sz.settle - iz) >= 3) return Ad("rxSettling", "info", {
        pct: zz.baf2RxTarget,
        heat: Math.round(sz.settle),
        time: sz.settleS
      });
      const oz = Nt(zz);
      if (null !== oz) return {
        key: oz.key,
        params: {
          amount: oz.amount
        },
        tone: "info"
      };
      const Nz = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== uz && ("running" !== uz || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === zz.rods ? `${Xt}rxLimitNoRods` : `${Xt}rxLimit_${pt(zz)}`
      }({
        rods: zz.baf2RxStats[3],
        ...ot(zz)
      }, zz.baf2RxState, zz.baf2RxOut >= Xd * zz.baf2RxMaxNow, !1);
      if (Nz === `${wd}rxLimit_size`) {
        const [uz, , bz, Ez] = zz.baf2RxStats, nz = Ez > 0 && uz > 0 ? Math.ceil(bz / (uz / Ez) - 1e-9) : Ez, iz = zz.baf2RxDims.every((zz => zz >= cb("reactor").max));
        if (nz < Ez) return Ad(iz ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: nz,
          have: Ez
        });
        if (iz) return Ad("rxLimit_sizeMax", "info")
      }
      return null !== Nz ? {
        key: Nz,
        params: {},
        tone: "info"
      } : Ad("rxSteady", "ok", {
        pct: zz.baf2RxTarget
      })
    }

    function Ld(zz) {
      var uz;
      if (zz.melted) return Ad("rxMeltedBody", "bad");
      if (-1 === zz.bad) return Ad("rxFix_noRoom", "warn");
      if (zz.bad > 0) return Ad(1 === zz.bad ? "rxBadOne" : "rxBad", "warn", {
        count: zz.bad
      });
      if (zz.left > 0) {
        const uz = 1 === zz.left ? "One" : "";
        return Ad(zz.canFill ? `rxPlanLeft${uz}` : `rxPlanLeftNoFill${uz}`, "info", {
          count: zz.left
        })
      }
      if (0 === zz.rods) return Ad("rxLimitNoRods", "warn");
      const bz = null !== (uz = zz.idle) && void 0 !== uz ? uz : 0;
      return bz > 0 ? Ad(1 === bz ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: bz
      }) : Ad("rxPlanReady", "ok")
    }

    function Pd(zz) {
      return Math.floor(Math.max(0, zz[1] - 1) / 2)
    }

    function Gd(zz) {
      if (zz >= lt && zz < Mt) {
        const uz = zz - lt;
        return {
          key: 0 === uz ? `${wd}rxWhy_rodAlone` : 1 === uz ? `${wd}rxWhy_rodOne` : `${wd}rxWhy_rod`,
          params: {
            count: String(uz),
            heat: String(gM * (1 + SM * uz))
          }
        }
      }
      return zz === Mt ? {
        key: `${wd}rxWhy_channel`,
        params: {
          amount: String(DM)
        }
      } : zz === tt ? {
        key: `${wd}rxWhy_deadChannel`,
        params: {}
      } : zz === Ht ? {
        key: `${wd}rxWhy_graphite`,
        params: {}
      } : {
        key: `${wd}rxWhy_core`,
        params: {}
      }
    }
    const ad = "buildAFactory2Game:";

    function Vd(zz, uz) {
      return 0 !== (zz.baf2RxFlags & uz)
    }

    function md(zz) {
      let {
        status: uz,
        pending: bz,
        store: Ez,
        explain: nz
      } = zz;
      const {
        t: iz
      } = (0, Ln.F)(), lz = Vd(uz, du), Mz = uz.baf2RxTarget, tz = uz.baf2RxThrottle, Hz = function(zz) {
        return {
          press: () => {
            zz.throttlePress()
          },
          drag: uz => {
            zz.throttleDrag(uz)
          },
          release: () => {
            zz.throttleRelease()
          }
        }
      }(Ez), Oz = null === (pz = Nd(uz, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, pz - 10),
        red: pz
      };
      var pz;
      return (0, Ti.jsxs)("div", {
        className: xn()("Baf2RxThrottle", {
          Off: lz
        }),
        onClick: () => {
          lz && nz(`${ad}rxWhy_startFirst`)
        },
        children: [(0, Ti.jsx)("span", {
          className: "HideNarrow",
          children: iz(`${ad}rxThrottle`)
        }), (0, Ti.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Ti.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: Mz,
            disabled: lz,
            style: lz ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": iz(`${ad}rxThrottle`),
            onPointerDown: () => {
              Hz.press();
              const zz = () => {
                window.removeEventListener("pointerup", zz), window.removeEventListener("pointercancel", zz), Hz.release()
              };
              window.addEventListener("pointerup", zz), window.addEventListener("pointercancel", zz)
            },
            onKeyUp: Hz.release,
            onChange: zz => {
              Hz.drag(Number(zz.target.value))
            }
          }), (0, Ti.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Oz.amber}%, #ffb020 ${Oz.amber}% ${Oz.red}%, #ff3b30 ${Oz.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Ti.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${tz}% + ${8*(1-tz/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Ti.jsxs)("b", {
          children: [`${Mz}%`, (0, Ti.jsx)("i", {
            className: xn()("Baf2RxPendingDot", {
              On: bz
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function qd(zz) {
      let {
        status: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)(), Ez = Nd(uz, uz.baf2RxTarget), nz = rd(uz).hF, iz = bz("cryo" === nz ? `${ad}rxRateCryo` : `${ad}rxRateWater`, {
        rate: Zd(Ez.coolPerS)
      }), lz = bz(`${ad}rxChain`, {
        pct: String(uz.baf2RxTarget),
        out: mt(Ez.out),
        heat: String(Math.round(Ez.settle)),
        coolant: iz
      }), Mz = null !== Ez.coolantSecs ? Ez.coolantSecs >= 1 ? bz("cryo" === nz ? `${ad}rxThrottleCryoOut` : `${ad}rxThrottleWaterOut`, {
        time: vi(bz, Ez.coolantSecs)
      }) : bz("cryo" === nz ? `${ad}rxThrottleCryoDry` : `${ad}rxThrottleWaterDry`) : null;
      return (0, Ti.jsxs)("p", {
        className: "Baf2RxChain",
        children: [lz, null !== Mz ? (0, Ti.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", Mz]
        }) : (0, Ti.jsxs)("span", {
          children: [" \xb7 ", bz(`${ad}rxChainPellets`, {
            amount: qt(Ez.pelletsPerMin)
          })]
        })]
      })
    }

    function hd(zz) {
      let {
        view: uz,
        store: bz,
        explain: nz,
        explainOnce: iz
      } = zz;
      const {
        t: lz
      } = (0, Ln.F)(), {
        status: Mz
      } = uz, [tz, Hz] = (0, Ez.useState)(!1), Oz = Vd(Mz, du), dz = Vd(Mz, Fu), Fz = !Vd(Mz, Ku), Zz = Mz.baf2RxHeat > 100;
      return (0, Ti.jsxs)(Ti.Fragment, {
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Ti.jsx)(md, {
            status: Mz,
            pending: uz.throttlePending,
            store: bz,
            explain: nz
          }), (0, Ti.jsx)(Kd, {
            on: dz,
            label: dz ? lz(`${ad}rxOdLeft`, {
              time: vi(lz, Mz.baf2RxOdLeft)
            }) : lz(`${ad}rxOverdrive`),
            locked: Fz,
            pending: 0 !== (uz.pendingFlags & Fu),
            toggle: () => {
              Fz ? nz(`${ad}rxOverdriveTier`, {
                amount: String(pz(13))
              }) : dz ? bz.setFlag(Fu, !1) : uz.odConfirmed ? bz.setFlag(Fu, !0) : Hz(!0)
            }
          }), Oz || uz.startGuard ? (0, Ti.jsx)(Jl.v, {
            disabled: uz.busy.has("start") || uz.startGuard,
            onClick: () => {
              bz.tap("start", (() => {
                bz.setFlag(du, !1)
              }))
            },
            children: lz(uz.startGuard ? `${ad}rxStarting` : `${ad}rxStart`)
          }) : (0, Ti.jsx)("span", {
            className: xn()("Baf2RxScram", {
              Pulse: Zz
            }),
            children: (0, Ti.jsx)(Jl.K, {
              onClick: () => {
                bz.shutDown()
              },
              children: lz(`${ad}rxScram`)
            })
          })]
        }), (0, Ti.jsx)(qd, {
          status: Mz
        }), tz && (0, Ti.jsx)(Od, {
          id: "baf2RxOdTitle",
          title: `${ad}rxOdConfirmTitle`,
          body: `${ad}rxOdConfirmBody`,
          yes: `${ad}rxOdConfirm`,
          cancel: () => {
            Hz(!1)
          },
          confirm: () => {
            Hz(!1), bz.tap("odConfirm", (() => {
              bz.confirmOverdrive(), bz.setFlag(Fu, !0)
            })), iz(`${ad}rxWhy_overdrive`)
          }
        })]
      })
    }

    function Ud(zz) {
      let {
        view: uz,
        store: bz,
        keepSize: Ez
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)(), {
        status: iz
      } = uz;
      return (0, Ti.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Ti.jsx)(Rd, {
          kind: "reactor",
          dims: uz.dims,
          cap: iz.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: zz => {
            bz.resize(zz)
          }
        }), Ez ? (0, Ti.jsx)(Jl.j, {
          onClick: Ez,
          children: nz(`${ad}rxKeepSize`)
        }) : (0, Ti.jsxs)(Ti.Fragment, {
          children: [(0, Ti.jsx)(Kd, {
            on: uz.guide,
            label: nz(`${ad}rxGuide`),
            toggle: () => {
              bz.toggleGuide()
            }
          }), Vd(iz, Xu) && (0, Ti.jsx)(Kd, {
            on: uz.starter,
            label: nz(`${ad}rxStarter`),
            toggle: () => {
              bz.toggleStarter()
            }
          }), (0, Ti.jsx)(ld, {
            status: iz,
            store: bz,
            busy: uz.busy.has("fill")
          })]
        })]
      })
    }

    function cd(zz) {
      let {
        need: uz,
        kind: bz = "reactor",
        explain: Ez
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)(), iz = uz.length <= 3, lz = uz.reduce(((zz, uz) => {
        let [, bz] = uz;
        return zz + bz
      }), 0);
      return (0, Ti.jsxs)("div", {
        className: xn()("Baf2RxParts", {
          Compact: !iz
        }),
        onClick: () => {
          Ez("battery" === bz ? `${ad}batWhy_store` : `${ad}rxShellHint`)
        },
        children: [lz > 0 && (0, Ti.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === lz ? nz(`${ad}rxBlocksOne`) : nz(`${ad}rxBlocks`, {
            blocks: String(lz)
          })
        }), 0 === uz.length ? (0, Ti.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: nz("battery" === bz ? `${ad}batPartsDone` : `${ad}rxShellDone`)
        }) : xt(uz).map((zz => {
          let [uz, bz, Ez] = zz;
          const lz = function(zz) {
            const uz = Pt[zz];
            if (void 0 === uz) return null;
            const [bz, Ez, nz] = Tt[uz].colour.map((zz => Math.round(255 * zz)));
            return `rgb(${bz}, ${Ez}, ${nz})`
          }(uz);
          return (0, Ti.jsxs)("span", {
            className: "Baf2RxChip",
            title: li(nz, uz),
            children: [(0, Ti.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === lz ? {
                visibility: "hidden"
              } : {
                background: lz
              },
              title: nz(`${ad}rxShopGhost`)
            }), (0, Ti.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Ti.jsx)(Gn.c, {
                itemName: uz,
                amount: 0
              })
            }), (0, Ti.jsx)("span", {
              className: "Baf2RxChipName",
              children: iz ? `${bz} ${Mz=li(nz,uz),Mz.replace(/^(Reactor|Battery) (?=\S)/,"")}` : bz
            }), Ez >= bz ? (0, Ti.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Ti.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: iz ? nz(`${ad}rxShopShort`, {
                count: String(bz - Ez)
              }) : "\u2212" + (bz - Ez)
            })]
          }, uz);
          var Mz
        }))]
      })
    }
    const gd = "buildAFactory2Game:";

    function Sd(zz) {
      var uz, bz, nz, iz, lz, Mz, tz;
      let {
        store: Hz,
        close: Oz
      } = zz;
      const {
        t: pz
      } = (0, Ln.F)(), dz = Wl(), Fz = pd(Hz), {
        explained: Zz,
        explain: Rz
      } = kp("baf2RxExplained"), Kz = (0, Ez.useCallback)(((zz, uz) => {
        Rz(pz(zz, uz))
      }), [Rz, pz]), wz = null === Fz || void 0 === Fz ? void 0 : Fz.status, Xz = !0 === (null === wz || void 0 === wz ? void 0 : wz.baf2BatReadOnly), fz = zz => {
        wz && dz.send(pu(wz.baf2BatAt, zz))
      }, [sz, rz, oz] = null !== (uz = null === Fz || void 0 === Fz ? void 0 : Fz.dims) && void 0 !== uz ? uz : [0, 0, 0], Nz = mt(null !== (bz = null === Fz || void 0 === Fz ? void 0 : Fz.Bp) && void 0 !== bz ? bz : 0), vz = !0 === (null === wz || void 0 === wz ? void 0 : wz.baf2BatFormed), xz = null !== (nz = null === wz || void 0 === wz ? void 0 : wz.baf2BatStored) && void 0 !== nz ? nz : 0, Jz = Math.max(1, null !== (iz = null === wz || void 0 === wz ? void 0 : wz.baf2BatIslandCap) && void 0 !== iz ? iz : 1), Az = Math.min(100, 100 * xz / Jz), Tz = null === wz || void 0 === wz ? void 0 : wz.baf2BatNetPerS, Lz = function(zz, uz, bz) {
        return bz > 0 && uz >= bz ? "full" : void 0 !== zz && zz >= .05 ? "charging" : void 0 !== zz && zz <= -.05 && uz > 0 ? "draining" : "steady"
      }(Tz, xz, null !== (lz = null === wz || void 0 === wz ? void 0 : wz.baf2BatIslandCap) && void 0 !== lz ? lz : 0), Pz = null !== (Mz = null === wz || void 0 === wz ? void 0 : wz.baf2BatMadePerS) && void 0 !== Mz ? Mz : 0, Gz = null !== (tz = null === wz || void 0 === wz ? void 0 : wz.baf2BatUsedPerS) && void 0 !== tz ? tz : 0;
      let az, Vz = {},
        mz = "info";
      if (wz)
        if (vz) "charging" === Lz ? (az = `${gd}batLine_charging`, Vz = {
          time: vi(pz, (Jz - xz) / Math.max(.05, null !== Tz && void 0 !== Tz ? Tz : 0))
        }, mz = "ok") : "draining" === Lz ? (az = `${gd}batLine_draining`, Vz = {
          time: vi(pz, xz / Math.max(.05, -(null !== Tz && void 0 !== Tz ? Tz : 0)))
        }, mz = "warn") : az = "full" === Lz ? `${gd}batLine_full` : xz <= 0 && Gz > 0 ? `${gd}batLine_empty` : `${gd}batLine_steady`;
        else {
          var qz;
          const zz = Ld({
            left: wz.baf2BatNeed.reduce(((zz, uz) => {
              let [, bz] = uz;
              return zz + bz
            }), 0),
            bad: wz.baf2BatBad,
            rods: 1,
            canFill: !0 === wz.baf2BatCanFill,
            melted: !1
          });
          az = zz.key, Vz = {
            count: String(null !== (qz = zz.params.count) && void 0 !== qz ? qz : 0)
          }, mz = zz.tone
        }
      else az = `${gd}batLine_steady`;
      const hz = Math.max(Pz, Gz, 1);
      return (0, Ti.jsx)(xl.d, {
        close: Oz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Ti.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Ti.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Ti.jsx)(Gn.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Ti.jsxs)("div", {
                children: [(0, Ti.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: pz(`${gd}batTitle`)
                }), wz && (0, Ti.jsxs)("p", {
                  className: xn()("Baf2RxSubtitle", {
                    good: vz && "charging" === Lz,
                    warn: vz && "draining" === Lz
                  }),
                  children: [sz, "\xd7", rz, "\xd7", oz, " \xb7 ", pz(vz ? `${gd}batState_${Lz}` : `${gd}rxSubPlanShort`)]
                })]
              })]
            }), (0, Ti.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [wz && !Xz && (0, Ti.jsx)(dd, {
                kind: "battery",
                cap: vz ? Nz : void 0,
                busy: null === Fz || void 0 === Fz ? void 0 : Fz.busy.has("apart"),
                apart: () => {
                  Hz.tap("apart", (() => {
                    fz("apart")
                  }))
                }
              }), (0, Ti.jsx)(Jl.m, {
                onClick: Oz
              })]
            })]
          }), Fz && wz && (0, Ti.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Ti.jsxs)("div", {
              className: xn()("Baf2RxFlow Baf2BatFlow", {
                Plan: !vz
              }),
              children: [(0, Ti.jsx)(Bp, {
                kind: "Power",
                label: pz(`${gd}batMade`),
                number: vz ? `\u26a1 ${mt(Pz)}/s` : "\u2014",
                note: pz(`${gd}batMadeNote`),
                share: vz ? Pz / hz : void 0,
                onExplain: () => {
                  Kz(`${gd}batWhy_made`)
                }
              }), (0, Ti.jsx)(Cp, {
                kind: "Power",
                step: vz ? xd(Pz, hz) : 0,
                planned: !vz
              }), (0, Ti.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  Kz(`${gd}batWhy_store`)
                },
                children: [(0, Ti.jsx)(Yp, {
                  max: 100,
                  bands: [{
                    upTo: vz ? Az : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Ti.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Ti.jsx)("b", {
                    className: "Baf2BatStored",
                    children: vz ? pz(`${gd}batStoredOf`, {
                      amount: mt(xz),
                      cap: mt(wz.baf2BatIslandCap)
                    }) : pz(`${gd}batWillHold`, {
                      cap: Nz
                    })
                  }), (0, Ti.jsx)("span", {
                    children: pz(`${gd}batAdds`, {
                      cap: Nz
                    })
                  }), vz && (0, Ti.jsx)("small", {
                    children: pz(`${gd}batBreakNote`, {
                      cap: Nz
                    })
                  })]
                })]
              }), (0, Ti.jsx)(Cp, {
                kind: "Power",
                step: vz ? xd(Gz, hz) : 0,
                planned: !vz
              }), (0, Ti.jsx)(Bp, {
                kind: "Power",
                label: pz(`${gd}batUsed`),
                number: vz ? `\u26a1 ${mt(Gz)}/s` : "\u2014",
                note: pz(`${gd}batUsedNote`),
                share: vz ? Gz / hz : void 0,
                onExplain: () => {
                  Kz(`${gd}batWhy_used`)
                }
              })]
            }), (0, Ti.jsx)(zd, {
              text: pz(az, Vz),
              tone: mz,
              explained: Zz
            }), Xz ? (0, Ti.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: pz(`${gd}rxNotYours`)
            }) : !vz && (0, Ti.jsxs)(Ti.Fragment, {
              children: [(0, Ti.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Ti.jsx)(Rd, {
                  kind: "battery",
                  dims: Fz.dims,
                  cap: wz.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: zz => {
                    Hz.resize(zz)
                  }
                }), (0, Ti.jsx)(Kd, {
                  on: Fz.guide,
                  label: pz(`${gd}rxGuide`),
                  toggle: () => {
                    Hz.toggleGuide()
                  }
                }), wz.baf2BatCanFill && (0, Ti.jsx)(Jl.q, {
                  disabled: !Jt("battery", wz.baf2BatNeed) || Fz.busy.has("fill"),
                  onClick: () => {
                    Hz.tap("fill", (() => {
                      fz("fill")
                    }))
                  },
                  children: pz(`${gd}rxFill`)
                })]
              }), (0, Ti.jsx)(cd, {
                need: wz.baf2BatNeed,
                kind: "battery",
                explain: Kz
              })]
            })]
          })]
        })
      })
    }
    const yd = "buildAFactory2Game:",
      Dd = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Qd(zz, uz) {
      return zz === it ? null : uz ? "#4a4440" : zz < Mt ? Dd[zz - lt] : zz === Mt ? "#3fd0f0" : zz === tt ? "#2c3e4c" : "#55585e"
    }

    function Wd(zz) {
      let {
        inner: uz,
        looks: bz,
        layer: Ez,
        setLayer: nz,
        glow: iz,
        melted: lz,
        explain: Mz
      } = zz;
      const {
        t: tz
      } = (0, Ln.F)(), [Hz, Oz, pz] = uz, dz = Math.max(0, Math.min(Oz - 1, Ez)), Fz = [];
      for (let Rz = 0; Rz < pz; Rz++)
        for (let zz = 0; zz < Hz; zz++) {
          var Zz;
          const uz = null !== (Zz = bz[(dz * pz + Rz) * Hz + zz]) && void 0 !== Zz ? Zz : it,
            Ez = Qd(uz, lz),
            nz = uz >= lt && uz < Mt;
          Fz.push(null === Ez ? (0, Ti.jsx)("circle", {
            cx: zz + .5,
            cy: Rz + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${zz},${Rz}`) : (0, Ti.jsx)("rect", {
            x: zz + .06,
            y: Rz + .06,
            width: .88,
            height: .88,
            fill: Ez,
            opacity: nz && !lz ? .5 + .5 * iz : 1,
            onClick: zz => {
              zz.stopPropagation();
              const bz = Gd(uz);
              Mz(bz.key, bz.params)
            }
          }, `${zz},${Rz}`))
        }
      return (0, Ti.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Ti.jsx)("svg", {
          className: xn()("Baf2RxMapGrid", {
            Melted: lz
          }),
          viewBox: `0 0 ${Math.max(1,Hz)} ${Math.max(1,pz)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": tz(`${yd}rxWhy_core`),
          onClick: () => {
            Mz(`${yd}rxWhy_core`, {})
          },
          children: Fz
        }), Oz > 1 && (0, Ti.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Ti.jsx)("button", {
            type: "button",
            "aria-label": tz(`${yd}rxLayerDown`),
            disabled: dz <= 0,
            onClick: () => {
              nz(dz - 1)
            },
            children: "\u25bc"
          }), (0, Ti.jsxs)("span", {
            children: [(0, Ti.jsx)("span", {
              className: "HideNarrow",
              children: tz(`${yd}rxLayer`, {
                n: String(dz + 1),
                of: String(Oz)
              })
            }), (0, Ti.jsx)("span", {
              className: "ShowNarrow",
              children: tz(`${yd}rxLayerShort`, {
                n: String(dz + 1),
                of: String(Oz)
              })
            })]
          }), (0, Ti.jsx)("button", {
            type: "button",
            "aria-label": tz(`${yd}rxLayerUp`),
            disabled: dz >= Oz - 1,
            onClick: () => {
              nz(dz + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const ed = "buildAFactory2Game:",
      jd = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: BM,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: st,
        kind: "red"
      }],
      Id = [50, BM, 100];

    function Bd(zz) {
      let {
        stats: uz,
        t: bz,
        explain: Ez
      } = zz;
      const nz = pt(uz),
        iz = Math.max(1, uz.fuelHeat, uz.cooling, uz.size),
        lz = [
          ["fuel", `${ed}rxBarRods`, uz.fuelHeat],
          ["cooling", `${ed}rxBarCooling`, uz.cooling],
          ["size", `${ed}rxBarSize`, uz.size]
        ];
      return (0, Ti.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Ez(`${ed}rxWhy_bars`)
        },
        children: [(0, Ti.jsx)("span", {
          className: "Baf2RxMostLine",
          children: bz(`${ed}rxMost`, {
            amount: mt(Math.min(uz.fuelHeat, uz.cooling, uz.size))
          })
        }), (0, Ti.jsx)("span", {
          className: "Baf2RxMostBars",
          children: lz.map((zz => {
            let [uz, Ez, lz] = zz;
            return (0, Ti.jsxs)("span", {
              className: xn()("Baf2RxMostBar", uz, {
                Low: uz === nz
              }),
              children: [(0, Ti.jsx)("small", {
                children: bz(Ez)
              }), (0, Ti.jsx)("i", {
                children: (0, Ti.jsx)("b", {
                  style: {
                    width: 100 * lz / iz + "%"
                  }
                })
              })]
            }, uz)
          }))
        })]
      })
    }

    function Cd(zz) {
      var uz;
      let {
        view: bz,
        heat: nz,
        settle: iz,
        settleLine: lz,
        settleBad: Mz,
        explain: tz
      } = zz;
      const {
        t: Hz
      } = (0, Ln.F)(), {
        status: Oz
      } = bz, pz = Oz.baf2RxAt.join(","), [dz, Fz] = (0, Ez.useState)((() => Pd(bz.inner)));
      (0, Ez.useEffect)((() => {
        Fz(Pd(bz.inner))
      }), [pz, bz.inner[1]]);
      const Zz = null !== (uz = bz.plan) && void 0 !== uz ? uz : ot(Oz),
        Rz = bz.plan ? bz.plan.powerPerUnit : Oz.baf2RxStats[8],
        Kz = null === nz ? null : "alarm" === (wz = ft(Oz)) ? "red" : "hot" === wz ? "hot" : "warm" === wz ? "warm" : "cold";
      var wz;
      const Xz = !Oz.baf2RxFormed && function(zz, uz) {
          return 0 !== (zz.baf2RxFlags & uz)
        }(Oz, Zu),
        fz = Oz.baf2RxDamage,
        sz = Oz.baf2RxDamageTrend;
      return (0, Ti.jsxs)("div", {
        className: xn()("Baf2RxCore", null !== Kz && void 0 !== Kz ? Kz : "plan"),
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Ti.jsx)(Wd, {
            inner: bz.inner,
            looks: bz.looks,
            layer: dz,
            setLayer: Fz,
            glow: Oz.baf2RxFormed ? Oz.baf2RxThrottle / 100 : 1,
            melted: Xz,
            explain: tz
          }), (0, Ti.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              tz(`${ed}rxWhy_heat`)
            },
            children: [null !== nz ? (0, Ti.jsxs)(Ti.Fragment, {
              children: [(0, Ti.jsx)("b", {
                children: Hz(`${ed}rxHeatPct`, {
                  pct: String(nz)
                })
              }), (0, Ti.jsx)("span", {
                className: xn()("Baf2RxBand", Kz),
                children: Hz(`${ed}rxBand_${Kz}`)
              })]
            }) : (0, Ti.jsx)("b", {
              children: Hz(`${ed}rxHeat`)
            }), null !== lz && (0, Ti.jsx)("span", {
              className: xn()("Baf2RxSettle", {
                Bad: Mz
              }),
              children: lz
            }), fz >= 1 && (0, Ti.jsxs)("span", {
              className: xn()("Baf2RxDamage", sz),
              children: [Hz(`${ed}rxDamageLine`, {
                pct: String(fz)
              }), " \xb7 ", Hz(`${ed}rxDamage_${sz}`), (0, Ti.jsx)("i", {
                children: (0, Ti.jsx)("b", {
                  style: {
                    width: `${Math.min(100,fz)}%`
                  }
                })
              })]
            })]
          }), (0, Ti.jsx)(Yp, {
            max: st,
            bands: jd,
            ticks: Id,
            now: nz,
            settle: iz,
            settleTone: Mz ? "bad" : null,
            onExplain: () => {
              tz(`${ed}rxWhy_heat`)
            }
          })]
        }), (0, Ti.jsx)(Bd, {
          stats: Zz,
          t: Hz,
          explain: tz
        }), Rz > 0 && (0, Ti.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            tz(`${ed}rxWhy_perPellet`)
          },
          children: Hz(`${ed}rxPerPellet`, {
            amount: mt(Rz)
          })
        })]
      })
    }

    function Yd(zz, uz) {
      var bz;
      if (!zz.baf2RxStore) return {
        note: uz(`${ed}rxUpTo`, {
          amount: mt(zz.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Ez, nz] = zz.baf2RxStore, iz = nz > 0 ? Ez / nz : 0, lz = String(Math.floor(100 * iz)), Mz = null !== (bz = zz.baf2RxStoreNetPerS) && void 0 !== bz ? bz : 0, tz = function(zz) {
        var uz, bz;
        const [Ez, nz] = null !== (uz = zz.baf2RxStore) && void 0 !== uz ? uz : [0, 0], iz = null !== (bz = zz.baf2RxStoreNetPerS) && void 0 !== bz ? bz : 0;
        return nz > 0 && Ez >= nz - 1 ? "running" === zz.baf2RxState ? `${wd}rxStoreFull` : `${wd}rxStoreFullOnly` : iz > .05 ? `${wd}rxStoreLine` : iz < -.05 ? "running" === zz.baf2RxState ? `${wd}rxStoreUsesMore` : `${wd}rxStoreDraining` : `${wd}rxStorePct`
      }(zz);
      return {
        note: uz(tz, tz === `${ed}rxStoreLine` ? {
          pct: lz,
          time: vi(uz, (nz - Ez) / Mz)
        } : {
          pct: lz
        }),
        share: iz
      }
    }

    function kd(zz) {
      let {
        view: uz,
        explain: bz,
        preview: Ez
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)(), {
        status: iz
      } = uz, lz = ut(Et(...uz.dims)), Mz = vd(iz), tz = Math.min(Math.round(iz.baf2RxFuel), lz.fuel), Hz = "running" === iz.baf2RxState, Oz = Hz ? xd(iz.baf2RxOut, iz.baf2RxMaxNow) : 0, pz = function(zz, uz, bz) {
        const Ez = rd(zz),
          nz = "cryo" === Ez.hF,
          iz = bz ? bz.coolantSecs : Ez.pct >= 100 && zz.baf2RxOut >= 1 ? Nd(zz, zz.baf2RxThrottle).coolantSecs : null;
        let lz, Mz = !1;
        if (Ez.pct < 100) {
          const bz = 1 === Ez.makersShort,
            iz = !nz && zz.baf2RxCryoOpen ? "OrCryo" : "";
          lz = Ez.makersShort > 0 ? uz(nz ? `${ed}rxCryoAddMixer${bz?"":"s"}` : `${ed}rxWaterAddCondenser${bz?"":"s"}${iz}`, {
            count: String(Ez.makersShort)
          }) : uz(`${ed}rxWaterNeeds`, {
            rate: Zd(Ez.needPerS)
          })
        } else if (null !== iz) lz = uz(`${ed}rxWaterRunsOut`, {
          time: vi(uz, iz)
        });
        else if (Ez.waterBeside > 0) lz = uz(`${ed}rxCryoPlusWater`, {
          rate: Zd(Ez.waterBeside)
        });
        else {
          const zz = function(zz) {
            return zz.inPerS <= 0 ? "rxWaterNoSupply" : zz.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Ez);
          Mz = "rxWaterNoSupply" === zz, lz = uz(`${ed}${zz}`, {
            amount: mt(Ez.stored)
          })
        }
        return {
          kind: nz ? "Cryo" : "Water",
          label: uz(nz ? `${ed}rxCryo` : `${ed}rxWater`),
          number: `${Zd(Ez.usePerS)}/s`,
          preview: bz ? `${Zd(bz.coolPerS)}/s` : null,
          note: lz,
          tone: "noWater" === zz.baf2RxState ? "danger" : Mz ? "warn" : (tz = Ez.pct, Hz = iz, tz < 100 ? "danger" : null === Hz ? null : Hz < 300 ? "danger" : "warn"),
          share: Ez.pct / 100,
          why: nz ? `${ed}rxWhy_cryo` : `${ed}rxWhy_water`,
          short: Ez.pct < 100
        };
        var tz, Hz
      }(iz, nz, Ez), dz = At(iz, lz.waste, Mz), Fz = Yd(iz, nz), Zz = Nd(iz, iz.baf2RxTarget), Rz = Hz && Math.abs(Zz.settle - iz.baf2RxHeat) >= 3, Kz = Ez ? Ez.pelletsPerMin / 60 : null;
      return (0, Ti.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ti.jsx)(Bp, {
            kind: "Fuel",
            label: nz(`${ed}rxFuel`),
            number: String(tz),
            preview: null !== Kz && Kz > 0 && iz.baf2RxFuel > 0 ? vi(nz, iz.baf2RxFuel / Kz) : null,
            note: iz.baf2RxFuel <= 0 ? nz(`${ed}rxFuelEmpty`) : Mz > 0 ? nz(`${ed}rxFuelLeft`, {
              time: vi(nz, iz.baf2RxFuel / Mz)
            }) : nz(1 === tz ? `${ed}rxFuelPellet` : `${ed}rxFuelPellets`),
            tone: "noFuel" === iz.baf2RxState ? "danger" : iz.baf2RxFuel < 2 ? "warn" : null,
            share: iz.baf2RxFuel / lz.fuel,
            onExplain: () => {
              bz(`${ed}rxWhy_fuel`)
            }
          }), (0, Ti.jsx)(Bp, {
            kind: pz.kind,
            label: pz.label,
            number: pz.number,
            preview: pz.preview,
            note: pz.note,
            tone: pz.tone,
            share: pz.share,
            onExplain: () => {
              bz(pz.why)
            }
          })]
        }), (0, Ti.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ti.jsx)(Cp, {
            kind: "Fuel",
            step: Oz,
            short: "noFuel" === iz.baf2RxState
          }), (0, Ti.jsx)(Cp, {
            kind: pz.kind,
            step: Oz,
            short: pz.short || "noWater" === iz.baf2RxState
          })]
        }), (0, Ti.jsx)(Cd, {
          view: uz,
          heat: iz.baf2RxHeat,
          settle: Math.min(st, Zz.settle),
          settleLine: Rz ? nz(`${ed}rxHeatSettles`, {
            pct: String(Math.round(Zz.settle)),
            time: vi(nz, Zz.settleS)
          }) : null,
          settleBad: Zz.settle > 100,
          explain: bz
        }), (0, Ti.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ti.jsx)(Cp, {
            kind: "Power",
            step: Oz
          }), (0, Ti.jsx)(Cp, {
            kind: "Waste",
            step: Hz && iz.baf2RxFuel - iz.baf2RxPu > 0 ? Oz : 0,
            short: dz.full
          })]
        }), (0, Ti.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ti.jsx)(Bp, {
            kind: "Power",
            label: nz(`${ed}rxPowerOut`),
            number: `\u26a1 ${mt(iz.baf2RxOut)}/s`,
            preview: Ez ? mt(Ez.out) : null,
            note: Fz.note,
            share: Fz.share,
            onExplain: () => {
              bz(`${ed}rxWhy_power`)
            }
          }), (0, Ti.jsx)(Bp, {
            kind: "Waste",
            label: nz(`${ed}rxWaste`),
            number: `${Math.floor(iz.baf2RxWaste)}/${lz.waste}`,
            note: dz.full ? nz(`${ed}rxWasteFull`) : null !== dz.fullInS ? nz(`${ed}rxWasteFullIn`, {
              time: vi(nz, dz.fullInS)
            }) : nz(`${ed}rxWasteSpent`),
            tone: "wasteFull" === iz.baf2RxState ? "danger" : dz.full ? "warn" : null,
            share: iz.baf2RxWaste / lz.waste,
            onExplain: () => {
              bz(`${ed}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function zF(zz) {
      let {
        view: uz,
        explain: bz
      } = zz;
      const {
        t: Ez
      } = (0, Ln.F)(), nz = uz.plan;
      if (!nz) return null;
      const iz = nz.fuelHeat <= 0 ? null : nz.cooling > 0 ? Math.min(st, 100 * nz.fuelHeat / nz.cooling) : st,
        lz = Ez(`${ed}rxPlanAtFull`);
      return (0, Ti.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Ti.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ti.jsx)(Bp, {
            kind: "Fuel",
            label: Ez(`${ed}rxFuel`),
            number: Ez(`${ed}rxPlanPerMin`, {
              amount: qt(nz.pelletsPerMin)
            }),
            note: Ez(`${ed}rxPlanPellets`),
            onExplain: () => {
              bz(`${ed}rxWhy_fuel`)
            }
          }), (0, Ti.jsx)(Bp, {
            kind: "Water",
            label: Ez(`${ed}rxWater`),
            number: `${Zd(nz.waterPerS)}/s`,
            note: uz.status.baf2RxCryoOpen && nz.waterPerS > 0 ? Ez(`${ed}rxPlanOrCryo`, {
              rate: Zd(Kt(nz, Yz.h) * Yz.n)
            }) : lz,
            onExplain: () => {
              bz(`${ed}rxWhy_water`)
            }
          })]
        }), (0, Ti.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ti.jsx)(Cp, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Ti.jsx)(Cp, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Ti.jsx)(Cd, {
          view: uz,
          heat: null,
          settle: iz,
          settleLine: null === iz ? null : Ez(`${ed}rxPlanHeat`, {
            pct: String(Math.round(iz))
          }),
          settleBad: null !== iz && iz > 100,
          explain: bz
        }), (0, Ti.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ti.jsx)(Cp, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Ti.jsx)(Cp, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Ti.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ti.jsx)(Bp, {
            kind: "Power",
            label: Ez(`${ed}rxPowerOut`),
            number: `\u26a1 ${mt(nz.max)}/s`,
            note: lz,
            onExplain: () => {
              bz(`${ed}rxWhy_power`)
            }
          }), (0, Ti.jsx)(Bp, {
            kind: "Waste",
            label: Ez(`${ed}rxWaste`),
            number: Ez(`${ed}rxPlanPerMin`, {
              amount: qt(nz.pelletsPerMin)
            }),
            note: Ez(`${ed}rxWasteSpent`),
            onExplain: () => {
              bz(`${ed}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const uF = "buildAFactory2Game:",
      bF = {
        key: `${uF}rxWaiting`,
        params: {},
        tone: "info"
      };

    function EF(zz, uz) {
      return 0 !== (zz.baf2RxFlags & uz)
    }

    function nF(zz) {
      var uz, bz;
      let {
        store: nz,
        close: iz
      } = zz;
      const {
        t: lz
      } = (0, Ln.F)(), Mz = pd(nz), {
        explained: tz,
        hinting: Hz,
        explain: Oz,
        explainOnce: pz
      } = kp("baf2RxExplained"), dz = (0, Ez.useCallback)(((zz, uz) => {
        Oz(lz(zz, uz))
      }), [Oz, lz]), Fz = (0, Ez.useCallback)(((zz, uz) => {
        pz(zz, lz(zz, uz))
      }), [pz, lz]), [Zz, Rz] = (0, Ez.useState)(!1), [Kz, wz] = (0, Ez.useState)(!1), Xz = null === Mz || void 0 === Mz ? void 0 : Mz.status, fz = null === Xz || void 0 === Xz ? void 0 : Xz.baf2RxAt.join(","), sz = !0 === (null === Xz || void 0 === Xz ? void 0 : Xz.baf2RxFormed);
      (0, Ez.useEffect)((() => {
        wz(!1), Rz(!1)
      }), [fz, sz]), (0, Ez.useEffect)((() => (nz.opened(), () => {
        nz.closed()
      })), [nz]);
      const rz = void 0 !== Xz && EF(Xz, wu),
        oz = Xz ? sz ? ft(Xz) : null !== Mz && void 0 !== Mz && Mz.plan ? function(zz, uz) {
          if (zz <= 0) return "off";
          if (uz <= 0) return "alarm";
          const bz = 100 * zz / uz;
          return bz < 50 ? "calm" : bz < dt ? "warm" : bz <= 100 ? "hot" : "alarm"
        }(Mz.plan.fuelHeat, Mz.plan.cooling) : "off" : "off",
        Nz = Xz ? rt(Xz) : null,
        vz = Mz ? Mz.waiting ? bF : sz ? Td(Mz.status) : function(zz) {
          var uz, bz;
          const {
            status: Ez
          } = zz;
          return Ld({
            left: Ez.baf2RxNeed.reduce(((zz, uz) => {
              let [, bz] = uz;
              return zz + bz
            }), 0),
            bad: Ez.baf2RxBad,
            rods: null !== (uz = null === (bz = zz.plan) || void 0 === bz ? void 0 : bz.rods) && void 0 !== uz ? uz : 0,
            canFill: EF(Ez, Ru),
            melted: EF(Ez, Zu),
            idle: zz.looks.reduce(((zz, uz) => zz + (uz === tt ? 1 : 0)), 0)
          })
        }(Mz) : null,
        xz = Hz && null !== vz && ("ok" === vz.tone || "info" === vz.tone),
        Jz = Xz ? function(zz) {
          const uz = 0 !== (zz.baf2RxFlags & du),
            bz = zz.baf2RxHeat < YM;
          return 0 !== (zz.baf2RxFlags & Zu) || bz && (uz || !zz.baf2RxFormed) ? null : zz.baf2RxFormed && !uz ? {
            key: `${Xt}rxApartScram`,
            params: {}
          } : {
            key: `${Xt}rxApartCooling`,
            params: {
              pct: String(YM)
            }
          }
        }(Xz) : null,
        [Az, Tz, Lz] = null !== (uz = null === Mz || void 0 === Mz ? void 0 : Mz.dims) && void 0 !== uz ? uz : [0, 0, 0],
        Pz = `${Az}\xd7${Tz}\xd7${Lz}`;
      return (0, Ti.jsx)(xl.d, {
        close: iz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Ti.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Ti.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ti.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Ti.jsx)(Fd, {
                mood: oz
              }), (0, Ti.jsxs)("div", {
                children: [(0, Ti.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: lz(`${uF}rxTitle`)
                }), Mz && (0, Ti.jsxs)("p", {
                  className: xn()("Baf2RxSubtitle", sz && (null === Nz || void 0 === Nz ? void 0 : Nz.tone)),
                  children: [sz && !rz ? (0, Ti.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": lz(`${uF}rxChangeSize`),
                    onClick: () => {
                      if (!Xz) return;
                      const zz = EF(Xz, du);
                      var uz;
                      (uz = {
                        scram: zz,
                        heat: Xz.baf2RxHeat
                      }).scram && uz.heat < YM ? Rz(!0) : dz(zz ? `${uF}rxResizeCooling` : `${uF}rxResizeHot`, {
                        pct: String(YM)
                      })
                    },
                    children: [Pz, " \u270e"]
                  }) : Pz, " \xb7 ", lz(sz ? null !== (bz = null === Nz || void 0 === Nz ? void 0 : Nz.label) && void 0 !== bz ? bz : `${uF}rxState_running` : `${uF}rxSubPlanShort`)]
                })]
              })]
            }), (0, Ti.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Mz && !rz && (0, Ti.jsx)(dd, {
                kind: "reactor",
                busy: Mz.busy.has("apart"),
                whyNot: Jz ? () => {
                  dz(Jz.key, Jz.params)
                } : null,
                apart: () => {
                  nz.tap("apart", (() => {
                    nz.send("apart")
                  }))
                }
              }), (0, Ti.jsx)(Jl.m, {
                onClick: iz
              })]
            })]
          }), Mz && vz && (0, Ti.jsxs)("div", {
            className: "Baf2RxBody",
            children: [sz ? (0, Ti.jsx)(kd, {
              view: Mz,
              explain: dz,
              preview: od(Mz.status)
            }) : (0, Ti.jsx)(zF, {
              view: Mz,
              explain: dz
            }), (0, Ti.jsx)(zd, {
              text: xz ? `${Jd(lz,vz)} ${lz(`${uF}rxTapHint`)}` : Jd(lz, vz),
              tone: vz.tone,
              explained: tz
            }), rz ? (0, Ti.jsxs)(Ti.Fragment, {
              children: [(0, Ti.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: lz(`${uF}rxNotYours`)
              }), (0, Ti.jsx)(Md, {
                status: Mz.status,
                store: nz,
                readOnly: !0
              })]
            }) : sz && !Kz ? (0, Ti.jsxs)(Ti.Fragment, {
              children: [(0, Ti.jsx)(hd, {
                view: Mz,
                store: nz,
                explain: dz,
                explainOnce: Fz
              }), void 0 !== Mz.status.baf2RxLayout && Ed(Mz.status) && (0, Ti.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Ti.jsx)(Md, {
                  status: Mz.status,
                  store: nz,
                  readOnly: !1,
                  bare: !0
                }), (0, Ti.jsx)(ld, {
                  status: Mz.status,
                  store: nz,
                  busy: Mz.busy.has("fill")
                })]
              })]
            }) : (0, Ti.jsxs)(Ti.Fragment, {
              children: [(0, Ti.jsx)(Ud, {
                view: Mz,
                store: nz,
                keepSize: sz ? () => {
                  wz(!1)
                } : void 0
              }), vt(Mz.dims, Mz.status.baf2RxDims) && (0, Ti.jsx)(cd, {
                need: Mz.status.baf2RxNeed,
                explain: dz
              }), (0, Ti.jsx)(Md, {
                status: Mz.status,
                store: nz,
                readOnly: !1
              })]
            }), Zz && (0, Ti.jsx)(Od, {
              id: "baf2ResizeTitle",
              title: `${uF}rxResizeConfirmTitle`,
              body: `${uF}rxResizeConfirmBody`,
              yes: `${uF}rxChangeSize`,
              cancel: () => {
                Rz(!1)
              },
              confirm: () => {
                Rz(!1), wz(!0)
              }
            })]
          })]
        })
      })
    }
    class iF {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(zz) {
        this.view = zz;
        for (const uz of this.listeners) uz()
      }
      get() {
        return this.view
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
    }

    function lF(zz) {
      let {
        commands: uz,
        store: bz,
        power: nz,
        water: iz,
        reactor: lz,
        battery: Mz,
        collider: tz,
        terminal: Hz,
        quests: Oz,
        close: pz,
        leave: dz,
        askIslands: Fz,
        showCore: Zz,
        openSocial: Rz
      } = zz;
      const {
        userContext: Kz
      } = (0, UM.c)(), wz = hM.featureFlags.useSocialFeatures && Kz.isLoggedIn(), [Xz, fz] = (0, Ez.useState)((() => bz.get()));
      (0, Ez.useEffect)((() => bz.subscribe((() => {
        fz(bz.get())
      }))), [bz]);
      const sz = "islands" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) ? Xz.backToCore : void 0;
      return (0, Ti.jsxs)(Ql.Provider, {
        value: uz,
        children: ["core" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(Rp, {
          view: Xz.core,
          close: pz,
          askIslands: Fz
        }), "dropMap" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(fp, {
          message: Xz.dropMap,
          quests: Oz,
          close: pz,
          leave: dz
        }), "islands" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(hp, {
          message: Xz.islands,
          arrivedAtMs: Xz.arrivedAtMs,
          close: sz ? () => {
            Zz(sz)
          } : pz,
          leave: dz,
          openSocial: wz ? Rz : null
        }), "quests" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(aO, {
          store: Oz,
          close: pz
        }), "transfer" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(lO, {
          message: Xz.transfer,
          arrivedAtMs: Xz.arrivedAtMs,
          close: pz,
          leave: dz
        }), "power" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(ml, {
          store: nz,
          close: pz
        }), "water" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(fM, {
          store: iz,
          close: pz
        }), "reactor" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(nF, {
          store: lz,
          close: pz
        }), "battery" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(Sd, {
          store: Mz,
          close: pz
        }), "collider" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(rH, {
          store: tz,
          close: pz
        }), "terminal" === (null === Xz || void 0 === Xz ? void 0 : Xz.kind) && (0, Ti.jsx)(Ip, {
          store: Hz,
          close: pz,
          send: zz => {
            uz.send(zz)
          }
        })]
      })
    }
    var MF = bz(37876);

    function tF(zz, uz) {
      return zz.distSq - uz.distSq
    }
    class HF {
      constructor() {
        this.list = [], this.pool = []
      }
      add(zz, uz, bz, Ez) {
        let nz = this.pool[this.list.length];
        nz || (nz = {
          x: 0,
          y: 0,
          distSq: 0,
          element: uz,
          liftRem: bz,
          dot: Ez
        }, this.pool.push(nz)), nz.x = zz.x, nz.y = zz.y, nz.distSq = zz.distSq, nz.element = uz, nz.liftRem = bz, nz.dot = Ez, this.list.push(nz)
      }
    }
    class OF {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = zz, this.sizes = new WeakMap, this.observer = new ResizeObserver((zz => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const uz of zz) {
            const zz = uz.borderBoxSize[0];
            "dot" !== uz.target.dataset.crowded && 0 !== zz.inlineSize && 0 !== zz.blockSize && this.sizes.set(uz.target, {
              width: zz.inlineSize,
              height: zz.blockSize
            })
          }
        })), this.remPx = 16, this.MZ = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.Fs = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.Fs)
      }
      observe(zz) {
        this.observer.observe(zz)
      }
      unobserve(zz) {
        this.observer.unobserve(zz)
      }
      run(zz) {
        const uz = zz.list;
        uz.sort(tF);
        const bz = this.pxPerVw,
          Ez = this.pxPerVh;
        this.MZ.length = 0, this.hud && this.MZ.push(...this.hud.boxes(performance.now()));
        for (const iz of uz) {
          var nz;
          const zz = this.sizes.get(iz.element);
          let uz = "no";
          if (zz && zz.width > 0) {
            const nz = iz.x * bz,
              lz = iz.y * Ez - iz.liftRem * this.remPx;
            this.fit(nz, lz, zz.width, zz.height) || (uz = iz.dot && this.fit(nz, lz, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (nz = iz.element.dataset.crowded) && void 0 !== nz ? nz : "no") !== uz && ("no" === uz ? delete iz.element.dataset.crowded : iz.element.dataset.crowded = uz), "hidden" !== uz && (0, MF.d)(iz.element, iz.x, iz.y)
        }
        uz.length = 0
      }
      fit(zz, uz, bz, Ez) {
        const nz = zz - bz / 2,
          iz = zz + bz / 2,
          lz = uz - Ez,
          Mz = this.MZ;
        for (let tz = 0; tz < Mz.length; tz += 4)
          if (nz < Mz[tz + 1] - 2 && iz > Mz[tz] + 2 && lz < Mz[tz + 3] - 2 && uz > Mz[tz + 2] + 2) return !1;
        return Mz.push(nz, iz, lz, uz), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.Fs)
      }
    }
    const pF = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class dF {
      constructor() {
        this.cards = pF.map((zz => document.getElementsByClassName(zz))), this.watched = pF.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(zz) {
        zz - this.refreshedAt > 1e3 && (this.refreshedAt = zz, this.stale = !0);
        for (let bz = 0; bz < this.cards.length; bz++) {
          var uz;
          const zz = null !== (uz = this.cards[bz][0]) && void 0 !== uz ? uz : null;
          zz !== this.watched[bz] && this.watch(bz, zz)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let zz = 0; zz < this.watched.length; zz++) this.watch(zz, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const zz = this.list;
        zz.length = 0;
        for (const uz of this.watched) {
          if (!uz || uz.closest(".NoRoom")) continue;
          const bz = uz.getBoundingClientRect();
          let Ez = bz.top,
            nz = bz.bottom;
          if (uz === this.watched[0] && this.hud) {
            const zz = this.hud.getBoundingClientRect();
            Ez = Math.max(Ez, zz.top), nz = Math.min(nz, zz.bottom)
          }
          bz.width > 0 && nz > Ez && zz.push(bz.left, bz.right, Ez, nz)
        }
      }
      watch(zz, uz) {
        const bz = this.watched[zz];
        var Ez, nz;
        (bz && this.sizes.unobserve(bz), this.watched[zz] = uz, this.stale = !0, uz && this.sizes.observe(uz), 0 === zz) && (null === (Ez = this.hud) || void 0 === Ez || Ez.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (nz = null === uz || void 0 === uz ? void 0 : uz.closest(".Baf2QuestHud")) && void 0 !== nz ? nz : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const FF = [0, 0, 0],
      ZF = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function RF(zz, uz, bz, Ez, nz, iz) {
      let [lz, Mz, tz] = Ez;
      const Hz = (lz + .5 - bz[0]) ** 2 + (Mz - bz[1]) ** 2 + (tz + .5 - bz[2]) ** 2;
      let Oz = null;
      Hz <= iz ** 2 && (FF[0] = lz + .5, FF[1] = Mz + nz, FF[2] = tz + .5, Oz = uz.projectWorldPosToViewport(FF));
      const pz = null !== Oz && Oz.x > -5 && Oz.x < 105 && Oz.y > -5 && Oz.y < 105;
      return (0, MF.f)(zz, !pz), pz ? (ZF.x = Oz.x, ZF.y = Oz.y, ZF.distSq = Hz, ZF) : null
    }
    class KF {
      constructor(zz) {
        this.onElement = zz, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(zz) {
        const uz = [];
        for (let bz = 0; bz + 4 < zz.length; bz += 5) {
          const Ez = [zz[bz], zz[bz + 1], zz[bz + 2]];
          uz.push({
            key: Ez.join(","),
            pos: Ez,
            status: En[zz[bz + 3]],
            kind: Au[zz[bz + 4]]
          })
        }
        this.markers = uz, this.keys = new Set(uz.map((zz => {
          let {
            key: uz
          } = zz;
          return uz
        }))), this.notify()
      }
      covers(zz) {
        return this.keys.has(zz)
      }
      get() {
        return this.markers
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      bind(zz) {
        let uz = this.refs.get(zz);
        return uz || (uz = uz => {
          const bz = this.elements.get(zz);
          var Ez, nz;
          bz && (null === (Ez = this.onElement) || void 0 === Ez || Ez.call(this, bz, !1));
          uz ? (this.elements.set(zz, uz), null === (nz = this.onElement) || void 0 === nz || nz.call(this, uz, !0)) : (this.elements.delete(zz), this.refs.delete(zz))
        }, this.refs.set(zz, uz)), uz
      }
      onAfterRender(zz, uz, bz) {
        for (const Ez of this.markers) {
          const nz = this.elements.get(Ez.key);
          if (!nz) continue;
          const iz = RF(nz, zz, uz, Ez.pos, 1.05, 24);
          iz && bz.add(iz, nz, .45, !0)
        }
      }
      notify() {
        for (const zz of this.listeners) zz()
      }
    }
    const wF = {
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
    const XF = (0, Ez.memo)((function(zz) {
        let {
          status: uz,
          kind: bz,
          bindRef: Ez
        } = zz;
        const {
          t: nz
        } = (0, Ln.F)(), iz = function(zz, uz) {
          var bz;
          if ("noFuel" === zz) {
            var Ez, nz;
            const zz = null === (Ez = Vu[uz]) || void 0 === Ez || null === (nz = Ez.fuels) || void 0 === nz ? void 0 : nz.find((zz => Eb.includes(zz)));
            return null !== zz && void 0 !== zz ? zz : wF.noFuel
          }
          return void 0 !== (null === (bz = Vu[uz]) || void 0 === bz ? void 0 : bz.cryoMade) ? "noOutlet" === zz ? "Fluid Pipe" : "noInput" === zz ? "Biomass" : wF[zz] : wF[zz]
        }(uz, bz);
        return (0, Ti.jsxs)("div", {
          className: xn()("Baf2StallMarker", uz),
          ref: Ez,
          hidden: !0,
          children: [iz && (0, Ti.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Ti.jsx)(Gn.c, {
              itemName: iz,
              amount: 0
            })
          }), (0, Ti.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === uz ? "?" : "!"
          }), (0, Ti.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: nz(`buildAFactory2Game:stallTag_${uz}`)
          })]
        })
      })),
      fF = (0, Ez.memo)((function(zz) {
        let {
          controller: uz
        } = zz;
        const [bz, nz] = (0, Ez.useState)((() => uz.get()));
        return (0, Ez.useEffect)((() => (nz(uz.get()), uz.subscribe((() => {
          nz(uz.get())
        })))), [uz]), (0, Ti.jsx)("div", {
          className: "Baf2StallMarkers",
          children: bz.map((zz => (0, Ti.jsx)(XF, {
            status: zz.status,
            kind: zz.kind,
            bindRef: uz.bind(zz.key)
          }, zz.key)))
        })
      })),
      sF = Rb.i + 150;
    class rF {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(zz, uz) {
        const bz = uz - zz;
        null === this.offset || bz < this.offset ? this.offset = bz : this.offset = Math.min(bz, this.offset + .02 * (uz - this.sampledAt)), this.sampledAt = uz
      }
      toLocal(zz) {
        var uz;
        return zz + (null !== (uz = this.offset) && void 0 !== uz ? uz : 0) + sF
      }
    }
    var oF = bz(37884);
    const NF = 15 * Math.PI / 180,
      vF = Math.SQRT2,
      xF = [4, 2];

    function JF(zz, uz) {
      const bz = [1 / 0, 1 / 0, 1 / 0],
        Ez = [-1 / 0, -1 / 0, -1 / 0];
      for (const tz of zz)
        for (let zz = 0; zz < 3; zz++) bz[zz] = Math.min(bz[zz], tz[zz]), Ez[zz] = Math.max(Ez[zz], tz[zz]);
      const nz = (bz[0] + Ez[0]) / 2,
        iz = (bz[1] + Ez[1]) / 2,
        lz = (bz[2] + Ez[2]) / 2;
      let Mz = 0;
      for (const tz of zz) Mz = Math.max(Mz, Math.hypot(tz[0] - nz, tz[1] - iz, tz[2] - lz));
      return {
        x: nz,
        y: iz,
        z: lz,
        r: Mz + uz
      }
    }

    function AF(zz, uz, bz) {
      const Ez = uz.x - zz.x,
        nz = uz.y - zz.y,
        iz = uz.z - zz.z,
        lz = Math.sqrt(Ez * Ez + nz * nz + iz * iz);
      if (lz <= uz.r + 8) return 1;
      const Mz = uz.r / lz,
        tz = Math.sqrt(1 - Mz * Mz),
        Hz = tz < -zz.cosHalf,
        Oz = (Ez * zz.dx + nz * zz.dy + iz * zz.dz) / lz;
      if (!Hz && Oz < zz.cosHalf * tz - zz.sinHalf * Mz) return 0;
      const pz = bz * vF * zz.frameMs * zz.pxPerBlock / (lz - uz.r);
      for (let dz = 0; dz < xF.length; dz++)
        if (pz * xF[dz] <= 1) return xF[dz];
      return 1
    }

    function TF(zz, uz) {
      return {
        name: zz,
        at: uz,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const LF = [0, 0, 0];

    function PF(zz, uz, bz) {
      let [, Ez, nz, iz, lz, Mz] = uz;
      const tz = Rb.d * (null !== lz && void 0 !== lz ? lz : 1),
        Hz = [];
      for (let Fz = 0; Fz < Ez.length; Fz += 3) Hz.push([Ez[Fz] + .5, Ez[Fz + 1] + .65, Ez[Fz + 2] + .5]);
      const Oz = [];
      for (let Fz = 0; Fz < Hz.length - 1; Fz++) {
        const [zz, uz] = [Hz[Fz], Hz[Fz + 1]];
        Oz.push([(zz[0] + uz[0]) / 2, (zz[1] + uz[1]) / 2, (zz[2] + uz[2]) / 2])
      }
      const pz = Hz.slice(1, -1),
        dz = new Uint8Array(pz.length);
      for (const Fz of null !== Mz && void 0 !== Mz ? Mz : []) dz[Fz >> 1] |= 1 & Fz ? 2 : 1;
      return {
        island: zz,
        length: pz.length,
        loop: iz,
        cellsPerMs: tz,
        edges: Oz,
        fi: pz,
        bounds: JF([...Oz, ...pz], .3),
        changed: !0,
        culled: !1,
        hide: dz,
        items: nz.map((zz => {
          let [uz, Ez] = zz;
          return TF(uz, (0, Rb.A)(uz, Ez, bz, tz).at)
        }))
      }
    }

    function GF(zz, uz) {
      const {
        items: bz
      } = zz;
      if (0 === bz.length) return;
      const Ez = zz.length / zz.cellsPerMs,
        nz = Math.floor((uz - bz[0].at) / Ez) - 1;
      if (nz > 0)
        for (const iz of bz) iz.at += nz * Ez
    }

    function aF(zz, uz) {
      const bz = Math.min(Math.floor(uz), zz.length - 1),
        Ez = zz.hide[bz];
      return 0 !== Ez && 0 !== (Ez & (uz - bz < .5 ? 1 : 2))
    }

    function VF(zz, uz) {
      const bz = Math.min(Math.floor(uz), zz.length - 1),
        Ez = uz - bz,
        nz = Ez < .5,
        iz = nz ? zz.edges[bz] : zz.fi[bz],
        lz = nz ? zz.fi[bz] : zz.edges[bz + 1],
        Mz = nz ? 2 * Ez : 2 * Ez - 1;
      LF[0] = iz[0] + (lz[0] - iz[0]) * Mz, LF[1] = iz[1] + (lz[1] - iz[1]) * Mz, LF[2] = iz[2] + (lz[2] - iz[2]) * Mz
    }
    const mF = Math.PI / 4;
    class qF {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new rF, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.Fs = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(zz) {
        const uz = performance.now();
        this.clock.sample(zz.baf2BeltLinesAt, uz), this.queue(zz.baf2BeltLinesAt, zz, 0, null, null, 0), this.applyDue(uz)
      }
      onMoves(zz) {
        const uz = performance.now(),
          bz = zz.baf2BeltMovesAt;
        this.clock.sample(bz, uz);
        for (const [Ez, nz, iz, lz] of zz.baf2BeltMoveList) null === nz ? this.queue(bz - iz, null, Ez, null, null, null !== lz && void 0 !== lz ? lz : 0) : this.queue(bz - iz, null, Ez, nz, null !== lz && void 0 !== lz ? lz : null, 0);
        this.applyDue(uz)
      }
      start(zz) {
        this.pool = new oF.c(zz, {
          scale: .3,
          yaw: mF
        }, 64), this.Fs(), window.addEventListener("resize", this.Fs)
      }
      onAfterRender(zz) {
        const {
          pool: uz
        } = this;
        if (!uz) return;
        const bz = performance.now(),
          Ez = bz - this.lastRenderAt;
        this.lastRenderAt = bz, Ez < 100 && (this.frameMs += .1 * (Ez - this.frameMs));
        const nz = bz + this.frameMs;
        this.applyDue(nz);
        const iz = zz.cameraPosition,
          lz = uz.follow(iz);
        this.setView(zz, iz);
        const Mz = this.frame++;
        for (let tz = 0; tz < this.shown.length; tz++) {
          const zz = this.shown[tz],
            bz = AF(this.view, zz.bounds, zz.cellsPerMs),
            Ez = zz.culled && 0 !== bz;
          if (zz.culled = 0 === bz, !lz && !zz.changed && !Ez && (0 === bz || (Mz + tz) % bz !== 0)) continue;
          zz.changed = !1, zz.loop && (GF(zz, nz), (0, Rb.s)(zz.items, zz.length, nz, zz.cellsPerMs));
          let iz = zz.length;
          for (let Mz = 0; Mz < zz.items.length; Mz++) {
            const bz = zz.items[Mz],
              Ez = (0, Rb.B)(bz.at, iz, nz, zz.cellsPerMs);
            if (iz = Ez - Rb.l, aF(zz, Ez)) {
              null === bz.kind || bz.hidden || (bz.kind.hide(bz.slot), bz.hidden = !0);
              continue
            }
            let tz = bz.kind;
            if (null === tz) {
              if (tz = uz.kindOf(bz.name), null === tz) continue;
              bz.kind = tz, bz.slot = tz.take(), bz.hidden = !0, bz.drawn = NaN
            } else if (Ez === bz.drawn && !bz.hidden && !lz) continue;
            VF(zz, Ez), tz.write(bz.slot, LF[0], LF[1], LF[2]), bz.hidden = !1, bz.drawn = Ez
          }
        }
        uz.commit()
      }
      dispose() {
        var zz;
        window.removeEventListener("resize", this.Fs), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (zz = this.pool) || void 0 === zz || zz.dispose(), this.pool = null
      }
      setView(zz, uz) {
        const {
          cameraDir: bz,
          lastDir: Ez
        } = this, nz = zz.cameraDirection;
        for (let Oz = 0; Oz < 3; Oz++) Ez[Oz] = bz[Oz], bz[Oz] = nz[Oz];
        const iz = bz[0] * Ez[0] + bz[1] * Ez[1] + bz[2] * Ez[2],
          lz = Number.isNaN(iz) ? 0 : Math.acos(Math.min(1, Math.max(-1, iz))),
          {
            width: Mz,
            height: tz
          } = this,
          Hz = zz.tanHalfFovX;
        ! function(zz, uz, bz, Ez, nz, iz, lz) {
          let Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          zz.x = uz[0], zz.y = uz[1], zz.z = uz[2], zz.dx = bz[0], zz.dy = bz[1], zz.dz = bz[2];
          const tz = Math.min(Math.PI, Math.atan(Math.sqrt(Ez * Ez + nz * nz)) + NF + Mz);
          zz.cosHalf = Math.cos(tz), zz.sinHalf = Math.sin(tz), zz.pxPerBlock = iz / (2 * nz), zz.frameMs = lz
        }(this.view, uz, bz, Hz, Hz * tz / Mz, tz * window.devicePixelRatio, this.frameMs, lz)
      }
      queue(zz, uz, bz, Ez, nz, iz) {
        const lz = Math.max(this.clock.toLocal(zz), this.lastPendingAt);
        this.lastPendingAt = lz, this.pending.push({
          at: lz,
          lines: uz,
          line: bz,
          name: Ez,
          pos: nz,
          idx: iz
        })
      }
      applyDue(zz) {
        const {
          pending: uz
        } = this;
        for (; this.pendingHead < uz.length && uz[this.pendingHead].at <= zz;) {
          const zz = uz[this.pendingHead++];
          if (zz.lines) this.applyLines(zz.lines, zz.at), zz.lines = null;
          else {
            const uz = this.lines.get(zz.line);
            uz && this.applyMove(uz, zz, zz.at)
          }
        }
        this.pendingHead === uz.length ? (uz.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > uz.length && (uz.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(zz, uz) {
        this.clearIsland(zz.baf2BeltIsland);
        for (const bz of zz.baf2BeltLineList) this.lines.set(bz[0], PF(zz.baf2BeltIsland, bz, uz));
        this.shown = [...this.lines.values()]
      }
      applyMove(zz, uz, bz) {
        let {
          name: Ez,
          pos: nz,
          idx: iz
        } = uz;
        zz.changed = !0, zz.loop && (GF(zz, bz), (0, Rb.s)(zz.items, zz.length, bz, zz.cellsPerMs)), null !== Ez && null !== nz ? (0, Rb.w)(zz.items, zz.length, TF(Ez, bz), nz, bz, zz.cellsPerMs) : null !== Ez ? zz.items.push(TF(Ez, bz)) : zz.items.length > iz && this.release((0, Rb.D)(zz.items, zz.length, bz, zz.cellsPerMs, iz))
      }
      clearIsland(zz) {
        for (const [uz, bz] of this.lines)
          if (bz.island === zz) {
            for (const zz of bz.items) this.release(zz);
            this.lines.delete(uz)
          }
      }
      release(zz) {
        null !== zz.kind && (zz.kind.release(zz.slot), zz.kind = null, zz.slot = -1, zz.hidden = !0, zz.drawn = NaN)
      }
    }
    var hF = bz(36066),
      UF = bz(37896);

    function cF(zz) {
      let {
        depth: uz,
        store: bz,
        t: nz
      } = zz;
      const iz = function(zz) {
        const [uz, bz] = (0, Ez.useState)(zz.lastPlayerY());
        return (0, MO.g)(cn, bz), (0, Ez.useEffect)((() => {
          bz(zz.lastPlayerY())
        }), [zz]), uz
      }(bz);
      if (null === iz) return null;
      const [lz, Mz] = uz, tz = iz > lz ? lz : null !== Mz && iz < Mz ? Mz : null, Hz = {
        y: Ni(iz),
        target: null === tz ? "" : Ni(tz)
      };
      return (0, Ti.jsx)("span", {
        className: xn()("Baf2QuestDepth", {
          Reached: null === tz
        }),
        children: nz(`${pO}${null===tz?"questDepthReached":"questDepth"}`, Hz)
      })
    }

    function gF(zz) {
      let {
        also: uz,
        view: bz,
        t: Ez
      } = zz;
      return (0, Ti.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Ti.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Ti.jsx)("strong", {
            children: Ez(`${pO}questAlsoDownHere`)
          }), (0, Ti.jsx)("span", {
            className: "Baf2QuestChips",
            children: uz.map((zz => {
              let [uz, nz, iz, lz] = zz;
              return (0, Ti.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Ez(`${pO}questAlsoItem`, {
                  item: FO(Ez, bz.itemNames[uz], uz),
                  have: String(nz),
                  need: String(iz)
                }),
                children: [(0, Ti.jsx)(KO, {
                  item: uz
                }), (0, Ti.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${nz}/${iz}`
                }), null !== lz && (0, Ti.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Ez(`${pO}questAlsoDepth`, {
                    y: Ni(lz)
                  })
                })]
              }, uz)
            }))
          })]
        })]
      })
    }
    var SF = bz(3163);

    function yF(zz) {
      let {
        expanded: uz,
        inventoryOpen: bz,
        children: nz
      } = zz;
      const iz = (0, Ez.useRef)(null);
      return (0, Ez.useEffect)((() => {
        const zz = iz.current,
          uz = null === zz || void 0 === zz ? void 0 : zz.closest(".RightElements"),
          Ez = null === zz || void 0 === zz ? void 0 : zz.firstElementChild;
        if (!zz || !uz || !Ez) return;
        return (0, UF.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [uz, Ez], (() => {
          const nz = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === nz.length) return;
          const iz = Math.max(...nz.map((zz => zz.getBoundingClientRect().bottom))),
            lz = uz.getBoundingClientRect(),
            Mz = bz ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (Mz) {
            const uz = parseFloat(getComputedStyle(Ez).marginLeft) + parseFloat(getComputedStyle(Ez).marginRight),
              bz = lz.right - Mz.getBoundingClientRect().right - 8 - uz;
            zz.style.setProperty("--baf2-quest-room", `${bz}px`), zz.classList.toggle("NoRoom", bz < 150)
          } else zz.style.removeProperty("--baf2-quest-room"), zz.classList.remove("NoRoom");
          const tz = iz - lz.top + 8,
            Hz = function(zz, uz, bz) {
              const Ez = uz.getBoundingClientRect(),
                nz = zz.getBoundingClientRect(),
                iz = (0, SF.e)(nz.left, nz.right, Ez.top + bz);
              if (null !== iz && iz < Ez.bottom) return iz - Ez.top;
              return Ez.height - (parseFloat(getComputedStyle(uz).paddingBottom) || 0)
            }(zz, uz, tz) - 8,
            Oz = window.innerHeight / 2 - lz.top,
            {
              top: pz,
              maxHeight: dz
            } = function(zz, uz, bz, Ez, nz) {
              const iz = Math.min(bz, Math.max(0, uz - zz)),
                lz = nz ? zz : Math.max(zz, Math.min(Ez - iz / 2, uz - iz));
              return {
                top: lz,
                maxHeight: Math.max(0, uz - lz)
              }
            }(tz, Hz, function(zz) {
              const uz = zz.firstElementChild,
                bz = uz ? uz.scrollHeight - uz.clientHeight : 0;
              return zz.getBoundingClientRect().height + Math.max(0, bz)
            }(Ez), Oz, Ji());
          zz.style.top = `${pz}px`, zz.style.maxHeight = `${dz}px`
        }))
      }), [bz]), (0, Ti.jsx)("div", {
        ref: iz,
        className: xn()("Baf2QuestHud", {
          Expanded: uz
        }),
        children: nz
      })
    }

    function DF(zz) {
      let {
        amount: uz,
        t: bz
      } = zz;
      return (0, Ti.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Ti.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Ti.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: bz(`${pO}questStepsDone`, {
            amount: String(uz)
          })
        })]
      })
    }

    function QF(zz) {
      let {
        pulse: uz
      } = zz;
      return 0 === uz ? null : (0, Ti.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, uz)
    }

    function WF(zz) {
      var uz;
      let {
        store: bz
      } = zz;
      const nz = (0, MO.h)(Un, bz.get()),
        [iz, lz] = (0, Ez.useState)(!1),
        {
          t: Mz
        } = (0, Ln.F)(),
        tz = function() {
          const [zz, uz] = (0, Ez.useState)(Ji);
          return (0, Ez.useEffect)((() => (uz(Ji()), Ai(uz))), []), zz
        }(),
        {
          openInGameMenuName: Hz,
          openEverythingMenuName: Oz
        } = (0, rn.m)(["openInGameMenuName", "openEverythingMenuName"]),
        pz = "inventory" === Hz && null === Oz,
        dz = null !== Hz && !pz || null !== Oz;
      if (! function(zz) {
          return null !== zz.name || null !== zz.side
        }(nz) || dz || "off" === nz.tutorial) return null;
      const Fz = Wn(nz.rows),
        Zz = Fz.filter((zz => zz.done)).length,
        Rz = function(zz, uz) {
          const bz = In(zz);
          let Ez = 0;
          return zz.filter(((zz, nz) => !!zz.justFinished || !(zz.done || nz < bz || Ez > uz) && (Ez++, !0)))
        }(nz.rows, tz ? 0 : 2),
        Kz = tz ? Rz : function(zz, uz) {
          const bz = uz.filter((zz => !zz.justFinished));
          if (bz.length < 2) return [...uz];
          const Ez = zz.indexOf(bz[0]),
            nz = zz.indexOf(bz[bz.length - 1]),
            iz = new Set(Wn(zz));
          return zz.filter(((zz, bz) => uz.includes(zz) || zz.done && iz.has(zz) && bz > Ez && bz < nz))
        }(nz.rows, Rz),
        wz = iz ? nz.rows : Kz,
        Xz = iz || tz ? [] : function(zz, uz) {
          const bz = new Array(uz.length + 1).fill(0),
            Ez = new Set(Wn(zz));
          let nz = 0;
          for (const iz of zz) nz < uz.length && iz === uz[nz] ? nz++ : iz.done && Ez.has(iz) && bz[nz]++;
          return bz
        }(nz.rows, Kz),
        fz = iz || Kz.length < nz.rows.length || null !== nz.reward,
        sz = Qn(nz),
        rz = sz ? Mz(`${pO}questLineComplete`) : nz.tier ? fO(Mz, nz.tier) : Mz(`${pO}currentQuest`),
        oz = function(zz) {
          var uz, bz;
          if (Qn(zz)) return null;
          const Ez = null === (uz = zz.chapters) || void 0 === uz ? void 0 : uz.find((uz => {
            let [bz] = uz;
            return bz === zz.tier
          }));
          if (!Ez) return null;
          const nz = Ez[1].filter((zz => !zz[4]));
          if (0 === nz.length) return null;
          const iz = null === (bz = zz.name) || void 0 === bz ? void 0 : bz[0],
            lz = zz => nz.findIndex((uz => uz[0] === iz && (!zz || !uz[3]))),
            Mz = lz(!0),
            tz = Mz >= 0 ? Mz : lz(!1);
          if (tz >= 0) return [tz + 1, nz.length];
          const Hz = nz.filter((zz => zz[3])).length;
          return [Math.min(Hz + 1, nz.length), nz.length]
        }(nz);
      return (0, Ti.jsx)(hF.d, {
        placement: "topRight",
        children: (0, Ti.jsx)(yF, {
          expanded: iz,
          inventoryOpen: pz,
          children: (0, Ti.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: dO,
            children: [null !== nz.name && (0, Ti.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Ti.jsx)(QF, {
                pulse: nz.pulse
              }), (0, Ti.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Ti.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [rz, oz && (0, Ti.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": Mz(`${pO}questPlaceLabel`, {
                      n: String(oz[0]),
                      total: String(oz[1])
                    }),
                    children: Mz(`${pO}questPlace`, {
                      n: String(oz[0]),
                      total: String(oz[1])
                    })
                  }), nz.tier && nz.core && !sz && (0, Ti.jsx)(sO, {
                    core: nz.core,
                    t: Mz
                  })]
                })
              }), (0, Ti.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Mz(`${pO}${nz.name[0]}`, ZO(nz.name[1]))
              }), (Fz.length > 1 || fz) && (0, Ti.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Fz.length > 1 && (0, Ti.jsx)(rO, {
                  rows: Fz,
                  t: Mz
                }), fz && (0, Ti.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": iz,
                  onClick: () => {
                    lz(!iz)
                  },
                  children: [(0, Ti.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: Mz(`${pO}questStepsToggle`, {
                      done: String(Zz),
                      total: String(Fz.length)
                    })
                  }), (0, Ti.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: iz ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Ti.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [wz.map(((zz, uz) => {
                  var iz;
                  const lz = zz.current && nz.depth;
                  return (0, Ti.jsxs)(Ez.Fragment, {
                    children: [(null !== (iz = Xz[uz]) && void 0 !== iz ? iz : 0) > 0 && (0, Ti.jsx)(DF, {
                      amount: Xz[uz],
                      t: Mz
                    }), (0, Ti.jsx)(oO, {
                      row: zz,
                      view: nz,
                      t: Mz,
                      extra: lz && (0, Ti.jsx)(cF, {
                        depth: lz,
                        store: bz,
                        t: Mz
                      })
                    })]
                  }, zz.id)
                })), (null !== (uz = Xz[wz.length]) && void 0 !== uz ? uz : 0) > 0 && (0, Ti.jsx)(DF, {
                  amount: Xz[wz.length],
                  t: Mz
                }), nz.also.length > 0 && (0, Ti.jsx)(gF, {
                  also: nz.also,
                  view: nz,
                  t: Mz
                })]
              }), iz && nz.reward && (0, Ti.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [Mz(`${pO}questReward`), (0, Ti.jsx)(KO, {
                  item: nz.reward
                }), FO(Mz, nz.itemNames[nz.reward], nz.reward)]
              })]
            }), nz.side && (0, Ti.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [yn(nz, Date.now()) && (0, Ti.jsx)(QF, {
                pulse: nz.sideCameUpAt
              }), (0, Ti.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: Mz(`${pO}questSide`)
              }), (0, Ti.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Mz(`${pO}${nz.side.name[0]}`, ZO(nz.side.name[1]))
              }), (0, Ti.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Ti.jsx)(oO, {
                  row: nz.side.row,
                  view: nz,
                  t: Mz
                })
              })]
            })]
          })
        })
      })
    }
    const eF = "baf2ToastView";
    class jF {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = zz, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: zz,
          holdMs: uz
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const zz = this.dropCovered();
          zz && this.show(zz.message, zz.holdMs)
        }), 250));
        const bz = this.dropCovered();
        null !== bz && (bz.holdMs > 0 || "baf2ToastCelebrate" === bz.message.baf2ToastStyle) && "baf2ToastCelebrate" !== zz.baf2ToastStyle && this.show(bz.message, bz.holdMs);
        const Ez = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== zz.baf2ToastStyle && Ez > 0) return this.pending = {
          message: zz,
          holdMs: uz
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const zz = this.pending;
          this.pending = null, zz && this.present(zz.message, zz.holdMs)
        }), Ez));
        this.present(zz, uz)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(zz, uz) {
        this.clearTimers(), this.pending = null;
        const bz = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: zz.baf2ToastText,
          style: zz.baf2ToastStyle,
          swapped: bz,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === zz.baf2ToastStyle ? 1500 : uz), this.sK();
        const Ez = Math.min(8e3, Math.max(1e3, zz.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Ez)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.sK(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.sK()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const zz = this.covering;
        return this.covering = null, zz
      }
      sK() {
        qn.k.sK(eF, this.view, !0)
      }
    }
    var IF = bz(79);
    const BF = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function CF(zz) {
      let {
        store: uz
      } = zz;
      const bz = (0, MO.h)(eF, uz.get()),
        {
          openInGameMenuName: Ez,
          openEverythingMenuName: nz
        } = (0, rn.m)(["openInGameMenuName", "openEverythingMenuName"]),
        iz = bz && (0, Ti.jsxs)("div", {
          className: xn()("Baf2Toast", BF[bz.style], {
            Swapped: bz.swapped,
            Leaving: bz.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === bz.style && (0, Ti.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Ti.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Ti.jsx)(an.b, {
              text: bz.text
            })
          })]
        }, bz.id);
      return null !== Ez && null === nz ? (0, IF.createPortal)((0, Ti.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: iz
      }), document.body) : (0, Ti.jsx)(hF.d, {
        children: iz
      })
    }
    const YF = "baf2AreaView";
    class kF {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.yM = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.yM = null
      }
      arrive(zz, uz) {
        uz && function(zz) {
          return "home" === zz.baf2AreaPlace && void 0 !== zz.baf2AreaNameText
        }(zz) ? this.yM = zz : this.show(zz)
      }
      release() {
        const zz = this.yM;
        null !== zz && this.show(zz)
      }
      show(zz) {
        this.clearTimer(), this.yM = null;
        const uz = void 0 === zz.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: zz,
          ms: uz
        }, this.sK(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.sK()
        }), uz)
      }
      dispose() {
        this.clearTimer(), this.yM = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      sK() {
        qn.k.sK(YF, this.view, !0)
      }
    }

    function zZ(zz) {
      var uz;
      let {
        store: bz
      } = zz;
      const {
        t: Ez
      } = (0, Ln.F)(), nz = (0, MO.h)(YF, bz.get());
      if (!nz) return null;
      const {
        area: iz
      } = nz, lz = iz.baf2AreaResetMinutes;
      return (0, Ti.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": iz.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${nz.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Ti.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), iz.baf2AreaHeading && (0, Ti.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Ez(iz.baf2AreaHeading)
        }), (0, Ti.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (uz = iz.baf2AreaNameText) && void 0 !== uz ? uz : Ez(iz.baf2AreaName)
        }), iz.baf2AreaNote && (0, Ti.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Ez(iz.baf2AreaNote)
        }), void 0 !== lz && (0, Ti.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Ez("buildAFactory2Game:areaWildsReset", {
            time: vi(Ez, 60 * lz)
          })
        })]
      }, nz.id)
    }
    const uZ = "baf2GearGauge";
    class bZ {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      Ws(zz) {
        var uz;
        if (this.clearLinger(), null === zz.gearPowerKind) return void this.set(null);
        const bz = "jetpack" === zz.gearPowerKind && (Ez = zz.gearChargeState, nz = zz.gearCharge, "flying" === Ez || "charging" === Ez || "outOfCharge" === Ez || "ceiling" === Ez || "offPlot" === Ez || "noPower" === Ez && nz <= 0);
        var Ez, nz;
        const iz = !0 === (null === (uz = this.view) || void 0 === uz ? void 0 : uz.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          lz = bz || "jetpack" === zz.gearPowerKind && iz;
        this.set({
          gauge: zz,
          jetShown: lz
        }), lz && !bz && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(zz) {
        this.view = zz, qn.k.sK(uZ, zz, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const EZ = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function nZ(zz) {
      let {
        store: uz
      } = zz;
      const bz = (0, MO.h)(uZ, uz.get());
      return bz ? "jetpack" === bz.gauge.gearPowerKind ? (0, Ti.jsx)(iZ, {
        view: bz
      }) : (0, Ti.jsx)(lZ, {
        gauge: bz.gauge
      }) : null
    }

    function iZ(zz) {
      let {
        view: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)(), {
        gauge: Ez
      } = uz, nz = Ez.gearChargeMax > 0 ? Math.max(0, Math.min(1, Ez.gearCharge / Ez.gearChargeMax)) : 0, iz = EZ[Ez.gearChargeState], lz = iz ? bz(iz) : null;
      return (0, Ti.jsxs)("div", {
        className: xn()("Baf2JetArc", {
          Shown: uz.jetShown,
          Low: nz < .2,
          Warm: nz >= .2 && nz < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - nz)
        },
        "aria-hidden": !uz.jetShown,
        children: [(0, Ti.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Ti.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: MZ,
            pathLength: 100
          }), (0, Ti.jsx)("path", {
            className: "Baf2JetArcFill",
            d: MZ,
            pathLength: 100
          })]
        }), (0, Ti.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * nz), "%"]
        }), lz && (0, Ti.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: lz
        })]
      })
    }

    function lZ(zz) {
      let {
        gauge: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)(), Ez = function(zz, uz) {
        switch (uz.gearPowerKind) {
          case "skyPack":
            return zz("buildAFactory2Game:gearSkyPack", {
              charge: uz.gearCharge,
              max: uz.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return zz("buildAFactory2Game:gearIslandDraw", {
              power: Cz(uz.gearIslandPower),
              cost: Cz(uz.gearCostPerUse)
            });
          case "barrier":
            return zz("buildAFactory2Game:gearBarrier", {
              shield: Math.round(uz.gearCharge),
              max: uz.gearChargeMax,
              power: Cz(uz.gearIslandPower)
            });
          default:
            return null
        }
      }(bz, uz);
      return null === Ez ? null : (0, Ti.jsx)(hF.d, {
        children: (0, Ti.jsx)("div", {
          className: xn()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === uz.gearChargeState || "outOfCharge" === uz.gearChargeState
          }),
          role: "status",
          children: Ez
        })
      })
    }
    const MZ = (() => {
      const zz = zz => {
        const uz = zz * Math.PI / 180;
        return `${(40*Math.cos(uz)).toFixed(2)} ${(40*Math.sin(uz)).toFixed(2)}`
      };
      return `M ${zz(160)} A 40 40 0 1 1 ${zz(380)}`
    })();
    class tZ {
      constructor(zz) {
        this.onElement = zz, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      Ws(zz) {
        let uz = zz.baf2LabelsReset || zz.baf2LabelsIsland !== this.island;
        uz && (this.labels.clear(), this.island = zz.baf2LabelsIsland);
        for (const [bz, Ez, nz, iz, lz] of zz.baf2LabelsList) {
          const zz = `${bz},${Ez},${nz}`,
            Mz = this.labels.get(zz);
          null === iz ? uz = this.labels.delete(zz) || uz : Mz && Mz.item === iz && (Mz.count === lz || Mz.count >= 0 && lz >= 0) ? Mz.count !== lz && (Mz.count = lz, this.writeCount(zz, lz)) : (this.labels.set(zz, {
            key: zz,
            pos: [bz, Ez, nz],
            item: iz,
            count: lz
          }), this.writeCount(zz, lz), uz = !0)
        }
        if (this.changes++, uz) {
          this.snapshot = [...this.labels.values()];
          for (const zz of this.listeners) zz()
        }
      }
      bindCount(zz) {
        const uz = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${zz}`;
        let bz = this.countRefs.get(uz);
        return bz || (bz = bz => {
          var Ez, nz;
          bz ? (this.countElements.set(uz, bz), this.writeCount(zz, null !== (Ez = null === (nz = this.labels.get(zz)) || void 0 === nz ? void 0 : nz.count) && void 0 !== Ez ? Ez : -1)) : (this.countElements.delete(uz), this.countRefs.delete(uz))
        }, this.countRefs.set(uz, bz)), bz
      }
      setCountWords(zz) {
        this.countWords = zz;
        for (const [uz, bz] of this.labels) this.writePart(`words|${uz}`, zz(bz.count), bz.count)
      }
      writeCount(zz, uz) {
        this.writePart(`bare|${zz}`, oi(uz), uz), this.countElements.has(`words|${zz}`) && this.writePart(`words|${zz}`, this.countWords(uz), uz)
      }
      writePart(zz, uz, bz) {
        const Ez = this.countElements.get(zz);
        if (!Ez || bz < 0) return;
        const nz = Ez.firstChild;
        nz && 3 === nz.nodeType && !nz.nextSibling ? nz.nodeValue !== uz && (nz.nodeValue = uz) : Ez.textContent !== uz && (Ez.textContent = uz)
      }
      list() {
        return this.snapshot
      }
      at(zz) {
        return this.labels.get(`${zz[0]},${zz[1]},${zz[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      bind(zz) {
        let uz = this.refs.get(zz);
        return uz || (uz = uz => {
          const bz = this.elements.get(zz);
          var Ez, nz;
          bz && (null === (Ez = this.onElement) || void 0 === Ez || Ez.call(this, bz, !1));
          uz ? (this.elements.set(zz, uz), null === (nz = this.onElement) || void 0 === nz || nz.call(this, uz, !0)) : (this.elements.delete(zz), this.refs.delete(zz))
        }, this.refs.set(zz, uz)), uz
      }
      onAfterRender(zz, uz, bz, Ez) {
        for (const nz of this.snapshot) {
          const iz = this.elements.get(nz.key);
          if (!iz) continue;
          if (Ez(nz.key)) {
            (0, MF.f)(iz, !0);
            continue
          }
          const lz = RF(iz, zz, uz, nz.pos, 1.1, 24);
          lz && bz.add(lz, iz, 0, !1)
        }
      }
    }
    const HZ = (0, Ez.memo)((function(zz) {
        let {
          item: uz
        } = zz;
        return (0, Ti.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Ti.jsx)(Gn.c, {
            itemName: uz,
            amount: 0
          })
        })
      })),
      OZ = (0, Ez.memo)((function(zz) {
        let {
          label: uz,
          bindRef: bz,
          countRef: Ez,
          wordsRef: nz
        } = zz;
        return (0, Ti.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: bz,
          hidden: !0,
          children: [(0, Ti.jsx)(HZ, {
            item: uz.item
          }), uz.count >= 0 && (0, Ti.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Ti.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: nz
            }), (0, Ti.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Ez
            })]
          })]
        })
      })),
      pZ = (0, Ez.memo)((function(zz) {
        let {
          store: uz
        } = zz;
        const {
          t: bz
        } = (0, Ln.F)(), [nz, iz] = (0, Ez.useState)((() => uz.list()));
        return (0, Ez.useEffect)((() => (iz(uz.list()), uz.subscribe((() => {
          iz(uz.list())
        })))), [uz]), (0, Ez.useEffect)((() => {
          uz.setCountWords((zz => bz("buildAFactory2Game:labelSiloCount", {
            count: oi(zz)
          })))
        }), [uz, bz]), (0, Ti.jsx)("div", {
          className: "Baf2IslandLabels",
          children: nz.map((zz => -2 === zz.count ? null : (0, Ti.jsx)(OZ, {
            label: zz,
            bindRef: uz.bind(zz.key),
            countRef: uz.bindCount(zz.key),
            wordsRef: uz.bindCount(zz.key, "words")
          }, zz.key)))
        })
      })),
      dZ = {
        read: () => !0,
        write: () => {}
      };

    function FZ(zz) {
      return `${zz[0]},${zz[1]},${zz[2]}`
    }

    function ZZ(zz) {
      let [uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz] = zz;
      const Fz = void 0 === pz || void 0 === dz ? function(zz) {
        return [Math.floor((zz - 1) / 2), 0]
      }(iz) : [pz, dz];
      return {
        kind: 0 === tz ? "reactor" : "battery",
        box: yb([uz, bz, Ez], nz, iz, lz, Mz, Fz),
        formed: 1 === Hz,
        level: Oz
      }
    }
    class RZ {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dZ;
        this.guideSetting = zz, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = zz.read()
      }
      Ws(zz) {
        var uz;
        const bz = new Map;
        for (const Ez of zz.baf2RxPlanList) {
          const zz = ZZ(Ez);
          bz.set(FZ(zz.box.ctrl), zz)
        }
        this.plans = bz, this.layouts = new Map((null !== (uz = zz.baf2RxLayouts) && void 0 !== uz ? uz : []).map((zz => {
          let [uz, bz, Ez, nz] = zz;
          return [FZ([uz, bz, Ez]), nz]
        }))), this.predicted.clear(), zz.baf2RxFormedAt && (this.formed = {
          ctrl: zz.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Ez of [...this.startersOff]) {
          const zz = bz.get(Ez);
          zz && !zz.formed || this.startersOff.delete(Ez)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((zz => this.planByKey(zz)))
      }
      planAt(zz) {
        return this.planByKey(FZ(zz))
      }
      predictSize(zz, uz) {
        this.predicted.set(FZ(zz), uz), this.changed()
      }
      unpredict(zz) {
        this.predicted.delete(FZ(zz)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(zz) {
        var uz;
        const bz = FZ(zz);
        return this.predicted.has(bz) ? null : null !== (uz = this.layouts.get(bz)) && void 0 !== uz ? uz : null
      }
      showsStarter(zz) {
        return !this.startersOff.has(FZ(zz))
      }
      setStarter(zz, uz) {
        const bz = FZ(zz);
        uz ? this.startersOff.delete(bz) : this.startersOff.add(bz), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(zz) {
        this.guide = zz, this.guideSetting.write(zz), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(zz) {
        const uz = this.plans.get(zz);
        if (!uz) return null;
        const bz = this.predicted.get(zz);
        return bz ? {
          ...uz,
          box: Qb(uz.box, uz.kind, bz[0], bz[1], bz[2])
        } : uz
      }
      changed() {
        this.version++;
        for (const zz of this.listeners) zz()
      }
    }
    var KZ = bz(195);
    const wZ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function XZ(zz, uz, bz, Ez) {
      const nz = zz.length / 3;
      for (let iz = 0; iz < wZ.length / 3; iz++) zz.push(wZ[3 * iz] * Ez[0] / 2 + bz[0], wZ[3 * iz + 1] * Ez[1] / 2 + bz[1], wZ[3 * iz + 2] * Ez[2] / 2 + bz[2]);
      for (let iz = nz; iz < nz + 24; iz += 4) uz.push(iz, iz + 1, iz + 2, iz, iz + 2, iz + 3)
    }

    function fZ(zz, uz, bz) {
      const Ez = uz[0][0],
        nz = [],
        iz = [];
      for (const [lz, Mz] of uz) XZ(nz, iz, [lz[0] - Ez[0], lz[1] - Ez[1], lz[2] - Ez[2]], Mz);
      return zz.createGameMesh({
        positions: nz,
        indices: iz
      }, bz, Ez)
    }

    function sZ(zz, uz) {
      const bz = zz.w - 2,
        Ez = zz.d - 2;
      return 1 === function(zz, uz, bz, Ez) {
        const [nz, iz, lz] = zz;
        if (Number(nz <= 2) + Number(iz <= 2) + Number(lz <= 2) >= 2) return function(zz, uz, bz) {
          return (zz + uz + bz) % 2 === 0 ? 1 : 3
        }(uz, bz, Ez);
        const [Mz, tz] = nz >= iz && nz >= lz ? [bz, Ez] : iz >= lz ? [uz, Ez] : [uz, bz];
        return Mz % 2 === 0 && tz % 2 === 0 ? 1 : 3
      }([bz, zz.h - 2, Ez], uz % bz, Math.floor(uz / (bz * Ez)), Math.floor(uz / bz) % Ez) ? "rod" : "channel"
    }

    function rZ(zz, uz, bz) {
      if ("reactor" !== zz.kind || zz.formed || !uz) return !1;
      const Ez = jb(zz.box);
      for (let nz = 0; nz < Ez; nz++) {
        const zz = bz(nz);
        if (null !== zz && Lb(zz)) return !1
      }
      return !0
    }

    function oZ(zz, uz, bz, Ez, nz) {
      var iz;
      let lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const Mz = zE(zz.box, uz),
        tz = nE(zz.kind, Mz, bz);
      if ("wrong" === tz || "blocked" === tz) return "wrong";
      if (!nz) return null;
      if ("inside" === Mz && "reactor" === zz.kind && "Air" === Pb(bz)) {
        if (null !== lz) {
          var Hz;
          const bz = ud[bd(lz, uE(zz.box, uz))];
          return bz && null !== (Hz = Lt(bz)) && void 0 !== Hz ? Hz : null
        }
        if (Ez) return sZ(zz.box, uE(zz.box, uz))
      }
      if ("missing" !== tz) return null;
      const Oz = iE(zz.kind, Mz);
      return null === Oz ? null : null !== (iz = Lt(Oz)) && void 0 !== iz ? iz : null
    }
    const NZ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function vZ(zz, uz, bz) {
      const Ez = bz => {
        const Ez = uz(Yb(zz.box, bz));
        return null !== Ez && function(zz, uz) {
          return "reactor" !== zz.kind || uz !== Bb(zz.box) && "inside" !== zE(zz.box, uz)
        }(zz, bz) && "ok" !== nE(zz.kind, zE(zz.box, bz), Ez)
      };
      if (bz) {
        const iz = kb(zz.box, [Math.floor(bz[0]), Math.floor(bz[1]), Math.floor(bz[2])]);
        if (iz >= 0 && (Ez(iz) || (nz = iz, "reactor" === zz.kind && "inside" === zE(zz.box, nz) && "Air" === uz(Yb(zz.box, nz))))) return iz
      }
      var nz;
      const iz = jb(zz.box);
      for (let lz = 0; lz < iz; lz++)
        if (Ez(lz)) return lz;
      return -1
    }

    function xZ(zz, uz) {
      return Math.floor(uz / (zz.w * zz.d))
    }

    function JZ(zz, uz, bz) {
      return bz >= 0 && xZ(zz, uz) > xZ(zz, bz)
    }

    function AZ(zz, uz) {
      return uz >= 0 && zz.h >= 3 && xZ(zz, uz) === zz.h - 1
    }

    function TZ(zz) {
      const uz = Pb(zz);
      return uz === Xb || "Collider" === uz || "Laser" === uz || uz.startsWith("_Collider ")
    }

    function LZ(zz, uz, bz, Ez) {
      if (Ez(zz)) return null;
      if (!NZ.every((uz => {
          let [Ez, nz, iz] = uz;
          const lz = bz([zz[0] + Ez, zz[1] + nz, zz[2] + iz]);
          return null !== lz && !Ub("reactor", lz) && "reactor" !== Gb(lz)
        }))) return null;
      const nz = cb("reactor").min,
        iz = yb([zz[0], zz[1], zz[2]], function(zz, uz) {
          const bz = uz[0] - (zz[0] + .5),
            Ez = uz[2] - (zz[2] + .5);
          return Math.abs(bz) >= Math.abs(Ez) ? bz >= 0 ? 2 : 4 : Ez >= 0 ? 1 : 3
        }(zz, uz), nz, nz, nz, Db("reactor", nz)),
        lz = Bb(iz);
      let Mz = !0;
      for (let tz = 0; tz < jb(iz) && Mz; tz++) {
        if (tz === lz) continue;
        const zz = Yb(iz, tz),
          uz = bz(zz);
        Mz = !Ez(zz) && (null === uz || !TZ(uz))
      }
      return {
        box: iz,
        fits: Mz
      }
    }
    const PZ = Tt,
      GZ = "baf2Goal",
      aZ = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      VZ = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      mZ = .4;

    function qZ(zz, uz) {
      let [bz, Ez, nz] = zz;
      const iz = Ut([bz - .02, Ez - .02, nz - .02], [bz + 1.02, Ez + 1.02, nz + 1.02], .07);
      return uz && (iz.push([
        [bz + .5, Ez + 1 + .7, nz + .5],
        [.08, 1.4, .08]
      ]), iz.push([
        [bz + .5, Ez + 1 + 1.4 + .2, nz + .5],
        [mZ, mZ, mZ]
      ])), iz
    }

    function hZ(zz, uz) {
      let [bz, Ez, nz] = uz;
      return zz.isBlockInLoadedChunk(bz, Ez, nz) ? zz.blockIdToBlockName(zz.getBlockId(bz, Ez, nz)) : null
    }
    let UZ = null;
    const cZ = new Set;
    let gZ = null;

    function SZ(zz) {
      UZ = zz;
      for (const uz of cZ) uz(zz)
    }
    class yZ {
      constructor(zz) {
        var uz;
        this.plans = zz, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (uz = zz => {
          var uz, bz;
          this.setGoal(null !== (uz = null === zz || void 0 === zz ? void 0 : zz.goal) && void 0 !== uz ? uz : null, null !== (bz = null === zz || void 0 === zz ? void 0 : zz.startsBattery) && void 0 !== bz && bz)
        }, gZ ??= [qn.k.subscribe("setDirectionArrow", (zz => {
          let {
            id: uz,
            position: bz,
            text: Ez
          } = zz;
          uz === GZ && SZ({
            goal: [Math.floor(bz[0]), Math.floor(bz[1]), Math.floor(bz[2])],
            startsBattery: JSON.stringify(null !== Ez && void 0 !== Ez ? Ez : null).includes("arrowStartBattery")
          })
        })), qn.k.subscribe("clearDirectionArrow", (zz => {
          let {
            id: uz
          } = zz;
          null !== uz && uz !== GZ || SZ(null)
        }))], cZ.add(uz), uz(UZ), () => {
          cZ.delete(uz)
        })
      }
      onAfterRender(zz, uz) {
        const bz = performance.now();
        if (this.cues.length > 0) {
          const uz = .55 + .45 * Math.sin(bz / 1100 * Math.PI * 2);
          for (const bz of this.cues) zz.setGameMesh(bz, {
            visibility: uz
          })
        }
        if (bz - this.lastCheckMs < 150) return;
        this.lastCheckMs = bz;
        const Ez = this.plans.all().filter((zz => {
            const [bz, Ez, nz] = zz.box.ctrl;
            return (!zz.formed || null !== this.plans.layoutOf(zz.box.ctrl)) && (bz - uz[0]) ** 2 + (Ez - uz[1]) ** 2 + (nz - uz[2]) ** 2 <= 2304
          })),
          nz = function(zz, uz) {
            const bz = KZ.e.IZ,
              Ez = new Map;
            for (const iz of uz) {
              const uz = Yb(iz.box, 0),
                lz = Yb(iz.box, jb(iz.box) - 1),
                Mz = [Math.min(uz[0], lz[0]), Math.min(uz[1], lz[1]), Math.min(uz[2], lz[2])].map((zz => Math.floor(zz / bz))),
                tz = [Math.max(uz[0], lz[0]), Math.max(uz[1], lz[1]), Math.max(uz[2], lz[2])].map((zz => Math.floor(zz / bz)));
              for (let bz = Mz[0]; bz <= tz[0]; bz++)
                for (let uz = Mz[1]; uz <= tz[1]; uz++)
                  for (let iz = Mz[2]; iz <= tz[2]; iz++) {
                    var nz;
                    Ez.set(`${bz},${uz},${iz}`, null !== (nz = zz.getChunkVersion(bz, uz, iz)) && void 0 !== nz ? nz : -1)
                  }
            }
            return Ez
          }(zz, Ez);
        this.plans.getVersion() === this.storeVersion && (function(zz, uz) {
          if (zz.size !== uz.size) return !1;
          for (const [bz, Ez] of zz)
            if (uz.get(bz) !== Ez) return !1;
          return !0
        }(nz, this.chunkVersions) || bz - this.lastRescanMs < 600) || (this.lastRescanMs = bz, this.storeVersion = this.plans.getVersion(), this.chunkVersions = nz, this.redraw(zz, Ez))
      }
      dispose(zz) {
        this.unwatch(), UZ = null, this.clearMeshes(zz), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(zz, uz) {
        var bz;
        (null === zz || void 0 === zz ? void 0 : zz.join()) === (null === (bz = this.goal) || void 0 === bz ? void 0 : bz.join()) && uz === this.startsBattery || (this.goal = zz, this.startsBattery = uz, this.storeVersion = -1)
      }
      redraw(zz, uz) {
        const bz = uz => hZ(zz, uz),
          Ez = new Map,
          nz = [],
          iz = this.plans.guideOn();
        for (const Hz of uz) {
          const zz = iz && rZ(Hz, this.plans.showsStarter(Hz.box.ctrl), (zz => bz(Yb(Hz.box, zz)))),
            uz = "reactor" === Hz.kind ? this.plans.layoutOf(Hz.box.ctrl) : null,
            lz = iz && !Hz.formed ? vZ(Hz, bz, this.goal) : -1;
          lz >= 0 && nz.push([Yb(Hz.box, lz), AZ(Hz.box, lz)]);
          const Mz = jb(Hz.box);
          for (let nz = 0; nz < Mz; nz++) {
            const Mz = Yb(Hz.box, nz),
              tz = bz(Mz),
              Oz = null === tz ? null : oZ(Hz, nz, tz, zz, iz, uz);
            if (null !== Oz) {
              const zz = "wrong" !== Oz && JZ(Hz.box, nz, lz),
                uz = zz ? `${Oz}Dim` : Oz;
              let bz = Ez.get(uz);
              bz || (bz = {
                draw: {
                  ghost: Oz,
                  dim: zz
                },
                list: []
              }, Ez.set(uz, bz)), bz.list.push(Mz)
            }
          }
        }
        if (iz && this.startsBattery && this.goal) {
          const [zz, uz, nz] = this.goal, iz = [];
          for (const [Ez, lz, Mz] of aZ) {
            const tz = [zz + Ez, uz + lz, nz + Mz];
            "Air" === bz(tz) && iz.push(tz)
          }
          if (iz.length > 0) {
            var lz;
            const zz = null !== (lz = Ez.get("cell")) && void 0 !== lz ? lz : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            zz.list.push(...iz), Ez.set("cell", zz)
          }
        }
        const Mz = [...Ez.keys()].sort(),
          tz = [...Mz.map((zz => `${zz}:${Ez.get(zz).list.join(";")}`)), `cue:${nz.join(";")}`].join("|");
        if (tz !== this.shownKey) {
          this.shownKey = tz, this.clearMeshes(zz);
          for (const uz of Mz) {
            const {
              draw: bz,
              list: nz
            } = Ez.get(uz);
            this.meshes.push(this.build(zz, bz, nz))
          }
          for (const [uz, bz] of nz) this.cues.push(fZ(zz, qZ(uz, bz), VZ))
        }
      }
      build(zz, uz, bz) {
        let {
          ghost: Ez,
          dim: nz
        } = uz;
        const {
          size: iz,
          colour: lz,
          alpha: Mz
        } = PZ[Ez], tz = bz[0], Hz = [], Oz = [];
        for (const [pz, dz, Fz] of bz) XZ(Hz, Oz, [pz - tz[0] + .5, dz - tz[1] + .5, Fz - tz[2] + .5], [iz, iz, iz]);
        return zz.createGameMesh({
          positions: Hz,
          indices: Oz
        }, {
          rgb: lz,
          alpha: Mz * (nz ? .3 : 1)
        }, tz)
      }
      clearMeshes(zz) {
        for (const uz of [...this.meshes, ...this.cues]) zz.disposeGameMesh(uz);
        this.meshes = [], this.cues = []
      }
    }
    const DZ = [.56, .83, 1],
      QZ = [1, .3, .25];
    class WZ {
      constructor(zz) {
        this.plans = zz, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(zz, uz, bz) {
        var Ez;
        const nz = performance.now();
        if (nz - this.lastCheckMs < 150) return;
        this.lastCheckMs = nz;
        const iz = uz => hZ(zz, uz),
          lz = null === (Ez = zz.luz(uz)) || void 0 === Ez ? void 0 : Ez.name,
          Mz = lz && "Reactor Frame" === Pb(lz) ? zz.getTargetedBlock() : null,
          tz = Mz ? [Mz.ol[0], Mz.ol[1], Mz.ol[2]] : null,
          Hz = null !== tz && "Air" === iz(tz) && tz.every(((zz, uz) => Math.abs(zz + .5 - bz[uz]) <= 8)) ? LZ(tz, bz, iz, (zz => this.inPlan(zz))) : null,
          Oz = Hz ? `${Hz.box.ctrl.join()}|${Hz.box.rot}|${Hz.fits}` : "";
        Oz !== this.shownKey && this.show(zz, Oz, Hz)
      }
      dispose(zz) {
        this.clear(zz), this.shownKey = ""
      }
      inPlan(zz) {
        return this.plans.all().some((uz => kb(uz.box, zz) >= 0))
      }
      show(zz, uz, bz) {
        if (this.clear(zz), this.shownKey = uz, !bz) return;
        const {
          box: Ez,
          fits: nz
        } = bz, iz = nz ? DZ : QZ, {
          lo: lz,
          hi: Mz
        } = ht(Ez);
        this.meshes.push(fZ(zz, Ut(lz, Mz, .05), {
          rgb: iz,
          alpha: 1
        }));
        const tz = [],
          Hz = Yb(Ez, 0)[1];
        for (let Oz = 0; Oz < Ez.w * Ez.d; Oz++) {
          const [zz, , uz] = Yb(Ez, Oz);
          tz.push([
            [zz + .5, Hz + .02 + .01, uz + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(fZ(zz, tz, {
          rgb: iz,
          alpha: .25
        }))
      }
      clear(zz) {
        for (const uz of this.meshes) zz.disposeGameMesh(uz);
        this.meshes = []
      }
    }
    const eZ = "buildAFactory2Game:";

    function jZ(zz, uz, bz) {
      const Ez = zz => {
          const [bz, Ez, nz] = zz.box.ctrl;
          return bz === uz[0] && Ez === uz[1] && nz === uz[2]
        },
        nz = zz.find((zz => Ez(zz) || kb(zz.box, uz) >= 0));
      if (!nz) return null;
      const iz = function(zz, uz, bz) {
        const {
          w: Ez,
          h: nz,
          d: iz
        } = zz.box, lz = "reactor" === zz.kind ? `${eZ}rxTitle` : `${eZ}batTitle`;
        if (zz.formed) return {
          key: `${eZ}lookPlanFormed`,
          kindKey: lz,
          w: Ez,
          h: nz,
          d: iz,
          count: 0
        };
        let Mz = 0,
          tz = 0;
        for (let Oz = 0; Oz < jb(zz.box); Oz++) {
          const uz = bz(Yb(zz.box, Oz)),
            Ez = null === uz ? "ok" : nE(zz.kind, zE(zz.box, Oz), uz);
          Mz += "missing" === Ez ? 1 : 0, tz += "wrong" === Ez || "blocked" === Ez ? 1 : 0
        }
        const Hz = function(zz, uz, bz) {
          if (uz < 0 || null === bz) return;
          const Ez = zE(zz.box, uz),
            nz = nE(zz.kind, Ez, bz);
          return "blocked" === nz ? `${eZ}lookWhy_blocked` : "wrong" === nz ? "ctrl" === Ez ? `${eZ}lookWhy_ctrl` : `${eZ}lookWhy_reactor_${Ez}` : void 0
        }(zz, kb(zz.box, uz), bz([uz[0], uz[1], uz[2]]));
        if (Mz > 0) return {
          key: `${eZ}lookPlanToBuild`,
          kindKey: lz,
          w: Ez,
          h: nz,
          d: iz,
          count: Mz,
          why: Hz
        };
        if (tz > 0) return {
          key: `${eZ}lookPlanTakeOut`,
          kindKey: lz,
          w: Ez,
          h: nz,
          d: iz,
          count: tz,
          why: Hz
        };
        return {
          key: "reactor" === zz.kind ? `${eZ}lookPlanNoRods` : `${eZ}lookPlanDone`,
          kindKey: lz,
          w: Ez,
          h: nz,
          d: iz,
          count: 0
        }
      }(nz, uz, bz);
      return "reactor" === nz.kind && Ez(nz) ? {
        ...iz,
        ctrl: !0
      } : iz
    }

    function IZ(zz, uz) {
      return zz === uz || null !== zz && null !== uz && zz.key === uz.key && zz.kindKey === uz.kindKey && zz.w === uz.w && zz.h === uz.h && zz.d === uz.d && zz.count === uz.count && zz.why === uz.why && zz.ctrl === uz.ctrl
    }

    function BZ() {
      return performance.now()
    }
    class CZ {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BZ;
        this.ticket = zz, this.sent = uz, this.backstopMs = bz, this.now = Ez, this.queuedAt = void 0, this.queuedAt = Ez()
      }
      answered() {
        const zz = this.now(),
          uz = this.sent.leftAt(this.ticket);
        return null !== uz && zz - uz > 4e3 || zz - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class YZ {
      constructor() {
        this.echoes = []
      }
      add(zz) {
        this.echoes = this.echoes.filter((zz => !zz.answered())), this.echoes.push(zz)
      }
      answered() {
        var zz, uz;
        return null === (zz = null === (uz = this.echoes.at(-1)) || void 0 === uz ? void 0 : uz.answered()) || void 0 === zz || zz
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((zz => zz.answered()))
      }
      age() {
        var zz, uz;
        return null !== (zz = null === (uz = this.echoes.at(-1)) || void 0 === uz ? void 0 : uz.age()) && void 0 !== zz ? zz : null
      }
      clear() {
        this.echoes = []
      }
    }
    class kZ {
      constructor(zz) {
        this.send = zz, this.value = null, this.sent = null, this.echoes = new YZ, this.down = !1, this.timer = null
      }
      shown(zz) {
        return null === this.value ? zz : this.down || this.value !== this.sent ? this.value : zz === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), zz) : this.value
      }
      pendingFor(zz) {
        return null !== this.value && this.value === this.sent && zz !== this.value ? this.echoes.age() : null
      }
      assume(zz, uz) {
        this.disarm(), this.down = !1, this.value = zz, this.sent = zz, this.echoes.clear(), this.echoes.add(uz)
      }
      press() {
        this.down = !0
      }
      drag(zz) {
        this.value = zz, this.arm(this.down ? 1e3 : 400)
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
      arm(zz) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), zz)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class zR {
      constructor() {
        this.pending = new Map
      }
      set(zz, uz, bz) {
        var Ez;
        const nz = null !== (Ez = this.pending.get(zz)) && void 0 !== Ez ? Ez : {
          on: uz,
          echoes: new YZ
        };
        nz.on = uz, nz.echoes.add(bz), this.pending.set(zz, nz)
      }
      shown(zz) {
        let uz = zz;
        for (const [bz, {
            on: Ez,
            echoes: nz
          }] of this.pending) 0 !== (zz & bz) === Ez && nz.agreeCounts() || nz.answered() ? this.pending.delete(bz) : uz = Ez ? uz | bz : uz & ~bz;
        return uz
      }
      pendingMask() {
        let zz = 0;
        for (const uz of this.pending.keys()) zz |= uz;
        return zz
      }
      pendingFor(zz) {
        let uz = null;
        for (const [Ez, {
            on: nz,
            echoes: iz
          }] of this.pending) {
          if (void 0 !== zz && 0 !== (zz & Ez) === nz) continue;
          const lz = iz.age();
          var bz;
          if (null !== lz) uz = Math.max(null !== (bz = uz) && void 0 !== bz ? bz : 0, lz)
        }
        return uz
      }
      clear() {
        this.pending.clear()
      }
    }
    class uR {
      constructor() {
        this.dims = null, this.echoes = new YZ, this.unmet = null
      }
      shown(zz) {
        var uz;
        return this.dims && (bR(this.dims, zz) && this.echoes.agreeCounts() || this.echoes.answered()) && (bR(this.dims, zz) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (uz = this.dims) && void 0 !== uz ? uz : zz
      }
      takeUnmet() {
        const zz = this.unmet;
        return this.unmet = null, zz
      }
      set(zz, uz) {
        this.dims = zz, this.echoes.add(uz)
      }
      pendingFor(zz) {
        return null === this.dims || zz && bR(this.dims, zz) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function bR(zz, uz) {
      return zz[0] === uz[0] && zz[1] === uz[1] && zz[2] === uz[2]
    }
    class ER {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BZ;
        this.now = zz, this.taps = new Map
      }
      tap(zz, uz, bz) {
        return !this.busy(zz) && (this.taps.set(zz, {
          at: this.now(),
          done: uz
        }), bz(), !0)
      }
      settle(zz) {
        for (const [uz, bz] of [...this.taps]) bz.done(zz) && this.taps.delete(uz)
      }
      busy(zz) {
        const uz = this.taps.get(zz);
        return !!uz && (!(this.now() - uz.at >= 3e3) || (this.taps.delete(zz), !1))
      }
      busyIds() {
        const zz = new Set;
        for (const uz of [...this.taps.keys()]) this.busy(uz) && zz.add(uz);
        return zz
      }
      clear() {
        this.taps.clear()
      }
    }

    function nR(zz) {
      return {
        send: uz => zz.track(uz),
        sendUrgent: (uz, bz) => zz.track(uz, {
          urgent: !0,
          supersedes: bz
        }),
        leftAt: uz => zz.leftAt(uz),
        holdReserve: () => zz.holdUrgentReserve(),
        answerMs: Ul
      }
    }

    function iR() {
      return performance.now()
    }

    function lR(zz) {
      const uz = zz.baf2RxNeed.map((zz => {
        let [uz, bz] = zz;
        return [uz, bz]
      }));
      return JSON.stringify([zz.baf2RxFormed, uz, zz.baf2RxBad, zz.baf2RxCells])
    }

    function MR(zz, uz) {
      const bz = 0 !== (uz & du),
        Ez = 0 !== (zz.baf2RxFlags & du);
      return !bz || Ez || "running" !== zz.baf2RxState && "idle" !== zz.baf2RxState ? !bz && Ez && "scram" === zz.baf2RxState && zz.baf2RxFuel > 0 ? "idle" : zz.baf2RxState : "scram"
    }

    function tR(zz) {
      return JSON.stringify([zz.baf2BatFormed, zz.baf2BatNeed, zz.baf2BatBad])
    }

    function HR(zz) {
      return zz.join(",")
    }
    class OR {
      constructor() {
        this.listeners = new Set
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      notify() {
        for (const zz of this.listeners) zz()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class pR {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(zz, uz) {
        this.lastAt = zz, this.lastUntil = zz + uz
      }
      answered(zz) {
        return this.lastAt >= zz || zz < this.lastUntil
      }
    }
    class dR {
      constructor(zz, uz) {
        this.link = zz, this.now = uz, this.hold = new uR, this.picked = null, this.notTaken = null
      }
      shown(zz) {
        const uz = this.hold.shown(zz);
        if (this.hold.takeUnmet() && this.picked) {
          var bz;
          const {
            plans: uz,
            ctrl: Ez,
            at: nz
          } = this.picked;
          this.picked = null, uz.unpredict(Ez), null === (bz = this.notTaken) || void 0 === bz || bz.call(this, zz, nz)
        }
        return uz
      }
      pendingFor(zz) {
        return this.hold.pendingFor(zz)
      }
      NF(zz, uz, bz) {
        zz.predictSize(uz, bz), this.picked = {
          plans: zz,
          ctrl: uz,
          at: this.now()
        };
        const Ez = this.link.send(pu(uz, "plan", ...bz));
        this.hold.set(bz, new CZ(Ez, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class FR {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iR;
        this.plans = zz, this.readInterior = uz, this.link = bz, this.now = Ez, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new zR, this.throttle = void 0, this.oneShots = void 0, this.listeners = new OR, this.redraw = null, this.releaseReserve = null, this.size = new dR(bz, Ez), this.oneShots = new ER(Ez), this.throttle = new kZ((zz => this.echo(this.link.send(this.command("throttle", zz)))))
      }
      set(zz) {
        !zz.baf2RxOpen && this.raw && HR(this.raw.baf2RxAt) === HR(zz.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(zz), this.sK(zz)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(zz) {
        this.size.notTaken = zz
      }
      resize(zz) {
        this.raw && (this.size.NF(this.plans, this.raw.baf2RxAt, zz), this.sK(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const zz = this.raw.baf2RxAt;
        this.plans.setStarter(zz, !this.plans.showsStarter(zz)), this.sK(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.sK(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.sK(this.raw)
      }
      send(zz) {
        if (this.raw) {
          for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
          this.link.send(this.command(zz, ...bz))
        }
      }
      tap(zz, uz) {
        this.raw && this.oneShots.tap(zz, function(zz, uz) {
          if ("start" === zz) return zz => 0 === (zz.baf2RxFlags & du);
          if ("odConfirm" === zz) return zz => 0 !== (zz.baf2RxFlags & Fu);
          const bz = lR(uz);
          return zz => lR(zz) !== bz
        }(zz, this.raw), uz) && ("start" === zz && (this.startedAt = this.now()), this.sK(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(du, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(zz, uz) {
        if (!this.raw) return;
        const bz = zz === du ? this.command(uz ? "scram" : "start") : this.command("od", uz ? 1 : 0),
          Ez = uz && zz === du,
          nz = `${Ou} ${this.raw.baf2RxAt.join(" ")} `,
          iz = this.echo(Ez ? this.link.sendUrgent(bz, (zz => {
            const uz = zz.startsWith(nz) ? zz.slice(nz.length).split(" ")[0] : null;
            return "throttle" === uz || "start" === uz
          })) : this.link.send(bz));
        this.flags.set(zz, uz, iz), Ez && this.throttle.assume(0, iz), this.sK(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(zz) {
        this.throttle.drag(zz), this.raw && this.sK(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.sK(this.raw)
      }
      subscribe(zz) {
        return this.listeners.subscribe(zz)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var zz;
        this.throttle.release(), null === (zz = this.releaseReserve) || void 0 === zz || zz.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(zz) {
        for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
        return pu(this.raw.baf2RxAt, zz, ...bz)
      }
      echo(zz) {
        return new CZ(zz, this.link, this.link.answerMs, this.now)
      }
      sK(zz) {
        var uz;
        this.raw = zz;
        const bz = this.flags.shown(zz.baf2RxFlags),
          Ez = {
            ...zz,
            baf2RxFlags: bz,
            baf2RxTarget: this.throttle.shown(zz.baf2RxTarget),
            baf2RxState: MR(zz, bz)
          },
          nz = this.size.shown(Ez.baf2RxDims),
          iz = this.throttle.pendingFor(),
          lz = [this.throttle.pendingFor(zz.baf2RxTarget), this.flags.pendingFor(zz.baf2RxFlags), this.size.pendingFor(zz.baf2RxDims)].filter((zz => null !== zz)),
          Mz = lz.length > 0 ? Math.max(...lz) : null,
          tz = this.oneShots.busyIds(),
          Hz = Ez.baf2RxAt;
        let Oz, pz, dz = null,
          Fz = [Math.max(0, nz[0] - 2), Math.max(0, nz[1] - 2), Math.max(0, nz[2] - 2)];
        if (Ez.baf2RxFormed) {
          const [zz, uz, bz] = Ez.baf2RxDims;
          Fz = [Math.max(0, zz - 2), Math.max(0, uz - 2), Math.max(0, bz - 2)], Oz = Array.from(Ez.baf2RxCells, Number), pz = `${Fz.join(",")}:${Ez.baf2RxCells}`
        } else {
          var Zz;
          const zz = null === (Zz = this.plans.planAt(Hz)) || void 0 === Zz ? void 0 : Zz.box,
            uz = zz ? Qb(zz, "reactor", ...nz) : yb(Hz, 1, ...nz, Db("reactor", nz[0])),
            bz = this.readInterior(uz);
          dz = nt(Fz, bz), Oz = bz, pz = `${Fz.join(",")}:${bz.join("")}`
        }(null === (uz = this.looksOf) || void 0 === uz ? void 0 : uz.key) !== pz && (this.looksOf = {
          key: pz,
          looks: Ot(Fz, Oz)
        }), this.view = {
          status: Ez,
          dims: nz,
          plan: dz,
          inner: Fz,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Hz),
          odConfirmed: this.odConfirmed || 0 !== (Ez.baf2RxFlags & fu),
          guide: this.plans.guideOn(),
          throttlePending: null !== iz,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== Mz && Mz >= 5e3,
          busy: tz,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== Mz || tz.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.sK(this.raw)
        }), 250))
      }
    }
    class ZR {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iR;
        this.plans = zz, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new OR, this.redraw = null, this.size = new dR(uz, bz), this.oneShots = new ER(bz)
      }
      set(zz) {
        !zz.baf2BatOpen && this.view && HR(this.view.status.baf2BatAt) === HR(zz.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(zz), this.sK(zz)
      }
      tap(zz, uz) {
        if (!this.view) return;
        const bz = tR(this.view.status);
        this.oneShots.tap(zz, (zz => tR(zz) !== bz), uz) && this.sK(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(zz) {
        this.size.notTaken = zz
      }
      resize(zz) {
        this.view && (this.size.NF(this.plans, this.view.status.baf2BatAt, zz), this.sK(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.sK(this.view.status)
      }
      subscribe(zz) {
        return this.listeners.subscribe(zz)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      sK(zz) {
        const uz = this.size.shown(zz.baf2BatDims),
          bz = this.oneShots.busyIds();
        this.view = {
          status: zz,
          dims: uz,
          Bp: vt(uz, zz.baf2BatDims) ? zz.baf2BatCapacity : Ft(...uz),
          guide: this.plans.guideOn(),
          busy: bz
        }, this.listeners.notify(), bz.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.sK(this.view.status)
        }), 250))
      }
    }
    const RR = "buildAFactory2Game:";

    function KR() {
      var zz;
      const uz = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!uz) return null;
      const bz = uz.querySelector(".ExitButton");
      return function(zz, uz) {
        const bz = uz ? uz.left - 8 : zz.right;
        return {
          left: zz.left,
          top: zz.top,
          width: Math.max(0, bz - zz.left),
          height: zz.height
        }
      }(uz.getBoundingClientRect(), null !== (zz = null === bz || void 0 === bz ? void 0 : bz.getBoundingClientRect()) && void 0 !== zz ? zz : null)
    }
    const wR = (0, Ez.memo)((function(zz) {
      let {
        store: uz
      } = zz;
      const {
        t: bz
      } = (0, Ln.F)(), [nz, iz] = (0, Ez.useState)((() => uz.get())), [lz, Mz] = (0, Ez.useState)((() => performance.now()));
      (0, Ez.useEffect)((() => (iz(uz.get()), uz.subscribe((() => {
        iz(uz.get()), Mz(performance.now())
      })))), [uz]);
      const {
        alarm: tz,
        boomAt: Hz
      } = nz, Oz = null !== tz && null !== tz.secs, [pz, dz] = (0, Ez.useState)(null);
      (0, Ez.useEffect)((() => {
        if (!Oz) return;
        dz(KR());
        const zz = setInterval((() => {
          Mz(performance.now()), dz(KR())
        }), 250);
        return () => {
          clearInterval(zz)
        }
      }), [Oz]);
      const [Fz, Zz] = (0, Ez.useState)(!1);
      return (0, Ez.useEffect)((() => {
        if (Hz === -1 / 0) return;
        Zz(!0);
        const zz = setTimeout((() => {
          Zz(!1)
        }), 1300);
        return () => {
          clearTimeout(zz)
        }
      }), [Hz]), (0, Ti.jsxs)(Ti.Fragment, {
        children: [null !== tz && (0, Ti.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: bz(tz.hot ? `${RR}rxAlarmSiren` : `${RR}rxAlarmDamaged`, {
            amount: String(tz.damage)
          })
        }), null !== tz && null !== tz.secs && (0, Ti.jsx)("div", {
          className: pz ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== pz && void 0 !== pz ? pz : void 0,
          "aria-live": "assertive",
          children: bz(`${RR}rxAlarmCountdown`, {
            amount: String((Rz = tz.secs, Kz = lz - tz.receivedAt, Math.max(1, Math.ceil(Rz - Kz / 1e3))))
          })
        }), Fz && (0, Ti.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Rz, Kz
    }));
    class XR {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      Ws(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const bz = zz.baf2RxAlarmAt.join(",");
        let Ez = this.snapshot.boomAt;
        if (zz.baf2RxAlarmBoom) this.byReactor.delete(bz), Ez = uz;
        else if (zz.baf2RxAlarmDamage <= 0) this.byReactor.delete(bz);
        else {
          var nz;
          this.byReactor.set(bz, {
            damage: zz.baf2RxAlarmDamage,
            secs: null !== (nz = zz.baf2RxAlarmSecs) && void 0 !== nz ? nz : null,
            hot: !0 === zz.baf2RxAlarmHot,
            receivedAt: uz
          })
        }
        this.sK(Ez)
      }
      retain(zz) {
        let uz = !1;
        for (const bz of [...this.byReactor.keys()]) zz.has(bz) || (this.byReactor.delete(bz), uz = !0);
        uz && this.sK(this.snapshot.boomAt)
      }
      has(zz) {
        return this.byReactor.has(zz)
      }
      get() {
        return this.snapshot
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      sK(zz) {
        let uz = null;
        for (const bz of this.byReactor.values())(!uz || bz.damage > uz.damage) && (uz = bz);
        this.snapshot = {
          alarm: uz,
          boomAt: zz
        };
        for (const bz of this.listeners) bz()
      }
    }
    const fR = {
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

    function sR(zz) {
      return [zz[0], zz[1], zz[2]]
    }

    function rR(zz) {
      return `${zz[0]},${zz[1]},${zz[2]}`
    }
    class oR {
      constructor(zz) {
        if (this.plans = zz, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var zz;
            return {
              active: this.glows.flatMap((zz => {
                let {
                  record: uz
                } = zz;
                return uz ? [uz] : []
              })),
              log: [...null !== (zz = this.devLog) && void 0 !== zz ? zz : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var zz;
        return null !== (zz = this.devLog) && void 0 !== zz ? zz : []
      }
      check(zz, uz, bz) {
        const Ez = new Set(uz.map((zz => rR(zz.box.ctrl))));
        for (const lz of function(zz, uz) {
            const bz = [],
              Ez = new Map(zz);
            zz.clear();
            for (const nz of uz) {
              const uz = FZ(nz.box.ctrl),
                iz = nz.formed ? nz.level : 0;
              zz.set(uz, iz), iz > 0 && 0 === Ez.get(uz) && bz.push(nz)
            }
            return bz
          }(this.levels, this.plans.all())) Ez.has(rR(lz.box.ctrl)) && this.show(zz, lz, "on", bz);
        const nz = this.plans.lastFormed();
        if (null === nz || nz.receivedAt <= this.flashedAt) return null;
        this.flashedAt = nz.receivedAt;
        const iz = function(zz, uz) {
          var bz;
          const Ez = FZ(zz);
          return null !== (bz = uz.find((zz => FZ(zz.box.ctrl) === Ez))) && void 0 !== bz ? bz : null
        }(nz.ctrl, uz);
        return iz && this.show(zz, iz, "formed", bz), iz
      }
      fade(zz, uz) {
        0 !== this.glows.length && (this.glows = this.glows.filter((bz => {
          let {
            mesh: Ez,
            glow: nz,
            startMs: iz,
            record: lz
          } = bz;
          const Mz = (uz - iz) / fR[nz].ms;
          return Mz >= 1 ? (zz.disposeGameMesh(Ez), lz && (lz.endMs = uz), !1) : (zz.setGameMesh(Ez, {
            visibility: "formed" === nz ? 1 - Mz : Math.sin(Math.PI * Mz)
          }), !0)
        })))
      }
      dispose(zz) {
        for (const {
            mesh: bz
          }
          of this.glows) zz.disposeGameMesh(bz);
        this.glows = [], this.levels.clear();
        const uz = "undefined" !== typeof window ? window : null;
        (null === uz || void 0 === uz ? void 0 : uz.baf2Glows) === this.devAccessor && delete uz.baf2Glows
      }
      show(zz, uz, bz, Ez) {
        const {
          lo: nz,
          hi: iz
        } = ht(uz.box);
        let lz = null;
        this.devLog && (lz = {
          glow: bz,
          ctrl: sR(uz.box.ctrl),
          lo: sR(nz),
          hi: sR(iz),
          startMs: Ez,
          endMs: null
        }, this.devLog.push(lz), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(zz, bz, Ut(nz, iz, fR[bz].thick)),
          glow: bz,
          startMs: Ez,
          record: lz
        })
      }
      build(zz, uz, bz) {
        const Ez = fZ(zz, bz, {
          rgb: fR[uz].colour,
          alpha: 1
        });
        return zz.setGameMesh(Ez, {
          visibility: 0
        }), Ez
      }
    }
    const NR = 1 / .6,
      vR = {
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
        blendMode: cM.d.Standard,
        soft: !0
      },
      xR = {
        ...vR,
        size: [.25, .4],
        count: 2
      };

    function JR(zz) {
      return {
        colours: [zz, zz],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: cM.d.Add,
        soft: !1
      }
    }
    const AR = JR([150, 225, 255]),
      TR = JR([185, 145, 255]),
      LR = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function PR(zz) {
      const uz = Vu[zz];
      return null === uz.fuelSlot || nb(uz) ? LR.includes(zz) ? TR : AR : vR
    }
    const GR = {
        kind: "smokePuff"
      },
      aR = [.2, .025, .2];

    function VR(zz, uz) {
      const [
        [bz, Ez, nz],
        [iz, lz, Mz]
      ] = zz.colours;
      return {
        texture: zz.soft ? GR : "square_particle",
        Bp: uz,
        minLifeTime: zz.life[0] / NR,
        maxLifeTime: zz.life[1] / NR,
        minEmitPower: zz.power[0] * NR,
        maxEmitPower: zz.power[1] * NR,
        minSize: zz.size[0],
        maxSize: zz.size[1],
        emitRate: 0,
        gravity: [0, zz.lift * NR * NR, 0],
        dir1: [-zz.spread, 1, -zz.spread],
        dir2: [zz.spread, 1, zz.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [bz, Ez, nz, zz.alpha],
          maxColor: [iz, lz, Mz, zz.alpha]
        }, {
          timeFraction: 1,
          minColor: [bz, Ez, nz, 0],
          maxColor: [iz, lz, Mz, 0]
        }],
        blendMode: zz.blendMode
      }
    }
    class mR {
      constructor(zz) {
        this.fixed = zz, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(zz, uz, bz) {
        var Ez;
        if (bz === this.lastFrame) return !1;
        this.lastFrame = bz;
        const nz = this.at;
        nz[0] = uz[0] + .5, nz[1] = uz[1] + 1.025, nz[2] = uz[2] + .5;
        const iz = null !== (Ez = this.fixed) && void 0 !== Ez ? Ez : Mz() ? xR : vR;
        let lz = this.particles.get(iz);
        return lz || (lz = zz.createParticles(function(zz) {
          return VR(zz, Math.ceil(12 * zz.count * zz.life[1]) + zz.count)
        }(iz), {
          pos: nz,
          half: aR
        }), this.particles.set(iz, lz)), lz.moveTo(nz), lz.emit(iz.count), !0
      }
      dispose() {
        for (const zz of this.particles.values()) zz.stop();
        this.particles.clear()
      }
    }
    class qR {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(zz) {
        this.indexed = !0;
        for (const uz of Au) {
          const bz = PR(uz);
          for (let Ez = 1; Ez <= 4; Ez++) {
            const nz = zz.blockNameToBlockId(`${uz}|meta|rot${Ez}|Running`, !0);
            if (null === nz) continue;
            let iz = this.pufferIndexByStyle.get(bz);
            void 0 === iz && (iz = this.pufferList.push(new mR(bz === vR ? null : bz)) - 1, this.pufferIndexByStyle.set(bz, iz)), this.pufferIndexById[nz] = iz + 1
          }
        }
      }
      onAfterRender(zz, uz) {
        this.indexed || this.index(zz);
        const bz = performance.now(),
          Ez = 0 === this.lastMs ? 0 : Math.min(bz - this.lastMs, 250) / 1e3;
        this.lastMs = bz, this.frame++, zz.particlesEnabled() ? (this.scan(zz, uz), this.puff(zz, Ez)) : this.sources = []
      }
      dispose() {
        for (const zz of this.pufferList) zz.dispose();
        this.sources = [], this.found = []
      }
      scan(zz, uz) {
        0 === this.scanRow && (this.origin = [Math.floor(uz[0]) - 12, Math.floor(uz[1]) - 6, Math.floor(uz[2]) - 12]);
        const bz = Math.min(this.scanRow + 16, 325),
          [Ez, nz, iz] = this.origin,
          lz = this.hits;
        lz.length = 0;
        for (let Mz = this.scanRow; Mz < bz; Mz++) {
          const uz = Ez + Mz % 25,
            bz = nz + Math.floor(Mz / 25);
          zz.scanBlocks(uz, bz, iz, uz + 1, bz + 1, iz + 25, this.pufferIndexById, lz)
        }
        for (let Mz = 0; Mz < lz.length; Mz += 4) {
          const zz = lz[Mz + 3];
          this.found.push({
            pos: [lz[Mz], lz[Mz + 1], lz[Mz + 2]],
            hO: zz,
            puffer: this.pufferList[this.pufferIndexById[zz] - 1]
          })
        }
        this.scanRow = bz, 325 === bz && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(zz, uz) {
        const bz = this.sources.length;
        if (0 !== bz) {
          this.budget = Math.min(this.budget + Math.min(bz / 1.2, 12) * uz, 2);
          for (let uz = 0; uz < bz && this.budget >= 1; uz++) {
            const uz = this.sources[this.cursor % bz];
            this.cursor = (this.cursor + 1) % bz, zz.getBlockId(uz.pos[0], uz.pos[1], uz.pos[2]) === uz.hO && (uz.puffer.puff(zz, uz.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const hR = {
        ...JR([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      UR = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function cR(zz) {
      return 0 === zz.spots.length ? 0 : Math.min(1 * zz.level, 4)
    }

    function gR(zz) {
      return 0 === zz.glass.length ? 0 : Math.min(.75 * zz.level, 3)
    }

    function SR(zz) {
      return `${zz.ctrl.join(",")}:${zz.rot}:${zz.cu},${zz.cv}:${zz.w},${zz.h},${zz.d}`
    }

    function yR(zz, uz) {
      const bz = uz.w - 2,
        Ez = uz.h - 2,
        nz = uz.d - 2,
        iz = [];
      for (let lz = 0; lz < bz * Ez * nz; lz++) {
        const Mz = lz % bz,
          tz = Math.floor(lz / bz) % nz,
          Hz = Math.floor(lz / (bz * nz));
        if (Mz > 0 && Mz < bz - 1 && tz > 0 && tz < nz - 1 && Hz > 0 && Hz < Ez - 1) continue;
        const Oz = Yb(uz, bE(uz, lz)),
          pz = hZ(zz, Oz);
        if (null !== pz && "Fuel Rod" === Pb(pz))
          for (const uz of UR) {
            const bz = [Oz[0] + uz[0], Oz[1] + uz[1], Oz[2] + uz[2]];
            QR(zz, bz) && iz.push(WR(bz, uz))
          }
      }
      return iz
    }

    function DR(zz, uz) {
      const {
        lo: bz,
        hi: Ez
      } = ht(uz), nz = [];
      for (let iz = bz[0]; iz < Ez[0]; iz++)
        for (let uz = bz[1]; uz < Ez[1]; uz++) {
          const lz = iz === bz[0] || iz === Ez[0] - 1 || uz === bz[1] || uz === Ez[1] - 1 ? 1 : Math.max(1, Ez[2] - 1 - bz[2]);
          for (let Mz = bz[2]; Mz < Ez[2]; Mz += lz) {
            const lz = [iz, uz, Mz];
            if (!QR(zz, lz)) continue;
            const tz = iz === bz[0] ? UR[1] : iz === Ez[0] - 1 ? UR[0] : Mz === bz[2] ? UR[5] : Mz === Ez[2] - 1 ? UR[4] : uz === bz[1] ? UR[3] : UR[2];
            nz.push(WR(lz, tz))
          }
        }
      return nz
    }

    function QR(zz, uz) {
      const bz = hZ(zz, uz);
      return null !== bz && "Reactor Glass" === Pb(bz)
    }

    function WR(zz, uz) {
      return [
        [zz[0] + .5 + .55 * uz[0], zz[1] + .5 + .55 * uz[1], zz[2] + .5 + .55 * uz[2]],
        [0 === uz[0] ? .4 : .02, 0 === uz[1] ? .4 : .02, 0 === uz[2] ? .4 : .02]
      ]
    }
    class eR {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(zz, uz, bz, Ez) {
        const nz = [],
          iz = new Set;
        for (const Hz of uz) {
          var lz, Mz, tz;
          const {
            box: uz
          } = Hz;
          if ("reactor" !== Hz.kind || Hz.level <= 0 || (uz.ctrl[0] - bz[0]) ** 2 + (uz.ctrl[1] - bz[1]) ** 2 + (uz.ctrl[2] - bz[2]) ** 2 > 576) continue;
          const Oz = SR(uz);
          iz.add(Oz);
          let pz = this.spots.get(Oz);
          if ((!pz || Ez - pz.at > 3e3) && (pz = {
              at: Ez,
              spots: yR(zz, uz),
              glass: DR(zz, uz)
            }, this.spots.set(Oz, pz)), 0 === pz.spots.length && 0 === pz.glass.length) continue;
          const dz = this.sparking.find((zz => zz.key === Oz));
          nz.push({
            key: Oz,
            level: Hz.level,
            spots: pz.spots,
            glass: pz.glass,
            budget: null !== (lz = null === dz || void 0 === dz ? void 0 : dz.budget) && void 0 !== lz ? lz : 0,
            cursor: null !== (Mz = null === dz || void 0 === dz ? void 0 : dz.cursor) && void 0 !== Mz ? Mz : 0,
            glassBudget: null !== (tz = null === dz || void 0 === dz ? void 0 : dz.glassBudget) && void 0 !== tz ? tz : 0
          })
        }
        for (const Hz of this.spots.keys()) iz.has(Hz) || this.spots.delete(Hz);
        this.sparking = nz
      }
      emit(zz, uz, bz) {
        var Ez;
        if (0 === this.sparking.length || !zz.particlesEnabled() || bz === this.lastFrame) return;
        this.lastFrame = bz;
        let nz = 0,
          iz = 0;
        for (const Zz of this.sparking) nz += cR(Zz), iz += gR(Zz);
        const lz = nz > 8 ? 8 / nz : 1,
          Mz = iz > 6 ? 6 / iz : 1;
        let tz, Hz = null,
          Oz = null;
        for (const Zz of this.sparking) Zz.budget = Math.min(Zz.budget + cR(Zz) * lz * uz, 2), Zz.budget >= 1 && (!Hz || Zz.budget > Hz.budget) && (Hz = Zz), Zz.glassBudget = Math.min(Zz.glassBudget + gR(Zz) * Mz * uz, 2), Zz.glassBudget >= 1 && (!Oz || Zz.glassBudget > Oz.glassBudget) && (Oz = Zz);
        if (Hz) Hz.budget--, tz = Hz.spots[Hz.cursor++ % Hz.spots.length];
        else {
          if (!Oz) return;
          Oz.glassBudget--, tz = Oz.glass[Math.floor(Math.random() * Oz.glass.length)]
        }
        const [pz, dz] = tz, Fz = null !== (Ez = this.emitter) && void 0 !== Ez ? Ez : this.create(zz, pz, dz);
        Fz.moveTo(pz, dz), Fz.emit(hR.count)
      }
      dispose() {
        var zz;
        null === (zz = this.emitter) || void 0 === zz || zz.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(zz, uz, bz) {
        const Ez = Math.ceil(14 * hR.count * hR.life[1]) + hR.count;
        return this.emitter = zz.createParticles(VR(hR, Ez), {
          pos: uz,
          half: bz
        }), this.emitter
      }
    }
    const jR = [2, 3.2],
      IR = 1 / 3,
      BR = 1 / .6,
      CR = {
        texture: GR,
        Bp: Math.ceil(18 * jR[1]) + 4,
        minLifeTime: jR[0] / BR,
        maxLifeTime: jR[1] / BR,
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
        blendMode: cM.d.Standard
      };
    class YR {
      constructor(zz) {
        this.plans = zz, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new eR, this.frame = 0, this.outline = new oR(zz)
      }
      onAfterRender(zz, uz, bz) {
        const Ez = performance.now(),
          nz = 0 === this.lastMs ? 0 : Math.min(Ez - this.lastMs, 250) / 1e3;
        if (this.lastMs = Ez, this.outline.fade(zz, Ez), this.puff(zz, nz, bz), this.sparks.emit(zz, nz, this.frame++), Ez - this.lastCheckMs < 150) return;
        this.lastCheckMs = Ez;
        const iz = this.plans.all().filter((zz => zz.formed && kR(zz.box.ctrl, bz) <= 4096));
        this.plumes = iz.filter((zz => "reactor" === zz.kind && zz.level > 0)).map((zz => ({
          box: zz.box,
          level: zz.level
        }))), this.updateHums(zz, uz, iz, bz), this.sparks.update(zz, iz, bz, Ez), this.chimeFormed(zz, uz, iz, Ez)
      }
      dispose(zz) {
        var uz;
        this.outline.dispose(zz), null === (uz = this.steam) || void 0 === uz || uz.dispose(), this.steam = null, this.sparks.dispose();
        for (const bz of this.hums.values()) bz.stop();
        this.hums.clear()
      }
      chimeFormed(zz, uz, bz, Ez) {
        const nz = this.outline.check(zz, bz, Ez);
        nz && zz.playSound(uz, "exp_levelup", .6, 1, {
          Dn: [nz.box.ctrl[0] + .5, nz.box.ctrl[1], nz.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(zz, uz, bz) {
        const Ez = this.plumes;
        if (0 === Ez.length || !zz.particlesEnabled()) return void(this.plumeBudget = 0);
        const nz = Ez.reduce(((zz, uz) => zz + 3 * uz.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + nz * uz, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let iz = this.plumeCursor % (nz / 3);
        this.plumeCursor++;
        let lz = Ez[0];
        for (const pz of Ez) {
          if (iz < pz.level) {
            lz = pz;
            break
          }
          iz -= pz.level
        }
        const {
          lo: Mz,
          hi: tz
        } = ht(lz.box);
        if (function(zz, uz, bz) {
            const Ez = Math.max(zz[0] - bz[0], 0, bz[0] - uz[0]),
              nz = Math.max(zz[2] - bz[2], 0, bz[2] - uz[2]);
            return Math.hypot(Ez, bz[1] - uz[1], nz)
          }(Mz, tz, bz) < 6 && Math.random() > IR) return;
        const Hz = [(Mz[0] + tz[0]) / 2, tz[1] + .05, (Mz[2] + tz[2]) / 2],
          Oz = [(tz[0] - Mz[0]) / 2 - .5, .05, (tz[2] - Mz[2]) / 2 - .5];
        this.steam ??= zz.createParticles(CR, {
          pos: Hz,
          half: Oz
        }), this.steam.moveTo(Hz, Oz), this.steam.emit(1)
      }
      updateHums(zz, uz, bz, Ez) {
        const nz = new Map;
        for (const lz of bz) "reactor" === lz.kind && lz.level > 0 && kR(lz.box.ctrl, Ez) <= 576 && nz.set(`${iz=lz.box.ctrl,`${iz[0]},${iz[1]},${iz[2]}`}:${lz.level}`, lz);
        var iz;
        for (const [lz, Mz] of this.hums) nz.has(lz) || (Mz.stop(), this.hums.delete(lz));
        for (const [lz, Mz] of nz) {
          if (this.hums.has(lz)) continue;
          const {
            lo: bz,
            hi: Ez
          } = ht(Mz.box), nz = [(bz[0] + Ez[0]) / 2, bz[1], (bz[2] + Ez[2]) / 2], iz = zz.playSound(uz, "rocketEngineLoop", .08 + .06 * Mz.level, .55, {
            Dn: nz,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          iz && this.hums.set(lz, iz)
        }
      }
    }

    function kR(zz, uz) {
      return (zz[0] - uz[0]) ** 2 + (zz[1] - uz[1]) ** 2 + (zz[2] - uz[2]) ** 2
    }
    class zK {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      Ws(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Ez = [zz.baf2BombAt[0], zz.baf2BombAt[1], zz.baf2BombAt[2]],
          nz = zz.baf2BombR;
        if (zz.baf2BombBoom) {
          const zz = Math.hypot(uz[0] - Ez[0], uz[1] - Ez[1], uz[2] - Ez[2]);
          this.sK({
            fuse: null,
            blast: {
              at: Ez,
              r: nz,
              receivedAt: bz,
              distance: zz,
              flash: zz <= 3 * nz
            }
          })
        } else this.sK({
          ...this.snapshot,
          fuse: zz.baf2BombMs > 0 ? {
            at: Ez,
            r: nz,
            endsAt: bz + zz.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      sK(zz) {
        this.snapshot = zz;
        for (const uz of this.listeners) uz()
      }
    }
    const uK = (0, Ez.memo)((function(zz) {
      var uz;
      let {
        store: bz
      } = zz;
      const {
        t: nz
      } = (0, Ln.F)(), [iz, lz] = (0, Ez.useState)((() => bz.get())), [Mz, tz] = (0, Ez.useState)((() => performance.now()));
      (0, Ez.useEffect)((() => (lz(bz.get()), bz.subscribe((() => {
        lz(bz.get()), tz(performance.now())
      })))), [bz]);
      const {
        fuse: Hz,
        blast: Oz
      } = iz;
      (0, Ez.useEffect)((() => {
        if (!Hz) return;
        const zz = setInterval((() => {
          tz(performance.now())
        }), 250);
        return () => {
          clearInterval(zz)
        }
      }), [Hz]);
      const [pz, dz] = (0, Ez.useState)(!1);
      (0, Ez.useEffect)((() => {
        if (null === Oz || void 0 === Oz || !Oz.flash) return;
        dz(!0);
        const zz = setTimeout((() => {
          dz(!1)
        }), 2500);
        return () => {
          clearTimeout(zz)
        }
      }), [Oz]);
      const Fz = Hz ? function(zz, uz) {
        return zz.endsAt <= uz ? 0 : Math.ceil((zz.endsAt - uz) / 1e3)
      }(Hz, Mz) : 0;
      return (0, Ti.jsxs)(Ti.Fragment, {
        children: [Fz > 0 && (0, Ti.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: nz("buildAFactory2Game:bombCountdown", {
            amount: String(Fz),
            radius: String(null !== (uz = null === Hz || void 0 === Hz ? void 0 : Hz.r) && void 0 !== uz ? uz : 0)
          })
        }), pz && (0, Ti.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function bK(zz) {
      const uz = Math.min(4, Math.max(1, zz / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * zz / 4)),
        capSpread: Math.min(5 * zz / 8, 24 * uz),
        capThick: 6 * uz,
        stemHalfWidth: 3 * uz,
        puffScale: uz
      }
    }
    class EK {
      constructor() {
        this.yM = !1
      }
      hold(zz) {
        zz.getCameraFar() < 1e3 && (zz.setCameraFar(1e3), this.yM = !0)
      }
      release(zz) {
        this.yM && (this.yM = !1, zz.setCameraFar(null))
      }
    }
    const nK = 1 / .6,
      iK = [.2, .1, .2],
      lK = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      MK = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: cM.d.Standard,
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
      tK = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: cM.d.Standard,
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
      HK = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: cM.d.Standard,
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
      OK = {
        texture: GR,
        Bp: Math.ceil(120) + 4,
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
        blendMode: cM.d.Add
      };
    class pK {
      constructor(zz) {
        this.store = zz, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new EK, this.timers = []
      }
      onAfterRender(zz, uz) {
        const bz = performance.now(),
          Ez = 0 === this.lastMs ? 0 : Math.min(bz - this.lastMs, 250) / 1e3;
        this.lastMs = bz;
        const {
          fuse: nz,
          blast: iz
        } = this.store.get();
        null !== iz && iz !== this.shownBlast && (this.shownBlast = iz, this.startBlast(zz, uz, iz, bz));
        const lz = zz.particlesEnabled();
        null !== nz && nz.endsAt > bz && lz ? this.emitBeacon(zz, nz, Ez, bz) : this.beaconBudget = 0, null !== this.cloud && (bz - this.cloud.startMs > 33e3 ? this.disposeCloud(zz) : (this.far.hold(zz), lz && this.emitCloud(zz, Ez, bz)))
      }
      dispose(zz) {
        var uz;
        null === (uz = this.beacon) || void 0 === uz || uz.dispose(), this.beacon = null, this.disposeCloud(zz);
        for (const bz of this.timers) clearTimeout(bz);
        this.timers.length = 0
      }
      emitBeacon(zz, uz, bz, Ez) {
        const nz = uz.endsAt - Ez < 5e3 ? 350 : 1e3,
          iz = .5 + .5 * Math.sin(2 * Math.PI * Ez / nz);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * iz * bz, 4), this.beaconBudget < 1) return;
        const lz = Math.floor(this.beaconBudget);
        this.beaconBudget -= lz;
        const [Mz, tz, Hz] = uz.at, Oz = [Mz + .5, tz + 1.1, Hz + .5];
        this.beacon ??= zz.createParticles(OK, {
          pos: Oz,
          half: iK
        }), this.beacon.moveTo(Oz), this.beacon.emit(lz)
      }
      startBlast(zz, uz, bz, Ez) {
        var nz;
        null === (nz = this.beacon) || void 0 === nz || nz.dispose(), this.beacon = null, this.disposeCloud(zz);
        const iz = (0, hM.isMobile)() ? .5 : 1;
        this.streams = [MK, tK, HK].map((zz => {
          const uz = Math.round(zz.count * iz);
          return {
            spec: zz,
            particles: null,
            rate: uz / ((zz.toMs - zz.fromMs) / 1e3),
            budget: 0,
            left: uz
          }
        })), this.cloud = {
          blast: bz,
          startMs: Ez
        };
        const lz = Math.max(.25, 1 - bz.distance / (6 * bz.r)),
          Mz = bz.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [bz, Ez, nz] of lK) FK(zz, uz, bz, lz * Ez, nz)
        }), Mz))
      }
      emitCloud(zz, uz, bz) {
        const {
          blast: Ez,
          startMs: nz
        } = this.cloud, iz = bz - nz, [lz, Mz, tz] = Ez.at, Hz = bK(Ez.r);
        for (const Oz of this.streams) {
          const {
            spec: bz
          } = Oz;
          if (Oz.left <= 0 || iz < bz.fromMs) continue;
          Oz.budget += Oz.rate * uz;
          const nz = Math.min(Math.floor(Oz.budget), Oz.left);
          if (nz < 1) continue;
          Oz.budget -= nz, Oz.left -= nz;
          const pz = Oz.particles ??= this.createStream(zz, bz, Ez);
          if (bz === MK) {
            const zz = Hz.stemHalfWidth;
            pz.moveTo([lz, Mz + 1, tz], [zz, 1, zz])
          } else if (bz === tK) {
            const zz = Hz.capSpread * Math.min(1, (iz - bz.fromMs) / 3e3),
              uz = Math.sqrt(Math.random()),
              Ez = 2 * Math.random() * Math.PI,
              nz = Math.cos(Ez) * uz,
              Oz = Math.sin(Ez) * uz,
              dz = lz + nz * zz,
              Fz = tz + Oz * zz,
              Zz = Hz.capThick,
              Rz = Mz + Hz.capHeight + Zz * (1 - uz * uz) * 2;
            pz.setDirections([.7 * nz, .05, .7 * Oz], [nz, .2, Oz]), pz.moveTo([dz, Rz, Fz], [Zz, Zz, Zz])
          } else {
            this.ringAngle += 2.39996;
            const zz = Math.cos(this.ringAngle),
              uz = Math.sin(this.ringAngle);
            pz.setDirections([zz, .05, uz], [zz, .1, uz]), pz.moveTo([lz + 2 * zz, Mz + .5, tz + 2 * uz], [0, .5, 0])
          }
          pz.emit(nz)
        }
      }
      createStream(zz, uz, bz) {
        const {
          r: Ez
        } = bz, nz = Math.max(uz.life[0], Ez / 25), iz = uz === HK ? [.9 * nz, nz] : uz.life, lz = bK(Ez), Mz = uz === HK ? 1 : lz.puffScale, tz = {
          texture: GR,
          Bp: uz.count + 4,
          minLifeTime: iz[0] / nK,
          maxLifeTime: iz[1] / nK,
          minSize: uz.size[0] * Mz,
          maxSize: uz.size[1] * Mz,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, uz.gravity * nK * nK, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: uz.from[0],
            maxColor: uz.from[1]
          }, {
            timeFraction: .6,
            minColor: dK(uz.from[0], uz.to[0]),
            maxColor: dK(uz.from[1], uz.to[1])
          }, {
            timeFraction: 1,
            minColor: uz.to[0],
            maxColor: uz.to[1]
          }],
          blendMode: uz.blend
        };
        if (uz === MK) {
          const zz = lz.capHeight / ((iz[0] + iz[1]) / 2);
          tz.minEmitPower = .9 * zz * nK, tz.maxEmitPower = 1.05 * zz * nK, tz.dir1 = [-.1, 1, -.1], tz.dir2 = [.1, 1, .1]
        } else uz === tK ? (tz.minEmitPower = 1.2, tz.maxEmitPower = 2, tz.dir1 = [-1, .05, -1], tz.dir2 = [1, .2, 1]) : (tz.minEmitPower = 39.583333333333336, tz.maxEmitPower = 41.66666666666667, tz.dir1 = [1, 0, 0], tz.dir2 = [1, 0, 0]);
        return zz.createParticles(tz, {
          pos: bz.at
        })
      }
      disposeCloud(zz) {
        for (const bz of this.streams) {
          var uz;
          null === (uz = bz.particles) || void 0 === uz || uz.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(zz)
      }
    }

    function dK(zz, uz) {
      return [(zz[0] + uz[0]) / 2, (zz[1] + uz[1]) / 2, (zz[2] + uz[2]) / 2, .75 * zz[3]]
    }

    function FK(zz, uz, bz, Ez, nz) {
      try {
        zz.playSound(uz, bz, Ez, nz)
      } catch (iz) {
        console.error(iz)
      }
    }
    const ZK = {
        Bp: 720,
        perS: 100
      },
      RK = {
        Bp: 320,
        perS: 44
      };
    class KK {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(zz, uz) {
        this.zone = {
          centre: [...zz.centre],
          r: zz.r,
          band: zz.band ? [zz.band[0], zz.band[1]] : void 0
        }, this.endsAt = uz
      }
      stop() {
        this.zone = null
      }
      Ws(zz, uz) {
        const {
          baf2FalloutMs: bz,
          baf2FalloutAt: Ez,
          baf2FalloutR: nz,
          baf2FalloutY: iz
        } = zz;
        bz > 0 && Ez && void 0 !== nz ? this.start({
          centre: Ez,
          r: nz,
          band: iz
        }, uz + bz) : this.stop()
      }
      perS(zz, uz, bz) {
        const Ez = this.zone;
        if (!Ez) return 0;
        const nz = this.endsAt - zz;
        return nz <= 0 ? (this.zone = null, 0) : Ez.band && (uz[1] < Ez.band[0] || uz[1] > Ez.band[1]) || Math.hypot(uz[0] - Ez.centre[0], uz[2] - Ez.centre[2]) > Ez.r ? 0 : bz.perS * Math.min(1, nz / 5e3)
      }
    }
    const wK = [5, 7],
      XK = [24, 8, 24],
      fK = .5,
      sK = 1 / .6,
      rK = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class oK {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hM.isMobile)();
        this.state = new KK, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(zz) {
          return zz ? RK : ZK
        }(zz)
      }
      startFallout(zz, uz) {
        this.state.start(zz, uz)
      }
      stopFallout() {
        this.state.stop()
      }
      Ws(zz) {
        this.state.Ws(zz, performance.now())
      }
      onAfterRender(zz, uz) {
        var bz;
        const Ez = performance.now(),
          nz = 0 === this.lastMs ? 0 : Math.min(Ez - this.lastMs, 250) / 1e3;
        this.lastMs = Ez;
        const iz = this.state.perS(Ez, uz, this.tier);
        if (iz <= 0 || !zz.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + iz * nz, iz / 4);
        const lz = Math.floor(this.budget);
        if (lz < 1) return;
        this.budget -= lz;
        const Mz = this.at;
        Mz[0] = uz[0], Mz[1] = uz[1] + 12, Mz[2] = uz[2];
        const tz = null !== (bz = this.systems) && void 0 !== bz ? bz : this.create(zz, Mz),
          Hz = this.amounts;
        Hz[0] = 0, Hz[1] = 0;
        for (let Oz = 0; Oz < lz; Oz++) Hz[Math.random() < .3 ? 1 : 0]++;
        for (let Oz = 0; Oz < tz.length; Oz++) Hz[Oz] > 0 && (tz[Oz].moveTo(Mz, XK), tz[Oz].emit(Hz[Oz]))
      }
      dispose() {
        for (const uz of null !== (zz = this.systems) && void 0 !== zz ? zz : []) {
          var zz;
          uz.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(zz, uz) {
        return this.systems = rK.map((bz => {
          let {
            rgba: [Ez, nz, iz, lz],
            share: Mz
          } = bz;
          const tz = {
            texture: "square_particle",
            Bp: Math.ceil(this.tier.Bp * Mz),
            minLifeTime: wK[0] / sK,
            maxLifeTime: wK[1] / sK,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [fK, -1, fK],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Ez, nz, iz, 0]
            }, {
              timeFraction: .15,
              minColor: [Ez, nz, iz, lz]
            }, {
              timeFraction: .8,
              minColor: [Ez, nz, iz, lz]
            }, {
              timeFraction: 1,
              minColor: [Ez, nz, iz, 0]
            }],
            blendMode: cM.d.Standard
          };
          return zz.createParticles(tz, {
            pos: uz,
            half: XK
          })
        })), this.systems
      }
    }
    const NK = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function vK(zz) {
      const uz = /\|rot(\d)/.exec(zz);
      return NK[uz ? Number(uz[1]) : 1]
    }
    var xK = bz(586),
      JK = bz(37859);
    const AK = new Set(xK.n);

    function TK(zz) {
      if (-2 !== zz.count) return null;
      const uz = Dz(zz.item);
      return null !== uz && AK.has(uz) ? uz : null
    }

    function LK(zz) {
      const {
        width: uz,
        height: bz
      } = (0, JK.d)(zz).hitBoxDimensions;
      return .55 / Math.max(uz, bz)
    }

    function PK(zz, uz, bz) {
      if (!bz) return !1;
      const Ez = zz[0] + .5 - uz[0],
        nz = zz[1] + .5 - uz[1],
        iz = zz[2] + .5 - uz[2];
      return Ez * Ez + nz * nz + iz * iz <= 576
    }

    function GK(zz, uz) {
      return Math.atan2(zz[0], zz[2]) + Math.PI + uz
    }

    function aK(zz, uz) {
      const bz = 2 * Math.PI;
      return (zz + bz * uz / 1e4) % bz
    }
    class VK {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = zz, this.now = uz, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = zz.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(zz, uz) {
        if (0 === this.farms.size) return;
        const bz = this.now(),
          Ez = Number.isNaN(this.frameMs) ? 0 : Math.min(bz - this.frameMs, 100);
        this.frameMs = bz, bz - this.checkedMs >= 1e3 && (this.checkedMs = bz, this.check(zz, uz));
        for (const nz of this.farms.values()) nz.shown && nz.running && null !== nz.model && Ez > 0 && (nz.spin = aK(nz.spin, Ez), nz.model.setPose(nz.feet, GK(nz.front, nz.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const zz of this.farms.values()) this.drop(zz);
        this.farms.clear()
      }
      sync() {
        const zz = new Set;
        for (const uz of this.labels.list()) {
          const bz = TK(uz);
          if (null === bz) continue;
          zz.add(uz.key);
          const Ez = this.farms.get(uz.key);
          if ((null === Ez || void 0 === Ez ? void 0 : Ez.mob) === bz) continue;
          Ez && this.drop(Ez);
          const [nz, iz, lz] = uz.pos;
          this.farms.set(uz.key, {
            pos: uz.pos,
            feet: [nz + .5, iz + 1, lz + .5],
            mob: bz,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [uz, bz] of this.farms) zz.has(uz) || (this.drop(bz), this.farms.delete(uz));
        this.checkedMs = -1 / 0
      }
      check(zz, uz) {
        for (const bz of this.farms.values()) {
          const [Ez, nz, iz] = bz.pos, lz = hZ(zz, bz.pos);
          null !== lz && Pb(lz) === mz && PK(bz.pos, uz, "Air" === hZ(zz, [Ez, nz + 1, iz])) ? (bz.running = lz.endsWith("|Running"), bz.front = vK(lz), null === bz.model && (bz.model = zz.createMobModel(bz.mob, LK(bz.mob)), null === bz.model) || (bz.model.setPose(bz.feet, GK(bz.front, bz.spin)), bz.shown || (bz.model.setVisible(!0), bz.shown = !0))) : (bz.shown && null !== bz.model && bz.model.setVisible(!1), bz.shown = !1)
        }
      }
      drop(zz) {
        var uz;
        null === (uz = zz.model) || void 0 === uz || uz.dispose(), zz.model = null, zz.shown = !1
      }
    }
    class mK {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(zz) {
        var uz;
        this.island = zz.baf2ColIsland, this.islandSite = (uz = zz.baf2ColSite) && 8 === uz.length ? {
          spawnXZ: [uz[0], uz[1]],
          coreXZ: [uz[2], uz[3]],
          minXZ: [uz[4], uz[5]],
          maxXZ: [uz[6], uz[7]]
        } : null, this.views = zz.baf2ColList.map((zz => ({
          entry: tn(zz)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(zz) {
        this.status = zz, this.emit()
      }
      onOpen(zz) {
        this.openHeld = zz
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
        return this.views.map((zz => zz.entry))
      }
      entryAtRoot(zz) {
        var uz;
        return null === (uz = this.views.find((uz => {
          let {
            entry: bz
          } = uz;
          return bz.focus[0] === zz[0] && bz.focus[1] === zz[1] + 1 && bz.focus[2] === zz[2]
        }))) || void 0 === uz ? void 0 : uz.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(zz, uz) {
        return Qt(this.entries(), zz, uz)
      }
      lookSource() {
        return {
          handles: zz => dE(zz) >= 0 || FE(zz),
          line: (zz, uz) => this.lookLine(zz, uz),
          version: () => this.beamsVersion
        }
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const zz of this.listeners) zz()
      }
    }
    const qK = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((zz => zz / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((zz => [zz, zz + 1, zz + 2, zz, zz + 2, zz + 3]))
    };

    function hK(zz, uz, bz, Ez, nz, iz, lz) {
      let Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const tz = Math.cos(Mz),
        Hz = Math.sin(Mz),
        Oz = zz.positions.length / 3,
        {
          positions: pz,
          indices: dz
        } = qK;
      for (let Fz = 0; Fz < pz.length; Fz += 3) {
        const Mz = pz[Fz] * nz,
          Oz = pz[Fz + 2] * lz;
        zz.positions.push(uz + Mz * tz + Oz * Hz, bz + pz[Fz + 1] * iz, Ez - Mz * Hz + Oz * tz)
      }
      for (const Fz of dz) zz.indices.push(Oz + Fz)
    }

    function UK(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return uz < 1 ? {
        rgb: zz,
        alpha: uz
      } : {
        rgb: zz,
        alpha: 1,
        opaque: !0
      }
    }
    class cK {
      constructor(zz, uz) {
        this.style = zz, this.perSource = uz, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(zz) {
        this.sources = zz, 0 === zz.length && (this.budget = 0)
      }
      sd(zz, uz, bz) {
        const Ez = this.sources.length;
        if (0 !== Ez) {
          var nz, iz;
          this.budget = Math.min(this.budget + (nz = Ez, iz = this.perSource, Math.min(nz * iz, iH) * uz), 2);
          for (let uz = 0; uz < Ez && this.budget >= 1; uz++) {
            const uz = this.sources[this.cursor % Ez];
            this.cursor = (this.cursor + 1) % Ez;
            if (!(Math.max(Math.abs(uz.x - bz[0]), Math.abs(uz.y - bz[1]), Math.abs(uz.z - bz[2])) > 32)) return this.puff(zz, uz), void this.budget--
          }
        }
      }
      dispose() {
        var zz;
        null === (zz = this.particles) || void 0 === zz || zz.dispose(), this.particles = null, this.sources = []
      }
      puff(zz, uz) {
        let {
          x: bz,
          y: Ez,
          z: nz,
          h: iz,
          faces: lz
        } = uz;
        const Mz = function(zz, uz, bz, Ez, nz) {
            const [iz, lz, Mz] = nz[Math.floor(Math.random() * nz.length)], tz = .04, Hz = (zz, uz, bz) => zz > 0 ? uz + bz + tz : zz < 0 ? uz - tz : uz + .1, Oz = (zz, uz, bz) => zz > 0 ? uz + bz + tz : zz < 0 ? uz - tz : uz + bz - .1, pz = [Hz(iz, zz, 1), Hz(lz, uz, Ez), Hz(Mz, bz, 1)], dz = [Oz(iz, zz, 1), Oz(lz, uz, Ez), Oz(Mz, bz, 1)];
            return {
              pos: [(pz[0] + dz[0]) / 2, (pz[1] + dz[1]) / 2, (pz[2] + dz[2]) / 2],
              half: [(dz[0] - pz[0]) / 2, (dz[1] - pz[1]) / 2, (dz[2] - pz[2]) / 2],
              out: [iz, lz, Mz]
            }
          }(bz, Ez, nz, iz, lz),
          {
            style: tz
          } = this,
          Hz = this.particles ??= zz.createParticles(VR(tz, Math.ceil(tz.count * iH * tz.life[1]) + 4), Mz);
        Hz.moveTo(Mz.pos, Mz.half);
        const [Oz, pz, dz] = Mz.out, Fz = tz.spread;
        Hz.setDirections([Oz - Fz, .6 + pz, dz - Fz], [Oz + Fz, 1 + pz, dz + Fz]), Hz.emit(tz.count)
      }
    }
    const gK = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class SK {
      constructor() {
        this.green = new cK(MH.green, EH), this.pink = new cK(MH.pink, nH), this.colliders = [], this.lastMs = 0
      }
      setSources(zz) {
        this.colliders = zz;
        const uz = [],
          bz = [];
        for (const Ez of zz) {
          const [zz, nz, iz] = Ez.focus;
          uz.push({
            x: zz,
            y: nz - 1,
            z: iz,
            h: 2,
            faces: gK
          });
          for (let uz = 0; uz < 4; uz++) {
            if (!Ez.live[uz]) continue;
            const [zz, nz, iz] = KE(Ez.focus, uz, lE.LASER_D), [lz, , Mz] = RE[uz], tz = gK.filter((zz => zz[0] !== lz || zz[2] !== Mz || 0 !== zz[1]));
            bz.push({
              x: zz,
              y: nz,
              z: iz,
              h: 1,
              faces: tz
            })
          }
        }
        this.green.setSources(uz), this.pink.setSources(bz)
      }
      onAfterRender(zz) {
        const uz = performance.now(),
          bz = 0 === this.lastMs ? 0 : Math.min(uz - this.lastMs, 250) / 1e3;
        if (this.lastMs = uz, 0 === this.colliders.length || !zz.particlesEnabled()) return;
        const Ez = zz.getCameraPosition();
        this.green.sd(zz, bz, Ez), this.pink.sd(zz, bz, Ez)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const yK = 1.04,
      DK = UK([1, 120 / 255, 220 / 255]),
      QK = UK([1, .25, .25], .35);
    class WK {
      constructor(zz) {
        this.store = zz, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new SK
      }
      onAfterRender(zz) {
        this.store.version() !== this.builtVersion && this.rebuild(zz);
        const uz = performance.now();
        for (const bz of this.beams) {
          const Ez = 1 + .35 * Math.sin(uz / 700 * Math.PI * 2 + bz.phase);
          zz.setGameMesh(bz.mesh, {
            scale: [bz.alongX ? 1 : Ez, Ez, bz.alongX ? Ez : 1]
          })
        }
        this.glow.onAfterRender(zz)
      }
      dispose(zz) {
        this.clear(zz), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(zz) {
        this.clear(zz), this.builtVersion = this.store.version();
        const uz = [];
        for (const {
            entry: bz
          }
          of this.store.colliders()) bz.on && bz.live.some(Boolean) && (this.addBeams(zz, bz), uz.push(bz)), bz.blockers.length > 0 && this.addMarkers(zz, bz);
        this.glow.setSources(uz)
      }
      addBeams(zz, uz) {
        const [bz, Ez, nz] = uz.focus, iz = bH - .25, lz = (.25 + bH) / 2;
        for (let Mz = 0; Mz < 4; Mz++) {
          if (!uz.live[Mz]) continue;
          const [tz, , Hz] = RE[Mz], Oz = 0 !== tz, pz = {
            positions: [],
            indices: []
          };
          hK(pz, 0, 0, 0, Oz ? iz : .2, .2, Oz ? .2 : iz);
          const dz = [bz + .5 + tz * lz, Ez + .5, nz + .5 + Hz * lz],
            Fz = zz.createGameMesh(pz, DK, dz);
          this.meshes.push(Fz), this.beams.push({
            mesh: Fz,
            alongX: Oz,
            phase: Mz * Math.PI / 2
          })
        }
      }
      addMarkers(zz, uz) {
        const bz = uz.blockers[0],
          Ez = {
            positions: [],
            indices: []
          };
        for (const [nz, iz, lz] of uz.blockers) hK(Ez, nz - bz[0] + .5, iz - bz[1] + .5, lz - bz[2] + .5, yK, yK, yK);
        this.meshes.push(zz.createGameMesh(Ez, QK, bz))
      }
      clear(zz) {
        for (const uz of this.meshes) zz.disposeGameMesh(uz);
        this.meshes = [], this.beams = []
      }
    }
    const eK = [.56, .83, 1],
      jK = [1, .73, .08],
      IK = [1, .25, .25],
      BK = [.85, .85, .85],
      CK = [.3, .45, .6];

    function YK(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const lz = nz / 2,
        Mz = nz + iz;
      for (const tz of [-lz, lz])
        for (const nz of [-lz, lz]) hK(zz, uz, bz + tz, Ez + nz, Mz, iz, iz), hK(zz, uz + tz, bz, Ez + nz, iz, Mz, iz), hK(zz, uz + tz, bz + nz, Ez, iz, iz, Mz)
    }

    function kK(zz) {
      return uz => zz.isBlockInLoadedChunk(uz[0], uz[1], uz[2]) && 0 === zz.getBlockId(uz[0], uz[1], uz[2])
    }

    function zw(zz) {
      return zz.map((zz => {
        let {
          free: uz,
          blocked: bz,
          gaps: Ez,
          supports: nz
        } = zz;
        return `${uz.join(";")}|${bz.join(";")}|${Ez.join(";")}|${nz.join(";")}`
      })).join("/")
    }

    function uw(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const iz = uz[0],
        lz = {
          positions: [],
          indices: []
        };
      for (const [Mz, tz, Hz] of uz) YK(lz, Mz - iz[0] + .5, tz - iz[1] + .5, Hz - iz[2] + .5, Ez, nz);
      return zz.createGameMesh(lz, bz, iz)
    }
    class bw {
      constructor(zz) {
        this.store = zz, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(zz, uz, bz) {
        var Ez;
        const nz = null === (Ez = zz.luz(uz)) || void 0 === Ez ? void 0 : Ez.name;
        if (nz !== tE && nz !== ME) return void("" !== this.shownKey && this.show(zz, "", []));
        const iz = performance.now();
        if (iz - this.lastCheckMs >= 200 && (this.lastCheckMs = iz, nz === tE ? this.check(zz, bz) : this.preview(zz, bz)), this.pulses.length > 0) {
          const uz = 1 + .12 * Math.sin(iz / 1e3 * 1.25 * Math.PI * 2),
            bz = [uz, uz, uz];
          for (const Ez of this.pulses) zz.setGameMesh(Ez, {
            scale: bz
          })
        }
      }
      dispose(zz) {
        this.clear(zz), this.shownKey = ""
      }
      check(zz, uz) {
        const bz = kK(zz),
          Ez = [];
        for (const {
            entry: iz
          }
          of this.store.colliders()) {
          iz.focus.every(((zz, bz) => Math.abs(zz + .5 - uz[bz]) <= lE.GHOST_REACH)) && Ez.push(uH(iz, bz))
        }
        const nz = zw(Ez);
        nz !== this.shownKey && this.show(zz, nz, Ez)
      }
      preview(zz, uz) {
        const bz = zz.getTargetedBlock(),
          Ez = bz ? [bz.ol[0], bz.ol[1], bz.ol[2]] : null,
          nz = null !== Ez && Ez.every(((zz, bz) => Math.abs(zz + .5 - uz[bz]) <= 8)),
          iz = this.store.site(),
          lz = nz && iz ? function(zz, uz, bz) {
            const Ez = ZE(zz);
            if (!Ez.every(uz)) return null;
            const nz = fE(zz, bz);
            return {
              column: Ez,
              spots: uH({
                focus: Ez[1],
                lasers: [!1, !1, !1, !1],
                open: nz,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, uz),
              fits: nz.filter(Boolean).length >= lE.MIN_SPOTS
            }
          }(Ez, kK(zz), iz) : null,
          Mz = lz ? [lz.spots] : [],
          tz = lz ? `preview ${Ez.join(",")}|${lz.fits}|${zw(Mz)}` : "";
        var Hz, Oz;
        tz !== this.shownKey && this.show(zz, tz, Mz, null !== (Hz = null === lz || void 0 === lz ? void 0 : lz.column) && void 0 !== Hz ? Hz : [], null === (Oz = null === lz || void 0 === lz ? void 0 : lz.fits) || void 0 === Oz || Oz)
      }
      show(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          nz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(zz), this.shownKey = uz, Ez.length > 0 && this.meshes.push(uw(zz, Ez, UK(nz ? BK : IK)));
        for (const {
            free: iz,
            blocked: lz,
            gaps: Mz,
            supports: tz
          }
          of bz) {
          for (const [uz, bz, Ez] of iz) {
            const nz = {
              positions: [],
              indices: []
            };
            YK(nz, 0, 0, 0);
            const iz = zz.createGameMesh(nz, UK(eK), [uz + .5, bz + .5, Ez + .5]);
            this.meshes.push(iz), this.pulses.push(iz)
          }
          lz.length > 0 && this.meshes.push(uw(zz, lz, UK(jK))), Mz.length > 0 && this.meshes.push(uw(zz, Mz, UK(IK), 1.06, .07)), tz.length > 0 && this.meshes.push(uw(zz, tz, UK(CK)))
        }
      }
      clear(zz) {
        for (const uz of this.meshes) zz.disposeGameMesh(uz);
        this.meshes = [], this.pulses = []
      }
    }
    class Ew {
      constructor() {
        this.stored = new Map, this.yM = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(zz) {
        if (!zz.baf2TermOpen) return !1;
        zz.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [uz, bz] of zz.baf2TermItems) bz > 0 ? this.stored.set(uz, bz) : this.stored.delete(uz);
        if (zz.baf2TermHeld && (this.yM = new Map(zz.baf2TermHeld)), this.pending = this.pending.filter((uz => uz.seq > zz.baf2TermAcked)), this.silos = zz.baf2TermSilos, this.readOnly = zz.baf2TermReadOnly, this.pocket = !0 === zz.baf2TermPocket, zz.baf2TermReset) this.resort();
        else {
          const zz = new Set(this.order);
          for (const uz of this.stored.keys()) zz.has(uz) || this.order.push(uz)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((zz, uz) => this.amount(uz) - this.amount(zz) || zz.localeCompare(uz))), this.changed()
      }
      take(zz, uz) {
        const bz = Mu(zz, this.amount(uz));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: uz,
          amount: bz,
          put: !1
        }), this.recents = [uz, ...this.recents.filter((zz => zz !== uz))].slice(0, 6), this.changed(), bu(this.seq, zz, uz)
      }
      put(zz, uz) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: uz,
          amount: Mu(zz, this.heldAmount(uz)),
          put: !0
        }), this.changed(), Eu(this.seq, zz, uz)
      }
      putAll() {
        this.seq++;
        for (const zz of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: zz,
          amount: this.heldAmount(zz),
          put: !0
        });
        return this.changed(), nu(this.seq)
      }
      amount(zz) {
        var uz;
        let bz = null !== (uz = this.stored.get(zz)) && void 0 !== uz ? uz : 0;
        for (const Ez of this.pending) Ez.item === zz && (bz += Ez.put ? Ez.amount : -Ez.amount);
        return Math.max(0, bz)
      }
      heldAmount(zz) {
        var uz;
        let bz = null !== (uz = this.yM.get(zz)) && void 0 !== uz ? uz : 0;
        for (const Ez of this.pending) Ez.put && Ez.item === zz && (bz -= Ez.amount);
        return Math.max(0, bz)
      }
      heldItems() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((uz => uz === zz || this.heldAmount(uz) > 0))
      }
      items() {
        return this.order.filter((zz => this.amount(zz) > 0))
      }
      recent() {
        return this.recents.filter((zz => this.amount(zz) > 0))
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
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      changed() {
        this.version++;
        for (const zz of this.listeners) zz()
      }
    }
    var nw = bz(37817);
    const iw = {
      isBlock: zz => void 0 !== Pz.k[zz],
      harvestType: zz => {
        var uz;
        return null === (uz = Pz.k[zz]) || void 0 === uz ? void 0 : uz.harvestType
      },
      harvestLevel: zz => {
        var uz;
        return null === (uz = Pz.k[zz]) || void 0 === uz ? void 0 : uz.harvestLevel
      },
      dropsNothing: zz => {
        var uz;
        return null === (null === (uz = Pz.k[zz]) || void 0 === uz ? void 0 : uz.drops)
      },
      displayName: zz => {
        var uz;
        return null === (uz = EM.m[zz]) || void 0 === uz ? void 0 : uz.displayName
      },
      description: zz => {
        var uz;
        return null === (uz = EM.m[zz]) || void 0 === uz ? void 0 : uz.description
      },
      harvests: zz => {
        var uz;
        return null === (uz = EM.m[zz]) || void 0 === uz ? void 0 : uz.harvests
      },
      level: zz => {
        var uz;
        return null === (uz = EM.m[zz]) || void 0 === uz ? void 0 : uz.level
      }
    };

    function lw(zz, uz, bz) {
      return function(zz, uz, bz, Ez) {
        var nz, iz;
        const lz = uz.split("|")[0],
          Mz = zz.isBlock(uz) ? uz : zz.isBlock(lz) ? lz : null;
        if (null === Mz || "rock" !== zz.harvestType(Mz) || zz.dropsNothing(Mz) && !UE.has(lz)) return null;
        const tz = bz && "rock" === zz.harvests(bz) ? null !== (nz = zz.level(bz)) && void 0 !== nz ? nz : 0 : null,
          Hz = null !== (iz = null !== Ez && void 0 !== Ez ? Ez : zz.harvestLevel(Mz)) && void 0 !== iz ? iz : 0;
        return (null !== tz ? Hz <= tz : 0 === zz.harvestLevel(Mz)) ? null : JE(zz, Hz)
      }(iw, zz, uz, bz)
    }

    function Mw(zz, uz) {
      return function(zz, uz, bz) {
        if (uz === xE[0]) return [(0, Vz.Zd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Vz.N.whiteUiText)];
        const Ez = bz.split("|")[0],
          nz = zz.isBlock(Ez) ? zz.displayName(Ez) : void 0,
          iz = "string" === typeof nz ? nz : nz && "translationKey" in nz ? `$t(${nz.translationKey})` : Ez;
        return [(0, Vz.Zd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: iz
          }
        }, Vz.N.whiteUiText), (0, Vz.Zd)({
          translationKey: `item:${(0,Vz.ze)(uz)}`
        }, Vz.N.yellowUiText)]
      }(iw, zz, uz)
    }
    const tw = "buildAFactory2Game:";
    const Hw = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Ow(zz) {
      return zz.endsWith(" Ore")
    }
    const pw = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      dw = [],
      Fw = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: pw,
        plan: null,
        atomic: dw
      },
      Zw = "buildAFactory2Game:",
      Rw = new Set(["Splitter", "Sorting Gate"]),
      Kw = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class ww {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = zz, this.planAt = uz, this.tierOf = bz, this.hO = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.yM = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Fw, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(zz, uz, bz) {
        var Ez, nz, iz;
        let lz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Mz = null !== (Ez = null === (nz = zz.luz(uz)) || void 0 === nz ? void 0 : nz.name) && void 0 !== Ez ? Ez : null,
          tz = zz.isPlayerCrouching(uz),
          Hz = 0 === bz ? null : this.resolve(zz, bz),
          Oz = null !== Hz && null !== lz && Rw.has(Hz.rootName) && function(zz, uz) {
            return Kw.some((bz => {
              let [Ez, nz] = bz;
              const iz = zz.getBlockId(uz[0] + Ez, uz[1], uz[2] + nz);
              return 0 !== iz && "Express Belt" === zz.getMetaInfo(iz).rootName
            }))
          }(zz, lz),
          pz = this.updatePlan(0 === bz ? null : lz),
          dz = this.tierOf(),
          Fz = null === lz ? null : (0, nw.e)(bz),
          Zz = null !== Fz && null !== lz && (0, nw.g)(function(zz) {
            return (uz, bz, Ez) => zz.getBlockId(uz, bz, Ez)
          }(zz), lz[0], lz[1], lz[2], Fz),
          Rz = this.readAfloat(zz, bz, lz);
        if (bz === this.hO && Zz === this.missesMaker && Rz === this.afloat && Mz === this.yM && tz === this.crouching && Oz === this.express && dz === this.tier && !pz && (!this.targetsLive || !this.liveMoved(lz))) return;
        this.hO = bz, this.missesMaker = Zz, this.afloat = Rz, this.yM = Mz, this.crouching = tz, this.express = Oz;
        const Kz = Oz && Hz ? function(zz) {
          if (null === zz.info) return null;
          return zz.express ??= {
            ...zz.info,
            detail: `${Zw}lookKeepsUpExpress`,
            detailItem: null
          }, zz.express
        }(Hz) : null !== Hz && Zz && null !== Fz ? this.besideMaker(Hz, bz, Fz) : null !== Hz && Rz ? this.hanging(Hz) : null !== (iz = null === Hz || void 0 === Hz ? void 0 : Hz.info) && void 0 !== iz ? iz : null;
        this.tier = dz;
        const wz = Hz && Kz ? function(zz, uz) {
          var bz, Ez;
          const nz = Pz.k[zz];
          if (!zz.endsWith(" Ore") || "rock" !== (null === nz || void 0 === nz ? void 0 : nz.harvestType) || 0 === nz.harvestLevel) return null;
          const iz = null !== (bz = nz.harvestLevel) && void 0 !== bz ? bz : 0,
            lz = uz ? EM.m[uz] : void 0;
          if ("rock" === (null === lz || void 0 === lz ? void 0 : lz.harvests) && (null !== (Ez = lz.level) && void 0 !== Ez ? Ez : 0) >= iz) return null;
          const Mz = (tz = iz, JE(iw, tz));
          var tz;
          if (null === Mz) return null;
          const Hz = ii(Mz),
            Oz = /^[AEIOU]/.test(Mz) ? "An" : "";
          if ("rock" === (null === lz || void 0 === lz ? void 0 : lz.harvests) && uz) return {
            key: `${Zw}lookToolTooWeak${Oz}`,
            yM: ii(uz),
            needed: Hz
          };
          return {
            key: Mz === xE[0] ? `${Zw}lookNeedAnyPickaxe` : `${Zw}lookNeedPickaxe${Oz}`,
            yM: null,
            needed: Hz
          }
        }(Hz.rootName, Mz) : null;
        this.targetsLive = !0 === (null === Hz || void 0 === Hz ? void 0 : Hz.live) && null !== lz;
        let Xz = null;
        this.targetsLive && Hz && lz && this.live && (this.livePos[0] = lz[0], this.livePos[1] = lz[1], this.livePos[2] = lz[2], this.liveVersion = this.live.version(), Xz = this.live.line(Hz.rootName, lz));
        const fz = null === Kz ? pw : function(zz, uz, bz) {
            const Ez = function(zz, uz, bz) {
              const Ez = ab(zz);
              if (null === Ez) return null;
              const nz = `${tw}lookPortMode_${Ez}`,
                iz = SE(uz);
              if (iz && bz) return {
                mode: null,
                detail: nz,
                next: `${tw}lookWrenchPickUp`,
                nextState: null
              };
              const lz = Vb(zz),
                Mz = null === lz ? null : ab(lz);
              return null === Mz ? {
                mode: null,
                detail: nz,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: nz,
                next: iz ? `${tw}lookWrenchNext` : `${tw}lookPortWrench`,
                nextState: `${tw}lookPortState_${Mz}`
              }
            }(zz, uz, bz);
            if (null !== Ez) return Ez;
            const nz = bn(zz, uz, bz);
            return null === nz.mode && null === nz.next ? pw : nz
          }(zz.blockIdToBlockName(bz), Mz, tz),
          sz = this.plan,
          rz = Hz && Kz ? this.rowsOf(Hz.rootName, dz) : dw,
          oz = this.snapshot;
        if (!(null === Kz ? !oz.visible : oz.visible && Kz === oz.info && (Nz = wz, vz = oz.tool, Nz === vz || null !== Nz && null !== vz && Nz.key === vz.key && Nz.yM === vz.yM && Nz.needed === vz.needed) && function(zz, uz) {
            return zz === uz || null !== zz && null !== uz && zz.key === uz.key && JSON.stringify([zz.params, zz.keys]) === JSON.stringify([uz.params, uz.keys])
          }(Xz, oz.live) && function(zz, uz) {
            return zz.mode === uz.mode && zz.detail === uz.detail && zz.next === uz.next && zz.nextState === uz.nextState
          }(fz, oz.wrench) && IZ(sz, oz.plan) && rz === oz.atomic)) {
          var Nz, vz;
          this.snapshot = null === Kz ? {
            ...oz,
            visible: !1
          } : {
            info: Kz,
            visible: !0,
            tool: wz,
            live: Xz,
            wrench: fz,
            plan: sz,
            atomic: rz
          };
          for (const zz of this.listeners) zz()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Fw, this.hO = 0, this.yM = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(zz, uz, bz) {
        if (null === bz || 0 === uz || !Mz() || !Ow(this.resolve(zz, uz).rootName)) return !1;
        const Ez = `${bz[0]},${bz[1]},${bz[2]},${uz}`,
          nz = performance.now();
        return Ez === this.afloatKey && nz - this.afloatAt < Xw ? this.afloat : (this.afloatKey = Ez, this.afloatAt = nz, function(zz, uz) {
          for (const [bz, Ez, nz] of Hw) {
            const iz = uz(zz[0] + bz, zz[1] + Ez, zz[2] + nz);
            if (void 0 === iz || null !== iz && !Ow(iz)) return !1
          }
          return !0
        }(bz, ((uz, bz, Ez) => function(zz, uz, bz, Ez) {
          if (!zz.isBlockInLoadedChunk(uz, bz, Ez)) return;
          const nz = zz.getBlockId(uz, bz, Ez);
          return 0 === nz ? null : zz.getMetaInfo(nz).rootName
        }(zz, uz, bz, Ez))))
      }
      liveMoved(zz) {
        var uz;
        const {
          livePos: bz
        } = this;
        return null === zz || zz[0] !== bz[0] || zz[1] !== bz[1] || zz[2] !== bz[2] || (null === (uz = this.live) || void 0 === uz ? void 0 : uz.version()) !== this.liveVersion
      }
      updatePlan(zz) {
        const uz = null === zz ? "" : zz.join(","),
          bz = performance.now();
        if (uz === this.planPos && bz - this.planMs < 250) return !1;
        this.planPos = uz, this.planMs = bz;
        const Ez = null === zz ? null : this.planAt([zz[0], zz[1], zz[2]]),
          nz = !IZ(Ez, this.plan);
        return this.plan = Ez, nz
      }
      besideMaker(zz, uz, bz) {
        let {
          info: Ez
        } = zz;
        if (null === Ez) return null;
        let nz = this.besideMakerById.get(uz);
        if (void 0 === nz) {
          const zz = "cryo" === bz ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          nz = {
            ...Ez,
            detail: `${Zw}${zz}`,
            detailItem: null
          }, this.besideMakerById.set(uz, nz)
        }
        return nz
      }
      hanging(zz) {
        let {
          info: uz,
          rootName: bz
        } = zz;
        if (null === uz) return null;
        let Ez = this.afloatByRoot.get(bz);
        return void 0 === Ez && (Ez = {
          ...uz,
          detail: `${Zw}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(bz, Ez)), Ez
      }
      rowsOf(zz, uz) {
        if (null === uz) return dw;
        const bz = `${zz}|${uz}`;
        let Ez = this.rowsByKey.get(bz);
        if (void 0 === Ez) {
          const nz = function(zz, uz) {
            var bz;
            if (!(zz in Vu)) return [];
            const Ez = null !== (bz = mu[zz]) && void 0 !== bz ? bz : [],
              nz = new Map;
            for (const lz of ei(zz, uz))
              if ((Ez.includes(lz) || Wi(lz.output) && Di(lz.output) > Bz(zz)) && Di(lz.output) <= uz) {
                var iz;
                const zz = null !== (iz = nz.get(lz.output)) && void 0 !== iz ? iz : [];
                zz.push(lz.input), nz.set(lz.output, zz)
              } return Ii([...nz], (zz => {
              let [uz] = zz;
              return -Di(uz)
            })).map((zz => {
              let [uz, bz] = zz;
              return {
                output: uz,
                inputs: bz
              }
            }))
          }(zz, uz);
          Ez = nz.length > 0 ? nz : dw, this.rowsByKey.set(bz, Ez)
        }
        return Ez
      }
      resolve(zz, uz) {
        const {
          rootId: bz,
          rootName: Ez
        } = zz.getMetaInfo(uz), nz = (0, Zb.k)(Ez) ? uz : bz;
        let iz = this.byRootId.get(nz);
        const lz = Mz();
        if (void 0 === iz || iz.nuclear !== lz) {
          var tz;
          const bz = function(zz) {
            return qE(iw, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz)
          }(Ez, zz.blockIdToBlockName(uz));
          iz = {
            info: bz,
            rootName: Ez,
            live: null !== bz && !0 === (null === (tz = this.live) || void 0 === tz ? void 0 : tz.handles(Ez)),
            nuclear: lz
          }, this.byRootId.set(nz, iz)
        }
        return iz
      }
    }
    const Xw = 500;
    const fw = (0, Ez.memo)((function(zz) {
      var uz, bz;
      let {
        store: nz
      } = zz;
      const {
        t: iz
      } = (0, Ln.F)(), [lz, Mz] = (0, Ez.useState)((() => nz.get()));
      (0, Ez.useEffect)((() => (Mz(nz.get()), nz.subscribe((() => {
        Mz(nz.get())
      })))), [nz]);
      const {
        openInGameMenuName: tz,
        openEverythingMenuName: Hz,
        isTouchScreen: Oz
      } = (0, rn.m)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: pz,
        tool: dz,
        live: Fz,
        wrench: Zz,
        atomic: Rz
      } = lz, Kz = lz.visible && null === tz && null === Hz;
      if (null === pz) return null;
      const wz = null !== Zz.detail ? iz(Zz.detail) : null !== (uz = lz.plan) && void 0 !== uz && uz.ctrl ? iz("buildAFactory2Game:lookPlanCtrl") : null !== pz.detail ? iz(pz.detail, null === pz.detailItem ? void 0 : {
        item: iz(pz.detailItem)
      }) : null;
      return (0, Ti.jsxs)("div", {
        className: xn()("Baf2LookTarget", {
          Visible: Kz
        }),
        "aria-hidden": !Kz,
        children: [(0, Ti.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: iz(pz.name)
        }), null !== lz.plan && (0, Ti.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iz(lz.plan.key, {
            kind: iz(lz.plan.kindKey),
            w: String(lz.plan.w),
            h: String(lz.plan.h),
            d: String(lz.plan.d),
            count: String(lz.plan.count)
          })
        }), void 0 !== (null === (bz = lz.plan) || void 0 === bz ? void 0 : bz.why) && (0, Ti.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: iz(lz.plan.why)
        }), null !== Zz.mode && (0, Ti.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iz(Zz.mode)
        }), null !== dz ? (0, Ti.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: iz(dz.key, {
            item: iz(dz.needed),
            yM: null === dz.yM ? "" : iz(dz.yM)
          })
        }) : null !== Fz ? (0, Ti.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iz(Fz.key, tH(iz, Fz))
        }) : null !== wz && (0, Ti.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: wz
        }), Rz.length > 0 && (0, Ti.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iz("buildAFactory2Game:lookAtomicRecipes", {
            list: Rz.map((zz => {
              let {
                output: uz,
                inputs: bz
              } = zz;
              const Ez = bz.length > 1 ? ` ${iz("buildAFactory2Game:recipeMore",{count:String(bz.length-1)})}` : "";
              return `${iz(ii(bz[0]))}${Ez} \u2192 ${iz(ii(uz))}`
            })).join(", ")
          })
        }), null !== Zz.next && (0, Ti.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iz(Zz.next, {
            state: null === Zz.nextState ? "" : iz(Zz.nextState),
            use: iz(Oz ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var sw = bz(37901);
    const rw = [],
      ow = [
        [0, -1, 0]
      ];

    function Nw(zz) {
      const uz = [zz];
      for (let bz = 1; bz <= 4; bz++) bz > 1 && uz.push(`${zz}|meta|rot${bz}`), uz.push(`${zz}|meta|rot${bz}|Running`);
      return uz
    }

    function vw(zz, uz) {
      return [Math.floor(zz[0] / uz), Math.floor(zz[1] / uz), Math.floor(zz[2] / uz)]
    }

    function xw(zz, uz, bz) {
      return `${zz},${uz},${bz}`
    }

    function Jw(zz) {
      const uz = zz.split("|")[0];
      if (!Hb(uz)) return rw;
      const bz = Vu[uz];
      if (ub(bz)) return ow;
      const Ez = vK(zz);
      return bb(bz) ? [
        [-Ez[0], -Ez[1], -Ez[2]]
      ] : Jn(bz) ? function(zz, uz) {
        const bz = zz[0] - 2 * uz[0],
          Ez = zz[2] - 2 * uz[2],
          nz = [];
        for (let iz = -1; iz <= 1; iz++)
          for (let uz = -1; uz <= 1; uz++) nz.push([bz + iz, zz[1], Ez + uz]);
        return nz
      }([0, 0, 0], Ez) : rw
    }
    const Aw = [.5, .5, .5],
      Tw = [.2, .8, .3],
      Lw = [.45, 1, .5];
    class Pw {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(zz) {
        this.indexed = !0;
        for (const uz of Au)
          for (const bz of Nw(uz)) {
            const uz = zz.blockNameToBlockId(bz, !0),
              Ez = Jw(bz);
            null !== uz && Ez.length > 0 && (this.offsetsList.push(Ez), this.offsetsIndexById[uz] = this.offsetsList.length)
          }
      }
      onAfterRender(zz, uz) {
        this.indexed || this.index(zz);
        const bz = performance.now();
        if (bz - this.lastCheckMs < 100) return;
        this.lastCheckMs = bz, this.checks++;
        const Ez = KZ.e.IZ,
          [nz, iz, lz] = vw(uz, Ez);
        let Mz = !1;
        const tz = [];
        let Hz = 0;
        for (let Oz = nz - 2; Oz <= nz + 2; Oz++)
          for (let uz = iz - 1; uz <= iz + 1; uz++)
            for (let nz = lz - 2; nz <= lz + 2; nz++) {
              const iz = Hz++,
                lz = xw(Oz, uz, nz),
                pz = zz.getChunkVersion(Oz, uz, nz);
              let dz = this.chunks.get(lz);
              null !== pz ? (dz || (dz = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(lz, dz)), dz.seenAt = this.checks, dz.checkedVersion !== pz && (dz.checkedVersion = pz, Mz = !0), dz.scannedVersion !== pz && bz - dz.scannedAt >= 500 && tz.push({
                slot: iz,
                entry: dz,
                origin: [Oz * Ez, uz * Ez, nz * Ez]
              })) : (Mz ||= void 0 !== dz, this.chunks.delete(lz))
            }
        this.scanDue(zz, tz) && (Mz = !0);
        for (const [Oz, pz] of this.chunks) pz.seenAt !== this.checks && (Mz ||= pz.machines.length > 0, this.chunks.delete(Oz));
        for (const Oz of this.chunks.values())
          for (const [uz, bz, Ez] of Oz.cellChunks)(Math.abs(uz - nz) > 2 || Math.abs(bz - iz) > 1 || Math.abs(Ez - lz) > 2) && this.watchCellChunk(zz, uz, bz, Ez) && (Mz = !0);
        for (const [Oz, pz] of this.cellChunks) pz.seenAt !== this.checks && this.cellChunks.delete(Oz);
        Mz && this.refresh(zz)
      }
      dispose(zz) {
        this.clearMeshes(zz), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(zz, uz) {
        const bz = Math.max(uz.findIndex((zz => {
          let {
            slot: uz
          } = zz;
          return uz >= this.scanFrom
        })), 0);
        let Ez = 96;
        for (let nz = 0; nz < uz.length; nz++) {
          const {
            slot: iz,
            entry: lz,
            origin: Mz
          } = uz[(bz + nz) % uz.length];
          if (Ez -= this.scan(zz, lz, Mz), Ez <= 0) {
            this.scanFrom = iz + 1;
            break
          }
        }
        return uz.length > 0
      }
      scan(zz, uz, bz) {
        let [Ez, nz, iz] = bz;
        const lz = KZ.e.IZ,
          Mz = this.hits;
        Mz.length = 0;
        const tz = zz.scanBlocks(Ez, nz, iz, Ez + lz, nz + lz, iz + lz, this.offsetsIndexById, Mz),
          Hz = [];
        for (let Oz = 0; Oz < Mz.length; Oz += 4) Hz.push({
          pos: [Mz[Oz], Mz[Oz + 1], Mz[Oz + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[Mz[Oz + 3]] - 1]
        });
        return uz.machines = Hz, uz.cellChunks = function(zz, uz) {
          const bz = new Set,
            Ez = [];
          for (const {
              pos: nz,
              offsets: iz
            }
            of zz)
            for (const [zz, lz, Mz] of iz) {
              const iz = vw([nz[0] + zz, nz[1] + lz, nz[2] + Mz], uz),
                tz = xw(...iz);
              bz.has(tz) || (bz.add(tz), Ez.push(iz))
            }
          return Ez
        }(Hz, lz), uz.scannedVersion = uz.checkedVersion, uz.scannedAt = performance.now(), Math.max(tz, 1)
      }
      watchCellChunk(zz, uz, bz, Ez) {
        const nz = xw(uz, bz, Ez),
          iz = zz.getChunkVersion(uz, bz, Ez),
          lz = this.cellChunks.get(nz);
        return null === iz ? this.cellChunks.delete(nz) : (null === lz || void 0 === lz ? void 0 : lz.version) === iz ? (lz.seenAt = this.checks, !1) : (this.cellChunks.set(nz, {
          version: iz,
          seenAt: this.checks
        }), !0)
      }
      refresh(zz) {
        const uz = function(zz, uz) {
            const bz = new Set,
              Ez = [];
            for (const {
                pos: nz,
                offsets: iz
              }
              of zz)
              for (const [zz, lz, Mz] of iz) {
                const iz = nz[0] + zz,
                  tz = nz[1] + lz,
                  Hz = nz[2] + Mz,
                  Oz = `${iz},${tz},${Hz}`;
                bz.has(Oz) || (bz.add(Oz), uz(iz, tz, Hz) && Ez.push([iz, tz, Hz]))
              }
            return Ez
          }([...this.chunks.values()].flatMap((zz => zz.machines)), ((uz, bz, Ez) => zz.isBlockInLoadedChunk(uz, bz, Ez) && 0 === zz.getBlockId(uz, bz, Ez))),
          bz = uz.join(";");
        bz !== this.shownKey && (this.shownKey = bz, this.clearMeshes(zz), uz.length > 0 && (this.meshes = [this.build(zz, uz, !1), this.build(zz, uz, !0)]))
      }
      build(zz, uz, bz) {
        const Ez = uz[0],
          nz = [],
          iz = [];
        for (const [lz, Mz, tz] of uz)(0, sw.c)(nz, iz, [lz - Ez[0] + .5, Mz - Ez[1] + .5, tz - Ez[2] + .5], Aw, bz);
        return zz.createGameMesh({
          positions: nz,
          indices: iz
        }, {
          rgb: bz ? Lw : Tw,
          alpha: .4
        }, Ez)
      }
      clearMeshes(zz) {
        for (const uz of this.meshes) zz.disposeGameMesh(uz);
        this.meshes = []
      }
    }
    const Gw = 1 / .6,
      aw = 200,
      Vw = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      mw = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      qw = 2 * Math.PI / 3;
    class hw {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vw;
        this.style = zz, this.particles = null, this.points = new Float32Array(800), this.budget = aw, this.lastMs = 0
      }
      static blade() {
        return new hw(mw)
      }
      Ws(zz, uz) {
        const bz = Math.min(uz.arcStruck, uz.arcPoints.length);
        this.draw(zz, [uz.arcFrom, ...uz.arcPoints], uz.arcPoints.slice(0, bz))
      }
      onBlade(zz, uz) {
        const [bz, Ez, nz] = uz.bladeCentre, [iz, lz] = uz.bladeFacing, Mz = bz - 1.5 * iz, tz = nz - 1.5 * lz, Hz = Math.atan2(lz, iz), Oz = [];
        for (let pz = 0; pz <= 8; pz++) {
          const zz = Hz - qw / 2 + qw * pz / 8;
          Oz.push([Mz + 2.5 * Math.cos(zz), Ez, tz + 2.5 * Math.sin(zz)])
        }
        this.draw(zz, Oz, uz.bladeStruck)
      }
      dispose() {
        var zz;
        null === (zz = this.particles) || void 0 === zz || zz.stop(), this.particles = null
      }
      draw(zz, uz, bz) {
        if (!zz.particlesEnabled() || uz.length < 2) return;
        const Ez = performance.now();
        this.budget = Math.min(aw, this.budget + (Ez - this.lastMs) / 1e3 * aw), this.lastMs = Ez;
        const nz = [];
        let iz = 0,
          lz = uz[0];
        for (const wz of uz.slice(1)) {
          const zz = Math.min(48, Math.round(Math.hypot(wz[0] - lz[0], wz[1] - lz[1], wz[2] - lz[2]) * this.style.perBlock));
          nz.push([lz, wz, zz]), iz += zz, lz = wz
        }
        const Mz = bz.length;
        iz += 10 * Mz;
        const tz = iz > this.budget ? this.budget / iz : 1;
        if (0 === iz || tz * iz < 1) return;
        const Hz = uz[0],
          [Oz, pz, dz] = Hz,
          Fz = this.points;
        let Zz = 0;
        const Rz = (zz, uz, bz, Ez) => {
          const nz = 4 * Zz;
          Fz[nz] = zz - Oz, Fz[nz + 1] = uz - pz, Fz[nz + 2] = bz - dz, Fz[nz + 3] = Ez, Zz++
        };
        nz.forEach(((zz, uz) => {
          let [bz, Ez, nz] = zz;
          const iz = Math.min(Math.floor(nz * tz), aw - Zz),
            lz = Math.hypot(Ez[0] - bz[0], Ez[1] - bz[1], Ez[2] - bz[2]),
            Mz = 0 === uz && lz > 0 ? Math.min(.5, .1 * lz) / lz : 0;
          for (let tz = 0; tz < iz; tz++) {
            const zz = Mz + (tz + .5) / iz * (1 - Mz);
            Rz(bz[0] + (Ez[0] - bz[0]) * zz, bz[1] + (Ez[1] - bz[1]) * zz, bz[2] + (Ez[2] - bz[2]) * zz, .15)
          }
        }));
        const Kz = Math.floor(10 * tz);
        for (let wz = 0; wz < Mz; wz++) {
          const [zz, uz, Ez] = bz[wz];
          for (let bz = 0; bz < Kz && Zz < aw; bz++) Rz(zz, uz, Ez, 2.5)
        }
        this.budget -= Zz, this.particles ??= zz.createParticles(function(zz) {
          const [uz, bz] = zz.colours;
          return {
            texture: "square_particle",
            Bp: 400,
            minLifeTime: zz.life[0] / Gw,
            maxLifeTime: zz.life[1] / Gw,
            minSize: zz.size[0],
            maxSize: zz.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [uz[0], uz[1], uz[2], 1],
              maxColor: [bz[0], bz[1], bz[2], 1]
            }, {
              timeFraction: 1,
              minColor: [uz[0], uz[1], uz[2], 0],
              maxColor: [bz[0], bz[1], bz[2], 0]
            }],
            blendMode: cM.d.Add
          }
        }(this.style), {
          pos: Hz
        }), this.particles.emitPoints(Hz, Fz, Zz)
      }
    }
    const Uw = new Set(["Sky Spring"]);

    function gw(zz, uz, bz) {
      const Ez = zz.split("|")[0];
      return "Air" !== uz || bz || ! function(zz) {
        const uz = zz.split("|")[0];
        return void 0 !== lb[uz] || Uw.has(uz)
      }(Ez) ? null : zz
    }
    class Sw {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(zz) {
        const uz = zz - this.lastTapAt >= 300;
        return this.lastTapAt = zz, uz
      }
    }
    class yw {
      constructor() {
        this.presses = new Sw, this.predicted = null
      }
      tap(zz, uz) {
        const bz = this.presses.isNewPress(uz);
        return bz && (this.predicted = {
          station: zz,
          at: uz
        }), bz
      }
      consumeServerOpen(zz, uz) {
        const bz = this.predicted;
        return !(null === bz || bz.station !== zz || uz - bz.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Dw {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(zz, uz) {
        return zz && (this.thrustAt = uz), uz - this.thrustAt < 200
      }
    }
    const Qw = [.1, .05, .1],
      Ww = {
        texture: "effect_5",
        Bp: Math.ceil(48),
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
        blendMode: cM.d.OneOne
      };
    class ew {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Dw, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      Ws(zz, uz) {
        for (const [bz, Ez] of uz.baf2JetFlames) zz.isLocalPlayer(bz) || (Ez ? this.lit.add(bz) : this.lit.delete(bz))
      }
      onAfterRender(zz, uz) {
        const bz = performance.now(),
          Ez = this.hold.lit(this.selfThrusting(zz, uz), bz);
        for (const [nz, iz] of this.flames)(nz === uz ? Ez : this.lit.has(nz)) || this.setEmitting(iz, !1), nz === uz || zz.getPositionView(nz) ? !iz.emitting && bz - iz.offAt >= 1300 && (iz.particles.stop(), this.flames.delete(nz)) : (iz.particles.dispose(), this.flames.delete(nz), this.lit.delete(nz));
        Ez && this.draw(zz, uz, uz);
        for (const nz of this.lit) this.draw(zz, uz, nz)
      }
      dispose() {
        for (const zz of this.flames.values()) zz.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(zz, uz) {
        var bz;
        const Ez = zz.getLocalPlayerMovement();
        return !!Ez && (null !== (nz = {
          option: null !== (bz = zz.getClientOption(uz, "jumpHoldThrust")) && void 0 !== bz ? bz : null,
          jumping: Ez.jumpHeld,
          onGround: Ez.onGround,
          alive: zz.isAlive(uz)
        }).option && nz.option.maxUpSpeed >= 0 && nz.jumping && !nz.onGround && nz.alive);
        var nz
      }
      draw(zz, uz, bz) {
        var Ez, nz;
        const iz = this.pos;
        if (!zz.readDrawnPosition(bz, iz)) return;
        const lz = zz.readDrawnPosition(uz, this.camera) ? this.camera : iz;
        if (!((iz[0] - lz[0]) ** 2 + (iz[1] - lz[1]) ** 2 + (iz[2] - lz[2]) ** 2 < 1600) || !zz.particlesEnabled()) {
          const zz = this.flames.get(bz);
          return void(zz && this.setEmitting(zz, !1))
        }
        const Mz = null !== (Ez = this.flames.get(bz)) && void 0 !== Ez ? Ez : this.create(zz, bz, iz),
          tz = null !== (nz = zz.getDrawnHeading(bz)) && void 0 !== nz ? nz : 0,
          Hz = this.at;
        Hz[0] = iz[0] - .35 * Math.sin(tz), Hz[1] = iz[1] + 1.05, Hz[2] = iz[2] - .35 * Math.cos(tz), Mz.particles.moveTo(Hz), this.setEmitting(Mz, !0)
      }
      setEmitting(zz, uz) {
        zz.emitting !== uz && (zz.emitting = uz, uz || (zz.offAt = performance.now()), zz.particles.setEmitRate(uz ? 60 : 0))
      }
      create(zz, uz, bz) {
        const Ez = {
          particles: zz.createParticles(Ww, {
            pos: bz,
            half: Qw
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(uz, Ez), Ez
      }
    }

    function jw(zz) {
      return "Reactor Frame" === EE("reactor", zz)
    }

    function Iw(zz) {
      return Ub("reactor", zz) && !jw(zz) && (zz.startsWith("Reactor Glass") || zz.startsWith("Reactor Port"))
    }
    const Bw = "baf2Goal";
    class Cw {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [qn.k.subscribe("setDirectionArrow", (zz => {
          let {
            id: uz,
            position: bz
          } = zz;
          uz === Bw && (this.goal = bz, this.checkedAt = -1 / 0)
        })), qn.k.subscribe("clearDirectionArrow", (zz => {
          let {
            id: uz
          } = zz;
          null !== uz && uz !== Bw || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const zz of this.subs) qn.k.unsubscribe(zz)
      }
      sideOf(zz, uz, bz, Ez) {
        const nz = this.goal;
        if (!nz) return 0;
        bz - this.checkedAt > 1e3 && (this.checkedAt = bz, this.open = function(zz, uz) {
          const [bz, Ez, nz] = zz.map(Math.floor);
          if (!Iw(uz(bz, Ez, nz))) return null;
          for (const [iz, lz] of [
              [1, 0],
              [0, 1]
            ]) {
            const zz = uz(bz + iz, Ez, nz + lz),
              Mz = uz(bz - iz, Ez, nz - lz);
            if (jw(Mz) && Iw(zz)) return [iz, 0, lz];
            if (jw(zz) && Iw(Mz)) return [0 - iz, 0, 0 - lz]
          }
          return null
        }(nz, ((uz, bz, Ez) => zz.blockIdToBlockName(zz.getBlockId(uz, bz, Ez)))));
        const iz = this.open;
        if (!iz) return 0;
        const lz = Ez(nz);
        if (Math.abs(lz.x - uz.x) > .05 || Math.abs(lz.y - uz.y) > .05) return 0;
        const Mz = Ez([nz[0] + iz[0], nz[1], nz[2] + iz[2]]).x - lz.x;
        return Math.abs(Mz) < .3 ? 0 : Mz > 0 ? 1 : -1
      }
    }
    class Yw {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Cw, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.SZ = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Fs = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((zz => {
          for (const uz of zz) uz.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(uz.target, uz.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.SZ || this.clear()
        }, window.addEventListener("resize", this.Fs)
      }
      onAfterRender(zz, uz) {
        var bz;
        this.api = zz, this.project = null !== (bz = null === uz || void 0 === uz ? void 0 : uz.projectWorldPosToScreenPos) && void 0 !== bz ? bz : null, this.queued || this.SZ || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.SZ = !0;
        for (const zz of this.moved.keys()) zz.style.transform = "";
        this.moved.clear();
        for (const zz of this.sideLabels.keys()) zz.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Fs)
      }
      clear() {
        for (const iz of this.moved.keys()) iz.isConnected || this.moved.delete(iz);
        for (const iz of this.sideLabels.keys()) iz.isConnected || this.sideLabels.delete(iz);
        if (0 === this.arrows.length) return;
        const zz = performance.now(),
          uz = zz - this.refreshedAt > 1e3;
        uz && (this.refreshedAt = zz, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const bz = this.trackerBox(),
          Ez = this.barsBox(),
          nz = this.toastBox(uz);
        (bz || Ez || nz) && uz && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let iz = 0; iz < this.arrows.length; iz++) {
          const uz = this.arrows[iz];
          this.labelOffsets.set(uz, this.runLabelAside(uz, zz));
          const lz = (bz ? this.shiftLeftOf(uz, bz) : 0) || this.shiftOnScreen(uz),
            Mz = Math.min(Ez ? this.liftAbove(uz, Ez, lz) : 0, nz ? this.liftAbove(uz, nz, lz) : 0),
            tz = this.moved.get(uz);
          if (0 !== lz || 0 !== Mz) {
            const zz = 0 === Mz ? `translateX(${lz}px)` : `translate(${lz}px, ${Mz}px)`;
            tz !== zz && (uz.style.transform = zz, this.moved.set(uz, zz))
          } else void 0 !== tz && (uz.style.transform = "", this.moved.delete(uz))
        }
      }
      trackerBox() {
        var zz, uz;
        const bz = null !== (zz = this.tracker) && void 0 !== zz && zz.isConnected ? this.tracker : null !== (uz = this.trackers[0]) && void 0 !== uz ? uz : null;
        if (bz !== this.tracker && this.watch(bz), this.boxStale && bz) {
          var Ez, nz, iz;
          this.boxStale = !1;
          const zz = bz.closest(".NoRoom") ? null : bz.getBoundingClientRect(),
            uz = zz && zz.width > 0 ? null === (Ez = this.hud) || void 0 === Ez ? void 0 : Ez.getBoundingClientRect() : void 0,
            lz = zz && uz ? Math.max(zz.top, uz.top) : null !== (nz = null === zz || void 0 === zz ? void 0 : zz.top) && void 0 !== nz ? nz : 0,
            Mz = zz && uz ? Math.min(zz.bottom, uz.bottom) : null !== (iz = null === zz || void 0 === zz ? void 0 : zz.bottom) && void 0 !== iz ? iz : 0;
          this.box = zz && zz.width > 0 && Mz > lz ? {
            left: zz.left,
            top: lz,
            right: zz.right,
            bottom: Mz
          } : null
        }
        return bz ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var zz;
          this.barsStale = !1;
          const uz = null === (zz = this.statBars[0]) || void 0 === zz ? void 0 : zz.getBoundingClientRect();
          this.bars = uz && uz.width > 0 && uz.height > 0 ? {
            left: uz.left,
            top: uz.top,
            right: uz.right,
            bottom: uz.bottom
          } : null
        }
        return this.bars
      }
      toastBox(zz) {
        var uz;
        const bz = null !== (uz = this.toasts[0]) && void 0 !== uz ? uz : null;
        if (bz !== this.toastEl || zz && bz) {
          this.toastEl = bz;
          const zz = null === bz || void 0 === bz ? void 0 : bz.getBoundingClientRect();
          this.toast = zz && zz.width > 0 && zz.height > 0 ? {
            left: zz.left,
            top: zz.top,
            right: zz.right,
            bottom: zz.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(zz, uz, bz) {
        var Ez;
        const nz = this.anchorOf(zz);
        if (!nz) return 0;
        const iz = nz.x + bz + (null !== (Ez = this.labelOffsets.get(zz)) && void 0 !== Ez ? Ez : 0),
          {
            halfWidth: lz,
            labelled: Mz
          } = this.extentOf(zz),
          tz = nz.y + this.em * (Mz ? 6.2 : 3);
        return tz < uz.top - 6 || iz + lz < uz.left - 6 || iz - lz > uz.right + 6 ? 0 : uz.top - 6 - tz
      }
      watch(zz) {
        var uz, bz;
        this.tracker && this.sizes.unobserve(this.tracker), null === (uz = this.hud) || void 0 === uz || uz.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = zz, this.hud = null !== (bz = null === zz || void 0 === zz ? void 0 : zz.closest(".Baf2QuestHud")) && void 0 !== bz ? bz : null, this.box = null, this.boxStale = !0, zz && this.sizes.observe(zz), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(zz, uz) {
        var bz;
        const Ez = this.anchorOf(zz);
        if (!Ez) return 0;
        const {
          y: nz
        } = Ez, iz = Ez.x + (null !== (bz = this.labelOffsets.get(zz)) && void 0 !== bz ? bz : 0), lz = this.em, {
          halfWidth: Mz,
          labelled: tz
        } = this.extentOf(zz), Hz = nz - lz, Oz = iz + Mz;
        return nz + lz * (tz ? 6.2 : 3) < uz.top || Hz > uz.bottom || Oz < uz.left - 6 || iz - Mz > uz.right ? 0 : Math.max(uz.left - 6 - Oz, 6 - (iz - Mz))
      }
      shiftOnScreen(zz) {
        var uz;
        const bz = this.anchorOf(zz);
        if (!bz) return 0;
        const {
          halfWidth: Ez
        } = this.extentOf(zz), nz = bz.x + (null !== (uz = this.labelOffsets.get(zz)) && void 0 !== uz ? uz : 0), iz = nz + Ez - (this.innerWidth - 6);
        return iz > 0 ? -iz : Math.max(0, 6 - (nz - Ez))
      }
      runLabelAside(zz, uz) {
        var bz;
        let Ez = null;
        for (let lz = 0; lz < zz.children.length; lz++) zz.children[lz].classList.contains("DirectionArrowLabel") && (Ez = zz.children[lz]);
        if (!Ez) return 0;
        const nz = zz.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(zz) : null,
          iz = (nz && this.api ? this.side.sideOf(this.api, {
            x: nz.x / this.innerWidth * 100,
            y: nz.y / this.innerHeight * 100
          }, uz, this.project) : 0) * this.halfWidthOf(Ez);
        return iz !== (null !== (bz = this.sideLabels.get(Ez)) && void 0 !== bz ? bz : 0) && (Ez.style.transform = 0 === iz ? "" : `translateX(-50%) translateX(${iz}px)`, 0 === iz ? this.sideLabels.delete(Ez) : this.sideLabels.set(Ez, iz)), iz
      }
      extentOf(zz) {
        let uz = this.em,
          bz = !1;
        for (let Ez = 0; Ez < zz.children.length; Ez++) {
          const nz = zz.children[Ez],
            iz = nz.classList.contains("DirectionArrowLabel");
          bz ||= iz, (iz || nz.classList.contains("DirectionArrowDistance")) && (uz = Math.max(uz, this.halfWidthOf(nz)))
        }
        return {
          halfWidth: uz,
          labelled: bz
        }
      }
      halfWidthOf(zz) {
        let uz = this.halfWidths.get(zz);
        return void 0 === uz && (uz = zz.offsetWidth / 2, this.halfWidths.set(zz, uz), this.sizes.observe(zz), this.labels.add(zz)), uz
      }
      forgetGoneLabels() {
        for (const zz of this.labels) zz.isConnected || (this.sizes.unobserve(zz), this.halfWidths.delete(zz), this.labels.delete(zz))
      }
      anchorOf(zz) {
        const uz = zz.style.translate,
          bz = this.anchors.get(zz);
        if (bz && bz.translate === uz && bz.innerWidth === this.innerWidth && bz.innerHeight === this.innerHeight) return bz;
        const Ez = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(uz);
        if (!Ez) return null;
        const nz = {
          translate: uz,
          x: parseFloat(Ez[1]) / 100 * this.innerWidth,
          y: parseFloat(Ez[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(zz, nz), nz
      }
    }
    const kw = "Baf2ArrowText";

    function zX(zz, uz) {
      const bz = zz.rows.find((zz => zz.current));
      return az(zz.tutorial) && null !== bz && void 0 !== bz && bz.item && en(bz) && Tz(bz.item).includes(uz) ? bz.item : null
    }
    const uX = new class {
      constructor(zz) {
        this.select = zz, this.picks = new Map
      }
      open(zz, uz, bz) {
        const Ez = zX(uz, zz);
        null !== Ez && this.NF(zz, Ez, bz)
      }
      follow(zz, uz) {
        if (Mz())
          for (const [bz, {
              item: Ez,
              had: nz
            }] of this.picks) {
            const iz = zX(zz, bz);
            iz !== Ez && (null !== iz && uz(Ez) > nz ? this.NF(bz, iz, uz) : this.picks.delete(bz))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      NF(zz, uz, bz) {
        this.picks.set(zz, {
          item: uz,
          had: bz(uz)
        }), this.select(zz, uz)
      }
    }(hn.p);

    function bX(zz) {
      return uz => {
        let bz = 0;
        for (const Ez of zz.getInventoryItems())(null === Ez || void 0 === Ez ? void 0 : Ez.name) === uz && (bz += null === Ez.amount ? 1 : Math.max(Ez.amount, 0));
        return bz
      }
    }

    function EX(zz, uz, bz, Ez) {
      zz.getClientOption(uz, "canCraft") && "inventory" !== rn.e.get("openInGameMenuName") && (uX.open(bz, Ez.get(), bX(zz)), qn.k.sK("toggleMenu", `inventory|${bz}`))
    }
    let nX = null,
      iX = !1;

    function lX(zz) {
      const uz = Ji();
      zz === nX && uz === iX || (nX = zz, iX = uz, (0, hn.t)(function(zz, uz) {
        const bz = new Map;
        for (let Ez = zz + 1; Ez <= nz.length; Ez++) {
          const nz = Bi(Ez, zz, uz);
          if (nz)
            for (const uz of wz(Ez).unlocks) bz.set(uz, {
              ...nz,
              stepsAway: Ez - zz
            })
        }
        return bz
      }(zz, uz)))
    }

    function MX() {
      return (0, hn.B)(Ii(Object.keys(Az), Di)), () => {
        (0, hn.B)([])
      }
    }
    const tX = "buildAFactory2Game:",
      HX = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      OX = {
        on: `${tX}tutorialButtonOn`,
        hud: `${tX}tutorialButtonHud`,
        off: `${tX}tutorialButtonOff`
      },
      pX = {
        on: `${tX}tutorialPickedOn`,
        hud: `${tX}tutorialPickedHud`,
        off: `${tX}tutorialPickedOff`
      };

    function dX(zz, uz, bz) {
      let Ez = null,
        nz = () => {};
      const iz = iz => {
        var lz;
        let {
          tutorial: Mz,
          tutorialKnown: tz
        } = iz;
        (null === (lz = Ez) || void 0 === lz ? void 0 : lz.tutorial) === Mz && Ez.tutorialKnown === tz || (Ez = {
          tutorial: Mz,
          tutorialKnown: tz
        }, nz = (0, fn.q)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: OX[Mz],
          icon: {
            kind: "icon",
            name: HX[Mz]
          },
          iconOnly: !0,
          disabled: !tz,
          className: "Baf2TutorialButton",
          onClick: () => {
            var Ez;
            (Ez => {
              const nz = uz.setTutorial(Ez);
              zz.send(`baf2tutorial ${Ez} ${nz}`), bz.show({
                baf2ToastText: [(0, Vz.Zd)({
                  translationKey: pX[Ez]
                }, Vz.N.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((Ez = uz.get().tutorial, Gz[(Gz.indexOf(Ez) + 1) % Gz.length]))
          }
        }))
      };
      iz(uz.get());
      const lz = qn.k.subscribe(Un, iz);
      return () => {
        qn.k.unsubscribe(lz), nz()
      }
    }

    function FX(zz, uz, bz) {
      var Ez, nz;
      const iz = zz.getTargetedBlock();
      if (!iz || ! function(zz, uz, bz) {
          if ("Chest" !== uz) return !1;
          const Ez = zz.split("|")[0];
          if (!Hb(Ez) || 0 === Vu[Ez].outputSlots.length) return !1;
          const nz = vK(zz);
          return bz[0] === nz[0] && bz[1] === nz[1] && bz[2] === nz[2]
        }(bz, null === (Ez = zz.luz(uz)) || void 0 === Ez ? void 0 : Ez.name, iz.normal)) return !1;
      const [lz, Mz, tz] = iz.ol, Hz = zz.getBlockId(lz, Mz, tz);
      return 0 === Hz || !0 === (null === (nz = Pz.k[Hz]) || void 0 === nz ? void 0 : nz.canBePlacedOver)
    }
    var ZX = bz(36191);
    const RX = new Set(Rb.b);
    class KX {
      constructor(zz) {
        this.toasts = zz, this.lastAt = -1 / 0
      }
      onAltAction(zz, uz, bz) {
        const Ez = zz.getTargetedBlock();
        if (!Ez || function(zz) {
            const uz = zz.split("|")[0];
            return Hb(uz) || null !== NE(uz) || xz(uz) || Rb.b.includes(uz)
          }(bz) && !RX.has(bz.split("|")[0])) return;
        const nz = zz.luz(uz);
        if (!nz || !RX.has(nz.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const iz = nz.typeObj.id,
          [lz, Mz, tz] = Ez.ol,
          Hz = zz.getBlockId(lz, Mz, tz),
          Oz = Pz.k[Hz];
        (0 === Hz || null !== Oz && void 0 !== Oz && Oz.hF || null !== Oz && void 0 !== Oz && Oz.canBePlacedOver) && zz.isSolidToPlayerBlockId(iz) && zz.canModifyBlockAt(lz, Mz, tz) && zz.szz(lz, Mz, tz, iz) && !zz.szz(lz, Mz, tz, iz, uz) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Vz.Zd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Vz.N.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class wX {
      constructor(zz) {
        this.show = zz, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(zz, uz, bz) {
        var Ez;
        if (!uz) return this.started = null, void this.gatedThisHold.clear();
        if (!zz) return void(this.started = null);
        const nz = `${zz.x},${zz.y},${zz.z},${zz.yM}`;
        if (nz === this.started) return;
        this.started = nz;
        const iz = hE(zz.y) ? lw(zz.block, zz.yM, zz.level) : null;
        if (null === iz || this.gatedThisHold.has(nz)) return;
        this.gatedThisHold.add(nz);
        const lz = zz.block.split("|")[0];
        bz - (null !== (Ez = this.hintedAt.get(lz)) && void 0 !== Ez ? Ez : -1 / 0) < 5e3 || (this.hintedAt.set(lz, bz), this.show({
          baf2ToastText: Mw(iz, zz.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var XX = bz(33);

    function fX(zz, uz) {
      const bz = [...zz.baf2CoreBankPaused];
      for (const [nz] of zz.baf2CoreBanked) bz.push(nz);
      for (const lz of nz) {
        for (const {
            item: zz
          }
          of lz.cost) bz.push(zz);
        for (const zz of lz.newDeposits) bz.push(zz.block);
        for (const zz of lz.unlocks) bz.push(zz, Lz(zz));
        lz.reward && bz.push(lz.reward);
        for (const {
            item: zz
          }
          of null !== (Ez = null === (iz = lz.charge) || void 0 === iz ? void 0 : iz.items) && void 0 !== Ez ? Ez : []) {
          var Ez, iz;
          bz.push(zz)
        }
      }
      return {
        message: zz,
        itemNames: uz([...new Set(bz)])
      }
    }
    const sX = "baf2MultiblockGuide";
    const rX = new Map;
    const oX = function(zz, uz, bz, nz) {
      let {
        localPlayerId: iz
      } = nz;
      const lz = new sM,
        Mz = new iF,
        Hz = new dF,
        Oz = new OF(Hz),
        pz = (zz, uz) => {
          uz ? Oz.observe(zz) : Oz.unobserve(zz)
        },
        dz = new HF,
        Fz = new KF(pz),
        Zz = zz => Fz.covers(zz),
        Rz = new qF;
      let Kz;
      const wz = new Dl((zz => {
          Kz.sendCommand(zz)
        })),
        Xz = () => {
          wz.send("baf2questbook")
        },
        fz = zz => function(zz, uz, bz) {
          const Ez = {};
          for (const nz of bz) {
            let bz = rX.get(nz);
            void 0 === bz && (bz = zz.getItemStat(uz, nz, "displayName"), rX.set(nz, bz)), Ez[nz] = bz
          }
          return Ez
        }(Kz, iz, zz),
        sz = new Sn(Xz),
        rz = new jF((() => rn.e.get("loadingOverlayVisible"))),
        oz = new kF,
        Nz = new KX(rz),
        vz = new wX((zz => {
          rz.show(zz, zz.baf2ToastMs)
        })),
        Jz = new tZ(pz),
        Az = new VK(Jz),
        Tz = new Tl,
        Lz = new Ew,
        Gz = new lM,
        az = new RZ({
          read: () => !1 !== XX.g.getItem(sX),
          write: zz => {
            XX.g.setItem(sX, zz)
          }
        }),
        qz = new yZ(az),
        hz = new WZ(az),
        Uz = new FR(az, (zz => function(zz, uz) {
          const bz = Et(uz.w, uz.h, uz.d),
            Ez = new Uint8Array(bz);
          for (let nz = 0; nz < bz; nz++) {
            const bz = hZ(zz, Yb(uz, bE(uz, nz)));
            Ez[nz] = null === bz ? 0 : kM(bz)
          }
          return Ez
        }(Kz, zz)), nR(wz)),
        cz = new ZR(az, nR(wz)),
        gz = new pR,
        Sz = (zz, uz) => {
          let [bz, Ez, nz] = zz;
          gz.answered(uz) || rz.show({
            baf2ToastText: [(0, Vz.Zd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: bz,
                h: Ez,
                d: nz
              }
            }, Vz.N.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      Uz.onSizeNotTaken(Sz), cz.onSizeNotTaken(Sz);
      const Qz = new XR,
        Wz = new YR(az),
        ez = new zK,
        Iz = new pK(ez),
        Bz = new oK,
        Cz = new mK,
        kz = new WK(Cz),
        zu = new bw(Cz),
        uu = Cz.lookSource(),
        bu = new ww({
          handles: zz => uu.handles(zz) || zz === mz,
          line: (zz, uz) => zz === mz ? function(zz, uz, bz) {
            var Ez;
            const nz = Dz(null === (Ez = uz.at(bz)) || void 0 === Ez ? void 0 : Ez.item);
            return null === nz ? {
              key: `${Zw}lookFarmEmpty`
            } : {
              key: zz.blockIdToBlockName(zz.getBlockId(bz[0], bz[1], bz[2])).endsWith("|Running") ? `${Zw}lookFarmRunning` : `${Zw}lookFarmWaiting`,
              keys: {
                mob: yz(nz)
              }
            }
          }(Kz, Jz, uz) : uu.line(zz, uz),
          version: () => uu.version() + Jz.version()
        }, (zz => jZ(az.all(), zz, (zz => hZ(Kz, zz)))), (() => sz.get().tier)),
        Eu = new qR,
        nu = new Pw,
        iu = new hw,
        lu = hw.blade(),
        Mu = new ew,
        tu = new bZ,
        Hu = new Yw,
        Ou = new yw,
        du = new Sw;
      let Fu = -1 / 0,
        Zu = 0,
        Ru = -1 / 0,
        Ku = -1 / 0;
      const wu = () => {
          wz.send("baf2islandsclose"), Ku = Date.now()
        },
        Xu = [];

      function fu(zz) {
        var uz, bz, Ez, nz, iz, lz, tz;
        "core" === (null === (uz = Mz.get()) || void 0 === uz ? void 0 : uz.kind) && "core" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && wz.send("baf2coreclose"), "power" === (null === (bz = Mz.get()) || void 0 === bz ? void 0 : bz.kind) && "power" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && wz.send("baf2powerclose"), "water" === (null === (Ez = Mz.get()) || void 0 === Ez ? void 0 : Ez.kind) && "water" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && wz.send(Yz.t), "terminal" === (null === (nz = Mz.get()) || void 0 === nz ? void 0 : nz.kind) && "terminal" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && wz.send("baf2terminalclose"), "islands" === (null === (iz = Mz.get()) || void 0 === iz ? void 0 : iz.kind) && "islands" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && wu();
        const Hz = Cz.getStatus();
        "collider" === (null === (lz = Mz.get()) || void 0 === lz ? void 0 : lz.kind) && "collider" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && Hz && wz.send(St(Hz, "close"));
        const Oz = zz => "reactor" === zz || "battery" === zz;
        if (Oz(null === (tz = Mz.get()) || void 0 === tz ? void 0 : tz.kind) && !Oz(null === zz || void 0 === zz ? void 0 : zz.kind)) {
          var pz, dz, Fz;
          const zz = "reactor" === (null === (pz = Mz.get()) || void 0 === pz ? void 0 : pz.kind) ? null === (dz = Uz.get()) || void 0 === dz ? void 0 : dz.status.baf2RxAt : null === (Fz = cz.get()) || void 0 === Fz ? void 0 : Fz.status.baf2BatAt;
          zz && wz.send(pu(zz, "close"))
        }
        "quests" === (null === zz || void 0 === zz ? void 0 : zz.kind) && Xz(), Mz.set(zz), null === zz && oz.release()
      }

      function su() {
        (0, sn.i)(), fu(null)
      }
      let ru = new Set,
        ou = !1;
      const Nu = {
        onCreate: zz => {
          Kz = zz, Kz.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const uz of Au) {
            const zz = Vu[uz].inputSlots ? qM(lz) : aM(uz, lz, Tz, wz);
            Xu.push((0, Xn.e)(uz, zz))
          }
          Xu.push((0, sn.x)((0, Ez.createElement)(Ez.Fragment, null, (0, Ez.createElement)(fF, {
            controller: Fz
          }), (0, Ez.createElement)(pZ, {
            store: Jz
          }), (0, Ez.createElement)(fw, {
            store: bu
          }), (0, Ez.createElement)(WF, {
            store: sz
          }), (0, Ez.createElement)(CF, {
            store: rz
          }), (0, Ez.createElement)(zZ, {
            store: oz
          }), (0, Ez.createElement)(nZ, {
            store: tu
          }), (0, Ez.createElement)(wR, {
            store: Qz
          }), (0, Ez.createElement)(uK, {
            store: ez
          })), {
            content: (0, Ez.createElement)(lF, {
              commands: wz,
              store: Mz,
              power: Tz,
              water: Gz,
              reactor: Uz,
              battery: cz,
              collider: Cz,
              terminal: Lz,
              quests: sz,
              close: sn.l,
              leave: () => {
                oz.dropHeld(), (0, sn.i)()
              },
              askIslands: () => {
                Ku = -1 / 0, Fu = Date.now(), Zu = wz.send(jz)
              },
              openSocial: () => {
                (0, sn.i)(), rn.e.set({
                  openEverythingMenuName: pb.r.SOCIAL
                })
              },
              showCore: zz => {
                fu({
                  kind: "core",
                  core: zz
                }), wz.send("baf2corereopen")
              }
            }),
            onClose: () => {
              fu(null)
            }
          })), Xu.push((0, fn.q)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              fu({
                kind: "quests"
              }), (0, sn.p)()
            }
          })), Xu.push(dX(wz, sz, rz)), ou = !1, Xu.push(Ai((() => {
            null !== nX && lX(nX)
          }))), Xu.push(MX()), Xu.push(function() {
            const zz = qn.k.subscribe(Un, ui),
              uz = () => {
                if (zi) {
                  const zz = zi;
                  zi = null, (0, hn.x)(zz)
                }
              },
              bz = qn.k.subscribe("toggleMenu", (zz => {
                "inventory" === (null === zz || void 0 === zz ? void 0 : zz.split("|")[0]) && uz()
              })),
              Ez = qn.k.subscribe("appManagerUpdated|openInGameMenuName", (zz => {
                "inventory" === zz && uz()
              }));
            return () => {
              qn.k.unsubscribe(zz), qn.k.unsubscribe(bz), qn.k.unsubscribe(Ez)
            }
          }()), Xu.push(function(zz) {
            const uz = bX(zz),
              bz = qn.k.subscribe(Un, (zz => {
                uX.follow(zz, uz)
              }));
            return () => {
              qn.k.unsubscribe(bz), uX.clear()
            }
          }(Kz)), Xu.push(function() {
            const zz = document.documentElement,
              uz = (0, UF.e)(".InvenBodyRight", [], (() => {
                const uz = document.querySelector(".InvenBodyRight");
                uz && zz.style.setProperty("--baf2-backpack-width", `${uz.offsetWidth}px`)
              }));
            return () => {
              uz(), zz.style.removeProperty("--baf2-backpack-width")
            }
          }()), Xu.push(function() {
            const zz = document.documentElement;
            return zz.classList.add(kw), () => {
              zz.classList.remove(kw)
            }
          }()), Xu.push((() => {
            Oz.dispose(), Hz.dispose()
          })), Rz.start(Kz), Xu.push((() => {
            Rz.dispose(), Mu.dispose(), Az.dispose()
          }))
        },
        onClose: () => {
          (0, hn.x)([]), zi = null, kn = new Set, nX = null, (0, hn.t)(new Map), rX.clear();
          for (const zz of Xu) zz();
          sz.dispose(), bu.dispose(), rz.dispose(), oz.dispose(), Eu.dispose(), nu.dispose(Kz), qz.dispose(Kz), hz.dispose(Kz), Wz.dispose(Kz), Iz.dispose(Kz), ez.dispose(), Bz.dispose(), az.dispose(), Uz.dispose(), cz.dispose(), Qz.dispose(), iu.dispose(), lu.dispose(), tu.dispose(), kz.dispose(Kz), zu.dispose(Kz), Cz.dispose(), Hu.dispose(), wz.clear()
        },
        onAfterRender: (zz, uz) => {
          var bz, Ez, nz;
          try {
            Rz.onAfterRender(uz)
          } catch (Hz) {
            console.error("Error drawing BAF2 belt items", Hz)
          }
          try {
            Mu.onAfterRender(Kz, iz)
          } catch (Hz) {
            console.error("Error drawing BAF2 jet flames", Hz)
          }
          ou || (ou = !0, wz.send("baf2clientready"));
          const lz = Kz.getPositionView(iz);
          Fz.onAfterRender(uz, lz, dz), Jz.onAfterRender(uz, lz, dz, Zz), Oz.run(dz), Eu.onAfterRender(Kz, lz), nu.onAfterRender(Kz, lz), Az.onAfterRender(Kz, lz), qz.onAfterRender(Kz, lz), hz.onAfterRender(Kz, iz, lz), Wz.onAfterRender(Kz, iz, lz), Iz.onAfterRender(Kz, iz), Bz.onAfterRender(Kz, lz), sz.onPlayerY(lz[1]), kz.onAfterRender(Kz), zu.onAfterRender(Kz, iz, lz);
          const tz = Kz.getTargetedBlock();
          bu.onAfterRender(Kz, iz, null !== (bz = null === tz || void 0 === tz ? void 0 : tz.oB) && void 0 !== bz ? bz : 0, null !== (Ez = null === tz || void 0 === tz ? void 0 : tz.position) && void 0 !== Ez ? Ez : null), Hu.onAfterRender(Kz, uz), vz.onMining(function(zz, uz) {
            var bz, Ez;
            const nz = zz.getMiningBlock();
            if (!nz) return null;
            const iz = (0, Pz.g)(zz.getBlockId(nz[0], nz[1], nz[2])),
              lz = null !== (bz = null === (Ez = zz.luz(uz)) || void 0 === Ez ? void 0 : Ez.name) && void 0 !== bz ? bz : null,
              Mz = zz.getItemStat(uz, iz.split("|")[0], "harvestLevel");
            return {
              block: iz,
              x: nz[0],
              y: nz[1],
              z: nz[2],
              yM: lz,
              level: Mz
            }
          }(Kz, iz), Kz.isMining(), performance.now()), "dropMap" === (null === (nz = Mz.get()) || void 0 === nz ? void 0 : nz.kind) && hE(lz[1]) && su()
        },
        onPlayerChangeBlock: (zz, uz, bz, Ez, nz, lz) => {
          zz === iz && function(zz, uz, bz, Ez, nz, iz, lz) {
            const Mz = gw(iz, lz, zz.isPlayerCrouching(uz));
            if (null === Mz) return;
            if (zz.qJ(bz, Ez, nz, Mz), !zz.getClientOption(uz, "canPickUpItems")) return;
            const tz = lb[Mz.split("|")[0]];
            var Hz, Oz, pz;
            void 0 !== tz && (Hz = zz.getInventoryItems(), Oz = tz, pz = KZ.e.maxItemStackSize, zz.getInventoryFreeSlotCount(uz) > 0 || Hz.some((zz => null !== zz && zz.name === Oz && null !== zz.amount && zz.amount < pz))) && zz.playSound(uz, (0, ZX.d)("pickUp"), .5, 1)
          }(Kz, zz, uz, bz, Ez, nz, lz)
        },
        onPlayerAltAction: (zz, uz, bz, Ez, nz) => {
          var lz, Mz;
          if (!Kz.getClientOption(iz, "canPickUpItems")) return;
          const tz = null !== (lz = null === (Mz = Kz.luz(iz)) || void 0 === Mz ? void 0 : Mz.name) && void 0 !== lz ? lz : null,
            Hz = function(zz, uz) {
              const bz = zz.split("|")[0];
              return xz(bz) && uz !== Hn && "Sky Pack" !== uz ? bz : null
            }(nz, tz);
          if (null !== Hz) return void(Ou.tap(Hz, performance.now()) && EX(Kz, iz, Hz, sz));
          if (!SE(tz)) return;
          const Oz = du.isNewPress(performance.now()),
            pz = function(zz, uz, bz) {
              return !SE(uz) || bz ? null : CE(zz)
            }(nz, tz, Kz.isPlayerCrouching(iz));
          null !== pz && Oz && Kz.qJ(uz, bz, Ez, pz)
        },
        onPlayerAttemptAltAction: (zz, uz, bz, Ez, nz) => {
          if (function(zz, uz, bz, Ez, nz) {
              "Workbench" === Ez.split("|")[0] && zz.getClientOption(bz, "canCraft") && (uX.open("Workbench", nz.get(), bX(zz)), uz.send("baf2station Workbench"))
            }(Kz, wz, iz, nz, sz), FX(Kz, iz, nz)) return "preventAction";
          Nz.onAltAction(Kz, iz, nz)
        },
        onReceivedMessageFromServer: (zz, uz) => {
          if ("baf2MachineStatus" === zz) {
            var bz, Ez, nz, Hz, Oz, pz, dz, Zz, Xz, Nz, vz, xz, Az, Pz, Vz, mz;
            const zz = uz,
              iz = zz.baf2MachineTaught;
            lz.set(zz.baf2MachinePos, {
              status: zz.baf2MachineStatus,
              power: null !== (bz = zz.baf2MachinePower) && void 0 !== bz ? bz : null,
              opLeftMs: null !== (Ez = zz.baf2MachineOpLeftMs) && void 0 !== Ez ? Ez : null,
              dug: zz.baf2MachineYield ? {
                item: zz.baf2MachineYield,
                name: fz([zz.baf2MachineYield])[zz.baf2MachineYield]
              } : null,
              powerCap: null !== (nz = zz.baf2MachinePowerCap) && void 0 !== nz ? nz : null,
              powerRates: null !== (Hz = zz.baf2MachinePowerRates) && void 0 !== Hz ? Hz : null,
              coupled: !0 === zz.baf2MachineCoupled,
              couplerLevel: null !== (Oz = zz.baf2MachineCoupler) && void 0 !== Oz ? Oz : 1,
              taught: iz,
              taughtName: iz ? fz([iz])[iz] : null,
              tier: null !== (pz = zz.baf2MachineTier) && void 0 !== pz ? pz : null,
              input: null !== (dz = zz.baf2MachineInput) && void 0 !== dz ? dz : null,
              inertCoupler: null !== (Zz = zz.baf2MachineInertCoupler) && void 0 !== Zz ? Zz : null,
              inputShort: null !== (Xz = zz.baf2MachineInputShort) && void 0 !== Xz ? Xz : null,
              field: null !== (Nz = zz.baf2MachineField) && void 0 !== Nz ? Nz : null,
              noSeeds: !0 === zz.baf2MachineNoSeeds,
              fuelFed: !0 === zz.baf2MachineFuelFed,
              fuelFeeds: !0 === zz.baf2MachineFuelFeeds,
              coreFull: !0 === zz.baf2MachineCoreFull,
              waterUnpowered: !0 === zz.baf2MachineWaterUnpowered,
              powerShort: !0 === zz.baf2MachinePowerShort,
              powerWait: !0 === zz.baf2MachinePowerWait,
              reactorPowered: !0 === zz.baf2MachineReactorPowered,
              fuelLeftMs: null !== (vz = zz.baf2MachineFuelLeftMs) && void 0 !== vz ? vz : null,
              burning: null !== (xz = zz.baf2MachineBurning) && void 0 !== xz ? xz : null,
              fuelKeep: null !== (Az = zz.baf2MachineFuelKeep) && void 0 !== Az ? Az : null,
              water: null !== (Pz = zz.baf2MachineWater) && void 0 !== Pz ? Pz : null,
              farm: null !== (Vz = zz.baf2MachineFarm) && void 0 !== Vz ? Vz : null,
              cryo: null !== (mz = zz.baf2MachineCryo) && void 0 !== mz ? mz : null
            })
          } else if ("baf2StationOpen" === zz) {
            const zz = uz.baf2Station;
            Ou.consumeServerOpen(zz, performance.now()) || EX(Kz, iz, zz, sz)
          } else if ("baf2Power" === zz) {
            const zz = uz;
            Tz.set(zz), zz.baf2PowerOpen && (fu({
              kind: "power"
            }), (0, sn.p)())
          } else if (zz === Yz.w) {
            const zz = uz;
            Gz.set(zz), zz.baf2WaterOpen && (fu({
              kind: "water"
            }), (0, sn.p)())
          } else if ("baf2RxPlans" === zz) {
            var qz, hz, Sz;
            const zz = uz;
            az.Ws(zz);
            const bz = new Set(zz.baf2RxPlanList.map((zz => {
              let [uz, bz, Ez] = zz;
              return `${uz},${bz},${Ez}`
            })));
            Qz.retain(bz);
            const Ez = null === (qz = Mz.get()) || void 0 === qz ? void 0 : qz.kind,
              nz = "reactor" === Ez ? null === (hz = Uz.get()) || void 0 === hz ? void 0 : hz.status.baf2RxAt : "battery" === Ez ? null === (Sz = cz.get()) || void 0 === Sz ? void 0 : Sz.status.baf2BatAt : void 0;
            nz && ru.has(nz.join(",")) && !bz.has(nz.join(",")) && su(), ru = bz
          } else if ("baf2RxStatus" === zz) {
            const zz = uz;
            Uz.set(zz), zz.baf2RxOpen && (fu({
              kind: "reactor"
            }), (0, sn.p)())
          } else if ("baf2BatStatus" === zz) {
            const zz = uz;
            cz.set(zz), zz.baf2BatOpen && (fu({
              kind: "battery"
            }), (0, sn.p)())
          } else if ("baf2RxAlarm" === zz) Qz.Ws(uz);
          else if ("baf2Bomb" === zz) ez.Ws(uz, Kz.getPositionView(iz));
          else if ("baf2Fallout" === zz) Bz.Ws(uz);
          else if ("baf2ColBeams" === zz) Cz.onBeams(uz);
          else if ("baf2ColStatus" === zz) {
            const zz = uz;
            var yz, Dz;
            if (Cz.onStatus(zz), zz.baf2ColOpen) Cz.onOpen(null !== (yz = null === (Dz = Kz.luz(iz)) || void 0 === Dz ? void 0 : Dz.name) && void 0 !== yz ? yz : null), fu({
              kind: "collider"
            }), (0, sn.p)()
          } else if ("baf2Terminal" === zz) {
            const zz = uz;
            var Wz;
            if (Lz.apply(zz)) zz.baf2TermReset && (fu({
              kind: "terminal"
            }), (0, sn.p)());
            else "terminal" === (null === (Wz = Mz.get()) || void 0 === Wz ? void 0 : Wz.kind) && (Mz.set(null), (0, sn.i)())
          } else if ("baf2Core" === zz) {
            var Iz;
            const zz = uz;
            if (tz(!0 === zz.baf2CoreNuclear), function(zz, uz) {
                return "core" === (null === zz || void 0 === zz ? void 0 : zz.kind) && uz.baf2CoreTier > zz.core.message.baf2CoreTier
              }(Mz.get(), zz)) return void(0, sn.i)();
            if (zz.baf2CoreRefresh && "core" !== (null === (Iz = Mz.get()) || void 0 === Iz ? void 0 : Iz.kind)) return;
            fu({
              kind: "core",
              core: fX(zz, fz)
            }), zz.baf2CoreRefresh || (0, sn.p)()
          } else if ("baf2WrenchUndo" === zz) {
            const {
              baf2WrenchPos: zz,
              baf2WrenchBlock: bz
            } = uz;
            Kz.qJ(zz[0], zz[1], zz[2], bz)
          } else if ("baf2Toast" === zz) {
            const zz = uz;
            gz.heard(performance.now(), zz.baf2ToastMs), rz.show(zz)
          } else if ("baf2Area" === zz) oz.arrive(uz, null !== Mz.get());
          else if ("baf2Quest" === zz) {
            const zz = uz;
            tz(!0 === zz.baf2QuestNuclear), sz.set(zz, function(zz, uz) {
              var bz, Ez, nz, iz, lz;
              const Mz = [];
              for (const [, , Oz, , , , , , pz, dz] of zz.baf2QuestSteps) null !== Oz && Mz.push(Oz), Mz.push(...null !== pz && void 0 !== pz ? pz : [], ...null !== dz && void 0 !== dz ? dz : []);
              zz.baf2QuestReward && Mz.push(zz.baf2QuestReward);
              const tz = null === (bz = zz.baf2QuestSide) || void 0 === bz ? void 0 : bz[2][2];
              tz && Mz.push(tz), Mz.push(...null !== (Ez = null === (nz = zz.baf2QuestSide) || void 0 === nz ? void 0 : nz[2][8]) && void 0 !== Ez ? Ez : [], ...null !== (iz = null === (lz = zz.baf2QuestSide) || void 0 === lz ? void 0 : lz[2][9]) && void 0 !== iz ? iz : []);
              for (const [Oz] of null !== (Hz = zz.baf2QuestAlso) && void 0 !== Hz ? Hz : []) {
                var Hz;
                Mz.push(Oz)
              }
              return uz(Mz)
            }(zz, fz)), lX(zz.baf2QuestTier)
          } else if ("baf2Route" === zz) ! function(zz, uz) {
            let {
              baf2RouteCells: bz,
              baf2RouteInto: Ez
            } = uz;
            0 !== bz.length && Ez ? zz.setRouteChevrons({
              cells: bz.map(((zz, uz) => {
                const [nz, , iz] = function(zz, uz, bz) {
                  const Ez = bz + 1 < zz.length ? zz[bz + 1] : uz;
                  return [Ez[0] - zz[bz][0], 0, Ez[2] - zz[bz][2]]
                }(bz, Ez, uz);
                return {
                  pos: zz,
                  way: [nz, iz]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : zz.setRouteChevrons(null)
          }(Kz, uz);
          else if ("baf2QuestBook" === zz) sz.setBook(uz);
          else if ("baf2Stalls" === zz) Fz.set(uz.baf2StallCells);
          else if (zz === Rb.j) Rz.onMoves(uz);
          else if (zz === Rb.g) Rz.onLines(uz);
          else if ("baf2Labels" === zz) Jz.Ws(uz);
          else if ("baf2DropMap" === zz) fu({
            kind: "dropMap",
            dropMap: uz
          }), (0, sn.p)();
          else if ("baf2Islands" === zz) {
            var kz, zu;
            const zz = uz;
            if (wz.syncIslandEdits(zz.baf2IslandsAnswered), !zz.baf2IslandsOpen && "islands" !== (null === (kz = Mz.get()) || void 0 === kz ? void 0 : kz.kind)) return;
            if (zz.baf2IslandsOpen) {
              var uu, bu;
              const uz = rn.e.get("openEverythingMenuName"),
                bz = wz.sent() >= Zu,
                Ez = "other" !== (Xu = {
                  askedAtMs: Fu,
                  askSent: bz,
                  reaskedAtMs: Ru,
                  nowMs: Date.now(),
                  panel: null !== (uu = null === (bu = Mz.get()) || void 0 === bu ? void 0 : bu.kind) && void 0 !== uu ? uu : null,
                  inGameMenu: rn.e.get("openInGameMenuName"),
                  everythingMenu: null === uz ? null : uz === pb.r.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== zz.baf2IslandsFocusInvite
                }).everythingMenu && (!!Xu.focusInvite || "islands" === Xu.panel && "clientGame" === Xu.inGameMenu || !(Xu.nowMs - Xu.reaskedAtMs < hH) && (Xu.askSent && Xu.nowMs - Xu.askedAtMs < hH ? "core" === Xu.panel && "clientGame" === Xu.inGameMenu && null === Xu.everythingMenu : "shop" === Xu.everythingMenu || null === Xu.inGameMenu));
              if (bz && (Fu = -1 / 0), Ru = -1 / 0, !Ez) return void wu()
            }
            const bz = (nu = zz.baf2IslandsOpen, Hu = "islands" === (null === (zu = Mz.get()) || void 0 === zu ? void 0 : zu.kind), pu = Ku, du = Date.now(), nu && !Hu && du - pu < hH);
            fu({
              kind: "islands",
              islands: zz,
              arrivedAtMs: Date.now(),
              backToCore: UH(Mz.get())
            }), bz && (Ku = -1 / 0, Ru = Date.now(), wz.send(jz)), zz.baf2IslandsOpen && ("clientGame" !== rn.e.get("openInGameMenuName") && (0, Nn.c)(), (0, sn.p)())
          } else if ("baf2CoopTransfer" === zz) {
            var Eu;
            const zz = uz;
            zz.baf2TransferOn ? (fu({
              kind: "transfer",
              transfer: zz,
              arrivedAtMs: Date.now()
            }), (0, sn.p)()) : "transfer" === (null === (Eu = Mz.get()) || void 0 === Eu ? void 0 : Eu.kind) && (0, sn.i)()
          } else "baf2IslandLeft" === zz ? (oz.dropHeld(), null !== Mz.get() && su(), "inventory" === rn.e.get("openInGameMenuName") && (0, Nn.c)()) : "baf2Arc" === zz ? iu.Ws(Kz, uz) : "baf2Blade" === zz ? lu.onBlade(Kz, uz) : "baf2JetFlame" === zz ? Mu.Ws(Kz, uz) : "baf2GearPower" === zz && tu.Ws(uz);
          var nu, Hu, pu, du, Xu
        }
      };
      return Nu
    }
  },
  37896: (zz, uz, bz) => {
    function Ez(zz, uz, bz) {
      const Ez = new Set,
        nz = new ResizeObserver(bz),
        iz = () => {
          const uz = new Set(document.querySelectorAll(zz));
          let iz = !1;
          for (const zz of Ez) uz.has(zz) || (nz.unobserve(zz), Ez.delete(zz), iz = !0);
          for (const zz of uz) Ez.has(zz) || (nz.observe(zz), lz.observe(zz, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Ez.add(zz));
          iz && bz()
        },
        lz = new MutationObserver((uz => {
          uz.some((zz => "attributes" === zz.type)) && bz(), uz.some((uz => function(zz, uz, bz) {
            if ("childList" !== zz.type) return !1;
            for (const Ez of zz.addedNodes)
              if (Ez instanceof Element && (Ez.matches(uz) || Ez.querySelector(uz))) return !0;
            for (const Ez of zz.removedNodes)
              if (Ez instanceof Element)
                for (const zz of bz)
                  if (Ez.contains(zz)) return !0;
            return !1
          }(uz, zz, Ez))) && iz()
        }));
      lz.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Mz of uz) nz.observe(Mz);
      return window.addEventListener("resize", bz), iz(), bz(), () => {
        nz.disconnect(), lz.disconnect(), window.removeEventListener("resize", bz)
      }
    }
    bz.d(uz, {
      e: () => Ez
    })
  },
  37876: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      f: () => iz
    });
    const Ez = new WeakMap;

    function nz(zz) {
      let uz = Ez.get(zz);
      return uz || (uz = {
        hidden: zz.hidden,
        x: NaN,
        y: NaN
      }, Ez.set(zz, uz)), uz
    }

    function iz(zz, uz) {
      const bz = nz(zz);
      bz.hidden !== uz && (bz.hidden = uz, zz.hidden = uz)
    }

    function lz(zz, uz, bz) {
      const Ez = nz(zz);
      Ez.x === uz && Ez.y === bz || (Ez.x = uz, Ez.y = bz, zz.style.translate = `${uz}vw ${bz}vh`)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);