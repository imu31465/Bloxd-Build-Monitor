export const id = 235;
export const ids = [235];
export const modules = {
  38141: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(38146);
    const tk = [0, 0, 0];
    class ak {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tk;
        this.pool = kk, this.origin = Fk, this.count = 0, this.free = []
      }
      take() {
        var kk;
        const Fk = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.count++;
        return Fk >= this.pool.KV && this.pool.grow(Math.max(2 * this.pool.KV, Fk + 1)), this.hide(Fk), Fk
      }
      release(kk) {
        this.hide(kk), this.free.push(kk)
      }
      write(kk, Fk, Bk, tk) {
        const {
          records: ak
        } = this.pool, {
          origin: Xk
        } = this, bk = kk * Rk.c;
        ak[bk] = Fk - Xk[0], ak[bk + 1] = Bk - Xk[1], ak[bk + 2] = tk - Xk[2], ak[bk + Rk.d] = 0, this.pool.markDirty(kk)
      }
      hide(kk) {
        this.pool.records[kk * Rk.c + Rk.d] = 1, this.pool.markDirty(kk)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Xk {
      constructor(kk, Fk, Bk) {
        this.api = kk, this.model = Fk, this.initialCapacity = Bk, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(kk) {
        let Fk = this.kinds.get(kk);
        if (void 0 === Fk) {
          const Bk = this.api.createInstancePool({
            ...this.model,
            item: kk
          }, this.initialCapacity);
          null === Bk || void 0 === Bk || Bk.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Fk = Bk && new ak(Bk, this.origin), this.kinds.set(kk, Fk)
        }
        return Fk
      }
      follow(kk) {
        const {
          origin: Fk
        } = this;
        if (Math.abs(kk[0] - Fk[0]) <= 512 && Math.abs(kk[1] - Fk[1]) <= 512 && Math.abs(kk[2] - Fk[2]) <= 512) return !1;
        Fk[0] = Math.floor(kk[0]), Fk[1] = Math.floor(kk[1]), Fk[2] = Math.floor(kk[2]);
        for (const Bk of this.kinds.values()) null === Bk || void 0 === Bk || Bk.pool.setOrigin(Fk[0], Fk[1], Fk[2]);
        return !0
      }
      commit() {
        for (const kk of this.kinds.values()) null === kk || void 0 === kk || kk.commit()
      }
      dispose() {
        for (const kk of this.kinds.values()) null === kk || void 0 === kk || kk.dispose();
        this.kinds.clear()
      }
    }
  },
  38157: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      g: () => bk,
      k: () => wk
    });
    const Rk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      tk = [0, 1, 2, 0, 2, 3],
      ak = [4, 5];

    function Xk(kk, Fk, Bk, Rk, tk) {
      for (let Xk = 0; Xk < 6; Xk++) ak.includes(Xk) === tk && dk(kk, Fk, Bk, Rk, Xk)
    }

    function bk(kk, Fk, Bk, Rk) {
      for (let tk = 0; tk < 6; tk++) dk(kk, Fk, Bk, Rk, tk)
    }

    function wk(kk, Fk, Bk, ak, Xk) {
      for (let bk = 0; bk < 6; bk++)
        for (const wk of [0, 1]) {
          const [dk, sk, Vk] = [wk + 2, wk + 1, (wk + 3) % 4], Jk = kk.length / 3;
          for (const [Fk, tk] of [
              [wk, sk],
              [dk, sk],
              [dk, Vk],
              [wk, Vk]
            ])
            for (let wk = 0; wk < 3; wk++) {
              const dk = Rk[3 * (4 * bk + Fk) + wk],
                sk = Rk[3 * (4 * bk + tk) + wk];
              kk.push((dk + (sk - dk) * Xk) * ak / 2 + Bk[wk])
            }
          for (const kk of tk) Fk.push(Jk + kk)
        }
    }

    function dk(kk, Fk, Bk, ak, Xk) {
      let [bk, wk, dk] = Bk, [sk, Vk, Jk] = ak;
      const Ak = kk.length / 3;
      for (let tk = 4 * Xk; tk < 4 * Xk + 4; tk++) kk.push(Rk[3 * tk] * sk / 2 + bk, Rk[3 * tk + 1] * Vk / 2 + wk, Rk[3 * tk + 2] * Jk / 2 + dk);
      for (const Rk of tk) Fk.push(Ak + Rk)
    }
  },
  38129: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => oW
    });
    var Rk = Bk(61);
    const tk = [{
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
      ak = 10;
    let Xk = !0;

    function bk() {
      return Xk
    }

    function wk(kk) {
      Xk = kk
    }
    const dk = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function sk() {
      return Xk ? tk.length : ak
    }

    function Vk(kk) {
      var Fk, Bk;
      return null !== (Fk = null === (Bk = tk[kk - 1]) || void 0 === Bk ? void 0 : Bk.reactorTier) && void 0 !== Fk ? Fk : 0
    }

    function Jk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vk(kk) > 0;
      return Bk && !Xk ? "hidden" : kk <= Fk ? "open" : Bk ? Fk < 5 ? "hidden" : Fk < ak ? "teaser" : "locked" : "locked"
    }

    function Ak(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Rk,
        n: tk
      } = fk(kk);
      return {
        key: Fk[Rk],
        params: {
          [Rk]: Bk ? String(tk) : tk
        }
      }
    }
    const ek = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function yk(kk, Fk) {
      return Vk(kk) > 0 && Fk < ak
    }

    function fk(kk) {
      const Fk = Vk(kk);
      if (Fk > 0) return {
        kind: "atomic",
        n: Fk,
        short: `A${Fk}`
      };
      const Bk = function(kk) {
        return kk >= 6 && kk <= 10 ? kk - 6 + 1 : 0
      }(kk);
      return Bk > 0 ? {
        kind: "stage",
        n: Bk,
        short: `S${Bk}`
      } : {
        kind: "tier",
        n: kk,
        short: String(kk)
      }
    }

    function mk(kk) {
      return tk[Math.max(1, Math.min(kk, tk.length)) - 1]
    }

    function Wk(kk, Fk) {
      return kk < Fk ? function(kk) {
        var Fk;
        return null !== (Fk = tk[kk]) && void 0 !== Fk ? Fk : null
      }(kk) : null
    }
    const vk = "baf2coresubmit",
      ik = "baf2corebankpause",
      Yk = "baf2coredeposit",
      Lk = "baf2corechargepause";

    function Ok(kk) {
      var Fk;
      return null !== (Fk = kk.baf2CoreOpen) && void 0 !== Fk ? Fk : ak
    }
    const Ek = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function Sk(kk) {
      return Ek.includes(kk)
    }
    const Nk = (kk, Fk) => Fk.map((Fk => [Fk, [kk]])),
      Hk = Object.fromEntries([...Nk("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Nk("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Nk("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Nk("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Nk("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Nk("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Nk("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Nk("Parts Bench", ["Focus Lens"]), ...Nk("Machine Bench", ["Laser", "Collider"]), ...Nk("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Nk("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Nk("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Nk("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Nk("Tool Bench", ["Mob Cage"]), ...Nk("Tool Bench", ["Pocket Terminal"]), ...Nk("Tool Bench", ["Comet Beacon"]), ...Nk("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function uk(kk) {
      var Fk;
      return null !== (Fk = Hk[kk]) && void 0 !== Fk ? Fk : ["Workbench"]
    }

    function Mk(kk) {
      return uk(kk)[0]
    }
    tk.slice(1).map(((kk, Fk) => `Core Tier ${Fk+2}`));
    var gk = Bk(9095);
    const Uk = ["on", "hud", "off"];

    function ck(kk) {
      return "on" === kk
    }
    var Gk = Bk(291);
    const Tk = "Mob Farm",
      rk = {
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
      Dk = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      zk = {
        1: 20,
        2: 60,
        3: 120
      },
      Pk = "baf2farmvoid",
      hk = "Caged ",
      qk = " Spawner Block";

    function Ck(kk) {
      return `lifeform:${(0,Gk.Be)(kk)}`
    }

    function Zk(kk) {
      if (!kk) return null;
      if (kk.startsWith(hk)) {
        const Fk = kk.slice(6);
        return Dk.includes(Fk) ? Fk : null
      }
      if (kk.endsWith(qk)) {
        const Fk = kk.slice(0, -14);
        return void 0 !== rk[Fk] ? Fk : null
      }
      return null
    }

    function pk(kk) {
      return !0 === kk.mobFarm
    }

    function Kk(kk, Fk) {
      return zk[rk[Fk]] * kk.opMs / 1e3
    }
    const xk = new Map;
    const jk = "baf2islands",
      lk = "baf2islandnew";

    function nk(kk) {
      const Fk = tk.findIndex((Fk => Fk.unlocks.includes(kk)));
      return Fk < 0 ? 1 : Fk + 1
    }

    function Ik(kk) {
      return Math.floor(kk).toLocaleString("en-US")
    }
    var Qk = Bk(38074);
    const kF = "baf2terminaltake",
      FF = "baf2terminalput",
      BF = ["one", "stack", "fill"];

    function RF(kk, Fk, Bk) {
      return `${kF} ${kk} ${Fk} ${Bk}`
    }

    function tF(kk, Fk, Bk) {
      return `${FF} ${kk} ${Fk} ${Bk}`
    }

    function aF(kk) {
      return `${FF} ${kk}`
    }
    const XF = [
      [`${kF} `, "take"],
      [`${FF} `, "put"]
    ];

    function bF(kk) {
      const Fk = XF.find((Fk => {
        let [Bk] = Fk;
        return kk.startsWith(Bk)
      }));
      if (!Fk) return null;
      const [Bk, Rk] = Fk, [tk, ak, ...Xk] = kk.slice(Bk.length).trim().split(" "), bk = Number(tk);
      if (!Number.isSafeInteger(bk) || bk <= 0) return null;
      if ("put" === Rk && void 0 === ak) return {
        kind: "putAll",
        seq: bk
      };
      const wk = function(kk) {
        if (BF.includes(kk)) return kk;
        const Fk = Number(kk);
        return /^\d+$/.test(kk) && Number.isSafeInteger(Fk) && Fk > 0 ? Fk : null
      }(null !== ak && void 0 !== ak ? ak : "");
      return null === wk || 0 === Xk.length ? null : {
        kind: Rk,
        seq: bk,
        mode: wk,
        item: Xk.join(" ")
      }
    }

    function wF(kk, Fk) {
      const Bk = "number" === typeof kk ? kk : "one" === kk ? 1 : "stack" === kk ? 99 : Fk;
      return Math.min(Fk, Bk)
    }

    function dF(kk, Fk) {
      const Bk = kk => "number" === typeof kk ? kk : "one" === kk ? 1 : 99;
      return "fill" === kk || "fill" === Fk ? "fill" : Bk(kk) + Bk(Fk)
    }

    function sF(kk, Fk) {
      const Bk = bF(kk),
        Rk = bF(Fk),
        tk = Bk && Rk ? function(kk, Fk) {
          return "take" === kk.kind || "take" === Fk.kind ? "take" === kk.kind && "take" === Fk.kind && kk.item === Fk.item ? {
            ...Fk,
            mode: dF(kk.mode, Fk.mode)
          } : null : "putAll" === kk.kind || "putAll" === Fk.kind ? {
            kind: "putAll",
            seq: Fk.seq
          } : kk.item === Fk.item ? {
            ...Fk,
            mode: dF(kk.mode, Fk.mode)
          } : null
        }(Bk, Rk) : null;
      return tk ? "putAll" === (ak = tk).kind ? aF(ak.seq) : "put" === ak.kind ? tF(ak.seq, ak.mode, ak.item) : RF(ak.seq, ak.mode, ak.item) : null;
      var ak
    }
    const VF = "baf2rx";

    function JF(kk, Fk) {
      for (var Bk = arguments.length, Rk = new Array(Bk > 2 ? Bk - 2 : 0), tk = 2; tk < Bk; tk++) Rk[tk - 2] = arguments[tk];
      return [VF, kk[0], kk[1], kk[2], Fk, ...Rk].join(" ")
    }
    const AF = 2,
      eF = 4,
      yF = 8,
      fF = 16,
      mF = 32,
      WF = 64,
      vF = 128,
      iF = 256,
      YF = 512,
      oF = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      LF = [{
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
    const OF = "Biomass",
      EF = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function SF(kk) {
      return {
        input: OF,
        inputAmount: 1,
        output: kk,
        outputAmount: 1
      }
    }
    const NF = "baf2synth",
      HF = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      uF = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      MF = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      gF = function(kk, Fk) {
        return {
          input: kk,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: Fk,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      UF = function(kk, Fk) {
        return {
          ...gF(kk, Fk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      cF = uF.map((kk => UF(kk, "Biomass", 2))),
      GF = {
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
          recipes: [gF("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), gF("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), gF("Raw Gold", "Gold Grit", 2), gF("Messy Stone", "Sand"), gF("Gravel", "Sand"), gF("Raw Voltite", "Voltite Dust", 2), gF("Moonstone", "Moonstone Dust", 4), gF("Wheat Seeds", "Fertiliser"), gF("Raw Uranium", "Uranium Grit", 2), UF("Mossy Messy Stone", "Sand"), ...cF],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [gF("Iron Grit", "Iron Bar"), gF("Copper Grit", "Copper Bar"), gF("Gold Grit", "Gold Bar"), gF("Raw Iron", "Iron Bar"), gF("Raw Copper", "Copper Bar"), gF("Raw Gold", "Gold Bar"), gF("Sand", "Glass"), gF("Messy Stone", "Stone"), ...Gk._c.map((kk => gF(kk, "Charcoal", 1, 4))), gF("Wheat", "Bread", 1, 2), ...uF.map(((kk, Fk) => UF(kk, MF[Fk])))],
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
          recipes: [gF("Iron Bar", "Iron Plate"), gF("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [gF("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [gF("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [gF("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), gF("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), gF("Raw Gold", "Gold Grit", 3), gF("Raw Voltite", "Voltite Dust", 3), gF("Messy Stone", "Sand", 2), gF("Gravel", "Sand", 2), gF("Moonstone", "Moonstone Dust", 6), gF("Raw Uranium", "Uranium Grit", 3), UF("Mossy Messy Stone", "Sand", 2), ...cF],
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
          table: oF
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [gF("Coal", "Diamond", 1, 24), gF("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Qk.g
      },
      TF = {
        Crusher: [gF("Spent Pellet", "Glow Dust"), gF("Wheat Seeds", "Biomass"), gF("Wheat", "Biomass"), gF("Dead Bush", "Biomass"), gF("Dusk Moss", "Biomass"), gF("Rotten Flesh", "Biomass"), gF("Bone", "Biomass", 2)],
        "Shatter Mill": [gF("Spent Pellet", "Glow Dust"), gF("Wheat Seeds", "Biomass"), gF("Wheat", "Biomass"), gF("Dead Bush", "Biomass"), gF("Dusk Moss", "Biomass"), gF("Rotten Flesh", "Biomass"), gF("Bone", "Biomass", 2), ...Gk._c.map((kk => gF(kk, "Biomass")))],
        Smelter: [gF("Biomass", "Fertiliser", 2)],
        Press: [gF("Coal", "Graphite", 1, 4)]
      },
      rF = "Power Coupler",
      DF = "Advanced Coupler",
      zF = "Nova Coupler",
      PF = [{
        item: rF,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: DF,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: zF,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const hF = new Map;

    function qF(kk) {
      var Fk, Bk;
      return null !== (Fk = null !== (Bk = kk.fuelSlot) && void 0 !== Bk ? Bk : kk.couplerSlot) && void 0 !== Fk ? Fk : null
    }

    function CF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!kk.couplable) throw new Error(`${kk.kind} takes no Power Coupler`);
      let Bk = hF.get(kk);
      Bk || (Bk = [], hF.set(kk, Bk));
      let Rk = Bk[Fk];
      if (!Rk) {
        var tk;
        const {
          divisor: ak,
          powerPerS: Xk
        } = PF[Fk - 1], bk = kk.opMs / ak, wk = void 0 !== kk.fluidMade || void 0 !== kk.cryoMade ? kk.powerPerOp : Xk * bk / 1e3;
        Rk = {
          ...kk,
          fuelSlot: null,
          couplerSlot: null !== (tk = qF(kk)) && void 0 !== tk ? tk : void 0,
          opMs: bk,
          powerPerOp: wk,
          coupled: !0
        }, Fk > 1 && (Rk = {
          ...Rk,
          couplerLevel: Fk
        }), Bk[Fk] = Rk
      }
      return Rk
    }
    const ZF = new Map;
    const pF = new Map;

    function KF(kk, Fk) {
      if (null === Fk || (Bk = Fk, !EF.includes(Bk))) return kk;
      var Bk;
      let Rk = pF.get(Fk);
      return Rk || (Rk = {
        ...kk,
        recipes: [SF(Fk)]
      }, pF.set(Fk, Rk)), Rk
    }

    function xF(kk) {
      return !0 === kk.synth
    }
    const jF = (kk, Fk, Bk, Rk) => ({
        output: kk,
        outputAmount: Fk,
        tier: Bk,
        inputs: Rk.map((kk => {
          let [Fk, Bk] = kk;
          return {
            item: Fk,
            amount: Bk
          }
        }))
      }),
      lF = Object.fromEntries([jF("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), jF("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), jF("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), jF("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), jF("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), jF("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), jF("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), jF("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), jF("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), jF("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), jF("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), jF("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), jF("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), jF("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), jF("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), jF("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), jF("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), jF("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), jF("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), jF("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), jF("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), jF("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), jF("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), jF("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), jF("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), jF("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), jF("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), jF("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), jF("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), jF("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((kk => [kk.output, kk]))),
      nF = new Map;

    function IF(kk, Fk) {
      let Bk = GF[kk];
      if (Fk.atomic && (Bk = function(kk) {
          const Fk = TF[kk.kind];
          if (!Fk) return kk;
          let Bk = ZF.get(kk.kind);
          if (!Bk) {
            const Rk = new Set(Fk.map((kk => kk.input))),
              tk = kk.recipes.filter((kk => !Rk.has(kk.input)));
            Bk = {
              ...kk,
              recipes: [...tk, ...Fk]
            }, ZF.set(kk.kind, Bk)
          }
          return Bk
        }(Bk)), Bk.synth) return KF(Bk, Fk.taught);
      if (Fk.coupled && Bk.couplable) return CF(Bk, Fk.level);
      const Rk = Bk.inputSlots && null !== Fk.taught ? lF[Fk.taught] : void 0;
      if (!Rk) return Bk;
      const tk = `${kk}|${Rk.output}`;
      let ak = nF.get(tk);
      return ak || (ak = {
        ...Bk,
        bench: Rk
      }, nF.set(tk, ak)), ak
    }
    const QF = ["Diamond", "Moonstone"];

    function kB(kk) {
      return new Set(kk.flatMap((kk => kk.bonus ? [kk.output, kk.bonus.item] : [kk.output])).filter((kk => !QF.includes(kk))))
    }
    const FB = Object.values(GF).flatMap((kk => kk.recipes));
    kB(FB.filter((kk => !0 !== kk.nuclear))), kB([...FB.filter((kk => !0 === kk.nuclear)), ...Object.values(TF).flat()]);

    function BB(kk) {
      return null === kk.inputSlot && void 0 === kk.inputSlots && void 0 === kk.powerMade && void 0 === kk.fluidMade && !kk.treeCutter && void 0 === kk.table
    }

    function RB(kk) {
      return !0 === kk.treeCutter
    }
    const tB = ["Voltite Cell"];

    function aB(kk) {
      var Fk, Bk;
      return null !== (Fk = null === (Bk = kk.fuels) || void 0 === Bk ? void 0 : Bk.some((kk => tB.includes(kk)))) && void 0 !== Fk && Fk
    }
    const XB = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Gk._c.map((kk => [kk, 8e3]))),
        ...Object.fromEntries(Gk.Ad.map((kk => [kk, 2e3]))),
        "Voltite Cell": 12e4
      },
      bB = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      wB = {
        "Uranium Deposit": 4e3
      };

    function dB(kk) {
      var Fk;
      return null !== (Fk = Object.keys(bB).find((Fk => bB[Fk] === kk))) && void 0 !== Fk ? Fk : null
    }

    function sB(kk) {
      return HF.includes(kk)
    }

    function VB(kk) {
      return !0 !== kk.nuclear || bk()
    }
    var JB = Bk(279);
    var AB = Bk(9156),
      eB = Bk(9104),
      yB = Bk(9164),
      fB = Bk(9152);
    const mB = "Reactor Controller",
      WB = "Reactor Port",
      vB = "Battery Cell",
      iB = ["fuel", "water", "waste"],
      YB = {
        fuel: WB,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      oB = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      LB = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      OB = "Reactor Frame",
      EB = "Reactor Glass",
      SB = {
        edge: [OB],
        cap: [EB, WB],
        wall: [EB, WB],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [mB]
      },
      NB = {
        edge: [vB],
        cap: [vB],
        wall: [vB],
        inside: [vB],
        ctrl: [vB]
      },
      HB = ["edge", "cap", "wall", "inside"],
      uB = ["Reactor Slag"];

    function MB(kk) {
      return uB.includes(gB(kk))
    }

    function gB(kk) {
      const Fk = kk.indexOf("|");
      return Fk < 0 ? kk : kk.slice(0, Fk)
    }

    function UB(kk) {
      return gB(kk) === mB ? "reactor" : null
    }

    function cB(kk) {
      return gB(kk) !== WB ? null : kk.endsWith("|Water") ? "water" : kk.endsWith("|Waste") ? "waste" : "fuel"
    }

    function GB(kk) {
      const Fk = cB(kk);
      return null === Fk ? null : DB(YB[iB[(iB.indexOf(Fk) + 1) % iB.length]], function(kk) {
        return kk.includes(TB)
      }(kk))
    }
    const TB = "|meta|rot1|Formed",
      rB = new Set([OB, EB, WB]);

    function DB(kk, Fk) {
      var Bk;
      const Rk = gB(kk);
      if (!rB.has(Rk)) return kk;
      if (Rk !== WB) return Fk ? Rk + TB : Rk;
      const tk = null !== (Bk = cB(kk)) && void 0 !== Bk ? Bk : "fuel";
      return Fk ? "fuel" === tk ? Rk + TB : `${Rk}${TB}|${"water"===tk?"Water":"Waste"}` : YB[tk]
    }

    function zB(kk, Fk) {
      const Bk = tR(kk, Fk);
      if ("Air" === Bk) return !1;
      const Rk = "reactor" === kk ? SB : NB;
      return HB.some((kk => Rk[kk].includes(Bk))) || "reactor" === kk && uB.includes(Bk)
    }

    function PB(kk) {
      return LB[kk]
    }

    function hB(kk) {
      var Fk;
      return null !== (Fk = oB[kk]) && void 0 !== Fk ? Fk : oB[1]
    }

    function qB(kk) {
      const [Fk, , Bk] = hB(kk);
      return [Bk, 0, -Fk]
    }

    function CB(kk, Fk, Bk, Rk, tk, ak) {
      return {
        ctrl: [kk[0], kk[1], kk[2]],
        rot: oB[Fk] ? Fk : 1,
        w: Bk,
        h: Rk,
        d: tk,
        cu: ak[0],
        cv: ak[1]
      }
    }

    function ZB(kk, Fk) {
      return "reactor" === kk ? [Math.floor((Fk - 1) / 2), 0] : [0, 0]
    }

    function pB(kk, Fk, Bk, Rk, tk) {
      let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk.rot;
      if (Bk === kk.w && Rk === kk.h && tk === kk.d && ak === kk.rot) return kk;
      const [Xk] = ZB(Fk, kk.w);
      if (kk.cu === Xk && kk.cv <= 1) return CB(kk.ctrl, ak, Bk, Rk, tk, ZB(Fk, Bk));
      const bk = (kk, Fk) => Math.max(1, Math.min(Fk, kk));
      return CB(kk.ctrl, ak, Bk, Rk, tk, [bk(kk.cu, Bk - 2), 0 === kk.cv ? 0 : bk(kk.cv, Rk - 2)])
    }
    const KB = 11,
      xB = 2 * KB + 1;
    new Uint8Array(xB * xB * xB);

    function jB(kk) {
      return kk.w * kk.h * kk.d
    }

    function lB(kk) {
      const Fk = qB(kk.rot);
      return [kk.ctrl[0] - Fk[0] * kk.cu, kk.ctrl[1] - kk.cv, kk.ctrl[2] - Fk[2] * kk.cu]
    }

    function nB(kk) {
      return kk.cv * kk.d * kk.w + kk.cu
    }

    function IB(kk, Fk) {
      const Bk = Fk % kk.w,
        Rk = Math.floor(Fk / kk.w) % kk.d;
      return [Bk, Math.floor(Fk / (kk.w * kk.d)), Rk]
    }

    function QB(kk, Fk) {
      const [Bk, Rk, tk] = IB(kk, Fk), ak = lB(kk), Xk = hB(kk.rot), bk = qB(kk.rot);
      return [ak[0] + bk[0] * Bk - Xk[0] * tk, ak[1] + Rk, ak[2] + bk[2] * Bk - Xk[2] * tk]
    }

    function kR(kk, Fk) {
      const Bk = lB(kk),
        Rk = hB(kk.rot),
        tk = qB(kk.rot),
        ak = Fk[0] - Bk[0],
        Xk = Fk[2] - Bk[2],
        bk = ak * tk[0] + Xk * tk[2],
        wk = -(ak * Rk[0] + Xk * Rk[2]),
        dk = Fk[1] - Bk[1];
      return bk < 0 || bk >= kk.w || dk < 0 || dk >= kk.h || wk < 0 || wk >= kk.d ? -1 : (dk * kk.d + wk) * kk.w + bk
    }

    function FR(kk, Fk) {
      if (Fk === nB(kk)) return "ctrl";
      const [Bk, Rk, tk] = IB(kk, Fk), ak = 0 === Rk || Rk === kk.h - 1, Xk = Number(0 === Bk || Bk === kk.w - 1) + Number(ak) + Number(0 === tk || tk === kk.d - 1);
      return Xk >= 2 ? "edge" : 1 === Xk ? ak ? "cap" : "wall" : "inside"
    }

    function BR(kk, Fk) {
      const [Bk, Rk, tk] = IB(kk, Fk);
      return 0 === Bk || Bk === kk.w - 1 || 0 === Rk || Rk === kk.h - 1 || 0 === tk || tk === kk.d - 1 ? -1 : ((Rk - 1) * (kk.d - 2) + (tk - 1)) * (kk.w - 2) + (Bk - 1)
    }

    function RR(kk, Fk) {
      const Bk = kk.w - 2,
        Rk = kk.d - 2,
        tk = Fk % Bk + 1,
        ak = Math.floor(Fk / Bk) % Rk + 1;
      return ((Math.floor(Fk / (Bk * Rk)) + 1) * kk.d + ak) * kk.w + tk
    }

    function tR(kk, Fk) {
      const Bk = gB(Fk);
      return "reactor" === kk && Bk === mB ? OB : Bk
    }

    function aR(kk, Fk, Bk) {
      const Rk = "ctrl" === Fk ? gB(Bk) : tR(kk, Bk);
      return ("reactor" === kk ? SB : NB)[Fk].includes(Rk) ? "ok" : "Air" === Rk ? "missing" : zB(kk, Bk) ? "wrong" : "blocked"
    }

    function XR(kk, Fk) {
      return "battery" === kk ? vB : "inside" === Fk ? null : function(kk, Fk) {
        if ("inside" === Fk || "ctrl" === Fk || "battery" === kk) return null;
        return "edge" === Fk ? OB : EB
      }(kk, Fk)
    }
    const bR = {
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
      wR = "Collider",
      dR = "Laser",
      sR = "Star Alloy",
      VR = "Glow Dust",
      JR = [wR, "_Collider Focus"];

    function AR(kk) {
      return JR.indexOf(gB(kk))
    }

    function eR(kk) {
      return gB(kk) === dR
    }

    function yR(kk) {
      return [
        [kk[0], kk[1], kk[2]],
        [kk[0], kk[1] + 1, kk[2]]
      ]
    }
    const fR = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function mR(kk, Fk, Bk) {
      const Rk = fR[Fk];
      return [kk[0] + Rk[0] * Bk, kk[1], kk[2] + Rk[2] * Bk]
    }

    function WR(kk, Fk) {
      if (Fk[1] !== kk[1]) return null;
      const Bk = Fk[0] - kk[0],
        Rk = Fk[2] - kk[2];
      if (0 !== Bk === (0 !== Rk)) return null;
      const tk = Math.abs(Bk + Rk);
      if (tk > bR.LASER_D) return null;
      return {
        dir: Rk < 0 ? 0 : Bk > 0 ? 1 : Rk > 0 ? 2 : 3,
        Rb: tk
      }
    }

    function vR(kk, Fk, Bk) {
      const Rk = Fk => Math.abs(kk[0] - Fk[0]) <= 1 && Math.abs(kk[1] - Fk[1]) <= 1;
      return Rk(Fk) || Rk(Bk)
    }

    function iR(kk, Fk) {
      return function(kk, Fk, Bk, Rk) {
        return [0, 1, 2, 3].map((tk => {
          for (let ak = 1; ak <= bR.LASER_D; ak++) {
            const Xk = mR(kk, tk, ak);
            if (vR([Xk[0], Xk[2]], Fk, Bk) || !Rk(Xk)) return !1
          }
          return !0
        }))
      }(yR(kk)[1], Fk.spawnXZ, Fk.coreXZ, (kk => kk[1] >= AB.t && kk[1] < AB.t + AB.v && kk[0] >= Fk.minXZ[0] && kk[0] <= Fk.maxXZ[0] && kk[2] >= Fk.minXZ[1] && kk[2] <= Fk.maxXZ[1]))
    }
    const YR = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function oR(kk) {
      return Math.max(48 + 16 * kk, mk(kk).machineAllowance)
    }
    const LR = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function OR(kk) {
      const Fk = kk.split("|")[0];
      return LR.includes(Fk) ? "Solar Panel" : Fk === yB.b ? "Fluid Pipe" : AR(Fk) >= 0 ? "Collider" : (Bk = Fk, YR.includes(Bk) ? Fk : null);
      var Bk
    }
    const ER = "buildAFactory2Game:solarPanelDescription";
    const SR = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function NR(kk, Fk) {
      var Bk;
      return null !== (Bk = SR.find((Bk => {
        var Rk;
        return (null !== (Rk = kk.level(Bk)) && void 0 !== Rk ? Rk : 0) >= Fk
      }))) && void 0 !== Bk ? Bk : null
    }
    const HR = "buildAFactory2Game:";
    let uR = null;
    const MR = {
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
      gR = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      UR = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      cR = {
        "Loot Chest": `${HR}lookRuinChestName`
      };

    function GR(kk) {
      return "object" === typeof kk && null !== kk && "translationKey" in kk && "string" === typeof kk.translationKey ? kk.translationKey : null
    }

    function TR(kk, Fk) {
      var Bk;
      return null !== (Bk = GR(kk.displayName(Fk))) && void 0 !== Bk ? Bk : `item:${(0,Gk.Be)(Fk)}`
    }

    function rR(kk, Fk) {
      var Bk, Rk, tk, ak;
      let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk;
      if ("Solar Panel" === OR(Fk)) return {
        name: GR(kk.displayName("Solar Panel")),
        detail: ER,
        detailItem: null
      };
      const wk = Fk.endsWith(" Ore"),
        dk = (uR ??= new Set([...Object.keys((0, eB.i)()), ...Object.keys((0, yB.m)())].map((kk => kk.split("|")[0]))), uR).has(Fk),
        sk = wk || dk ? null : function(kk) {
          var Fk;
          return kk.endsWith(" Log") && !kk.startsWith("Barkless ") ? "lookLog" : kk.endsWith(" Sapling") ? "lookSapling" : kk.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (Fk = MR[kk]) && void 0 !== Fk ? Fk : null
        }(Fk);
      if (!kk.isBlock(Fk) || !wk && !dk && null === sk) return null;
      const Vk = null !== (Bk = null !== (Rk = cR[Fk]) && void 0 !== Rk ? Rk : GR(null !== (tk = kk.displayName(Xk)) && void 0 !== tk ? tk : kk.displayName(Fk))) && void 0 !== Bk ? Bk : `item:${(0,Gk.Be)(Fk)}`;
      if (null !== sk) return {
        name: Vk,
        detail: `${HR}${sk}`,
        detailItem: null
      };
      const Jk = null !== (ak = gR[Fk]) && void 0 !== ak ? ak : bk() ? UR[Fk] : void 0;
      if (dk && void 0 !== Jk) return {
        name: Vk,
        detail: `${HR}${Jk}`,
        detailItem: null
      };
      const Ak = bB[Fk];
      if (void 0 !== Ak) return {
        name: Vk,
        detail: `${HR}lookDeposit`,
        detailItem: TR(kk, Ak)
      };
      const ek = kk.harvestLevel(Fk);
      if (wk && "rock" === kk.harvestType(Fk) && 0 !== ek) {
        const Fk = NR(kk, null !== ek && void 0 !== ek ? ek : 0);
        if (Fk === SR[0]) return {
          name: Vk,
          detail: `${HR}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== Fk) return {
          name: Vk,
          detail: `${HR}lookPickaxe`,
          detailItem: TR(kk, Fk)
        }
      }
      return {
        name: Vk,
        detail: GR(kk.description(Fk)),
        detailItem: null
      }
    }

    function DR(kk) {
      return kk < AB.t - 24
    }
    const zR = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const PR = "Wrench",
      hR = "Nova Wrench";

    function qR(kk) {
      return kk === PR || kk === hR
    }
    const CR = [...AB.K, "Belt Lift", "Belt Drop"];
    const ZR = ["Belt Lift", "Belt Drop"],
      pR = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function KR(kk) {
      return kk.split("|")[0]
    }

    function xR(kk) {
      const Fk = /\|rot(\d)/.exec(kk);
      return Fk ? Number(Fk[1]) : 1
    }

    function jR(kk) {
      return kk % 4 + 1
    }

    function lR(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === Fk && "" === Bk ? kk : `${kk}|meta|rot${Fk}${Bk}`
    }

    function nR(kk) {
      return KR(kk) === AB.z ? (0, AB.P)(kk) ? "gateRight" : "gateLeft" : (0, AB.W)(kk)
    }

    function IR(kk) {
      const Fk = KR(kk),
        Bk = xR(kk);
      if (AB.K.includes(Fk)) return (0, AB.L)(Fk, jR(Bk), null);
      if (Fk === AB.h) return (0, AB._)(jR(Bk), (0, AB.S)(kk));
      if (Fk === AB.C) {
        const Rk = pR[(0, AB.W)(kk)];
        return null === Rk ? lR(Fk, jR(Bk)) : lR(Fk, Bk, AB.D[Rk])
      }
      return Fk === AB.z ? (0, AB.P)(kk) ? lR(Fk, jR(Bk)) : lR(Fk, Bk, AB.p) : fB.d.includes(Fk) && !ZR.includes(Fk) || sB(Fk) ? lR(Fk, jR(Bk)) : null
    }

    function QR(kk) {
      return fB.d.includes(kk) || sB(kk) || null !== OR(kk)
    }

    function kt(kk) {
      return "Solar Panel" === OR(kk)
    }
    const Ft = "buildAFactory2Game:",
      Bt = {
        leftFront: `${Ft}lookSplitDetail_leftFront`,
        frontRight: `${Ft}lookSplitDetail_frontRight`,
        gateRight: `${Ft}lookGateDetail_gateRight`
      };

    function Rt(kk, Fk) {
      var Bk;
      let Rk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const tk = nR(kk),
        ak = null === tk ? null : `${Ft}${tk.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${tk}`,
        Xk = null === tk ? null : null !== (Bk = Bt[tk]) && void 0 !== Bk ? Bk : null;
      if (qR(Fk) && Rk) {
        const Bk = KR(kk);
        return Fk === hR && bk() && function(kk) {
          return CR.includes(KR(kk))
        }(kk) ? {
          mode: ak,
          detail: Xk,
          next: `${Ft}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: ak,
          detail: Xk,
          next: QR(Bk) && !kt(Bk) ? `${Ft}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const wk = qR(Fk) ? IR(kk) : null;
      if (null === wk) return {
        mode: ak,
        detail: Xk,
        next: null,
        nextState: null
      };
      const dk = nR(wk);
      return null === dk || xR(wk) !== xR(kk) ? {
        mode: ak,
        detail: Xk,
        next: `${Ft}lookWrenchTurn`,
        nextState: null
      } : {
        mode: ak,
        detail: Xk,
        next: `${Ft}lookWrenchNext`,
        nextState: `${Ft}lookWrenchState_${dk}`
      }
    }
    const tt = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const Xt = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function bt(kk) {
      return [0, 1, 2, 3].map((Fk => 0 !== (kk & 1 << Fk)))
    }

    function wt(kk) {
      const Fk = [];
      for (let Bk = 8; Bk + 2 < kk.length; Bk += 3) Fk.push([kk[Bk], kk[Bk + 1], kk[Bk + 2]]);
      return {
        focus: [kk[0], kk[1], kk[2]],
        lasers: bt(kk[3]),
        open: bt(kk[4]),
        live: bt(kk[5]),
        on: 1 === kk[6],
        state: Xt[kk[7]],
        blockers: Fk
      }
    }
    const dt = "Arc Caster",
      st = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      Vt = (Object.values(st), "Jet Chestplate"),
      Jt = "Nova Jet Chestplate",
      At = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      et = Object.values(At);

    function yt(kk, Fk, Bk) {
      return Math.min(function(kk) {
        return bk() && Vk(kk) >= 5 ? 20 : 10
      }(Bk), Math.floor(function(kk, Fk) {
        return Math.max(0, kk) + (bk() ? Math.max(0, Fk) : 0)
      }(kk, Fk) / 5))
    }

    function ft(kk, Fk, Bk) {
      const Rk = yt(Fk, Bk, kk),
        tk = Vk(kk),
        ak = (tk >= 3 ? 55 : tk >= 1 ? 50 : kk >= 8 ? 45 : 30) + Rk,
        Xk = Math.max(100 + Rk, 2 * ak);
      return {
        arcDamage: ak,
        arcPierce: kk >= 7 ? 2 : 1,
        arcChain: kk >= 10,
        barrierMax: (tk >= 4 ? 100 : tk >= 2 ? 90 : kk >= 9 ? 80 : kk >= 6 ? 60 : 40) + 5 * Rk,
        barrierRegenPerS: tk >= 5 ? 20 : kk >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Rk,
        novaShieldRegenPerS: 32,
        bladeDamage: Xk,
        bladePunch: Math.round(.5 * Xk),
        forgeRank: Rk
      }
    }
    const mt = {
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
    var Wt = Bk(36505),
      vt = Bk(36340),
      it = Bk(36332),
      Yt = Bk(22),
      ot = Bk(1585),
      Lt = Bk(1020),
      Ot = Bk.n(Lt);

    function Et(kk) {
      return !0 === kk.field
    }
    const St = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function Nt(kk) {
      return St.has(kk) ? `buildAFactory2Game:itemPlural_${(0,Gk.Be)(kk)}` : null
    }
    var Ht = Bk(1149),
      ut = Bk(1028),
      Mt = Bk(1835),
      gt = Bk(1812),
      Ut = Bk(36488),
      ct = Bk(36497),
      Gt = Bk(29),
      Tt = Bk(36483);
    const rt = "baf2QuestView",
      Dt = "baf2PlayerY",
      zt = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class Pt {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = kk, this.view = {
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
      set(kk, Fk) {
        var Bk, Rk, tk, ak, Xk, bk, wk, dk;
        const sk = JSON.stringify(kk.baf2QuestName) === JSON.stringify(this.view.name),
          Vk = new Set(this.view.rows.filter((kk => kk.done)).map((kk => kk.id))),
          Jk = new Set(this.view.rows.filter((kk => kk.justFinished)).map((kk => kk.id))),
          Ak = kk.baf2QuestSide,
          ek = null !== Ak && !0 === kk.baf2QuestSideFocus;
        let yk = !1,
          fk = 0;
        const mk = kk.baf2QuestSteps.map((kk => {
            const Fk = jt(kk, zt.has(kk[0]) ? kk[0] : "" + fk++),
              Bk = sk && Fk.done && !Vk.has(Fk.id);
            return Fk.justFinished = Bk || sk && Fk.done && Jk.has(Fk.id), yk ||= Bk, Fk
          })),
          Wk = xt(mk);
        Wk >= 0 && !ek && (mk[Wk].current = !0);
        const vk = !sk && null !== kk.baf2QuestName,
          ik = JSON.stringify(Ak && [Ak[0], Ak[1]]),
          Yk = ik === JSON.stringify(null !== (Bk = null === (Rk = this.view.side) || void 0 === Rk ? void 0 : Rk.name) && void 0 !== Bk ? Bk : null),
          Lk = null !== Ak && !this.sidesSeen.has(ik);
        Lk && this.sidesSeen.add(ik), this.serverTutorial = null !== (tk = kk.baf2QuestTutorial) && void 0 !== tk ? tk : "on", (null !== (ak = kk.baf2QuestTutorialSeq) && void 0 !== ak ? ak : 0) >= this.pickSeq && this.endPick();
        const Ok = !sk || !Yk || kk.baf2QuestTier !== this.view.tier;
        this.view = {
          name: kk.baf2QuestName,
          rows: mk,
          reward: kk.baf2QuestReward,
          goal: kk.baf2QuestGoal,
          pulse: this.view.pulse + (yk || vk ? 1 : 0),
          itemNames: Fk,
          side: Ak && {
            name: [Ak[0], Ak[1]],
            row: {
              ...jt(Ak[2], "side"),
              current: ek
            },
            goal: null !== (Xk = Ak[3]) && void 0 !== Xk ? Xk : null
          },
          sideCameUpAt: Lk ? Date.now() : this.view.sideCameUpAt,
          tier: kk.baf2QuestTier,
          core: kk.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (bk = kk.baf2QuestAlso) && void 0 !== bk ? bk : [],
          depth: null !== (wk = kk.baf2QuestDepth) && void 0 !== wk ? wk : null,
          tutorial: null !== (dk = this.pickedTutorial) && void 0 !== dk ? dk : this.serverTutorial,
          tutorialKnown: !0
        }, this.Hf(), yk && this.scheduleClear(), Ok && this.requestBook()
      }
      setTutorial(kk) {
        return this.endPick(), this.pickedTutorial = kk, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Hf()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: kk
        }, this.Hf(), this.pickSeq
      }
      onPlayerY(kk) {
        const Fk = Math.floor(kk);
        Fk !== this.playerY && (this.playerY = Fk, this.view.depth && Gt.o.Hf(Dt, Fk))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(kk) {
        this.view = {
          ...this.view,
          chapters: kk.baf2BookChapters
        }, this.Hf()
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
            rows: this.view.rows.map((kk => kk.justFinished ? {
              ...kk,
              justFinished: !1
            } : kk))
          }, this.Hf()
        }), 2400)
      }
      Hf() {
        Gt.o.Hf(rt, this.view, !0)
      }
    }

    function ht(kk, Fk) {
      return kk.sideCameUpAt > 0 && Fk - kk.sideCameUpAt < 2400
    }

    function qt(kk) {
      return (null === kk.name || Ct(kk)) && null === kk.side && null !== kk.chapters
    }

    function Ct(kk) {
      var Fk;
      return "quest_forgeOngoing" === (null === (Fk = kk.name) || void 0 === Fk ? void 0 : Fk[0])
    }

    function Zt(kk) {
      return kk.filter((kk => !zt.has(kk.key)))
    }

    function pt(kk) {
      return kk.key.startsWith("stepCraft")
    }

    function Kt(kk, Fk) {
      const Bk = new Set,
        Rk = kk.side ? [...kk.rows, kk.side.row] : kk.rows;
      for (const ak of Rk)
        if (!ak.done) {
          !ak.item || Fk && !pt(ak) || Bk.add(ak.item);
          for (const [kk, Fk, Rk] of null !== (tk = ak.chips) && void 0 !== tk ? tk : []) {
            var tk;
            Fk < Rk && Bk.add(kk)
          }
        } return Bk
    }

    function xt(kk) {
      const Fk = kk.findIndex((kk => !kk.done && !kk.away));
      return Fk >= 0 ? Fk : kk.findIndex((kk => !kk.done))
    }

    function jt(kk, Fk) {
      let [Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk] = kk;
      return {
        id: Fk,
        key: Bk,
        params: Rk,
        item: tk,
        amount: ak,
        total: Xk,
        done: bk,
        chips: null !== wk && void 0 !== wk ? wk : null,
        current: !1,
        away: !0 === dk,
        madeFor: null !== sk && void 0 !== sk ? sk : [],
        also: null !== Vk && void 0 !== Vk ? Vk : [],
        justFinished: !1
      }
    }
    const lt = "baf2QuestItems",
      nt = new Set;
    let It = new Set,
      Qt = null;

    function ka(kk) {
      const Fk = ck(kk.tutorial),
        Bk = Fk ? Kt(kk, !0) : nt;
      "inventory" === Yt.c.get("openInGameMenuName") ? (Qt = null, (0, Tt.A)(Bk)) : Qt = Bk;
      const Rk = Fk ? Kt(kk, !1) : nt;
      (0, ct.d)(Rk, It) || (It = Rk, Gt.o.Hf(lt, It))
    }

    function Fa() {
      return (0, Ut.d)(lt, (() => It))
    }
    var Ba = Bk(9022),
      Ra = Bk(3090);

    function ta(kk) {
      const Fk = (0, Ra.c)(kk),
        Bk = void 0 === Fk ? void 0 : (0, Ba.displayNameOf)(Fk);
      return "object" === typeof Bk && null !== Bk && "translationKey" in Bk && "string" === typeof Bk.translationKey ? Bk.translationKey : `item:${(0,Gk.Be)(kk)}`
    }

    function aa(kk, Fk) {
      return kk(ta(Fk))
    }
    const Xa = [{
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

    function ba(kk, Fk) {
      return [`Deposit Seed (${kk})`, {
        item: bB[`${kk} Deposit`],
        amount: Fk
      }]
    }
    const wa = Object.fromEntries([ba("Coal", 8), ba("Iron", 8), ba("Copper", 8), ba("Gold", 6), ba("Voltite", 4), ba("Uranium", 4)]),
      da = "Relay Coil",
      sa = new Map;

    function Va(kk) {
      let Fk = sa.get(kk);
      if (!Fk) {
        const Bk = Math.max(1, kk);
        Fk = Xa.filter((kk => {
          var Fk;
          return Bk >= kk.fromTier && Bk <= (null !== (Fk = kk.untilTier) && void 0 !== Fk ? Fk : 1 / 0)
        })).map((kk => kk.later && Bk >= kk.later.tier ? {
          ...kk,
          weight: kk.later.weight
        } : kk)), sa.set(kk, Fk)
      }
      return Fk
    }

    function Ja(kk) {
      return Va(kk).some((kk => {
        let {
          item: Fk
        } = kk;
        return Fk === da
      }))
    }

    function Aa(kk) {
      return kk.startsWith("Deposit Seed (")
    }

    function ea(kk, Fk) {
      const Bk = Va(kk);
      return Fk ? Bk.filter((kk => Fk(kk.item))) : Bk
    }

    function ya(kk) {
      return kk.reduce(((kk, Fk) => kk + Fk.weight), 0)
    }

    function fa(kk, Fk) {
      const Bk = ea(kk, Fk),
        Rk = ya(Bk);
      return Bk.map((kk => ({
        find: kk,
        chance: kk.weight / Rk
      })))
    }
    const ma = 6e4,
      Wa = new Intl.NumberFormat("en-US");

    function va(kk, Fk) {
      const Bk = kk >= 10 ? Math.round(kk) : Math.round(10 * kk) / 10;
      return 0 === Bk ? "0" : `${Fk}${Wa.format(Bk)}`
    }

    function ia(kk) {
      return kk < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Wa.format(kk) : kk < 1e6 ? `${kk<1e5?Math.floor(kk/100)/10:Math.floor(kk/1e3)}k` : Math.floor(kk / 1e5) / 10 + "M"
    }

    function Ya(kk) {
      return kk < 0 ? "\u2212" + -kk : String(kk)
    }

    function oa(kk, Fk) {
      const Bk = Math.max(1, Math.round(Fk));
      if (Bk < 60) return kk("buildAFactory2Game:durationSeconds", {
        seconds: String(Bk)
      });
      const Rk = Math.round(Bk / 60);
      if (Rk < 60) return kk("buildAFactory2Game:durationMinutes", {
        minutes: String(Rk)
      });
      const tk = String(Math.floor(Rk / 60));
      return Rk % 60 === 0 ? kk("buildAFactory2Game:durationWholeHours", {
        hours: tk
      }) : kk("buildAFactory2Game:durationHours", {
        hours: tk,
        minutes: String(Rk % 60)
      })
    }
    const La = "(max-height: 420px), (max-width: 650px)";

    function Oa() {
      return "undefined" !== typeof window && window.matchMedia(La).matches
    }

    function Ea(kk) {
      const Fk = window.matchMedia(La),
        Bk = () => {
          kk(Fk.matches)
        };
      return Fk.addEventListener("change", Bk), () => {
        Fk.removeEventListener("change", Bk)
      }
    }
    var Sa = Bk(1069);

    function Na(kk, Fk) {
      return null !== kk && kk > Fk + 1
    }

    function Ha(kk) {
      const Fk = 100 * kk;
      return String(Fk <= 0 || Fk >= 1 ? Math.round(Fk) : Math.max(.1, Math.round(10 * Fk) / 10))
    }

    function ua(kk) {
      let {
        item: Fk,
        amount: Bk
      } = kk;
      return (0, Sa.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Sa.jsx)(Mt.e, {
            itemName: Fk,
            amount: 0
          })
        }), Bk > 1 && (0, Sa.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", Bk]
        })]
      })
    }

    function Ma(kk) {
      let {
        label: Fk,
        names: Bk
      } = kk;
      const [tk, ak] = (0, Rk.useState)(!1), Xk = Bk.join(" / ");
      return (0, Sa.jsxs)(Sa.Fragment, {
        children: [(0, Sa.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Xk,
          "aria-expanded": tk,
          onClick: () => {
            ak(!tk)
          },
          children: Fk
        }), tk && (0, Sa.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Xk
        })]
      })
    }

    function ga(kk) {
      let {
        tier: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)(), {
        key: Rk,
        params: tk
      } = Ak(Fk, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), ak = Bk(`buildAFactory2Game:${Rk}`, tk);
      return (0, Sa.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Sa.jsx)(ut.d, {
          name: "lock"
        }), ak]
      })
    }
    const Ua = (0, Rk.createContext)(null);

    function ca() {
      const {
        t: kk
      } = (0, Ht.x)(), Fk = (0, Rk.useContext)(Ua);
      return (0, Rk.useEffect)((() => null === Fk || void 0 === Fk ? void 0 : Fk()), [Fk]), (0, Sa.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: kk("buildAFactory2Game:recipeForQuest"),
        "aria-label": kk("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Ga(kk) {
      let {
        title: Fk,
        count: Bk,
        children: tk,
        startOpen: ak = !0
      } = kk;
      const {
        t: Xk
      } = (0, Ht.x)(), [bk, wk] = (0, Rk.useState)((() => ak && !Oa())), [dk, sk] = (0, Rk.useState)(0), Vk = (0, Rk.useCallback)((() => (sk((kk => kk + 1)), () => {
        sk((kk => kk - 1))
      })), []);
      return (0, Sa.jsxs)("div", {
        className: Ot()("Baf2Recipes", {
          Open: bk
        }),
        children: [(0, Sa.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            wk(!bk)
          },
          "aria-expanded": bk,
          children: [Xk("buildAFactory2Game:recipesToggle", {
            title: Fk,
            count: String(Bk)
          }), (0, Sa.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: bk ? "\u25be" : "\u25b8"
          })]
        }), bk && (0, Sa.jsxs)(Ua.Provider, {
          value: Vk,
          children: [(0, Sa.jsx)("ul", {
            className: "Baf2RecipeList",
            children: tk
          }), dk > 0 && (0, Sa.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Sa.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Xk("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Ta = "buildAFactory2Game:",
      ra = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Da = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      za = {
        "Uranium Grit": ak,
        "Raw Uranium": ak
      };

    function Pa(kk) {
      var Fk;
      return null !== (Fk = za[kk]) && void 0 !== Fk ? Fk : Math.max(nk(kk), Da[kk] ? nk(Da[kk]) : 1, function(kk) {
        const Fk = tk.findIndex((Fk => Fk.cost.some((Fk => Fk.item === kk))));
        return Fk > ak ? Fk : 1
      }(kk))
    }

    function ha(kk, Fk) {
      return qa(Fk) ? Pa(Fk) : function(kk) {
        if (ra.has(kk)) return 1;
        const Fk = tk.findIndex((Fk => Fk.newDeposits.some((Fk => {
          let {
            block: Bk
          } = Fk;
          return Bk === kk
        }))));
        return Fk < 0 ? 1 : Fk + 1
      }(kk)
    }

    function qa(kk) {
      return kk in za || Vk(Pa(kk)) > 0
    }

    function Ca(kk, Fk) {
      return IF(kk, {
        coupled: !1,
        taught: null,
        atomic: bk() && Fk >= 11
      }).recipes
    }

    function Za(kk, Fk) {
      const Bk = Jk(kk, Fk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vk(kk) > 0);
      return "open" === Bk || "locked" === Bk
    }

    function pa(kk, Fk) {
      return kk.map(((kk, Bk) => ({
        value: kk,
        idx: Bk,
        tier: Fk(kk)
      }))).sort(((kk, Fk) => kk.tier - Fk.tier || kk.idx - Fk.idx)).map((kk => {
        let {
          value: Fk
        } = kk;
        return Fk
      }))
    }

    function Ka(kk, Fk, Bk) {
      const Rk = Jk(kk, Fk);
      if ("hidden" === Rk || "open" === Rk) return null;
      if ("teaser" === Rk) return {
        tag: {
          translationKey: `${Ta}${Bk?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Ta}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const tk = Ak(kk, {
          tier: Bk ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        ak = Ak(kk, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Ta}${tk.key}`,
          params: tk.params
        },
        reason: {
          translationKey: `${Ta}${ak.key}`,
          params: ak.params
        }
      }
    }

    function xa(kk) {
      return !Aa(kk)
    }

    function ja(kk) {
      let {
        seconds: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)();
      return (0, Sa.jsx)(Ga, {
        title: Bk("buildAFactory2Game:recipesCuts", {
          seconds: Fk
        }),
        count: 1,
        children: (0, Sa.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Sa.jsx)(ua, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Sa.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Sa.jsx)(ua, {
            item: "Maple Log",
            amount: 1
          }), (0, Sa.jsx)("span", {
            className: "Baf2RecipeName",
            children: Bk("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function la(kk) {
      let {
        fertilised: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)();
      return (0, Sa.jsxs)(Ga, {
        title: Bk("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Sa.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Sa.jsx)(ua, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Sa.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Sa.jsx)(ua, {
            item: "Wheat",
            amount: 1
          }), (0, Sa.jsx)(ua, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Sa.jsx)("span", {
            className: "Baf2RecipeName",
            children: Bk("buildAFactory2Game:recipeField")
          })]
        }), (0, Sa.jsxs)("li", {
          className: Ot()("Baf2Recipe", {
            InUse: Fk
          }),
          children: [(0, Sa.jsx)(ua, {
            item: "Fertiliser",
            amount: 1
          }), (0, Sa.jsx)("span", {
            className: "Baf2RecipeName",
            children: Bk("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function na(kk) {
      let {
        tier: Fk,
        seconds: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Ht.x)(), tk = function(kk) {
        return kk >= 5 ? LF : oF
      }(Fk);
      return (0, Sa.jsx)(Ga, {
        title: Rk("buildAFactory2Game:recipesBringsUp", {
          seconds: Bk
        }),
        count: tk.length,
        children: tk.map((kk => {
          let {
            item: Fk,
            chance: Bk
          } = kk;
          return (0, Sa.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Sa.jsx)(ua, {
              item: Fk,
              amount: 1
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeName",
              children: aa(Rk, Fk)
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Rk("buildAFactory2Game:recipeChance", {
                percent: Ha(Bk)
              })
            })]
          }, Fk)
        }))
      })
    }

    function Ia(kk) {
      let {
        tier: Fk,
        seconds: Bk,
        noSeeds: Rk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)(), ak = Fa(), Xk = fa(Fk, Rk ? xa : void 0), bk = Rk && fa(Fk).length > Xk.length, wk = Ja(Fk);
      return (0, Sa.jsxs)(Ga, {
        title: tk("buildAFactory2Game:recipesRecycles", {
          seconds: Bk
        }),
        count: Xk.length,
        children: [Xk.map((kk => {
          let {
            find: Fk,
            chance: Bk
          } = kk;
          return (0, Sa.jsxs)("li", {
            className: "Baf2Recipe",
            children: [ak.has(Fk.item) && (0, Sa.jsx)(ca, {}), (0, Sa.jsx)(ua, {
              item: Fk.item,
              amount: Fk.amount
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeName",
              children: aa(tk, Fk.item)
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: tk("buildAFactory2Game:recipeChance", {
                percent: Ha(Bk)
              })
            })]
          }, Fk.item)
        })), bk && (0, Sa.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Sa.jsx)("span", {
            className: "Baf2RecipeName",
            children: tk("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), wk && (0, Sa.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Sa.jsx)("span", {
            className: "Baf2RecipeName",
            children: tk("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function Qa(kk) {
      let {
        tier: Fk,
        seconds: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Ht.x)(), tk = Object.entries(wa).filter((kk => {
        let [, {
          item: Bk
        }] = kk;
        return Za(Pa(Bk), Fk, qa(Bk))
      }));
      return (0, Sa.jsx)(Ga, {
        title: Rk("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: Bk
        }),
        count: tk.length,
        children: tk.map((kk => {
          let [Fk, {
            item: Bk,
            amount: tk
          }] = kk;
          return (0, Sa.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Sa.jsx)(ua, {
              item: Fk,
              amount: 1
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Sa.jsx)(ua, {
              item: Bk,
              amount: tk
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeName",
              children: aa(Rk, Bk)
            })]
          }, Fk)
        }))
      })
    }

    function kX(kk) {
      let {
        tier: Fk,
        seconds: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Ht.x)(), tk = Fa(), ak = pa(Object.entries(bB).filter((kk => {
        let [Bk, Rk] = kk;
        return Za(ha(Bk, Rk), Fk, qa(Rk))
      })), (kk => {
        let [Fk, Bk] = kk;
        return ha(Fk, Bk)
      }));
      return (0, Sa.jsx)(Ga, {
        title: Rk("buildAFactory2Game:recipesDigs", {
          seconds: Bk
        }),
        count: ak.length,
        children: ak.map((kk => {
          let [Bk, ak] = kk;
          const Xk = ha(Bk, ak),
            bk = Xk > Fk ? Xk : null,
            wk = wB[Bk],
            dk = null === bk && tk.has(ak);
          return (0, Sa.jsxs)("li", {
            className: Ot()("Baf2Recipe", {
              Locked: null !== bk,
              Far: Na(bk, Fk)
            }),
            children: [dk && (0, Sa.jsx)(ca, {}), (0, Sa.jsx)(ua, {
              item: Bk,
              amount: 1
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Sa.jsx)(ua, {
              item: ak,
              amount: 1
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeName",
              children: aa(Rk, ak)
            }), void 0 !== wk && (0, Sa.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Rk("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / wk)
              })
            }), null !== bk && (0, Sa.jsx)(ga, {
              tier: bk
            })]
          }, Bk)
        }))
      })
    }

    function FX(kk) {
      var Fk;
      let {
        def: Bk,
        seconds: Rk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)();
      return (0, Sa.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Sa.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (Fk = Bk.fuels) && void 0 !== Fk ? Fk : []).map((kk => (0, Sa.jsx)(ua, {
            item: kk,
            amount: 1
          }, kk))), (0, Sa.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Sa.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Sa.jsx)(ut.d, {
              name: "bolt"
            }), tk("buildAFactory2Game:recipePower", {
              power: Ik(Bk.powerMade),
              seconds: Rk
            })]
          })]
        })
      })
    }

    function BX(kk) {
      let {
        def: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)();
      return (0, Sa.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Sa.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Sa.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Sa.jsx)(ut.d, {
              name: "bolt"
            }), Bk("buildAFactory2Game:recipeMixer", {
              cryo: va((0, Qk.G)(Fk, Fk.cryoMade), "")
            })]
          })
        })
      })
    }

    function RX(kk) {
      let {
        def: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)();
      return (0, Sa.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Sa.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Sa.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Sa.jsx)(ut.d, {
              name: "bolt"
            }), Bk("buildAFactory2Game:recipeCondenser", {
              power: va((0, Qk.G)(Fk, Fk.powerPerOp), ""),
              water: va((0, Qk.G)(Fk, Fk.fluidMade), "")
            })]
          })
        })
      })
    }

    function tX(kk) {
      let {
        kind: Fk,
        def: Bk,
        input: Rk,
        tier: tk,
        noSeeds: ak = !1
      } = kk;
      const Xk = String(Bk.opMs / 1e3);
      return RB(Bk) ? (0, Sa.jsx)(ja, {
        seconds: Xk
      }) : Bk.field ? (0, Sa.jsx)(la, {
        fertilised: null !== Rk
      }) : Bk.table ? (0, Sa.jsx)(na, {
        tier: tk,
        seconds: Xk
      }) : Bk.recycles ? (0, Sa.jsxs)(Sa.Fragment, {
        children: [(0, Sa.jsx)(Ia, {
          tier: tk,
          seconds: Xk,
          noSeeds: ak
        }), (0, Sa.jsx)(Qa, {
          tier: tk,
          seconds: Xk
        })]
      }) : BB(Bk) ? (0, Sa.jsx)(kX, {
        tier: tk,
        seconds: Xk
      }) : void 0 !== Bk.fluidMade ? (0, Sa.jsx)(RX, {
        def: Bk
      }) : void 0 !== Bk.cryoMade ? (0, Sa.jsx)(BX, {
        def: Bk
      }) : void 0 !== Bk.powerMade ? (0, Sa.jsx)(FX, {
        def: Bk,
        seconds: Xk
      }) : (0, Sa.jsx)(aX, {
        kind: Fk,
        input: Rk,
        tier: tk,
        seconds: Xk
      })
    }

    function aX(kk) {
      let {
        kind: Fk,
        input: Bk,
        tier: Rk,
        seconds: tk
      } = kk;
      const {
        t: ak
      } = (0, Ht.x)(), Xk = Fa(), bk = pa(function(kk) {
        const Fk = new Map;
        for (const tk of kk) {
          var Bk, Rk;
          const kk = [tk.output, tk.outputAmount, tk.inputAmount, null === (Bk = tk.bonus) || void 0 === Bk ? void 0 : Bk.item, null === (Rk = tk.bonus) || void 0 === Rk ? void 0 : Rk.chance].join("|"),
            ak = Fk.get(kk);
          ak ? ak.inputs.push(tk.input) : Fk.set(kk, {
            inputs: [tk.input],
            inputAmount: tk.inputAmount,
            output: tk.output,
            outputAmount: tk.outputAmount,
            bonus: tk.bonus
          })
        }
        return [...Fk.values()]
      }(Ca(Fk, Rk).filter(VB)), (kk => Pa(kk.output))).filter((kk => Za(Pa(kk.output), Rk, qa(kk.output))));
      return (0, Sa.jsx)(Ga, {
        title: ak("buildAFactory2Game:recipesEach", {
          seconds: tk
        }),
        count: bk.length,
        children: bk.map((kk => {
          const Fk = null !== Bk && kk.inputs.includes(Bk),
            tk = kk.inputs.length > 3 ? [Fk ? Bk : kk.inputs[0]] : kk.inputs,
            bk = Pa(kk.output) > Rk ? Pa(kk.output) : null,
            wk = null === bk && Xk.has(kk.output);
          return (0, Sa.jsxs)("li", {
            className: Ot()("Baf2Recipe", {
              InUse: Fk,
              Locked: null !== bk,
              Far: Na(bk, Rk)
            }),
            children: [wk && (0, Sa.jsx)(ca, {}), tk.map(((Fk, Bk) => (0, Sa.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [Bk > 0 && (0, Sa.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Sa.jsx)(ua, {
                item: Fk,
                amount: kk.inputAmount
              })]
            }, Fk))), tk.length < kk.inputs.length && (0, Sa.jsx)(Ma, {
              label: ak("buildAFactory2Game:recipeMore", {
                count: String(kk.inputs.length - tk.length)
              }),
              names: kk.inputs.filter((kk => !tk.includes(kk))).map((kk => aa(ak, kk)))
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Sa.jsx)(ua, {
              item: kk.output,
              amount: kk.outputAmount
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeName",
              children: aa(ak, kk.output)
            }), kk.bonus && (0, Sa.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [ak("buildAFactory2Game:recipeBonus", {
                percent: Ha(kk.bonus.chance)
              }), (0, Sa.jsx)(ua, {
                item: kk.bonus.item,
                amount: 1
              })]
            }), null !== bk && (0, Sa.jsx)(ga, {
              tier: bk
            })]
          }, `${kk.output}|${kk.inputs[0]}`)
        }))
      })
    }

    function XX(kk) {
      let {
        taught: Fk,
        tier: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Ht.x)(), tk = Fa(), ak = pa(Object.values(lF), (kk => kk.tier)).filter((kk => Za(kk.tier, Bk)));
      return (0, Sa.jsx)(Ga, {
        title: Rk("buildAFactory2Game:benchCanMake"),
        count: ak.length,
        startOpen: !1,
        children: ak.map((kk => {
          const ak = kk.tier > Bk,
            Xk = !ak && tk.has(kk.output);
          return (0, Sa.jsxs)("li", {
            className: Ot()("Baf2Recipe", {
              InUse: kk.output === Fk,
              Locked: ak,
              Far: Na(ak ? kk.tier : null, Bk)
            }),
            children: [Xk && (0, Sa.jsx)(ca, {}), (0, Sa.jsx)(ua, {
              item: kk.output,
              amount: kk.outputAmount
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeName",
              children: aa(Rk, kk.output)
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), kk.inputs.map((kk => (0, Sa.jsx)(ua, {
              item: kk.item,
              amount: kk.amount
            }, kk.item))), ak && (0, Sa.jsx)(ga, {
              tier: kk.tier
            })]
          }, kk.output)
        }))
      })
    }
    var bX, wX, dX, sX, VX;
    const JX = GF.Generator,
      AX = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      eX = 1e3 * (null !== (bX = JX.powerMade) && void 0 !== bX ? bX : 0) / JX.opMs,
      yX = Math.min(...(null !== (wX = JX.fuels) && void 0 !== wX ? wX : []).map((kk => XB[kk]))) / 1e3,
      fX = GF["Volt Engine"],
      mX = 1e3 * (null !== (dX = fX.powerMade) && void 0 !== dX ? dX : 0) / fX.opMs,
      WX = XB[null !== (sX = null === (VX = fX.fuels) || void 0 === VX ? void 0 : VX[0]) && void 0 !== sX ? sX : ""] / 1e3;

    function vX(kk) {
      let {
        item: Fk,
        label: Bk,
        value: Rk,
        note: tk,
        dim: ak
      } = kk;
      return (0, Sa.jsxs)("li", {
        className: Ot()("Baf2PowerRow", {
          Dim: ak
        }),
        children: [(0, Sa.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Sa.jsx)(Mt.e, {
            itemName: Fk,
            amount: 0
          })
        }), (0, Sa.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Sa.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: Bk
          }), tk && (0, Sa.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: tk
          })]
        }), (0, Sa.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Rk
        })]
      })
    }

    function iX(kk, Fk, Bk, Rk) {
      var tk;
      const ak = void 0 === Rk ? GF[kk] : function(kk, Fk) {
          if (null === Fk) return kk;
          let Bk = xk.get(Fk);
          return Bk || (Bk = {
            ...kk,
            powerPerOp: Kk(kk, Fk),
            farmMob: Fk
          }, xk.set(Fk, Bk)), Bk
        }(GF[kk], Rk),
        Xk = Fk && ak.couplable ? CF(ak, Bk) : ak;
      return 1e3 * (null !== (tk = Xk.powerPerOp) && void 0 !== tk ? tk : 0) / Xk.opMs
    }

    function YX(kk) {
      var Fk, Bk, Rk, tk, ak, Xk, bk, wk;
      let {
        message: dk
      } = kk;
      const {
        t: sk
      } = (0, Ht.x)(), Vk = (kk, Fk) => sk("buildAFactory2Game:powerPerSecond", {
        rate: va(kk, Fk)
      }), [Jk, Ak] = dk.baf2PowerGenerators, ek = dk.baf2PowerGeneratorFuel, yk = dk.baf2PowerSunPanels, fk = null !== (Fk = dk.baf2PowerSunShare) && void 0 !== Fk ? Fk : 1, mk = dk.baf2PowerVaults, Wk = dk.baf2PowerUsers, [vk, ik] = null !== (Bk = dk.baf2PowerEngines) && void 0 !== Bk ? Bk : [0, 0], Yk = null !== (Rk = dk.baf2PowerEngineCells) && void 0 !== Rk ? Rk : 0, Lk = null !== (tk = dk.baf2PowerPads) && void 0 !== tk ? tk : 0, Ok = null !== (ak = dk.baf2PowerCharge) && void 0 !== ak ? ak : 0, [Ek, Sk] = null !== (Xk = dk.baf2PowerReactors) && void 0 !== Xk ? Xk : [0, 0], [Nk, Hk] = null !== (bk = dk.baf2PowerBatteries) && void 0 !== bk ? bk : [0, 0];
      let uk = sk("buildAFactory2Game:powerEngineCells", {
        amount: String(Yk)
      });
      Yk > 0 && ik > 0 && (uk = sk("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Yk),
        time: oa(sk, Yk * WX / ik)
      }));
      let Mk = sk("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(ek)
      });
      ek > 0 && Ak > 0 && (Mk = sk("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(ek),
        time: oa(sk, ek * yX / Ak)
      }));
      const gk = Jk + vk + yk + Ek;
      return (0, Sa.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Sa.jsxs)("section", {
          children: [(0, Sa.jsxs)("h3", {
            children: [sk("buildAFactory2Game:powerMaking"), (0, Sa.jsx)("span", {
              children: Vk(dk.baf2PowerMadePerS, "+")
            })]
          }), (0, Sa.jsxs)("ul", {
            children: [0 === gk && (0, Sa.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: sk("buildAFactory2Game:powerNoMakers")
            }), Jk > 0 && (0, Sa.jsx)(vX, {
              item: "Generator",
              label: `${aa(sk,"Generator")} \xd7${Jk}`,
              note: `${sk("buildAFactory2Game:powerRunning",{amount:String(Ak)})} \xb7 ${Mk}`,
              value: Vk(Ak * eX, "+"),
              dim: 0 === Ak
            }), vk > 0 && (0, Sa.jsx)(vX, {
              item: "Volt Engine",
              label: `${aa(sk,"Volt Engine")} \xd7${vk}`,
              note: `${sk("buildAFactory2Game:powerRunning",{amount:String(ik)})} \xb7 ${uk}`,
              value: Vk(ik * mX, "+"),
              dim: 0 === ik
            }), yk > 0 && (0, Sa.jsx)(vX, {
              item: "Solar Panel",
              label: `${aa(sk,"Solar Panel")} \xd7${yk}`,
              note: sk(fk < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Vk(4 * yk * fk, "+")
            }), Ek > 0 && (0, Sa.jsx)(vX, {
              item: "Reactor Frame",
              label: `${sk("buildAFactory2Game:powerReactors")} \xd7${Ek}`,
              note: sk("buildAFactory2Game:powerRunning", {
                amount: String(Sk)
              }),
              value: Vk(null !== (wk = dk.baf2PowerReactorPerS) && void 0 !== wk ? wk : 0, "+"),
              dim: 0 === Sk
            })]
          })]
        }), (0, Sa.jsxs)("section", {
          children: [(0, Sa.jsxs)("h3", {
            children: [sk("buildAFactory2Game:powerStorage"), (0, Sa.jsx)("span", {
              children: Ik(dk.baf2PowerCap)
            })]
          }), (mk > 0 || Nk > 0) && (0, Sa.jsxs)("ul", {
            children: [mk > 0 && (0, Sa.jsx)(vX, {
              item: "Charge Vault",
              label: `${aa(sk,"Charge Vault")} \xd7${mk}`,
              value: `+${Ik(8e3*mk)}`
            }), Nk > 0 && (0, Sa.jsx)(vX, {
              item: "Battery Cell",
              label: `${sk("buildAFactory2Game:powerBatteries")} \xd7${Nk}`,
              value: `+${Ik(Hk)}`
            })]
          })]
        }), (0, Sa.jsxs)("section", {
          children: [(0, Sa.jsxs)("h3", {
            children: [sk("buildAFactory2Game:powerUsing"), (0, Sa.jsx)("span", {
              children: Vk(dk.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Sa.jsxs)("ul", {
            children: [0 === Wk.length && 0 === Lk && 0 === Ok && (0, Sa.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: sk("buildAFactory2Game:powerNoUsers")
            }), Wk.map((kk => {
              let [Fk, Bk, Rk, tk, ak = 1, Xk] = kk, bk = Bk ? sk(AX[ak - 1], {
                name: aa(sk, Fk)
              }) : aa(sk, Fk);
              return void 0 !== Xk && (bk = sk("buildAFactory2Game:powerFarmName", {
                name: bk,
                mob: sk(Ck(Xk))
              })), (0, Sa.jsx)(vX, {
                item: Fk,
                label: `${bk} \xd7${Rk}`,
                note: sk("buildAFactory2Game:powerRunning", {
                  amount: String(tk)
                }),
                value: tk > 0 ? Vk(tk * iX(Fk, Bk, ak, Xk), "\u2212") : sk("buildAFactory2Game:powerIdle"),
                dim: 0 === tk
              }, `${Fk}|${Bk}|${ak}|${Xk}`)
            })), Lk > 0 && (0, Sa.jsx)(vX, {
              item: "Charging Pad",
              label: `${aa(sk,"Charging Pad")} \xd7${Lk}`,
              value: sk("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Ok > 0 && (0, Sa.jsx)(vX, {
              item: "Homestead Core",
              label: sk("buildAFactory2Game:powerCharge"),
              value: Vk(Ok, "\u2212")
            }), dk.baf2PowerStarved > 0 && (0, Sa.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Sa.jsx)(ut.d, {
                name: "triangle-exclamation"
              }), sk("buildAFactory2Game:powerStarved", {
                amount: String(dk.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var oX = Bk(4268),
      LX = Bk(1389);
    class OX {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(kk) {
        this.message = kk;
        for (const Fk of this.listeners) Fk()
      }
      get() {
        return this.message
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
    }
    class EX extends OX {}

    function SX(kk, Fk) {
      const Bk = () => {
          const Bk = kk.get();
          if (!Bk || !Fk) return Bk;
          const [Rk, tk, ak] = Bk.baf2PowerAt;
          return Rk === Fk[0] && tk === Fk[1] && ak === Fk[2] ? Bk : null
        },
        [tk, ak] = (0, Rk.useState)(Bk);
      return (0, Rk.useEffect)((() => (ak(Bk()), kk.subscribe((() => {
        ak(Bk())
      })))), [kk, ...null !== Fk && void 0 !== Fk ? Fk : []]), tk
    }

    function NX(kk) {
      return {
        stored: kk.baf2PowerStored,
        cap: kk.baf2PowerCap,
        madePerS: kk.baf2PowerMadePerS,
        usedPerS: kk.baf2PowerUsedPerS
      }
    }

    function HX(kk) {
      let {
        stored: Fk,
        cap: Bk
      } = kk;
      return (0, Sa.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Sa.jsx)("div", {
          style: {
            width: `${Math.min(100,100*Fk/Math.max(1,Bk))}%`
          }
        })
      })
    }

    function uX(kk) {
      let {
        figures: Fk,
        labelled: Bk = !1
      } = kk;
      const {
        t: Rk
      } = (0, Ht.x)(), tk = Fk.madePerS - Fk.usedPerS, {
        text: ak,
        draining: Xk
      } = function(kk, Fk) {
        let {
          stored: Bk,
          cap: Rk,
          madePerS: tk,
          usedPerS: ak
        } = Fk;
        const Xk = tk - ak;
        return Bk >= Rk ? {
          text: kk("buildAFactory2Game:powerFull"),
          draining: !1
        } : Xk > .05 ? {
          text: kk("buildAFactory2Game:powerFullIn", {
            time: oa(kk, (Rk - Bk) / Xk)
          }),
          draining: !1
        } : Xk < -.05 ? {
          text: kk("buildAFactory2Game:powerEmptyIn", {
            time: oa(kk, Bk / -Xk)
          }),
          draining: !0
        } : {
          text: kk("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Rk, Fk);
      return (0, Sa.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Sa.jsx)(HX, {
          stored: Fk.stored,
          cap: Fk.cap
        }), (0, Sa.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Sa.jsx)("span", {
            children: Rk(Bk ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: Ik(Fk.stored),
              cap: Ik(Fk.cap)
            })
          }), (0, Sa.jsxs)("span", {
            className: Ot()("Baf2PowerNet", {
              Draining: Xk
            }),
            children: [Rk("buildAFactory2Game:powerPerSecond", {
              rate: va(Math.abs(tk), tk < 0 ? "\u2212" : "+")
            }), " \xb7 ", ak]
          })]
        })]
      })
    }

    function MX(kk) {
      let {
        stored: Fk,
        cap: Bk,
        rates: Rk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)();
      return Rk ? (0, Sa.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Sa.jsx)(uX, {
          figures: {
            stored: Fk,
            cap: Bk,
            madePerS: Rk[0],
            usedPerS: Rk[1]
          },
          labelled: !0
        })
      }) : (0, Sa.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Sa.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Sa.jsx)(HX, {
            stored: Fk,
            cap: Bk
          }), (0, Sa.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Sa.jsx)("span", {
              children: tk("buildAFactory2Game:powerStoredLabelled", {
                stored: Ik(Fk),
                cap: Ik(Bk)
              })
            })
          })]
        })
      })
    }

    function gX(kk) {
      let {
        store: Fk,
        close: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Ht.x)(), tk = SX(Fk);
      return (0, Sa.jsx)(oX.e, {
        close: Bk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Sa.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsxs)("div", {
              children: [(0, Sa.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Rk("buildAFactory2Game:powerTitle")
              }), (0, Sa.jsx)("p", {
                children: Rk("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Sa.jsx)(LX.k, {
              onClick: Bk
            })]
          }), tk && (0, Sa.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Sa.jsx)(uX, {
              figures: NX(tk)
            }), (0, Sa.jsx)(YX, {
              message: tk
            })]
          })]
        })
      })
    }

    function UX(kk) {
      var Fk;
      let {
        kind: Bk,
        def: tk,
        xa: ak,
        power: Xk,
        stored: bk,
        cap: wk
      } = kk;
      const {
        t: dk
      } = (0, Ht.x)(), sk = SX(Xk, ak), [Vk, Jk] = (0, Rk.useState)(!1);
      return (0, Sa.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Sa.jsx)(tX, {
          kind: Bk,
          def: tk,
          input: null,
          tier: null !== (Fk = null === sk || void 0 === sk ? void 0 : sk.baf2PowerTier) && void 0 !== Fk ? Fk : 1
        }), (0, Sa.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: dk("buildAFactory2Game:powerTitle")
        }), sk && (0, Sa.jsx)(uX, {
          figures: NX(sk)
        }), !sk && (0, Sa.jsx)(MX, {
          stored: bk,
          cap: wk,
          rates: null
        }), sk && (0, Sa.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Jk(!Vk)
          },
          "aria-expanded": Vk,
          children: dk(Vk ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), sk && Vk && (0, Sa.jsx)(YX, {
          message: sk
        })]
      })
    }
    const cX = 2500,
      GX = 17500,
      TX = `${Yk} `;
    const rX = ["plan", "throttle"];

    function DX(kk) {
      if (kk.startsWith(`${NF} `)) return kk.slice(0, kk.lastIndexOf(" "));
      const Fk = kk.split(" ");
      return Fk[0] === VF && rX.includes(Fk[4]) ? Fk.slice(0, 5).join(" ") : null
    }
    class zX {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = kk, this.now = Fk, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.Rtk = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = Fk()
      }
      enqueue(kk) {
        this.queue(kk, this.nextTicket());
        const Fk = this.Rtk + this.pending.length;
        return this.flush(), Fk
      }
      track(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Bk = this.nextTicket();
        if (!Fk.urgent) return this.queue(kk, Bk), this.flush(), Bk;
        const {
          supersedes: Rk
        } = Fk;
        for (let ak = this.pending.length - 1; ak >= this.urgent; ak--) {
          const Fk = this.pending[ak];
          (Fk.command === kk || null !== Rk && void 0 !== Rk && Rk(Fk.command)) && (this.pending.splice(ak, 1), this.markLeft(Fk.tickets))
        }
        const tk = this.pending.findIndex((Fk => {
          let {
            command: Bk
          } = Fk;
          return Bk === kk
        }));
        return -1 !== tk ? this.pending[tk].tickets.push(Bk) : (this.pending.splice(this.urgent, 0, {
          command: kk,
          tickets: [Bk]
        }), this.urgent += 1), this.flush(), Bk
      }
      leftAt(kk) {
        const Fk = this.leftTimes.get(kk);
        return void 0 !== Fk ? Fk : this.pending.some((Fk => {
          let {
            tickets: Bk
          } = Fk;
          return Bk.includes(kk)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let kk = !0;
        return () => {
          kk && (kk = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(kk) {
        var Fk;
        return (null === (Fk = this.pending.at(-1)) || void 0 === Fk ? void 0 : Fk.command) === kk
      }
      sent() {
        return this.Rtk
      }
      clear() {
        for (const {
            tickets: kk
          }
          of this.pending) this.markLeft(kk);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(kk) {
        const Fk = this.now();
        for (const Bk of kk) this.leftTimes.set(Bk, Fk);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(kk, Fk) {
        const Bk = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === Bk || void 0 === Bk ? void 0 : Bk.command) === kk) return void(! function(kk) {
          return kk === Lk || kk.startsWith(`${ik} `) || kk.startsWith(`${Pk} `)
        }(kk) ? Bk.tickets.push(Fk) : (this.pending.pop(), this.markLeft([...Bk.tickets, Fk])));
        const Rk = void 0 === Bk ? null : sF(Bk.command, kk);
        if (null !== Rk && void 0 !== Bk) return Bk.command = Rk, void Bk.tickets.push(Fk);
        const tk = DX(kk);
        if (null !== tk && void 0 !== Bk && DX(Bk.command) === tk) return Bk.command = kk, void Bk.tickets.push(Fk);
        if (null !== Bk && void 0 !== Bk && Bk.command.startsWith(TX) && kk.startsWith(TX)) {
          const Rk = kk.slice(TX.length);
          if (Bk.command.slice(TX.length).split(",").includes(Rk)) return void Bk.tickets.push(Fk);
          const tk = `${Bk.command},${Rk}`;
          if (tk.length <= 119) return Bk.command = tk, void Bk.tickets.push(Fk)
        }
        this.pending.push({
          command: kk,
          tickets: [Fk]
        })
      }
      flush() {
        const kk = this.now();
        for (this.tokens = Math.min(5, this.tokens + (kk - this.refilledAt) / cX), this.refilledAt = kk; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.Rtk += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: kk,
            tickets: Fk
          } = this.pending.shift();
          this.markLeft(Fk), this.send(kk)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * cX)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class PX {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new zX(kk, Fk)
      }
      send(kk) {
        return this.queue.enqueue(kk)
      }
      sent() {
        return this.queue.sent()
      }
      track(kk, Fk) {
        return this.queue.track(kk, Fk)
      }
      leftAt(kk) {
        return this.queue.leftAt(kk)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(kk) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = Fk, this.send(kk), this.islandEdits.count
      }
      syncIslandEdits(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: Bk
        } = this, Rk = Fk - Bk.lastAtMs < GX;
        Bk.count = Rk ? Math.max(Bk.count, kk) : kk
      }
      clear() {
        this.queue.clear()
      }
    }
    const hX = (0, Rk.createContext)(null);

    function qX() {
      const kk = (0, Rk.useContext)(hX);
      if (!kk) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return kk
    }

    function CX(kk, Fk) {
      return null !== Fk && void 0 !== Fk ? Fk : 1 === kk
    }

    function ZX(kk, Fk) {
      return kk.every((kk => {
        var Bk;
        let [Rk, , tk] = kk;
        return !CX(tk, null === (Bk = Fk.get(Rk)) || void 0 === Bk ? void 0 : Bk.lA)
      }))
    }

    function pX(kk, Fk, Bk) {
      if (0 === kk.size) return kk;
      const Rk = new Map(kk);
      for (const [tk, ak] of kk) {
        const kk = Fk.find((kk => {
          let [Fk] = kk;
          return Fk === tk
        }));
        (!kk || ak.lA === (1 === kk[2]) || ak.atMs < Bk) && Rk.delete(tk)
      }
      return Rk
    }

    function KX(kk) {
      var Fk;
      let {
        xa: Bk,
        input: tk,
        drops: ak,
        seconds: Xk
      } = kk;
      const {
        t: bk
      } = (0, Ht.x)(), wk = qX(), [dk, sk] = (0, Rk.useState)(new Map);
      (0, Rk.useEffect)((() => {
        ak && sk((kk => pX(kk, ak, Date.now() - GX)))
      }), [ak]), (0, Rk.useEffect)((() => {
        const kk = function(kk, Fk) {
          let Bk = null;
          for (const {
              atMs: Rk
            }
            of kk.values()) Bk = null === Bk ? Rk : Math.min(Bk, Rk);
          return null === Bk ? null : Bk + Fk
        }(dk, GX);
        if (null === kk || !ak) return;
        const Fk = setTimeout((() => {
          sk((kk => pX(kk, ak, Date.now() - GX)))
        }), Math.max(0, kk - Date.now()) + 1);
        return () => {
          clearTimeout(Fk)
        }
      }), [dk, ak]);
      const Vk = Zk(tk),
        Jk = null !== Vk && null !== ak && ZX(ak, dk),
        Ak = function(kk, Fk, Bk) {
          return null === kk || null === Fk || ZX(Fk, Bk) ? 0 : zk[rk[kk]]
        }(Vk, ak, dk);
      return (0, Sa.jsxs)(Ga, {
        title: bk("buildAFactory2Game:farmDropsTitle", {
          seconds: Xk
        }),
        count: null !== (Fk = null === ak || void 0 === ak ? void 0 : ak.length) && void 0 !== Fk ? Fk : 0,
        children: [Ak > 0 && (0, Sa.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: bk("buildAFactory2Game:farmDropsPower", {
            power: String(Ak)
          })
        }), (null === Vk || !ak) && (0, Sa.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: bk("buildAFactory2Game:farmDropsEmpty")
        }), Jk && (0, Sa.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: bk("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Vk && (null === ak || void 0 === ak ? void 0 : ak.map((kk => {
          var Fk;
          let [Rk, tk, ak] = kk;
          const Xk = tk < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Vk = CX(ak, null === (Fk = dk.get(Rk)) || void 0 === Fk ? void 0 : Fk.lA);
          return (0, Sa.jsxs)("li", {
            className: Ot()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Vk
            }),
            children: [(0, Sa.jsx)(ua, {
              item: Rk,
              amount: 1
            }), (0, Sa.jsx)("span", {
              className: "Baf2RecipeName",
              children: aa(bk, Rk)
            }), (0, Sa.jsx)("span", {
              className: "Baf2FarmRate",
              children: bk(Xk, {
                amount: String(tk)
              })
            }), (0, Sa.jsx)("button", {
              type: "button",
              className: Ot()("Baf2FarmToggle SmallTextBold", {
                Kept: Vk
              }),
              "aria-pressed": Vk,
              onClick: () => {
                sk(new Map(dk).set(Rk, {
                  lA: !Vk,
                  atMs: Date.now()
                })), wk.send(function(kk, Fk, Bk, Rk) {
                  return `${Pk} ${kk} ${Fk} ${Bk} ${Rk}`
                }(Bk[0], Bk[1], Bk[2], Rk))
              },
              children: bk(Vk ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Rk)
        })))]
      })
    }
    var xX;
    const jX = String(null !== (xX = GF.Synthesizer.waterPerOp) && void 0 !== xX ? xX : 0);

    function lX(kk) {
      let {
        xa: Fk,
        taught: Bk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)(), ak = qX(), [Xk, bk] = (0, Rk.useState)(null);
      (0, Rk.useEffect)((() => {
        null !== Xk && Bk === Xk && bk(null)
      }), [Xk, Bk]);
      const wk = null !== Xk && void 0 !== Xk ? Xk : Bk;
      let dk = tk("buildAFactory2Game:synthPick");
      return null !== wk && (dk = tk("buildAFactory2Game:synthGrows", {
        name: aa(tk, wk),
        input: aa(tk, OF),
        water: jX
      })), (0, Sa.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Sa.jsx)("div", {
          className: Ot()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === wk
          }),
          children: dk
        }), (0, Sa.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: EF.map(((kk, Bk) => {
            const Rk = aa(tk, kk),
              Xk = kk === wk;
            return (0, Sa.jsx)("li", {
              children: (0, Sa.jsx)("button", {
                type: "button",
                className: Ot()("Baf2SynthTile", {
                  Selected: Xk
                }),
                title: Rk,
                "aria-label": Rk,
                "aria-pressed": Xk,
                onClick: () => {
                  Xk || (bk(kk), ak.send(`${NF} ${Fk[0]} ${Fk[1]} ${Fk[2]} ${Bk}`))
                },
                children: (0, Sa.jsx)(Mt.e, {
                  itemName: kk,
                  amount: 0
                })
              })
            }, kk)
          }))
        })]
      })
    }
    const nX = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function IX(kk) {
      let {
        kind: Fk,
        tier: Bk,
        coupled: Rk,
        level: tk,
        slot: ak
      } = kk;
      const {
        t: Xk
      } = (0, Ht.x)(), wk = nk(rF);
      if (!Rk && null !== Bk && Bk < wk) return (0, Sa.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Sa.jsx)(ut.d, {
            name: "lock"
          })
        }), (0, Sa.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Xk("buildAFactory2Game:upgradeLocked")
        }), (0, Sa.jsx)("span", {
          className: "Baf2TierTag",
          children: Xk("buildAFactory2Game:tierTag", {
            tier: String(wk)
          })
        })]
      });
      const dk = function(kk, Fk) {
          if (bk() && "Crusher" !== kk && null !== Fk) {
            if (QX(zF, Fk)) return {
              item: zF,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (QX(DF, Fk)) return {
              item: DF,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: rF,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(Fk, Bk),
        sk = Xk(Rk ? nX[tk - 1] : dk.emptyKey),
        Vk = null !== Bk ? function(kk, Fk, Bk, Rk) {
          if (!bk() || !Bk || "Crusher" === kk || Fk < 10) return null;
          const tk = nk(zF);
          if (Rk < 3 && tk > 1 && (2 === Rk || Fk >= tk)) return {
            tier: tk,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const ak = nk(DF);
          if (1 === Rk && ak > 1) return {
            tier: ak,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(Fk, Bk, Rk, tk) : null;
      return (0, Sa.jsxs)("div", {
        className: Ot()("Baf2UpgradeSocket", {
          Fitted: Rk
        }),
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Rk && ak, !Rk && (0, Sa.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Sa.jsx)(Mt.e, {
              itemName: dk.item,
              amount: 0
            })
          })]
        }), (0, Sa.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Sa.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Xk("buildAFactory2Game:upgradeTitle")
          }), (0, Sa.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: sk
          }), Rk && tk >= 2 && "Crusher" === Fk && (0, Sa.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Xk("buildAFactory2Game:couplerCrusherHint")
          }), Vk && null !== Bk && Bk < Vk.tier && (0, Sa.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Sa.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Sa.jsx)(ut.d, {
                name: "lock"
              })
            }), Xk(Vk.lockedKey), (0, Sa.jsx)("span", {
              className: "Baf2TierTag",
              children: Xk("buildAFactory2Game:tierTag", {
                tier: String(Vk.tier)
              })
            })]
          }), Vk && null !== Bk && Bk >= Vk.tier && (0, Sa.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Xk(Vk.nextKey)
          })]
        })]
      })
    }

    function QX(kk, Fk) {
      const Bk = nk(kk);
      return Bk > 1 && Fk >= Bk
    }
    var kb = Bk(36708);
    const Fb = (0, Qk.G)(GF.Condenser, GF.Condenser.fluidMade),
      Bb = .05;
    class Rb extends OX {}

    function tb(kk) {
      return va(kk, "")
    }

    function ab(kk, Fk, Bk) {
      return kk(Fk ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: Bk
      })
    }

    function Xb(kk, Fk, Bk, Rk) {
      return Bk <= Bb && Rk <= Bb ? null : Rk <= Bb || Bk <= Bb ? ab(kk, Fk, Rk <= Bb ? va(Bk, "+") : va(Rk, "\u2212")) : kk(Fk ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: tb(Bk),
        used: tb(Rk)
      })
    }

    function bb(kk, Fk) {
      return Math.min(100, 100 * kk / Math.max(1, Fk))
    }

    function wb(kk) {
      let {
        stored: Fk,
        cap: Bk,
        netPerS: Rk,
        rates: tk,
        cryo: ak
      } = kk;
      const {
        t: Xk
      } = (0, Ht.x)(), bk = function(kk, Fk, Bk, Rk) {
        return Bk <= 0 ? kk("buildAFactory2Game:waterNoStorage") : Fk >= Bk ? kk("buildAFactory2Game:powerFull") : Rk > Bb ? kk("buildAFactory2Game:powerFullIn", {
          time: oa(kk, (Bk - Fk) / Rk)
        }) : Rk < -.05 ? Fk <= 0 ? kk("buildAFactory2Game:waterEmpty") : kk("buildAFactory2Game:powerEmptyIn", {
          time: oa(kk, Fk / -Rk)
        }) : kk("buildAFactory2Game:powerSteady")
      }(Xk, Fk, Bk, Rk), wk = Bk > 0 && Fk < Bk && Math.abs(Rk) <= Bb, dk = Xk(ak ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), sk = null !== tk ? `${tk} \xb7 ${bk}` : wk ? dk : `${dk} \xb7 ${bk}`;
      return (0, Sa.jsxs)(Sa.Fragment, {
        children: [(0, Sa.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Sa.jsx)("div", {
            style: {
              width: `${bb(Fk,Bk)}%`
            }
          })
        }), (0, Sa.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Sa.jsx)("span", {
            children: Bk > 0 && Xk("buildAFactory2Game:powerStored", {
              stored: (0, Qk.S)(Fk),
              cap: (0, Qk.S)(Bk)
            })
          }), (0, Sa.jsx)("span", {
            className: Ot()("Baf2WaterNet", {
              Draining: Rk < -.05
            }),
            children: sk
          })]
        })]
      })
    }

    function db(kk) {
      let {
        water: Fk,
        at: Bk,
        side: Rk = null
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)(), ak = qX(), [Xk, bk, wk] = Fk;
      return (0, Sa.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Sa.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: tk(null === Rk ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Rk}`)
          }), (0, Sa.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              ak.send(`${Qk.z} ${Bk[0]} ${Bk[1]} ${Bk[2]}${"cryoOut"===Rk?" cryo":""}`)
            },
            children: tk("buildAFactory2Game:waterDetails")
          })]
        }), (0, Sa.jsx)(wb, {
          stored: Xk,
          cap: bk,
          netPerS: wk,
          rates: ab(tk, "cryoOut" === Rk, va(Math.abs(wk), wk < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Rk
        })]
      })
    }

    function sb(kk, Fk) {
      var Bk, Rk, tk;
      const ak = !0 === Fk.baf2WaterCryo,
        Xk = null !== (Bk = null === (Rk = Fk.baf2WaterMakers.find((kk => kk[0] === (ak ? Qk.d : "Condenser")))) || void 0 === Rk ? void 0 : Rk[1]) && void 0 !== Bk ? Bk : 0,
        bk = [],
        wk = (Fk, Bk, Rk) => {
          Fk > 0 && bk.push(kk(1 === Fk ? Bk : Rk, {
            count: String(Fk)
          }))
        };
      return ak ? wk(Xk, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : wk(Xk, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), wk(null !== (tk = Fk.baf2WaterPipes) && void 0 !== tk ? tk : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), wk(Fk.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), bk.join(" \xb7 ")
    }

    function Vb(kk, Fk) {
      if (!0 === Fk.baf2WaterCryo) return function(kk, Fk) {
        const Bk = GF[Qk.d];
        switch (Fk.baf2WaterThis) {
          case "pipe":
            return {
              text: kk("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: kk("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: kk("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: kk("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: kk("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: kk("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: kk("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var Rk;
            const [tk, ak] = null !== (Rk = Fk.baf2WaterThisRates) && void 0 !== Rk ? Rk : [(0, Qk.G)(Bk, Bk.cryoMade), (0, Qk.G)(Bk, Bk.powerPerOp)];
            return !0 === Fk.baf2WaterDriven ? {
              text: kk("buildAFactory2Game:cryoThisMixerDriven", {
                rate: tb(tk)
              }),
              bad: !1
            } : {
              text: kk("buildAFactory2Game:cryoThisMixer", {
                rate: tb(tk),
                power: tb(ak)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: kk("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(kk, Fk);
      const Bk = !0 === Fk.baf2WaterDriven,
        Rk = GF.Condenser;
      switch (Fk.baf2WaterThis) {
        case "pipe":
          return {
            text: kk("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: kk("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: kk("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: kk("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: kk("buildAFactory2Game:waterThisTank", {
              tank: (0, Qk.S)(Qk.o),
              cap: (0, Qk.S)(Fk.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var tk;
          const [ak, Xk] = null !== (tk = Fk.baf2WaterThisRates) && void 0 !== tk ? tk : [Fb, (0, Qk.G)(Rk, Rk.powerPerOp)];
          return Bk ? {
            text: kk("buildAFactory2Game:waterThisCondenserDriven", {
              rate: tb(ak)
            }),
            bad: !1
          } : {
            text: kk("buildAFactory2Game:waterThisCondenser", {
              rate: tb(ak),
              power: tb(Xk)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: kk("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function Jb(kk, Fk) {
      const Bk = Fk.baf2WaterMakers.some((kk => !0 === kk[5]));
      if (!0 === Fk.baf2WaterCryo) {
        const Rk = Fk.baf2WaterUsedPerS - Fk.baf2WaterMadePerS,
          tk = Bk || Rk <= Bb ? 0 : (0, Qk.C)(Rk);
        return 0 === tk ? null : tk > 1 ? kk("buildAFactory2Game:cryoNextMixers", {
          mixers: String(tk)
        }) : kk("buildAFactory2Game:cryoNextOne")
      }
      const Rk = Bk ? null : function(kk, Fk) {
        const Bk = Fk - kk;
        return Bk <= Bb ? null : Math.ceil(Bk / Fb)
      }(Fk.baf2WaterMadePerS, Fk.baf2WaterUsedPerS);
      return null === Rk ? null : Rk > 1 ? kk("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Rk)
      }) : kk("buildAFactory2Game:waterNextOne")
    }

    function Ab(kk) {
      let {
        item: Fk,
        label: Bk,
        note: Rk,
        value: tk,
        dim: ak,
        bad: Xk
      } = kk;
      return (0, Sa.jsxs)("li", {
        className: Ot()("Baf2WaterRow", {
          Dim: ak,
          Bad: Xk
        }),
        children: [(0, Sa.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Sa.jsx)(Mt.e, {
            itemName: Fk,
            amount: 0
          })
        }), (0, Sa.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Sa.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: Bk
          }), Rk && (0, Sa.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Rk
          })]
        }), (0, Sa.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: tk
        })]
      })
    }

    function eb(kk) {
      return kb.m[kk] ? kk : "Reactor Port"
    }

    function yb(kk) {
      let {
        message: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)(), Rk = !0 === Fk.baf2WaterCryo, tk = (kk, Fk) => ab(Bk, Rk, va(kk, Fk));
      return (0, Sa.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Sa.jsxs)("section", {
          children: [(0, Sa.jsxs)("h3", {
            children: [Bk("buildAFactory2Game:waterMakes"), (0, Sa.jsx)("span", {
              children: tk(Fk.baf2WaterMadePerS, "+")
            })]
          }), (0, Sa.jsxs)("ul", {
            children: [0 === Fk.baf2WaterMakers.length && (0, Sa.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Bk(Rk ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), Fk.baf2WaterMakers.map((kk => {
              let [Fk, Rk, ak, Xk, bk, wk] = kk;
              const dk = Bk("buildAFactory2Game:powerRunning", {
                amount: String(ak)
              });
              let sk = bk > 0 ? Bk("buildAFactory2Game:waterMakerPower", {
                running: dk,
                power: tb(bk)
              }) : dk;
              return wk && (sk = Bk(0 === ak && Xk <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Sa.jsx)(Ab, {
                item: Fk,
                label: `${aa(Bk,Fk)} \xd7${Rk}`,
                note: sk,
                value: ak > 0 || wk && Xk > 0 ? tk(Xk, "+") : Bk("buildAFactory2Game:powerIdle"),
                dim: 0 === ak && !wk,
                bad: wk
              }, Fk)
            }))]
          })]
        }), (0, Sa.jsxs)("section", {
          children: [(0, Sa.jsxs)("h3", {
            children: [Bk("buildAFactory2Game:waterUses"), (0, Sa.jsx)("span", {
              children: tk(Fk.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Sa.jsxs)("ul", {
            children: [0 === Fk.baf2WaterUsers.length && (0, Sa.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Bk(Rk ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), Fk.baf2WaterUsers.map((kk => {
              let [Fk, Rk, ak, Xk] = kk;
              const bk = kb.m[Fk] ? aa(Bk, Fk) : Fk;
              return (0, Sa.jsx)(Ab, {
                item: eb(Fk),
                label: Rk > 1 ? `${bk} \xd7${Rk}` : bk,
                note: Xk ? Bk("buildAFactory2Game:waterPortFirst") : void 0,
                value: ak > 0 ? tk(ak, "\u2212") : Bk("buildAFactory2Game:powerIdle"),
                dim: 0 === ak
              }, Fk)
            }))]
          })]
        })]
      })
    }

    function fb(kk) {
      var Fk, Bk, tk, ak, Xk;
      let {
        store: bk,
        close: wk
      } = kk;
      const {
        t: dk
      } = (0, Ht.x)(), sk = function(kk) {
        const [Fk, Bk] = (0, Rk.useState)((() => kk.get()));
        return (0, Rk.useEffect)((() => (Bk(kk.get()), kk.subscribe((() => {
          Bk(kk.get())
        })))), [kk]), Fk
      }(bk), Vk = null !== (Fk = null === sk || void 0 === sk ? void 0 : sk.baf2WaterStored) && void 0 !== Fk ? Fk : 0, Jk = null !== (Bk = null === sk || void 0 === sk ? void 0 : sk.baf2WaterCap) && void 0 !== Bk ? Bk : 0, Ak = null !== (tk = null === sk || void 0 === sk ? void 0 : sk.baf2WaterMadePerS) && void 0 !== tk ? tk : 0, ek = null !== (ak = null === sk || void 0 === sk ? void 0 : sk.baf2WaterUsedPerS) && void 0 !== ak ? ak : 0, yk = null !== (Xk = null === sk || void 0 === sk ? void 0 : sk.baf2WaterNetPerS) && void 0 !== Xk ? Xk : Ak - ek, fk = sk && Vb(dk, sk), mk = sk && Jb(dk, sk), Wk = !0 === (null === sk || void 0 === sk ? void 0 : sk.baf2WaterCryo);
      return (0, Sa.jsx)(oX.e, {
        close: wk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Sa.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== sk && Jk <= 0 ? (0, Sa.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Sa.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Sa.jsx)(Mt.e, {
                  itemName: Wk ? yB.c : Qk.i,
                  amount: 0
                })
              }), (0, Sa.jsxs)("div", {
                children: [(0, Sa.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: dk(Wk ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), sk && (0, Sa.jsx)("p", {
                  children: sb(dk, sk)
                })]
              })]
            }), (0, Sa.jsx)(LX.k, {
              onClick: wk
            })]
          }), sk && fk && (0, Sa.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Sa.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Sa.jsx)(wb, {
                stored: Vk,
                cap: Jk,
                netPerS: yk,
                cryo: Wk,
                rates: Xb(dk, Wk, Ak, ek)
              })
            }), (0, Sa.jsx)("div", {
              className: Ot()("Baf2WaterThis", {
                Bad: fk.bad
              }),
              children: fk.text
            }), sk.baf2WaterDriven && (0, Sa.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Sa.jsx)(ut.d, {
                name: "bolt"
              }), dk(Wk ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), mk && (0, Sa.jsx)("p", {
              className: "Baf2WaterNext",
              children: mk
            }), (0, Sa.jsx)(yb, {
              message: sk
            })]
          })]
        })
      })
    }
    class mb {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(kk, Fk) {
        const Bk = this.get(kk);
        Bk && null === Fk.opLeftMs && null === Fk.fuelLeftMs && Fk.status === Bk.status ? Fk = {
          ...Fk,
          opLeftMs: Bk.opLeftMs,
          fuelLeftMs: Bk.fuelLeftMs,
          burning: Bk.burning
        } : this.updates++, this.pos = kk, this.view = Fk;
        for (const Rk of this.listeners) Rk()
      }
      get(kk) {
        return null !== this.pos && this.pos[0] === kk[0] && this.pos[1] === kk[1] && this.pos[2] === kk[2] ? this.view : null
      }
      forget(kk) {
        null !== this.get(kk) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
    }

    function Wb(kk, Fk, Bk, Rk) {
      return "noFuel" === Fk && Rk && !aB(GF[kk]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === Fk && !0 === (null === Bk || void 0 === Bk ? void 0 : Bk.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === Fk && !0 === (null === Bk || void 0 === Bk ? void 0 : Bk.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === Fk && !0 === (null === Bk || void 0 === Bk ? void 0 : Bk.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === Fk && !0 === (null === Bk || void 0 === Bk ? void 0 : Bk.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : vb(Fk, Bk) ? "buildAFactory2Game:machineStatus_noInputShort" : function(kk, Fk) {
        const Bk = GF[kk];
        if ("noFuel" === Fk && void 0 !== Bk.fuels) return aB(Bk) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (Bk.mobFarm && ("noInput" === Fk || "badInput" === Fk)) return `buildAFactory2Game:machineStatus_${Fk}MobFarm`;
        if ("outputFull" === Fk && (void 0 !== Bk.table || Bk.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === Fk && xF(Bk)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== Bk.cryoMade && ("noInput" === Fk || "noOutlet" === Fk || "fluidFull" === Fk)) return `buildAFactory2Game:machineStatus_${Fk}Mixer`;
        return `buildAFactory2Game:machineStatus_${Fk}`
      }(kk, Fk)
    }

    function vb(kk, Fk) {
      return "noInput" === kk && null !== Fk && void 0 !== Fk && Fk.input && Fk.inputShort ? {
        input: Fk.input,
        short: Fk.inputShort
      } : null
    }

    function ib(kk) {
      return Et(kk) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== kk.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Yb(kk) {
      const Fk = (0, Gk.Be)(kk);
      return `Baf2Pane Baf2Pane${Fk.charAt(0).toUpperCase()}${Fk.slice(1)}`
    }

    function ob(kk, Fk) {
      const [Bk, tk] = (0, Rk.useState)((() => kk.get(Fk)));
      return (0, Rk.useEffect)((() => {
        tk(kk.get(Fk));
        const Bk = kk.subscribe((() => {
          tk(kk.get(Fk))
        }));
        return () => {
          Bk(), kk.forget(Fk)
        }
      }), [kk, ...Fk]), Bk
    }

    function Lb(kk, Fk, Bk, Rk) {
      const tk = GF[kk],
        ak = Fk && tk.couplable ? CF(tk, Bk) : tk,
        Xk = null !== Rk && BB(ak) ? function(kk, Fk) {
          var Bk;
          return null !== (Bk = null !== Fk && BB(kk) ? wB[Fk] : void 0) && void 0 !== Bk ? Bk : kk.opMs
        }(ak, dB(Rk)) : ak.opMs;
      return Xk === ak.opMs ? ak : {
        ...ak,
        opMs: Xk
      }
    }

    function Ob(kk) {
      let {
        running: Fk,
        opMs: Bk,
        opLeftMs: Rk,
        updateCount: tk
      } = kk;
      return (0, Sa.jsx)("div", {
        className: Ot()("Baf2MachineProgress", {
          Running: Fk
        }),
        children: (0, Sa.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: Bk / 1e3 + "s",
            animationDelay: null === Rk ? void 0 : (Rk - Bk) / 1e3 + "s"
          }
        }, tk)
      })
    }

    function Eb(kk) {
      let {
        running: Fk,
        leftMs: Bk,
        periodMs: Rk,
        updateCount: tk
      } = kk;
      const {
        t: ak
      } = (0, Ht.x)(), Xk = Math.min(Math.max(null !== Bk && void 0 !== Bk ? Bk : 0, 0), Rk), bk = Fk && Xk > 0, wk = ak("buildAFactory2Game:machineBarFuel");
      return (0, Sa.jsx)("div", {
        className: Ot()("Baf2FuelBurn", {
          Draining: bk
        }),
        role: "img",
        title: wk,
        "aria-label": wk,
        children: (0, Sa.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: bk ? {
            animationDuration: Rk / 1e3 + "s",
            animationDelay: (Xk - Rk) / 1e3 + "s"
          } : {
            transform: `scaleY(${Xk/Rk})`
          }
        }, tk)
      })
    }

    function Sb(kk, Fk, Bk) {
      let [Rk, tk] = Bk;
      const ak = 1 !== Rk ? Nt(Fk) : null;
      return {
        amount: Rk,
        have: tk,
        item: kk(ak || ta(Fk))
      }
    }

    function Nb(kk) {
      return BB(kk) ? "buildAFactory2Game:machineBarMining" : RB(kk) ? "buildAFactory2Game:machineBarCutting" : void 0 !== kk.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Hb(kk) {
      var Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, vk;
      let {
        kind: ik,
        xa: Yk,
        store: Lk,
        power: Ok,
        renderSlot: Ek
      } = kk;
      const {
        t: Sk
      } = (0, Ht.x)(), Nk = ob(Lk, Yk), Hk = GF[ik], uk = null !== (Fk = null === Nk || void 0 === Nk ? void 0 : Nk.coupled) && void 0 !== Fk && Fk, Mk = null !== (Bk = null === Nk || void 0 === Nk ? void 0 : Nk.couplerLevel) && void 0 !== Bk ? Bk : 1, gk = Lb(ik, uk, Mk, null !== (Rk = null === Nk || void 0 === Nk || null === (tk = Nk.dug) || void 0 === tk ? void 0 : tk.item) && void 0 !== Rk ? Rk : null), Uk = null !== (ak = null === Nk || void 0 === Nk ? void 0 : Nk.status) && void 0 !== ak ? ak : null, ck = null !== (Xk = null === Nk || void 0 === Nk ? void 0 : Nk.power) && void 0 !== Xk ? Xk : null, Gk = null !== (bk = null === Nk || void 0 === Nk ? void 0 : Nk.opLeftMs) && void 0 !== bk ? bk : null, Tk = null !== (wk = null === Nk || void 0 === Nk ? void 0 : Nk.dug) && void 0 !== wk ? wk : null, rk = null !== Tk && BB(Hk) ? wB[null !== (dk = dB(Tk.item)) && void 0 !== dk ? dk : ""] : void 0, Dk = void 0 === rk ? null : 6e4 / rk, zk = null !== (sk = null === Nk || void 0 === Nk ? void 0 : Nk.powerCap) && void 0 !== sk ? sk : 4e3, Pk = null !== (Vk = null === Nk || void 0 === Nk ? void 0 : Nk.tier) && void 0 !== Vk ? Vk : null, hk = void 0 !== gk.powerMade, qk = null !== Hk.fuelSlot ? Ek(Hk.fuelSlot) : null, Ck = qF(Hk), Zk = !uk && !0 === (null === Nk || void 0 === Nk ? void 0 : Nk.fuelFed), Kk = !uk && !0 === (null === Nk || void 0 === Nk ? void 0 : Nk.fuelFeeds), xk = null !== Hk.fuelSlot && !uk, jk = null !== (Jk = null === Nk || void 0 === Nk ? void 0 : Nk.fuelLeftMs) && void 0 !== Jk ? Jk : null, lk = function(kk, Fk, Bk) {
        var Rk;
        const tk = null === Fk ? void 0 : XB[Fk];
        return Math.max(null !== (Rk = null !== tk && void 0 !== tk ? tk : Bk) && void 0 !== Rk ? Rk : 0, kk.opMs)
      }(gk, null !== (Ak = null === Nk || void 0 === Nk ? void 0 : Nk.burning) && void 0 !== Ak ? Ak : null, jk), nk = null !== (ek = null === Nk || void 0 === Nk ? void 0 : Nk.fuelKeep) && void 0 !== ek ? ek : null, Ik = null === Uk ? null : Wb(ik, Uk, Nk, Zk), Qk = null === Uk ? null : vb(Uk, Nk);
      return (0, Sa.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Sa.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Sk(ta(ik))
          }), Tk && (0, Sa.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [Sk("Tree Cutter" === ik ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Sa.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Sa.jsx)(Mt.e, {
                itemName: Tk.item,
                amount: 0
              })
            }), (0, Sa.jsx)(gt.d, {
              text: Tk.name
            })]
          }), null !== Dk && (0, Sa.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: Sk("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Dk)
            })
          }), (null === Nk || void 0 === Nk ? void 0 : Nk.field) && (0, Sa.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Sa.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Sa.jsx)(Mt.e, {
                itemName: "Wheat",
                amount: 0
              })
            }), Sk("buildAFactory2Game:machineField", {
              planted: String(Nk.field[0]),
              ripe: String(Nk.field[1])
            })]
          }), (0, Sa.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Sa.jsxs)("div", {
              className: Ot()("Baf2MachineColumn", {
                Baf2Burns: xk
              }),
              children: [null !== gk.inputSlot && (0, Sa.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Sa.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Sk(ib(gk))
                }), Ek(gk.inputSlot)]
              }), null !== Hk.fuelSlot && !uk && (0, Sa.jsxs)("div", {
                className: Ot()("Baf2MachineSlot", {
                  Baf2FuelFed: Zk
                }),
                children: [(0, Sa.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [Zk && (0, Sa.jsx)(ut.d, {
                    name: "fire"
                  }), Sk("buildAFactory2Game:machineFuel")]
                }), (0, Sa.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Sa.jsx)(Eb, {
                    running: "running" === Uk,
                    leftMs: jk,
                    periodMs: lk,
                    updateCount: Lk.updateCount
                  }), qk]
                })]
              }), null !== Hk.fuelSlot && uk && (0, Sa.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Sa.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Sk("buildAFactory2Game:machineFuel")
                }), (0, Sa.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: Sk("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": Sk("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Sa.jsx)(ut.d, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Sa.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Sa.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Sk(Nb(gk))
              }), (0, Sa.jsx)(Ob, {
                running: "running" === Uk,
                opMs: gk.opMs,
                opLeftMs: Gk,
                updateCount: Lk.updateCount
              })]
            }), gk.outputSlots.length > 0 && (0, Sa.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Sa.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Sk("buildAFactory2Game:machineOutput")
              }), (0, Sa.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: gk.outputSlots.map((kk => (0, Sa.jsx)("div", {
                  children: Ek(kk)
                }, kk)))
              })]
            }), null !== ck && hk && (0, Sa.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Sa.jsx)("div", {
                style: {
                  height: 100 * ck / zk + "%"
                }
              })
            })]
          }), xk && null !== nk && (0, Sa.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Sa.jsx)(ut.d, {
              name: "arrows-rotate"
            }), Sk(RB(gk) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(nk)
            })]
          }), (Zk || Kk) && (0, Sa.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Sa.jsx)(ut.d, {
              name: "fire"
            }), Sk(Zk ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Hk.couplable && (0, Sa.jsx)(IX, {
            kind: ik,
            tier: Pk,
            coupled: uk,
            level: Mk,
            slot: Ck === Hk.fuelSlot ? qk : null !== Ck ? Ek(Ck) : null
          }), null !== ck && !hk && !0 === (null === Nk || void 0 === Nk ? void 0 : Nk.reactorPowered) && (0, Sa.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: Sk("buildAFactory2Game:machineReactorPowered")
          }), null !== ck && !hk && !0 !== (null === Nk || void 0 === Nk ? void 0 : Nk.reactorPowered) && (0, Sa.jsx)(MX, {
            stored: ck,
            cap: zk,
            rates: null !== (yk = null === Nk || void 0 === Nk ? void 0 : Nk.powerRates) && void 0 !== yk ? yk : null
          }), (null === Nk || void 0 === Nk ? void 0 : Nk.water) && (0, Sa.jsx)(db, {
            water: Nk.water,
            at: Yk,
            side: Nk.cryo ? "waterIn" : null
          }), (null === Nk || void 0 === Nk ? void 0 : Nk.cryo) && (0, Sa.jsx)(db, {
            water: Nk.cryo,
            at: Yk,
            side: "cryoOut"
          }), null !== Nk && void 0 !== Nk && Nk.inertCoupler ? (0, Sa.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: Sk("buildAFactory2Game:machineStatus_couplerOff", {
              item: aa(Sk, Nk.inertCoupler)
            })
          }) : null !== Ik && (0, Sa.jsx)("div", {
            className: Ot()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Uk
            }),
            children: Sk(Ik, Qk ? Sb(Sk, Qk.input, Qk.short) : void 0)
          })]
        }), (0, Sa.jsxs)("div", {
          className: Ot()("Baf2MachineSide", {
            Baf2SynthSide: xF(Hk)
          }),
          children: [xF(Hk) && (0, Sa.jsx)(lX, {
            xa: Yk,
            taught: null !== (fk = null === Nk || void 0 === Nk ? void 0 : Nk.taught) && void 0 !== fk ? fk : null
          }, Yk.join(",")), hk && (0, Sa.jsx)(UX, {
            kind: ik,
            def: gk,
            xa: Yk,
            power: Ok,
            stored: null !== ck && void 0 !== ck ? ck : 0,
            cap: zk
          }), pk(Hk) && (0, Sa.jsx)(KX, {
            xa: Yk,
            input: null !== (mk = null === Nk || void 0 === Nk ? void 0 : Nk.input) && void 0 !== mk ? mk : null,
            drops: null !== (Wk = null === Nk || void 0 === Nk ? void 0 : Nk.farm) && void 0 !== Wk ? Wk : null,
            seconds: String(gk.opMs / 1e3)
          }), !hk && !pk(Hk) && !xF(Hk) && (0, Sa.jsx)(tX, {
            kind: ik,
            def: gk,
            input: null !== (vk = null === Nk || void 0 === Nk ? void 0 : Nk.input) && void 0 !== vk ? vk : null,
            tier: null !== Pk && void 0 !== Pk ? Pk : 1,
            noSeeds: !0 === (null === Nk || void 0 === Nk ? void 0 : Nk.noSeeds)
          })]
        })]
      })
    }

    function ub(kk, Fk, Bk, Rk) {
      var tk;
      const ak = GF[kk],
        Xk = [ak.inputSlot, ak.fuelSlot, ...null !== (tk = ak.inputSlots) && void 0 !== tk ? tk : []].filter((kk => null !== kk));
      return {
        render: tk => {
          let {
            xa: ak,
            renderSlot: Xk
          } = tk;
          return (0, Sa.jsx)(hX.Provider, {
            value: Rk,
            children: (0, Sa.jsx)(Hb, {
              kind: kk,
              xa: ak,
              store: Fk,
              power: Bk,
              renderSlot: Xk
            })
          })
        },
        quickMoveRange: Xk.length > 0 ? [Math.min(...Xk), Math.max(...Xk) + 1] : [0, 0],
        className: Yb(kk)
      }
    }
    const Mb = "Assembler";

    function gb(kk) {
      var Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk;
      let {
        xa: sk,
        store: Vk,
        renderSlot: Jk
      } = kk;
      const {
        t: Ak
      } = (0, Ht.x)(), ek = ob(Vk, sk), yk = null !== (Fk = null === ek || void 0 === ek ? void 0 : ek.tier) && void 0 !== Fk ? Fk : 1, fk = null !== (Bk = null === ek || void 0 === ek ? void 0 : ek.taught) && void 0 !== Bk ? Bk : null, mk = IF(Mb, {
        coupled: !1,
        taught: fk
      }), Wk = null !== (Rk = mk.bench) && void 0 !== Rk ? Rk : null, vk = null !== (tk = null === ek || void 0 === ek ? void 0 : ek.status) && void 0 !== tk ? tk : null, ik = null !== (ak = null === ek || void 0 === ek ? void 0 : ek.power) && void 0 !== ak ? ak : null, Yk = null !== (Xk = null === ek || void 0 === ek ? void 0 : ek.powerCap) && void 0 !== Xk ? Xk : 4e3;
      return (0, Sa.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Sa.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Ak(ta(Mb))
          }), Wk && (0, Sa.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Ak("buildAFactory2Game:benchMakes"), (0, Sa.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Sa.jsx)(Mt.e, {
                itemName: Wk.output,
                amount: 0
              })
            }), (null === ek || void 0 === ek ? void 0 : ek.taughtName) && (0, Sa.jsx)(gt.d, {
              text: ek.taughtName
            }), Wk.outputAmount > 1 && (0, Sa.jsxs)("span", {
              children: ["\xd7", Wk.outputAmount]
            })]
          }), !Wk && (0, Sa.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Ak("buildAFactory2Game:benchTeachHint")
          }), (0, Sa.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Sa.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (bk = mk.inputSlots) && void 0 !== bk ? bk : []).map(((kk, Fk) => {
                const Bk = null === Wk || void 0 === Wk ? void 0 : Wk.inputs[Fk];
                return (0, Sa.jsxs)("div", {
                  className: Ot()("Baf2BenchInput", {
                    Spare: !Bk
                  }),
                  children: [(0, Sa.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Jk(kk), Bk && (0, Sa.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Sa.jsx)(Mt.e, {
                        itemName: Bk.item,
                        amount: 0
                      })
                    })]
                  }), (0, Sa.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: Bk ? `\xd7${Bk.amount}` : "\xa0"
                  })]
                }, kk)
              }))
            }), (0, Sa.jsx)(Ob, {
              running: "running" === vk,
              opMs: mk.opMs,
              opLeftMs: null !== (wk = null === ek || void 0 === ek ? void 0 : ek.opLeftMs) && void 0 !== wk ? wk : null,
              updateCount: Vk.updateCount
            }), (0, Sa.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Sa.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Ak("buildAFactory2Game:machineOutput")
              }), (0, Sa.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: mk.outputSlots.map((kk => (0, Sa.jsx)("div", {
                  children: Jk(kk)
                }, kk)))
              })]
            })]
          }), null !== ik && (0, Sa.jsx)(MX, {
            stored: ik,
            cap: Yk,
            rates: null !== (dk = null === ek || void 0 === ek ? void 0 : ek.powerRates) && void 0 !== dk ? dk : null
          }), null !== vk && (0, Sa.jsx)("div", {
            className: Ot()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== vk
            }),
            children: Ak(Wb(Mb, vk, ek, !1))
          }), Wk && Wk.inputs.length > 1 && (0, Sa.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Ak("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Sa.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Sa.jsx)(XX, {
            taught: fk,
            tier: yk
          }), Wk && (0, Sa.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Ak("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Ub(kk) {
      var Fk;
      const Bk = null !== (Fk = GF[Mb].inputSlots) && void 0 !== Fk ? Fk : [];
      return {
        render: Fk => {
          let {
            xa: Bk,
            renderSlot: Rk
          } = Fk;
          return (0, Sa.jsx)(gb, {
            xa: Bk,
            store: kk,
            renderSlot: Rk
          })
        },
        quickMoveRange: [Math.min(...Bk), Math.max(...Bk) + 1],
        className: Yb(Mb)
      }
    }
    var cb = Bk(98),
      Gb = Bk(1096),
      Tb = Bk(4002);
    const rb = 600,
      Db = .5,
      zb = 4,
      Pb = 1200,
      hb = 140,
      qb = 100,
      Cb = 32,
      Zb = 16,
      pb = 100.5,
      Kb = 90,
      xb = 1.5,
      jb = 50;

    function lb(kk) {
      switch (gB(kk)) {
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
    const nb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Ib(kk) {
      const Fk = Math.ceil(60 * kk / qb);
      return {
        fuel: Math.max(Cb, Fk),
        waste: Math.max(Zb, Fk)
      }
    }

    function Qb(kk, Fk, Bk) {
      const [Rk, tk, ak] = [kk - 2, Fk - 2, Bk - 2];
      return 2 * (Rk * tk + tk * ak + ak * Rk) * hb
    }

    function kw(kk, Fk, Bk) {
      return Math.max(0, kk - 2) * Math.max(0, Fk - 2) * Math.max(0, Bk - 2)
    }

    function Fw(kk, Fk) {
      const [Bk, Rk, tk] = kk, ak = Bk * Rk * tk, Xk = new Float32Array(ak);
      let bk = 0,
        wk = 0,
        dk = 0,
        sk = 0,
        Vk = 0;
      const Jk = (kk, ak, Xk) => kk < 0 || kk >= Bk || ak < 0 || ak >= Rk || Xk < 0 || Xk >= tk ? 0 : Fk[(ak * tk + Xk) * Bk + kk];
      for (let fk = 0; fk < Rk; fk++)
        for (let kk = 0; kk < tk; kk++)
          for (let Rk = 0; Rk < Bk; Rk++) {
            const ak = (fk * tk + kk) * Bk + Rk,
              Ak = Fk[ak];
            if (1 === Ak) {
              bk++;
              let Fk = 0;
              for (const [Bk, tk, ak] of nb) {
                const Xk = Jk(Rk + Bk, fk + tk, kk + ak);
                1 !== Xk && 2 !== Xk || Fk++
              }
              Xk[ak] = rb * (1 + Db * Math.min(Fk, zb)), sk += Xk[ak]
            } else if (2 === Ak) wk++;
            else if (3 === Ak) {
              dk++;
              nb.some((Fk => {
                let [Bk, tk, ak] = Fk;
                return 1 === Jk(Rk + Bk, fk + tk, kk + ak)
              })) && (Vk += Pb)
            }
          }
      const Ak = Qb(Bk + 2, Rk + 2, tk + 2),
        ek = Math.min(sk, Vk, Ak),
        yk = bk > 0 ? sk * qb / bk : 0;
      return {
        rods: bk,
        graphite: wk,
        channels: dk,
        fuelHeat: sk,
        cooling: Vk,
        size: Ak,
        max: ek,
        vol: ak,
        powerPerUnit: yk,
        pelletsPerMin: yk > 0 ? ek / yk * 60 : 0,
        waterPerS: ek * Qk.n,
        rodHeat: Xk
      }
    }
    const Bw = 0,
      Rw = 1,
      tw = 6,
      aw = 7,
      Xw = 8;

    function bw(kk, Fk) {
      const [Bk, Rk, tk] = kk, ak = new Uint8Array(Bk * Rk * tk), Xk = (kk, ak, Xk) => kk < 0 || kk >= Bk || ak < 0 || ak >= Rk || Xk < 0 || Xk >= tk ? 0 : Fk[(ak * tk + Xk) * Bk + kk];
      for (let bk = 0; bk < Rk; bk++)
        for (let kk = 0; kk < tk; kk++)
          for (let Rk = 0; Rk < Bk; Rk++) {
            const wk = (bk * tk + kk) * Bk + Rk,
              dk = Fk[wk];
            if (1 === dk) {
              let Fk = 0;
              for (const [Bk, tk, ak] of nb) {
                const wk = Xk(Rk + Bk, bk + tk, kk + ak);
                Fk += 1 === wk || 2 === wk ? 1 : 0
              }
              ak[wk] = Rw + Math.min(Fk, zb)
            } else if (3 === dk) {
              const Fk = nb.some((Fk => {
                let [Bk, tk, ak] = Fk;
                return 1 === Xk(Rk + Bk, bk + tk, kk + ak)
              }));
              ak[wk] = Fk ? tw : aw
            } else 2 === dk && (ak[wk] = Xw)
          }
      return ak
    }

    function ww(kk) {
      return kk.fuelHeat <= kk.cooling && kk.fuelHeat <= kk.size ? "fuel" : kk.cooling <= kk.size ? "cooling" : "size"
    }
    const dw = Kb;

    function sw(kk, Fk, Bk) {
      return Math.round(kk * Fk * Bk * 25e3 * (1 + .25 * (Math.min(kk, Fk, Bk) - 2)))
    }

    function Vw(kk) {
      return Math.max(0, Math.min(Qk.f, kk))
    }

    function Jw(kk, Fk, Bk) {
      const Rk = Fk * Vw(Bk);
      return kk <= 0 ? 0 : Rk > 0 ? Math.min(200, 100 * kk / Rk) : 200
    }

    function Aw(kk, Fk) {
      const Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? xb : 1;
      return Math.min(kk.fuelHeat * Bk, kk.cooling * Vw(Fk), kk.size * Bk)
    }

    function ew(kk) {
      return 2 + kk / 10
    }
    const yw = "buildAFactory2Game:";

    function fw(kk) {
      var Fk;
      return null !== (Fk = kk.baf2RxMood) && void 0 !== Fk ? Fk : function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const Bk = [
          ["calm", 50],
          ["warm", dw],
          ["hot", pb]
        ];
        for (const [Rk, tk] of Bk)
          if (kk < tk + (Rk === Fk ? 3 : 0)) return Rk;
        return "alarm"
      }(kk.baf2RxHeat)
    }
    const mw = 120;

    function Ww(kk) {
      const Fk = kk.baf2RxState;
      if ("running" === Fk && kk.baf2RxHeat > pb) return {
        label: `${yw}rxState_tooHot`,
        tone: "bad",
        fix: `${yw}rxFix_tooHot`
      };
      switch (Fk) {
        case "running":
          return {
            label: `${yw}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${yw}rxState_idle`, tone: "off", fix: `${yw}rxFix_idle`
          };
        case "scram":
          return {
            label: `${yw}rxState_scram`, tone: "off", fix: kk.baf2RxHeat < jb ? `${yw}rxFix_scramCool` : `${yw}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${yw}rxState_${Fk}`, tone: "off", fix: `${yw}rxFix_${Fk}`
          };
        case "melted":
          return {
            label: `${yw}rxState_melted`, tone: "bad", fix: `${yw}rxFix_melted`
          };
        default:
          return {
            label: `${yw}rxState_${Fk}`, tone: "warn", fix: `${yw}rxFix_${Fk}`
          }
      }
    }

    function vw(kk) {
      const [Fk, Bk, Rk] = kk.baf2RxStats;
      return {
        fuelHeat: Fk,
        cooling: Bk * (kk.baf2RxCryo ? Math.max(1, Vw(kk.baf2RxWater / 100)) : 1),
        size: Rk
      }
    }

    function iw(kk) {
      var Fk;
      const Bk = "idle" === kk.baf2RxState || "running" === kk.baf2RxState && kk.baf2RxHeat <= pb || "scram" === kk.baf2RxState && kk.baf2RxHeat < jb;
      if (0 === (kk.baf2RxFlags & YF) || !kk.baf2RxFormed || !Bk) return null;
      const {
        fuelHeat: Rk,
        cooling: tk,
        size: ak
      } = vw(kk), Xk = Math.min(Rk, tk, ak), bk = ww({
        fuelHeat: Rk,
        cooling: tk,
        size: ak
      }), wk = "cooling" === bk && !0 === kk.baf2RxCryoOpen && !kk.baf2RxCryo, dk = null !== (Fk = kk.baf2RxCells) && void 0 !== Fk ? Fk : "", sk = ("fuel" === bk || "cooling" === bk && !0 === kk.baf2RxCryo) && dk.length > 0 && !dk.includes(String(0)), Vk = wk ? "Cryo" : "scram" === kk.baf2RxState ? "Off" : "";
      return Xk < 12e3 ? {
        key: `${yw}rxGrow_${sk?"full":bk}${Vk}`,
        amount: Xk
      } : null
    }

    function Yw(kk, Fk) {
      return kk[0] === Fk[0] && kk[1] === Fk[1] && kk[2] === Fk[2]
    }

    function ow(kk) {
      return [...kk].sort(((kk, Fk) => Number(Fk[2] < Fk[1]) - Number(kk[2] < kk[1])))
    }

    function Lw(kk, Fk) {
      return Fk.some((Fk => {
        let [Bk, Rk] = Fk;
        return !(Rk <= 0) && ["edge", "cap", "wall", "inside"].some((Fk => Bk === XR(kk, Fk)))
      }))
    }

    function Ow(kk, Fk, Bk) {
      const Rk = kk.baf2RxFuel - kk.baf2RxPu > 0 ? Bk : 0;
      return {
        full: kk.baf2RxWaste > Fk - 3,
        fullInS: Rk > 0 ? Math.max(0, Fk - kk.baf2RxWaste) / Rk : null
      }
    }
    const Ew = {
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

    function Sw(kk) {
      return Nw[kk]
    }
    const Nw = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Hw(kk) {
      let [Fk, Bk, Rk] = kk;
      return Math.ceil(Qb(Fk, Bk, Rk) * Qk.n)
    }

    function uw(kk, Fk) {
      return "battery" === kk ? Fk[0] * Fk[1] * Fk[2] : function(kk) {
        let [Fk, Bk, Rk] = kk;
        return Fk * Bk * Rk - Math.max(0, Fk - 2) * Math.max(0, Bk - 2) * Math.max(0, Rk - 2)
      }(Fk) - 1
    }

    function Mw(kk) {
      const Fk = Math.max(0, kk);
      if (Fk < 10) return String(Math.round(10 * Fk) / 10);
      if (Fk < 1e4) return Math.round(Fk).toLocaleString("en-US");
      if (Fk < 1e6) return `${Fk<1e5?(Math.floor(Fk/100)/10).toFixed(1):Math.floor(Fk/1e3)}k`;
      const Bk = Fk / 1e6;
      return `${Bk<10?(Math.floor(100*Bk)/100).toFixed(2):Bk<100?(Math.floor(10*Bk)/10).toFixed(1):Math.floor(Bk)}M`
    }

    function gw(kk) {
      return kk <= 0 ? "0" : kk >= 10 ? String(Math.round(kk)) : kk.toFixed(kk >= 1 ? 1 : 2)
    }

    function Uw(kk) {
      const Fk = QB(kk, 0),
        Bk = QB(kk, jB(kk) - 1);
      return {
        lo: [Math.min(Fk[0], Bk[0]), Math.min(Fk[1], Bk[1]), Math.min(Fk[2], Bk[2])],
        hi: [Math.max(Fk[0], Bk[0]) + 1, Math.max(Fk[1], Bk[1]) + 1, Math.max(Fk[2], Bk[2]) + 1]
      }
    }

    function Gw(kk, Fk, Bk) {
      const Rk = [Fk[0] - kk[0], Fk[1] - kk[1], Fk[2] - kk[2]],
        tk = [(kk[0] + Fk[0]) / 2, (kk[1] + Fk[1]) / 2, (kk[2] + Fk[2]) / 2],
        ak = [];
      for (let Xk = 0; Xk < 3; Xk++) {
        const bk = (Xk + 1) % 3,
          wk = (Xk + 2) % 3;
        for (const dk of [kk[bk], Fk[bk]])
          for (const sk of [kk[wk], Fk[wk]]) {
            const kk = [0, 0, 0],
              Fk = [Bk, Bk, Bk];
            kk[Xk] = tk[Xk], Fk[Xk] = Rk[Xk] + Bk, kk[bk] = dk, kk[wk] = sk, ak.push([kk, Fk])
          }
      }
      return ak
    }
    const Tw = "buildAFactory2Game:",
      rw = [`${Tw}colNorth`, `${Tw}colEast`, `${Tw}colSouth`, `${Tw}colWest`];

    function Dw(kk, Fk) {
      const [Bk, Rk, tk] = kk.baf2ColAt;
      return `baf2col ${Bk} ${Rk} ${tk} ${Fk}`
    }

    function zw(kk) {
      return function(kk) {
        if (!Number.isFinite(kk)) return "";
        const Fk = Math.max(1, Math.round(kk));
        if (Fk < 60) return `${Fk}s`;
        const Bk = Fk % 60;
        return 0 === Bk ? Fk / 60 + "m" : `${Math.floor(Fk/60)}m ${Bk}s`
      }(function(kk) {
        const Fk = bR.FOCUS_BY_LASERS[Math.max(0, Math.min(4, kk))];
        return Fk > 0 ? bR.NOVA_FOCUS / Fk : 1 / 0
      }(kk))
    }

    function Pw(kk) {
      const Fk = Math.abs(Math.round(kk));
      return Fk < 1e3 ? Math.round(kk).toLocaleString("en-US") : Fk < 1e6 ? `${Fk<1e5?(kk/1e3).toFixed(1).replace(/\.0$/,""):Math.round(kk/1e3)}k` : `${(kk/1e6).toFixed(Fk<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function hw(kk, Fk, Bk) {
      if (AR(Fk) >= 0) {
        const Fk = function(kk, Fk) {
          return kk.find((kk => {
            let {
              focus: Bk
            } = kk;
            return Bk[0] === Fk[0] && Bk[2] === Fk[2] && (Fk[1] === Bk[1] || Fk[1] === Bk[1] - 1)
          }))
        }(kk, Bk);
        if (!Fk) return null;
        const tk = function(kk) {
          let Fk = 0,
            Bk = 0;
          for (let Rk = 0; Rk < 4; Rk++) Fk += kk.laser[Rk] ? 1 : 0, Bk += kk.live[Rk] ? 1 : 0;
          return {
            lasers: Fk,
            live: Bk,
            focusPerS: bR.FOCUS_BY_LASERS[Bk],
            drawPerS: bR.LASER_DRAW * Bk
          }
        }({
          laser: Fk.lasers,
          live: Fk.live
        });
        if (0 === tk.lasers || "noLasers" === Fk.state) return {
          key: `${Tw}lookColNoLasers`
        };
        if (0 === tk.live) return {
          key: `${Tw}lookColOff_blocked`
        };
        if (!(Fk.on && tk.live > 0) && ("running" !== (Rk = Fk.state) && "slowed" !== Rk)) return {
          key: `${Tw}lookColOff_${Fk.state}`
        };
        if (tk.live < tk.lasers) return {
          key: `${Tw}lookColLasersSome`,
          params: {
            lasers: String(tk.lasers),
            live: String(tk.live)
          }
        };
        const ak = Fk.open.filter(Boolean).length;
        return ak < 4 ? {
          key: `${Tw}lookColLasersSpots`,
          params: {
            live: String(tk.live),
            spots: String(ak),
            time: zw(tk.live)
          }
        } : {
          key: `${Tw}lookColLasers`,
          params: {
            live: String(tk.live),
            time: zw(tk.live)
          }
        }
      }
      var Rk;
      if (!eR(Fk)) return null;
      const tk = function(kk, Fk) {
        for (const Bk of kk) {
          const kk = WR(Bk.focus, [Fk[0], Fk[1], Fk[2]]);
          if (kk && kk.Rb === bR.LASER_D && Bk.lasers[kk.dir]) return {
            entry: Bk,
            dir: kk.dir
          }
        }
        return null
      }(kk, Bk);
      if (!tk) return {
        key: `${Tw}lookLaserNoCollider`
      };
      const {
        entry: ak,
        dir: Xk
      } = tk;
      return ak.open[Xk] ? ak.live[Xk] ? {
        key: ak.on ? `${Tw}lookLaserFiring` : `${Tw}lookLaserReady`
      } : {
        key: `${Tw}lookLaserBlocked`
      } : {
        key: `${Tw}lookLaserClosed`
      }
    }

    function qw(kk, Fk) {
      const Bk = [];
      for (let Rk = 1; Rk < bR.LASER_D; Rk++) kk & 1 << Fk * (bR.LASER_D - 1) + Rk - 1 && Bk.push(Rk);
      return Bk
    }
    const Cw = {
      firing: `${Tw}colSlotFiring`,
      ready: `${Tw}colSlotReady`,
      blocked: `${Tw}colSlotBlocked`,
      empty: `${Tw}colSlotEmpty`,
      closed: `${Tw}colSlotClosed`
    };

    function Zw(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const ak = bt(kk),
        Xk = bt(Fk),
        bk = bt(Bk),
        wk = bk.filter(Boolean).length,
        dk = ak.filter(Boolean).length,
        sk = [0, 1, 2, 3].map((kk => Xk[kk] ? ak[kk] ? bk[kk] ? Rk ? "firing" : "ready" : "blocked" : (kk => qw(tk, kk).length > 0)(kk) ? "blocked" : "empty" : "closed")),
        Vk = sk.indexOf("blocked"),
        Jk = Vk < 0 && dk > 0 ? sk.indexOf("empty") : -1;
      return sk.map(((kk, Fk) => {
        const Bk = Fk === Vk ? {
          key: `${Tw}colSlotClear`
        } : Fk === Jk ? {
          key: `${Tw}colSlotAdd`,
          params: {
            time: zw(Math.min(4, wk + 1))
          }
        } : null;
        return {
          dir: Fk,
          tone: kk,
          title: {
            key: "blocked" !== kk || ak[Fk] ? Cw[kk] : `${Tw}colSlotGap`,
            keys: {
              dir: rw[Fk]
            }
          },
          hint: Bk
        }
      }))
    }

    function pw(kk) {
      var Fk;
      return "noPower" === kk.baf2ColState && kk.baf2ColRxState ? Ww({
        baf2RxState: kk.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (Fk = kk.baf2ColRxHeat) && void 0 !== Fk ? Fk : 0
      }) : null
    }

    function Kw(kk) {
      const Fk = bt(kk.baf2ColSpots).filter(Boolean).length,
        Bk = bt(kk.baf2ColLive);
      let Rk = 0,
        tk = 0;
      return bt(kk.baf2ColLasers).forEach(((kk, Fk) => {
        kk && (Rk++, tk += Bk[Fk] ? 0 : 1)
      })), tk > 0 ? {
        key: `${Tw}colSubSome`,
        params: {
          blocked: String(tk),
          lasers: String(Rk)
        }
      } : Fk < 4 ? {
        key: `${Tw}colSubSpots`,
        params: {
          lasers: String(Rk),
          spots: String(Fk)
        }
      } : {
        key: `${Tw}colSub`,
        params: {
          lasers: String(Rk)
        }
      }
    }

    function xw(kk) {
      const Fk = pw(kk);
      if ("idle" === kk.baf2ColRxState && Fk) return {
        key: `${Tw}colState_noPowerIdle`
      };
      if (Fk) return {
        key: `${Tw}colState_noPowerReactor`,
        keys: {
          state: Fk.label
        }
      };
      if ("noInput" !== kk.baf2ColState) return {
        key: `${Tw}colState_${kk.baf2ColState}`
      };
      const Bk = String(Math.max(0, bR.NOVA_SA - kk.baf2ColSa)),
        Rk = String(Math.max(0, bR.NOVA_GD - kk.baf2ColGd));
      return "0" !== Bk && "0" !== Rk ? {
        key: `${Tw}colState_noInput`,
        params: {
          sa: Bk,
          gd: Rk
        }
      } : "0" !== Bk ? {
        key: `${Tw}colState_noStarAlloy`,
        params: {
          sa: Bk
        }
      } : "0" !== Rk ? {
        key: `${Tw}colState_noGlowDust`,
        params: {
          gd: Rk
        }
      } : {
        key: `${Tw}colState_running`
      }
    }

    function jw(kk) {
      return kk.baf2ColP < 0 ? `${Tw}colNext` : function(kk) {
        const Fk = kk.baf2ColState;
        return kk.baf2ColP >= 0 && ("blocked" === Fk || "noLasers" === Fk || "noPower" === Fk)
      }(kk) ? `${Tw}colStalled` : null === lw(kk) ? `${Tw}colMaking` : `${Tw}colNovaIn`
    }

    function lw(kk) {
      if (kk.baf2ColP < 0 || kk.baf2ColWant <= 0) return null;
      const Fk = kk.baf2ColFocusPerS * Math.min(1, kk.baf2ColDraw / kk.baf2ColWant);
      return Fk > 0 ? Math.max(0, bR.NOVA_FOCUS - kk.baf2ColP) / Fk : null
    }

    function nw(kk, Fk) {
      const Bk = [];
      for (let Rk = 1; Rk <= 3; Rk++) {
        const tk = [kk[0], kk[1] - Rk, kk[2]];
        if (!Fk(tk)) return Bk;
        Bk.push(tk)
      }
      return []
    }

    function Iw(kk, Fk) {
      const Bk = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Rk = 0; Rk < 4; Rk++) {
        const tk = Rk,
          ak = mR(kk.focus, tk, bR.LASER_D);
        if (kk.lasers[Rk] || !kk.open[Rk] || !Fk(ak)) continue;
        const Xk = [];
        for (let Bk = 1; Bk < bR.LASER_D; Bk++) {
          const Rk = mR(kk.focus, tk, Bk);
          Fk(Rk) || Xk.push(Rk)
        }
        Bk.supports.push(...nw(ak, Fk)), 0 === Xk.length ? Bk.free.push(ak) : (Bk.blocked.push(ak), Bk.gaps.push(...Xk))
      }
      return Bk
    }
    const Qw = bR.LASER_D - .25,
      kd = 4,
      Fd = 2,
      Bd = 16;
    const Rd = {
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
        blendMode: Tb.d.Standard,
        soft: !0
      },
      td = {
        green: Rd,
        pink: {
          ...Rd,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function ad(kk, Fk) {
      const Bk = {
        ...Fk.params
      };
      for (const [tk, ak] of Object.entries(null !== (Rk = Fk.keys) && void 0 !== Rk ? Rk : {})) {
        var Rk;
        Bk[tk] = kk(ak)
      }
      return Bk
    }
    const Xd = "buildAFactory2Game:",
      bd = 2 * bR.LASER_D + 1,
      wd = bR.LASER_D;

    function dd(kk) {
      return kk(`${Xd}colFocusTip`, {
        need: Pw(bR.NOVA_FOCUS)
      })
    }

    function sd(kk, Fk) {
      return kk(Fk.key, ad(kk, Fk))
    }

    function Vd(kk) {
      const Fk = kk.getStatus();
      return {
        status: Fk,
        entry: Fk ? kk.entryAtRoot(Fk.baf2ColAt) : void 0
      }
    }

    function Jd(kk, Fk) {
      return {
        left: 100 * (wd + kk) / bd + "%",
        top: 100 * (wd + Fk) / bd + "%"
      }
    }

    function Ad(kk) {
      let {
        status: Fk,
        entry: Bk
      } = kk;
      const Rk = bt(Fk.baf2ColLasers),
        tk = bt(Fk.baf2ColSpots),
        ak = bt(Fk.baf2ColLive),
        Xk = !0 === (null === Bk || void 0 === Bk ? void 0 : Bk.on),
        bk = bR.LASER_D,
        wk = [];
      for (let Ak = 0; Ak < 4; Ak++) {
        const [kk, , Fk] = fR[Ak];
        if (ak[Ak]) {
          const Bk = 100 * (bk - 1) / bd,
            Rk = kk + Fk > 0 ? 100 * (wd + 1) / bd : 100 * (wd - (bk - 1)) / bd,
            tk = 100 * (wd + .35) / bd,
            ak = 30 / bd,
            dk = 0 !== kk ? {
              left: `${Rk}%`,
              width: `${Bk}%`,
              top: `${tk}%`,
              height: `${ak}%`
            } : {
              top: `${Rk}%`,
              height: `${Bk}%`,
              left: `${tk}%`,
              width: `${ak}%`
            };
          wk.push((0, Sa.jsx)("i", {
            className: Ot()("Baf2ColDiagramBeam", {
              Off: !Xk
            }),
            style: dk
          }, `beam${Ak}`))
        }
        const Bk = Rk[Ak] ? "Baf2ColDiagramLaser" : tk[Ak] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        wk.push((0, Sa.jsx)("i", {
          className: Bk,
          style: Jd(kk * bk, Fk * bk)
        }, `spot${Ak}`))
      }
      for (let Ak = 0; Ak < 4; Ak++) {
        if (Rk[Ak] || !tk[Ak]) continue;
        const [kk, , Bk] = fR[Ak];
        for (const Rk of qw(null !== (dk = Fk.baf2ColGaps) && void 0 !== dk ? dk : 0, Ak)) {
          var dk;
          wk.push((0, Sa.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Jd(kk * Rk, Bk * Rk)
          }, `gap${Ak},${Rk}`))
        }
      }
      for (const [Ak, , ek] of null !== (sk = null === Bk || void 0 === Bk ? void 0 : Bk.blockers) && void 0 !== sk ? sk : []) {
        var sk, Vk, Jk;
        const kk = Ak - (null !== (Vk = null === Bk || void 0 === Bk ? void 0 : Bk.focus[0]) && void 0 !== Vk ? Vk : 0),
          Fk = ek - (null !== (Jk = null === Bk || void 0 === Bk ? void 0 : Bk.focus[2]) && void 0 !== Jk ? Jk : 0);
        wk.push((0, Sa.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Jd(kk, Fk)
        }, `block${kk},${Fk}`))
      }
      return (0, Sa.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [wk, (0, Sa.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function ed(kk) {
      let {
        status: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)(), Rk = bt(Fk.baf2ColLive).filter(Boolean).length;
      return (0, Sa.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: dd(Bk),
          children: Bk(`${Xd}colLadder`)
        }), (0, Sa.jsx)("ul", {
          children: [1, 2, 3, 4].map((kk => (0, Sa.jsx)("li", {
            className: Ot()({
              On: kk === Rk
            }),
            children: Bk(`${Xd}colLadderChip`, {
              lasers: String(kk),
              time: zw(kk)
            })
          }, kk)))
        })]
      })
    }

    function yd(kk) {
      let {
        item: Fk,
        Hb: Bk,
        need: Rk,
        cap: tk
      } = kk;
      const {
        t: ak
      } = (0, Ht.x)(), Xk = Math.min(Bk, Rk);
      return (0, Sa.jsxs)("li", {
        className: Ot()("Baf2ColTile", {
          Short: Bk < Rk
        }),
        children: [(0, Sa.jsx)(fd, {
          item: Fk
        }), (0, Sa.jsx)("b", {
          className: "Baf2ColTileValue",
          children: ak(`${Xd}colOutOf`, {
            amount: String(Xk),
            cap: String(Rk)
          })
        }), (0, Sa.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Sa.jsx)("i", {
            style: {
              width: 100 * Xk / Rk + "%"
            }
          })
        }), Bk > Rk && (0, Sa.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: ak(`${Xd}colIntakeHeld`, {
            amount: String(Bk),
            cap: String(tk)
          })
        })]
      })
    }

    function fd(kk) {
      let {
        item: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)();
      return (0, Sa.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Sa.jsx)(Mt.e, {
            itemName: Fk,
            amount: 0
          })
        }), (0, Sa.jsx)("span", {
          className: "Baf2ColTileName",
          children: aa(Bk, Fk)
        })]
      })
    }

    function md(kk) {
      switch (kk.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function Wd(kk) {
      var Fk, Bk, tk;
      let {
        store: ak,
        close: Xk
      } = kk;
      const {
        t: bk
      } = (0, Ht.x)(), wk = qX(), {
        status: dk,
        entry: sk
      } = function(kk) {
        const [Fk, Bk] = (0, Rk.useState)((() => Vd(kk)));
        return (0, Rk.useEffect)((() => (Bk(Vd(kk)), kk.subscribe((() => {
          Bk(Vd(kk))
        })))), [kk]), Fk
      }(ak), [Vk, Jk] = (0, Rk.useState)(null), Ak = null === dk || void 0 === dk ? void 0 : dk.baf2ColHold;
      (0, Rk.useEffect)((() => {
        Jk(null)
      }), [Ak]);
      const ek = (0, Rk.useRef)({
          p: -1,
          n: 0
        }),
        yk = null !== (Fk = null === dk || void 0 === dk ? void 0 : dk.baf2ColP) && void 0 !== Fk ? Fk : -1;
      yk < ek.current.p && ek.current.n++, ek.current.p = yk;
      const fk = (0, Rk.useRef)(null),
        [mk] = (0, Rk.useState)((() => {
          return (kk = ak.heldAtOpen()) === sR || kk === VR ? {
            key: `${Tw}colBeltItIn`,
            item: kk
          } : null;
          var kk
        }));
      if (!dk) return null;
      const Wk = dk.baf2ColMember,
        vk = dk.baf2ColP >= 0,
        ik = function(kk, Fk) {
          if (kk.baf2ColP >= 0 && kk.baf2ColDraw > 0) {
            const Fk = kk.baf2ColWant > 0 ? Math.min(1, kk.baf2ColDraw / kk.baf2ColWant) : 0;
            return {
              focus: kk.baf2ColFocusPerS * Fk,
              draw: kk.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === kk.baf2ColState && Fk && Fk.draw > 0 ? {
            ...Fk,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(dk, fk.current);
      fk.current = ik.draw > 0 ? ik : null;
      const Yk = "slowed" === dk.baf2ColState || "noPower" === dk.baf2ColState,
        Lk = lw(dk),
        Ok = null !== Vk && void 0 !== Vk ? Vk : dk.baf2ColHold,
        Ek = function(kk) {
          var Fk, Bk;
          return "idle" === kk.baf2ColRxState ? null : null !== (Fk = null === (Bk = pw(kk)) || void 0 === Bk ? void 0 : Bk.fix) && void 0 !== Fk ? Fk : null
        }(dk),
        Sk = null === Ek && null === mk ? function(kk) {
          var Fk;
          const Bk = kk.baf2ColSentTo;
          if (!Bk) return null;
          const Rk = null !== (Fk = kk.baf2ColSentHeld) && void 0 !== Fk ? Fk : null;
          return {
            key: null === Rk ? `${Tw}colNovaSentToMachine` : `${Tw}colNovaSentTo`,
            target: Bk,
            Hb: Rk
          }
        }(dk) : null,
        Nk = vk ? bk(`${Xd}colFocusOf`, {
          focus: Pw(dk.baf2ColP),
          need: Pw(bR.NOVA_FOCUS)
        }) : null;
      return (0, Sa.jsx)(oX.e, {
        close: Xk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Sa.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Sa.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Sa.jsx)(Mt.e, {
                  itemName: wR,
                  amount: 0
                })
              }), (0, Sa.jsxs)("div", {
                children: [(0, Sa.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: aa(bk, wR)
                }), (0, Sa.jsx)("p", {
                  children: sd(bk, Kw(dk))
                })]
              })]
            }), (0, Sa.jsx)(LX.k, {
              onClick: Xk
            })]
          }), (0, Sa.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Sa.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Sa.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Sa.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: bk(jw(dk), {
                    time: null === Lk ? "" : oa(bk, Lk)
                  })
                }), (0, Sa.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Sa.jsx)("i", {
                    style: {
                      width: (vk ? 100 * dk.baf2ColP / bR.NOVA_FOCUS : 0) + "%"
                    }
                  }, ek.current.n)
                }), (0, Sa.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Sa.jsxs)("span", {
                    title: dd(bk),
                    children: [(0, Sa.jsx)("b", {
                      children: Pw(ik.focus)
                    }), " ", bk(`${Xd}colFocusPerS`)]
                  }), (0, Sa.jsxs)("span", {
                    className: Ot()("Baf2ColDraw", {
                      Short: Yk
                    }),
                    children: [(0, Sa.jsx)(ut.d, {
                      name: "bolt"
                    }), Yk ? bk(`${Xd}colDrawOf`, {
                      draw: Pw(dk.baf2ColDraw),
                      want: Pw(dk.baf2ColWant)
                    }) : bk(`${Xd}colPowerPerS`, {
                      rate: Pw(ik.draw)
                    })]
                  }), null !== Nk && (0, Sa.jsx)("span", {
                    className: "Soft",
                    children: Nk
                  })]
                })]
              }), (0, Sa.jsx)("p", {
                className: Ot()("Baf2ColState", md(dk)),
                children: sd(bk, xw(dk))
              }), null !== Ek && (0, Sa.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bk(Ek)
              }), null === Ek && null !== mk && (0, Sa.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bk(mk.key, {
                  item: aa(bk, mk.item)
                })
              }), Sk && (0, Sa.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bk(Sk.key, {
                  target: aa(bk, Sk.target),
                  amount: String(null !== (Bk = Sk.Hb) && void 0 !== Bk ? Bk : 0)
                })
              }), (0, Sa.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Sa.jsx)(yd, {
                  item: sR,
                  Hb: dk.baf2ColSa,
                  need: bR.NOVA_SA,
                  cap: bR.SA_CAP
                }), (0, Sa.jsx)(yd, {
                  item: VR,
                  Hb: dk.baf2ColGd,
                  need: bR.NOVA_GD,
                  cap: bR.GD_CAP
                }), (0, Sa.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Sa.jsx)(fd, {
                    item: "Nova Matter"
                  }), (0, Sa.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: bk(`${Xd}colNovaHeld`, {
                      amount: String(dk.baf2ColOut),
                      cap: String(bR.OUT_CAP)
                    })
                  }), Wk && (0, Sa.jsx)(LX.o, {
                    className: "Baf2ColTake",
                    disabled: 0 === dk.baf2ColOut,
                    onClick: () => {
                      wk.send(Dw(dk, "take"))
                    },
                    children: bk(`${Xd}colTake`)
                  })]
                })]
              }), Wk && (0, Sa.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Ok,
                className: Ot()("Baf2ColHold", {
                  On: Ok
                }),
                onClick: kk => {
                  kk.detail > 0 && kk.currentTarget.blur(), Jk(!Ok), wk.send(Dw(dk, "hold " + (Ok ? 0 : 1)))
                },
                children: [(0, Sa.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Sa.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Sa.jsx)("b", {
                    children: bk(`${Xd}colHold`)
                  }), (0, Sa.jsx)("span", {
                    children: bk(`${Xd}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Sa.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Sa.jsx)(Ad, {
                status: dk,
                entry: sk
              }), (0, Sa.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Zw(dk.baf2ColLasers, dk.baf2ColSpots, dk.baf2ColLive, ik.beamsOn, null !== (tk = dk.baf2ColGaps) && void 0 !== tk ? tk : 0).map((kk => (0, Sa.jsxs)("li", {
                  className: kk.tone,
                  children: [(0, Sa.jsx)("b", {
                    children: sd(bk, kk.title)
                  }), null !== kk.hint && (0, Sa.jsx)("span", {
                    children: sd(bk, kk.hint)
                  })]
                }, kk.dir)))
              }), (0, Sa.jsx)(ed, {
                status: dk
              })]
            })]
          })]
        })
      })
    }
    const vd = "buildAFactory2Game:",
      Yd = 36e5,
      od = 864e5;

    function Ld(kk, Fk, Bk) {
      return Math.max(0, Math.ceil((kk + Fk - Math.max(Bk, kk)) / 1e3))
    }

    function Od(kk) {
      return kk.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function Ed(kk) {
      return "Homestead" === kk
    }

    function Sd(kk) {
      return function(kk) {
        let Fk = 0;
        for (const Bk of kk) {
          const kk = /^Island ([1-9]\d{0,5})$/.exec(Bk);
          kk && (Fk = Math.max(Fk, Number(kk[1])))
        }
        return `Island ${Fk+1}`
      }(kk.map((kk => kk.baf2IslandName)))
    }

    function Nd(kk, Fk) {
      return function(kk) {
        return `${vd}islandsBlocked${kk[0].toUpperCase()}${kk.slice(1)}`
      }("degraded" === kk && 0 === Fk ? "stuck" : kk)
    }

    function Hd(kk) {
      return kk.filter((kk => {
        var Fk;
        return !kk.baf2IslandActive && void 0 === kk.baf2IslandUnreadable && void 0 === (null === (Fk = kk.baf2IslandCoop) || void 0 === Fk ? void 0 : Fk.baf2CoopState)
      })).length
    }

    function ud(kk) {
      return "coopMoving" === kk || "coopUnreachable" === kk
    }

    function Md(kk, Fk) {
      const Bk = Fk > 0;
      return {
        change: null === kk && !Bk,
        switch: (null === kk || "degraded" === kk || ud(kk)) && !Bk,
        rename: "loading" !== kk && "degraded" !== kk && "stuck" !== kk
      }
    }

    function gd(kk, Fk) {
      return void 0 === kk || "corrupt" === kk && Fk
    }
    const Ud = GX;

    function cd(kk, Fk, Bk) {
      if (null !== kk && void 0 !== kk && kk.untilGone) {
        var Rk;
        return !("dismiss" === kk.untilGone && void 0 === (null === (Rk = Fk.baf2IslandCoop) || void 0 === Rk ? void 0 : Rk.baf2CoopState)) && Bk - kk.atMs < 32500
      }
      return void 0 !== kk && Bk - kk.atMs < Ud && Fk.baf2IslandName === kk.from
    }
    const Gd = GX;

    function Td(kk) {
      return "core" === (null === kk || void 0 === kk ? void 0 : kk.kind) ? kk.core : "islands" === (null === kk || void 0 === kk ? void 0 : kk.kind) ? kk.backToCore : void 0
    }

    function rd(kk) {
      return `\0${kk}\0`
    }

    function Dd(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Rk = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const ak of Object.keys(Bk)) Rk[ak] = rd(ak);
      let tk = Object.keys(Rk).length > 0 ? kk(Fk, Rk) : kk(Fk);
      for (const [ak, Xk] of Object.entries(Bk)) tk = tk.split(rd(ak)).join(Xk);
      return tk
    }

    function zd(kk, Fk) {
      return kk ? Fk ? "enabled" : "disabled" : "hidden"
    }
    const Pd = {
      removed: `${vd}islandsCoopRemoved`,
      deleted: `${vd}islandsCoopDeleted`,
      notReady: `${vd}islandsCoopNotReady`,
      gone: `${vd}islandsCoopGone`
    };

    function hd(kk) {
      var Fk;
      return "member" !== (null === (Fk = kk.baf2IslandCoop) || void 0 === Fk ? void 0 : Fk.baf2CoopRole) && "newer" !== kk.baf2IslandUnreadable
    }

    function qd(kk, Fk, Bk, Rk, tk, ak) {
      const Xk = kk.baf2IslandActive,
        bk = kk.baf2IslandUnreadable,
        wk = kk.baf2IslandCoop,
        dk = function(kk, Fk, Bk) {
          return {
            switch: kk.switch && void 0 === Fk,
            delete: kk.change && gd(Fk, Bk)
          }
        }(Fk, bk, Rk),
        sk = Xk && void 0 !== wk && void 0 === wk.baf2CoopState && "coopUnreachable" === ak,
        Vk = {
          switch: zd((!Xk || sk) && void 0 === bk, sk || dk.switch),
          switchLabel: sk ? "tryAgain" : "switch",
          rename: zd(!0, Fk.rename),
          delete: zd(!Xk, dk.delete),
          deleteWaits: !Xk && gd(bk, Rk),
          people: zd(void 0 !== kk.baf2IslandInvitable || tk && Xk && void 0 === bk && void 0 === wk, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Jk = !Xk && dk.delete;
      if (void 0 === wk) return Bk ? {
        ...Vk,
        delete: zd(!Xk, !1),
        deleteWaits: !1,
        note: Jk ? {
          key: `${vd}islandsCoopKeepOwn`
        } : null
      } : Vk;
      const Ak = wk.baf2CoopState,
        ek = wk.baf2CoopMembers.length > 1,
        yk = {
          ...Vk,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Ak && "member" === wk.baf2CoopRole) return {
        ...yk,
        dismiss: zd(!0, Fk.rename),
        note: {
          key: Pd[Ak],
          names: {
            owner: wk.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Ak) {
        let kk = {
          key: `${vd}islandsCoopOwnLost`
        };
        return Jk && ek ? kk = {
          key: `${vd}islandsCoopDeleteMembers`
        } : Jk && Bk && (kk = {
          key: `${vd}islandsCoopKeepOwn`
        }), {
          ...yk,
          delete: zd(!Xk, dk.delete && !ek && !Bk),
          deleteWaits: Vk.deleteWaits && !ek && !Bk,
          note: kk
        }
      }
      if ("member" === wk.baf2CoopRole) return {
        ...Vk,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: zd(!0, Xk ? Fk.switch : Fk.rename)
      };
      const fk = wk.baf2CoopManageHere;
      let mk = null;
      var Wk;
      fk || Xk ? Jk && ek ? mk = {
        key: `${vd}islandsCoopDeleteMembers`
      } : Jk && Bk && (mk = {
        key: `${vd}islandsCoopKeepOwn`
      }) : mk = {
        key: null !== (Wk = wk.baf2CoopLeft) && void 0 !== Wk && Wk.length ? `${vd}islandsCoopManageThereClaim` : `${vd}islandsCoopManageThere`
      };
      return {
        ...Vk,
        rename: zd(!0, Fk.rename && fk),
        delete: zd(!Xk, dk.delete && !ek && !Bk),
        deleteWaits: Vk.deleteWaits && !ek && !Bk,
        people: "enabled",
        peopleLabel: "players",
        unshare: zd(fk && Xk && !ek, Fk.change),
        remove: fk,
        note: mk
      }
    }

    function Cd(kk) {
      var Fk;
      const Bk = kk.baf2IslandCoop;
      if ("owner" !== (null === Bk || void 0 === Bk ? void 0 : Bk.baf2CoopRole) || void 0 !== Bk.baf2CoopState || null === (Fk = Bk.baf2CoopLeft) || void 0 === Fk || !Fk.length) return null;
      const Rk = kk.baf2IslandActive && Bk.baf2CoopManageHere;
      return {
        left: Bk.baf2CoopLeft,
        claim: Rk,
        goThere: !Rk && Bk.baf2CoopManageHere
      }
    }

    function Zd(kk) {
      return kk.baf2CoopMembers.length >= kk.baf2CoopMax
    }

    function pd(kk, Fk, Bk) {
      return void 0 !== kk && Fk < kk.answer && Bk - kk.atMs < Ud
    }
    const Kd = "buildAFactory2Game:";

    function xd(kk, Fk) {
      return {
        onKeyDown: Bk => {
          Bk.stopPropagation(), Bk.nativeEvent.isComposing || 229 === Bk.nativeEvent.keyCode || ("Enter" === Bk.key ? (Bk.preventDefault(), kk()) : "Escape" === Bk.key && (Bk.preventDefault(), Fk()))
        }
      }
    }

    function jd(kk) {
      return {
        onKeyDown: Fk => {
          "Escape" !== Fk.key || Fk.nativeEvent.isComposing || (Fk.preventDefault(), Fk.stopPropagation(), kk())
        }
      }
    }

    function ld(kk) {
      kk.currentTarget.select()
    }

    function nd(kk, Fk) {
      (0, Rk.useEffect)((() => {
        var Bk;
        kk && (null === (Bk = Fk.current) || void 0 === Bk || Bk.scrollIntoView({
          block: "nearest"
        }))
      }), [kk, Fk])
    }

    function Id(kk) {
      const [Fk, Bk] = (0, Rk.useState)(null);
      return (0, Rk.useEffect)((() => {
        const Fk = document.querySelector(".UiRequests"),
          Rk = kk.current;
        if (!Fk || !Rk || "undefined" === typeof ResizeObserver) return;
        const tk = () => {
          const kk = Fk.getBoundingClientRect(),
            tk = Rk.getBoundingClientRect(),
            ak = Rk.parentElement,
            Xk = ak && parseFloat(getComputedStyle(ak).paddingTop) || 0,
            bk = function(kk, Fk, Bk, Rk) {
              if (!kk || kk.height <= 0 || kk.right <= Fk.left || kk.left >= Fk.right) return null;
              const tk = Math.max(Rk, kk.bottom + 8);
              return {
                marginTop: Math.round(tk - Rk),
                maxHeight: Math.max(0, Math.floor(Bk - tk - Rk))
              }
            }(kk, tk, window.innerHeight, Xk);
          Bk((kk => (null === kk || void 0 === kk ? void 0 : kk.marginTop) === (null === bk || void 0 === bk ? void 0 : bk.marginTop) && (null === kk || void 0 === kk ? void 0 : kk.maxHeight) === (null === bk || void 0 === bk ? void 0 : bk.maxHeight) ? kk : bk))
        };
        tk();
        const ak = new ResizeObserver(tk);
        return ak.observe(Fk), window.addEventListener("resize", tk), () => {
          ak.disconnect(), window.removeEventListener("resize", tk)
        }
      }), [kk]), Fk
    }

    function Qd(kk) {
      (0, Rk.useEffect)((() => {
        var Fk;
        null === (Fk = kk.current) || void 0 === Fk || Fk.focus()
      }), [kk])
    }

    function ks(kk) {
      const [Fk, Bk] = (0, Rk.useState)(Date.now);
      return (0, Rk.useEffect)((() => {
        const Fk = window.setInterval((() => {
          Bk(Date.now())
        }), kk);
        return () => {
          window.clearInterval(Fk)
        }
      }), [kk]), Fk
    }

    function Fs(kk) {
      let {
        tier: Fk,
        t: Bk
      } = kk;
      const {
        kind: Rk,
        short: tk
      } = fk(Fk), ak = Ak(Fk, ek), Xk = Bk(`${Kd}${ak.key}`, {
        ...ak.params,
        name: Bk(`${Kd}${mk(Fk).nameKey}`)
      });
      return (0, Sa.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Sa.jsx)("span", {
          className: Ot()("Baf2IslandTierPip", {
            Stage: "tier" !== Rk
          }),
          "aria-hidden": "true",
          children: tk
        }), Xk]
      })
    }

    function Bs(kk) {
      let {
        note: Fk,
        className: Bk,
        t: Rk
      } = kk;
      return (0, Sa.jsx)("p", {
        className: Ot()("Baf2IslandNote", Bk),
        children: Dd(Rk, Fk.key, Fk.names, Fk.params)
      })
    }
    const Rs = "buildAFactory2Game:";

    function ts(kk) {
      let {
        message: Fk,
        arrivedAtMs: Bk,
        close: tk,
        leave: ak
      } = kk;
      const Xk = qX(),
        {
          t: bk
        } = (0, Ht.x)(),
        wk = ks(1e3),
        dk = (0, Rk.useRef)(null);
      (0, Rk.useEffect)((() => {
        var kk;
        null === (kk = dk.current) || void 0 === kk || kk.focus()
      }), []);
      const sk = Ld(Bk, Fk.baf2TransferInMs, wk),
        Vk = Bk + Fk.baf2TransferInMs - 1e3,
        [Jk, Ak] = (0, Rk.useState)(null);
      (0, Rk.useEffect)((() => {
        const kk = window.setTimeout((() => {
          Ak(Vk)
        }), Math.max(0, Vk - Date.now()));
        return () => {
          window.clearTimeout(kk)
        }
      }), [Vk]);
      const ek = Jk === Vk || wk >= Vk,
        yk = Fk.baf2TransferIsland,
        fk = Fk.baf2TransferOwner;
      return (0, Sa.jsx)(oX.e, {
        close: tk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Sa.jsxs)("section", {
          ref: dk,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsxs)("div", {
              children: [(0, Sa.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === fk ? Dd(bk, `${Rs}islandsTransferOwn`, {
                  island: yk
                }) : Dd(bk, `${Rs}islandsTransfer`, {
                  island: yk,
                  owner: fk
                })
              }), (0, Sa.jsx)("p", {
                children: ek ? bk(`${Rs}islandsTransferNow`) : bk(`${Rs}islandsTransferIn`, {
                  time: oa(bk, sk)
                })
              })]
            }), (0, Sa.jsx)(LX.k, {
              ariaLabel: bk(`${Rs}islandsClose`),
              onClick: tk
            })]
          }), !ek && (0, Sa.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Sa.jsx)("p", {
              className: "Baf2TransferNote",
              children: bk(`${Rs}islandsTransferNote`)
            }), (0, Sa.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Sa.jsx)(LX.g, {
                onClick: () => {
                  Xk.send("baf2coopstay"), ak()
                },
                children: bk(`${Rs}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var as = Bk(1387),
      Xs = Bk(1104),
      bs = Bk.n(Xs);
    const ws = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const ds = "buildAFactory2Game:",
      ss = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Vs(kk, Fk, Bk) {
      return void 0 === Fk ? Bk : "string" === typeof Fk ? Fk : Array.isArray(Fk) ? Fk.map((Fk => "string" === typeof Fk ? Fk : "translationKey" in Fk ? kk(Fk.translationKey) : "")).join("") : kk(Fk.translationKey)
    }

    function As(kk) {
      const Fk = {};
      for (const [Bk, Rk] of Object.entries(null !== kk && void 0 !== kk ? kk : {})) Fk[Bk] = Rk < 0 ? Ya(Rk) : Rk.toLocaleString("en-US");
      return Fk
    }

    function es(kk, Fk) {
      const Bk = Fk ? "touch" : "mouse";
      return {
        use: kk(`${ds}lookUse_${Bk}`),
        Use: kk(`${ds}lookUseStart_${Bk}`)
      }
    }
    const ys = (0, Rk.memo)((function(kk) {
      let {
        item: Fk
      } = kk;
      return (0, Sa.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Sa.jsx)(Mt.e, {
          itemName: Fk,
          amount: 0
        })
      })
    }));

    function fs(kk) {
      let {
        label: Fk,
        percent: Bk,
        progress: Rk
      } = kk;
      return (0, Sa.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${Fk}: ${Rk}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Bk,
          children: (0, Sa.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${Bk}%`
            }
          })
        }), (0, Sa.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Rk
        })]
      })
    }

    function ms(kk) {
      let {
        chips: Fk
      } = kk;
      return (0, Sa.jsx)("span", {
        className: "Baf2QuestChips",
        children: Fk.map((kk => {
          let [Fk, Bk, Rk] = kk;
          const tk = Bk >= Rk;
          return (0, Sa.jsxs)("span", {
            className: Ot()("Baf2QuestChip", {
              Met: tk
            }),
            children: [(0, Sa.jsx)(ys, {
              item: Fk
            }), (0, Sa.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: tk ? `\u2713${Rk}` : `${Bk}/${Rk}`
            })]
          }, Fk)
        }))
      })
    }

    function Ws(kk, Fk) {
      const {
        key: Bk,
        params: Rk
      } = Ak(Fk, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return kk(`${ds}${Bk}`, {
        ...Rk,
        name: kk(`${ds}${mk(Fk).nameKey}`)
      })
    }

    function vs(kk) {
      let {
        core: Fk,
        t: Bk
      } = kk;
      const [Rk, tk] = Fk, ak = tk > 0 ? Math.floor(100 * Rk / tk) : 100;
      return (0, Sa.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": Bk(`${ds}questCoreLabel`, {
          have: String(Rk),
          need: String(tk)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": ak,
        children: [(0, Sa.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: Bk(`${ds}questCore`, {
            percent: String(ak)
          })
        }), (0, Sa.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Sa.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${ak}%`
            }
          })
        })]
      })
    }

    function is(kk) {
      let {
        rows: Fk,
        t: Bk
      } = kk;
      const Rk = Fk.filter((kk => kk.done)).length;
      return (0, Sa.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": Bk(`${ds}questStepsProgress`, {
          done: String(Rk),
          total: String(Fk.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": Fk.length,
        "aria-valuenow": Rk,
        children: Fk.map((kk => (0, Sa.jsx)("span", {
          className: Ot()("Baf2QuestSegment", {
            Done: kk.done,
            Current: kk.current
          })
        }, kk.id)))
      })
    }
    const Ys = (0, Rk.memo)(Ls, os);

    function os(kk, Fk) {
      const Bk = Bk => kk.view.itemNames[Bk] === Fk.view.itemNames[Bk];
      return kk.t === Fk.t && kk.extra === Fk.extra && (null === kk.row.item || Bk(kk.row.item)) && kk.row.madeFor.every(Bk) && kk.row.also.every(Bk) && bs()(kk.row, Fk.row)
    }

    function Ls(kk) {
      let {
        row: Fk,
        view: Bk,
        t: Rk,
        extra: tk
      } = kk;
      const {
        isTouchScreen: ak
      } = (0, Yt.h)(["isTouchScreen"]), Xk = Fk.item ? function(kk, Fk, Bk) {
        return 1 !== Bk && ws.has(kk) ? Nt(Fk) : null
      }(Fk.key, Fk.item, Fk.total) : null, bk = Xk ? Rk(Xk) : Fk.item ? Vs(Rk, Bk.itemNames[Fk.item], Fk.item) : "", wk = Fk.also.map((kk => Vs(Rk, Bk.itemNames[kk], kk))), dk = wk.join(", "), sk = function(kk, Fk) {
        var Bk;
        return Fk.length < 2 ? null !== (Bk = Fk[0]) && void 0 !== Bk ? Bk : "" : kk(`${ds}listAnd`, {
          rest: Fk.slice(0, -1).join(kk(`${ds}listComma`)),
          last: Fk[Fk.length - 1]
        })
      }(Rk, [bk, ...wk]), Vk = Rk(`${ds}${Fk.key}`, {
        ...es(Rk, ak),
        ...As(Fk.params),
        item: bk,
        also: dk,
        itemList: sk,
        total: String(Fk.total)
      }), [Jk, ...Ak] = Vk.split("\n"), ek = Fk.total > 1 && !Fk.done && !Fk.away;
      return (0, Sa.jsxs)("li", {
        className: Ot()("Baf2QuestStep", {
          Done: Fk.done,
          Current: Fk.current,
          JustFinished: Fk.justFinished,
          Away: Fk.away
        }),
        children: [!Fk.done && null !== Fk.item && (0, Sa.jsx)(ys, {
          item: Fk.item
        }), (Fk.done || null === Fk.item) && (0, Sa.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: Fk.done ? "\u2713" : "\u25cb"
        }), (0, Sa.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Sa.jsx)("strong", {
            children: Jk
          }), Ak.length > 0 && (0, Sa.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Ak.join(" ")
          }), !Fk.done && Fk.madeFor.length > 0 && (0, Sa.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Rk("buildAFactory2Game:questRowFor", {
              items: Fk.madeFor.map((kk => Vs(Rk, Bk.itemNames[kk], kk))).join(" \u2192 ")
            })
          }), ek && (0, Sa.jsx)(fs, {
            label: Jk,
            percent: Math.round(100 * Fk.amount / Fk.total),
            progress: `${Fk.amount.toLocaleString("en-US")}/${Fk.total.toLocaleString("en-US")}`
          }), !Fk.done && !Fk.away && Fk.chips && Fk.chips.length > 0 && (0, Sa.jsx)(ms, {
            chips: Fk.chips
          }), tk]
        })]
      })
    }

    function Os(kk, Fk) {
      let [Bk, Rk] = Fk;
      return kk(`${ds}${Bk}`, As(Rk))
    }

    function Es(kk) {
      let [Fk, Bk] = kk;
      return Fk + JSON.stringify(Bk)
    }

    function Ss(kk) {
      let {
        goal: Fk,
        t: Bk
      } = kk;
      return Fk ? (0, Sa.jsx)("span", {
        className: "Baf2BookGoal",
        children: Bk(`${ds}${Fk}`)
      }) : null
    }

    function Ns(kk) {
      let {
        view: Fk,
        t: Bk
      } = kk;
      if (!Fk.name) return null;
      const Rk = Zt(Fk.rows);
      return (0, Sa.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: Bk(`${ds}currentQuest`)
        }), (0, Sa.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Os(Bk, Fk.name)
        }), (0, Sa.jsx)(Ss, {
          goal: Fk.goal,
          t: Bk
        }), Rk.length > 1 && (0, Sa.jsx)(is, {
          rows: Rk,
          t: Bk
        }), (0, Sa.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: Fk.rows.map((kk => (0, Sa.jsx)(Ys, {
            row: kk,
            view: Fk,
            t: Bk
          }, kk.id)))
        }), Fk.reward && (0, Sa.jsxs)("span", {
          className: "Baf2BookReward",
          children: [Bk(`${ds}questReward`), (0, Sa.jsx)(ys, {
            item: Fk.reward
          }), Vs(Bk, Fk.itemNames[Fk.reward], Fk.reward)]
        })]
      })
    }

    function Hs(kk) {
      let {
        quest: Fk,
        upcoming: Bk,
        t: Rk
      } = kk;
      return (0, Sa.jsxs)("li", {
        className: Ot()("Baf2BookQuest", {
          Done: Fk[3],
          Upcoming: Bk
        }),
        children: [(0, Sa.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: Fk[3] ? "\u2713" : "\u25cb"
        }), (0, Sa.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Sa.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Os(Rk, Fk)
          }), (0, Sa.jsx)(Ss, {
            goal: Fk[2],
            t: Rk
          })]
        })]
      })
    }

    function us(kk) {
      let {
        done: Fk,
        total: Bk,
        t: Rk
      } = kk;
      const tk = Bk > 0 ? Math.round(100 * Fk / Bk) : 0,
        ak = Rk(`${ds}questBookChapterProgress`, {
          done: String(Fk),
          total: String(Bk)
        });
      return (0, Sa.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": ak,
          "aria-valuemin": 0,
          "aria-valuemax": Bk,
          "aria-valuenow": Fk,
          children: (0, Sa.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${tk}%`
            }
          })
        }), (0, Sa.jsx)("span", {
          className: "Baf2BookProgressText",
          children: ak
        })]
      })
    }

    function Ms(kk) {
      let {
        view: Fk,
        tier: Bk,
        quests: Rk,
        t: tk
      } = kk;
      const ak = Bk === Fk.tier,
        Xk = (null !== Rk && void 0 !== Rk ? Rk : []).filter((kk => !kk[4])),
        bk = (null !== Rk && void 0 !== Rk ? Rk : []).filter((kk => kk[4])),
        wk = Xk.filter((kk => kk[3])).length,
        dk = ak && Fk.name ? Es(Fk.name) : null,
        sk = Xk.findIndex((kk => !kk[3] && Es(kk) === dk));
      return (0, Sa.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Sa.jsx)("h3", {
            children: Ws(tk, Bk)
          }), Xk.length > 0 && (0, Sa.jsx)(us, {
            done: wk,
            total: Xk.length,
            t: tk
          }), ak && Fk.core && (0, Sa.jsx)(vs, {
            core: Fk.core,
            t: tk
          })]
        }), (0, Sa.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Rk && ak && (0, Sa.jsx)(Ns, {
            view: Fk,
            t: tk
          }), Xk.map(((kk, Bk) => Bk === sk ? (0, Sa.jsx)(Ns, {
            view: Fk,
            t: tk
          }, Es(kk)) : (0, Sa.jsx)(Hs, {
            quest: kk,
            upcoming: !kk[3],
            t: tk
          }, Es(kk))))]
        }), ak && Fk.side && (0, Sa.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Sa.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: tk(`${ds}questSide`)
          }), (0, Sa.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Os(tk, Fk.side.name)
          }), (0, Sa.jsx)(Ss, {
            goal: Fk.side.goal,
            t: tk
          }), (0, Sa.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Sa.jsx)(Ys, {
              row: Fk.side.row,
              view: Fk,
              t: tk
            })
          })]
        }), bk.length > 0 && (0, Sa.jsxs)(Sa.Fragment, {
          children: [(0, Sa.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: tk(`${ds}questBookSidesDone`)
          }), (0, Sa.jsx)("ol", {
            className: "Baf2BookQuests",
            children: bk.map((kk => (0, Sa.jsx)(Hs, {
              quest: kk,
              upcoming: !1,
              t: tk
            }, Es(kk))))
          })]
        })]
      })
    }

    function gs(kk) {
      var Fk, Bk, ak;
      let {
        store: Xk,
        close: bk
      } = kk;
      const {
        t: wk
      } = (0, Ht.x)(), dk = (0, as.g)(rt, Xk.get()), Vk = null !== (Fk = dk.tier) && void 0 !== Fk ? Fk : 1, [Jk, Ak] = (0, Rk.useState)(null), ek = (null === Jk || void 0 === Jk ? void 0 : Jk.at) === Vk ? Jk.tier : Vk, mk = (0, Rk.useRef)(null), Wk = null !== dk.chapters;
      (0, Rk.useEffect)((() => {
        var kk;
        mk.current && (mk.current.scrollTop = 0);
        const Fk = null === (kk = mk.current) || void 0 === kk ? void 0 : kk.querySelector(".Baf2BookQuest.Current");
        if (mk.current && Fk) {
          const kk = Fk.getBoundingClientRect().bottom - mk.current.getBoundingClientRect().bottom;
          kk > 0 && (mk.current.scrollTop += Math.min(kk, Fk.getBoundingClientRect().top - mk.current.getBoundingClientRect().top))
        }
      }), [ek, Wk]);
      const vk = null === (Bk = dk.chapters) || void 0 === Bk ? void 0 : Bk.find((kk => {
        let [Fk] = kk;
        return Fk === ek
      }));
      return (0, Sa.jsx)(oX.e, {
        close: bk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Sa.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: ss,
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: wk(`${ds}questBookTitle`)
            }), (0, Sa.jsx)(LX.k, {
              onClick: bk
            })]
          }), (0, Sa.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": wk(`${ds}questBookChapters`),
            children: tk.slice(0, sk()).map(((kk, Fk) => {
              const Bk = Fk + 1,
                {
                  kind: Rk,
                  short: tk
                } = fk(Bk),
                ak = yk(Bk, Vk),
                Xk = ak ? wk(`${ds}coreAtomicHidden`) : Ws(wk, Bk);
              return (0, Sa.jsx)("li", {
                children: (0, Sa.jsx)("button", {
                  type: "button",
                  className: Ot()({
                    Stage: "tier" !== Rk,
                    Atomic: "atomic" === Rk,
                    Current: Bk === Vk,
                    Selected: Bk === ek
                  }),
                  disabled: Bk > Vk,
                  "aria-pressed": Bk === ek,
                  "aria-label": Xk,
                  title: ak ? void 0 : Xk,
                  onClick: () => {
                    Ak({
                      tier: Bk,
                      at: Vk
                    })
                  },
                  children: ak ? "?" : tk
                })
              }, kk.nameKey)
            }))
          }), (0, Sa.jsxs)("div", {
            ref: mk,
            className: "Baf2BookBody",
            children: [qt(dk) && ek === Vk && (0, Sa.jsx)("p", {
              className: "Baf2BookEmpty",
              children: wk(`${ds}questBookAllDone`)
            }), (0, Sa.jsx)(Ms, {
              view: dk,
              tier: ek,
              quests: null !== (ak = null === vk || void 0 === vk ? void 0 : vk[1]) && void 0 !== ak ? ak : null,
              t: wk
            })]
          })]
        })
      })
    }
    const Us = "buildAFactory2Game:";

    function cs(kk) {
      let {
        tiers: Fk,
        from: Bk,
        tier: Rk,
        shown: tk,
        AA: ak
      } = kk;
      const {
        t: Xk
      } = (0, Ht.x)(), bk = Fk.map(((kk, Fk) => {
        const bk = Bk + Fk,
          {
            kind: wk,
            short: dk
          } = fk(bk),
          sk = yk(bk, Rk);
        return (0, Sa.jsx)("li", {
          children: (0, Sa.jsx)("button", {
            type: "button",
            className: Ot()({
              Stage: "tier" !== wk,
              Silhouette: sk,
              Reached: bk <= Rk,
              Current: bk === Rk,
              Next: bk === Rk + 1,
              Selected: bk === tk
            }),
            disabled: sk,
            "aria-pressed": bk === tk,
            "aria-label": sk ? Xk(`${Us}coreAtomicHidden`) : void 0,
            title: sk ? void 0 : Xk(`${Us}${kk.nameKey}`),
            onClick: () => {
              ak(bk)
            },
            children: sk ? "?" : dk
          })
        }, kk.nameKey)
      }));
      return (0, Sa.jsx)(Sa.Fragment, {
        children: bk
      })
    }

    function Gs(kk) {
      let {
        id: Fk,
        label: Bk,
        tiers: Rk,
        from: tk,
        ...ak
      } = kk;
      return (0, Sa.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Sa.jsx)("span", {
          id: Fk,
          className: "Baf2CoreLadderLabel",
          children: Bk
        }), (0, Sa.jsx)("ol", {
          "aria-labelledby": Fk,
          children: (0, Sa.jsx)(cs, {
            ...ak,
            tiers: Rk,
            from: tk
          })
        })]
      })
    }

    function Ts(kk) {
      const {
        t: Fk
      } = (0, Ht.x)(), Bk = tk.findIndex((kk => void 0 !== kk.stage)), Rk = tk.findIndex((kk => void 0 !== kk.reactorTier)), ak = Bk < 0 ? tk : tk.slice(0, Bk), Xk = Bk < 0 ? [] : tk.slice(Bk, Rk < 0 ? void 0 : Rk), wk = Rk < 0 || !bk() ? [] : tk.slice(Rk);
      return (0, Sa.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Sa.jsx)(Gs, {
          ...kk,
          id: "baf2CoreTiersLabel",
          label: Fk(`${Us}coreTiersLabel`),
          tiers: ak,
          from: 1
        }), Xk.length > 0 && (0, Sa.jsx)(Gs, {
          ...kk,
          id: "baf2CoreStagesLabel",
          label: Fk(`${Us}coreStagesLabel`),
          tiers: Xk,
          from: Bk + 1
        }), wk.length > 0 && (0, Sa.jsx)(Gs, {
          ...kk,
          id: "baf2CoreAtomicLabel",
          label: Fk(`${Us}coreAtomicLabel`),
          tiers: wk,
          from: Rk + 1
        })]
      })
    }
    const rs = "buildAFactory2Game:";

    function Ds(kk) {
      let {
        item: Fk,
        itemNames: Bk,
        children: Rk
      } = kk;
      return (0, Sa.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Sa.jsx)(Mt.e, {
            itemName: Fk,
            amount: 0
          })
        }), (0, Sa.jsx)(gt.d, {
          text: Bk[Fk]
        }), Rk]
      })
    }

    function zs(kk) {
      const Fk = new Map;
      for (const {
          block: Rk
        }
        of kk.newDeposits) {
        var Bk;
        Fk.set(Rk, (null !== (Bk = Fk.get(Rk)) && void 0 !== Bk ? Bk : 0) + 1)
      }
      return [...Fk]
    }

    function Ps(kk) {
      let {
        value: Fk,
        label: Bk,
        more: Rk
      } = kk;
      return (0, Sa.jsxs)("li", {
        children: [(0, Sa.jsx)("strong", {
          children: Fk
        }), (0, Sa.jsx)("span", {
          children: Bk
        }), Rk > 0 && (0, Sa.jsxs)("em", {
          children: ["+", Rk]
        })]
      })
    }

    function hs(kk) {
      let {
        items: Fk,
        itemNames: Bk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)(), [ak, Xk] = (0, Rk.useState)(null), bk = null !== ak && Fk.includes(ak) ? ak : null;
      return (0, Sa.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Sa.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: tk(`${rs}coreRewardUnlocks`)
        }), (0, Sa.jsx)("ul", {
          children: Fk.map((kk => (0, Sa.jsx)("li", {
            children: (0, Sa.jsx)("button", {
              type: "button",
              className: Ot()("Baf2PanelIcon", {
                Picked: kk === bk
              }),
              title: aa(tk, kk),
              "aria-label": aa(tk, kk),
              "aria-pressed": kk === bk,
              onClick: () => {
                Xk(kk === bk ? null : kk)
              },
              children: (0, Sa.jsx)(Mt.e, {
                itemName: kk,
                amount: 0
              })
            })
          }, kk)))
        }), (0, Sa.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== bk && (0, Sa.jsxs)(Sa.Fragment, {
            children: [(0, Sa.jsx)(gt.d, {
              text: Bk[bk]
            }), " \xb7 ", (0, Sa.jsx)(gt.d, {
              text: Bk[Mk(bk)]
            })]
          }), null === bk && tk(`${rs}coreRecipeTap`)]
        })]
      })
    }

    function qs(kk) {
      var Fk, Bk;
      let {
        def: Rk,
        tier: tk,
        itemNames: ak
      } = kk;
      const {
        t: Xk
      } = (0, Ht.x)(), bk = tk > 1 ? mk(tk - 1) : void 0, wk = Math.round(2 * Rk.islandRadius), dk = bk ? Math.round(2 * bk.islandRadius) : wk, sk = tk >= 3 ? oR(tk) : null;
      return (0, Sa.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Sa.jsxs)("ul", {
          className: Ot()("Baf2CoreStats", {
            Four: null !== sk
          }),
          children: [(0, Sa.jsx)(Ps, {
            value: `${wk}\xd7${wk}`,
            label: Xk(`${rs}coreStatIsland`),
            more: wk - dk
          }), (0, Sa.jsx)(Ps, {
            value: String(Rk.machineAllowance),
            label: Xk(`${rs}coreStatMachines`),
            more: Rk.machineAllowance - (null !== (Fk = null === bk || void 0 === bk ? void 0 : bk.machineAllowance) && void 0 !== Fk ? Fk : Rk.machineAllowance)
          }), (0, Sa.jsx)(Ps, {
            value: String(Rk.beltAllowance),
            label: Xk(`${rs}coreStatBelts`),
            more: Rk.beltAllowance - (null !== (Bk = null === bk || void 0 === bk ? void 0 : bk.beltAllowance) && void 0 !== Bk ? Bk : Rk.beltAllowance)
          }), null !== sk && (0, Sa.jsx)(Ps, {
            value: String(sk),
            label: Xk(`${rs}coreStatStorage`),
            more: sk - (bk ? oR(tk - 1) : sk)
          })]
        }), Rk.reward && (0, Sa.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Sa.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Xk(`${rs}coreRewardItem`)
          }), (0, Sa.jsx)(Ds, {
            item: Rk.reward,
            itemNames: ak
          })]
        }), Rk.newDeposits.length > 0 && (0, Sa.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Sa.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Xk(Rk.newDeposits.length > 1 ? `${rs}coreRewardDeposits` : `${rs}coreRewardDeposit`)
          }), zs(Rk).map((kk => {
            let [Fk, Bk] = kk;
            return (0, Sa.jsx)(Ds, {
              item: Fk,
              itemNames: ak,
              children: Bk > 1 && ` \xd7${Bk}`
            }, Fk)
          }))]
        }), Rk.unlocks.length > 0 && (0, Sa.jsx)(hs, {
          items: Rk.unlocks,
          itemNames: ak
        }), (0, Sa.jsx)(Cs, {
          tier: tk
        })]
      })
    }

    function Cs(kk) {
      let {
        tier: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)(), Rk = mt[Fk];
      if (!Rk) return null;
      const tk = ft(Fk, 0, 0).barrierMax !== ft(Fk - 1, 0, 0).barrierMax;
      return (0, Sa.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Sa.jsx)(Mt.e, {
            itemName: tk ? st.Chestplate : dt,
            amount: 0
          })
        }), Bk(`${rs}gearPerkLine`, {
          perk: Bk(`${rs}${Rk}`)
        })]
      })
    }

    function Zs(kk, Fk) {
      return null === kk ? Fk : kk.value
    }

    function ps(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === kk || Bk - kk.atMs >= Rk ? null : tk(kk.value, Fk) ? kk.armed ? null : kk : kk.armed ? kk : {
        ...kk,
        armed: !0
      }
    }

    function Ks(kk, Fk) {
      const Bk = Fk.filter((Fk => {
        var Bk;
        return !1 !== (null === (Bk = kk.get(Fk)) || void 0 === Bk ? void 0 : Bk.value)
      }));
      for (const [Rk, tk] of kk) tk.value && !Fk.includes(Rk) && Bk.push(Rk);
      return Bk
    }

    function xs(kk, Fk, Bk, tk) {
      const [ak, Xk] = (0, Rk.useState)((() => new Map)), bk = () => {
        Xk((Fk => function(kk, Fk, Bk, Rk) {
          var tk;
          let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Xk = null;
          for (const [bk, wk] of kk) {
            const tk = ps(wk, Fk(bk), Bk, Rk, ak);
            tk !== wk && (Xk ??= new Map(kk), null === tk ? Xk.delete(bk) : Xk.set(bk, tk))
          }
          return null !== (tk = Xk) && void 0 !== tk ? tk : kk
        }(Fk, kk, Date.now(), Bk, tk)))
      };
      (0, Rk.useEffect)((() => {
        bk()
      }), [Fk, Bk]), (0, Rk.useEffect)((() => {
        if (0 === ak.size) return;
        const kk = Math.min(...[...ak.values()].map((kk => kk.atMs))),
          Fk = setTimeout(bk, Math.max(0, kk + Bk - Date.now()) + 1);
        return () => {
          clearTimeout(Fk)
        }
      }), [ak, Fk, Bk]);
      return [ak, (Fk, Bk) => {
        Xk((Rk => {
          const ak = new Map(Rk);
          return ak.set(Fk, function(kk, Fk, Bk) {
            return {
              value: kk,
              atMs: Bk,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(kk, Fk)
            }
          }(Bk, kk(Fk), Date.now(), tk)), ak
        }))
      }]
    }
    const ls = "buildAFactory2Game:";

    function ns(kk) {
      let {
        message: Fk,
        itemNames: Bk
      } = kk;
      const tk = qX(),
        {
          t: ak
        } = (0, Ht.x)(),
        [Xk, bk] = (0, Rk.useState)(!1),
        [wk, dk] = function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GX;
          const [Bk, Rk] = xs((Fk => kk.includes(Fk)), kk, Fk, Object.is);
          return [Ks(Bk, kk), Rk]
        }(Fk.baf2CoreBankPaused),
        sk = new Set(wk),
        Vk = [...Fk.baf2CoreBanked];
      for (const Rk of sk) Vk.some((kk => {
        let [Fk] = kk;
        return Fk === Rk
      })) || Vk.push([Rk, 0]);
      return 0 === Vk.length ? null : (0, Sa.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Sa.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Xk,
          onClick: () => {
            bk(!Xk)
          },
          children: [(0, Sa.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: ak(`${ls}coreBankedLater`)
          }), (0, Sa.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Vk.map((kk => {
              let [Fk, Bk] = kk;
              const Rk = sk.has(Fk);
              return (0, Sa.jsxs)("span", {
                className: Ot()({
                  Paused: Rk
                }),
                title: Rk ? ak(`${ls}coreBankPausedTag`) : void 0,
                children: [(0, Sa.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Sa.jsx)(Mt.e, {
                    itemName: Fk,
                    amount: 0
                  })
                }), Bk, Rk && (0, Sa.jsx)(ut.d, {
                  name: "pause"
                })]
              }, Fk)
            }))
          }), (0, Sa.jsx)(ut.d, {
            name: Xk ? "angle-up" : "angle-down"
          })]
        }), Xk && (0, Sa.jsxs)(Sa.Fragment, {
          children: [(0, Sa.jsx)("ul", {
            children: Vk.map((kk => {
              let [Fk, Rk] = kk;
              const Xk = sk.has(Fk);
              return (0, Sa.jsxs)("li", {
                children: [(0, Sa.jsxs)(Ds, {
                  item: Fk,
                  itemNames: Bk,
                  children: [(0, Sa.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Rk
                  }), Xk && (0, Sa.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: ak(`${ls}coreBankPausedTag`)
                  })]
                }), (0, Sa.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Sa.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Rk,
                    onClick: () => {
                      tk.send(`baf2corewithdraw ${Rk} ${Fk}`)
                    },
                    children: ak(`${ls}coreTake`)
                  }), (0, Sa.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      tk.send(`${ik} ${Fk}`), dk(Fk, !Xk)
                    },
                    children: ak(Xk ? `${ls}coreBankResume` : `${ls}coreBankStop`)
                  })]
                })]
              }, Fk)
            }))
          }), (0, Sa.jsx)("p", {
            className: "Baf2CoreHint",
            children: ak(`${ls}coreBankNote`)
          })]
        })]
      })
    }
    const Is = "buildAFactory2Game:";

    function Qs(kk) {
      const Fk = Math.max(0, Math.floor(kk));
      return `${Math.floor(Fk/60)}:${String(Fk%60).padStart(2,"0")}`
    }

    function kV(kk) {
      let {
        item: Fk
      } = kk;
      return (0, Sa.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Sa.jsx)(Mt.e, {
          itemName: Fk,
          amount: 0
        })
      })
    }

    function FV() {
      return (0, Sa.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Sa.jsx)(ut.d, {
          name: "bolt"
        })
      })
    }

    function BV(kk) {
      let {
        charge: Fk,
        hint: Bk,
        itemNames: Rk
      } = kk;
      const tk = qX(),
        {
          t: ak
        } = (0, Ht.x)(),
        [Xk, bk, wk, dk, sk, Vk, Jk] = Fk,
        [Ak, ek] = function(kk) {
          var Fk;
          let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GX,
            Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [tk, ak] = xs((() => kk), kk, Bk, Rk);
          return [Zs(null !== (Fk = tk.get("")) && void 0 !== Fk ? Fk : null, kk), kk => {
            ak("", kk)
          }]
        }(Jk),
        yk = Ak === Jk ? Vk : !Ak,
        fk = dk >= sk,
        mk = Xk.find((kk => {
          let [, Fk, Bk] = kk;
          return Bk < .9 * Fk
        }));
      let Wk = `${Is}coreChargeWaiting`,
        vk = {};
      return fk ? Wk = `${Is}coreChargeDone` : Ak ? Wk = `${Is}coreChargeStopped` : yk && Bk ? (Wk = `${Is}${Bk[0]}`, vk = {
        item: aa(ak, Bk[1])
      }) : yk && mk ? (Wk = `${Is}coreChargeShort`, vk = {
        item: aa(ak, mk[0])
      }) : yk && bk > 0 && !wk ? Wk = `${Is}coreChargePower` : yk && (Wk = `${Is}coreChargeRunning`), (0, Sa.jsxs)("div", {
        className: Ot()("Baf2CoreCharge", {
          Waiting: !yk && !fk,
          Done: fk
        }),
        children: [(0, Sa.jsxs)("h4", {
          children: [ak(`${Is}coreChargeTitle`), (0, Sa.jsx)("span", {
            children: ak(`${Is}coreChargeProgress`, {
              done: Qs(dk),
              need: Qs(sk)
            })
          })]
        }), (0, Sa.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Sa.jsx)("div", {
            style: {
              width: 100 * Math.min(dk, sk) / sk + "%"
            }
          })
        }), (0, Sa.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Xk.map((kk => {
            var Fk;
            let [Bk, tk, Xk] = kk;
            const bk = Xk >= .9 * tk;
            return (0, Sa.jsxs)("li", {
              className: Ot()({
                Done: bk,
                Short: yk && !bk
              }),
              children: [(0, Sa.jsx)(kV, {
                item: Bk
              }), (0, Sa.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Sa.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Sa.jsx)(gt.d, {
                    text: null !== (Fk = Rk[Bk]) && void 0 !== Fk ? Fk : Bk
                  }), (0, Sa.jsx)("span", {
                    children: ak(`${Is}coreChargeItem`, {
                      now: String(Xk),
                      need: String(tk)
                    })
                  })]
                }), (0, Sa.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Sa.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Xk/tk)}%`
                    }
                  })
                })]
              })]
            }, Bk)
          })), bk > 0 && (0, Sa.jsxs)("li", {
            className: Ot()("Baf2CoreChargePower", {
              Short: yk && !wk
            }),
            children: [(0, Sa.jsx)(FV, {}), (0, Sa.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Sa.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Sa.jsx)("span", {
                  children: ak(`${Is}coreChargePowerRow`, {
                    power: Ik(bk)
                  })
                })
              })
            })]
          })]
        }), (0, Sa.jsx)("p", {
          className: "Baf2CoreHint",
          children: ak(Wk, vk)
        }), !fk && (yk || Ak) && (0, Sa.jsx)("button", {
          type: "button",
          className: Ot()("Baf2CoreChargeToggle", {
            Stopped: Ak
          }),
          onClick: () => {
            tk.send(Lk), ek(!Ak)
          },
          children: ak(Ak ? `${Is}coreChargeRestart` : `${Is}coreChargeStop`)
        })]
      })
    }

    function RV(kk) {
      let {
        charge: Fk,
        reached: Bk,
        itemNames: Rk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)();
      return (0, Sa.jsxs)("div", {
        className: Ot()("Baf2CoreCharge", {
          Done: Bk
        }),
        children: [(0, Sa.jsxs)("h4", {
          children: [tk(`${Is}coreChargeTitle`), (0, Sa.jsx)("span", {
            children: tk(`${Is}coreChargeSpecTime`, {
              time: Qs(Fk.seconds)
            })
          })]
        }), (0, Sa.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Fk.items.map((kk => {
            var Fk;
            let {
              item: ak,
              amount: Xk
            } = kk;
            return (0, Sa.jsxs)("li", {
              className: Ot()({
                Done: Bk
              }),
              children: [(0, Sa.jsx)(kV, {
                item: ak
              }), (0, Sa.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Sa.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Sa.jsx)(gt.d, {
                    text: null !== (Fk = Rk[ak]) && void 0 !== Fk ? Fk : ak
                  }), (0, Sa.jsx)("span", {
                    children: tk(`${Is}coreChargeSpecItem`, {
                      need: String(Xk)
                    })
                  })]
                })
              })]
            }, ak)
          })), Fk.powerPerS > 0 && (0, Sa.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Sa.jsx)(FV, {}), (0, Sa.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Sa.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Sa.jsx)("span", {
                  children: tk(`${Is}coreChargePowerRow`, {
                    power: Ik(Fk.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const tV = "buildAFactory2Game:";

    function aV(kk) {
      let {
        def: Fk,
        reached: Bk,
        banked: Rk,
        itemNames: tk
      } = kk;
      const {
        t: ak
      } = (0, Ht.x)();
      return (0, Sa.jsx)("ul", {
        className: "Baf2CoreCost",
        children: Fk.cost.map((kk => {
          let {
            item: Fk,
            amount: Xk
          } = kk;
          const bk = Bk ? 0 : Rk(Fk);
          return (0, Sa.jsx)("li", {
            children: (0, Sa.jsx)(Ds, {
              item: Fk,
              itemNames: tk,
              children: (0, Sa.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: bk > 0 ? ak(`${tV}coreBankedFor`, {
                  amount: String(bk),
                  total: String(Xk)
                }) : `\xd7${Xk}`
              })
            })
          }, Fk)
        }))
      })
    }

    function XV(kk, Fk) {
      if (Fk >= sk()) return kk(`${tV}coreMaxTier`);
      const Bk = dk[Fk + 1];
      return Bk && !Bk.startsWith("upgradeCore") ? kk(`${tV}coreGateQuest`, {
        quest: kk(`${tV}quest_${Bk}`)
      }) : kk(`${tV}coreGateClosed`)
    }

    function bV() {
      const {
        t: kk
      } = (0, Ht.x)(), Fk = qX(), Bk = (0, Rk.useRef)(null), tk = (0, Rk.useRef)(Date.now());
      return nd(!0, Bk), (0, Sa.jsx)("div", {
        ref: Bk,
        className: "Baf2CoreGrow",
        children: (0, Sa.jsx)(LX.o, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - tk.current >= 600 && Fk.send(vk)
          },
          children: kk(`${tV}coreGrow`)
        })
      })
    }

    function wV(kk) {
      let {
        message: Fk,
        itemNames: Bk,
        next: Rk
      } = kk;
      const tk = qX(),
        {
          t: ak
        } = (0, Ht.x)(),
        Xk = Fk.baf2CoreTier,
        bk = Fk.baf2CoreReady,
        wk = Fk.baf2CoreNeeds.filter((kk => {
          let [, Fk, Bk, Rk] = kk;
          return Rk > 0 && Fk < Bk
        })),
        dk = Fk.baf2CoreNeeds.every((kk => {
          let [, Fk, Bk] = kk;
          return Fk >= Bk
        })),
        sk = Fk.baf2CoreKeep;
      return (0, Sa.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [bk && (0, Sa.jsx)(bV, {}), (0, Sa.jsx)("h3", {
            children: ak(`${tV}coreBring`)
          }), (0, Sa.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: Fk.baf2CoreNeeds.map((kk => {
              let [Fk, Rk, Xk, bk] = kk;
              return (0, Sa.jsxs)("li", {
                className: Ot()({
                  Done: Rk >= Xk
                }),
                children: [(0, Sa.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Sa.jsx)(Mt.e, {
                    itemName: Fk,
                    amount: 0
                  })
                }), (0, Sa.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Sa.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Sa.jsx)(gt.d, {
                      text: Bk[Fk]
                    }), (0, Sa.jsxs)("span", {
                      children: [Rk, "/", Xk]
                    })]
                  }), (0, Sa.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Sa.jsx)("div", {
                      style: {
                        width: 100 * Rk / Xk + "%"
                      }
                    }), bk > 0 && (0, Sa.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * bk / Xk + "%"
                      }
                    })]
                  })]
                }), bk > 0 && Rk < Xk && (0, Sa.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    tk.send(`${Yk} ${Fk}`)
                  },
                  children: ak(`${tV}coreDeposit`, {
                    amount: String(bk)
                  })
                })]
              }, Fk)
            }))
          }), Fk.baf2CoreCharge && (0, Sa.jsx)(BV, {
            charge: Fk.baf2CoreCharge,
            hint: Fk.baf2CoreChargeHint,
            itemNames: Bk
          }), !bk && wk.length > 1 && (0, Sa.jsx)(LX.o, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              tk.send(vk)
            },
            children: ak(`${tV}coreHandOver`)
          }), !bk && void 0 !== sk && (0, Sa.jsx)("p", {
            className: "Baf2CoreHint",
            children: ak(`${tV}coreKeepRest`, {
              item: aa(ak, sk)
            })
          }), !bk && !dk && 0 === wk.length && void 0 === sk && (0, Sa.jsx)("p", {
            className: "Baf2CoreHint",
            children: ak(`${tV}coreNothingHeld`)
          }), (0, Sa.jsx)(ns, {
            message: Fk,
            itemNames: Bk
          })]
        }), (0, Sa.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Sa.jsx)("h3", {
            children: ak(`${tV}coreRewards`)
          }), (0, Sa.jsx)(qs, {
            def: Rk,
            tier: Xk + 1,
            itemNames: Bk
          })]
        })]
      })
    }

    function dV(kk) {
      let {
        message: Fk,
        itemNames: Bk,
        shown: Rk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)(), ak = Fk.baf2CoreTier, Xk = mk(Rk), bk = Rk <= ak, wk = new Map(Fk.baf2CoreBanked), dk = !Wk(ak, Ok(Fk)) && Rk === ak;
      return (0, Sa.jsxs)("div", {
        className: Ot()("Baf2CoreBody", {
          Locked: !bk
        }),
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Sa.jsx)("h3", {
            children: tk(bk ? `${tV}coreItTook` : `${tV}coreItNeeds`)
          }), 0 === Xk.cost.length && (0, Sa.jsx)("p", {
            className: "Baf2CoreHint",
            children: tk(`${tV}coreTierStart`)
          }), Xk.cost.length > 0 && (0, Sa.jsx)(aV, {
            def: Xk,
            reached: bk,
            banked: kk => {
              var Fk;
              return function(kk, Fk, Bk, Rk) {
                let tk = kk;
                for (let Xk = Fk + 2; Xk <= Bk; Xk++) {
                  var ak;
                  const kk = mk(Xk).cost.find((kk => kk.item === Rk)),
                    Fk = Math.min(tk, null !== (ak = null === kk || void 0 === kk ? void 0 : kk.amount) && void 0 !== ak ? ak : 0);
                  if (Xk === Bk) return Fk;
                  tk -= Fk
                }
                return 0
              }(null !== (Fk = wk.get(kk)) && void 0 !== Fk ? Fk : 0, ak, Rk, kk)
            },
            itemNames: Bk
          }), Xk.charge && (0, Sa.jsx)(RV, {
            charge: Xk.charge,
            reached: bk,
            itemNames: Bk
          }), dk && (0, Sa.jsxs)(Sa.Fragment, {
            children: [(0, Sa.jsx)("p", {
              className: "Baf2CoreHint",
              children: XV(tk, ak)
            }), (0, Sa.jsx)(ns, {
              message: Fk,
              itemNames: Bk
            })]
          })]
        }), (0, Sa.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Sa.jsx)("h3", {
            children: tk(bk ? `${tV}coreGave` : `${tV}coreLockedRewards`)
          }), (0, Sa.jsx)(qs, {
            def: Xk,
            tier: Rk,
            itemNames: Bk
          })]
        })]
      })
    }

    function sV(kk, Fk) {
      const {
        key: Bk,
        params: Rk
      } = Ak(Fk - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return kk(`${tV}${Bk}`, Rk)
    }
    const VV = "buildAFactory2Game:",
      JV = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      AV = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function eV(kk) {
      let {
        view: Fk,
        close: Bk,
        askIslands: tk
      } = kk;
      const {
        t: ak
      } = (0, Ht.x)(), [Xk, bk] = (0, Rk.useState)(!1);
      (0, Rk.useEffect)((() => {
        if (!Xk) return;
        const kk = window.setTimeout((() => {
          bk(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(kk)
        }
      }), [Xk]);
      const {
        message: wk,
        itemNames: dk
      } = Fk, sk = wk.baf2CoreTier, Vk = mk(sk), Jk = Wk(sk, Ok(wk)), [yk, fk] = wk.baf2CoreMachines, [vk, ik] = wk.baf2CoreBelts, Yk = wk.baf2CoreStorage, Lk = wk.baf2CoreReady, [Ek, Sk] = (0, Rk.useState)(null), Nk = (null === Ek || void 0 === Ek ? void 0 : Ek.at) === sk && Ek.ready === Lk ? Ek.tier : Jk ? sk + 1 : sk;
      let Hk = "coreTierLocked";
      Nk <= sk ? Hk = "coreTierReached" : Nk === sk + 1 && (Hk = "coreTierNext");
      const uk = ak(`${VV}${mk(Nk).nameKey}`),
        Mk = Nk === sk + 1 ? Jk : null,
        gk = Ak(Nk, {
          tier: Hk,
          stage: JV[Hk],
          atomic: AV[Hk]
        }),
        Uk = ak(`${VV}${gk.key}`, {
          ...gk.params,
          name: uk
        }),
        ck = Ak(sk, ek),
        Gk = ak(`${VV}${ck.key}`, {
          ...ck.params,
          name: ak(`${VV}${Vk.nameKey}`)
        });
      return (0, Sa.jsx)(oX.e, {
        close: Bk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Sa.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsxs)("div", {
              children: [(0, Sa.jsx)("h2", {
                id: "baf2CoreTitle",
                children: ak(`${VV}coreTitle`)
              }), void 0 !== wk.baf2CoreIslandName && (0, Sa.jsx)("p", {
                className: "Baf2CoreIsland",
                children: wk.baf2CoreIslandName
              }), (0, Sa.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Sa.jsx)("span", {
                  children: Gk
                }), (0, Sa.jsx)("span", {
                  className: Ot()({
                    Full: yk >= fk
                  }),
                  children: ak(`${VV}coreMachineCount`, {
                    amount: String(yk),
                    total: String(fk)
                  })
                }), (0, Sa.jsx)("span", {
                  className: Ot()({
                    Full: vk >= ik
                  }),
                  children: ak(`${VV}coreBeltCount`, {
                    amount: String(vk),
                    total: String(ik)
                  })
                }), void 0 !== Yk && (0, Sa.jsx)("span", {
                  className: Ot()({
                    Full: Yk[0] >= Yk[1]
                  }),
                  children: ak(`${VV}coreStorageCount`, {
                    amount: String(Yk[0]),
                    total: String(Yk[1])
                  })
                })]
              })]
            }), (0, Sa.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [wk.baf2CoreIslands && (0, Sa.jsx)(LX.g, {
                className: "Baf2CoreIslandsButton",
                disabled: Xk,
                onClick: () => {
                  bk(!0), tk()
                },
                children: ak(`${VV}islandsOpenButton`)
              }), (0, Sa.jsx)(LX.k, {
                onClick: Bk
              })]
            })]
          }), (0, Sa.jsx)(Ts, {
            tier: sk,
            shown: Nk,
            AA: kk => {
              Sk({
                tier: kk,
                at: sk,
                ready: Lk
              })
            }
          }), (0, Sa.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Uk, Nk > sk + 1 && (0, Sa.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: sV(ak, Nk)
            })]
          }), 6 === Nk && Nk > sk && (0, Sa.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: ak(`${VV}coreStagesNote`)
          }), 11 === Nk && Nk > sk && (0, Sa.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: ak(`${VV}coreAtomicNote`)
          }), Mk && (0, Sa.jsx)(wV, {
            message: wk,
            itemNames: dk,
            next: Mk
          }), !Mk && (0, Sa.jsx)(dV, {
            message: wk,
            itemNames: dk,
            shown: Nk
          })]
        })
      })
    }
    const yV = {
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
    const fV = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: da,
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

    function mV(kk) {
      return kk.baf2DropCometOreOnly ? "dropCometOre" : kk.baf2DropCometIsotope ? "seed" === kk.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function WV(kk) {
      let {
        message: Fk,
        quests: Bk,
        close: tk,
        leave: ak
      } = kk;
      const Xk = qX(),
        {
          t: bk
        } = (0, Ht.x)(),
        wk = (0, as.g)(rt, Bk.get()),
        dk = function(kk) {
          var Fk;
          if (!ck(kk.tutorial)) return null;
          const Bk = kk.rows.find((kk => kk.current)),
            Rk = Bk ? yV[Bk.key] : void 0;
          return null !== (Fk = null !== Rk && void 0 !== Rk ? Rk : kk.side ? yV[kk.side.row.key] : void 0) && void 0 !== Fk ? Fk : null
        }(wk),
        sk = null === wk.tier || Ja(wk.tier),
        Vk = sk ? fV : fV.filter((kk => {
          let {
            item: Fk
          } = kk;
          return Fk !== da
        })),
        [Jk, Ak] = (0, Rk.useState)(null),
        ek = null !== Jk && void 0 !== Jk ? Jk : !Fk.baf2DropFoundSalvage && sk,
        yk = Fk.baf2DropRuinDistance,
        fk = Fk.baf2DropComet,
        mk = Fk.baf2DropOldWorks,
        Wk = Fk.baf2DropGrove,
        vk = function(kk) {
          return 2 + Number(void 0 !== kk.baf2DropComet) + Number(!!kk.baf2DropOwedComet || void 0 !== kk.baf2DropOwedWaitMinutes) + Number(void 0 !== kk.baf2DropDigDistance) + Number(void 0 !== kk.baf2DropOldWorks) + Number(void 0 !== kk.baf2DropGrove)
        }(Fk),
        ik = kk => {
          Xk.send(function(kk) {
            return `baf2drop ${kk}`
          }(kk)), ak()
        };
      let Yk = bk("buildAFactory2Game:dropRuinNone");
      if (null !== yk) {
        let kk = Fk.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        Fk.baf2DropRuinOldWorks && (kk = "dropRuinOldWorks");
        const Bk = void 0 === Fk.baf2DropRuinCluster ? bk("buildAFactory2Game:dropRuinOpen") : bk("buildAFactory2Game:dropRuinCluster", {
          count: String(Fk.baf2DropRuinCluster)
        });
        Yk = `${bk(`buildAFactory2Game:${kk}`,{distance:String(yk)})} ${Bk}`
      }
      let Lk = bk("buildAFactory2Game:dropBelowDescription");
      void 0 !== Fk.baf2DropBelowLook && (Lk = bk("buildAFactory2Game:dropBelowLook", {
        look: bk(Fk.baf2DropBelowLook)
      }));
      const Ok = "buildAFactory2Game:wildsRegion_survivorGrove" === Fk.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        Ek = oa(bk, 60 * function(kk) {
          const [Fk, Bk] = (0, Rk.useState)((() => Date.now())), [tk, ak] = (0, Rk.useState)(Fk);
          return (0, Rk.useEffect)((() => {
            const kk = Date.now();
            Bk(kk), ak(kk)
          }), [kk]), (0, Rk.useEffect)((() => {
            const kk = window.setInterval((() => {
              ak(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(kk)
            }
          }), []), Math.max(1, kk.baf2DropRenewMinutes - Math.floor((tk - Fk) / 6e4))
        }(Fk)),
        Sk = function(kk, Fk, Bk) {
          return "ruin" === kk && !Bk || "owed" === kk && !Fk.baf2DropOwedComet ? null : kk
        }(dk, Fk, null !== yk),
        Nk = function(kk) {
          for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
          return Ot()("Baf2DropTile", ...Bk, {
            Wanted: Sk === kk
          })
        };
      return (0, Sa.jsx)(oX.e, {
        close: tk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Sa.jsxs)("section", {
          className: Ot()("Baf2Panel Baf2DropMap", {
            Many: vk >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsxs)("div", {
              children: [(0, Sa.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: bk("buildAFactory2Game:dropMapTitle")
              }), (0, Sa.jsx)("p", {
                children: bk("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Sa.jsx)(LX.k, {
              onClick: tk
            })]
          }), (0, Sa.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== fk && (0, Sa.jsxs)(LX.A, {
              className: Nk("comet", "Baf2DropComet"),
              onClick: () => {
                ik("comet")
              },
              children: [(0, Sa.jsx)("strong", {
                children: bk("buildAFactory2Game:dropComet")
              }), (0, Sa.jsx)("span", {
                children: bk(`buildAFactory2Game:${mV(Fk)}`, {
                  distance: String(fk)
                })
              })]
            }), Fk.baf2DropOwedComet && (0, Sa.jsxs)(LX.A, {
              className: Nk("owed", "Baf2DropComet"),
              onClick: () => {
                ik("owed")
              },
              children: [(0, Sa.jsx)("strong", {
                children: bk("buildAFactory2Game:dropOwedComet")
              }), (0, Sa.jsx)("span", {
                children: Fk.baf2DropOwedIsotope ? bk("buildAFactory2Game:dropOwedIsotopeDescription") : bk("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== Fk.baf2DropOwedWaitMinutes && (0, Sa.jsxs)(LX.A, {
              className: Nk("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Sa.jsx)("strong", {
                children: bk("buildAFactory2Game:dropOwedComet")
              }), (0, Sa.jsx)("span", {
                children: bk("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(Fk.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Sa.jsxs)(LX.g, {
              className: Nk("below"),
              onClick: () => {
                ik("below")
              },
              children: [(0, Sa.jsx)("strong", {
                children: bk("buildAFactory2Game:dropBelow")
              }), (0, Sa.jsx)("span", {
                children: Lk
              })]
            }), void 0 !== Fk.baf2DropDigDistance && (0, Sa.jsxs)(LX.v, {
              className: Nk("dig"),
              onClick: () => {
                ik("dig")
              },
              children: [(0, Sa.jsx)("strong", {
                children: bk("buildAFactory2Game:dropDig")
              }), (0, Sa.jsx)("span", {
                children: bk("buildAFactory2Game:dropDigDescription", {
                  distance: String(Fk.baf2DropDigDistance),
                  y: Ya(Fk.baf2DropDigY)
                })
              })]
            }), void 0 !== Wk && (0, Sa.jsxs)(LX.v, {
              className: Nk("grove", "Baf2DropGrove"),
              onClick: () => {
                ik("grove")
              },
              children: [(0, Sa.jsx)("strong", {
                children: bk("buildAFactory2Game:dropGrove")
              }), (0, Sa.jsx)("span", {
                children: bk(`buildAFactory2Game:${Ok}`, {
                  distance: String(Wk)
                })
              })]
            }), (0, Sa.jsxs)(LX.o, {
              className: Nk("ruin"),
              disabled: null === yk,
              onClick: () => {
                ik("ruin")
              },
              children: [(0, Sa.jsx)("strong", {
                children: bk("buildAFactory2Game:dropRuin")
              }), (0, Sa.jsx)("span", {
                children: Yk
              })]
            }), void 0 !== mk && (0, Sa.jsxs)(LX.J, {
              className: Nk("works"),
              onClick: () => {
                ik("works")
              },
              children: [(0, Sa.jsx)("strong", {
                children: bk("buildAFactory2Game:dropOldWorks")
              }), (0, Sa.jsx)("span", {
                children: bk("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(mk)
                })
              })]
            })]
          }), (0, Sa.jsx)("p", {
            className: "Baf2DropRenew",
            children: bk("buildAFactory2Game:dropRenew", {
              time: Ek
            })
          }), (0, Sa.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: ek,
            onToggle: kk => {
              kk.currentTarget.open !== ek && Ak(kk.currentTarget.open)
            },
            children: [(0, Sa.jsx)("summary", {
              children: bk("buildAFactory2Game:dropSalvageWhat")
            }), (0, Sa.jsx)("p", {
              children: bk("buildAFactory2Game:dropSalvageIntro")
            }), (0, Sa.jsx)("ul", {
              children: Vk.map((kk => {
                let {
                  item: Fk,
                  nameKey: Bk,
                  useKey: Rk,
                  params: tk
                } = kk;
                return (0, Sa.jsxs)("li", {
                  children: [(0, Sa.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Sa.jsx)(Mt.e, {
                      itemName: Fk,
                      amount: 0
                    })
                  }), (0, Sa.jsxs)("span", {
                    children: [(0, Sa.jsx)("strong", {
                      children: bk(Bk)
                    }), ": ", bk(Rk, tk)]
                  })]
                }, Fk)
              }))
            })]
          })]
        })
      })
    }
    const vV = "buildAFactory2Game:";

    function iV(kk, Fk) {
      return kk.sendIslandEdit(`baf2coopleave ${Fk.baf2IslandId}`)
    }

    function YV(kk) {
      let {
        card: Fk,
        canRename: Bk,
        done: tk,
        t: ak
      } = kk;
      const Xk = qX(),
        [bk, wk] = (0, Rk.useState)(Fk.baf2IslandName),
        dk = Od(bk),
        sk = "" === dk || Ed(dk),
        Vk = () => {
          !sk && Bk && (dk !== Fk.baf2IslandName ? tk(Xk.sendIslandEdit(`baf2islandrename ${Fk.baf2IslandId} ${dk}`)) : tk(null))
        },
        Jk = () => {
          tk(null)
        };
      return (0, Sa.jsxs)("div", {
        className: "Baf2IslandForm",
        ...jd(Jk),
        children: [(0, Sa.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [ak(`${vV}islandsRenameLabel`), (0, Sa.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: bk,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: ld,
            onChange: kk => {
              wk(kk.target.value)
            },
            ...xd(Vk, Jk)
          })]
        }), "" === dk && (0, Sa.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: ak(`${vV}islandsRenameEmpty`)
        }), Ed(dk) && (0, Sa.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: ak(`${vV}islandsNameReserved`)
        }), (0, Sa.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Sa.jsx)(LX.v, {
            disabled: sk || !Bk,
            onClick: Vk,
            children: ak(`${vV}islandsRenameSave`)
          }), (0, Sa.jsx)(LX.g, {
            onClick: Jk,
            children: ak(`${vV}islandsCancel`)
          })]
        })]
      })
    }

    function oV(kk) {
      let {
        card: Fk,
        canDelete: Bk,
        done: tk,
        t: ak
      } = kk;
      const Xk = qX(),
        [bk, wk] = (0, Rk.useState)(""),
        dk = function(kk, Fk) {
          return Od(kk).toLowerCase() === Od(Fk).toLowerCase()
        }(bk, Fk.baf2IslandName),
        sk = () => {
          dk && Bk && tk(Xk.sendIslandEdit(`baf2islanddelete ${Fk.baf2IslandId}`))
        },
        Vk = () => {
          tk(null)
        },
        Jk = rd("name"),
        [Ak, ek = ""] = ak(`${vV}islandsDeleteConfirm`, {
          name: Jk
        }).split(Jk);
      return (0, Sa.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...jd(Vk),
        children: [(0, Sa.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Sa.jsxs)("span", {
            children: [Ak, (0, Sa.jsx)("strong", {
              children: Fk.baf2IslandName
            }), ek]
          }), (0, Sa.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: bk,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: ld,
            onChange: kk => {
              wk(kk.target.value)
            },
            ...xd(sk, Vk)
          })]
        }), Cd(Fk) && (0, Sa.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ak(`${vV}islandsDeleteLeftBack`)
        }), (0, Sa.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Sa.jsx)(LX.J, {
            disabled: !dk || !Bk,
            onClick: sk,
            children: ak(`${vV}islandsDeleteForGood`)
          }), (0, Sa.jsx)(LX.g, {
            onClick: Vk,
            children: ak(`${vV}islandsCancel`)
          })]
        })]
      })
    }

    function LV(kk) {
      let {
        members: Fk,
        t: Bk
      } = kk;
      const Rk = Fk.length;
      return (0, Sa.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Sa.jsxs)("span", {
          children: [1 === Rk ? Bk(`${vV}islandsPlayersOne`) : Bk(`${vV}islandsPlayers`, {
            count: String(Rk)
          }), " "]
        }), Fk.map(((kk, Fk) => (0, Sa.jsxs)("span", {
          className: Ot()("Baf2IslandMember", {
            Here: kk.baf2MemberHere
          }),
          title: kk.baf2MemberHere ? Bk(`${vV}islandsPlayerHere`) : void 0,
          children: [kk.baf2MemberName, Fk < Rk - 1 ? ", " : ""]
        }, kk.baf2MemberKey)))]
      })
    }

    function OV(kk) {
      let {
        card: Fk,
        answered: Bk,
        nowMs: tk,
        t: ak
      } = kk;
      const Xk = qX(),
        [bk, wk] = (0, Rk.useState)(new Map),
        dk = Cd(Fk);
      if (!dk) return null;
      return (0, Sa.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Sa.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: ak(`${vV}islandsLeftTitle`)
        }), (0, Sa.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: dk.left.map((kk => {
            const Rk = kk.baf2LeftKey,
              sk = pd(bk.get(Rk), Bk, tk),
              Vk = function(kk) {
                return 1 === kk ? [`${vd}islandsLeftItemsOne`] : [`${vd}islandsLeftItems`, {
                  count: String(kk)
                }]
              }(kk.baf2LeftItems);
            return (0, Sa.jsx)("li", {
              className: Ot()("Baf2IslandPerson", {
                Pending: sk
              }),
              children: (0, Sa.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Sa.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: kk.baf2LeftName
                }), (0, Sa.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: ak(Vk[0], Vk[1])
                }), dk.claim && (0, Sa.jsx)(LX.v, {
                  className: "Baf2IslandPersonButton",
                  disabled: sk,
                  onClick: () => {
                    (kk => {
                      const Bk = Xk.sendIslandEdit(`baf2coopclaim ${Fk.baf2IslandId} ${kk}`);
                      wk((Fk => new Map(Fk).set(kk, {
                        atMs: Date.now(),
                        answer: Bk
                      })))
                    })(Rk)
                  },
                  children: ak(`${vV}islandsClaim`)
                })]
              })
            }, Rk)
          }))
        }), dk.goThere && (0, Sa.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ak(`${vV}islandsClaimGoThere`)
        })]
      })
    }

    function EV(kk) {
      let {
        card: Fk,
        view: Bk,
        blocked: tk,
        maxIslands: ak,
        answered: Xk,
        nowMs: bk,
        done: wk,
        openSocial: dk,
        t: sk
      } = kk;
      const Vk = qX(),
        [Jk, Ak] = (0, Rk.useState)(new Map),
        [ek, yk] = (0, Rk.useState)(new Map),
        [fk, mk] = (0, Rk.useState)(null),
        Wk = (0, Rk.useRef)(null);
      Qd(Wk);
      const vk = Fk.baf2IslandId,
        ik = Fk.baf2IslandCoop,
        Yk = null !== ik && void 0 !== ik && ik.baf2CoopMembers.some((kk => kk.baf2MemberKey === fk)) ? fk : null,
        Lk = function(kk, Fk) {
          const Bk = kk.baf2IslandCoop;
          return Bk && Zd(Bk) || null !== Fk ? void 0 : kk.baf2IslandInvitable
        }(Fk, tk),
        Ok = function(kk, Fk) {
          const Bk = kk.baf2IslandCoop;
          return Bk && Zd(Bk) ? {
            key: `${vd}islandsCoopFull`,
            params: {
              max: String(Bk.baf2CoopMax)
            }
          } : void 0 !== kk.baf2IslandInvitable && null === Fk || Bk && !Bk.baf2CoopManageHere ? null : "degraded" === Fk || "stuck" === Fk ? {
            key: `${vd}islandsInviteNotLoaded`
          } : null === Fk || function(kk) {
            return "notHome" === kk || "wilds" === kk || "visiting" === kk
          }(Fk) || ud(Fk) ? {
            key: `${vd}islandsInviteGoThere`
          } : {
            key: `${vd}islandsInviteBusy`
          }
        }(Fk, tk),
        Ek = () => {
          var kk;
          mk(null), null === (kk = Wk.current) || void 0 === kk || kk.focus()
        };
      return (0, Sa.jsxs)("div", {
        ref: Wk,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...jd(null === Yk ? wk : Ek),
        children: [ik && (0, Sa.jsxs)(Sa.Fragment, {
          children: [(0, Sa.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: sk(`${vV}islandsPlayersTitle`, {
              count: String(ik.baf2CoopMembers.length),
              max: String(ik.baf2CoopMax)
            })
          }), (0, Sa.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: ik.baf2CoopMembers.map(((kk, Fk) => {
              const Rk = kk.baf2MemberKey,
                tk = pd(Jk.get(Rk), Xk, bk);
              return (0, Sa.jsxs)("li", {
                className: Ot()("Baf2IslandPerson", {
                  Pending: tk
                }),
                children: [(0, Sa.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Sa.jsx)("span", {
                    className: Ot()("Baf2IslandPersonName", {
                      Here: kk.baf2MemberHere
                    }),
                    children: kk.baf2MemberName
                  }), kk.baf2MemberHere && (0, Sa.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: sk(`${vV}islandsPlayerHere`)
                  }), 0 === Fk && (0, Sa.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: sk(`${vV}islandsPlayerOwner`)
                  }), Bk.remove && Fk > 0 && !tk && Yk !== Rk && (0, Sa.jsx)(LX.K, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var kk;
                      mk(Rk), null === (kk = Wk.current) || void 0 === kk || kk.focus()
                    },
                    children: sk(`${vV}islandsRemove`)
                  })]
                }), Yk === Rk && (0, Sa.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Sa.jsx)("p", {
                    children: Dd(sk, `${vV}islandsRemoveConfirm`, {
                      player: kk.baf2MemberName
                    })
                  }), (0, Sa.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Sa.jsx)(LX.J, {
                      onClick: () => {
                        (kk => {
                          const Fk = Vk.sendIslandEdit(`baf2coopremove ${vk} ${kk.baf2MemberKey}`);
                          Ak((Bk => new Map(Bk).set(kk.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: Fk
                          }))), Ek()
                        })(kk)
                      },
                      children: sk(`${vV}islandsRemoveYes`)
                    }), (0, Sa.jsx)(LX.g, {
                      onClick: Ek,
                      children: sk(`${vV}islandsCancel`)
                    })]
                  })]
                })]
              }, Rk)
            }))
          })]
        }), (void 0 !== Lk || null !== Ok) && (0, Sa.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: sk(`${vV}islandsInviteTitle`)
        }), !ik && (void 0 !== Lk || null !== Ok) && (0, Sa.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: sk(`${vV}islandsInviteShareNote`)
        }), 0 === (null === Lk || void 0 === Lk ? void 0 : Lk.length) && (0, Sa.jsx)(SV, {
          openSocial: dk,
          t: sk
        }), void 0 !== Lk && Lk.length > 0 && (0, Sa.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Lk.map((kk => {
            const Fk = !0 === kk.baf2InvitableSent || pd(ek.get(kk.baf2InvitableId), Xk, bk);
            return (0, Sa.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Sa.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Sa.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: kk.baf2InvitableName
                }), kk.baf2InvitableFull && !Fk && (0, Sa.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: sk(`${vV}islandsInviteTheirFull`, {
                    max: String(ak)
                  })
                }), (Fk || !kk.baf2InvitableFull) && (0, Sa.jsx)(LX.v, {
                  className: "Baf2IslandPersonButton",
                  disabled: Fk,
                  onClick: () => {
                    (kk => {
                      const Fk = Vk.sendIslandEdit(`baf2coopinvite ${vk} ${kk}`);
                      yk((Bk => new Map(Bk).set(kk, {
                        atMs: Date.now(),
                        answer: Fk
                      })))
                    })(kk.baf2InvitableId)
                  },
                  children: sk(Fk ? `${vV}islandsInvited` : `${vV}islandsInvite`)
                })]
              })
            }, kk.baf2InvitableId)
          }))
        }), Ok && (0, Sa.jsx)(Bs, {
          note: Ok,
          t: sk
        }), (0, Sa.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Sa.jsx)(LX.g, {
            onClick: wk,
            children: sk(`${vV}islandsDone`)
          })
        })]
      })
    }

    function SV(kk) {
      let {
        openSocial: Fk,
        t: Bk
      } = kk;
      return (0, Sa.jsxs)(Sa.Fragment, {
        children: [(0, Sa.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Bk(Fk ? `${vV}islandsInviteNobody` : `${vV}islandsInviteNobodyGuest`)
        }), Fk && (0, Sa.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Sa.jsx)(LX.g, {
            onClick: Fk,
            children: Bk("socialBar:social")
          })
        })]
      })
    }

    function NV(kk) {
      let {
        className: Fk,
        text: Bk,
        ConfirmButton: tk,
        confirmLabel: ak,
        canConfirm: Xk,
        send: bk,
        done: wk,
        t: dk
      } = kk;
      const sk = (0, Rk.useRef)(null);
      Qd(sk);
      const Vk = () => {
        wk(null)
      };
      return (0, Sa.jsxs)("div", {
        ref: sk,
        tabIndex: -1,
        className: Ot()("Baf2IslandForm", Fk),
        ...jd(Vk),
        children: [(0, Sa.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Bk
        }), (0, Sa.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Sa.jsx)(tk, {
            disabled: !Xk,
            onClick: () => {
              Xk && wk(bk())
            },
            children: ak
          }), (0, Sa.jsx)(LX.g, {
            onClick: Vk,
            children: dk(`${vV}islandsCancel`)
          })]
        })]
      })
    }

    function HV(kk) {
      return "hidden" !== kk
    }

    function uV(kk) {
      var Fk, Bk;
      let {
        card: tk,
        keepOwn: ak,
        blocked: Xk,
        maxIslands: bk,
        serverNowMs: wk,
        nowMs: dk,
        actions: sk,
        full: Vk,
        waits: Jk,
        answered: Ak,
        mode: ek,
        setMode: yk,
        pending: fk,
        onSent: mk,
        switchTo: Wk,
        leave: vk,
        coopOn: ik,
        openSocial: Yk,
        t: Lk
      } = kk;
      const Ok = qX(),
        Ek = tk.baf2IslandActive,
        Sk = Ek ? null : function(kk, Fk) {
          if (kk <= 0) return null;
          const Bk = Fk - kk;
          if (Bk < ma) return [`${vd}islandsPlayedJustNow`];
          if (Bk < Yd) return [`${vd}islandsPlayedMinutes`, {
            minutes: String(Math.floor(Bk / ma))
          }];
          if (Bk < od) return [`${vd}islandsPlayedHours`, {
            hours: String(Math.floor(Bk / Yd))
          }];
          const Rk = Math.floor(Bk / od);
          return 1 === Rk ? [`${vd}islandsPlayedDay`] : [`${vd}islandsPlayedDays`, {
            days: String(Rk)
          }]
        }(tk.baf2IslandLastPlayedMs, wk),
        Nk = void 0 === (Hk = tk.baf2IslandItems) ? null : 0 === Hk ? [`${vd}islandsItemsNone`] : 1 === Hk ? [`${vd}islandsItemsOne`] : [`${vd}islandsItems`, {
          count: String(Hk)
        }];
      var Hk;
      const uk = function(kk) {
          return kk ? 1 === kk ? [`${vd}islandsWaitingOne`] : [`${vd}islandsWaiting`, {
            count: String(kk)
          }] : null
        }(tk.baf2IslandWaiting),
        Mk = tk.baf2IslandUnreadable,
        gk = tk.baf2IslandCoop,
        Uk = qd(tk, sk, ak, Vk, ik, Xk),
        ck = (0, Rk.useRef)(null);
      nd(null !== ek, ck);
      const Gk = () => {
          var kk;
          yk(null), null === (kk = ck.current) || void 0 === kk || kk.focus()
        },
        Tk = (kk, Fk) => {
          Gk(), null !== kk && mk(kk, Fk)
        },
        rk = (kk, Fk) => Lk(`${vV}${kk}`, {
          time: oa(Lk, Fk)
        });
      return (0, Sa.jsxs)("li", {
        ref: ck,
        tabIndex: -1,
        className: Ot()("Baf2IslandCard", {
          Active: Ek,
          Pending: fk,
          Shared: void 0 !== gk
        }),
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Sa.jsx)("strong", {
            className: "Baf2IslandName",
            children: tk.baf2IslandName
          }), Ek && (0, Sa.jsx)("span", {
            className: "Baf2IslandBadge",
            children: Lk(`${vV}islandsOnThis`)
          }), gk && (0, Sa.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: Lk(`${vV}islandsShared`)
          })]
        }), "member" === (null === gk || void 0 === gk ? void 0 : gk.baf2CoopRole) && (0, Sa.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Dd(Lk, `${vV}islandsSharedBy`, {
            owner: gk.baf2CoopOwner
          })
        }), void 0 !== Mk && (0, Sa.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: Lk("newer" === Mk ? `${vV}islandsUnreadable` : `${vV}islandsDamaged`)
        }), "corrupt" === Mk && Vk && (0, Sa.jsx)("p", {
          className: "Baf2IslandStats",
          children: Lk(`${vV}islandsDamagedFull`)
        }), void 0 === Mk && (0, Sa.jsxs)(Sa.Fragment, {
          children: [(0, Sa.jsx)(Fs, {
            tier: tk.baf2IslandTier,
            t: Lk
          }), (0, Sa.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Sa.jsx)("span", {
              children: 1 === tk.baf2IslandQuestsDone ? Lk(`${vV}islandsQuestsDoneOne`) : Lk(`${vV}islandsQuestsDone`, {
                count: String(tk.baf2IslandQuestsDone)
              })
            }), (0, Sa.jsx)("span", {
              children: 1 === tk.baf2IslandMachines ? Lk(`${vV}islandsMachinesOne`) : Lk(`${vV}islandsMachines`, {
                count: String(tk.baf2IslandMachines)
              })
            }), Nk && (0, Sa.jsx)("span", {
              children: Lk(Nk[0], Nk[1])
            }), uk && (0, Sa.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: Lk(uk[0], uk[1])
            }), Sk && (0, Sa.jsx)("span", {
              children: Lk(Sk[0], Sk[1])
            })]
          })]
        }), gk && void 0 === gk.baf2CoopState && "people" !== ek && (0, Sa.jsx)(LV, {
          members: gk.baf2CoopMembers,
          t: Lk
        }), null === ek && (0, Sa.jsx)(OV, {
          card: tk,
          answered: Ak,
          nowMs: dk,
          t: Lk
        }), Uk.note && (0, Sa.jsx)(Bs, {
          note: Uk.note,
          className: Ot()({
            Unreachable: void 0 !== (null === gk || void 0 === gk ? void 0 : gk.baf2CoopState)
          }),
          t: Lk
        }), "rename" === ek && (0, Sa.jsx)(YV, {
          card: tk,
          canRename: "enabled" === Uk.rename,
          done: Tk,
          t: Lk
        }), "delete" === ek && (0, Sa.jsx)(oV, {
          card: tk,
          canDelete: "enabled" === Uk.delete,
          done: kk => {
            Tk(kk, gk ? "delete" : void 0)
          },
          t: Lk
        }), "people" === ek && (0, Sa.jsx)(EV, {
          card: tk,
          view: Uk,
          blocked: Xk,
          maxIslands: bk,
          answered: Ak,
          nowMs: dk,
          done: Gk,
          openSocial: Yk,
          t: Lk
        }), "leave" === ek && (0, Sa.jsx)(NV, {
          className: "Leave",
          text: Dd(Lk, `${vV}islandsLeaveConfirm`, {
            island: tk.baf2IslandName,
            owner: null !== (Fk = null === (Bk = tk.baf2IslandCoop) || void 0 === Bk ? void 0 : Bk.baf2CoopOwner) && void 0 !== Fk ? Fk : ""
          }),
          ConfirmButton: LX.J,
          confirmLabel: Lk(`${vV}islandsLeaveYes`),
          canConfirm: "enabled" === Uk.leave,
          send: () => iV(Ok, tk),
          done: kk => {
            Tk(kk, "leave"), null !== kk && Ek && vk()
          },
          t: Lk
        }), "unshare" === ek && (0, Sa.jsx)(NV, {
          className: "Unshare",
          text: Dd(Lk, `${vV}islandsStopSharingConfirm`, {
            island: tk.baf2IslandName
          }),
          ConfirmButton: LX.v,
          confirmLabel: Lk(`${vV}islandsStopSharing`),
          canConfirm: "enabled" === Uk.unshare,
          send: () => Ok.sendIslandEdit(`baf2coopunshare ${tk.baf2IslandId}`),
          done: kk => {
            Tk(kk), null !== kk && vk()
          },
          t: Lk
        }), null === ek && !fk && (0, Sa.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": tk.baf2IslandName,
          children: [HV(Uk.switch) && (0, Sa.jsx)(LX.v, {
            disabled: "enabled" !== Uk.switch,
            onClick: Wk,
            children: "tryAgain" === Uk.switchLabel ? Lk(`${vV}islandsTryAgain`) : Jk.switch > 0 ? rk("islandsSwitchIn", Jk.switch) : Lk(`${vV}islandsSwitch`)
          }), HV(Uk.rename) && (0, Sa.jsx)(LX.g, {
            disabled: "enabled" !== Uk.rename,
            onClick: () => {
              yk("rename")
            },
            children: Lk(`${vV}islandsRename`)
          }), HV(Uk.people) && (0, Sa.jsx)(LX.g, {
            disabled: "enabled" !== Uk.people,
            onClick: () => {
              yk("people")
            },
            children: Lk("players" === Uk.peopleLabel ? `${vV}islandsPlayersButton` : `${vV}islandsInviteButton`)
          }), HV(Uk.unshare) && (0, Sa.jsx)(LX.g, {
            disabled: "enabled" !== Uk.unshare,
            onClick: () => {
              yk("unshare")
            },
            children: Lk(`${vV}islandsStopSharing`)
          }), HV(Uk.dismiss) && (0, Sa.jsx)(LX.g, {
            disabled: "enabled" !== Uk.dismiss,
            onClick: () => {
              mk(iV(Ok, tk), "dismiss"), Ek && vk()
            },
            children: Lk(`${vV}islandsDismiss`)
          }), HV(Uk.leave) && (0, Sa.jsx)(LX.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Uk.leave,
            onClick: () => {
              yk("leave")
            },
            children: Ek && Jk.switch > 0 ? rk("islandsLeaveIn", Jk.switch) : Lk(`${vV}islandsLeave`)
          }), HV(Uk.delete) && (0, Sa.jsx)(LX.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Uk.delete,
            onClick: () => {
              yk("delete")
            },
            children: Jk.change > 0 && Uk.deleteWaits ? rk("islandsDeleteIn", Jk.change) : Lk(`${vV}islandsDelete`)
          })]
        })]
      })
    }
    const MV = "buildAFactory2Game:";

    function gV(kk) {
      let {
        invite: Fk,
        actions: Bk,
        full: tk,
        maxIslands: ak,
        waitSeconds: Xk,
        focus: bk,
        focused: wk,
        join: dk,
        decline: sk,
        t: Vk
      } = kk;
      const [Jk, Ak] = (0, Rk.useState)(!1), ek = (0, Rk.useRef)(null);
      nd(Jk, ek), (0, Rk.useEffect)((() => {
        var kk;
        bk && (Ak(!0), null === (kk = ek.current) || void 0 === kk || kk.focus(), wk())
      }), [bk, wk]);
      const yk = function(kk, Fk, Bk, Rk, tk) {
          return Bk ? {
            join: !1,
            note: {
              key: `${vd}islandsJoinTooMany`,
              params: {
                max: String(Rk)
              }
            }
          } : kk.baf2InvitePlayers >= tk ? {
            join: !1,
            note: {
              key: `${vd}islandsJoinFull`
            }
          } : {
            join: Fk.switch,
            note: null
          }
        }(Fk, Bk, tk, ak, 10),
        fk = Fk.baf2InviteIsland,
        mk = Fk.baf2InvitePlayers,
        Wk = () => {
          var kk;
          Ak(!1), null === (kk = ek.current) || void 0 === kk || kk.focus()
        },
        vk = Xk > 0 && null === yk.note ? Vk(`${MV}islandsJoinIn`, {
          time: oa(Vk, Xk)
        }) : Vk(`${MV}islandsJoin`);
      return (0, Sa.jsxs)("li", {
        ref: ek,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Jk ? jd(Wk) : {},
        children: [(0, Sa.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Sa.jsx)("strong", {
            className: "Baf2IslandName",
            children: fk
          })
        }), (0, Sa.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Dd(Vk, `${MV}islandsInvitedBy`, {
            owner: Fk.baf2InviteOwner
          })
        }), (0, Sa.jsx)(Fs, {
          tier: Fk.baf2InviteTier,
          t: Vk
        }), (0, Sa.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Sa.jsx)("span", {
            children: 1 === mk ? Vk(`${MV}islandsPlayersCountOne`) : Vk(`${MV}islandsPlayersCount`, {
              count: String(mk)
            })
          })
        }), yk.note && (0, Sa.jsx)(Bs, {
          note: yk.note,
          t: Vk
        }), Jk && (0, Sa.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Dd(Vk, `${MV}islandsJoinConfirm`, {
            island: fk
          })
        }), !Jk && (0, Sa.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": fk,
          children: [(0, Sa.jsx)(LX.v, {
            disabled: !yk.join,
            onClick: () => {
              var kk;
              Ak(!0), null === (kk = ek.current) || void 0 === kk || kk.focus()
            },
            children: vk
          }), (0, Sa.jsx)(LX.g, {
            onClick: sk,
            children: Vk(`${MV}islandsDecline`)
          })]
        }), Jk && (0, Sa.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Sa.jsx)(LX.v, {
            disabled: !yk.join,
            onClick: dk,
            children: Vk(`${MV}islandsJoinYes`)
          }), (0, Sa.jsx)(LX.g, {
            onClick: Wk,
            children: Vk(`${MV}islandsCancel`)
          })]
        })]
      })
    }

    function UV(kk) {
      let {
        invites: Fk,
        actions: Bk,
        full: Rk,
        maxIslands: tk,
        waitSeconds: ak,
        focus: Xk,
        focused: bk,
        leave: wk,
        declined: dk,
        t: sk
      } = kk;
      const Vk = qX();
      return (0, Sa.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Sa.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: sk(`${MV}islandsInvitesTitle`)
        }), (0, Sa.jsx)("ul", {
          className: "Baf2IslandCards",
          children: Fk.map((kk => {
            const Fk = kk.baf2InviteId;
            return (0, Sa.jsx)(gV, {
              invite: kk,
              actions: Bk,
              full: Rk,
              maxIslands: tk,
              waitSeconds: ak,
              focus: Xk === Fk,
              focused: bk,
              join: () => {
                Vk.send(`baf2coopaccept ${Fk}`), wk()
              },
              decline: () => {
                Vk.send(`baf2coopdecline ${Fk}`), dk(Fk)
              },
              t: sk
            }, Fk)
          }))
        })]
      })
    }
    const cV = "buildAFactory2Game:";

    function GV(kk) {
      let {
        cards: Fk,
        activeName: Bk,
        canStart: tk,
        waitSeconds: ak,
        leave: Xk,
        t: bk
      } = kk;
      const wk = qX(),
        [dk, sk] = (0, Rk.useState)(!1),
        [Vk, Jk] = (0, Rk.useState)(""),
        Ak = (0, Rk.useRef)(null);
      nd(dk, Ak), (0, Rk.useEffect)((() => {
        var kk;
        dk && (null === (kk = Ak.current) || void 0 === kk || kk.focus())
      }), [dk]);
      const ek = Sd(Fk),
        yk = Od(Vk),
        fk = Ed(yk),
        mk = () => {
          tk && !fk && (wk.send("" === yk || yk === ek ? lk : `${lk} ${yk}`), Xk())
        },
        Wk = () => {
          var kk;
          sk(!1), null === (kk = Ak.current) || void 0 === kk || kk.focus()
        };
      return (0, Sa.jsxs)("li", {
        ref: Ak,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...dk ? jd(Wk) : {},
        children: [(0, Sa.jsx)("strong", {
          className: "Baf2IslandName",
          children: bk(`${cV}islandsNewTitle`)
        }), !dk && (0, Sa.jsx)("p", {
          className: "Baf2IslandStats",
          children: bk(`${cV}islandsNewNote`)
        }), dk && (0, Sa.jsxs)(Sa.Fragment, {
          children: [(0, Sa.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Dd(bk, `${cV}islandsNewConfirm`, {
              name: Bk
            })
          }), (0, Sa.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [bk(`${cV}islandsNewNameLabel`), (0, Sa.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Vk,
              placeholder: ek,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: ld,
              onChange: kk => {
                Jk(kk.target.value)
              },
              ...xd(mk, Wk)
            })]
          }), fk && (0, Sa.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: bk(`${cV}islandsNameReserved`)
          })]
        }), (0, Sa.jsxs)("div", {
          className: Ot()("Baf2IslandButtons", {
            Stacked: dk
          }),
          children: [(0, Sa.jsx)(LX.v, {
            disabled: !tk || dk && fk,
            onClick: () => {
              if (!dk) return Jk(ek), void sk(!0);
              mk()
            },
            children: ak > 0 ? bk(`${cV}islandsNewIn`, {
              time: oa(bk, ak)
            }) : bk(dk ? `${cV}islandsNewConfirmButton` : `${cV}islandsNew`)
          }), dk && (0, Sa.jsx)(LX.g, {
            onClick: Wk,
            children: bk(`${cV}islandsCancel`)
          })]
        })]
      })
    }

    function TV(kk) {
      var Fk, Bk;
      let {
        message: tk,
        arrivedAtMs: ak,
        close: Xk,
        leave: bk,
        openSocial: wk
      } = kk;
      const dk = qX(),
        {
          t: sk
        } = (0, Ht.x)(),
        Vk = ks(1e3),
        [Jk, Ak] = (0, Rk.useState)(null),
        [ek, yk] = (0, Rk.useState)(new Map),
        [fk, mk] = (0, Rk.useState)(new Set),
        Wk = tk.baf2IslandCards,
        vk = function(kk, Fk, Bk, Rk) {
          return (null !== kk && void 0 !== kk ? kk : []).filter((kk => Fk + kk.baf2InviteLeftMs > Bk && !Rk.has(kk.baf2InviteId)))
        }(tk.baf2IslandsInvites, ak, Vk, fk),
        ik = vk.map((kk => kk.baf2InviteId)).join(" "),
        Yk = (0, Rk.useRef)(null),
        Lk = Id(Yk);
      (0, Rk.useEffect)((() => {
        var kk, Fk;
        null !== (kk = Yk.current) && void 0 !== kk && kk.contains(document.activeElement) || (null === (Fk = Yk.current) || void 0 === Fk || Fk.focus())
      }), [tk, ik]), (0, Rk.useEffect)((() => {
        yk((kk => function(kk, Fk, Bk, Rk) {
          const tk = new Map;
          for (const ak of Fk) {
            const Fk = kk.get(ak.baf2IslandId);
            Fk && (void 0 !== Fk.untilGone || Rk < Fk.answer) && cd(Fk, ak, Bk) && tk.set(ak.baf2IslandId, Fk)
          }
          return tk.size === kk.size ? kk : tk
        }(kk, tk.baf2IslandCards, Date.now(), tk.baf2IslandsAnswered)))
      }), [tk]);
      const Ok = Ld(ak, tk.baf2IslandsWaitMs, Vk),
        Ek = tk.baf2IslandsBlocked,
        Sk = Md(Ek, Ok),
        Nk = function(kk, Fk) {
          const Bk = Md(kk, 0);
          return {
            switch: Bk.switch ? Fk : 0,
            change: Bk.change ? Fk : 0
          }
        }(Ek, Ok),
        Hk = Wk.length >= tk.baf2IslandsMax,
        uk = Wk.length > 0,
        Mk = function(kk, Fk, Bk) {
          return kk + Math.max(0, Bk - Fk)
        }(tk.baf2IslandsNowMs, ak, Vk),
        gk = null !== (Fk = null === (Bk = Wk.find((kk => kk.baf2IslandActive))) || void 0 === Bk ? void 0 : Bk.baf2IslandName) && void 0 !== Fk ? Fk : "",
        Uk = function(kk) {
          const Fk = kk.filter(hd).length;
          return Fk <= 1 && Fk < kk.length
        }(Wk),
        ck = !0 === tk.baf2IslandsCoop,
        Gk = function(kk, Fk) {
          const Bk = kk.find((kk => kk.baf2IslandActive)),
            Rk = null === Bk || void 0 === Bk ? void 0 : Bk.baf2IslandCoop;
          return Bk && "member" === (null === Rk || void 0 === Rk ? void 0 : Rk.baf2CoopRole) ? {
            key: `${vd}islandsKeepOwnMember`,
            names: {
              owner: Rk.baf2CoopOwner,
              island: Bk.baf2IslandName
            }
          } : {
            key: Fk ? `${vd}islandsKeepOwn` : `${vd}islandsKeepOwnSolo`
          }
        }(Wk, ck),
        [Tk, rk] = (0, Rk.useState)(null);
      (0, Rk.useEffect)((() => {
        void 0 !== tk.baf2IslandsFocusInvite && rk(tk.baf2IslandsFocusInvite)
      }), [tk]);
      const Dk = (0, Rk.useCallback)((() => {
          rk(null)
        }), []),
        zk = Jk ? Wk.find((kk => kk.baf2IslandId === Jk.id)) : void 0,
        Pk = Jk && zk && "hidden" !== qd(zk, Sk, Uk, Hk, ck, Ek)[Jk.mode] ? Jk : null;
      return (0, Sa.jsx)(oX.e, {
        close: Xk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Sa.jsxs)("section", {
          ref: Yk,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: Lk ? {
            marginTop: `${Lk.marginTop}px`,
            maxHeight: `${Lk.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsxs)("div", {
              children: [(0, Sa.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: sk(`${cV}islandsTitle`)
              }), uk && (0, Sa.jsx)("p", {
                children: sk(`${cV}islandsSubtitle`, {
                  count: String(Wk.length),
                  max: String(tk.baf2IslandsMax)
                })
              })]
            }), (0, Sa.jsx)(LX.k, {
              ariaLabel: sk(`${cV}islandsClose`),
              onClick: Xk
            })]
          }), (0, Sa.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== Ek && (0, Sa.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Dd(sk, Nd(Ek, Hd(Wk)), {
                island: gk
              })
            }), uk && vk.length > 0 && (0, Sa.jsx)(UV, {
              invites: vk,
              actions: Sk,
              full: Hk,
              maxIslands: tk.baf2IslandsMax,
              waitSeconds: Nk.switch,
              focus: Tk,
              focused: Dk,
              leave: bk,
              declined: kk => {
                mk((Fk => new Set(Fk).add(kk)))
              },
              t: sk
            }), uk && (0, Sa.jsxs)(Sa.Fragment, {
              children: [Hk && (0, Sa.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: sk(`${cV}islandsFull`, {
                  max: String(tk.baf2IslandsMax)
                })
              }), (0, Sa.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Dd(sk, Gk.key, Gk.names)
              }), (0, Sa.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Wk.map((kk => {
                  const Fk = kk.baf2IslandId;
                  return (0, Sa.jsx)(uV, {
                    card: kk,
                    keepOwn: Uk,
                    coopOn: ck,
                    openSocial: wk,
                    blocked: Ek,
                    maxIslands: tk.baf2IslandsMax,
                    serverNowMs: Mk,
                    nowMs: Vk,
                    actions: Sk,
                    full: Hk,
                    waits: Nk,
                    answered: tk.baf2IslandsAnswered,
                    mode: (null === Pk || void 0 === Pk ? void 0 : Pk.id) === Fk ? Pk.mode : null,
                    setMode: kk => {
                      Ak(null === kk ? null : {
                        id: Fk,
                        mode: kk
                      })
                    },
                    pending: cd(ek.get(Fk), kk, Vk),
                    onSent: (Bk, Rk) => {
                      yk((tk => {
                        const ak = {
                          atMs: Date.now(),
                          from: kk.baf2IslandName,
                          answer: Bk
                        };
                        return new Map(tk).set(Fk, Rk ? {
                          ...ak,
                          untilGone: Rk
                        } : ak)
                      }))
                    },
                    leave: bk,
                    switchTo: () => {
                      dk.send(`baf2islandswitch ${Fk}`), bk()
                    },
                    t: sk
                  }, Fk)
                })), !Hk && (0, Sa.jsx)(GV, {
                  cards: Wk,
                  activeName: gk,
                  canStart: Sk.change,
                  waitSeconds: Nk.change,
                  leave: bk,
                  t: sk
                })]
              })]
            })]
          })]
        })
      })
    }
    var rV = Bk(4712);
    const DV = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        lR: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      zV = Object.keys(DV),
      PV = new Set([...Object.keys(lF), ...[...GF.Press.recipes, ...GF["Wire Mill"].recipes].map((kk => kk.output))]),
      hV = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      qV = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      CV = / Bar$|Alloy$/,
      ZV = /Porkchop|Beef|Mutton|Venison|Steak/,
      pV = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const KV = (0, Rk.memo)((function(kk) {
      let {
        item: Fk,
        name: Bk,
        amount: Rk,
        selected: tk,
        small: ak,
        onPick: Xk
      } = kk;
      return (0, Sa.jsxs)("button", {
        type: "button",
        className: Ot()("Baf2TermTile", {
          On: tk,
          Small: ak
        }),
        "aria-label": `${Bk}: ${Rk}`,
        "aria-pressed": tk,
        onClick: () => {
          Xk(Fk)
        },
        children: [(0, Sa.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Sa.jsx)(Mt.e, {
            itemName: Fk,
            amount: 0
          })
        }), (0, Sa.jsx)("span", {
          className: "Baf2TermCount",
          children: ia(Rk, 1e4)
        }), !ak && (0, Sa.jsx)("span", {
          className: "Baf2TermName",
          children: Bk
        })]
      })
    }));

    function xV(kk) {
      let {
        store: Fk,
        close: Bk,
        send: tk
      } = kk;
      const {
        t: ak
      } = (0, Ht.x)(), {
        isTouchScreen: Xk
      } = (0, Yt.h)(["isTouchScreen"]);
      ! function(kk) {
        const [Fk, Bk] = (0, Rk.useState)(kk.version);
        (0, Rk.useEffect)((() => (Bk(kk.version), kk.subscribe((() => {
          Bk(kk.version)
        })))), [kk])
      }(Fk);
      const [bk, wk] = (0, Rk.useState)("all"), [dk, sk] = (0, Rk.useState)(!1), [Vk, Jk] = (0, Rk.useState)(""), [Ak, ek] = (0, Rk.useState)(""), [yk, fk] = (0, Rk.useState)(null), [mk, Wk] = (0, Rk.useState)(!1), [vk, ik, Yk] = function() {
        const kk = (0, Rk.useRef)(null),
          [Fk, Bk] = (0, Rk.useState)(!1),
          tk = () => {
            const Fk = kk.current;
            Bk(null !== Fk && Fk.scrollLeft + Fk.clientWidth < Fk.scrollWidth - 1)
          };
        return (0, Rk.useEffect)(tk), (0, Rk.useEffect)((() => {
          const Fk = kk.current;
          if (!Fk) return;
          const Bk = new ResizeObserver(tk);
          return Bk.observe(Fk), () => {
            Bk.disconnect()
          }
        }), []), [kk, Fk, tk]
      }(), Lk = (0, Rk.useMemo)((() => new Map), [ak]), Ok = kk => {
        let Fk = Lk.get(kk);
        return void 0 === Fk && (Fk = function(kk, Fk) {
          const Bk = /^(.+) \((.+)\)$/.exec(kk);
          return Bk ? Fk(Bk[2], Bk[1]) : kk
        }(aa(ak, kk), ((kk, Fk) => ak("buildAFactory2Game:terminalTileKind", {
          kind: kk,
          base: Fk
        }))), Lk.set(kk, Fk)), Fk
      }, Ek = Fk.isReadOnly(), Sk = mk && !Ek, Nk = Fk.recent(), Hk = Fk.items(), uk = Ak.trim().toLowerCase(), Mk = Sk ? Fk.heldItems(yk) : ("recent" === bk ? Nk : Hk).filter((kk => {
        const Fk = Ok(kk);
        return ("all" === bk || "recent" === bk || function(kk) {
          return Aa(kk) ? "farm" : hV.test(kk) ? "nuclear" : CV.test(kk) ? "bars" : ZV.test(kk) ? "farm" : qV.test(kk) ? "lR" : PV.has(kk) ? "parts" : pV.test(kk) ? "farm" : "other"
        }(kk) === bk) && ("" === uk || Fk.toLowerCase().includes(uk)) && ("" === Vk || Fk.toUpperCase().startsWith(Vk))
      })), gk = new Set(Hk.map((kk => Ok(kk).charAt(0).toUpperCase()))), Uk = kk => Sk ? Fk.heldAmount(kk) : Fk.amount(kk), ck = !Sk && "recent" !== bk && Nk.length > 0, Gk = function(kk, Fk) {
        return null !== kk && Fk.includes(kk) ? kk : null
      }(yk, ck ? [...Mk, ...Nk] : Mk), Tk = null === Gk ? 0 : Fk.amount(Gk), rk = null === Gk ? 0 : Uk(Gk), Dk = (0, Rk.useCallback)((kk => {
        fk((Fk => Fk === kk ? null : kk))
      }), []), zk = kk => rk > 0 || Sk && null === Gk && "fill" === kk && Mk.length > 0, Pk = Sk ? [
        ["one", ak("buildAFactory2Game:terminalStoreOne")],
        ["stack", ak("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", ak(null === Gk ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", ak("buildAFactory2Game:terminalTakeOne")],
        ["stack", ak("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", ak("buildAFactory2Game:terminalFill")]
      ], hk = Sk ? ak("buildAFactory2Game:terminalStoreEmpty") : "" !== Vk ? ak("buildAFactory2Game:terminalEmptyLetter", {
        letter: Vk
      }) : "" !== uk ? ak("buildAFactory2Game:terminalEmptySearch", {
        query: Ak
      }) : ak("buildAFactory2Game:terminalEmpty");
      return (0, Sa.jsx)(oX.e, {
        close: Bk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Sa.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsxs)("div", {
              children: [(0, Sa.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: ak(Fk.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Sa.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Sa.jsx)("span", {
                  className: Ot()({
                    Off: Sk
                  }),
                  children: ak("buildAFactory2Game:terminalSubtitle", {
                    count: String(Fk.siloCount())
                  })
                }), !Ek && (0, Sa.jsx)("span", {
                  className: Ot()({
                    Off: !Sk
                  }),
                  children: ak("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !Ek && (0, Sa.jsx)(rV.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: ak("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: ak("buildAFactory2Game:terminalModeStore")
              }],
              value: Sk ? "store" : "take",
              onChange: kk => {
                Wk("store" === kk), fk(null)
              },
              ariaLabel: ak("buildAFactory2Game:terminalModes")
            }), (0, Sa.jsx)(LX.k, {
              onClick: Bk
            })]
          }), (0, Sa.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Sa.jsxs)("div", {
              className: Ot()("Baf2TermTools", {
                Hidden: Sk
              }),
              children: [(0, Sa.jsx)("div", {
                ref: vk,
                className: Ot()("Baf2TermChips", {
                  MoreRight: ik
                }),
                onScroll: Yk,
                children: dk ? (0, Sa.jsxs)(Sa.Fragment, {
                  children: [(0, Sa.jsx)("button", {
                    type: "button",
                    "aria-label": ak("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      sk(!1), Jk("")
                    },
                    children: "\u2190"
                  }), [...gk].sort().map((kk => (0, Sa.jsx)("button", {
                    type: "button",
                    className: Ot()({
                      On: Vk === kk
                    }),
                    onClick: () => {
                      Jk(Vk === kk ? "" : kk)
                    },
                    children: kk
                  }, kk)))]
                }) : (0, Sa.jsxs)(Sa.Fragment, {
                  children: [(0, Sa.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      sk(!0)
                    },
                    children: ak("buildAFactory2Game:terminalLetters")
                  }), zV.map((kk => (0, Sa.jsx)("button", {
                    type: "button",
                    className: Ot()({
                      On: bk === kk
                    }),
                    onClick: () => {
                      wk(kk)
                    },
                    children: ak(DV[kk])
                  }, kk)))]
                })
              }), !Xk && (0, Sa.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Ak,
                placeholder: ak("buildAFactory2Game:terminalSearch"),
                "aria-label": ak("buildAFactory2Game:terminalSearch"),
                onChange: kk => {
                  ek(kk.target.value)
                },
                onKeyDown: kk => {
                  kk.stopPropagation()
                }
              }), (0, Sa.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": ak("buildAFactory2Game:terminalResort"),
                title: ak("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  Fk.resort()
                },
                children: "\u21c5"
              })]
            }), ck && (0, Sa.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Sa.jsx)("span", {
                children: ak(DV.recent)
              }), Nk.map((kk => (0, Sa.jsx)(KV, {
                item: kk,
                name: Ok(kk),
                amount: Fk.amount(kk),
                selected: Gk === kk,
                small: !0,
                onPick: Dk
              }, kk)))]
            }), (0, Sa.jsx)("div", {
              className: "Baf2TermTiles",
              children: Mk.length > 0 ? Mk.map((kk => (0, Sa.jsx)(KV, {
                item: kk,
                name: Ok(kk),
                amount: Uk(kk),
                selected: Gk === kk,
                onPick: Dk
              }, kk))) : (0, Sa.jsx)("p", {
                className: "Baf2TermEmpty",
                children: hk
              })
            }), (0, Sa.jsxs)("div", {
              className: Ot()("Baf2TermActions", {
                Hidden: Sk && 0 === Mk.length
              }),
              children: [(0, Sa.jsx)("span", {
                className: "Baf2TermPicked",
                children: Ek ? (0, Sa.jsxs)(Sa.Fragment, {
                  children: [null !== Gk && Tk > 0 ? Ok(Gk) : ak("buildAFactory2Game:terminalVisiting"), (0, Sa.jsx)("small", {
                    children: ak("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Gk ? (0, Sa.jsxs)(Sa.Fragment, {
                  children: [Ok(Gk), (0, Sa.jsx)("small", {
                    children: ak("buildAFactory2Game:terminalStored", {
                      amount: Tk.toLocaleString()
                    })
                  })]
                }) : ak(Sk ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !Ek && Pk.map((kk => {
                let [Bk, Rk] = kk;
                const ak = "fill" === Bk ? LX.o : LX.g;
                return (0, Sa.jsx)(ak, {
                  className: "Baf2TermTake",
                  disabled: !zk(Bk),
                  onClick: () => {
                    (kk => {
                      zk(kk) && tk(null === Gk ? Fk.putAll() : Sk ? Fk.put(kk, Gk) : Fk.take(kk, Gk))
                    })(Bk)
                  },
                  children: Rk
                }, Bk)
              }))]
            })]
          })]
        })
      })
    }

    function jV(kk) {
      let {
        kind: Fk,
        icon: Bk,
        label: Rk,
        number: tk,
        preview: ak,
        note: Xk,
        tone: bk = null,
        share: wk,
        onExplain: dk
      } = kk;
      return (0, Sa.jsxs)("button", {
        type: "button",
        className: Ot()("NxLane", Fk, {
          Warn: "warn" === bk,
          Danger: "danger" === bk
        }),
        onClick: dk,
        children: [(0, Sa.jsxs)("span", {
          className: "NxLaneHead",
          children: [Bk, (0, Sa.jsx)("span", {
            className: "NxLaneLabel",
            children: Rk
          })]
        }), (0, Sa.jsxs)("span", {
          className: "NxLaneNum",
          children: [tk, ak && (0, Sa.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", ak]
          })]
        }), (0, Sa.jsx)("span", {
          className: "NxLaneNote",
          children: Xk
        }), void 0 !== wk && (0, Sa.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, wk)) + "%"
          }
        })]
      })
    }

    function lV(kk) {
      let {
        kind: Fk,
        step: Bk,
        short: Rk,
        planned: tk
      } = kk;
      return (0, Sa.jsx)("i", {
        className: Ot()("NxPipe", Fk, `Step${Bk}`, {
          Short: Rk,
          Planned: tk
        }),
        "aria-hidden": "true"
      })
    }

    function nV(kk) {
      let {
        max: Fk,
        bands: Bk,
        ticks: Rk,
        now: tk,
        settle: ak,
        settleTone: Xk,
        onExplain: bk
      } = kk;
      const wk = kk => Math.max(0, Math.min(Fk, kk)) / Fk * 100 + "%";
      let dk = 0;
      return (0, Sa.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: bk,
        children: [(0, Sa.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [Bk.map((kk => {
            const Fk = {
              bottom: wk(dk),
              height: `calc(${wk(kk.upTo)} - ${wk(dk)})`
            };
            return dk = kk.upTo, (0, Sa.jsx)("i", {
              className: Ot()("NxGaugeBand", kk.kind),
              style: Fk
            }, kk.kind)
          })), null !== tk && (0, Sa.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: wk(tk)
            }
          }), void 0 !== ak && null !== ak && (0, Sa.jsx)("i", {
            className: Ot()("NxGaugeSettle", {
              Bad: "bad" === Xk
            }),
            style: {
              bottom: wk(ak)
            }
          })]
        }), (0, Sa.jsx)("span", {
          className: "NxGaugeTicks",
          children: Rk.map((kk => (0, Sa.jsx)("small", {
            style: {
              bottom: wk(kk)
            },
            children: kk
          }, kk)))
        })]
      })
    }

    function IV(kk) {
      const [Fk, Bk] = (0, Rk.useState)(null), [tk, ak] = (0, Rk.useState)((() => {
        try {
          return null === window.localStorage.getItem(kk)
        } catch {
          return !1
        }
      })), Xk = (0, Rk.useRef)(null);
      (0, Rk.useEffect)((() => () => {
        null !== Xk.current && clearTimeout(Xk.current)
      }), []);
      const bk = (0, Rk.useCallback)((Fk => {
          Bk(Fk), ak(!1);
          try {
            window.localStorage.setItem(kk, "1")
          } catch {}
          null !== Xk.current && clearTimeout(Xk.current), Xk.current = setTimeout((() => {
            Xk.current = null, Bk(null)
          }), 5e3)
        }), [kk]),
        wk = (0, Rk.useCallback)(((Fk, Bk) => {
          const Rk = `${kk}:${Fk}`;
          try {
            if (null !== window.localStorage.getItem(Rk)) return;
            window.localStorage.setItem(Rk, "1")
          } catch {
            return
          }
          bk(Bk)
        }), [bk, kk]);
      return {
        explained: Fk,
        hinting: tk,
        explain: bk,
        explainOnce: wk
      }
    }

    function QV(kk) {
      let {
        text: Fk,
        tone: Bk,
        explained: Rk
      } = kk;
      return (0, Sa.jsxs)("p", {
        className: Ot()("NxStatus", null === Rk ? Bk : "Explain"),
        "aria-live": "polite",
        children: [null !== Rk && (0, Sa.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Rk && void 0 !== Rk ? Rk : Fk]
      })
    }
    const kJ = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function FJ(kk, Fk) {
      const Bk = Number(kk[Fk]);
      return 1 === Bk || 2 === Bk || 3 === Bk ? Bk : 0
    }

    function BJ(kk) {
      return !!Lw("reactor", kk.baf2RxNeed) || void 0 !== kk.baf2RxLayout && kk.baf2RxNeed.some((kk => {
        let [Fk, Bk] = kk;
        return Bk > 0 && kJ.includes(Fk)
      }))
    }
    const RJ = "buildAFactory2Game:";

    function tJ(kk) {
      let {
        status: Fk,
        store: Bk,
        busy: Rk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)();
      return function(kk) {
        return 0 !== (kk.baf2RxFlags & fF) && (!kk.baf2RxFormed || void 0 !== kk.baf2RxLayout)
      }(Fk) ? (0, Sa.jsx)(LX.o, {
        disabled: !BJ(Fk) || Rk,
        onClick: () => {
          Bk.tap("fill", (() => {
            Bk.send("fill")
          }))
        },
        children: tk(void 0 !== Fk.baf2RxLayout ? `${RJ}rxFillLayout` : `${RJ}rxFill`)
      }) : null
    }

    function aJ(kk) {
      let {
        status: Fk,
        store: Bk,
        readOnly: tk,
        bare: ak = !1
      } = kk;
      const {
        t: Xk
      } = (0, Ht.x)(), bk = Fk.baf2RxLayout, [wk, dk, sk] = Fk.baf2RxDims, Vk = (0, Rk.useMemo)((() => {
        if (void 0 === bk) return 0;
        const kk = Uint8Array.from(bk, ((kk, Fk) => FJ(bk, Fk)));
        return Fw([wk - 2, dk - 2, sk - 2], kk).max
      }), [bk, wk, dk, sk]);
      return void 0 === bk ? null : (0, Sa.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!ak && (0, Sa.jsx)("span", {
          className: "Baf2RxHint",
          children: Xk(`${RJ}rxLayoutLine`, {
            amount: Mw(Vk)
          })
        }), !tk && (0, Sa.jsx)(LX.g, {
          onClick: () => {
            Bk.send("layout", 0)
          },
          children: Xk(`${RJ}rxLayoutHide`)
        })]
      })
    }
    const XJ = "buildAFactory2Game:",
      bJ = {
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

    function wJ(kk) {
      let {
        id: Fk,
        title: Bk,
        body: Rk,
        bodyParams: tk,
        yes: ak,
        cancel: Xk,
        confirm: bk
      } = kk;
      const {
        t: wk
      } = (0, Ht.x)();
      return (0, Sa.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": Fk,
        children: [(0, Sa.jsx)("h3", {
          id: Fk,
          children: wk(Bk)
        }), (0, Sa.jsx)("p", {
          children: wk(Rk, tk)
        }), (0, Sa.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Sa.jsx)(LX.j, {
            onClick: Xk,
            children: wk(`${XJ}rxCancel`)
          }), (0, Sa.jsx)(LX.J, {
            onClick: bk,
            children: wk(ak)
          })]
        })]
      })
    }

    function dJ(kk) {
      const [Fk, Bk] = (0, Rk.useState)((() => kk.get()));
      return (0, Rk.useEffect)((() => (Bk(kk.get()), kk.subscribe((() => {
        Bk(kk.get())
      })))), [kk]), Fk
    }

    function sJ(kk) {
      let {
        kind: Fk,
        cap: Bk,
        busy: tk = !1,
        whyNot: ak = null,
        apart: Xk
      } = kk;
      const {
        t: bk
      } = (0, Ht.x)(), [wk, dk] = (0, Rk.useState)(!1), sk = null !== ak, Vk = (0, Rk.useRef)(null);
      if ((0, Rk.useEffect)((() => {
          sk && dk(!1)
        }), [sk]), (0, Rk.useLayoutEffect)((() => {
          var kk;
          const Fk = null === (kk = Vk.current) || void 0 === kk ? void 0 : kk.firstElementChild;
          sk ? null === Fk || void 0 === Fk || Fk.setAttribute("aria-disabled", "true") : tk || null === Fk || void 0 === Fk || Fk.removeAttribute("aria-disabled")
        })), !wk || sk) return (0, Sa.jsx)("span", {
        ref: Vk,
        className: "Baf2RxApartWrap",
        children: (0, Sa.jsx)(LX.j, {
          disabled: tk,
          className: Ot()({
            Baf2RxNotYet: sk
          }),
          onClick: () => {
            ak ? ak() : dk(!0)
          },
          children: bk(`${XJ}rxApart`)
        })
      });
      const Jk = "battery" === Fk,
        Ak = void 0 === Bk ? `${XJ}batApartConfirmBodyPlan` : `${XJ}batApartConfirmBody`;
      return (0, Sa.jsx)(wJ, {
        id: `baf2ApartTitle_${Fk}`,
        title: Jk ? `${XJ}batApartConfirmTitle` : `${XJ}rxApartConfirmTitle`,
        body: Jk ? Ak : `${XJ}rxApartConfirmBody`,
        bodyParams: void 0 === Bk ? void 0 : {
          cap: Bk
        },
        yes: `${XJ}rxApart`,
        cancel: () => {
          dk(!1)
        },
        confirm: () => {
          dk(!1), Xk()
        }
      })
    }

    function VJ(kk) {
      let {
        mood: Fk,
        big: Bk
      } = kk;
      const Rk = bJ[Fk],
        tk = [];
      return Rk.rows.forEach(((kk, Fk) => {
        for (let Bk = 0; Bk < kk.length; Bk++) "." !== kk[Bk] && tk.push((0, Sa.jsx)("rect", {
          x: Bk + 1,
          y: Fk + 1,
          width: 1,
          height: 1,
          fill: "w" === kk[Bk] ? "#8fd3ff" : Rk.colour
        }, `${Bk},${Fk}`))
      })), (0, Sa.jsxs)("svg", {
        className: Ot()("Baf2RxFace", {
          Big: Bk,
          Alarm: "alarm" === Fk
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Sa.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Sa.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), tk]
      })
    }

    function JJ(kk) {
      return va(kk, "+").replace("+", "")
    }

    function AJ(kk) {
      let {
        kind: Fk,
        dims: Bk,
        cap: Rk,
        disabled: tk,
        compact: ak,
        resize: Xk
      } = kk;
      const {
        t: bk
      } = (0, Ht.x)(), {
        min: wk,
        max: dk
      } = PB(Fk), sk = Math.min(Rk, dk), Vk = [`${XJ}rxWide`, `${XJ}rxTall`, `${XJ}rxDeep`], Jk = {
        w: String(Bk[0]),
        h: String(Bk[1]),
        d: String(Bk[2]),
        blocks: String(uw(Fk, Bk))
      };
      return (0, Sa.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Sa.jsx)("div", {
          className: "Baf2RxSteppers",
          children: Bk.map(((kk, Fk) => {
            const ak = Rk => {
                const tk = [Bk[0], Bk[1], Bk[2]];
                tk[Fk] = kk + Rk, Xk(tk)
              },
              Jk = kk >= sk;
            return (0, Sa.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Sa.jsx)("button", {
                type: "button",
                "aria-label": bk(`${XJ}rxSmaller`),
                disabled: tk || kk <= wk,
                onClick: () => {
                  ak(-1)
                },
                children: "\u2212"
              }), (0, Sa.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [kk, (0, Sa.jsx)("small", {
                  children: bk(Vk[Fk])
                })]
              }), (0, Sa.jsx)("button", {
                type: "button",
                "aria-label": bk(`${XJ}rxBigger`),
                disabled: tk || Jk,
                onClick: () => {
                  ak(1)
                },
                children: Jk && Rk < dk ? "\ud83d\udd12" : "+"
              })]
            }, Vk[Fk])
          }))
        }), !ak && (0, Sa.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === Fk ? bk(`${XJ}rxSizeLine`, {
            ...Jk,
            water: String(Hw(Bk))
          }) : bk(`${XJ}batSizeLine`, Jk)
        })]
      })
    }

    function eJ(kk) {
      let {
        on: Fk,
        label: Bk,
        disabled: Rk,
        locked: tk,
        pending: ak,
        toggle: Xk
      } = kk;
      return (0, Sa.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": Fk,
        disabled: Rk,
        "aria-disabled": tk || void 0,
        className: Ot()("Baf2RxSwitch", {
          On: Fk,
          Locked: tk,
          Pending: ak
        }),
        onClick: Xk,
        children: [(0, Sa.jsx)("span", {
          className: "Baf2RxKnob"
        }), Bk]
      })
    }
    const yJ = "buildAFactory2Game:",
      fJ = .95;

    function mJ(kk, Fk) {
      return 0 !== (kk.baf2RxFlags & Fk)
    }

    function WJ(kk) {
      return "cryo" === kk ? Qk.k : Qk.n
    }

    function vJ(kk) {
      var Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk;
      return kk.baf2RxCryo ? {
        EA: "cryo",
        usePerS: null !== (tk = kk.baf2RxCryoUse) && void 0 !== tk ? tk : 0,
        needPerS: null !== (ak = kk.baf2RxCryoNeed) && void 0 !== ak ? ak : 0,
        inPerS: null !== (Xk = kk.baf2RxCryoIn) && void 0 !== Xk ? Xk : 0,
        stored: null !== (bk = kk.baf2RxCryoStored) && void 0 !== bk ? bk : 0,
        makersShort: null !== (wk = kk.baf2RxMixersShort) && void 0 !== wk ? wk : 0,
        waterBeside: null !== (dk = kk.baf2RxWaterUse) && void 0 !== dk ? dk : 0,
        pct: kk.baf2RxWater
      } : {
        EA: "water",
        usePerS: null !== (Fk = kk.baf2RxWaterUse) && void 0 !== Fk ? Fk : 0,
        needPerS: null !== (Bk = kk.baf2RxWaterNeed) && void 0 !== Bk ? Bk : 0,
        inPerS: kk.baf2RxWaterIn,
        stored: kk.baf2RxWaterStored,
        makersShort: null !== (Rk = kk.baf2RxCondensersShort) && void 0 !== Rk ? Rk : 0,
        waterBeside: 0,
        pct: kk.baf2RxWater
      }
    }

    function iJ(kk) {
      const Fk = "running" === kk.baf2RxState || "idle" === kk.baf2RxState;
      return kk.baf2RxFormed && kk.baf2RxTarget !== kk.baf2RxThrottle && Fk ? YJ(kk, kk.baf2RxTarget) : null
    }

    function YJ(kk, Fk) {
      const [Bk, Rk, tk, , , , ak, , Xk] = kk.baf2RxStats, bk = mJ(kk, eF), wk = vJ(kk), dk = wk.pct / 100, {
        gen: sk,
        out: Vk,
        load: Jk
      } = function(kk, Fk, Bk, Rk) {
        const tk = Bk ? xb : 1,
          ak = Math.min(kk.fuelHeat * tk * Math.max(0, Math.min(1, Fk)), kk.size * tk);
        return {
          gen: ak,
          out: ak,
          load: Jw(ak, kk.cooling, Rk)
        }
      }({
        fuelHeat: Bk,
        cooling: Rk,
        size: tk
      }, Fk / 100, bk, dk), Ak = ew(ak || kw(...kk.baf2RxDims)), ek = kk.baf2RxHeat, yk = Math.abs(Jk - ek), fk = function(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Qk.n;
        const ak = Bk ? xb : 1,
          Xk = Math.min(kk.fuelHeat * ak * Fk / 100, kk.size * ak),
          bk = Xk,
          wk = kk.fuelHeat * ak,
          dk = kk.cooling * Vw(Rk.pct / 100),
          sk = wk > 0 && dk < kk.size * ak ? Math.floor(100 * dk / wk) : 100,
          Vk = Xk * tk - Rk.inPerS;
        return {
          out: bk,
          hotAbove: sk >= 100 ? null : Math.max(0, sk),
          waterSecs: Rk.pct >= 100 && Vk > 1e-6 ? Math.max(0, Rk.stored) / Vk : null
        }
      }({
        fuelHeat: Bk,
        cooling: Rk,
        size: tk
      }, Fk, bk, {
        pct: wk.pct,
        inPerS: wk.inPerS,
        stored: wk.stored
      }, WJ(wk.EA));
      return {
        pct: Fk,
        out: Vk,
        coolPerS: sk * WJ(wk.EA),
        pelletsPerMin: Xk > 0 ? Vk / Xk * 60 : 0,
        settle: Jk,
        settleS: yk > 2 ? Ak * Math.log(yk / 2) : 0,
        overheatS: Jk > 100 && ek < 100 ? Ak * Math.log((Jk - ek) / (Jk - 100)) : null,
        hotAbove: fk.hotAbove,
        coolantSecs: fk.waterSecs
      }
    }

    function oJ(kk) {
      return kk.baf2RxThrottle <= 0 && "running" !== kk.baf2RxState ? 0 : YJ(kk, kk.baf2RxTarget).pelletsPerMin / 60
    }

    function LJ(kk, Fk) {
      if (kk <= 0 || Fk <= 0) return 0;
      const Bk = kk / Fk;
      return Bk < .25 ? 1 : Bk < .5 ? 2 : Bk < .8 ? 3 : 4
    }

    function OJ(kk, Fk) {
      const Bk = {};
      for (const [Rk, tk] of Object.entries(Fk.params)) Bk[Rk] = "time" === Rk ? oa(kk, tk) : "amount" === Rk ? Mw(tk) : String(Math.round(tk));
      return kk(Fk.key, Bk)
    }

    function EJ(kk, Fk) {
      return {
        key: `${yJ}${kk}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: Fk
      }
    }

    function SJ(kk) {
      var Fk;
      const Bk = mJ(kk, eF),
        Rk = "running" === kk.baf2RxState,
        tk = Ww(kk),
        ak = kk.baf2RxHeat;
      var Xk;
      if (Rk && ak > pb) return {
        key: null !== (Xk = tk.fix) && void 0 !== Xk ? Xk : `${yJ}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const bk = Rk ? YJ(kk, kk.baf2RxTarget).coolantSecs : null,
        wk = "cryo" === vJ(kk).EA;
      if (null !== bk && bk >= 1 && bk <= 30) return EJ(wk ? "rxWarnCryo" : "rxWarnWater", "bad");
      const dk = Ib(kw(...kk.baf2RxDims)).waste,
        sk = Rk ? Ow(kk, dk, oJ(kk)).fullInS : null;
      if (null !== sk && sk <= 120 && kk.baf2RxWaste >= .5 * dk) return EJ("rxWarnWaste", "warn");
      if (null !== bk && bk >= 1) return EJ(wk ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: bk
      });
      const Vk = "noWater" === kk.baf2RxState && ak > pb;
      if (kk.baf2RxDamage >= 1 && !Vk) return EJ("rxDamagedHeals", "warn", {
        pct: kk.baf2RxDamage
      });
      if (kk.baf2RxCryoCut) return EJ("rxFix_cryoCut", "warn");
      const Jk = vJ(kk);
      if ("noWater" === kk.baf2RxState && "cryo" === Jk.EA) return EJ("noWater" === kk.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Ak = tk.fix === `${yJ}rxFix_scramCool` || "idle" === kk.baf2RxState && kk.baf2RxTarget <= 0;
      if (Ak && kk.baf2RxFuel <= 0) return EJ("rxFix_noFuel", "warn");
      if (Ak && kk.baf2RxWaterIn <= 0 && (null !== (Fk = kk.baf2RxCryoIn) && void 0 !== Fk ? Fk : 0) <= 0) return EJ("rxFix_noWater", "warn");
      const ek = tk.fix === `${yJ}rxFix_scramCool` ? iw(kk) : null;
      if (null !== ek) return {
        key: ek.key,
        params: {
          amount: ek.amount
        },
        tone: "info"
      };
      if ("running" !== kk.baf2RxState && "idle" !== kk.baf2RxState && null !== tk.fix) return {
        key: tk.fix,
        params: {},
        tone: "scram" === kk.baf2RxState ? "info" : Vk ? "bad" : "warn"
      };
      var yk;
      if ("idle" === kk.baf2RxState && kk.baf2RxTarget <= 0) return {
        key: null !== (yk = tk.fix) && void 0 !== yk ? yk : `${yJ}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const fk = kk.baf2RxCryoStarved;
      if ("cryo" === Jk.EA && fk && Jk.needPerS > 0 && Jk.usePerS < fJ * Jk.needPerS) return EJ("noWater" === fk ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const mk = "cryo" === Jk.EA,
        Wk = Jk.needPerS > 0 && Jk.usePerS < fJ * Jk.needPerS;
      if (mk ? Wk || Jk.makersShort > 0 && Jk.pct < 100 : Jk.pct < 100) {
        const Fk = mk && Wk ? Math.floor(100 * Jk.usePerS / Jk.needPerS) : Math.min(100, Jk.pct);
        if (Jk.makersShort > 0) {
          return EJ(`${mk?"rxCryoShortLine":"rxWaterShortLine"}${1===Jk.makersShort?"One":""}${!mk&&kk.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: Fk,
            count: Jk.makersShort
          })
        }
        return EJ(mk ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: Fk
        })
      }
      const vk = function(kk) {
        const [Fk, Bk, Rk] = kk.baf2RxStats, tk = vJ(kk), ak = Aw({
          fuelHeat: Fk,
          cooling: Bk,
          size: Rk
        }, "cryo" === tk.EA ? Qk.f : 1, !0);
        return Math.max(0, ak * WJ(tk.EA) - tk.inPerS)
      }(kk);
      if (Bk && vk > 0) return EJ("cryo" === Jk.EA ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(vk)
      });
      if (ak >= dw) return EJ("rxHotLine", "warn");
      const ik = YJ(kk, kk.baf2RxTarget);
      var Yk;
      if (null !== ik.overheatS) return EJ("rxWillOverheat", "bad", {
        pct: kk.baf2RxTarget,
        time: ik.overheatS,
        safe: null !== (Yk = ik.hotAbove) && void 0 !== Yk ? Yk : 100
      });
      if (Math.abs(ik.settle - ak) >= 3) return EJ("rxSettling", "info", {
        pct: kk.baf2RxTarget,
        heat: Math.round(ik.settle),
        time: ik.settleS
      });
      const Lk = iw(kk);
      if (null !== Lk) return {
        key: Lk.key,
        params: {
          amount: Lk.amount
        },
        tone: "info"
      };
      const Ok = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== Fk && ("running" !== Fk || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === kk.rods ? `${yw}rxLimitNoRods` : `${yw}rxLimit_${ww(kk)}`
      }({
        rods: kk.baf2RxStats[3],
        ...vw(kk)
      }, kk.baf2RxState, kk.baf2RxOut >= fJ * kk.baf2RxMaxNow, !1);
      if (Ok === `${yJ}rxLimit_size`) {
        const [Fk, , Bk, Rk] = kk.baf2RxStats, tk = Rk > 0 && Fk > 0 ? Math.ceil(Bk / (Fk / Rk) - 1e-9) : Rk, ak = kk.baf2RxDims.every((kk => kk >= PB("reactor").max));
        if (tk < Rk) return EJ(ak ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: tk,
          have: Rk
        });
        if (ak) return EJ("rxLimit_sizeMax", "info")
      }
      return null !== Ok ? {
        key: Ok,
        params: {},
        tone: "info"
      } : EJ("rxSteady", "ok", {
        pct: kk.baf2RxTarget
      })
    }

    function NJ(kk) {
      var Fk;
      if (kk.melted) return EJ("rxMeltedBody", "bad");
      if (-1 === kk.bad) return EJ("rxFix_noRoom", "warn");
      if (kk.bad > 0) return EJ(1 === kk.bad ? "rxBadOne" : "rxBad", "warn", {
        count: kk.bad
      });
      if (kk.left > 0) {
        const Fk = 1 === kk.left ? "One" : "";
        return EJ(kk.canFill ? `rxPlanLeft${Fk}` : `rxPlanLeftNoFill${Fk}`, "info", {
          count: kk.left
        })
      }
      if (0 === kk.rods) return EJ("rxLimitNoRods", "warn");
      const Bk = null !== (Fk = kk.idle) && void 0 !== Fk ? Fk : 0;
      return Bk > 0 ? EJ(1 === Bk ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: Bk
      }) : EJ("rxPlanReady", "ok")
    }

    function HJ(kk) {
      return Math.floor(Math.max(0, kk[1] - 1) / 2)
    }

    function uJ(kk) {
      if (kk >= Rw && kk < tw) {
        const Fk = kk - Rw;
        return {
          key: 0 === Fk ? `${yJ}rxWhy_rodAlone` : 1 === Fk ? `${yJ}rxWhy_rodOne` : `${yJ}rxWhy_rod`,
          params: {
            count: String(Fk),
            heat: String(rb * (1 + Db * Fk))
          }
        }
      }
      return kk === tw ? {
        key: `${yJ}rxWhy_channel`,
        params: {
          amount: String(Pb)
        }
      } : kk === aw ? {
        key: `${yJ}rxWhy_deadChannel`,
        params: {}
      } : kk === Xw ? {
        key: `${yJ}rxWhy_graphite`,
        params: {}
      } : {
        key: `${yJ}rxWhy_core`,
        params: {}
      }
    }
    const MJ = "buildAFactory2Game:";

    function gJ(kk, Fk) {
      return 0 !== (kk.baf2RxFlags & Fk)
    }

    function UJ(kk) {
      let {
        status: Fk,
        pending: Bk,
        store: Rk,
        explain: tk
      } = kk;
      const {
        t: ak
      } = (0, Ht.x)(), Xk = gJ(Fk, AF), bk = Fk.baf2RxTarget, wk = Fk.baf2RxThrottle, dk = function(kk) {
        return {
          press: () => {
            kk.throttlePress()
          },
          drag: Fk => {
            kk.throttleDrag(Fk)
          },
          release: () => {
            kk.throttleRelease()
          }
        }
      }(Rk), sk = null === (Vk = YJ(Fk, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Vk - 10),
        red: Vk
      };
      var Vk;
      return (0, Sa.jsxs)("div", {
        className: Ot()("Baf2RxThrottle", {
          Off: Xk
        }),
        onClick: () => {
          Xk && tk(`${MJ}rxWhy_startFirst`)
        },
        children: [(0, Sa.jsx)("span", {
          className: "HideNarrow",
          children: ak(`${MJ}rxThrottle`)
        }), (0, Sa.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Sa.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: bk,
            disabled: Xk,
            style: Xk ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": ak(`${MJ}rxThrottle`),
            onPointerDown: () => {
              dk.press();
              const kk = () => {
                window.removeEventListener("pointerup", kk), window.removeEventListener("pointercancel", kk), dk.release()
              };
              window.addEventListener("pointerup", kk), window.addEventListener("pointercancel", kk)
            },
            onKeyUp: dk.release,
            onChange: kk => {
              dk.drag(Number(kk.target.value))
            }
          }), (0, Sa.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${sk.amber}%, #ffb020 ${sk.amber}% ${sk.red}%, #ff3b30 ${sk.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Sa.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${wk}% + ${8*(1-wk/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Sa.jsxs)("b", {
          children: [`${bk}%`, (0, Sa.jsx)("i", {
            className: Ot()("Baf2RxPendingDot", {
              On: Bk
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function cJ(kk) {
      let {
        status: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)(), Rk = YJ(Fk, Fk.baf2RxTarget), tk = vJ(Fk).EA, ak = Bk("cryo" === tk ? `${MJ}rxRateCryo` : `${MJ}rxRateWater`, {
        rate: JJ(Rk.coolPerS)
      }), Xk = Bk(`${MJ}rxChain`, {
        pct: String(Fk.baf2RxTarget),
        out: Mw(Rk.out),
        heat: String(Math.round(Rk.settle)),
        coolant: ak
      }), bk = null !== Rk.coolantSecs ? Rk.coolantSecs >= 1 ? Bk("cryo" === tk ? `${MJ}rxThrottleCryoOut` : `${MJ}rxThrottleWaterOut`, {
        time: oa(Bk, Rk.coolantSecs)
      }) : Bk("cryo" === tk ? `${MJ}rxThrottleCryoDry` : `${MJ}rxThrottleWaterDry`) : null;
      return (0, Sa.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Xk, null !== bk ? (0, Sa.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", bk]
        }) : (0, Sa.jsxs)("span", {
          children: [" \xb7 ", Bk(`${MJ}rxChainPellets`, {
            amount: gw(Rk.pelletsPerMin)
          })]
        })]
      })
    }

    function GJ(kk) {
      let {
        view: Fk,
        store: Bk,
        explain: tk,
        explainOnce: ak
      } = kk;
      const {
        t: Xk
      } = (0, Ht.x)(), {
        status: bk
      } = Fk, [wk, dk] = (0, Rk.useState)(!1), sk = gJ(bk, AF), Jk = gJ(bk, eF), Ak = !gJ(bk, mF), ek = bk.baf2RxHeat > 100;
      return (0, Sa.jsxs)(Sa.Fragment, {
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Sa.jsx)(UJ, {
            status: bk,
            pending: Fk.throttlePending,
            store: Bk,
            explain: tk
          }), (0, Sa.jsx)(eJ, {
            on: Jk,
            label: Jk ? Xk(`${MJ}rxOdLeft`, {
              time: oa(Xk, bk.baf2RxOdLeft)
            }) : Xk(`${MJ}rxOverdrive`),
            locked: Ak,
            pending: 0 !== (Fk.pendingFlags & eF),
            toggle: () => {
              Ak ? tk(`${MJ}rxOverdriveTier`, {
                amount: String(Vk(13))
              }) : Jk ? Bk.setFlag(eF, !1) : Fk.odConfirmed ? Bk.setFlag(eF, !0) : dk(!0)
            }
          }), sk || Fk.startGuard ? (0, Sa.jsx)(LX.v, {
            disabled: Fk.busy.has("start") || Fk.startGuard,
            onClick: () => {
              Bk.tap("start", (() => {
                Bk.setFlag(AF, !1)
              }))
            },
            children: Xk(Fk.startGuard ? `${MJ}rxStarting` : `${MJ}rxStart`)
          }) : (0, Sa.jsx)("span", {
            className: Ot()("Baf2RxScram", {
              Pulse: ek
            }),
            children: (0, Sa.jsx)(LX.J, {
              onClick: () => {
                Bk.shutDown()
              },
              children: Xk(`${MJ}rxScram`)
            })
          })]
        }), (0, Sa.jsx)(cJ, {
          status: bk
        }), wk && (0, Sa.jsx)(wJ, {
          id: "baf2RxOdTitle",
          title: `${MJ}rxOdConfirmTitle`,
          body: `${MJ}rxOdConfirmBody`,
          yes: `${MJ}rxOdConfirm`,
          cancel: () => {
            dk(!1)
          },
          confirm: () => {
            dk(!1), Bk.tap("odConfirm", (() => {
              Bk.confirmOverdrive(), Bk.setFlag(eF, !0)
            })), ak(`${MJ}rxWhy_overdrive`)
          }
        })]
      })
    }

    function TJ(kk) {
      let {
        view: Fk,
        store: Bk,
        keepSize: Rk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)(), {
        status: ak
      } = Fk;
      return (0, Sa.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Sa.jsx)(AJ, {
          kind: "reactor",
          dims: Fk.dims,
          cap: ak.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: kk => {
            Bk.resize(kk)
          }
        }), Rk ? (0, Sa.jsx)(LX.j, {
          onClick: Rk,
          children: tk(`${MJ}rxKeepSize`)
        }) : (0, Sa.jsxs)(Sa.Fragment, {
          children: [(0, Sa.jsx)(eJ, {
            on: Fk.guide,
            label: tk(`${MJ}rxGuide`),
            toggle: () => {
              Bk.toggleGuide()
            }
          }), gJ(ak, vF) && (0, Sa.jsx)(eJ, {
            on: Fk.starter,
            label: tk(`${MJ}rxStarter`),
            toggle: () => {
              Bk.toggleStarter()
            }
          }), (0, Sa.jsx)(tJ, {
            status: ak,
            store: Bk,
            busy: Fk.busy.has("fill")
          })]
        })]
      })
    }

    function rJ(kk) {
      let {
        need: Fk,
        kind: Bk = "reactor",
        explain: Rk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)(), ak = Fk.length <= 3, Xk = Fk.reduce(((kk, Fk) => {
        let [, Bk] = Fk;
        return kk + Bk
      }), 0);
      return (0, Sa.jsxs)("div", {
        className: Ot()("Baf2RxParts", {
          Compact: !ak
        }),
        onClick: () => {
          Rk("battery" === Bk ? `${MJ}batWhy_store` : `${MJ}rxShellHint`)
        },
        children: [Xk > 0 && (0, Sa.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Xk ? tk(`${MJ}rxBlocksOne`) : tk(`${MJ}rxBlocks`, {
            blocks: String(Xk)
          })
        }), 0 === Fk.length ? (0, Sa.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: tk("battery" === Bk ? `${MJ}batPartsDone` : `${MJ}rxShellDone`)
        }) : ow(Fk).map((kk => {
          let [Fk, Bk, Rk] = kk;
          const Xk = function(kk) {
            const Fk = Nw[kk];
            if (void 0 === Fk) return null;
            const [Bk, Rk, tk] = Ew[Fk].colour.map((kk => Math.round(255 * kk)));
            return `rgb(${Bk}, ${Rk}, ${tk})`
          }(Fk);
          return (0, Sa.jsxs)("span", {
            className: "Baf2RxChip",
            title: aa(tk, Fk),
            children: [(0, Sa.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Xk ? {
                visibility: "hidden"
              } : {
                background: Xk
              },
              title: tk(`${MJ}rxShopGhost`)
            }), (0, Sa.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Sa.jsx)(Mt.e, {
                itemName: Fk,
                amount: 0
              })
            }), (0, Sa.jsx)("span", {
              className: "Baf2RxChipName",
              children: ak ? `${Bk} ${bk=aa(tk,Fk),bk.replace(/^(Reactor|Battery) (?=\S)/,"")}` : Bk
            }), Rk >= Bk ? (0, Sa.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Sa.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: ak ? tk(`${MJ}rxShopShort`, {
                count: String(Bk - Rk)
              }) : "\u2212" + (Bk - Rk)
            })]
          }, Fk);
          var bk
        }))]
      })
    }
    const DJ = "buildAFactory2Game:";

    function zJ(kk) {
      var Fk, Bk, tk, ak, Xk, bk, wk;
      let {
        store: dk,
        close: sk
      } = kk;
      const {
        t: Vk
      } = (0, Ht.x)(), Jk = qX(), Ak = dJ(dk), {
        explained: ek,
        explain: yk
      } = IV("baf2RxExplained"), fk = (0, Rk.useCallback)(((kk, Fk) => {
        yk(Vk(kk, Fk))
      }), [yk, Vk]), mk = null === Ak || void 0 === Ak ? void 0 : Ak.status, Wk = !0 === (null === mk || void 0 === mk ? void 0 : mk.baf2BatReadOnly), vk = kk => {
        mk && Jk.send(JF(mk.baf2BatAt, kk))
      }, [ik, Yk, Lk] = null !== (Fk = null === Ak || void 0 === Ak ? void 0 : Ak.dims) && void 0 !== Fk ? Fk : [0, 0, 0], Ok = Mw(null !== (Bk = null === Ak || void 0 === Ak ? void 0 : Ak.KV) && void 0 !== Bk ? Bk : 0), Ek = !0 === (null === mk || void 0 === mk ? void 0 : mk.baf2BatFormed), Sk = null !== (tk = null === mk || void 0 === mk ? void 0 : mk.baf2BatStored) && void 0 !== tk ? tk : 0, Nk = Math.max(1, null !== (ak = null === mk || void 0 === mk ? void 0 : mk.baf2BatIslandCap) && void 0 !== ak ? ak : 1), Hk = Math.min(100, 100 * Sk / Nk), uk = null === mk || void 0 === mk ? void 0 : mk.baf2BatNetPerS, Mk = function(kk, Fk, Bk) {
        return Bk > 0 && Fk >= Bk ? "full" : void 0 !== kk && kk >= .05 ? "charging" : void 0 !== kk && kk <= -.05 && Fk > 0 ? "draining" : "steady"
      }(uk, Sk, null !== (Xk = null === mk || void 0 === mk ? void 0 : mk.baf2BatIslandCap) && void 0 !== Xk ? Xk : 0), gk = null !== (bk = null === mk || void 0 === mk ? void 0 : mk.baf2BatMadePerS) && void 0 !== bk ? bk : 0, Uk = null !== (wk = null === mk || void 0 === mk ? void 0 : mk.baf2BatUsedPerS) && void 0 !== wk ? wk : 0;
      let ck, Gk = {},
        Tk = "info";
      if (mk)
        if (Ek) "charging" === Mk ? (ck = `${DJ}batLine_charging`, Gk = {
          time: oa(Vk, (Nk - Sk) / Math.max(.05, null !== uk && void 0 !== uk ? uk : 0))
        }, Tk = "ok") : "draining" === Mk ? (ck = `${DJ}batLine_draining`, Gk = {
          time: oa(Vk, Sk / Math.max(.05, -(null !== uk && void 0 !== uk ? uk : 0)))
        }, Tk = "warn") : ck = "full" === Mk ? `${DJ}batLine_full` : Sk <= 0 && Uk > 0 ? `${DJ}batLine_empty` : `${DJ}batLine_steady`;
        else {
          var rk;
          const kk = NJ({
            left: mk.baf2BatNeed.reduce(((kk, Fk) => {
              let [, Bk] = Fk;
              return kk + Bk
            }), 0),
            bad: mk.baf2BatBad,
            rods: 1,
            canFill: !0 === mk.baf2BatCanFill,
            melted: !1
          });
          ck = kk.key, Gk = {
            count: String(null !== (rk = kk.params.count) && void 0 !== rk ? rk : 0)
          }, Tk = kk.tone
        }
      else ck = `${DJ}batLine_steady`;
      const Dk = Math.max(gk, Uk, 1);
      return (0, Sa.jsx)(oX.e, {
        close: sk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Sa.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Sa.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Sa.jsx)(Mt.e, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Sa.jsxs)("div", {
                children: [(0, Sa.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Vk(`${DJ}batTitle`)
                }), mk && (0, Sa.jsxs)("p", {
                  className: Ot()("Baf2RxSubtitle", {
                    good: Ek && "charging" === Mk,
                    warn: Ek && "draining" === Mk
                  }),
                  children: [ik, "\xd7", Yk, "\xd7", Lk, " \xb7 ", Vk(Ek ? `${DJ}batState_${Mk}` : `${DJ}rxSubPlanShort`)]
                })]
              })]
            }), (0, Sa.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [mk && !Wk && (0, Sa.jsx)(sJ, {
                kind: "battery",
                cap: Ek ? Ok : void 0,
                busy: null === Ak || void 0 === Ak ? void 0 : Ak.busy.has("apart"),
                apart: () => {
                  dk.tap("apart", (() => {
                    vk("apart")
                  }))
                }
              }), (0, Sa.jsx)(LX.k, {
                onClick: sk
              })]
            })]
          }), Ak && mk && (0, Sa.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Sa.jsxs)("div", {
              className: Ot()("Baf2RxFlow Baf2BatFlow", {
                Plan: !Ek
              }),
              children: [(0, Sa.jsx)(jV, {
                kind: "Power",
                label: Vk(`${DJ}batMade`),
                number: Ek ? `\u26a1 ${Mw(gk)}/s` : "\u2014",
                note: Vk(`${DJ}batMadeNote`),
                share: Ek ? gk / Dk : void 0,
                onExplain: () => {
                  fk(`${DJ}batWhy_made`)
                }
              }), (0, Sa.jsx)(lV, {
                kind: "Power",
                step: Ek ? LJ(gk, Dk) : 0,
                planned: !Ek
              }), (0, Sa.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  fk(`${DJ}batWhy_store`)
                },
                children: [(0, Sa.jsx)(nV, {
                  max: 100,
                  bands: [{
                    upTo: Ek ? Hk : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Sa.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Sa.jsx)("b", {
                    className: "Baf2BatStored",
                    children: Ek ? Vk(`${DJ}batStoredOf`, {
                      amount: Mw(Sk),
                      cap: Mw(mk.baf2BatIslandCap)
                    }) : Vk(`${DJ}batWillHold`, {
                      cap: Ok
                    })
                  }), (0, Sa.jsx)("span", {
                    children: Vk(`${DJ}batAdds`, {
                      cap: Ok
                    })
                  }), Ek && (0, Sa.jsx)("small", {
                    children: Vk(`${DJ}batBreakNote`, {
                      cap: Ok
                    })
                  })]
                })]
              }), (0, Sa.jsx)(lV, {
                kind: "Power",
                step: Ek ? LJ(Uk, Dk) : 0,
                planned: !Ek
              }), (0, Sa.jsx)(jV, {
                kind: "Power",
                label: Vk(`${DJ}batUsed`),
                number: Ek ? `\u26a1 ${Mw(Uk)}/s` : "\u2014",
                note: Vk(`${DJ}batUsedNote`),
                share: Ek ? Uk / Dk : void 0,
                onExplain: () => {
                  fk(`${DJ}batWhy_used`)
                }
              })]
            }), (0, Sa.jsx)(QV, {
              text: Vk(ck, Gk),
              tone: Tk,
              explained: ek
            }), Wk ? (0, Sa.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Vk(`${DJ}rxNotYours`)
            }) : !Ek && (0, Sa.jsxs)(Sa.Fragment, {
              children: [(0, Sa.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Sa.jsx)(AJ, {
                  kind: "battery",
                  dims: Ak.dims,
                  cap: mk.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: kk => {
                    dk.resize(kk)
                  }
                }), (0, Sa.jsx)(eJ, {
                  on: Ak.guide,
                  label: Vk(`${DJ}rxGuide`),
                  toggle: () => {
                    dk.toggleGuide()
                  }
                }), mk.baf2BatCanFill && (0, Sa.jsx)(LX.o, {
                  disabled: !Lw("battery", mk.baf2BatNeed) || Ak.busy.has("fill"),
                  onClick: () => {
                    dk.tap("fill", (() => {
                      vk("fill")
                    }))
                  },
                  children: Vk(`${DJ}rxFill`)
                })]
              }), (0, Sa.jsx)(rJ, {
                need: mk.baf2BatNeed,
                kind: "battery",
                explain: fk
              })]
            })]
          })]
        })
      })
    }
    const PJ = "buildAFactory2Game:",
      hJ = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function qJ(kk, Fk) {
      return kk === Bw ? null : Fk ? "#4a4440" : kk < tw ? hJ[kk - Rw] : kk === tw ? "#3fd0f0" : kk === aw ? "#2c3e4c" : "#55585e"
    }

    function CJ(kk) {
      let {
        inner: Fk,
        looks: Bk,
        layer: Rk,
        setLayer: tk,
        glow: ak,
        melted: Xk,
        explain: bk
      } = kk;
      const {
        t: wk
      } = (0, Ht.x)(), [dk, sk, Vk] = Fk, Jk = Math.max(0, Math.min(sk - 1, Rk)), Ak = [];
      for (let yk = 0; yk < Vk; yk++)
        for (let kk = 0; kk < dk; kk++) {
          var ek;
          const Fk = null !== (ek = Bk[(Jk * Vk + yk) * dk + kk]) && void 0 !== ek ? ek : Bw,
            Rk = qJ(Fk, Xk),
            tk = Fk >= Rw && Fk < tw;
          Ak.push(null === Rk ? (0, Sa.jsx)("circle", {
            cx: kk + .5,
            cy: yk + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${kk},${yk}`) : (0, Sa.jsx)("rect", {
            x: kk + .06,
            y: yk + .06,
            width: .88,
            height: .88,
            fill: Rk,
            opacity: tk && !Xk ? .5 + .5 * ak : 1,
            onClick: kk => {
              kk.stopPropagation();
              const Bk = uJ(Fk);
              bk(Bk.key, Bk.params)
            }
          }, `${kk},${yk}`))
        }
      return (0, Sa.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Sa.jsx)("svg", {
          className: Ot()("Baf2RxMapGrid", {
            Melted: Xk
          }),
          viewBox: `0 0 ${Math.max(1,dk)} ${Math.max(1,Vk)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": wk(`${PJ}rxWhy_core`),
          onClick: () => {
            bk(`${PJ}rxWhy_core`, {})
          },
          children: Ak
        }), sk > 1 && (0, Sa.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Sa.jsx)("button", {
            type: "button",
            "aria-label": wk(`${PJ}rxLayerDown`),
            disabled: Jk <= 0,
            onClick: () => {
              tk(Jk - 1)
            },
            children: "\u25bc"
          }), (0, Sa.jsxs)("span", {
            children: [(0, Sa.jsx)("span", {
              className: "HideNarrow",
              children: wk(`${PJ}rxLayer`, {
                n: String(Jk + 1),
                of: String(sk)
              })
            }), (0, Sa.jsx)("span", {
              className: "ShowNarrow",
              children: wk(`${PJ}rxLayerShort`, {
                n: String(Jk + 1),
                of: String(sk)
              })
            })]
          }), (0, Sa.jsx)("button", {
            type: "button",
            "aria-label": wk(`${PJ}rxLayerUp`),
            disabled: Jk >= sk - 1,
            onClick: () => {
              tk(Jk + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const ZJ = "buildAFactory2Game:",
      pJ = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Kb,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: mw,
        kind: "red"
      }],
      KJ = [50, Kb, 100];

    function xJ(kk) {
      let {
        stats: Fk,
        t: Bk,
        explain: Rk
      } = kk;
      const tk = ww(Fk),
        ak = Math.max(1, Fk.fuelHeat, Fk.cooling, Fk.size),
        Xk = [
          ["fuel", `${ZJ}rxBarRods`, Fk.fuelHeat],
          ["cooling", `${ZJ}rxBarCooling`, Fk.cooling],
          ["size", `${ZJ}rxBarSize`, Fk.size]
        ];
      return (0, Sa.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Rk(`${ZJ}rxWhy_bars`)
        },
        children: [(0, Sa.jsx)("span", {
          className: "Baf2RxMostLine",
          children: Bk(`${ZJ}rxMost`, {
            amount: Mw(Math.min(Fk.fuelHeat, Fk.cooling, Fk.size))
          })
        }), (0, Sa.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Xk.map((kk => {
            let [Fk, Rk, Xk] = kk;
            return (0, Sa.jsxs)("span", {
              className: Ot()("Baf2RxMostBar", Fk, {
                Low: Fk === tk
              }),
              children: [(0, Sa.jsx)("small", {
                children: Bk(Rk)
              }), (0, Sa.jsx)("i", {
                children: (0, Sa.jsx)("b", {
                  style: {
                    width: 100 * Xk / ak + "%"
                  }
                })
              })]
            }, Fk)
          }))
        })]
      })
    }

    function jJ(kk) {
      var Fk;
      let {
        view: Bk,
        heat: tk,
        settle: ak,
        settleLine: Xk,
        settleBad: bk,
        explain: wk
      } = kk;
      const {
        t: dk
      } = (0, Ht.x)(), {
        status: sk
      } = Bk, Vk = sk.baf2RxAt.join(","), [Jk, Ak] = (0, Rk.useState)((() => HJ(Bk.inner)));
      (0, Rk.useEffect)((() => {
        Ak(HJ(Bk.inner))
      }), [Vk, Bk.inner[1]]);
      const ek = null !== (Fk = Bk.plan) && void 0 !== Fk ? Fk : vw(sk),
        yk = Bk.plan ? Bk.plan.powerPerUnit : sk.baf2RxStats[8],
        fk = null === tk ? null : "alarm" === (mk = fw(sk)) ? "red" : "hot" === mk ? "hot" : "warm" === mk ? "warm" : "cold";
      var mk;
      const Wk = !sk.baf2RxFormed && function(kk, Fk) {
          return 0 !== (kk.baf2RxFlags & Fk)
        }(sk, yF),
        vk = sk.baf2RxDamage,
        ik = sk.baf2RxDamageTrend;
      return (0, Sa.jsxs)("div", {
        className: Ot()("Baf2RxCore", null !== fk && void 0 !== fk ? fk : "plan"),
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Sa.jsx)(CJ, {
            inner: Bk.inner,
            looks: Bk.looks,
            layer: Jk,
            setLayer: Ak,
            glow: sk.baf2RxFormed ? sk.baf2RxThrottle / 100 : 1,
            melted: Wk,
            explain: wk
          }), (0, Sa.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              wk(`${ZJ}rxWhy_heat`)
            },
            children: [null !== tk ? (0, Sa.jsxs)(Sa.Fragment, {
              children: [(0, Sa.jsx)("b", {
                children: dk(`${ZJ}rxHeatPct`, {
                  pct: String(tk)
                })
              }), (0, Sa.jsx)("span", {
                className: Ot()("Baf2RxBand", fk),
                children: dk(`${ZJ}rxBand_${fk}`)
              })]
            }) : (0, Sa.jsx)("b", {
              children: dk(`${ZJ}rxHeat`)
            }), null !== Xk && (0, Sa.jsx)("span", {
              className: Ot()("Baf2RxSettle", {
                Bad: bk
              }),
              children: Xk
            }), vk >= 1 && (0, Sa.jsxs)("span", {
              className: Ot()("Baf2RxDamage", ik),
              children: [dk(`${ZJ}rxDamageLine`, {
                pct: String(vk)
              }), " \xb7 ", dk(`${ZJ}rxDamage_${ik}`), (0, Sa.jsx)("i", {
                children: (0, Sa.jsx)("b", {
                  style: {
                    width: `${Math.min(100,vk)}%`
                  }
                })
              })]
            })]
          }), (0, Sa.jsx)(nV, {
            max: mw,
            bands: pJ,
            ticks: KJ,
            now: tk,
            settle: ak,
            settleTone: bk ? "bad" : null,
            onExplain: () => {
              wk(`${ZJ}rxWhy_heat`)
            }
          })]
        }), (0, Sa.jsx)(xJ, {
          stats: ek,
          t: dk,
          explain: wk
        }), yk > 0 && (0, Sa.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            wk(`${ZJ}rxWhy_perPellet`)
          },
          children: dk(`${ZJ}rxPerPellet`, {
            amount: Mw(yk)
          })
        })]
      })
    }

    function lJ(kk, Fk) {
      var Bk;
      if (!kk.baf2RxStore) return {
        note: Fk(`${ZJ}rxUpTo`, {
          amount: Mw(kk.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Rk, tk] = kk.baf2RxStore, ak = tk > 0 ? Rk / tk : 0, Xk = String(Math.floor(100 * ak)), bk = null !== (Bk = kk.baf2RxStoreNetPerS) && void 0 !== Bk ? Bk : 0, wk = function(kk) {
        var Fk, Bk;
        const [Rk, tk] = null !== (Fk = kk.baf2RxStore) && void 0 !== Fk ? Fk : [0, 0], ak = null !== (Bk = kk.baf2RxStoreNetPerS) && void 0 !== Bk ? Bk : 0;
        return tk > 0 && Rk >= tk - 1 ? "running" === kk.baf2RxState ? `${yJ}rxStoreFull` : `${yJ}rxStoreFullOnly` : ak > .05 ? `${yJ}rxStoreLine` : ak < -.05 ? "running" === kk.baf2RxState ? `${yJ}rxStoreUsesMore` : `${yJ}rxStoreDraining` : `${yJ}rxStorePct`
      }(kk);
      return {
        note: Fk(wk, wk === `${ZJ}rxStoreLine` ? {
          pct: Xk,
          time: oa(Fk, (tk - Rk) / bk)
        } : {
          pct: Xk
        }),
        share: ak
      }
    }

    function nJ(kk) {
      let {
        view: Fk,
        explain: Bk,
        preview: Rk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)(), {
        status: ak
      } = Fk, Xk = Ib(kw(...Fk.dims)), bk = oJ(ak), wk = Math.min(Math.round(ak.baf2RxFuel), Xk.fuel), dk = "running" === ak.baf2RxState, sk = dk ? LJ(ak.baf2RxOut, ak.baf2RxMaxNow) : 0, Vk = function(kk, Fk, Bk) {
        const Rk = vJ(kk),
          tk = "cryo" === Rk.EA,
          ak = Bk ? Bk.coolantSecs : Rk.pct >= 100 && kk.baf2RxOut >= 1 ? YJ(kk, kk.baf2RxThrottle).coolantSecs : null;
        let Xk, bk = !1;
        if (Rk.pct < 100) {
          const Bk = 1 === Rk.makersShort,
            ak = !tk && kk.baf2RxCryoOpen ? "OrCryo" : "";
          Xk = Rk.makersShort > 0 ? Fk(tk ? `${ZJ}rxCryoAddMixer${Bk?"":"s"}` : `${ZJ}rxWaterAddCondenser${Bk?"":"s"}${ak}`, {
            count: String(Rk.makersShort)
          }) : Fk(`${ZJ}rxWaterNeeds`, {
            rate: JJ(Rk.needPerS)
          })
        } else if (null !== ak) Xk = Fk(`${ZJ}rxWaterRunsOut`, {
          time: oa(Fk, ak)
        });
        else if (Rk.waterBeside > 0) Xk = Fk(`${ZJ}rxCryoPlusWater`, {
          rate: JJ(Rk.waterBeside)
        });
        else {
          const kk = function(kk) {
            return kk.inPerS <= 0 ? "rxWaterNoSupply" : kk.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Rk);
          bk = "rxWaterNoSupply" === kk, Xk = Fk(`${ZJ}${kk}`, {
            amount: Mw(Rk.stored)
          })
        }
        return {
          kind: tk ? "Cryo" : "Water",
          label: Fk(tk ? `${ZJ}rxCryo` : `${ZJ}rxWater`),
          number: `${JJ(Rk.usePerS)}/s`,
          preview: Bk ? `${JJ(Bk.coolPerS)}/s` : null,
          note: Xk,
          tone: "noWater" === kk.baf2RxState ? "danger" : bk ? "warn" : (wk = Rk.pct, dk = ak, wk < 100 ? "danger" : null === dk ? null : dk < 300 ? "danger" : "warn"),
          share: Rk.pct / 100,
          why: tk ? `${ZJ}rxWhy_cryo` : `${ZJ}rxWhy_water`,
          short: Rk.pct < 100
        };
        var wk, dk
      }(ak, tk, Rk), Jk = Ow(ak, Xk.waste, bk), Ak = lJ(ak, tk), ek = YJ(ak, ak.baf2RxTarget), yk = dk && Math.abs(ek.settle - ak.baf2RxHeat) >= 3, fk = Rk ? Rk.pelletsPerMin / 60 : null;
      return (0, Sa.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Sa.jsx)(jV, {
            kind: "Fuel",
            label: tk(`${ZJ}rxFuel`),
            number: String(wk),
            preview: null !== fk && fk > 0 && ak.baf2RxFuel > 0 ? oa(tk, ak.baf2RxFuel / fk) : null,
            note: ak.baf2RxFuel <= 0 ? tk(`${ZJ}rxFuelEmpty`) : bk > 0 ? tk(`${ZJ}rxFuelLeft`, {
              time: oa(tk, ak.baf2RxFuel / bk)
            }) : tk(1 === wk ? `${ZJ}rxFuelPellet` : `${ZJ}rxFuelPellets`),
            tone: "noFuel" === ak.baf2RxState ? "danger" : ak.baf2RxFuel < 2 ? "warn" : null,
            share: ak.baf2RxFuel / Xk.fuel,
            onExplain: () => {
              Bk(`${ZJ}rxWhy_fuel`)
            }
          }), (0, Sa.jsx)(jV, {
            kind: Vk.kind,
            label: Vk.label,
            number: Vk.number,
            preview: Vk.preview,
            note: Vk.note,
            tone: Vk.tone,
            share: Vk.share,
            onExplain: () => {
              Bk(Vk.why)
            }
          })]
        }), (0, Sa.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Sa.jsx)(lV, {
            kind: "Fuel",
            step: sk,
            short: "noFuel" === ak.baf2RxState
          }), (0, Sa.jsx)(lV, {
            kind: Vk.kind,
            step: sk,
            short: Vk.short || "noWater" === ak.baf2RxState
          })]
        }), (0, Sa.jsx)(jJ, {
          view: Fk,
          heat: ak.baf2RxHeat,
          settle: Math.min(mw, ek.settle),
          settleLine: yk ? tk(`${ZJ}rxHeatSettles`, {
            pct: String(Math.round(ek.settle)),
            time: oa(tk, ek.settleS)
          }) : null,
          settleBad: ek.settle > 100,
          explain: Bk
        }), (0, Sa.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Sa.jsx)(lV, {
            kind: "Power",
            step: sk
          }), (0, Sa.jsx)(lV, {
            kind: "Waste",
            step: dk && ak.baf2RxFuel - ak.baf2RxPu > 0 ? sk : 0,
            short: Jk.full
          })]
        }), (0, Sa.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Sa.jsx)(jV, {
            kind: "Power",
            label: tk(`${ZJ}rxPowerOut`),
            number: `\u26a1 ${Mw(ak.baf2RxOut)}/s`,
            preview: Rk ? Mw(Rk.out) : null,
            note: Ak.note,
            share: Ak.share,
            onExplain: () => {
              Bk(`${ZJ}rxWhy_power`)
            }
          }), (0, Sa.jsx)(jV, {
            kind: "Waste",
            label: tk(`${ZJ}rxWaste`),
            number: `${Math.floor(ak.baf2RxWaste)}/${Xk.waste}`,
            note: Jk.full ? tk(`${ZJ}rxWasteFull`) : null !== Jk.fullInS ? tk(`${ZJ}rxWasteFullIn`, {
              time: oa(tk, Jk.fullInS)
            }) : tk(`${ZJ}rxWasteSpent`),
            tone: "wasteFull" === ak.baf2RxState ? "danger" : Jk.full ? "warn" : null,
            share: ak.baf2RxWaste / Xk.waste,
            onExplain: () => {
              Bk(`${ZJ}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function IJ(kk) {
      let {
        view: Fk,
        explain: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Ht.x)(), tk = Fk.plan;
      if (!tk) return null;
      const ak = tk.fuelHeat <= 0 ? null : tk.cooling > 0 ? Math.min(mw, 100 * tk.fuelHeat / tk.cooling) : mw,
        Xk = Rk(`${ZJ}rxPlanAtFull`);
      return (0, Sa.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Sa.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Sa.jsx)(jV, {
            kind: "Fuel",
            label: Rk(`${ZJ}rxFuel`),
            number: Rk(`${ZJ}rxPlanPerMin`, {
              amount: gw(tk.pelletsPerMin)
            }),
            note: Rk(`${ZJ}rxPlanPellets`),
            onExplain: () => {
              Bk(`${ZJ}rxWhy_fuel`)
            }
          }), (0, Sa.jsx)(jV, {
            kind: "Water",
            label: Rk(`${ZJ}rxWater`),
            number: `${JJ(tk.waterPerS)}/s`,
            note: Fk.status.baf2RxCryoOpen && tk.waterPerS > 0 ? Rk(`${ZJ}rxPlanOrCryo`, {
              rate: JJ(Aw(tk, Qk.f) * Qk.k)
            }) : Xk,
            onExplain: () => {
              Bk(`${ZJ}rxWhy_water`)
            }
          })]
        }), (0, Sa.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Sa.jsx)(lV, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Sa.jsx)(lV, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Sa.jsx)(jJ, {
          view: Fk,
          heat: null,
          settle: ak,
          settleLine: null === ak ? null : Rk(`${ZJ}rxPlanHeat`, {
            pct: String(Math.round(ak))
          }),
          settleBad: null !== ak && ak > 100,
          explain: Bk
        }), (0, Sa.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Sa.jsx)(lV, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Sa.jsx)(lV, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Sa.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Sa.jsx)(jV, {
            kind: "Power",
            label: Rk(`${ZJ}rxPowerOut`),
            number: `\u26a1 ${Mw(tk.max)}/s`,
            note: Xk,
            onExplain: () => {
              Bk(`${ZJ}rxWhy_power`)
            }
          }), (0, Sa.jsx)(jV, {
            kind: "Waste",
            label: Rk(`${ZJ}rxWaste`),
            number: Rk(`${ZJ}rxPlanPerMin`, {
              amount: gw(tk.pelletsPerMin)
            }),
            note: Rk(`${ZJ}rxWasteSpent`),
            onExplain: () => {
              Bk(`${ZJ}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const QJ = "buildAFactory2Game:",
      kA = {
        key: `${QJ}rxWaiting`,
        params: {},
        tone: "info"
      };

    function FA(kk, Fk) {
      return 0 !== (kk.baf2RxFlags & Fk)
    }

    function BA(kk) {
      var Fk, Bk;
      let {
        store: tk,
        close: ak
      } = kk;
      const {
        t: Xk
      } = (0, Ht.x)(), bk = dJ(tk), {
        explained: wk,
        hinting: dk,
        explain: sk,
        explainOnce: Vk
      } = IV("baf2RxExplained"), Jk = (0, Rk.useCallback)(((kk, Fk) => {
        sk(Xk(kk, Fk))
      }), [sk, Xk]), Ak = (0, Rk.useCallback)(((kk, Fk) => {
        Vk(kk, Xk(kk, Fk))
      }), [Vk, Xk]), [ek, yk] = (0, Rk.useState)(!1), [fk, mk] = (0, Rk.useState)(!1), Wk = null === bk || void 0 === bk ? void 0 : bk.status, vk = null === Wk || void 0 === Wk ? void 0 : Wk.baf2RxAt.join(","), ik = !0 === (null === Wk || void 0 === Wk ? void 0 : Wk.baf2RxFormed);
      (0, Rk.useEffect)((() => {
        mk(!1), yk(!1)
      }), [vk, ik]), (0, Rk.useEffect)((() => (tk.opened(), () => {
        tk.closed()
      })), [tk]);
      const Yk = void 0 !== Wk && FA(Wk, WF),
        Lk = Wk ? ik ? fw(Wk) : null !== bk && void 0 !== bk && bk.plan ? function(kk, Fk) {
          if (kk <= 0) return "off";
          if (Fk <= 0) return "alarm";
          const Bk = 100 * kk / Fk;
          return Bk < 50 ? "calm" : Bk < dw ? "warm" : Bk <= 100 ? "hot" : "alarm"
        }(bk.plan.fuelHeat, bk.plan.cooling) : "off" : "off",
        Ok = Wk ? Ww(Wk) : null,
        Ek = bk ? bk.waiting ? kA : ik ? SJ(bk.status) : function(kk) {
          var Fk, Bk;
          const {
            status: Rk
          } = kk;
          return NJ({
            left: Rk.baf2RxNeed.reduce(((kk, Fk) => {
              let [, Bk] = Fk;
              return kk + Bk
            }), 0),
            bad: Rk.baf2RxBad,
            rods: null !== (Fk = null === (Bk = kk.plan) || void 0 === Bk ? void 0 : Bk.rods) && void 0 !== Fk ? Fk : 0,
            canFill: FA(Rk, fF),
            melted: FA(Rk, yF),
            idle: kk.looks.reduce(((kk, Fk) => kk + (Fk === aw ? 1 : 0)), 0)
          })
        }(bk) : null,
        Sk = dk && null !== Ek && ("ok" === Ek.tone || "info" === Ek.tone),
        Nk = Wk ? function(kk) {
          const Fk = 0 !== (kk.baf2RxFlags & AF),
            Bk = kk.baf2RxHeat < jb;
          return 0 !== (kk.baf2RxFlags & yF) || Bk && (Fk || !kk.baf2RxFormed) ? null : kk.baf2RxFormed && !Fk ? {
            key: `${yw}rxApartScram`,
            params: {}
          } : {
            key: `${yw}rxApartCooling`,
            params: {
              pct: String(jb)
            }
          }
        }(Wk) : null,
        [Hk, uk, Mk] = null !== (Fk = null === bk || void 0 === bk ? void 0 : bk.dims) && void 0 !== Fk ? Fk : [0, 0, 0],
        gk = `${Hk}\xd7${uk}\xd7${Mk}`;
      return (0, Sa.jsx)(oX.e, {
        close: ak,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Sa.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Sa.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Sa.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Sa.jsx)(VJ, {
                mood: Lk
              }), (0, Sa.jsxs)("div", {
                children: [(0, Sa.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Xk(`${QJ}rxTitle`)
                }), bk && (0, Sa.jsxs)("p", {
                  className: Ot()("Baf2RxSubtitle", ik && (null === Ok || void 0 === Ok ? void 0 : Ok.tone)),
                  children: [ik && !Yk ? (0, Sa.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Xk(`${QJ}rxChangeSize`),
                    onClick: () => {
                      if (!Wk) return;
                      const kk = FA(Wk, AF);
                      var Fk;
                      (Fk = {
                        scram: kk,
                        heat: Wk.baf2RxHeat
                      }).scram && Fk.heat < jb ? yk(!0) : Jk(kk ? `${QJ}rxResizeCooling` : `${QJ}rxResizeHot`, {
                        pct: String(jb)
                      })
                    },
                    children: [gk, " \u270e"]
                  }) : gk, " \xb7 ", Xk(ik ? null !== (Bk = null === Ok || void 0 === Ok ? void 0 : Ok.label) && void 0 !== Bk ? Bk : `${QJ}rxState_running` : `${QJ}rxSubPlanShort`)]
                })]
              })]
            }), (0, Sa.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [bk && !Yk && (0, Sa.jsx)(sJ, {
                kind: "reactor",
                busy: bk.busy.has("apart"),
                whyNot: Nk ? () => {
                  Jk(Nk.key, Nk.params)
                } : null,
                apart: () => {
                  tk.tap("apart", (() => {
                    tk.send("apart")
                  }))
                }
              }), (0, Sa.jsx)(LX.k, {
                onClick: ak
              })]
            })]
          }), bk && Ek && (0, Sa.jsxs)("div", {
            className: "Baf2RxBody",
            children: [ik ? (0, Sa.jsx)(nJ, {
              view: bk,
              explain: Jk,
              preview: iJ(bk.status)
            }) : (0, Sa.jsx)(IJ, {
              view: bk,
              explain: Jk
            }), (0, Sa.jsx)(QV, {
              text: Sk ? `${OJ(Xk,Ek)} ${Xk(`${QJ}rxTapHint`)}` : OJ(Xk, Ek),
              tone: Ek.tone,
              explained: wk
            }), Yk ? (0, Sa.jsxs)(Sa.Fragment, {
              children: [(0, Sa.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Xk(`${QJ}rxNotYours`)
              }), (0, Sa.jsx)(aJ, {
                status: bk.status,
                store: tk,
                readOnly: !0
              })]
            }) : ik && !fk ? (0, Sa.jsxs)(Sa.Fragment, {
              children: [(0, Sa.jsx)(GJ, {
                view: bk,
                store: tk,
                explain: Jk,
                explainOnce: Ak
              }), void 0 !== bk.status.baf2RxLayout && BJ(bk.status) && (0, Sa.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Sa.jsx)(aJ, {
                  status: bk.status,
                  store: tk,
                  readOnly: !1,
                  bare: !0
                }), (0, Sa.jsx)(tJ, {
                  status: bk.status,
                  store: tk,
                  busy: bk.busy.has("fill")
                })]
              })]
            }) : (0, Sa.jsxs)(Sa.Fragment, {
              children: [(0, Sa.jsx)(TJ, {
                view: bk,
                store: tk,
                keepSize: ik ? () => {
                  mk(!1)
                } : void 0
              }), Yw(bk.dims, bk.status.baf2RxDims) && (0, Sa.jsx)(rJ, {
                need: bk.status.baf2RxNeed,
                explain: Jk
              }), (0, Sa.jsx)(aJ, {
                status: bk.status,
                store: tk,
                readOnly: !1
              })]
            }), ek && (0, Sa.jsx)(wJ, {
              id: "baf2ResizeTitle",
              title: `${QJ}rxResizeConfirmTitle`,
              body: `${QJ}rxResizeConfirmBody`,
              yes: `${QJ}rxChangeSize`,
              cancel: () => {
                yk(!1)
              },
              confirm: () => {
                yk(!1), mk(!0)
              }
            })]
          })]
        })
      })
    }
    class RA {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(kk) {
        this.view = kk;
        for (const Fk of this.listeners) Fk()
      }
      get() {
        return this.view
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
    }

    function tA(kk) {
      let {
        commands: Fk,
        store: Bk,
        power: tk,
        water: ak,
        reactor: Xk,
        battery: bk,
        collider: wk,
        terminal: dk,
        quests: sk,
        close: Vk,
        leave: Jk,
        askIslands: Ak,
        showCore: ek,
        openSocial: yk
      } = kk;
      const {
        userContext: fk
      } = (0, Gb.e)(), mk = cb.featureFlags.useSocialFeatures && fk.isLoggedIn(), [Wk, vk] = (0, Rk.useState)((() => Bk.get()));
      (0, Rk.useEffect)((() => Bk.subscribe((() => {
        vk(Bk.get())
      }))), [Bk]);
      const ik = "islands" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) ? Wk.backToCore : void 0;
      return (0, Sa.jsxs)(hX.Provider, {
        value: Fk,
        children: ["core" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(eV, {
          view: Wk.core,
          close: Vk,
          askIslands: Ak
        }), "dropMap" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(WV, {
          message: Wk.dropMap,
          quests: sk,
          close: Vk,
          leave: Jk
        }), "islands" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(TV, {
          message: Wk.islands,
          arrivedAtMs: Wk.arrivedAtMs,
          close: ik ? () => {
            ek(ik)
          } : Vk,
          leave: Jk,
          openSocial: mk ? yk : null
        }), "quests" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(gs, {
          store: sk,
          close: Vk
        }), "transfer" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(ts, {
          message: Wk.transfer,
          arrivedAtMs: Wk.arrivedAtMs,
          close: Vk,
          leave: Jk
        }), "power" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(gX, {
          store: tk,
          close: Vk
        }), "water" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(fb, {
          store: ak,
          close: Vk
        }), "reactor" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(BA, {
          store: Xk,
          close: Vk
        }), "battery" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(zJ, {
          store: bk,
          close: Vk
        }), "collider" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(Wd, {
          store: wk,
          close: Vk
        }), "terminal" === (null === Wk || void 0 === Wk ? void 0 : Wk.kind) && (0, Sa.jsx)(xV, {
          store: dk,
          close: Vk,
          send: kk => {
            Fk.send(kk)
          }
        })]
      })
    }
    var aA = Bk(38136);

    function XA(kk, Fk) {
      return kk.distSq - Fk.distSq
    }
    class bA {
      constructor() {
        this.list = [], this.pool = []
      }
      add(kk, Fk, Bk, Rk) {
        let tk = this.pool[this.list.length];
        tk || (tk = {
          x: 0,
          y: 0,
          distSq: 0,
          element: Fk,
          liftRem: Bk,
          dot: Rk
        }, this.pool.push(tk)), tk.x = kk.x, tk.y = kk.y, tk.distSq = kk.distSq, tk.element = Fk, tk.liftRem = Bk, tk.dot = Rk, this.list.push(tk)
      }
    }
    class wA {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = kk, this.sizes = new WeakMap, this.observer = new ResizeObserver((kk => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const Fk of kk) {
            const kk = Fk.borderBoxSize[0];
            "dot" !== Fk.target.dataset.crowded && 0 !== kk.inlineSize && 0 !== kk.blockSize && this.sizes.set(Fk.target, {
              width: kk.inlineSize,
              height: kk.blockSize
            })
          }
        })), this.remPx = 16, this.lA = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.UW = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.UW)
      }
      observe(kk) {
        this.observer.observe(kk)
      }
      unobserve(kk) {
        this.observer.unobserve(kk)
      }
      run(kk) {
        const Fk = kk.list;
        Fk.sort(XA);
        const Bk = this.pxPerVw,
          Rk = this.pxPerVh;
        this.lA.length = 0, this.hud && this.lA.push(...this.hud.boxes(performance.now()));
        for (const ak of Fk) {
          var tk;
          const kk = this.sizes.get(ak.element);
          let Fk = "no";
          if (kk && kk.width > 0) {
            const tk = ak.x * Bk,
              Xk = ak.y * Rk - ak.liftRem * this.remPx;
            this.fit(tk, Xk, kk.width, kk.height) || (Fk = ak.dot && this.fit(tk, Xk, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (tk = ak.element.dataset.crowded) && void 0 !== tk ? tk : "no") !== Fk && ("no" === Fk ? delete ak.element.dataset.crowded : ak.element.dataset.crowded = Fk), "hidden" !== Fk && (0, aA.c)(ak.element, ak.x, ak.y)
        }
        Fk.length = 0
      }
      fit(kk, Fk, Bk, Rk) {
        const tk = kk - Bk / 2,
          ak = kk + Bk / 2,
          Xk = Fk - Rk,
          bk = this.lA;
        for (let wk = 0; wk < bk.length; wk += 4)
          if (tk < bk[wk + 1] - 2 && ak > bk[wk] + 2 && Xk < bk[wk + 3] - 2 && Fk > bk[wk + 2] + 2) return !1;
        return bk.push(tk, ak, Xk, Fk), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.UW)
      }
    }
    const dA = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class sA {
      constructor() {
        this.cards = dA.map((kk => document.getElementsByClassName(kk))), this.watched = dA.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(kk) {
        kk - this.refreshedAt > 1e3 && (this.refreshedAt = kk, this.stale = !0);
        for (let Bk = 0; Bk < this.cards.length; Bk++) {
          var Fk;
          const kk = null !== (Fk = this.cards[Bk][0]) && void 0 !== Fk ? Fk : null;
          kk !== this.watched[Bk] && this.watch(Bk, kk)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let kk = 0; kk < this.watched.length; kk++) this.watch(kk, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const kk = this.list;
        kk.length = 0;
        for (const Fk of this.watched) {
          if (!Fk || Fk.closest(".NoRoom")) continue;
          const Bk = Fk.getBoundingClientRect();
          let Rk = Bk.top,
            tk = Bk.bottom;
          if (Fk === this.watched[0] && this.hud) {
            const kk = this.hud.getBoundingClientRect();
            Rk = Math.max(Rk, kk.top), tk = Math.min(tk, kk.bottom)
          }
          Bk.width > 0 && tk > Rk && kk.push(Bk.left, Bk.right, Rk, tk)
        }
      }
      watch(kk, Fk) {
        const Bk = this.watched[kk];
        var Rk, tk;
        (Bk && this.sizes.unobserve(Bk), this.watched[kk] = Fk, this.stale = !0, Fk && this.sizes.observe(Fk), 0 === kk) && (null === (Rk = this.hud) || void 0 === Rk || Rk.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (tk = null === Fk || void 0 === Fk ? void 0 : Fk.closest(".Baf2QuestHud")) && void 0 !== tk ? tk : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const VA = [0, 0, 0],
      JA = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function AA(kk, Fk, Bk, Rk, tk, ak) {
      let [Xk, bk, wk] = Rk;
      const dk = (Xk + .5 - Bk[0]) ** 2 + (bk - Bk[1]) ** 2 + (wk + .5 - Bk[2]) ** 2;
      let sk = null;
      dk <= ak ** 2 && (VA[0] = Xk + .5, VA[1] = bk + tk, VA[2] = wk + .5, sk = Fk.projectWorldPosToViewport(VA));
      const Vk = null !== sk && sk.x > -5 && sk.x < 105 && sk.y > -5 && sk.y < 105;
      return (0, aA.e)(kk, !Vk), Vk ? (JA.x = sk.x, JA.y = sk.y, JA.distSq = dk, JA) : null
    }
    class eA {
      constructor(kk) {
        this.onElement = kk, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(kk) {
        const Fk = [];
        for (let Bk = 0; Bk + 4 < kk.length; Bk += 5) {
          const Rk = [kk[Bk], kk[Bk + 1], kk[Bk + 2]];
          Fk.push({
            key: Rk.join(","),
            pos: Rk,
            status: tt[kk[Bk + 3]],
            kind: HF[kk[Bk + 4]]
          })
        }
        this.markers = Fk, this.keys = new Set(Fk.map((kk => {
          let {
            key: Fk
          } = kk;
          return Fk
        }))), this.notify()
      }
      covers(kk) {
        return this.keys.has(kk)
      }
      get() {
        return this.markers
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      bind(kk) {
        let Fk = this.refs.get(kk);
        return Fk || (Fk = Fk => {
          const Bk = this.elements.get(kk);
          var Rk, tk;
          Bk && (null === (Rk = this.onElement) || void 0 === Rk || Rk.call(this, Bk, !1));
          Fk ? (this.elements.set(kk, Fk), null === (tk = this.onElement) || void 0 === tk || tk.call(this, Fk, !0)) : (this.elements.delete(kk), this.refs.delete(kk))
        }, this.refs.set(kk, Fk)), Fk
      }
      onAfterRender(kk, Fk, Bk) {
        for (const Rk of this.markers) {
          const tk = this.elements.get(Rk.key);
          if (!tk) continue;
          const ak = AA(tk, kk, Fk, Rk.pos, 1.05, 24);
          ak && Bk.add(ak, tk, .45, !0)
        }
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
    }
    const yA = {
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
    const fA = (0, Rk.memo)((function(kk) {
        let {
          status: Fk,
          kind: Bk,
          bindRef: Rk
        } = kk;
        const {
          t: tk
        } = (0, Ht.x)(), ak = function(kk, Fk) {
          var Bk;
          if ("noFuel" === kk) {
            var Rk, tk;
            const kk = null === (Rk = GF[Fk]) || void 0 === Rk || null === (tk = Rk.fuels) || void 0 === tk ? void 0 : tk.find((kk => tB.includes(kk)));
            return null !== kk && void 0 !== kk ? kk : yA.noFuel
          }
          return void 0 !== (null === (Bk = GF[Fk]) || void 0 === Bk ? void 0 : Bk.cryoMade) ? "noOutlet" === kk ? "Fluid Pipe" : "noInput" === kk ? "Biomass" : yA[kk] : yA[kk]
        }(Fk, Bk);
        return (0, Sa.jsxs)("div", {
          className: Ot()("Baf2StallMarker", Fk),
          ref: Rk,
          hidden: !0,
          children: [ak && (0, Sa.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Sa.jsx)(Mt.e, {
              itemName: ak,
              amount: 0
            })
          }), (0, Sa.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === Fk ? "?" : "!"
          }), (0, Sa.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: tk(`buildAFactory2Game:stallTag_${Fk}`)
          })]
        })
      })),
      mA = (0, Rk.memo)((function(kk) {
        let {
          controller: Fk
        } = kk;
        const [Bk, tk] = (0, Rk.useState)((() => Fk.get()));
        return (0, Rk.useEffect)((() => (tk(Fk.get()), Fk.subscribe((() => {
          tk(Fk.get())
        })))), [Fk]), (0, Sa.jsx)("div", {
          className: "Baf2StallMarkers",
          children: Bk.map((kk => (0, Sa.jsx)(fA, {
            status: kk.status,
            kind: kk.kind,
            bindRef: Fk.bind(kk.key)
          }, kk.key)))
        })
      })),
      WA = fB.k + 150;
    class vA {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(kk, Fk) {
        const Bk = Fk - kk;
        null === this.offset || Bk < this.offset ? this.offset = Bk : this.offset = Math.min(Bk, this.offset + .02 * (Fk - this.sampledAt)), this.sampledAt = Fk
      }
      toLocal(kk) {
        var Fk;
        return kk + (null !== (Fk = this.offset) && void 0 !== Fk ? Fk : 0) + WA
      }
    }
    var iA = Bk(38141);
    const YA = 15 * Math.PI / 180,
      oA = Math.SQRT2,
      LA = [4, 2];

    function OA(kk, Fk) {
      const Bk = [1 / 0, 1 / 0, 1 / 0],
        Rk = [-1 / 0, -1 / 0, -1 / 0];
      for (const wk of kk)
        for (let kk = 0; kk < 3; kk++) Bk[kk] = Math.min(Bk[kk], wk[kk]), Rk[kk] = Math.max(Rk[kk], wk[kk]);
      const tk = (Bk[0] + Rk[0]) / 2,
        ak = (Bk[1] + Rk[1]) / 2,
        Xk = (Bk[2] + Rk[2]) / 2;
      let bk = 0;
      for (const wk of kk) bk = Math.max(bk, Math.hypot(wk[0] - tk, wk[1] - ak, wk[2] - Xk));
      return {
        x: tk,
        y: ak,
        z: Xk,
        r: bk + Fk
      }
    }

    function EA(kk, Fk, Bk) {
      const Rk = Fk.x - kk.x,
        tk = Fk.y - kk.y,
        ak = Fk.z - kk.z,
        Xk = Math.sqrt(Rk * Rk + tk * tk + ak * ak);
      if (Xk <= Fk.r + 8) return 1;
      const bk = Fk.r / Xk,
        wk = Math.sqrt(1 - bk * bk),
        dk = wk < -kk.cosHalf,
        sk = (Rk * kk.dx + tk * kk.dy + ak * kk.dz) / Xk;
      if (!dk && sk < kk.cosHalf * wk - kk.sinHalf * bk) return 0;
      const Vk = Bk * oA * kk.frameMs * kk.pxPerBlock / (Xk - Fk.r);
      for (let Jk = 0; Jk < LA.length; Jk++)
        if (Vk * LA[Jk] <= 1) return LA[Jk];
      return 1
    }

    function SA(kk, Fk) {
      return {
        name: kk,
        at: Fk,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const NA = [0, 0, 0];

    function HA(kk, Fk, Bk) {
      let [, Rk, tk, ak, Xk, bk] = Fk;
      const wk = fB.g * (null !== Xk && void 0 !== Xk ? Xk : 1),
        dk = [];
      for (let Ak = 0; Ak < Rk.length; Ak += 3) dk.push([Rk[Ak] + .5, Rk[Ak + 1] + .65, Rk[Ak + 2] + .5]);
      const sk = [];
      for (let Ak = 0; Ak < dk.length - 1; Ak++) {
        const [kk, Fk] = [dk[Ak], dk[Ak + 1]];
        sk.push([(kk[0] + Fk[0]) / 2, (kk[1] + Fk[1]) / 2, (kk[2] + Fk[2]) / 2])
      }
      const Vk = dk.slice(1, -1),
        Jk = new Uint8Array(Vk.length);
      for (const Ak of null !== bk && void 0 !== bk ? bk : []) Jk[Ak >> 1] |= 1 & Ak ? 2 : 1;
      return {
        island: kk,
        length: Vk.length,
        loop: ak,
        cellsPerMs: wk,
        edges: sk,
        pa: Vk,
        bounds: OA([...sk, ...Vk], .3),
        changed: !0,
        culled: !1,
        hide: Jk,
        items: tk.map((kk => {
          let [Fk, Rk] = kk;
          return SA(Fk, (0, fB.D)(Fk, Rk, Bk, wk).at)
        }))
      }
    }

    function uA(kk, Fk) {
      const {
        items: Bk
      } = kk;
      if (0 === Bk.length) return;
      const Rk = kk.length / kk.cellsPerMs,
        tk = Math.floor((Fk - Bk[0].at) / Rk) - 1;
      if (tk > 0)
        for (const ak of Bk) ak.at += tk * Rk
    }

    function MA(kk, Fk) {
      const Bk = Math.min(Math.floor(Fk), kk.length - 1),
        Rk = kk.hide[Bk];
      return 0 !== Rk && 0 !== (Rk & (Fk - Bk < .5 ? 1 : 2))
    }

    function gA(kk, Fk) {
      const Bk = Math.min(Math.floor(Fk), kk.length - 1),
        Rk = Fk - Bk,
        tk = Rk < .5,
        ak = tk ? kk.edges[Bk] : kk.pa[Bk],
        Xk = tk ? kk.pa[Bk] : kk.edges[Bk + 1],
        bk = tk ? 2 * Rk : 2 * Rk - 1;
      NA[0] = ak[0] + (Xk[0] - ak[0]) * bk, NA[1] = ak[1] + (Xk[1] - ak[1]) * bk, NA[2] = ak[2] + (Xk[2] - ak[2]) * bk
    }
    const UA = Math.PI / 4;
    class cA {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new vA, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.UW = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(kk) {
        const Fk = performance.now();
        this.clock.sample(kk.baf2BeltLinesAt, Fk), this.queue(kk.baf2BeltLinesAt, kk, 0, null, null, 0), this.applyDue(Fk)
      }
      onMoves(kk) {
        const Fk = performance.now(),
          Bk = kk.baf2BeltMovesAt;
        this.clock.sample(Bk, Fk);
        for (const [Rk, tk, ak, Xk] of kk.baf2BeltMoveList) null === tk ? this.queue(Bk - ak, null, Rk, null, null, null !== Xk && void 0 !== Xk ? Xk : 0) : this.queue(Bk - ak, null, Rk, tk, null !== Xk && void 0 !== Xk ? Xk : null, 0);
        this.applyDue(Fk)
      }
      start(kk) {
        this.pool = new iA.d(kk, {
          scale: .3,
          yaw: UA
        }, 64), this.UW(), window.addEventListener("resize", this.UW)
      }
      onAfterRender(kk) {
        const {
          pool: Fk
        } = this;
        if (!Fk) return;
        const Bk = performance.now(),
          Rk = Bk - this.lastRenderAt;
        this.lastRenderAt = Bk, Rk < 100 && (this.frameMs += .1 * (Rk - this.frameMs));
        const tk = Bk + this.frameMs;
        this.applyDue(tk);
        const ak = kk.cameraPosition,
          Xk = Fk.follow(ak);
        this.setView(kk, ak);
        const bk = this.frame++;
        for (let wk = 0; wk < this.shown.length; wk++) {
          const kk = this.shown[wk],
            Bk = EA(this.view, kk.bounds, kk.cellsPerMs),
            Rk = kk.culled && 0 !== Bk;
          if (kk.culled = 0 === Bk, !Xk && !kk.changed && !Rk && (0 === Bk || (bk + wk) % Bk !== 0)) continue;
          kk.changed = !1, kk.loop && (uA(kk, tk), (0, fB.B)(kk.items, kk.length, tk, kk.cellsPerMs));
          let ak = kk.length;
          for (let bk = 0; bk < kk.items.length; bk++) {
            const Bk = kk.items[bk],
              Rk = (0, fB.G)(Bk.at, ak, tk, kk.cellsPerMs);
            if (ak = Rk - fB.q, MA(kk, Rk)) {
              null === Bk.kind || Bk.hidden || (Bk.kind.hide(Bk.slot), Bk.hidden = !0);
              continue
            }
            let wk = Bk.kind;
            if (null === wk) {
              if (wk = Fk.kindOf(Bk.name), null === wk) continue;
              Bk.kind = wk, Bk.slot = wk.take(), Bk.hidden = !0, Bk.drawn = NaN
            } else if (Rk === Bk.drawn && !Bk.hidden && !Xk) continue;
            gA(kk, Rk), wk.write(Bk.slot, NA[0], NA[1], NA[2]), Bk.hidden = !1, Bk.drawn = Rk
          }
        }
        Fk.commit()
      }
      dispose() {
        var kk;
        window.removeEventListener("resize", this.UW), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (kk = this.pool) || void 0 === kk || kk.dispose(), this.pool = null
      }
      setView(kk, Fk) {
        const {
          cameraDir: Bk,
          lastDir: Rk
        } = this, tk = kk.cameraDirection;
        for (let sk = 0; sk < 3; sk++) Rk[sk] = Bk[sk], Bk[sk] = tk[sk];
        const ak = Bk[0] * Rk[0] + Bk[1] * Rk[1] + Bk[2] * Rk[2],
          Xk = Number.isNaN(ak) ? 0 : Math.acos(Math.min(1, Math.max(-1, ak))),
          {
            width: bk,
            height: wk
          } = this,
          dk = kk.tanHalfFovX;
        ! function(kk, Fk, Bk, Rk, tk, ak, Xk) {
          let bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          kk.x = Fk[0], kk.y = Fk[1], kk.z = Fk[2], kk.dx = Bk[0], kk.dy = Bk[1], kk.dz = Bk[2];
          const wk = Math.min(Math.PI, Math.atan(Math.sqrt(Rk * Rk + tk * tk)) + YA + bk);
          kk.cosHalf = Math.cos(wk), kk.sinHalf = Math.sin(wk), kk.pxPerBlock = ak / (2 * tk), kk.frameMs = Xk
        }(this.view, Fk, Bk, dk, dk * wk / bk, wk * window.devicePixelRatio, this.frameMs, Xk)
      }
      queue(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = Math.max(this.clock.toLocal(kk), this.lastPendingAt);
        this.lastPendingAt = Xk, this.pending.push({
          at: Xk,
          lines: Fk,
          line: Bk,
          name: Rk,
          pos: tk,
          idx: ak
        })
      }
      applyDue(kk) {
        const {
          pending: Fk
        } = this;
        for (; this.pendingHead < Fk.length && Fk[this.pendingHead].at <= kk;) {
          const kk = Fk[this.pendingHead++];
          if (kk.lines) this.applyLines(kk.lines, kk.at), kk.lines = null;
          else {
            const Fk = this.lines.get(kk.line);
            Fk && this.applyMove(Fk, kk, kk.at)
          }
        }
        this.pendingHead === Fk.length ? (Fk.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > Fk.length && (Fk.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(kk, Fk) {
        this.clearIsland(kk.baf2BeltIsland);
        for (const Bk of kk.baf2BeltLineList) this.lines.set(Bk[0], HA(kk.baf2BeltIsland, Bk, Fk));
        this.shown = [...this.lines.values()]
      }
      applyMove(kk, Fk, Bk) {
        let {
          name: Rk,
          pos: tk,
          idx: ak
        } = Fk;
        kk.changed = !0, kk.loop && (uA(kk, Bk), (0, fB.B)(kk.items, kk.length, Bk, kk.cellsPerMs)), null !== Rk && null !== tk ? (0, fB.C)(kk.items, kk.length, SA(Rk, Bk), tk, Bk, kk.cellsPerMs) : null !== Rk ? kk.items.push(SA(Rk, Bk)) : kk.items.length > ak && this.release((0, fB.J)(kk.items, kk.length, Bk, kk.cellsPerMs, ak))
      }
      clearIsland(kk) {
        for (const [Fk, Bk] of this.lines)
          if (Bk.island === kk) {
            for (const kk of Bk.items) this.release(kk);
            this.lines.delete(Fk)
          }
      }
      release(kk) {
        null !== kk.kind && (kk.kind.release(kk.slot), kk.kind = null, kk.slot = -1, kk.hidden = !0, kk.drawn = NaN)
      }
    }
    var GA = Bk(36329),
      TA = Bk(38148);

    function rA(kk) {
      let {
        depth: Fk,
        store: Bk,
        t: tk
      } = kk;
      const ak = function(kk) {
        const [Fk, Bk] = (0, Rk.useState)(kk.lastPlayerY());
        return (0, as.f)(Dt, Bk), (0, Rk.useEffect)((() => {
          Bk(kk.lastPlayerY())
        }), [kk]), Fk
      }(Bk);
      if (null === ak) return null;
      const [Xk, bk] = Fk, wk = ak > Xk ? Xk : null !== bk && ak < bk ? bk : null, dk = {
        y: Ya(ak),
        target: null === wk ? "" : Ya(wk)
      };
      return (0, Sa.jsx)("span", {
        className: Ot()("Baf2QuestDepth", {
          Reached: null === wk
        }),
        children: tk(`${ds}${null===wk?"questDepthReached":"questDepth"}`, dk)
      })
    }

    function DA(kk) {
      let {
        also: Fk,
        view: Bk,
        t: Rk
      } = kk;
      return (0, Sa.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Sa.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Sa.jsx)("strong", {
            children: Rk(`${ds}questAlsoDownHere`)
          }), (0, Sa.jsx)("span", {
            className: "Baf2QuestChips",
            children: Fk.map((kk => {
              let [Fk, tk, ak, Xk] = kk;
              return (0, Sa.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Rk(`${ds}questAlsoItem`, {
                  item: Vs(Rk, Bk.itemNames[Fk], Fk),
                  have: String(tk),
                  need: String(ak)
                }),
                children: [(0, Sa.jsx)(ys, {
                  item: Fk
                }), (0, Sa.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${tk}/${ak}`
                }), null !== Xk && (0, Sa.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Rk(`${ds}questAlsoDepth`, {
                    y: Ya(Xk)
                  })
                })]
              }, Fk)
            }))
          })]
        })]
      })
    }
    var zA = Bk(3206);

    function PA(kk) {
      let {
        expanded: Fk,
        inventoryOpen: Bk,
        children: tk
      } = kk;
      const ak = (0, Rk.useRef)(null);
      return (0, Rk.useEffect)((() => {
        const kk = ak.current,
          Fk = null === kk || void 0 === kk ? void 0 : kk.closest(".RightElements"),
          Rk = null === kk || void 0 === kk ? void 0 : kk.firstElementChild;
        if (!kk || !Fk || !Rk) return;
        return (0, TA.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Fk, Rk], (() => {
          const tk = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === tk.length) return;
          const ak = Math.max(...tk.map((kk => kk.getBoundingClientRect().bottom))),
            Xk = Fk.getBoundingClientRect(),
            bk = Bk ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (bk) {
            const Fk = parseFloat(getComputedStyle(Rk).marginLeft) + parseFloat(getComputedStyle(Rk).marginRight),
              Bk = Xk.right - bk.getBoundingClientRect().right - 8 - Fk;
            kk.style.setProperty("--baf2-quest-room", `${Bk}px`), kk.classList.toggle("NoRoom", Bk < 150)
          } else kk.style.removeProperty("--baf2-quest-room"), kk.classList.remove("NoRoom");
          const wk = ak - Xk.top + 8,
            dk = function(kk, Fk, Bk) {
              const Rk = Fk.getBoundingClientRect(),
                tk = kk.getBoundingClientRect(),
                ak = (0, zA.f)(tk.left, tk.right, Rk.top + Bk);
              if (null !== ak && ak < Rk.bottom) return ak - Rk.top;
              return Rk.height - (parseFloat(getComputedStyle(Fk).paddingBottom) || 0)
            }(kk, Fk, wk) - 8,
            sk = window.innerHeight / 2 - Xk.top,
            {
              top: Vk,
              maxHeight: Jk
            } = function(kk, Fk, Bk, Rk, tk) {
              const ak = Math.min(Bk, Math.max(0, Fk - kk)),
                Xk = tk ? kk : Math.max(kk, Math.min(Rk - ak / 2, Fk - ak));
              return {
                top: Xk,
                maxHeight: Math.max(0, Fk - Xk)
              }
            }(wk, dk, function(kk) {
              const Fk = kk.firstElementChild,
                Bk = Fk ? Fk.scrollHeight - Fk.clientHeight : 0;
              return kk.getBoundingClientRect().height + Math.max(0, Bk)
            }(Rk), sk, Oa());
          kk.style.top = `${Vk}px`, kk.style.maxHeight = `${Jk}px`
        }))
      }), [Bk]), (0, Sa.jsx)("div", {
        ref: ak,
        className: Ot()("Baf2QuestHud", {
          Expanded: Fk
        }),
        children: tk
      })
    }

    function hA(kk) {
      let {
        amount: Fk,
        t: Bk
      } = kk;
      return (0, Sa.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Sa.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Sa.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: Bk(`${ds}questStepsDone`, {
            amount: String(Fk)
          })
        })]
      })
    }

    function qA(kk) {
      let {
        pulse: Fk
      } = kk;
      return 0 === Fk ? null : (0, Sa.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, Fk)
    }

    function CA(kk) {
      var Fk;
      let {
        store: Bk
      } = kk;
      const tk = (0, as.g)(rt, Bk.get()),
        [ak, Xk] = (0, Rk.useState)(!1),
        {
          t: bk
        } = (0, Ht.x)(),
        wk = function() {
          const [kk, Fk] = (0, Rk.useState)(Oa);
          return (0, Rk.useEffect)((() => (Fk(Oa()), Ea(Fk))), []), kk
        }(),
        {
          openInGameMenuName: dk,
          openEverythingMenuName: sk
        } = (0, Yt.h)(["openInGameMenuName", "openEverythingMenuName"]),
        Vk = "inventory" === dk && null === sk,
        Jk = null !== dk && !Vk || null !== sk;
      if (! function(kk) {
          return null !== kk.name || null !== kk.side
        }(tk) || Jk || "off" === tk.tutorial) return null;
      const Ak = Zt(tk.rows),
        ek = Ak.filter((kk => kk.done)).length,
        yk = function(kk, Fk) {
          const Bk = xt(kk);
          let Rk = 0;
          return kk.filter(((kk, tk) => !!kk.justFinished || !(kk.done || tk < Bk || Rk > Fk) && (Rk++, !0)))
        }(tk.rows, wk ? 0 : 2),
        fk = wk ? yk : function(kk, Fk) {
          const Bk = Fk.filter((kk => !kk.justFinished));
          if (Bk.length < 2) return [...Fk];
          const Rk = kk.indexOf(Bk[0]),
            tk = kk.indexOf(Bk[Bk.length - 1]),
            ak = new Set(Zt(kk));
          return kk.filter(((kk, Bk) => Fk.includes(kk) || kk.done && ak.has(kk) && Bk > Rk && Bk < tk))
        }(tk.rows, yk),
        mk = ak ? tk.rows : fk,
        Wk = ak || wk ? [] : function(kk, Fk) {
          const Bk = new Array(Fk.length + 1).fill(0),
            Rk = new Set(Zt(kk));
          let tk = 0;
          for (const ak of kk) tk < Fk.length && ak === Fk[tk] ? tk++ : ak.done && Rk.has(ak) && Bk[tk]++;
          return Bk
        }(tk.rows, fk),
        vk = ak || fk.length < tk.rows.length || null !== tk.reward,
        ik = Ct(tk),
        Yk = ik ? bk(`${ds}questLineComplete`) : tk.tier ? Ws(bk, tk.tier) : bk(`${ds}currentQuest`),
        Lk = function(kk) {
          var Fk, Bk;
          if (Ct(kk)) return null;
          const Rk = null === (Fk = kk.chapters) || void 0 === Fk ? void 0 : Fk.find((Fk => {
            let [Bk] = Fk;
            return Bk === kk.tier
          }));
          if (!Rk) return null;
          const tk = Rk[1].filter((kk => !kk[4]));
          if (0 === tk.length) return null;
          const ak = null === (Bk = kk.name) || void 0 === Bk ? void 0 : Bk[0],
            Xk = kk => tk.findIndex((Fk => Fk[0] === ak && (!kk || !Fk[3]))),
            bk = Xk(!0),
            wk = bk >= 0 ? bk : Xk(!1);
          if (wk >= 0) return [wk + 1, tk.length];
          const dk = tk.filter((kk => kk[3])).length;
          return [Math.min(dk + 1, tk.length), tk.length]
        }(tk);
      return (0, Sa.jsx)(GA.g, {
        placement: "topRight",
        children: (0, Sa.jsx)(PA, {
          expanded: ak,
          inventoryOpen: Vk,
          children: (0, Sa.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: ss,
            children: [null !== tk.name && (0, Sa.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Sa.jsx)(qA, {
                pulse: tk.pulse
              }), (0, Sa.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Sa.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Yk, Lk && (0, Sa.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": bk(`${ds}questPlaceLabel`, {
                      n: String(Lk[0]),
                      total: String(Lk[1])
                    }),
                    children: bk(`${ds}questPlace`, {
                      n: String(Lk[0]),
                      total: String(Lk[1])
                    })
                  }), tk.tier && tk.core && !ik && (0, Sa.jsx)(vs, {
                    core: tk.core,
                    t: bk
                  })]
                })
              }), (0, Sa.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: bk(`${ds}${tk.name[0]}`, As(tk.name[1]))
              }), (Ak.length > 1 || vk) && (0, Sa.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Ak.length > 1 && (0, Sa.jsx)(is, {
                  rows: Ak,
                  t: bk
                }), vk && (0, Sa.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": ak,
                  onClick: () => {
                    Xk(!ak)
                  },
                  children: [(0, Sa.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: bk(`${ds}questStepsToggle`, {
                      done: String(ek),
                      total: String(Ak.length)
                    })
                  }), (0, Sa.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: ak ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Sa.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [mk.map(((kk, Fk) => {
                  var ak;
                  const Xk = kk.current && tk.depth;
                  return (0, Sa.jsxs)(Rk.Fragment, {
                    children: [(null !== (ak = Wk[Fk]) && void 0 !== ak ? ak : 0) > 0 && (0, Sa.jsx)(hA, {
                      amount: Wk[Fk],
                      t: bk
                    }), (0, Sa.jsx)(Ys, {
                      row: kk,
                      view: tk,
                      t: bk,
                      extra: Xk && (0, Sa.jsx)(rA, {
                        depth: Xk,
                        store: Bk,
                        t: bk
                      })
                    })]
                  }, kk.id)
                })), (null !== (Fk = Wk[mk.length]) && void 0 !== Fk ? Fk : 0) > 0 && (0, Sa.jsx)(hA, {
                  amount: Wk[mk.length],
                  t: bk
                }), tk.also.length > 0 && (0, Sa.jsx)(DA, {
                  also: tk.also,
                  view: tk,
                  t: bk
                })]
              }), ak && tk.reward && (0, Sa.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [bk(`${ds}questReward`), (0, Sa.jsx)(ys, {
                  item: tk.reward
                }), Vs(bk, tk.itemNames[tk.reward], tk.reward)]
              })]
            }), tk.side && (0, Sa.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [ht(tk, Date.now()) && (0, Sa.jsx)(qA, {
                pulse: tk.sideCameUpAt
              }), (0, Sa.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: bk(`${ds}questSide`)
              }), (0, Sa.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: bk(`${ds}${tk.side.name[0]}`, As(tk.side.name[1]))
              }), (0, Sa.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Sa.jsx)(Ys, {
                  row: tk.side.row,
                  view: tk,
                  t: bk
                })
              })]
            })]
          })
        })
      })
    }
    const ZA = "baf2ToastView";
    class pA {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = kk, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: kk,
          holdMs: Fk
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const kk = this.dropCovered();
          kk && this.show(kk.message, kk.holdMs)
        }), 250));
        const Bk = this.dropCovered();
        null !== Bk && (Bk.holdMs > 0 || "baf2ToastCelebrate" === Bk.message.baf2ToastStyle) && "baf2ToastCelebrate" !== kk.baf2ToastStyle && this.show(Bk.message, Bk.holdMs);
        const Rk = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== kk.baf2ToastStyle && Rk > 0) return this.pending = {
          message: kk,
          holdMs: Fk
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const kk = this.pending;
          this.pending = null, kk && this.present(kk.message, kk.holdMs)
        }), Rk));
        this.present(kk, Fk)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(kk, Fk) {
        this.clearTimers(), this.pending = null;
        const Bk = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: kk.baf2ToastText,
          style: kk.baf2ToastStyle,
          swapped: Bk,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === kk.baf2ToastStyle ? 1500 : Fk), this.Hf();
        const Rk = Math.min(8e3, Math.max(1e3, kk.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Rk)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Hf(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Hf()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const kk = this.covering;
        return this.covering = null, kk
      }
      Hf() {
        Gt.o.Hf(ZA, this.view, !0)
      }
    }
    var KA = Bk(67);
    const xA = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function jA(kk) {
      let {
        store: Fk
      } = kk;
      const Bk = (0, as.g)(ZA, Fk.get()),
        {
          openInGameMenuName: Rk,
          openEverythingMenuName: tk
        } = (0, Yt.h)(["openInGameMenuName", "openEverythingMenuName"]),
        ak = Bk && (0, Sa.jsxs)("div", {
          className: Ot()("Baf2Toast", xA[Bk.style], {
            Swapped: Bk.swapped,
            Leaving: Bk.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === Bk.style && (0, Sa.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Sa.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Sa.jsx)(gt.d, {
              text: Bk.text
            })
          })]
        }, Bk.id);
      return null !== Rk && null === tk ? (0, KA.createPortal)((0, Sa.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: ak
      }), document.body) : (0, Sa.jsx)(GA.g, {
        children: ak
      })
    }
    const lA = "baf2AreaView";
    class nA {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Hb = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Hb = null
      }
      arrive(kk, Fk) {
        Fk && function(kk) {
          return "home" === kk.baf2AreaPlace && void 0 !== kk.baf2AreaNameText
        }(kk) ? this.Hb = kk : this.show(kk)
      }
      release() {
        const kk = this.Hb;
        null !== kk && this.show(kk)
      }
      show(kk) {
        this.clearTimer(), this.Hb = null;
        const Fk = void 0 === kk.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: kk,
          ms: Fk
        }, this.Hf(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Hf()
        }), Fk)
      }
      dispose() {
        this.clearTimer(), this.Hb = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Hf() {
        Gt.o.Hf(lA, this.view, !0)
      }
    }

    function IA(kk) {
      var Fk;
      let {
        store: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Ht.x)(), tk = (0, as.g)(lA, Bk.get());
      if (!tk) return null;
      const {
        area: ak
      } = tk, Xk = ak.baf2AreaResetMinutes;
      return (0, Sa.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": ak.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${tk.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Sa.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), ak.baf2AreaHeading && (0, Sa.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Rk(ak.baf2AreaHeading)
        }), (0, Sa.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (Fk = ak.baf2AreaNameText) && void 0 !== Fk ? Fk : Rk(ak.baf2AreaName)
        }), ak.baf2AreaNote && (0, Sa.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Rk(ak.baf2AreaNote)
        }), void 0 !== Xk && (0, Sa.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Rk("buildAFactory2Game:areaWildsReset", {
            time: oa(Rk, 60 * Xk)
          })
        })]
      }, tk.id)
    }
    const QA = "baf2GearGauge";
    class ke {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      zW(kk) {
        var Fk;
        if (this.clearLinger(), null === kk.gearPowerKind) return void this.set(null);
        const Bk = "jetpack" === kk.gearPowerKind && (Rk = kk.gearChargeState, tk = kk.gearCharge, "flying" === Rk || "charging" === Rk || "outOfCharge" === Rk || "ceiling" === Rk || "offPlot" === Rk || "noPower" === Rk && tk <= 0);
        var Rk, tk;
        const ak = !0 === (null === (Fk = this.view) || void 0 === Fk ? void 0 : Fk.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Xk = Bk || "jetpack" === kk.gearPowerKind && ak;
        this.set({
          gauge: kk,
          jetShown: Xk
        }), Xk && !Bk && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(kk) {
        this.view = kk, Gt.o.Hf(QA, kk, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Fe = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function Be(kk) {
      let {
        store: Fk
      } = kk;
      const Bk = (0, as.g)(QA, Fk.get());
      return Bk ? "jetpack" === Bk.gauge.gearPowerKind ? (0, Sa.jsx)(Re, {
        view: Bk
      }) : (0, Sa.jsx)(te, {
        gauge: Bk.gauge
      }) : null
    }

    function Re(kk) {
      let {
        view: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)(), {
        gauge: Rk
      } = Fk, tk = Rk.gearChargeMax > 0 ? Math.max(0, Math.min(1, Rk.gearCharge / Rk.gearChargeMax)) : 0, ak = Fe[Rk.gearChargeState], Xk = ak ? Bk(ak) : null;
      return (0, Sa.jsxs)("div", {
        className: Ot()("Baf2JetArc", {
          Shown: Fk.jetShown,
          Low: tk < .2,
          Warm: tk >= .2 && tk < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - tk)
        },
        "aria-hidden": !Fk.jetShown,
        children: [(0, Sa.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Sa.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: ae,
            pathLength: 100
          }), (0, Sa.jsx)("path", {
            className: "Baf2JetArcFill",
            d: ae,
            pathLength: 100
          })]
        }), (0, Sa.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * tk), "%"]
        }), Xk && (0, Sa.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Xk
        })]
      })
    }

    function te(kk) {
      let {
        gauge: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)(), Rk = function(kk, Fk) {
        switch (Fk.gearPowerKind) {
          case "skyPack":
            return kk("buildAFactory2Game:gearSkyPack", {
              charge: Fk.gearCharge,
              max: Fk.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return kk("buildAFactory2Game:gearIslandDraw", {
              power: Ik(Fk.gearIslandPower),
              cost: Ik(Fk.gearCostPerUse)
            });
          case "barrier":
            return kk("buildAFactory2Game:gearBarrier", {
              shield: Math.round(Fk.gearCharge),
              max: Fk.gearChargeMax,
              power: Ik(Fk.gearIslandPower)
            });
          default:
            return null
        }
      }(Bk, Fk);
      return null === Rk ? null : (0, Sa.jsx)(GA.g, {
        children: (0, Sa.jsx)("div", {
          className: Ot()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === Fk.gearChargeState || "outOfCharge" === Fk.gearChargeState
          }),
          role: "status",
          children: Rk
        })
      })
    }
    const ae = (() => {
      const kk = kk => {
        const Fk = kk * Math.PI / 180;
        return `${(40*Math.cos(Fk)).toFixed(2)} ${(40*Math.sin(Fk)).toFixed(2)}`
      };
      return `M ${kk(160)} A 40 40 0 1 1 ${kk(380)}`
    })();
    class Xe {
      constructor(kk) {
        this.onElement = kk, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      zW(kk) {
        let Fk = kk.baf2LabelsReset || kk.baf2LabelsIsland !== this.island;
        Fk && (this.labels.clear(), this.island = kk.baf2LabelsIsland);
        for (const [Bk, Rk, tk, ak, Xk] of kk.baf2LabelsList) {
          const kk = `${Bk},${Rk},${tk}`,
            bk = this.labels.get(kk);
          null === ak ? Fk = this.labels.delete(kk) || Fk : bk && bk.item === ak && (bk.count === Xk || bk.count >= 0 && Xk >= 0) ? bk.count !== Xk && (bk.count = Xk, this.writeCount(kk, Xk)) : (this.labels.set(kk, {
            key: kk,
            pos: [Bk, Rk, tk],
            item: ak,
            count: Xk
          }), this.writeCount(kk, Xk), Fk = !0)
        }
        if (this.changes++, Fk) {
          this.snapshot = [...this.labels.values()];
          for (const kk of this.listeners) kk()
        }
      }
      bindCount(kk) {
        const Fk = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${kk}`;
        let Bk = this.countRefs.get(Fk);
        return Bk || (Bk = Bk => {
          var Rk, tk;
          Bk ? (this.countElements.set(Fk, Bk), this.writeCount(kk, null !== (Rk = null === (tk = this.labels.get(kk)) || void 0 === tk ? void 0 : tk.count) && void 0 !== Rk ? Rk : -1)) : (this.countElements.delete(Fk), this.countRefs.delete(Fk))
        }, this.countRefs.set(Fk, Bk)), Bk
      }
      setCountWords(kk) {
        this.countWords = kk;
        for (const [Fk, Bk] of this.labels) this.writePart(`words|${Fk}`, kk(Bk.count), Bk.count)
      }
      writeCount(kk, Fk) {
        this.writePart(`bare|${kk}`, ia(Fk), Fk), this.countElements.has(`words|${kk}`) && this.writePart(`words|${kk}`, this.countWords(Fk), Fk)
      }
      writePart(kk, Fk, Bk) {
        const Rk = this.countElements.get(kk);
        if (!Rk || Bk < 0) return;
        const tk = Rk.firstChild;
        tk && 3 === tk.nodeType && !tk.nextSibling ? tk.nodeValue !== Fk && (tk.nodeValue = Fk) : Rk.textContent !== Fk && (Rk.textContent = Fk)
      }
      list() {
        return this.snapshot
      }
      at(kk) {
        return this.labels.get(`${kk[0]},${kk[1]},${kk[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      bind(kk) {
        let Fk = this.refs.get(kk);
        return Fk || (Fk = Fk => {
          const Bk = this.elements.get(kk);
          var Rk, tk;
          Bk && (null === (Rk = this.onElement) || void 0 === Rk || Rk.call(this, Bk, !1));
          Fk ? (this.elements.set(kk, Fk), null === (tk = this.onElement) || void 0 === tk || tk.call(this, Fk, !0)) : (this.elements.delete(kk), this.refs.delete(kk))
        }, this.refs.set(kk, Fk)), Fk
      }
      onAfterRender(kk, Fk, Bk, Rk) {
        for (const tk of this.snapshot) {
          const ak = this.elements.get(tk.key);
          if (!ak) continue;
          if (Rk(tk.key)) {
            (0, aA.e)(ak, !0);
            continue
          }
          const Xk = AA(ak, kk, Fk, tk.pos, 1.1, 24);
          Xk && Bk.add(Xk, ak, 0, !1)
        }
      }
    }
    const be = (0, Rk.memo)((function(kk) {
        let {
          item: Fk
        } = kk;
        return (0, Sa.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Sa.jsx)(Mt.e, {
            itemName: Fk,
            amount: 0
          })
        })
      })),
      we = (0, Rk.memo)((function(kk) {
        let {
          label: Fk,
          bindRef: Bk,
          countRef: Rk,
          wordsRef: tk
        } = kk;
        return (0, Sa.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: Bk,
          hidden: !0,
          children: [(0, Sa.jsx)(be, {
            item: Fk.item
          }), Fk.count >= 0 && (0, Sa.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Sa.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: tk
            }), (0, Sa.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Rk
            })]
          })]
        })
      })),
      de = (0, Rk.memo)((function(kk) {
        let {
          store: Fk
        } = kk;
        const {
          t: Bk
        } = (0, Ht.x)(), [tk, ak] = (0, Rk.useState)((() => Fk.list()));
        return (0, Rk.useEffect)((() => (ak(Fk.list()), Fk.subscribe((() => {
          ak(Fk.list())
        })))), [Fk]), (0, Rk.useEffect)((() => {
          Fk.setCountWords((kk => Bk("buildAFactory2Game:labelSiloCount", {
            count: ia(kk)
          })))
        }), [Fk, Bk]), (0, Sa.jsx)("div", {
          className: "Baf2IslandLabels",
          children: tk.map((kk => -2 === kk.count ? null : (0, Sa.jsx)(we, {
            label: kk,
            bindRef: Fk.bind(kk.key),
            countRef: Fk.bindCount(kk.key),
            wordsRef: Fk.bindCount(kk.key, "words")
          }, kk.key)))
        })
      })),
      se = {
        read: () => !0,
        write: () => {}
      };

    function Ve(kk) {
      return `${kk[0]},${kk[1]},${kk[2]}`
    }

    function Je(kk) {
      let [Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk] = kk;
      const Ak = void 0 === Vk || void 0 === Jk ? function(kk) {
        return [Math.floor((kk - 1) / 2), 0]
      }(ak) : [Vk, Jk];
      return {
        kind: 0 === wk ? "reactor" : "battery",
        box: CB([Fk, Bk, Rk], tk, ak, Xk, bk, Ak),
        formed: 1 === dk,
        level: sk
      }
    }
    class Ae {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se;
        this.guideSetting = kk, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = kk.read()
      }
      zW(kk) {
        var Fk;
        const Bk = new Map;
        for (const Rk of kk.baf2RxPlanList) {
          const kk = Je(Rk);
          Bk.set(Ve(kk.box.ctrl), kk)
        }
        this.plans = Bk, this.layouts = new Map((null !== (Fk = kk.baf2RxLayouts) && void 0 !== Fk ? Fk : []).map((kk => {
          let [Fk, Bk, Rk, tk] = kk;
          return [Ve([Fk, Bk, Rk]), tk]
        }))), this.predicted.clear(), kk.baf2RxFormedAt && (this.formed = {
          ctrl: kk.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Rk of [...this.startersOff]) {
          const kk = Bk.get(Rk);
          kk && !kk.formed || this.startersOff.delete(Rk)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((kk => this.planByKey(kk)))
      }
      planAt(kk) {
        return this.planByKey(Ve(kk))
      }
      predictSize(kk, Fk) {
        this.predicted.set(Ve(kk), Fk), this.changed()
      }
      unpredict(kk) {
        this.predicted.delete(Ve(kk)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(kk) {
        var Fk;
        const Bk = Ve(kk);
        return this.predicted.has(Bk) ? null : null !== (Fk = this.layouts.get(Bk)) && void 0 !== Fk ? Fk : null
      }
      showsStarter(kk) {
        return !this.startersOff.has(Ve(kk))
      }
      setStarter(kk, Fk) {
        const Bk = Ve(kk);
        Fk ? this.startersOff.delete(Bk) : this.startersOff.add(Bk), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(kk) {
        this.guide = kk, this.guideSetting.write(kk), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(kk) {
        const Fk = this.plans.get(kk);
        if (!Fk) return null;
        const Bk = this.predicted.get(kk);
        return Bk ? {
          ...Fk,
          box: pB(Fk.box, Fk.kind, Bk[0], Bk[1], Bk[2])
        } : Fk
      }
      changed() {
        this.version++;
        for (const kk of this.listeners) kk()
      }
    }
    var ee = Bk(182);
    const ye = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function fe(kk, Fk, Bk, Rk) {
      const tk = kk.length / 3;
      for (let ak = 0; ak < ye.length / 3; ak++) kk.push(ye[3 * ak] * Rk[0] / 2 + Bk[0], ye[3 * ak + 1] * Rk[1] / 2 + Bk[1], ye[3 * ak + 2] * Rk[2] / 2 + Bk[2]);
      for (let ak = tk; ak < tk + 24; ak += 4) Fk.push(ak, ak + 1, ak + 2, ak, ak + 2, ak + 3)
    }

    function me(kk, Fk, Bk) {
      const Rk = Fk[0][0],
        tk = [],
        ak = [];
      for (const [Xk, bk] of Fk) fe(tk, ak, [Xk[0] - Rk[0], Xk[1] - Rk[1], Xk[2] - Rk[2]], bk);
      return kk.createGameMesh({
        positions: tk,
        indices: ak
      }, Bk, Rk)
    }

    function We(kk, Fk) {
      const Bk = kk.w - 2,
        Rk = kk.d - 2;
      return 1 === function(kk, Fk, Bk, Rk) {
        const [tk, ak, Xk] = kk;
        if (Number(tk <= 2) + Number(ak <= 2) + Number(Xk <= 2) >= 2) return function(kk, Fk, Bk) {
          return (kk + Fk + Bk) % 2 === 0 ? 1 : 3
        }(Fk, Bk, Rk);
        const [bk, wk] = tk >= ak && tk >= Xk ? [Bk, Rk] : ak >= Xk ? [Fk, Rk] : [Fk, Bk];
        return bk % 2 === 0 && wk % 2 === 0 ? 1 : 3
      }([Bk, kk.h - 2, Rk], Fk % Bk, Math.floor(Fk / (Bk * Rk)), Math.floor(Fk / Bk) % Rk) ? "rod" : "channel"
    }

    function ve(kk, Fk, Bk) {
      if ("reactor" !== kk.kind || kk.formed || !Fk) return !1;
      const Rk = jB(kk.box);
      for (let tk = 0; tk < Rk; tk++) {
        const kk = Bk(tk);
        if (null !== kk && MB(kk)) return !1
      }
      return !0
    }

    function ie(kk, Fk, Bk, Rk, tk) {
      var ak;
      let Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const bk = FR(kk.box, Fk),
        wk = aR(kk.kind, bk, Bk);
      if ("wrong" === wk || "blocked" === wk) return "wrong";
      if (!tk) return null;
      if ("inside" === bk && "reactor" === kk.kind && "Air" === gB(Bk)) {
        if (null !== Xk) {
          var dk;
          const Bk = kJ[FJ(Xk, BR(kk.box, Fk))];
          return Bk && null !== (dk = Sw(Bk)) && void 0 !== dk ? dk : null
        }
        if (Rk) return We(kk.box, BR(kk.box, Fk))
      }
      if ("missing" !== wk) return null;
      const sk = XR(kk.kind, bk);
      return null === sk ? null : null !== (ak = Sw(sk)) && void 0 !== ak ? ak : null
    }
    const Ye = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function oe(kk, Fk, Bk) {
      const Rk = Bk => {
        const Rk = Fk(QB(kk.box, Bk));
        return null !== Rk && function(kk, Fk) {
          return "reactor" !== kk.kind || Fk !== nB(kk.box) && "inside" !== FR(kk.box, Fk)
        }(kk, Bk) && "ok" !== aR(kk.kind, FR(kk.box, Bk), Rk)
      };
      if (Bk) {
        const ak = kR(kk.box, [Math.floor(Bk[0]), Math.floor(Bk[1]), Math.floor(Bk[2])]);
        if (ak >= 0 && (Rk(ak) || (tk = ak, "reactor" === kk.kind && "inside" === FR(kk.box, tk) && "Air" === Fk(QB(kk.box, tk))))) return ak
      }
      var tk;
      const ak = jB(kk.box);
      for (let Xk = 0; Xk < ak; Xk++)
        if (Rk(Xk)) return Xk;
      return -1
    }

    function Le(kk, Fk) {
      return Math.floor(Fk / (kk.w * kk.d))
    }

    function Oe(kk, Fk, Bk) {
      return Bk >= 0 && Le(kk, Fk) > Le(kk, Bk)
    }

    function Ee(kk, Fk) {
      return Fk >= 0 && kk.h >= 3 && Le(kk, Fk) === kk.h - 1
    }

    function Se(kk) {
      const Fk = gB(kk);
      return Fk === vB || "Collider" === Fk || "Laser" === Fk || Fk.startsWith("_Collider ")
    }

    function Ne(kk, Fk, Bk, Rk) {
      if (Rk(kk)) return null;
      if (!Ye.every((Fk => {
          let [Rk, tk, ak] = Fk;
          const Xk = Bk([kk[0] + Rk, kk[1] + tk, kk[2] + ak]);
          return null !== Xk && !zB("reactor", Xk) && "reactor" !== UB(Xk)
        }))) return null;
      const tk = PB("reactor").min,
        ak = CB([kk[0], kk[1], kk[2]], function(kk, Fk) {
          const Bk = Fk[0] - (kk[0] + .5),
            Rk = Fk[2] - (kk[2] + .5);
          return Math.abs(Bk) >= Math.abs(Rk) ? Bk >= 0 ? 2 : 4 : Rk >= 0 ? 1 : 3
        }(kk, Fk), tk, tk, tk, ZB("reactor", tk)),
        Xk = nB(ak);
      let bk = !0;
      for (let wk = 0; wk < jB(ak) && bk; wk++) {
        if (wk === Xk) continue;
        const kk = QB(ak, wk),
          Fk = Bk(kk);
        bk = !Rk(kk) && (null === Fk || !Se(Fk))
      }
      return {
        box: ak,
        fits: bk
      }
    }
    const He = Ew,
      ue = "baf2Goal",
      Me = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      ge = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Ue = .4;

    function ce(kk, Fk) {
      let [Bk, Rk, tk] = kk;
      const ak = Gw([Bk - .02, Rk - .02, tk - .02], [Bk + 1.02, Rk + 1.02, tk + 1.02], .07);
      return Fk && (ak.push([
        [Bk + .5, Rk + 1 + .7, tk + .5],
        [.08, 1.4, .08]
      ]), ak.push([
        [Bk + .5, Rk + 1 + 1.4 + .2, tk + .5],
        [Ue, Ue, Ue]
      ])), ak
    }

    function Ge(kk, Fk) {
      let [Bk, Rk, tk] = Fk;
      return kk.isBlockInLoadedChunk(Bk, Rk, tk) ? kk.blockIdToBlockName(kk.getBlockId(Bk, Rk, tk)) : null
    }
    let Te = null;
    const re = new Set;
    let De = null;

    function ze(kk) {
      Te = kk;
      for (const Fk of re) Fk(kk)
    }
    class Pe {
      constructor(kk) {
        var Fk;
        this.plans = kk, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (Fk = kk => {
          var Fk, Bk;
          this.setGoal(null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.goal) && void 0 !== Fk ? Fk : null, null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.startsBattery) && void 0 !== Bk && Bk)
        }, De ??= [Gt.o.subscribe("setDirectionArrow", (kk => {
          let {
            id: Fk,
            position: Bk,
            text: Rk
          } = kk;
          Fk === ue && ze({
            goal: [Math.floor(Bk[0]), Math.floor(Bk[1]), Math.floor(Bk[2])],
            startsBattery: JSON.stringify(null !== Rk && void 0 !== Rk ? Rk : null).includes("arrowStartBattery")
          })
        })), Gt.o.subscribe("clearDirectionArrow", (kk => {
          let {
            id: Fk
          } = kk;
          null !== Fk && Fk !== ue || ze(null)
        }))], re.add(Fk), Fk(Te), () => {
          re.delete(Fk)
        })
      }
      onAfterRender(kk, Fk) {
        const Bk = performance.now();
        if (this.cues.length > 0) {
          const Fk = .55 + .45 * Math.sin(Bk / 1100 * Math.PI * 2);
          for (const Bk of this.cues) kk.setGameMesh(Bk, {
            visibility: Fk
          })
        }
        if (Bk - this.lastCheckMs < 150) return;
        this.lastCheckMs = Bk;
        const Rk = this.plans.all().filter((kk => {
            const [Bk, Rk, tk] = kk.box.ctrl;
            return (!kk.formed || null !== this.plans.layoutOf(kk.box.ctrl)) && (Bk - Fk[0]) ** 2 + (Rk - Fk[1]) ** 2 + (tk - Fk[2]) ** 2 <= 2304
          })),
          tk = function(kk, Fk) {
            const Bk = ee.h.Ze,
              Rk = new Map;
            for (const ak of Fk) {
              const Fk = QB(ak.box, 0),
                Xk = QB(ak.box, jB(ak.box) - 1),
                bk = [Math.min(Fk[0], Xk[0]), Math.min(Fk[1], Xk[1]), Math.min(Fk[2], Xk[2])].map((kk => Math.floor(kk / Bk))),
                wk = [Math.max(Fk[0], Xk[0]), Math.max(Fk[1], Xk[1]), Math.max(Fk[2], Xk[2])].map((kk => Math.floor(kk / Bk)));
              for (let Bk = bk[0]; Bk <= wk[0]; Bk++)
                for (let Fk = bk[1]; Fk <= wk[1]; Fk++)
                  for (let ak = bk[2]; ak <= wk[2]; ak++) {
                    var tk;
                    Rk.set(`${Bk},${Fk},${ak}`, null !== (tk = kk.getChunkVersion(Bk, Fk, ak)) && void 0 !== tk ? tk : -1)
                  }
            }
            return Rk
          }(kk, Rk);
        this.plans.getVersion() === this.storeVersion && (function(kk, Fk) {
          if (kk.size !== Fk.size) return !1;
          for (const [Bk, Rk] of kk)
            if (Fk.get(Bk) !== Rk) return !1;
          return !0
        }(tk, this.chunkVersions) || Bk - this.lastRescanMs < 600) || (this.lastRescanMs = Bk, this.storeVersion = this.plans.getVersion(), this.chunkVersions = tk, this.redraw(kk, Rk))
      }
      dispose(kk) {
        this.unwatch(), Te = null, this.clearMeshes(kk), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(kk, Fk) {
        var Bk;
        (null === kk || void 0 === kk ? void 0 : kk.join()) === (null === (Bk = this.goal) || void 0 === Bk ? void 0 : Bk.join()) && Fk === this.startsBattery || (this.goal = kk, this.startsBattery = Fk, this.storeVersion = -1)
      }
      redraw(kk, Fk) {
        const Bk = Fk => Ge(kk, Fk),
          Rk = new Map,
          tk = [],
          ak = this.plans.guideOn();
        for (const dk of Fk) {
          const kk = ak && ve(dk, this.plans.showsStarter(dk.box.ctrl), (kk => Bk(QB(dk.box, kk)))),
            Fk = "reactor" === dk.kind ? this.plans.layoutOf(dk.box.ctrl) : null,
            Xk = ak && !dk.formed ? oe(dk, Bk, this.goal) : -1;
          Xk >= 0 && tk.push([QB(dk.box, Xk), Ee(dk.box, Xk)]);
          const bk = jB(dk.box);
          for (let tk = 0; tk < bk; tk++) {
            const bk = QB(dk.box, tk),
              wk = Bk(bk),
              sk = null === wk ? null : ie(dk, tk, wk, kk, ak, Fk);
            if (null !== sk) {
              const kk = "wrong" !== sk && Oe(dk.box, tk, Xk),
                Fk = kk ? `${sk}Dim` : sk;
              let Bk = Rk.get(Fk);
              Bk || (Bk = {
                draw: {
                  ghost: sk,
                  dim: kk
                },
                list: []
              }, Rk.set(Fk, Bk)), Bk.list.push(bk)
            }
          }
        }
        if (ak && this.startsBattery && this.goal) {
          const [kk, Fk, tk] = this.goal, ak = [];
          for (const [Rk, Xk, bk] of Me) {
            const wk = [kk + Rk, Fk + Xk, tk + bk];
            "Air" === Bk(wk) && ak.push(wk)
          }
          if (ak.length > 0) {
            var Xk;
            const kk = null !== (Xk = Rk.get("cell")) && void 0 !== Xk ? Xk : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            kk.list.push(...ak), Rk.set("cell", kk)
          }
        }
        const bk = [...Rk.keys()].sort(),
          wk = [...bk.map((kk => `${kk}:${Rk.get(kk).list.join(";")}`)), `cue:${tk.join(";")}`].join("|");
        if (wk !== this.shownKey) {
          this.shownKey = wk, this.clearMeshes(kk);
          for (const Fk of bk) {
            const {
              draw: Bk,
              list: tk
            } = Rk.get(Fk);
            this.meshes.push(this.build(kk, Bk, tk))
          }
          for (const [Fk, Bk] of tk) this.cues.push(me(kk, ce(Fk, Bk), ge))
        }
      }
      build(kk, Fk, Bk) {
        let {
          ghost: Rk,
          dim: tk
        } = Fk;
        const {
          size: ak,
          colour: Xk,
          alpha: bk
        } = He[Rk], wk = Bk[0], dk = [], sk = [];
        for (const [Vk, Jk, Ak] of Bk) fe(dk, sk, [Vk - wk[0] + .5, Jk - wk[1] + .5, Ak - wk[2] + .5], [ak, ak, ak]);
        return kk.createGameMesh({
          positions: dk,
          indices: sk
        }, {
          rgb: Xk,
          alpha: bk * (tk ? .3 : 1)
        }, wk)
      }
      clearMeshes(kk) {
        for (const Fk of [...this.meshes, ...this.cues]) kk.disposeGameMesh(Fk);
        this.meshes = [], this.cues = []
      }
    }
    const he = [.56, .83, 1],
      qe = [1, .3, .25];
    class Ce {
      constructor(kk) {
        this.plans = kk, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(kk, Fk, Bk) {
        var Rk;
        const tk = performance.now();
        if (tk - this.lastCheckMs < 150) return;
        this.lastCheckMs = tk;
        const ak = Fk => Ge(kk, Fk),
          Xk = null === (Rk = kk.LFk(Fk)) || void 0 === Rk ? void 0 : Rk.name,
          bk = Xk && "Reactor Frame" === gB(Xk) ? kk.getTargetedBlock() : null,
          wk = bk ? [bk.rb[0], bk.rb[1], bk.rb[2]] : null,
          dk = null !== wk && "Air" === ak(wk) && wk.every(((kk, Fk) => Math.abs(kk + .5 - Bk[Fk]) <= 8)) ? Ne(wk, Bk, ak, (kk => this.inPlan(kk))) : null,
          sk = dk ? `${dk.box.ctrl.join()}|${dk.box.rot}|${dk.fits}` : "";
        sk !== this.shownKey && this.show(kk, sk, dk)
      }
      dispose(kk) {
        this.clear(kk), this.shownKey = ""
      }
      inPlan(kk) {
        return this.plans.all().some((Fk => kR(Fk.box, kk) >= 0))
      }
      show(kk, Fk, Bk) {
        if (this.clear(kk), this.shownKey = Fk, !Bk) return;
        const {
          box: Rk,
          fits: tk
        } = Bk, ak = tk ? he : qe, {
          lo: Xk,
          hi: bk
        } = Uw(Rk);
        this.meshes.push(me(kk, Gw(Xk, bk, .05), {
          rgb: ak,
          alpha: 1
        }));
        const wk = [],
          dk = QB(Rk, 0)[1];
        for (let sk = 0; sk < Rk.w * Rk.d; sk++) {
          const [kk, , Fk] = QB(Rk, sk);
          wk.push([
            [kk + .5, dk + .02 + .01, Fk + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(me(kk, wk, {
          rgb: ak,
          alpha: .25
        }))
      }
      clear(kk) {
        for (const Fk of this.meshes) kk.disposeGameMesh(Fk);
        this.meshes = []
      }
    }
    const Ze = "buildAFactory2Game:";

    function pe(kk, Fk, Bk) {
      const Rk = kk => {
          const [Bk, Rk, tk] = kk.box.ctrl;
          return Bk === Fk[0] && Rk === Fk[1] && tk === Fk[2]
        },
        tk = kk.find((kk => Rk(kk) || kR(kk.box, Fk) >= 0));
      if (!tk) return null;
      const ak = function(kk, Fk, Bk) {
        const {
          w: Rk,
          h: tk,
          d: ak
        } = kk.box, Xk = "reactor" === kk.kind ? `${Ze}rxTitle` : `${Ze}batTitle`;
        if (kk.formed) return {
          key: `${Ze}lookPlanFormed`,
          kindKey: Xk,
          w: Rk,
          h: tk,
          d: ak,
          count: 0
        };
        let bk = 0,
          wk = 0;
        for (let sk = 0; sk < jB(kk.box); sk++) {
          const Fk = Bk(QB(kk.box, sk)),
            Rk = null === Fk ? "ok" : aR(kk.kind, FR(kk.box, sk), Fk);
          bk += "missing" === Rk ? 1 : 0, wk += "wrong" === Rk || "blocked" === Rk ? 1 : 0
        }
        const dk = function(kk, Fk, Bk) {
          if (Fk < 0 || null === Bk) return;
          const Rk = FR(kk.box, Fk),
            tk = aR(kk.kind, Rk, Bk);
          return "blocked" === tk ? `${Ze}lookWhy_blocked` : "wrong" === tk ? "ctrl" === Rk ? `${Ze}lookWhy_ctrl` : `${Ze}lookWhy_reactor_${Rk}` : void 0
        }(kk, kR(kk.box, Fk), Bk([Fk[0], Fk[1], Fk[2]]));
        if (bk > 0) return {
          key: `${Ze}lookPlanToBuild`,
          kindKey: Xk,
          w: Rk,
          h: tk,
          d: ak,
          count: bk,
          why: dk
        };
        if (wk > 0) return {
          key: `${Ze}lookPlanTakeOut`,
          kindKey: Xk,
          w: Rk,
          h: tk,
          d: ak,
          count: wk,
          why: dk
        };
        return {
          key: "reactor" === kk.kind ? `${Ze}lookPlanNoRods` : `${Ze}lookPlanDone`,
          kindKey: Xk,
          w: Rk,
          h: tk,
          d: ak,
          count: 0
        }
      }(tk, Fk, Bk);
      return "reactor" === tk.kind && Rk(tk) ? {
        ...ak,
        ctrl: !0
      } : ak
    }

    function Ke(kk, Fk) {
      return kk === Fk || null !== kk && null !== Fk && kk.key === Fk.key && kk.kindKey === Fk.kindKey && kk.w === Fk.w && kk.h === Fk.h && kk.d === Fk.d && kk.count === Fk.count && kk.why === Fk.why && kk.ctrl === Fk.ctrl
    }

    function xe() {
      return performance.now()
    }
    class je {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xe;
        this.ticket = kk, this.sent = Fk, this.backstopMs = Bk, this.now = Rk, this.queuedAt = void 0, this.queuedAt = Rk()
      }
      answered() {
        const kk = this.now(),
          Fk = this.sent.leftAt(this.ticket);
        return null !== Fk && kk - Fk > 4e3 || kk - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class le {
      constructor() {
        this.echoes = []
      }
      add(kk) {
        this.echoes = this.echoes.filter((kk => !kk.answered())), this.echoes.push(kk)
      }
      answered() {
        var kk, Fk;
        return null === (kk = null === (Fk = this.echoes.at(-1)) || void 0 === Fk ? void 0 : Fk.answered()) || void 0 === kk || kk
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((kk => kk.answered()))
      }
      age() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.echoes.at(-1)) || void 0 === Fk ? void 0 : Fk.age()) && void 0 !== kk ? kk : null
      }
      clear() {
        this.echoes = []
      }
    }
    class ne {
      constructor(kk) {
        this.send = kk, this.value = null, this.sent = null, this.echoes = new le, this.down = !1, this.timer = null
      }
      shown(kk) {
        return null === this.value ? kk : this.down || this.value !== this.sent ? this.value : kk === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), kk) : this.value
      }
      pendingFor(kk) {
        return null !== this.value && this.value === this.sent && kk !== this.value ? this.echoes.age() : null
      }
      assume(kk, Fk) {
        this.disarm(), this.down = !1, this.value = kk, this.sent = kk, this.echoes.clear(), this.echoes.add(Fk)
      }
      press() {
        this.down = !0
      }
      drag(kk) {
        this.value = kk, this.arm(this.down ? 1e3 : 400)
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
      arm(kk) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), kk)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class Ie {
      constructor() {
        this.pending = new Map
      }
      set(kk, Fk, Bk) {
        var Rk;
        const tk = null !== (Rk = this.pending.get(kk)) && void 0 !== Rk ? Rk : {
          on: Fk,
          echoes: new le
        };
        tk.on = Fk, tk.echoes.add(Bk), this.pending.set(kk, tk)
      }
      shown(kk) {
        let Fk = kk;
        for (const [Bk, {
            on: Rk,
            echoes: tk
          }] of this.pending) 0 !== (kk & Bk) === Rk && tk.agreeCounts() || tk.answered() ? this.pending.delete(Bk) : Fk = Rk ? Fk | Bk : Fk & ~Bk;
        return Fk
      }
      pendingMask() {
        let kk = 0;
        for (const Fk of this.pending.keys()) kk |= Fk;
        return kk
      }
      pendingFor(kk) {
        let Fk = null;
        for (const [Rk, {
            on: tk,
            echoes: ak
          }] of this.pending) {
          if (void 0 !== kk && 0 !== (kk & Rk) === tk) continue;
          const Xk = ak.age();
          var Bk;
          if (null !== Xk) Fk = Math.max(null !== (Bk = Fk) && void 0 !== Bk ? Bk : 0, Xk)
        }
        return Fk
      }
      clear() {
        this.pending.clear()
      }
    }
    class Qe {
      constructor() {
        this.dims = null, this.echoes = new le, this.unmet = null
      }
      shown(kk) {
        var Fk;
        return this.dims && (ky(this.dims, kk) && this.echoes.agreeCounts() || this.echoes.answered()) && (ky(this.dims, kk) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Fk = this.dims) && void 0 !== Fk ? Fk : kk
      }
      takeUnmet() {
        const kk = this.unmet;
        return this.unmet = null, kk
      }
      set(kk, Fk) {
        this.dims = kk, this.echoes.add(Fk)
      }
      pendingFor(kk) {
        return null === this.dims || kk && ky(this.dims, kk) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function ky(kk, Fk) {
      return kk[0] === Fk[0] && kk[1] === Fk[1] && kk[2] === Fk[2]
    }
    class Fy {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe;
        this.now = kk, this.taps = new Map
      }
      tap(kk, Fk, Bk) {
        return !this.busy(kk) && (this.taps.set(kk, {
          at: this.now(),
          done: Fk
        }), Bk(), !0)
      }
      settle(kk) {
        for (const [Fk, Bk] of [...this.taps]) Bk.done(kk) && this.taps.delete(Fk)
      }
      busy(kk) {
        const Fk = this.taps.get(kk);
        return !!Fk && (!(this.now() - Fk.at >= 3e3) || (this.taps.delete(kk), !1))
      }
      busyIds() {
        const kk = new Set;
        for (const Fk of [...this.taps.keys()]) this.busy(Fk) && kk.add(Fk);
        return kk
      }
      clear() {
        this.taps.clear()
      }
    }

    function By(kk) {
      return {
        send: Fk => kk.track(Fk),
        sendUrgent: (Fk, Bk) => kk.track(Fk, {
          urgent: !0,
          supersedes: Bk
        }),
        leftAt: Fk => kk.leftAt(Fk),
        holdReserve: () => kk.holdUrgentReserve(),
        answerMs: GX
      }
    }

    function Ry() {
      return performance.now()
    }

    function ty(kk) {
      const Fk = kk.baf2RxNeed.map((kk => {
        let [Fk, Bk] = kk;
        return [Fk, Bk]
      }));
      return JSON.stringify([kk.baf2RxFormed, Fk, kk.baf2RxBad, kk.baf2RxCells])
    }

    function ay(kk, Fk) {
      const Bk = 0 !== (Fk & AF),
        Rk = 0 !== (kk.baf2RxFlags & AF);
      return !Bk || Rk || "running" !== kk.baf2RxState && "idle" !== kk.baf2RxState ? !Bk && Rk && "scram" === kk.baf2RxState && kk.baf2RxFuel > 0 ? "idle" : kk.baf2RxState : "scram"
    }

    function Xy(kk) {
      return JSON.stringify([kk.baf2BatFormed, kk.baf2BatNeed, kk.baf2BatBad])
    }

    function by(kk) {
      return kk.join(",")
    }
    class wy {
      constructor() {
        this.listeners = new Set
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class dy {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(kk, Fk) {
        this.lastAt = kk, this.lastUntil = kk + Fk
      }
      answered(kk) {
        return this.lastAt >= kk || kk < this.lastUntil
      }
    }
    class sy {
      constructor(kk, Fk) {
        this.link = kk, this.now = Fk, this.hold = new Qe, this.picked = null, this.notTaken = null
      }
      shown(kk) {
        const Fk = this.hold.shown(kk);
        if (this.hold.takeUnmet() && this.picked) {
          var Bk;
          const {
            plans: Fk,
            ctrl: Rk,
            at: tk
          } = this.picked;
          this.picked = null, Fk.unpredict(Rk), null === (Bk = this.notTaken) || void 0 === Bk || Bk.call(this, kk, tk)
        }
        return Fk
      }
      pendingFor(kk) {
        return this.hold.pendingFor(kk)
      }
      AA(kk, Fk, Bk) {
        kk.predictSize(Fk, Bk), this.picked = {
          plans: kk,
          ctrl: Fk,
          at: this.now()
        };
        const Rk = this.link.send(JF(Fk, "plan", ...Bk));
        this.hold.set(Bk, new je(Rk, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class Vy {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ry;
        this.plans = kk, this.readInterior = Fk, this.link = Bk, this.now = Rk, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Ie, this.throttle = void 0, this.oneShots = void 0, this.listeners = new wy, this.redraw = null, this.releaseReserve = null, this.size = new sy(Bk, Rk), this.oneShots = new Fy(Rk), this.throttle = new ne((kk => this.echo(this.link.send(this.command("throttle", kk)))))
      }
      set(kk) {
        !kk.baf2RxOpen && this.raw && by(this.raw.baf2RxAt) === by(kk.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(kk), this.Hf(kk)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(kk) {
        this.size.notTaken = kk
      }
      resize(kk) {
        this.raw && (this.size.AA(this.plans, this.raw.baf2RxAt, kk), this.Hf(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const kk = this.raw.baf2RxAt;
        this.plans.setStarter(kk, !this.plans.showsStarter(kk)), this.Hf(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Hf(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Hf(this.raw)
      }
      send(kk) {
        if (this.raw) {
          for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
          this.link.send(this.command(kk, ...Bk))
        }
      }
      tap(kk, Fk) {
        this.raw && this.oneShots.tap(kk, function(kk, Fk) {
          if ("start" === kk) return kk => 0 === (kk.baf2RxFlags & AF);
          if ("odConfirm" === kk) return kk => 0 !== (kk.baf2RxFlags & eF);
          const Bk = ty(Fk);
          return kk => ty(kk) !== Bk
        }(kk, this.raw), Fk) && ("start" === kk && (this.startedAt = this.now()), this.Hf(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(AF, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(kk, Fk) {
        if (!this.raw) return;
        const Bk = kk === AF ? this.command(Fk ? "scram" : "start") : this.command("od", Fk ? 1 : 0),
          Rk = Fk && kk === AF,
          tk = `${VF} ${this.raw.baf2RxAt.join(" ")} `,
          ak = this.echo(Rk ? this.link.sendUrgent(Bk, (kk => {
            const Fk = kk.startsWith(tk) ? kk.slice(tk.length).split(" ")[0] : null;
            return "throttle" === Fk || "start" === Fk
          })) : this.link.send(Bk));
        this.flags.set(kk, Fk, ak), Rk && this.throttle.assume(0, ak), this.Hf(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(kk) {
        this.throttle.drag(kk), this.raw && this.Hf(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Hf(this.raw)
      }
      subscribe(kk) {
        return this.listeners.subscribe(kk)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var kk;
        this.throttle.release(), null === (kk = this.releaseReserve) || void 0 === kk || kk.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(kk) {
        for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
        return JF(this.raw.baf2RxAt, kk, ...Bk)
      }
      echo(kk) {
        return new je(kk, this.link, this.link.answerMs, this.now)
      }
      Hf(kk) {
        var Fk;
        this.raw = kk;
        const Bk = this.flags.shown(kk.baf2RxFlags),
          Rk = {
            ...kk,
            baf2RxFlags: Bk,
            baf2RxTarget: this.throttle.shown(kk.baf2RxTarget),
            baf2RxState: ay(kk, Bk)
          },
          tk = this.size.shown(Rk.baf2RxDims),
          ak = this.throttle.pendingFor(),
          Xk = [this.throttle.pendingFor(kk.baf2RxTarget), this.flags.pendingFor(kk.baf2RxFlags), this.size.pendingFor(kk.baf2RxDims)].filter((kk => null !== kk)),
          bk = Xk.length > 0 ? Math.max(...Xk) : null,
          wk = this.oneShots.busyIds(),
          dk = Rk.baf2RxAt;
        let sk, Vk, Jk = null,
          Ak = [Math.max(0, tk[0] - 2), Math.max(0, tk[1] - 2), Math.max(0, tk[2] - 2)];
        if (Rk.baf2RxFormed) {
          const [kk, Fk, Bk] = Rk.baf2RxDims;
          Ak = [Math.max(0, kk - 2), Math.max(0, Fk - 2), Math.max(0, Bk - 2)], sk = Array.from(Rk.baf2RxCells, Number), Vk = `${Ak.join(",")}:${Rk.baf2RxCells}`
        } else {
          var ek;
          const kk = null === (ek = this.plans.planAt(dk)) || void 0 === ek ? void 0 : ek.box,
            Fk = kk ? pB(kk, "reactor", ...tk) : CB(dk, 1, ...tk, ZB("reactor", tk[0])),
            Bk = this.readInterior(Fk);
          Jk = Fw(Ak, Bk), sk = Bk, Vk = `${Ak.join(",")}:${Bk.join("")}`
        }(null === (Fk = this.looksOf) || void 0 === Fk ? void 0 : Fk.key) !== Vk && (this.looksOf = {
          key: Vk,
          looks: bw(Ak, sk)
        }), this.view = {
          status: Rk,
          dims: tk,
          plan: Jk,
          inner: Ak,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(dk),
          odConfirmed: this.odConfirmed || 0 !== (Rk.baf2RxFlags & iF),
          guide: this.plans.guideOn(),
          throttlePending: null !== ak,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== bk && bk >= 5e3,
          busy: wk,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== bk || wk.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Hf(this.raw)
        }), 250))
      }
    }
    class Jy {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ry;
        this.plans = kk, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new wy, this.redraw = null, this.size = new sy(Fk, Bk), this.oneShots = new Fy(Bk)
      }
      set(kk) {
        !kk.baf2BatOpen && this.view && by(this.view.status.baf2BatAt) === by(kk.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(kk), this.Hf(kk)
      }
      tap(kk, Fk) {
        if (!this.view) return;
        const Bk = Xy(this.view.status);
        this.oneShots.tap(kk, (kk => Xy(kk) !== Bk), Fk) && this.Hf(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(kk) {
        this.size.notTaken = kk
      }
      resize(kk) {
        this.view && (this.size.AA(this.plans, this.view.status.baf2BatAt, kk), this.Hf(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Hf(this.view.status)
      }
      subscribe(kk) {
        return this.listeners.subscribe(kk)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Hf(kk) {
        const Fk = this.size.shown(kk.baf2BatDims),
          Bk = this.oneShots.busyIds();
        this.view = {
          status: kk,
          dims: Fk,
          KV: Yw(Fk, kk.baf2BatDims) ? kk.baf2BatCapacity : sw(...Fk),
          guide: this.plans.guideOn(),
          busy: Bk
        }, this.listeners.notify(), Bk.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Hf(this.view.status)
        }), 250))
      }
    }
    const Ay = "buildAFactory2Game:";

    function ey() {
      var kk;
      const Fk = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!Fk) return null;
      const Bk = Fk.querySelector(".ExitButton");
      return function(kk, Fk) {
        const Bk = Fk ? Fk.left - 8 : kk.right;
        return {
          left: kk.left,
          top: kk.top,
          width: Math.max(0, Bk - kk.left),
          height: kk.height
        }
      }(Fk.getBoundingClientRect(), null !== (kk = null === Bk || void 0 === Bk ? void 0 : Bk.getBoundingClientRect()) && void 0 !== kk ? kk : null)
    }
    const yy = (0, Rk.memo)((function(kk) {
      let {
        store: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Ht.x)(), [tk, ak] = (0, Rk.useState)((() => Fk.get())), [Xk, bk] = (0, Rk.useState)((() => performance.now()));
      (0, Rk.useEffect)((() => (ak(Fk.get()), Fk.subscribe((() => {
        ak(Fk.get()), bk(performance.now())
      })))), [Fk]);
      const {
        alarm: wk,
        boomAt: dk
      } = tk, sk = null !== wk && null !== wk.secs, [Vk, Jk] = (0, Rk.useState)(null);
      (0, Rk.useEffect)((() => {
        if (!sk) return;
        Jk(ey());
        const kk = setInterval((() => {
          bk(performance.now()), Jk(ey())
        }), 250);
        return () => {
          clearInterval(kk)
        }
      }), [sk]);
      const [Ak, ek] = (0, Rk.useState)(!1);
      return (0, Rk.useEffect)((() => {
        if (dk === -1 / 0) return;
        ek(!0);
        const kk = setTimeout((() => {
          ek(!1)
        }), 1300);
        return () => {
          clearTimeout(kk)
        }
      }), [dk]), (0, Sa.jsxs)(Sa.Fragment, {
        children: [null !== wk && (0, Sa.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: Bk(wk.hot ? `${Ay}rxAlarmSiren` : `${Ay}rxAlarmDamaged`, {
            amount: String(wk.damage)
          })
        }), null !== wk && null !== wk.secs && (0, Sa.jsx)("div", {
          className: Vk ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Vk && void 0 !== Vk ? Vk : void 0,
          "aria-live": "assertive",
          children: Bk(`${Ay}rxAlarmCountdown`, {
            amount: String((yk = wk.secs, fk = Xk - wk.receivedAt, Math.max(1, Math.ceil(yk - fk / 1e3))))
          })
        }), Ak && (0, Sa.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var yk, fk
    }));
    class fy {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      zW(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Bk = kk.baf2RxAlarmAt.join(",");
        let Rk = this.snapshot.boomAt;
        if (kk.baf2RxAlarmBoom) this.byReactor.delete(Bk), Rk = Fk;
        else if (kk.baf2RxAlarmDamage <= 0) this.byReactor.delete(Bk);
        else {
          var tk;
          this.byReactor.set(Bk, {
            damage: kk.baf2RxAlarmDamage,
            secs: null !== (tk = kk.baf2RxAlarmSecs) && void 0 !== tk ? tk : null,
            hot: !0 === kk.baf2RxAlarmHot,
            receivedAt: Fk
          })
        }
        this.Hf(Rk)
      }
      retain(kk) {
        let Fk = !1;
        for (const Bk of [...this.byReactor.keys()]) kk.has(Bk) || (this.byReactor.delete(Bk), Fk = !0);
        Fk && this.Hf(this.snapshot.boomAt)
      }
      has(kk) {
        return this.byReactor.has(kk)
      }
      get() {
        return this.snapshot
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      Hf(kk) {
        let Fk = null;
        for (const Bk of this.byReactor.values())(!Fk || Bk.damage > Fk.damage) && (Fk = Bk);
        this.snapshot = {
          alarm: Fk,
          boomAt: kk
        };
        for (const Bk of this.listeners) Bk()
      }
    }
    const my = {
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

    function Wy(kk) {
      return [kk[0], kk[1], kk[2]]
    }

    function vy(kk) {
      return `${kk[0]},${kk[1]},${kk[2]}`
    }
    class iy {
      constructor(kk) {
        if (this.plans = kk, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var kk;
            return {
              active: this.glows.flatMap((kk => {
                let {
                  record: Fk
                } = kk;
                return Fk ? [Fk] : []
              })),
              log: [...null !== (kk = this.devLog) && void 0 !== kk ? kk : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var kk;
        return null !== (kk = this.devLog) && void 0 !== kk ? kk : []
      }
      check(kk, Fk, Bk) {
        const Rk = new Set(Fk.map((kk => vy(kk.box.ctrl))));
        for (const Xk of function(kk, Fk) {
            const Bk = [],
              Rk = new Map(kk);
            kk.clear();
            for (const tk of Fk) {
              const Fk = Ve(tk.box.ctrl),
                ak = tk.formed ? tk.level : 0;
              kk.set(Fk, ak), ak > 0 && 0 === Rk.get(Fk) && Bk.push(tk)
            }
            return Bk
          }(this.levels, this.plans.all())) Rk.has(vy(Xk.box.ctrl)) && this.show(kk, Xk, "on", Bk);
        const tk = this.plans.lastFormed();
        if (null === tk || tk.receivedAt <= this.flashedAt) return null;
        this.flashedAt = tk.receivedAt;
        const ak = function(kk, Fk) {
          var Bk;
          const Rk = Ve(kk);
          return null !== (Bk = Fk.find((kk => Ve(kk.box.ctrl) === Rk))) && void 0 !== Bk ? Bk : null
        }(tk.ctrl, Fk);
        return ak && this.show(kk, ak, "formed", Bk), ak
      }
      fade(kk, Fk) {
        0 !== this.glows.length && (this.glows = this.glows.filter((Bk => {
          let {
            mesh: Rk,
            glow: tk,
            startMs: ak,
            record: Xk
          } = Bk;
          const bk = (Fk - ak) / my[tk].ms;
          return bk >= 1 ? (kk.disposeGameMesh(Rk), Xk && (Xk.endMs = Fk), !1) : (kk.setGameMesh(Rk, {
            visibility: "formed" === tk ? 1 - bk : Math.sin(Math.PI * bk)
          }), !0)
        })))
      }
      dispose(kk) {
        for (const {
            mesh: Bk
          }
          of this.glows) kk.disposeGameMesh(Bk);
        this.glows = [], this.levels.clear();
        const Fk = "undefined" !== typeof window ? window : null;
        (null === Fk || void 0 === Fk ? void 0 : Fk.baf2Glows) === this.devAccessor && delete Fk.baf2Glows
      }
      show(kk, Fk, Bk, Rk) {
        const {
          lo: tk,
          hi: ak
        } = Uw(Fk.box);
        let Xk = null;
        this.devLog && (Xk = {
          glow: Bk,
          ctrl: Wy(Fk.box.ctrl),
          lo: Wy(tk),
          hi: Wy(ak),
          startMs: Rk,
          endMs: null
        }, this.devLog.push(Xk), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(kk, Bk, Gw(tk, ak, my[Bk].thick)),
          glow: Bk,
          startMs: Rk,
          record: Xk
        })
      }
      build(kk, Fk, Bk) {
        const Rk = me(kk, Bk, {
          rgb: my[Fk].colour,
          alpha: 1
        });
        return kk.setGameMesh(Rk, {
          visibility: 0
        }), Rk
      }
    }
    const Yy = 1 / .6,
      oy = {
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
        blendMode: Tb.d.Standard,
        soft: !0
      },
      Ly = {
        ...oy,
        size: [.25, .4],
        count: 2
      };

    function Oy(kk) {
      return {
        colours: [kk, kk],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Tb.d.Add,
        soft: !1
      }
    }
    const Ey = Oy([150, 225, 255]),
      Sy = Oy([185, 145, 255]),
      Ny = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function Hy(kk) {
      const Fk = GF[kk];
      return null === Fk.fuelSlot || aB(Fk) ? Ny.includes(kk) ? Sy : Ey : oy
    }
    const uy = {
        kind: "smokePuff"
      },
      My = [.2, .025, .2];

    function gy(kk, Fk) {
      const [
        [Bk, Rk, tk],
        [ak, Xk, bk]
      ] = kk.colours;
      return {
        texture: kk.soft ? uy : "square_particle",
        KV: Fk,
        minLifeTime: kk.life[0] / Yy,
        maxLifeTime: kk.life[1] / Yy,
        minEmitPower: kk.power[0] * Yy,
        maxEmitPower: kk.power[1] * Yy,
        minSize: kk.size[0],
        maxSize: kk.size[1],
        emitRate: 0,
        gravity: [0, kk.lift * Yy * Yy, 0],
        dir1: [-kk.spread, 1, -kk.spread],
        dir2: [kk.spread, 1, kk.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [Bk, Rk, tk, kk.alpha],
          maxColor: [ak, Xk, bk, kk.alpha]
        }, {
          timeFraction: 1,
          minColor: [Bk, Rk, tk, 0],
          maxColor: [ak, Xk, bk, 0]
        }],
        blendMode: kk.blendMode
      }
    }
    class Uy {
      constructor(kk) {
        this.fixed = kk, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(kk, Fk, Bk) {
        var Rk;
        if (Bk === this.lastFrame) return !1;
        this.lastFrame = Bk;
        const tk = this.at;
        tk[0] = Fk[0] + .5, tk[1] = Fk[1] + 1.025, tk[2] = Fk[2] + .5;
        const ak = null !== (Rk = this.fixed) && void 0 !== Rk ? Rk : bk() ? Ly : oy;
        let Xk = this.particles.get(ak);
        return Xk || (Xk = kk.createParticles(function(kk) {
          return gy(kk, Math.ceil(12 * kk.count * kk.life[1]) + kk.count)
        }(ak), {
          pos: tk,
          half: My
        }), this.particles.set(ak, Xk)), Xk.moveTo(tk), Xk.emit(ak.count), !0
      }
      dispose() {
        for (const kk of this.particles.values()) kk.stop();
        this.particles.clear()
      }
    }
    class cy {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(kk) {
        this.indexed = !0;
        for (const Fk of HF) {
          const Bk = Hy(Fk);
          for (let Rk = 1; Rk <= 4; Rk++) {
            const tk = kk.blockNameToBlockId(`${Fk}|meta|rot${Rk}|Running`, !0);
            if (null === tk) continue;
            let ak = this.pufferIndexByStyle.get(Bk);
            void 0 === ak && (ak = this.pufferList.push(new Uy(Bk === oy ? null : Bk)) - 1, this.pufferIndexByStyle.set(Bk, ak)), this.pufferIndexById[tk] = ak + 1
          }
        }
      }
      onAfterRender(kk, Fk) {
        this.indexed || this.index(kk);
        const Bk = performance.now(),
          Rk = 0 === this.lastMs ? 0 : Math.min(Bk - this.lastMs, 250) / 1e3;
        this.lastMs = Bk, this.frame++, kk.particlesEnabled() ? (this.scan(kk, Fk), this.puff(kk, Rk)) : this.sources = []
      }
      dispose() {
        for (const kk of this.pufferList) kk.dispose();
        this.sources = [], this.found = []
      }
      scan(kk, Fk) {
        0 === this.scanRow && (this.origin = [Math.floor(Fk[0]) - 12, Math.floor(Fk[1]) - 6, Math.floor(Fk[2]) - 12]);
        const Bk = Math.min(this.scanRow + 16, 325),
          [Rk, tk, ak] = this.origin,
          Xk = this.hits;
        Xk.length = 0;
        for (let bk = this.scanRow; bk < Bk; bk++) {
          const Fk = Rk + bk % 25,
            Bk = tk + Math.floor(bk / 25);
          kk.scanBlocks(Fk, Bk, ak, Fk + 1, Bk + 1, ak + 25, this.pufferIndexById, Xk)
        }
        for (let bk = 0; bk < Xk.length; bk += 4) {
          const kk = Xk[bk + 3];
          this.found.push({
            pos: [Xk[bk], Xk[bk + 1], Xk[bk + 2]],
            Ts: kk,
            puffer: this.pufferList[this.pufferIndexById[kk] - 1]
          })
        }
        this.scanRow = Bk, 325 === Bk && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(kk, Fk) {
        const Bk = this.sources.length;
        if (0 !== Bk) {
          this.budget = Math.min(this.budget + Math.min(Bk / 1.2, 12) * Fk, 2);
          for (let Fk = 0; Fk < Bk && this.budget >= 1; Fk++) {
            const Fk = this.sources[this.cursor % Bk];
            this.cursor = (this.cursor + 1) % Bk, kk.getBlockId(Fk.pos[0], Fk.pos[1], Fk.pos[2]) === Fk.Ts && (Fk.puffer.puff(kk, Fk.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Gy = {
        ...Oy([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Ty = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function ry(kk) {
      return 0 === kk.spots.length ? 0 : Math.min(1 * kk.level, 4)
    }

    function Dy(kk) {
      return 0 === kk.glass.length ? 0 : Math.min(.75 * kk.level, 3)
    }

    function zy(kk) {
      return `${kk.ctrl.join(",")}:${kk.rot}:${kk.cu},${kk.cv}:${kk.w},${kk.h},${kk.d}`
    }

    function Py(kk, Fk) {
      const Bk = Fk.w - 2,
        Rk = Fk.h - 2,
        tk = Fk.d - 2,
        ak = [];
      for (let Xk = 0; Xk < Bk * Rk * tk; Xk++) {
        const bk = Xk % Bk,
          wk = Math.floor(Xk / Bk) % tk,
          dk = Math.floor(Xk / (Bk * tk));
        if (bk > 0 && bk < Bk - 1 && wk > 0 && wk < tk - 1 && dk > 0 && dk < Rk - 1) continue;
        const sk = QB(Fk, RR(Fk, Xk)),
          Vk = Ge(kk, sk);
        if (null !== Vk && "Fuel Rod" === gB(Vk))
          for (const Fk of Ty) {
            const Bk = [sk[0] + Fk[0], sk[1] + Fk[1], sk[2] + Fk[2]];
            qy(kk, Bk) && ak.push(Cy(Bk, Fk))
          }
      }
      return ak
    }

    function hy(kk, Fk) {
      const {
        lo: Bk,
        hi: Rk
      } = Uw(Fk), tk = [];
      for (let ak = Bk[0]; ak < Rk[0]; ak++)
        for (let Fk = Bk[1]; Fk < Rk[1]; Fk++) {
          const Xk = ak === Bk[0] || ak === Rk[0] - 1 || Fk === Bk[1] || Fk === Rk[1] - 1 ? 1 : Math.max(1, Rk[2] - 1 - Bk[2]);
          for (let bk = Bk[2]; bk < Rk[2]; bk += Xk) {
            const Xk = [ak, Fk, bk];
            if (!qy(kk, Xk)) continue;
            const wk = ak === Bk[0] ? Ty[1] : ak === Rk[0] - 1 ? Ty[0] : bk === Bk[2] ? Ty[5] : bk === Rk[2] - 1 ? Ty[4] : Fk === Bk[1] ? Ty[3] : Ty[2];
            tk.push(Cy(Xk, wk))
          }
        }
      return tk
    }

    function qy(kk, Fk) {
      const Bk = Ge(kk, Fk);
      return null !== Bk && "Reactor Glass" === gB(Bk)
    }

    function Cy(kk, Fk) {
      return [
        [kk[0] + .5 + .55 * Fk[0], kk[1] + .5 + .55 * Fk[1], kk[2] + .5 + .55 * Fk[2]],
        [0 === Fk[0] ? .4 : .02, 0 === Fk[1] ? .4 : .02, 0 === Fk[2] ? .4 : .02]
      ]
    }
    class Zy {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(kk, Fk, Bk, Rk) {
        const tk = [],
          ak = new Set;
        for (const dk of Fk) {
          var Xk, bk, wk;
          const {
            box: Fk
          } = dk;
          if ("reactor" !== dk.kind || dk.level <= 0 || (Fk.ctrl[0] - Bk[0]) ** 2 + (Fk.ctrl[1] - Bk[1]) ** 2 + (Fk.ctrl[2] - Bk[2]) ** 2 > 576) continue;
          const sk = zy(Fk);
          ak.add(sk);
          let Vk = this.spots.get(sk);
          if ((!Vk || Rk - Vk.at > 3e3) && (Vk = {
              at: Rk,
              spots: Py(kk, Fk),
              glass: hy(kk, Fk)
            }, this.spots.set(sk, Vk)), 0 === Vk.spots.length && 0 === Vk.glass.length) continue;
          const Jk = this.sparking.find((kk => kk.key === sk));
          tk.push({
            key: sk,
            level: dk.level,
            spots: Vk.spots,
            glass: Vk.glass,
            budget: null !== (Xk = null === Jk || void 0 === Jk ? void 0 : Jk.budget) && void 0 !== Xk ? Xk : 0,
            cursor: null !== (bk = null === Jk || void 0 === Jk ? void 0 : Jk.cursor) && void 0 !== bk ? bk : 0,
            glassBudget: null !== (wk = null === Jk || void 0 === Jk ? void 0 : Jk.glassBudget) && void 0 !== wk ? wk : 0
          })
        }
        for (const dk of this.spots.keys()) ak.has(dk) || this.spots.delete(dk);
        this.sparking = tk
      }
      emit(kk, Fk, Bk) {
        var Rk;
        if (0 === this.sparking.length || !kk.particlesEnabled() || Bk === this.lastFrame) return;
        this.lastFrame = Bk;
        let tk = 0,
          ak = 0;
        for (const ek of this.sparking) tk += ry(ek), ak += Dy(ek);
        const Xk = tk > 8 ? 8 / tk : 1,
          bk = ak > 6 ? 6 / ak : 1;
        let wk, dk = null,
          sk = null;
        for (const ek of this.sparking) ek.budget = Math.min(ek.budget + ry(ek) * Xk * Fk, 2), ek.budget >= 1 && (!dk || ek.budget > dk.budget) && (dk = ek), ek.glassBudget = Math.min(ek.glassBudget + Dy(ek) * bk * Fk, 2), ek.glassBudget >= 1 && (!sk || ek.glassBudget > sk.glassBudget) && (sk = ek);
        if (dk) dk.budget--, wk = dk.spots[dk.cursor++ % dk.spots.length];
        else {
          if (!sk) return;
          sk.glassBudget--, wk = sk.glass[Math.floor(Math.random() * sk.glass.length)]
        }
        const [Vk, Jk] = wk, Ak = null !== (Rk = this.emitter) && void 0 !== Rk ? Rk : this.create(kk, Vk, Jk);
        Ak.moveTo(Vk, Jk), Ak.emit(Gy.count)
      }
      dispose() {
        var kk;
        null === (kk = this.emitter) || void 0 === kk || kk.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(kk, Fk, Bk) {
        const Rk = Math.ceil(14 * Gy.count * Gy.life[1]) + Gy.count;
        return this.emitter = kk.createParticles(gy(Gy, Rk), {
          pos: Fk,
          half: Bk
        }), this.emitter
      }
    }
    const py = [2, 3.2],
      Ky = 1 / 3,
      xy = 1 / .6,
      jy = {
        texture: uy,
        KV: Math.ceil(18 * py[1]) + 4,
        minLifeTime: py[0] / xy,
        maxLifeTime: py[1] / xy,
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
        blendMode: Tb.d.Standard
      };
    class ly {
      constructor(kk) {
        this.plans = kk, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new Zy, this.frame = 0, this.outline = new iy(kk)
      }
      onAfterRender(kk, Fk, Bk) {
        const Rk = performance.now(),
          tk = 0 === this.lastMs ? 0 : Math.min(Rk - this.lastMs, 250) / 1e3;
        if (this.lastMs = Rk, this.outline.fade(kk, Rk), this.puff(kk, tk, Bk), this.sparks.emit(kk, tk, this.frame++), Rk - this.lastCheckMs < 150) return;
        this.lastCheckMs = Rk;
        const ak = this.plans.all().filter((kk => kk.formed && ny(kk.box.ctrl, Bk) <= 4096));
        this.plumes = ak.filter((kk => "reactor" === kk.kind && kk.level > 0)).map((kk => ({
          box: kk.box,
          level: kk.level
        }))), this.updateHums(kk, Fk, ak, Bk), this.sparks.update(kk, ak, Bk, Rk), this.chimeFormed(kk, Fk, ak, Rk)
      }
      dispose(kk) {
        var Fk;
        this.outline.dispose(kk), null === (Fk = this.steam) || void 0 === Fk || Fk.dispose(), this.steam = null, this.sparks.dispose();
        for (const Bk of this.hums.values()) Bk.stop();
        this.hums.clear()
      }
      chimeFormed(kk, Fk, Bk, Rk) {
        const tk = this.outline.check(kk, Bk, Rk);
        tk && kk.playSound(Fk, "exp_levelup", .6, 1, {
          gt: [tk.box.ctrl[0] + .5, tk.box.ctrl[1], tk.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(kk, Fk, Bk) {
        const Rk = this.plumes;
        if (0 === Rk.length || !kk.particlesEnabled()) return void(this.plumeBudget = 0);
        const tk = Rk.reduce(((kk, Fk) => kk + 3 * Fk.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + tk * Fk, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let ak = this.plumeCursor % (tk / 3);
        this.plumeCursor++;
        let Xk = Rk[0];
        for (const Vk of Rk) {
          if (ak < Vk.level) {
            Xk = Vk;
            break
          }
          ak -= Vk.level
        }
        const {
          lo: bk,
          hi: wk
        } = Uw(Xk.box);
        if (function(kk, Fk, Bk) {
            const Rk = Math.max(kk[0] - Bk[0], 0, Bk[0] - Fk[0]),
              tk = Math.max(kk[2] - Bk[2], 0, Bk[2] - Fk[2]);
            return Math.hypot(Rk, Bk[1] - Fk[1], tk)
          }(bk, wk, Bk) < 6 && Math.random() > Ky) return;
        const dk = [(bk[0] + wk[0]) / 2, wk[1] + .05, (bk[2] + wk[2]) / 2],
          sk = [(wk[0] - bk[0]) / 2 - .5, .05, (wk[2] - bk[2]) / 2 - .5];
        this.steam ??= kk.createParticles(jy, {
          pos: dk,
          half: sk
        }), this.steam.moveTo(dk, sk), this.steam.emit(1)
      }
      updateHums(kk, Fk, Bk, Rk) {
        const tk = new Map;
        for (const Xk of Bk) "reactor" === Xk.kind && Xk.level > 0 && ny(Xk.box.ctrl, Rk) <= 576 && tk.set(`${ak=Xk.box.ctrl,`${ak[0]},${ak[1]},${ak[2]}`}:${Xk.level}`, Xk);
        var ak;
        for (const [Xk, bk] of this.hums) tk.has(Xk) || (bk.stop(), this.hums.delete(Xk));
        for (const [Xk, bk] of tk) {
          if (this.hums.has(Xk)) continue;
          const {
            lo: Bk,
            hi: Rk
          } = Uw(bk.box), tk = [(Bk[0] + Rk[0]) / 2, Bk[1], (Bk[2] + Rk[2]) / 2], ak = kk.playSound(Fk, "rocketEngineLoop", .08 + .06 * bk.level, .55, {
            gt: tk,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          ak && this.hums.set(Xk, ak)
        }
      }
    }

    function ny(kk, Fk) {
      return (kk[0] - Fk[0]) ** 2 + (kk[1] - Fk[1]) ** 2 + (kk[2] - Fk[2]) ** 2
    }
    class Iy {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      zW(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Rk = [kk.baf2BombAt[0], kk.baf2BombAt[1], kk.baf2BombAt[2]],
          tk = kk.baf2BombR;
        if (kk.baf2BombBoom) {
          const kk = Math.hypot(Fk[0] - Rk[0], Fk[1] - Rk[1], Fk[2] - Rk[2]);
          this.Hf({
            fuse: null,
            blast: {
              at: Rk,
              r: tk,
              receivedAt: Bk,
              distance: kk,
              flash: kk <= 3 * tk
            }
          })
        } else this.Hf({
          ...this.snapshot,
          fuse: kk.baf2BombMs > 0 ? {
            at: Rk,
            r: tk,
            endsAt: Bk + kk.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      Hf(kk) {
        this.snapshot = kk;
        for (const Fk of this.listeners) Fk()
      }
    }
    const Qy = (0, Rk.memo)((function(kk) {
      var Fk;
      let {
        store: Bk
      } = kk;
      const {
        t: tk
      } = (0, Ht.x)(), [ak, Xk] = (0, Rk.useState)((() => Bk.get())), [bk, wk] = (0, Rk.useState)((() => performance.now()));
      (0, Rk.useEffect)((() => (Xk(Bk.get()), Bk.subscribe((() => {
        Xk(Bk.get()), wk(performance.now())
      })))), [Bk]);
      const {
        fuse: dk,
        blast: sk
      } = ak;
      (0, Rk.useEffect)((() => {
        if (!dk) return;
        const kk = setInterval((() => {
          wk(performance.now())
        }), 250);
        return () => {
          clearInterval(kk)
        }
      }), [dk]);
      const [Vk, Jk] = (0, Rk.useState)(!1);
      (0, Rk.useEffect)((() => {
        if (null === sk || void 0 === sk || !sk.flash) return;
        Jk(!0);
        const kk = setTimeout((() => {
          Jk(!1)
        }), 2500);
        return () => {
          clearTimeout(kk)
        }
      }), [sk]);
      const Ak = dk ? function(kk, Fk) {
        return kk.endsAt <= Fk ? 0 : Math.ceil((kk.endsAt - Fk) / 1e3)
      }(dk, bk) : 0;
      return (0, Sa.jsxs)(Sa.Fragment, {
        children: [Ak > 0 && (0, Sa.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: tk("buildAFactory2Game:bombCountdown", {
            amount: String(Ak),
            radius: String(null !== (Fk = null === dk || void 0 === dk ? void 0 : dk.r) && void 0 !== Fk ? Fk : 0)
          })
        }), Vk && (0, Sa.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function kf(kk) {
      const Fk = Math.min(4, Math.max(1, kk / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * kk / 4)),
        capSpread: Math.min(5 * kk / 8, 24 * Fk),
        capThick: 6 * Fk,
        stemHalfWidth: 3 * Fk,
        puffScale: Fk
      }
    }
    class Ff {
      constructor() {
        this.Hb = !1
      }
      hold(kk) {
        kk.getCameraFar() < 1e3 && (kk.setCameraFar(1e3), this.Hb = !0)
      }
      release(kk) {
        this.Hb && (this.Hb = !1, kk.setCameraFar(null))
      }
    }
    const Bf = 1 / .6,
      Rf = [.2, .1, .2],
      tf = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      af = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Tb.d.Standard,
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
      Xf = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Tb.d.Standard,
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
      bf = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Tb.d.Standard,
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
      wf = {
        texture: uy,
        KV: Math.ceil(120) + 4,
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
        blendMode: Tb.d.Add
      };
    class df {
      constructor(kk) {
        this.store = kk, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Ff, this.timers = []
      }
      onAfterRender(kk, Fk) {
        const Bk = performance.now(),
          Rk = 0 === this.lastMs ? 0 : Math.min(Bk - this.lastMs, 250) / 1e3;
        this.lastMs = Bk;
        const {
          fuse: tk,
          blast: ak
        } = this.store.get();
        null !== ak && ak !== this.shownBlast && (this.shownBlast = ak, this.startBlast(kk, Fk, ak, Bk));
        const Xk = kk.particlesEnabled();
        null !== tk && tk.endsAt > Bk && Xk ? this.emitBeacon(kk, tk, Rk, Bk) : this.beaconBudget = 0, null !== this.cloud && (Bk - this.cloud.startMs > 33e3 ? this.disposeCloud(kk) : (this.far.hold(kk), Xk && this.emitCloud(kk, Rk, Bk)))
      }
      dispose(kk) {
        var Fk;
        null === (Fk = this.beacon) || void 0 === Fk || Fk.dispose(), this.beacon = null, this.disposeCloud(kk);
        for (const Bk of this.timers) clearTimeout(Bk);
        this.timers.length = 0
      }
      emitBeacon(kk, Fk, Bk, Rk) {
        const tk = Fk.endsAt - Rk < 5e3 ? 350 : 1e3,
          ak = .5 + .5 * Math.sin(2 * Math.PI * Rk / tk);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * ak * Bk, 4), this.beaconBudget < 1) return;
        const Xk = Math.floor(this.beaconBudget);
        this.beaconBudget -= Xk;
        const [bk, wk, dk] = Fk.at, sk = [bk + .5, wk + 1.1, dk + .5];
        this.beacon ??= kk.createParticles(wf, {
          pos: sk,
          half: Rf
        }), this.beacon.moveTo(sk), this.beacon.emit(Xk)
      }
      startBlast(kk, Fk, Bk, Rk) {
        var tk;
        null === (tk = this.beacon) || void 0 === tk || tk.dispose(), this.beacon = null, this.disposeCloud(kk);
        const ak = (0, cb.isMobile)() ? .5 : 1;
        this.streams = [af, Xf, bf].map((kk => {
          const Fk = Math.round(kk.count * ak);
          return {
            spec: kk,
            particles: null,
            rate: Fk / ((kk.toMs - kk.fromMs) / 1e3),
            budget: 0,
            left: Fk
          }
        })), this.cloud = {
          blast: Bk,
          startMs: Rk
        };
        const Xk = Math.max(.25, 1 - Bk.distance / (6 * Bk.r)),
          bk = Bk.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [Bk, Rk, tk] of tf) Vf(kk, Fk, Bk, Xk * Rk, tk)
        }), bk))
      }
      emitCloud(kk, Fk, Bk) {
        const {
          blast: Rk,
          startMs: tk
        } = this.cloud, ak = Bk - tk, [Xk, bk, wk] = Rk.at, dk = kf(Rk.r);
        for (const sk of this.streams) {
          const {
            spec: Bk
          } = sk;
          if (sk.left <= 0 || ak < Bk.fromMs) continue;
          sk.budget += sk.rate * Fk;
          const tk = Math.min(Math.floor(sk.budget), sk.left);
          if (tk < 1) continue;
          sk.budget -= tk, sk.left -= tk;
          const Vk = sk.particles ??= this.createStream(kk, Bk, Rk);
          if (Bk === af) {
            const kk = dk.stemHalfWidth;
            Vk.moveTo([Xk, bk + 1, wk], [kk, 1, kk])
          } else if (Bk === Xf) {
            const kk = dk.capSpread * Math.min(1, (ak - Bk.fromMs) / 3e3),
              Fk = Math.sqrt(Math.random()),
              Rk = 2 * Math.random() * Math.PI,
              tk = Math.cos(Rk) * Fk,
              sk = Math.sin(Rk) * Fk,
              Jk = Xk + tk * kk,
              Ak = wk + sk * kk,
              ek = dk.capThick,
              yk = bk + dk.capHeight + ek * (1 - Fk * Fk) * 2;
            Vk.setDirections([.7 * tk, .05, .7 * sk], [tk, .2, sk]), Vk.moveTo([Jk, yk, Ak], [ek, ek, ek])
          } else {
            this.ringAngle += 2.39996;
            const kk = Math.cos(this.ringAngle),
              Fk = Math.sin(this.ringAngle);
            Vk.setDirections([kk, .05, Fk], [kk, .1, Fk]), Vk.moveTo([Xk + 2 * kk, bk + .5, wk + 2 * Fk], [0, .5, 0])
          }
          Vk.emit(tk)
        }
      }
      createStream(kk, Fk, Bk) {
        const {
          r: Rk
        } = Bk, tk = Math.max(Fk.life[0], Rk / 25), ak = Fk === bf ? [.9 * tk, tk] : Fk.life, Xk = kf(Rk), bk = Fk === bf ? 1 : Xk.puffScale, wk = {
          texture: uy,
          KV: Fk.count + 4,
          minLifeTime: ak[0] / Bf,
          maxLifeTime: ak[1] / Bf,
          minSize: Fk.size[0] * bk,
          maxSize: Fk.size[1] * bk,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, Fk.gravity * Bf * Bf, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: Fk.from[0],
            maxColor: Fk.from[1]
          }, {
            timeFraction: .6,
            minColor: sf(Fk.from[0], Fk.to[0]),
            maxColor: sf(Fk.from[1], Fk.to[1])
          }, {
            timeFraction: 1,
            minColor: Fk.to[0],
            maxColor: Fk.to[1]
          }],
          blendMode: Fk.blend
        };
        if (Fk === af) {
          const kk = Xk.capHeight / ((ak[0] + ak[1]) / 2);
          wk.minEmitPower = .9 * kk * Bf, wk.maxEmitPower = 1.05 * kk * Bf, wk.dir1 = [-.1, 1, -.1], wk.dir2 = [.1, 1, .1]
        } else Fk === Xf ? (wk.minEmitPower = 1.2, wk.maxEmitPower = 2, wk.dir1 = [-1, .05, -1], wk.dir2 = [1, .2, 1]) : (wk.minEmitPower = 39.583333333333336, wk.maxEmitPower = 41.66666666666667, wk.dir1 = [1, 0, 0], wk.dir2 = [1, 0, 0]);
        return kk.createParticles(wk, {
          pos: Bk.at
        })
      }
      disposeCloud(kk) {
        for (const Bk of this.streams) {
          var Fk;
          null === (Fk = Bk.particles) || void 0 === Fk || Fk.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(kk)
      }
    }

    function sf(kk, Fk) {
      return [(kk[0] + Fk[0]) / 2, (kk[1] + Fk[1]) / 2, (kk[2] + Fk[2]) / 2, .75 * kk[3]]
    }

    function Vf(kk, Fk, Bk, Rk, tk) {
      try {
        kk.playSound(Fk, Bk, Rk, tk)
      } catch (ak) {
        console.error(ak)
      }
    }
    const Jf = {
        KV: 720,
        perS: 100
      },
      Af = {
        KV: 320,
        perS: 44
      };
    class ef {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(kk, Fk) {
        this.zone = {
          centre: [...kk.centre],
          r: kk.r,
          band: kk.band ? [kk.band[0], kk.band[1]] : void 0
        }, this.endsAt = Fk
      }
      stop() {
        this.zone = null
      }
      zW(kk, Fk) {
        const {
          baf2FalloutMs: Bk,
          baf2FalloutAt: Rk,
          baf2FalloutR: tk,
          baf2FalloutY: ak
        } = kk;
        Bk > 0 && Rk && void 0 !== tk ? this.start({
          centre: Rk,
          r: tk,
          band: ak
        }, Fk + Bk) : this.stop()
      }
      perS(kk, Fk, Bk) {
        const Rk = this.zone;
        if (!Rk) return 0;
        const tk = this.endsAt - kk;
        return tk <= 0 ? (this.zone = null, 0) : Rk.band && (Fk[1] < Rk.band[0] || Fk[1] > Rk.band[1]) || Math.hypot(Fk[0] - Rk.centre[0], Fk[2] - Rk.centre[2]) > Rk.r ? 0 : Bk.perS * Math.min(1, tk / 5e3)
      }
    }
    const yf = [5, 7],
      ff = [24, 8, 24],
      mf = .5,
      Wf = 1 / .6,
      vf = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class Yf {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cb.isMobile)();
        this.state = new ef, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(kk) {
          return kk ? Af : Jf
        }(kk)
      }
      startFallout(kk, Fk) {
        this.state.start(kk, Fk)
      }
      stopFallout() {
        this.state.stop()
      }
      zW(kk) {
        this.state.zW(kk, performance.now())
      }
      onAfterRender(kk, Fk) {
        var Bk;
        const Rk = performance.now(),
          tk = 0 === this.lastMs ? 0 : Math.min(Rk - this.lastMs, 250) / 1e3;
        this.lastMs = Rk;
        const ak = this.state.perS(Rk, Fk, this.tier);
        if (ak <= 0 || !kk.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + ak * tk, ak / 4);
        const Xk = Math.floor(this.budget);
        if (Xk < 1) return;
        this.budget -= Xk;
        const bk = this.at;
        bk[0] = Fk[0], bk[1] = Fk[1] + 12, bk[2] = Fk[2];
        const wk = null !== (Bk = this.systems) && void 0 !== Bk ? Bk : this.create(kk, bk),
          dk = this.amounts;
        dk[0] = 0, dk[1] = 0;
        for (let sk = 0; sk < Xk; sk++) dk[Math.random() < .3 ? 1 : 0]++;
        for (let sk = 0; sk < wk.length; sk++) dk[sk] > 0 && (wk[sk].moveTo(bk, ff), wk[sk].emit(dk[sk]))
      }
      dispose() {
        for (const Fk of null !== (kk = this.systems) && void 0 !== kk ? kk : []) {
          var kk;
          Fk.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(kk, Fk) {
        return this.systems = vf.map((Bk => {
          let {
            rgba: [Rk, tk, ak, Xk],
            share: bk
          } = Bk;
          const wk = {
            texture: "square_particle",
            KV: Math.ceil(this.tier.KV * bk),
            minLifeTime: yf[0] / Wf,
            maxLifeTime: yf[1] / Wf,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [mf, -1, mf],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Rk, tk, ak, 0]
            }, {
              timeFraction: .15,
              minColor: [Rk, tk, ak, Xk]
            }, {
              timeFraction: .8,
              minColor: [Rk, tk, ak, Xk]
            }, {
              timeFraction: 1,
              minColor: [Rk, tk, ak, 0]
            }],
            blendMode: Tb.d.Standard
          };
          return kk.createParticles(wk, {
            pos: Fk,
            half: ff
          })
        })), this.systems
      }
    }
    const of = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Lf(kk) {
      const Fk = /\|rot(\d)/.exec(kk);
      return of [Fk ? Number(Fk[1]) : 1]
    }
    var Of = Bk(597),
      Ef = Bk(38118);
    const Sf = new Set(Of.p);

    function Nf(kk) {
      if (-2 !== kk.count) return null;
      const Fk = Zk(kk.item);
      return null !== Fk && Sf.has(Fk) ? Fk : null
    }

    function Hf(kk) {
      const {
        width: Fk,
        height: Bk
      } = (0, Ef.b)(kk).hitBoxDimensions;
      return .55 / Math.max(Fk, Bk)
    }

    function uf(kk, Fk, Bk) {
      if (!Bk) return !1;
      const Rk = kk[0] + .5 - Fk[0],
        tk = kk[1] + .5 - Fk[1],
        ak = kk[2] + .5 - Fk[2];
      return Rk * Rk + tk * tk + ak * ak <= 576
    }

    function Mf(kk, Fk) {
      return Math.atan2(kk[0], kk[2]) + Math.PI + Fk
    }

    function gf(kk, Fk) {
      const Bk = 2 * Math.PI;
      return (kk + Bk * Fk / 1e4) % Bk
    }
    class Uf {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = kk, this.now = Fk, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = kk.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(kk, Fk) {
        if (0 === this.farms.size) return;
        const Bk = this.now(),
          Rk = Number.isNaN(this.frameMs) ? 0 : Math.min(Bk - this.frameMs, 100);
        this.frameMs = Bk, Bk - this.checkedMs >= 1e3 && (this.checkedMs = Bk, this.check(kk, Fk));
        for (const tk of this.farms.values()) tk.shown && tk.running && null !== tk.model && Rk > 0 && (tk.spin = gf(tk.spin, Rk), tk.model.setPose(tk.feet, Mf(tk.front, tk.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const kk of this.farms.values()) this.drop(kk);
        this.farms.clear()
      }
      sync() {
        const kk = new Set;
        for (const Fk of this.labels.list()) {
          const Bk = Nf(Fk);
          if (null === Bk) continue;
          kk.add(Fk.key);
          const Rk = this.farms.get(Fk.key);
          if ((null === Rk || void 0 === Rk ? void 0 : Rk.mob) === Bk) continue;
          Rk && this.drop(Rk);
          const [tk, ak, Xk] = Fk.pos;
          this.farms.set(Fk.key, {
            pos: Fk.pos,
            feet: [tk + .5, ak + 1, Xk + .5],
            mob: Bk,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [Fk, Bk] of this.farms) kk.has(Fk) || (this.drop(Bk), this.farms.delete(Fk));
        this.checkedMs = -1 / 0
      }
      check(kk, Fk) {
        for (const Bk of this.farms.values()) {
          const [Rk, tk, ak] = Bk.pos, Xk = Ge(kk, Bk.pos);
          null !== Xk && gB(Xk) === Tk && uf(Bk.pos, Fk, "Air" === Ge(kk, [Rk, tk + 1, ak])) ? (Bk.running = Xk.endsWith("|Running"), Bk.front = Lf(Xk), null === Bk.model && (Bk.model = kk.createMobModel(Bk.mob, Hf(Bk.mob)), null === Bk.model) || (Bk.model.setPose(Bk.feet, Mf(Bk.front, Bk.spin)), Bk.shown || (Bk.model.setVisible(!0), Bk.shown = !0))) : (Bk.shown && null !== Bk.model && Bk.model.setVisible(!1), Bk.shown = !1)
        }
      }
      drop(kk) {
        var Fk;
        null === (Fk = kk.model) || void 0 === Fk || Fk.dispose(), kk.model = null, kk.shown = !1
      }
    }
    class Gf {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(kk) {
        var Fk;
        this.island = kk.baf2ColIsland, this.islandSite = (Fk = kk.baf2ColSite) && 8 === Fk.length ? {
          spawnXZ: [Fk[0], Fk[1]],
          coreXZ: [Fk[2], Fk[3]],
          minXZ: [Fk[4], Fk[5]],
          maxXZ: [Fk[6], Fk[7]]
        } : null, this.views = kk.baf2ColList.map((kk => ({
          entry: wt(kk)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(kk) {
        this.status = kk, this.emit()
      }
      onOpen(kk) {
        this.openHeld = kk
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
        return this.views.map((kk => kk.entry))
      }
      entryAtRoot(kk) {
        var Fk;
        return null === (Fk = this.views.find((Fk => {
          let {
            entry: Bk
          } = Fk;
          return Bk.focus[0] === kk[0] && Bk.focus[1] === kk[1] + 1 && Bk.focus[2] === kk[2]
        }))) || void 0 === Fk ? void 0 : Fk.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(kk, Fk) {
        return hw(this.entries(), kk, Fk)
      }
      lookSource() {
        return {
          handles: kk => AR(kk) >= 0 || eR(kk),
          line: (kk, Fk) => this.lookLine(kk, Fk),
          version: () => this.beamsVersion
        }
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const kk of this.listeners) kk()
      }
    }
    const Tf = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((kk => kk / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((kk => [kk, kk + 1, kk + 2, kk, kk + 2, kk + 3]))
    };

    function rf(kk, Fk, Bk, Rk, tk, ak, Xk) {
      let bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const wk = Math.cos(bk),
        dk = Math.sin(bk),
        sk = kk.positions.length / 3,
        {
          positions: Vk,
          indices: Jk
        } = Tf;
      for (let Ak = 0; Ak < Vk.length; Ak += 3) {
        const bk = Vk[Ak] * tk,
          sk = Vk[Ak + 2] * Xk;
        kk.positions.push(Fk + bk * wk + sk * dk, Bk + Vk[Ak + 1] * ak, Rk - bk * dk + sk * wk)
      }
      for (const Ak of Jk) kk.indices.push(sk + Ak)
    }

    function Df(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return Fk < 1 ? {
        rgb: kk,
        alpha: Fk
      } : {
        rgb: kk,
        alpha: 1,
        opaque: !0
      }
    }
    class zf {
      constructor(kk, Fk) {
        this.style = kk, this.perSource = Fk, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(kk) {
        this.sources = kk, 0 === kk.length && (this.budget = 0)
      }
      yJ(kk, Fk, Bk) {
        const Rk = this.sources.length;
        if (0 !== Rk) {
          var tk, ak;
          this.budget = Math.min(this.budget + (tk = Rk, ak = this.perSource, Math.min(tk * ak, Bd) * Fk), 2);
          for (let Fk = 0; Fk < Rk && this.budget >= 1; Fk++) {
            const Fk = this.sources[this.cursor % Rk];
            this.cursor = (this.cursor + 1) % Rk;
            if (!(Math.max(Math.abs(Fk.x - Bk[0]), Math.abs(Fk.y - Bk[1]), Math.abs(Fk.z - Bk[2])) > 32)) return this.puff(kk, Fk), void this.budget--
          }
        }
      }
      dispose() {
        var kk;
        null === (kk = this.particles) || void 0 === kk || kk.dispose(), this.particles = null, this.sources = []
      }
      puff(kk, Fk) {
        let {
          x: Bk,
          y: Rk,
          z: tk,
          h: ak,
          faces: Xk
        } = Fk;
        const bk = function(kk, Fk, Bk, Rk, tk) {
            const [ak, Xk, bk] = tk[Math.floor(Math.random() * tk.length)], wk = .04, dk = (kk, Fk, Bk) => kk > 0 ? Fk + Bk + wk : kk < 0 ? Fk - wk : Fk + .1, sk = (kk, Fk, Bk) => kk > 0 ? Fk + Bk + wk : kk < 0 ? Fk - wk : Fk + Bk - .1, Vk = [dk(ak, kk, 1), dk(Xk, Fk, Rk), dk(bk, Bk, 1)], Jk = [sk(ak, kk, 1), sk(Xk, Fk, Rk), sk(bk, Bk, 1)];
            return {
              pos: [(Vk[0] + Jk[0]) / 2, (Vk[1] + Jk[1]) / 2, (Vk[2] + Jk[2]) / 2],
              half: [(Jk[0] - Vk[0]) / 2, (Jk[1] - Vk[1]) / 2, (Jk[2] - Vk[2]) / 2],
              out: [ak, Xk, bk]
            }
          }(Bk, Rk, tk, ak, Xk),
          {
            style: wk
          } = this,
          dk = this.particles ??= kk.createParticles(gy(wk, Math.ceil(wk.count * Bd * wk.life[1]) + 4), bk);
        dk.moveTo(bk.pos, bk.half);
        const [sk, Vk, Jk] = bk.out, Ak = wk.spread;
        dk.setDirections([sk - Ak, .6 + Vk, Jk - Ak], [sk + Ak, 1 + Vk, Jk + Ak]), dk.emit(wk.count)
      }
    }
    const Pf = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class hf {
      constructor() {
        this.green = new zf(td.green, kd), this.pink = new zf(td.pink, Fd), this.colliders = [], this.lastMs = 0
      }
      setSources(kk) {
        this.colliders = kk;
        const Fk = [],
          Bk = [];
        for (const Rk of kk) {
          const [kk, tk, ak] = Rk.focus;
          Fk.push({
            x: kk,
            y: tk - 1,
            z: ak,
            h: 2,
            faces: Pf
          });
          for (let Fk = 0; Fk < 4; Fk++) {
            if (!Rk.live[Fk]) continue;
            const [kk, tk, ak] = mR(Rk.focus, Fk, bR.LASER_D), [Xk, , bk] = fR[Fk], wk = Pf.filter((kk => kk[0] !== Xk || kk[2] !== bk || 0 !== kk[1]));
            Bk.push({
              x: kk,
              y: tk,
              z: ak,
              h: 1,
              faces: wk
            })
          }
        }
        this.green.setSources(Fk), this.pink.setSources(Bk)
      }
      onAfterRender(kk) {
        const Fk = performance.now(),
          Bk = 0 === this.lastMs ? 0 : Math.min(Fk - this.lastMs, 250) / 1e3;
        if (this.lastMs = Fk, 0 === this.colliders.length || !kk.particlesEnabled()) return;
        const Rk = kk.getCameraPosition();
        this.green.yJ(kk, Bk, Rk), this.pink.yJ(kk, Bk, Rk)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const qf = 1.04,
      Cf = Df([1, 120 / 255, 220 / 255]),
      Zf = Df([1, .25, .25], .35);
    class pf {
      constructor(kk) {
        this.store = kk, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new hf
      }
      onAfterRender(kk) {
        this.store.version() !== this.builtVersion && this.rebuild(kk);
        const Fk = performance.now();
        for (const Bk of this.beams) {
          const Rk = 1 + .35 * Math.sin(Fk / 700 * Math.PI * 2 + Bk.phase);
          kk.setGameMesh(Bk.mesh, {
            scale: [Bk.alongX ? 1 : Rk, Rk, Bk.alongX ? Rk : 1]
          })
        }
        this.glow.onAfterRender(kk)
      }
      dispose(kk) {
        this.clear(kk), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(kk) {
        this.clear(kk), this.builtVersion = this.store.version();
        const Fk = [];
        for (const {
            entry: Bk
          }
          of this.store.colliders()) Bk.on && Bk.live.some(Boolean) && (this.addBeams(kk, Bk), Fk.push(Bk)), Bk.blockers.length > 0 && this.addMarkers(kk, Bk);
        this.glow.setSources(Fk)
      }
      addBeams(kk, Fk) {
        const [Bk, Rk, tk] = Fk.focus, ak = Qw - .25, Xk = (.25 + Qw) / 2;
        for (let bk = 0; bk < 4; bk++) {
          if (!Fk.live[bk]) continue;
          const [wk, , dk] = fR[bk], sk = 0 !== wk, Vk = {
            positions: [],
            indices: []
          };
          rf(Vk, 0, 0, 0, sk ? ak : .2, .2, sk ? .2 : ak);
          const Jk = [Bk + .5 + wk * Xk, Rk + .5, tk + .5 + dk * Xk],
            Ak = kk.createGameMesh(Vk, Cf, Jk);
          this.meshes.push(Ak), this.beams.push({
            mesh: Ak,
            alongX: sk,
            phase: bk * Math.PI / 2
          })
        }
      }
      addMarkers(kk, Fk) {
        const Bk = Fk.blockers[0],
          Rk = {
            positions: [],
            indices: []
          };
        for (const [tk, ak, Xk] of Fk.blockers) rf(Rk, tk - Bk[0] + .5, ak - Bk[1] + .5, Xk - Bk[2] + .5, qf, qf, qf);
        this.meshes.push(kk.createGameMesh(Rk, Zf, Bk))
      }
      clear(kk) {
        for (const Fk of this.meshes) kk.disposeGameMesh(Fk);
        this.meshes = [], this.beams = []
      }
    }
    const Kf = [.56, .83, 1],
      xf = [1, .73, .08],
      jf = [1, .25, .25],
      lf = [.85, .85, .85],
      nf = [.3, .45, .6];

    function If(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Xk = tk / 2,
        bk = tk + ak;
      for (const wk of [-Xk, Xk])
        for (const tk of [-Xk, Xk]) rf(kk, Fk, Bk + wk, Rk + tk, bk, ak, ak), rf(kk, Fk + wk, Bk, Rk + tk, ak, bk, ak), rf(kk, Fk + wk, Bk + tk, Rk, ak, ak, bk)
    }

    function Qf(kk) {
      return Fk => kk.isBlockInLoadedChunk(Fk[0], Fk[1], Fk[2]) && 0 === kk.getBlockId(Fk[0], Fk[1], Fk[2])
    }

    function km(kk) {
      return kk.map((kk => {
        let {
          free: Fk,
          blocked: Bk,
          gaps: Rk,
          supports: tk
        } = kk;
        return `${Fk.join(";")}|${Bk.join(";")}|${Rk.join(";")}|${tk.join(";")}`
      })).join("/")
    }

    function Fm(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const ak = Fk[0],
        Xk = {
          positions: [],
          indices: []
        };
      for (const [bk, wk, dk] of Fk) If(Xk, bk - ak[0] + .5, wk - ak[1] + .5, dk - ak[2] + .5, Rk, tk);
      return kk.createGameMesh(Xk, Bk, ak)
    }
    class Bm {
      constructor(kk) {
        this.store = kk, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(kk, Fk, Bk) {
        var Rk;
        const tk = null === (Rk = kk.LFk(Fk)) || void 0 === Rk ? void 0 : Rk.name;
        if (tk !== dR && tk !== wR) return void("" !== this.shownKey && this.show(kk, "", []));
        const ak = performance.now();
        if (ak - this.lastCheckMs >= 200 && (this.lastCheckMs = ak, tk === dR ? this.check(kk, Bk) : this.preview(kk, Bk)), this.pulses.length > 0) {
          const Fk = 1 + .12 * Math.sin(ak / 1e3 * 1.25 * Math.PI * 2),
            Bk = [Fk, Fk, Fk];
          for (const Rk of this.pulses) kk.setGameMesh(Rk, {
            scale: Bk
          })
        }
      }
      dispose(kk) {
        this.clear(kk), this.shownKey = ""
      }
      check(kk, Fk) {
        const Bk = Qf(kk),
          Rk = [];
        for (const {
            entry: ak
          }
          of this.store.colliders()) {
          ak.focus.every(((kk, Bk) => Math.abs(kk + .5 - Fk[Bk]) <= bR.GHOST_REACH)) && Rk.push(Iw(ak, Bk))
        }
        const tk = km(Rk);
        tk !== this.shownKey && this.show(kk, tk, Rk)
      }
      preview(kk, Fk) {
        const Bk = kk.getTargetedBlock(),
          Rk = Bk ? [Bk.rb[0], Bk.rb[1], Bk.rb[2]] : null,
          tk = null !== Rk && Rk.every(((kk, Bk) => Math.abs(kk + .5 - Fk[Bk]) <= 8)),
          ak = this.store.site(),
          Xk = tk && ak ? function(kk, Fk, Bk) {
            const Rk = yR(kk);
            if (!Rk.every(Fk)) return null;
            const tk = iR(kk, Bk);
            return {
              column: Rk,
              spots: Iw({
                focus: Rk[1],
                lasers: [!1, !1, !1, !1],
                open: tk,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, Fk),
              fits: tk.filter(Boolean).length >= bR.MIN_SPOTS
            }
          }(Rk, Qf(kk), ak) : null,
          bk = Xk ? [Xk.spots] : [],
          wk = Xk ? `preview ${Rk.join(",")}|${Xk.fits}|${km(bk)}` : "";
        var dk, sk;
        wk !== this.shownKey && this.show(kk, wk, bk, null !== (dk = null === Xk || void 0 === Xk ? void 0 : Xk.column) && void 0 !== dk ? dk : [], null === (sk = null === Xk || void 0 === Xk ? void 0 : Xk.fits) || void 0 === sk || sk)
      }
      show(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(kk), this.shownKey = Fk, Rk.length > 0 && this.meshes.push(Fm(kk, Rk, Df(tk ? lf : jf)));
        for (const {
            free: ak,
            blocked: Xk,
            gaps: bk,
            supports: wk
          }
          of Bk) {
          for (const [Fk, Bk, Rk] of ak) {
            const tk = {
              positions: [],
              indices: []
            };
            If(tk, 0, 0, 0);
            const ak = kk.createGameMesh(tk, Df(Kf), [Fk + .5, Bk + .5, Rk + .5]);
            this.meshes.push(ak), this.pulses.push(ak)
          }
          Xk.length > 0 && this.meshes.push(Fm(kk, Xk, Df(xf))), bk.length > 0 && this.meshes.push(Fm(kk, bk, Df(jf), 1.06, .07)), wk.length > 0 && this.meshes.push(Fm(kk, wk, Df(nf)))
        }
      }
      clear(kk) {
        for (const Fk of this.meshes) kk.disposeGameMesh(Fk);
        this.meshes = [], this.pulses = []
      }
    }
    class Rm {
      constructor() {
        this.stored = new Map, this.Hb = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(kk) {
        if (!kk.baf2TermOpen) return !1;
        kk.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [Fk, Bk] of kk.baf2TermItems) Bk > 0 ? this.stored.set(Fk, Bk) : this.stored.delete(Fk);
        if (kk.baf2TermHeld && (this.Hb = new Map(kk.baf2TermHeld)), this.pending = this.pending.filter((Fk => Fk.seq > kk.baf2TermAcked)), this.silos = kk.baf2TermSilos, this.readOnly = kk.baf2TermReadOnly, this.pocket = !0 === kk.baf2TermPocket, kk.baf2TermReset) this.resort();
        else {
          const kk = new Set(this.order);
          for (const Fk of this.stored.keys()) kk.has(Fk) || this.order.push(Fk)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((kk, Fk) => this.amount(Fk) - this.amount(kk) || kk.localeCompare(Fk))), this.changed()
      }
      take(kk, Fk) {
        const Bk = wF(kk, this.amount(Fk));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Fk,
          amount: Bk,
          put: !1
        }), this.recents = [Fk, ...this.recents.filter((kk => kk !== Fk))].slice(0, 6), this.changed(), RF(this.seq, kk, Fk)
      }
      put(kk, Fk) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Fk,
          amount: wF(kk, this.heldAmount(Fk)),
          put: !0
        }), this.changed(), tF(this.seq, kk, Fk)
      }
      putAll() {
        this.seq++;
        for (const kk of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: kk,
          amount: this.heldAmount(kk),
          put: !0
        });
        return this.changed(), aF(this.seq)
      }
      amount(kk) {
        var Fk;
        let Bk = null !== (Fk = this.stored.get(kk)) && void 0 !== Fk ? Fk : 0;
        for (const Rk of this.pending) Rk.item === kk && (Bk += Rk.put ? Rk.amount : -Rk.amount);
        return Math.max(0, Bk)
      }
      heldAmount(kk) {
        var Fk;
        let Bk = null !== (Fk = this.Hb.get(kk)) && void 0 !== Fk ? Fk : 0;
        for (const Rk of this.pending) Rk.put && Rk.item === kk && (Bk -= Rk.amount);
        return Math.max(0, Bk)
      }
      heldItems() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((Fk => Fk === kk || this.heldAmount(Fk) > 0))
      }
      items() {
        return this.order.filter((kk => this.amount(kk) > 0))
      }
      recent() {
        return this.recents.filter((kk => this.amount(kk) > 0))
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
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      changed() {
        this.version++;
        for (const kk of this.listeners) kk()
      }
    }
    var tm = Bk(38067);
    const am = {
      isBlock: kk => void 0 !== gk.j[kk],
      harvestType: kk => {
        var Fk;
        return null === (Fk = gk.j[kk]) || void 0 === Fk ? void 0 : Fk.harvestType
      },
      harvestLevel: kk => {
        var Fk;
        return null === (Fk = gk.j[kk]) || void 0 === Fk ? void 0 : Fk.harvestLevel
      },
      dropsNothing: kk => {
        var Fk;
        return null === (null === (Fk = gk.j[kk]) || void 0 === Fk ? void 0 : Fk.drops)
      },
      displayName: kk => {
        var Fk;
        return null === (Fk = kb.m[kk]) || void 0 === Fk ? void 0 : Fk.displayName
      },
      description: kk => {
        var Fk;
        return null === (Fk = kb.m[kk]) || void 0 === Fk ? void 0 : Fk.description
      },
      harvests: kk => {
        var Fk;
        return null === (Fk = kb.m[kk]) || void 0 === Fk ? void 0 : Fk.harvests
      },
      level: kk => {
        var Fk;
        return null === (Fk = kb.m[kk]) || void 0 === Fk ? void 0 : Fk.level
      }
    };

    function Xm(kk, Fk, Bk) {
      return function(kk, Fk, Bk, Rk) {
        var tk, ak;
        const Xk = Fk.split("|")[0],
          bk = kk.isBlock(Fk) ? Fk : kk.isBlock(Xk) ? Xk : null;
        if (null === bk || "rock" !== kk.harvestType(bk) || kk.dropsNothing(bk) && !zR.has(Xk)) return null;
        const wk = Bk && "rock" === kk.harvests(Bk) ? null !== (tk = kk.level(Bk)) && void 0 !== tk ? tk : 0 : null,
          dk = null !== (ak = null !== Rk && void 0 !== Rk ? Rk : kk.harvestLevel(bk)) && void 0 !== ak ? ak : 0;
        return (null !== wk ? dk <= wk : 0 === kk.harvestLevel(bk)) ? null : NR(kk, dk)
      }(am, kk, Fk, Bk)
    }

    function bm(kk, Fk) {
      return function(kk, Fk, Bk) {
        if (Fk === SR[0]) return [(0, Gk.de)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Gk.N.whiteUiText)];
        const Rk = Bk.split("|")[0],
          tk = kk.isBlock(Rk) ? kk.displayName(Rk) : void 0,
          ak = "string" === typeof tk ? tk : tk && "translationKey" in tk ? `$t(${tk.translationKey})` : Rk;
        return [(0, Gk.de)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: ak
          }
        }, Gk.N.whiteUiText), (0, Gk.de)({
          translationKey: `item:${(0,Gk.Be)(Fk)}`
        }, Gk.N.yellowUiText)]
      }(am, kk, Fk)
    }
    const wm = "buildAFactory2Game:";
    const dm = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function sm(kk) {
      return kk.endsWith(" Ore")
    }
    const Vm = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Jm = [],
      Am = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Vm,
        plan: null,
        atomic: Jm
      },
      em = "buildAFactory2Game:",
      ym = new Set(["Splitter", "Sorting Gate"]),
      fm = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class mm {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = kk, this.planAt = Fk, this.tierOf = Bk, this.Ts = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Hb = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Am, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(kk, Fk, Bk) {
        var Rk, tk, ak;
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const bk = null !== (Rk = null === (tk = kk.LFk(Fk)) || void 0 === tk ? void 0 : tk.name) && void 0 !== Rk ? Rk : null,
          wk = kk.isPlayerCrouching(Fk),
          dk = 0 === Bk ? null : this.resolve(kk, Bk),
          sk = null !== dk && null !== Xk && ym.has(dk.rootName) && function(kk, Fk) {
            return fm.some((Bk => {
              let [Rk, tk] = Bk;
              const ak = kk.getBlockId(Fk[0] + Rk, Fk[1], Fk[2] + tk);
              return 0 !== ak && "Express Belt" === kk.getMetaInfo(ak).rootName
            }))
          }(kk, Xk),
          Vk = this.updatePlan(0 === Bk ? null : Xk),
          Jk = this.tierOf(),
          Ak = null === Xk ? null : (0, tm.e)(Bk),
          ek = null !== Ak && null !== Xk && (0, tm.h)(function(kk) {
            return (Fk, Bk, Rk) => kk.getBlockId(Fk, Bk, Rk)
          }(kk), Xk[0], Xk[1], Xk[2], Ak),
          yk = this.readAfloat(kk, Bk, Xk);
        if (Bk === this.Ts && ek === this.missesMaker && yk === this.afloat && bk === this.Hb && wk === this.crouching && sk === this.express && Jk === this.tier && !Vk && (!this.targetsLive || !this.liveMoved(Xk))) return;
        this.Ts = Bk, this.missesMaker = ek, this.afloat = yk, this.Hb = bk, this.crouching = wk, this.express = sk;
        const fk = sk && dk ? function(kk) {
          if (null === kk.info) return null;
          return kk.express ??= {
            ...kk.info,
            detail: `${em}lookKeepsUpExpress`,
            detailItem: null
          }, kk.express
        }(dk) : null !== dk && ek && null !== Ak ? this.besideMaker(dk, Bk, Ak) : null !== dk && yk ? this.hanging(dk) : null !== (ak = null === dk || void 0 === dk ? void 0 : dk.info) && void 0 !== ak ? ak : null;
        this.tier = Jk;
        const mk = dk && fk ? function(kk, Fk) {
          var Bk, Rk;
          const tk = gk.j[kk];
          if (!kk.endsWith(" Ore") || "rock" !== (null === tk || void 0 === tk ? void 0 : tk.harvestType) || 0 === tk.harvestLevel) return null;
          const ak = null !== (Bk = tk.harvestLevel) && void 0 !== Bk ? Bk : 0,
            Xk = Fk ? kb.m[Fk] : void 0;
          if ("rock" === (null === Xk || void 0 === Xk ? void 0 : Xk.harvests) && (null !== (Rk = Xk.level) && void 0 !== Rk ? Rk : 0) >= ak) return null;
          const bk = (wk = ak, NR(am, wk));
          var wk;
          if (null === bk) return null;
          const dk = ta(bk),
            sk = /^[AEIOU]/.test(bk) ? "An" : "";
          if ("rock" === (null === Xk || void 0 === Xk ? void 0 : Xk.harvests) && Fk) return {
            key: `${em}lookToolTooWeak${sk}`,
            Hb: ta(Fk),
            needed: dk
          };
          return {
            key: bk === SR[0] ? `${em}lookNeedAnyPickaxe` : `${em}lookNeedPickaxe${sk}`,
            Hb: null,
            needed: dk
          }
        }(dk.rootName, bk) : null;
        this.targetsLive = !0 === (null === dk || void 0 === dk ? void 0 : dk.live) && null !== Xk;
        let Wk = null;
        this.targetsLive && dk && Xk && this.live && (this.livePos[0] = Xk[0], this.livePos[1] = Xk[1], this.livePos[2] = Xk[2], this.liveVersion = this.live.version(), Wk = this.live.line(dk.rootName, Xk));
        const vk = null === fk ? Vm : function(kk, Fk, Bk) {
            const Rk = function(kk, Fk, Bk) {
              const Rk = cB(kk);
              if (null === Rk) return null;
              const tk = `${wm}lookPortMode_${Rk}`,
                ak = qR(Fk);
              if (ak && Bk) return {
                mode: null,
                detail: tk,
                next: `${wm}lookWrenchPickUp`,
                nextState: null
              };
              const Xk = GB(kk),
                bk = null === Xk ? null : cB(Xk);
              return null === bk ? {
                mode: null,
                detail: tk,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: tk,
                next: ak ? `${wm}lookWrenchNext` : `${wm}lookPortWrench`,
                nextState: `${wm}lookPortState_${bk}`
              }
            }(kk, Fk, Bk);
            if (null !== Rk) return Rk;
            const tk = Rt(kk, Fk, Bk);
            return null === tk.mode && null === tk.next ? Vm : tk
          }(kk.blockIdToBlockName(Bk), bk, wk),
          ik = this.plan,
          Yk = dk && fk ? this.rowsOf(dk.rootName, Jk) : Jm,
          Lk = this.snapshot;
        if (!(null === fk ? !Lk.visible : Lk.visible && fk === Lk.info && (Ok = mk, Ek = Lk.tool, Ok === Ek || null !== Ok && null !== Ek && Ok.key === Ek.key && Ok.Hb === Ek.Hb && Ok.needed === Ek.needed) && function(kk, Fk) {
            return kk === Fk || null !== kk && null !== Fk && kk.key === Fk.key && JSON.stringify([kk.params, kk.keys]) === JSON.stringify([Fk.params, Fk.keys])
          }(Wk, Lk.live) && function(kk, Fk) {
            return kk.mode === Fk.mode && kk.detail === Fk.detail && kk.next === Fk.next && kk.nextState === Fk.nextState
          }(vk, Lk.wrench) && Ke(ik, Lk.plan) && Yk === Lk.atomic)) {
          var Ok, Ek;
          this.snapshot = null === fk ? {
            ...Lk,
            visible: !1
          } : {
            info: fk,
            visible: !0,
            tool: mk,
            live: Wk,
            wrench: vk,
            plan: ik,
            atomic: Yk
          };
          for (const kk of this.listeners) kk()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Am, this.Ts = 0, this.Hb = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(kk, Fk, Bk) {
        if (null === Bk || 0 === Fk || !bk() || !sm(this.resolve(kk, Fk).rootName)) return !1;
        const Rk = `${Bk[0]},${Bk[1]},${Bk[2]},${Fk}`,
          tk = performance.now();
        return Rk === this.afloatKey && tk - this.afloatAt < Wm ? this.afloat : (this.afloatKey = Rk, this.afloatAt = tk, function(kk, Fk) {
          for (const [Bk, Rk, tk] of dm) {
            const ak = Fk(kk[0] + Bk, kk[1] + Rk, kk[2] + tk);
            if (void 0 === ak || null !== ak && !sm(ak)) return !1
          }
          return !0
        }(Bk, ((Fk, Bk, Rk) => function(kk, Fk, Bk, Rk) {
          if (!kk.isBlockInLoadedChunk(Fk, Bk, Rk)) return;
          const tk = kk.getBlockId(Fk, Bk, Rk);
          return 0 === tk ? null : kk.getMetaInfo(tk).rootName
        }(kk, Fk, Bk, Rk))))
      }
      liveMoved(kk) {
        var Fk;
        const {
          livePos: Bk
        } = this;
        return null === kk || kk[0] !== Bk[0] || kk[1] !== Bk[1] || kk[2] !== Bk[2] || (null === (Fk = this.live) || void 0 === Fk ? void 0 : Fk.version()) !== this.liveVersion
      }
      updatePlan(kk) {
        const Fk = null === kk ? "" : kk.join(","),
          Bk = performance.now();
        if (Fk === this.planPos && Bk - this.planMs < 250) return !1;
        this.planPos = Fk, this.planMs = Bk;
        const Rk = null === kk ? null : this.planAt([kk[0], kk[1], kk[2]]),
          tk = !Ke(Rk, this.plan);
        return this.plan = Rk, tk
      }
      besideMaker(kk, Fk, Bk) {
        let {
          info: Rk
        } = kk;
        if (null === Rk) return null;
        let tk = this.besideMakerById.get(Fk);
        if (void 0 === tk) {
          const kk = "cryo" === Bk ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          tk = {
            ...Rk,
            detail: `${em}${kk}`,
            detailItem: null
          }, this.besideMakerById.set(Fk, tk)
        }
        return tk
      }
      hanging(kk) {
        let {
          info: Fk,
          rootName: Bk
        } = kk;
        if (null === Fk) return null;
        let Rk = this.afloatByRoot.get(Bk);
        return void 0 === Rk && (Rk = {
          ...Fk,
          detail: `${em}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(Bk, Rk)), Rk
      }
      rowsOf(kk, Fk) {
        if (null === Fk) return Jm;
        const Bk = `${kk}|${Fk}`;
        let Rk = this.rowsByKey.get(Bk);
        if (void 0 === Rk) {
          const tk = function(kk, Fk) {
            var Bk;
            if (!(kk in GF)) return [];
            const Rk = null !== (Bk = TF[kk]) && void 0 !== Bk ? Bk : [],
              tk = new Map;
            for (const Xk of Ca(kk, Fk))
              if ((Rk.includes(Xk) || qa(Xk.output) && Pa(Xk.output) > nk(kk)) && Pa(Xk.output) <= Fk) {
                var ak;
                const kk = null !== (ak = tk.get(Xk.output)) && void 0 !== ak ? ak : [];
                kk.push(Xk.input), tk.set(Xk.output, kk)
              } return pa([...tk], (kk => {
              let [Fk] = kk;
              return -Pa(Fk)
            })).map((kk => {
              let [Fk, Bk] = kk;
              return {
                output: Fk,
                inputs: Bk
              }
            }))
          }(kk, Fk);
          Rk = tk.length > 0 ? tk : Jm, this.rowsByKey.set(Bk, Rk)
        }
        return Rk
      }
      resolve(kk, Fk) {
        const {
          rootId: Bk,
          rootName: Rk
        } = kk.getMetaInfo(Fk), tk = (0, yB.j)(Rk) ? Fk : Bk;
        let ak = this.byRootId.get(tk);
        const Xk = bk();
        if (void 0 === ak || ak.nuclear !== Xk) {
          var wk;
          const Bk = function(kk) {
            return rR(am, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk)
          }(Rk, kk.blockIdToBlockName(Fk));
          ak = {
            info: Bk,
            rootName: Rk,
            live: null !== Bk && !0 === (null === (wk = this.live) || void 0 === wk ? void 0 : wk.handles(Rk)),
            nuclear: Xk
          }, this.byRootId.set(tk, ak)
        }
        return ak
      }
    }
    const Wm = 500;
    const im = (0, Rk.memo)((function(kk) {
      var Fk, Bk;
      let {
        store: tk
      } = kk;
      const {
        t: ak
      } = (0, Ht.x)(), [Xk, bk] = (0, Rk.useState)((() => tk.get()));
      (0, Rk.useEffect)((() => (bk(tk.get()), tk.subscribe((() => {
        bk(tk.get())
      })))), [tk]);
      const {
        openInGameMenuName: wk,
        openEverythingMenuName: dk,
        isTouchScreen: sk
      } = (0, Yt.h)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Vk,
        tool: Jk,
        live: Ak,
        wrench: ek,
        atomic: yk
      } = Xk, fk = Xk.visible && null === wk && null === dk;
      if (null === Vk) return null;
      const mk = null !== ek.detail ? ak(ek.detail) : null !== (Fk = Xk.plan) && void 0 !== Fk && Fk.ctrl ? ak("buildAFactory2Game:lookPlanCtrl") : null !== Vk.detail ? ak(Vk.detail, null === Vk.detailItem ? void 0 : {
        item: ak(Vk.detailItem)
      }) : null;
      return (0, Sa.jsxs)("div", {
        className: Ot()("Baf2LookTarget", {
          Visible: fk
        }),
        "aria-hidden": !fk,
        children: [(0, Sa.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: ak(Vk.name)
        }), null !== Xk.plan && (0, Sa.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ak(Xk.plan.key, {
            kind: ak(Xk.plan.kindKey),
            w: String(Xk.plan.w),
            h: String(Xk.plan.h),
            d: String(Xk.plan.d),
            count: String(Xk.plan.count)
          })
        }), void 0 !== (null === (Bk = Xk.plan) || void 0 === Bk ? void 0 : Bk.why) && (0, Sa.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: ak(Xk.plan.why)
        }), null !== ek.mode && (0, Sa.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ak(ek.mode)
        }), null !== Jk ? (0, Sa.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: ak(Jk.key, {
            item: ak(Jk.needed),
            Hb: null === Jk.Hb ? "" : ak(Jk.Hb)
          })
        }) : null !== Ak ? (0, Sa.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ak(Ak.key, ad(ak, Ak))
        }) : null !== mk && (0, Sa.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: mk
        }), yk.length > 0 && (0, Sa.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ak("buildAFactory2Game:lookAtomicRecipes", {
            list: yk.map((kk => {
              let {
                output: Fk,
                inputs: Bk
              } = kk;
              const Rk = Bk.length > 1 ? ` ${ak("buildAFactory2Game:recipeMore",{count:String(Bk.length-1)})}` : "";
              return `${ak(ta(Bk[0]))}${Rk} \u2192 ${ak(ta(Fk))}`
            })).join(", ")
          })
        }), null !== ek.next && (0, Sa.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ak(ek.next, {
            state: null === ek.nextState ? "" : ak(ek.nextState),
            use: ak(sk ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Ym = Bk(38157);
    const om = [],
      Lm = [
        [0, -1, 0]
      ];

    function Om(kk) {
      const Fk = [kk];
      for (let Bk = 1; Bk <= 4; Bk++) Bk > 1 && Fk.push(`${kk}|meta|rot${Bk}`), Fk.push(`${kk}|meta|rot${Bk}|Running`);
      return Fk
    }

    function Em(kk, Fk) {
      return [Math.floor(kk[0] / Fk), Math.floor(kk[1] / Fk), Math.floor(kk[2] / Fk)]
    }

    function Sm(kk, Fk, Bk) {
      return `${kk},${Fk},${Bk}`
    }

    function Nm(kk) {
      const Fk = kk.split("|")[0];
      if (!sB(Fk)) return om;
      const Bk = GF[Fk];
      if (BB(Bk)) return Lm;
      const Rk = Lf(kk);
      return RB(Bk) ? [
        [-Rk[0], -Rk[1], -Rk[2]]
      ] : Et(Bk) ? function(kk, Fk) {
        const Bk = kk[0] - 2 * Fk[0],
          Rk = kk[2] - 2 * Fk[2],
          tk = [];
        for (let ak = -1; ak <= 1; ak++)
          for (let Fk = -1; Fk <= 1; Fk++) tk.push([Bk + ak, kk[1], Rk + Fk]);
        return tk
      }([0, 0, 0], Rk) : om
    }
    const Hm = [.5, .5, .5],
      um = [.2, .8, .3],
      Mm = [.45, 1, .5];
    class gm {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(kk) {
        this.indexed = !0;
        for (const Fk of HF)
          for (const Bk of Om(Fk)) {
            const Fk = kk.blockNameToBlockId(Bk, !0),
              Rk = Nm(Bk);
            null !== Fk && Rk.length > 0 && (this.offsetsList.push(Rk), this.offsetsIndexById[Fk] = this.offsetsList.length)
          }
      }
      onAfterRender(kk, Fk) {
        this.indexed || this.index(kk);
        const Bk = performance.now();
        if (Bk - this.lastCheckMs < 100) return;
        this.lastCheckMs = Bk, this.checks++;
        const Rk = ee.h.Ze,
          [tk, ak, Xk] = Em(Fk, Rk);
        let bk = !1;
        const wk = [];
        let dk = 0;
        for (let sk = tk - 2; sk <= tk + 2; sk++)
          for (let Fk = ak - 1; Fk <= ak + 1; Fk++)
            for (let tk = Xk - 2; tk <= Xk + 2; tk++) {
              const ak = dk++,
                Xk = Sm(sk, Fk, tk),
                Vk = kk.getChunkVersion(sk, Fk, tk);
              let Jk = this.chunks.get(Xk);
              null !== Vk ? (Jk || (Jk = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Xk, Jk)), Jk.seenAt = this.checks, Jk.checkedVersion !== Vk && (Jk.checkedVersion = Vk, bk = !0), Jk.scannedVersion !== Vk && Bk - Jk.scannedAt >= 500 && wk.push({
                slot: ak,
                entry: Jk,
                origin: [sk * Rk, Fk * Rk, tk * Rk]
              })) : (bk ||= void 0 !== Jk, this.chunks.delete(Xk))
            }
        this.scanDue(kk, wk) && (bk = !0);
        for (const [sk, Vk] of this.chunks) Vk.seenAt !== this.checks && (bk ||= Vk.machines.length > 0, this.chunks.delete(sk));
        for (const sk of this.chunks.values())
          for (const [Fk, Bk, Rk] of sk.cellChunks)(Math.abs(Fk - tk) > 2 || Math.abs(Bk - ak) > 1 || Math.abs(Rk - Xk) > 2) && this.watchCellChunk(kk, Fk, Bk, Rk) && (bk = !0);
        for (const [sk, Vk] of this.cellChunks) Vk.seenAt !== this.checks && this.cellChunks.delete(sk);
        bk && this.refresh(kk)
      }
      dispose(kk) {
        this.clearMeshes(kk), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(kk, Fk) {
        const Bk = Math.max(Fk.findIndex((kk => {
          let {
            slot: Fk
          } = kk;
          return Fk >= this.scanFrom
        })), 0);
        let Rk = 96;
        for (let tk = 0; tk < Fk.length; tk++) {
          const {
            slot: ak,
            entry: Xk,
            origin: bk
          } = Fk[(Bk + tk) % Fk.length];
          if (Rk -= this.scan(kk, Xk, bk), Rk <= 0) {
            this.scanFrom = ak + 1;
            break
          }
        }
        return Fk.length > 0
      }
      scan(kk, Fk, Bk) {
        let [Rk, tk, ak] = Bk;
        const Xk = ee.h.Ze,
          bk = this.hits;
        bk.length = 0;
        const wk = kk.scanBlocks(Rk, tk, ak, Rk + Xk, tk + Xk, ak + Xk, this.offsetsIndexById, bk),
          dk = [];
        for (let sk = 0; sk < bk.length; sk += 4) dk.push({
          pos: [bk[sk], bk[sk + 1], bk[sk + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[bk[sk + 3]] - 1]
        });
        return Fk.machines = dk, Fk.cellChunks = function(kk, Fk) {
          const Bk = new Set,
            Rk = [];
          for (const {
              pos: tk,
              offsets: ak
            }
            of kk)
            for (const [kk, Xk, bk] of ak) {
              const ak = Em([tk[0] + kk, tk[1] + Xk, tk[2] + bk], Fk),
                wk = Sm(...ak);
              Bk.has(wk) || (Bk.add(wk), Rk.push(ak))
            }
          return Rk
        }(dk, Xk), Fk.scannedVersion = Fk.checkedVersion, Fk.scannedAt = performance.now(), Math.max(wk, 1)
      }
      watchCellChunk(kk, Fk, Bk, Rk) {
        const tk = Sm(Fk, Bk, Rk),
          ak = kk.getChunkVersion(Fk, Bk, Rk),
          Xk = this.cellChunks.get(tk);
        return null === ak ? this.cellChunks.delete(tk) : (null === Xk || void 0 === Xk ? void 0 : Xk.version) === ak ? (Xk.seenAt = this.checks, !1) : (this.cellChunks.set(tk, {
          version: ak,
          seenAt: this.checks
        }), !0)
      }
      refresh(kk) {
        const Fk = function(kk, Fk) {
            const Bk = new Set,
              Rk = [];
            for (const {
                pos: tk,
                offsets: ak
              }
              of kk)
              for (const [kk, Xk, bk] of ak) {
                const ak = tk[0] + kk,
                  wk = tk[1] + Xk,
                  dk = tk[2] + bk,
                  sk = `${ak},${wk},${dk}`;
                Bk.has(sk) || (Bk.add(sk), Fk(ak, wk, dk) && Rk.push([ak, wk, dk]))
              }
            return Rk
          }([...this.chunks.values()].flatMap((kk => kk.machines)), ((Fk, Bk, Rk) => kk.isBlockInLoadedChunk(Fk, Bk, Rk) && 0 === kk.getBlockId(Fk, Bk, Rk))),
          Bk = Fk.join(";");
        Bk !== this.shownKey && (this.shownKey = Bk, this.clearMeshes(kk), Fk.length > 0 && (this.meshes = [this.build(kk, Fk, !1), this.build(kk, Fk, !0)]))
      }
      build(kk, Fk, Bk) {
        const Rk = Fk[0],
          tk = [],
          ak = [];
        for (const [Xk, bk, wk] of Fk)(0, Ym.e)(tk, ak, [Xk - Rk[0] + .5, bk - Rk[1] + .5, wk - Rk[2] + .5], Hm, Bk);
        return kk.createGameMesh({
          positions: tk,
          indices: ak
        }, {
          rgb: Bk ? Mm : um,
          alpha: .4
        }, Rk)
      }
      clearMeshes(kk) {
        for (const Fk of this.meshes) kk.disposeGameMesh(Fk);
        this.meshes = []
      }
    }
    const Um = 1 / .6,
      cm = 200,
      Gm = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Tm = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      rm = 2 * Math.PI / 3;
    class Dm {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gm;
        this.style = kk, this.particles = null, this.points = new Float32Array(800), this.budget = cm, this.lastMs = 0
      }
      static blade() {
        return new Dm(Tm)
      }
      zW(kk, Fk) {
        const Bk = Math.min(Fk.arcStruck, Fk.arcPoints.length);
        this.draw(kk, [Fk.arcFrom, ...Fk.arcPoints], Fk.arcPoints.slice(0, Bk))
      }
      onBlade(kk, Fk) {
        const [Bk, Rk, tk] = Fk.bladeCentre, [ak, Xk] = Fk.bladeFacing, bk = Bk - 1.5 * ak, wk = tk - 1.5 * Xk, dk = Math.atan2(Xk, ak), sk = [];
        for (let Vk = 0; Vk <= 8; Vk++) {
          const kk = dk - rm / 2 + rm * Vk / 8;
          sk.push([bk + 2.5 * Math.cos(kk), Rk, wk + 2.5 * Math.sin(kk)])
        }
        this.draw(kk, sk, Fk.bladeStruck)
      }
      dispose() {
        var kk;
        null === (kk = this.particles) || void 0 === kk || kk.stop(), this.particles = null
      }
      draw(kk, Fk, Bk) {
        if (!kk.particlesEnabled() || Fk.length < 2) return;
        const Rk = performance.now();
        this.budget = Math.min(cm, this.budget + (Rk - this.lastMs) / 1e3 * cm), this.lastMs = Rk;
        const tk = [];
        let ak = 0,
          Xk = Fk[0];
        for (const mk of Fk.slice(1)) {
          const kk = Math.min(48, Math.round(Math.hypot(mk[0] - Xk[0], mk[1] - Xk[1], mk[2] - Xk[2]) * this.style.perBlock));
          tk.push([Xk, mk, kk]), ak += kk, Xk = mk
        }
        const bk = Bk.length;
        ak += 10 * bk;
        const wk = ak > this.budget ? this.budget / ak : 1;
        if (0 === ak || wk * ak < 1) return;
        const dk = Fk[0],
          [sk, Vk, Jk] = dk,
          Ak = this.points;
        let ek = 0;
        const yk = (kk, Fk, Bk, Rk) => {
          const tk = 4 * ek;
          Ak[tk] = kk - sk, Ak[tk + 1] = Fk - Vk, Ak[tk + 2] = Bk - Jk, Ak[tk + 3] = Rk, ek++
        };
        tk.forEach(((kk, Fk) => {
          let [Bk, Rk, tk] = kk;
          const ak = Math.min(Math.floor(tk * wk), cm - ek),
            Xk = Math.hypot(Rk[0] - Bk[0], Rk[1] - Bk[1], Rk[2] - Bk[2]),
            bk = 0 === Fk && Xk > 0 ? Math.min(.5, .1 * Xk) / Xk : 0;
          for (let wk = 0; wk < ak; wk++) {
            const kk = bk + (wk + .5) / ak * (1 - bk);
            yk(Bk[0] + (Rk[0] - Bk[0]) * kk, Bk[1] + (Rk[1] - Bk[1]) * kk, Bk[2] + (Rk[2] - Bk[2]) * kk, .15)
          }
        }));
        const fk = Math.floor(10 * wk);
        for (let mk = 0; mk < bk; mk++) {
          const [kk, Fk, Rk] = Bk[mk];
          for (let Bk = 0; Bk < fk && ek < cm; Bk++) yk(kk, Fk, Rk, 2.5)
        }
        this.budget -= ek, this.particles ??= kk.createParticles(function(kk) {
          const [Fk, Bk] = kk.colours;
          return {
            texture: "square_particle",
            KV: 400,
            minLifeTime: kk.life[0] / Um,
            maxLifeTime: kk.life[1] / Um,
            minSize: kk.size[0],
            maxSize: kk.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [Fk[0], Fk[1], Fk[2], 1],
              maxColor: [Bk[0], Bk[1], Bk[2], 1]
            }, {
              timeFraction: 1,
              minColor: [Fk[0], Fk[1], Fk[2], 0],
              maxColor: [Bk[0], Bk[1], Bk[2], 0]
            }],
            blendMode: Tb.d.Add
          }
        }(this.style), {
          pos: dk
        }), this.particles.emitPoints(dk, Ak, ek)
      }
    }
    const zm = new Set(["Sky Spring"]);

    function Pm(kk, Fk, Bk) {
      const Rk = kk.split("|")[0];
      return "Air" !== Fk || Bk || ! function(kk) {
        const Fk = kk.split("|")[0];
        return void 0 !== bB[Fk] || zm.has(Fk)
      }(Rk) ? null : kk
    }
    class hm {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(kk) {
        const Fk = kk - this.lastTapAt >= 300;
        return this.lastTapAt = kk, Fk
      }
    }
    class qm {
      constructor() {
        this.presses = new hm, this.predicted = null
      }
      tap(kk, Fk) {
        const Bk = this.presses.isNewPress(Fk);
        return Bk && (this.predicted = {
          station: kk,
          at: Fk
        }), Bk
      }
      consumeServerOpen(kk, Fk) {
        const Bk = this.predicted;
        return !(null === Bk || Bk.station !== kk || Fk - Bk.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Cm {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(kk, Fk) {
        return kk && (this.thrustAt = Fk), Fk - this.thrustAt < 200
      }
    }
    const Zm = [.1, .05, .1],
      pm = {
        texture: "effect_5",
        KV: Math.ceil(48),
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
        blendMode: Tb.d.OneOne
      };
    class Km {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Cm, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      zW(kk, Fk) {
        for (const [Bk, Rk] of Fk.baf2JetFlames) kk.isLocalPlayer(Bk) || (Rk ? this.lit.add(Bk) : this.lit.delete(Bk))
      }
      onAfterRender(kk, Fk) {
        const Bk = performance.now(),
          Rk = this.hold.lit(this.selfThrusting(kk, Fk), Bk);
        for (const [tk, ak] of this.flames)(tk === Fk ? Rk : this.lit.has(tk)) || this.setEmitting(ak, !1), tk === Fk || kk.getPositionView(tk) ? !ak.emitting && Bk - ak.offAt >= 1300 && (ak.particles.stop(), this.flames.delete(tk)) : (ak.particles.dispose(), this.flames.delete(tk), this.lit.delete(tk));
        Rk && this.draw(kk, Fk, Fk);
        for (const tk of this.lit) this.draw(kk, Fk, tk)
      }
      dispose() {
        for (const kk of this.flames.values()) kk.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(kk, Fk) {
        var Bk;
        const Rk = kk.getLocalPlayerMovement();
        return !!Rk && (null !== (tk = {
          option: null !== (Bk = kk.getClientOption(Fk, "jumpHoldThrust")) && void 0 !== Bk ? Bk : null,
          jumping: Rk.jumpHeld,
          onGround: Rk.onGround,
          alive: kk.isAlive(Fk)
        }).option && tk.option.maxUpSpeed >= 0 && tk.jumping && !tk.onGround && tk.alive);
        var tk
      }
      draw(kk, Fk, Bk) {
        var Rk, tk;
        const ak = this.pos;
        if (!kk.readDrawnPosition(Bk, ak)) return;
        const Xk = kk.readDrawnPosition(Fk, this.camera) ? this.camera : ak;
        if (!((ak[0] - Xk[0]) ** 2 + (ak[1] - Xk[1]) ** 2 + (ak[2] - Xk[2]) ** 2 < 1600) || !kk.particlesEnabled()) {
          const kk = this.flames.get(Bk);
          return void(kk && this.setEmitting(kk, !1))
        }
        const bk = null !== (Rk = this.flames.get(Bk)) && void 0 !== Rk ? Rk : this.create(kk, Bk, ak),
          wk = null !== (tk = kk.getDrawnHeading(Bk)) && void 0 !== tk ? tk : 0,
          dk = this.at;
        dk[0] = ak[0] - .35 * Math.sin(wk), dk[1] = ak[1] + 1.05, dk[2] = ak[2] - .35 * Math.cos(wk), bk.particles.moveTo(dk), this.setEmitting(bk, !0)
      }
      setEmitting(kk, Fk) {
        kk.emitting !== Fk && (kk.emitting = Fk, Fk || (kk.offAt = performance.now()), kk.particles.setEmitRate(Fk ? 60 : 0))
      }
      create(kk, Fk, Bk) {
        const Rk = {
          particles: kk.createParticles(pm, {
            pos: Bk,
            half: Zm
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(Fk, Rk), Rk
      }
    }

    function xm(kk) {
      return "Reactor Frame" === tR("reactor", kk)
    }

    function jm(kk) {
      return zB("reactor", kk) && !xm(kk) && (kk.startsWith("Reactor Glass") || kk.startsWith("Reactor Port"))
    }
    const lm = "baf2Goal";
    class nm {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Gt.o.subscribe("setDirectionArrow", (kk => {
          let {
            id: Fk,
            position: Bk
          } = kk;
          Fk === lm && (this.goal = Bk, this.checkedAt = -1 / 0)
        })), Gt.o.subscribe("clearDirectionArrow", (kk => {
          let {
            id: Fk
          } = kk;
          null !== Fk && Fk !== lm || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const kk of this.subs) Gt.o.unsubscribe(kk)
      }
      sideOf(kk, Fk, Bk, Rk) {
        const tk = this.goal;
        if (!tk) return 0;
        Bk - this.checkedAt > 1e3 && (this.checkedAt = Bk, this.open = function(kk, Fk) {
          const [Bk, Rk, tk] = kk.map(Math.floor);
          if (!jm(Fk(Bk, Rk, tk))) return null;
          for (const [ak, Xk] of [
              [1, 0],
              [0, 1]
            ]) {
            const kk = Fk(Bk + ak, Rk, tk + Xk),
              bk = Fk(Bk - ak, Rk, tk - Xk);
            if (xm(bk) && jm(kk)) return [ak, 0, Xk];
            if (xm(kk) && jm(bk)) return [0 - ak, 0, 0 - Xk]
          }
          return null
        }(tk, ((Fk, Bk, Rk) => kk.blockIdToBlockName(kk.getBlockId(Fk, Bk, Rk)))));
        const ak = this.open;
        if (!ak) return 0;
        const Xk = Rk(tk);
        if (Math.abs(Xk.x - Fk.x) > .05 || Math.abs(Xk.y - Fk.y) > .05) return 0;
        const bk = Rk([tk[0] + ak[0], tk[1], tk[2] + ak[2]]).x - Xk.x;
        return Math.abs(bk) < .3 ? 0 : bk > 0 ? 1 : -1
      }
    }
    class Im {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new nm, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Te = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.UW = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((kk => {
          for (const Fk of kk) Fk.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Fk.target, Fk.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Te || this.clear()
        }, window.addEventListener("resize", this.UW)
      }
      onAfterRender(kk, Fk) {
        var Bk;
        this.api = kk, this.project = null !== (Bk = null === Fk || void 0 === Fk ? void 0 : Fk.projectWorldPosToScreenPos) && void 0 !== Bk ? Bk : null, this.queued || this.Te || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Te = !0;
        for (const kk of this.moved.keys()) kk.style.transform = "";
        this.moved.clear();
        for (const kk of this.sideLabels.keys()) kk.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.UW)
      }
      clear() {
        for (const ak of this.moved.keys()) ak.isConnected || this.moved.delete(ak);
        for (const ak of this.sideLabels.keys()) ak.isConnected || this.sideLabels.delete(ak);
        if (0 === this.arrows.length) return;
        const kk = performance.now(),
          Fk = kk - this.refreshedAt > 1e3;
        Fk && (this.refreshedAt = kk, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const Bk = this.trackerBox(),
          Rk = this.barsBox(),
          tk = this.toastBox(Fk);
        (Bk || Rk || tk) && Fk && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let ak = 0; ak < this.arrows.length; ak++) {
          const Fk = this.arrows[ak];
          this.labelOffsets.set(Fk, this.runLabelAside(Fk, kk));
          const Xk = (Bk ? this.shiftLeftOf(Fk, Bk) : 0) || this.shiftOnScreen(Fk),
            bk = Math.min(Rk ? this.liftAbove(Fk, Rk, Xk) : 0, tk ? this.liftAbove(Fk, tk, Xk) : 0),
            wk = this.moved.get(Fk);
          if (0 !== Xk || 0 !== bk) {
            const kk = 0 === bk ? `translateX(${Xk}px)` : `translate(${Xk}px, ${bk}px)`;
            wk !== kk && (Fk.style.transform = kk, this.moved.set(Fk, kk))
          } else void 0 !== wk && (Fk.style.transform = "", this.moved.delete(Fk))
        }
      }
      trackerBox() {
        var kk, Fk;
        const Bk = null !== (kk = this.tracker) && void 0 !== kk && kk.isConnected ? this.tracker : null !== (Fk = this.trackers[0]) && void 0 !== Fk ? Fk : null;
        if (Bk !== this.tracker && this.watch(Bk), this.boxStale && Bk) {
          var Rk, tk, ak;
          this.boxStale = !1;
          const kk = Bk.closest(".NoRoom") ? null : Bk.getBoundingClientRect(),
            Fk = kk && kk.width > 0 ? null === (Rk = this.hud) || void 0 === Rk ? void 0 : Rk.getBoundingClientRect() : void 0,
            Xk = kk && Fk ? Math.max(kk.top, Fk.top) : null !== (tk = null === kk || void 0 === kk ? void 0 : kk.top) && void 0 !== tk ? tk : 0,
            bk = kk && Fk ? Math.min(kk.bottom, Fk.bottom) : null !== (ak = null === kk || void 0 === kk ? void 0 : kk.bottom) && void 0 !== ak ? ak : 0;
          this.box = kk && kk.width > 0 && bk > Xk ? {
            left: kk.left,
            top: Xk,
            right: kk.right,
            bottom: bk
          } : null
        }
        return Bk ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var kk;
          this.barsStale = !1;
          const Fk = null === (kk = this.statBars[0]) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
          this.bars = Fk && Fk.width > 0 && Fk.height > 0 ? {
            left: Fk.left,
            top: Fk.top,
            right: Fk.right,
            bottom: Fk.bottom
          } : null
        }
        return this.bars
      }
      toastBox(kk) {
        var Fk;
        const Bk = null !== (Fk = this.toasts[0]) && void 0 !== Fk ? Fk : null;
        if (Bk !== this.toastEl || kk && Bk) {
          this.toastEl = Bk;
          const kk = null === Bk || void 0 === Bk ? void 0 : Bk.getBoundingClientRect();
          this.toast = kk && kk.width > 0 && kk.height > 0 ? {
            left: kk.left,
            top: kk.top,
            right: kk.right,
            bottom: kk.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(kk, Fk, Bk) {
        var Rk;
        const tk = this.anchorOf(kk);
        if (!tk) return 0;
        const ak = tk.x + Bk + (null !== (Rk = this.labelOffsets.get(kk)) && void 0 !== Rk ? Rk : 0),
          {
            halfWidth: Xk,
            labelled: bk
          } = this.extentOf(kk),
          wk = tk.y + this.em * (bk ? 6.2 : 3);
        return wk < Fk.top - 6 || ak + Xk < Fk.left - 6 || ak - Xk > Fk.right + 6 ? 0 : Fk.top - 6 - wk
      }
      watch(kk) {
        var Fk, Bk;
        this.tracker && this.sizes.unobserve(this.tracker), null === (Fk = this.hud) || void 0 === Fk || Fk.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = kk, this.hud = null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.closest(".Baf2QuestHud")) && void 0 !== Bk ? Bk : null, this.box = null, this.boxStale = !0, kk && this.sizes.observe(kk), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(kk, Fk) {
        var Bk;
        const Rk = this.anchorOf(kk);
        if (!Rk) return 0;
        const {
          y: tk
        } = Rk, ak = Rk.x + (null !== (Bk = this.labelOffsets.get(kk)) && void 0 !== Bk ? Bk : 0), Xk = this.em, {
          halfWidth: bk,
          labelled: wk
        } = this.extentOf(kk), dk = tk - Xk, sk = ak + bk;
        return tk + Xk * (wk ? 6.2 : 3) < Fk.top || dk > Fk.bottom || sk < Fk.left - 6 || ak - bk > Fk.right ? 0 : Math.max(Fk.left - 6 - sk, 6 - (ak - bk))
      }
      shiftOnScreen(kk) {
        var Fk;
        const Bk = this.anchorOf(kk);
        if (!Bk) return 0;
        const {
          halfWidth: Rk
        } = this.extentOf(kk), tk = Bk.x + (null !== (Fk = this.labelOffsets.get(kk)) && void 0 !== Fk ? Fk : 0), ak = tk + Rk - (this.innerWidth - 6);
        return ak > 0 ? -ak : Math.max(0, 6 - (tk - Rk))
      }
      runLabelAside(kk, Fk) {
        var Bk;
        let Rk = null;
        for (let Xk = 0; Xk < kk.children.length; Xk++) kk.children[Xk].classList.contains("DirectionArrowLabel") && (Rk = kk.children[Xk]);
        if (!Rk) return 0;
        const tk = kk.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(kk) : null,
          ak = (tk && this.api ? this.side.sideOf(this.api, {
            x: tk.x / this.innerWidth * 100,
            y: tk.y / this.innerHeight * 100
          }, Fk, this.project) : 0) * this.halfWidthOf(Rk);
        return ak !== (null !== (Bk = this.sideLabels.get(Rk)) && void 0 !== Bk ? Bk : 0) && (Rk.style.transform = 0 === ak ? "" : `translateX(-50%) translateX(${ak}px)`, 0 === ak ? this.sideLabels.delete(Rk) : this.sideLabels.set(Rk, ak)), ak
      }
      extentOf(kk) {
        let Fk = this.em,
          Bk = !1;
        for (let Rk = 0; Rk < kk.children.length; Rk++) {
          const tk = kk.children[Rk],
            ak = tk.classList.contains("DirectionArrowLabel");
          Bk ||= ak, (ak || tk.classList.contains("DirectionArrowDistance")) && (Fk = Math.max(Fk, this.halfWidthOf(tk)))
        }
        return {
          halfWidth: Fk,
          labelled: Bk
        }
      }
      halfWidthOf(kk) {
        let Fk = this.halfWidths.get(kk);
        return void 0 === Fk && (Fk = kk.offsetWidth / 2, this.halfWidths.set(kk, Fk), this.sizes.observe(kk), this.labels.add(kk)), Fk
      }
      forgetGoneLabels() {
        for (const kk of this.labels) kk.isConnected || (this.sizes.unobserve(kk), this.halfWidths.delete(kk), this.labels.delete(kk))
      }
      anchorOf(kk) {
        const Fk = kk.style.translate,
          Bk = this.anchors.get(kk);
        if (Bk && Bk.translate === Fk && Bk.innerWidth === this.innerWidth && Bk.innerHeight === this.innerHeight) return Bk;
        const Rk = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Fk);
        if (!Rk) return null;
        const tk = {
          translate: Fk,
          x: parseFloat(Rk[1]) / 100 * this.innerWidth,
          y: parseFloat(Rk[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(kk, tk), tk
      }
    }
    const Qm = "Baf2ArrowText";

    function kW(kk, Fk) {
      const Bk = kk.rows.find((kk => kk.current));
      return ck(kk.tutorial) && null !== Bk && void 0 !== Bk && Bk.item && pt(Bk) && uk(Bk.item).includes(Fk) ? Bk.item : null
    }
    const FW = new class {
      constructor(kk) {
        this.select = kk, this.picks = new Map
      }
      open(kk, Fk, Bk) {
        const Rk = kW(Fk, kk);
        null !== Rk && this.AA(kk, Rk, Bk)
      }
      follow(kk, Fk) {
        if (bk())
          for (const [Bk, {
              item: Rk,
              had: tk
            }] of this.picks) {
            const ak = kW(kk, Bk);
            ak !== Rk && (null !== ak && Fk(Rk) > tk ? this.AA(Bk, ak, Fk) : this.picks.delete(Bk))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      AA(kk, Fk, Bk) {
        this.picks.set(kk, {
          item: Fk,
          had: Bk(Fk)
        }), this.select(kk, Fk)
      }
    }(Tt.u);

    function BW(kk) {
      return Fk => {
        let Bk = 0;
        for (const Rk of kk.getInventoryItems())(null === Rk || void 0 === Rk ? void 0 : Rk.name) === Fk && (Bk += null === Rk.amount ? 1 : Math.max(Rk.amount, 0));
        return Bk
      }
    }

    function RW(kk, Fk, Bk, Rk) {
      kk.getClientOption(Fk, "canCraft") && "inventory" !== Yt.c.get("openInGameMenuName") && (FW.open(Bk, Rk.get(), BW(kk)), Gt.o.Hf("toggleMenu", `inventory|${Bk}`))
    }
    let tW = null,
      aW = !1;

    function XW(kk) {
      const Fk = Oa();
      kk === tW && Fk === aW || (tW = kk, aW = Fk, (0, Tt.x)(function(kk, Fk) {
        const Bk = new Map;
        for (let Rk = kk + 1; Rk <= tk.length; Rk++) {
          const tk = Ka(Rk, kk, Fk);
          if (tk)
            for (const Fk of mk(Rk).unlocks) Bk.set(Fk, {
              ...tk,
              stepsAway: Rk - kk
            })
        }
        return Bk
      }(kk, Fk)))
    }

    function bW() {
      return (0, Tt.C)(pa(Object.keys(Hk), Pa)), () => {
        (0, Tt.C)([])
      }
    }
    const wW = "buildAFactory2Game:",
      dW = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      sW = {
        on: `${wW}tutorialButtonOn`,
        hud: `${wW}tutorialButtonHud`,
        off: `${wW}tutorialButtonOff`
      },
      VW = {
        on: `${wW}tutorialPickedOn`,
        hud: `${wW}tutorialPickedHud`,
        off: `${wW}tutorialPickedOff`
      };

    function JW(kk, Fk, Bk) {
      let Rk = null,
        tk = () => {};
      const ak = ak => {
        var Xk;
        let {
          tutorial: bk,
          tutorialKnown: wk
        } = ak;
        (null === (Xk = Rk) || void 0 === Xk ? void 0 : Xk.tutorial) === bk && Rk.tutorialKnown === wk || (Rk = {
          tutorial: bk,
          tutorialKnown: wk
        }, tk = (0, vt.z)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: sW[bk],
          icon: {
            kind: "icon",
            name: dW[bk]
          },
          iconOnly: !0,
          disabled: !wk,
          className: "Baf2TutorialButton",
          onClick: () => {
            var Rk;
            (Rk => {
              const tk = Fk.setTutorial(Rk);
              kk.send(`baf2tutorial ${Rk} ${tk}`), Bk.show({
                baf2ToastText: [(0, Gk.de)({
                  translationKey: VW[Rk]
                }, Gk.N.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((Rk = Fk.get().tutorial, Uk[(Uk.indexOf(Rk) + 1) % Uk.length]))
          }
        }))
      };
      ak(Fk.get());
      const Xk = Gt.o.subscribe(rt, ak);
      return () => {
        Gt.o.unsubscribe(Xk), tk()
      }
    }

    function AW(kk, Fk, Bk) {
      var Rk, tk;
      const ak = kk.getTargetedBlock();
      if (!ak || ! function(kk, Fk, Bk) {
          if ("Chest" !== Fk) return !1;
          const Rk = kk.split("|")[0];
          if (!sB(Rk) || 0 === GF[Rk].outputSlots.length) return !1;
          const tk = Lf(kk);
          return Bk[0] === tk[0] && Bk[1] === tk[1] && Bk[2] === tk[2]
        }(Bk, null === (Rk = kk.LFk(Fk)) || void 0 === Rk ? void 0 : Rk.name, ak.normal)) return !1;
      const [Xk, bk, wk] = ak.rb, dk = kk.getBlockId(Xk, bk, wk);
      return 0 === dk || !0 === (null === (tk = gk.j[dk]) || void 0 === tk ? void 0 : tk.canBePlacedOver)
    }
    var eW = Bk(36445);
    const yW = new Set(fB.d);
    class fW {
      constructor(kk) {
        this.toasts = kk, this.lastAt = -1 / 0
      }
      onAltAction(kk, Fk, Bk) {
        const Rk = kk.getTargetedBlock();
        if (!Rk || function(kk) {
            const Fk = kk.split("|")[0];
            return sB(Fk) || null !== OR(Fk) || Sk(Fk) || fB.d.includes(Fk)
          }(Bk) && !yW.has(Bk.split("|")[0])) return;
        const tk = kk.LFk(Fk);
        if (!tk || !yW.has(tk.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const ak = tk.typeObj.id,
          [Xk, bk, wk] = Rk.rb,
          dk = kk.getBlockId(Xk, bk, wk),
          sk = gk.j[dk];
        (0 === dk || null !== sk && void 0 !== sk && sk.EA || null !== sk && void 0 !== sk && sk.canBePlacedOver) && kk.isSolidToPlayerBlockId(ak) && kk.canModifyBlockAt(Xk, bk, wk) && kk.Zkk(Xk, bk, wk, ak) && !kk.Zkk(Xk, bk, wk, ak, Fk) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Gk.de)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Gk.N.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class mW {
      constructor(kk) {
        this.show = kk, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(kk, Fk, Bk) {
        var Rk;
        if (!Fk) return this.started = null, void this.gatedThisHold.clear();
        if (!kk) return void(this.started = null);
        const tk = `${kk.x},${kk.y},${kk.z},${kk.Hb}`;
        if (tk === this.started) return;
        this.started = tk;
        const ak = DR(kk.y) ? Xm(kk.block, kk.Hb, kk.level) : null;
        if (null === ak || this.gatedThisHold.has(tk)) return;
        this.gatedThisHold.add(tk);
        const Xk = kk.block.split("|")[0];
        Bk - (null !== (Rk = this.hintedAt.get(Xk)) && void 0 !== Rk ? Rk : -1 / 0) < 5e3 || (this.hintedAt.set(Xk, Bk), this.show({
          baf2ToastText: bm(ak, kk.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var WW = Bk(42);

    function vW(kk, Fk) {
      const Bk = [...kk.baf2CoreBankPaused];
      for (const [tk] of kk.baf2CoreBanked) Bk.push(tk);
      for (const Xk of tk) {
        for (const {
            item: kk
          }
          of Xk.cost) Bk.push(kk);
        for (const kk of Xk.newDeposits) Bk.push(kk.block);
        for (const kk of Xk.unlocks) Bk.push(kk, Mk(kk));
        Xk.reward && Bk.push(Xk.reward);
        for (const {
            item: kk
          }
          of null !== (Rk = null === (ak = Xk.charge) || void 0 === ak ? void 0 : ak.items) && void 0 !== Rk ? Rk : []) {
          var Rk, ak;
          Bk.push(kk)
        }
      }
      return {
        message: kk,
        itemNames: Fk([...new Set(Bk)])
      }
    }
    const iW = "baf2MultiblockGuide";
    const YW = new Map;
    const oW = function(kk, Fk, Bk, tk) {
      let {
        localPlayerId: ak
      } = tk;
      const Xk = new mb,
        bk = new RA,
        dk = new sA,
        sk = new wA(dk),
        Vk = (kk, Fk) => {
          Fk ? sk.observe(kk) : sk.unobserve(kk)
        },
        Jk = new bA,
        Ak = new eA(Vk),
        ek = kk => Ak.covers(kk),
        yk = new cA;
      let fk;
      const mk = new PX((kk => {
          fk.sendCommand(kk)
        })),
        Wk = () => {
          mk.send("baf2questbook")
        },
        vk = kk => function(kk, Fk, Bk) {
          const Rk = {};
          for (const tk of Bk) {
            let Bk = YW.get(tk);
            void 0 === Bk && (Bk = kk.getItemStat(Fk, tk, "displayName"), YW.set(tk, Bk)), Rk[tk] = Bk
          }
          return Rk
        }(fk, ak, kk),
        ik = new Pt(Wk),
        Yk = new pA((() => Yt.c.get("loadingOverlayVisible"))),
        Lk = new nA,
        Ok = new fW(Yk),
        Ek = new mW((kk => {
          Yk.show(kk, kk.baf2ToastMs)
        })),
        Nk = new Xe(Vk),
        Hk = new Uf(Nk),
        uk = new EX,
        Mk = new Rm,
        Uk = new Rb,
        ck = new Ae({
          read: () => !1 !== WW.i.getItem(iW),
          write: kk => {
            WW.i.setItem(iW, kk)
          }
        }),
        rk = new Pe(ck),
        Dk = new Ce(ck),
        zk = new Vy(ck, (kk => function(kk, Fk) {
          const Bk = kw(Fk.w, Fk.h, Fk.d),
            Rk = new Uint8Array(Bk);
          for (let tk = 0; tk < Bk; tk++) {
            const Bk = Ge(kk, QB(Fk, RR(Fk, tk)));
            Rk[tk] = null === Bk ? 0 : lb(Bk)
          }
          return Rk
        }(fk, kk)), By(mk)),
        Pk = new Jy(ck, By(mk)),
        hk = new dy,
        qk = (kk, Fk) => {
          let [Bk, Rk, tk] = kk;
          hk.answered(Fk) || Yk.show({
            baf2ToastText: [(0, Gk.de)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: Bk,
                h: Rk,
                d: tk
              }
            }, Gk.N.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      zk.onSizeNotTaken(qk), Pk.onSizeNotTaken(qk);
      const pk = new fy,
        Kk = new ly(ck),
        xk = new Iy,
        lk = new df(xk),
        nk = new Yf,
        Ik = new Gf,
        kF = new pf(Ik),
        FF = new Bm(Ik),
        BF = Ik.lookSource(),
        RF = new mm({
          handles: kk => BF.handles(kk) || kk === Tk,
          line: (kk, Fk) => kk === Tk ? function(kk, Fk, Bk) {
            var Rk;
            const tk = Zk(null === (Rk = Fk.at(Bk)) || void 0 === Rk ? void 0 : Rk.item);
            return null === tk ? {
              key: `${em}lookFarmEmpty`
            } : {
              key: kk.blockIdToBlockName(kk.getBlockId(Bk[0], Bk[1], Bk[2])).endsWith("|Running") ? `${em}lookFarmRunning` : `${em}lookFarmWaiting`,
              keys: {
                mob: Ck(tk)
              }
            }
          }(fk, Nk, Fk) : BF.line(kk, Fk),
          version: () => BF.version() + Nk.version()
        }, (kk => pe(ck.all(), kk, (kk => Ge(fk, kk)))), (() => ik.get().tier)),
        tF = new cy,
        aF = new gm,
        XF = new Dm,
        bF = Dm.blade(),
        wF = new Km,
        dF = new ke,
        sF = new Im,
        VF = new qm,
        AF = new hm;
      let eF = -1 / 0,
        yF = 0,
        fF = -1 / 0,
        mF = -1 / 0;
      const WF = () => {
          mk.send("baf2islandsclose"), mF = Date.now()
        },
        vF = [];

      function iF(kk) {
        var Fk, Bk, Rk, tk, ak, Xk, wk;
        "core" === (null === (Fk = bk.get()) || void 0 === Fk ? void 0 : Fk.kind) && "core" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && mk.send("baf2coreclose"), "power" === (null === (Bk = bk.get()) || void 0 === Bk ? void 0 : Bk.kind) && "power" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && mk.send("baf2powerclose"), "water" === (null === (Rk = bk.get()) || void 0 === Rk ? void 0 : Rk.kind) && "water" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && mk.send(Qk.s), "terminal" === (null === (tk = bk.get()) || void 0 === tk ? void 0 : tk.kind) && "terminal" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && mk.send("baf2terminalclose"), "islands" === (null === (ak = bk.get()) || void 0 === ak ? void 0 : ak.kind) && "islands" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && WF();
        const dk = Ik.getStatus();
        "collider" === (null === (Xk = bk.get()) || void 0 === Xk ? void 0 : Xk.kind) && "collider" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && dk && mk.send(Dw(dk, "close"));
        const sk = kk => "reactor" === kk || "battery" === kk;
        if (sk(null === (wk = bk.get()) || void 0 === wk ? void 0 : wk.kind) && !sk(null === kk || void 0 === kk ? void 0 : kk.kind)) {
          var Vk, Jk, Ak;
          const kk = "reactor" === (null === (Vk = bk.get()) || void 0 === Vk ? void 0 : Vk.kind) ? null === (Jk = zk.get()) || void 0 === Jk ? void 0 : Jk.status.baf2RxAt : null === (Ak = Pk.get()) || void 0 === Ak ? void 0 : Ak.status.baf2BatAt;
          kk && mk.send(JF(kk, "close"))
        }
        "quests" === (null === kk || void 0 === kk ? void 0 : kk.kind) && Wk(), bk.set(kk), null === kk && Lk.release()
      }

      function YF() {
        (0, it.f)(), iF(null)
      }
      let oF = new Set,
        LF = !1;
      const OF = {
        onCreate: kk => {
          fk = kk, fk.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const Fk of HF) {
            const kk = GF[Fk].inputSlots ? Ub(Xk) : ub(Fk, Xk, uk, mk);
            vF.push((0, Wt.e)(Fk, kk))
          }
          vF.push((0, it.w)((0, Rk.createElement)(Rk.Fragment, null, (0, Rk.createElement)(mA, {
            controller: Ak
          }), (0, Rk.createElement)(de, {
            store: Nk
          }), (0, Rk.createElement)(im, {
            store: RF
          }), (0, Rk.createElement)(CA, {
            store: ik
          }), (0, Rk.createElement)(jA, {
            store: Yk
          }), (0, Rk.createElement)(IA, {
            store: Lk
          }), (0, Rk.createElement)(Be, {
            store: dF
          }), (0, Rk.createElement)(yy, {
            store: pk
          }), (0, Rk.createElement)(Qy, {
            store: xk
          })), {
            content: (0, Rk.createElement)(tA, {
              commands: mk,
              store: bk,
              power: uk,
              water: Uk,
              reactor: zk,
              battery: Pk,
              collider: Ik,
              terminal: Mk,
              quests: ik,
              close: it.i,
              leave: () => {
                Lk.dropHeld(), (0, it.f)()
              },
              askIslands: () => {
                mF = -1 / 0, eF = Date.now(), yF = mk.send(jk)
              },
              openSocial: () => {
                (0, it.f)(), Yt.c.set({
                  openEverythingMenuName: JB.p.SOCIAL
                })
              },
              showCore: kk => {
                iF({
                  kind: "core",
                  core: kk
                }), mk.send("baf2corereopen")
              }
            }),
            onClose: () => {
              iF(null)
            }
          })), vF.push((0, vt.z)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              iF({
                kind: "quests"
              }), (0, it.q)()
            }
          })), vF.push(JW(mk, ik, Yk)), LF = !1, vF.push(Ea((() => {
            null !== tW && XW(tW)
          }))), vF.push(bW()), vF.push(function() {
            const kk = Gt.o.subscribe(rt, ka),
              Fk = () => {
                if (Qt) {
                  const kk = Qt;
                  Qt = null, (0, Tt.A)(kk)
                }
              },
              Bk = Gt.o.subscribe("toggleMenu", (kk => {
                "inventory" === (null === kk || void 0 === kk ? void 0 : kk.split("|")[0]) && Fk()
              })),
              Rk = Gt.o.subscribe("appManagerUpdated|openInGameMenuName", (kk => {
                "inventory" === kk && Fk()
              }));
            return () => {
              Gt.o.unsubscribe(kk), Gt.o.unsubscribe(Bk), Gt.o.unsubscribe(Rk)
            }
          }()), vF.push(function(kk) {
            const Fk = BW(kk),
              Bk = Gt.o.subscribe(rt, (kk => {
                FW.follow(kk, Fk)
              }));
            return () => {
              Gt.o.unsubscribe(Bk), FW.clear()
            }
          }(fk)), vF.push(function() {
            const kk = document.documentElement,
              Fk = (0, TA.d)(".InvenBodyRight", [], (() => {
                const Fk = document.querySelector(".InvenBodyRight");
                Fk && kk.style.setProperty("--baf2-backpack-width", `${Fk.offsetWidth}px`)
              }));
            return () => {
              Fk(), kk.style.removeProperty("--baf2-backpack-width")
            }
          }()), vF.push(function() {
            const kk = document.documentElement;
            return kk.classList.add(Qm), () => {
              kk.classList.remove(Qm)
            }
          }()), vF.push((() => {
            sk.dispose(), dk.dispose()
          })), yk.start(fk), vF.push((() => {
            yk.dispose(), wF.dispose(), Hk.dispose()
          }))
        },
        onClose: () => {
          (0, Tt.A)([]), Qt = null, It = new Set, tW = null, (0, Tt.x)(new Map), YW.clear();
          for (const kk of vF) kk();
          ik.dispose(), RF.dispose(), Yk.dispose(), Lk.dispose(), tF.dispose(), aF.dispose(fk), rk.dispose(fk), Dk.dispose(fk), Kk.dispose(fk), lk.dispose(fk), xk.dispose(), nk.dispose(), ck.dispose(), zk.dispose(), Pk.dispose(), pk.dispose(), XF.dispose(), bF.dispose(), dF.dispose(), kF.dispose(fk), FF.dispose(fk), Ik.dispose(), sF.dispose(), mk.clear()
        },
        onAfterRender: (kk, Fk) => {
          var Bk, Rk, tk;
          try {
            yk.onAfterRender(Fk)
          } catch (dk) {
            console.error("Error drawing BAF2 belt items", dk)
          }
          try {
            wF.onAfterRender(fk, ak)
          } catch (dk) {
            console.error("Error drawing BAF2 jet flames", dk)
          }
          LF || (LF = !0, mk.send("baf2clientready"));
          const Xk = fk.getPositionView(ak);
          Ak.onAfterRender(Fk, Xk, Jk), Nk.onAfterRender(Fk, Xk, Jk, ek), sk.run(Jk), tF.onAfterRender(fk, Xk), aF.onAfterRender(fk, Xk), Hk.onAfterRender(fk, Xk), rk.onAfterRender(fk, Xk), Dk.onAfterRender(fk, ak, Xk), Kk.onAfterRender(fk, ak, Xk), lk.onAfterRender(fk, ak), nk.onAfterRender(fk, Xk), ik.onPlayerY(Xk[1]), kF.onAfterRender(fk), FF.onAfterRender(fk, ak, Xk);
          const wk = fk.getTargetedBlock();
          RF.onAfterRender(fk, ak, null !== (Bk = null === wk || void 0 === wk ? void 0 : wk.vx) && void 0 !== Bk ? Bk : 0, null !== (Rk = null === wk || void 0 === wk ? void 0 : wk.position) && void 0 !== Rk ? Rk : null), sF.onAfterRender(fk, Fk), Ek.onMining(function(kk, Fk) {
            var Bk, Rk;
            const tk = kk.getMiningBlock();
            if (!tk) return null;
            const ak = (0, gk.h)(kk.getBlockId(tk[0], tk[1], tk[2])),
              Xk = null !== (Bk = null === (Rk = kk.LFk(Fk)) || void 0 === Rk ? void 0 : Rk.name) && void 0 !== Bk ? Bk : null,
              bk = kk.getItemStat(Fk, ak.split("|")[0], "harvestLevel");
            return {
              block: ak,
              x: tk[0],
              y: tk[1],
              z: tk[2],
              Hb: Xk,
              level: bk
            }
          }(fk, ak), fk.isMining(), performance.now()), "dropMap" === (null === (tk = bk.get()) || void 0 === tk ? void 0 : tk.kind) && DR(Xk[1]) && YF()
        },
        onPlayerChangeBlock: (kk, Fk, Bk, Rk, tk, Xk) => {
          kk === ak && function(kk, Fk, Bk, Rk, tk, ak, Xk) {
            const bk = Pm(ak, Xk, kk.isPlayerCrouching(Fk));
            if (null === bk) return;
            if (kk.uE(Bk, Rk, tk, bk), !kk.getClientOption(Fk, "canPickUpItems")) return;
            const wk = bB[bk.split("|")[0]];
            var dk, sk, Vk;
            void 0 !== wk && (dk = kk.getInventoryItems(), sk = wk, Vk = ee.h.maxItemStackSize, kk.getInventoryFreeSlotCount(Fk) > 0 || dk.some((kk => null !== kk && kk.name === sk && null !== kk.amount && kk.amount < Vk))) && kk.playSound(Fk, (0, eW.c)("pickUp"), .5, 1)
          }(fk, kk, Fk, Bk, Rk, tk, Xk)
        },
        onPlayerAltAction: (kk, Fk, Bk, Rk, tk) => {
          var Xk, bk;
          if (!fk.getClientOption(ak, "canPickUpItems")) return;
          const wk = null !== (Xk = null === (bk = fk.LFk(ak)) || void 0 === bk ? void 0 : bk.name) && void 0 !== Xk ? Xk : null,
            dk = function(kk, Fk) {
              const Bk = kk.split("|")[0];
              return Sk(Bk) && Fk !== dt && "Sky Pack" !== Fk ? Bk : null
            }(tk, wk);
          if (null !== dk) return void(VF.tap(dk, performance.now()) && RW(fk, ak, dk, ik));
          if (!qR(wk)) return;
          const sk = AF.isNewPress(performance.now()),
            Vk = function(kk, Fk, Bk) {
              return !qR(Fk) || Bk ? null : IR(kk)
            }(tk, wk, fk.isPlayerCrouching(ak));
          null !== Vk && sk && fk.uE(Fk, Bk, Rk, Vk)
        },
        onPlayerAttemptAltAction: (kk, Fk, Bk, Rk, tk) => {
          if (function(kk, Fk, Bk, Rk, tk) {
              "Workbench" === Rk.split("|")[0] && kk.getClientOption(Bk, "canCraft") && (FW.open("Workbench", tk.get(), BW(kk)), Fk.send("baf2station Workbench"))
            }(fk, mk, ak, tk, ik), AW(fk, ak, tk)) return "preventAction";
          Ok.onAltAction(fk, ak, tk)
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          if ("baf2MachineStatus" === kk) {
            var Bk, Rk, tk, dk, sk, Vk, Jk, ek, Wk, Ok, Ek, Sk, Hk, gk, Gk, Tk;
            const kk = Fk,
              ak = kk.baf2MachineTaught;
            Xk.set(kk.baf2MachinePos, {
              status: kk.baf2MachineStatus,
              power: null !== (Bk = kk.baf2MachinePower) && void 0 !== Bk ? Bk : null,
              opLeftMs: null !== (Rk = kk.baf2MachineOpLeftMs) && void 0 !== Rk ? Rk : null,
              dug: kk.baf2MachineYield ? {
                item: kk.baf2MachineYield,
                name: vk([kk.baf2MachineYield])[kk.baf2MachineYield]
              } : null,
              powerCap: null !== (tk = kk.baf2MachinePowerCap) && void 0 !== tk ? tk : null,
              powerRates: null !== (dk = kk.baf2MachinePowerRates) && void 0 !== dk ? dk : null,
              coupled: !0 === kk.baf2MachineCoupled,
              couplerLevel: null !== (sk = kk.baf2MachineCoupler) && void 0 !== sk ? sk : 1,
              taught: ak,
              taughtName: ak ? vk([ak])[ak] : null,
              tier: null !== (Vk = kk.baf2MachineTier) && void 0 !== Vk ? Vk : null,
              input: null !== (Jk = kk.baf2MachineInput) && void 0 !== Jk ? Jk : null,
              inertCoupler: null !== (ek = kk.baf2MachineInertCoupler) && void 0 !== ek ? ek : null,
              inputShort: null !== (Wk = kk.baf2MachineInputShort) && void 0 !== Wk ? Wk : null,
              field: null !== (Ok = kk.baf2MachineField) && void 0 !== Ok ? Ok : null,
              noSeeds: !0 === kk.baf2MachineNoSeeds,
              fuelFed: !0 === kk.baf2MachineFuelFed,
              fuelFeeds: !0 === kk.baf2MachineFuelFeeds,
              coreFull: !0 === kk.baf2MachineCoreFull,
              waterUnpowered: !0 === kk.baf2MachineWaterUnpowered,
              powerShort: !0 === kk.baf2MachinePowerShort,
              powerWait: !0 === kk.baf2MachinePowerWait,
              reactorPowered: !0 === kk.baf2MachineReactorPowered,
              fuelLeftMs: null !== (Ek = kk.baf2MachineFuelLeftMs) && void 0 !== Ek ? Ek : null,
              burning: null !== (Sk = kk.baf2MachineBurning) && void 0 !== Sk ? Sk : null,
              fuelKeep: null !== (Hk = kk.baf2MachineFuelKeep) && void 0 !== Hk ? Hk : null,
              water: null !== (gk = kk.baf2MachineWater) && void 0 !== gk ? gk : null,
              farm: null !== (Gk = kk.baf2MachineFarm) && void 0 !== Gk ? Gk : null,
              cryo: null !== (Tk = kk.baf2MachineCryo) && void 0 !== Tk ? Tk : null
            })
          } else if ("baf2StationOpen" === kk) {
            const kk = Fk.baf2Station;
            VF.consumeServerOpen(kk, performance.now()) || RW(fk, ak, kk, ik)
          } else if ("baf2Power" === kk) {
            const kk = Fk;
            uk.set(kk), kk.baf2PowerOpen && (iF({
              kind: "power"
            }), (0, it.q)())
          } else if (kk === Qk.v) {
            const kk = Fk;
            Uk.set(kk), kk.baf2WaterOpen && (iF({
              kind: "water"
            }), (0, it.q)())
          } else if ("baf2RxPlans" === kk) {
            var rk, Dk, qk;
            const kk = Fk;
            ck.zW(kk);
            const Bk = new Set(kk.baf2RxPlanList.map((kk => {
              let [Fk, Bk, Rk] = kk;
              return `${Fk},${Bk},${Rk}`
            })));
            pk.retain(Bk);
            const Rk = null === (rk = bk.get()) || void 0 === rk ? void 0 : rk.kind,
              tk = "reactor" === Rk ? null === (Dk = zk.get()) || void 0 === Dk ? void 0 : Dk.status.baf2RxAt : "battery" === Rk ? null === (qk = Pk.get()) || void 0 === qk ? void 0 : qk.status.baf2BatAt : void 0;
            tk && oF.has(tk.join(",")) && !Bk.has(tk.join(",")) && YF(), oF = Bk
          } else if ("baf2RxStatus" === kk) {
            const kk = Fk;
            zk.set(kk), kk.baf2RxOpen && (iF({
              kind: "reactor"
            }), (0, it.q)())
          } else if ("baf2BatStatus" === kk) {
            const kk = Fk;
            Pk.set(kk), kk.baf2BatOpen && (iF({
              kind: "battery"
            }), (0, it.q)())
          } else if ("baf2RxAlarm" === kk) pk.zW(Fk);
          else if ("baf2Bomb" === kk) xk.zW(Fk, fk.getPositionView(ak));
          else if ("baf2Fallout" === kk) nk.zW(Fk);
          else if ("baf2ColBeams" === kk) Ik.onBeams(Fk);
          else if ("baf2ColStatus" === kk) {
            const kk = Fk;
            var Ck, Zk;
            if (Ik.onStatus(kk), kk.baf2ColOpen) Ik.onOpen(null !== (Ck = null === (Zk = fk.LFk(ak)) || void 0 === Zk ? void 0 : Zk.name) && void 0 !== Ck ? Ck : null), iF({
              kind: "collider"
            }), (0, it.q)()
          } else if ("baf2Terminal" === kk) {
            const kk = Fk;
            var Kk;
            if (Mk.apply(kk)) kk.baf2TermReset && (iF({
              kind: "terminal"
            }), (0, it.q)());
            else "terminal" === (null === (Kk = bk.get()) || void 0 === Kk ? void 0 : Kk.kind) && (bk.set(null), (0, it.f)())
          } else if ("baf2Core" === kk) {
            var lk;
            const kk = Fk;
            if (wk(!0 === kk.baf2CoreNuclear), function(kk, Fk) {
                return "core" === (null === kk || void 0 === kk ? void 0 : kk.kind) && Fk.baf2CoreTier > kk.core.message.baf2CoreTier
              }(bk.get(), kk)) return void(0, it.f)();
            if (kk.baf2CoreRefresh && "core" !== (null === (lk = bk.get()) || void 0 === lk ? void 0 : lk.kind)) return;
            iF({
              kind: "core",
              core: vW(kk, vk)
            }), kk.baf2CoreRefresh || (0, it.q)()
          } else if ("baf2WrenchUndo" === kk) {
            const {
              baf2WrenchPos: kk,
              baf2WrenchBlock: Bk
            } = Fk;
            fk.uE(kk[0], kk[1], kk[2], Bk)
          } else if ("baf2Toast" === kk) {
            const kk = Fk;
            hk.heard(performance.now(), kk.baf2ToastMs), Yk.show(kk)
          } else if ("baf2Area" === kk) Lk.arrive(Fk, null !== bk.get());
          else if ("baf2Quest" === kk) {
            const kk = Fk;
            wk(!0 === kk.baf2QuestNuclear), ik.set(kk, function(kk, Fk) {
              var Bk, Rk, tk, ak, Xk;
              const bk = [];
              for (const [, , sk, , , , , , Vk, Jk] of kk.baf2QuestSteps) null !== sk && bk.push(sk), bk.push(...null !== Vk && void 0 !== Vk ? Vk : [], ...null !== Jk && void 0 !== Jk ? Jk : []);
              kk.baf2QuestReward && bk.push(kk.baf2QuestReward);
              const wk = null === (Bk = kk.baf2QuestSide) || void 0 === Bk ? void 0 : Bk[2][2];
              wk && bk.push(wk), bk.push(...null !== (Rk = null === (tk = kk.baf2QuestSide) || void 0 === tk ? void 0 : tk[2][8]) && void 0 !== Rk ? Rk : [], ...null !== (ak = null === (Xk = kk.baf2QuestSide) || void 0 === Xk ? void 0 : Xk[2][9]) && void 0 !== ak ? ak : []);
              for (const [sk] of null !== (dk = kk.baf2QuestAlso) && void 0 !== dk ? dk : []) {
                var dk;
                bk.push(sk)
              }
              return Fk(bk)
            }(kk, vk)), XW(kk.baf2QuestTier)
          } else if ("baf2Route" === kk) ! function(kk, Fk) {
            let {
              baf2RouteCells: Bk,
              baf2RouteInto: Rk
            } = Fk;
            0 !== Bk.length && Rk ? kk.setRouteChevrons({
              cells: Bk.map(((kk, Fk) => {
                const [tk, , ak] = function(kk, Fk, Bk) {
                  const Rk = Bk + 1 < kk.length ? kk[Bk + 1] : Fk;
                  return [Rk[0] - kk[Bk][0], 0, Rk[2] - kk[Bk][2]]
                }(Bk, Rk, Fk);
                return {
                  pos: kk,
                  way: [tk, ak]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : kk.setRouteChevrons(null)
          }(fk, Fk);
          else if ("baf2QuestBook" === kk) ik.setBook(Fk);
          else if ("baf2Stalls" === kk) Ak.set(Fk.baf2StallCells);
          else if (kk === fB.n) yk.onMoves(Fk);
          else if (kk === fB.j) yk.onLines(Fk);
          else if ("baf2Labels" === kk) Nk.zW(Fk);
          else if ("baf2DropMap" === kk) iF({
            kind: "dropMap",
            dropMap: Fk
          }), (0, it.q)();
          else if ("baf2Islands" === kk) {
            var kF, FF;
            const kk = Fk;
            if (mk.syncIslandEdits(kk.baf2IslandsAnswered), !kk.baf2IslandsOpen && "islands" !== (null === (kF = bk.get()) || void 0 === kF ? void 0 : kF.kind)) return;
            if (kk.baf2IslandsOpen) {
              var BF, RF;
              const Fk = Yt.c.get("openEverythingMenuName"),
                Bk = mk.sent() >= yF,
                Rk = "other" !== (vF = {
                  askedAtMs: eF,
                  askSent: Bk,
                  reaskedAtMs: fF,
                  nowMs: Date.now(),
                  panel: null !== (BF = null === (RF = bk.get()) || void 0 === RF ? void 0 : RF.kind) && void 0 !== BF ? BF : null,
                  inGameMenu: Yt.c.get("openInGameMenuName"),
                  everythingMenu: null === Fk ? null : Fk === JB.p.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== kk.baf2IslandsFocusInvite
                }).everythingMenu && (!!vF.focusInvite || "islands" === vF.panel && "clientGame" === vF.inGameMenu || !(vF.nowMs - vF.reaskedAtMs < Gd) && (vF.askSent && vF.nowMs - vF.askedAtMs < Gd ? "core" === vF.panel && "clientGame" === vF.inGameMenu && null === vF.everythingMenu : "shop" === vF.everythingMenu || null === vF.inGameMenu));
              if (Bk && (eF = -1 / 0), fF = -1 / 0, !Rk) return void WF()
            }
            const Bk = (aF = kk.baf2IslandsOpen, sF = "islands" === (null === (FF = bk.get()) || void 0 === FF ? void 0 : FF.kind), JF = mF, AF = Date.now(), aF && !sF && AF - JF < Gd);
            iF({
              kind: "islands",
              islands: kk,
              arrivedAtMs: Date.now(),
              backToCore: Td(bk.get())
            }), Bk && (mF = -1 / 0, fF = Date.now(), mk.send(jk)), kk.baf2IslandsOpen && ("clientGame" !== Yt.c.get("openInGameMenuName") && (0, ot.f)(), (0, it.q)())
          } else if ("baf2CoopTransfer" === kk) {
            var tF;
            const kk = Fk;
            kk.baf2TransferOn ? (iF({
              kind: "transfer",
              transfer: kk,
              arrivedAtMs: Date.now()
            }), (0, it.q)()) : "transfer" === (null === (tF = bk.get()) || void 0 === tF ? void 0 : tF.kind) && (0, it.f)()
          } else "baf2IslandLeft" === kk ? (Lk.dropHeld(), null !== bk.get() && YF(), "inventory" === Yt.c.get("openInGameMenuName") && (0, ot.f)()) : "baf2Arc" === kk ? XF.zW(fk, Fk) : "baf2Blade" === kk ? bF.onBlade(fk, Fk) : "baf2JetFlame" === kk ? wF.zW(fk, Fk) : "baf2GearPower" === kk && dF.zW(Fk);
          var aF, sF, JF, AF, vF
        }
      };
      return OF
    }
  },
  38148: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk) {
      const Rk = new Set,
        tk = new ResizeObserver(Bk),
        ak = () => {
          const Fk = new Set(document.querySelectorAll(kk));
          let ak = !1;
          for (const kk of Rk) Fk.has(kk) || (tk.unobserve(kk), Rk.delete(kk), ak = !0);
          for (const kk of Fk) Rk.has(kk) || (tk.observe(kk), Xk.observe(kk, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Rk.add(kk));
          ak && Bk()
        },
        Xk = new MutationObserver((Fk => {
          Fk.some((kk => "attributes" === kk.type)) && Bk(), Fk.some((Fk => function(kk, Fk, Bk) {
            if ("childList" !== kk.type) return !1;
            for (const Rk of kk.addedNodes)
              if (Rk instanceof Element && (Rk.matches(Fk) || Rk.querySelector(Fk))) return !0;
            for (const Rk of kk.removedNodes)
              if (Rk instanceof Element)
                for (const kk of Bk)
                  if (Rk.contains(kk)) return !0;
            return !1
          }(Fk, kk, Rk))) && ak()
        }));
      Xk.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const bk of Fk) tk.observe(bk);
      return window.addEventListener("resize", Bk), ak(), Bk(), () => {
        tk.disconnect(), Xk.disconnect(), window.removeEventListener("resize", Bk)
      }
    }
    Bk.d(Fk, {
      d: () => Rk
    })
  },
  38136: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk,
      e: () => ak
    });
    const Rk = new WeakMap;

    function tk(kk) {
      let Fk = Rk.get(kk);
      return Fk || (Fk = {
        hidden: kk.hidden,
        x: NaN,
        y: NaN
      }, Rk.set(kk, Fk)), Fk
    }

    function ak(kk, Fk) {
      const Bk = tk(kk);
      Bk.hidden !== Fk && (Bk.hidden = Fk, kk.hidden = Fk)
    }

    function Xk(kk, Fk, Bk) {
      const Rk = tk(kk);
      Rk.x === Fk && Rk.y === Bk || (Rk.x = Fk, Rk.y = Bk, kk.style.translate = `${Fk}vw ${Bk}vh`)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);