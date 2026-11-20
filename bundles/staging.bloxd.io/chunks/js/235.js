export const id = 235;
export const ids = [235];
export const modules = {
  37925: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(37927);
    const Wz = [0, 0, 0];
    class Xz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz;
        this.pool = zz, this.origin = tz, this.count = 0, this.free = []
      }
      take() {
        var zz;
        const tz = null !== (zz = this.free.pop()) && void 0 !== zz ? zz : this.count++;
        return tz >= this.pool.au && this.pool.grow(Math.max(2 * this.pool.au, tz + 1)), this.hide(tz), tz
      }
      release(zz) {
        this.hide(zz), this.free.push(zz)
      }
      write(zz, tz, sz, Wz) {
        const {
          records: Xz
        } = this.pool, {
          origin: Oz
        } = this, oz = zz * Fz.c;
        Xz[oz] = tz - Oz[0], Xz[oz + 1] = sz - Oz[1], Xz[oz + 2] = Wz - Oz[2], Xz[oz + Fz.g] = 0, this.pool.markDirty(zz)
      }
      hide(zz) {
        this.pool.records[zz * Fz.c + Fz.g] = 1, this.pool.markDirty(zz)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Oz {
      constructor(zz, tz, sz) {
        this.api = zz, this.model = tz, this.initialCapacity = sz, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(zz) {
        let tz = this.kinds.get(zz);
        if (void 0 === tz) {
          const sz = this.api.createInstancePool({
            ...this.model,
            item: zz
          }, this.initialCapacity);
          null === sz || void 0 === sz || sz.setOrigin(this.origin[0], this.origin[1], this.origin[2]), tz = sz && new Xz(sz, this.origin), this.kinds.set(zz, tz)
        }
        return tz
      }
      follow(zz) {
        const {
          origin: tz
        } = this;
        if (Math.abs(zz[0] - tz[0]) <= 512 && Math.abs(zz[1] - tz[1]) <= 512 && Math.abs(zz[2] - tz[2]) <= 512) return !1;
        tz[0] = Math.floor(zz[0]), tz[1] = Math.floor(zz[1]), tz[2] = Math.floor(zz[2]);
        for (const sz of this.kinds.values()) null === sz || void 0 === sz || sz.pool.setOrigin(tz[0], tz[1], tz[2]);
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
  37942: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      h: () => oz,
      j: () => vz
    });
    const Fz = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Wz = [0, 1, 2, 0, 2, 3],
      Xz = [4, 5];

    function Oz(zz, tz, sz, Fz, Wz) {
      for (let Oz = 0; Oz < 6; Oz++) Xz.includes(Oz) === Wz && Uz(zz, tz, sz, Fz, Oz)
    }

    function oz(zz, tz, sz, Fz) {
      for (let Wz = 0; Wz < 6; Wz++) Uz(zz, tz, sz, Fz, Wz)
    }

    function vz(zz, tz, sz, Xz, Oz) {
      for (let oz = 0; oz < 6; oz++)
        for (const vz of [0, 1]) {
          const [Uz, Kz, uz] = [vz + 2, vz + 1, (vz + 3) % 4], Nz = zz.length / 3;
          for (const [tz, Wz] of [
              [vz, Kz],
              [Uz, Kz],
              [Uz, uz],
              [vz, uz]
            ])
            for (let vz = 0; vz < 3; vz++) {
              const Uz = Fz[3 * (4 * oz + tz) + vz],
                Kz = Fz[3 * (4 * oz + Wz) + vz];
              zz.push((Uz + (Kz - Uz) * Oz) * Xz / 2 + sz[vz])
            }
          for (const zz of Wz) tz.push(Nz + zz)
        }
    }

    function Uz(zz, tz, sz, Xz, Oz) {
      let [oz, vz, Uz] = sz, [Kz, uz, Nz] = Xz;
      const bz = zz.length / 3;
      for (let Wz = 4 * Oz; Wz < 4 * Oz + 4; Wz++) zz.push(Fz[3 * Wz] * Kz / 2 + oz, Fz[3 * Wz + 1] * uz / 2 + vz, Fz[3 * Wz + 2] * Nz / 2 + Uz);
      for (const Fz of Wz) tz.push(bz + Fz)
    }
  },
  37908: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => PB
    });
    var Fz = sz(65);
    const Wz = [{
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
      Xz = 10;
    let Oz = !0;

    function oz() {
      return Oz
    }

    function vz(zz) {
      Oz = zz
    }
    const Uz = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Kz() {
      return Oz ? Wz.length : Xz
    }

    function uz(zz) {
      var tz, sz;
      return null !== (tz = null === (sz = Wz[zz - 1]) || void 0 === sz ? void 0 : sz.reactorTier) && void 0 !== tz ? tz : 0
    }

    function Nz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uz(zz) > 0;
      return sz && !Oz ? "hidden" : zz <= tz ? "open" : sz ? tz < 5 ? "hidden" : tz < Xz ? "teaser" : "locked" : "locked"
    }

    function bz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Fz,
        n: Wz
      } = gz(zz);
      return {
        key: tz[Fz],
        params: {
          [Fz]: sz ? String(Wz) : Wz
        }
      }
    }
    const wz = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Dz(zz, tz) {
      return uz(zz) > 0 && tz < Xz
    }

    function gz(zz) {
      const tz = uz(zz);
      if (tz > 0) return {
        kind: "atomic",
        n: tz,
        short: `A${tz}`
      };
      const sz = function(zz) {
        return zz >= 6 && zz <= 10 ? zz - 6 + 1 : 0
      }(zz);
      return sz > 0 ? {
        kind: "stage",
        n: sz,
        short: `S${sz}`
      } : {
        kind: "tier",
        n: zz,
        short: String(zz)
      }
    }

    function Hz(zz) {
      return Wz[Math.max(1, Math.min(zz, Wz.length)) - 1]
    }

    function Bz(zz, tz) {
      return zz < tz ? function(zz) {
        var tz;
        return null !== (tz = Wz[zz]) && void 0 !== tz ? tz : null
      }(zz) : null
    }
    const Pz = "baf2coresubmit",
      rz = "baf2corebankpause",
      Yz = "baf2coredeposit",
      xz = "baf2corechargepause";

    function mz(zz) {
      var tz;
      return null !== (tz = zz.baf2CoreOpen) && void 0 !== tz ? tz : Xz
    }
    const Jz = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function Iz(zz) {
      return Jz.includes(zz)
    }
    const Cz = (zz, tz) => tz.map((tz => [tz, [zz]])),
      ez = Object.fromEntries([...Cz("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Cz("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Cz("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Cz("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Cz("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Cz("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Cz("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Cz("Parts Bench", ["Focus Lens"]), ...Cz("Machine Bench", ["Laser", "Collider"]), ...Cz("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Cz("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Cz("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Cz("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Cz("Tool Bench", ["Mob Cage"]), ...Cz("Tool Bench", ["Pocket Terminal"]), ...Cz("Tool Bench", ["Comet Beacon"]), ...Cz("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Zz(zz) {
      var tz;
      return null !== (tz = ez[zz]) && void 0 !== tz ? tz : ["Workbench"]
    }

    function Gz(zz) {
      return Zz(zz)[0]
    }
    Wz.slice(1).map(((zz, tz) => `Core Tier ${tz+2}`));
    var Tz = sz(8940);
    const cz = ["on", "hud", "off"];

    function jz(zz) {
      return "on" === zz
    }
    var Az = sz(321);
    const yz = "Mob Farm",
      Mz = {
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
      dz = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      hz = {
        1: 20,
        2: 60,
        3: 120
      },
      Qz = "baf2farmvoid",
      kz = "Caged ",
      iz = " Spawner Block";

    function Lz(zz) {
      return `lifeform:${(0,Az.ue)(zz)}`
    }

    function lz(zz) {
      if (!zz) return null;
      if (zz.startsWith(kz)) {
        const tz = zz.slice(6);
        return dz.includes(tz) ? tz : null
      }
      if (zz.endsWith(iz)) {
        const tz = zz.slice(0, -14);
        return void 0 !== Mz[tz] ? tz : null
      }
      return null
    }

    function nz(zz) {
      return !0 === zz.mobFarm
    }

    function az(zz, tz) {
      return hz[Mz[tz]] * zz.opMs / 1e3
    }
    const qz = new Map;
    const Sz = "baf2islands",
      Vz = "baf2islandnew";

    function Rz(zz) {
      const tz = Wz.findIndex((tz => tz.unlocks.includes(zz)));
      return tz < 0 ? 1 : tz + 1
    }

    function pz(zz) {
      return Math.floor(zz).toLocaleString("en-US")
    }
    var fz = sz(37849);
    const Ez = "baf2terminaltake",
      zt = "baf2terminalput",
      tt = ["one", "stack", "fill"];

    function st(zz, tz, sz) {
      return `${Ez} ${zz} ${tz} ${sz}`
    }

    function Ft(zz, tz, sz) {
      return `${zt} ${zz} ${tz} ${sz}`
    }

    function Wt(zz) {
      return `${zt} ${zz}`
    }
    const Xt = [
      [`${Ez} `, "take"],
      [`${zt} `, "put"]
    ];

    function Ot(zz) {
      const tz = Xt.find((tz => {
        let [sz] = tz;
        return zz.startsWith(sz)
      }));
      if (!tz) return null;
      const [sz, Fz] = tz, [Wz, Xz, ...Oz] = zz.slice(sz.length).trim().split(" "), oz = Number(Wz);
      if (!Number.isSafeInteger(oz) || oz <= 0) return null;
      if ("put" === Fz && void 0 === Xz) return {
        kind: "putAll",
        seq: oz
      };
      const vz = function(zz) {
        if (tt.includes(zz)) return zz;
        const tz = Number(zz);
        return /^\d+$/.test(zz) && Number.isSafeInteger(tz) && tz > 0 ? tz : null
      }(null !== Xz && void 0 !== Xz ? Xz : "");
      return null === vz || 0 === Oz.length ? null : {
        kind: Fz,
        seq: oz,
        mode: vz,
        item: Oz.join(" ")
      }
    }

    function ot(zz, tz) {
      const sz = "number" === typeof zz ? zz : "one" === zz ? 1 : "stack" === zz ? 99 : tz;
      return Math.min(tz, sz)
    }

    function vt(zz, tz) {
      const sz = zz => "number" === typeof zz ? zz : "one" === zz ? 1 : 99;
      return "fill" === zz || "fill" === tz ? "fill" : sz(zz) + sz(tz)
    }

    function Ut(zz, tz) {
      const sz = Ot(zz),
        Fz = Ot(tz),
        Wz = sz && Fz ? function(zz, tz) {
          return "take" === zz.kind || "take" === tz.kind ? "take" === zz.kind && "take" === tz.kind && zz.item === tz.item ? {
            ...tz,
            mode: vt(zz.mode, tz.mode)
          } : null : "putAll" === zz.kind || "putAll" === tz.kind ? {
            kind: "putAll",
            seq: tz.seq
          } : zz.item === tz.item ? {
            ...tz,
            mode: vt(zz.mode, tz.mode)
          } : null
        }(sz, Fz) : null;
      return Wz ? "putAll" === (Xz = Wz).kind ? Wt(Xz.seq) : "put" === Xz.kind ? Ft(Xz.seq, Xz.mode, Xz.item) : st(Xz.seq, Xz.mode, Xz.item) : null;
      var Xz
    }
    const Kt = "baf2rx";

    function ut(zz, tz) {
      for (var sz = arguments.length, Fz = new Array(sz > 2 ? sz - 2 : 0), Wz = 2; Wz < sz; Wz++) Fz[Wz - 2] = arguments[Wz];
      return [Kt, zz[0], zz[1], zz[2], tz, ...Fz].join(" ")
    }
    const Nt = 2,
      bt = 4,
      wt = 8,
      Dt = 16,
      gt = 32,
      Ht = 64,
      Bt = 128,
      Pt = 256,
      rt = 512,
      Yt = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      xt = [{
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
    const mt = "Biomass",
      Jt = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function It(zz) {
      return {
        input: mt,
        inputAmount: 1,
        output: zz,
        outputAmount: 1
      }
    }
    const Ct = "baf2synth",
      et = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Zt = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Gt = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Tt = function(zz, tz) {
        return {
          input: zz,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: tz,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      ct = function(zz, tz) {
        return {
          ...Tt(zz, tz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      jt = Zt.map((zz => ct(zz, "Biomass", 2))),
      At = {
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
          recipes: [Tt("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Tt("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Tt("Raw Gold", "Gold Grit", 2), Tt("Messy Stone", "Sand"), Tt("Gravel", "Sand"), Tt("Raw Voltite", "Voltite Dust", 2), Tt("Moonstone", "Moonstone Dust", 4), Tt("Wheat Seeds", "Fertiliser"), Tt("Raw Uranium", "Uranium Grit", 2), ct("Mossy Messy Stone", "Sand"), ...jt],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Tt("Iron Grit", "Iron Bar"), Tt("Copper Grit", "Copper Bar"), Tt("Gold Grit", "Gold Bar"), Tt("Raw Iron", "Iron Bar"), Tt("Raw Copper", "Copper Bar"), Tt("Raw Gold", "Gold Bar"), Tt("Sand", "Glass"), Tt("Messy Stone", "Stone"), ...Az.Pc.map((zz => Tt(zz, "Charcoal", 1, 4))), Tt("Wheat", "Bread", 1, 2), ...Zt.map(((zz, tz) => ct(zz, Gt[tz])))],
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
          recipes: [Tt("Iron Bar", "Iron Plate"), Tt("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Tt("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Tt("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Tt("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Tt("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Tt("Raw Gold", "Gold Grit", 3), Tt("Raw Voltite", "Voltite Dust", 3), Tt("Messy Stone", "Sand", 2), Tt("Gravel", "Sand", 2), Tt("Moonstone", "Moonstone Dust", 6), Tt("Raw Uranium", "Uranium Grit", 3), ct("Mossy Messy Stone", "Sand", 2), ...jt],
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
          table: Yt
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Tt("Coal", "Diamond", 1, 24), Tt("Voltite Dust", "Moonstone", 1, 12)],
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
        ...fz.i
      },
      yt = {
        Crusher: [Tt("Spent Pellet", "Glow Dust"), Tt("Wheat Seeds", "Biomass"), Tt("Wheat", "Biomass"), Tt("Dead Bush", "Biomass"), Tt("Dusk Moss", "Biomass"), Tt("Rotten Flesh", "Biomass"), Tt("Bone", "Biomass", 2)],
        "Shatter Mill": [Tt("Spent Pellet", "Glow Dust"), Tt("Wheat Seeds", "Biomass"), Tt("Wheat", "Biomass"), Tt("Dead Bush", "Biomass"), Tt("Dusk Moss", "Biomass"), Tt("Rotten Flesh", "Biomass"), Tt("Bone", "Biomass", 2), ...Az.Pc.map((zz => Tt(zz, "Biomass")))],
        Smelter: [Tt("Biomass", "Fertiliser", 2)],
        Press: [Tt("Coal", "Graphite", 1, 4)]
      },
      Mt = "Power Coupler",
      dt = "Advanced Coupler",
      ht = "Nova Coupler",
      Qt = [{
        item: Mt,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: dt,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: ht,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const kt = new Map;

    function it(zz) {
      var tz, sz;
      return null !== (tz = null !== (sz = zz.fuelSlot) && void 0 !== sz ? sz : zz.couplerSlot) && void 0 !== tz ? tz : null
    }

    function Lt(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!zz.couplable) throw new Error(`${zz.kind} takes no Power Coupler`);
      let sz = kt.get(zz);
      sz || (sz = [], kt.set(zz, sz));
      let Fz = sz[tz];
      if (!Fz) {
        var Wz;
        const {
          divisor: Xz,
          powerPerS: Oz
        } = Qt[tz - 1], oz = zz.opMs / Xz, vz = void 0 !== zz.fluidMade || void 0 !== zz.cryoMade ? zz.powerPerOp : Oz * oz / 1e3;
        Fz = {
          ...zz,
          fuelSlot: null,
          couplerSlot: null !== (Wz = it(zz)) && void 0 !== Wz ? Wz : void 0,
          opMs: oz,
          powerPerOp: vz,
          coupled: !0
        }, tz > 1 && (Fz = {
          ...Fz,
          couplerLevel: tz
        }), sz[tz] = Fz
      }
      return Fz
    }
    const lt = new Map;
    const nt = new Map;

    function qt(zz, tz) {
      if (null === tz || (sz = tz, !Jt.includes(sz))) return zz;
      var sz;
      let Fz = nt.get(tz);
      return Fz || (Fz = {
        ...zz,
        recipes: [It(tz)]
      }, nt.set(tz, Fz)), Fz
    }

    function St(zz) {
      return !0 === zz.synth
    }
    const Vt = (zz, tz, sz, Fz) => ({
        output: zz,
        outputAmount: tz,
        tier: sz,
        inputs: Fz.map((zz => {
          let [tz, sz] = zz;
          return {
            item: tz,
            amount: sz
          }
        }))
      }),
      Rt = Object.fromEntries([Vt("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), Vt("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), Vt("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Vt("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), Vt("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), Vt("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), Vt("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), Vt("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), Vt("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), Vt("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), Vt("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), Vt("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), Vt("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), Vt("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), Vt("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Vt("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), Vt("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Vt("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), Vt("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Vt("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), Vt("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), Vt("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), Vt("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), Vt("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), Vt("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), Vt("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), Vt("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), Vt("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), Vt("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), Vt("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((zz => [zz.output, zz]))),
      pt = new Map;

    function ft(zz, tz) {
      let sz = At[zz];
      if (tz.atomic && (sz = function(zz) {
          const tz = yt[zz.kind];
          if (!tz) return zz;
          let sz = lt.get(zz.kind);
          if (!sz) {
            const Fz = new Set(tz.map((zz => zz.input))),
              Wz = zz.recipes.filter((zz => !Fz.has(zz.input)));
            sz = {
              ...zz,
              recipes: [...Wz, ...tz]
            }, lt.set(zz.kind, sz)
          }
          return sz
        }(sz)), sz.synth) return qt(sz, tz.taught);
      if (tz.coupled && sz.couplable) return Lt(sz, tz.level);
      const Fz = sz.inputSlots && null !== tz.taught ? Rt[tz.taught] : void 0;
      if (!Fz) return sz;
      const Wz = `${zz}|${Fz.output}`;
      let Xz = pt.get(Wz);
      return Xz || (Xz = {
        ...sz,
        bench: Fz
      }, pt.set(Wz, Xz)), Xz
    }
    const Et = ["Diamond", "Moonstone"];

    function zs(zz) {
      return new Set(zz.flatMap((zz => zz.bonus ? [zz.output, zz.bonus.item] : [zz.output])).filter((zz => !Et.includes(zz))))
    }
    const ts = Object.values(At).flatMap((zz => zz.recipes));
    zs(ts.filter((zz => !0 !== zz.nuclear))), zs([...ts.filter((zz => !0 === zz.nuclear)), ...Object.values(yt).flat()]);

    function ss(zz) {
      return null === zz.inputSlot && void 0 === zz.inputSlots && void 0 === zz.powerMade && void 0 === zz.fluidMade && !zz.treeCutter && void 0 === zz.table
    }

    function Fs(zz) {
      return !0 === zz.treeCutter
    }
    const Ws = ["Voltite Cell"];

    function Xs(zz) {
      var tz, sz;
      return null !== (tz = null === (sz = zz.fuels) || void 0 === sz ? void 0 : sz.some((zz => Ws.includes(zz)))) && void 0 !== tz && tz
    }
    const Os = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Az.Pc.map((zz => [zz, 8e3]))),
        ...Object.fromEntries(Az.rd.map((zz => [zz, 2e3]))),
        "Voltite Cell": 12e4
      },
      os = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      vs = {
        "Uranium Deposit": 4e3
      };

    function Us(zz) {
      var tz;
      return null !== (tz = Object.keys(os).find((tz => os[tz] === zz))) && void 0 !== tz ? tz : null
    }

    function Ks(zz) {
      return et.includes(zz)
    }

    function us(zz) {
      return !0 !== zz.nuclear || oz()
    }
    var Ns = sz(308);
    var bs = sz(9009),
      ws = sz(8951),
      Ds = sz(9014),
      gs = sz(9003);
    const Hs = "Reactor Controller",
      Bs = "Reactor Port",
      Ps = "Battery Cell",
      rs = ["fuel", "water", "waste"],
      Ys = {
        fuel: Bs,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      xs = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      ms = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Is = "Reactor Frame",
      Cs = "Reactor Glass",
      es = {
        edge: [Is],
        cap: [Cs, Bs],
        wall: [Cs, Bs],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Hs]
      },
      Zs = {
        edge: [Ps],
        cap: [Ps],
        wall: [Ps],
        inside: [Ps],
        ctrl: [Ps]
      },
      Gs = ["edge", "cap", "wall", "inside"],
      Ts = ["Reactor Slag"];

    function cs(zz) {
      return Ts.includes(As(zz))
    }

    function As(zz) {
      const tz = zz.indexOf("|");
      return tz < 0 ? zz : zz.slice(0, tz)
    }

    function ys(zz) {
      return As(zz) === Hs ? "reactor" : null
    }

    function Ms(zz) {
      return As(zz) !== Bs ? null : zz.endsWith("|Water") ? "water" : zz.endsWith("|Waste") ? "waste" : "fuel"
    }

    function ds(zz) {
      const tz = Ms(zz);
      return null === tz ? null : ks(Ys[rs[(rs.indexOf(tz) + 1) % rs.length]], function(zz) {
        return zz.includes(hs)
      }(zz))
    }
    const hs = "|meta|rot1|Formed",
      Qs = new Set([Is, Cs, Bs]);

    function ks(zz, tz) {
      var sz;
      const Fz = As(zz);
      if (!Qs.has(Fz)) return zz;
      if (Fz !== Bs) return tz ? Fz + hs : Fz;
      const Wz = null !== (sz = Ms(zz)) && void 0 !== sz ? sz : "fuel";
      return tz ? "fuel" === Wz ? Fz + hs : `${Fz}${hs}|${"water"===Wz?"Water":"Waste"}` : Ys[Wz]
    }

    function is(zz, tz) {
      const sz = OF(zz, tz);
      if ("Air" === sz) return !1;
      const Fz = "reactor" === zz ? es : Zs;
      return Gs.some((zz => Fz[zz].includes(sz))) || "reactor" === zz && Ts.includes(sz)
    }

    function Ls(zz) {
      return ms[zz]
    }

    function ls(zz) {
      var tz;
      return null !== (tz = xs[zz]) && void 0 !== tz ? tz : xs[1]
    }

    function ns(zz) {
      const [tz, , sz] = ls(zz);
      return [sz, 0, -tz]
    }

    function as(zz, tz, sz, Fz, Wz, Xz) {
      return {
        ctrl: [zz[0], zz[1], zz[2]],
        rot: xs[tz] ? tz : 1,
        w: sz,
        h: Fz,
        d: Wz,
        cu: Xz[0],
        cv: Xz[1]
      }
    }

    function qs(zz, tz) {
      return "reactor" === zz ? [Math.floor((tz - 1) / 2), 0] : [0, 0]
    }

    function Ss(zz, tz, sz, Fz, Wz) {
      let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz.rot;
      if (sz === zz.w && Fz === zz.h && Wz === zz.d && Xz === zz.rot) return zz;
      const [Oz] = qs(tz, zz.w);
      if (zz.cu === Oz && zz.cv <= 1) return as(zz.ctrl, Xz, sz, Fz, Wz, qs(tz, sz));
      const oz = (zz, tz) => Math.max(1, Math.min(tz, zz));
      return as(zz.ctrl, Xz, sz, Fz, Wz, [oz(zz.cu, sz - 2), 0 === zz.cv ? 0 : oz(zz.cv, Fz - 2)])
    }
    const Vs = 11,
      Rs = 2 * Vs + 1;
    new Uint8Array(Rs * Rs * Rs);

    function ps(zz) {
      return zz.w * zz.h * zz.d
    }

    function fs(zz) {
      const tz = ns(zz.rot);
      return [zz.ctrl[0] - tz[0] * zz.cu, zz.ctrl[1] - zz.cv, zz.ctrl[2] - tz[2] * zz.cu]
    }

    function Es(zz) {
      return zz.cv * zz.d * zz.w + zz.cu
    }

    function zF(zz, tz) {
      const sz = tz % zz.w,
        Fz = Math.floor(tz / zz.w) % zz.d;
      return [sz, Math.floor(tz / (zz.w * zz.d)), Fz]
    }

    function tF(zz, tz) {
      const [sz, Fz, Wz] = zF(zz, tz), Xz = fs(zz), Oz = ls(zz.rot), oz = ns(zz.rot);
      return [Xz[0] + oz[0] * sz - Oz[0] * Wz, Xz[1] + Fz, Xz[2] + oz[2] * sz - Oz[2] * Wz]
    }

    function sF(zz, tz) {
      const sz = fs(zz),
        Fz = ls(zz.rot),
        Wz = ns(zz.rot),
        Xz = tz[0] - sz[0],
        Oz = tz[2] - sz[2],
        oz = Xz * Wz[0] + Oz * Wz[2],
        vz = -(Xz * Fz[0] + Oz * Fz[2]),
        Uz = tz[1] - sz[1];
      return oz < 0 || oz >= zz.w || Uz < 0 || Uz >= zz.h || vz < 0 || vz >= zz.d ? -1 : (Uz * zz.d + vz) * zz.w + oz
    }

    function FF(zz, tz) {
      if (tz === Es(zz)) return "ctrl";
      const [sz, Fz, Wz] = zF(zz, tz), Xz = 0 === Fz || Fz === zz.h - 1, Oz = Number(0 === sz || sz === zz.w - 1) + Number(Xz) + Number(0 === Wz || Wz === zz.d - 1);
      return Oz >= 2 ? "edge" : 1 === Oz ? Xz ? "cap" : "wall" : "inside"
    }

    function WF(zz, tz) {
      const [sz, Fz, Wz] = zF(zz, tz);
      return 0 === sz || sz === zz.w - 1 || 0 === Fz || Fz === zz.h - 1 || 0 === Wz || Wz === zz.d - 1 ? -1 : ((Fz - 1) * (zz.d - 2) + (Wz - 1)) * (zz.w - 2) + (sz - 1)
    }

    function XF(zz, tz) {
      const sz = zz.w - 2,
        Fz = zz.d - 2,
        Wz = tz % sz + 1,
        Xz = Math.floor(tz / sz) % Fz + 1;
      return ((Math.floor(tz / (sz * Fz)) + 1) * zz.d + Xz) * zz.w + Wz
    }

    function OF(zz, tz) {
      const sz = As(tz);
      return "reactor" === zz && sz === Hs ? Is : sz
    }

    function oF(zz, tz, sz) {
      const Fz = "ctrl" === tz ? As(sz) : OF(zz, sz);
      return ("reactor" === zz ? es : Zs)[tz].includes(Fz) ? "ok" : "Air" === Fz ? "missing" : is(zz, sz) ? "wrong" : "blocked"
    }

    function vF(zz, tz) {
      return "battery" === zz ? Ps : "inside" === tz ? null : function(zz, tz) {
        if ("inside" === tz || "ctrl" === tz || "battery" === zz) return null;
        return "edge" === tz ? Is : Cs
      }(zz, tz)
    }
    const UF = {
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
      KF = "Collider",
      uF = "Laser",
      NF = "Star Alloy",
      bF = "Glow Dust",
      wF = [KF, "_Collider Focus"];

    function DF(zz) {
      return wF.indexOf(As(zz))
    }

    function gF(zz) {
      return As(zz) === uF
    }

    function HF(zz) {
      return [
        [zz[0], zz[1], zz[2]],
        [zz[0], zz[1] + 1, zz[2]]
      ]
    }
    const BF = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function PF(zz, tz, sz) {
      const Fz = BF[tz];
      return [zz[0] + Fz[0] * sz, zz[1], zz[2] + Fz[2] * sz]
    }

    function rF(zz, tz) {
      if (tz[1] !== zz[1]) return null;
      const sz = tz[0] - zz[0],
        Fz = tz[2] - zz[2];
      if (0 !== sz === (0 !== Fz)) return null;
      const Wz = Math.abs(sz + Fz);
      if (Wz > UF.LASER_D) return null;
      return {
        dir: Fz < 0 ? 0 : sz > 0 ? 1 : Fz > 0 ? 2 : 3,
        xo: Wz
      }
    }

    function YF(zz, tz, sz) {
      const Fz = tz => Math.abs(zz[0] - tz[0]) <= 1 && Math.abs(zz[1] - tz[1]) <= 1;
      return Fz(tz) || Fz(sz)
    }

    function xF(zz, tz) {
      return function(zz, tz, sz, Fz) {
        return [0, 1, 2, 3].map((Wz => {
          for (let Xz = 1; Xz <= UF.LASER_D; Xz++) {
            const Oz = PF(zz, Wz, Xz);
            if (YF([Oz[0], Oz[2]], tz, sz) || !Fz(Oz)) return !1
          }
          return !0
        }))
      }(HF(zz)[1], tz.spawnXZ, tz.coreXZ, (zz => zz[1] >= bs.k && zz[1] < bs.k + bs.m && zz[0] >= tz.minXZ[0] && zz[0] <= tz.maxXZ[0] && zz[2] >= tz.minXZ[1] && zz[2] <= tz.maxXZ[1]))
    }
    const mF = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function JF(zz) {
      return Math.max(48 + 16 * zz, Hz(zz).machineAllowance)
    }
    const IF = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function CF(zz) {
      const tz = zz.split("|")[0];
      return IF.includes(tz) ? "Solar Panel" : tz === Ds.c ? "Fluid Pipe" : DF(tz) >= 0 ? "Collider" : (sz = tz, mF.includes(sz) ? tz : null);
      var sz
    }
    const eF = "buildAFactory2Game:solarPanelDescription";
    const ZF = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function GF(zz, tz) {
      var sz;
      return null !== (sz = ZF.find((sz => {
        var Fz;
        return (null !== (Fz = zz.level(sz)) && void 0 !== Fz ? Fz : 0) >= tz
      }))) && void 0 !== sz ? sz : null
    }
    const TF = "buildAFactory2Game:";
    let cF = null;
    const jF = {
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
      AF = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      yF = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      MF = {
        "Loot Chest": `${TF}lookRuinChestName`
      };

    function dF(zz) {
      return "object" === typeof zz && null !== zz && "translationKey" in zz && "string" === typeof zz.translationKey ? zz.translationKey : null
    }

    function hF(zz, tz) {
      var sz;
      return null !== (sz = dF(zz.displayName(tz))) && void 0 !== sz ? sz : `item:${(0,Az.ue)(tz)}`
    }

    function QF(zz, tz) {
      var sz, Fz, Wz, Xz;
      let Oz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tz;
      if ("Solar Panel" === CF(tz)) return {
        name: dF(zz.displayName("Solar Panel")),
        detail: eF,
        detailItem: null
      };
      const vz = tz.endsWith(" Ore"),
        Uz = (cF ??= new Set([...Object.keys((0, ws.i)()), ...Object.keys((0, Ds.s)())].map((zz => zz.split("|")[0]))), cF).has(tz),
        Kz = vz || Uz ? null : function(zz) {
          var tz;
          return zz.endsWith(" Log") && !zz.startsWith("Barkless ") ? "lookLog" : zz.endsWith(" Sapling") ? "lookSapling" : zz.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (tz = jF[zz]) && void 0 !== tz ? tz : null
        }(tz);
      if (!zz.isBlock(tz) || !vz && !Uz && null === Kz) return null;
      const uz = null !== (sz = null !== (Fz = MF[tz]) && void 0 !== Fz ? Fz : dF(null !== (Wz = zz.displayName(Oz)) && void 0 !== Wz ? Wz : zz.displayName(tz))) && void 0 !== sz ? sz : `item:${(0,Az.ue)(tz)}`;
      if (null !== Kz) return {
        name: uz,
        detail: `${TF}${Kz}`,
        detailItem: null
      };
      const Nz = null !== (Xz = AF[tz]) && void 0 !== Xz ? Xz : oz() ? yF[tz] : void 0;
      if (Uz && void 0 !== Nz) return {
        name: uz,
        detail: `${TF}${Nz}`,
        detailItem: null
      };
      const bz = os[tz];
      if (void 0 !== bz) return {
        name: uz,
        detail: `${TF}lookDeposit`,
        detailItem: hF(zz, bz)
      };
      const wz = zz.harvestLevel(tz);
      if (vz && "rock" === zz.harvestType(tz) && 0 !== wz) {
        const tz = GF(zz, null !== wz && void 0 !== wz ? wz : 0);
        if (tz === ZF[0]) return {
          name: uz,
          detail: `${TF}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== tz) return {
          name: uz,
          detail: `${TF}lookPickaxe`,
          detailItem: hF(zz, tz)
        }
      }
      return {
        name: uz,
        detail: dF(zz.description(tz)),
        detailItem: null
      }
    }

    function kF(zz) {
      return zz < bs.k - 24
    }
    const iF = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const LF = "Wrench",
      lF = "Nova Wrench";

    function nF(zz) {
      return zz === LF || zz === lF
    }
    const aF = [...bs.F, "Belt Lift", "Belt Drop"];
    const qF = ["Belt Lift", "Belt Drop"],
      SF = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function VF(zz) {
      return zz.split("|")[0]
    }

    function RF(zz) {
      const tz = /\|rot(\d)/.exec(zz);
      return tz ? Number(tz[1]) : 1
    }

    function pF(zz) {
      return zz % 4 + 1
    }

    function fF(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === tz && "" === sz ? zz : `${zz}|meta|rot${tz}${sz}`
    }

    function EF(zz) {
      return VF(zz) === bs.u ? (0, bs.Q)(zz) ? "gateRight" : "gateLeft" : (0, bs.S)(zz)
    }

    function zW(zz) {
      const tz = VF(zz),
        sz = RF(zz);
      if (bs.F.includes(tz)) return (0, bs.J)(tz, pF(sz), null);
      if (tz === bs.g) return (0, bs.X)(pF(sz), (0, bs.R)(zz));
      if (tz === bs.x) {
        const Fz = SF[(0, bs.S)(zz)];
        return null === Fz ? fF(tz, pF(sz)) : fF(tz, sz, bs.A[Fz])
      }
      return tz === bs.u ? (0, bs.Q)(zz) ? fF(tz, pF(sz)) : fF(tz, sz, bs.j) : gs.b.includes(tz) && !qF.includes(tz) || Ks(tz) ? fF(tz, pF(sz)) : null
    }

    function tW(zz) {
      return gs.b.includes(zz) || Ks(zz) || null !== CF(zz)
    }

    function sW(zz) {
      return "Solar Panel" === CF(zz)
    }
    const FW = "buildAFactory2Game:",
      WW = {
        leftFront: `${FW}lookSplitDetail_leftFront`,
        frontRight: `${FW}lookSplitDetail_frontRight`,
        gateRight: `${FW}lookGateDetail_gateRight`
      };

    function XW(zz, tz) {
      var sz;
      let Fz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Wz = EF(zz),
        Xz = null === Wz ? null : `${FW}${Wz.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Wz}`,
        Oz = null === Wz ? null : null !== (sz = WW[Wz]) && void 0 !== sz ? sz : null;
      if (nF(tz) && Fz) {
        const sz = VF(zz);
        return tz === lF && oz() && function(zz) {
          return aF.includes(VF(zz))
        }(zz) ? {
          mode: Xz,
          detail: Oz,
          next: `${FW}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Xz,
          detail: Oz,
          next: tW(sz) && !sW(sz) ? `${FW}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const vz = nF(tz) ? zW(zz) : null;
      if (null === vz) return {
        mode: Xz,
        detail: Oz,
        next: null,
        nextState: null
      };
      const Uz = EF(vz);
      return null === Uz || RF(vz) !== RF(zz) ? {
        mode: Xz,
        detail: Oz,
        next: `${FW}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Xz,
        detail: Oz,
        next: `${FW}lookWrenchNext`,
        nextState: `${FW}lookWrenchState_${Uz}`
      }
    }
    const OW = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const oW = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function vW(zz) {
      return [0, 1, 2, 3].map((tz => 0 !== (zz & 1 << tz)))
    }

    function UW(zz) {
      const tz = [];
      for (let sz = 8; sz + 2 < zz.length; sz += 3) tz.push([zz[sz], zz[sz + 1], zz[sz + 2]]);
      return {
        focus: [zz[0], zz[1], zz[2]],
        lasers: vW(zz[3]),
        open: vW(zz[4]),
        live: vW(zz[5]),
        on: 1 === zz[6],
        state: oW[zz[7]],
        blockers: tz
      }
    }
    const KW = "Arc Caster",
      uW = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      NW = (Object.values(uW), "Jet Chestplate"),
      bW = "Nova Jet Chestplate",
      wW = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      DW = Object.values(wW);

    function gW(zz, tz, sz) {
      return Math.min(function(zz) {
        return oz() && uz(zz) >= 5 ? 20 : 10
      }(sz), Math.floor(function(zz, tz) {
        return Math.max(0, zz) + (oz() ? Math.max(0, tz) : 0)
      }(zz, tz) / 5))
    }

    function HW(zz, tz, sz) {
      const Fz = gW(tz, sz, zz),
        Wz = uz(zz),
        Xz = (Wz >= 3 ? 55 : Wz >= 1 ? 50 : zz >= 8 ? 45 : 30) + Fz,
        Oz = Math.max(100 + Fz, 2 * Xz);
      return {
        arcDamage: Xz,
        arcPierce: zz >= 7 ? 2 : 1,
        arcChain: zz >= 10,
        barrierMax: (Wz >= 4 ? 100 : Wz >= 2 ? 90 : zz >= 9 ? 80 : zz >= 6 ? 60 : 40) + 5 * Fz,
        barrierRegenPerS: Wz >= 5 ? 20 : zz >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Fz,
        novaShieldRegenPerS: 32,
        bladeDamage: Oz,
        bladePunch: Math.round(.5 * Oz),
        forgeRank: Fz
      }
    }
    const BW = {
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
    var PW = sz(36252),
      rW = sz(36090),
      YW = sz(36086),
      xW = sz(30),
      mW = sz(1571),
      JW = sz(1020),
      IW = sz.n(JW);

    function CW(zz) {
      return !0 === zz.field
    }
    const eW = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function ZW(zz) {
      return eW.has(zz) ? `buildAFactory2Game:itemPlural_${(0,Az.ue)(zz)}` : null
    }
    var GW = sz(1173),
      TW = sz(1036),
      cW = sz(1845),
      jW = sz(1831),
      AW = sz(36244),
      yW = sz(36246),
      MW = sz(34),
      dW = sz(36238);
    const hW = "baf2QuestView",
      QW = "baf2PlayerY",
      kW = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class iW {
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
      set(zz, tz) {
        var sz, Fz, Wz, Xz, Oz, oz, vz, Uz;
        const Kz = JSON.stringify(zz.baf2QuestName) === JSON.stringify(this.view.name),
          uz = new Set(this.view.rows.filter((zz => zz.done)).map((zz => zz.id))),
          Nz = new Set(this.view.rows.filter((zz => zz.justFinished)).map((zz => zz.id))),
          bz = zz.baf2QuestSide,
          wz = null !== bz && !0 === zz.baf2QuestSideFocus;
        let Dz = !1,
          gz = 0;
        const Hz = zz.baf2QuestSteps.map((zz => {
            const tz = RW(zz, kW.has(zz[0]) ? zz[0] : "" + gz++),
              sz = Kz && tz.done && !uz.has(tz.id);
            return tz.justFinished = sz || Kz && tz.done && Nz.has(tz.id), Dz ||= sz, tz
          })),
          Bz = VW(Hz);
        Bz >= 0 && !wz && (Hz[Bz].current = !0);
        const Pz = !Kz && null !== zz.baf2QuestName,
          rz = JSON.stringify(bz && [bz[0], bz[1]]),
          Yz = rz === JSON.stringify(null !== (sz = null === (Fz = this.view.side) || void 0 === Fz ? void 0 : Fz.name) && void 0 !== sz ? sz : null),
          xz = null !== bz && !this.sidesSeen.has(rz);
        xz && this.sidesSeen.add(rz), this.serverTutorial = null !== (Wz = zz.baf2QuestTutorial) && void 0 !== Wz ? Wz : "on", (null !== (Xz = zz.baf2QuestTutorialSeq) && void 0 !== Xz ? Xz : 0) >= this.pickSeq && this.endPick();
        const mz = !Kz || !Yz || zz.baf2QuestTier !== this.view.tier;
        this.view = {
          name: zz.baf2QuestName,
          rows: Hz,
          reward: zz.baf2QuestReward,
          goal: zz.baf2QuestGoal,
          pulse: this.view.pulse + (Dz || Pz ? 1 : 0),
          itemNames: tz,
          side: bz && {
            name: [bz[0], bz[1]],
            row: {
              ...RW(bz[2], "side"),
              current: wz
            },
            goal: null !== (Oz = bz[3]) && void 0 !== Oz ? Oz : null
          },
          sideCameUpAt: xz ? Date.now() : this.view.sideCameUpAt,
          tier: zz.baf2QuestTier,
          core: zz.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (oz = zz.baf2QuestAlso) && void 0 !== oz ? oz : [],
          depth: null !== (vz = zz.baf2QuestDepth) && void 0 !== vz ? vz : null,
          tutorial: null !== (Uz = this.pickedTutorial) && void 0 !== Uz ? Uz : this.serverTutorial,
          tutorialKnown: !0
        }, this.Yg(), Dz && this.scheduleClear(), mz && this.requestBook()
      }
      setTutorial(zz) {
        return this.endPick(), this.pickedTutorial = zz, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Yg()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: zz
        }, this.Yg(), this.pickSeq
      }
      onPlayerY(zz) {
        const tz = Math.floor(zz);
        tz !== this.playerY && (this.playerY = tz, this.view.depth && MW.o.Yg(QW, tz))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(zz) {
        this.view = {
          ...this.view,
          chapters: zz.baf2BookChapters
        }, this.Yg()
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
          }, this.Yg()
        }), 2400)
      }
      Yg() {
        MW.o.Yg(hW, this.view, !0)
      }
    }

    function LW(zz, tz) {
      return zz.sideCameUpAt > 0 && tz - zz.sideCameUpAt < 2400
    }

    function lW(zz) {
      return (null === zz.name || nW(zz)) && null === zz.side && null !== zz.chapters
    }

    function nW(zz) {
      var tz;
      return "quest_forgeOngoing" === (null === (tz = zz.name) || void 0 === tz ? void 0 : tz[0])
    }

    function aW(zz) {
      return zz.filter((zz => !kW.has(zz.key)))
    }

    function qW(zz) {
      return zz.key.startsWith("stepCraft")
    }

    function SW(zz, tz) {
      const sz = new Set,
        Fz = zz.side ? [...zz.rows, zz.side.row] : zz.rows;
      for (const Xz of Fz)
        if (!Xz.done) {
          !Xz.item || tz && !qW(Xz) || sz.add(Xz.item);
          for (const [zz, tz, Fz] of null !== (Wz = Xz.chips) && void 0 !== Wz ? Wz : []) {
            var Wz;
            tz < Fz && sz.add(zz)
          }
        } return sz
    }

    function VW(zz) {
      const tz = zz.findIndex((zz => !zz.done && !zz.away));
      return tz >= 0 ? tz : zz.findIndex((zz => !zz.done))
    }

    function RW(zz, tz) {
      let [sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz] = zz;
      return {
        id: tz,
        key: sz,
        params: Fz,
        item: Wz,
        amount: Xz,
        total: Oz,
        done: oz,
        chips: null !== vz && void 0 !== vz ? vz : null,
        current: !1,
        away: !0 === Uz,
        madeFor: null !== Kz && void 0 !== Kz ? Kz : [],
        also: null !== uz && void 0 !== uz ? uz : [],
        justFinished: !1
      }
    }
    const pW = "baf2QuestItems",
      fW = new Set;
    let EW = new Set,
      zX = null;

    function tX(zz) {
      const tz = jz(zz.tutorial),
        sz = tz ? SW(zz, !0) : fW;
      "inventory" === xW.b.get("openInGameMenuName") ? (zX = null, (0, dW.u)(sz)) : zX = sz;
      const Fz = tz ? SW(zz, !1) : fW;
      (0, yW.b)(Fz, EW) || (EW = Fz, MW.o.Yg(pW, EW))
    }

    function sX() {
      return (0, AW.c)(pW, (() => EW))
    }
    var FX = sz(8866),
      WX = sz(2965);

    function XX(zz) {
      const tz = (0, WX.b)(zz),
        sz = void 0 === tz ? void 0 : (0, FX.displayNameOf)(tz);
      return "object" === typeof sz && null !== sz && "translationKey" in sz && "string" === typeof sz.translationKey ? sz.translationKey : `item:${(0,Az.ue)(zz)}`
    }

    function OX(zz, tz) {
      return zz(XX(tz))
    }
    const oX = [{
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

    function vX(zz, tz) {
      return [`Deposit Seed (${zz})`, {
        item: os[`${zz} Deposit`],
        amount: tz
      }]
    }
    const UX = Object.fromEntries([vX("Coal", 8), vX("Iron", 8), vX("Copper", 8), vX("Gold", 6), vX("Voltite", 4), vX("Uranium", 4)]),
      KX = "Relay Coil",
      uX = new Map;

    function NX(zz) {
      let tz = uX.get(zz);
      if (!tz) {
        const sz = Math.max(1, zz);
        tz = oX.filter((zz => {
          var tz;
          return sz >= zz.fromTier && sz <= (null !== (tz = zz.untilTier) && void 0 !== tz ? tz : 1 / 0)
        })).map((zz => zz.later && sz >= zz.later.tier ? {
          ...zz,
          weight: zz.later.weight
        } : zz)), uX.set(zz, tz)
      }
      return tz
    }

    function bX(zz) {
      return NX(zz).some((zz => {
        let {
          item: tz
        } = zz;
        return tz === KX
      }))
    }

    function wX(zz) {
      return zz.startsWith("Deposit Seed (")
    }

    function DX(zz, tz) {
      const sz = NX(zz);
      return tz ? sz.filter((zz => tz(zz.item))) : sz
    }

    function gX(zz) {
      return zz.reduce(((zz, tz) => zz + tz.weight), 0)
    }

    function HX(zz, tz) {
      const sz = DX(zz, tz),
        Fz = gX(sz);
      return sz.map((zz => ({
        find: zz,
        chance: zz.weight / Fz
      })))
    }
    const BX = 6e4,
      PX = new Intl.NumberFormat("en-US");

    function rX(zz, tz) {
      const sz = zz >= 10 ? Math.round(zz) : Math.round(10 * zz) / 10;
      return 0 === sz ? "0" : `${tz}${PX.format(sz)}`
    }

    function YX(zz) {
      return zz < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? PX.format(zz) : zz < 1e6 ? `${zz<1e5?Math.floor(zz/100)/10:Math.floor(zz/1e3)}k` : Math.floor(zz / 1e5) / 10 + "M"
    }

    function xX(zz) {
      return zz < 0 ? "\u2212" + -zz : String(zz)
    }

    function mX(zz, tz) {
      const sz = Math.max(1, Math.round(tz));
      if (sz < 60) return zz("buildAFactory2Game:durationSeconds", {
        seconds: String(sz)
      });
      const Fz = Math.round(sz / 60);
      if (Fz < 60) return zz("buildAFactory2Game:durationMinutes", {
        minutes: String(Fz)
      });
      const Wz = String(Math.floor(Fz / 60));
      return Fz % 60 === 0 ? zz("buildAFactory2Game:durationWholeHours", {
        hours: Wz
      }) : zz("buildAFactory2Game:durationHours", {
        hours: Wz,
        minutes: String(Fz % 60)
      })
    }
    const JX = "(max-height: 420px), (max-width: 650px)";

    function IX() {
      return "undefined" !== typeof window && window.matchMedia(JX).matches
    }

    function CX(zz) {
      const tz = window.matchMedia(JX),
        sz = () => {
          zz(tz.matches)
        };
      return tz.addEventListener("change", sz), () => {
        tz.removeEventListener("change", sz)
      }
    }
    var eX = sz(1087);

    function ZX(zz, tz) {
      return null !== zz && zz > tz + 1
    }

    function GX(zz) {
      const tz = 100 * zz;
      return String(tz <= 0 || tz >= 1 ? Math.round(tz) : Math.max(.1, Math.round(10 * tz) / 10))
    }

    function TX(zz) {
      let {
        item: tz,
        amount: sz
      } = zz;
      return (0, eX.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, eX.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, eX.jsx)(cW.c, {
            itemName: tz,
            amount: 0
          })
        }), sz > 1 && (0, eX.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", sz]
        })]
      })
    }

    function cX(zz) {
      let {
        label: tz,
        names: sz
      } = zz;
      const [Wz, Xz] = (0, Fz.useState)(!1), Oz = sz.join(" / ");
      return (0, eX.jsxs)(eX.Fragment, {
        children: [(0, eX.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Oz,
          "aria-expanded": Wz,
          onClick: () => {
            Xz(!Wz)
          },
          children: tz
        }), Wz && (0, eX.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Oz
        })]
      })
    }

    function jX(zz) {
      let {
        tier: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)(), {
        key: Fz,
        params: Wz
      } = bz(tz, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Xz = sz(`buildAFactory2Game:${Fz}`, Wz);
      return (0, eX.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, eX.jsx)(TW.c, {
          name: "lock"
        }), Xz]
      })
    }
    const AX = (0, Fz.createContext)(null);

    function yX() {
      const {
        t: zz
      } = (0, GW.B)(), tz = (0, Fz.useContext)(AX);
      return (0, Fz.useEffect)((() => null === tz || void 0 === tz ? void 0 : tz()), [tz]), (0, eX.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: zz("buildAFactory2Game:recipeForQuest"),
        "aria-label": zz("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function MX(zz) {
      let {
        title: tz,
        count: sz,
        children: Wz,
        startOpen: Xz = !0
      } = zz;
      const {
        t: Oz
      } = (0, GW.B)(), [oz, vz] = (0, Fz.useState)((() => Xz && !IX())), [Uz, Kz] = (0, Fz.useState)(0), uz = (0, Fz.useCallback)((() => (Kz((zz => zz + 1)), () => {
        Kz((zz => zz - 1))
      })), []);
      return (0, eX.jsxs)("div", {
        className: IW()("Baf2Recipes", {
          Open: oz
        }),
        children: [(0, eX.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            vz(!oz)
          },
          "aria-expanded": oz,
          children: [Oz("buildAFactory2Game:recipesToggle", {
            title: tz,
            count: String(sz)
          }), (0, eX.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: oz ? "\u25be" : "\u25b8"
          })]
        }), oz && (0, eX.jsxs)(AX.Provider, {
          value: uz,
          children: [(0, eX.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Wz
          }), Uz > 0 && (0, eX.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, eX.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Oz("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const dX = "buildAFactory2Game:",
      hX = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const QX = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      kX = {
        "Uranium Grit": Xz,
        "Raw Uranium": Xz
      };

    function iX(zz) {
      var tz;
      return null !== (tz = kX[zz]) && void 0 !== tz ? tz : Math.max(Rz(zz), QX[zz] ? Rz(QX[zz]) : 1, function(zz) {
        const tz = Wz.findIndex((tz => tz.cost.some((tz => tz.item === zz))));
        return tz > Xz ? tz : 1
      }(zz))
    }

    function LX(zz, tz) {
      return lX(tz) ? iX(tz) : function(zz) {
        if (hX.has(zz)) return 1;
        const tz = Wz.findIndex((tz => tz.newDeposits.some((tz => {
          let {
            block: sz
          } = tz;
          return sz === zz
        }))));
        return tz < 0 ? 1 : tz + 1
      }(zz)
    }

    function lX(zz) {
      return zz in kX || uz(iX(zz)) > 0
    }

    function nX(zz, tz) {
      return ft(zz, {
        coupled: !1,
        taught: null,
        atomic: oz() && tz >= 11
      }).recipes
    }

    function aX(zz, tz) {
      const sz = Nz(zz, tz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uz(zz) > 0);
      return "open" === sz || "locked" === sz
    }

    function qX(zz, tz) {
      return zz.map(((zz, sz) => ({
        value: zz,
        idx: sz,
        tier: tz(zz)
      }))).sort(((zz, tz) => zz.tier - tz.tier || zz.idx - tz.idx)).map((zz => {
        let {
          value: tz
        } = zz;
        return tz
      }))
    }

    function SX(zz, tz, sz) {
      const Fz = Nz(zz, tz);
      if ("hidden" === Fz || "open" === Fz) return null;
      if ("teaser" === Fz) return {
        tag: {
          translationKey: `${dX}${sz?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${dX}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Wz = bz(zz, {
          tier: sz ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Xz = bz(zz, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${dX}${Wz.key}`,
          params: Wz.params
        },
        reason: {
          translationKey: `${dX}${Xz.key}`,
          params: Xz.params
        }
      }
    }

    function VX(zz) {
      return !wX(zz)
    }

    function RX(zz) {
      let {
        seconds: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)();
      return (0, eX.jsx)(MX, {
        title: sz("buildAFactory2Game:recipesCuts", {
          seconds: tz
        }),
        count: 1,
        children: (0, eX.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, eX.jsx)(TX, {
            item: "Maple Sapling",
            amount: 1
          }), (0, eX.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, eX.jsx)(TX, {
            item: "Maple Log",
            amount: 1
          }), (0, eX.jsx)("span", {
            className: "Baf2RecipeName",
            children: sz("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function pX(zz) {
      let {
        fertilised: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)();
      return (0, eX.jsxs)(MX, {
        title: sz("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, eX.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, eX.jsx)(TX, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, eX.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, eX.jsx)(TX, {
            item: "Wheat",
            amount: 1
          }), (0, eX.jsx)(TX, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, eX.jsx)("span", {
            className: "Baf2RecipeName",
            children: sz("buildAFactory2Game:recipeField")
          })]
        }), (0, eX.jsxs)("li", {
          className: IW()("Baf2Recipe", {
            InUse: tz
          }),
          children: [(0, eX.jsx)(TX, {
            item: "Fertiliser",
            amount: 1
          }), (0, eX.jsx)("span", {
            className: "Baf2RecipeName",
            children: sz("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function fX(zz) {
      let {
        tier: tz,
        seconds: sz
      } = zz;
      const {
        t: Fz
      } = (0, GW.B)(), Wz = function(zz) {
        return zz >= 5 ? xt : Yt
      }(tz);
      return (0, eX.jsx)(MX, {
        title: Fz("buildAFactory2Game:recipesBringsUp", {
          seconds: sz
        }),
        count: Wz.length,
        children: Wz.map((zz => {
          let {
            item: tz,
            chance: sz
          } = zz;
          return (0, eX.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, eX.jsx)(TX, {
              item: tz,
              amount: 1
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeName",
              children: OX(Fz, tz)
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Fz("buildAFactory2Game:recipeChance", {
                percent: GX(sz)
              })
            })]
          }, tz)
        }))
      })
    }

    function EX(zz) {
      let {
        tier: tz,
        seconds: sz,
        noSeeds: Fz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)(), Xz = sX(), Oz = HX(tz, Fz ? VX : void 0), oz = Fz && HX(tz).length > Oz.length, vz = bX(tz);
      return (0, eX.jsxs)(MX, {
        title: Wz("buildAFactory2Game:recipesRecycles", {
          seconds: sz
        }),
        count: Oz.length,
        children: [Oz.map((zz => {
          let {
            find: tz,
            chance: sz
          } = zz;
          return (0, eX.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Xz.has(tz.item) && (0, eX.jsx)(yX, {}), (0, eX.jsx)(TX, {
              item: tz.item,
              amount: tz.amount
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeName",
              children: OX(Wz, tz.item)
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Wz("buildAFactory2Game:recipeChance", {
                percent: GX(sz)
              })
            })]
          }, tz.item)
        })), oz && (0, eX.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, eX.jsx)("span", {
            className: "Baf2RecipeName",
            children: Wz("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), vz && (0, eX.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, eX.jsx)("span", {
            className: "Baf2RecipeName",
            children: Wz("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function zO(zz) {
      let {
        tier: tz,
        seconds: sz
      } = zz;
      const {
        t: Fz
      } = (0, GW.B)(), Wz = Object.entries(UX).filter((zz => {
        let [, {
          item: sz
        }] = zz;
        return aX(iX(sz), tz, lX(sz))
      }));
      return (0, eX.jsx)(MX, {
        title: Fz("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: sz
        }),
        count: Wz.length,
        children: Wz.map((zz => {
          let [tz, {
            item: sz,
            amount: Wz
          }] = zz;
          return (0, eX.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, eX.jsx)(TX, {
              item: tz,
              amount: 1
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, eX.jsx)(TX, {
              item: sz,
              amount: Wz
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeName",
              children: OX(Fz, sz)
            })]
          }, tz)
        }))
      })
    }

    function tO(zz) {
      let {
        tier: tz,
        seconds: sz
      } = zz;
      const {
        t: Fz
      } = (0, GW.B)(), Wz = sX(), Xz = qX(Object.entries(os).filter((zz => {
        let [sz, Fz] = zz;
        return aX(LX(sz, Fz), tz, lX(Fz))
      })), (zz => {
        let [tz, sz] = zz;
        return LX(tz, sz)
      }));
      return (0, eX.jsx)(MX, {
        title: Fz("buildAFactory2Game:recipesDigs", {
          seconds: sz
        }),
        count: Xz.length,
        children: Xz.map((zz => {
          let [sz, Xz] = zz;
          const Oz = LX(sz, Xz),
            oz = Oz > tz ? Oz : null,
            vz = vs[sz],
            Uz = null === oz && Wz.has(Xz);
          return (0, eX.jsxs)("li", {
            className: IW()("Baf2Recipe", {
              Locked: null !== oz,
              Far: ZX(oz, tz)
            }),
            children: [Uz && (0, eX.jsx)(yX, {}), (0, eX.jsx)(TX, {
              item: sz,
              amount: 1
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, eX.jsx)(TX, {
              item: Xz,
              amount: 1
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeName",
              children: OX(Fz, Xz)
            }), void 0 !== vz && (0, eX.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Fz("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / vz)
              })
            }), null !== oz && (0, eX.jsx)(jX, {
              tier: oz
            })]
          }, sz)
        }))
      })
    }

    function sO(zz) {
      var tz;
      let {
        def: sz,
        seconds: Fz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)();
      return (0, eX.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, eX.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (tz = sz.fuels) && void 0 !== tz ? tz : []).map((zz => (0, eX.jsx)(TX, {
            item: zz,
            amount: 1
          }, zz))), (0, eX.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, eX.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, eX.jsx)(TW.c, {
              name: "bolt"
            }), Wz("buildAFactory2Game:recipePower", {
              power: pz(sz.powerMade),
              seconds: Fz
            })]
          })]
        })
      })
    }

    function FO(zz) {
      let {
        def: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)();
      return (0, eX.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, eX.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, eX.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, eX.jsx)(TW.c, {
              name: "bolt"
            }), sz("buildAFactory2Game:recipeMixer", {
              cryo: rX((0, fz.E)(tz, tz.cryoMade), "")
            })]
          })
        })
      })
    }

    function WO(zz) {
      let {
        def: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)();
      return (0, eX.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, eX.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, eX.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, eX.jsx)(TW.c, {
              name: "bolt"
            }), sz("buildAFactory2Game:recipeCondenser", {
              power: rX((0, fz.E)(tz, tz.powerPerOp), ""),
              water: rX((0, fz.E)(tz, tz.fluidMade), "")
            })]
          })
        })
      })
    }

    function XO(zz) {
      let {
        kind: tz,
        def: sz,
        input: Fz,
        tier: Wz,
        noSeeds: Xz = !1
      } = zz;
      const Oz = String(sz.opMs / 1e3);
      return Fs(sz) ? (0, eX.jsx)(RX, {
        seconds: Oz
      }) : sz.field ? (0, eX.jsx)(pX, {
        fertilised: null !== Fz
      }) : sz.table ? (0, eX.jsx)(fX, {
        tier: Wz,
        seconds: Oz
      }) : sz.recycles ? (0, eX.jsxs)(eX.Fragment, {
        children: [(0, eX.jsx)(EX, {
          tier: Wz,
          seconds: Oz,
          noSeeds: Xz
        }), (0, eX.jsx)(zO, {
          tier: Wz,
          seconds: Oz
        })]
      }) : ss(sz) ? (0, eX.jsx)(tO, {
        tier: Wz,
        seconds: Oz
      }) : void 0 !== sz.fluidMade ? (0, eX.jsx)(WO, {
        def: sz
      }) : void 0 !== sz.cryoMade ? (0, eX.jsx)(FO, {
        def: sz
      }) : void 0 !== sz.powerMade ? (0, eX.jsx)(sO, {
        def: sz,
        seconds: Oz
      }) : (0, eX.jsx)(OO, {
        kind: tz,
        input: Fz,
        tier: Wz,
        seconds: Oz
      })
    }

    function OO(zz) {
      let {
        kind: tz,
        input: sz,
        tier: Fz,
        seconds: Wz
      } = zz;
      const {
        t: Xz
      } = (0, GW.B)(), Oz = sX(), oz = qX(function(zz) {
        const tz = new Map;
        for (const Wz of zz) {
          var sz, Fz;
          const zz = [Wz.output, Wz.outputAmount, Wz.inputAmount, null === (sz = Wz.bonus) || void 0 === sz ? void 0 : sz.item, null === (Fz = Wz.bonus) || void 0 === Fz ? void 0 : Fz.chance].join("|"),
            Xz = tz.get(zz);
          Xz ? Xz.inputs.push(Wz.input) : tz.set(zz, {
            inputs: [Wz.input],
            inputAmount: Wz.inputAmount,
            output: Wz.output,
            outputAmount: Wz.outputAmount,
            bonus: Wz.bonus
          })
        }
        return [...tz.values()]
      }(nX(tz, Fz).filter(us)), (zz => iX(zz.output))).filter((zz => aX(iX(zz.output), Fz, lX(zz.output))));
      return (0, eX.jsx)(MX, {
        title: Xz("buildAFactory2Game:recipesEach", {
          seconds: Wz
        }),
        count: oz.length,
        children: oz.map((zz => {
          const tz = null !== sz && zz.inputs.includes(sz),
            Wz = zz.inputs.length > 3 ? [tz ? sz : zz.inputs[0]] : zz.inputs,
            oz = iX(zz.output) > Fz ? iX(zz.output) : null,
            vz = null === oz && Oz.has(zz.output);
          return (0, eX.jsxs)("li", {
            className: IW()("Baf2Recipe", {
              InUse: tz,
              Locked: null !== oz,
              Far: ZX(oz, Fz)
            }),
            children: [vz && (0, eX.jsx)(yX, {}), Wz.map(((tz, sz) => (0, eX.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [sz > 0 && (0, eX.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, eX.jsx)(TX, {
                item: tz,
                amount: zz.inputAmount
              })]
            }, tz))), Wz.length < zz.inputs.length && (0, eX.jsx)(cX, {
              label: Xz("buildAFactory2Game:recipeMore", {
                count: String(zz.inputs.length - Wz.length)
              }),
              names: zz.inputs.filter((zz => !Wz.includes(zz))).map((zz => OX(Xz, zz)))
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, eX.jsx)(TX, {
              item: zz.output,
              amount: zz.outputAmount
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeName",
              children: OX(Xz, zz.output)
            }), zz.bonus && (0, eX.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Xz("buildAFactory2Game:recipeBonus", {
                percent: GX(zz.bonus.chance)
              }), (0, eX.jsx)(TX, {
                item: zz.bonus.item,
                amount: 1
              })]
            }), null !== oz && (0, eX.jsx)(jX, {
              tier: oz
            })]
          }, `${zz.output}|${zz.inputs[0]}`)
        }))
      })
    }

    function oO(zz) {
      let {
        taught: tz,
        tier: sz
      } = zz;
      const {
        t: Fz
      } = (0, GW.B)(), Wz = sX(), Xz = qX(Object.values(Rt), (zz => zz.tier)).filter((zz => aX(zz.tier, sz)));
      return (0, eX.jsx)(MX, {
        title: Fz("buildAFactory2Game:benchCanMake"),
        count: Xz.length,
        startOpen: !1,
        children: Xz.map((zz => {
          const Xz = zz.tier > sz,
            Oz = !Xz && Wz.has(zz.output);
          return (0, eX.jsxs)("li", {
            className: IW()("Baf2Recipe", {
              InUse: zz.output === tz,
              Locked: Xz,
              Far: ZX(Xz ? zz.tier : null, sz)
            }),
            children: [Oz && (0, eX.jsx)(yX, {}), (0, eX.jsx)(TX, {
              item: zz.output,
              amount: zz.outputAmount
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeName",
              children: OX(Fz, zz.output)
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), zz.inputs.map((zz => (0, eX.jsx)(TX, {
              item: zz.item,
              amount: zz.amount
            }, zz.item))), Xz && (0, eX.jsx)(jX, {
              tier: zz.tier
            })]
          }, zz.output)
        }))
      })
    }
    var vO, UO, KO, uO, NO;
    const bO = At.Generator,
      wO = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      DO = 1e3 * (null !== (vO = bO.powerMade) && void 0 !== vO ? vO : 0) / bO.opMs,
      gO = Math.min(...(null !== (UO = bO.fuels) && void 0 !== UO ? UO : []).map((zz => Os[zz]))) / 1e3,
      HO = At["Volt Engine"],
      BO = 1e3 * (null !== (KO = HO.powerMade) && void 0 !== KO ? KO : 0) / HO.opMs,
      PO = Os[null !== (uO = null === (NO = HO.fuels) || void 0 === NO ? void 0 : NO[0]) && void 0 !== uO ? uO : ""] / 1e3;

    function rO(zz) {
      let {
        item: tz,
        label: sz,
        value: Fz,
        note: Wz,
        dim: Xz
      } = zz;
      return (0, eX.jsxs)("li", {
        className: IW()("Baf2PowerRow", {
          Dim: Xz
        }),
        children: [(0, eX.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, eX.jsx)(cW.c, {
            itemName: tz,
            amount: 0
          })
        }), (0, eX.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, eX.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: sz
          }), Wz && (0, eX.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Wz
          })]
        }), (0, eX.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Fz
        })]
      })
    }

    function YO(zz, tz, sz, Fz) {
      var Wz;
      const Xz = void 0 === Fz ? At[zz] : function(zz, tz) {
          if (null === tz) return zz;
          let sz = qz.get(tz);
          return sz || (sz = {
            ...zz,
            powerPerOp: az(zz, tz),
            farmMob: tz
          }, qz.set(tz, sz)), sz
        }(At[zz], Fz),
        Oz = tz && Xz.couplable ? Lt(Xz, sz) : Xz;
      return 1e3 * (null !== (Wz = Oz.powerPerOp) && void 0 !== Wz ? Wz : 0) / Oz.opMs
    }

    function xO(zz) {
      var tz, sz, Fz, Wz, Xz, Oz, oz, vz;
      let {
        message: Uz
      } = zz;
      const {
        t: Kz
      } = (0, GW.B)(), uz = (zz, tz) => Kz("buildAFactory2Game:powerPerSecond", {
        rate: rX(zz, tz)
      }), [Nz, bz] = Uz.baf2PowerGenerators, wz = Uz.baf2PowerGeneratorFuel, Dz = Uz.baf2PowerSunPanels, gz = null !== (tz = Uz.baf2PowerSunShare) && void 0 !== tz ? tz : 1, Hz = Uz.baf2PowerVaults, Bz = Uz.baf2PowerUsers, [Pz, rz] = null !== (sz = Uz.baf2PowerEngines) && void 0 !== sz ? sz : [0, 0], Yz = null !== (Fz = Uz.baf2PowerEngineCells) && void 0 !== Fz ? Fz : 0, xz = null !== (Wz = Uz.baf2PowerPads) && void 0 !== Wz ? Wz : 0, mz = null !== (Xz = Uz.baf2PowerCharge) && void 0 !== Xz ? Xz : 0, [Jz, Iz] = null !== (Oz = Uz.baf2PowerReactors) && void 0 !== Oz ? Oz : [0, 0], [Cz, ez] = null !== (oz = Uz.baf2PowerBatteries) && void 0 !== oz ? oz : [0, 0];
      let Zz = Kz("buildAFactory2Game:powerEngineCells", {
        amount: String(Yz)
      });
      Yz > 0 && rz > 0 && (Zz = Kz("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Yz),
        time: mX(Kz, Yz * PO / rz)
      }));
      let Gz = Kz("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(wz)
      });
      wz > 0 && bz > 0 && (Gz = Kz("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(wz),
        time: mX(Kz, wz * gO / bz)
      }));
      const Tz = Nz + Pz + Dz + Jz;
      return (0, eX.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, eX.jsxs)("section", {
          children: [(0, eX.jsxs)("h3", {
            children: [Kz("buildAFactory2Game:powerMaking"), (0, eX.jsx)("span", {
              children: uz(Uz.baf2PowerMadePerS, "+")
            })]
          }), (0, eX.jsxs)("ul", {
            children: [0 === Tz && (0, eX.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Kz("buildAFactory2Game:powerNoMakers")
            }), Nz > 0 && (0, eX.jsx)(rO, {
              item: "Generator",
              label: `${OX(Kz,"Generator")} \xd7${Nz}`,
              note: `${Kz("buildAFactory2Game:powerRunning",{amount:String(bz)})} \xb7 ${Gz}`,
              value: uz(bz * DO, "+"),
              dim: 0 === bz
            }), Pz > 0 && (0, eX.jsx)(rO, {
              item: "Volt Engine",
              label: `${OX(Kz,"Volt Engine")} \xd7${Pz}`,
              note: `${Kz("buildAFactory2Game:powerRunning",{amount:String(rz)})} \xb7 ${Zz}`,
              value: uz(rz * BO, "+"),
              dim: 0 === rz
            }), Dz > 0 && (0, eX.jsx)(rO, {
              item: "Solar Panel",
              label: `${OX(Kz,"Solar Panel")} \xd7${Dz}`,
              note: Kz(gz < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: uz(4 * Dz * gz, "+")
            }), Jz > 0 && (0, eX.jsx)(rO, {
              item: "Reactor Frame",
              label: `${Kz("buildAFactory2Game:powerReactors")} \xd7${Jz}`,
              note: Kz("buildAFactory2Game:powerRunning", {
                amount: String(Iz)
              }),
              value: uz(null !== (vz = Uz.baf2PowerReactorPerS) && void 0 !== vz ? vz : 0, "+"),
              dim: 0 === Iz
            })]
          })]
        }), (0, eX.jsxs)("section", {
          children: [(0, eX.jsxs)("h3", {
            children: [Kz("buildAFactory2Game:powerStorage"), (0, eX.jsx)("span", {
              children: pz(Uz.baf2PowerCap)
            })]
          }), (Hz > 0 || Cz > 0) && (0, eX.jsxs)("ul", {
            children: [Hz > 0 && (0, eX.jsx)(rO, {
              item: "Charge Vault",
              label: `${OX(Kz,"Charge Vault")} \xd7${Hz}`,
              value: `+${pz(8e3*Hz)}`
            }), Cz > 0 && (0, eX.jsx)(rO, {
              item: "Battery Cell",
              label: `${Kz("buildAFactory2Game:powerBatteries")} \xd7${Cz}`,
              value: `+${pz(ez)}`
            })]
          })]
        }), (0, eX.jsxs)("section", {
          children: [(0, eX.jsxs)("h3", {
            children: [Kz("buildAFactory2Game:powerUsing"), (0, eX.jsx)("span", {
              children: uz(Uz.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, eX.jsxs)("ul", {
            children: [0 === Bz.length && 0 === xz && 0 === mz && (0, eX.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Kz("buildAFactory2Game:powerNoUsers")
            }), Bz.map((zz => {
              let [tz, sz, Fz, Wz, Xz = 1, Oz] = zz, oz = sz ? Kz(wO[Xz - 1], {
                name: OX(Kz, tz)
              }) : OX(Kz, tz);
              return void 0 !== Oz && (oz = Kz("buildAFactory2Game:powerFarmName", {
                name: oz,
                mob: Kz(Lz(Oz))
              })), (0, eX.jsx)(rO, {
                item: tz,
                label: `${oz} \xd7${Fz}`,
                note: Kz("buildAFactory2Game:powerRunning", {
                  amount: String(Wz)
                }),
                value: Wz > 0 ? uz(Wz * YO(tz, sz, Xz, Oz), "\u2212") : Kz("buildAFactory2Game:powerIdle"),
                dim: 0 === Wz
              }, `${tz}|${sz}|${Xz}|${Oz}`)
            })), xz > 0 && (0, eX.jsx)(rO, {
              item: "Charging Pad",
              label: `${OX(Kz,"Charging Pad")} \xd7${xz}`,
              value: Kz("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), mz > 0 && (0, eX.jsx)(rO, {
              item: "Homestead Core",
              label: Kz("buildAFactory2Game:powerCharge"),
              value: uz(mz, "\u2212")
            }), Uz.baf2PowerStarved > 0 && (0, eX.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, eX.jsx)(TW.c, {
                name: "triangle-exclamation"
              }), Kz("buildAFactory2Game:powerStarved", {
                amount: String(Uz.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var mO = sz(4175),
      JO = sz(1419);
    class IO {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(zz) {
        this.message = zz;
        for (const tz of this.listeners) tz()
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
    class CO extends IO {}

    function eO(zz, tz) {
      const sz = () => {
          const sz = zz.get();
          if (!sz || !tz) return sz;
          const [Fz, Wz, Xz] = sz.baf2PowerAt;
          return Fz === tz[0] && Wz === tz[1] && Xz === tz[2] ? sz : null
        },
        [Wz, Xz] = (0, Fz.useState)(sz);
      return (0, Fz.useEffect)((() => (Xz(sz()), zz.subscribe((() => {
        Xz(sz())
      })))), [zz, ...null !== tz && void 0 !== tz ? tz : []]), Wz
    }

    function ZO(zz) {
      return {
        stored: zz.baf2PowerStored,
        cap: zz.baf2PowerCap,
        madePerS: zz.baf2PowerMadePerS,
        usedPerS: zz.baf2PowerUsedPerS
      }
    }

    function GO(zz) {
      let {
        stored: tz,
        cap: sz
      } = zz;
      return (0, eX.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, eX.jsx)("div", {
          style: {
            width: `${Math.min(100,100*tz/Math.max(1,sz))}%`
          }
        })
      })
    }

    function TO(zz) {
      let {
        figures: tz,
        labelled: sz = !1
      } = zz;
      const {
        t: Fz
      } = (0, GW.B)(), Wz = tz.madePerS - tz.usedPerS, {
        text: Xz,
        draining: Oz
      } = function(zz, tz) {
        let {
          stored: sz,
          cap: Fz,
          madePerS: Wz,
          usedPerS: Xz
        } = tz;
        const Oz = Wz - Xz;
        return sz >= Fz ? {
          text: zz("buildAFactory2Game:powerFull"),
          draining: !1
        } : Oz > .05 ? {
          text: zz("buildAFactory2Game:powerFullIn", {
            time: mX(zz, (Fz - sz) / Oz)
          }),
          draining: !1
        } : Oz < -.05 ? {
          text: zz("buildAFactory2Game:powerEmptyIn", {
            time: mX(zz, sz / -Oz)
          }),
          draining: !0
        } : {
          text: zz("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Fz, tz);
      return (0, eX.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, eX.jsx)(GO, {
          stored: tz.stored,
          cap: tz.cap
        }), (0, eX.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, eX.jsx)("span", {
            children: Fz(sz ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: pz(tz.stored),
              cap: pz(tz.cap)
            })
          }), (0, eX.jsxs)("span", {
            className: IW()("Baf2PowerNet", {
              Draining: Oz
            }),
            children: [Fz("buildAFactory2Game:powerPerSecond", {
              rate: rX(Math.abs(Wz), Wz < 0 ? "\u2212" : "+")
            }), " \xb7 ", Xz]
          })]
        })]
      })
    }

    function cO(zz) {
      let {
        stored: tz,
        cap: sz,
        rates: Fz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)();
      return Fz ? (0, eX.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, eX.jsx)(TO, {
          figures: {
            stored: tz,
            cap: sz,
            madePerS: Fz[0],
            usedPerS: Fz[1]
          },
          labelled: !0
        })
      }) : (0, eX.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, eX.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, eX.jsx)(GO, {
            stored: tz,
            cap: sz
          }), (0, eX.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, eX.jsx)("span", {
              children: Wz("buildAFactory2Game:powerStoredLabelled", {
                stored: pz(tz),
                cap: pz(sz)
              })
            })
          })]
        })
      })
    }

    function jO(zz) {
      let {
        store: tz,
        close: sz
      } = zz;
      const {
        t: Fz
      } = (0, GW.B)(), Wz = eO(tz);
      return (0, eX.jsx)(mO.b, {
        close: sz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, eX.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsxs)("div", {
              children: [(0, eX.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Fz("buildAFactory2Game:powerTitle")
              }), (0, eX.jsx)("p", {
                children: Fz("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, eX.jsx)(JO.n, {
              onClick: sz
            })]
          }), Wz && (0, eX.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, eX.jsx)(TO, {
              figures: ZO(Wz)
            }), (0, eX.jsx)(xO, {
              message: Wz
            })]
          })]
        })
      })
    }

    function AO(zz) {
      var tz;
      let {
        kind: sz,
        def: Wz,
        oO: Xz,
        power: Oz,
        stored: oz,
        cap: vz
      } = zz;
      const {
        t: Uz
      } = (0, GW.B)(), Kz = eO(Oz, Xz), [uz, Nz] = (0, Fz.useState)(!1);
      return (0, eX.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, eX.jsx)(XO, {
          kind: sz,
          def: Wz,
          input: null,
          tier: null !== (tz = null === Kz || void 0 === Kz ? void 0 : Kz.baf2PowerTier) && void 0 !== tz ? tz : 1
        }), (0, eX.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Uz("buildAFactory2Game:powerTitle")
        }), Kz && (0, eX.jsx)(TO, {
          figures: ZO(Kz)
        }), !Kz && (0, eX.jsx)(cO, {
          stored: oz,
          cap: vz,
          rates: null
        }), Kz && (0, eX.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Nz(!uz)
          },
          "aria-expanded": uz,
          children: Uz(uz ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Kz && uz && (0, eX.jsx)(xO, {
          message: Kz
        })]
      })
    }
    const yO = 2500,
      MO = 17500,
      dO = `${Yz} `;
    const hO = ["plan", "throttle"];

    function QO(zz) {
      if (zz.startsWith(`${Ct} `)) return zz.slice(0, zz.lastIndexOf(" "));
      const tz = zz.split(" ");
      return tz[0] === Kt && hO.includes(tz[4]) ? tz.slice(0, 5).join(" ") : null
    }
    class kO {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = zz, this.now = tz, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.tWz = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = tz()
      }
      enqueue(zz) {
        this.queue(zz, this.nextTicket());
        const tz = this.tWz + this.pending.length;
        return this.flush(), tz
      }
      track(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sz = this.nextTicket();
        if (!tz.urgent) return this.queue(zz, sz), this.flush(), sz;
        const {
          supersedes: Fz
        } = tz;
        for (let Xz = this.pending.length - 1; Xz >= this.urgent; Xz--) {
          const tz = this.pending[Xz];
          (tz.command === zz || null !== Fz && void 0 !== Fz && Fz(tz.command)) && (this.pending.splice(Xz, 1), this.markLeft(tz.tickets))
        }
        const Wz = this.pending.findIndex((tz => {
          let {
            command: sz
          } = tz;
          return sz === zz
        }));
        return -1 !== Wz ? this.pending[Wz].tickets.push(sz) : (this.pending.splice(this.urgent, 0, {
          command: zz,
          tickets: [sz]
        }), this.urgent += 1), this.flush(), sz
      }
      leftAt(zz) {
        const tz = this.leftTimes.get(zz);
        return void 0 !== tz ? tz : this.pending.some((tz => {
          let {
            tickets: sz
          } = tz;
          return sz.includes(zz)
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
        var tz;
        return (null === (tz = this.pending.at(-1)) || void 0 === tz ? void 0 : tz.command) === zz
      }
      sent() {
        return this.tWz
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
        const tz = this.now();
        for (const sz of zz) this.leftTimes.set(sz, tz);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(zz, tz) {
        const sz = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === sz || void 0 === sz ? void 0 : sz.command) === zz) return void(! function(zz) {
          return zz === xz || zz.startsWith(`${rz} `) || zz.startsWith(`${Qz} `)
        }(zz) ? sz.tickets.push(tz) : (this.pending.pop(), this.markLeft([...sz.tickets, tz])));
        const Fz = void 0 === sz ? null : Ut(sz.command, zz);
        if (null !== Fz && void 0 !== sz) return sz.command = Fz, void sz.tickets.push(tz);
        const Wz = QO(zz);
        if (null !== Wz && void 0 !== sz && QO(sz.command) === Wz) return sz.command = zz, void sz.tickets.push(tz);
        if (null !== sz && void 0 !== sz && sz.command.startsWith(dO) && zz.startsWith(dO)) {
          const Fz = zz.slice(dO.length);
          if (sz.command.slice(dO.length).split(",").includes(Fz)) return void sz.tickets.push(tz);
          const Wz = `${sz.command},${Fz}`;
          if (Wz.length <= 119) return sz.command = Wz, void sz.tickets.push(tz)
        }
        this.pending.push({
          command: zz,
          tickets: [tz]
        })
      }
      flush() {
        const zz = this.now();
        for (this.tokens = Math.min(5, this.tokens + (zz - this.refilledAt) / yO), this.refilledAt = zz; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.tWz += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: zz,
            tickets: tz
          } = this.pending.shift();
          this.markLeft(tz), this.send(zz)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * yO)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class iO {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new kO(zz, tz)
      }
      send(zz) {
        return this.queue.enqueue(zz)
      }
      sent() {
        return this.queue.sent()
      }
      track(zz, tz) {
        return this.queue.track(zz, tz)
      }
      leftAt(zz) {
        return this.queue.leftAt(zz)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(zz) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = tz, this.send(zz), this.islandEdits.count
      }
      syncIslandEdits(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: sz
        } = this, Fz = tz - sz.lastAtMs < MO;
        sz.count = Fz ? Math.max(sz.count, zz) : zz
      }
      clear() {
        this.queue.clear()
      }
    }
    const LO = (0, Fz.createContext)(null);

    function lO() {
      const zz = (0, Fz.useContext)(LO);
      if (!zz) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return zz
    }

    function nO(zz, tz) {
      return null !== tz && void 0 !== tz ? tz : 1 === zz
    }

    function aO(zz, tz) {
      return zz.every((zz => {
        var sz;
        let [Fz, , Wz] = zz;
        return !nO(Wz, null === (sz = tz.get(Fz)) || void 0 === sz ? void 0 : sz.Ow)
      }))
    }

    function qO(zz, tz, sz) {
      if (0 === zz.size) return zz;
      const Fz = new Map(zz);
      for (const [Wz, Xz] of zz) {
        const zz = tz.find((zz => {
          let [tz] = zz;
          return tz === Wz
        }));
        (!zz || Xz.Ow === (1 === zz[2]) || Xz.atMs < sz) && Fz.delete(Wz)
      }
      return Fz
    }

    function SO(zz) {
      var tz;
      let {
        oO: sz,
        input: Wz,
        drops: Xz,
        seconds: Oz
      } = zz;
      const {
        t: oz
      } = (0, GW.B)(), vz = lO(), [Uz, Kz] = (0, Fz.useState)(new Map);
      (0, Fz.useEffect)((() => {
        Xz && Kz((zz => qO(zz, Xz, Date.now() - MO)))
      }), [Xz]), (0, Fz.useEffect)((() => {
        const zz = function(zz, tz) {
          let sz = null;
          for (const {
              atMs: Fz
            }
            of zz.values()) sz = null === sz ? Fz : Math.min(sz, Fz);
          return null === sz ? null : sz + tz
        }(Uz, MO);
        if (null === zz || !Xz) return;
        const tz = setTimeout((() => {
          Kz((zz => qO(zz, Xz, Date.now() - MO)))
        }), Math.max(0, zz - Date.now()) + 1);
        return () => {
          clearTimeout(tz)
        }
      }), [Uz, Xz]);
      const uz = lz(Wz),
        Nz = null !== uz && null !== Xz && aO(Xz, Uz),
        bz = function(zz, tz, sz) {
          return null === zz || null === tz || aO(tz, sz) ? 0 : hz[Mz[zz]]
        }(uz, Xz, Uz);
      return (0, eX.jsxs)(MX, {
        title: oz("buildAFactory2Game:farmDropsTitle", {
          seconds: Oz
        }),
        count: null !== (tz = null === Xz || void 0 === Xz ? void 0 : Xz.length) && void 0 !== tz ? tz : 0,
        children: [bz > 0 && (0, eX.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: oz("buildAFactory2Game:farmDropsPower", {
            power: String(bz)
          })
        }), (null === uz || !Xz) && (0, eX.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: oz("buildAFactory2Game:farmDropsEmpty")
        }), Nz && (0, eX.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: oz("buildAFactory2Game:farmDropsAllVoided")
        }), null !== uz && (null === Xz || void 0 === Xz ? void 0 : Xz.map((zz => {
          var tz;
          let [Fz, Wz, Xz] = zz;
          const Oz = Wz < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            uz = nO(Xz, null === (tz = Uz.get(Fz)) || void 0 === tz ? void 0 : tz.Ow);
          return (0, eX.jsxs)("li", {
            className: IW()("Baf2Recipe Baf2FarmDrop", {
              Voided: !uz
            }),
            children: [(0, eX.jsx)(TX, {
              item: Fz,
              amount: 1
            }), (0, eX.jsx)("span", {
              className: "Baf2RecipeName",
              children: OX(oz, Fz)
            }), (0, eX.jsx)("span", {
              className: "Baf2FarmRate",
              children: oz(Oz, {
                amount: String(Wz)
              })
            }), (0, eX.jsx)("button", {
              type: "button",
              className: IW()("Baf2FarmToggle SmallTextBold", {
                Kept: uz
              }),
              "aria-pressed": uz,
              onClick: () => {
                Kz(new Map(Uz).set(Fz, {
                  Ow: !uz,
                  atMs: Date.now()
                })), vz.send(function(zz, tz, sz, Fz) {
                  return `${Qz} ${zz} ${tz} ${sz} ${Fz}`
                }(sz[0], sz[1], sz[2], Fz))
              },
              children: oz(uz ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Fz)
        })))]
      })
    }
    var VO;
    const RO = String(null !== (VO = At.Synthesizer.waterPerOp) && void 0 !== VO ? VO : 0);

    function pO(zz) {
      let {
        oO: tz,
        taught: sz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)(), Xz = lO(), [Oz, oz] = (0, Fz.useState)(null);
      (0, Fz.useEffect)((() => {
        null !== Oz && sz === Oz && oz(null)
      }), [Oz, sz]);
      const vz = null !== Oz && void 0 !== Oz ? Oz : sz;
      let Uz = Wz("buildAFactory2Game:synthPick");
      return null !== vz && (Uz = Wz("buildAFactory2Game:synthGrows", {
        name: OX(Wz, vz),
        input: OX(Wz, mt),
        water: RO
      })), (0, eX.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, eX.jsx)("div", {
          className: IW()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === vz
          }),
          children: Uz
        }), (0, eX.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: Jt.map(((zz, sz) => {
            const Fz = OX(Wz, zz),
              Oz = zz === vz;
            return (0, eX.jsx)("li", {
              children: (0, eX.jsx)("button", {
                type: "button",
                className: IW()("Baf2SynthTile", {
                  Selected: Oz
                }),
                title: Fz,
                "aria-label": Fz,
                "aria-pressed": Oz,
                onClick: () => {
                  Oz || (oz(zz), Xz.send(`${Ct} ${tz[0]} ${tz[1]} ${tz[2]} ${sz}`))
                },
                children: (0, eX.jsx)(cW.c, {
                  itemName: zz,
                  amount: 0
                })
              })
            }, zz)
          }))
        })]
      })
    }
    const fO = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function EO(zz) {
      let {
        kind: tz,
        tier: sz,
        coupled: Fz,
        level: Wz,
        slot: Xz
      } = zz;
      const {
        t: Oz
      } = (0, GW.B)(), vz = Rz(Mt);
      if (!Fz && null !== sz && sz < vz) return (0, eX.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, eX.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, eX.jsx)(TW.c, {
            name: "lock"
          })
        }), (0, eX.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Oz("buildAFactory2Game:upgradeLocked")
        }), (0, eX.jsx)("span", {
          className: "Baf2TierTag",
          children: Oz("buildAFactory2Game:tierTag", {
            tier: String(vz)
          })
        })]
      });
      const Uz = function(zz, tz) {
          if (oz() && "Crusher" !== zz && null !== tz) {
            if (zo(ht, tz)) return {
              item: ht,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (zo(dt, tz)) return {
              item: dt,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Mt,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(tz, sz),
        Kz = Oz(Fz ? fO[Wz - 1] : Uz.emptyKey),
        uz = null !== sz ? function(zz, tz, sz, Fz) {
          if (!oz() || !sz || "Crusher" === zz || tz < 10) return null;
          const Wz = Rz(ht);
          if (Fz < 3 && Wz > 1 && (2 === Fz || tz >= Wz)) return {
            tier: Wz,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Xz = Rz(dt);
          if (1 === Fz && Xz > 1) return {
            tier: Xz,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(tz, sz, Fz, Wz) : null;
      return (0, eX.jsxs)("div", {
        className: IW()("Baf2UpgradeSocket", {
          Fitted: Fz
        }),
        children: [(0, eX.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Fz && Xz, !Fz && (0, eX.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, eX.jsx)(cW.c, {
              itemName: Uz.item,
              amount: 0
            })
          })]
        }), (0, eX.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, eX.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Oz("buildAFactory2Game:upgradeTitle")
          }), (0, eX.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Kz
          }), Fz && Wz >= 2 && "Crusher" === tz && (0, eX.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Oz("buildAFactory2Game:couplerCrusherHint")
          }), uz && null !== sz && sz < uz.tier && (0, eX.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, eX.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, eX.jsx)(TW.c, {
                name: "lock"
              })
            }), Oz(uz.lockedKey), (0, eX.jsx)("span", {
              className: "Baf2TierTag",
              children: Oz("buildAFactory2Game:tierTag", {
                tier: String(uz.tier)
              })
            })]
          }), uz && null !== sz && sz >= uz.tier && (0, eX.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Oz(uz.nextKey)
          })]
        })]
      })
    }

    function zo(zz, tz) {
      const sz = Rz(zz);
      return sz > 1 && tz >= sz
    }
    var to = sz(36437);
    const so = (0, fz.E)(At.Condenser, At.Condenser.fluidMade),
      Fo = .05;
    class Wo extends IO {}

    function Xo(zz) {
      return rX(zz, "")
    }

    function Oo(zz, tz, sz) {
      return zz(tz ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: sz
      })
    }

    function oo(zz, tz, sz, Fz) {
      return sz <= Fo && Fz <= Fo ? null : Fz <= Fo || sz <= Fo ? Oo(zz, tz, Fz <= Fo ? rX(sz, "+") : rX(Fz, "\u2212")) : zz(tz ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: Xo(sz),
        used: Xo(Fz)
      })
    }

    function vo(zz, tz) {
      return Math.min(100, 100 * zz / Math.max(1, tz))
    }

    function Uo(zz) {
      let {
        stored: tz,
        cap: sz,
        netPerS: Fz,
        rates: Wz,
        cryo: Xz
      } = zz;
      const {
        t: Oz
      } = (0, GW.B)(), oz = function(zz, tz, sz, Fz) {
        return sz <= 0 ? zz("buildAFactory2Game:waterNoStorage") : tz >= sz ? zz("buildAFactory2Game:powerFull") : Fz > Fo ? zz("buildAFactory2Game:powerFullIn", {
          time: mX(zz, (sz - tz) / Fz)
        }) : Fz < -.05 ? tz <= 0 ? zz("buildAFactory2Game:waterEmpty") : zz("buildAFactory2Game:powerEmptyIn", {
          time: mX(zz, tz / -Fz)
        }) : zz("buildAFactory2Game:powerSteady")
      }(Oz, tz, sz, Fz), vz = sz > 0 && tz < sz && Math.abs(Fz) <= Fo, Uz = Oz(Xz ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Kz = null !== Wz ? `${Wz} \xb7 ${oz}` : vz ? Uz : `${Uz} \xb7 ${oz}`;
      return (0, eX.jsxs)(eX.Fragment, {
        children: [(0, eX.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, eX.jsx)("div", {
            style: {
              width: `${vo(tz,sz)}%`
            }
          })
        }), (0, eX.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, eX.jsx)("span", {
            children: sz > 0 && Oz("buildAFactory2Game:powerStored", {
              stored: (0, fz.N)(tz),
              cap: (0, fz.N)(sz)
            })
          }), (0, eX.jsx)("span", {
            className: IW()("Baf2WaterNet", {
              Draining: Fz < -.05
            }),
            children: Kz
          })]
        })]
      })
    }

    function Ko(zz) {
      let {
        water: tz,
        at: sz,
        side: Fz = null
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)(), Xz = lO(), [Oz, oz, vz] = tz;
      return (0, eX.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, eX.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, eX.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Wz(null === Fz ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Fz}`)
          }), (0, eX.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Xz.send(`${fz.B} ${sz[0]} ${sz[1]} ${sz[2]}${"cryoOut"===Fz?" cryo":""}`)
            },
            children: Wz("buildAFactory2Game:waterDetails")
          })]
        }), (0, eX.jsx)(Uo, {
          stored: Oz,
          cap: oz,
          netPerS: vz,
          rates: Oo(Wz, "cryoOut" === Fz, rX(Math.abs(vz), vz < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Fz
        })]
      })
    }

    function uo(zz, tz) {
      var sz, Fz, Wz;
      const Xz = !0 === tz.baf2WaterCryo,
        Oz = null !== (sz = null === (Fz = tz.baf2WaterMakers.find((zz => zz[0] === (Xz ? fz.c : "Condenser")))) || void 0 === Fz ? void 0 : Fz[1]) && void 0 !== sz ? sz : 0,
        oz = [],
        vz = (tz, sz, Fz) => {
          tz > 0 && oz.push(zz(1 === tz ? sz : Fz, {
            count: String(tz)
          }))
        };
      return Xz ? vz(Oz, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : vz(Oz, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), vz(null !== (Wz = tz.baf2WaterPipes) && void 0 !== Wz ? Wz : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), vz(tz.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), oz.join(" \xb7 ")
    }

    function No(zz, tz) {
      if (!0 === tz.baf2WaterCryo) return function(zz, tz) {
        const sz = At[fz.c];
        switch (tz.baf2WaterThis) {
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
            var Fz;
            const [Wz, Xz] = null !== (Fz = tz.baf2WaterThisRates) && void 0 !== Fz ? Fz : [(0, fz.E)(sz, sz.cryoMade), (0, fz.E)(sz, sz.powerPerOp)];
            return !0 === tz.baf2WaterDriven ? {
              text: zz("buildAFactory2Game:cryoThisMixerDriven", {
                rate: Xo(Wz)
              }),
              bad: !1
            } : {
              text: zz("buildAFactory2Game:cryoThisMixer", {
                rate: Xo(Wz),
                power: Xo(Xz)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: zz("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(zz, tz);
      const sz = !0 === tz.baf2WaterDriven,
        Fz = At.Condenser;
      switch (tz.baf2WaterThis) {
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
              tank: (0, fz.N)(fz.q),
              cap: (0, fz.N)(tz.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Wz;
          const [Xz, Oz] = null !== (Wz = tz.baf2WaterThisRates) && void 0 !== Wz ? Wz : [so, (0, fz.E)(Fz, Fz.powerPerOp)];
          return sz ? {
            text: zz("buildAFactory2Game:waterThisCondenserDriven", {
              rate: Xo(Xz)
            }),
            bad: !1
          } : {
            text: zz("buildAFactory2Game:waterThisCondenser", {
              rate: Xo(Xz),
              power: Xo(Oz)
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

    function bo(zz, tz) {
      const sz = tz.baf2WaterMakers.some((zz => !0 === zz[5]));
      if (!0 === tz.baf2WaterCryo) {
        const Fz = tz.baf2WaterUsedPerS - tz.baf2WaterMadePerS,
          Wz = sz || Fz <= Fo ? 0 : (0, fz.D)(Fz);
        return 0 === Wz ? null : Wz > 1 ? zz("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Wz)
        }) : zz("buildAFactory2Game:cryoNextOne")
      }
      const Fz = sz ? null : function(zz, tz) {
        const sz = tz - zz;
        return sz <= Fo ? null : Math.ceil(sz / so)
      }(tz.baf2WaterMadePerS, tz.baf2WaterUsedPerS);
      return null === Fz ? null : Fz > 1 ? zz("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Fz)
      }) : zz("buildAFactory2Game:waterNextOne")
    }

    function wo(zz) {
      let {
        item: tz,
        label: sz,
        note: Fz,
        value: Wz,
        dim: Xz,
        bad: Oz
      } = zz;
      return (0, eX.jsxs)("li", {
        className: IW()("Baf2WaterRow", {
          Dim: Xz,
          Bad: Oz
        }),
        children: [(0, eX.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, eX.jsx)(cW.c, {
            itemName: tz,
            amount: 0
          })
        }), (0, eX.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, eX.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: sz
          }), Fz && (0, eX.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Fz
          })]
        }), (0, eX.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Wz
        })]
      })
    }

    function Do(zz) {
      return to.m[zz] ? zz : "Reactor Port"
    }

    function go(zz) {
      let {
        message: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)(), Fz = !0 === tz.baf2WaterCryo, Wz = (zz, tz) => Oo(sz, Fz, rX(zz, tz));
      return (0, eX.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, eX.jsxs)("section", {
          children: [(0, eX.jsxs)("h3", {
            children: [sz("buildAFactory2Game:waterMakes"), (0, eX.jsx)("span", {
              children: Wz(tz.baf2WaterMadePerS, "+")
            })]
          }), (0, eX.jsxs)("ul", {
            children: [0 === tz.baf2WaterMakers.length && (0, eX.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: sz(Fz ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), tz.baf2WaterMakers.map((zz => {
              let [tz, Fz, Xz, Oz, oz, vz] = zz;
              const Uz = sz("buildAFactory2Game:powerRunning", {
                amount: String(Xz)
              });
              let Kz = oz > 0 ? sz("buildAFactory2Game:waterMakerPower", {
                running: Uz,
                power: Xo(oz)
              }) : Uz;
              return vz && (Kz = sz(0 === Xz && Oz <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, eX.jsx)(wo, {
                item: tz,
                label: `${OX(sz,tz)} \xd7${Fz}`,
                note: Kz,
                value: Xz > 0 || vz && Oz > 0 ? Wz(Oz, "+") : sz("buildAFactory2Game:powerIdle"),
                dim: 0 === Xz && !vz,
                bad: vz
              }, tz)
            }))]
          })]
        }), (0, eX.jsxs)("section", {
          children: [(0, eX.jsxs)("h3", {
            children: [sz("buildAFactory2Game:waterUses"), (0, eX.jsx)("span", {
              children: Wz(tz.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, eX.jsxs)("ul", {
            children: [0 === tz.baf2WaterUsers.length && (0, eX.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: sz(Fz ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), tz.baf2WaterUsers.map((zz => {
              let [tz, Fz, Xz, Oz] = zz;
              const oz = to.m[tz] ? OX(sz, tz) : tz;
              return (0, eX.jsx)(wo, {
                item: Do(tz),
                label: Fz > 1 ? `${oz} \xd7${Fz}` : oz,
                note: Oz ? sz("buildAFactory2Game:waterPortFirst") : void 0,
                value: Xz > 0 ? Wz(Xz, "\u2212") : sz("buildAFactory2Game:powerIdle"),
                dim: 0 === Xz
              }, tz)
            }))]
          })]
        })]
      })
    }

    function Ho(zz) {
      var tz, sz, Wz, Xz, Oz;
      let {
        store: oz,
        close: vz
      } = zz;
      const {
        t: Uz
      } = (0, GW.B)(), Kz = function(zz) {
        const [tz, sz] = (0, Fz.useState)((() => zz.get()));
        return (0, Fz.useEffect)((() => (sz(zz.get()), zz.subscribe((() => {
          sz(zz.get())
        })))), [zz]), tz
      }(oz), uz = null !== (tz = null === Kz || void 0 === Kz ? void 0 : Kz.baf2WaterStored) && void 0 !== tz ? tz : 0, Nz = null !== (sz = null === Kz || void 0 === Kz ? void 0 : Kz.baf2WaterCap) && void 0 !== sz ? sz : 0, bz = null !== (Wz = null === Kz || void 0 === Kz ? void 0 : Kz.baf2WaterMadePerS) && void 0 !== Wz ? Wz : 0, wz = null !== (Xz = null === Kz || void 0 === Kz ? void 0 : Kz.baf2WaterUsedPerS) && void 0 !== Xz ? Xz : 0, Dz = null !== (Oz = null === Kz || void 0 === Kz ? void 0 : Kz.baf2WaterNetPerS) && void 0 !== Oz ? Oz : bz - wz, gz = Kz && No(Uz, Kz), Hz = Kz && bo(Uz, Kz), Bz = !0 === (null === Kz || void 0 === Kz ? void 0 : Kz.baf2WaterCryo);
      return (0, eX.jsx)(mO.b, {
        close: vz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, eX.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Kz && Nz <= 0 ? (0, eX.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, eX.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, eX.jsx)(cW.c, {
                  itemName: Bz ? Ds.d : fz.k,
                  amount: 0
                })
              }), (0, eX.jsxs)("div", {
                children: [(0, eX.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Uz(Bz ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Kz && (0, eX.jsx)("p", {
                  children: uo(Uz, Kz)
                })]
              })]
            }), (0, eX.jsx)(JO.n, {
              onClick: vz
            })]
          }), Kz && gz && (0, eX.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, eX.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, eX.jsx)(Uo, {
                stored: uz,
                cap: Nz,
                netPerS: Dz,
                cryo: Bz,
                rates: oo(Uz, Bz, bz, wz)
              })
            }), (0, eX.jsx)("div", {
              className: IW()("Baf2WaterThis", {
                Bad: gz.bad
              }),
              children: gz.text
            }), Kz.baf2WaterDriven && (0, eX.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, eX.jsx)(TW.c, {
                name: "bolt"
              }), Uz(Bz ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), Hz && (0, eX.jsx)("p", {
              className: "Baf2WaterNext",
              children: Hz
            }), (0, eX.jsx)(go, {
              message: Kz
            })]
          })]
        })
      })
    }
    class Bo {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(zz, tz) {
        const sz = this.get(zz);
        sz && null === tz.opLeftMs && null === tz.fuelLeftMs && tz.status === sz.status ? tz = {
          ...tz,
          opLeftMs: sz.opLeftMs,
          fuelLeftMs: sz.fuelLeftMs,
          burning: sz.burning
        } : this.updates++, this.pos = zz, this.view = tz;
        for (const Fz of this.listeners) Fz()
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

    function Po(zz, tz, sz, Fz) {
      return "noFuel" === tz && Fz && !Xs(At[zz]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === tz && !0 === (null === sz || void 0 === sz ? void 0 : sz.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === tz && !0 === (null === sz || void 0 === sz ? void 0 : sz.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === tz && !0 === (null === sz || void 0 === sz ? void 0 : sz.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === tz && !0 === (null === sz || void 0 === sz ? void 0 : sz.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : ro(tz, sz) ? "buildAFactory2Game:machineStatus_noInputShort" : function(zz, tz) {
        const sz = At[zz];
        if ("noFuel" === tz && void 0 !== sz.fuels) return Xs(sz) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (sz.mobFarm && ("noInput" === tz || "badInput" === tz)) return `buildAFactory2Game:machineStatus_${tz}MobFarm`;
        if ("outputFull" === tz && (void 0 !== sz.table || sz.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === tz && St(sz)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== sz.cryoMade && ("noInput" === tz || "noOutlet" === tz || "fluidFull" === tz)) return `buildAFactory2Game:machineStatus_${tz}Mixer`;
        return `buildAFactory2Game:machineStatus_${tz}`
      }(zz, tz)
    }

    function ro(zz, tz) {
      return "noInput" === zz && null !== tz && void 0 !== tz && tz.input && tz.inputShort ? {
        input: tz.input,
        short: tz.inputShort
      } : null
    }

    function Yo(zz) {
      return CW(zz) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== zz.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function xo(zz) {
      const tz = (0, Az.ue)(zz);
      return `Baf2Pane Baf2Pane${tz.charAt(0).toUpperCase()}${tz.slice(1)}`
    }

    function mo(zz, tz) {
      const [sz, Wz] = (0, Fz.useState)((() => zz.get(tz)));
      return (0, Fz.useEffect)((() => {
        Wz(zz.get(tz));
        const sz = zz.subscribe((() => {
          Wz(zz.get(tz))
        }));
        return () => {
          sz(), zz.forget(tz)
        }
      }), [zz, ...tz]), sz
    }

    function Jo(zz, tz, sz, Fz) {
      const Wz = At[zz],
        Xz = tz && Wz.couplable ? Lt(Wz, sz) : Wz,
        Oz = null !== Fz && ss(Xz) ? function(zz, tz) {
          var sz;
          return null !== (sz = null !== tz && ss(zz) ? vs[tz] : void 0) && void 0 !== sz ? sz : zz.opMs
        }(Xz, Us(Fz)) : Xz.opMs;
      return Oz === Xz.opMs ? Xz : {
        ...Xz,
        opMs: Oz
      }
    }

    function Io(zz) {
      let {
        running: tz,
        opMs: sz,
        opLeftMs: Fz,
        updateCount: Wz
      } = zz;
      return (0, eX.jsx)("div", {
        className: IW()("Baf2MachineProgress", {
          Running: tz
        }),
        children: (0, eX.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: sz / 1e3 + "s",
            animationDelay: null === Fz ? void 0 : (Fz - sz) / 1e3 + "s"
          }
        }, Wz)
      })
    }

    function Co(zz) {
      let {
        running: tz,
        leftMs: sz,
        periodMs: Fz,
        updateCount: Wz
      } = zz;
      const {
        t: Xz
      } = (0, GW.B)(), Oz = Math.min(Math.max(null !== sz && void 0 !== sz ? sz : 0, 0), Fz), oz = tz && Oz > 0, vz = Xz("buildAFactory2Game:machineBarFuel");
      return (0, eX.jsx)("div", {
        className: IW()("Baf2FuelBurn", {
          Draining: oz
        }),
        role: "img",
        title: vz,
        "aria-label": vz,
        children: (0, eX.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: oz ? {
            animationDuration: Fz / 1e3 + "s",
            animationDelay: (Oz - Fz) / 1e3 + "s"
          } : {
            transform: `scaleY(${Oz/Fz})`
          }
        }, Wz)
      })
    }

    function eo(zz, tz, sz) {
      let [Fz, Wz] = sz;
      const Xz = 1 !== Fz ? ZW(tz) : null;
      return {
        amount: Fz,
        have: Wz,
        item: zz(Xz || XX(tz))
      }
    }

    function Zo(zz) {
      return ss(zz) ? "buildAFactory2Game:machineBarMining" : Fs(zz) ? "buildAFactory2Game:machineBarCutting" : void 0 !== zz.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Go(zz) {
      var tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz;
      let {
        kind: rz,
        oO: Yz,
        store: xz,
        power: mz,
        renderSlot: Jz
      } = zz;
      const {
        t: Iz
      } = (0, GW.B)(), Cz = mo(xz, Yz), ez = At[rz], Zz = null !== (tz = null === Cz || void 0 === Cz ? void 0 : Cz.coupled) && void 0 !== tz && tz, Gz = null !== (sz = null === Cz || void 0 === Cz ? void 0 : Cz.couplerLevel) && void 0 !== sz ? sz : 1, Tz = Jo(rz, Zz, Gz, null !== (Fz = null === Cz || void 0 === Cz || null === (Wz = Cz.dug) || void 0 === Wz ? void 0 : Wz.item) && void 0 !== Fz ? Fz : null), cz = null !== (Xz = null === Cz || void 0 === Cz ? void 0 : Cz.status) && void 0 !== Xz ? Xz : null, jz = null !== (Oz = null === Cz || void 0 === Cz ? void 0 : Cz.power) && void 0 !== Oz ? Oz : null, Az = null !== (oz = null === Cz || void 0 === Cz ? void 0 : Cz.opLeftMs) && void 0 !== oz ? oz : null, yz = null !== (vz = null === Cz || void 0 === Cz ? void 0 : Cz.dug) && void 0 !== vz ? vz : null, Mz = null !== yz && ss(ez) ? vs[null !== (Uz = Us(yz.item)) && void 0 !== Uz ? Uz : ""] : void 0, dz = void 0 === Mz ? null : 6e4 / Mz, hz = null !== (Kz = null === Cz || void 0 === Cz ? void 0 : Cz.powerCap) && void 0 !== Kz ? Kz : 4e3, Qz = null !== (uz = null === Cz || void 0 === Cz ? void 0 : Cz.tier) && void 0 !== uz ? uz : null, kz = void 0 !== Tz.powerMade, iz = null !== ez.fuelSlot ? Jz(ez.fuelSlot) : null, Lz = it(ez), lz = !Zz && !0 === (null === Cz || void 0 === Cz ? void 0 : Cz.fuelFed), az = !Zz && !0 === (null === Cz || void 0 === Cz ? void 0 : Cz.fuelFeeds), qz = null !== ez.fuelSlot && !Zz, Sz = null !== (Nz = null === Cz || void 0 === Cz ? void 0 : Cz.fuelLeftMs) && void 0 !== Nz ? Nz : null, Vz = function(zz, tz, sz) {
        var Fz;
        const Wz = null === tz ? void 0 : Os[tz];
        return Math.max(null !== (Fz = null !== Wz && void 0 !== Wz ? Wz : sz) && void 0 !== Fz ? Fz : 0, zz.opMs)
      }(Tz, null !== (bz = null === Cz || void 0 === Cz ? void 0 : Cz.burning) && void 0 !== bz ? bz : null, Sz), Rz = null !== (wz = null === Cz || void 0 === Cz ? void 0 : Cz.fuelKeep) && void 0 !== wz ? wz : null, pz = null === cz ? null : Po(rz, cz, Cz, lz), fz = null === cz ? null : ro(cz, Cz);
      return (0, eX.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, eX.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, eX.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Iz(XX(rz))
          }), yz && (0, eX.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [Iz("Tree Cutter" === rz ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, eX.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, eX.jsx)(cW.c, {
                itemName: yz.item,
                amount: 0
              })
            }), (0, eX.jsx)(jW.c, {
              text: yz.name
            })]
          }), null !== dz && (0, eX.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: Iz("buildAFactory2Game:machineDigsFixed", {
              perMin: String(dz)
            })
          }), (null === Cz || void 0 === Cz ? void 0 : Cz.field) && (0, eX.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, eX.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, eX.jsx)(cW.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), Iz("buildAFactory2Game:machineField", {
              planted: String(Cz.field[0]),
              ripe: String(Cz.field[1])
            })]
          }), (0, eX.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, eX.jsxs)("div", {
              className: IW()("Baf2MachineColumn", {
                Baf2Burns: qz
              }),
              children: [null !== Tz.inputSlot && (0, eX.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, eX.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Iz(Yo(Tz))
                }), Jz(Tz.inputSlot)]
              }), null !== ez.fuelSlot && !Zz && (0, eX.jsxs)("div", {
                className: IW()("Baf2MachineSlot", {
                  Baf2FuelFed: lz
                }),
                children: [(0, eX.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [lz && (0, eX.jsx)(TW.c, {
                    name: "fire"
                  }), Iz("buildAFactory2Game:machineFuel")]
                }), (0, eX.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, eX.jsx)(Co, {
                    running: "running" === cz,
                    leftMs: Sz,
                    periodMs: Vz,
                    updateCount: xz.updateCount
                  }), iz]
                })]
              }), null !== ez.fuelSlot && Zz && (0, eX.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, eX.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Iz("buildAFactory2Game:machineFuel")
                }), (0, eX.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: Iz("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": Iz("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, eX.jsx)(TW.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, eX.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, eX.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Iz(Zo(Tz))
              }), (0, eX.jsx)(Io, {
                running: "running" === cz,
                opMs: Tz.opMs,
                opLeftMs: Az,
                updateCount: xz.updateCount
              })]
            }), Tz.outputSlots.length > 0 && (0, eX.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, eX.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Iz("buildAFactory2Game:machineOutput")
              }), (0, eX.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Tz.outputSlots.map((zz => (0, eX.jsx)("div", {
                  children: Jz(zz)
                }, zz)))
              })]
            }), null !== jz && kz && (0, eX.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, eX.jsx)("div", {
                style: {
                  height: 100 * jz / hz + "%"
                }
              })
            })]
          }), qz && null !== Rz && (0, eX.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, eX.jsx)(TW.c, {
              name: "arrows-rotate"
            }), Iz(Fs(Tz) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Rz)
            })]
          }), (lz || az) && (0, eX.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, eX.jsx)(TW.c, {
              name: "fire"
            }), Iz(lz ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), ez.couplable && (0, eX.jsx)(EO, {
            kind: rz,
            tier: Qz,
            coupled: Zz,
            level: Gz,
            slot: Lz === ez.fuelSlot ? iz : null !== Lz ? Jz(Lz) : null
          }), null !== jz && !kz && !0 === (null === Cz || void 0 === Cz ? void 0 : Cz.reactorPowered) && (0, eX.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: Iz("buildAFactory2Game:machineReactorPowered")
          }), null !== jz && !kz && !0 !== (null === Cz || void 0 === Cz ? void 0 : Cz.reactorPowered) && (0, eX.jsx)(cO, {
            stored: jz,
            cap: hz,
            rates: null !== (Dz = null === Cz || void 0 === Cz ? void 0 : Cz.powerRates) && void 0 !== Dz ? Dz : null
          }), (null === Cz || void 0 === Cz ? void 0 : Cz.water) && (0, eX.jsx)(Ko, {
            water: Cz.water,
            at: Yz,
            side: Cz.cryo ? "waterIn" : null
          }), (null === Cz || void 0 === Cz ? void 0 : Cz.cryo) && (0, eX.jsx)(Ko, {
            water: Cz.cryo,
            at: Yz,
            side: "cryoOut"
          }), null !== Cz && void 0 !== Cz && Cz.inertCoupler ? (0, eX.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: Iz("buildAFactory2Game:machineStatus_couplerOff", {
              item: OX(Iz, Cz.inertCoupler)
            })
          }) : null !== pz && (0, eX.jsx)("div", {
            className: IW()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== cz
            }),
            children: Iz(pz, fz ? eo(Iz, fz.input, fz.short) : void 0)
          })]
        }), (0, eX.jsxs)("div", {
          className: IW()("Baf2MachineSide", {
            Baf2SynthSide: St(ez)
          }),
          children: [St(ez) && (0, eX.jsx)(pO, {
            oO: Yz,
            taught: null !== (gz = null === Cz || void 0 === Cz ? void 0 : Cz.taught) && void 0 !== gz ? gz : null
          }, Yz.join(",")), kz && (0, eX.jsx)(AO, {
            kind: rz,
            def: Tz,
            oO: Yz,
            power: mz,
            stored: null !== jz && void 0 !== jz ? jz : 0,
            cap: hz
          }), nz(ez) && (0, eX.jsx)(SO, {
            oO: Yz,
            input: null !== (Hz = null === Cz || void 0 === Cz ? void 0 : Cz.input) && void 0 !== Hz ? Hz : null,
            drops: null !== (Bz = null === Cz || void 0 === Cz ? void 0 : Cz.farm) && void 0 !== Bz ? Bz : null,
            seconds: String(Tz.opMs / 1e3)
          }), !kz && !nz(ez) && !St(ez) && (0, eX.jsx)(XO, {
            kind: rz,
            def: Tz,
            input: null !== (Pz = null === Cz || void 0 === Cz ? void 0 : Cz.input) && void 0 !== Pz ? Pz : null,
            tier: null !== Qz && void 0 !== Qz ? Qz : 1,
            noSeeds: !0 === (null === Cz || void 0 === Cz ? void 0 : Cz.noSeeds)
          })]
        })]
      })
    }

    function To(zz, tz, sz, Fz) {
      var Wz;
      const Xz = At[zz],
        Oz = [Xz.inputSlot, Xz.fuelSlot, ...null !== (Wz = Xz.inputSlots) && void 0 !== Wz ? Wz : []].filter((zz => null !== zz));
      return {
        render: Wz => {
          let {
            oO: Xz,
            renderSlot: Oz
          } = Wz;
          return (0, eX.jsx)(LO.Provider, {
            value: Fz,
            children: (0, eX.jsx)(Go, {
              kind: zz,
              oO: Xz,
              store: tz,
              power: sz,
              renderSlot: Oz
            })
          })
        },
        quickMoveRange: Oz.length > 0 ? [Math.min(...Oz), Math.max(...Oz) + 1] : [0, 0],
        className: xo(zz)
      }
    }
    const co = "Assembler";

    function jo(zz) {
      var tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz;
      let {
        oO: Kz,
        store: uz,
        renderSlot: Nz
      } = zz;
      const {
        t: bz
      } = (0, GW.B)(), wz = mo(uz, Kz), Dz = null !== (tz = null === wz || void 0 === wz ? void 0 : wz.tier) && void 0 !== tz ? tz : 1, gz = null !== (sz = null === wz || void 0 === wz ? void 0 : wz.taught) && void 0 !== sz ? sz : null, Hz = ft(co, {
        coupled: !1,
        taught: gz
      }), Bz = null !== (Fz = Hz.bench) && void 0 !== Fz ? Fz : null, Pz = null !== (Wz = null === wz || void 0 === wz ? void 0 : wz.status) && void 0 !== Wz ? Wz : null, rz = null !== (Xz = null === wz || void 0 === wz ? void 0 : wz.power) && void 0 !== Xz ? Xz : null, Yz = null !== (Oz = null === wz || void 0 === wz ? void 0 : wz.powerCap) && void 0 !== Oz ? Oz : 4e3;
      return (0, eX.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, eX.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, eX.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: bz(XX(co))
          }), Bz && (0, eX.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [bz("buildAFactory2Game:benchMakes"), (0, eX.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, eX.jsx)(cW.c, {
                itemName: Bz.output,
                amount: 0
              })
            }), (null === wz || void 0 === wz ? void 0 : wz.taughtName) && (0, eX.jsx)(jW.c, {
              text: wz.taughtName
            }), Bz.outputAmount > 1 && (0, eX.jsxs)("span", {
              children: ["\xd7", Bz.outputAmount]
            })]
          }), !Bz && (0, eX.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: bz("buildAFactory2Game:benchTeachHint")
          }), (0, eX.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, eX.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (oz = Hz.inputSlots) && void 0 !== oz ? oz : []).map(((zz, tz) => {
                const sz = null === Bz || void 0 === Bz ? void 0 : Bz.inputs[tz];
                return (0, eX.jsxs)("div", {
                  className: IW()("Baf2BenchInput", {
                    Spare: !sz
                  }),
                  children: [(0, eX.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Nz(zz), sz && (0, eX.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, eX.jsx)(cW.c, {
                        itemName: sz.item,
                        amount: 0
                      })
                    })]
                  }), (0, eX.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: sz ? `\xd7${sz.amount}` : "\xa0"
                  })]
                }, zz)
              }))
            }), (0, eX.jsx)(Io, {
              running: "running" === Pz,
              opMs: Hz.opMs,
              opLeftMs: null !== (vz = null === wz || void 0 === wz ? void 0 : wz.opLeftMs) && void 0 !== vz ? vz : null,
              updateCount: uz.updateCount
            }), (0, eX.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, eX.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: bz("buildAFactory2Game:machineOutput")
              }), (0, eX.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Hz.outputSlots.map((zz => (0, eX.jsx)("div", {
                  children: Nz(zz)
                }, zz)))
              })]
            })]
          }), null !== rz && (0, eX.jsx)(cO, {
            stored: rz,
            cap: Yz,
            rates: null !== (Uz = null === wz || void 0 === wz ? void 0 : wz.powerRates) && void 0 !== Uz ? Uz : null
          }), null !== Pz && (0, eX.jsx)("div", {
            className: IW()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Pz
            }),
            children: bz(Po(co, Pz, wz, !1))
          }), Bz && Bz.inputs.length > 1 && (0, eX.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: bz("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, eX.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, eX.jsx)(oO, {
            taught: gz,
            tier: Dz
          }), Bz && (0, eX.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: bz("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Ao(zz) {
      var tz;
      const sz = null !== (tz = At[co].inputSlots) && void 0 !== tz ? tz : [];
      return {
        render: tz => {
          let {
            oO: sz,
            renderSlot: Fz
          } = tz;
          return (0, eX.jsx)(jo, {
            oO: sz,
            store: zz,
            renderSlot: Fz
          })
        },
        quickMoveRange: [Math.min(...sz), Math.max(...sz) + 1],
        className: xo(co)
      }
    }
    var yo = sz(106),
      Mo = sz(1116),
      ho = sz(3926);
    const Qo = 600,
      ko = .5,
      io = 4,
      Lo = 1200,
      no = 140,
      ao = 100,
      qo = 32,
      So = 16,
      Vo = 100.5,
      Ro = 90,
      po = 1.5,
      fo = 50;

    function Eo(zz) {
      switch (As(zz)) {
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
    const zv = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function tv(zz) {
      const tz = Math.ceil(60 * zz / ao);
      return {
        fuel: Math.max(qo, tz),
        waste: Math.max(So, tz)
      }
    }

    function sv(zz, tz, sz) {
      const [Fz, Wz, Xz] = [zz - 2, tz - 2, sz - 2];
      return 2 * (Fz * Wz + Wz * Xz + Xz * Fz) * no
    }

    function Fv(zz, tz, sz) {
      return Math.max(0, zz - 2) * Math.max(0, tz - 2) * Math.max(0, sz - 2)
    }

    function Wv(zz, tz) {
      const [sz, Fz, Wz] = zz, Xz = sz * Fz * Wz, Oz = new Float32Array(Xz);
      let oz = 0,
        vz = 0,
        Uz = 0,
        Kz = 0,
        uz = 0;
      const Nz = (zz, Xz, Oz) => zz < 0 || zz >= sz || Xz < 0 || Xz >= Fz || Oz < 0 || Oz >= Wz ? 0 : tz[(Xz * Wz + Oz) * sz + zz];
      for (let gz = 0; gz < Fz; gz++)
        for (let zz = 0; zz < Wz; zz++)
          for (let Fz = 0; Fz < sz; Fz++) {
            const Xz = (gz * Wz + zz) * sz + Fz,
              bz = tz[Xz];
            if (1 === bz) {
              oz++;
              let tz = 0;
              for (const [sz, Wz, Xz] of zv) {
                const Oz = Nz(Fz + sz, gz + Wz, zz + Xz);
                1 !== Oz && 2 !== Oz || tz++
              }
              Oz[Xz] = Qo * (1 + ko * Math.min(tz, io)), Kz += Oz[Xz]
            } else if (2 === bz) vz++;
            else if (3 === bz) {
              Uz++;
              zv.some((tz => {
                let [sz, Wz, Xz] = tz;
                return 1 === Nz(Fz + sz, gz + Wz, zz + Xz)
              })) && (uz += Lo)
            }
          }
      const bz = sv(sz + 2, Fz + 2, Wz + 2),
        wz = Math.min(Kz, uz, bz),
        Dz = oz > 0 ? Kz * ao / oz : 0;
      return {
        rods: oz,
        graphite: vz,
        channels: Uz,
        fuelHeat: Kz,
        cooling: uz,
        size: bz,
        max: wz,
        vol: Xz,
        powerPerUnit: Dz,
        pelletsPerMin: Dz > 0 ? wz / Dz * 60 : 0,
        waterPerS: wz * fz.n,
        rodHeat: Oz
      }
    }
    const Xv = 0,
      Ov = 1,
      ov = 6,
      vv = 7,
      Uv = 8;

    function Kv(zz, tz) {
      const [sz, Fz, Wz] = zz, Xz = new Uint8Array(sz * Fz * Wz), Oz = (zz, Xz, Oz) => zz < 0 || zz >= sz || Xz < 0 || Xz >= Fz || Oz < 0 || Oz >= Wz ? 0 : tz[(Xz * Wz + Oz) * sz + zz];
      for (let oz = 0; oz < Fz; oz++)
        for (let zz = 0; zz < Wz; zz++)
          for (let Fz = 0; Fz < sz; Fz++) {
            const vz = (oz * Wz + zz) * sz + Fz,
              Uz = tz[vz];
            if (1 === Uz) {
              let tz = 0;
              for (const [sz, Wz, Xz] of zv) {
                const vz = Oz(Fz + sz, oz + Wz, zz + Xz);
                tz += 1 === vz || 2 === vz ? 1 : 0
              }
              Xz[vz] = Ov + Math.min(tz, io)
            } else if (3 === Uz) {
              const tz = zv.some((tz => {
                let [sz, Wz, Xz] = tz;
                return 1 === Oz(Fz + sz, oz + Wz, zz + Xz)
              }));
              Xz[vz] = tz ? ov : vv
            } else 2 === Uz && (Xz[vz] = Uv)
          }
      return Xz
    }

    function uv(zz) {
      return zz.fuelHeat <= zz.cooling && zz.fuelHeat <= zz.size ? "fuel" : zz.cooling <= zz.size ? "cooling" : "size"
    }
    const Nv = Ro;

    function bv(zz, tz, sz) {
      return Math.round(zz * tz * sz * 25e3 * (1 + .25 * (Math.min(zz, tz, sz) - 2)))
    }

    function wv(zz) {
      return Math.max(0, Math.min(fz.g, zz))
    }

    function Dv(zz, tz, sz) {
      const Fz = tz * wv(sz);
      return zz <= 0 ? 0 : Fz > 0 ? Math.min(200, 100 * zz / Fz) : 200
    }

    function gv(zz, tz) {
      const sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? po : 1;
      return Math.min(zz.fuelHeat * sz, zz.cooling * wv(tz), zz.size * sz)
    }

    function Hv(zz) {
      return 2 + zz / 10
    }
    const Bv = "buildAFactory2Game:";

    function Pv(zz) {
      var tz;
      return null !== (tz = zz.baf2RxMood) && void 0 !== tz ? tz : function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const sz = [
          ["calm", 50],
          ["warm", Nv],
          ["hot", Vo]
        ];
        for (const [Fz, Wz] of sz)
          if (zz < Wz + (Fz === tz ? 3 : 0)) return Fz;
        return "alarm"
      }(zz.baf2RxHeat)
    }
    const rv = 120;

    function Yv(zz) {
      const tz = zz.baf2RxState;
      if ("running" === tz && zz.baf2RxHeat > Vo) return {
        label: `${Bv}rxState_tooHot`,
        tone: "bad",
        fix: `${Bv}rxFix_tooHot`
      };
      switch (tz) {
        case "running":
          return {
            label: `${Bv}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Bv}rxState_idle`, tone: "off", fix: `${Bv}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Bv}rxState_scram`, tone: "off", fix: zz.baf2RxHeat < fo ? `${Bv}rxFix_scramCool` : `${Bv}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Bv}rxState_${tz}`, tone: "off", fix: `${Bv}rxFix_${tz}`
          };
        case "melted":
          return {
            label: `${Bv}rxState_melted`, tone: "bad", fix: `${Bv}rxFix_melted`
          };
        default:
          return {
            label: `${Bv}rxState_${tz}`, tone: "warn", fix: `${Bv}rxFix_${tz}`
          }
      }
    }

    function xv(zz) {
      const [tz, sz, Fz] = zz.baf2RxStats;
      return {
        fuelHeat: tz,
        cooling: sz * (zz.baf2RxCryo ? Math.max(1, wv(zz.baf2RxWater / 100)) : 1),
        size: Fz
      }
    }

    function mv(zz) {
      var tz;
      const sz = "idle" === zz.baf2RxState || "running" === zz.baf2RxState && zz.baf2RxHeat <= Vo || "scram" === zz.baf2RxState && zz.baf2RxHeat < fo;
      if (0 === (zz.baf2RxFlags & rt) || !zz.baf2RxFormed || !sz) return null;
      const {
        fuelHeat: Fz,
        cooling: Wz,
        size: Xz
      } = xv(zz), Oz = Math.min(Fz, Wz, Xz), oz = uv({
        fuelHeat: Fz,
        cooling: Wz,
        size: Xz
      }), vz = "cooling" === oz && !0 === zz.baf2RxCryoOpen && !zz.baf2RxCryo, Uz = null !== (tz = zz.baf2RxCells) && void 0 !== tz ? tz : "", Kz = ("fuel" === oz || "cooling" === oz && !0 === zz.baf2RxCryo) && Uz.length > 0 && !Uz.includes(String(0)), uz = vz ? "Cryo" : "scram" === zz.baf2RxState ? "Off" : "";
      return Oz < 12e3 ? {
        key: `${Bv}rxGrow_${Kz?"full":oz}${uz}`,
        amount: Oz
      } : null
    }

    function Jv(zz, tz) {
      return zz[0] === tz[0] && zz[1] === tz[1] && zz[2] === tz[2]
    }

    function Iv(zz) {
      return [...zz].sort(((zz, tz) => Number(tz[2] < tz[1]) - Number(zz[2] < zz[1])))
    }

    function Cv(zz, tz) {
      return tz.some((tz => {
        let [sz, Fz] = tz;
        return !(Fz <= 0) && ["edge", "cap", "wall", "inside"].some((tz => sz === vF(zz, tz)))
      }))
    }

    function ev(zz, tz, sz) {
      const Fz = zz.baf2RxFuel - zz.baf2RxPu > 0 ? sz : 0;
      return {
        full: zz.baf2RxWaste > tz - 3,
        fullInS: Fz > 0 ? Math.max(0, tz - zz.baf2RxWaste) / Fz : null
      }
    }
    const Zv = {
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

    function Gv(zz) {
      return Tv[zz]
    }
    const Tv = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function cv(zz) {
      let [tz, sz, Fz] = zz;
      return Math.ceil(sv(tz, sz, Fz) * fz.n)
    }

    function jv(zz, tz) {
      return "battery" === zz ? tz[0] * tz[1] * tz[2] : function(zz) {
        let [tz, sz, Fz] = zz;
        return tz * sz * Fz - Math.max(0, tz - 2) * Math.max(0, sz - 2) * Math.max(0, Fz - 2)
      }(tz) - 1
    }

    function Av(zz) {
      const tz = Math.max(0, zz);
      if (tz < 10) return String(Math.round(10 * tz) / 10);
      if (tz < 1e4) return Math.round(tz).toLocaleString("en-US");
      if (tz < 1e6) return `${tz<1e5?(Math.floor(tz/100)/10).toFixed(1):Math.floor(tz/1e3)}k`;
      const sz = tz / 1e6;
      return `${sz<10?(Math.floor(100*sz)/100).toFixed(2):sz<100?(Math.floor(10*sz)/10).toFixed(1):Math.floor(sz)}M`
    }

    function yv(zz) {
      return zz <= 0 ? "0" : zz >= 10 ? String(Math.round(zz)) : zz.toFixed(zz >= 1 ? 1 : 2)
    }

    function Mv(zz) {
      const tz = tF(zz, 0),
        sz = tF(zz, ps(zz) - 1);
      return {
        lo: [Math.min(tz[0], sz[0]), Math.min(tz[1], sz[1]), Math.min(tz[2], sz[2])],
        hi: [Math.max(tz[0], sz[0]) + 1, Math.max(tz[1], sz[1]) + 1, Math.max(tz[2], sz[2]) + 1]
      }
    }

    function dv(zz, tz, sz) {
      const Fz = [tz[0] - zz[0], tz[1] - zz[1], tz[2] - zz[2]],
        Wz = [(zz[0] + tz[0]) / 2, (zz[1] + tz[1]) / 2, (zz[2] + tz[2]) / 2],
        Xz = [];
      for (let Oz = 0; Oz < 3; Oz++) {
        const oz = (Oz + 1) % 3,
          vz = (Oz + 2) % 3;
        for (const Uz of [zz[oz], tz[oz]])
          for (const Kz of [zz[vz], tz[vz]]) {
            const zz = [0, 0, 0],
              tz = [sz, sz, sz];
            zz[Oz] = Wz[Oz], tz[Oz] = Fz[Oz] + sz, zz[oz] = Uz, zz[vz] = Kz, Xz.push([zz, tz])
          }
      }
      return Xz
    }
    const hv = "buildAFactory2Game:",
      Qv = [`${hv}colNorth`, `${hv}colEast`, `${hv}colSouth`, `${hv}colWest`];

    function kv(zz, tz) {
      const [sz, Fz, Wz] = zz.baf2ColAt;
      return `baf2col ${sz} ${Fz} ${Wz} ${tz}`
    }

    function iv(zz) {
      return function(zz) {
        if (!Number.isFinite(zz)) return "";
        const tz = Math.max(1, Math.round(zz));
        if (tz < 60) return `${tz}s`;
        const sz = tz % 60;
        return 0 === sz ? tz / 60 + "m" : `${Math.floor(tz/60)}m ${sz}s`
      }(function(zz) {
        const tz = UF.FOCUS_BY_LASERS[Math.max(0, Math.min(4, zz))];
        return tz > 0 ? UF.NOVA_FOCUS / tz : 1 / 0
      }(zz))
    }

    function Lv(zz) {
      const tz = Math.abs(Math.round(zz));
      return tz < 1e3 ? Math.round(zz).toLocaleString("en-US") : tz < 1e6 ? `${tz<1e5?(zz/1e3).toFixed(1).replace(/\.0$/,""):Math.round(zz/1e3)}k` : `${(zz/1e6).toFixed(tz<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function lv(zz, tz, sz) {
      if (DF(tz) >= 0) {
        const tz = function(zz, tz) {
          return zz.find((zz => {
            let {
              focus: sz
            } = zz;
            return sz[0] === tz[0] && sz[2] === tz[2] && (tz[1] === sz[1] || tz[1] === sz[1] - 1)
          }))
        }(zz, sz);
        if (!tz) return null;
        const Wz = function(zz) {
          let tz = 0,
            sz = 0;
          for (let Fz = 0; Fz < 4; Fz++) tz += zz.laser[Fz] ? 1 : 0, sz += zz.live[Fz] ? 1 : 0;
          return {
            lasers: tz,
            live: sz,
            focusPerS: UF.FOCUS_BY_LASERS[sz],
            drawPerS: UF.LASER_DRAW * sz
          }
        }({
          laser: tz.lasers,
          live: tz.live
        });
        if (0 === Wz.lasers || "noLasers" === tz.state) return {
          key: `${hv}lookColNoLasers`
        };
        if (0 === Wz.live) return {
          key: `${hv}lookColOff_blocked`
        };
        if (!(tz.on && Wz.live > 0) && ("running" !== (Fz = tz.state) && "slowed" !== Fz)) return {
          key: `${hv}lookColOff_${tz.state}`
        };
        if (Wz.live < Wz.lasers) return {
          key: `${hv}lookColLasersSome`,
          params: {
            lasers: String(Wz.lasers),
            live: String(Wz.live)
          }
        };
        const Xz = tz.open.filter(Boolean).length;
        return Xz < 4 ? {
          key: `${hv}lookColLasersSpots`,
          params: {
            live: String(Wz.live),
            spots: String(Xz),
            time: iv(Wz.live)
          }
        } : {
          key: `${hv}lookColLasers`,
          params: {
            live: String(Wz.live),
            time: iv(Wz.live)
          }
        }
      }
      var Fz;
      if (!gF(tz)) return null;
      const Wz = function(zz, tz) {
        for (const sz of zz) {
          const zz = rF(sz.focus, [tz[0], tz[1], tz[2]]);
          if (zz && zz.xo === UF.LASER_D && sz.lasers[zz.dir]) return {
            entry: sz,
            dir: zz.dir
          }
        }
        return null
      }(zz, sz);
      if (!Wz) return {
        key: `${hv}lookLaserNoCollider`
      };
      const {
        entry: Xz,
        dir: Oz
      } = Wz;
      return Xz.open[Oz] ? Xz.live[Oz] ? {
        key: Xz.on ? `${hv}lookLaserFiring` : `${hv}lookLaserReady`
      } : {
        key: `${hv}lookLaserBlocked`
      } : {
        key: `${hv}lookLaserClosed`
      }
    }

    function nv(zz, tz) {
      const sz = [];
      for (let Fz = 1; Fz < UF.LASER_D; Fz++) zz & 1 << tz * (UF.LASER_D - 1) + Fz - 1 && sz.push(Fz);
      return sz
    }
    const av = {
      firing: `${hv}colSlotFiring`,
      ready: `${hv}colSlotReady`,
      blocked: `${hv}colSlotBlocked`,
      empty: `${hv}colSlotEmpty`,
      closed: `${hv}colSlotClosed`
    };

    function qv(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Xz = vW(zz),
        Oz = vW(tz),
        oz = vW(sz),
        vz = oz.filter(Boolean).length,
        Uz = Xz.filter(Boolean).length,
        Kz = [0, 1, 2, 3].map((zz => Oz[zz] ? Xz[zz] ? oz[zz] ? Fz ? "firing" : "ready" : "blocked" : (zz => nv(Wz, zz).length > 0)(zz) ? "blocked" : "empty" : "closed")),
        uz = Kz.indexOf("blocked"),
        Nz = uz < 0 && Uz > 0 ? Kz.indexOf("empty") : -1;
      return Kz.map(((zz, tz) => {
        const sz = tz === uz ? {
          key: `${hv}colSlotClear`
        } : tz === Nz ? {
          key: `${hv}colSlotAdd`,
          params: {
            time: iv(Math.min(4, vz + 1))
          }
        } : null;
        return {
          dir: tz,
          tone: zz,
          title: {
            key: "blocked" !== zz || Xz[tz] ? av[zz] : `${hv}colSlotGap`,
            keys: {
              dir: Qv[tz]
            }
          },
          hint: sz
        }
      }))
    }

    function Sv(zz) {
      var tz;
      return "noPower" === zz.baf2ColState && zz.baf2ColRxState ? Yv({
        baf2RxState: zz.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (tz = zz.baf2ColRxHeat) && void 0 !== tz ? tz : 0
      }) : null
    }

    function Vv(zz) {
      const tz = vW(zz.baf2ColSpots).filter(Boolean).length,
        sz = vW(zz.baf2ColLive);
      let Fz = 0,
        Wz = 0;
      return vW(zz.baf2ColLasers).forEach(((zz, tz) => {
        zz && (Fz++, Wz += sz[tz] ? 0 : 1)
      })), Wz > 0 ? {
        key: `${hv}colSubSome`,
        params: {
          blocked: String(Wz),
          lasers: String(Fz)
        }
      } : tz < 4 ? {
        key: `${hv}colSubSpots`,
        params: {
          lasers: String(Fz),
          spots: String(tz)
        }
      } : {
        key: `${hv}colSub`,
        params: {
          lasers: String(Fz)
        }
      }
    }

    function Rv(zz) {
      const tz = Sv(zz);
      if ("idle" === zz.baf2ColRxState && tz) return {
        key: `${hv}colState_noPowerIdle`
      };
      if (tz) return {
        key: `${hv}colState_noPowerReactor`,
        keys: {
          state: tz.label
        }
      };
      if ("noInput" !== zz.baf2ColState) return {
        key: `${hv}colState_${zz.baf2ColState}`
      };
      const sz = String(Math.max(0, UF.NOVA_SA - zz.baf2ColSa)),
        Fz = String(Math.max(0, UF.NOVA_GD - zz.baf2ColGd));
      return "0" !== sz && "0" !== Fz ? {
        key: `${hv}colState_noInput`,
        params: {
          sa: sz,
          gd: Fz
        }
      } : "0" !== sz ? {
        key: `${hv}colState_noStarAlloy`,
        params: {
          sa: sz
        }
      } : "0" !== Fz ? {
        key: `${hv}colState_noGlowDust`,
        params: {
          gd: Fz
        }
      } : {
        key: `${hv}colState_running`
      }
    }

    function pv(zz) {
      return zz.baf2ColP < 0 ? `${hv}colNext` : function(zz) {
        const tz = zz.baf2ColState;
        return zz.baf2ColP >= 0 && ("blocked" === tz || "noLasers" === tz || "noPower" === tz)
      }(zz) ? `${hv}colStalled` : null === fv(zz) ? `${hv}colMaking` : `${hv}colNovaIn`
    }

    function fv(zz) {
      if (zz.baf2ColP < 0 || zz.baf2ColWant <= 0) return null;
      const tz = zz.baf2ColFocusPerS * Math.min(1, zz.baf2ColDraw / zz.baf2ColWant);
      return tz > 0 ? Math.max(0, UF.NOVA_FOCUS - zz.baf2ColP) / tz : null
    }

    function Ev(zz, tz) {
      const sz = [];
      for (let Fz = 1; Fz <= 3; Fz++) {
        const Wz = [zz[0], zz[1] - Fz, zz[2]];
        if (!tz(Wz)) return sz;
        sz.push(Wz)
      }
      return []
    }

    function zU(zz, tz) {
      const sz = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Fz = 0; Fz < 4; Fz++) {
        const Wz = Fz,
          Xz = PF(zz.focus, Wz, UF.LASER_D);
        if (zz.lasers[Fz] || !zz.open[Fz] || !tz(Xz)) continue;
        const Oz = [];
        for (let sz = 1; sz < UF.LASER_D; sz++) {
          const Fz = PF(zz.focus, Wz, sz);
          tz(Fz) || Oz.push(Fz)
        }
        sz.supports.push(...Ev(Xz, tz)), 0 === Oz.length ? sz.free.push(Xz) : (sz.blocked.push(Xz), sz.gaps.push(...Oz))
      }
      return sz
    }
    const tU = UF.LASER_D - .25,
      sU = 4,
      FU = 2,
      WU = 16;
    const XU = {
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
        blendMode: ho.f.Standard,
        soft: !0
      },
      OU = {
        green: XU,
        pink: {
          ...XU,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function oU(zz, tz) {
      const sz = {
        ...tz.params
      };
      for (const [Wz, Xz] of Object.entries(null !== (Fz = tz.keys) && void 0 !== Fz ? Fz : {})) {
        var Fz;
        sz[Wz] = zz(Xz)
      }
      return sz
    }
    const vU = "buildAFactory2Game:",
      UU = 2 * UF.LASER_D + 1,
      KU = UF.LASER_D;

    function uU(zz) {
      return zz(`${vU}colFocusTip`, {
        need: Lv(UF.NOVA_FOCUS)
      })
    }

    function NU(zz, tz) {
      return zz(tz.key, oU(zz, tz))
    }

    function bU(zz) {
      const tz = zz.getStatus();
      return {
        status: tz,
        entry: tz ? zz.entryAtRoot(tz.baf2ColAt) : void 0
      }
    }

    function wU(zz, tz) {
      return {
        left: 100 * (KU + zz) / UU + "%",
        top: 100 * (KU + tz) / UU + "%"
      }
    }

    function DU(zz) {
      let {
        status: tz,
        entry: sz
      } = zz;
      const Fz = vW(tz.baf2ColLasers),
        Wz = vW(tz.baf2ColSpots),
        Xz = vW(tz.baf2ColLive),
        Oz = !0 === (null === sz || void 0 === sz ? void 0 : sz.on),
        oz = UF.LASER_D,
        vz = [];
      for (let bz = 0; bz < 4; bz++) {
        const [zz, , tz] = BF[bz];
        if (Xz[bz]) {
          const sz = 100 * (oz - 1) / UU,
            Fz = zz + tz > 0 ? 100 * (KU + 1) / UU : 100 * (KU - (oz - 1)) / UU,
            Wz = 100 * (KU + .35) / UU,
            Xz = 30 / UU,
            Uz = 0 !== zz ? {
              left: `${Fz}%`,
              width: `${sz}%`,
              top: `${Wz}%`,
              height: `${Xz}%`
            } : {
              top: `${Fz}%`,
              height: `${sz}%`,
              left: `${Wz}%`,
              width: `${Xz}%`
            };
          vz.push((0, eX.jsx)("i", {
            className: IW()("Baf2ColDiagramBeam", {
              Off: !Oz
            }),
            style: Uz
          }, `beam${bz}`))
        }
        const sz = Fz[bz] ? "Baf2ColDiagramLaser" : Wz[bz] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        vz.push((0, eX.jsx)("i", {
          className: sz,
          style: wU(zz * oz, tz * oz)
        }, `spot${bz}`))
      }
      for (let bz = 0; bz < 4; bz++) {
        if (Fz[bz] || !Wz[bz]) continue;
        const [zz, , sz] = BF[bz];
        for (const Fz of nv(null !== (Uz = tz.baf2ColGaps) && void 0 !== Uz ? Uz : 0, bz)) {
          var Uz;
          vz.push((0, eX.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: wU(zz * Fz, sz * Fz)
          }, `gap${bz},${Fz}`))
        }
      }
      for (const [bz, , wz] of null !== (Kz = null === sz || void 0 === sz ? void 0 : sz.blockers) && void 0 !== Kz ? Kz : []) {
        var Kz, uz, Nz;
        const zz = bz - (null !== (uz = null === sz || void 0 === sz ? void 0 : sz.focus[0]) && void 0 !== uz ? uz : 0),
          tz = wz - (null !== (Nz = null === sz || void 0 === sz ? void 0 : sz.focus[2]) && void 0 !== Nz ? Nz : 0);
        vz.push((0, eX.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: wU(zz, tz)
        }, `block${zz},${tz}`))
      }
      return (0, eX.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [vz, (0, eX.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function gU(zz) {
      let {
        status: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)(), Fz = vW(tz.baf2ColLive).filter(Boolean).length;
      return (0, eX.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, eX.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: uU(sz),
          children: sz(`${vU}colLadder`)
        }), (0, eX.jsx)("ul", {
          children: [1, 2, 3, 4].map((zz => (0, eX.jsx)("li", {
            className: IW()({
              On: zz === Fz
            }),
            children: sz(`${vU}colLadderChip`, {
              lasers: String(zz),
              time: iv(zz)
            })
          }, zz)))
        })]
      })
    }

    function HU(zz) {
      let {
        item: tz,
        po: sz,
        need: Fz,
        cap: Wz
      } = zz;
      const {
        t: Xz
      } = (0, GW.B)(), Oz = Math.min(sz, Fz);
      return (0, eX.jsxs)("li", {
        className: IW()("Baf2ColTile", {
          Short: sz < Fz
        }),
        children: [(0, eX.jsx)(BU, {
          item: tz
        }), (0, eX.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Xz(`${vU}colOutOf`, {
            amount: String(Oz),
            cap: String(Fz)
          })
        }), (0, eX.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, eX.jsx)("i", {
            style: {
              width: 100 * Oz / Fz + "%"
            }
          })
        }), sz > Fz && (0, eX.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Xz(`${vU}colIntakeHeld`, {
            amount: String(sz),
            cap: String(Wz)
          })
        })]
      })
    }

    function BU(zz) {
      let {
        item: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)();
      return (0, eX.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, eX.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, eX.jsx)(cW.c, {
            itemName: tz,
            amount: 0
          })
        }), (0, eX.jsx)("span", {
          className: "Baf2ColTileName",
          children: OX(sz, tz)
        })]
      })
    }

    function PU(zz) {
      switch (zz.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function rU(zz) {
      var tz, sz, Wz;
      let {
        store: Xz,
        close: Oz
      } = zz;
      const {
        t: oz
      } = (0, GW.B)(), vz = lO(), {
        status: Uz,
        entry: Kz
      } = function(zz) {
        const [tz, sz] = (0, Fz.useState)((() => bU(zz)));
        return (0, Fz.useEffect)((() => (sz(bU(zz)), zz.subscribe((() => {
          sz(bU(zz))
        })))), [zz]), tz
      }(Xz), [uz, Nz] = (0, Fz.useState)(null), bz = null === Uz || void 0 === Uz ? void 0 : Uz.baf2ColHold;
      (0, Fz.useEffect)((() => {
        Nz(null)
      }), [bz]);
      const wz = (0, Fz.useRef)({
          p: -1,
          n: 0
        }),
        Dz = null !== (tz = null === Uz || void 0 === Uz ? void 0 : Uz.baf2ColP) && void 0 !== tz ? tz : -1;
      Dz < wz.current.p && wz.current.n++, wz.current.p = Dz;
      const gz = (0, Fz.useRef)(null),
        [Hz] = (0, Fz.useState)((() => {
          return (zz = Xz.heldAtOpen()) === NF || zz === bF ? {
            key: `${hv}colBeltItIn`,
            item: zz
          } : null;
          var zz
        }));
      if (!Uz) return null;
      const Bz = Uz.baf2ColMember,
        Pz = Uz.baf2ColP >= 0,
        rz = function(zz, tz) {
          if (zz.baf2ColP >= 0 && zz.baf2ColDraw > 0) {
            const tz = zz.baf2ColWant > 0 ? Math.min(1, zz.baf2ColDraw / zz.baf2ColWant) : 0;
            return {
              focus: zz.baf2ColFocusPerS * tz,
              draw: zz.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === zz.baf2ColState && tz && tz.draw > 0 ? {
            ...tz,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Uz, gz.current);
      gz.current = rz.draw > 0 ? rz : null;
      const Yz = "slowed" === Uz.baf2ColState || "noPower" === Uz.baf2ColState,
        xz = fv(Uz),
        mz = null !== uz && void 0 !== uz ? uz : Uz.baf2ColHold,
        Jz = function(zz) {
          var tz, sz;
          return "idle" === zz.baf2ColRxState ? null : null !== (tz = null === (sz = Sv(zz)) || void 0 === sz ? void 0 : sz.fix) && void 0 !== tz ? tz : null
        }(Uz),
        Iz = null === Jz && null === Hz ? function(zz) {
          var tz;
          const sz = zz.baf2ColSentTo;
          if (!sz) return null;
          const Fz = null !== (tz = zz.baf2ColSentHeld) && void 0 !== tz ? tz : null;
          return {
            key: null === Fz ? `${hv}colNovaSentToMachine` : `${hv}colNovaSentTo`,
            target: sz,
            po: Fz
          }
        }(Uz) : null,
        Cz = Pz ? oz(`${vU}colFocusOf`, {
          focus: Lv(Uz.baf2ColP),
          need: Lv(UF.NOVA_FOCUS)
        }) : null;
      return (0, eX.jsx)(mO.b, {
        close: Oz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, eX.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, eX.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, eX.jsx)(cW.c, {
                  itemName: KF,
                  amount: 0
                })
              }), (0, eX.jsxs)("div", {
                children: [(0, eX.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: OX(oz, KF)
                }), (0, eX.jsx)("p", {
                  children: NU(oz, Vv(Uz))
                })]
              })]
            }), (0, eX.jsx)(JO.n, {
              onClick: Oz
            })]
          }), (0, eX.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, eX.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, eX.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, eX.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: oz(pv(Uz), {
                    time: null === xz ? "" : mX(oz, xz)
                  })
                }), (0, eX.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, eX.jsx)("i", {
                    style: {
                      width: (Pz ? 100 * Uz.baf2ColP / UF.NOVA_FOCUS : 0) + "%"
                    }
                  }, wz.current.n)
                }), (0, eX.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, eX.jsxs)("span", {
                    title: uU(oz),
                    children: [(0, eX.jsx)("b", {
                      children: Lv(rz.focus)
                    }), " ", oz(`${vU}colFocusPerS`)]
                  }), (0, eX.jsxs)("span", {
                    className: IW()("Baf2ColDraw", {
                      Short: Yz
                    }),
                    children: [(0, eX.jsx)(TW.c, {
                      name: "bolt"
                    }), Yz ? oz(`${vU}colDrawOf`, {
                      draw: Lv(Uz.baf2ColDraw),
                      want: Lv(Uz.baf2ColWant)
                    }) : oz(`${vU}colPowerPerS`, {
                      rate: Lv(rz.draw)
                    })]
                  }), null !== Cz && (0, eX.jsx)("span", {
                    className: "Soft",
                    children: Cz
                  })]
                })]
              }), (0, eX.jsx)("p", {
                className: IW()("Baf2ColState", PU(Uz)),
                children: NU(oz, Rv(Uz))
              }), null !== Jz && (0, eX.jsx)("p", {
                className: "Baf2ColStateFix",
                children: oz(Jz)
              }), null === Jz && null !== Hz && (0, eX.jsx)("p", {
                className: "Baf2ColStateFix",
                children: oz(Hz.key, {
                  item: OX(oz, Hz.item)
                })
              }), Iz && (0, eX.jsx)("p", {
                className: "Baf2ColStateFix",
                children: oz(Iz.key, {
                  target: OX(oz, Iz.target),
                  amount: String(null !== (sz = Iz.po) && void 0 !== sz ? sz : 0)
                })
              }), (0, eX.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, eX.jsx)(HU, {
                  item: NF,
                  po: Uz.baf2ColSa,
                  need: UF.NOVA_SA,
                  cap: UF.SA_CAP
                }), (0, eX.jsx)(HU, {
                  item: bF,
                  po: Uz.baf2ColGd,
                  need: UF.NOVA_GD,
                  cap: UF.GD_CAP
                }), (0, eX.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, eX.jsx)(BU, {
                    item: "Nova Matter"
                  }), (0, eX.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: oz(`${vU}colNovaHeld`, {
                      amount: String(Uz.baf2ColOut),
                      cap: String(UF.OUT_CAP)
                    })
                  }), Bz && (0, eX.jsx)(JO.p, {
                    className: "Baf2ColTake",
                    disabled: 0 === Uz.baf2ColOut,
                    onClick: () => {
                      vz.send(kv(Uz, "take"))
                    },
                    children: oz(`${vU}colTake`)
                  })]
                })]
              }), Bz && (0, eX.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": mz,
                className: IW()("Baf2ColHold", {
                  On: mz
                }),
                onClick: zz => {
                  zz.detail > 0 && zz.currentTarget.blur(), Nz(!mz), vz.send(kv(Uz, "hold " + (mz ? 0 : 1)))
                },
                children: [(0, eX.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, eX.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, eX.jsx)("b", {
                    children: oz(`${vU}colHold`)
                  }), (0, eX.jsx)("span", {
                    children: oz(`${vU}colHoldNote`)
                  })]
                })]
              })]
            }), (0, eX.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, eX.jsx)(DU, {
                status: Uz,
                entry: Kz
              }), (0, eX.jsx)("ul", {
                className: "Baf2ColSlots",
                children: qv(Uz.baf2ColLasers, Uz.baf2ColSpots, Uz.baf2ColLive, rz.beamsOn, null !== (Wz = Uz.baf2ColGaps) && void 0 !== Wz ? Wz : 0).map((zz => (0, eX.jsxs)("li", {
                  className: zz.tone,
                  children: [(0, eX.jsx)("b", {
                    children: NU(oz, zz.title)
                  }), null !== zz.hint && (0, eX.jsx)("span", {
                    children: NU(oz, zz.hint)
                  })]
                }, zz.dir)))
              }), (0, eX.jsx)(gU, {
                status: Uz
              })]
            })]
          })]
        })
      })
    }
    const YU = "buildAFactory2Game:",
      xU = 36e5,
      mU = 864e5;

    function JU(zz, tz, sz) {
      return Math.max(0, Math.ceil((zz + tz - Math.max(sz, zz)) / 1e3))
    }

    function IU(zz) {
      return zz.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function CU(zz) {
      return "Homestead" === zz
    }

    function eU(zz) {
      return function(zz) {
        let tz = 0;
        for (const sz of zz) {
          const zz = /^Island ([1-9]\d{0,5})$/.exec(sz);
          zz && (tz = Math.max(tz, Number(zz[1])))
        }
        return `Island ${tz+1}`
      }(zz.map((zz => zz.baf2IslandName)))
    }

    function ZU(zz, tz) {
      return function(zz) {
        return `${YU}islandsBlocked${zz[0].toUpperCase()}${zz.slice(1)}`
      }("degraded" === zz && 0 === tz ? "stuck" : zz)
    }

    function GU(zz) {
      return zz.filter((zz => {
        var tz;
        return !zz.baf2IslandActive && void 0 === zz.baf2IslandUnreadable && void 0 === (null === (tz = zz.baf2IslandCoop) || void 0 === tz ? void 0 : tz.baf2CoopState)
      })).length
    }

    function TU(zz) {
      return "coopMoving" === zz || "coopUnreachable" === zz
    }

    function cU(zz, tz) {
      const sz = tz > 0;
      return {
        change: null === zz && !sz,
        switch: (null === zz || "degraded" === zz || TU(zz)) && !sz,
        rename: "loading" !== zz && "degraded" !== zz && "stuck" !== zz
      }
    }

    function jU(zz, tz) {
      return void 0 === zz || "corrupt" === zz && tz
    }
    const AU = MO;

    function yU(zz, tz, sz) {
      if (null !== zz && void 0 !== zz && zz.untilGone) {
        var Fz;
        return !("dismiss" === zz.untilGone && void 0 === (null === (Fz = tz.baf2IslandCoop) || void 0 === Fz ? void 0 : Fz.baf2CoopState)) && sz - zz.atMs < 32500
      }
      return void 0 !== zz && sz - zz.atMs < AU && tz.baf2IslandName === zz.from
    }
    const MU = MO;

    function dU(zz) {
      return "core" === (null === zz || void 0 === zz ? void 0 : zz.kind) ? zz.core : "islands" === (null === zz || void 0 === zz ? void 0 : zz.kind) ? zz.backToCore : void 0
    }

    function hU(zz) {
      return `\0${zz}\0`
    }

    function QU(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Fz = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Xz of Object.keys(sz)) Fz[Xz] = hU(Xz);
      let Wz = Object.keys(Fz).length > 0 ? zz(tz, Fz) : zz(tz);
      for (const [Xz, Oz] of Object.entries(sz)) Wz = Wz.split(hU(Xz)).join(Oz);
      return Wz
    }

    function kU(zz, tz) {
      return zz ? tz ? "enabled" : "disabled" : "hidden"
    }
    const iU = {
      removed: `${YU}islandsCoopRemoved`,
      deleted: `${YU}islandsCoopDeleted`,
      notReady: `${YU}islandsCoopNotReady`,
      gone: `${YU}islandsCoopGone`
    };

    function LU(zz) {
      var tz;
      return "member" !== (null === (tz = zz.baf2IslandCoop) || void 0 === tz ? void 0 : tz.baf2CoopRole) && "newer" !== zz.baf2IslandUnreadable
    }

    function lU(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = zz.baf2IslandActive,
        oz = zz.baf2IslandUnreadable,
        vz = zz.baf2IslandCoop,
        Uz = function(zz, tz, sz) {
          return {
            switch: zz.switch && void 0 === tz,
            delete: zz.change && jU(tz, sz)
          }
        }(tz, oz, Fz),
        Kz = Oz && void 0 !== vz && void 0 === vz.baf2CoopState && "coopUnreachable" === Xz,
        uz = {
          switch: kU((!Oz || Kz) && void 0 === oz, Kz || Uz.switch),
          switchLabel: Kz ? "tryAgain" : "switch",
          rename: kU(!0, tz.rename),
          delete: kU(!Oz, Uz.delete),
          deleteWaits: !Oz && jU(oz, Fz),
          people: kU(void 0 !== zz.baf2IslandInvitable || Wz && Oz && void 0 === oz && void 0 === vz, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Nz = !Oz && Uz.delete;
      if (void 0 === vz) return sz ? {
        ...uz,
        delete: kU(!Oz, !1),
        deleteWaits: !1,
        note: Nz ? {
          key: `${YU}islandsCoopKeepOwn`
        } : null
      } : uz;
      const bz = vz.baf2CoopState,
        wz = vz.baf2CoopMembers.length > 1,
        Dz = {
          ...uz,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== bz && "member" === vz.baf2CoopRole) return {
        ...Dz,
        dismiss: kU(!0, tz.rename),
        note: {
          key: iU[bz],
          names: {
            owner: vz.baf2CoopOwner
          }
        }
      };
      if (void 0 !== bz) {
        let zz = {
          key: `${YU}islandsCoopOwnLost`
        };
        return Nz && wz ? zz = {
          key: `${YU}islandsCoopDeleteMembers`
        } : Nz && sz && (zz = {
          key: `${YU}islandsCoopKeepOwn`
        }), {
          ...Dz,
          delete: kU(!Oz, Uz.delete && !wz && !sz),
          deleteWaits: uz.deleteWaits && !wz && !sz,
          note: zz
        }
      }
      if ("member" === vz.baf2CoopRole) return {
        ...uz,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: kU(!0, Oz ? tz.switch : tz.rename)
      };
      const gz = vz.baf2CoopManageHere;
      let Hz = null;
      var Bz;
      gz || Oz ? Nz && wz ? Hz = {
        key: `${YU}islandsCoopDeleteMembers`
      } : Nz && sz && (Hz = {
        key: `${YU}islandsCoopKeepOwn`
      }) : Hz = {
        key: null !== (Bz = vz.baf2CoopLeft) && void 0 !== Bz && Bz.length ? `${YU}islandsCoopManageThereClaim` : `${YU}islandsCoopManageThere`
      };
      return {
        ...uz,
        rename: kU(!0, tz.rename && gz),
        delete: kU(!Oz, Uz.delete && !wz && !sz),
        deleteWaits: uz.deleteWaits && !wz && !sz,
        people: "enabled",
        peopleLabel: "players",
        unshare: kU(gz && Oz && !wz, tz.change),
        remove: gz,
        note: Hz
      }
    }

    function nU(zz) {
      var tz;
      const sz = zz.baf2IslandCoop;
      if ("owner" !== (null === sz || void 0 === sz ? void 0 : sz.baf2CoopRole) || void 0 !== sz.baf2CoopState || null === (tz = sz.baf2CoopLeft) || void 0 === tz || !tz.length) return null;
      const Fz = zz.baf2IslandActive && sz.baf2CoopManageHere;
      return {
        left: sz.baf2CoopLeft,
        claim: Fz,
        goThere: !Fz && sz.baf2CoopManageHere
      }
    }

    function aU(zz) {
      return zz.baf2CoopMembers.length >= zz.baf2CoopMax
    }

    function qU(zz, tz, sz) {
      return void 0 !== zz && tz < zz.answer && sz - zz.atMs < AU
    }
    const SU = "buildAFactory2Game:";

    function VU(zz, tz) {
      return {
        onKeyDown: sz => {
          sz.stopPropagation(), sz.nativeEvent.isComposing || 229 === sz.nativeEvent.keyCode || ("Enter" === sz.key ? (sz.preventDefault(), zz()) : "Escape" === sz.key && (sz.preventDefault(), tz()))
        }
      }
    }

    function RU(zz) {
      return {
        onKeyDown: tz => {
          "Escape" !== tz.key || tz.nativeEvent.isComposing || (tz.preventDefault(), tz.stopPropagation(), zz())
        }
      }
    }

    function pU(zz) {
      zz.currentTarget.select()
    }

    function fU(zz, tz) {
      (0, Fz.useEffect)((() => {
        var sz;
        zz && (null === (sz = tz.current) || void 0 === sz || sz.scrollIntoView({
          block: "nearest"
        }))
      }), [zz, tz])
    }

    function EU(zz) {
      const [tz, sz] = (0, Fz.useState)(null);
      return (0, Fz.useEffect)((() => {
        const tz = document.querySelector(".UiRequests"),
          Fz = zz.current;
        if (!tz || !Fz || "undefined" === typeof ResizeObserver) return;
        const Wz = () => {
          const zz = tz.getBoundingClientRect(),
            Wz = Fz.getBoundingClientRect(),
            Xz = Fz.parentElement,
            Oz = Xz && parseFloat(getComputedStyle(Xz).paddingTop) || 0,
            oz = function(zz, tz, sz, Fz) {
              if (!zz || zz.height <= 0 || zz.right <= tz.left || zz.left >= tz.right) return null;
              const Wz = Math.max(Fz, zz.bottom + 8);
              return {
                marginTop: Math.round(Wz - Fz),
                maxHeight: Math.max(0, Math.floor(sz - Wz - Fz))
              }
            }(zz, Wz, window.innerHeight, Oz);
          sz((zz => (null === zz || void 0 === zz ? void 0 : zz.marginTop) === (null === oz || void 0 === oz ? void 0 : oz.marginTop) && (null === zz || void 0 === zz ? void 0 : zz.maxHeight) === (null === oz || void 0 === oz ? void 0 : oz.maxHeight) ? zz : oz))
        };
        Wz();
        const Xz = new ResizeObserver(Wz);
        return Xz.observe(tz), window.addEventListener("resize", Wz), () => {
          Xz.disconnect(), window.removeEventListener("resize", Wz)
        }
      }), [zz]), tz
    }

    function zK(zz) {
      (0, Fz.useEffect)((() => {
        var tz;
        null === (tz = zz.current) || void 0 === tz || tz.focus()
      }), [zz])
    }

    function tK(zz) {
      const [tz, sz] = (0, Fz.useState)(Date.now);
      return (0, Fz.useEffect)((() => {
        const tz = window.setInterval((() => {
          sz(Date.now())
        }), zz);
        return () => {
          window.clearInterval(tz)
        }
      }), [zz]), tz
    }

    function sK(zz) {
      let {
        tier: tz,
        t: sz
      } = zz;
      const {
        kind: Fz,
        short: Wz
      } = gz(tz), Xz = bz(tz, wz), Oz = sz(`${SU}${Xz.key}`, {
        ...Xz.params,
        name: sz(`${SU}${Hz(tz).nameKey}`)
      });
      return (0, eX.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, eX.jsx)("span", {
          className: IW()("Baf2IslandTierPip", {
            Stage: "tier" !== Fz
          }),
          "aria-hidden": "true",
          children: Wz
        }), Oz]
      })
    }

    function FK(zz) {
      let {
        note: tz,
        className: sz,
        t: Fz
      } = zz;
      return (0, eX.jsx)("p", {
        className: IW()("Baf2IslandNote", sz),
        children: QU(Fz, tz.key, tz.names, tz.params)
      })
    }
    const WK = "buildAFactory2Game:";

    function XK(zz) {
      let {
        message: tz,
        arrivedAtMs: sz,
        close: Wz,
        leave: Xz
      } = zz;
      const Oz = lO(),
        {
          t: oz
        } = (0, GW.B)(),
        vz = tK(1e3),
        Uz = (0, Fz.useRef)(null);
      (0, Fz.useEffect)((() => {
        var zz;
        null === (zz = Uz.current) || void 0 === zz || zz.focus()
      }), []);
      const Kz = JU(sz, tz.baf2TransferInMs, vz),
        uz = sz + tz.baf2TransferInMs - 1e3,
        [Nz, bz] = (0, Fz.useState)(null);
      (0, Fz.useEffect)((() => {
        const zz = window.setTimeout((() => {
          bz(uz)
        }), Math.max(0, uz - Date.now()));
        return () => {
          window.clearTimeout(zz)
        }
      }), [uz]);
      const wz = Nz === uz || vz >= uz,
        Dz = tz.baf2TransferIsland,
        gz = tz.baf2TransferOwner;
      return (0, eX.jsx)(mO.b, {
        close: Wz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, eX.jsxs)("section", {
          ref: Uz,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsxs)("div", {
              children: [(0, eX.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === gz ? QU(oz, `${WK}islandsTransferOwn`, {
                  island: Dz
                }) : QU(oz, `${WK}islandsTransfer`, {
                  island: Dz,
                  owner: gz
                })
              }), (0, eX.jsx)("p", {
                children: wz ? oz(`${WK}islandsTransferNow`) : oz(`${WK}islandsTransferIn`, {
                  time: mX(oz, Kz)
                })
              })]
            }), (0, eX.jsx)(JO.n, {
              ariaLabel: oz(`${WK}islandsClose`),
              onClick: Wz
            })]
          }), !wz && (0, eX.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, eX.jsx)("p", {
              className: "Baf2TransferNote",
              children: oz(`${WK}islandsTransferNote`)
            }), (0, eX.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, eX.jsx)(JO.h, {
                onClick: () => {
                  Oz.send("baf2coopstay"), Xz()
                },
                children: oz(`${WK}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var OK = sz(1416),
      oK = sz(1124),
      vK = sz.n(oK);
    const UK = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const KK = "buildAFactory2Game:",
      uK = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function NK(zz, tz, sz) {
      return void 0 === tz ? sz : "string" === typeof tz ? tz : Array.isArray(tz) ? tz.map((tz => "string" === typeof tz ? tz : "translationKey" in tz ? zz(tz.translationKey) : "")).join("") : zz(tz.translationKey)
    }

    function bK(zz) {
      const tz = {};
      for (const [sz, Fz] of Object.entries(null !== zz && void 0 !== zz ? zz : {})) tz[sz] = Fz < 0 ? xX(Fz) : Fz.toLocaleString("en-US");
      return tz
    }

    function wK(zz, tz) {
      const sz = tz ? "touch" : "mouse";
      return {
        use: zz(`${KK}lookUse_${sz}`),
        Use: zz(`${KK}lookUseStart_${sz}`)
      }
    }
    const DK = (0, Fz.memo)((function(zz) {
      let {
        item: tz
      } = zz;
      return (0, eX.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, eX.jsx)(cW.c, {
          itemName: tz,
          amount: 0
        })
      })
    }));

    function gK(zz) {
      let {
        label: tz,
        percent: sz,
        progress: Fz
      } = zz;
      return (0, eX.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, eX.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${tz}: ${Fz}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": sz,
          children: (0, eX.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${sz}%`
            }
          })
        }), (0, eX.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Fz
        })]
      })
    }

    function HK(zz) {
      let {
        chips: tz
      } = zz;
      return (0, eX.jsx)("span", {
        className: "Baf2QuestChips",
        children: tz.map((zz => {
          let [tz, sz, Fz] = zz;
          const Wz = sz >= Fz;
          return (0, eX.jsxs)("span", {
            className: IW()("Baf2QuestChip", {
              Met: Wz
            }),
            children: [(0, eX.jsx)(DK, {
              item: tz
            }), (0, eX.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Wz ? `\u2713${Fz}` : `${sz}/${Fz}`
            })]
          }, tz)
        }))
      })
    }

    function BK(zz, tz) {
      const {
        key: sz,
        params: Fz
      } = bz(tz, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return zz(`${KK}${sz}`, {
        ...Fz,
        name: zz(`${KK}${Hz(tz).nameKey}`)
      })
    }

    function PK(zz) {
      let {
        core: tz,
        t: sz
      } = zz;
      const [Fz, Wz] = tz, Xz = Wz > 0 ? Math.floor(100 * Fz / Wz) : 100;
      return (0, eX.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": sz(`${KK}questCoreLabel`, {
          have: String(Fz),
          need: String(Wz)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Xz,
        children: [(0, eX.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: sz(`${KK}questCore`, {
            percent: String(Xz)
          })
        }), (0, eX.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, eX.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Xz}%`
            }
          })
        })]
      })
    }

    function rK(zz) {
      let {
        rows: tz,
        t: sz
      } = zz;
      const Fz = tz.filter((zz => zz.done)).length;
      return (0, eX.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": sz(`${KK}questStepsProgress`, {
          done: String(Fz),
          total: String(tz.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": tz.length,
        "aria-valuenow": Fz,
        children: tz.map((zz => (0, eX.jsx)("span", {
          className: IW()("Baf2QuestSegment", {
            Done: zz.done,
            Current: zz.current
          })
        }, zz.id)))
      })
    }
    const YK = (0, Fz.memo)(mK, xK);

    function xK(zz, tz) {
      const sz = sz => zz.view.itemNames[sz] === tz.view.itemNames[sz];
      return zz.t === tz.t && zz.extra === tz.extra && (null === zz.row.item || sz(zz.row.item)) && zz.row.madeFor.every(sz) && zz.row.also.every(sz) && vK()(zz.row, tz.row)
    }

    function mK(zz) {
      let {
        row: tz,
        view: sz,
        t: Fz,
        extra: Wz
      } = zz;
      const {
        isTouchScreen: Xz
      } = (0, xW.h)(["isTouchScreen"]), Oz = tz.item ? function(zz, tz, sz) {
        return 1 !== sz && UK.has(zz) ? ZW(tz) : null
      }(tz.key, tz.item, tz.total) : null, oz = Oz ? Fz(Oz) : tz.item ? NK(Fz, sz.itemNames[tz.item], tz.item) : "", vz = tz.also.map((zz => NK(Fz, sz.itemNames[zz], zz))), Uz = vz.join(", "), Kz = function(zz, tz) {
        var sz;
        return tz.length < 2 ? null !== (sz = tz[0]) && void 0 !== sz ? sz : "" : zz(`${KK}listAnd`, {
          rest: tz.slice(0, -1).join(zz(`${KK}listComma`)),
          last: tz[tz.length - 1]
        })
      }(Fz, [oz, ...vz]), uz = Fz(`${KK}${tz.key}`, {
        ...wK(Fz, Xz),
        ...bK(tz.params),
        item: oz,
        also: Uz,
        itemList: Kz,
        total: String(tz.total)
      }), [Nz, ...bz] = uz.split("\n"), wz = tz.total > 1 && !tz.done && !tz.away;
      return (0, eX.jsxs)("li", {
        className: IW()("Baf2QuestStep", {
          Done: tz.done,
          Current: tz.current,
          JustFinished: tz.justFinished,
          Away: tz.away
        }),
        children: [!tz.done && null !== tz.item && (0, eX.jsx)(DK, {
          item: tz.item
        }), (tz.done || null === tz.item) && (0, eX.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: tz.done ? "\u2713" : "\u25cb"
        }), (0, eX.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, eX.jsx)("strong", {
            children: Nz
          }), bz.length > 0 && (0, eX.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: bz.join(" ")
          }), !tz.done && tz.madeFor.length > 0 && (0, eX.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Fz("buildAFactory2Game:questRowFor", {
              items: tz.madeFor.map((zz => NK(Fz, sz.itemNames[zz], zz))).join(" \u2192 ")
            })
          }), wz && (0, eX.jsx)(gK, {
            label: Nz,
            percent: Math.round(100 * tz.amount / tz.total),
            progress: `${tz.amount.toLocaleString("en-US")}/${tz.total.toLocaleString("en-US")}`
          }), !tz.done && !tz.away && tz.chips && tz.chips.length > 0 && (0, eX.jsx)(HK, {
            chips: tz.chips
          }), Wz]
        })]
      })
    }

    function JK(zz, tz) {
      let [sz, Fz] = tz;
      return zz(`${KK}${sz}`, bK(Fz))
    }

    function IK(zz) {
      let [tz, sz] = zz;
      return tz + JSON.stringify(sz)
    }

    function CK(zz) {
      let {
        goal: tz,
        t: sz
      } = zz;
      return tz ? (0, eX.jsx)("span", {
        className: "Baf2BookGoal",
        children: sz(`${KK}${tz}`)
      }) : null
    }

    function eK(zz) {
      let {
        view: tz,
        t: sz
      } = zz;
      if (!tz.name) return null;
      const Fz = aW(tz.rows);
      return (0, eX.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, eX.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: sz(`${KK}currentQuest`)
        }), (0, eX.jsx)("strong", {
          className: "Baf2BookTitle",
          children: JK(sz, tz.name)
        }), (0, eX.jsx)(CK, {
          goal: tz.goal,
          t: sz
        }), Fz.length > 1 && (0, eX.jsx)(rK, {
          rows: Fz,
          t: sz
        }), (0, eX.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: tz.rows.map((zz => (0, eX.jsx)(YK, {
            row: zz,
            view: tz,
            t: sz
          }, zz.id)))
        }), tz.reward && (0, eX.jsxs)("span", {
          className: "Baf2BookReward",
          children: [sz(`${KK}questReward`), (0, eX.jsx)(DK, {
            item: tz.reward
          }), NK(sz, tz.itemNames[tz.reward], tz.reward)]
        })]
      })
    }

    function ZK(zz) {
      let {
        quest: tz,
        upcoming: sz,
        t: Fz
      } = zz;
      return (0, eX.jsxs)("li", {
        className: IW()("Baf2BookQuest", {
          Done: tz[3],
          Upcoming: sz
        }),
        children: [(0, eX.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: tz[3] ? "\u2713" : "\u25cb"
        }), (0, eX.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, eX.jsx)("strong", {
            className: "Baf2BookTitle",
            children: JK(Fz, tz)
          }), (0, eX.jsx)(CK, {
            goal: tz[2],
            t: Fz
          })]
        })]
      })
    }

    function GK(zz) {
      let {
        done: tz,
        total: sz,
        t: Fz
      } = zz;
      const Wz = sz > 0 ? Math.round(100 * tz / sz) : 0,
        Xz = Fz(`${KK}questBookChapterProgress`, {
          done: String(tz),
          total: String(sz)
        });
      return (0, eX.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, eX.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Xz,
          "aria-valuemin": 0,
          "aria-valuemax": sz,
          "aria-valuenow": tz,
          children: (0, eX.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Wz}%`
            }
          })
        }), (0, eX.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Xz
        })]
      })
    }

    function TK(zz) {
      let {
        view: tz,
        tier: sz,
        quests: Fz,
        t: Wz
      } = zz;
      const Xz = sz === tz.tier,
        Oz = (null !== Fz && void 0 !== Fz ? Fz : []).filter((zz => !zz[4])),
        oz = (null !== Fz && void 0 !== Fz ? Fz : []).filter((zz => zz[4])),
        vz = Oz.filter((zz => zz[3])).length,
        Uz = Xz && tz.name ? IK(tz.name) : null,
        Kz = Oz.findIndex((zz => !zz[3] && IK(zz) === Uz));
      return (0, eX.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, eX.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, eX.jsx)("h3", {
            children: BK(Wz, sz)
          }), Oz.length > 0 && (0, eX.jsx)(GK, {
            done: vz,
            total: Oz.length,
            t: Wz
          }), Xz && tz.core && (0, eX.jsx)(PK, {
            core: tz.core,
            t: Wz
          })]
        }), (0, eX.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Fz && Xz && (0, eX.jsx)(eK, {
            view: tz,
            t: Wz
          }), Oz.map(((zz, sz) => sz === Kz ? (0, eX.jsx)(eK, {
            view: tz,
            t: Wz
          }, IK(zz)) : (0, eX.jsx)(ZK, {
            quest: zz,
            upcoming: !zz[3],
            t: Wz
          }, IK(zz))))]
        }), Xz && tz.side && (0, eX.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, eX.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Wz(`${KK}questSide`)
          }), (0, eX.jsx)("strong", {
            className: "Baf2BookTitle",
            children: JK(Wz, tz.side.name)
          }), (0, eX.jsx)(CK, {
            goal: tz.side.goal,
            t: Wz
          }), (0, eX.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, eX.jsx)(YK, {
              row: tz.side.row,
              view: tz,
              t: Wz
            })
          })]
        }), oz.length > 0 && (0, eX.jsxs)(eX.Fragment, {
          children: [(0, eX.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Wz(`${KK}questBookSidesDone`)
          }), (0, eX.jsx)("ol", {
            className: "Baf2BookQuests",
            children: oz.map((zz => (0, eX.jsx)(ZK, {
              quest: zz,
              upcoming: !1,
              t: Wz
            }, IK(zz))))
          })]
        })]
      })
    }

    function cK(zz) {
      var tz, sz, Xz;
      let {
        store: Oz,
        close: oz
      } = zz;
      const {
        t: vz
      } = (0, GW.B)(), Uz = (0, OK.h)(hW, Oz.get()), uz = null !== (tz = Uz.tier) && void 0 !== tz ? tz : 1, [Nz, bz] = (0, Fz.useState)(null), wz = (null === Nz || void 0 === Nz ? void 0 : Nz.at) === uz ? Nz.tier : uz, Hz = (0, Fz.useRef)(null), Bz = null !== Uz.chapters;
      (0, Fz.useEffect)((() => {
        var zz;
        Hz.current && (Hz.current.scrollTop = 0);
        const tz = null === (zz = Hz.current) || void 0 === zz ? void 0 : zz.querySelector(".Baf2BookQuest.Current");
        if (Hz.current && tz) {
          const zz = tz.getBoundingClientRect().bottom - Hz.current.getBoundingClientRect().bottom;
          zz > 0 && (Hz.current.scrollTop += Math.min(zz, tz.getBoundingClientRect().top - Hz.current.getBoundingClientRect().top))
        }
      }), [wz, Bz]);
      const Pz = null === (sz = Uz.chapters) || void 0 === sz ? void 0 : sz.find((zz => {
        let [tz] = zz;
        return tz === wz
      }));
      return (0, eX.jsx)(mO.b, {
        close: oz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, eX.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: uK,
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: vz(`${KK}questBookTitle`)
            }), (0, eX.jsx)(JO.n, {
              onClick: oz
            })]
          }), (0, eX.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": vz(`${KK}questBookChapters`),
            children: Wz.slice(0, Kz()).map(((zz, tz) => {
              const sz = tz + 1,
                {
                  kind: Fz,
                  short: Wz
                } = gz(sz),
                Xz = Dz(sz, uz),
                Oz = Xz ? vz(`${KK}coreAtomicHidden`) : BK(vz, sz);
              return (0, eX.jsx)("li", {
                children: (0, eX.jsx)("button", {
                  type: "button",
                  className: IW()({
                    Stage: "tier" !== Fz,
                    Atomic: "atomic" === Fz,
                    Current: sz === uz,
                    Selected: sz === wz
                  }),
                  disabled: sz > uz,
                  "aria-pressed": sz === wz,
                  "aria-label": Oz,
                  title: Xz ? void 0 : Oz,
                  onClick: () => {
                    bz({
                      tier: sz,
                      at: uz
                    })
                  },
                  children: Xz ? "?" : Wz
                })
              }, zz.nameKey)
            }))
          }), (0, eX.jsxs)("div", {
            ref: Hz,
            className: "Baf2BookBody",
            children: [lW(Uz) && wz === uz && (0, eX.jsx)("p", {
              className: "Baf2BookEmpty",
              children: vz(`${KK}questBookAllDone`)
            }), (0, eX.jsx)(TK, {
              view: Uz,
              tier: wz,
              quests: null !== (Xz = null === Pz || void 0 === Pz ? void 0 : Pz[1]) && void 0 !== Xz ? Xz : null,
              t: vz
            })]
          })]
        })
      })
    }
    const jK = "buildAFactory2Game:";

    function AK(zz) {
      let {
        tiers: tz,
        from: sz,
        tier: Fz,
        shown: Wz,
        gb: Xz
      } = zz;
      const {
        t: Oz
      } = (0, GW.B)(), oz = tz.map(((zz, tz) => {
        const oz = sz + tz,
          {
            kind: vz,
            short: Uz
          } = gz(oz),
          Kz = Dz(oz, Fz);
        return (0, eX.jsx)("li", {
          children: (0, eX.jsx)("button", {
            type: "button",
            className: IW()({
              Stage: "tier" !== vz,
              Silhouette: Kz,
              Reached: oz <= Fz,
              Current: oz === Fz,
              Next: oz === Fz + 1,
              Selected: oz === Wz
            }),
            disabled: Kz,
            "aria-pressed": oz === Wz,
            "aria-label": Kz ? Oz(`${jK}coreAtomicHidden`) : void 0,
            title: Kz ? void 0 : Oz(`${jK}${zz.nameKey}`),
            onClick: () => {
              Xz(oz)
            },
            children: Kz ? "?" : Uz
          })
        }, zz.nameKey)
      }));
      return (0, eX.jsx)(eX.Fragment, {
        children: oz
      })
    }

    function yK(zz) {
      let {
        id: tz,
        label: sz,
        tiers: Fz,
        from: Wz,
        ...Xz
      } = zz;
      return (0, eX.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, eX.jsx)("span", {
          id: tz,
          className: "Baf2CoreLadderLabel",
          children: sz
        }), (0, eX.jsx)("ol", {
          "aria-labelledby": tz,
          children: (0, eX.jsx)(AK, {
            ...Xz,
            tiers: Fz,
            from: Wz
          })
        })]
      })
    }

    function MK(zz) {
      const {
        t: tz
      } = (0, GW.B)(), sz = Wz.findIndex((zz => void 0 !== zz.stage)), Fz = Wz.findIndex((zz => void 0 !== zz.reactorTier)), Xz = sz < 0 ? Wz : Wz.slice(0, sz), Oz = sz < 0 ? [] : Wz.slice(sz, Fz < 0 ? void 0 : Fz), vz = Fz < 0 || !oz() ? [] : Wz.slice(Fz);
      return (0, eX.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, eX.jsx)(yK, {
          ...zz,
          id: "baf2CoreTiersLabel",
          label: tz(`${jK}coreTiersLabel`),
          tiers: Xz,
          from: 1
        }), Oz.length > 0 && (0, eX.jsx)(yK, {
          ...zz,
          id: "baf2CoreStagesLabel",
          label: tz(`${jK}coreStagesLabel`),
          tiers: Oz,
          from: sz + 1
        }), vz.length > 0 && (0, eX.jsx)(yK, {
          ...zz,
          id: "baf2CoreAtomicLabel",
          label: tz(`${jK}coreAtomicLabel`),
          tiers: vz,
          from: Fz + 1
        })]
      })
    }
    const dK = "buildAFactory2Game:";

    function hK(zz) {
      let {
        item: tz,
        itemNames: sz,
        children: Fz
      } = zz;
      return (0, eX.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, eX.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, eX.jsx)(cW.c, {
            itemName: tz,
            amount: 0
          })
        }), (0, eX.jsx)(jW.c, {
          text: sz[tz]
        }), Fz]
      })
    }

    function QK(zz) {
      const tz = new Map;
      for (const {
          block: Fz
        }
        of zz.newDeposits) {
        var sz;
        tz.set(Fz, (null !== (sz = tz.get(Fz)) && void 0 !== sz ? sz : 0) + 1)
      }
      return [...tz]
    }

    function kK(zz) {
      let {
        value: tz,
        label: sz,
        more: Fz
      } = zz;
      return (0, eX.jsxs)("li", {
        children: [(0, eX.jsx)("strong", {
          children: tz
        }), (0, eX.jsx)("span", {
          children: sz
        }), Fz > 0 && (0, eX.jsxs)("em", {
          children: ["+", Fz]
        })]
      })
    }

    function iK(zz) {
      let {
        items: tz,
        itemNames: sz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)(), [Xz, Oz] = (0, Fz.useState)(null), oz = null !== Xz && tz.includes(Xz) ? Xz : null;
      return (0, eX.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, eX.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Wz(`${dK}coreRewardUnlocks`)
        }), (0, eX.jsx)("ul", {
          children: tz.map((zz => (0, eX.jsx)("li", {
            children: (0, eX.jsx)("button", {
              type: "button",
              className: IW()("Baf2PanelIcon", {
                Picked: zz === oz
              }),
              title: OX(Wz, zz),
              "aria-label": OX(Wz, zz),
              "aria-pressed": zz === oz,
              onClick: () => {
                Oz(zz === oz ? null : zz)
              },
              children: (0, eX.jsx)(cW.c, {
                itemName: zz,
                amount: 0
              })
            })
          }, zz)))
        }), (0, eX.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== oz && (0, eX.jsxs)(eX.Fragment, {
            children: [(0, eX.jsx)(jW.c, {
              text: sz[oz]
            }), " \xb7 ", (0, eX.jsx)(jW.c, {
              text: sz[Gz(oz)]
            })]
          }), null === oz && Wz(`${dK}coreRecipeTap`)]
        })]
      })
    }

    function LK(zz) {
      var tz, sz;
      let {
        def: Fz,
        tier: Wz,
        itemNames: Xz
      } = zz;
      const {
        t: Oz
      } = (0, GW.B)(), oz = Wz > 1 ? Hz(Wz - 1) : void 0, vz = Math.round(2 * Fz.islandRadius), Uz = oz ? Math.round(2 * oz.islandRadius) : vz, Kz = Wz >= 3 ? JF(Wz) : null;
      return (0, eX.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, eX.jsxs)("ul", {
          className: IW()("Baf2CoreStats", {
            Four: null !== Kz
          }),
          children: [(0, eX.jsx)(kK, {
            value: `${vz}\xd7${vz}`,
            label: Oz(`${dK}coreStatIsland`),
            more: vz - Uz
          }), (0, eX.jsx)(kK, {
            value: String(Fz.machineAllowance),
            label: Oz(`${dK}coreStatMachines`),
            more: Fz.machineAllowance - (null !== (tz = null === oz || void 0 === oz ? void 0 : oz.machineAllowance) && void 0 !== tz ? tz : Fz.machineAllowance)
          }), (0, eX.jsx)(kK, {
            value: String(Fz.beltAllowance),
            label: Oz(`${dK}coreStatBelts`),
            more: Fz.beltAllowance - (null !== (sz = null === oz || void 0 === oz ? void 0 : oz.beltAllowance) && void 0 !== sz ? sz : Fz.beltAllowance)
          }), null !== Kz && (0, eX.jsx)(kK, {
            value: String(Kz),
            label: Oz(`${dK}coreStatStorage`),
            more: Kz - (oz ? JF(Wz - 1) : Kz)
          })]
        }), Fz.reward && (0, eX.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, eX.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Oz(`${dK}coreRewardItem`)
          }), (0, eX.jsx)(hK, {
            item: Fz.reward,
            itemNames: Xz
          })]
        }), Fz.newDeposits.length > 0 && (0, eX.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, eX.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Oz(Fz.newDeposits.length > 1 ? `${dK}coreRewardDeposits` : `${dK}coreRewardDeposit`)
          }), QK(Fz).map((zz => {
            let [tz, sz] = zz;
            return (0, eX.jsx)(hK, {
              item: tz,
              itemNames: Xz,
              children: sz > 1 && ` \xd7${sz}`
            }, tz)
          }))]
        }), Fz.unlocks.length > 0 && (0, eX.jsx)(iK, {
          items: Fz.unlocks,
          itemNames: Xz
        }), (0, eX.jsx)(lK, {
          tier: Wz
        })]
      })
    }

    function lK(zz) {
      let {
        tier: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)(), Fz = BW[tz];
      if (!Fz) return null;
      const Wz = HW(tz, 0, 0).barrierMax !== HW(tz - 1, 0, 0).barrierMax;
      return (0, eX.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, eX.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, eX.jsx)(cW.c, {
            itemName: Wz ? uW.Chestplate : KW,
            amount: 0
          })
        }), sz(`${dK}gearPerkLine`, {
          perk: sz(`${dK}${Fz}`)
        })]
      })
    }

    function nK(zz, tz) {
      return null === zz ? tz : zz.value
    }

    function aK(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === zz || sz - zz.atMs >= Fz ? null : Wz(zz.value, tz) ? zz.armed ? null : zz : zz.armed ? zz : {
        ...zz,
        armed: !0
      }
    }

    function qK(zz, tz) {
      const sz = tz.filter((tz => {
        var sz;
        return !1 !== (null === (sz = zz.get(tz)) || void 0 === sz ? void 0 : sz.value)
      }));
      for (const [Fz, Wz] of zz) Wz.value && !tz.includes(Fz) && sz.push(Fz);
      return sz
    }

    function SK(zz, tz, sz, Wz) {
      const [Xz, Oz] = (0, Fz.useState)((() => new Map)), oz = () => {
        Oz((tz => function(zz, tz, sz, Fz) {
          var Wz;
          let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Oz = null;
          for (const [oz, vz] of zz) {
            const Wz = aK(vz, tz(oz), sz, Fz, Xz);
            Wz !== vz && (Oz ??= new Map(zz), null === Wz ? Oz.delete(oz) : Oz.set(oz, Wz))
          }
          return null !== (Wz = Oz) && void 0 !== Wz ? Wz : zz
        }(tz, zz, Date.now(), sz, Wz)))
      };
      (0, Fz.useEffect)((() => {
        oz()
      }), [tz, sz]), (0, Fz.useEffect)((() => {
        if (0 === Xz.size) return;
        const zz = Math.min(...[...Xz.values()].map((zz => zz.atMs))),
          tz = setTimeout(oz, Math.max(0, zz + sz - Date.now()) + 1);
        return () => {
          clearTimeout(tz)
        }
      }), [Xz, tz, sz]);
      return [Xz, (tz, sz) => {
        Oz((Fz => {
          const Xz = new Map(Fz);
          return Xz.set(tz, function(zz, tz, sz) {
            return {
              value: zz,
              atMs: sz,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(zz, tz)
            }
          }(sz, zz(tz), Date.now(), Wz)), Xz
        }))
      }]
    }
    const VK = "buildAFactory2Game:";

    function RK(zz) {
      let {
        message: tz,
        itemNames: sz
      } = zz;
      const Wz = lO(),
        {
          t: Xz
        } = (0, GW.B)(),
        [Oz, oz] = (0, Fz.useState)(!1),
        [vz, Uz] = function(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MO;
          const [sz, Fz] = SK((tz => zz.includes(tz)), zz, tz, Object.is);
          return [qK(sz, zz), Fz]
        }(tz.baf2CoreBankPaused),
        Kz = new Set(vz),
        uz = [...tz.baf2CoreBanked];
      for (const Fz of Kz) uz.some((zz => {
        let [tz] = zz;
        return tz === Fz
      })) || uz.push([Fz, 0]);
      return 0 === uz.length ? null : (0, eX.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, eX.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Oz,
          onClick: () => {
            oz(!Oz)
          },
          children: [(0, eX.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Xz(`${VK}coreBankedLater`)
          }), (0, eX.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: uz.map((zz => {
              let [tz, sz] = zz;
              const Fz = Kz.has(tz);
              return (0, eX.jsxs)("span", {
                className: IW()({
                  Paused: Fz
                }),
                title: Fz ? Xz(`${VK}coreBankPausedTag`) : void 0,
                children: [(0, eX.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, eX.jsx)(cW.c, {
                    itemName: tz,
                    amount: 0
                  })
                }), sz, Fz && (0, eX.jsx)(TW.c, {
                  name: "pause"
                })]
              }, tz)
            }))
          }), (0, eX.jsx)(TW.c, {
            name: Oz ? "angle-up" : "angle-down"
          })]
        }), Oz && (0, eX.jsxs)(eX.Fragment, {
          children: [(0, eX.jsx)("ul", {
            children: uz.map((zz => {
              let [tz, Fz] = zz;
              const Oz = Kz.has(tz);
              return (0, eX.jsxs)("li", {
                children: [(0, eX.jsxs)(hK, {
                  item: tz,
                  itemNames: sz,
                  children: [(0, eX.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Fz
                  }), Oz && (0, eX.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Xz(`${VK}coreBankPausedTag`)
                  })]
                }), (0, eX.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, eX.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Fz,
                    onClick: () => {
                      Wz.send(`baf2corewithdraw ${Fz} ${tz}`)
                    },
                    children: Xz(`${VK}coreTake`)
                  }), (0, eX.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Wz.send(`${rz} ${tz}`), Uz(tz, !Oz)
                    },
                    children: Xz(Oz ? `${VK}coreBankResume` : `${VK}coreBankStop`)
                  })]
                })]
              }, tz)
            }))
          }), (0, eX.jsx)("p", {
            className: "Baf2CoreHint",
            children: Xz(`${VK}coreBankNote`)
          })]
        })]
      })
    }
    const pK = "buildAFactory2Game:";

    function fK(zz) {
      const tz = Math.max(0, Math.floor(zz));
      return `${Math.floor(tz/60)}:${String(tz%60).padStart(2,"0")}`
    }

    function EK(zz) {
      let {
        item: tz
      } = zz;
      return (0, eX.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, eX.jsx)(cW.c, {
          itemName: tz,
          amount: 0
        })
      })
    }

    function zu() {
      return (0, eX.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, eX.jsx)(TW.c, {
          name: "bolt"
        })
      })
    }

    function tu(zz) {
      let {
        charge: tz,
        hint: sz,
        itemNames: Fz
      } = zz;
      const Wz = lO(),
        {
          t: Xz
        } = (0, GW.B)(),
        [Oz, oz, vz, Uz, Kz, uz, Nz] = tz,
        [bz, wz] = function(zz) {
          var tz;
          let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MO,
            Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Wz, Xz] = SK((() => zz), zz, sz, Fz);
          return [nK(null !== (tz = Wz.get("")) && void 0 !== tz ? tz : null, zz), zz => {
            Xz("", zz)
          }]
        }(Nz),
        Dz = bz === Nz ? uz : !bz,
        gz = Uz >= Kz,
        Hz = Oz.find((zz => {
          let [, tz, sz] = zz;
          return sz < .9 * tz
        }));
      let Bz = `${pK}coreChargeWaiting`,
        Pz = {};
      return gz ? Bz = `${pK}coreChargeDone` : bz ? Bz = `${pK}coreChargeStopped` : Dz && sz ? (Bz = `${pK}${sz[0]}`, Pz = {
        item: OX(Xz, sz[1])
      }) : Dz && Hz ? (Bz = `${pK}coreChargeShort`, Pz = {
        item: OX(Xz, Hz[0])
      }) : Dz && oz > 0 && !vz ? Bz = `${pK}coreChargePower` : Dz && (Bz = `${pK}coreChargeRunning`), (0, eX.jsxs)("div", {
        className: IW()("Baf2CoreCharge", {
          Waiting: !Dz && !gz,
          Done: gz
        }),
        children: [(0, eX.jsxs)("h4", {
          children: [Xz(`${pK}coreChargeTitle`), (0, eX.jsx)("span", {
            children: Xz(`${pK}coreChargeProgress`, {
              done: fK(Uz),
              need: fK(Kz)
            })
          })]
        }), (0, eX.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, eX.jsx)("div", {
            style: {
              width: 100 * Math.min(Uz, Kz) / Kz + "%"
            }
          })
        }), (0, eX.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Oz.map((zz => {
            var tz;
            let [sz, Wz, Oz] = zz;
            const oz = Oz >= .9 * Wz;
            return (0, eX.jsxs)("li", {
              className: IW()({
                Done: oz,
                Short: Dz && !oz
              }),
              children: [(0, eX.jsx)(EK, {
                item: sz
              }), (0, eX.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, eX.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, eX.jsx)(jW.c, {
                    text: null !== (tz = Fz[sz]) && void 0 !== tz ? tz : sz
                  }), (0, eX.jsx)("span", {
                    children: Xz(`${pK}coreChargeItem`, {
                      now: String(Oz),
                      need: String(Wz)
                    })
                  })]
                }), (0, eX.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, eX.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Oz/Wz)}%`
                    }
                  })
                })]
              })]
            }, sz)
          })), oz > 0 && (0, eX.jsxs)("li", {
            className: IW()("Baf2CoreChargePower", {
              Short: Dz && !vz
            }),
            children: [(0, eX.jsx)(zu, {}), (0, eX.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, eX.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, eX.jsx)("span", {
                  children: Xz(`${pK}coreChargePowerRow`, {
                    power: pz(oz)
                  })
                })
              })
            })]
          })]
        }), (0, eX.jsx)("p", {
          className: "Baf2CoreHint",
          children: Xz(Bz, Pz)
        }), !gz && (Dz || bz) && (0, eX.jsx)("button", {
          type: "button",
          className: IW()("Baf2CoreChargeToggle", {
            Stopped: bz
          }),
          onClick: () => {
            Wz.send(xz), wz(!bz)
          },
          children: Xz(bz ? `${pK}coreChargeRestart` : `${pK}coreChargeStop`)
        })]
      })
    }

    function su(zz) {
      let {
        charge: tz,
        reached: sz,
        itemNames: Fz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)();
      return (0, eX.jsxs)("div", {
        className: IW()("Baf2CoreCharge", {
          Done: sz
        }),
        children: [(0, eX.jsxs)("h4", {
          children: [Wz(`${pK}coreChargeTitle`), (0, eX.jsx)("span", {
            children: Wz(`${pK}coreChargeSpecTime`, {
              time: fK(tz.seconds)
            })
          })]
        }), (0, eX.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [tz.items.map((zz => {
            var tz;
            let {
              item: Xz,
              amount: Oz
            } = zz;
            return (0, eX.jsxs)("li", {
              className: IW()({
                Done: sz
              }),
              children: [(0, eX.jsx)(EK, {
                item: Xz
              }), (0, eX.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, eX.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, eX.jsx)(jW.c, {
                    text: null !== (tz = Fz[Xz]) && void 0 !== tz ? tz : Xz
                  }), (0, eX.jsx)("span", {
                    children: Wz(`${pK}coreChargeSpecItem`, {
                      need: String(Oz)
                    })
                  })]
                })
              })]
            }, Xz)
          })), tz.powerPerS > 0 && (0, eX.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, eX.jsx)(zu, {}), (0, eX.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, eX.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, eX.jsx)("span", {
                  children: Wz(`${pK}coreChargePowerRow`, {
                    power: pz(tz.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const Fu = "buildAFactory2Game:";

    function Wu(zz) {
      let {
        def: tz,
        reached: sz,
        banked: Fz,
        itemNames: Wz
      } = zz;
      const {
        t: Xz
      } = (0, GW.B)();
      return (0, eX.jsx)("ul", {
        className: "Baf2CoreCost",
        children: tz.cost.map((zz => {
          let {
            item: tz,
            amount: Oz
          } = zz;
          const oz = sz ? 0 : Fz(tz);
          return (0, eX.jsx)("li", {
            children: (0, eX.jsx)(hK, {
              item: tz,
              itemNames: Wz,
              children: (0, eX.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: oz > 0 ? Xz(`${Fu}coreBankedFor`, {
                  amount: String(oz),
                  total: String(Oz)
                }) : `\xd7${Oz}`
              })
            })
          }, tz)
        }))
      })
    }

    function Xu(zz, tz) {
      if (tz >= Kz()) return zz(`${Fu}coreMaxTier`);
      const sz = Uz[tz + 1];
      return sz && !sz.startsWith("upgradeCore") ? zz(`${Fu}coreGateQuest`, {
        quest: zz(`${Fu}quest_${sz}`)
      }) : zz(`${Fu}coreGateClosed`)
    }

    function Ou() {
      const {
        t: zz
      } = (0, GW.B)(), tz = lO(), sz = (0, Fz.useRef)(null), Wz = (0, Fz.useRef)(Date.now());
      return fU(!0, sz), (0, eX.jsx)("div", {
        ref: sz,
        className: "Baf2CoreGrow",
        children: (0, eX.jsx)(JO.p, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Wz.current >= 600 && tz.send(Pz)
          },
          children: zz(`${Fu}coreGrow`)
        })
      })
    }

    function ou(zz) {
      let {
        message: tz,
        itemNames: sz,
        next: Fz
      } = zz;
      const Wz = lO(),
        {
          t: Xz
        } = (0, GW.B)(),
        Oz = tz.baf2CoreTier,
        oz = tz.baf2CoreReady,
        vz = tz.baf2CoreNeeds.filter((zz => {
          let [, tz, sz, Fz] = zz;
          return Fz > 0 && tz < sz
        })),
        Uz = tz.baf2CoreNeeds.every((zz => {
          let [, tz, sz] = zz;
          return tz >= sz
        })),
        Kz = tz.baf2CoreKeep;
      return (0, eX.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, eX.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [oz && (0, eX.jsx)(Ou, {}), (0, eX.jsx)("h3", {
            children: Xz(`${Fu}coreBring`)
          }), (0, eX.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: tz.baf2CoreNeeds.map((zz => {
              let [tz, Fz, Oz, oz] = zz;
              return (0, eX.jsxs)("li", {
                className: IW()({
                  Done: Fz >= Oz
                }),
                children: [(0, eX.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, eX.jsx)(cW.c, {
                    itemName: tz,
                    amount: 0
                  })
                }), (0, eX.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, eX.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, eX.jsx)(jW.c, {
                      text: sz[tz]
                    }), (0, eX.jsxs)("span", {
                      children: [Fz, "/", Oz]
                    })]
                  }), (0, eX.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, eX.jsx)("div", {
                      style: {
                        width: 100 * Fz / Oz + "%"
                      }
                    }), oz > 0 && (0, eX.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * oz / Oz + "%"
                      }
                    })]
                  })]
                }), oz > 0 && Fz < Oz && (0, eX.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Wz.send(`${Yz} ${tz}`)
                  },
                  children: Xz(`${Fu}coreDeposit`, {
                    amount: String(oz)
                  })
                })]
              }, tz)
            }))
          }), tz.baf2CoreCharge && (0, eX.jsx)(tu, {
            charge: tz.baf2CoreCharge,
            hint: tz.baf2CoreChargeHint,
            itemNames: sz
          }), !oz && vz.length > 1 && (0, eX.jsx)(JO.p, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Wz.send(Pz)
            },
            children: Xz(`${Fu}coreHandOver`)
          }), !oz && void 0 !== Kz && (0, eX.jsx)("p", {
            className: "Baf2CoreHint",
            children: Xz(`${Fu}coreKeepRest`, {
              item: OX(Xz, Kz)
            })
          }), !oz && !Uz && 0 === vz.length && void 0 === Kz && (0, eX.jsx)("p", {
            className: "Baf2CoreHint",
            children: Xz(`${Fu}coreNothingHeld`)
          }), (0, eX.jsx)(RK, {
            message: tz,
            itemNames: sz
          })]
        }), (0, eX.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, eX.jsx)("h3", {
            children: Xz(`${Fu}coreRewards`)
          }), (0, eX.jsx)(LK, {
            def: Fz,
            tier: Oz + 1,
            itemNames: sz
          })]
        })]
      })
    }

    function vu(zz) {
      let {
        message: tz,
        itemNames: sz,
        shown: Fz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)(), Xz = tz.baf2CoreTier, Oz = Hz(Fz), oz = Fz <= Xz, vz = new Map(tz.baf2CoreBanked), Uz = !Bz(Xz, mz(tz)) && Fz === Xz;
      return (0, eX.jsxs)("div", {
        className: IW()("Baf2CoreBody", {
          Locked: !oz
        }),
        children: [(0, eX.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, eX.jsx)("h3", {
            children: Wz(oz ? `${Fu}coreItTook` : `${Fu}coreItNeeds`)
          }), 0 === Oz.cost.length && (0, eX.jsx)("p", {
            className: "Baf2CoreHint",
            children: Wz(`${Fu}coreTierStart`)
          }), Oz.cost.length > 0 && (0, eX.jsx)(Wu, {
            def: Oz,
            reached: oz,
            banked: zz => {
              var tz;
              return function(zz, tz, sz, Fz) {
                let Wz = zz;
                for (let Oz = tz + 2; Oz <= sz; Oz++) {
                  var Xz;
                  const zz = Hz(Oz).cost.find((zz => zz.item === Fz)),
                    tz = Math.min(Wz, null !== (Xz = null === zz || void 0 === zz ? void 0 : zz.amount) && void 0 !== Xz ? Xz : 0);
                  if (Oz === sz) return tz;
                  Wz -= tz
                }
                return 0
              }(null !== (tz = vz.get(zz)) && void 0 !== tz ? tz : 0, Xz, Fz, zz)
            },
            itemNames: sz
          }), Oz.charge && (0, eX.jsx)(su, {
            charge: Oz.charge,
            reached: oz,
            itemNames: sz
          }), Uz && (0, eX.jsxs)(eX.Fragment, {
            children: [(0, eX.jsx)("p", {
              className: "Baf2CoreHint",
              children: Xu(Wz, Xz)
            }), (0, eX.jsx)(RK, {
              message: tz,
              itemNames: sz
            })]
          })]
        }), (0, eX.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, eX.jsx)("h3", {
            children: Wz(oz ? `${Fu}coreGave` : `${Fu}coreLockedRewards`)
          }), (0, eX.jsx)(LK, {
            def: Oz,
            tier: Fz,
            itemNames: sz
          })]
        })]
      })
    }

    function Uu(zz, tz) {
      const {
        key: sz,
        params: Fz
      } = bz(tz - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return zz(`${Fu}${sz}`, Fz)
    }
    const Ku = "buildAFactory2Game:",
      uu = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Nu = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function bu(zz) {
      let {
        view: tz,
        close: sz,
        askIslands: Wz
      } = zz;
      const {
        t: Xz
      } = (0, GW.B)(), [Oz, oz] = (0, Fz.useState)(!1);
      (0, Fz.useEffect)((() => {
        if (!Oz) return;
        const zz = window.setTimeout((() => {
          oz(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(zz)
        }
      }), [Oz]);
      const {
        message: vz,
        itemNames: Uz
      } = tz, Kz = vz.baf2CoreTier, uz = Hz(Kz), Nz = Bz(Kz, mz(vz)), [Dz, gz] = vz.baf2CoreMachines, [Pz, rz] = vz.baf2CoreBelts, Yz = vz.baf2CoreStorage, xz = vz.baf2CoreReady, [Jz, Iz] = (0, Fz.useState)(null), Cz = (null === Jz || void 0 === Jz ? void 0 : Jz.at) === Kz && Jz.ready === xz ? Jz.tier : Nz ? Kz + 1 : Kz;
      let ez = "coreTierLocked";
      Cz <= Kz ? ez = "coreTierReached" : Cz === Kz + 1 && (ez = "coreTierNext");
      const Zz = Xz(`${Ku}${Hz(Cz).nameKey}`),
        Gz = Cz === Kz + 1 ? Nz : null,
        Tz = bz(Cz, {
          tier: ez,
          stage: uu[ez],
          atomic: Nu[ez]
        }),
        cz = Xz(`${Ku}${Tz.key}`, {
          ...Tz.params,
          name: Zz
        }),
        jz = bz(Kz, wz),
        Az = Xz(`${Ku}${jz.key}`, {
          ...jz.params,
          name: Xz(`${Ku}${uz.nameKey}`)
        });
      return (0, eX.jsx)(mO.b, {
        close: sz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, eX.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsxs)("div", {
              children: [(0, eX.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Xz(`${Ku}coreTitle`)
              }), void 0 !== vz.baf2CoreIslandName && (0, eX.jsx)("p", {
                className: "Baf2CoreIsland",
                children: vz.baf2CoreIslandName
              }), (0, eX.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, eX.jsx)("span", {
                  children: Az
                }), (0, eX.jsx)("span", {
                  className: IW()({
                    Full: Dz >= gz
                  }),
                  children: Xz(`${Ku}coreMachineCount`, {
                    amount: String(Dz),
                    total: String(gz)
                  })
                }), (0, eX.jsx)("span", {
                  className: IW()({
                    Full: Pz >= rz
                  }),
                  children: Xz(`${Ku}coreBeltCount`, {
                    amount: String(Pz),
                    total: String(rz)
                  })
                }), void 0 !== Yz && (0, eX.jsx)("span", {
                  className: IW()({
                    Full: Yz[0] >= Yz[1]
                  }),
                  children: Xz(`${Ku}coreStorageCount`, {
                    amount: String(Yz[0]),
                    total: String(Yz[1])
                  })
                })]
              })]
            }), (0, eX.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [vz.baf2CoreIslands && (0, eX.jsx)(JO.h, {
                className: "Baf2CoreIslandsButton",
                disabled: Oz,
                onClick: () => {
                  oz(!0), Wz()
                },
                children: Xz(`${Ku}islandsOpenButton`)
              }), (0, eX.jsx)(JO.n, {
                onClick: sz
              })]
            })]
          }), (0, eX.jsx)(MK, {
            tier: Kz,
            shown: Cz,
            gb: zz => {
              Iz({
                tier: zz,
                at: Kz,
                ready: xz
              })
            }
          }), (0, eX.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [cz, Cz > Kz + 1 && (0, eX.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: Uu(Xz, Cz)
            })]
          }), 6 === Cz && Cz > Kz && (0, eX.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Xz(`${Ku}coreStagesNote`)
          }), 11 === Cz && Cz > Kz && (0, eX.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Xz(`${Ku}coreAtomicNote`)
          }), Gz && (0, eX.jsx)(ou, {
            message: vz,
            itemNames: Uz,
            next: Gz
          }), !Gz && (0, eX.jsx)(vu, {
            message: vz,
            itemNames: Uz,
            shown: Cz
          })]
        })
      })
    }
    const wu = {
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
    const Du = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: KX,
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

    function gu(zz) {
      return zz.baf2DropCometOreOnly ? "dropCometOre" : zz.baf2DropCometIsotope ? "seed" === zz.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function Hu(zz) {
      let {
        message: tz,
        quests: sz,
        close: Wz,
        leave: Xz
      } = zz;
      const Oz = lO(),
        {
          t: oz
        } = (0, GW.B)(),
        vz = (0, OK.h)(hW, sz.get()),
        Uz = function(zz) {
          var tz;
          if (!jz(zz.tutorial)) return null;
          const sz = zz.rows.find((zz => zz.current)),
            Fz = sz ? wu[sz.key] : void 0;
          return null !== (tz = null !== Fz && void 0 !== Fz ? Fz : zz.side ? wu[zz.side.row.key] : void 0) && void 0 !== tz ? tz : null
        }(vz),
        Kz = null === vz.tier || bX(vz.tier),
        uz = Kz ? Du : Du.filter((zz => {
          let {
            item: tz
          } = zz;
          return tz !== KX
        })),
        [Nz, bz] = (0, Fz.useState)(null),
        wz = null !== Nz && void 0 !== Nz ? Nz : !tz.baf2DropFoundSalvage && Kz,
        Dz = tz.baf2DropRuinDistance,
        gz = tz.baf2DropComet,
        Hz = tz.baf2DropOldWorks,
        Bz = tz.baf2DropGrove,
        Pz = function(zz) {
          return 2 + Number(void 0 !== zz.baf2DropComet) + Number(!!zz.baf2DropOwedComet || void 0 !== zz.baf2DropOwedWaitMinutes) + Number(void 0 !== zz.baf2DropDigDistance) + Number(void 0 !== zz.baf2DropOldWorks) + Number(void 0 !== zz.baf2DropGrove)
        }(tz),
        rz = zz => {
          Oz.send(function(zz) {
            return `baf2drop ${zz}`
          }(zz)), Xz()
        };
      let Yz = oz("buildAFactory2Game:dropRuinNone");
      if (null !== Dz) {
        let zz = tz.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        tz.baf2DropRuinOldWorks && (zz = "dropRuinOldWorks");
        const sz = void 0 === tz.baf2DropRuinCluster ? oz("buildAFactory2Game:dropRuinOpen") : oz("buildAFactory2Game:dropRuinCluster", {
          count: String(tz.baf2DropRuinCluster)
        });
        Yz = `${oz(`buildAFactory2Game:${zz}`,{distance:String(Dz)})} ${sz}`
      }
      let xz = oz("buildAFactory2Game:dropBelowDescription");
      void 0 !== tz.baf2DropBelowLook && (xz = oz("buildAFactory2Game:dropBelowLook", {
        look: oz(tz.baf2DropBelowLook)
      }));
      const mz = "buildAFactory2Game:wildsRegion_survivorGrove" === tz.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        Jz = mX(oz, 60 * function(zz) {
          const [tz, sz] = (0, Fz.useState)((() => Date.now())), [Wz, Xz] = (0, Fz.useState)(tz);
          return (0, Fz.useEffect)((() => {
            const zz = Date.now();
            sz(zz), Xz(zz)
          }), [zz]), (0, Fz.useEffect)((() => {
            const zz = window.setInterval((() => {
              Xz(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(zz)
            }
          }), []), Math.max(1, zz.baf2DropRenewMinutes - Math.floor((Wz - tz) / 6e4))
        }(tz)),
        Iz = function(zz, tz, sz) {
          return "ruin" === zz && !sz || "owed" === zz && !tz.baf2DropOwedComet ? null : zz
        }(Uz, tz, null !== Dz),
        Cz = function(zz) {
          for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
          return IW()("Baf2DropTile", ...sz, {
            Wanted: Iz === zz
          })
        };
      return (0, eX.jsx)(mO.b, {
        close: Wz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, eX.jsxs)("section", {
          className: IW()("Baf2Panel Baf2DropMap", {
            Many: Pz >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsxs)("div", {
              children: [(0, eX.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: oz("buildAFactory2Game:dropMapTitle")
              }), (0, eX.jsx)("p", {
                children: oz("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, eX.jsx)(JO.n, {
              onClick: Wz
            })]
          }), (0, eX.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== gz && (0, eX.jsxs)(JO.y, {
              className: Cz("comet", "Baf2DropComet"),
              onClick: () => {
                rz("comet")
              },
              children: [(0, eX.jsx)("strong", {
                children: oz("buildAFactory2Game:dropComet")
              }), (0, eX.jsx)("span", {
                children: oz(`buildAFactory2Game:${gu(tz)}`, {
                  distance: String(gz)
                })
              })]
            }), tz.baf2DropOwedComet && (0, eX.jsxs)(JO.y, {
              className: Cz("owed", "Baf2DropComet"),
              onClick: () => {
                rz("owed")
              },
              children: [(0, eX.jsx)("strong", {
                children: oz("buildAFactory2Game:dropOwedComet")
              }), (0, eX.jsx)("span", {
                children: tz.baf2DropOwedIsotope ? oz("buildAFactory2Game:dropOwedIsotopeDescription") : oz("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== tz.baf2DropOwedWaitMinutes && (0, eX.jsxs)(JO.y, {
              className: Cz("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, eX.jsx)("strong", {
                children: oz("buildAFactory2Game:dropOwedComet")
              }), (0, eX.jsx)("span", {
                children: oz("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(tz.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, eX.jsxs)(JO.h, {
              className: Cz("below"),
              onClick: () => {
                rz("below")
              },
              children: [(0, eX.jsx)("strong", {
                children: oz("buildAFactory2Game:dropBelow")
              }), (0, eX.jsx)("span", {
                children: xz
              })]
            }), void 0 !== tz.baf2DropDigDistance && (0, eX.jsxs)(JO.t, {
              className: Cz("dig"),
              onClick: () => {
                rz("dig")
              },
              children: [(0, eX.jsx)("strong", {
                children: oz("buildAFactory2Game:dropDig")
              }), (0, eX.jsx)("span", {
                children: oz("buildAFactory2Game:dropDigDescription", {
                  distance: String(tz.baf2DropDigDistance),
                  y: xX(tz.baf2DropDigY)
                })
              })]
            }), void 0 !== Bz && (0, eX.jsxs)(JO.t, {
              className: Cz("grove", "Baf2DropGrove"),
              onClick: () => {
                rz("grove")
              },
              children: [(0, eX.jsx)("strong", {
                children: oz("buildAFactory2Game:dropGrove")
              }), (0, eX.jsx)("span", {
                children: oz(`buildAFactory2Game:${mz}`, {
                  distance: String(Bz)
                })
              })]
            }), (0, eX.jsxs)(JO.p, {
              className: Cz("ruin"),
              disabled: null === Dz,
              onClick: () => {
                rz("ruin")
              },
              children: [(0, eX.jsx)("strong", {
                children: oz("buildAFactory2Game:dropRuin")
              }), (0, eX.jsx)("span", {
                children: Yz
              })]
            }), void 0 !== Hz && (0, eX.jsxs)(JO.H, {
              className: Cz("works"),
              onClick: () => {
                rz("works")
              },
              children: [(0, eX.jsx)("strong", {
                children: oz("buildAFactory2Game:dropOldWorks")
              }), (0, eX.jsx)("span", {
                children: oz("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(Hz)
                })
              })]
            })]
          }), (0, eX.jsx)("p", {
            className: "Baf2DropRenew",
            children: oz("buildAFactory2Game:dropRenew", {
              time: Jz
            })
          }), (0, eX.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: wz,
            onToggle: zz => {
              zz.currentTarget.open !== wz && bz(zz.currentTarget.open)
            },
            children: [(0, eX.jsx)("summary", {
              children: oz("buildAFactory2Game:dropSalvageWhat")
            }), (0, eX.jsx)("p", {
              children: oz("buildAFactory2Game:dropSalvageIntro")
            }), (0, eX.jsx)("ul", {
              children: uz.map((zz => {
                let {
                  item: tz,
                  nameKey: sz,
                  useKey: Fz,
                  params: Wz
                } = zz;
                return (0, eX.jsxs)("li", {
                  children: [(0, eX.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, eX.jsx)(cW.c, {
                      itemName: tz,
                      amount: 0
                    })
                  }), (0, eX.jsxs)("span", {
                    children: [(0, eX.jsx)("strong", {
                      children: oz(sz)
                    }), ": ", oz(Fz, Wz)]
                  })]
                }, tz)
              }))
            })]
          })]
        })
      })
    }
    const Bu = "buildAFactory2Game:";

    function Pu(zz, tz) {
      return zz.sendIslandEdit(`baf2coopleave ${tz.baf2IslandId}`)
    }

    function ru(zz) {
      let {
        card: tz,
        canRename: sz,
        done: Wz,
        t: Xz
      } = zz;
      const Oz = lO(),
        [oz, vz] = (0, Fz.useState)(tz.baf2IslandName),
        Uz = IU(oz),
        Kz = "" === Uz || CU(Uz),
        uz = () => {
          !Kz && sz && (Uz !== tz.baf2IslandName ? Wz(Oz.sendIslandEdit(`baf2islandrename ${tz.baf2IslandId} ${Uz}`)) : Wz(null))
        },
        Nz = () => {
          Wz(null)
        };
      return (0, eX.jsxs)("div", {
        className: "Baf2IslandForm",
        ...RU(Nz),
        children: [(0, eX.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Xz(`${Bu}islandsRenameLabel`), (0, eX.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: oz,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: pU,
            onChange: zz => {
              vz(zz.target.value)
            },
            ...VU(uz, Nz)
          })]
        }), "" === Uz && (0, eX.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Xz(`${Bu}islandsRenameEmpty`)
        }), CU(Uz) && (0, eX.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Xz(`${Bu}islandsNameReserved`)
        }), (0, eX.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, eX.jsx)(JO.t, {
            disabled: Kz || !sz,
            onClick: uz,
            children: Xz(`${Bu}islandsRenameSave`)
          }), (0, eX.jsx)(JO.h, {
            onClick: Nz,
            children: Xz(`${Bu}islandsCancel`)
          })]
        })]
      })
    }

    function Yu(zz) {
      let {
        card: tz,
        canDelete: sz,
        done: Wz,
        t: Xz
      } = zz;
      const Oz = lO(),
        [oz, vz] = (0, Fz.useState)(""),
        Uz = function(zz, tz) {
          return IU(zz).toLowerCase() === IU(tz).toLowerCase()
        }(oz, tz.baf2IslandName),
        Kz = () => {
          Uz && sz && Wz(Oz.sendIslandEdit(`baf2islanddelete ${tz.baf2IslandId}`))
        },
        uz = () => {
          Wz(null)
        },
        Nz = hU("name"),
        [bz, wz = ""] = Xz(`${Bu}islandsDeleteConfirm`, {
          name: Nz
        }).split(Nz);
      return (0, eX.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...RU(uz),
        children: [(0, eX.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, eX.jsxs)("span", {
            children: [bz, (0, eX.jsx)("strong", {
              children: tz.baf2IslandName
            }), wz]
          }), (0, eX.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: oz,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: pU,
            onChange: zz => {
              vz(zz.target.value)
            },
            ...VU(Kz, uz)
          })]
        }), nU(tz) && (0, eX.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Xz(`${Bu}islandsDeleteLeftBack`)
        }), (0, eX.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, eX.jsx)(JO.H, {
            disabled: !Uz || !sz,
            onClick: Kz,
            children: Xz(`${Bu}islandsDeleteForGood`)
          }), (0, eX.jsx)(JO.h, {
            onClick: uz,
            children: Xz(`${Bu}islandsCancel`)
          })]
        })]
      })
    }

    function xu(zz) {
      let {
        members: tz,
        t: sz
      } = zz;
      const Fz = tz.length;
      return (0, eX.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, eX.jsxs)("span", {
          children: [1 === Fz ? sz(`${Bu}islandsPlayersOne`) : sz(`${Bu}islandsPlayers`, {
            count: String(Fz)
          }), " "]
        }), tz.map(((zz, tz) => (0, eX.jsxs)("span", {
          className: IW()("Baf2IslandMember", {
            Here: zz.baf2MemberHere
          }),
          title: zz.baf2MemberHere ? sz(`${Bu}islandsPlayerHere`) : void 0,
          children: [zz.baf2MemberName, tz < Fz - 1 ? ", " : ""]
        }, zz.baf2MemberKey)))]
      })
    }

    function mu(zz) {
      let {
        card: tz,
        answered: sz,
        nowMs: Wz,
        t: Xz
      } = zz;
      const Oz = lO(),
        [oz, vz] = (0, Fz.useState)(new Map),
        Uz = nU(tz);
      if (!Uz) return null;
      return (0, eX.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, eX.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Xz(`${Bu}islandsLeftTitle`)
        }), (0, eX.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Uz.left.map((zz => {
            const Fz = zz.baf2LeftKey,
              Kz = qU(oz.get(Fz), sz, Wz),
              uz = function(zz) {
                return 1 === zz ? [`${YU}islandsLeftItemsOne`] : [`${YU}islandsLeftItems`, {
                  count: String(zz)
                }]
              }(zz.baf2LeftItems);
            return (0, eX.jsx)("li", {
              className: IW()("Baf2IslandPerson", {
                Pending: Kz
              }),
              children: (0, eX.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, eX.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: zz.baf2LeftName
                }), (0, eX.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Xz(uz[0], uz[1])
                }), Uz.claim && (0, eX.jsx)(JO.t, {
                  className: "Baf2IslandPersonButton",
                  disabled: Kz,
                  onClick: () => {
                    (zz => {
                      const sz = Oz.sendIslandEdit(`baf2coopclaim ${tz.baf2IslandId} ${zz}`);
                      vz((tz => new Map(tz).set(zz, {
                        atMs: Date.now(),
                        answer: sz
                      })))
                    })(Fz)
                  },
                  children: Xz(`${Bu}islandsClaim`)
                })]
              })
            }, Fz)
          }))
        }), Uz.goThere && (0, eX.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Xz(`${Bu}islandsClaimGoThere`)
        })]
      })
    }

    function Ju(zz) {
      let {
        card: tz,
        view: sz,
        blocked: Wz,
        maxIslands: Xz,
        answered: Oz,
        nowMs: oz,
        done: vz,
        openSocial: Uz,
        t: Kz
      } = zz;
      const uz = lO(),
        [Nz, bz] = (0, Fz.useState)(new Map),
        [wz, Dz] = (0, Fz.useState)(new Map),
        [gz, Hz] = (0, Fz.useState)(null),
        Bz = (0, Fz.useRef)(null);
      zK(Bz);
      const Pz = tz.baf2IslandId,
        rz = tz.baf2IslandCoop,
        Yz = null !== rz && void 0 !== rz && rz.baf2CoopMembers.some((zz => zz.baf2MemberKey === gz)) ? gz : null,
        xz = function(zz, tz) {
          const sz = zz.baf2IslandCoop;
          return sz && aU(sz) || null !== tz ? void 0 : zz.baf2IslandInvitable
        }(tz, Wz),
        mz = function(zz, tz) {
          const sz = zz.baf2IslandCoop;
          return sz && aU(sz) ? {
            key: `${YU}islandsCoopFull`,
            params: {
              max: String(sz.baf2CoopMax)
            }
          } : void 0 !== zz.baf2IslandInvitable && null === tz || sz && !sz.baf2CoopManageHere ? null : "degraded" === tz || "stuck" === tz ? {
            key: `${YU}islandsInviteNotLoaded`
          } : null === tz || function(zz) {
            return "notHome" === zz || "wilds" === zz || "visiting" === zz
          }(tz) || TU(tz) ? {
            key: `${YU}islandsInviteGoThere`
          } : {
            key: `${YU}islandsInviteBusy`
          }
        }(tz, Wz),
        Jz = () => {
          var zz;
          Hz(null), null === (zz = Bz.current) || void 0 === zz || zz.focus()
        };
      return (0, eX.jsxs)("div", {
        ref: Bz,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...RU(null === Yz ? vz : Jz),
        children: [rz && (0, eX.jsxs)(eX.Fragment, {
          children: [(0, eX.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Kz(`${Bu}islandsPlayersTitle`, {
              count: String(rz.baf2CoopMembers.length),
              max: String(rz.baf2CoopMax)
            })
          }), (0, eX.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: rz.baf2CoopMembers.map(((zz, tz) => {
              const Fz = zz.baf2MemberKey,
                Wz = qU(Nz.get(Fz), Oz, oz);
              return (0, eX.jsxs)("li", {
                className: IW()("Baf2IslandPerson", {
                  Pending: Wz
                }),
                children: [(0, eX.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, eX.jsx)("span", {
                    className: IW()("Baf2IslandPersonName", {
                      Here: zz.baf2MemberHere
                    }),
                    children: zz.baf2MemberName
                  }), zz.baf2MemberHere && (0, eX.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Kz(`${Bu}islandsPlayerHere`)
                  }), 0 === tz && (0, eX.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Kz(`${Bu}islandsPlayerOwner`)
                  }), sz.remove && tz > 0 && !Wz && Yz !== Fz && (0, eX.jsx)(JO.K, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var zz;
                      Hz(Fz), null === (zz = Bz.current) || void 0 === zz || zz.focus()
                    },
                    children: Kz(`${Bu}islandsRemove`)
                  })]
                }), Yz === Fz && (0, eX.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, eX.jsx)("p", {
                    children: QU(Kz, `${Bu}islandsRemoveConfirm`, {
                      player: zz.baf2MemberName
                    })
                  }), (0, eX.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, eX.jsx)(JO.H, {
                      onClick: () => {
                        (zz => {
                          const tz = uz.sendIslandEdit(`baf2coopremove ${Pz} ${zz.baf2MemberKey}`);
                          bz((sz => new Map(sz).set(zz.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: tz
                          }))), Jz()
                        })(zz)
                      },
                      children: Kz(`${Bu}islandsRemoveYes`)
                    }), (0, eX.jsx)(JO.h, {
                      onClick: Jz,
                      children: Kz(`${Bu}islandsCancel`)
                    })]
                  })]
                })]
              }, Fz)
            }))
          })]
        }), (void 0 !== xz || null !== mz) && (0, eX.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Kz(`${Bu}islandsInviteTitle`)
        }), !rz && (void 0 !== xz || null !== mz) && (0, eX.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Kz(`${Bu}islandsInviteShareNote`)
        }), 0 === (null === xz || void 0 === xz ? void 0 : xz.length) && (0, eX.jsx)(Iu, {
          openSocial: Uz,
          t: Kz
        }), void 0 !== xz && xz.length > 0 && (0, eX.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: xz.map((zz => {
            const tz = !0 === zz.baf2InvitableSent || qU(wz.get(zz.baf2InvitableId), Oz, oz);
            return (0, eX.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, eX.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, eX.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: zz.baf2InvitableName
                }), zz.baf2InvitableFull && !tz && (0, eX.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Kz(`${Bu}islandsInviteTheirFull`, {
                    max: String(Xz)
                  })
                }), (tz || !zz.baf2InvitableFull) && (0, eX.jsx)(JO.t, {
                  className: "Baf2IslandPersonButton",
                  disabled: tz,
                  onClick: () => {
                    (zz => {
                      const tz = uz.sendIslandEdit(`baf2coopinvite ${Pz} ${zz}`);
                      Dz((sz => new Map(sz).set(zz, {
                        atMs: Date.now(),
                        answer: tz
                      })))
                    })(zz.baf2InvitableId)
                  },
                  children: Kz(tz ? `${Bu}islandsInvited` : `${Bu}islandsInvite`)
                })]
              })
            }, zz.baf2InvitableId)
          }))
        }), mz && (0, eX.jsx)(FK, {
          note: mz,
          t: Kz
        }), (0, eX.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, eX.jsx)(JO.h, {
            onClick: vz,
            children: Kz(`${Bu}islandsDone`)
          })
        })]
      })
    }

    function Iu(zz) {
      let {
        openSocial: tz,
        t: sz
      } = zz;
      return (0, eX.jsxs)(eX.Fragment, {
        children: [(0, eX.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: sz(tz ? `${Bu}islandsInviteNobody` : `${Bu}islandsInviteNobodyGuest`)
        }), tz && (0, eX.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, eX.jsx)(JO.h, {
            onClick: tz,
            children: sz("socialBar:social")
          })
        })]
      })
    }

    function Cu(zz) {
      let {
        className: tz,
        text: sz,
        ConfirmButton: Wz,
        confirmLabel: Xz,
        canConfirm: Oz,
        send: oz,
        done: vz,
        t: Uz
      } = zz;
      const Kz = (0, Fz.useRef)(null);
      zK(Kz);
      const uz = () => {
        vz(null)
      };
      return (0, eX.jsxs)("div", {
        ref: Kz,
        tabIndex: -1,
        className: IW()("Baf2IslandForm", tz),
        ...RU(uz),
        children: [(0, eX.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: sz
        }), (0, eX.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, eX.jsx)(Wz, {
            disabled: !Oz,
            onClick: () => {
              Oz && vz(oz())
            },
            children: Xz
          }), (0, eX.jsx)(JO.h, {
            onClick: uz,
            children: Uz(`${Bu}islandsCancel`)
          })]
        })]
      })
    }

    function eu(zz) {
      return "hidden" !== zz
    }

    function Zu(zz) {
      var tz, sz;
      let {
        card: Wz,
        keepOwn: Xz,
        blocked: Oz,
        maxIslands: oz,
        serverNowMs: vz,
        nowMs: Uz,
        actions: Kz,
        full: uz,
        waits: Nz,
        answered: bz,
        mode: wz,
        setMode: Dz,
        pending: gz,
        onSent: Hz,
        switchTo: Bz,
        leave: Pz,
        coopOn: rz,
        openSocial: Yz,
        t: xz
      } = zz;
      const mz = lO(),
        Jz = Wz.baf2IslandActive,
        Iz = Jz ? null : function(zz, tz) {
          if (zz <= 0) return null;
          const sz = tz - zz;
          if (sz < BX) return [`${YU}islandsPlayedJustNow`];
          if (sz < xU) return [`${YU}islandsPlayedMinutes`, {
            minutes: String(Math.floor(sz / BX))
          }];
          if (sz < mU) return [`${YU}islandsPlayedHours`, {
            hours: String(Math.floor(sz / xU))
          }];
          const Fz = Math.floor(sz / mU);
          return 1 === Fz ? [`${YU}islandsPlayedDay`] : [`${YU}islandsPlayedDays`, {
            days: String(Fz)
          }]
        }(Wz.baf2IslandLastPlayedMs, vz),
        Cz = void 0 === (ez = Wz.baf2IslandItems) ? null : 0 === ez ? [`${YU}islandsItemsNone`] : 1 === ez ? [`${YU}islandsItemsOne`] : [`${YU}islandsItems`, {
          count: String(ez)
        }];
      var ez;
      const Zz = function(zz) {
          return zz ? 1 === zz ? [`${YU}islandsWaitingOne`] : [`${YU}islandsWaiting`, {
            count: String(zz)
          }] : null
        }(Wz.baf2IslandWaiting),
        Gz = Wz.baf2IslandUnreadable,
        Tz = Wz.baf2IslandCoop,
        cz = lU(Wz, Kz, Xz, uz, rz, Oz),
        jz = (0, Fz.useRef)(null);
      fU(null !== wz, jz);
      const Az = () => {
          var zz;
          Dz(null), null === (zz = jz.current) || void 0 === zz || zz.focus()
        },
        yz = (zz, tz) => {
          Az(), null !== zz && Hz(zz, tz)
        },
        Mz = (zz, tz) => xz(`${Bu}${zz}`, {
          time: mX(xz, tz)
        });
      return (0, eX.jsxs)("li", {
        ref: jz,
        tabIndex: -1,
        className: IW()("Baf2IslandCard", {
          Active: Jz,
          Pending: gz,
          Shared: void 0 !== Tz
        }),
        children: [(0, eX.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, eX.jsx)("strong", {
            className: "Baf2IslandName",
            children: Wz.baf2IslandName
          }), Jz && (0, eX.jsx)("span", {
            className: "Baf2IslandBadge",
            children: xz(`${Bu}islandsOnThis`)
          }), Tz && (0, eX.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: xz(`${Bu}islandsShared`)
          })]
        }), "member" === (null === Tz || void 0 === Tz ? void 0 : Tz.baf2CoopRole) && (0, eX.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: QU(xz, `${Bu}islandsSharedBy`, {
            owner: Tz.baf2CoopOwner
          })
        }), void 0 !== Gz && (0, eX.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: xz("newer" === Gz ? `${Bu}islandsUnreadable` : `${Bu}islandsDamaged`)
        }), "corrupt" === Gz && uz && (0, eX.jsx)("p", {
          className: "Baf2IslandStats",
          children: xz(`${Bu}islandsDamagedFull`)
        }), void 0 === Gz && (0, eX.jsxs)(eX.Fragment, {
          children: [(0, eX.jsx)(sK, {
            tier: Wz.baf2IslandTier,
            t: xz
          }), (0, eX.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, eX.jsx)("span", {
              children: 1 === Wz.baf2IslandQuestsDone ? xz(`${Bu}islandsQuestsDoneOne`) : xz(`${Bu}islandsQuestsDone`, {
                count: String(Wz.baf2IslandQuestsDone)
              })
            }), (0, eX.jsx)("span", {
              children: 1 === Wz.baf2IslandMachines ? xz(`${Bu}islandsMachinesOne`) : xz(`${Bu}islandsMachines`, {
                count: String(Wz.baf2IslandMachines)
              })
            }), Cz && (0, eX.jsx)("span", {
              children: xz(Cz[0], Cz[1])
            }), Zz && (0, eX.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: xz(Zz[0], Zz[1])
            }), Iz && (0, eX.jsx)("span", {
              children: xz(Iz[0], Iz[1])
            })]
          })]
        }), Tz && void 0 === Tz.baf2CoopState && "people" !== wz && (0, eX.jsx)(xu, {
          members: Tz.baf2CoopMembers,
          t: xz
        }), null === wz && (0, eX.jsx)(mu, {
          card: Wz,
          answered: bz,
          nowMs: Uz,
          t: xz
        }), cz.note && (0, eX.jsx)(FK, {
          note: cz.note,
          className: IW()({
            Unreachable: void 0 !== (null === Tz || void 0 === Tz ? void 0 : Tz.baf2CoopState)
          }),
          t: xz
        }), "rename" === wz && (0, eX.jsx)(ru, {
          card: Wz,
          canRename: "enabled" === cz.rename,
          done: yz,
          t: xz
        }), "delete" === wz && (0, eX.jsx)(Yu, {
          card: Wz,
          canDelete: "enabled" === cz.delete,
          done: zz => {
            yz(zz, Tz ? "delete" : void 0)
          },
          t: xz
        }), "people" === wz && (0, eX.jsx)(Ju, {
          card: Wz,
          view: cz,
          blocked: Oz,
          maxIslands: oz,
          answered: bz,
          nowMs: Uz,
          done: Az,
          openSocial: Yz,
          t: xz
        }), "leave" === wz && (0, eX.jsx)(Cu, {
          className: "Leave",
          text: QU(xz, `${Bu}islandsLeaveConfirm`, {
            island: Wz.baf2IslandName,
            owner: null !== (tz = null === (sz = Wz.baf2IslandCoop) || void 0 === sz ? void 0 : sz.baf2CoopOwner) && void 0 !== tz ? tz : ""
          }),
          ConfirmButton: JO.H,
          confirmLabel: xz(`${Bu}islandsLeaveYes`),
          canConfirm: "enabled" === cz.leave,
          send: () => Pu(mz, Wz),
          done: zz => {
            yz(zz, "leave"), null !== zz && Jz && Pz()
          },
          t: xz
        }), "unshare" === wz && (0, eX.jsx)(Cu, {
          className: "Unshare",
          text: QU(xz, `${Bu}islandsStopSharingConfirm`, {
            island: Wz.baf2IslandName
          }),
          ConfirmButton: JO.t,
          confirmLabel: xz(`${Bu}islandsStopSharing`),
          canConfirm: "enabled" === cz.unshare,
          send: () => mz.sendIslandEdit(`baf2coopunshare ${Wz.baf2IslandId}`),
          done: zz => {
            yz(zz), null !== zz && Pz()
          },
          t: xz
        }), null === wz && !gz && (0, eX.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Wz.baf2IslandName,
          children: [eu(cz.switch) && (0, eX.jsx)(JO.t, {
            disabled: "enabled" !== cz.switch,
            onClick: Bz,
            children: "tryAgain" === cz.switchLabel ? xz(`${Bu}islandsTryAgain`) : Nz.switch > 0 ? Mz("islandsSwitchIn", Nz.switch) : xz(`${Bu}islandsSwitch`)
          }), eu(cz.rename) && (0, eX.jsx)(JO.h, {
            disabled: "enabled" !== cz.rename,
            onClick: () => {
              Dz("rename")
            },
            children: xz(`${Bu}islandsRename`)
          }), eu(cz.people) && (0, eX.jsx)(JO.h, {
            disabled: "enabled" !== cz.people,
            onClick: () => {
              Dz("people")
            },
            children: xz("players" === cz.peopleLabel ? `${Bu}islandsPlayersButton` : `${Bu}islandsInviteButton`)
          }), eu(cz.unshare) && (0, eX.jsx)(JO.h, {
            disabled: "enabled" !== cz.unshare,
            onClick: () => {
              Dz("unshare")
            },
            children: xz(`${Bu}islandsStopSharing`)
          }), eu(cz.dismiss) && (0, eX.jsx)(JO.h, {
            disabled: "enabled" !== cz.dismiss,
            onClick: () => {
              Hz(Pu(mz, Wz), "dismiss"), Jz && Pz()
            },
            children: xz(`${Bu}islandsDismiss`)
          }), eu(cz.leave) && (0, eX.jsx)(JO.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== cz.leave,
            onClick: () => {
              Dz("leave")
            },
            children: Jz && Nz.switch > 0 ? Mz("islandsLeaveIn", Nz.switch) : xz(`${Bu}islandsLeave`)
          }), eu(cz.delete) && (0, eX.jsx)(JO.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== cz.delete,
            onClick: () => {
              Dz("delete")
            },
            children: Nz.change > 0 && cz.deleteWaits ? Mz("islandsDeleteIn", Nz.change) : xz(`${Bu}islandsDelete`)
          })]
        })]
      })
    }
    const Gu = "buildAFactory2Game:";

    function Tu(zz) {
      let {
        invite: tz,
        actions: sz,
        full: Wz,
        maxIslands: Xz,
        waitSeconds: Oz,
        focus: oz,
        focused: vz,
        join: Uz,
        decline: Kz,
        t: uz
      } = zz;
      const [Nz, bz] = (0, Fz.useState)(!1), wz = (0, Fz.useRef)(null);
      fU(Nz, wz), (0, Fz.useEffect)((() => {
        var zz;
        oz && (bz(!0), null === (zz = wz.current) || void 0 === zz || zz.focus(), vz())
      }), [oz, vz]);
      const Dz = function(zz, tz, sz, Fz, Wz) {
          return sz ? {
            join: !1,
            note: {
              key: `${YU}islandsJoinTooMany`,
              params: {
                max: String(Fz)
              }
            }
          } : zz.baf2InvitePlayers >= Wz ? {
            join: !1,
            note: {
              key: `${YU}islandsJoinFull`
            }
          } : {
            join: tz.switch,
            note: null
          }
        }(tz, sz, Wz, Xz, 10),
        gz = tz.baf2InviteIsland,
        Hz = tz.baf2InvitePlayers,
        Bz = () => {
          var zz;
          bz(!1), null === (zz = wz.current) || void 0 === zz || zz.focus()
        },
        Pz = Oz > 0 && null === Dz.note ? uz(`${Gu}islandsJoinIn`, {
          time: mX(uz, Oz)
        }) : uz(`${Gu}islandsJoin`);
      return (0, eX.jsxs)("li", {
        ref: wz,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Nz ? RU(Bz) : {},
        children: [(0, eX.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, eX.jsx)("strong", {
            className: "Baf2IslandName",
            children: gz
          })
        }), (0, eX.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: QU(uz, `${Gu}islandsInvitedBy`, {
            owner: tz.baf2InviteOwner
          })
        }), (0, eX.jsx)(sK, {
          tier: tz.baf2InviteTier,
          t: uz
        }), (0, eX.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, eX.jsx)("span", {
            children: 1 === Hz ? uz(`${Gu}islandsPlayersCountOne`) : uz(`${Gu}islandsPlayersCount`, {
              count: String(Hz)
            })
          })
        }), Dz.note && (0, eX.jsx)(FK, {
          note: Dz.note,
          t: uz
        }), Nz && (0, eX.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: QU(uz, `${Gu}islandsJoinConfirm`, {
            island: gz
          })
        }), !Nz && (0, eX.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": gz,
          children: [(0, eX.jsx)(JO.t, {
            disabled: !Dz.join,
            onClick: () => {
              var zz;
              bz(!0), null === (zz = wz.current) || void 0 === zz || zz.focus()
            },
            children: Pz
          }), (0, eX.jsx)(JO.h, {
            onClick: Kz,
            children: uz(`${Gu}islandsDecline`)
          })]
        }), Nz && (0, eX.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, eX.jsx)(JO.t, {
            disabled: !Dz.join,
            onClick: Uz,
            children: uz(`${Gu}islandsJoinYes`)
          }), (0, eX.jsx)(JO.h, {
            onClick: Bz,
            children: uz(`${Gu}islandsCancel`)
          })]
        })]
      })
    }

    function cu(zz) {
      let {
        invites: tz,
        actions: sz,
        full: Fz,
        maxIslands: Wz,
        waitSeconds: Xz,
        focus: Oz,
        focused: oz,
        leave: vz,
        declined: Uz,
        t: Kz
      } = zz;
      const uz = lO();
      return (0, eX.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, eX.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Kz(`${Gu}islandsInvitesTitle`)
        }), (0, eX.jsx)("ul", {
          className: "Baf2IslandCards",
          children: tz.map((zz => {
            const tz = zz.baf2InviteId;
            return (0, eX.jsx)(Tu, {
              invite: zz,
              actions: sz,
              full: Fz,
              maxIslands: Wz,
              waitSeconds: Xz,
              focus: Oz === tz,
              focused: oz,
              join: () => {
                uz.send(`baf2coopaccept ${tz}`), vz()
              },
              decline: () => {
                uz.send(`baf2coopdecline ${tz}`), Uz(tz)
              },
              t: Kz
            }, tz)
          }))
        })]
      })
    }
    const ju = "buildAFactory2Game:";

    function Au(zz) {
      let {
        cards: tz,
        activeName: sz,
        canStart: Wz,
        waitSeconds: Xz,
        leave: Oz,
        t: oz
      } = zz;
      const vz = lO(),
        [Uz, Kz] = (0, Fz.useState)(!1),
        [uz, Nz] = (0, Fz.useState)(""),
        bz = (0, Fz.useRef)(null);
      fU(Uz, bz), (0, Fz.useEffect)((() => {
        var zz;
        Uz && (null === (zz = bz.current) || void 0 === zz || zz.focus())
      }), [Uz]);
      const wz = eU(tz),
        Dz = IU(uz),
        gz = CU(Dz),
        Hz = () => {
          Wz && !gz && (vz.send("" === Dz || Dz === wz ? Vz : `${Vz} ${Dz}`), Oz())
        },
        Bz = () => {
          var zz;
          Kz(!1), null === (zz = bz.current) || void 0 === zz || zz.focus()
        };
      return (0, eX.jsxs)("li", {
        ref: bz,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Uz ? RU(Bz) : {},
        children: [(0, eX.jsx)("strong", {
          className: "Baf2IslandName",
          children: oz(`${ju}islandsNewTitle`)
        }), !Uz && (0, eX.jsx)("p", {
          className: "Baf2IslandStats",
          children: oz(`${ju}islandsNewNote`)
        }), Uz && (0, eX.jsxs)(eX.Fragment, {
          children: [(0, eX.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: QU(oz, `${ju}islandsNewConfirm`, {
              name: sz
            })
          }), (0, eX.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [oz(`${ju}islandsNewNameLabel`), (0, eX.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: uz,
              placeholder: wz,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: pU,
              onChange: zz => {
                Nz(zz.target.value)
              },
              ...VU(Hz, Bz)
            })]
          }), gz && (0, eX.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: oz(`${ju}islandsNameReserved`)
          })]
        }), (0, eX.jsxs)("div", {
          className: IW()("Baf2IslandButtons", {
            Stacked: Uz
          }),
          children: [(0, eX.jsx)(JO.t, {
            disabled: !Wz || Uz && gz,
            onClick: () => {
              if (!Uz) return Nz(wz), void Kz(!0);
              Hz()
            },
            children: Xz > 0 ? oz(`${ju}islandsNewIn`, {
              time: mX(oz, Xz)
            }) : oz(Uz ? `${ju}islandsNewConfirmButton` : `${ju}islandsNew`)
          }), Uz && (0, eX.jsx)(JO.h, {
            onClick: Bz,
            children: oz(`${ju}islandsCancel`)
          })]
        })]
      })
    }

    function yu(zz) {
      var tz, sz;
      let {
        message: Wz,
        arrivedAtMs: Xz,
        close: Oz,
        leave: oz,
        openSocial: vz
      } = zz;
      const Uz = lO(),
        {
          t: Kz
        } = (0, GW.B)(),
        uz = tK(1e3),
        [Nz, bz] = (0, Fz.useState)(null),
        [wz, Dz] = (0, Fz.useState)(new Map),
        [gz, Hz] = (0, Fz.useState)(new Set),
        Bz = Wz.baf2IslandCards,
        Pz = function(zz, tz, sz, Fz) {
          return (null !== zz && void 0 !== zz ? zz : []).filter((zz => tz + zz.baf2InviteLeftMs > sz && !Fz.has(zz.baf2InviteId)))
        }(Wz.baf2IslandsInvites, Xz, uz, gz),
        rz = Pz.map((zz => zz.baf2InviteId)).join(" "),
        Yz = (0, Fz.useRef)(null),
        xz = EU(Yz);
      (0, Fz.useEffect)((() => {
        var zz, tz;
        null !== (zz = Yz.current) && void 0 !== zz && zz.contains(document.activeElement) || (null === (tz = Yz.current) || void 0 === tz || tz.focus())
      }), [Wz, rz]), (0, Fz.useEffect)((() => {
        Dz((zz => function(zz, tz, sz, Fz) {
          const Wz = new Map;
          for (const Xz of tz) {
            const tz = zz.get(Xz.baf2IslandId);
            tz && (void 0 !== tz.untilGone || Fz < tz.answer) && yU(tz, Xz, sz) && Wz.set(Xz.baf2IslandId, tz)
          }
          return Wz.size === zz.size ? zz : Wz
        }(zz, Wz.baf2IslandCards, Date.now(), Wz.baf2IslandsAnswered)))
      }), [Wz]);
      const mz = JU(Xz, Wz.baf2IslandsWaitMs, uz),
        Jz = Wz.baf2IslandsBlocked,
        Iz = cU(Jz, mz),
        Cz = function(zz, tz) {
          const sz = cU(zz, 0);
          return {
            switch: sz.switch ? tz : 0,
            change: sz.change ? tz : 0
          }
        }(Jz, mz),
        ez = Bz.length >= Wz.baf2IslandsMax,
        Zz = Bz.length > 0,
        Gz = function(zz, tz, sz) {
          return zz + Math.max(0, sz - tz)
        }(Wz.baf2IslandsNowMs, Xz, uz),
        Tz = null !== (tz = null === (sz = Bz.find((zz => zz.baf2IslandActive))) || void 0 === sz ? void 0 : sz.baf2IslandName) && void 0 !== tz ? tz : "",
        cz = function(zz) {
          const tz = zz.filter(LU).length;
          return tz <= 1 && tz < zz.length
        }(Bz),
        jz = !0 === Wz.baf2IslandsCoop,
        Az = function(zz, tz) {
          const sz = zz.find((zz => zz.baf2IslandActive)),
            Fz = null === sz || void 0 === sz ? void 0 : sz.baf2IslandCoop;
          return sz && "member" === (null === Fz || void 0 === Fz ? void 0 : Fz.baf2CoopRole) ? {
            key: `${YU}islandsKeepOwnMember`,
            names: {
              owner: Fz.baf2CoopOwner,
              island: sz.baf2IslandName
            }
          } : {
            key: tz ? `${YU}islandsKeepOwn` : `${YU}islandsKeepOwnSolo`
          }
        }(Bz, jz),
        [yz, Mz] = (0, Fz.useState)(null);
      (0, Fz.useEffect)((() => {
        void 0 !== Wz.baf2IslandsFocusInvite && Mz(Wz.baf2IslandsFocusInvite)
      }), [Wz]);
      const dz = (0, Fz.useCallback)((() => {
          Mz(null)
        }), []),
        hz = Nz ? Bz.find((zz => zz.baf2IslandId === Nz.id)) : void 0,
        Qz = Nz && hz && "hidden" !== lU(hz, Iz, cz, ez, jz, Jz)[Nz.mode] ? Nz : null;
      return (0, eX.jsx)(mO.b, {
        close: Oz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, eX.jsxs)("section", {
          ref: Yz,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: xz ? {
            marginTop: `${xz.marginTop}px`,
            maxHeight: `${xz.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsxs)("div", {
              children: [(0, eX.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Kz(`${ju}islandsTitle`)
              }), Zz && (0, eX.jsx)("p", {
                children: Kz(`${ju}islandsSubtitle`, {
                  count: String(Bz.length),
                  max: String(Wz.baf2IslandsMax)
                })
              })]
            }), (0, eX.jsx)(JO.n, {
              ariaLabel: Kz(`${ju}islandsClose`),
              onClick: Oz
            })]
          }), (0, eX.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== Jz && (0, eX.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: QU(Kz, ZU(Jz, GU(Bz)), {
                island: Tz
              })
            }), Zz && Pz.length > 0 && (0, eX.jsx)(cu, {
              invites: Pz,
              actions: Iz,
              full: ez,
              maxIslands: Wz.baf2IslandsMax,
              waitSeconds: Cz.switch,
              focus: yz,
              focused: dz,
              leave: oz,
              declined: zz => {
                Hz((tz => new Set(tz).add(zz)))
              },
              t: Kz
            }), Zz && (0, eX.jsxs)(eX.Fragment, {
              children: [ez && (0, eX.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Kz(`${ju}islandsFull`, {
                  max: String(Wz.baf2IslandsMax)
                })
              }), (0, eX.jsx)("p", {
                className: "Baf2IslandsNote",
                children: QU(Kz, Az.key, Az.names)
              }), (0, eX.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Bz.map((zz => {
                  const tz = zz.baf2IslandId;
                  return (0, eX.jsx)(Zu, {
                    card: zz,
                    keepOwn: cz,
                    coopOn: jz,
                    openSocial: vz,
                    blocked: Jz,
                    maxIslands: Wz.baf2IslandsMax,
                    serverNowMs: Gz,
                    nowMs: uz,
                    actions: Iz,
                    full: ez,
                    waits: Cz,
                    answered: Wz.baf2IslandsAnswered,
                    mode: (null === Qz || void 0 === Qz ? void 0 : Qz.id) === tz ? Qz.mode : null,
                    setMode: zz => {
                      bz(null === zz ? null : {
                        id: tz,
                        mode: zz
                      })
                    },
                    pending: yU(wz.get(tz), zz, uz),
                    onSent: (sz, Fz) => {
                      Dz((Wz => {
                        const Xz = {
                          atMs: Date.now(),
                          from: zz.baf2IslandName,
                          answer: sz
                        };
                        return new Map(Wz).set(tz, Fz ? {
                          ...Xz,
                          untilGone: Fz
                        } : Xz)
                      }))
                    },
                    leave: oz,
                    switchTo: () => {
                      Uz.send(`baf2islandswitch ${tz}`), oz()
                    },
                    t: Kz
                  }, tz)
                })), !ez && (0, eX.jsx)(Au, {
                  cards: Bz,
                  activeName: Tz,
                  canStart: Iz.change,
                  waitSeconds: Cz.change,
                  leave: oz,
                  t: Kz
                })]
              })]
            })]
          })]
        })
      })
    }
    var Mu = sz(4636);
    const du = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        YW: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      hu = Object.keys(du),
      Qu = new Set([...Object.keys(Rt), ...[...At.Press.recipes, ...At["Wire Mill"].recipes].map((zz => zz.output))]),
      ku = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      iu = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Lu = / Bar$|Alloy$/,
      lu = /Porkchop|Beef|Mutton|Venison|Steak/,
      nu = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const au = (0, Fz.memo)((function(zz) {
      let {
        item: tz,
        name: sz,
        amount: Fz,
        selected: Wz,
        small: Xz,
        onPick: Oz
      } = zz;
      return (0, eX.jsxs)("button", {
        type: "button",
        className: IW()("Baf2TermTile", {
          On: Wz,
          Small: Xz
        }),
        "aria-label": `${sz}: ${Fz}`,
        "aria-pressed": Wz,
        onClick: () => {
          Oz(tz)
        },
        children: [(0, eX.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, eX.jsx)(cW.c, {
            itemName: tz,
            amount: 0
          })
        }), (0, eX.jsx)("span", {
          className: "Baf2TermCount",
          children: YX(Fz, 1e4)
        }), !Xz && (0, eX.jsx)("span", {
          className: "Baf2TermName",
          children: sz
        })]
      })
    }));

    function qu(zz) {
      let {
        store: tz,
        close: sz,
        send: Wz
      } = zz;
      const {
        t: Xz
      } = (0, GW.B)(), {
        isTouchScreen: Oz
      } = (0, xW.h)(["isTouchScreen"]);
      ! function(zz) {
        const [tz, sz] = (0, Fz.useState)(zz.version);
        (0, Fz.useEffect)((() => (sz(zz.version), zz.subscribe((() => {
          sz(zz.version)
        })))), [zz])
      }(tz);
      const [oz, vz] = (0, Fz.useState)("all"), [Uz, Kz] = (0, Fz.useState)(!1), [uz, Nz] = (0, Fz.useState)(""), [bz, wz] = (0, Fz.useState)(""), [Dz, gz] = (0, Fz.useState)(null), [Hz, Bz] = (0, Fz.useState)(!1), [Pz, rz, Yz] = function() {
        const zz = (0, Fz.useRef)(null),
          [tz, sz] = (0, Fz.useState)(!1),
          Wz = () => {
            const tz = zz.current;
            sz(null !== tz && tz.scrollLeft + tz.clientWidth < tz.scrollWidth - 1)
          };
        return (0, Fz.useEffect)(Wz), (0, Fz.useEffect)((() => {
          const tz = zz.current;
          if (!tz) return;
          const sz = new ResizeObserver(Wz);
          return sz.observe(tz), () => {
            sz.disconnect()
          }
        }), []), [zz, tz, Wz]
      }(), xz = (0, Fz.useMemo)((() => new Map), [Xz]), mz = zz => {
        let tz = xz.get(zz);
        return void 0 === tz && (tz = function(zz, tz) {
          const sz = /^(.+) \((.+)\)$/.exec(zz);
          return sz ? tz(sz[2], sz[1]) : zz
        }(OX(Xz, zz), ((zz, tz) => Xz("buildAFactory2Game:terminalTileKind", {
          kind: zz,
          base: tz
        }))), xz.set(zz, tz)), tz
      }, Jz = tz.isReadOnly(), Iz = Hz && !Jz, Cz = tz.recent(), ez = tz.items(), Zz = bz.trim().toLowerCase(), Gz = Iz ? tz.heldItems(Dz) : ("recent" === oz ? Cz : ez).filter((zz => {
        const tz = mz(zz);
        return ("all" === oz || "recent" === oz || function(zz) {
          return wX(zz) ? "farm" : ku.test(zz) ? "nuclear" : Lu.test(zz) ? "bars" : lu.test(zz) ? "farm" : iu.test(zz) ? "YW" : Qu.has(zz) ? "parts" : nu.test(zz) ? "farm" : "other"
        }(zz) === oz) && ("" === Zz || tz.toLowerCase().includes(Zz)) && ("" === uz || tz.toUpperCase().startsWith(uz))
      })), Tz = new Set(ez.map((zz => mz(zz).charAt(0).toUpperCase()))), cz = zz => Iz ? tz.heldAmount(zz) : tz.amount(zz), jz = !Iz && "recent" !== oz && Cz.length > 0, Az = function(zz, tz) {
        return null !== zz && tz.includes(zz) ? zz : null
      }(Dz, jz ? [...Gz, ...Cz] : Gz), yz = null === Az ? 0 : tz.amount(Az), Mz = null === Az ? 0 : cz(Az), dz = (0, Fz.useCallback)((zz => {
        gz((tz => tz === zz ? null : zz))
      }), []), hz = zz => Mz > 0 || Iz && null === Az && "fill" === zz && Gz.length > 0, Qz = Iz ? [
        ["one", Xz("buildAFactory2Game:terminalStoreOne")],
        ["stack", Xz("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Xz(null === Az ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Xz("buildAFactory2Game:terminalTakeOne")],
        ["stack", Xz("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Xz("buildAFactory2Game:terminalFill")]
      ], kz = Iz ? Xz("buildAFactory2Game:terminalStoreEmpty") : "" !== uz ? Xz("buildAFactory2Game:terminalEmptyLetter", {
        letter: uz
      }) : "" !== Zz ? Xz("buildAFactory2Game:terminalEmptySearch", {
        query: bz
      }) : Xz("buildAFactory2Game:terminalEmpty");
      return (0, eX.jsx)(mO.b, {
        close: sz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, eX.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsxs)("div", {
              children: [(0, eX.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Xz(tz.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, eX.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, eX.jsx)("span", {
                  className: IW()({
                    Off: Iz
                  }),
                  children: Xz("buildAFactory2Game:terminalSubtitle", {
                    count: String(tz.siloCount())
                  })
                }), !Jz && (0, eX.jsx)("span", {
                  className: IW()({
                    Off: !Iz
                  }),
                  children: Xz("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !Jz && (0, eX.jsx)(Mu.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Xz("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Xz("buildAFactory2Game:terminalModeStore")
              }],
              value: Iz ? "store" : "take",
              onChange: zz => {
                Bz("store" === zz), gz(null)
              },
              ariaLabel: Xz("buildAFactory2Game:terminalModes")
            }), (0, eX.jsx)(JO.n, {
              onClick: sz
            })]
          }), (0, eX.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, eX.jsxs)("div", {
              className: IW()("Baf2TermTools", {
                Hidden: Iz
              }),
              children: [(0, eX.jsx)("div", {
                ref: Pz,
                className: IW()("Baf2TermChips", {
                  MoreRight: rz
                }),
                onScroll: Yz,
                children: Uz ? (0, eX.jsxs)(eX.Fragment, {
                  children: [(0, eX.jsx)("button", {
                    type: "button",
                    "aria-label": Xz("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Kz(!1), Nz("")
                    },
                    children: "\u2190"
                  }), [...Tz].sort().map((zz => (0, eX.jsx)("button", {
                    type: "button",
                    className: IW()({
                      On: uz === zz
                    }),
                    onClick: () => {
                      Nz(uz === zz ? "" : zz)
                    },
                    children: zz
                  }, zz)))]
                }) : (0, eX.jsxs)(eX.Fragment, {
                  children: [(0, eX.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Kz(!0)
                    },
                    children: Xz("buildAFactory2Game:terminalLetters")
                  }), hu.map((zz => (0, eX.jsx)("button", {
                    type: "button",
                    className: IW()({
                      On: oz === zz
                    }),
                    onClick: () => {
                      vz(zz)
                    },
                    children: Xz(du[zz])
                  }, zz)))]
                })
              }), !Oz && (0, eX.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: bz,
                placeholder: Xz("buildAFactory2Game:terminalSearch"),
                "aria-label": Xz("buildAFactory2Game:terminalSearch"),
                onChange: zz => {
                  wz(zz.target.value)
                },
                onKeyDown: zz => {
                  zz.stopPropagation()
                }
              }), (0, eX.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Xz("buildAFactory2Game:terminalResort"),
                title: Xz("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  tz.resort()
                },
                children: "\u21c5"
              })]
            }), jz && (0, eX.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, eX.jsx)("span", {
                children: Xz(du.recent)
              }), Cz.map((zz => (0, eX.jsx)(au, {
                item: zz,
                name: mz(zz),
                amount: tz.amount(zz),
                selected: Az === zz,
                small: !0,
                onPick: dz
              }, zz)))]
            }), (0, eX.jsx)("div", {
              className: "Baf2TermTiles",
              children: Gz.length > 0 ? Gz.map((zz => (0, eX.jsx)(au, {
                item: zz,
                name: mz(zz),
                amount: cz(zz),
                selected: Az === zz,
                onPick: dz
              }, zz))) : (0, eX.jsx)("p", {
                className: "Baf2TermEmpty",
                children: kz
              })
            }), (0, eX.jsxs)("div", {
              className: IW()("Baf2TermActions", {
                Hidden: Iz && 0 === Gz.length
              }),
              children: [(0, eX.jsx)("span", {
                className: "Baf2TermPicked",
                children: Jz ? (0, eX.jsxs)(eX.Fragment, {
                  children: [null !== Az && yz > 0 ? mz(Az) : Xz("buildAFactory2Game:terminalVisiting"), (0, eX.jsx)("small", {
                    children: Xz("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Az ? (0, eX.jsxs)(eX.Fragment, {
                  children: [mz(Az), (0, eX.jsx)("small", {
                    children: Xz("buildAFactory2Game:terminalStored", {
                      amount: yz.toLocaleString()
                    })
                  })]
                }) : Xz(Iz ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !Jz && Qz.map((zz => {
                let [sz, Fz] = zz;
                const Xz = "fill" === sz ? JO.p : JO.h;
                return (0, eX.jsx)(Xz, {
                  className: "Baf2TermTake",
                  disabled: !hz(sz),
                  onClick: () => {
                    (zz => {
                      hz(zz) && Wz(null === Az ? tz.putAll() : Iz ? tz.put(zz, Az) : tz.take(zz, Az))
                    })(sz)
                  },
                  children: Fz
                }, sz)
              }))]
            })]
          })]
        })
      })
    }

    function Su(zz) {
      let {
        kind: tz,
        icon: sz,
        label: Fz,
        number: Wz,
        preview: Xz,
        note: Oz,
        tone: oz = null,
        share: vz,
        onExplain: Uz
      } = zz;
      return (0, eX.jsxs)("button", {
        type: "button",
        className: IW()("NxLane", tz, {
          Warn: "warn" === oz,
          Danger: "danger" === oz
        }),
        onClick: Uz,
        children: [(0, eX.jsxs)("span", {
          className: "NxLaneHead",
          children: [sz, (0, eX.jsx)("span", {
            className: "NxLaneLabel",
            children: Fz
          })]
        }), (0, eX.jsxs)("span", {
          className: "NxLaneNum",
          children: [Wz, Xz && (0, eX.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Xz]
          })]
        }), (0, eX.jsx)("span", {
          className: "NxLaneNote",
          children: Oz
        }), void 0 !== vz && (0, eX.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, vz)) + "%"
          }
        })]
      })
    }

    function Vu(zz) {
      let {
        kind: tz,
        step: sz,
        short: Fz,
        planned: Wz
      } = zz;
      return (0, eX.jsx)("i", {
        className: IW()("NxPipe", tz, `Step${sz}`, {
          Short: Fz,
          Planned: Wz
        }),
        "aria-hidden": "true"
      })
    }

    function Ru(zz) {
      let {
        max: tz,
        bands: sz,
        ticks: Fz,
        now: Wz,
        settle: Xz,
        settleTone: Oz,
        onExplain: oz
      } = zz;
      const vz = zz => Math.max(0, Math.min(tz, zz)) / tz * 100 + "%";
      let Uz = 0;
      return (0, eX.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: oz,
        children: [(0, eX.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [sz.map((zz => {
            const tz = {
              bottom: vz(Uz),
              height: `calc(${vz(zz.upTo)} - ${vz(Uz)})`
            };
            return Uz = zz.upTo, (0, eX.jsx)("i", {
              className: IW()("NxGaugeBand", zz.kind),
              style: tz
            }, zz.kind)
          })), null !== Wz && (0, eX.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: vz(Wz)
            }
          }), void 0 !== Xz && null !== Xz && (0, eX.jsx)("i", {
            className: IW()("NxGaugeSettle", {
              Bad: "bad" === Oz
            }),
            style: {
              bottom: vz(Xz)
            }
          })]
        }), (0, eX.jsx)("span", {
          className: "NxGaugeTicks",
          children: Fz.map((zz => (0, eX.jsx)("small", {
            style: {
              bottom: vz(zz)
            },
            children: zz
          }, zz)))
        })]
      })
    }

    function pu(zz) {
      const [tz, sz] = (0, Fz.useState)(null), [Wz, Xz] = (0, Fz.useState)((() => {
        try {
          return null === window.localStorage.getItem(zz)
        } catch {
          return !1
        }
      })), Oz = (0, Fz.useRef)(null);
      (0, Fz.useEffect)((() => () => {
        null !== Oz.current && clearTimeout(Oz.current)
      }), []);
      const oz = (0, Fz.useCallback)((tz => {
          sz(tz), Xz(!1);
          try {
            window.localStorage.setItem(zz, "1")
          } catch {}
          null !== Oz.current && clearTimeout(Oz.current), Oz.current = setTimeout((() => {
            Oz.current = null, sz(null)
          }), 5e3)
        }), [zz]),
        vz = (0, Fz.useCallback)(((tz, sz) => {
          const Fz = `${zz}:${tz}`;
          try {
            if (null !== window.localStorage.getItem(Fz)) return;
            window.localStorage.setItem(Fz, "1")
          } catch {
            return
          }
          oz(sz)
        }), [oz, zz]);
      return {
        explained: tz,
        hinting: Wz,
        explain: oz,
        explainOnce: vz
      }
    }

    function fu(zz) {
      let {
        text: tz,
        tone: sz,
        explained: Fz
      } = zz;
      return (0, eX.jsxs)("p", {
        className: IW()("NxStatus", null === Fz ? sz : "Explain"),
        "aria-live": "polite",
        children: [null !== Fz && (0, eX.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Fz && void 0 !== Fz ? Fz : tz]
      })
    }
    const Eu = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function zN(zz, tz) {
      const sz = Number(zz[tz]);
      return 1 === sz || 2 === sz || 3 === sz ? sz : 0
    }

    function tN(zz) {
      return !!Cv("reactor", zz.baf2RxNeed) || void 0 !== zz.baf2RxLayout && zz.baf2RxNeed.some((zz => {
        let [tz, sz] = zz;
        return sz > 0 && Eu.includes(tz)
      }))
    }
    const sN = "buildAFactory2Game:";

    function FN(zz) {
      let {
        status: tz,
        store: sz,
        busy: Fz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)();
      return function(zz) {
        return 0 !== (zz.baf2RxFlags & Dt) && (!zz.baf2RxFormed || void 0 !== zz.baf2RxLayout)
      }(tz) ? (0, eX.jsx)(JO.p, {
        disabled: !tN(tz) || Fz,
        onClick: () => {
          sz.tap("fill", (() => {
            sz.send("fill")
          }))
        },
        children: Wz(void 0 !== tz.baf2RxLayout ? `${sN}rxFillLayout` : `${sN}rxFill`)
      }) : null
    }

    function WN(zz) {
      let {
        status: tz,
        store: sz,
        readOnly: Wz,
        bare: Xz = !1
      } = zz;
      const {
        t: Oz
      } = (0, GW.B)(), oz = tz.baf2RxLayout, [vz, Uz, Kz] = tz.baf2RxDims, uz = (0, Fz.useMemo)((() => {
        if (void 0 === oz) return 0;
        const zz = Uint8Array.from(oz, ((zz, tz) => zN(oz, tz)));
        return Wv([vz - 2, Uz - 2, Kz - 2], zz).max
      }), [oz, vz, Uz, Kz]);
      return void 0 === oz ? null : (0, eX.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Xz && (0, eX.jsx)("span", {
          className: "Baf2RxHint",
          children: Oz(`${sN}rxLayoutLine`, {
            amount: Av(uz)
          })
        }), !Wz && (0, eX.jsx)(JO.h, {
          onClick: () => {
            sz.send("layout", 0)
          },
          children: Oz(`${sN}rxLayoutHide`)
        })]
      })
    }
    const XN = "buildAFactory2Game:",
      ON = {
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

    function oN(zz) {
      let {
        id: tz,
        title: sz,
        body: Fz,
        bodyParams: Wz,
        yes: Xz,
        cancel: Oz,
        confirm: oz
      } = zz;
      const {
        t: vz
      } = (0, GW.B)();
      return (0, eX.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": tz,
        children: [(0, eX.jsx)("h3", {
          id: tz,
          children: vz(sz)
        }), (0, eX.jsx)("p", {
          children: vz(Fz, Wz)
        }), (0, eX.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, eX.jsx)(JO.l, {
            onClick: Oz,
            children: vz(`${XN}rxCancel`)
          }), (0, eX.jsx)(JO.H, {
            onClick: oz,
            children: vz(Xz)
          })]
        })]
      })
    }

    function vN(zz) {
      const [tz, sz] = (0, Fz.useState)((() => zz.get()));
      return (0, Fz.useEffect)((() => (sz(zz.get()), zz.subscribe((() => {
        sz(zz.get())
      })))), [zz]), tz
    }

    function UN(zz) {
      let {
        kind: tz,
        cap: sz,
        busy: Wz = !1,
        whyNot: Xz = null,
        apart: Oz
      } = zz;
      const {
        t: oz
      } = (0, GW.B)(), [vz, Uz] = (0, Fz.useState)(!1), Kz = null !== Xz, uz = (0, Fz.useRef)(null);
      if ((0, Fz.useEffect)((() => {
          Kz && Uz(!1)
        }), [Kz]), (0, Fz.useLayoutEffect)((() => {
          var zz;
          const tz = null === (zz = uz.current) || void 0 === zz ? void 0 : zz.firstElementChild;
          Kz ? null === tz || void 0 === tz || tz.setAttribute("aria-disabled", "true") : Wz || null === tz || void 0 === tz || tz.removeAttribute("aria-disabled")
        })), !vz || Kz) return (0, eX.jsx)("span", {
        ref: uz,
        className: "Baf2RxApartWrap",
        children: (0, eX.jsx)(JO.l, {
          disabled: Wz,
          className: IW()({
            Baf2RxNotYet: Kz
          }),
          onClick: () => {
            Xz ? Xz() : Uz(!0)
          },
          children: oz(`${XN}rxApart`)
        })
      });
      const Nz = "battery" === tz,
        bz = void 0 === sz ? `${XN}batApartConfirmBodyPlan` : `${XN}batApartConfirmBody`;
      return (0, eX.jsx)(oN, {
        id: `baf2ApartTitle_${tz}`,
        title: Nz ? `${XN}batApartConfirmTitle` : `${XN}rxApartConfirmTitle`,
        body: Nz ? bz : `${XN}rxApartConfirmBody`,
        bodyParams: void 0 === sz ? void 0 : {
          cap: sz
        },
        yes: `${XN}rxApart`,
        cancel: () => {
          Uz(!1)
        },
        confirm: () => {
          Uz(!1), Oz()
        }
      })
    }

    function KN(zz) {
      let {
        mood: tz,
        big: sz
      } = zz;
      const Fz = ON[tz],
        Wz = [];
      return Fz.rows.forEach(((zz, tz) => {
        for (let sz = 0; sz < zz.length; sz++) "." !== zz[sz] && Wz.push((0, eX.jsx)("rect", {
          x: sz + 1,
          y: tz + 1,
          width: 1,
          height: 1,
          fill: "w" === zz[sz] ? "#8fd3ff" : Fz.colour
        }, `${sz},${tz}`))
      })), (0, eX.jsxs)("svg", {
        className: IW()("Baf2RxFace", {
          Big: sz,
          Alarm: "alarm" === tz
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, eX.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, eX.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Wz]
      })
    }

    function uN(zz) {
      return rX(zz, "+").replace("+", "")
    }

    function NN(zz) {
      let {
        kind: tz,
        dims: sz,
        cap: Fz,
        disabled: Wz,
        compact: Xz,
        resize: Oz
      } = zz;
      const {
        t: oz
      } = (0, GW.B)(), {
        min: vz,
        max: Uz
      } = Ls(tz), Kz = Math.min(Fz, Uz), uz = [`${XN}rxWide`, `${XN}rxTall`, `${XN}rxDeep`], Nz = {
        w: String(sz[0]),
        h: String(sz[1]),
        d: String(sz[2]),
        blocks: String(jv(tz, sz))
      };
      return (0, eX.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, eX.jsx)("div", {
          className: "Baf2RxSteppers",
          children: sz.map(((zz, tz) => {
            const Xz = Fz => {
                const Wz = [sz[0], sz[1], sz[2]];
                Wz[tz] = zz + Fz, Oz(Wz)
              },
              Nz = zz >= Kz;
            return (0, eX.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, eX.jsx)("button", {
                type: "button",
                "aria-label": oz(`${XN}rxSmaller`),
                disabled: Wz || zz <= vz,
                onClick: () => {
                  Xz(-1)
                },
                children: "\u2212"
              }), (0, eX.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [zz, (0, eX.jsx)("small", {
                  children: oz(uz[tz])
                })]
              }), (0, eX.jsx)("button", {
                type: "button",
                "aria-label": oz(`${XN}rxBigger`),
                disabled: Wz || Nz,
                onClick: () => {
                  Xz(1)
                },
                children: Nz && Fz < Uz ? "\ud83d\udd12" : "+"
              })]
            }, uz[tz])
          }))
        }), !Xz && (0, eX.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === tz ? oz(`${XN}rxSizeLine`, {
            ...Nz,
            water: String(cv(sz))
          }) : oz(`${XN}batSizeLine`, Nz)
        })]
      })
    }

    function bN(zz) {
      let {
        on: tz,
        label: sz,
        disabled: Fz,
        locked: Wz,
        pending: Xz,
        toggle: Oz
      } = zz;
      return (0, eX.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": tz,
        disabled: Fz,
        "aria-disabled": Wz || void 0,
        className: IW()("Baf2RxSwitch", {
          On: tz,
          Locked: Wz,
          Pending: Xz
        }),
        onClick: Oz,
        children: [(0, eX.jsx)("span", {
          className: "Baf2RxKnob"
        }), sz]
      })
    }
    const wN = "buildAFactory2Game:",
      DN = .95;

    function gN(zz, tz) {
      return 0 !== (zz.baf2RxFlags & tz)
    }

    function HN(zz) {
      return "cryo" === zz ? fz.m : fz.n
    }

    function BN(zz) {
      var tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz;
      return zz.baf2RxCryo ? {
        cb: "cryo",
        usePerS: null !== (Wz = zz.baf2RxCryoUse) && void 0 !== Wz ? Wz : 0,
        needPerS: null !== (Xz = zz.baf2RxCryoNeed) && void 0 !== Xz ? Xz : 0,
        inPerS: null !== (Oz = zz.baf2RxCryoIn) && void 0 !== Oz ? Oz : 0,
        stored: null !== (oz = zz.baf2RxCryoStored) && void 0 !== oz ? oz : 0,
        makersShort: null !== (vz = zz.baf2RxMixersShort) && void 0 !== vz ? vz : 0,
        waterBeside: null !== (Uz = zz.baf2RxWaterUse) && void 0 !== Uz ? Uz : 0,
        pct: zz.baf2RxWater
      } : {
        cb: "water",
        usePerS: null !== (tz = zz.baf2RxWaterUse) && void 0 !== tz ? tz : 0,
        needPerS: null !== (sz = zz.baf2RxWaterNeed) && void 0 !== sz ? sz : 0,
        inPerS: zz.baf2RxWaterIn,
        stored: zz.baf2RxWaterStored,
        makersShort: null !== (Fz = zz.baf2RxCondensersShort) && void 0 !== Fz ? Fz : 0,
        waterBeside: 0,
        pct: zz.baf2RxWater
      }
    }

    function PN(zz) {
      const tz = "running" === zz.baf2RxState || "idle" === zz.baf2RxState;
      return zz.baf2RxFormed && zz.baf2RxTarget !== zz.baf2RxThrottle && tz ? rN(zz, zz.baf2RxTarget) : null
    }

    function rN(zz, tz) {
      const [sz, Fz, Wz, , , , Xz, , Oz] = zz.baf2RxStats, oz = gN(zz, bt), vz = BN(zz), Uz = vz.pct / 100, {
        gen: Kz,
        out: uz,
        load: Nz
      } = function(zz, tz, sz, Fz) {
        const Wz = sz ? po : 1,
          Xz = Math.min(zz.fuelHeat * Wz * Math.max(0, Math.min(1, tz)), zz.size * Wz);
        return {
          gen: Xz,
          out: Xz,
          load: Dv(Xz, zz.cooling, Fz)
        }
      }({
        fuelHeat: sz,
        cooling: Fz,
        size: Wz
      }, tz / 100, oz, Uz), bz = Hv(Xz || Fv(...zz.baf2RxDims)), wz = zz.baf2RxHeat, Dz = Math.abs(Nz - wz), gz = function(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : fz.n;
        const Xz = sz ? po : 1,
          Oz = Math.min(zz.fuelHeat * Xz * tz / 100, zz.size * Xz),
          oz = Oz,
          vz = zz.fuelHeat * Xz,
          Uz = zz.cooling * wv(Fz.pct / 100),
          Kz = vz > 0 && Uz < zz.size * Xz ? Math.floor(100 * Uz / vz) : 100,
          uz = Oz * Wz - Fz.inPerS;
        return {
          out: oz,
          hotAbove: Kz >= 100 ? null : Math.max(0, Kz),
          waterSecs: Fz.pct >= 100 && uz > 1e-6 ? Math.max(0, Fz.stored) / uz : null
        }
      }({
        fuelHeat: sz,
        cooling: Fz,
        size: Wz
      }, tz, oz, {
        pct: vz.pct,
        inPerS: vz.inPerS,
        stored: vz.stored
      }, HN(vz.cb));
      return {
        pct: tz,
        out: uz,
        coolPerS: Kz * HN(vz.cb),
        pelletsPerMin: Oz > 0 ? uz / Oz * 60 : 0,
        settle: Nz,
        settleS: Dz > 2 ? bz * Math.log(Dz / 2) : 0,
        overheatS: Nz > 100 && wz < 100 ? bz * Math.log((Nz - wz) / (Nz - 100)) : null,
        hotAbove: gz.hotAbove,
        coolantSecs: gz.waterSecs
      }
    }

    function YN(zz) {
      return zz.baf2RxThrottle <= 0 && "running" !== zz.baf2RxState ? 0 : rN(zz, zz.baf2RxTarget).pelletsPerMin / 60
    }

    function xN(zz, tz) {
      if (zz <= 0 || tz <= 0) return 0;
      const sz = zz / tz;
      return sz < .25 ? 1 : sz < .5 ? 2 : sz < .8 ? 3 : 4
    }

    function mN(zz, tz) {
      const sz = {};
      for (const [Fz, Wz] of Object.entries(tz.params)) sz[Fz] = "time" === Fz ? mX(zz, Wz) : "amount" === Fz ? Av(Wz) : String(Math.round(Wz));
      return zz(tz.key, sz)
    }

    function JN(zz, tz) {
      return {
        key: `${wN}${zz}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: tz
      }
    }

    function IN(zz) {
      var tz;
      const sz = gN(zz, bt),
        Fz = "running" === zz.baf2RxState,
        Wz = Yv(zz),
        Xz = zz.baf2RxHeat;
      var Oz;
      if (Fz && Xz > Vo) return {
        key: null !== (Oz = Wz.fix) && void 0 !== Oz ? Oz : `${wN}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const oz = Fz ? rN(zz, zz.baf2RxTarget).coolantSecs : null,
        vz = "cryo" === BN(zz).cb;
      if (null !== oz && oz >= 1 && oz <= 30) return JN(vz ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Uz = tv(Fv(...zz.baf2RxDims)).waste,
        Kz = Fz ? ev(zz, Uz, YN(zz)).fullInS : null;
      if (null !== Kz && Kz <= 120 && zz.baf2RxWaste >= .5 * Uz) return JN("rxWarnWaste", "warn");
      if (null !== oz && oz >= 1) return JN(vz ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: oz
      });
      const uz = "noWater" === zz.baf2RxState && Xz > Vo;
      if (zz.baf2RxDamage >= 1 && !uz) return JN("rxDamagedHeals", "warn", {
        pct: zz.baf2RxDamage
      });
      if (zz.baf2RxCryoCut) return JN("rxFix_cryoCut", "warn");
      const Nz = BN(zz);
      if ("noWater" === zz.baf2RxState && "cryo" === Nz.cb) return JN("noWater" === zz.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const bz = Wz.fix === `${wN}rxFix_scramCool` || "idle" === zz.baf2RxState && zz.baf2RxTarget <= 0;
      if (bz && zz.baf2RxFuel <= 0) return JN("rxFix_noFuel", "warn");
      if (bz && zz.baf2RxWaterIn <= 0 && (null !== (tz = zz.baf2RxCryoIn) && void 0 !== tz ? tz : 0) <= 0) return JN("rxFix_noWater", "warn");
      const wz = Wz.fix === `${wN}rxFix_scramCool` ? mv(zz) : null;
      if (null !== wz) return {
        key: wz.key,
        params: {
          amount: wz.amount
        },
        tone: "info"
      };
      if ("running" !== zz.baf2RxState && "idle" !== zz.baf2RxState && null !== Wz.fix) return {
        key: Wz.fix,
        params: {},
        tone: "scram" === zz.baf2RxState ? "info" : uz ? "bad" : "warn"
      };
      var Dz;
      if ("idle" === zz.baf2RxState && zz.baf2RxTarget <= 0) return {
        key: null !== (Dz = Wz.fix) && void 0 !== Dz ? Dz : `${wN}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const gz = zz.baf2RxCryoStarved;
      if ("cryo" === Nz.cb && gz && Nz.needPerS > 0 && Nz.usePerS < DN * Nz.needPerS) return JN("noWater" === gz ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const Hz = "cryo" === Nz.cb,
        Bz = Nz.needPerS > 0 && Nz.usePerS < DN * Nz.needPerS;
      if (Hz ? Bz || Nz.makersShort > 0 && Nz.pct < 100 : Nz.pct < 100) {
        const tz = Hz && Bz ? Math.floor(100 * Nz.usePerS / Nz.needPerS) : Math.min(100, Nz.pct);
        if (Nz.makersShort > 0) {
          return JN(`${Hz?"rxCryoShortLine":"rxWaterShortLine"}${1===Nz.makersShort?"One":""}${!Hz&&zz.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: tz,
            count: Nz.makersShort
          })
        }
        return JN(Hz ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: tz
        })
      }
      const Pz = function(zz) {
        const [tz, sz, Fz] = zz.baf2RxStats, Wz = BN(zz), Xz = gv({
          fuelHeat: tz,
          cooling: sz,
          size: Fz
        }, "cryo" === Wz.cb ? fz.g : 1, !0);
        return Math.max(0, Xz * HN(Wz.cb) - Wz.inPerS)
      }(zz);
      if (sz && Pz > 0) return JN("cryo" === Nz.cb ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Pz)
      });
      if (Xz >= Nv) return JN("rxHotLine", "warn");
      const rz = rN(zz, zz.baf2RxTarget);
      var Yz;
      if (null !== rz.overheatS) return JN("rxWillOverheat", "bad", {
        pct: zz.baf2RxTarget,
        time: rz.overheatS,
        safe: null !== (Yz = rz.hotAbove) && void 0 !== Yz ? Yz : 100
      });
      if (Math.abs(rz.settle - Xz) >= 3) return JN("rxSettling", "info", {
        pct: zz.baf2RxTarget,
        heat: Math.round(rz.settle),
        time: rz.settleS
      });
      const xz = mv(zz);
      if (null !== xz) return {
        key: xz.key,
        params: {
          amount: xz.amount
        },
        tone: "info"
      };
      const mz = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== tz && ("running" !== tz || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === zz.rods ? `${Bv}rxLimitNoRods` : `${Bv}rxLimit_${uv(zz)}`
      }({
        rods: zz.baf2RxStats[3],
        ...xv(zz)
      }, zz.baf2RxState, zz.baf2RxOut >= DN * zz.baf2RxMaxNow, !1);
      if (mz === `${wN}rxLimit_size`) {
        const [tz, , sz, Fz] = zz.baf2RxStats, Wz = Fz > 0 && tz > 0 ? Math.ceil(sz / (tz / Fz) - 1e-9) : Fz, Xz = zz.baf2RxDims.every((zz => zz >= Ls("reactor").max));
        if (Wz < Fz) return JN(Xz ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Wz,
          have: Fz
        });
        if (Xz) return JN("rxLimit_sizeMax", "info")
      }
      return null !== mz ? {
        key: mz,
        params: {},
        tone: "info"
      } : JN("rxSteady", "ok", {
        pct: zz.baf2RxTarget
      })
    }

    function CN(zz) {
      var tz;
      if (zz.melted) return JN("rxMeltedBody", "bad");
      if (-1 === zz.bad) return JN("rxFix_noRoom", "warn");
      if (zz.bad > 0) return JN(1 === zz.bad ? "rxBadOne" : "rxBad", "warn", {
        count: zz.bad
      });
      if (zz.left > 0) {
        const tz = 1 === zz.left ? "One" : "";
        return JN(zz.canFill ? `rxPlanLeft${tz}` : `rxPlanLeftNoFill${tz}`, "info", {
          count: zz.left
        })
      }
      if (0 === zz.rods) return JN("rxLimitNoRods", "warn");
      const sz = null !== (tz = zz.idle) && void 0 !== tz ? tz : 0;
      return sz > 0 ? JN(1 === sz ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: sz
      }) : JN("rxPlanReady", "ok")
    }

    function eN(zz) {
      return Math.floor(Math.max(0, zz[1] - 1) / 2)
    }

    function ZN(zz) {
      if (zz >= Ov && zz < ov) {
        const tz = zz - Ov;
        return {
          key: 0 === tz ? `${wN}rxWhy_rodAlone` : 1 === tz ? `${wN}rxWhy_rodOne` : `${wN}rxWhy_rod`,
          params: {
            count: String(tz),
            heat: String(Qo * (1 + ko * tz))
          }
        }
      }
      return zz === ov ? {
        key: `${wN}rxWhy_channel`,
        params: {
          amount: String(Lo)
        }
      } : zz === vv ? {
        key: `${wN}rxWhy_deadChannel`,
        params: {}
      } : zz === Uv ? {
        key: `${wN}rxWhy_graphite`,
        params: {}
      } : {
        key: `${wN}rxWhy_core`,
        params: {}
      }
    }
    const GN = "buildAFactory2Game:";

    function TN(zz, tz) {
      return 0 !== (zz.baf2RxFlags & tz)
    }

    function cN(zz) {
      let {
        status: tz,
        pending: sz,
        store: Fz,
        explain: Wz
      } = zz;
      const {
        t: Xz
      } = (0, GW.B)(), Oz = TN(tz, Nt), oz = tz.baf2RxTarget, vz = tz.baf2RxThrottle, Uz = function(zz) {
        return {
          press: () => {
            zz.throttlePress()
          },
          drag: tz => {
            zz.throttleDrag(tz)
          },
          release: () => {
            zz.throttleRelease()
          }
        }
      }(Fz), Kz = null === (uz = rN(tz, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, uz - 10),
        red: uz
      };
      var uz;
      return (0, eX.jsxs)("div", {
        className: IW()("Baf2RxThrottle", {
          Off: Oz
        }),
        onClick: () => {
          Oz && Wz(`${GN}rxWhy_startFirst`)
        },
        children: [(0, eX.jsx)("span", {
          className: "HideNarrow",
          children: Xz(`${GN}rxThrottle`)
        }), (0, eX.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, eX.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: oz,
            disabled: Oz,
            style: Oz ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Xz(`${GN}rxThrottle`),
            onPointerDown: () => {
              Uz.press();
              const zz = () => {
                window.removeEventListener("pointerup", zz), window.removeEventListener("pointercancel", zz), Uz.release()
              };
              window.addEventListener("pointerup", zz), window.addEventListener("pointercancel", zz)
            },
            onKeyUp: Uz.release,
            onChange: zz => {
              Uz.drag(Number(zz.target.value))
            }
          }), (0, eX.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Kz.amber}%, #ffb020 ${Kz.amber}% ${Kz.red}%, #ff3b30 ${Kz.red}%)`
            },
            "aria-hidden": "true"
          }), (0, eX.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${vz}% + ${8*(1-vz/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, eX.jsxs)("b", {
          children: [`${oz}%`, (0, eX.jsx)("i", {
            className: IW()("Baf2RxPendingDot", {
              On: sz
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function jN(zz) {
      let {
        status: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)(), Fz = rN(tz, tz.baf2RxTarget), Wz = BN(tz).cb, Xz = sz("cryo" === Wz ? `${GN}rxRateCryo` : `${GN}rxRateWater`, {
        rate: uN(Fz.coolPerS)
      }), Oz = sz(`${GN}rxChain`, {
        pct: String(tz.baf2RxTarget),
        out: Av(Fz.out),
        heat: String(Math.round(Fz.settle)),
        coolant: Xz
      }), oz = null !== Fz.coolantSecs ? Fz.coolantSecs >= 1 ? sz("cryo" === Wz ? `${GN}rxThrottleCryoOut` : `${GN}rxThrottleWaterOut`, {
        time: mX(sz, Fz.coolantSecs)
      }) : sz("cryo" === Wz ? `${GN}rxThrottleCryoDry` : `${GN}rxThrottleWaterDry`) : null;
      return (0, eX.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Oz, null !== oz ? (0, eX.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", oz]
        }) : (0, eX.jsxs)("span", {
          children: [" \xb7 ", sz(`${GN}rxChainPellets`, {
            amount: yv(Fz.pelletsPerMin)
          })]
        })]
      })
    }

    function AN(zz) {
      let {
        view: tz,
        store: sz,
        explain: Wz,
        explainOnce: Xz
      } = zz;
      const {
        t: Oz
      } = (0, GW.B)(), {
        status: oz
      } = tz, [vz, Uz] = (0, Fz.useState)(!1), Kz = TN(oz, Nt), Nz = TN(oz, bt), bz = !TN(oz, gt), wz = oz.baf2RxHeat > 100;
      return (0, eX.jsxs)(eX.Fragment, {
        children: [(0, eX.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, eX.jsx)(cN, {
            status: oz,
            pending: tz.throttlePending,
            store: sz,
            explain: Wz
          }), (0, eX.jsx)(bN, {
            on: Nz,
            label: Nz ? Oz(`${GN}rxOdLeft`, {
              time: mX(Oz, oz.baf2RxOdLeft)
            }) : Oz(`${GN}rxOverdrive`),
            locked: bz,
            pending: 0 !== (tz.pendingFlags & bt),
            toggle: () => {
              bz ? Wz(`${GN}rxOverdriveTier`, {
                amount: String(uz(13))
              }) : Nz ? sz.setFlag(bt, !1) : tz.odConfirmed ? sz.setFlag(bt, !0) : Uz(!0)
            }
          }), Kz || tz.startGuard ? (0, eX.jsx)(JO.t, {
            disabled: tz.busy.has("start") || tz.startGuard,
            onClick: () => {
              sz.tap("start", (() => {
                sz.setFlag(Nt, !1)
              }))
            },
            children: Oz(tz.startGuard ? `${GN}rxStarting` : `${GN}rxStart`)
          }) : (0, eX.jsx)("span", {
            className: IW()("Baf2RxScram", {
              Pulse: wz
            }),
            children: (0, eX.jsx)(JO.H, {
              onClick: () => {
                sz.shutDown()
              },
              children: Oz(`${GN}rxScram`)
            })
          })]
        }), (0, eX.jsx)(jN, {
          status: oz
        }), vz && (0, eX.jsx)(oN, {
          id: "baf2RxOdTitle",
          title: `${GN}rxOdConfirmTitle`,
          body: `${GN}rxOdConfirmBody`,
          yes: `${GN}rxOdConfirm`,
          cancel: () => {
            Uz(!1)
          },
          confirm: () => {
            Uz(!1), sz.tap("odConfirm", (() => {
              sz.confirmOverdrive(), sz.setFlag(bt, !0)
            })), Xz(`${GN}rxWhy_overdrive`)
          }
        })]
      })
    }

    function yN(zz) {
      let {
        view: tz,
        store: sz,
        keepSize: Fz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)(), {
        status: Xz
      } = tz;
      return (0, eX.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, eX.jsx)(NN, {
          kind: "reactor",
          dims: tz.dims,
          cap: Xz.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: zz => {
            sz.resize(zz)
          }
        }), Fz ? (0, eX.jsx)(JO.l, {
          onClick: Fz,
          children: Wz(`${GN}rxKeepSize`)
        }) : (0, eX.jsxs)(eX.Fragment, {
          children: [(0, eX.jsx)(bN, {
            on: tz.guide,
            label: Wz(`${GN}rxGuide`),
            toggle: () => {
              sz.toggleGuide()
            }
          }), TN(Xz, Bt) && (0, eX.jsx)(bN, {
            on: tz.starter,
            label: Wz(`${GN}rxStarter`),
            toggle: () => {
              sz.toggleStarter()
            }
          }), (0, eX.jsx)(FN, {
            status: Xz,
            store: sz,
            busy: tz.busy.has("fill")
          })]
        })]
      })
    }

    function MN(zz) {
      let {
        need: tz,
        kind: sz = "reactor",
        explain: Fz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)(), Xz = tz.length <= 3, Oz = tz.reduce(((zz, tz) => {
        let [, sz] = tz;
        return zz + sz
      }), 0);
      return (0, eX.jsxs)("div", {
        className: IW()("Baf2RxParts", {
          Compact: !Xz
        }),
        onClick: () => {
          Fz("battery" === sz ? `${GN}batWhy_store` : `${GN}rxShellHint`)
        },
        children: [Oz > 0 && (0, eX.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Oz ? Wz(`${GN}rxBlocksOne`) : Wz(`${GN}rxBlocks`, {
            blocks: String(Oz)
          })
        }), 0 === tz.length ? (0, eX.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Wz("battery" === sz ? `${GN}batPartsDone` : `${GN}rxShellDone`)
        }) : Iv(tz).map((zz => {
          let [tz, sz, Fz] = zz;
          const Oz = function(zz) {
            const tz = Tv[zz];
            if (void 0 === tz) return null;
            const [sz, Fz, Wz] = Zv[tz].colour.map((zz => Math.round(255 * zz)));
            return `rgb(${sz}, ${Fz}, ${Wz})`
          }(tz);
          return (0, eX.jsxs)("span", {
            className: "Baf2RxChip",
            title: OX(Wz, tz),
            children: [(0, eX.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Oz ? {
                visibility: "hidden"
              } : {
                background: Oz
              },
              title: Wz(`${GN}rxShopGhost`)
            }), (0, eX.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, eX.jsx)(cW.c, {
                itemName: tz,
                amount: 0
              })
            }), (0, eX.jsx)("span", {
              className: "Baf2RxChipName",
              children: Xz ? `${sz} ${oz=OX(Wz,tz),oz.replace(/^(Reactor|Battery) (?=\S)/,"")}` : sz
            }), Fz >= sz ? (0, eX.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, eX.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Xz ? Wz(`${GN}rxShopShort`, {
                count: String(sz - Fz)
              }) : "\u2212" + (sz - Fz)
            })]
          }, tz);
          var oz
        }))]
      })
    }
    const dN = "buildAFactory2Game:";

    function hN(zz) {
      var tz, sz, Wz, Xz, Oz, oz, vz;
      let {
        store: Uz,
        close: Kz
      } = zz;
      const {
        t: uz
      } = (0, GW.B)(), Nz = lO(), bz = vN(Uz), {
        explained: wz,
        explain: Dz
      } = pu("baf2RxExplained"), gz = (0, Fz.useCallback)(((zz, tz) => {
        Dz(uz(zz, tz))
      }), [Dz, uz]), Hz = null === bz || void 0 === bz ? void 0 : bz.status, Bz = !0 === (null === Hz || void 0 === Hz ? void 0 : Hz.baf2BatReadOnly), Pz = zz => {
        Hz && Nz.send(ut(Hz.baf2BatAt, zz))
      }, [rz, Yz, xz] = null !== (tz = null === bz || void 0 === bz ? void 0 : bz.dims) && void 0 !== tz ? tz : [0, 0, 0], mz = Av(null !== (sz = null === bz || void 0 === bz ? void 0 : bz.au) && void 0 !== sz ? sz : 0), Jz = !0 === (null === Hz || void 0 === Hz ? void 0 : Hz.baf2BatFormed), Iz = null !== (Wz = null === Hz || void 0 === Hz ? void 0 : Hz.baf2BatStored) && void 0 !== Wz ? Wz : 0, Cz = Math.max(1, null !== (Xz = null === Hz || void 0 === Hz ? void 0 : Hz.baf2BatIslandCap) && void 0 !== Xz ? Xz : 1), ez = Math.min(100, 100 * Iz / Cz), Zz = null === Hz || void 0 === Hz ? void 0 : Hz.baf2BatNetPerS, Gz = function(zz, tz, sz) {
        return sz > 0 && tz >= sz ? "full" : void 0 !== zz && zz >= .05 ? "charging" : void 0 !== zz && zz <= -.05 && tz > 0 ? "draining" : "steady"
      }(Zz, Iz, null !== (Oz = null === Hz || void 0 === Hz ? void 0 : Hz.baf2BatIslandCap) && void 0 !== Oz ? Oz : 0), Tz = null !== (oz = null === Hz || void 0 === Hz ? void 0 : Hz.baf2BatMadePerS) && void 0 !== oz ? oz : 0, cz = null !== (vz = null === Hz || void 0 === Hz ? void 0 : Hz.baf2BatUsedPerS) && void 0 !== vz ? vz : 0;
      let jz, Az = {},
        yz = "info";
      if (Hz)
        if (Jz) "charging" === Gz ? (jz = `${dN}batLine_charging`, Az = {
          time: mX(uz, (Cz - Iz) / Math.max(.05, null !== Zz && void 0 !== Zz ? Zz : 0))
        }, yz = "ok") : "draining" === Gz ? (jz = `${dN}batLine_draining`, Az = {
          time: mX(uz, Iz / Math.max(.05, -(null !== Zz && void 0 !== Zz ? Zz : 0)))
        }, yz = "warn") : jz = "full" === Gz ? `${dN}batLine_full` : Iz <= 0 && cz > 0 ? `${dN}batLine_empty` : `${dN}batLine_steady`;
        else {
          var Mz;
          const zz = CN({
            left: Hz.baf2BatNeed.reduce(((zz, tz) => {
              let [, sz] = tz;
              return zz + sz
            }), 0),
            bad: Hz.baf2BatBad,
            rods: 1,
            canFill: !0 === Hz.baf2BatCanFill,
            melted: !1
          });
          jz = zz.key, Az = {
            count: String(null !== (Mz = zz.params.count) && void 0 !== Mz ? Mz : 0)
          }, yz = zz.tone
        }
      else jz = `${dN}batLine_steady`;
      const dz = Math.max(Tz, cz, 1);
      return (0, eX.jsx)(mO.b, {
        close: Kz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, eX.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, eX.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, eX.jsx)(cW.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, eX.jsxs)("div", {
                children: [(0, eX.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: uz(`${dN}batTitle`)
                }), Hz && (0, eX.jsxs)("p", {
                  className: IW()("Baf2RxSubtitle", {
                    good: Jz && "charging" === Gz,
                    warn: Jz && "draining" === Gz
                  }),
                  children: [rz, "\xd7", Yz, "\xd7", xz, " \xb7 ", uz(Jz ? `${dN}batState_${Gz}` : `${dN}rxSubPlanShort`)]
                })]
              })]
            }), (0, eX.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Hz && !Bz && (0, eX.jsx)(UN, {
                kind: "battery",
                cap: Jz ? mz : void 0,
                busy: null === bz || void 0 === bz ? void 0 : bz.busy.has("apart"),
                apart: () => {
                  Uz.tap("apart", (() => {
                    Pz("apart")
                  }))
                }
              }), (0, eX.jsx)(JO.n, {
                onClick: Kz
              })]
            })]
          }), bz && Hz && (0, eX.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, eX.jsxs)("div", {
              className: IW()("Baf2RxFlow Baf2BatFlow", {
                Plan: !Jz
              }),
              children: [(0, eX.jsx)(Su, {
                kind: "Power",
                label: uz(`${dN}batMade`),
                number: Jz ? `\u26a1 ${Av(Tz)}/s` : "\u2014",
                note: uz(`${dN}batMadeNote`),
                share: Jz ? Tz / dz : void 0,
                onExplain: () => {
                  gz(`${dN}batWhy_made`)
                }
              }), (0, eX.jsx)(Vu, {
                kind: "Power",
                step: Jz ? xN(Tz, dz) : 0,
                planned: !Jz
              }), (0, eX.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  gz(`${dN}batWhy_store`)
                },
                children: [(0, eX.jsx)(Ru, {
                  max: 100,
                  bands: [{
                    upTo: Jz ? ez : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, eX.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, eX.jsx)("b", {
                    className: "Baf2BatStored",
                    children: Jz ? uz(`${dN}batStoredOf`, {
                      amount: Av(Iz),
                      cap: Av(Hz.baf2BatIslandCap)
                    }) : uz(`${dN}batWillHold`, {
                      cap: mz
                    })
                  }), (0, eX.jsx)("span", {
                    children: uz(`${dN}batAdds`, {
                      cap: mz
                    })
                  }), Jz && (0, eX.jsx)("small", {
                    children: uz(`${dN}batBreakNote`, {
                      cap: mz
                    })
                  })]
                })]
              }), (0, eX.jsx)(Vu, {
                kind: "Power",
                step: Jz ? xN(cz, dz) : 0,
                planned: !Jz
              }), (0, eX.jsx)(Su, {
                kind: "Power",
                label: uz(`${dN}batUsed`),
                number: Jz ? `\u26a1 ${Av(cz)}/s` : "\u2014",
                note: uz(`${dN}batUsedNote`),
                share: Jz ? cz / dz : void 0,
                onExplain: () => {
                  gz(`${dN}batWhy_used`)
                }
              })]
            }), (0, eX.jsx)(fu, {
              text: uz(jz, Az),
              tone: yz,
              explained: wz
            }), Bz ? (0, eX.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: uz(`${dN}rxNotYours`)
            }) : !Jz && (0, eX.jsxs)(eX.Fragment, {
              children: [(0, eX.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, eX.jsx)(NN, {
                  kind: "battery",
                  dims: bz.dims,
                  cap: Hz.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: zz => {
                    Uz.resize(zz)
                  }
                }), (0, eX.jsx)(bN, {
                  on: bz.guide,
                  label: uz(`${dN}rxGuide`),
                  toggle: () => {
                    Uz.toggleGuide()
                  }
                }), Hz.baf2BatCanFill && (0, eX.jsx)(JO.p, {
                  disabled: !Cv("battery", Hz.baf2BatNeed) || bz.busy.has("fill"),
                  onClick: () => {
                    Uz.tap("fill", (() => {
                      Pz("fill")
                    }))
                  },
                  children: uz(`${dN}rxFill`)
                })]
              }), (0, eX.jsx)(MN, {
                need: Hz.baf2BatNeed,
                kind: "battery",
                explain: gz
              })]
            })]
          })]
        })
      })
    }
    const QN = "buildAFactory2Game:",
      kN = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function iN(zz, tz) {
      return zz === Xv ? null : tz ? "#4a4440" : zz < ov ? kN[zz - Ov] : zz === ov ? "#3fd0f0" : zz === vv ? "#2c3e4c" : "#55585e"
    }

    function LN(zz) {
      let {
        inner: tz,
        looks: sz,
        layer: Fz,
        setLayer: Wz,
        glow: Xz,
        melted: Oz,
        explain: oz
      } = zz;
      const {
        t: vz
      } = (0, GW.B)(), [Uz, Kz, uz] = tz, Nz = Math.max(0, Math.min(Kz - 1, Fz)), bz = [];
      for (let Dz = 0; Dz < uz; Dz++)
        for (let zz = 0; zz < Uz; zz++) {
          var wz;
          const tz = null !== (wz = sz[(Nz * uz + Dz) * Uz + zz]) && void 0 !== wz ? wz : Xv,
            Fz = iN(tz, Oz),
            Wz = tz >= Ov && tz < ov;
          bz.push(null === Fz ? (0, eX.jsx)("circle", {
            cx: zz + .5,
            cy: Dz + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${zz},${Dz}`) : (0, eX.jsx)("rect", {
            x: zz + .06,
            y: Dz + .06,
            width: .88,
            height: .88,
            fill: Fz,
            opacity: Wz && !Oz ? .5 + .5 * Xz : 1,
            onClick: zz => {
              zz.stopPropagation();
              const sz = ZN(tz);
              oz(sz.key, sz.params)
            }
          }, `${zz},${Dz}`))
        }
      return (0, eX.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, eX.jsx)("svg", {
          className: IW()("Baf2RxMapGrid", {
            Melted: Oz
          }),
          viewBox: `0 0 ${Math.max(1,Uz)} ${Math.max(1,uz)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": vz(`${QN}rxWhy_core`),
          onClick: () => {
            oz(`${QN}rxWhy_core`, {})
          },
          children: bz
        }), Kz > 1 && (0, eX.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, eX.jsx)("button", {
            type: "button",
            "aria-label": vz(`${QN}rxLayerDown`),
            disabled: Nz <= 0,
            onClick: () => {
              Wz(Nz - 1)
            },
            children: "\u25bc"
          }), (0, eX.jsxs)("span", {
            children: [(0, eX.jsx)("span", {
              className: "HideNarrow",
              children: vz(`${QN}rxLayer`, {
                n: String(Nz + 1),
                of: String(Kz)
              })
            }), (0, eX.jsx)("span", {
              className: "ShowNarrow",
              children: vz(`${QN}rxLayerShort`, {
                n: String(Nz + 1),
                of: String(Kz)
              })
            })]
          }), (0, eX.jsx)("button", {
            type: "button",
            "aria-label": vz(`${QN}rxLayerUp`),
            disabled: Nz >= Kz - 1,
            onClick: () => {
              Wz(Nz + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const lN = "buildAFactory2Game:",
      nN = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Ro,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: rv,
        kind: "red"
      }],
      aN = [50, Ro, 100];

    function qN(zz) {
      let {
        stats: tz,
        t: sz,
        explain: Fz
      } = zz;
      const Wz = uv(tz),
        Xz = Math.max(1, tz.fuelHeat, tz.cooling, tz.size),
        Oz = [
          ["fuel", `${lN}rxBarRods`, tz.fuelHeat],
          ["cooling", `${lN}rxBarCooling`, tz.cooling],
          ["size", `${lN}rxBarSize`, tz.size]
        ];
      return (0, eX.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Fz(`${lN}rxWhy_bars`)
        },
        children: [(0, eX.jsx)("span", {
          className: "Baf2RxMostLine",
          children: sz(`${lN}rxMost`, {
            amount: Av(Math.min(tz.fuelHeat, tz.cooling, tz.size))
          })
        }), (0, eX.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Oz.map((zz => {
            let [tz, Fz, Oz] = zz;
            return (0, eX.jsxs)("span", {
              className: IW()("Baf2RxMostBar", tz, {
                Low: tz === Wz
              }),
              children: [(0, eX.jsx)("small", {
                children: sz(Fz)
              }), (0, eX.jsx)("i", {
                children: (0, eX.jsx)("b", {
                  style: {
                    width: 100 * Oz / Xz + "%"
                  }
                })
              })]
            }, tz)
          }))
        })]
      })
    }

    function SN(zz) {
      var tz;
      let {
        view: sz,
        heat: Wz,
        settle: Xz,
        settleLine: Oz,
        settleBad: oz,
        explain: vz
      } = zz;
      const {
        t: Uz
      } = (0, GW.B)(), {
        status: Kz
      } = sz, uz = Kz.baf2RxAt.join(","), [Nz, bz] = (0, Fz.useState)((() => eN(sz.inner)));
      (0, Fz.useEffect)((() => {
        bz(eN(sz.inner))
      }), [uz, sz.inner[1]]);
      const wz = null !== (tz = sz.plan) && void 0 !== tz ? tz : xv(Kz),
        Dz = sz.plan ? sz.plan.powerPerUnit : Kz.baf2RxStats[8],
        gz = null === Wz ? null : "alarm" === (Hz = Pv(Kz)) ? "red" : "hot" === Hz ? "hot" : "warm" === Hz ? "warm" : "cold";
      var Hz;
      const Bz = !Kz.baf2RxFormed && function(zz, tz) {
          return 0 !== (zz.baf2RxFlags & tz)
        }(Kz, wt),
        Pz = Kz.baf2RxDamage,
        rz = Kz.baf2RxDamageTrend;
      return (0, eX.jsxs)("div", {
        className: IW()("Baf2RxCore", null !== gz && void 0 !== gz ? gz : "plan"),
        children: [(0, eX.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, eX.jsx)(LN, {
            inner: sz.inner,
            looks: sz.looks,
            layer: Nz,
            setLayer: bz,
            glow: Kz.baf2RxFormed ? Kz.baf2RxThrottle / 100 : 1,
            melted: Bz,
            explain: vz
          }), (0, eX.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              vz(`${lN}rxWhy_heat`)
            },
            children: [null !== Wz ? (0, eX.jsxs)(eX.Fragment, {
              children: [(0, eX.jsx)("b", {
                children: Uz(`${lN}rxHeatPct`, {
                  pct: String(Wz)
                })
              }), (0, eX.jsx)("span", {
                className: IW()("Baf2RxBand", gz),
                children: Uz(`${lN}rxBand_${gz}`)
              })]
            }) : (0, eX.jsx)("b", {
              children: Uz(`${lN}rxHeat`)
            }), null !== Oz && (0, eX.jsx)("span", {
              className: IW()("Baf2RxSettle", {
                Bad: oz
              }),
              children: Oz
            }), Pz >= 1 && (0, eX.jsxs)("span", {
              className: IW()("Baf2RxDamage", rz),
              children: [Uz(`${lN}rxDamageLine`, {
                pct: String(Pz)
              }), " \xb7 ", Uz(`${lN}rxDamage_${rz}`), (0, eX.jsx)("i", {
                children: (0, eX.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Pz)}%`
                  }
                })
              })]
            })]
          }), (0, eX.jsx)(Ru, {
            max: rv,
            bands: nN,
            ticks: aN,
            now: Wz,
            settle: Xz,
            settleTone: oz ? "bad" : null,
            onExplain: () => {
              vz(`${lN}rxWhy_heat`)
            }
          })]
        }), (0, eX.jsx)(qN, {
          stats: wz,
          t: Uz,
          explain: vz
        }), Dz > 0 && (0, eX.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            vz(`${lN}rxWhy_perPellet`)
          },
          children: Uz(`${lN}rxPerPellet`, {
            amount: Av(Dz)
          })
        })]
      })
    }

    function VN(zz, tz) {
      var sz;
      if (!zz.baf2RxStore) return {
        note: tz(`${lN}rxUpTo`, {
          amount: Av(zz.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Fz, Wz] = zz.baf2RxStore, Xz = Wz > 0 ? Fz / Wz : 0, Oz = String(Math.floor(100 * Xz)), oz = null !== (sz = zz.baf2RxStoreNetPerS) && void 0 !== sz ? sz : 0, vz = function(zz) {
        var tz, sz;
        const [Fz, Wz] = null !== (tz = zz.baf2RxStore) && void 0 !== tz ? tz : [0, 0], Xz = null !== (sz = zz.baf2RxStoreNetPerS) && void 0 !== sz ? sz : 0;
        return Wz > 0 && Fz >= Wz - 1 ? "running" === zz.baf2RxState ? `${wN}rxStoreFull` : `${wN}rxStoreFullOnly` : Xz > .05 ? `${wN}rxStoreLine` : Xz < -.05 ? "running" === zz.baf2RxState ? `${wN}rxStoreUsesMore` : `${wN}rxStoreDraining` : `${wN}rxStorePct`
      }(zz);
      return {
        note: tz(vz, vz === `${lN}rxStoreLine` ? {
          pct: Oz,
          time: mX(tz, (Wz - Fz) / oz)
        } : {
          pct: Oz
        }),
        share: Xz
      }
    }

    function RN(zz) {
      let {
        view: tz,
        explain: sz,
        preview: Fz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)(), {
        status: Xz
      } = tz, Oz = tv(Fv(...tz.dims)), oz = YN(Xz), vz = Math.min(Math.round(Xz.baf2RxFuel), Oz.fuel), Uz = "running" === Xz.baf2RxState, Kz = Uz ? xN(Xz.baf2RxOut, Xz.baf2RxMaxNow) : 0, uz = function(zz, tz, sz) {
        const Fz = BN(zz),
          Wz = "cryo" === Fz.cb,
          Xz = sz ? sz.coolantSecs : Fz.pct >= 100 && zz.baf2RxOut >= 1 ? rN(zz, zz.baf2RxThrottle).coolantSecs : null;
        let Oz, oz = !1;
        if (Fz.pct < 100) {
          const sz = 1 === Fz.makersShort,
            Xz = !Wz && zz.baf2RxCryoOpen ? "OrCryo" : "";
          Oz = Fz.makersShort > 0 ? tz(Wz ? `${lN}rxCryoAddMixer${sz?"":"s"}` : `${lN}rxWaterAddCondenser${sz?"":"s"}${Xz}`, {
            count: String(Fz.makersShort)
          }) : tz(`${lN}rxWaterNeeds`, {
            rate: uN(Fz.needPerS)
          })
        } else if (null !== Xz) Oz = tz(`${lN}rxWaterRunsOut`, {
          time: mX(tz, Xz)
        });
        else if (Fz.waterBeside > 0) Oz = tz(`${lN}rxCryoPlusWater`, {
          rate: uN(Fz.waterBeside)
        });
        else {
          const zz = function(zz) {
            return zz.inPerS <= 0 ? "rxWaterNoSupply" : zz.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Fz);
          oz = "rxWaterNoSupply" === zz, Oz = tz(`${lN}${zz}`, {
            amount: Av(Fz.stored)
          })
        }
        return {
          kind: Wz ? "Cryo" : "Water",
          label: tz(Wz ? `${lN}rxCryo` : `${lN}rxWater`),
          number: `${uN(Fz.usePerS)}/s`,
          preview: sz ? `${uN(sz.coolPerS)}/s` : null,
          note: Oz,
          tone: "noWater" === zz.baf2RxState ? "danger" : oz ? "warn" : (vz = Fz.pct, Uz = Xz, vz < 100 ? "danger" : null === Uz ? null : Uz < 300 ? "danger" : "warn"),
          share: Fz.pct / 100,
          why: Wz ? `${lN}rxWhy_cryo` : `${lN}rxWhy_water`,
          short: Fz.pct < 100
        };
        var vz, Uz
      }(Xz, Wz, Fz), Nz = ev(Xz, Oz.waste, oz), bz = VN(Xz, Wz), wz = rN(Xz, Xz.baf2RxTarget), Dz = Uz && Math.abs(wz.settle - Xz.baf2RxHeat) >= 3, gz = Fz ? Fz.pelletsPerMin / 60 : null;
      return (0, eX.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, eX.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, eX.jsx)(Su, {
            kind: "Fuel",
            label: Wz(`${lN}rxFuel`),
            number: String(vz),
            preview: null !== gz && gz > 0 && Xz.baf2RxFuel > 0 ? mX(Wz, Xz.baf2RxFuel / gz) : null,
            note: Xz.baf2RxFuel <= 0 ? Wz(`${lN}rxFuelEmpty`) : oz > 0 ? Wz(`${lN}rxFuelLeft`, {
              time: mX(Wz, Xz.baf2RxFuel / oz)
            }) : Wz(1 === vz ? `${lN}rxFuelPellet` : `${lN}rxFuelPellets`),
            tone: "noFuel" === Xz.baf2RxState ? "danger" : Xz.baf2RxFuel < 2 ? "warn" : null,
            share: Xz.baf2RxFuel / Oz.fuel,
            onExplain: () => {
              sz(`${lN}rxWhy_fuel`)
            }
          }), (0, eX.jsx)(Su, {
            kind: uz.kind,
            label: uz.label,
            number: uz.number,
            preview: uz.preview,
            note: uz.note,
            tone: uz.tone,
            share: uz.share,
            onExplain: () => {
              sz(uz.why)
            }
          })]
        }), (0, eX.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, eX.jsx)(Vu, {
            kind: "Fuel",
            step: Kz,
            short: "noFuel" === Xz.baf2RxState
          }), (0, eX.jsx)(Vu, {
            kind: uz.kind,
            step: Kz,
            short: uz.short || "noWater" === Xz.baf2RxState
          })]
        }), (0, eX.jsx)(SN, {
          view: tz,
          heat: Xz.baf2RxHeat,
          settle: Math.min(rv, wz.settle),
          settleLine: Dz ? Wz(`${lN}rxHeatSettles`, {
            pct: String(Math.round(wz.settle)),
            time: mX(Wz, wz.settleS)
          }) : null,
          settleBad: wz.settle > 100,
          explain: sz
        }), (0, eX.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, eX.jsx)(Vu, {
            kind: "Power",
            step: Kz
          }), (0, eX.jsx)(Vu, {
            kind: "Waste",
            step: Uz && Xz.baf2RxFuel - Xz.baf2RxPu > 0 ? Kz : 0,
            short: Nz.full
          })]
        }), (0, eX.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, eX.jsx)(Su, {
            kind: "Power",
            label: Wz(`${lN}rxPowerOut`),
            number: `\u26a1 ${Av(Xz.baf2RxOut)}/s`,
            preview: Fz ? Av(Fz.out) : null,
            note: bz.note,
            share: bz.share,
            onExplain: () => {
              sz(`${lN}rxWhy_power`)
            }
          }), (0, eX.jsx)(Su, {
            kind: "Waste",
            label: Wz(`${lN}rxWaste`),
            number: `${Math.floor(Xz.baf2RxWaste)}/${Oz.waste}`,
            note: Nz.full ? Wz(`${lN}rxWasteFull`) : null !== Nz.fullInS ? Wz(`${lN}rxWasteFullIn`, {
              time: mX(Wz, Nz.fullInS)
            }) : Wz(`${lN}rxWasteSpent`),
            tone: "wasteFull" === Xz.baf2RxState ? "danger" : Nz.full ? "warn" : null,
            share: Xz.baf2RxWaste / Oz.waste,
            onExplain: () => {
              sz(`${lN}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function pN(zz) {
      let {
        view: tz,
        explain: sz
      } = zz;
      const {
        t: Fz
      } = (0, GW.B)(), Wz = tz.plan;
      if (!Wz) return null;
      const Xz = Wz.fuelHeat <= 0 ? null : Wz.cooling > 0 ? Math.min(rv, 100 * Wz.fuelHeat / Wz.cooling) : rv,
        Oz = Fz(`${lN}rxPlanAtFull`);
      return (0, eX.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, eX.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, eX.jsx)(Su, {
            kind: "Fuel",
            label: Fz(`${lN}rxFuel`),
            number: Fz(`${lN}rxPlanPerMin`, {
              amount: yv(Wz.pelletsPerMin)
            }),
            note: Fz(`${lN}rxPlanPellets`),
            onExplain: () => {
              sz(`${lN}rxWhy_fuel`)
            }
          }), (0, eX.jsx)(Su, {
            kind: "Water",
            label: Fz(`${lN}rxWater`),
            number: `${uN(Wz.waterPerS)}/s`,
            note: tz.status.baf2RxCryoOpen && Wz.waterPerS > 0 ? Fz(`${lN}rxPlanOrCryo`, {
              rate: uN(gv(Wz, fz.g) * fz.m)
            }) : Oz,
            onExplain: () => {
              sz(`${lN}rxWhy_water`)
            }
          })]
        }), (0, eX.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, eX.jsx)(Vu, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, eX.jsx)(Vu, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, eX.jsx)(SN, {
          view: tz,
          heat: null,
          settle: Xz,
          settleLine: null === Xz ? null : Fz(`${lN}rxPlanHeat`, {
            pct: String(Math.round(Xz))
          }),
          settleBad: null !== Xz && Xz > 100,
          explain: sz
        }), (0, eX.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, eX.jsx)(Vu, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, eX.jsx)(Vu, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, eX.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, eX.jsx)(Su, {
            kind: "Power",
            label: Fz(`${lN}rxPowerOut`),
            number: `\u26a1 ${Av(Wz.max)}/s`,
            note: Oz,
            onExplain: () => {
              sz(`${lN}rxWhy_power`)
            }
          }), (0, eX.jsx)(Su, {
            kind: "Waste",
            label: Fz(`${lN}rxWaste`),
            number: Fz(`${lN}rxPlanPerMin`, {
              amount: yv(Wz.pelletsPerMin)
            }),
            note: Fz(`${lN}rxWasteSpent`),
            onExplain: () => {
              sz(`${lN}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const fN = "buildAFactory2Game:",
      EN = {
        key: `${fN}rxWaiting`,
        params: {},
        tone: "info"
      };

    function zb(zz, tz) {
      return 0 !== (zz.baf2RxFlags & tz)
    }

    function tb(zz) {
      var tz, sz;
      let {
        store: Wz,
        close: Xz
      } = zz;
      const {
        t: Oz
      } = (0, GW.B)(), oz = vN(Wz), {
        explained: vz,
        hinting: Uz,
        explain: Kz,
        explainOnce: uz
      } = pu("baf2RxExplained"), Nz = (0, Fz.useCallback)(((zz, tz) => {
        Kz(Oz(zz, tz))
      }), [Kz, Oz]), bz = (0, Fz.useCallback)(((zz, tz) => {
        uz(zz, Oz(zz, tz))
      }), [uz, Oz]), [wz, Dz] = (0, Fz.useState)(!1), [gz, Hz] = (0, Fz.useState)(!1), Bz = null === oz || void 0 === oz ? void 0 : oz.status, Pz = null === Bz || void 0 === Bz ? void 0 : Bz.baf2RxAt.join(","), rz = !0 === (null === Bz || void 0 === Bz ? void 0 : Bz.baf2RxFormed);
      (0, Fz.useEffect)((() => {
        Hz(!1), Dz(!1)
      }), [Pz, rz]), (0, Fz.useEffect)((() => (Wz.opened(), () => {
        Wz.closed()
      })), [Wz]);
      const Yz = void 0 !== Bz && zb(Bz, Ht),
        xz = Bz ? rz ? Pv(Bz) : null !== oz && void 0 !== oz && oz.plan ? function(zz, tz) {
          if (zz <= 0) return "off";
          if (tz <= 0) return "alarm";
          const sz = 100 * zz / tz;
          return sz < 50 ? "calm" : sz < Nv ? "warm" : sz <= 100 ? "hot" : "alarm"
        }(oz.plan.fuelHeat, oz.plan.cooling) : "off" : "off",
        mz = Bz ? Yv(Bz) : null,
        Jz = oz ? oz.waiting ? EN : rz ? IN(oz.status) : function(zz) {
          var tz, sz;
          const {
            status: Fz
          } = zz;
          return CN({
            left: Fz.baf2RxNeed.reduce(((zz, tz) => {
              let [, sz] = tz;
              return zz + sz
            }), 0),
            bad: Fz.baf2RxBad,
            rods: null !== (tz = null === (sz = zz.plan) || void 0 === sz ? void 0 : sz.rods) && void 0 !== tz ? tz : 0,
            canFill: zb(Fz, Dt),
            melted: zb(Fz, wt),
            idle: zz.looks.reduce(((zz, tz) => zz + (tz === vv ? 1 : 0)), 0)
          })
        }(oz) : null,
        Iz = Uz && null !== Jz && ("ok" === Jz.tone || "info" === Jz.tone),
        Cz = Bz ? function(zz) {
          const tz = 0 !== (zz.baf2RxFlags & Nt),
            sz = zz.baf2RxHeat < fo;
          return 0 !== (zz.baf2RxFlags & wt) || sz && (tz || !zz.baf2RxFormed) ? null : zz.baf2RxFormed && !tz ? {
            key: `${Bv}rxApartScram`,
            params: {}
          } : {
            key: `${Bv}rxApartCooling`,
            params: {
              pct: String(fo)
            }
          }
        }(Bz) : null,
        [ez, Zz, Gz] = null !== (tz = null === oz || void 0 === oz ? void 0 : oz.dims) && void 0 !== tz ? tz : [0, 0, 0],
        Tz = `${ez}\xd7${Zz}\xd7${Gz}`;
      return (0, eX.jsx)(mO.b, {
        close: Xz,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, eX.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, eX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eX.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, eX.jsx)(KN, {
                mood: xz
              }), (0, eX.jsxs)("div", {
                children: [(0, eX.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Oz(`${fN}rxTitle`)
                }), oz && (0, eX.jsxs)("p", {
                  className: IW()("Baf2RxSubtitle", rz && (null === mz || void 0 === mz ? void 0 : mz.tone)),
                  children: [rz && !Yz ? (0, eX.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Oz(`${fN}rxChangeSize`),
                    onClick: () => {
                      if (!Bz) return;
                      const zz = zb(Bz, Nt);
                      var tz;
                      (tz = {
                        scram: zz,
                        heat: Bz.baf2RxHeat
                      }).scram && tz.heat < fo ? Dz(!0) : Nz(zz ? `${fN}rxResizeCooling` : `${fN}rxResizeHot`, {
                        pct: String(fo)
                      })
                    },
                    children: [Tz, " \u270e"]
                  }) : Tz, " \xb7 ", Oz(rz ? null !== (sz = null === mz || void 0 === mz ? void 0 : mz.label) && void 0 !== sz ? sz : `${fN}rxState_running` : `${fN}rxSubPlanShort`)]
                })]
              })]
            }), (0, eX.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [oz && !Yz && (0, eX.jsx)(UN, {
                kind: "reactor",
                busy: oz.busy.has("apart"),
                whyNot: Cz ? () => {
                  Nz(Cz.key, Cz.params)
                } : null,
                apart: () => {
                  Wz.tap("apart", (() => {
                    Wz.send("apart")
                  }))
                }
              }), (0, eX.jsx)(JO.n, {
                onClick: Xz
              })]
            })]
          }), oz && Jz && (0, eX.jsxs)("div", {
            className: "Baf2RxBody",
            children: [rz ? (0, eX.jsx)(RN, {
              view: oz,
              explain: Nz,
              preview: PN(oz.status)
            }) : (0, eX.jsx)(pN, {
              view: oz,
              explain: Nz
            }), (0, eX.jsx)(fu, {
              text: Iz ? `${mN(Oz,Jz)} ${Oz(`${fN}rxTapHint`)}` : mN(Oz, Jz),
              tone: Jz.tone,
              explained: vz
            }), Yz ? (0, eX.jsxs)(eX.Fragment, {
              children: [(0, eX.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Oz(`${fN}rxNotYours`)
              }), (0, eX.jsx)(WN, {
                status: oz.status,
                store: Wz,
                readOnly: !0
              })]
            }) : rz && !gz ? (0, eX.jsxs)(eX.Fragment, {
              children: [(0, eX.jsx)(AN, {
                view: oz,
                store: Wz,
                explain: Nz,
                explainOnce: bz
              }), void 0 !== oz.status.baf2RxLayout && tN(oz.status) && (0, eX.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, eX.jsx)(WN, {
                  status: oz.status,
                  store: Wz,
                  readOnly: !1,
                  bare: !0
                }), (0, eX.jsx)(FN, {
                  status: oz.status,
                  store: Wz,
                  busy: oz.busy.has("fill")
                })]
              })]
            }) : (0, eX.jsxs)(eX.Fragment, {
              children: [(0, eX.jsx)(yN, {
                view: oz,
                store: Wz,
                keepSize: rz ? () => {
                  Hz(!1)
                } : void 0
              }), Jv(oz.dims, oz.status.baf2RxDims) && (0, eX.jsx)(MN, {
                need: oz.status.baf2RxNeed,
                explain: Nz
              }), (0, eX.jsx)(WN, {
                status: oz.status,
                store: Wz,
                readOnly: !1
              })]
            }), wz && (0, eX.jsx)(oN, {
              id: "baf2ResizeTitle",
              title: `${fN}rxResizeConfirmTitle`,
              body: `${fN}rxResizeConfirmBody`,
              yes: `${fN}rxChangeSize`,
              cancel: () => {
                Dz(!1)
              },
              confirm: () => {
                Dz(!1), Hz(!0)
              }
            })]
          })]
        })
      })
    }
    class sb {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(zz) {
        this.view = zz;
        for (const tz of this.listeners) tz()
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

    function Fb(zz) {
      let {
        commands: tz,
        store: sz,
        power: Wz,
        water: Xz,
        reactor: Oz,
        battery: oz,
        collider: vz,
        terminal: Uz,
        quests: Kz,
        close: uz,
        leave: Nz,
        askIslands: bz,
        showCore: wz,
        openSocial: Dz
      } = zz;
      const {
        userContext: gz
      } = (0, Mo.b)(), Hz = yo.featureFlags.useSocialFeatures && gz.isLoggedIn(), [Bz, Pz] = (0, Fz.useState)((() => sz.get()));
      (0, Fz.useEffect)((() => sz.subscribe((() => {
        Pz(sz.get())
      }))), [sz]);
      const rz = "islands" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) ? Bz.backToCore : void 0;
      return (0, eX.jsxs)(LO.Provider, {
        value: tz,
        children: ["core" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(bu, {
          view: Bz.core,
          close: uz,
          askIslands: bz
        }), "dropMap" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(Hu, {
          message: Bz.dropMap,
          quests: Kz,
          close: uz,
          leave: Nz
        }), "islands" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(yu, {
          message: Bz.islands,
          arrivedAtMs: Bz.arrivedAtMs,
          close: rz ? () => {
            wz(rz)
          } : uz,
          leave: Nz,
          openSocial: Hz ? Dz : null
        }), "quests" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(cK, {
          store: Kz,
          close: uz
        }), "transfer" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(XK, {
          message: Bz.transfer,
          arrivedAtMs: Bz.arrivedAtMs,
          close: uz,
          leave: Nz
        }), "power" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(jO, {
          store: Wz,
          close: uz
        }), "water" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(Ho, {
          store: Xz,
          close: uz
        }), "reactor" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(tb, {
          store: Oz,
          close: uz
        }), "battery" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(hN, {
          store: oz,
          close: uz
        }), "collider" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(rU, {
          store: vz,
          close: uz
        }), "terminal" === (null === Bz || void 0 === Bz ? void 0 : Bz.kind) && (0, eX.jsx)(qu, {
          store: Uz,
          close: uz,
          send: zz => {
            tz.send(zz)
          }
        })]
      })
    }
    var Wb = sz(37917);

    function Xb(zz, tz) {
      return zz.distSq - tz.distSq
    }
    class Ob {
      constructor() {
        this.list = [], this.pool = []
      }
      add(zz, tz, sz, Fz) {
        let Wz = this.pool[this.list.length];
        Wz || (Wz = {
          x: 0,
          y: 0,
          distSq: 0,
          element: tz,
          liftRem: sz,
          dot: Fz
        }, this.pool.push(Wz)), Wz.x = zz.x, Wz.y = zz.y, Wz.distSq = zz.distSq, Wz.element = tz, Wz.liftRem = sz, Wz.dot = Fz, this.list.push(Wz)
      }
    }
    class ob {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = zz, this.sizes = new WeakMap, this.observer = new ResizeObserver((zz => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const tz of zz) {
            const zz = tz.borderBoxSize[0];
            "dot" !== tz.target.dataset.crowded && 0 !== zz.inlineSize && 0 !== zz.blockSize && this.sizes.set(tz.target, {
              width: zz.inlineSize,
              height: zz.blockSize
            })
          }
        })), this.remPx = 16, this.Ow = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.YB = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.YB)
      }
      observe(zz) {
        this.observer.observe(zz)
      }
      unobserve(zz) {
        this.observer.unobserve(zz)
      }
      run(zz) {
        const tz = zz.list;
        tz.sort(Xb);
        const sz = this.pxPerVw,
          Fz = this.pxPerVh;
        this.Ow.length = 0, this.hud && this.Ow.push(...this.hud.boxes(performance.now()));
        for (const Xz of tz) {
          var Wz;
          const zz = this.sizes.get(Xz.element);
          let tz = "no";
          if (zz && zz.width > 0) {
            const Wz = Xz.x * sz,
              Oz = Xz.y * Fz - Xz.liftRem * this.remPx;
            this.fit(Wz, Oz, zz.width, zz.height) || (tz = Xz.dot && this.fit(Wz, Oz, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Wz = Xz.element.dataset.crowded) && void 0 !== Wz ? Wz : "no") !== tz && ("no" === tz ? delete Xz.element.dataset.crowded : Xz.element.dataset.crowded = tz), "hidden" !== tz && (0, Wb.b)(Xz.element, Xz.x, Xz.y)
        }
        tz.length = 0
      }
      fit(zz, tz, sz, Fz) {
        const Wz = zz - sz / 2,
          Xz = zz + sz / 2,
          Oz = tz - Fz,
          oz = this.Ow;
        for (let vz = 0; vz < oz.length; vz += 4)
          if (Wz < oz[vz + 1] - 2 && Xz > oz[vz] + 2 && Oz < oz[vz + 3] - 2 && tz > oz[vz + 2] + 2) return !1;
        return oz.push(Wz, Xz, Oz, tz), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.YB)
      }
    }
    const vb = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class Ub {
      constructor() {
        this.cards = vb.map((zz => document.getElementsByClassName(zz))), this.watched = vb.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(zz) {
        zz - this.refreshedAt > 1e3 && (this.refreshedAt = zz, this.stale = !0);
        for (let sz = 0; sz < this.cards.length; sz++) {
          var tz;
          const zz = null !== (tz = this.cards[sz][0]) && void 0 !== tz ? tz : null;
          zz !== this.watched[sz] && this.watch(sz, zz)
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
        for (const tz of this.watched) {
          if (!tz || tz.closest(".NoRoom")) continue;
          const sz = tz.getBoundingClientRect();
          let Fz = sz.top,
            Wz = sz.bottom;
          if (tz === this.watched[0] && this.hud) {
            const zz = this.hud.getBoundingClientRect();
            Fz = Math.max(Fz, zz.top), Wz = Math.min(Wz, zz.bottom)
          }
          sz.width > 0 && Wz > Fz && zz.push(sz.left, sz.right, Fz, Wz)
        }
      }
      watch(zz, tz) {
        const sz = this.watched[zz];
        var Fz, Wz;
        (sz && this.sizes.unobserve(sz), this.watched[zz] = tz, this.stale = !0, tz && this.sizes.observe(tz), 0 === zz) && (null === (Fz = this.hud) || void 0 === Fz || Fz.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Wz = null === tz || void 0 === tz ? void 0 : tz.closest(".Baf2QuestHud")) && void 0 !== Wz ? Wz : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const Kb = [0, 0, 0],
      ub = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Nb(zz, tz, sz, Fz, Wz, Xz) {
      let [Oz, oz, vz] = Fz;
      const Uz = (Oz + .5 - sz[0]) ** 2 + (oz - sz[1]) ** 2 + (vz + .5 - sz[2]) ** 2;
      let Kz = null;
      Uz <= Xz ** 2 && (Kb[0] = Oz + .5, Kb[1] = oz + Wz, Kb[2] = vz + .5, Kz = tz.projectWorldPosToViewport(Kb));
      const uz = null !== Kz && Kz.x > -5 && Kz.x < 105 && Kz.y > -5 && Kz.y < 105;
      return (0, Wb.e)(zz, !uz), uz ? (ub.x = Kz.x, ub.y = Kz.y, ub.distSq = Uz, ub) : null
    }
    class bb {
      constructor(zz) {
        this.onElement = zz, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(zz) {
        const tz = [];
        for (let sz = 0; sz + 4 < zz.length; sz += 5) {
          const Fz = [zz[sz], zz[sz + 1], zz[sz + 2]];
          tz.push({
            key: Fz.join(","),
            pos: Fz,
            status: OW[zz[sz + 3]],
            kind: et[zz[sz + 4]]
          })
        }
        this.markers = tz, this.keys = new Set(tz.map((zz => {
          let {
            key: tz
          } = zz;
          return tz
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
        let tz = this.refs.get(zz);
        return tz || (tz = tz => {
          const sz = this.elements.get(zz);
          var Fz, Wz;
          sz && (null === (Fz = this.onElement) || void 0 === Fz || Fz.call(this, sz, !1));
          tz ? (this.elements.set(zz, tz), null === (Wz = this.onElement) || void 0 === Wz || Wz.call(this, tz, !0)) : (this.elements.delete(zz), this.refs.delete(zz))
        }, this.refs.set(zz, tz)), tz
      }
      onAfterRender(zz, tz, sz) {
        for (const Fz of this.markers) {
          const Wz = this.elements.get(Fz.key);
          if (!Wz) continue;
          const Xz = Nb(Wz, zz, tz, Fz.pos, 1.05, 24);
          Xz && sz.add(Xz, Wz, .45, !0)
        }
      }
      notify() {
        for (const zz of this.listeners) zz()
      }
    }
    const wb = {
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
    const Db = (0, Fz.memo)((function(zz) {
        let {
          status: tz,
          kind: sz,
          bindRef: Fz
        } = zz;
        const {
          t: Wz
        } = (0, GW.B)(), Xz = function(zz, tz) {
          var sz;
          if ("noFuel" === zz) {
            var Fz, Wz;
            const zz = null === (Fz = At[tz]) || void 0 === Fz || null === (Wz = Fz.fuels) || void 0 === Wz ? void 0 : Wz.find((zz => Ws.includes(zz)));
            return null !== zz && void 0 !== zz ? zz : wb.noFuel
          }
          return void 0 !== (null === (sz = At[tz]) || void 0 === sz ? void 0 : sz.cryoMade) ? "noOutlet" === zz ? "Fluid Pipe" : "noInput" === zz ? "Biomass" : wb[zz] : wb[zz]
        }(tz, sz);
        return (0, eX.jsxs)("div", {
          className: IW()("Baf2StallMarker", tz),
          ref: Fz,
          hidden: !0,
          children: [Xz && (0, eX.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, eX.jsx)(cW.c, {
              itemName: Xz,
              amount: 0
            })
          }), (0, eX.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === tz ? "?" : "!"
          }), (0, eX.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Wz(`buildAFactory2Game:stallTag_${tz}`)
          })]
        })
      })),
      gb = (0, Fz.memo)((function(zz) {
        let {
          controller: tz
        } = zz;
        const [sz, Wz] = (0, Fz.useState)((() => tz.get()));
        return (0, Fz.useEffect)((() => (Wz(tz.get()), tz.subscribe((() => {
          Wz(tz.get())
        })))), [tz]), (0, eX.jsx)("div", {
          className: "Baf2StallMarkers",
          children: sz.map((zz => (0, eX.jsx)(Db, {
            status: zz.status,
            kind: zz.kind,
            bindRef: tz.bind(zz.key)
          }, zz.key)))
        })
      })),
      Hb = gs.n + 150;
    class Bb {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(zz, tz) {
        const sz = tz - zz;
        null === this.offset || sz < this.offset ? this.offset = sz : this.offset = Math.min(sz, this.offset + .02 * (tz - this.sampledAt)), this.sampledAt = tz
      }
      toLocal(zz) {
        var tz;
        return zz + (null !== (tz = this.offset) && void 0 !== tz ? tz : 0) + Hb
      }
    }
    var Pb = sz(37925);
    const rb = 15 * Math.PI / 180,
      Yb = Math.SQRT2,
      xb = [4, 2];

    function mb(zz, tz) {
      const sz = [1 / 0, 1 / 0, 1 / 0],
        Fz = [-1 / 0, -1 / 0, -1 / 0];
      for (const vz of zz)
        for (let zz = 0; zz < 3; zz++) sz[zz] = Math.min(sz[zz], vz[zz]), Fz[zz] = Math.max(Fz[zz], vz[zz]);
      const Wz = (sz[0] + Fz[0]) / 2,
        Xz = (sz[1] + Fz[1]) / 2,
        Oz = (sz[2] + Fz[2]) / 2;
      let oz = 0;
      for (const vz of zz) oz = Math.max(oz, Math.hypot(vz[0] - Wz, vz[1] - Xz, vz[2] - Oz));
      return {
        x: Wz,
        y: Xz,
        z: Oz,
        r: oz + tz
      }
    }

    function Jb(zz, tz, sz) {
      const Fz = tz.x - zz.x,
        Wz = tz.y - zz.y,
        Xz = tz.z - zz.z,
        Oz = Math.sqrt(Fz * Fz + Wz * Wz + Xz * Xz);
      if (Oz <= tz.r + 8) return 1;
      const oz = tz.r / Oz,
        vz = Math.sqrt(1 - oz * oz),
        Uz = vz < -zz.cosHalf,
        Kz = (Fz * zz.dx + Wz * zz.dy + Xz * zz.dz) / Oz;
      if (!Uz && Kz < zz.cosHalf * vz - zz.sinHalf * oz) return 0;
      const uz = sz * Yb * zz.frameMs * zz.pxPerBlock / (Oz - tz.r);
      for (let Nz = 0; Nz < xb.length; Nz++)
        if (uz * xb[Nz] <= 1) return xb[Nz];
      return 1
    }

    function Ib(zz, tz) {
      return {
        name: zz,
        at: tz,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Cb = [0, 0, 0];

    function eb(zz, tz, sz) {
      let [, Fz, Wz, Xz, Oz, oz] = tz;
      const vz = gs.f * (null !== Oz && void 0 !== Oz ? Oz : 1),
        Uz = [];
      for (let bz = 0; bz < Fz.length; bz += 3) Uz.push([Fz[bz] + .5, Fz[bz + 1] + .65, Fz[bz + 2] + .5]);
      const Kz = [];
      for (let bz = 0; bz < Uz.length - 1; bz++) {
        const [zz, tz] = [Uz[bz], Uz[bz + 1]];
        Kz.push([(zz[0] + tz[0]) / 2, (zz[1] + tz[1]) / 2, (zz[2] + tz[2]) / 2])
      }
      const uz = Uz.slice(1, -1),
        Nz = new Uint8Array(uz.length);
      for (const bz of null !== oz && void 0 !== oz ? oz : []) Nz[bz >> 1] |= 1 & bz ? 2 : 1;
      return {
        island: zz,
        length: uz.length,
        loop: Xz,
        cellsPerMs: vz,
        edges: Kz,
        mo: uz,
        bounds: mb([...Kz, ...uz], .3),
        changed: !0,
        culled: !1,
        hide: Nz,
        items: Wz.map((zz => {
          let [tz, Fz] = zz;
          return Ib(tz, (0, gs.G)(tz, Fz, sz, vz).at)
        }))
      }
    }

    function Zb(zz, tz) {
      const {
        items: sz
      } = zz;
      if (0 === sz.length) return;
      const Fz = zz.length / zz.cellsPerMs,
        Wz = Math.floor((tz - sz[0].at) / Fz) - 1;
      if (Wz > 0)
        for (const Xz of sz) Xz.at += Wz * Fz
    }

    function Gb(zz, tz) {
      const sz = Math.min(Math.floor(tz), zz.length - 1),
        Fz = zz.hide[sz];
      return 0 !== Fz && 0 !== (Fz & (tz - sz < .5 ? 1 : 2))
    }

    function Tb(zz, tz) {
      const sz = Math.min(Math.floor(tz), zz.length - 1),
        Fz = tz - sz,
        Wz = Fz < .5,
        Xz = Wz ? zz.edges[sz] : zz.mo[sz],
        Oz = Wz ? zz.mo[sz] : zz.edges[sz + 1],
        oz = Wz ? 2 * Fz : 2 * Fz - 1;
      Cb[0] = Xz[0] + (Oz[0] - Xz[0]) * oz, Cb[1] = Xz[1] + (Oz[1] - Xz[1]) * oz, Cb[2] = Xz[2] + (Oz[2] - Xz[2]) * oz
    }
    const cb = Math.PI / 4;
    class jb {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Bb, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.YB = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(zz) {
        const tz = performance.now();
        this.clock.sample(zz.baf2BeltLinesAt, tz), this.queue(zz.baf2BeltLinesAt, zz, 0, null, null, 0), this.applyDue(tz)
      }
      onMoves(zz) {
        const tz = performance.now(),
          sz = zz.baf2BeltMovesAt;
        this.clock.sample(sz, tz);
        for (const [Fz, Wz, Xz, Oz] of zz.baf2BeltMoveList) null === Wz ? this.queue(sz - Xz, null, Fz, null, null, null !== Oz && void 0 !== Oz ? Oz : 0) : this.queue(sz - Xz, null, Fz, Wz, null !== Oz && void 0 !== Oz ? Oz : null, 0);
        this.applyDue(tz)
      }
      start(zz) {
        this.pool = new Pb.c(zz, {
          scale: .3,
          yaw: cb
        }, 64), this.YB(), window.addEventListener("resize", this.YB)
      }
      onAfterRender(zz) {
        const {
          pool: tz
        } = this;
        if (!tz) return;
        const sz = performance.now(),
          Fz = sz - this.lastRenderAt;
        this.lastRenderAt = sz, Fz < 100 && (this.frameMs += .1 * (Fz - this.frameMs));
        const Wz = sz + this.frameMs;
        this.applyDue(Wz);
        const Xz = zz.cameraPosition,
          Oz = tz.follow(Xz);
        this.setView(zz, Xz);
        const oz = this.frame++;
        for (let vz = 0; vz < this.shown.length; vz++) {
          const zz = this.shown[vz],
            sz = Jb(this.view, zz.bounds, zz.cellsPerMs),
            Fz = zz.culled && 0 !== sz;
          if (zz.culled = 0 === sz, !Oz && !zz.changed && !Fz && (0 === sz || (oz + vz) % sz !== 0)) continue;
          zz.changed = !1, zz.loop && (Zb(zz, Wz), (0, gs.E)(zz.items, zz.length, Wz, zz.cellsPerMs));
          let Xz = zz.length;
          for (let oz = 0; oz < zz.items.length; oz++) {
            const sz = zz.items[oz],
              Fz = (0, gs.K)(sz.at, Xz, Wz, zz.cellsPerMs);
            if (Xz = Fz - gs.t, Gb(zz, Fz)) {
              null === sz.kind || sz.hidden || (sz.kind.hide(sz.slot), sz.hidden = !0);
              continue
            }
            let vz = sz.kind;
            if (null === vz) {
              if (vz = tz.kindOf(sz.name), null === vz) continue;
              sz.kind = vz, sz.slot = vz.take(), sz.hidden = !0, sz.drawn = NaN
            } else if (Fz === sz.drawn && !sz.hidden && !Oz) continue;
            Tb(zz, Fz), vz.write(sz.slot, Cb[0], Cb[1], Cb[2]), sz.hidden = !1, sz.drawn = Fz
          }
        }
        tz.commit()
      }
      dispose() {
        var zz;
        window.removeEventListener("resize", this.YB), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (zz = this.pool) || void 0 === zz || zz.dispose(), this.pool = null
      }
      setView(zz, tz) {
        const {
          cameraDir: sz,
          lastDir: Fz
        } = this, Wz = zz.cameraDirection;
        for (let Kz = 0; Kz < 3; Kz++) Fz[Kz] = sz[Kz], sz[Kz] = Wz[Kz];
        const Xz = sz[0] * Fz[0] + sz[1] * Fz[1] + sz[2] * Fz[2],
          Oz = Number.isNaN(Xz) ? 0 : Math.acos(Math.min(1, Math.max(-1, Xz))),
          {
            width: oz,
            height: vz
          } = this,
          Uz = zz.tanHalfFovX;
        ! function(zz, tz, sz, Fz, Wz, Xz, Oz) {
          let oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          zz.x = tz[0], zz.y = tz[1], zz.z = tz[2], zz.dx = sz[0], zz.dy = sz[1], zz.dz = sz[2];
          const vz = Math.min(Math.PI, Math.atan(Math.sqrt(Fz * Fz + Wz * Wz)) + rb + oz);
          zz.cosHalf = Math.cos(vz), zz.sinHalf = Math.sin(vz), zz.pxPerBlock = Xz / (2 * Wz), zz.frameMs = Oz
        }(this.view, tz, sz, Uz, Uz * vz / oz, vz * window.devicePixelRatio, this.frameMs, Oz)
      }
      queue(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = Math.max(this.clock.toLocal(zz), this.lastPendingAt);
        this.lastPendingAt = Oz, this.pending.push({
          at: Oz,
          lines: tz,
          line: sz,
          name: Fz,
          pos: Wz,
          idx: Xz
        })
      }
      applyDue(zz) {
        const {
          pending: tz
        } = this;
        for (; this.pendingHead < tz.length && tz[this.pendingHead].at <= zz;) {
          const zz = tz[this.pendingHead++];
          if (zz.lines) this.applyLines(zz.lines, zz.at), zz.lines = null;
          else {
            const tz = this.lines.get(zz.line);
            tz && this.applyMove(tz, zz, zz.at)
          }
        }
        this.pendingHead === tz.length ? (tz.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > tz.length && (tz.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(zz, tz) {
        this.clearIsland(zz.baf2BeltIsland);
        for (const sz of zz.baf2BeltLineList) this.lines.set(sz[0], eb(zz.baf2BeltIsland, sz, tz));
        this.shown = [...this.lines.values()]
      }
      applyMove(zz, tz, sz) {
        let {
          name: Fz,
          pos: Wz,
          idx: Xz
        } = tz;
        zz.changed = !0, zz.loop && (Zb(zz, sz), (0, gs.E)(zz.items, zz.length, sz, zz.cellsPerMs)), null !== Fz && null !== Wz ? (0, gs.F)(zz.items, zz.length, Ib(Fz, sz), Wz, sz, zz.cellsPerMs) : null !== Fz ? zz.items.push(Ib(Fz, sz)) : zz.items.length > Xz && this.release((0, gs.O)(zz.items, zz.length, sz, zz.cellsPerMs, Xz))
      }
      clearIsland(zz) {
        for (const [tz, sz] of this.lines)
          if (sz.island === zz) {
            for (const zz of sz.items) this.release(zz);
            this.lines.delete(tz)
          }
      }
      release(zz) {
        null !== zz.kind && (zz.kind.release(zz.slot), zz.kind = null, zz.slot = -1, zz.hidden = !0, zz.drawn = NaN)
      }
    }
    var Ab = sz(36078),
      yb = sz(37934);

    function Mb(zz) {
      let {
        depth: tz,
        store: sz,
        t: Wz
      } = zz;
      const Xz = function(zz) {
        const [tz, sz] = (0, Fz.useState)(zz.lastPlayerY());
        return (0, OK.g)(QW, sz), (0, Fz.useEffect)((() => {
          sz(zz.lastPlayerY())
        }), [zz]), tz
      }(sz);
      if (null === Xz) return null;
      const [Oz, oz] = tz, vz = Xz > Oz ? Oz : null !== oz && Xz < oz ? oz : null, Uz = {
        y: xX(Xz),
        target: null === vz ? "" : xX(vz)
      };
      return (0, eX.jsx)("span", {
        className: IW()("Baf2QuestDepth", {
          Reached: null === vz
        }),
        children: Wz(`${KK}${null===vz?"questDepthReached":"questDepth"}`, Uz)
      })
    }

    function db(zz) {
      let {
        also: tz,
        view: sz,
        t: Fz
      } = zz;
      return (0, eX.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, eX.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, eX.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, eX.jsx)("strong", {
            children: Fz(`${KK}questAlsoDownHere`)
          }), (0, eX.jsx)("span", {
            className: "Baf2QuestChips",
            children: tz.map((zz => {
              let [tz, Wz, Xz, Oz] = zz;
              return (0, eX.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Fz(`${KK}questAlsoItem`, {
                  item: NK(Fz, sz.itemNames[tz], tz),
                  have: String(Wz),
                  need: String(Xz)
                }),
                children: [(0, eX.jsx)(DK, {
                  item: tz
                }), (0, eX.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Wz}/${Xz}`
                }), null !== Oz && (0, eX.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Fz(`${KK}questAlsoDepth`, {
                    y: xX(Oz)
                  })
                })]
              }, tz)
            }))
          })]
        })]
      })
    }
    var hb = sz(3068);

    function Qb(zz) {
      let {
        expanded: tz,
        inventoryOpen: sz,
        children: Wz
      } = zz;
      const Xz = (0, Fz.useRef)(null);
      return (0, Fz.useEffect)((() => {
        const zz = Xz.current,
          tz = null === zz || void 0 === zz ? void 0 : zz.closest(".RightElements"),
          Fz = null === zz || void 0 === zz ? void 0 : zz.firstElementChild;
        if (!zz || !tz || !Fz) return;
        return (0, yb.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [tz, Fz], (() => {
          const Wz = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Wz.length) return;
          const Xz = Math.max(...Wz.map((zz => zz.getBoundingClientRect().bottom))),
            Oz = tz.getBoundingClientRect(),
            oz = sz ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (oz) {
            const tz = parseFloat(getComputedStyle(Fz).marginLeft) + parseFloat(getComputedStyle(Fz).marginRight),
              sz = Oz.right - oz.getBoundingClientRect().right - 8 - tz;
            zz.style.setProperty("--baf2-quest-room", `${sz}px`), zz.classList.toggle("NoRoom", sz < 150)
          } else zz.style.removeProperty("--baf2-quest-room"), zz.classList.remove("NoRoom");
          const vz = Xz - Oz.top + 8,
            Uz = function(zz, tz, sz) {
              const Fz = tz.getBoundingClientRect(),
                Wz = zz.getBoundingClientRect(),
                Xz = (0, hb.d)(Wz.left, Wz.right, Fz.top + sz);
              if (null !== Xz && Xz < Fz.bottom) return Xz - Fz.top;
              return Fz.height - (parseFloat(getComputedStyle(tz).paddingBottom) || 0)
            }(zz, tz, vz) - 8,
            Kz = window.innerHeight / 2 - Oz.top,
            {
              top: uz,
              maxHeight: Nz
            } = function(zz, tz, sz, Fz, Wz) {
              const Xz = Math.min(sz, Math.max(0, tz - zz)),
                Oz = Wz ? zz : Math.max(zz, Math.min(Fz - Xz / 2, tz - Xz));
              return {
                top: Oz,
                maxHeight: Math.max(0, tz - Oz)
              }
            }(vz, Uz, function(zz) {
              const tz = zz.firstElementChild,
                sz = tz ? tz.scrollHeight - tz.clientHeight : 0;
              return zz.getBoundingClientRect().height + Math.max(0, sz)
            }(Fz), Kz, IX());
          zz.style.top = `${uz}px`, zz.style.maxHeight = `${Nz}px`
        }))
      }), [sz]), (0, eX.jsx)("div", {
        ref: Xz,
        className: IW()("Baf2QuestHud", {
          Expanded: tz
        }),
        children: Wz
      })
    }

    function kb(zz) {
      let {
        amount: tz,
        t: sz
      } = zz;
      return (0, eX.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, eX.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, eX.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: sz(`${KK}questStepsDone`, {
            amount: String(tz)
          })
        })]
      })
    }

    function ib(zz) {
      let {
        pulse: tz
      } = zz;
      return 0 === tz ? null : (0, eX.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, tz)
    }

    function Lb(zz) {
      var tz;
      let {
        store: sz
      } = zz;
      const Wz = (0, OK.h)(hW, sz.get()),
        [Xz, Oz] = (0, Fz.useState)(!1),
        {
          t: oz
        } = (0, GW.B)(),
        vz = function() {
          const [zz, tz] = (0, Fz.useState)(IX);
          return (0, Fz.useEffect)((() => (tz(IX()), CX(tz))), []), zz
        }(),
        {
          openInGameMenuName: Uz,
          openEverythingMenuName: Kz
        } = (0, xW.h)(["openInGameMenuName", "openEverythingMenuName"]),
        uz = "inventory" === Uz && null === Kz,
        Nz = null !== Uz && !uz || null !== Kz;
      if (! function(zz) {
          return null !== zz.name || null !== zz.side
        }(Wz) || Nz || "off" === Wz.tutorial) return null;
      const bz = aW(Wz.rows),
        wz = bz.filter((zz => zz.done)).length,
        Dz = function(zz, tz) {
          const sz = VW(zz);
          let Fz = 0;
          return zz.filter(((zz, Wz) => !!zz.justFinished || !(zz.done || Wz < sz || Fz > tz) && (Fz++, !0)))
        }(Wz.rows, vz ? 0 : 2),
        gz = vz ? Dz : function(zz, tz) {
          const sz = tz.filter((zz => !zz.justFinished));
          if (sz.length < 2) return [...tz];
          const Fz = zz.indexOf(sz[0]),
            Wz = zz.indexOf(sz[sz.length - 1]),
            Xz = new Set(aW(zz));
          return zz.filter(((zz, sz) => tz.includes(zz) || zz.done && Xz.has(zz) && sz > Fz && sz < Wz))
        }(Wz.rows, Dz),
        Hz = Xz ? Wz.rows : gz,
        Bz = Xz || vz ? [] : function(zz, tz) {
          const sz = new Array(tz.length + 1).fill(0),
            Fz = new Set(aW(zz));
          let Wz = 0;
          for (const Xz of zz) Wz < tz.length && Xz === tz[Wz] ? Wz++ : Xz.done && Fz.has(Xz) && sz[Wz]++;
          return sz
        }(Wz.rows, gz),
        Pz = Xz || gz.length < Wz.rows.length || null !== Wz.reward,
        rz = nW(Wz),
        Yz = rz ? oz(`${KK}questLineComplete`) : Wz.tier ? BK(oz, Wz.tier) : oz(`${KK}currentQuest`),
        xz = function(zz) {
          var tz, sz;
          if (nW(zz)) return null;
          const Fz = null === (tz = zz.chapters) || void 0 === tz ? void 0 : tz.find((tz => {
            let [sz] = tz;
            return sz === zz.tier
          }));
          if (!Fz) return null;
          const Wz = Fz[1].filter((zz => !zz[4]));
          if (0 === Wz.length) return null;
          const Xz = null === (sz = zz.name) || void 0 === sz ? void 0 : sz[0],
            Oz = zz => Wz.findIndex((tz => tz[0] === Xz && (!zz || !tz[3]))),
            oz = Oz(!0),
            vz = oz >= 0 ? oz : Oz(!1);
          if (vz >= 0) return [vz + 1, Wz.length];
          const Uz = Wz.filter((zz => zz[3])).length;
          return [Math.min(Uz + 1, Wz.length), Wz.length]
        }(Wz);
      return (0, eX.jsx)(Ab.e, {
        placement: "topRight",
        children: (0, eX.jsx)(Qb, {
          expanded: Xz,
          inventoryOpen: uz,
          children: (0, eX.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: uK,
            children: [null !== Wz.name && (0, eX.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, eX.jsx)(ib, {
                pulse: Wz.pulse
              }), (0, eX.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, eX.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Yz, xz && (0, eX.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": oz(`${KK}questPlaceLabel`, {
                      n: String(xz[0]),
                      total: String(xz[1])
                    }),
                    children: oz(`${KK}questPlace`, {
                      n: String(xz[0]),
                      total: String(xz[1])
                    })
                  }), Wz.tier && Wz.core && !rz && (0, eX.jsx)(PK, {
                    core: Wz.core,
                    t: oz
                  })]
                })
              }), (0, eX.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: oz(`${KK}${Wz.name[0]}`, bK(Wz.name[1]))
              }), (bz.length > 1 || Pz) && (0, eX.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [bz.length > 1 && (0, eX.jsx)(rK, {
                  rows: bz,
                  t: oz
                }), Pz && (0, eX.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Xz,
                  onClick: () => {
                    Oz(!Xz)
                  },
                  children: [(0, eX.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: oz(`${KK}questStepsToggle`, {
                      done: String(wz),
                      total: String(bz.length)
                    })
                  }), (0, eX.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Xz ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, eX.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [Hz.map(((zz, tz) => {
                  var Xz;
                  const Oz = zz.current && Wz.depth;
                  return (0, eX.jsxs)(Fz.Fragment, {
                    children: [(null !== (Xz = Bz[tz]) && void 0 !== Xz ? Xz : 0) > 0 && (0, eX.jsx)(kb, {
                      amount: Bz[tz],
                      t: oz
                    }), (0, eX.jsx)(YK, {
                      row: zz,
                      view: Wz,
                      t: oz,
                      extra: Oz && (0, eX.jsx)(Mb, {
                        depth: Oz,
                        store: sz,
                        t: oz
                      })
                    })]
                  }, zz.id)
                })), (null !== (tz = Bz[Hz.length]) && void 0 !== tz ? tz : 0) > 0 && (0, eX.jsx)(kb, {
                  amount: Bz[Hz.length],
                  t: oz
                }), Wz.also.length > 0 && (0, eX.jsx)(db, {
                  also: Wz.also,
                  view: Wz,
                  t: oz
                })]
              }), Xz && Wz.reward && (0, eX.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [oz(`${KK}questReward`), (0, eX.jsx)(DK, {
                  item: Wz.reward
                }), NK(oz, Wz.itemNames[Wz.reward], Wz.reward)]
              })]
            }), Wz.side && (0, eX.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [LW(Wz, Date.now()) && (0, eX.jsx)(ib, {
                pulse: Wz.sideCameUpAt
              }), (0, eX.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: oz(`${KK}questSide`)
              }), (0, eX.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: oz(`${KK}${Wz.side.name[0]}`, bK(Wz.side.name[1]))
              }), (0, eX.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, eX.jsx)(YK, {
                  row: Wz.side.row,
                  view: Wz,
                  t: oz
                })
              })]
            })]
          })
        })
      })
    }
    const lb = "baf2ToastView";
    class nb {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = zz, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: zz,
          holdMs: tz
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const zz = this.dropCovered();
          zz && this.show(zz.message, zz.holdMs)
        }), 250));
        const sz = this.dropCovered();
        null !== sz && (sz.holdMs > 0 || "baf2ToastCelebrate" === sz.message.baf2ToastStyle) && "baf2ToastCelebrate" !== zz.baf2ToastStyle && this.show(sz.message, sz.holdMs);
        const Fz = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== zz.baf2ToastStyle && Fz > 0) return this.pending = {
          message: zz,
          holdMs: tz
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const zz = this.pending;
          this.pending = null, zz && this.present(zz.message, zz.holdMs)
        }), Fz));
        this.present(zz, tz)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(zz, tz) {
        this.clearTimers(), this.pending = null;
        const sz = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: zz.baf2ToastText,
          style: zz.baf2ToastStyle,
          swapped: sz,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === zz.baf2ToastStyle ? 1500 : tz), this.Yg();
        const Fz = Math.min(8e3, Math.max(1e3, zz.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Fz)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Yg(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Yg()
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
      Yg() {
        MW.o.Yg(lb, this.view, !0)
      }
    }
    var ab = sz(78);
    const qb = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Sb(zz) {
      let {
        store: tz
      } = zz;
      const sz = (0, OK.h)(lb, tz.get()),
        {
          openInGameMenuName: Fz,
          openEverythingMenuName: Wz
        } = (0, xW.h)(["openInGameMenuName", "openEverythingMenuName"]),
        Xz = sz && (0, eX.jsxs)("div", {
          className: IW()("Baf2Toast", qb[sz.style], {
            Swapped: sz.swapped,
            Leaving: sz.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === sz.style && (0, eX.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, eX.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, eX.jsx)(jW.c, {
              text: sz.text
            })
          })]
        }, sz.id);
      return null !== Fz && null === Wz ? (0, ab.createPortal)((0, eX.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Xz
      }), document.body) : (0, eX.jsx)(Ab.e, {
        children: Xz
      })
    }
    const Vb = "baf2AreaView";
    class Rb {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.po = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.po = null
      }
      arrive(zz, tz) {
        tz && function(zz) {
          return "home" === zz.baf2AreaPlace && void 0 !== zz.baf2AreaNameText
        }(zz) ? this.po = zz : this.show(zz)
      }
      release() {
        const zz = this.po;
        null !== zz && this.show(zz)
      }
      show(zz) {
        this.clearTimer(), this.po = null;
        const tz = void 0 === zz.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: zz,
          ms: tz
        }, this.Yg(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Yg()
        }), tz)
      }
      dispose() {
        this.clearTimer(), this.po = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Yg() {
        MW.o.Yg(Vb, this.view, !0)
      }
    }

    function pb(zz) {
      var tz;
      let {
        store: sz
      } = zz;
      const {
        t: Fz
      } = (0, GW.B)(), Wz = (0, OK.h)(Vb, sz.get());
      if (!Wz) return null;
      const {
        area: Xz
      } = Wz, Oz = Xz.baf2AreaResetMinutes;
      return (0, eX.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Xz.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Wz.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, eX.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Xz.baf2AreaHeading && (0, eX.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Fz(Xz.baf2AreaHeading)
        }), (0, eX.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (tz = Xz.baf2AreaNameText) && void 0 !== tz ? tz : Fz(Xz.baf2AreaName)
        }), Xz.baf2AreaNote && (0, eX.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Fz(Xz.baf2AreaNote)
        }), void 0 !== Oz && (0, eX.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Fz("buildAFactory2Game:areaWildsReset", {
            time: mX(Fz, 60 * Oz)
          })
        })]
      }, Wz.id)
    }
    const fb = "baf2GearGauge";
    class Eb {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      nB(zz) {
        var tz;
        if (this.clearLinger(), null === zz.gearPowerKind) return void this.set(null);
        const sz = "jetpack" === zz.gearPowerKind && (Fz = zz.gearChargeState, Wz = zz.gearCharge, "flying" === Fz || "charging" === Fz || "outOfCharge" === Fz || "ceiling" === Fz || "offPlot" === Fz || "noPower" === Fz && Wz <= 0);
        var Fz, Wz;
        const Xz = !0 === (null === (tz = this.view) || void 0 === tz ? void 0 : tz.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Oz = sz || "jetpack" === zz.gearPowerKind && Xz;
        this.set({
          gauge: zz,
          jetShown: Oz
        }), Oz && !sz && (this.lingerTimer = setTimeout((() => {
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
        this.view = zz, MW.o.Yg(fb, zz, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const zw = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function tw(zz) {
      let {
        store: tz
      } = zz;
      const sz = (0, OK.h)(fb, tz.get());
      return sz ? "jetpack" === sz.gauge.gearPowerKind ? (0, eX.jsx)(sw, {
        view: sz
      }) : (0, eX.jsx)(Fw, {
        gauge: sz.gauge
      }) : null
    }

    function sw(zz) {
      let {
        view: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)(), {
        gauge: Fz
      } = tz, Wz = Fz.gearChargeMax > 0 ? Math.max(0, Math.min(1, Fz.gearCharge / Fz.gearChargeMax)) : 0, Xz = zw[Fz.gearChargeState], Oz = Xz ? sz(Xz) : null;
      return (0, eX.jsxs)("div", {
        className: IW()("Baf2JetArc", {
          Shown: tz.jetShown,
          Low: Wz < .2,
          Warm: Wz >= .2 && Wz < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Wz)
        },
        "aria-hidden": !tz.jetShown,
        children: [(0, eX.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, eX.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Ww,
            pathLength: 100
          }), (0, eX.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Ww,
            pathLength: 100
          })]
        }), (0, eX.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Wz), "%"]
        }), Oz && (0, eX.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Oz
        })]
      })
    }

    function Fw(zz) {
      let {
        gauge: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)(), Fz = function(zz, tz) {
        switch (tz.gearPowerKind) {
          case "skyPack":
            return zz("buildAFactory2Game:gearSkyPack", {
              charge: tz.gearCharge,
              max: tz.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return zz("buildAFactory2Game:gearIslandDraw", {
              power: pz(tz.gearIslandPower),
              cost: pz(tz.gearCostPerUse)
            });
          case "barrier":
            return zz("buildAFactory2Game:gearBarrier", {
              shield: Math.round(tz.gearCharge),
              max: tz.gearChargeMax,
              power: pz(tz.gearIslandPower)
            });
          default:
            return null
        }
      }(sz, tz);
      return null === Fz ? null : (0, eX.jsx)(Ab.e, {
        children: (0, eX.jsx)("div", {
          className: IW()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === tz.gearChargeState || "outOfCharge" === tz.gearChargeState
          }),
          role: "status",
          children: Fz
        })
      })
    }
    const Ww = (() => {
      const zz = zz => {
        const tz = zz * Math.PI / 180;
        return `${(40*Math.cos(tz)).toFixed(2)} ${(40*Math.sin(tz)).toFixed(2)}`
      };
      return `M ${zz(160)} A 40 40 0 1 1 ${zz(380)}`
    })();
    class Xw {
      constructor(zz) {
        this.onElement = zz, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      nB(zz) {
        let tz = zz.baf2LabelsReset || zz.baf2LabelsIsland !== this.island;
        tz && (this.labels.clear(), this.island = zz.baf2LabelsIsland);
        for (const [sz, Fz, Wz, Xz, Oz] of zz.baf2LabelsList) {
          const zz = `${sz},${Fz},${Wz}`,
            oz = this.labels.get(zz);
          null === Xz ? tz = this.labels.delete(zz) || tz : oz && oz.item === Xz && (oz.count === Oz || oz.count >= 0 && Oz >= 0) ? oz.count !== Oz && (oz.count = Oz, this.writeCount(zz, Oz)) : (this.labels.set(zz, {
            key: zz,
            pos: [sz, Fz, Wz],
            item: Xz,
            count: Oz
          }), this.writeCount(zz, Oz), tz = !0)
        }
        if (this.changes++, tz) {
          this.snapshot = [...this.labels.values()];
          for (const zz of this.listeners) zz()
        }
      }
      bindCount(zz) {
        const tz = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${zz}`;
        let sz = this.countRefs.get(tz);
        return sz || (sz = sz => {
          var Fz, Wz;
          sz ? (this.countElements.set(tz, sz), this.writeCount(zz, null !== (Fz = null === (Wz = this.labels.get(zz)) || void 0 === Wz ? void 0 : Wz.count) && void 0 !== Fz ? Fz : -1)) : (this.countElements.delete(tz), this.countRefs.delete(tz))
        }, this.countRefs.set(tz, sz)), sz
      }
      setCountWords(zz) {
        this.countWords = zz;
        for (const [tz, sz] of this.labels) this.writePart(`words|${tz}`, zz(sz.count), sz.count)
      }
      writeCount(zz, tz) {
        this.writePart(`bare|${zz}`, YX(tz), tz), this.countElements.has(`words|${zz}`) && this.writePart(`words|${zz}`, this.countWords(tz), tz)
      }
      writePart(zz, tz, sz) {
        const Fz = this.countElements.get(zz);
        if (!Fz || sz < 0) return;
        const Wz = Fz.firstChild;
        Wz && 3 === Wz.nodeType && !Wz.nextSibling ? Wz.nodeValue !== tz && (Wz.nodeValue = tz) : Fz.textContent !== tz && (Fz.textContent = tz)
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
        let tz = this.refs.get(zz);
        return tz || (tz = tz => {
          const sz = this.elements.get(zz);
          var Fz, Wz;
          sz && (null === (Fz = this.onElement) || void 0 === Fz || Fz.call(this, sz, !1));
          tz ? (this.elements.set(zz, tz), null === (Wz = this.onElement) || void 0 === Wz || Wz.call(this, tz, !0)) : (this.elements.delete(zz), this.refs.delete(zz))
        }, this.refs.set(zz, tz)), tz
      }
      onAfterRender(zz, tz, sz, Fz) {
        for (const Wz of this.snapshot) {
          const Xz = this.elements.get(Wz.key);
          if (!Xz) continue;
          if (Fz(Wz.key)) {
            (0, Wb.e)(Xz, !0);
            continue
          }
          const Oz = Nb(Xz, zz, tz, Wz.pos, 1.1, 24);
          Oz && sz.add(Oz, Xz, 0, !1)
        }
      }
    }
    const Ow = (0, Fz.memo)((function(zz) {
        let {
          item: tz
        } = zz;
        return (0, eX.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, eX.jsx)(cW.c, {
            itemName: tz,
            amount: 0
          })
        })
      })),
      ow = (0, Fz.memo)((function(zz) {
        let {
          label: tz,
          bindRef: sz,
          countRef: Fz,
          wordsRef: Wz
        } = zz;
        return (0, eX.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: sz,
          hidden: !0,
          children: [(0, eX.jsx)(Ow, {
            item: tz.item
          }), tz.count >= 0 && (0, eX.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, eX.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Wz
            }), (0, eX.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Fz
            })]
          })]
        })
      })),
      vw = (0, Fz.memo)((function(zz) {
        let {
          store: tz
        } = zz;
        const {
          t: sz
        } = (0, GW.B)(), [Wz, Xz] = (0, Fz.useState)((() => tz.list()));
        return (0, Fz.useEffect)((() => (Xz(tz.list()), tz.subscribe((() => {
          Xz(tz.list())
        })))), [tz]), (0, Fz.useEffect)((() => {
          tz.setCountWords((zz => sz("buildAFactory2Game:labelSiloCount", {
            count: YX(zz)
          })))
        }), [tz, sz]), (0, eX.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Wz.map((zz => -2 === zz.count ? null : (0, eX.jsx)(ow, {
            label: zz,
            bindRef: tz.bind(zz.key),
            countRef: tz.bindCount(zz.key),
            wordsRef: tz.bindCount(zz.key, "words")
          }, zz.key)))
        })
      })),
      Uw = {
        read: () => !0,
        write: () => {}
      };

    function Kw(zz) {
      return `${zz[0]},${zz[1]},${zz[2]}`
    }

    function uw(zz) {
      let [tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz] = zz;
      const bz = void 0 === uz || void 0 === Nz ? function(zz) {
        return [Math.floor((zz - 1) / 2), 0]
      }(Xz) : [uz, Nz];
      return {
        kind: 0 === vz ? "reactor" : "battery",
        box: as([tz, sz, Fz], Wz, Xz, Oz, oz, bz),
        formed: 1 === Uz,
        level: Kz
      }
    }
    class Nw {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uw;
        this.guideSetting = zz, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = zz.read()
      }
      nB(zz) {
        var tz;
        const sz = new Map;
        for (const Fz of zz.baf2RxPlanList) {
          const zz = uw(Fz);
          sz.set(Kw(zz.box.ctrl), zz)
        }
        this.plans = sz, this.layouts = new Map((null !== (tz = zz.baf2RxLayouts) && void 0 !== tz ? tz : []).map((zz => {
          let [tz, sz, Fz, Wz] = zz;
          return [Kw([tz, sz, Fz]), Wz]
        }))), this.predicted.clear(), zz.baf2RxFormedAt && (this.formed = {
          ctrl: zz.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Fz of [...this.startersOff]) {
          const zz = sz.get(Fz);
          zz && !zz.formed || this.startersOff.delete(Fz)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((zz => this.planByKey(zz)))
      }
      planAt(zz) {
        return this.planByKey(Kw(zz))
      }
      predictSize(zz, tz) {
        this.predicted.set(Kw(zz), tz), this.changed()
      }
      unpredict(zz) {
        this.predicted.delete(Kw(zz)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(zz) {
        var tz;
        const sz = Kw(zz);
        return this.predicted.has(sz) ? null : null !== (tz = this.layouts.get(sz)) && void 0 !== tz ? tz : null
      }
      showsStarter(zz) {
        return !this.startersOff.has(Kw(zz))
      }
      setStarter(zz, tz) {
        const sz = Kw(zz);
        tz ? this.startersOff.delete(sz) : this.startersOff.add(sz), this.changed()
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
        const tz = this.plans.get(zz);
        if (!tz) return null;
        const sz = this.predicted.get(zz);
        return sz ? {
          ...tz,
          box: Ss(tz.box, tz.kind, sz[0], sz[1], sz[2])
        } : tz
      }
      changed() {
        this.version++;
        for (const zz of this.listeners) zz()
      }
    }
    var bw = sz(201);
    const ww = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Dw(zz, tz, sz, Fz) {
      const Wz = zz.length / 3;
      for (let Xz = 0; Xz < ww.length / 3; Xz++) zz.push(ww[3 * Xz] * Fz[0] / 2 + sz[0], ww[3 * Xz + 1] * Fz[1] / 2 + sz[1], ww[3 * Xz + 2] * Fz[2] / 2 + sz[2]);
      for (let Xz = Wz; Xz < Wz + 24; Xz += 4) tz.push(Xz, Xz + 1, Xz + 2, Xz, Xz + 2, Xz + 3)
    }

    function gw(zz, tz, sz) {
      const Fz = tz[0][0],
        Wz = [],
        Xz = [];
      for (const [Oz, oz] of tz) Dw(Wz, Xz, [Oz[0] - Fz[0], Oz[1] - Fz[1], Oz[2] - Fz[2]], oz);
      return zz.createGameMesh({
        positions: Wz,
        indices: Xz
      }, sz, Fz)
    }

    function Hw(zz, tz) {
      const sz = zz.w - 2,
        Fz = zz.d - 2;
      return 1 === function(zz, tz, sz, Fz) {
        const [Wz, Xz, Oz] = zz;
        if (Number(Wz <= 2) + Number(Xz <= 2) + Number(Oz <= 2) >= 2) return function(zz, tz, sz) {
          return (zz + tz + sz) % 2 === 0 ? 1 : 3
        }(tz, sz, Fz);
        const [oz, vz] = Wz >= Xz && Wz >= Oz ? [sz, Fz] : Xz >= Oz ? [tz, Fz] : [tz, sz];
        return oz % 2 === 0 && vz % 2 === 0 ? 1 : 3
      }([sz, zz.h - 2, Fz], tz % sz, Math.floor(tz / (sz * Fz)), Math.floor(tz / sz) % Fz) ? "rod" : "channel"
    }

    function Bw(zz, tz, sz) {
      if ("reactor" !== zz.kind || zz.formed || !tz) return !1;
      const Fz = ps(zz.box);
      for (let Wz = 0; Wz < Fz; Wz++) {
        const zz = sz(Wz);
        if (null !== zz && cs(zz)) return !1
      }
      return !0
    }

    function Pw(zz, tz, sz, Fz, Wz) {
      var Xz;
      let Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const oz = FF(zz.box, tz),
        vz = oF(zz.kind, oz, sz);
      if ("wrong" === vz || "blocked" === vz) return "wrong";
      if (!Wz) return null;
      if ("inside" === oz && "reactor" === zz.kind && "Air" === As(sz)) {
        if (null !== Oz) {
          var Uz;
          const sz = Eu[zN(Oz, WF(zz.box, tz))];
          return sz && null !== (Uz = Gv(sz)) && void 0 !== Uz ? Uz : null
        }
        if (Fz) return Hw(zz.box, WF(zz.box, tz))
      }
      if ("missing" !== vz) return null;
      const Kz = vF(zz.kind, oz);
      return null === Kz ? null : null !== (Xz = Gv(Kz)) && void 0 !== Xz ? Xz : null
    }
    const rw = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Yw(zz, tz, sz) {
      const Fz = sz => {
        const Fz = tz(tF(zz.box, sz));
        return null !== Fz && function(zz, tz) {
          return "reactor" !== zz.kind || tz !== Es(zz.box) && "inside" !== FF(zz.box, tz)
        }(zz, sz) && "ok" !== oF(zz.kind, FF(zz.box, sz), Fz)
      };
      if (sz) {
        const Xz = sF(zz.box, [Math.floor(sz[0]), Math.floor(sz[1]), Math.floor(sz[2])]);
        if (Xz >= 0 && (Fz(Xz) || (Wz = Xz, "reactor" === zz.kind && "inside" === FF(zz.box, Wz) && "Air" === tz(tF(zz.box, Wz))))) return Xz
      }
      var Wz;
      const Xz = ps(zz.box);
      for (let Oz = 0; Oz < Xz; Oz++)
        if (Fz(Oz)) return Oz;
      return -1
    }

    function xw(zz, tz) {
      return Math.floor(tz / (zz.w * zz.d))
    }

    function mw(zz, tz, sz) {
      return sz >= 0 && xw(zz, tz) > xw(zz, sz)
    }

    function Jw(zz, tz) {
      return tz >= 0 && zz.h >= 3 && xw(zz, tz) === zz.h - 1
    }

    function Iw(zz) {
      const tz = As(zz);
      return tz === Ps || "Collider" === tz || "Laser" === tz || tz.startsWith("_Collider ")
    }

    function Cw(zz, tz, sz, Fz) {
      if (Fz(zz)) return null;
      if (!rw.every((tz => {
          let [Fz, Wz, Xz] = tz;
          const Oz = sz([zz[0] + Fz, zz[1] + Wz, zz[2] + Xz]);
          return null !== Oz && !is("reactor", Oz) && "reactor" !== ys(Oz)
        }))) return null;
      const Wz = Ls("reactor").min,
        Xz = as([zz[0], zz[1], zz[2]], function(zz, tz) {
          const sz = tz[0] - (zz[0] + .5),
            Fz = tz[2] - (zz[2] + .5);
          return Math.abs(sz) >= Math.abs(Fz) ? sz >= 0 ? 2 : 4 : Fz >= 0 ? 1 : 3
        }(zz, tz), Wz, Wz, Wz, qs("reactor", Wz)),
        Oz = Es(Xz);
      let oz = !0;
      for (let vz = 0; vz < ps(Xz) && oz; vz++) {
        if (vz === Oz) continue;
        const zz = tF(Xz, vz),
          tz = sz(zz);
        oz = !Fz(zz) && (null === tz || !Iw(tz))
      }
      return {
        box: Xz,
        fits: oz
      }
    }
    const ew = Zv,
      Zw = "baf2Goal",
      Gw = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Tw = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      jw = .4;

    function Aw(zz, tz) {
      let [sz, Fz, Wz] = zz;
      const Xz = dv([sz - .02, Fz - .02, Wz - .02], [sz + 1.02, Fz + 1.02, Wz + 1.02], .07);
      return tz && (Xz.push([
        [sz + .5, Fz + 1 + .7, Wz + .5],
        [.08, 1.4, .08]
      ]), Xz.push([
        [sz + .5, Fz + 1 + 1.4 + .2, Wz + .5],
        [jw, jw, jw]
      ])), Xz
    }

    function yw(zz, tz) {
      let [sz, Fz, Wz] = tz;
      return zz.isBlockInLoadedChunk(sz, Fz, Wz) ? zz.blockIdToBlockName(zz.getBlockId(sz, Fz, Wz)) : null
    }
    let Mw = null;
    const dw = new Set;
    let hw = null;

    function Qw(zz) {
      Mw = zz;
      for (const tz of dw) tz(zz)
    }
    class kw {
      constructor(zz) {
        var tz;
        this.plans = zz, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (tz = zz => {
          var tz, sz;
          this.setGoal(null !== (tz = null === zz || void 0 === zz ? void 0 : zz.goal) && void 0 !== tz ? tz : null, null !== (sz = null === zz || void 0 === zz ? void 0 : zz.startsBattery) && void 0 !== sz && sz)
        }, hw ??= [MW.o.subscribe("setDirectionArrow", (zz => {
          let {
            id: tz,
            position: sz,
            text: Fz
          } = zz;
          tz === Zw && Qw({
            goal: [Math.floor(sz[0]), Math.floor(sz[1]), Math.floor(sz[2])],
            startsBattery: JSON.stringify(null !== Fz && void 0 !== Fz ? Fz : null).includes("arrowStartBattery")
          })
        })), MW.o.subscribe("clearDirectionArrow", (zz => {
          let {
            id: tz
          } = zz;
          null !== tz && tz !== Zw || Qw(null)
        }))], dw.add(tz), tz(Mw), () => {
          dw.delete(tz)
        })
      }
      onAfterRender(zz, tz) {
        const sz = performance.now();
        if (this.cues.length > 0) {
          const tz = .55 + .45 * Math.sin(sz / 1100 * Math.PI * 2);
          for (const sz of this.cues) zz.setGameMesh(sz, {
            visibility: tz
          })
        }
        if (sz - this.lastCheckMs < 150) return;
        this.lastCheckMs = sz;
        const Fz = this.plans.all().filter((zz => {
            const [sz, Fz, Wz] = zz.box.ctrl;
            return (!zz.formed || null !== this.plans.layoutOf(zz.box.ctrl)) && (sz - tz[0]) ** 2 + (Fz - tz[1]) ** 2 + (Wz - tz[2]) ** 2 <= 2304
          })),
          Wz = function(zz, tz) {
            const sz = bw.d.pw,
              Fz = new Map;
            for (const Xz of tz) {
              const tz = tF(Xz.box, 0),
                Oz = tF(Xz.box, ps(Xz.box) - 1),
                oz = [Math.min(tz[0], Oz[0]), Math.min(tz[1], Oz[1]), Math.min(tz[2], Oz[2])].map((zz => Math.floor(zz / sz))),
                vz = [Math.max(tz[0], Oz[0]), Math.max(tz[1], Oz[1]), Math.max(tz[2], Oz[2])].map((zz => Math.floor(zz / sz)));
              for (let sz = oz[0]; sz <= vz[0]; sz++)
                for (let tz = oz[1]; tz <= vz[1]; tz++)
                  for (let Xz = oz[2]; Xz <= vz[2]; Xz++) {
                    var Wz;
                    Fz.set(`${sz},${tz},${Xz}`, null !== (Wz = zz.getChunkVersion(sz, tz, Xz)) && void 0 !== Wz ? Wz : -1)
                  }
            }
            return Fz
          }(zz, Fz);
        this.plans.getVersion() === this.storeVersion && (function(zz, tz) {
          if (zz.size !== tz.size) return !1;
          for (const [sz, Fz] of zz)
            if (tz.get(sz) !== Fz) return !1;
          return !0
        }(Wz, this.chunkVersions) || sz - this.lastRescanMs < 600) || (this.lastRescanMs = sz, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Wz, this.redraw(zz, Fz))
      }
      dispose(zz) {
        this.unwatch(), Mw = null, this.clearMeshes(zz), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(zz, tz) {
        var sz;
        (null === zz || void 0 === zz ? void 0 : zz.join()) === (null === (sz = this.goal) || void 0 === sz ? void 0 : sz.join()) && tz === this.startsBattery || (this.goal = zz, this.startsBattery = tz, this.storeVersion = -1)
      }
      redraw(zz, tz) {
        const sz = tz => yw(zz, tz),
          Fz = new Map,
          Wz = [],
          Xz = this.plans.guideOn();
        for (const Uz of tz) {
          const zz = Xz && Bw(Uz, this.plans.showsStarter(Uz.box.ctrl), (zz => sz(tF(Uz.box, zz)))),
            tz = "reactor" === Uz.kind ? this.plans.layoutOf(Uz.box.ctrl) : null,
            Oz = Xz && !Uz.formed ? Yw(Uz, sz, this.goal) : -1;
          Oz >= 0 && Wz.push([tF(Uz.box, Oz), Jw(Uz.box, Oz)]);
          const oz = ps(Uz.box);
          for (let Wz = 0; Wz < oz; Wz++) {
            const oz = tF(Uz.box, Wz),
              vz = sz(oz),
              Kz = null === vz ? null : Pw(Uz, Wz, vz, zz, Xz, tz);
            if (null !== Kz) {
              const zz = "wrong" !== Kz && mw(Uz.box, Wz, Oz),
                tz = zz ? `${Kz}Dim` : Kz;
              let sz = Fz.get(tz);
              sz || (sz = {
                draw: {
                  ghost: Kz,
                  dim: zz
                },
                list: []
              }, Fz.set(tz, sz)), sz.list.push(oz)
            }
          }
        }
        if (Xz && this.startsBattery && this.goal) {
          const [zz, tz, Wz] = this.goal, Xz = [];
          for (const [Fz, Oz, oz] of Gw) {
            const vz = [zz + Fz, tz + Oz, Wz + oz];
            "Air" === sz(vz) && Xz.push(vz)
          }
          if (Xz.length > 0) {
            var Oz;
            const zz = null !== (Oz = Fz.get("cell")) && void 0 !== Oz ? Oz : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            zz.list.push(...Xz), Fz.set("cell", zz)
          }
        }
        const oz = [...Fz.keys()].sort(),
          vz = [...oz.map((zz => `${zz}:${Fz.get(zz).list.join(";")}`)), `cue:${Wz.join(";")}`].join("|");
        if (vz !== this.shownKey) {
          this.shownKey = vz, this.clearMeshes(zz);
          for (const tz of oz) {
            const {
              draw: sz,
              list: Wz
            } = Fz.get(tz);
            this.meshes.push(this.build(zz, sz, Wz))
          }
          for (const [tz, sz] of Wz) this.cues.push(gw(zz, Aw(tz, sz), Tw))
        }
      }
      build(zz, tz, sz) {
        let {
          ghost: Fz,
          dim: Wz
        } = tz;
        const {
          size: Xz,
          colour: Oz,
          alpha: oz
        } = ew[Fz], vz = sz[0], Uz = [], Kz = [];
        for (const [uz, Nz, bz] of sz) Dw(Uz, Kz, [uz - vz[0] + .5, Nz - vz[1] + .5, bz - vz[2] + .5], [Xz, Xz, Xz]);
        return zz.createGameMesh({
          positions: Uz,
          indices: Kz
        }, {
          rgb: Oz,
          alpha: oz * (Wz ? .3 : 1)
        }, vz)
      }
      clearMeshes(zz) {
        for (const tz of [...this.meshes, ...this.cues]) zz.disposeGameMesh(tz);
        this.meshes = [], this.cues = []
      }
    }
    const iw = [.56, .83, 1],
      Lw = [1, .3, .25];
    class lw {
      constructor(zz) {
        this.plans = zz, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(zz, tz, sz) {
        var Fz;
        const Wz = performance.now();
        if (Wz - this.lastCheckMs < 150) return;
        this.lastCheckMs = Wz;
        const Xz = tz => yw(zz, tz),
          Oz = null === (Fz = zz.rtz(tz)) || void 0 === Fz ? void 0 : Fz.name,
          oz = Oz && "Reactor Frame" === As(Oz) ? zz.getTargetedBlock() : null,
          vz = oz ? [oz.bu[0], oz.bu[1], oz.bu[2]] : null,
          Uz = null !== vz && "Air" === Xz(vz) && vz.every(((zz, tz) => Math.abs(zz + .5 - sz[tz]) <= 8)) ? Cw(vz, sz, Xz, (zz => this.inPlan(zz))) : null,
          Kz = Uz ? `${Uz.box.ctrl.join()}|${Uz.box.rot}|${Uz.fits}` : "";
        Kz !== this.shownKey && this.show(zz, Kz, Uz)
      }
      dispose(zz) {
        this.clear(zz), this.shownKey = ""
      }
      inPlan(zz) {
        return this.plans.all().some((tz => sF(tz.box, zz) >= 0))
      }
      show(zz, tz, sz) {
        if (this.clear(zz), this.shownKey = tz, !sz) return;
        const {
          box: Fz,
          fits: Wz
        } = sz, Xz = Wz ? iw : Lw, {
          lo: Oz,
          hi: oz
        } = Mv(Fz);
        this.meshes.push(gw(zz, dv(Oz, oz, .05), {
          rgb: Xz,
          alpha: 1
        }));
        const vz = [],
          Uz = tF(Fz, 0)[1];
        for (let Kz = 0; Kz < Fz.w * Fz.d; Kz++) {
          const [zz, , tz] = tF(Fz, Kz);
          vz.push([
            [zz + .5, Uz + .02 + .01, tz + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(gw(zz, vz, {
          rgb: Xz,
          alpha: .25
        }))
      }
      clear(zz) {
        for (const tz of this.meshes) zz.disposeGameMesh(tz);
        this.meshes = []
      }
    }
    const nw = "buildAFactory2Game:";

    function aw(zz, tz, sz) {
      const Fz = zz => {
          const [sz, Fz, Wz] = zz.box.ctrl;
          return sz === tz[0] && Fz === tz[1] && Wz === tz[2]
        },
        Wz = zz.find((zz => Fz(zz) || sF(zz.box, tz) >= 0));
      if (!Wz) return null;
      const Xz = function(zz, tz, sz) {
        const {
          w: Fz,
          h: Wz,
          d: Xz
        } = zz.box, Oz = "reactor" === zz.kind ? `${nw}rxTitle` : `${nw}batTitle`;
        if (zz.formed) return {
          key: `${nw}lookPlanFormed`,
          kindKey: Oz,
          w: Fz,
          h: Wz,
          d: Xz,
          count: 0
        };
        let oz = 0,
          vz = 0;
        for (let Kz = 0; Kz < ps(zz.box); Kz++) {
          const tz = sz(tF(zz.box, Kz)),
            Fz = null === tz ? "ok" : oF(zz.kind, FF(zz.box, Kz), tz);
          oz += "missing" === Fz ? 1 : 0, vz += "wrong" === Fz || "blocked" === Fz ? 1 : 0
        }
        const Uz = function(zz, tz, sz) {
          if (tz < 0 || null === sz) return;
          const Fz = FF(zz.box, tz),
            Wz = oF(zz.kind, Fz, sz);
          return "blocked" === Wz ? `${nw}lookWhy_blocked` : "wrong" === Wz ? "ctrl" === Fz ? `${nw}lookWhy_ctrl` : `${nw}lookWhy_reactor_${Fz}` : void 0
        }(zz, sF(zz.box, tz), sz([tz[0], tz[1], tz[2]]));
        if (oz > 0) return {
          key: `${nw}lookPlanToBuild`,
          kindKey: Oz,
          w: Fz,
          h: Wz,
          d: Xz,
          count: oz,
          why: Uz
        };
        if (vz > 0) return {
          key: `${nw}lookPlanTakeOut`,
          kindKey: Oz,
          w: Fz,
          h: Wz,
          d: Xz,
          count: vz,
          why: Uz
        };
        return {
          key: "reactor" === zz.kind ? `${nw}lookPlanNoRods` : `${nw}lookPlanDone`,
          kindKey: Oz,
          w: Fz,
          h: Wz,
          d: Xz,
          count: 0
        }
      }(Wz, tz, sz);
      return "reactor" === Wz.kind && Fz(Wz) ? {
        ...Xz,
        ctrl: !0
      } : Xz
    }

    function qw(zz, tz) {
      return zz === tz || null !== zz && null !== tz && zz.key === tz.key && zz.kindKey === tz.kindKey && zz.w === tz.w && zz.h === tz.h && zz.d === tz.d && zz.count === tz.count && zz.why === tz.why && zz.ctrl === tz.ctrl
    }

    function Sw() {
      return performance.now()
    }
    class Vw {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sw;
        this.ticket = zz, this.sent = tz, this.backstopMs = sz, this.now = Fz, this.queuedAt = void 0, this.queuedAt = Fz()
      }
      answered() {
        const zz = this.now(),
          tz = this.sent.leftAt(this.ticket);
        return null !== tz && zz - tz > 4e3 || zz - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Rw {
      constructor() {
        this.echoes = []
      }
      add(zz) {
        this.echoes = this.echoes.filter((zz => !zz.answered())), this.echoes.push(zz)
      }
      answered() {
        var zz, tz;
        return null === (zz = null === (tz = this.echoes.at(-1)) || void 0 === tz ? void 0 : tz.answered()) || void 0 === zz || zz
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((zz => zz.answered()))
      }
      age() {
        var zz, tz;
        return null !== (zz = null === (tz = this.echoes.at(-1)) || void 0 === tz ? void 0 : tz.age()) && void 0 !== zz ? zz : null
      }
      clear() {
        this.echoes = []
      }
    }
    class pw {
      constructor(zz) {
        this.send = zz, this.value = null, this.sent = null, this.echoes = new Rw, this.down = !1, this.timer = null
      }
      shown(zz) {
        return null === this.value ? zz : this.down || this.value !== this.sent ? this.value : zz === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), zz) : this.value
      }
      pendingFor(zz) {
        return null !== this.value && this.value === this.sent && zz !== this.value ? this.echoes.age() : null
      }
      assume(zz, tz) {
        this.disarm(), this.down = !1, this.value = zz, this.sent = zz, this.echoes.clear(), this.echoes.add(tz)
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
    class fw {
      constructor() {
        this.pending = new Map
      }
      set(zz, tz, sz) {
        var Fz;
        const Wz = null !== (Fz = this.pending.get(zz)) && void 0 !== Fz ? Fz : {
          on: tz,
          echoes: new Rw
        };
        Wz.on = tz, Wz.echoes.add(sz), this.pending.set(zz, Wz)
      }
      shown(zz) {
        let tz = zz;
        for (const [sz, {
            on: Fz,
            echoes: Wz
          }] of this.pending) 0 !== (zz & sz) === Fz && Wz.agreeCounts() || Wz.answered() ? this.pending.delete(sz) : tz = Fz ? tz | sz : tz & ~sz;
        return tz
      }
      pendingMask() {
        let zz = 0;
        for (const tz of this.pending.keys()) zz |= tz;
        return zz
      }
      pendingFor(zz) {
        let tz = null;
        for (const [Fz, {
            on: Wz,
            echoes: Xz
          }] of this.pending) {
          if (void 0 !== zz && 0 !== (zz & Fz) === Wz) continue;
          const Oz = Xz.age();
          var sz;
          if (null !== Oz) tz = Math.max(null !== (sz = tz) && void 0 !== sz ? sz : 0, Oz)
        }
        return tz
      }
      clear() {
        this.pending.clear()
      }
    }
    class Ew {
      constructor() {
        this.dims = null, this.echoes = new Rw, this.unmet = null
      }
      shown(zz) {
        var tz;
        return this.dims && (zD(this.dims, zz) && this.echoes.agreeCounts() || this.echoes.answered()) && (zD(this.dims, zz) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (tz = this.dims) && void 0 !== tz ? tz : zz
      }
      takeUnmet() {
        const zz = this.unmet;
        return this.unmet = null, zz
      }
      set(zz, tz) {
        this.dims = zz, this.echoes.add(tz)
      }
      pendingFor(zz) {
        return null === this.dims || zz && zD(this.dims, zz) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function zD(zz, tz) {
      return zz[0] === tz[0] && zz[1] === tz[1] && zz[2] === tz[2]
    }
    class tD {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sw;
        this.now = zz, this.taps = new Map
      }
      tap(zz, tz, sz) {
        return !this.busy(zz) && (this.taps.set(zz, {
          at: this.now(),
          done: tz
        }), sz(), !0)
      }
      settle(zz) {
        for (const [tz, sz] of [...this.taps]) sz.done(zz) && this.taps.delete(tz)
      }
      busy(zz) {
        const tz = this.taps.get(zz);
        return !!tz && (!(this.now() - tz.at >= 3e3) || (this.taps.delete(zz), !1))
      }
      busyIds() {
        const zz = new Set;
        for (const tz of [...this.taps.keys()]) this.busy(tz) && zz.add(tz);
        return zz
      }
      clear() {
        this.taps.clear()
      }
    }

    function sD(zz) {
      return {
        send: tz => zz.track(tz),
        sendUrgent: (tz, sz) => zz.track(tz, {
          urgent: !0,
          supersedes: sz
        }),
        leftAt: tz => zz.leftAt(tz),
        holdReserve: () => zz.holdUrgentReserve(),
        answerMs: MO
      }
    }

    function FD() {
      return performance.now()
    }

    function WD(zz) {
      const tz = zz.baf2RxNeed.map((zz => {
        let [tz, sz] = zz;
        return [tz, sz]
      }));
      return JSON.stringify([zz.baf2RxFormed, tz, zz.baf2RxBad, zz.baf2RxCells])
    }

    function XD(zz, tz) {
      const sz = 0 !== (tz & Nt),
        Fz = 0 !== (zz.baf2RxFlags & Nt);
      return !sz || Fz || "running" !== zz.baf2RxState && "idle" !== zz.baf2RxState ? !sz && Fz && "scram" === zz.baf2RxState && zz.baf2RxFuel > 0 ? "idle" : zz.baf2RxState : "scram"
    }

    function OD(zz) {
      return JSON.stringify([zz.baf2BatFormed, zz.baf2BatNeed, zz.baf2BatBad])
    }

    function oD(zz) {
      return zz.join(",")
    }
    class vD {
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
    class UD {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(zz, tz) {
        this.lastAt = zz, this.lastUntil = zz + tz
      }
      answered(zz) {
        return this.lastAt >= zz || zz < this.lastUntil
      }
    }
    class KD {
      constructor(zz, tz) {
        this.link = zz, this.now = tz, this.hold = new Ew, this.picked = null, this.notTaken = null
      }
      shown(zz) {
        const tz = this.hold.shown(zz);
        if (this.hold.takeUnmet() && this.picked) {
          var sz;
          const {
            plans: tz,
            ctrl: Fz,
            at: Wz
          } = this.picked;
          this.picked = null, tz.unpredict(Fz), null === (sz = this.notTaken) || void 0 === sz || sz.call(this, zz, Wz)
        }
        return tz
      }
      pendingFor(zz) {
        return this.hold.pendingFor(zz)
      }
      gb(zz, tz, sz) {
        zz.predictSize(tz, sz), this.picked = {
          plans: zz,
          ctrl: tz,
          at: this.now()
        };
        const Fz = this.link.send(ut(tz, "plan", ...sz));
        this.hold.set(sz, new Vw(Fz, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class uD {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FD;
        this.plans = zz, this.readInterior = tz, this.link = sz, this.now = Fz, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new fw, this.throttle = void 0, this.oneShots = void 0, this.listeners = new vD, this.redraw = null, this.releaseReserve = null, this.size = new KD(sz, Fz), this.oneShots = new tD(Fz), this.throttle = new pw((zz => this.echo(this.link.send(this.command("throttle", zz)))))
      }
      set(zz) {
        !zz.baf2RxOpen && this.raw && oD(this.raw.baf2RxAt) === oD(zz.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(zz), this.Yg(zz)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(zz) {
        this.size.notTaken = zz
      }
      resize(zz) {
        this.raw && (this.size.gb(this.plans, this.raw.baf2RxAt, zz), this.Yg(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const zz = this.raw.baf2RxAt;
        this.plans.setStarter(zz, !this.plans.showsStarter(zz)), this.Yg(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Yg(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Yg(this.raw)
      }
      send(zz) {
        if (this.raw) {
          for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
          this.link.send(this.command(zz, ...sz))
        }
      }
      tap(zz, tz) {
        this.raw && this.oneShots.tap(zz, function(zz, tz) {
          if ("start" === zz) return zz => 0 === (zz.baf2RxFlags & Nt);
          if ("odConfirm" === zz) return zz => 0 !== (zz.baf2RxFlags & bt);
          const sz = WD(tz);
          return zz => WD(zz) !== sz
        }(zz, this.raw), tz) && ("start" === zz && (this.startedAt = this.now()), this.Yg(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(Nt, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(zz, tz) {
        if (!this.raw) return;
        const sz = zz === Nt ? this.command(tz ? "scram" : "start") : this.command("od", tz ? 1 : 0),
          Fz = tz && zz === Nt,
          Wz = `${Kt} ${this.raw.baf2RxAt.join(" ")} `,
          Xz = this.echo(Fz ? this.link.sendUrgent(sz, (zz => {
            const tz = zz.startsWith(Wz) ? zz.slice(Wz.length).split(" ")[0] : null;
            return "throttle" === tz || "start" === tz
          })) : this.link.send(sz));
        this.flags.set(zz, tz, Xz), Fz && this.throttle.assume(0, Xz), this.Yg(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(zz) {
        this.throttle.drag(zz), this.raw && this.Yg(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Yg(this.raw)
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
        for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
        return ut(this.raw.baf2RxAt, zz, ...sz)
      }
      echo(zz) {
        return new Vw(zz, this.link, this.link.answerMs, this.now)
      }
      Yg(zz) {
        var tz;
        this.raw = zz;
        const sz = this.flags.shown(zz.baf2RxFlags),
          Fz = {
            ...zz,
            baf2RxFlags: sz,
            baf2RxTarget: this.throttle.shown(zz.baf2RxTarget),
            baf2RxState: XD(zz, sz)
          },
          Wz = this.size.shown(Fz.baf2RxDims),
          Xz = this.throttle.pendingFor(),
          Oz = [this.throttle.pendingFor(zz.baf2RxTarget), this.flags.pendingFor(zz.baf2RxFlags), this.size.pendingFor(zz.baf2RxDims)].filter((zz => null !== zz)),
          oz = Oz.length > 0 ? Math.max(...Oz) : null,
          vz = this.oneShots.busyIds(),
          Uz = Fz.baf2RxAt;
        let Kz, uz, Nz = null,
          bz = [Math.max(0, Wz[0] - 2), Math.max(0, Wz[1] - 2), Math.max(0, Wz[2] - 2)];
        if (Fz.baf2RxFormed) {
          const [zz, tz, sz] = Fz.baf2RxDims;
          bz = [Math.max(0, zz - 2), Math.max(0, tz - 2), Math.max(0, sz - 2)], Kz = Array.from(Fz.baf2RxCells, Number), uz = `${bz.join(",")}:${Fz.baf2RxCells}`
        } else {
          var wz;
          const zz = null === (wz = this.plans.planAt(Uz)) || void 0 === wz ? void 0 : wz.box,
            tz = zz ? Ss(zz, "reactor", ...Wz) : as(Uz, 1, ...Wz, qs("reactor", Wz[0])),
            sz = this.readInterior(tz);
          Nz = Wv(bz, sz), Kz = sz, uz = `${bz.join(",")}:${sz.join("")}`
        }(null === (tz = this.looksOf) || void 0 === tz ? void 0 : tz.key) !== uz && (this.looksOf = {
          key: uz,
          looks: Kv(bz, Kz)
        }), this.view = {
          status: Fz,
          dims: Wz,
          plan: Nz,
          inner: bz,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Uz),
          odConfirmed: this.odConfirmed || 0 !== (Fz.baf2RxFlags & Pt),
          guide: this.plans.guideOn(),
          throttlePending: null !== Xz,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== oz && oz >= 5e3,
          busy: vz,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== oz || vz.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Yg(this.raw)
        }), 250))
      }
    }
    class ND {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FD;
        this.plans = zz, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new vD, this.redraw = null, this.size = new KD(tz, sz), this.oneShots = new tD(sz)
      }
      set(zz) {
        !zz.baf2BatOpen && this.view && oD(this.view.status.baf2BatAt) === oD(zz.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(zz), this.Yg(zz)
      }
      tap(zz, tz) {
        if (!this.view) return;
        const sz = OD(this.view.status);
        this.oneShots.tap(zz, (zz => OD(zz) !== sz), tz) && this.Yg(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(zz) {
        this.size.notTaken = zz
      }
      resize(zz) {
        this.view && (this.size.gb(this.plans, this.view.status.baf2BatAt, zz), this.Yg(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Yg(this.view.status)
      }
      subscribe(zz) {
        return this.listeners.subscribe(zz)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Yg(zz) {
        const tz = this.size.shown(zz.baf2BatDims),
          sz = this.oneShots.busyIds();
        this.view = {
          status: zz,
          dims: tz,
          au: Jv(tz, zz.baf2BatDims) ? zz.baf2BatCapacity : bv(...tz),
          guide: this.plans.guideOn(),
          busy: sz
        }, this.listeners.notify(), sz.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Yg(this.view.status)
        }), 250))
      }
    }
    const bD = "buildAFactory2Game:";

    function wD() {
      var zz;
      const tz = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!tz) return null;
      const sz = tz.querySelector(".ExitButton");
      return function(zz, tz) {
        const sz = tz ? tz.left - 8 : zz.right;
        return {
          left: zz.left,
          top: zz.top,
          width: Math.max(0, sz - zz.left),
          height: zz.height
        }
      }(tz.getBoundingClientRect(), null !== (zz = null === sz || void 0 === sz ? void 0 : sz.getBoundingClientRect()) && void 0 !== zz ? zz : null)
    }
    const DD = (0, Fz.memo)((function(zz) {
      let {
        store: tz
      } = zz;
      const {
        t: sz
      } = (0, GW.B)(), [Wz, Xz] = (0, Fz.useState)((() => tz.get())), [Oz, oz] = (0, Fz.useState)((() => performance.now()));
      (0, Fz.useEffect)((() => (Xz(tz.get()), tz.subscribe((() => {
        Xz(tz.get()), oz(performance.now())
      })))), [tz]);
      const {
        alarm: vz,
        boomAt: Uz
      } = Wz, Kz = null !== vz && null !== vz.secs, [uz, Nz] = (0, Fz.useState)(null);
      (0, Fz.useEffect)((() => {
        if (!Kz) return;
        Nz(wD());
        const zz = setInterval((() => {
          oz(performance.now()), Nz(wD())
        }), 250);
        return () => {
          clearInterval(zz)
        }
      }), [Kz]);
      const [bz, wz] = (0, Fz.useState)(!1);
      return (0, Fz.useEffect)((() => {
        if (Uz === -1 / 0) return;
        wz(!0);
        const zz = setTimeout((() => {
          wz(!1)
        }), 1300);
        return () => {
          clearTimeout(zz)
        }
      }), [Uz]), (0, eX.jsxs)(eX.Fragment, {
        children: [null !== vz && (0, eX.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: sz(vz.hot ? `${bD}rxAlarmSiren` : `${bD}rxAlarmDamaged`, {
            amount: String(vz.damage)
          })
        }), null !== vz && null !== vz.secs && (0, eX.jsx)("div", {
          className: uz ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== uz && void 0 !== uz ? uz : void 0,
          "aria-live": "assertive",
          children: sz(`${bD}rxAlarmCountdown`, {
            amount: String((Dz = vz.secs, gz = Oz - vz.receivedAt, Math.max(1, Math.ceil(Dz - gz / 1e3))))
          })
        }), bz && (0, eX.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Dz, gz
    }));
    class gD {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      nB(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const sz = zz.baf2RxAlarmAt.join(",");
        let Fz = this.snapshot.boomAt;
        if (zz.baf2RxAlarmBoom) this.byReactor.delete(sz), Fz = tz;
        else if (zz.baf2RxAlarmDamage <= 0) this.byReactor.delete(sz);
        else {
          var Wz;
          this.byReactor.set(sz, {
            damage: zz.baf2RxAlarmDamage,
            secs: null !== (Wz = zz.baf2RxAlarmSecs) && void 0 !== Wz ? Wz : null,
            hot: !0 === zz.baf2RxAlarmHot,
            receivedAt: tz
          })
        }
        this.Yg(Fz)
      }
      retain(zz) {
        let tz = !1;
        for (const sz of [...this.byReactor.keys()]) zz.has(sz) || (this.byReactor.delete(sz), tz = !0);
        tz && this.Yg(this.snapshot.boomAt)
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
      Yg(zz) {
        let tz = null;
        for (const sz of this.byReactor.values())(!tz || sz.damage > tz.damage) && (tz = sz);
        this.snapshot = {
          alarm: tz,
          boomAt: zz
        };
        for (const sz of this.listeners) sz()
      }
    }
    const HD = {
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

    function BD(zz) {
      return [zz[0], zz[1], zz[2]]
    }

    function PD(zz) {
      return `${zz[0]},${zz[1]},${zz[2]}`
    }
    class rD {
      constructor(zz) {
        if (this.plans = zz, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var zz;
            return {
              active: this.glows.flatMap((zz => {
                let {
                  record: tz
                } = zz;
                return tz ? [tz] : []
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
      check(zz, tz, sz) {
        const Fz = new Set(tz.map((zz => PD(zz.box.ctrl))));
        for (const Oz of function(zz, tz) {
            const sz = [],
              Fz = new Map(zz);
            zz.clear();
            for (const Wz of tz) {
              const tz = Kw(Wz.box.ctrl),
                Xz = Wz.formed ? Wz.level : 0;
              zz.set(tz, Xz), Xz > 0 && 0 === Fz.get(tz) && sz.push(Wz)
            }
            return sz
          }(this.levels, this.plans.all())) Fz.has(PD(Oz.box.ctrl)) && this.show(zz, Oz, "on", sz);
        const Wz = this.plans.lastFormed();
        if (null === Wz || Wz.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Wz.receivedAt;
        const Xz = function(zz, tz) {
          var sz;
          const Fz = Kw(zz);
          return null !== (sz = tz.find((zz => Kw(zz.box.ctrl) === Fz))) && void 0 !== sz ? sz : null
        }(Wz.ctrl, tz);
        return Xz && this.show(zz, Xz, "formed", sz), Xz
      }
      fade(zz, tz) {
        0 !== this.glows.length && (this.glows = this.glows.filter((sz => {
          let {
            mesh: Fz,
            glow: Wz,
            startMs: Xz,
            record: Oz
          } = sz;
          const oz = (tz - Xz) / HD[Wz].ms;
          return oz >= 1 ? (zz.disposeGameMesh(Fz), Oz && (Oz.endMs = tz), !1) : (zz.setGameMesh(Fz, {
            visibility: "formed" === Wz ? 1 - oz : Math.sin(Math.PI * oz)
          }), !0)
        })))
      }
      dispose(zz) {
        for (const {
            mesh: sz
          }
          of this.glows) zz.disposeGameMesh(sz);
        this.glows = [], this.levels.clear();
        const tz = "undefined" !== typeof window ? window : null;
        (null === tz || void 0 === tz ? void 0 : tz.baf2Glows) === this.devAccessor && delete tz.baf2Glows
      }
      show(zz, tz, sz, Fz) {
        const {
          lo: Wz,
          hi: Xz
        } = Mv(tz.box);
        let Oz = null;
        this.devLog && (Oz = {
          glow: sz,
          ctrl: BD(tz.box.ctrl),
          lo: BD(Wz),
          hi: BD(Xz),
          startMs: Fz,
          endMs: null
        }, this.devLog.push(Oz), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(zz, sz, dv(Wz, Xz, HD[sz].thick)),
          glow: sz,
          startMs: Fz,
          record: Oz
        })
      }
      build(zz, tz, sz) {
        const Fz = gw(zz, sz, {
          rgb: HD[tz].colour,
          alpha: 1
        });
        return zz.setGameMesh(Fz, {
          visibility: 0
        }), Fz
      }
    }
    const YD = 1 / .6,
      xD = {
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
        blendMode: ho.f.Standard,
        soft: !0
      },
      mD = {
        ...xD,
        size: [.25, .4],
        count: 2
      };

    function JD(zz) {
      return {
        colours: [zz, zz],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: ho.f.Add,
        soft: !1
      }
    }
    const ID = JD([150, 225, 255]),
      CD = JD([185, 145, 255]),
      eD = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function ZD(zz) {
      const tz = At[zz];
      return null === tz.fuelSlot || Xs(tz) ? eD.includes(zz) ? CD : ID : xD
    }
    const GD = {
        kind: "smokePuff"
      },
      TD = [.2, .025, .2];

    function cD(zz, tz) {
      const [
        [sz, Fz, Wz],
        [Xz, Oz, oz]
      ] = zz.colours;
      return {
        texture: zz.soft ? GD : "square_particle",
        au: tz,
        minLifeTime: zz.life[0] / YD,
        maxLifeTime: zz.life[1] / YD,
        minEmitPower: zz.power[0] * YD,
        maxEmitPower: zz.power[1] * YD,
        minSize: zz.size[0],
        maxSize: zz.size[1],
        emitRate: 0,
        gravity: [0, zz.lift * YD * YD, 0],
        dir1: [-zz.spread, 1, -zz.spread],
        dir2: [zz.spread, 1, zz.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [sz, Fz, Wz, zz.alpha],
          maxColor: [Xz, Oz, oz, zz.alpha]
        }, {
          timeFraction: 1,
          minColor: [sz, Fz, Wz, 0],
          maxColor: [Xz, Oz, oz, 0]
        }],
        blendMode: zz.blendMode
      }
    }
    class jD {
      constructor(zz) {
        this.fixed = zz, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(zz, tz, sz) {
        var Fz;
        if (sz === this.lastFrame) return !1;
        this.lastFrame = sz;
        const Wz = this.at;
        Wz[0] = tz[0] + .5, Wz[1] = tz[1] + 1.025, Wz[2] = tz[2] + .5;
        const Xz = null !== (Fz = this.fixed) && void 0 !== Fz ? Fz : oz() ? mD : xD;
        let Oz = this.particles.get(Xz);
        return Oz || (Oz = zz.createParticles(function(zz) {
          return cD(zz, Math.ceil(12 * zz.count * zz.life[1]) + zz.count)
        }(Xz), {
          pos: Wz,
          half: TD
        }), this.particles.set(Xz, Oz)), Oz.moveTo(Wz), Oz.emit(Xz.count), !0
      }
      dispose() {
        for (const zz of this.particles.values()) zz.stop();
        this.particles.clear()
      }
    }
    class AD {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(zz) {
        this.indexed = !0;
        for (const tz of et) {
          const sz = ZD(tz);
          for (let Fz = 1; Fz <= 4; Fz++) {
            const Wz = zz.blockNameToBlockId(`${tz}|meta|rot${Fz}|Running`, !0);
            if (null === Wz) continue;
            let Xz = this.pufferIndexByStyle.get(sz);
            void 0 === Xz && (Xz = this.pufferList.push(new jD(sz === xD ? null : sz)) - 1, this.pufferIndexByStyle.set(sz, Xz)), this.pufferIndexById[Wz] = Xz + 1
          }
        }
      }
      onAfterRender(zz, tz) {
        this.indexed || this.index(zz);
        const sz = performance.now(),
          Fz = 0 === this.lastMs ? 0 : Math.min(sz - this.lastMs, 250) / 1e3;
        this.lastMs = sz, this.frame++, zz.particlesEnabled() ? (this.scan(zz, tz), this.puff(zz, Fz)) : this.sources = []
      }
      dispose() {
        for (const zz of this.pufferList) zz.dispose();
        this.sources = [], this.found = []
      }
      scan(zz, tz) {
        0 === this.scanRow && (this.origin = [Math.floor(tz[0]) - 12, Math.floor(tz[1]) - 6, Math.floor(tz[2]) - 12]);
        const sz = Math.min(this.scanRow + 16, 325),
          [Fz, Wz, Xz] = this.origin,
          Oz = this.hits;
        Oz.length = 0;
        for (let oz = this.scanRow; oz < sz; oz++) {
          const tz = Fz + oz % 25,
            sz = Wz + Math.floor(oz / 25);
          zz.scanBlocks(tz, sz, Xz, tz + 1, sz + 1, Xz + 25, this.pufferIndexById, Oz)
        }
        for (let oz = 0; oz < Oz.length; oz += 4) {
          const zz = Oz[oz + 3];
          this.found.push({
            pos: [Oz[oz], Oz[oz + 1], Oz[oz + 2]],
            yK: zz,
            puffer: this.pufferList[this.pufferIndexById[zz] - 1]
          })
        }
        this.scanRow = sz, 325 === sz && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(zz, tz) {
        const sz = this.sources.length;
        if (0 !== sz) {
          this.budget = Math.min(this.budget + Math.min(sz / 1.2, 12) * tz, 2);
          for (let tz = 0; tz < sz && this.budget >= 1; tz++) {
            const tz = this.sources[this.cursor % sz];
            this.cursor = (this.cursor + 1) % sz, zz.getBlockId(tz.pos[0], tz.pos[1], tz.pos[2]) === tz.yK && (tz.puffer.puff(zz, tz.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const yD = {
        ...JD([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      MD = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function dD(zz) {
      return 0 === zz.spots.length ? 0 : Math.min(1 * zz.level, 4)
    }

    function hD(zz) {
      return 0 === zz.glass.length ? 0 : Math.min(.75 * zz.level, 3)
    }

    function QD(zz) {
      return `${zz.ctrl.join(",")}:${zz.rot}:${zz.cu},${zz.cv}:${zz.w},${zz.h},${zz.d}`
    }

    function kD(zz, tz) {
      const sz = tz.w - 2,
        Fz = tz.h - 2,
        Wz = tz.d - 2,
        Xz = [];
      for (let Oz = 0; Oz < sz * Fz * Wz; Oz++) {
        const oz = Oz % sz,
          vz = Math.floor(Oz / sz) % Wz,
          Uz = Math.floor(Oz / (sz * Wz));
        if (oz > 0 && oz < sz - 1 && vz > 0 && vz < Wz - 1 && Uz > 0 && Uz < Fz - 1) continue;
        const Kz = tF(tz, XF(tz, Oz)),
          uz = yw(zz, Kz);
        if (null !== uz && "Fuel Rod" === As(uz))
          for (const tz of MD) {
            const sz = [Kz[0] + tz[0], Kz[1] + tz[1], Kz[2] + tz[2]];
            LD(zz, sz) && Xz.push(lD(sz, tz))
          }
      }
      return Xz
    }

    function iD(zz, tz) {
      const {
        lo: sz,
        hi: Fz
      } = Mv(tz), Wz = [];
      for (let Xz = sz[0]; Xz < Fz[0]; Xz++)
        for (let tz = sz[1]; tz < Fz[1]; tz++) {
          const Oz = Xz === sz[0] || Xz === Fz[0] - 1 || tz === sz[1] || tz === Fz[1] - 1 ? 1 : Math.max(1, Fz[2] - 1 - sz[2]);
          for (let oz = sz[2]; oz < Fz[2]; oz += Oz) {
            const Oz = [Xz, tz, oz];
            if (!LD(zz, Oz)) continue;
            const vz = Xz === sz[0] ? MD[1] : Xz === Fz[0] - 1 ? MD[0] : oz === sz[2] ? MD[5] : oz === Fz[2] - 1 ? MD[4] : tz === sz[1] ? MD[3] : MD[2];
            Wz.push(lD(Oz, vz))
          }
        }
      return Wz
    }

    function LD(zz, tz) {
      const sz = yw(zz, tz);
      return null !== sz && "Reactor Glass" === As(sz)
    }

    function lD(zz, tz) {
      return [
        [zz[0] + .5 + .55 * tz[0], zz[1] + .5 + .55 * tz[1], zz[2] + .5 + .55 * tz[2]],
        [0 === tz[0] ? .4 : .02, 0 === tz[1] ? .4 : .02, 0 === tz[2] ? .4 : .02]
      ]
    }
    class nD {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(zz, tz, sz, Fz) {
        const Wz = [],
          Xz = new Set;
        for (const Uz of tz) {
          var Oz, oz, vz;
          const {
            box: tz
          } = Uz;
          if ("reactor" !== Uz.kind || Uz.level <= 0 || (tz.ctrl[0] - sz[0]) ** 2 + (tz.ctrl[1] - sz[1]) ** 2 + (tz.ctrl[2] - sz[2]) ** 2 > 576) continue;
          const Kz = QD(tz);
          Xz.add(Kz);
          let uz = this.spots.get(Kz);
          if ((!uz || Fz - uz.at > 3e3) && (uz = {
              at: Fz,
              spots: kD(zz, tz),
              glass: iD(zz, tz)
            }, this.spots.set(Kz, uz)), 0 === uz.spots.length && 0 === uz.glass.length) continue;
          const Nz = this.sparking.find((zz => zz.key === Kz));
          Wz.push({
            key: Kz,
            level: Uz.level,
            spots: uz.spots,
            glass: uz.glass,
            budget: null !== (Oz = null === Nz || void 0 === Nz ? void 0 : Nz.budget) && void 0 !== Oz ? Oz : 0,
            cursor: null !== (oz = null === Nz || void 0 === Nz ? void 0 : Nz.cursor) && void 0 !== oz ? oz : 0,
            glassBudget: null !== (vz = null === Nz || void 0 === Nz ? void 0 : Nz.glassBudget) && void 0 !== vz ? vz : 0
          })
        }
        for (const Uz of this.spots.keys()) Xz.has(Uz) || this.spots.delete(Uz);
        this.sparking = Wz
      }
      emit(zz, tz, sz) {
        var Fz;
        if (0 === this.sparking.length || !zz.particlesEnabled() || sz === this.lastFrame) return;
        this.lastFrame = sz;
        let Wz = 0,
          Xz = 0;
        for (const wz of this.sparking) Wz += dD(wz), Xz += hD(wz);
        const Oz = Wz > 8 ? 8 / Wz : 1,
          oz = Xz > 6 ? 6 / Xz : 1;
        let vz, Uz = null,
          Kz = null;
        for (const wz of this.sparking) wz.budget = Math.min(wz.budget + dD(wz) * Oz * tz, 2), wz.budget >= 1 && (!Uz || wz.budget > Uz.budget) && (Uz = wz), wz.glassBudget = Math.min(wz.glassBudget + hD(wz) * oz * tz, 2), wz.glassBudget >= 1 && (!Kz || wz.glassBudget > Kz.glassBudget) && (Kz = wz);
        if (Uz) Uz.budget--, vz = Uz.spots[Uz.cursor++ % Uz.spots.length];
        else {
          if (!Kz) return;
          Kz.glassBudget--, vz = Kz.glass[Math.floor(Math.random() * Kz.glass.length)]
        }
        const [uz, Nz] = vz, bz = null !== (Fz = this.emitter) && void 0 !== Fz ? Fz : this.create(zz, uz, Nz);
        bz.moveTo(uz, Nz), bz.emit(yD.count)
      }
      dispose() {
        var zz;
        null === (zz = this.emitter) || void 0 === zz || zz.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(zz, tz, sz) {
        const Fz = Math.ceil(14 * yD.count * yD.life[1]) + yD.count;
        return this.emitter = zz.createParticles(cD(yD, Fz), {
          pos: tz,
          half: sz
        }), this.emitter
      }
    }
    const aD = [2, 3.2],
      qD = 1 / 3,
      SD = 1 / .6,
      VD = {
        texture: GD,
        au: Math.ceil(18 * aD[1]) + 4,
        minLifeTime: aD[0] / SD,
        maxLifeTime: aD[1] / SD,
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
        blendMode: ho.f.Standard
      };
    class RD {
      constructor(zz) {
        this.plans = zz, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new nD, this.frame = 0, this.outline = new rD(zz)
      }
      onAfterRender(zz, tz, sz) {
        const Fz = performance.now(),
          Wz = 0 === this.lastMs ? 0 : Math.min(Fz - this.lastMs, 250) / 1e3;
        if (this.lastMs = Fz, this.outline.fade(zz, Fz), this.puff(zz, Wz, sz), this.sparks.emit(zz, Wz, this.frame++), Fz - this.lastCheckMs < 150) return;
        this.lastCheckMs = Fz;
        const Xz = this.plans.all().filter((zz => zz.formed && pD(zz.box.ctrl, sz) <= 4096));
        this.plumes = Xz.filter((zz => "reactor" === zz.kind && zz.level > 0)).map((zz => ({
          box: zz.box,
          level: zz.level
        }))), this.updateHums(zz, tz, Xz, sz), this.sparks.update(zz, Xz, sz, Fz), this.chimeFormed(zz, tz, Xz, Fz)
      }
      dispose(zz) {
        var tz;
        this.outline.dispose(zz), null === (tz = this.steam) || void 0 === tz || tz.dispose(), this.steam = null, this.sparks.dispose();
        for (const sz of this.hums.values()) sz.stop();
        this.hums.clear()
      }
      chimeFormed(zz, tz, sz, Fz) {
        const Wz = this.outline.check(zz, sz, Fz);
        Wz && zz.playSound(tz, "exp_levelup", .6, 1, {
          fW: [Wz.box.ctrl[0] + .5, Wz.box.ctrl[1], Wz.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(zz, tz, sz) {
        const Fz = this.plumes;
        if (0 === Fz.length || !zz.particlesEnabled()) return void(this.plumeBudget = 0);
        const Wz = Fz.reduce(((zz, tz) => zz + 3 * tz.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Wz * tz, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Xz = this.plumeCursor % (Wz / 3);
        this.plumeCursor++;
        let Oz = Fz[0];
        for (const uz of Fz) {
          if (Xz < uz.level) {
            Oz = uz;
            break
          }
          Xz -= uz.level
        }
        const {
          lo: oz,
          hi: vz
        } = Mv(Oz.box);
        if (function(zz, tz, sz) {
            const Fz = Math.max(zz[0] - sz[0], 0, sz[0] - tz[0]),
              Wz = Math.max(zz[2] - sz[2], 0, sz[2] - tz[2]);
            return Math.hypot(Fz, sz[1] - tz[1], Wz)
          }(oz, vz, sz) < 6 && Math.random() > qD) return;
        const Uz = [(oz[0] + vz[0]) / 2, vz[1] + .05, (oz[2] + vz[2]) / 2],
          Kz = [(vz[0] - oz[0]) / 2 - .5, .05, (vz[2] - oz[2]) / 2 - .5];
        this.steam ??= zz.createParticles(VD, {
          pos: Uz,
          half: Kz
        }), this.steam.moveTo(Uz, Kz), this.steam.emit(1)
      }
      updateHums(zz, tz, sz, Fz) {
        const Wz = new Map;
        for (const Oz of sz) "reactor" === Oz.kind && Oz.level > 0 && pD(Oz.box.ctrl, Fz) <= 576 && Wz.set(`${Xz=Oz.box.ctrl,`${Xz[0]},${Xz[1]},${Xz[2]}`}:${Oz.level}`, Oz);
        var Xz;
        for (const [Oz, oz] of this.hums) Wz.has(Oz) || (oz.stop(), this.hums.delete(Oz));
        for (const [Oz, oz] of Wz) {
          if (this.hums.has(Oz)) continue;
          const {
            lo: sz,
            hi: Fz
          } = Mv(oz.box), Wz = [(sz[0] + Fz[0]) / 2, sz[1], (sz[2] + Fz[2]) / 2], Xz = zz.playSound(tz, "rocketEngineLoop", .08 + .06 * oz.level, .55, {
            fW: Wz,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Xz && this.hums.set(Oz, Xz)
        }
      }
    }

    function pD(zz, tz) {
      return (zz[0] - tz[0]) ** 2 + (zz[1] - tz[1]) ** 2 + (zz[2] - tz[2]) ** 2
    }
    class fD {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      nB(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Fz = [zz.baf2BombAt[0], zz.baf2BombAt[1], zz.baf2BombAt[2]],
          Wz = zz.baf2BombR;
        if (zz.baf2BombBoom) {
          const zz = Math.hypot(tz[0] - Fz[0], tz[1] - Fz[1], tz[2] - Fz[2]);
          this.Yg({
            fuse: null,
            blast: {
              at: Fz,
              r: Wz,
              receivedAt: sz,
              distance: zz,
              flash: zz <= 3 * Wz
            }
          })
        } else this.Yg({
          ...this.snapshot,
          fuse: zz.baf2BombMs > 0 ? {
            at: Fz,
            r: Wz,
            endsAt: sz + zz.baf2BombMs
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
      Yg(zz) {
        this.snapshot = zz;
        for (const tz of this.listeners) tz()
      }
    }
    const ED = (0, Fz.memo)((function(zz) {
      var tz;
      let {
        store: sz
      } = zz;
      const {
        t: Wz
      } = (0, GW.B)(), [Xz, Oz] = (0, Fz.useState)((() => sz.get())), [oz, vz] = (0, Fz.useState)((() => performance.now()));
      (0, Fz.useEffect)((() => (Oz(sz.get()), sz.subscribe((() => {
        Oz(sz.get()), vz(performance.now())
      })))), [sz]);
      const {
        fuse: Uz,
        blast: Kz
      } = Xz;
      (0, Fz.useEffect)((() => {
        if (!Uz) return;
        const zz = setInterval((() => {
          vz(performance.now())
        }), 250);
        return () => {
          clearInterval(zz)
        }
      }), [Uz]);
      const [uz, Nz] = (0, Fz.useState)(!1);
      (0, Fz.useEffect)((() => {
        if (null === Kz || void 0 === Kz || !Kz.flash) return;
        Nz(!0);
        const zz = setTimeout((() => {
          Nz(!1)
        }), 2500);
        return () => {
          clearTimeout(zz)
        }
      }), [Kz]);
      const bz = Uz ? function(zz, tz) {
        return zz.endsAt <= tz ? 0 : Math.ceil((zz.endsAt - tz) / 1e3)
      }(Uz, oz) : 0;
      return (0, eX.jsxs)(eX.Fragment, {
        children: [bz > 0 && (0, eX.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Wz("buildAFactory2Game:bombCountdown", {
            amount: String(bz),
            radius: String(null !== (tz = null === Uz || void 0 === Uz ? void 0 : Uz.r) && void 0 !== tz ? tz : 0)
          })
        }), uz && (0, eX.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function zg(zz) {
      const tz = Math.min(4, Math.max(1, zz / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * zz / 4)),
        capSpread: Math.min(5 * zz / 8, 24 * tz),
        capThick: 6 * tz,
        stemHalfWidth: 3 * tz,
        puffScale: tz
      }
    }
    class tg {
      constructor() {
        this.po = !1
      }
      hold(zz) {
        zz.getCameraFar() < 1e3 && (zz.setCameraFar(1e3), this.po = !0)
      }
      release(zz) {
        this.po && (this.po = !1, zz.setCameraFar(null))
      }
    }
    const sg = 1 / .6,
      Fg = [.2, .1, .2],
      Wg = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Xg = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: ho.f.Standard,
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
      Og = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: ho.f.Standard,
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
      og = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: ho.f.Standard,
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
      vg = {
        texture: GD,
        au: Math.ceil(120) + 4,
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
        blendMode: ho.f.Add
      };
    class Ug {
      constructor(zz) {
        this.store = zz, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new tg, this.timers = []
      }
      onAfterRender(zz, tz) {
        const sz = performance.now(),
          Fz = 0 === this.lastMs ? 0 : Math.min(sz - this.lastMs, 250) / 1e3;
        this.lastMs = sz;
        const {
          fuse: Wz,
          blast: Xz
        } = this.store.get();
        null !== Xz && Xz !== this.shownBlast && (this.shownBlast = Xz, this.startBlast(zz, tz, Xz, sz));
        const Oz = zz.particlesEnabled();
        null !== Wz && Wz.endsAt > sz && Oz ? this.emitBeacon(zz, Wz, Fz, sz) : this.beaconBudget = 0, null !== this.cloud && (sz - this.cloud.startMs > 33e3 ? this.disposeCloud(zz) : (this.far.hold(zz), Oz && this.emitCloud(zz, Fz, sz)))
      }
      dispose(zz) {
        var tz;
        null === (tz = this.beacon) || void 0 === tz || tz.dispose(), this.beacon = null, this.disposeCloud(zz);
        for (const sz of this.timers) clearTimeout(sz);
        this.timers.length = 0
      }
      emitBeacon(zz, tz, sz, Fz) {
        const Wz = tz.endsAt - Fz < 5e3 ? 350 : 1e3,
          Xz = .5 + .5 * Math.sin(2 * Math.PI * Fz / Wz);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Xz * sz, 4), this.beaconBudget < 1) return;
        const Oz = Math.floor(this.beaconBudget);
        this.beaconBudget -= Oz;
        const [oz, vz, Uz] = tz.at, Kz = [oz + .5, vz + 1.1, Uz + .5];
        this.beacon ??= zz.createParticles(vg, {
          pos: Kz,
          half: Fg
        }), this.beacon.moveTo(Kz), this.beacon.emit(Oz)
      }
      startBlast(zz, tz, sz, Fz) {
        var Wz;
        null === (Wz = this.beacon) || void 0 === Wz || Wz.dispose(), this.beacon = null, this.disposeCloud(zz);
        const Xz = (0, yo.isMobile)() ? .5 : 1;
        this.streams = [Xg, Og, og].map((zz => {
          const tz = Math.round(zz.count * Xz);
          return {
            spec: zz,
            particles: null,
            rate: tz / ((zz.toMs - zz.fromMs) / 1e3),
            budget: 0,
            left: tz
          }
        })), this.cloud = {
          blast: sz,
          startMs: Fz
        };
        const Oz = Math.max(.25, 1 - sz.distance / (6 * sz.r)),
          oz = sz.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [sz, Fz, Wz] of Wg) ug(zz, tz, sz, Oz * Fz, Wz)
        }), oz))
      }
      emitCloud(zz, tz, sz) {
        const {
          blast: Fz,
          startMs: Wz
        } = this.cloud, Xz = sz - Wz, [Oz, oz, vz] = Fz.at, Uz = zg(Fz.r);
        for (const Kz of this.streams) {
          const {
            spec: sz
          } = Kz;
          if (Kz.left <= 0 || Xz < sz.fromMs) continue;
          Kz.budget += Kz.rate * tz;
          const Wz = Math.min(Math.floor(Kz.budget), Kz.left);
          if (Wz < 1) continue;
          Kz.budget -= Wz, Kz.left -= Wz;
          const uz = Kz.particles ??= this.createStream(zz, sz, Fz);
          if (sz === Xg) {
            const zz = Uz.stemHalfWidth;
            uz.moveTo([Oz, oz + 1, vz], [zz, 1, zz])
          } else if (sz === Og) {
            const zz = Uz.capSpread * Math.min(1, (Xz - sz.fromMs) / 3e3),
              tz = Math.sqrt(Math.random()),
              Fz = 2 * Math.random() * Math.PI,
              Wz = Math.cos(Fz) * tz,
              Kz = Math.sin(Fz) * tz,
              Nz = Oz + Wz * zz,
              bz = vz + Kz * zz,
              wz = Uz.capThick,
              Dz = oz + Uz.capHeight + wz * (1 - tz * tz) * 2;
            uz.setDirections([.7 * Wz, .05, .7 * Kz], [Wz, .2, Kz]), uz.moveTo([Nz, Dz, bz], [wz, wz, wz])
          } else {
            this.ringAngle += 2.39996;
            const zz = Math.cos(this.ringAngle),
              tz = Math.sin(this.ringAngle);
            uz.setDirections([zz, .05, tz], [zz, .1, tz]), uz.moveTo([Oz + 2 * zz, oz + .5, vz + 2 * tz], [0, .5, 0])
          }
          uz.emit(Wz)
        }
      }
      createStream(zz, tz, sz) {
        const {
          r: Fz
        } = sz, Wz = Math.max(tz.life[0], Fz / 25), Xz = tz === og ? [.9 * Wz, Wz] : tz.life, Oz = zg(Fz), oz = tz === og ? 1 : Oz.puffScale, vz = {
          texture: GD,
          au: tz.count + 4,
          minLifeTime: Xz[0] / sg,
          maxLifeTime: Xz[1] / sg,
          minSize: tz.size[0] * oz,
          maxSize: tz.size[1] * oz,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, tz.gravity * sg * sg, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: tz.from[0],
            maxColor: tz.from[1]
          }, {
            timeFraction: .6,
            minColor: Kg(tz.from[0], tz.to[0]),
            maxColor: Kg(tz.from[1], tz.to[1])
          }, {
            timeFraction: 1,
            minColor: tz.to[0],
            maxColor: tz.to[1]
          }],
          blendMode: tz.blend
        };
        if (tz === Xg) {
          const zz = Oz.capHeight / ((Xz[0] + Xz[1]) / 2);
          vz.minEmitPower = .9 * zz * sg, vz.maxEmitPower = 1.05 * zz * sg, vz.dir1 = [-.1, 1, -.1], vz.dir2 = [.1, 1, .1]
        } else tz === Og ? (vz.minEmitPower = 1.2, vz.maxEmitPower = 2, vz.dir1 = [-1, .05, -1], vz.dir2 = [1, .2, 1]) : (vz.minEmitPower = 39.583333333333336, vz.maxEmitPower = 41.66666666666667, vz.dir1 = [1, 0, 0], vz.dir2 = [1, 0, 0]);
        return zz.createParticles(vz, {
          pos: sz.at
        })
      }
      disposeCloud(zz) {
        for (const sz of this.streams) {
          var tz;
          null === (tz = sz.particles) || void 0 === tz || tz.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(zz)
      }
    }

    function Kg(zz, tz) {
      return [(zz[0] + tz[0]) / 2, (zz[1] + tz[1]) / 2, (zz[2] + tz[2]) / 2, .75 * zz[3]]
    }

    function ug(zz, tz, sz, Fz, Wz) {
      try {
        zz.playSound(tz, sz, Fz, Wz)
      } catch (Xz) {
        console.error(Xz)
      }
    }
    const Ng = {
        au: 720,
        perS: 100
      },
      bg = {
        au: 320,
        perS: 44
      };
    class wg {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(zz, tz) {
        this.zone = {
          centre: [...zz.centre],
          r: zz.r,
          band: zz.band ? [zz.band[0], zz.band[1]] : void 0
        }, this.endsAt = tz
      }
      stop() {
        this.zone = null
      }
      nB(zz, tz) {
        const {
          baf2FalloutMs: sz,
          baf2FalloutAt: Fz,
          baf2FalloutR: Wz,
          baf2FalloutY: Xz
        } = zz;
        sz > 0 && Fz && void 0 !== Wz ? this.start({
          centre: Fz,
          r: Wz,
          band: Xz
        }, tz + sz) : this.stop()
      }
      perS(zz, tz, sz) {
        const Fz = this.zone;
        if (!Fz) return 0;
        const Wz = this.endsAt - zz;
        return Wz <= 0 ? (this.zone = null, 0) : Fz.band && (tz[1] < Fz.band[0] || tz[1] > Fz.band[1]) || Math.hypot(tz[0] - Fz.centre[0], tz[2] - Fz.centre[2]) > Fz.r ? 0 : sz.perS * Math.min(1, Wz / 5e3)
      }
    }
    const Dg = [5, 7],
      gg = [24, 8, 24],
      Hg = .5,
      Bg = 1 / .6,
      Pg = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class rg {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yo.isMobile)();
        this.state = new wg, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(zz) {
          return zz ? bg : Ng
        }(zz)
      }
      startFallout(zz, tz) {
        this.state.start(zz, tz)
      }
      stopFallout() {
        this.state.stop()
      }
      nB(zz) {
        this.state.nB(zz, performance.now())
      }
      onAfterRender(zz, tz) {
        var sz;
        const Fz = performance.now(),
          Wz = 0 === this.lastMs ? 0 : Math.min(Fz - this.lastMs, 250) / 1e3;
        this.lastMs = Fz;
        const Xz = this.state.perS(Fz, tz, this.tier);
        if (Xz <= 0 || !zz.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Xz * Wz, Xz / 4);
        const Oz = Math.floor(this.budget);
        if (Oz < 1) return;
        this.budget -= Oz;
        const oz = this.at;
        oz[0] = tz[0], oz[1] = tz[1] + 12, oz[2] = tz[2];
        const vz = null !== (sz = this.systems) && void 0 !== sz ? sz : this.create(zz, oz),
          Uz = this.amounts;
        Uz[0] = 0, Uz[1] = 0;
        for (let Kz = 0; Kz < Oz; Kz++) Uz[Math.random() < .3 ? 1 : 0]++;
        for (let Kz = 0; Kz < vz.length; Kz++) Uz[Kz] > 0 && (vz[Kz].moveTo(oz, gg), vz[Kz].emit(Uz[Kz]))
      }
      dispose() {
        for (const tz of null !== (zz = this.systems) && void 0 !== zz ? zz : []) {
          var zz;
          tz.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(zz, tz) {
        return this.systems = Pg.map((sz => {
          let {
            rgba: [Fz, Wz, Xz, Oz],
            share: oz
          } = sz;
          const vz = {
            texture: "square_particle",
            au: Math.ceil(this.tier.au * oz),
            minLifeTime: Dg[0] / Bg,
            maxLifeTime: Dg[1] / Bg,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Hg, -1, Hg],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Fz, Wz, Xz, 0]
            }, {
              timeFraction: .15,
              minColor: [Fz, Wz, Xz, Oz]
            }, {
              timeFraction: .8,
              minColor: [Fz, Wz, Xz, Oz]
            }, {
              timeFraction: 1,
              minColor: [Fz, Wz, Xz, 0]
            }],
            blendMode: ho.f.Standard
          };
          return zz.createParticles(vz, {
            pos: tz,
            half: gg
          })
        })), this.systems
      }
    }
    const Yg = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function xg(zz) {
      const tz = /\|rot(\d)/.exec(zz);
      return Yg[tz ? Number(tz[1]) : 1]
    }
    var mg = sz(577),
      Jg = sz(37894);
    const Ig = new Set(mg.l);

    function Cg(zz) {
      if (-2 !== zz.count) return null;
      const tz = lz(zz.item);
      return null !== tz && Ig.has(tz) ? tz : null
    }

    function eg(zz) {
      const {
        width: tz,
        height: sz
      } = (0, Jg.e)(zz).hitBoxDimensions;
      return .55 / Math.max(tz, sz)
    }

    function Zg(zz, tz, sz) {
      if (!sz) return !1;
      const Fz = zz[0] + .5 - tz[0],
        Wz = zz[1] + .5 - tz[1],
        Xz = zz[2] + .5 - tz[2];
      return Fz * Fz + Wz * Wz + Xz * Xz <= 576
    }

    function Gg(zz, tz) {
      return Math.atan2(zz[0], zz[2]) + Math.PI + tz
    }

    function Tg(zz, tz) {
      const sz = 2 * Math.PI;
      return (zz + sz * tz / 1e4) % sz
    }
    class cg {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = zz, this.now = tz, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = zz.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(zz, tz) {
        if (0 === this.farms.size) return;
        const sz = this.now(),
          Fz = Number.isNaN(this.frameMs) ? 0 : Math.min(sz - this.frameMs, 100);
        this.frameMs = sz, sz - this.checkedMs >= 1e3 && (this.checkedMs = sz, this.check(zz, tz));
        for (const Wz of this.farms.values()) Wz.shown && Wz.running && null !== Wz.model && Fz > 0 && (Wz.spin = Tg(Wz.spin, Fz), Wz.model.setPose(Wz.feet, Gg(Wz.front, Wz.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const zz of this.farms.values()) this.drop(zz);
        this.farms.clear()
      }
      sync() {
        const zz = new Set;
        for (const tz of this.labels.list()) {
          const sz = Cg(tz);
          if (null === sz) continue;
          zz.add(tz.key);
          const Fz = this.farms.get(tz.key);
          if ((null === Fz || void 0 === Fz ? void 0 : Fz.mob) === sz) continue;
          Fz && this.drop(Fz);
          const [Wz, Xz, Oz] = tz.pos;
          this.farms.set(tz.key, {
            pos: tz.pos,
            feet: [Wz + .5, Xz + 1, Oz + .5],
            mob: sz,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [tz, sz] of this.farms) zz.has(tz) || (this.drop(sz), this.farms.delete(tz));
        this.checkedMs = -1 / 0
      }
      check(zz, tz) {
        for (const sz of this.farms.values()) {
          const [Fz, Wz, Xz] = sz.pos, Oz = yw(zz, sz.pos);
          null !== Oz && As(Oz) === yz && Zg(sz.pos, tz, "Air" === yw(zz, [Fz, Wz + 1, Xz])) ? (sz.running = Oz.endsWith("|Running"), sz.front = xg(Oz), null === sz.model && (sz.model = zz.createMobModel(sz.mob, eg(sz.mob)), null === sz.model) || (sz.model.setPose(sz.feet, Gg(sz.front, sz.spin)), sz.shown || (sz.model.setVisible(!0), sz.shown = !0))) : (sz.shown && null !== sz.model && sz.model.setVisible(!1), sz.shown = !1)
        }
      }
      drop(zz) {
        var tz;
        null === (tz = zz.model) || void 0 === tz || tz.dispose(), zz.model = null, zz.shown = !1
      }
    }
    class jg {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(zz) {
        var tz;
        this.island = zz.baf2ColIsland, this.islandSite = (tz = zz.baf2ColSite) && 8 === tz.length ? {
          spawnXZ: [tz[0], tz[1]],
          coreXZ: [tz[2], tz[3]],
          minXZ: [tz[4], tz[5]],
          maxXZ: [tz[6], tz[7]]
        } : null, this.views = zz.baf2ColList.map((zz => ({
          entry: UW(zz)
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
        var tz;
        return null === (tz = this.views.find((tz => {
          let {
            entry: sz
          } = tz;
          return sz.focus[0] === zz[0] && sz.focus[1] === zz[1] + 1 && sz.focus[2] === zz[2]
        }))) || void 0 === tz ? void 0 : tz.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(zz, tz) {
        return lv(this.entries(), zz, tz)
      }
      lookSource() {
        return {
          handles: zz => DF(zz) >= 0 || gF(zz),
          line: (zz, tz) => this.lookLine(zz, tz),
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
    const Ag = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((zz => zz / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((zz => [zz, zz + 1, zz + 2, zz, zz + 2, zz + 3]))
    };

    function yg(zz, tz, sz, Fz, Wz, Xz, Oz) {
      let oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const vz = Math.cos(oz),
        Uz = Math.sin(oz),
        Kz = zz.positions.length / 3,
        {
          positions: uz,
          indices: Nz
        } = Ag;
      for (let bz = 0; bz < uz.length; bz += 3) {
        const oz = uz[bz] * Wz,
          Kz = uz[bz + 2] * Oz;
        zz.positions.push(tz + oz * vz + Kz * Uz, sz + uz[bz + 1] * Xz, Fz - oz * Uz + Kz * vz)
      }
      for (const bz of Nz) zz.indices.push(Kz + bz)
    }

    function Mg(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return tz < 1 ? {
        rgb: zz,
        alpha: tz
      } : {
        rgb: zz,
        alpha: 1,
        opaque: !0
      }
    }
    class dg {
      constructor(zz, tz) {
        this.style = zz, this.perSource = tz, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(zz) {
        this.sources = zz, 0 === zz.length && (this.budget = 0)
      }
      wN(zz, tz, sz) {
        const Fz = this.sources.length;
        if (0 !== Fz) {
          var Wz, Xz;
          this.budget = Math.min(this.budget + (Wz = Fz, Xz = this.perSource, Math.min(Wz * Xz, WU) * tz), 2);
          for (let tz = 0; tz < Fz && this.budget >= 1; tz++) {
            const tz = this.sources[this.cursor % Fz];
            this.cursor = (this.cursor + 1) % Fz;
            if (!(Math.max(Math.abs(tz.x - sz[0]), Math.abs(tz.y - sz[1]), Math.abs(tz.z - sz[2])) > 32)) return this.puff(zz, tz), void this.budget--
          }
        }
      }
      dispose() {
        var zz;
        null === (zz = this.particles) || void 0 === zz || zz.dispose(), this.particles = null, this.sources = []
      }
      puff(zz, tz) {
        let {
          x: sz,
          y: Fz,
          z: Wz,
          h: Xz,
          faces: Oz
        } = tz;
        const oz = function(zz, tz, sz, Fz, Wz) {
            const [Xz, Oz, oz] = Wz[Math.floor(Math.random() * Wz.length)], vz = .04, Uz = (zz, tz, sz) => zz > 0 ? tz + sz + vz : zz < 0 ? tz - vz : tz + .1, Kz = (zz, tz, sz) => zz > 0 ? tz + sz + vz : zz < 0 ? tz - vz : tz + sz - .1, uz = [Uz(Xz, zz, 1), Uz(Oz, tz, Fz), Uz(oz, sz, 1)], Nz = [Kz(Xz, zz, 1), Kz(Oz, tz, Fz), Kz(oz, sz, 1)];
            return {
              pos: [(uz[0] + Nz[0]) / 2, (uz[1] + Nz[1]) / 2, (uz[2] + Nz[2]) / 2],
              half: [(Nz[0] - uz[0]) / 2, (Nz[1] - uz[1]) / 2, (Nz[2] - uz[2]) / 2],
              out: [Xz, Oz, oz]
            }
          }(sz, Fz, Wz, Xz, Oz),
          {
            style: vz
          } = this,
          Uz = this.particles ??= zz.createParticles(cD(vz, Math.ceil(vz.count * WU * vz.life[1]) + 4), oz);
        Uz.moveTo(oz.pos, oz.half);
        const [Kz, uz, Nz] = oz.out, bz = vz.spread;
        Uz.setDirections([Kz - bz, .6 + uz, Nz - bz], [Kz + bz, 1 + uz, Nz + bz]), Uz.emit(vz.count)
      }
    }
    const hg = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Qg {
      constructor() {
        this.green = new dg(OU.green, sU), this.pink = new dg(OU.pink, FU), this.colliders = [], this.lastMs = 0
      }
      setSources(zz) {
        this.colliders = zz;
        const tz = [],
          sz = [];
        for (const Fz of zz) {
          const [zz, Wz, Xz] = Fz.focus;
          tz.push({
            x: zz,
            y: Wz - 1,
            z: Xz,
            h: 2,
            faces: hg
          });
          for (let tz = 0; tz < 4; tz++) {
            if (!Fz.live[tz]) continue;
            const [zz, Wz, Xz] = PF(Fz.focus, tz, UF.LASER_D), [Oz, , oz] = BF[tz], vz = hg.filter((zz => zz[0] !== Oz || zz[2] !== oz || 0 !== zz[1]));
            sz.push({
              x: zz,
              y: Wz,
              z: Xz,
              h: 1,
              faces: vz
            })
          }
        }
        this.green.setSources(tz), this.pink.setSources(sz)
      }
      onAfterRender(zz) {
        const tz = performance.now(),
          sz = 0 === this.lastMs ? 0 : Math.min(tz - this.lastMs, 250) / 1e3;
        if (this.lastMs = tz, 0 === this.colliders.length || !zz.particlesEnabled()) return;
        const Fz = zz.getCameraPosition();
        this.green.wN(zz, sz, Fz), this.pink.wN(zz, sz, Fz)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const kg = 1.04,
      ig = Mg([1, 120 / 255, 220 / 255]),
      Lg = Mg([1, .25, .25], .35);
    class lg {
      constructor(zz) {
        this.store = zz, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Qg
      }
      onAfterRender(zz) {
        this.store.version() !== this.builtVersion && this.rebuild(zz);
        const tz = performance.now();
        for (const sz of this.beams) {
          const Fz = 1 + .35 * Math.sin(tz / 700 * Math.PI * 2 + sz.phase);
          zz.setGameMesh(sz.mesh, {
            scale: [sz.alongX ? 1 : Fz, Fz, sz.alongX ? Fz : 1]
          })
        }
        this.glow.onAfterRender(zz)
      }
      dispose(zz) {
        this.clear(zz), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(zz) {
        this.clear(zz), this.builtVersion = this.store.version();
        const tz = [];
        for (const {
            entry: sz
          }
          of this.store.colliders()) sz.on && sz.live.some(Boolean) && (this.addBeams(zz, sz), tz.push(sz)), sz.blockers.length > 0 && this.addMarkers(zz, sz);
        this.glow.setSources(tz)
      }
      addBeams(zz, tz) {
        const [sz, Fz, Wz] = tz.focus, Xz = tU - .25, Oz = (.25 + tU) / 2;
        for (let oz = 0; oz < 4; oz++) {
          if (!tz.live[oz]) continue;
          const [vz, , Uz] = BF[oz], Kz = 0 !== vz, uz = {
            positions: [],
            indices: []
          };
          yg(uz, 0, 0, 0, Kz ? Xz : .2, .2, Kz ? .2 : Xz);
          const Nz = [sz + .5 + vz * Oz, Fz + .5, Wz + .5 + Uz * Oz],
            bz = zz.createGameMesh(uz, ig, Nz);
          this.meshes.push(bz), this.beams.push({
            mesh: bz,
            alongX: Kz,
            phase: oz * Math.PI / 2
          })
        }
      }
      addMarkers(zz, tz) {
        const sz = tz.blockers[0],
          Fz = {
            positions: [],
            indices: []
          };
        for (const [Wz, Xz, Oz] of tz.blockers) yg(Fz, Wz - sz[0] + .5, Xz - sz[1] + .5, Oz - sz[2] + .5, kg, kg, kg);
        this.meshes.push(zz.createGameMesh(Fz, Lg, sz))
      }
      clear(zz) {
        for (const tz of this.meshes) zz.disposeGameMesh(tz);
        this.meshes = [], this.beams = []
      }
    }
    const ng = [.56, .83, 1],
      ag = [1, .73, .08],
      qg = [1, .25, .25],
      Sg = [.85, .85, .85],
      Vg = [.3, .45, .6];

    function Rg(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Oz = Wz / 2,
        oz = Wz + Xz;
      for (const vz of [-Oz, Oz])
        for (const Wz of [-Oz, Oz]) yg(zz, tz, sz + vz, Fz + Wz, oz, Xz, Xz), yg(zz, tz + vz, sz, Fz + Wz, Xz, oz, Xz), yg(zz, tz + vz, sz + Wz, Fz, Xz, Xz, oz)
    }

    function pg(zz) {
      return tz => zz.isBlockInLoadedChunk(tz[0], tz[1], tz[2]) && 0 === zz.getBlockId(tz[0], tz[1], tz[2])
    }

    function fg(zz) {
      return zz.map((zz => {
        let {
          free: tz,
          blocked: sz,
          gaps: Fz,
          supports: Wz
        } = zz;
        return `${tz.join(";")}|${sz.join(";")}|${Fz.join(";")}|${Wz.join(";")}`
      })).join("/")
    }

    function Eg(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Xz = tz[0],
        Oz = {
          positions: [],
          indices: []
        };
      for (const [oz, vz, Uz] of tz) Rg(Oz, oz - Xz[0] + .5, vz - Xz[1] + .5, Uz - Xz[2] + .5, Fz, Wz);
      return zz.createGameMesh(Oz, sz, Xz)
    }
    class zH {
      constructor(zz) {
        this.store = zz, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(zz, tz, sz) {
        var Fz;
        const Wz = null === (Fz = zz.rtz(tz)) || void 0 === Fz ? void 0 : Fz.name;
        if (Wz !== uF && Wz !== KF) return void("" !== this.shownKey && this.show(zz, "", []));
        const Xz = performance.now();
        if (Xz - this.lastCheckMs >= 200 && (this.lastCheckMs = Xz, Wz === uF ? this.check(zz, sz) : this.preview(zz, sz)), this.pulses.length > 0) {
          const tz = 1 + .12 * Math.sin(Xz / 1e3 * 1.25 * Math.PI * 2),
            sz = [tz, tz, tz];
          for (const Fz of this.pulses) zz.setGameMesh(Fz, {
            scale: sz
          })
        }
      }
      dispose(zz) {
        this.clear(zz), this.shownKey = ""
      }
      check(zz, tz) {
        const sz = pg(zz),
          Fz = [];
        for (const {
            entry: Xz
          }
          of this.store.colliders()) {
          Xz.focus.every(((zz, sz) => Math.abs(zz + .5 - tz[sz]) <= UF.GHOST_REACH)) && Fz.push(zU(Xz, sz))
        }
        const Wz = fg(Fz);
        Wz !== this.shownKey && this.show(zz, Wz, Fz)
      }
      preview(zz, tz) {
        const sz = zz.getTargetedBlock(),
          Fz = sz ? [sz.bu[0], sz.bu[1], sz.bu[2]] : null,
          Wz = null !== Fz && Fz.every(((zz, sz) => Math.abs(zz + .5 - tz[sz]) <= 8)),
          Xz = this.store.site(),
          Oz = Wz && Xz ? function(zz, tz, sz) {
            const Fz = HF(zz);
            if (!Fz.every(tz)) return null;
            const Wz = xF(zz, sz);
            return {
              column: Fz,
              spots: zU({
                focus: Fz[1],
                lasers: [!1, !1, !1, !1],
                open: Wz,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, tz),
              fits: Wz.filter(Boolean).length >= UF.MIN_SPOTS
            }
          }(Fz, pg(zz), Xz) : null,
          oz = Oz ? [Oz.spots] : [],
          vz = Oz ? `preview ${Fz.join(",")}|${Oz.fits}|${fg(oz)}` : "";
        var Uz, Kz;
        vz !== this.shownKey && this.show(zz, vz, oz, null !== (Uz = null === Oz || void 0 === Oz ? void 0 : Oz.column) && void 0 !== Uz ? Uz : [], null === (Kz = null === Oz || void 0 === Oz ? void 0 : Oz.fits) || void 0 === Kz || Kz)
      }
      show(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Wz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(zz), this.shownKey = tz, Fz.length > 0 && this.meshes.push(Eg(zz, Fz, Mg(Wz ? Sg : qg)));
        for (const {
            free: Xz,
            blocked: Oz,
            gaps: oz,
            supports: vz
          }
          of sz) {
          for (const [tz, sz, Fz] of Xz) {
            const Wz = {
              positions: [],
              indices: []
            };
            Rg(Wz, 0, 0, 0);
            const Xz = zz.createGameMesh(Wz, Mg(ng), [tz + .5, sz + .5, Fz + .5]);
            this.meshes.push(Xz), this.pulses.push(Xz)
          }
          Oz.length > 0 && this.meshes.push(Eg(zz, Oz, Mg(ag))), oz.length > 0 && this.meshes.push(Eg(zz, oz, Mg(qg), 1.06, .07)), vz.length > 0 && this.meshes.push(Eg(zz, vz, Mg(Vg)))
        }
      }
      clear(zz) {
        for (const tz of this.meshes) zz.disposeGameMesh(tz);
        this.meshes = [], this.pulses = []
      }
    }
    class tH {
      constructor() {
        this.stored = new Map, this.po = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(zz) {
        if (!zz.baf2TermOpen) return !1;
        zz.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [tz, sz] of zz.baf2TermItems) sz > 0 ? this.stored.set(tz, sz) : this.stored.delete(tz);
        if (zz.baf2TermHeld && (this.po = new Map(zz.baf2TermHeld)), this.pending = this.pending.filter((tz => tz.seq > zz.baf2TermAcked)), this.silos = zz.baf2TermSilos, this.readOnly = zz.baf2TermReadOnly, this.pocket = !0 === zz.baf2TermPocket, zz.baf2TermReset) this.resort();
        else {
          const zz = new Set(this.order);
          for (const tz of this.stored.keys()) zz.has(tz) || this.order.push(tz)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((zz, tz) => this.amount(tz) - this.amount(zz) || zz.localeCompare(tz))), this.changed()
      }
      take(zz, tz) {
        const sz = ot(zz, this.amount(tz));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: tz,
          amount: sz,
          put: !1
        }), this.recents = [tz, ...this.recents.filter((zz => zz !== tz))].slice(0, 6), this.changed(), st(this.seq, zz, tz)
      }
      put(zz, tz) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: tz,
          amount: ot(zz, this.heldAmount(tz)),
          put: !0
        }), this.changed(), Ft(this.seq, zz, tz)
      }
      putAll() {
        this.seq++;
        for (const zz of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: zz,
          amount: this.heldAmount(zz),
          put: !0
        });
        return this.changed(), Wt(this.seq)
      }
      amount(zz) {
        var tz;
        let sz = null !== (tz = this.stored.get(zz)) && void 0 !== tz ? tz : 0;
        for (const Fz of this.pending) Fz.item === zz && (sz += Fz.put ? Fz.amount : -Fz.amount);
        return Math.max(0, sz)
      }
      heldAmount(zz) {
        var tz;
        let sz = null !== (tz = this.po.get(zz)) && void 0 !== tz ? tz : 0;
        for (const Fz of this.pending) Fz.put && Fz.item === zz && (sz -= Fz.amount);
        return Math.max(0, sz)
      }
      heldItems() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((tz => tz === zz || this.heldAmount(tz) > 0))
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
    var sH = sz(37840);
    const FH = {
      isBlock: zz => void 0 !== Tz.j[zz],
      harvestType: zz => {
        var tz;
        return null === (tz = Tz.j[zz]) || void 0 === tz ? void 0 : tz.harvestType
      },
      harvestLevel: zz => {
        var tz;
        return null === (tz = Tz.j[zz]) || void 0 === tz ? void 0 : tz.harvestLevel
      },
      dropsNothing: zz => {
        var tz;
        return null === (null === (tz = Tz.j[zz]) || void 0 === tz ? void 0 : tz.drops)
      },
      displayName: zz => {
        var tz;
        return null === (tz = to.m[zz]) || void 0 === tz ? void 0 : tz.displayName
      },
      description: zz => {
        var tz;
        return null === (tz = to.m[zz]) || void 0 === tz ? void 0 : tz.description
      },
      harvests: zz => {
        var tz;
        return null === (tz = to.m[zz]) || void 0 === tz ? void 0 : tz.harvests
      },
      level: zz => {
        var tz;
        return null === (tz = to.m[zz]) || void 0 === tz ? void 0 : tz.level
      }
    };

    function WH(zz, tz, sz) {
      return function(zz, tz, sz, Fz) {
        var Wz, Xz;
        const Oz = tz.split("|")[0],
          oz = zz.isBlock(tz) ? tz : zz.isBlock(Oz) ? Oz : null;
        if (null === oz || "rock" !== zz.harvestType(oz) || zz.dropsNothing(oz) && !iF.has(Oz)) return null;
        const vz = sz && "rock" === zz.harvests(sz) ? null !== (Wz = zz.level(sz)) && void 0 !== Wz ? Wz : 0 : null,
          Uz = null !== (Xz = null !== Fz && void 0 !== Fz ? Fz : zz.harvestLevel(oz)) && void 0 !== Xz ? Xz : 0;
        return (null !== vz ? Uz <= vz : 0 === zz.harvestLevel(oz)) ? null : GF(zz, Uz)
      }(FH, zz, tz, sz)
    }

    function XH(zz, tz) {
      return function(zz, tz, sz) {
        if (tz === ZF[0]) return [(0, Az.Ud)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Az.N.whiteUiText)];
        const Fz = sz.split("|")[0],
          Wz = zz.isBlock(Fz) ? zz.displayName(Fz) : void 0,
          Xz = "string" === typeof Wz ? Wz : Wz && "translationKey" in Wz ? `$t(${Wz.translationKey})` : Fz;
        return [(0, Az.Ud)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Xz
          }
        }, Az.N.whiteUiText), (0, Az.Ud)({
          translationKey: `item:${(0,Az.ue)(tz)}`
        }, Az.N.yellowUiText)]
      }(FH, zz, tz)
    }
    const OH = "buildAFactory2Game:";
    const oH = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function vH(zz) {
      return zz.endsWith(" Ore")
    }
    const UH = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      KH = [],
      uH = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: UH,
        plan: null,
        atomic: KH
      },
      NH = "buildAFactory2Game:",
      bH = new Set(["Splitter", "Sorting Gate"]),
      wH = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class DH {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = zz, this.planAt = tz, this.tierOf = sz, this.yK = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.po = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = uH, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(zz, tz, sz) {
        var Fz, Wz, Xz;
        let Oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const oz = null !== (Fz = null === (Wz = zz.rtz(tz)) || void 0 === Wz ? void 0 : Wz.name) && void 0 !== Fz ? Fz : null,
          vz = zz.isPlayerCrouching(tz),
          Uz = 0 === sz ? null : this.resolve(zz, sz),
          Kz = null !== Uz && null !== Oz && bH.has(Uz.rootName) && function(zz, tz) {
            return wH.some((sz => {
              let [Fz, Wz] = sz;
              const Xz = zz.getBlockId(tz[0] + Fz, tz[1], tz[2] + Wz);
              return 0 !== Xz && "Express Belt" === zz.getMetaInfo(Xz).rootName
            }))
          }(zz, Oz),
          uz = this.updatePlan(0 === sz ? null : Oz),
          Nz = this.tierOf(),
          bz = null === Oz ? null : (0, sH.d)(sz),
          wz = null !== bz && null !== Oz && (0, sH.g)(function(zz) {
            return (tz, sz, Fz) => zz.getBlockId(tz, sz, Fz)
          }(zz), Oz[0], Oz[1], Oz[2], bz),
          Dz = this.readAfloat(zz, sz, Oz);
        if (sz === this.yK && wz === this.missesMaker && Dz === this.afloat && oz === this.po && vz === this.crouching && Kz === this.express && Nz === this.tier && !uz && (!this.targetsLive || !this.liveMoved(Oz))) return;
        this.yK = sz, this.missesMaker = wz, this.afloat = Dz, this.po = oz, this.crouching = vz, this.express = Kz;
        const gz = Kz && Uz ? function(zz) {
          if (null === zz.info) return null;
          return zz.express ??= {
            ...zz.info,
            detail: `${NH}lookKeepsUpExpress`,
            detailItem: null
          }, zz.express
        }(Uz) : null !== Uz && wz && null !== bz ? this.besideMaker(Uz, sz, bz) : null !== Uz && Dz ? this.hanging(Uz) : null !== (Xz = null === Uz || void 0 === Uz ? void 0 : Uz.info) && void 0 !== Xz ? Xz : null;
        this.tier = Nz;
        const Hz = Uz && gz ? function(zz, tz) {
          var sz, Fz;
          const Wz = Tz.j[zz];
          if (!zz.endsWith(" Ore") || "rock" !== (null === Wz || void 0 === Wz ? void 0 : Wz.harvestType) || 0 === Wz.harvestLevel) return null;
          const Xz = null !== (sz = Wz.harvestLevel) && void 0 !== sz ? sz : 0,
            Oz = tz ? to.m[tz] : void 0;
          if ("rock" === (null === Oz || void 0 === Oz ? void 0 : Oz.harvests) && (null !== (Fz = Oz.level) && void 0 !== Fz ? Fz : 0) >= Xz) return null;
          const oz = (vz = Xz, GF(FH, vz));
          var vz;
          if (null === oz) return null;
          const Uz = XX(oz),
            Kz = /^[AEIOU]/.test(oz) ? "An" : "";
          if ("rock" === (null === Oz || void 0 === Oz ? void 0 : Oz.harvests) && tz) return {
            key: `${NH}lookToolTooWeak${Kz}`,
            po: XX(tz),
            needed: Uz
          };
          return {
            key: oz === ZF[0] ? `${NH}lookNeedAnyPickaxe` : `${NH}lookNeedPickaxe${Kz}`,
            po: null,
            needed: Uz
          }
        }(Uz.rootName, oz) : null;
        this.targetsLive = !0 === (null === Uz || void 0 === Uz ? void 0 : Uz.live) && null !== Oz;
        let Bz = null;
        this.targetsLive && Uz && Oz && this.live && (this.livePos[0] = Oz[0], this.livePos[1] = Oz[1], this.livePos[2] = Oz[2], this.liveVersion = this.live.version(), Bz = this.live.line(Uz.rootName, Oz));
        const Pz = null === gz ? UH : function(zz, tz, sz) {
            const Fz = function(zz, tz, sz) {
              const Fz = Ms(zz);
              if (null === Fz) return null;
              const Wz = `${OH}lookPortMode_${Fz}`,
                Xz = nF(tz);
              if (Xz && sz) return {
                mode: null,
                detail: Wz,
                next: `${OH}lookWrenchPickUp`,
                nextState: null
              };
              const Oz = ds(zz),
                oz = null === Oz ? null : Ms(Oz);
              return null === oz ? {
                mode: null,
                detail: Wz,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Wz,
                next: Xz ? `${OH}lookWrenchNext` : `${OH}lookPortWrench`,
                nextState: `${OH}lookPortState_${oz}`
              }
            }(zz, tz, sz);
            if (null !== Fz) return Fz;
            const Wz = XW(zz, tz, sz);
            return null === Wz.mode && null === Wz.next ? UH : Wz
          }(zz.blockIdToBlockName(sz), oz, vz),
          rz = this.plan,
          Yz = Uz && gz ? this.rowsOf(Uz.rootName, Nz) : KH,
          xz = this.snapshot;
        if (!(null === gz ? !xz.visible : xz.visible && gz === xz.info && (mz = Hz, Jz = xz.tool, mz === Jz || null !== mz && null !== Jz && mz.key === Jz.key && mz.po === Jz.po && mz.needed === Jz.needed) && function(zz, tz) {
            return zz === tz || null !== zz && null !== tz && zz.key === tz.key && JSON.stringify([zz.params, zz.keys]) === JSON.stringify([tz.params, tz.keys])
          }(Bz, xz.live) && function(zz, tz) {
            return zz.mode === tz.mode && zz.detail === tz.detail && zz.next === tz.next && zz.nextState === tz.nextState
          }(Pz, xz.wrench) && qw(rz, xz.plan) && Yz === xz.atomic)) {
          var mz, Jz;
          this.snapshot = null === gz ? {
            ...xz,
            visible: !1
          } : {
            info: gz,
            visible: !0,
            tool: Hz,
            live: Bz,
            wrench: Pz,
            plan: rz,
            atomic: Yz
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = uH, this.yK = 0, this.po = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(zz, tz, sz) {
        if (null === sz || 0 === tz || !oz() || !vH(this.resolve(zz, tz).rootName)) return !1;
        const Fz = `${sz[0]},${sz[1]},${sz[2]},${tz}`,
          Wz = performance.now();
        return Fz === this.afloatKey && Wz - this.afloatAt < gH ? this.afloat : (this.afloatKey = Fz, this.afloatAt = Wz, function(zz, tz) {
          for (const [sz, Fz, Wz] of oH) {
            const Xz = tz(zz[0] + sz, zz[1] + Fz, zz[2] + Wz);
            if (void 0 === Xz || null !== Xz && !vH(Xz)) return !1
          }
          return !0
        }(sz, ((tz, sz, Fz) => function(zz, tz, sz, Fz) {
          if (!zz.isBlockInLoadedChunk(tz, sz, Fz)) return;
          const Wz = zz.getBlockId(tz, sz, Fz);
          return 0 === Wz ? null : zz.getMetaInfo(Wz).rootName
        }(zz, tz, sz, Fz))))
      }
      liveMoved(zz) {
        var tz;
        const {
          livePos: sz
        } = this;
        return null === zz || zz[0] !== sz[0] || zz[1] !== sz[1] || zz[2] !== sz[2] || (null === (tz = this.live) || void 0 === tz ? void 0 : tz.version()) !== this.liveVersion
      }
      updatePlan(zz) {
        const tz = null === zz ? "" : zz.join(","),
          sz = performance.now();
        if (tz === this.planPos && sz - this.planMs < 250) return !1;
        this.planPos = tz, this.planMs = sz;
        const Fz = null === zz ? null : this.planAt([zz[0], zz[1], zz[2]]),
          Wz = !qw(Fz, this.plan);
        return this.plan = Fz, Wz
      }
      besideMaker(zz, tz, sz) {
        let {
          info: Fz
        } = zz;
        if (null === Fz) return null;
        let Wz = this.besideMakerById.get(tz);
        if (void 0 === Wz) {
          const zz = "cryo" === sz ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Wz = {
            ...Fz,
            detail: `${NH}${zz}`,
            detailItem: null
          }, this.besideMakerById.set(tz, Wz)
        }
        return Wz
      }
      hanging(zz) {
        let {
          info: tz,
          rootName: sz
        } = zz;
        if (null === tz) return null;
        let Fz = this.afloatByRoot.get(sz);
        return void 0 === Fz && (Fz = {
          ...tz,
          detail: `${NH}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(sz, Fz)), Fz
      }
      rowsOf(zz, tz) {
        if (null === tz) return KH;
        const sz = `${zz}|${tz}`;
        let Fz = this.rowsByKey.get(sz);
        if (void 0 === Fz) {
          const Wz = function(zz, tz) {
            var sz;
            if (!(zz in At)) return [];
            const Fz = null !== (sz = yt[zz]) && void 0 !== sz ? sz : [],
              Wz = new Map;
            for (const Oz of nX(zz, tz))
              if ((Fz.includes(Oz) || lX(Oz.output) && iX(Oz.output) > Rz(zz)) && iX(Oz.output) <= tz) {
                var Xz;
                const zz = null !== (Xz = Wz.get(Oz.output)) && void 0 !== Xz ? Xz : [];
                zz.push(Oz.input), Wz.set(Oz.output, zz)
              } return qX([...Wz], (zz => {
              let [tz] = zz;
              return -iX(tz)
            })).map((zz => {
              let [tz, sz] = zz;
              return {
                output: tz,
                inputs: sz
              }
            }))
          }(zz, tz);
          Fz = Wz.length > 0 ? Wz : KH, this.rowsByKey.set(sz, Fz)
        }
        return Fz
      }
      resolve(zz, tz) {
        const {
          rootId: sz,
          rootName: Fz
        } = zz.getMetaInfo(tz), Wz = (0, Ds.k)(Fz) ? tz : sz;
        let Xz = this.byRootId.get(Wz);
        const Oz = oz();
        if (void 0 === Xz || Xz.nuclear !== Oz) {
          var vz;
          const sz = function(zz) {
            return QF(FH, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz)
          }(Fz, zz.blockIdToBlockName(tz));
          Xz = {
            info: sz,
            rootName: Fz,
            live: null !== sz && !0 === (null === (vz = this.live) || void 0 === vz ? void 0 : vz.handles(Fz)),
            nuclear: Oz
          }, this.byRootId.set(Wz, Xz)
        }
        return Xz
      }
    }
    const gH = 500;
    const HH = (0, Fz.memo)((function(zz) {
      var tz, sz;
      let {
        store: Wz
      } = zz;
      const {
        t: Xz
      } = (0, GW.B)(), [Oz, oz] = (0, Fz.useState)((() => Wz.get()));
      (0, Fz.useEffect)((() => (oz(Wz.get()), Wz.subscribe((() => {
        oz(Wz.get())
      })))), [Wz]);
      const {
        openInGameMenuName: vz,
        openEverythingMenuName: Uz,
        isTouchScreen: Kz
      } = (0, xW.h)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: uz,
        tool: Nz,
        live: bz,
        wrench: wz,
        atomic: Dz
      } = Oz, gz = Oz.visible && null === vz && null === Uz;
      if (null === uz) return null;
      const Hz = null !== wz.detail ? Xz(wz.detail) : null !== (tz = Oz.plan) && void 0 !== tz && tz.ctrl ? Xz("buildAFactory2Game:lookPlanCtrl") : null !== uz.detail ? Xz(uz.detail, null === uz.detailItem ? void 0 : {
        item: Xz(uz.detailItem)
      }) : null;
      return (0, eX.jsxs)("div", {
        className: IW()("Baf2LookTarget", {
          Visible: gz
        }),
        "aria-hidden": !gz,
        children: [(0, eX.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Xz(uz.name)
        }), null !== Oz.plan && (0, eX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Xz(Oz.plan.key, {
            kind: Xz(Oz.plan.kindKey),
            w: String(Oz.plan.w),
            h: String(Oz.plan.h),
            d: String(Oz.plan.d),
            count: String(Oz.plan.count)
          })
        }), void 0 !== (null === (sz = Oz.plan) || void 0 === sz ? void 0 : sz.why) && (0, eX.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Xz(Oz.plan.why)
        }), null !== wz.mode && (0, eX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Xz(wz.mode)
        }), null !== Nz ? (0, eX.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Xz(Nz.key, {
            item: Xz(Nz.needed),
            po: null === Nz.po ? "" : Xz(Nz.po)
          })
        }) : null !== bz ? (0, eX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Xz(bz.key, oU(Xz, bz))
        }) : null !== Hz && (0, eX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Hz
        }), Dz.length > 0 && (0, eX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Xz("buildAFactory2Game:lookAtomicRecipes", {
            list: Dz.map((zz => {
              let {
                output: tz,
                inputs: sz
              } = zz;
              const Fz = sz.length > 1 ? ` ${Xz("buildAFactory2Game:recipeMore",{count:String(sz.length-1)})}` : "";
              return `${Xz(XX(sz[0]))}${Fz} \u2192 ${Xz(XX(tz))}`
            })).join(", ")
          })
        }), null !== wz.next && (0, eX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Xz(wz.next, {
            state: null === wz.nextState ? "" : Xz(wz.nextState),
            use: Xz(Kz ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var BH = sz(37942);
    const PH = [],
      rH = [
        [0, -1, 0]
      ];

    function YH(zz) {
      const tz = [zz];
      for (let sz = 1; sz <= 4; sz++) sz > 1 && tz.push(`${zz}|meta|rot${sz}`), tz.push(`${zz}|meta|rot${sz}|Running`);
      return tz
    }

    function xH(zz, tz) {
      return [Math.floor(zz[0] / tz), Math.floor(zz[1] / tz), Math.floor(zz[2] / tz)]
    }

    function mH(zz, tz, sz) {
      return `${zz},${tz},${sz}`
    }

    function JH(zz) {
      const tz = zz.split("|")[0];
      if (!Ks(tz)) return PH;
      const sz = At[tz];
      if (ss(sz)) return rH;
      const Fz = xg(zz);
      return Fs(sz) ? [
        [-Fz[0], -Fz[1], -Fz[2]]
      ] : CW(sz) ? function(zz, tz) {
        const sz = zz[0] - 2 * tz[0],
          Fz = zz[2] - 2 * tz[2],
          Wz = [];
        for (let Xz = -1; Xz <= 1; Xz++)
          for (let tz = -1; tz <= 1; tz++) Wz.push([sz + Xz, zz[1], Fz + tz]);
        return Wz
      }([0, 0, 0], Fz) : PH
    }
    const IH = [.5, .5, .5],
      CH = [.2, .8, .3],
      eH = [.45, 1, .5];
    class ZH {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(zz) {
        this.indexed = !0;
        for (const tz of et)
          for (const sz of YH(tz)) {
            const tz = zz.blockNameToBlockId(sz, !0),
              Fz = JH(sz);
            null !== tz && Fz.length > 0 && (this.offsetsList.push(Fz), this.offsetsIndexById[tz] = this.offsetsList.length)
          }
      }
      onAfterRender(zz, tz) {
        this.indexed || this.index(zz);
        const sz = performance.now();
        if (sz - this.lastCheckMs < 100) return;
        this.lastCheckMs = sz, this.checks++;
        const Fz = bw.d.pw,
          [Wz, Xz, Oz] = xH(tz, Fz);
        let oz = !1;
        const vz = [];
        let Uz = 0;
        for (let Kz = Wz - 2; Kz <= Wz + 2; Kz++)
          for (let tz = Xz - 1; tz <= Xz + 1; tz++)
            for (let Wz = Oz - 2; Wz <= Oz + 2; Wz++) {
              const Xz = Uz++,
                Oz = mH(Kz, tz, Wz),
                uz = zz.getChunkVersion(Kz, tz, Wz);
              let Nz = this.chunks.get(Oz);
              null !== uz ? (Nz || (Nz = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Oz, Nz)), Nz.seenAt = this.checks, Nz.checkedVersion !== uz && (Nz.checkedVersion = uz, oz = !0), Nz.scannedVersion !== uz && sz - Nz.scannedAt >= 500 && vz.push({
                slot: Xz,
                entry: Nz,
                origin: [Kz * Fz, tz * Fz, Wz * Fz]
              })) : (oz ||= void 0 !== Nz, this.chunks.delete(Oz))
            }
        this.scanDue(zz, vz) && (oz = !0);
        for (const [Kz, uz] of this.chunks) uz.seenAt !== this.checks && (oz ||= uz.machines.length > 0, this.chunks.delete(Kz));
        for (const Kz of this.chunks.values())
          for (const [tz, sz, Fz] of Kz.cellChunks)(Math.abs(tz - Wz) > 2 || Math.abs(sz - Xz) > 1 || Math.abs(Fz - Oz) > 2) && this.watchCellChunk(zz, tz, sz, Fz) && (oz = !0);
        for (const [Kz, uz] of this.cellChunks) uz.seenAt !== this.checks && this.cellChunks.delete(Kz);
        oz && this.refresh(zz)
      }
      dispose(zz) {
        this.clearMeshes(zz), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(zz, tz) {
        const sz = Math.max(tz.findIndex((zz => {
          let {
            slot: tz
          } = zz;
          return tz >= this.scanFrom
        })), 0);
        let Fz = 96;
        for (let Wz = 0; Wz < tz.length; Wz++) {
          const {
            slot: Xz,
            entry: Oz,
            origin: oz
          } = tz[(sz + Wz) % tz.length];
          if (Fz -= this.scan(zz, Oz, oz), Fz <= 0) {
            this.scanFrom = Xz + 1;
            break
          }
        }
        return tz.length > 0
      }
      scan(zz, tz, sz) {
        let [Fz, Wz, Xz] = sz;
        const Oz = bw.d.pw,
          oz = this.hits;
        oz.length = 0;
        const vz = zz.scanBlocks(Fz, Wz, Xz, Fz + Oz, Wz + Oz, Xz + Oz, this.offsetsIndexById, oz),
          Uz = [];
        for (let Kz = 0; Kz < oz.length; Kz += 4) Uz.push({
          pos: [oz[Kz], oz[Kz + 1], oz[Kz + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[oz[Kz + 3]] - 1]
        });
        return tz.machines = Uz, tz.cellChunks = function(zz, tz) {
          const sz = new Set,
            Fz = [];
          for (const {
              pos: Wz,
              offsets: Xz
            }
            of zz)
            for (const [zz, Oz, oz] of Xz) {
              const Xz = xH([Wz[0] + zz, Wz[1] + Oz, Wz[2] + oz], tz),
                vz = mH(...Xz);
              sz.has(vz) || (sz.add(vz), Fz.push(Xz))
            }
          return Fz
        }(Uz, Oz), tz.scannedVersion = tz.checkedVersion, tz.scannedAt = performance.now(), Math.max(vz, 1)
      }
      watchCellChunk(zz, tz, sz, Fz) {
        const Wz = mH(tz, sz, Fz),
          Xz = zz.getChunkVersion(tz, sz, Fz),
          Oz = this.cellChunks.get(Wz);
        return null === Xz ? this.cellChunks.delete(Wz) : (null === Oz || void 0 === Oz ? void 0 : Oz.version) === Xz ? (Oz.seenAt = this.checks, !1) : (this.cellChunks.set(Wz, {
          version: Xz,
          seenAt: this.checks
        }), !0)
      }
      refresh(zz) {
        const tz = function(zz, tz) {
            const sz = new Set,
              Fz = [];
            for (const {
                pos: Wz,
                offsets: Xz
              }
              of zz)
              for (const [zz, Oz, oz] of Xz) {
                const Xz = Wz[0] + zz,
                  vz = Wz[1] + Oz,
                  Uz = Wz[2] + oz,
                  Kz = `${Xz},${vz},${Uz}`;
                sz.has(Kz) || (sz.add(Kz), tz(Xz, vz, Uz) && Fz.push([Xz, vz, Uz]))
              }
            return Fz
          }([...this.chunks.values()].flatMap((zz => zz.machines)), ((tz, sz, Fz) => zz.isBlockInLoadedChunk(tz, sz, Fz) && 0 === zz.getBlockId(tz, sz, Fz))),
          sz = tz.join(";");
        sz !== this.shownKey && (this.shownKey = sz, this.clearMeshes(zz), tz.length > 0 && (this.meshes = [this.build(zz, tz, !1), this.build(zz, tz, !0)]))
      }
      build(zz, tz, sz) {
        const Fz = tz[0],
          Wz = [],
          Xz = [];
        for (const [Oz, oz, vz] of tz)(0, BH.d)(Wz, Xz, [Oz - Fz[0] + .5, oz - Fz[1] + .5, vz - Fz[2] + .5], IH, sz);
        return zz.createGameMesh({
          positions: Wz,
          indices: Xz
        }, {
          rgb: sz ? eH : CH,
          alpha: .4
        }, Fz)
      }
      clearMeshes(zz) {
        for (const tz of this.meshes) zz.disposeGameMesh(tz);
        this.meshes = []
      }
    }
    const GH = 1 / .6,
      TH = 200,
      cH = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      jH = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      AH = 2 * Math.PI / 3;
    class yH {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cH;
        this.style = zz, this.particles = null, this.points = new Float32Array(800), this.budget = TH, this.lastMs = 0
      }
      static blade() {
        return new yH(jH)
      }
      nB(zz, tz) {
        const sz = Math.min(tz.arcStruck, tz.arcPoints.length);
        this.draw(zz, [tz.arcFrom, ...tz.arcPoints], tz.arcPoints.slice(0, sz))
      }
      onBlade(zz, tz) {
        const [sz, Fz, Wz] = tz.bladeCentre, [Xz, Oz] = tz.bladeFacing, oz = sz - 1.5 * Xz, vz = Wz - 1.5 * Oz, Uz = Math.atan2(Oz, Xz), Kz = [];
        for (let uz = 0; uz <= 8; uz++) {
          const zz = Uz - AH / 2 + AH * uz / 8;
          Kz.push([oz + 2.5 * Math.cos(zz), Fz, vz + 2.5 * Math.sin(zz)])
        }
        this.draw(zz, Kz, tz.bladeStruck)
      }
      dispose() {
        var zz;
        null === (zz = this.particles) || void 0 === zz || zz.stop(), this.particles = null
      }
      draw(zz, tz, sz) {
        if (!zz.particlesEnabled() || tz.length < 2) return;
        const Fz = performance.now();
        this.budget = Math.min(TH, this.budget + (Fz - this.lastMs) / 1e3 * TH), this.lastMs = Fz;
        const Wz = [];
        let Xz = 0,
          Oz = tz[0];
        for (const Hz of tz.slice(1)) {
          const zz = Math.min(48, Math.round(Math.hypot(Hz[0] - Oz[0], Hz[1] - Oz[1], Hz[2] - Oz[2]) * this.style.perBlock));
          Wz.push([Oz, Hz, zz]), Xz += zz, Oz = Hz
        }
        const oz = sz.length;
        Xz += 10 * oz;
        const vz = Xz > this.budget ? this.budget / Xz : 1;
        if (0 === Xz || vz * Xz < 1) return;
        const Uz = tz[0],
          [Kz, uz, Nz] = Uz,
          bz = this.points;
        let wz = 0;
        const Dz = (zz, tz, sz, Fz) => {
          const Wz = 4 * wz;
          bz[Wz] = zz - Kz, bz[Wz + 1] = tz - uz, bz[Wz + 2] = sz - Nz, bz[Wz + 3] = Fz, wz++
        };
        Wz.forEach(((zz, tz) => {
          let [sz, Fz, Wz] = zz;
          const Xz = Math.min(Math.floor(Wz * vz), TH - wz),
            Oz = Math.hypot(Fz[0] - sz[0], Fz[1] - sz[1], Fz[2] - sz[2]),
            oz = 0 === tz && Oz > 0 ? Math.min(.5, .1 * Oz) / Oz : 0;
          for (let vz = 0; vz < Xz; vz++) {
            const zz = oz + (vz + .5) / Xz * (1 - oz);
            Dz(sz[0] + (Fz[0] - sz[0]) * zz, sz[1] + (Fz[1] - sz[1]) * zz, sz[2] + (Fz[2] - sz[2]) * zz, .15)
          }
        }));
        const gz = Math.floor(10 * vz);
        for (let Hz = 0; Hz < oz; Hz++) {
          const [zz, tz, Fz] = sz[Hz];
          for (let sz = 0; sz < gz && wz < TH; sz++) Dz(zz, tz, Fz, 2.5)
        }
        this.budget -= wz, this.particles ??= zz.createParticles(function(zz) {
          const [tz, sz] = zz.colours;
          return {
            texture: "square_particle",
            au: 400,
            minLifeTime: zz.life[0] / GH,
            maxLifeTime: zz.life[1] / GH,
            minSize: zz.size[0],
            maxSize: zz.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [tz[0], tz[1], tz[2], 1],
              maxColor: [sz[0], sz[1], sz[2], 1]
            }, {
              timeFraction: 1,
              minColor: [tz[0], tz[1], tz[2], 0],
              maxColor: [sz[0], sz[1], sz[2], 0]
            }],
            blendMode: ho.f.Add
          }
        }(this.style), {
          pos: Uz
        }), this.particles.emitPoints(Uz, bz, wz)
      }
    }
    const MH = new Set(["Sky Spring"]);

    function dH(zz, tz, sz) {
      const Fz = zz.split("|")[0];
      return "Air" !== tz || sz || ! function(zz) {
        const tz = zz.split("|")[0];
        return void 0 !== os[tz] || MH.has(tz)
      }(Fz) ? null : zz
    }
    class hH {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(zz) {
        const tz = zz - this.lastTapAt >= 300;
        return this.lastTapAt = zz, tz
      }
    }
    class QH {
      constructor() {
        this.presses = new hH, this.predicted = null
      }
      tap(zz, tz) {
        const sz = this.presses.isNewPress(tz);
        return sz && (this.predicted = {
          station: zz,
          at: tz
        }), sz
      }
      consumeServerOpen(zz, tz) {
        const sz = this.predicted;
        return !(null === sz || sz.station !== zz || tz - sz.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class kH {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(zz, tz) {
        return zz && (this.thrustAt = tz), tz - this.thrustAt < 200
      }
    }
    const iH = [.1, .05, .1],
      LH = {
        texture: "effect_5",
        au: Math.ceil(48),
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
        blendMode: ho.f.OneOne
      };
    class lH {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new kH, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      nB(zz, tz) {
        for (const [sz, Fz] of tz.baf2JetFlames) zz.isLocalPlayer(sz) || (Fz ? this.lit.add(sz) : this.lit.delete(sz))
      }
      onAfterRender(zz, tz) {
        const sz = performance.now(),
          Fz = this.hold.lit(this.selfThrusting(zz, tz), sz);
        for (const [Wz, Xz] of this.flames)(Wz === tz ? Fz : this.lit.has(Wz)) || this.setEmitting(Xz, !1), Wz === tz || zz.getPositionView(Wz) ? !Xz.emitting && sz - Xz.offAt >= 1300 && (Xz.particles.stop(), this.flames.delete(Wz)) : (Xz.particles.dispose(), this.flames.delete(Wz), this.lit.delete(Wz));
        Fz && this.draw(zz, tz, tz);
        for (const Wz of this.lit) this.draw(zz, tz, Wz)
      }
      dispose() {
        for (const zz of this.flames.values()) zz.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(zz, tz) {
        var sz;
        const Fz = zz.getLocalPlayerMovement();
        return !!Fz && (null !== (Wz = {
          option: null !== (sz = zz.getClientOption(tz, "jumpHoldThrust")) && void 0 !== sz ? sz : null,
          jumping: Fz.jumpHeld,
          onGround: Fz.onGround,
          alive: zz.isAlive(tz)
        }).option && Wz.option.maxUpSpeed >= 0 && Wz.jumping && !Wz.onGround && Wz.alive);
        var Wz
      }
      draw(zz, tz, sz) {
        var Fz, Wz;
        const Xz = this.pos;
        if (!zz.readDrawnPosition(sz, Xz)) return;
        const Oz = zz.readDrawnPosition(tz, this.camera) ? this.camera : Xz;
        if (!((Xz[0] - Oz[0]) ** 2 + (Xz[1] - Oz[1]) ** 2 + (Xz[2] - Oz[2]) ** 2 < 1600) || !zz.particlesEnabled()) {
          const zz = this.flames.get(sz);
          return void(zz && this.setEmitting(zz, !1))
        }
        const oz = null !== (Fz = this.flames.get(sz)) && void 0 !== Fz ? Fz : this.create(zz, sz, Xz),
          vz = null !== (Wz = zz.getDrawnHeading(sz)) && void 0 !== Wz ? Wz : 0,
          Uz = this.at;
        Uz[0] = Xz[0] - .35 * Math.sin(vz), Uz[1] = Xz[1] + 1.05, Uz[2] = Xz[2] - .35 * Math.cos(vz), oz.particles.moveTo(Uz), this.setEmitting(oz, !0)
      }
      setEmitting(zz, tz) {
        zz.emitting !== tz && (zz.emitting = tz, tz || (zz.offAt = performance.now()), zz.particles.setEmitRate(tz ? 60 : 0))
      }
      create(zz, tz, sz) {
        const Fz = {
          particles: zz.createParticles(LH, {
            pos: sz,
            half: iH
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(tz, Fz), Fz
      }
    }

    function nH(zz) {
      return "Reactor Frame" === OF("reactor", zz)
    }

    function aH(zz) {
      return is("reactor", zz) && !nH(zz) && (zz.startsWith("Reactor Glass") || zz.startsWith("Reactor Port"))
    }
    const qH = "baf2Goal";
    class SH {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [MW.o.subscribe("setDirectionArrow", (zz => {
          let {
            id: tz,
            position: sz
          } = zz;
          tz === qH && (this.goal = sz, this.checkedAt = -1 / 0)
        })), MW.o.subscribe("clearDirectionArrow", (zz => {
          let {
            id: tz
          } = zz;
          null !== tz && tz !== qH || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const zz of this.subs) MW.o.unsubscribe(zz)
      }
      sideOf(zz, tz, sz, Fz) {
        const Wz = this.goal;
        if (!Wz) return 0;
        sz - this.checkedAt > 1e3 && (this.checkedAt = sz, this.open = function(zz, tz) {
          const [sz, Fz, Wz] = zz.map(Math.floor);
          if (!aH(tz(sz, Fz, Wz))) return null;
          for (const [Xz, Oz] of [
              [1, 0],
              [0, 1]
            ]) {
            const zz = tz(sz + Xz, Fz, Wz + Oz),
              oz = tz(sz - Xz, Fz, Wz - Oz);
            if (nH(oz) && aH(zz)) return [Xz, 0, Oz];
            if (nH(zz) && aH(oz)) return [0 - Xz, 0, 0 - Oz]
          }
          return null
        }(Wz, ((tz, sz, Fz) => zz.blockIdToBlockName(zz.getBlockId(tz, sz, Fz)))));
        const Xz = this.open;
        if (!Xz) return 0;
        const Oz = Fz(Wz);
        if (Math.abs(Oz.x - tz.x) > .05 || Math.abs(Oz.y - tz.y) > .05) return 0;
        const oz = Fz([Wz[0] + Xz[0], Wz[1], Wz[2] + Xz[2]]).x - Oz.x;
        return Math.abs(oz) < .3 ? 0 : oz > 0 ? 1 : -1
      }
    }
    class VH {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new SH, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.lw = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.YB = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((zz => {
          for (const tz of zz) tz.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(tz.target, tz.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.lw || this.clear()
        }, window.addEventListener("resize", this.YB)
      }
      onAfterRender(zz, tz) {
        var sz;
        this.api = zz, this.project = null !== (sz = null === tz || void 0 === tz ? void 0 : tz.projectWorldPosToScreenPos) && void 0 !== sz ? sz : null, this.queued || this.lw || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.lw = !0;
        for (const zz of this.moved.keys()) zz.style.transform = "";
        this.moved.clear();
        for (const zz of this.sideLabels.keys()) zz.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.YB)
      }
      clear() {
        for (const Xz of this.moved.keys()) Xz.isConnected || this.moved.delete(Xz);
        for (const Xz of this.sideLabels.keys()) Xz.isConnected || this.sideLabels.delete(Xz);
        if (0 === this.arrows.length) return;
        const zz = performance.now(),
          tz = zz - this.refreshedAt > 1e3;
        tz && (this.refreshedAt = zz, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const sz = this.trackerBox(),
          Fz = this.barsBox(),
          Wz = this.toastBox(tz);
        (sz || Fz || Wz) && tz && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Xz = 0; Xz < this.arrows.length; Xz++) {
          const tz = this.arrows[Xz];
          this.labelOffsets.set(tz, this.runLabelAside(tz, zz));
          const Oz = (sz ? this.shiftLeftOf(tz, sz) : 0) || this.shiftOnScreen(tz),
            oz = Math.min(Fz ? this.liftAbove(tz, Fz, Oz) : 0, Wz ? this.liftAbove(tz, Wz, Oz) : 0),
            vz = this.moved.get(tz);
          if (0 !== Oz || 0 !== oz) {
            const zz = 0 === oz ? `translateX(${Oz}px)` : `translate(${Oz}px, ${oz}px)`;
            vz !== zz && (tz.style.transform = zz, this.moved.set(tz, zz))
          } else void 0 !== vz && (tz.style.transform = "", this.moved.delete(tz))
        }
      }
      trackerBox() {
        var zz, tz;
        const sz = null !== (zz = this.tracker) && void 0 !== zz && zz.isConnected ? this.tracker : null !== (tz = this.trackers[0]) && void 0 !== tz ? tz : null;
        if (sz !== this.tracker && this.watch(sz), this.boxStale && sz) {
          var Fz, Wz, Xz;
          this.boxStale = !1;
          const zz = sz.closest(".NoRoom") ? null : sz.getBoundingClientRect(),
            tz = zz && zz.width > 0 ? null === (Fz = this.hud) || void 0 === Fz ? void 0 : Fz.getBoundingClientRect() : void 0,
            Oz = zz && tz ? Math.max(zz.top, tz.top) : null !== (Wz = null === zz || void 0 === zz ? void 0 : zz.top) && void 0 !== Wz ? Wz : 0,
            oz = zz && tz ? Math.min(zz.bottom, tz.bottom) : null !== (Xz = null === zz || void 0 === zz ? void 0 : zz.bottom) && void 0 !== Xz ? Xz : 0;
          this.box = zz && zz.width > 0 && oz > Oz ? {
            left: zz.left,
            top: Oz,
            right: zz.right,
            bottom: oz
          } : null
        }
        return sz ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var zz;
          this.barsStale = !1;
          const tz = null === (zz = this.statBars[0]) || void 0 === zz ? void 0 : zz.getBoundingClientRect();
          this.bars = tz && tz.width > 0 && tz.height > 0 ? {
            left: tz.left,
            top: tz.top,
            right: tz.right,
            bottom: tz.bottom
          } : null
        }
        return this.bars
      }
      toastBox(zz) {
        var tz;
        const sz = null !== (tz = this.toasts[0]) && void 0 !== tz ? tz : null;
        if (sz !== this.toastEl || zz && sz) {
          this.toastEl = sz;
          const zz = null === sz || void 0 === sz ? void 0 : sz.getBoundingClientRect();
          this.toast = zz && zz.width > 0 && zz.height > 0 ? {
            left: zz.left,
            top: zz.top,
            right: zz.right,
            bottom: zz.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(zz, tz, sz) {
        var Fz;
        const Wz = this.anchorOf(zz);
        if (!Wz) return 0;
        const Xz = Wz.x + sz + (null !== (Fz = this.labelOffsets.get(zz)) && void 0 !== Fz ? Fz : 0),
          {
            halfWidth: Oz,
            labelled: oz
          } = this.extentOf(zz),
          vz = Wz.y + this.em * (oz ? 6.2 : 3);
        return vz < tz.top - 6 || Xz + Oz < tz.left - 6 || Xz - Oz > tz.right + 6 ? 0 : tz.top - 6 - vz
      }
      watch(zz) {
        var tz, sz;
        this.tracker && this.sizes.unobserve(this.tracker), null === (tz = this.hud) || void 0 === tz || tz.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = zz, this.hud = null !== (sz = null === zz || void 0 === zz ? void 0 : zz.closest(".Baf2QuestHud")) && void 0 !== sz ? sz : null, this.box = null, this.boxStale = !0, zz && this.sizes.observe(zz), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(zz, tz) {
        var sz;
        const Fz = this.anchorOf(zz);
        if (!Fz) return 0;
        const {
          y: Wz
        } = Fz, Xz = Fz.x + (null !== (sz = this.labelOffsets.get(zz)) && void 0 !== sz ? sz : 0), Oz = this.em, {
          halfWidth: oz,
          labelled: vz
        } = this.extentOf(zz), Uz = Wz - Oz, Kz = Xz + oz;
        return Wz + Oz * (vz ? 6.2 : 3) < tz.top || Uz > tz.bottom || Kz < tz.left - 6 || Xz - oz > tz.right ? 0 : Math.max(tz.left - 6 - Kz, 6 - (Xz - oz))
      }
      shiftOnScreen(zz) {
        var tz;
        const sz = this.anchorOf(zz);
        if (!sz) return 0;
        const {
          halfWidth: Fz
        } = this.extentOf(zz), Wz = sz.x + (null !== (tz = this.labelOffsets.get(zz)) && void 0 !== tz ? tz : 0), Xz = Wz + Fz - (this.innerWidth - 6);
        return Xz > 0 ? -Xz : Math.max(0, 6 - (Wz - Fz))
      }
      runLabelAside(zz, tz) {
        var sz;
        let Fz = null;
        for (let Oz = 0; Oz < zz.children.length; Oz++) zz.children[Oz].classList.contains("DirectionArrowLabel") && (Fz = zz.children[Oz]);
        if (!Fz) return 0;
        const Wz = zz.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(zz) : null,
          Xz = (Wz && this.api ? this.side.sideOf(this.api, {
            x: Wz.x / this.innerWidth * 100,
            y: Wz.y / this.innerHeight * 100
          }, tz, this.project) : 0) * this.halfWidthOf(Fz);
        return Xz !== (null !== (sz = this.sideLabels.get(Fz)) && void 0 !== sz ? sz : 0) && (Fz.style.transform = 0 === Xz ? "" : `translateX(-50%) translateX(${Xz}px)`, 0 === Xz ? this.sideLabels.delete(Fz) : this.sideLabels.set(Fz, Xz)), Xz
      }
      extentOf(zz) {
        let tz = this.em,
          sz = !1;
        for (let Fz = 0; Fz < zz.children.length; Fz++) {
          const Wz = zz.children[Fz],
            Xz = Wz.classList.contains("DirectionArrowLabel");
          sz ||= Xz, (Xz || Wz.classList.contains("DirectionArrowDistance")) && (tz = Math.max(tz, this.halfWidthOf(Wz)))
        }
        return {
          halfWidth: tz,
          labelled: sz
        }
      }
      halfWidthOf(zz) {
        let tz = this.halfWidths.get(zz);
        return void 0 === tz && (tz = zz.offsetWidth / 2, this.halfWidths.set(zz, tz), this.sizes.observe(zz), this.labels.add(zz)), tz
      }
      forgetGoneLabels() {
        for (const zz of this.labels) zz.isConnected || (this.sizes.unobserve(zz), this.halfWidths.delete(zz), this.labels.delete(zz))
      }
      anchorOf(zz) {
        const tz = zz.style.translate,
          sz = this.anchors.get(zz);
        if (sz && sz.translate === tz && sz.innerWidth === this.innerWidth && sz.innerHeight === this.innerHeight) return sz;
        const Fz = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(tz);
        if (!Fz) return null;
        const Wz = {
          translate: tz,
          x: parseFloat(Fz[1]) / 100 * this.innerWidth,
          y: parseFloat(Fz[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(zz, Wz), Wz
      }
    }
    const RH = "Baf2ArrowText";

    function pH(zz, tz) {
      const sz = zz.rows.find((zz => zz.current));
      return jz(zz.tutorial) && null !== sz && void 0 !== sz && sz.item && qW(sz) && Zz(sz.item).includes(tz) ? sz.item : null
    }
    const fH = new class {
      constructor(zz) {
        this.select = zz, this.picks = new Map
      }
      open(zz, tz, sz) {
        const Fz = pH(tz, zz);
        null !== Fz && this.gb(zz, Fz, sz)
      }
      follow(zz, tz) {
        if (oz())
          for (const [sz, {
              item: Fz,
              had: Wz
            }] of this.picks) {
            const Xz = pH(zz, sz);
            Xz !== Fz && (null !== Xz && tz(Fz) > Wz ? this.gb(sz, Xz, tz) : this.picks.delete(sz))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      gb(zz, tz, sz) {
        this.picks.set(zz, {
          item: tz,
          had: sz(tz)
        }), this.select(zz, tz)
      }
    }(dW.m);

    function EH(zz) {
      return tz => {
        let sz = 0;
        for (const Fz of zz.getInventoryItems())(null === Fz || void 0 === Fz ? void 0 : Fz.name) === tz && (sz += null === Fz.amount ? 1 : Math.max(Fz.amount, 0));
        return sz
      }
    }

    function zB(zz, tz, sz, Fz) {
      zz.getClientOption(tz, "canCraft") && "inventory" !== xW.b.get("openInGameMenuName") && (fH.open(sz, Fz.get(), EH(zz)), MW.o.Yg("toggleMenu", `inventory|${sz}`))
    }
    let tB = null,
      sB = !1;

    function FB(zz) {
      const tz = IX();
      zz === tB && tz === sB || (tB = zz, sB = tz, (0, dW.q)(function(zz, tz) {
        const sz = new Map;
        for (let Fz = zz + 1; Fz <= Wz.length; Fz++) {
          const Wz = SX(Fz, zz, tz);
          if (Wz)
            for (const tz of Hz(Fz).unlocks) sz.set(tz, {
              ...Wz,
              stepsAway: Fz - zz
            })
        }
        return sz
      }(zz, tz)))
    }

    function WB() {
      return (0, dW.y)(qX(Object.keys(ez), iX)), () => {
        (0, dW.y)([])
      }
    }
    const XB = "buildAFactory2Game:",
      OB = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      oB = {
        on: `${XB}tutorialButtonOn`,
        hud: `${XB}tutorialButtonHud`,
        off: `${XB}tutorialButtonOff`
      },
      vB = {
        on: `${XB}tutorialPickedOn`,
        hud: `${XB}tutorialPickedHud`,
        off: `${XB}tutorialPickedOff`
      };

    function UB(zz, tz, sz) {
      let Fz = null,
        Wz = () => {};
      const Xz = Xz => {
        var Oz;
        let {
          tutorial: oz,
          tutorialKnown: vz
        } = Xz;
        (null === (Oz = Fz) || void 0 === Oz ? void 0 : Oz.tutorial) === oz && Fz.tutorialKnown === vz || (Fz = {
          tutorial: oz,
          tutorialKnown: vz
        }, Wz = (0, rW.t)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: oB[oz],
          icon: {
            kind: "icon",
            name: OB[oz]
          },
          iconOnly: !0,
          disabled: !vz,
          className: "Baf2TutorialButton",
          onClick: () => {
            var Fz;
            (Fz => {
              const Wz = tz.setTutorial(Fz);
              zz.send(`baf2tutorial ${Fz} ${Wz}`), sz.show({
                baf2ToastText: [(0, Az.Ud)({
                  translationKey: vB[Fz]
                }, Az.N.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((Fz = tz.get().tutorial, cz[(cz.indexOf(Fz) + 1) % cz.length]))
          }
        }))
      };
      Xz(tz.get());
      const Oz = MW.o.subscribe(hW, Xz);
      return () => {
        MW.o.unsubscribe(Oz), Wz()
      }
    }

    function KB(zz, tz, sz) {
      var Fz, Wz;
      const Xz = zz.getTargetedBlock();
      if (!Xz || ! function(zz, tz, sz) {
          if ("Chest" !== tz) return !1;
          const Fz = zz.split("|")[0];
          if (!Ks(Fz) || 0 === At[Fz].outputSlots.length) return !1;
          const Wz = xg(zz);
          return sz[0] === Wz[0] && sz[1] === Wz[1] && sz[2] === Wz[2]
        }(sz, null === (Fz = zz.rtz(tz)) || void 0 === Fz ? void 0 : Fz.name, Xz.normal)) return !1;
      const [Oz, oz, vz] = Xz.bu, Uz = zz.getBlockId(Oz, oz, vz);
      return 0 === Uz || !0 === (null === (Wz = Tz.j[Uz]) || void 0 === Wz ? void 0 : Wz.canBePlacedOver)
    }
    var uB = sz(36199);
    const NB = new Set(gs.b);
    class bB {
      constructor(zz) {
        this.toasts = zz, this.lastAt = -1 / 0
      }
      onAltAction(zz, tz, sz) {
        const Fz = zz.getTargetedBlock();
        if (!Fz || function(zz) {
            const tz = zz.split("|")[0];
            return Ks(tz) || null !== CF(tz) || Iz(tz) || gs.b.includes(tz)
          }(sz) && !NB.has(sz.split("|")[0])) return;
        const Wz = zz.rtz(tz);
        if (!Wz || !NB.has(Wz.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Xz = Wz.typeObj.id,
          [Oz, oz, vz] = Fz.bu,
          Uz = zz.getBlockId(Oz, oz, vz),
          Kz = Tz.j[Uz];
        (0 === Uz || null !== Kz && void 0 !== Kz && Kz.cb || null !== Kz && void 0 !== Kz && Kz.canBePlacedOver) && zz.isSolidToPlayerBlockId(Xz) && zz.canModifyBlockAt(Oz, oz, vz) && zz.Mzz(Oz, oz, vz, Xz) && !zz.Mzz(Oz, oz, vz, Xz, tz) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Az.Ud)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Az.N.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class wB {
      constructor(zz) {
        this.show = zz, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(zz, tz, sz) {
        var Fz;
        if (!tz) return this.started = null, void this.gatedThisHold.clear();
        if (!zz) return void(this.started = null);
        const Wz = `${zz.x},${zz.y},${zz.z},${zz.po}`;
        if (Wz === this.started) return;
        this.started = Wz;
        const Xz = kF(zz.y) ? WH(zz.block, zz.po, zz.level) : null;
        if (null === Xz || this.gatedThisHold.has(Wz)) return;
        this.gatedThisHold.add(Wz);
        const Oz = zz.block.split("|")[0];
        sz - (null !== (Fz = this.hintedAt.get(Oz)) && void 0 !== Fz ? Fz : -1 / 0) < 5e3 || (this.hintedAt.set(Oz, sz), this.show({
          baf2ToastText: XH(Xz, zz.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var DB = sz(44);

    function gB(zz, tz) {
      const sz = [...zz.baf2CoreBankPaused];
      for (const [Wz] of zz.baf2CoreBanked) sz.push(Wz);
      for (const Oz of Wz) {
        for (const {
            item: zz
          }
          of Oz.cost) sz.push(zz);
        for (const zz of Oz.newDeposits) sz.push(zz.block);
        for (const zz of Oz.unlocks) sz.push(zz, Gz(zz));
        Oz.reward && sz.push(Oz.reward);
        for (const {
            item: zz
          }
          of null !== (Fz = null === (Xz = Oz.charge) || void 0 === Xz ? void 0 : Xz.items) && void 0 !== Fz ? Fz : []) {
          var Fz, Xz;
          sz.push(zz)
        }
      }
      return {
        message: zz,
        itemNames: tz([...new Set(sz)])
      }
    }
    const HB = "baf2MultiblockGuide";
    const BB = new Map;
    const PB = function(zz, tz, sz, Wz) {
      let {
        localPlayerId: Xz
      } = Wz;
      const Oz = new Bo,
        oz = new sb,
        Uz = new Ub,
        Kz = new ob(Uz),
        uz = (zz, tz) => {
          tz ? Kz.observe(zz) : Kz.unobserve(zz)
        },
        Nz = new Ob,
        bz = new bb(uz),
        wz = zz => bz.covers(zz),
        Dz = new jb;
      let gz;
      const Hz = new iO((zz => {
          gz.sendCommand(zz)
        })),
        Bz = () => {
          Hz.send("baf2questbook")
        },
        Pz = zz => function(zz, tz, sz) {
          const Fz = {};
          for (const Wz of sz) {
            let sz = BB.get(Wz);
            void 0 === sz && (sz = zz.getItemStat(tz, Wz, "displayName"), BB.set(Wz, sz)), Fz[Wz] = sz
          }
          return Fz
        }(gz, Xz, zz),
        rz = new iW(Bz),
        Yz = new nb((() => xW.b.get("loadingOverlayVisible"))),
        xz = new Rb,
        mz = new bB(Yz),
        Jz = new wB((zz => {
          Yz.show(zz, zz.baf2ToastMs)
        })),
        Cz = new Xw(uz),
        ez = new cg(Cz),
        Zz = new CO,
        Gz = new tH,
        cz = new Wo,
        jz = new Nw({
          read: () => !1 !== DB.f.getItem(HB),
          write: zz => {
            DB.f.setItem(HB, zz)
          }
        }),
        Mz = new kw(jz),
        dz = new lw(jz),
        hz = new uD(jz, (zz => function(zz, tz) {
          const sz = Fv(tz.w, tz.h, tz.d),
            Fz = new Uint8Array(sz);
          for (let Wz = 0; Wz < sz; Wz++) {
            const sz = yw(zz, tF(tz, XF(tz, Wz)));
            Fz[Wz] = null === sz ? 0 : Eo(sz)
          }
          return Fz
        }(gz, zz)), sD(Hz)),
        Qz = new ND(jz, sD(Hz)),
        kz = new UD,
        iz = (zz, tz) => {
          let [sz, Fz, Wz] = zz;
          kz.answered(tz) || Yz.show({
            baf2ToastText: [(0, Az.Ud)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: sz,
                h: Fz,
                d: Wz
              }
            }, Az.N.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      hz.onSizeNotTaken(iz), Qz.onSizeNotTaken(iz);
      const nz = new gD,
        az = new RD(jz),
        qz = new fD,
        Vz = new Ug(qz),
        Rz = new rg,
        pz = new jg,
        Ez = new lg(pz),
        zt = new zH(pz),
        tt = pz.lookSource(),
        st = new DH({
          handles: zz => tt.handles(zz) || zz === yz,
          line: (zz, tz) => zz === yz ? function(zz, tz, sz) {
            var Fz;
            const Wz = lz(null === (Fz = tz.at(sz)) || void 0 === Fz ? void 0 : Fz.item);
            return null === Wz ? {
              key: `${NH}lookFarmEmpty`
            } : {
              key: zz.blockIdToBlockName(zz.getBlockId(sz[0], sz[1], sz[2])).endsWith("|Running") ? `${NH}lookFarmRunning` : `${NH}lookFarmWaiting`,
              keys: {
                mob: Lz(Wz)
              }
            }
          }(gz, Cz, tz) : tt.line(zz, tz),
          version: () => tt.version() + Cz.version()
        }, (zz => aw(jz.all(), zz, (zz => yw(gz, zz)))), (() => rz.get().tier)),
        Ft = new AD,
        Wt = new ZH,
        Xt = new yH,
        Ot = yH.blade(),
        ot = new lH,
        vt = new Eb,
        Ut = new VH,
        Kt = new QH,
        Nt = new hH;
      let bt = -1 / 0,
        wt = 0,
        Dt = -1 / 0,
        gt = -1 / 0;
      const Ht = () => {
          Hz.send("baf2islandsclose"), gt = Date.now()
        },
        Bt = [];

      function Pt(zz) {
        var tz, sz, Fz, Wz, Xz, Oz, vz;
        "core" === (null === (tz = oz.get()) || void 0 === tz ? void 0 : tz.kind) && "core" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && Hz.send("baf2coreclose"), "power" === (null === (sz = oz.get()) || void 0 === sz ? void 0 : sz.kind) && "power" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && Hz.send("baf2powerclose"), "water" === (null === (Fz = oz.get()) || void 0 === Fz ? void 0 : Fz.kind) && "water" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && Hz.send(fz.u), "terminal" === (null === (Wz = oz.get()) || void 0 === Wz ? void 0 : Wz.kind) && "terminal" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && Hz.send("baf2terminalclose"), "islands" === (null === (Xz = oz.get()) || void 0 === Xz ? void 0 : Xz.kind) && "islands" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && Ht();
        const Uz = pz.getStatus();
        "collider" === (null === (Oz = oz.get()) || void 0 === Oz ? void 0 : Oz.kind) && "collider" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && Uz && Hz.send(kv(Uz, "close"));
        const Kz = zz => "reactor" === zz || "battery" === zz;
        if (Kz(null === (vz = oz.get()) || void 0 === vz ? void 0 : vz.kind) && !Kz(null === zz || void 0 === zz ? void 0 : zz.kind)) {
          var uz, Nz, bz;
          const zz = "reactor" === (null === (uz = oz.get()) || void 0 === uz ? void 0 : uz.kind) ? null === (Nz = hz.get()) || void 0 === Nz ? void 0 : Nz.status.baf2RxAt : null === (bz = Qz.get()) || void 0 === bz ? void 0 : bz.status.baf2BatAt;
          zz && Hz.send(ut(zz, "close"))
        }
        "quests" === (null === zz || void 0 === zz ? void 0 : zz.kind) && Bz(), oz.set(zz), null === zz && xz.release()
      }

      function rt() {
        (0, YW.h)(), Pt(null)
      }
      let Yt = new Set,
        xt = !1;
      const mt = {
        onCreate: zz => {
          gz = zz, gz.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const tz of et) {
            const zz = At[tz].inputSlots ? Ao(Oz) : To(tz, Oz, Zz, Hz);
            Bt.push((0, PW.g)(tz, zz))
          }
          Bt.push((0, YW.x)((0, Fz.createElement)(Fz.Fragment, null, (0, Fz.createElement)(gb, {
            controller: bz
          }), (0, Fz.createElement)(vw, {
            store: Cz
          }), (0, Fz.createElement)(HH, {
            store: st
          }), (0, Fz.createElement)(Lb, {
            store: rz
          }), (0, Fz.createElement)(Sb, {
            store: Yz
          }), (0, Fz.createElement)(pb, {
            store: xz
          }), (0, Fz.createElement)(tw, {
            store: vt
          }), (0, Fz.createElement)(DD, {
            store: nz
          }), (0, Fz.createElement)(ED, {
            store: qz
          })), {
            content: (0, Fz.createElement)(Fb, {
              commands: Hz,
              store: oz,
              power: Zz,
              water: cz,
              reactor: hz,
              battery: Qz,
              collider: pz,
              terminal: Gz,
              quests: rz,
              close: YW.j,
              leave: () => {
                xz.dropHeld(), (0, YW.h)()
              },
              askIslands: () => {
                gt = -1 / 0, bt = Date.now(), wt = Hz.send(Sz)
              },
              openSocial: () => {
                (0, YW.h)(), xW.b.set({
                  openEverythingMenuName: Ns.r.SOCIAL
                })
              },
              showCore: zz => {
                Pt({
                  kind: "core",
                  core: zz
                }), Hz.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Pt(null)
            }
          })), Bt.push((0, rW.t)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Pt({
                kind: "quests"
              }), (0, YW.s)()
            }
          })), Bt.push(UB(Hz, rz, Yz)), xt = !1, Bt.push(CX((() => {
            null !== tB && FB(tB)
          }))), Bt.push(WB()), Bt.push(function() {
            const zz = MW.o.subscribe(hW, tX),
              tz = () => {
                if (zX) {
                  const zz = zX;
                  zX = null, (0, dW.u)(zz)
                }
              },
              sz = MW.o.subscribe("toggleMenu", (zz => {
                "inventory" === (null === zz || void 0 === zz ? void 0 : zz.split("|")[0]) && tz()
              })),
              Fz = MW.o.subscribe("appManagerUpdated|openInGameMenuName", (zz => {
                "inventory" === zz && tz()
              }));
            return () => {
              MW.o.unsubscribe(zz), MW.o.unsubscribe(sz), MW.o.unsubscribe(Fz)
            }
          }()), Bt.push(function(zz) {
            const tz = EH(zz),
              sz = MW.o.subscribe(hW, (zz => {
                fH.follow(zz, tz)
              }));
            return () => {
              MW.o.unsubscribe(sz), fH.clear()
            }
          }(gz)), Bt.push(function() {
            const zz = document.documentElement,
              tz = (0, yb.c)(".InvenBodyRight", [], (() => {
                const tz = document.querySelector(".InvenBodyRight");
                tz && zz.style.setProperty("--baf2-backpack-width", `${tz.offsetWidth}px`)
              }));
            return () => {
              tz(), zz.style.removeProperty("--baf2-backpack-width")
            }
          }()), Bt.push(function() {
            const zz = document.documentElement;
            return zz.classList.add(RH), () => {
              zz.classList.remove(RH)
            }
          }()), Bt.push((() => {
            Kz.dispose(), Uz.dispose()
          })), Dz.start(gz), Bt.push((() => {
            Dz.dispose(), ot.dispose(), ez.dispose()
          }))
        },
        onClose: () => {
          (0, dW.u)([]), zX = null, EW = new Set, tB = null, (0, dW.q)(new Map), BB.clear();
          for (const zz of Bt) zz();
          rz.dispose(), st.dispose(), Yz.dispose(), xz.dispose(), Ft.dispose(), Wt.dispose(gz), Mz.dispose(gz), dz.dispose(gz), az.dispose(gz), Vz.dispose(gz), qz.dispose(), Rz.dispose(), jz.dispose(), hz.dispose(), Qz.dispose(), nz.dispose(), Xt.dispose(), Ot.dispose(), vt.dispose(), Ez.dispose(gz), zt.dispose(gz), pz.dispose(), Ut.dispose(), Hz.clear()
        },
        onAfterRender: (zz, tz) => {
          var sz, Fz, Wz;
          try {
            Dz.onAfterRender(tz)
          } catch (Uz) {
            console.error("Error drawing BAF2 belt items", Uz)
          }
          try {
            ot.onAfterRender(gz, Xz)
          } catch (Uz) {
            console.error("Error drawing BAF2 jet flames", Uz)
          }
          xt || (xt = !0, Hz.send("baf2clientready"));
          const Oz = gz.getPositionView(Xz);
          bz.onAfterRender(tz, Oz, Nz), Cz.onAfterRender(tz, Oz, Nz, wz), Kz.run(Nz), Ft.onAfterRender(gz, Oz), Wt.onAfterRender(gz, Oz), ez.onAfterRender(gz, Oz), Mz.onAfterRender(gz, Oz), dz.onAfterRender(gz, Xz, Oz), az.onAfterRender(gz, Xz, Oz), Vz.onAfterRender(gz, Xz), Rz.onAfterRender(gz, Oz), rz.onPlayerY(Oz[1]), Ez.onAfterRender(gz), zt.onAfterRender(gz, Xz, Oz);
          const vz = gz.getTargetedBlock();
          st.onAfterRender(gz, Xz, null !== (sz = null === vz || void 0 === vz ? void 0 : vz.yV) && void 0 !== sz ? sz : 0, null !== (Fz = null === vz || void 0 === vz ? void 0 : vz.position) && void 0 !== Fz ? Fz : null), Ut.onAfterRender(gz, tz), Jz.onMining(function(zz, tz) {
            var sz, Fz;
            const Wz = zz.getMiningBlock();
            if (!Wz) return null;
            const Xz = (0, Tz.h)(zz.getBlockId(Wz[0], Wz[1], Wz[2])),
              Oz = null !== (sz = null === (Fz = zz.rtz(tz)) || void 0 === Fz ? void 0 : Fz.name) && void 0 !== sz ? sz : null,
              oz = zz.getItemStat(tz, Xz.split("|")[0], "harvestLevel");
            return {
              block: Xz,
              x: Wz[0],
              y: Wz[1],
              z: Wz[2],
              po: Oz,
              level: oz
            }
          }(gz, Xz), gz.isMining(), performance.now()), "dropMap" === (null === (Wz = oz.get()) || void 0 === Wz ? void 0 : Wz.kind) && kF(Oz[1]) && rt()
        },
        onPlayerChangeBlock: (zz, tz, sz, Fz, Wz, Oz) => {
          zz === Xz && function(zz, tz, sz, Fz, Wz, Xz, Oz) {
            const oz = dH(Xz, Oz, zz.isPlayerCrouching(tz));
            if (null === oz) return;
            if (zz.HJ(sz, Fz, Wz, oz), !zz.getClientOption(tz, "canPickUpItems")) return;
            const vz = os[oz.split("|")[0]];
            var Uz, Kz, uz;
            void 0 !== vz && (Uz = zz.getInventoryItems(), Kz = vz, uz = bw.d.maxItemStackSize, zz.getInventoryFreeSlotCount(tz) > 0 || Uz.some((zz => null !== zz && zz.name === Kz && null !== zz.amount && zz.amount < uz))) && zz.playSound(tz, (0, uB.b)("pickUp"), .5, 1)
          }(gz, zz, tz, sz, Fz, Wz, Oz)
        },
        onPlayerAltAction: (zz, tz, sz, Fz, Wz) => {
          var Oz, oz;
          if (!gz.getClientOption(Xz, "canPickUpItems")) return;
          const vz = null !== (Oz = null === (oz = gz.rtz(Xz)) || void 0 === oz ? void 0 : oz.name) && void 0 !== Oz ? Oz : null,
            Uz = function(zz, tz) {
              const sz = zz.split("|")[0];
              return Iz(sz) && tz !== KW && "Sky Pack" !== tz ? sz : null
            }(Wz, vz);
          if (null !== Uz) return void(Kt.tap(Uz, performance.now()) && zB(gz, Xz, Uz, rz));
          if (!nF(vz)) return;
          const Kz = Nt.isNewPress(performance.now()),
            uz = function(zz, tz, sz) {
              return !nF(tz) || sz ? null : zW(zz)
            }(Wz, vz, gz.isPlayerCrouching(Xz));
          null !== uz && Kz && gz.HJ(tz, sz, Fz, uz)
        },
        onPlayerAttemptAltAction: (zz, tz, sz, Fz, Wz) => {
          if (function(zz, tz, sz, Fz, Wz) {
              "Workbench" === Fz.split("|")[0] && zz.getClientOption(sz, "canCraft") && (fH.open("Workbench", Wz.get(), EH(zz)), tz.send("baf2station Workbench"))
            }(gz, Hz, Xz, Wz, rz), KB(gz, Xz, Wz)) return "preventAction";
          mz.onAltAction(gz, Xz, Wz)
        },
        onReceivedMessageFromServer: (zz, tz) => {
          if ("baf2MachineStatus" === zz) {
            var sz, Fz, Wz, Uz, Kz, uz, Nz, wz, Bz, mz, Jz, Iz, ez, Tz, Az, yz;
            const zz = tz,
              Xz = zz.baf2MachineTaught;
            Oz.set(zz.baf2MachinePos, {
              status: zz.baf2MachineStatus,
              power: null !== (sz = zz.baf2MachinePower) && void 0 !== sz ? sz : null,
              opLeftMs: null !== (Fz = zz.baf2MachineOpLeftMs) && void 0 !== Fz ? Fz : null,
              dug: zz.baf2MachineYield ? {
                item: zz.baf2MachineYield,
                name: Pz([zz.baf2MachineYield])[zz.baf2MachineYield]
              } : null,
              powerCap: null !== (Wz = zz.baf2MachinePowerCap) && void 0 !== Wz ? Wz : null,
              powerRates: null !== (Uz = zz.baf2MachinePowerRates) && void 0 !== Uz ? Uz : null,
              coupled: !0 === zz.baf2MachineCoupled,
              couplerLevel: null !== (Kz = zz.baf2MachineCoupler) && void 0 !== Kz ? Kz : 1,
              taught: Xz,
              taughtName: Xz ? Pz([Xz])[Xz] : null,
              tier: null !== (uz = zz.baf2MachineTier) && void 0 !== uz ? uz : null,
              input: null !== (Nz = zz.baf2MachineInput) && void 0 !== Nz ? Nz : null,
              inertCoupler: null !== (wz = zz.baf2MachineInertCoupler) && void 0 !== wz ? wz : null,
              inputShort: null !== (Bz = zz.baf2MachineInputShort) && void 0 !== Bz ? Bz : null,
              field: null !== (mz = zz.baf2MachineField) && void 0 !== mz ? mz : null,
              noSeeds: !0 === zz.baf2MachineNoSeeds,
              fuelFed: !0 === zz.baf2MachineFuelFed,
              fuelFeeds: !0 === zz.baf2MachineFuelFeeds,
              coreFull: !0 === zz.baf2MachineCoreFull,
              waterUnpowered: !0 === zz.baf2MachineWaterUnpowered,
              powerShort: !0 === zz.baf2MachinePowerShort,
              powerWait: !0 === zz.baf2MachinePowerWait,
              reactorPowered: !0 === zz.baf2MachineReactorPowered,
              fuelLeftMs: null !== (Jz = zz.baf2MachineFuelLeftMs) && void 0 !== Jz ? Jz : null,
              burning: null !== (Iz = zz.baf2MachineBurning) && void 0 !== Iz ? Iz : null,
              fuelKeep: null !== (ez = zz.baf2MachineFuelKeep) && void 0 !== ez ? ez : null,
              water: null !== (Tz = zz.baf2MachineWater) && void 0 !== Tz ? Tz : null,
              farm: null !== (Az = zz.baf2MachineFarm) && void 0 !== Az ? Az : null,
              cryo: null !== (yz = zz.baf2MachineCryo) && void 0 !== yz ? yz : null
            })
          } else if ("baf2StationOpen" === zz) {
            const zz = tz.baf2Station;
            Kt.consumeServerOpen(zz, performance.now()) || zB(gz, Xz, zz, rz)
          } else if ("baf2Power" === zz) {
            const zz = tz;
            Zz.set(zz), zz.baf2PowerOpen && (Pt({
              kind: "power"
            }), (0, YW.s)())
          } else if (zz === fz.z) {
            const zz = tz;
            cz.set(zz), zz.baf2WaterOpen && (Pt({
              kind: "water"
            }), (0, YW.s)())
          } else if ("baf2RxPlans" === zz) {
            var Mz, dz, iz;
            const zz = tz;
            jz.nB(zz);
            const sz = new Set(zz.baf2RxPlanList.map((zz => {
              let [tz, sz, Fz] = zz;
              return `${tz},${sz},${Fz}`
            })));
            nz.retain(sz);
            const Fz = null === (Mz = oz.get()) || void 0 === Mz ? void 0 : Mz.kind,
              Wz = "reactor" === Fz ? null === (dz = hz.get()) || void 0 === dz ? void 0 : dz.status.baf2RxAt : "battery" === Fz ? null === (iz = Qz.get()) || void 0 === iz ? void 0 : iz.status.baf2BatAt : void 0;
            Wz && Yt.has(Wz.join(",")) && !sz.has(Wz.join(",")) && rt(), Yt = sz
          } else if ("baf2RxStatus" === zz) {
            const zz = tz;
            hz.set(zz), zz.baf2RxOpen && (Pt({
              kind: "reactor"
            }), (0, YW.s)())
          } else if ("baf2BatStatus" === zz) {
            const zz = tz;
            Qz.set(zz), zz.baf2BatOpen && (Pt({
              kind: "battery"
            }), (0, YW.s)())
          } else if ("baf2RxAlarm" === zz) nz.nB(tz);
          else if ("baf2Bomb" === zz) qz.nB(tz, gz.getPositionView(Xz));
          else if ("baf2Fallout" === zz) Rz.nB(tz);
          else if ("baf2ColBeams" === zz) pz.onBeams(tz);
          else if ("baf2ColStatus" === zz) {
            const zz = tz;
            var Lz, lz;
            if (pz.onStatus(zz), zz.baf2ColOpen) pz.onOpen(null !== (Lz = null === (lz = gz.rtz(Xz)) || void 0 === lz ? void 0 : lz.name) && void 0 !== Lz ? Lz : null), Pt({
              kind: "collider"
            }), (0, YW.s)()
          } else if ("baf2Terminal" === zz) {
            const zz = tz;
            var az;
            if (Gz.apply(zz)) zz.baf2TermReset && (Pt({
              kind: "terminal"
            }), (0, YW.s)());
            else "terminal" === (null === (az = oz.get()) || void 0 === az ? void 0 : az.kind) && (oz.set(null), (0, YW.h)())
          } else if ("baf2Core" === zz) {
            var Vz;
            const zz = tz;
            if (vz(!0 === zz.baf2CoreNuclear), function(zz, tz) {
                return "core" === (null === zz || void 0 === zz ? void 0 : zz.kind) && tz.baf2CoreTier > zz.core.message.baf2CoreTier
              }(oz.get(), zz)) return void(0, YW.h)();
            if (zz.baf2CoreRefresh && "core" !== (null === (Vz = oz.get()) || void 0 === Vz ? void 0 : Vz.kind)) return;
            Pt({
              kind: "core",
              core: gB(zz, Pz)
            }), zz.baf2CoreRefresh || (0, YW.s)()
          } else if ("baf2WrenchUndo" === zz) {
            const {
              baf2WrenchPos: zz,
              baf2WrenchBlock: sz
            } = tz;
            gz.HJ(zz[0], zz[1], zz[2], sz)
          } else if ("baf2Toast" === zz) {
            const zz = tz;
            kz.heard(performance.now(), zz.baf2ToastMs), Yz.show(zz)
          } else if ("baf2Area" === zz) xz.arrive(tz, null !== oz.get());
          else if ("baf2Quest" === zz) {
            const zz = tz;
            vz(!0 === zz.baf2QuestNuclear), rz.set(zz, function(zz, tz) {
              var sz, Fz, Wz, Xz, Oz;
              const oz = [];
              for (const [, , Kz, , , , , , uz, Nz] of zz.baf2QuestSteps) null !== Kz && oz.push(Kz), oz.push(...null !== uz && void 0 !== uz ? uz : [], ...null !== Nz && void 0 !== Nz ? Nz : []);
              zz.baf2QuestReward && oz.push(zz.baf2QuestReward);
              const vz = null === (sz = zz.baf2QuestSide) || void 0 === sz ? void 0 : sz[2][2];
              vz && oz.push(vz), oz.push(...null !== (Fz = null === (Wz = zz.baf2QuestSide) || void 0 === Wz ? void 0 : Wz[2][8]) && void 0 !== Fz ? Fz : [], ...null !== (Xz = null === (Oz = zz.baf2QuestSide) || void 0 === Oz ? void 0 : Oz[2][9]) && void 0 !== Xz ? Xz : []);
              for (const [Kz] of null !== (Uz = zz.baf2QuestAlso) && void 0 !== Uz ? Uz : []) {
                var Uz;
                oz.push(Kz)
              }
              return tz(oz)
            }(zz, Pz)), FB(zz.baf2QuestTier)
          } else if ("baf2Route" === zz) ! function(zz, tz) {
            let {
              baf2RouteCells: sz,
              baf2RouteInto: Fz
            } = tz;
            0 !== sz.length && Fz ? zz.setRouteChevrons({
              cells: sz.map(((zz, tz) => {
                const [Wz, , Xz] = function(zz, tz, sz) {
                  const Fz = sz + 1 < zz.length ? zz[sz + 1] : tz;
                  return [Fz[0] - zz[sz][0], 0, Fz[2] - zz[sz][2]]
                }(sz, Fz, tz);
                return {
                  pos: zz,
                  way: [Wz, Xz]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : zz.setRouteChevrons(null)
          }(gz, tz);
          else if ("baf2QuestBook" === zz) rz.setBook(tz);
          else if ("baf2Stalls" === zz) bz.set(tz.baf2StallCells);
          else if (zz === gs.r) Dz.onMoves(tz);
          else if (zz === gs.j) Dz.onLines(tz);
          else if ("baf2Labels" === zz) Cz.nB(tz);
          else if ("baf2DropMap" === zz) Pt({
            kind: "dropMap",
            dropMap: tz
          }), (0, YW.s)();
          else if ("baf2Islands" === zz) {
            var Ez, zt;
            const zz = tz;
            if (Hz.syncIslandEdits(zz.baf2IslandsAnswered), !zz.baf2IslandsOpen && "islands" !== (null === (Ez = oz.get()) || void 0 === Ez ? void 0 : Ez.kind)) return;
            if (zz.baf2IslandsOpen) {
              var tt, st;
              const tz = xW.b.get("openEverythingMenuName"),
                sz = Hz.sent() >= wt,
                Fz = "other" !== (Bt = {
                  askedAtMs: bt,
                  askSent: sz,
                  reaskedAtMs: Dt,
                  nowMs: Date.now(),
                  panel: null !== (tt = null === (st = oz.get()) || void 0 === st ? void 0 : st.kind) && void 0 !== tt ? tt : null,
                  inGameMenu: xW.b.get("openInGameMenuName"),
                  everythingMenu: null === tz ? null : tz === Ns.r.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== zz.baf2IslandsFocusInvite
                }).everythingMenu && (!!Bt.focusInvite || "islands" === Bt.panel && "clientGame" === Bt.inGameMenu || !(Bt.nowMs - Bt.reaskedAtMs < MU) && (Bt.askSent && Bt.nowMs - Bt.askedAtMs < MU ? "core" === Bt.panel && "clientGame" === Bt.inGameMenu && null === Bt.everythingMenu : "shop" === Bt.everythingMenu || null === Bt.inGameMenu));
              if (sz && (bt = -1 / 0), Dt = -1 / 0, !Fz) return void Ht()
            }
            const sz = (Wt = zz.baf2IslandsOpen, Ut = "islands" === (null === (zt = oz.get()) || void 0 === zt ? void 0 : zt.kind), ut = gt, Nt = Date.now(), Wt && !Ut && Nt - ut < MU);
            Pt({
              kind: "islands",
              islands: zz,
              arrivedAtMs: Date.now(),
              backToCore: dU(oz.get())
            }), sz && (gt = -1 / 0, Dt = Date.now(), Hz.send(Sz)), zz.baf2IslandsOpen && ("clientGame" !== xW.b.get("openInGameMenuName") && (0, mW.h)(), (0, YW.s)())
          } else if ("baf2CoopTransfer" === zz) {
            var Ft;
            const zz = tz;
            zz.baf2TransferOn ? (Pt({
              kind: "transfer",
              transfer: zz,
              arrivedAtMs: Date.now()
            }), (0, YW.s)()) : "transfer" === (null === (Ft = oz.get()) || void 0 === Ft ? void 0 : Ft.kind) && (0, YW.h)()
          } else "baf2IslandLeft" === zz ? (xz.dropHeld(), null !== oz.get() && rt(), "inventory" === xW.b.get("openInGameMenuName") && (0, mW.h)()) : "baf2Arc" === zz ? Xt.nB(gz, tz) : "baf2Blade" === zz ? Ot.onBlade(gz, tz) : "baf2JetFlame" === zz ? ot.nB(gz, tz) : "baf2GearPower" === zz && vt.nB(tz);
          var Wt, Ut, ut, Nt, Bt
        }
      };
      return mt
    }
  },
  37934: (zz, tz, sz) => {
    function Fz(zz, tz, sz) {
      const Fz = new Set,
        Wz = new ResizeObserver(sz),
        Xz = () => {
          const tz = new Set(document.querySelectorAll(zz));
          let Xz = !1;
          for (const zz of Fz) tz.has(zz) || (Wz.unobserve(zz), Fz.delete(zz), Xz = !0);
          for (const zz of tz) Fz.has(zz) || (Wz.observe(zz), Oz.observe(zz, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Fz.add(zz));
          Xz && sz()
        },
        Oz = new MutationObserver((tz => {
          tz.some((zz => "attributes" === zz.type)) && sz(), tz.some((tz => function(zz, tz, sz) {
            if ("childList" !== zz.type) return !1;
            for (const Fz of zz.addedNodes)
              if (Fz instanceof Element && (Fz.matches(tz) || Fz.querySelector(tz))) return !0;
            for (const Fz of zz.removedNodes)
              if (Fz instanceof Element)
                for (const zz of sz)
                  if (Fz.contains(zz)) return !0;
            return !1
          }(tz, zz, Fz))) && Xz()
        }));
      Oz.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const oz of tz) Wz.observe(oz);
      return window.addEventListener("resize", sz), Xz(), sz(), () => {
        Wz.disconnect(), Oz.disconnect(), window.removeEventListener("resize", sz)
      }
    }
    sz.d(tz, {
      c: () => Fz
    })
  },
  37917: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      e: () => Xz
    });
    const Fz = new WeakMap;

    function Wz(zz) {
      let tz = Fz.get(zz);
      return tz || (tz = {
        hidden: zz.hidden,
        x: NaN,
        y: NaN
      }, Fz.set(zz, tz)), tz
    }

    function Xz(zz, tz) {
      const sz = Wz(zz);
      sz.hidden !== tz && (sz.hidden = tz, zz.hidden = tz)
    }

    function Oz(zz, tz, sz) {
      const Fz = Wz(zz);
      Fz.x === tz && Fz.y === sz || (Fz.x = tz, Fz.y = sz, zz.style.translate = `${tz}vw ${sz}vh`)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);