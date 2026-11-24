export const id = 243;
export const ids = [243];
export const modules = {
  38494: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(38501);
    const Tk = [0, 0, 0];
    class ik {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tk;
        this.pool = kk, this.origin = Fk, this.count = 0, this.free = []
      }
      take() {
        var kk;
        const Fk = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.count++;
        return Fk >= this.pool.St && this.pool.grow(Math.max(2 * this.pool.St, Fk + 1)), this.hide(Fk), Fk
      }
      release(kk) {
        this.hide(kk), this.free.push(kk)
      }
      write(kk, Fk, Ik, Tk) {
        const {
          records: ik
        } = this.pool, {
          origin: yk
        } = this, lk = kk * Xk.d;
        ik[lk] = Fk - yk[0], ik[lk + 1] = Ik - yk[1], ik[lk + 2] = Tk - yk[2], ik[lk + Xk.e] = 0, this.pool.markDirty(kk)
      }
      hide(kk) {
        this.pool.records[kk * Xk.d + Xk.e] = 1, this.pool.markDirty(kk)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class yk {
      constructor(kk, Fk, Ik) {
        this.api = kk, this.model = Fk, this.initialCapacity = Ik, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(kk) {
        let Fk = this.kinds.get(kk);
        if (void 0 === Fk) {
          const Ik = this.api.createInstancePool({
            ...this.model,
            item: kk
          }, this.initialCapacity);
          null === Ik || void 0 === Ik || Ik.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Fk = Ik && new ik(Ik, this.origin), this.kinds.set(kk, Fk)
        }
        return Fk
      }
      follow(kk) {
        const {
          origin: Fk
        } = this;
        if (Math.abs(kk[0] - Fk[0]) <= 512 && Math.abs(kk[1] - Fk[1]) <= 512 && Math.abs(kk[2] - Fk[2]) <= 512) return !1;
        Fk[0] = Math.floor(kk[0]), Fk[1] = Math.floor(kk[1]), Fk[2] = Math.floor(kk[2]);
        for (const Ik of this.kinds.values()) null === Ik || void 0 === Ik || Ik.pool.setOrigin(Fk[0], Fk[1], Fk[2]);
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
  38509: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      f: () => lk,
      h: () => ak
    });
    const Xk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Tk = [0, 1, 2, 0, 2, 3],
      ik = [4, 5];

    function yk(kk, Fk, Ik, Xk, Tk) {
      for (let yk = 0; yk < 6; yk++) ik.includes(yk) === Tk && qk(kk, Fk, Ik, Xk, yk)
    }

    function lk(kk, Fk, Ik, Xk) {
      for (let Tk = 0; Tk < 6; Tk++) qk(kk, Fk, Ik, Xk, Tk)
    }

    function ak(kk, Fk, Ik, ik, yk) {
      for (let lk = 0; lk < 6; lk++)
        for (const ak of [0, 1]) {
          const [qk, Lk, tk] = [ak + 2, ak + 1, (ak + 3) % 4], Zk = kk.length / 3;
          for (const [Fk, Tk] of [
              [ak, Lk],
              [qk, Lk],
              [qk, tk],
              [ak, tk]
            ])
            for (let ak = 0; ak < 3; ak++) {
              const qk = Xk[3 * (4 * lk + Fk) + ak],
                Lk = Xk[3 * (4 * lk + Tk) + ak];
              kk.push((qk + (Lk - qk) * yk) * ik / 2 + Ik[ak])
            }
          for (const kk of Tk) Fk.push(Zk + kk)
        }
    }

    function qk(kk, Fk, Ik, ik, yk) {
      let [lk, ak, qk] = Ik, [Lk, tk, Zk] = ik;
      const jk = kk.length / 3;
      for (let Tk = 4 * yk; Tk < 4 * yk + 4; Tk++) kk.push(Xk[3 * Tk] * Lk / 2 + lk, Xk[3 * Tk + 1] * tk / 2 + ak, Xk[3 * Tk + 2] * Zk / 2 + qk);
      for (const Xk of Tk) Fk.push(jk + Xk)
    }
  },
  38483: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Kx
    });
    var Xk = Ik(58);
    const Tk = [{
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
      ik = 10;
    let yk = !0;

    function lk() {
      return yk
    }

    function ak(kk) {
      yk = kk
    }
    const qk = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Lk() {
      return yk ? Tk.length : ik
    }

    function tk(kk) {
      var Fk, Ik;
      return null !== (Fk = null === (Ik = Tk[kk - 1]) || void 0 === Ik ? void 0 : Ik.reactorTier) && void 0 !== Fk ? Fk : 0
    }

    function Zk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tk(kk) > 0;
      return Ik && !yk ? "hidden" : kk <= Fk ? "open" : Ik ? Fk < 5 ? "hidden" : Fk < ik ? "teaser" : "locked" : "locked"
    }

    function jk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Xk,
        n: Tk
      } = Hk(kk);
      return {
        key: Fk[Xk],
        params: {
          [Xk]: Ik ? String(Tk) : Tk
        }
      }
    }
    const ek = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function wk(kk, Fk) {
      return tk(kk) > 0 && Fk < ik
    }

    function Hk(kk) {
      const Fk = tk(kk);
      if (Fk > 0) return {
        kind: "atomic",
        n: Fk,
        short: `A${Fk}`
      };
      const Ik = function(kk) {
        return kk >= 6 && kk <= 10 ? kk - 6 + 1 : 0
      }(kk);
      return Ik > 0 ? {
        kind: "stage",
        n: Ik,
        short: `S${Ik}`
      } : {
        kind: "tier",
        n: kk,
        short: String(kk)
      }
    }

    function Jk(kk) {
      return Tk[Math.max(1, Math.min(kk, Tk.length)) - 1]
    }

    function xk(kk, Fk) {
      return kk < Fk ? function(kk) {
        var Fk;
        return null !== (Fk = Tk[kk]) && void 0 !== Fk ? Fk : null
      }(kk) : null
    }
    const Pk = "baf2coresubmit",
      Kk = "baf2corebankpause",
      Qk = "baf2coredeposit",
      sk = "baf2corechargepause";

    function Vk(kk) {
      var Fk;
      return null !== (Fk = kk.baf2CoreOpen) && void 0 !== Fk ? Fk : ik
    }
    const zk = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function Sk(kk) {
      return zk.includes(kk)
    }
    const vk = (kk, Fk) => Fk.map((Fk => [Fk, [kk]])),
      Ek = Object.fromEntries([...vk("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...vk("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...vk("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...vk("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...vk("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...vk("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...vk("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...vk("Parts Bench", ["Focus Lens"]), ...vk("Machine Bench", ["Laser", "Collider"]), ...vk("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...vk("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...vk("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...vk("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...vk("Tool Bench", ["Mob Cage"]), ...vk("Tool Bench", ["Pocket Terminal"]), ...vk("Tool Bench", ["Comet Beacon"]), ...vk("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Ok(kk) {
      var Fk;
      return null !== (Fk = Ek[kk]) && void 0 !== Fk ? Fk : ["Workbench"]
    }

    function nk(kk) {
      return Ok(kk)[0]
    }
    Tk.slice(1).map(((kk, Fk) => `Core Tier ${Fk+2}`));
    var Gk = Ik(9183);
    const pk = ["on", "hud", "off"];

    function uk(kk) {
      return "on" === kk
    }
    var bk = Ik(337);
    const Rk = "Mob Farm",
      Uk = {
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
      Ck = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Nk = {
        1: 20,
        2: 60,
        3: 120
      },
      ck = "baf2farmvoid",
      Wk = "Caged ",
      fk = " Spawner Block";

    function Bk(kk) {
      return `lifeform:${(0,bk.ye)(kk)}`
    }

    function dk(kk) {
      if (!kk) return null;
      if (kk.startsWith(Wk)) {
        const Fk = kk.slice(6);
        return Ck.includes(Fk) ? Fk : null
      }
      if (kk.endsWith(fk)) {
        const Fk = kk.slice(0, -14);
        return void 0 !== Uk[Fk] ? Fk : null
      }
      return null
    }

    function Yk(kk) {
      return !0 === kk.mobFarm
    }

    function Ak(kk, Fk) {
      return Nk[Uk[Fk]] * kk.opMs / 1e3
    }
    const gk = new Map;
    const mk = "baf2islands",
      hk = "baf2islandnew";

    function rk(kk) {
      const Fk = Tk.findIndex((Fk => Fk.unlocks.includes(kk)));
      return Fk < 0 ? 1 : Fk + 1
    }

    function Dk(kk) {
      return Math.floor(kk).toLocaleString("en-US")
    }
    var Mk = Ik(38414);
    const kF = "baf2terminaltake",
      FF = "baf2terminalput",
      IF = ["one", "stack", "fill"];

    function XF(kk, Fk, Ik) {
      return `${kF} ${kk} ${Fk} ${Ik}`
    }

    function TF(kk, Fk, Ik) {
      return `${FF} ${kk} ${Fk} ${Ik}`
    }

    function iF(kk) {
      return `${FF} ${kk}`
    }
    const yF = [
      [`${kF} `, "take"],
      [`${FF} `, "put"]
    ];

    function lF(kk) {
      const Fk = yF.find((Fk => {
        let [Ik] = Fk;
        return kk.startsWith(Ik)
      }));
      if (!Fk) return null;
      const [Ik, Xk] = Fk, [Tk, ik, ...yk] = kk.slice(Ik.length).trim().split(" "), lk = Number(Tk);
      if (!Number.isSafeInteger(lk) || lk <= 0) return null;
      if ("put" === Xk && void 0 === ik) return {
        kind: "putAll",
        seq: lk
      };
      const ak = function(kk) {
        if (IF.includes(kk)) return kk;
        const Fk = Number(kk);
        return /^\d+$/.test(kk) && Number.isSafeInteger(Fk) && Fk > 0 ? Fk : null
      }(null !== ik && void 0 !== ik ? ik : "");
      return null === ak || 0 === yk.length ? null : {
        kind: Xk,
        seq: lk,
        mode: ak,
        item: yk.join(" ")
      }
    }

    function aF(kk, Fk) {
      const Ik = "number" === typeof kk ? kk : "one" === kk ? 1 : "stack" === kk ? 99 : Fk;
      return Math.min(Fk, Ik)
    }

    function qF(kk, Fk) {
      const Ik = kk => "number" === typeof kk ? kk : "one" === kk ? 1 : 99;
      return "fill" === kk || "fill" === Fk ? "fill" : Ik(kk) + Ik(Fk)
    }

    function LF(kk, Fk) {
      const Ik = lF(kk),
        Xk = lF(Fk),
        Tk = Ik && Xk ? function(kk, Fk) {
          return "take" === kk.kind || "take" === Fk.kind ? "take" === kk.kind && "take" === Fk.kind && kk.item === Fk.item ? {
            ...Fk,
            mode: qF(kk.mode, Fk.mode)
          } : null : "putAll" === kk.kind || "putAll" === Fk.kind ? {
            kind: "putAll",
            seq: Fk.seq
          } : kk.item === Fk.item ? {
            ...Fk,
            mode: qF(kk.mode, Fk.mode)
          } : null
        }(Ik, Xk) : null;
      return Tk ? "putAll" === (ik = Tk).kind ? iF(ik.seq) : "put" === ik.kind ? TF(ik.seq, ik.mode, ik.item) : XF(ik.seq, ik.mode, ik.item) : null;
      var ik
    }
    const tF = "baf2rx";

    function ZF(kk, Fk) {
      for (var Ik = arguments.length, Xk = new Array(Ik > 2 ? Ik - 2 : 0), Tk = 2; Tk < Ik; Tk++) Xk[Tk - 2] = arguments[Tk];
      return [tF, kk[0], kk[1], kk[2], Fk, ...Xk].join(" ")
    }
    const jF = 2,
      eF = 4,
      wF = 8,
      HF = 16,
      JF = 32,
      xF = 64,
      PF = 128,
      KF = 256,
      QF = 512,
      sF = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      VF = [{
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
    const zF = "Biomass",
      SF = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function oF(kk) {
      return {
        input: zF,
        inputAmount: 1,
        output: kk,
        outputAmount: 1
      }
    }
    const vF = "baf2synth",
      EF = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      OF = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      nF = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      GF = function(kk, Fk) {
        return {
          input: kk,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: Fk,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      pF = function(kk, Fk) {
        return {
          ...GF(kk, Fk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      uF = OF.map((kk => pF(kk, "Biomass", 2))),
      bF = {
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
          recipes: [GF("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), GF("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), GF("Raw Gold", "Gold Grit", 2), GF("Messy Stone", "Sand"), GF("Gravel", "Sand"), GF("Raw Voltite", "Voltite Dust", 2), GF("Moonstone", "Moonstone Dust", 4), GF("Wheat Seeds", "Fertiliser"), GF("Raw Uranium", "Uranium Grit", 2), pF("Mossy Messy Stone", "Sand"), ...uF],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [GF("Iron Grit", "Iron Bar"), GF("Copper Grit", "Copper Bar"), GF("Gold Grit", "Gold Bar"), GF("Raw Iron", "Iron Bar"), GF("Raw Copper", "Copper Bar"), GF("Raw Gold", "Gold Bar"), GF("Sand", "Glass"), GF("Messy Stone", "Stone"), ...bk.Zc.map((kk => GF(kk, "Charcoal", 1, 4))), GF("Wheat", "Bread", 1, 2), ...OF.map(((kk, Fk) => pF(kk, nF[Fk])))],
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
          recipes: [GF("Iron Bar", "Iron Plate"), GF("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [GF("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [GF("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [GF("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), GF("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), GF("Raw Gold", "Gold Grit", 3), GF("Raw Voltite", "Voltite Dust", 3), GF("Messy Stone", "Sand", 2), GF("Gravel", "Sand", 2), GF("Moonstone", "Moonstone Dust", 6), GF("Raw Uranium", "Uranium Grit", 3), pF("Mossy Messy Stone", "Sand", 2), ...uF],
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
          table: sF
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [GF("Coal", "Diamond", 1, 24), GF("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Mk.h
      },
      RF = {
        Crusher: [GF("Spent Pellet", "Glow Dust"), GF("Wheat Seeds", "Biomass"), GF("Wheat", "Biomass"), GF("Dead Bush", "Biomass"), GF("Dusk Moss", "Biomass"), GF("Rotten Flesh", "Biomass"), GF("Bone", "Biomass", 2)],
        "Shatter Mill": [GF("Spent Pellet", "Glow Dust"), GF("Wheat Seeds", "Biomass"), GF("Wheat", "Biomass"), GF("Dead Bush", "Biomass"), GF("Dusk Moss", "Biomass"), GF("Rotten Flesh", "Biomass"), GF("Bone", "Biomass", 2), ...bk.Zc.map((kk => GF(kk, "Biomass")))],
        Smelter: [GF("Biomass", "Fertiliser", 2)],
        Press: [GF("Coal", "Graphite", 1, 4)]
      },
      UF = "Power Coupler",
      CF = "Advanced Coupler",
      NF = "Nova Coupler",
      cF = [{
        item: UF,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: CF,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: NF,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const WF = new Map;

    function fF(kk) {
      var Fk, Ik;
      return null !== (Fk = null !== (Ik = kk.fuelSlot) && void 0 !== Ik ? Ik : kk.couplerSlot) && void 0 !== Fk ? Fk : null
    }

    function BF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!kk.couplable) throw new Error(`${kk.kind} takes no Power Coupler`);
      let Ik = WF.get(kk);
      Ik || (Ik = [], WF.set(kk, Ik));
      let Xk = Ik[Fk];
      if (!Xk) {
        var Tk;
        const {
          divisor: ik,
          powerPerS: yk
        } = cF[Fk - 1], lk = kk.opMs / ik, ak = void 0 !== kk.fluidMade || void 0 !== kk.cryoMade ? kk.powerPerOp : yk * lk / 1e3;
        Xk = {
          ...kk,
          fuelSlot: null,
          couplerSlot: null !== (Tk = fF(kk)) && void 0 !== Tk ? Tk : void 0,
          opMs: lk,
          powerPerOp: ak,
          coupled: !0
        }, Fk > 1 && (Xk = {
          ...Xk,
          couplerLevel: Fk
        }), Ik[Fk] = Xk
      }
      return Xk
    }
    const dF = new Map;
    const YF = new Map;

    function AF(kk, Fk) {
      if (null === Fk || (Ik = Fk, !SF.includes(Ik))) return kk;
      var Ik;
      let Xk = YF.get(Fk);
      return Xk || (Xk = {
        ...kk,
        recipes: [oF(Fk)]
      }, YF.set(Fk, Xk)), Xk
    }

    function gF(kk) {
      return !0 === kk.synth
    }
    const mF = (kk, Fk, Ik, Xk) => ({
        output: kk,
        outputAmount: Fk,
        tier: Ik,
        inputs: Xk.map((kk => {
          let [Fk, Ik] = kk;
          return {
            item: Fk,
            amount: Ik
          }
        }))
      }),
      hF = Object.fromEntries([mF("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), mF("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), mF("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), mF("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), mF("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), mF("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), mF("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), mF("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), mF("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), mF("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), mF("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), mF("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), mF("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), mF("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), mF("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), mF("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), mF("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), mF("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), mF("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), mF("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), mF("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), mF("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), mF("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), mF("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), mF("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), mF("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), mF("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), mF("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), mF("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), mF("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((kk => [kk.output, kk]))),
      rF = new Map;

    function DF(kk, Fk) {
      let Ik = bF[kk];
      if (Fk.atomic && (Ik = function(kk) {
          const Fk = RF[kk.kind];
          if (!Fk) return kk;
          let Ik = dF.get(kk.kind);
          if (!Ik) {
            const Xk = new Set(Fk.map((kk => kk.input))),
              Tk = kk.recipes.filter((kk => !Xk.has(kk.input)));
            Ik = {
              ...kk,
              recipes: [...Tk, ...Fk]
            }, dF.set(kk.kind, Ik)
          }
          return Ik
        }(Ik)), Ik.synth) return AF(Ik, Fk.taught);
      if (Fk.coupled && Ik.couplable) return BF(Ik, Fk.level);
      const Xk = Ik.inputSlots && null !== Fk.taught ? hF[Fk.taught] : void 0;
      if (!Xk) return Ik;
      const Tk = `${kk}|${Xk.output}`;
      let ik = rF.get(Tk);
      return ik || (ik = {
        ...Ik,
        bench: Xk
      }, rF.set(Tk, ik)), ik
    }
    const MF = ["Diamond", "Moonstone"];

    function kI(kk) {
      return new Set(kk.flatMap((kk => kk.bonus ? [kk.output, kk.bonus.item] : [kk.output])).filter((kk => !MF.includes(kk))))
    }
    const FI = Object.values(bF).flatMap((kk => kk.recipes));
    kI(FI.filter((kk => !0 !== kk.nuclear))), kI([...FI.filter((kk => !0 === kk.nuclear)), ...Object.values(RF).flat()]);

    function II(kk) {
      return null === kk.inputSlot && void 0 === kk.inputSlots && void 0 === kk.powerMade && void 0 === kk.fluidMade && !kk.treeCutter && void 0 === kk.table
    }

    function XI(kk) {
      return !0 === kk.treeCutter
    }
    const TI = ["Voltite Cell"];

    function iI(kk) {
      var Fk, Ik;
      return null !== (Fk = null === (Ik = kk.fuels) || void 0 === Ik ? void 0 : Ik.some((kk => TI.includes(kk)))) && void 0 !== Fk && Fk
    }
    const yI = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(bk.Zc.map((kk => [kk, 8e3]))),
        ...Object.fromEntries(bk.Gd.map((kk => [kk, 2e3]))),
        "Voltite Cell": 12e4
      },
      lI = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      aI = {
        "Uranium Deposit": 4e3
      };

    function qI(kk) {
      var Fk;
      return null !== (Fk = Object.keys(lI).find((Fk => lI[Fk] === kk))) && void 0 !== Fk ? Fk : null
    }

    function LI(kk) {
      return EF.includes(kk)
    }

    function tI(kk) {
      return !0 !== kk.nuclear || lk()
    }
    var ZI = Ik(318);
    var jI = Ik(9264),
      eI = Ik(9194),
      wI = Ik(9267),
      HI = Ik(9260);
    const JI = "Reactor Controller",
      xI = "Reactor Port",
      PI = "Battery Cell",
      KI = ["fuel", "water", "waste"],
      QI = {
        fuel: xI,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      sI = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      VI = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      zI = "Reactor Frame",
      SI = "Reactor Glass",
      oI = {
        edge: [zI],
        cap: [SI, xI],
        wall: [SI, xI],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [JI]
      },
      vI = {
        edge: [PI],
        cap: [PI],
        wall: [PI],
        inside: [PI],
        ctrl: [PI]
      },
      EI = ["edge", "cap", "wall", "inside"],
      OI = ["Reactor Slag"];

    function nI(kk) {
      return OI.includes(GI(kk))
    }

    function GI(kk) {
      const Fk = kk.indexOf("|");
      return Fk < 0 ? kk : kk.slice(0, Fk)
    }

    function pI(kk) {
      return GI(kk) === JI ? "reactor" : null
    }

    function uI(kk) {
      return GI(kk) !== xI ? null : kk.endsWith("|Water") ? "water" : kk.endsWith("|Waste") ? "waste" : "fuel"
    }

    function bI(kk) {
      const Fk = uI(kk);
      return null === Fk ? null : CI(QI[KI[(KI.indexOf(Fk) + 1) % KI.length]], function(kk) {
        return kk.includes(RI)
      }(kk))
    }
    const RI = "|meta|rot1|Formed",
      UI = new Set([zI, SI, xI]);

    function CI(kk, Fk) {
      var Ik;
      const Xk = GI(kk);
      if (!UI.has(Xk)) return kk;
      if (Xk !== xI) return Fk ? Xk + RI : Xk;
      const Tk = null !== (Ik = uI(kk)) && void 0 !== Ik ? Ik : "fuel";
      return Fk ? "fuel" === Tk ? Xk + RI : `${Xk}${RI}|${"water"===Tk?"Water":"Waste"}` : QI[Tk]
    }

    function NI(kk, Fk) {
      const Ik = TX(kk, Fk);
      if ("Air" === Ik) return !1;
      const Xk = "reactor" === kk ? oI : vI;
      return EI.some((kk => Xk[kk].includes(Ik))) || "reactor" === kk && OI.includes(Ik)
    }

    function cI(kk) {
      return VI[kk]
    }

    function WI(kk) {
      var Fk;
      return null !== (Fk = sI[kk]) && void 0 !== Fk ? Fk : sI[1]
    }

    function fI(kk) {
      const [Fk, , Ik] = WI(kk);
      return [Ik, 0, -Fk]
    }

    function BI(kk, Fk, Ik, Xk, Tk, ik) {
      return {
        ctrl: [kk[0], kk[1], kk[2]],
        rot: sI[Fk] ? Fk : 1,
        w: Ik,
        h: Xk,
        d: Tk,
        cu: ik[0],
        cv: ik[1]
      }
    }

    function dI(kk, Fk) {
      return "reactor" === kk ? [Math.floor((Fk - 1) / 2), 0] : [0, 0]
    }

    function YI(kk, Fk, Ik, Xk, Tk) {
      let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk.rot;
      if (Ik === kk.w && Xk === kk.h && Tk === kk.d && ik === kk.rot) return kk;
      const [yk] = dI(Fk, kk.w);
      if (kk.cu === yk && kk.cv <= 1) return BI(kk.ctrl, ik, Ik, Xk, Tk, dI(Fk, Ik));
      const lk = (kk, Fk) => Math.max(1, Math.min(Fk, kk));
      return BI(kk.ctrl, ik, Ik, Xk, Tk, [lk(kk.cu, Ik - 2), 0 === kk.cv ? 0 : lk(kk.cv, Xk - 2)])
    }
    const AI = 11,
      gI = 2 * AI + 1;
    new Uint8Array(gI * gI * gI);

    function mI(kk) {
      return kk.w * kk.h * kk.d
    }

    function hI(kk) {
      const Fk = fI(kk.rot);
      return [kk.ctrl[0] - Fk[0] * kk.cu, kk.ctrl[1] - kk.cv, kk.ctrl[2] - Fk[2] * kk.cu]
    }

    function rI(kk) {
      return kk.cv * kk.d * kk.w + kk.cu
    }

    function DI(kk, Fk) {
      const Ik = Fk % kk.w,
        Xk = Math.floor(Fk / kk.w) % kk.d;
      return [Ik, Math.floor(Fk / (kk.w * kk.d)), Xk]
    }

    function MI(kk, Fk) {
      const [Ik, Xk, Tk] = DI(kk, Fk), ik = hI(kk), yk = WI(kk.rot), lk = fI(kk.rot);
      return [ik[0] + lk[0] * Ik - yk[0] * Tk, ik[1] + Xk, ik[2] + lk[2] * Ik - yk[2] * Tk]
    }

    function kX(kk, Fk) {
      const Ik = hI(kk),
        Xk = WI(kk.rot),
        Tk = fI(kk.rot),
        ik = Fk[0] - Ik[0],
        yk = Fk[2] - Ik[2],
        lk = ik * Tk[0] + yk * Tk[2],
        ak = -(ik * Xk[0] + yk * Xk[2]),
        qk = Fk[1] - Ik[1];
      return lk < 0 || lk >= kk.w || qk < 0 || qk >= kk.h || ak < 0 || ak >= kk.d ? -1 : (qk * kk.d + ak) * kk.w + lk
    }

    function FX(kk, Fk) {
      if (Fk === rI(kk)) return "ctrl";
      const [Ik, Xk, Tk] = DI(kk, Fk), ik = 0 === Xk || Xk === kk.h - 1, yk = Number(0 === Ik || Ik === kk.w - 1) + Number(ik) + Number(0 === Tk || Tk === kk.d - 1);
      return yk >= 2 ? "edge" : 1 === yk ? ik ? "cap" : "wall" : "inside"
    }

    function IX(kk, Fk) {
      const [Ik, Xk, Tk] = DI(kk, Fk);
      return 0 === Ik || Ik === kk.w - 1 || 0 === Xk || Xk === kk.h - 1 || 0 === Tk || Tk === kk.d - 1 ? -1 : ((Xk - 1) * (kk.d - 2) + (Tk - 1)) * (kk.w - 2) + (Ik - 1)
    }

    function XX(kk, Fk) {
      const Ik = kk.w - 2,
        Xk = kk.d - 2,
        Tk = Fk % Ik + 1,
        ik = Math.floor(Fk / Ik) % Xk + 1;
      return ((Math.floor(Fk / (Ik * Xk)) + 1) * kk.d + ik) * kk.w + Tk
    }

    function TX(kk, Fk) {
      const Ik = GI(Fk);
      return "reactor" === kk && Ik === JI ? zI : Ik
    }

    function iX(kk, Fk, Ik) {
      const Xk = "ctrl" === Fk ? GI(Ik) : TX(kk, Ik);
      return ("reactor" === kk ? oI : vI)[Fk].includes(Xk) ? "ok" : "Air" === Xk ? "missing" : NI(kk, Ik) ? "wrong" : "blocked"
    }

    function yX(kk, Fk) {
      return "battery" === kk ? PI : "inside" === Fk ? null : function(kk, Fk) {
        if ("inside" === Fk || "ctrl" === Fk || "battery" === kk) return null;
        return "edge" === Fk ? zI : SI
      }(kk, Fk)
    }
    const lX = {
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
      aX = "Collider",
      qX = "Laser",
      LX = "Star Alloy",
      tX = "Glow Dust",
      ZX = [aX, "_Collider Focus"];

    function jX(kk) {
      return ZX.indexOf(GI(kk))
    }

    function eX(kk) {
      return GI(kk) === qX
    }

    function wX(kk) {
      return [
        [kk[0], kk[1], kk[2]],
        [kk[0], kk[1] + 1, kk[2]]
      ]
    }
    const HX = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function JX(kk, Fk, Ik) {
      const Xk = HX[Fk];
      return [kk[0] + Xk[0] * Ik, kk[1], kk[2] + Xk[2] * Ik]
    }

    function xX(kk, Fk) {
      if (Fk[1] !== kk[1]) return null;
      const Ik = Fk[0] - kk[0],
        Xk = Fk[2] - kk[2];
      if (0 !== Ik === (0 !== Xk)) return null;
      const Tk = Math.abs(Ik + Xk);
      if (Tk > lX.LASER_D) return null;
      return {
        dir: Xk < 0 ? 0 : Ik > 0 ? 1 : Xk > 0 ? 2 : 3,
        BL: Tk
      }
    }

    function PX(kk, Fk, Ik) {
      const Xk = Fk => Math.abs(kk[0] - Fk[0]) <= 1 && Math.abs(kk[1] - Fk[1]) <= 1;
      return Xk(Fk) || Xk(Ik)
    }

    function KX(kk, Fk) {
      return function(kk, Fk, Ik, Xk) {
        return [0, 1, 2, 3].map((Tk => {
          for (let ik = 1; ik <= lX.LASER_D; ik++) {
            const yk = JX(kk, Tk, ik);
            if (PX([yk[0], yk[2]], Fk, Ik) || !Xk(yk)) return !1
          }
          return !0
        }))
      }(wX(kk)[1], Fk.spawnXZ, Fk.coreXZ, (kk => kk[1] >= jI.n && kk[1] < jI.n + jI.r && kk[0] >= Fk.minXZ[0] && kk[0] <= Fk.maxXZ[0] && kk[2] >= Fk.minXZ[1] && kk[2] <= Fk.maxXZ[1]))
    }
    const QX = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function sX(kk) {
      return Math.max(48 + 16 * kk, Jk(kk).machineAllowance)
    }
    const VX = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function zX(kk) {
      const Fk = kk.split("|")[0];
      return VX.includes(Fk) ? "Solar Panel" : Fk === wI.d ? "Fluid Pipe" : jX(Fk) >= 0 ? "Collider" : (Ik = Fk, QX.includes(Ik) ? Fk : null);
      var Ik
    }
    const SX = "buildAFactory2Game:solarPanelDescription";
    const oX = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function vX(kk, Fk) {
      var Ik;
      return null !== (Ik = oX.find((Ik => {
        var Xk;
        return (null !== (Xk = kk.level(Ik)) && void 0 !== Xk ? Xk : 0) >= Fk
      }))) && void 0 !== Ik ? Ik : null
    }
    const EX = "buildAFactory2Game:";
    let OX = null;
    const nX = {
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
      GX = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      pX = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      uX = {
        "Loot Chest": `${EX}lookRuinChestName`
      };

    function bX(kk) {
      return "object" === typeof kk && null !== kk && "translationKey" in kk && "string" === typeof kk.translationKey ? kk.translationKey : null
    }

    function RX(kk, Fk) {
      var Ik;
      return null !== (Ik = bX(kk.displayName(Fk))) && void 0 !== Ik ? Ik : `item:${(0,bk.ye)(Fk)}`
    }

    function UX(kk, Fk) {
      var Ik, Xk, Tk, ik;
      let yk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fk;
      if ("Solar Panel" === zX(Fk)) return {
        name: bX(kk.displayName("Solar Panel")),
        detail: SX,
        detailItem: null
      };
      const ak = Fk.endsWith(" Ore"),
        qk = (OX ??= new Set([...Object.keys((0, eI.f)()), ...Object.keys((0, wI.p)())].map((kk => kk.split("|")[0]))), OX).has(Fk),
        Lk = ak || qk ? null : function(kk) {
          var Fk;
          return kk.endsWith(" Log") && !kk.startsWith("Barkless ") ? "lookLog" : kk.endsWith(" Sapling") ? "lookSapling" : kk.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (Fk = nX[kk]) && void 0 !== Fk ? Fk : null
        }(Fk);
      if (!kk.isBlock(Fk) || !ak && !qk && null === Lk) return null;
      const tk = null !== (Ik = null !== (Xk = uX[Fk]) && void 0 !== Xk ? Xk : bX(null !== (Tk = kk.displayName(yk)) && void 0 !== Tk ? Tk : kk.displayName(Fk))) && void 0 !== Ik ? Ik : `item:${(0,bk.ye)(Fk)}`;
      if (null !== Lk) return {
        name: tk,
        detail: `${EX}${Lk}`,
        detailItem: null
      };
      const Zk = null !== (ik = GX[Fk]) && void 0 !== ik ? ik : lk() ? pX[Fk] : void 0;
      if (qk && void 0 !== Zk) return {
        name: tk,
        detail: `${EX}${Zk}`,
        detailItem: null
      };
      const jk = lI[Fk];
      if (void 0 !== jk) return {
        name: tk,
        detail: `${EX}lookDeposit`,
        detailItem: RX(kk, jk)
      };
      const ek = kk.harvestLevel(Fk);
      if (ak && "rock" === kk.harvestType(Fk) && 0 !== ek) {
        const Fk = vX(kk, null !== ek && void 0 !== ek ? ek : 0);
        if (Fk === oX[0]) return {
          name: tk,
          detail: `${EX}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== Fk) return {
          name: tk,
          detail: `${EX}lookPickaxe`,
          detailItem: RX(kk, Fk)
        }
      }
      return {
        name: tk,
        detail: bX(kk.description(Fk)),
        detailItem: null
      }
    }

    function CX(kk) {
      return kk < jI.n - 24
    }
    const NX = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const cX = "Wrench",
      WX = "Nova Wrench";

    function fX(kk) {
      return kk === cX || kk === WX
    }
    const BX = [...jI.I, "Belt Lift", "Belt Drop"];
    const dX = ["Belt Lift", "Belt Drop"],
      YX = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function AX(kk) {
      return kk.split("|")[0]
    }

    function gX(kk) {
      const Fk = /\|rot(\d)/.exec(kk);
      return Fk ? Number(Fk[1]) : 1
    }

    function mX(kk) {
      return kk % 4 + 1
    }

    function hX(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === Fk && "" === Ik ? kk : `${kk}|meta|rot${Fk}${Ik}`
    }

    function rX(kk) {
      return AX(kk) === jI.z ? (0, jI.N)(kk) ? "gateRight" : "gateLeft" : (0, jI.S)(kk)
    }

    function DX(kk) {
      const Fk = AX(kk),
        Ik = gX(kk);
      if (jI.I.includes(Fk)) return (0, jI.K)(Fk, mX(Ik), null);
      if (Fk === jI.e) return (0, jI.V)(mX(Ik), (0, jI.O)(kk));
      if (Fk === jI.C) {
        const Xk = YX[(0, jI.S)(kk)];
        return null === Xk ? hX(Fk, mX(Ik)) : hX(Fk, Ik, jI.D[Xk])
      }
      return Fk === jI.z ? (0, jI.N)(kk) ? hX(Fk, mX(Ik)) : hX(Fk, Ik, jI.k) : HI.b.includes(Fk) && !dX.includes(Fk) || LI(Fk) ? hX(Fk, mX(Ik)) : null
    }

    function MX(kk) {
      return HI.b.includes(kk) || LI(kk) || null !== zX(kk)
    }

    function kT(kk) {
      return "Solar Panel" === zX(kk)
    }
    const FT = "buildAFactory2Game:",
      IT = {
        leftFront: `${FT}lookSplitDetail_leftFront`,
        frontRight: `${FT}lookSplitDetail_frontRight`,
        gateRight: `${FT}lookGateDetail_gateRight`
      };

    function XT(kk, Fk) {
      var Ik;
      let Xk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Tk = rX(kk),
        ik = null === Tk ? null : `${FT}${Tk.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Tk}`,
        yk = null === Tk ? null : null !== (Ik = IT[Tk]) && void 0 !== Ik ? Ik : null;
      if (fX(Fk) && Xk) {
        const Ik = AX(kk);
        return Fk === WX && lk() && function(kk) {
          return BX.includes(AX(kk))
        }(kk) ? {
          mode: ik,
          detail: yk,
          next: `${FT}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: ik,
          detail: yk,
          next: MX(Ik) && !kT(Ik) ? `${FT}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const ak = fX(Fk) ? DX(kk) : null;
      if (null === ak) return {
        mode: ik,
        detail: yk,
        next: null,
        nextState: null
      };
      const qk = rX(ak);
      return null === qk || gX(ak) !== gX(kk) ? {
        mode: ik,
        detail: yk,
        next: `${FT}lookWrenchTurn`,
        nextState: null
      } : {
        mode: ik,
        detail: yk,
        next: `${FT}lookWrenchNext`,
        nextState: `${FT}lookWrenchState_${qk}`
      }
    }
    const TT = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const iT = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function yT(kk) {
      return [0, 1, 2, 3].map((Fk => 0 !== (kk & 1 << Fk)))
    }

    function lT(kk) {
      const Fk = [];
      for (let Ik = 8; Ik + 2 < kk.length; Ik += 3) Fk.push([kk[Ik], kk[Ik + 1], kk[Ik + 2]]);
      return {
        focus: [kk[0], kk[1], kk[2]],
        lasers: yT(kk[3]),
        open: yT(kk[4]),
        live: yT(kk[5]),
        on: 1 === kk[6],
        state: iT[kk[7]],
        blockers: Fk
      }
    }
    const aT = "Arc Caster",
      qT = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      LT = (Object.values(qT), "Jet Chestplate"),
      tT = "Nova Jet Chestplate",
      ZT = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      jT = Object.values(ZT);

    function eT(kk, Fk, Ik) {
      return Math.min(function(kk) {
        return lk() && tk(kk) >= 5 ? 20 : 10
      }(Ik), Math.floor(function(kk, Fk) {
        return Math.max(0, kk) + (lk() ? Math.max(0, Fk) : 0)
      }(kk, Fk) / 5))
    }

    function wT(kk, Fk, Ik) {
      const Xk = eT(Fk, Ik, kk),
        Tk = tk(kk),
        ik = (Tk >= 3 ? 55 : Tk >= 1 ? 50 : kk >= 8 ? 45 : 30) + Xk,
        yk = Math.max(100 + Xk, 2 * ik);
      return {
        arcDamage: ik,
        arcPierce: kk >= 7 ? 2 : 1,
        arcChain: kk >= 10,
        barrierMax: (Tk >= 4 ? 100 : Tk >= 2 ? 90 : kk >= 9 ? 80 : kk >= 6 ? 60 : 40) + 5 * Xk,
        barrierRegenPerS: Tk >= 5 ? 20 : kk >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Xk,
        novaShieldRegenPerS: 32,
        bladeDamage: yk,
        bladePunch: Math.round(.5 * yk),
        forgeRank: Xk
      }
    }
    const HT = {
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
    var JT = Ik(36867),
      xT = Ik(36607),
      PT = Ik(36600),
      KT = Ik(25),
      QT = Ik(1580),
      sT = Ik(1055),
      VT = Ik.n(sT);

    function zT(kk) {
      return !0 === kk.field
    }
    const ST = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function oT(kk) {
      return ST.has(kk) ? `buildAFactory2Game:itemPlural_${(0,bk.ye)(kk)}` : null
    }
    var vT = Ik(1179),
      ET = Ik(1066),
      OT = Ik(1864),
      nT = Ik(1849),
      GT = Ik(36854),
      pT = Ik(36858),
      uT = Ik(34),
      bT = Ik(36848);
    const RT = "baf2QuestView",
      UT = "baf2PlayerY",
      CT = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class NT {
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
        var Ik, Xk, Tk, ik, yk, lk, ak, qk;
        const Lk = JSON.stringify(kk.baf2QuestName) === JSON.stringify(this.view.name),
          tk = new Set(this.view.rows.filter((kk => kk.done)).map((kk => kk.id))),
          Zk = new Set(this.view.rows.filter((kk => kk.justFinished)).map((kk => kk.id))),
          jk = kk.baf2QuestSide,
          ek = null !== jk && !0 === kk.baf2QuestSideFocus;
        let wk = !1,
          Hk = 0;
        const Jk = kk.baf2QuestSteps.map((kk => {
            const Fk = gT(kk, CT.has(kk[0]) ? kk[0] : "" + Hk++),
              Ik = Lk && Fk.done && !tk.has(Fk.id);
            return Fk.justFinished = Ik || Lk && Fk.done && Zk.has(Fk.id), wk ||= Ik, Fk
          })),
          xk = AT(Jk);
        xk >= 0 && !ek && (Jk[xk].current = !0);
        const Pk = !Lk && null !== kk.baf2QuestName,
          Kk = JSON.stringify(jk && [jk[0], jk[1]]),
          Qk = Kk === JSON.stringify(null !== (Ik = null === (Xk = this.view.side) || void 0 === Xk ? void 0 : Xk.name) && void 0 !== Ik ? Ik : null),
          sk = null !== jk && !this.sidesSeen.has(Kk);
        sk && this.sidesSeen.add(Kk), this.serverTutorial = null !== (Tk = kk.baf2QuestTutorial) && void 0 !== Tk ? Tk : "on", (null !== (ik = kk.baf2QuestTutorialSeq) && void 0 !== ik ? ik : 0) >= this.pickSeq && this.endPick();
        const Vk = !Lk || !Qk || kk.baf2QuestTier !== this.view.tier;
        this.view = {
          name: kk.baf2QuestName,
          rows: Jk,
          reward: kk.baf2QuestReward,
          goal: kk.baf2QuestGoal,
          pulse: this.view.pulse + (wk || Pk ? 1 : 0),
          itemNames: Fk,
          side: jk && {
            name: [jk[0], jk[1]],
            row: {
              ...gT(jk[2], "side"),
              current: ek
            },
            goal: null !== (yk = jk[3]) && void 0 !== yk ? yk : null
          },
          sideCameUpAt: sk ? Date.now() : this.view.sideCameUpAt,
          tier: kk.baf2QuestTier,
          core: kk.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (lk = kk.baf2QuestAlso) && void 0 !== lk ? lk : [],
          depth: null !== (ak = kk.baf2QuestDepth) && void 0 !== ak ? ak : null,
          tutorial: null !== (qk = this.pickedTutorial) && void 0 !== qk ? qk : this.serverTutorial,
          tutorialKnown: !0
        }, this.GL(), wk && this.scheduleClear(), Vk && this.requestBook()
      }
      setTutorial(kk) {
        return this.endPick(), this.pickedTutorial = kk, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.GL()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: kk
        }, this.GL(), this.pickSeq
      }
      onPlayerY(kk) {
        const Fk = Math.floor(kk);
        Fk !== this.playerY && (this.playerY = Fk, this.view.depth && uT.g.GL(UT, Fk))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(kk) {
        this.view = {
          ...this.view,
          chapters: kk.baf2BookChapters
        }, this.GL()
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
          }, this.GL()
        }), 2400)
      }
      GL() {
        uT.g.GL(RT, this.view, !0)
      }
    }

    function cT(kk, Fk) {
      return kk.sideCameUpAt > 0 && Fk - kk.sideCameUpAt < 2400
    }

    function WT(kk) {
      return (null === kk.name || fT(kk)) && null === kk.side && null !== kk.chapters
    }

    function fT(kk) {
      var Fk;
      return "quest_forgeOngoing" === (null === (Fk = kk.name) || void 0 === Fk ? void 0 : Fk[0])
    }

    function BT(kk) {
      return kk.filter((kk => !CT.has(kk.key)))
    }

    function dT(kk) {
      return kk.key.startsWith("stepCraft")
    }

    function YT(kk, Fk) {
      const Ik = new Set,
        Xk = kk.side ? [...kk.rows, kk.side.row] : kk.rows;
      for (const ik of Xk)
        if (!ik.done) {
          !ik.item || Fk && !dT(ik) || Ik.add(ik.item);
          for (const [kk, Fk, Xk] of null !== (Tk = ik.chips) && void 0 !== Tk ? Tk : []) {
            var Tk;
            Fk < Xk && Ik.add(kk)
          }
        } return Ik
    }

    function AT(kk) {
      const Fk = kk.findIndex((kk => !kk.done && !kk.away));
      return Fk >= 0 ? Fk : kk.findIndex((kk => !kk.done))
    }

    function gT(kk, Fk) {
      let [Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk] = kk;
      return {
        id: Fk,
        key: Ik,
        params: Xk,
        item: Tk,
        amount: ik,
        total: yk,
        done: lk,
        chips: null !== ak && void 0 !== ak ? ak : null,
        current: !1,
        away: !0 === qk,
        madeFor: null !== Lk && void 0 !== Lk ? Lk : [],
        also: null !== tk && void 0 !== tk ? tk : [],
        justFinished: !1
      }
    }
    const mT = "baf2QuestItems",
      hT = new Set;
    let rT = new Set,
      DT = null;

    function MT(kk) {
      const Fk = uk(kk.tutorial),
        Ik = Fk ? YT(kk, !0) : hT;
      "inventory" === KT.d.get("openInGameMenuName") ? (DT = null, (0, bT.u)(Ik)) : DT = Ik;
      const Xk = Fk ? YT(kk, !1) : hT;
      (0, pT.c)(Xk, rT) || (rT = Xk, uT.g.GL(mT, rT))
    }

    function ki() {
      return (0, GT.e)(mT, (() => rT))
    }
    var Fi = Ik(34193),
      Ii = Ik(3229);

    function Xi(kk) {
      const Fk = (0, Ii.e)(kk),
        Ik = void 0 === Fk ? void 0 : (0, Fi.displayNameOf)(Fk);
      return "object" === typeof Ik && null !== Ik && "translationKey" in Ik && "string" === typeof Ik.translationKey ? Ik.translationKey : `item:${(0,bk.ye)(kk)}`
    }

    function Ti(kk, Fk) {
      return kk(Xi(Fk))
    }
    const ii = [{
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

    function yi(kk, Fk) {
      return [`Deposit Seed (${kk})`, {
        item: lI[`${kk} Deposit`],
        amount: Fk
      }]
    }
    const li = Object.fromEntries([yi("Coal", 8), yi("Iron", 8), yi("Copper", 8), yi("Gold", 6), yi("Voltite", 4), yi("Uranium", 4)]),
      ai = "Relay Coil",
      qi = new Map;

    function Li(kk) {
      let Fk = qi.get(kk);
      if (!Fk) {
        const Ik = Math.max(1, kk);
        Fk = ii.filter((kk => {
          var Fk;
          return Ik >= kk.fromTier && Ik <= (null !== (Fk = kk.untilTier) && void 0 !== Fk ? Fk : 1 / 0)
        })).map((kk => kk.later && Ik >= kk.later.tier ? {
          ...kk,
          weight: kk.later.weight
        } : kk)), qi.set(kk, Fk)
      }
      return Fk
    }

    function ti(kk) {
      return Li(kk).some((kk => {
        let {
          item: Fk
        } = kk;
        return Fk === ai
      }))
    }

    function Zi(kk) {
      return kk.startsWith("Deposit Seed (")
    }

    function ji(kk, Fk) {
      const Ik = Li(kk);
      return Fk ? Ik.filter((kk => Fk(kk.item))) : Ik
    }

    function ei(kk) {
      return kk.reduce(((kk, Fk) => kk + Fk.weight), 0)
    }

    function wi(kk, Fk) {
      const Ik = ji(kk, Fk),
        Xk = ei(Ik);
      return Ik.map((kk => ({
        find: kk,
        chance: kk.weight / Xk
      })))
    }
    const Hi = 6e4,
      Ji = new Intl.NumberFormat("en-US");

    function xi(kk, Fk) {
      const Ik = kk >= 10 ? Math.round(kk) : Math.round(10 * kk) / 10;
      return 0 === Ik ? "0" : `${Fk}${Ji.format(Ik)}`
    }

    function Pi(kk) {
      return kk < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Ji.format(kk) : kk < 1e6 ? `${kk<1e5?Math.floor(kk/100)/10:Math.floor(kk/1e3)}k` : Math.floor(kk / 1e5) / 10 + "M"
    }

    function Ki(kk) {
      return kk < 0 ? "\u2212" + -kk : String(kk)
    }

    function Qi(kk, Fk) {
      const Ik = Math.max(1, Math.round(Fk));
      if (Ik < 60) return kk("buildAFactory2Game:durationSeconds", {
        seconds: String(Ik)
      });
      const Xk = Math.round(Ik / 60);
      if (Xk < 60) return kk("buildAFactory2Game:durationMinutes", {
        minutes: String(Xk)
      });
      const Tk = String(Math.floor(Xk / 60));
      return Xk % 60 === 0 ? kk("buildAFactory2Game:durationWholeHours", {
        hours: Tk
      }) : kk("buildAFactory2Game:durationHours", {
        hours: Tk,
        minutes: String(Xk % 60)
      })
    }
    var si = Ik(2394);
    const Vi = "(max-height: 420px), (max-width: 650px)";

    function zi() {
      return (0, si.d)(Vi)
    }
    var Si = Ik(1096);

    function oi(kk, Fk) {
      return null !== kk && kk > Fk + 1
    }

    function vi(kk) {
      const Fk = 100 * kk;
      return String(Fk <= 0 || Fk >= 1 ? Math.round(Fk) : Math.max(.1, Math.round(10 * Fk) / 10))
    }

    function Ei(kk) {
      let {
        item: Fk,
        amount: Ik
      } = kk;
      return (0, Si.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Si.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Si.jsx)(OT.d, {
            itemName: Fk,
            amount: 0
          })
        }), Ik > 1 && (0, Si.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", Ik]
        })]
      })
    }

    function Oi(kk) {
      let {
        label: Fk,
        names: Ik
      } = kk;
      const [Tk, ik] = (0, Xk.useState)(!1), yk = Ik.join(" / ");
      return (0, Si.jsxs)(Si.Fragment, {
        children: [(0, Si.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: yk,
          "aria-expanded": Tk,
          onClick: () => {
            ik(!Tk)
          },
          children: Fk
        }), Tk && (0, Si.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: yk
        })]
      })
    }

    function ni(kk) {
      let {
        tier: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)(), {
        key: Xk,
        params: Tk
      } = jk(Fk, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), ik = Ik(`buildAFactory2Game:${Xk}`, Tk);
      return (0, Si.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Si.jsx)(ET.e, {
          name: "lock"
        }), ik]
      })
    }
    const Gi = (0, Xk.createContext)(null);

    function ui() {
      const {
        t: kk
      } = (0, vT.y)(), Fk = (0, Xk.useContext)(Gi);
      return (0, Xk.useEffect)((() => null === Fk || void 0 === Fk ? void 0 : Fk()), [Fk]), (0, Si.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: kk("buildAFactory2Game:recipeForQuest"),
        "aria-label": kk("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function bi(kk) {
      let {
        title: Fk,
        count: Ik,
        children: Tk,
        startOpen: ik = !0
      } = kk;
      const {
        t: yk
      } = (0, vT.y)(), [lk, ak] = (0, Xk.useState)((() => ik && !zi())), [qk, Lk] = (0, Xk.useState)(0), tk = (0, Xk.useCallback)((() => (Lk((kk => kk + 1)), () => {
        Lk((kk => kk - 1))
      })), []);
      return (0, Si.jsxs)("div", {
        className: VT()("Baf2Recipes", {
          Open: lk
        }),
        children: [(0, Si.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            ak(!lk)
          },
          "aria-expanded": lk,
          children: [yk("buildAFactory2Game:recipesToggle", {
            title: Fk,
            count: String(Ik)
          }), (0, Si.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: lk ? "\u25be" : "\u25b8"
          })]
        }), lk && (0, Si.jsxs)(Gi.Provider, {
          value: tk,
          children: [(0, Si.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Tk
          }), qk > 0 && (0, Si.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Si.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), yk("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Ri = "buildAFactory2Game:",
      Ui = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Ci = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      Ni = {
        "Uranium Grit": ik,
        "Raw Uranium": ik
      };

    function ci(kk) {
      var Fk;
      return null !== (Fk = Ni[kk]) && void 0 !== Fk ? Fk : Math.max(rk(kk), Ci[kk] ? rk(Ci[kk]) : 1, function(kk) {
        const Fk = Tk.findIndex((Fk => Fk.cost.some((Fk => Fk.item === kk))));
        return Fk > ik ? Fk : 1
      }(kk))
    }

    function Wi(kk, Fk) {
      return fi(Fk) ? ci(Fk) : function(kk) {
        if (Ui.has(kk)) return 1;
        const Fk = Tk.findIndex((Fk => Fk.newDeposits.some((Fk => {
          let {
            block: Ik
          } = Fk;
          return Ik === kk
        }))));
        return Fk < 0 ? 1 : Fk + 1
      }(kk)
    }

    function fi(kk) {
      return kk in Ni || tk(ci(kk)) > 0
    }

    function Bi(kk, Fk) {
      return DF(kk, {
        coupled: !1,
        taught: null,
        atomic: lk() && Fk >= 11
      }).recipes
    }

    function di(kk, Fk) {
      const Ik = Zk(kk, Fk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tk(kk) > 0);
      return "open" === Ik || "locked" === Ik
    }

    function Yi(kk, Fk) {
      return kk.map(((kk, Ik) => ({
        value: kk,
        idx: Ik,
        tier: Fk(kk)
      }))).sort(((kk, Fk) => kk.tier - Fk.tier || kk.idx - Fk.idx)).map((kk => {
        let {
          value: Fk
        } = kk;
        return Fk
      }))
    }

    function Ai(kk, Fk, Ik) {
      const Xk = Zk(kk, Fk);
      if ("hidden" === Xk || "open" === Xk) return null;
      if ("teaser" === Xk) return {
        tag: {
          translationKey: `${Ri}${Ik?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Ri}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Tk = jk(kk, {
          tier: Ik ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        ik = jk(kk, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Ri}${Tk.key}`,
          params: Tk.params
        },
        reason: {
          translationKey: `${Ri}${ik.key}`,
          params: ik.params
        }
      }
    }

    function gi(kk) {
      return !Zi(kk)
    }

    function mi(kk) {
      let {
        seconds: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)();
      return (0, Si.jsx)(bi, {
        title: Ik("buildAFactory2Game:recipesCuts", {
          seconds: Fk
        }),
        count: 1,
        children: (0, Si.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Si.jsx)(Ei, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Si.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Si.jsx)(Ei, {
            item: "Maple Log",
            amount: 1
          }), (0, Si.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ik("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function ri(kk) {
      let {
        fertilised: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)();
      return (0, Si.jsxs)(bi, {
        title: Ik("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Si.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Si.jsx)(Ei, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Si.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Si.jsx)(Ei, {
            item: "Wheat",
            amount: 1
          }), (0, Si.jsx)(Ei, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Si.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ik("buildAFactory2Game:recipeField")
          })]
        }), (0, Si.jsxs)("li", {
          className: VT()("Baf2Recipe", {
            InUse: Fk
          }),
          children: [(0, Si.jsx)(Ei, {
            item: "Fertiliser",
            amount: 1
          }), (0, Si.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ik("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function Di(kk) {
      let {
        tier: Fk,
        seconds: Ik
      } = kk;
      const {
        t: Xk
      } = (0, vT.y)(), Tk = function(kk) {
        return kk >= 5 ? VF : sF
      }(Fk);
      return (0, Si.jsx)(bi, {
        title: Xk("buildAFactory2Game:recipesBringsUp", {
          seconds: Ik
        }),
        count: Tk.length,
        children: Tk.map((kk => {
          let {
            item: Fk,
            chance: Ik
          } = kk;
          return (0, Si.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Si.jsx)(Ei, {
              item: Fk,
              amount: 1
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ti(Xk, Fk)
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Xk("buildAFactory2Game:recipeChance", {
                percent: vi(Ik)
              })
            })]
          }, Fk)
        }))
      })
    }

    function Mi(kk) {
      let {
        tier: Fk,
        seconds: Ik,
        noSeeds: Xk
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)(), ik = ki(), yk = wi(Fk, Xk ? gi : void 0), lk = Xk && wi(Fk).length > yk.length, ak = ti(Fk);
      return (0, Si.jsxs)(bi, {
        title: Tk("buildAFactory2Game:recipesRecycles", {
          seconds: Ik
        }),
        count: yk.length,
        children: [yk.map((kk => {
          let {
            find: Fk,
            chance: Ik
          } = kk;
          return (0, Si.jsxs)("li", {
            className: "Baf2Recipe",
            children: [ik.has(Fk.item) && (0, Si.jsx)(ui, {}), (0, Si.jsx)(Ei, {
              item: Fk.item,
              amount: Fk.amount
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ti(Tk, Fk.item)
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Tk("buildAFactory2Game:recipeChance", {
                percent: vi(Ik)
              })
            })]
          }, Fk.item)
        })), lk && (0, Si.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Si.jsx)("span", {
            className: "Baf2RecipeName",
            children: Tk("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), ak && (0, Si.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Si.jsx)("span", {
            className: "Baf2RecipeName",
            children: Tk("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function ky(kk) {
      let {
        tier: Fk,
        seconds: Ik
      } = kk;
      const {
        t: Xk
      } = (0, vT.y)(), Tk = Object.entries(li).filter((kk => {
        let [, {
          item: Ik
        }] = kk;
        return di(ci(Ik), Fk, fi(Ik))
      }));
      return (0, Si.jsx)(bi, {
        title: Xk("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: Ik
        }),
        count: Tk.length,
        children: Tk.map((kk => {
          let [Fk, {
            item: Ik,
            amount: Tk
          }] = kk;
          return (0, Si.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Si.jsx)(Ei, {
              item: Fk,
              amount: 1
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Si.jsx)(Ei, {
              item: Ik,
              amount: Tk
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ti(Xk, Ik)
            })]
          }, Fk)
        }))
      })
    }

    function Fy(kk) {
      let {
        tier: Fk,
        seconds: Ik
      } = kk;
      const {
        t: Xk
      } = (0, vT.y)(), Tk = ki(), ik = Yi(Object.entries(lI).filter((kk => {
        let [Ik, Xk] = kk;
        return di(Wi(Ik, Xk), Fk, fi(Xk))
      })), (kk => {
        let [Fk, Ik] = kk;
        return Wi(Fk, Ik)
      }));
      return (0, Si.jsx)(bi, {
        title: Xk("buildAFactory2Game:recipesDigs", {
          seconds: Ik
        }),
        count: ik.length,
        children: ik.map((kk => {
          let [Ik, ik] = kk;
          const yk = Wi(Ik, ik),
            lk = yk > Fk ? yk : null,
            ak = aI[Ik],
            qk = null === lk && Tk.has(ik);
          return (0, Si.jsxs)("li", {
            className: VT()("Baf2Recipe", {
              Locked: null !== lk,
              Far: oi(lk, Fk)
            }),
            children: [qk && (0, Si.jsx)(ui, {}), (0, Si.jsx)(Ei, {
              item: Ik,
              amount: 1
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Si.jsx)(Ei, {
              item: ik,
              amount: 1
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ti(Xk, ik)
            }), void 0 !== ak && (0, Si.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Xk("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / ak)
              })
            }), null !== lk && (0, Si.jsx)(ni, {
              tier: lk
            })]
          }, Ik)
        }))
      })
    }

    function Iy(kk) {
      var Fk;
      let {
        def: Ik,
        seconds: Xk
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)();
      return (0, Si.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Si.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (Fk = Ik.fuels) && void 0 !== Fk ? Fk : []).map((kk => (0, Si.jsx)(Ei, {
            item: kk,
            amount: 1
          }, kk))), (0, Si.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Si.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Si.jsx)(ET.e, {
              name: "bolt"
            }), Tk("buildAFactory2Game:recipePower", {
              power: Dk(Ik.powerMade),
              seconds: Xk
            })]
          })]
        })
      })
    }

    function Xy(kk) {
      let {
        def: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)();
      return (0, Si.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Si.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Si.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Si.jsx)(ET.e, {
              name: "bolt"
            }), Ik("buildAFactory2Game:recipeMixer", {
              cryo: xi((0, Mk.O)(Fk, Fk.cryoMade), "")
            })]
          })
        })
      })
    }

    function Ty(kk) {
      let {
        def: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)();
      return (0, Si.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Si.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Si.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Si.jsx)(ET.e, {
              name: "bolt"
            }), Ik("buildAFactory2Game:recipeCondenser", {
              power: xi((0, Mk.O)(Fk, Fk.powerPerOp), ""),
              water: xi((0, Mk.O)(Fk, Fk.fluidMade), "")
            })]
          })
        })
      })
    }

    function iy(kk) {
      let {
        kind: Fk,
        def: Ik,
        input: Xk,
        tier: Tk,
        noSeeds: ik = !1
      } = kk;
      const yk = String(Ik.opMs / 1e3);
      return XI(Ik) ? (0, Si.jsx)(mi, {
        seconds: yk
      }) : Ik.field ? (0, Si.jsx)(ri, {
        fertilised: null !== Xk
      }) : Ik.table ? (0, Si.jsx)(Di, {
        tier: Tk,
        seconds: yk
      }) : Ik.recycles ? (0, Si.jsxs)(Si.Fragment, {
        children: [(0, Si.jsx)(Mi, {
          tier: Tk,
          seconds: yk,
          noSeeds: ik
        }), (0, Si.jsx)(ky, {
          tier: Tk,
          seconds: yk
        })]
      }) : II(Ik) ? (0, Si.jsx)(Fy, {
        tier: Tk,
        seconds: yk
      }) : void 0 !== Ik.fluidMade ? (0, Si.jsx)(Ty, {
        def: Ik
      }) : void 0 !== Ik.cryoMade ? (0, Si.jsx)(Xy, {
        def: Ik
      }) : void 0 !== Ik.powerMade ? (0, Si.jsx)(Iy, {
        def: Ik,
        seconds: yk
      }) : (0, Si.jsx)(yy, {
        kind: Fk,
        input: Xk,
        tier: Tk,
        seconds: yk
      })
    }

    function yy(kk) {
      let {
        kind: Fk,
        input: Ik,
        tier: Xk,
        seconds: Tk
      } = kk;
      const {
        t: ik
      } = (0, vT.y)(), yk = ki(), lk = Yi(function(kk) {
        const Fk = new Map;
        for (const Tk of kk) {
          var Ik, Xk;
          const kk = [Tk.output, Tk.outputAmount, Tk.inputAmount, null === (Ik = Tk.bonus) || void 0 === Ik ? void 0 : Ik.item, null === (Xk = Tk.bonus) || void 0 === Xk ? void 0 : Xk.chance].join("|"),
            ik = Fk.get(kk);
          ik ? ik.inputs.push(Tk.input) : Fk.set(kk, {
            inputs: [Tk.input],
            inputAmount: Tk.inputAmount,
            output: Tk.output,
            outputAmount: Tk.outputAmount,
            bonus: Tk.bonus
          })
        }
        return [...Fk.values()]
      }(Bi(Fk, Xk).filter(tI)), (kk => ci(kk.output))).filter((kk => di(ci(kk.output), Xk, fi(kk.output))));
      return (0, Si.jsx)(bi, {
        title: ik("buildAFactory2Game:recipesEach", {
          seconds: Tk
        }),
        count: lk.length,
        children: lk.map((kk => {
          const Fk = null !== Ik && kk.inputs.includes(Ik),
            Tk = kk.inputs.length > 3 ? [Fk ? Ik : kk.inputs[0]] : kk.inputs,
            lk = ci(kk.output) > Xk ? ci(kk.output) : null,
            ak = null === lk && yk.has(kk.output);
          return (0, Si.jsxs)("li", {
            className: VT()("Baf2Recipe", {
              InUse: Fk,
              Locked: null !== lk,
              Far: oi(lk, Xk)
            }),
            children: [ak && (0, Si.jsx)(ui, {}), Tk.map(((Fk, Ik) => (0, Si.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [Ik > 0 && (0, Si.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Si.jsx)(Ei, {
                item: Fk,
                amount: kk.inputAmount
              })]
            }, Fk))), Tk.length < kk.inputs.length && (0, Si.jsx)(Oi, {
              label: ik("buildAFactory2Game:recipeMore", {
                count: String(kk.inputs.length - Tk.length)
              }),
              names: kk.inputs.filter((kk => !Tk.includes(kk))).map((kk => Ti(ik, kk)))
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Si.jsx)(Ei, {
              item: kk.output,
              amount: kk.outputAmount
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ti(ik, kk.output)
            }), kk.bonus && (0, Si.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [ik("buildAFactory2Game:recipeBonus", {
                percent: vi(kk.bonus.chance)
              }), (0, Si.jsx)(Ei, {
                item: kk.bonus.item,
                amount: 1
              })]
            }), null !== lk && (0, Si.jsx)(ni, {
              tier: lk
            })]
          }, `${kk.output}|${kk.inputs[0]}`)
        }))
      })
    }

    function ly(kk) {
      let {
        taught: Fk,
        tier: Ik
      } = kk;
      const {
        t: Xk
      } = (0, vT.y)(), Tk = ki(), ik = Yi(Object.values(hF), (kk => kk.tier)).filter((kk => di(kk.tier, Ik)));
      return (0, Si.jsx)(bi, {
        title: Xk("buildAFactory2Game:benchCanMake"),
        count: ik.length,
        startOpen: !1,
        children: ik.map((kk => {
          const ik = kk.tier > Ik,
            yk = !ik && Tk.has(kk.output);
          return (0, Si.jsxs)("li", {
            className: VT()("Baf2Recipe", {
              InUse: kk.output === Fk,
              Locked: ik,
              Far: oi(ik ? kk.tier : null, Ik)
            }),
            children: [yk && (0, Si.jsx)(ui, {}), (0, Si.jsx)(Ei, {
              item: kk.output,
              amount: kk.outputAmount
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ti(Xk, kk.output)
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), kk.inputs.map((kk => (0, Si.jsx)(Ei, {
              item: kk.item,
              amount: kk.amount
            }, kk.item))), ik && (0, Si.jsx)(ni, {
              tier: kk.tier
            })]
          }, kk.output)
        }))
      })
    }
    var ay, qy, Ly, ty, Zy;
    const jy = bF.Generator,
      ey = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      wy = 1e3 * (null !== (ay = jy.powerMade) && void 0 !== ay ? ay : 0) / jy.opMs,
      Hy = Math.min(...(null !== (qy = jy.fuels) && void 0 !== qy ? qy : []).map((kk => yI[kk]))) / 1e3,
      Jy = bF["Volt Engine"],
      xy = 1e3 * (null !== (Ly = Jy.powerMade) && void 0 !== Ly ? Ly : 0) / Jy.opMs,
      Py = yI[null !== (ty = null === (Zy = Jy.fuels) || void 0 === Zy ? void 0 : Zy[0]) && void 0 !== ty ? ty : ""] / 1e3;

    function Ky(kk) {
      let {
        item: Fk,
        label: Ik,
        value: Xk,
        note: Tk,
        dim: ik
      } = kk;
      return (0, Si.jsxs)("li", {
        className: VT()("Baf2PowerRow", {
          Dim: ik
        }),
        children: [(0, Si.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Si.jsx)(OT.d, {
            itemName: Fk,
            amount: 0
          })
        }), (0, Si.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Si.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: Ik
          }), Tk && (0, Si.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Tk
          })]
        }), (0, Si.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Xk
        })]
      })
    }

    function Qy(kk, Fk, Ik, Xk) {
      var Tk;
      const ik = void 0 === Xk ? bF[kk] : function(kk, Fk) {
          if (null === Fk) return kk;
          let Ik = gk.get(Fk);
          return Ik || (Ik = {
            ...kk,
            powerPerOp: Ak(kk, Fk),
            farmMob: Fk
          }, gk.set(Fk, Ik)), Ik
        }(bF[kk], Xk),
        yk = Fk && ik.couplable ? BF(ik, Ik) : ik;
      return 1e3 * (null !== (Tk = yk.powerPerOp) && void 0 !== Tk ? Tk : 0) / yk.opMs
    }

    function sy(kk) {
      var Fk, Ik, Xk, Tk, ik, yk, lk, ak;
      let {
        message: qk
      } = kk;
      const {
        t: Lk
      } = (0, vT.y)(), tk = (kk, Fk) => Lk("buildAFactory2Game:powerPerSecond", {
        rate: xi(kk, Fk)
      }), [Zk, jk] = qk.baf2PowerGenerators, ek = qk.baf2PowerGeneratorFuel, wk = qk.baf2PowerSunPanels, Hk = null !== (Fk = qk.baf2PowerSunShare) && void 0 !== Fk ? Fk : 1, Jk = qk.baf2PowerVaults, xk = qk.baf2PowerUsers, [Pk, Kk] = null !== (Ik = qk.baf2PowerEngines) && void 0 !== Ik ? Ik : [0, 0], Qk = null !== (Xk = qk.baf2PowerEngineCells) && void 0 !== Xk ? Xk : 0, sk = null !== (Tk = qk.baf2PowerPads) && void 0 !== Tk ? Tk : 0, Vk = null !== (ik = qk.baf2PowerCharge) && void 0 !== ik ? ik : 0, [zk, Sk] = null !== (yk = qk.baf2PowerReactors) && void 0 !== yk ? yk : [0, 0], [vk, Ek] = null !== (lk = qk.baf2PowerBatteries) && void 0 !== lk ? lk : [0, 0];
      let Ok = Lk("buildAFactory2Game:powerEngineCells", {
        amount: String(Qk)
      });
      Qk > 0 && Kk > 0 && (Ok = Lk("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Qk),
        time: Qi(Lk, Qk * Py / Kk)
      }));
      let nk = Lk("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(ek)
      });
      ek > 0 && jk > 0 && (nk = Lk("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(ek),
        time: Qi(Lk, ek * Hy / jk)
      }));
      const Gk = Zk + Pk + wk + zk;
      return (0, Si.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Si.jsxs)("section", {
          children: [(0, Si.jsxs)("h3", {
            children: [Lk("buildAFactory2Game:powerMaking"), (0, Si.jsx)("span", {
              children: tk(qk.baf2PowerMadePerS, "+")
            })]
          }), (0, Si.jsxs)("ul", {
            children: [0 === Gk && (0, Si.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Lk("buildAFactory2Game:powerNoMakers")
            }), Zk > 0 && (0, Si.jsx)(Ky, {
              item: "Generator",
              label: `${Ti(Lk,"Generator")} \xd7${Zk}`,
              note: `${Lk("buildAFactory2Game:powerRunning",{amount:String(jk)})} \xb7 ${nk}`,
              value: tk(jk * wy, "+"),
              dim: 0 === jk
            }), Pk > 0 && (0, Si.jsx)(Ky, {
              item: "Volt Engine",
              label: `${Ti(Lk,"Volt Engine")} \xd7${Pk}`,
              note: `${Lk("buildAFactory2Game:powerRunning",{amount:String(Kk)})} \xb7 ${Ok}`,
              value: tk(Kk * xy, "+"),
              dim: 0 === Kk
            }), wk > 0 && (0, Si.jsx)(Ky, {
              item: "Solar Panel",
              label: `${Ti(Lk,"Solar Panel")} \xd7${wk}`,
              note: Lk(Hk < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: tk(4 * wk * Hk, "+")
            }), zk > 0 && (0, Si.jsx)(Ky, {
              item: "Reactor Frame",
              label: `${Lk("buildAFactory2Game:powerReactors")} \xd7${zk}`,
              note: Lk("buildAFactory2Game:powerRunning", {
                amount: String(Sk)
              }),
              value: tk(null !== (ak = qk.baf2PowerReactorPerS) && void 0 !== ak ? ak : 0, "+"),
              dim: 0 === Sk
            })]
          })]
        }), (0, Si.jsxs)("section", {
          children: [(0, Si.jsxs)("h3", {
            children: [Lk("buildAFactory2Game:powerStorage"), (0, Si.jsx)("span", {
              children: Dk(qk.baf2PowerCap)
            })]
          }), (Jk > 0 || vk > 0) && (0, Si.jsxs)("ul", {
            children: [Jk > 0 && (0, Si.jsx)(Ky, {
              item: "Charge Vault",
              label: `${Ti(Lk,"Charge Vault")} \xd7${Jk}`,
              value: `+${Dk(8e3*Jk)}`
            }), vk > 0 && (0, Si.jsx)(Ky, {
              item: "Battery Cell",
              label: `${Lk("buildAFactory2Game:powerBatteries")} \xd7${vk}`,
              value: `+${Dk(Ek)}`
            })]
          })]
        }), (0, Si.jsxs)("section", {
          children: [(0, Si.jsxs)("h3", {
            children: [Lk("buildAFactory2Game:powerUsing"), (0, Si.jsx)("span", {
              children: tk(qk.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Si.jsxs)("ul", {
            children: [0 === xk.length && 0 === sk && 0 === Vk && (0, Si.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Lk("buildAFactory2Game:powerNoUsers")
            }), xk.map((kk => {
              let [Fk, Ik, Xk, Tk, ik = 1, yk] = kk, lk = Ik ? Lk(ey[ik - 1], {
                name: Ti(Lk, Fk)
              }) : Ti(Lk, Fk);
              return void 0 !== yk && (lk = Lk("buildAFactory2Game:powerFarmName", {
                name: lk,
                mob: Lk(Bk(yk))
              })), (0, Si.jsx)(Ky, {
                item: Fk,
                label: `${lk} \xd7${Xk}`,
                note: Lk("buildAFactory2Game:powerRunning", {
                  amount: String(Tk)
                }),
                value: Tk > 0 ? tk(Tk * Qy(Fk, Ik, ik, yk), "\u2212") : Lk("buildAFactory2Game:powerIdle"),
                dim: 0 === Tk
              }, `${Fk}|${Ik}|${ik}|${yk}`)
            })), sk > 0 && (0, Si.jsx)(Ky, {
              item: "Charging Pad",
              label: `${Ti(Lk,"Charging Pad")} \xd7${sk}`,
              value: Lk("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Vk > 0 && (0, Si.jsx)(Ky, {
              item: "Homestead Core",
              label: Lk("buildAFactory2Game:powerCharge"),
              value: tk(Vk, "\u2212")
            }), qk.baf2PowerStarved > 0 && (0, Si.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Si.jsx)(ET.e, {
                name: "triangle-exclamation"
              }), Lk("buildAFactory2Game:powerStarved", {
                amount: String(qk.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Vy = Ik(4516),
      zy = Ik(1406);
    class Sy {
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
    class oy extends Sy {}

    function vy(kk, Fk) {
      const Ik = () => {
          const Ik = kk.get();
          if (!Ik || !Fk) return Ik;
          const [Xk, Tk, ik] = Ik.baf2PowerAt;
          return Xk === Fk[0] && Tk === Fk[1] && ik === Fk[2] ? Ik : null
        },
        [Tk, ik] = (0, Xk.useState)(Ik);
      return (0, Xk.useEffect)((() => (ik(Ik()), kk.subscribe((() => {
        ik(Ik())
      })))), [kk, ...null !== Fk && void 0 !== Fk ? Fk : []]), Tk
    }

    function Ey(kk) {
      return {
        stored: kk.baf2PowerStored,
        cap: kk.baf2PowerCap,
        madePerS: kk.baf2PowerMadePerS,
        usedPerS: kk.baf2PowerUsedPerS
      }
    }

    function Oy(kk) {
      let {
        stored: Fk,
        cap: Ik
      } = kk;
      return (0, Si.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Si.jsx)("div", {
          style: {
            width: `${Math.min(100,100*Fk/Math.max(1,Ik))}%`
          }
        })
      })
    }

    function ny(kk) {
      let {
        figures: Fk,
        labelled: Ik = !1
      } = kk;
      const {
        t: Xk
      } = (0, vT.y)(), Tk = Fk.madePerS - Fk.usedPerS, {
        text: ik,
        draining: yk
      } = function(kk, Fk) {
        let {
          stored: Ik,
          cap: Xk,
          madePerS: Tk,
          usedPerS: ik
        } = Fk;
        const yk = Tk - ik;
        return Ik >= Xk ? {
          text: kk("buildAFactory2Game:powerFull"),
          draining: !1
        } : yk > .05 ? {
          text: kk("buildAFactory2Game:powerFullIn", {
            time: Qi(kk, (Xk - Ik) / yk)
          }),
          draining: !1
        } : yk < -.05 ? {
          text: kk("buildAFactory2Game:powerEmptyIn", {
            time: Qi(kk, Ik / -yk)
          }),
          draining: !0
        } : {
          text: kk("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Xk, Fk);
      return (0, Si.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Si.jsx)(Oy, {
          stored: Fk.stored,
          cap: Fk.cap
        }), (0, Si.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Si.jsx)("span", {
            children: Xk(Ik ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: Dk(Fk.stored),
              cap: Dk(Fk.cap)
            })
          }), (0, Si.jsxs)("span", {
            className: VT()("Baf2PowerNet", {
              Draining: yk
            }),
            children: [Xk("buildAFactory2Game:powerPerSecond", {
              rate: xi(Math.abs(Tk), Tk < 0 ? "\u2212" : "+")
            }), " \xb7 ", ik]
          })]
        })]
      })
    }

    function Gy(kk) {
      let {
        stored: Fk,
        cap: Ik,
        rates: Xk
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)();
      return Xk ? (0, Si.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Si.jsx)(ny, {
          figures: {
            stored: Fk,
            cap: Ik,
            madePerS: Xk[0],
            usedPerS: Xk[1]
          },
          labelled: !0
        })
      }) : (0, Si.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Si.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Si.jsx)(Oy, {
            stored: Fk,
            cap: Ik
          }), (0, Si.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Si.jsx)("span", {
              children: Tk("buildAFactory2Game:powerStoredLabelled", {
                stored: Dk(Fk),
                cap: Dk(Ik)
              })
            })
          })]
        })
      })
    }

    function py(kk) {
      let {
        store: Fk,
        close: Ik
      } = kk;
      const {
        t: Xk
      } = (0, vT.y)(), Tk = vy(Fk);
      return (0, Si.jsx)(Vy.c, {
        close: Ik,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Si.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsxs)("div", {
              children: [(0, Si.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Xk("buildAFactory2Game:powerTitle")
              }), (0, Si.jsx)("p", {
                children: Xk("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Si.jsx)(zy.k, {
              onClick: Ik
            })]
          }), Tk && (0, Si.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Si.jsx)(ny, {
              figures: Ey(Tk)
            }), (0, Si.jsx)(sy, {
              message: Tk
            })]
          })]
        })
      })
    }

    function uy(kk) {
      var Fk;
      let {
        kind: Ik,
        def: Tk,
        EX: ik,
        power: yk,
        stored: lk,
        cap: ak
      } = kk;
      const {
        t: qk
      } = (0, vT.y)(), Lk = vy(yk, ik), [tk, Zk] = (0, Xk.useState)(!1);
      return (0, Si.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Si.jsx)(iy, {
          kind: Ik,
          def: Tk,
          input: null,
          tier: null !== (Fk = null === Lk || void 0 === Lk ? void 0 : Lk.baf2PowerTier) && void 0 !== Fk ? Fk : 1
        }), (0, Si.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: qk("buildAFactory2Game:powerTitle")
        }), Lk && (0, Si.jsx)(ny, {
          figures: Ey(Lk)
        }), !Lk && (0, Si.jsx)(Gy, {
          stored: lk,
          cap: ak,
          rates: null
        }), Lk && (0, Si.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Zk(!tk)
          },
          "aria-expanded": tk,
          children: qk(tk ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Lk && tk && (0, Si.jsx)(sy, {
          message: Lk
        })]
      })
    }
    const by = 2500,
      Ry = 17500,
      Uy = `${Qk} `;
    const Cy = ["plan", "throttle"];

    function Ny(kk) {
      if (kk.startsWith(`${vF} `)) return kk.slice(0, kk.lastIndexOf(" "));
      const Fk = kk.split(" ");
      return Fk[0] === tF && Cy.includes(Fk[4]) ? Fk.slice(0, 5).join(" ") : null
    }
    class cy {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = kk, this.now = Fk, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.PTk = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = Fk()
      }
      enqueue(kk) {
        this.queue(kk, this.nextTicket());
        const Fk = this.PTk + this.pending.length;
        return this.flush(), Fk
      }
      track(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ik = this.nextTicket();
        if (!Fk.urgent) return this.queue(kk, Ik), this.flush(), Ik;
        const {
          supersedes: Xk
        } = Fk;
        for (let ik = this.pending.length - 1; ik >= this.urgent; ik--) {
          const Fk = this.pending[ik];
          (Fk.command === kk || null !== Xk && void 0 !== Xk && Xk(Fk.command)) && (this.pending.splice(ik, 1), this.markLeft(Fk.tickets))
        }
        const Tk = this.pending.findIndex((Fk => {
          let {
            command: Ik
          } = Fk;
          return Ik === kk
        }));
        return -1 !== Tk ? this.pending[Tk].tickets.push(Ik) : (this.pending.splice(this.urgent, 0, {
          command: kk,
          tickets: [Ik]
        }), this.urgent += 1), this.flush(), Ik
      }
      leftAt(kk) {
        const Fk = this.leftTimes.get(kk);
        return void 0 !== Fk ? Fk : this.pending.some((Fk => {
          let {
            tickets: Ik
          } = Fk;
          return Ik.includes(kk)
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
        return this.PTk
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
        for (const Ik of kk) this.leftTimes.set(Ik, Fk);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(kk, Fk) {
        const Ik = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === Ik || void 0 === Ik ? void 0 : Ik.command) === kk) return void(! function(kk) {
          return kk === sk || kk.startsWith(`${Kk} `) || kk.startsWith(`${ck} `)
        }(kk) ? Ik.tickets.push(Fk) : (this.pending.pop(), this.markLeft([...Ik.tickets, Fk])));
        const Xk = void 0 === Ik ? null : LF(Ik.command, kk);
        if (null !== Xk && void 0 !== Ik) return Ik.command = Xk, void Ik.tickets.push(Fk);
        const Tk = Ny(kk);
        if (null !== Tk && void 0 !== Ik && Ny(Ik.command) === Tk) return Ik.command = kk, void Ik.tickets.push(Fk);
        if (null !== Ik && void 0 !== Ik && Ik.command.startsWith(Uy) && kk.startsWith(Uy)) {
          const Xk = kk.slice(Uy.length);
          if (Ik.command.slice(Uy.length).split(",").includes(Xk)) return void Ik.tickets.push(Fk);
          const Tk = `${Ik.command},${Xk}`;
          if (Tk.length <= 119) return Ik.command = Tk, void Ik.tickets.push(Fk)
        }
        this.pending.push({
          command: kk,
          tickets: [Fk]
        })
      }
      flush() {
        const kk = this.now();
        for (this.tokens = Math.min(5, this.tokens + (kk - this.refilledAt) / by), this.refilledAt = kk; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.PTk += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: kk,
            tickets: Fk
          } = this.pending.shift();
          this.markLeft(Fk), this.send(kk)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * by)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Wy {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new cy(kk, Fk)
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
          islandEdits: Ik
        } = this, Xk = Fk - Ik.lastAtMs < Ry;
        Ik.count = Xk ? Math.max(Ik.count, kk) : kk
      }
      clear() {
        this.queue.clear()
      }
    }
    const fy = (0, Xk.createContext)(null);

    function By() {
      const kk = (0, Xk.useContext)(fy);
      if (!kk) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return kk
    }

    function dy(kk, Fk) {
      return null !== Fk && void 0 !== Fk ? Fk : 1 === kk
    }

    function Yy(kk, Fk) {
      return kk.every((kk => {
        var Ik;
        let [Xk, , Tk] = kk;
        return !dy(Tk, null === (Ik = Fk.get(Xk)) || void 0 === Ik ? void 0 : Ik.Gj)
      }))
    }

    function Ay(kk, Fk, Ik) {
      if (0 === kk.size) return kk;
      const Xk = new Map(kk);
      for (const [Tk, ik] of kk) {
        const kk = Fk.find((kk => {
          let [Fk] = kk;
          return Fk === Tk
        }));
        (!kk || ik.Gj === (1 === kk[2]) || ik.atMs < Ik) && Xk.delete(Tk)
      }
      return Xk
    }

    function gy(kk) {
      var Fk;
      let {
        EX: Ik,
        input: Tk,
        drops: ik,
        seconds: yk
      } = kk;
      const {
        t: lk
      } = (0, vT.y)(), ak = By(), [qk, Lk] = (0, Xk.useState)(new Map);
      (0, Xk.useEffect)((() => {
        ik && Lk((kk => Ay(kk, ik, Date.now() - Ry)))
      }), [ik]), (0, Xk.useEffect)((() => {
        const kk = function(kk, Fk) {
          let Ik = null;
          for (const {
              atMs: Xk
            }
            of kk.values()) Ik = null === Ik ? Xk : Math.min(Ik, Xk);
          return null === Ik ? null : Ik + Fk
        }(qk, Ry);
        if (null === kk || !ik) return;
        const Fk = setTimeout((() => {
          Lk((kk => Ay(kk, ik, Date.now() - Ry)))
        }), Math.max(0, kk - Date.now()) + 1);
        return () => {
          clearTimeout(Fk)
        }
      }), [qk, ik]);
      const tk = dk(Tk),
        Zk = null !== tk && null !== ik && Yy(ik, qk),
        jk = function(kk, Fk, Ik) {
          return null === kk || null === Fk || Yy(Fk, Ik) ? 0 : Nk[Uk[kk]]
        }(tk, ik, qk);
      return (0, Si.jsxs)(bi, {
        title: lk("buildAFactory2Game:farmDropsTitle", {
          seconds: yk
        }),
        count: null !== (Fk = null === ik || void 0 === ik ? void 0 : ik.length) && void 0 !== Fk ? Fk : 0,
        children: [jk > 0 && (0, Si.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: lk("buildAFactory2Game:farmDropsPower", {
            power: String(jk)
          })
        }), (null === tk || !ik) && (0, Si.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: lk("buildAFactory2Game:farmDropsEmpty")
        }), Zk && (0, Si.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: lk("buildAFactory2Game:farmDropsAllVoided")
        }), null !== tk && (null === ik || void 0 === ik ? void 0 : ik.map((kk => {
          var Fk;
          let [Xk, Tk, ik] = kk;
          const yk = Tk < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            tk = dy(ik, null === (Fk = qk.get(Xk)) || void 0 === Fk ? void 0 : Fk.Gj);
          return (0, Si.jsxs)("li", {
            className: VT()("Baf2Recipe Baf2FarmDrop", {
              Voided: !tk
            }),
            children: [(0, Si.jsx)(Ei, {
              item: Xk,
              amount: 1
            }), (0, Si.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ti(lk, Xk)
            }), (0, Si.jsx)("span", {
              className: "Baf2FarmRate",
              children: lk(yk, {
                amount: String(Tk)
              })
            }), (0, Si.jsx)("button", {
              type: "button",
              className: VT()("Baf2FarmToggle SmallTextBold", {
                Kept: tk
              }),
              "aria-pressed": tk,
              onClick: () => {
                Lk(new Map(qk).set(Xk, {
                  Gj: !tk,
                  atMs: Date.now()
                })), ak.send(function(kk, Fk, Ik, Xk) {
                  return `${ck} ${kk} ${Fk} ${Ik} ${Xk}`
                }(Ik[0], Ik[1], Ik[2], Xk))
              },
              children: lk(tk ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Xk)
        })))]
      })
    }
    var my;
    const hy = String(null !== (my = bF.Synthesizer.waterPerOp) && void 0 !== my ? my : 0);

    function ry(kk) {
      let {
        EX: Fk,
        taught: Ik
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)(), ik = By(), [yk, lk] = (0, Xk.useState)(null);
      (0, Xk.useEffect)((() => {
        null !== yk && Ik === yk && lk(null)
      }), [yk, Ik]);
      const ak = null !== yk && void 0 !== yk ? yk : Ik;
      let qk = Tk("buildAFactory2Game:synthPick");
      return null !== ak && (qk = Tk("buildAFactory2Game:synthGrows", {
        name: Ti(Tk, ak),
        input: Ti(Tk, zF),
        water: hy
      })), (0, Si.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Si.jsx)("div", {
          className: VT()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === ak
          }),
          children: qk
        }), (0, Si.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: SF.map(((kk, Ik) => {
            const Xk = Ti(Tk, kk),
              yk = kk === ak;
            return (0, Si.jsx)("li", {
              children: (0, Si.jsx)("button", {
                type: "button",
                className: VT()("Baf2SynthTile", {
                  Selected: yk
                }),
                title: Xk,
                "aria-label": Xk,
                "aria-pressed": yk,
                onClick: () => {
                  yk || (lk(kk), ik.send(`${vF} ${Fk[0]} ${Fk[1]} ${Fk[2]} ${Ik}`))
                },
                children: (0, Si.jsx)(OT.d, {
                  itemName: kk,
                  amount: 0
                })
              })
            }, kk)
          }))
        })]
      })
    }
    const Dy = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function My(kk) {
      let {
        kind: Fk,
        tier: Ik,
        coupled: Xk,
        level: Tk,
        slot: ik
      } = kk;
      const {
        t: yk
      } = (0, vT.y)(), ak = rk(UF);
      if (!Xk && null !== Ik && Ik < ak) return (0, Si.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Si.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Si.jsx)(ET.e, {
            name: "lock"
          })
        }), (0, Si.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: yk("buildAFactory2Game:upgradeLocked")
        }), (0, Si.jsx)("span", {
          className: "Baf2TierTag",
          children: yk("buildAFactory2Game:tierTag", {
            tier: String(ak)
          })
        })]
      });
      const qk = function(kk, Fk) {
          if (lk() && "Crusher" !== kk && null !== Fk) {
            if (kl(NF, Fk)) return {
              item: NF,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (kl(CF, Fk)) return {
              item: CF,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: UF,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(Fk, Ik),
        Lk = yk(Xk ? Dy[Tk - 1] : qk.emptyKey),
        tk = null !== Ik ? function(kk, Fk, Ik, Xk) {
          if (!lk() || !Ik || "Crusher" === kk || Fk < 10) return null;
          const Tk = rk(NF);
          if (Xk < 3 && Tk > 1 && (2 === Xk || Fk >= Tk)) return {
            tier: Tk,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const ik = rk(CF);
          if (1 === Xk && ik > 1) return {
            tier: ik,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(Fk, Ik, Xk, Tk) : null;
      return (0, Si.jsxs)("div", {
        className: VT()("Baf2UpgradeSocket", {
          Fitted: Xk
        }),
        children: [(0, Si.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Xk && ik, !Xk && (0, Si.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Si.jsx)(OT.d, {
              itemName: qk.item,
              amount: 0
            })
          })]
        }), (0, Si.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Si.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: yk("buildAFactory2Game:upgradeTitle")
          }), (0, Si.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Lk
          }), Xk && Tk >= 2 && "Crusher" === Fk && (0, Si.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: yk("buildAFactory2Game:couplerCrusherHint")
          }), tk && null !== Ik && Ik < tk.tier && (0, Si.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Si.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Si.jsx)(ET.e, {
                name: "lock"
              })
            }), yk(tk.lockedKey), (0, Si.jsx)("span", {
              className: "Baf2TierTag",
              children: yk("buildAFactory2Game:tierTag", {
                tier: String(tk.tier)
              })
            })]
          }), tk && null !== Ik && Ik >= tk.tier && (0, Si.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: yk(tk.nextKey)
          })]
        })]
      })
    }

    function kl(kk, Fk) {
      const Ik = rk(kk);
      return Ik > 1 && Fk >= Ik
    }
    var Fl = Ik(37079);
    const Il = (0, Mk.O)(bF.Condenser, bF.Condenser.fluidMade),
      Xl = .05;
    class Tl extends Sy {}

    function il(kk) {
      return xi(kk, "")
    }

    function yl(kk, Fk, Ik) {
      return kk(Fk ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: Ik
      })
    }

    function ll(kk, Fk, Ik, Xk) {
      return Ik <= Xl && Xk <= Xl ? null : Xk <= Xl || Ik <= Xl ? yl(kk, Fk, Xk <= Xl ? xi(Ik, "+") : xi(Xk, "\u2212")) : kk(Fk ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: il(Ik),
        used: il(Xk)
      })
    }

    function al(kk, Fk) {
      return Math.min(100, 100 * kk / Math.max(1, Fk))
    }

    function ql(kk) {
      let {
        stored: Fk,
        cap: Ik,
        netPerS: Xk,
        rates: Tk,
        cryo: ik
      } = kk;
      const {
        t: yk
      } = (0, vT.y)(), lk = function(kk, Fk, Ik, Xk) {
        return Ik <= 0 ? kk("buildAFactory2Game:waterNoStorage") : Fk >= Ik ? kk("buildAFactory2Game:powerFull") : Xk > Xl ? kk("buildAFactory2Game:powerFullIn", {
          time: Qi(kk, (Ik - Fk) / Xk)
        }) : Xk < -.05 ? Fk <= 0 ? kk("buildAFactory2Game:waterEmpty") : kk("buildAFactory2Game:powerEmptyIn", {
          time: Qi(kk, Fk / -Xk)
        }) : kk("buildAFactory2Game:powerSteady")
      }(yk, Fk, Ik, Xk), ak = Ik > 0 && Fk < Ik && Math.abs(Xk) <= Xl, qk = yk(ik ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Lk = null !== Tk ? `${Tk} \xb7 ${lk}` : ak ? qk : `${qk} \xb7 ${lk}`;
      return (0, Si.jsxs)(Si.Fragment, {
        children: [(0, Si.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Si.jsx)("div", {
            style: {
              width: `${al(Fk,Ik)}%`
            }
          })
        }), (0, Si.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Si.jsx)("span", {
            children: Ik > 0 && yk("buildAFactory2Game:powerStored", {
              stored: (0, Mk.Y)(Fk),
              cap: (0, Mk.Y)(Ik)
            })
          }), (0, Si.jsx)("span", {
            className: VT()("Baf2WaterNet", {
              Draining: Xk < -.05
            }),
            children: Lk
          })]
        })]
      })
    }

    function Ll(kk) {
      let {
        water: Fk,
        at: Ik,
        side: Xk = null
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)(), ik = By(), [yk, lk, ak] = Fk;
      return (0, Si.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Si.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Si.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Tk(null === Xk ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Xk}`)
          }), (0, Si.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              ik.send(`${Mk.G} ${Ik[0]} ${Ik[1]} ${Ik[2]}${"cryoOut"===Xk?" cryo":""}`)
            },
            children: Tk("buildAFactory2Game:waterDetails")
          })]
        }), (0, Si.jsx)(ql, {
          stored: yk,
          cap: lk,
          netPerS: ak,
          rates: yl(Tk, "cryoOut" === Xk, xi(Math.abs(ak), ak < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Xk
        })]
      })
    }

    function tl(kk, Fk) {
      var Ik, Xk, Tk;
      const ik = !0 === Fk.baf2WaterCryo,
        yk = null !== (Ik = null === (Xk = Fk.baf2WaterMakers.find((kk => kk[0] === (ik ? Mk.c : "Condenser")))) || void 0 === Xk ? void 0 : Xk[1]) && void 0 !== Ik ? Ik : 0,
        lk = [],
        ak = (Fk, Ik, Xk) => {
          Fk > 0 && lk.push(kk(1 === Fk ? Ik : Xk, {
            count: String(Fk)
          }))
        };
      return ik ? ak(yk, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : ak(yk, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), ak(null !== (Tk = Fk.baf2WaterPipes) && void 0 !== Tk ? Tk : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), ak(Fk.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), lk.join(" \xb7 ")
    }

    function Zl(kk, Fk) {
      if (!0 === Fk.baf2WaterCryo) return function(kk, Fk) {
        const Ik = bF[Mk.c];
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
            var Xk;
            const [Tk, ik] = null !== (Xk = Fk.baf2WaterThisRates) && void 0 !== Xk ? Xk : [(0, Mk.O)(Ik, Ik.cryoMade), (0, Mk.O)(Ik, Ik.powerPerOp)];
            return !0 === Fk.baf2WaterDriven ? {
              text: kk("buildAFactory2Game:cryoThisMixerDriven", {
                rate: il(Tk)
              }),
              bad: !1
            } : {
              text: kk("buildAFactory2Game:cryoThisMixer", {
                rate: il(Tk),
                power: il(ik)
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
      const Ik = !0 === Fk.baf2WaterDriven,
        Xk = bF.Condenser;
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
              tank: (0, Mk.Y)(Mk.t),
              cap: (0, Mk.Y)(Fk.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Tk;
          const [ik, yk] = null !== (Tk = Fk.baf2WaterThisRates) && void 0 !== Tk ? Tk : [Il, (0, Mk.O)(Xk, Xk.powerPerOp)];
          return Ik ? {
            text: kk("buildAFactory2Game:waterThisCondenserDriven", {
              rate: il(ik)
            }),
            bad: !1
          } : {
            text: kk("buildAFactory2Game:waterThisCondenser", {
              rate: il(ik),
              power: il(yk)
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

    function jl(kk, Fk) {
      const Ik = Fk.baf2WaterMakers.some((kk => !0 === kk[5]));
      if (!0 === Fk.baf2WaterCryo) {
        const Xk = Fk.baf2WaterUsedPerS - Fk.baf2WaterMadePerS,
          Tk = Ik || Xk <= Xl ? 0 : (0, Mk.K)(Xk);
        return 0 === Tk ? null : Tk > 1 ? kk("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Tk)
        }) : kk("buildAFactory2Game:cryoNextOne")
      }
      const Xk = Ik ? null : function(kk, Fk) {
        const Ik = Fk - kk;
        return Ik <= Xl ? null : Math.ceil(Ik / Il)
      }(Fk.baf2WaterMadePerS, Fk.baf2WaterUsedPerS);
      return null === Xk ? null : Xk > 1 ? kk("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Xk)
      }) : kk("buildAFactory2Game:waterNextOne")
    }

    function el(kk) {
      let {
        item: Fk,
        label: Ik,
        note: Xk,
        value: Tk,
        dim: ik,
        bad: yk
      } = kk;
      return (0, Si.jsxs)("li", {
        className: VT()("Baf2WaterRow", {
          Dim: ik,
          Bad: yk
        }),
        children: [(0, Si.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Si.jsx)(OT.d, {
            itemName: Fk,
            amount: 0
          })
        }), (0, Si.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Si.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: Ik
          }), Xk && (0, Si.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Xk
          })]
        }), (0, Si.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Tk
        })]
      })
    }

    function wl(kk) {
      return Fl.j[kk] ? kk : "Reactor Port"
    }

    function Hl(kk) {
      let {
        message: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)(), Xk = !0 === Fk.baf2WaterCryo, Tk = (kk, Fk) => yl(Ik, Xk, xi(kk, Fk));
      return (0, Si.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Si.jsxs)("section", {
          children: [(0, Si.jsxs)("h3", {
            children: [Ik("buildAFactory2Game:waterMakes"), (0, Si.jsx)("span", {
              children: Tk(Fk.baf2WaterMadePerS, "+")
            })]
          }), (0, Si.jsxs)("ul", {
            children: [0 === Fk.baf2WaterMakers.length && (0, Si.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Ik(Xk ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), Fk.baf2WaterMakers.map((kk => {
              let [Fk, Xk, ik, yk, lk, ak] = kk;
              const qk = Ik("buildAFactory2Game:powerRunning", {
                amount: String(ik)
              });
              let Lk = lk > 0 ? Ik("buildAFactory2Game:waterMakerPower", {
                running: qk,
                power: il(lk)
              }) : qk;
              return ak && (Lk = Ik(0 === ik && yk <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Si.jsx)(el, {
                item: Fk,
                label: `${Ti(Ik,Fk)} \xd7${Xk}`,
                note: Lk,
                value: ik > 0 || ak && yk > 0 ? Tk(yk, "+") : Ik("buildAFactory2Game:powerIdle"),
                dim: 0 === ik && !ak,
                bad: ak
              }, Fk)
            }))]
          })]
        }), (0, Si.jsxs)("section", {
          children: [(0, Si.jsxs)("h3", {
            children: [Ik("buildAFactory2Game:waterUses"), (0, Si.jsx)("span", {
              children: Tk(Fk.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Si.jsxs)("ul", {
            children: [0 === Fk.baf2WaterUsers.length && (0, Si.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Ik(Xk ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), Fk.baf2WaterUsers.map((kk => {
              let [Fk, Xk, ik, yk] = kk;
              const lk = Fl.j[Fk] ? Ti(Ik, Fk) : Fk;
              return (0, Si.jsx)(el, {
                item: wl(Fk),
                label: Xk > 1 ? `${lk} \xd7${Xk}` : lk,
                note: yk ? Ik("buildAFactory2Game:waterPortFirst") : void 0,
                value: ik > 0 ? Tk(ik, "\u2212") : Ik("buildAFactory2Game:powerIdle"),
                dim: 0 === ik
              }, Fk)
            }))]
          })]
        })]
      })
    }

    function Jl(kk) {
      var Fk, Ik, Tk, ik, yk;
      let {
        store: lk,
        close: ak
      } = kk;
      const {
        t: qk
      } = (0, vT.y)(), Lk = function(kk) {
        const [Fk, Ik] = (0, Xk.useState)((() => kk.get()));
        return (0, Xk.useEffect)((() => (Ik(kk.get()), kk.subscribe((() => {
          Ik(kk.get())
        })))), [kk]), Fk
      }(lk), tk = null !== (Fk = null === Lk || void 0 === Lk ? void 0 : Lk.baf2WaterStored) && void 0 !== Fk ? Fk : 0, Zk = null !== (Ik = null === Lk || void 0 === Lk ? void 0 : Lk.baf2WaterCap) && void 0 !== Ik ? Ik : 0, jk = null !== (Tk = null === Lk || void 0 === Lk ? void 0 : Lk.baf2WaterMadePerS) && void 0 !== Tk ? Tk : 0, ek = null !== (ik = null === Lk || void 0 === Lk ? void 0 : Lk.baf2WaterUsedPerS) && void 0 !== ik ? ik : 0, wk = null !== (yk = null === Lk || void 0 === Lk ? void 0 : Lk.baf2WaterNetPerS) && void 0 !== yk ? yk : jk - ek, Hk = Lk && Zl(qk, Lk), Jk = Lk && jl(qk, Lk), xk = !0 === (null === Lk || void 0 === Lk ? void 0 : Lk.baf2WaterCryo);
      return (0, Si.jsx)(Vy.c, {
        close: ak,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Si.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Lk && Zk <= 0 ? (0, Si.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Si.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Si.jsx)(OT.d, {
                  itemName: xk ? wI.f : Mk.j,
                  amount: 0
                })
              }), (0, Si.jsxs)("div", {
                children: [(0, Si.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: qk(xk ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Lk && (0, Si.jsx)("p", {
                  children: tl(qk, Lk)
                })]
              })]
            }), (0, Si.jsx)(zy.k, {
              onClick: ak
            })]
          }), Lk && Hk && (0, Si.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Si.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Si.jsx)(ql, {
                stored: tk,
                cap: Zk,
                netPerS: wk,
                cryo: xk,
                rates: ll(qk, xk, jk, ek)
              })
            }), (0, Si.jsx)("div", {
              className: VT()("Baf2WaterThis", {
                Bad: Hk.bad
              }),
              children: Hk.text
            }), Lk.baf2WaterDriven && (0, Si.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Si.jsx)(ET.e, {
                name: "bolt"
              }), qk(xk ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), Jk && (0, Si.jsx)("p", {
              className: "Baf2WaterNext",
              children: Jk
            }), (0, Si.jsx)(Hl, {
              message: Lk
            })]
          })]
        })
      })
    }
    class xl {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(kk, Fk) {
        const Ik = this.get(kk);
        Ik && null === Fk.opLeftMs && null === Fk.fuelLeftMs && Fk.status === Ik.status ? Fk = {
          ...Fk,
          opLeftMs: Ik.opLeftMs,
          fuelLeftMs: Ik.fuelLeftMs,
          burning: Ik.burning
        } : this.updates++, this.pos = kk, this.view = Fk;
        for (const Xk of this.listeners) Xk()
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

    function Pl(kk, Fk, Ik, Xk) {
      return "noFuel" === Fk && Xk && !iI(bF[kk]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === Fk && !0 === (null === Ik || void 0 === Ik ? void 0 : Ik.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === Fk && !0 === (null === Ik || void 0 === Ik ? void 0 : Ik.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === Fk && !0 === (null === Ik || void 0 === Ik ? void 0 : Ik.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === Fk && !0 === (null === Ik || void 0 === Ik ? void 0 : Ik.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Kl(Fk, Ik) ? "buildAFactory2Game:machineStatus_noInputShort" : function(kk, Fk) {
        const Ik = bF[kk];
        if ("noFuel" === Fk && void 0 !== Ik.fuels) return iI(Ik) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (Ik.mobFarm && ("noInput" === Fk || "badInput" === Fk)) return `buildAFactory2Game:machineStatus_${Fk}MobFarm`;
        if ("outputFull" === Fk && (void 0 !== Ik.table || Ik.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === Fk && gF(Ik)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== Ik.cryoMade && ("noInput" === Fk || "noOutlet" === Fk || "fluidFull" === Fk)) return `buildAFactory2Game:machineStatus_${Fk}Mixer`;
        return `buildAFactory2Game:machineStatus_${Fk}`
      }(kk, Fk)
    }

    function Kl(kk, Fk) {
      return "noInput" === kk && null !== Fk && void 0 !== Fk && Fk.input && Fk.inputShort ? {
        input: Fk.input,
        short: Fk.inputShort
      } : null
    }

    function Ql(kk) {
      return zT(kk) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== kk.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function sl(kk) {
      const Fk = (0, bk.ye)(kk);
      return `Baf2Pane Baf2Pane${Fk.charAt(0).toUpperCase()}${Fk.slice(1)}`
    }

    function Vl(kk, Fk) {
      const [Ik, Tk] = (0, Xk.useState)((() => kk.get(Fk)));
      return (0, Xk.useEffect)((() => {
        Tk(kk.get(Fk));
        const Ik = kk.subscribe((() => {
          Tk(kk.get(Fk))
        }));
        return () => {
          Ik(), kk.forget(Fk)
        }
      }), [kk, ...Fk]), Ik
    }

    function zl(kk, Fk, Ik, Xk) {
      const Tk = bF[kk],
        ik = Fk && Tk.couplable ? BF(Tk, Ik) : Tk,
        yk = null !== Xk && II(ik) ? function(kk, Fk) {
          var Ik;
          return null !== (Ik = null !== Fk && II(kk) ? aI[Fk] : void 0) && void 0 !== Ik ? Ik : kk.opMs
        }(ik, qI(Xk)) : ik.opMs;
      return yk === ik.opMs ? ik : {
        ...ik,
        opMs: yk
      }
    }

    function Sl(kk) {
      let {
        running: Fk,
        opMs: Ik,
        opLeftMs: Xk,
        updateCount: Tk
      } = kk;
      return (0, Si.jsx)("div", {
        className: VT()("Baf2MachineProgress", {
          Running: Fk
        }),
        children: (0, Si.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: Ik / 1e3 + "s",
            animationDelay: null === Xk ? void 0 : (Xk - Ik) / 1e3 + "s"
          }
        }, Tk)
      })
    }

    function ol(kk) {
      let {
        running: Fk,
        leftMs: Ik,
        periodMs: Xk,
        updateCount: Tk
      } = kk;
      const {
        t: ik
      } = (0, vT.y)(), yk = Math.min(Math.max(null !== Ik && void 0 !== Ik ? Ik : 0, 0), Xk), lk = Fk && yk > 0, ak = ik("buildAFactory2Game:machineBarFuel");
      return (0, Si.jsx)("div", {
        className: VT()("Baf2FuelBurn", {
          Draining: lk
        }),
        role: "img",
        title: ak,
        "aria-label": ak,
        children: (0, Si.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: lk ? {
            animationDuration: Xk / 1e3 + "s",
            animationDelay: (yk - Xk) / 1e3 + "s"
          } : {
            transform: `scaleY(${yk/Xk})`
          }
        }, Tk)
      })
    }

    function vl(kk, Fk, Ik) {
      let [Xk, Tk] = Ik;
      const ik = 1 !== Xk ? oT(Fk) : null;
      return {
        amount: Xk,
        have: Tk,
        item: kk(ik || Xi(Fk))
      }
    }

    function El(kk) {
      return II(kk) ? "buildAFactory2Game:machineBarMining" : XI(kk) ? "buildAFactory2Game:machineBarCutting" : void 0 !== kk.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Ol(kk) {
      var Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk;
      let {
        kind: Kk,
        EX: Qk,
        store: sk,
        power: Vk,
        renderSlot: zk
      } = kk;
      const {
        t: Sk
      } = (0, vT.y)(), vk = Vl(sk, Qk), Ek = bF[Kk], Ok = null !== (Fk = null === vk || void 0 === vk ? void 0 : vk.coupled) && void 0 !== Fk && Fk, nk = null !== (Ik = null === vk || void 0 === vk ? void 0 : vk.couplerLevel) && void 0 !== Ik ? Ik : 1, Gk = zl(Kk, Ok, nk, null !== (Xk = null === vk || void 0 === vk || null === (Tk = vk.dug) || void 0 === Tk ? void 0 : Tk.item) && void 0 !== Xk ? Xk : null), pk = null !== (ik = null === vk || void 0 === vk ? void 0 : vk.status) && void 0 !== ik ? ik : null, uk = null !== (yk = null === vk || void 0 === vk ? void 0 : vk.power) && void 0 !== yk ? yk : null, bk = null !== (lk = null === vk || void 0 === vk ? void 0 : vk.opLeftMs) && void 0 !== lk ? lk : null, Rk = null !== (ak = null === vk || void 0 === vk ? void 0 : vk.dug) && void 0 !== ak ? ak : null, Uk = null !== Rk && II(Ek) ? aI[null !== (qk = qI(Rk.item)) && void 0 !== qk ? qk : ""] : void 0, Ck = void 0 === Uk ? null : 6e4 / Uk, Nk = null !== (Lk = null === vk || void 0 === vk ? void 0 : vk.powerCap) && void 0 !== Lk ? Lk : 4e3, ck = null !== (tk = null === vk || void 0 === vk ? void 0 : vk.tier) && void 0 !== tk ? tk : null, Wk = void 0 !== Gk.powerMade, fk = null !== Ek.fuelSlot ? zk(Ek.fuelSlot) : null, Bk = fF(Ek), dk = !Ok && !0 === (null === vk || void 0 === vk ? void 0 : vk.fuelFed), Ak = !Ok && !0 === (null === vk || void 0 === vk ? void 0 : vk.fuelFeeds), gk = null !== Ek.fuelSlot && !Ok, mk = null !== (Zk = null === vk || void 0 === vk ? void 0 : vk.fuelLeftMs) && void 0 !== Zk ? Zk : null, hk = function(kk, Fk, Ik) {
        var Xk;
        const Tk = null === Fk ? void 0 : yI[Fk];
        return Math.max(null !== (Xk = null !== Tk && void 0 !== Tk ? Tk : Ik) && void 0 !== Xk ? Xk : 0, kk.opMs)
      }(Gk, null !== (jk = null === vk || void 0 === vk ? void 0 : vk.burning) && void 0 !== jk ? jk : null, mk), rk = null !== (ek = null === vk || void 0 === vk ? void 0 : vk.fuelKeep) && void 0 !== ek ? ek : null, Dk = null === pk ? null : Pl(Kk, pk, vk, dk), Mk = null === pk ? null : Kl(pk, vk);
      return (0, Si.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Si.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Si.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Sk(Xi(Kk))
          }), Rk && (0, Si.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [Sk("Tree Cutter" === Kk ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Si.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Si.jsx)(OT.d, {
                itemName: Rk.item,
                amount: 0
              })
            }), (0, Si.jsx)(nT.c, {
              text: Rk.name
            })]
          }), null !== Ck && (0, Si.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: Sk("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Ck)
            })
          }), (null === vk || void 0 === vk ? void 0 : vk.field) && (0, Si.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Si.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Si.jsx)(OT.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), Sk("buildAFactory2Game:machineField", {
              planted: String(vk.field[0]),
              ripe: String(vk.field[1])
            })]
          }), (0, Si.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Si.jsxs)("div", {
              className: VT()("Baf2MachineColumn", {
                Baf2Burns: gk
              }),
              children: [null !== Gk.inputSlot && (0, Si.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Si.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Sk(Ql(Gk))
                }), zk(Gk.inputSlot)]
              }), null !== Ek.fuelSlot && !Ok && (0, Si.jsxs)("div", {
                className: VT()("Baf2MachineSlot", {
                  Baf2FuelFed: dk
                }),
                children: [(0, Si.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [dk && (0, Si.jsx)(ET.e, {
                    name: "fire"
                  }), Sk("buildAFactory2Game:machineFuel")]
                }), (0, Si.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Si.jsx)(ol, {
                    running: "running" === pk,
                    leftMs: mk,
                    periodMs: hk,
                    updateCount: sk.updateCount
                  }), fk]
                })]
              }), null !== Ek.fuelSlot && Ok && (0, Si.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Si.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Sk("buildAFactory2Game:machineFuel")
                }), (0, Si.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: Sk("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": Sk("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Si.jsx)(ET.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Si.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Si.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Sk(El(Gk))
              }), (0, Si.jsx)(Sl, {
                running: "running" === pk,
                opMs: Gk.opMs,
                opLeftMs: bk,
                updateCount: sk.updateCount
              })]
            }), Gk.outputSlots.length > 0 && (0, Si.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Si.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Sk("buildAFactory2Game:machineOutput")
              }), (0, Si.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Gk.outputSlots.map((kk => (0, Si.jsx)("div", {
                  children: zk(kk)
                }, kk)))
              })]
            }), null !== uk && Wk && (0, Si.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Si.jsx)("div", {
                style: {
                  height: 100 * uk / Nk + "%"
                }
              })
            })]
          }), gk && null !== rk && (0, Si.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Si.jsx)(ET.e, {
              name: "arrows-rotate"
            }), Sk(XI(Gk) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(rk)
            })]
          }), (dk || Ak) && (0, Si.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Si.jsx)(ET.e, {
              name: "fire"
            }), Sk(dk ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Ek.couplable && (0, Si.jsx)(My, {
            kind: Kk,
            tier: ck,
            coupled: Ok,
            level: nk,
            slot: Bk === Ek.fuelSlot ? fk : null !== Bk ? zk(Bk) : null
          }), null !== uk && !Wk && !0 === (null === vk || void 0 === vk ? void 0 : vk.reactorPowered) && (0, Si.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: Sk("buildAFactory2Game:machineReactorPowered")
          }), null !== uk && !Wk && !0 !== (null === vk || void 0 === vk ? void 0 : vk.reactorPowered) && (0, Si.jsx)(Gy, {
            stored: uk,
            cap: Nk,
            rates: null !== (wk = null === vk || void 0 === vk ? void 0 : vk.powerRates) && void 0 !== wk ? wk : null
          }), (null === vk || void 0 === vk ? void 0 : vk.water) && (0, Si.jsx)(Ll, {
            water: vk.water,
            at: Qk,
            side: vk.cryo ? "waterIn" : null
          }), (null === vk || void 0 === vk ? void 0 : vk.cryo) && (0, Si.jsx)(Ll, {
            water: vk.cryo,
            at: Qk,
            side: "cryoOut"
          }), null !== vk && void 0 !== vk && vk.inertCoupler ? (0, Si.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: Sk("buildAFactory2Game:machineStatus_couplerOff", {
              item: Ti(Sk, vk.inertCoupler)
            })
          }) : null !== Dk && (0, Si.jsx)("div", {
            className: VT()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== pk
            }),
            children: Sk(Dk, Mk ? vl(Sk, Mk.input, Mk.short) : void 0)
          })]
        }), (0, Si.jsxs)("div", {
          className: VT()("Baf2MachineSide", {
            Baf2SynthSide: gF(Ek)
          }),
          children: [gF(Ek) && (0, Si.jsx)(ry, {
            EX: Qk,
            taught: null !== (Hk = null === vk || void 0 === vk ? void 0 : vk.taught) && void 0 !== Hk ? Hk : null
          }, Qk.join(",")), Wk && (0, Si.jsx)(uy, {
            kind: Kk,
            def: Gk,
            EX: Qk,
            power: Vk,
            stored: null !== uk && void 0 !== uk ? uk : 0,
            cap: Nk
          }), Yk(Ek) && (0, Si.jsx)(gy, {
            EX: Qk,
            input: null !== (Jk = null === vk || void 0 === vk ? void 0 : vk.input) && void 0 !== Jk ? Jk : null,
            drops: null !== (xk = null === vk || void 0 === vk ? void 0 : vk.farm) && void 0 !== xk ? xk : null,
            seconds: String(Gk.opMs / 1e3)
          }), !Wk && !Yk(Ek) && !gF(Ek) && (0, Si.jsx)(iy, {
            kind: Kk,
            def: Gk,
            input: null !== (Pk = null === vk || void 0 === vk ? void 0 : vk.input) && void 0 !== Pk ? Pk : null,
            tier: null !== ck && void 0 !== ck ? ck : 1,
            noSeeds: !0 === (null === vk || void 0 === vk ? void 0 : vk.noSeeds)
          })]
        })]
      })
    }

    function nl(kk, Fk, Ik, Xk) {
      var Tk;
      const ik = bF[kk],
        yk = [ik.inputSlot, ik.fuelSlot, ...null !== (Tk = ik.inputSlots) && void 0 !== Tk ? Tk : []].filter((kk => null !== kk));
      return {
        render: Tk => {
          let {
            EX: ik,
            renderSlot: yk
          } = Tk;
          return (0, Si.jsx)(fy.Provider, {
            value: Xk,
            children: (0, Si.jsx)(Ol, {
              kind: kk,
              EX: ik,
              store: Fk,
              power: Ik,
              renderSlot: yk
            })
          })
        },
        quickMoveRange: yk.length > 0 ? [Math.min(...yk), Math.max(...yk) + 1] : [0, 0],
        className: sl(kk)
      }
    }
    const Gl = "Assembler";

    function pl(kk) {
      var Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk;
      let {
        EX: Lk,
        store: tk,
        renderSlot: Zk
      } = kk;
      const {
        t: jk
      } = (0, vT.y)(), ek = Vl(tk, Lk), wk = null !== (Fk = null === ek || void 0 === ek ? void 0 : ek.tier) && void 0 !== Fk ? Fk : 1, Hk = null !== (Ik = null === ek || void 0 === ek ? void 0 : ek.taught) && void 0 !== Ik ? Ik : null, Jk = DF(Gl, {
        coupled: !1,
        taught: Hk
      }), xk = null !== (Xk = Jk.bench) && void 0 !== Xk ? Xk : null, Pk = null !== (Tk = null === ek || void 0 === ek ? void 0 : ek.status) && void 0 !== Tk ? Tk : null, Kk = null !== (ik = null === ek || void 0 === ek ? void 0 : ek.power) && void 0 !== ik ? ik : null, Qk = null !== (yk = null === ek || void 0 === ek ? void 0 : ek.powerCap) && void 0 !== yk ? yk : 4e3;
      return (0, Si.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Si.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Si.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: jk(Xi(Gl))
          }), xk && (0, Si.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [jk("buildAFactory2Game:benchMakes"), (0, Si.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Si.jsx)(OT.d, {
                itemName: xk.output,
                amount: 0
              })
            }), (null === ek || void 0 === ek ? void 0 : ek.taughtName) && (0, Si.jsx)(nT.c, {
              text: ek.taughtName
            }), xk.outputAmount > 1 && (0, Si.jsxs)("span", {
              children: ["\xd7", xk.outputAmount]
            })]
          }), !xk && (0, Si.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: jk("buildAFactory2Game:benchTeachHint")
          }), (0, Si.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Si.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (lk = Jk.inputSlots) && void 0 !== lk ? lk : []).map(((kk, Fk) => {
                const Ik = null === xk || void 0 === xk ? void 0 : xk.inputs[Fk];
                return (0, Si.jsxs)("div", {
                  className: VT()("Baf2BenchInput", {
                    Spare: !Ik
                  }),
                  children: [(0, Si.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Zk(kk), Ik && (0, Si.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Si.jsx)(OT.d, {
                        itemName: Ik.item,
                        amount: 0
                      })
                    })]
                  }), (0, Si.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: Ik ? `\xd7${Ik.amount}` : "\xa0"
                  })]
                }, kk)
              }))
            }), (0, Si.jsx)(Sl, {
              running: "running" === Pk,
              opMs: Jk.opMs,
              opLeftMs: null !== (ak = null === ek || void 0 === ek ? void 0 : ek.opLeftMs) && void 0 !== ak ? ak : null,
              updateCount: tk.updateCount
            }), (0, Si.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Si.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: jk("buildAFactory2Game:machineOutput")
              }), (0, Si.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Jk.outputSlots.map((kk => (0, Si.jsx)("div", {
                  children: Zk(kk)
                }, kk)))
              })]
            })]
          }), null !== Kk && (0, Si.jsx)(Gy, {
            stored: Kk,
            cap: Qk,
            rates: null !== (qk = null === ek || void 0 === ek ? void 0 : ek.powerRates) && void 0 !== qk ? qk : null
          }), null !== Pk && (0, Si.jsx)("div", {
            className: VT()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Pk
            }),
            children: jk(Pl(Gl, Pk, ek, !1))
          }), xk && xk.inputs.length > 1 && (0, Si.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: jk("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Si.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Si.jsx)(ly, {
            taught: Hk,
            tier: wk
          }), xk && (0, Si.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: jk("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function ul(kk) {
      var Fk;
      const Ik = null !== (Fk = bF[Gl].inputSlots) && void 0 !== Fk ? Fk : [];
      return {
        render: Fk => {
          let {
            EX: Ik,
            renderSlot: Xk
          } = Fk;
          return (0, Si.jsx)(pl, {
            EX: Ik,
            store: kk,
            renderSlot: Xk
          })
        },
        quickMoveRange: [Math.min(...Ik), Math.max(...Ik) + 1],
        className: sl(Gl)
      }
    }
    var bl = Ik(95),
      Rl = Ik(1118),
      Ul = Ik(4210);
    const Cl = 600,
      Nl = .5,
      cl = 4,
      Wl = 1200,
      fl = 140,
      Bl = 100,
      dl = 32,
      Yl = 16,
      Al = 100.5,
      gl = 90,
      ml = 1.5,
      hl = 50;

    function rl(kk) {
      switch (GI(kk)) {
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
    const Dl = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Ml(kk) {
      const Fk = Math.ceil(60 * kk / Bl);
      return {
        fuel: Math.max(dl, Fk),
        waste: Math.max(Yl, Fk)
      }
    }

    function ka(kk, Fk, Ik) {
      const [Xk, Tk, ik] = [kk - 2, Fk - 2, Ik - 2];
      return 2 * (Xk * Tk + Tk * ik + ik * Xk) * fl
    }

    function Fa(kk, Fk, Ik) {
      return Math.max(0, kk - 2) * Math.max(0, Fk - 2) * Math.max(0, Ik - 2)
    }

    function Ia(kk, Fk) {
      const [Ik, Xk, Tk] = kk, ik = Ik * Xk * Tk, yk = new Float32Array(ik);
      let lk = 0,
        ak = 0,
        qk = 0,
        Lk = 0,
        tk = 0;
      const Zk = (kk, ik, yk) => kk < 0 || kk >= Ik || ik < 0 || ik >= Xk || yk < 0 || yk >= Tk ? 0 : Fk[(ik * Tk + yk) * Ik + kk];
      for (let Hk = 0; Hk < Xk; Hk++)
        for (let kk = 0; kk < Tk; kk++)
          for (let Xk = 0; Xk < Ik; Xk++) {
            const ik = (Hk * Tk + kk) * Ik + Xk,
              jk = Fk[ik];
            if (1 === jk) {
              lk++;
              let Fk = 0;
              for (const [Ik, Tk, ik] of Dl) {
                const yk = Zk(Xk + Ik, Hk + Tk, kk + ik);
                1 !== yk && 2 !== yk || Fk++
              }
              yk[ik] = Cl * (1 + Nl * Math.min(Fk, cl)), Lk += yk[ik]
            } else if (2 === jk) ak++;
            else if (3 === jk) {
              qk++;
              Dl.some((Fk => {
                let [Ik, Tk, ik] = Fk;
                return 1 === Zk(Xk + Ik, Hk + Tk, kk + ik)
              })) && (tk += Wl)
            }
          }
      const jk = ka(Ik + 2, Xk + 2, Tk + 2),
        ek = Math.min(Lk, tk, jk),
        wk = lk > 0 ? Lk * Bl / lk : 0;
      return {
        rods: lk,
        graphite: ak,
        channels: qk,
        fuelHeat: Lk,
        cooling: tk,
        size: jk,
        max: ek,
        vol: ik,
        powerPerUnit: wk,
        pelletsPerMin: wk > 0 ? ek / wk * 60 : 0,
        waterPerS: ek * Mk.p,
        rodHeat: yk
      }
    }
    const Xa = 0,
      Ta = 1,
      ia = 6,
      ya = 7,
      la = 8;

    function aa(kk, Fk) {
      const [Ik, Xk, Tk] = kk, ik = new Uint8Array(Ik * Xk * Tk), yk = (kk, ik, yk) => kk < 0 || kk >= Ik || ik < 0 || ik >= Xk || yk < 0 || yk >= Tk ? 0 : Fk[(ik * Tk + yk) * Ik + kk];
      for (let lk = 0; lk < Xk; lk++)
        for (let kk = 0; kk < Tk; kk++)
          for (let Xk = 0; Xk < Ik; Xk++) {
            const ak = (lk * Tk + kk) * Ik + Xk,
              qk = Fk[ak];
            if (1 === qk) {
              let Fk = 0;
              for (const [Ik, Tk, ik] of Dl) {
                const ak = yk(Xk + Ik, lk + Tk, kk + ik);
                Fk += 1 === ak || 2 === ak ? 1 : 0
              }
              ik[ak] = Ta + Math.min(Fk, cl)
            } else if (3 === qk) {
              const Fk = Dl.some((Fk => {
                let [Ik, Tk, ik] = Fk;
                return 1 === yk(Xk + Ik, lk + Tk, kk + ik)
              }));
              ik[ak] = Fk ? ia : ya
            } else 2 === qk && (ik[ak] = la)
          }
      return ik
    }

    function qa(kk) {
      return kk.fuelHeat <= kk.cooling && kk.fuelHeat <= kk.size ? "fuel" : kk.cooling <= kk.size ? "cooling" : "size"
    }
    const La = gl;

    function ta(kk, Fk, Ik) {
      return Math.round(kk * Fk * Ik * 25e3 * (1 + .25 * (Math.min(kk, Fk, Ik) - 2)))
    }

    function Za(kk) {
      return Math.max(0, Math.min(Mk.e, kk))
    }

    function ja(kk, Fk, Ik) {
      const Xk = Fk * Za(Ik);
      return kk <= 0 ? 0 : Xk > 0 ? Math.min(200, 100 * kk / Xk) : 200
    }

    function ea(kk, Fk) {
      const Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? ml : 1;
      return Math.min(kk.fuelHeat * Ik, kk.cooling * Za(Fk), kk.size * Ik)
    }

    function wa(kk) {
      return 2 + kk / 10
    }
    const Ha = "buildAFactory2Game:";

    function Ja(kk) {
      var Fk;
      return null !== (Fk = kk.baf2RxMood) && void 0 !== Fk ? Fk : function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const Ik = [
          ["calm", 50],
          ["warm", La],
          ["hot", Al]
        ];
        for (const [Xk, Tk] of Ik)
          if (kk < Tk + (Xk === Fk ? 3 : 0)) return Xk;
        return "alarm"
      }(kk.baf2RxHeat)
    }
    const xa = 120;

    function Pa(kk) {
      const Fk = kk.baf2RxState;
      if ("running" === Fk && kk.baf2RxHeat > Al) return {
        label: `${Ha}rxState_tooHot`,
        tone: "bad",
        fix: `${Ha}rxFix_tooHot`
      };
      switch (Fk) {
        case "running":
          return {
            label: `${Ha}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Ha}rxState_idle`, tone: "off", fix: `${Ha}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Ha}rxState_scram`, tone: "off", fix: kk.baf2RxHeat < hl ? `${Ha}rxFix_scramCool` : `${Ha}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Ha}rxState_${Fk}`, tone: "off", fix: `${Ha}rxFix_${Fk}`
          };
        case "melted":
          return {
            label: `${Ha}rxState_melted`, tone: "bad", fix: `${Ha}rxFix_melted`
          };
        default:
          return {
            label: `${Ha}rxState_${Fk}`, tone: "warn", fix: `${Ha}rxFix_${Fk}`
          }
      }
    }

    function Ka(kk) {
      const [Fk, Ik, Xk] = kk.baf2RxStats;
      return {
        fuelHeat: Fk,
        cooling: Ik * (kk.baf2RxCryo ? Math.max(1, Za(kk.baf2RxWater / 100)) : 1),
        size: Xk
      }
    }

    function Qa(kk) {
      var Fk;
      const Ik = "idle" === kk.baf2RxState || "running" === kk.baf2RxState && kk.baf2RxHeat <= Al || "scram" === kk.baf2RxState && kk.baf2RxHeat < hl;
      if (0 === (kk.baf2RxFlags & QF) || !kk.baf2RxFormed || !Ik) return null;
      const {
        fuelHeat: Xk,
        cooling: Tk,
        size: ik
      } = Ka(kk), yk = Math.min(Xk, Tk, ik), lk = qa({
        fuelHeat: Xk,
        cooling: Tk,
        size: ik
      }), ak = "cooling" === lk && !0 === kk.baf2RxCryoOpen && !kk.baf2RxCryo, qk = null !== (Fk = kk.baf2RxCells) && void 0 !== Fk ? Fk : "", Lk = ("fuel" === lk || "cooling" === lk && !0 === kk.baf2RxCryo) && qk.length > 0 && !qk.includes(String(0)), tk = ak ? "Cryo" : "scram" === kk.baf2RxState ? "Off" : "";
      return yk < 12e3 ? {
        key: `${Ha}rxGrow_${Lk?"full":lk}${tk}`,
        amount: yk
      } : null
    }

    function sa(kk, Fk) {
      return kk[0] === Fk[0] && kk[1] === Fk[1] && kk[2] === Fk[2]
    }

    function Va(kk) {
      return [...kk].sort(((kk, Fk) => Number(Fk[2] < Fk[1]) - Number(kk[2] < kk[1])))
    }

    function za(kk, Fk) {
      return Fk.some((Fk => {
        let [Ik, Xk] = Fk;
        return !(Xk <= 0) && ["edge", "cap", "wall", "inside"].some((Fk => Ik === yX(kk, Fk)))
      }))
    }

    function Sa(kk, Fk, Ik) {
      const Xk = kk.baf2RxFuel - kk.baf2RxPu > 0 ? Ik : 0;
      return {
        full: kk.baf2RxWaste > Fk - 3,
        fullInS: Xk > 0 ? Math.max(0, Fk - kk.baf2RxWaste) / Xk : null
      }
    }
    const oa = {
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

    function va(kk) {
      return Ea[kk]
    }
    const Ea = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Oa(kk) {
      let [Fk, Ik, Xk] = kk;
      return Math.ceil(ka(Fk, Ik, Xk) * Mk.p)
    }

    function na(kk, Fk) {
      return "battery" === kk ? Fk[0] * Fk[1] * Fk[2] : function(kk) {
        let [Fk, Ik, Xk] = kk;
        return Fk * Ik * Xk - Math.max(0, Fk - 2) * Math.max(0, Ik - 2) * Math.max(0, Xk - 2)
      }(Fk) - 1
    }

    function Ga(kk) {
      const Fk = Math.max(0, kk);
      if (Fk < 10) return String(Math.round(10 * Fk) / 10);
      if (Fk < 1e4) return Math.round(Fk).toLocaleString("en-US");
      if (Fk < 1e6) return `${Fk<1e5?(Math.floor(Fk/100)/10).toFixed(1):Math.floor(Fk/1e3)}k`;
      const Ik = Fk / 1e6;
      return `${Ik<10?(Math.floor(100*Ik)/100).toFixed(2):Ik<100?(Math.floor(10*Ik)/10).toFixed(1):Math.floor(Ik)}M`
    }

    function pa(kk) {
      return kk <= 0 ? "0" : kk >= 10 ? String(Math.round(kk)) : kk.toFixed(kk >= 1 ? 1 : 2)
    }

    function ua(kk) {
      const Fk = MI(kk, 0),
        Ik = MI(kk, mI(kk) - 1);
      return {
        lo: [Math.min(Fk[0], Ik[0]), Math.min(Fk[1], Ik[1]), Math.min(Fk[2], Ik[2])],
        hi: [Math.max(Fk[0], Ik[0]) + 1, Math.max(Fk[1], Ik[1]) + 1, Math.max(Fk[2], Ik[2]) + 1]
      }
    }

    function ba(kk, Fk, Ik) {
      const Xk = [Fk[0] - kk[0], Fk[1] - kk[1], Fk[2] - kk[2]],
        Tk = [(kk[0] + Fk[0]) / 2, (kk[1] + Fk[1]) / 2, (kk[2] + Fk[2]) / 2],
        ik = [];
      for (let yk = 0; yk < 3; yk++) {
        const lk = (yk + 1) % 3,
          ak = (yk + 2) % 3;
        for (const qk of [kk[lk], Fk[lk]])
          for (const Lk of [kk[ak], Fk[ak]]) {
            const kk = [0, 0, 0],
              Fk = [Ik, Ik, Ik];
            kk[yk] = Tk[yk], Fk[yk] = Xk[yk] + Ik, kk[lk] = qk, kk[ak] = Lk, ik.push([kk, Fk])
          }
      }
      return ik
    }
    const Ra = "buildAFactory2Game:",
      Ua = [`${Ra}colNorth`, `${Ra}colEast`, `${Ra}colSouth`, `${Ra}colWest`];

    function Ca(kk, Fk) {
      const [Ik, Xk, Tk] = kk.baf2ColAt;
      return `baf2col ${Ik} ${Xk} ${Tk} ${Fk}`
    }

    function Na(kk) {
      return function(kk) {
        if (!Number.isFinite(kk)) return "";
        const Fk = Math.max(1, Math.round(kk));
        if (Fk < 60) return `${Fk}s`;
        const Ik = Fk % 60;
        return 0 === Ik ? Fk / 60 + "m" : `${Math.floor(Fk/60)}m ${Ik}s`
      }(function(kk) {
        const Fk = lX.FOCUS_BY_LASERS[Math.max(0, Math.min(4, kk))];
        return Fk > 0 ? lX.NOVA_FOCUS / Fk : 1 / 0
      }(kk))
    }

    function ca(kk) {
      const Fk = Math.abs(Math.round(kk));
      return Fk < 1e3 ? Math.round(kk).toLocaleString("en-US") : Fk < 1e6 ? `${Fk<1e5?(kk/1e3).toFixed(1).replace(/\.0$/,""):Math.round(kk/1e3)}k` : `${(kk/1e6).toFixed(Fk<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Wa(kk, Fk, Ik) {
      if (jX(Fk) >= 0) {
        const Fk = function(kk, Fk) {
          return kk.find((kk => {
            let {
              focus: Ik
            } = kk;
            return Ik[0] === Fk[0] && Ik[2] === Fk[2] && (Fk[1] === Ik[1] || Fk[1] === Ik[1] - 1)
          }))
        }(kk, Ik);
        if (!Fk) return null;
        const Tk = function(kk) {
          let Fk = 0,
            Ik = 0;
          for (let Xk = 0; Xk < 4; Xk++) Fk += kk.laser[Xk] ? 1 : 0, Ik += kk.live[Xk] ? 1 : 0;
          return {
            lasers: Fk,
            live: Ik,
            focusPerS: lX.FOCUS_BY_LASERS[Ik],
            drawPerS: lX.LASER_DRAW * Ik
          }
        }({
          laser: Fk.lasers,
          live: Fk.live
        });
        if (0 === Tk.lasers || "noLasers" === Fk.state) return {
          key: `${Ra}lookColNoLasers`
        };
        if (0 === Tk.live) return {
          key: `${Ra}lookColOff_blocked`
        };
        if (!(Fk.on && Tk.live > 0) && ("running" !== (Xk = Fk.state) && "slowed" !== Xk)) return {
          key: `${Ra}lookColOff_${Fk.state}`
        };
        if (Tk.live < Tk.lasers) return {
          key: `${Ra}lookColLasersSome`,
          params: {
            lasers: String(Tk.lasers),
            live: String(Tk.live)
          }
        };
        const ik = Fk.open.filter(Boolean).length;
        return ik < 4 ? {
          key: `${Ra}lookColLasersSpots`,
          params: {
            live: String(Tk.live),
            spots: String(ik),
            time: Na(Tk.live)
          }
        } : {
          key: `${Ra}lookColLasers`,
          params: {
            live: String(Tk.live),
            time: Na(Tk.live)
          }
        }
      }
      var Xk;
      if (!eX(Fk)) return null;
      const Tk = function(kk, Fk) {
        for (const Ik of kk) {
          const kk = xX(Ik.focus, [Fk[0], Fk[1], Fk[2]]);
          if (kk && kk.BL === lX.LASER_D && Ik.lasers[kk.dir]) return {
            entry: Ik,
            dir: kk.dir
          }
        }
        return null
      }(kk, Ik);
      if (!Tk) return {
        key: `${Ra}lookLaserNoCollider`
      };
      const {
        entry: ik,
        dir: yk
      } = Tk;
      return ik.open[yk] ? ik.live[yk] ? {
        key: ik.on ? `${Ra}lookLaserFiring` : `${Ra}lookLaserReady`
      } : {
        key: `${Ra}lookLaserBlocked`
      } : {
        key: `${Ra}lookLaserClosed`
      }
    }

    function fa(kk, Fk) {
      const Ik = [];
      for (let Xk = 1; Xk < lX.LASER_D; Xk++) kk & 1 << Fk * (lX.LASER_D - 1) + Xk - 1 && Ik.push(Xk);
      return Ik
    }
    const Ba = {
      firing: `${Ra}colSlotFiring`,
      ready: `${Ra}colSlotReady`,
      blocked: `${Ra}colSlotBlocked`,
      empty: `${Ra}colSlotEmpty`,
      closed: `${Ra}colSlotClosed`
    };

    function da(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const ik = yT(kk),
        yk = yT(Fk),
        lk = yT(Ik),
        ak = lk.filter(Boolean).length,
        qk = ik.filter(Boolean).length,
        Lk = [0, 1, 2, 3].map((kk => yk[kk] ? ik[kk] ? lk[kk] ? Xk ? "firing" : "ready" : "blocked" : (kk => fa(Tk, kk).length > 0)(kk) ? "blocked" : "empty" : "closed")),
        tk = Lk.indexOf("blocked"),
        Zk = tk < 0 && qk > 0 ? Lk.indexOf("empty") : -1;
      return Lk.map(((kk, Fk) => {
        const Ik = Fk === tk ? {
          key: `${Ra}colSlotClear`
        } : Fk === Zk ? {
          key: `${Ra}colSlotAdd`,
          params: {
            time: Na(Math.min(4, ak + 1))
          }
        } : null;
        return {
          dir: Fk,
          tone: kk,
          title: {
            key: "blocked" !== kk || ik[Fk] ? Ba[kk] : `${Ra}colSlotGap`,
            keys: {
              dir: Ua[Fk]
            }
          },
          hint: Ik
        }
      }))
    }

    function Ya(kk) {
      var Fk;
      return "noPower" === kk.baf2ColState && kk.baf2ColRxState ? Pa({
        baf2RxState: kk.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (Fk = kk.baf2ColRxHeat) && void 0 !== Fk ? Fk : 0
      }) : null
    }

    function Aa(kk) {
      const Fk = yT(kk.baf2ColSpots).filter(Boolean).length,
        Ik = yT(kk.baf2ColLive);
      let Xk = 0,
        Tk = 0;
      return yT(kk.baf2ColLasers).forEach(((kk, Fk) => {
        kk && (Xk++, Tk += Ik[Fk] ? 0 : 1)
      })), Tk > 0 ? {
        key: `${Ra}colSubSome`,
        params: {
          blocked: String(Tk),
          lasers: String(Xk)
        }
      } : Fk < 4 ? {
        key: `${Ra}colSubSpots`,
        params: {
          lasers: String(Xk),
          spots: String(Fk)
        }
      } : {
        key: `${Ra}colSub`,
        params: {
          lasers: String(Xk)
        }
      }
    }

    function ga(kk) {
      const Fk = Ya(kk);
      if ("idle" === kk.baf2ColRxState && Fk) return {
        key: `${Ra}colState_noPowerIdle`
      };
      if (Fk) return {
        key: `${Ra}colState_noPowerReactor`,
        keys: {
          state: Fk.label
        }
      };
      if ("noInput" !== kk.baf2ColState) return {
        key: `${Ra}colState_${kk.baf2ColState}`
      };
      const Ik = String(Math.max(0, lX.NOVA_SA - kk.baf2ColSa)),
        Xk = String(Math.max(0, lX.NOVA_GD - kk.baf2ColGd));
      return "0" !== Ik && "0" !== Xk ? {
        key: `${Ra}colState_noInput`,
        params: {
          sa: Ik,
          gd: Xk
        }
      } : "0" !== Ik ? {
        key: `${Ra}colState_noStarAlloy`,
        params: {
          sa: Ik
        }
      } : "0" !== Xk ? {
        key: `${Ra}colState_noGlowDust`,
        params: {
          gd: Xk
        }
      } : {
        key: `${Ra}colState_running`
      }
    }

    function ma(kk) {
      return kk.baf2ColP < 0 ? `${Ra}colNext` : function(kk) {
        const Fk = kk.baf2ColState;
        return kk.baf2ColP >= 0 && ("blocked" === Fk || "noLasers" === Fk || "noPower" === Fk)
      }(kk) ? `${Ra}colStalled` : null === ha(kk) ? `${Ra}colMaking` : `${Ra}colNovaIn`
    }

    function ha(kk) {
      if (kk.baf2ColP < 0 || kk.baf2ColWant <= 0) return null;
      const Fk = kk.baf2ColFocusPerS * Math.min(1, kk.baf2ColDraw / kk.baf2ColWant);
      return Fk > 0 ? Math.max(0, lX.NOVA_FOCUS - kk.baf2ColP) / Fk : null
    }

    function ra(kk, Fk) {
      const Ik = [];
      for (let Xk = 1; Xk <= 3; Xk++) {
        const Tk = [kk[0], kk[1] - Xk, kk[2]];
        if (!Fk(Tk)) return Ik;
        Ik.push(Tk)
      }
      return []
    }

    function Da(kk, Fk) {
      const Ik = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Xk = 0; Xk < 4; Xk++) {
        const Tk = Xk,
          ik = JX(kk.focus, Tk, lX.LASER_D);
        if (kk.lasers[Xk] || !kk.open[Xk] || !Fk(ik)) continue;
        const yk = [];
        for (let Ik = 1; Ik < lX.LASER_D; Ik++) {
          const Xk = JX(kk.focus, Tk, Ik);
          Fk(Xk) || yk.push(Xk)
        }
        Ik.supports.push(...ra(ik, Fk)), 0 === yk.length ? Ik.free.push(ik) : (Ik.blocked.push(ik), Ik.gaps.push(...yk))
      }
      return Ik
    }
    const Ma = lX.LASER_D - .25,
      kq = 4,
      Fq = 2,
      Iq = 16;
    const Xq = {
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
        blendMode: Ul.d.Standard,
        soft: !0
      },
      Tq = {
        green: Xq,
        pink: {
          ...Xq,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function iq(kk, Fk) {
      const Ik = {
        ...Fk.params
      };
      for (const [Tk, ik] of Object.entries(null !== (Xk = Fk.keys) && void 0 !== Xk ? Xk : {})) {
        var Xk;
        Ik[Tk] = kk(ik)
      }
      return Ik
    }
    const yq = "buildAFactory2Game:",
      lq = 2 * lX.LASER_D + 1,
      aq = lX.LASER_D;

    function qq(kk) {
      return kk(`${yq}colFocusTip`, {
        need: ca(lX.NOVA_FOCUS)
      })
    }

    function Lq(kk, Fk) {
      return kk(Fk.key, iq(kk, Fk))
    }

    function tq(kk) {
      const Fk = kk.getStatus();
      return {
        status: Fk,
        entry: Fk ? kk.entryAtRoot(Fk.baf2ColAt) : void 0
      }
    }

    function Zq(kk, Fk) {
      return {
        left: 100 * (aq + kk) / lq + "%",
        top: 100 * (aq + Fk) / lq + "%"
      }
    }

    function jq(kk) {
      let {
        status: Fk,
        entry: Ik
      } = kk;
      const Xk = yT(Fk.baf2ColLasers),
        Tk = yT(Fk.baf2ColSpots),
        ik = yT(Fk.baf2ColLive),
        yk = !0 === (null === Ik || void 0 === Ik ? void 0 : Ik.on),
        lk = lX.LASER_D,
        ak = [];
      for (let jk = 0; jk < 4; jk++) {
        const [kk, , Fk] = HX[jk];
        if (ik[jk]) {
          const Ik = 100 * (lk - 1) / lq,
            Xk = kk + Fk > 0 ? 100 * (aq + 1) / lq : 100 * (aq - (lk - 1)) / lq,
            Tk = 100 * (aq + .35) / lq,
            ik = 30 / lq,
            qk = 0 !== kk ? {
              left: `${Xk}%`,
              width: `${Ik}%`,
              top: `${Tk}%`,
              height: `${ik}%`
            } : {
              top: `${Xk}%`,
              height: `${Ik}%`,
              left: `${Tk}%`,
              width: `${ik}%`
            };
          ak.push((0, Si.jsx)("i", {
            className: VT()("Baf2ColDiagramBeam", {
              Off: !yk
            }),
            style: qk
          }, `beam${jk}`))
        }
        const Ik = Xk[jk] ? "Baf2ColDiagramLaser" : Tk[jk] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        ak.push((0, Si.jsx)("i", {
          className: Ik,
          style: Zq(kk * lk, Fk * lk)
        }, `spot${jk}`))
      }
      for (let jk = 0; jk < 4; jk++) {
        if (Xk[jk] || !Tk[jk]) continue;
        const [kk, , Ik] = HX[jk];
        for (const Xk of fa(null !== (qk = Fk.baf2ColGaps) && void 0 !== qk ? qk : 0, jk)) {
          var qk;
          ak.push((0, Si.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Zq(kk * Xk, Ik * Xk)
          }, `gap${jk},${Xk}`))
        }
      }
      for (const [jk, , ek] of null !== (Lk = null === Ik || void 0 === Ik ? void 0 : Ik.blockers) && void 0 !== Lk ? Lk : []) {
        var Lk, tk, Zk;
        const kk = jk - (null !== (tk = null === Ik || void 0 === Ik ? void 0 : Ik.focus[0]) && void 0 !== tk ? tk : 0),
          Fk = ek - (null !== (Zk = null === Ik || void 0 === Ik ? void 0 : Ik.focus[2]) && void 0 !== Zk ? Zk : 0);
        ak.push((0, Si.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Zq(kk, Fk)
        }, `block${kk},${Fk}`))
      }
      return (0, Si.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [ak, (0, Si.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function eq(kk) {
      let {
        status: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)(), Xk = yT(Fk.baf2ColLive).filter(Boolean).length;
      return (0, Si.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Si.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: qq(Ik),
          children: Ik(`${yq}colLadder`)
        }), (0, Si.jsx)("ul", {
          children: [1, 2, 3, 4].map((kk => (0, Si.jsx)("li", {
            className: VT()({
              On: kk === Xk
            }),
            children: Ik(`${yq}colLadderChip`, {
              lasers: String(kk),
              time: Na(kk)
            })
          }, kk)))
        })]
      })
    }

    function wq(kk) {
      let {
        item: Fk,
        eq: Ik,
        need: Xk,
        cap: Tk
      } = kk;
      const {
        t: ik
      } = (0, vT.y)(), yk = Math.min(Ik, Xk);
      return (0, Si.jsxs)("li", {
        className: VT()("Baf2ColTile", {
          Short: Ik < Xk
        }),
        children: [(0, Si.jsx)(Hq, {
          item: Fk
        }), (0, Si.jsx)("b", {
          className: "Baf2ColTileValue",
          children: ik(`${yq}colOutOf`, {
            amount: String(yk),
            cap: String(Xk)
          })
        }), (0, Si.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Si.jsx)("i", {
            style: {
              width: 100 * yk / Xk + "%"
            }
          })
        }), Ik > Xk && (0, Si.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: ik(`${yq}colIntakeHeld`, {
            amount: String(Ik),
            cap: String(Tk)
          })
        })]
      })
    }

    function Hq(kk) {
      let {
        item: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)();
      return (0, Si.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Si.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Si.jsx)(OT.d, {
            itemName: Fk,
            amount: 0
          })
        }), (0, Si.jsx)("span", {
          className: "Baf2ColTileName",
          children: Ti(Ik, Fk)
        })]
      })
    }

    function Jq(kk) {
      switch (kk.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function xq(kk) {
      var Fk, Ik, Tk;
      let {
        store: ik,
        close: yk
      } = kk;
      const {
        t: lk
      } = (0, vT.y)(), ak = By(), {
        status: qk,
        entry: Lk
      } = function(kk) {
        const [Fk, Ik] = (0, Xk.useState)((() => tq(kk)));
        return (0, Xk.useEffect)((() => (Ik(tq(kk)), kk.subscribe((() => {
          Ik(tq(kk))
        })))), [kk]), Fk
      }(ik), [tk, Zk] = (0, Xk.useState)(null), jk = null === qk || void 0 === qk ? void 0 : qk.baf2ColHold;
      (0, Xk.useEffect)((() => {
        Zk(null)
      }), [jk]);
      const ek = (0, Xk.useRef)({
          p: -1,
          n: 0
        }),
        wk = null !== (Fk = null === qk || void 0 === qk ? void 0 : qk.baf2ColP) && void 0 !== Fk ? Fk : -1;
      wk < ek.current.p && ek.current.n++, ek.current.p = wk;
      const Hk = (0, Xk.useRef)(null),
        [Jk] = (0, Xk.useState)((() => {
          return (kk = ik.heldAtOpen()) === LX || kk === tX ? {
            key: `${Ra}colBeltItIn`,
            item: kk
          } : null;
          var kk
        }));
      if (!qk) return null;
      const xk = qk.baf2ColMember,
        Pk = qk.baf2ColP >= 0,
        Kk = function(kk, Fk) {
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
        }(qk, Hk.current);
      Hk.current = Kk.draw > 0 ? Kk : null;
      const Qk = "slowed" === qk.baf2ColState || "noPower" === qk.baf2ColState,
        sk = ha(qk),
        Vk = null !== tk && void 0 !== tk ? tk : qk.baf2ColHold,
        zk = function(kk) {
          var Fk, Ik;
          return "idle" === kk.baf2ColRxState ? null : null !== (Fk = null === (Ik = Ya(kk)) || void 0 === Ik ? void 0 : Ik.fix) && void 0 !== Fk ? Fk : null
        }(qk),
        Sk = null === zk && null === Jk ? function(kk) {
          var Fk;
          const Ik = kk.baf2ColSentTo;
          if (!Ik) return null;
          const Xk = null !== (Fk = kk.baf2ColSentHeld) && void 0 !== Fk ? Fk : null;
          return {
            key: null === Xk ? `${Ra}colNovaSentToMachine` : `${Ra}colNovaSentTo`,
            target: Ik,
            eq: Xk
          }
        }(qk) : null,
        vk = Pk ? lk(`${yq}colFocusOf`, {
          focus: ca(qk.baf2ColP),
          need: ca(lX.NOVA_FOCUS)
        }) : null;
      return (0, Si.jsx)(Vy.c, {
        close: yk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Si.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Si.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Si.jsx)(OT.d, {
                  itemName: aX,
                  amount: 0
                })
              }), (0, Si.jsxs)("div", {
                children: [(0, Si.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: Ti(lk, aX)
                }), (0, Si.jsx)("p", {
                  children: Lq(lk, Aa(qk))
                })]
              })]
            }), (0, Si.jsx)(zy.k, {
              onClick: yk
            })]
          }), (0, Si.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Si.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Si.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Si.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: lk(ma(qk), {
                    time: null === sk ? "" : Qi(lk, sk)
                  })
                }), (0, Si.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Si.jsx)("i", {
                    style: {
                      width: (Pk ? 100 * qk.baf2ColP / lX.NOVA_FOCUS : 0) + "%"
                    }
                  }, ek.current.n)
                }), (0, Si.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Si.jsxs)("span", {
                    title: qq(lk),
                    children: [(0, Si.jsx)("b", {
                      children: ca(Kk.focus)
                    }), " ", lk(`${yq}colFocusPerS`)]
                  }), (0, Si.jsxs)("span", {
                    className: VT()("Baf2ColDraw", {
                      Short: Qk
                    }),
                    children: [(0, Si.jsx)(ET.e, {
                      name: "bolt"
                    }), Qk ? lk(`${yq}colDrawOf`, {
                      draw: ca(qk.baf2ColDraw),
                      want: ca(qk.baf2ColWant)
                    }) : lk(`${yq}colPowerPerS`, {
                      rate: ca(Kk.draw)
                    })]
                  }), null !== vk && (0, Si.jsx)("span", {
                    className: "Soft",
                    children: vk
                  })]
                })]
              }), (0, Si.jsx)("p", {
                className: VT()("Baf2ColState", Jq(qk)),
                children: Lq(lk, ga(qk))
              }), null !== zk && (0, Si.jsx)("p", {
                className: "Baf2ColStateFix",
                children: lk(zk)
              }), null === zk && null !== Jk && (0, Si.jsx)("p", {
                className: "Baf2ColStateFix",
                children: lk(Jk.key, {
                  item: Ti(lk, Jk.item)
                })
              }), Sk && (0, Si.jsx)("p", {
                className: "Baf2ColStateFix",
                children: lk(Sk.key, {
                  target: Ti(lk, Sk.target),
                  amount: String(null !== (Ik = Sk.eq) && void 0 !== Ik ? Ik : 0)
                })
              }), (0, Si.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Si.jsx)(wq, {
                  item: LX,
                  eq: qk.baf2ColSa,
                  need: lX.NOVA_SA,
                  cap: lX.SA_CAP
                }), (0, Si.jsx)(wq, {
                  item: tX,
                  eq: qk.baf2ColGd,
                  need: lX.NOVA_GD,
                  cap: lX.GD_CAP
                }), (0, Si.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Si.jsx)(Hq, {
                    item: "Nova Matter"
                  }), (0, Si.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: lk(`${yq}colNovaHeld`, {
                      amount: String(qk.baf2ColOut),
                      cap: String(lX.OUT_CAP)
                    })
                  }), xk && (0, Si.jsx)(zy.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === qk.baf2ColOut,
                    onClick: () => {
                      ak.send(Ca(qk, "take"))
                    },
                    children: lk(`${yq}colTake`)
                  })]
                })]
              }), xk && (0, Si.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Vk,
                className: VT()("Baf2ColHold", {
                  On: Vk
                }),
                onClick: kk => {
                  kk.detail > 0 && kk.currentTarget.blur(), Zk(!Vk), ak.send(Ca(qk, "hold " + (Vk ? 0 : 1)))
                },
                children: [(0, Si.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Si.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Si.jsx)("b", {
                    children: lk(`${yq}colHold`)
                  }), (0, Si.jsx)("span", {
                    children: lk(`${yq}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Si.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Si.jsx)(jq, {
                status: qk,
                entry: Lk
              }), (0, Si.jsx)("ul", {
                className: "Baf2ColSlots",
                children: da(qk.baf2ColLasers, qk.baf2ColSpots, qk.baf2ColLive, Kk.beamsOn, null !== (Tk = qk.baf2ColGaps) && void 0 !== Tk ? Tk : 0).map((kk => (0, Si.jsxs)("li", {
                  className: kk.tone,
                  children: [(0, Si.jsx)("b", {
                    children: Lq(lk, kk.title)
                  }), null !== kk.hint && (0, Si.jsx)("span", {
                    children: Lq(lk, kk.hint)
                  })]
                }, kk.dir)))
              }), (0, Si.jsx)(eq, {
                status: qk
              })]
            })]
          })]
        })
      })
    }
    const Pq = "buildAFactory2Game:",
      Kq = 36e5,
      Qq = 864e5;

    function sq(kk, Fk, Ik) {
      return Math.max(0, Math.ceil((kk + Fk - Math.max(Ik, kk)) / 1e3))
    }

    function Vq(kk) {
      return kk.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function zq(kk) {
      return "Homestead" === kk
    }

    function Sq(kk) {
      return function(kk) {
        let Fk = 0;
        for (const Ik of kk) {
          const kk = /^Island ([1-9]\d{0,5})$/.exec(Ik);
          kk && (Fk = Math.max(Fk, Number(kk[1])))
        }
        return `Island ${Fk+1}`
      }(kk.map((kk => kk.baf2IslandName)))
    }

    function oq(kk, Fk) {
      return function(kk) {
        return `${Pq}islandsBlocked${kk[0].toUpperCase()}${kk.slice(1)}`
      }("degraded" === kk && 0 === Fk ? "stuck" : kk)
    }

    function vq(kk) {
      return kk.filter((kk => {
        var Fk;
        return !kk.baf2IslandActive && void 0 === kk.baf2IslandUnreadable && void 0 === (null === (Fk = kk.baf2IslandCoop) || void 0 === Fk ? void 0 : Fk.baf2CoopState)
      })).length
    }

    function Eq(kk) {
      return "coopMoving" === kk || "coopUnreachable" === kk
    }

    function Oq(kk, Fk) {
      const Ik = Fk > 0;
      return {
        change: null === kk && !Ik,
        switch: (null === kk || "degraded" === kk || Eq(kk)) && !Ik,
        rename: "loading" !== kk && "degraded" !== kk && "stuck" !== kk
      }
    }

    function nq(kk, Fk) {
      return void 0 === kk || "corrupt" === kk && Fk
    }
    const Gq = Ry;

    function pq(kk, Fk, Ik) {
      if (null !== kk && void 0 !== kk && kk.untilGone) {
        var Xk;
        return !("dismiss" === kk.untilGone && void 0 === (null === (Xk = Fk.baf2IslandCoop) || void 0 === Xk ? void 0 : Xk.baf2CoopState)) && Ik - kk.atMs < 32500
      }
      return void 0 !== kk && Ik - kk.atMs < Gq && Fk.baf2IslandName === kk.from
    }
    const uq = Ry;

    function bq(kk) {
      return "core" === (null === kk || void 0 === kk ? void 0 : kk.kind) ? kk.core : "islands" === (null === kk || void 0 === kk ? void 0 : kk.kind) ? kk.backToCore : void 0
    }

    function Rq(kk) {
      return `\0${kk}\0`
    }

    function Uq(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Xk = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const ik of Object.keys(Ik)) Xk[ik] = Rq(ik);
      let Tk = Object.keys(Xk).length > 0 ? kk(Fk, Xk) : kk(Fk);
      for (const [ik, yk] of Object.entries(Ik)) Tk = Tk.split(Rq(ik)).join(yk);
      return Tk
    }

    function Cq(kk, Fk) {
      return kk ? Fk ? "enabled" : "disabled" : "hidden"
    }
    const Nq = {
      removed: `${Pq}islandsCoopRemoved`,
      deleted: `${Pq}islandsCoopDeleted`,
      notReady: `${Pq}islandsCoopNotReady`,
      gone: `${Pq}islandsCoopGone`
    };

    function cq(kk) {
      var Fk;
      return "member" !== (null === (Fk = kk.baf2IslandCoop) || void 0 === Fk ? void 0 : Fk.baf2CoopRole) && "newer" !== kk.baf2IslandUnreadable
    }

    function Wq(kk, Fk, Ik, Xk, Tk, ik) {
      const yk = kk.baf2IslandActive,
        lk = kk.baf2IslandUnreadable,
        ak = kk.baf2IslandCoop,
        qk = function(kk, Fk, Ik) {
          return {
            switch: kk.switch && void 0 === Fk,
            delete: kk.change && nq(Fk, Ik)
          }
        }(Fk, lk, Xk),
        Lk = yk && void 0 !== ak && void 0 === ak.baf2CoopState && "coopUnreachable" === ik,
        tk = {
          switch: Cq((!yk || Lk) && void 0 === lk, Lk || qk.switch),
          switchLabel: Lk ? "tryAgain" : "switch",
          rename: Cq(!0, Fk.rename),
          delete: Cq(!yk, qk.delete),
          deleteWaits: !yk && nq(lk, Xk),
          people: Cq(void 0 !== kk.baf2IslandInvitable || Tk && yk && void 0 === lk && void 0 === ak, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Zk = !yk && qk.delete;
      if (void 0 === ak) return Ik ? {
        ...tk,
        delete: Cq(!yk, !1),
        deleteWaits: !1,
        note: Zk ? {
          key: `${Pq}islandsCoopKeepOwn`
        } : null
      } : tk;
      const jk = ak.baf2CoopState,
        ek = ak.baf2CoopMembers.length > 1,
        wk = {
          ...tk,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== jk && "member" === ak.baf2CoopRole) return {
        ...wk,
        dismiss: Cq(!0, Fk.rename),
        note: {
          key: Nq[jk],
          names: {
            owner: ak.baf2CoopOwner
          }
        }
      };
      if (void 0 !== jk) {
        let kk = {
          key: `${Pq}islandsCoopOwnLost`
        };
        return Zk && ek ? kk = {
          key: `${Pq}islandsCoopDeleteMembers`
        } : Zk && Ik && (kk = {
          key: `${Pq}islandsCoopKeepOwn`
        }), {
          ...wk,
          delete: Cq(!yk, qk.delete && !ek && !Ik),
          deleteWaits: tk.deleteWaits && !ek && !Ik,
          note: kk
        }
      }
      if ("member" === ak.baf2CoopRole) return {
        ...tk,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Cq(!0, yk ? Fk.switch : Fk.rename)
      };
      const Hk = ak.baf2CoopManageHere;
      let Jk = null;
      var xk;
      Hk || yk ? Zk && ek ? Jk = {
        key: `${Pq}islandsCoopDeleteMembers`
      } : Zk && Ik && (Jk = {
        key: `${Pq}islandsCoopKeepOwn`
      }) : Jk = {
        key: null !== (xk = ak.baf2CoopLeft) && void 0 !== xk && xk.length ? `${Pq}islandsCoopManageThereClaim` : `${Pq}islandsCoopManageThere`
      };
      return {
        ...tk,
        rename: Cq(!0, Fk.rename && Hk),
        delete: Cq(!yk, qk.delete && !ek && !Ik),
        deleteWaits: tk.deleteWaits && !ek && !Ik,
        people: "enabled",
        peopleLabel: "players",
        unshare: Cq(Hk && yk && !ek, Fk.change),
        remove: Hk,
        note: Jk
      }
    }

    function fq(kk) {
      var Fk;
      const Ik = kk.baf2IslandCoop;
      if ("owner" !== (null === Ik || void 0 === Ik ? void 0 : Ik.baf2CoopRole) || void 0 !== Ik.baf2CoopState || null === (Fk = Ik.baf2CoopLeft) || void 0 === Fk || !Fk.length) return null;
      const Xk = kk.baf2IslandActive && Ik.baf2CoopManageHere;
      return {
        left: Ik.baf2CoopLeft,
        claim: Xk,
        goThere: !Xk && Ik.baf2CoopManageHere
      }
    }

    function Bq(kk) {
      return kk.baf2CoopMembers.length >= kk.baf2CoopMax
    }

    function dq(kk, Fk, Ik) {
      return void 0 !== kk && Fk < kk.answer && Ik - kk.atMs < Gq
    }
    const Yq = "buildAFactory2Game:";

    function Aq(kk, Fk) {
      return {
        onKeyDown: Ik => {
          Ik.stopPropagation(), Ik.nativeEvent.isComposing || 229 === Ik.nativeEvent.keyCode || ("Enter" === Ik.key ? (Ik.preventDefault(), kk()) : "Escape" === Ik.key && (Ik.preventDefault(), Fk()))
        }
      }
    }

    function gq(kk) {
      return {
        onKeyDown: Fk => {
          "Escape" !== Fk.key || Fk.nativeEvent.isComposing || (Fk.preventDefault(), Fk.stopPropagation(), kk())
        }
      }
    }

    function mq(kk) {
      kk.currentTarget.select()
    }

    function hq(kk, Fk) {
      (0, Xk.useEffect)((() => {
        var Ik;
        kk && (null === (Ik = Fk.current) || void 0 === Ik || Ik.scrollIntoView({
          block: "nearest"
        }))
      }), [kk, Fk])
    }

    function rq(kk) {
      const [Fk, Ik] = (0, Xk.useState)(null);
      return (0, Xk.useEffect)((() => {
        const Fk = document.querySelector(".UiRequests"),
          Xk = kk.current;
        if (!Fk || !Xk || "undefined" === typeof ResizeObserver) return;
        const Tk = () => {
          const kk = Fk.getBoundingClientRect(),
            Tk = Xk.getBoundingClientRect(),
            ik = Xk.parentElement,
            yk = ik && parseFloat(getComputedStyle(ik).paddingTop) || 0,
            lk = function(kk, Fk, Ik, Xk) {
              if (!kk || kk.height <= 0 || kk.right <= Fk.left || kk.left >= Fk.right) return null;
              const Tk = Math.max(Xk, kk.bottom + 8);
              return {
                marginTop: Math.round(Tk - Xk),
                maxHeight: Math.max(0, Math.floor(Ik - Tk - Xk))
              }
            }(kk, Tk, window.innerHeight, yk);
          Ik((kk => (null === kk || void 0 === kk ? void 0 : kk.marginTop) === (null === lk || void 0 === lk ? void 0 : lk.marginTop) && (null === kk || void 0 === kk ? void 0 : kk.maxHeight) === (null === lk || void 0 === lk ? void 0 : lk.maxHeight) ? kk : lk))
        };
        Tk();
        const ik = new ResizeObserver(Tk);
        return ik.observe(Fk), window.addEventListener("resize", Tk), () => {
          ik.disconnect(), window.removeEventListener("resize", Tk)
        }
      }), [kk]), Fk
    }

    function Dq() {
      (0, Xk.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function Mq(kk) {
      (0, Xk.useEffect)((() => {
        var Fk;
        null === (Fk = kk.current) || void 0 === Fk || Fk.focus()
      }), [kk])
    }

    function kL(kk) {
      const [Fk, Ik] = (0, Xk.useState)(Date.now);
      return (0, Xk.useEffect)((() => {
        const Fk = window.setInterval((() => {
          Ik(Date.now())
        }), kk);
        return () => {
          window.clearInterval(Fk)
        }
      }), [kk]), Fk
    }

    function FL(kk) {
      let {
        tier: Fk,
        t: Ik
      } = kk;
      const {
        kind: Xk,
        short: Tk
      } = Hk(Fk), ik = jk(Fk, ek), yk = Ik(`${Yq}${ik.key}`, {
        ...ik.params,
        name: Ik(`${Yq}${Jk(Fk).nameKey}`)
      });
      return (0, Si.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Si.jsx)("span", {
          className: VT()("Baf2IslandTierPip", {
            Stage: "tier" !== Xk
          }),
          "aria-hidden": "true",
          children: Tk
        }), yk]
      })
    }

    function IL(kk) {
      let {
        note: Fk,
        className: Ik,
        t: Xk
      } = kk;
      return (0, Si.jsx)("p", {
        className: VT()("Baf2IslandNote", Ik),
        children: Uq(Xk, Fk.key, Fk.names, Fk.params)
      })
    }
    const XL = "buildAFactory2Game:";

    function TL(kk) {
      let {
        message: Fk,
        arrivedAtMs: Ik,
        close: Tk,
        leave: ik
      } = kk;
      const yk = By(),
        {
          t: lk
        } = (0, vT.y)(),
        ak = kL(1e3),
        qk = (0, Xk.useRef)(null);
      Dq(), (0, Xk.useEffect)((() => {
        var kk;
        null === (kk = qk.current) || void 0 === kk || kk.focus()
      }), []);
      const Lk = sq(Ik, Fk.baf2TransferInMs, ak),
        tk = Ik + Fk.baf2TransferInMs - 1e3,
        [Zk, jk] = (0, Xk.useState)(null);
      (0, Xk.useEffect)((() => {
        const kk = window.setTimeout((() => {
          jk(tk)
        }), Math.max(0, tk - Date.now()));
        return () => {
          window.clearTimeout(kk)
        }
      }), [tk]);
      const ek = Zk === tk || ak >= tk,
        wk = Fk.baf2TransferIsland,
        Hk = Fk.baf2TransferOwner;
      return (0, Si.jsx)(Vy.c, {
        close: Tk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Si.jsxs)("section", {
          ref: qk,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsxs)("div", {
              children: [(0, Si.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === Hk ? Uq(lk, `${XL}islandsTransferOwn`, {
                  island: wk
                }) : Uq(lk, `${XL}islandsTransfer`, {
                  island: wk,
                  owner: Hk
                })
              }), (0, Si.jsx)("p", {
                children: ek ? lk(`${XL}islandsTransferNow`) : lk(`${XL}islandsTransferIn`, {
                  time: Qi(lk, Lk)
                })
              })]
            }), (0, Si.jsx)(zy.k, {
              ariaLabel: lk(`${XL}islandsClose`),
              onClick: Tk
            })]
          }), !ek && (0, Si.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Si.jsx)("p", {
              className: "Baf2TransferNote",
              children: lk(`${XL}islandsTransferNote`)
            }), (0, Si.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Si.jsx)(zy.d, {
                onClick: () => {
                  yk.send("baf2coopstay"), ik()
                },
                children: lk(`${XL}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var iL = Ik(1402),
      yL = Ik(1129),
      lL = Ik.n(yL);
    const aL = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const qL = "buildAFactory2Game:",
      LL = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function tL(kk, Fk, Ik) {
      return void 0 === Fk ? Ik : "string" === typeof Fk ? Fk : Array.isArray(Fk) ? Fk.map((Fk => "string" === typeof Fk ? Fk : "translationKey" in Fk ? kk(Fk.translationKey) : "")).join("") : kk(Fk.translationKey)
    }

    function ZL(kk) {
      const Fk = {};
      for (const [Ik, Xk] of Object.entries(null !== kk && void 0 !== kk ? kk : {})) Fk[Ik] = Xk < 0 ? Ki(Xk) : Xk.toLocaleString("en-US");
      return Fk
    }

    function jL(kk, Fk) {
      const Ik = Fk ? "touch" : "mouse";
      return {
        use: kk(`${qL}lookUse_${Ik}`),
        Use: kk(`${qL}lookUseStart_${Ik}`)
      }
    }
    const eL = (0, Xk.memo)((function(kk) {
      let {
        item: Fk
      } = kk;
      return (0, Si.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Si.jsx)(OT.d, {
          itemName: Fk,
          amount: 0
        })
      })
    }));

    function wL(kk) {
      let {
        label: Fk,
        percent: Ik,
        progress: Xk
      } = kk;
      return (0, Si.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Si.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${Fk}: ${Xk}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Ik,
          children: (0, Si.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${Ik}%`
            }
          })
        }), (0, Si.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Xk
        })]
      })
    }

    function HL(kk) {
      let {
        chips: Fk
      } = kk;
      return (0, Si.jsx)("span", {
        className: "Baf2QuestChips",
        children: Fk.map((kk => {
          let [Fk, Ik, Xk] = kk;
          const Tk = Ik >= Xk;
          return (0, Si.jsxs)("span", {
            className: VT()("Baf2QuestChip", {
              Met: Tk
            }),
            children: [(0, Si.jsx)(eL, {
              item: Fk
            }), (0, Si.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Tk ? `\u2713${Xk}` : `${Ik}/${Xk}`
            })]
          }, Fk)
        }))
      })
    }

    function JL(kk, Fk) {
      const {
        key: Ik,
        params: Xk
      } = jk(Fk, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return kk(`${qL}${Ik}`, {
        ...Xk,
        name: kk(`${qL}${Jk(Fk).nameKey}`)
      })
    }

    function xL(kk) {
      let {
        core: Fk,
        t: Ik
      } = kk;
      const [Xk, Tk] = Fk, ik = Tk > 0 ? Math.floor(100 * Xk / Tk) : 100;
      return (0, Si.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": Ik(`${qL}questCoreLabel`, {
          have: String(Xk),
          need: String(Tk)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": ik,
        children: [(0, Si.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: Ik(`${qL}questCore`, {
            percent: String(ik)
          })
        }), (0, Si.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Si.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${ik}%`
            }
          })
        })]
      })
    }

    function PL(kk) {
      let {
        rows: Fk,
        t: Ik
      } = kk;
      const Xk = Fk.filter((kk => kk.done)).length;
      return (0, Si.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": Ik(`${qL}questStepsProgress`, {
          done: String(Xk),
          total: String(Fk.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": Fk.length,
        "aria-valuenow": Xk,
        children: Fk.map((kk => (0, Si.jsx)("span", {
          className: VT()("Baf2QuestSegment", {
            Done: kk.done,
            Current: kk.current
          })
        }, kk.id)))
      })
    }
    const KL = (0, Xk.memo)(sL, QL);

    function QL(kk, Fk) {
      const Ik = Ik => kk.view.itemNames[Ik] === Fk.view.itemNames[Ik];
      return kk.t === Fk.t && kk.extra === Fk.extra && (null === kk.row.item || Ik(kk.row.item)) && kk.row.madeFor.every(Ik) && kk.row.also.every(Ik) && lL()(kk.row, Fk.row)
    }

    function sL(kk) {
      let {
        row: Fk,
        view: Ik,
        t: Xk,
        extra: Tk
      } = kk;
      const {
        isTouchScreen: ik
      } = (0, KT.j)(["isTouchScreen"]), yk = Fk.item ? function(kk, Fk, Ik) {
        return 1 !== Ik && aL.has(kk) ? oT(Fk) : null
      }(Fk.key, Fk.item, Fk.total) : null, lk = yk ? Xk(yk) : Fk.item ? tL(Xk, Ik.itemNames[Fk.item], Fk.item) : "", ak = Fk.also.map((kk => tL(Xk, Ik.itemNames[kk], kk))), qk = ak.join(", "), Lk = function(kk, Fk) {
        var Ik;
        return Fk.length < 2 ? null !== (Ik = Fk[0]) && void 0 !== Ik ? Ik : "" : kk(`${qL}listAnd`, {
          rest: Fk.slice(0, -1).join(kk(`${qL}listComma`)),
          last: Fk[Fk.length - 1]
        })
      }(Xk, [lk, ...ak]), tk = Xk(`${qL}${Fk.key}`, {
        ...jL(Xk, ik),
        ...ZL(Fk.params),
        item: lk,
        also: qk,
        itemList: Lk,
        total: String(Fk.total)
      }), [Zk, ...jk] = tk.split("\n"), ek = Fk.total > 1 && !Fk.done && !Fk.away;
      return (0, Si.jsxs)("li", {
        className: VT()("Baf2QuestStep", {
          Done: Fk.done,
          Current: Fk.current,
          JustFinished: Fk.justFinished,
          Away: Fk.away
        }),
        children: [!Fk.done && null !== Fk.item && (0, Si.jsx)(eL, {
          item: Fk.item
        }), (Fk.done || null === Fk.item) && (0, Si.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: Fk.done ? "\u2713" : "\u25cb"
        }), (0, Si.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Si.jsx)("strong", {
            children: Zk
          }), jk.length > 0 && (0, Si.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: jk.join(" ")
          }), !Fk.done && Fk.madeFor.length > 0 && (0, Si.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Xk("buildAFactory2Game:questRowFor", {
              items: Fk.madeFor.map((kk => tL(Xk, Ik.itemNames[kk], kk))).join(" \u2192 ")
            })
          }), ek && (0, Si.jsx)(wL, {
            label: Zk,
            percent: Math.round(100 * Fk.amount / Fk.total),
            progress: `${Fk.amount.toLocaleString("en-US")}/${Fk.total.toLocaleString("en-US")}`
          }), !Fk.done && !Fk.away && Fk.chips && Fk.chips.length > 0 && (0, Si.jsx)(HL, {
            chips: Fk.chips
          }), Tk]
        })]
      })
    }
    const VL = "buildAFactory2Game:",
      zL = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      SL = {
        on: `${VL}tutorialButtonOn`,
        hud: `${VL}tutorialButtonHud`,
        off: `${VL}tutorialButtonOff`
      },
      oL = {
        on: `${VL}tutorialPickedOn`,
        hud: `${VL}tutorialPickedHud`,
        off: `${VL}tutorialPickedOff`
      };
    class vL {
      constructor(kk, Fk, Ik) {
        this.commands = kk, this.quests = Fk, this.toasts = Ik
      }
      next() {
        const kk = function(kk) {
            return pk[(pk.indexOf(kk) + 1) % pk.length]
          }(this.quests.get().tutorial),
          Fk = this.quests.setTutorial(kk);
        this.commands.send(`baf2tutorial ${kk} ${Fk}`), this.toasts.show({
          baf2ToastText: [(0, bk._d)({
            translationKey: oL[kk]
          }, bk.J.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function EL(kk, Fk) {
      let [Ik, Xk] = Fk;
      return kk(`${qL}${Ik}`, ZL(Xk))
    }

    function OL(kk) {
      let [Fk, Ik] = kk;
      return Fk + JSON.stringify(Ik)
    }

    function nL(kk) {
      let {
        goal: Fk,
        t: Ik
      } = kk;
      return Fk ? (0, Si.jsx)("span", {
        className: "Baf2BookGoal",
        children: Ik(`${qL}${Fk}`)
      }) : null
    }

    function GL(kk) {
      let {
        view: Fk,
        t: Ik
      } = kk;
      if (!Fk.name) return null;
      const Xk = BT(Fk.rows);
      return (0, Si.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Si.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: Ik(`${qL}currentQuest`)
        }), (0, Si.jsx)("strong", {
          className: "Baf2BookTitle",
          children: EL(Ik, Fk.name)
        }), (0, Si.jsx)(nL, {
          goal: Fk.goal,
          t: Ik
        }), Xk.length > 1 && (0, Si.jsx)(PL, {
          rows: Xk,
          t: Ik
        }), (0, Si.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: Fk.rows.map((kk => (0, Si.jsx)(KL, {
            row: kk,
            view: Fk,
            t: Ik
          }, kk.id)))
        }), Fk.reward && (0, Si.jsxs)("span", {
          className: "Baf2BookReward",
          children: [Ik(`${qL}questReward`), (0, Si.jsx)(eL, {
            item: Fk.reward
          }), tL(Ik, Fk.itemNames[Fk.reward], Fk.reward)]
        })]
      })
    }

    function pL(kk) {
      let {
        quest: Fk,
        upcoming: Ik,
        t: Xk
      } = kk;
      return (0, Si.jsxs)("li", {
        className: VT()("Baf2BookQuest", {
          Done: Fk[3],
          Upcoming: Ik
        }),
        children: [(0, Si.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: Fk[3] ? "\u2713" : "\u25cb"
        }), (0, Si.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Si.jsx)("strong", {
            className: "Baf2BookTitle",
            children: EL(Xk, Fk)
          }), (0, Si.jsx)(nL, {
            goal: Fk[2],
            t: Xk
          })]
        })]
      })
    }

    function uL(kk) {
      let {
        done: Fk,
        total: Ik,
        t: Xk
      } = kk;
      const Tk = Ik > 0 ? Math.round(100 * Fk / Ik) : 0,
        ik = Xk(`${qL}questBookChapterProgress`, {
          done: String(Fk),
          total: String(Ik)
        });
      return (0, Si.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Si.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": ik,
          "aria-valuemin": 0,
          "aria-valuemax": Ik,
          "aria-valuenow": Fk,
          children: (0, Si.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Tk}%`
            }
          })
        }), (0, Si.jsx)("span", {
          className: "Baf2BookProgressText",
          children: ik
        })]
      })
    }

    function bL(kk) {
      let {
        view: Fk,
        tier: Ik,
        quests: Xk,
        t: Tk
      } = kk;
      const ik = Ik === Fk.tier,
        yk = (null !== Xk && void 0 !== Xk ? Xk : []).filter((kk => !kk[4])),
        lk = (null !== Xk && void 0 !== Xk ? Xk : []).filter((kk => kk[4])),
        ak = yk.filter((kk => kk[3])).length,
        qk = ik && Fk.name ? OL(Fk.name) : null,
        Lk = yk.findIndex((kk => !kk[3] && OL(kk) === qk));
      return (0, Si.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Si.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Si.jsx)("h3", {
            children: JL(Tk, Ik)
          }), yk.length > 0 && (0, Si.jsx)(uL, {
            done: ak,
            total: yk.length,
            t: Tk
          }), ik && Fk.core && (0, Si.jsx)(xL, {
            core: Fk.core,
            t: Tk
          })]
        }), (0, Si.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Xk && ik && (0, Si.jsx)(GL, {
            view: Fk,
            t: Tk
          }), yk.map(((kk, Ik) => Ik === Lk ? (0, Si.jsx)(GL, {
            view: Fk,
            t: Tk
          }, OL(kk)) : (0, Si.jsx)(pL, {
            quest: kk,
            upcoming: !kk[3],
            t: Tk
          }, OL(kk))))]
        }), ik && Fk.side && (0, Si.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Si.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Tk(`${qL}questSide`)
          }), (0, Si.jsx)("strong", {
            className: "Baf2BookTitle",
            children: EL(Tk, Fk.side.name)
          }), (0, Si.jsx)(nL, {
            goal: Fk.side.goal,
            t: Tk
          }), (0, Si.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Si.jsx)(KL, {
              row: Fk.side.row,
              view: Fk,
              t: Tk
            })
          })]
        }), lk.length > 0 && (0, Si.jsxs)(Si.Fragment, {
          children: [(0, Si.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Tk(`${qL}questBookSidesDone`)
          }), (0, Si.jsx)("ol", {
            className: "Baf2BookQuests",
            children: lk.map((kk => (0, Si.jsx)(pL, {
              quest: kk,
              upcoming: !1,
              t: Tk
            }, OL(kk))))
          })]
        })]
      })
    }

    function RL(kk) {
      var Fk, Ik, ik;
      let {
        store: yk,
        tutorial: lk,
        close: ak
      } = kk;
      const {
        t: qk
      } = (0, vT.y)(), tk = (0, iL.f)(RT, yk.get()), Zk = null !== (Fk = tk.tier) && void 0 !== Fk ? Fk : 1, [jk, ek] = (0, Xk.useState)(null), Jk = (null === jk || void 0 === jk ? void 0 : jk.at) === Zk ? jk.tier : Zk, xk = (0, Xk.useRef)(null), Pk = null !== tk.chapters;
      (0, Xk.useEffect)((() => {
        var kk;
        xk.current && (xk.current.scrollTop = 0);
        const Fk = null === (kk = xk.current) || void 0 === kk ? void 0 : kk.querySelector(".Baf2BookQuest.Current");
        if (xk.current && Fk) {
          const kk = Fk.getBoundingClientRect().bottom - xk.current.getBoundingClientRect().bottom;
          kk > 0 && (xk.current.scrollTop += Math.min(kk, Fk.getBoundingClientRect().top - xk.current.getBoundingClientRect().top))
        }
      }), [Jk, Pk]);
      const Kk = null === (Ik = tk.chapters) || void 0 === Ik ? void 0 : Ik.find((kk => {
        let [Fk] = kk;
        return Fk === Jk
      }));
      return (0, Si.jsx)(Vy.c, {
        close: ak,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Si.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: LL,
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: qk(`${qL}questBookTitle`)
            }), (0, Si.jsx)(zy.m, {
              className: "Baf2BookTutorialButton",
              disabled: !tk.tutorialKnown,
              ariaLabel: qk(SL[tk.tutorial]),
              title: qk(SL[tk.tutorial]),
              onClick: () => {
                lk.next()
              },
              children: (0, Si.jsx)(ET.e, {
                name: zL[tk.tutorial]
              })
            }), (0, Si.jsx)(zy.k, {
              onClick: ak
            })]
          }), (0, Si.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": qk(`${qL}questBookChapters`),
            "data-pad-initial-area": !0,
            children: Tk.slice(0, Lk()).map(((kk, Fk) => {
              const Ik = Fk + 1,
                {
                  kind: Xk,
                  short: Tk
                } = Hk(Ik),
                ik = wk(Ik, Zk),
                yk = ik ? qk(`${qL}coreAtomicHidden`) : JL(qk, Ik);
              return (0, Si.jsx)("li", {
                children: (0, Si.jsx)("button", {
                  type: "button",
                  className: VT()({
                    Stage: "tier" !== Xk,
                    Atomic: "atomic" === Xk,
                    Current: Ik === Zk,
                    Selected: Ik === Jk
                  }),
                  disabled: Ik > Zk,
                  "aria-pressed": Ik === Jk,
                  "aria-label": yk,
                  title: ik ? void 0 : yk,
                  onClick: () => {
                    ek({
                      tier: Ik,
                      at: Zk
                    })
                  },
                  children: ik ? "?" : Tk
                })
              }, kk.nameKey)
            }))
          }), (0, Si.jsxs)("div", {
            ref: xk,
            className: "Baf2BookBody",
            children: [WT(tk) && Jk === Zk && (0, Si.jsx)("p", {
              className: "Baf2BookEmpty",
              children: qk(`${qL}questBookAllDone`)
            }), (0, Si.jsx)(bL, {
              view: tk,
              tier: Jk,
              quests: null !== (ik = null === Kk || void 0 === Kk ? void 0 : Kk[1]) && void 0 !== ik ? ik : null,
              t: qk
            })]
          })]
        })
      })
    }
    const UL = "buildAFactory2Game:";

    function CL(kk) {
      let {
        tiers: Fk,
        from: Ik,
        tier: Xk,
        shown: Tk,
        rZ: ik
      } = kk;
      const {
        t: yk
      } = (0, vT.y)(), lk = Fk.map(((kk, Fk) => {
        const lk = Ik + Fk,
          {
            kind: ak,
            short: qk
          } = Hk(lk),
          Lk = wk(lk, Xk);
        return (0, Si.jsx)("li", {
          children: (0, Si.jsx)("button", {
            type: "button",
            className: VT()({
              Stage: "tier" !== ak,
              Silhouette: Lk,
              Reached: lk <= Xk,
              Current: lk === Xk,
              Next: lk === Xk + 1,
              Selected: lk === Tk
            }),
            disabled: Lk,
            "aria-pressed": lk === Tk,
            "aria-label": Lk ? yk(`${UL}coreAtomicHidden`) : void 0,
            title: Lk ? void 0 : yk(`${UL}${kk.nameKey}`),
            onClick: () => {
              ik(lk)
            },
            children: Lk ? "?" : qk
          })
        }, kk.nameKey)
      }));
      return (0, Si.jsx)(Si.Fragment, {
        children: lk
      })
    }

    function NL(kk) {
      let {
        id: Fk,
        label: Ik,
        tiers: Xk,
        from: Tk,
        ...ik
      } = kk;
      return (0, Si.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Si.jsx)("span", {
          id: Fk,
          className: "Baf2CoreLadderLabel",
          children: Ik
        }), (0, Si.jsx)("ol", {
          "aria-labelledby": Fk,
          children: (0, Si.jsx)(CL, {
            ...ik,
            tiers: Xk,
            from: Tk
          })
        })]
      })
    }

    function cL(kk) {
      const {
        t: Fk
      } = (0, vT.y)(), Ik = Tk.findIndex((kk => void 0 !== kk.stage)), Xk = Tk.findIndex((kk => void 0 !== kk.reactorTier)), ik = Ik < 0 ? Tk : Tk.slice(0, Ik), yk = Ik < 0 ? [] : Tk.slice(Ik, Xk < 0 ? void 0 : Xk), ak = Xk < 0 || !lk() ? [] : Tk.slice(Xk);
      return (0, Si.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Si.jsx)(NL, {
          ...kk,
          id: "baf2CoreTiersLabel",
          label: Fk(`${UL}coreTiersLabel`),
          tiers: ik,
          from: 1
        }), yk.length > 0 && (0, Si.jsx)(NL, {
          ...kk,
          id: "baf2CoreStagesLabel",
          label: Fk(`${UL}coreStagesLabel`),
          tiers: yk,
          from: Ik + 1
        }), ak.length > 0 && (0, Si.jsx)(NL, {
          ...kk,
          id: "baf2CoreAtomicLabel",
          label: Fk(`${UL}coreAtomicLabel`),
          tiers: ak,
          from: Xk + 1
        })]
      })
    }
    const WL = "buildAFactory2Game:";

    function fL(kk) {
      let {
        item: Fk,
        itemNames: Ik,
        children: Xk
      } = kk;
      return (0, Si.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Si.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Si.jsx)(OT.d, {
            itemName: Fk,
            amount: 0
          })
        }), (0, Si.jsx)(nT.c, {
          text: Ik[Fk]
        }), Xk]
      })
    }

    function BL(kk) {
      const Fk = new Map;
      for (const {
          block: Xk
        }
        of kk.newDeposits) {
        var Ik;
        Fk.set(Xk, (null !== (Ik = Fk.get(Xk)) && void 0 !== Ik ? Ik : 0) + 1)
      }
      return [...Fk]
    }

    function dL(kk) {
      let {
        value: Fk,
        label: Ik,
        more: Xk
      } = kk;
      return (0, Si.jsxs)("li", {
        children: [(0, Si.jsx)("strong", {
          children: Fk
        }), (0, Si.jsx)("span", {
          children: Ik
        }), Xk > 0 && (0, Si.jsxs)("em", {
          children: ["+", Xk]
        })]
      })
    }

    function YL(kk) {
      let {
        items: Fk,
        itemNames: Ik
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)(), [ik, yk] = (0, Xk.useState)(null), lk = null !== ik && Fk.includes(ik) ? ik : null;
      return (0, Si.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Si.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Tk(`${WL}coreRewardUnlocks`)
        }), (0, Si.jsx)("ul", {
          children: Fk.map((kk => (0, Si.jsx)("li", {
            children: (0, Si.jsx)("button", {
              type: "button",
              className: VT()("Baf2PanelIcon", {
                Picked: kk === lk
              }),
              title: Ti(Tk, kk),
              "aria-label": Ti(Tk, kk),
              "aria-pressed": kk === lk,
              onClick: () => {
                yk(kk === lk ? null : kk)
              },
              children: (0, Si.jsx)(OT.d, {
                itemName: kk,
                amount: 0
              })
            })
          }, kk)))
        }), (0, Si.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== lk && (0, Si.jsxs)(Si.Fragment, {
            children: [(0, Si.jsx)(nT.c, {
              text: Ik[lk]
            }), " \xb7 ", (0, Si.jsx)(nT.c, {
              text: Ik[nk(lk)]
            })]
          }), null === lk && Tk(`${WL}coreRecipeTap`)]
        })]
      })
    }

    function AL(kk) {
      var Fk, Ik;
      let {
        def: Xk,
        tier: Tk,
        itemNames: ik
      } = kk;
      const {
        t: yk
      } = (0, vT.y)(), lk = Tk > 1 ? Jk(Tk - 1) : void 0, ak = Math.round(2 * Xk.islandRadius), qk = lk ? Math.round(2 * lk.islandRadius) : ak, Lk = Tk >= 3 ? sX(Tk) : null;
      return (0, Si.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Si.jsxs)("ul", {
          className: VT()("Baf2CoreStats", {
            Four: null !== Lk
          }),
          children: [(0, Si.jsx)(dL, {
            value: `${ak}\xd7${ak}`,
            label: yk(`${WL}coreStatIsland`),
            more: ak - qk
          }), (0, Si.jsx)(dL, {
            value: String(Xk.machineAllowance),
            label: yk(`${WL}coreStatMachines`),
            more: Xk.machineAllowance - (null !== (Fk = null === lk || void 0 === lk ? void 0 : lk.machineAllowance) && void 0 !== Fk ? Fk : Xk.machineAllowance)
          }), (0, Si.jsx)(dL, {
            value: String(Xk.beltAllowance),
            label: yk(`${WL}coreStatBelts`),
            more: Xk.beltAllowance - (null !== (Ik = null === lk || void 0 === lk ? void 0 : lk.beltAllowance) && void 0 !== Ik ? Ik : Xk.beltAllowance)
          }), null !== Lk && (0, Si.jsx)(dL, {
            value: String(Lk),
            label: yk(`${WL}coreStatStorage`),
            more: Lk - (lk ? sX(Tk - 1) : Lk)
          })]
        }), Xk.reward && (0, Si.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Si.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: yk(`${WL}coreRewardItem`)
          }), (0, Si.jsx)(fL, {
            item: Xk.reward,
            itemNames: ik
          })]
        }), Xk.newDeposits.length > 0 && (0, Si.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Si.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: yk(Xk.newDeposits.length > 1 ? `${WL}coreRewardDeposits` : `${WL}coreRewardDeposit`)
          }), BL(Xk).map((kk => {
            let [Fk, Ik] = kk;
            return (0, Si.jsx)(fL, {
              item: Fk,
              itemNames: ik,
              children: Ik > 1 && ` \xd7${Ik}`
            }, Fk)
          }))]
        }), Xk.unlocks.length > 0 && (0, Si.jsx)(YL, {
          items: Xk.unlocks,
          itemNames: ik
        }), (0, Si.jsx)(gL, {
          tier: Tk
        })]
      })
    }

    function gL(kk) {
      let {
        tier: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)(), Xk = HT[Fk];
      if (!Xk) return null;
      const Tk = wT(Fk, 0, 0).barrierMax !== wT(Fk - 1, 0, 0).barrierMax;
      return (0, Si.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Si.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Si.jsx)(OT.d, {
            itemName: Tk ? qT.Chestplate : aT,
            amount: 0
          })
        }), Ik(`${WL}gearPerkLine`, {
          perk: Ik(`${WL}${Xk}`)
        })]
      })
    }

    function mL(kk, Fk) {
      return null === kk ? Fk : kk.value
    }

    function hL(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === kk || Ik - kk.atMs >= Xk ? null : Tk(kk.value, Fk) ? kk.armed ? null : kk : kk.armed ? kk : {
        ...kk,
        armed: !0
      }
    }

    function rL(kk, Fk) {
      const Ik = Fk.filter((Fk => {
        var Ik;
        return !1 !== (null === (Ik = kk.get(Fk)) || void 0 === Ik ? void 0 : Ik.value)
      }));
      for (const [Xk, Tk] of kk) Tk.value && !Fk.includes(Xk) && Ik.push(Xk);
      return Ik
    }

    function DL(kk, Fk, Ik, Tk) {
      const [ik, yk] = (0, Xk.useState)((() => new Map)), lk = () => {
        yk((Fk => function(kk, Fk, Ik, Xk) {
          var Tk;
          let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            yk = null;
          for (const [lk, ak] of kk) {
            const Tk = hL(ak, Fk(lk), Ik, Xk, ik);
            Tk !== ak && (yk ??= new Map(kk), null === Tk ? yk.delete(lk) : yk.set(lk, Tk))
          }
          return null !== (Tk = yk) && void 0 !== Tk ? Tk : kk
        }(Fk, kk, Date.now(), Ik, Tk)))
      };
      (0, Xk.useEffect)((() => {
        lk()
      }), [Fk, Ik]), (0, Xk.useEffect)((() => {
        if (0 === ik.size) return;
        const kk = Math.min(...[...ik.values()].map((kk => kk.atMs))),
          Fk = setTimeout(lk, Math.max(0, kk + Ik - Date.now()) + 1);
        return () => {
          clearTimeout(Fk)
        }
      }), [ik, Fk, Ik]);
      return [ik, (Fk, Ik) => {
        yk((Xk => {
          const ik = new Map(Xk);
          return ik.set(Fk, function(kk, Fk, Ik) {
            return {
              value: kk,
              atMs: Ik,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(kk, Fk)
            }
          }(Ik, kk(Fk), Date.now(), Tk)), ik
        }))
      }]
    }
    const ML = "buildAFactory2Game:";

    function kt(kk) {
      let {
        message: Fk,
        itemNames: Ik
      } = kk;
      const Tk = By(),
        {
          t: ik
        } = (0, vT.y)(),
        [yk, lk] = (0, Xk.useState)(!1),
        [ak, qk] = function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ry;
          const [Ik, Xk] = DL((Fk => kk.includes(Fk)), kk, Fk, Object.is);
          return [rL(Ik, kk), Xk]
        }(Fk.baf2CoreBankPaused),
        Lk = new Set(ak),
        tk = [...Fk.baf2CoreBanked];
      for (const Xk of Lk) tk.some((kk => {
        let [Fk] = kk;
        return Fk === Xk
      })) || tk.push([Xk, 0]);
      return 0 === tk.length ? null : (0, Si.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Si.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": yk,
          onClick: () => {
            lk(!yk)
          },
          children: [(0, Si.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: ik(`${ML}coreBankedLater`)
          }), (0, Si.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: tk.map((kk => {
              let [Fk, Ik] = kk;
              const Xk = Lk.has(Fk);
              return (0, Si.jsxs)("span", {
                className: VT()({
                  Paused: Xk
                }),
                title: Xk ? ik(`${ML}coreBankPausedTag`) : void 0,
                children: [(0, Si.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Si.jsx)(OT.d, {
                    itemName: Fk,
                    amount: 0
                  })
                }), Ik, Xk && (0, Si.jsx)(ET.e, {
                  name: "pause"
                })]
              }, Fk)
            }))
          }), (0, Si.jsx)(ET.e, {
            name: yk ? "angle-up" : "angle-down"
          })]
        }), yk && (0, Si.jsxs)(Si.Fragment, {
          children: [(0, Si.jsx)("ul", {
            children: tk.map((kk => {
              let [Fk, Xk] = kk;
              const yk = Lk.has(Fk);
              return (0, Si.jsxs)("li", {
                children: [(0, Si.jsxs)(fL, {
                  item: Fk,
                  itemNames: Ik,
                  children: [(0, Si.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Xk
                  }), yk && (0, Si.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: ik(`${ML}coreBankPausedTag`)
                  })]
                }), (0, Si.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Si.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Xk,
                    onClick: () => {
                      Tk.send(`baf2corewithdraw ${Xk} ${Fk}`)
                    },
                    children: ik(`${ML}coreTake`)
                  }), (0, Si.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Tk.send(`${Kk} ${Fk}`), qk(Fk, !yk)
                    },
                    children: ik(yk ? `${ML}coreBankResume` : `${ML}coreBankStop`)
                  })]
                })]
              }, Fk)
            }))
          }), (0, Si.jsx)("p", {
            className: "Baf2CoreHint",
            children: ik(`${ML}coreBankNote`)
          })]
        })]
      })
    }
    const Ft = "buildAFactory2Game:";

    function It(kk) {
      const Fk = Math.max(0, Math.floor(kk));
      return `${Math.floor(Fk/60)}:${String(Fk%60).padStart(2,"0")}`
    }

    function Xt(kk) {
      let {
        item: Fk
      } = kk;
      return (0, Si.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Si.jsx)(OT.d, {
          itemName: Fk,
          amount: 0
        })
      })
    }

    function Tt() {
      return (0, Si.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Si.jsx)(ET.e, {
          name: "bolt"
        })
      })
    }

    function it(kk) {
      let {
        charge: Fk,
        hint: Ik,
        itemNames: Xk
      } = kk;
      const Tk = By(),
        {
          t: ik
        } = (0, vT.y)(),
        [yk, lk, ak, qk, Lk, tk, Zk] = Fk,
        [jk, ek] = function(kk) {
          var Fk;
          let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ry,
            Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Tk, ik] = DL((() => kk), kk, Ik, Xk);
          return [mL(null !== (Fk = Tk.get("")) && void 0 !== Fk ? Fk : null, kk), kk => {
            ik("", kk)
          }]
        }(Zk),
        wk = jk === Zk ? tk : !jk,
        Hk = qk >= Lk,
        Jk = yk.find((kk => {
          let [, Fk, Ik] = kk;
          return Ik < .9 * Fk
        }));
      let xk = `${Ft}coreChargeWaiting`,
        Pk = {};
      return Hk ? xk = `${Ft}coreChargeDone` : jk ? xk = `${Ft}coreChargeStopped` : wk && Ik ? (xk = `${Ft}${Ik[0]}`, Pk = {
        item: Ti(ik, Ik[1])
      }) : wk && Jk ? (xk = `${Ft}coreChargeShort`, Pk = {
        item: Ti(ik, Jk[0])
      }) : wk && lk > 0 && !ak ? xk = `${Ft}coreChargePower` : wk && (xk = `${Ft}coreChargeRunning`), (0, Si.jsxs)("div", {
        className: VT()("Baf2CoreCharge", {
          Waiting: !wk && !Hk,
          Done: Hk
        }),
        children: [(0, Si.jsxs)("h4", {
          children: [ik(`${Ft}coreChargeTitle`), (0, Si.jsx)("span", {
            children: ik(`${Ft}coreChargeProgress`, {
              done: It(qk),
              need: It(Lk)
            })
          })]
        }), (0, Si.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Si.jsx)("div", {
            style: {
              width: 100 * Math.min(qk, Lk) / Lk + "%"
            }
          })
        }), (0, Si.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [yk.map((kk => {
            var Fk;
            let [Ik, Tk, yk] = kk;
            const lk = yk >= .9 * Tk;
            return (0, Si.jsxs)("li", {
              className: VT()({
                Done: lk,
                Short: wk && !lk
              }),
              children: [(0, Si.jsx)(Xt, {
                item: Ik
              }), (0, Si.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Si.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Si.jsx)(nT.c, {
                    text: null !== (Fk = Xk[Ik]) && void 0 !== Fk ? Fk : Ik
                  }), (0, Si.jsx)("span", {
                    children: ik(`${Ft}coreChargeItem`, {
                      now: String(yk),
                      need: String(Tk)
                    })
                  })]
                }), (0, Si.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Si.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*yk/Tk)}%`
                    }
                  })
                })]
              })]
            }, Ik)
          })), lk > 0 && (0, Si.jsxs)("li", {
            className: VT()("Baf2CoreChargePower", {
              Short: wk && !ak
            }),
            children: [(0, Si.jsx)(Tt, {}), (0, Si.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Si.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Si.jsx)("span", {
                  children: ik(`${Ft}coreChargePowerRow`, {
                    power: Dk(lk)
                  })
                })
              })
            })]
          })]
        }), (0, Si.jsx)("p", {
          className: "Baf2CoreHint",
          children: ik(xk, Pk)
        }), !Hk && (wk || jk) && (0, Si.jsx)("button", {
          type: "button",
          className: VT()("Baf2CoreChargeToggle", {
            Stopped: jk
          }),
          onClick: () => {
            Tk.send(sk), ek(!jk)
          },
          children: ik(jk ? `${Ft}coreChargeRestart` : `${Ft}coreChargeStop`)
        })]
      })
    }

    function yt(kk) {
      let {
        charge: Fk,
        reached: Ik,
        itemNames: Xk
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)();
      return (0, Si.jsxs)("div", {
        className: VT()("Baf2CoreCharge", {
          Done: Ik
        }),
        children: [(0, Si.jsxs)("h4", {
          children: [Tk(`${Ft}coreChargeTitle`), (0, Si.jsx)("span", {
            children: Tk(`${Ft}coreChargeSpecTime`, {
              time: It(Fk.seconds)
            })
          })]
        }), (0, Si.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Fk.items.map((kk => {
            var Fk;
            let {
              item: ik,
              amount: yk
            } = kk;
            return (0, Si.jsxs)("li", {
              className: VT()({
                Done: Ik
              }),
              children: [(0, Si.jsx)(Xt, {
                item: ik
              }), (0, Si.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Si.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Si.jsx)(nT.c, {
                    text: null !== (Fk = Xk[ik]) && void 0 !== Fk ? Fk : ik
                  }), (0, Si.jsx)("span", {
                    children: Tk(`${Ft}coreChargeSpecItem`, {
                      need: String(yk)
                    })
                  })]
                })
              })]
            }, ik)
          })), Fk.powerPerS > 0 && (0, Si.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Si.jsx)(Tt, {}), (0, Si.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Si.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Si.jsx)("span", {
                  children: Tk(`${Ft}coreChargePowerRow`, {
                    power: Dk(Fk.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const lt = "buildAFactory2Game:";

    function qt(kk) {
      let {
        def: Fk,
        reached: Ik,
        banked: Xk,
        itemNames: Tk
      } = kk;
      const {
        t: ik
      } = (0, vT.y)();
      return (0, Si.jsx)("ul", {
        className: "Baf2CoreCost",
        children: Fk.cost.map((kk => {
          let {
            item: Fk,
            amount: yk
          } = kk;
          const lk = Ik ? 0 : Xk(Fk);
          return (0, Si.jsx)("li", {
            children: (0, Si.jsx)(fL, {
              item: Fk,
              itemNames: Tk,
              children: (0, Si.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: lk > 0 ? ik(`${lt}coreBankedFor`, {
                  amount: String(lk),
                  total: String(yk)
                }) : `\xd7${yk}`
              })
            })
          }, Fk)
        }))
      })
    }

    function Lt(kk, Fk) {
      if (Fk >= Lk()) return kk(`${lt}coreMaxTier`);
      const Ik = qk[Fk + 1];
      return Ik && !Ik.startsWith("upgradeCore") ? kk(`${lt}coreGateQuest`, {
        quest: kk(`${lt}quest_${Ik}`)
      }) : kk(`${lt}coreGateClosed`)
    }

    function tt() {
      const {
        t: kk
      } = (0, vT.y)(), Fk = By(), Ik = (0, Xk.useRef)(null), Tk = (0, Xk.useRef)(Date.now());
      return hq(!0, Ik), (0, Si.jsx)("div", {
        ref: Ik,
        className: "Baf2CoreGrow",
        children: (0, Si.jsx)(zy.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Tk.current >= 600 && Fk.send(Pk)
          },
          children: kk(`${lt}coreGrow`)
        })
      })
    }

    function Zt(kk) {
      let {
        message: Fk,
        itemNames: Ik,
        next: Xk
      } = kk;
      const Tk = By(),
        {
          t: ik
        } = (0, vT.y)(),
        yk = Fk.baf2CoreTier,
        lk = Fk.baf2CoreReady,
        ak = Fk.baf2CoreNeeds.filter((kk => {
          let [, Fk, Ik, Xk] = kk;
          return Xk > 0 && Fk < Ik
        })),
        qk = Fk.baf2CoreNeeds.every((kk => {
          let [, Fk, Ik] = kk;
          return Fk >= Ik
        })),
        Lk = Fk.baf2CoreKeep;
      return (0, Si.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Si.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [lk && (0, Si.jsx)(tt, {}), (0, Si.jsx)("h3", {
            children: ik(`${lt}coreBring`)
          }), (0, Si.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: Fk.baf2CoreNeeds.map((kk => {
              let [Fk, Xk, yk, lk] = kk;
              return (0, Si.jsxs)("li", {
                className: VT()({
                  Done: Xk >= yk
                }),
                children: [(0, Si.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Si.jsx)(OT.d, {
                    itemName: Fk,
                    amount: 0
                  })
                }), (0, Si.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Si.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Si.jsx)(nT.c, {
                      text: Ik[Fk]
                    }), (0, Si.jsxs)("span", {
                      children: [Xk, "/", yk]
                    })]
                  }), (0, Si.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Si.jsx)("div", {
                      style: {
                        width: 100 * Xk / yk + "%"
                      }
                    }), lk > 0 && (0, Si.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * lk / yk + "%"
                      }
                    })]
                  })]
                }), lk > 0 && Xk < yk && (0, Si.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Tk.send(`${Qk} ${Fk}`)
                  },
                  children: ik(`${lt}coreDeposit`, {
                    amount: String(lk)
                  })
                })]
              }, Fk)
            }))
          }), Fk.baf2CoreCharge && (0, Si.jsx)(it, {
            charge: Fk.baf2CoreCharge,
            hint: Fk.baf2CoreChargeHint,
            itemNames: Ik
          }), !lk && ak.length > 1 && (0, Si.jsx)(zy.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Tk.send(Pk)
            },
            children: ik(`${lt}coreHandOver`)
          }), !lk && void 0 !== Lk && (0, Si.jsx)("p", {
            className: "Baf2CoreHint",
            children: ik(`${lt}coreKeepRest`, {
              item: Ti(ik, Lk)
            })
          }), !lk && !qk && 0 === ak.length && void 0 === Lk && (0, Si.jsx)("p", {
            className: "Baf2CoreHint",
            children: ik(`${lt}coreNothingHeld`)
          }), (0, Si.jsx)(kt, {
            message: Fk,
            itemNames: Ik
          })]
        }), (0, Si.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Si.jsx)("h3", {
            children: ik(`${lt}coreRewards`)
          }), (0, Si.jsx)(AL, {
            def: Xk,
            tier: yk + 1,
            itemNames: Ik
          })]
        })]
      })
    }

    function jt(kk) {
      let {
        message: Fk,
        itemNames: Ik,
        shown: Xk
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)(), ik = Fk.baf2CoreTier, yk = Jk(Xk), lk = Xk <= ik, ak = new Map(Fk.baf2CoreBanked), qk = !xk(ik, Vk(Fk)) && Xk === ik;
      return (0, Si.jsxs)("div", {
        className: VT()("Baf2CoreBody", {
          Locked: !lk
        }),
        children: [(0, Si.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Si.jsx)("h3", {
            children: Tk(lk ? `${lt}coreItTook` : `${lt}coreItNeeds`)
          }), 0 === yk.cost.length && (0, Si.jsx)("p", {
            className: "Baf2CoreHint",
            children: Tk(`${lt}coreTierStart`)
          }), yk.cost.length > 0 && (0, Si.jsx)(qt, {
            def: yk,
            reached: lk,
            banked: kk => {
              var Fk;
              return function(kk, Fk, Ik, Xk) {
                let Tk = kk;
                for (let yk = Fk + 2; yk <= Ik; yk++) {
                  var ik;
                  const kk = Jk(yk).cost.find((kk => kk.item === Xk)),
                    Fk = Math.min(Tk, null !== (ik = null === kk || void 0 === kk ? void 0 : kk.amount) && void 0 !== ik ? ik : 0);
                  if (yk === Ik) return Fk;
                  Tk -= Fk
                }
                return 0
              }(null !== (Fk = ak.get(kk)) && void 0 !== Fk ? Fk : 0, ik, Xk, kk)
            },
            itemNames: Ik
          }), yk.charge && (0, Si.jsx)(yt, {
            charge: yk.charge,
            reached: lk,
            itemNames: Ik
          }), qk && (0, Si.jsxs)(Si.Fragment, {
            children: [(0, Si.jsx)("p", {
              className: "Baf2CoreHint",
              children: Lt(Tk, ik)
            }), (0, Si.jsx)(kt, {
              message: Fk,
              itemNames: Ik
            })]
          })]
        }), (0, Si.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Si.jsx)("h3", {
            children: Tk(lk ? `${lt}coreGave` : `${lt}coreLockedRewards`)
          }), (0, Si.jsx)(AL, {
            def: yk,
            tier: Xk,
            itemNames: Ik
          })]
        })]
      })
    }

    function et(kk, Fk) {
      const {
        key: Ik,
        params: Xk
      } = jk(Fk - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return kk(`${lt}${Ik}`, Xk)
    }
    const wt = "buildAFactory2Game:",
      Ht = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Jt = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function xt(kk) {
      let {
        view: Fk,
        close: Ik,
        askIslands: Tk
      } = kk;
      const {
        t: ik
      } = (0, vT.y)(), [yk, lk] = (0, Xk.useState)(!1);
      (0, Xk.useEffect)((() => {
        if (!yk) return;
        const kk = window.setTimeout((() => {
          lk(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(kk)
        }
      }), [yk]);
      const {
        message: ak,
        itemNames: qk
      } = Fk, Lk = ak.baf2CoreTier, tk = Jk(Lk), Zk = xk(Lk, Vk(ak)), [wk, Hk] = ak.baf2CoreMachines, [Pk, Kk] = ak.baf2CoreBelts, Qk = ak.baf2CoreStorage, sk = ak.baf2CoreReady, [zk, Sk] = (0, Xk.useState)(null), vk = (null === zk || void 0 === zk ? void 0 : zk.at) === Lk && zk.ready === sk ? zk.tier : Zk ? Lk + 1 : Lk;
      let Ek = "coreTierLocked";
      vk <= Lk ? Ek = "coreTierReached" : vk === Lk + 1 && (Ek = "coreTierNext");
      const Ok = ik(`${wt}${Jk(vk).nameKey}`),
        nk = vk === Lk + 1 ? Zk : null,
        Gk = jk(vk, {
          tier: Ek,
          stage: Ht[Ek],
          atomic: Jt[Ek]
        }),
        pk = ik(`${wt}${Gk.key}`, {
          ...Gk.params,
          name: Ok
        }),
        uk = jk(Lk, ek),
        bk = ik(`${wt}${uk.key}`, {
          ...uk.params,
          name: ik(`${wt}${tk.nameKey}`)
        });
      return (0, Si.jsx)(Vy.c, {
        close: Ik,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Si.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsxs)("div", {
              children: [(0, Si.jsx)("h2", {
                id: "baf2CoreTitle",
                children: ik(`${wt}coreTitle`)
              }), void 0 !== ak.baf2CoreIslandName && (0, Si.jsx)("p", {
                className: "Baf2CoreIsland",
                children: ak.baf2CoreIslandName
              }), (0, Si.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Si.jsx)("span", {
                  children: bk
                }), (0, Si.jsx)("span", {
                  className: VT()({
                    Full: wk >= Hk
                  }),
                  children: ik(`${wt}coreMachineCount`, {
                    amount: String(wk),
                    total: String(Hk)
                  })
                }), (0, Si.jsx)("span", {
                  className: VT()({
                    Full: Pk >= Kk
                  }),
                  children: ik(`${wt}coreBeltCount`, {
                    amount: String(Pk),
                    total: String(Kk)
                  })
                }), void 0 !== Qk && (0, Si.jsx)("span", {
                  className: VT()({
                    Full: Qk[0] >= Qk[1]
                  }),
                  children: ik(`${wt}coreStorageCount`, {
                    amount: String(Qk[0]),
                    total: String(Qk[1])
                  })
                })]
              })]
            }), (0, Si.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [ak.baf2CoreIslands && (0, Si.jsx)(zy.d, {
                className: "Baf2CoreIslandsButton",
                disabled: yk,
                onClick: () => {
                  lk(!0), Tk()
                },
                children: ik(`${wt}islandsOpenButton`)
              }), (0, Si.jsx)(zy.k, {
                onClick: Ik
              })]
            })]
          }), (0, Si.jsx)(cL, {
            tier: Lk,
            shown: vk,
            rZ: kk => {
              Sk({
                tier: kk,
                at: Lk,
                ready: sk
              })
            }
          }), (0, Si.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [pk, vk > Lk + 1 && (0, Si.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: et(ik, vk)
            })]
          }), 6 === vk && vk > Lk && (0, Si.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: ik(`${wt}coreStagesNote`)
          }), 11 === vk && vk > Lk && (0, Si.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: ik(`${wt}coreAtomicNote`)
          }), nk && (0, Si.jsx)(Zt, {
            message: ak,
            itemNames: qk,
            next: nk
          }), !nk && (0, Si.jsx)(jt, {
            message: ak,
            itemNames: qk,
            shown: vk
          })]
        })
      })
    }
    const Pt = {
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
    const Kt = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: ai,
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

    function Qt(kk) {
      return kk.baf2DropCometOreOnly ? "dropCometOre" : kk.baf2DropCometIsotope ? "seed" === kk.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function st(kk) {
      let {
        message: Fk,
        quests: Ik,
        close: Tk,
        leave: ik
      } = kk;
      const yk = By(),
        {
          t: lk
        } = (0, vT.y)(),
        ak = (0, iL.f)(RT, Ik.get()),
        qk = function(kk) {
          var Fk;
          if (!uk(kk.tutorial)) return null;
          const Ik = kk.rows.find((kk => kk.current)),
            Xk = Ik ? Pt[Ik.key] : void 0;
          return null !== (Fk = null !== Xk && void 0 !== Xk ? Xk : kk.side ? Pt[kk.side.row.key] : void 0) && void 0 !== Fk ? Fk : null
        }(ak),
        Lk = null === ak.tier || ti(ak.tier),
        tk = Lk ? Kt : Kt.filter((kk => {
          let {
            item: Fk
          } = kk;
          return Fk !== ai
        })),
        [Zk, jk] = (0, Xk.useState)(null),
        ek = null !== Zk && void 0 !== Zk ? Zk : !Fk.baf2DropFoundSalvage && Lk,
        wk = Fk.baf2DropRuinDistance,
        Hk = Fk.baf2DropComet,
        Jk = Fk.baf2DropOldWorks,
        xk = Fk.baf2DropGrove,
        Pk = function(kk) {
          return 2 + Number(void 0 !== kk.baf2DropComet) + Number(!!kk.baf2DropOwedComet || void 0 !== kk.baf2DropOwedWaitMinutes) + Number(void 0 !== kk.baf2DropDigDistance) + Number(void 0 !== kk.baf2DropOldWorks) + Number(void 0 !== kk.baf2DropGrove)
        }(Fk),
        Kk = kk => {
          yk.send(function(kk) {
            return `baf2drop ${kk}`
          }(kk)), ik()
        };
      let Qk = lk("buildAFactory2Game:dropRuinNone");
      if (null !== wk) {
        let kk = Fk.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        Fk.baf2DropRuinOldWorks && (kk = "dropRuinOldWorks");
        const Ik = void 0 === Fk.baf2DropRuinCluster ? lk("buildAFactory2Game:dropRuinOpen") : lk("buildAFactory2Game:dropRuinCluster", {
          count: String(Fk.baf2DropRuinCluster)
        });
        Qk = `${lk(`buildAFactory2Game:${kk}`,{distance:String(wk)})} ${Ik}`
      }
      let sk = lk("buildAFactory2Game:dropBelowDescription");
      void 0 !== Fk.baf2DropBelowLook && (sk = lk("buildAFactory2Game:dropBelowLook", {
        look: lk(Fk.baf2DropBelowLook)
      }));
      const Vk = "buildAFactory2Game:wildsRegion_survivorGrove" === Fk.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        zk = Qi(lk, 60 * function(kk) {
          const [Fk, Ik] = (0, Xk.useState)((() => Date.now())), [Tk, ik] = (0, Xk.useState)(Fk);
          return (0, Xk.useEffect)((() => {
            const kk = Date.now();
            Ik(kk), ik(kk)
          }), [kk]), (0, Xk.useEffect)((() => {
            const kk = window.setInterval((() => {
              ik(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(kk)
            }
          }), []), Math.max(1, kk.baf2DropRenewMinutes - Math.floor((Tk - Fk) / 6e4))
        }(Fk)),
        Sk = function(kk, Fk, Ik) {
          return "ruin" === kk && !Ik || "owed" === kk && !Fk.baf2DropOwedComet ? null : kk
        }(qk, Fk, null !== wk),
        vk = function(kk) {
          for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
          return VT()("Baf2DropTile", ...Ik, {
            Wanted: Sk === kk
          })
        };
      return (0, Si.jsx)(Vy.c, {
        close: Tk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Si.jsxs)("section", {
          className: VT()("Baf2Panel Baf2DropMap", {
            Many: Pk >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsxs)("div", {
              children: [(0, Si.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: lk("buildAFactory2Game:dropMapTitle")
              }), (0, Si.jsx)("p", {
                children: lk("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Si.jsx)(zy.k, {
              onClick: Tk
            })]
          }), (0, Si.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== Hk && (0, Si.jsxs)(zy.u, {
              className: vk("comet", "Baf2DropComet"),
              onClick: () => {
                Kk("comet")
              },
              children: [(0, Si.jsx)("strong", {
                children: lk("buildAFactory2Game:dropComet")
              }), (0, Si.jsx)("span", {
                children: lk(`buildAFactory2Game:${Qt(Fk)}`, {
                  distance: String(Hk)
                })
              })]
            }), Fk.baf2DropOwedComet && (0, Si.jsxs)(zy.u, {
              className: vk("owed", "Baf2DropComet"),
              onClick: () => {
                Kk("owed")
              },
              children: [(0, Si.jsx)("strong", {
                children: lk("buildAFactory2Game:dropOwedComet")
              }), (0, Si.jsx)("span", {
                children: Fk.baf2DropOwedIsotope ? lk("buildAFactory2Game:dropOwedIsotopeDescription") : lk("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== Fk.baf2DropOwedWaitMinutes && (0, Si.jsxs)(zy.u, {
              className: vk("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Si.jsx)("strong", {
                children: lk("buildAFactory2Game:dropOwedComet")
              }), (0, Si.jsx)("span", {
                children: lk("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(Fk.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Si.jsxs)(zy.d, {
              className: vk("below"),
              onClick: () => {
                Kk("below")
              },
              children: [(0, Si.jsx)("strong", {
                children: lk("buildAFactory2Game:dropBelow")
              }), (0, Si.jsx)("span", {
                children: sk
              })]
            }), void 0 !== Fk.baf2DropDigDistance && (0, Si.jsxs)(zy.q, {
              className: vk("dig"),
              onClick: () => {
                Kk("dig")
              },
              children: [(0, Si.jsx)("strong", {
                children: lk("buildAFactory2Game:dropDig")
              }), (0, Si.jsx)("span", {
                children: lk("buildAFactory2Game:dropDigDescription", {
                  distance: String(Fk.baf2DropDigDistance),
                  y: Ki(Fk.baf2DropDigY)
                })
              })]
            }), void 0 !== xk && (0, Si.jsxs)(zy.q, {
              className: vk("grove", "Baf2DropGrove"),
              onClick: () => {
                Kk("grove")
              },
              children: [(0, Si.jsx)("strong", {
                children: lk("buildAFactory2Game:dropGrove")
              }), (0, Si.jsx)("span", {
                children: lk(`buildAFactory2Game:${Vk}`, {
                  distance: String(xk)
                })
              })]
            }), (0, Si.jsxs)(zy.m, {
              className: vk("ruin"),
              disabled: null === wk,
              onClick: () => {
                Kk("ruin")
              },
              children: [(0, Si.jsx)("strong", {
                children: lk("buildAFactory2Game:dropRuin")
              }), (0, Si.jsx)("span", {
                children: Qk
              })]
            }), void 0 !== Jk && (0, Si.jsxs)(zy.G, {
              className: vk("works"),
              onClick: () => {
                Kk("works")
              },
              children: [(0, Si.jsx)("strong", {
                children: lk("buildAFactory2Game:dropOldWorks")
              }), (0, Si.jsx)("span", {
                children: lk("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(Jk)
                })
              })]
            })]
          }), (0, Si.jsx)("p", {
            className: "Baf2DropRenew",
            children: lk("buildAFactory2Game:dropRenew", {
              time: zk
            })
          }), (0, Si.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: ek,
            onToggle: kk => {
              kk.currentTarget.open !== ek && jk(kk.currentTarget.open)
            },
            children: [(0, Si.jsx)("summary", {
              children: lk("buildAFactory2Game:dropSalvageWhat")
            }), (0, Si.jsx)("p", {
              children: lk("buildAFactory2Game:dropSalvageIntro")
            }), (0, Si.jsx)("ul", {
              children: tk.map((kk => {
                let {
                  item: Fk,
                  nameKey: Ik,
                  useKey: Xk,
                  params: Tk
                } = kk;
                return (0, Si.jsxs)("li", {
                  children: [(0, Si.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Si.jsx)(OT.d, {
                      itemName: Fk,
                      amount: 0
                    })
                  }), (0, Si.jsxs)("span", {
                    children: [(0, Si.jsx)("strong", {
                      children: lk(Ik)
                    }), ": ", lk(Xk, Tk)]
                  })]
                }, Fk)
              }))
            })]
          })]
        })
      })
    }
    const Vt = "buildAFactory2Game:";

    function zt(kk, Fk) {
      return kk.sendIslandEdit(`baf2coopleave ${Fk.baf2IslandId}`)
    }

    function St(kk) {
      let {
        card: Fk,
        canRename: Ik,
        done: Tk,
        t: ik
      } = kk;
      const yk = By(),
        [lk, ak] = (0, Xk.useState)(Fk.baf2IslandName),
        qk = Vq(lk),
        Lk = "" === qk || zq(qk),
        tk = () => {
          !Lk && Ik && (qk !== Fk.baf2IslandName ? Tk(yk.sendIslandEdit(`baf2islandrename ${Fk.baf2IslandId} ${qk}`)) : Tk(null))
        },
        Zk = () => {
          Tk(null)
        };
      return (0, Si.jsxs)("div", {
        className: "Baf2IslandForm",
        ...gq(Zk),
        children: [(0, Si.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [ik(`${Vt}islandsRenameLabel`), (0, Si.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: lk,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: mq,
            onChange: kk => {
              ak(kk.target.value)
            },
            ...Aq(tk, Zk)
          })]
        }), "" === qk && (0, Si.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: ik(`${Vt}islandsRenameEmpty`)
        }), zq(qk) && (0, Si.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: ik(`${Vt}islandsNameReserved`)
        }), (0, Si.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Si.jsx)(zy.q, {
            disabled: Lk || !Ik,
            onClick: tk,
            children: ik(`${Vt}islandsRenameSave`)
          }), (0, Si.jsx)(zy.d, {
            onClick: Zk,
            children: ik(`${Vt}islandsCancel`)
          })]
        })]
      })
    }

    function ot(kk) {
      let {
        card: Fk,
        canDelete: Ik,
        done: Tk,
        t: ik
      } = kk;
      const yk = By(),
        [lk, ak] = (0, Xk.useState)(""),
        qk = function(kk, Fk) {
          return Vq(kk).toLowerCase() === Vq(Fk).toLowerCase()
        }(lk, Fk.baf2IslandName),
        Lk = () => {
          qk && Ik && Tk(yk.sendIslandEdit(`baf2islanddelete ${Fk.baf2IslandId}`))
        },
        tk = () => {
          Tk(null)
        },
        Zk = Rq("name"),
        [jk, ek = ""] = ik(`${Vt}islandsDeleteConfirm`, {
          name: Zk
        }).split(Zk);
      return (0, Si.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...gq(tk),
        children: [(0, Si.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Si.jsxs)("span", {
            children: [jk, (0, Si.jsx)("strong", {
              children: Fk.baf2IslandName
            }), ek]
          }), (0, Si.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: lk,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: mq,
            onChange: kk => {
              ak(kk.target.value)
            },
            ...Aq(Lk, tk)
          })]
        }), fq(Fk) && (0, Si.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ik(`${Vt}islandsDeleteLeftBack`)
        }), (0, Si.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Si.jsx)(zy.G, {
            disabled: !qk || !Ik,
            onClick: Lk,
            children: ik(`${Vt}islandsDeleteForGood`)
          }), (0, Si.jsx)(zy.d, {
            onClick: tk,
            children: ik(`${Vt}islandsCancel`)
          })]
        })]
      })
    }

    function vt(kk) {
      let {
        members: Fk,
        t: Ik
      } = kk;
      const Xk = Fk.length;
      return (0, Si.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Si.jsxs)("span", {
          children: [1 === Xk ? Ik(`${Vt}islandsPlayersOne`) : Ik(`${Vt}islandsPlayers`, {
            count: String(Xk)
          }), " "]
        }), Fk.map(((kk, Fk) => (0, Si.jsxs)("span", {
          className: VT()("Baf2IslandMember", {
            Here: kk.baf2MemberHere
          }),
          title: kk.baf2MemberHere ? Ik(`${Vt}islandsPlayerHere`) : void 0,
          children: [kk.baf2MemberName, Fk < Xk - 1 ? ", " : ""]
        }, kk.baf2MemberKey)))]
      })
    }

    function Et(kk) {
      let {
        card: Fk,
        answered: Ik,
        nowMs: Tk,
        t: ik
      } = kk;
      const yk = By(),
        [lk, ak] = (0, Xk.useState)(new Map),
        qk = fq(Fk);
      if (!qk) return null;
      return (0, Si.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Si.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: ik(`${Vt}islandsLeftTitle`)
        }), (0, Si.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: qk.left.map((kk => {
            const Xk = kk.baf2LeftKey,
              Lk = dq(lk.get(Xk), Ik, Tk),
              tk = function(kk) {
                return 1 === kk ? [`${Pq}islandsLeftItemsOne`] : [`${Pq}islandsLeftItems`, {
                  count: String(kk)
                }]
              }(kk.baf2LeftItems);
            return (0, Si.jsx)("li", {
              className: VT()("Baf2IslandPerson", {
                Pending: Lk
              }),
              children: (0, Si.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Si.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: kk.baf2LeftName
                }), (0, Si.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: ik(tk[0], tk[1])
                }), qk.claim && (0, Si.jsx)(zy.q, {
                  className: "Baf2IslandPersonButton",
                  disabled: Lk,
                  onClick: () => {
                    (kk => {
                      const Ik = yk.sendIslandEdit(`baf2coopclaim ${Fk.baf2IslandId} ${kk}`);
                      ak((Fk => new Map(Fk).set(kk, {
                        atMs: Date.now(),
                        answer: Ik
                      })))
                    })(Xk)
                  },
                  children: ik(`${Vt}islandsClaim`)
                })]
              })
            }, Xk)
          }))
        }), qk.goThere && (0, Si.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ik(`${Vt}islandsClaimGoThere`)
        })]
      })
    }

    function Ot(kk) {
      let {
        card: Fk,
        view: Ik,
        blocked: Tk,
        maxIslands: ik,
        answered: yk,
        nowMs: lk,
        done: ak,
        openSocial: qk,
        t: Lk
      } = kk;
      const tk = By(),
        [Zk, jk] = (0, Xk.useState)(new Map),
        [ek, wk] = (0, Xk.useState)(new Map),
        [Hk, Jk] = (0, Xk.useState)(null),
        xk = (0, Xk.useRef)(null);
      Mq(xk);
      const Pk = Fk.baf2IslandId,
        Kk = Fk.baf2IslandCoop,
        Qk = null !== Kk && void 0 !== Kk && Kk.baf2CoopMembers.some((kk => kk.baf2MemberKey === Hk)) ? Hk : null,
        sk = function(kk, Fk) {
          const Ik = kk.baf2IslandCoop;
          return Ik && Bq(Ik) || null !== Fk ? void 0 : kk.baf2IslandInvitable
        }(Fk, Tk),
        Vk = function(kk, Fk) {
          const Ik = kk.baf2IslandCoop;
          return Ik && Bq(Ik) ? {
            key: `${Pq}islandsCoopFull`,
            params: {
              max: String(Ik.baf2CoopMax)
            }
          } : void 0 !== kk.baf2IslandInvitable && null === Fk || Ik && !Ik.baf2CoopManageHere ? null : "degraded" === Fk || "stuck" === Fk ? {
            key: `${Pq}islandsInviteNotLoaded`
          } : null === Fk || function(kk) {
            return "notHome" === kk || "wilds" === kk || "visiting" === kk
          }(Fk) || Eq(Fk) ? {
            key: `${Pq}islandsInviteGoThere`
          } : {
            key: `${Pq}islandsInviteBusy`
          }
        }(Fk, Tk),
        zk = () => {
          var kk;
          Jk(null), null === (kk = xk.current) || void 0 === kk || kk.focus()
        };
      return (0, Si.jsxs)("div", {
        ref: xk,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...gq(null === Qk ? ak : zk),
        children: [Kk && (0, Si.jsxs)(Si.Fragment, {
          children: [(0, Si.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Lk(`${Vt}islandsPlayersTitle`, {
              count: String(Kk.baf2CoopMembers.length),
              max: String(Kk.baf2CoopMax)
            })
          }), (0, Si.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: Kk.baf2CoopMembers.map(((kk, Fk) => {
              const Xk = kk.baf2MemberKey,
                Tk = dq(Zk.get(Xk), yk, lk);
              return (0, Si.jsxs)("li", {
                className: VT()("Baf2IslandPerson", {
                  Pending: Tk
                }),
                children: [(0, Si.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Si.jsx)("span", {
                    className: VT()("Baf2IslandPersonName", {
                      Here: kk.baf2MemberHere
                    }),
                    children: kk.baf2MemberName
                  }), kk.baf2MemberHere && (0, Si.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Lk(`${Vt}islandsPlayerHere`)
                  }), 0 === Fk && (0, Si.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Lk(`${Vt}islandsPlayerOwner`)
                  }), Ik.remove && Fk > 0 && !Tk && Qk !== Xk && (0, Si.jsx)(zy.J, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var kk;
                      Jk(Xk), null === (kk = xk.current) || void 0 === kk || kk.focus()
                    },
                    children: Lk(`${Vt}islandsRemove`)
                  })]
                }), Qk === Xk && (0, Si.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Si.jsx)("p", {
                    children: Uq(Lk, `${Vt}islandsRemoveConfirm`, {
                      player: kk.baf2MemberName
                    })
                  }), (0, Si.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Si.jsx)(zy.G, {
                      onClick: () => {
                        (kk => {
                          const Fk = tk.sendIslandEdit(`baf2coopremove ${Pk} ${kk.baf2MemberKey}`);
                          jk((Ik => new Map(Ik).set(kk.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: Fk
                          }))), zk()
                        })(kk)
                      },
                      children: Lk(`${Vt}islandsRemoveYes`)
                    }), (0, Si.jsx)(zy.d, {
                      onClick: zk,
                      children: Lk(`${Vt}islandsCancel`)
                    })]
                  })]
                })]
              }, Xk)
            }))
          })]
        }), (void 0 !== sk || null !== Vk) && (0, Si.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Lk(`${Vt}islandsInviteTitle`)
        }), !Kk && (void 0 !== sk || null !== Vk) && (0, Si.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Lk(`${Vt}islandsInviteShareNote`)
        }), 0 === (null === sk || void 0 === sk ? void 0 : sk.length) && (0, Si.jsx)(nt, {
          openSocial: qk,
          t: Lk
        }), void 0 !== sk && sk.length > 0 && (0, Si.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: sk.map((kk => {
            const Fk = !0 === kk.baf2InvitableSent || dq(ek.get(kk.baf2InvitableId), yk, lk);
            return (0, Si.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Si.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Si.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: kk.baf2InvitableName
                }), kk.baf2InvitableFull && !Fk && (0, Si.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Lk(`${Vt}islandsInviteTheirFull`, {
                    max: String(ik)
                  })
                }), (Fk || !kk.baf2InvitableFull) && (0, Si.jsx)(zy.q, {
                  className: "Baf2IslandPersonButton",
                  disabled: Fk,
                  onClick: () => {
                    (kk => {
                      const Fk = tk.sendIslandEdit(`baf2coopinvite ${Pk} ${kk}`);
                      wk((Ik => new Map(Ik).set(kk, {
                        atMs: Date.now(),
                        answer: Fk
                      })))
                    })(kk.baf2InvitableId)
                  },
                  children: Lk(Fk ? `${Vt}islandsInvited` : `${Vt}islandsInvite`)
                })]
              })
            }, kk.baf2InvitableId)
          }))
        }), Vk && (0, Si.jsx)(IL, {
          note: Vk,
          t: Lk
        }), (0, Si.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Si.jsx)(zy.d, {
            onClick: ak,
            children: Lk(`${Vt}islandsDone`)
          })
        })]
      })
    }

    function nt(kk) {
      let {
        openSocial: Fk,
        t: Ik
      } = kk;
      return (0, Si.jsxs)(Si.Fragment, {
        children: [(0, Si.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Ik(Fk ? `${Vt}islandsInviteNobody` : `${Vt}islandsInviteNobodyGuest`)
        }), Fk && (0, Si.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Si.jsx)(zy.d, {
            onClick: Fk,
            children: Ik("socialBar:social")
          })
        })]
      })
    }

    function Gt(kk) {
      let {
        className: Fk,
        text: Ik,
        ConfirmButton: Tk,
        confirmLabel: ik,
        canConfirm: yk,
        send: lk,
        done: ak,
        t: qk
      } = kk;
      const Lk = (0, Xk.useRef)(null);
      Mq(Lk);
      const tk = () => {
        ak(null)
      };
      return (0, Si.jsxs)("div", {
        ref: Lk,
        tabIndex: -1,
        className: VT()("Baf2IslandForm", Fk),
        ...gq(tk),
        children: [(0, Si.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Ik
        }), (0, Si.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Si.jsx)(Tk, {
            disabled: !yk,
            onClick: () => {
              yk && ak(lk())
            },
            children: ik
          }), (0, Si.jsx)(zy.d, {
            onClick: tk,
            children: qk(`${Vt}islandsCancel`)
          })]
        })]
      })
    }

    function pt(kk) {
      return "hidden" !== kk
    }

    function ut(kk) {
      var Fk, Ik;
      let {
        card: Tk,
        keepOwn: ik,
        blocked: yk,
        maxIslands: lk,
        serverNowMs: ak,
        nowMs: qk,
        actions: Lk,
        full: tk,
        waits: Zk,
        answered: jk,
        mode: ek,
        setMode: wk,
        pending: Hk,
        onSent: Jk,
        switchTo: xk,
        leave: Pk,
        coopOn: Kk,
        openSocial: Qk,
        t: sk
      } = kk;
      const Vk = By(),
        zk = Tk.baf2IslandActive,
        Sk = zk ? null : function(kk, Fk) {
          if (kk <= 0) return null;
          const Ik = Fk - kk;
          if (Ik < Hi) return [`${Pq}islandsPlayedJustNow`];
          if (Ik < Kq) return [`${Pq}islandsPlayedMinutes`, {
            minutes: String(Math.floor(Ik / Hi))
          }];
          if (Ik < Qq) return [`${Pq}islandsPlayedHours`, {
            hours: String(Math.floor(Ik / Kq))
          }];
          const Xk = Math.floor(Ik / Qq);
          return 1 === Xk ? [`${Pq}islandsPlayedDay`] : [`${Pq}islandsPlayedDays`, {
            days: String(Xk)
          }]
        }(Tk.baf2IslandLastPlayedMs, ak),
        vk = void 0 === (Ek = Tk.baf2IslandItems) ? null : 0 === Ek ? [`${Pq}islandsItemsNone`] : 1 === Ek ? [`${Pq}islandsItemsOne`] : [`${Pq}islandsItems`, {
          count: String(Ek)
        }];
      var Ek;
      const Ok = function(kk) {
          return kk ? 1 === kk ? [`${Pq}islandsWaitingOne`] : [`${Pq}islandsWaiting`, {
            count: String(kk)
          }] : null
        }(Tk.baf2IslandWaiting),
        nk = Tk.baf2IslandUnreadable,
        Gk = Tk.baf2IslandCoop,
        pk = Wq(Tk, Lk, ik, tk, Kk, yk),
        uk = (0, Xk.useRef)(null);
      hq(null !== ek, uk);
      const bk = () => {
          var kk;
          wk(null), null === (kk = uk.current) || void 0 === kk || kk.focus()
        },
        Rk = (kk, Fk) => {
          bk(), null !== kk && Jk(kk, Fk)
        },
        Uk = (kk, Fk) => sk(`${Vt}${kk}`, {
          time: Qi(sk, Fk)
        });
      return (0, Si.jsxs)("li", {
        ref: uk,
        tabIndex: -1,
        className: VT()("Baf2IslandCard", {
          Active: zk,
          Pending: Hk,
          Shared: void 0 !== Gk
        }),
        children: [(0, Si.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Si.jsx)("strong", {
            className: "Baf2IslandName",
            children: Tk.baf2IslandName
          }), zk && (0, Si.jsx)("span", {
            className: "Baf2IslandBadge",
            children: sk(`${Vt}islandsOnThis`)
          }), Gk && (0, Si.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: sk(`${Vt}islandsShared`)
          })]
        }), "member" === (null === Gk || void 0 === Gk ? void 0 : Gk.baf2CoopRole) && (0, Si.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Uq(sk, `${Vt}islandsSharedBy`, {
            owner: Gk.baf2CoopOwner
          })
        }), void 0 !== nk && (0, Si.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: sk("newer" === nk ? `${Vt}islandsUnreadable` : `${Vt}islandsDamaged`)
        }), "corrupt" === nk && tk && (0, Si.jsx)("p", {
          className: "Baf2IslandStats",
          children: sk(`${Vt}islandsDamagedFull`)
        }), void 0 === nk && (0, Si.jsxs)(Si.Fragment, {
          children: [(0, Si.jsx)(FL, {
            tier: Tk.baf2IslandTier,
            t: sk
          }), (0, Si.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Si.jsx)("span", {
              children: 1 === Tk.baf2IslandQuestsDone ? sk(`${Vt}islandsQuestsDoneOne`) : sk(`${Vt}islandsQuestsDone`, {
                count: String(Tk.baf2IslandQuestsDone)
              })
            }), (0, Si.jsx)("span", {
              children: 1 === Tk.baf2IslandMachines ? sk(`${Vt}islandsMachinesOne`) : sk(`${Vt}islandsMachines`, {
                count: String(Tk.baf2IslandMachines)
              })
            }), vk && (0, Si.jsx)("span", {
              children: sk(vk[0], vk[1])
            }), Ok && (0, Si.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: sk(Ok[0], Ok[1])
            }), Sk && (0, Si.jsx)("span", {
              children: sk(Sk[0], Sk[1])
            })]
          })]
        }), Gk && void 0 === Gk.baf2CoopState && "people" !== ek && (0, Si.jsx)(vt, {
          members: Gk.baf2CoopMembers,
          t: sk
        }), null === ek && (0, Si.jsx)(Et, {
          card: Tk,
          answered: jk,
          nowMs: qk,
          t: sk
        }), pk.note && (0, Si.jsx)(IL, {
          note: pk.note,
          className: VT()({
            Unreachable: void 0 !== (null === Gk || void 0 === Gk ? void 0 : Gk.baf2CoopState)
          }),
          t: sk
        }), "rename" === ek && (0, Si.jsx)(St, {
          card: Tk,
          canRename: "enabled" === pk.rename,
          done: Rk,
          t: sk
        }), "delete" === ek && (0, Si.jsx)(ot, {
          card: Tk,
          canDelete: "enabled" === pk.delete,
          done: kk => {
            Rk(kk, Gk ? "delete" : void 0)
          },
          t: sk
        }), "people" === ek && (0, Si.jsx)(Ot, {
          card: Tk,
          view: pk,
          blocked: yk,
          maxIslands: lk,
          answered: jk,
          nowMs: qk,
          done: bk,
          openSocial: Qk,
          t: sk
        }), "leave" === ek && (0, Si.jsx)(Gt, {
          className: "Leave",
          text: Uq(sk, `${Vt}islandsLeaveConfirm`, {
            island: Tk.baf2IslandName,
            owner: null !== (Fk = null === (Ik = Tk.baf2IslandCoop) || void 0 === Ik ? void 0 : Ik.baf2CoopOwner) && void 0 !== Fk ? Fk : ""
          }),
          ConfirmButton: zy.G,
          confirmLabel: sk(`${Vt}islandsLeaveYes`),
          canConfirm: "enabled" === pk.leave,
          send: () => zt(Vk, Tk),
          done: kk => {
            Rk(kk, "leave"), null !== kk && zk && Pk()
          },
          t: sk
        }), "unshare" === ek && (0, Si.jsx)(Gt, {
          className: "Unshare",
          text: Uq(sk, `${Vt}islandsStopSharingConfirm`, {
            island: Tk.baf2IslandName
          }),
          ConfirmButton: zy.q,
          confirmLabel: sk(`${Vt}islandsStopSharing`),
          canConfirm: "enabled" === pk.unshare,
          send: () => Vk.sendIslandEdit(`baf2coopunshare ${Tk.baf2IslandId}`),
          done: kk => {
            Rk(kk), null !== kk && Pk()
          },
          t: sk
        }), null === ek && !Hk && (0, Si.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Tk.baf2IslandName,
          children: [pt(pk.switch) && (0, Si.jsx)(zy.q, {
            disabled: "enabled" !== pk.switch,
            onClick: xk,
            children: "tryAgain" === pk.switchLabel ? sk(`${Vt}islandsTryAgain`) : Zk.switch > 0 ? Uk("islandsSwitchIn", Zk.switch) : sk(`${Vt}islandsSwitch`)
          }), pt(pk.rename) && (0, Si.jsx)(zy.d, {
            disabled: "enabled" !== pk.rename,
            onClick: () => {
              wk("rename")
            },
            children: sk(`${Vt}islandsRename`)
          }), pt(pk.people) && (0, Si.jsx)(zy.d, {
            disabled: "enabled" !== pk.people,
            onClick: () => {
              wk("people")
            },
            children: sk("players" === pk.peopleLabel ? `${Vt}islandsPlayersButton` : `${Vt}islandsInviteButton`)
          }), pt(pk.unshare) && (0, Si.jsx)(zy.d, {
            disabled: "enabled" !== pk.unshare,
            onClick: () => {
              wk("unshare")
            },
            children: sk(`${Vt}islandsStopSharing`)
          }), pt(pk.dismiss) && (0, Si.jsx)(zy.d, {
            disabled: "enabled" !== pk.dismiss,
            onClick: () => {
              Jk(zt(Vk, Tk), "dismiss"), zk && Pk()
            },
            children: sk(`${Vt}islandsDismiss`)
          }), pt(pk.leave) && (0, Si.jsx)(zy.J, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== pk.leave,
            onClick: () => {
              wk("leave")
            },
            children: zk && Zk.switch > 0 ? Uk("islandsLeaveIn", Zk.switch) : sk(`${Vt}islandsLeave`)
          }), pt(pk.delete) && (0, Si.jsx)(zy.J, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== pk.delete,
            onClick: () => {
              wk("delete")
            },
            children: Zk.change > 0 && pk.deleteWaits ? Uk("islandsDeleteIn", Zk.change) : sk(`${Vt}islandsDelete`)
          })]
        })]
      })
    }
    const bt = "buildAFactory2Game:";

    function Rt(kk) {
      let {
        invite: Fk,
        actions: Ik,
        full: Tk,
        maxIslands: ik,
        waitSeconds: yk,
        focus: lk,
        focused: ak,
        join: qk,
        decline: Lk,
        t: tk
      } = kk;
      const [Zk, jk] = (0, Xk.useState)(!1), ek = (0, Xk.useRef)(null);
      hq(Zk, ek), (0, Xk.useEffect)((() => {
        var kk;
        lk && (jk(!0), null === (kk = ek.current) || void 0 === kk || kk.focus(), ak())
      }), [lk, ak]);
      const wk = function(kk, Fk, Ik, Xk, Tk) {
          return Ik ? {
            join: !1,
            note: {
              key: `${Pq}islandsJoinTooMany`,
              params: {
                max: String(Xk)
              }
            }
          } : kk.baf2InvitePlayers >= Tk ? {
            join: !1,
            note: {
              key: `${Pq}islandsJoinFull`
            }
          } : {
            join: Fk.switch,
            note: null
          }
        }(Fk, Ik, Tk, ik, 10),
        Hk = Fk.baf2InviteIsland,
        Jk = Fk.baf2InvitePlayers,
        xk = () => {
          var kk;
          jk(!1), null === (kk = ek.current) || void 0 === kk || kk.focus()
        },
        Pk = yk > 0 && null === wk.note ? tk(`${bt}islandsJoinIn`, {
          time: Qi(tk, yk)
        }) : tk(`${bt}islandsJoin`);
      return (0, Si.jsxs)("li", {
        ref: ek,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Zk ? gq(xk) : {},
        children: [(0, Si.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Si.jsx)("strong", {
            className: "Baf2IslandName",
            children: Hk
          })
        }), (0, Si.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Uq(tk, `${bt}islandsInvitedBy`, {
            owner: Fk.baf2InviteOwner
          })
        }), (0, Si.jsx)(FL, {
          tier: Fk.baf2InviteTier,
          t: tk
        }), (0, Si.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Si.jsx)("span", {
            children: 1 === Jk ? tk(`${bt}islandsPlayersCountOne`) : tk(`${bt}islandsPlayersCount`, {
              count: String(Jk)
            })
          })
        }), wk.note && (0, Si.jsx)(IL, {
          note: wk.note,
          t: tk
        }), Zk && (0, Si.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Uq(tk, `${bt}islandsJoinConfirm`, {
            island: Hk
          })
        }), !Zk && (0, Si.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Hk,
          children: [(0, Si.jsx)(zy.q, {
            disabled: !wk.join,
            onClick: () => {
              var kk;
              jk(!0), null === (kk = ek.current) || void 0 === kk || kk.focus()
            },
            children: Pk
          }), (0, Si.jsx)(zy.d, {
            onClick: Lk,
            children: tk(`${bt}islandsDecline`)
          })]
        }), Zk && (0, Si.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Si.jsx)(zy.q, {
            disabled: !wk.join,
            onClick: qk,
            children: tk(`${bt}islandsJoinYes`)
          }), (0, Si.jsx)(zy.d, {
            onClick: xk,
            children: tk(`${bt}islandsCancel`)
          })]
        })]
      })
    }

    function Ut(kk) {
      let {
        invites: Fk,
        actions: Ik,
        full: Xk,
        maxIslands: Tk,
        waitSeconds: ik,
        focus: yk,
        focused: lk,
        leave: ak,
        declined: qk,
        t: Lk
      } = kk;
      const tk = By();
      return (0, Si.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Si.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Lk(`${bt}islandsInvitesTitle`)
        }), (0, Si.jsx)("ul", {
          className: "Baf2IslandCards",
          children: Fk.map((kk => {
            const Fk = kk.baf2InviteId;
            return (0, Si.jsx)(Rt, {
              invite: kk,
              actions: Ik,
              full: Xk,
              maxIslands: Tk,
              waitSeconds: ik,
              focus: yk === Fk,
              focused: lk,
              join: () => {
                tk.send(`baf2coopaccept ${Fk}`), ak()
              },
              decline: () => {
                tk.send(`baf2coopdecline ${Fk}`), qk(Fk)
              },
              t: Lk
            }, Fk)
          }))
        })]
      })
    }
    const Ct = "buildAFactory2Game:";

    function Nt(kk) {
      let {
        cards: Fk,
        activeName: Ik,
        canStart: Tk,
        waitSeconds: ik,
        leave: yk,
        t: lk
      } = kk;
      const ak = By(),
        [qk, Lk] = (0, Xk.useState)(!1),
        [tk, Zk] = (0, Xk.useState)(""),
        jk = (0, Xk.useRef)(null);
      hq(qk, jk), (0, Xk.useEffect)((() => {
        var kk;
        qk && (null === (kk = jk.current) || void 0 === kk || kk.focus())
      }), [qk]);
      const ek = Sq(Fk),
        wk = Vq(tk),
        Hk = zq(wk),
        Jk = () => {
          Tk && !Hk && (ak.send("" === wk || wk === ek ? hk : `${hk} ${wk}`), yk())
        },
        xk = () => {
          var kk;
          Lk(!1), null === (kk = jk.current) || void 0 === kk || kk.focus()
        };
      return (0, Si.jsxs)("li", {
        ref: jk,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...qk ? gq(xk) : {},
        children: [(0, Si.jsx)("strong", {
          className: "Baf2IslandName",
          children: lk(`${Ct}islandsNewTitle`)
        }), !qk && (0, Si.jsx)("p", {
          className: "Baf2IslandStats",
          children: lk(`${Ct}islandsNewNote`)
        }), qk && (0, Si.jsxs)(Si.Fragment, {
          children: [(0, Si.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Uq(lk, `${Ct}islandsNewConfirm`, {
              name: Ik
            })
          }), (0, Si.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [lk(`${Ct}islandsNewNameLabel`), (0, Si.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: tk,
              placeholder: ek,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: mq,
              onChange: kk => {
                Zk(kk.target.value)
              },
              ...Aq(Jk, xk)
            })]
          }), Hk && (0, Si.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: lk(`${Ct}islandsNameReserved`)
          })]
        }), (0, Si.jsxs)("div", {
          className: VT()("Baf2IslandButtons", {
            Stacked: qk
          }),
          children: [(0, Si.jsx)(zy.q, {
            disabled: !Tk || qk && Hk,
            onClick: () => {
              if (!qk) return Zk(ek), void Lk(!0);
              Jk()
            },
            children: ik > 0 ? lk(`${Ct}islandsNewIn`, {
              time: Qi(lk, ik)
            }) : lk(qk ? `${Ct}islandsNewConfirmButton` : `${Ct}islandsNew`)
          }), qk && (0, Si.jsx)(zy.d, {
            onClick: xk,
            children: lk(`${Ct}islandsCancel`)
          })]
        })]
      })
    }

    function ct(kk) {
      var Fk, Ik;
      let {
        message: Tk,
        arrivedAtMs: ik,
        close: yk,
        leave: lk,
        openSocial: ak
      } = kk;
      const qk = By(),
        {
          t: Lk
        } = (0, vT.y)(),
        tk = kL(1e3),
        [Zk, jk] = (0, Xk.useState)(null),
        [ek, wk] = (0, Xk.useState)(new Map),
        [Hk, Jk] = (0, Xk.useState)(new Set),
        xk = Tk.baf2IslandCards,
        Pk = function(kk, Fk, Ik, Xk) {
          return (null !== kk && void 0 !== kk ? kk : []).filter((kk => Fk + kk.baf2InviteLeftMs > Ik && !Xk.has(kk.baf2InviteId)))
        }(Tk.baf2IslandsInvites, ik, tk, Hk),
        Kk = Pk.map((kk => kk.baf2InviteId)).join(" "),
        Qk = (0, Xk.useRef)(null),
        sk = rq(Qk);
      Dq(), (0, Xk.useEffect)((() => {
        var kk, Fk;
        null !== (kk = Qk.current) && void 0 !== kk && kk.contains(document.activeElement) || (null === (Fk = Qk.current) || void 0 === Fk || Fk.focus())
      }), [Tk, Kk]), (0, Xk.useEffect)((() => {
        wk((kk => function(kk, Fk, Ik, Xk) {
          const Tk = new Map;
          for (const ik of Fk) {
            const Fk = kk.get(ik.baf2IslandId);
            Fk && (void 0 !== Fk.untilGone || Xk < Fk.answer) && pq(Fk, ik, Ik) && Tk.set(ik.baf2IslandId, Fk)
          }
          return Tk.size === kk.size ? kk : Tk
        }(kk, Tk.baf2IslandCards, Date.now(), Tk.baf2IslandsAnswered)))
      }), [Tk]);
      const Vk = sq(ik, Tk.baf2IslandsWaitMs, tk),
        zk = Tk.baf2IslandsBlocked,
        Sk = Oq(zk, Vk),
        vk = function(kk, Fk) {
          const Ik = Oq(kk, 0);
          return {
            switch: Ik.switch ? Fk : 0,
            change: Ik.change ? Fk : 0
          }
        }(zk, Vk),
        Ek = xk.length >= Tk.baf2IslandsMax,
        Ok = xk.length > 0,
        nk = function(kk, Fk, Ik) {
          return kk + Math.max(0, Ik - Fk)
        }(Tk.baf2IslandsNowMs, ik, tk),
        Gk = null !== (Fk = null === (Ik = xk.find((kk => kk.baf2IslandActive))) || void 0 === Ik ? void 0 : Ik.baf2IslandName) && void 0 !== Fk ? Fk : "",
        pk = function(kk) {
          const Fk = kk.filter(cq).length;
          return Fk <= 1 && Fk < kk.length
        }(xk),
        uk = !0 === Tk.baf2IslandsCoop,
        bk = function(kk, Fk) {
          const Ik = kk.find((kk => kk.baf2IslandActive)),
            Xk = null === Ik || void 0 === Ik ? void 0 : Ik.baf2IslandCoop;
          return Ik && "member" === (null === Xk || void 0 === Xk ? void 0 : Xk.baf2CoopRole) ? {
            key: `${Pq}islandsKeepOwnMember`,
            names: {
              owner: Xk.baf2CoopOwner,
              island: Ik.baf2IslandName
            }
          } : {
            key: Fk ? `${Pq}islandsKeepOwn` : `${Pq}islandsKeepOwnSolo`
          }
        }(xk, uk),
        [Rk, Uk] = (0, Xk.useState)(null);
      (0, Xk.useEffect)((() => {
        void 0 !== Tk.baf2IslandsFocusInvite && Uk(Tk.baf2IslandsFocusInvite)
      }), [Tk]);
      const Ck = (0, Xk.useCallback)((() => {
          Uk(null)
        }), []),
        Nk = Zk ? xk.find((kk => kk.baf2IslandId === Zk.id)) : void 0,
        ck = Zk && Nk && "hidden" !== Wq(Nk, Sk, pk, Ek, uk, zk)[Zk.mode] ? Zk : null;
      return (0, Si.jsx)(Vy.c, {
        close: yk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Si.jsxs)("section", {
          ref: Qk,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: sk ? {
            marginTop: `${sk.marginTop}px`,
            maxHeight: `${sk.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsxs)("div", {
              children: [(0, Si.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Lk(`${Ct}islandsTitle`)
              }), Ok && (0, Si.jsx)("p", {
                children: Lk(`${Ct}islandsSubtitle`, {
                  count: String(xk.length),
                  max: String(Tk.baf2IslandsMax)
                })
              })]
            }), (0, Si.jsx)(zy.k, {
              ariaLabel: Lk(`${Ct}islandsClose`),
              onClick: yk
            })]
          }), (0, Si.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== zk && (0, Si.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Uq(Lk, oq(zk, vq(xk)), {
                island: Gk
              })
            }), Ok && Pk.length > 0 && (0, Si.jsx)(Ut, {
              invites: Pk,
              actions: Sk,
              full: Ek,
              maxIslands: Tk.baf2IslandsMax,
              waitSeconds: vk.switch,
              focus: Rk,
              focused: Ck,
              leave: lk,
              declined: kk => {
                Jk((Fk => new Set(Fk).add(kk)))
              },
              t: Lk
            }), Ok && (0, Si.jsxs)(Si.Fragment, {
              children: [Ek && (0, Si.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Lk(`${Ct}islandsFull`, {
                  max: String(Tk.baf2IslandsMax)
                })
              }), (0, Si.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Uq(Lk, bk.key, bk.names)
              }), (0, Si.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [xk.map((kk => {
                  const Fk = kk.baf2IslandId;
                  return (0, Si.jsx)(ut, {
                    card: kk,
                    keepOwn: pk,
                    coopOn: uk,
                    openSocial: ak,
                    blocked: zk,
                    maxIslands: Tk.baf2IslandsMax,
                    serverNowMs: nk,
                    nowMs: tk,
                    actions: Sk,
                    full: Ek,
                    waits: vk,
                    answered: Tk.baf2IslandsAnswered,
                    mode: (null === ck || void 0 === ck ? void 0 : ck.id) === Fk ? ck.mode : null,
                    setMode: kk => {
                      jk(null === kk ? null : {
                        id: Fk,
                        mode: kk
                      })
                    },
                    pending: pq(ek.get(Fk), kk, tk),
                    onSent: (Ik, Xk) => {
                      wk((Tk => {
                        const ik = {
                          atMs: Date.now(),
                          from: kk.baf2IslandName,
                          answer: Ik
                        };
                        return new Map(Tk).set(Fk, Xk ? {
                          ...ik,
                          untilGone: Xk
                        } : ik)
                      }))
                    },
                    leave: lk,
                    switchTo: () => {
                      qk.send(`baf2islandswitch ${Fk}`), lk()
                    },
                    t: Lk
                  }, Fk)
                })), !Ek && (0, Si.jsx)(Nt, {
                  cards: xk,
                  activeName: Gk,
                  canStart: Sk.change,
                  waitSeconds: vk.change,
                  leave: lk,
                  t: Lk
                })]
              })]
            })]
          })]
        })
      })
    }
    var Wt = Ik(5016);
    const ft = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Uk: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      Bt = Object.keys(ft),
      dt = new Set([...Object.keys(hF), ...[...bF.Press.recipes, ...bF["Wire Mill"].recipes].map((kk => kk.output))]),
      Yt = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      At = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      gt = / Bar$|Alloy$/,
      mt = /Porkchop|Beef|Mutton|Venison|Steak/,
      ht = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const rt = (0, Xk.memo)((function(kk) {
      let {
        item: Fk,
        name: Ik,
        amount: Xk,
        selected: Tk,
        small: ik,
        onPick: yk
      } = kk;
      return (0, Si.jsxs)("button", {
        type: "button",
        className: VT()("Baf2TermTile", {
          On: Tk,
          Small: ik
        }),
        "aria-label": `${Ik}: ${Xk}`,
        "aria-pressed": Tk,
        onClick: () => {
          yk(Fk)
        },
        children: [(0, Si.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Si.jsx)(OT.d, {
            itemName: Fk,
            amount: 0
          })
        }), (0, Si.jsx)("span", {
          className: "Baf2TermCount",
          children: Pi(Xk, 1e4)
        }), !ik && (0, Si.jsx)("span", {
          className: "Baf2TermName",
          children: Ik
        })]
      })
    }));

    function Dt(kk) {
      let {
        store: Fk,
        close: Ik,
        send: Tk
      } = kk;
      const {
        t: ik
      } = (0, vT.y)(), {
        isTouchScreen: yk
      } = (0, KT.j)(["isTouchScreen"]);
      ! function(kk) {
        const [Fk, Ik] = (0, Xk.useState)(kk.version);
        (0, Xk.useEffect)((() => (Ik(kk.version), kk.subscribe((() => {
          Ik(kk.version)
        })))), [kk])
      }(Fk);
      const [lk, ak] = (0, Xk.useState)("all"), [qk, Lk] = (0, Xk.useState)(!1), [tk, Zk] = (0, Xk.useState)(""), [jk, ek] = (0, Xk.useState)(""), [wk, Hk] = (0, Xk.useState)(null), [Jk, xk] = (0, Xk.useState)(!1), [Pk, Kk, Qk] = function() {
        const kk = (0, Xk.useRef)(null),
          [Fk, Ik] = (0, Xk.useState)(!1),
          Tk = () => {
            const Fk = kk.current;
            Ik(null !== Fk && Fk.scrollLeft + Fk.clientWidth < Fk.scrollWidth - 1)
          };
        return (0, Xk.useEffect)(Tk), (0, Xk.useEffect)((() => {
          const Fk = kk.current;
          if (!Fk) return;
          const Ik = new ResizeObserver(Tk);
          return Ik.observe(Fk), () => {
            Ik.disconnect()
          }
        }), []), [kk, Fk, Tk]
      }(), sk = (0, Xk.useMemo)((() => new Map), [ik]), Vk = kk => {
        let Fk = sk.get(kk);
        return void 0 === Fk && (Fk = function(kk, Fk) {
          const Ik = /^(.+) \((.+)\)$/.exec(kk);
          return Ik ? Fk(Ik[2], Ik[1]) : kk
        }(Ti(ik, kk), ((kk, Fk) => ik("buildAFactory2Game:terminalTileKind", {
          kind: kk,
          base: Fk
        }))), sk.set(kk, Fk)), Fk
      }, zk = Fk.isReadOnly(), Sk = Jk && !zk, vk = Fk.recent(), Ek = Fk.items(), Ok = jk.trim().toLowerCase(), nk = Sk ? Fk.heldItems(wk) : ("recent" === lk ? vk : Ek).filter((kk => {
        const Fk = Vk(kk);
        return ("all" === lk || "recent" === lk || function(kk) {
          return Zi(kk) ? "farm" : Yt.test(kk) ? "nuclear" : gt.test(kk) ? "bars" : mt.test(kk) ? "farm" : At.test(kk) ? "Uk" : dt.has(kk) ? "parts" : ht.test(kk) ? "farm" : "other"
        }(kk) === lk) && ("" === Ok || Fk.toLowerCase().includes(Ok)) && ("" === tk || Fk.toUpperCase().startsWith(tk))
      })), Gk = new Set(Ek.map((kk => Vk(kk).charAt(0).toUpperCase()))), pk = kk => Sk ? Fk.heldAmount(kk) : Fk.amount(kk), uk = !Sk && "recent" !== lk && vk.length > 0, bk = function(kk, Fk) {
        return null !== kk && Fk.includes(kk) ? kk : null
      }(wk, uk ? [...nk, ...vk] : nk), Rk = null === bk ? 0 : Fk.amount(bk), Uk = null === bk ? 0 : pk(bk), Ck = (0, Xk.useCallback)((kk => {
        Hk((Fk => Fk === kk ? null : kk))
      }), []), Nk = kk => Uk > 0 || Sk && null === bk && "fill" === kk && nk.length > 0, ck = Sk ? [
        ["one", ik("buildAFactory2Game:terminalStoreOne")],
        ["stack", ik("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", ik(null === bk ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", ik("buildAFactory2Game:terminalTakeOne")],
        ["stack", ik("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", ik("buildAFactory2Game:terminalFill")]
      ], Wk = Sk ? ik("buildAFactory2Game:terminalStoreEmpty") : "" !== tk ? ik("buildAFactory2Game:terminalEmptyLetter", {
        letter: tk
      }) : "" !== Ok ? ik("buildAFactory2Game:terminalEmptySearch", {
        query: jk
      }) : ik("buildAFactory2Game:terminalEmpty");
      return (0, Si.jsx)(Vy.c, {
        close: Ik,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Si.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsxs)("div", {
              children: [(0, Si.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: ik(Fk.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Si.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Si.jsx)("span", {
                  className: VT()({
                    Off: Sk
                  }),
                  children: ik("buildAFactory2Game:terminalSubtitle", {
                    count: String(Fk.siloCount())
                  })
                }), !zk && (0, Si.jsx)("span", {
                  className: VT()({
                    Off: !Sk
                  }),
                  children: ik("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !zk && (0, Si.jsx)(Wt.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: ik("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: ik("buildAFactory2Game:terminalModeStore")
              }],
              value: Sk ? "store" : "take",
              onChange: kk => {
                xk("store" === kk), Hk(null)
              },
              ariaLabel: ik("buildAFactory2Game:terminalModes")
            }), (0, Si.jsx)(zy.k, {
              onClick: Ik
            })]
          }), (0, Si.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Si.jsxs)("div", {
              className: VT()("Baf2TermTools", {
                Hidden: Sk
              }),
              children: [(0, Si.jsx)("div", {
                ref: Pk,
                className: VT()("Baf2TermChips", {
                  MoreRight: Kk
                }),
                onScroll: Qk,
                children: qk ? (0, Si.jsxs)(Si.Fragment, {
                  children: [(0, Si.jsx)("button", {
                    type: "button",
                    "aria-label": ik("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Lk(!1), Zk("")
                    },
                    children: "\u2190"
                  }), [...Gk].sort().map((kk => (0, Si.jsx)("button", {
                    type: "button",
                    className: VT()({
                      On: tk === kk
                    }),
                    onClick: () => {
                      Zk(tk === kk ? "" : kk)
                    },
                    children: kk
                  }, kk)))]
                }) : (0, Si.jsxs)(Si.Fragment, {
                  children: [(0, Si.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Lk(!0)
                    },
                    children: ik("buildAFactory2Game:terminalLetters")
                  }), Bt.map((kk => (0, Si.jsx)("button", {
                    type: "button",
                    className: VT()({
                      On: lk === kk
                    }),
                    onClick: () => {
                      ak(kk)
                    },
                    children: ik(ft[kk])
                  }, kk)))]
                })
              }), !yk && (0, Si.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: jk,
                placeholder: ik("buildAFactory2Game:terminalSearch"),
                "aria-label": ik("buildAFactory2Game:terminalSearch"),
                onChange: kk => {
                  ek(kk.target.value)
                },
                onKeyDown: kk => {
                  kk.stopPropagation()
                }
              }), (0, Si.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": ik("buildAFactory2Game:terminalResort"),
                title: ik("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  Fk.resort()
                },
                children: "\u21c5"
              })]
            }), uk && (0, Si.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Si.jsx)("span", {
                children: ik(ft.recent)
              }), vk.map((kk => (0, Si.jsx)(rt, {
                item: kk,
                name: Vk(kk),
                amount: Fk.amount(kk),
                selected: bk === kk,
                small: !0,
                onPick: Ck
              }, kk)))]
            }), (0, Si.jsx)("div", {
              className: "Baf2TermTiles",
              children: nk.length > 0 ? nk.map((kk => (0, Si.jsx)(rt, {
                item: kk,
                name: Vk(kk),
                amount: pk(kk),
                selected: bk === kk,
                onPick: Ck
              }, kk))) : (0, Si.jsx)("p", {
                className: "Baf2TermEmpty",
                children: Wk
              })
            }), (0, Si.jsxs)("div", {
              className: VT()("Baf2TermActions", {
                Hidden: Sk && 0 === nk.length
              }),
              children: [(0, Si.jsx)("span", {
                className: "Baf2TermPicked",
                children: zk ? (0, Si.jsxs)(Si.Fragment, {
                  children: [null !== bk && Rk > 0 ? Vk(bk) : ik("buildAFactory2Game:terminalVisiting"), (0, Si.jsx)("small", {
                    children: ik("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== bk ? (0, Si.jsxs)(Si.Fragment, {
                  children: [Vk(bk), (0, Si.jsx)("small", {
                    children: ik("buildAFactory2Game:terminalStored", {
                      amount: Rk.toLocaleString()
                    })
                  })]
                }) : ik(Sk ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !zk && ck.map((kk => {
                let [Ik, Xk] = kk;
                const ik = "fill" === Ik ? zy.m : zy.d;
                return (0, Si.jsx)(ik, {
                  className: "Baf2TermTake",
                  disabled: !Nk(Ik),
                  onClick: () => {
                    (kk => {
                      Nk(kk) && Tk(null === bk ? Fk.putAll() : Sk ? Fk.put(kk, bk) : Fk.take(kk, bk))
                    })(Ik)
                  },
                  children: Xk
                }, Ik)
              }))]
            })]
          })]
        })
      })
    }

    function Mt(kk) {
      let {
        kind: Fk,
        icon: Ik,
        label: Xk,
        number: Tk,
        preview: ik,
        note: yk,
        tone: lk = null,
        share: ak,
        onExplain: qk
      } = kk;
      return (0, Si.jsxs)("button", {
        type: "button",
        className: VT()("NxLane", Fk, {
          Warn: "warn" === lk,
          Danger: "danger" === lk
        }),
        onClick: qk,
        children: [(0, Si.jsxs)("span", {
          className: "NxLaneHead",
          children: [Ik, (0, Si.jsx)("span", {
            className: "NxLaneLabel",
            children: Xk
          })]
        }), (0, Si.jsxs)("span", {
          className: "NxLaneNum",
          children: [Tk, ik && (0, Si.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", ik]
          })]
        }), (0, Si.jsx)("span", {
          className: "NxLaneNote",
          children: yk
        }), void 0 !== ak && (0, Si.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, ak)) + "%"
          }
        })]
      })
    }

    function kZ(kk) {
      let {
        kind: Fk,
        step: Ik,
        short: Xk,
        planned: Tk
      } = kk;
      return (0, Si.jsx)("i", {
        className: VT()("NxPipe", Fk, `Step${Ik}`, {
          Short: Xk,
          Planned: Tk
        }),
        "aria-hidden": "true"
      })
    }

    function FZ(kk) {
      let {
        max: Fk,
        bands: Ik,
        ticks: Xk,
        now: Tk,
        settle: ik,
        settleTone: yk,
        onExplain: lk
      } = kk;
      const ak = kk => Math.max(0, Math.min(Fk, kk)) / Fk * 100 + "%";
      let qk = 0;
      return (0, Si.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: lk,
        children: [(0, Si.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [Ik.map((kk => {
            const Fk = {
              bottom: ak(qk),
              height: `calc(${ak(kk.upTo)} - ${ak(qk)})`
            };
            return qk = kk.upTo, (0, Si.jsx)("i", {
              className: VT()("NxGaugeBand", kk.kind),
              style: Fk
            }, kk.kind)
          })), null !== Tk && (0, Si.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: ak(Tk)
            }
          }), void 0 !== ik && null !== ik && (0, Si.jsx)("i", {
            className: VT()("NxGaugeSettle", {
              Bad: "bad" === yk
            }),
            style: {
              bottom: ak(ik)
            }
          })]
        }), (0, Si.jsx)("span", {
          className: "NxGaugeTicks",
          children: Xk.map((kk => (0, Si.jsx)("small", {
            style: {
              bottom: ak(kk)
            },
            children: kk
          }, kk)))
        })]
      })
    }

    function IZ(kk) {
      const [Fk, Ik] = (0, Xk.useState)(null), [Tk, ik] = (0, Xk.useState)((() => {
        try {
          return null === window.localStorage.getItem(kk)
        } catch {
          return !1
        }
      })), yk = (0, Xk.useRef)(null);
      (0, Xk.useEffect)((() => () => {
        null !== yk.current && clearTimeout(yk.current)
      }), []);
      const lk = (0, Xk.useCallback)((Fk => {
          Ik(Fk), ik(!1);
          try {
            window.localStorage.setItem(kk, "1")
          } catch {}
          null !== yk.current && clearTimeout(yk.current), yk.current = setTimeout((() => {
            yk.current = null, Ik(null)
          }), 5e3)
        }), [kk]),
        ak = (0, Xk.useCallback)(((Fk, Ik) => {
          const Xk = `${kk}:${Fk}`;
          try {
            if (null !== window.localStorage.getItem(Xk)) return;
            window.localStorage.setItem(Xk, "1")
          } catch {
            return
          }
          lk(Ik)
        }), [lk, kk]);
      return {
        explained: Fk,
        hinting: Tk,
        explain: lk,
        explainOnce: ak
      }
    }

    function XZ(kk) {
      let {
        text: Fk,
        tone: Ik,
        explained: Xk
      } = kk;
      return (0, Si.jsxs)("p", {
        className: VT()("NxStatus", null === Xk ? Ik : "Explain"),
        "aria-live": "polite",
        children: [null !== Xk && (0, Si.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Xk && void 0 !== Xk ? Xk : Fk]
      })
    }
    const TZ = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function iZ(kk, Fk) {
      const Ik = Number(kk[Fk]);
      return 1 === Ik || 2 === Ik || 3 === Ik ? Ik : 0
    }

    function yZ(kk) {
      return !!za("reactor", kk.baf2RxNeed) || void 0 !== kk.baf2RxLayout && kk.baf2RxNeed.some((kk => {
        let [Fk, Ik] = kk;
        return Ik > 0 && TZ.includes(Fk)
      }))
    }
    const lZ = "buildAFactory2Game:";

    function aZ(kk) {
      let {
        status: Fk,
        store: Ik,
        busy: Xk
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)();
      return function(kk) {
        return 0 !== (kk.baf2RxFlags & HF) && (!kk.baf2RxFormed || void 0 !== kk.baf2RxLayout)
      }(Fk) ? (0, Si.jsx)(zy.m, {
        disabled: !yZ(Fk) || Xk,
        onClick: () => {
          Ik.tap("fill", (() => {
            Ik.send("fill")
          }))
        },
        children: Tk(void 0 !== Fk.baf2RxLayout ? `${lZ}rxFillLayout` : `${lZ}rxFill`)
      }) : null
    }

    function qZ(kk) {
      let {
        status: Fk,
        store: Ik,
        readOnly: Tk,
        bare: ik = !1
      } = kk;
      const {
        t: yk
      } = (0, vT.y)(), lk = Fk.baf2RxLayout, [ak, qk, Lk] = Fk.baf2RxDims, tk = (0, Xk.useMemo)((() => {
        if (void 0 === lk) return 0;
        const kk = Uint8Array.from(lk, ((kk, Fk) => iZ(lk, Fk)));
        return Ia([ak - 2, qk - 2, Lk - 2], kk).max
      }), [lk, ak, qk, Lk]);
      return void 0 === lk ? null : (0, Si.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!ik && (0, Si.jsx)("span", {
          className: "Baf2RxHint",
          children: yk(`${lZ}rxLayoutLine`, {
            amount: Ga(tk)
          })
        }), !Tk && (0, Si.jsx)(zy.d, {
          onClick: () => {
            Ik.send("layout", 0)
          },
          children: yk(`${lZ}rxLayoutHide`)
        })]
      })
    }
    const LZ = "buildAFactory2Game:",
      tZ = {
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

    function ZZ(kk) {
      let {
        id: Fk,
        title: Ik,
        body: Xk,
        bodyParams: Tk,
        yes: ik,
        cancel: yk,
        confirm: lk
      } = kk;
      const {
        t: ak
      } = (0, vT.y)();
      return (0, Si.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": Fk,
        children: [(0, Si.jsx)("h3", {
          id: Fk,
          children: ak(Ik)
        }), (0, Si.jsx)("p", {
          children: ak(Xk, Tk)
        }), (0, Si.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Si.jsx)(zy.g, {
            onClick: yk,
            children: ak(`${LZ}rxCancel`)
          }), (0, Si.jsx)(zy.G, {
            onClick: lk,
            children: ak(ik)
          })]
        })]
      })
    }

    function jZ(kk) {
      const [Fk, Ik] = (0, Xk.useState)((() => kk.get()));
      return (0, Xk.useEffect)((() => (Ik(kk.get()), kk.subscribe((() => {
        Ik(kk.get())
      })))), [kk]), Fk
    }

    function eZ(kk) {
      let {
        kind: Fk,
        cap: Ik,
        busy: Tk = !1,
        whyNot: ik = null,
        apart: yk
      } = kk;
      const {
        t: lk
      } = (0, vT.y)(), [ak, qk] = (0, Xk.useState)(!1), Lk = null !== ik, tk = (0, Xk.useRef)(null);
      if ((0, Xk.useEffect)((() => {
          Lk && qk(!1)
        }), [Lk]), (0, Xk.useLayoutEffect)((() => {
          var kk;
          const Fk = null === (kk = tk.current) || void 0 === kk ? void 0 : kk.firstElementChild;
          Lk ? null === Fk || void 0 === Fk || Fk.setAttribute("aria-disabled", "true") : Tk || null === Fk || void 0 === Fk || Fk.removeAttribute("aria-disabled")
        })), !ak || Lk) return (0, Si.jsx)("span", {
        ref: tk,
        className: "Baf2RxApartWrap",
        children: (0, Si.jsx)(zy.g, {
          disabled: Tk,
          className: VT()({
            Baf2RxNotYet: Lk
          }),
          onClick: () => {
            ik ? ik() : qk(!0)
          },
          children: lk(`${LZ}rxApart`)
        })
      });
      const Zk = "battery" === Fk,
        jk = void 0 === Ik ? `${LZ}batApartConfirmBodyPlan` : `${LZ}batApartConfirmBody`;
      return (0, Si.jsx)(ZZ, {
        id: `baf2ApartTitle_${Fk}`,
        title: Zk ? `${LZ}batApartConfirmTitle` : `${LZ}rxApartConfirmTitle`,
        body: Zk ? jk : `${LZ}rxApartConfirmBody`,
        bodyParams: void 0 === Ik ? void 0 : {
          cap: Ik
        },
        yes: `${LZ}rxApart`,
        cancel: () => {
          qk(!1)
        },
        confirm: () => {
          qk(!1), yk()
        }
      })
    }

    function wZ(kk) {
      let {
        mood: Fk,
        big: Ik
      } = kk;
      const Xk = tZ[Fk],
        Tk = [];
      return Xk.rows.forEach(((kk, Fk) => {
        for (let Ik = 0; Ik < kk.length; Ik++) "." !== kk[Ik] && Tk.push((0, Si.jsx)("rect", {
          x: Ik + 1,
          y: Fk + 1,
          width: 1,
          height: 1,
          fill: "w" === kk[Ik] ? "#8fd3ff" : Xk.colour
        }, `${Ik},${Fk}`))
      })), (0, Si.jsxs)("svg", {
        className: VT()("Baf2RxFace", {
          Big: Ik,
          Alarm: "alarm" === Fk
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Si.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Si.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Tk]
      })
    }

    function HZ(kk) {
      return xi(kk, "+").replace("+", "")
    }

    function JZ(kk) {
      let {
        kind: Fk,
        dims: Ik,
        cap: Xk,
        disabled: Tk,
        compact: ik,
        resize: yk
      } = kk;
      const {
        t: lk
      } = (0, vT.y)(), {
        min: ak,
        max: qk
      } = cI(Fk), Lk = Math.min(Xk, qk), tk = [`${LZ}rxWide`, `${LZ}rxTall`, `${LZ}rxDeep`], Zk = {
        w: String(Ik[0]),
        h: String(Ik[1]),
        d: String(Ik[2]),
        blocks: String(na(Fk, Ik))
      };
      return (0, Si.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Si.jsx)("div", {
          className: "Baf2RxSteppers",
          children: Ik.map(((kk, Fk) => {
            const ik = Xk => {
                const Tk = [Ik[0], Ik[1], Ik[2]];
                Tk[Fk] = kk + Xk, yk(Tk)
              },
              Zk = kk >= Lk;
            return (0, Si.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Si.jsx)("button", {
                type: "button",
                "aria-label": lk(`${LZ}rxSmaller`),
                disabled: Tk || kk <= ak,
                onClick: () => {
                  ik(-1)
                },
                children: "\u2212"
              }), (0, Si.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [kk, (0, Si.jsx)("small", {
                  children: lk(tk[Fk])
                })]
              }), (0, Si.jsx)("button", {
                type: "button",
                "aria-label": lk(`${LZ}rxBigger`),
                disabled: Tk || Zk,
                onClick: () => {
                  ik(1)
                },
                children: Zk && Xk < qk ? "\ud83d\udd12" : "+"
              })]
            }, tk[Fk])
          }))
        }), !ik && (0, Si.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === Fk ? lk(`${LZ}rxSizeLine`, {
            ...Zk,
            water: String(Oa(Ik))
          }) : lk(`${LZ}batSizeLine`, Zk)
        })]
      })
    }

    function xZ(kk) {
      let {
        on: Fk,
        label: Ik,
        disabled: Xk,
        locked: Tk,
        pending: ik,
        toggle: yk
      } = kk;
      return (0, Si.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": Fk,
        disabled: Xk,
        "aria-disabled": Tk || void 0,
        className: VT()("Baf2RxSwitch", {
          On: Fk,
          Locked: Tk,
          Pending: ik
        }),
        onClick: yk,
        children: [(0, Si.jsx)("span", {
          className: "Baf2RxKnob"
        }), Ik]
      })
    }
    const PZ = "buildAFactory2Game:",
      KZ = .95;

    function QZ(kk, Fk) {
      return 0 !== (kk.baf2RxFlags & Fk)
    }

    function sZ(kk) {
      return "cryo" === kk ? Mk.n : Mk.p
    }

    function VZ(kk) {
      var Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk;
      return kk.baf2RxCryo ? {
        qj: "cryo",
        usePerS: null !== (Tk = kk.baf2RxCryoUse) && void 0 !== Tk ? Tk : 0,
        needPerS: null !== (ik = kk.baf2RxCryoNeed) && void 0 !== ik ? ik : 0,
        inPerS: null !== (yk = kk.baf2RxCryoIn) && void 0 !== yk ? yk : 0,
        stored: null !== (lk = kk.baf2RxCryoStored) && void 0 !== lk ? lk : 0,
        makersShort: null !== (ak = kk.baf2RxMixersShort) && void 0 !== ak ? ak : 0,
        waterBeside: null !== (qk = kk.baf2RxWaterUse) && void 0 !== qk ? qk : 0,
        pct: kk.baf2RxWater
      } : {
        qj: "water",
        usePerS: null !== (Fk = kk.baf2RxWaterUse) && void 0 !== Fk ? Fk : 0,
        needPerS: null !== (Ik = kk.baf2RxWaterNeed) && void 0 !== Ik ? Ik : 0,
        inPerS: kk.baf2RxWaterIn,
        stored: kk.baf2RxWaterStored,
        makersShort: null !== (Xk = kk.baf2RxCondensersShort) && void 0 !== Xk ? Xk : 0,
        waterBeside: 0,
        pct: kk.baf2RxWater
      }
    }

    function zZ(kk) {
      const Fk = "running" === kk.baf2RxState || "idle" === kk.baf2RxState;
      return kk.baf2RxFormed && kk.baf2RxTarget !== kk.baf2RxThrottle && Fk ? SZ(kk, kk.baf2RxTarget) : null
    }

    function SZ(kk, Fk) {
      const [Ik, Xk, Tk, , , , ik, , yk] = kk.baf2RxStats, lk = QZ(kk, eF), ak = VZ(kk), qk = ak.pct / 100, {
        gen: Lk,
        out: tk,
        load: Zk
      } = function(kk, Fk, Ik, Xk) {
        const Tk = Ik ? ml : 1,
          ik = Math.min(kk.fuelHeat * Tk * Math.max(0, Math.min(1, Fk)), kk.size * Tk);
        return {
          gen: ik,
          out: ik,
          load: ja(ik, kk.cooling, Xk)
        }
      }({
        fuelHeat: Ik,
        cooling: Xk,
        size: Tk
      }, Fk / 100, lk, qk), jk = wa(ik || Fa(...kk.baf2RxDims)), ek = kk.baf2RxHeat, wk = Math.abs(Zk - ek), Hk = function(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Mk.p;
        const ik = Ik ? ml : 1,
          yk = Math.min(kk.fuelHeat * ik * Fk / 100, kk.size * ik),
          lk = yk,
          ak = kk.fuelHeat * ik,
          qk = kk.cooling * Za(Xk.pct / 100),
          Lk = ak > 0 && qk < kk.size * ik ? Math.floor(100 * qk / ak) : 100,
          tk = yk * Tk - Xk.inPerS;
        return {
          out: lk,
          hotAbove: Lk >= 100 ? null : Math.max(0, Lk),
          waterSecs: Xk.pct >= 100 && tk > 1e-6 ? Math.max(0, Xk.stored) / tk : null
        }
      }({
        fuelHeat: Ik,
        cooling: Xk,
        size: Tk
      }, Fk, lk, {
        pct: ak.pct,
        inPerS: ak.inPerS,
        stored: ak.stored
      }, sZ(ak.qj));
      return {
        pct: Fk,
        out: tk,
        coolPerS: Lk * sZ(ak.qj),
        pelletsPerMin: yk > 0 ? tk / yk * 60 : 0,
        settle: Zk,
        settleS: wk > 2 ? jk * Math.log(wk / 2) : 0,
        overheatS: Zk > 100 && ek < 100 ? jk * Math.log((Zk - ek) / (Zk - 100)) : null,
        hotAbove: Hk.hotAbove,
        coolantSecs: Hk.waterSecs
      }
    }

    function oZ(kk) {
      return kk.baf2RxThrottle <= 0 && "running" !== kk.baf2RxState ? 0 : SZ(kk, kk.baf2RxTarget).pelletsPerMin / 60
    }

    function vZ(kk, Fk) {
      if (kk <= 0 || Fk <= 0) return 0;
      const Ik = kk / Fk;
      return Ik < .25 ? 1 : Ik < .5 ? 2 : Ik < .8 ? 3 : 4
    }

    function EZ(kk, Fk) {
      const Ik = {};
      for (const [Xk, Tk] of Object.entries(Fk.params)) Ik[Xk] = "time" === Xk ? Qi(kk, Tk) : "amount" === Xk ? Ga(Tk) : String(Math.round(Tk));
      return kk(Fk.key, Ik)
    }

    function OZ(kk, Fk) {
      return {
        key: `${PZ}${kk}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: Fk
      }
    }

    function nZ(kk) {
      var Fk;
      const Ik = QZ(kk, eF),
        Xk = "running" === kk.baf2RxState,
        Tk = Pa(kk),
        ik = kk.baf2RxHeat;
      var yk;
      if (Xk && ik > Al) return {
        key: null !== (yk = Tk.fix) && void 0 !== yk ? yk : `${PZ}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const lk = Xk ? SZ(kk, kk.baf2RxTarget).coolantSecs : null,
        ak = "cryo" === VZ(kk).qj;
      if (null !== lk && lk >= 1 && lk <= 30) return OZ(ak ? "rxWarnCryo" : "rxWarnWater", "bad");
      const qk = Ml(Fa(...kk.baf2RxDims)).waste,
        Lk = Xk ? Sa(kk, qk, oZ(kk)).fullInS : null;
      if (null !== Lk && Lk <= 120 && kk.baf2RxWaste >= .5 * qk) return OZ("rxWarnWaste", "warn");
      if (null !== lk && lk >= 1) return OZ(ak ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: lk
      });
      const tk = "noWater" === kk.baf2RxState && ik > Al;
      if (kk.baf2RxDamage >= 1 && !tk) return OZ("rxDamagedHeals", "warn", {
        pct: kk.baf2RxDamage
      });
      if (kk.baf2RxCryoCut) return OZ("rxFix_cryoCut", "warn");
      const Zk = VZ(kk);
      if ("noWater" === kk.baf2RxState && "cryo" === Zk.qj) return OZ("noWater" === kk.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const jk = Tk.fix === `${PZ}rxFix_scramCool` || "idle" === kk.baf2RxState && kk.baf2RxTarget <= 0;
      if (jk && kk.baf2RxFuel <= 0) return OZ("rxFix_noFuel", "warn");
      if (jk && kk.baf2RxWaterIn <= 0 && (null !== (Fk = kk.baf2RxCryoIn) && void 0 !== Fk ? Fk : 0) <= 0) return OZ("rxFix_noWater", "warn");
      const ek = Tk.fix === `${PZ}rxFix_scramCool` ? Qa(kk) : null;
      if (null !== ek) return {
        key: ek.key,
        params: {
          amount: ek.amount
        },
        tone: "info"
      };
      if ("running" !== kk.baf2RxState && "idle" !== kk.baf2RxState && null !== Tk.fix) return {
        key: Tk.fix,
        params: {},
        tone: "scram" === kk.baf2RxState ? "info" : tk ? "bad" : "warn"
      };
      var wk;
      if ("idle" === kk.baf2RxState && kk.baf2RxTarget <= 0) return {
        key: null !== (wk = Tk.fix) && void 0 !== wk ? wk : `${PZ}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const Hk = kk.baf2RxCryoStarved;
      if ("cryo" === Zk.qj && Hk && Zk.needPerS > 0 && Zk.usePerS < KZ * Zk.needPerS) return OZ("noWater" === Hk ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const Jk = "cryo" === Zk.qj,
        xk = Zk.needPerS > 0 && Zk.usePerS < KZ * Zk.needPerS;
      if (Jk ? xk || Zk.makersShort > 0 && Zk.pct < 100 : Zk.pct < 100) {
        const Fk = Jk && xk ? Math.floor(100 * Zk.usePerS / Zk.needPerS) : Math.min(100, Zk.pct);
        if (Zk.makersShort > 0) {
          return OZ(`${Jk?"rxCryoShortLine":"rxWaterShortLine"}${1===Zk.makersShort?"One":""}${!Jk&&kk.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: Fk,
            count: Zk.makersShort
          })
        }
        return OZ(Jk ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: Fk
        })
      }
      const Pk = function(kk) {
        const [Fk, Ik, Xk] = kk.baf2RxStats, Tk = VZ(kk), ik = ea({
          fuelHeat: Fk,
          cooling: Ik,
          size: Xk
        }, "cryo" === Tk.qj ? Mk.e : 1, !0);
        return Math.max(0, ik * sZ(Tk.qj) - Tk.inPerS)
      }(kk);
      if (Ik && Pk > 0) return OZ("cryo" === Zk.qj ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Pk)
      });
      if (ik >= La) return OZ("rxHotLine", "warn");
      const Kk = SZ(kk, kk.baf2RxTarget);
      var Qk;
      if (null !== Kk.overheatS) return OZ("rxWillOverheat", "bad", {
        pct: kk.baf2RxTarget,
        time: Kk.overheatS,
        safe: null !== (Qk = Kk.hotAbove) && void 0 !== Qk ? Qk : 100
      });
      if (Math.abs(Kk.settle - ik) >= 3) return OZ("rxSettling", "info", {
        pct: kk.baf2RxTarget,
        heat: Math.round(Kk.settle),
        time: Kk.settleS
      });
      const sk = Qa(kk);
      if (null !== sk) return {
        key: sk.key,
        params: {
          amount: sk.amount
        },
        tone: "info"
      };
      const Vk = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== Fk && ("running" !== Fk || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === kk.rods ? `${Ha}rxLimitNoRods` : `${Ha}rxLimit_${qa(kk)}`
      }({
        rods: kk.baf2RxStats[3],
        ...Ka(kk)
      }, kk.baf2RxState, kk.baf2RxOut >= KZ * kk.baf2RxMaxNow, !1);
      if (Vk === `${PZ}rxLimit_size`) {
        const [Fk, , Ik, Xk] = kk.baf2RxStats, Tk = Xk > 0 && Fk > 0 ? Math.ceil(Ik / (Fk / Xk) - 1e-9) : Xk, ik = kk.baf2RxDims.every((kk => kk >= cI("reactor").max));
        if (Tk < Xk) return OZ(ik ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Tk,
          have: Xk
        });
        if (ik) return OZ("rxLimit_sizeMax", "info")
      }
      return null !== Vk ? {
        key: Vk,
        params: {},
        tone: "info"
      } : OZ("rxSteady", "ok", {
        pct: kk.baf2RxTarget
      })
    }

    function GZ(kk) {
      var Fk;
      if (kk.melted) return OZ("rxMeltedBody", "bad");
      if (-1 === kk.bad) return OZ("rxFix_noRoom", "warn");
      if (kk.bad > 0) return OZ(1 === kk.bad ? "rxBadOne" : "rxBad", "warn", {
        count: kk.bad
      });
      if (kk.left > 0) {
        const Fk = 1 === kk.left ? "One" : "";
        return OZ(kk.canFill ? `rxPlanLeft${Fk}` : `rxPlanLeftNoFill${Fk}`, "info", {
          count: kk.left
        })
      }
      if (0 === kk.rods) return OZ("rxLimitNoRods", "warn");
      const Ik = null !== (Fk = kk.idle) && void 0 !== Fk ? Fk : 0;
      return Ik > 0 ? OZ(1 === Ik ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: Ik
      }) : OZ("rxPlanReady", "ok")
    }

    function pZ(kk) {
      return Math.floor(Math.max(0, kk[1] - 1) / 2)
    }

    function uZ(kk) {
      if (kk >= Ta && kk < ia) {
        const Fk = kk - Ta;
        return {
          key: 0 === Fk ? `${PZ}rxWhy_rodAlone` : 1 === Fk ? `${PZ}rxWhy_rodOne` : `${PZ}rxWhy_rod`,
          params: {
            count: String(Fk),
            heat: String(Cl * (1 + Nl * Fk))
          }
        }
      }
      return kk === ia ? {
        key: `${PZ}rxWhy_channel`,
        params: {
          amount: String(Wl)
        }
      } : kk === ya ? {
        key: `${PZ}rxWhy_deadChannel`,
        params: {}
      } : kk === la ? {
        key: `${PZ}rxWhy_graphite`,
        params: {}
      } : {
        key: `${PZ}rxWhy_core`,
        params: {}
      }
    }
    const bZ = "buildAFactory2Game:";

    function RZ(kk, Fk) {
      return 0 !== (kk.baf2RxFlags & Fk)
    }

    function UZ(kk) {
      let {
        status: Fk,
        pending: Ik,
        store: Xk,
        explain: Tk
      } = kk;
      const {
        t: ik
      } = (0, vT.y)(), yk = RZ(Fk, jF), lk = Fk.baf2RxTarget, ak = Fk.baf2RxThrottle, qk = function(kk) {
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
      }(Xk), Lk = null === (tk = SZ(Fk, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, tk - 10),
        red: tk
      };
      var tk;
      return (0, Si.jsxs)("div", {
        className: VT()("Baf2RxThrottle", {
          Off: yk
        }),
        onClick: () => {
          yk && Tk(`${bZ}rxWhy_startFirst`)
        },
        children: [(0, Si.jsx)("span", {
          className: "HideNarrow",
          children: ik(`${bZ}rxThrottle`)
        }), (0, Si.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Si.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: lk,
            disabled: yk,
            style: yk ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": ik(`${bZ}rxThrottle`),
            onPointerDown: () => {
              qk.press();
              const kk = () => {
                window.removeEventListener("pointerup", kk), window.removeEventListener("pointercancel", kk), qk.release()
              };
              window.addEventListener("pointerup", kk), window.addEventListener("pointercancel", kk)
            },
            onKeyUp: qk.release,
            onChange: kk => {
              qk.drag(Number(kk.target.value))
            }
          }), (0, Si.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Lk.amber}%, #ffb020 ${Lk.amber}% ${Lk.red}%, #ff3b30 ${Lk.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Si.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${ak}% + ${8*(1-ak/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Si.jsxs)("b", {
          children: [`${lk}%`, (0, Si.jsx)("i", {
            className: VT()("Baf2RxPendingDot", {
              On: Ik
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function CZ(kk) {
      let {
        status: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)(), Xk = SZ(Fk, Fk.baf2RxTarget), Tk = VZ(Fk).qj, ik = Ik("cryo" === Tk ? `${bZ}rxRateCryo` : `${bZ}rxRateWater`, {
        rate: HZ(Xk.coolPerS)
      }), yk = Ik(`${bZ}rxChain`, {
        pct: String(Fk.baf2RxTarget),
        out: Ga(Xk.out),
        heat: String(Math.round(Xk.settle)),
        coolant: ik
      }), lk = null !== Xk.coolantSecs ? Xk.coolantSecs >= 1 ? Ik("cryo" === Tk ? `${bZ}rxThrottleCryoOut` : `${bZ}rxThrottleWaterOut`, {
        time: Qi(Ik, Xk.coolantSecs)
      }) : Ik("cryo" === Tk ? `${bZ}rxThrottleCryoDry` : `${bZ}rxThrottleWaterDry`) : null;
      return (0, Si.jsxs)("p", {
        className: "Baf2RxChain",
        children: [yk, null !== lk ? (0, Si.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", lk]
        }) : (0, Si.jsxs)("span", {
          children: [" \xb7 ", Ik(`${bZ}rxChainPellets`, {
            amount: pa(Xk.pelletsPerMin)
          })]
        })]
      })
    }

    function NZ(kk) {
      let {
        view: Fk,
        store: Ik,
        explain: Tk,
        explainOnce: ik
      } = kk;
      const {
        t: yk
      } = (0, vT.y)(), {
        status: lk
      } = Fk, [ak, qk] = (0, Xk.useState)(!1), Lk = RZ(lk, jF), Zk = RZ(lk, eF), jk = !RZ(lk, JF), ek = lk.baf2RxHeat > 100;
      return (0, Si.jsxs)(Si.Fragment, {
        children: [(0, Si.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Si.jsx)(UZ, {
            status: lk,
            pending: Fk.throttlePending,
            store: Ik,
            explain: Tk
          }), (0, Si.jsx)(xZ, {
            on: Zk,
            label: Zk ? yk(`${bZ}rxOdLeft`, {
              time: Qi(yk, lk.baf2RxOdLeft)
            }) : yk(`${bZ}rxOverdrive`),
            locked: jk,
            pending: 0 !== (Fk.pendingFlags & eF),
            toggle: () => {
              jk ? Tk(`${bZ}rxOverdriveTier`, {
                amount: String(tk(13))
              }) : Zk ? Ik.setFlag(eF, !1) : Fk.odConfirmed ? Ik.setFlag(eF, !0) : qk(!0)
            }
          }), Lk || Fk.startGuard ? (0, Si.jsx)(zy.q, {
            disabled: Fk.busy.has("start") || Fk.startGuard,
            onClick: () => {
              Ik.tap("start", (() => {
                Ik.setFlag(jF, !1)
              }))
            },
            children: yk(Fk.startGuard ? `${bZ}rxStarting` : `${bZ}rxStart`)
          }) : (0, Si.jsx)("span", {
            className: VT()("Baf2RxScram", {
              Pulse: ek
            }),
            children: (0, Si.jsx)(zy.G, {
              onClick: () => {
                Ik.shutDown()
              },
              children: yk(`${bZ}rxScram`)
            })
          })]
        }), (0, Si.jsx)(CZ, {
          status: lk
        }), ak && (0, Si.jsx)(ZZ, {
          id: "baf2RxOdTitle",
          title: `${bZ}rxOdConfirmTitle`,
          body: `${bZ}rxOdConfirmBody`,
          yes: `${bZ}rxOdConfirm`,
          cancel: () => {
            qk(!1)
          },
          confirm: () => {
            qk(!1), Ik.tap("odConfirm", (() => {
              Ik.confirmOverdrive(), Ik.setFlag(eF, !0)
            })), ik(`${bZ}rxWhy_overdrive`)
          }
        })]
      })
    }

    function cZ(kk) {
      let {
        view: Fk,
        store: Ik,
        keepSize: Xk
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)(), {
        status: ik
      } = Fk;
      return (0, Si.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Si.jsx)(JZ, {
          kind: "reactor",
          dims: Fk.dims,
          cap: ik.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: kk => {
            Ik.resize(kk)
          }
        }), Xk ? (0, Si.jsx)(zy.g, {
          onClick: Xk,
          children: Tk(`${bZ}rxKeepSize`)
        }) : (0, Si.jsxs)(Si.Fragment, {
          children: [(0, Si.jsx)(xZ, {
            on: Fk.guide,
            label: Tk(`${bZ}rxGuide`),
            toggle: () => {
              Ik.toggleGuide()
            }
          }), RZ(ik, PF) && (0, Si.jsx)(xZ, {
            on: Fk.starter,
            label: Tk(`${bZ}rxStarter`),
            toggle: () => {
              Ik.toggleStarter()
            }
          }), (0, Si.jsx)(aZ, {
            status: ik,
            store: Ik,
            busy: Fk.busy.has("fill")
          })]
        })]
      })
    }

    function WZ(kk) {
      let {
        need: Fk,
        kind: Ik = "reactor",
        explain: Xk
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)(), ik = Fk.length <= 3, yk = Fk.reduce(((kk, Fk) => {
        let [, Ik] = Fk;
        return kk + Ik
      }), 0);
      return (0, Si.jsxs)("div", {
        className: VT()("Baf2RxParts", {
          Compact: !ik
        }),
        onClick: () => {
          Xk("battery" === Ik ? `${bZ}batWhy_store` : `${bZ}rxShellHint`)
        },
        children: [yk > 0 && (0, Si.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === yk ? Tk(`${bZ}rxBlocksOne`) : Tk(`${bZ}rxBlocks`, {
            blocks: String(yk)
          })
        }), 0 === Fk.length ? (0, Si.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Tk("battery" === Ik ? `${bZ}batPartsDone` : `${bZ}rxShellDone`)
        }) : Va(Fk).map((kk => {
          let [Fk, Ik, Xk] = kk;
          const yk = function(kk) {
            const Fk = Ea[kk];
            if (void 0 === Fk) return null;
            const [Ik, Xk, Tk] = oa[Fk].colour.map((kk => Math.round(255 * kk)));
            return `rgb(${Ik}, ${Xk}, ${Tk})`
          }(Fk);
          return (0, Si.jsxs)("span", {
            className: "Baf2RxChip",
            title: Ti(Tk, Fk),
            children: [(0, Si.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === yk ? {
                visibility: "hidden"
              } : {
                background: yk
              },
              title: Tk(`${bZ}rxShopGhost`)
            }), (0, Si.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Si.jsx)(OT.d, {
                itemName: Fk,
                amount: 0
              })
            }), (0, Si.jsx)("span", {
              className: "Baf2RxChipName",
              children: ik ? `${Ik} ${lk=Ti(Tk,Fk),lk.replace(/^(Reactor|Battery) (?=\S)/,"")}` : Ik
            }), Xk >= Ik ? (0, Si.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Si.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: ik ? Tk(`${bZ}rxShopShort`, {
                count: String(Ik - Xk)
              }) : "\u2212" + (Ik - Xk)
            })]
          }, Fk);
          var lk
        }))]
      })
    }
    const fZ = "buildAFactory2Game:";

    function BZ(kk) {
      var Fk, Ik, Tk, ik, yk, lk, ak;
      let {
        store: qk,
        close: Lk
      } = kk;
      const {
        t: tk
      } = (0, vT.y)(), Zk = By(), jk = jZ(qk), {
        explained: ek,
        explain: wk
      } = IZ("baf2RxExplained"), Hk = (0, Xk.useCallback)(((kk, Fk) => {
        wk(tk(kk, Fk))
      }), [wk, tk]), Jk = null === jk || void 0 === jk ? void 0 : jk.status, xk = !0 === (null === Jk || void 0 === Jk ? void 0 : Jk.baf2BatReadOnly), Pk = kk => {
        Jk && Zk.send(ZF(Jk.baf2BatAt, kk))
      }, [Kk, Qk, sk] = null !== (Fk = null === jk || void 0 === jk ? void 0 : jk.dims) && void 0 !== Fk ? Fk : [0, 0, 0], Vk = Ga(null !== (Ik = null === jk || void 0 === jk ? void 0 : jk.St) && void 0 !== Ik ? Ik : 0), zk = !0 === (null === Jk || void 0 === Jk ? void 0 : Jk.baf2BatFormed), Sk = null !== (Tk = null === Jk || void 0 === Jk ? void 0 : Jk.baf2BatStored) && void 0 !== Tk ? Tk : 0, vk = Math.max(1, null !== (ik = null === Jk || void 0 === Jk ? void 0 : Jk.baf2BatIslandCap) && void 0 !== ik ? ik : 1), Ek = Math.min(100, 100 * Sk / vk), Ok = null === Jk || void 0 === Jk ? void 0 : Jk.baf2BatNetPerS, nk = function(kk, Fk, Ik) {
        return Ik > 0 && Fk >= Ik ? "full" : void 0 !== kk && kk >= .05 ? "charging" : void 0 !== kk && kk <= -.05 && Fk > 0 ? "draining" : "steady"
      }(Ok, Sk, null !== (yk = null === Jk || void 0 === Jk ? void 0 : Jk.baf2BatIslandCap) && void 0 !== yk ? yk : 0), Gk = null !== (lk = null === Jk || void 0 === Jk ? void 0 : Jk.baf2BatMadePerS) && void 0 !== lk ? lk : 0, pk = null !== (ak = null === Jk || void 0 === Jk ? void 0 : Jk.baf2BatUsedPerS) && void 0 !== ak ? ak : 0;
      let uk, bk = {},
        Rk = "info";
      if (Jk)
        if (zk) "charging" === nk ? (uk = `${fZ}batLine_charging`, bk = {
          time: Qi(tk, (vk - Sk) / Math.max(.05, null !== Ok && void 0 !== Ok ? Ok : 0))
        }, Rk = "ok") : "draining" === nk ? (uk = `${fZ}batLine_draining`, bk = {
          time: Qi(tk, Sk / Math.max(.05, -(null !== Ok && void 0 !== Ok ? Ok : 0)))
        }, Rk = "warn") : uk = "full" === nk ? `${fZ}batLine_full` : Sk <= 0 && pk > 0 ? `${fZ}batLine_empty` : `${fZ}batLine_steady`;
        else {
          var Uk;
          const kk = GZ({
            left: Jk.baf2BatNeed.reduce(((kk, Fk) => {
              let [, Ik] = Fk;
              return kk + Ik
            }), 0),
            bad: Jk.baf2BatBad,
            rods: 1,
            canFill: !0 === Jk.baf2BatCanFill,
            melted: !1
          });
          uk = kk.key, bk = {
            count: String(null !== (Uk = kk.params.count) && void 0 !== Uk ? Uk : 0)
          }, Rk = kk.tone
        }
      else uk = `${fZ}batLine_steady`;
      const Ck = Math.max(Gk, pk, 1);
      return (0, Si.jsx)(Vy.c, {
        close: Lk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Si.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Si.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Si.jsx)(OT.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Si.jsxs)("div", {
                children: [(0, Si.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: tk(`${fZ}batTitle`)
                }), Jk && (0, Si.jsxs)("p", {
                  className: VT()("Baf2RxSubtitle", {
                    good: zk && "charging" === nk,
                    warn: zk && "draining" === nk
                  }),
                  children: [Kk, "\xd7", Qk, "\xd7", sk, " \xb7 ", tk(zk ? `${fZ}batState_${nk}` : `${fZ}rxSubPlanShort`)]
                })]
              })]
            }), (0, Si.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Jk && !xk && (0, Si.jsx)(eZ, {
                kind: "battery",
                cap: zk ? Vk : void 0,
                busy: null === jk || void 0 === jk ? void 0 : jk.busy.has("apart"),
                apart: () => {
                  qk.tap("apart", (() => {
                    Pk("apart")
                  }))
                }
              }), (0, Si.jsx)(zy.k, {
                onClick: Lk
              })]
            })]
          }), jk && Jk && (0, Si.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Si.jsxs)("div", {
              className: VT()("Baf2RxFlow Baf2BatFlow", {
                Plan: !zk
              }),
              children: [(0, Si.jsx)(Mt, {
                kind: "Power",
                label: tk(`${fZ}batMade`),
                number: zk ? `\u26a1 ${Ga(Gk)}/s` : "\u2014",
                note: tk(`${fZ}batMadeNote`),
                share: zk ? Gk / Ck : void 0,
                onExplain: () => {
                  Hk(`${fZ}batWhy_made`)
                }
              }), (0, Si.jsx)(kZ, {
                kind: "Power",
                step: zk ? vZ(Gk, Ck) : 0,
                planned: !zk
              }), (0, Si.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  Hk(`${fZ}batWhy_store`)
                },
                children: [(0, Si.jsx)(FZ, {
                  max: 100,
                  bands: [{
                    upTo: zk ? Ek : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Si.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Si.jsx)("b", {
                    className: "Baf2BatStored",
                    children: zk ? tk(`${fZ}batStoredOf`, {
                      amount: Ga(Sk),
                      cap: Ga(Jk.baf2BatIslandCap)
                    }) : tk(`${fZ}batWillHold`, {
                      cap: Vk
                    })
                  }), (0, Si.jsx)("span", {
                    children: tk(`${fZ}batAdds`, {
                      cap: Vk
                    })
                  }), zk && (0, Si.jsx)("small", {
                    children: tk(`${fZ}batBreakNote`, {
                      cap: Vk
                    })
                  })]
                })]
              }), (0, Si.jsx)(kZ, {
                kind: "Power",
                step: zk ? vZ(pk, Ck) : 0,
                planned: !zk
              }), (0, Si.jsx)(Mt, {
                kind: "Power",
                label: tk(`${fZ}batUsed`),
                number: zk ? `\u26a1 ${Ga(pk)}/s` : "\u2014",
                note: tk(`${fZ}batUsedNote`),
                share: zk ? pk / Ck : void 0,
                onExplain: () => {
                  Hk(`${fZ}batWhy_used`)
                }
              })]
            }), (0, Si.jsx)(XZ, {
              text: tk(uk, bk),
              tone: Rk,
              explained: ek
            }), xk ? (0, Si.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: tk(`${fZ}rxNotYours`)
            }) : !zk && (0, Si.jsxs)(Si.Fragment, {
              children: [(0, Si.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Si.jsx)(JZ, {
                  kind: "battery",
                  dims: jk.dims,
                  cap: Jk.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: kk => {
                    qk.resize(kk)
                  }
                }), (0, Si.jsx)(xZ, {
                  on: jk.guide,
                  label: tk(`${fZ}rxGuide`),
                  toggle: () => {
                    qk.toggleGuide()
                  }
                }), Jk.baf2BatCanFill && (0, Si.jsx)(zy.m, {
                  disabled: !za("battery", Jk.baf2BatNeed) || jk.busy.has("fill"),
                  onClick: () => {
                    qk.tap("fill", (() => {
                      Pk("fill")
                    }))
                  },
                  children: tk(`${fZ}rxFill`)
                })]
              }), (0, Si.jsx)(WZ, {
                need: Jk.baf2BatNeed,
                kind: "battery",
                explain: Hk
              })]
            })]
          })]
        })
      })
    }
    const dZ = "buildAFactory2Game:",
      YZ = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function AZ(kk, Fk) {
      return kk === Xa ? null : Fk ? "#4a4440" : kk < ia ? YZ[kk - Ta] : kk === ia ? "#3fd0f0" : kk === ya ? "#2c3e4c" : "#55585e"
    }

    function gZ(kk) {
      let {
        inner: Fk,
        looks: Ik,
        layer: Xk,
        setLayer: Tk,
        glow: ik,
        melted: yk,
        explain: lk
      } = kk;
      const {
        t: ak
      } = (0, vT.y)(), [qk, Lk, tk] = Fk, Zk = Math.max(0, Math.min(Lk - 1, Xk)), jk = [];
      for (let wk = 0; wk < tk; wk++)
        for (let kk = 0; kk < qk; kk++) {
          var ek;
          const Fk = null !== (ek = Ik[(Zk * tk + wk) * qk + kk]) && void 0 !== ek ? ek : Xa,
            Xk = AZ(Fk, yk),
            Tk = Fk >= Ta && Fk < ia;
          jk.push(null === Xk ? (0, Si.jsx)("circle", {
            cx: kk + .5,
            cy: wk + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${kk},${wk}`) : (0, Si.jsx)("rect", {
            x: kk + .06,
            y: wk + .06,
            width: .88,
            height: .88,
            fill: Xk,
            opacity: Tk && !yk ? .5 + .5 * ik : 1,
            onClick: kk => {
              kk.stopPropagation();
              const Ik = uZ(Fk);
              lk(Ik.key, Ik.params)
            }
          }, `${kk},${wk}`))
        }
      return (0, Si.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Si.jsx)("svg", {
          className: VT()("Baf2RxMapGrid", {
            Melted: yk
          }),
          viewBox: `0 0 ${Math.max(1,qk)} ${Math.max(1,tk)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": ak(`${dZ}rxWhy_core`),
          onClick: () => {
            lk(`${dZ}rxWhy_core`, {})
          },
          children: jk
        }), Lk > 1 && (0, Si.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Si.jsx)("button", {
            type: "button",
            "aria-label": ak(`${dZ}rxLayerDown`),
            disabled: Zk <= 0,
            onClick: () => {
              Tk(Zk - 1)
            },
            children: "\u25bc"
          }), (0, Si.jsxs)("span", {
            children: [(0, Si.jsx)("span", {
              className: "HideNarrow",
              children: ak(`${dZ}rxLayer`, {
                n: String(Zk + 1),
                of: String(Lk)
              })
            }), (0, Si.jsx)("span", {
              className: "ShowNarrow",
              children: ak(`${dZ}rxLayerShort`, {
                n: String(Zk + 1),
                of: String(Lk)
              })
            })]
          }), (0, Si.jsx)("button", {
            type: "button",
            "aria-label": ak(`${dZ}rxLayerUp`),
            disabled: Zk >= Lk - 1,
            onClick: () => {
              Tk(Zk + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const mZ = "buildAFactory2Game:",
      hZ = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: gl,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: xa,
        kind: "red"
      }],
      rZ = [50, gl, 100];

    function DZ(kk) {
      let {
        stats: Fk,
        t: Ik,
        explain: Xk
      } = kk;
      const Tk = qa(Fk),
        ik = Math.max(1, Fk.fuelHeat, Fk.cooling, Fk.size),
        yk = [
          ["fuel", `${mZ}rxBarRods`, Fk.fuelHeat],
          ["cooling", `${mZ}rxBarCooling`, Fk.cooling],
          ["size", `${mZ}rxBarSize`, Fk.size]
        ];
      return (0, Si.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Xk(`${mZ}rxWhy_bars`)
        },
        children: [(0, Si.jsx)("span", {
          className: "Baf2RxMostLine",
          children: Ik(`${mZ}rxMost`, {
            amount: Ga(Math.min(Fk.fuelHeat, Fk.cooling, Fk.size))
          })
        }), (0, Si.jsx)("span", {
          className: "Baf2RxMostBars",
          children: yk.map((kk => {
            let [Fk, Xk, yk] = kk;
            return (0, Si.jsxs)("span", {
              className: VT()("Baf2RxMostBar", Fk, {
                Low: Fk === Tk
              }),
              children: [(0, Si.jsx)("small", {
                children: Ik(Xk)
              }), (0, Si.jsx)("i", {
                children: (0, Si.jsx)("b", {
                  style: {
                    width: 100 * yk / ik + "%"
                  }
                })
              })]
            }, Fk)
          }))
        })]
      })
    }

    function MZ(kk) {
      var Fk;
      let {
        view: Ik,
        heat: Tk,
        settle: ik,
        settleLine: yk,
        settleBad: lk,
        explain: ak
      } = kk;
      const {
        t: qk
      } = (0, vT.y)(), {
        status: Lk
      } = Ik, tk = Lk.baf2RxAt.join(","), [Zk, jk] = (0, Xk.useState)((() => pZ(Ik.inner)));
      (0, Xk.useEffect)((() => {
        jk(pZ(Ik.inner))
      }), [tk, Ik.inner[1]]);
      const ek = null !== (Fk = Ik.plan) && void 0 !== Fk ? Fk : Ka(Lk),
        wk = Ik.plan ? Ik.plan.powerPerUnit : Lk.baf2RxStats[8],
        Hk = null === Tk ? null : "alarm" === (Jk = Ja(Lk)) ? "red" : "hot" === Jk ? "hot" : "warm" === Jk ? "warm" : "cold";
      var Jk;
      const xk = !Lk.baf2RxFormed && function(kk, Fk) {
          return 0 !== (kk.baf2RxFlags & Fk)
        }(Lk, wF),
        Pk = Lk.baf2RxDamage,
        Kk = Lk.baf2RxDamageTrend;
      return (0, Si.jsxs)("div", {
        className: VT()("Baf2RxCore", null !== Hk && void 0 !== Hk ? Hk : "plan"),
        children: [(0, Si.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Si.jsx)(gZ, {
            inner: Ik.inner,
            looks: Ik.looks,
            layer: Zk,
            setLayer: jk,
            glow: Lk.baf2RxFormed ? Lk.baf2RxThrottle / 100 : 1,
            melted: xk,
            explain: ak
          }), (0, Si.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              ak(`${mZ}rxWhy_heat`)
            },
            children: [null !== Tk ? (0, Si.jsxs)(Si.Fragment, {
              children: [(0, Si.jsx)("b", {
                children: qk(`${mZ}rxHeatPct`, {
                  pct: String(Tk)
                })
              }), (0, Si.jsx)("span", {
                className: VT()("Baf2RxBand", Hk),
                children: qk(`${mZ}rxBand_${Hk}`)
              })]
            }) : (0, Si.jsx)("b", {
              children: qk(`${mZ}rxHeat`)
            }), null !== yk && (0, Si.jsx)("span", {
              className: VT()("Baf2RxSettle", {
                Bad: lk
              }),
              children: yk
            }), Pk >= 1 && (0, Si.jsxs)("span", {
              className: VT()("Baf2RxDamage", Kk),
              children: [qk(`${mZ}rxDamageLine`, {
                pct: String(Pk)
              }), " \xb7 ", qk(`${mZ}rxDamage_${Kk}`), (0, Si.jsx)("i", {
                children: (0, Si.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Pk)}%`
                  }
                })
              })]
            })]
          }), (0, Si.jsx)(FZ, {
            max: xa,
            bands: hZ,
            ticks: rZ,
            now: Tk,
            settle: ik,
            settleTone: lk ? "bad" : null,
            onExplain: () => {
              ak(`${mZ}rxWhy_heat`)
            }
          })]
        }), (0, Si.jsx)(DZ, {
          stats: ek,
          t: qk,
          explain: ak
        }), wk > 0 && (0, Si.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            ak(`${mZ}rxWhy_perPellet`)
          },
          children: qk(`${mZ}rxPerPellet`, {
            amount: Ga(wk)
          })
        })]
      })
    }

    function kj(kk, Fk) {
      var Ik;
      if (!kk.baf2RxStore) return {
        note: Fk(`${mZ}rxUpTo`, {
          amount: Ga(kk.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Xk, Tk] = kk.baf2RxStore, ik = Tk > 0 ? Xk / Tk : 0, yk = String(Math.floor(100 * ik)), lk = null !== (Ik = kk.baf2RxStoreNetPerS) && void 0 !== Ik ? Ik : 0, ak = function(kk) {
        var Fk, Ik;
        const [Xk, Tk] = null !== (Fk = kk.baf2RxStore) && void 0 !== Fk ? Fk : [0, 0], ik = null !== (Ik = kk.baf2RxStoreNetPerS) && void 0 !== Ik ? Ik : 0;
        return Tk > 0 && Xk >= Tk - 1 ? "running" === kk.baf2RxState ? `${PZ}rxStoreFull` : `${PZ}rxStoreFullOnly` : ik > .05 ? `${PZ}rxStoreLine` : ik < -.05 ? "running" === kk.baf2RxState ? `${PZ}rxStoreUsesMore` : `${PZ}rxStoreDraining` : `${PZ}rxStorePct`
      }(kk);
      return {
        note: Fk(ak, ak === `${mZ}rxStoreLine` ? {
          pct: yk,
          time: Qi(Fk, (Tk - Xk) / lk)
        } : {
          pct: yk
        }),
        share: ik
      }
    }

    function Fj(kk) {
      let {
        view: Fk,
        explain: Ik,
        preview: Xk
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)(), {
        status: ik
      } = Fk, yk = Ml(Fa(...Fk.dims)), lk = oZ(ik), ak = Math.min(Math.round(ik.baf2RxFuel), yk.fuel), qk = "running" === ik.baf2RxState, Lk = qk ? vZ(ik.baf2RxOut, ik.baf2RxMaxNow) : 0, tk = function(kk, Fk, Ik) {
        const Xk = VZ(kk),
          Tk = "cryo" === Xk.qj,
          ik = Ik ? Ik.coolantSecs : Xk.pct >= 100 && kk.baf2RxOut >= 1 ? SZ(kk, kk.baf2RxThrottle).coolantSecs : null;
        let yk, lk = !1;
        if (Xk.pct < 100) {
          const Ik = 1 === Xk.makersShort,
            ik = !Tk && kk.baf2RxCryoOpen ? "OrCryo" : "";
          yk = Xk.makersShort > 0 ? Fk(Tk ? `${mZ}rxCryoAddMixer${Ik?"":"s"}` : `${mZ}rxWaterAddCondenser${Ik?"":"s"}${ik}`, {
            count: String(Xk.makersShort)
          }) : Fk(`${mZ}rxWaterNeeds`, {
            rate: HZ(Xk.needPerS)
          })
        } else if (null !== ik) yk = Fk(`${mZ}rxWaterRunsOut`, {
          time: Qi(Fk, ik)
        });
        else if (Xk.waterBeside > 0) yk = Fk(`${mZ}rxCryoPlusWater`, {
          rate: HZ(Xk.waterBeside)
        });
        else {
          const kk = function(kk) {
            return kk.inPerS <= 0 ? "rxWaterNoSupply" : kk.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Xk);
          lk = "rxWaterNoSupply" === kk, yk = Fk(`${mZ}${kk}`, {
            amount: Ga(Xk.stored)
          })
        }
        return {
          kind: Tk ? "Cryo" : "Water",
          label: Fk(Tk ? `${mZ}rxCryo` : `${mZ}rxWater`),
          number: `${HZ(Xk.usePerS)}/s`,
          preview: Ik ? `${HZ(Ik.coolPerS)}/s` : null,
          note: yk,
          tone: "noWater" === kk.baf2RxState ? "danger" : lk ? "warn" : (ak = Xk.pct, qk = ik, ak < 100 ? "danger" : null === qk ? null : qk < 300 ? "danger" : "warn"),
          share: Xk.pct / 100,
          why: Tk ? `${mZ}rxWhy_cryo` : `${mZ}rxWhy_water`,
          short: Xk.pct < 100
        };
        var ak, qk
      }(ik, Tk, Xk), Zk = Sa(ik, yk.waste, lk), jk = kj(ik, Tk), ek = SZ(ik, ik.baf2RxTarget), wk = qk && Math.abs(ek.settle - ik.baf2RxHeat) >= 3, Hk = Xk ? Xk.pelletsPerMin / 60 : null;
      return (0, Si.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Si.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Si.jsx)(Mt, {
            kind: "Fuel",
            label: Tk(`${mZ}rxFuel`),
            number: String(ak),
            preview: null !== Hk && Hk > 0 && ik.baf2RxFuel > 0 ? Qi(Tk, ik.baf2RxFuel / Hk) : null,
            note: ik.baf2RxFuel <= 0 ? Tk(`${mZ}rxFuelEmpty`) : lk > 0 ? Tk(`${mZ}rxFuelLeft`, {
              time: Qi(Tk, ik.baf2RxFuel / lk)
            }) : Tk(1 === ak ? `${mZ}rxFuelPellet` : `${mZ}rxFuelPellets`),
            tone: "noFuel" === ik.baf2RxState ? "danger" : ik.baf2RxFuel < 2 ? "warn" : null,
            share: ik.baf2RxFuel / yk.fuel,
            onExplain: () => {
              Ik(`${mZ}rxWhy_fuel`)
            }
          }), (0, Si.jsx)(Mt, {
            kind: tk.kind,
            label: tk.label,
            number: tk.number,
            preview: tk.preview,
            note: tk.note,
            tone: tk.tone,
            share: tk.share,
            onExplain: () => {
              Ik(tk.why)
            }
          })]
        }), (0, Si.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Si.jsx)(kZ, {
            kind: "Fuel",
            step: Lk,
            short: "noFuel" === ik.baf2RxState
          }), (0, Si.jsx)(kZ, {
            kind: tk.kind,
            step: Lk,
            short: tk.short || "noWater" === ik.baf2RxState
          })]
        }), (0, Si.jsx)(MZ, {
          view: Fk,
          heat: ik.baf2RxHeat,
          settle: Math.min(xa, ek.settle),
          settleLine: wk ? Tk(`${mZ}rxHeatSettles`, {
            pct: String(Math.round(ek.settle)),
            time: Qi(Tk, ek.settleS)
          }) : null,
          settleBad: ek.settle > 100,
          explain: Ik
        }), (0, Si.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Si.jsx)(kZ, {
            kind: "Power",
            step: Lk
          }), (0, Si.jsx)(kZ, {
            kind: "Waste",
            step: qk && ik.baf2RxFuel - ik.baf2RxPu > 0 ? Lk : 0,
            short: Zk.full
          })]
        }), (0, Si.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Si.jsx)(Mt, {
            kind: "Power",
            label: Tk(`${mZ}rxPowerOut`),
            number: `\u26a1 ${Ga(ik.baf2RxOut)}/s`,
            preview: Xk ? Ga(Xk.out) : null,
            note: jk.note,
            share: jk.share,
            onExplain: () => {
              Ik(`${mZ}rxWhy_power`)
            }
          }), (0, Si.jsx)(Mt, {
            kind: "Waste",
            label: Tk(`${mZ}rxWaste`),
            number: `${Math.floor(ik.baf2RxWaste)}/${yk.waste}`,
            note: Zk.full ? Tk(`${mZ}rxWasteFull`) : null !== Zk.fullInS ? Tk(`${mZ}rxWasteFullIn`, {
              time: Qi(Tk, Zk.fullInS)
            }) : Tk(`${mZ}rxWasteSpent`),
            tone: "wasteFull" === ik.baf2RxState ? "danger" : Zk.full ? "warn" : null,
            share: ik.baf2RxWaste / yk.waste,
            onExplain: () => {
              Ik(`${mZ}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Ij(kk) {
      let {
        view: Fk,
        explain: Ik
      } = kk;
      const {
        t: Xk
      } = (0, vT.y)(), Tk = Fk.plan;
      if (!Tk) return null;
      const ik = Tk.fuelHeat <= 0 ? null : Tk.cooling > 0 ? Math.min(xa, 100 * Tk.fuelHeat / Tk.cooling) : xa,
        yk = Xk(`${mZ}rxPlanAtFull`);
      return (0, Si.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Si.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Si.jsx)(Mt, {
            kind: "Fuel",
            label: Xk(`${mZ}rxFuel`),
            number: Xk(`${mZ}rxPlanPerMin`, {
              amount: pa(Tk.pelletsPerMin)
            }),
            note: Xk(`${mZ}rxPlanPellets`),
            onExplain: () => {
              Ik(`${mZ}rxWhy_fuel`)
            }
          }), (0, Si.jsx)(Mt, {
            kind: "Water",
            label: Xk(`${mZ}rxWater`),
            number: `${HZ(Tk.waterPerS)}/s`,
            note: Fk.status.baf2RxCryoOpen && Tk.waterPerS > 0 ? Xk(`${mZ}rxPlanOrCryo`, {
              rate: HZ(ea(Tk, Mk.e) * Mk.n)
            }) : yk,
            onExplain: () => {
              Ik(`${mZ}rxWhy_water`)
            }
          })]
        }), (0, Si.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Si.jsx)(kZ, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Si.jsx)(kZ, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Si.jsx)(MZ, {
          view: Fk,
          heat: null,
          settle: ik,
          settleLine: null === ik ? null : Xk(`${mZ}rxPlanHeat`, {
            pct: String(Math.round(ik))
          }),
          settleBad: null !== ik && ik > 100,
          explain: Ik
        }), (0, Si.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Si.jsx)(kZ, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Si.jsx)(kZ, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Si.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Si.jsx)(Mt, {
            kind: "Power",
            label: Xk(`${mZ}rxPowerOut`),
            number: `\u26a1 ${Ga(Tk.max)}/s`,
            note: yk,
            onExplain: () => {
              Ik(`${mZ}rxWhy_power`)
            }
          }), (0, Si.jsx)(Mt, {
            kind: "Waste",
            label: Xk(`${mZ}rxWaste`),
            number: Xk(`${mZ}rxPlanPerMin`, {
              amount: pa(Tk.pelletsPerMin)
            }),
            note: Xk(`${mZ}rxWasteSpent`),
            onExplain: () => {
              Ik(`${mZ}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const Xj = "buildAFactory2Game:",
      Tj = {
        key: `${Xj}rxWaiting`,
        params: {},
        tone: "info"
      };

    function ij(kk, Fk) {
      return 0 !== (kk.baf2RxFlags & Fk)
    }

    function yj(kk) {
      var Fk, Ik;
      let {
        store: Tk,
        close: ik
      } = kk;
      const {
        t: yk
      } = (0, vT.y)(), lk = jZ(Tk), {
        explained: ak,
        hinting: qk,
        explain: Lk,
        explainOnce: tk
      } = IZ("baf2RxExplained"), Zk = (0, Xk.useCallback)(((kk, Fk) => {
        Lk(yk(kk, Fk))
      }), [Lk, yk]), jk = (0, Xk.useCallback)(((kk, Fk) => {
        tk(kk, yk(kk, Fk))
      }), [tk, yk]), [ek, wk] = (0, Xk.useState)(!1), [Hk, Jk] = (0, Xk.useState)(!1), xk = null === lk || void 0 === lk ? void 0 : lk.status, Pk = null === xk || void 0 === xk ? void 0 : xk.baf2RxAt.join(","), Kk = !0 === (null === xk || void 0 === xk ? void 0 : xk.baf2RxFormed);
      (0, Xk.useEffect)((() => {
        Jk(!1), wk(!1)
      }), [Pk, Kk]), (0, Xk.useEffect)((() => (Tk.opened(), () => {
        Tk.closed()
      })), [Tk]);
      const Qk = void 0 !== xk && ij(xk, xF),
        sk = xk ? Kk ? Ja(xk) : null !== lk && void 0 !== lk && lk.plan ? function(kk, Fk) {
          if (kk <= 0) return "off";
          if (Fk <= 0) return "alarm";
          const Ik = 100 * kk / Fk;
          return Ik < 50 ? "calm" : Ik < La ? "warm" : Ik <= 100 ? "hot" : "alarm"
        }(lk.plan.fuelHeat, lk.plan.cooling) : "off" : "off",
        Vk = xk ? Pa(xk) : null,
        zk = lk ? lk.waiting ? Tj : Kk ? nZ(lk.status) : function(kk) {
          var Fk, Ik;
          const {
            status: Xk
          } = kk;
          return GZ({
            left: Xk.baf2RxNeed.reduce(((kk, Fk) => {
              let [, Ik] = Fk;
              return kk + Ik
            }), 0),
            bad: Xk.baf2RxBad,
            rods: null !== (Fk = null === (Ik = kk.plan) || void 0 === Ik ? void 0 : Ik.rods) && void 0 !== Fk ? Fk : 0,
            canFill: ij(Xk, HF),
            melted: ij(Xk, wF),
            idle: kk.looks.reduce(((kk, Fk) => kk + (Fk === ya ? 1 : 0)), 0)
          })
        }(lk) : null,
        Sk = qk && null !== zk && ("ok" === zk.tone || "info" === zk.tone),
        vk = xk ? function(kk) {
          const Fk = 0 !== (kk.baf2RxFlags & jF),
            Ik = kk.baf2RxHeat < hl;
          return 0 !== (kk.baf2RxFlags & wF) || Ik && (Fk || !kk.baf2RxFormed) ? null : kk.baf2RxFormed && !Fk ? {
            key: `${Ha}rxApartScram`,
            params: {}
          } : {
            key: `${Ha}rxApartCooling`,
            params: {
              pct: String(hl)
            }
          }
        }(xk) : null,
        [Ek, Ok, nk] = null !== (Fk = null === lk || void 0 === lk ? void 0 : lk.dims) && void 0 !== Fk ? Fk : [0, 0, 0],
        Gk = `${Ek}\xd7${Ok}\xd7${nk}`;
      return (0, Si.jsx)(Vy.c, {
        close: ik,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Si.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Si.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Si.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Si.jsx)(wZ, {
                mood: sk
              }), (0, Si.jsxs)("div", {
                children: [(0, Si.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: yk(`${Xj}rxTitle`)
                }), lk && (0, Si.jsxs)("p", {
                  className: VT()("Baf2RxSubtitle", Kk && (null === Vk || void 0 === Vk ? void 0 : Vk.tone)),
                  children: [Kk && !Qk ? (0, Si.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": yk(`${Xj}rxChangeSize`),
                    onClick: () => {
                      if (!xk) return;
                      const kk = ij(xk, jF);
                      var Fk;
                      (Fk = {
                        scram: kk,
                        heat: xk.baf2RxHeat
                      }).scram && Fk.heat < hl ? wk(!0) : Zk(kk ? `${Xj}rxResizeCooling` : `${Xj}rxResizeHot`, {
                        pct: String(hl)
                      })
                    },
                    children: [Gk, " \u270e"]
                  }) : Gk, " \xb7 ", yk(Kk ? null !== (Ik = null === Vk || void 0 === Vk ? void 0 : Vk.label) && void 0 !== Ik ? Ik : `${Xj}rxState_running` : `${Xj}rxSubPlanShort`)]
                })]
              })]
            }), (0, Si.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [lk && !Qk && (0, Si.jsx)(eZ, {
                kind: "reactor",
                busy: lk.busy.has("apart"),
                whyNot: vk ? () => {
                  Zk(vk.key, vk.params)
                } : null,
                apart: () => {
                  Tk.tap("apart", (() => {
                    Tk.send("apart")
                  }))
                }
              }), (0, Si.jsx)(zy.k, {
                onClick: ik
              })]
            })]
          }), lk && zk && (0, Si.jsxs)("div", {
            className: "Baf2RxBody",
            children: [Kk ? (0, Si.jsx)(Fj, {
              view: lk,
              explain: Zk,
              preview: zZ(lk.status)
            }) : (0, Si.jsx)(Ij, {
              view: lk,
              explain: Zk
            }), (0, Si.jsx)(XZ, {
              text: Sk ? `${EZ(yk,zk)} ${yk(`${Xj}rxTapHint`)}` : EZ(yk, zk),
              tone: zk.tone,
              explained: ak
            }), Qk ? (0, Si.jsxs)(Si.Fragment, {
              children: [(0, Si.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: yk(`${Xj}rxNotYours`)
              }), (0, Si.jsx)(qZ, {
                status: lk.status,
                store: Tk,
                readOnly: !0
              })]
            }) : Kk && !Hk ? (0, Si.jsxs)(Si.Fragment, {
              children: [(0, Si.jsx)(NZ, {
                view: lk,
                store: Tk,
                explain: Zk,
                explainOnce: jk
              }), void 0 !== lk.status.baf2RxLayout && yZ(lk.status) && (0, Si.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Si.jsx)(qZ, {
                  status: lk.status,
                  store: Tk,
                  readOnly: !1,
                  bare: !0
                }), (0, Si.jsx)(aZ, {
                  status: lk.status,
                  store: Tk,
                  busy: lk.busy.has("fill")
                })]
              })]
            }) : (0, Si.jsxs)(Si.Fragment, {
              children: [(0, Si.jsx)(cZ, {
                view: lk,
                store: Tk,
                keepSize: Kk ? () => {
                  Jk(!1)
                } : void 0
              }), sa(lk.dims, lk.status.baf2RxDims) && (0, Si.jsx)(WZ, {
                need: lk.status.baf2RxNeed,
                explain: Zk
              }), (0, Si.jsx)(qZ, {
                status: lk.status,
                store: Tk,
                readOnly: !1
              })]
            }), ek && (0, Si.jsx)(ZZ, {
              id: "baf2ResizeTitle",
              title: `${Xj}rxResizeConfirmTitle`,
              body: `${Xj}rxResizeConfirmBody`,
              yes: `${Xj}rxChangeSize`,
              cancel: () => {
                wk(!1)
              },
              confirm: () => {
                wk(!1), Jk(!0)
              }
            })]
          })]
        })
      })
    }
    class lj {
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

    function aj(kk) {
      let {
        commands: Fk,
        store: Ik,
        power: Tk,
        water: ik,
        reactor: yk,
        battery: lk,
        collider: ak,
        terminal: qk,
        quests: Lk,
        tutorial: tk,
        close: Zk,
        leave: jk,
        askIslands: ek,
        showCore: wk,
        openSocial: Hk
      } = kk;
      const {
        userContext: Jk
      } = (0, Rl.d)(), xk = bl.featureFlags.useSocialFeatures && Jk.isLoggedIn(), [Pk, Kk] = (0, Xk.useState)((() => Ik.get()));
      (0, Xk.useEffect)((() => Ik.subscribe((() => {
        Kk(Ik.get())
      }))), [Ik]);
      const Qk = "islands" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) ? Pk.backToCore : void 0;
      return (0, Si.jsxs)(fy.Provider, {
        value: Fk,
        children: ["core" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(xt, {
          view: Pk.core,
          close: Zk,
          askIslands: ek
        }), "dropMap" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(st, {
          message: Pk.dropMap,
          quests: Lk,
          close: Zk,
          leave: jk
        }), "islands" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(ct, {
          message: Pk.islands,
          arrivedAtMs: Pk.arrivedAtMs,
          close: Qk ? () => {
            wk(Qk)
          } : Zk,
          leave: jk,
          openSocial: xk ? Hk : null
        }), "quests" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(RL, {
          store: Lk,
          tutorial: tk,
          close: Zk
        }), "transfer" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(TL, {
          message: Pk.transfer,
          arrivedAtMs: Pk.arrivedAtMs,
          close: Zk,
          leave: jk
        }), "power" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(py, {
          store: Tk,
          close: Zk
        }), "water" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(Jl, {
          store: ik,
          close: Zk
        }), "reactor" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(yj, {
          store: yk,
          close: Zk
        }), "battery" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(BZ, {
          store: lk,
          close: Zk
        }), "collider" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(xq, {
          store: ak,
          close: Zk
        }), "terminal" === (null === Pk || void 0 === Pk ? void 0 : Pk.kind) && (0, Si.jsx)(Dt, {
          store: qk,
          close: Zk,
          send: kk => {
            Fk.send(kk)
          }
        })]
      })
    }
    var qj = Ik(38490);

    function Lj(kk, Fk) {
      return kk.distSq - Fk.distSq
    }
    class tj {
      constructor() {
        this.list = [], this.pool = []
      }
      add(kk, Fk, Ik, Xk) {
        let Tk = this.pool[this.list.length];
        Tk || (Tk = {
          x: 0,
          y: 0,
          distSq: 0,
          element: Fk,
          liftRem: Ik,
          dot: Xk
        }, this.pool.push(Tk)), Tk.x = kk.x, Tk.y = kk.y, Tk.distSq = kk.distSq, Tk.element = Fk, Tk.liftRem = Ik, Tk.dot = Xk, this.list.push(Tk)
      }
    }
    class Zj {
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
        })), this.remPx = 16, this.Gj = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.PJ = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.PJ)
      }
      observe(kk) {
        this.observer.observe(kk)
      }
      unobserve(kk) {
        this.observer.unobserve(kk)
      }
      run(kk) {
        const Fk = kk.list;
        Fk.sort(Lj);
        const Ik = this.pxPerVw,
          Xk = this.pxPerVh;
        this.Gj.length = 0, this.hud && this.Gj.push(...this.hud.boxes(performance.now()));
        for (const ik of Fk) {
          var Tk;
          const kk = this.sizes.get(ik.element);
          let Fk = "no";
          if (kk && kk.width > 0) {
            const Tk = ik.x * Ik,
              yk = ik.y * Xk - ik.liftRem * this.remPx;
            this.fit(Tk, yk, kk.width, kk.height) || (Fk = ik.dot && this.fit(Tk, yk, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Tk = ik.element.dataset.crowded) && void 0 !== Tk ? Tk : "no") !== Fk && ("no" === Fk ? delete ik.element.dataset.crowded : ik.element.dataset.crowded = Fk), "hidden" !== Fk && (0, qj.b)(ik.element, ik.x, ik.y)
        }
        Fk.length = 0
      }
      fit(kk, Fk, Ik, Xk) {
        const Tk = kk - Ik / 2,
          ik = kk + Ik / 2,
          yk = Fk - Xk,
          lk = this.Gj;
        for (let ak = 0; ak < lk.length; ak += 4)
          if (Tk < lk[ak + 1] - 2 && ik > lk[ak] + 2 && yk < lk[ak + 3] - 2 && Fk > lk[ak + 2] + 2) return !1;
        return lk.push(Tk, ik, yk, Fk), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.PJ)
      }
    }
    const jj = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class ej {
      constructor() {
        this.cards = jj.map((kk => document.getElementsByClassName(kk))), this.watched = jj.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(kk) {
        kk - this.refreshedAt > 1e3 && (this.refreshedAt = kk, this.stale = !0);
        for (let Ik = 0; Ik < this.cards.length; Ik++) {
          var Fk;
          const kk = null !== (Fk = this.cards[Ik][0]) && void 0 !== Fk ? Fk : null;
          kk !== this.watched[Ik] && this.watch(Ik, kk)
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
          const Ik = Fk.getBoundingClientRect();
          let Xk = Ik.top,
            Tk = Ik.bottom;
          if (Fk === this.watched[0] && this.hud) {
            const kk = this.hud.getBoundingClientRect();
            Xk = Math.max(Xk, kk.top), Tk = Math.min(Tk, kk.bottom)
          }
          Ik.width > 0 && Tk > Xk && kk.push(Ik.left, Ik.right, Xk, Tk)
        }
      }
      watch(kk, Fk) {
        const Ik = this.watched[kk];
        var Xk, Tk;
        (Ik && this.sizes.unobserve(Ik), this.watched[kk] = Fk, this.stale = !0, Fk && this.sizes.observe(Fk), 0 === kk) && (null === (Xk = this.hud) || void 0 === Xk || Xk.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Tk = null === Fk || void 0 === Fk ? void 0 : Fk.closest(".Baf2QuestHud")) && void 0 !== Tk ? Tk : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const wj = [0, 0, 0],
      Hj = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Jj(kk, Fk, Ik, Xk, Tk, ik) {
      let [yk, lk, ak] = Xk;
      const qk = (yk + .5 - Ik[0]) ** 2 + (lk - Ik[1]) ** 2 + (ak + .5 - Ik[2]) ** 2;
      let Lk = null;
      qk <= ik ** 2 && (wj[0] = yk + .5, wj[1] = lk + Tk, wj[2] = ak + .5, Lk = Fk.projectWorldPosToViewport(wj));
      const tk = null !== Lk && Lk.x > -5 && Lk.x < 105 && Lk.y > -5 && Lk.y < 105;
      return (0, qj.c)(kk, !tk), tk ? (Hj.x = Lk.x, Hj.y = Lk.y, Hj.distSq = qk, Hj) : null
    }
    class xj {
      constructor(kk) {
        this.onElement = kk, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(kk) {
        const Fk = [];
        for (let Ik = 0; Ik + 4 < kk.length; Ik += 5) {
          const Xk = [kk[Ik], kk[Ik + 1], kk[Ik + 2]];
          Fk.push({
            key: Xk.join(","),
            pos: Xk,
            status: TT[kk[Ik + 3]],
            kind: EF[kk[Ik + 4]]
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
          const Ik = this.elements.get(kk);
          var Xk, Tk;
          Ik && (null === (Xk = this.onElement) || void 0 === Xk || Xk.call(this, Ik, !1));
          Fk ? (this.elements.set(kk, Fk), null === (Tk = this.onElement) || void 0 === Tk || Tk.call(this, Fk, !0)) : (this.elements.delete(kk), this.refs.delete(kk))
        }, this.refs.set(kk, Fk)), Fk
      }
      onAfterRender(kk, Fk, Ik) {
        for (const Xk of this.markers) {
          const Tk = this.elements.get(Xk.key);
          if (!Tk) continue;
          const ik = Jj(Tk, kk, Fk, Xk.pos, 1.05, 24);
          ik && Ik.add(ik, Tk, .45, !0)
        }
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
    }
    const Pj = {
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
    const Kj = (0, Xk.memo)((function(kk) {
        let {
          status: Fk,
          kind: Ik,
          bindRef: Xk
        } = kk;
        const {
          t: Tk
        } = (0, vT.y)(), ik = function(kk, Fk) {
          var Ik;
          if ("noFuel" === kk) {
            var Xk, Tk;
            const kk = null === (Xk = bF[Fk]) || void 0 === Xk || null === (Tk = Xk.fuels) || void 0 === Tk ? void 0 : Tk.find((kk => TI.includes(kk)));
            return null !== kk && void 0 !== kk ? kk : Pj.noFuel
          }
          return void 0 !== (null === (Ik = bF[Fk]) || void 0 === Ik ? void 0 : Ik.cryoMade) ? "noOutlet" === kk ? "Fluid Pipe" : "noInput" === kk ? "Biomass" : Pj[kk] : Pj[kk]
        }(Fk, Ik);
        return (0, Si.jsxs)("div", {
          className: VT()("Baf2StallMarker", Fk),
          ref: Xk,
          hidden: !0,
          children: [ik && (0, Si.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Si.jsx)(OT.d, {
              itemName: ik,
              amount: 0
            })
          }), (0, Si.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === Fk ? "?" : "!"
          }), (0, Si.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Tk(`buildAFactory2Game:stallTag_${Fk}`)
          })]
        })
      })),
      Qj = (0, Xk.memo)((function(kk) {
        let {
          controller: Fk
        } = kk;
        const [Ik, Tk] = (0, Xk.useState)((() => Fk.get()));
        return (0, Xk.useEffect)((() => (Tk(Fk.get()), Fk.subscribe((() => {
          Tk(Fk.get())
        })))), [Fk]), (0, Si.jsx)("div", {
          className: "Baf2StallMarkers",
          children: Ik.map((kk => (0, Si.jsx)(Kj, {
            status: kk.status,
            kind: kk.kind,
            bindRef: Fk.bind(kk.key)
          }, kk.key)))
        })
      })),
      sj = HI.f + 150;
    class Vj {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(kk, Fk) {
        const Ik = Fk - kk;
        null === this.offset || Ik < this.offset ? this.offset = Ik : this.offset = Math.min(Ik, this.offset + .02 * (Fk - this.sampledAt)), this.sampledAt = Fk
      }
      toLocal(kk) {
        var Fk;
        return kk + (null !== (Fk = this.offset) && void 0 !== Fk ? Fk : 0) + sj
      }
    }
    var zj = Ik(38494);
    const Sj = 15 * Math.PI / 180,
      oj = Math.SQRT2,
      vj = [4, 2];

    function Ej(kk, Fk) {
      const Ik = [1 / 0, 1 / 0, 1 / 0],
        Xk = [-1 / 0, -1 / 0, -1 / 0];
      for (const ak of kk)
        for (let kk = 0; kk < 3; kk++) Ik[kk] = Math.min(Ik[kk], ak[kk]), Xk[kk] = Math.max(Xk[kk], ak[kk]);
      const Tk = (Ik[0] + Xk[0]) / 2,
        ik = (Ik[1] + Xk[1]) / 2,
        yk = (Ik[2] + Xk[2]) / 2;
      let lk = 0;
      for (const ak of kk) lk = Math.max(lk, Math.hypot(ak[0] - Tk, ak[1] - ik, ak[2] - yk));
      return {
        x: Tk,
        y: ik,
        z: yk,
        r: lk + Fk
      }
    }

    function Oj(kk, Fk, Ik) {
      const Xk = Fk.x - kk.x,
        Tk = Fk.y - kk.y,
        ik = Fk.z - kk.z,
        yk = Math.sqrt(Xk * Xk + Tk * Tk + ik * ik);
      if (yk <= Fk.r + 8) return 1;
      const lk = Fk.r / yk,
        ak = Math.sqrt(1 - lk * lk),
        qk = ak < -kk.cosHalf,
        Lk = (Xk * kk.dx + Tk * kk.dy + ik * kk.dz) / yk;
      if (!qk && Lk < kk.cosHalf * ak - kk.sinHalf * lk) return 0;
      const tk = Ik * oj * kk.frameMs * kk.pxPerBlock / (yk - Fk.r);
      for (let Zk = 0; Zk < vj.length; Zk++)
        if (tk * vj[Zk] <= 1) return vj[Zk];
      return 1
    }

    function nj(kk, Fk) {
      return {
        name: kk,
        at: Fk,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Gj = [0, 0, 0];

    function pj(kk, Fk, Ik) {
      let [, Xk, Tk, ik, yk, lk] = Fk;
      const ak = HI.d * (null !== yk && void 0 !== yk ? yk : 1),
        qk = [];
      for (let jk = 0; jk < Xk.length; jk += 3) qk.push([Xk[jk] + .5, Xk[jk + 1] + .65, Xk[jk + 2] + .5]);
      const Lk = [];
      for (let jk = 0; jk < qk.length - 1; jk++) {
        const [kk, Fk] = [qk[jk], qk[jk + 1]];
        Lk.push([(kk[0] + Fk[0]) / 2, (kk[1] + Fk[1]) / 2, (kk[2] + Fk[2]) / 2])
      }
      const tk = qk.slice(1, -1),
        Zk = new Uint8Array(tk.length);
      for (const jk of null !== lk && void 0 !== lk ? lk : []) Zk[jk >> 1] |= 1 & jk ? 2 : 1;
      return {
        island: kk,
        length: tk.length,
        loop: ik,
        cellsPerMs: ak,
        edges: Lk,
        By: tk,
        bounds: Ej([...Lk, ...tk], .3),
        changed: !0,
        culled: !1,
        hide: Zk,
        items: Tk.map((kk => {
          let [Fk, Xk] = kk;
          return nj(Fk, (0, HI.w)(Fk, Xk, Ik, ak).at)
        }))
      }
    }

    function uj(kk, Fk) {
      const {
        items: Ik
      } = kk;
      if (0 === Ik.length) return;
      const Xk = kk.length / kk.cellsPerMs,
        Tk = Math.floor((Fk - Ik[0].at) / Xk) - 1;
      if (Tk > 0)
        for (const ik of Ik) ik.at += Tk * Xk
    }

    function bj(kk, Fk) {
      const Ik = Math.min(Math.floor(Fk), kk.length - 1),
        Xk = kk.hide[Ik];
      return 0 !== Xk && 0 !== (Xk & (Fk - Ik < .5 ? 1 : 2))
    }

    function Rj(kk, Fk) {
      const Ik = Math.min(Math.floor(Fk), kk.length - 1),
        Xk = Fk - Ik,
        Tk = Xk < .5,
        ik = Tk ? kk.edges[Ik] : kk.By[Ik],
        yk = Tk ? kk.By[Ik] : kk.edges[Ik + 1],
        lk = Tk ? 2 * Xk : 2 * Xk - 1;
      Gj[0] = ik[0] + (yk[0] - ik[0]) * lk, Gj[1] = ik[1] + (yk[1] - ik[1]) * lk, Gj[2] = ik[2] + (yk[2] - ik[2]) * lk
    }
    const Uj = Math.PI / 4;
    class Cj {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Vj, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.PJ = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(kk) {
        const Fk = performance.now();
        this.clock.sample(kk.baf2BeltLinesAt, Fk), this.queue(kk.baf2BeltLinesAt, kk, 0, null, null, 0), this.applyDue(Fk)
      }
      onMoves(kk) {
        const Fk = performance.now(),
          Ik = kk.baf2BeltMovesAt;
        this.clock.sample(Ik, Fk);
        for (const [Xk, Tk, ik, yk] of kk.baf2BeltMoveList) null === Tk ? this.queue(Ik - ik, null, Xk, null, null, null !== yk && void 0 !== yk ? yk : 0) : this.queue(Ik - ik, null, Xk, Tk, null !== yk && void 0 !== yk ? yk : null, 0);
        this.applyDue(Fk)
      }
      start(kk) {
        this.pool = new zj.d(kk, {
          scale: .3,
          yaw: Uj
        }, 64), this.PJ(), window.addEventListener("resize", this.PJ)
      }
      onAfterRender(kk) {
        const {
          pool: Fk
        } = this;
        if (!Fk) return;
        const Ik = performance.now(),
          Xk = Ik - this.lastRenderAt;
        this.lastRenderAt = Ik, Xk < 100 && (this.frameMs += .1 * (Xk - this.frameMs));
        const Tk = Ik + this.frameMs;
        this.applyDue(Tk);
        const ik = kk.cameraPosition,
          yk = Fk.follow(ik);
        this.setView(kk, ik);
        const lk = this.frame++;
        for (let ak = 0; ak < this.shown.length; ak++) {
          const kk = this.shown[ak],
            Ik = Oj(this.view, kk.bounds, kk.cellsPerMs),
            Xk = kk.culled && 0 !== Ik;
          if (kk.culled = 0 === Ik, !yk && !kk.changed && !Xk && (0 === Ik || (lk + ak) % Ik !== 0)) continue;
          kk.changed = !1, kk.loop && (uj(kk, Tk), (0, HI.s)(kk.items, kk.length, Tk, kk.cellsPerMs));
          let ik = kk.length;
          for (let lk = 0; lk < kk.items.length; lk++) {
            const Ik = kk.items[lk],
              Xk = (0, HI.y)(Ik.at, ik, Tk, kk.cellsPerMs);
            if (ik = Xk - HI.l, bj(kk, Xk)) {
              null === Ik.kind || Ik.hidden || (Ik.kind.hide(Ik.slot), Ik.hidden = !0);
              continue
            }
            let ak = Ik.kind;
            if (null === ak) {
              if (ak = Fk.kindOf(Ik.name), null === ak) continue;
              Ik.kind = ak, Ik.slot = ak.take(), Ik.hidden = !0, Ik.drawn = NaN
            } else if (Xk === Ik.drawn && !Ik.hidden && !yk) continue;
            Rj(kk, Xk), ak.write(Ik.slot, Gj[0], Gj[1], Gj[2]), Ik.hidden = !1, Ik.drawn = Xk
          }
        }
        Fk.commit()
      }
      dispose() {
        var kk;
        window.removeEventListener("resize", this.PJ), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (kk = this.pool) || void 0 === kk || kk.dispose(), this.pool = null
      }
      setView(kk, Fk) {
        const {
          cameraDir: Ik,
          lastDir: Xk
        } = this, Tk = kk.cameraDirection;
        for (let Lk = 0; Lk < 3; Lk++) Xk[Lk] = Ik[Lk], Ik[Lk] = Tk[Lk];
        const ik = Ik[0] * Xk[0] + Ik[1] * Xk[1] + Ik[2] * Xk[2],
          yk = Number.isNaN(ik) ? 0 : Math.acos(Math.min(1, Math.max(-1, ik))),
          {
            width: lk,
            height: ak
          } = this,
          qk = kk.tanHalfFovX;
        ! function(kk, Fk, Ik, Xk, Tk, ik, yk) {
          let lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          kk.x = Fk[0], kk.y = Fk[1], kk.z = Fk[2], kk.dx = Ik[0], kk.dy = Ik[1], kk.dz = Ik[2];
          const ak = Math.min(Math.PI, Math.atan(Math.sqrt(Xk * Xk + Tk * Tk)) + Sj + lk);
          kk.cosHalf = Math.cos(ak), kk.sinHalf = Math.sin(ak), kk.pxPerBlock = ik / (2 * Tk), kk.frameMs = yk
        }(this.view, Fk, Ik, qk, qk * ak / lk, ak * window.devicePixelRatio, this.frameMs, yk)
      }
      queue(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = Math.max(this.clock.toLocal(kk), this.lastPendingAt);
        this.lastPendingAt = yk, this.pending.push({
          at: yk,
          lines: Fk,
          line: Ik,
          name: Xk,
          pos: Tk,
          idx: ik
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
        for (const Ik of kk.baf2BeltLineList) this.lines.set(Ik[0], pj(kk.baf2BeltIsland, Ik, Fk));
        this.shown = [...this.lines.values()]
      }
      applyMove(kk, Fk, Ik) {
        let {
          name: Xk,
          pos: Tk,
          idx: ik
        } = Fk;
        kk.changed = !0, kk.loop && (uj(kk, Ik), (0, HI.s)(kk.items, kk.length, Ik, kk.cellsPerMs)), null !== Xk && null !== Tk ? (0, HI.t)(kk.items, kk.length, nj(Xk, Ik), Tk, Ik, kk.cellsPerMs) : null !== Xk ? kk.items.push(nj(Xk, Ik)) : kk.items.length > ik && this.release((0, HI.A)(kk.items, kk.length, Ik, kk.cellsPerMs, ik))
      }
      clearIsland(kk) {
        for (const [Fk, Ik] of this.lines)
          if (Ik.island === kk) {
            for (const kk of Ik.items) this.release(kk);
            this.lines.delete(Fk)
          }
      }
      release(kk) {
        null !== kk.kind && (kk.kind.release(kk.slot), kk.kind = null, kk.slot = -1, kk.hidden = !0, kk.drawn = NaN)
      }
    }
    var Nj = Ik(36597),
      cj = Ik(38503);

    function Wj(kk) {
      let {
        depth: Fk,
        store: Ik,
        t: Tk
      } = kk;
      const ik = function(kk) {
        const [Fk, Ik] = (0, Xk.useState)(kk.lastPlayerY());
        return (0, iL.d)(UT, Ik), (0, Xk.useEffect)((() => {
          Ik(kk.lastPlayerY())
        }), [kk]), Fk
      }(Ik);
      if (null === ik) return null;
      const [yk, lk] = Fk, ak = ik > yk ? yk : null !== lk && ik < lk ? lk : null, qk = {
        y: Ki(ik),
        target: null === ak ? "" : Ki(ak)
      };
      return (0, Si.jsx)("span", {
        className: VT()("Baf2QuestDepth", {
          Reached: null === ak
        }),
        children: Tk(`${qL}${null===ak?"questDepthReached":"questDepth"}`, qk)
      })
    }

    function fj(kk) {
      let {
        also: Fk,
        view: Ik,
        t: Xk
      } = kk;
      return (0, Si.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Si.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Si.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Si.jsx)("strong", {
            children: Xk(`${qL}questAlsoDownHere`)
          }), (0, Si.jsx)("span", {
            className: "Baf2QuestChips",
            children: Fk.map((kk => {
              let [Fk, Tk, ik, yk] = kk;
              return (0, Si.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Xk(`${qL}questAlsoItem`, {
                  item: tL(Xk, Ik.itemNames[Fk], Fk),
                  have: String(Tk),
                  need: String(ik)
                }),
                children: [(0, Si.jsx)(eL, {
                  item: Fk
                }), (0, Si.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Tk}/${ik}`
                }), null !== yk && (0, Si.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Xk(`${qL}questAlsoDepth`, {
                    y: Ki(yk)
                  })
                })]
              }, Fk)
            }))
          })]
        })]
      })
    }
    var Bj = Ik(3349);

    function dj(kk) {
      let {
        expanded: Fk,
        inventoryOpen: Ik,
        children: Tk
      } = kk;
      const ik = (0, Xk.useRef)(null);
      return (0, Xk.useEffect)((() => {
        const kk = ik.current,
          Fk = null === kk || void 0 === kk ? void 0 : kk.closest(".RightElements"),
          Xk = null === kk || void 0 === kk ? void 0 : kk.firstElementChild;
        if (!kk || !Fk || !Xk) return;
        return (0, cj.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Fk, Xk], (() => {
          const Tk = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Tk.length) return;
          const ik = Math.max(...Tk.map((kk => kk.getBoundingClientRect().bottom))),
            yk = Fk.getBoundingClientRect(),
            lk = Ik ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (lk) {
            const Fk = parseFloat(getComputedStyle(Xk).marginLeft) + parseFloat(getComputedStyle(Xk).marginRight),
              Ik = yk.right - lk.getBoundingClientRect().right - 8 - Fk;
            kk.style.setProperty("--baf2-quest-room", `${Ik}px`), kk.classList.toggle("NoRoom", Ik < 150)
          } else kk.style.removeProperty("--baf2-quest-room"), kk.classList.remove("NoRoom");
          const ak = ik - yk.top + 8,
            qk = function(kk, Fk, Ik) {
              const Xk = Fk.getBoundingClientRect(),
                Tk = kk.getBoundingClientRect(),
                ik = (0, Bj.f)(Tk.left, Tk.right, Xk.top + Ik);
              if (null !== ik && ik < Xk.bottom) return ik - Xk.top;
              return Xk.height - (parseFloat(getComputedStyle(Fk).paddingBottom) || 0)
            }(kk, Fk, ak) - 8,
            Lk = window.innerHeight / 2 - yk.top,
            {
              top: tk,
              maxHeight: Zk
            } = function(kk, Fk, Ik, Xk, Tk) {
              const ik = Math.min(Ik, Math.max(0, Fk - kk)),
                yk = Tk ? kk : Math.max(kk, Math.min(Xk - ik / 2, Fk - ik));
              return {
                top: yk,
                maxHeight: Math.max(0, Fk - yk)
              }
            }(ak, qk, function(kk) {
              const Fk = kk.firstElementChild,
                Ik = Fk ? Fk.scrollHeight - Fk.clientHeight : 0;
              return kk.getBoundingClientRect().height + Math.max(0, Ik)
            }(Xk), Lk, zi());
          kk.style.top = `${tk}px`, kk.style.maxHeight = `${Zk}px`
        }))
      }), [Ik]), (0, Si.jsx)("div", {
        ref: ik,
        className: VT()("Baf2QuestHud", {
          Expanded: Fk
        }),
        children: Tk
      })
    }

    function Yj(kk) {
      let {
        amount: Fk,
        t: Ik
      } = kk;
      return (0, Si.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Si.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Si.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: Ik(`${qL}questStepsDone`, {
            amount: String(Fk)
          })
        })]
      })
    }

    function Aj(kk) {
      let {
        pulse: Fk
      } = kk;
      return 0 === Fk ? null : (0, Si.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, Fk)
    }

    function gj(kk) {
      var Fk;
      let {
        store: Ik
      } = kk;
      const Tk = (0, iL.f)(RT, Ik.get()),
        [ik, yk] = (0, Xk.useState)(!1),
        {
          t: lk
        } = (0, vT.y)(),
        ak = (0, si.f)(Vi),
        {
          openInGameMenuName: qk,
          openEverythingMenuName: Lk
        } = (0, KT.j)(["openInGameMenuName", "openEverythingMenuName"]),
        tk = "inventory" === qk && null === Lk,
        Zk = null !== qk && !tk || null !== Lk;
      if (! function(kk) {
          return null !== kk.name || null !== kk.side
        }(Tk) || Zk || "off" === Tk.tutorial) return null;
      const jk = BT(Tk.rows),
        ek = jk.filter((kk => kk.done)).length,
        wk = function(kk, Fk) {
          const Ik = AT(kk);
          let Xk = 0;
          return kk.filter(((kk, Tk) => !!kk.justFinished || !(kk.done || Tk < Ik || Xk > Fk) && (Xk++, !0)))
        }(Tk.rows, ak ? 0 : 2),
        Hk = ak ? wk : function(kk, Fk) {
          const Ik = Fk.filter((kk => !kk.justFinished));
          if (Ik.length < 2) return [...Fk];
          const Xk = kk.indexOf(Ik[0]),
            Tk = kk.indexOf(Ik[Ik.length - 1]),
            ik = new Set(BT(kk));
          return kk.filter(((kk, Ik) => Fk.includes(kk) || kk.done && ik.has(kk) && Ik > Xk && Ik < Tk))
        }(Tk.rows, wk),
        Jk = ik ? Tk.rows : Hk,
        xk = ik || ak ? [] : function(kk, Fk) {
          const Ik = new Array(Fk.length + 1).fill(0),
            Xk = new Set(BT(kk));
          let Tk = 0;
          for (const ik of kk) Tk < Fk.length && ik === Fk[Tk] ? Tk++ : ik.done && Xk.has(ik) && Ik[Tk]++;
          return Ik
        }(Tk.rows, Hk),
        Pk = ik || Hk.length < Tk.rows.length || null !== Tk.reward,
        Kk = fT(Tk),
        Qk = Kk ? lk(`${qL}questLineComplete`) : Tk.tier ? JL(lk, Tk.tier) : lk(`${qL}currentQuest`),
        sk = function(kk) {
          var Fk, Ik;
          if (fT(kk)) return null;
          const Xk = null === (Fk = kk.chapters) || void 0 === Fk ? void 0 : Fk.find((Fk => {
            let [Ik] = Fk;
            return Ik === kk.tier
          }));
          if (!Xk) return null;
          const Tk = Xk[1].filter((kk => !kk[4]));
          if (0 === Tk.length) return null;
          const ik = null === (Ik = kk.name) || void 0 === Ik ? void 0 : Ik[0],
            yk = kk => Tk.findIndex((Fk => Fk[0] === ik && (!kk || !Fk[3]))),
            lk = yk(!0),
            ak = lk >= 0 ? lk : yk(!1);
          if (ak >= 0) return [ak + 1, Tk.length];
          const qk = Tk.filter((kk => kk[3])).length;
          return [Math.min(qk + 1, Tk.length), Tk.length]
        }(Tk);
      return (0, Si.jsx)(Nj.f, {
        placement: "topRight",
        children: (0, Si.jsx)(dj, {
          expanded: ik,
          inventoryOpen: tk,
          children: (0, Si.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: LL,
            children: [null !== Tk.name && (0, Si.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Si.jsx)(Aj, {
                pulse: Tk.pulse
              }), (0, Si.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Si.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Qk, sk && (0, Si.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": lk(`${qL}questPlaceLabel`, {
                      n: String(sk[0]),
                      total: String(sk[1])
                    }),
                    children: lk(`${qL}questPlace`, {
                      n: String(sk[0]),
                      total: String(sk[1])
                    })
                  }), Tk.tier && Tk.core && !Kk && (0, Si.jsx)(xL, {
                    core: Tk.core,
                    t: lk
                  })]
                })
              }), (0, Si.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: lk(`${qL}${Tk.name[0]}`, ZL(Tk.name[1]))
              }), (jk.length > 1 || Pk) && (0, Si.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [jk.length > 1 && (0, Si.jsx)(PL, {
                  rows: jk,
                  t: lk
                }), Pk && (0, Si.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": ik,
                  onClick: () => {
                    yk(!ik)
                  },
                  children: [(0, Si.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: lk(`${qL}questStepsToggle`, {
                      done: String(ek),
                      total: String(jk.length)
                    })
                  }), (0, Si.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: ik ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Si.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [Jk.map(((kk, Fk) => {
                  var ik;
                  const yk = kk.current && Tk.depth;
                  return (0, Si.jsxs)(Xk.Fragment, {
                    children: [(null !== (ik = xk[Fk]) && void 0 !== ik ? ik : 0) > 0 && (0, Si.jsx)(Yj, {
                      amount: xk[Fk],
                      t: lk
                    }), (0, Si.jsx)(KL, {
                      row: kk,
                      view: Tk,
                      t: lk,
                      extra: yk && (0, Si.jsx)(Wj, {
                        depth: yk,
                        store: Ik,
                        t: lk
                      })
                    })]
                  }, kk.id)
                })), (null !== (Fk = xk[Jk.length]) && void 0 !== Fk ? Fk : 0) > 0 && (0, Si.jsx)(Yj, {
                  amount: xk[Jk.length],
                  t: lk
                }), Tk.also.length > 0 && (0, Si.jsx)(fj, {
                  also: Tk.also,
                  view: Tk,
                  t: lk
                })]
              }), ik && Tk.reward && (0, Si.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [lk(`${qL}questReward`), (0, Si.jsx)(eL, {
                  item: Tk.reward
                }), tL(lk, Tk.itemNames[Tk.reward], Tk.reward)]
              })]
            }), Tk.side && (0, Si.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [cT(Tk, Date.now()) && (0, Si.jsx)(Aj, {
                pulse: Tk.sideCameUpAt
              }), (0, Si.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: lk(`${qL}questSide`)
              }), (0, Si.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: lk(`${qL}${Tk.side.name[0]}`, ZL(Tk.side.name[1]))
              }), (0, Si.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Si.jsx)(KL, {
                  row: Tk.side.row,
                  view: Tk,
                  t: lk
                })
              })]
            })]
          })
        })
      })
    }
    const mj = "baf2ToastView";
    class hj {
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
        const Ik = this.dropCovered();
        null !== Ik && (Ik.holdMs > 0 || "baf2ToastCelebrate" === Ik.message.baf2ToastStyle) && "baf2ToastCelebrate" !== kk.baf2ToastStyle && this.show(Ik.message, Ik.holdMs);
        const Xk = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== kk.baf2ToastStyle && Xk > 0) return this.pending = {
          message: kk,
          holdMs: Fk
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const kk = this.pending;
          this.pending = null, kk && this.present(kk.message, kk.holdMs)
        }), Xk));
        this.present(kk, Fk)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(kk, Fk) {
        this.clearTimers(), this.pending = null;
        const Ik = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: kk.baf2ToastText,
          style: kk.baf2ToastStyle,
          swapped: Ik,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === kk.baf2ToastStyle ? 1500 : Fk), this.GL();
        const Xk = Math.min(8e3, Math.max(1e3, kk.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Xk)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.GL(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.GL()
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
      GL() {
        uT.g.GL(mj, this.view, !0)
      }
    }
    var rj = Ik(74);
    const Dj = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Mj(kk) {
      let {
        store: Fk
      } = kk;
      const Ik = (0, iL.f)(mj, Fk.get()),
        {
          openInGameMenuName: Xk,
          openEverythingMenuName: Tk
        } = (0, KT.j)(["openInGameMenuName", "openEverythingMenuName"]),
        ik = Ik && (0, Si.jsxs)("div", {
          className: VT()("Baf2Toast", Dj[Ik.style], {
            Swapped: Ik.swapped,
            Leaving: Ik.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === Ik.style && (0, Si.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Si.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Si.jsx)(nT.c, {
              text: Ik.text
            })
          })]
        }, Ik.id);
      return null !== Xk && null === Tk ? (0, rj.createPortal)((0, Si.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: ik
      }), document.body) : (0, Si.jsx)(Nj.f, {
        children: ik
      })
    }
    const ke = "baf2AreaView";
    class Fe {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.eq = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.eq = null
      }
      arrive(kk, Fk) {
        Fk && function(kk) {
          return "home" === kk.baf2AreaPlace && void 0 !== kk.baf2AreaNameText
        }(kk) ? this.eq = kk : this.show(kk)
      }
      release() {
        const kk = this.eq;
        null !== kk && this.show(kk)
      }
      show(kk) {
        this.clearTimer(), this.eq = null;
        const Fk = void 0 === kk.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: kk,
          ms: Fk
        }, this.GL(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.GL()
        }), Fk)
      }
      dispose() {
        this.clearTimer(), this.eq = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      GL() {
        uT.g.GL(ke, this.view, !0)
      }
    }

    function Ie(kk) {
      var Fk;
      let {
        store: Ik
      } = kk;
      const {
        t: Xk
      } = (0, vT.y)(), Tk = (0, iL.f)(ke, Ik.get());
      if (!Tk) return null;
      const {
        area: ik
      } = Tk, yk = ik.baf2AreaResetMinutes;
      return (0, Si.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": ik.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Tk.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Si.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), ik.baf2AreaHeading && (0, Si.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Xk(ik.baf2AreaHeading)
        }), (0, Si.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (Fk = ik.baf2AreaNameText) && void 0 !== Fk ? Fk : Xk(ik.baf2AreaName)
        }), ik.baf2AreaNote && (0, Si.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Xk(ik.baf2AreaNote)
        }), void 0 !== yk && (0, Si.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Xk("buildAFactory2Game:areaWildsReset", {
            time: Qi(Xk, 60 * yk)
          })
        })]
      }, Tk.id)
    }
    const Xe = "baf2GearGauge";
    class Te {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      bJ(kk) {
        var Fk;
        if (this.clearLinger(), null === kk.gearPowerKind) return void this.set(null);
        const Ik = "jetpack" === kk.gearPowerKind && (Xk = kk.gearChargeState, Tk = kk.gearCharge, "flying" === Xk || "charging" === Xk || "outOfCharge" === Xk || "ceiling" === Xk || "offPlot" === Xk || "noPower" === Xk && Tk <= 0);
        var Xk, Tk;
        const ik = !0 === (null === (Fk = this.view) || void 0 === Fk ? void 0 : Fk.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          yk = Ik || "jetpack" === kk.gearPowerKind && ik;
        this.set({
          gauge: kk,
          jetShown: yk
        }), yk && !Ik && (this.lingerTimer = setTimeout((() => {
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
        this.view = kk, uT.g.GL(Xe, kk, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const ie = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function ye(kk) {
      let {
        store: Fk
      } = kk;
      const Ik = (0, iL.f)(Xe, Fk.get());
      return Ik ? "jetpack" === Ik.gauge.gearPowerKind ? (0, Si.jsx)(le, {
        view: Ik
      }) : (0, Si.jsx)(ae, {
        gauge: Ik.gauge
      }) : null
    }

    function le(kk) {
      let {
        view: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)(), {
        gauge: Xk
      } = Fk, Tk = Xk.gearChargeMax > 0 ? Math.max(0, Math.min(1, Xk.gearCharge / Xk.gearChargeMax)) : 0, ik = ie[Xk.gearChargeState], yk = ik ? Ik(ik) : null;
      return (0, Si.jsxs)("div", {
        className: VT()("Baf2JetArc", {
          Shown: Fk.jetShown,
          Low: Tk < .2,
          Warm: Tk >= .2 && Tk < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Tk)
        },
        "aria-hidden": !Fk.jetShown,
        children: [(0, Si.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Si.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: qe,
            pathLength: 100
          }), (0, Si.jsx)("path", {
            className: "Baf2JetArcFill",
            d: qe,
            pathLength: 100
          })]
        }), (0, Si.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Tk), "%"]
        }), yk && (0, Si.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: yk
        })]
      })
    }

    function ae(kk) {
      let {
        gauge: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)(), Xk = function(kk, Fk) {
        switch (Fk.gearPowerKind) {
          case "skyPack":
            return kk("buildAFactory2Game:gearSkyPack", {
              charge: Fk.gearCharge,
              max: Fk.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return kk("buildAFactory2Game:gearIslandDraw", {
              power: Dk(Fk.gearIslandPower),
              cost: Dk(Fk.gearCostPerUse)
            });
          case "barrier":
            return kk("buildAFactory2Game:gearBarrier", {
              shield: Math.round(Fk.gearCharge),
              max: Fk.gearChargeMax,
              power: Dk(Fk.gearIslandPower)
            });
          default:
            return null
        }
      }(Ik, Fk);
      return null === Xk ? null : (0, Si.jsx)(Nj.f, {
        children: (0, Si.jsx)("div", {
          className: VT()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === Fk.gearChargeState || "outOfCharge" === Fk.gearChargeState
          }),
          role: "status",
          children: Xk
        })
      })
    }
    const qe = (() => {
      const kk = kk => {
        const Fk = kk * Math.PI / 180;
        return `${(40*Math.cos(Fk)).toFixed(2)} ${(40*Math.sin(Fk)).toFixed(2)}`
      };
      return `M ${kk(160)} A 40 40 0 1 1 ${kk(380)}`
    })();
    class Le {
      constructor(kk) {
        this.onElement = kk, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      bJ(kk) {
        let Fk = kk.baf2LabelsReset || kk.baf2LabelsIsland !== this.island;
        Fk && (this.labels.clear(), this.island = kk.baf2LabelsIsland);
        for (const [Ik, Xk, Tk, ik, yk] of kk.baf2LabelsList) {
          const kk = `${Ik},${Xk},${Tk}`,
            lk = this.labels.get(kk);
          null === ik ? Fk = this.labels.delete(kk) || Fk : lk && lk.item === ik && (lk.count === yk || lk.count >= 0 && yk >= 0) ? lk.count !== yk && (lk.count = yk, this.writeCount(kk, yk)) : (this.labels.set(kk, {
            key: kk,
            pos: [Ik, Xk, Tk],
            item: ik,
            count: yk
          }), this.writeCount(kk, yk), Fk = !0)
        }
        if (this.changes++, Fk) {
          this.snapshot = [...this.labels.values()];
          for (const kk of this.listeners) kk()
        }
      }
      bindCount(kk) {
        const Fk = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${kk}`;
        let Ik = this.countRefs.get(Fk);
        return Ik || (Ik = Ik => {
          var Xk, Tk;
          Ik ? (this.countElements.set(Fk, Ik), this.writeCount(kk, null !== (Xk = null === (Tk = this.labels.get(kk)) || void 0 === Tk ? void 0 : Tk.count) && void 0 !== Xk ? Xk : -1)) : (this.countElements.delete(Fk), this.countRefs.delete(Fk))
        }, this.countRefs.set(Fk, Ik)), Ik
      }
      setCountWords(kk) {
        this.countWords = kk;
        for (const [Fk, Ik] of this.labels) this.writePart(`words|${Fk}`, kk(Ik.count), Ik.count)
      }
      writeCount(kk, Fk) {
        this.writePart(`bare|${kk}`, Pi(Fk), Fk), this.countElements.has(`words|${kk}`) && this.writePart(`words|${kk}`, this.countWords(Fk), Fk)
      }
      writePart(kk, Fk, Ik) {
        const Xk = this.countElements.get(kk);
        if (!Xk || Ik < 0) return;
        const Tk = Xk.firstChild;
        Tk && 3 === Tk.nodeType && !Tk.nextSibling ? Tk.nodeValue !== Fk && (Tk.nodeValue = Fk) : Xk.textContent !== Fk && (Xk.textContent = Fk)
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
          const Ik = this.elements.get(kk);
          var Xk, Tk;
          Ik && (null === (Xk = this.onElement) || void 0 === Xk || Xk.call(this, Ik, !1));
          Fk ? (this.elements.set(kk, Fk), null === (Tk = this.onElement) || void 0 === Tk || Tk.call(this, Fk, !0)) : (this.elements.delete(kk), this.refs.delete(kk))
        }, this.refs.set(kk, Fk)), Fk
      }
      onAfterRender(kk, Fk, Ik, Xk) {
        for (const Tk of this.snapshot) {
          const ik = this.elements.get(Tk.key);
          if (!ik) continue;
          if (Xk(Tk.key)) {
            (0, qj.c)(ik, !0);
            continue
          }
          const yk = Jj(ik, kk, Fk, Tk.pos, 1.1, 24);
          yk && Ik.add(yk, ik, 0, !1)
        }
      }
    }
    const te = (0, Xk.memo)((function(kk) {
        let {
          item: Fk
        } = kk;
        return (0, Si.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Si.jsx)(OT.d, {
            itemName: Fk,
            amount: 0
          })
        })
      })),
      Ze = (0, Xk.memo)((function(kk) {
        let {
          label: Fk,
          bindRef: Ik,
          countRef: Xk,
          wordsRef: Tk
        } = kk;
        return (0, Si.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: Ik,
          hidden: !0,
          children: [(0, Si.jsx)(te, {
            item: Fk.item
          }), Fk.count >= 0 && (0, Si.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Si.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Tk
            }), (0, Si.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Xk
            })]
          })]
        })
      })),
      je = (0, Xk.memo)((function(kk) {
        let {
          store: Fk
        } = kk;
        const {
          t: Ik
        } = (0, vT.y)(), [Tk, ik] = (0, Xk.useState)((() => Fk.list()));
        return (0, Xk.useEffect)((() => (ik(Fk.list()), Fk.subscribe((() => {
          ik(Fk.list())
        })))), [Fk]), (0, Xk.useEffect)((() => {
          Fk.setCountWords((kk => Ik("buildAFactory2Game:labelSiloCount", {
            count: Pi(kk)
          })))
        }), [Fk, Ik]), (0, Si.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Tk.map((kk => -2 === kk.count ? null : (0, Si.jsx)(Ze, {
            label: kk,
            bindRef: Fk.bind(kk.key),
            countRef: Fk.bindCount(kk.key),
            wordsRef: Fk.bindCount(kk.key, "words")
          }, kk.key)))
        })
      })),
      ee = {
        read: () => !0,
        write: () => {}
      };

    function we(kk) {
      return `${kk[0]},${kk[1]},${kk[2]}`
    }

    function He(kk) {
      let [Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk] = kk;
      const jk = void 0 === tk || void 0 === Zk ? function(kk) {
        return [Math.floor((kk - 1) / 2), 0]
      }(ik) : [tk, Zk];
      return {
        kind: 0 === ak ? "reactor" : "battery",
        box: BI([Fk, Ik, Xk], Tk, ik, yk, lk, jk),
        formed: 1 === qk,
        level: Lk
      }
    }
    class Je {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee;
        this.guideSetting = kk, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = kk.read()
      }
      bJ(kk) {
        var Fk;
        const Ik = new Map;
        for (const Xk of kk.baf2RxPlanList) {
          const kk = He(Xk);
          Ik.set(we(kk.box.ctrl), kk)
        }
        this.plans = Ik, this.layouts = new Map((null !== (Fk = kk.baf2RxLayouts) && void 0 !== Fk ? Fk : []).map((kk => {
          let [Fk, Ik, Xk, Tk] = kk;
          return [we([Fk, Ik, Xk]), Tk]
        }))), this.predicted.clear(), kk.baf2RxFormedAt && (this.formed = {
          ctrl: kk.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Xk of [...this.startersOff]) {
          const kk = Ik.get(Xk);
          kk && !kk.formed || this.startersOff.delete(Xk)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((kk => this.planByKey(kk)))
      }
      planAt(kk) {
        return this.planByKey(we(kk))
      }
      predictSize(kk, Fk) {
        this.predicted.set(we(kk), Fk), this.changed()
      }
      unpredict(kk) {
        this.predicted.delete(we(kk)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(kk) {
        var Fk;
        const Ik = we(kk);
        return this.predicted.has(Ik) ? null : null !== (Fk = this.layouts.get(Ik)) && void 0 !== Fk ? Fk : null
      }
      showsStarter(kk) {
        return !this.startersOff.has(we(kk))
      }
      setStarter(kk, Fk) {
        const Ik = we(kk);
        Fk ? this.startersOff.delete(Ik) : this.startersOff.add(Ik), this.changed()
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
        const Ik = this.predicted.get(kk);
        return Ik ? {
          ...Fk,
          box: YI(Fk.box, Fk.kind, Ik[0], Ik[1], Ik[2])
        } : Fk
      }
      changed() {
        this.version++;
        for (const kk of this.listeners) kk()
      }
    }
    var xe = Ik(187);
    const Pe = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Ke(kk, Fk, Ik, Xk) {
      const Tk = kk.length / 3;
      for (let ik = 0; ik < Pe.length / 3; ik++) kk.push(Pe[3 * ik] * Xk[0] / 2 + Ik[0], Pe[3 * ik + 1] * Xk[1] / 2 + Ik[1], Pe[3 * ik + 2] * Xk[2] / 2 + Ik[2]);
      for (let ik = Tk; ik < Tk + 24; ik += 4) Fk.push(ik, ik + 1, ik + 2, ik, ik + 2, ik + 3)
    }

    function Qe(kk, Fk, Ik) {
      const Xk = Fk[0][0],
        Tk = [],
        ik = [];
      for (const [yk, lk] of Fk) Ke(Tk, ik, [yk[0] - Xk[0], yk[1] - Xk[1], yk[2] - Xk[2]], lk);
      return kk.createGameMesh({
        positions: Tk,
        indices: ik
      }, Ik, Xk)
    }

    function se(kk, Fk) {
      const Ik = kk.w - 2,
        Xk = kk.d - 2;
      return 1 === function(kk, Fk, Ik, Xk) {
        const [Tk, ik, yk] = kk;
        if (Number(Tk <= 2) + Number(ik <= 2) + Number(yk <= 2) >= 2) return function(kk, Fk, Ik) {
          return (kk + Fk + Ik) % 2 === 0 ? 1 : 3
        }(Fk, Ik, Xk);
        const [lk, ak] = Tk >= ik && Tk >= yk ? [Ik, Xk] : ik >= yk ? [Fk, Xk] : [Fk, Ik];
        return lk % 2 === 0 && ak % 2 === 0 ? 1 : 3
      }([Ik, kk.h - 2, Xk], Fk % Ik, Math.floor(Fk / (Ik * Xk)), Math.floor(Fk / Ik) % Xk) ? "rod" : "channel"
    }

    function Ve(kk, Fk, Ik) {
      if ("reactor" !== kk.kind || kk.formed || !Fk) return !1;
      const Xk = mI(kk.box);
      for (let Tk = 0; Tk < Xk; Tk++) {
        const kk = Ik(Tk);
        if (null !== kk && nI(kk)) return !1
      }
      return !0
    }

    function ze(kk, Fk, Ik, Xk, Tk) {
      var ik;
      let yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const lk = FX(kk.box, Fk),
        ak = iX(kk.kind, lk, Ik);
      if ("wrong" === ak || "blocked" === ak) return "wrong";
      if (!Tk) return null;
      if ("inside" === lk && "reactor" === kk.kind && "Air" === GI(Ik)) {
        if (null !== yk) {
          var qk;
          const Ik = TZ[iZ(yk, IX(kk.box, Fk))];
          return Ik && null !== (qk = va(Ik)) && void 0 !== qk ? qk : null
        }
        if (Xk) return se(kk.box, IX(kk.box, Fk))
      }
      if ("missing" !== ak) return null;
      const Lk = yX(kk.kind, lk);
      return null === Lk ? null : null !== (ik = va(Lk)) && void 0 !== ik ? ik : null
    }
    const Se = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function oe(kk, Fk, Ik) {
      const Xk = Ik => {
        const Xk = Fk(MI(kk.box, Ik));
        return null !== Xk && function(kk, Fk) {
          return "reactor" !== kk.kind || Fk !== rI(kk.box) && "inside" !== FX(kk.box, Fk)
        }(kk, Ik) && "ok" !== iX(kk.kind, FX(kk.box, Ik), Xk)
      };
      if (Ik) {
        const ik = kX(kk.box, [Math.floor(Ik[0]), Math.floor(Ik[1]), Math.floor(Ik[2])]);
        if (ik >= 0 && (Xk(ik) || (Tk = ik, "reactor" === kk.kind && "inside" === FX(kk.box, Tk) && "Air" === Fk(MI(kk.box, Tk))))) return ik
      }
      var Tk;
      const ik = mI(kk.box);
      for (let yk = 0; yk < ik; yk++)
        if (Xk(yk)) return yk;
      return -1
    }

    function ve(kk, Fk) {
      return Math.floor(Fk / (kk.w * kk.d))
    }

    function Ee(kk, Fk, Ik) {
      return Ik >= 0 && ve(kk, Fk) > ve(kk, Ik)
    }

    function Oe(kk, Fk) {
      return Fk >= 0 && kk.h >= 3 && ve(kk, Fk) === kk.h - 1
    }

    function ne(kk) {
      const Fk = GI(kk);
      return Fk === PI || "Collider" === Fk || "Laser" === Fk || Fk.startsWith("_Collider ")
    }

    function Ge(kk, Fk, Ik, Xk) {
      if (Xk(kk)) return null;
      if (!Se.every((Fk => {
          let [Xk, Tk, ik] = Fk;
          const yk = Ik([kk[0] + Xk, kk[1] + Tk, kk[2] + ik]);
          return null !== yk && !NI("reactor", yk) && "reactor" !== pI(yk)
        }))) return null;
      const Tk = cI("reactor").min,
        ik = BI([kk[0], kk[1], kk[2]], function(kk, Fk) {
          const Ik = Fk[0] - (kk[0] + .5),
            Xk = Fk[2] - (kk[2] + .5);
          return Math.abs(Ik) >= Math.abs(Xk) ? Ik >= 0 ? 2 : 4 : Xk >= 0 ? 1 : 3
        }(kk, Fk), Tk, Tk, Tk, dI("reactor", Tk)),
        yk = rI(ik);
      let lk = !0;
      for (let ak = 0; ak < mI(ik) && lk; ak++) {
        if (ak === yk) continue;
        const kk = MI(ik, ak),
          Fk = Ik(kk);
        lk = !Xk(kk) && (null === Fk || !ne(Fk))
      }
      return {
        box: ik,
        fits: lk
      }
    }
    const pe = oa,
      ue = "baf2Goal",
      be = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Re = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Ue = .4;

    function Ce(kk, Fk) {
      let [Ik, Xk, Tk] = kk;
      const ik = ba([Ik - .02, Xk - .02, Tk - .02], [Ik + 1.02, Xk + 1.02, Tk + 1.02], .07);
      return Fk && (ik.push([
        [Ik + .5, Xk + 1 + .7, Tk + .5],
        [.08, 1.4, .08]
      ]), ik.push([
        [Ik + .5, Xk + 1 + 1.4 + .2, Tk + .5],
        [Ue, Ue, Ue]
      ])), ik
    }

    function Ne(kk, Fk) {
      let [Ik, Xk, Tk] = Fk;
      return kk.isBlockInLoadedChunk(Ik, Xk, Tk) ? kk.blockIdToBlockName(kk.getBlockId(Ik, Xk, Tk)) : null
    }
    let ce = null;
    const We = new Set;
    let fe = null;

    function Be(kk) {
      ce = kk;
      for (const Fk of We) Fk(kk)
    }
    class de {
      constructor(kk) {
        var Fk;
        this.plans = kk, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (Fk = kk => {
          var Fk, Ik;
          this.setGoal(null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.goal) && void 0 !== Fk ? Fk : null, null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.startsBattery) && void 0 !== Ik && Ik)
        }, fe ??= [uT.g.subscribe("setDirectionArrow", (kk => {
          let {
            id: Fk,
            position: Ik,
            text: Xk
          } = kk;
          Fk === ue && Be({
            goal: [Math.floor(Ik[0]), Math.floor(Ik[1]), Math.floor(Ik[2])],
            startsBattery: JSON.stringify(null !== Xk && void 0 !== Xk ? Xk : null).includes("arrowStartBattery")
          })
        })), uT.g.subscribe("clearDirectionArrow", (kk => {
          let {
            id: Fk
          } = kk;
          null !== Fk && Fk !== ue || Be(null)
        }))], We.add(Fk), Fk(ce), () => {
          We.delete(Fk)
        })
      }
      onAfterRender(kk, Fk) {
        const Ik = performance.now();
        if (this.cues.length > 0) {
          const Fk = .55 + .45 * Math.sin(Ik / 1100 * Math.PI * 2);
          for (const Ik of this.cues) kk.setGameMesh(Ik, {
            visibility: Fk
          })
        }
        if (Ik - this.lastCheckMs < 150) return;
        this.lastCheckMs = Ik;
        const Xk = this.plans.all().filter((kk => {
            const [Ik, Xk, Tk] = kk.box.ctrl;
            return (!kk.formed || null !== this.plans.layoutOf(kk.box.ctrl)) && (Ik - Fk[0]) ** 2 + (Xk - Fk[1]) ** 2 + (Tk - Fk[2]) ** 2 <= 2304
          })),
          Tk = function(kk, Fk) {
            const Ik = xe.f.se,
              Xk = new Map;
            for (const ik of Fk) {
              const Fk = MI(ik.box, 0),
                yk = MI(ik.box, mI(ik.box) - 1),
                lk = [Math.min(Fk[0], yk[0]), Math.min(Fk[1], yk[1]), Math.min(Fk[2], yk[2])].map((kk => Math.floor(kk / Ik))),
                ak = [Math.max(Fk[0], yk[0]), Math.max(Fk[1], yk[1]), Math.max(Fk[2], yk[2])].map((kk => Math.floor(kk / Ik)));
              for (let Ik = lk[0]; Ik <= ak[0]; Ik++)
                for (let Fk = lk[1]; Fk <= ak[1]; Fk++)
                  for (let ik = lk[2]; ik <= ak[2]; ik++) {
                    var Tk;
                    Xk.set(`${Ik},${Fk},${ik}`, null !== (Tk = kk.getChunkVersion(Ik, Fk, ik)) && void 0 !== Tk ? Tk : -1)
                  }
            }
            return Xk
          }(kk, Xk);
        this.plans.getVersion() === this.storeVersion && (function(kk, Fk) {
          if (kk.size !== Fk.size) return !1;
          for (const [Ik, Xk] of kk)
            if (Fk.get(Ik) !== Xk) return !1;
          return !0
        }(Tk, this.chunkVersions) || Ik - this.lastRescanMs < 600) || (this.lastRescanMs = Ik, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Tk, this.redraw(kk, Xk))
      }
      dispose(kk) {
        this.unwatch(), ce = null, this.clearMeshes(kk), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(kk, Fk) {
        var Ik;
        (null === kk || void 0 === kk ? void 0 : kk.join()) === (null === (Ik = this.goal) || void 0 === Ik ? void 0 : Ik.join()) && Fk === this.startsBattery || (this.goal = kk, this.startsBattery = Fk, this.storeVersion = -1)
      }
      redraw(kk, Fk) {
        const Ik = Fk => Ne(kk, Fk),
          Xk = new Map,
          Tk = [],
          ik = this.plans.guideOn();
        for (const qk of Fk) {
          const kk = ik && Ve(qk, this.plans.showsStarter(qk.box.ctrl), (kk => Ik(MI(qk.box, kk)))),
            Fk = "reactor" === qk.kind ? this.plans.layoutOf(qk.box.ctrl) : null,
            yk = ik && !qk.formed ? oe(qk, Ik, this.goal) : -1;
          yk >= 0 && Tk.push([MI(qk.box, yk), Oe(qk.box, yk)]);
          const lk = mI(qk.box);
          for (let Tk = 0; Tk < lk; Tk++) {
            const lk = MI(qk.box, Tk),
              ak = Ik(lk),
              Lk = null === ak ? null : ze(qk, Tk, ak, kk, ik, Fk);
            if (null !== Lk) {
              const kk = "wrong" !== Lk && Ee(qk.box, Tk, yk),
                Fk = kk ? `${Lk}Dim` : Lk;
              let Ik = Xk.get(Fk);
              Ik || (Ik = {
                draw: {
                  ghost: Lk,
                  dim: kk
                },
                list: []
              }, Xk.set(Fk, Ik)), Ik.list.push(lk)
            }
          }
        }
        if (ik && this.startsBattery && this.goal) {
          const [kk, Fk, Tk] = this.goal, ik = [];
          for (const [Xk, yk, lk] of be) {
            const ak = [kk + Xk, Fk + yk, Tk + lk];
            "Air" === Ik(ak) && ik.push(ak)
          }
          if (ik.length > 0) {
            var yk;
            const kk = null !== (yk = Xk.get("cell")) && void 0 !== yk ? yk : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            kk.list.push(...ik), Xk.set("cell", kk)
          }
        }
        const lk = [...Xk.keys()].sort(),
          ak = [...lk.map((kk => `${kk}:${Xk.get(kk).list.join(";")}`)), `cue:${Tk.join(";")}`].join("|");
        if (ak !== this.shownKey) {
          this.shownKey = ak, this.clearMeshes(kk);
          for (const Fk of lk) {
            const {
              draw: Ik,
              list: Tk
            } = Xk.get(Fk);
            this.meshes.push(this.build(kk, Ik, Tk))
          }
          for (const [Fk, Ik] of Tk) this.cues.push(Qe(kk, Ce(Fk, Ik), Re))
        }
      }
      build(kk, Fk, Ik) {
        let {
          ghost: Xk,
          dim: Tk
        } = Fk;
        const {
          size: ik,
          colour: yk,
          alpha: lk
        } = pe[Xk], ak = Ik[0], qk = [], Lk = [];
        for (const [tk, Zk, jk] of Ik) Ke(qk, Lk, [tk - ak[0] + .5, Zk - ak[1] + .5, jk - ak[2] + .5], [ik, ik, ik]);
        return kk.createGameMesh({
          positions: qk,
          indices: Lk
        }, {
          rgb: yk,
          alpha: lk * (Tk ? .3 : 1)
        }, ak)
      }
      clearMeshes(kk) {
        for (const Fk of [...this.meshes, ...this.cues]) kk.disposeGameMesh(Fk);
        this.meshes = [], this.cues = []
      }
    }
    const Ye = [.56, .83, 1],
      Ae = [1, .3, .25];
    class ge {
      constructor(kk) {
        this.plans = kk, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(kk, Fk, Ik) {
        var Xk;
        const Tk = performance.now();
        if (Tk - this.lastCheckMs < 150) return;
        this.lastCheckMs = Tk;
        const ik = Fk => Ne(kk, Fk),
          yk = null === (Xk = kk.BFk(Fk)) || void 0 === Xk ? void 0 : Xk.name,
          lk = yk && "Reactor Frame" === GI(yk) ? kk.getTargetedBlock() : null,
          ak = lk ? [lk.gq[0], lk.gq[1], lk.gq[2]] : null,
          qk = null !== ak && "Air" === ik(ak) && ak.every(((kk, Fk) => Math.abs(kk + .5 - Ik[Fk]) <= 8)) ? Ge(ak, Ik, ik, (kk => this.inPlan(kk))) : null,
          Lk = qk ? `${qk.box.ctrl.join()}|${qk.box.rot}|${qk.fits}` : "";
        Lk !== this.shownKey && this.show(kk, Lk, qk)
      }
      dispose(kk) {
        this.clear(kk), this.shownKey = ""
      }
      inPlan(kk) {
        return this.plans.all().some((Fk => kX(Fk.box, kk) >= 0))
      }
      show(kk, Fk, Ik) {
        if (this.clear(kk), this.shownKey = Fk, !Ik) return;
        const {
          box: Xk,
          fits: Tk
        } = Ik, ik = Tk ? Ye : Ae, {
          lo: yk,
          hi: lk
        } = ua(Xk);
        this.meshes.push(Qe(kk, ba(yk, lk, .05), {
          rgb: ik,
          alpha: 1
        }));
        const ak = [],
          qk = MI(Xk, 0)[1];
        for (let Lk = 0; Lk < Xk.w * Xk.d; Lk++) {
          const [kk, , Fk] = MI(Xk, Lk);
          ak.push([
            [kk + .5, qk + .02 + .01, Fk + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Qe(kk, ak, {
          rgb: ik,
          alpha: .25
        }))
      }
      clear(kk) {
        for (const Fk of this.meshes) kk.disposeGameMesh(Fk);
        this.meshes = []
      }
    }
    const me = "buildAFactory2Game:";

    function he(kk, Fk, Ik) {
      const Xk = kk => {
          const [Ik, Xk, Tk] = kk.box.ctrl;
          return Ik === Fk[0] && Xk === Fk[1] && Tk === Fk[2]
        },
        Tk = kk.find((kk => Xk(kk) || kX(kk.box, Fk) >= 0));
      if (!Tk) return null;
      const ik = function(kk, Fk, Ik) {
        const {
          w: Xk,
          h: Tk,
          d: ik
        } = kk.box, yk = "reactor" === kk.kind ? `${me}rxTitle` : `${me}batTitle`;
        if (kk.formed) return {
          key: `${me}lookPlanFormed`,
          kindKey: yk,
          w: Xk,
          h: Tk,
          d: ik,
          count: 0
        };
        let lk = 0,
          ak = 0;
        for (let Lk = 0; Lk < mI(kk.box); Lk++) {
          const Fk = Ik(MI(kk.box, Lk)),
            Xk = null === Fk ? "ok" : iX(kk.kind, FX(kk.box, Lk), Fk);
          lk += "missing" === Xk ? 1 : 0, ak += "wrong" === Xk || "blocked" === Xk ? 1 : 0
        }
        const qk = function(kk, Fk, Ik) {
          if (Fk < 0 || null === Ik) return;
          const Xk = FX(kk.box, Fk),
            Tk = iX(kk.kind, Xk, Ik);
          return "blocked" === Tk ? `${me}lookWhy_blocked` : "wrong" === Tk ? "ctrl" === Xk ? `${me}lookWhy_ctrl` : `${me}lookWhy_reactor_${Xk}` : void 0
        }(kk, kX(kk.box, Fk), Ik([Fk[0], Fk[1], Fk[2]]));
        if (lk > 0) return {
          key: `${me}lookPlanToBuild`,
          kindKey: yk,
          w: Xk,
          h: Tk,
          d: ik,
          count: lk,
          why: qk
        };
        if (ak > 0) return {
          key: `${me}lookPlanTakeOut`,
          kindKey: yk,
          w: Xk,
          h: Tk,
          d: ik,
          count: ak,
          why: qk
        };
        return {
          key: "reactor" === kk.kind ? `${me}lookPlanNoRods` : `${me}lookPlanDone`,
          kindKey: yk,
          w: Xk,
          h: Tk,
          d: ik,
          count: 0
        }
      }(Tk, Fk, Ik);
      return "reactor" === Tk.kind && Xk(Tk) ? {
        ...ik,
        ctrl: !0
      } : ik
    }

    function re(kk, Fk) {
      return kk === Fk || null !== kk && null !== Fk && kk.key === Fk.key && kk.kindKey === Fk.kindKey && kk.w === Fk.w && kk.h === Fk.h && kk.d === Fk.d && kk.count === Fk.count && kk.why === Fk.why && kk.ctrl === Fk.ctrl
    }

    function De() {
      return performance.now()
    }
    class Me {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : De;
        this.ticket = kk, this.sent = Fk, this.backstopMs = Ik, this.now = Xk, this.queuedAt = void 0, this.queuedAt = Xk()
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
    class kw {
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
    class Fw {
      constructor(kk) {
        this.send = kk, this.value = null, this.sent = null, this.echoes = new kw, this.down = !1, this.timer = null
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
    class Iw {
      constructor() {
        this.pending = new Map
      }
      set(kk, Fk, Ik) {
        var Xk;
        const Tk = null !== (Xk = this.pending.get(kk)) && void 0 !== Xk ? Xk : {
          on: Fk,
          echoes: new kw
        };
        Tk.on = Fk, Tk.echoes.add(Ik), this.pending.set(kk, Tk)
      }
      shown(kk) {
        let Fk = kk;
        for (const [Ik, {
            on: Xk,
            echoes: Tk
          }] of this.pending) 0 !== (kk & Ik) === Xk && Tk.agreeCounts() || Tk.answered() ? this.pending.delete(Ik) : Fk = Xk ? Fk | Ik : Fk & ~Ik;
        return Fk
      }
      pendingMask() {
        let kk = 0;
        for (const Fk of this.pending.keys()) kk |= Fk;
        return kk
      }
      pendingFor(kk) {
        let Fk = null;
        for (const [Xk, {
            on: Tk,
            echoes: ik
          }] of this.pending) {
          if (void 0 !== kk && 0 !== (kk & Xk) === Tk) continue;
          const yk = ik.age();
          var Ik;
          if (null !== yk) Fk = Math.max(null !== (Ik = Fk) && void 0 !== Ik ? Ik : 0, yk)
        }
        return Fk
      }
      clear() {
        this.pending.clear()
      }
    }
    class Xw {
      constructor() {
        this.dims = null, this.echoes = new kw, this.unmet = null
      }
      shown(kk) {
        var Fk;
        return this.dims && (Tw(this.dims, kk) && this.echoes.agreeCounts() || this.echoes.answered()) && (Tw(this.dims, kk) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Fk = this.dims) && void 0 !== Fk ? Fk : kk
      }
      takeUnmet() {
        const kk = this.unmet;
        return this.unmet = null, kk
      }
      set(kk, Fk) {
        this.dims = kk, this.echoes.add(Fk)
      }
      pendingFor(kk) {
        return null === this.dims || kk && Tw(this.dims, kk) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function Tw(kk, Fk) {
      return kk[0] === Fk[0] && kk[1] === Fk[1] && kk[2] === Fk[2]
    }
    class iw {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De;
        this.now = kk, this.taps = new Map
      }
      tap(kk, Fk, Ik) {
        return !this.busy(kk) && (this.taps.set(kk, {
          at: this.now(),
          done: Fk
        }), Ik(), !0)
      }
      settle(kk) {
        for (const [Fk, Ik] of [...this.taps]) Ik.done(kk) && this.taps.delete(Fk)
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

    function yw(kk) {
      return {
        send: Fk => kk.track(Fk),
        sendUrgent: (Fk, Ik) => kk.track(Fk, {
          urgent: !0,
          supersedes: Ik
        }),
        leftAt: Fk => kk.leftAt(Fk),
        holdReserve: () => kk.holdUrgentReserve(),
        answerMs: Ry
      }
    }

    function lw() {
      return performance.now()
    }

    function aw(kk) {
      const Fk = kk.baf2RxNeed.map((kk => {
        let [Fk, Ik] = kk;
        return [Fk, Ik]
      }));
      return JSON.stringify([kk.baf2RxFormed, Fk, kk.baf2RxBad, kk.baf2RxCells])
    }

    function qw(kk, Fk) {
      const Ik = 0 !== (Fk & jF),
        Xk = 0 !== (kk.baf2RxFlags & jF);
      return !Ik || Xk || "running" !== kk.baf2RxState && "idle" !== kk.baf2RxState ? !Ik && Xk && "scram" === kk.baf2RxState && kk.baf2RxFuel > 0 ? "idle" : kk.baf2RxState : "scram"
    }

    function Lw(kk) {
      return JSON.stringify([kk.baf2BatFormed, kk.baf2BatNeed, kk.baf2BatBad])
    }

    function tw(kk) {
      return kk.join(",")
    }
    class Zw {
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
    class jw {
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
    class ew {
      constructor(kk, Fk) {
        this.link = kk, this.now = Fk, this.hold = new Xw, this.picked = null, this.notTaken = null
      }
      shown(kk) {
        const Fk = this.hold.shown(kk);
        if (this.hold.takeUnmet() && this.picked) {
          var Ik;
          const {
            plans: Fk,
            ctrl: Xk,
            at: Tk
          } = this.picked;
          this.picked = null, Fk.unpredict(Xk), null === (Ik = this.notTaken) || void 0 === Ik || Ik.call(this, kk, Tk)
        }
        return Fk
      }
      pendingFor(kk) {
        return this.hold.pendingFor(kk)
      }
      rZ(kk, Fk, Ik) {
        kk.predictSize(Fk, Ik), this.picked = {
          plans: kk,
          ctrl: Fk,
          at: this.now()
        };
        const Xk = this.link.send(ZF(Fk, "plan", ...Ik));
        this.hold.set(Ik, new Me(Xk, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class ww {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lw;
        this.plans = kk, this.readInterior = Fk, this.link = Ik, this.now = Xk, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Iw, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Zw, this.redraw = null, this.releaseReserve = null, this.size = new ew(Ik, Xk), this.oneShots = new iw(Xk), this.throttle = new Fw((kk => this.echo(this.link.send(this.command("throttle", kk)))))
      }
      set(kk) {
        !kk.baf2RxOpen && this.raw && tw(this.raw.baf2RxAt) === tw(kk.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(kk), this.GL(kk)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(kk) {
        this.size.notTaken = kk
      }
      resize(kk) {
        this.raw && (this.size.rZ(this.plans, this.raw.baf2RxAt, kk), this.GL(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const kk = this.raw.baf2RxAt;
        this.plans.setStarter(kk, !this.plans.showsStarter(kk)), this.GL(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.GL(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.GL(this.raw)
      }
      send(kk) {
        if (this.raw) {
          for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
          this.link.send(this.command(kk, ...Ik))
        }
      }
      tap(kk, Fk) {
        this.raw && this.oneShots.tap(kk, function(kk, Fk) {
          if ("start" === kk) return kk => 0 === (kk.baf2RxFlags & jF);
          if ("odConfirm" === kk) return kk => 0 !== (kk.baf2RxFlags & eF);
          const Ik = aw(Fk);
          return kk => aw(kk) !== Ik
        }(kk, this.raw), Fk) && ("start" === kk && (this.startedAt = this.now()), this.GL(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(jF, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(kk, Fk) {
        if (!this.raw) return;
        const Ik = kk === jF ? this.command(Fk ? "scram" : "start") : this.command("od", Fk ? 1 : 0),
          Xk = Fk && kk === jF,
          Tk = `${tF} ${this.raw.baf2RxAt.join(" ")} `,
          ik = this.echo(Xk ? this.link.sendUrgent(Ik, (kk => {
            const Fk = kk.startsWith(Tk) ? kk.slice(Tk.length).split(" ")[0] : null;
            return "throttle" === Fk || "start" === Fk
          })) : this.link.send(Ik));
        this.flags.set(kk, Fk, ik), Xk && this.throttle.assume(0, ik), this.GL(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(kk) {
        this.throttle.drag(kk), this.raw && this.GL(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.GL(this.raw)
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
        for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
        return ZF(this.raw.baf2RxAt, kk, ...Ik)
      }
      echo(kk) {
        return new Me(kk, this.link, this.link.answerMs, this.now)
      }
      GL(kk) {
        var Fk;
        this.raw = kk;
        const Ik = this.flags.shown(kk.baf2RxFlags),
          Xk = {
            ...kk,
            baf2RxFlags: Ik,
            baf2RxTarget: this.throttle.shown(kk.baf2RxTarget),
            baf2RxState: qw(kk, Ik)
          },
          Tk = this.size.shown(Xk.baf2RxDims),
          ik = this.throttle.pendingFor(),
          yk = [this.throttle.pendingFor(kk.baf2RxTarget), this.flags.pendingFor(kk.baf2RxFlags), this.size.pendingFor(kk.baf2RxDims)].filter((kk => null !== kk)),
          lk = yk.length > 0 ? Math.max(...yk) : null,
          ak = this.oneShots.busyIds(),
          qk = Xk.baf2RxAt;
        let Lk, tk, Zk = null,
          jk = [Math.max(0, Tk[0] - 2), Math.max(0, Tk[1] - 2), Math.max(0, Tk[2] - 2)];
        if (Xk.baf2RxFormed) {
          const [kk, Fk, Ik] = Xk.baf2RxDims;
          jk = [Math.max(0, kk - 2), Math.max(0, Fk - 2), Math.max(0, Ik - 2)], Lk = Array.from(Xk.baf2RxCells, Number), tk = `${jk.join(",")}:${Xk.baf2RxCells}`
        } else {
          var ek;
          const kk = null === (ek = this.plans.planAt(qk)) || void 0 === ek ? void 0 : ek.box,
            Fk = kk ? YI(kk, "reactor", ...Tk) : BI(qk, 1, ...Tk, dI("reactor", Tk[0])),
            Ik = this.readInterior(Fk);
          Zk = Ia(jk, Ik), Lk = Ik, tk = `${jk.join(",")}:${Ik.join("")}`
        }(null === (Fk = this.looksOf) || void 0 === Fk ? void 0 : Fk.key) !== tk && (this.looksOf = {
          key: tk,
          looks: aa(jk, Lk)
        }), this.view = {
          status: Xk,
          dims: Tk,
          plan: Zk,
          inner: jk,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(qk),
          odConfirmed: this.odConfirmed || 0 !== (Xk.baf2RxFlags & KF),
          guide: this.plans.guideOn(),
          throttlePending: null !== ik,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== lk && lk >= 5e3,
          busy: ak,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== lk || ak.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.GL(this.raw)
        }), 250))
      }
    }
    class Hw {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lw;
        this.plans = kk, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Zw, this.redraw = null, this.size = new ew(Fk, Ik), this.oneShots = new iw(Ik)
      }
      set(kk) {
        !kk.baf2BatOpen && this.view && tw(this.view.status.baf2BatAt) === tw(kk.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(kk), this.GL(kk)
      }
      tap(kk, Fk) {
        if (!this.view) return;
        const Ik = Lw(this.view.status);
        this.oneShots.tap(kk, (kk => Lw(kk) !== Ik), Fk) && this.GL(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(kk) {
        this.size.notTaken = kk
      }
      resize(kk) {
        this.view && (this.size.rZ(this.plans, this.view.status.baf2BatAt, kk), this.GL(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.GL(this.view.status)
      }
      subscribe(kk) {
        return this.listeners.subscribe(kk)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      GL(kk) {
        const Fk = this.size.shown(kk.baf2BatDims),
          Ik = this.oneShots.busyIds();
        this.view = {
          status: kk,
          dims: Fk,
          St: sa(Fk, kk.baf2BatDims) ? kk.baf2BatCapacity : ta(...Fk),
          guide: this.plans.guideOn(),
          busy: Ik
        }, this.listeners.notify(), Ik.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.GL(this.view.status)
        }), 250))
      }
    }
    const Jw = "buildAFactory2Game:";

    function xw() {
      var kk;
      const Fk = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!Fk) return null;
      const Ik = Fk.querySelector(".ExitButton");
      return function(kk, Fk) {
        const Ik = Fk ? Fk.left - 8 : kk.right;
        return {
          left: kk.left,
          top: kk.top,
          width: Math.max(0, Ik - kk.left),
          height: kk.height
        }
      }(Fk.getBoundingClientRect(), null !== (kk = null === Ik || void 0 === Ik ? void 0 : Ik.getBoundingClientRect()) && void 0 !== kk ? kk : null)
    }
    const Pw = (0, Xk.memo)((function(kk) {
      let {
        store: Fk
      } = kk;
      const {
        t: Ik
      } = (0, vT.y)(), [Tk, ik] = (0, Xk.useState)((() => Fk.get())), [yk, lk] = (0, Xk.useState)((() => performance.now()));
      (0, Xk.useEffect)((() => (ik(Fk.get()), Fk.subscribe((() => {
        ik(Fk.get()), lk(performance.now())
      })))), [Fk]);
      const {
        alarm: ak,
        boomAt: qk
      } = Tk, Lk = null !== ak && null !== ak.secs, [tk, Zk] = (0, Xk.useState)(null);
      (0, Xk.useEffect)((() => {
        if (!Lk) return;
        Zk(xw());
        const kk = setInterval((() => {
          lk(performance.now()), Zk(xw())
        }), 250);
        return () => {
          clearInterval(kk)
        }
      }), [Lk]);
      const [jk, ek] = (0, Xk.useState)(!1);
      return (0, Xk.useEffect)((() => {
        if (qk === -1 / 0) return;
        ek(!0);
        const kk = setTimeout((() => {
          ek(!1)
        }), 1300);
        return () => {
          clearTimeout(kk)
        }
      }), [qk]), (0, Si.jsxs)(Si.Fragment, {
        children: [null !== ak && (0, Si.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: Ik(ak.hot ? `${Jw}rxAlarmSiren` : `${Jw}rxAlarmDamaged`, {
            amount: String(ak.damage)
          })
        }), null !== ak && null !== ak.secs && (0, Si.jsx)("div", {
          className: tk ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== tk && void 0 !== tk ? tk : void 0,
          "aria-live": "assertive",
          children: Ik(`${Jw}rxAlarmCountdown`, {
            amount: String((wk = ak.secs, Hk = yk - ak.receivedAt, Math.max(1, Math.ceil(wk - Hk / 1e3))))
          })
        }), jk && (0, Si.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var wk, Hk
    }));
    class Kw {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      bJ(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Ik = kk.baf2RxAlarmAt.join(",");
        let Xk = this.snapshot.boomAt;
        if (kk.baf2RxAlarmBoom) this.byReactor.delete(Ik), Xk = Fk;
        else if (kk.baf2RxAlarmDamage <= 0) this.byReactor.delete(Ik);
        else {
          var Tk;
          this.byReactor.set(Ik, {
            damage: kk.baf2RxAlarmDamage,
            secs: null !== (Tk = kk.baf2RxAlarmSecs) && void 0 !== Tk ? Tk : null,
            hot: !0 === kk.baf2RxAlarmHot,
            receivedAt: Fk
          })
        }
        this.GL(Xk)
      }
      retain(kk) {
        let Fk = !1;
        for (const Ik of [...this.byReactor.keys()]) kk.has(Ik) || (this.byReactor.delete(Ik), Fk = !0);
        Fk && this.GL(this.snapshot.boomAt)
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
      GL(kk) {
        let Fk = null;
        for (const Ik of this.byReactor.values())(!Fk || Ik.damage > Fk.damage) && (Fk = Ik);
        this.snapshot = {
          alarm: Fk,
          boomAt: kk
        };
        for (const Ik of this.listeners) Ik()
      }
    }
    const Qw = {
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

    function sw(kk) {
      return [kk[0], kk[1], kk[2]]
    }

    function Vw(kk) {
      return `${kk[0]},${kk[1]},${kk[2]}`
    }
    class zw {
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
      check(kk, Fk, Ik) {
        const Xk = new Set(Fk.map((kk => Vw(kk.box.ctrl))));
        for (const yk of function(kk, Fk) {
            const Ik = [],
              Xk = new Map(kk);
            kk.clear();
            for (const Tk of Fk) {
              const Fk = we(Tk.box.ctrl),
                ik = Tk.formed ? Tk.level : 0;
              kk.set(Fk, ik), ik > 0 && 0 === Xk.get(Fk) && Ik.push(Tk)
            }
            return Ik
          }(this.levels, this.plans.all())) Xk.has(Vw(yk.box.ctrl)) && this.show(kk, yk, "on", Ik);
        const Tk = this.plans.lastFormed();
        if (null === Tk || Tk.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Tk.receivedAt;
        const ik = function(kk, Fk) {
          var Ik;
          const Xk = we(kk);
          return null !== (Ik = Fk.find((kk => we(kk.box.ctrl) === Xk))) && void 0 !== Ik ? Ik : null
        }(Tk.ctrl, Fk);
        return ik && this.show(kk, ik, "formed", Ik), ik
      }
      fade(kk, Fk) {
        0 !== this.glows.length && (this.glows = this.glows.filter((Ik => {
          let {
            mesh: Xk,
            glow: Tk,
            startMs: ik,
            record: yk
          } = Ik;
          const lk = (Fk - ik) / Qw[Tk].ms;
          return lk >= 1 ? (kk.disposeGameMesh(Xk), yk && (yk.endMs = Fk), !1) : (kk.setGameMesh(Xk, {
            visibility: "formed" === Tk ? 1 - lk : Math.sin(Math.PI * lk)
          }), !0)
        })))
      }
      dispose(kk) {
        for (const {
            mesh: Ik
          }
          of this.glows) kk.disposeGameMesh(Ik);
        this.glows = [], this.levels.clear();
        const Fk = "undefined" !== typeof window ? window : null;
        (null === Fk || void 0 === Fk ? void 0 : Fk.baf2Glows) === this.devAccessor && delete Fk.baf2Glows
      }
      show(kk, Fk, Ik, Xk) {
        const {
          lo: Tk,
          hi: ik
        } = ua(Fk.box);
        let yk = null;
        this.devLog && (yk = {
          glow: Ik,
          ctrl: sw(Fk.box.ctrl),
          lo: sw(Tk),
          hi: sw(ik),
          startMs: Xk,
          endMs: null
        }, this.devLog.push(yk), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(kk, Ik, ba(Tk, ik, Qw[Ik].thick)),
          glow: Ik,
          startMs: Xk,
          record: yk
        })
      }
      build(kk, Fk, Ik) {
        const Xk = Qe(kk, Ik, {
          rgb: Qw[Fk].colour,
          alpha: 1
        });
        return kk.setGameMesh(Xk, {
          visibility: 0
        }), Xk
      }
    }
    const Sw = 1 / .6,
      ow = {
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
        blendMode: Ul.d.Standard,
        soft: !0
      },
      vw = {
        ...ow,
        size: [.25, .4],
        count: 2
      };

    function Ew(kk) {
      return {
        colours: [kk, kk],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Ul.d.Add,
        soft: !1
      }
    }
    const Ow = Ew([150, 225, 255]),
      nw = Ew([185, 145, 255]),
      Gw = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function pw(kk) {
      const Fk = bF[kk];
      return null === Fk.fuelSlot || iI(Fk) ? Gw.includes(kk) ? nw : Ow : ow
    }
    const uw = {
        kind: "smokePuff"
      },
      bw = [.2, .025, .2];

    function Rw(kk, Fk) {
      const [
        [Ik, Xk, Tk],
        [ik, yk, lk]
      ] = kk.colours;
      return {
        texture: kk.soft ? uw : "square_particle",
        St: Fk,
        minLifeTime: kk.life[0] / Sw,
        maxLifeTime: kk.life[1] / Sw,
        minEmitPower: kk.power[0] * Sw,
        maxEmitPower: kk.power[1] * Sw,
        minSize: kk.size[0],
        maxSize: kk.size[1],
        emitRate: 0,
        gravity: [0, kk.lift * Sw * Sw, 0],
        dir1: [-kk.spread, 1, -kk.spread],
        dir2: [kk.spread, 1, kk.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [Ik, Xk, Tk, kk.alpha],
          maxColor: [ik, yk, lk, kk.alpha]
        }, {
          timeFraction: 1,
          minColor: [Ik, Xk, Tk, 0],
          maxColor: [ik, yk, lk, 0]
        }],
        blendMode: kk.blendMode
      }
    }
    class Uw {
      constructor(kk) {
        this.fixed = kk, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(kk, Fk, Ik) {
        var Xk;
        if (Ik === this.lastFrame) return !1;
        this.lastFrame = Ik;
        const Tk = this.at;
        Tk[0] = Fk[0] + .5, Tk[1] = Fk[1] + 1.025, Tk[2] = Fk[2] + .5;
        const ik = null !== (Xk = this.fixed) && void 0 !== Xk ? Xk : lk() ? vw : ow;
        let yk = this.particles.get(ik);
        return yk || (yk = kk.createParticles(function(kk) {
          return Rw(kk, Math.ceil(12 * kk.count * kk.life[1]) + kk.count)
        }(ik), {
          pos: Tk,
          half: bw
        }), this.particles.set(ik, yk)), yk.moveTo(Tk), yk.emit(ik.count), !0
      }
      dispose() {
        for (const kk of this.particles.values()) kk.stop();
        this.particles.clear()
      }
    }
    class Cw {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(kk) {
        this.indexed = !0;
        for (const Fk of EF) {
          const Ik = pw(Fk);
          for (let Xk = 1; Xk <= 4; Xk++) {
            const Tk = kk.blockNameToBlockId(`${Fk}|meta|rot${Xk}|Running`, !0);
            if (null === Tk) continue;
            let ik = this.pufferIndexByStyle.get(Ik);
            void 0 === ik && (ik = this.pufferList.push(new Uw(Ik === ow ? null : Ik)) - 1, this.pufferIndexByStyle.set(Ik, ik)), this.pufferIndexById[Tk] = ik + 1
          }
        }
      }
      onAfterRender(kk, Fk) {
        this.indexed || this.index(kk);
        const Ik = performance.now(),
          Xk = 0 === this.lastMs ? 0 : Math.min(Ik - this.lastMs, 250) / 1e3;
        this.lastMs = Ik, this.frame++, kk.particlesEnabled() ? (this.scan(kk, Fk), this.puff(kk, Xk)) : this.sources = []
      }
      dispose() {
        for (const kk of this.pufferList) kk.dispose();
        this.sources = [], this.found = []
      }
      scan(kk, Fk) {
        0 === this.scanRow && (this.origin = [Math.floor(Fk[0]) - 12, Math.floor(Fk[1]) - 6, Math.floor(Fk[2]) - 12]);
        const Ik = Math.min(this.scanRow + 16, 325),
          [Xk, Tk, ik] = this.origin,
          yk = this.hits;
        yk.length = 0;
        for (let lk = this.scanRow; lk < Ik; lk++) {
          const Fk = Xk + lk % 25,
            Ik = Tk + Math.floor(lk / 25);
          kk.scanBlocks(Fk, Ik, ik, Fk + 1, Ik + 1, ik + 25, this.pufferIndexById, yk)
        }
        for (let lk = 0; lk < yk.length; lk += 4) {
          const kk = yk[lk + 3];
          this.found.push({
            pos: [yk[lk], yk[lk + 1], yk[lk + 2]],
            iL: kk,
            puffer: this.pufferList[this.pufferIndexById[kk] - 1]
          })
        }
        this.scanRow = Ik, 325 === Ik && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(kk, Fk) {
        const Ik = this.sources.length;
        if (0 !== Ik) {
          this.budget = Math.min(this.budget + Math.min(Ik / 1.2, 12) * Fk, 2);
          for (let Fk = 0; Fk < Ik && this.budget >= 1; Fk++) {
            const Fk = this.sources[this.cursor % Ik];
            this.cursor = (this.cursor + 1) % Ik, kk.getBlockId(Fk.pos[0], Fk.pos[1], Fk.pos[2]) === Fk.iL && (Fk.puffer.puff(kk, Fk.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Nw = {
        ...Ew([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Ww = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function fw(kk) {
      return 0 === kk.spots.length ? 0 : Math.min(1 * kk.level, 4)
    }

    function Bw(kk) {
      return 0 === kk.glass.length ? 0 : Math.min(.75 * kk.level, 3)
    }

    function dw(kk) {
      return `${kk.ctrl.join(",")}:${kk.rot}:${kk.cu},${kk.cv}:${kk.w},${kk.h},${kk.d}`
    }

    function Yw(kk, Fk) {
      const Ik = Fk.w - 2,
        Xk = Fk.h - 2,
        Tk = Fk.d - 2,
        ik = [];
      for (let yk = 0; yk < Ik * Xk * Tk; yk++) {
        const lk = yk % Ik,
          ak = Math.floor(yk / Ik) % Tk,
          qk = Math.floor(yk / (Ik * Tk));
        if (lk > 0 && lk < Ik - 1 && ak > 0 && ak < Tk - 1 && qk > 0 && qk < Xk - 1) continue;
        const Lk = MI(Fk, XX(Fk, yk)),
          tk = Ne(kk, Lk);
        if (null !== tk && "Fuel Rod" === GI(tk))
          for (const Fk of Ww) {
            const Ik = [Lk[0] + Fk[0], Lk[1] + Fk[1], Lk[2] + Fk[2]];
            gw(kk, Ik) && ik.push(mw(Ik, Fk))
          }
      }
      return ik
    }

    function Aw(kk, Fk) {
      const {
        lo: Ik,
        hi: Xk
      } = ua(Fk), Tk = [];
      for (let ik = Ik[0]; ik < Xk[0]; ik++)
        for (let Fk = Ik[1]; Fk < Xk[1]; Fk++) {
          const yk = ik === Ik[0] || ik === Xk[0] - 1 || Fk === Ik[1] || Fk === Xk[1] - 1 ? 1 : Math.max(1, Xk[2] - 1 - Ik[2]);
          for (let lk = Ik[2]; lk < Xk[2]; lk += yk) {
            const yk = [ik, Fk, lk];
            if (!gw(kk, yk)) continue;
            const ak = ik === Ik[0] ? Ww[1] : ik === Xk[0] - 1 ? Ww[0] : lk === Ik[2] ? Ww[5] : lk === Xk[2] - 1 ? Ww[4] : Fk === Ik[1] ? Ww[3] : Ww[2];
            Tk.push(mw(yk, ak))
          }
        }
      return Tk
    }

    function gw(kk, Fk) {
      const Ik = Ne(kk, Fk);
      return null !== Ik && "Reactor Glass" === GI(Ik)
    }

    function mw(kk, Fk) {
      return [
        [kk[0] + .5 + .55 * Fk[0], kk[1] + .5 + .55 * Fk[1], kk[2] + .5 + .55 * Fk[2]],
        [0 === Fk[0] ? .4 : .02, 0 === Fk[1] ? .4 : .02, 0 === Fk[2] ? .4 : .02]
      ]
    }
    class hw {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(kk, Fk, Ik, Xk) {
        const Tk = [],
          ik = new Set;
        for (const qk of Fk) {
          var yk, lk, ak;
          const {
            box: Fk
          } = qk;
          if ("reactor" !== qk.kind || qk.level <= 0 || (Fk.ctrl[0] - Ik[0]) ** 2 + (Fk.ctrl[1] - Ik[1]) ** 2 + (Fk.ctrl[2] - Ik[2]) ** 2 > 576) continue;
          const Lk = dw(Fk);
          ik.add(Lk);
          let tk = this.spots.get(Lk);
          if ((!tk || Xk - tk.at > 3e3) && (tk = {
              at: Xk,
              spots: Yw(kk, Fk),
              glass: Aw(kk, Fk)
            }, this.spots.set(Lk, tk)), 0 === tk.spots.length && 0 === tk.glass.length) continue;
          const Zk = this.sparking.find((kk => kk.key === Lk));
          Tk.push({
            key: Lk,
            level: qk.level,
            spots: tk.spots,
            glass: tk.glass,
            budget: null !== (yk = null === Zk || void 0 === Zk ? void 0 : Zk.budget) && void 0 !== yk ? yk : 0,
            cursor: null !== (lk = null === Zk || void 0 === Zk ? void 0 : Zk.cursor) && void 0 !== lk ? lk : 0,
            glassBudget: null !== (ak = null === Zk || void 0 === Zk ? void 0 : Zk.glassBudget) && void 0 !== ak ? ak : 0
          })
        }
        for (const qk of this.spots.keys()) ik.has(qk) || this.spots.delete(qk);
        this.sparking = Tk
      }
      emit(kk, Fk, Ik) {
        var Xk;
        if (0 === this.sparking.length || !kk.particlesEnabled() || Ik === this.lastFrame) return;
        this.lastFrame = Ik;
        let Tk = 0,
          ik = 0;
        for (const ek of this.sparking) Tk += fw(ek), ik += Bw(ek);
        const yk = Tk > 8 ? 8 / Tk : 1,
          lk = ik > 6 ? 6 / ik : 1;
        let ak, qk = null,
          Lk = null;
        for (const ek of this.sparking) ek.budget = Math.min(ek.budget + fw(ek) * yk * Fk, 2), ek.budget >= 1 && (!qk || ek.budget > qk.budget) && (qk = ek), ek.glassBudget = Math.min(ek.glassBudget + Bw(ek) * lk * Fk, 2), ek.glassBudget >= 1 && (!Lk || ek.glassBudget > Lk.glassBudget) && (Lk = ek);
        if (qk) qk.budget--, ak = qk.spots[qk.cursor++ % qk.spots.length];
        else {
          if (!Lk) return;
          Lk.glassBudget--, ak = Lk.glass[Math.floor(Math.random() * Lk.glass.length)]
        }
        const [tk, Zk] = ak, jk = null !== (Xk = this.emitter) && void 0 !== Xk ? Xk : this.create(kk, tk, Zk);
        jk.moveTo(tk, Zk), jk.emit(Nw.count)
      }
      dispose() {
        var kk;
        null === (kk = this.emitter) || void 0 === kk || kk.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(kk, Fk, Ik) {
        const Xk = Math.ceil(14 * Nw.count * Nw.life[1]) + Nw.count;
        return this.emitter = kk.createParticles(Rw(Nw, Xk), {
          pos: Fk,
          half: Ik
        }), this.emitter
      }
    }
    const rw = [2, 3.2],
      Dw = 1 / 3,
      Mw = 1 / .6,
      kH = {
        texture: uw,
        St: Math.ceil(18 * rw[1]) + 4,
        minLifeTime: rw[0] / Mw,
        maxLifeTime: rw[1] / Mw,
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
        blendMode: Ul.d.Standard
      };
    class FH {
      constructor(kk) {
        this.plans = kk, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new hw, this.frame = 0, this.outline = new zw(kk)
      }
      onAfterRender(kk, Fk, Ik) {
        const Xk = performance.now(),
          Tk = 0 === this.lastMs ? 0 : Math.min(Xk - this.lastMs, 250) / 1e3;
        if (this.lastMs = Xk, this.outline.fade(kk, Xk), this.puff(kk, Tk, Ik), this.sparks.emit(kk, Tk, this.frame++), Xk - this.lastCheckMs < 150) return;
        this.lastCheckMs = Xk;
        const ik = this.plans.all().filter((kk => kk.formed && IH(kk.box.ctrl, Ik) <= 4096));
        this.plumes = ik.filter((kk => "reactor" === kk.kind && kk.level > 0)).map((kk => ({
          box: kk.box,
          level: kk.level
        }))), this.updateHums(kk, Fk, ik, Ik), this.sparks.update(kk, ik, Ik, Xk), this.chimeFormed(kk, Fk, ik, Xk)
      }
      dispose(kk) {
        var Fk;
        this.outline.dispose(kk), null === (Fk = this.steam) || void 0 === Fk || Fk.dispose(), this.steam = null, this.sparks.dispose();
        for (const Ik of this.hums.values()) Ik.stop();
        this.hums.clear()
      }
      chimeFormed(kk, Fk, Ik, Xk) {
        const Tk = this.outline.check(kk, Ik, Xk);
        Tk && kk.playSound(Fk, "exp_levelup", .6, 1, {
          rX: [Tk.box.ctrl[0] + .5, Tk.box.ctrl[1], Tk.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(kk, Fk, Ik) {
        const Xk = this.plumes;
        if (0 === Xk.length || !kk.particlesEnabled()) return void(this.plumeBudget = 0);
        const Tk = Xk.reduce(((kk, Fk) => kk + 3 * Fk.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Tk * Fk, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let ik = this.plumeCursor % (Tk / 3);
        this.plumeCursor++;
        let yk = Xk[0];
        for (const tk of Xk) {
          if (ik < tk.level) {
            yk = tk;
            break
          }
          ik -= tk.level
        }
        const {
          lo: lk,
          hi: ak
        } = ua(yk.box);
        if (function(kk, Fk, Ik) {
            const Xk = Math.max(kk[0] - Ik[0], 0, Ik[0] - Fk[0]),
              Tk = Math.max(kk[2] - Ik[2], 0, Ik[2] - Fk[2]);
            return Math.hypot(Xk, Ik[1] - Fk[1], Tk)
          }(lk, ak, Ik) < 6 && Math.random() > Dw) return;
        const qk = [(lk[0] + ak[0]) / 2, ak[1] + .05, (lk[2] + ak[2]) / 2],
          Lk = [(ak[0] - lk[0]) / 2 - .5, .05, (ak[2] - lk[2]) / 2 - .5];
        this.steam ??= kk.createParticles(kH, {
          pos: qk,
          half: Lk
        }), this.steam.moveTo(qk, Lk), this.steam.emit(1)
      }
      updateHums(kk, Fk, Ik, Xk) {
        const Tk = new Map;
        for (const yk of Ik) "reactor" === yk.kind && yk.level > 0 && IH(yk.box.ctrl, Xk) <= 576 && Tk.set(`${ik=yk.box.ctrl,`${ik[0]},${ik[1]},${ik[2]}`}:${yk.level}`, yk);
        var ik;
        for (const [yk, lk] of this.hums) Tk.has(yk) || (lk.stop(), this.hums.delete(yk));
        for (const [yk, lk] of Tk) {
          if (this.hums.has(yk)) continue;
          const {
            lo: Ik,
            hi: Xk
          } = ua(lk.box), Tk = [(Ik[0] + Xk[0]) / 2, Ik[1], (Ik[2] + Xk[2]) / 2], ik = kk.playSound(Fk, "rocketEngineLoop", .08 + .06 * lk.level, .55, {
            rX: Tk,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          ik && this.hums.set(yk, ik)
        }
      }
    }

    function IH(kk, Fk) {
      return (kk[0] - Fk[0]) ** 2 + (kk[1] - Fk[1]) ** 2 + (kk[2] - Fk[2]) ** 2
    }
    class XH {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      bJ(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Xk = [kk.baf2BombAt[0], kk.baf2BombAt[1], kk.baf2BombAt[2]],
          Tk = kk.baf2BombR;
        if (kk.baf2BombBoom) {
          const kk = Math.hypot(Fk[0] - Xk[0], Fk[1] - Xk[1], Fk[2] - Xk[2]);
          this.GL({
            fuse: null,
            blast: {
              at: Xk,
              r: Tk,
              receivedAt: Ik,
              distance: kk,
              flash: kk <= 3 * Tk
            }
          })
        } else this.GL({
          ...this.snapshot,
          fuse: kk.baf2BombMs > 0 ? {
            at: Xk,
            r: Tk,
            endsAt: Ik + kk.baf2BombMs
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
      GL(kk) {
        this.snapshot = kk;
        for (const Fk of this.listeners) Fk()
      }
    }
    const TH = (0, Xk.memo)((function(kk) {
      var Fk;
      let {
        store: Ik
      } = kk;
      const {
        t: Tk
      } = (0, vT.y)(), [ik, yk] = (0, Xk.useState)((() => Ik.get())), [lk, ak] = (0, Xk.useState)((() => performance.now()));
      (0, Xk.useEffect)((() => (yk(Ik.get()), Ik.subscribe((() => {
        yk(Ik.get()), ak(performance.now())
      })))), [Ik]);
      const {
        fuse: qk,
        blast: Lk
      } = ik;
      (0, Xk.useEffect)((() => {
        if (!qk) return;
        const kk = setInterval((() => {
          ak(performance.now())
        }), 250);
        return () => {
          clearInterval(kk)
        }
      }), [qk]);
      const [tk, Zk] = (0, Xk.useState)(!1);
      (0, Xk.useEffect)((() => {
        if (null === Lk || void 0 === Lk || !Lk.flash) return;
        Zk(!0);
        const kk = setTimeout((() => {
          Zk(!1)
        }), 2500);
        return () => {
          clearTimeout(kk)
        }
      }), [Lk]);
      const jk = qk ? function(kk, Fk) {
        return kk.endsAt <= Fk ? 0 : Math.ceil((kk.endsAt - Fk) / 1e3)
      }(qk, lk) : 0;
      return (0, Si.jsxs)(Si.Fragment, {
        children: [jk > 0 && (0, Si.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Tk("buildAFactory2Game:bombCountdown", {
            amount: String(jk),
            radius: String(null !== (Fk = null === qk || void 0 === qk ? void 0 : qk.r) && void 0 !== Fk ? Fk : 0)
          })
        }), tk && (0, Si.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function iH(kk) {
      const Fk = Math.min(4, Math.max(1, kk / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * kk / 4)),
        capSpread: Math.min(5 * kk / 8, 24 * Fk),
        capThick: 6 * Fk,
        stemHalfWidth: 3 * Fk,
        puffScale: Fk
      }
    }
    class yH {
      constructor() {
        this.eq = !1
      }
      hold(kk) {
        kk.getCameraFar() < 1e3 && (kk.setCameraFar(1e3), this.eq = !0)
      }
      release(kk) {
        this.eq && (this.eq = !1, kk.setCameraFar(null))
      }
    }
    const lH = 1 / .6,
      aH = [.2, .1, .2],
      qH = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      LH = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Ul.d.Standard,
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
      tH = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Ul.d.Standard,
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
      ZH = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Ul.d.Standard,
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
      jH = {
        texture: uw,
        St: Math.ceil(120) + 4,
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
        blendMode: Ul.d.Add
      };
    class eH {
      constructor(kk) {
        this.store = kk, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new yH, this.timers = []
      }
      onAfterRender(kk, Fk) {
        const Ik = performance.now(),
          Xk = 0 === this.lastMs ? 0 : Math.min(Ik - this.lastMs, 250) / 1e3;
        this.lastMs = Ik;
        const {
          fuse: Tk,
          blast: ik
        } = this.store.get();
        null !== ik && ik !== this.shownBlast && (this.shownBlast = ik, this.startBlast(kk, Fk, ik, Ik));
        const yk = kk.particlesEnabled();
        null !== Tk && Tk.endsAt > Ik && yk ? this.emitBeacon(kk, Tk, Xk, Ik) : this.beaconBudget = 0, null !== this.cloud && (Ik - this.cloud.startMs > 33e3 ? this.disposeCloud(kk) : (this.far.hold(kk), yk && this.emitCloud(kk, Xk, Ik)))
      }
      dispose(kk) {
        var Fk;
        null === (Fk = this.beacon) || void 0 === Fk || Fk.dispose(), this.beacon = null, this.disposeCloud(kk);
        for (const Ik of this.timers) clearTimeout(Ik);
        this.timers.length = 0
      }
      emitBeacon(kk, Fk, Ik, Xk) {
        const Tk = Fk.endsAt - Xk < 5e3 ? 350 : 1e3,
          ik = .5 + .5 * Math.sin(2 * Math.PI * Xk / Tk);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * ik * Ik, 4), this.beaconBudget < 1) return;
        const yk = Math.floor(this.beaconBudget);
        this.beaconBudget -= yk;
        const [lk, ak, qk] = Fk.at, Lk = [lk + .5, ak + 1.1, qk + .5];
        this.beacon ??= kk.createParticles(jH, {
          pos: Lk,
          half: aH
        }), this.beacon.moveTo(Lk), this.beacon.emit(yk)
      }
      startBlast(kk, Fk, Ik, Xk) {
        var Tk;
        null === (Tk = this.beacon) || void 0 === Tk || Tk.dispose(), this.beacon = null, this.disposeCloud(kk);
        const ik = (0, bl.isMobile)() ? .5 : 1;
        this.streams = [LH, tH, ZH].map((kk => {
          const Fk = Math.round(kk.count * ik);
          return {
            spec: kk,
            particles: null,
            rate: Fk / ((kk.toMs - kk.fromMs) / 1e3),
            budget: 0,
            left: Fk
          }
        })), this.cloud = {
          blast: Ik,
          startMs: Xk
        };
        const yk = Math.max(.25, 1 - Ik.distance / (6 * Ik.r)),
          lk = Ik.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [Ik, Xk, Tk] of qH) HH(kk, Fk, Ik, yk * Xk, Tk)
        }), lk))
      }
      emitCloud(kk, Fk, Ik) {
        const {
          blast: Xk,
          startMs: Tk
        } = this.cloud, ik = Ik - Tk, [yk, lk, ak] = Xk.at, qk = iH(Xk.r);
        for (const Lk of this.streams) {
          const {
            spec: Ik
          } = Lk;
          if (Lk.left <= 0 || ik < Ik.fromMs) continue;
          Lk.budget += Lk.rate * Fk;
          const Tk = Math.min(Math.floor(Lk.budget), Lk.left);
          if (Tk < 1) continue;
          Lk.budget -= Tk, Lk.left -= Tk;
          const tk = Lk.particles ??= this.createStream(kk, Ik, Xk);
          if (Ik === LH) {
            const kk = qk.stemHalfWidth;
            tk.moveTo([yk, lk + 1, ak], [kk, 1, kk])
          } else if (Ik === tH) {
            const kk = qk.capSpread * Math.min(1, (ik - Ik.fromMs) / 3e3),
              Fk = Math.sqrt(Math.random()),
              Xk = 2 * Math.random() * Math.PI,
              Tk = Math.cos(Xk) * Fk,
              Lk = Math.sin(Xk) * Fk,
              Zk = yk + Tk * kk,
              jk = ak + Lk * kk,
              ek = qk.capThick,
              wk = lk + qk.capHeight + ek * (1 - Fk * Fk) * 2;
            tk.setDirections([.7 * Tk, .05, .7 * Lk], [Tk, .2, Lk]), tk.moveTo([Zk, wk, jk], [ek, ek, ek])
          } else {
            this.ringAngle += 2.39996;
            const kk = Math.cos(this.ringAngle),
              Fk = Math.sin(this.ringAngle);
            tk.setDirections([kk, .05, Fk], [kk, .1, Fk]), tk.moveTo([yk + 2 * kk, lk + .5, ak + 2 * Fk], [0, .5, 0])
          }
          tk.emit(Tk)
        }
      }
      createStream(kk, Fk, Ik) {
        const {
          r: Xk
        } = Ik, Tk = Math.max(Fk.life[0], Xk / 25), ik = Fk === ZH ? [.9 * Tk, Tk] : Fk.life, yk = iH(Xk), lk = Fk === ZH ? 1 : yk.puffScale, ak = {
          texture: uw,
          St: Fk.count + 4,
          minLifeTime: ik[0] / lH,
          maxLifeTime: ik[1] / lH,
          minSize: Fk.size[0] * lk,
          maxSize: Fk.size[1] * lk,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, Fk.gravity * lH * lH, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: Fk.from[0],
            maxColor: Fk.from[1]
          }, {
            timeFraction: .6,
            minColor: wH(Fk.from[0], Fk.to[0]),
            maxColor: wH(Fk.from[1], Fk.to[1])
          }, {
            timeFraction: 1,
            minColor: Fk.to[0],
            maxColor: Fk.to[1]
          }],
          blendMode: Fk.blend
        };
        if (Fk === LH) {
          const kk = yk.capHeight / ((ik[0] + ik[1]) / 2);
          ak.minEmitPower = .9 * kk * lH, ak.maxEmitPower = 1.05 * kk * lH, ak.dir1 = [-.1, 1, -.1], ak.dir2 = [.1, 1, .1]
        } else Fk === tH ? (ak.minEmitPower = 1.2, ak.maxEmitPower = 2, ak.dir1 = [-1, .05, -1], ak.dir2 = [1, .2, 1]) : (ak.minEmitPower = 39.583333333333336, ak.maxEmitPower = 41.66666666666667, ak.dir1 = [1, 0, 0], ak.dir2 = [1, 0, 0]);
        return kk.createParticles(ak, {
          pos: Ik.at
        })
      }
      disposeCloud(kk) {
        for (const Ik of this.streams) {
          var Fk;
          null === (Fk = Ik.particles) || void 0 === Fk || Fk.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(kk)
      }
    }

    function wH(kk, Fk) {
      return [(kk[0] + Fk[0]) / 2, (kk[1] + Fk[1]) / 2, (kk[2] + Fk[2]) / 2, .75 * kk[3]]
    }

    function HH(kk, Fk, Ik, Xk, Tk) {
      try {
        kk.playSound(Fk, Ik, Xk, Tk)
      } catch (ik) {
        console.error(ik)
      }
    }
    const JH = {
        St: 720,
        perS: 100
      },
      xH = {
        St: 320,
        perS: 44
      };
    class PH {
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
      bJ(kk, Fk) {
        const {
          baf2FalloutMs: Ik,
          baf2FalloutAt: Xk,
          baf2FalloutR: Tk,
          baf2FalloutY: ik
        } = kk;
        Ik > 0 && Xk && void 0 !== Tk ? this.start({
          centre: Xk,
          r: Tk,
          band: ik
        }, Fk + Ik) : this.stop()
      }
      perS(kk, Fk, Ik) {
        const Xk = this.zone;
        if (!Xk) return 0;
        const Tk = this.endsAt - kk;
        return Tk <= 0 ? (this.zone = null, 0) : Xk.band && (Fk[1] < Xk.band[0] || Fk[1] > Xk.band[1]) || Math.hypot(Fk[0] - Xk.centre[0], Fk[2] - Xk.centre[2]) > Xk.r ? 0 : Ik.perS * Math.min(1, Tk / 5e3)
      }
    }
    const KH = [5, 7],
      QH = [24, 8, 24],
      sH = .5,
      VH = 1 / .6,
      zH = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class SH {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, bl.isMobile)();
        this.state = new PH, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(kk) {
          return kk ? xH : JH
        }(kk)
      }
      startFallout(kk, Fk) {
        this.state.start(kk, Fk)
      }
      stopFallout() {
        this.state.stop()
      }
      bJ(kk) {
        this.state.bJ(kk, performance.now())
      }
      onAfterRender(kk, Fk) {
        var Ik;
        const Xk = performance.now(),
          Tk = 0 === this.lastMs ? 0 : Math.min(Xk - this.lastMs, 250) / 1e3;
        this.lastMs = Xk;
        const ik = this.state.perS(Xk, Fk, this.tier);
        if (ik <= 0 || !kk.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + ik * Tk, ik / 4);
        const yk = Math.floor(this.budget);
        if (yk < 1) return;
        this.budget -= yk;
        const lk = this.at;
        lk[0] = Fk[0], lk[1] = Fk[1] + 12, lk[2] = Fk[2];
        const ak = null !== (Ik = this.systems) && void 0 !== Ik ? Ik : this.create(kk, lk),
          qk = this.amounts;
        qk[0] = 0, qk[1] = 0;
        for (let Lk = 0; Lk < yk; Lk++) qk[Math.random() < .3 ? 1 : 0]++;
        for (let Lk = 0; Lk < ak.length; Lk++) qk[Lk] > 0 && (ak[Lk].moveTo(lk, QH), ak[Lk].emit(qk[Lk]))
      }
      dispose() {
        for (const Fk of null !== (kk = this.systems) && void 0 !== kk ? kk : []) {
          var kk;
          Fk.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(kk, Fk) {
        return this.systems = zH.map((Ik => {
          let {
            rgba: [Xk, Tk, ik, yk],
            share: lk
          } = Ik;
          const ak = {
            texture: "square_particle",
            St: Math.ceil(this.tier.St * lk),
            minLifeTime: KH[0] / VH,
            maxLifeTime: KH[1] / VH,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [sH, -1, sH],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Xk, Tk, ik, 0]
            }, {
              timeFraction: .15,
              minColor: [Xk, Tk, ik, yk]
            }, {
              timeFraction: .8,
              minColor: [Xk, Tk, ik, yk]
            }, {
              timeFraction: 1,
              minColor: [Xk, Tk, ik, 0]
            }],
            blendMode: Ul.d.Standard
          };
          return kk.createParticles(ak, {
            pos: Fk,
            half: QH
          })
        })), this.systems
      }
    }
    const oH = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function vH(kk) {
      const Fk = /\|rot(\d)/.exec(kk);
      return oH[Fk ? Number(Fk[1]) : 1]
    }
    var EH = Ik(621),
      OH = Ik(38460);
    const nH = new Set(EH.n);

    function GH(kk) {
      if (-2 !== kk.count) return null;
      const Fk = dk(kk.item);
      return null !== Fk && nH.has(Fk) ? Fk : null
    }

    function pH(kk) {
      const {
        width: Fk,
        height: Ik
      } = (0, OH.c)(kk).hitBoxDimensions;
      return .55 / Math.max(Fk, Ik)
    }

    function uH(kk, Fk, Ik) {
      if (!Ik) return !1;
      const Xk = kk[0] + .5 - Fk[0],
        Tk = kk[1] + .5 - Fk[1],
        ik = kk[2] + .5 - Fk[2];
      return Xk * Xk + Tk * Tk + ik * ik <= 576
    }

    function bH(kk, Fk) {
      return Math.atan2(kk[0], kk[2]) + Math.PI + Fk
    }

    function RH(kk, Fk) {
      const Ik = 2 * Math.PI;
      return (kk + Ik * Fk / 1e4) % Ik
    }
    class UH {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = kk, this.now = Fk, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = kk.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(kk, Fk) {
        if (0 === this.farms.size) return;
        const Ik = this.now(),
          Xk = Number.isNaN(this.frameMs) ? 0 : Math.min(Ik - this.frameMs, 100);
        this.frameMs = Ik, Ik - this.checkedMs >= 1e3 && (this.checkedMs = Ik, this.check(kk, Fk));
        for (const Tk of this.farms.values()) Tk.shown && Tk.running && null !== Tk.model && Xk > 0 && (Tk.spin = RH(Tk.spin, Xk), Tk.model.setPose(Tk.feet, bH(Tk.front, Tk.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const kk of this.farms.values()) this.drop(kk);
        this.farms.clear()
      }
      sync() {
        const kk = new Set;
        for (const Fk of this.labels.list()) {
          const Ik = GH(Fk);
          if (null === Ik) continue;
          kk.add(Fk.key);
          const Xk = this.farms.get(Fk.key);
          if ((null === Xk || void 0 === Xk ? void 0 : Xk.mob) === Ik) continue;
          Xk && this.drop(Xk);
          const [Tk, ik, yk] = Fk.pos;
          this.farms.set(Fk.key, {
            pos: Fk.pos,
            feet: [Tk + .5, ik + 1, yk + .5],
            mob: Ik,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [Fk, Ik] of this.farms) kk.has(Fk) || (this.drop(Ik), this.farms.delete(Fk));
        this.checkedMs = -1 / 0
      }
      check(kk, Fk) {
        for (const Ik of this.farms.values()) {
          const [Xk, Tk, ik] = Ik.pos, yk = Ne(kk, Ik.pos);
          null !== yk && GI(yk) === Rk && uH(Ik.pos, Fk, "Air" === Ne(kk, [Xk, Tk + 1, ik])) ? (Ik.running = yk.endsWith("|Running"), Ik.front = vH(yk), null === Ik.model && (Ik.model = kk.createMobModel(Ik.mob, pH(Ik.mob)), null === Ik.model) || (Ik.model.setPose(Ik.feet, bH(Ik.front, Ik.spin)), Ik.shown || (Ik.model.setVisible(!0), Ik.shown = !0))) : (Ik.shown && null !== Ik.model && Ik.model.setVisible(!1), Ik.shown = !1)
        }
      }
      drop(kk) {
        var Fk;
        null === (Fk = kk.model) || void 0 === Fk || Fk.dispose(), kk.model = null, kk.shown = !1
      }
    }
    class CH {
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
          entry: lT(kk)
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
            entry: Ik
          } = Fk;
          return Ik.focus[0] === kk[0] && Ik.focus[1] === kk[1] + 1 && Ik.focus[2] === kk[2]
        }))) || void 0 === Fk ? void 0 : Fk.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(kk, Fk) {
        return Wa(this.entries(), kk, Fk)
      }
      lookSource() {
        return {
          handles: kk => jX(kk) >= 0 || eX(kk),
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
    const NH = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((kk => kk / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((kk => [kk, kk + 1, kk + 2, kk, kk + 2, kk + 3]))
    };

    function cH(kk, Fk, Ik, Xk, Tk, ik, yk) {
      let lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const ak = Math.cos(lk),
        qk = Math.sin(lk),
        Lk = kk.positions.length / 3,
        {
          positions: tk,
          indices: Zk
        } = NH;
      for (let jk = 0; jk < tk.length; jk += 3) {
        const lk = tk[jk] * Tk,
          Lk = tk[jk + 2] * yk;
        kk.positions.push(Fk + lk * ak + Lk * qk, Ik + tk[jk + 1] * ik, Xk - lk * qk + Lk * ak)
      }
      for (const jk of Zk) kk.indices.push(Lk + jk)
    }

    function WH(kk) {
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
    class fH {
      constructor(kk, Fk) {
        this.style = kk, this.perSource = Fk, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(kk) {
        this.sources = kk, 0 === kk.length && (this.budget = 0)
      }
      Dt(kk, Fk, Ik) {
        const Xk = this.sources.length;
        if (0 !== Xk) {
          var Tk, ik;
          this.budget = Math.min(this.budget + (Tk = Xk, ik = this.perSource, Math.min(Tk * ik, Iq) * Fk), 2);
          for (let Fk = 0; Fk < Xk && this.budget >= 1; Fk++) {
            const Fk = this.sources[this.cursor % Xk];
            this.cursor = (this.cursor + 1) % Xk;
            if (!(Math.max(Math.abs(Fk.x - Ik[0]), Math.abs(Fk.y - Ik[1]), Math.abs(Fk.z - Ik[2])) > 32)) return this.puff(kk, Fk), void this.budget--
          }
        }
      }
      dispose() {
        var kk;
        null === (kk = this.particles) || void 0 === kk || kk.dispose(), this.particles = null, this.sources = []
      }
      puff(kk, Fk) {
        let {
          x: Ik,
          y: Xk,
          z: Tk,
          h: ik,
          faces: yk
        } = Fk;
        const lk = function(kk, Fk, Ik, Xk, Tk) {
            const [ik, yk, lk] = Tk[Math.floor(Math.random() * Tk.length)], ak = .04, qk = (kk, Fk, Ik) => kk > 0 ? Fk + Ik + ak : kk < 0 ? Fk - ak : Fk + .1, Lk = (kk, Fk, Ik) => kk > 0 ? Fk + Ik + ak : kk < 0 ? Fk - ak : Fk + Ik - .1, tk = [qk(ik, kk, 1), qk(yk, Fk, Xk), qk(lk, Ik, 1)], Zk = [Lk(ik, kk, 1), Lk(yk, Fk, Xk), Lk(lk, Ik, 1)];
            return {
              pos: [(tk[0] + Zk[0]) / 2, (tk[1] + Zk[1]) / 2, (tk[2] + Zk[2]) / 2],
              half: [(Zk[0] - tk[0]) / 2, (Zk[1] - tk[1]) / 2, (Zk[2] - tk[2]) / 2],
              out: [ik, yk, lk]
            }
          }(Ik, Xk, Tk, ik, yk),
          {
            style: ak
          } = this,
          qk = this.particles ??= kk.createParticles(Rw(ak, Math.ceil(ak.count * Iq * ak.life[1]) + 4), lk);
        qk.moveTo(lk.pos, lk.half);
        const [Lk, tk, Zk] = lk.out, jk = ak.spread;
        qk.setDirections([Lk - jk, .6 + tk, Zk - jk], [Lk + jk, 1 + tk, Zk + jk]), qk.emit(ak.count)
      }
    }
    const BH = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class dH {
      constructor() {
        this.green = new fH(Tq.green, kq), this.pink = new fH(Tq.pink, Fq), this.colliders = [], this.lastMs = 0
      }
      setSources(kk) {
        this.colliders = kk;
        const Fk = [],
          Ik = [];
        for (const Xk of kk) {
          const [kk, Tk, ik] = Xk.focus;
          Fk.push({
            x: kk,
            y: Tk - 1,
            z: ik,
            h: 2,
            faces: BH
          });
          for (let Fk = 0; Fk < 4; Fk++) {
            if (!Xk.live[Fk]) continue;
            const [kk, Tk, ik] = JX(Xk.focus, Fk, lX.LASER_D), [yk, , lk] = HX[Fk], ak = BH.filter((kk => kk[0] !== yk || kk[2] !== lk || 0 !== kk[1]));
            Ik.push({
              x: kk,
              y: Tk,
              z: ik,
              h: 1,
              faces: ak
            })
          }
        }
        this.green.setSources(Fk), this.pink.setSources(Ik)
      }
      onAfterRender(kk) {
        const Fk = performance.now(),
          Ik = 0 === this.lastMs ? 0 : Math.min(Fk - this.lastMs, 250) / 1e3;
        if (this.lastMs = Fk, 0 === this.colliders.length || !kk.particlesEnabled()) return;
        const Xk = kk.getCameraPosition();
        this.green.Dt(kk, Ik, Xk), this.pink.Dt(kk, Ik, Xk)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const YH = 1.04,
      AH = WH([1, 120 / 255, 220 / 255]),
      gH = WH([1, .25, .25], .35);
    class mH {
      constructor(kk) {
        this.store = kk, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new dH
      }
      onAfterRender(kk) {
        this.store.version() !== this.builtVersion && this.rebuild(kk);
        const Fk = performance.now();
        for (const Ik of this.beams) {
          const Xk = 1 + .35 * Math.sin(Fk / 700 * Math.PI * 2 + Ik.phase);
          kk.setGameMesh(Ik.mesh, {
            scale: [Ik.alongX ? 1 : Xk, Xk, Ik.alongX ? Xk : 1]
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
            entry: Ik
          }
          of this.store.colliders()) Ik.on && Ik.live.some(Boolean) && (this.addBeams(kk, Ik), Fk.push(Ik)), Ik.blockers.length > 0 && this.addMarkers(kk, Ik);
        this.glow.setSources(Fk)
      }
      addBeams(kk, Fk) {
        const [Ik, Xk, Tk] = Fk.focus, ik = Ma - .25, yk = (.25 + Ma) / 2;
        for (let lk = 0; lk < 4; lk++) {
          if (!Fk.live[lk]) continue;
          const [ak, , qk] = HX[lk], Lk = 0 !== ak, tk = {
            positions: [],
            indices: []
          };
          cH(tk, 0, 0, 0, Lk ? ik : .2, .2, Lk ? .2 : ik);
          const Zk = [Ik + .5 + ak * yk, Xk + .5, Tk + .5 + qk * yk],
            jk = kk.createGameMesh(tk, AH, Zk);
          this.meshes.push(jk), this.beams.push({
            mesh: jk,
            alongX: Lk,
            phase: lk * Math.PI / 2
          })
        }
      }
      addMarkers(kk, Fk) {
        const Ik = Fk.blockers[0],
          Xk = {
            positions: [],
            indices: []
          };
        for (const [Tk, ik, yk] of Fk.blockers) cH(Xk, Tk - Ik[0] + .5, ik - Ik[1] + .5, yk - Ik[2] + .5, YH, YH, YH);
        this.meshes.push(kk.createGameMesh(Xk, gH, Ik))
      }
      clear(kk) {
        for (const Fk of this.meshes) kk.disposeGameMesh(Fk);
        this.meshes = [], this.beams = []
      }
    }
    const hH = [.56, .83, 1],
      rH = [1, .73, .08],
      DH = [1, .25, .25],
      MH = [.85, .85, .85],
      kJ = [.3, .45, .6];

    function FJ(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const yk = Tk / 2,
        lk = Tk + ik;
      for (const ak of [-yk, yk])
        for (const Tk of [-yk, yk]) cH(kk, Fk, Ik + ak, Xk + Tk, lk, ik, ik), cH(kk, Fk + ak, Ik, Xk + Tk, ik, lk, ik), cH(kk, Fk + ak, Ik + Tk, Xk, ik, ik, lk)
    }

    function IJ(kk) {
      return Fk => kk.isBlockInLoadedChunk(Fk[0], Fk[1], Fk[2]) && 0 === kk.getBlockId(Fk[0], Fk[1], Fk[2])
    }

    function XJ(kk) {
      return kk.map((kk => {
        let {
          free: Fk,
          blocked: Ik,
          gaps: Xk,
          supports: Tk
        } = kk;
        return `${Fk.join(";")}|${Ik.join(";")}|${Xk.join(";")}|${Tk.join(";")}`
      })).join("/")
    }

    function TJ(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const ik = Fk[0],
        yk = {
          positions: [],
          indices: []
        };
      for (const [lk, ak, qk] of Fk) FJ(yk, lk - ik[0] + .5, ak - ik[1] + .5, qk - ik[2] + .5, Xk, Tk);
      return kk.createGameMesh(yk, Ik, ik)
    }
    class iJ {
      constructor(kk) {
        this.store = kk, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(kk, Fk, Ik) {
        var Xk;
        const Tk = null === (Xk = kk.BFk(Fk)) || void 0 === Xk ? void 0 : Xk.name;
        if (Tk !== qX && Tk !== aX) return void("" !== this.shownKey && this.show(kk, "", []));
        const ik = performance.now();
        if (ik - this.lastCheckMs >= 200 && (this.lastCheckMs = ik, Tk === qX ? this.check(kk, Ik) : this.preview(kk, Ik)), this.pulses.length > 0) {
          const Fk = 1 + .12 * Math.sin(ik / 1e3 * 1.25 * Math.PI * 2),
            Ik = [Fk, Fk, Fk];
          for (const Xk of this.pulses) kk.setGameMesh(Xk, {
            scale: Ik
          })
        }
      }
      dispose(kk) {
        this.clear(kk), this.shownKey = ""
      }
      check(kk, Fk) {
        const Ik = IJ(kk),
          Xk = [];
        for (const {
            entry: ik
          }
          of this.store.colliders()) {
          ik.focus.every(((kk, Ik) => Math.abs(kk + .5 - Fk[Ik]) <= lX.GHOST_REACH)) && Xk.push(Da(ik, Ik))
        }
        const Tk = XJ(Xk);
        Tk !== this.shownKey && this.show(kk, Tk, Xk)
      }
      preview(kk, Fk) {
        const Ik = kk.getTargetedBlock(),
          Xk = Ik ? [Ik.gq[0], Ik.gq[1], Ik.gq[2]] : null,
          Tk = null !== Xk && Xk.every(((kk, Ik) => Math.abs(kk + .5 - Fk[Ik]) <= 8)),
          ik = this.store.site(),
          yk = Tk && ik ? function(kk, Fk, Ik) {
            const Xk = wX(kk);
            if (!Xk.every(Fk)) return null;
            const Tk = KX(kk, Ik);
            return {
              column: Xk,
              spots: Da({
                focus: Xk[1],
                lasers: [!1, !1, !1, !1],
                open: Tk,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, Fk),
              fits: Tk.filter(Boolean).length >= lX.MIN_SPOTS
            }
          }(Xk, IJ(kk), ik) : null,
          lk = yk ? [yk.spots] : [],
          ak = yk ? `preview ${Xk.join(",")}|${yk.fits}|${XJ(lk)}` : "";
        var qk, Lk;
        ak !== this.shownKey && this.show(kk, ak, lk, null !== (qk = null === yk || void 0 === yk ? void 0 : yk.column) && void 0 !== qk ? qk : [], null === (Lk = null === yk || void 0 === yk ? void 0 : yk.fits) || void 0 === Lk || Lk)
      }
      show(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(kk), this.shownKey = Fk, Xk.length > 0 && this.meshes.push(TJ(kk, Xk, WH(Tk ? MH : DH)));
        for (const {
            free: ik,
            blocked: yk,
            gaps: lk,
            supports: ak
          }
          of Ik) {
          for (const [Fk, Ik, Xk] of ik) {
            const Tk = {
              positions: [],
              indices: []
            };
            FJ(Tk, 0, 0, 0);
            const ik = kk.createGameMesh(Tk, WH(hH), [Fk + .5, Ik + .5, Xk + .5]);
            this.meshes.push(ik), this.pulses.push(ik)
          }
          yk.length > 0 && this.meshes.push(TJ(kk, yk, WH(rH))), lk.length > 0 && this.meshes.push(TJ(kk, lk, WH(DH), 1.06, .07)), ak.length > 0 && this.meshes.push(TJ(kk, ak, WH(kJ)))
        }
      }
      clear(kk) {
        for (const Fk of this.meshes) kk.disposeGameMesh(Fk);
        this.meshes = [], this.pulses = []
      }
    }
    class yJ {
      constructor() {
        this.stored = new Map, this.eq = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(kk) {
        if (!kk.baf2TermOpen) return !1;
        kk.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [Fk, Ik] of kk.baf2TermItems) Ik > 0 ? this.stored.set(Fk, Ik) : this.stored.delete(Fk);
        if (kk.baf2TermHeld && (this.eq = new Map(kk.baf2TermHeld)), this.pending = this.pending.filter((Fk => Fk.seq > kk.baf2TermAcked)), this.silos = kk.baf2TermSilos, this.readOnly = kk.baf2TermReadOnly, this.pocket = !0 === kk.baf2TermPocket, kk.baf2TermReset) this.resort();
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
        const Ik = aF(kk, this.amount(Fk));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Fk,
          amount: Ik,
          put: !1
        }), this.recents = [Fk, ...this.recents.filter((kk => kk !== Fk))].slice(0, 6), this.changed(), XF(this.seq, kk, Fk)
      }
      put(kk, Fk) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Fk,
          amount: aF(kk, this.heldAmount(Fk)),
          put: !0
        }), this.changed(), TF(this.seq, kk, Fk)
      }
      putAll() {
        this.seq++;
        for (const kk of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: kk,
          amount: this.heldAmount(kk),
          put: !0
        });
        return this.changed(), iF(this.seq)
      }
      amount(kk) {
        var Fk;
        let Ik = null !== (Fk = this.stored.get(kk)) && void 0 !== Fk ? Fk : 0;
        for (const Xk of this.pending) Xk.item === kk && (Ik += Xk.put ? Xk.amount : -Xk.amount);
        return Math.max(0, Ik)
      }
      heldAmount(kk) {
        var Fk;
        let Ik = null !== (Fk = this.eq.get(kk)) && void 0 !== Fk ? Fk : 0;
        for (const Xk of this.pending) Xk.put && Xk.item === kk && (Ik -= Xk.amount);
        return Math.max(0, Ik)
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
    var lJ = Ik(38405);
    const aJ = {
      isBlock: kk => void 0 !== Gk.g[kk],
      harvestType: kk => {
        var Fk;
        return null === (Fk = Gk.g[kk]) || void 0 === Fk ? void 0 : Fk.harvestType
      },
      harvestLevel: kk => {
        var Fk;
        return null === (Fk = Gk.g[kk]) || void 0 === Fk ? void 0 : Fk.harvestLevel
      },
      dropsNothing: kk => {
        var Fk;
        return null === (null === (Fk = Gk.g[kk]) || void 0 === Fk ? void 0 : Fk.drops)
      },
      displayName: kk => {
        var Fk;
        return null === (Fk = Fl.j[kk]) || void 0 === Fk ? void 0 : Fk.displayName
      },
      description: kk => {
        var Fk;
        return null === (Fk = Fl.j[kk]) || void 0 === Fk ? void 0 : Fk.description
      },
      harvests: kk => {
        var Fk;
        return null === (Fk = Fl.j[kk]) || void 0 === Fk ? void 0 : Fk.harvests
      },
      level: kk => {
        var Fk;
        return null === (Fk = Fl.j[kk]) || void 0 === Fk ? void 0 : Fk.level
      }
    };

    function qJ(kk, Fk, Ik) {
      return function(kk, Fk, Ik, Xk) {
        var Tk, ik;
        const yk = Fk.split("|")[0],
          lk = kk.isBlock(Fk) ? Fk : kk.isBlock(yk) ? yk : null;
        if (null === lk || "rock" !== kk.harvestType(lk) || kk.dropsNothing(lk) && !NX.has(yk)) return null;
        const ak = Ik && "rock" === kk.harvests(Ik) ? null !== (Tk = kk.level(Ik)) && void 0 !== Tk ? Tk : 0 : null,
          qk = null !== (ik = null !== Xk && void 0 !== Xk ? Xk : kk.harvestLevel(lk)) && void 0 !== ik ? ik : 0;
        return (null !== ak ? qk <= ak : 0 === kk.harvestLevel(lk)) ? null : vX(kk, qk)
      }(aJ, kk, Fk, Ik)
    }

    function LJ(kk, Fk) {
      return function(kk, Fk, Ik) {
        if (Fk === oX[0]) return [(0, bk._d)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, bk.J.whiteUiText)];
        const Xk = Ik.split("|")[0],
          Tk = kk.isBlock(Xk) ? kk.displayName(Xk) : void 0,
          ik = "string" === typeof Tk ? Tk : Tk && "translationKey" in Tk ? `$t(${Tk.translationKey})` : Xk;
        return [(0, bk._d)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: ik
          }
        }, bk.J.whiteUiText), (0, bk._d)({
          translationKey: `item:${(0,bk.ye)(Fk)}`
        }, bk.J.yellowUiText)]
      }(aJ, kk, Fk)
    }
    const tJ = "buildAFactory2Game:";
    const ZJ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function jJ(kk) {
      return kk.endsWith(" Ore")
    }
    const eJ = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      wJ = [],
      HJ = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: eJ,
        plan: null,
        atomic: wJ
      },
      JJ = "buildAFactory2Game:",
      xJ = new Set(["Splitter", "Sorting Gate"]),
      PJ = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class KJ {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = kk, this.planAt = Fk, this.tierOf = Ik, this.iL = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.eq = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = HJ, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(kk, Fk, Ik) {
        var Xk, Tk, ik;
        let yk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const lk = null !== (Xk = null === (Tk = kk.BFk(Fk)) || void 0 === Tk ? void 0 : Tk.name) && void 0 !== Xk ? Xk : null,
          ak = kk.isPlayerCrouching(Fk),
          qk = 0 === Ik ? null : this.resolve(kk, Ik),
          Lk = null !== qk && null !== yk && xJ.has(qk.rootName) && function(kk, Fk) {
            return PJ.some((Ik => {
              let [Xk, Tk] = Ik;
              const ik = kk.getBlockId(Fk[0] + Xk, Fk[1], Fk[2] + Tk);
              return 0 !== ik && "Express Belt" === kk.getMetaInfo(ik).rootName
            }))
          }(kk, yk),
          tk = this.updatePlan(0 === Ik ? null : yk),
          Zk = this.tierOf(),
          jk = null === yk ? null : (0, lJ.g)(Ik),
          ek = null !== jk && null !== yk && (0, lJ.h)(function(kk) {
            return (Fk, Ik, Xk) => kk.getBlockId(Fk, Ik, Xk)
          }(kk), yk[0], yk[1], yk[2], jk),
          wk = this.readAfloat(kk, Ik, yk);
        if (Ik === this.iL && ek === this.missesMaker && wk === this.afloat && lk === this.eq && ak === this.crouching && Lk === this.express && Zk === this.tier && !tk && (!this.targetsLive || !this.liveMoved(yk))) return;
        this.iL = Ik, this.missesMaker = ek, this.afloat = wk, this.eq = lk, this.crouching = ak, this.express = Lk;
        const Hk = Lk && qk ? function(kk) {
          if (null === kk.info) return null;
          return kk.express ??= {
            ...kk.info,
            detail: `${JJ}lookKeepsUpExpress`,
            detailItem: null
          }, kk.express
        }(qk) : null !== qk && ek && null !== jk ? this.besideMaker(qk, Ik, jk) : null !== qk && wk ? this.hanging(qk) : null !== (ik = null === qk || void 0 === qk ? void 0 : qk.info) && void 0 !== ik ? ik : null;
        this.tier = Zk;
        const Jk = qk && Hk ? function(kk, Fk) {
          var Ik, Xk;
          const Tk = Gk.g[kk];
          if (!kk.endsWith(" Ore") || "rock" !== (null === Tk || void 0 === Tk ? void 0 : Tk.harvestType) || 0 === Tk.harvestLevel) return null;
          const ik = null !== (Ik = Tk.harvestLevel) && void 0 !== Ik ? Ik : 0,
            yk = Fk ? Fl.j[Fk] : void 0;
          if ("rock" === (null === yk || void 0 === yk ? void 0 : yk.harvests) && (null !== (Xk = yk.level) && void 0 !== Xk ? Xk : 0) >= ik) return null;
          const lk = (ak = ik, vX(aJ, ak));
          var ak;
          if (null === lk) return null;
          const qk = Xi(lk),
            Lk = /^[AEIOU]/.test(lk) ? "An" : "";
          if ("rock" === (null === yk || void 0 === yk ? void 0 : yk.harvests) && Fk) return {
            key: `${JJ}lookToolTooWeak${Lk}`,
            eq: Xi(Fk),
            needed: qk
          };
          return {
            key: lk === oX[0] ? `${JJ}lookNeedAnyPickaxe` : `${JJ}lookNeedPickaxe${Lk}`,
            eq: null,
            needed: qk
          }
        }(qk.rootName, lk) : null;
        this.targetsLive = !0 === (null === qk || void 0 === qk ? void 0 : qk.live) && null !== yk;
        let xk = null;
        this.targetsLive && qk && yk && this.live && (this.livePos[0] = yk[0], this.livePos[1] = yk[1], this.livePos[2] = yk[2], this.liveVersion = this.live.version(), xk = this.live.line(qk.rootName, yk));
        const Pk = null === Hk ? eJ : function(kk, Fk, Ik) {
            const Xk = function(kk, Fk, Ik) {
              const Xk = uI(kk);
              if (null === Xk) return null;
              const Tk = `${tJ}lookPortMode_${Xk}`,
                ik = fX(Fk);
              if (ik && Ik) return {
                mode: null,
                detail: Tk,
                next: `${tJ}lookWrenchPickUp`,
                nextState: null
              };
              const yk = bI(kk),
                lk = null === yk ? null : uI(yk);
              return null === lk ? {
                mode: null,
                detail: Tk,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Tk,
                next: ik ? `${tJ}lookWrenchNext` : `${tJ}lookPortWrench`,
                nextState: `${tJ}lookPortState_${lk}`
              }
            }(kk, Fk, Ik);
            if (null !== Xk) return Xk;
            const Tk = XT(kk, Fk, Ik);
            return null === Tk.mode && null === Tk.next ? eJ : Tk
          }(kk.blockIdToBlockName(Ik), lk, ak),
          Kk = this.plan,
          Qk = qk && Hk ? this.rowsOf(qk.rootName, Zk) : wJ,
          sk = this.snapshot;
        if (!(null === Hk ? !sk.visible : sk.visible && Hk === sk.info && (Vk = Jk, zk = sk.tool, Vk === zk || null !== Vk && null !== zk && Vk.key === zk.key && Vk.eq === zk.eq && Vk.needed === zk.needed) && function(kk, Fk) {
            return kk === Fk || null !== kk && null !== Fk && kk.key === Fk.key && JSON.stringify([kk.params, kk.keys]) === JSON.stringify([Fk.params, Fk.keys])
          }(xk, sk.live) && function(kk, Fk) {
            return kk.mode === Fk.mode && kk.detail === Fk.detail && kk.next === Fk.next && kk.nextState === Fk.nextState
          }(Pk, sk.wrench) && re(Kk, sk.plan) && Qk === sk.atomic)) {
          var Vk, zk;
          this.snapshot = null === Hk ? {
            ...sk,
            visible: !1
          } : {
            info: Hk,
            visible: !0,
            tool: Jk,
            live: xk,
            wrench: Pk,
            plan: Kk,
            atomic: Qk
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = HJ, this.iL = 0, this.eq = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(kk, Fk, Ik) {
        if (null === Ik || 0 === Fk || !lk() || !jJ(this.resolve(kk, Fk).rootName)) return !1;
        const Xk = `${Ik[0]},${Ik[1]},${Ik[2]},${Fk}`,
          Tk = performance.now();
        return Xk === this.afloatKey && Tk - this.afloatAt < QJ ? this.afloat : (this.afloatKey = Xk, this.afloatAt = Tk, function(kk, Fk) {
          for (const [Ik, Xk, Tk] of ZJ) {
            const ik = Fk(kk[0] + Ik, kk[1] + Xk, kk[2] + Tk);
            if (void 0 === ik || null !== ik && !jJ(ik)) return !1
          }
          return !0
        }(Ik, ((Fk, Ik, Xk) => function(kk, Fk, Ik, Xk) {
          if (!kk.isBlockInLoadedChunk(Fk, Ik, Xk)) return;
          const Tk = kk.getBlockId(Fk, Ik, Xk);
          return 0 === Tk ? null : kk.getMetaInfo(Tk).rootName
        }(kk, Fk, Ik, Xk))))
      }
      liveMoved(kk) {
        var Fk;
        const {
          livePos: Ik
        } = this;
        return null === kk || kk[0] !== Ik[0] || kk[1] !== Ik[1] || kk[2] !== Ik[2] || (null === (Fk = this.live) || void 0 === Fk ? void 0 : Fk.version()) !== this.liveVersion
      }
      updatePlan(kk) {
        const Fk = null === kk ? "" : kk.join(","),
          Ik = performance.now();
        if (Fk === this.planPos && Ik - this.planMs < 250) return !1;
        this.planPos = Fk, this.planMs = Ik;
        const Xk = null === kk ? null : this.planAt([kk[0], kk[1], kk[2]]),
          Tk = !re(Xk, this.plan);
        return this.plan = Xk, Tk
      }
      besideMaker(kk, Fk, Ik) {
        let {
          info: Xk
        } = kk;
        if (null === Xk) return null;
        let Tk = this.besideMakerById.get(Fk);
        if (void 0 === Tk) {
          const kk = "cryo" === Ik ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Tk = {
            ...Xk,
            detail: `${JJ}${kk}`,
            detailItem: null
          }, this.besideMakerById.set(Fk, Tk)
        }
        return Tk
      }
      hanging(kk) {
        let {
          info: Fk,
          rootName: Ik
        } = kk;
        if (null === Fk) return null;
        let Xk = this.afloatByRoot.get(Ik);
        return void 0 === Xk && (Xk = {
          ...Fk,
          detail: `${JJ}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(Ik, Xk)), Xk
      }
      rowsOf(kk, Fk) {
        if (null === Fk) return wJ;
        const Ik = `${kk}|${Fk}`;
        let Xk = this.rowsByKey.get(Ik);
        if (void 0 === Xk) {
          const Tk = function(kk, Fk) {
            var Ik;
            if (!(kk in bF)) return [];
            const Xk = null !== (Ik = RF[kk]) && void 0 !== Ik ? Ik : [],
              Tk = new Map;
            for (const yk of Bi(kk, Fk))
              if ((Xk.includes(yk) || fi(yk.output) && ci(yk.output) > rk(kk)) && ci(yk.output) <= Fk) {
                var ik;
                const kk = null !== (ik = Tk.get(yk.output)) && void 0 !== ik ? ik : [];
                kk.push(yk.input), Tk.set(yk.output, kk)
              } return Yi([...Tk], (kk => {
              let [Fk] = kk;
              return -ci(Fk)
            })).map((kk => {
              let [Fk, Ik] = kk;
              return {
                output: Fk,
                inputs: Ik
              }
            }))
          }(kk, Fk);
          Xk = Tk.length > 0 ? Tk : wJ, this.rowsByKey.set(Ik, Xk)
        }
        return Xk
      }
      resolve(kk, Fk) {
        const {
          rootId: Ik,
          rootName: Xk
        } = kk.getMetaInfo(Fk), Tk = (0, wI.i)(Xk) ? Fk : Ik;
        let ik = this.byRootId.get(Tk);
        const yk = lk();
        if (void 0 === ik || ik.nuclear !== yk) {
          var ak;
          const Ik = function(kk) {
            return UX(aJ, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk)
          }(Xk, kk.blockIdToBlockName(Fk));
          ik = {
            info: Ik,
            rootName: Xk,
            live: null !== Ik && !0 === (null === (ak = this.live) || void 0 === ak ? void 0 : ak.handles(Xk)),
            nuclear: yk
          }, this.byRootId.set(Tk, ik)
        }
        return ik
      }
    }
    const QJ = 500;
    const sJ = (0, Xk.memo)((function(kk) {
      var Fk, Ik;
      let {
        store: Tk
      } = kk;
      const {
        t: ik
      } = (0, vT.y)(), [yk, lk] = (0, Xk.useState)((() => Tk.get()));
      (0, Xk.useEffect)((() => (lk(Tk.get()), Tk.subscribe((() => {
        lk(Tk.get())
      })))), [Tk]);
      const {
        openInGameMenuName: ak,
        openEverythingMenuName: qk,
        isTouchScreen: Lk
      } = (0, KT.j)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: tk,
        tool: Zk,
        live: jk,
        wrench: ek,
        atomic: wk
      } = yk, Hk = yk.visible && null === ak && null === qk;
      if (null === tk) return null;
      const Jk = null !== ek.detail ? ik(ek.detail) : null !== (Fk = yk.plan) && void 0 !== Fk && Fk.ctrl ? ik("buildAFactory2Game:lookPlanCtrl") : null !== tk.detail ? ik(tk.detail, null === tk.detailItem ? void 0 : {
        item: ik(tk.detailItem)
      }) : null;
      return (0, Si.jsxs)("div", {
        className: VT()("Baf2LookTarget", {
          Visible: Hk
        }),
        "aria-hidden": !Hk,
        children: [(0, Si.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: ik(tk.name)
        }), null !== yk.plan && (0, Si.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ik(yk.plan.key, {
            kind: ik(yk.plan.kindKey),
            w: String(yk.plan.w),
            h: String(yk.plan.h),
            d: String(yk.plan.d),
            count: String(yk.plan.count)
          })
        }), void 0 !== (null === (Ik = yk.plan) || void 0 === Ik ? void 0 : Ik.why) && (0, Si.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: ik(yk.plan.why)
        }), null !== ek.mode && (0, Si.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ik(ek.mode)
        }), null !== Zk ? (0, Si.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: ik(Zk.key, {
            item: ik(Zk.needed),
            eq: null === Zk.eq ? "" : ik(Zk.eq)
          })
        }) : null !== jk ? (0, Si.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ik(jk.key, iq(ik, jk))
        }) : null !== Jk && (0, Si.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Jk
        }), wk.length > 0 && (0, Si.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ik("buildAFactory2Game:lookAtomicRecipes", {
            list: wk.map((kk => {
              let {
                output: Fk,
                inputs: Ik
              } = kk;
              const Xk = Ik.length > 1 ? ` ${ik("buildAFactory2Game:recipeMore",{count:String(Ik.length-1)})}` : "";
              return `${ik(Xi(Ik[0]))}${Xk} \u2192 ${ik(Xi(Fk))}`
            })).join(", ")
          })
        }), null !== ek.next && (0, Si.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ik(ek.next, {
            state: null === ek.nextState ? "" : ik(ek.nextState),
            use: ik(Lk ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var VJ = Ik(38509);
    const zJ = [],
      SJ = [
        [0, -1, 0]
      ];

    function oJ(kk) {
      const Fk = [kk];
      for (let Ik = 1; Ik <= 4; Ik++) Ik > 1 && Fk.push(`${kk}|meta|rot${Ik}`), Fk.push(`${kk}|meta|rot${Ik}|Running`);
      return Fk
    }

    function vJ(kk, Fk) {
      return [Math.floor(kk[0] / Fk), Math.floor(kk[1] / Fk), Math.floor(kk[2] / Fk)]
    }

    function EJ(kk, Fk, Ik) {
      return `${kk},${Fk},${Ik}`
    }

    function OJ(kk) {
      const Fk = kk.split("|")[0];
      if (!LI(Fk)) return zJ;
      const Ik = bF[Fk];
      if (II(Ik)) return SJ;
      const Xk = vH(kk);
      return XI(Ik) ? [
        [-Xk[0], -Xk[1], -Xk[2]]
      ] : zT(Ik) ? function(kk, Fk) {
        const Ik = kk[0] - 2 * Fk[0],
          Xk = kk[2] - 2 * Fk[2],
          Tk = [];
        for (let ik = -1; ik <= 1; ik++)
          for (let Fk = -1; Fk <= 1; Fk++) Tk.push([Ik + ik, kk[1], Xk + Fk]);
        return Tk
      }([0, 0, 0], Xk) : zJ
    }
    const nJ = [.5, .5, .5],
      GJ = [.2, .8, .3],
      pJ = [.45, 1, .5];
    class uJ {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(kk) {
        this.indexed = !0;
        for (const Fk of EF)
          for (const Ik of oJ(Fk)) {
            const Fk = kk.blockNameToBlockId(Ik, !0),
              Xk = OJ(Ik);
            null !== Fk && Xk.length > 0 && (this.offsetsList.push(Xk), this.offsetsIndexById[Fk] = this.offsetsList.length)
          }
      }
      onAfterRender(kk, Fk) {
        this.indexed || this.index(kk);
        const Ik = performance.now();
        if (Ik - this.lastCheckMs < 100) return;
        this.lastCheckMs = Ik, this.checks++;
        const Xk = xe.f.se,
          [Tk, ik, yk] = vJ(Fk, Xk);
        let lk = !1;
        const ak = [];
        let qk = 0;
        for (let Lk = Tk - 2; Lk <= Tk + 2; Lk++)
          for (let Fk = ik - 1; Fk <= ik + 1; Fk++)
            for (let Tk = yk - 2; Tk <= yk + 2; Tk++) {
              const ik = qk++,
                yk = EJ(Lk, Fk, Tk),
                tk = kk.getChunkVersion(Lk, Fk, Tk);
              let Zk = this.chunks.get(yk);
              null !== tk ? (Zk || (Zk = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(yk, Zk)), Zk.seenAt = this.checks, Zk.checkedVersion !== tk && (Zk.checkedVersion = tk, lk = !0), Zk.scannedVersion !== tk && Ik - Zk.scannedAt >= 500 && ak.push({
                slot: ik,
                entry: Zk,
                origin: [Lk * Xk, Fk * Xk, Tk * Xk]
              })) : (lk ||= void 0 !== Zk, this.chunks.delete(yk))
            }
        this.scanDue(kk, ak) && (lk = !0);
        for (const [Lk, tk] of this.chunks) tk.seenAt !== this.checks && (lk ||= tk.machines.length > 0, this.chunks.delete(Lk));
        for (const Lk of this.chunks.values())
          for (const [Fk, Ik, Xk] of Lk.cellChunks)(Math.abs(Fk - Tk) > 2 || Math.abs(Ik - ik) > 1 || Math.abs(Xk - yk) > 2) && this.watchCellChunk(kk, Fk, Ik, Xk) && (lk = !0);
        for (const [Lk, tk] of this.cellChunks) tk.seenAt !== this.checks && this.cellChunks.delete(Lk);
        lk && this.refresh(kk)
      }
      dispose(kk) {
        this.clearMeshes(kk), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(kk, Fk) {
        const Ik = Math.max(Fk.findIndex((kk => {
          let {
            slot: Fk
          } = kk;
          return Fk >= this.scanFrom
        })), 0);
        let Xk = 96;
        for (let Tk = 0; Tk < Fk.length; Tk++) {
          const {
            slot: ik,
            entry: yk,
            origin: lk
          } = Fk[(Ik + Tk) % Fk.length];
          if (Xk -= this.scan(kk, yk, lk), Xk <= 0) {
            this.scanFrom = ik + 1;
            break
          }
        }
        return Fk.length > 0
      }
      scan(kk, Fk, Ik) {
        let [Xk, Tk, ik] = Ik;
        const yk = xe.f.se,
          lk = this.hits;
        lk.length = 0;
        const ak = kk.scanBlocks(Xk, Tk, ik, Xk + yk, Tk + yk, ik + yk, this.offsetsIndexById, lk),
          qk = [];
        for (let Lk = 0; Lk < lk.length; Lk += 4) qk.push({
          pos: [lk[Lk], lk[Lk + 1], lk[Lk + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[lk[Lk + 3]] - 1]
        });
        return Fk.machines = qk, Fk.cellChunks = function(kk, Fk) {
          const Ik = new Set,
            Xk = [];
          for (const {
              pos: Tk,
              offsets: ik
            }
            of kk)
            for (const [kk, yk, lk] of ik) {
              const ik = vJ([Tk[0] + kk, Tk[1] + yk, Tk[2] + lk], Fk),
                ak = EJ(...ik);
              Ik.has(ak) || (Ik.add(ak), Xk.push(ik))
            }
          return Xk
        }(qk, yk), Fk.scannedVersion = Fk.checkedVersion, Fk.scannedAt = performance.now(), Math.max(ak, 1)
      }
      watchCellChunk(kk, Fk, Ik, Xk) {
        const Tk = EJ(Fk, Ik, Xk),
          ik = kk.getChunkVersion(Fk, Ik, Xk),
          yk = this.cellChunks.get(Tk);
        return null === ik ? this.cellChunks.delete(Tk) : (null === yk || void 0 === yk ? void 0 : yk.version) === ik ? (yk.seenAt = this.checks, !1) : (this.cellChunks.set(Tk, {
          version: ik,
          seenAt: this.checks
        }), !0)
      }
      refresh(kk) {
        const Fk = function(kk, Fk) {
            const Ik = new Set,
              Xk = [];
            for (const {
                pos: Tk,
                offsets: ik
              }
              of kk)
              for (const [kk, yk, lk] of ik) {
                const ik = Tk[0] + kk,
                  ak = Tk[1] + yk,
                  qk = Tk[2] + lk,
                  Lk = `${ik},${ak},${qk}`;
                Ik.has(Lk) || (Ik.add(Lk), Fk(ik, ak, qk) && Xk.push([ik, ak, qk]))
              }
            return Xk
          }([...this.chunks.values()].flatMap((kk => kk.machines)), ((Fk, Ik, Xk) => kk.isBlockInLoadedChunk(Fk, Ik, Xk) && 0 === kk.getBlockId(Fk, Ik, Xk))),
          Ik = Fk.join(";");
        Ik !== this.shownKey && (this.shownKey = Ik, this.clearMeshes(kk), Fk.length > 0 && (this.meshes = [this.build(kk, Fk, !1), this.build(kk, Fk, !0)]))
      }
      build(kk, Fk, Ik) {
        const Xk = Fk[0],
          Tk = [],
          ik = [];
        for (const [yk, lk, ak] of Fk)(0, VJ.c)(Tk, ik, [yk - Xk[0] + .5, lk - Xk[1] + .5, ak - Xk[2] + .5], nJ, Ik);
        return kk.createGameMesh({
          positions: Tk,
          indices: ik
        }, {
          rgb: Ik ? pJ : GJ,
          alpha: .4
        }, Xk)
      }
      clearMeshes(kk) {
        for (const Fk of this.meshes) kk.disposeGameMesh(Fk);
        this.meshes = []
      }
    }
    const bJ = 1 / .6,
      RJ = 200,
      UJ = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      CJ = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      NJ = 2 * Math.PI / 3;
    class cJ {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UJ;
        this.style = kk, this.particles = null, this.points = new Float32Array(800), this.budget = RJ, this.lastMs = 0
      }
      static blade() {
        return new cJ(CJ)
      }
      bJ(kk, Fk) {
        const Ik = Math.min(Fk.arcStruck, Fk.arcPoints.length);
        this.draw(kk, [Fk.arcFrom, ...Fk.arcPoints], Fk.arcPoints.slice(0, Ik))
      }
      onBlade(kk, Fk) {
        const [Ik, Xk, Tk] = Fk.bladeCentre, [ik, yk] = Fk.bladeFacing, lk = Ik - 1.5 * ik, ak = Tk - 1.5 * yk, qk = Math.atan2(yk, ik), Lk = [];
        for (let tk = 0; tk <= 8; tk++) {
          const kk = qk - NJ / 2 + NJ * tk / 8;
          Lk.push([lk + 2.5 * Math.cos(kk), Xk, ak + 2.5 * Math.sin(kk)])
        }
        this.draw(kk, Lk, Fk.bladeStruck)
      }
      dispose() {
        var kk;
        null === (kk = this.particles) || void 0 === kk || kk.stop(), this.particles = null
      }
      draw(kk, Fk, Ik) {
        if (!kk.particlesEnabled() || Fk.length < 2) return;
        const Xk = performance.now();
        this.budget = Math.min(RJ, this.budget + (Xk - this.lastMs) / 1e3 * RJ), this.lastMs = Xk;
        const Tk = [];
        let ik = 0,
          yk = Fk[0];
        for (const Jk of Fk.slice(1)) {
          const kk = Math.min(48, Math.round(Math.hypot(Jk[0] - yk[0], Jk[1] - yk[1], Jk[2] - yk[2]) * this.style.perBlock));
          Tk.push([yk, Jk, kk]), ik += kk, yk = Jk
        }
        const lk = Ik.length;
        ik += 10 * lk;
        const ak = ik > this.budget ? this.budget / ik : 1;
        if (0 === ik || ak * ik < 1) return;
        const qk = Fk[0],
          [Lk, tk, Zk] = qk,
          jk = this.points;
        let ek = 0;
        const wk = (kk, Fk, Ik, Xk) => {
          const Tk = 4 * ek;
          jk[Tk] = kk - Lk, jk[Tk + 1] = Fk - tk, jk[Tk + 2] = Ik - Zk, jk[Tk + 3] = Xk, ek++
        };
        Tk.forEach(((kk, Fk) => {
          let [Ik, Xk, Tk] = kk;
          const ik = Math.min(Math.floor(Tk * ak), RJ - ek),
            yk = Math.hypot(Xk[0] - Ik[0], Xk[1] - Ik[1], Xk[2] - Ik[2]),
            lk = 0 === Fk && yk > 0 ? Math.min(.5, .1 * yk) / yk : 0;
          for (let ak = 0; ak < ik; ak++) {
            const kk = lk + (ak + .5) / ik * (1 - lk);
            wk(Ik[0] + (Xk[0] - Ik[0]) * kk, Ik[1] + (Xk[1] - Ik[1]) * kk, Ik[2] + (Xk[2] - Ik[2]) * kk, .15)
          }
        }));
        const Hk = Math.floor(10 * ak);
        for (let Jk = 0; Jk < lk; Jk++) {
          const [kk, Fk, Xk] = Ik[Jk];
          for (let Ik = 0; Ik < Hk && ek < RJ; Ik++) wk(kk, Fk, Xk, 2.5)
        }
        this.budget -= ek, this.particles ??= kk.createParticles(function(kk) {
          const [Fk, Ik] = kk.colours;
          return {
            texture: "square_particle",
            St: 400,
            minLifeTime: kk.life[0] / bJ,
            maxLifeTime: kk.life[1] / bJ,
            minSize: kk.size[0],
            maxSize: kk.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [Fk[0], Fk[1], Fk[2], 1],
              maxColor: [Ik[0], Ik[1], Ik[2], 1]
            }, {
              timeFraction: 1,
              minColor: [Fk[0], Fk[1], Fk[2], 0],
              maxColor: [Ik[0], Ik[1], Ik[2], 0]
            }],
            blendMode: Ul.d.Add
          }
        }(this.style), {
          pos: qk
        }), this.particles.emitPoints(qk, jk, ek)
      }
    }
    const WJ = new Set(["Sky Spring"]);

    function fJ(kk, Fk, Ik) {
      const Xk = kk.split("|")[0];
      return "Air" !== Fk || Ik || ! function(kk) {
        const Fk = kk.split("|")[0];
        return void 0 !== lI[Fk] || WJ.has(Fk)
      }(Xk) ? null : kk
    }
    class BJ {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(kk) {
        const Fk = kk - this.lastTapAt >= 300;
        return this.lastTapAt = kk, Fk
      }
    }
    class dJ {
      constructor() {
        this.presses = new BJ, this.predicted = null
      }
      tap(kk, Fk) {
        const Ik = this.presses.isNewPress(Fk);
        return Ik && (this.predicted = {
          station: kk,
          at: Fk
        }), Ik
      }
      consumeServerOpen(kk, Fk) {
        const Ik = this.predicted;
        return !(null === Ik || Ik.station !== kk || Fk - Ik.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class YJ {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(kk, Fk) {
        return kk && (this.thrustAt = Fk), Fk - this.thrustAt < 200
      }
    }
    const AJ = [.1, .05, .1],
      gJ = {
        texture: "effect_5",
        St: Math.ceil(48),
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
        blendMode: Ul.d.OneOne
      };
    class mJ {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new YJ, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      bJ(kk, Fk) {
        for (const [Ik, Xk] of Fk.baf2JetFlames) kk.isLocalPlayer(Ik) || (Xk ? this.lit.add(Ik) : this.lit.delete(Ik))
      }
      onAfterRender(kk, Fk) {
        const Ik = performance.now(),
          Xk = this.hold.lit(this.selfThrusting(kk, Fk), Ik);
        for (const [Tk, ik] of this.flames)(Tk === Fk ? Xk : this.lit.has(Tk)) || this.setEmitting(ik, !1), Tk === Fk || kk.getPositionView(Tk) ? !ik.emitting && Ik - ik.offAt >= 1300 && (ik.particles.stop(), this.flames.delete(Tk)) : (ik.particles.dispose(), this.flames.delete(Tk), this.lit.delete(Tk));
        Xk && this.draw(kk, Fk, Fk);
        for (const Tk of this.lit) this.draw(kk, Fk, Tk)
      }
      dispose() {
        for (const kk of this.flames.values()) kk.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(kk, Fk) {
        var Ik;
        const Xk = kk.getLocalPlayerMovement();
        return !!Xk && (null !== (Tk = {
          option: null !== (Ik = kk.getClientOption(Fk, "jumpHoldThrust")) && void 0 !== Ik ? Ik : null,
          jumping: Xk.jumpHeld,
          onGround: Xk.onGround,
          alive: kk.isAlive(Fk)
        }).option && Tk.option.maxUpSpeed >= 0 && Tk.jumping && !Tk.onGround && Tk.alive);
        var Tk
      }
      draw(kk, Fk, Ik) {
        var Xk, Tk;
        const ik = this.pos;
        if (!kk.readDrawnPosition(Ik, ik)) return;
        const yk = kk.readDrawnPosition(Fk, this.camera) ? this.camera : ik;
        if (!((ik[0] - yk[0]) ** 2 + (ik[1] - yk[1]) ** 2 + (ik[2] - yk[2]) ** 2 < 1600) || !kk.particlesEnabled()) {
          const kk = this.flames.get(Ik);
          return void(kk && this.setEmitting(kk, !1))
        }
        const lk = null !== (Xk = this.flames.get(Ik)) && void 0 !== Xk ? Xk : this.create(kk, Ik, ik),
          ak = null !== (Tk = kk.getDrawnHeading(Ik)) && void 0 !== Tk ? Tk : 0,
          qk = this.at;
        qk[0] = ik[0] - .35 * Math.sin(ak), qk[1] = ik[1] + 1.05, qk[2] = ik[2] - .35 * Math.cos(ak), lk.particles.moveTo(qk), this.setEmitting(lk, !0)
      }
      setEmitting(kk, Fk) {
        kk.emitting !== Fk && (kk.emitting = Fk, Fk || (kk.offAt = performance.now()), kk.particles.setEmitRate(Fk ? 60 : 0))
      }
      create(kk, Fk, Ik) {
        const Xk = {
          particles: kk.createParticles(gJ, {
            pos: Ik,
            half: AJ
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(Fk, Xk), Xk
      }
    }

    function hJ(kk) {
      return "Reactor Frame" === TX("reactor", kk)
    }

    function rJ(kk) {
      return NI("reactor", kk) && !hJ(kk) && (kk.startsWith("Reactor Glass") || kk.startsWith("Reactor Port"))
    }
    const DJ = "baf2Goal";
    class MJ {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [uT.g.subscribe("setDirectionArrow", (kk => {
          let {
            id: Fk,
            position: Ik
          } = kk;
          Fk === DJ && (this.goal = Ik, this.checkedAt = -1 / 0)
        })), uT.g.subscribe("clearDirectionArrow", (kk => {
          let {
            id: Fk
          } = kk;
          null !== Fk && Fk !== DJ || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const kk of this.subs) uT.g.unsubscribe(kk)
      }
      sideOf(kk, Fk, Ik, Xk) {
        const Tk = this.goal;
        if (!Tk) return 0;
        Ik - this.checkedAt > 1e3 && (this.checkedAt = Ik, this.open = function(kk, Fk) {
          const [Ik, Xk, Tk] = kk.map(Math.floor);
          if (!rJ(Fk(Ik, Xk, Tk))) return null;
          for (const [ik, yk] of [
              [1, 0],
              [0, 1]
            ]) {
            const kk = Fk(Ik + ik, Xk, Tk + yk),
              lk = Fk(Ik - ik, Xk, Tk - yk);
            if (hJ(lk) && rJ(kk)) return [ik, 0, yk];
            if (hJ(kk) && rJ(lk)) return [0 - ik, 0, 0 - yk]
          }
          return null
        }(Tk, ((Fk, Ik, Xk) => kk.blockIdToBlockName(kk.getBlockId(Fk, Ik, Xk)))));
        const ik = this.open;
        if (!ik) return 0;
        const yk = Xk(Tk);
        if (Math.abs(yk.x - Fk.x) > .05 || Math.abs(yk.y - Fk.y) > .05) return 0;
        const lk = Xk([Tk[0] + ik[0], Tk[1], Tk[2] + ik[2]]).x - yk.x;
        return Math.abs(lk) < .3 ? 0 : lk > 0 ? 1 : -1
      }
    }
    class kx {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new MJ, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.ee = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.PJ = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((kk => {
          for (const Fk of kk) Fk.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Fk.target, Fk.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.ee || this.clear()
        }, window.addEventListener("resize", this.PJ)
      }
      onAfterRender(kk, Fk) {
        var Ik;
        this.api = kk, this.project = null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.projectWorldPosToScreenPos) && void 0 !== Ik ? Ik : null, this.queued || this.ee || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.ee = !0;
        for (const kk of this.moved.keys()) kk.style.transform = "";
        this.moved.clear();
        for (const kk of this.sideLabels.keys()) kk.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.PJ)
      }
      clear() {
        for (const ik of this.moved.keys()) ik.isConnected || this.moved.delete(ik);
        for (const ik of this.sideLabels.keys()) ik.isConnected || this.sideLabels.delete(ik);
        if (0 === this.arrows.length) return;
        const kk = performance.now(),
          Fk = kk - this.refreshedAt > 1e3;
        Fk && (this.refreshedAt = kk, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const Ik = this.trackerBox(),
          Xk = this.barsBox(),
          Tk = this.toastBox(Fk);
        (Ik || Xk || Tk) && Fk && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let ik = 0; ik < this.arrows.length; ik++) {
          const Fk = this.arrows[ik];
          this.labelOffsets.set(Fk, this.runLabelAside(Fk, kk));
          const yk = (Ik ? this.shiftLeftOf(Fk, Ik) : 0) || this.shiftOnScreen(Fk),
            lk = Math.min(Xk ? this.liftAbove(Fk, Xk, yk) : 0, Tk ? this.liftAbove(Fk, Tk, yk) : 0),
            ak = this.moved.get(Fk);
          if (0 !== yk || 0 !== lk) {
            const kk = 0 === lk ? `translateX(${yk}px)` : `translate(${yk}px, ${lk}px)`;
            ak !== kk && (Fk.style.transform = kk, this.moved.set(Fk, kk))
          } else void 0 !== ak && (Fk.style.transform = "", this.moved.delete(Fk))
        }
      }
      trackerBox() {
        var kk, Fk;
        const Ik = null !== (kk = this.tracker) && void 0 !== kk && kk.isConnected ? this.tracker : null !== (Fk = this.trackers[0]) && void 0 !== Fk ? Fk : null;
        if (Ik !== this.tracker && this.watch(Ik), this.boxStale && Ik) {
          var Xk, Tk, ik;
          this.boxStale = !1;
          const kk = Ik.closest(".NoRoom") ? null : Ik.getBoundingClientRect(),
            Fk = kk && kk.width > 0 ? null === (Xk = this.hud) || void 0 === Xk ? void 0 : Xk.getBoundingClientRect() : void 0,
            yk = kk && Fk ? Math.max(kk.top, Fk.top) : null !== (Tk = null === kk || void 0 === kk ? void 0 : kk.top) && void 0 !== Tk ? Tk : 0,
            lk = kk && Fk ? Math.min(kk.bottom, Fk.bottom) : null !== (ik = null === kk || void 0 === kk ? void 0 : kk.bottom) && void 0 !== ik ? ik : 0;
          this.box = kk && kk.width > 0 && lk > yk ? {
            left: kk.left,
            top: yk,
            right: kk.right,
            bottom: lk
          } : null
        }
        return Ik ? this.box : null
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
        const Ik = null !== (Fk = this.toasts[0]) && void 0 !== Fk ? Fk : null;
        if (Ik !== this.toastEl || kk && Ik) {
          this.toastEl = Ik;
          const kk = null === Ik || void 0 === Ik ? void 0 : Ik.getBoundingClientRect();
          this.toast = kk && kk.width > 0 && kk.height > 0 ? {
            left: kk.left,
            top: kk.top,
            right: kk.right,
            bottom: kk.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(kk, Fk, Ik) {
        var Xk;
        const Tk = this.anchorOf(kk);
        if (!Tk) return 0;
        const ik = Tk.x + Ik + (null !== (Xk = this.labelOffsets.get(kk)) && void 0 !== Xk ? Xk : 0),
          {
            halfWidth: yk,
            labelled: lk
          } = this.extentOf(kk),
          ak = Tk.y + this.em * (lk ? 6.2 : 3);
        return ak < Fk.top - 6 || ik + yk < Fk.left - 6 || ik - yk > Fk.right + 6 ? 0 : Fk.top - 6 - ak
      }
      watch(kk) {
        var Fk, Ik;
        this.tracker && this.sizes.unobserve(this.tracker), null === (Fk = this.hud) || void 0 === Fk || Fk.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = kk, this.hud = null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.closest(".Baf2QuestHud")) && void 0 !== Ik ? Ik : null, this.box = null, this.boxStale = !0, kk && this.sizes.observe(kk), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(kk, Fk) {
        var Ik;
        const Xk = this.anchorOf(kk);
        if (!Xk) return 0;
        const {
          y: Tk
        } = Xk, ik = Xk.x + (null !== (Ik = this.labelOffsets.get(kk)) && void 0 !== Ik ? Ik : 0), yk = this.em, {
          halfWidth: lk,
          labelled: ak
        } = this.extentOf(kk), qk = Tk - yk, Lk = ik + lk;
        return Tk + yk * (ak ? 6.2 : 3) < Fk.top || qk > Fk.bottom || Lk < Fk.left - 6 || ik - lk > Fk.right ? 0 : Math.max(Fk.left - 6 - Lk, 6 - (ik - lk))
      }
      shiftOnScreen(kk) {
        var Fk;
        const Ik = this.anchorOf(kk);
        if (!Ik) return 0;
        const {
          halfWidth: Xk
        } = this.extentOf(kk), Tk = Ik.x + (null !== (Fk = this.labelOffsets.get(kk)) && void 0 !== Fk ? Fk : 0), ik = Tk + Xk - (this.innerWidth - 6);
        return ik > 0 ? -ik : Math.max(0, 6 - (Tk - Xk))
      }
      runLabelAside(kk, Fk) {
        var Ik;
        let Xk = null;
        for (let yk = 0; yk < kk.children.length; yk++) kk.children[yk].classList.contains("DirectionArrowLabel") && (Xk = kk.children[yk]);
        if (!Xk) return 0;
        const Tk = kk.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(kk) : null,
          ik = (Tk && this.api ? this.side.sideOf(this.api, {
            x: Tk.x / this.innerWidth * 100,
            y: Tk.y / this.innerHeight * 100
          }, Fk, this.project) : 0) * this.halfWidthOf(Xk);
        return ik !== (null !== (Ik = this.sideLabels.get(Xk)) && void 0 !== Ik ? Ik : 0) && (Xk.style.transform = 0 === ik ? "" : `translateX(-50%) translateX(${ik}px)`, 0 === ik ? this.sideLabels.delete(Xk) : this.sideLabels.set(Xk, ik)), ik
      }
      extentOf(kk) {
        let Fk = this.em,
          Ik = !1;
        for (let Xk = 0; Xk < kk.children.length; Xk++) {
          const Tk = kk.children[Xk],
            ik = Tk.classList.contains("DirectionArrowLabel");
          Ik ||= ik, (ik || Tk.classList.contains("DirectionArrowDistance")) && (Fk = Math.max(Fk, this.halfWidthOf(Tk)))
        }
        return {
          halfWidth: Fk,
          labelled: Ik
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
          Ik = this.anchors.get(kk);
        if (Ik && Ik.translate === Fk && Ik.innerWidth === this.innerWidth && Ik.innerHeight === this.innerHeight) return Ik;
        const Xk = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Fk);
        if (!Xk) return null;
        const Tk = {
          translate: Fk,
          x: parseFloat(Xk[1]) / 100 * this.innerWidth,
          y: parseFloat(Xk[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(kk, Tk), Tk
      }
    }
    const Fx = "Baf2ArrowText";

    function Ix(kk, Fk) {
      const Ik = kk.rows.find((kk => kk.current));
      return uk(kk.tutorial) && null !== Ik && void 0 !== Ik && Ik.item && dT(Ik) && Ok(Ik.item).includes(Fk) ? Ik.item : null
    }
    const Xx = new class {
      constructor(kk) {
        this.select = kk, this.picks = new Map
      }
      open(kk, Fk, Ik) {
        const Xk = Ix(Fk, kk);
        null !== Xk && this.rZ(kk, Xk, Ik)
      }
      follow(kk, Fk) {
        if (lk())
          for (const [Ik, {
              item: Xk,
              had: Tk
            }] of this.picks) {
            const ik = Ix(kk, Ik);
            ik !== Xk && (null !== ik && Fk(Xk) > Tk ? this.rZ(Ik, ik, Fk) : this.picks.delete(Ik))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      rZ(kk, Fk, Ik) {
        this.picks.set(kk, {
          item: Fk,
          had: Ik(Fk)
        }), this.select(kk, Fk)
      }
    }(bT.n);

    function Tx(kk) {
      return Fk => {
        let Ik = 0;
        for (const Xk of kk.getInventoryItems())(null === Xk || void 0 === Xk ? void 0 : Xk.name) === Fk && (Ik += null === Xk.amount ? 1 : Math.max(Xk.amount, 0));
        return Ik
      }
    }

    function ix(kk, Fk, Ik, Xk) {
      kk.getClientOption(Fk, "canCraft") && "inventory" !== KT.d.get("openInGameMenuName") && (Xx.open(Ik, Xk.get(), Tx(kk)), uT.g.GL("toggleMenu", `inventory|${Ik}`))
    }
    let yx = null,
      lx = !1;

    function ax(kk) {
      const Fk = zi();
      kk === yx && Fk === lx || (yx = kk, lx = Fk, (0, bT.q)(function(kk, Fk) {
        const Ik = new Map;
        for (let Xk = kk + 1; Xk <= Tk.length; Xk++) {
          const Tk = Ai(Xk, kk, Fk);
          if (Tk)
            for (const Fk of Jk(Xk).unlocks) Ik.set(Fk, {
              ...Tk,
              stepsAway: Xk - kk
            })
        }
        return Ik
      }(kk, Fk)))
    }

    function qx() {
      return kk = () => {
        null !== yx && ax(yx)
      }, (0, si.h)(Vi, kk);
      var kk
    }

    function Lx() {
      return (0, bT.x)(Yi(Object.keys(Ek), ci)), () => {
        (0, bT.x)([])
      }
    }

    function tx(kk, Fk, Ik) {
      var Xk, Tk;
      const ik = kk.getTargetedBlock();
      if (!ik || ! function(kk, Fk, Ik) {
          if ("Chest" !== Fk) return !1;
          const Xk = kk.split("|")[0];
          if (!LI(Xk) || 0 === bF[Xk].outputSlots.length) return !1;
          const Tk = vH(kk);
          return Ik[0] === Tk[0] && Ik[1] === Tk[1] && Ik[2] === Tk[2]
        }(Ik, null === (Xk = kk.BFk(Fk)) || void 0 === Xk ? void 0 : Xk.name, ik.normal)) return !1;
      const [yk, lk, ak] = ik.gq, qk = kk.getBlockId(yk, lk, ak);
      return 0 === qk || !0 === (null === (Tk = Gk.g[qk]) || void 0 === Tk ? void 0 : Tk.canBePlacedOver)
    }
    var Zx = Ik(36772);
    const jx = new Set(HI.b);
    class ex {
      constructor(kk) {
        this.toasts = kk, this.lastAt = -1 / 0
      }
      onAltAction(kk, Fk, Ik) {
        const Xk = kk.getTargetedBlock();
        if (!Xk || function(kk) {
            const Fk = kk.split("|")[0];
            return LI(Fk) || null !== zX(Fk) || Sk(Fk) || HI.b.includes(Fk)
          }(Ik) && !jx.has(Ik.split("|")[0])) return;
        const Tk = kk.BFk(Fk);
        if (!Tk || !jx.has(Tk.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const ik = Tk.typeObj.id,
          [yk, lk, ak] = Xk.gq,
          qk = kk.getBlockId(yk, lk, ak),
          Lk = Gk.g[qk];
        (0 === qk || null !== Lk && void 0 !== Lk && Lk.qj || null !== Lk && void 0 !== Lk && Lk.canBePlacedOver) && kk.isSolidToPlayerBlockId(ik) && kk.canModifyBlockAt(yk, lk, ak) && kk.tFk(yk, lk, ak, ik) && !kk.tFk(yk, lk, ak, ik, Fk) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, bk._d)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, bk.J.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class wx {
      constructor(kk) {
        this.show = kk, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(kk, Fk, Ik) {
        var Xk;
        if (!Fk) return this.started = null, void this.gatedThisHold.clear();
        if (!kk) return void(this.started = null);
        const Tk = `${kk.x},${kk.y},${kk.z},${kk.eq}`;
        if (Tk === this.started) return;
        this.started = Tk;
        const ik = CX(kk.y) ? qJ(kk.block, kk.eq, kk.level) : null;
        if (null === ik || this.gatedThisHold.has(Tk)) return;
        this.gatedThisHold.add(Tk);
        const yk = kk.block.split("|")[0];
        Ik - (null !== (Xk = this.hintedAt.get(yk)) && void 0 !== Xk ? Xk : -1 / 0) < 5e3 || (this.hintedAt.set(yk, Ik), this.show({
          baf2ToastText: LJ(ik, kk.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Hx = Ik(41);

    function Jx(kk, Fk) {
      const Ik = [...kk.baf2CoreBankPaused];
      for (const [Tk] of kk.baf2CoreBanked) Ik.push(Tk);
      for (const yk of Tk) {
        for (const {
            item: kk
          }
          of yk.cost) Ik.push(kk);
        for (const kk of yk.newDeposits) Ik.push(kk.block);
        for (const kk of yk.unlocks) Ik.push(kk, nk(kk));
        yk.reward && Ik.push(yk.reward);
        for (const {
            item: kk
          }
          of null !== (Xk = null === (ik = yk.charge) || void 0 === ik ? void 0 : ik.items) && void 0 !== Xk ? Xk : []) {
          var Xk, ik;
          Ik.push(kk)
        }
      }
      return {
        message: kk,
        itemNames: Fk([...new Set(Ik)])
      }
    }
    const xx = "baf2MultiblockGuide";
    const Px = new Map;
    const Kx = function(kk, Fk, Ik, Tk) {
      let {
        localPlayerId: ik
      } = Tk;
      const yk = new xl,
        lk = new lj,
        qk = new ej,
        Lk = new Zj(qk),
        tk = (kk, Fk) => {
          Fk ? Lk.observe(kk) : Lk.unobserve(kk)
        },
        Zk = new tj,
        jk = new xj(tk),
        ek = kk => jk.covers(kk),
        wk = new Cj;
      let Hk;
      const Jk = new Wy((kk => {
          Hk.sendCommand(kk)
        })),
        xk = () => {
          Jk.send("baf2questbook")
        },
        Pk = kk => function(kk, Fk, Ik) {
          const Xk = {};
          for (const Tk of Ik) {
            let Ik = Px.get(Tk);
            void 0 === Ik && (Ik = kk.getItemStat(Fk, Tk, "displayName"), Px.set(Tk, Ik)), Xk[Tk] = Ik
          }
          return Xk
        }(Hk, ik, kk),
        Kk = new NT(xk),
        Qk = new hj((() => KT.d.get("loadingOverlayVisible"))),
        sk = new vL(Jk, Kk, Qk),
        Vk = new Fe,
        zk = new ex(Qk),
        vk = new wx((kk => {
          Qk.show(kk, kk.baf2ToastMs)
        })),
        Ek = new Le(tk),
        Ok = new UH(Ek),
        nk = new oy,
        pk = new yJ,
        uk = new Tl,
        Uk = new Je({
          read: () => !1 !== Hx.j.getItem(xx),
          write: kk => {
            Hx.j.setItem(xx, kk)
          }
        }),
        Ck = new de(Uk),
        Nk = new ge(Uk),
        ck = new ww(Uk, (kk => function(kk, Fk) {
          const Ik = Fa(Fk.w, Fk.h, Fk.d),
            Xk = new Uint8Array(Ik);
          for (let Tk = 0; Tk < Ik; Tk++) {
            const Ik = Ne(kk, MI(Fk, XX(Fk, Tk)));
            Xk[Tk] = null === Ik ? 0 : rl(Ik)
          }
          return Xk
        }(Hk, kk)), yw(Jk)),
        Wk = new Hw(Uk, yw(Jk)),
        fk = new jw,
        Yk = (kk, Fk) => {
          let [Ik, Xk, Tk] = kk;
          fk.answered(Fk) || Qk.show({
            baf2ToastText: [(0, bk._d)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: Ik,
                h: Xk,
                d: Tk
              }
            }, bk.J.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      ck.onSizeNotTaken(Yk), Wk.onSizeNotTaken(Yk);
      const Ak = new Kw,
        gk = new FH(Uk),
        hk = new XH,
        rk = new eH(hk),
        Dk = new SH,
        kF = new CH,
        FF = new mH(kF),
        IF = new iJ(kF),
        XF = kF.lookSource(),
        TF = new KJ({
          handles: kk => XF.handles(kk) || kk === Rk,
          line: (kk, Fk) => kk === Rk ? function(kk, Fk, Ik) {
            var Xk;
            const Tk = dk(null === (Xk = Fk.at(Ik)) || void 0 === Xk ? void 0 : Xk.item);
            return null === Tk ? {
              key: `${JJ}lookFarmEmpty`
            } : {
              key: kk.blockIdToBlockName(kk.getBlockId(Ik[0], Ik[1], Ik[2])).endsWith("|Running") ? `${JJ}lookFarmRunning` : `${JJ}lookFarmWaiting`,
              keys: {
                mob: Bk(Tk)
              }
            }
          }(Hk, Ek, Fk) : XF.line(kk, Fk),
          version: () => XF.version() + Ek.version()
        }, (kk => he(Uk.all(), kk, (kk => Ne(Hk, kk)))), (() => Kk.get().tier)),
        iF = new Cw,
        yF = new uJ,
        lF = new cJ,
        aF = cJ.blade(),
        qF = new mJ,
        LF = new Te,
        tF = new kx,
        jF = new dJ,
        eF = new BJ;
      let wF = -1 / 0,
        HF = 0,
        JF = -1 / 0,
        xF = -1 / 0;
      const PF = () => {
          Jk.send("baf2islandsclose"), xF = Date.now()
        },
        KF = [];

      function QF(kk) {
        var Fk, Ik, Xk, Tk, ik, yk, ak;
        "core" === (null === (Fk = lk.get()) || void 0 === Fk ? void 0 : Fk.kind) && "core" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && Jk.send("baf2coreclose"), "power" === (null === (Ik = lk.get()) || void 0 === Ik ? void 0 : Ik.kind) && "power" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && Jk.send("baf2powerclose"), "water" === (null === (Xk = lk.get()) || void 0 === Xk ? void 0 : Xk.kind) && "water" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && Jk.send(Mk.x), "terminal" === (null === (Tk = lk.get()) || void 0 === Tk ? void 0 : Tk.kind) && "terminal" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && Jk.send("baf2terminalclose"), "islands" === (null === (ik = lk.get()) || void 0 === ik ? void 0 : ik.kind) && "islands" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && PF();
        const qk = kF.getStatus();
        "collider" === (null === (yk = lk.get()) || void 0 === yk ? void 0 : yk.kind) && "collider" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && qk && Jk.send(Ca(qk, "close"));
        const Lk = kk => "reactor" === kk || "battery" === kk;
        if (Lk(null === (ak = lk.get()) || void 0 === ak ? void 0 : ak.kind) && !Lk(null === kk || void 0 === kk ? void 0 : kk.kind)) {
          var tk, Zk, jk;
          const kk = "reactor" === (null === (tk = lk.get()) || void 0 === tk ? void 0 : tk.kind) ? null === (Zk = ck.get()) || void 0 === Zk ? void 0 : Zk.status.baf2RxAt : null === (jk = Wk.get()) || void 0 === jk ? void 0 : jk.status.baf2BatAt;
          kk && Jk.send(ZF(kk, "close"))
        }
        "quests" === (null === kk || void 0 === kk ? void 0 : kk.kind) && xk(), lk.set(kk), null === kk && Vk.release()
      }

      function sF() {
        (0, PT.e)(), QF(null)
      }
      let VF = new Set,
        zF = !1;
      const SF = {
        onCreate: kk => {
          Hk = kk, Hk.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const Fk of EF) {
            const kk = bF[Fk].inputSlots ? ul(yk) : nl(Fk, yk, nk, Jk);
            KF.push((0, JT.f)(Fk, kk))
          }
          KF.push((0, PT.v)((0, Xk.createElement)(Xk.Fragment, null, (0, Xk.createElement)(Qj, {
            controller: jk
          }), (0, Xk.createElement)(je, {
            store: Ek
          }), (0, Xk.createElement)(sJ, {
            store: TF
          }), (0, Xk.createElement)(gj, {
            store: Kk
          }), (0, Xk.createElement)(Mj, {
            store: Qk
          }), (0, Xk.createElement)(Ie, {
            store: Vk
          }), (0, Xk.createElement)(ye, {
            store: LF
          }), (0, Xk.createElement)(Pw, {
            store: Ak
          }), (0, Xk.createElement)(TH, {
            store: hk
          })), {
            content: (0, Xk.createElement)(aj, {
              commands: Jk,
              store: lk,
              power: nk,
              water: uk,
              reactor: ck,
              battery: Wk,
              collider: kF,
              terminal: pk,
              quests: Kk,
              tutorial: sk,
              close: PT.f,
              leave: () => {
                Vk.dropHeld(), (0, PT.e)()
              },
              askIslands: () => {
                xF = -1 / 0, wF = Date.now(), HF = Jk.send(mk)
              },
              openSocial: () => {
                (0, PT.e)(), KT.d.set({
                  openEverythingMenuName: ZI.r.SOCIAL
                })
              },
              showCore: kk => {
                QF({
                  kind: "core",
                  core: kk
                }), Jk.send("baf2corereopen")
              }
            }),
            onClose: () => {
              QF(null)
            }
          })), KF.push((0, xT.x)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              QF({
                kind: "quests"
              }), (0, PT.p)()
            }
          })), KF.push(function(kk, Fk) {
            let Ik = null,
              Xk = () => {};
            const Tk = Fk => {
              var Tk;
              let {
                tutorial: ik,
                tutorialKnown: yk
              } = Fk;
              (null === (Tk = Ik) || void 0 === Tk ? void 0 : Tk.tutorial) === ik && Ik.tutorialKnown === yk || (Ik = {
                tutorial: ik,
                tutorialKnown: yk
              }, Xk = (0, xT.x)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: SL[ik],
                icon: {
                  kind: "icon",
                  name: zL[ik]
                },
                iconOnly: !0,
                disabled: !yk,
                className: "Baf2TutorialButton",
                onClick: () => {
                  kk.next()
                }
              }))
            };
            Tk(Fk.get());
            const ik = uT.g.subscribe(RT, Tk);
            return () => {
              uT.g.unsubscribe(ik), Xk()
            }
          }(sk, Kk)), zF = !1, KF.push(qx()), KF.push(Lx()), KF.push(function() {
            const kk = uT.g.subscribe(RT, MT),
              Fk = () => {
                if (DT) {
                  const kk = DT;
                  DT = null, (0, bT.u)(kk)
                }
              },
              Ik = uT.g.subscribe("toggleMenu", (kk => {
                "inventory" === (null === kk || void 0 === kk ? void 0 : kk.split("|")[0]) && Fk()
              })),
              Xk = uT.g.subscribe("appManagerUpdated|openInGameMenuName", (kk => {
                "inventory" === kk && Fk()
              }));
            return () => {
              uT.g.unsubscribe(kk), uT.g.unsubscribe(Ik), uT.g.unsubscribe(Xk)
            }
          }()), KF.push(function(kk) {
            const Fk = Tx(kk),
              Ik = uT.g.subscribe(RT, (kk => {
                Xx.follow(kk, Fk)
              }));
            return () => {
              uT.g.unsubscribe(Ik), Xx.clear()
            }
          }(Hk)), KF.push(function() {
            const kk = document.documentElement,
              Fk = (0, cj.b)(".InvenBodyRight", [], (() => {
                const Fk = document.querySelector(".InvenBodyRight");
                Fk && kk.style.setProperty("--baf2-backpack-width", `${Fk.offsetWidth}px`)
              }));
            return () => {
              Fk(), kk.style.removeProperty("--baf2-backpack-width")
            }
          }()), KF.push(function() {
            const kk = document.documentElement;
            return kk.classList.add(Fx), () => {
              kk.classList.remove(Fx)
            }
          }()), KF.push((() => {
            Lk.dispose(), qk.dispose()
          })), wk.start(Hk), KF.push((() => {
            wk.dispose(), qF.dispose(), Ok.dispose()
          }))
        },
        onClose: () => {
          (0, bT.u)([]), DT = null, rT = new Set, yx = null, (0, bT.q)(new Map), Px.clear();
          for (const kk of KF) kk();
          Kk.dispose(), TF.dispose(), Qk.dispose(), Vk.dispose(), iF.dispose(), yF.dispose(Hk), Ck.dispose(Hk), Nk.dispose(Hk), gk.dispose(Hk), rk.dispose(Hk), hk.dispose(), Dk.dispose(), Uk.dispose(), ck.dispose(), Wk.dispose(), Ak.dispose(), lF.dispose(), aF.dispose(), LF.dispose(), FF.dispose(Hk), IF.dispose(Hk), kF.dispose(), tF.dispose(), Jk.clear()
        },
        onAfterRender: (kk, Fk) => {
          var Ik, Xk, Tk;
          try {
            wk.onAfterRender(Fk)
          } catch (qk) {
            console.error("Error drawing BAF2 belt items", qk)
          }
          try {
            qF.onAfterRender(Hk, ik)
          } catch (qk) {
            console.error("Error drawing BAF2 jet flames", qk)
          }
          zF || (zF = !0, Jk.send("baf2clientready"));
          const yk = Hk.getPositionView(ik);
          jk.onAfterRender(Fk, yk, Zk), Ek.onAfterRender(Fk, yk, Zk, ek), Lk.run(Zk), iF.onAfterRender(Hk, yk), yF.onAfterRender(Hk, yk), Ok.onAfterRender(Hk, yk), Ck.onAfterRender(Hk, yk), Nk.onAfterRender(Hk, ik, yk), gk.onAfterRender(Hk, ik, yk), rk.onAfterRender(Hk, ik), Dk.onAfterRender(Hk, yk), Kk.onPlayerY(yk[1]), FF.onAfterRender(Hk), IF.onAfterRender(Hk, ik, yk);
          const ak = Hk.getTargetedBlock();
          TF.onAfterRender(Hk, ik, null !== (Ik = null === ak || void 0 === ak ? void 0 : ak.YM) && void 0 !== Ik ? Ik : 0, null !== (Xk = null === ak || void 0 === ak ? void 0 : ak.position) && void 0 !== Xk ? Xk : null), tF.onAfterRender(Hk, Fk), vk.onMining(function(kk, Fk) {
            var Ik, Xk;
            const Tk = kk.getMiningBlock();
            if (!Tk) return null;
            const ik = (0, Gk.f)(kk.getBlockId(Tk[0], Tk[1], Tk[2])),
              yk = null !== (Ik = null === (Xk = kk.BFk(Fk)) || void 0 === Xk ? void 0 : Xk.name) && void 0 !== Ik ? Ik : null,
              lk = kk.getItemStat(Fk, ik.split("|")[0], "harvestLevel");
            return {
              block: ik,
              x: Tk[0],
              y: Tk[1],
              z: Tk[2],
              eq: yk,
              level: lk
            }
          }(Hk, ik), Hk.isMining(), performance.now()), "dropMap" === (null === (Tk = lk.get()) || void 0 === Tk ? void 0 : Tk.kind) && CX(yk[1]) && sF()
        },
        onPlayerChangeBlock: (kk, Fk, Ik, Xk, Tk, yk) => {
          kk === ik && function(kk, Fk, Ik, Xk, Tk, ik, yk) {
            const lk = fJ(ik, yk, kk.isPlayerCrouching(Fk));
            if (null === lk) return;
            if (kk.lG(Ik, Xk, Tk, lk), !kk.getClientOption(Fk, "canPickUpItems")) return;
            const ak = lI[lk.split("|")[0]];
            var qk, Lk, tk;
            void 0 !== ak && (qk = kk.getInventoryItems(), Lk = ak, tk = xe.f.maxItemStackSize, kk.getInventoryFreeSlotCount(Fk) > 0 || qk.some((kk => null !== kk && kk.name === Lk && null !== kk.amount && kk.amount < tk))) && kk.playSound(Fk, (0, Zx.f)("pickUp"), .5, 1)
          }(Hk, kk, Fk, Ik, Xk, Tk, yk)
        },
        onPlayerAltAction: (kk, Fk, Ik, Xk, Tk) => {
          var yk, lk;
          if (!Hk.getClientOption(ik, "canPickUpItems")) return;
          const ak = null !== (yk = null === (lk = Hk.BFk(ik)) || void 0 === lk ? void 0 : lk.name) && void 0 !== yk ? yk : null,
            qk = function(kk, Fk) {
              const Ik = kk.split("|")[0];
              return Sk(Ik) && Fk !== aT && "Sky Pack" !== Fk ? Ik : null
            }(Tk, ak);
          if (null !== qk) return void(jF.tap(qk, performance.now()) && ix(Hk, ik, qk, Kk));
          if (!fX(ak)) return;
          const Lk = eF.isNewPress(performance.now()),
            tk = function(kk, Fk, Ik) {
              return !fX(Fk) || Ik ? null : DX(kk)
            }(Tk, ak, Hk.isPlayerCrouching(ik));
          null !== tk && Lk && Hk.lG(Fk, Ik, Xk, tk)
        },
        onPlayerAttemptAltAction: (kk, Fk, Ik, Xk, Tk) => {
          if (function(kk, Fk, Ik, Xk, Tk) {
              "Workbench" === Xk.split("|")[0] && kk.getClientOption(Ik, "canCraft") && (Xx.open("Workbench", Tk.get(), Tx(kk)), Fk.send("baf2station Workbench"))
            }(Hk, Jk, ik, Tk, Kk), tx(Hk, ik, Tk)) return "preventAction";
          zk.onAltAction(Hk, ik, Tk)
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          if ("baf2MachineStatus" === kk) {
            var Ik, Xk, Tk, qk, Lk, tk, Zk, ek, xk, sk, zk, Sk, vk, Ok, Gk, bk;
            const kk = Fk,
              ik = kk.baf2MachineTaught;
            yk.set(kk.baf2MachinePos, {
              status: kk.baf2MachineStatus,
              power: null !== (Ik = kk.baf2MachinePower) && void 0 !== Ik ? Ik : null,
              opLeftMs: null !== (Xk = kk.baf2MachineOpLeftMs) && void 0 !== Xk ? Xk : null,
              dug: kk.baf2MachineYield ? {
                item: kk.baf2MachineYield,
                name: Pk([kk.baf2MachineYield])[kk.baf2MachineYield]
              } : null,
              powerCap: null !== (Tk = kk.baf2MachinePowerCap) && void 0 !== Tk ? Tk : null,
              powerRates: null !== (qk = kk.baf2MachinePowerRates) && void 0 !== qk ? qk : null,
              coupled: !0 === kk.baf2MachineCoupled,
              couplerLevel: null !== (Lk = kk.baf2MachineCoupler) && void 0 !== Lk ? Lk : 1,
              taught: ik,
              taughtName: ik ? Pk([ik])[ik] : null,
              tier: null !== (tk = kk.baf2MachineTier) && void 0 !== tk ? tk : null,
              input: null !== (Zk = kk.baf2MachineInput) && void 0 !== Zk ? Zk : null,
              inertCoupler: null !== (ek = kk.baf2MachineInertCoupler) && void 0 !== ek ? ek : null,
              inputShort: null !== (xk = kk.baf2MachineInputShort) && void 0 !== xk ? xk : null,
              field: null !== (sk = kk.baf2MachineField) && void 0 !== sk ? sk : null,
              noSeeds: !0 === kk.baf2MachineNoSeeds,
              fuelFed: !0 === kk.baf2MachineFuelFed,
              fuelFeeds: !0 === kk.baf2MachineFuelFeeds,
              coreFull: !0 === kk.baf2MachineCoreFull,
              waterUnpowered: !0 === kk.baf2MachineWaterUnpowered,
              powerShort: !0 === kk.baf2MachinePowerShort,
              powerWait: !0 === kk.baf2MachinePowerWait,
              reactorPowered: !0 === kk.baf2MachineReactorPowered,
              fuelLeftMs: null !== (zk = kk.baf2MachineFuelLeftMs) && void 0 !== zk ? zk : null,
              burning: null !== (Sk = kk.baf2MachineBurning) && void 0 !== Sk ? Sk : null,
              fuelKeep: null !== (vk = kk.baf2MachineFuelKeep) && void 0 !== vk ? vk : null,
              water: null !== (Ok = kk.baf2MachineWater) && void 0 !== Ok ? Ok : null,
              farm: null !== (Gk = kk.baf2MachineFarm) && void 0 !== Gk ? Gk : null,
              cryo: null !== (bk = kk.baf2MachineCryo) && void 0 !== bk ? bk : null
            })
          } else if ("baf2StationOpen" === kk) {
            const kk = Fk.baf2Station;
            jF.consumeServerOpen(kk, performance.now()) || ix(Hk, ik, kk, Kk)
          } else if ("baf2Power" === kk) {
            const kk = Fk;
            nk.set(kk), kk.baf2PowerOpen && (QF({
              kind: "power"
            }), (0, PT.p)())
          } else if (kk === Mk.D) {
            const kk = Fk;
            uk.set(kk), kk.baf2WaterOpen && (QF({
              kind: "water"
            }), (0, PT.p)())
          } else if ("baf2RxPlans" === kk) {
            var Rk, Ck, Nk;
            const kk = Fk;
            Uk.bJ(kk);
            const Ik = new Set(kk.baf2RxPlanList.map((kk => {
              let [Fk, Ik, Xk] = kk;
              return `${Fk},${Ik},${Xk}`
            })));
            Ak.retain(Ik);
            const Xk = null === (Rk = lk.get()) || void 0 === Rk ? void 0 : Rk.kind,
              Tk = "reactor" === Xk ? null === (Ck = ck.get()) || void 0 === Ck ? void 0 : Ck.status.baf2RxAt : "battery" === Xk ? null === (Nk = Wk.get()) || void 0 === Nk ? void 0 : Nk.status.baf2BatAt : void 0;
            Tk && VF.has(Tk.join(",")) && !Ik.has(Tk.join(",")) && sF(), VF = Ik
          } else if ("baf2RxStatus" === kk) {
            const kk = Fk;
            ck.set(kk), kk.baf2RxOpen && (QF({
              kind: "reactor"
            }), (0, PT.p)())
          } else if ("baf2BatStatus" === kk) {
            const kk = Fk;
            Wk.set(kk), kk.baf2BatOpen && (QF({
              kind: "battery"
            }), (0, PT.p)())
          } else if ("baf2RxAlarm" === kk) Ak.bJ(Fk);
          else if ("baf2Bomb" === kk) hk.bJ(Fk, Hk.getPositionView(ik));
          else if ("baf2Fallout" === kk) Dk.bJ(Fk);
          else if ("baf2ColBeams" === kk) kF.onBeams(Fk);
          else if ("baf2ColStatus" === kk) {
            const kk = Fk;
            var Bk, dk;
            if (kF.onStatus(kk), kk.baf2ColOpen) kF.onOpen(null !== (Bk = null === (dk = Hk.BFk(ik)) || void 0 === dk ? void 0 : dk.name) && void 0 !== Bk ? Bk : null), QF({
              kind: "collider"
            }), (0, PT.p)()
          } else if ("baf2Terminal" === kk) {
            const kk = Fk;
            var Yk;
            if (pk.apply(kk)) kk.baf2TermReset && (QF({
              kind: "terminal"
            }), (0, PT.p)());
            else "terminal" === (null === (Yk = lk.get()) || void 0 === Yk ? void 0 : Yk.kind) && (lk.set(null), (0, PT.e)())
          } else if ("baf2Core" === kk) {
            var gk;
            const kk = Fk;
            if (ak(!0 === kk.baf2CoreNuclear), function(kk, Fk) {
                return "core" === (null === kk || void 0 === kk ? void 0 : kk.kind) && Fk.baf2CoreTier > kk.core.message.baf2CoreTier
              }(lk.get(), kk)) return void(0, PT.e)();
            if (kk.baf2CoreRefresh && "core" !== (null === (gk = lk.get()) || void 0 === gk ? void 0 : gk.kind)) return;
            QF({
              kind: "core",
              core: Jx(kk, Pk)
            }), kk.baf2CoreRefresh || (0, PT.p)()
          } else if ("baf2WrenchUndo" === kk) {
            const {
              baf2WrenchPos: kk,
              baf2WrenchBlock: Ik
            } = Fk;
            Hk.lG(kk[0], kk[1], kk[2], Ik)
          } else if ("baf2Toast" === kk) {
            const kk = Fk;
            fk.heard(performance.now(), kk.baf2ToastMs), Qk.show(kk)
          } else if ("baf2Area" === kk) Vk.arrive(Fk, null !== lk.get());
          else if ("baf2Quest" === kk) {
            const kk = Fk;
            ak(!0 === kk.baf2QuestNuclear), Kk.set(kk, function(kk, Fk) {
              var Ik, Xk, Tk, ik, yk;
              const lk = [];
              for (const [, , Lk, , , , , , tk, Zk] of kk.baf2QuestSteps) null !== Lk && lk.push(Lk), lk.push(...null !== tk && void 0 !== tk ? tk : [], ...null !== Zk && void 0 !== Zk ? Zk : []);
              kk.baf2QuestReward && lk.push(kk.baf2QuestReward);
              const ak = null === (Ik = kk.baf2QuestSide) || void 0 === Ik ? void 0 : Ik[2][2];
              ak && lk.push(ak), lk.push(...null !== (Xk = null === (Tk = kk.baf2QuestSide) || void 0 === Tk ? void 0 : Tk[2][8]) && void 0 !== Xk ? Xk : [], ...null !== (ik = null === (yk = kk.baf2QuestSide) || void 0 === yk ? void 0 : yk[2][9]) && void 0 !== ik ? ik : []);
              for (const [Lk] of null !== (qk = kk.baf2QuestAlso) && void 0 !== qk ? qk : []) {
                var qk;
                lk.push(Lk)
              }
              return Fk(lk)
            }(kk, Pk)), ax(kk.baf2QuestTier)
          } else if ("baf2Route" === kk) ! function(kk, Fk) {
            let {
              baf2RouteCells: Ik,
              baf2RouteInto: Xk
            } = Fk;
            0 !== Ik.length && Xk ? kk.setRouteChevrons({
              cells: Ik.map(((kk, Fk) => {
                const [Tk, , ik] = function(kk, Fk, Ik) {
                  const Xk = Ik + 1 < kk.length ? kk[Ik + 1] : Fk;
                  return [Xk[0] - kk[Ik][0], 0, Xk[2] - kk[Ik][2]]
                }(Ik, Xk, Fk);
                return {
                  pos: kk,
                  way: [Tk, ik]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : kk.setRouteChevrons(null)
          }(Hk, Fk);
          else if ("baf2QuestBook" === kk) Kk.setBook(Fk);
          else if ("baf2Stalls" === kk) jk.set(Fk.baf2StallCells);
          else if (kk === HI.j) wk.onMoves(Fk);
          else if (kk === HI.e) wk.onLines(Fk);
          else if ("baf2Labels" === kk) Ek.bJ(Fk);
          else if ("baf2DropMap" === kk) QF({
            kind: "dropMap",
            dropMap: Fk
          }), (0, PT.p)();
          else if ("baf2Islands" === kk) {
            var rk, FF;
            const kk = Fk;
            if (Jk.syncIslandEdits(kk.baf2IslandsAnswered), !kk.baf2IslandsOpen && "islands" !== (null === (rk = lk.get()) || void 0 === rk ? void 0 : rk.kind)) return;
            if (kk.baf2IslandsOpen) {
              var IF, XF;
              const Fk = KT.d.get("openEverythingMenuName"),
                Ik = Jk.sent() >= HF,
                Xk = "other" !== (eF = {
                  askedAtMs: wF,
                  askSent: Ik,
                  reaskedAtMs: JF,
                  nowMs: Date.now(),
                  panel: null !== (IF = null === (XF = lk.get()) || void 0 === XF ? void 0 : XF.kind) && void 0 !== IF ? IF : null,
                  inGameMenu: KT.d.get("openInGameMenuName"),
                  everythingMenu: null === Fk ? null : Fk === ZI.r.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== kk.baf2IslandsFocusInvite
                }).everythingMenu && (!!eF.focusInvite || "islands" === eF.panel && "clientGame" === eF.inGameMenu || !(eF.nowMs - eF.reaskedAtMs < uq) && (eF.askSent && eF.nowMs - eF.askedAtMs < uq ? "core" === eF.panel && "clientGame" === eF.inGameMenu && null === eF.everythingMenu : "shop" === eF.everythingMenu || null === eF.inGameMenu));
              if (Ik && (wF = -1 / 0), JF = -1 / 0, !Xk) return void PF()
            }
            const Ik = (iF = kk.baf2IslandsOpen, yF = "islands" === (null === (FF = lk.get()) || void 0 === FF ? void 0 : FF.kind), tF = xF, ZF = Date.now(), iF && !yF && ZF - tF < uq);
            QF({
              kind: "islands",
              islands: kk,
              arrivedAtMs: Date.now(),
              backToCore: bq(lk.get())
            }), Ik && (xF = -1 / 0, JF = Date.now(), Jk.send(mk)), kk.baf2IslandsOpen && ("clientGame" !== KT.d.get("openInGameMenuName") && (0, QT.g)(), (0, PT.p)())
          } else if ("baf2CoopTransfer" === kk) {
            var TF;
            const kk = Fk;
            kk.baf2TransferOn ? (QF({
              kind: "transfer",
              transfer: kk,
              arrivedAtMs: Date.now()
            }), (0, PT.p)()) : "transfer" === (null === (TF = lk.get()) || void 0 === TF ? void 0 : TF.kind) && (0, PT.e)()
          } else "baf2IslandLeft" === kk ? (Vk.dropHeld(), null !== lk.get() && sF(), "inventory" === KT.d.get("openInGameMenuName") && (0, QT.g)()) : "baf2Arc" === kk ? lF.bJ(Hk, Fk) : "baf2Blade" === kk ? aF.onBlade(Hk, Fk) : "baf2JetFlame" === kk ? qF.bJ(Hk, Fk) : "baf2GearPower" === kk && LF.bJ(Fk);
          var iF, yF, tF, ZF, eF
        }
      };
      return SF
    }
  },
  38503: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik) {
      const Xk = new Set,
        Tk = new ResizeObserver(Ik),
        ik = () => {
          const Fk = new Set(document.querySelectorAll(kk));
          let ik = !1;
          for (const kk of Xk) Fk.has(kk) || (Tk.unobserve(kk), Xk.delete(kk), ik = !0);
          for (const kk of Fk) Xk.has(kk) || (Tk.observe(kk), yk.observe(kk, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Xk.add(kk));
          ik && Ik()
        },
        yk = new MutationObserver((Fk => {
          Fk.some((kk => "attributes" === kk.type)) && Ik(), Fk.some((Fk => function(kk, Fk, Ik) {
            if ("childList" !== kk.type) return !1;
            for (const Xk of kk.addedNodes)
              if (Xk instanceof Element && (Xk.matches(Fk) || Xk.querySelector(Fk))) return !0;
            for (const Xk of kk.removedNodes)
              if (Xk instanceof Element)
                for (const kk of Ik)
                  if (Xk.contains(kk)) return !0;
            return !1
          }(Fk, kk, Xk))) && ik()
        }));
      yk.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const lk of Fk) Tk.observe(lk);
      return window.addEventListener("resize", Ik), ik(), Ik(), () => {
        Tk.disconnect(), yk.disconnect(), window.removeEventListener("resize", Ik)
      }
    }
    Ik.d(Fk, {
      b: () => Xk
    })
  },
  38490: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk,
      c: () => ik
    });
    const Xk = new WeakMap;

    function Tk(kk) {
      let Fk = Xk.get(kk);
      return Fk || (Fk = {
        hidden: kk.hidden,
        x: NaN,
        y: NaN
      }, Xk.set(kk, Fk)), Fk
    }

    function ik(kk, Fk) {
      const Ik = Tk(kk);
      Ik.hidden !== Fk && (Ik.hidden = Fk, kk.hidden = Fk)
    }

    function yk(kk, Fk, Ik) {
      const Xk = Tk(kk);
      Xk.x === Fk && Xk.y === Ik || (Xk.x = Fk, Xk.y = Ik, kk.style.translate = `${Fk}vw ${Ik}vh`)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);