export const id = 237;
export const ids = [237];
export const modules = {
  38029: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv
    });
    var hv = Pv(38036);
    const Sv = [0, 0, 0];
    class ev {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sv;
        this.pool = vv, this.origin = zv, this.count = 0, this.free = []
      }
      take() {
        var vv;
        const zv = null !== (vv = this.free.pop()) && void 0 !== vv ? vv : this.count++;
        return zv >= this.pool.GT && this.pool.grow(Math.max(2 * this.pool.GT, zv + 1)), this.hide(zv), zv
      }
      release(vv) {
        this.hide(vv), this.free.push(vv)
      }
      write(vv, zv, Pv, Sv) {
        const {
          records: ev
        } = this.pool, {
          origin: gv
        } = this, pv = vv * hv.b;
        ev[pv] = zv - gv[0], ev[pv + 1] = Pv - gv[1], ev[pv + 2] = Sv - gv[2], ev[pv + hv.e] = 0, this.pool.markDirty(vv)
      }
      hide(vv) {
        this.pool.records[vv * hv.b + hv.e] = 1, this.pool.markDirty(vv)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class gv {
      constructor(vv, zv, Pv) {
        this.api = vv, this.model = zv, this.initialCapacity = Pv, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(vv) {
        let zv = this.kinds.get(vv);
        if (void 0 === zv) {
          const Pv = this.api.createInstancePool({
            ...this.model,
            item: vv
          }, this.initialCapacity);
          null === Pv || void 0 === Pv || Pv.setOrigin(this.origin[0], this.origin[1], this.origin[2]), zv = Pv && new ev(Pv, this.origin), this.kinds.set(vv, zv)
        }
        return zv
      }
      follow(vv) {
        const {
          origin: zv
        } = this;
        if (Math.abs(vv[0] - zv[0]) <= 512 && Math.abs(vv[1] - zv[1]) <= 512 && Math.abs(vv[2] - zv[2]) <= 512) return !1;
        zv[0] = Math.floor(vv[0]), zv[1] = Math.floor(vv[1]), zv[2] = Math.floor(vv[2]);
        for (const Pv of this.kinds.values()) null === Pv || void 0 === Pv || Pv.pool.setOrigin(zv[0], zv[1], zv[2]);
        return !0
      }
      commit() {
        for (const vv of this.kinds.values()) null === vv || void 0 === vv || vv.commit()
      }
      dispose() {
        for (const vv of this.kinds.values()) null === vv || void 0 === vv || vv.dispose();
        this.kinds.clear()
      }
    }
  },
  38051: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      g: () => pv,
      i: () => dv
    });
    const hv = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Sv = [0, 1, 2, 0, 2, 3],
      ev = [4, 5];

    function gv(vv, zv, Pv, hv, Sv) {
      for (let gv = 0; gv < 6; gv++) ev.includes(gv) === Sv && Nv(vv, zv, Pv, hv, gv)
    }

    function pv(vv, zv, Pv, hv) {
      for (let Sv = 0; Sv < 6; Sv++) Nv(vv, zv, Pv, hv, Sv)
    }

    function dv(vv, zv, Pv, ev, gv) {
      for (let pv = 0; pv < 6; pv++)
        for (const dv of [0, 1]) {
          const [Nv, lv, Tv] = [dv + 2, dv + 1, (dv + 3) % 4], Wv = vv.length / 3;
          for (const [zv, Sv] of [
              [dv, lv],
              [Nv, lv],
              [Nv, Tv],
              [dv, Tv]
            ])
            for (let dv = 0; dv < 3; dv++) {
              const Nv = hv[3 * (4 * pv + zv) + dv],
                lv = hv[3 * (4 * pv + Sv) + dv];
              vv.push((Nv + (lv - Nv) * gv) * ev / 2 + Pv[dv])
            }
          for (const vv of Sv) zv.push(Wv + vv)
        }
    }

    function Nv(vv, zv, Pv, ev, gv) {
      let [pv, dv, Nv] = Pv, [lv, Tv, Wv] = ev;
      const wv = vv.length / 3;
      for (let Sv = 4 * gv; Sv < 4 * gv + 4; Sv++) vv.push(hv[3 * Sv] * lv / 2 + pv, hv[3 * Sv + 1] * Tv / 2 + dv, hv[3 * Sv + 2] * Wv / 2 + Nv);
      for (const hv of Sv) zv.push(wv + hv)
    }
  },
  38015: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => jc
    });
    var hv = Pv(52);
    const Sv = [{
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
      ev = 10;
    let gv = !0;

    function pv() {
      return gv
    }

    function dv(vv) {
      gv = vv
    }
    const Nv = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function lv() {
      return gv ? Sv.length : ev
    }

    function Tv(vv) {
      var zv, Pv;
      return null !== (zv = null === (Pv = Sv[vv - 1]) || void 0 === Pv ? void 0 : Pv.reactorTier) && void 0 !== zv ? zv : 0
    }

    function Wv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tv(vv) > 0;
      return Pv && !gv ? "hidden" : vv <= zv ? "open" : Pv ? zv < 5 ? "hidden" : zv < ev ? "teaser" : "locked" : "locked"
    }

    function wv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: hv,
        n: Sv
      } = Cv(vv);
      return {
        key: zv[hv],
        params: {
          [hv]: Pv ? String(Sv) : Sv
        }
      }
    }
    const av = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function sv(vv, zv) {
      return Tv(vv) > 0 && zv < ev
    }

    function Cv(vv) {
      const zv = Tv(vv);
      if (zv > 0) return {
        kind: "atomic",
        n: zv,
        short: `A${zv}`
      };
      const Pv = function(vv) {
        return vv >= 6 && vv <= 10 ? vv - 6 + 1 : 0
      }(vv);
      return Pv > 0 ? {
        kind: "stage",
        n: Pv,
        short: `S${Pv}`
      } : {
        kind: "tier",
        n: vv,
        short: String(vv)
      }
    }

    function iv(vv) {
      return Sv[Math.max(1, Math.min(vv, Sv.length)) - 1]
    }

    function cv(vv, zv) {
      return vv < zv ? function(vv) {
        var zv;
        return null !== (zv = Sv[vv]) && void 0 !== zv ? zv : null
      }(vv) : null
    }
    const Gv = "baf2coresubmit",
      mv = "baf2corebankpause",
      jv = "baf2coredeposit",
      fv = "baf2corechargepause";

    function Fv(vv) {
      var zv;
      return null !== (zv = vv.baf2CoreOpen) && void 0 !== zv ? zv : ev
    }
    const Yv = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function nv(vv) {
      return Yv.includes(vv)
    }
    const Ov = (vv, zv) => zv.map((zv => [zv, [vv]])),
      Dv = Object.fromEntries([...Ov("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Ov("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Ov("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Ov("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Ov("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Ov("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Ov("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Ov("Parts Bench", ["Focus Lens"]), ...Ov("Machine Bench", ["Laser", "Collider"]), ...Ov("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Ov("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Ov("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Ov("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Ov("Tool Bench", ["Mob Cage"]), ...Ov("Tool Bench", ["Pocket Terminal"]), ...Ov("Tool Bench", ["Comet Beacon"]), ...Ov("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Kv(vv) {
      var zv;
      return null !== (zv = Dv[vv]) && void 0 !== zv ? zv : ["Workbench"]
    }

    function Vv(vv) {
      return Kv(vv)[0]
    }
    Sv.slice(1).map(((vv, zv) => `Core Tier ${zv+2}`));
    var Uv = Pv(9101);
    const Rv = ["on", "hud", "off"];

    function xv(vv) {
      return "on" === vv
    }
    var tv = Pv(312);
    const qv = "Mob Farm",
      Iv = {
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
      Qv = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Zv = {
        1: 20,
        2: 60,
        3: 120
      },
      Av = "baf2farmvoid",
      Lv = "Caged ",
      Hv = " Spawner Block";

    function Mv(vv) {
      return `lifeform:${(0,tv.ee)(vv)}`
    }

    function yv(vv) {
      if (!vv) return null;
      if (vv.startsWith(Lv)) {
        const zv = vv.slice(6);
        return Qv.includes(zv) ? zv : null
      }
      if (vv.endsWith(Hv)) {
        const zv = vv.slice(0, -14);
        return void 0 !== Iv[zv] ? zv : null
      }
      return null
    }

    function Bv(vv) {
      return !0 === vv.mobFarm
    }

    function Jv(vv, zv) {
      return Zv[Iv[zv]] * vv.opMs / 1e3
    }
    const Ev = new Map;
    const ov = "baf2islands",
      bv = "baf2islandnew";

    function rv(vv) {
      const zv = Sv.findIndex((zv => zv.unlocks.includes(vv)));
      return zv < 0 ? 1 : zv + 1
    }

    function kv(vv) {
      return Math.floor(vv).toLocaleString("en-US")
    }
    var Xv = Pv(37946);
    const uv = "baf2terminaltake",
      vz = "baf2terminalput",
      zz = ["one", "stack", "fill"];

    function Pz(vv, zv, Pv) {
      return `${uv} ${vv} ${zv} ${Pv}`
    }

    function hz(vv, zv, Pv) {
      return `${vz} ${vv} ${zv} ${Pv}`
    }

    function Sz(vv) {
      return `${vz} ${vv}`
    }
    const ez = [
      [`${uv} `, "take"],
      [`${vz} `, "put"]
    ];

    function gz(vv) {
      const zv = ez.find((zv => {
        let [Pv] = zv;
        return vv.startsWith(Pv)
      }));
      if (!zv) return null;
      const [Pv, hv] = zv, [Sv, ev, ...gv] = vv.slice(Pv.length).trim().split(" "), pv = Number(Sv);
      if (!Number.isSafeInteger(pv) || pv <= 0) return null;
      if ("put" === hv && void 0 === ev) return {
        kind: "putAll",
        seq: pv
      };
      const dv = function(vv) {
        if (zz.includes(vv)) return vv;
        const zv = Number(vv);
        return /^\d+$/.test(vv) && Number.isSafeInteger(zv) && zv > 0 ? zv : null
      }(null !== ev && void 0 !== ev ? ev : "");
      return null === dv || 0 === gv.length ? null : {
        kind: hv,
        seq: pv,
        mode: dv,
        item: gv.join(" ")
      }
    }

    function pz(vv, zv) {
      const Pv = "number" === typeof vv ? vv : "one" === vv ? 1 : "stack" === vv ? 99 : zv;
      return Math.min(zv, Pv)
    }

    function dz(vv, zv) {
      const Pv = vv => "number" === typeof vv ? vv : "one" === vv ? 1 : 99;
      return "fill" === vv || "fill" === zv ? "fill" : Pv(vv) + Pv(zv)
    }

    function Nz(vv, zv) {
      const Pv = gz(vv),
        hv = gz(zv),
        Sv = Pv && hv ? function(vv, zv) {
          return "take" === vv.kind || "take" === zv.kind ? "take" === vv.kind && "take" === zv.kind && vv.item === zv.item ? {
            ...zv,
            mode: dz(vv.mode, zv.mode)
          } : null : "putAll" === vv.kind || "putAll" === zv.kind ? {
            kind: "putAll",
            seq: zv.seq
          } : vv.item === zv.item ? {
            ...zv,
            mode: dz(vv.mode, zv.mode)
          } : null
        }(Pv, hv) : null;
      return Sv ? "putAll" === (ev = Sv).kind ? Sz(ev.seq) : "put" === ev.kind ? hz(ev.seq, ev.mode, ev.item) : Pz(ev.seq, ev.mode, ev.item) : null;
      var ev
    }
    const lz = "baf2rx";

    function Tz(vv, zv) {
      for (var Pv = arguments.length, hv = new Array(Pv > 2 ? Pv - 2 : 0), Sv = 2; Sv < Pv; Sv++) hv[Sv - 2] = arguments[Sv];
      return [lz, vv[0], vv[1], vv[2], zv, ...hv].join(" ")
    }
    const Wz = 2,
      wz = 4,
      az = 8,
      sz = 16,
      Cz = 32,
      iz = 64,
      cz = 128,
      Gz = 256,
      mz = 512,
      jz = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      fz = [{
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
    const Fz = "Biomass",
      Yz = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function nz(vv) {
      return {
        input: Fz,
        inputAmount: 1,
        output: vv,
        outputAmount: 1
      }
    }
    const Oz = "baf2synth",
      Dz = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Kz = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Vz = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Uz = function(vv, zv) {
        return {
          input: vv,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: zv,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Rz = function(vv, zv) {
        return {
          ...Uz(vv, zv, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      xz = Kz.map((vv => Rz(vv, "Biomass", 2))),
      tz = {
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
          recipes: [Uz("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Uz("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Uz("Raw Gold", "Gold Grit", 2), Uz("Messy Stone", "Sand"), Uz("Gravel", "Sand"), Uz("Raw Voltite", "Voltite Dust", 2), Uz("Moonstone", "Moonstone Dust", 4), Uz("Wheat Seeds", "Fertiliser"), Uz("Raw Uranium", "Uranium Grit", 2), Rz("Mossy Messy Stone", "Sand"), ...xz],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Uz("Iron Grit", "Iron Bar"), Uz("Copper Grit", "Copper Bar"), Uz("Gold Grit", "Gold Bar"), Uz("Raw Iron", "Iron Bar"), Uz("Raw Copper", "Copper Bar"), Uz("Raw Gold", "Gold Bar"), Uz("Sand", "Glass"), Uz("Messy Stone", "Stone"), ...tv.Gc.map((vv => Uz(vv, "Charcoal", 1, 4))), Uz("Wheat", "Bread", 1, 2), ...Kz.map(((vv, zv) => Rz(vv, Vz[zv])))],
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
          recipes: [Uz("Iron Bar", "Iron Plate"), Uz("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Uz("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Uz("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Uz("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Uz("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Uz("Raw Gold", "Gold Grit", 3), Uz("Raw Voltite", "Voltite Dust", 3), Uz("Messy Stone", "Sand", 2), Uz("Gravel", "Sand", 2), Uz("Moonstone", "Moonstone Dust", 6), Uz("Raw Uranium", "Uranium Grit", 3), Rz("Mossy Messy Stone", "Sand", 2), ...xz],
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
          table: jz
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Uz("Coal", "Diamond", 1, 24), Uz("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Xv.h
      },
      qz = {
        Crusher: [Uz("Spent Pellet", "Glow Dust"), Uz("Wheat Seeds", "Biomass"), Uz("Wheat", "Biomass"), Uz("Dead Bush", "Biomass"), Uz("Dusk Moss", "Biomass"), Uz("Rotten Flesh", "Biomass"), Uz("Bone", "Biomass", 2)],
        "Shatter Mill": [Uz("Spent Pellet", "Glow Dust"), Uz("Wheat Seeds", "Biomass"), Uz("Wheat", "Biomass"), Uz("Dead Bush", "Biomass"), Uz("Dusk Moss", "Biomass"), Uz("Rotten Flesh", "Biomass"), Uz("Bone", "Biomass", 2), ...tv.Gc.map((vv => Uz(vv, "Biomass")))],
        Smelter: [Uz("Biomass", "Fertiliser", 2)],
        Press: [Uz("Coal", "Graphite", 1, 4)]
      },
      Iz = "Power Coupler",
      Qz = "Advanced Coupler",
      Zz = "Nova Coupler",
      Az = [{
        item: Iz,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Qz,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: Zz,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const Lz = new Map;

    function Hz(vv) {
      var zv, Pv;
      return null !== (zv = null !== (Pv = vv.fuelSlot) && void 0 !== Pv ? Pv : vv.couplerSlot) && void 0 !== zv ? zv : null
    }

    function Mz(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!vv.couplable) throw new Error(`${vv.kind} takes no Power Coupler`);
      let Pv = Lz.get(vv);
      Pv || (Pv = [], Lz.set(vv, Pv));
      let hv = Pv[zv];
      if (!hv) {
        var Sv;
        const {
          divisor: ev,
          powerPerS: gv
        } = Az[zv - 1], pv = vv.opMs / ev, dv = void 0 !== vv.fluidMade || void 0 !== vv.cryoMade ? vv.powerPerOp : gv * pv / 1e3;
        hv = {
          ...vv,
          fuelSlot: null,
          couplerSlot: null !== (Sv = Hz(vv)) && void 0 !== Sv ? Sv : void 0,
          opMs: pv,
          powerPerOp: dv,
          coupled: !0
        }, zv > 1 && (hv = {
          ...hv,
          couplerLevel: zv
        }), Pv[zv] = hv
      }
      return hv
    }
    const yz = new Map;
    const Bz = new Map;

    function Jz(vv, zv) {
      if (null === zv || (Pv = zv, !Yz.includes(Pv))) return vv;
      var Pv;
      let hv = Bz.get(zv);
      return hv || (hv = {
        ...vv,
        recipes: [nz(zv)]
      }, Bz.set(zv, hv)), hv
    }

    function Ez(vv) {
      return !0 === vv.synth
    }
    const oz = (vv, zv, Pv, hv) => ({
        output: vv,
        outputAmount: zv,
        tier: Pv,
        inputs: hv.map((vv => {
          let [zv, Pv] = vv;
          return {
            item: zv,
            amount: Pv
          }
        }))
      }),
      bz = Object.fromEntries([oz("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), oz("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), oz("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), oz("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), oz("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), oz("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), oz("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), oz("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), oz("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), oz("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), oz("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), oz("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), oz("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), oz("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), oz("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), oz("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), oz("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), oz("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), oz("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), oz("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), oz("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), oz("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), oz("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), oz("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), oz("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), oz("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), oz("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), oz("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), oz("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), oz("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((vv => [vv.output, vv]))),
      rz = new Map;

    function kz(vv, zv) {
      let Pv = tz[vv];
      if (zv.atomic && (Pv = function(vv) {
          const zv = qz[vv.kind];
          if (!zv) return vv;
          let Pv = yz.get(vv.kind);
          if (!Pv) {
            const hv = new Set(zv.map((vv => vv.input))),
              Sv = vv.recipes.filter((vv => !hv.has(vv.input)));
            Pv = {
              ...vv,
              recipes: [...Sv, ...zv]
            }, yz.set(vv.kind, Pv)
          }
          return Pv
        }(Pv)), Pv.synth) return Jz(Pv, zv.taught);
      if (zv.coupled && Pv.couplable) return Mz(Pv, zv.level);
      const hv = Pv.inputSlots && null !== zv.taught ? bz[zv.taught] : void 0;
      if (!hv) return Pv;
      const Sv = `${vv}|${hv.output}`;
      let ev = rz.get(Sv);
      return ev || (ev = {
        ...Pv,
        bench: hv
      }, rz.set(Sv, ev)), ev
    }
    const Xz = ["Diamond", "Moonstone"];

    function uz(vv) {
      return new Set(vv.flatMap((vv => vv.bonus ? [vv.output, vv.bonus.item] : [vv.output])).filter((vv => !Xz.includes(vv))))
    }
    const vP = Object.values(tz).flatMap((vv => vv.recipes));
    uz(vP.filter((vv => !0 !== vv.nuclear))), uz([...vP.filter((vv => !0 === vv.nuclear)), ...Object.values(qz).flat()]);

    function zP(vv) {
      return null === vv.inputSlot && void 0 === vv.inputSlots && void 0 === vv.powerMade && void 0 === vv.fluidMade && !vv.treeCutter && void 0 === vv.table
    }

    function PP(vv) {
      return !0 === vv.treeCutter
    }
    const hP = ["Voltite Cell"];

    function SP(vv) {
      var zv, Pv;
      return null !== (zv = null === (Pv = vv.fuels) || void 0 === Pv ? void 0 : Pv.some((vv => hP.includes(vv)))) && void 0 !== zv && zv
    }
    const eP = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(tv.Gc.map((vv => [vv, 8e3]))),
        ...Object.fromEntries(tv.jd.map((vv => [vv, 2e3]))),
        "Voltite Cell": 12e4
      },
      gP = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      pP = {
        "Uranium Deposit": 4e3
      };

    function dP(vv) {
      var zv;
      return null !== (zv = Object.keys(gP).find((zv => gP[zv] === vv))) && void 0 !== zv ? zv : null
    }

    function NP(vv) {
      return Dz.includes(vv)
    }

    function lP(vv) {
      return !0 !== vv.nuclear || pv()
    }
    var TP = Pv(302);
    var WP = Pv(9176),
      wP = Pv(9110),
      aP = Pv(9181),
      sP = Pv(9172);
    const CP = "Reactor Controller",
      iP = "Reactor Port",
      cP = "Battery Cell",
      GP = ["fuel", "water", "waste"],
      mP = {
        fuel: iP,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      jP = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      fP = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      FP = "Reactor Frame",
      YP = "Reactor Glass",
      nP = {
        edge: [FP],
        cap: [YP, iP],
        wall: [YP, iP],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [CP]
      },
      OP = {
        edge: [cP],
        cap: [cP],
        wall: [cP],
        inside: [cP],
        ctrl: [cP]
      },
      DP = ["edge", "cap", "wall", "inside"],
      KP = ["Reactor Slag"];

    function VP(vv) {
      return KP.includes(UP(vv))
    }

    function UP(vv) {
      const zv = vv.indexOf("|");
      return zv < 0 ? vv : vv.slice(0, zv)
    }

    function RP(vv) {
      return UP(vv) === CP ? "reactor" : null
    }

    function xP(vv) {
      return UP(vv) !== iP ? null : vv.endsWith("|Water") ? "water" : vv.endsWith("|Waste") ? "waste" : "fuel"
    }

    function tP(vv) {
      const zv = xP(vv);
      return null === zv ? null : QP(mP[GP[(GP.indexOf(zv) + 1) % GP.length]], function(vv) {
        return vv.includes(qP)
      }(vv))
    }
    const qP = "|meta|rot1|Formed",
      IP = new Set([FP, YP, iP]);

    function QP(vv, zv) {
      var Pv;
      const hv = UP(vv);
      if (!IP.has(hv)) return vv;
      if (hv !== iP) return zv ? hv + qP : hv;
      const Sv = null !== (Pv = xP(vv)) && void 0 !== Pv ? Pv : "fuel";
      return zv ? "fuel" === Sv ? hv + qP : `${hv}${qP}|${"water"===Sv?"Water":"Waste"}` : mP[Sv]
    }

    function ZP(vv, zv) {
      const Pv = hh(vv, zv);
      if ("Air" === Pv) return !1;
      const hv = "reactor" === vv ? nP : OP;
      return DP.some((vv => hv[vv].includes(Pv))) || "reactor" === vv && KP.includes(Pv)
    }

    function AP(vv) {
      return fP[vv]
    }

    function LP(vv) {
      var zv;
      return null !== (zv = jP[vv]) && void 0 !== zv ? zv : jP[1]
    }

    function HP(vv) {
      const [zv, , Pv] = LP(vv);
      return [Pv, 0, -zv]
    }

    function MP(vv, zv, Pv, hv, Sv, ev) {
      return {
        ctrl: [vv[0], vv[1], vv[2]],
        rot: jP[zv] ? zv : 1,
        w: Pv,
        h: hv,
        d: Sv,
        cu: ev[0],
        cv: ev[1]
      }
    }

    function yP(vv, zv) {
      return "reactor" === vv ? [Math.floor((zv - 1) / 2), 0] : [0, 0]
    }

    function BP(vv, zv, Pv, hv, Sv) {
      let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : vv.rot;
      if (Pv === vv.w && hv === vv.h && Sv === vv.d && ev === vv.rot) return vv;
      const [gv] = yP(zv, vv.w);
      if (vv.cu === gv && vv.cv <= 1) return MP(vv.ctrl, ev, Pv, hv, Sv, yP(zv, Pv));
      const pv = (vv, zv) => Math.max(1, Math.min(zv, vv));
      return MP(vv.ctrl, ev, Pv, hv, Sv, [pv(vv.cu, Pv - 2), 0 === vv.cv ? 0 : pv(vv.cv, hv - 2)])
    }
    const JP = 11,
      EP = 2 * JP + 1;
    new Uint8Array(EP * EP * EP);

    function oP(vv) {
      return vv.w * vv.h * vv.d
    }

    function bP(vv) {
      const zv = HP(vv.rot);
      return [vv.ctrl[0] - zv[0] * vv.cu, vv.ctrl[1] - vv.cv, vv.ctrl[2] - zv[2] * vv.cu]
    }

    function rP(vv) {
      return vv.cv * vv.d * vv.w + vv.cu
    }

    function kP(vv, zv) {
      const Pv = zv % vv.w,
        hv = Math.floor(zv / vv.w) % vv.d;
      return [Pv, Math.floor(zv / (vv.w * vv.d)), hv]
    }

    function XP(vv, zv) {
      const [Pv, hv, Sv] = kP(vv, zv), ev = bP(vv), gv = LP(vv.rot), pv = HP(vv.rot);
      return [ev[0] + pv[0] * Pv - gv[0] * Sv, ev[1] + hv, ev[2] + pv[2] * Pv - gv[2] * Sv]
    }

    function uP(vv, zv) {
      const Pv = bP(vv),
        hv = LP(vv.rot),
        Sv = HP(vv.rot),
        ev = zv[0] - Pv[0],
        gv = zv[2] - Pv[2],
        pv = ev * Sv[0] + gv * Sv[2],
        dv = -(ev * hv[0] + gv * hv[2]),
        Nv = zv[1] - Pv[1];
      return pv < 0 || pv >= vv.w || Nv < 0 || Nv >= vv.h || dv < 0 || dv >= vv.d ? -1 : (Nv * vv.d + dv) * vv.w + pv
    }

    function vh(vv, zv) {
      if (zv === rP(vv)) return "ctrl";
      const [Pv, hv, Sv] = kP(vv, zv), ev = 0 === hv || hv === vv.h - 1, gv = Number(0 === Pv || Pv === vv.w - 1) + Number(ev) + Number(0 === Sv || Sv === vv.d - 1);
      return gv >= 2 ? "edge" : 1 === gv ? ev ? "cap" : "wall" : "inside"
    }

    function zh(vv, zv) {
      const [Pv, hv, Sv] = kP(vv, zv);
      return 0 === Pv || Pv === vv.w - 1 || 0 === hv || hv === vv.h - 1 || 0 === Sv || Sv === vv.d - 1 ? -1 : ((hv - 1) * (vv.d - 2) + (Sv - 1)) * (vv.w - 2) + (Pv - 1)
    }

    function Ph(vv, zv) {
      const Pv = vv.w - 2,
        hv = vv.d - 2,
        Sv = zv % Pv + 1,
        ev = Math.floor(zv / Pv) % hv + 1;
      return ((Math.floor(zv / (Pv * hv)) + 1) * vv.d + ev) * vv.w + Sv
    }

    function hh(vv, zv) {
      const Pv = UP(zv);
      return "reactor" === vv && Pv === CP ? FP : Pv
    }

    function Sh(vv, zv, Pv) {
      const hv = "ctrl" === zv ? UP(Pv) : hh(vv, Pv);
      return ("reactor" === vv ? nP : OP)[zv].includes(hv) ? "ok" : "Air" === hv ? "missing" : ZP(vv, Pv) ? "wrong" : "blocked"
    }

    function eh(vv, zv) {
      return "battery" === vv ? cP : "inside" === zv ? null : function(vv, zv) {
        if ("inside" === zv || "ctrl" === zv || "battery" === vv) return null;
        return "edge" === zv ? FP : YP
      }(vv, zv)
    }
    const gh = {
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
      ph = "Collider",
      dh = "Laser",
      Nh = "Star Alloy",
      lh = "Glow Dust",
      Th = [ph, "_Collider Focus"];

    function Wh(vv) {
      return Th.indexOf(UP(vv))
    }

    function wh(vv) {
      return UP(vv) === dh
    }

    function ah(vv) {
      return [
        [vv[0], vv[1], vv[2]],
        [vv[0], vv[1] + 1, vv[2]]
      ]
    }
    const sh = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Ch(vv, zv, Pv) {
      const hv = sh[zv];
      return [vv[0] + hv[0] * Pv, vv[1], vv[2] + hv[2] * Pv]
    }

    function ih(vv, zv) {
      if (zv[1] !== vv[1]) return null;
      const Pv = zv[0] - vv[0],
        hv = zv[2] - vv[2];
      if (0 !== Pv === (0 !== hv)) return null;
      const Sv = Math.abs(Pv + hv);
      if (Sv > gh.LASER_D) return null;
      return {
        dir: hv < 0 ? 0 : Pv > 0 ? 1 : hv > 0 ? 2 : 3,
        Mg: Sv
      }
    }

    function ch(vv, zv, Pv) {
      const hv = zv => Math.abs(vv[0] - zv[0]) <= 1 && Math.abs(vv[1] - zv[1]) <= 1;
      return hv(zv) || hv(Pv)
    }

    function Gh(vv, zv) {
      return function(vv, zv, Pv, hv) {
        return [0, 1, 2, 3].map((Sv => {
          for (let ev = 1; ev <= gh.LASER_D; ev++) {
            const gv = Ch(vv, Sv, ev);
            if (ch([gv[0], gv[2]], zv, Pv) || !hv(gv)) return !1
          }
          return !0
        }))
      }(ah(vv)[1], zv.spawnXZ, zv.coreXZ, (vv => vv[1] >= WP.l && vv[1] < WP.l + WP.m && vv[0] >= zv.minXZ[0] && vv[0] <= zv.maxXZ[0] && vv[2] >= zv.minXZ[1] && vv[2] <= zv.maxXZ[1]))
    }
    const mh = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function jh(vv) {
      return Math.max(48 + 16 * vv, iv(vv).machineAllowance)
    }
    const fh = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function Fh(vv) {
      const zv = vv.split("|")[0];
      return fh.includes(zv) ? "Solar Panel" : zv === aP.e ? "Fluid Pipe" : Wh(zv) >= 0 ? "Collider" : (Pv = zv, mh.includes(Pv) ? zv : null);
      var Pv
    }
    const Yh = "buildAFactory2Game:solarPanelDescription";
    const nh = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function Oh(vv, zv) {
      var Pv;
      return null !== (Pv = nh.find((Pv => {
        var hv;
        return (null !== (hv = vv.level(Pv)) && void 0 !== hv ? hv : 0) >= zv
      }))) && void 0 !== Pv ? Pv : null
    }
    const Dh = "buildAFactory2Game:";
    let Kh = null;
    const Vh = {
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
      Uh = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      Rh = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      xh = {
        "Loot Chest": `${Dh}lookRuinChestName`
      };

    function th(vv) {
      return "object" === typeof vv && null !== vv && "translationKey" in vv && "string" === typeof vv.translationKey ? vv.translationKey : null
    }

    function qh(vv, zv) {
      var Pv;
      return null !== (Pv = th(vv.displayName(zv))) && void 0 !== Pv ? Pv : `item:${(0,tv.ee)(zv)}`
    }

    function Ih(vv, zv) {
      var Pv, hv, Sv, ev;
      let gv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zv;
      if ("Solar Panel" === Fh(zv)) return {
        name: th(vv.displayName("Solar Panel")),
        detail: Yh,
        detailItem: null
      };
      const dv = zv.endsWith(" Ore"),
        Nv = (Kh ??= new Set([...Object.keys((0, wP.h)()), ...Object.keys((0, aP.w)())].map((vv => vv.split("|")[0]))), Kh).has(zv),
        lv = dv || Nv ? null : function(vv) {
          var zv;
          return vv.endsWith(" Log") && !vv.startsWith("Barkless ") ? "lookLog" : vv.endsWith(" Sapling") ? "lookSapling" : vv.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (zv = Vh[vv]) && void 0 !== zv ? zv : null
        }(zv);
      if (!vv.isBlock(zv) || !dv && !Nv && null === lv) return null;
      const Tv = null !== (Pv = null !== (hv = xh[zv]) && void 0 !== hv ? hv : th(null !== (Sv = vv.displayName(gv)) && void 0 !== Sv ? Sv : vv.displayName(zv))) && void 0 !== Pv ? Pv : `item:${(0,tv.ee)(zv)}`;
      if (null !== lv) return {
        name: Tv,
        detail: `${Dh}${lv}`,
        detailItem: null
      };
      const Wv = null !== (ev = Uh[zv]) && void 0 !== ev ? ev : pv() ? Rh[zv] : void 0;
      if (Nv && void 0 !== Wv) return {
        name: Tv,
        detail: `${Dh}${Wv}`,
        detailItem: null
      };
      const wv = gP[zv];
      if (void 0 !== wv) return {
        name: Tv,
        detail: `${Dh}lookDeposit`,
        detailItem: qh(vv, wv)
      };
      const av = vv.harvestLevel(zv);
      if (dv && "rock" === vv.harvestType(zv) && 0 !== av) {
        const zv = Oh(vv, null !== av && void 0 !== av ? av : 0);
        if (zv === nh[0]) return {
          name: Tv,
          detail: `${Dh}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== zv) return {
          name: Tv,
          detail: `${Dh}lookPickaxe`,
          detailItem: qh(vv, zv)
        }
      }
      return {
        name: Tv,
        detail: th(vv.description(zv)),
        detailItem: null
      }
    }

    function Qh(vv) {
      return vv < WP.l - 24
    }
    const Zh = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const Ah = "Wrench",
      Lh = "Nova Wrench";

    function Hh(vv) {
      return vv === Ah || vv === Lh
    }
    const Mh = [...WP.G, "Belt Lift", "Belt Drop"];
    const yh = ["Belt Lift", "Belt Drop"],
      Bh = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Jh(vv) {
      return vv.split("|")[0]
    }

    function Eh(vv) {
      const zv = /\|rot(\d)/.exec(vv);
      return zv ? Number(zv[1]) : 1
    }

    function oh(vv) {
      return vv % 4 + 1
    }

    function bh(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === zv && "" === Pv ? vv : `${vv}|meta|rot${zv}${Pv}`
    }

    function rh(vv) {
      return Jh(vv) === WP.u ? (0, WP.Q)(vv) ? "gateRight" : "gateLeft" : (0, WP.U)(vv)
    }

    function kh(vv) {
      const zv = Jh(vv),
        Pv = Eh(vv);
      if (WP.G.includes(zv)) return (0, WP.J)(zv, oh(Pv), null);
      if (zv === WP.i) return (0, WP.Z)(oh(Pv), (0, WP.T)(vv));
      if (zv === WP.y) {
        const hv = Bh[(0, WP.U)(vv)];
        return null === hv ? bh(zv, oh(Pv)) : bh(zv, Pv, WP.C[hv])
      }
      return zv === WP.u ? (0, WP.Q)(vv) ? bh(zv, oh(Pv)) : bh(zv, Pv, WP.k) : sP.b.includes(zv) && !yh.includes(zv) || NP(zv) ? bh(zv, oh(Pv)) : null
    }

    function Xh(vv) {
      return sP.b.includes(vv) || NP(vv) || null !== Fh(vv)
    }

    function uh(vv) {
      return "Solar Panel" === Fh(vv)
    }
    const vS = "buildAFactory2Game:",
      zS = {
        leftFront: `${vS}lookSplitDetail_leftFront`,
        frontRight: `${vS}lookSplitDetail_frontRight`,
        gateRight: `${vS}lookGateDetail_gateRight`
      };

    function PS(vv, zv) {
      var Pv;
      let hv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Sv = rh(vv),
        ev = null === Sv ? null : `${vS}${Sv.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Sv}`,
        gv = null === Sv ? null : null !== (Pv = zS[Sv]) && void 0 !== Pv ? Pv : null;
      if (Hh(zv) && hv) {
        const Pv = Jh(vv);
        return zv === Lh && pv() && function(vv) {
          return Mh.includes(Jh(vv))
        }(vv) ? {
          mode: ev,
          detail: gv,
          next: `${vS}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: ev,
          detail: gv,
          next: Xh(Pv) && !uh(Pv) ? `${vS}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const dv = Hh(zv) ? kh(vv) : null;
      if (null === dv) return {
        mode: ev,
        detail: gv,
        next: null,
        nextState: null
      };
      const Nv = rh(dv);
      return null === Nv || Eh(dv) !== Eh(vv) ? {
        mode: ev,
        detail: gv,
        next: `${vS}lookWrenchTurn`,
        nextState: null
      } : {
        mode: ev,
        detail: gv,
        next: `${vS}lookWrenchNext`,
        nextState: `${vS}lookWrenchState_${Nv}`
      }
    }
    const hS = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const SS = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function eS(vv) {
      return [0, 1, 2, 3].map((zv => 0 !== (vv & 1 << zv)))
    }

    function gS(vv) {
      const zv = [];
      for (let Pv = 8; Pv + 2 < vv.length; Pv += 3) zv.push([vv[Pv], vv[Pv + 1], vv[Pv + 2]]);
      return {
        focus: [vv[0], vv[1], vv[2]],
        lasers: eS(vv[3]),
        open: eS(vv[4]),
        live: eS(vv[5]),
        on: 1 === vv[6],
        state: SS[vv[7]],
        blockers: zv
      }
    }
    const pS = "Arc Caster",
      dS = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      NS = (Object.values(dS), "Jet Chestplate"),
      lS = "Nova Jet Chestplate",
      TS = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      WS = Object.values(TS);

    function wS(vv, zv, Pv) {
      return Math.min(function(vv) {
        return pv() && Tv(vv) >= 5 ? 20 : 10
      }(Pv), Math.floor(function(vv, zv) {
        return Math.max(0, vv) + (pv() ? Math.max(0, zv) : 0)
      }(vv, zv) / 5))
    }

    function aS(vv, zv, Pv) {
      const hv = wS(zv, Pv, vv),
        Sv = Tv(vv),
        ev = (Sv >= 3 ? 55 : Sv >= 1 ? 50 : vv >= 8 ? 45 : 30) + hv,
        gv = Math.max(100 + hv, 2 * ev);
      return {
        arcDamage: ev,
        arcPierce: vv >= 7 ? 2 : 1,
        arcChain: vv >= 10,
        barrierMax: (Sv >= 4 ? 100 : Sv >= 2 ? 90 : vv >= 9 ? 80 : vv >= 6 ? 60 : 40) + 5 * hv,
        barrierRegenPerS: Sv >= 5 ? 20 : vv >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * hv,
        novaShieldRegenPerS: 32,
        bladeDamage: gv,
        bladePunch: Math.round(.5 * gv),
        forgeRank: hv
      }
    }
    const sS = {
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
    var CS = Pv(36342),
      iS = Pv(36139),
      cS = Pv(36137),
      GS = Pv(22),
      mS = Pv(1610),
      jS = Pv(1035),
      fS = Pv.n(jS);

    function FS(vv) {
      return !0 === vv.field
    }
    const YS = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function nS(vv) {
      return YS.has(vv) ? `buildAFactory2Game:itemPlural_${(0,tv.ee)(vv)}` : null
    }
    var OS = Pv(1175),
      DS = Pv(1042),
      KS = Pv(1871),
      VS = Pv(1858),
      US = Pv(36334),
      RS = Pv(36336),
      xS = Pv(26),
      tS = Pv(36329);
    const qS = "baf2QuestView",
      IS = "baf2PlayerY",
      QS = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class ZS {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = vv, this.view = {
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
      set(vv, zv) {
        var Pv, hv, Sv, ev, gv, pv, dv, Nv;
        const lv = JSON.stringify(vv.baf2QuestName) === JSON.stringify(this.view.name),
          Tv = new Set(this.view.rows.filter((vv => vv.done)).map((vv => vv.id))),
          Wv = new Set(this.view.rows.filter((vv => vv.justFinished)).map((vv => vv.id))),
          wv = vv.baf2QuestSide,
          av = null !== wv && !0 === vv.baf2QuestSideFocus;
        let sv = !1,
          Cv = 0;
        const iv = vv.baf2QuestSteps.map((vv => {
            const zv = ES(vv, QS.has(vv[0]) ? vv[0] : "" + Cv++),
              Pv = lv && zv.done && !Tv.has(zv.id);
            return zv.justFinished = Pv || lv && zv.done && Wv.has(zv.id), sv ||= Pv, zv
          })),
          cv = JS(iv);
        cv >= 0 && !av && (iv[cv].current = !0);
        const Gv = !lv && null !== vv.baf2QuestName,
          mv = JSON.stringify(wv && [wv[0], wv[1]]),
          jv = mv === JSON.stringify(null !== (Pv = null === (hv = this.view.side) || void 0 === hv ? void 0 : hv.name) && void 0 !== Pv ? Pv : null),
          fv = null !== wv && !this.sidesSeen.has(mv);
        fv && this.sidesSeen.add(mv), this.serverTutorial = null !== (Sv = vv.baf2QuestTutorial) && void 0 !== Sv ? Sv : "on", (null !== (ev = vv.baf2QuestTutorialSeq) && void 0 !== ev ? ev : 0) >= this.pickSeq && this.endPick();
        const Fv = !lv || !jv || vv.baf2QuestTier !== this.view.tier;
        this.view = {
          name: vv.baf2QuestName,
          rows: iv,
          reward: vv.baf2QuestReward,
          goal: vv.baf2QuestGoal,
          pulse: this.view.pulse + (sv || Gv ? 1 : 0),
          itemNames: zv,
          side: wv && {
            name: [wv[0], wv[1]],
            row: {
              ...ES(wv[2], "side"),
              current: av
            },
            goal: null !== (gv = wv[3]) && void 0 !== gv ? gv : null
          },
          sideCameUpAt: fv ? Date.now() : this.view.sideCameUpAt,
          tier: vv.baf2QuestTier,
          core: vv.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (pv = vv.baf2QuestAlso) && void 0 !== pv ? pv : [],
          depth: null !== (dv = vv.baf2QuestDepth) && void 0 !== dv ? dv : null,
          tutorial: null !== (Nv = this.pickedTutorial) && void 0 !== Nv ? Nv : this.serverTutorial,
          tutorialKnown: !0
        }, this.zC(), sv && this.scheduleClear(), Fv && this.requestBook()
      }
      setTutorial(vv) {
        return this.endPick(), this.pickedTutorial = vv, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.zC()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: vv
        }, this.zC(), this.pickSeq
      }
      onPlayerY(vv) {
        const zv = Math.floor(vv);
        zv !== this.playerY && (this.playerY = zv, this.view.depth && xS.j.zC(IS, zv))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(vv) {
        this.view = {
          ...this.view,
          chapters: vv.baf2BookChapters
        }, this.zC()
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
            rows: this.view.rows.map((vv => vv.justFinished ? {
              ...vv,
              justFinished: !1
            } : vv))
          }, this.zC()
        }), 2400)
      }
      zC() {
        xS.j.zC(qS, this.view, !0)
      }
    }

    function AS(vv, zv) {
      return vv.sideCameUpAt > 0 && zv - vv.sideCameUpAt < 2400
    }

    function LS(vv) {
      return (null === vv.name || HS(vv)) && null === vv.side && null !== vv.chapters
    }

    function HS(vv) {
      var zv;
      return "quest_forgeOngoing" === (null === (zv = vv.name) || void 0 === zv ? void 0 : zv[0])
    }

    function MS(vv) {
      return vv.filter((vv => !QS.has(vv.key)))
    }

    function yS(vv) {
      return vv.key.startsWith("stepCraft")
    }

    function BS(vv, zv) {
      const Pv = new Set,
        hv = vv.side ? [...vv.rows, vv.side.row] : vv.rows;
      for (const ev of hv)
        if (!ev.done) {
          !ev.item || zv && !yS(ev) || Pv.add(ev.item);
          for (const [vv, zv, hv] of null !== (Sv = ev.chips) && void 0 !== Sv ? Sv : []) {
            var Sv;
            zv < hv && Pv.add(vv)
          }
        } return Pv
    }

    function JS(vv) {
      const zv = vv.findIndex((vv => !vv.done && !vv.away));
      return zv >= 0 ? zv : vv.findIndex((vv => !vv.done))
    }

    function ES(vv, zv) {
      let [Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv] = vv;
      return {
        id: zv,
        key: Pv,
        params: hv,
        item: Sv,
        amount: ev,
        total: gv,
        done: pv,
        chips: null !== dv && void 0 !== dv ? dv : null,
        current: !1,
        away: !0 === Nv,
        madeFor: null !== lv && void 0 !== lv ? lv : [],
        also: null !== Tv && void 0 !== Tv ? Tv : [],
        justFinished: !1
      }
    }
    const oS = "baf2QuestItems",
      bS = new Set;
    let rS = new Set,
      kS = null;

    function XS(vv) {
      const zv = xv(vv.tutorial),
        Pv = zv ? BS(vv, !0) : bS;
      "inventory" === GS.c.get("openInGameMenuName") ? (kS = null, (0, tS.s)(Pv)) : kS = Pv;
      const hv = zv ? BS(vv, !1) : bS;
      (0, RS.e)(hv, rS) || (rS = hv, xS.j.zC(oS, rS))
    }

    function uS() {
      return (0, US.b)(oS, (() => rS))
    }
    var ve = Pv(9019),
      ze = Pv(3037);

    function Pe(vv) {
      const zv = (0, ze.c)(vv),
        Pv = void 0 === zv ? void 0 : (0, ve.displayNameOf)(zv);
      return "object" === typeof Pv && null !== Pv && "translationKey" in Pv && "string" === typeof Pv.translationKey ? Pv.translationKey : `item:${(0,tv.ee)(vv)}`
    }

    function he(vv, zv) {
      return vv(Pe(zv))
    }
    const Se = [{
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

    function ee(vv, zv) {
      return [`Deposit Seed (${vv})`, {
        item: gP[`${vv} Deposit`],
        amount: zv
      }]
    }
    const ge = Object.fromEntries([ee("Coal", 8), ee("Iron", 8), ee("Copper", 8), ee("Gold", 6), ee("Voltite", 4), ee("Uranium", 4)]),
      pe = "Relay Coil",
      de = new Map;

    function Ne(vv) {
      let zv = de.get(vv);
      if (!zv) {
        const Pv = Math.max(1, vv);
        zv = Se.filter((vv => {
          var zv;
          return Pv >= vv.fromTier && Pv <= (null !== (zv = vv.untilTier) && void 0 !== zv ? zv : 1 / 0)
        })).map((vv => vv.later && Pv >= vv.later.tier ? {
          ...vv,
          weight: vv.later.weight
        } : vv)), de.set(vv, zv)
      }
      return zv
    }

    function le(vv) {
      return Ne(vv).some((vv => {
        let {
          item: zv
        } = vv;
        return zv === pe
      }))
    }

    function Te(vv) {
      return vv.startsWith("Deposit Seed (")
    }

    function We(vv, zv) {
      const Pv = Ne(vv);
      return zv ? Pv.filter((vv => zv(vv.item))) : Pv
    }

    function we(vv) {
      return vv.reduce(((vv, zv) => vv + zv.weight), 0)
    }

    function ae(vv, zv) {
      const Pv = We(vv, zv),
        hv = we(Pv);
      return Pv.map((vv => ({
        find: vv,
        chance: vv.weight / hv
      })))
    }
    const se = 6e4,
      Ce = new Intl.NumberFormat("en-US");

    function ie(vv, zv) {
      const Pv = vv >= 10 ? Math.round(vv) : Math.round(10 * vv) / 10;
      return 0 === Pv ? "0" : `${zv}${Ce.format(Pv)}`
    }

    function ce(vv) {
      return vv < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Ce.format(vv) : vv < 1e6 ? `${vv<1e5?Math.floor(vv/100)/10:Math.floor(vv/1e3)}k` : Math.floor(vv / 1e5) / 10 + "M"
    }

    function Ge(vv) {
      return vv < 0 ? "\u2212" + -vv : String(vv)
    }

    function me(vv, zv) {
      const Pv = Math.max(1, Math.round(zv));
      if (Pv < 60) return vv("buildAFactory2Game:durationSeconds", {
        seconds: String(Pv)
      });
      const hv = Math.round(Pv / 60);
      if (hv < 60) return vv("buildAFactory2Game:durationMinutes", {
        minutes: String(hv)
      });
      const Sv = String(Math.floor(hv / 60));
      return hv % 60 === 0 ? vv("buildAFactory2Game:durationWholeHours", {
        hours: Sv
      }) : vv("buildAFactory2Game:durationHours", {
        hours: Sv,
        minutes: String(hv % 60)
      })
    }
    const je = "(max-height: 420px), (max-width: 650px)";

    function fe() {
      return "undefined" !== typeof window && window.matchMedia(je).matches
    }

    function Fe(vv) {
      const zv = window.matchMedia(je),
        Pv = () => {
          vv(zv.matches)
        };
      return zv.addEventListener("change", Pv), () => {
        zv.removeEventListener("change", Pv)
      }
    }
    var Ye = Pv(1082);

    function ne(vv, zv) {
      return null !== vv && vv > zv + 1
    }

    function Oe(vv) {
      const zv = 100 * vv;
      return String(zv <= 0 || zv >= 1 ? Math.round(zv) : Math.max(.1, Math.round(10 * zv) / 10))
    }

    function De(vv) {
      let {
        item: zv,
        amount: Pv
      } = vv;
      return (0, Ye.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Ye.jsx)(KS.b, {
            itemName: zv,
            amount: 0
          })
        }), Pv > 1 && (0, Ye.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", Pv]
        })]
      })
    }

    function Ke(vv) {
      let {
        label: zv,
        names: Pv
      } = vv;
      const [Sv, ev] = (0, hv.useState)(!1), gv = Pv.join(" / ");
      return (0, Ye.jsxs)(Ye.Fragment, {
        children: [(0, Ye.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: gv,
          "aria-expanded": Sv,
          onClick: () => {
            ev(!Sv)
          },
          children: zv
        }), Sv && (0, Ye.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: gv
        })]
      })
    }

    function Ve(vv) {
      let {
        tier: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)(), {
        key: hv,
        params: Sv
      } = wv(zv, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), ev = Pv(`buildAFactory2Game:${hv}`, Sv);
      return (0, Ye.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Ye.jsx)(DS.b, {
          name: "lock"
        }), ev]
      })
    }
    const Ue = (0, hv.createContext)(null);

    function Re() {
      const {
        t: vv
      } = (0, OS.x)(), zv = (0, hv.useContext)(Ue);
      return (0, hv.useEffect)((() => null === zv || void 0 === zv ? void 0 : zv()), [zv]), (0, Ye.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: vv("buildAFactory2Game:recipeForQuest"),
        "aria-label": vv("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function xe(vv) {
      let {
        title: zv,
        count: Pv,
        children: Sv,
        startOpen: ev = !0
      } = vv;
      const {
        t: gv
      } = (0, OS.x)(), [pv, dv] = (0, hv.useState)((() => ev && !fe())), [Nv, lv] = (0, hv.useState)(0), Tv = (0, hv.useCallback)((() => (lv((vv => vv + 1)), () => {
        lv((vv => vv - 1))
      })), []);
      return (0, Ye.jsxs)("div", {
        className: fS()("Baf2Recipes", {
          Open: pv
        }),
        children: [(0, Ye.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            dv(!pv)
          },
          "aria-expanded": pv,
          children: [gv("buildAFactory2Game:recipesToggle", {
            title: zv,
            count: String(Pv)
          }), (0, Ye.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: pv ? "\u25be" : "\u25b8"
          })]
        }), pv && (0, Ye.jsxs)(Ue.Provider, {
          value: Tv,
          children: [(0, Ye.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Sv
          }), Nv > 0 && (0, Ye.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Ye.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), gv("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const te = "buildAFactory2Game:",
      qe = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Ie = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      Qe = {
        "Uranium Grit": ev,
        "Raw Uranium": ev
      };

    function Ze(vv) {
      var zv;
      return null !== (zv = Qe[vv]) && void 0 !== zv ? zv : Math.max(rv(vv), Ie[vv] ? rv(Ie[vv]) : 1, function(vv) {
        const zv = Sv.findIndex((zv => zv.cost.some((zv => zv.item === vv))));
        return zv > ev ? zv : 1
      }(vv))
    }

    function Ae(vv, zv) {
      return Le(zv) ? Ze(zv) : function(vv) {
        if (qe.has(vv)) return 1;
        const zv = Sv.findIndex((zv => zv.newDeposits.some((zv => {
          let {
            block: Pv
          } = zv;
          return Pv === vv
        }))));
        return zv < 0 ? 1 : zv + 1
      }(vv)
    }

    function Le(vv) {
      return vv in Qe || Tv(Ze(vv)) > 0
    }

    function He(vv, zv) {
      return kz(vv, {
        coupled: !1,
        taught: null,
        atomic: pv() && zv >= 11
      }).recipes
    }

    function Me(vv, zv) {
      const Pv = Wv(vv, zv, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tv(vv) > 0);
      return "open" === Pv || "locked" === Pv
    }

    function ye(vv, zv) {
      return vv.map(((vv, Pv) => ({
        value: vv,
        idx: Pv,
        tier: zv(vv)
      }))).sort(((vv, zv) => vv.tier - zv.tier || vv.idx - zv.idx)).map((vv => {
        let {
          value: zv
        } = vv;
        return zv
      }))
    }

    function Be(vv, zv, Pv) {
      const hv = Wv(vv, zv);
      if ("hidden" === hv || "open" === hv) return null;
      if ("teaser" === hv) return {
        tag: {
          translationKey: `${te}${Pv?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${te}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Sv = wv(vv, {
          tier: Pv ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        ev = wv(vv, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${te}${Sv.key}`,
          params: Sv.params
        },
        reason: {
          translationKey: `${te}${ev.key}`,
          params: ev.params
        }
      }
    }

    function Je(vv) {
      return !Te(vv)
    }

    function Ee(vv) {
      let {
        seconds: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)();
      return (0, Ye.jsx)(xe, {
        title: Pv("buildAFactory2Game:recipesCuts", {
          seconds: zv
        }),
        count: 1,
        children: (0, Ye.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Ye.jsx)(De, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Ye.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ye.jsx)(De, {
            item: "Maple Log",
            amount: 1
          }), (0, Ye.jsx)("span", {
            className: "Baf2RecipeName",
            children: Pv("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function oe(vv) {
      let {
        fertilised: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)();
      return (0, Ye.jsxs)(xe, {
        title: Pv("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Ye.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Ye.jsx)(De, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Ye.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ye.jsx)(De, {
            item: "Wheat",
            amount: 1
          }), (0, Ye.jsx)(De, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Ye.jsx)("span", {
            className: "Baf2RecipeName",
            children: Pv("buildAFactory2Game:recipeField")
          })]
        }), (0, Ye.jsxs)("li", {
          className: fS()("Baf2Recipe", {
            InUse: zv
          }),
          children: [(0, Ye.jsx)(De, {
            item: "Fertiliser",
            amount: 1
          }), (0, Ye.jsx)("span", {
            className: "Baf2RecipeName",
            children: Pv("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function be(vv) {
      let {
        tier: zv,
        seconds: Pv
      } = vv;
      const {
        t: hv
      } = (0, OS.x)(), Sv = function(vv) {
        return vv >= 5 ? fz : jz
      }(zv);
      return (0, Ye.jsx)(xe, {
        title: hv("buildAFactory2Game:recipesBringsUp", {
          seconds: Pv
        }),
        count: Sv.length,
        children: Sv.map((vv => {
          let {
            item: zv,
            chance: Pv
          } = vv;
          return (0, Ye.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Ye.jsx)(De, {
              item: zv,
              amount: 1
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeName",
              children: he(hv, zv)
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: hv("buildAFactory2Game:recipeChance", {
                percent: Oe(Pv)
              })
            })]
          }, zv)
        }))
      })
    }

    function re(vv) {
      let {
        tier: zv,
        seconds: Pv,
        noSeeds: hv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)(), ev = uS(), gv = ae(zv, hv ? Je : void 0), pv = hv && ae(zv).length > gv.length, dv = le(zv);
      return (0, Ye.jsxs)(xe, {
        title: Sv("buildAFactory2Game:recipesRecycles", {
          seconds: Pv
        }),
        count: gv.length,
        children: [gv.map((vv => {
          let {
            find: zv,
            chance: Pv
          } = vv;
          return (0, Ye.jsxs)("li", {
            className: "Baf2Recipe",
            children: [ev.has(zv.item) && (0, Ye.jsx)(Re, {}), (0, Ye.jsx)(De, {
              item: zv.item,
              amount: zv.amount
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeName",
              children: he(Sv, zv.item)
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Sv("buildAFactory2Game:recipeChance", {
                percent: Oe(Pv)
              })
            })]
          }, zv.item)
        })), pv && (0, Ye.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ye.jsx)("span", {
            className: "Baf2RecipeName",
            children: Sv("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), dv && (0, Ye.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ye.jsx)("span", {
            className: "Baf2RecipeName",
            children: Sv("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function ke(vv) {
      let {
        tier: zv,
        seconds: Pv
      } = vv;
      const {
        t: hv
      } = (0, OS.x)(), Sv = Object.entries(ge).filter((vv => {
        let [, {
          item: Pv
        }] = vv;
        return Me(Ze(Pv), zv, Le(Pv))
      }));
      return (0, Ye.jsx)(xe, {
        title: hv("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: Pv
        }),
        count: Sv.length,
        children: Sv.map((vv => {
          let [zv, {
            item: Pv,
            amount: Sv
          }] = vv;
          return (0, Ye.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Ye.jsx)(De, {
              item: zv,
              amount: 1
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ye.jsx)(De, {
              item: Pv,
              amount: Sv
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeName",
              children: he(hv, Pv)
            })]
          }, zv)
        }))
      })
    }

    function Xe(vv) {
      let {
        tier: zv,
        seconds: Pv
      } = vv;
      const {
        t: hv
      } = (0, OS.x)(), Sv = uS(), ev = ye(Object.entries(gP).filter((vv => {
        let [Pv, hv] = vv;
        return Me(Ae(Pv, hv), zv, Le(hv))
      })), (vv => {
        let [zv, Pv] = vv;
        return Ae(zv, Pv)
      }));
      return (0, Ye.jsx)(xe, {
        title: hv("buildAFactory2Game:recipesDigs", {
          seconds: Pv
        }),
        count: ev.length,
        children: ev.map((vv => {
          let [Pv, ev] = vv;
          const gv = Ae(Pv, ev),
            pv = gv > zv ? gv : null,
            dv = pP[Pv],
            Nv = null === pv && Sv.has(ev);
          return (0, Ye.jsxs)("li", {
            className: fS()("Baf2Recipe", {
              Locked: null !== pv,
              Far: ne(pv, zv)
            }),
            children: [Nv && (0, Ye.jsx)(Re, {}), (0, Ye.jsx)(De, {
              item: Pv,
              amount: 1
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ye.jsx)(De, {
              item: ev,
              amount: 1
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeName",
              children: he(hv, ev)
            }), void 0 !== dv && (0, Ye.jsx)("span", {
              className: "Baf2RecipeMore",
              children: hv("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / dv)
              })
            }), null !== pv && (0, Ye.jsx)(Ve, {
              tier: pv
            })]
          }, Pv)
        }))
      })
    }

    function ue(vv) {
      var zv;
      let {
        def: Pv,
        seconds: hv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)();
      return (0, Ye.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ye.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (zv = Pv.fuels) && void 0 !== zv ? zv : []).map((vv => (0, Ye.jsx)(De, {
            item: vv,
            amount: 1
          }, vv))), (0, Ye.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ye.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ye.jsx)(DS.b, {
              name: "bolt"
            }), Sv("buildAFactory2Game:recipePower", {
              power: kv(Pv.powerMade),
              seconds: hv
            })]
          })]
        })
      })
    }

    function vg(vv) {
      let {
        def: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)();
      return (0, Ye.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ye.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ye.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ye.jsx)(DS.b, {
              name: "bolt"
            }), Pv("buildAFactory2Game:recipeMixer", {
              cryo: ie((0, Xv.z)(zv, zv.cryoMade), "")
            })]
          })
        })
      })
    }

    function zg(vv) {
      let {
        def: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)();
      return (0, Ye.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ye.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ye.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ye.jsx)(DS.b, {
              name: "bolt"
            }), Pv("buildAFactory2Game:recipeCondenser", {
              power: ie((0, Xv.z)(zv, zv.powerPerOp), ""),
              water: ie((0, Xv.z)(zv, zv.fluidMade), "")
            })]
          })
        })
      })
    }

    function Pg(vv) {
      let {
        kind: zv,
        def: Pv,
        input: hv,
        tier: Sv,
        noSeeds: ev = !1
      } = vv;
      const gv = String(Pv.opMs / 1e3);
      return PP(Pv) ? (0, Ye.jsx)(Ee, {
        seconds: gv
      }) : Pv.field ? (0, Ye.jsx)(oe, {
        fertilised: null !== hv
      }) : Pv.table ? (0, Ye.jsx)(be, {
        tier: Sv,
        seconds: gv
      }) : Pv.recycles ? (0, Ye.jsxs)(Ye.Fragment, {
        children: [(0, Ye.jsx)(re, {
          tier: Sv,
          seconds: gv,
          noSeeds: ev
        }), (0, Ye.jsx)(ke, {
          tier: Sv,
          seconds: gv
        })]
      }) : zP(Pv) ? (0, Ye.jsx)(Xe, {
        tier: Sv,
        seconds: gv
      }) : void 0 !== Pv.fluidMade ? (0, Ye.jsx)(zg, {
        def: Pv
      }) : void 0 !== Pv.cryoMade ? (0, Ye.jsx)(vg, {
        def: Pv
      }) : void 0 !== Pv.powerMade ? (0, Ye.jsx)(ue, {
        def: Pv,
        seconds: gv
      }) : (0, Ye.jsx)(hg, {
        kind: zv,
        input: hv,
        tier: Sv,
        seconds: gv
      })
    }

    function hg(vv) {
      let {
        kind: zv,
        input: Pv,
        tier: hv,
        seconds: Sv
      } = vv;
      const {
        t: ev
      } = (0, OS.x)(), gv = uS(), pv = ye(function(vv) {
        const zv = new Map;
        for (const Sv of vv) {
          var Pv, hv;
          const vv = [Sv.output, Sv.outputAmount, Sv.inputAmount, null === (Pv = Sv.bonus) || void 0 === Pv ? void 0 : Pv.item, null === (hv = Sv.bonus) || void 0 === hv ? void 0 : hv.chance].join("|"),
            ev = zv.get(vv);
          ev ? ev.inputs.push(Sv.input) : zv.set(vv, {
            inputs: [Sv.input],
            inputAmount: Sv.inputAmount,
            output: Sv.output,
            outputAmount: Sv.outputAmount,
            bonus: Sv.bonus
          })
        }
        return [...zv.values()]
      }(He(zv, hv).filter(lP)), (vv => Ze(vv.output))).filter((vv => Me(Ze(vv.output), hv, Le(vv.output))));
      return (0, Ye.jsx)(xe, {
        title: ev("buildAFactory2Game:recipesEach", {
          seconds: Sv
        }),
        count: pv.length,
        children: pv.map((vv => {
          const zv = null !== Pv && vv.inputs.includes(Pv),
            Sv = vv.inputs.length > 3 ? [zv ? Pv : vv.inputs[0]] : vv.inputs,
            pv = Ze(vv.output) > hv ? Ze(vv.output) : null,
            dv = null === pv && gv.has(vv.output);
          return (0, Ye.jsxs)("li", {
            className: fS()("Baf2Recipe", {
              InUse: zv,
              Locked: null !== pv,
              Far: ne(pv, hv)
            }),
            children: [dv && (0, Ye.jsx)(Re, {}), Sv.map(((zv, Pv) => (0, Ye.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [Pv > 0 && (0, Ye.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Ye.jsx)(De, {
                item: zv,
                amount: vv.inputAmount
              })]
            }, zv))), Sv.length < vv.inputs.length && (0, Ye.jsx)(Ke, {
              label: ev("buildAFactory2Game:recipeMore", {
                count: String(vv.inputs.length - Sv.length)
              }),
              names: vv.inputs.filter((vv => !Sv.includes(vv))).map((vv => he(ev, vv)))
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ye.jsx)(De, {
              item: vv.output,
              amount: vv.outputAmount
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeName",
              children: he(ev, vv.output)
            }), vv.bonus && (0, Ye.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [ev("buildAFactory2Game:recipeBonus", {
                percent: Oe(vv.bonus.chance)
              }), (0, Ye.jsx)(De, {
                item: vv.bonus.item,
                amount: 1
              })]
            }), null !== pv && (0, Ye.jsx)(Ve, {
              tier: pv
            })]
          }, `${vv.output}|${vv.inputs[0]}`)
        }))
      })
    }

    function Sg(vv) {
      let {
        taught: zv,
        tier: Pv
      } = vv;
      const {
        t: hv
      } = (0, OS.x)(), Sv = uS(), ev = ye(Object.values(bz), (vv => vv.tier)).filter((vv => Me(vv.tier, Pv)));
      return (0, Ye.jsx)(xe, {
        title: hv("buildAFactory2Game:benchCanMake"),
        count: ev.length,
        startOpen: !1,
        children: ev.map((vv => {
          const ev = vv.tier > Pv,
            gv = !ev && Sv.has(vv.output);
          return (0, Ye.jsxs)("li", {
            className: fS()("Baf2Recipe", {
              InUse: vv.output === zv,
              Locked: ev,
              Far: ne(ev ? vv.tier : null, Pv)
            }),
            children: [gv && (0, Ye.jsx)(Re, {}), (0, Ye.jsx)(De, {
              item: vv.output,
              amount: vv.outputAmount
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeName",
              children: he(hv, vv.output)
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), vv.inputs.map((vv => (0, Ye.jsx)(De, {
              item: vv.item,
              amount: vv.amount
            }, vv.item))), ev && (0, Ye.jsx)(Ve, {
              tier: vv.tier
            })]
          }, vv.output)
        }))
      })
    }
    var eg, gg, pg, dg, Ng;
    const lg = tz.Generator,
      Tg = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Wg = 1e3 * (null !== (eg = lg.powerMade) && void 0 !== eg ? eg : 0) / lg.opMs,
      wg = Math.min(...(null !== (gg = lg.fuels) && void 0 !== gg ? gg : []).map((vv => eP[vv]))) / 1e3,
      ag = tz["Volt Engine"],
      sg = 1e3 * (null !== (pg = ag.powerMade) && void 0 !== pg ? pg : 0) / ag.opMs,
      Cg = eP[null !== (dg = null === (Ng = ag.fuels) || void 0 === Ng ? void 0 : Ng[0]) && void 0 !== dg ? dg : ""] / 1e3;

    function ig(vv) {
      let {
        item: zv,
        label: Pv,
        value: hv,
        note: Sv,
        dim: ev
      } = vv;
      return (0, Ye.jsxs)("li", {
        className: fS()("Baf2PowerRow", {
          Dim: ev
        }),
        children: [(0, Ye.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Ye.jsx)(KS.b, {
            itemName: zv,
            amount: 0
          })
        }), (0, Ye.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Ye.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: Pv
          }), Sv && (0, Ye.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Sv
          })]
        }), (0, Ye.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: hv
        })]
      })
    }

    function cg(vv, zv, Pv, hv) {
      var Sv;
      const ev = void 0 === hv ? tz[vv] : function(vv, zv) {
          if (null === zv) return vv;
          let Pv = Ev.get(zv);
          return Pv || (Pv = {
            ...vv,
            powerPerOp: Jv(vv, zv),
            farmMob: zv
          }, Ev.set(zv, Pv)), Pv
        }(tz[vv], hv),
        gv = zv && ev.couplable ? Mz(ev, Pv) : ev;
      return 1e3 * (null !== (Sv = gv.powerPerOp) && void 0 !== Sv ? Sv : 0) / gv.opMs
    }

    function Gg(vv) {
      var zv, Pv, hv, Sv, ev, gv, pv, dv;
      let {
        message: Nv
      } = vv;
      const {
        t: lv
      } = (0, OS.x)(), Tv = (vv, zv) => lv("buildAFactory2Game:powerPerSecond", {
        rate: ie(vv, zv)
      }), [Wv, wv] = Nv.baf2PowerGenerators, av = Nv.baf2PowerGeneratorFuel, sv = Nv.baf2PowerSunPanels, Cv = null !== (zv = Nv.baf2PowerSunShare) && void 0 !== zv ? zv : 1, iv = Nv.baf2PowerVaults, cv = Nv.baf2PowerUsers, [Gv, mv] = null !== (Pv = Nv.baf2PowerEngines) && void 0 !== Pv ? Pv : [0, 0], jv = null !== (hv = Nv.baf2PowerEngineCells) && void 0 !== hv ? hv : 0, fv = null !== (Sv = Nv.baf2PowerPads) && void 0 !== Sv ? Sv : 0, Fv = null !== (ev = Nv.baf2PowerCharge) && void 0 !== ev ? ev : 0, [Yv, nv] = null !== (gv = Nv.baf2PowerReactors) && void 0 !== gv ? gv : [0, 0], [Ov, Dv] = null !== (pv = Nv.baf2PowerBatteries) && void 0 !== pv ? pv : [0, 0];
      let Kv = lv("buildAFactory2Game:powerEngineCells", {
        amount: String(jv)
      });
      jv > 0 && mv > 0 && (Kv = lv("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(jv),
        time: me(lv, jv * Cg / mv)
      }));
      let Vv = lv("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(av)
      });
      av > 0 && wv > 0 && (Vv = lv("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(av),
        time: me(lv, av * wg / wv)
      }));
      const Uv = Wv + Gv + sv + Yv;
      return (0, Ye.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Ye.jsxs)("section", {
          children: [(0, Ye.jsxs)("h3", {
            children: [lv("buildAFactory2Game:powerMaking"), (0, Ye.jsx)("span", {
              children: Tv(Nv.baf2PowerMadePerS, "+")
            })]
          }), (0, Ye.jsxs)("ul", {
            children: [0 === Uv && (0, Ye.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: lv("buildAFactory2Game:powerNoMakers")
            }), Wv > 0 && (0, Ye.jsx)(ig, {
              item: "Generator",
              label: `${he(lv,"Generator")} \xd7${Wv}`,
              note: `${lv("buildAFactory2Game:powerRunning",{amount:String(wv)})} \xb7 ${Vv}`,
              value: Tv(wv * Wg, "+"),
              dim: 0 === wv
            }), Gv > 0 && (0, Ye.jsx)(ig, {
              item: "Volt Engine",
              label: `${he(lv,"Volt Engine")} \xd7${Gv}`,
              note: `${lv("buildAFactory2Game:powerRunning",{amount:String(mv)})} \xb7 ${Kv}`,
              value: Tv(mv * sg, "+"),
              dim: 0 === mv
            }), sv > 0 && (0, Ye.jsx)(ig, {
              item: "Solar Panel",
              label: `${he(lv,"Solar Panel")} \xd7${sv}`,
              note: lv(Cv < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Tv(4 * sv * Cv, "+")
            }), Yv > 0 && (0, Ye.jsx)(ig, {
              item: "Reactor Frame",
              label: `${lv("buildAFactory2Game:powerReactors")} \xd7${Yv}`,
              note: lv("buildAFactory2Game:powerRunning", {
                amount: String(nv)
              }),
              value: Tv(null !== (dv = Nv.baf2PowerReactorPerS) && void 0 !== dv ? dv : 0, "+"),
              dim: 0 === nv
            })]
          })]
        }), (0, Ye.jsxs)("section", {
          children: [(0, Ye.jsxs)("h3", {
            children: [lv("buildAFactory2Game:powerStorage"), (0, Ye.jsx)("span", {
              children: kv(Nv.baf2PowerCap)
            })]
          }), (iv > 0 || Ov > 0) && (0, Ye.jsxs)("ul", {
            children: [iv > 0 && (0, Ye.jsx)(ig, {
              item: "Charge Vault",
              label: `${he(lv,"Charge Vault")} \xd7${iv}`,
              value: `+${kv(8e3*iv)}`
            }), Ov > 0 && (0, Ye.jsx)(ig, {
              item: "Battery Cell",
              label: `${lv("buildAFactory2Game:powerBatteries")} \xd7${Ov}`,
              value: `+${kv(Dv)}`
            })]
          })]
        }), (0, Ye.jsxs)("section", {
          children: [(0, Ye.jsxs)("h3", {
            children: [lv("buildAFactory2Game:powerUsing"), (0, Ye.jsx)("span", {
              children: Tv(Nv.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Ye.jsxs)("ul", {
            children: [0 === cv.length && 0 === fv && 0 === Fv && (0, Ye.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: lv("buildAFactory2Game:powerNoUsers")
            }), cv.map((vv => {
              let [zv, Pv, hv, Sv, ev = 1, gv] = vv, pv = Pv ? lv(Tg[ev - 1], {
                name: he(lv, zv)
              }) : he(lv, zv);
              return void 0 !== gv && (pv = lv("buildAFactory2Game:powerFarmName", {
                name: pv,
                mob: lv(Mv(gv))
              })), (0, Ye.jsx)(ig, {
                item: zv,
                label: `${pv} \xd7${hv}`,
                note: lv("buildAFactory2Game:powerRunning", {
                  amount: String(Sv)
                }),
                value: Sv > 0 ? Tv(Sv * cg(zv, Pv, ev, gv), "\u2212") : lv("buildAFactory2Game:powerIdle"),
                dim: 0 === Sv
              }, `${zv}|${Pv}|${ev}|${gv}`)
            })), fv > 0 && (0, Ye.jsx)(ig, {
              item: "Charging Pad",
              label: `${he(lv,"Charging Pad")} \xd7${fv}`,
              value: lv("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Fv > 0 && (0, Ye.jsx)(ig, {
              item: "Homestead Core",
              label: lv("buildAFactory2Game:powerCharge"),
              value: Tv(Fv, "\u2212")
            }), Nv.baf2PowerStarved > 0 && (0, Ye.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Ye.jsx)(DS.b, {
                name: "triangle-exclamation"
              }), lv("buildAFactory2Game:powerStarved", {
                amount: String(Nv.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var mg = Pv(4285),
      jg = Pv(1442);
    class fg {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(vv) {
        this.message = vv;
        for (const zv of this.listeners) zv()
      }
      get() {
        return this.message
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
    }
    class Fg extends fg {}

    function Yg(vv, zv) {
      const Pv = () => {
          const Pv = vv.get();
          if (!Pv || !zv) return Pv;
          const [hv, Sv, ev] = Pv.baf2PowerAt;
          return hv === zv[0] && Sv === zv[1] && ev === zv[2] ? Pv : null
        },
        [Sv, ev] = (0, hv.useState)(Pv);
      return (0, hv.useEffect)((() => (ev(Pv()), vv.subscribe((() => {
        ev(Pv())
      })))), [vv, ...null !== zv && void 0 !== zv ? zv : []]), Sv
    }

    function ng(vv) {
      return {
        stored: vv.baf2PowerStored,
        cap: vv.baf2PowerCap,
        madePerS: vv.baf2PowerMadePerS,
        usedPerS: vv.baf2PowerUsedPerS
      }
    }

    function Og(vv) {
      let {
        stored: zv,
        cap: Pv
      } = vv;
      return (0, Ye.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Ye.jsx)("div", {
          style: {
            width: `${Math.min(100,100*zv/Math.max(1,Pv))}%`
          }
        })
      })
    }

    function Dg(vv) {
      let {
        figures: zv,
        labelled: Pv = !1
      } = vv;
      const {
        t: hv
      } = (0, OS.x)(), Sv = zv.madePerS - zv.usedPerS, {
        text: ev,
        draining: gv
      } = function(vv, zv) {
        let {
          stored: Pv,
          cap: hv,
          madePerS: Sv,
          usedPerS: ev
        } = zv;
        const gv = Sv - ev;
        return Pv >= hv ? {
          text: vv("buildAFactory2Game:powerFull"),
          draining: !1
        } : gv > .05 ? {
          text: vv("buildAFactory2Game:powerFullIn", {
            time: me(vv, (hv - Pv) / gv)
          }),
          draining: !1
        } : gv < -.05 ? {
          text: vv("buildAFactory2Game:powerEmptyIn", {
            time: me(vv, Pv / -gv)
          }),
          draining: !0
        } : {
          text: vv("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(hv, zv);
      return (0, Ye.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Ye.jsx)(Og, {
          stored: zv.stored,
          cap: zv.cap
        }), (0, Ye.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Ye.jsx)("span", {
            children: hv(Pv ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: kv(zv.stored),
              cap: kv(zv.cap)
            })
          }), (0, Ye.jsxs)("span", {
            className: fS()("Baf2PowerNet", {
              Draining: gv
            }),
            children: [hv("buildAFactory2Game:powerPerSecond", {
              rate: ie(Math.abs(Sv), Sv < 0 ? "\u2212" : "+")
            }), " \xb7 ", ev]
          })]
        })]
      })
    }

    function Kg(vv) {
      let {
        stored: zv,
        cap: Pv,
        rates: hv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)();
      return hv ? (0, Ye.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Ye.jsx)(Dg, {
          figures: {
            stored: zv,
            cap: Pv,
            madePerS: hv[0],
            usedPerS: hv[1]
          },
          labelled: !0
        })
      }) : (0, Ye.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Ye.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Ye.jsx)(Og, {
            stored: zv,
            cap: Pv
          }), (0, Ye.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Ye.jsx)("span", {
              children: Sv("buildAFactory2Game:powerStoredLabelled", {
                stored: kv(zv),
                cap: kv(Pv)
              })
            })
          })]
        })
      })
    }

    function Vg(vv) {
      let {
        store: zv,
        close: Pv
      } = vv;
      const {
        t: hv
      } = (0, OS.x)(), Sv = Yg(zv);
      return (0, Ye.jsx)(mg.c, {
        close: Pv,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ye.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsxs)("div", {
              children: [(0, Ye.jsx)("h2", {
                id: "baf2PowerTitle",
                children: hv("buildAFactory2Game:powerTitle")
              }), (0, Ye.jsx)("p", {
                children: hv("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Ye.jsx)(jg.i, {
              onClick: Pv
            })]
          }), Sv && (0, Ye.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Ye.jsx)(Dg, {
              figures: ng(Sv)
            }), (0, Ye.jsx)(Gg, {
              message: Sv
            })]
          })]
        })
      })
    }

    function Ug(vv) {
      var zv;
      let {
        kind: Pv,
        def: Sv,
        PS: ev,
        power: gv,
        stored: pv,
        cap: dv
      } = vv;
      const {
        t: Nv
      } = (0, OS.x)(), lv = Yg(gv, ev), [Tv, Wv] = (0, hv.useState)(!1);
      return (0, Ye.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Ye.jsx)(Pg, {
          kind: Pv,
          def: Sv,
          input: null,
          tier: null !== (zv = null === lv || void 0 === lv ? void 0 : lv.baf2PowerTier) && void 0 !== zv ? zv : 1
        }), (0, Ye.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Nv("buildAFactory2Game:powerTitle")
        }), lv && (0, Ye.jsx)(Dg, {
          figures: ng(lv)
        }), !lv && (0, Ye.jsx)(Kg, {
          stored: pv,
          cap: dv,
          rates: null
        }), lv && (0, Ye.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Wv(!Tv)
          },
          "aria-expanded": Tv,
          children: Nv(Tv ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), lv && Tv && (0, Ye.jsx)(Gg, {
          message: lv
        })]
      })
    }
    const Rg = 2500,
      xg = 17500,
      tg = `${jv} `;
    const qg = ["plan", "throttle"];

    function Ig(vv) {
      if (vv.startsWith(`${Oz} `)) return vv.slice(0, vv.lastIndexOf(" "));
      const zv = vv.split(" ");
      return zv[0] === lz && qg.includes(zv[4]) ? zv.slice(0, 5).join(" ") : null
    }
    class Qg {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = vv, this.now = zv, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.Fhv = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = zv()
      }
      enqueue(vv) {
        this.queue(vv, this.nextTicket());
        const zv = this.Fhv + this.pending.length;
        return this.flush(), zv
      }
      track(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Pv = this.nextTicket();
        if (!zv.urgent) return this.queue(vv, Pv), this.flush(), Pv;
        const {
          supersedes: hv
        } = zv;
        for (let ev = this.pending.length - 1; ev >= this.urgent; ev--) {
          const zv = this.pending[ev];
          (zv.command === vv || null !== hv && void 0 !== hv && hv(zv.command)) && (this.pending.splice(ev, 1), this.markLeft(zv.tickets))
        }
        const Sv = this.pending.findIndex((zv => {
          let {
            command: Pv
          } = zv;
          return Pv === vv
        }));
        return -1 !== Sv ? this.pending[Sv].tickets.push(Pv) : (this.pending.splice(this.urgent, 0, {
          command: vv,
          tickets: [Pv]
        }), this.urgent += 1), this.flush(), Pv
      }
      leftAt(vv) {
        const zv = this.leftTimes.get(vv);
        return void 0 !== zv ? zv : this.pending.some((zv => {
          let {
            tickets: Pv
          } = zv;
          return Pv.includes(vv)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let vv = !0;
        return () => {
          vv && (vv = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(vv) {
        var zv;
        return (null === (zv = this.pending.at(-1)) || void 0 === zv ? void 0 : zv.command) === vv
      }
      sent() {
        return this.Fhv
      }
      clear() {
        for (const {
            tickets: vv
          }
          of this.pending) this.markLeft(vv);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(vv) {
        const zv = this.now();
        for (const Pv of vv) this.leftTimes.set(Pv, zv);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(vv, zv) {
        const Pv = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === Pv || void 0 === Pv ? void 0 : Pv.command) === vv) return void(! function(vv) {
          return vv === fv || vv.startsWith(`${mv} `) || vv.startsWith(`${Av} `)
        }(vv) ? Pv.tickets.push(zv) : (this.pending.pop(), this.markLeft([...Pv.tickets, zv])));
        const hv = void 0 === Pv ? null : Nz(Pv.command, vv);
        if (null !== hv && void 0 !== Pv) return Pv.command = hv, void Pv.tickets.push(zv);
        const Sv = Ig(vv);
        if (null !== Sv && void 0 !== Pv && Ig(Pv.command) === Sv) return Pv.command = vv, void Pv.tickets.push(zv);
        if (null !== Pv && void 0 !== Pv && Pv.command.startsWith(tg) && vv.startsWith(tg)) {
          const hv = vv.slice(tg.length);
          if (Pv.command.slice(tg.length).split(",").includes(hv)) return void Pv.tickets.push(zv);
          const Sv = `${Pv.command},${hv}`;
          if (Sv.length <= 119) return Pv.command = Sv, void Pv.tickets.push(zv)
        }
        this.pending.push({
          command: vv,
          tickets: [zv]
        })
      }
      flush() {
        const vv = this.now();
        for (this.tokens = Math.min(5, this.tokens + (vv - this.refilledAt) / Rg), this.refilledAt = vv; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.Fhv += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: vv,
            tickets: zv
          } = this.pending.shift();
          this.markLeft(zv), this.send(vv)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Rg)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Zg {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new Qg(vv, zv)
      }
      send(vv) {
        return this.queue.enqueue(vv)
      }
      sent() {
        return this.queue.sent()
      }
      track(vv, zv) {
        return this.queue.track(vv, zv)
      }
      leftAt(vv) {
        return this.queue.leftAt(vv)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(vv) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = zv, this.send(vv), this.islandEdits.count
      }
      syncIslandEdits(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: Pv
        } = this, hv = zv - Pv.lastAtMs < xg;
        Pv.count = hv ? Math.max(Pv.count, vv) : vv
      }
      clear() {
        this.queue.clear()
      }
    }
    const Ag = (0, hv.createContext)(null);

    function Lg() {
      const vv = (0, hv.useContext)(Ag);
      if (!vv) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return vv
    }

    function Hg(vv, zv) {
      return null !== zv && void 0 !== zv ? zv : 1 === vv
    }

    function Mg(vv, zv) {
      return vv.every((vv => {
        var Pv;
        let [hv, , Sv] = vv;
        return !Hg(Sv, null === (Pv = zv.get(hv)) || void 0 === Pv ? void 0 : Pv.Yw)
      }))
    }

    function yg(vv, zv, Pv) {
      if (0 === vv.size) return vv;
      const hv = new Map(vv);
      for (const [Sv, ev] of vv) {
        const vv = zv.find((vv => {
          let [zv] = vv;
          return zv === Sv
        }));
        (!vv || ev.Yw === (1 === vv[2]) || ev.atMs < Pv) && hv.delete(Sv)
      }
      return hv
    }

    function Bg(vv) {
      var zv;
      let {
        PS: Pv,
        input: Sv,
        drops: ev,
        seconds: gv
      } = vv;
      const {
        t: pv
      } = (0, OS.x)(), dv = Lg(), [Nv, lv] = (0, hv.useState)(new Map);
      (0, hv.useEffect)((() => {
        ev && lv((vv => yg(vv, ev, Date.now() - xg)))
      }), [ev]), (0, hv.useEffect)((() => {
        const vv = function(vv, zv) {
          let Pv = null;
          for (const {
              atMs: hv
            }
            of vv.values()) Pv = null === Pv ? hv : Math.min(Pv, hv);
          return null === Pv ? null : Pv + zv
        }(Nv, xg);
        if (null === vv || !ev) return;
        const zv = setTimeout((() => {
          lv((vv => yg(vv, ev, Date.now() - xg)))
        }), Math.max(0, vv - Date.now()) + 1);
        return () => {
          clearTimeout(zv)
        }
      }), [Nv, ev]);
      const Tv = yv(Sv),
        Wv = null !== Tv && null !== ev && Mg(ev, Nv),
        wv = function(vv, zv, Pv) {
          return null === vv || null === zv || Mg(zv, Pv) ? 0 : Zv[Iv[vv]]
        }(Tv, ev, Nv);
      return (0, Ye.jsxs)(xe, {
        title: pv("buildAFactory2Game:farmDropsTitle", {
          seconds: gv
        }),
        count: null !== (zv = null === ev || void 0 === ev ? void 0 : ev.length) && void 0 !== zv ? zv : 0,
        children: [wv > 0 && (0, Ye.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: pv("buildAFactory2Game:farmDropsPower", {
            power: String(wv)
          })
        }), (null === Tv || !ev) && (0, Ye.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: pv("buildAFactory2Game:farmDropsEmpty")
        }), Wv && (0, Ye.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: pv("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Tv && (null === ev || void 0 === ev ? void 0 : ev.map((vv => {
          var zv;
          let [hv, Sv, ev] = vv;
          const gv = Sv < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Tv = Hg(ev, null === (zv = Nv.get(hv)) || void 0 === zv ? void 0 : zv.Yw);
          return (0, Ye.jsxs)("li", {
            className: fS()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Tv
            }),
            children: [(0, Ye.jsx)(De, {
              item: hv,
              amount: 1
            }), (0, Ye.jsx)("span", {
              className: "Baf2RecipeName",
              children: he(pv, hv)
            }), (0, Ye.jsx)("span", {
              className: "Baf2FarmRate",
              children: pv(gv, {
                amount: String(Sv)
              })
            }), (0, Ye.jsx)("button", {
              type: "button",
              className: fS()("Baf2FarmToggle SmallTextBold", {
                Kept: Tv
              }),
              "aria-pressed": Tv,
              onClick: () => {
                lv(new Map(Nv).set(hv, {
                  Yw: !Tv,
                  atMs: Date.now()
                })), dv.send(function(vv, zv, Pv, hv) {
                  return `${Av} ${vv} ${zv} ${Pv} ${hv}`
                }(Pv[0], Pv[1], Pv[2], hv))
              },
              children: pv(Tv ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, hv)
        })))]
      })
    }
    var Jg;
    const Eg = String(null !== (Jg = tz.Synthesizer.waterPerOp) && void 0 !== Jg ? Jg : 0);

    function og(vv) {
      let {
        PS: zv,
        taught: Pv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)(), ev = Lg(), [gv, pv] = (0, hv.useState)(null);
      (0, hv.useEffect)((() => {
        null !== gv && Pv === gv && pv(null)
      }), [gv, Pv]);
      const dv = null !== gv && void 0 !== gv ? gv : Pv;
      let Nv = Sv("buildAFactory2Game:synthPick");
      return null !== dv && (Nv = Sv("buildAFactory2Game:synthGrows", {
        name: he(Sv, dv),
        input: he(Sv, Fz),
        water: Eg
      })), (0, Ye.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Ye.jsx)("div", {
          className: fS()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === dv
          }),
          children: Nv
        }), (0, Ye.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: Yz.map(((vv, Pv) => {
            const hv = he(Sv, vv),
              gv = vv === dv;
            return (0, Ye.jsx)("li", {
              children: (0, Ye.jsx)("button", {
                type: "button",
                className: fS()("Baf2SynthTile", {
                  Selected: gv
                }),
                title: hv,
                "aria-label": hv,
                "aria-pressed": gv,
                onClick: () => {
                  gv || (pv(vv), ev.send(`${Oz} ${zv[0]} ${zv[1]} ${zv[2]} ${Pv}`))
                },
                children: (0, Ye.jsx)(KS.b, {
                  itemName: vv,
                  amount: 0
                })
              })
            }, vv)
          }))
        })]
      })
    }
    const bg = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function rg(vv) {
      let {
        kind: zv,
        tier: Pv,
        coupled: hv,
        level: Sv,
        slot: ev
      } = vv;
      const {
        t: gv
      } = (0, OS.x)(), dv = rv(Iz);
      if (!hv && null !== Pv && Pv < dv) return (0, Ye.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Ye.jsx)(DS.b, {
            name: "lock"
          })
        }), (0, Ye.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: gv("buildAFactory2Game:upgradeLocked")
        }), (0, Ye.jsx)("span", {
          className: "Baf2TierTag",
          children: gv("buildAFactory2Game:tierTag", {
            tier: String(dv)
          })
        })]
      });
      const Nv = function(vv, zv) {
          if (pv() && "Crusher" !== vv && null !== zv) {
            if (kg(Zz, zv)) return {
              item: Zz,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (kg(Qz, zv)) return {
              item: Qz,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Iz,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(zv, Pv),
        lv = gv(hv ? bg[Sv - 1] : Nv.emptyKey),
        Tv = null !== Pv ? function(vv, zv, Pv, hv) {
          if (!pv() || !Pv || "Crusher" === vv || zv < 10) return null;
          const Sv = rv(Zz);
          if (hv < 3 && Sv > 1 && (2 === hv || zv >= Sv)) return {
            tier: Sv,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const ev = rv(Qz);
          if (1 === hv && ev > 1) return {
            tier: ev,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(zv, Pv, hv, Sv) : null;
      return (0, Ye.jsxs)("div", {
        className: fS()("Baf2UpgradeSocket", {
          Fitted: hv
        }),
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [hv && ev, !hv && (0, Ye.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Ye.jsx)(KS.b, {
              itemName: Nv.item,
              amount: 0
            })
          })]
        }), (0, Ye.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Ye.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: gv("buildAFactory2Game:upgradeTitle")
          }), (0, Ye.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: lv
          }), hv && Sv >= 2 && "Crusher" === zv && (0, Ye.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: gv("buildAFactory2Game:couplerCrusherHint")
          }), Tv && null !== Pv && Pv < Tv.tier && (0, Ye.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Ye.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Ye.jsx)(DS.b, {
                name: "lock"
              })
            }), gv(Tv.lockedKey), (0, Ye.jsx)("span", {
              className: "Baf2TierTag",
              children: gv("buildAFactory2Game:tierTag", {
                tier: String(Tv.tier)
              })
            })]
          }), Tv && null !== Pv && Pv >= Tv.tier && (0, Ye.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: gv(Tv.nextKey)
          })]
        })]
      })
    }

    function kg(vv, zv) {
      const Pv = rv(vv);
      return Pv > 1 && zv >= Pv
    }
    var Xg = Pv(36542);
    const ug = (0, Xv.z)(tz.Condenser, tz.Condenser.fluidMade),
      vp = .05;
    class zp extends fg {}

    function Pp(vv) {
      return ie(vv, "")
    }

    function hp(vv, zv, Pv) {
      return vv(zv ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: Pv
      })
    }

    function Sp(vv, zv, Pv, hv) {
      return Pv <= vp && hv <= vp ? null : hv <= vp || Pv <= vp ? hp(vv, zv, hv <= vp ? ie(Pv, "+") : ie(hv, "\u2212")) : vv(zv ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: Pp(Pv),
        used: Pp(hv)
      })
    }

    function ep(vv, zv) {
      return Math.min(100, 100 * vv / Math.max(1, zv))
    }

    function gp(vv) {
      let {
        stored: zv,
        cap: Pv,
        netPerS: hv,
        rates: Sv,
        cryo: ev
      } = vv;
      const {
        t: gv
      } = (0, OS.x)(), pv = function(vv, zv, Pv, hv) {
        return Pv <= 0 ? vv("buildAFactory2Game:waterNoStorage") : zv >= Pv ? vv("buildAFactory2Game:powerFull") : hv > vp ? vv("buildAFactory2Game:powerFullIn", {
          time: me(vv, (Pv - zv) / hv)
        }) : hv < -.05 ? zv <= 0 ? vv("buildAFactory2Game:waterEmpty") : vv("buildAFactory2Game:powerEmptyIn", {
          time: me(vv, zv / -hv)
        }) : vv("buildAFactory2Game:powerSteady")
      }(gv, zv, Pv, hv), dv = Pv > 0 && zv < Pv && Math.abs(hv) <= vp, Nv = gv(ev ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), lv = null !== Sv ? `${Sv} \xb7 ${pv}` : dv ? Nv : `${Nv} \xb7 ${pv}`;
      return (0, Ye.jsxs)(Ye.Fragment, {
        children: [(0, Ye.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Ye.jsx)("div", {
            style: {
              width: `${ep(zv,Pv)}%`
            }
          })
        }), (0, Ye.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Ye.jsx)("span", {
            children: Pv > 0 && gv("buildAFactory2Game:powerStored", {
              stored: (0, Xv.N)(zv),
              cap: (0, Xv.N)(Pv)
            })
          }), (0, Ye.jsx)("span", {
            className: fS()("Baf2WaterNet", {
              Draining: hv < -.05
            }),
            children: lv
          })]
        })]
      })
    }

    function pp(vv) {
      let {
        water: zv,
        at: Pv,
        side: hv = null
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)(), ev = Lg(), [gv, pv, dv] = zv;
      return (0, Ye.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Ye.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Sv(null === hv ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${hv}`)
          }), (0, Ye.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              ev.send(`${Xv.t} ${Pv[0]} ${Pv[1]} ${Pv[2]}${"cryoOut"===hv?" cryo":""}`)
            },
            children: Sv("buildAFactory2Game:waterDetails")
          })]
        }), (0, Ye.jsx)(gp, {
          stored: gv,
          cap: pv,
          netPerS: dv,
          rates: hp(Sv, "cryoOut" === hv, ie(Math.abs(dv), dv < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === hv
        })]
      })
    }

    function dp(vv, zv) {
      var Pv, hv, Sv;
      const ev = !0 === zv.baf2WaterCryo,
        gv = null !== (Pv = null === (hv = zv.baf2WaterMakers.find((vv => vv[0] === (ev ? Xv.c : "Condenser")))) || void 0 === hv ? void 0 : hv[1]) && void 0 !== Pv ? Pv : 0,
        pv = [],
        dv = (zv, Pv, hv) => {
          zv > 0 && pv.push(vv(1 === zv ? Pv : hv, {
            count: String(zv)
          }))
        };
      return ev ? dv(gv, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : dv(gv, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), dv(null !== (Sv = zv.baf2WaterPipes) && void 0 !== Sv ? Sv : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), dv(zv.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), pv.join(" \xb7 ")
    }

    function Np(vv, zv) {
      if (!0 === zv.baf2WaterCryo) return function(vv, zv) {
        const Pv = tz[Xv.c];
        switch (zv.baf2WaterThis) {
          case "pipe":
            return {
              text: vv("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: vv("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: vv("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: vv("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: vv("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: vv("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: vv("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var hv;
            const [Sv, ev] = null !== (hv = zv.baf2WaterThisRates) && void 0 !== hv ? hv : [(0, Xv.z)(Pv, Pv.cryoMade), (0, Xv.z)(Pv, Pv.powerPerOp)];
            return !0 === zv.baf2WaterDriven ? {
              text: vv("buildAFactory2Game:cryoThisMixerDriven", {
                rate: Pp(Sv)
              }),
              bad: !1
            } : {
              text: vv("buildAFactory2Game:cryoThisMixer", {
                rate: Pp(Sv),
                power: Pp(ev)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: vv("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(vv, zv);
      const Pv = !0 === zv.baf2WaterDriven,
        hv = tz.Condenser;
      switch (zv.baf2WaterThis) {
        case "pipe":
          return {
            text: vv("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: vv("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: vv("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: vv("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: vv("buildAFactory2Game:waterThisTank", {
              tank: (0, Xv.N)(Xv.o),
              cap: (0, Xv.N)(zv.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Sv;
          const [ev, gv] = null !== (Sv = zv.baf2WaterThisRates) && void 0 !== Sv ? Sv : [ug, (0, Xv.z)(hv, hv.powerPerOp)];
          return Pv ? {
            text: vv("buildAFactory2Game:waterThisCondenserDriven", {
              rate: Pp(ev)
            }),
            bad: !1
          } : {
            text: vv("buildAFactory2Game:waterThisCondenser", {
              rate: Pp(ev),
              power: Pp(gv)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: vv("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function lp(vv, zv) {
      const Pv = zv.baf2WaterMakers.some((vv => !0 === vv[5]));
      if (!0 === zv.baf2WaterCryo) {
        const hv = zv.baf2WaterUsedPerS - zv.baf2WaterMadePerS,
          Sv = Pv || hv <= vp ? 0 : (0, Xv.x)(hv);
        return 0 === Sv ? null : Sv > 1 ? vv("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Sv)
        }) : vv("buildAFactory2Game:cryoNextOne")
      }
      const hv = Pv ? null : function(vv, zv) {
        const Pv = zv - vv;
        return Pv <= vp ? null : Math.ceil(Pv / ug)
      }(zv.baf2WaterMadePerS, zv.baf2WaterUsedPerS);
      return null === hv ? null : hv > 1 ? vv("buildAFactory2Game:waterNextCondensers", {
        condensers: String(hv)
      }) : vv("buildAFactory2Game:waterNextOne")
    }

    function Tp(vv) {
      let {
        item: zv,
        label: Pv,
        note: hv,
        value: Sv,
        dim: ev,
        bad: gv
      } = vv;
      return (0, Ye.jsxs)("li", {
        className: fS()("Baf2WaterRow", {
          Dim: ev,
          Bad: gv
        }),
        children: [(0, Ye.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Ye.jsx)(KS.b, {
            itemName: zv,
            amount: 0
          })
        }), (0, Ye.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Ye.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: Pv
          }), hv && (0, Ye.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: hv
          })]
        }), (0, Ye.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Sv
        })]
      })
    }

    function Wp(vv) {
      return Xg.r[vv] ? vv : "Reactor Port"
    }

    function wp(vv) {
      let {
        message: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)(), hv = !0 === zv.baf2WaterCryo, Sv = (vv, zv) => hp(Pv, hv, ie(vv, zv));
      return (0, Ye.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Ye.jsxs)("section", {
          children: [(0, Ye.jsxs)("h3", {
            children: [Pv("buildAFactory2Game:waterMakes"), (0, Ye.jsx)("span", {
              children: Sv(zv.baf2WaterMadePerS, "+")
            })]
          }), (0, Ye.jsxs)("ul", {
            children: [0 === zv.baf2WaterMakers.length && (0, Ye.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Pv(hv ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), zv.baf2WaterMakers.map((vv => {
              let [zv, hv, ev, gv, pv, dv] = vv;
              const Nv = Pv("buildAFactory2Game:powerRunning", {
                amount: String(ev)
              });
              let lv = pv > 0 ? Pv("buildAFactory2Game:waterMakerPower", {
                running: Nv,
                power: Pp(pv)
              }) : Nv;
              return dv && (lv = Pv(0 === ev && gv <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Ye.jsx)(Tp, {
                item: zv,
                label: `${he(Pv,zv)} \xd7${hv}`,
                note: lv,
                value: ev > 0 || dv && gv > 0 ? Sv(gv, "+") : Pv("buildAFactory2Game:powerIdle"),
                dim: 0 === ev && !dv,
                bad: dv
              }, zv)
            }))]
          })]
        }), (0, Ye.jsxs)("section", {
          children: [(0, Ye.jsxs)("h3", {
            children: [Pv("buildAFactory2Game:waterUses"), (0, Ye.jsx)("span", {
              children: Sv(zv.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Ye.jsxs)("ul", {
            children: [0 === zv.baf2WaterUsers.length && (0, Ye.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Pv(hv ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), zv.baf2WaterUsers.map((vv => {
              let [zv, hv, ev, gv] = vv;
              const pv = Xg.r[zv] ? he(Pv, zv) : zv;
              return (0, Ye.jsx)(Tp, {
                item: Wp(zv),
                label: hv > 1 ? `${pv} \xd7${hv}` : pv,
                note: gv ? Pv("buildAFactory2Game:waterPortFirst") : void 0,
                value: ev > 0 ? Sv(ev, "\u2212") : Pv("buildAFactory2Game:powerIdle"),
                dim: 0 === ev
              }, zv)
            }))]
          })]
        })]
      })
    }

    function ap(vv) {
      var zv, Pv, Sv, ev, gv;
      let {
        store: pv,
        close: dv
      } = vv;
      const {
        t: Nv
      } = (0, OS.x)(), lv = function(vv) {
        const [zv, Pv] = (0, hv.useState)((() => vv.get()));
        return (0, hv.useEffect)((() => (Pv(vv.get()), vv.subscribe((() => {
          Pv(vv.get())
        })))), [vv]), zv
      }(pv), Tv = null !== (zv = null === lv || void 0 === lv ? void 0 : lv.baf2WaterStored) && void 0 !== zv ? zv : 0, Wv = null !== (Pv = null === lv || void 0 === lv ? void 0 : lv.baf2WaterCap) && void 0 !== Pv ? Pv : 0, wv = null !== (Sv = null === lv || void 0 === lv ? void 0 : lv.baf2WaterMadePerS) && void 0 !== Sv ? Sv : 0, av = null !== (ev = null === lv || void 0 === lv ? void 0 : lv.baf2WaterUsedPerS) && void 0 !== ev ? ev : 0, sv = null !== (gv = null === lv || void 0 === lv ? void 0 : lv.baf2WaterNetPerS) && void 0 !== gv ? gv : wv - av, Cv = lv && Np(Nv, lv), iv = lv && lp(Nv, lv), cv = !0 === (null === lv || void 0 === lv ? void 0 : lv.baf2WaterCryo);
      return (0, Ye.jsx)(mg.c, {
        close: dv,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ye.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== lv && Wv <= 0 ? (0, Ye.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Ye.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Ye.jsx)(KS.b, {
                  itemName: cv ? aP.f : Xv.i,
                  amount: 0
                })
              }), (0, Ye.jsxs)("div", {
                children: [(0, Ye.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Nv(cv ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), lv && (0, Ye.jsx)("p", {
                  children: dp(Nv, lv)
                })]
              })]
            }), (0, Ye.jsx)(jg.i, {
              onClick: dv
            })]
          }), lv && Cv && (0, Ye.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Ye.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Ye.jsx)(gp, {
                stored: Tv,
                cap: Wv,
                netPerS: sv,
                cryo: cv,
                rates: Sp(Nv, cv, wv, av)
              })
            }), (0, Ye.jsx)("div", {
              className: fS()("Baf2WaterThis", {
                Bad: Cv.bad
              }),
              children: Cv.text
            }), lv.baf2WaterDriven && (0, Ye.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Ye.jsx)(DS.b, {
                name: "bolt"
              }), Nv(cv ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), iv && (0, Ye.jsx)("p", {
              className: "Baf2WaterNext",
              children: iv
            }), (0, Ye.jsx)(wp, {
              message: lv
            })]
          })]
        })
      })
    }
    class sp {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(vv, zv) {
        const Pv = this.get(vv);
        Pv && null === zv.opLeftMs && null === zv.fuelLeftMs && zv.status === Pv.status ? zv = {
          ...zv,
          opLeftMs: Pv.opLeftMs,
          fuelLeftMs: Pv.fuelLeftMs,
          burning: Pv.burning
        } : this.updates++, this.pos = vv, this.view = zv;
        for (const hv of this.listeners) hv()
      }
      get(vv) {
        return null !== this.pos && this.pos[0] === vv[0] && this.pos[1] === vv[1] && this.pos[2] === vv[2] ? this.view : null
      }
      forget(vv) {
        null !== this.get(vv) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
    }

    function Cp(vv, zv, Pv, hv) {
      return "noFuel" === zv && hv && !SP(tz[vv]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === zv && !0 === (null === Pv || void 0 === Pv ? void 0 : Pv.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === zv && !0 === (null === Pv || void 0 === Pv ? void 0 : Pv.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === zv && !0 === (null === Pv || void 0 === Pv ? void 0 : Pv.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === zv && !0 === (null === Pv || void 0 === Pv ? void 0 : Pv.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : ip(zv, Pv) ? "buildAFactory2Game:machineStatus_noInputShort" : function(vv, zv) {
        const Pv = tz[vv];
        if ("noFuel" === zv && void 0 !== Pv.fuels) return SP(Pv) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (Pv.mobFarm && ("noInput" === zv || "badInput" === zv)) return `buildAFactory2Game:machineStatus_${zv}MobFarm`;
        if ("outputFull" === zv && (void 0 !== Pv.table || Pv.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === zv && Ez(Pv)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== Pv.cryoMade && ("noInput" === zv || "noOutlet" === zv || "fluidFull" === zv)) return `buildAFactory2Game:machineStatus_${zv}Mixer`;
        return `buildAFactory2Game:machineStatus_${zv}`
      }(vv, zv)
    }

    function ip(vv, zv) {
      return "noInput" === vv && null !== zv && void 0 !== zv && zv.input && zv.inputShort ? {
        input: zv.input,
        short: zv.inputShort
      } : null
    }

    function cp(vv) {
      return FS(vv) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== vv.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Gp(vv) {
      const zv = (0, tv.ee)(vv);
      return `Baf2Pane Baf2Pane${zv.charAt(0).toUpperCase()}${zv.slice(1)}`
    }

    function mp(vv, zv) {
      const [Pv, Sv] = (0, hv.useState)((() => vv.get(zv)));
      return (0, hv.useEffect)((() => {
        Sv(vv.get(zv));
        const Pv = vv.subscribe((() => {
          Sv(vv.get(zv))
        }));
        return () => {
          Pv(), vv.forget(zv)
        }
      }), [vv, ...zv]), Pv
    }

    function jp(vv, zv, Pv, hv) {
      const Sv = tz[vv],
        ev = zv && Sv.couplable ? Mz(Sv, Pv) : Sv,
        gv = null !== hv && zP(ev) ? function(vv, zv) {
          var Pv;
          return null !== (Pv = null !== zv && zP(vv) ? pP[zv] : void 0) && void 0 !== Pv ? Pv : vv.opMs
        }(ev, dP(hv)) : ev.opMs;
      return gv === ev.opMs ? ev : {
        ...ev,
        opMs: gv
      }
    }

    function fp(vv) {
      let {
        running: zv,
        opMs: Pv,
        opLeftMs: hv,
        updateCount: Sv
      } = vv;
      return (0, Ye.jsx)("div", {
        className: fS()("Baf2MachineProgress", {
          Running: zv
        }),
        children: (0, Ye.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: Pv / 1e3 + "s",
            animationDelay: null === hv ? void 0 : (hv - Pv) / 1e3 + "s"
          }
        }, Sv)
      })
    }

    function Fp(vv) {
      let {
        running: zv,
        leftMs: Pv,
        periodMs: hv,
        updateCount: Sv
      } = vv;
      const {
        t: ev
      } = (0, OS.x)(), gv = Math.min(Math.max(null !== Pv && void 0 !== Pv ? Pv : 0, 0), hv), pv = zv && gv > 0, dv = ev("buildAFactory2Game:machineBarFuel");
      return (0, Ye.jsx)("div", {
        className: fS()("Baf2FuelBurn", {
          Draining: pv
        }),
        role: "img",
        title: dv,
        "aria-label": dv,
        children: (0, Ye.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: pv ? {
            animationDuration: hv / 1e3 + "s",
            animationDelay: (gv - hv) / 1e3 + "s"
          } : {
            transform: `scaleY(${gv/hv})`
          }
        }, Sv)
      })
    }

    function Yp(vv, zv, Pv) {
      let [hv, Sv] = Pv;
      const ev = 1 !== hv ? nS(zv) : null;
      return {
        amount: hv,
        have: Sv,
        item: vv(ev || Pe(zv))
      }
    }

    function np(vv) {
      return zP(vv) ? "buildAFactory2Game:machineBarMining" : PP(vv) ? "buildAFactory2Game:machineBarCutting" : void 0 !== vv.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Op(vv) {
      var zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv;
      let {
        kind: mv,
        PS: jv,
        store: fv,
        power: Fv,
        renderSlot: Yv
      } = vv;
      const {
        t: nv
      } = (0, OS.x)(), Ov = mp(fv, jv), Dv = tz[mv], Kv = null !== (zv = null === Ov || void 0 === Ov ? void 0 : Ov.coupled) && void 0 !== zv && zv, Vv = null !== (Pv = null === Ov || void 0 === Ov ? void 0 : Ov.couplerLevel) && void 0 !== Pv ? Pv : 1, Uv = jp(mv, Kv, Vv, null !== (hv = null === Ov || void 0 === Ov || null === (Sv = Ov.dug) || void 0 === Sv ? void 0 : Sv.item) && void 0 !== hv ? hv : null), Rv = null !== (ev = null === Ov || void 0 === Ov ? void 0 : Ov.status) && void 0 !== ev ? ev : null, xv = null !== (gv = null === Ov || void 0 === Ov ? void 0 : Ov.power) && void 0 !== gv ? gv : null, tv = null !== (pv = null === Ov || void 0 === Ov ? void 0 : Ov.opLeftMs) && void 0 !== pv ? pv : null, qv = null !== (dv = null === Ov || void 0 === Ov ? void 0 : Ov.dug) && void 0 !== dv ? dv : null, Iv = null !== qv && zP(Dv) ? pP[null !== (Nv = dP(qv.item)) && void 0 !== Nv ? Nv : ""] : void 0, Qv = void 0 === Iv ? null : 6e4 / Iv, Zv = null !== (lv = null === Ov || void 0 === Ov ? void 0 : Ov.powerCap) && void 0 !== lv ? lv : 4e3, Av = null !== (Tv = null === Ov || void 0 === Ov ? void 0 : Ov.tier) && void 0 !== Tv ? Tv : null, Lv = void 0 !== Uv.powerMade, Hv = null !== Dv.fuelSlot ? Yv(Dv.fuelSlot) : null, Mv = Hz(Dv), yv = !Kv && !0 === (null === Ov || void 0 === Ov ? void 0 : Ov.fuelFed), Jv = !Kv && !0 === (null === Ov || void 0 === Ov ? void 0 : Ov.fuelFeeds), Ev = null !== Dv.fuelSlot && !Kv, ov = null !== (Wv = null === Ov || void 0 === Ov ? void 0 : Ov.fuelLeftMs) && void 0 !== Wv ? Wv : null, bv = function(vv, zv, Pv) {
        var hv;
        const Sv = null === zv ? void 0 : eP[zv];
        return Math.max(null !== (hv = null !== Sv && void 0 !== Sv ? Sv : Pv) && void 0 !== hv ? hv : 0, vv.opMs)
      }(Uv, null !== (wv = null === Ov || void 0 === Ov ? void 0 : Ov.burning) && void 0 !== wv ? wv : null, ov), rv = null !== (av = null === Ov || void 0 === Ov ? void 0 : Ov.fuelKeep) && void 0 !== av ? av : null, kv = null === Rv ? null : Cp(mv, Rv, Ov, yv), Xv = null === Rv ? null : ip(Rv, Ov);
      return (0, Ye.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Ye.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: nv(Pe(mv))
          }), qv && (0, Ye.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [nv("Tree Cutter" === mv ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Ye.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Ye.jsx)(KS.b, {
                itemName: qv.item,
                amount: 0
              })
            }), (0, Ye.jsx)(VS.c, {
              text: qv.name
            })]
          }), null !== Qv && (0, Ye.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: nv("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Qv)
            })
          }), (null === Ov || void 0 === Ov ? void 0 : Ov.field) && (0, Ye.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Ye.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Ye.jsx)(KS.b, {
                itemName: "Wheat",
                amount: 0
              })
            }), nv("buildAFactory2Game:machineField", {
              planted: String(Ov.field[0]),
              ripe: String(Ov.field[1])
            })]
          }), (0, Ye.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Ye.jsxs)("div", {
              className: fS()("Baf2MachineColumn", {
                Baf2Burns: Ev
              }),
              children: [null !== Uv.inputSlot && (0, Ye.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Ye.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: nv(cp(Uv))
                }), Yv(Uv.inputSlot)]
              }), null !== Dv.fuelSlot && !Kv && (0, Ye.jsxs)("div", {
                className: fS()("Baf2MachineSlot", {
                  Baf2FuelFed: yv
                }),
                children: [(0, Ye.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [yv && (0, Ye.jsx)(DS.b, {
                    name: "fire"
                  }), nv("buildAFactory2Game:machineFuel")]
                }), (0, Ye.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Ye.jsx)(Fp, {
                    running: "running" === Rv,
                    leftMs: ov,
                    periodMs: bv,
                    updateCount: fv.updateCount
                  }), Hv]
                })]
              }), null !== Dv.fuelSlot && Kv && (0, Ye.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Ye.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: nv("buildAFactory2Game:machineFuel")
                }), (0, Ye.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: nv("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": nv("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Ye.jsx)(DS.b, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Ye.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Ye.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: nv(np(Uv))
              }), (0, Ye.jsx)(fp, {
                running: "running" === Rv,
                opMs: Uv.opMs,
                opLeftMs: tv,
                updateCount: fv.updateCount
              })]
            }), Uv.outputSlots.length > 0 && (0, Ye.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Ye.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: nv("buildAFactory2Game:machineOutput")
              }), (0, Ye.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Uv.outputSlots.map((vv => (0, Ye.jsx)("div", {
                  children: Yv(vv)
                }, vv)))
              })]
            }), null !== xv && Lv && (0, Ye.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Ye.jsx)("div", {
                style: {
                  height: 100 * xv / Zv + "%"
                }
              })
            })]
          }), Ev && null !== rv && (0, Ye.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Ye.jsx)(DS.b, {
              name: "arrows-rotate"
            }), nv(PP(Uv) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(rv)
            })]
          }), (yv || Jv) && (0, Ye.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Ye.jsx)(DS.b, {
              name: "fire"
            }), nv(yv ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Dv.couplable && (0, Ye.jsx)(rg, {
            kind: mv,
            tier: Av,
            coupled: Kv,
            level: Vv,
            slot: Mv === Dv.fuelSlot ? Hv : null !== Mv ? Yv(Mv) : null
          }), null !== xv && !Lv && !0 === (null === Ov || void 0 === Ov ? void 0 : Ov.reactorPowered) && (0, Ye.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: nv("buildAFactory2Game:machineReactorPowered")
          }), null !== xv && !Lv && !0 !== (null === Ov || void 0 === Ov ? void 0 : Ov.reactorPowered) && (0, Ye.jsx)(Kg, {
            stored: xv,
            cap: Zv,
            rates: null !== (sv = null === Ov || void 0 === Ov ? void 0 : Ov.powerRates) && void 0 !== sv ? sv : null
          }), (null === Ov || void 0 === Ov ? void 0 : Ov.water) && (0, Ye.jsx)(pp, {
            water: Ov.water,
            at: jv,
            side: Ov.cryo ? "waterIn" : null
          }), (null === Ov || void 0 === Ov ? void 0 : Ov.cryo) && (0, Ye.jsx)(pp, {
            water: Ov.cryo,
            at: jv,
            side: "cryoOut"
          }), null !== Ov && void 0 !== Ov && Ov.inertCoupler ? (0, Ye.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: nv("buildAFactory2Game:machineStatus_couplerOff", {
              item: he(nv, Ov.inertCoupler)
            })
          }) : null !== kv && (0, Ye.jsx)("div", {
            className: fS()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Rv
            }),
            children: nv(kv, Xv ? Yp(nv, Xv.input, Xv.short) : void 0)
          })]
        }), (0, Ye.jsxs)("div", {
          className: fS()("Baf2MachineSide", {
            Baf2SynthSide: Ez(Dv)
          }),
          children: [Ez(Dv) && (0, Ye.jsx)(og, {
            PS: jv,
            taught: null !== (Cv = null === Ov || void 0 === Ov ? void 0 : Ov.taught) && void 0 !== Cv ? Cv : null
          }, jv.join(",")), Lv && (0, Ye.jsx)(Ug, {
            kind: mv,
            def: Uv,
            PS: jv,
            power: Fv,
            stored: null !== xv && void 0 !== xv ? xv : 0,
            cap: Zv
          }), Bv(Dv) && (0, Ye.jsx)(Bg, {
            PS: jv,
            input: null !== (iv = null === Ov || void 0 === Ov ? void 0 : Ov.input) && void 0 !== iv ? iv : null,
            drops: null !== (cv = null === Ov || void 0 === Ov ? void 0 : Ov.farm) && void 0 !== cv ? cv : null,
            seconds: String(Uv.opMs / 1e3)
          }), !Lv && !Bv(Dv) && !Ez(Dv) && (0, Ye.jsx)(Pg, {
            kind: mv,
            def: Uv,
            input: null !== (Gv = null === Ov || void 0 === Ov ? void 0 : Ov.input) && void 0 !== Gv ? Gv : null,
            tier: null !== Av && void 0 !== Av ? Av : 1,
            noSeeds: !0 === (null === Ov || void 0 === Ov ? void 0 : Ov.noSeeds)
          })]
        })]
      })
    }

    function Dp(vv, zv, Pv, hv) {
      var Sv;
      const ev = tz[vv],
        gv = [ev.inputSlot, ev.fuelSlot, ...null !== (Sv = ev.inputSlots) && void 0 !== Sv ? Sv : []].filter((vv => null !== vv));
      return {
        render: Sv => {
          let {
            PS: ev,
            renderSlot: gv
          } = Sv;
          return (0, Ye.jsx)(Ag.Provider, {
            value: hv,
            children: (0, Ye.jsx)(Op, {
              kind: vv,
              PS: ev,
              store: zv,
              power: Pv,
              renderSlot: gv
            })
          })
        },
        quickMoveRange: gv.length > 0 ? [Math.min(...gv), Math.max(...gv) + 1] : [0, 0],
        className: Gp(vv)
      }
    }
    const Kp = "Assembler";

    function Vp(vv) {
      var zv, Pv, hv, Sv, ev, gv, pv, dv, Nv;
      let {
        PS: lv,
        store: Tv,
        renderSlot: Wv
      } = vv;
      const {
        t: wv
      } = (0, OS.x)(), av = mp(Tv, lv), sv = null !== (zv = null === av || void 0 === av ? void 0 : av.tier) && void 0 !== zv ? zv : 1, Cv = null !== (Pv = null === av || void 0 === av ? void 0 : av.taught) && void 0 !== Pv ? Pv : null, iv = kz(Kp, {
        coupled: !1,
        taught: Cv
      }), cv = null !== (hv = iv.bench) && void 0 !== hv ? hv : null, Gv = null !== (Sv = null === av || void 0 === av ? void 0 : av.status) && void 0 !== Sv ? Sv : null, mv = null !== (ev = null === av || void 0 === av ? void 0 : av.power) && void 0 !== ev ? ev : null, jv = null !== (gv = null === av || void 0 === av ? void 0 : av.powerCap) && void 0 !== gv ? gv : 4e3;
      return (0, Ye.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Ye.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: wv(Pe(Kp))
          }), cv && (0, Ye.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [wv("buildAFactory2Game:benchMakes"), (0, Ye.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Ye.jsx)(KS.b, {
                itemName: cv.output,
                amount: 0
              })
            }), (null === av || void 0 === av ? void 0 : av.taughtName) && (0, Ye.jsx)(VS.c, {
              text: av.taughtName
            }), cv.outputAmount > 1 && (0, Ye.jsxs)("span", {
              children: ["\xd7", cv.outputAmount]
            })]
          }), !cv && (0, Ye.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: wv("buildAFactory2Game:benchTeachHint")
          }), (0, Ye.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Ye.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (pv = iv.inputSlots) && void 0 !== pv ? pv : []).map(((vv, zv) => {
                const Pv = null === cv || void 0 === cv ? void 0 : cv.inputs[zv];
                return (0, Ye.jsxs)("div", {
                  className: fS()("Baf2BenchInput", {
                    Spare: !Pv
                  }),
                  children: [(0, Ye.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Wv(vv), Pv && (0, Ye.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Ye.jsx)(KS.b, {
                        itemName: Pv.item,
                        amount: 0
                      })
                    })]
                  }), (0, Ye.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: Pv ? `\xd7${Pv.amount}` : "\xa0"
                  })]
                }, vv)
              }))
            }), (0, Ye.jsx)(fp, {
              running: "running" === Gv,
              opMs: iv.opMs,
              opLeftMs: null !== (dv = null === av || void 0 === av ? void 0 : av.opLeftMs) && void 0 !== dv ? dv : null,
              updateCount: Tv.updateCount
            }), (0, Ye.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Ye.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: wv("buildAFactory2Game:machineOutput")
              }), (0, Ye.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: iv.outputSlots.map((vv => (0, Ye.jsx)("div", {
                  children: Wv(vv)
                }, vv)))
              })]
            })]
          }), null !== mv && (0, Ye.jsx)(Kg, {
            stored: mv,
            cap: jv,
            rates: null !== (Nv = null === av || void 0 === av ? void 0 : av.powerRates) && void 0 !== Nv ? Nv : null
          }), null !== Gv && (0, Ye.jsx)("div", {
            className: fS()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Gv
            }),
            children: wv(Cp(Kp, Gv, av, !1))
          }), cv && cv.inputs.length > 1 && (0, Ye.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: wv("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Ye.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Ye.jsx)(Sg, {
            taught: Cv,
            tier: sv
          }), cv && (0, Ye.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: wv("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Up(vv) {
      var zv;
      const Pv = null !== (zv = tz[Kp].inputSlots) && void 0 !== zv ? zv : [];
      return {
        render: zv => {
          let {
            PS: Pv,
            renderSlot: hv
          } = zv;
          return (0, Ye.jsx)(Vp, {
            PS: Pv,
            store: vv,
            renderSlot: hv
          })
        },
        quickMoveRange: [Math.min(...Pv), Math.max(...Pv) + 1],
        className: Gp(Kp)
      }
    }
    var Rp = Pv(73),
      xp = Pv(1108),
      tp = Pv(4019);
    const qp = 600,
      Ip = .5,
      Qp = 4,
      Zp = 1200,
      Ap = 140,
      Lp = 100,
      Hp = 32,
      Mp = 16,
      yp = 100.5,
      Bp = 90,
      Jp = 1.5,
      Ep = 50;

    function op(vv) {
      switch (UP(vv)) {
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
    const bp = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function rp(vv) {
      const zv = Math.ceil(60 * vv / Lp);
      return {
        fuel: Math.max(Hp, zv),
        waste: Math.max(Mp, zv)
      }
    }

    function kp(vv, zv, Pv) {
      const [hv, Sv, ev] = [vv - 2, zv - 2, Pv - 2];
      return 2 * (hv * Sv + Sv * ev + ev * hv) * Ap
    }

    function Xp(vv, zv, Pv) {
      return Math.max(0, vv - 2) * Math.max(0, zv - 2) * Math.max(0, Pv - 2)
    }

    function vd(vv, zv) {
      const [Pv, hv, Sv] = vv, ev = Pv * hv * Sv, gv = new Float32Array(ev);
      let pv = 0,
        dv = 0,
        Nv = 0,
        lv = 0,
        Tv = 0;
      const Wv = (vv, ev, gv) => vv < 0 || vv >= Pv || ev < 0 || ev >= hv || gv < 0 || gv >= Sv ? 0 : zv[(ev * Sv + gv) * Pv + vv];
      for (let Cv = 0; Cv < hv; Cv++)
        for (let vv = 0; vv < Sv; vv++)
          for (let hv = 0; hv < Pv; hv++) {
            const ev = (Cv * Sv + vv) * Pv + hv,
              wv = zv[ev];
            if (1 === wv) {
              pv++;
              let zv = 0;
              for (const [Pv, Sv, ev] of bp) {
                const gv = Wv(hv + Pv, Cv + Sv, vv + ev);
                1 !== gv && 2 !== gv || zv++
              }
              gv[ev] = qp * (1 + Ip * Math.min(zv, Qp)), lv += gv[ev]
            } else if (2 === wv) dv++;
            else if (3 === wv) {
              Nv++;
              bp.some((zv => {
                let [Pv, Sv, ev] = zv;
                return 1 === Wv(hv + Pv, Cv + Sv, vv + ev)
              })) && (Tv += Zp)
            }
          }
      const wv = kp(Pv + 2, hv + 2, Sv + 2),
        av = Math.min(lv, Tv, wv),
        sv = pv > 0 ? lv * Lp / pv : 0;
      return {
        rods: pv,
        graphite: dv,
        channels: Nv,
        fuelHeat: lv,
        cooling: Tv,
        size: wv,
        max: av,
        vol: ev,
        powerPerUnit: sv,
        pelletsPerMin: sv > 0 ? av / sv * 60 : 0,
        waterPerS: av * Xv.m,
        rodHeat: gv
      }
    }
    const zd = 0,
      Pd = 1,
      hd = 6,
      Sd = 7,
      ed = 8;

    function gd(vv, zv) {
      const [Pv, hv, Sv] = vv, ev = new Uint8Array(Pv * hv * Sv), gv = (vv, ev, gv) => vv < 0 || vv >= Pv || ev < 0 || ev >= hv || gv < 0 || gv >= Sv ? 0 : zv[(ev * Sv + gv) * Pv + vv];
      for (let pv = 0; pv < hv; pv++)
        for (let vv = 0; vv < Sv; vv++)
          for (let hv = 0; hv < Pv; hv++) {
            const dv = (pv * Sv + vv) * Pv + hv,
              Nv = zv[dv];
            if (1 === Nv) {
              let zv = 0;
              for (const [Pv, Sv, ev] of bp) {
                const dv = gv(hv + Pv, pv + Sv, vv + ev);
                zv += 1 === dv || 2 === dv ? 1 : 0
              }
              ev[dv] = Pd + Math.min(zv, Qp)
            } else if (3 === Nv) {
              const zv = bp.some((zv => {
                let [Pv, Sv, ev] = zv;
                return 1 === gv(hv + Pv, pv + Sv, vv + ev)
              }));
              ev[dv] = zv ? hd : Sd
            } else 2 === Nv && (ev[dv] = ed)
          }
      return ev
    }

    function pd(vv) {
      return vv.fuelHeat <= vv.cooling && vv.fuelHeat <= vv.size ? "fuel" : vv.cooling <= vv.size ? "cooling" : "size"
    }
    const dd = Bp;

    function Nd(vv, zv, Pv) {
      return Math.round(vv * zv * Pv * 25e3 * (1 + .25 * (Math.min(vv, zv, Pv) - 2)))
    }

    function ld(vv) {
      return Math.max(0, Math.min(Xv.g, vv))
    }

    function Td(vv, zv, Pv) {
      const hv = zv * ld(Pv);
      return vv <= 0 ? 0 : hv > 0 ? Math.min(200, 100 * vv / hv) : 200
    }

    function Wd(vv, zv) {
      const Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Jp : 1;
      return Math.min(vv.fuelHeat * Pv, vv.cooling * ld(zv), vv.size * Pv)
    }

    function wd(vv) {
      return 2 + vv / 10
    }
    const ad = "buildAFactory2Game:";

    function sd(vv) {
      var zv;
      return null !== (zv = vv.baf2RxMood) && void 0 !== zv ? zv : function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const Pv = [
          ["calm", 50],
          ["warm", dd],
          ["hot", yp]
        ];
        for (const [hv, Sv] of Pv)
          if (vv < Sv + (hv === zv ? 3 : 0)) return hv;
        return "alarm"
      }(vv.baf2RxHeat)
    }
    const Cd = 120;

    function cd(vv) {
      const zv = vv.baf2RxState;
      if ("running" === zv && vv.baf2RxHeat > yp) return {
        label: `${ad}rxState_tooHot`,
        tone: "bad",
        fix: `${ad}rxFix_tooHot`
      };
      switch (zv) {
        case "running":
          return {
            label: `${ad}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${ad}rxState_idle`, tone: "off", fix: `${ad}rxFix_idle`
          };
        case "scram":
          return {
            label: `${ad}rxState_scram`, tone: "off", fix: vv.baf2RxHeat < Ep ? `${ad}rxFix_scramCool` : `${ad}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${ad}rxState_${zv}`, tone: "off", fix: `${ad}rxFix_${zv}`
          };
        case "melted":
          return {
            label: `${ad}rxState_melted`, tone: "bad", fix: `${ad}rxFix_melted`
          };
        default:
          return {
            label: `${ad}rxState_${zv}`, tone: "warn", fix: `${ad}rxFix_${zv}`
          }
      }
    }

    function Gd(vv) {
      const [zv, Pv, hv] = vv.baf2RxStats;
      return {
        fuelHeat: zv,
        cooling: Pv * (vv.baf2RxCryo ? Math.max(1, ld(vv.baf2RxWater / 100)) : 1),
        size: hv
      }
    }

    function md(vv) {
      var zv;
      const Pv = "idle" === vv.baf2RxState || "running" === vv.baf2RxState && vv.baf2RxHeat <= yp || "scram" === vv.baf2RxState && vv.baf2RxHeat < Ep;
      if (0 === (vv.baf2RxFlags & mz) || !vv.baf2RxFormed || !Pv) return null;
      const {
        fuelHeat: hv,
        cooling: Sv,
        size: ev
      } = Gd(vv), gv = Math.min(hv, Sv, ev), pv = pd({
        fuelHeat: hv,
        cooling: Sv,
        size: ev
      }), dv = "cooling" === pv && !0 === vv.baf2RxCryoOpen && !vv.baf2RxCryo, Nv = null !== (zv = vv.baf2RxCells) && void 0 !== zv ? zv : "", lv = ("fuel" === pv || "cooling" === pv && !0 === vv.baf2RxCryo) && Nv.length > 0 && !Nv.includes(String(0)), Tv = dv ? "Cryo" : "scram" === vv.baf2RxState ? "Off" : "";
      return gv < 12e3 ? {
        key: `${ad}rxGrow_${lv?"full":pv}${Tv}`,
        amount: gv
      } : null
    }

    function jd(vv, zv) {
      return vv[0] === zv[0] && vv[1] === zv[1] && vv[2] === zv[2]
    }

    function fd(vv) {
      return [...vv].sort(((vv, zv) => Number(zv[2] < zv[1]) - Number(vv[2] < vv[1])))
    }

    function Fd(vv, zv) {
      return zv.some((zv => {
        let [Pv, hv] = zv;
        return !(hv <= 0) && ["edge", "cap", "wall", "inside"].some((zv => Pv === eh(vv, zv)))
      }))
    }

    function Yd(vv, zv, Pv) {
      const hv = vv.baf2RxFuel - vv.baf2RxPu > 0 ? Pv : 0;
      return {
        full: vv.baf2RxWaste > zv - 3,
        fullInS: hv > 0 ? Math.max(0, zv - vv.baf2RxWaste) / hv : null
      }
    }
    const nd = {
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

    function Od(vv) {
      return Dd[vv]
    }
    const Dd = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Kd(vv) {
      let [zv, Pv, hv] = vv;
      return Math.ceil(kp(zv, Pv, hv) * Xv.m)
    }

    function Vd(vv, zv) {
      return "battery" === vv ? zv[0] * zv[1] * zv[2] : function(vv) {
        let [zv, Pv, hv] = vv;
        return zv * Pv * hv - Math.max(0, zv - 2) * Math.max(0, Pv - 2) * Math.max(0, hv - 2)
      }(zv) - 1
    }

    function Ud(vv) {
      const zv = Math.max(0, vv);
      if (zv < 10) return String(Math.round(10 * zv) / 10);
      if (zv < 1e4) return Math.round(zv).toLocaleString("en-US");
      if (zv < 1e6) return `${zv<1e5?(Math.floor(zv/100)/10).toFixed(1):Math.floor(zv/1e3)}k`;
      const Pv = zv / 1e6;
      return `${Pv<10?(Math.floor(100*Pv)/100).toFixed(2):Pv<100?(Math.floor(10*Pv)/10).toFixed(1):Math.floor(Pv)}M`
    }

    function Rd(vv) {
      return vv <= 0 ? "0" : vv >= 10 ? String(Math.round(vv)) : vv.toFixed(vv >= 1 ? 1 : 2)
    }

    function xd(vv) {
      const zv = XP(vv, 0),
        Pv = XP(vv, oP(vv) - 1);
      return {
        lo: [Math.min(zv[0], Pv[0]), Math.min(zv[1], Pv[1]), Math.min(zv[2], Pv[2])],
        hi: [Math.max(zv[0], Pv[0]) + 1, Math.max(zv[1], Pv[1]) + 1, Math.max(zv[2], Pv[2]) + 1]
      }
    }

    function td(vv, zv, Pv) {
      const hv = [zv[0] - vv[0], zv[1] - vv[1], zv[2] - vv[2]],
        Sv = [(vv[0] + zv[0]) / 2, (vv[1] + zv[1]) / 2, (vv[2] + zv[2]) / 2],
        ev = [];
      for (let gv = 0; gv < 3; gv++) {
        const pv = (gv + 1) % 3,
          dv = (gv + 2) % 3;
        for (const Nv of [vv[pv], zv[pv]])
          for (const lv of [vv[dv], zv[dv]]) {
            const vv = [0, 0, 0],
              zv = [Pv, Pv, Pv];
            vv[gv] = Sv[gv], zv[gv] = hv[gv] + Pv, vv[pv] = Nv, vv[dv] = lv, ev.push([vv, zv])
          }
      }
      return ev
    }
    const qd = "buildAFactory2Game:",
      Id = [`${qd}colNorth`, `${qd}colEast`, `${qd}colSouth`, `${qd}colWest`];

    function Qd(vv, zv) {
      const [Pv, hv, Sv] = vv.baf2ColAt;
      return `baf2col ${Pv} ${hv} ${Sv} ${zv}`
    }

    function Zd(vv) {
      return function(vv) {
        if (!Number.isFinite(vv)) return "";
        const zv = Math.max(1, Math.round(vv));
        if (zv < 60) return `${zv}s`;
        const Pv = zv % 60;
        return 0 === Pv ? zv / 60 + "m" : `${Math.floor(zv/60)}m ${Pv}s`
      }(function(vv) {
        const zv = gh.FOCUS_BY_LASERS[Math.max(0, Math.min(4, vv))];
        return zv > 0 ? gh.NOVA_FOCUS / zv : 1 / 0
      }(vv))
    }

    function Ad(vv) {
      const zv = Math.abs(Math.round(vv));
      return zv < 1e3 ? Math.round(vv).toLocaleString("en-US") : zv < 1e6 ? `${zv<1e5?(vv/1e3).toFixed(1).replace(/\.0$/,""):Math.round(vv/1e3)}k` : `${(vv/1e6).toFixed(zv<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Ld(vv, zv, Pv) {
      if (Wh(zv) >= 0) {
        const zv = function(vv, zv) {
          return vv.find((vv => {
            let {
              focus: Pv
            } = vv;
            return Pv[0] === zv[0] && Pv[2] === zv[2] && (zv[1] === Pv[1] || zv[1] === Pv[1] - 1)
          }))
        }(vv, Pv);
        if (!zv) return null;
        const Sv = function(vv) {
          let zv = 0,
            Pv = 0;
          for (let hv = 0; hv < 4; hv++) zv += vv.laser[hv] ? 1 : 0, Pv += vv.live[hv] ? 1 : 0;
          return {
            lasers: zv,
            live: Pv,
            focusPerS: gh.FOCUS_BY_LASERS[Pv],
            drawPerS: gh.LASER_DRAW * Pv
          }
        }({
          laser: zv.lasers,
          live: zv.live
        });
        if (0 === Sv.lasers || "noLasers" === zv.state) return {
          key: `${qd}lookColNoLasers`
        };
        if (0 === Sv.live) return {
          key: `${qd}lookColOff_blocked`
        };
        if (!(zv.on && Sv.live > 0) && ("running" !== (hv = zv.state) && "slowed" !== hv)) return {
          key: `${qd}lookColOff_${zv.state}`
        };
        if (Sv.live < Sv.lasers) return {
          key: `${qd}lookColLasersSome`,
          params: {
            lasers: String(Sv.lasers),
            live: String(Sv.live)
          }
        };
        const ev = zv.open.filter(Boolean).length;
        return ev < 4 ? {
          key: `${qd}lookColLasersSpots`,
          params: {
            live: String(Sv.live),
            spots: String(ev),
            time: Zd(Sv.live)
          }
        } : {
          key: `${qd}lookColLasers`,
          params: {
            live: String(Sv.live),
            time: Zd(Sv.live)
          }
        }
      }
      var hv;
      if (!wh(zv)) return null;
      const Sv = function(vv, zv) {
        for (const Pv of vv) {
          const vv = ih(Pv.focus, [zv[0], zv[1], zv[2]]);
          if (vv && vv.Mg === gh.LASER_D && Pv.lasers[vv.dir]) return {
            entry: Pv,
            dir: vv.dir
          }
        }
        return null
      }(vv, Pv);
      if (!Sv) return {
        key: `${qd}lookLaserNoCollider`
      };
      const {
        entry: ev,
        dir: gv
      } = Sv;
      return ev.open[gv] ? ev.live[gv] ? {
        key: ev.on ? `${qd}lookLaserFiring` : `${qd}lookLaserReady`
      } : {
        key: `${qd}lookLaserBlocked`
      } : {
        key: `${qd}lookLaserClosed`
      }
    }

    function Hd(vv, zv) {
      const Pv = [];
      for (let hv = 1; hv < gh.LASER_D; hv++) vv & 1 << zv * (gh.LASER_D - 1) + hv - 1 && Pv.push(hv);
      return Pv
    }
    const Md = {
      firing: `${qd}colSlotFiring`,
      ready: `${qd}colSlotReady`,
      blocked: `${qd}colSlotBlocked`,
      empty: `${qd}colSlotEmpty`,
      closed: `${qd}colSlotClosed`
    };

    function yd(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const ev = eS(vv),
        gv = eS(zv),
        pv = eS(Pv),
        dv = pv.filter(Boolean).length,
        Nv = ev.filter(Boolean).length,
        lv = [0, 1, 2, 3].map((vv => gv[vv] ? ev[vv] ? pv[vv] ? hv ? "firing" : "ready" : "blocked" : (vv => Hd(Sv, vv).length > 0)(vv) ? "blocked" : "empty" : "closed")),
        Tv = lv.indexOf("blocked"),
        Wv = Tv < 0 && Nv > 0 ? lv.indexOf("empty") : -1;
      return lv.map(((vv, zv) => {
        const Pv = zv === Tv ? {
          key: `${qd}colSlotClear`
        } : zv === Wv ? {
          key: `${qd}colSlotAdd`,
          params: {
            time: Zd(Math.min(4, dv + 1))
          }
        } : null;
        return {
          dir: zv,
          tone: vv,
          title: {
            key: "blocked" !== vv || ev[zv] ? Md[vv] : `${qd}colSlotGap`,
            keys: {
              dir: Id[zv]
            }
          },
          hint: Pv
        }
      }))
    }

    function Bd(vv) {
      var zv;
      return "noPower" === vv.baf2ColState && vv.baf2ColRxState ? cd({
        baf2RxState: vv.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (zv = vv.baf2ColRxHeat) && void 0 !== zv ? zv : 0
      }) : null
    }

    function Jd(vv) {
      const zv = eS(vv.baf2ColSpots).filter(Boolean).length,
        Pv = eS(vv.baf2ColLive);
      let hv = 0,
        Sv = 0;
      return eS(vv.baf2ColLasers).forEach(((vv, zv) => {
        vv && (hv++, Sv += Pv[zv] ? 0 : 1)
      })), Sv > 0 ? {
        key: `${qd}colSubSome`,
        params: {
          blocked: String(Sv),
          lasers: String(hv)
        }
      } : zv < 4 ? {
        key: `${qd}colSubSpots`,
        params: {
          lasers: String(hv),
          spots: String(zv)
        }
      } : {
        key: `${qd}colSub`,
        params: {
          lasers: String(hv)
        }
      }
    }

    function Ed(vv) {
      const zv = Bd(vv);
      if ("idle" === vv.baf2ColRxState && zv) return {
        key: `${qd}colState_noPowerIdle`
      };
      if (zv) return {
        key: `${qd}colState_noPowerReactor`,
        keys: {
          state: zv.label
        }
      };
      if ("noInput" !== vv.baf2ColState) return {
        key: `${qd}colState_${vv.baf2ColState}`
      };
      const Pv = String(Math.max(0, gh.NOVA_SA - vv.baf2ColSa)),
        hv = String(Math.max(0, gh.NOVA_GD - vv.baf2ColGd));
      return "0" !== Pv && "0" !== hv ? {
        key: `${qd}colState_noInput`,
        params: {
          sa: Pv,
          gd: hv
        }
      } : "0" !== Pv ? {
        key: `${qd}colState_noStarAlloy`,
        params: {
          sa: Pv
        }
      } : "0" !== hv ? {
        key: `${qd}colState_noGlowDust`,
        params: {
          gd: hv
        }
      } : {
        key: `${qd}colState_running`
      }
    }

    function od(vv) {
      return vv.baf2ColP < 0 ? `${qd}colNext` : function(vv) {
        const zv = vv.baf2ColState;
        return vv.baf2ColP >= 0 && ("blocked" === zv || "noLasers" === zv || "noPower" === zv)
      }(vv) ? `${qd}colStalled` : null === bd(vv) ? `${qd}colMaking` : `${qd}colNovaIn`
    }

    function bd(vv) {
      if (vv.baf2ColP < 0 || vv.baf2ColWant <= 0) return null;
      const zv = vv.baf2ColFocusPerS * Math.min(1, vv.baf2ColDraw / vv.baf2ColWant);
      return zv > 0 ? Math.max(0, gh.NOVA_FOCUS - vv.baf2ColP) / zv : null
    }

    function rd(vv, zv) {
      const Pv = [];
      for (let hv = 1; hv <= 3; hv++) {
        const Sv = [vv[0], vv[1] - hv, vv[2]];
        if (!zv(Sv)) return Pv;
        Pv.push(Sv)
      }
      return []
    }

    function kd(vv, zv) {
      const Pv = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let hv = 0; hv < 4; hv++) {
        const Sv = hv,
          ev = Ch(vv.focus, Sv, gh.LASER_D);
        if (vv.lasers[hv] || !vv.open[hv] || !zv(ev)) continue;
        const gv = [];
        for (let Pv = 1; Pv < gh.LASER_D; Pv++) {
          const hv = Ch(vv.focus, Sv, Pv);
          zv(hv) || gv.push(hv)
        }
        Pv.supports.push(...rd(ev, zv)), 0 === gv.length ? Pv.free.push(ev) : (Pv.blocked.push(ev), Pv.gaps.push(...gv))
      }
      return Pv
    }
    const Xd = gh.LASER_D - .25,
      ud = 4,
      vN = 2,
      zN = 16;
    const PN = {
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
        blendMode: tp.f.Standard,
        soft: !0
      },
      hN = {
        green: PN,
        pink: {
          ...PN,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function SN(vv, zv) {
      const Pv = {
        ...zv.params
      };
      for (const [Sv, ev] of Object.entries(null !== (hv = zv.keys) && void 0 !== hv ? hv : {})) {
        var hv;
        Pv[Sv] = vv(ev)
      }
      return Pv
    }
    const eN = "buildAFactory2Game:",
      gN = 2 * gh.LASER_D + 1,
      pN = gh.LASER_D;

    function dN(vv) {
      return vv(`${eN}colFocusTip`, {
        need: Ad(gh.NOVA_FOCUS)
      })
    }

    function NN(vv, zv) {
      return vv(zv.key, SN(vv, zv))
    }

    function lN(vv) {
      const zv = vv.getStatus();
      return {
        status: zv,
        entry: zv ? vv.entryAtRoot(zv.baf2ColAt) : void 0
      }
    }

    function TN(vv, zv) {
      return {
        left: 100 * (pN + vv) / gN + "%",
        top: 100 * (pN + zv) / gN + "%"
      }
    }

    function WN(vv) {
      let {
        status: zv,
        entry: Pv
      } = vv;
      const hv = eS(zv.baf2ColLasers),
        Sv = eS(zv.baf2ColSpots),
        ev = eS(zv.baf2ColLive),
        gv = !0 === (null === Pv || void 0 === Pv ? void 0 : Pv.on),
        pv = gh.LASER_D,
        dv = [];
      for (let wv = 0; wv < 4; wv++) {
        const [vv, , zv] = sh[wv];
        if (ev[wv]) {
          const Pv = 100 * (pv - 1) / gN,
            hv = vv + zv > 0 ? 100 * (pN + 1) / gN : 100 * (pN - (pv - 1)) / gN,
            Sv = 100 * (pN + .35) / gN,
            ev = 30 / gN,
            Nv = 0 !== vv ? {
              left: `${hv}%`,
              width: `${Pv}%`,
              top: `${Sv}%`,
              height: `${ev}%`
            } : {
              top: `${hv}%`,
              height: `${Pv}%`,
              left: `${Sv}%`,
              width: `${ev}%`
            };
          dv.push((0, Ye.jsx)("i", {
            className: fS()("Baf2ColDiagramBeam", {
              Off: !gv
            }),
            style: Nv
          }, `beam${wv}`))
        }
        const Pv = hv[wv] ? "Baf2ColDiagramLaser" : Sv[wv] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        dv.push((0, Ye.jsx)("i", {
          className: Pv,
          style: TN(vv * pv, zv * pv)
        }, `spot${wv}`))
      }
      for (let wv = 0; wv < 4; wv++) {
        if (hv[wv] || !Sv[wv]) continue;
        const [vv, , Pv] = sh[wv];
        for (const hv of Hd(null !== (Nv = zv.baf2ColGaps) && void 0 !== Nv ? Nv : 0, wv)) {
          var Nv;
          dv.push((0, Ye.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: TN(vv * hv, Pv * hv)
          }, `gap${wv},${hv}`))
        }
      }
      for (const [wv, , av] of null !== (lv = null === Pv || void 0 === Pv ? void 0 : Pv.blockers) && void 0 !== lv ? lv : []) {
        var lv, Tv, Wv;
        const vv = wv - (null !== (Tv = null === Pv || void 0 === Pv ? void 0 : Pv.focus[0]) && void 0 !== Tv ? Tv : 0),
          zv = av - (null !== (Wv = null === Pv || void 0 === Pv ? void 0 : Pv.focus[2]) && void 0 !== Wv ? Wv : 0);
        dv.push((0, Ye.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: TN(vv, zv)
        }, `block${vv},${zv}`))
      }
      return (0, Ye.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [dv, (0, Ye.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function wN(vv) {
      let {
        status: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)(), hv = eS(zv.baf2ColLive).filter(Boolean).length;
      return (0, Ye.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: dN(Pv),
          children: Pv(`${eN}colLadder`)
        }), (0, Ye.jsx)("ul", {
          children: [1, 2, 3, 4].map((vv => (0, Ye.jsx)("li", {
            className: fS()({
              On: vv === hv
            }),
            children: Pv(`${eN}colLadderChip`, {
              lasers: String(vv),
              time: Zd(vv)
            })
          }, vv)))
        })]
      })
    }

    function aN(vv) {
      let {
        item: zv,
        Vp: Pv,
        need: hv,
        cap: Sv
      } = vv;
      const {
        t: ev
      } = (0, OS.x)(), gv = Math.min(Pv, hv);
      return (0, Ye.jsxs)("li", {
        className: fS()("Baf2ColTile", {
          Short: Pv < hv
        }),
        children: [(0, Ye.jsx)(sN, {
          item: zv
        }), (0, Ye.jsx)("b", {
          className: "Baf2ColTileValue",
          children: ev(`${eN}colOutOf`, {
            amount: String(gv),
            cap: String(hv)
          })
        }), (0, Ye.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Ye.jsx)("i", {
            style: {
              width: 100 * gv / hv + "%"
            }
          })
        }), Pv > hv && (0, Ye.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: ev(`${eN}colIntakeHeld`, {
            amount: String(Pv),
            cap: String(Sv)
          })
        })]
      })
    }

    function sN(vv) {
      let {
        item: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)();
      return (0, Ye.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Ye.jsx)(KS.b, {
            itemName: zv,
            amount: 0
          })
        }), (0, Ye.jsx)("span", {
          className: "Baf2ColTileName",
          children: he(Pv, zv)
        })]
      })
    }

    function CN(vv) {
      switch (vv.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function iN(vv) {
      var zv, Pv, Sv;
      let {
        store: ev,
        close: gv
      } = vv;
      const {
        t: pv
      } = (0, OS.x)(), dv = Lg(), {
        status: Nv,
        entry: lv
      } = function(vv) {
        const [zv, Pv] = (0, hv.useState)((() => lN(vv)));
        return (0, hv.useEffect)((() => (Pv(lN(vv)), vv.subscribe((() => {
          Pv(lN(vv))
        })))), [vv]), zv
      }(ev), [Tv, Wv] = (0, hv.useState)(null), wv = null === Nv || void 0 === Nv ? void 0 : Nv.baf2ColHold;
      (0, hv.useEffect)((() => {
        Wv(null)
      }), [wv]);
      const av = (0, hv.useRef)({
          p: -1,
          n: 0
        }),
        sv = null !== (zv = null === Nv || void 0 === Nv ? void 0 : Nv.baf2ColP) && void 0 !== zv ? zv : -1;
      sv < av.current.p && av.current.n++, av.current.p = sv;
      const Cv = (0, hv.useRef)(null),
        [iv] = (0, hv.useState)((() => {
          return (vv = ev.heldAtOpen()) === Nh || vv === lh ? {
            key: `${qd}colBeltItIn`,
            item: vv
          } : null;
          var vv
        }));
      if (!Nv) return null;
      const cv = Nv.baf2ColMember,
        Gv = Nv.baf2ColP >= 0,
        mv = function(vv, zv) {
          if (vv.baf2ColP >= 0 && vv.baf2ColDraw > 0) {
            const zv = vv.baf2ColWant > 0 ? Math.min(1, vv.baf2ColDraw / vv.baf2ColWant) : 0;
            return {
              focus: vv.baf2ColFocusPerS * zv,
              draw: vv.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === vv.baf2ColState && zv && zv.draw > 0 ? {
            ...zv,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Nv, Cv.current);
      Cv.current = mv.draw > 0 ? mv : null;
      const jv = "slowed" === Nv.baf2ColState || "noPower" === Nv.baf2ColState,
        fv = bd(Nv),
        Fv = null !== Tv && void 0 !== Tv ? Tv : Nv.baf2ColHold,
        Yv = function(vv) {
          var zv, Pv;
          return "idle" === vv.baf2ColRxState ? null : null !== (zv = null === (Pv = Bd(vv)) || void 0 === Pv ? void 0 : Pv.fix) && void 0 !== zv ? zv : null
        }(Nv),
        nv = null === Yv && null === iv ? function(vv) {
          var zv;
          const Pv = vv.baf2ColSentTo;
          if (!Pv) return null;
          const hv = null !== (zv = vv.baf2ColSentHeld) && void 0 !== zv ? zv : null;
          return {
            key: null === hv ? `${qd}colNovaSentToMachine` : `${qd}colNovaSentTo`,
            target: Pv,
            Vp: hv
          }
        }(Nv) : null,
        Ov = Gv ? pv(`${eN}colFocusOf`, {
          focus: Ad(Nv.baf2ColP),
          need: Ad(gh.NOVA_FOCUS)
        }) : null;
      return (0, Ye.jsx)(mg.c, {
        close: gv,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Ye.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Ye.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Ye.jsx)(KS.b, {
                  itemName: ph,
                  amount: 0
                })
              }), (0, Ye.jsxs)("div", {
                children: [(0, Ye.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: he(pv, ph)
                }), (0, Ye.jsx)("p", {
                  children: NN(pv, Jd(Nv))
                })]
              })]
            }), (0, Ye.jsx)(jg.i, {
              onClick: gv
            })]
          }), (0, Ye.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Ye.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Ye.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Ye.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: pv(od(Nv), {
                    time: null === fv ? "" : me(pv, fv)
                  })
                }), (0, Ye.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Ye.jsx)("i", {
                    style: {
                      width: (Gv ? 100 * Nv.baf2ColP / gh.NOVA_FOCUS : 0) + "%"
                    }
                  }, av.current.n)
                }), (0, Ye.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Ye.jsxs)("span", {
                    title: dN(pv),
                    children: [(0, Ye.jsx)("b", {
                      children: Ad(mv.focus)
                    }), " ", pv(`${eN}colFocusPerS`)]
                  }), (0, Ye.jsxs)("span", {
                    className: fS()("Baf2ColDraw", {
                      Short: jv
                    }),
                    children: [(0, Ye.jsx)(DS.b, {
                      name: "bolt"
                    }), jv ? pv(`${eN}colDrawOf`, {
                      draw: Ad(Nv.baf2ColDraw),
                      want: Ad(Nv.baf2ColWant)
                    }) : pv(`${eN}colPowerPerS`, {
                      rate: Ad(mv.draw)
                    })]
                  }), null !== Ov && (0, Ye.jsx)("span", {
                    className: "Soft",
                    children: Ov
                  })]
                })]
              }), (0, Ye.jsx)("p", {
                className: fS()("Baf2ColState", CN(Nv)),
                children: NN(pv, Ed(Nv))
              }), null !== Yv && (0, Ye.jsx)("p", {
                className: "Baf2ColStateFix",
                children: pv(Yv)
              }), null === Yv && null !== iv && (0, Ye.jsx)("p", {
                className: "Baf2ColStateFix",
                children: pv(iv.key, {
                  item: he(pv, iv.item)
                })
              }), nv && (0, Ye.jsx)("p", {
                className: "Baf2ColStateFix",
                children: pv(nv.key, {
                  target: he(pv, nv.target),
                  amount: String(null !== (Pv = nv.Vp) && void 0 !== Pv ? Pv : 0)
                })
              }), (0, Ye.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Ye.jsx)(aN, {
                  item: Nh,
                  Vp: Nv.baf2ColSa,
                  need: gh.NOVA_SA,
                  cap: gh.SA_CAP
                }), (0, Ye.jsx)(aN, {
                  item: lh,
                  Vp: Nv.baf2ColGd,
                  need: gh.NOVA_GD,
                  cap: gh.GD_CAP
                }), (0, Ye.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Ye.jsx)(sN, {
                    item: "Nova Matter"
                  }), (0, Ye.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: pv(`${eN}colNovaHeld`, {
                      amount: String(Nv.baf2ColOut),
                      cap: String(gh.OUT_CAP)
                    })
                  }), cv && (0, Ye.jsx)(jg.j, {
                    className: "Baf2ColTake",
                    disabled: 0 === Nv.baf2ColOut,
                    onClick: () => {
                      dv.send(Qd(Nv, "take"))
                    },
                    children: pv(`${eN}colTake`)
                  })]
                })]
              }), cv && (0, Ye.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Fv,
                className: fS()("Baf2ColHold", {
                  On: Fv
                }),
                onClick: vv => {
                  vv.detail > 0 && vv.currentTarget.blur(), Wv(!Fv), dv.send(Qd(Nv, "hold " + (Fv ? 0 : 1)))
                },
                children: [(0, Ye.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Ye.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Ye.jsx)("b", {
                    children: pv(`${eN}colHold`)
                  }), (0, Ye.jsx)("span", {
                    children: pv(`${eN}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Ye.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Ye.jsx)(WN, {
                status: Nv,
                entry: lv
              }), (0, Ye.jsx)("ul", {
                className: "Baf2ColSlots",
                children: yd(Nv.baf2ColLasers, Nv.baf2ColSpots, Nv.baf2ColLive, mv.beamsOn, null !== (Sv = Nv.baf2ColGaps) && void 0 !== Sv ? Sv : 0).map((vv => (0, Ye.jsxs)("li", {
                  className: vv.tone,
                  children: [(0, Ye.jsx)("b", {
                    children: NN(pv, vv.title)
                  }), null !== vv.hint && (0, Ye.jsx)("span", {
                    children: NN(pv, vv.hint)
                  })]
                }, vv.dir)))
              }), (0, Ye.jsx)(wN, {
                status: Nv
              })]
            })]
          })]
        })
      })
    }
    const cN = "buildAFactory2Game:",
      GN = 36e5,
      mN = 864e5;

    function jN(vv, zv, Pv) {
      return Math.max(0, Math.ceil((vv + zv - Math.max(Pv, vv)) / 1e3))
    }

    function fN(vv) {
      return vv.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function FN(vv) {
      return "Homestead" === vv
    }

    function YN(vv) {
      return function(vv) {
        let zv = 0;
        for (const Pv of vv) {
          const vv = /^Island ([1-9]\d{0,5})$/.exec(Pv);
          vv && (zv = Math.max(zv, Number(vv[1])))
        }
        return `Island ${zv+1}`
      }(vv.map((vv => vv.baf2IslandName)))
    }

    function nN(vv, zv) {
      return function(vv) {
        return `${cN}islandsBlocked${vv[0].toUpperCase()}${vv.slice(1)}`
      }("degraded" === vv && 0 === zv ? "stuck" : vv)
    }

    function ON(vv) {
      return vv.filter((vv => {
        var zv;
        return !vv.baf2IslandActive && void 0 === vv.baf2IslandUnreadable && void 0 === (null === (zv = vv.baf2IslandCoop) || void 0 === zv ? void 0 : zv.baf2CoopState)
      })).length
    }

    function DN(vv) {
      return "coopMoving" === vv || "coopUnreachable" === vv
    }

    function KN(vv, zv) {
      const Pv = zv > 0;
      return {
        change: null === vv && !Pv,
        switch: (null === vv || "degraded" === vv || DN(vv)) && !Pv,
        rename: "loading" !== vv && "degraded" !== vv && "stuck" !== vv
      }
    }

    function VN(vv, zv) {
      return void 0 === vv || "corrupt" === vv && zv
    }
    const UN = xg;

    function RN(vv, zv, Pv) {
      if (null !== vv && void 0 !== vv && vv.untilGone) {
        var hv;
        return !("dismiss" === vv.untilGone && void 0 === (null === (hv = zv.baf2IslandCoop) || void 0 === hv ? void 0 : hv.baf2CoopState)) && Pv - vv.atMs < 32500
      }
      return void 0 !== vv && Pv - vv.atMs < UN && zv.baf2IslandName === vv.from
    }
    const xN = xg;

    function tN(vv) {
      return "core" === (null === vv || void 0 === vv ? void 0 : vv.kind) ? vv.core : "islands" === (null === vv || void 0 === vv ? void 0 : vv.kind) ? vv.backToCore : void 0
    }

    function qN(vv) {
      return `\0${vv}\0`
    }

    function IN(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const hv = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const ev of Object.keys(Pv)) hv[ev] = qN(ev);
      let Sv = Object.keys(hv).length > 0 ? vv(zv, hv) : vv(zv);
      for (const [ev, gv] of Object.entries(Pv)) Sv = Sv.split(qN(ev)).join(gv);
      return Sv
    }

    function QN(vv, zv) {
      return vv ? zv ? "enabled" : "disabled" : "hidden"
    }
    const ZN = {
      removed: `${cN}islandsCoopRemoved`,
      deleted: `${cN}islandsCoopDeleted`,
      notReady: `${cN}islandsCoopNotReady`,
      gone: `${cN}islandsCoopGone`
    };

    function AN(vv) {
      var zv;
      return "member" !== (null === (zv = vv.baf2IslandCoop) || void 0 === zv ? void 0 : zv.baf2CoopRole) && "newer" !== vv.baf2IslandUnreadable
    }

    function LN(vv, zv, Pv, hv, Sv, ev) {
      const gv = vv.baf2IslandActive,
        pv = vv.baf2IslandUnreadable,
        dv = vv.baf2IslandCoop,
        Nv = function(vv, zv, Pv) {
          return {
            switch: vv.switch && void 0 === zv,
            delete: vv.change && VN(zv, Pv)
          }
        }(zv, pv, hv),
        lv = gv && void 0 !== dv && void 0 === dv.baf2CoopState && "coopUnreachable" === ev,
        Tv = {
          switch: QN((!gv || lv) && void 0 === pv, lv || Nv.switch),
          switchLabel: lv ? "tryAgain" : "switch",
          rename: QN(!0, zv.rename),
          delete: QN(!gv, Nv.delete),
          deleteWaits: !gv && VN(pv, hv),
          people: QN(void 0 !== vv.baf2IslandInvitable || Sv && gv && void 0 === pv && void 0 === dv, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Wv = !gv && Nv.delete;
      if (void 0 === dv) return Pv ? {
        ...Tv,
        delete: QN(!gv, !1),
        deleteWaits: !1,
        note: Wv ? {
          key: `${cN}islandsCoopKeepOwn`
        } : null
      } : Tv;
      const wv = dv.baf2CoopState,
        av = dv.baf2CoopMembers.length > 1,
        sv = {
          ...Tv,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== wv && "member" === dv.baf2CoopRole) return {
        ...sv,
        dismiss: QN(!0, zv.rename),
        note: {
          key: ZN[wv],
          names: {
            owner: dv.baf2CoopOwner
          }
        }
      };
      if (void 0 !== wv) {
        let vv = {
          key: `${cN}islandsCoopOwnLost`
        };
        return Wv && av ? vv = {
          key: `${cN}islandsCoopDeleteMembers`
        } : Wv && Pv && (vv = {
          key: `${cN}islandsCoopKeepOwn`
        }), {
          ...sv,
          delete: QN(!gv, Nv.delete && !av && !Pv),
          deleteWaits: Tv.deleteWaits && !av && !Pv,
          note: vv
        }
      }
      if ("member" === dv.baf2CoopRole) return {
        ...Tv,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: QN(!0, gv ? zv.switch : zv.rename)
      };
      const Cv = dv.baf2CoopManageHere;
      let iv = null;
      var cv;
      Cv || gv ? Wv && av ? iv = {
        key: `${cN}islandsCoopDeleteMembers`
      } : Wv && Pv && (iv = {
        key: `${cN}islandsCoopKeepOwn`
      }) : iv = {
        key: null !== (cv = dv.baf2CoopLeft) && void 0 !== cv && cv.length ? `${cN}islandsCoopManageThereClaim` : `${cN}islandsCoopManageThere`
      };
      return {
        ...Tv,
        rename: QN(!0, zv.rename && Cv),
        delete: QN(!gv, Nv.delete && !av && !Pv),
        deleteWaits: Tv.deleteWaits && !av && !Pv,
        people: "enabled",
        peopleLabel: "players",
        unshare: QN(Cv && gv && !av, zv.change),
        remove: Cv,
        note: iv
      }
    }

    function HN(vv) {
      var zv;
      const Pv = vv.baf2IslandCoop;
      if ("owner" !== (null === Pv || void 0 === Pv ? void 0 : Pv.baf2CoopRole) || void 0 !== Pv.baf2CoopState || null === (zv = Pv.baf2CoopLeft) || void 0 === zv || !zv.length) return null;
      const hv = vv.baf2IslandActive && Pv.baf2CoopManageHere;
      return {
        left: Pv.baf2CoopLeft,
        claim: hv,
        goThere: !hv && Pv.baf2CoopManageHere
      }
    }

    function MN(vv) {
      return vv.baf2CoopMembers.length >= vv.baf2CoopMax
    }

    function yN(vv, zv, Pv) {
      return void 0 !== vv && zv < vv.answer && Pv - vv.atMs < UN
    }
    const BN = "buildAFactory2Game:";

    function JN(vv, zv) {
      return {
        onKeyDown: Pv => {
          Pv.stopPropagation(), Pv.nativeEvent.isComposing || 229 === Pv.nativeEvent.keyCode || ("Enter" === Pv.key ? (Pv.preventDefault(), vv()) : "Escape" === Pv.key && (Pv.preventDefault(), zv()))
        }
      }
    }

    function EN(vv) {
      return {
        onKeyDown: zv => {
          "Escape" !== zv.key || zv.nativeEvent.isComposing || (zv.preventDefault(), zv.stopPropagation(), vv())
        }
      }
    }

    function oN(vv) {
      vv.currentTarget.select()
    }

    function bN(vv, zv) {
      (0, hv.useEffect)((() => {
        var Pv;
        vv && (null === (Pv = zv.current) || void 0 === Pv || Pv.scrollIntoView({
          block: "nearest"
        }))
      }), [vv, zv])
    }

    function rN(vv) {
      const [zv, Pv] = (0, hv.useState)(null);
      return (0, hv.useEffect)((() => {
        const zv = document.querySelector(".UiRequests"),
          hv = vv.current;
        if (!zv || !hv || "undefined" === typeof ResizeObserver) return;
        const Sv = () => {
          const vv = zv.getBoundingClientRect(),
            Sv = hv.getBoundingClientRect(),
            ev = hv.parentElement,
            gv = ev && parseFloat(getComputedStyle(ev).paddingTop) || 0,
            pv = function(vv, zv, Pv, hv) {
              if (!vv || vv.height <= 0 || vv.right <= zv.left || vv.left >= zv.right) return null;
              const Sv = Math.max(hv, vv.bottom + 8);
              return {
                marginTop: Math.round(Sv - hv),
                maxHeight: Math.max(0, Math.floor(Pv - Sv - hv))
              }
            }(vv, Sv, window.innerHeight, gv);
          Pv((vv => (null === vv || void 0 === vv ? void 0 : vv.marginTop) === (null === pv || void 0 === pv ? void 0 : pv.marginTop) && (null === vv || void 0 === vv ? void 0 : vv.maxHeight) === (null === pv || void 0 === pv ? void 0 : pv.maxHeight) ? vv : pv))
        };
        Sv();
        const ev = new ResizeObserver(Sv);
        return ev.observe(zv), window.addEventListener("resize", Sv), () => {
          ev.disconnect(), window.removeEventListener("resize", Sv)
        }
      }), [vv]), zv
    }

    function kN() {
      (0, hv.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function XN(vv) {
      (0, hv.useEffect)((() => {
        var zv;
        null === (zv = vv.current) || void 0 === zv || zv.focus()
      }), [vv])
    }

    function uN(vv) {
      const [zv, Pv] = (0, hv.useState)(Date.now);
      return (0, hv.useEffect)((() => {
        const zv = window.setInterval((() => {
          Pv(Date.now())
        }), vv);
        return () => {
          window.clearInterval(zv)
        }
      }), [vv]), zv
    }

    function vl(vv) {
      let {
        tier: zv,
        t: Pv
      } = vv;
      const {
        kind: hv,
        short: Sv
      } = Cv(zv), ev = wv(zv, av), gv = Pv(`${BN}${ev.key}`, {
        ...ev.params,
        name: Pv(`${BN}${iv(zv).nameKey}`)
      });
      return (0, Ye.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Ye.jsx)("span", {
          className: fS()("Baf2IslandTierPip", {
            Stage: "tier" !== hv
          }),
          "aria-hidden": "true",
          children: Sv
        }), gv]
      })
    }

    function zl(vv) {
      let {
        note: zv,
        className: Pv,
        t: hv
      } = vv;
      return (0, Ye.jsx)("p", {
        className: fS()("Baf2IslandNote", Pv),
        children: IN(hv, zv.key, zv.names, zv.params)
      })
    }
    const Pl = "buildAFactory2Game:";

    function hl(vv) {
      let {
        message: zv,
        arrivedAtMs: Pv,
        close: Sv,
        leave: ev
      } = vv;
      const gv = Lg(),
        {
          t: pv
        } = (0, OS.x)(),
        dv = uN(1e3),
        Nv = (0, hv.useRef)(null);
      kN(), (0, hv.useEffect)((() => {
        var vv;
        null === (vv = Nv.current) || void 0 === vv || vv.focus()
      }), []);
      const lv = jN(Pv, zv.baf2TransferInMs, dv),
        Tv = Pv + zv.baf2TransferInMs - 1e3,
        [Wv, wv] = (0, hv.useState)(null);
      (0, hv.useEffect)((() => {
        const vv = window.setTimeout((() => {
          wv(Tv)
        }), Math.max(0, Tv - Date.now()));
        return () => {
          window.clearTimeout(vv)
        }
      }), [Tv]);
      const av = Wv === Tv || dv >= Tv,
        sv = zv.baf2TransferIsland,
        Cv = zv.baf2TransferOwner;
      return (0, Ye.jsx)(mg.c, {
        close: Sv,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Ye.jsxs)("section", {
          ref: Nv,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsxs)("div", {
              children: [(0, Ye.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === Cv ? IN(pv, `${Pl}islandsTransferOwn`, {
                  island: sv
                }) : IN(pv, `${Pl}islandsTransfer`, {
                  island: sv,
                  owner: Cv
                })
              }), (0, Ye.jsx)("p", {
                children: av ? pv(`${Pl}islandsTransferNow`) : pv(`${Pl}islandsTransferIn`, {
                  time: me(pv, lv)
                })
              })]
            }), (0, Ye.jsx)(jg.i, {
              ariaLabel: pv(`${Pl}islandsClose`),
              onClick: Sv
            })]
          }), !av && (0, Ye.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Ye.jsx)("p", {
              className: "Baf2TransferNote",
              children: pv(`${Pl}islandsTransferNote`)
            }), (0, Ye.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Ye.jsx)(jg.d, {
                onClick: () => {
                  gv.send("baf2coopstay"), ev()
                },
                children: pv(`${Pl}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var Sl = Pv(1439),
      el = Pv(1121),
      gl = Pv.n(el);
    const pl = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const dl = "buildAFactory2Game:",
      Nl = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function ll(vv, zv, Pv) {
      return void 0 === zv ? Pv : "string" === typeof zv ? zv : Array.isArray(zv) ? zv.map((zv => "string" === typeof zv ? zv : "translationKey" in zv ? vv(zv.translationKey) : "")).join("") : vv(zv.translationKey)
    }

    function Tl(vv) {
      const zv = {};
      for (const [Pv, hv] of Object.entries(null !== vv && void 0 !== vv ? vv : {})) zv[Pv] = hv < 0 ? Ge(hv) : hv.toLocaleString("en-US");
      return zv
    }

    function Wl(vv, zv) {
      const Pv = zv ? "touch" : "mouse";
      return {
        use: vv(`${dl}lookUse_${Pv}`),
        Use: vv(`${dl}lookUseStart_${Pv}`)
      }
    }
    const wl = (0, hv.memo)((function(vv) {
      let {
        item: zv
      } = vv;
      return (0, Ye.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Ye.jsx)(KS.b, {
          itemName: zv,
          amount: 0
        })
      })
    }));

    function al(vv) {
      let {
        label: zv,
        percent: Pv,
        progress: hv
      } = vv;
      return (0, Ye.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${zv}: ${hv}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Pv,
          children: (0, Ye.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${Pv}%`
            }
          })
        }), (0, Ye.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: hv
        })]
      })
    }

    function sl(vv) {
      let {
        chips: zv
      } = vv;
      return (0, Ye.jsx)("span", {
        className: "Baf2QuestChips",
        children: zv.map((vv => {
          let [zv, Pv, hv] = vv;
          const Sv = Pv >= hv;
          return (0, Ye.jsxs)("span", {
            className: fS()("Baf2QuestChip", {
              Met: Sv
            }),
            children: [(0, Ye.jsx)(wl, {
              item: zv
            }), (0, Ye.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Sv ? `\u2713${hv}` : `${Pv}/${hv}`
            })]
          }, zv)
        }))
      })
    }

    function Cl(vv, zv) {
      const {
        key: Pv,
        params: hv
      } = wv(zv, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return vv(`${dl}${Pv}`, {
        ...hv,
        name: vv(`${dl}${iv(zv).nameKey}`)
      })
    }

    function il(vv) {
      let {
        core: zv,
        t: Pv
      } = vv;
      const [hv, Sv] = zv, ev = Sv > 0 ? Math.floor(100 * hv / Sv) : 100;
      return (0, Ye.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": Pv(`${dl}questCoreLabel`, {
          have: String(hv),
          need: String(Sv)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": ev,
        children: [(0, Ye.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: Pv(`${dl}questCore`, {
            percent: String(ev)
          })
        }), (0, Ye.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Ye.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${ev}%`
            }
          })
        })]
      })
    }

    function cl(vv) {
      let {
        rows: zv,
        t: Pv
      } = vv;
      const hv = zv.filter((vv => vv.done)).length;
      return (0, Ye.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": Pv(`${dl}questStepsProgress`, {
          done: String(hv),
          total: String(zv.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": zv.length,
        "aria-valuenow": hv,
        children: zv.map((vv => (0, Ye.jsx)("span", {
          className: fS()("Baf2QuestSegment", {
            Done: vv.done,
            Current: vv.current
          })
        }, vv.id)))
      })
    }
    const Gl = (0, hv.memo)(jl, ml);

    function ml(vv, zv) {
      const Pv = Pv => vv.view.itemNames[Pv] === zv.view.itemNames[Pv];
      return vv.t === zv.t && vv.extra === zv.extra && (null === vv.row.item || Pv(vv.row.item)) && vv.row.madeFor.every(Pv) && vv.row.also.every(Pv) && gl()(vv.row, zv.row)
    }

    function jl(vv) {
      let {
        row: zv,
        view: Pv,
        t: hv,
        extra: Sv
      } = vv;
      const {
        isTouchScreen: ev
      } = (0, GS.i)(["isTouchScreen"]), gv = zv.item ? function(vv, zv, Pv) {
        return 1 !== Pv && pl.has(vv) ? nS(zv) : null
      }(zv.key, zv.item, zv.total) : null, pv = gv ? hv(gv) : zv.item ? ll(hv, Pv.itemNames[zv.item], zv.item) : "", dv = zv.also.map((vv => ll(hv, Pv.itemNames[vv], vv))), Nv = dv.join(", "), lv = function(vv, zv) {
        var Pv;
        return zv.length < 2 ? null !== (Pv = zv[0]) && void 0 !== Pv ? Pv : "" : vv(`${dl}listAnd`, {
          rest: zv.slice(0, -1).join(vv(`${dl}listComma`)),
          last: zv[zv.length - 1]
        })
      }(hv, [pv, ...dv]), Tv = hv(`${dl}${zv.key}`, {
        ...Wl(hv, ev),
        ...Tl(zv.params),
        item: pv,
        also: Nv,
        itemList: lv,
        total: String(zv.total)
      }), [Wv, ...wv] = Tv.split("\n"), av = zv.total > 1 && !zv.done && !zv.away;
      return (0, Ye.jsxs)("li", {
        className: fS()("Baf2QuestStep", {
          Done: zv.done,
          Current: zv.current,
          JustFinished: zv.justFinished,
          Away: zv.away
        }),
        children: [!zv.done && null !== zv.item && (0, Ye.jsx)(wl, {
          item: zv.item
        }), (zv.done || null === zv.item) && (0, Ye.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: zv.done ? "\u2713" : "\u25cb"
        }), (0, Ye.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Ye.jsx)("strong", {
            children: Wv
          }), wv.length > 0 && (0, Ye.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: wv.join(" ")
          }), !zv.done && zv.madeFor.length > 0 && (0, Ye.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: hv("buildAFactory2Game:questRowFor", {
              items: zv.madeFor.map((vv => ll(hv, Pv.itemNames[vv], vv))).join(" \u2192 ")
            })
          }), av && (0, Ye.jsx)(al, {
            label: Wv,
            percent: Math.round(100 * zv.amount / zv.total),
            progress: `${zv.amount.toLocaleString("en-US")}/${zv.total.toLocaleString("en-US")}`
          }), !zv.done && !zv.away && zv.chips && zv.chips.length > 0 && (0, Ye.jsx)(sl, {
            chips: zv.chips
          }), Sv]
        })]
      })
    }

    function fl(vv, zv) {
      let [Pv, hv] = zv;
      return vv(`${dl}${Pv}`, Tl(hv))
    }

    function Fl(vv) {
      let [zv, Pv] = vv;
      return zv + JSON.stringify(Pv)
    }

    function Yl(vv) {
      let {
        goal: zv,
        t: Pv
      } = vv;
      return zv ? (0, Ye.jsx)("span", {
        className: "Baf2BookGoal",
        children: Pv(`${dl}${zv}`)
      }) : null
    }

    function nl(vv) {
      let {
        view: zv,
        t: Pv
      } = vv;
      if (!zv.name) return null;
      const hv = MS(zv.rows);
      return (0, Ye.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: Pv(`${dl}currentQuest`)
        }), (0, Ye.jsx)("strong", {
          className: "Baf2BookTitle",
          children: fl(Pv, zv.name)
        }), (0, Ye.jsx)(Yl, {
          goal: zv.goal,
          t: Pv
        }), hv.length > 1 && (0, Ye.jsx)(cl, {
          rows: hv,
          t: Pv
        }), (0, Ye.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: zv.rows.map((vv => (0, Ye.jsx)(Gl, {
            row: vv,
            view: zv,
            t: Pv
          }, vv.id)))
        }), zv.reward && (0, Ye.jsxs)("span", {
          className: "Baf2BookReward",
          children: [Pv(`${dl}questReward`), (0, Ye.jsx)(wl, {
            item: zv.reward
          }), ll(Pv, zv.itemNames[zv.reward], zv.reward)]
        })]
      })
    }

    function Ol(vv) {
      let {
        quest: zv,
        upcoming: Pv,
        t: hv
      } = vv;
      return (0, Ye.jsxs)("li", {
        className: fS()("Baf2BookQuest", {
          Done: zv[3],
          Upcoming: Pv
        }),
        children: [(0, Ye.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: zv[3] ? "\u2713" : "\u25cb"
        }), (0, Ye.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Ye.jsx)("strong", {
            className: "Baf2BookTitle",
            children: fl(hv, zv)
          }), (0, Ye.jsx)(Yl, {
            goal: zv[2],
            t: hv
          })]
        })]
      })
    }

    function Dl(vv) {
      let {
        done: zv,
        total: Pv,
        t: hv
      } = vv;
      const Sv = Pv > 0 ? Math.round(100 * zv / Pv) : 0,
        ev = hv(`${dl}questBookChapterProgress`, {
          done: String(zv),
          total: String(Pv)
        });
      return (0, Ye.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": ev,
          "aria-valuemin": 0,
          "aria-valuemax": Pv,
          "aria-valuenow": zv,
          children: (0, Ye.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Sv}%`
            }
          })
        }), (0, Ye.jsx)("span", {
          className: "Baf2BookProgressText",
          children: ev
        })]
      })
    }

    function Kl(vv) {
      let {
        view: zv,
        tier: Pv,
        quests: hv,
        t: Sv
      } = vv;
      const ev = Pv === zv.tier,
        gv = (null !== hv && void 0 !== hv ? hv : []).filter((vv => !vv[4])),
        pv = (null !== hv && void 0 !== hv ? hv : []).filter((vv => vv[4])),
        dv = gv.filter((vv => vv[3])).length,
        Nv = ev && zv.name ? Fl(zv.name) : null,
        lv = gv.findIndex((vv => !vv[3] && Fl(vv) === Nv));
      return (0, Ye.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Ye.jsx)("h3", {
            children: Cl(Sv, Pv)
          }), gv.length > 0 && (0, Ye.jsx)(Dl, {
            done: dv,
            total: gv.length,
            t: Sv
          }), ev && zv.core && (0, Ye.jsx)(il, {
            core: zv.core,
            t: Sv
          })]
        }), (0, Ye.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === hv && ev && (0, Ye.jsx)(nl, {
            view: zv,
            t: Sv
          }), gv.map(((vv, Pv) => Pv === lv ? (0, Ye.jsx)(nl, {
            view: zv,
            t: Sv
          }, Fl(vv)) : (0, Ye.jsx)(Ol, {
            quest: vv,
            upcoming: !vv[3],
            t: Sv
          }, Fl(vv))))]
        }), ev && zv.side && (0, Ye.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Ye.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Sv(`${dl}questSide`)
          }), (0, Ye.jsx)("strong", {
            className: "Baf2BookTitle",
            children: fl(Sv, zv.side.name)
          }), (0, Ye.jsx)(Yl, {
            goal: zv.side.goal,
            t: Sv
          }), (0, Ye.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Ye.jsx)(Gl, {
              row: zv.side.row,
              view: zv,
              t: Sv
            })
          })]
        }), pv.length > 0 && (0, Ye.jsxs)(Ye.Fragment, {
          children: [(0, Ye.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Sv(`${dl}questBookSidesDone`)
          }), (0, Ye.jsx)("ol", {
            className: "Baf2BookQuests",
            children: pv.map((vv => (0, Ye.jsx)(Ol, {
              quest: vv,
              upcoming: !1,
              t: Sv
            }, Fl(vv))))
          })]
        })]
      })
    }

    function Vl(vv) {
      var zv, Pv, ev;
      let {
        store: gv,
        close: pv
      } = vv;
      const {
        t: dv
      } = (0, OS.x)(), Nv = (0, Sl.j)(qS, gv.get()), Tv = null !== (zv = Nv.tier) && void 0 !== zv ? zv : 1, [Wv, wv] = (0, hv.useState)(null), av = (null === Wv || void 0 === Wv ? void 0 : Wv.at) === Tv ? Wv.tier : Tv, iv = (0, hv.useRef)(null), cv = null !== Nv.chapters;
      (0, hv.useEffect)((() => {
        var vv;
        iv.current && (iv.current.scrollTop = 0);
        const zv = null === (vv = iv.current) || void 0 === vv ? void 0 : vv.querySelector(".Baf2BookQuest.Current");
        if (iv.current && zv) {
          const vv = zv.getBoundingClientRect().bottom - iv.current.getBoundingClientRect().bottom;
          vv > 0 && (iv.current.scrollTop += Math.min(vv, zv.getBoundingClientRect().top - iv.current.getBoundingClientRect().top))
        }
      }), [av, cv]);
      const Gv = null === (Pv = Nv.chapters) || void 0 === Pv ? void 0 : Pv.find((vv => {
        let [zv] = vv;
        return zv === av
      }));
      return (0, Ye.jsx)(mg.c, {
        close: pv,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ye.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: Nl,
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: dv(`${dl}questBookTitle`)
            }), (0, Ye.jsx)(jg.i, {
              onClick: pv
            })]
          }), (0, Ye.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": dv(`${dl}questBookChapters`),
            children: Sv.slice(0, lv()).map(((vv, zv) => {
              const Pv = zv + 1,
                {
                  kind: hv,
                  short: Sv
                } = Cv(Pv),
                ev = sv(Pv, Tv),
                gv = ev ? dv(`${dl}coreAtomicHidden`) : Cl(dv, Pv);
              return (0, Ye.jsx)("li", {
                children: (0, Ye.jsx)("button", {
                  type: "button",
                  className: fS()({
                    Stage: "tier" !== hv,
                    Atomic: "atomic" === hv,
                    Current: Pv === Tv,
                    Selected: Pv === av
                  }),
                  disabled: Pv > Tv,
                  "aria-pressed": Pv === av,
                  "aria-label": gv,
                  title: ev ? void 0 : gv,
                  onClick: () => {
                    wv({
                      tier: Pv,
                      at: Tv
                    })
                  },
                  children: ev ? "?" : Sv
                })
              }, vv.nameKey)
            }))
          }), (0, Ye.jsxs)("div", {
            ref: iv,
            className: "Baf2BookBody",
            children: [LS(Nv) && av === Tv && (0, Ye.jsx)("p", {
              className: "Baf2BookEmpty",
              children: dv(`${dl}questBookAllDone`)
            }), (0, Ye.jsx)(Kl, {
              view: Nv,
              tier: av,
              quests: null !== (ev = null === Gv || void 0 === Gv ? void 0 : Gv[1]) && void 0 !== ev ? ev : null,
              t: dv
            })]
          })]
        })
      })
    }
    const Ul = "buildAFactory2Game:";

    function Rl(vv) {
      let {
        tiers: zv,
        from: Pv,
        tier: hv,
        shown: Sv,
        HW: ev
      } = vv;
      const {
        t: gv
      } = (0, OS.x)(), pv = zv.map(((vv, zv) => {
        const pv = Pv + zv,
          {
            kind: dv,
            short: Nv
          } = Cv(pv),
          lv = sv(pv, hv);
        return (0, Ye.jsx)("li", {
          children: (0, Ye.jsx)("button", {
            type: "button",
            className: fS()({
              Stage: "tier" !== dv,
              Silhouette: lv,
              Reached: pv <= hv,
              Current: pv === hv,
              Next: pv === hv + 1,
              Selected: pv === Sv
            }),
            disabled: lv,
            "aria-pressed": pv === Sv,
            "aria-label": lv ? gv(`${Ul}coreAtomicHidden`) : void 0,
            title: lv ? void 0 : gv(`${Ul}${vv.nameKey}`),
            onClick: () => {
              ev(pv)
            },
            children: lv ? "?" : Nv
          })
        }, vv.nameKey)
      }));
      return (0, Ye.jsx)(Ye.Fragment, {
        children: pv
      })
    }

    function xl(vv) {
      let {
        id: zv,
        label: Pv,
        tiers: hv,
        from: Sv,
        ...ev
      } = vv;
      return (0, Ye.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Ye.jsx)("span", {
          id: zv,
          className: "Baf2CoreLadderLabel",
          children: Pv
        }), (0, Ye.jsx)("ol", {
          "aria-labelledby": zv,
          children: (0, Ye.jsx)(Rl, {
            ...ev,
            tiers: hv,
            from: Sv
          })
        })]
      })
    }

    function tl(vv) {
      const {
        t: zv
      } = (0, OS.x)(), Pv = Sv.findIndex((vv => void 0 !== vv.stage)), hv = Sv.findIndex((vv => void 0 !== vv.reactorTier)), ev = Pv < 0 ? Sv : Sv.slice(0, Pv), gv = Pv < 0 ? [] : Sv.slice(Pv, hv < 0 ? void 0 : hv), dv = hv < 0 || !pv() ? [] : Sv.slice(hv);
      return (0, Ye.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Ye.jsx)(xl, {
          ...vv,
          id: "baf2CoreTiersLabel",
          label: zv(`${Ul}coreTiersLabel`),
          tiers: ev,
          from: 1
        }), gv.length > 0 && (0, Ye.jsx)(xl, {
          ...vv,
          id: "baf2CoreStagesLabel",
          label: zv(`${Ul}coreStagesLabel`),
          tiers: gv,
          from: Pv + 1
        }), dv.length > 0 && (0, Ye.jsx)(xl, {
          ...vv,
          id: "baf2CoreAtomicLabel",
          label: zv(`${Ul}coreAtomicLabel`),
          tiers: dv,
          from: hv + 1
        })]
      })
    }
    const ql = "buildAFactory2Game:";

    function Il(vv) {
      let {
        item: zv,
        itemNames: Pv,
        children: hv
      } = vv;
      return (0, Ye.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Ye.jsx)(KS.b, {
            itemName: zv,
            amount: 0
          })
        }), (0, Ye.jsx)(VS.c, {
          text: Pv[zv]
        }), hv]
      })
    }

    function Ql(vv) {
      const zv = new Map;
      for (const {
          block: hv
        }
        of vv.newDeposits) {
        var Pv;
        zv.set(hv, (null !== (Pv = zv.get(hv)) && void 0 !== Pv ? Pv : 0) + 1)
      }
      return [...zv]
    }

    function Zl(vv) {
      let {
        value: zv,
        label: Pv,
        more: hv
      } = vv;
      return (0, Ye.jsxs)("li", {
        children: [(0, Ye.jsx)("strong", {
          children: zv
        }), (0, Ye.jsx)("span", {
          children: Pv
        }), hv > 0 && (0, Ye.jsxs)("em", {
          children: ["+", hv]
        })]
      })
    }

    function Al(vv) {
      let {
        items: zv,
        itemNames: Pv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)(), [ev, gv] = (0, hv.useState)(null), pv = null !== ev && zv.includes(ev) ? ev : null;
      return (0, Ye.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Ye.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Sv(`${ql}coreRewardUnlocks`)
        }), (0, Ye.jsx)("ul", {
          children: zv.map((vv => (0, Ye.jsx)("li", {
            children: (0, Ye.jsx)("button", {
              type: "button",
              className: fS()("Baf2PanelIcon", {
                Picked: vv === pv
              }),
              title: he(Sv, vv),
              "aria-label": he(Sv, vv),
              "aria-pressed": vv === pv,
              onClick: () => {
                gv(vv === pv ? null : vv)
              },
              children: (0, Ye.jsx)(KS.b, {
                itemName: vv,
                amount: 0
              })
            })
          }, vv)))
        }), (0, Ye.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== pv && (0, Ye.jsxs)(Ye.Fragment, {
            children: [(0, Ye.jsx)(VS.c, {
              text: Pv[pv]
            }), " \xb7 ", (0, Ye.jsx)(VS.c, {
              text: Pv[Vv(pv)]
            })]
          }), null === pv && Sv(`${ql}coreRecipeTap`)]
        })]
      })
    }

    function Ll(vv) {
      var zv, Pv;
      let {
        def: hv,
        tier: Sv,
        itemNames: ev
      } = vv;
      const {
        t: gv
      } = (0, OS.x)(), pv = Sv > 1 ? iv(Sv - 1) : void 0, dv = Math.round(2 * hv.islandRadius), Nv = pv ? Math.round(2 * pv.islandRadius) : dv, lv = Sv >= 3 ? jh(Sv) : null;
      return (0, Ye.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Ye.jsxs)("ul", {
          className: fS()("Baf2CoreStats", {
            Four: null !== lv
          }),
          children: [(0, Ye.jsx)(Zl, {
            value: `${dv}\xd7${dv}`,
            label: gv(`${ql}coreStatIsland`),
            more: dv - Nv
          }), (0, Ye.jsx)(Zl, {
            value: String(hv.machineAllowance),
            label: gv(`${ql}coreStatMachines`),
            more: hv.machineAllowance - (null !== (zv = null === pv || void 0 === pv ? void 0 : pv.machineAllowance) && void 0 !== zv ? zv : hv.machineAllowance)
          }), (0, Ye.jsx)(Zl, {
            value: String(hv.beltAllowance),
            label: gv(`${ql}coreStatBelts`),
            more: hv.beltAllowance - (null !== (Pv = null === pv || void 0 === pv ? void 0 : pv.beltAllowance) && void 0 !== Pv ? Pv : hv.beltAllowance)
          }), null !== lv && (0, Ye.jsx)(Zl, {
            value: String(lv),
            label: gv(`${ql}coreStatStorage`),
            more: lv - (pv ? jh(Sv - 1) : lv)
          })]
        }), hv.reward && (0, Ye.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Ye.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: gv(`${ql}coreRewardItem`)
          }), (0, Ye.jsx)(Il, {
            item: hv.reward,
            itemNames: ev
          })]
        }), hv.newDeposits.length > 0 && (0, Ye.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Ye.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: gv(hv.newDeposits.length > 1 ? `${ql}coreRewardDeposits` : `${ql}coreRewardDeposit`)
          }), Ql(hv).map((vv => {
            let [zv, Pv] = vv;
            return (0, Ye.jsx)(Il, {
              item: zv,
              itemNames: ev,
              children: Pv > 1 && ` \xd7${Pv}`
            }, zv)
          }))]
        }), hv.unlocks.length > 0 && (0, Ye.jsx)(Al, {
          items: hv.unlocks,
          itemNames: ev
        }), (0, Ye.jsx)(Hl, {
          tier: Sv
        })]
      })
    }

    function Hl(vv) {
      let {
        tier: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)(), hv = sS[zv];
      if (!hv) return null;
      const Sv = aS(zv, 0, 0).barrierMax !== aS(zv - 1, 0, 0).barrierMax;
      return (0, Ye.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Ye.jsx)(KS.b, {
            itemName: Sv ? dS.Chestplate : pS,
            amount: 0
          })
        }), Pv(`${ql}gearPerkLine`, {
          perk: Pv(`${ql}${hv}`)
        })]
      })
    }

    function Ml(vv, zv) {
      return null === vv ? zv : vv.value
    }

    function yl(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === vv || Pv - vv.atMs >= hv ? null : Sv(vv.value, zv) ? vv.armed ? null : vv : vv.armed ? vv : {
        ...vv,
        armed: !0
      }
    }

    function Bl(vv, zv) {
      const Pv = zv.filter((zv => {
        var Pv;
        return !1 !== (null === (Pv = vv.get(zv)) || void 0 === Pv ? void 0 : Pv.value)
      }));
      for (const [hv, Sv] of vv) Sv.value && !zv.includes(hv) && Pv.push(hv);
      return Pv
    }

    function Jl(vv, zv, Pv, Sv) {
      const [ev, gv] = (0, hv.useState)((() => new Map)), pv = () => {
        gv((zv => function(vv, zv, Pv, hv) {
          var Sv;
          let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            gv = null;
          for (const [pv, dv] of vv) {
            const Sv = yl(dv, zv(pv), Pv, hv, ev);
            Sv !== dv && (gv ??= new Map(vv), null === Sv ? gv.delete(pv) : gv.set(pv, Sv))
          }
          return null !== (Sv = gv) && void 0 !== Sv ? Sv : vv
        }(zv, vv, Date.now(), Pv, Sv)))
      };
      (0, hv.useEffect)((() => {
        pv()
      }), [zv, Pv]), (0, hv.useEffect)((() => {
        if (0 === ev.size) return;
        const vv = Math.min(...[...ev.values()].map((vv => vv.atMs))),
          zv = setTimeout(pv, Math.max(0, vv + Pv - Date.now()) + 1);
        return () => {
          clearTimeout(zv)
        }
      }), [ev, zv, Pv]);
      return [ev, (zv, Pv) => {
        gv((hv => {
          const ev = new Map(hv);
          return ev.set(zv, function(vv, zv, Pv) {
            return {
              value: vv,
              atMs: Pv,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(vv, zv)
            }
          }(Pv, vv(zv), Date.now(), Sv)), ev
        }))
      }]
    }
    const El = "buildAFactory2Game:";

    function ol(vv) {
      let {
        message: zv,
        itemNames: Pv
      } = vv;
      const Sv = Lg(),
        {
          t: ev
        } = (0, OS.x)(),
        [gv, pv] = (0, hv.useState)(!1),
        [dv, Nv] = function(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xg;
          const [Pv, hv] = Jl((zv => vv.includes(zv)), vv, zv, Object.is);
          return [Bl(Pv, vv), hv]
        }(zv.baf2CoreBankPaused),
        lv = new Set(dv),
        Tv = [...zv.baf2CoreBanked];
      for (const hv of lv) Tv.some((vv => {
        let [zv] = vv;
        return zv === hv
      })) || Tv.push([hv, 0]);
      return 0 === Tv.length ? null : (0, Ye.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Ye.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": gv,
          onClick: () => {
            pv(!gv)
          },
          children: [(0, Ye.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: ev(`${El}coreBankedLater`)
          }), (0, Ye.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Tv.map((vv => {
              let [zv, Pv] = vv;
              const hv = lv.has(zv);
              return (0, Ye.jsxs)("span", {
                className: fS()({
                  Paused: hv
                }),
                title: hv ? ev(`${El}coreBankPausedTag`) : void 0,
                children: [(0, Ye.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Ye.jsx)(KS.b, {
                    itemName: zv,
                    amount: 0
                  })
                }), Pv, hv && (0, Ye.jsx)(DS.b, {
                  name: "pause"
                })]
              }, zv)
            }))
          }), (0, Ye.jsx)(DS.b, {
            name: gv ? "angle-up" : "angle-down"
          })]
        }), gv && (0, Ye.jsxs)(Ye.Fragment, {
          children: [(0, Ye.jsx)("ul", {
            children: Tv.map((vv => {
              let [zv, hv] = vv;
              const gv = lv.has(zv);
              return (0, Ye.jsxs)("li", {
                children: [(0, Ye.jsxs)(Il, {
                  item: zv,
                  itemNames: Pv,
                  children: [(0, Ye.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: hv
                  }), gv && (0, Ye.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: ev(`${El}coreBankPausedTag`)
                  })]
                }), (0, Ye.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Ye.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === hv,
                    onClick: () => {
                      Sv.send(`baf2corewithdraw ${hv} ${zv}`)
                    },
                    children: ev(`${El}coreTake`)
                  }), (0, Ye.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Sv.send(`${mv} ${zv}`), Nv(zv, !gv)
                    },
                    children: ev(gv ? `${El}coreBankResume` : `${El}coreBankStop`)
                  })]
                })]
              }, zv)
            }))
          }), (0, Ye.jsx)("p", {
            className: "Baf2CoreHint",
            children: ev(`${El}coreBankNote`)
          })]
        })]
      })
    }
    const bl = "buildAFactory2Game:";

    function rl(vv) {
      const zv = Math.max(0, Math.floor(vv));
      return `${Math.floor(zv/60)}:${String(zv%60).padStart(2,"0")}`
    }

    function kl(vv) {
      let {
        item: zv
      } = vv;
      return (0, Ye.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Ye.jsx)(KS.b, {
          itemName: zv,
          amount: 0
        })
      })
    }

    function Xl() {
      return (0, Ye.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Ye.jsx)(DS.b, {
          name: "bolt"
        })
      })
    }

    function ul(vv) {
      let {
        charge: zv,
        hint: Pv,
        itemNames: hv
      } = vv;
      const Sv = Lg(),
        {
          t: ev
        } = (0, OS.x)(),
        [gv, pv, dv, Nv, lv, Tv, Wv] = zv,
        [wv, av] = function(vv) {
          var zv;
          let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xg,
            hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Sv, ev] = Jl((() => vv), vv, Pv, hv);
          return [Ml(null !== (zv = Sv.get("")) && void 0 !== zv ? zv : null, vv), vv => {
            ev("", vv)
          }]
        }(Wv),
        sv = wv === Wv ? Tv : !wv,
        Cv = Nv >= lv,
        iv = gv.find((vv => {
          let [, zv, Pv] = vv;
          return Pv < .9 * zv
        }));
      let cv = `${bl}coreChargeWaiting`,
        Gv = {};
      return Cv ? cv = `${bl}coreChargeDone` : wv ? cv = `${bl}coreChargeStopped` : sv && Pv ? (cv = `${bl}${Pv[0]}`, Gv = {
        item: he(ev, Pv[1])
      }) : sv && iv ? (cv = `${bl}coreChargeShort`, Gv = {
        item: he(ev, iv[0])
      }) : sv && pv > 0 && !dv ? cv = `${bl}coreChargePower` : sv && (cv = `${bl}coreChargeRunning`), (0, Ye.jsxs)("div", {
        className: fS()("Baf2CoreCharge", {
          Waiting: !sv && !Cv,
          Done: Cv
        }),
        children: [(0, Ye.jsxs)("h4", {
          children: [ev(`${bl}coreChargeTitle`), (0, Ye.jsx)("span", {
            children: ev(`${bl}coreChargeProgress`, {
              done: rl(Nv),
              need: rl(lv)
            })
          })]
        }), (0, Ye.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Ye.jsx)("div", {
            style: {
              width: 100 * Math.min(Nv, lv) / lv + "%"
            }
          })
        }), (0, Ye.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [gv.map((vv => {
            var zv;
            let [Pv, Sv, gv] = vv;
            const pv = gv >= .9 * Sv;
            return (0, Ye.jsxs)("li", {
              className: fS()({
                Done: pv,
                Short: sv && !pv
              }),
              children: [(0, Ye.jsx)(kl, {
                item: Pv
              }), (0, Ye.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Ye.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Ye.jsx)(VS.c, {
                    text: null !== (zv = hv[Pv]) && void 0 !== zv ? zv : Pv
                  }), (0, Ye.jsx)("span", {
                    children: ev(`${bl}coreChargeItem`, {
                      now: String(gv),
                      need: String(Sv)
                    })
                  })]
                }), (0, Ye.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Ye.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*gv/Sv)}%`
                    }
                  })
                })]
              })]
            }, Pv)
          })), pv > 0 && (0, Ye.jsxs)("li", {
            className: fS()("Baf2CoreChargePower", {
              Short: sv && !dv
            }),
            children: [(0, Ye.jsx)(Xl, {}), (0, Ye.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Ye.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Ye.jsx)("span", {
                  children: ev(`${bl}coreChargePowerRow`, {
                    power: kv(pv)
                  })
                })
              })
            })]
          })]
        }), (0, Ye.jsx)("p", {
          className: "Baf2CoreHint",
          children: ev(cv, Gv)
        }), !Cv && (sv || wv) && (0, Ye.jsx)("button", {
          type: "button",
          className: fS()("Baf2CoreChargeToggle", {
            Stopped: wv
          }),
          onClick: () => {
            Sv.send(fv), av(!wv)
          },
          children: ev(wv ? `${bl}coreChargeRestart` : `${bl}coreChargeStop`)
        })]
      })
    }

    function vT(vv) {
      let {
        charge: zv,
        reached: Pv,
        itemNames: hv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)();
      return (0, Ye.jsxs)("div", {
        className: fS()("Baf2CoreCharge", {
          Done: Pv
        }),
        children: [(0, Ye.jsxs)("h4", {
          children: [Sv(`${bl}coreChargeTitle`), (0, Ye.jsx)("span", {
            children: Sv(`${bl}coreChargeSpecTime`, {
              time: rl(zv.seconds)
            })
          })]
        }), (0, Ye.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [zv.items.map((vv => {
            var zv;
            let {
              item: ev,
              amount: gv
            } = vv;
            return (0, Ye.jsxs)("li", {
              className: fS()({
                Done: Pv
              }),
              children: [(0, Ye.jsx)(kl, {
                item: ev
              }), (0, Ye.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Ye.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Ye.jsx)(VS.c, {
                    text: null !== (zv = hv[ev]) && void 0 !== zv ? zv : ev
                  }), (0, Ye.jsx)("span", {
                    children: Sv(`${bl}coreChargeSpecItem`, {
                      need: String(gv)
                    })
                  })]
                })
              })]
            }, ev)
          })), zv.powerPerS > 0 && (0, Ye.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Ye.jsx)(Xl, {}), (0, Ye.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Ye.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Ye.jsx)("span", {
                  children: Sv(`${bl}coreChargePowerRow`, {
                    power: kv(zv.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const zT = "buildAFactory2Game:";

    function PT(vv) {
      let {
        def: zv,
        reached: Pv,
        banked: hv,
        itemNames: Sv
      } = vv;
      const {
        t: ev
      } = (0, OS.x)();
      return (0, Ye.jsx)("ul", {
        className: "Baf2CoreCost",
        children: zv.cost.map((vv => {
          let {
            item: zv,
            amount: gv
          } = vv;
          const pv = Pv ? 0 : hv(zv);
          return (0, Ye.jsx)("li", {
            children: (0, Ye.jsx)(Il, {
              item: zv,
              itemNames: Sv,
              children: (0, Ye.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: pv > 0 ? ev(`${zT}coreBankedFor`, {
                  amount: String(pv),
                  total: String(gv)
                }) : `\xd7${gv}`
              })
            })
          }, zv)
        }))
      })
    }

    function hT(vv, zv) {
      if (zv >= lv()) return vv(`${zT}coreMaxTier`);
      const Pv = Nv[zv + 1];
      return Pv && !Pv.startsWith("upgradeCore") ? vv(`${zT}coreGateQuest`, {
        quest: vv(`${zT}quest_${Pv}`)
      }) : vv(`${zT}coreGateClosed`)
    }

    function ST() {
      const {
        t: vv
      } = (0, OS.x)(), zv = Lg(), Pv = (0, hv.useRef)(null), Sv = (0, hv.useRef)(Date.now());
      return bN(!0, Pv), (0, Ye.jsx)("div", {
        ref: Pv,
        className: "Baf2CoreGrow",
        children: (0, Ye.jsx)(jg.j, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Sv.current >= 600 && zv.send(Gv)
          },
          children: vv(`${zT}coreGrow`)
        })
      })
    }

    function eT(vv) {
      let {
        message: zv,
        itemNames: Pv,
        next: hv
      } = vv;
      const Sv = Lg(),
        {
          t: ev
        } = (0, OS.x)(),
        gv = zv.baf2CoreTier,
        pv = zv.baf2CoreReady,
        dv = zv.baf2CoreNeeds.filter((vv => {
          let [, zv, Pv, hv] = vv;
          return hv > 0 && zv < Pv
        })),
        Nv = zv.baf2CoreNeeds.every((vv => {
          let [, zv, Pv] = vv;
          return zv >= Pv
        })),
        lv = zv.baf2CoreKeep;
      return (0, Ye.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [pv && (0, Ye.jsx)(ST, {}), (0, Ye.jsx)("h3", {
            children: ev(`${zT}coreBring`)
          }), (0, Ye.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: zv.baf2CoreNeeds.map((vv => {
              let [zv, hv, gv, pv] = vv;
              return (0, Ye.jsxs)("li", {
                className: fS()({
                  Done: hv >= gv
                }),
                children: [(0, Ye.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Ye.jsx)(KS.b, {
                    itemName: zv,
                    amount: 0
                  })
                }), (0, Ye.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Ye.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Ye.jsx)(VS.c, {
                      text: Pv[zv]
                    }), (0, Ye.jsxs)("span", {
                      children: [hv, "/", gv]
                    })]
                  }), (0, Ye.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Ye.jsx)("div", {
                      style: {
                        width: 100 * hv / gv + "%"
                      }
                    }), pv > 0 && (0, Ye.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * pv / gv + "%"
                      }
                    })]
                  })]
                }), pv > 0 && hv < gv && (0, Ye.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Sv.send(`${jv} ${zv}`)
                  },
                  children: ev(`${zT}coreDeposit`, {
                    amount: String(pv)
                  })
                })]
              }, zv)
            }))
          }), zv.baf2CoreCharge && (0, Ye.jsx)(ul, {
            charge: zv.baf2CoreCharge,
            hint: zv.baf2CoreChargeHint,
            itemNames: Pv
          }), !pv && dv.length > 1 && (0, Ye.jsx)(jg.j, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Sv.send(Gv)
            },
            children: ev(`${zT}coreHandOver`)
          }), !pv && void 0 !== lv && (0, Ye.jsx)("p", {
            className: "Baf2CoreHint",
            children: ev(`${zT}coreKeepRest`, {
              item: he(ev, lv)
            })
          }), !pv && !Nv && 0 === dv.length && void 0 === lv && (0, Ye.jsx)("p", {
            className: "Baf2CoreHint",
            children: ev(`${zT}coreNothingHeld`)
          }), (0, Ye.jsx)(ol, {
            message: zv,
            itemNames: Pv
          })]
        }), (0, Ye.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ye.jsx)("h3", {
            children: ev(`${zT}coreRewards`)
          }), (0, Ye.jsx)(Ll, {
            def: hv,
            tier: gv + 1,
            itemNames: Pv
          })]
        })]
      })
    }

    function gT(vv) {
      let {
        message: zv,
        itemNames: Pv,
        shown: hv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)(), ev = zv.baf2CoreTier, gv = iv(hv), pv = hv <= ev, dv = new Map(zv.baf2CoreBanked), Nv = !cv(ev, Fv(zv)) && hv === ev;
      return (0, Ye.jsxs)("div", {
        className: fS()("Baf2CoreBody", {
          Locked: !pv
        }),
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ye.jsx)("h3", {
            children: Sv(pv ? `${zT}coreItTook` : `${zT}coreItNeeds`)
          }), 0 === gv.cost.length && (0, Ye.jsx)("p", {
            className: "Baf2CoreHint",
            children: Sv(`${zT}coreTierStart`)
          }), gv.cost.length > 0 && (0, Ye.jsx)(PT, {
            def: gv,
            reached: pv,
            banked: vv => {
              var zv;
              return function(vv, zv, Pv, hv) {
                let Sv = vv;
                for (let gv = zv + 2; gv <= Pv; gv++) {
                  var ev;
                  const vv = iv(gv).cost.find((vv => vv.item === hv)),
                    zv = Math.min(Sv, null !== (ev = null === vv || void 0 === vv ? void 0 : vv.amount) && void 0 !== ev ? ev : 0);
                  if (gv === Pv) return zv;
                  Sv -= zv
                }
                return 0
              }(null !== (zv = dv.get(vv)) && void 0 !== zv ? zv : 0, ev, hv, vv)
            },
            itemNames: Pv
          }), gv.charge && (0, Ye.jsx)(vT, {
            charge: gv.charge,
            reached: pv,
            itemNames: Pv
          }), Nv && (0, Ye.jsxs)(Ye.Fragment, {
            children: [(0, Ye.jsx)("p", {
              className: "Baf2CoreHint",
              children: hT(Sv, ev)
            }), (0, Ye.jsx)(ol, {
              message: zv,
              itemNames: Pv
            })]
          })]
        }), (0, Ye.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ye.jsx)("h3", {
            children: Sv(pv ? `${zT}coreGave` : `${zT}coreLockedRewards`)
          }), (0, Ye.jsx)(Ll, {
            def: gv,
            tier: hv,
            itemNames: Pv
          })]
        })]
      })
    }

    function pT(vv, zv) {
      const {
        key: Pv,
        params: hv
      } = wv(zv - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return vv(`${zT}${Pv}`, hv)
    }
    const dT = "buildAFactory2Game:",
      NT = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      lT = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function TT(vv) {
      let {
        view: zv,
        close: Pv,
        askIslands: Sv
      } = vv;
      const {
        t: ev
      } = (0, OS.x)(), [gv, pv] = (0, hv.useState)(!1);
      (0, hv.useEffect)((() => {
        if (!gv) return;
        const vv = window.setTimeout((() => {
          pv(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(vv)
        }
      }), [gv]);
      const {
        message: dv,
        itemNames: Nv
      } = zv, lv = dv.baf2CoreTier, Tv = iv(lv), Wv = cv(lv, Fv(dv)), [sv, Cv] = dv.baf2CoreMachines, [Gv, mv] = dv.baf2CoreBelts, jv = dv.baf2CoreStorage, fv = dv.baf2CoreReady, [Yv, nv] = (0, hv.useState)(null), Ov = (null === Yv || void 0 === Yv ? void 0 : Yv.at) === lv && Yv.ready === fv ? Yv.tier : Wv ? lv + 1 : lv;
      let Dv = "coreTierLocked";
      Ov <= lv ? Dv = "coreTierReached" : Ov === lv + 1 && (Dv = "coreTierNext");
      const Kv = ev(`${dT}${iv(Ov).nameKey}`),
        Vv = Ov === lv + 1 ? Wv : null,
        Uv = wv(Ov, {
          tier: Dv,
          stage: NT[Dv],
          atomic: lT[Dv]
        }),
        Rv = ev(`${dT}${Uv.key}`, {
          ...Uv.params,
          name: Kv
        }),
        xv = wv(lv, av),
        tv = ev(`${dT}${xv.key}`, {
          ...xv.params,
          name: ev(`${dT}${Tv.nameKey}`)
        });
      return (0, Ye.jsx)(mg.c, {
        close: Pv,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Ye.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsxs)("div", {
              children: [(0, Ye.jsx)("h2", {
                id: "baf2CoreTitle",
                children: ev(`${dT}coreTitle`)
              }), void 0 !== dv.baf2CoreIslandName && (0, Ye.jsx)("p", {
                className: "Baf2CoreIsland",
                children: dv.baf2CoreIslandName
              }), (0, Ye.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Ye.jsx)("span", {
                  children: tv
                }), (0, Ye.jsx)("span", {
                  className: fS()({
                    Full: sv >= Cv
                  }),
                  children: ev(`${dT}coreMachineCount`, {
                    amount: String(sv),
                    total: String(Cv)
                  })
                }), (0, Ye.jsx)("span", {
                  className: fS()({
                    Full: Gv >= mv
                  }),
                  children: ev(`${dT}coreBeltCount`, {
                    amount: String(Gv),
                    total: String(mv)
                  })
                }), void 0 !== jv && (0, Ye.jsx)("span", {
                  className: fS()({
                    Full: jv[0] >= jv[1]
                  }),
                  children: ev(`${dT}coreStorageCount`, {
                    amount: String(jv[0]),
                    total: String(jv[1])
                  })
                })]
              })]
            }), (0, Ye.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [dv.baf2CoreIslands && (0, Ye.jsx)(jg.d, {
                className: "Baf2CoreIslandsButton",
                disabled: gv,
                onClick: () => {
                  pv(!0), Sv()
                },
                children: ev(`${dT}islandsOpenButton`)
              }), (0, Ye.jsx)(jg.i, {
                onClick: Pv
              })]
            })]
          }), (0, Ye.jsx)(tl, {
            tier: lv,
            shown: Ov,
            HW: vv => {
              nv({
                tier: vv,
                at: lv,
                ready: fv
              })
            }
          }), (0, Ye.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Rv, Ov > lv + 1 && (0, Ye.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: pT(ev, Ov)
            })]
          }), 6 === Ov && Ov > lv && (0, Ye.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: ev(`${dT}coreStagesNote`)
          }), 11 === Ov && Ov > lv && (0, Ye.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: ev(`${dT}coreAtomicNote`)
          }), Vv && (0, Ye.jsx)(eT, {
            message: dv,
            itemNames: Nv,
            next: Vv
          }), !Vv && (0, Ye.jsx)(gT, {
            message: dv,
            itemNames: Nv,
            shown: Ov
          })]
        })
      })
    }
    const WT = {
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
    const wT = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: pe,
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

    function aT(vv) {
      return vv.baf2DropCometOreOnly ? "dropCometOre" : vv.baf2DropCometIsotope ? "seed" === vv.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function sT(vv) {
      let {
        message: zv,
        quests: Pv,
        close: Sv,
        leave: ev
      } = vv;
      const gv = Lg(),
        {
          t: pv
        } = (0, OS.x)(),
        dv = (0, Sl.j)(qS, Pv.get()),
        Nv = function(vv) {
          var zv;
          if (!xv(vv.tutorial)) return null;
          const Pv = vv.rows.find((vv => vv.current)),
            hv = Pv ? WT[Pv.key] : void 0;
          return null !== (zv = null !== hv && void 0 !== hv ? hv : vv.side ? WT[vv.side.row.key] : void 0) && void 0 !== zv ? zv : null
        }(dv),
        lv = null === dv.tier || le(dv.tier),
        Tv = lv ? wT : wT.filter((vv => {
          let {
            item: zv
          } = vv;
          return zv !== pe
        })),
        [Wv, wv] = (0, hv.useState)(null),
        av = null !== Wv && void 0 !== Wv ? Wv : !zv.baf2DropFoundSalvage && lv,
        sv = zv.baf2DropRuinDistance,
        Cv = zv.baf2DropComet,
        iv = zv.baf2DropOldWorks,
        cv = zv.baf2DropGrove,
        Gv = function(vv) {
          return 2 + Number(void 0 !== vv.baf2DropComet) + Number(!!vv.baf2DropOwedComet || void 0 !== vv.baf2DropOwedWaitMinutes) + Number(void 0 !== vv.baf2DropDigDistance) + Number(void 0 !== vv.baf2DropOldWorks) + Number(void 0 !== vv.baf2DropGrove)
        }(zv),
        mv = vv => {
          gv.send(function(vv) {
            return `baf2drop ${vv}`
          }(vv)), ev()
        };
      let jv = pv("buildAFactory2Game:dropRuinNone");
      if (null !== sv) {
        let vv = zv.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        zv.baf2DropRuinOldWorks && (vv = "dropRuinOldWorks");
        const Pv = void 0 === zv.baf2DropRuinCluster ? pv("buildAFactory2Game:dropRuinOpen") : pv("buildAFactory2Game:dropRuinCluster", {
          count: String(zv.baf2DropRuinCluster)
        });
        jv = `${pv(`buildAFactory2Game:${vv}`,{distance:String(sv)})} ${Pv}`
      }
      let fv = pv("buildAFactory2Game:dropBelowDescription");
      void 0 !== zv.baf2DropBelowLook && (fv = pv("buildAFactory2Game:dropBelowLook", {
        look: pv(zv.baf2DropBelowLook)
      }));
      const Fv = "buildAFactory2Game:wildsRegion_survivorGrove" === zv.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        Yv = me(pv, 60 * function(vv) {
          const [zv, Pv] = (0, hv.useState)((() => Date.now())), [Sv, ev] = (0, hv.useState)(zv);
          return (0, hv.useEffect)((() => {
            const vv = Date.now();
            Pv(vv), ev(vv)
          }), [vv]), (0, hv.useEffect)((() => {
            const vv = window.setInterval((() => {
              ev(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(vv)
            }
          }), []), Math.max(1, vv.baf2DropRenewMinutes - Math.floor((Sv - zv) / 6e4))
        }(zv)),
        nv = function(vv, zv, Pv) {
          return "ruin" === vv && !Pv || "owed" === vv && !zv.baf2DropOwedComet ? null : vv
        }(Nv, zv, null !== sv),
        Ov = function(vv) {
          for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
          return fS()("Baf2DropTile", ...Pv, {
            Wanted: nv === vv
          })
        };
      return (0, Ye.jsx)(mg.c, {
        close: Sv,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ye.jsxs)("section", {
          className: fS()("Baf2Panel Baf2DropMap", {
            Many: Gv >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsxs)("div", {
              children: [(0, Ye.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: pv("buildAFactory2Game:dropMapTitle")
              }), (0, Ye.jsx)("p", {
                children: pv("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Ye.jsx)(jg.i, {
              onClick: Sv
            })]
          }), (0, Ye.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== Cv && (0, Ye.jsxs)(jg.p, {
              className: Ov("comet", "Baf2DropComet"),
              onClick: () => {
                mv("comet")
              },
              children: [(0, Ye.jsx)("strong", {
                children: pv("buildAFactory2Game:dropComet")
              }), (0, Ye.jsx)("span", {
                children: pv(`buildAFactory2Game:${aT(zv)}`, {
                  distance: String(Cv)
                })
              })]
            }), zv.baf2DropOwedComet && (0, Ye.jsxs)(jg.p, {
              className: Ov("owed", "Baf2DropComet"),
              onClick: () => {
                mv("owed")
              },
              children: [(0, Ye.jsx)("strong", {
                children: pv("buildAFactory2Game:dropOwedComet")
              }), (0, Ye.jsx)("span", {
                children: zv.baf2DropOwedIsotope ? pv("buildAFactory2Game:dropOwedIsotopeDescription") : pv("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== zv.baf2DropOwedWaitMinutes && (0, Ye.jsxs)(jg.p, {
              className: Ov("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Ye.jsx)("strong", {
                children: pv("buildAFactory2Game:dropOwedComet")
              }), (0, Ye.jsx)("span", {
                children: pv("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(zv.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Ye.jsxs)(jg.d, {
              className: Ov("below"),
              onClick: () => {
                mv("below")
              },
              children: [(0, Ye.jsx)("strong", {
                children: pv("buildAFactory2Game:dropBelow")
              }), (0, Ye.jsx)("span", {
                children: fv
              })]
            }), void 0 !== zv.baf2DropDigDistance && (0, Ye.jsxs)(jg.l, {
              className: Ov("dig"),
              onClick: () => {
                mv("dig")
              },
              children: [(0, Ye.jsx)("strong", {
                children: pv("buildAFactory2Game:dropDig")
              }), (0, Ye.jsx)("span", {
                children: pv("buildAFactory2Game:dropDigDescription", {
                  distance: String(zv.baf2DropDigDistance),
                  y: Ge(zv.baf2DropDigY)
                })
              })]
            }), void 0 !== cv && (0, Ye.jsxs)(jg.l, {
              className: Ov("grove", "Baf2DropGrove"),
              onClick: () => {
                mv("grove")
              },
              children: [(0, Ye.jsx)("strong", {
                children: pv("buildAFactory2Game:dropGrove")
              }), (0, Ye.jsx)("span", {
                children: pv(`buildAFactory2Game:${Fv}`, {
                  distance: String(cv)
                })
              })]
            }), (0, Ye.jsxs)(jg.j, {
              className: Ov("ruin"),
              disabled: null === sv,
              onClick: () => {
                mv("ruin")
              },
              children: [(0, Ye.jsx)("strong", {
                children: pv("buildAFactory2Game:dropRuin")
              }), (0, Ye.jsx)("span", {
                children: jv
              })]
            }), void 0 !== iv && (0, Ye.jsxs)(jg.A, {
              className: Ov("works"),
              onClick: () => {
                mv("works")
              },
              children: [(0, Ye.jsx)("strong", {
                children: pv("buildAFactory2Game:dropOldWorks")
              }), (0, Ye.jsx)("span", {
                children: pv("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(iv)
                })
              })]
            })]
          }), (0, Ye.jsx)("p", {
            className: "Baf2DropRenew",
            children: pv("buildAFactory2Game:dropRenew", {
              time: Yv
            })
          }), (0, Ye.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: av,
            onToggle: vv => {
              vv.currentTarget.open !== av && wv(vv.currentTarget.open)
            },
            children: [(0, Ye.jsx)("summary", {
              children: pv("buildAFactory2Game:dropSalvageWhat")
            }), (0, Ye.jsx)("p", {
              children: pv("buildAFactory2Game:dropSalvageIntro")
            }), (0, Ye.jsx)("ul", {
              children: Tv.map((vv => {
                let {
                  item: zv,
                  nameKey: Pv,
                  useKey: hv,
                  params: Sv
                } = vv;
                return (0, Ye.jsxs)("li", {
                  children: [(0, Ye.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Ye.jsx)(KS.b, {
                      itemName: zv,
                      amount: 0
                    })
                  }), (0, Ye.jsxs)("span", {
                    children: [(0, Ye.jsx)("strong", {
                      children: pv(Pv)
                    }), ": ", pv(hv, Sv)]
                  })]
                }, zv)
              }))
            })]
          })]
        })
      })
    }
    const CT = "buildAFactory2Game:";

    function iT(vv, zv) {
      return vv.sendIslandEdit(`baf2coopleave ${zv.baf2IslandId}`)
    }

    function cT(vv) {
      let {
        card: zv,
        canRename: Pv,
        done: Sv,
        t: ev
      } = vv;
      const gv = Lg(),
        [pv, dv] = (0, hv.useState)(zv.baf2IslandName),
        Nv = fN(pv),
        lv = "" === Nv || FN(Nv),
        Tv = () => {
          !lv && Pv && (Nv !== zv.baf2IslandName ? Sv(gv.sendIslandEdit(`baf2islandrename ${zv.baf2IslandId} ${Nv}`)) : Sv(null))
        },
        Wv = () => {
          Sv(null)
        };
      return (0, Ye.jsxs)("div", {
        className: "Baf2IslandForm",
        ...EN(Wv),
        children: [(0, Ye.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [ev(`${CT}islandsRenameLabel`), (0, Ye.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: pv,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: oN,
            onChange: vv => {
              dv(vv.target.value)
            },
            ...JN(Tv, Wv)
          })]
        }), "" === Nv && (0, Ye.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: ev(`${CT}islandsRenameEmpty`)
        }), FN(Nv) && (0, Ye.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: ev(`${CT}islandsNameReserved`)
        }), (0, Ye.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Ye.jsx)(jg.l, {
            disabled: lv || !Pv,
            onClick: Tv,
            children: ev(`${CT}islandsRenameSave`)
          }), (0, Ye.jsx)(jg.d, {
            onClick: Wv,
            children: ev(`${CT}islandsCancel`)
          })]
        })]
      })
    }

    function GT(vv) {
      let {
        card: zv,
        canDelete: Pv,
        done: Sv,
        t: ev
      } = vv;
      const gv = Lg(),
        [pv, dv] = (0, hv.useState)(""),
        Nv = function(vv, zv) {
          return fN(vv).toLowerCase() === fN(zv).toLowerCase()
        }(pv, zv.baf2IslandName),
        lv = () => {
          Nv && Pv && Sv(gv.sendIslandEdit(`baf2islanddelete ${zv.baf2IslandId}`))
        },
        Tv = () => {
          Sv(null)
        },
        Wv = qN("name"),
        [wv, av = ""] = ev(`${CT}islandsDeleteConfirm`, {
          name: Wv
        }).split(Wv);
      return (0, Ye.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...EN(Tv),
        children: [(0, Ye.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Ye.jsxs)("span", {
            children: [wv, (0, Ye.jsx)("strong", {
              children: zv.baf2IslandName
            }), av]
          }), (0, Ye.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: pv,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: oN,
            onChange: vv => {
              dv(vv.target.value)
            },
            ...JN(lv, Tv)
          })]
        }), HN(zv) && (0, Ye.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ev(`${CT}islandsDeleteLeftBack`)
        }), (0, Ye.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Ye.jsx)(jg.A, {
            disabled: !Nv || !Pv,
            onClick: lv,
            children: ev(`${CT}islandsDeleteForGood`)
          }), (0, Ye.jsx)(jg.d, {
            onClick: Tv,
            children: ev(`${CT}islandsCancel`)
          })]
        })]
      })
    }

    function mT(vv) {
      let {
        members: zv,
        t: Pv
      } = vv;
      const hv = zv.length;
      return (0, Ye.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Ye.jsxs)("span", {
          children: [1 === hv ? Pv(`${CT}islandsPlayersOne`) : Pv(`${CT}islandsPlayers`, {
            count: String(hv)
          }), " "]
        }), zv.map(((vv, zv) => (0, Ye.jsxs)("span", {
          className: fS()("Baf2IslandMember", {
            Here: vv.baf2MemberHere
          }),
          title: vv.baf2MemberHere ? Pv(`${CT}islandsPlayerHere`) : void 0,
          children: [vv.baf2MemberName, zv < hv - 1 ? ", " : ""]
        }, vv.baf2MemberKey)))]
      })
    }

    function jT(vv) {
      let {
        card: zv,
        answered: Pv,
        nowMs: Sv,
        t: ev
      } = vv;
      const gv = Lg(),
        [pv, dv] = (0, hv.useState)(new Map),
        Nv = HN(zv);
      if (!Nv) return null;
      return (0, Ye.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Ye.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: ev(`${CT}islandsLeftTitle`)
        }), (0, Ye.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Nv.left.map((vv => {
            const hv = vv.baf2LeftKey,
              lv = yN(pv.get(hv), Pv, Sv),
              Tv = function(vv) {
                return 1 === vv ? [`${cN}islandsLeftItemsOne`] : [`${cN}islandsLeftItems`, {
                  count: String(vv)
                }]
              }(vv.baf2LeftItems);
            return (0, Ye.jsx)("li", {
              className: fS()("Baf2IslandPerson", {
                Pending: lv
              }),
              children: (0, Ye.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Ye.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: vv.baf2LeftName
                }), (0, Ye.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: ev(Tv[0], Tv[1])
                }), Nv.claim && (0, Ye.jsx)(jg.l, {
                  className: "Baf2IslandPersonButton",
                  disabled: lv,
                  onClick: () => {
                    (vv => {
                      const Pv = gv.sendIslandEdit(`baf2coopclaim ${zv.baf2IslandId} ${vv}`);
                      dv((zv => new Map(zv).set(vv, {
                        atMs: Date.now(),
                        answer: Pv
                      })))
                    })(hv)
                  },
                  children: ev(`${CT}islandsClaim`)
                })]
              })
            }, hv)
          }))
        }), Nv.goThere && (0, Ye.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ev(`${CT}islandsClaimGoThere`)
        })]
      })
    }

    function fT(vv) {
      let {
        card: zv,
        view: Pv,
        blocked: Sv,
        maxIslands: ev,
        answered: gv,
        nowMs: pv,
        done: dv,
        openSocial: Nv,
        t: lv
      } = vv;
      const Tv = Lg(),
        [Wv, wv] = (0, hv.useState)(new Map),
        [av, sv] = (0, hv.useState)(new Map),
        [Cv, iv] = (0, hv.useState)(null),
        cv = (0, hv.useRef)(null);
      XN(cv);
      const Gv = zv.baf2IslandId,
        mv = zv.baf2IslandCoop,
        jv = null !== mv && void 0 !== mv && mv.baf2CoopMembers.some((vv => vv.baf2MemberKey === Cv)) ? Cv : null,
        fv = function(vv, zv) {
          const Pv = vv.baf2IslandCoop;
          return Pv && MN(Pv) || null !== zv ? void 0 : vv.baf2IslandInvitable
        }(zv, Sv),
        Fv = function(vv, zv) {
          const Pv = vv.baf2IslandCoop;
          return Pv && MN(Pv) ? {
            key: `${cN}islandsCoopFull`,
            params: {
              max: String(Pv.baf2CoopMax)
            }
          } : void 0 !== vv.baf2IslandInvitable && null === zv || Pv && !Pv.baf2CoopManageHere ? null : "degraded" === zv || "stuck" === zv ? {
            key: `${cN}islandsInviteNotLoaded`
          } : null === zv || function(vv) {
            return "notHome" === vv || "wilds" === vv || "visiting" === vv
          }(zv) || DN(zv) ? {
            key: `${cN}islandsInviteGoThere`
          } : {
            key: `${cN}islandsInviteBusy`
          }
        }(zv, Sv),
        Yv = () => {
          var vv;
          iv(null), null === (vv = cv.current) || void 0 === vv || vv.focus()
        };
      return (0, Ye.jsxs)("div", {
        ref: cv,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...EN(null === jv ? dv : Yv),
        children: [mv && (0, Ye.jsxs)(Ye.Fragment, {
          children: [(0, Ye.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: lv(`${CT}islandsPlayersTitle`, {
              count: String(mv.baf2CoopMembers.length),
              max: String(mv.baf2CoopMax)
            })
          }), (0, Ye.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: mv.baf2CoopMembers.map(((vv, zv) => {
              const hv = vv.baf2MemberKey,
                Sv = yN(Wv.get(hv), gv, pv);
              return (0, Ye.jsxs)("li", {
                className: fS()("Baf2IslandPerson", {
                  Pending: Sv
                }),
                children: [(0, Ye.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Ye.jsx)("span", {
                    className: fS()("Baf2IslandPersonName", {
                      Here: vv.baf2MemberHere
                    }),
                    children: vv.baf2MemberName
                  }), vv.baf2MemberHere && (0, Ye.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: lv(`${CT}islandsPlayerHere`)
                  }), 0 === zv && (0, Ye.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: lv(`${CT}islandsPlayerOwner`)
                  }), Pv.remove && zv > 0 && !Sv && jv !== hv && (0, Ye.jsx)(jg.E, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var vv;
                      iv(hv), null === (vv = cv.current) || void 0 === vv || vv.focus()
                    },
                    children: lv(`${CT}islandsRemove`)
                  })]
                }), jv === hv && (0, Ye.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Ye.jsx)("p", {
                    children: IN(lv, `${CT}islandsRemoveConfirm`, {
                      player: vv.baf2MemberName
                    })
                  }), (0, Ye.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Ye.jsx)(jg.A, {
                      onClick: () => {
                        (vv => {
                          const zv = Tv.sendIslandEdit(`baf2coopremove ${Gv} ${vv.baf2MemberKey}`);
                          wv((Pv => new Map(Pv).set(vv.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: zv
                          }))), Yv()
                        })(vv)
                      },
                      children: lv(`${CT}islandsRemoveYes`)
                    }), (0, Ye.jsx)(jg.d, {
                      onClick: Yv,
                      children: lv(`${CT}islandsCancel`)
                    })]
                  })]
                })]
              }, hv)
            }))
          })]
        }), (void 0 !== fv || null !== Fv) && (0, Ye.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: lv(`${CT}islandsInviteTitle`)
        }), !mv && (void 0 !== fv || null !== Fv) && (0, Ye.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: lv(`${CT}islandsInviteShareNote`)
        }), 0 === (null === fv || void 0 === fv ? void 0 : fv.length) && (0, Ye.jsx)(FT, {
          openSocial: Nv,
          t: lv
        }), void 0 !== fv && fv.length > 0 && (0, Ye.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: fv.map((vv => {
            const zv = !0 === vv.baf2InvitableSent || yN(av.get(vv.baf2InvitableId), gv, pv);
            return (0, Ye.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Ye.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Ye.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: vv.baf2InvitableName
                }), vv.baf2InvitableFull && !zv && (0, Ye.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: lv(`${CT}islandsInviteTheirFull`, {
                    max: String(ev)
                  })
                }), (zv || !vv.baf2InvitableFull) && (0, Ye.jsx)(jg.l, {
                  className: "Baf2IslandPersonButton",
                  disabled: zv,
                  onClick: () => {
                    (vv => {
                      const zv = Tv.sendIslandEdit(`baf2coopinvite ${Gv} ${vv}`);
                      sv((Pv => new Map(Pv).set(vv, {
                        atMs: Date.now(),
                        answer: zv
                      })))
                    })(vv.baf2InvitableId)
                  },
                  children: lv(zv ? `${CT}islandsInvited` : `${CT}islandsInvite`)
                })]
              })
            }, vv.baf2InvitableId)
          }))
        }), Fv && (0, Ye.jsx)(zl, {
          note: Fv,
          t: lv
        }), (0, Ye.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Ye.jsx)(jg.d, {
            onClick: dv,
            children: lv(`${CT}islandsDone`)
          })
        })]
      })
    }

    function FT(vv) {
      let {
        openSocial: zv,
        t: Pv
      } = vv;
      return (0, Ye.jsxs)(Ye.Fragment, {
        children: [(0, Ye.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Pv(zv ? `${CT}islandsInviteNobody` : `${CT}islandsInviteNobodyGuest`)
        }), zv && (0, Ye.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Ye.jsx)(jg.d, {
            onClick: zv,
            children: Pv("socialBar:social")
          })
        })]
      })
    }

    function YT(vv) {
      let {
        className: zv,
        text: Pv,
        ConfirmButton: Sv,
        confirmLabel: ev,
        canConfirm: gv,
        send: pv,
        done: dv,
        t: Nv
      } = vv;
      const lv = (0, hv.useRef)(null);
      XN(lv);
      const Tv = () => {
        dv(null)
      };
      return (0, Ye.jsxs)("div", {
        ref: lv,
        tabIndex: -1,
        className: fS()("Baf2IslandForm", zv),
        ...EN(Tv),
        children: [(0, Ye.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Pv
        }), (0, Ye.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Ye.jsx)(Sv, {
            disabled: !gv,
            onClick: () => {
              gv && dv(pv())
            },
            children: ev
          }), (0, Ye.jsx)(jg.d, {
            onClick: Tv,
            children: Nv(`${CT}islandsCancel`)
          })]
        })]
      })
    }

    function nT(vv) {
      return "hidden" !== vv
    }

    function OT(vv) {
      var zv, Pv;
      let {
        card: Sv,
        keepOwn: ev,
        blocked: gv,
        maxIslands: pv,
        serverNowMs: dv,
        nowMs: Nv,
        actions: lv,
        full: Tv,
        waits: Wv,
        answered: wv,
        mode: av,
        setMode: sv,
        pending: Cv,
        onSent: iv,
        switchTo: cv,
        leave: Gv,
        coopOn: mv,
        openSocial: jv,
        t: fv
      } = vv;
      const Fv = Lg(),
        Yv = Sv.baf2IslandActive,
        nv = Yv ? null : function(vv, zv) {
          if (vv <= 0) return null;
          const Pv = zv - vv;
          if (Pv < se) return [`${cN}islandsPlayedJustNow`];
          if (Pv < GN) return [`${cN}islandsPlayedMinutes`, {
            minutes: String(Math.floor(Pv / se))
          }];
          if (Pv < mN) return [`${cN}islandsPlayedHours`, {
            hours: String(Math.floor(Pv / GN))
          }];
          const hv = Math.floor(Pv / mN);
          return 1 === hv ? [`${cN}islandsPlayedDay`] : [`${cN}islandsPlayedDays`, {
            days: String(hv)
          }]
        }(Sv.baf2IslandLastPlayedMs, dv),
        Ov = void 0 === (Dv = Sv.baf2IslandItems) ? null : 0 === Dv ? [`${cN}islandsItemsNone`] : 1 === Dv ? [`${cN}islandsItemsOne`] : [`${cN}islandsItems`, {
          count: String(Dv)
        }];
      var Dv;
      const Kv = function(vv) {
          return vv ? 1 === vv ? [`${cN}islandsWaitingOne`] : [`${cN}islandsWaiting`, {
            count: String(vv)
          }] : null
        }(Sv.baf2IslandWaiting),
        Vv = Sv.baf2IslandUnreadable,
        Uv = Sv.baf2IslandCoop,
        Rv = LN(Sv, lv, ev, Tv, mv, gv),
        xv = (0, hv.useRef)(null);
      bN(null !== av, xv);
      const tv = () => {
          var vv;
          sv(null), null === (vv = xv.current) || void 0 === vv || vv.focus()
        },
        qv = (vv, zv) => {
          tv(), null !== vv && iv(vv, zv)
        },
        Iv = (vv, zv) => fv(`${CT}${vv}`, {
          time: me(fv, zv)
        });
      return (0, Ye.jsxs)("li", {
        ref: xv,
        tabIndex: -1,
        className: fS()("Baf2IslandCard", {
          Active: Yv,
          Pending: Cv,
          Shared: void 0 !== Uv
        }),
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Ye.jsx)("strong", {
            className: "Baf2IslandName",
            children: Sv.baf2IslandName
          }), Yv && (0, Ye.jsx)("span", {
            className: "Baf2IslandBadge",
            children: fv(`${CT}islandsOnThis`)
          }), Uv && (0, Ye.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: fv(`${CT}islandsShared`)
          })]
        }), "member" === (null === Uv || void 0 === Uv ? void 0 : Uv.baf2CoopRole) && (0, Ye.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: IN(fv, `${CT}islandsSharedBy`, {
            owner: Uv.baf2CoopOwner
          })
        }), void 0 !== Vv && (0, Ye.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: fv("newer" === Vv ? `${CT}islandsUnreadable` : `${CT}islandsDamaged`)
        }), "corrupt" === Vv && Tv && (0, Ye.jsx)("p", {
          className: "Baf2IslandStats",
          children: fv(`${CT}islandsDamagedFull`)
        }), void 0 === Vv && (0, Ye.jsxs)(Ye.Fragment, {
          children: [(0, Ye.jsx)(vl, {
            tier: Sv.baf2IslandTier,
            t: fv
          }), (0, Ye.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Ye.jsx)("span", {
              children: 1 === Sv.baf2IslandQuestsDone ? fv(`${CT}islandsQuestsDoneOne`) : fv(`${CT}islandsQuestsDone`, {
                count: String(Sv.baf2IslandQuestsDone)
              })
            }), (0, Ye.jsx)("span", {
              children: 1 === Sv.baf2IslandMachines ? fv(`${CT}islandsMachinesOne`) : fv(`${CT}islandsMachines`, {
                count: String(Sv.baf2IslandMachines)
              })
            }), Ov && (0, Ye.jsx)("span", {
              children: fv(Ov[0], Ov[1])
            }), Kv && (0, Ye.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: fv(Kv[0], Kv[1])
            }), nv && (0, Ye.jsx)("span", {
              children: fv(nv[0], nv[1])
            })]
          })]
        }), Uv && void 0 === Uv.baf2CoopState && "people" !== av && (0, Ye.jsx)(mT, {
          members: Uv.baf2CoopMembers,
          t: fv
        }), null === av && (0, Ye.jsx)(jT, {
          card: Sv,
          answered: wv,
          nowMs: Nv,
          t: fv
        }), Rv.note && (0, Ye.jsx)(zl, {
          note: Rv.note,
          className: fS()({
            Unreachable: void 0 !== (null === Uv || void 0 === Uv ? void 0 : Uv.baf2CoopState)
          }),
          t: fv
        }), "rename" === av && (0, Ye.jsx)(cT, {
          card: Sv,
          canRename: "enabled" === Rv.rename,
          done: qv,
          t: fv
        }), "delete" === av && (0, Ye.jsx)(GT, {
          card: Sv,
          canDelete: "enabled" === Rv.delete,
          done: vv => {
            qv(vv, Uv ? "delete" : void 0)
          },
          t: fv
        }), "people" === av && (0, Ye.jsx)(fT, {
          card: Sv,
          view: Rv,
          blocked: gv,
          maxIslands: pv,
          answered: wv,
          nowMs: Nv,
          done: tv,
          openSocial: jv,
          t: fv
        }), "leave" === av && (0, Ye.jsx)(YT, {
          className: "Leave",
          text: IN(fv, `${CT}islandsLeaveConfirm`, {
            island: Sv.baf2IslandName,
            owner: null !== (zv = null === (Pv = Sv.baf2IslandCoop) || void 0 === Pv ? void 0 : Pv.baf2CoopOwner) && void 0 !== zv ? zv : ""
          }),
          ConfirmButton: jg.A,
          confirmLabel: fv(`${CT}islandsLeaveYes`),
          canConfirm: "enabled" === Rv.leave,
          send: () => iT(Fv, Sv),
          done: vv => {
            qv(vv, "leave"), null !== vv && Yv && Gv()
          },
          t: fv
        }), "unshare" === av && (0, Ye.jsx)(YT, {
          className: "Unshare",
          text: IN(fv, `${CT}islandsStopSharingConfirm`, {
            island: Sv.baf2IslandName
          }),
          ConfirmButton: jg.l,
          confirmLabel: fv(`${CT}islandsStopSharing`),
          canConfirm: "enabled" === Rv.unshare,
          send: () => Fv.sendIslandEdit(`baf2coopunshare ${Sv.baf2IslandId}`),
          done: vv => {
            qv(vv), null !== vv && Gv()
          },
          t: fv
        }), null === av && !Cv && (0, Ye.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Sv.baf2IslandName,
          children: [nT(Rv.switch) && (0, Ye.jsx)(jg.l, {
            disabled: "enabled" !== Rv.switch,
            onClick: cv,
            children: "tryAgain" === Rv.switchLabel ? fv(`${CT}islandsTryAgain`) : Wv.switch > 0 ? Iv("islandsSwitchIn", Wv.switch) : fv(`${CT}islandsSwitch`)
          }), nT(Rv.rename) && (0, Ye.jsx)(jg.d, {
            disabled: "enabled" !== Rv.rename,
            onClick: () => {
              sv("rename")
            },
            children: fv(`${CT}islandsRename`)
          }), nT(Rv.people) && (0, Ye.jsx)(jg.d, {
            disabled: "enabled" !== Rv.people,
            onClick: () => {
              sv("people")
            },
            children: fv("players" === Rv.peopleLabel ? `${CT}islandsPlayersButton` : `${CT}islandsInviteButton`)
          }), nT(Rv.unshare) && (0, Ye.jsx)(jg.d, {
            disabled: "enabled" !== Rv.unshare,
            onClick: () => {
              sv("unshare")
            },
            children: fv(`${CT}islandsStopSharing`)
          }), nT(Rv.dismiss) && (0, Ye.jsx)(jg.d, {
            disabled: "enabled" !== Rv.dismiss,
            onClick: () => {
              iv(iT(Fv, Sv), "dismiss"), Yv && Gv()
            },
            children: fv(`${CT}islandsDismiss`)
          }), nT(Rv.leave) && (0, Ye.jsx)(jg.E, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Rv.leave,
            onClick: () => {
              sv("leave")
            },
            children: Yv && Wv.switch > 0 ? Iv("islandsLeaveIn", Wv.switch) : fv(`${CT}islandsLeave`)
          }), nT(Rv.delete) && (0, Ye.jsx)(jg.E, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Rv.delete,
            onClick: () => {
              sv("delete")
            },
            children: Wv.change > 0 && Rv.deleteWaits ? Iv("islandsDeleteIn", Wv.change) : fv(`${CT}islandsDelete`)
          })]
        })]
      })
    }
    const DT = "buildAFactory2Game:";

    function KT(vv) {
      let {
        invite: zv,
        actions: Pv,
        full: Sv,
        maxIslands: ev,
        waitSeconds: gv,
        focus: pv,
        focused: dv,
        join: Nv,
        decline: lv,
        t: Tv
      } = vv;
      const [Wv, wv] = (0, hv.useState)(!1), av = (0, hv.useRef)(null);
      bN(Wv, av), (0, hv.useEffect)((() => {
        var vv;
        pv && (wv(!0), null === (vv = av.current) || void 0 === vv || vv.focus(), dv())
      }), [pv, dv]);
      const sv = function(vv, zv, Pv, hv, Sv) {
          return Pv ? {
            join: !1,
            note: {
              key: `${cN}islandsJoinTooMany`,
              params: {
                max: String(hv)
              }
            }
          } : vv.baf2InvitePlayers >= Sv ? {
            join: !1,
            note: {
              key: `${cN}islandsJoinFull`
            }
          } : {
            join: zv.switch,
            note: null
          }
        }(zv, Pv, Sv, ev, 10),
        Cv = zv.baf2InviteIsland,
        iv = zv.baf2InvitePlayers,
        cv = () => {
          var vv;
          wv(!1), null === (vv = av.current) || void 0 === vv || vv.focus()
        },
        Gv = gv > 0 && null === sv.note ? Tv(`${DT}islandsJoinIn`, {
          time: me(Tv, gv)
        }) : Tv(`${DT}islandsJoin`);
      return (0, Ye.jsxs)("li", {
        ref: av,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Wv ? EN(cv) : {},
        children: [(0, Ye.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Ye.jsx)("strong", {
            className: "Baf2IslandName",
            children: Cv
          })
        }), (0, Ye.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: IN(Tv, `${DT}islandsInvitedBy`, {
            owner: zv.baf2InviteOwner
          })
        }), (0, Ye.jsx)(vl, {
          tier: zv.baf2InviteTier,
          t: Tv
        }), (0, Ye.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Ye.jsx)("span", {
            children: 1 === iv ? Tv(`${DT}islandsPlayersCountOne`) : Tv(`${DT}islandsPlayersCount`, {
              count: String(iv)
            })
          })
        }), sv.note && (0, Ye.jsx)(zl, {
          note: sv.note,
          t: Tv
        }), Wv && (0, Ye.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: IN(Tv, `${DT}islandsJoinConfirm`, {
            island: Cv
          })
        }), !Wv && (0, Ye.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Cv,
          children: [(0, Ye.jsx)(jg.l, {
            disabled: !sv.join,
            onClick: () => {
              var vv;
              wv(!0), null === (vv = av.current) || void 0 === vv || vv.focus()
            },
            children: Gv
          }), (0, Ye.jsx)(jg.d, {
            onClick: lv,
            children: Tv(`${DT}islandsDecline`)
          })]
        }), Wv && (0, Ye.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Ye.jsx)(jg.l, {
            disabled: !sv.join,
            onClick: Nv,
            children: Tv(`${DT}islandsJoinYes`)
          }), (0, Ye.jsx)(jg.d, {
            onClick: cv,
            children: Tv(`${DT}islandsCancel`)
          })]
        })]
      })
    }

    function VT(vv) {
      let {
        invites: zv,
        actions: Pv,
        full: hv,
        maxIslands: Sv,
        waitSeconds: ev,
        focus: gv,
        focused: pv,
        leave: dv,
        declined: Nv,
        t: lv
      } = vv;
      const Tv = Lg();
      return (0, Ye.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Ye.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: lv(`${DT}islandsInvitesTitle`)
        }), (0, Ye.jsx)("ul", {
          className: "Baf2IslandCards",
          children: zv.map((vv => {
            const zv = vv.baf2InviteId;
            return (0, Ye.jsx)(KT, {
              invite: vv,
              actions: Pv,
              full: hv,
              maxIslands: Sv,
              waitSeconds: ev,
              focus: gv === zv,
              focused: pv,
              join: () => {
                Tv.send(`baf2coopaccept ${zv}`), dv()
              },
              decline: () => {
                Tv.send(`baf2coopdecline ${zv}`), Nv(zv)
              },
              t: lv
            }, zv)
          }))
        })]
      })
    }
    const UT = "buildAFactory2Game:";

    function RT(vv) {
      let {
        cards: zv,
        activeName: Pv,
        canStart: Sv,
        waitSeconds: ev,
        leave: gv,
        t: pv
      } = vv;
      const dv = Lg(),
        [Nv, lv] = (0, hv.useState)(!1),
        [Tv, Wv] = (0, hv.useState)(""),
        wv = (0, hv.useRef)(null);
      bN(Nv, wv), (0, hv.useEffect)((() => {
        var vv;
        Nv && (null === (vv = wv.current) || void 0 === vv || vv.focus())
      }), [Nv]);
      const av = YN(zv),
        sv = fN(Tv),
        Cv = FN(sv),
        iv = () => {
          Sv && !Cv && (dv.send("" === sv || sv === av ? bv : `${bv} ${sv}`), gv())
        },
        cv = () => {
          var vv;
          lv(!1), null === (vv = wv.current) || void 0 === vv || vv.focus()
        };
      return (0, Ye.jsxs)("li", {
        ref: wv,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Nv ? EN(cv) : {},
        children: [(0, Ye.jsx)("strong", {
          className: "Baf2IslandName",
          children: pv(`${UT}islandsNewTitle`)
        }), !Nv && (0, Ye.jsx)("p", {
          className: "Baf2IslandStats",
          children: pv(`${UT}islandsNewNote`)
        }), Nv && (0, Ye.jsxs)(Ye.Fragment, {
          children: [(0, Ye.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: IN(pv, `${UT}islandsNewConfirm`, {
              name: Pv
            })
          }), (0, Ye.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [pv(`${UT}islandsNewNameLabel`), (0, Ye.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Tv,
              placeholder: av,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: oN,
              onChange: vv => {
                Wv(vv.target.value)
              },
              ...JN(iv, cv)
            })]
          }), Cv && (0, Ye.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: pv(`${UT}islandsNameReserved`)
          })]
        }), (0, Ye.jsxs)("div", {
          className: fS()("Baf2IslandButtons", {
            Stacked: Nv
          }),
          children: [(0, Ye.jsx)(jg.l, {
            disabled: !Sv || Nv && Cv,
            onClick: () => {
              if (!Nv) return Wv(av), void lv(!0);
              iv()
            },
            children: ev > 0 ? pv(`${UT}islandsNewIn`, {
              time: me(pv, ev)
            }) : pv(Nv ? `${UT}islandsNewConfirmButton` : `${UT}islandsNew`)
          }), Nv && (0, Ye.jsx)(jg.d, {
            onClick: cv,
            children: pv(`${UT}islandsCancel`)
          })]
        })]
      })
    }

    function xT(vv) {
      var zv, Pv;
      let {
        message: Sv,
        arrivedAtMs: ev,
        close: gv,
        leave: pv,
        openSocial: dv
      } = vv;
      const Nv = Lg(),
        {
          t: lv
        } = (0, OS.x)(),
        Tv = uN(1e3),
        [Wv, wv] = (0, hv.useState)(null),
        [av, sv] = (0, hv.useState)(new Map),
        [Cv, iv] = (0, hv.useState)(new Set),
        cv = Sv.baf2IslandCards,
        Gv = function(vv, zv, Pv, hv) {
          return (null !== vv && void 0 !== vv ? vv : []).filter((vv => zv + vv.baf2InviteLeftMs > Pv && !hv.has(vv.baf2InviteId)))
        }(Sv.baf2IslandsInvites, ev, Tv, Cv),
        mv = Gv.map((vv => vv.baf2InviteId)).join(" "),
        jv = (0, hv.useRef)(null),
        fv = rN(jv);
      kN(), (0, hv.useEffect)((() => {
        var vv, zv;
        null !== (vv = jv.current) && void 0 !== vv && vv.contains(document.activeElement) || (null === (zv = jv.current) || void 0 === zv || zv.focus())
      }), [Sv, mv]), (0, hv.useEffect)((() => {
        sv((vv => function(vv, zv, Pv, hv) {
          const Sv = new Map;
          for (const ev of zv) {
            const zv = vv.get(ev.baf2IslandId);
            zv && (void 0 !== zv.untilGone || hv < zv.answer) && RN(zv, ev, Pv) && Sv.set(ev.baf2IslandId, zv)
          }
          return Sv.size === vv.size ? vv : Sv
        }(vv, Sv.baf2IslandCards, Date.now(), Sv.baf2IslandsAnswered)))
      }), [Sv]);
      const Fv = jN(ev, Sv.baf2IslandsWaitMs, Tv),
        Yv = Sv.baf2IslandsBlocked,
        nv = KN(Yv, Fv),
        Ov = function(vv, zv) {
          const Pv = KN(vv, 0);
          return {
            switch: Pv.switch ? zv : 0,
            change: Pv.change ? zv : 0
          }
        }(Yv, Fv),
        Dv = cv.length >= Sv.baf2IslandsMax,
        Kv = cv.length > 0,
        Vv = function(vv, zv, Pv) {
          return vv + Math.max(0, Pv - zv)
        }(Sv.baf2IslandsNowMs, ev, Tv),
        Uv = null !== (zv = null === (Pv = cv.find((vv => vv.baf2IslandActive))) || void 0 === Pv ? void 0 : Pv.baf2IslandName) && void 0 !== zv ? zv : "",
        Rv = function(vv) {
          const zv = vv.filter(AN).length;
          return zv <= 1 && zv < vv.length
        }(cv),
        xv = !0 === Sv.baf2IslandsCoop,
        tv = function(vv, zv) {
          const Pv = vv.find((vv => vv.baf2IslandActive)),
            hv = null === Pv || void 0 === Pv ? void 0 : Pv.baf2IslandCoop;
          return Pv && "member" === (null === hv || void 0 === hv ? void 0 : hv.baf2CoopRole) ? {
            key: `${cN}islandsKeepOwnMember`,
            names: {
              owner: hv.baf2CoopOwner,
              island: Pv.baf2IslandName
            }
          } : {
            key: zv ? `${cN}islandsKeepOwn` : `${cN}islandsKeepOwnSolo`
          }
        }(cv, xv),
        [qv, Iv] = (0, hv.useState)(null);
      (0, hv.useEffect)((() => {
        void 0 !== Sv.baf2IslandsFocusInvite && Iv(Sv.baf2IslandsFocusInvite)
      }), [Sv]);
      const Qv = (0, hv.useCallback)((() => {
          Iv(null)
        }), []),
        Zv = Wv ? cv.find((vv => vv.baf2IslandId === Wv.id)) : void 0,
        Av = Wv && Zv && "hidden" !== LN(Zv, nv, Rv, Dv, xv, Yv)[Wv.mode] ? Wv : null;
      return (0, Ye.jsx)(mg.c, {
        close: gv,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Ye.jsxs)("section", {
          ref: jv,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: fv ? {
            marginTop: `${fv.marginTop}px`,
            maxHeight: `${fv.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsxs)("div", {
              children: [(0, Ye.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: lv(`${UT}islandsTitle`)
              }), Kv && (0, Ye.jsx)("p", {
                children: lv(`${UT}islandsSubtitle`, {
                  count: String(cv.length),
                  max: String(Sv.baf2IslandsMax)
                })
              })]
            }), (0, Ye.jsx)(jg.i, {
              ariaLabel: lv(`${UT}islandsClose`),
              onClick: gv
            })]
          }), (0, Ye.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== Yv && (0, Ye.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: IN(lv, nN(Yv, ON(cv)), {
                island: Uv
              })
            }), Kv && Gv.length > 0 && (0, Ye.jsx)(VT, {
              invites: Gv,
              actions: nv,
              full: Dv,
              maxIslands: Sv.baf2IslandsMax,
              waitSeconds: Ov.switch,
              focus: qv,
              focused: Qv,
              leave: pv,
              declined: vv => {
                iv((zv => new Set(zv).add(vv)))
              },
              t: lv
            }), Kv && (0, Ye.jsxs)(Ye.Fragment, {
              children: [Dv && (0, Ye.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: lv(`${UT}islandsFull`, {
                  max: String(Sv.baf2IslandsMax)
                })
              }), (0, Ye.jsx)("p", {
                className: "Baf2IslandsNote",
                children: IN(lv, tv.key, tv.names)
              }), (0, Ye.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [cv.map((vv => {
                  const zv = vv.baf2IslandId;
                  return (0, Ye.jsx)(OT, {
                    card: vv,
                    keepOwn: Rv,
                    coopOn: xv,
                    openSocial: dv,
                    blocked: Yv,
                    maxIslands: Sv.baf2IslandsMax,
                    serverNowMs: Vv,
                    nowMs: Tv,
                    actions: nv,
                    full: Dv,
                    waits: Ov,
                    answered: Sv.baf2IslandsAnswered,
                    mode: (null === Av || void 0 === Av ? void 0 : Av.id) === zv ? Av.mode : null,
                    setMode: vv => {
                      wv(null === vv ? null : {
                        id: zv,
                        mode: vv
                      })
                    },
                    pending: RN(av.get(zv), vv, Tv),
                    onSent: (Pv, hv) => {
                      sv((Sv => {
                        const ev = {
                          atMs: Date.now(),
                          from: vv.baf2IslandName,
                          answer: Pv
                        };
                        return new Map(Sv).set(zv, hv ? {
                          ...ev,
                          untilGone: hv
                        } : ev)
                      }))
                    },
                    leave: pv,
                    switchTo: () => {
                      Nv.send(`baf2islandswitch ${zv}`), pv()
                    },
                    t: lv
                  }, zv)
                })), !Dv && (0, Ye.jsx)(RT, {
                  cards: cv,
                  activeName: Uv,
                  canStart: nv.change,
                  waitSeconds: Ov.change,
                  leave: pv,
                  t: lv
                })]
              })]
            })]
          })]
        })
      })
    }
    var tT = Pv(4765);
    const qT = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Ue: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      IT = Object.keys(qT),
      QT = new Set([...Object.keys(bz), ...[...tz.Press.recipes, ...tz["Wire Mill"].recipes].map((vv => vv.output))]),
      ZT = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      AT = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      LT = / Bar$|Alloy$/,
      HT = /Porkchop|Beef|Mutton|Venison|Steak/,
      MT = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const yT = (0, hv.memo)((function(vv) {
      let {
        item: zv,
        name: Pv,
        amount: hv,
        selected: Sv,
        small: ev,
        onPick: gv
      } = vv;
      return (0, Ye.jsxs)("button", {
        type: "button",
        className: fS()("Baf2TermTile", {
          On: Sv,
          Small: ev
        }),
        "aria-label": `${Pv}: ${hv}`,
        "aria-pressed": Sv,
        onClick: () => {
          gv(zv)
        },
        children: [(0, Ye.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Ye.jsx)(KS.b, {
            itemName: zv,
            amount: 0
          })
        }), (0, Ye.jsx)("span", {
          className: "Baf2TermCount",
          children: ce(hv, 1e4)
        }), !ev && (0, Ye.jsx)("span", {
          className: "Baf2TermName",
          children: Pv
        })]
      })
    }));

    function BT(vv) {
      let {
        store: zv,
        close: Pv,
        send: Sv
      } = vv;
      const {
        t: ev
      } = (0, OS.x)(), {
        isTouchScreen: gv
      } = (0, GS.i)(["isTouchScreen"]);
      ! function(vv) {
        const [zv, Pv] = (0, hv.useState)(vv.version);
        (0, hv.useEffect)((() => (Pv(vv.version), vv.subscribe((() => {
          Pv(vv.version)
        })))), [vv])
      }(zv);
      const [pv, dv] = (0, hv.useState)("all"), [Nv, lv] = (0, hv.useState)(!1), [Tv, Wv] = (0, hv.useState)(""), [wv, av] = (0, hv.useState)(""), [sv, Cv] = (0, hv.useState)(null), [iv, cv] = (0, hv.useState)(!1), [Gv, mv, jv] = function() {
        const vv = (0, hv.useRef)(null),
          [zv, Pv] = (0, hv.useState)(!1),
          Sv = () => {
            const zv = vv.current;
            Pv(null !== zv && zv.scrollLeft + zv.clientWidth < zv.scrollWidth - 1)
          };
        return (0, hv.useEffect)(Sv), (0, hv.useEffect)((() => {
          const zv = vv.current;
          if (!zv) return;
          const Pv = new ResizeObserver(Sv);
          return Pv.observe(zv), () => {
            Pv.disconnect()
          }
        }), []), [vv, zv, Sv]
      }(), fv = (0, hv.useMemo)((() => new Map), [ev]), Fv = vv => {
        let zv = fv.get(vv);
        return void 0 === zv && (zv = function(vv, zv) {
          const Pv = /^(.+) \((.+)\)$/.exec(vv);
          return Pv ? zv(Pv[2], Pv[1]) : vv
        }(he(ev, vv), ((vv, zv) => ev("buildAFactory2Game:terminalTileKind", {
          kind: vv,
          base: zv
        }))), fv.set(vv, zv)), zv
      }, Yv = zv.isReadOnly(), nv = iv && !Yv, Ov = zv.recent(), Dv = zv.items(), Kv = wv.trim().toLowerCase(), Vv = nv ? zv.heldItems(sv) : ("recent" === pv ? Ov : Dv).filter((vv => {
        const zv = Fv(vv);
        return ("all" === pv || "recent" === pv || function(vv) {
          return Te(vv) ? "farm" : ZT.test(vv) ? "nuclear" : LT.test(vv) ? "bars" : HT.test(vv) ? "farm" : AT.test(vv) ? "Ue" : QT.has(vv) ? "parts" : MT.test(vv) ? "farm" : "other"
        }(vv) === pv) && ("" === Kv || zv.toLowerCase().includes(Kv)) && ("" === Tv || zv.toUpperCase().startsWith(Tv))
      })), Uv = new Set(Dv.map((vv => Fv(vv).charAt(0).toUpperCase()))), Rv = vv => nv ? zv.heldAmount(vv) : zv.amount(vv), xv = !nv && "recent" !== pv && Ov.length > 0, tv = function(vv, zv) {
        return null !== vv && zv.includes(vv) ? vv : null
      }(sv, xv ? [...Vv, ...Ov] : Vv), qv = null === tv ? 0 : zv.amount(tv), Iv = null === tv ? 0 : Rv(tv), Qv = (0, hv.useCallback)((vv => {
        Cv((zv => zv === vv ? null : vv))
      }), []), Zv = vv => Iv > 0 || nv && null === tv && "fill" === vv && Vv.length > 0, Av = nv ? [
        ["one", ev("buildAFactory2Game:terminalStoreOne")],
        ["stack", ev("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", ev(null === tv ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", ev("buildAFactory2Game:terminalTakeOne")],
        ["stack", ev("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", ev("buildAFactory2Game:terminalFill")]
      ], Lv = nv ? ev("buildAFactory2Game:terminalStoreEmpty") : "" !== Tv ? ev("buildAFactory2Game:terminalEmptyLetter", {
        letter: Tv
      }) : "" !== Kv ? ev("buildAFactory2Game:terminalEmptySearch", {
        query: wv
      }) : ev("buildAFactory2Game:terminalEmpty");
      return (0, Ye.jsx)(mg.c, {
        close: Pv,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Ye.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsxs)("div", {
              children: [(0, Ye.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: ev(zv.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Ye.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Ye.jsx)("span", {
                  className: fS()({
                    Off: nv
                  }),
                  children: ev("buildAFactory2Game:terminalSubtitle", {
                    count: String(zv.siloCount())
                  })
                }), !Yv && (0, Ye.jsx)("span", {
                  className: fS()({
                    Off: !nv
                  }),
                  children: ev("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !Yv && (0, Ye.jsx)(tT.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: ev("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: ev("buildAFactory2Game:terminalModeStore")
              }],
              value: nv ? "store" : "take",
              onChange: vv => {
                cv("store" === vv), Cv(null)
              },
              ariaLabel: ev("buildAFactory2Game:terminalModes")
            }), (0, Ye.jsx)(jg.i, {
              onClick: Pv
            })]
          }), (0, Ye.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Ye.jsxs)("div", {
              className: fS()("Baf2TermTools", {
                Hidden: nv
              }),
              children: [(0, Ye.jsx)("div", {
                ref: Gv,
                className: fS()("Baf2TermChips", {
                  MoreRight: mv
                }),
                onScroll: jv,
                children: Nv ? (0, Ye.jsxs)(Ye.Fragment, {
                  children: [(0, Ye.jsx)("button", {
                    type: "button",
                    "aria-label": ev("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      lv(!1), Wv("")
                    },
                    children: "\u2190"
                  }), [...Uv].sort().map((vv => (0, Ye.jsx)("button", {
                    type: "button",
                    className: fS()({
                      On: Tv === vv
                    }),
                    onClick: () => {
                      Wv(Tv === vv ? "" : vv)
                    },
                    children: vv
                  }, vv)))]
                }) : (0, Ye.jsxs)(Ye.Fragment, {
                  children: [(0, Ye.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      lv(!0)
                    },
                    children: ev("buildAFactory2Game:terminalLetters")
                  }), IT.map((vv => (0, Ye.jsx)("button", {
                    type: "button",
                    className: fS()({
                      On: pv === vv
                    }),
                    onClick: () => {
                      dv(vv)
                    },
                    children: ev(qT[vv])
                  }, vv)))]
                })
              }), !gv && (0, Ye.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: wv,
                placeholder: ev("buildAFactory2Game:terminalSearch"),
                "aria-label": ev("buildAFactory2Game:terminalSearch"),
                onChange: vv => {
                  av(vv.target.value)
                },
                onKeyDown: vv => {
                  vv.stopPropagation()
                }
              }), (0, Ye.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": ev("buildAFactory2Game:terminalResort"),
                title: ev("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  zv.resort()
                },
                children: "\u21c5"
              })]
            }), xv && (0, Ye.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Ye.jsx)("span", {
                children: ev(qT.recent)
              }), Ov.map((vv => (0, Ye.jsx)(yT, {
                item: vv,
                name: Fv(vv),
                amount: zv.amount(vv),
                selected: tv === vv,
                small: !0,
                onPick: Qv
              }, vv)))]
            }), (0, Ye.jsx)("div", {
              className: "Baf2TermTiles",
              children: Vv.length > 0 ? Vv.map((vv => (0, Ye.jsx)(yT, {
                item: vv,
                name: Fv(vv),
                amount: Rv(vv),
                selected: tv === vv,
                onPick: Qv
              }, vv))) : (0, Ye.jsx)("p", {
                className: "Baf2TermEmpty",
                children: Lv
              })
            }), (0, Ye.jsxs)("div", {
              className: fS()("Baf2TermActions", {
                Hidden: nv && 0 === Vv.length
              }),
              children: [(0, Ye.jsx)("span", {
                className: "Baf2TermPicked",
                children: Yv ? (0, Ye.jsxs)(Ye.Fragment, {
                  children: [null !== tv && qv > 0 ? Fv(tv) : ev("buildAFactory2Game:terminalVisiting"), (0, Ye.jsx)("small", {
                    children: ev("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== tv ? (0, Ye.jsxs)(Ye.Fragment, {
                  children: [Fv(tv), (0, Ye.jsx)("small", {
                    children: ev("buildAFactory2Game:terminalStored", {
                      amount: qv.toLocaleString()
                    })
                  })]
                }) : ev(nv ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !Yv && Av.map((vv => {
                let [Pv, hv] = vv;
                const ev = "fill" === Pv ? jg.j : jg.d;
                return (0, Ye.jsx)(ev, {
                  className: "Baf2TermTake",
                  disabled: !Zv(Pv),
                  onClick: () => {
                    (vv => {
                      Zv(vv) && Sv(null === tv ? zv.putAll() : nv ? zv.put(vv, tv) : zv.take(vv, tv))
                    })(Pv)
                  },
                  children: hv
                }, Pv)
              }))]
            })]
          })]
        })
      })
    }

    function JT(vv) {
      let {
        kind: zv,
        icon: Pv,
        label: hv,
        number: Sv,
        preview: ev,
        note: gv,
        tone: pv = null,
        share: dv,
        onExplain: Nv
      } = vv;
      return (0, Ye.jsxs)("button", {
        type: "button",
        className: fS()("NxLane", zv, {
          Warn: "warn" === pv,
          Danger: "danger" === pv
        }),
        onClick: Nv,
        children: [(0, Ye.jsxs)("span", {
          className: "NxLaneHead",
          children: [Pv, (0, Ye.jsx)("span", {
            className: "NxLaneLabel",
            children: hv
          })]
        }), (0, Ye.jsxs)("span", {
          className: "NxLaneNum",
          children: [Sv, ev && (0, Ye.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", ev]
          })]
        }), (0, Ye.jsx)("span", {
          className: "NxLaneNote",
          children: gv
        }), void 0 !== dv && (0, Ye.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, dv)) + "%"
          }
        })]
      })
    }

    function ET(vv) {
      let {
        kind: zv,
        step: Pv,
        short: hv,
        planned: Sv
      } = vv;
      return (0, Ye.jsx)("i", {
        className: fS()("NxPipe", zv, `Step${Pv}`, {
          Short: hv,
          Planned: Sv
        }),
        "aria-hidden": "true"
      })
    }

    function oT(vv) {
      let {
        max: zv,
        bands: Pv,
        ticks: hv,
        now: Sv,
        settle: ev,
        settleTone: gv,
        onExplain: pv
      } = vv;
      const dv = vv => Math.max(0, Math.min(zv, vv)) / zv * 100 + "%";
      let Nv = 0;
      return (0, Ye.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: pv,
        children: [(0, Ye.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [Pv.map((vv => {
            const zv = {
              bottom: dv(Nv),
              height: `calc(${dv(vv.upTo)} - ${dv(Nv)})`
            };
            return Nv = vv.upTo, (0, Ye.jsx)("i", {
              className: fS()("NxGaugeBand", vv.kind),
              style: zv
            }, vv.kind)
          })), null !== Sv && (0, Ye.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: dv(Sv)
            }
          }), void 0 !== ev && null !== ev && (0, Ye.jsx)("i", {
            className: fS()("NxGaugeSettle", {
              Bad: "bad" === gv
            }),
            style: {
              bottom: dv(ev)
            }
          })]
        }), (0, Ye.jsx)("span", {
          className: "NxGaugeTicks",
          children: hv.map((vv => (0, Ye.jsx)("small", {
            style: {
              bottom: dv(vv)
            },
            children: vv
          }, vv)))
        })]
      })
    }

    function bT(vv) {
      const [zv, Pv] = (0, hv.useState)(null), [Sv, ev] = (0, hv.useState)((() => {
        try {
          return null === window.localStorage.getItem(vv)
        } catch {
          return !1
        }
      })), gv = (0, hv.useRef)(null);
      (0, hv.useEffect)((() => () => {
        null !== gv.current && clearTimeout(gv.current)
      }), []);
      const pv = (0, hv.useCallback)((zv => {
          Pv(zv), ev(!1);
          try {
            window.localStorage.setItem(vv, "1")
          } catch {}
          null !== gv.current && clearTimeout(gv.current), gv.current = setTimeout((() => {
            gv.current = null, Pv(null)
          }), 5e3)
        }), [vv]),
        dv = (0, hv.useCallback)(((zv, Pv) => {
          const hv = `${vv}:${zv}`;
          try {
            if (null !== window.localStorage.getItem(hv)) return;
            window.localStorage.setItem(hv, "1")
          } catch {
            return
          }
          pv(Pv)
        }), [pv, vv]);
      return {
        explained: zv,
        hinting: Sv,
        explain: pv,
        explainOnce: dv
      }
    }

    function rT(vv) {
      let {
        text: zv,
        tone: Pv,
        explained: hv
      } = vv;
      return (0, Ye.jsxs)("p", {
        className: fS()("NxStatus", null === hv ? Pv : "Explain"),
        "aria-live": "polite",
        children: [null !== hv && (0, Ye.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== hv && void 0 !== hv ? hv : zv]
      })
    }
    const kT = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function XT(vv, zv) {
      const Pv = Number(vv[zv]);
      return 1 === Pv || 2 === Pv || 3 === Pv ? Pv : 0
    }

    function uT(vv) {
      return !!Fd("reactor", vv.baf2RxNeed) || void 0 !== vv.baf2RxLayout && vv.baf2RxNeed.some((vv => {
        let [zv, Pv] = vv;
        return Pv > 0 && kT.includes(zv)
      }))
    }
    const vW = "buildAFactory2Game:";

    function zW(vv) {
      let {
        status: zv,
        store: Pv,
        busy: hv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)();
      return function(vv) {
        return 0 !== (vv.baf2RxFlags & sz) && (!vv.baf2RxFormed || void 0 !== vv.baf2RxLayout)
      }(zv) ? (0, Ye.jsx)(jg.j, {
        disabled: !uT(zv) || hv,
        onClick: () => {
          Pv.tap("fill", (() => {
            Pv.send("fill")
          }))
        },
        children: Sv(void 0 !== zv.baf2RxLayout ? `${vW}rxFillLayout` : `${vW}rxFill`)
      }) : null
    }

    function PW(vv) {
      let {
        status: zv,
        store: Pv,
        readOnly: Sv,
        bare: ev = !1
      } = vv;
      const {
        t: gv
      } = (0, OS.x)(), pv = zv.baf2RxLayout, [dv, Nv, lv] = zv.baf2RxDims, Tv = (0, hv.useMemo)((() => {
        if (void 0 === pv) return 0;
        const vv = Uint8Array.from(pv, ((vv, zv) => XT(pv, zv)));
        return vd([dv - 2, Nv - 2, lv - 2], vv).max
      }), [pv, dv, Nv, lv]);
      return void 0 === pv ? null : (0, Ye.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!ev && (0, Ye.jsx)("span", {
          className: "Baf2RxHint",
          children: gv(`${vW}rxLayoutLine`, {
            amount: Ud(Tv)
          })
        }), !Sv && (0, Ye.jsx)(jg.d, {
          onClick: () => {
            Pv.send("layout", 0)
          },
          children: gv(`${vW}rxLayoutHide`)
        })]
      })
    }
    const hW = "buildAFactory2Game:",
      SW = {
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

    function eW(vv) {
      let {
        id: zv,
        title: Pv,
        body: hv,
        bodyParams: Sv,
        yes: ev,
        cancel: gv,
        confirm: pv
      } = vv;
      const {
        t: dv
      } = (0, OS.x)();
      return (0, Ye.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": zv,
        children: [(0, Ye.jsx)("h3", {
          id: zv,
          children: dv(Pv)
        }), (0, Ye.jsx)("p", {
          children: dv(hv, Sv)
        }), (0, Ye.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Ye.jsx)(jg.e, {
            onClick: gv,
            children: dv(`${hW}rxCancel`)
          }), (0, Ye.jsx)(jg.A, {
            onClick: pv,
            children: dv(ev)
          })]
        })]
      })
    }

    function gW(vv) {
      const [zv, Pv] = (0, hv.useState)((() => vv.get()));
      return (0, hv.useEffect)((() => (Pv(vv.get()), vv.subscribe((() => {
        Pv(vv.get())
      })))), [vv]), zv
    }

    function pW(vv) {
      let {
        kind: zv,
        cap: Pv,
        busy: Sv = !1,
        whyNot: ev = null,
        apart: gv
      } = vv;
      const {
        t: pv
      } = (0, OS.x)(), [dv, Nv] = (0, hv.useState)(!1), lv = null !== ev, Tv = (0, hv.useRef)(null);
      if ((0, hv.useEffect)((() => {
          lv && Nv(!1)
        }), [lv]), (0, hv.useLayoutEffect)((() => {
          var vv;
          const zv = null === (vv = Tv.current) || void 0 === vv ? void 0 : vv.firstElementChild;
          lv ? null === zv || void 0 === zv || zv.setAttribute("aria-disabled", "true") : Sv || null === zv || void 0 === zv || zv.removeAttribute("aria-disabled")
        })), !dv || lv) return (0, Ye.jsx)("span", {
        ref: Tv,
        className: "Baf2RxApartWrap",
        children: (0, Ye.jsx)(jg.e, {
          disabled: Sv,
          className: fS()({
            Baf2RxNotYet: lv
          }),
          onClick: () => {
            ev ? ev() : Nv(!0)
          },
          children: pv(`${hW}rxApart`)
        })
      });
      const Wv = "battery" === zv,
        wv = void 0 === Pv ? `${hW}batApartConfirmBodyPlan` : `${hW}batApartConfirmBody`;
      return (0, Ye.jsx)(eW, {
        id: `baf2ApartTitle_${zv}`,
        title: Wv ? `${hW}batApartConfirmTitle` : `${hW}rxApartConfirmTitle`,
        body: Wv ? wv : `${hW}rxApartConfirmBody`,
        bodyParams: void 0 === Pv ? void 0 : {
          cap: Pv
        },
        yes: `${hW}rxApart`,
        cancel: () => {
          Nv(!1)
        },
        confirm: () => {
          Nv(!1), gv()
        }
      })
    }

    function dW(vv) {
      let {
        mood: zv,
        big: Pv
      } = vv;
      const hv = SW[zv],
        Sv = [];
      return hv.rows.forEach(((vv, zv) => {
        for (let Pv = 0; Pv < vv.length; Pv++) "." !== vv[Pv] && Sv.push((0, Ye.jsx)("rect", {
          x: Pv + 1,
          y: zv + 1,
          width: 1,
          height: 1,
          fill: "w" === vv[Pv] ? "#8fd3ff" : hv.colour
        }, `${Pv},${zv}`))
      })), (0, Ye.jsxs)("svg", {
        className: fS()("Baf2RxFace", {
          Big: Pv,
          Alarm: "alarm" === zv
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Ye.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Ye.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Sv]
      })
    }

    function NW(vv) {
      return ie(vv, "+").replace("+", "")
    }

    function lW(vv) {
      let {
        kind: zv,
        dims: Pv,
        cap: hv,
        disabled: Sv,
        compact: ev,
        resize: gv
      } = vv;
      const {
        t: pv
      } = (0, OS.x)(), {
        min: dv,
        max: Nv
      } = AP(zv), lv = Math.min(hv, Nv), Tv = [`${hW}rxWide`, `${hW}rxTall`, `${hW}rxDeep`], Wv = {
        w: String(Pv[0]),
        h: String(Pv[1]),
        d: String(Pv[2]),
        blocks: String(Vd(zv, Pv))
      };
      return (0, Ye.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Ye.jsx)("div", {
          className: "Baf2RxSteppers",
          children: Pv.map(((vv, zv) => {
            const ev = hv => {
                const Sv = [Pv[0], Pv[1], Pv[2]];
                Sv[zv] = vv + hv, gv(Sv)
              },
              Wv = vv >= lv;
            return (0, Ye.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Ye.jsx)("button", {
                type: "button",
                "aria-label": pv(`${hW}rxSmaller`),
                disabled: Sv || vv <= dv,
                onClick: () => {
                  ev(-1)
                },
                children: "\u2212"
              }), (0, Ye.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [vv, (0, Ye.jsx)("small", {
                  children: pv(Tv[zv])
                })]
              }), (0, Ye.jsx)("button", {
                type: "button",
                "aria-label": pv(`${hW}rxBigger`),
                disabled: Sv || Wv,
                onClick: () => {
                  ev(1)
                },
                children: Wv && hv < Nv ? "\ud83d\udd12" : "+"
              })]
            }, Tv[zv])
          }))
        }), !ev && (0, Ye.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === zv ? pv(`${hW}rxSizeLine`, {
            ...Wv,
            water: String(Kd(Pv))
          }) : pv(`${hW}batSizeLine`, Wv)
        })]
      })
    }

    function TW(vv) {
      let {
        on: zv,
        label: Pv,
        disabled: hv,
        locked: Sv,
        pending: ev,
        toggle: gv
      } = vv;
      return (0, Ye.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": zv,
        disabled: hv,
        "aria-disabled": Sv || void 0,
        className: fS()("Baf2RxSwitch", {
          On: zv,
          Locked: Sv,
          Pending: ev
        }),
        onClick: gv,
        children: [(0, Ye.jsx)("span", {
          className: "Baf2RxKnob"
        }), Pv]
      })
    }
    const WW = "buildAFactory2Game:",
      wW = .95;

    function aW(vv, zv) {
      return 0 !== (vv.baf2RxFlags & zv)
    }

    function sW(vv) {
      return "cryo" === vv ? Xv.l : Xv.m
    }

    function CW(vv) {
      var zv, Pv, hv, Sv, ev, gv, pv, dv, Nv;
      return vv.baf2RxCryo ? {
        zw: "cryo",
        usePerS: null !== (Sv = vv.baf2RxCryoUse) && void 0 !== Sv ? Sv : 0,
        needPerS: null !== (ev = vv.baf2RxCryoNeed) && void 0 !== ev ? ev : 0,
        inPerS: null !== (gv = vv.baf2RxCryoIn) && void 0 !== gv ? gv : 0,
        stored: null !== (pv = vv.baf2RxCryoStored) && void 0 !== pv ? pv : 0,
        makersShort: null !== (dv = vv.baf2RxMixersShort) && void 0 !== dv ? dv : 0,
        waterBeside: null !== (Nv = vv.baf2RxWaterUse) && void 0 !== Nv ? Nv : 0,
        pct: vv.baf2RxWater
      } : {
        zw: "water",
        usePerS: null !== (zv = vv.baf2RxWaterUse) && void 0 !== zv ? zv : 0,
        needPerS: null !== (Pv = vv.baf2RxWaterNeed) && void 0 !== Pv ? Pv : 0,
        inPerS: vv.baf2RxWaterIn,
        stored: vv.baf2RxWaterStored,
        makersShort: null !== (hv = vv.baf2RxCondensersShort) && void 0 !== hv ? hv : 0,
        waterBeside: 0,
        pct: vv.baf2RxWater
      }
    }

    function iW(vv) {
      const zv = "running" === vv.baf2RxState || "idle" === vv.baf2RxState;
      return vv.baf2RxFormed && vv.baf2RxTarget !== vv.baf2RxThrottle && zv ? cW(vv, vv.baf2RxTarget) : null
    }

    function cW(vv, zv) {
      const [Pv, hv, Sv, , , , ev, , gv] = vv.baf2RxStats, pv = aW(vv, wz), dv = CW(vv), Nv = dv.pct / 100, {
        gen: lv,
        out: Tv,
        load: Wv
      } = function(vv, zv, Pv, hv) {
        const Sv = Pv ? Jp : 1,
          ev = Math.min(vv.fuelHeat * Sv * Math.max(0, Math.min(1, zv)), vv.size * Sv);
        return {
          gen: ev,
          out: ev,
          load: Td(ev, vv.cooling, hv)
        }
      }({
        fuelHeat: Pv,
        cooling: hv,
        size: Sv
      }, zv / 100, pv, Nv), wv = wd(ev || Xp(...vv.baf2RxDims)), av = vv.baf2RxHeat, sv = Math.abs(Wv - av), Cv = function(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Xv.m;
        const ev = Pv ? Jp : 1,
          gv = Math.min(vv.fuelHeat * ev * zv / 100, vv.size * ev),
          pv = gv,
          dv = vv.fuelHeat * ev,
          Nv = vv.cooling * ld(hv.pct / 100),
          lv = dv > 0 && Nv < vv.size * ev ? Math.floor(100 * Nv / dv) : 100,
          Tv = gv * Sv - hv.inPerS;
        return {
          out: pv,
          hotAbove: lv >= 100 ? null : Math.max(0, lv),
          waterSecs: hv.pct >= 100 && Tv > 1e-6 ? Math.max(0, hv.stored) / Tv : null
        }
      }({
        fuelHeat: Pv,
        cooling: hv,
        size: Sv
      }, zv, pv, {
        pct: dv.pct,
        inPerS: dv.inPerS,
        stored: dv.stored
      }, sW(dv.zw));
      return {
        pct: zv,
        out: Tv,
        coolPerS: lv * sW(dv.zw),
        pelletsPerMin: gv > 0 ? Tv / gv * 60 : 0,
        settle: Wv,
        settleS: sv > 2 ? wv * Math.log(sv / 2) : 0,
        overheatS: Wv > 100 && av < 100 ? wv * Math.log((Wv - av) / (Wv - 100)) : null,
        hotAbove: Cv.hotAbove,
        coolantSecs: Cv.waterSecs
      }
    }

    function GW(vv) {
      return vv.baf2RxThrottle <= 0 && "running" !== vv.baf2RxState ? 0 : cW(vv, vv.baf2RxTarget).pelletsPerMin / 60
    }

    function mW(vv, zv) {
      if (vv <= 0 || zv <= 0) return 0;
      const Pv = vv / zv;
      return Pv < .25 ? 1 : Pv < .5 ? 2 : Pv < .8 ? 3 : 4
    }

    function jW(vv, zv) {
      const Pv = {};
      for (const [hv, Sv] of Object.entries(zv.params)) Pv[hv] = "time" === hv ? me(vv, Sv) : "amount" === hv ? Ud(Sv) : String(Math.round(Sv));
      return vv(zv.key, Pv)
    }

    function fW(vv, zv) {
      return {
        key: `${WW}${vv}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: zv
      }
    }

    function FW(vv) {
      var zv;
      const Pv = aW(vv, wz),
        hv = "running" === vv.baf2RxState,
        Sv = cd(vv),
        ev = vv.baf2RxHeat;
      var gv;
      if (hv && ev > yp) return {
        key: null !== (gv = Sv.fix) && void 0 !== gv ? gv : `${WW}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const pv = hv ? cW(vv, vv.baf2RxTarget).coolantSecs : null,
        dv = "cryo" === CW(vv).zw;
      if (null !== pv && pv >= 1 && pv <= 30) return fW(dv ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Nv = rp(Xp(...vv.baf2RxDims)).waste,
        lv = hv ? Yd(vv, Nv, GW(vv)).fullInS : null;
      if (null !== lv && lv <= 120 && vv.baf2RxWaste >= .5 * Nv) return fW("rxWarnWaste", "warn");
      if (null !== pv && pv >= 1) return fW(dv ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: pv
      });
      const Tv = "noWater" === vv.baf2RxState && ev > yp;
      if (vv.baf2RxDamage >= 1 && !Tv) return fW("rxDamagedHeals", "warn", {
        pct: vv.baf2RxDamage
      });
      if (vv.baf2RxCryoCut) return fW("rxFix_cryoCut", "warn");
      const Wv = CW(vv);
      if ("noWater" === vv.baf2RxState && "cryo" === Wv.zw) return fW("noWater" === vv.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const wv = Sv.fix === `${WW}rxFix_scramCool` || "idle" === vv.baf2RxState && vv.baf2RxTarget <= 0;
      if (wv && vv.baf2RxFuel <= 0) return fW("rxFix_noFuel", "warn");
      if (wv && vv.baf2RxWaterIn <= 0 && (null !== (zv = vv.baf2RxCryoIn) && void 0 !== zv ? zv : 0) <= 0) return fW("rxFix_noWater", "warn");
      const av = Sv.fix === `${WW}rxFix_scramCool` ? md(vv) : null;
      if (null !== av) return {
        key: av.key,
        params: {
          amount: av.amount
        },
        tone: "info"
      };
      if ("running" !== vv.baf2RxState && "idle" !== vv.baf2RxState && null !== Sv.fix) return {
        key: Sv.fix,
        params: {},
        tone: "scram" === vv.baf2RxState ? "info" : Tv ? "bad" : "warn"
      };
      var sv;
      if ("idle" === vv.baf2RxState && vv.baf2RxTarget <= 0) return {
        key: null !== (sv = Sv.fix) && void 0 !== sv ? sv : `${WW}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const Cv = vv.baf2RxCryoStarved;
      if ("cryo" === Wv.zw && Cv && Wv.needPerS > 0 && Wv.usePerS < wW * Wv.needPerS) return fW("noWater" === Cv ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const iv = "cryo" === Wv.zw,
        cv = Wv.needPerS > 0 && Wv.usePerS < wW * Wv.needPerS;
      if (iv ? cv || Wv.makersShort > 0 && Wv.pct < 100 : Wv.pct < 100) {
        const zv = iv && cv ? Math.floor(100 * Wv.usePerS / Wv.needPerS) : Math.min(100, Wv.pct);
        if (Wv.makersShort > 0) {
          return fW(`${iv?"rxCryoShortLine":"rxWaterShortLine"}${1===Wv.makersShort?"One":""}${!iv&&vv.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: zv,
            count: Wv.makersShort
          })
        }
        return fW(iv ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: zv
        })
      }
      const Gv = function(vv) {
        const [zv, Pv, hv] = vv.baf2RxStats, Sv = CW(vv), ev = Wd({
          fuelHeat: zv,
          cooling: Pv,
          size: hv
        }, "cryo" === Sv.zw ? Xv.g : 1, !0);
        return Math.max(0, ev * sW(Sv.zw) - Sv.inPerS)
      }(vv);
      if (Pv && Gv > 0) return fW("cryo" === Wv.zw ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Gv)
      });
      if (ev >= dd) return fW("rxHotLine", "warn");
      const mv = cW(vv, vv.baf2RxTarget);
      var jv;
      if (null !== mv.overheatS) return fW("rxWillOverheat", "bad", {
        pct: vv.baf2RxTarget,
        time: mv.overheatS,
        safe: null !== (jv = mv.hotAbove) && void 0 !== jv ? jv : 100
      });
      if (Math.abs(mv.settle - ev) >= 3) return fW("rxSettling", "info", {
        pct: vv.baf2RxTarget,
        heat: Math.round(mv.settle),
        time: mv.settleS
      });
      const fv = md(vv);
      if (null !== fv) return {
        key: fv.key,
        params: {
          amount: fv.amount
        },
        tone: "info"
      };
      const Fv = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== zv && ("running" !== zv || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === vv.rods ? `${ad}rxLimitNoRods` : `${ad}rxLimit_${pd(vv)}`
      }({
        rods: vv.baf2RxStats[3],
        ...Gd(vv)
      }, vv.baf2RxState, vv.baf2RxOut >= wW * vv.baf2RxMaxNow, !1);
      if (Fv === `${WW}rxLimit_size`) {
        const [zv, , Pv, hv] = vv.baf2RxStats, Sv = hv > 0 && zv > 0 ? Math.ceil(Pv / (zv / hv) - 1e-9) : hv, ev = vv.baf2RxDims.every((vv => vv >= AP("reactor").max));
        if (Sv < hv) return fW(ev ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Sv,
          have: hv
        });
        if (ev) return fW("rxLimit_sizeMax", "info")
      }
      return null !== Fv ? {
        key: Fv,
        params: {},
        tone: "info"
      } : fW("rxSteady", "ok", {
        pct: vv.baf2RxTarget
      })
    }

    function YW(vv) {
      var zv;
      if (vv.melted) return fW("rxMeltedBody", "bad");
      if (-1 === vv.bad) return fW("rxFix_noRoom", "warn");
      if (vv.bad > 0) return fW(1 === vv.bad ? "rxBadOne" : "rxBad", "warn", {
        count: vv.bad
      });
      if (vv.left > 0) {
        const zv = 1 === vv.left ? "One" : "";
        return fW(vv.canFill ? `rxPlanLeft${zv}` : `rxPlanLeftNoFill${zv}`, "info", {
          count: vv.left
        })
      }
      if (0 === vv.rods) return fW("rxLimitNoRods", "warn");
      const Pv = null !== (zv = vv.idle) && void 0 !== zv ? zv : 0;
      return Pv > 0 ? fW(1 === Pv ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: Pv
      }) : fW("rxPlanReady", "ok")
    }

    function nW(vv) {
      return Math.floor(Math.max(0, vv[1] - 1) / 2)
    }

    function OW(vv) {
      if (vv >= Pd && vv < hd) {
        const zv = vv - Pd;
        return {
          key: 0 === zv ? `${WW}rxWhy_rodAlone` : 1 === zv ? `${WW}rxWhy_rodOne` : `${WW}rxWhy_rod`,
          params: {
            count: String(zv),
            heat: String(qp * (1 + Ip * zv))
          }
        }
      }
      return vv === hd ? {
        key: `${WW}rxWhy_channel`,
        params: {
          amount: String(Zp)
        }
      } : vv === Sd ? {
        key: `${WW}rxWhy_deadChannel`,
        params: {}
      } : vv === ed ? {
        key: `${WW}rxWhy_graphite`,
        params: {}
      } : {
        key: `${WW}rxWhy_core`,
        params: {}
      }
    }
    const DW = "buildAFactory2Game:";

    function KW(vv, zv) {
      return 0 !== (vv.baf2RxFlags & zv)
    }

    function VW(vv) {
      let {
        status: zv,
        pending: Pv,
        store: hv,
        explain: Sv
      } = vv;
      const {
        t: ev
      } = (0, OS.x)(), gv = KW(zv, Wz), pv = zv.baf2RxTarget, dv = zv.baf2RxThrottle, Nv = function(vv) {
        return {
          press: () => {
            vv.throttlePress()
          },
          drag: zv => {
            vv.throttleDrag(zv)
          },
          release: () => {
            vv.throttleRelease()
          }
        }
      }(hv), lv = null === (Tv = cW(zv, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Tv - 10),
        red: Tv
      };
      var Tv;
      return (0, Ye.jsxs)("div", {
        className: fS()("Baf2RxThrottle", {
          Off: gv
        }),
        onClick: () => {
          gv && Sv(`${DW}rxWhy_startFirst`)
        },
        children: [(0, Ye.jsx)("span", {
          className: "HideNarrow",
          children: ev(`${DW}rxThrottle`)
        }), (0, Ye.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Ye.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: pv,
            disabled: gv,
            style: gv ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": ev(`${DW}rxThrottle`),
            onPointerDown: () => {
              Nv.press();
              const vv = () => {
                window.removeEventListener("pointerup", vv), window.removeEventListener("pointercancel", vv), Nv.release()
              };
              window.addEventListener("pointerup", vv), window.addEventListener("pointercancel", vv)
            },
            onKeyUp: Nv.release,
            onChange: vv => {
              Nv.drag(Number(vv.target.value))
            }
          }), (0, Ye.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${lv.amber}%, #ffb020 ${lv.amber}% ${lv.red}%, #ff3b30 ${lv.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Ye.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${dv}% + ${8*(1-dv/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Ye.jsxs)("b", {
          children: [`${pv}%`, (0, Ye.jsx)("i", {
            className: fS()("Baf2RxPendingDot", {
              On: Pv
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function UW(vv) {
      let {
        status: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)(), hv = cW(zv, zv.baf2RxTarget), Sv = CW(zv).zw, ev = Pv("cryo" === Sv ? `${DW}rxRateCryo` : `${DW}rxRateWater`, {
        rate: NW(hv.coolPerS)
      }), gv = Pv(`${DW}rxChain`, {
        pct: String(zv.baf2RxTarget),
        out: Ud(hv.out),
        heat: String(Math.round(hv.settle)),
        coolant: ev
      }), pv = null !== hv.coolantSecs ? hv.coolantSecs >= 1 ? Pv("cryo" === Sv ? `${DW}rxThrottleCryoOut` : `${DW}rxThrottleWaterOut`, {
        time: me(Pv, hv.coolantSecs)
      }) : Pv("cryo" === Sv ? `${DW}rxThrottleCryoDry` : `${DW}rxThrottleWaterDry`) : null;
      return (0, Ye.jsxs)("p", {
        className: "Baf2RxChain",
        children: [gv, null !== pv ? (0, Ye.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", pv]
        }) : (0, Ye.jsxs)("span", {
          children: [" \xb7 ", Pv(`${DW}rxChainPellets`, {
            amount: Rd(hv.pelletsPerMin)
          })]
        })]
      })
    }

    function RW(vv) {
      let {
        view: zv,
        store: Pv,
        explain: Sv,
        explainOnce: ev
      } = vv;
      const {
        t: gv
      } = (0, OS.x)(), {
        status: pv
      } = zv, [dv, Nv] = (0, hv.useState)(!1), lv = KW(pv, Wz), Wv = KW(pv, wz), wv = !KW(pv, Cz), av = pv.baf2RxHeat > 100;
      return (0, Ye.jsxs)(Ye.Fragment, {
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Ye.jsx)(VW, {
            status: pv,
            pending: zv.throttlePending,
            store: Pv,
            explain: Sv
          }), (0, Ye.jsx)(TW, {
            on: Wv,
            label: Wv ? gv(`${DW}rxOdLeft`, {
              time: me(gv, pv.baf2RxOdLeft)
            }) : gv(`${DW}rxOverdrive`),
            locked: wv,
            pending: 0 !== (zv.pendingFlags & wz),
            toggle: () => {
              wv ? Sv(`${DW}rxOverdriveTier`, {
                amount: String(Tv(13))
              }) : Wv ? Pv.setFlag(wz, !1) : zv.odConfirmed ? Pv.setFlag(wz, !0) : Nv(!0)
            }
          }), lv || zv.startGuard ? (0, Ye.jsx)(jg.l, {
            disabled: zv.busy.has("start") || zv.startGuard,
            onClick: () => {
              Pv.tap("start", (() => {
                Pv.setFlag(Wz, !1)
              }))
            },
            children: gv(zv.startGuard ? `${DW}rxStarting` : `${DW}rxStart`)
          }) : (0, Ye.jsx)("span", {
            className: fS()("Baf2RxScram", {
              Pulse: av
            }),
            children: (0, Ye.jsx)(jg.A, {
              onClick: () => {
                Pv.shutDown()
              },
              children: gv(`${DW}rxScram`)
            })
          })]
        }), (0, Ye.jsx)(UW, {
          status: pv
        }), dv && (0, Ye.jsx)(eW, {
          id: "baf2RxOdTitle",
          title: `${DW}rxOdConfirmTitle`,
          body: `${DW}rxOdConfirmBody`,
          yes: `${DW}rxOdConfirm`,
          cancel: () => {
            Nv(!1)
          },
          confirm: () => {
            Nv(!1), Pv.tap("odConfirm", (() => {
              Pv.confirmOverdrive(), Pv.setFlag(wz, !0)
            })), ev(`${DW}rxWhy_overdrive`)
          }
        })]
      })
    }

    function xW(vv) {
      let {
        view: zv,
        store: Pv,
        keepSize: hv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)(), {
        status: ev
      } = zv;
      return (0, Ye.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Ye.jsx)(lW, {
          kind: "reactor",
          dims: zv.dims,
          cap: ev.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: vv => {
            Pv.resize(vv)
          }
        }), hv ? (0, Ye.jsx)(jg.e, {
          onClick: hv,
          children: Sv(`${DW}rxKeepSize`)
        }) : (0, Ye.jsxs)(Ye.Fragment, {
          children: [(0, Ye.jsx)(TW, {
            on: zv.guide,
            label: Sv(`${DW}rxGuide`),
            toggle: () => {
              Pv.toggleGuide()
            }
          }), KW(ev, cz) && (0, Ye.jsx)(TW, {
            on: zv.starter,
            label: Sv(`${DW}rxStarter`),
            toggle: () => {
              Pv.toggleStarter()
            }
          }), (0, Ye.jsx)(zW, {
            status: ev,
            store: Pv,
            busy: zv.busy.has("fill")
          })]
        })]
      })
    }

    function tW(vv) {
      let {
        need: zv,
        kind: Pv = "reactor",
        explain: hv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)(), ev = zv.length <= 3, gv = zv.reduce(((vv, zv) => {
        let [, Pv] = zv;
        return vv + Pv
      }), 0);
      return (0, Ye.jsxs)("div", {
        className: fS()("Baf2RxParts", {
          Compact: !ev
        }),
        onClick: () => {
          hv("battery" === Pv ? `${DW}batWhy_store` : `${DW}rxShellHint`)
        },
        children: [gv > 0 && (0, Ye.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === gv ? Sv(`${DW}rxBlocksOne`) : Sv(`${DW}rxBlocks`, {
            blocks: String(gv)
          })
        }), 0 === zv.length ? (0, Ye.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Sv("battery" === Pv ? `${DW}batPartsDone` : `${DW}rxShellDone`)
        }) : fd(zv).map((vv => {
          let [zv, Pv, hv] = vv;
          const gv = function(vv) {
            const zv = Dd[vv];
            if (void 0 === zv) return null;
            const [Pv, hv, Sv] = nd[zv].colour.map((vv => Math.round(255 * vv)));
            return `rgb(${Pv}, ${hv}, ${Sv})`
          }(zv);
          return (0, Ye.jsxs)("span", {
            className: "Baf2RxChip",
            title: he(Sv, zv),
            children: [(0, Ye.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === gv ? {
                visibility: "hidden"
              } : {
                background: gv
              },
              title: Sv(`${DW}rxShopGhost`)
            }), (0, Ye.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Ye.jsx)(KS.b, {
                itemName: zv,
                amount: 0
              })
            }), (0, Ye.jsx)("span", {
              className: "Baf2RxChipName",
              children: ev ? `${Pv} ${pv=he(Sv,zv),pv.replace(/^(Reactor|Battery) (?=\S)/,"")}` : Pv
            }), hv >= Pv ? (0, Ye.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Ye.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: ev ? Sv(`${DW}rxShopShort`, {
                count: String(Pv - hv)
              }) : "\u2212" + (Pv - hv)
            })]
          }, zv);
          var pv
        }))]
      })
    }
    const qW = "buildAFactory2Game:";

    function IW(vv) {
      var zv, Pv, Sv, ev, gv, pv, dv;
      let {
        store: Nv,
        close: lv
      } = vv;
      const {
        t: Tv
      } = (0, OS.x)(), Wv = Lg(), wv = gW(Nv), {
        explained: av,
        explain: sv
      } = bT("baf2RxExplained"), Cv = (0, hv.useCallback)(((vv, zv) => {
        sv(Tv(vv, zv))
      }), [sv, Tv]), iv = null === wv || void 0 === wv ? void 0 : wv.status, cv = !0 === (null === iv || void 0 === iv ? void 0 : iv.baf2BatReadOnly), Gv = vv => {
        iv && Wv.send(Tz(iv.baf2BatAt, vv))
      }, [mv, jv, fv] = null !== (zv = null === wv || void 0 === wv ? void 0 : wv.dims) && void 0 !== zv ? zv : [0, 0, 0], Fv = Ud(null !== (Pv = null === wv || void 0 === wv ? void 0 : wv.GT) && void 0 !== Pv ? Pv : 0), Yv = !0 === (null === iv || void 0 === iv ? void 0 : iv.baf2BatFormed), nv = null !== (Sv = null === iv || void 0 === iv ? void 0 : iv.baf2BatStored) && void 0 !== Sv ? Sv : 0, Ov = Math.max(1, null !== (ev = null === iv || void 0 === iv ? void 0 : iv.baf2BatIslandCap) && void 0 !== ev ? ev : 1), Dv = Math.min(100, 100 * nv / Ov), Kv = null === iv || void 0 === iv ? void 0 : iv.baf2BatNetPerS, Vv = function(vv, zv, Pv) {
        return Pv > 0 && zv >= Pv ? "full" : void 0 !== vv && vv >= .05 ? "charging" : void 0 !== vv && vv <= -.05 && zv > 0 ? "draining" : "steady"
      }(Kv, nv, null !== (gv = null === iv || void 0 === iv ? void 0 : iv.baf2BatIslandCap) && void 0 !== gv ? gv : 0), Uv = null !== (pv = null === iv || void 0 === iv ? void 0 : iv.baf2BatMadePerS) && void 0 !== pv ? pv : 0, Rv = null !== (dv = null === iv || void 0 === iv ? void 0 : iv.baf2BatUsedPerS) && void 0 !== dv ? dv : 0;
      let xv, tv = {},
        qv = "info";
      if (iv)
        if (Yv) "charging" === Vv ? (xv = `${qW}batLine_charging`, tv = {
          time: me(Tv, (Ov - nv) / Math.max(.05, null !== Kv && void 0 !== Kv ? Kv : 0))
        }, qv = "ok") : "draining" === Vv ? (xv = `${qW}batLine_draining`, tv = {
          time: me(Tv, nv / Math.max(.05, -(null !== Kv && void 0 !== Kv ? Kv : 0)))
        }, qv = "warn") : xv = "full" === Vv ? `${qW}batLine_full` : nv <= 0 && Rv > 0 ? `${qW}batLine_empty` : `${qW}batLine_steady`;
        else {
          var Iv;
          const vv = YW({
            left: iv.baf2BatNeed.reduce(((vv, zv) => {
              let [, Pv] = zv;
              return vv + Pv
            }), 0),
            bad: iv.baf2BatBad,
            rods: 1,
            canFill: !0 === iv.baf2BatCanFill,
            melted: !1
          });
          xv = vv.key, tv = {
            count: String(null !== (Iv = vv.params.count) && void 0 !== Iv ? Iv : 0)
          }, qv = vv.tone
        }
      else xv = `${qW}batLine_steady`;
      const Qv = Math.max(Uv, Rv, 1);
      return (0, Ye.jsx)(mg.c, {
        close: lv,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Ye.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Ye.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Ye.jsx)(KS.b, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Ye.jsxs)("div", {
                children: [(0, Ye.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Tv(`${qW}batTitle`)
                }), iv && (0, Ye.jsxs)("p", {
                  className: fS()("Baf2RxSubtitle", {
                    good: Yv && "charging" === Vv,
                    warn: Yv && "draining" === Vv
                  }),
                  children: [mv, "\xd7", jv, "\xd7", fv, " \xb7 ", Tv(Yv ? `${qW}batState_${Vv}` : `${qW}rxSubPlanShort`)]
                })]
              })]
            }), (0, Ye.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [iv && !cv && (0, Ye.jsx)(pW, {
                kind: "battery",
                cap: Yv ? Fv : void 0,
                busy: null === wv || void 0 === wv ? void 0 : wv.busy.has("apart"),
                apart: () => {
                  Nv.tap("apart", (() => {
                    Gv("apart")
                  }))
                }
              }), (0, Ye.jsx)(jg.i, {
                onClick: lv
              })]
            })]
          }), wv && iv && (0, Ye.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Ye.jsxs)("div", {
              className: fS()("Baf2RxFlow Baf2BatFlow", {
                Plan: !Yv
              }),
              children: [(0, Ye.jsx)(JT, {
                kind: "Power",
                label: Tv(`${qW}batMade`),
                number: Yv ? `\u26a1 ${Ud(Uv)}/s` : "\u2014",
                note: Tv(`${qW}batMadeNote`),
                share: Yv ? Uv / Qv : void 0,
                onExplain: () => {
                  Cv(`${qW}batWhy_made`)
                }
              }), (0, Ye.jsx)(ET, {
                kind: "Power",
                step: Yv ? mW(Uv, Qv) : 0,
                planned: !Yv
              }), (0, Ye.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  Cv(`${qW}batWhy_store`)
                },
                children: [(0, Ye.jsx)(oT, {
                  max: 100,
                  bands: [{
                    upTo: Yv ? Dv : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Ye.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Ye.jsx)("b", {
                    className: "Baf2BatStored",
                    children: Yv ? Tv(`${qW}batStoredOf`, {
                      amount: Ud(nv),
                      cap: Ud(iv.baf2BatIslandCap)
                    }) : Tv(`${qW}batWillHold`, {
                      cap: Fv
                    })
                  }), (0, Ye.jsx)("span", {
                    children: Tv(`${qW}batAdds`, {
                      cap: Fv
                    })
                  }), Yv && (0, Ye.jsx)("small", {
                    children: Tv(`${qW}batBreakNote`, {
                      cap: Fv
                    })
                  })]
                })]
              }), (0, Ye.jsx)(ET, {
                kind: "Power",
                step: Yv ? mW(Rv, Qv) : 0,
                planned: !Yv
              }), (0, Ye.jsx)(JT, {
                kind: "Power",
                label: Tv(`${qW}batUsed`),
                number: Yv ? `\u26a1 ${Ud(Rv)}/s` : "\u2014",
                note: Tv(`${qW}batUsedNote`),
                share: Yv ? Rv / Qv : void 0,
                onExplain: () => {
                  Cv(`${qW}batWhy_used`)
                }
              })]
            }), (0, Ye.jsx)(rT, {
              text: Tv(xv, tv),
              tone: qv,
              explained: av
            }), cv ? (0, Ye.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Tv(`${qW}rxNotYours`)
            }) : !Yv && (0, Ye.jsxs)(Ye.Fragment, {
              children: [(0, Ye.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Ye.jsx)(lW, {
                  kind: "battery",
                  dims: wv.dims,
                  cap: iv.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: vv => {
                    Nv.resize(vv)
                  }
                }), (0, Ye.jsx)(TW, {
                  on: wv.guide,
                  label: Tv(`${qW}rxGuide`),
                  toggle: () => {
                    Nv.toggleGuide()
                  }
                }), iv.baf2BatCanFill && (0, Ye.jsx)(jg.j, {
                  disabled: !Fd("battery", iv.baf2BatNeed) || wv.busy.has("fill"),
                  onClick: () => {
                    Nv.tap("fill", (() => {
                      Gv("fill")
                    }))
                  },
                  children: Tv(`${qW}rxFill`)
                })]
              }), (0, Ye.jsx)(tW, {
                need: iv.baf2BatNeed,
                kind: "battery",
                explain: Cv
              })]
            })]
          })]
        })
      })
    }
    const QW = "buildAFactory2Game:",
      ZW = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function AW(vv, zv) {
      return vv === zd ? null : zv ? "#4a4440" : vv < hd ? ZW[vv - Pd] : vv === hd ? "#3fd0f0" : vv === Sd ? "#2c3e4c" : "#55585e"
    }

    function LW(vv) {
      let {
        inner: zv,
        looks: Pv,
        layer: hv,
        setLayer: Sv,
        glow: ev,
        melted: gv,
        explain: pv
      } = vv;
      const {
        t: dv
      } = (0, OS.x)(), [Nv, lv, Tv] = zv, Wv = Math.max(0, Math.min(lv - 1, hv)), wv = [];
      for (let sv = 0; sv < Tv; sv++)
        for (let vv = 0; vv < Nv; vv++) {
          var av;
          const zv = null !== (av = Pv[(Wv * Tv + sv) * Nv + vv]) && void 0 !== av ? av : zd,
            hv = AW(zv, gv),
            Sv = zv >= Pd && zv < hd;
          wv.push(null === hv ? (0, Ye.jsx)("circle", {
            cx: vv + .5,
            cy: sv + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${vv},${sv}`) : (0, Ye.jsx)("rect", {
            x: vv + .06,
            y: sv + .06,
            width: .88,
            height: .88,
            fill: hv,
            opacity: Sv && !gv ? .5 + .5 * ev : 1,
            onClick: vv => {
              vv.stopPropagation();
              const Pv = OW(zv);
              pv(Pv.key, Pv.params)
            }
          }, `${vv},${sv}`))
        }
      return (0, Ye.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Ye.jsx)("svg", {
          className: fS()("Baf2RxMapGrid", {
            Melted: gv
          }),
          viewBox: `0 0 ${Math.max(1,Nv)} ${Math.max(1,Tv)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": dv(`${QW}rxWhy_core`),
          onClick: () => {
            pv(`${QW}rxWhy_core`, {})
          },
          children: wv
        }), lv > 1 && (0, Ye.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Ye.jsx)("button", {
            type: "button",
            "aria-label": dv(`${QW}rxLayerDown`),
            disabled: Wv <= 0,
            onClick: () => {
              Sv(Wv - 1)
            },
            children: "\u25bc"
          }), (0, Ye.jsxs)("span", {
            children: [(0, Ye.jsx)("span", {
              className: "HideNarrow",
              children: dv(`${QW}rxLayer`, {
                n: String(Wv + 1),
                of: String(lv)
              })
            }), (0, Ye.jsx)("span", {
              className: "ShowNarrow",
              children: dv(`${QW}rxLayerShort`, {
                n: String(Wv + 1),
                of: String(lv)
              })
            })]
          }), (0, Ye.jsx)("button", {
            type: "button",
            "aria-label": dv(`${QW}rxLayerUp`),
            disabled: Wv >= lv - 1,
            onClick: () => {
              Sv(Wv + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const HW = "buildAFactory2Game:",
      MW = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Bp,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Cd,
        kind: "red"
      }],
      yW = [50, Bp, 100];

    function BW(vv) {
      let {
        stats: zv,
        t: Pv,
        explain: hv
      } = vv;
      const Sv = pd(zv),
        ev = Math.max(1, zv.fuelHeat, zv.cooling, zv.size),
        gv = [
          ["fuel", `${HW}rxBarRods`, zv.fuelHeat],
          ["cooling", `${HW}rxBarCooling`, zv.cooling],
          ["size", `${HW}rxBarSize`, zv.size]
        ];
      return (0, Ye.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          hv(`${HW}rxWhy_bars`)
        },
        children: [(0, Ye.jsx)("span", {
          className: "Baf2RxMostLine",
          children: Pv(`${HW}rxMost`, {
            amount: Ud(Math.min(zv.fuelHeat, zv.cooling, zv.size))
          })
        }), (0, Ye.jsx)("span", {
          className: "Baf2RxMostBars",
          children: gv.map((vv => {
            let [zv, hv, gv] = vv;
            return (0, Ye.jsxs)("span", {
              className: fS()("Baf2RxMostBar", zv, {
                Low: zv === Sv
              }),
              children: [(0, Ye.jsx)("small", {
                children: Pv(hv)
              }), (0, Ye.jsx)("i", {
                children: (0, Ye.jsx)("b", {
                  style: {
                    width: 100 * gv / ev + "%"
                  }
                })
              })]
            }, zv)
          }))
        })]
      })
    }

    function JW(vv) {
      var zv;
      let {
        view: Pv,
        heat: Sv,
        settle: ev,
        settleLine: gv,
        settleBad: pv,
        explain: dv
      } = vv;
      const {
        t: Nv
      } = (0, OS.x)(), {
        status: lv
      } = Pv, Tv = lv.baf2RxAt.join(","), [Wv, wv] = (0, hv.useState)((() => nW(Pv.inner)));
      (0, hv.useEffect)((() => {
        wv(nW(Pv.inner))
      }), [Tv, Pv.inner[1]]);
      const av = null !== (zv = Pv.plan) && void 0 !== zv ? zv : Gd(lv),
        sv = Pv.plan ? Pv.plan.powerPerUnit : lv.baf2RxStats[8],
        Cv = null === Sv ? null : "alarm" === (iv = sd(lv)) ? "red" : "hot" === iv ? "hot" : "warm" === iv ? "warm" : "cold";
      var iv;
      const cv = !lv.baf2RxFormed && function(vv, zv) {
          return 0 !== (vv.baf2RxFlags & zv)
        }(lv, az),
        Gv = lv.baf2RxDamage,
        mv = lv.baf2RxDamageTrend;
      return (0, Ye.jsxs)("div", {
        className: fS()("Baf2RxCore", null !== Cv && void 0 !== Cv ? Cv : "plan"),
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Ye.jsx)(LW, {
            inner: Pv.inner,
            looks: Pv.looks,
            layer: Wv,
            setLayer: wv,
            glow: lv.baf2RxFormed ? lv.baf2RxThrottle / 100 : 1,
            melted: cv,
            explain: dv
          }), (0, Ye.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              dv(`${HW}rxWhy_heat`)
            },
            children: [null !== Sv ? (0, Ye.jsxs)(Ye.Fragment, {
              children: [(0, Ye.jsx)("b", {
                children: Nv(`${HW}rxHeatPct`, {
                  pct: String(Sv)
                })
              }), (0, Ye.jsx)("span", {
                className: fS()("Baf2RxBand", Cv),
                children: Nv(`${HW}rxBand_${Cv}`)
              })]
            }) : (0, Ye.jsx)("b", {
              children: Nv(`${HW}rxHeat`)
            }), null !== gv && (0, Ye.jsx)("span", {
              className: fS()("Baf2RxSettle", {
                Bad: pv
              }),
              children: gv
            }), Gv >= 1 && (0, Ye.jsxs)("span", {
              className: fS()("Baf2RxDamage", mv),
              children: [Nv(`${HW}rxDamageLine`, {
                pct: String(Gv)
              }), " \xb7 ", Nv(`${HW}rxDamage_${mv}`), (0, Ye.jsx)("i", {
                children: (0, Ye.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Gv)}%`
                  }
                })
              })]
            })]
          }), (0, Ye.jsx)(oT, {
            max: Cd,
            bands: MW,
            ticks: yW,
            now: Sv,
            settle: ev,
            settleTone: pv ? "bad" : null,
            onExplain: () => {
              dv(`${HW}rxWhy_heat`)
            }
          })]
        }), (0, Ye.jsx)(BW, {
          stats: av,
          t: Nv,
          explain: dv
        }), sv > 0 && (0, Ye.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            dv(`${HW}rxWhy_perPellet`)
          },
          children: Nv(`${HW}rxPerPellet`, {
            amount: Ud(sv)
          })
        })]
      })
    }

    function EW(vv, zv) {
      var Pv;
      if (!vv.baf2RxStore) return {
        note: zv(`${HW}rxUpTo`, {
          amount: Ud(vv.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [hv, Sv] = vv.baf2RxStore, ev = Sv > 0 ? hv / Sv : 0, gv = String(Math.floor(100 * ev)), pv = null !== (Pv = vv.baf2RxStoreNetPerS) && void 0 !== Pv ? Pv : 0, dv = function(vv) {
        var zv, Pv;
        const [hv, Sv] = null !== (zv = vv.baf2RxStore) && void 0 !== zv ? zv : [0, 0], ev = null !== (Pv = vv.baf2RxStoreNetPerS) && void 0 !== Pv ? Pv : 0;
        return Sv > 0 && hv >= Sv - 1 ? "running" === vv.baf2RxState ? `${WW}rxStoreFull` : `${WW}rxStoreFullOnly` : ev > .05 ? `${WW}rxStoreLine` : ev < -.05 ? "running" === vv.baf2RxState ? `${WW}rxStoreUsesMore` : `${WW}rxStoreDraining` : `${WW}rxStorePct`
      }(vv);
      return {
        note: zv(dv, dv === `${HW}rxStoreLine` ? {
          pct: gv,
          time: me(zv, (Sv - hv) / pv)
        } : {
          pct: gv
        }),
        share: ev
      }
    }

    function oW(vv) {
      let {
        view: zv,
        explain: Pv,
        preview: hv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)(), {
        status: ev
      } = zv, gv = rp(Xp(...zv.dims)), pv = GW(ev), dv = Math.min(Math.round(ev.baf2RxFuel), gv.fuel), Nv = "running" === ev.baf2RxState, lv = Nv ? mW(ev.baf2RxOut, ev.baf2RxMaxNow) : 0, Tv = function(vv, zv, Pv) {
        const hv = CW(vv),
          Sv = "cryo" === hv.zw,
          ev = Pv ? Pv.coolantSecs : hv.pct >= 100 && vv.baf2RxOut >= 1 ? cW(vv, vv.baf2RxThrottle).coolantSecs : null;
        let gv, pv = !1;
        if (hv.pct < 100) {
          const Pv = 1 === hv.makersShort,
            ev = !Sv && vv.baf2RxCryoOpen ? "OrCryo" : "";
          gv = hv.makersShort > 0 ? zv(Sv ? `${HW}rxCryoAddMixer${Pv?"":"s"}` : `${HW}rxWaterAddCondenser${Pv?"":"s"}${ev}`, {
            count: String(hv.makersShort)
          }) : zv(`${HW}rxWaterNeeds`, {
            rate: NW(hv.needPerS)
          })
        } else if (null !== ev) gv = zv(`${HW}rxWaterRunsOut`, {
          time: me(zv, ev)
        });
        else if (hv.waterBeside > 0) gv = zv(`${HW}rxCryoPlusWater`, {
          rate: NW(hv.waterBeside)
        });
        else {
          const vv = function(vv) {
            return vv.inPerS <= 0 ? "rxWaterNoSupply" : vv.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(hv);
          pv = "rxWaterNoSupply" === vv, gv = zv(`${HW}${vv}`, {
            amount: Ud(hv.stored)
          })
        }
        return {
          kind: Sv ? "Cryo" : "Water",
          label: zv(Sv ? `${HW}rxCryo` : `${HW}rxWater`),
          number: `${NW(hv.usePerS)}/s`,
          preview: Pv ? `${NW(Pv.coolPerS)}/s` : null,
          note: gv,
          tone: "noWater" === vv.baf2RxState ? "danger" : pv ? "warn" : (dv = hv.pct, Nv = ev, dv < 100 ? "danger" : null === Nv ? null : Nv < 300 ? "danger" : "warn"),
          share: hv.pct / 100,
          why: Sv ? `${HW}rxWhy_cryo` : `${HW}rxWhy_water`,
          short: hv.pct < 100
        };
        var dv, Nv
      }(ev, Sv, hv), Wv = Yd(ev, gv.waste, pv), wv = EW(ev, Sv), av = cW(ev, ev.baf2RxTarget), sv = Nv && Math.abs(av.settle - ev.baf2RxHeat) >= 3, Cv = hv ? hv.pelletsPerMin / 60 : null;
      return (0, Ye.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ye.jsx)(JT, {
            kind: "Fuel",
            label: Sv(`${HW}rxFuel`),
            number: String(dv),
            preview: null !== Cv && Cv > 0 && ev.baf2RxFuel > 0 ? me(Sv, ev.baf2RxFuel / Cv) : null,
            note: ev.baf2RxFuel <= 0 ? Sv(`${HW}rxFuelEmpty`) : pv > 0 ? Sv(`${HW}rxFuelLeft`, {
              time: me(Sv, ev.baf2RxFuel / pv)
            }) : Sv(1 === dv ? `${HW}rxFuelPellet` : `${HW}rxFuelPellets`),
            tone: "noFuel" === ev.baf2RxState ? "danger" : ev.baf2RxFuel < 2 ? "warn" : null,
            share: ev.baf2RxFuel / gv.fuel,
            onExplain: () => {
              Pv(`${HW}rxWhy_fuel`)
            }
          }), (0, Ye.jsx)(JT, {
            kind: Tv.kind,
            label: Tv.label,
            number: Tv.number,
            preview: Tv.preview,
            note: Tv.note,
            tone: Tv.tone,
            share: Tv.share,
            onExplain: () => {
              Pv(Tv.why)
            }
          })]
        }), (0, Ye.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ye.jsx)(ET, {
            kind: "Fuel",
            step: lv,
            short: "noFuel" === ev.baf2RxState
          }), (0, Ye.jsx)(ET, {
            kind: Tv.kind,
            step: lv,
            short: Tv.short || "noWater" === ev.baf2RxState
          })]
        }), (0, Ye.jsx)(JW, {
          view: zv,
          heat: ev.baf2RxHeat,
          settle: Math.min(Cd, av.settle),
          settleLine: sv ? Sv(`${HW}rxHeatSettles`, {
            pct: String(Math.round(av.settle)),
            time: me(Sv, av.settleS)
          }) : null,
          settleBad: av.settle > 100,
          explain: Pv
        }), (0, Ye.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ye.jsx)(ET, {
            kind: "Power",
            step: lv
          }), (0, Ye.jsx)(ET, {
            kind: "Waste",
            step: Nv && ev.baf2RxFuel - ev.baf2RxPu > 0 ? lv : 0,
            short: Wv.full
          })]
        }), (0, Ye.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ye.jsx)(JT, {
            kind: "Power",
            label: Sv(`${HW}rxPowerOut`),
            number: `\u26a1 ${Ud(ev.baf2RxOut)}/s`,
            preview: hv ? Ud(hv.out) : null,
            note: wv.note,
            share: wv.share,
            onExplain: () => {
              Pv(`${HW}rxWhy_power`)
            }
          }), (0, Ye.jsx)(JT, {
            kind: "Waste",
            label: Sv(`${HW}rxWaste`),
            number: `${Math.floor(ev.baf2RxWaste)}/${gv.waste}`,
            note: Wv.full ? Sv(`${HW}rxWasteFull`) : null !== Wv.fullInS ? Sv(`${HW}rxWasteFullIn`, {
              time: me(Sv, Wv.fullInS)
            }) : Sv(`${HW}rxWasteSpent`),
            tone: "wasteFull" === ev.baf2RxState ? "danger" : Wv.full ? "warn" : null,
            share: ev.baf2RxWaste / gv.waste,
            onExplain: () => {
              Pv(`${HW}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function bW(vv) {
      let {
        view: zv,
        explain: Pv
      } = vv;
      const {
        t: hv
      } = (0, OS.x)(), Sv = zv.plan;
      if (!Sv) return null;
      const ev = Sv.fuelHeat <= 0 ? null : Sv.cooling > 0 ? Math.min(Cd, 100 * Sv.fuelHeat / Sv.cooling) : Cd,
        gv = hv(`${HW}rxPlanAtFull`);
      return (0, Ye.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Ye.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ye.jsx)(JT, {
            kind: "Fuel",
            label: hv(`${HW}rxFuel`),
            number: hv(`${HW}rxPlanPerMin`, {
              amount: Rd(Sv.pelletsPerMin)
            }),
            note: hv(`${HW}rxPlanPellets`),
            onExplain: () => {
              Pv(`${HW}rxWhy_fuel`)
            }
          }), (0, Ye.jsx)(JT, {
            kind: "Water",
            label: hv(`${HW}rxWater`),
            number: `${NW(Sv.waterPerS)}/s`,
            note: zv.status.baf2RxCryoOpen && Sv.waterPerS > 0 ? hv(`${HW}rxPlanOrCryo`, {
              rate: NW(Wd(Sv, Xv.g) * Xv.l)
            }) : gv,
            onExplain: () => {
              Pv(`${HW}rxWhy_water`)
            }
          })]
        }), (0, Ye.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ye.jsx)(ET, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Ye.jsx)(ET, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Ye.jsx)(JW, {
          view: zv,
          heat: null,
          settle: ev,
          settleLine: null === ev ? null : hv(`${HW}rxPlanHeat`, {
            pct: String(Math.round(ev))
          }),
          settleBad: null !== ev && ev > 100,
          explain: Pv
        }), (0, Ye.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ye.jsx)(ET, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Ye.jsx)(ET, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Ye.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ye.jsx)(JT, {
            kind: "Power",
            label: hv(`${HW}rxPowerOut`),
            number: `\u26a1 ${Ud(Sv.max)}/s`,
            note: gv,
            onExplain: () => {
              Pv(`${HW}rxWhy_power`)
            }
          }), (0, Ye.jsx)(JT, {
            kind: "Waste",
            label: hv(`${HW}rxWaste`),
            number: hv(`${HW}rxPlanPerMin`, {
              amount: Rd(Sv.pelletsPerMin)
            }),
            note: hv(`${HW}rxWasteSpent`),
            onExplain: () => {
              Pv(`${HW}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const rW = "buildAFactory2Game:",
      kW = {
        key: `${rW}rxWaiting`,
        params: {},
        tone: "info"
      };

    function XW(vv, zv) {
      return 0 !== (vv.baf2RxFlags & zv)
    }

    function uW(vv) {
      var zv, Pv;
      let {
        store: Sv,
        close: ev
      } = vv;
      const {
        t: gv
      } = (0, OS.x)(), pv = gW(Sv), {
        explained: dv,
        hinting: Nv,
        explain: lv,
        explainOnce: Tv
      } = bT("baf2RxExplained"), Wv = (0, hv.useCallback)(((vv, zv) => {
        lv(gv(vv, zv))
      }), [lv, gv]), wv = (0, hv.useCallback)(((vv, zv) => {
        Tv(vv, gv(vv, zv))
      }), [Tv, gv]), [av, sv] = (0, hv.useState)(!1), [Cv, iv] = (0, hv.useState)(!1), cv = null === pv || void 0 === pv ? void 0 : pv.status, Gv = null === cv || void 0 === cv ? void 0 : cv.baf2RxAt.join(","), mv = !0 === (null === cv || void 0 === cv ? void 0 : cv.baf2RxFormed);
      (0, hv.useEffect)((() => {
        iv(!1), sv(!1)
      }), [Gv, mv]), (0, hv.useEffect)((() => (Sv.opened(), () => {
        Sv.closed()
      })), [Sv]);
      const jv = void 0 !== cv && XW(cv, iz),
        fv = cv ? mv ? sd(cv) : null !== pv && void 0 !== pv && pv.plan ? function(vv, zv) {
          if (vv <= 0) return "off";
          if (zv <= 0) return "alarm";
          const Pv = 100 * vv / zv;
          return Pv < 50 ? "calm" : Pv < dd ? "warm" : Pv <= 100 ? "hot" : "alarm"
        }(pv.plan.fuelHeat, pv.plan.cooling) : "off" : "off",
        Fv = cv ? cd(cv) : null,
        Yv = pv ? pv.waiting ? kW : mv ? FW(pv.status) : function(vv) {
          var zv, Pv;
          const {
            status: hv
          } = vv;
          return YW({
            left: hv.baf2RxNeed.reduce(((vv, zv) => {
              let [, Pv] = zv;
              return vv + Pv
            }), 0),
            bad: hv.baf2RxBad,
            rods: null !== (zv = null === (Pv = vv.plan) || void 0 === Pv ? void 0 : Pv.rods) && void 0 !== zv ? zv : 0,
            canFill: XW(hv, sz),
            melted: XW(hv, az),
            idle: vv.looks.reduce(((vv, zv) => vv + (zv === Sd ? 1 : 0)), 0)
          })
        }(pv) : null,
        nv = Nv && null !== Yv && ("ok" === Yv.tone || "info" === Yv.tone),
        Ov = cv ? function(vv) {
          const zv = 0 !== (vv.baf2RxFlags & Wz),
            Pv = vv.baf2RxHeat < Ep;
          return 0 !== (vv.baf2RxFlags & az) || Pv && (zv || !vv.baf2RxFormed) ? null : vv.baf2RxFormed && !zv ? {
            key: `${ad}rxApartScram`,
            params: {}
          } : {
            key: `${ad}rxApartCooling`,
            params: {
              pct: String(Ep)
            }
          }
        }(cv) : null,
        [Dv, Kv, Vv] = null !== (zv = null === pv || void 0 === pv ? void 0 : pv.dims) && void 0 !== zv ? zv : [0, 0, 0],
        Uv = `${Dv}\xd7${Kv}\xd7${Vv}`;
      return (0, Ye.jsx)(mg.c, {
        close: ev,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Ye.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Ye.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ye.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Ye.jsx)(dW, {
                mood: fv
              }), (0, Ye.jsxs)("div", {
                children: [(0, Ye.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: gv(`${rW}rxTitle`)
                }), pv && (0, Ye.jsxs)("p", {
                  className: fS()("Baf2RxSubtitle", mv && (null === Fv || void 0 === Fv ? void 0 : Fv.tone)),
                  children: [mv && !jv ? (0, Ye.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": gv(`${rW}rxChangeSize`),
                    onClick: () => {
                      if (!cv) return;
                      const vv = XW(cv, Wz);
                      var zv;
                      (zv = {
                        scram: vv,
                        heat: cv.baf2RxHeat
                      }).scram && zv.heat < Ep ? sv(!0) : Wv(vv ? `${rW}rxResizeCooling` : `${rW}rxResizeHot`, {
                        pct: String(Ep)
                      })
                    },
                    children: [Uv, " \u270e"]
                  }) : Uv, " \xb7 ", gv(mv ? null !== (Pv = null === Fv || void 0 === Fv ? void 0 : Fv.label) && void 0 !== Pv ? Pv : `${rW}rxState_running` : `${rW}rxSubPlanShort`)]
                })]
              })]
            }), (0, Ye.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [pv && !jv && (0, Ye.jsx)(pW, {
                kind: "reactor",
                busy: pv.busy.has("apart"),
                whyNot: Ov ? () => {
                  Wv(Ov.key, Ov.params)
                } : null,
                apart: () => {
                  Sv.tap("apart", (() => {
                    Sv.send("apart")
                  }))
                }
              }), (0, Ye.jsx)(jg.i, {
                onClick: ev
              })]
            })]
          }), pv && Yv && (0, Ye.jsxs)("div", {
            className: "Baf2RxBody",
            children: [mv ? (0, Ye.jsx)(oW, {
              view: pv,
              explain: Wv,
              preview: iW(pv.status)
            }) : (0, Ye.jsx)(bW, {
              view: pv,
              explain: Wv
            }), (0, Ye.jsx)(rT, {
              text: nv ? `${jW(gv,Yv)} ${gv(`${rW}rxTapHint`)}` : jW(gv, Yv),
              tone: Yv.tone,
              explained: dv
            }), jv ? (0, Ye.jsxs)(Ye.Fragment, {
              children: [(0, Ye.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: gv(`${rW}rxNotYours`)
              }), (0, Ye.jsx)(PW, {
                status: pv.status,
                store: Sv,
                readOnly: !0
              })]
            }) : mv && !Cv ? (0, Ye.jsxs)(Ye.Fragment, {
              children: [(0, Ye.jsx)(RW, {
                view: pv,
                store: Sv,
                explain: Wv,
                explainOnce: wv
              }), void 0 !== pv.status.baf2RxLayout && uT(pv.status) && (0, Ye.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Ye.jsx)(PW, {
                  status: pv.status,
                  store: Sv,
                  readOnly: !1,
                  bare: !0
                }), (0, Ye.jsx)(zW, {
                  status: pv.status,
                  store: Sv,
                  busy: pv.busy.has("fill")
                })]
              })]
            }) : (0, Ye.jsxs)(Ye.Fragment, {
              children: [(0, Ye.jsx)(xW, {
                view: pv,
                store: Sv,
                keepSize: mv ? () => {
                  iv(!1)
                } : void 0
              }), jd(pv.dims, pv.status.baf2RxDims) && (0, Ye.jsx)(tW, {
                need: pv.status.baf2RxNeed,
                explain: Wv
              }), (0, Ye.jsx)(PW, {
                status: pv.status,
                store: Sv,
                readOnly: !1
              })]
            }), av && (0, Ye.jsx)(eW, {
              id: "baf2ResizeTitle",
              title: `${rW}rxResizeConfirmTitle`,
              body: `${rW}rxResizeConfirmBody`,
              yes: `${rW}rxChangeSize`,
              cancel: () => {
                sv(!1)
              },
              confirm: () => {
                sv(!1), iv(!0)
              }
            })]
          })]
        })
      })
    }
    class vw {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(vv) {
        this.view = vv;
        for (const zv of this.listeners) zv()
      }
      get() {
        return this.view
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
    }

    function zw(vv) {
      let {
        commands: zv,
        store: Pv,
        power: Sv,
        water: ev,
        reactor: gv,
        battery: pv,
        collider: dv,
        terminal: Nv,
        quests: lv,
        close: Tv,
        leave: Wv,
        askIslands: wv,
        showCore: av,
        openSocial: sv
      } = vv;
      const {
        userContext: Cv
      } = (0, xp.d)(), iv = Rp.featureFlags.useSocialFeatures && Cv.isLoggedIn(), [cv, Gv] = (0, hv.useState)((() => Pv.get()));
      (0, hv.useEffect)((() => Pv.subscribe((() => {
        Gv(Pv.get())
      }))), [Pv]);
      const mv = "islands" === (null === cv || void 0 === cv ? void 0 : cv.kind) ? cv.backToCore : void 0;
      return (0, Ye.jsxs)(Ag.Provider, {
        value: zv,
        children: ["core" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(TT, {
          view: cv.core,
          close: Tv,
          askIslands: wv
        }), "dropMap" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(sT, {
          message: cv.dropMap,
          quests: lv,
          close: Tv,
          leave: Wv
        }), "islands" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(xT, {
          message: cv.islands,
          arrivedAtMs: cv.arrivedAtMs,
          close: mv ? () => {
            av(mv)
          } : Tv,
          leave: Wv,
          openSocial: iv ? sv : null
        }), "quests" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(Vl, {
          store: lv,
          close: Tv
        }), "transfer" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(hl, {
          message: cv.transfer,
          arrivedAtMs: cv.arrivedAtMs,
          close: Tv,
          leave: Wv
        }), "power" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(Vg, {
          store: Sv,
          close: Tv
        }), "water" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(ap, {
          store: ev,
          close: Tv
        }), "reactor" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(uW, {
          store: gv,
          close: Tv
        }), "battery" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(IW, {
          store: pv,
          close: Tv
        }), "collider" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(iN, {
          store: dv,
          close: Tv
        }), "terminal" === (null === cv || void 0 === cv ? void 0 : cv.kind) && (0, Ye.jsx)(BT, {
          store: Nv,
          close: Tv,
          send: vv => {
            zv.send(vv)
          }
        })]
      })
    }
    var Pw = Pv(38020);

    function hw(vv, zv) {
      return vv.distSq - zv.distSq
    }
    class Sw {
      constructor() {
        this.list = [], this.pool = []
      }
      add(vv, zv, Pv, hv) {
        let Sv = this.pool[this.list.length];
        Sv || (Sv = {
          x: 0,
          y: 0,
          distSq: 0,
          element: zv,
          liftRem: Pv,
          dot: hv
        }, this.pool.push(Sv)), Sv.x = vv.x, Sv.y = vv.y, Sv.distSq = vv.distSq, Sv.element = zv, Sv.liftRem = Pv, Sv.dot = hv, this.list.push(Sv)
      }
    }
    class ew {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = vv, this.sizes = new WeakMap, this.observer = new ResizeObserver((vv => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const zv of vv) {
            const vv = zv.borderBoxSize[0];
            "dot" !== zv.target.dataset.crowded && 0 !== vv.inlineSize && 0 !== vv.blockSize && this.sizes.set(zv.target, {
              width: vv.inlineSize,
              height: vv.blockSize
            })
          }
        })), this.remPx = 16, this.Yw = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.mG = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.mG)
      }
      observe(vv) {
        this.observer.observe(vv)
      }
      unobserve(vv) {
        this.observer.unobserve(vv)
      }
      run(vv) {
        const zv = vv.list;
        zv.sort(hw);
        const Pv = this.pxPerVw,
          hv = this.pxPerVh;
        this.Yw.length = 0, this.hud && this.Yw.push(...this.hud.boxes(performance.now()));
        for (const ev of zv) {
          var Sv;
          const vv = this.sizes.get(ev.element);
          let zv = "no";
          if (vv && vv.width > 0) {
            const Sv = ev.x * Pv,
              gv = ev.y * hv - ev.liftRem * this.remPx;
            this.fit(Sv, gv, vv.width, vv.height) || (zv = ev.dot && this.fit(Sv, gv, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Sv = ev.element.dataset.crowded) && void 0 !== Sv ? Sv : "no") !== zv && ("no" === zv ? delete ev.element.dataset.crowded : ev.element.dataset.crowded = zv), "hidden" !== zv && (0, Pw.e)(ev.element, ev.x, ev.y)
        }
        zv.length = 0
      }
      fit(vv, zv, Pv, hv) {
        const Sv = vv - Pv / 2,
          ev = vv + Pv / 2,
          gv = zv - hv,
          pv = this.Yw;
        for (let dv = 0; dv < pv.length; dv += 4)
          if (Sv < pv[dv + 1] - 2 && ev > pv[dv] + 2 && gv < pv[dv + 3] - 2 && zv > pv[dv + 2] + 2) return !1;
        return pv.push(Sv, ev, gv, zv), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.mG)
      }
    }
    const gw = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class pw {
      constructor() {
        this.cards = gw.map((vv => document.getElementsByClassName(vv))), this.watched = gw.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(vv) {
        vv - this.refreshedAt > 1e3 && (this.refreshedAt = vv, this.stale = !0);
        for (let Pv = 0; Pv < this.cards.length; Pv++) {
          var zv;
          const vv = null !== (zv = this.cards[Pv][0]) && void 0 !== zv ? zv : null;
          vv !== this.watched[Pv] && this.watch(Pv, vv)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let vv = 0; vv < this.watched.length; vv++) this.watch(vv, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const vv = this.list;
        vv.length = 0;
        for (const zv of this.watched) {
          if (!zv || zv.closest(".NoRoom")) continue;
          const Pv = zv.getBoundingClientRect();
          let hv = Pv.top,
            Sv = Pv.bottom;
          if (zv === this.watched[0] && this.hud) {
            const vv = this.hud.getBoundingClientRect();
            hv = Math.max(hv, vv.top), Sv = Math.min(Sv, vv.bottom)
          }
          Pv.width > 0 && Sv > hv && vv.push(Pv.left, Pv.right, hv, Sv)
        }
      }
      watch(vv, zv) {
        const Pv = this.watched[vv];
        var hv, Sv;
        (Pv && this.sizes.unobserve(Pv), this.watched[vv] = zv, this.stale = !0, zv && this.sizes.observe(zv), 0 === vv) && (null === (hv = this.hud) || void 0 === hv || hv.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Sv = null === zv || void 0 === zv ? void 0 : zv.closest(".Baf2QuestHud")) && void 0 !== Sv ? Sv : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const dw = [0, 0, 0],
      Nw = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function lw(vv, zv, Pv, hv, Sv, ev) {
      let [gv, pv, dv] = hv;
      const Nv = (gv + .5 - Pv[0]) ** 2 + (pv - Pv[1]) ** 2 + (dv + .5 - Pv[2]) ** 2;
      let lv = null;
      Nv <= ev ** 2 && (dw[0] = gv + .5, dw[1] = pv + Sv, dw[2] = dv + .5, lv = zv.projectWorldPosToViewport(dw));
      const Tv = null !== lv && lv.x > -5 && lv.x < 105 && lv.y > -5 && lv.y < 105;
      return (0, Pw.h)(vv, !Tv), Tv ? (Nw.x = lv.x, Nw.y = lv.y, Nw.distSq = Nv, Nw) : null
    }
    class Tw {
      constructor(vv) {
        this.onElement = vv, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(vv) {
        const zv = [];
        for (let Pv = 0; Pv + 4 < vv.length; Pv += 5) {
          const hv = [vv[Pv], vv[Pv + 1], vv[Pv + 2]];
          zv.push({
            key: hv.join(","),
            pos: hv,
            status: hS[vv[Pv + 3]],
            kind: Dz[vv[Pv + 4]]
          })
        }
        this.markers = zv, this.keys = new Set(zv.map((vv => {
          let {
            key: zv
          } = vv;
          return zv
        }))), this.notify()
      }
      covers(vv) {
        return this.keys.has(vv)
      }
      get() {
        return this.markers
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      bind(vv) {
        let zv = this.refs.get(vv);
        return zv || (zv = zv => {
          const Pv = this.elements.get(vv);
          var hv, Sv;
          Pv && (null === (hv = this.onElement) || void 0 === hv || hv.call(this, Pv, !1));
          zv ? (this.elements.set(vv, zv), null === (Sv = this.onElement) || void 0 === Sv || Sv.call(this, zv, !0)) : (this.elements.delete(vv), this.refs.delete(vv))
        }, this.refs.set(vv, zv)), zv
      }
      onAfterRender(vv, zv, Pv) {
        for (const hv of this.markers) {
          const Sv = this.elements.get(hv.key);
          if (!Sv) continue;
          const ev = lw(Sv, vv, zv, hv.pos, 1.05, 24);
          ev && Pv.add(ev, Sv, .45, !0)
        }
      }
      notify() {
        for (const vv of this.listeners) vv()
      }
    }
    const Ww = {
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
    const ww = (0, hv.memo)((function(vv) {
        let {
          status: zv,
          kind: Pv,
          bindRef: hv
        } = vv;
        const {
          t: Sv
        } = (0, OS.x)(), ev = function(vv, zv) {
          var Pv;
          if ("noFuel" === vv) {
            var hv, Sv;
            const vv = null === (hv = tz[zv]) || void 0 === hv || null === (Sv = hv.fuels) || void 0 === Sv ? void 0 : Sv.find((vv => hP.includes(vv)));
            return null !== vv && void 0 !== vv ? vv : Ww.noFuel
          }
          return void 0 !== (null === (Pv = tz[zv]) || void 0 === Pv ? void 0 : Pv.cryoMade) ? "noOutlet" === vv ? "Fluid Pipe" : "noInput" === vv ? "Biomass" : Ww[vv] : Ww[vv]
        }(zv, Pv);
        return (0, Ye.jsxs)("div", {
          className: fS()("Baf2StallMarker", zv),
          ref: hv,
          hidden: !0,
          children: [ev && (0, Ye.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Ye.jsx)(KS.b, {
              itemName: ev,
              amount: 0
            })
          }), (0, Ye.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === zv ? "?" : "!"
          }), (0, Ye.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Sv(`buildAFactory2Game:stallTag_${zv}`)
          })]
        })
      })),
      aw = (0, hv.memo)((function(vv) {
        let {
          controller: zv
        } = vv;
        const [Pv, Sv] = (0, hv.useState)((() => zv.get()));
        return (0, hv.useEffect)((() => (Sv(zv.get()), zv.subscribe((() => {
          Sv(zv.get())
        })))), [zv]), (0, Ye.jsx)("div", {
          className: "Baf2StallMarkers",
          children: Pv.map((vv => (0, Ye.jsx)(ww, {
            status: vv.status,
            kind: vv.kind,
            bindRef: zv.bind(vv.key)
          }, vv.key)))
        })
      })),
      sw = sP.h + 150;
    class Cw {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(vv, zv) {
        const Pv = zv - vv;
        null === this.offset || Pv < this.offset ? this.offset = Pv : this.offset = Math.min(Pv, this.offset + .02 * (zv - this.sampledAt)), this.sampledAt = zv
      }
      toLocal(vv) {
        var zv;
        return vv + (null !== (zv = this.offset) && void 0 !== zv ? zv : 0) + sw
      }
    }
    var iw = Pv(38029);
    const Gw = 15 * Math.PI / 180,
      mw = Math.SQRT2,
      jw = [4, 2];

    function fw(vv, zv) {
      const Pv = [1 / 0, 1 / 0, 1 / 0],
        hv = [-1 / 0, -1 / 0, -1 / 0];
      for (const dv of vv)
        for (let vv = 0; vv < 3; vv++) Pv[vv] = Math.min(Pv[vv], dv[vv]), hv[vv] = Math.max(hv[vv], dv[vv]);
      const Sv = (Pv[0] + hv[0]) / 2,
        ev = (Pv[1] + hv[1]) / 2,
        gv = (Pv[2] + hv[2]) / 2;
      let pv = 0;
      for (const dv of vv) pv = Math.max(pv, Math.hypot(dv[0] - Sv, dv[1] - ev, dv[2] - gv));
      return {
        x: Sv,
        y: ev,
        z: gv,
        r: pv + zv
      }
    }

    function Fw(vv, zv, Pv) {
      const hv = zv.x - vv.x,
        Sv = zv.y - vv.y,
        ev = zv.z - vv.z,
        gv = Math.sqrt(hv * hv + Sv * Sv + ev * ev);
      if (gv <= zv.r + 8) return 1;
      const pv = zv.r / gv,
        dv = Math.sqrt(1 - pv * pv),
        Nv = dv < -vv.cosHalf,
        lv = (hv * vv.dx + Sv * vv.dy + ev * vv.dz) / gv;
      if (!Nv && lv < vv.cosHalf * dv - vv.sinHalf * pv) return 0;
      const Tv = Pv * mw * vv.frameMs * vv.pxPerBlock / (gv - zv.r);
      for (let Wv = 0; Wv < jw.length; Wv++)
        if (Tv * jw[Wv] <= 1) return jw[Wv];
      return 1
    }

    function Yw(vv, zv) {
      return {
        name: vv,
        at: zv,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const nw = [0, 0, 0];

    function Ow(vv, zv, Pv) {
      let [, hv, Sv, ev, gv, pv] = zv;
      const dv = sP.c * (null !== gv && void 0 !== gv ? gv : 1),
        Nv = [];
      for (let wv = 0; wv < hv.length; wv += 3) Nv.push([hv[wv] + .5, hv[wv + 1] + .65, hv[wv + 2] + .5]);
      const lv = [];
      for (let wv = 0; wv < Nv.length - 1; wv++) {
        const [vv, zv] = [Nv[wv], Nv[wv + 1]];
        lv.push([(vv[0] + zv[0]) / 2, (vv[1] + zv[1]) / 2, (vv[2] + zv[2]) / 2])
      }
      const Tv = Nv.slice(1, -1),
        Wv = new Uint8Array(Tv.length);
      for (const wv of null !== pv && void 0 !== pv ? pv : []) Wv[wv >> 1] |= 1 & wv ? 2 : 1;
      return {
        island: vv,
        length: Tv.length,
        loop: ev,
        cellsPerMs: dv,
        edges: lv,
        gd: Tv,
        bounds: fw([...lv, ...Tv], .3),
        changed: !0,
        culled: !1,
        hide: Wv,
        items: Sv.map((vv => {
          let [zv, hv] = vv;
          return Yw(zv, (0, sP.x)(zv, hv, Pv, dv).at)
        }))
      }
    }

    function Dw(vv, zv) {
      const {
        items: Pv
      } = vv;
      if (0 === Pv.length) return;
      const hv = vv.length / vv.cellsPerMs,
        Sv = Math.floor((zv - Pv[0].at) / hv) - 1;
      if (Sv > 0)
        for (const ev of Pv) ev.at += Sv * hv
    }

    function Kw(vv, zv) {
      const Pv = Math.min(Math.floor(zv), vv.length - 1),
        hv = vv.hide[Pv];
      return 0 !== hv && 0 !== (hv & (zv - Pv < .5 ? 1 : 2))
    }

    function Vw(vv, zv) {
      const Pv = Math.min(Math.floor(zv), vv.length - 1),
        hv = zv - Pv,
        Sv = hv < .5,
        ev = Sv ? vv.edges[Pv] : vv.gd[Pv],
        gv = Sv ? vv.gd[Pv] : vv.edges[Pv + 1],
        pv = Sv ? 2 * hv : 2 * hv - 1;
      nw[0] = ev[0] + (gv[0] - ev[0]) * pv, nw[1] = ev[1] + (gv[1] - ev[1]) * pv, nw[2] = ev[2] + (gv[2] - ev[2]) * pv
    }
    const Uw = Math.PI / 4;
    class Rw {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Cw, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.mG = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(vv) {
        const zv = performance.now();
        this.clock.sample(vv.baf2BeltLinesAt, zv), this.queue(vv.baf2BeltLinesAt, vv, 0, null, null, 0), this.applyDue(zv)
      }
      onMoves(vv) {
        const zv = performance.now(),
          Pv = vv.baf2BeltMovesAt;
        this.clock.sample(Pv, zv);
        for (const [hv, Sv, ev, gv] of vv.baf2BeltMoveList) null === Sv ? this.queue(Pv - ev, null, hv, null, null, null !== gv && void 0 !== gv ? gv : 0) : this.queue(Pv - ev, null, hv, Sv, null !== gv && void 0 !== gv ? gv : null, 0);
        this.applyDue(zv)
      }
      start(vv) {
        this.pool = new iw.e(vv, {
          scale: .3,
          yaw: Uw
        }, 64), this.mG(), window.addEventListener("resize", this.mG)
      }
      onAfterRender(vv) {
        const {
          pool: zv
        } = this;
        if (!zv) return;
        const Pv = performance.now(),
          hv = Pv - this.lastRenderAt;
        this.lastRenderAt = Pv, hv < 100 && (this.frameMs += .1 * (hv - this.frameMs));
        const Sv = Pv + this.frameMs;
        this.applyDue(Sv);
        const ev = vv.cameraPosition,
          gv = zv.follow(ev);
        this.setView(vv, ev);
        const pv = this.frame++;
        for (let dv = 0; dv < this.shown.length; dv++) {
          const vv = this.shown[dv],
            Pv = Fw(this.view, vv.bounds, vv.cellsPerMs),
            hv = vv.culled && 0 !== Pv;
          if (vv.culled = 0 === Pv, !gv && !vv.changed && !hv && (0 === Pv || (pv + dv) % Pv !== 0)) continue;
          vv.changed = !1, vv.loop && (Dw(vv, Sv), (0, sP.q)(vv.items, vv.length, Sv, vv.cellsPerMs));
          let ev = vv.length;
          for (let pv = 0; pv < vv.items.length; pv++) {
            const Pv = vv.items[pv],
              hv = (0, sP.z)(Pv.at, ev, Sv, vv.cellsPerMs);
            if (ev = hv - sP.k, Kw(vv, hv)) {
              null === Pv.kind || Pv.hidden || (Pv.kind.hide(Pv.slot), Pv.hidden = !0);
              continue
            }
            let dv = Pv.kind;
            if (null === dv) {
              if (dv = zv.kindOf(Pv.name), null === dv) continue;
              Pv.kind = dv, Pv.slot = dv.take(), Pv.hidden = !0, Pv.drawn = NaN
            } else if (hv === Pv.drawn && !Pv.hidden && !gv) continue;
            Vw(vv, hv), dv.write(Pv.slot, nw[0], nw[1], nw[2]), Pv.hidden = !1, Pv.drawn = hv
          }
        }
        zv.commit()
      }
      dispose() {
        var vv;
        window.removeEventListener("resize", this.mG), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (vv = this.pool) || void 0 === vv || vv.dispose(), this.pool = null
      }
      setView(vv, zv) {
        const {
          cameraDir: Pv,
          lastDir: hv
        } = this, Sv = vv.cameraDirection;
        for (let lv = 0; lv < 3; lv++) hv[lv] = Pv[lv], Pv[lv] = Sv[lv];
        const ev = Pv[0] * hv[0] + Pv[1] * hv[1] + Pv[2] * hv[2],
          gv = Number.isNaN(ev) ? 0 : Math.acos(Math.min(1, Math.max(-1, ev))),
          {
            width: pv,
            height: dv
          } = this,
          Nv = vv.tanHalfFovX;
        ! function(vv, zv, Pv, hv, Sv, ev, gv) {
          let pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          vv.x = zv[0], vv.y = zv[1], vv.z = zv[2], vv.dx = Pv[0], vv.dy = Pv[1], vv.dz = Pv[2];
          const dv = Math.min(Math.PI, Math.atan(Math.sqrt(hv * hv + Sv * Sv)) + Gw + pv);
          vv.cosHalf = Math.cos(dv), vv.sinHalf = Math.sin(dv), vv.pxPerBlock = ev / (2 * Sv), vv.frameMs = gv
        }(this.view, zv, Pv, Nv, Nv * dv / pv, dv * window.devicePixelRatio, this.frameMs, gv)
      }
      queue(vv, zv, Pv, hv, Sv, ev) {
        const gv = Math.max(this.clock.toLocal(vv), this.lastPendingAt);
        this.lastPendingAt = gv, this.pending.push({
          at: gv,
          lines: zv,
          line: Pv,
          name: hv,
          pos: Sv,
          idx: ev
        })
      }
      applyDue(vv) {
        const {
          pending: zv
        } = this;
        for (; this.pendingHead < zv.length && zv[this.pendingHead].at <= vv;) {
          const vv = zv[this.pendingHead++];
          if (vv.lines) this.applyLines(vv.lines, vv.at), vv.lines = null;
          else {
            const zv = this.lines.get(vv.line);
            zv && this.applyMove(zv, vv, vv.at)
          }
        }
        this.pendingHead === zv.length ? (zv.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > zv.length && (zv.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(vv, zv) {
        this.clearIsland(vv.baf2BeltIsland);
        for (const Pv of vv.baf2BeltLineList) this.lines.set(Pv[0], Ow(vv.baf2BeltIsland, Pv, zv));
        this.shown = [...this.lines.values()]
      }
      applyMove(vv, zv, Pv) {
        let {
          name: hv,
          pos: Sv,
          idx: ev
        } = zv;
        vv.changed = !0, vv.loop && (Dw(vv, Pv), (0, sP.q)(vv.items, vv.length, Pv, vv.cellsPerMs)), null !== hv && null !== Sv ? (0, sP.u)(vv.items, vv.length, Yw(hv, Pv), Sv, Pv, vv.cellsPerMs) : null !== hv ? vv.items.push(Yw(hv, Pv)) : vv.items.length > ev && this.release((0, sP.D)(vv.items, vv.length, Pv, vv.cellsPerMs, ev))
      }
      clearIsland(vv) {
        for (const [zv, Pv] of this.lines)
          if (Pv.island === vv) {
            for (const vv of Pv.items) this.release(vv);
            this.lines.delete(zv)
          }
      }
      release(vv) {
        null !== vv.kind && (vv.kind.release(vv.slot), vv.kind = null, vv.slot = -1, vv.hidden = !0, vv.drawn = NaN)
      }
    }
    var xw = Pv(36132),
      tw = Pv(38042);

    function qw(vv) {
      let {
        depth: zv,
        store: Pv,
        t: Sv
      } = vv;
      const ev = function(vv) {
        const [zv, Pv] = (0, hv.useState)(vv.lastPlayerY());
        return (0, Sl.g)(IS, Pv), (0, hv.useEffect)((() => {
          Pv(vv.lastPlayerY())
        }), [vv]), zv
      }(Pv);
      if (null === ev) return null;
      const [gv, pv] = zv, dv = ev > gv ? gv : null !== pv && ev < pv ? pv : null, Nv = {
        y: Ge(ev),
        target: null === dv ? "" : Ge(dv)
      };
      return (0, Ye.jsx)("span", {
        className: fS()("Baf2QuestDepth", {
          Reached: null === dv
        }),
        children: Sv(`${dl}${null===dv?"questDepthReached":"questDepth"}`, Nv)
      })
    }

    function Iw(vv) {
      let {
        also: zv,
        view: Pv,
        t: hv
      } = vv;
      return (0, Ye.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Ye.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Ye.jsx)("strong", {
            children: hv(`${dl}questAlsoDownHere`)
          }), (0, Ye.jsx)("span", {
            className: "Baf2QuestChips",
            children: zv.map((vv => {
              let [zv, Sv, ev, gv] = vv;
              return (0, Ye.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": hv(`${dl}questAlsoItem`, {
                  item: ll(hv, Pv.itemNames[zv], zv),
                  have: String(Sv),
                  need: String(ev)
                }),
                children: [(0, Ye.jsx)(wl, {
                  item: zv
                }), (0, Ye.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Sv}/${ev}`
                }), null !== gv && (0, Ye.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: hv(`${dl}questAlsoDepth`, {
                    y: Ge(gv)
                  })
                })]
              }, zv)
            }))
          })]
        })]
      })
    }
    var Qw = Pv(3148);

    function Zw(vv) {
      let {
        expanded: zv,
        inventoryOpen: Pv,
        children: Sv
      } = vv;
      const ev = (0, hv.useRef)(null);
      return (0, hv.useEffect)((() => {
        const vv = ev.current,
          zv = null === vv || void 0 === vv ? void 0 : vv.closest(".RightElements"),
          hv = null === vv || void 0 === vv ? void 0 : vv.firstElementChild;
        if (!vv || !zv || !hv) return;
        return (0, tw.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [zv, hv], (() => {
          const Sv = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Sv.length) return;
          const ev = Math.max(...Sv.map((vv => vv.getBoundingClientRect().bottom))),
            gv = zv.getBoundingClientRect(),
            pv = Pv ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (pv) {
            const zv = parseFloat(getComputedStyle(hv).marginLeft) + parseFloat(getComputedStyle(hv).marginRight),
              Pv = gv.right - pv.getBoundingClientRect().right - 8 - zv;
            vv.style.setProperty("--baf2-quest-room", `${Pv}px`), vv.classList.toggle("NoRoom", Pv < 150)
          } else vv.style.removeProperty("--baf2-quest-room"), vv.classList.remove("NoRoom");
          const dv = ev - gv.top + 8,
            Nv = function(vv, zv, Pv) {
              const hv = zv.getBoundingClientRect(),
                Sv = vv.getBoundingClientRect(),
                ev = (0, Qw.h)(Sv.left, Sv.right, hv.top + Pv);
              if (null !== ev && ev < hv.bottom) return ev - hv.top;
              return hv.height - (parseFloat(getComputedStyle(zv).paddingBottom) || 0)
            }(vv, zv, dv) - 8,
            lv = window.innerHeight / 2 - gv.top,
            {
              top: Tv,
              maxHeight: Wv
            } = function(vv, zv, Pv, hv, Sv) {
              const ev = Math.min(Pv, Math.max(0, zv - vv)),
                gv = Sv ? vv : Math.max(vv, Math.min(hv - ev / 2, zv - ev));
              return {
                top: gv,
                maxHeight: Math.max(0, zv - gv)
              }
            }(dv, Nv, function(vv) {
              const zv = vv.firstElementChild,
                Pv = zv ? zv.scrollHeight - zv.clientHeight : 0;
              return vv.getBoundingClientRect().height + Math.max(0, Pv)
            }(hv), lv, fe());
          vv.style.top = `${Tv}px`, vv.style.maxHeight = `${Wv}px`
        }))
      }), [Pv]), (0, Ye.jsx)("div", {
        ref: ev,
        className: fS()("Baf2QuestHud", {
          Expanded: zv
        }),
        children: Sv
      })
    }

    function Aw(vv) {
      let {
        amount: zv,
        t: Pv
      } = vv;
      return (0, Ye.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Ye.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Ye.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: Pv(`${dl}questStepsDone`, {
            amount: String(zv)
          })
        })]
      })
    }

    function Lw(vv) {
      let {
        pulse: zv
      } = vv;
      return 0 === zv ? null : (0, Ye.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, zv)
    }

    function Hw(vv) {
      var zv;
      let {
        store: Pv
      } = vv;
      const Sv = (0, Sl.j)(qS, Pv.get()),
        [ev, gv] = (0, hv.useState)(!1),
        {
          t: pv
        } = (0, OS.x)(),
        dv = function() {
          const [vv, zv] = (0, hv.useState)(fe);
          return (0, hv.useEffect)((() => (zv(fe()), Fe(zv))), []), vv
        }(),
        {
          openInGameMenuName: Nv,
          openEverythingMenuName: lv
        } = (0, GS.i)(["openInGameMenuName", "openEverythingMenuName"]),
        Tv = "inventory" === Nv && null === lv,
        Wv = null !== Nv && !Tv || null !== lv;
      if (! function(vv) {
          return null !== vv.name || null !== vv.side
        }(Sv) || Wv || "off" === Sv.tutorial) return null;
      const wv = MS(Sv.rows),
        av = wv.filter((vv => vv.done)).length,
        sv = function(vv, zv) {
          const Pv = JS(vv);
          let hv = 0;
          return vv.filter(((vv, Sv) => !!vv.justFinished || !(vv.done || Sv < Pv || hv > zv) && (hv++, !0)))
        }(Sv.rows, dv ? 0 : 2),
        Cv = dv ? sv : function(vv, zv) {
          const Pv = zv.filter((vv => !vv.justFinished));
          if (Pv.length < 2) return [...zv];
          const hv = vv.indexOf(Pv[0]),
            Sv = vv.indexOf(Pv[Pv.length - 1]),
            ev = new Set(MS(vv));
          return vv.filter(((vv, Pv) => zv.includes(vv) || vv.done && ev.has(vv) && Pv > hv && Pv < Sv))
        }(Sv.rows, sv),
        iv = ev ? Sv.rows : Cv,
        cv = ev || dv ? [] : function(vv, zv) {
          const Pv = new Array(zv.length + 1).fill(0),
            hv = new Set(MS(vv));
          let Sv = 0;
          for (const ev of vv) Sv < zv.length && ev === zv[Sv] ? Sv++ : ev.done && hv.has(ev) && Pv[Sv]++;
          return Pv
        }(Sv.rows, Cv),
        Gv = ev || Cv.length < Sv.rows.length || null !== Sv.reward,
        mv = HS(Sv),
        jv = mv ? pv(`${dl}questLineComplete`) : Sv.tier ? Cl(pv, Sv.tier) : pv(`${dl}currentQuest`),
        fv = function(vv) {
          var zv, Pv;
          if (HS(vv)) return null;
          const hv = null === (zv = vv.chapters) || void 0 === zv ? void 0 : zv.find((zv => {
            let [Pv] = zv;
            return Pv === vv.tier
          }));
          if (!hv) return null;
          const Sv = hv[1].filter((vv => !vv[4]));
          if (0 === Sv.length) return null;
          const ev = null === (Pv = vv.name) || void 0 === Pv ? void 0 : Pv[0],
            gv = vv => Sv.findIndex((zv => zv[0] === ev && (!vv || !zv[3]))),
            pv = gv(!0),
            dv = pv >= 0 ? pv : gv(!1);
          if (dv >= 0) return [dv + 1, Sv.length];
          const Nv = Sv.filter((vv => vv[3])).length;
          return [Math.min(Nv + 1, Sv.length), Sv.length]
        }(Sv);
      return (0, Ye.jsx)(xw.g, {
        placement: "topRight",
        children: (0, Ye.jsx)(Zw, {
          expanded: ev,
          inventoryOpen: Tv,
          children: (0, Ye.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: Nl,
            children: [null !== Sv.name && (0, Ye.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Ye.jsx)(Lw, {
                pulse: Sv.pulse
              }), (0, Ye.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Ye.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [jv, fv && (0, Ye.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": pv(`${dl}questPlaceLabel`, {
                      n: String(fv[0]),
                      total: String(fv[1])
                    }),
                    children: pv(`${dl}questPlace`, {
                      n: String(fv[0]),
                      total: String(fv[1])
                    })
                  }), Sv.tier && Sv.core && !mv && (0, Ye.jsx)(il, {
                    core: Sv.core,
                    t: pv
                  })]
                })
              }), (0, Ye.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: pv(`${dl}${Sv.name[0]}`, Tl(Sv.name[1]))
              }), (wv.length > 1 || Gv) && (0, Ye.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [wv.length > 1 && (0, Ye.jsx)(cl, {
                  rows: wv,
                  t: pv
                }), Gv && (0, Ye.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": ev,
                  onClick: () => {
                    gv(!ev)
                  },
                  children: [(0, Ye.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: pv(`${dl}questStepsToggle`, {
                      done: String(av),
                      total: String(wv.length)
                    })
                  }), (0, Ye.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: ev ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Ye.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [iv.map(((vv, zv) => {
                  var ev;
                  const gv = vv.current && Sv.depth;
                  return (0, Ye.jsxs)(hv.Fragment, {
                    children: [(null !== (ev = cv[zv]) && void 0 !== ev ? ev : 0) > 0 && (0, Ye.jsx)(Aw, {
                      amount: cv[zv],
                      t: pv
                    }), (0, Ye.jsx)(Gl, {
                      row: vv,
                      view: Sv,
                      t: pv,
                      extra: gv && (0, Ye.jsx)(qw, {
                        depth: gv,
                        store: Pv,
                        t: pv
                      })
                    })]
                  }, vv.id)
                })), (null !== (zv = cv[iv.length]) && void 0 !== zv ? zv : 0) > 0 && (0, Ye.jsx)(Aw, {
                  amount: cv[iv.length],
                  t: pv
                }), Sv.also.length > 0 && (0, Ye.jsx)(Iw, {
                  also: Sv.also,
                  view: Sv,
                  t: pv
                })]
              }), ev && Sv.reward && (0, Ye.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [pv(`${dl}questReward`), (0, Ye.jsx)(wl, {
                  item: Sv.reward
                }), ll(pv, Sv.itemNames[Sv.reward], Sv.reward)]
              })]
            }), Sv.side && (0, Ye.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [AS(Sv, Date.now()) && (0, Ye.jsx)(Lw, {
                pulse: Sv.sideCameUpAt
              }), (0, Ye.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: pv(`${dl}questSide`)
              }), (0, Ye.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: pv(`${dl}${Sv.side.name[0]}`, Tl(Sv.side.name[1]))
              }), (0, Ye.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Ye.jsx)(Gl, {
                  row: Sv.side.row,
                  view: Sv,
                  t: pv
                })
              })]
            })]
          })
        })
      })
    }
    const Mw = "baf2ToastView";
    class yw {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = vv, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: vv,
          holdMs: zv
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const vv = this.dropCovered();
          vv && this.show(vv.message, vv.holdMs)
        }), 250));
        const Pv = this.dropCovered();
        null !== Pv && (Pv.holdMs > 0 || "baf2ToastCelebrate" === Pv.message.baf2ToastStyle) && "baf2ToastCelebrate" !== vv.baf2ToastStyle && this.show(Pv.message, Pv.holdMs);
        const hv = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== vv.baf2ToastStyle && hv > 0) return this.pending = {
          message: vv,
          holdMs: zv
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const vv = this.pending;
          this.pending = null, vv && this.present(vv.message, vv.holdMs)
        }), hv));
        this.present(vv, zv)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(vv, zv) {
        this.clearTimers(), this.pending = null;
        const Pv = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: vv.baf2ToastText,
          style: vv.baf2ToastStyle,
          swapped: Pv,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === vv.baf2ToastStyle ? 1500 : zv), this.zC();
        const hv = Math.min(8e3, Math.max(1e3, vv.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), hv)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.zC(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.zC()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const vv = this.covering;
        return this.covering = null, vv
      }
      zC() {
        xS.j.zC(Mw, this.view, !0)
      }
    }
    var Bw = Pv(62);
    const Jw = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Ew(vv) {
      let {
        store: zv
      } = vv;
      const Pv = (0, Sl.j)(Mw, zv.get()),
        {
          openInGameMenuName: hv,
          openEverythingMenuName: Sv
        } = (0, GS.i)(["openInGameMenuName", "openEverythingMenuName"]),
        ev = Pv && (0, Ye.jsxs)("div", {
          className: fS()("Baf2Toast", Jw[Pv.style], {
            Swapped: Pv.swapped,
            Leaving: Pv.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === Pv.style && (0, Ye.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Ye.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Ye.jsx)(VS.c, {
              text: Pv.text
            })
          })]
        }, Pv.id);
      return null !== hv && null === Sv ? (0, Bw.createPortal)((0, Ye.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: ev
      }), document.body) : (0, Ye.jsx)(xw.g, {
        children: ev
      })
    }
    const ow = "baf2AreaView";
    class bw {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Vp = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Vp = null
      }
      arrive(vv, zv) {
        zv && function(vv) {
          return "home" === vv.baf2AreaPlace && void 0 !== vv.baf2AreaNameText
        }(vv) ? this.Vp = vv : this.show(vv)
      }
      release() {
        const vv = this.Vp;
        null !== vv && this.show(vv)
      }
      show(vv) {
        this.clearTimer(), this.Vp = null;
        const zv = void 0 === vv.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: vv,
          ms: zv
        }, this.zC(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.zC()
        }), zv)
      }
      dispose() {
        this.clearTimer(), this.Vp = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      zC() {
        xS.j.zC(ow, this.view, !0)
      }
    }

    function rw(vv) {
      var zv;
      let {
        store: Pv
      } = vv;
      const {
        t: hv
      } = (0, OS.x)(), Sv = (0, Sl.j)(ow, Pv.get());
      if (!Sv) return null;
      const {
        area: ev
      } = Sv, gv = ev.baf2AreaResetMinutes;
      return (0, Ye.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": ev.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Sv.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Ye.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), ev.baf2AreaHeading && (0, Ye.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: hv(ev.baf2AreaHeading)
        }), (0, Ye.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (zv = ev.baf2AreaNameText) && void 0 !== zv ? zv : hv(ev.baf2AreaName)
        }), ev.baf2AreaNote && (0, Ye.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: hv(ev.baf2AreaNote)
        }), void 0 !== gv && (0, Ye.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: hv("buildAFactory2Game:areaWildsReset", {
            time: me(hv, 60 * gv)
          })
        })]
      }, Sv.id)
    }
    const kw = "baf2GearGauge";
    class Xw {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      rG(vv) {
        var zv;
        if (this.clearLinger(), null === vv.gearPowerKind) return void this.set(null);
        const Pv = "jetpack" === vv.gearPowerKind && (hv = vv.gearChargeState, Sv = vv.gearCharge, "flying" === hv || "charging" === hv || "outOfCharge" === hv || "ceiling" === hv || "offPlot" === hv || "noPower" === hv && Sv <= 0);
        var hv, Sv;
        const ev = !0 === (null === (zv = this.view) || void 0 === zv ? void 0 : zv.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          gv = Pv || "jetpack" === vv.gearPowerKind && ev;
        this.set({
          gauge: vv,
          jetShown: gv
        }), gv && !Pv && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(vv) {
        this.view = vv, xS.j.zC(kw, vv, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const uw = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function va(vv) {
      let {
        store: zv
      } = vv;
      const Pv = (0, Sl.j)(kw, zv.get());
      return Pv ? "jetpack" === Pv.gauge.gearPowerKind ? (0, Ye.jsx)(za, {
        view: Pv
      }) : (0, Ye.jsx)(Pa, {
        gauge: Pv.gauge
      }) : null
    }

    function za(vv) {
      let {
        view: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)(), {
        gauge: hv
      } = zv, Sv = hv.gearChargeMax > 0 ? Math.max(0, Math.min(1, hv.gearCharge / hv.gearChargeMax)) : 0, ev = uw[hv.gearChargeState], gv = ev ? Pv(ev) : null;
      return (0, Ye.jsxs)("div", {
        className: fS()("Baf2JetArc", {
          Shown: zv.jetShown,
          Low: Sv < .2,
          Warm: Sv >= .2 && Sv < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Sv)
        },
        "aria-hidden": !zv.jetShown,
        children: [(0, Ye.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Ye.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: ha,
            pathLength: 100
          }), (0, Ye.jsx)("path", {
            className: "Baf2JetArcFill",
            d: ha,
            pathLength: 100
          })]
        }), (0, Ye.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Sv), "%"]
        }), gv && (0, Ye.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: gv
        })]
      })
    }

    function Pa(vv) {
      let {
        gauge: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)(), hv = function(vv, zv) {
        switch (zv.gearPowerKind) {
          case "skyPack":
            return vv("buildAFactory2Game:gearSkyPack", {
              charge: zv.gearCharge,
              max: zv.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return vv("buildAFactory2Game:gearIslandDraw", {
              power: kv(zv.gearIslandPower),
              cost: kv(zv.gearCostPerUse)
            });
          case "barrier":
            return vv("buildAFactory2Game:gearBarrier", {
              shield: Math.round(zv.gearCharge),
              max: zv.gearChargeMax,
              power: kv(zv.gearIslandPower)
            });
          default:
            return null
        }
      }(Pv, zv);
      return null === hv ? null : (0, Ye.jsx)(xw.g, {
        children: (0, Ye.jsx)("div", {
          className: fS()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === zv.gearChargeState || "outOfCharge" === zv.gearChargeState
          }),
          role: "status",
          children: hv
        })
      })
    }
    const ha = (() => {
      const vv = vv => {
        const zv = vv * Math.PI / 180;
        return `${(40*Math.cos(zv)).toFixed(2)} ${(40*Math.sin(zv)).toFixed(2)}`
      };
      return `M ${vv(160)} A 40 40 0 1 1 ${vv(380)}`
    })();
    class Sa {
      constructor(vv) {
        this.onElement = vv, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      rG(vv) {
        let zv = vv.baf2LabelsReset || vv.baf2LabelsIsland !== this.island;
        zv && (this.labels.clear(), this.island = vv.baf2LabelsIsland);
        for (const [Pv, hv, Sv, ev, gv] of vv.baf2LabelsList) {
          const vv = `${Pv},${hv},${Sv}`,
            pv = this.labels.get(vv);
          null === ev ? zv = this.labels.delete(vv) || zv : pv && pv.item === ev && (pv.count === gv || pv.count >= 0 && gv >= 0) ? pv.count !== gv && (pv.count = gv, this.writeCount(vv, gv)) : (this.labels.set(vv, {
            key: vv,
            pos: [Pv, hv, Sv],
            item: ev,
            count: gv
          }), this.writeCount(vv, gv), zv = !0)
        }
        if (this.changes++, zv) {
          this.snapshot = [...this.labels.values()];
          for (const vv of this.listeners) vv()
        }
      }
      bindCount(vv) {
        const zv = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${vv}`;
        let Pv = this.countRefs.get(zv);
        return Pv || (Pv = Pv => {
          var hv, Sv;
          Pv ? (this.countElements.set(zv, Pv), this.writeCount(vv, null !== (hv = null === (Sv = this.labels.get(vv)) || void 0 === Sv ? void 0 : Sv.count) && void 0 !== hv ? hv : -1)) : (this.countElements.delete(zv), this.countRefs.delete(zv))
        }, this.countRefs.set(zv, Pv)), Pv
      }
      setCountWords(vv) {
        this.countWords = vv;
        for (const [zv, Pv] of this.labels) this.writePart(`words|${zv}`, vv(Pv.count), Pv.count)
      }
      writeCount(vv, zv) {
        this.writePart(`bare|${vv}`, ce(zv), zv), this.countElements.has(`words|${vv}`) && this.writePart(`words|${vv}`, this.countWords(zv), zv)
      }
      writePart(vv, zv, Pv) {
        const hv = this.countElements.get(vv);
        if (!hv || Pv < 0) return;
        const Sv = hv.firstChild;
        Sv && 3 === Sv.nodeType && !Sv.nextSibling ? Sv.nodeValue !== zv && (Sv.nodeValue = zv) : hv.textContent !== zv && (hv.textContent = zv)
      }
      list() {
        return this.snapshot
      }
      at(vv) {
        return this.labels.get(`${vv[0]},${vv[1]},${vv[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      bind(vv) {
        let zv = this.refs.get(vv);
        return zv || (zv = zv => {
          const Pv = this.elements.get(vv);
          var hv, Sv;
          Pv && (null === (hv = this.onElement) || void 0 === hv || hv.call(this, Pv, !1));
          zv ? (this.elements.set(vv, zv), null === (Sv = this.onElement) || void 0 === Sv || Sv.call(this, zv, !0)) : (this.elements.delete(vv), this.refs.delete(vv))
        }, this.refs.set(vv, zv)), zv
      }
      onAfterRender(vv, zv, Pv, hv) {
        for (const Sv of this.snapshot) {
          const ev = this.elements.get(Sv.key);
          if (!ev) continue;
          if (hv(Sv.key)) {
            (0, Pw.h)(ev, !0);
            continue
          }
          const gv = lw(ev, vv, zv, Sv.pos, 1.1, 24);
          gv && Pv.add(gv, ev, 0, !1)
        }
      }
    }
    const ea = (0, hv.memo)((function(vv) {
        let {
          item: zv
        } = vv;
        return (0, Ye.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Ye.jsx)(KS.b, {
            itemName: zv,
            amount: 0
          })
        })
      })),
      ga = (0, hv.memo)((function(vv) {
        let {
          label: zv,
          bindRef: Pv,
          countRef: hv,
          wordsRef: Sv
        } = vv;
        return (0, Ye.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: Pv,
          hidden: !0,
          children: [(0, Ye.jsx)(ea, {
            item: zv.item
          }), zv.count >= 0 && (0, Ye.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Ye.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Sv
            }), (0, Ye.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: hv
            })]
          })]
        })
      })),
      pa = (0, hv.memo)((function(vv) {
        let {
          store: zv
        } = vv;
        const {
          t: Pv
        } = (0, OS.x)(), [Sv, ev] = (0, hv.useState)((() => zv.list()));
        return (0, hv.useEffect)((() => (ev(zv.list()), zv.subscribe((() => {
          ev(zv.list())
        })))), [zv]), (0, hv.useEffect)((() => {
          zv.setCountWords((vv => Pv("buildAFactory2Game:labelSiloCount", {
            count: ce(vv)
          })))
        }), [zv, Pv]), (0, Ye.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Sv.map((vv => -2 === vv.count ? null : (0, Ye.jsx)(ga, {
            label: vv,
            bindRef: zv.bind(vv.key),
            countRef: zv.bindCount(vv.key),
            wordsRef: zv.bindCount(vv.key, "words")
          }, vv.key)))
        })
      })),
      da = {
        read: () => !0,
        write: () => {}
      };

    function Na(vv) {
      return `${vv[0]},${vv[1]},${vv[2]}`
    }

    function la(vv) {
      let [zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv] = vv;
      const wv = void 0 === Tv || void 0 === Wv ? function(vv) {
        return [Math.floor((vv - 1) / 2), 0]
      }(ev) : [Tv, Wv];
      return {
        kind: 0 === dv ? "reactor" : "battery",
        box: MP([zv, Pv, hv], Sv, ev, gv, pv, wv),
        formed: 1 === Nv,
        level: lv
      }
    }
    class Ta {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : da;
        this.guideSetting = vv, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = vv.read()
      }
      rG(vv) {
        var zv;
        const Pv = new Map;
        for (const hv of vv.baf2RxPlanList) {
          const vv = la(hv);
          Pv.set(Na(vv.box.ctrl), vv)
        }
        this.plans = Pv, this.layouts = new Map((null !== (zv = vv.baf2RxLayouts) && void 0 !== zv ? zv : []).map((vv => {
          let [zv, Pv, hv, Sv] = vv;
          return [Na([zv, Pv, hv]), Sv]
        }))), this.predicted.clear(), vv.baf2RxFormedAt && (this.formed = {
          ctrl: vv.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const hv of [...this.startersOff]) {
          const vv = Pv.get(hv);
          vv && !vv.formed || this.startersOff.delete(hv)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((vv => this.planByKey(vv)))
      }
      planAt(vv) {
        return this.planByKey(Na(vv))
      }
      predictSize(vv, zv) {
        this.predicted.set(Na(vv), zv), this.changed()
      }
      unpredict(vv) {
        this.predicted.delete(Na(vv)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(vv) {
        var zv;
        const Pv = Na(vv);
        return this.predicted.has(Pv) ? null : null !== (zv = this.layouts.get(Pv)) && void 0 !== zv ? zv : null
      }
      showsStarter(vv) {
        return !this.startersOff.has(Na(vv))
      }
      setStarter(vv, zv) {
        const Pv = Na(vv);
        zv ? this.startersOff.delete(Pv) : this.startersOff.add(Pv), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(vv) {
        this.guide = vv, this.guideSetting.write(vv), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(vv) {
        const zv = this.plans.get(vv);
        if (!zv) return null;
        const Pv = this.predicted.get(vv);
        return Pv ? {
          ...zv,
          box: BP(zv.box, zv.kind, Pv[0], Pv[1], Pv[2])
        } : zv
      }
      changed() {
        this.version++;
        for (const vv of this.listeners) vv()
      }
    }
    var Wa = Pv(185);
    const wa = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function aa(vv, zv, Pv, hv) {
      const Sv = vv.length / 3;
      for (let ev = 0; ev < wa.length / 3; ev++) vv.push(wa[3 * ev] * hv[0] / 2 + Pv[0], wa[3 * ev + 1] * hv[1] / 2 + Pv[1], wa[3 * ev + 2] * hv[2] / 2 + Pv[2]);
      for (let ev = Sv; ev < Sv + 24; ev += 4) zv.push(ev, ev + 1, ev + 2, ev, ev + 2, ev + 3)
    }

    function sa(vv, zv, Pv) {
      const hv = zv[0][0],
        Sv = [],
        ev = [];
      for (const [gv, pv] of zv) aa(Sv, ev, [gv[0] - hv[0], gv[1] - hv[1], gv[2] - hv[2]], pv);
      return vv.createGameMesh({
        positions: Sv,
        indices: ev
      }, Pv, hv)
    }

    function Ca(vv, zv) {
      const Pv = vv.w - 2,
        hv = vv.d - 2;
      return 1 === function(vv, zv, Pv, hv) {
        const [Sv, ev, gv] = vv;
        if (Number(Sv <= 2) + Number(ev <= 2) + Number(gv <= 2) >= 2) return function(vv, zv, Pv) {
          return (vv + zv + Pv) % 2 === 0 ? 1 : 3
        }(zv, Pv, hv);
        const [pv, dv] = Sv >= ev && Sv >= gv ? [Pv, hv] : ev >= gv ? [zv, hv] : [zv, Pv];
        return pv % 2 === 0 && dv % 2 === 0 ? 1 : 3
      }([Pv, vv.h - 2, hv], zv % Pv, Math.floor(zv / (Pv * hv)), Math.floor(zv / Pv) % hv) ? "rod" : "channel"
    }

    function ia(vv, zv, Pv) {
      if ("reactor" !== vv.kind || vv.formed || !zv) return !1;
      const hv = oP(vv.box);
      for (let Sv = 0; Sv < hv; Sv++) {
        const vv = Pv(Sv);
        if (null !== vv && VP(vv)) return !1
      }
      return !0
    }

    function ca(vv, zv, Pv, hv, Sv) {
      var ev;
      let gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const pv = vh(vv.box, zv),
        dv = Sh(vv.kind, pv, Pv);
      if ("wrong" === dv || "blocked" === dv) return "wrong";
      if (!Sv) return null;
      if ("inside" === pv && "reactor" === vv.kind && "Air" === UP(Pv)) {
        if (null !== gv) {
          var Nv;
          const Pv = kT[XT(gv, zh(vv.box, zv))];
          return Pv && null !== (Nv = Od(Pv)) && void 0 !== Nv ? Nv : null
        }
        if (hv) return Ca(vv.box, zh(vv.box, zv))
      }
      if ("missing" !== dv) return null;
      const lv = eh(vv.kind, pv);
      return null === lv ? null : null !== (ev = Od(lv)) && void 0 !== ev ? ev : null
    }
    const Ga = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function ma(vv, zv, Pv) {
      const hv = Pv => {
        const hv = zv(XP(vv.box, Pv));
        return null !== hv && function(vv, zv) {
          return "reactor" !== vv.kind || zv !== rP(vv.box) && "inside" !== vh(vv.box, zv)
        }(vv, Pv) && "ok" !== Sh(vv.kind, vh(vv.box, Pv), hv)
      };
      if (Pv) {
        const ev = uP(vv.box, [Math.floor(Pv[0]), Math.floor(Pv[1]), Math.floor(Pv[2])]);
        if (ev >= 0 && (hv(ev) || (Sv = ev, "reactor" === vv.kind && "inside" === vh(vv.box, Sv) && "Air" === zv(XP(vv.box, Sv))))) return ev
      }
      var Sv;
      const ev = oP(vv.box);
      for (let gv = 0; gv < ev; gv++)
        if (hv(gv)) return gv;
      return -1
    }

    function ja(vv, zv) {
      return Math.floor(zv / (vv.w * vv.d))
    }

    function fa(vv, zv, Pv) {
      return Pv >= 0 && ja(vv, zv) > ja(vv, Pv)
    }

    function Fa(vv, zv) {
      return zv >= 0 && vv.h >= 3 && ja(vv, zv) === vv.h - 1
    }

    function Ya(vv) {
      const zv = UP(vv);
      return zv === cP || "Collider" === zv || "Laser" === zv || zv.startsWith("_Collider ")
    }

    function na(vv, zv, Pv, hv) {
      if (hv(vv)) return null;
      if (!Ga.every((zv => {
          let [hv, Sv, ev] = zv;
          const gv = Pv([vv[0] + hv, vv[1] + Sv, vv[2] + ev]);
          return null !== gv && !ZP("reactor", gv) && "reactor" !== RP(gv)
        }))) return null;
      const Sv = AP("reactor").min,
        ev = MP([vv[0], vv[1], vv[2]], function(vv, zv) {
          const Pv = zv[0] - (vv[0] + .5),
            hv = zv[2] - (vv[2] + .5);
          return Math.abs(Pv) >= Math.abs(hv) ? Pv >= 0 ? 2 : 4 : hv >= 0 ? 1 : 3
        }(vv, zv), Sv, Sv, Sv, yP("reactor", Sv)),
        gv = rP(ev);
      let pv = !0;
      for (let dv = 0; dv < oP(ev) && pv; dv++) {
        if (dv === gv) continue;
        const vv = XP(ev, dv),
          zv = Pv(vv);
        pv = !hv(vv) && (null === zv || !Ya(zv))
      }
      return {
        box: ev,
        fits: pv
      }
    }
    const Oa = nd,
      Da = "baf2Goal",
      Ka = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Va = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Ua = .4;

    function Ra(vv, zv) {
      let [Pv, hv, Sv] = vv;
      const ev = td([Pv - .02, hv - .02, Sv - .02], [Pv + 1.02, hv + 1.02, Sv + 1.02], .07);
      return zv && (ev.push([
        [Pv + .5, hv + 1 + .7, Sv + .5],
        [.08, 1.4, .08]
      ]), ev.push([
        [Pv + .5, hv + 1 + 1.4 + .2, Sv + .5],
        [Ua, Ua, Ua]
      ])), ev
    }

    function xa(vv, zv) {
      let [Pv, hv, Sv] = zv;
      return vv.isBlockInLoadedChunk(Pv, hv, Sv) ? vv.blockIdToBlockName(vv.getBlockId(Pv, hv, Sv)) : null
    }
    let ta = null;
    const qa = new Set;
    let Ia = null;

    function Qa(vv) {
      ta = vv;
      for (const zv of qa) zv(vv)
    }
    class Za {
      constructor(vv) {
        var zv;
        this.plans = vv, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (zv = vv => {
          var zv, Pv;
          this.setGoal(null !== (zv = null === vv || void 0 === vv ? void 0 : vv.goal) && void 0 !== zv ? zv : null, null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.startsBattery) && void 0 !== Pv && Pv)
        }, Ia ??= [xS.j.subscribe("setDirectionArrow", (vv => {
          let {
            id: zv,
            position: Pv,
            text: hv
          } = vv;
          zv === Da && Qa({
            goal: [Math.floor(Pv[0]), Math.floor(Pv[1]), Math.floor(Pv[2])],
            startsBattery: JSON.stringify(null !== hv && void 0 !== hv ? hv : null).includes("arrowStartBattery")
          })
        })), xS.j.subscribe("clearDirectionArrow", (vv => {
          let {
            id: zv
          } = vv;
          null !== zv && zv !== Da || Qa(null)
        }))], qa.add(zv), zv(ta), () => {
          qa.delete(zv)
        })
      }
      onAfterRender(vv, zv) {
        const Pv = performance.now();
        if (this.cues.length > 0) {
          const zv = .55 + .45 * Math.sin(Pv / 1100 * Math.PI * 2);
          for (const Pv of this.cues) vv.setGameMesh(Pv, {
            visibility: zv
          })
        }
        if (Pv - this.lastCheckMs < 150) return;
        this.lastCheckMs = Pv;
        const hv = this.plans.all().filter((vv => {
            const [Pv, hv, Sv] = vv.box.ctrl;
            return (!vv.formed || null !== this.plans.layoutOf(vv.box.ctrl)) && (Pv - zv[0]) ** 2 + (hv - zv[1]) ** 2 + (Sv - zv[2]) ** 2 <= 2304
          })),
          Sv = function(vv, zv) {
            const Pv = Wa.f.aa,
              hv = new Map;
            for (const ev of zv) {
              const zv = XP(ev.box, 0),
                gv = XP(ev.box, oP(ev.box) - 1),
                pv = [Math.min(zv[0], gv[0]), Math.min(zv[1], gv[1]), Math.min(zv[2], gv[2])].map((vv => Math.floor(vv / Pv))),
                dv = [Math.max(zv[0], gv[0]), Math.max(zv[1], gv[1]), Math.max(zv[2], gv[2])].map((vv => Math.floor(vv / Pv)));
              for (let Pv = pv[0]; Pv <= dv[0]; Pv++)
                for (let zv = pv[1]; zv <= dv[1]; zv++)
                  for (let ev = pv[2]; ev <= dv[2]; ev++) {
                    var Sv;
                    hv.set(`${Pv},${zv},${ev}`, null !== (Sv = vv.getChunkVersion(Pv, zv, ev)) && void 0 !== Sv ? Sv : -1)
                  }
            }
            return hv
          }(vv, hv);
        this.plans.getVersion() === this.storeVersion && (function(vv, zv) {
          if (vv.size !== zv.size) return !1;
          for (const [Pv, hv] of vv)
            if (zv.get(Pv) !== hv) return !1;
          return !0
        }(Sv, this.chunkVersions) || Pv - this.lastRescanMs < 600) || (this.lastRescanMs = Pv, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Sv, this.redraw(vv, hv))
      }
      dispose(vv) {
        this.unwatch(), ta = null, this.clearMeshes(vv), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(vv, zv) {
        var Pv;
        (null === vv || void 0 === vv ? void 0 : vv.join()) === (null === (Pv = this.goal) || void 0 === Pv ? void 0 : Pv.join()) && zv === this.startsBattery || (this.goal = vv, this.startsBattery = zv, this.storeVersion = -1)
      }
      redraw(vv, zv) {
        const Pv = zv => xa(vv, zv),
          hv = new Map,
          Sv = [],
          ev = this.plans.guideOn();
        for (const Nv of zv) {
          const vv = ev && ia(Nv, this.plans.showsStarter(Nv.box.ctrl), (vv => Pv(XP(Nv.box, vv)))),
            zv = "reactor" === Nv.kind ? this.plans.layoutOf(Nv.box.ctrl) : null,
            gv = ev && !Nv.formed ? ma(Nv, Pv, this.goal) : -1;
          gv >= 0 && Sv.push([XP(Nv.box, gv), Fa(Nv.box, gv)]);
          const pv = oP(Nv.box);
          for (let Sv = 0; Sv < pv; Sv++) {
            const pv = XP(Nv.box, Sv),
              dv = Pv(pv),
              lv = null === dv ? null : ca(Nv, Sv, dv, vv, ev, zv);
            if (null !== lv) {
              const vv = "wrong" !== lv && fa(Nv.box, Sv, gv),
                zv = vv ? `${lv}Dim` : lv;
              let Pv = hv.get(zv);
              Pv || (Pv = {
                draw: {
                  ghost: lv,
                  dim: vv
                },
                list: []
              }, hv.set(zv, Pv)), Pv.list.push(pv)
            }
          }
        }
        if (ev && this.startsBattery && this.goal) {
          const [vv, zv, Sv] = this.goal, ev = [];
          for (const [hv, gv, pv] of Ka) {
            const dv = [vv + hv, zv + gv, Sv + pv];
            "Air" === Pv(dv) && ev.push(dv)
          }
          if (ev.length > 0) {
            var gv;
            const vv = null !== (gv = hv.get("cell")) && void 0 !== gv ? gv : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            vv.list.push(...ev), hv.set("cell", vv)
          }
        }
        const pv = [...hv.keys()].sort(),
          dv = [...pv.map((vv => `${vv}:${hv.get(vv).list.join(";")}`)), `cue:${Sv.join(";")}`].join("|");
        if (dv !== this.shownKey) {
          this.shownKey = dv, this.clearMeshes(vv);
          for (const zv of pv) {
            const {
              draw: Pv,
              list: Sv
            } = hv.get(zv);
            this.meshes.push(this.build(vv, Pv, Sv))
          }
          for (const [zv, Pv] of Sv) this.cues.push(sa(vv, Ra(zv, Pv), Va))
        }
      }
      build(vv, zv, Pv) {
        let {
          ghost: hv,
          dim: Sv
        } = zv;
        const {
          size: ev,
          colour: gv,
          alpha: pv
        } = Oa[hv], dv = Pv[0], Nv = [], lv = [];
        for (const [Tv, Wv, wv] of Pv) aa(Nv, lv, [Tv - dv[0] + .5, Wv - dv[1] + .5, wv - dv[2] + .5], [ev, ev, ev]);
        return vv.createGameMesh({
          positions: Nv,
          indices: lv
        }, {
          rgb: gv,
          alpha: pv * (Sv ? .3 : 1)
        }, dv)
      }
      clearMeshes(vv) {
        for (const zv of [...this.meshes, ...this.cues]) vv.disposeGameMesh(zv);
        this.meshes = [], this.cues = []
      }
    }
    const Aa = [.56, .83, 1],
      La = [1, .3, .25];
    class Ha {
      constructor(vv) {
        this.plans = vv, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(vv, zv, Pv) {
        var hv;
        const Sv = performance.now();
        if (Sv - this.lastCheckMs < 150) return;
        this.lastCheckMs = Sv;
        const ev = zv => xa(vv, zv),
          gv = null === (hv = vv.Avv(zv)) || void 0 === hv ? void 0 : hv.name,
          pv = gv && "Reactor Frame" === UP(gv) ? vv.getTargetedBlock() : null,
          dv = pv ? [pv.vC[0], pv.vC[1], pv.vC[2]] : null,
          Nv = null !== dv && "Air" === ev(dv) && dv.every(((vv, zv) => Math.abs(vv + .5 - Pv[zv]) <= 8)) ? na(dv, Pv, ev, (vv => this.inPlan(vv))) : null,
          lv = Nv ? `${Nv.box.ctrl.join()}|${Nv.box.rot}|${Nv.fits}` : "";
        lv !== this.shownKey && this.show(vv, lv, Nv)
      }
      dispose(vv) {
        this.clear(vv), this.shownKey = ""
      }
      inPlan(vv) {
        return this.plans.all().some((zv => uP(zv.box, vv) >= 0))
      }
      show(vv, zv, Pv) {
        if (this.clear(vv), this.shownKey = zv, !Pv) return;
        const {
          box: hv,
          fits: Sv
        } = Pv, ev = Sv ? Aa : La, {
          lo: gv,
          hi: pv
        } = xd(hv);
        this.meshes.push(sa(vv, td(gv, pv, .05), {
          rgb: ev,
          alpha: 1
        }));
        const dv = [],
          Nv = XP(hv, 0)[1];
        for (let lv = 0; lv < hv.w * hv.d; lv++) {
          const [vv, , zv] = XP(hv, lv);
          dv.push([
            [vv + .5, Nv + .02 + .01, zv + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(sa(vv, dv, {
          rgb: ev,
          alpha: .25
        }))
      }
      clear(vv) {
        for (const zv of this.meshes) vv.disposeGameMesh(zv);
        this.meshes = []
      }
    }
    const Ma = "buildAFactory2Game:";

    function ya(vv, zv, Pv) {
      const hv = vv => {
          const [Pv, hv, Sv] = vv.box.ctrl;
          return Pv === zv[0] && hv === zv[1] && Sv === zv[2]
        },
        Sv = vv.find((vv => hv(vv) || uP(vv.box, zv) >= 0));
      if (!Sv) return null;
      const ev = function(vv, zv, Pv) {
        const {
          w: hv,
          h: Sv,
          d: ev
        } = vv.box, gv = "reactor" === vv.kind ? `${Ma}rxTitle` : `${Ma}batTitle`;
        if (vv.formed) return {
          key: `${Ma}lookPlanFormed`,
          kindKey: gv,
          w: hv,
          h: Sv,
          d: ev,
          count: 0
        };
        let pv = 0,
          dv = 0;
        for (let lv = 0; lv < oP(vv.box); lv++) {
          const zv = Pv(XP(vv.box, lv)),
            hv = null === zv ? "ok" : Sh(vv.kind, vh(vv.box, lv), zv);
          pv += "missing" === hv ? 1 : 0, dv += "wrong" === hv || "blocked" === hv ? 1 : 0
        }
        const Nv = function(vv, zv, Pv) {
          if (zv < 0 || null === Pv) return;
          const hv = vh(vv.box, zv),
            Sv = Sh(vv.kind, hv, Pv);
          return "blocked" === Sv ? `${Ma}lookWhy_blocked` : "wrong" === Sv ? "ctrl" === hv ? `${Ma}lookWhy_ctrl` : `${Ma}lookWhy_reactor_${hv}` : void 0
        }(vv, uP(vv.box, zv), Pv([zv[0], zv[1], zv[2]]));
        if (pv > 0) return {
          key: `${Ma}lookPlanToBuild`,
          kindKey: gv,
          w: hv,
          h: Sv,
          d: ev,
          count: pv,
          why: Nv
        };
        if (dv > 0) return {
          key: `${Ma}lookPlanTakeOut`,
          kindKey: gv,
          w: hv,
          h: Sv,
          d: ev,
          count: dv,
          why: Nv
        };
        return {
          key: "reactor" === vv.kind ? `${Ma}lookPlanNoRods` : `${Ma}lookPlanDone`,
          kindKey: gv,
          w: hv,
          h: Sv,
          d: ev,
          count: 0
        }
      }(Sv, zv, Pv);
      return "reactor" === Sv.kind && hv(Sv) ? {
        ...ev,
        ctrl: !0
      } : ev
    }

    function Ba(vv, zv) {
      return vv === zv || null !== vv && null !== zv && vv.key === zv.key && vv.kindKey === zv.kindKey && vv.w === zv.w && vv.h === zv.h && vv.d === zv.d && vv.count === zv.count && vv.why === zv.why && vv.ctrl === zv.ctrl
    }

    function Ja() {
      return performance.now()
    }
    class Ea {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ja;
        this.ticket = vv, this.sent = zv, this.backstopMs = Pv, this.now = hv, this.queuedAt = void 0, this.queuedAt = hv()
      }
      answered() {
        const vv = this.now(),
          zv = this.sent.leftAt(this.ticket);
        return null !== zv && vv - zv > 4e3 || vv - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class oa {
      constructor() {
        this.echoes = []
      }
      add(vv) {
        this.echoes = this.echoes.filter((vv => !vv.answered())), this.echoes.push(vv)
      }
      answered() {
        var vv, zv;
        return null === (vv = null === (zv = this.echoes.at(-1)) || void 0 === zv ? void 0 : zv.answered()) || void 0 === vv || vv
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((vv => vv.answered()))
      }
      age() {
        var vv, zv;
        return null !== (vv = null === (zv = this.echoes.at(-1)) || void 0 === zv ? void 0 : zv.age()) && void 0 !== vv ? vv : null
      }
      clear() {
        this.echoes = []
      }
    }
    class ba {
      constructor(vv) {
        this.send = vv, this.value = null, this.sent = null, this.echoes = new oa, this.down = !1, this.timer = null
      }
      shown(vv) {
        return null === this.value ? vv : this.down || this.value !== this.sent ? this.value : vv === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), vv) : this.value
      }
      pendingFor(vv) {
        return null !== this.value && this.value === this.sent && vv !== this.value ? this.echoes.age() : null
      }
      assume(vv, zv) {
        this.disarm(), this.down = !1, this.value = vv, this.sent = vv, this.echoes.clear(), this.echoes.add(zv)
      }
      press() {
        this.down = !0
      }
      drag(vv) {
        this.value = vv, this.arm(this.down ? 1e3 : 400)
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
      arm(vv) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), vv)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class ra {
      constructor() {
        this.pending = new Map
      }
      set(vv, zv, Pv) {
        var hv;
        const Sv = null !== (hv = this.pending.get(vv)) && void 0 !== hv ? hv : {
          on: zv,
          echoes: new oa
        };
        Sv.on = zv, Sv.echoes.add(Pv), this.pending.set(vv, Sv)
      }
      shown(vv) {
        let zv = vv;
        for (const [Pv, {
            on: hv,
            echoes: Sv
          }] of this.pending) 0 !== (vv & Pv) === hv && Sv.agreeCounts() || Sv.answered() ? this.pending.delete(Pv) : zv = hv ? zv | Pv : zv & ~Pv;
        return zv
      }
      pendingMask() {
        let vv = 0;
        for (const zv of this.pending.keys()) vv |= zv;
        return vv
      }
      pendingFor(vv) {
        let zv = null;
        for (const [hv, {
            on: Sv,
            echoes: ev
          }] of this.pending) {
          if (void 0 !== vv && 0 !== (vv & hv) === Sv) continue;
          const gv = ev.age();
          var Pv;
          if (null !== gv) zv = Math.max(null !== (Pv = zv) && void 0 !== Pv ? Pv : 0, gv)
        }
        return zv
      }
      clear() {
        this.pending.clear()
      }
    }
    class ka {
      constructor() {
        this.dims = null, this.echoes = new oa, this.unmet = null
      }
      shown(vv) {
        var zv;
        return this.dims && (Xa(this.dims, vv) && this.echoes.agreeCounts() || this.echoes.answered()) && (Xa(this.dims, vv) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (zv = this.dims) && void 0 !== zv ? zv : vv
      }
      takeUnmet() {
        const vv = this.unmet;
        return this.unmet = null, vv
      }
      set(vv, zv) {
        this.dims = vv, this.echoes.add(zv)
      }
      pendingFor(vv) {
        return null === this.dims || vv && Xa(this.dims, vv) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function Xa(vv, zv) {
      return vv[0] === zv[0] && vv[1] === zv[1] && vv[2] === zv[2]
    }
    class ua {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ja;
        this.now = vv, this.taps = new Map
      }
      tap(vv, zv, Pv) {
        return !this.busy(vv) && (this.taps.set(vv, {
          at: this.now(),
          done: zv
        }), Pv(), !0)
      }
      settle(vv) {
        for (const [zv, Pv] of [...this.taps]) Pv.done(vv) && this.taps.delete(zv)
      }
      busy(vv) {
        const zv = this.taps.get(vv);
        return !!zv && (!(this.now() - zv.at >= 3e3) || (this.taps.delete(vv), !1))
      }
      busyIds() {
        const vv = new Set;
        for (const zv of [...this.taps.keys()]) this.busy(zv) && vv.add(zv);
        return vv
      }
      clear() {
        this.taps.clear()
      }
    }

    function vs(vv) {
      return {
        send: zv => vv.track(zv),
        sendUrgent: (zv, Pv) => vv.track(zv, {
          urgent: !0,
          supersedes: Pv
        }),
        leftAt: zv => vv.leftAt(zv),
        holdReserve: () => vv.holdUrgentReserve(),
        answerMs: xg
      }
    }

    function zs() {
      return performance.now()
    }

    function Ps(vv) {
      const zv = vv.baf2RxNeed.map((vv => {
        let [zv, Pv] = vv;
        return [zv, Pv]
      }));
      return JSON.stringify([vv.baf2RxFormed, zv, vv.baf2RxBad, vv.baf2RxCells])
    }

    function hs(vv, zv) {
      const Pv = 0 !== (zv & Wz),
        hv = 0 !== (vv.baf2RxFlags & Wz);
      return !Pv || hv || "running" !== vv.baf2RxState && "idle" !== vv.baf2RxState ? !Pv && hv && "scram" === vv.baf2RxState && vv.baf2RxFuel > 0 ? "idle" : vv.baf2RxState : "scram"
    }

    function Ss(vv) {
      return JSON.stringify([vv.baf2BatFormed, vv.baf2BatNeed, vv.baf2BatBad])
    }

    function es(vv) {
      return vv.join(",")
    }
    class gs {
      constructor() {
        this.listeners = new Set
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      notify() {
        for (const vv of this.listeners) vv()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class ps {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(vv, zv) {
        this.lastAt = vv, this.lastUntil = vv + zv
      }
      answered(vv) {
        return this.lastAt >= vv || vv < this.lastUntil
      }
    }
    class ds {
      constructor(vv, zv) {
        this.link = vv, this.now = zv, this.hold = new ka, this.picked = null, this.notTaken = null
      }
      shown(vv) {
        const zv = this.hold.shown(vv);
        if (this.hold.takeUnmet() && this.picked) {
          var Pv;
          const {
            plans: zv,
            ctrl: hv,
            at: Sv
          } = this.picked;
          this.picked = null, zv.unpredict(hv), null === (Pv = this.notTaken) || void 0 === Pv || Pv.call(this, vv, Sv)
        }
        return zv
      }
      pendingFor(vv) {
        return this.hold.pendingFor(vv)
      }
      HW(vv, zv, Pv) {
        vv.predictSize(zv, Pv), this.picked = {
          plans: vv,
          ctrl: zv,
          at: this.now()
        };
        const hv = this.link.send(Tz(zv, "plan", ...Pv));
        this.hold.set(Pv, new Ea(hv, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class Ns {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zs;
        this.plans = vv, this.readInterior = zv, this.link = Pv, this.now = hv, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new ra, this.throttle = void 0, this.oneShots = void 0, this.listeners = new gs, this.redraw = null, this.releaseReserve = null, this.size = new ds(Pv, hv), this.oneShots = new ua(hv), this.throttle = new ba((vv => this.echo(this.link.send(this.command("throttle", vv)))))
      }
      set(vv) {
        !vv.baf2RxOpen && this.raw && es(this.raw.baf2RxAt) === es(vv.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(vv), this.zC(vv)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(vv) {
        this.size.notTaken = vv
      }
      resize(vv) {
        this.raw && (this.size.HW(this.plans, this.raw.baf2RxAt, vv), this.zC(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const vv = this.raw.baf2RxAt;
        this.plans.setStarter(vv, !this.plans.showsStarter(vv)), this.zC(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.zC(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.zC(this.raw)
      }
      send(vv) {
        if (this.raw) {
          for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
          this.link.send(this.command(vv, ...Pv))
        }
      }
      tap(vv, zv) {
        this.raw && this.oneShots.tap(vv, function(vv, zv) {
          if ("start" === vv) return vv => 0 === (vv.baf2RxFlags & Wz);
          if ("odConfirm" === vv) return vv => 0 !== (vv.baf2RxFlags & wz);
          const Pv = Ps(zv);
          return vv => Ps(vv) !== Pv
        }(vv, this.raw), zv) && ("start" === vv && (this.startedAt = this.now()), this.zC(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(Wz, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(vv, zv) {
        if (!this.raw) return;
        const Pv = vv === Wz ? this.command(zv ? "scram" : "start") : this.command("od", zv ? 1 : 0),
          hv = zv && vv === Wz,
          Sv = `${lz} ${this.raw.baf2RxAt.join(" ")} `,
          ev = this.echo(hv ? this.link.sendUrgent(Pv, (vv => {
            const zv = vv.startsWith(Sv) ? vv.slice(Sv.length).split(" ")[0] : null;
            return "throttle" === zv || "start" === zv
          })) : this.link.send(Pv));
        this.flags.set(vv, zv, ev), hv && this.throttle.assume(0, ev), this.zC(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(vv) {
        this.throttle.drag(vv), this.raw && this.zC(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.zC(this.raw)
      }
      subscribe(vv) {
        return this.listeners.subscribe(vv)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var vv;
        this.throttle.release(), null === (vv = this.releaseReserve) || void 0 === vv || vv.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(vv) {
        for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
        return Tz(this.raw.baf2RxAt, vv, ...Pv)
      }
      echo(vv) {
        return new Ea(vv, this.link, this.link.answerMs, this.now)
      }
      zC(vv) {
        var zv;
        this.raw = vv;
        const Pv = this.flags.shown(vv.baf2RxFlags),
          hv = {
            ...vv,
            baf2RxFlags: Pv,
            baf2RxTarget: this.throttle.shown(vv.baf2RxTarget),
            baf2RxState: hs(vv, Pv)
          },
          Sv = this.size.shown(hv.baf2RxDims),
          ev = this.throttle.pendingFor(),
          gv = [this.throttle.pendingFor(vv.baf2RxTarget), this.flags.pendingFor(vv.baf2RxFlags), this.size.pendingFor(vv.baf2RxDims)].filter((vv => null !== vv)),
          pv = gv.length > 0 ? Math.max(...gv) : null,
          dv = this.oneShots.busyIds(),
          Nv = hv.baf2RxAt;
        let lv, Tv, Wv = null,
          wv = [Math.max(0, Sv[0] - 2), Math.max(0, Sv[1] - 2), Math.max(0, Sv[2] - 2)];
        if (hv.baf2RxFormed) {
          const [vv, zv, Pv] = hv.baf2RxDims;
          wv = [Math.max(0, vv - 2), Math.max(0, zv - 2), Math.max(0, Pv - 2)], lv = Array.from(hv.baf2RxCells, Number), Tv = `${wv.join(",")}:${hv.baf2RxCells}`
        } else {
          var av;
          const vv = null === (av = this.plans.planAt(Nv)) || void 0 === av ? void 0 : av.box,
            zv = vv ? BP(vv, "reactor", ...Sv) : MP(Nv, 1, ...Sv, yP("reactor", Sv[0])),
            Pv = this.readInterior(zv);
          Wv = vd(wv, Pv), lv = Pv, Tv = `${wv.join(",")}:${Pv.join("")}`
        }(null === (zv = this.looksOf) || void 0 === zv ? void 0 : zv.key) !== Tv && (this.looksOf = {
          key: Tv,
          looks: gd(wv, lv)
        }), this.view = {
          status: hv,
          dims: Sv,
          plan: Wv,
          inner: wv,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Nv),
          odConfirmed: this.odConfirmed || 0 !== (hv.baf2RxFlags & Gz),
          guide: this.plans.guideOn(),
          throttlePending: null !== ev,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== pv && pv >= 5e3,
          busy: dv,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== pv || dv.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.zC(this.raw)
        }), 250))
      }
    }
    class ls {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zs;
        this.plans = vv, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new gs, this.redraw = null, this.size = new ds(zv, Pv), this.oneShots = new ua(Pv)
      }
      set(vv) {
        !vv.baf2BatOpen && this.view && es(this.view.status.baf2BatAt) === es(vv.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(vv), this.zC(vv)
      }
      tap(vv, zv) {
        if (!this.view) return;
        const Pv = Ss(this.view.status);
        this.oneShots.tap(vv, (vv => Ss(vv) !== Pv), zv) && this.zC(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(vv) {
        this.size.notTaken = vv
      }
      resize(vv) {
        this.view && (this.size.HW(this.plans, this.view.status.baf2BatAt, vv), this.zC(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.zC(this.view.status)
      }
      subscribe(vv) {
        return this.listeners.subscribe(vv)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      zC(vv) {
        const zv = this.size.shown(vv.baf2BatDims),
          Pv = this.oneShots.busyIds();
        this.view = {
          status: vv,
          dims: zv,
          GT: jd(zv, vv.baf2BatDims) ? vv.baf2BatCapacity : Nd(...zv),
          guide: this.plans.guideOn(),
          busy: Pv
        }, this.listeners.notify(), Pv.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.zC(this.view.status)
        }), 250))
      }
    }
    const Ts = "buildAFactory2Game:";

    function Ws() {
      var vv;
      const zv = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!zv) return null;
      const Pv = zv.querySelector(".ExitButton");
      return function(vv, zv) {
        const Pv = zv ? zv.left - 8 : vv.right;
        return {
          left: vv.left,
          top: vv.top,
          width: Math.max(0, Pv - vv.left),
          height: vv.height
        }
      }(zv.getBoundingClientRect(), null !== (vv = null === Pv || void 0 === Pv ? void 0 : Pv.getBoundingClientRect()) && void 0 !== vv ? vv : null)
    }
    const ws = (0, hv.memo)((function(vv) {
      let {
        store: zv
      } = vv;
      const {
        t: Pv
      } = (0, OS.x)(), [Sv, ev] = (0, hv.useState)((() => zv.get())), [gv, pv] = (0, hv.useState)((() => performance.now()));
      (0, hv.useEffect)((() => (ev(zv.get()), zv.subscribe((() => {
        ev(zv.get()), pv(performance.now())
      })))), [zv]);
      const {
        alarm: dv,
        boomAt: Nv
      } = Sv, lv = null !== dv && null !== dv.secs, [Tv, Wv] = (0, hv.useState)(null);
      (0, hv.useEffect)((() => {
        if (!lv) return;
        Wv(Ws());
        const vv = setInterval((() => {
          pv(performance.now()), Wv(Ws())
        }), 250);
        return () => {
          clearInterval(vv)
        }
      }), [lv]);
      const [wv, av] = (0, hv.useState)(!1);
      return (0, hv.useEffect)((() => {
        if (Nv === -1 / 0) return;
        av(!0);
        const vv = setTimeout((() => {
          av(!1)
        }), 1300);
        return () => {
          clearTimeout(vv)
        }
      }), [Nv]), (0, Ye.jsxs)(Ye.Fragment, {
        children: [null !== dv && (0, Ye.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: Pv(dv.hot ? `${Ts}rxAlarmSiren` : `${Ts}rxAlarmDamaged`, {
            amount: String(dv.damage)
          })
        }), null !== dv && null !== dv.secs && (0, Ye.jsx)("div", {
          className: Tv ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Tv && void 0 !== Tv ? Tv : void 0,
          "aria-live": "assertive",
          children: Pv(`${Ts}rxAlarmCountdown`, {
            amount: String((sv = dv.secs, Cv = gv - dv.receivedAt, Math.max(1, Math.ceil(sv - Cv / 1e3))))
          })
        }), wv && (0, Ye.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var sv, Cv
    }));
    class as {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      rG(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Pv = vv.baf2RxAlarmAt.join(",");
        let hv = this.snapshot.boomAt;
        if (vv.baf2RxAlarmBoom) this.byReactor.delete(Pv), hv = zv;
        else if (vv.baf2RxAlarmDamage <= 0) this.byReactor.delete(Pv);
        else {
          var Sv;
          this.byReactor.set(Pv, {
            damage: vv.baf2RxAlarmDamage,
            secs: null !== (Sv = vv.baf2RxAlarmSecs) && void 0 !== Sv ? Sv : null,
            hot: !0 === vv.baf2RxAlarmHot,
            receivedAt: zv
          })
        }
        this.zC(hv)
      }
      retain(vv) {
        let zv = !1;
        for (const Pv of [...this.byReactor.keys()]) vv.has(Pv) || (this.byReactor.delete(Pv), zv = !0);
        zv && this.zC(this.snapshot.boomAt)
      }
      has(vv) {
        return this.byReactor.has(vv)
      }
      get() {
        return this.snapshot
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      zC(vv) {
        let zv = null;
        for (const Pv of this.byReactor.values())(!zv || Pv.damage > zv.damage) && (zv = Pv);
        this.snapshot = {
          alarm: zv,
          boomAt: vv
        };
        for (const Pv of this.listeners) Pv()
      }
    }
    const ss = {
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

    function Cs(vv) {
      return [vv[0], vv[1], vv[2]]
    }

    function is(vv) {
      return `${vv[0]},${vv[1]},${vv[2]}`
    }
    class cs {
      constructor(vv) {
        if (this.plans = vv, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var vv;
            return {
              active: this.glows.flatMap((vv => {
                let {
                  record: zv
                } = vv;
                return zv ? [zv] : []
              })),
              log: [...null !== (vv = this.devLog) && void 0 !== vv ? vv : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var vv;
        return null !== (vv = this.devLog) && void 0 !== vv ? vv : []
      }
      check(vv, zv, Pv) {
        const hv = new Set(zv.map((vv => is(vv.box.ctrl))));
        for (const gv of function(vv, zv) {
            const Pv = [],
              hv = new Map(vv);
            vv.clear();
            for (const Sv of zv) {
              const zv = Na(Sv.box.ctrl),
                ev = Sv.formed ? Sv.level : 0;
              vv.set(zv, ev), ev > 0 && 0 === hv.get(zv) && Pv.push(Sv)
            }
            return Pv
          }(this.levels, this.plans.all())) hv.has(is(gv.box.ctrl)) && this.show(vv, gv, "on", Pv);
        const Sv = this.plans.lastFormed();
        if (null === Sv || Sv.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Sv.receivedAt;
        const ev = function(vv, zv) {
          var Pv;
          const hv = Na(vv);
          return null !== (Pv = zv.find((vv => Na(vv.box.ctrl) === hv))) && void 0 !== Pv ? Pv : null
        }(Sv.ctrl, zv);
        return ev && this.show(vv, ev, "formed", Pv), ev
      }
      fade(vv, zv) {
        0 !== this.glows.length && (this.glows = this.glows.filter((Pv => {
          let {
            mesh: hv,
            glow: Sv,
            startMs: ev,
            record: gv
          } = Pv;
          const pv = (zv - ev) / ss[Sv].ms;
          return pv >= 1 ? (vv.disposeGameMesh(hv), gv && (gv.endMs = zv), !1) : (vv.setGameMesh(hv, {
            visibility: "formed" === Sv ? 1 - pv : Math.sin(Math.PI * pv)
          }), !0)
        })))
      }
      dispose(vv) {
        for (const {
            mesh: Pv
          }
          of this.glows) vv.disposeGameMesh(Pv);
        this.glows = [], this.levels.clear();
        const zv = "undefined" !== typeof window ? window : null;
        (null === zv || void 0 === zv ? void 0 : zv.baf2Glows) === this.devAccessor && delete zv.baf2Glows
      }
      show(vv, zv, Pv, hv) {
        const {
          lo: Sv,
          hi: ev
        } = xd(zv.box);
        let gv = null;
        this.devLog && (gv = {
          glow: Pv,
          ctrl: Cs(zv.box.ctrl),
          lo: Cs(Sv),
          hi: Cs(ev),
          startMs: hv,
          endMs: null
        }, this.devLog.push(gv), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(vv, Pv, td(Sv, ev, ss[Pv].thick)),
          glow: Pv,
          startMs: hv,
          record: gv
        })
      }
      build(vv, zv, Pv) {
        const hv = sa(vv, Pv, {
          rgb: ss[zv].colour,
          alpha: 1
        });
        return vv.setGameMesh(hv, {
          visibility: 0
        }), hv
      }
    }
    const Gs = 1 / .6,
      ms = {
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
        blendMode: tp.f.Standard,
        soft: !0
      },
      fs = {
        ...ms,
        size: [.25, .4],
        count: 2
      };

    function Fs(vv) {
      return {
        colours: [vv, vv],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: tp.f.Add,
        soft: !1
      }
    }
    const Ys = Fs([150, 225, 255]),
      ns = Fs([185, 145, 255]),
      Os = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function Ds(vv) {
      const zv = tz[vv];
      return null === zv.fuelSlot || SP(zv) ? Os.includes(vv) ? ns : Ys : ms
    }
    const Ks = {
        kind: "smokePuff"
      },
      Vs = [.2, .025, .2];

    function Us(vv, zv) {
      const [
        [Pv, hv, Sv],
        [ev, gv, pv]
      ] = vv.colours;
      return {
        texture: vv.soft ? Ks : "square_particle",
        GT: zv,
        minLifeTime: vv.life[0] / Gs,
        maxLifeTime: vv.life[1] / Gs,
        minEmitPower: vv.power[0] * Gs,
        maxEmitPower: vv.power[1] * Gs,
        minSize: vv.size[0],
        maxSize: vv.size[1],
        emitRate: 0,
        gravity: [0, vv.lift * Gs * Gs, 0],
        dir1: [-vv.spread, 1, -vv.spread],
        dir2: [vv.spread, 1, vv.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [Pv, hv, Sv, vv.alpha],
          maxColor: [ev, gv, pv, vv.alpha]
        }, {
          timeFraction: 1,
          minColor: [Pv, hv, Sv, 0],
          maxColor: [ev, gv, pv, 0]
        }],
        blendMode: vv.blendMode
      }
    }
    class Rs {
      constructor(vv) {
        this.fixed = vv, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(vv, zv, Pv) {
        var hv;
        if (Pv === this.lastFrame) return !1;
        this.lastFrame = Pv;
        const Sv = this.at;
        Sv[0] = zv[0] + .5, Sv[1] = zv[1] + 1.025, Sv[2] = zv[2] + .5;
        const ev = null !== (hv = this.fixed) && void 0 !== hv ? hv : pv() ? fs : ms;
        let gv = this.particles.get(ev);
        return gv || (gv = vv.createParticles(function(vv) {
          return Us(vv, Math.ceil(12 * vv.count * vv.life[1]) + vv.count)
        }(ev), {
          pos: Sv,
          half: Vs
        }), this.particles.set(ev, gv)), gv.moveTo(Sv), gv.emit(ev.count), !0
      }
      dispose() {
        for (const vv of this.particles.values()) vv.stop();
        this.particles.clear()
      }
    }
    class xs {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(vv) {
        this.indexed = !0;
        for (const zv of Dz) {
          const Pv = Ds(zv);
          for (let hv = 1; hv <= 4; hv++) {
            const Sv = vv.blockNameToBlockId(`${zv}|meta|rot${hv}|Running`, !0);
            if (null === Sv) continue;
            let ev = this.pufferIndexByStyle.get(Pv);
            void 0 === ev && (ev = this.pufferList.push(new Rs(Pv === ms ? null : Pv)) - 1, this.pufferIndexByStyle.set(Pv, ev)), this.pufferIndexById[Sv] = ev + 1
          }
        }
      }
      onAfterRender(vv, zv) {
        this.indexed || this.index(vv);
        const Pv = performance.now(),
          hv = 0 === this.lastMs ? 0 : Math.min(Pv - this.lastMs, 250) / 1e3;
        this.lastMs = Pv, this.frame++, vv.particlesEnabled() ? (this.scan(vv, zv), this.puff(vv, hv)) : this.sources = []
      }
      dispose() {
        for (const vv of this.pufferList) vv.dispose();
        this.sources = [], this.found = []
      }
      scan(vv, zv) {
        0 === this.scanRow && (this.origin = [Math.floor(zv[0]) - 12, Math.floor(zv[1]) - 6, Math.floor(zv[2]) - 12]);
        const Pv = Math.min(this.scanRow + 16, 325),
          [hv, Sv, ev] = this.origin,
          gv = this.hits;
        gv.length = 0;
        for (let pv = this.scanRow; pv < Pv; pv++) {
          const zv = hv + pv % 25,
            Pv = Sv + Math.floor(pv / 25);
          vv.scanBlocks(zv, Pv, ev, zv + 1, Pv + 1, ev + 25, this.pufferIndexById, gv)
        }
        for (let pv = 0; pv < gv.length; pv += 4) {
          const vv = gv[pv + 3];
          this.found.push({
            pos: [gv[pv], gv[pv + 1], gv[pv + 2]],
            yN: vv,
            puffer: this.pufferList[this.pufferIndexById[vv] - 1]
          })
        }
        this.scanRow = Pv, 325 === Pv && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(vv, zv) {
        const Pv = this.sources.length;
        if (0 !== Pv) {
          this.budget = Math.min(this.budget + Math.min(Pv / 1.2, 12) * zv, 2);
          for (let zv = 0; zv < Pv && this.budget >= 1; zv++) {
            const zv = this.sources[this.cursor % Pv];
            this.cursor = (this.cursor + 1) % Pv, vv.getBlockId(zv.pos[0], zv.pos[1], zv.pos[2]) === zv.yN && (zv.puffer.puff(vv, zv.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const ts = {
        ...Fs([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      qs = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function Is(vv) {
      return 0 === vv.spots.length ? 0 : Math.min(1 * vv.level, 4)
    }

    function Qs(vv) {
      return 0 === vv.glass.length ? 0 : Math.min(.75 * vv.level, 3)
    }

    function Zs(vv) {
      return `${vv.ctrl.join(",")}:${vv.rot}:${vv.cu},${vv.cv}:${vv.w},${vv.h},${vv.d}`
    }

    function As(vv, zv) {
      const Pv = zv.w - 2,
        hv = zv.h - 2,
        Sv = zv.d - 2,
        ev = [];
      for (let gv = 0; gv < Pv * hv * Sv; gv++) {
        const pv = gv % Pv,
          dv = Math.floor(gv / Pv) % Sv,
          Nv = Math.floor(gv / (Pv * Sv));
        if (pv > 0 && pv < Pv - 1 && dv > 0 && dv < Sv - 1 && Nv > 0 && Nv < hv - 1) continue;
        const lv = XP(zv, Ph(zv, gv)),
          Tv = xa(vv, lv);
        if (null !== Tv && "Fuel Rod" === UP(Tv))
          for (const zv of qs) {
            const Pv = [lv[0] + zv[0], lv[1] + zv[1], lv[2] + zv[2]];
            Hs(vv, Pv) && ev.push(Ms(Pv, zv))
          }
      }
      return ev
    }

    function Ls(vv, zv) {
      const {
        lo: Pv,
        hi: hv
      } = xd(zv), Sv = [];
      for (let ev = Pv[0]; ev < hv[0]; ev++)
        for (let zv = Pv[1]; zv < hv[1]; zv++) {
          const gv = ev === Pv[0] || ev === hv[0] - 1 || zv === Pv[1] || zv === hv[1] - 1 ? 1 : Math.max(1, hv[2] - 1 - Pv[2]);
          for (let pv = Pv[2]; pv < hv[2]; pv += gv) {
            const gv = [ev, zv, pv];
            if (!Hs(vv, gv)) continue;
            const dv = ev === Pv[0] ? qs[1] : ev === hv[0] - 1 ? qs[0] : pv === Pv[2] ? qs[5] : pv === hv[2] - 1 ? qs[4] : zv === Pv[1] ? qs[3] : qs[2];
            Sv.push(Ms(gv, dv))
          }
        }
      return Sv
    }

    function Hs(vv, zv) {
      const Pv = xa(vv, zv);
      return null !== Pv && "Reactor Glass" === UP(Pv)
    }

    function Ms(vv, zv) {
      return [
        [vv[0] + .5 + .55 * zv[0], vv[1] + .5 + .55 * zv[1], vv[2] + .5 + .55 * zv[2]],
        [0 === zv[0] ? .4 : .02, 0 === zv[1] ? .4 : .02, 0 === zv[2] ? .4 : .02]
      ]
    }
    class ys {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(vv, zv, Pv, hv) {
        const Sv = [],
          ev = new Set;
        for (const Nv of zv) {
          var gv, pv, dv;
          const {
            box: zv
          } = Nv;
          if ("reactor" !== Nv.kind || Nv.level <= 0 || (zv.ctrl[0] - Pv[0]) ** 2 + (zv.ctrl[1] - Pv[1]) ** 2 + (zv.ctrl[2] - Pv[2]) ** 2 > 576) continue;
          const lv = Zs(zv);
          ev.add(lv);
          let Tv = this.spots.get(lv);
          if ((!Tv || hv - Tv.at > 3e3) && (Tv = {
              at: hv,
              spots: As(vv, zv),
              glass: Ls(vv, zv)
            }, this.spots.set(lv, Tv)), 0 === Tv.spots.length && 0 === Tv.glass.length) continue;
          const Wv = this.sparking.find((vv => vv.key === lv));
          Sv.push({
            key: lv,
            level: Nv.level,
            spots: Tv.spots,
            glass: Tv.glass,
            budget: null !== (gv = null === Wv || void 0 === Wv ? void 0 : Wv.budget) && void 0 !== gv ? gv : 0,
            cursor: null !== (pv = null === Wv || void 0 === Wv ? void 0 : Wv.cursor) && void 0 !== pv ? pv : 0,
            glassBudget: null !== (dv = null === Wv || void 0 === Wv ? void 0 : Wv.glassBudget) && void 0 !== dv ? dv : 0
          })
        }
        for (const Nv of this.spots.keys()) ev.has(Nv) || this.spots.delete(Nv);
        this.sparking = Sv
      }
      emit(vv, zv, Pv) {
        var hv;
        if (0 === this.sparking.length || !vv.particlesEnabled() || Pv === this.lastFrame) return;
        this.lastFrame = Pv;
        let Sv = 0,
          ev = 0;
        for (const av of this.sparking) Sv += Is(av), ev += Qs(av);
        const gv = Sv > 8 ? 8 / Sv : 1,
          pv = ev > 6 ? 6 / ev : 1;
        let dv, Nv = null,
          lv = null;
        for (const av of this.sparking) av.budget = Math.min(av.budget + Is(av) * gv * zv, 2), av.budget >= 1 && (!Nv || av.budget > Nv.budget) && (Nv = av), av.glassBudget = Math.min(av.glassBudget + Qs(av) * pv * zv, 2), av.glassBudget >= 1 && (!lv || av.glassBudget > lv.glassBudget) && (lv = av);
        if (Nv) Nv.budget--, dv = Nv.spots[Nv.cursor++ % Nv.spots.length];
        else {
          if (!lv) return;
          lv.glassBudget--, dv = lv.glass[Math.floor(Math.random() * lv.glass.length)]
        }
        const [Tv, Wv] = dv, wv = null !== (hv = this.emitter) && void 0 !== hv ? hv : this.create(vv, Tv, Wv);
        wv.moveTo(Tv, Wv), wv.emit(ts.count)
      }
      dispose() {
        var vv;
        null === (vv = this.emitter) || void 0 === vv || vv.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(vv, zv, Pv) {
        const hv = Math.ceil(14 * ts.count * ts.life[1]) + ts.count;
        return this.emitter = vv.createParticles(Us(ts, hv), {
          pos: zv,
          half: Pv
        }), this.emitter
      }
    }
    const Bs = [2, 3.2],
      Es = 1 / 3,
      os = 1 / .6,
      bs = {
        texture: Ks,
        GT: Math.ceil(18 * Bs[1]) + 4,
        minLifeTime: Bs[0] / os,
        maxLifeTime: Bs[1] / os,
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
        blendMode: tp.f.Standard
      };
    class rs {
      constructor(vv) {
        this.plans = vv, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new ys, this.frame = 0, this.outline = new cs(vv)
      }
      onAfterRender(vv, zv, Pv) {
        const hv = performance.now(),
          Sv = 0 === this.lastMs ? 0 : Math.min(hv - this.lastMs, 250) / 1e3;
        if (this.lastMs = hv, this.outline.fade(vv, hv), this.puff(vv, Sv, Pv), this.sparks.emit(vv, Sv, this.frame++), hv - this.lastCheckMs < 150) return;
        this.lastCheckMs = hv;
        const ev = this.plans.all().filter((vv => vv.formed && ks(vv.box.ctrl, Pv) <= 4096));
        this.plumes = ev.filter((vv => "reactor" === vv.kind && vv.level > 0)).map((vv => ({
          box: vv.box,
          level: vv.level
        }))), this.updateHums(vv, zv, ev, Pv), this.sparks.update(vv, ev, Pv, hv), this.chimeFormed(vv, zv, ev, hv)
      }
      dispose(vv) {
        var zv;
        this.outline.dispose(vv), null === (zv = this.steam) || void 0 === zv || zv.dispose(), this.steam = null, this.sparks.dispose();
        for (const Pv of this.hums.values()) Pv.stop();
        this.hums.clear()
      }
      chimeFormed(vv, zv, Pv, hv) {
        const Sv = this.outline.check(vv, Pv, hv);
        Sv && vv.playSound(zv, "exp_levelup", .6, 1, {
          xP: [Sv.box.ctrl[0] + .5, Sv.box.ctrl[1], Sv.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(vv, zv, Pv) {
        const hv = this.plumes;
        if (0 === hv.length || !vv.particlesEnabled()) return void(this.plumeBudget = 0);
        const Sv = hv.reduce(((vv, zv) => vv + 3 * zv.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Sv * zv, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let ev = this.plumeCursor % (Sv / 3);
        this.plumeCursor++;
        let gv = hv[0];
        for (const Tv of hv) {
          if (ev < Tv.level) {
            gv = Tv;
            break
          }
          ev -= Tv.level
        }
        const {
          lo: pv,
          hi: dv
        } = xd(gv.box);
        if (function(vv, zv, Pv) {
            const hv = Math.max(vv[0] - Pv[0], 0, Pv[0] - zv[0]),
              Sv = Math.max(vv[2] - Pv[2], 0, Pv[2] - zv[2]);
            return Math.hypot(hv, Pv[1] - zv[1], Sv)
          }(pv, dv, Pv) < 6 && Math.random() > Es) return;
        const Nv = [(pv[0] + dv[0]) / 2, dv[1] + .05, (pv[2] + dv[2]) / 2],
          lv = [(dv[0] - pv[0]) / 2 - .5, .05, (dv[2] - pv[2]) / 2 - .5];
        this.steam ??= vv.createParticles(bs, {
          pos: Nv,
          half: lv
        }), this.steam.moveTo(Nv, lv), this.steam.emit(1)
      }
      updateHums(vv, zv, Pv, hv) {
        const Sv = new Map;
        for (const gv of Pv) "reactor" === gv.kind && gv.level > 0 && ks(gv.box.ctrl, hv) <= 576 && Sv.set(`${ev=gv.box.ctrl,`${ev[0]},${ev[1]},${ev[2]}`}:${gv.level}`, gv);
        var ev;
        for (const [gv, pv] of this.hums) Sv.has(gv) || (pv.stop(), this.hums.delete(gv));
        for (const [gv, pv] of Sv) {
          if (this.hums.has(gv)) continue;
          const {
            lo: Pv,
            hi: hv
          } = xd(pv.box), Sv = [(Pv[0] + hv[0]) / 2, Pv[1], (Pv[2] + hv[2]) / 2], ev = vv.playSound(zv, "rocketEngineLoop", .08 + .06 * pv.level, .55, {
            xP: Sv,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          ev && this.hums.set(gv, ev)
        }
      }
    }

    function ks(vv, zv) {
      return (vv[0] - zv[0]) ** 2 + (vv[1] - zv[1]) ** 2 + (vv[2] - zv[2]) ** 2
    }
    class Xs {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      rG(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const hv = [vv.baf2BombAt[0], vv.baf2BombAt[1], vv.baf2BombAt[2]],
          Sv = vv.baf2BombR;
        if (vv.baf2BombBoom) {
          const vv = Math.hypot(zv[0] - hv[0], zv[1] - hv[1], zv[2] - hv[2]);
          this.zC({
            fuse: null,
            blast: {
              at: hv,
              r: Sv,
              receivedAt: Pv,
              distance: vv,
              flash: vv <= 3 * Sv
            }
          })
        } else this.zC({
          ...this.snapshot,
          fuse: vv.baf2BombMs > 0 ? {
            at: hv,
            r: Sv,
            endsAt: Pv + vv.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      zC(vv) {
        this.snapshot = vv;
        for (const zv of this.listeners) zv()
      }
    }
    const us = (0, hv.memo)((function(vv) {
      var zv;
      let {
        store: Pv
      } = vv;
      const {
        t: Sv
      } = (0, OS.x)(), [ev, gv] = (0, hv.useState)((() => Pv.get())), [pv, dv] = (0, hv.useState)((() => performance.now()));
      (0, hv.useEffect)((() => (gv(Pv.get()), Pv.subscribe((() => {
        gv(Pv.get()), dv(performance.now())
      })))), [Pv]);
      const {
        fuse: Nv,
        blast: lv
      } = ev;
      (0, hv.useEffect)((() => {
        if (!Nv) return;
        const vv = setInterval((() => {
          dv(performance.now())
        }), 250);
        return () => {
          clearInterval(vv)
        }
      }), [Nv]);
      const [Tv, Wv] = (0, hv.useState)(!1);
      (0, hv.useEffect)((() => {
        if (null === lv || void 0 === lv || !lv.flash) return;
        Wv(!0);
        const vv = setTimeout((() => {
          Wv(!1)
        }), 2500);
        return () => {
          clearTimeout(vv)
        }
      }), [lv]);
      const wv = Nv ? function(vv, zv) {
        return vv.endsAt <= zv ? 0 : Math.ceil((vv.endsAt - zv) / 1e3)
      }(Nv, pv) : 0;
      return (0, Ye.jsxs)(Ye.Fragment, {
        children: [wv > 0 && (0, Ye.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Sv("buildAFactory2Game:bombCountdown", {
            amount: String(wv),
            radius: String(null !== (zv = null === Nv || void 0 === Nv ? void 0 : Nv.r) && void 0 !== zv ? zv : 0)
          })
        }), Tv && (0, Ye.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function vC(vv) {
      const zv = Math.min(4, Math.max(1, vv / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * vv / 4)),
        capSpread: Math.min(5 * vv / 8, 24 * zv),
        capThick: 6 * zv,
        stemHalfWidth: 3 * zv,
        puffScale: zv
      }
    }
    class zC {
      constructor() {
        this.Vp = !1
      }
      hold(vv) {
        vv.getCameraFar() < 1e3 && (vv.setCameraFar(1e3), this.Vp = !0)
      }
      release(vv) {
        this.Vp && (this.Vp = !1, vv.setCameraFar(null))
      }
    }
    const PC = 1 / .6,
      hC = [.2, .1, .2],
      SC = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      eC = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: tp.f.Standard,
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
      gC = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: tp.f.Standard,
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
      pC = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: tp.f.Standard,
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
      dC = {
        texture: Ks,
        GT: Math.ceil(120) + 4,
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
        blendMode: tp.f.Add
      };
    class NC {
      constructor(vv) {
        this.store = vv, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new zC, this.timers = []
      }
      onAfterRender(vv, zv) {
        const Pv = performance.now(),
          hv = 0 === this.lastMs ? 0 : Math.min(Pv - this.lastMs, 250) / 1e3;
        this.lastMs = Pv;
        const {
          fuse: Sv,
          blast: ev
        } = this.store.get();
        null !== ev && ev !== this.shownBlast && (this.shownBlast = ev, this.startBlast(vv, zv, ev, Pv));
        const gv = vv.particlesEnabled();
        null !== Sv && Sv.endsAt > Pv && gv ? this.emitBeacon(vv, Sv, hv, Pv) : this.beaconBudget = 0, null !== this.cloud && (Pv - this.cloud.startMs > 33e3 ? this.disposeCloud(vv) : (this.far.hold(vv), gv && this.emitCloud(vv, hv, Pv)))
      }
      dispose(vv) {
        var zv;
        null === (zv = this.beacon) || void 0 === zv || zv.dispose(), this.beacon = null, this.disposeCloud(vv);
        for (const Pv of this.timers) clearTimeout(Pv);
        this.timers.length = 0
      }
      emitBeacon(vv, zv, Pv, hv) {
        const Sv = zv.endsAt - hv < 5e3 ? 350 : 1e3,
          ev = .5 + .5 * Math.sin(2 * Math.PI * hv / Sv);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * ev * Pv, 4), this.beaconBudget < 1) return;
        const gv = Math.floor(this.beaconBudget);
        this.beaconBudget -= gv;
        const [pv, dv, Nv] = zv.at, lv = [pv + .5, dv + 1.1, Nv + .5];
        this.beacon ??= vv.createParticles(dC, {
          pos: lv,
          half: hC
        }), this.beacon.moveTo(lv), this.beacon.emit(gv)
      }
      startBlast(vv, zv, Pv, hv) {
        var Sv;
        null === (Sv = this.beacon) || void 0 === Sv || Sv.dispose(), this.beacon = null, this.disposeCloud(vv);
        const ev = (0, Rp.isMobile)() ? .5 : 1;
        this.streams = [eC, gC, pC].map((vv => {
          const zv = Math.round(vv.count * ev);
          return {
            spec: vv,
            particles: null,
            rate: zv / ((vv.toMs - vv.fromMs) / 1e3),
            budget: 0,
            left: zv
          }
        })), this.cloud = {
          blast: Pv,
          startMs: hv
        };
        const gv = Math.max(.25, 1 - Pv.distance / (6 * Pv.r)),
          pv = Pv.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [Pv, hv, Sv] of SC) TC(vv, zv, Pv, gv * hv, Sv)
        }), pv))
      }
      emitCloud(vv, zv, Pv) {
        const {
          blast: hv,
          startMs: Sv
        } = this.cloud, ev = Pv - Sv, [gv, pv, dv] = hv.at, Nv = vC(hv.r);
        for (const lv of this.streams) {
          const {
            spec: Pv
          } = lv;
          if (lv.left <= 0 || ev < Pv.fromMs) continue;
          lv.budget += lv.rate * zv;
          const Sv = Math.min(Math.floor(lv.budget), lv.left);
          if (Sv < 1) continue;
          lv.budget -= Sv, lv.left -= Sv;
          const Tv = lv.particles ??= this.createStream(vv, Pv, hv);
          if (Pv === eC) {
            const vv = Nv.stemHalfWidth;
            Tv.moveTo([gv, pv + 1, dv], [vv, 1, vv])
          } else if (Pv === gC) {
            const vv = Nv.capSpread * Math.min(1, (ev - Pv.fromMs) / 3e3),
              zv = Math.sqrt(Math.random()),
              hv = 2 * Math.random() * Math.PI,
              Sv = Math.cos(hv) * zv,
              lv = Math.sin(hv) * zv,
              Wv = gv + Sv * vv,
              wv = dv + lv * vv,
              av = Nv.capThick,
              sv = pv + Nv.capHeight + av * (1 - zv * zv) * 2;
            Tv.setDirections([.7 * Sv, .05, .7 * lv], [Sv, .2, lv]), Tv.moveTo([Wv, sv, wv], [av, av, av])
          } else {
            this.ringAngle += 2.39996;
            const vv = Math.cos(this.ringAngle),
              zv = Math.sin(this.ringAngle);
            Tv.setDirections([vv, .05, zv], [vv, .1, zv]), Tv.moveTo([gv + 2 * vv, pv + .5, dv + 2 * zv], [0, .5, 0])
          }
          Tv.emit(Sv)
        }
      }
      createStream(vv, zv, Pv) {
        const {
          r: hv
        } = Pv, Sv = Math.max(zv.life[0], hv / 25), ev = zv === pC ? [.9 * Sv, Sv] : zv.life, gv = vC(hv), pv = zv === pC ? 1 : gv.puffScale, dv = {
          texture: Ks,
          GT: zv.count + 4,
          minLifeTime: ev[0] / PC,
          maxLifeTime: ev[1] / PC,
          minSize: zv.size[0] * pv,
          maxSize: zv.size[1] * pv,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, zv.gravity * PC * PC, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: zv.from[0],
            maxColor: zv.from[1]
          }, {
            timeFraction: .6,
            minColor: lC(zv.from[0], zv.to[0]),
            maxColor: lC(zv.from[1], zv.to[1])
          }, {
            timeFraction: 1,
            minColor: zv.to[0],
            maxColor: zv.to[1]
          }],
          blendMode: zv.blend
        };
        if (zv === eC) {
          const vv = gv.capHeight / ((ev[0] + ev[1]) / 2);
          dv.minEmitPower = .9 * vv * PC, dv.maxEmitPower = 1.05 * vv * PC, dv.dir1 = [-.1, 1, -.1], dv.dir2 = [.1, 1, .1]
        } else zv === gC ? (dv.minEmitPower = 1.2, dv.maxEmitPower = 2, dv.dir1 = [-1, .05, -1], dv.dir2 = [1, .2, 1]) : (dv.minEmitPower = 39.583333333333336, dv.maxEmitPower = 41.66666666666667, dv.dir1 = [1, 0, 0], dv.dir2 = [1, 0, 0]);
        return vv.createParticles(dv, {
          pos: Pv.at
        })
      }
      disposeCloud(vv) {
        for (const Pv of this.streams) {
          var zv;
          null === (zv = Pv.particles) || void 0 === zv || zv.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(vv)
      }
    }

    function lC(vv, zv) {
      return [(vv[0] + zv[0]) / 2, (vv[1] + zv[1]) / 2, (vv[2] + zv[2]) / 2, .75 * vv[3]]
    }

    function TC(vv, zv, Pv, hv, Sv) {
      try {
        vv.playSound(zv, Pv, hv, Sv)
      } catch (ev) {
        console.error(ev)
      }
    }
    const WC = {
        GT: 720,
        perS: 100
      },
      wC = {
        GT: 320,
        perS: 44
      };
    class aC {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(vv, zv) {
        this.zone = {
          centre: [...vv.centre],
          r: vv.r,
          band: vv.band ? [vv.band[0], vv.band[1]] : void 0
        }, this.endsAt = zv
      }
      stop() {
        this.zone = null
      }
      rG(vv, zv) {
        const {
          baf2FalloutMs: Pv,
          baf2FalloutAt: hv,
          baf2FalloutR: Sv,
          baf2FalloutY: ev
        } = vv;
        Pv > 0 && hv && void 0 !== Sv ? this.start({
          centre: hv,
          r: Sv,
          band: ev
        }, zv + Pv) : this.stop()
      }
      perS(vv, zv, Pv) {
        const hv = this.zone;
        if (!hv) return 0;
        const Sv = this.endsAt - vv;
        return Sv <= 0 ? (this.zone = null, 0) : hv.band && (zv[1] < hv.band[0] || zv[1] > hv.band[1]) || Math.hypot(zv[0] - hv.centre[0], zv[2] - hv.centre[2]) > hv.r ? 0 : Pv.perS * Math.min(1, Sv / 5e3)
      }
    }
    const sC = [5, 7],
      CC = [24, 8, 24],
      iC = .5,
      cC = 1 / .6,
      GC = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class mC {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rp.isMobile)();
        this.state = new aC, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(vv) {
          return vv ? wC : WC
        }(vv)
      }
      startFallout(vv, zv) {
        this.state.start(vv, zv)
      }
      stopFallout() {
        this.state.stop()
      }
      rG(vv) {
        this.state.rG(vv, performance.now())
      }
      onAfterRender(vv, zv) {
        var Pv;
        const hv = performance.now(),
          Sv = 0 === this.lastMs ? 0 : Math.min(hv - this.lastMs, 250) / 1e3;
        this.lastMs = hv;
        const ev = this.state.perS(hv, zv, this.tier);
        if (ev <= 0 || !vv.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + ev * Sv, ev / 4);
        const gv = Math.floor(this.budget);
        if (gv < 1) return;
        this.budget -= gv;
        const pv = this.at;
        pv[0] = zv[0], pv[1] = zv[1] + 12, pv[2] = zv[2];
        const dv = null !== (Pv = this.systems) && void 0 !== Pv ? Pv : this.create(vv, pv),
          Nv = this.amounts;
        Nv[0] = 0, Nv[1] = 0;
        for (let lv = 0; lv < gv; lv++) Nv[Math.random() < .3 ? 1 : 0]++;
        for (let lv = 0; lv < dv.length; lv++) Nv[lv] > 0 && (dv[lv].moveTo(pv, CC), dv[lv].emit(Nv[lv]))
      }
      dispose() {
        for (const zv of null !== (vv = this.systems) && void 0 !== vv ? vv : []) {
          var vv;
          zv.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(vv, zv) {
        return this.systems = GC.map((Pv => {
          let {
            rgba: [hv, Sv, ev, gv],
            share: pv
          } = Pv;
          const dv = {
            texture: "square_particle",
            GT: Math.ceil(this.tier.GT * pv),
            minLifeTime: sC[0] / cC,
            maxLifeTime: sC[1] / cC,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [iC, -1, iC],
            colorGradients: [{
              timeFraction: 0,
              minColor: [hv, Sv, ev, 0]
            }, {
              timeFraction: .15,
              minColor: [hv, Sv, ev, gv]
            }, {
              timeFraction: .8,
              minColor: [hv, Sv, ev, gv]
            }, {
              timeFraction: 1,
              minColor: [hv, Sv, ev, 0]
            }],
            blendMode: tp.f.Standard
          };
          return vv.createParticles(dv, {
            pos: zv,
            half: CC
          })
        })), this.systems
      }
    }
    const jC = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function fC(vv) {
      const zv = /\|rot(\d)/.exec(vv);
      return jC[zv ? Number(zv[1]) : 1]
    }
    var FC = Pv(618),
      YC = Pv(37989);
    const nC = new Set(FC.q);

    function OC(vv) {
      if (-2 !== vv.count) return null;
      const zv = yv(vv.item);
      return null !== zv && nC.has(zv) ? zv : null
    }

    function DC(vv) {
      const {
        width: zv,
        height: Pv
      } = (0, YC.c)(vv).hitBoxDimensions;
      return .55 / Math.max(zv, Pv)
    }

    function KC(vv, zv, Pv) {
      if (!Pv) return !1;
      const hv = vv[0] + .5 - zv[0],
        Sv = vv[1] + .5 - zv[1],
        ev = vv[2] + .5 - zv[2];
      return hv * hv + Sv * Sv + ev * ev <= 576
    }

    function VC(vv, zv) {
      return Math.atan2(vv[0], vv[2]) + Math.PI + zv
    }

    function UC(vv, zv) {
      const Pv = 2 * Math.PI;
      return (vv + Pv * zv / 1e4) % Pv
    }
    class RC {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = vv, this.now = zv, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = vv.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(vv, zv) {
        if (0 === this.farms.size) return;
        const Pv = this.now(),
          hv = Number.isNaN(this.frameMs) ? 0 : Math.min(Pv - this.frameMs, 100);
        this.frameMs = Pv, Pv - this.checkedMs >= 1e3 && (this.checkedMs = Pv, this.check(vv, zv));
        for (const Sv of this.farms.values()) Sv.shown && Sv.running && null !== Sv.model && hv > 0 && (Sv.spin = UC(Sv.spin, hv), Sv.model.setPose(Sv.feet, VC(Sv.front, Sv.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const vv of this.farms.values()) this.drop(vv);
        this.farms.clear()
      }
      sync() {
        const vv = new Set;
        for (const zv of this.labels.list()) {
          const Pv = OC(zv);
          if (null === Pv) continue;
          vv.add(zv.key);
          const hv = this.farms.get(zv.key);
          if ((null === hv || void 0 === hv ? void 0 : hv.mob) === Pv) continue;
          hv && this.drop(hv);
          const [Sv, ev, gv] = zv.pos;
          this.farms.set(zv.key, {
            pos: zv.pos,
            feet: [Sv + .5, ev + 1, gv + .5],
            mob: Pv,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [zv, Pv] of this.farms) vv.has(zv) || (this.drop(Pv), this.farms.delete(zv));
        this.checkedMs = -1 / 0
      }
      check(vv, zv) {
        for (const Pv of this.farms.values()) {
          const [hv, Sv, ev] = Pv.pos, gv = xa(vv, Pv.pos);
          null !== gv && UP(gv) === qv && KC(Pv.pos, zv, "Air" === xa(vv, [hv, Sv + 1, ev])) ? (Pv.running = gv.endsWith("|Running"), Pv.front = fC(gv), null === Pv.model && (Pv.model = vv.createMobModel(Pv.mob, DC(Pv.mob)), null === Pv.model) || (Pv.model.setPose(Pv.feet, VC(Pv.front, Pv.spin)), Pv.shown || (Pv.model.setVisible(!0), Pv.shown = !0))) : (Pv.shown && null !== Pv.model && Pv.model.setVisible(!1), Pv.shown = !1)
        }
      }
      drop(vv) {
        var zv;
        null === (zv = vv.model) || void 0 === zv || zv.dispose(), vv.model = null, vv.shown = !1
      }
    }
    class xC {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(vv) {
        var zv;
        this.island = vv.baf2ColIsland, this.islandSite = (zv = vv.baf2ColSite) && 8 === zv.length ? {
          spawnXZ: [zv[0], zv[1]],
          coreXZ: [zv[2], zv[3]],
          minXZ: [zv[4], zv[5]],
          maxXZ: [zv[6], zv[7]]
        } : null, this.views = vv.baf2ColList.map((vv => ({
          entry: gS(vv)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(vv) {
        this.status = vv, this.emit()
      }
      onOpen(vv) {
        this.openHeld = vv
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
        return this.views.map((vv => vv.entry))
      }
      entryAtRoot(vv) {
        var zv;
        return null === (zv = this.views.find((zv => {
          let {
            entry: Pv
          } = zv;
          return Pv.focus[0] === vv[0] && Pv.focus[1] === vv[1] + 1 && Pv.focus[2] === vv[2]
        }))) || void 0 === zv ? void 0 : zv.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(vv, zv) {
        return Ld(this.entries(), vv, zv)
      }
      lookSource() {
        return {
          handles: vv => Wh(vv) >= 0 || wh(vv),
          line: (vv, zv) => this.lookLine(vv, zv),
          version: () => this.beamsVersion
        }
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const vv of this.listeners) vv()
      }
    }
    const tC = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((vv => vv / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((vv => [vv, vv + 1, vv + 2, vv, vv + 2, vv + 3]))
    };

    function qC(vv, zv, Pv, hv, Sv, ev, gv) {
      let pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const dv = Math.cos(pv),
        Nv = Math.sin(pv),
        lv = vv.positions.length / 3,
        {
          positions: Tv,
          indices: Wv
        } = tC;
      for (let wv = 0; wv < Tv.length; wv += 3) {
        const pv = Tv[wv] * Sv,
          lv = Tv[wv + 2] * gv;
        vv.positions.push(zv + pv * dv + lv * Nv, Pv + Tv[wv + 1] * ev, hv - pv * Nv + lv * dv)
      }
      for (const wv of Wv) vv.indices.push(lv + wv)
    }

    function IC(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return zv < 1 ? {
        rgb: vv,
        alpha: zv
      } : {
        rgb: vv,
        alpha: 1,
        opaque: !0
      }
    }
    class QC {
      constructor(vv, zv) {
        this.style = vv, this.perSource = zv, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(vv) {
        this.sources = vv, 0 === vv.length && (this.budget = 0)
      }
      MT(vv, zv, Pv) {
        const hv = this.sources.length;
        if (0 !== hv) {
          var Sv, ev;
          this.budget = Math.min(this.budget + (Sv = hv, ev = this.perSource, Math.min(Sv * ev, zN) * zv), 2);
          for (let zv = 0; zv < hv && this.budget >= 1; zv++) {
            const zv = this.sources[this.cursor % hv];
            this.cursor = (this.cursor + 1) % hv;
            if (!(Math.max(Math.abs(zv.x - Pv[0]), Math.abs(zv.y - Pv[1]), Math.abs(zv.z - Pv[2])) > 32)) return this.puff(vv, zv), void this.budget--
          }
        }
      }
      dispose() {
        var vv;
        null === (vv = this.particles) || void 0 === vv || vv.dispose(), this.particles = null, this.sources = []
      }
      puff(vv, zv) {
        let {
          x: Pv,
          y: hv,
          z: Sv,
          h: ev,
          faces: gv
        } = zv;
        const pv = function(vv, zv, Pv, hv, Sv) {
            const [ev, gv, pv] = Sv[Math.floor(Math.random() * Sv.length)], dv = .04, Nv = (vv, zv, Pv) => vv > 0 ? zv + Pv + dv : vv < 0 ? zv - dv : zv + .1, lv = (vv, zv, Pv) => vv > 0 ? zv + Pv + dv : vv < 0 ? zv - dv : zv + Pv - .1, Tv = [Nv(ev, vv, 1), Nv(gv, zv, hv), Nv(pv, Pv, 1)], Wv = [lv(ev, vv, 1), lv(gv, zv, hv), lv(pv, Pv, 1)];
            return {
              pos: [(Tv[0] + Wv[0]) / 2, (Tv[1] + Wv[1]) / 2, (Tv[2] + Wv[2]) / 2],
              half: [(Wv[0] - Tv[0]) / 2, (Wv[1] - Tv[1]) / 2, (Wv[2] - Tv[2]) / 2],
              out: [ev, gv, pv]
            }
          }(Pv, hv, Sv, ev, gv),
          {
            style: dv
          } = this,
          Nv = this.particles ??= vv.createParticles(Us(dv, Math.ceil(dv.count * zN * dv.life[1]) + 4), pv);
        Nv.moveTo(pv.pos, pv.half);
        const [lv, Tv, Wv] = pv.out, wv = dv.spread;
        Nv.setDirections([lv - wv, .6 + Tv, Wv - wv], [lv + wv, 1 + Tv, Wv + wv]), Nv.emit(dv.count)
      }
    }
    const ZC = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class AC {
      constructor() {
        this.green = new QC(hN.green, ud), this.pink = new QC(hN.pink, vN), this.colliders = [], this.lastMs = 0
      }
      setSources(vv) {
        this.colliders = vv;
        const zv = [],
          Pv = [];
        for (const hv of vv) {
          const [vv, Sv, ev] = hv.focus;
          zv.push({
            x: vv,
            y: Sv - 1,
            z: ev,
            h: 2,
            faces: ZC
          });
          for (let zv = 0; zv < 4; zv++) {
            if (!hv.live[zv]) continue;
            const [vv, Sv, ev] = Ch(hv.focus, zv, gh.LASER_D), [gv, , pv] = sh[zv], dv = ZC.filter((vv => vv[0] !== gv || vv[2] !== pv || 0 !== vv[1]));
            Pv.push({
              x: vv,
              y: Sv,
              z: ev,
              h: 1,
              faces: dv
            })
          }
        }
        this.green.setSources(zv), this.pink.setSources(Pv)
      }
      onAfterRender(vv) {
        const zv = performance.now(),
          Pv = 0 === this.lastMs ? 0 : Math.min(zv - this.lastMs, 250) / 1e3;
        if (this.lastMs = zv, 0 === this.colliders.length || !vv.particlesEnabled()) return;
        const hv = vv.getCameraPosition();
        this.green.MT(vv, Pv, hv), this.pink.MT(vv, Pv, hv)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const LC = 1.04,
      HC = IC([1, 120 / 255, 220 / 255]),
      MC = IC([1, .25, .25], .35);
    class yC {
      constructor(vv) {
        this.store = vv, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new AC
      }
      onAfterRender(vv) {
        this.store.version() !== this.builtVersion && this.rebuild(vv);
        const zv = performance.now();
        for (const Pv of this.beams) {
          const hv = 1 + .35 * Math.sin(zv / 700 * Math.PI * 2 + Pv.phase);
          vv.setGameMesh(Pv.mesh, {
            scale: [Pv.alongX ? 1 : hv, hv, Pv.alongX ? hv : 1]
          })
        }
        this.glow.onAfterRender(vv)
      }
      dispose(vv) {
        this.clear(vv), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(vv) {
        this.clear(vv), this.builtVersion = this.store.version();
        const zv = [];
        for (const {
            entry: Pv
          }
          of this.store.colliders()) Pv.on && Pv.live.some(Boolean) && (this.addBeams(vv, Pv), zv.push(Pv)), Pv.blockers.length > 0 && this.addMarkers(vv, Pv);
        this.glow.setSources(zv)
      }
      addBeams(vv, zv) {
        const [Pv, hv, Sv] = zv.focus, ev = Xd - .25, gv = (.25 + Xd) / 2;
        for (let pv = 0; pv < 4; pv++) {
          if (!zv.live[pv]) continue;
          const [dv, , Nv] = sh[pv], lv = 0 !== dv, Tv = {
            positions: [],
            indices: []
          };
          qC(Tv, 0, 0, 0, lv ? ev : .2, .2, lv ? .2 : ev);
          const Wv = [Pv + .5 + dv * gv, hv + .5, Sv + .5 + Nv * gv],
            wv = vv.createGameMesh(Tv, HC, Wv);
          this.meshes.push(wv), this.beams.push({
            mesh: wv,
            alongX: lv,
            phase: pv * Math.PI / 2
          })
        }
      }
      addMarkers(vv, zv) {
        const Pv = zv.blockers[0],
          hv = {
            positions: [],
            indices: []
          };
        for (const [Sv, ev, gv] of zv.blockers) qC(hv, Sv - Pv[0] + .5, ev - Pv[1] + .5, gv - Pv[2] + .5, LC, LC, LC);
        this.meshes.push(vv.createGameMesh(hv, MC, Pv))
      }
      clear(vv) {
        for (const zv of this.meshes) vv.disposeGameMesh(zv);
        this.meshes = [], this.beams = []
      }
    }
    const BC = [.56, .83, 1],
      JC = [1, .73, .08],
      EC = [1, .25, .25],
      oC = [.85, .85, .85],
      bC = [.3, .45, .6];

    function rC(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const gv = Sv / 2,
        pv = Sv + ev;
      for (const dv of [-gv, gv])
        for (const Sv of [-gv, gv]) qC(vv, zv, Pv + dv, hv + Sv, pv, ev, ev), qC(vv, zv + dv, Pv, hv + Sv, ev, pv, ev), qC(vv, zv + dv, Pv + Sv, hv, ev, ev, pv)
    }

    function kC(vv) {
      return zv => vv.isBlockInLoadedChunk(zv[0], zv[1], zv[2]) && 0 === vv.getBlockId(zv[0], zv[1], zv[2])
    }

    function XC(vv) {
      return vv.map((vv => {
        let {
          free: zv,
          blocked: Pv,
          gaps: hv,
          supports: Sv
        } = vv;
        return `${zv.join(";")}|${Pv.join(";")}|${hv.join(";")}|${Sv.join(";")}`
      })).join("/")
    }

    function uC(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const ev = zv[0],
        gv = {
          positions: [],
          indices: []
        };
      for (const [pv, dv, Nv] of zv) rC(gv, pv - ev[0] + .5, dv - ev[1] + .5, Nv - ev[2] + .5, hv, Sv);
      return vv.createGameMesh(gv, Pv, ev)
    }
    class vi {
      constructor(vv) {
        this.store = vv, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(vv, zv, Pv) {
        var hv;
        const Sv = null === (hv = vv.Avv(zv)) || void 0 === hv ? void 0 : hv.name;
        if (Sv !== dh && Sv !== ph) return void("" !== this.shownKey && this.show(vv, "", []));
        const ev = performance.now();
        if (ev - this.lastCheckMs >= 200 && (this.lastCheckMs = ev, Sv === dh ? this.check(vv, Pv) : this.preview(vv, Pv)), this.pulses.length > 0) {
          const zv = 1 + .12 * Math.sin(ev / 1e3 * 1.25 * Math.PI * 2),
            Pv = [zv, zv, zv];
          for (const hv of this.pulses) vv.setGameMesh(hv, {
            scale: Pv
          })
        }
      }
      dispose(vv) {
        this.clear(vv), this.shownKey = ""
      }
      check(vv, zv) {
        const Pv = kC(vv),
          hv = [];
        for (const {
            entry: ev
          }
          of this.store.colliders()) {
          ev.focus.every(((vv, Pv) => Math.abs(vv + .5 - zv[Pv]) <= gh.GHOST_REACH)) && hv.push(kd(ev, Pv))
        }
        const Sv = XC(hv);
        Sv !== this.shownKey && this.show(vv, Sv, hv)
      }
      preview(vv, zv) {
        const Pv = vv.getTargetedBlock(),
          hv = Pv ? [Pv.vC[0], Pv.vC[1], Pv.vC[2]] : null,
          Sv = null !== hv && hv.every(((vv, Pv) => Math.abs(vv + .5 - zv[Pv]) <= 8)),
          ev = this.store.site(),
          gv = Sv && ev ? function(vv, zv, Pv) {
            const hv = ah(vv);
            if (!hv.every(zv)) return null;
            const Sv = Gh(vv, Pv);
            return {
              column: hv,
              spots: kd({
                focus: hv[1],
                lasers: [!1, !1, !1, !1],
                open: Sv,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, zv),
              fits: Sv.filter(Boolean).length >= gh.MIN_SPOTS
            }
          }(hv, kC(vv), ev) : null,
          pv = gv ? [gv.spots] : [],
          dv = gv ? `preview ${hv.join(",")}|${gv.fits}|${XC(pv)}` : "";
        var Nv, lv;
        dv !== this.shownKey && this.show(vv, dv, pv, null !== (Nv = null === gv || void 0 === gv ? void 0 : gv.column) && void 0 !== Nv ? Nv : [], null === (lv = null === gv || void 0 === gv ? void 0 : gv.fits) || void 0 === lv || lv)
      }
      show(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Sv = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(vv), this.shownKey = zv, hv.length > 0 && this.meshes.push(uC(vv, hv, IC(Sv ? oC : EC)));
        for (const {
            free: ev,
            blocked: gv,
            gaps: pv,
            supports: dv
          }
          of Pv) {
          for (const [zv, Pv, hv] of ev) {
            const Sv = {
              positions: [],
              indices: []
            };
            rC(Sv, 0, 0, 0);
            const ev = vv.createGameMesh(Sv, IC(BC), [zv + .5, Pv + .5, hv + .5]);
            this.meshes.push(ev), this.pulses.push(ev)
          }
          gv.length > 0 && this.meshes.push(uC(vv, gv, IC(JC))), pv.length > 0 && this.meshes.push(uC(vv, pv, IC(EC), 1.06, .07)), dv.length > 0 && this.meshes.push(uC(vv, dv, IC(bC)))
        }
      }
      clear(vv) {
        for (const zv of this.meshes) vv.disposeGameMesh(zv);
        this.meshes = [], this.pulses = []
      }
    }
    class zi {
      constructor() {
        this.stored = new Map, this.Vp = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(vv) {
        if (!vv.baf2TermOpen) return !1;
        vv.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [zv, Pv] of vv.baf2TermItems) Pv > 0 ? this.stored.set(zv, Pv) : this.stored.delete(zv);
        if (vv.baf2TermHeld && (this.Vp = new Map(vv.baf2TermHeld)), this.pending = this.pending.filter((zv => zv.seq > vv.baf2TermAcked)), this.silos = vv.baf2TermSilos, this.readOnly = vv.baf2TermReadOnly, this.pocket = !0 === vv.baf2TermPocket, vv.baf2TermReset) this.resort();
        else {
          const vv = new Set(this.order);
          for (const zv of this.stored.keys()) vv.has(zv) || this.order.push(zv)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((vv, zv) => this.amount(zv) - this.amount(vv) || vv.localeCompare(zv))), this.changed()
      }
      take(vv, zv) {
        const Pv = pz(vv, this.amount(zv));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: zv,
          amount: Pv,
          put: !1
        }), this.recents = [zv, ...this.recents.filter((vv => vv !== zv))].slice(0, 6), this.changed(), Pz(this.seq, vv, zv)
      }
      put(vv, zv) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: zv,
          amount: pz(vv, this.heldAmount(zv)),
          put: !0
        }), this.changed(), hz(this.seq, vv, zv)
      }
      putAll() {
        this.seq++;
        for (const vv of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: vv,
          amount: this.heldAmount(vv),
          put: !0
        });
        return this.changed(), Sz(this.seq)
      }
      amount(vv) {
        var zv;
        let Pv = null !== (zv = this.stored.get(vv)) && void 0 !== zv ? zv : 0;
        for (const hv of this.pending) hv.item === vv && (Pv += hv.put ? hv.amount : -hv.amount);
        return Math.max(0, Pv)
      }
      heldAmount(vv) {
        var zv;
        let Pv = null !== (zv = this.Vp.get(vv)) && void 0 !== zv ? zv : 0;
        for (const hv of this.pending) hv.put && hv.item === vv && (Pv -= hv.amount);
        return Math.max(0, Pv)
      }
      heldItems() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((zv => zv === vv || this.heldAmount(zv) > 0))
      }
      items() {
        return this.order.filter((vv => this.amount(vv) > 0))
      }
      recent() {
        return this.recents.filter((vv => this.amount(vv) > 0))
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
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      changed() {
        this.version++;
        for (const vv of this.listeners) vv()
      }
    }
    var Pi = Pv(37943);
    const Si = {
      isBlock: vv => void 0 !== Uv.g[vv],
      harvestType: vv => {
        var zv;
        return null === (zv = Uv.g[vv]) || void 0 === zv ? void 0 : zv.harvestType
      },
      harvestLevel: vv => {
        var zv;
        return null === (zv = Uv.g[vv]) || void 0 === zv ? void 0 : zv.harvestLevel
      },
      dropsNothing: vv => {
        var zv;
        return null === (null === (zv = Uv.g[vv]) || void 0 === zv ? void 0 : zv.drops)
      },
      displayName: vv => {
        var zv;
        return null === (zv = Xg.r[vv]) || void 0 === zv ? void 0 : zv.displayName
      },
      description: vv => {
        var zv;
        return null === (zv = Xg.r[vv]) || void 0 === zv ? void 0 : zv.description
      },
      harvests: vv => {
        var zv;
        return null === (zv = Xg.r[vv]) || void 0 === zv ? void 0 : zv.harvests
      },
      level: vv => {
        var zv;
        return null === (zv = Xg.r[vv]) || void 0 === zv ? void 0 : zv.level
      }
    };

    function ei(vv, zv, Pv) {
      return function(vv, zv, Pv, hv) {
        var Sv, ev;
        const gv = zv.split("|")[0],
          pv = vv.isBlock(zv) ? zv : vv.isBlock(gv) ? gv : null;
        if (null === pv || "rock" !== vv.harvestType(pv) || vv.dropsNothing(pv) && !Zh.has(gv)) return null;
        const dv = Pv && "rock" === vv.harvests(Pv) ? null !== (Sv = vv.level(Pv)) && void 0 !== Sv ? Sv : 0 : null,
          Nv = null !== (ev = null !== hv && void 0 !== hv ? hv : vv.harvestLevel(pv)) && void 0 !== ev ? ev : 0;
        return (null !== dv ? Nv <= dv : 0 === vv.harvestLevel(pv)) ? null : Oh(vv, Nv)
      }(Si, vv, zv, Pv)
    }

    function gi(vv, zv) {
      return function(vv, zv, Pv) {
        if (zv === nh[0]) return [(0, tv.Md)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, tv.L.whiteUiText)];
        const hv = Pv.split("|")[0],
          Sv = vv.isBlock(hv) ? vv.displayName(hv) : void 0,
          ev = "string" === typeof Sv ? Sv : Sv && "translationKey" in Sv ? `$t(${Sv.translationKey})` : hv;
        return [(0, tv.Md)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: ev
          }
        }, tv.L.whiteUiText), (0, tv.Md)({
          translationKey: `item:${(0,tv.ee)(zv)}`
        }, tv.L.yellowUiText)]
      }(Si, vv, zv)
    }
    const di = "buildAFactory2Game:";
    const Ni = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function li(vv) {
      return vv.endsWith(" Ore")
    }
    const Ti = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Wi = [],
      wi = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Ti,
        plan: null,
        atomic: Wi
      },
      ai = "buildAFactory2Game:",
      si = new Set(["Splitter", "Sorting Gate"]),
      Ci = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class ii {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = vv, this.planAt = zv, this.tierOf = Pv, this.yN = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Vp = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = wi, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(vv, zv, Pv) {
        var hv, Sv, ev;
        let gv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pv = null !== (hv = null === (Sv = vv.Avv(zv)) || void 0 === Sv ? void 0 : Sv.name) && void 0 !== hv ? hv : null,
          dv = vv.isPlayerCrouching(zv),
          Nv = 0 === Pv ? null : this.resolve(vv, Pv),
          lv = null !== Nv && null !== gv && si.has(Nv.rootName) && function(vv, zv) {
            return Ci.some((Pv => {
              let [hv, Sv] = Pv;
              const ev = vv.getBlockId(zv[0] + hv, zv[1], zv[2] + Sv);
              return 0 !== ev && "Express Belt" === vv.getMetaInfo(ev).rootName
            }))
          }(vv, gv),
          Tv = this.updatePlan(0 === Pv ? null : gv),
          Wv = this.tierOf(),
          wv = null === gv ? null : (0, Pi.h)(Pv),
          av = null !== wv && null !== gv && (0, Pi.i)(function(vv) {
            return (zv, Pv, hv) => vv.getBlockId(zv, Pv, hv)
          }(vv), gv[0], gv[1], gv[2], wv),
          sv = this.readAfloat(vv, Pv, gv);
        if (Pv === this.yN && av === this.missesMaker && sv === this.afloat && pv === this.Vp && dv === this.crouching && lv === this.express && Wv === this.tier && !Tv && (!this.targetsLive || !this.liveMoved(gv))) return;
        this.yN = Pv, this.missesMaker = av, this.afloat = sv, this.Vp = pv, this.crouching = dv, this.express = lv;
        const Cv = lv && Nv ? function(vv) {
          if (null === vv.info) return null;
          return vv.express ??= {
            ...vv.info,
            detail: `${ai}lookKeepsUpExpress`,
            detailItem: null
          }, vv.express
        }(Nv) : null !== Nv && av && null !== wv ? this.besideMaker(Nv, Pv, wv) : null !== Nv && sv ? this.hanging(Nv) : null !== (ev = null === Nv || void 0 === Nv ? void 0 : Nv.info) && void 0 !== ev ? ev : null;
        this.tier = Wv;
        const iv = Nv && Cv ? function(vv, zv) {
          var Pv, hv;
          const Sv = Uv.g[vv];
          if (!vv.endsWith(" Ore") || "rock" !== (null === Sv || void 0 === Sv ? void 0 : Sv.harvestType) || 0 === Sv.harvestLevel) return null;
          const ev = null !== (Pv = Sv.harvestLevel) && void 0 !== Pv ? Pv : 0,
            gv = zv ? Xg.r[zv] : void 0;
          if ("rock" === (null === gv || void 0 === gv ? void 0 : gv.harvests) && (null !== (hv = gv.level) && void 0 !== hv ? hv : 0) >= ev) return null;
          const pv = (dv = ev, Oh(Si, dv));
          var dv;
          if (null === pv) return null;
          const Nv = Pe(pv),
            lv = /^[AEIOU]/.test(pv) ? "An" : "";
          if ("rock" === (null === gv || void 0 === gv ? void 0 : gv.harvests) && zv) return {
            key: `${ai}lookToolTooWeak${lv}`,
            Vp: Pe(zv),
            needed: Nv
          };
          return {
            key: pv === nh[0] ? `${ai}lookNeedAnyPickaxe` : `${ai}lookNeedPickaxe${lv}`,
            Vp: null,
            needed: Nv
          }
        }(Nv.rootName, pv) : null;
        this.targetsLive = !0 === (null === Nv || void 0 === Nv ? void 0 : Nv.live) && null !== gv;
        let cv = null;
        this.targetsLive && Nv && gv && this.live && (this.livePos[0] = gv[0], this.livePos[1] = gv[1], this.livePos[2] = gv[2], this.liveVersion = this.live.version(), cv = this.live.line(Nv.rootName, gv));
        const Gv = null === Cv ? Ti : function(vv, zv, Pv) {
            const hv = function(vv, zv, Pv) {
              const hv = xP(vv);
              if (null === hv) return null;
              const Sv = `${di}lookPortMode_${hv}`,
                ev = Hh(zv);
              if (ev && Pv) return {
                mode: null,
                detail: Sv,
                next: `${di}lookWrenchPickUp`,
                nextState: null
              };
              const gv = tP(vv),
                pv = null === gv ? null : xP(gv);
              return null === pv ? {
                mode: null,
                detail: Sv,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Sv,
                next: ev ? `${di}lookWrenchNext` : `${di}lookPortWrench`,
                nextState: `${di}lookPortState_${pv}`
              }
            }(vv, zv, Pv);
            if (null !== hv) return hv;
            const Sv = PS(vv, zv, Pv);
            return null === Sv.mode && null === Sv.next ? Ti : Sv
          }(vv.blockIdToBlockName(Pv), pv, dv),
          mv = this.plan,
          jv = Nv && Cv ? this.rowsOf(Nv.rootName, Wv) : Wi,
          fv = this.snapshot;
        if (!(null === Cv ? !fv.visible : fv.visible && Cv === fv.info && (Fv = iv, Yv = fv.tool, Fv === Yv || null !== Fv && null !== Yv && Fv.key === Yv.key && Fv.Vp === Yv.Vp && Fv.needed === Yv.needed) && function(vv, zv) {
            return vv === zv || null !== vv && null !== zv && vv.key === zv.key && JSON.stringify([vv.params, vv.keys]) === JSON.stringify([zv.params, zv.keys])
          }(cv, fv.live) && function(vv, zv) {
            return vv.mode === zv.mode && vv.detail === zv.detail && vv.next === zv.next && vv.nextState === zv.nextState
          }(Gv, fv.wrench) && Ba(mv, fv.plan) && jv === fv.atomic)) {
          var Fv, Yv;
          this.snapshot = null === Cv ? {
            ...fv,
            visible: !1
          } : {
            info: Cv,
            visible: !0,
            tool: iv,
            live: cv,
            wrench: Gv,
            plan: mv,
            atomic: jv
          };
          for (const vv of this.listeners) vv()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = wi, this.yN = 0, this.Vp = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(vv, zv, Pv) {
        if (null === Pv || 0 === zv || !pv() || !li(this.resolve(vv, zv).rootName)) return !1;
        const hv = `${Pv[0]},${Pv[1]},${Pv[2]},${zv}`,
          Sv = performance.now();
        return hv === this.afloatKey && Sv - this.afloatAt < ci ? this.afloat : (this.afloatKey = hv, this.afloatAt = Sv, function(vv, zv) {
          for (const [Pv, hv, Sv] of Ni) {
            const ev = zv(vv[0] + Pv, vv[1] + hv, vv[2] + Sv);
            if (void 0 === ev || null !== ev && !li(ev)) return !1
          }
          return !0
        }(Pv, ((zv, Pv, hv) => function(vv, zv, Pv, hv) {
          if (!vv.isBlockInLoadedChunk(zv, Pv, hv)) return;
          const Sv = vv.getBlockId(zv, Pv, hv);
          return 0 === Sv ? null : vv.getMetaInfo(Sv).rootName
        }(vv, zv, Pv, hv))))
      }
      liveMoved(vv) {
        var zv;
        const {
          livePos: Pv
        } = this;
        return null === vv || vv[0] !== Pv[0] || vv[1] !== Pv[1] || vv[2] !== Pv[2] || (null === (zv = this.live) || void 0 === zv ? void 0 : zv.version()) !== this.liveVersion
      }
      updatePlan(vv) {
        const zv = null === vv ? "" : vv.join(","),
          Pv = performance.now();
        if (zv === this.planPos && Pv - this.planMs < 250) return !1;
        this.planPos = zv, this.planMs = Pv;
        const hv = null === vv ? null : this.planAt([vv[0], vv[1], vv[2]]),
          Sv = !Ba(hv, this.plan);
        return this.plan = hv, Sv
      }
      besideMaker(vv, zv, Pv) {
        let {
          info: hv
        } = vv;
        if (null === hv) return null;
        let Sv = this.besideMakerById.get(zv);
        if (void 0 === Sv) {
          const vv = "cryo" === Pv ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Sv = {
            ...hv,
            detail: `${ai}${vv}`,
            detailItem: null
          }, this.besideMakerById.set(zv, Sv)
        }
        return Sv
      }
      hanging(vv) {
        let {
          info: zv,
          rootName: Pv
        } = vv;
        if (null === zv) return null;
        let hv = this.afloatByRoot.get(Pv);
        return void 0 === hv && (hv = {
          ...zv,
          detail: `${ai}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(Pv, hv)), hv
      }
      rowsOf(vv, zv) {
        if (null === zv) return Wi;
        const Pv = `${vv}|${zv}`;
        let hv = this.rowsByKey.get(Pv);
        if (void 0 === hv) {
          const Sv = function(vv, zv) {
            var Pv;
            if (!(vv in tz)) return [];
            const hv = null !== (Pv = qz[vv]) && void 0 !== Pv ? Pv : [],
              Sv = new Map;
            for (const gv of He(vv, zv))
              if ((hv.includes(gv) || Le(gv.output) && Ze(gv.output) > rv(vv)) && Ze(gv.output) <= zv) {
                var ev;
                const vv = null !== (ev = Sv.get(gv.output)) && void 0 !== ev ? ev : [];
                vv.push(gv.input), Sv.set(gv.output, vv)
              } return ye([...Sv], (vv => {
              let [zv] = vv;
              return -Ze(zv)
            })).map((vv => {
              let [zv, Pv] = vv;
              return {
                output: zv,
                inputs: Pv
              }
            }))
          }(vv, zv);
          hv = Sv.length > 0 ? Sv : Wi, this.rowsByKey.set(Pv, hv)
        }
        return hv
      }
      resolve(vv, zv) {
        const {
          rootId: Pv,
          rootName: hv
        } = vv.getMetaInfo(zv), Sv = (0, aP.m)(hv) ? zv : Pv;
        let ev = this.byRootId.get(Sv);
        const gv = pv();
        if (void 0 === ev || ev.nuclear !== gv) {
          var dv;
          const Pv = function(vv) {
            return Ih(Si, vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv)
          }(hv, vv.blockIdToBlockName(zv));
          ev = {
            info: Pv,
            rootName: hv,
            live: null !== Pv && !0 === (null === (dv = this.live) || void 0 === dv ? void 0 : dv.handles(hv)),
            nuclear: gv
          }, this.byRootId.set(Sv, ev)
        }
        return ev
      }
    }
    const ci = 500;
    const Gi = (0, hv.memo)((function(vv) {
      var zv, Pv;
      let {
        store: Sv
      } = vv;
      const {
        t: ev
      } = (0, OS.x)(), [gv, pv] = (0, hv.useState)((() => Sv.get()));
      (0, hv.useEffect)((() => (pv(Sv.get()), Sv.subscribe((() => {
        pv(Sv.get())
      })))), [Sv]);
      const {
        openInGameMenuName: dv,
        openEverythingMenuName: Nv,
        isTouchScreen: lv
      } = (0, GS.i)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Tv,
        tool: Wv,
        live: wv,
        wrench: av,
        atomic: sv
      } = gv, Cv = gv.visible && null === dv && null === Nv;
      if (null === Tv) return null;
      const iv = null !== av.detail ? ev(av.detail) : null !== (zv = gv.plan) && void 0 !== zv && zv.ctrl ? ev("buildAFactory2Game:lookPlanCtrl") : null !== Tv.detail ? ev(Tv.detail, null === Tv.detailItem ? void 0 : {
        item: ev(Tv.detailItem)
      }) : null;
      return (0, Ye.jsxs)("div", {
        className: fS()("Baf2LookTarget", {
          Visible: Cv
        }),
        "aria-hidden": !Cv,
        children: [(0, Ye.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: ev(Tv.name)
        }), null !== gv.plan && (0, Ye.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ev(gv.plan.key, {
            kind: ev(gv.plan.kindKey),
            w: String(gv.plan.w),
            h: String(gv.plan.h),
            d: String(gv.plan.d),
            count: String(gv.plan.count)
          })
        }), void 0 !== (null === (Pv = gv.plan) || void 0 === Pv ? void 0 : Pv.why) && (0, Ye.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: ev(gv.plan.why)
        }), null !== av.mode && (0, Ye.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ev(av.mode)
        }), null !== Wv ? (0, Ye.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: ev(Wv.key, {
            item: ev(Wv.needed),
            Vp: null === Wv.Vp ? "" : ev(Wv.Vp)
          })
        }) : null !== wv ? (0, Ye.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ev(wv.key, SN(ev, wv))
        }) : null !== iv && (0, Ye.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iv
        }), sv.length > 0 && (0, Ye.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ev("buildAFactory2Game:lookAtomicRecipes", {
            list: sv.map((vv => {
              let {
                output: zv,
                inputs: Pv
              } = vv;
              const hv = Pv.length > 1 ? ` ${ev("buildAFactory2Game:recipeMore",{count:String(Pv.length-1)})}` : "";
              return `${ev(Pe(Pv[0]))}${hv} \u2192 ${ev(Pe(zv))}`
            })).join(", ")
          })
        }), null !== av.next && (0, Ye.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ev(av.next, {
            state: null === av.nextState ? "" : ev(av.nextState),
            use: ev(lv ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var mi = Pv(38051);
    const ji = [],
      fi = [
        [0, -1, 0]
      ];

    function Fi(vv) {
      const zv = [vv];
      for (let Pv = 1; Pv <= 4; Pv++) Pv > 1 && zv.push(`${vv}|meta|rot${Pv}`), zv.push(`${vv}|meta|rot${Pv}|Running`);
      return zv
    }

    function Yi(vv, zv) {
      return [Math.floor(vv[0] / zv), Math.floor(vv[1] / zv), Math.floor(vv[2] / zv)]
    }

    function ni(vv, zv, Pv) {
      return `${vv},${zv},${Pv}`
    }

    function Oi(vv) {
      const zv = vv.split("|")[0];
      if (!NP(zv)) return ji;
      const Pv = tz[zv];
      if (zP(Pv)) return fi;
      const hv = fC(vv);
      return PP(Pv) ? [
        [-hv[0], -hv[1], -hv[2]]
      ] : FS(Pv) ? function(vv, zv) {
        const Pv = vv[0] - 2 * zv[0],
          hv = vv[2] - 2 * zv[2],
          Sv = [];
        for (let ev = -1; ev <= 1; ev++)
          for (let zv = -1; zv <= 1; zv++) Sv.push([Pv + ev, vv[1], hv + zv]);
        return Sv
      }([0, 0, 0], hv) : ji
    }
    const Di = [.5, .5, .5],
      Ki = [.2, .8, .3],
      Vi = [.45, 1, .5];
    class Ui {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(vv) {
        this.indexed = !0;
        for (const zv of Dz)
          for (const Pv of Fi(zv)) {
            const zv = vv.blockNameToBlockId(Pv, !0),
              hv = Oi(Pv);
            null !== zv && hv.length > 0 && (this.offsetsList.push(hv), this.offsetsIndexById[zv] = this.offsetsList.length)
          }
      }
      onAfterRender(vv, zv) {
        this.indexed || this.index(vv);
        const Pv = performance.now();
        if (Pv - this.lastCheckMs < 100) return;
        this.lastCheckMs = Pv, this.checks++;
        const hv = Wa.f.aa,
          [Sv, ev, gv] = Yi(zv, hv);
        let pv = !1;
        const dv = [];
        let Nv = 0;
        for (let lv = Sv - 2; lv <= Sv + 2; lv++)
          for (let zv = ev - 1; zv <= ev + 1; zv++)
            for (let Sv = gv - 2; Sv <= gv + 2; Sv++) {
              const ev = Nv++,
                gv = ni(lv, zv, Sv),
                Tv = vv.getChunkVersion(lv, zv, Sv);
              let Wv = this.chunks.get(gv);
              null !== Tv ? (Wv || (Wv = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(gv, Wv)), Wv.seenAt = this.checks, Wv.checkedVersion !== Tv && (Wv.checkedVersion = Tv, pv = !0), Wv.scannedVersion !== Tv && Pv - Wv.scannedAt >= 500 && dv.push({
                slot: ev,
                entry: Wv,
                origin: [lv * hv, zv * hv, Sv * hv]
              })) : (pv ||= void 0 !== Wv, this.chunks.delete(gv))
            }
        this.scanDue(vv, dv) && (pv = !0);
        for (const [lv, Tv] of this.chunks) Tv.seenAt !== this.checks && (pv ||= Tv.machines.length > 0, this.chunks.delete(lv));
        for (const lv of this.chunks.values())
          for (const [zv, Pv, hv] of lv.cellChunks)(Math.abs(zv - Sv) > 2 || Math.abs(Pv - ev) > 1 || Math.abs(hv - gv) > 2) && this.watchCellChunk(vv, zv, Pv, hv) && (pv = !0);
        for (const [lv, Tv] of this.cellChunks) Tv.seenAt !== this.checks && this.cellChunks.delete(lv);
        pv && this.refresh(vv)
      }
      dispose(vv) {
        this.clearMeshes(vv), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(vv, zv) {
        const Pv = Math.max(zv.findIndex((vv => {
          let {
            slot: zv
          } = vv;
          return zv >= this.scanFrom
        })), 0);
        let hv = 96;
        for (let Sv = 0; Sv < zv.length; Sv++) {
          const {
            slot: ev,
            entry: gv,
            origin: pv
          } = zv[(Pv + Sv) % zv.length];
          if (hv -= this.scan(vv, gv, pv), hv <= 0) {
            this.scanFrom = ev + 1;
            break
          }
        }
        return zv.length > 0
      }
      scan(vv, zv, Pv) {
        let [hv, Sv, ev] = Pv;
        const gv = Wa.f.aa,
          pv = this.hits;
        pv.length = 0;
        const dv = vv.scanBlocks(hv, Sv, ev, hv + gv, Sv + gv, ev + gv, this.offsetsIndexById, pv),
          Nv = [];
        for (let lv = 0; lv < pv.length; lv += 4) Nv.push({
          pos: [pv[lv], pv[lv + 1], pv[lv + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[pv[lv + 3]] - 1]
        });
        return zv.machines = Nv, zv.cellChunks = function(vv, zv) {
          const Pv = new Set,
            hv = [];
          for (const {
              pos: Sv,
              offsets: ev
            }
            of vv)
            for (const [vv, gv, pv] of ev) {
              const ev = Yi([Sv[0] + vv, Sv[1] + gv, Sv[2] + pv], zv),
                dv = ni(...ev);
              Pv.has(dv) || (Pv.add(dv), hv.push(ev))
            }
          return hv
        }(Nv, gv), zv.scannedVersion = zv.checkedVersion, zv.scannedAt = performance.now(), Math.max(dv, 1)
      }
      watchCellChunk(vv, zv, Pv, hv) {
        const Sv = ni(zv, Pv, hv),
          ev = vv.getChunkVersion(zv, Pv, hv),
          gv = this.cellChunks.get(Sv);
        return null === ev ? this.cellChunks.delete(Sv) : (null === gv || void 0 === gv ? void 0 : gv.version) === ev ? (gv.seenAt = this.checks, !1) : (this.cellChunks.set(Sv, {
          version: ev,
          seenAt: this.checks
        }), !0)
      }
      refresh(vv) {
        const zv = function(vv, zv) {
            const Pv = new Set,
              hv = [];
            for (const {
                pos: Sv,
                offsets: ev
              }
              of vv)
              for (const [vv, gv, pv] of ev) {
                const ev = Sv[0] + vv,
                  dv = Sv[1] + gv,
                  Nv = Sv[2] + pv,
                  lv = `${ev},${dv},${Nv}`;
                Pv.has(lv) || (Pv.add(lv), zv(ev, dv, Nv) && hv.push([ev, dv, Nv]))
              }
            return hv
          }([...this.chunks.values()].flatMap((vv => vv.machines)), ((zv, Pv, hv) => vv.isBlockInLoadedChunk(zv, Pv, hv) && 0 === vv.getBlockId(zv, Pv, hv))),
          Pv = zv.join(";");
        Pv !== this.shownKey && (this.shownKey = Pv, this.clearMeshes(vv), zv.length > 0 && (this.meshes = [this.build(vv, zv, !1), this.build(vv, zv, !0)]))
      }
      build(vv, zv, Pv) {
        const hv = zv[0],
          Sv = [],
          ev = [];
        for (const [gv, pv, dv] of zv)(0, mi.e)(Sv, ev, [gv - hv[0] + .5, pv - hv[1] + .5, dv - hv[2] + .5], Di, Pv);
        return vv.createGameMesh({
          positions: Sv,
          indices: ev
        }, {
          rgb: Pv ? Vi : Ki,
          alpha: .4
        }, hv)
      }
      clearMeshes(vv) {
        for (const zv of this.meshes) vv.disposeGameMesh(zv);
        this.meshes = []
      }
    }
    const Ri = 1 / .6,
      xi = 200,
      ti = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      qi = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Ii = 2 * Math.PI / 3;
    class Qi {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ti;
        this.style = vv, this.particles = null, this.points = new Float32Array(800), this.budget = xi, this.lastMs = 0
      }
      static blade() {
        return new Qi(qi)
      }
      rG(vv, zv) {
        const Pv = Math.min(zv.arcStruck, zv.arcPoints.length);
        this.draw(vv, [zv.arcFrom, ...zv.arcPoints], zv.arcPoints.slice(0, Pv))
      }
      onBlade(vv, zv) {
        const [Pv, hv, Sv] = zv.bladeCentre, [ev, gv] = zv.bladeFacing, pv = Pv - 1.5 * ev, dv = Sv - 1.5 * gv, Nv = Math.atan2(gv, ev), lv = [];
        for (let Tv = 0; Tv <= 8; Tv++) {
          const vv = Nv - Ii / 2 + Ii * Tv / 8;
          lv.push([pv + 2.5 * Math.cos(vv), hv, dv + 2.5 * Math.sin(vv)])
        }
        this.draw(vv, lv, zv.bladeStruck)
      }
      dispose() {
        var vv;
        null === (vv = this.particles) || void 0 === vv || vv.stop(), this.particles = null
      }
      draw(vv, zv, Pv) {
        if (!vv.particlesEnabled() || zv.length < 2) return;
        const hv = performance.now();
        this.budget = Math.min(xi, this.budget + (hv - this.lastMs) / 1e3 * xi), this.lastMs = hv;
        const Sv = [];
        let ev = 0,
          gv = zv[0];
        for (const iv of zv.slice(1)) {
          const vv = Math.min(48, Math.round(Math.hypot(iv[0] - gv[0], iv[1] - gv[1], iv[2] - gv[2]) * this.style.perBlock));
          Sv.push([gv, iv, vv]), ev += vv, gv = iv
        }
        const pv = Pv.length;
        ev += 10 * pv;
        const dv = ev > this.budget ? this.budget / ev : 1;
        if (0 === ev || dv * ev < 1) return;
        const Nv = zv[0],
          [lv, Tv, Wv] = Nv,
          wv = this.points;
        let av = 0;
        const sv = (vv, zv, Pv, hv) => {
          const Sv = 4 * av;
          wv[Sv] = vv - lv, wv[Sv + 1] = zv - Tv, wv[Sv + 2] = Pv - Wv, wv[Sv + 3] = hv, av++
        };
        Sv.forEach(((vv, zv) => {
          let [Pv, hv, Sv] = vv;
          const ev = Math.min(Math.floor(Sv * dv), xi - av),
            gv = Math.hypot(hv[0] - Pv[0], hv[1] - Pv[1], hv[2] - Pv[2]),
            pv = 0 === zv && gv > 0 ? Math.min(.5, .1 * gv) / gv : 0;
          for (let dv = 0; dv < ev; dv++) {
            const vv = pv + (dv + .5) / ev * (1 - pv);
            sv(Pv[0] + (hv[0] - Pv[0]) * vv, Pv[1] + (hv[1] - Pv[1]) * vv, Pv[2] + (hv[2] - Pv[2]) * vv, .15)
          }
        }));
        const Cv = Math.floor(10 * dv);
        for (let iv = 0; iv < pv; iv++) {
          const [vv, zv, hv] = Pv[iv];
          for (let Pv = 0; Pv < Cv && av < xi; Pv++) sv(vv, zv, hv, 2.5)
        }
        this.budget -= av, this.particles ??= vv.createParticles(function(vv) {
          const [zv, Pv] = vv.colours;
          return {
            texture: "square_particle",
            GT: 400,
            minLifeTime: vv.life[0] / Ri,
            maxLifeTime: vv.life[1] / Ri,
            minSize: vv.size[0],
            maxSize: vv.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [zv[0], zv[1], zv[2], 1],
              maxColor: [Pv[0], Pv[1], Pv[2], 1]
            }, {
              timeFraction: 1,
              minColor: [zv[0], zv[1], zv[2], 0],
              maxColor: [Pv[0], Pv[1], Pv[2], 0]
            }],
            blendMode: tp.f.Add
          }
        }(this.style), {
          pos: Nv
        }), this.particles.emitPoints(Nv, wv, av)
      }
    }
    const Zi = new Set(["Sky Spring"]);

    function Ai(vv, zv, Pv) {
      const hv = vv.split("|")[0];
      return "Air" !== zv || Pv || ! function(vv) {
        const zv = vv.split("|")[0];
        return void 0 !== gP[zv] || Zi.has(zv)
      }(hv) ? null : vv
    }
    class Li {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(vv) {
        const zv = vv - this.lastTapAt >= 300;
        return this.lastTapAt = vv, zv
      }
    }
    class Hi {
      constructor() {
        this.presses = new Li, this.predicted = null
      }
      tap(vv, zv) {
        const Pv = this.presses.isNewPress(zv);
        return Pv && (this.predicted = {
          station: vv,
          at: zv
        }), Pv
      }
      consumeServerOpen(vv, zv) {
        const Pv = this.predicted;
        return !(null === Pv || Pv.station !== vv || zv - Pv.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Mi {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(vv, zv) {
        return vv && (this.thrustAt = zv), zv - this.thrustAt < 200
      }
    }
    const yi = [.1, .05, .1],
      Bi = {
        texture: "effect_5",
        GT: Math.ceil(48),
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
        blendMode: tp.f.OneOne
      };
    class Ji {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Mi, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      rG(vv, zv) {
        for (const [Pv, hv] of zv.baf2JetFlames) vv.isLocalPlayer(Pv) || (hv ? this.lit.add(Pv) : this.lit.delete(Pv))
      }
      onAfterRender(vv, zv) {
        const Pv = performance.now(),
          hv = this.hold.lit(this.selfThrusting(vv, zv), Pv);
        for (const [Sv, ev] of this.flames)(Sv === zv ? hv : this.lit.has(Sv)) || this.setEmitting(ev, !1), Sv === zv || vv.getPositionView(Sv) ? !ev.emitting && Pv - ev.offAt >= 1300 && (ev.particles.stop(), this.flames.delete(Sv)) : (ev.particles.dispose(), this.flames.delete(Sv), this.lit.delete(Sv));
        hv && this.draw(vv, zv, zv);
        for (const Sv of this.lit) this.draw(vv, zv, Sv)
      }
      dispose() {
        for (const vv of this.flames.values()) vv.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(vv, zv) {
        var Pv;
        const hv = vv.getLocalPlayerMovement();
        return !!hv && (null !== (Sv = {
          option: null !== (Pv = vv.getClientOption(zv, "jumpHoldThrust")) && void 0 !== Pv ? Pv : null,
          jumping: hv.jumpHeld,
          onGround: hv.onGround,
          alive: vv.isAlive(zv)
        }).option && Sv.option.maxUpSpeed >= 0 && Sv.jumping && !Sv.onGround && Sv.alive);
        var Sv
      }
      draw(vv, zv, Pv) {
        var hv, Sv;
        const ev = this.pos;
        if (!vv.readDrawnPosition(Pv, ev)) return;
        const gv = vv.readDrawnPosition(zv, this.camera) ? this.camera : ev;
        if (!((ev[0] - gv[0]) ** 2 + (ev[1] - gv[1]) ** 2 + (ev[2] - gv[2]) ** 2 < 1600) || !vv.particlesEnabled()) {
          const vv = this.flames.get(Pv);
          return void(vv && this.setEmitting(vv, !1))
        }
        const pv = null !== (hv = this.flames.get(Pv)) && void 0 !== hv ? hv : this.create(vv, Pv, ev),
          dv = null !== (Sv = vv.getDrawnHeading(Pv)) && void 0 !== Sv ? Sv : 0,
          Nv = this.at;
        Nv[0] = ev[0] - .35 * Math.sin(dv), Nv[1] = ev[1] + 1.05, Nv[2] = ev[2] - .35 * Math.cos(dv), pv.particles.moveTo(Nv), this.setEmitting(pv, !0)
      }
      setEmitting(vv, zv) {
        vv.emitting !== zv && (vv.emitting = zv, zv || (vv.offAt = performance.now()), vv.particles.setEmitRate(zv ? 60 : 0))
      }
      create(vv, zv, Pv) {
        const hv = {
          particles: vv.createParticles(Bi, {
            pos: Pv,
            half: yi
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(zv, hv), hv
      }
    }

    function Ei(vv) {
      return "Reactor Frame" === hh("reactor", vv)
    }

    function oi(vv) {
      return ZP("reactor", vv) && !Ei(vv) && (vv.startsWith("Reactor Glass") || vv.startsWith("Reactor Port"))
    }
    const bi = "baf2Goal";
    class ri {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [xS.j.subscribe("setDirectionArrow", (vv => {
          let {
            id: zv,
            position: Pv
          } = vv;
          zv === bi && (this.goal = Pv, this.checkedAt = -1 / 0)
        })), xS.j.subscribe("clearDirectionArrow", (vv => {
          let {
            id: zv
          } = vv;
          null !== zv && zv !== bi || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const vv of this.subs) xS.j.unsubscribe(vv)
      }
      sideOf(vv, zv, Pv, hv) {
        const Sv = this.goal;
        if (!Sv) return 0;
        Pv - this.checkedAt > 1e3 && (this.checkedAt = Pv, this.open = function(vv, zv) {
          const [Pv, hv, Sv] = vv.map(Math.floor);
          if (!oi(zv(Pv, hv, Sv))) return null;
          for (const [ev, gv] of [
              [1, 0],
              [0, 1]
            ]) {
            const vv = zv(Pv + ev, hv, Sv + gv),
              pv = zv(Pv - ev, hv, Sv - gv);
            if (Ei(pv) && oi(vv)) return [ev, 0, gv];
            if (Ei(vv) && oi(pv)) return [0 - ev, 0, 0 - gv]
          }
          return null
        }(Sv, ((zv, Pv, hv) => vv.blockIdToBlockName(vv.getBlockId(zv, Pv, hv)))));
        const ev = this.open;
        if (!ev) return 0;
        const gv = hv(Sv);
        if (Math.abs(gv.x - zv.x) > .05 || Math.abs(gv.y - zv.y) > .05) return 0;
        const pv = hv([Sv[0] + ev[0], Sv[1], Sv[2] + ev[2]]).x - gv.x;
        return Math.abs(pv) < .3 ? 0 : pv > 0 ? 1 : -1
      }
    }
    class ki {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new ri, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.ea = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.mG = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((vv => {
          for (const zv of vv) zv.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(zv.target, zv.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.ea || this.clear()
        }, window.addEventListener("resize", this.mG)
      }
      onAfterRender(vv, zv) {
        var Pv;
        this.api = vv, this.project = null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.projectWorldPosToScreenPos) && void 0 !== Pv ? Pv : null, this.queued || this.ea || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.ea = !0;
        for (const vv of this.moved.keys()) vv.style.transform = "";
        this.moved.clear();
        for (const vv of this.sideLabels.keys()) vv.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.mG)
      }
      clear() {
        for (const ev of this.moved.keys()) ev.isConnected || this.moved.delete(ev);
        for (const ev of this.sideLabels.keys()) ev.isConnected || this.sideLabels.delete(ev);
        if (0 === this.arrows.length) return;
        const vv = performance.now(),
          zv = vv - this.refreshedAt > 1e3;
        zv && (this.refreshedAt = vv, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const Pv = this.trackerBox(),
          hv = this.barsBox(),
          Sv = this.toastBox(zv);
        (Pv || hv || Sv) && zv && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let ev = 0; ev < this.arrows.length; ev++) {
          const zv = this.arrows[ev];
          this.labelOffsets.set(zv, this.runLabelAside(zv, vv));
          const gv = (Pv ? this.shiftLeftOf(zv, Pv) : 0) || this.shiftOnScreen(zv),
            pv = Math.min(hv ? this.liftAbove(zv, hv, gv) : 0, Sv ? this.liftAbove(zv, Sv, gv) : 0),
            dv = this.moved.get(zv);
          if (0 !== gv || 0 !== pv) {
            const vv = 0 === pv ? `translateX(${gv}px)` : `translate(${gv}px, ${pv}px)`;
            dv !== vv && (zv.style.transform = vv, this.moved.set(zv, vv))
          } else void 0 !== dv && (zv.style.transform = "", this.moved.delete(zv))
        }
      }
      trackerBox() {
        var vv, zv;
        const Pv = null !== (vv = this.tracker) && void 0 !== vv && vv.isConnected ? this.tracker : null !== (zv = this.trackers[0]) && void 0 !== zv ? zv : null;
        if (Pv !== this.tracker && this.watch(Pv), this.boxStale && Pv) {
          var hv, Sv, ev;
          this.boxStale = !1;
          const vv = Pv.closest(".NoRoom") ? null : Pv.getBoundingClientRect(),
            zv = vv && vv.width > 0 ? null === (hv = this.hud) || void 0 === hv ? void 0 : hv.getBoundingClientRect() : void 0,
            gv = vv && zv ? Math.max(vv.top, zv.top) : null !== (Sv = null === vv || void 0 === vv ? void 0 : vv.top) && void 0 !== Sv ? Sv : 0,
            pv = vv && zv ? Math.min(vv.bottom, zv.bottom) : null !== (ev = null === vv || void 0 === vv ? void 0 : vv.bottom) && void 0 !== ev ? ev : 0;
          this.box = vv && vv.width > 0 && pv > gv ? {
            left: vv.left,
            top: gv,
            right: vv.right,
            bottom: pv
          } : null
        }
        return Pv ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var vv;
          this.barsStale = !1;
          const zv = null === (vv = this.statBars[0]) || void 0 === vv ? void 0 : vv.getBoundingClientRect();
          this.bars = zv && zv.width > 0 && zv.height > 0 ? {
            left: zv.left,
            top: zv.top,
            right: zv.right,
            bottom: zv.bottom
          } : null
        }
        return this.bars
      }
      toastBox(vv) {
        var zv;
        const Pv = null !== (zv = this.toasts[0]) && void 0 !== zv ? zv : null;
        if (Pv !== this.toastEl || vv && Pv) {
          this.toastEl = Pv;
          const vv = null === Pv || void 0 === Pv ? void 0 : Pv.getBoundingClientRect();
          this.toast = vv && vv.width > 0 && vv.height > 0 ? {
            left: vv.left,
            top: vv.top,
            right: vv.right,
            bottom: vv.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(vv, zv, Pv) {
        var hv;
        const Sv = this.anchorOf(vv);
        if (!Sv) return 0;
        const ev = Sv.x + Pv + (null !== (hv = this.labelOffsets.get(vv)) && void 0 !== hv ? hv : 0),
          {
            halfWidth: gv,
            labelled: pv
          } = this.extentOf(vv),
          dv = Sv.y + this.em * (pv ? 6.2 : 3);
        return dv < zv.top - 6 || ev + gv < zv.left - 6 || ev - gv > zv.right + 6 ? 0 : zv.top - 6 - dv
      }
      watch(vv) {
        var zv, Pv;
        this.tracker && this.sizes.unobserve(this.tracker), null === (zv = this.hud) || void 0 === zv || zv.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = vv, this.hud = null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.closest(".Baf2QuestHud")) && void 0 !== Pv ? Pv : null, this.box = null, this.boxStale = !0, vv && this.sizes.observe(vv), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(vv, zv) {
        var Pv;
        const hv = this.anchorOf(vv);
        if (!hv) return 0;
        const {
          y: Sv
        } = hv, ev = hv.x + (null !== (Pv = this.labelOffsets.get(vv)) && void 0 !== Pv ? Pv : 0), gv = this.em, {
          halfWidth: pv,
          labelled: dv
        } = this.extentOf(vv), Nv = Sv - gv, lv = ev + pv;
        return Sv + gv * (dv ? 6.2 : 3) < zv.top || Nv > zv.bottom || lv < zv.left - 6 || ev - pv > zv.right ? 0 : Math.max(zv.left - 6 - lv, 6 - (ev - pv))
      }
      shiftOnScreen(vv) {
        var zv;
        const Pv = this.anchorOf(vv);
        if (!Pv) return 0;
        const {
          halfWidth: hv
        } = this.extentOf(vv), Sv = Pv.x + (null !== (zv = this.labelOffsets.get(vv)) && void 0 !== zv ? zv : 0), ev = Sv + hv - (this.innerWidth - 6);
        return ev > 0 ? -ev : Math.max(0, 6 - (Sv - hv))
      }
      runLabelAside(vv, zv) {
        var Pv;
        let hv = null;
        for (let gv = 0; gv < vv.children.length; gv++) vv.children[gv].classList.contains("DirectionArrowLabel") && (hv = vv.children[gv]);
        if (!hv) return 0;
        const Sv = vv.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(vv) : null,
          ev = (Sv && this.api ? this.side.sideOf(this.api, {
            x: Sv.x / this.innerWidth * 100,
            y: Sv.y / this.innerHeight * 100
          }, zv, this.project) : 0) * this.halfWidthOf(hv);
        return ev !== (null !== (Pv = this.sideLabels.get(hv)) && void 0 !== Pv ? Pv : 0) && (hv.style.transform = 0 === ev ? "" : `translateX(-50%) translateX(${ev}px)`, 0 === ev ? this.sideLabels.delete(hv) : this.sideLabels.set(hv, ev)), ev
      }
      extentOf(vv) {
        let zv = this.em,
          Pv = !1;
        for (let hv = 0; hv < vv.children.length; hv++) {
          const Sv = vv.children[hv],
            ev = Sv.classList.contains("DirectionArrowLabel");
          Pv ||= ev, (ev || Sv.classList.contains("DirectionArrowDistance")) && (zv = Math.max(zv, this.halfWidthOf(Sv)))
        }
        return {
          halfWidth: zv,
          labelled: Pv
        }
      }
      halfWidthOf(vv) {
        let zv = this.halfWidths.get(vv);
        return void 0 === zv && (zv = vv.offsetWidth / 2, this.halfWidths.set(vv, zv), this.sizes.observe(vv), this.labels.add(vv)), zv
      }
      forgetGoneLabels() {
        for (const vv of this.labels) vv.isConnected || (this.sizes.unobserve(vv), this.halfWidths.delete(vv), this.labels.delete(vv))
      }
      anchorOf(vv) {
        const zv = vv.style.translate,
          Pv = this.anchors.get(vv);
        if (Pv && Pv.translate === zv && Pv.innerWidth === this.innerWidth && Pv.innerHeight === this.innerHeight) return Pv;
        const hv = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(zv);
        if (!hv) return null;
        const Sv = {
          translate: zv,
          x: parseFloat(hv[1]) / 100 * this.innerWidth,
          y: parseFloat(hv[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(vv, Sv), Sv
      }
    }
    const Xi = "Baf2ArrowText";

    function ui(vv, zv) {
      const Pv = vv.rows.find((vv => vv.current));
      return xv(vv.tutorial) && null !== Pv && void 0 !== Pv && Pv.item && yS(Pv) && Kv(Pv.item).includes(zv) ? Pv.item : null
    }
    const vc = new class {
      constructor(vv) {
        this.select = vv, this.picks = new Map
      }
      open(vv, zv, Pv) {
        const hv = ui(zv, vv);
        null !== hv && this.HW(vv, hv, Pv)
      }
      follow(vv, zv) {
        if (pv())
          for (const [Pv, {
              item: hv,
              had: Sv
            }] of this.picks) {
            const ev = ui(vv, Pv);
            ev !== hv && (null !== ev && zv(hv) > Sv ? this.HW(Pv, ev, zv) : this.picks.delete(Pv))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      HW(vv, zv, Pv) {
        this.picks.set(vv, {
          item: zv,
          had: Pv(zv)
        }), this.select(vv, zv)
      }
    }(tS.q);

    function zc(vv) {
      return zv => {
        let Pv = 0;
        for (const hv of vv.getInventoryItems())(null === hv || void 0 === hv ? void 0 : hv.name) === zv && (Pv += null === hv.amount ? 1 : Math.max(hv.amount, 0));
        return Pv
      }
    }

    function Pc(vv, zv, Pv, hv) {
      vv.getClientOption(zv, "canCraft") && "inventory" !== GS.c.get("openInGameMenuName") && (vc.open(Pv, hv.get(), zc(vv)), xS.j.zC("toggleMenu", `inventory|${Pv}`))
    }
    let hc = null,
      Sc = !1;

    function ec(vv) {
      const zv = fe();
      vv === hc && zv === Sc || (hc = vv, Sc = zv, (0, tS.r)(function(vv, zv) {
        const Pv = new Map;
        for (let hv = vv + 1; hv <= Sv.length; hv++) {
          const Sv = Be(hv, vv, zv);
          if (Sv)
            for (const zv of iv(hv).unlocks) Pv.set(zv, {
              ...Sv,
              stepsAway: hv - vv
            })
        }
        return Pv
      }(vv, zv)))
    }

    function gc() {
      return (0, tS.w)(ye(Object.keys(Dv), Ze)), () => {
        (0, tS.w)([])
      }
    }
    const pc = "buildAFactory2Game:",
      dc = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      Nc = {
        on: `${pc}tutorialButtonOn`,
        hud: `${pc}tutorialButtonHud`,
        off: `${pc}tutorialButtonOff`
      },
      lc = {
        on: `${pc}tutorialPickedOn`,
        hud: `${pc}tutorialPickedHud`,
        off: `${pc}tutorialPickedOff`
      };

    function Tc(vv, zv, Pv) {
      let hv = null,
        Sv = () => {};
      const ev = ev => {
        var gv;
        let {
          tutorial: pv,
          tutorialKnown: dv
        } = ev;
        (null === (gv = hv) || void 0 === gv ? void 0 : gv.tutorial) === pv && hv.tutorialKnown === dv || (hv = {
          tutorial: pv,
          tutorialKnown: dv
        }, Sv = (0, iS.u)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: Nc[pv],
          icon: {
            kind: "icon",
            name: dc[pv]
          },
          iconOnly: !0,
          disabled: !dv,
          className: "Baf2TutorialButton",
          onClick: () => {
            var hv;
            (hv => {
              const Sv = zv.setTutorial(hv);
              vv.send(`baf2tutorial ${hv} ${Sv}`), Pv.show({
                baf2ToastText: [(0, tv.Md)({
                  translationKey: lc[hv]
                }, tv.L.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((hv = zv.get().tutorial, Rv[(Rv.indexOf(hv) + 1) % Rv.length]))
          }
        }))
      };
      ev(zv.get());
      const gv = xS.j.subscribe(qS, ev);
      return () => {
        xS.j.unsubscribe(gv), Sv()
      }
    }

    function Wc(vv, zv, Pv) {
      var hv, Sv;
      const ev = vv.getTargetedBlock();
      if (!ev || ! function(vv, zv, Pv) {
          if ("Chest" !== zv) return !1;
          const hv = vv.split("|")[0];
          if (!NP(hv) || 0 === tz[hv].outputSlots.length) return !1;
          const Sv = fC(vv);
          return Pv[0] === Sv[0] && Pv[1] === Sv[1] && Pv[2] === Sv[2]
        }(Pv, null === (hv = vv.Avv(zv)) || void 0 === hv ? void 0 : hv.name, ev.normal)) return !1;
      const [gv, pv, dv] = ev.vC, Nv = vv.getBlockId(gv, pv, dv);
      return 0 === Nv || !0 === (null === (Sv = Uv.g[Nv]) || void 0 === Sv ? void 0 : Sv.canBePlacedOver)
    }
    var wc = Pv(36271);
    const ac = new Set(sP.b);
    class sc {
      constructor(vv) {
        this.toasts = vv, this.lastAt = -1 / 0
      }
      onAltAction(vv, zv, Pv) {
        const hv = vv.getTargetedBlock();
        if (!hv || function(vv) {
            const zv = vv.split("|")[0];
            return NP(zv) || null !== Fh(zv) || nv(zv) || sP.b.includes(zv)
          }(Pv) && !ac.has(Pv.split("|")[0])) return;
        const Sv = vv.Avv(zv);
        if (!Sv || !ac.has(Sv.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const ev = Sv.typeObj.id,
          [gv, pv, dv] = hv.vC,
          Nv = vv.getBlockId(gv, pv, dv),
          lv = Uv.g[Nv];
        (0 === Nv || null !== lv && void 0 !== lv && lv.zw || null !== lv && void 0 !== lv && lv.canBePlacedOver) && vv.isSolidToPlayerBlockId(ev) && vv.canModifyBlockAt(gv, pv, dv) && vv.gvv(gv, pv, dv, ev) && !vv.gvv(gv, pv, dv, ev, zv) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, tv.Md)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, tv.L.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Cc {
      constructor(vv) {
        this.show = vv, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(vv, zv, Pv) {
        var hv;
        if (!zv) return this.started = null, void this.gatedThisHold.clear();
        if (!vv) return void(this.started = null);
        const Sv = `${vv.x},${vv.y},${vv.z},${vv.Vp}`;
        if (Sv === this.started) return;
        this.started = Sv;
        const ev = Qh(vv.y) ? ei(vv.block, vv.Vp, vv.level) : null;
        if (null === ev || this.gatedThisHold.has(Sv)) return;
        this.gatedThisHold.add(Sv);
        const gv = vv.block.split("|")[0];
        Pv - (null !== (hv = this.hintedAt.get(gv)) && void 0 !== hv ? hv : -1 / 0) < 5e3 || (this.hintedAt.set(gv, Pv), this.show({
          baf2ToastText: gi(ev, vv.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var ic = Pv(39);

    function cc(vv, zv) {
      const Pv = [...vv.baf2CoreBankPaused];
      for (const [Sv] of vv.baf2CoreBanked) Pv.push(Sv);
      for (const gv of Sv) {
        for (const {
            item: vv
          }
          of gv.cost) Pv.push(vv);
        for (const vv of gv.newDeposits) Pv.push(vv.block);
        for (const vv of gv.unlocks) Pv.push(vv, Vv(vv));
        gv.reward && Pv.push(gv.reward);
        for (const {
            item: vv
          }
          of null !== (hv = null === (ev = gv.charge) || void 0 === ev ? void 0 : ev.items) && void 0 !== hv ? hv : []) {
          var hv, ev;
          Pv.push(vv)
        }
      }
      return {
        message: vv,
        itemNames: zv([...new Set(Pv)])
      }
    }
    const Gc = "baf2MultiblockGuide";
    const mc = new Map;
    const jc = function(vv, zv, Pv, Sv) {
      let {
        localPlayerId: ev
      } = Sv;
      const gv = new sp,
        pv = new vw,
        Nv = new pw,
        lv = new ew(Nv),
        Tv = (vv, zv) => {
          zv ? lv.observe(vv) : lv.unobserve(vv)
        },
        Wv = new Sw,
        wv = new Tw(Tv),
        av = vv => wv.covers(vv),
        sv = new Rw;
      let Cv;
      const iv = new Zg((vv => {
          Cv.sendCommand(vv)
        })),
        cv = () => {
          iv.send("baf2questbook")
        },
        Gv = vv => function(vv, zv, Pv) {
          const hv = {};
          for (const Sv of Pv) {
            let Pv = mc.get(Sv);
            void 0 === Pv && (Pv = vv.getItemStat(zv, Sv, "displayName"), mc.set(Sv, Pv)), hv[Sv] = Pv
          }
          return hv
        }(Cv, ev, vv),
        mv = new ZS(cv),
        jv = new yw((() => GS.c.get("loadingOverlayVisible"))),
        fv = new bw,
        Fv = new sc(jv),
        Yv = new Cc((vv => {
          jv.show(vv, vv.baf2ToastMs)
        })),
        Ov = new Sa(Tv),
        Dv = new RC(Ov),
        Kv = new Fg,
        Vv = new zi,
        Rv = new zp,
        xv = new Ta({
          read: () => !1 !== ic.h.getItem(Gc),
          write: vv => {
            ic.h.setItem(Gc, vv)
          }
        }),
        Iv = new Za(xv),
        Qv = new Ha(xv),
        Zv = new Ns(xv, (vv => function(vv, zv) {
          const Pv = Xp(zv.w, zv.h, zv.d),
            hv = new Uint8Array(Pv);
          for (let Sv = 0; Sv < Pv; Sv++) {
            const Pv = xa(vv, XP(zv, Ph(zv, Sv)));
            hv[Sv] = null === Pv ? 0 : op(Pv)
          }
          return hv
        }(Cv, vv)), vs(iv)),
        Av = new ls(xv, vs(iv)),
        Lv = new ps,
        Hv = (vv, zv) => {
          let [Pv, hv, Sv] = vv;
          Lv.answered(zv) || jv.show({
            baf2ToastText: [(0, tv.Md)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: Pv,
                h: hv,
                d: Sv
              }
            }, tv.L.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      Zv.onSizeNotTaken(Hv), Av.onSizeNotTaken(Hv);
      const Bv = new as,
        Jv = new rs(xv),
        Ev = new Xs,
        bv = new NC(Ev),
        rv = new mC,
        kv = new xC,
        uv = new yC(kv),
        vz = new vi(kv),
        zz = kv.lookSource(),
        Pz = new ii({
          handles: vv => zz.handles(vv) || vv === qv,
          line: (vv, zv) => vv === qv ? function(vv, zv, Pv) {
            var hv;
            const Sv = yv(null === (hv = zv.at(Pv)) || void 0 === hv ? void 0 : hv.item);
            return null === Sv ? {
              key: `${ai}lookFarmEmpty`
            } : {
              key: vv.blockIdToBlockName(vv.getBlockId(Pv[0], Pv[1], Pv[2])).endsWith("|Running") ? `${ai}lookFarmRunning` : `${ai}lookFarmWaiting`,
              keys: {
                mob: Mv(Sv)
              }
            }
          }(Cv, Ov, zv) : zz.line(vv, zv),
          version: () => zz.version() + Ov.version()
        }, (vv => ya(xv.all(), vv, (vv => xa(Cv, vv)))), (() => mv.get().tier)),
        hz = new xs,
        Sz = new Ui,
        ez = new Qi,
        gz = Qi.blade(),
        pz = new Ji,
        dz = new Xw,
        Nz = new ki,
        lz = new Hi,
        Wz = new Li;
      let wz = -1 / 0,
        az = 0,
        sz = -1 / 0,
        Cz = -1 / 0;
      const iz = () => {
          iv.send("baf2islandsclose"), Cz = Date.now()
        },
        cz = [];

      function Gz(vv) {
        var zv, Pv, hv, Sv, ev, gv, dv;
        "core" === (null === (zv = pv.get()) || void 0 === zv ? void 0 : zv.kind) && "core" !== (null === vv || void 0 === vv ? void 0 : vv.kind) && iv.send("baf2coreclose"), "power" === (null === (Pv = pv.get()) || void 0 === Pv ? void 0 : Pv.kind) && "power" !== (null === vv || void 0 === vv ? void 0 : vv.kind) && iv.send("baf2powerclose"), "water" === (null === (hv = pv.get()) || void 0 === hv ? void 0 : hv.kind) && "water" !== (null === vv || void 0 === vv ? void 0 : vv.kind) && iv.send(Xv.p), "terminal" === (null === (Sv = pv.get()) || void 0 === Sv ? void 0 : Sv.kind) && "terminal" !== (null === vv || void 0 === vv ? void 0 : vv.kind) && iv.send("baf2terminalclose"), "islands" === (null === (ev = pv.get()) || void 0 === ev ? void 0 : ev.kind) && "islands" !== (null === vv || void 0 === vv ? void 0 : vv.kind) && iz();
        const Nv = kv.getStatus();
        "collider" === (null === (gv = pv.get()) || void 0 === gv ? void 0 : gv.kind) && "collider" !== (null === vv || void 0 === vv ? void 0 : vv.kind) && Nv && iv.send(Qd(Nv, "close"));
        const lv = vv => "reactor" === vv || "battery" === vv;
        if (lv(null === (dv = pv.get()) || void 0 === dv ? void 0 : dv.kind) && !lv(null === vv || void 0 === vv ? void 0 : vv.kind)) {
          var Tv, Wv, wv;
          const vv = "reactor" === (null === (Tv = pv.get()) || void 0 === Tv ? void 0 : Tv.kind) ? null === (Wv = Zv.get()) || void 0 === Wv ? void 0 : Wv.status.baf2RxAt : null === (wv = Av.get()) || void 0 === wv ? void 0 : wv.status.baf2BatAt;
          vv && iv.send(Tz(vv, "close"))
        }
        "quests" === (null === vv || void 0 === vv ? void 0 : vv.kind) && cv(), pv.set(vv), null === vv && fv.release()
      }

      function mz() {
        (0, cS.g)(), Gz(null)
      }
      let jz = new Set,
        fz = !1;
      const Fz = {
        onCreate: vv => {
          Cv = vv, Cv.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const zv of Dz) {
            const vv = tz[zv].inputSlots ? Up(gv) : Dp(zv, gv, Kv, iv);
            cz.push((0, CS.h)(zv, vv))
          }
          cz.push((0, cS.w)((0, hv.createElement)(hv.Fragment, null, (0, hv.createElement)(aw, {
            controller: wv
          }), (0, hv.createElement)(pa, {
            store: Ov
          }), (0, hv.createElement)(Gi, {
            store: Pz
          }), (0, hv.createElement)(Hw, {
            store: mv
          }), (0, hv.createElement)(Ew, {
            store: jv
          }), (0, hv.createElement)(rw, {
            store: fv
          }), (0, hv.createElement)(va, {
            store: dz
          }), (0, hv.createElement)(ws, {
            store: Bv
          }), (0, hv.createElement)(us, {
            store: Ev
          })), {
            content: (0, hv.createElement)(zw, {
              commands: iv,
              store: pv,
              power: Kv,
              water: Rv,
              reactor: Zv,
              battery: Av,
              collider: kv,
              terminal: Vv,
              quests: mv,
              close: cS.j,
              leave: () => {
                fv.dropHeld(), (0, cS.g)()
              },
              askIslands: () => {
                Cz = -1 / 0, wz = Date.now(), az = iv.send(ov)
              },
              openSocial: () => {
                (0, cS.g)(), GS.c.set({
                  openEverythingMenuName: TP.o.SOCIAL
                })
              },
              showCore: vv => {
                Gz({
                  kind: "core",
                  core: vv
                }), iv.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Gz(null)
            }
          })), cz.push((0, iS.u)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Gz({
                kind: "quests"
              }), (0, cS.r)()
            }
          })), cz.push(Tc(iv, mv, jv)), fz = !1, cz.push(Fe((() => {
            null !== hc && ec(hc)
          }))), cz.push(gc()), cz.push(function() {
            const vv = xS.j.subscribe(qS, XS),
              zv = () => {
                if (kS) {
                  const vv = kS;
                  kS = null, (0, tS.s)(vv)
                }
              },
              Pv = xS.j.subscribe("toggleMenu", (vv => {
                "inventory" === (null === vv || void 0 === vv ? void 0 : vv.split("|")[0]) && zv()
              })),
              hv = xS.j.subscribe("appManagerUpdated|openInGameMenuName", (vv => {
                "inventory" === vv && zv()
              }));
            return () => {
              xS.j.unsubscribe(vv), xS.j.unsubscribe(Pv), xS.j.unsubscribe(hv)
            }
          }()), cz.push(function(vv) {
            const zv = zc(vv),
              Pv = xS.j.subscribe(qS, (vv => {
                vc.follow(vv, zv)
              }));
            return () => {
              xS.j.unsubscribe(Pv), vc.clear()
            }
          }(Cv)), cz.push(function() {
            const vv = document.documentElement,
              zv = (0, tw.e)(".InvenBodyRight", [], (() => {
                const zv = document.querySelector(".InvenBodyRight");
                zv && vv.style.setProperty("--baf2-backpack-width", `${zv.offsetWidth}px`)
              }));
            return () => {
              zv(), vv.style.removeProperty("--baf2-backpack-width")
            }
          }()), cz.push(function() {
            const vv = document.documentElement;
            return vv.classList.add(Xi), () => {
              vv.classList.remove(Xi)
            }
          }()), cz.push((() => {
            lv.dispose(), Nv.dispose()
          })), sv.start(Cv), cz.push((() => {
            sv.dispose(), pz.dispose(), Dv.dispose()
          }))
        },
        onClose: () => {
          (0, tS.s)([]), kS = null, rS = new Set, hc = null, (0, tS.r)(new Map), mc.clear();
          for (const vv of cz) vv();
          mv.dispose(), Pz.dispose(), jv.dispose(), fv.dispose(), hz.dispose(), Sz.dispose(Cv), Iv.dispose(Cv), Qv.dispose(Cv), Jv.dispose(Cv), bv.dispose(Cv), Ev.dispose(), rv.dispose(), xv.dispose(), Zv.dispose(), Av.dispose(), Bv.dispose(), ez.dispose(), gz.dispose(), dz.dispose(), uv.dispose(Cv), vz.dispose(Cv), kv.dispose(), Nz.dispose(), iv.clear()
        },
        onAfterRender: (vv, zv) => {
          var Pv, hv, Sv;
          try {
            sv.onAfterRender(zv)
          } catch (Nv) {
            console.error("Error drawing BAF2 belt items", Nv)
          }
          try {
            pz.onAfterRender(Cv, ev)
          } catch (Nv) {
            console.error("Error drawing BAF2 jet flames", Nv)
          }
          fz || (fz = !0, iv.send("baf2clientready"));
          const gv = Cv.getPositionView(ev);
          wv.onAfterRender(zv, gv, Wv), Ov.onAfterRender(zv, gv, Wv, av), lv.run(Wv), hz.onAfterRender(Cv, gv), Sz.onAfterRender(Cv, gv), Dv.onAfterRender(Cv, gv), Iv.onAfterRender(Cv, gv), Qv.onAfterRender(Cv, ev, gv), Jv.onAfterRender(Cv, ev, gv), bv.onAfterRender(Cv, ev), rv.onAfterRender(Cv, gv), mv.onPlayerY(gv[1]), uv.onAfterRender(Cv), vz.onAfterRender(Cv, ev, gv);
          const dv = Cv.getTargetedBlock();
          Pz.onAfterRender(Cv, ev, null !== (Pv = null === dv || void 0 === dv ? void 0 : dv.oB) && void 0 !== Pv ? Pv : 0, null !== (hv = null === dv || void 0 === dv ? void 0 : dv.position) && void 0 !== hv ? hv : null), Nz.onAfterRender(Cv, zv), Yv.onMining(function(vv, zv) {
            var Pv, hv;
            const Sv = vv.getMiningBlock();
            if (!Sv) return null;
            const ev = (0, Uv.d)(vv.getBlockId(Sv[0], Sv[1], Sv[2])),
              gv = null !== (Pv = null === (hv = vv.Avv(zv)) || void 0 === hv ? void 0 : hv.name) && void 0 !== Pv ? Pv : null,
              pv = vv.getItemStat(zv, ev.split("|")[0], "harvestLevel");
            return {
              block: ev,
              x: Sv[0],
              y: Sv[1],
              z: Sv[2],
              Vp: gv,
              level: pv
            }
          }(Cv, ev), Cv.isMining(), performance.now()), "dropMap" === (null === (Sv = pv.get()) || void 0 === Sv ? void 0 : Sv.kind) && Qh(gv[1]) && mz()
        },
        onPlayerChangeBlock: (vv, zv, Pv, hv, Sv, gv) => {
          vv === ev && function(vv, zv, Pv, hv, Sv, ev, gv) {
            const pv = Ai(ev, gv, vv.isPlayerCrouching(zv));
            if (null === pv) return;
            if (vv.eD(Pv, hv, Sv, pv), !vv.getClientOption(zv, "canPickUpItems")) return;
            const dv = gP[pv.split("|")[0]];
            var Nv, lv, Tv;
            void 0 !== dv && (Nv = vv.getInventoryItems(), lv = dv, Tv = Wa.f.maxItemStackSize, vv.getInventoryFreeSlotCount(zv) > 0 || Nv.some((vv => null !== vv && vv.name === lv && null !== vv.amount && vv.amount < Tv))) && vv.playSound(zv, (0, wc.e)("pickUp"), .5, 1)
          }(Cv, vv, zv, Pv, hv, Sv, gv)
        },
        onPlayerAltAction: (vv, zv, Pv, hv, Sv) => {
          var gv, pv;
          if (!Cv.getClientOption(ev, "canPickUpItems")) return;
          const dv = null !== (gv = null === (pv = Cv.Avv(ev)) || void 0 === pv ? void 0 : pv.name) && void 0 !== gv ? gv : null,
            Nv = function(vv, zv) {
              const Pv = vv.split("|")[0];
              return nv(Pv) && zv !== pS && "Sky Pack" !== zv ? Pv : null
            }(Sv, dv);
          if (null !== Nv) return void(lz.tap(Nv, performance.now()) && Pc(Cv, ev, Nv, mv));
          if (!Hh(dv)) return;
          const lv = Wz.isNewPress(performance.now()),
            Tv = function(vv, zv, Pv) {
              return !Hh(zv) || Pv ? null : kh(vv)
            }(Sv, dv, Cv.isPlayerCrouching(ev));
          null !== Tv && lv && Cv.eD(zv, Pv, hv, Tv)
        },
        onPlayerAttemptAltAction: (vv, zv, Pv, hv, Sv) => {
          if (function(vv, zv, Pv, hv, Sv) {
              "Workbench" === hv.split("|")[0] && vv.getClientOption(Pv, "canCraft") && (vc.open("Workbench", Sv.get(), zc(vv)), zv.send("baf2station Workbench"))
            }(Cv, iv, ev, Sv, mv), Wc(Cv, ev, Sv)) return "preventAction";
          Fv.onAltAction(Cv, ev, Sv)
        },
        onReceivedMessageFromServer: (vv, zv) => {
          if ("baf2MachineStatus" === vv) {
            var Pv, hv, Sv, Nv, lv, Tv, Wv, av, cv, Fv, Yv, nv, Dv, Uv, tv, qv;
            const vv = zv,
              ev = vv.baf2MachineTaught;
            gv.set(vv.baf2MachinePos, {
              status: vv.baf2MachineStatus,
              power: null !== (Pv = vv.baf2MachinePower) && void 0 !== Pv ? Pv : null,
              opLeftMs: null !== (hv = vv.baf2MachineOpLeftMs) && void 0 !== hv ? hv : null,
              dug: vv.baf2MachineYield ? {
                item: vv.baf2MachineYield,
                name: Gv([vv.baf2MachineYield])[vv.baf2MachineYield]
              } : null,
              powerCap: null !== (Sv = vv.baf2MachinePowerCap) && void 0 !== Sv ? Sv : null,
              powerRates: null !== (Nv = vv.baf2MachinePowerRates) && void 0 !== Nv ? Nv : null,
              coupled: !0 === vv.baf2MachineCoupled,
              couplerLevel: null !== (lv = vv.baf2MachineCoupler) && void 0 !== lv ? lv : 1,
              taught: ev,
              taughtName: ev ? Gv([ev])[ev] : null,
              tier: null !== (Tv = vv.baf2MachineTier) && void 0 !== Tv ? Tv : null,
              input: null !== (Wv = vv.baf2MachineInput) && void 0 !== Wv ? Wv : null,
              inertCoupler: null !== (av = vv.baf2MachineInertCoupler) && void 0 !== av ? av : null,
              inputShort: null !== (cv = vv.baf2MachineInputShort) && void 0 !== cv ? cv : null,
              field: null !== (Fv = vv.baf2MachineField) && void 0 !== Fv ? Fv : null,
              noSeeds: !0 === vv.baf2MachineNoSeeds,
              fuelFed: !0 === vv.baf2MachineFuelFed,
              fuelFeeds: !0 === vv.baf2MachineFuelFeeds,
              coreFull: !0 === vv.baf2MachineCoreFull,
              waterUnpowered: !0 === vv.baf2MachineWaterUnpowered,
              powerShort: !0 === vv.baf2MachinePowerShort,
              powerWait: !0 === vv.baf2MachinePowerWait,
              reactorPowered: !0 === vv.baf2MachineReactorPowered,
              fuelLeftMs: null !== (Yv = vv.baf2MachineFuelLeftMs) && void 0 !== Yv ? Yv : null,
              burning: null !== (nv = vv.baf2MachineBurning) && void 0 !== nv ? nv : null,
              fuelKeep: null !== (Dv = vv.baf2MachineFuelKeep) && void 0 !== Dv ? Dv : null,
              water: null !== (Uv = vv.baf2MachineWater) && void 0 !== Uv ? Uv : null,
              farm: null !== (tv = vv.baf2MachineFarm) && void 0 !== tv ? tv : null,
              cryo: null !== (qv = vv.baf2MachineCryo) && void 0 !== qv ? qv : null
            })
          } else if ("baf2StationOpen" === vv) {
            const vv = zv.baf2Station;
            lz.consumeServerOpen(vv, performance.now()) || Pc(Cv, ev, vv, mv)
          } else if ("baf2Power" === vv) {
            const vv = zv;
            Kv.set(vv), vv.baf2PowerOpen && (Gz({
              kind: "power"
            }), (0, cS.r)())
          } else if (vv === Xv.r) {
            const vv = zv;
            Rv.set(vv), vv.baf2WaterOpen && (Gz({
              kind: "water"
            }), (0, cS.r)())
          } else if ("baf2RxPlans" === vv) {
            var Iv, Qv, Hv;
            const vv = zv;
            xv.rG(vv);
            const Pv = new Set(vv.baf2RxPlanList.map((vv => {
              let [zv, Pv, hv] = vv;
              return `${zv},${Pv},${hv}`
            })));
            Bv.retain(Pv);
            const hv = null === (Iv = pv.get()) || void 0 === Iv ? void 0 : Iv.kind,
              Sv = "reactor" === hv ? null === (Qv = Zv.get()) || void 0 === Qv ? void 0 : Qv.status.baf2RxAt : "battery" === hv ? null === (Hv = Av.get()) || void 0 === Hv ? void 0 : Hv.status.baf2BatAt : void 0;
            Sv && jz.has(Sv.join(",")) && !Pv.has(Sv.join(",")) && mz(), jz = Pv
          } else if ("baf2RxStatus" === vv) {
            const vv = zv;
            Zv.set(vv), vv.baf2RxOpen && (Gz({
              kind: "reactor"
            }), (0, cS.r)())
          } else if ("baf2BatStatus" === vv) {
            const vv = zv;
            Av.set(vv), vv.baf2BatOpen && (Gz({
              kind: "battery"
            }), (0, cS.r)())
          } else if ("baf2RxAlarm" === vv) Bv.rG(zv);
          else if ("baf2Bomb" === vv) Ev.rG(zv, Cv.getPositionView(ev));
          else if ("baf2Fallout" === vv) rv.rG(zv);
          else if ("baf2ColBeams" === vv) kv.onBeams(zv);
          else if ("baf2ColStatus" === vv) {
            const vv = zv;
            var Mv, yv;
            if (kv.onStatus(vv), vv.baf2ColOpen) kv.onOpen(null !== (Mv = null === (yv = Cv.Avv(ev)) || void 0 === yv ? void 0 : yv.name) && void 0 !== Mv ? Mv : null), Gz({
              kind: "collider"
            }), (0, cS.r)()
          } else if ("baf2Terminal" === vv) {
            const vv = zv;
            var Jv;
            if (Vv.apply(vv)) vv.baf2TermReset && (Gz({
              kind: "terminal"
            }), (0, cS.r)());
            else "terminal" === (null === (Jv = pv.get()) || void 0 === Jv ? void 0 : Jv.kind) && (pv.set(null), (0, cS.g)())
          } else if ("baf2Core" === vv) {
            var bv;
            const vv = zv;
            if (dv(!0 === vv.baf2CoreNuclear), function(vv, zv) {
                return "core" === (null === vv || void 0 === vv ? void 0 : vv.kind) && zv.baf2CoreTier > vv.core.message.baf2CoreTier
              }(pv.get(), vv)) return void(0, cS.g)();
            if (vv.baf2CoreRefresh && "core" !== (null === (bv = pv.get()) || void 0 === bv ? void 0 : bv.kind)) return;
            Gz({
              kind: "core",
              core: cc(vv, Gv)
            }), vv.baf2CoreRefresh || (0, cS.r)()
          } else if ("baf2WrenchUndo" === vv) {
            const {
              baf2WrenchPos: vv,
              baf2WrenchBlock: Pv
            } = zv;
            Cv.eD(vv[0], vv[1], vv[2], Pv)
          } else if ("baf2Toast" === vv) {
            const vv = zv;
            Lv.heard(performance.now(), vv.baf2ToastMs), jv.show(vv)
          } else if ("baf2Area" === vv) fv.arrive(zv, null !== pv.get());
          else if ("baf2Quest" === vv) {
            const vv = zv;
            dv(!0 === vv.baf2QuestNuclear), mv.set(vv, function(vv, zv) {
              var Pv, hv, Sv, ev, gv;
              const pv = [];
              for (const [, , lv, , , , , , Tv, Wv] of vv.baf2QuestSteps) null !== lv && pv.push(lv), pv.push(...null !== Tv && void 0 !== Tv ? Tv : [], ...null !== Wv && void 0 !== Wv ? Wv : []);
              vv.baf2QuestReward && pv.push(vv.baf2QuestReward);
              const dv = null === (Pv = vv.baf2QuestSide) || void 0 === Pv ? void 0 : Pv[2][2];
              dv && pv.push(dv), pv.push(...null !== (hv = null === (Sv = vv.baf2QuestSide) || void 0 === Sv ? void 0 : Sv[2][8]) && void 0 !== hv ? hv : [], ...null !== (ev = null === (gv = vv.baf2QuestSide) || void 0 === gv ? void 0 : gv[2][9]) && void 0 !== ev ? ev : []);
              for (const [lv] of null !== (Nv = vv.baf2QuestAlso) && void 0 !== Nv ? Nv : []) {
                var Nv;
                pv.push(lv)
              }
              return zv(pv)
            }(vv, Gv)), ec(vv.baf2QuestTier)
          } else if ("baf2Route" === vv) ! function(vv, zv) {
            let {
              baf2RouteCells: Pv,
              baf2RouteInto: hv
            } = zv;
            0 !== Pv.length && hv ? vv.setRouteChevrons({
              cells: Pv.map(((vv, zv) => {
                const [Sv, , ev] = function(vv, zv, Pv) {
                  const hv = Pv + 1 < vv.length ? vv[Pv + 1] : zv;
                  return [hv[0] - vv[Pv][0], 0, hv[2] - vv[Pv][2]]
                }(Pv, hv, zv);
                return {
                  pos: vv,
                  way: [Sv, ev]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : vv.setRouteChevrons(null)
          }(Cv, zv);
          else if ("baf2QuestBook" === vv) mv.setBook(zv);
          else if ("baf2Stalls" === vv) wv.set(zv.baf2StallCells);
          else if (vv === sP.i) sv.onMoves(zv);
          else if (vv === sP.g) sv.onLines(zv);
          else if ("baf2Labels" === vv) Ov.rG(zv);
          else if ("baf2DropMap" === vv) Gz({
            kind: "dropMap",
            dropMap: zv
          }), (0, cS.r)();
          else if ("baf2Islands" === vv) {
            var uv, vz;
            const vv = zv;
            if (iv.syncIslandEdits(vv.baf2IslandsAnswered), !vv.baf2IslandsOpen && "islands" !== (null === (uv = pv.get()) || void 0 === uv ? void 0 : uv.kind)) return;
            if (vv.baf2IslandsOpen) {
              var zz, Pz;
              const zv = GS.c.get("openEverythingMenuName"),
                Pv = iv.sent() >= az,
                hv = "other" !== (cz = {
                  askedAtMs: wz,
                  askSent: Pv,
                  reaskedAtMs: sz,
                  nowMs: Date.now(),
                  panel: null !== (zz = null === (Pz = pv.get()) || void 0 === Pz ? void 0 : Pz.kind) && void 0 !== zz ? zz : null,
                  inGameMenu: GS.c.get("openInGameMenuName"),
                  everythingMenu: null === zv ? null : zv === TP.o.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== vv.baf2IslandsFocusInvite
                }).everythingMenu && (!!cz.focusInvite || "islands" === cz.panel && "clientGame" === cz.inGameMenu || !(cz.nowMs - cz.reaskedAtMs < xN) && (cz.askSent && cz.nowMs - cz.askedAtMs < xN ? "core" === cz.panel && "clientGame" === cz.inGameMenu && null === cz.everythingMenu : "shop" === cz.everythingMenu || null === cz.inGameMenu));
              if (Pv && (wz = -1 / 0), sz = -1 / 0, !hv) return void iz()
            }
            const Pv = (Sz = vv.baf2IslandsOpen, Nz = "islands" === (null === (vz = pv.get()) || void 0 === vz ? void 0 : vz.kind), Tz = Cz, Wz = Date.now(), Sz && !Nz && Wz - Tz < xN);
            Gz({
              kind: "islands",
              islands: vv,
              arrivedAtMs: Date.now(),
              backToCore: tN(pv.get())
            }), Pv && (Cz = -1 / 0, sz = Date.now(), iv.send(ov)), vv.baf2IslandsOpen && ("clientGame" !== GS.c.get("openInGameMenuName") && (0, mS.f)(), (0, cS.r)())
          } else if ("baf2CoopTransfer" === vv) {
            var hz;
            const vv = zv;
            vv.baf2TransferOn ? (Gz({
              kind: "transfer",
              transfer: vv,
              arrivedAtMs: Date.now()
            }), (0, cS.r)()) : "transfer" === (null === (hz = pv.get()) || void 0 === hz ? void 0 : hz.kind) && (0, cS.g)()
          } else "baf2IslandLeft" === vv ? (fv.dropHeld(), null !== pv.get() && mz(), "inventory" === GS.c.get("openInGameMenuName") && (0, mS.f)()) : "baf2Arc" === vv ? ez.rG(Cv, zv) : "baf2Blade" === vv ? gz.onBlade(Cv, zv) : "baf2JetFlame" === vv ? pz.rG(Cv, zv) : "baf2GearPower" === vv && dz.rG(zv);
          var Sz, Nz, Tz, Wz, cz
        }
      };
      return Fz
    }
  },
  38042: (vv, zv, Pv) => {
    function hv(vv, zv, Pv) {
      const hv = new Set,
        Sv = new ResizeObserver(Pv),
        ev = () => {
          const zv = new Set(document.querySelectorAll(vv));
          let ev = !1;
          for (const vv of hv) zv.has(vv) || (Sv.unobserve(vv), hv.delete(vv), ev = !0);
          for (const vv of zv) hv.has(vv) || (Sv.observe(vv), gv.observe(vv, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), hv.add(vv));
          ev && Pv()
        },
        gv = new MutationObserver((zv => {
          zv.some((vv => "attributes" === vv.type)) && Pv(), zv.some((zv => function(vv, zv, Pv) {
            if ("childList" !== vv.type) return !1;
            for (const hv of vv.addedNodes)
              if (hv instanceof Element && (hv.matches(zv) || hv.querySelector(zv))) return !0;
            for (const hv of vv.removedNodes)
              if (hv instanceof Element)
                for (const vv of Pv)
                  if (hv.contains(vv)) return !0;
            return !1
          }(zv, vv, hv))) && ev()
        }));
      gv.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const pv of zv) Sv.observe(pv);
      return window.addEventListener("resize", Pv), ev(), Pv(), () => {
        Sv.disconnect(), gv.disconnect(), window.removeEventListener("resize", Pv)
      }
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  38020: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      h: () => ev
    });
    const hv = new WeakMap;

    function Sv(vv) {
      let zv = hv.get(vv);
      return zv || (zv = {
        hidden: vv.hidden,
        x: NaN,
        y: NaN
      }, hv.set(vv, zv)), zv
    }

    function ev(vv, zv) {
      const Pv = Sv(vv);
      Pv.hidden !== zv && (Pv.hidden = zv, vv.hidden = zv)
    }

    function gv(vv, zv, Pv) {
      const hv = Sv(vv);
      hv.x === zv && hv.y === Pv || (hv.x = zv, hv.y = Pv, vv.style.translate = `${zv}vw ${Pv}vh`)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);