export const id = 241;
export const ids = [241];
export const modules = {
  38086: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk
    });
    var Dk = ik(38088);
    const fk = [0, 0, 0];
    class Sk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk;
        this.pool = kk, this.origin = ek, this.count = 0, this.free = []
      }
      take() {
        var kk;
        const ek = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.count++;
        return ek >= this.pool.vK && this.pool.grow(Math.max(2 * this.pool.vK, ek + 1)), this.hide(ek), ek
      }
      release(kk) {
        this.hide(kk), this.free.push(kk)
      }
      write(kk, ek, ik, fk) {
        const {
          records: Sk
        } = this.pool, {
          origin: bk
        } = this, rk = kk * Dk.b;
        Sk[rk] = ek - bk[0], Sk[rk + 1] = ik - bk[1], Sk[rk + 2] = fk - bk[2], Sk[rk + Dk.d] = 0, this.pool.markDirty(kk)
      }
      hide(kk) {
        this.pool.records[kk * Dk.b + Dk.d] = 1, this.pool.markDirty(kk)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class bk {
      constructor(kk, ek, ik) {
        this.api = kk, this.model = ek, this.initialCapacity = ik, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(kk) {
        let ek = this.kinds.get(kk);
        if (void 0 === ek) {
          const ik = this.api.createInstancePool({
            ...this.model,
            item: kk
          }, this.initialCapacity);
          null === ik || void 0 === ik || ik.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ek = ik && new Sk(ik, this.origin), this.kinds.set(kk, ek)
        }
        return ek
      }
      follow(kk) {
        const {
          origin: ek
        } = this;
        if (Math.abs(kk[0] - ek[0]) <= 512 && Math.abs(kk[1] - ek[1]) <= 512 && Math.abs(kk[2] - ek[2]) <= 512) return !1;
        ek[0] = Math.floor(kk[0]), ek[1] = Math.floor(kk[1]), ek[2] = Math.floor(kk[2]);
        for (const ik of this.kinds.values()) null === ik || void 0 === ik || ik.pool.setOrigin(ek[0], ek[1], ek[2]);
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
  38092: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      d: () => rk,
      e: () => Pk
    });
    const Dk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      fk = [0, 1, 2, 0, 2, 3],
      Sk = [4, 5];

    function bk(kk, ek, ik, Dk, fk) {
      for (let bk = 0; bk < 6; bk++) Sk.includes(bk) === fk && mk(kk, ek, ik, Dk, bk)
    }

    function rk(kk, ek, ik, Dk) {
      for (let fk = 0; fk < 6; fk++) mk(kk, ek, ik, Dk, fk)
    }

    function Pk(kk, ek, ik, Sk, bk) {
      for (let rk = 0; rk < 6; rk++)
        for (const Pk of [0, 1]) {
          const [mk, Mk, Kk] = [Pk + 2, Pk + 1, (Pk + 3) % 4], xk = kk.length / 3;
          for (const [ek, fk] of [
              [Pk, Mk],
              [mk, Mk],
              [mk, Kk],
              [Pk, Kk]
            ])
            for (let Pk = 0; Pk < 3; Pk++) {
              const mk = Dk[3 * (4 * rk + ek) + Pk],
                Mk = Dk[3 * (4 * rk + fk) + Pk];
              kk.push((mk + (Mk - mk) * bk) * Sk / 2 + ik[Pk])
            }
          for (const kk of fk) ek.push(xk + kk)
        }
    }

    function mk(kk, ek, ik, Sk, bk) {
      let [rk, Pk, mk] = ik, [Mk, Kk, xk] = Sk;
      const nk = kk.length / 3;
      for (let fk = 4 * bk; fk < 4 * bk + 4; fk++) kk.push(Dk[3 * fk] * Mk / 2 + rk, Dk[3 * fk + 1] * Kk / 2 + Pk, Dk[3 * fk + 2] * xk / 2 + mk);
      for (const Dk of fk) ek.push(nk + Dk)
    }
  },
  38073: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => sp
    });
    var Dk = ik(60);
    const fk = [{
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
      Sk = 10;
    let bk = !0;

    function rk() {
      return bk
    }

    function Pk(kk) {
      bk = kk
    }
    const mk = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Mk() {
      return bk ? fk.length : Sk
    }

    function Kk(kk) {
      var ek, ik;
      return null !== (ek = null === (ik = fk[kk - 1]) || void 0 === ik ? void 0 : ik.reactorTier) && void 0 !== ek ? ek : 0
    }

    function xk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Kk(kk) > 0;
      return ik && !bk ? "hidden" : kk <= ek ? "open" : ik ? ek < 5 ? "hidden" : ek < Sk ? "teaser" : "locked" : "locked"
    }

    function nk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Dk,
        n: fk
      } = wk(kk);
      return {
        key: ek[Dk],
        params: {
          [Dk]: ik ? String(fk) : fk
        }
      }
    }
    const Uk = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Hk(kk, ek) {
      return Kk(kk) > 0 && ek < Sk
    }

    function wk(kk) {
      const ek = Kk(kk);
      if (ek > 0) return {
        kind: "atomic",
        n: ek,
        short: `A${ek}`
      };
      const ik = function(kk) {
        return kk >= 6 && kk <= 10 ? kk - 6 + 1 : 0
      }(kk);
      return ik > 0 ? {
        kind: "stage",
        n: ik,
        short: `S${ik}`
      } : {
        kind: "tier",
        n: kk,
        short: String(kk)
      }
    }

    function lk(kk) {
      return fk[Math.max(1, Math.min(kk, fk.length)) - 1]
    }

    function pk(kk, ek) {
      return kk < ek ? function(kk) {
        var ek;
        return null !== (ek = fk[kk]) && void 0 !== ek ? ek : null
      }(kk) : null
    }
    const yk = "baf2coresubmit",
      Yk = "baf2corebankpause",
      Lk = "baf2coredeposit",
      Ck = "baf2corechargepause";

    function Ak(kk) {
      var ek;
      return null !== (ek = kk.baf2CoreOpen) && void 0 !== ek ? ek : Sk
    }
    const jk = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function sk(kk) {
      return jk.includes(kk)
    }
    const dk = (kk, ek) => ek.map((ek => [ek, [kk]])),
      Vk = Object.fromEntries([...dk("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...dk("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...dk("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...dk("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...dk("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...dk("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...dk("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...dk("Parts Bench", ["Focus Lens"]), ...dk("Machine Bench", ["Laser", "Collider"]), ...dk("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...dk("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...dk("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...dk("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...dk("Tool Bench", ["Mob Cage"]), ...dk("Tool Bench", ["Pocket Terminal"]), ...dk("Tool Bench", ["Comet Beacon"]), ...dk("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Fk(kk) {
      var ek;
      return null !== (ek = Vk[kk]) && void 0 !== ek ? ek : ["Workbench"]
    }

    function uk(kk) {
      return Fk(kk)[0]
    }
    fk.slice(1).map(((kk, ek) => `Core Tier ${ek+2}`));
    var qk = ik(9020);
    const Ik = ["on", "hud", "off"];

    function zk(kk) {
      return "on" === kk
    }
    var Qk = ik(314);
    const vk = "Mob Farm",
      Ek = {
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
      hk = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      ak = {
        1: 20,
        2: 60,
        3: 120
      },
      Wk = "baf2farmvoid",
      tk = "Caged ",
      Xk = " Spawner Block";

    function Bk(kk) {
      return `lifeform:${(0,Qk.je)(kk)}`
    }

    function ck(kk) {
      if (!kk) return null;
      if (kk.startsWith(tk)) {
        const ek = kk.slice(6);
        return hk.includes(ek) ? ek : null
      }
      if (kk.endsWith(Xk)) {
        const ek = kk.slice(0, -14);
        return void 0 !== Ek[ek] ? ek : null
      }
      return null
    }

    function Tk(kk) {
      return !0 === kk.mobFarm
    }

    function Zk(kk, ek) {
      return ak[Ek[ek]] * kk.opMs / 1e3
    }
    const Ok = new Map;
    const gk = "baf2islands",
      Gk = "baf2islandnew";

    function Nk(kk) {
      const ek = fk.findIndex((ek => ek.unlocks.includes(kk)));
      return ek < 0 ? 1 : ek + 1
    }

    function Rk(kk) {
      return Math.floor(kk).toLocaleString("en-US")
    }
    var Jk = ik(38017);
    const ke = "baf2terminaltake",
      ee = "baf2terminalput",
      ie = ["one", "stack", "fill"];

    function De(kk, ek, ik) {
      return `${ke} ${kk} ${ek} ${ik}`
    }

    function fe(kk, ek, ik) {
      return `${ee} ${kk} ${ek} ${ik}`
    }

    function Se(kk) {
      return `${ee} ${kk}`
    }
    const be = [
      [`${ke} `, "take"],
      [`${ee} `, "put"]
    ];

    function re(kk) {
      const ek = be.find((ek => {
        let [ik] = ek;
        return kk.startsWith(ik)
      }));
      if (!ek) return null;
      const [ik, Dk] = ek, [fk, Sk, ...bk] = kk.slice(ik.length).trim().split(" "), rk = Number(fk);
      if (!Number.isSafeInteger(rk) || rk <= 0) return null;
      if ("put" === Dk && void 0 === Sk) return {
        kind: "putAll",
        seq: rk
      };
      const Pk = function(kk) {
        if (ie.includes(kk)) return kk;
        const ek = Number(kk);
        return /^\d+$/.test(kk) && Number.isSafeInteger(ek) && ek > 0 ? ek : null
      }(null !== Sk && void 0 !== Sk ? Sk : "");
      return null === Pk || 0 === bk.length ? null : {
        kind: Dk,
        seq: rk,
        mode: Pk,
        item: bk.join(" ")
      }
    }

    function Pe(kk, ek) {
      const ik = "number" === typeof kk ? kk : "one" === kk ? 1 : "stack" === kk ? 99 : ek;
      return Math.min(ek, ik)
    }

    function me(kk, ek) {
      const ik = kk => "number" === typeof kk ? kk : "one" === kk ? 1 : 99;
      return "fill" === kk || "fill" === ek ? "fill" : ik(kk) + ik(ek)
    }

    function Me(kk, ek) {
      const ik = re(kk),
        Dk = re(ek),
        fk = ik && Dk ? function(kk, ek) {
          return "take" === kk.kind || "take" === ek.kind ? "take" === kk.kind && "take" === ek.kind && kk.item === ek.item ? {
            ...ek,
            mode: me(kk.mode, ek.mode)
          } : null : "putAll" === kk.kind || "putAll" === ek.kind ? {
            kind: "putAll",
            seq: ek.seq
          } : kk.item === ek.item ? {
            ...ek,
            mode: me(kk.mode, ek.mode)
          } : null
        }(ik, Dk) : null;
      return fk ? "putAll" === (Sk = fk).kind ? Se(Sk.seq) : "put" === Sk.kind ? fe(Sk.seq, Sk.mode, Sk.item) : De(Sk.seq, Sk.mode, Sk.item) : null;
      var Sk
    }
    const Ke = "baf2rx";

    function xe(kk, ek) {
      for (var ik = arguments.length, Dk = new Array(ik > 2 ? ik - 2 : 0), fk = 2; fk < ik; fk++) Dk[fk - 2] = arguments[fk];
      return [Ke, kk[0], kk[1], kk[2], ek, ...Dk].join(" ")
    }
    const ne = 2,
      Ue = 4,
      He = 8,
      we = 16,
      le = 32,
      pe = 64,
      ye = 128,
      Ye = 256,
      Le = 512,
      Ce = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Ae = [{
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
    const je = "Biomass",
      se = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function de(kk) {
      return {
        input: je,
        inputAmount: 1,
        output: kk,
        outputAmount: 1
      }
    }
    const Ve = "baf2synth",
      Fe = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      ue = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      qe = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Ie = function(kk, ek) {
        return {
          input: kk,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: ek,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      ze = function(kk, ek) {
        return {
          ...Ie(kk, ek, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      Qe = ue.map((kk => ze(kk, "Biomass", 2))),
      ve = {
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
          recipes: [Ie("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Ie("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Ie("Raw Gold", "Gold Grit", 2), Ie("Messy Stone", "Sand"), Ie("Gravel", "Sand"), Ie("Raw Voltite", "Voltite Dust", 2), Ie("Moonstone", "Moonstone Dust", 4), Ie("Wheat Seeds", "Fertiliser"), Ie("Raw Uranium", "Uranium Grit", 2), ze("Mossy Messy Stone", "Sand"), ...Qe],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Ie("Iron Grit", "Iron Bar"), Ie("Copper Grit", "Copper Bar"), Ie("Gold Grit", "Gold Bar"), Ie("Raw Iron", "Iron Bar"), Ie("Raw Copper", "Copper Bar"), Ie("Raw Gold", "Gold Bar"), Ie("Sand", "Glass"), Ie("Messy Stone", "Stone"), ...Qk.Nc.map((kk => Ie(kk, "Charcoal", 1, 4))), Ie("Wheat", "Bread", 1, 2), ...ue.map(((kk, ek) => ze(kk, qe[ek])))],
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
          recipes: [Ie("Iron Bar", "Iron Plate"), Ie("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Ie("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Ie("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Ie("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Ie("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Ie("Raw Gold", "Gold Grit", 3), Ie("Raw Voltite", "Voltite Dust", 3), Ie("Messy Stone", "Sand", 2), Ie("Gravel", "Sand", 2), Ie("Moonstone", "Moonstone Dust", 6), Ie("Raw Uranium", "Uranium Grit", 3), ze("Mossy Messy Stone", "Sand", 2), ...Qe],
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
          table: Ce
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Ie("Coal", "Diamond", 1, 24), Ie("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Jk.h
      },
      Ee = {
        Crusher: [Ie("Spent Pellet", "Glow Dust"), Ie("Wheat Seeds", "Biomass"), Ie("Wheat", "Biomass"), Ie("Dead Bush", "Biomass"), Ie("Dusk Moss", "Biomass"), Ie("Rotten Flesh", "Biomass"), Ie("Bone", "Biomass", 2)],
        "Shatter Mill": [Ie("Spent Pellet", "Glow Dust"), Ie("Wheat Seeds", "Biomass"), Ie("Wheat", "Biomass"), Ie("Dead Bush", "Biomass"), Ie("Dusk Moss", "Biomass"), Ie("Rotten Flesh", "Biomass"), Ie("Bone", "Biomass", 2), ...Qk.Nc.map((kk => Ie(kk, "Biomass")))],
        Smelter: [Ie("Biomass", "Fertiliser", 2)],
        Press: [Ie("Coal", "Graphite", 1, 4)]
      },
      he = "Power Coupler",
      ae = "Advanced Coupler",
      We = "Nova Coupler",
      te = [{
        item: he,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: ae,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: We,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const Xe = new Map;

    function Be(kk) {
      var ek, ik;
      return null !== (ek = null !== (ik = kk.fuelSlot) && void 0 !== ik ? ik : kk.couplerSlot) && void 0 !== ek ? ek : null
    }

    function ce(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!kk.couplable) throw new Error(`${kk.kind} takes no Power Coupler`);
      let ik = Xe.get(kk);
      ik || (ik = [], Xe.set(kk, ik));
      let Dk = ik[ek];
      if (!Dk) {
        var fk;
        const {
          divisor: Sk,
          powerPerS: bk
        } = te[ek - 1], rk = kk.opMs / Sk, Pk = void 0 !== kk.fluidMade || void 0 !== kk.cryoMade ? kk.powerPerOp : bk * rk / 1e3;
        Dk = {
          ...kk,
          fuelSlot: null,
          couplerSlot: null !== (fk = Be(kk)) && void 0 !== fk ? fk : void 0,
          opMs: rk,
          powerPerOp: Pk,
          coupled: !0
        }, ek > 1 && (Dk = {
          ...Dk,
          couplerLevel: ek
        }), ik[ek] = Dk
      }
      return Dk
    }
    const Te = new Map;
    const oe = new Map;

    function Ze(kk, ek) {
      if (null === ek || (ik = ek, !se.includes(ik))) return kk;
      var ik;
      let Dk = oe.get(ek);
      return Dk || (Dk = {
        ...kk,
        recipes: [de(ek)]
      }, oe.set(ek, Dk)), Dk
    }

    function Oe(kk) {
      return !0 === kk.synth
    }
    const ge = (kk, ek, ik, Dk) => ({
        output: kk,
        outputAmount: ek,
        tier: ik,
        inputs: Dk.map((kk => {
          let [ek, ik] = kk;
          return {
            item: ek,
            amount: ik
          }
        }))
      }),
      Ge = Object.fromEntries([ge("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), ge("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), ge("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ge("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), ge("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), ge("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), ge("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), ge("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), ge("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), ge("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), ge("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), ge("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), ge("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), ge("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), ge("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ge("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), ge("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ge("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), ge("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ge("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), ge("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), ge("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), ge("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), ge("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), ge("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), ge("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), ge("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), ge("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), ge("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), ge("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((kk => [kk.output, kk]))),
      Ne = new Map;

    function Re(kk, ek) {
      let ik = ve[kk];
      if (ek.atomic && (ik = function(kk) {
          const ek = Ee[kk.kind];
          if (!ek) return kk;
          let ik = Te.get(kk.kind);
          if (!ik) {
            const Dk = new Set(ek.map((kk => kk.input))),
              fk = kk.recipes.filter((kk => !Dk.has(kk.input)));
            ik = {
              ...kk,
              recipes: [...fk, ...ek]
            }, Te.set(kk.kind, ik)
          }
          return ik
        }(ik)), ik.synth) return Ze(ik, ek.taught);
      if (ek.coupled && ik.couplable) return ce(ik, ek.level);
      const Dk = ik.inputSlots && null !== ek.taught ? Ge[ek.taught] : void 0;
      if (!Dk) return ik;
      const fk = `${kk}|${Dk.output}`;
      let Sk = Ne.get(fk);
      return Sk || (Sk = {
        ...ik,
        bench: Dk
      }, Ne.set(fk, Sk)), Sk
    }
    const Je = ["Diamond", "Moonstone"];

    function ki(kk) {
      return new Set(kk.flatMap((kk => kk.bonus ? [kk.output, kk.bonus.item] : [kk.output])).filter((kk => !Je.includes(kk))))
    }
    const ei = Object.values(ve).flatMap((kk => kk.recipes));
    ki(ei.filter((kk => !0 !== kk.nuclear))), ki([...ei.filter((kk => !0 === kk.nuclear)), ...Object.values(Ee).flat()]);

    function ii(kk) {
      return null === kk.inputSlot && void 0 === kk.inputSlots && void 0 === kk.powerMade && void 0 === kk.fluidMade && !kk.treeCutter && void 0 === kk.table
    }

    function Di(kk) {
      return !0 === kk.treeCutter
    }
    const fi = ["Voltite Cell"];

    function Si(kk) {
      var ek, ik;
      return null !== (ek = null === (ik = kk.fuels) || void 0 === ik ? void 0 : ik.some((kk => fi.includes(kk)))) && void 0 !== ek && ek
    }
    const bi = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Qk.Nc.map((kk => [kk, 8e3]))),
        ...Object.fromEntries(Qk.rd.map((kk => [kk, 2e3]))),
        "Voltite Cell": 12e4
      },
      ri = {
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

    function mi(kk) {
      var ek;
      return null !== (ek = Object.keys(ri).find((ek => ri[ek] === kk))) && void 0 !== ek ? ek : null
    }

    function Mi(kk) {
      return Fe.includes(kk)
    }

    function Ki(kk) {
      return !0 !== kk.nuclear || rk()
    }
    var xi = ik(302);
    var ni = ik(9092),
      Ui = ik(9038),
      Hi = ik(9097),
      wi = ik(9090);
    const li = "Reactor Controller",
      yi = "Reactor Port",
      Yi = "Battery Cell",
      Li = ["fuel", "water", "waste"],
      Ci = {
        fuel: yi,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Ai = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      ji = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      si = "Reactor Frame",
      di = "Reactor Glass",
      Vi = {
        edge: [si],
        cap: [di, yi],
        wall: [di, yi],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [li]
      },
      Fi = {
        edge: [Yi],
        cap: [Yi],
        wall: [Yi],
        inside: [Yi],
        ctrl: [Yi]
      },
      ui = ["edge", "cap", "wall", "inside"],
      qi = ["Reactor Slag"];

    function Ii(kk) {
      return qi.includes(zi(kk))
    }

    function zi(kk) {
      const ek = kk.indexOf("|");
      return ek < 0 ? kk : kk.slice(0, ek)
    }

    function Qi(kk) {
      return zi(kk) === li ? "reactor" : null
    }

    function vi(kk) {
      return zi(kk) !== yi ? null : kk.endsWith("|Water") ? "water" : kk.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Ei(kk) {
      const ek = vi(kk);
      return null === ek ? null : ti(Ci[Li[(Li.indexOf(ek) + 1) % Li.length]], function(kk) {
        return kk.includes(ai)
      }(kk))
    }
    const ai = "|meta|rot1|Formed",
      Wi = new Set([si, di, yi]);

    function ti(kk, ek) {
      var ik;
      const Dk = zi(kk);
      if (!Wi.has(Dk)) return kk;
      if (Dk !== yi) return ek ? Dk + ai : Dk;
      const fk = null !== (ik = vi(kk)) && void 0 !== ik ? ik : "fuel";
      return ek ? "fuel" === fk ? Dk + ai : `${Dk}${ai}|${"water"===fk?"Water":"Waste"}` : Ci[fk]
    }

    function Xi(kk, ek) {
      const ik = bD(kk, ek);
      if ("Air" === ik) return !1;
      const Dk = "reactor" === kk ? Vi : Fi;
      return ui.some((kk => Dk[kk].includes(ik))) || "reactor" === kk && qi.includes(ik)
    }

    function Bi(kk) {
      return ji[kk]
    }

    function ci(kk) {
      var ek;
      return null !== (ek = Ai[kk]) && void 0 !== ek ? ek : Ai[1]
    }

    function Ti(kk) {
      const [ek, , ik] = ci(kk);
      return [ik, 0, -ek]
    }

    function oi(kk, ek, ik, Dk, fk, Sk) {
      return {
        ctrl: [kk[0], kk[1], kk[2]],
        rot: Ai[ek] ? ek : 1,
        w: ik,
        h: Dk,
        d: fk,
        cu: Sk[0],
        cv: Sk[1]
      }
    }

    function Zi(kk, ek) {
      return "reactor" === kk ? [Math.floor((ek - 1) / 2), 0] : [0, 0]
    }

    function Oi(kk, ek, ik, Dk, fk) {
      let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk.rot;
      if (ik === kk.w && Dk === kk.h && fk === kk.d && Sk === kk.rot) return kk;
      const [bk] = Zi(ek, kk.w);
      if (kk.cu === bk && kk.cv <= 1) return oi(kk.ctrl, Sk, ik, Dk, fk, Zi(ek, ik));
      const rk = (kk, ek) => Math.max(1, Math.min(ek, kk));
      return oi(kk.ctrl, Sk, ik, Dk, fk, [rk(kk.cu, ik - 2), 0 === kk.cv ? 0 : rk(kk.cv, Dk - 2)])
    }
    const gi = 11,
      Gi = 2 * gi + 1;
    new Uint8Array(Gi * Gi * Gi);

    function Ni(kk) {
      return kk.w * kk.h * kk.d
    }

    function Ri(kk) {
      const ek = Ti(kk.rot);
      return [kk.ctrl[0] - ek[0] * kk.cu, kk.ctrl[1] - kk.cv, kk.ctrl[2] - ek[2] * kk.cu]
    }

    function Ji(kk) {
      return kk.cv * kk.d * kk.w + kk.cu
    }

    function kD(kk, ek) {
      const ik = ek % kk.w,
        Dk = Math.floor(ek / kk.w) % kk.d;
      return [ik, Math.floor(ek / (kk.w * kk.d)), Dk]
    }

    function eD(kk, ek) {
      const [ik, Dk, fk] = kD(kk, ek), Sk = Ri(kk), bk = ci(kk.rot), rk = Ti(kk.rot);
      return [Sk[0] + rk[0] * ik - bk[0] * fk, Sk[1] + Dk, Sk[2] + rk[2] * ik - bk[2] * fk]
    }

    function iD(kk, ek) {
      const ik = Ri(kk),
        Dk = ci(kk.rot),
        fk = Ti(kk.rot),
        Sk = ek[0] - ik[0],
        bk = ek[2] - ik[2],
        rk = Sk * fk[0] + bk * fk[2],
        Pk = -(Sk * Dk[0] + bk * Dk[2]),
        mk = ek[1] - ik[1];
      return rk < 0 || rk >= kk.w || mk < 0 || mk >= kk.h || Pk < 0 || Pk >= kk.d ? -1 : (mk * kk.d + Pk) * kk.w + rk
    }

    function DD(kk, ek) {
      if (ek === Ji(kk)) return "ctrl";
      const [ik, Dk, fk] = kD(kk, ek), Sk = 0 === Dk || Dk === kk.h - 1, bk = Number(0 === ik || ik === kk.w - 1) + Number(Sk) + Number(0 === fk || fk === kk.d - 1);
      return bk >= 2 ? "edge" : 1 === bk ? Sk ? "cap" : "wall" : "inside"
    }

    function fD(kk, ek) {
      const [ik, Dk, fk] = kD(kk, ek);
      return 0 === ik || ik === kk.w - 1 || 0 === Dk || Dk === kk.h - 1 || 0 === fk || fk === kk.d - 1 ? -1 : ((Dk - 1) * (kk.d - 2) + (fk - 1)) * (kk.w - 2) + (ik - 1)
    }

    function SD(kk, ek) {
      const ik = kk.w - 2,
        Dk = kk.d - 2,
        fk = ek % ik + 1,
        Sk = Math.floor(ek / ik) % Dk + 1;
      return ((Math.floor(ek / (ik * Dk)) + 1) * kk.d + Sk) * kk.w + fk
    }

    function bD(kk, ek) {
      const ik = zi(ek);
      return "reactor" === kk && ik === li ? si : ik
    }

    function rD(kk, ek, ik) {
      const Dk = "ctrl" === ek ? zi(ik) : bD(kk, ik);
      return ("reactor" === kk ? Vi : Fi)[ek].includes(Dk) ? "ok" : "Air" === Dk ? "missing" : Xi(kk, ik) ? "wrong" : "blocked"
    }

    function PD(kk, ek) {
      return "battery" === kk ? Yi : "inside" === ek ? null : function(kk, ek) {
        if ("inside" === ek || "ctrl" === ek || "battery" === kk) return null;
        return "edge" === ek ? si : di
      }(kk, ek)
    }
    const mD = {
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
      MD = "Collider",
      KD = "Laser",
      xD = "Star Alloy",
      nD = "Glow Dust",
      UD = [MD, "_Collider Focus"];

    function HD(kk) {
      return UD.indexOf(zi(kk))
    }

    function wD(kk) {
      return zi(kk) === KD
    }

    function lD(kk) {
      return [
        [kk[0], kk[1], kk[2]],
        [kk[0], kk[1] + 1, kk[2]]
      ]
    }
    const pD = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function yD(kk, ek, ik) {
      const Dk = pD[ek];
      return [kk[0] + Dk[0] * ik, kk[1], kk[2] + Dk[2] * ik]
    }

    function YD(kk, ek) {
      if (ek[1] !== kk[1]) return null;
      const ik = ek[0] - kk[0],
        Dk = ek[2] - kk[2];
      if (0 !== ik === (0 !== Dk)) return null;
      const fk = Math.abs(ik + Dk);
      if (fk > mD.LASER_D) return null;
      return {
        dir: Dk < 0 ? 0 : ik > 0 ? 1 : Dk > 0 ? 2 : 3,
        Vb: fk
      }
    }

    function LD(kk, ek, ik) {
      const Dk = ek => Math.abs(kk[0] - ek[0]) <= 1 && Math.abs(kk[1] - ek[1]) <= 1;
      return Dk(ek) || Dk(ik)
    }

    function CD(kk, ek) {
      return function(kk, ek, ik, Dk) {
        return [0, 1, 2, 3].map((fk => {
          for (let Sk = 1; Sk <= mD.LASER_D; Sk++) {
            const bk = yD(kk, fk, Sk);
            if (LD([bk[0], bk[2]], ek, ik) || !Dk(bk)) return !1
          }
          return !0
        }))
      }(lD(kk)[1], ek.spawnXZ, ek.coreXZ, (kk => kk[1] >= ni.n && kk[1] < ni.n + ni.o && kk[0] >= ek.minXZ[0] && kk[0] <= ek.maxXZ[0] && kk[2] >= ek.minXZ[1] && kk[2] <= ek.maxXZ[1]))
    }
    const AD = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function jD(kk) {
      return Math.max(48 + 16 * kk, lk(kk).machineAllowance)
    }
    const sD = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function dD(kk) {
      const ek = kk.split("|")[0];
      return sD.includes(ek) ? "Solar Panel" : ek === Hi.e ? "Fluid Pipe" : HD(ek) >= 0 ? "Collider" : (ik = ek, AD.includes(ik) ? ek : null);
      var ik
    }
    const VD = "buildAFactory2Game:solarPanelDescription";
    const FD = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function uD(kk, ek) {
      var ik;
      return null !== (ik = FD.find((ik => {
        var Dk;
        return (null !== (Dk = kk.level(ik)) && void 0 !== Dk ? Dk : 0) >= ek
      }))) && void 0 !== ik ? ik : null
    }
    const qD = "buildAFactory2Game:";
    let ID = null;
    const zD = {
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
      QD = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      vD = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      ED = {
        "Loot Chest": `${qD}lookRuinChestName`
      };

    function hD(kk) {
      return "object" === typeof kk && null !== kk && "translationKey" in kk && "string" === typeof kk.translationKey ? kk.translationKey : null
    }

    function aD(kk, ek) {
      var ik;
      return null !== (ik = hD(kk.displayName(ek))) && void 0 !== ik ? ik : `item:${(0,Qk.je)(ek)}`
    }

    function WD(kk, ek) {
      var ik, Dk, fk, Sk;
      let bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ek;
      if ("Solar Panel" === dD(ek)) return {
        name: hD(kk.displayName("Solar Panel")),
        detail: VD,
        detailItem: null
      };
      const Pk = ek.endsWith(" Ore"),
        mk = (ID ??= new Set([...Object.keys((0, Ui.g)()), ...Object.keys((0, Hi.r)())].map((kk => kk.split("|")[0]))), ID).has(ek),
        Mk = Pk || mk ? null : function(kk) {
          var ek;
          return kk.endsWith(" Log") && !kk.startsWith("Barkless ") ? "lookLog" : kk.endsWith(" Sapling") ? "lookSapling" : kk.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (ek = zD[kk]) && void 0 !== ek ? ek : null
        }(ek);
      if (!kk.isBlock(ek) || !Pk && !mk && null === Mk) return null;
      const Kk = null !== (ik = null !== (Dk = ED[ek]) && void 0 !== Dk ? Dk : hD(null !== (fk = kk.displayName(bk)) && void 0 !== fk ? fk : kk.displayName(ek))) && void 0 !== ik ? ik : `item:${(0,Qk.je)(ek)}`;
      if (null !== Mk) return {
        name: Kk,
        detail: `${qD}${Mk}`,
        detailItem: null
      };
      const xk = null !== (Sk = QD[ek]) && void 0 !== Sk ? Sk : rk() ? vD[ek] : void 0;
      if (mk && void 0 !== xk) return {
        name: Kk,
        detail: `${qD}${xk}`,
        detailItem: null
      };
      const nk = ri[ek];
      if (void 0 !== nk) return {
        name: Kk,
        detail: `${qD}lookDeposit`,
        detailItem: aD(kk, nk)
      };
      const Uk = kk.harvestLevel(ek);
      if (Pk && "rock" === kk.harvestType(ek) && 0 !== Uk) {
        const ek = uD(kk, null !== Uk && void 0 !== Uk ? Uk : 0);
        if (ek === FD[0]) return {
          name: Kk,
          detail: `${qD}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== ek) return {
          name: Kk,
          detail: `${qD}lookPickaxe`,
          detailItem: aD(kk, ek)
        }
      }
      return {
        name: Kk,
        detail: hD(kk.description(ek)),
        detailItem: null
      }
    }

    function tD(kk) {
      return kk < ni.n - 24
    }
    const XD = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const BD = "Wrench",
      cD = "Nova Wrench";

    function TD(kk) {
      return kk === BD || kk === cD
    }
    const oD = [...ni.D, "Belt Lift", "Belt Drop"];
    const ZD = ["Belt Lift", "Belt Drop"],
      OD = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function gD(kk) {
      return kk.split("|")[0]
    }

    function GD(kk) {
      const ek = /\|rot(\d)/.exec(kk);
      return ek ? Number(ek[1]) : 1
    }

    function ND(kk) {
      return kk % 4 + 1
    }

    function RD(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === ek && "" === ik ? kk : `${kk}|meta|rot${ek}${ik}`
    }

    function JD(kk) {
      return gD(kk) === ni.x ? (0, ni.J)(kk) ? "gateRight" : "gateLeft" : (0, ni.P)(kk)
    }

    function kf(kk) {
      const ek = gD(kk),
        ik = GD(kk);
      if (ni.D.includes(ek)) return (0, ni.G)(ek, ND(ik), null);
      if (ek === ni.f) return (0, ni.V)(ND(ik), (0, ni.N)(kk));
      if (ek === ni.A) {
        const Dk = OD[(0, ni.P)(kk)];
        return null === Dk ? RD(ek, ND(ik)) : RD(ek, ik, ni.B[Dk])
      }
      return ek === ni.x ? (0, ni.J)(kk) ? RD(ek, ND(ik)) : RD(ek, ik, ni.l) : wi.b.includes(ek) && !ZD.includes(ek) || Mi(ek) ? RD(ek, ND(ik)) : null
    }

    function ef(kk) {
      return wi.b.includes(kk) || Mi(kk) || null !== dD(kk)
    }

    function Df(kk) {
      return "Solar Panel" === dD(kk)
    }
    const ff = "buildAFactory2Game:",
      Sf = {
        leftFront: `${ff}lookSplitDetail_leftFront`,
        frontRight: `${ff}lookSplitDetail_frontRight`,
        gateRight: `${ff}lookGateDetail_gateRight`
      };

    function bf(kk, ek) {
      var ik;
      let Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const fk = JD(kk),
        Sk = null === fk ? null : `${ff}${fk.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${fk}`,
        bk = null === fk ? null : null !== (ik = Sf[fk]) && void 0 !== ik ? ik : null;
      if (TD(ek) && Dk) {
        const ik = gD(kk);
        return ek === cD && rk() && function(kk) {
          return oD.includes(gD(kk))
        }(kk) ? {
          mode: Sk,
          detail: bk,
          next: `${ff}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Sk,
          detail: bk,
          next: ef(ik) && !Df(ik) ? `${ff}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Pk = TD(ek) ? kf(kk) : null;
      if (null === Pk) return {
        mode: Sk,
        detail: bk,
        next: null,
        nextState: null
      };
      const mk = JD(Pk);
      return null === mk || GD(Pk) !== GD(kk) ? {
        mode: Sk,
        detail: bk,
        next: `${ff}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Sk,
        detail: bk,
        next: `${ff}lookWrenchNext`,
        nextState: `${ff}lookWrenchState_${mk}`
      }
    }
    const rf = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const Pf = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function mf(kk) {
      return [0, 1, 2, 3].map((ek => 0 !== (kk & 1 << ek)))
    }

    function Mf(kk) {
      const ek = [];
      for (let ik = 8; ik + 2 < kk.length; ik += 3) ek.push([kk[ik], kk[ik + 1], kk[ik + 2]]);
      return {
        focus: [kk[0], kk[1], kk[2]],
        lasers: mf(kk[3]),
        open: mf(kk[4]),
        live: mf(kk[5]),
        on: 1 === kk[6],
        state: Pf[kk[7]],
        blockers: ek
      }
    }
    const Kf = "Arc Caster",
      xf = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      nf = (Object.values(xf), "Jet Chestplate"),
      Uf = "Nova Jet Chestplate",
      Hf = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      wf = Object.values(Hf);

    function lf(kk, ek, ik) {
      return Math.min(function(kk) {
        return rk() && Kk(kk) >= 5 ? 20 : 10
      }(ik), Math.floor(function(kk, ek) {
        return Math.max(0, kk) + (rk() ? Math.max(0, ek) : 0)
      }(kk, ek) / 5))
    }

    function pf(kk, ek, ik) {
      const Dk = lf(ek, ik, kk),
        fk = Kk(kk),
        Sk = (fk >= 3 ? 55 : fk >= 1 ? 50 : kk >= 8 ? 45 : 30) + Dk,
        bk = Math.max(100 + Dk, 2 * Sk);
      return {
        arcDamage: Sk,
        arcPierce: kk >= 7 ? 2 : 1,
        arcChain: kk >= 10,
        barrierMax: (fk >= 4 ? 100 : fk >= 2 ? 90 : kk >= 9 ? 80 : kk >= 6 ? 60 : 40) + 5 * Dk,
        barrierRegenPerS: fk >= 5 ? 20 : kk >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Dk,
        novaShieldRegenPerS: 32,
        bladeDamage: bk,
        bladePunch: Math.round(.5 * bk),
        forgeRank: Dk
      }
    }
    const yf = {
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
    var Yf = ik(36420),
      Lf = ik(36151),
      Cf = ik(36143),
      Af = ik(22),
      jf = ik(1614),
      sf = ik(1021),
      df = ik.n(sf);

    function Vf(kk) {
      return !0 === kk.field
    }
    const Ff = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function uf(kk) {
      return Ff.has(kk) ? `buildAFactory2Game:itemPlural_${(0,Qk.je)(kk)}` : null
    }
    var qf = ik(1172),
      If = ik(1033),
      zf = ik(1877),
      Qf = ik(1858),
      vf = ik(36403),
      Ef = ik(36411),
      hf = ik(26),
      af = ik(36396);
    const Wf = "baf2QuestView",
      tf = "baf2PlayerY",
      Xf = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class Bf {
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
      set(kk, ek) {
        var ik, Dk, fk, Sk, bk, rk, Pk, mk;
        const Mk = JSON.stringify(kk.baf2QuestName) === JSON.stringify(this.view.name),
          Kk = new Set(this.view.rows.filter((kk => kk.done)).map((kk => kk.id))),
          xk = new Set(this.view.rows.filter((kk => kk.justFinished)).map((kk => kk.id))),
          nk = kk.baf2QuestSide,
          Uk = null !== nk && !0 === kk.baf2QuestSideFocus;
        let Hk = !1,
          wk = 0;
        const lk = kk.baf2QuestSteps.map((kk => {
            const ek = Rf(kk, Xf.has(kk[0]) ? kk[0] : "" + wk++),
              ik = Mk && ek.done && !Kk.has(ek.id);
            return ek.justFinished = ik || Mk && ek.done && xk.has(ek.id), Hk ||= ik, ek
          })),
          pk = Nf(lk);
        pk >= 0 && !Uk && (lk[pk].current = !0);
        const yk = !Mk && null !== kk.baf2QuestName,
          Yk = JSON.stringify(nk && [nk[0], nk[1]]),
          Lk = Yk === JSON.stringify(null !== (ik = null === (Dk = this.view.side) || void 0 === Dk ? void 0 : Dk.name) && void 0 !== ik ? ik : null),
          Ck = null !== nk && !this.sidesSeen.has(Yk);
        Ck && this.sidesSeen.add(Yk), this.serverTutorial = null !== (fk = kk.baf2QuestTutorial) && void 0 !== fk ? fk : "on", (null !== (Sk = kk.baf2QuestTutorialSeq) && void 0 !== Sk ? Sk : 0) >= this.pickSeq && this.endPick();
        const Ak = !Mk || !Lk || kk.baf2QuestTier !== this.view.tier;
        this.view = {
          name: kk.baf2QuestName,
          rows: lk,
          reward: kk.baf2QuestReward,
          goal: kk.baf2QuestGoal,
          pulse: this.view.pulse + (Hk || yk ? 1 : 0),
          itemNames: ek,
          side: nk && {
            name: [nk[0], nk[1]],
            row: {
              ...Rf(nk[2], "side"),
              current: Uk
            },
            goal: null !== (bk = nk[3]) && void 0 !== bk ? bk : null
          },
          sideCameUpAt: Ck ? Date.now() : this.view.sideCameUpAt,
          tier: kk.baf2QuestTier,
          core: kk.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (rk = kk.baf2QuestAlso) && void 0 !== rk ? rk : [],
          depth: null !== (Pk = kk.baf2QuestDepth) && void 0 !== Pk ? Pk : null,
          tutorial: null !== (mk = this.pickedTutorial) && void 0 !== mk ? mk : this.serverTutorial,
          tutorialKnown: !0
        }, this.tm(), Hk && this.scheduleClear(), Ak && this.requestBook()
      }
      setTutorial(kk) {
        return this.endPick(), this.pickedTutorial = kk, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.tm()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: kk
        }, this.tm(), this.pickSeq
      }
      onPlayerY(kk) {
        const ek = Math.floor(kk);
        ek !== this.playerY && (this.playerY = ek, this.view.depth && hf.j.tm(tf, ek))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(kk) {
        this.view = {
          ...this.view,
          chapters: kk.baf2BookChapters
        }, this.tm()
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
          }, this.tm()
        }), 2400)
      }
      tm() {
        hf.j.tm(Wf, this.view, !0)
      }
    }

    function Tf(kk, ek) {
      return kk.sideCameUpAt > 0 && ek - kk.sideCameUpAt < 2400
    }

    function of(kk) {
      return (null === kk.name || Zf(kk)) && null === kk.side && null !== kk.chapters
    }

    function Zf(kk) {
      var ek;
      return "quest_forgeOngoing" === (null === (ek = kk.name) || void 0 === ek ? void 0 : ek[0])
    }

    function Of(kk) {
      return kk.filter((kk => !Xf.has(kk.key)))
    }

    function gf(kk) {
      return kk.key.startsWith("stepCraft")
    }

    function Gf(kk, ek) {
      const ik = new Set,
        Dk = kk.side ? [...kk.rows, kk.side.row] : kk.rows;
      for (const Sk of Dk)
        if (!Sk.done) {
          !Sk.item || ek && !gf(Sk) || ik.add(Sk.item);
          for (const [kk, ek, Dk] of null !== (fk = Sk.chips) && void 0 !== fk ? fk : []) {
            var fk;
            ek < Dk && ik.add(kk)
          }
        } return ik
    }

    function Nf(kk) {
      const ek = kk.findIndex((kk => !kk.done && !kk.away));
      return ek >= 0 ? ek : kk.findIndex((kk => !kk.done))
    }

    function Rf(kk, ek) {
      let [ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk] = kk;
      return {
        id: ek,
        key: ik,
        params: Dk,
        item: fk,
        amount: Sk,
        total: bk,
        done: rk,
        chips: null !== Pk && void 0 !== Pk ? Pk : null,
        current: !1,
        away: !0 === mk,
        madeFor: null !== Mk && void 0 !== Mk ? Mk : [],
        also: null !== Kk && void 0 !== Kk ? Kk : [],
        justFinished: !1
      }
    }
    const Jf = "baf2QuestItems",
      kS = new Set;
    let eS = new Set,
      iS = null;

    function DS(kk) {
      const ek = zk(kk.tutorial),
        ik = ek ? Gf(kk, !0) : kS;
      "inventory" === Af.b.get("openInGameMenuName") ? (iS = null, (0, af.t)(ik)) : iS = ik;
      const Dk = ek ? Gf(kk, !1) : kS;
      (0, Ef.b)(Dk, eS) || (eS = Dk, hf.j.tm(Jf, eS))
    }

    function fS() {
      return (0, vf.c)(Jf, (() => eS))
    }
    var SS = ik(33784),
      bS = ik(3261);

    function rS(kk) {
      const ek = (0, bS.e)(kk),
        ik = void 0 === ek ? void 0 : (0, SS.displayNameOf)(ek);
      return "object" === typeof ik && null !== ik && "translationKey" in ik && "string" === typeof ik.translationKey ? ik.translationKey : `item:${(0,Qk.je)(kk)}`
    }

    function PS(kk, ek) {
      return kk(rS(ek))
    }
    const mS = [{
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

    function MS(kk, ek) {
      return [`Deposit Seed (${kk})`, {
        item: ri[`${kk} Deposit`],
        amount: ek
      }]
    }
    const KS = Object.fromEntries([MS("Coal", 8), MS("Iron", 8), MS("Copper", 8), MS("Gold", 6), MS("Voltite", 4), MS("Uranium", 4)]),
      xS = "Relay Coil",
      nS = new Map;

    function US(kk) {
      let ek = nS.get(kk);
      if (!ek) {
        const ik = Math.max(1, kk);
        ek = mS.filter((kk => {
          var ek;
          return ik >= kk.fromTier && ik <= (null !== (ek = kk.untilTier) && void 0 !== ek ? ek : 1 / 0)
        })).map((kk => kk.later && ik >= kk.later.tier ? {
          ...kk,
          weight: kk.later.weight
        } : kk)), nS.set(kk, ek)
      }
      return ek
    }

    function HS(kk) {
      return US(kk).some((kk => {
        let {
          item: ek
        } = kk;
        return ek === xS
      }))
    }

    function wS(kk) {
      return kk.startsWith("Deposit Seed (")
    }

    function lS(kk, ek) {
      const ik = US(kk);
      return ek ? ik.filter((kk => ek(kk.item))) : ik
    }

    function pS(kk) {
      return kk.reduce(((kk, ek) => kk + ek.weight), 0)
    }

    function yS(kk, ek) {
      const ik = lS(kk, ek),
        Dk = pS(ik);
      return ik.map((kk => ({
        find: kk,
        chance: kk.weight / Dk
      })))
    }
    const YS = 6e4,
      LS = new Intl.NumberFormat("en-US");

    function CS(kk, ek) {
      const ik = kk >= 10 ? Math.round(kk) : Math.round(10 * kk) / 10;
      return 0 === ik ? "0" : `${ek}${LS.format(ik)}`
    }

    function AS(kk) {
      return kk < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? LS.format(kk) : kk < 1e6 ? `${kk<1e5?Math.floor(kk/100)/10:Math.floor(kk/1e3)}k` : Math.floor(kk / 1e5) / 10 + "M"
    }

    function jS(kk) {
      return kk < 0 ? "\u2212" + -kk : String(kk)
    }

    function sS(kk, ek) {
      const ik = Math.max(1, Math.round(ek));
      if (ik < 60) return kk("buildAFactory2Game:durationSeconds", {
        seconds: String(ik)
      });
      const Dk = Math.round(ik / 60);
      if (Dk < 60) return kk("buildAFactory2Game:durationMinutes", {
        minutes: String(Dk)
      });
      const fk = String(Math.floor(Dk / 60));
      return Dk % 60 === 0 ? kk("buildAFactory2Game:durationWholeHours", {
        hours: fk
      }) : kk("buildAFactory2Game:durationHours", {
        hours: fk,
        minutes: String(Dk % 60)
      })
    }
    var dS = ik(2469);
    const VS = "(max-height: 420px), (max-width: 650px)";

    function FS() {
      return (0, dS.e)(VS)
    }
    var uS = ik(1066);

    function qS(kk, ek) {
      return null !== kk && kk > ek + 1
    }

    function IS(kk) {
      const ek = 100 * kk;
      return String(ek <= 0 || ek >= 1 ? Math.round(ek) : Math.max(.1, Math.round(10 * ek) / 10))
    }

    function zS(kk) {
      let {
        item: ek,
        amount: ik
      } = kk;
      return (0, uS.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, uS.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, uS.jsx)(zf.c, {
            itemName: ek,
            amount: 0
          })
        }), ik > 1 && (0, uS.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", ik]
        })]
      })
    }

    function QS(kk) {
      let {
        label: ek,
        names: ik
      } = kk;
      const [fk, Sk] = (0, Dk.useState)(!1), bk = ik.join(" / ");
      return (0, uS.jsxs)(uS.Fragment, {
        children: [(0, uS.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: bk,
          "aria-expanded": fk,
          onClick: () => {
            Sk(!fk)
          },
          children: ek
        }), fk && (0, uS.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: bk
        })]
      })
    }

    function vS(kk) {
      let {
        tier: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)(), {
        key: Dk,
        params: fk
      } = nk(ek, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Sk = ik(`buildAFactory2Game:${Dk}`, fk);
      return (0, uS.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, uS.jsx)(If.d, {
          name: "lock"
        }), Sk]
      })
    }
    const ES = (0, Dk.createContext)(null);

    function hS() {
      const {
        t: kk
      } = (0, qf.D)(), ek = (0, Dk.useContext)(ES);
      return (0, Dk.useEffect)((() => null === ek || void 0 === ek ? void 0 : ek()), [ek]), (0, uS.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: kk("buildAFactory2Game:recipeForQuest"),
        "aria-label": kk("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function aS(kk) {
      let {
        title: ek,
        count: ik,
        children: fk,
        startOpen: Sk = !0
      } = kk;
      const {
        t: bk
      } = (0, qf.D)(), [rk, Pk] = (0, Dk.useState)((() => Sk && !FS())), [mk, Mk] = (0, Dk.useState)(0), Kk = (0, Dk.useCallback)((() => (Mk((kk => kk + 1)), () => {
        Mk((kk => kk - 1))
      })), []);
      return (0, uS.jsxs)("div", {
        className: df()("Baf2Recipes", {
          Open: rk
        }),
        children: [(0, uS.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Pk(!rk)
          },
          "aria-expanded": rk,
          children: [bk("buildAFactory2Game:recipesToggle", {
            title: ek,
            count: String(ik)
          }), (0, uS.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: rk ? "\u25be" : "\u25b8"
          })]
        }), rk && (0, uS.jsxs)(ES.Provider, {
          value: Kk,
          children: [(0, uS.jsx)("ul", {
            className: "Baf2RecipeList",
            children: fk
          }), mk > 0 && (0, uS.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, uS.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), bk("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const WS = "buildAFactory2Game:",
      tS = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const XS = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      BS = {
        "Uranium Grit": Sk,
        "Raw Uranium": Sk
      };

    function cS(kk) {
      var ek;
      return null !== (ek = BS[kk]) && void 0 !== ek ? ek : Math.max(Nk(kk), XS[kk] ? Nk(XS[kk]) : 1, function(kk) {
        const ek = fk.findIndex((ek => ek.cost.some((ek => ek.item === kk))));
        return ek > Sk ? ek : 1
      }(kk))
    }

    function TS(kk, ek) {
      return oS(ek) ? cS(ek) : function(kk) {
        if (tS.has(kk)) return 1;
        const ek = fk.findIndex((ek => ek.newDeposits.some((ek => {
          let {
            block: ik
          } = ek;
          return ik === kk
        }))));
        return ek < 0 ? 1 : ek + 1
      }(kk)
    }

    function oS(kk) {
      return kk in BS || Kk(cS(kk)) > 0
    }

    function ZS(kk, ek) {
      return Re(kk, {
        coupled: !1,
        taught: null,
        atomic: rk() && ek >= 11
      }).recipes
    }

    function OS(kk, ek) {
      const ik = xk(kk, ek, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Kk(kk) > 0);
      return "open" === ik || "locked" === ik
    }

    function gS(kk, ek) {
      return kk.map(((kk, ik) => ({
        value: kk,
        idx: ik,
        tier: ek(kk)
      }))).sort(((kk, ek) => kk.tier - ek.tier || kk.idx - ek.idx)).map((kk => {
        let {
          value: ek
        } = kk;
        return ek
      }))
    }

    function GS(kk, ek, ik) {
      const Dk = xk(kk, ek);
      if ("hidden" === Dk || "open" === Dk) return null;
      if ("teaser" === Dk) return {
        tag: {
          translationKey: `${WS}${ik?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${WS}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const fk = nk(kk, {
          tier: ik ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Sk = nk(kk, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${WS}${fk.key}`,
          params: fk.params
        },
        reason: {
          translationKey: `${WS}${Sk.key}`,
          params: Sk.params
        }
      }
    }

    function NS(kk) {
      return !wS(kk)
    }

    function RS(kk) {
      let {
        seconds: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)();
      return (0, uS.jsx)(aS, {
        title: ik("buildAFactory2Game:recipesCuts", {
          seconds: ek
        }),
        count: 1,
        children: (0, uS.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, uS.jsx)(zS, {
            item: "Maple Sapling",
            amount: 1
          }), (0, uS.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, uS.jsx)(zS, {
            item: "Maple Log",
            amount: 1
          }), (0, uS.jsx)("span", {
            className: "Baf2RecipeName",
            children: ik("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function JS(kk) {
      let {
        fertilised: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)();
      return (0, uS.jsxs)(aS, {
        title: ik("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, uS.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, uS.jsx)(zS, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, uS.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, uS.jsx)(zS, {
            item: "Wheat",
            amount: 1
          }), (0, uS.jsx)(zS, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, uS.jsx)("span", {
            className: "Baf2RecipeName",
            children: ik("buildAFactory2Game:recipeField")
          })]
        }), (0, uS.jsxs)("li", {
          className: df()("Baf2Recipe", {
            InUse: ek
          }),
          children: [(0, uS.jsx)(zS, {
            item: "Fertiliser",
            amount: 1
          }), (0, uS.jsx)("span", {
            className: "Baf2RecipeName",
            children: ik("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function kb(kk) {
      let {
        tier: ek,
        seconds: ik
      } = kk;
      const {
        t: Dk
      } = (0, qf.D)(), fk = function(kk) {
        return kk >= 5 ? Ae : Ce
      }(ek);
      return (0, uS.jsx)(aS, {
        title: Dk("buildAFactory2Game:recipesBringsUp", {
          seconds: ik
        }),
        count: fk.length,
        children: fk.map((kk => {
          let {
            item: ek,
            chance: ik
          } = kk;
          return (0, uS.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, uS.jsx)(zS, {
              item: ek,
              amount: 1
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeName",
              children: PS(Dk, ek)
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Dk("buildAFactory2Game:recipeChance", {
                percent: IS(ik)
              })
            })]
          }, ek)
        }))
      })
    }

    function eb(kk) {
      let {
        tier: ek,
        seconds: ik,
        noSeeds: Dk
      } = kk;
      const {
        t: fk
      } = (0, qf.D)(), Sk = fS(), bk = yS(ek, Dk ? NS : void 0), rk = Dk && yS(ek).length > bk.length, Pk = HS(ek);
      return (0, uS.jsxs)(aS, {
        title: fk("buildAFactory2Game:recipesRecycles", {
          seconds: ik
        }),
        count: bk.length,
        children: [bk.map((kk => {
          let {
            find: ek,
            chance: ik
          } = kk;
          return (0, uS.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Sk.has(ek.item) && (0, uS.jsx)(hS, {}), (0, uS.jsx)(zS, {
              item: ek.item,
              amount: ek.amount
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeName",
              children: PS(fk, ek.item)
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: fk("buildAFactory2Game:recipeChance", {
                percent: IS(ik)
              })
            })]
          }, ek.item)
        })), rk && (0, uS.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, uS.jsx)("span", {
            className: "Baf2RecipeName",
            children: fk("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Pk && (0, uS.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, uS.jsx)("span", {
            className: "Baf2RecipeName",
            children: fk("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function ib(kk) {
      let {
        tier: ek,
        seconds: ik
      } = kk;
      const {
        t: Dk
      } = (0, qf.D)(), fk = Object.entries(KS).filter((kk => {
        let [, {
          item: ik
        }] = kk;
        return OS(cS(ik), ek, oS(ik))
      }));
      return (0, uS.jsx)(aS, {
        title: Dk("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: ik
        }),
        count: fk.length,
        children: fk.map((kk => {
          let [ek, {
            item: ik,
            amount: fk
          }] = kk;
          return (0, uS.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, uS.jsx)(zS, {
              item: ek,
              amount: 1
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, uS.jsx)(zS, {
              item: ik,
              amount: fk
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeName",
              children: PS(Dk, ik)
            })]
          }, ek)
        }))
      })
    }

    function Db(kk) {
      let {
        tier: ek,
        seconds: ik
      } = kk;
      const {
        t: Dk
      } = (0, qf.D)(), fk = fS(), Sk = gS(Object.entries(ri).filter((kk => {
        let [ik, Dk] = kk;
        return OS(TS(ik, Dk), ek, oS(Dk))
      })), (kk => {
        let [ek, ik] = kk;
        return TS(ek, ik)
      }));
      return (0, uS.jsx)(aS, {
        title: Dk("buildAFactory2Game:recipesDigs", {
          seconds: ik
        }),
        count: Sk.length,
        children: Sk.map((kk => {
          let [ik, Sk] = kk;
          const bk = TS(ik, Sk),
            rk = bk > ek ? bk : null,
            Pk = Pi[ik],
            mk = null === rk && fk.has(Sk);
          return (0, uS.jsxs)("li", {
            className: df()("Baf2Recipe", {
              Locked: null !== rk,
              Far: qS(rk, ek)
            }),
            children: [mk && (0, uS.jsx)(hS, {}), (0, uS.jsx)(zS, {
              item: ik,
              amount: 1
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, uS.jsx)(zS, {
              item: Sk,
              amount: 1
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeName",
              children: PS(Dk, Sk)
            }), void 0 !== Pk && (0, uS.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Dk("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Pk)
              })
            }), null !== rk && (0, uS.jsx)(vS, {
              tier: rk
            })]
          }, ik)
        }))
      })
    }

    function fb(kk) {
      var ek;
      let {
        def: ik,
        seconds: Dk
      } = kk;
      const {
        t: fk
      } = (0, qf.D)();
      return (0, uS.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, uS.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (ek = ik.fuels) && void 0 !== ek ? ek : []).map((kk => (0, uS.jsx)(zS, {
            item: kk,
            amount: 1
          }, kk))), (0, uS.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, uS.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, uS.jsx)(If.d, {
              name: "bolt"
            }), fk("buildAFactory2Game:recipePower", {
              power: Rk(ik.powerMade),
              seconds: Dk
            })]
          })]
        })
      })
    }

    function Sb(kk) {
      let {
        def: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)();
      return (0, uS.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, uS.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, uS.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, uS.jsx)(If.d, {
              name: "bolt"
            }), ik("buildAFactory2Game:recipeMixer", {
              cryo: CS((0, Jk.v)(ek, ek.cryoMade), "")
            })]
          })
        })
      })
    }

    function bb(kk) {
      let {
        def: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)();
      return (0, uS.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, uS.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, uS.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, uS.jsx)(If.d, {
              name: "bolt"
            }), ik("buildAFactory2Game:recipeCondenser", {
              power: CS((0, Jk.v)(ek, ek.powerPerOp), ""),
              water: CS((0, Jk.v)(ek, ek.fluidMade), "")
            })]
          })
        })
      })
    }

    function rb(kk) {
      let {
        kind: ek,
        def: ik,
        input: Dk,
        tier: fk,
        noSeeds: Sk = !1
      } = kk;
      const bk = String(ik.opMs / 1e3);
      return Di(ik) ? (0, uS.jsx)(RS, {
        seconds: bk
      }) : ik.field ? (0, uS.jsx)(JS, {
        fertilised: null !== Dk
      }) : ik.table ? (0, uS.jsx)(kb, {
        tier: fk,
        seconds: bk
      }) : ik.recycles ? (0, uS.jsxs)(uS.Fragment, {
        children: [(0, uS.jsx)(eb, {
          tier: fk,
          seconds: bk,
          noSeeds: Sk
        }), (0, uS.jsx)(ib, {
          tier: fk,
          seconds: bk
        })]
      }) : ii(ik) ? (0, uS.jsx)(Db, {
        tier: fk,
        seconds: bk
      }) : void 0 !== ik.fluidMade ? (0, uS.jsx)(bb, {
        def: ik
      }) : void 0 !== ik.cryoMade ? (0, uS.jsx)(Sb, {
        def: ik
      }) : void 0 !== ik.powerMade ? (0, uS.jsx)(fb, {
        def: ik,
        seconds: bk
      }) : (0, uS.jsx)(Pb, {
        kind: ek,
        input: Dk,
        tier: fk,
        seconds: bk
      })
    }

    function Pb(kk) {
      let {
        kind: ek,
        input: ik,
        tier: Dk,
        seconds: fk
      } = kk;
      const {
        t: Sk
      } = (0, qf.D)(), bk = fS(), rk = gS(function(kk) {
        const ek = new Map;
        for (const fk of kk) {
          var ik, Dk;
          const kk = [fk.output, fk.outputAmount, fk.inputAmount, null === (ik = fk.bonus) || void 0 === ik ? void 0 : ik.item, null === (Dk = fk.bonus) || void 0 === Dk ? void 0 : Dk.chance].join("|"),
            Sk = ek.get(kk);
          Sk ? Sk.inputs.push(fk.input) : ek.set(kk, {
            inputs: [fk.input],
            inputAmount: fk.inputAmount,
            output: fk.output,
            outputAmount: fk.outputAmount,
            bonus: fk.bonus
          })
        }
        return [...ek.values()]
      }(ZS(ek, Dk).filter(Ki)), (kk => cS(kk.output))).filter((kk => OS(cS(kk.output), Dk, oS(kk.output))));
      return (0, uS.jsx)(aS, {
        title: Sk("buildAFactory2Game:recipesEach", {
          seconds: fk
        }),
        count: rk.length,
        children: rk.map((kk => {
          const ek = null !== ik && kk.inputs.includes(ik),
            fk = kk.inputs.length > 3 ? [ek ? ik : kk.inputs[0]] : kk.inputs,
            rk = cS(kk.output) > Dk ? cS(kk.output) : null,
            Pk = null === rk && bk.has(kk.output);
          return (0, uS.jsxs)("li", {
            className: df()("Baf2Recipe", {
              InUse: ek,
              Locked: null !== rk,
              Far: qS(rk, Dk)
            }),
            children: [Pk && (0, uS.jsx)(hS, {}), fk.map(((ek, ik) => (0, uS.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [ik > 0 && (0, uS.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, uS.jsx)(zS, {
                item: ek,
                amount: kk.inputAmount
              })]
            }, ek))), fk.length < kk.inputs.length && (0, uS.jsx)(QS, {
              label: Sk("buildAFactory2Game:recipeMore", {
                count: String(kk.inputs.length - fk.length)
              }),
              names: kk.inputs.filter((kk => !fk.includes(kk))).map((kk => PS(Sk, kk)))
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, uS.jsx)(zS, {
              item: kk.output,
              amount: kk.outputAmount
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeName",
              children: PS(Sk, kk.output)
            }), kk.bonus && (0, uS.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Sk("buildAFactory2Game:recipeBonus", {
                percent: IS(kk.bonus.chance)
              }), (0, uS.jsx)(zS, {
                item: kk.bonus.item,
                amount: 1
              })]
            }), null !== rk && (0, uS.jsx)(vS, {
              tier: rk
            })]
          }, `${kk.output}|${kk.inputs[0]}`)
        }))
      })
    }

    function mb(kk) {
      let {
        taught: ek,
        tier: ik
      } = kk;
      const {
        t: Dk
      } = (0, qf.D)(), fk = fS(), Sk = gS(Object.values(Ge), (kk => kk.tier)).filter((kk => OS(kk.tier, ik)));
      return (0, uS.jsx)(aS, {
        title: Dk("buildAFactory2Game:benchCanMake"),
        count: Sk.length,
        startOpen: !1,
        children: Sk.map((kk => {
          const Sk = kk.tier > ik,
            bk = !Sk && fk.has(kk.output);
          return (0, uS.jsxs)("li", {
            className: df()("Baf2Recipe", {
              InUse: kk.output === ek,
              Locked: Sk,
              Far: qS(Sk ? kk.tier : null, ik)
            }),
            children: [bk && (0, uS.jsx)(hS, {}), (0, uS.jsx)(zS, {
              item: kk.output,
              amount: kk.outputAmount
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeName",
              children: PS(Dk, kk.output)
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), kk.inputs.map((kk => (0, uS.jsx)(zS, {
              item: kk.item,
              amount: kk.amount
            }, kk.item))), Sk && (0, uS.jsx)(vS, {
              tier: kk.tier
            })]
          }, kk.output)
        }))
      })
    }
    var Mb, Kb, xb, nb, Ub;
    const Hb = ve.Generator,
      wb = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      lb = 1e3 * (null !== (Mb = Hb.powerMade) && void 0 !== Mb ? Mb : 0) / Hb.opMs,
      pb = Math.min(...(null !== (Kb = Hb.fuels) && void 0 !== Kb ? Kb : []).map((kk => bi[kk]))) / 1e3,
      yb = ve["Volt Engine"],
      Yb = 1e3 * (null !== (xb = yb.powerMade) && void 0 !== xb ? xb : 0) / yb.opMs,
      Lb = bi[null !== (nb = null === (Ub = yb.fuels) || void 0 === Ub ? void 0 : Ub[0]) && void 0 !== nb ? nb : ""] / 1e3;

    function Cb(kk) {
      let {
        item: ek,
        label: ik,
        value: Dk,
        note: fk,
        dim: Sk
      } = kk;
      return (0, uS.jsxs)("li", {
        className: df()("Baf2PowerRow", {
          Dim: Sk
        }),
        children: [(0, uS.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, uS.jsx)(zf.c, {
            itemName: ek,
            amount: 0
          })
        }), (0, uS.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, uS.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: ik
          }), fk && (0, uS.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: fk
          })]
        }), (0, uS.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Dk
        })]
      })
    }

    function Ab(kk, ek, ik, Dk) {
      var fk;
      const Sk = void 0 === Dk ? ve[kk] : function(kk, ek) {
          if (null === ek) return kk;
          let ik = Ok.get(ek);
          return ik || (ik = {
            ...kk,
            powerPerOp: Zk(kk, ek),
            farmMob: ek
          }, Ok.set(ek, ik)), ik
        }(ve[kk], Dk),
        bk = ek && Sk.couplable ? ce(Sk, ik) : Sk;
      return 1e3 * (null !== (fk = bk.powerPerOp) && void 0 !== fk ? fk : 0) / bk.opMs
    }

    function jb(kk) {
      var ek, ik, Dk, fk, Sk, bk, rk, Pk;
      let {
        message: mk
      } = kk;
      const {
        t: Mk
      } = (0, qf.D)(), Kk = (kk, ek) => Mk("buildAFactory2Game:powerPerSecond", {
        rate: CS(kk, ek)
      }), [xk, nk] = mk.baf2PowerGenerators, Uk = mk.baf2PowerGeneratorFuel, Hk = mk.baf2PowerSunPanels, wk = null !== (ek = mk.baf2PowerSunShare) && void 0 !== ek ? ek : 1, lk = mk.baf2PowerVaults, pk = mk.baf2PowerUsers, [yk, Yk] = null !== (ik = mk.baf2PowerEngines) && void 0 !== ik ? ik : [0, 0], Lk = null !== (Dk = mk.baf2PowerEngineCells) && void 0 !== Dk ? Dk : 0, Ck = null !== (fk = mk.baf2PowerPads) && void 0 !== fk ? fk : 0, Ak = null !== (Sk = mk.baf2PowerCharge) && void 0 !== Sk ? Sk : 0, [jk, sk] = null !== (bk = mk.baf2PowerReactors) && void 0 !== bk ? bk : [0, 0], [dk, Vk] = null !== (rk = mk.baf2PowerBatteries) && void 0 !== rk ? rk : [0, 0];
      let Fk = Mk("buildAFactory2Game:powerEngineCells", {
        amount: String(Lk)
      });
      Lk > 0 && Yk > 0 && (Fk = Mk("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Lk),
        time: sS(Mk, Lk * Lb / Yk)
      }));
      let uk = Mk("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(Uk)
      });
      Uk > 0 && nk > 0 && (uk = Mk("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(Uk),
        time: sS(Mk, Uk * pb / nk)
      }));
      const qk = xk + yk + Hk + jk;
      return (0, uS.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, uS.jsxs)("section", {
          children: [(0, uS.jsxs)("h3", {
            children: [Mk("buildAFactory2Game:powerMaking"), (0, uS.jsx)("span", {
              children: Kk(mk.baf2PowerMadePerS, "+")
            })]
          }), (0, uS.jsxs)("ul", {
            children: [0 === qk && (0, uS.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Mk("buildAFactory2Game:powerNoMakers")
            }), xk > 0 && (0, uS.jsx)(Cb, {
              item: "Generator",
              label: `${PS(Mk,"Generator")} \xd7${xk}`,
              note: `${Mk("buildAFactory2Game:powerRunning",{amount:String(nk)})} \xb7 ${uk}`,
              value: Kk(nk * lb, "+"),
              dim: 0 === nk
            }), yk > 0 && (0, uS.jsx)(Cb, {
              item: "Volt Engine",
              label: `${PS(Mk,"Volt Engine")} \xd7${yk}`,
              note: `${Mk("buildAFactory2Game:powerRunning",{amount:String(Yk)})} \xb7 ${Fk}`,
              value: Kk(Yk * Yb, "+"),
              dim: 0 === Yk
            }), Hk > 0 && (0, uS.jsx)(Cb, {
              item: "Solar Panel",
              label: `${PS(Mk,"Solar Panel")} \xd7${Hk}`,
              note: Mk(wk < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Kk(4 * Hk * wk, "+")
            }), jk > 0 && (0, uS.jsx)(Cb, {
              item: "Reactor Frame",
              label: `${Mk("buildAFactory2Game:powerReactors")} \xd7${jk}`,
              note: Mk("buildAFactory2Game:powerRunning", {
                amount: String(sk)
              }),
              value: Kk(null !== (Pk = mk.baf2PowerReactorPerS) && void 0 !== Pk ? Pk : 0, "+"),
              dim: 0 === sk
            })]
          })]
        }), (0, uS.jsxs)("section", {
          children: [(0, uS.jsxs)("h3", {
            children: [Mk("buildAFactory2Game:powerStorage"), (0, uS.jsx)("span", {
              children: Rk(mk.baf2PowerCap)
            })]
          }), (lk > 0 || dk > 0) && (0, uS.jsxs)("ul", {
            children: [lk > 0 && (0, uS.jsx)(Cb, {
              item: "Charge Vault",
              label: `${PS(Mk,"Charge Vault")} \xd7${lk}`,
              value: `+${Rk(8e3*lk)}`
            }), dk > 0 && (0, uS.jsx)(Cb, {
              item: "Battery Cell",
              label: `${Mk("buildAFactory2Game:powerBatteries")} \xd7${dk}`,
              value: `+${Rk(Vk)}`
            })]
          })]
        }), (0, uS.jsxs)("section", {
          children: [(0, uS.jsxs)("h3", {
            children: [Mk("buildAFactory2Game:powerUsing"), (0, uS.jsx)("span", {
              children: Kk(mk.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, uS.jsxs)("ul", {
            children: [0 === pk.length && 0 === Ck && 0 === Ak && (0, uS.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Mk("buildAFactory2Game:powerNoUsers")
            }), pk.map((kk => {
              let [ek, ik, Dk, fk, Sk = 1, bk] = kk, rk = ik ? Mk(wb[Sk - 1], {
                name: PS(Mk, ek)
              }) : PS(Mk, ek);
              return void 0 !== bk && (rk = Mk("buildAFactory2Game:powerFarmName", {
                name: rk,
                mob: Mk(Bk(bk))
              })), (0, uS.jsx)(Cb, {
                item: ek,
                label: `${rk} \xd7${Dk}`,
                note: Mk("buildAFactory2Game:powerRunning", {
                  amount: String(fk)
                }),
                value: fk > 0 ? Kk(fk * Ab(ek, ik, Sk, bk), "\u2212") : Mk("buildAFactory2Game:powerIdle"),
                dim: 0 === fk
              }, `${ek}|${ik}|${Sk}|${bk}`)
            })), Ck > 0 && (0, uS.jsx)(Cb, {
              item: "Charging Pad",
              label: `${PS(Mk,"Charging Pad")} \xd7${Ck}`,
              value: Mk("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Ak > 0 && (0, uS.jsx)(Cb, {
              item: "Homestead Core",
              label: Mk("buildAFactory2Game:powerCharge"),
              value: Kk(Ak, "\u2212")
            }), mk.baf2PowerStarved > 0 && (0, uS.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, uS.jsx)(If.d, {
                name: "triangle-exclamation"
              }), Mk("buildAFactory2Game:powerStarved", {
                amount: String(mk.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var sb = ik(4471),
      db = ik(1410);
    class Vb {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(kk) {
        this.message = kk;
        for (const ek of this.listeners) ek()
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
    class Fb extends Vb {}

    function ub(kk, ek) {
      const ik = () => {
          const ik = kk.get();
          if (!ik || !ek) return ik;
          const [Dk, fk, Sk] = ik.baf2PowerAt;
          return Dk === ek[0] && fk === ek[1] && Sk === ek[2] ? ik : null
        },
        [fk, Sk] = (0, Dk.useState)(ik);
      return (0, Dk.useEffect)((() => (Sk(ik()), kk.subscribe((() => {
        Sk(ik())
      })))), [kk, ...null !== ek && void 0 !== ek ? ek : []]), fk
    }

    function qb(kk) {
      return {
        stored: kk.baf2PowerStored,
        cap: kk.baf2PowerCap,
        madePerS: kk.baf2PowerMadePerS,
        usedPerS: kk.baf2PowerUsedPerS
      }
    }

    function Ib(kk) {
      let {
        stored: ek,
        cap: ik
      } = kk;
      return (0, uS.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, uS.jsx)("div", {
          style: {
            width: `${Math.min(100,100*ek/Math.max(1,ik))}%`
          }
        })
      })
    }

    function zb(kk) {
      let {
        figures: ek,
        labelled: ik = !1
      } = kk;
      const {
        t: Dk
      } = (0, qf.D)(), fk = ek.madePerS - ek.usedPerS, {
        text: Sk,
        draining: bk
      } = function(kk, ek) {
        let {
          stored: ik,
          cap: Dk,
          madePerS: fk,
          usedPerS: Sk
        } = ek;
        const bk = fk - Sk;
        return ik >= Dk ? {
          text: kk("buildAFactory2Game:powerFull"),
          draining: !1
        } : bk > .05 ? {
          text: kk("buildAFactory2Game:powerFullIn", {
            time: sS(kk, (Dk - ik) / bk)
          }),
          draining: !1
        } : bk < -.05 ? {
          text: kk("buildAFactory2Game:powerEmptyIn", {
            time: sS(kk, ik / -bk)
          }),
          draining: !0
        } : {
          text: kk("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Dk, ek);
      return (0, uS.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, uS.jsx)(Ib, {
          stored: ek.stored,
          cap: ek.cap
        }), (0, uS.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, uS.jsx)("span", {
            children: Dk(ik ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: Rk(ek.stored),
              cap: Rk(ek.cap)
            })
          }), (0, uS.jsxs)("span", {
            className: df()("Baf2PowerNet", {
              Draining: bk
            }),
            children: [Dk("buildAFactory2Game:powerPerSecond", {
              rate: CS(Math.abs(fk), fk < 0 ? "\u2212" : "+")
            }), " \xb7 ", Sk]
          })]
        })]
      })
    }

    function Qb(kk) {
      let {
        stored: ek,
        cap: ik,
        rates: Dk
      } = kk;
      const {
        t: fk
      } = (0, qf.D)();
      return Dk ? (0, uS.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, uS.jsx)(zb, {
          figures: {
            stored: ek,
            cap: ik,
            madePerS: Dk[0],
            usedPerS: Dk[1]
          },
          labelled: !0
        })
      }) : (0, uS.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, uS.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, uS.jsx)(Ib, {
            stored: ek,
            cap: ik
          }), (0, uS.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, uS.jsx)("span", {
              children: fk("buildAFactory2Game:powerStoredLabelled", {
                stored: Rk(ek),
                cap: Rk(ik)
              })
            })
          })]
        })
      })
    }

    function vb(kk) {
      let {
        store: ek,
        close: ik
      } = kk;
      const {
        t: Dk
      } = (0, qf.D)(), fk = ub(ek);
      return (0, uS.jsx)(sb.e, {
        close: ik,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, uS.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsxs)("div", {
              children: [(0, uS.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Dk("buildAFactory2Game:powerTitle")
              }), (0, uS.jsx)("p", {
                children: Dk("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, uS.jsx)(db.n, {
              onClick: ik
            })]
          }), fk && (0, uS.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, uS.jsx)(zb, {
              figures: qb(fk)
            }), (0, uS.jsx)(jb, {
              message: fk
            })]
          })]
        })
      })
    }

    function Eb(kk) {
      var ek;
      let {
        kind: ik,
        def: fk,
        le: Sk,
        power: bk,
        stored: rk,
        cap: Pk
      } = kk;
      const {
        t: mk
      } = (0, qf.D)(), Mk = ub(bk, Sk), [Kk, xk] = (0, Dk.useState)(!1);
      return (0, uS.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, uS.jsx)(rb, {
          kind: ik,
          def: fk,
          input: null,
          tier: null !== (ek = null === Mk || void 0 === Mk ? void 0 : Mk.baf2PowerTier) && void 0 !== ek ? ek : 1
        }), (0, uS.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: mk("buildAFactory2Game:powerTitle")
        }), Mk && (0, uS.jsx)(zb, {
          figures: qb(Mk)
        }), !Mk && (0, uS.jsx)(Qb, {
          stored: rk,
          cap: Pk,
          rates: null
        }), Mk && (0, uS.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            xk(!Kk)
          },
          "aria-expanded": Kk,
          children: mk(Kk ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Mk && Kk && (0, uS.jsx)(jb, {
          message: Mk
        })]
      })
    }
    const hb = 2500,
      ab = 17500,
      Wb = `${Lk} `;
    const tb = ["plan", "throttle"];

    function Xb(kk) {
      if (kk.startsWith(`${Ve} `)) return kk.slice(0, kk.lastIndexOf(" "));
      const ek = kk.split(" ");
      return ek[0] === Ke && tb.includes(ek[4]) ? ek.slice(0, 5).join(" ") : null
    }
    class Bb {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = kk, this.now = ek, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.Dfk = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = ek()
      }
      enqueue(kk) {
        this.queue(kk, this.nextTicket());
        const ek = this.Dfk + this.pending.length;
        return this.flush(), ek
      }
      track(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ik = this.nextTicket();
        if (!ek.urgent) return this.queue(kk, ik), this.flush(), ik;
        const {
          supersedes: Dk
        } = ek;
        for (let Sk = this.pending.length - 1; Sk >= this.urgent; Sk--) {
          const ek = this.pending[Sk];
          (ek.command === kk || null !== Dk && void 0 !== Dk && Dk(ek.command)) && (this.pending.splice(Sk, 1), this.markLeft(ek.tickets))
        }
        const fk = this.pending.findIndex((ek => {
          let {
            command: ik
          } = ek;
          return ik === kk
        }));
        return -1 !== fk ? this.pending[fk].tickets.push(ik) : (this.pending.splice(this.urgent, 0, {
          command: kk,
          tickets: [ik]
        }), this.urgent += 1), this.flush(), ik
      }
      leftAt(kk) {
        const ek = this.leftTimes.get(kk);
        return void 0 !== ek ? ek : this.pending.some((ek => {
          let {
            tickets: ik
          } = ek;
          return ik.includes(kk)
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
        var ek;
        return (null === (ek = this.pending.at(-1)) || void 0 === ek ? void 0 : ek.command) === kk
      }
      sent() {
        return this.Dfk
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
        const ek = this.now();
        for (const ik of kk) this.leftTimes.set(ik, ek);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(kk, ek) {
        const ik = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === ik || void 0 === ik ? void 0 : ik.command) === kk) return void(! function(kk) {
          return kk === Ck || kk.startsWith(`${Yk} `) || kk.startsWith(`${Wk} `)
        }(kk) ? ik.tickets.push(ek) : (this.pending.pop(), this.markLeft([...ik.tickets, ek])));
        const Dk = void 0 === ik ? null : Me(ik.command, kk);
        if (null !== Dk && void 0 !== ik) return ik.command = Dk, void ik.tickets.push(ek);
        const fk = Xb(kk);
        if (null !== fk && void 0 !== ik && Xb(ik.command) === fk) return ik.command = kk, void ik.tickets.push(ek);
        if (null !== ik && void 0 !== ik && ik.command.startsWith(Wb) && kk.startsWith(Wb)) {
          const Dk = kk.slice(Wb.length);
          if (ik.command.slice(Wb.length).split(",").includes(Dk)) return void ik.tickets.push(ek);
          const fk = `${ik.command},${Dk}`;
          if (fk.length <= 119) return ik.command = fk, void ik.tickets.push(ek)
        }
        this.pending.push({
          command: kk,
          tickets: [ek]
        })
      }
      flush() {
        const kk = this.now();
        for (this.tokens = Math.min(5, this.tokens + (kk - this.refilledAt) / hb), this.refilledAt = kk; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.Dfk += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: kk,
            tickets: ek
          } = this.pending.shift();
          this.markLeft(ek), this.send(kk)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * hb)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class cb {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new Bb(kk, ek)
      }
      send(kk) {
        return this.queue.enqueue(kk)
      }
      sent() {
        return this.queue.sent()
      }
      track(kk, ek) {
        return this.queue.track(kk, ek)
      }
      leftAt(kk) {
        return this.queue.leftAt(kk)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(kk) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = ek, this.send(kk), this.islandEdits.count
      }
      syncIslandEdits(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: ik
        } = this, Dk = ek - ik.lastAtMs < ab;
        ik.count = Dk ? Math.max(ik.count, kk) : kk
      }
      clear() {
        this.queue.clear()
      }
    }
    const Tb = (0, Dk.createContext)(null);

    function ob() {
      const kk = (0, Dk.useContext)(Tb);
      if (!kk) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return kk
    }

    function Zb(kk, ek) {
      return null !== ek && void 0 !== ek ? ek : 1 === kk
    }

    function Ob(kk, ek) {
      return kk.every((kk => {
        var ik;
        let [Dk, , fk] = kk;
        return !Zb(fk, null === (ik = ek.get(Dk)) || void 0 === ik ? void 0 : ik.fU)
      }))
    }

    function gb(kk, ek, ik) {
      if (0 === kk.size) return kk;
      const Dk = new Map(kk);
      for (const [fk, Sk] of kk) {
        const kk = ek.find((kk => {
          let [ek] = kk;
          return ek === fk
        }));
        (!kk || Sk.fU === (1 === kk[2]) || Sk.atMs < ik) && Dk.delete(fk)
      }
      return Dk
    }

    function Gb(kk) {
      var ek;
      let {
        le: ik,
        input: fk,
        drops: Sk,
        seconds: bk
      } = kk;
      const {
        t: rk
      } = (0, qf.D)(), Pk = ob(), [mk, Mk] = (0, Dk.useState)(new Map);
      (0, Dk.useEffect)((() => {
        Sk && Mk((kk => gb(kk, Sk, Date.now() - ab)))
      }), [Sk]), (0, Dk.useEffect)((() => {
        const kk = function(kk, ek) {
          let ik = null;
          for (const {
              atMs: Dk
            }
            of kk.values()) ik = null === ik ? Dk : Math.min(ik, Dk);
          return null === ik ? null : ik + ek
        }(mk, ab);
        if (null === kk || !Sk) return;
        const ek = setTimeout((() => {
          Mk((kk => gb(kk, Sk, Date.now() - ab)))
        }), Math.max(0, kk - Date.now()) + 1);
        return () => {
          clearTimeout(ek)
        }
      }), [mk, Sk]);
      const Kk = ck(fk),
        xk = null !== Kk && null !== Sk && Ob(Sk, mk),
        nk = function(kk, ek, ik) {
          return null === kk || null === ek || Ob(ek, ik) ? 0 : ak[Ek[kk]]
        }(Kk, Sk, mk);
      return (0, uS.jsxs)(aS, {
        title: rk("buildAFactory2Game:farmDropsTitle", {
          seconds: bk
        }),
        count: null !== (ek = null === Sk || void 0 === Sk ? void 0 : Sk.length) && void 0 !== ek ? ek : 0,
        children: [nk > 0 && (0, uS.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: rk("buildAFactory2Game:farmDropsPower", {
            power: String(nk)
          })
        }), (null === Kk || !Sk) && (0, uS.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: rk("buildAFactory2Game:farmDropsEmpty")
        }), xk && (0, uS.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: rk("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Kk && (null === Sk || void 0 === Sk ? void 0 : Sk.map((kk => {
          var ek;
          let [Dk, fk, Sk] = kk;
          const bk = fk < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Kk = Zb(Sk, null === (ek = mk.get(Dk)) || void 0 === ek ? void 0 : ek.fU);
          return (0, uS.jsxs)("li", {
            className: df()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Kk
            }),
            children: [(0, uS.jsx)(zS, {
              item: Dk,
              amount: 1
            }), (0, uS.jsx)("span", {
              className: "Baf2RecipeName",
              children: PS(rk, Dk)
            }), (0, uS.jsx)("span", {
              className: "Baf2FarmRate",
              children: rk(bk, {
                amount: String(fk)
              })
            }), (0, uS.jsx)("button", {
              type: "button",
              className: df()("Baf2FarmToggle SmallTextBold", {
                Kept: Kk
              }),
              "aria-pressed": Kk,
              onClick: () => {
                Mk(new Map(mk).set(Dk, {
                  fU: !Kk,
                  atMs: Date.now()
                })), Pk.send(function(kk, ek, ik, Dk) {
                  return `${Wk} ${kk} ${ek} ${ik} ${Dk}`
                }(ik[0], ik[1], ik[2], Dk))
              },
              children: rk(Kk ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Dk)
        })))]
      })
    }
    var Nb;
    const Rb = String(null !== (Nb = ve.Synthesizer.waterPerOp) && void 0 !== Nb ? Nb : 0);

    function Jb(kk) {
      let {
        le: ek,
        taught: ik
      } = kk;
      const {
        t: fk
      } = (0, qf.D)(), Sk = ob(), [bk, rk] = (0, Dk.useState)(null);
      (0, Dk.useEffect)((() => {
        null !== bk && ik === bk && rk(null)
      }), [bk, ik]);
      const Pk = null !== bk && void 0 !== bk ? bk : ik;
      let mk = fk("buildAFactory2Game:synthPick");
      return null !== Pk && (mk = fk("buildAFactory2Game:synthGrows", {
        name: PS(fk, Pk),
        input: PS(fk, je),
        water: Rb
      })), (0, uS.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, uS.jsx)("div", {
          className: df()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Pk
          }),
          children: mk
        }), (0, uS.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: se.map(((kk, ik) => {
            const Dk = PS(fk, kk),
              bk = kk === Pk;
            return (0, uS.jsx)("li", {
              children: (0, uS.jsx)("button", {
                type: "button",
                className: df()("Baf2SynthTile", {
                  Selected: bk
                }),
                title: Dk,
                "aria-label": Dk,
                "aria-pressed": bk,
                onClick: () => {
                  bk || (rk(kk), Sk.send(`${Ve} ${ek[0]} ${ek[1]} ${ek[2]} ${ik}`))
                },
                children: (0, uS.jsx)(zf.c, {
                  itemName: kk,
                  amount: 0
                })
              })
            }, kk)
          }))
        })]
      })
    }
    const kr = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function er(kk) {
      let {
        kind: ek,
        tier: ik,
        coupled: Dk,
        level: fk,
        slot: Sk
      } = kk;
      const {
        t: bk
      } = (0, qf.D)(), Pk = Nk(he);
      if (!Dk && null !== ik && ik < Pk) return (0, uS.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, uS.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, uS.jsx)(If.d, {
            name: "lock"
          })
        }), (0, uS.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: bk("buildAFactory2Game:upgradeLocked")
        }), (0, uS.jsx)("span", {
          className: "Baf2TierTag",
          children: bk("buildAFactory2Game:tierTag", {
            tier: String(Pk)
          })
        })]
      });
      const mk = function(kk, ek) {
          if (rk() && "Crusher" !== kk && null !== ek) {
            if (ir(We, ek)) return {
              item: We,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (ir(ae, ek)) return {
              item: ae,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: he,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(ek, ik),
        Mk = bk(Dk ? kr[fk - 1] : mk.emptyKey),
        Kk = null !== ik ? function(kk, ek, ik, Dk) {
          if (!rk() || !ik || "Crusher" === kk || ek < 10) return null;
          const fk = Nk(We);
          if (Dk < 3 && fk > 1 && (2 === Dk || ek >= fk)) return {
            tier: fk,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Sk = Nk(ae);
          if (1 === Dk && Sk > 1) return {
            tier: Sk,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(ek, ik, Dk, fk) : null;
      return (0, uS.jsxs)("div", {
        className: df()("Baf2UpgradeSocket", {
          Fitted: Dk
        }),
        children: [(0, uS.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Dk && Sk, !Dk && (0, uS.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, uS.jsx)(zf.c, {
              itemName: mk.item,
              amount: 0
            })
          })]
        }), (0, uS.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, uS.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: bk("buildAFactory2Game:upgradeTitle")
          }), (0, uS.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Mk
          }), Dk && fk >= 2 && "Crusher" === ek && (0, uS.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: bk("buildAFactory2Game:couplerCrusherHint")
          }), Kk && null !== ik && ik < Kk.tier && (0, uS.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, uS.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, uS.jsx)(If.d, {
                name: "lock"
              })
            }), bk(Kk.lockedKey), (0, uS.jsx)("span", {
              className: "Baf2TierTag",
              children: bk("buildAFactory2Game:tierTag", {
                tier: String(Kk.tier)
              })
            })]
          }), Kk && null !== ik && ik >= Kk.tier && (0, uS.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: bk(Kk.nextKey)
          })]
        })]
      })
    }

    function ir(kk, ek) {
      const ik = Nk(kk);
      return ik > 1 && ek >= ik
    }
    var Dr = ik(36630);
    const fr = (0, Jk.v)(ve.Condenser, ve.Condenser.fluidMade),
      Sr = .05;
    class br extends Vb {}

    function rr(kk) {
      return CS(kk, "")
    }

    function Pr(kk, ek, ik) {
      return kk(ek ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: ik
      })
    }

    function mr(kk, ek, ik, Dk) {
      return ik <= Sr && Dk <= Sr ? null : Dk <= Sr || ik <= Sr ? Pr(kk, ek, Dk <= Sr ? CS(ik, "+") : CS(Dk, "\u2212")) : kk(ek ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: rr(ik),
        used: rr(Dk)
      })
    }

    function Mr(kk, ek) {
      return Math.min(100, 100 * kk / Math.max(1, ek))
    }

    function Kr(kk) {
      let {
        stored: ek,
        cap: ik,
        netPerS: Dk,
        rates: fk,
        cryo: Sk
      } = kk;
      const {
        t: bk
      } = (0, qf.D)(), rk = function(kk, ek, ik, Dk) {
        return ik <= 0 ? kk("buildAFactory2Game:waterNoStorage") : ek >= ik ? kk("buildAFactory2Game:powerFull") : Dk > Sr ? kk("buildAFactory2Game:powerFullIn", {
          time: sS(kk, (ik - ek) / Dk)
        }) : Dk < -.05 ? ek <= 0 ? kk("buildAFactory2Game:waterEmpty") : kk("buildAFactory2Game:powerEmptyIn", {
          time: sS(kk, ek / -Dk)
        }) : kk("buildAFactory2Game:powerSteady")
      }(bk, ek, ik, Dk), Pk = ik > 0 && ek < ik && Math.abs(Dk) <= Sr, mk = bk(Sk ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Mk = null !== fk ? `${fk} \xb7 ${rk}` : Pk ? mk : `${mk} \xb7 ${rk}`;
      return (0, uS.jsxs)(uS.Fragment, {
        children: [(0, uS.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, uS.jsx)("div", {
            style: {
              width: `${Mr(ek,ik)}%`
            }
          })
        }), (0, uS.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, uS.jsx)("span", {
            children: ik > 0 && bk("buildAFactory2Game:powerStored", {
              stored: (0, Jk.G)(ek),
              cap: (0, Jk.G)(ik)
            })
          }), (0, uS.jsx)("span", {
            className: df()("Baf2WaterNet", {
              Draining: Dk < -.05
            }),
            children: Mk
          })]
        })]
      })
    }

    function xr(kk) {
      let {
        water: ek,
        at: ik,
        side: Dk = null
      } = kk;
      const {
        t: fk
      } = (0, qf.D)(), Sk = ob(), [bk, rk, Pk] = ek;
      return (0, uS.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, uS.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, uS.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: fk(null === Dk ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Dk}`)
          }), (0, uS.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Sk.send(`${Jk.r} ${ik[0]} ${ik[1]} ${ik[2]}${"cryoOut"===Dk?" cryo":""}`)
            },
            children: fk("buildAFactory2Game:waterDetails")
          })]
        }), (0, uS.jsx)(Kr, {
          stored: bk,
          cap: rk,
          netPerS: Pk,
          rates: Pr(fk, "cryoOut" === Dk, CS(Math.abs(Pk), Pk < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Dk
        })]
      })
    }

    function nr(kk, ek) {
      var ik, Dk, fk;
      const Sk = !0 === ek.baf2WaterCryo,
        bk = null !== (ik = null === (Dk = ek.baf2WaterMakers.find((kk => kk[0] === (Sk ? Jk.c : "Condenser")))) || void 0 === Dk ? void 0 : Dk[1]) && void 0 !== ik ? ik : 0,
        rk = [],
        Pk = (ek, ik, Dk) => {
          ek > 0 && rk.push(kk(1 === ek ? ik : Dk, {
            count: String(ek)
          }))
        };
      return Sk ? Pk(bk, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Pk(bk, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Pk(null !== (fk = ek.baf2WaterPipes) && void 0 !== fk ? fk : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Pk(ek.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), rk.join(" \xb7 ")
    }

    function Ur(kk, ek) {
      if (!0 === ek.baf2WaterCryo) return function(kk, ek) {
        const ik = ve[Jk.c];
        switch (ek.baf2WaterThis) {
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
            var Dk;
            const [fk, Sk] = null !== (Dk = ek.baf2WaterThisRates) && void 0 !== Dk ? Dk : [(0, Jk.v)(ik, ik.cryoMade), (0, Jk.v)(ik, ik.powerPerOp)];
            return !0 === ek.baf2WaterDriven ? {
              text: kk("buildAFactory2Game:cryoThisMixerDriven", {
                rate: rr(fk)
              }),
              bad: !1
            } : {
              text: kk("buildAFactory2Game:cryoThisMixer", {
                rate: rr(fk),
                power: rr(Sk)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: kk("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(kk, ek);
      const ik = !0 === ek.baf2WaterDriven,
        Dk = ve.Condenser;
      switch (ek.baf2WaterThis) {
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
              tank: (0, Jk.G)(Jk.n),
              cap: (0, Jk.G)(ek.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var fk;
          const [Sk, bk] = null !== (fk = ek.baf2WaterThisRates) && void 0 !== fk ? fk : [fr, (0, Jk.v)(Dk, Dk.powerPerOp)];
          return ik ? {
            text: kk("buildAFactory2Game:waterThisCondenserDriven", {
              rate: rr(Sk)
            }),
            bad: !1
          } : {
            text: kk("buildAFactory2Game:waterThisCondenser", {
              rate: rr(Sk),
              power: rr(bk)
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

    function Hr(kk, ek) {
      const ik = ek.baf2WaterMakers.some((kk => !0 === kk[5]));
      if (!0 === ek.baf2WaterCryo) {
        const Dk = ek.baf2WaterUsedPerS - ek.baf2WaterMadePerS,
          fk = ik || Dk <= Sr ? 0 : (0, Jk.t)(Dk);
        return 0 === fk ? null : fk > 1 ? kk("buildAFactory2Game:cryoNextMixers", {
          mixers: String(fk)
        }) : kk("buildAFactory2Game:cryoNextOne")
      }
      const Dk = ik ? null : function(kk, ek) {
        const ik = ek - kk;
        return ik <= Sr ? null : Math.ceil(ik / fr)
      }(ek.baf2WaterMadePerS, ek.baf2WaterUsedPerS);
      return null === Dk ? null : Dk > 1 ? kk("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Dk)
      }) : kk("buildAFactory2Game:waterNextOne")
    }

    function wr(kk) {
      let {
        item: ek,
        label: ik,
        note: Dk,
        value: fk,
        dim: Sk,
        bad: bk
      } = kk;
      return (0, uS.jsxs)("li", {
        className: df()("Baf2WaterRow", {
          Dim: Sk,
          Bad: bk
        }),
        children: [(0, uS.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, uS.jsx)(zf.c, {
            itemName: ek,
            amount: 0
          })
        }), (0, uS.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, uS.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: ik
          }), Dk && (0, uS.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Dk
          })]
        }), (0, uS.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: fk
        })]
      })
    }

    function lr(kk) {
      return Dr.q[kk] ? kk : "Reactor Port"
    }

    function pr(kk) {
      let {
        message: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)(), Dk = !0 === ek.baf2WaterCryo, fk = (kk, ek) => Pr(ik, Dk, CS(kk, ek));
      return (0, uS.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, uS.jsxs)("section", {
          children: [(0, uS.jsxs)("h3", {
            children: [ik("buildAFactory2Game:waterMakes"), (0, uS.jsx)("span", {
              children: fk(ek.baf2WaterMadePerS, "+")
            })]
          }), (0, uS.jsxs)("ul", {
            children: [0 === ek.baf2WaterMakers.length && (0, uS.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ik(Dk ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), ek.baf2WaterMakers.map((kk => {
              let [ek, Dk, Sk, bk, rk, Pk] = kk;
              const mk = ik("buildAFactory2Game:powerRunning", {
                amount: String(Sk)
              });
              let Mk = rk > 0 ? ik("buildAFactory2Game:waterMakerPower", {
                running: mk,
                power: rr(rk)
              }) : mk;
              return Pk && (Mk = ik(0 === Sk && bk <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, uS.jsx)(wr, {
                item: ek,
                label: `${PS(ik,ek)} \xd7${Dk}`,
                note: Mk,
                value: Sk > 0 || Pk && bk > 0 ? fk(bk, "+") : ik("buildAFactory2Game:powerIdle"),
                dim: 0 === Sk && !Pk,
                bad: Pk
              }, ek)
            }))]
          })]
        }), (0, uS.jsxs)("section", {
          children: [(0, uS.jsxs)("h3", {
            children: [ik("buildAFactory2Game:waterUses"), (0, uS.jsx)("span", {
              children: fk(ek.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, uS.jsxs)("ul", {
            children: [0 === ek.baf2WaterUsers.length && (0, uS.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ik(Dk ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), ek.baf2WaterUsers.map((kk => {
              let [ek, Dk, Sk, bk] = kk;
              const rk = Dr.q[ek] ? PS(ik, ek) : ek;
              return (0, uS.jsx)(wr, {
                item: lr(ek),
                label: Dk > 1 ? `${rk} \xd7${Dk}` : rk,
                note: bk ? ik("buildAFactory2Game:waterPortFirst") : void 0,
                value: Sk > 0 ? fk(Sk, "\u2212") : ik("buildAFactory2Game:powerIdle"),
                dim: 0 === Sk
              }, ek)
            }))]
          })]
        })]
      })
    }

    function yr(kk) {
      var ek, ik, fk, Sk, bk;
      let {
        store: rk,
        close: Pk
      } = kk;
      const {
        t: mk
      } = (0, qf.D)(), Mk = function(kk) {
        const [ek, ik] = (0, Dk.useState)((() => kk.get()));
        return (0, Dk.useEffect)((() => (ik(kk.get()), kk.subscribe((() => {
          ik(kk.get())
        })))), [kk]), ek
      }(rk), Kk = null !== (ek = null === Mk || void 0 === Mk ? void 0 : Mk.baf2WaterStored) && void 0 !== ek ? ek : 0, xk = null !== (ik = null === Mk || void 0 === Mk ? void 0 : Mk.baf2WaterCap) && void 0 !== ik ? ik : 0, nk = null !== (fk = null === Mk || void 0 === Mk ? void 0 : Mk.baf2WaterMadePerS) && void 0 !== fk ? fk : 0, Uk = null !== (Sk = null === Mk || void 0 === Mk ? void 0 : Mk.baf2WaterUsedPerS) && void 0 !== Sk ? Sk : 0, Hk = null !== (bk = null === Mk || void 0 === Mk ? void 0 : Mk.baf2WaterNetPerS) && void 0 !== bk ? bk : nk - Uk, wk = Mk && Ur(mk, Mk), lk = Mk && Hr(mk, Mk), pk = !0 === (null === Mk || void 0 === Mk ? void 0 : Mk.baf2WaterCryo);
      return (0, uS.jsx)(sb.e, {
        close: Pk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, uS.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Mk && xk <= 0 ? (0, uS.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, uS.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, uS.jsx)(zf.c, {
                  itemName: pk ? Hi.f : Jk.j,
                  amount: 0
                })
              }), (0, uS.jsxs)("div", {
                children: [(0, uS.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: mk(pk ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Mk && (0, uS.jsx)("p", {
                  children: nr(mk, Mk)
                })]
              })]
            }), (0, uS.jsx)(db.n, {
              onClick: Pk
            })]
          }), Mk && wk && (0, uS.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, uS.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, uS.jsx)(Kr, {
                stored: Kk,
                cap: xk,
                netPerS: Hk,
                cryo: pk,
                rates: mr(mk, pk, nk, Uk)
              })
            }), (0, uS.jsx)("div", {
              className: df()("Baf2WaterThis", {
                Bad: wk.bad
              }),
              children: wk.text
            }), Mk.baf2WaterDriven && (0, uS.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, uS.jsx)(If.d, {
                name: "bolt"
              }), mk(pk ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), lk && (0, uS.jsx)("p", {
              className: "Baf2WaterNext",
              children: lk
            }), (0, uS.jsx)(pr, {
              message: Mk
            })]
          })]
        })
      })
    }
    class Yr {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(kk, ek) {
        const ik = this.get(kk);
        ik && null === ek.opLeftMs && null === ek.fuelLeftMs && ek.status === ik.status ? ek = {
          ...ek,
          opLeftMs: ik.opLeftMs,
          fuelLeftMs: ik.fuelLeftMs,
          burning: ik.burning
        } : this.updates++, this.pos = kk, this.view = ek;
        for (const Dk of this.listeners) Dk()
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

    function Lr(kk, ek, ik, Dk) {
      return "noFuel" === ek && Dk && !Si(ve[kk]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === ek && !0 === (null === ik || void 0 === ik ? void 0 : ik.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === ek && !0 === (null === ik || void 0 === ik ? void 0 : ik.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === ek && !0 === (null === ik || void 0 === ik ? void 0 : ik.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === ek && !0 === (null === ik || void 0 === ik ? void 0 : ik.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Cr(ek, ik) ? "buildAFactory2Game:machineStatus_noInputShort" : function(kk, ek) {
        const ik = ve[kk];
        if ("noFuel" === ek && void 0 !== ik.fuels) return Si(ik) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (ik.mobFarm && ("noInput" === ek || "badInput" === ek)) return `buildAFactory2Game:machineStatus_${ek}MobFarm`;
        if ("outputFull" === ek && (void 0 !== ik.table || ik.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === ek && Oe(ik)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== ik.cryoMade && ("noInput" === ek || "noOutlet" === ek || "fluidFull" === ek)) return `buildAFactory2Game:machineStatus_${ek}Mixer`;
        return `buildAFactory2Game:machineStatus_${ek}`
      }(kk, ek)
    }

    function Cr(kk, ek) {
      return "noInput" === kk && null !== ek && void 0 !== ek && ek.input && ek.inputShort ? {
        input: ek.input,
        short: ek.inputShort
      } : null
    }

    function Ar(kk) {
      return Vf(kk) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== kk.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function jr(kk) {
      const ek = (0, Qk.je)(kk);
      return `Baf2Pane Baf2Pane${ek.charAt(0).toUpperCase()}${ek.slice(1)}`
    }

    function sr(kk, ek) {
      const [ik, fk] = (0, Dk.useState)((() => kk.get(ek)));
      return (0, Dk.useEffect)((() => {
        fk(kk.get(ek));
        const ik = kk.subscribe((() => {
          fk(kk.get(ek))
        }));
        return () => {
          ik(), kk.forget(ek)
        }
      }), [kk, ...ek]), ik
    }

    function dr(kk, ek, ik, Dk) {
      const fk = ve[kk],
        Sk = ek && fk.couplable ? ce(fk, ik) : fk,
        bk = null !== Dk && ii(Sk) ? function(kk, ek) {
          var ik;
          return null !== (ik = null !== ek && ii(kk) ? Pi[ek] : void 0) && void 0 !== ik ? ik : kk.opMs
        }(Sk, mi(Dk)) : Sk.opMs;
      return bk === Sk.opMs ? Sk : {
        ...Sk,
        opMs: bk
      }
    }

    function Vr(kk) {
      let {
        running: ek,
        opMs: ik,
        opLeftMs: Dk,
        updateCount: fk
      } = kk;
      return (0, uS.jsx)("div", {
        className: df()("Baf2MachineProgress", {
          Running: ek
        }),
        children: (0, uS.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: ik / 1e3 + "s",
            animationDelay: null === Dk ? void 0 : (Dk - ik) / 1e3 + "s"
          }
        }, fk)
      })
    }

    function Fr(kk) {
      let {
        running: ek,
        leftMs: ik,
        periodMs: Dk,
        updateCount: fk
      } = kk;
      const {
        t: Sk
      } = (0, qf.D)(), bk = Math.min(Math.max(null !== ik && void 0 !== ik ? ik : 0, 0), Dk), rk = ek && bk > 0, Pk = Sk("buildAFactory2Game:machineBarFuel");
      return (0, uS.jsx)("div", {
        className: df()("Baf2FuelBurn", {
          Draining: rk
        }),
        role: "img",
        title: Pk,
        "aria-label": Pk,
        children: (0, uS.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: rk ? {
            animationDuration: Dk / 1e3 + "s",
            animationDelay: (bk - Dk) / 1e3 + "s"
          } : {
            transform: `scaleY(${bk/Dk})`
          }
        }, fk)
      })
    }

    function ur(kk, ek, ik) {
      let [Dk, fk] = ik;
      const Sk = 1 !== Dk ? uf(ek) : null;
      return {
        amount: Dk,
        have: fk,
        item: kk(Sk || rS(ek))
      }
    }

    function qr(kk) {
      return ii(kk) ? "buildAFactory2Game:machineBarMining" : Di(kk) ? "buildAFactory2Game:machineBarCutting" : void 0 !== kk.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Ir(kk) {
      var ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk;
      let {
        kind: Yk,
        le: Lk,
        store: Ck,
        power: Ak,
        renderSlot: jk
      } = kk;
      const {
        t: sk
      } = (0, qf.D)(), dk = sr(Ck, Lk), Vk = ve[Yk], Fk = null !== (ek = null === dk || void 0 === dk ? void 0 : dk.coupled) && void 0 !== ek && ek, uk = null !== (ik = null === dk || void 0 === dk ? void 0 : dk.couplerLevel) && void 0 !== ik ? ik : 1, qk = dr(Yk, Fk, uk, null !== (Dk = null === dk || void 0 === dk || null === (fk = dk.dug) || void 0 === fk ? void 0 : fk.item) && void 0 !== Dk ? Dk : null), Ik = null !== (Sk = null === dk || void 0 === dk ? void 0 : dk.status) && void 0 !== Sk ? Sk : null, zk = null !== (bk = null === dk || void 0 === dk ? void 0 : dk.power) && void 0 !== bk ? bk : null, Qk = null !== (rk = null === dk || void 0 === dk ? void 0 : dk.opLeftMs) && void 0 !== rk ? rk : null, vk = null !== (Pk = null === dk || void 0 === dk ? void 0 : dk.dug) && void 0 !== Pk ? Pk : null, Ek = null !== vk && ii(Vk) ? Pi[null !== (mk = mi(vk.item)) && void 0 !== mk ? mk : ""] : void 0, hk = void 0 === Ek ? null : 6e4 / Ek, ak = null !== (Mk = null === dk || void 0 === dk ? void 0 : dk.powerCap) && void 0 !== Mk ? Mk : 4e3, Wk = null !== (Kk = null === dk || void 0 === dk ? void 0 : dk.tier) && void 0 !== Kk ? Kk : null, tk = void 0 !== qk.powerMade, Xk = null !== Vk.fuelSlot ? jk(Vk.fuelSlot) : null, Bk = Be(Vk), ck = !Fk && !0 === (null === dk || void 0 === dk ? void 0 : dk.fuelFed), Zk = !Fk && !0 === (null === dk || void 0 === dk ? void 0 : dk.fuelFeeds), Ok = null !== Vk.fuelSlot && !Fk, gk = null !== (xk = null === dk || void 0 === dk ? void 0 : dk.fuelLeftMs) && void 0 !== xk ? xk : null, Gk = function(kk, ek, ik) {
        var Dk;
        const fk = null === ek ? void 0 : bi[ek];
        return Math.max(null !== (Dk = null !== fk && void 0 !== fk ? fk : ik) && void 0 !== Dk ? Dk : 0, kk.opMs)
      }(qk, null !== (nk = null === dk || void 0 === dk ? void 0 : dk.burning) && void 0 !== nk ? nk : null, gk), Nk = null !== (Uk = null === dk || void 0 === dk ? void 0 : dk.fuelKeep) && void 0 !== Uk ? Uk : null, Rk = null === Ik ? null : Lr(Yk, Ik, dk, ck), Jk = null === Ik ? null : Cr(Ik, dk);
      return (0, uS.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, uS.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, uS.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: sk(rS(Yk))
          }), vk && (0, uS.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [sk("Tree Cutter" === Yk ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, uS.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, uS.jsx)(zf.c, {
                itemName: vk.item,
                amount: 0
              })
            }), (0, uS.jsx)(Qf.e, {
              text: vk.name
            })]
          }), null !== hk && (0, uS.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: sk("buildAFactory2Game:machineDigsFixed", {
              perMin: String(hk)
            })
          }), (null === dk || void 0 === dk ? void 0 : dk.field) && (0, uS.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, uS.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, uS.jsx)(zf.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), sk("buildAFactory2Game:machineField", {
              planted: String(dk.field[0]),
              ripe: String(dk.field[1])
            })]
          }), (0, uS.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, uS.jsxs)("div", {
              className: df()("Baf2MachineColumn", {
                Baf2Burns: Ok
              }),
              children: [null !== qk.inputSlot && (0, uS.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, uS.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: sk(Ar(qk))
                }), jk(qk.inputSlot)]
              }), null !== Vk.fuelSlot && !Fk && (0, uS.jsxs)("div", {
                className: df()("Baf2MachineSlot", {
                  Baf2FuelFed: ck
                }),
                children: [(0, uS.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [ck && (0, uS.jsx)(If.d, {
                    name: "fire"
                  }), sk("buildAFactory2Game:machineFuel")]
                }), (0, uS.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, uS.jsx)(Fr, {
                    running: "running" === Ik,
                    leftMs: gk,
                    periodMs: Gk,
                    updateCount: Ck.updateCount
                  }), Xk]
                })]
              }), null !== Vk.fuelSlot && Fk && (0, uS.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, uS.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: sk("buildAFactory2Game:machineFuel")
                }), (0, uS.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: sk("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": sk("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, uS.jsx)(If.d, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, uS.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, uS.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: sk(qr(qk))
              }), (0, uS.jsx)(Vr, {
                running: "running" === Ik,
                opMs: qk.opMs,
                opLeftMs: Qk,
                updateCount: Ck.updateCount
              })]
            }), qk.outputSlots.length > 0 && (0, uS.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, uS.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: sk("buildAFactory2Game:machineOutput")
              }), (0, uS.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: qk.outputSlots.map((kk => (0, uS.jsx)("div", {
                  children: jk(kk)
                }, kk)))
              })]
            }), null !== zk && tk && (0, uS.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, uS.jsx)("div", {
                style: {
                  height: 100 * zk / ak + "%"
                }
              })
            })]
          }), Ok && null !== Nk && (0, uS.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, uS.jsx)(If.d, {
              name: "arrows-rotate"
            }), sk(Di(qk) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Nk)
            })]
          }), (ck || Zk) && (0, uS.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, uS.jsx)(If.d, {
              name: "fire"
            }), sk(ck ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Vk.couplable && (0, uS.jsx)(er, {
            kind: Yk,
            tier: Wk,
            coupled: Fk,
            level: uk,
            slot: Bk === Vk.fuelSlot ? Xk : null !== Bk ? jk(Bk) : null
          }), null !== zk && !tk && !0 === (null === dk || void 0 === dk ? void 0 : dk.reactorPowered) && (0, uS.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: sk("buildAFactory2Game:machineReactorPowered")
          }), null !== zk && !tk && !0 !== (null === dk || void 0 === dk ? void 0 : dk.reactorPowered) && (0, uS.jsx)(Qb, {
            stored: zk,
            cap: ak,
            rates: null !== (Hk = null === dk || void 0 === dk ? void 0 : dk.powerRates) && void 0 !== Hk ? Hk : null
          }), (null === dk || void 0 === dk ? void 0 : dk.water) && (0, uS.jsx)(xr, {
            water: dk.water,
            at: Lk,
            side: dk.cryo ? "waterIn" : null
          }), (null === dk || void 0 === dk ? void 0 : dk.cryo) && (0, uS.jsx)(xr, {
            water: dk.cryo,
            at: Lk,
            side: "cryoOut"
          }), null !== dk && void 0 !== dk && dk.inertCoupler ? (0, uS.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: sk("buildAFactory2Game:machineStatus_couplerOff", {
              item: PS(sk, dk.inertCoupler)
            })
          }) : null !== Rk && (0, uS.jsx)("div", {
            className: df()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Ik
            }),
            children: sk(Rk, Jk ? ur(sk, Jk.input, Jk.short) : void 0)
          })]
        }), (0, uS.jsxs)("div", {
          className: df()("Baf2MachineSide", {
            Baf2SynthSide: Oe(Vk)
          }),
          children: [Oe(Vk) && (0, uS.jsx)(Jb, {
            le: Lk,
            taught: null !== (wk = null === dk || void 0 === dk ? void 0 : dk.taught) && void 0 !== wk ? wk : null
          }, Lk.join(",")), tk && (0, uS.jsx)(Eb, {
            kind: Yk,
            def: qk,
            le: Lk,
            power: Ak,
            stored: null !== zk && void 0 !== zk ? zk : 0,
            cap: ak
          }), Tk(Vk) && (0, uS.jsx)(Gb, {
            le: Lk,
            input: null !== (lk = null === dk || void 0 === dk ? void 0 : dk.input) && void 0 !== lk ? lk : null,
            drops: null !== (pk = null === dk || void 0 === dk ? void 0 : dk.farm) && void 0 !== pk ? pk : null,
            seconds: String(qk.opMs / 1e3)
          }), !tk && !Tk(Vk) && !Oe(Vk) && (0, uS.jsx)(rb, {
            kind: Yk,
            def: qk,
            input: null !== (yk = null === dk || void 0 === dk ? void 0 : dk.input) && void 0 !== yk ? yk : null,
            tier: null !== Wk && void 0 !== Wk ? Wk : 1,
            noSeeds: !0 === (null === dk || void 0 === dk ? void 0 : dk.noSeeds)
          })]
        })]
      })
    }

    function zr(kk, ek, ik, Dk) {
      var fk;
      const Sk = ve[kk],
        bk = [Sk.inputSlot, Sk.fuelSlot, ...null !== (fk = Sk.inputSlots) && void 0 !== fk ? fk : []].filter((kk => null !== kk));
      return {
        render: fk => {
          let {
            le: Sk,
            renderSlot: bk
          } = fk;
          return (0, uS.jsx)(Tb.Provider, {
            value: Dk,
            children: (0, uS.jsx)(Ir, {
              kind: kk,
              le: Sk,
              store: ek,
              power: ik,
              renderSlot: bk
            })
          })
        },
        quickMoveRange: bk.length > 0 ? [Math.min(...bk), Math.max(...bk) + 1] : [0, 0],
        className: jr(kk)
      }
    }
    const Qr = "Assembler";

    function vr(kk) {
      var ek, ik, Dk, fk, Sk, bk, rk, Pk, mk;
      let {
        le: Mk,
        store: Kk,
        renderSlot: xk
      } = kk;
      const {
        t: nk
      } = (0, qf.D)(), Uk = sr(Kk, Mk), Hk = null !== (ek = null === Uk || void 0 === Uk ? void 0 : Uk.tier) && void 0 !== ek ? ek : 1, wk = null !== (ik = null === Uk || void 0 === Uk ? void 0 : Uk.taught) && void 0 !== ik ? ik : null, lk = Re(Qr, {
        coupled: !1,
        taught: wk
      }), pk = null !== (Dk = lk.bench) && void 0 !== Dk ? Dk : null, yk = null !== (fk = null === Uk || void 0 === Uk ? void 0 : Uk.status) && void 0 !== fk ? fk : null, Yk = null !== (Sk = null === Uk || void 0 === Uk ? void 0 : Uk.power) && void 0 !== Sk ? Sk : null, Lk = null !== (bk = null === Uk || void 0 === Uk ? void 0 : Uk.powerCap) && void 0 !== bk ? bk : 4e3;
      return (0, uS.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, uS.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, uS.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: nk(rS(Qr))
          }), pk && (0, uS.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [nk("buildAFactory2Game:benchMakes"), (0, uS.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, uS.jsx)(zf.c, {
                itemName: pk.output,
                amount: 0
              })
            }), (null === Uk || void 0 === Uk ? void 0 : Uk.taughtName) && (0, uS.jsx)(Qf.e, {
              text: Uk.taughtName
            }), pk.outputAmount > 1 && (0, uS.jsxs)("span", {
              children: ["\xd7", pk.outputAmount]
            })]
          }), !pk && (0, uS.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: nk("buildAFactory2Game:benchTeachHint")
          }), (0, uS.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, uS.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (rk = lk.inputSlots) && void 0 !== rk ? rk : []).map(((kk, ek) => {
                const ik = null === pk || void 0 === pk ? void 0 : pk.inputs[ek];
                return (0, uS.jsxs)("div", {
                  className: df()("Baf2BenchInput", {
                    Spare: !ik
                  }),
                  children: [(0, uS.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [xk(kk), ik && (0, uS.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, uS.jsx)(zf.c, {
                        itemName: ik.item,
                        amount: 0
                      })
                    })]
                  }), (0, uS.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: ik ? `\xd7${ik.amount}` : "\xa0"
                  })]
                }, kk)
              }))
            }), (0, uS.jsx)(Vr, {
              running: "running" === yk,
              opMs: lk.opMs,
              opLeftMs: null !== (Pk = null === Uk || void 0 === Uk ? void 0 : Uk.opLeftMs) && void 0 !== Pk ? Pk : null,
              updateCount: Kk.updateCount
            }), (0, uS.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, uS.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: nk("buildAFactory2Game:machineOutput")
              }), (0, uS.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: lk.outputSlots.map((kk => (0, uS.jsx)("div", {
                  children: xk(kk)
                }, kk)))
              })]
            })]
          }), null !== Yk && (0, uS.jsx)(Qb, {
            stored: Yk,
            cap: Lk,
            rates: null !== (mk = null === Uk || void 0 === Uk ? void 0 : Uk.powerRates) && void 0 !== mk ? mk : null
          }), null !== yk && (0, uS.jsx)("div", {
            className: df()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== yk
            }),
            children: nk(Lr(Qr, yk, Uk, !1))
          }), pk && pk.inputs.length > 1 && (0, uS.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: nk("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, uS.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, uS.jsx)(mb, {
            taught: wk,
            tier: Hk
          }), pk && (0, uS.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: nk("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Er(kk) {
      var ek;
      const ik = null !== (ek = ve[Qr].inputSlots) && void 0 !== ek ? ek : [];
      return {
        render: ek => {
          let {
            le: ik,
            renderSlot: Dk
          } = ek;
          return (0, uS.jsx)(vr, {
            le: ik,
            store: kk,
            renderSlot: Dk
          })
        },
        quickMoveRange: [Math.min(...ik), Math.max(...ik) + 1],
        className: jr(Qr)
      }
    }
    var hr = ik(99),
      ar = ik(1095),
      Wr = ik(4189);
    const tr = 600,
      Xr = .5,
      Br = 4,
      cr = 1200,
      Tr = 140,
      or = 100,
      Zr = 32,
      Or = 16,
      gr = 100.5,
      Gr = 90,
      Nr = 1.5,
      Rr = 50;

    function Jr(kk) {
      switch (zi(kk)) {
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
    const kP = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function eP(kk) {
      const ek = Math.ceil(60 * kk / or);
      return {
        fuel: Math.max(Zr, ek),
        waste: Math.max(Or, ek)
      }
    }

    function iP(kk, ek, ik) {
      const [Dk, fk, Sk] = [kk - 2, ek - 2, ik - 2];
      return 2 * (Dk * fk + fk * Sk + Sk * Dk) * Tr
    }

    function DP(kk, ek, ik) {
      return Math.max(0, kk - 2) * Math.max(0, ek - 2) * Math.max(0, ik - 2)
    }

    function fP(kk, ek) {
      const [ik, Dk, fk] = kk, Sk = ik * Dk * fk, bk = new Float32Array(Sk);
      let rk = 0,
        Pk = 0,
        mk = 0,
        Mk = 0,
        Kk = 0;
      const xk = (kk, Sk, bk) => kk < 0 || kk >= ik || Sk < 0 || Sk >= Dk || bk < 0 || bk >= fk ? 0 : ek[(Sk * fk + bk) * ik + kk];
      for (let wk = 0; wk < Dk; wk++)
        for (let kk = 0; kk < fk; kk++)
          for (let Dk = 0; Dk < ik; Dk++) {
            const Sk = (wk * fk + kk) * ik + Dk,
              nk = ek[Sk];
            if (1 === nk) {
              rk++;
              let ek = 0;
              for (const [ik, fk, Sk] of kP) {
                const bk = xk(Dk + ik, wk + fk, kk + Sk);
                1 !== bk && 2 !== bk || ek++
              }
              bk[Sk] = tr * (1 + Xr * Math.min(ek, Br)), Mk += bk[Sk]
            } else if (2 === nk) Pk++;
            else if (3 === nk) {
              mk++;
              kP.some((ek => {
                let [ik, fk, Sk] = ek;
                return 1 === xk(Dk + ik, wk + fk, kk + Sk)
              })) && (Kk += cr)
            }
          }
      const nk = iP(ik + 2, Dk + 2, fk + 2),
        Uk = Math.min(Mk, Kk, nk),
        Hk = rk > 0 ? Mk * or / rk : 0;
      return {
        rods: rk,
        graphite: Pk,
        channels: mk,
        fuelHeat: Mk,
        cooling: Kk,
        size: nk,
        max: Uk,
        vol: Sk,
        powerPerUnit: Hk,
        pelletsPerMin: Hk > 0 ? Uk / Hk * 60 : 0,
        waterPerS: Uk * Jk.m,
        rodHeat: bk
      }
    }
    const SP = 0,
      bP = 1,
      rP = 6,
      PP = 7,
      mP = 8;

    function MP(kk, ek) {
      const [ik, Dk, fk] = kk, Sk = new Uint8Array(ik * Dk * fk), bk = (kk, Sk, bk) => kk < 0 || kk >= ik || Sk < 0 || Sk >= Dk || bk < 0 || bk >= fk ? 0 : ek[(Sk * fk + bk) * ik + kk];
      for (let rk = 0; rk < Dk; rk++)
        for (let kk = 0; kk < fk; kk++)
          for (let Dk = 0; Dk < ik; Dk++) {
            const Pk = (rk * fk + kk) * ik + Dk,
              mk = ek[Pk];
            if (1 === mk) {
              let ek = 0;
              for (const [ik, fk, Sk] of kP) {
                const Pk = bk(Dk + ik, rk + fk, kk + Sk);
                ek += 1 === Pk || 2 === Pk ? 1 : 0
              }
              Sk[Pk] = bP + Math.min(ek, Br)
            } else if (3 === mk) {
              const ek = kP.some((ek => {
                let [ik, fk, Sk] = ek;
                return 1 === bk(Dk + ik, rk + fk, kk + Sk)
              }));
              Sk[Pk] = ek ? rP : PP
            } else 2 === mk && (Sk[Pk] = mP)
          }
      return Sk
    }

    function KP(kk) {
      return kk.fuelHeat <= kk.cooling && kk.fuelHeat <= kk.size ? "fuel" : kk.cooling <= kk.size ? "cooling" : "size"
    }
    const xP = Gr;

    function nP(kk, ek, ik) {
      return Math.round(kk * ek * ik * 25e3 * (1 + .25 * (Math.min(kk, ek, ik) - 2)))
    }

    function UP(kk) {
      return Math.max(0, Math.min(Jk.e, kk))
    }

    function HP(kk, ek, ik) {
      const Dk = ek * UP(ik);
      return kk <= 0 ? 0 : Dk > 0 ? Math.min(200, 100 * kk / Dk) : 200
    }

    function wP(kk, ek) {
      const ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Nr : 1;
      return Math.min(kk.fuelHeat * ik, kk.cooling * UP(ek), kk.size * ik)
    }

    function lP(kk) {
      return 2 + kk / 10
    }
    const pP = "buildAFactory2Game:";

    function yP(kk) {
      var ek;
      return null !== (ek = kk.baf2RxMood) && void 0 !== ek ? ek : function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const ik = [
          ["calm", 50],
          ["warm", xP],
          ["hot", gr]
        ];
        for (const [Dk, fk] of ik)
          if (kk < fk + (Dk === ek ? 3 : 0)) return Dk;
        return "alarm"
      }(kk.baf2RxHeat)
    }
    const YP = 120;

    function LP(kk) {
      const ek = kk.baf2RxState;
      if ("running" === ek && kk.baf2RxHeat > gr) return {
        label: `${pP}rxState_tooHot`,
        tone: "bad",
        fix: `${pP}rxFix_tooHot`
      };
      switch (ek) {
        case "running":
          return {
            label: `${pP}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${pP}rxState_idle`, tone: "off", fix: `${pP}rxFix_idle`
          };
        case "scram":
          return {
            label: `${pP}rxState_scram`, tone: "off", fix: kk.baf2RxHeat < Rr ? `${pP}rxFix_scramCool` : `${pP}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${pP}rxState_${ek}`, tone: "off", fix: `${pP}rxFix_${ek}`
          };
        case "melted":
          return {
            label: `${pP}rxState_melted`, tone: "bad", fix: `${pP}rxFix_melted`
          };
        default:
          return {
            label: `${pP}rxState_${ek}`, tone: "warn", fix: `${pP}rxFix_${ek}`
          }
      }
    }

    function CP(kk) {
      const [ek, ik, Dk] = kk.baf2RxStats;
      return {
        fuelHeat: ek,
        cooling: ik * (kk.baf2RxCryo ? Math.max(1, UP(kk.baf2RxWater / 100)) : 1),
        size: Dk
      }
    }

    function AP(kk) {
      var ek;
      const ik = "idle" === kk.baf2RxState || "running" === kk.baf2RxState && kk.baf2RxHeat <= gr || "scram" === kk.baf2RxState && kk.baf2RxHeat < Rr;
      if (0 === (kk.baf2RxFlags & Le) || !kk.baf2RxFormed || !ik) return null;
      const {
        fuelHeat: Dk,
        cooling: fk,
        size: Sk
      } = CP(kk), bk = Math.min(Dk, fk, Sk), rk = KP({
        fuelHeat: Dk,
        cooling: fk,
        size: Sk
      }), Pk = "cooling" === rk && !0 === kk.baf2RxCryoOpen && !kk.baf2RxCryo, mk = null !== (ek = kk.baf2RxCells) && void 0 !== ek ? ek : "", Mk = ("fuel" === rk || "cooling" === rk && !0 === kk.baf2RxCryo) && mk.length > 0 && !mk.includes(String(0)), Kk = Pk ? "Cryo" : "scram" === kk.baf2RxState ? "Off" : "";
      return bk < 12e3 ? {
        key: `${pP}rxGrow_${Mk?"full":rk}${Kk}`,
        amount: bk
      } : null
    }

    function jP(kk, ek) {
      return kk[0] === ek[0] && kk[1] === ek[1] && kk[2] === ek[2]
    }

    function sP(kk) {
      return [...kk].sort(((kk, ek) => Number(ek[2] < ek[1]) - Number(kk[2] < kk[1])))
    }

    function dP(kk, ek) {
      return ek.some((ek => {
        let [ik, Dk] = ek;
        return !(Dk <= 0) && ["edge", "cap", "wall", "inside"].some((ek => ik === PD(kk, ek)))
      }))
    }

    function VP(kk, ek, ik) {
      const Dk = kk.baf2RxFuel - kk.baf2RxPu > 0 ? ik : 0;
      return {
        full: kk.baf2RxWaste > ek - 3,
        fullInS: Dk > 0 ? Math.max(0, ek - kk.baf2RxWaste) / Dk : null
      }
    }
    const FP = {
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

    function uP(kk) {
      return qP[kk]
    }
    const qP = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function IP(kk) {
      let [ek, ik, Dk] = kk;
      return Math.ceil(iP(ek, ik, Dk) * Jk.m)
    }

    function zP(kk, ek) {
      return "battery" === kk ? ek[0] * ek[1] * ek[2] : function(kk) {
        let [ek, ik, Dk] = kk;
        return ek * ik * Dk - Math.max(0, ek - 2) * Math.max(0, ik - 2) * Math.max(0, Dk - 2)
      }(ek) - 1
    }

    function QP(kk) {
      const ek = Math.max(0, kk);
      if (ek < 10) return String(Math.round(10 * ek) / 10);
      if (ek < 1e4) return Math.round(ek).toLocaleString("en-US");
      if (ek < 1e6) return `${ek<1e5?(Math.floor(ek/100)/10).toFixed(1):Math.floor(ek/1e3)}k`;
      const ik = ek / 1e6;
      return `${ik<10?(Math.floor(100*ik)/100).toFixed(2):ik<100?(Math.floor(10*ik)/10).toFixed(1):Math.floor(ik)}M`
    }

    function vP(kk) {
      return kk <= 0 ? "0" : kk >= 10 ? String(Math.round(kk)) : kk.toFixed(kk >= 1 ? 1 : 2)
    }

    function EP(kk) {
      const ek = eD(kk, 0),
        ik = eD(kk, Ni(kk) - 1);
      return {
        lo: [Math.min(ek[0], ik[0]), Math.min(ek[1], ik[1]), Math.min(ek[2], ik[2])],
        hi: [Math.max(ek[0], ik[0]) + 1, Math.max(ek[1], ik[1]) + 1, Math.max(ek[2], ik[2]) + 1]
      }
    }

    function hP(kk, ek, ik) {
      const Dk = [ek[0] - kk[0], ek[1] - kk[1], ek[2] - kk[2]],
        fk = [(kk[0] + ek[0]) / 2, (kk[1] + ek[1]) / 2, (kk[2] + ek[2]) / 2],
        Sk = [];
      for (let bk = 0; bk < 3; bk++) {
        const rk = (bk + 1) % 3,
          Pk = (bk + 2) % 3;
        for (const mk of [kk[rk], ek[rk]])
          for (const Mk of [kk[Pk], ek[Pk]]) {
            const kk = [0, 0, 0],
              ek = [ik, ik, ik];
            kk[bk] = fk[bk], ek[bk] = Dk[bk] + ik, kk[rk] = mk, kk[Pk] = Mk, Sk.push([kk, ek])
          }
      }
      return Sk
    }
    const aP = "buildAFactory2Game:",
      WP = [`${aP}colNorth`, `${aP}colEast`, `${aP}colSouth`, `${aP}colWest`];

    function tP(kk, ek) {
      const [ik, Dk, fk] = kk.baf2ColAt;
      return `baf2col ${ik} ${Dk} ${fk} ${ek}`
    }

    function XP(kk) {
      return function(kk) {
        if (!Number.isFinite(kk)) return "";
        const ek = Math.max(1, Math.round(kk));
        if (ek < 60) return `${ek}s`;
        const ik = ek % 60;
        return 0 === ik ? ek / 60 + "m" : `${Math.floor(ek/60)}m ${ik}s`
      }(function(kk) {
        const ek = mD.FOCUS_BY_LASERS[Math.max(0, Math.min(4, kk))];
        return ek > 0 ? mD.NOVA_FOCUS / ek : 1 / 0
      }(kk))
    }

    function BP(kk) {
      const ek = Math.abs(Math.round(kk));
      return ek < 1e3 ? Math.round(kk).toLocaleString("en-US") : ek < 1e6 ? `${ek<1e5?(kk/1e3).toFixed(1).replace(/\.0$/,""):Math.round(kk/1e3)}k` : `${(kk/1e6).toFixed(ek<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function cP(kk, ek, ik) {
      if (HD(ek) >= 0) {
        const ek = function(kk, ek) {
          return kk.find((kk => {
            let {
              focus: ik
            } = kk;
            return ik[0] === ek[0] && ik[2] === ek[2] && (ek[1] === ik[1] || ek[1] === ik[1] - 1)
          }))
        }(kk, ik);
        if (!ek) return null;
        const fk = function(kk) {
          let ek = 0,
            ik = 0;
          for (let Dk = 0; Dk < 4; Dk++) ek += kk.laser[Dk] ? 1 : 0, ik += kk.live[Dk] ? 1 : 0;
          return {
            lasers: ek,
            live: ik,
            focusPerS: mD.FOCUS_BY_LASERS[ik],
            drawPerS: mD.LASER_DRAW * ik
          }
        }({
          laser: ek.lasers,
          live: ek.live
        });
        if (0 === fk.lasers || "noLasers" === ek.state) return {
          key: `${aP}lookColNoLasers`
        };
        if (0 === fk.live) return {
          key: `${aP}lookColOff_blocked`
        };
        if (!(ek.on && fk.live > 0) && ("running" !== (Dk = ek.state) && "slowed" !== Dk)) return {
          key: `${aP}lookColOff_${ek.state}`
        };
        if (fk.live < fk.lasers) return {
          key: `${aP}lookColLasersSome`,
          params: {
            lasers: String(fk.lasers),
            live: String(fk.live)
          }
        };
        const Sk = ek.open.filter(Boolean).length;
        return Sk < 4 ? {
          key: `${aP}lookColLasersSpots`,
          params: {
            live: String(fk.live),
            spots: String(Sk),
            time: XP(fk.live)
          }
        } : {
          key: `${aP}lookColLasers`,
          params: {
            live: String(fk.live),
            time: XP(fk.live)
          }
        }
      }
      var Dk;
      if (!wD(ek)) return null;
      const fk = function(kk, ek) {
        for (const ik of kk) {
          const kk = YD(ik.focus, [ek[0], ek[1], ek[2]]);
          if (kk && kk.Vb === mD.LASER_D && ik.lasers[kk.dir]) return {
            entry: ik,
            dir: kk.dir
          }
        }
        return null
      }(kk, ik);
      if (!fk) return {
        key: `${aP}lookLaserNoCollider`
      };
      const {
        entry: Sk,
        dir: bk
      } = fk;
      return Sk.open[bk] ? Sk.live[bk] ? {
        key: Sk.on ? `${aP}lookLaserFiring` : `${aP}lookLaserReady`
      } : {
        key: `${aP}lookLaserBlocked`
      } : {
        key: `${aP}lookLaserClosed`
      }
    }

    function TP(kk, ek) {
      const ik = [];
      for (let Dk = 1; Dk < mD.LASER_D; Dk++) kk & 1 << ek * (mD.LASER_D - 1) + Dk - 1 && ik.push(Dk);
      return ik
    }
    const oP = {
      firing: `${aP}colSlotFiring`,
      ready: `${aP}colSlotReady`,
      blocked: `${aP}colSlotBlocked`,
      empty: `${aP}colSlotEmpty`,
      closed: `${aP}colSlotClosed`
    };

    function ZP(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Sk = mf(kk),
        bk = mf(ek),
        rk = mf(ik),
        Pk = rk.filter(Boolean).length,
        mk = Sk.filter(Boolean).length,
        Mk = [0, 1, 2, 3].map((kk => bk[kk] ? Sk[kk] ? rk[kk] ? Dk ? "firing" : "ready" : "blocked" : (kk => TP(fk, kk).length > 0)(kk) ? "blocked" : "empty" : "closed")),
        Kk = Mk.indexOf("blocked"),
        xk = Kk < 0 && mk > 0 ? Mk.indexOf("empty") : -1;
      return Mk.map(((kk, ek) => {
        const ik = ek === Kk ? {
          key: `${aP}colSlotClear`
        } : ek === xk ? {
          key: `${aP}colSlotAdd`,
          params: {
            time: XP(Math.min(4, Pk + 1))
          }
        } : null;
        return {
          dir: ek,
          tone: kk,
          title: {
            key: "blocked" !== kk || Sk[ek] ? oP[kk] : `${aP}colSlotGap`,
            keys: {
              dir: WP[ek]
            }
          },
          hint: ik
        }
      }))
    }

    function OP(kk) {
      var ek;
      return "noPower" === kk.baf2ColState && kk.baf2ColRxState ? LP({
        baf2RxState: kk.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (ek = kk.baf2ColRxHeat) && void 0 !== ek ? ek : 0
      }) : null
    }

    function gP(kk) {
      const ek = mf(kk.baf2ColSpots).filter(Boolean).length,
        ik = mf(kk.baf2ColLive);
      let Dk = 0,
        fk = 0;
      return mf(kk.baf2ColLasers).forEach(((kk, ek) => {
        kk && (Dk++, fk += ik[ek] ? 0 : 1)
      })), fk > 0 ? {
        key: `${aP}colSubSome`,
        params: {
          blocked: String(fk),
          lasers: String(Dk)
        }
      } : ek < 4 ? {
        key: `${aP}colSubSpots`,
        params: {
          lasers: String(Dk),
          spots: String(ek)
        }
      } : {
        key: `${aP}colSub`,
        params: {
          lasers: String(Dk)
        }
      }
    }

    function GP(kk) {
      const ek = OP(kk);
      if ("idle" === kk.baf2ColRxState && ek) return {
        key: `${aP}colState_noPowerIdle`
      };
      if (ek) return {
        key: `${aP}colState_noPowerReactor`,
        keys: {
          state: ek.label
        }
      };
      if ("noInput" !== kk.baf2ColState) return {
        key: `${aP}colState_${kk.baf2ColState}`
      };
      const ik = String(Math.max(0, mD.NOVA_SA - kk.baf2ColSa)),
        Dk = String(Math.max(0, mD.NOVA_GD - kk.baf2ColGd));
      return "0" !== ik && "0" !== Dk ? {
        key: `${aP}colState_noInput`,
        params: {
          sa: ik,
          gd: Dk
        }
      } : "0" !== ik ? {
        key: `${aP}colState_noStarAlloy`,
        params: {
          sa: ik
        }
      } : "0" !== Dk ? {
        key: `${aP}colState_noGlowDust`,
        params: {
          gd: Dk
        }
      } : {
        key: `${aP}colState_running`
      }
    }

    function NP(kk) {
      return kk.baf2ColP < 0 ? `${aP}colNext` : function(kk) {
        const ek = kk.baf2ColState;
        return kk.baf2ColP >= 0 && ("blocked" === ek || "noLasers" === ek || "noPower" === ek)
      }(kk) ? `${aP}colStalled` : null === RP(kk) ? `${aP}colMaking` : `${aP}colNovaIn`
    }

    function RP(kk) {
      if (kk.baf2ColP < 0 || kk.baf2ColWant <= 0) return null;
      const ek = kk.baf2ColFocusPerS * Math.min(1, kk.baf2ColDraw / kk.baf2ColWant);
      return ek > 0 ? Math.max(0, mD.NOVA_FOCUS - kk.baf2ColP) / ek : null
    }

    function JP(kk, ek) {
      const ik = [];
      for (let Dk = 1; Dk <= 3; Dk++) {
        const fk = [kk[0], kk[1] - Dk, kk[2]];
        if (!ek(fk)) return ik;
        ik.push(fk)
      }
      return []
    }

    function km(kk, ek) {
      const ik = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Dk = 0; Dk < 4; Dk++) {
        const fk = Dk,
          Sk = yD(kk.focus, fk, mD.LASER_D);
        if (kk.lasers[Dk] || !kk.open[Dk] || !ek(Sk)) continue;
        const bk = [];
        for (let ik = 1; ik < mD.LASER_D; ik++) {
          const Dk = yD(kk.focus, fk, ik);
          ek(Dk) || bk.push(Dk)
        }
        ik.supports.push(...JP(Sk, ek)), 0 === bk.length ? ik.free.push(Sk) : (ik.blocked.push(Sk), ik.gaps.push(...bk))
      }
      return ik
    }
    const em = mD.LASER_D - .25,
      im = 4,
      Dm = 2,
      fm = 16;
    const Sm = {
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
        blendMode: Wr.h.Standard,
        soft: !0
      },
      bm = {
        green: Sm,
        pink: {
          ...Sm,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function rm(kk, ek) {
      const ik = {
        ...ek.params
      };
      for (const [fk, Sk] of Object.entries(null !== (Dk = ek.keys) && void 0 !== Dk ? Dk : {})) {
        var Dk;
        ik[fk] = kk(Sk)
      }
      return ik
    }
    const Pm = "buildAFactory2Game:",
      mm = 2 * mD.LASER_D + 1,
      Mm = mD.LASER_D;

    function Km(kk) {
      return kk(`${Pm}colFocusTip`, {
        need: BP(mD.NOVA_FOCUS)
      })
    }

    function xm(kk, ek) {
      return kk(ek.key, rm(kk, ek))
    }

    function nm(kk) {
      const ek = kk.getStatus();
      return {
        status: ek,
        entry: ek ? kk.entryAtRoot(ek.baf2ColAt) : void 0
      }
    }

    function Um(kk, ek) {
      return {
        left: 100 * (Mm + kk) / mm + "%",
        top: 100 * (Mm + ek) / mm + "%"
      }
    }

    function Hm(kk) {
      let {
        status: ek,
        entry: ik
      } = kk;
      const Dk = mf(ek.baf2ColLasers),
        fk = mf(ek.baf2ColSpots),
        Sk = mf(ek.baf2ColLive),
        bk = !0 === (null === ik || void 0 === ik ? void 0 : ik.on),
        rk = mD.LASER_D,
        Pk = [];
      for (let nk = 0; nk < 4; nk++) {
        const [kk, , ek] = pD[nk];
        if (Sk[nk]) {
          const ik = 100 * (rk - 1) / mm,
            Dk = kk + ek > 0 ? 100 * (Mm + 1) / mm : 100 * (Mm - (rk - 1)) / mm,
            fk = 100 * (Mm + .35) / mm,
            Sk = 30 / mm,
            mk = 0 !== kk ? {
              left: `${Dk}%`,
              width: `${ik}%`,
              top: `${fk}%`,
              height: `${Sk}%`
            } : {
              top: `${Dk}%`,
              height: `${ik}%`,
              left: `${fk}%`,
              width: `${Sk}%`
            };
          Pk.push((0, uS.jsx)("i", {
            className: df()("Baf2ColDiagramBeam", {
              Off: !bk
            }),
            style: mk
          }, `beam${nk}`))
        }
        const ik = Dk[nk] ? "Baf2ColDiagramLaser" : fk[nk] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Pk.push((0, uS.jsx)("i", {
          className: ik,
          style: Um(kk * rk, ek * rk)
        }, `spot${nk}`))
      }
      for (let nk = 0; nk < 4; nk++) {
        if (Dk[nk] || !fk[nk]) continue;
        const [kk, , ik] = pD[nk];
        for (const Dk of TP(null !== (mk = ek.baf2ColGaps) && void 0 !== mk ? mk : 0, nk)) {
          var mk;
          Pk.push((0, uS.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Um(kk * Dk, ik * Dk)
          }, `gap${nk},${Dk}`))
        }
      }
      for (const [nk, , Uk] of null !== (Mk = null === ik || void 0 === ik ? void 0 : ik.blockers) && void 0 !== Mk ? Mk : []) {
        var Mk, Kk, xk;
        const kk = nk - (null !== (Kk = null === ik || void 0 === ik ? void 0 : ik.focus[0]) && void 0 !== Kk ? Kk : 0),
          ek = Uk - (null !== (xk = null === ik || void 0 === ik ? void 0 : ik.focus[2]) && void 0 !== xk ? xk : 0);
        Pk.push((0, uS.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Um(kk, ek)
        }, `block${kk},${ek}`))
      }
      return (0, uS.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Pk, (0, uS.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function wm(kk) {
      let {
        status: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)(), Dk = mf(ek.baf2ColLive).filter(Boolean).length;
      return (0, uS.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, uS.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Km(ik),
          children: ik(`${Pm}colLadder`)
        }), (0, uS.jsx)("ul", {
          children: [1, 2, 3, 4].map((kk => (0, uS.jsx)("li", {
            className: df()({
              On: kk === Dk
            }),
            children: ik(`${Pm}colLadderChip`, {
              lasers: String(kk),
              time: XP(kk)
            })
          }, kk)))
        })]
      })
    }

    function lm(kk) {
      let {
        item: ek,
        XM: ik,
        need: Dk,
        cap: fk
      } = kk;
      const {
        t: Sk
      } = (0, qf.D)(), bk = Math.min(ik, Dk);
      return (0, uS.jsxs)("li", {
        className: df()("Baf2ColTile", {
          Short: ik < Dk
        }),
        children: [(0, uS.jsx)(pm, {
          item: ek
        }), (0, uS.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Sk(`${Pm}colOutOf`, {
            amount: String(bk),
            cap: String(Dk)
          })
        }), (0, uS.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, uS.jsx)("i", {
            style: {
              width: 100 * bk / Dk + "%"
            }
          })
        }), ik > Dk && (0, uS.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Sk(`${Pm}colIntakeHeld`, {
            amount: String(ik),
            cap: String(fk)
          })
        })]
      })
    }

    function pm(kk) {
      let {
        item: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)();
      return (0, uS.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, uS.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, uS.jsx)(zf.c, {
            itemName: ek,
            amount: 0
          })
        }), (0, uS.jsx)("span", {
          className: "Baf2ColTileName",
          children: PS(ik, ek)
        })]
      })
    }

    function ym(kk) {
      switch (kk.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function Ym(kk) {
      var ek, ik, fk;
      let {
        store: Sk,
        close: bk
      } = kk;
      const {
        t: rk
      } = (0, qf.D)(), Pk = ob(), {
        status: mk,
        entry: Mk
      } = function(kk) {
        const [ek, ik] = (0, Dk.useState)((() => nm(kk)));
        return (0, Dk.useEffect)((() => (ik(nm(kk)), kk.subscribe((() => {
          ik(nm(kk))
        })))), [kk]), ek
      }(Sk), [Kk, xk] = (0, Dk.useState)(null), nk = null === mk || void 0 === mk ? void 0 : mk.baf2ColHold;
      (0, Dk.useEffect)((() => {
        xk(null)
      }), [nk]);
      const Uk = (0, Dk.useRef)({
          p: -1,
          n: 0
        }),
        Hk = null !== (ek = null === mk || void 0 === mk ? void 0 : mk.baf2ColP) && void 0 !== ek ? ek : -1;
      Hk < Uk.current.p && Uk.current.n++, Uk.current.p = Hk;
      const wk = (0, Dk.useRef)(null),
        [lk] = (0, Dk.useState)((() => {
          return (kk = Sk.heldAtOpen()) === xD || kk === nD ? {
            key: `${aP}colBeltItIn`,
            item: kk
          } : null;
          var kk
        }));
      if (!mk) return null;
      const pk = mk.baf2ColMember,
        yk = mk.baf2ColP >= 0,
        Yk = function(kk, ek) {
          if (kk.baf2ColP >= 0 && kk.baf2ColDraw > 0) {
            const ek = kk.baf2ColWant > 0 ? Math.min(1, kk.baf2ColDraw / kk.baf2ColWant) : 0;
            return {
              focus: kk.baf2ColFocusPerS * ek,
              draw: kk.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === kk.baf2ColState && ek && ek.draw > 0 ? {
            ...ek,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(mk, wk.current);
      wk.current = Yk.draw > 0 ? Yk : null;
      const Lk = "slowed" === mk.baf2ColState || "noPower" === mk.baf2ColState,
        Ck = RP(mk),
        Ak = null !== Kk && void 0 !== Kk ? Kk : mk.baf2ColHold,
        jk = function(kk) {
          var ek, ik;
          return "idle" === kk.baf2ColRxState ? null : null !== (ek = null === (ik = OP(kk)) || void 0 === ik ? void 0 : ik.fix) && void 0 !== ek ? ek : null
        }(mk),
        sk = null === jk && null === lk ? function(kk) {
          var ek;
          const ik = kk.baf2ColSentTo;
          if (!ik) return null;
          const Dk = null !== (ek = kk.baf2ColSentHeld) && void 0 !== ek ? ek : null;
          return {
            key: null === Dk ? `${aP}colNovaSentToMachine` : `${aP}colNovaSentTo`,
            target: ik,
            XM: Dk
          }
        }(mk) : null,
        dk = yk ? rk(`${Pm}colFocusOf`, {
          focus: BP(mk.baf2ColP),
          need: BP(mD.NOVA_FOCUS)
        }) : null;
      return (0, uS.jsx)(sb.e, {
        close: bk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, uS.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, uS.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, uS.jsx)(zf.c, {
                  itemName: MD,
                  amount: 0
                })
              }), (0, uS.jsxs)("div", {
                children: [(0, uS.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: PS(rk, MD)
                }), (0, uS.jsx)("p", {
                  children: xm(rk, gP(mk))
                })]
              })]
            }), (0, uS.jsx)(db.n, {
              onClick: bk
            })]
          }), (0, uS.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, uS.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, uS.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, uS.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: rk(NP(mk), {
                    time: null === Ck ? "" : sS(rk, Ck)
                  })
                }), (0, uS.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, uS.jsx)("i", {
                    style: {
                      width: (yk ? 100 * mk.baf2ColP / mD.NOVA_FOCUS : 0) + "%"
                    }
                  }, Uk.current.n)
                }), (0, uS.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, uS.jsxs)("span", {
                    title: Km(rk),
                    children: [(0, uS.jsx)("b", {
                      children: BP(Yk.focus)
                    }), " ", rk(`${Pm}colFocusPerS`)]
                  }), (0, uS.jsxs)("span", {
                    className: df()("Baf2ColDraw", {
                      Short: Lk
                    }),
                    children: [(0, uS.jsx)(If.d, {
                      name: "bolt"
                    }), Lk ? rk(`${Pm}colDrawOf`, {
                      draw: BP(mk.baf2ColDraw),
                      want: BP(mk.baf2ColWant)
                    }) : rk(`${Pm}colPowerPerS`, {
                      rate: BP(Yk.draw)
                    })]
                  }), null !== dk && (0, uS.jsx)("span", {
                    className: "Soft",
                    children: dk
                  })]
                })]
              }), (0, uS.jsx)("p", {
                className: df()("Baf2ColState", ym(mk)),
                children: xm(rk, GP(mk))
              }), null !== jk && (0, uS.jsx)("p", {
                className: "Baf2ColStateFix",
                children: rk(jk)
              }), null === jk && null !== lk && (0, uS.jsx)("p", {
                className: "Baf2ColStateFix",
                children: rk(lk.key, {
                  item: PS(rk, lk.item)
                })
              }), sk && (0, uS.jsx)("p", {
                className: "Baf2ColStateFix",
                children: rk(sk.key, {
                  target: PS(rk, sk.target),
                  amount: String(null !== (ik = sk.XM) && void 0 !== ik ? ik : 0)
                })
              }), (0, uS.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, uS.jsx)(lm, {
                  item: xD,
                  XM: mk.baf2ColSa,
                  need: mD.NOVA_SA,
                  cap: mD.SA_CAP
                }), (0, uS.jsx)(lm, {
                  item: nD,
                  XM: mk.baf2ColGd,
                  need: mD.NOVA_GD,
                  cap: mD.GD_CAP
                }), (0, uS.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, uS.jsx)(pm, {
                    item: "Nova Matter"
                  }), (0, uS.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: rk(`${Pm}colNovaHeld`, {
                      amount: String(mk.baf2ColOut),
                      cap: String(mD.OUT_CAP)
                    })
                  }), pk && (0, uS.jsx)(db.r, {
                    className: "Baf2ColTake",
                    disabled: 0 === mk.baf2ColOut,
                    onClick: () => {
                      Pk.send(tP(mk, "take"))
                    },
                    children: rk(`${Pm}colTake`)
                  })]
                })]
              }), pk && (0, uS.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Ak,
                className: df()("Baf2ColHold", {
                  On: Ak
                }),
                onClick: kk => {
                  kk.detail > 0 && kk.currentTarget.blur(), xk(!Ak), Pk.send(tP(mk, "hold " + (Ak ? 0 : 1)))
                },
                children: [(0, uS.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, uS.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, uS.jsx)("b", {
                    children: rk(`${Pm}colHold`)
                  }), (0, uS.jsx)("span", {
                    children: rk(`${Pm}colHoldNote`)
                  })]
                })]
              })]
            }), (0, uS.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, uS.jsx)(Hm, {
                status: mk,
                entry: Mk
              }), (0, uS.jsx)("ul", {
                className: "Baf2ColSlots",
                children: ZP(mk.baf2ColLasers, mk.baf2ColSpots, mk.baf2ColLive, Yk.beamsOn, null !== (fk = mk.baf2ColGaps) && void 0 !== fk ? fk : 0).map((kk => (0, uS.jsxs)("li", {
                  className: kk.tone,
                  children: [(0, uS.jsx)("b", {
                    children: xm(rk, kk.title)
                  }), null !== kk.hint && (0, uS.jsx)("span", {
                    children: xm(rk, kk.hint)
                  })]
                }, kk.dir)))
              }), (0, uS.jsx)(wm, {
                status: mk
              })]
            })]
          })]
        })
      })
    }
    const Lm = "buildAFactory2Game:",
      Cm = 36e5,
      Am = 864e5;

    function jm(kk, ek, ik) {
      return Math.max(0, Math.ceil((kk + ek - Math.max(ik, kk)) / 1e3))
    }

    function sm(kk) {
      return kk.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function dm(kk) {
      return "Homestead" === kk
    }

    function Vm(kk) {
      return function(kk) {
        let ek = 0;
        for (const ik of kk) {
          const kk = /^Island ([1-9]\d{0,5})$/.exec(ik);
          kk && (ek = Math.max(ek, Number(kk[1])))
        }
        return `Island ${ek+1}`
      }(kk.map((kk => kk.baf2IslandName)))
    }

    function Fm(kk, ek) {
      return function(kk) {
        return `${Lm}islandsBlocked${kk[0].toUpperCase()}${kk.slice(1)}`
      }("degraded" === kk && 0 === ek ? "stuck" : kk)
    }

    function um(kk) {
      return kk.filter((kk => {
        var ek;
        return !kk.baf2IslandActive && void 0 === kk.baf2IslandUnreadable && void 0 === (null === (ek = kk.baf2IslandCoop) || void 0 === ek ? void 0 : ek.baf2CoopState)
      })).length
    }

    function qm(kk) {
      return "coopMoving" === kk || "coopUnreachable" === kk
    }

    function Im(kk, ek) {
      const ik = ek > 0;
      return {
        change: null === kk && !ik,
        switch: (null === kk || "degraded" === kk || qm(kk)) && !ik,
        rename: "loading" !== kk && "degraded" !== kk && "stuck" !== kk
      }
    }

    function zm(kk, ek) {
      return void 0 === kk || "corrupt" === kk && ek
    }
    const Qm = ab;

    function Em(kk, ek, ik) {
      if (null !== kk && void 0 !== kk && kk.untilGone) {
        var Dk;
        return !("dismiss" === kk.untilGone && void 0 === (null === (Dk = ek.baf2IslandCoop) || void 0 === Dk ? void 0 : Dk.baf2CoopState)) && ik - kk.atMs < 32500
      }
      return void 0 !== kk && ik - kk.atMs < Qm && ek.baf2IslandName === kk.from
    }
    const hm = ab;

    function am(kk) {
      return "core" === (null === kk || void 0 === kk ? void 0 : kk.kind) ? kk.core : "islands" === (null === kk || void 0 === kk ? void 0 : kk.kind) ? kk.backToCore : void 0
    }

    function Wm(kk) {
      return `\0${kk}\0`
    }

    function tm(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Dk = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Sk of Object.keys(ik)) Dk[Sk] = Wm(Sk);
      let fk = Object.keys(Dk).length > 0 ? kk(ek, Dk) : kk(ek);
      for (const [Sk, bk] of Object.entries(ik)) fk = fk.split(Wm(Sk)).join(bk);
      return fk
    }

    function Xm(kk, ek) {
      return kk ? ek ? "enabled" : "disabled" : "hidden"
    }
    const Bm = {
      removed: `${Lm}islandsCoopRemoved`,
      deleted: `${Lm}islandsCoopDeleted`,
      notReady: `${Lm}islandsCoopNotReady`,
      gone: `${Lm}islandsCoopGone`
    };

    function cm(kk) {
      var ek;
      return "member" !== (null === (ek = kk.baf2IslandCoop) || void 0 === ek ? void 0 : ek.baf2CoopRole) && "newer" !== kk.baf2IslandUnreadable
    }

    function Tm(kk, ek, ik, Dk, fk, Sk) {
      const bk = kk.baf2IslandActive,
        rk = kk.baf2IslandUnreadable,
        Pk = kk.baf2IslandCoop,
        mk = function(kk, ek, ik) {
          return {
            switch: kk.switch && void 0 === ek,
            delete: kk.change && zm(ek, ik)
          }
        }(ek, rk, Dk),
        Mk = bk && void 0 !== Pk && void 0 === Pk.baf2CoopState && "coopUnreachable" === Sk,
        Kk = {
          switch: Xm((!bk || Mk) && void 0 === rk, Mk || mk.switch),
          switchLabel: Mk ? "tryAgain" : "switch",
          rename: Xm(!0, ek.rename),
          delete: Xm(!bk, mk.delete),
          deleteWaits: !bk && zm(rk, Dk),
          people: Xm(void 0 !== kk.baf2IslandInvitable || fk && bk && void 0 === rk && void 0 === Pk, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        xk = !bk && mk.delete;
      if (void 0 === Pk) return ik ? {
        ...Kk,
        delete: Xm(!bk, !1),
        deleteWaits: !1,
        note: xk ? {
          key: `${Lm}islandsCoopKeepOwn`
        } : null
      } : Kk;
      const nk = Pk.baf2CoopState,
        Uk = Pk.baf2CoopMembers.length > 1,
        Hk = {
          ...Kk,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== nk && "member" === Pk.baf2CoopRole) return {
        ...Hk,
        dismiss: Xm(!0, ek.rename),
        note: {
          key: Bm[nk],
          names: {
            owner: Pk.baf2CoopOwner
          }
        }
      };
      if (void 0 !== nk) {
        let kk = {
          key: `${Lm}islandsCoopOwnLost`
        };
        return xk && Uk ? kk = {
          key: `${Lm}islandsCoopDeleteMembers`
        } : xk && ik && (kk = {
          key: `${Lm}islandsCoopKeepOwn`
        }), {
          ...Hk,
          delete: Xm(!bk, mk.delete && !Uk && !ik),
          deleteWaits: Kk.deleteWaits && !Uk && !ik,
          note: kk
        }
      }
      if ("member" === Pk.baf2CoopRole) return {
        ...Kk,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Xm(!0, bk ? ek.switch : ek.rename)
      };
      const wk = Pk.baf2CoopManageHere;
      let lk = null;
      var pk;
      wk || bk ? xk && Uk ? lk = {
        key: `${Lm}islandsCoopDeleteMembers`
      } : xk && ik && (lk = {
        key: `${Lm}islandsCoopKeepOwn`
      }) : lk = {
        key: null !== (pk = Pk.baf2CoopLeft) && void 0 !== pk && pk.length ? `${Lm}islandsCoopManageThereClaim` : `${Lm}islandsCoopManageThere`
      };
      return {
        ...Kk,
        rename: Xm(!0, ek.rename && wk),
        delete: Xm(!bk, mk.delete && !Uk && !ik),
        deleteWaits: Kk.deleteWaits && !Uk && !ik,
        people: "enabled",
        peopleLabel: "players",
        unshare: Xm(wk && bk && !Uk, ek.change),
        remove: wk,
        note: lk
      }
    }

    function om(kk) {
      var ek;
      const ik = kk.baf2IslandCoop;
      if ("owner" !== (null === ik || void 0 === ik ? void 0 : ik.baf2CoopRole) || void 0 !== ik.baf2CoopState || null === (ek = ik.baf2CoopLeft) || void 0 === ek || !ek.length) return null;
      const Dk = kk.baf2IslandActive && ik.baf2CoopManageHere;
      return {
        left: ik.baf2CoopLeft,
        claim: Dk,
        goThere: !Dk && ik.baf2CoopManageHere
      }
    }

    function Zm(kk) {
      return kk.baf2CoopMembers.length >= kk.baf2CoopMax
    }

    function Om(kk, ek, ik) {
      return void 0 !== kk && ek < kk.answer && ik - kk.atMs < Qm
    }
    const gm = "buildAFactory2Game:";

    function Gm(kk, ek) {
      return {
        onKeyDown: ik => {
          ik.stopPropagation(), ik.nativeEvent.isComposing || 229 === ik.nativeEvent.keyCode || ("Enter" === ik.key ? (ik.preventDefault(), kk()) : "Escape" === ik.key && (ik.preventDefault(), ek()))
        }
      }
    }

    function Nm(kk) {
      return {
        onKeyDown: ek => {
          "Escape" !== ek.key || ek.nativeEvent.isComposing || (ek.preventDefault(), ek.stopPropagation(), kk())
        }
      }
    }

    function Rm(kk) {
      kk.currentTarget.select()
    }

    function Jm(kk, ek) {
      (0, Dk.useEffect)((() => {
        var ik;
        kk && (null === (ik = ek.current) || void 0 === ik || ik.scrollIntoView({
          block: "nearest"
        }))
      }), [kk, ek])
    }

    function kM(kk) {
      const [ek, ik] = (0, Dk.useState)(null);
      return (0, Dk.useEffect)((() => {
        const ek = document.querySelector(".UiRequests"),
          Dk = kk.current;
        if (!ek || !Dk || "undefined" === typeof ResizeObserver) return;
        const fk = () => {
          const kk = ek.getBoundingClientRect(),
            fk = Dk.getBoundingClientRect(),
            Sk = Dk.parentElement,
            bk = Sk && parseFloat(getComputedStyle(Sk).paddingTop) || 0,
            rk = function(kk, ek, ik, Dk) {
              if (!kk || kk.height <= 0 || kk.right <= ek.left || kk.left >= ek.right) return null;
              const fk = Math.max(Dk, kk.bottom + 8);
              return {
                marginTop: Math.round(fk - Dk),
                maxHeight: Math.max(0, Math.floor(ik - fk - Dk))
              }
            }(kk, fk, window.innerHeight, bk);
          ik((kk => (null === kk || void 0 === kk ? void 0 : kk.marginTop) === (null === rk || void 0 === rk ? void 0 : rk.marginTop) && (null === kk || void 0 === kk ? void 0 : kk.maxHeight) === (null === rk || void 0 === rk ? void 0 : rk.maxHeight) ? kk : rk))
        };
        fk();
        const Sk = new ResizeObserver(fk);
        return Sk.observe(ek), window.addEventListener("resize", fk), () => {
          Sk.disconnect(), window.removeEventListener("resize", fk)
        }
      }), [kk]), ek
    }

    function eM() {
      (0, Dk.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function iM(kk) {
      (0, Dk.useEffect)((() => {
        var ek;
        null === (ek = kk.current) || void 0 === ek || ek.focus()
      }), [kk])
    }

    function DM(kk) {
      const [ek, ik] = (0, Dk.useState)(Date.now);
      return (0, Dk.useEffect)((() => {
        const ek = window.setInterval((() => {
          ik(Date.now())
        }), kk);
        return () => {
          window.clearInterval(ek)
        }
      }), [kk]), ek
    }

    function fM(kk) {
      let {
        tier: ek,
        t: ik
      } = kk;
      const {
        kind: Dk,
        short: fk
      } = wk(ek), Sk = nk(ek, Uk), bk = ik(`${gm}${Sk.key}`, {
        ...Sk.params,
        name: ik(`${gm}${lk(ek).nameKey}`)
      });
      return (0, uS.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, uS.jsx)("span", {
          className: df()("Baf2IslandTierPip", {
            Stage: "tier" !== Dk
          }),
          "aria-hidden": "true",
          children: fk
        }), bk]
      })
    }

    function SM(kk) {
      let {
        note: ek,
        className: ik,
        t: Dk
      } = kk;
      return (0, uS.jsx)("p", {
        className: df()("Baf2IslandNote", ik),
        children: tm(Dk, ek.key, ek.names, ek.params)
      })
    }
    const bM = "buildAFactory2Game:";

    function rM(kk) {
      let {
        message: ek,
        arrivedAtMs: ik,
        close: fk,
        leave: Sk
      } = kk;
      const bk = ob(),
        {
          t: rk
        } = (0, qf.D)(),
        Pk = DM(1e3),
        mk = (0, Dk.useRef)(null);
      eM(), (0, Dk.useEffect)((() => {
        var kk;
        null === (kk = mk.current) || void 0 === kk || kk.focus()
      }), []);
      const Mk = jm(ik, ek.baf2TransferInMs, Pk),
        Kk = ik + ek.baf2TransferInMs - 1e3,
        [xk, nk] = (0, Dk.useState)(null);
      (0, Dk.useEffect)((() => {
        const kk = window.setTimeout((() => {
          nk(Kk)
        }), Math.max(0, Kk - Date.now()));
        return () => {
          window.clearTimeout(kk)
        }
      }), [Kk]);
      const Uk = xk === Kk || Pk >= Kk,
        Hk = ek.baf2TransferIsland,
        wk = ek.baf2TransferOwner;
      return (0, uS.jsx)(sb.e, {
        close: fk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, uS.jsxs)("section", {
          ref: mk,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsxs)("div", {
              children: [(0, uS.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === wk ? tm(rk, `${bM}islandsTransferOwn`, {
                  island: Hk
                }) : tm(rk, `${bM}islandsTransfer`, {
                  island: Hk,
                  owner: wk
                })
              }), (0, uS.jsx)("p", {
                children: Uk ? rk(`${bM}islandsTransferNow`) : rk(`${bM}islandsTransferIn`, {
                  time: sS(rk, Mk)
                })
              })]
            }), (0, uS.jsx)(db.n, {
              ariaLabel: rk(`${bM}islandsClose`),
              onClick: fk
            })]
          }), !Uk && (0, uS.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, uS.jsx)("p", {
              className: "Baf2TransferNote",
              children: rk(`${bM}islandsTransferNote`)
            }), (0, uS.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, uS.jsx)(db.f, {
                onClick: () => {
                  bk.send("baf2coopstay"), Sk()
                },
                children: rk(`${bM}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var PM = ik(1406),
      mM = ik(1108),
      MM = ik.n(mM);
    const KM = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const xM = "buildAFactory2Game:",
      nM = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function UM(kk, ek, ik) {
      return void 0 === ek ? ik : "string" === typeof ek ? ek : Array.isArray(ek) ? ek.map((ek => "string" === typeof ek ? ek : "translationKey" in ek ? kk(ek.translationKey) : "")).join("") : kk(ek.translationKey)
    }

    function HM(kk) {
      const ek = {};
      for (const [ik, Dk] of Object.entries(null !== kk && void 0 !== kk ? kk : {})) ek[ik] = Dk < 0 ? jS(Dk) : Dk.toLocaleString("en-US");
      return ek
    }

    function wM(kk, ek) {
      const ik = ek ? "touch" : "mouse";
      return {
        use: kk(`${xM}lookUse_${ik}`),
        Use: kk(`${xM}lookUseStart_${ik}`)
      }
    }
    const lM = (0, Dk.memo)((function(kk) {
      let {
        item: ek
      } = kk;
      return (0, uS.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, uS.jsx)(zf.c, {
          itemName: ek,
          amount: 0
        })
      })
    }));

    function pM(kk) {
      let {
        label: ek,
        percent: ik,
        progress: Dk
      } = kk;
      return (0, uS.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, uS.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${ek}: ${Dk}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": ik,
          children: (0, uS.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${ik}%`
            }
          })
        }), (0, uS.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Dk
        })]
      })
    }

    function yM(kk) {
      let {
        chips: ek
      } = kk;
      return (0, uS.jsx)("span", {
        className: "Baf2QuestChips",
        children: ek.map((kk => {
          let [ek, ik, Dk] = kk;
          const fk = ik >= Dk;
          return (0, uS.jsxs)("span", {
            className: df()("Baf2QuestChip", {
              Met: fk
            }),
            children: [(0, uS.jsx)(lM, {
              item: ek
            }), (0, uS.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: fk ? `\u2713${Dk}` : `${ik}/${Dk}`
            })]
          }, ek)
        }))
      })
    }

    function YM(kk, ek) {
      const {
        key: ik,
        params: Dk
      } = nk(ek, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return kk(`${xM}${ik}`, {
        ...Dk,
        name: kk(`${xM}${lk(ek).nameKey}`)
      })
    }

    function LM(kk) {
      let {
        core: ek,
        t: ik
      } = kk;
      const [Dk, fk] = ek, Sk = fk > 0 ? Math.floor(100 * Dk / fk) : 100;
      return (0, uS.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": ik(`${xM}questCoreLabel`, {
          have: String(Dk),
          need: String(fk)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Sk,
        children: [(0, uS.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: ik(`${xM}questCore`, {
            percent: String(Sk)
          })
        }), (0, uS.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, uS.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Sk}%`
            }
          })
        })]
      })
    }

    function CM(kk) {
      let {
        rows: ek,
        t: ik
      } = kk;
      const Dk = ek.filter((kk => kk.done)).length;
      return (0, uS.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": ik(`${xM}questStepsProgress`, {
          done: String(Dk),
          total: String(ek.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": ek.length,
        "aria-valuenow": Dk,
        children: ek.map((kk => (0, uS.jsx)("span", {
          className: df()("Baf2QuestSegment", {
            Done: kk.done,
            Current: kk.current
          })
        }, kk.id)))
      })
    }
    const AM = (0, Dk.memo)(sM, jM);

    function jM(kk, ek) {
      const ik = ik => kk.view.itemNames[ik] === ek.view.itemNames[ik];
      return kk.t === ek.t && kk.extra === ek.extra && (null === kk.row.item || ik(kk.row.item)) && kk.row.madeFor.every(ik) && kk.row.also.every(ik) && MM()(kk.row, ek.row)
    }

    function sM(kk) {
      let {
        row: ek,
        view: ik,
        t: Dk,
        extra: fk
      } = kk;
      const {
        isTouchScreen: Sk
      } = (0, Af.n)(["isTouchScreen"]), bk = ek.item ? function(kk, ek, ik) {
        return 1 !== ik && KM.has(kk) ? uf(ek) : null
      }(ek.key, ek.item, ek.total) : null, rk = bk ? Dk(bk) : ek.item ? UM(Dk, ik.itemNames[ek.item], ek.item) : "", Pk = ek.also.map((kk => UM(Dk, ik.itemNames[kk], kk))), mk = Pk.join(", "), Mk = function(kk, ek) {
        var ik;
        return ek.length < 2 ? null !== (ik = ek[0]) && void 0 !== ik ? ik : "" : kk(`${xM}listAnd`, {
          rest: ek.slice(0, -1).join(kk(`${xM}listComma`)),
          last: ek[ek.length - 1]
        })
      }(Dk, [rk, ...Pk]), Kk = Dk(`${xM}${ek.key}`, {
        ...wM(Dk, Sk),
        ...HM(ek.params),
        item: rk,
        also: mk,
        itemList: Mk,
        total: String(ek.total)
      }), [xk, ...nk] = Kk.split("\n"), Uk = ek.total > 1 && !ek.done && !ek.away;
      return (0, uS.jsxs)("li", {
        className: df()("Baf2QuestStep", {
          Done: ek.done,
          Current: ek.current,
          JustFinished: ek.justFinished,
          Away: ek.away
        }),
        children: [!ek.done && null !== ek.item && (0, uS.jsx)(lM, {
          item: ek.item
        }), (ek.done || null === ek.item) && (0, uS.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: ek.done ? "\u2713" : "\u25cb"
        }), (0, uS.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, uS.jsx)("strong", {
            children: xk
          }), nk.length > 0 && (0, uS.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: nk.join(" ")
          }), !ek.done && ek.madeFor.length > 0 && (0, uS.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Dk("buildAFactory2Game:questRowFor", {
              items: ek.madeFor.map((kk => UM(Dk, ik.itemNames[kk], kk))).join(" \u2192 ")
            })
          }), Uk && (0, uS.jsx)(pM, {
            label: xk,
            percent: Math.round(100 * ek.amount / ek.total),
            progress: `${ek.amount.toLocaleString("en-US")}/${ek.total.toLocaleString("en-US")}`
          }), !ek.done && !ek.away && ek.chips && ek.chips.length > 0 && (0, uS.jsx)(yM, {
            chips: ek.chips
          }), fk]
        })]
      })
    }
    const dM = "buildAFactory2Game:",
      VM = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      FM = {
        on: `${dM}tutorialButtonOn`,
        hud: `${dM}tutorialButtonHud`,
        off: `${dM}tutorialButtonOff`
      },
      uM = {
        on: `${dM}tutorialPickedOn`,
        hud: `${dM}tutorialPickedHud`,
        off: `${dM}tutorialPickedOff`
      };
    class qM {
      constructor(kk, ek, ik) {
        this.commands = kk, this.quests = ek, this.toasts = ik
      }
      next() {
        const kk = function(kk) {
            return Ik[(Ik.indexOf(kk) + 1) % Ik.length]
          }(this.quests.get().tutorial),
          ek = this.quests.setTutorial(kk);
        this.commands.send(`baf2tutorial ${kk} ${ek}`), this.toasts.show({
          baf2ToastText: [(0, Qk.Md)({
            translationKey: uM[kk]
          }, Qk.D.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function IM(kk, ek) {
      let [ik, Dk] = ek;
      return kk(`${xM}${ik}`, HM(Dk))
    }

    function zM(kk) {
      let [ek, ik] = kk;
      return ek + JSON.stringify(ik)
    }

    function QM(kk) {
      let {
        goal: ek,
        t: ik
      } = kk;
      return ek ? (0, uS.jsx)("span", {
        className: "Baf2BookGoal",
        children: ik(`${xM}${ek}`)
      }) : null
    }

    function vM(kk) {
      let {
        view: ek,
        t: ik
      } = kk;
      if (!ek.name) return null;
      const Dk = Of(ek.rows);
      return (0, uS.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, uS.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: ik(`${xM}currentQuest`)
        }), (0, uS.jsx)("strong", {
          className: "Baf2BookTitle",
          children: IM(ik, ek.name)
        }), (0, uS.jsx)(QM, {
          goal: ek.goal,
          t: ik
        }), Dk.length > 1 && (0, uS.jsx)(CM, {
          rows: Dk,
          t: ik
        }), (0, uS.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: ek.rows.map((kk => (0, uS.jsx)(AM, {
            row: kk,
            view: ek,
            t: ik
          }, kk.id)))
        }), ek.reward && (0, uS.jsxs)("span", {
          className: "Baf2BookReward",
          children: [ik(`${xM}questReward`), (0, uS.jsx)(lM, {
            item: ek.reward
          }), UM(ik, ek.itemNames[ek.reward], ek.reward)]
        })]
      })
    }

    function EM(kk) {
      let {
        quest: ek,
        upcoming: ik,
        t: Dk
      } = kk;
      return (0, uS.jsxs)("li", {
        className: df()("Baf2BookQuest", {
          Done: ek[3],
          Upcoming: ik
        }),
        children: [(0, uS.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: ek[3] ? "\u2713" : "\u25cb"
        }), (0, uS.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, uS.jsx)("strong", {
            className: "Baf2BookTitle",
            children: IM(Dk, ek)
          }), (0, uS.jsx)(QM, {
            goal: ek[2],
            t: Dk
          })]
        })]
      })
    }

    function hM(kk) {
      let {
        done: ek,
        total: ik,
        t: Dk
      } = kk;
      const fk = ik > 0 ? Math.round(100 * ek / ik) : 0,
        Sk = Dk(`${xM}questBookChapterProgress`, {
          done: String(ek),
          total: String(ik)
        });
      return (0, uS.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, uS.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Sk,
          "aria-valuemin": 0,
          "aria-valuemax": ik,
          "aria-valuenow": ek,
          children: (0, uS.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${fk}%`
            }
          })
        }), (0, uS.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Sk
        })]
      })
    }

    function aM(kk) {
      let {
        view: ek,
        tier: ik,
        quests: Dk,
        t: fk
      } = kk;
      const Sk = ik === ek.tier,
        bk = (null !== Dk && void 0 !== Dk ? Dk : []).filter((kk => !kk[4])),
        rk = (null !== Dk && void 0 !== Dk ? Dk : []).filter((kk => kk[4])),
        Pk = bk.filter((kk => kk[3])).length,
        mk = Sk && ek.name ? zM(ek.name) : null,
        Mk = bk.findIndex((kk => !kk[3] && zM(kk) === mk));
      return (0, uS.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, uS.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, uS.jsx)("h3", {
            children: YM(fk, ik)
          }), bk.length > 0 && (0, uS.jsx)(hM, {
            done: Pk,
            total: bk.length,
            t: fk
          }), Sk && ek.core && (0, uS.jsx)(LM, {
            core: ek.core,
            t: fk
          })]
        }), (0, uS.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Dk && Sk && (0, uS.jsx)(vM, {
            view: ek,
            t: fk
          }), bk.map(((kk, ik) => ik === Mk ? (0, uS.jsx)(vM, {
            view: ek,
            t: fk
          }, zM(kk)) : (0, uS.jsx)(EM, {
            quest: kk,
            upcoming: !kk[3],
            t: fk
          }, zM(kk))))]
        }), Sk && ek.side && (0, uS.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, uS.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: fk(`${xM}questSide`)
          }), (0, uS.jsx)("strong", {
            className: "Baf2BookTitle",
            children: IM(fk, ek.side.name)
          }), (0, uS.jsx)(QM, {
            goal: ek.side.goal,
            t: fk
          }), (0, uS.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, uS.jsx)(AM, {
              row: ek.side.row,
              view: ek,
              t: fk
            })
          })]
        }), rk.length > 0 && (0, uS.jsxs)(uS.Fragment, {
          children: [(0, uS.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: fk(`${xM}questBookSidesDone`)
          }), (0, uS.jsx)("ol", {
            className: "Baf2BookQuests",
            children: rk.map((kk => (0, uS.jsx)(EM, {
              quest: kk,
              upcoming: !1,
              t: fk
            }, zM(kk))))
          })]
        })]
      })
    }

    function WM(kk) {
      var ek, ik, Sk;
      let {
        store: bk,
        tutorial: rk,
        close: Pk
      } = kk;
      const {
        t: mk
      } = (0, qf.D)(), Kk = (0, PM.e)(Wf, bk.get()), xk = null !== (ek = Kk.tier) && void 0 !== ek ? ek : 1, [nk, Uk] = (0, Dk.useState)(null), lk = (null === nk || void 0 === nk ? void 0 : nk.at) === xk ? nk.tier : xk, pk = (0, Dk.useRef)(null), yk = null !== Kk.chapters;
      (0, Dk.useEffect)((() => {
        var kk;
        pk.current && (pk.current.scrollTop = 0);
        const ek = null === (kk = pk.current) || void 0 === kk ? void 0 : kk.querySelector(".Baf2BookQuest.Current");
        if (pk.current && ek) {
          const kk = ek.getBoundingClientRect().bottom - pk.current.getBoundingClientRect().bottom;
          kk > 0 && (pk.current.scrollTop += Math.min(kk, ek.getBoundingClientRect().top - pk.current.getBoundingClientRect().top))
        }
      }), [lk, yk]);
      const Yk = null === (ik = Kk.chapters) || void 0 === ik ? void 0 : ik.find((kk => {
        let [ek] = kk;
        return ek === lk
      }));
      return (0, uS.jsx)(sb.e, {
        close: Pk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, uS.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: nM,
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: mk(`${xM}questBookTitle`)
            }), (0, uS.jsx)(db.r, {
              className: "Baf2BookTutorialButton",
              disabled: !Kk.tutorialKnown,
              ariaLabel: mk(FM[Kk.tutorial]),
              title: mk(FM[Kk.tutorial]),
              onClick: () => {
                rk.next()
              },
              children: (0, uS.jsx)(If.d, {
                name: VM[Kk.tutorial]
              })
            }), (0, uS.jsx)(db.n, {
              onClick: Pk
            })]
          }), (0, uS.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": mk(`${xM}questBookChapters`),
            "data-pad-initial-area": !0,
            children: fk.slice(0, Mk()).map(((kk, ek) => {
              const ik = ek + 1,
                {
                  kind: Dk,
                  short: fk
                } = wk(ik),
                Sk = Hk(ik, xk),
                bk = Sk ? mk(`${xM}coreAtomicHidden`) : YM(mk, ik);
              return (0, uS.jsx)("li", {
                children: (0, uS.jsx)("button", {
                  type: "button",
                  className: df()({
                    Stage: "tier" !== Dk,
                    Atomic: "atomic" === Dk,
                    Current: ik === xk,
                    Selected: ik === lk
                  }),
                  disabled: ik > xk,
                  "aria-pressed": ik === lk,
                  "aria-label": bk,
                  title: Sk ? void 0 : bk,
                  onClick: () => {
                    Uk({
                      tier: ik,
                      at: xk
                    })
                  },
                  children: Sk ? "?" : fk
                })
              }, kk.nameKey)
            }))
          }), (0, uS.jsxs)("div", {
            ref: pk,
            className: "Baf2BookBody",
            children: [of(Kk) && lk === xk && (0, uS.jsx)("p", {
              className: "Baf2BookEmpty",
              children: mk(`${xM}questBookAllDone`)
            }), (0, uS.jsx)(aM, {
              view: Kk,
              tier: lk,
              quests: null !== (Sk = null === Yk || void 0 === Yk ? void 0 : Yk[1]) && void 0 !== Sk ? Sk : null,
              t: mk
            })]
          })]
        })
      })
    }
    const tM = "buildAFactory2Game:";

    function XM(kk) {
      let {
        tiers: ek,
        from: ik,
        tier: Dk,
        shown: fk,
        Un: Sk
      } = kk;
      const {
        t: bk
      } = (0, qf.D)(), rk = ek.map(((kk, ek) => {
        const rk = ik + ek,
          {
            kind: Pk,
            short: mk
          } = wk(rk),
          Mk = Hk(rk, Dk);
        return (0, uS.jsx)("li", {
          children: (0, uS.jsx)("button", {
            type: "button",
            className: df()({
              Stage: "tier" !== Pk,
              Silhouette: Mk,
              Reached: rk <= Dk,
              Current: rk === Dk,
              Next: rk === Dk + 1,
              Selected: rk === fk
            }),
            disabled: Mk,
            "aria-pressed": rk === fk,
            "aria-label": Mk ? bk(`${tM}coreAtomicHidden`) : void 0,
            title: Mk ? void 0 : bk(`${tM}${kk.nameKey}`),
            onClick: () => {
              Sk(rk)
            },
            children: Mk ? "?" : mk
          })
        }, kk.nameKey)
      }));
      return (0, uS.jsx)(uS.Fragment, {
        children: rk
      })
    }

    function BM(kk) {
      let {
        id: ek,
        label: ik,
        tiers: Dk,
        from: fk,
        ...Sk
      } = kk;
      return (0, uS.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, uS.jsx)("span", {
          id: ek,
          className: "Baf2CoreLadderLabel",
          children: ik
        }), (0, uS.jsx)("ol", {
          "aria-labelledby": ek,
          children: (0, uS.jsx)(XM, {
            ...Sk,
            tiers: Dk,
            from: fk
          })
        })]
      })
    }

    function cM(kk) {
      const {
        t: ek
      } = (0, qf.D)(), ik = fk.findIndex((kk => void 0 !== kk.stage)), Dk = fk.findIndex((kk => void 0 !== kk.reactorTier)), Sk = ik < 0 ? fk : fk.slice(0, ik), bk = ik < 0 ? [] : fk.slice(ik, Dk < 0 ? void 0 : Dk), Pk = Dk < 0 || !rk() ? [] : fk.slice(Dk);
      return (0, uS.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, uS.jsx)(BM, {
          ...kk,
          id: "baf2CoreTiersLabel",
          label: ek(`${tM}coreTiersLabel`),
          tiers: Sk,
          from: 1
        }), bk.length > 0 && (0, uS.jsx)(BM, {
          ...kk,
          id: "baf2CoreStagesLabel",
          label: ek(`${tM}coreStagesLabel`),
          tiers: bk,
          from: ik + 1
        }), Pk.length > 0 && (0, uS.jsx)(BM, {
          ...kk,
          id: "baf2CoreAtomicLabel",
          label: ek(`${tM}coreAtomicLabel`),
          tiers: Pk,
          from: Dk + 1
        })]
      })
    }
    const TM = "buildAFactory2Game:";

    function oM(kk) {
      let {
        item: ek,
        itemNames: ik,
        children: Dk
      } = kk;
      return (0, uS.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, uS.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, uS.jsx)(zf.c, {
            itemName: ek,
            amount: 0
          })
        }), (0, uS.jsx)(Qf.e, {
          text: ik[ek]
        }), Dk]
      })
    }

    function ZM(kk) {
      const ek = new Map;
      for (const {
          block: Dk
        }
        of kk.newDeposits) {
        var ik;
        ek.set(Dk, (null !== (ik = ek.get(Dk)) && void 0 !== ik ? ik : 0) + 1)
      }
      return [...ek]
    }

    function OM(kk) {
      let {
        value: ek,
        label: ik,
        more: Dk
      } = kk;
      return (0, uS.jsxs)("li", {
        children: [(0, uS.jsx)("strong", {
          children: ek
        }), (0, uS.jsx)("span", {
          children: ik
        }), Dk > 0 && (0, uS.jsxs)("em", {
          children: ["+", Dk]
        })]
      })
    }

    function gM(kk) {
      let {
        items: ek,
        itemNames: ik
      } = kk;
      const {
        t: fk
      } = (0, qf.D)(), [Sk, bk] = (0, Dk.useState)(null), rk = null !== Sk && ek.includes(Sk) ? Sk : null;
      return (0, uS.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, uS.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: fk(`${TM}coreRewardUnlocks`)
        }), (0, uS.jsx)("ul", {
          children: ek.map((kk => (0, uS.jsx)("li", {
            children: (0, uS.jsx)("button", {
              type: "button",
              className: df()("Baf2PanelIcon", {
                Picked: kk === rk
              }),
              title: PS(fk, kk),
              "aria-label": PS(fk, kk),
              "aria-pressed": kk === rk,
              onClick: () => {
                bk(kk === rk ? null : kk)
              },
              children: (0, uS.jsx)(zf.c, {
                itemName: kk,
                amount: 0
              })
            })
          }, kk)))
        }), (0, uS.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== rk && (0, uS.jsxs)(uS.Fragment, {
            children: [(0, uS.jsx)(Qf.e, {
              text: ik[rk]
            }), " \xb7 ", (0, uS.jsx)(Qf.e, {
              text: ik[uk(rk)]
            })]
          }), null === rk && fk(`${TM}coreRecipeTap`)]
        })]
      })
    }

    function GM(kk) {
      var ek, ik;
      let {
        def: Dk,
        tier: fk,
        itemNames: Sk
      } = kk;
      const {
        t: bk
      } = (0, qf.D)(), rk = fk > 1 ? lk(fk - 1) : void 0, Pk = Math.round(2 * Dk.islandRadius), mk = rk ? Math.round(2 * rk.islandRadius) : Pk, Mk = fk >= 3 ? jD(fk) : null;
      return (0, uS.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, uS.jsxs)("ul", {
          className: df()("Baf2CoreStats", {
            Four: null !== Mk
          }),
          children: [(0, uS.jsx)(OM, {
            value: `${Pk}\xd7${Pk}`,
            label: bk(`${TM}coreStatIsland`),
            more: Pk - mk
          }), (0, uS.jsx)(OM, {
            value: String(Dk.machineAllowance),
            label: bk(`${TM}coreStatMachines`),
            more: Dk.machineAllowance - (null !== (ek = null === rk || void 0 === rk ? void 0 : rk.machineAllowance) && void 0 !== ek ? ek : Dk.machineAllowance)
          }), (0, uS.jsx)(OM, {
            value: String(Dk.beltAllowance),
            label: bk(`${TM}coreStatBelts`),
            more: Dk.beltAllowance - (null !== (ik = null === rk || void 0 === rk ? void 0 : rk.beltAllowance) && void 0 !== ik ? ik : Dk.beltAllowance)
          }), null !== Mk && (0, uS.jsx)(OM, {
            value: String(Mk),
            label: bk(`${TM}coreStatStorage`),
            more: Mk - (rk ? jD(fk - 1) : Mk)
          })]
        }), Dk.reward && (0, uS.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, uS.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: bk(`${TM}coreRewardItem`)
          }), (0, uS.jsx)(oM, {
            item: Dk.reward,
            itemNames: Sk
          })]
        }), Dk.newDeposits.length > 0 && (0, uS.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, uS.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: bk(Dk.newDeposits.length > 1 ? `${TM}coreRewardDeposits` : `${TM}coreRewardDeposit`)
          }), ZM(Dk).map((kk => {
            let [ek, ik] = kk;
            return (0, uS.jsx)(oM, {
              item: ek,
              itemNames: Sk,
              children: ik > 1 && ` \xd7${ik}`
            }, ek)
          }))]
        }), Dk.unlocks.length > 0 && (0, uS.jsx)(gM, {
          items: Dk.unlocks,
          itemNames: Sk
        }), (0, uS.jsx)(NM, {
          tier: fk
        })]
      })
    }

    function NM(kk) {
      let {
        tier: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)(), Dk = yf[ek];
      if (!Dk) return null;
      const fk = pf(ek, 0, 0).barrierMax !== pf(ek - 1, 0, 0).barrierMax;
      return (0, uS.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, uS.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, uS.jsx)(zf.c, {
            itemName: fk ? xf.Chestplate : Kf,
            amount: 0
          })
        }), ik(`${TM}gearPerkLine`, {
          perk: ik(`${TM}${Dk}`)
        })]
      })
    }

    function RM(kk, ek) {
      return null === kk ? ek : kk.value
    }

    function JM(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === kk || ik - kk.atMs >= Dk ? null : fk(kk.value, ek) ? kk.armed ? null : kk : kk.armed ? kk : {
        ...kk,
        armed: !0
      }
    }

    function kK(kk, ek) {
      const ik = ek.filter((ek => {
        var ik;
        return !1 !== (null === (ik = kk.get(ek)) || void 0 === ik ? void 0 : ik.value)
      }));
      for (const [Dk, fk] of kk) fk.value && !ek.includes(Dk) && ik.push(Dk);
      return ik
    }

    function eK(kk, ek, ik, fk) {
      const [Sk, bk] = (0, Dk.useState)((() => new Map)), rk = () => {
        bk((ek => function(kk, ek, ik, Dk) {
          var fk;
          let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            bk = null;
          for (const [rk, Pk] of kk) {
            const fk = JM(Pk, ek(rk), ik, Dk, Sk);
            fk !== Pk && (bk ??= new Map(kk), null === fk ? bk.delete(rk) : bk.set(rk, fk))
          }
          return null !== (fk = bk) && void 0 !== fk ? fk : kk
        }(ek, kk, Date.now(), ik, fk)))
      };
      (0, Dk.useEffect)((() => {
        rk()
      }), [ek, ik]), (0, Dk.useEffect)((() => {
        if (0 === Sk.size) return;
        const kk = Math.min(...[...Sk.values()].map((kk => kk.atMs))),
          ek = setTimeout(rk, Math.max(0, kk + ik - Date.now()) + 1);
        return () => {
          clearTimeout(ek)
        }
      }), [Sk, ek, ik]);
      return [Sk, (ek, ik) => {
        bk((Dk => {
          const Sk = new Map(Dk);
          return Sk.set(ek, function(kk, ek, ik) {
            return {
              value: kk,
              atMs: ik,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(kk, ek)
            }
          }(ik, kk(ek), Date.now(), fk)), Sk
        }))
      }]
    }
    const iK = "buildAFactory2Game:";

    function DK(kk) {
      let {
        message: ek,
        itemNames: ik
      } = kk;
      const fk = ob(),
        {
          t: Sk
        } = (0, qf.D)(),
        [bk, rk] = (0, Dk.useState)(!1),
        [Pk, mk] = function(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ab;
          const [ik, Dk] = eK((ek => kk.includes(ek)), kk, ek, Object.is);
          return [kK(ik, kk), Dk]
        }(ek.baf2CoreBankPaused),
        Mk = new Set(Pk),
        Kk = [...ek.baf2CoreBanked];
      for (const Dk of Mk) Kk.some((kk => {
        let [ek] = kk;
        return ek === Dk
      })) || Kk.push([Dk, 0]);
      return 0 === Kk.length ? null : (0, uS.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, uS.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": bk,
          onClick: () => {
            rk(!bk)
          },
          children: [(0, uS.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Sk(`${iK}coreBankedLater`)
          }), (0, uS.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Kk.map((kk => {
              let [ek, ik] = kk;
              const Dk = Mk.has(ek);
              return (0, uS.jsxs)("span", {
                className: df()({
                  Paused: Dk
                }),
                title: Dk ? Sk(`${iK}coreBankPausedTag`) : void 0,
                children: [(0, uS.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, uS.jsx)(zf.c, {
                    itemName: ek,
                    amount: 0
                  })
                }), ik, Dk && (0, uS.jsx)(If.d, {
                  name: "pause"
                })]
              }, ek)
            }))
          }), (0, uS.jsx)(If.d, {
            name: bk ? "angle-up" : "angle-down"
          })]
        }), bk && (0, uS.jsxs)(uS.Fragment, {
          children: [(0, uS.jsx)("ul", {
            children: Kk.map((kk => {
              let [ek, Dk] = kk;
              const bk = Mk.has(ek);
              return (0, uS.jsxs)("li", {
                children: [(0, uS.jsxs)(oM, {
                  item: ek,
                  itemNames: ik,
                  children: [(0, uS.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Dk
                  }), bk && (0, uS.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Sk(`${iK}coreBankPausedTag`)
                  })]
                }), (0, uS.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, uS.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Dk,
                    onClick: () => {
                      fk.send(`baf2corewithdraw ${Dk} ${ek}`)
                    },
                    children: Sk(`${iK}coreTake`)
                  }), (0, uS.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      fk.send(`${Yk} ${ek}`), mk(ek, !bk)
                    },
                    children: Sk(bk ? `${iK}coreBankResume` : `${iK}coreBankStop`)
                  })]
                })]
              }, ek)
            }))
          }), (0, uS.jsx)("p", {
            className: "Baf2CoreHint",
            children: Sk(`${iK}coreBankNote`)
          })]
        })]
      })
    }
    const fK = "buildAFactory2Game:";

    function SK(kk) {
      const ek = Math.max(0, Math.floor(kk));
      return `${Math.floor(ek/60)}:${String(ek%60).padStart(2,"0")}`
    }

    function bK(kk) {
      let {
        item: ek
      } = kk;
      return (0, uS.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, uS.jsx)(zf.c, {
          itemName: ek,
          amount: 0
        })
      })
    }

    function rK() {
      return (0, uS.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, uS.jsx)(If.d, {
          name: "bolt"
        })
      })
    }

    function PK(kk) {
      let {
        charge: ek,
        hint: ik,
        itemNames: Dk
      } = kk;
      const fk = ob(),
        {
          t: Sk
        } = (0, qf.D)(),
        [bk, rk, Pk, mk, Mk, Kk, xk] = ek,
        [nk, Uk] = function(kk) {
          var ek;
          let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ab,
            Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [fk, Sk] = eK((() => kk), kk, ik, Dk);
          return [RM(null !== (ek = fk.get("")) && void 0 !== ek ? ek : null, kk), kk => {
            Sk("", kk)
          }]
        }(xk),
        Hk = nk === xk ? Kk : !nk,
        wk = mk >= Mk,
        lk = bk.find((kk => {
          let [, ek, ik] = kk;
          return ik < .9 * ek
        }));
      let pk = `${fK}coreChargeWaiting`,
        yk = {};
      return wk ? pk = `${fK}coreChargeDone` : nk ? pk = `${fK}coreChargeStopped` : Hk && ik ? (pk = `${fK}${ik[0]}`, yk = {
        item: PS(Sk, ik[1])
      }) : Hk && lk ? (pk = `${fK}coreChargeShort`, yk = {
        item: PS(Sk, lk[0])
      }) : Hk && rk > 0 && !Pk ? pk = `${fK}coreChargePower` : Hk && (pk = `${fK}coreChargeRunning`), (0, uS.jsxs)("div", {
        className: df()("Baf2CoreCharge", {
          Waiting: !Hk && !wk,
          Done: wk
        }),
        children: [(0, uS.jsxs)("h4", {
          children: [Sk(`${fK}coreChargeTitle`), (0, uS.jsx)("span", {
            children: Sk(`${fK}coreChargeProgress`, {
              done: SK(mk),
              need: SK(Mk)
            })
          })]
        }), (0, uS.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, uS.jsx)("div", {
            style: {
              width: 100 * Math.min(mk, Mk) / Mk + "%"
            }
          })
        }), (0, uS.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [bk.map((kk => {
            var ek;
            let [ik, fk, bk] = kk;
            const rk = bk >= .9 * fk;
            return (0, uS.jsxs)("li", {
              className: df()({
                Done: rk,
                Short: Hk && !rk
              }),
              children: [(0, uS.jsx)(bK, {
                item: ik
              }), (0, uS.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, uS.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, uS.jsx)(Qf.e, {
                    text: null !== (ek = Dk[ik]) && void 0 !== ek ? ek : ik
                  }), (0, uS.jsx)("span", {
                    children: Sk(`${fK}coreChargeItem`, {
                      now: String(bk),
                      need: String(fk)
                    })
                  })]
                }), (0, uS.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, uS.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*bk/fk)}%`
                    }
                  })
                })]
              })]
            }, ik)
          })), rk > 0 && (0, uS.jsxs)("li", {
            className: df()("Baf2CoreChargePower", {
              Short: Hk && !Pk
            }),
            children: [(0, uS.jsx)(rK, {}), (0, uS.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, uS.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, uS.jsx)("span", {
                  children: Sk(`${fK}coreChargePowerRow`, {
                    power: Rk(rk)
                  })
                })
              })
            })]
          })]
        }), (0, uS.jsx)("p", {
          className: "Baf2CoreHint",
          children: Sk(pk, yk)
        }), !wk && (Hk || nk) && (0, uS.jsx)("button", {
          type: "button",
          className: df()("Baf2CoreChargeToggle", {
            Stopped: nk
          }),
          onClick: () => {
            fk.send(Ck), Uk(!nk)
          },
          children: Sk(nk ? `${fK}coreChargeRestart` : `${fK}coreChargeStop`)
        })]
      })
    }

    function mK(kk) {
      let {
        charge: ek,
        reached: ik,
        itemNames: Dk
      } = kk;
      const {
        t: fk
      } = (0, qf.D)();
      return (0, uS.jsxs)("div", {
        className: df()("Baf2CoreCharge", {
          Done: ik
        }),
        children: [(0, uS.jsxs)("h4", {
          children: [fk(`${fK}coreChargeTitle`), (0, uS.jsx)("span", {
            children: fk(`${fK}coreChargeSpecTime`, {
              time: SK(ek.seconds)
            })
          })]
        }), (0, uS.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [ek.items.map((kk => {
            var ek;
            let {
              item: Sk,
              amount: bk
            } = kk;
            return (0, uS.jsxs)("li", {
              className: df()({
                Done: ik
              }),
              children: [(0, uS.jsx)(bK, {
                item: Sk
              }), (0, uS.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, uS.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, uS.jsx)(Qf.e, {
                    text: null !== (ek = Dk[Sk]) && void 0 !== ek ? ek : Sk
                  }), (0, uS.jsx)("span", {
                    children: fk(`${fK}coreChargeSpecItem`, {
                      need: String(bk)
                    })
                  })]
                })
              })]
            }, Sk)
          })), ek.powerPerS > 0 && (0, uS.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, uS.jsx)(rK, {}), (0, uS.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, uS.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, uS.jsx)("span", {
                  children: fk(`${fK}coreChargePowerRow`, {
                    power: Rk(ek.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const MK = "buildAFactory2Game:";

    function KK(kk) {
      let {
        def: ek,
        reached: ik,
        banked: Dk,
        itemNames: fk
      } = kk;
      const {
        t: Sk
      } = (0, qf.D)();
      return (0, uS.jsx)("ul", {
        className: "Baf2CoreCost",
        children: ek.cost.map((kk => {
          let {
            item: ek,
            amount: bk
          } = kk;
          const rk = ik ? 0 : Dk(ek);
          return (0, uS.jsx)("li", {
            children: (0, uS.jsx)(oM, {
              item: ek,
              itemNames: fk,
              children: (0, uS.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: rk > 0 ? Sk(`${MK}coreBankedFor`, {
                  amount: String(rk),
                  total: String(bk)
                }) : `\xd7${bk}`
              })
            })
          }, ek)
        }))
      })
    }

    function xK(kk, ek) {
      if (ek >= Mk()) return kk(`${MK}coreMaxTier`);
      const ik = mk[ek + 1];
      return ik && !ik.startsWith("upgradeCore") ? kk(`${MK}coreGateQuest`, {
        quest: kk(`${MK}quest_${ik}`)
      }) : kk(`${MK}coreGateClosed`)
    }

    function nK() {
      const {
        t: kk
      } = (0, qf.D)(), ek = ob(), ik = (0, Dk.useRef)(null), fk = (0, Dk.useRef)(Date.now());
      return Jm(!0, ik), (0, uS.jsx)("div", {
        ref: ik,
        className: "Baf2CoreGrow",
        children: (0, uS.jsx)(db.r, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - fk.current >= 600 && ek.send(yk)
          },
          children: kk(`${MK}coreGrow`)
        })
      })
    }

    function UK(kk) {
      let {
        message: ek,
        itemNames: ik,
        next: Dk
      } = kk;
      const fk = ob(),
        {
          t: Sk
        } = (0, qf.D)(),
        bk = ek.baf2CoreTier,
        rk = ek.baf2CoreReady,
        Pk = ek.baf2CoreNeeds.filter((kk => {
          let [, ek, ik, Dk] = kk;
          return Dk > 0 && ek < ik
        })),
        mk = ek.baf2CoreNeeds.every((kk => {
          let [, ek, ik] = kk;
          return ek >= ik
        })),
        Mk = ek.baf2CoreKeep;
      return (0, uS.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, uS.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [rk && (0, uS.jsx)(nK, {}), (0, uS.jsx)("h3", {
            children: Sk(`${MK}coreBring`)
          }), (0, uS.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: ek.baf2CoreNeeds.map((kk => {
              let [ek, Dk, bk, rk] = kk;
              return (0, uS.jsxs)("li", {
                className: df()({
                  Done: Dk >= bk
                }),
                children: [(0, uS.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, uS.jsx)(zf.c, {
                    itemName: ek,
                    amount: 0
                  })
                }), (0, uS.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, uS.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, uS.jsx)(Qf.e, {
                      text: ik[ek]
                    }), (0, uS.jsxs)("span", {
                      children: [Dk, "/", bk]
                    })]
                  }), (0, uS.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, uS.jsx)("div", {
                      style: {
                        width: 100 * Dk / bk + "%"
                      }
                    }), rk > 0 && (0, uS.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * rk / bk + "%"
                      }
                    })]
                  })]
                }), rk > 0 && Dk < bk && (0, uS.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    fk.send(`${Lk} ${ek}`)
                  },
                  children: Sk(`${MK}coreDeposit`, {
                    amount: String(rk)
                  })
                })]
              }, ek)
            }))
          }), ek.baf2CoreCharge && (0, uS.jsx)(PK, {
            charge: ek.baf2CoreCharge,
            hint: ek.baf2CoreChargeHint,
            itemNames: ik
          }), !rk && Pk.length > 1 && (0, uS.jsx)(db.r, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              fk.send(yk)
            },
            children: Sk(`${MK}coreHandOver`)
          }), !rk && void 0 !== Mk && (0, uS.jsx)("p", {
            className: "Baf2CoreHint",
            children: Sk(`${MK}coreKeepRest`, {
              item: PS(Sk, Mk)
            })
          }), !rk && !mk && 0 === Pk.length && void 0 === Mk && (0, uS.jsx)("p", {
            className: "Baf2CoreHint",
            children: Sk(`${MK}coreNothingHeld`)
          }), (0, uS.jsx)(DK, {
            message: ek,
            itemNames: ik
          })]
        }), (0, uS.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, uS.jsx)("h3", {
            children: Sk(`${MK}coreRewards`)
          }), (0, uS.jsx)(GM, {
            def: Dk,
            tier: bk + 1,
            itemNames: ik
          })]
        })]
      })
    }

    function HK(kk) {
      let {
        message: ek,
        itemNames: ik,
        shown: Dk
      } = kk;
      const {
        t: fk
      } = (0, qf.D)(), Sk = ek.baf2CoreTier, bk = lk(Dk), rk = Dk <= Sk, Pk = new Map(ek.baf2CoreBanked), mk = !pk(Sk, Ak(ek)) && Dk === Sk;
      return (0, uS.jsxs)("div", {
        className: df()("Baf2CoreBody", {
          Locked: !rk
        }),
        children: [(0, uS.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, uS.jsx)("h3", {
            children: fk(rk ? `${MK}coreItTook` : `${MK}coreItNeeds`)
          }), 0 === bk.cost.length && (0, uS.jsx)("p", {
            className: "Baf2CoreHint",
            children: fk(`${MK}coreTierStart`)
          }), bk.cost.length > 0 && (0, uS.jsx)(KK, {
            def: bk,
            reached: rk,
            banked: kk => {
              var ek;
              return function(kk, ek, ik, Dk) {
                let fk = kk;
                for (let bk = ek + 2; bk <= ik; bk++) {
                  var Sk;
                  const kk = lk(bk).cost.find((kk => kk.item === Dk)),
                    ek = Math.min(fk, null !== (Sk = null === kk || void 0 === kk ? void 0 : kk.amount) && void 0 !== Sk ? Sk : 0);
                  if (bk === ik) return ek;
                  fk -= ek
                }
                return 0
              }(null !== (ek = Pk.get(kk)) && void 0 !== ek ? ek : 0, Sk, Dk, kk)
            },
            itemNames: ik
          }), bk.charge && (0, uS.jsx)(mK, {
            charge: bk.charge,
            reached: rk,
            itemNames: ik
          }), mk && (0, uS.jsxs)(uS.Fragment, {
            children: [(0, uS.jsx)("p", {
              className: "Baf2CoreHint",
              children: xK(fk, Sk)
            }), (0, uS.jsx)(DK, {
              message: ek,
              itemNames: ik
            })]
          })]
        }), (0, uS.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, uS.jsx)("h3", {
            children: fk(rk ? `${MK}coreGave` : `${MK}coreLockedRewards`)
          }), (0, uS.jsx)(GM, {
            def: bk,
            tier: Dk,
            itemNames: ik
          })]
        })]
      })
    }

    function wK(kk, ek) {
      const {
        key: ik,
        params: Dk
      } = nk(ek - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return kk(`${MK}${ik}`, Dk)
    }
    const lK = "buildAFactory2Game:",
      pK = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      yK = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function YK(kk) {
      let {
        view: ek,
        close: ik,
        askIslands: fk
      } = kk;
      const {
        t: Sk
      } = (0, qf.D)(), [bk, rk] = (0, Dk.useState)(!1);
      (0, Dk.useEffect)((() => {
        if (!bk) return;
        const kk = window.setTimeout((() => {
          rk(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(kk)
        }
      }), [bk]);
      const {
        message: Pk,
        itemNames: mk
      } = ek, Mk = Pk.baf2CoreTier, Kk = lk(Mk), xk = pk(Mk, Ak(Pk)), [Hk, wk] = Pk.baf2CoreMachines, [yk, Yk] = Pk.baf2CoreBelts, Lk = Pk.baf2CoreStorage, Ck = Pk.baf2CoreReady, [jk, sk] = (0, Dk.useState)(null), dk = (null === jk || void 0 === jk ? void 0 : jk.at) === Mk && jk.ready === Ck ? jk.tier : xk ? Mk + 1 : Mk;
      let Vk = "coreTierLocked";
      dk <= Mk ? Vk = "coreTierReached" : dk === Mk + 1 && (Vk = "coreTierNext");
      const Fk = Sk(`${lK}${lk(dk).nameKey}`),
        uk = dk === Mk + 1 ? xk : null,
        qk = nk(dk, {
          tier: Vk,
          stage: pK[Vk],
          atomic: yK[Vk]
        }),
        Ik = Sk(`${lK}${qk.key}`, {
          ...qk.params,
          name: Fk
        }),
        zk = nk(Mk, Uk),
        Qk = Sk(`${lK}${zk.key}`, {
          ...zk.params,
          name: Sk(`${lK}${Kk.nameKey}`)
        });
      return (0, uS.jsx)(sb.e, {
        close: ik,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, uS.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsxs)("div", {
              children: [(0, uS.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Sk(`${lK}coreTitle`)
              }), void 0 !== Pk.baf2CoreIslandName && (0, uS.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Pk.baf2CoreIslandName
              }), (0, uS.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, uS.jsx)("span", {
                  children: Qk
                }), (0, uS.jsx)("span", {
                  className: df()({
                    Full: Hk >= wk
                  }),
                  children: Sk(`${lK}coreMachineCount`, {
                    amount: String(Hk),
                    total: String(wk)
                  })
                }), (0, uS.jsx)("span", {
                  className: df()({
                    Full: yk >= Yk
                  }),
                  children: Sk(`${lK}coreBeltCount`, {
                    amount: String(yk),
                    total: String(Yk)
                  })
                }), void 0 !== Lk && (0, uS.jsx)("span", {
                  className: df()({
                    Full: Lk[0] >= Lk[1]
                  }),
                  children: Sk(`${lK}coreStorageCount`, {
                    amount: String(Lk[0]),
                    total: String(Lk[1])
                  })
                })]
              })]
            }), (0, uS.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Pk.baf2CoreIslands && (0, uS.jsx)(db.f, {
                className: "Baf2CoreIslandsButton",
                disabled: bk,
                onClick: () => {
                  rk(!0), fk()
                },
                children: Sk(`${lK}islandsOpenButton`)
              }), (0, uS.jsx)(db.n, {
                onClick: ik
              })]
            })]
          }), (0, uS.jsx)(cM, {
            tier: Mk,
            shown: dk,
            Un: kk => {
              sk({
                tier: kk,
                at: Mk,
                ready: Ck
              })
            }
          }), (0, uS.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Ik, dk > Mk + 1 && (0, uS.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: wK(Sk, dk)
            })]
          }), 6 === dk && dk > Mk && (0, uS.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Sk(`${lK}coreStagesNote`)
          }), 11 === dk && dk > Mk && (0, uS.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Sk(`${lK}coreAtomicNote`)
          }), uk && (0, uS.jsx)(UK, {
            message: Pk,
            itemNames: mk,
            next: uk
          }), !uk && (0, uS.jsx)(HK, {
            message: Pk,
            itemNames: mk,
            shown: dk
          })]
        })
      })
    }
    const LK = {
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
    const CK = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: xS,
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

    function AK(kk) {
      return kk.baf2DropCometOreOnly ? "dropCometOre" : kk.baf2DropCometIsotope ? "seed" === kk.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function jK(kk) {
      let {
        message: ek,
        quests: ik,
        close: fk,
        leave: Sk
      } = kk;
      const bk = ob(),
        {
          t: rk
        } = (0, qf.D)(),
        Pk = (0, PM.e)(Wf, ik.get()),
        mk = function(kk) {
          var ek;
          if (!zk(kk.tutorial)) return null;
          const ik = kk.rows.find((kk => kk.current)),
            Dk = ik ? LK[ik.key] : void 0;
          return null !== (ek = null !== Dk && void 0 !== Dk ? Dk : kk.side ? LK[kk.side.row.key] : void 0) && void 0 !== ek ? ek : null
        }(Pk),
        Mk = null === Pk.tier || HS(Pk.tier),
        Kk = Mk ? CK : CK.filter((kk => {
          let {
            item: ek
          } = kk;
          return ek !== xS
        })),
        [xk, nk] = (0, Dk.useState)(null),
        Uk = null !== xk && void 0 !== xk ? xk : !ek.baf2DropFoundSalvage && Mk,
        Hk = ek.baf2DropRuinDistance,
        wk = ek.baf2DropComet,
        lk = ek.baf2DropOldWorks,
        pk = ek.baf2DropGrove,
        yk = function(kk) {
          return 2 + Number(void 0 !== kk.baf2DropComet) + Number(!!kk.baf2DropOwedComet || void 0 !== kk.baf2DropOwedWaitMinutes) + Number(void 0 !== kk.baf2DropDigDistance) + Number(void 0 !== kk.baf2DropOldWorks) + Number(void 0 !== kk.baf2DropGrove)
        }(ek),
        Yk = kk => {
          bk.send(function(kk) {
            return `baf2drop ${kk}`
          }(kk)), Sk()
        };
      let Lk = rk("buildAFactory2Game:dropRuinNone");
      if (null !== Hk) {
        let kk = ek.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        ek.baf2DropRuinOldWorks && (kk = "dropRuinOldWorks");
        const ik = void 0 === ek.baf2DropRuinCluster ? rk("buildAFactory2Game:dropRuinOpen") : rk("buildAFactory2Game:dropRuinCluster", {
          count: String(ek.baf2DropRuinCluster)
        });
        Lk = `${rk(`buildAFactory2Game:${kk}`,{distance:String(Hk)})} ${ik}`
      }
      let Ck = rk("buildAFactory2Game:dropBelowDescription");
      void 0 !== ek.baf2DropBelowLook && (Ck = rk("buildAFactory2Game:dropBelowLook", {
        look: rk(ek.baf2DropBelowLook)
      }));
      const Ak = "buildAFactory2Game:wildsRegion_survivorGrove" === ek.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        jk = sS(rk, 60 * function(kk) {
          const [ek, ik] = (0, Dk.useState)((() => Date.now())), [fk, Sk] = (0, Dk.useState)(ek);
          return (0, Dk.useEffect)((() => {
            const kk = Date.now();
            ik(kk), Sk(kk)
          }), [kk]), (0, Dk.useEffect)((() => {
            const kk = window.setInterval((() => {
              Sk(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(kk)
            }
          }), []), Math.max(1, kk.baf2DropRenewMinutes - Math.floor((fk - ek) / 6e4))
        }(ek)),
        sk = function(kk, ek, ik) {
          return "ruin" === kk && !ik || "owed" === kk && !ek.baf2DropOwedComet ? null : kk
        }(mk, ek, null !== Hk),
        dk = function(kk) {
          for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
          return df()("Baf2DropTile", ...ik, {
            Wanted: sk === kk
          })
        };
      return (0, uS.jsx)(sb.e, {
        close: fk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, uS.jsxs)("section", {
          className: df()("Baf2Panel Baf2DropMap", {
            Many: yk >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsxs)("div", {
              children: [(0, uS.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: rk("buildAFactory2Game:dropMapTitle")
              }), (0, uS.jsx)("p", {
                children: rk("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, uS.jsx)(db.n, {
              onClick: fk
            })]
          }), (0, uS.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== wk && (0, uS.jsxs)(db.B, {
              className: dk("comet", "Baf2DropComet"),
              onClick: () => {
                Yk("comet")
              },
              children: [(0, uS.jsx)("strong", {
                children: rk("buildAFactory2Game:dropComet")
              }), (0, uS.jsx)("span", {
                children: rk(`buildAFactory2Game:${AK(ek)}`, {
                  distance: String(wk)
                })
              })]
            }), ek.baf2DropOwedComet && (0, uS.jsxs)(db.B, {
              className: dk("owed", "Baf2DropComet"),
              onClick: () => {
                Yk("owed")
              },
              children: [(0, uS.jsx)("strong", {
                children: rk("buildAFactory2Game:dropOwedComet")
              }), (0, uS.jsx)("span", {
                children: ek.baf2DropOwedIsotope ? rk("buildAFactory2Game:dropOwedIsotopeDescription") : rk("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== ek.baf2DropOwedWaitMinutes && (0, uS.jsxs)(db.B, {
              className: dk("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, uS.jsx)("strong", {
                children: rk("buildAFactory2Game:dropOwedComet")
              }), (0, uS.jsx)("span", {
                children: rk("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(ek.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, uS.jsxs)(db.f, {
              className: dk("below"),
              onClick: () => {
                Yk("below")
              },
              children: [(0, uS.jsx)("strong", {
                children: rk("buildAFactory2Game:dropBelow")
              }), (0, uS.jsx)("span", {
                children: Ck
              })]
            }), void 0 !== ek.baf2DropDigDistance && (0, uS.jsxs)(db.t, {
              className: dk("dig"),
              onClick: () => {
                Yk("dig")
              },
              children: [(0, uS.jsx)("strong", {
                children: rk("buildAFactory2Game:dropDig")
              }), (0, uS.jsx)("span", {
                children: rk("buildAFactory2Game:dropDigDescription", {
                  distance: String(ek.baf2DropDigDistance),
                  y: jS(ek.baf2DropDigY)
                })
              })]
            }), void 0 !== pk && (0, uS.jsxs)(db.t, {
              className: dk("grove", "Baf2DropGrove"),
              onClick: () => {
                Yk("grove")
              },
              children: [(0, uS.jsx)("strong", {
                children: rk("buildAFactory2Game:dropGrove")
              }), (0, uS.jsx)("span", {
                children: rk(`buildAFactory2Game:${Ak}`, {
                  distance: String(pk)
                })
              })]
            }), (0, uS.jsxs)(db.r, {
              className: dk("ruin"),
              disabled: null === Hk,
              onClick: () => {
                Yk("ruin")
              },
              children: [(0, uS.jsx)("strong", {
                children: rk("buildAFactory2Game:dropRuin")
              }), (0, uS.jsx)("span", {
                children: Lk
              })]
            }), void 0 !== lk && (0, uS.jsxs)(db.R, {
              className: dk("works"),
              onClick: () => {
                Yk("works")
              },
              children: [(0, uS.jsx)("strong", {
                children: rk("buildAFactory2Game:dropOldWorks")
              }), (0, uS.jsx)("span", {
                children: rk("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(lk)
                })
              })]
            })]
          }), (0, uS.jsx)("p", {
            className: "Baf2DropRenew",
            children: rk("buildAFactory2Game:dropRenew", {
              time: jk
            })
          }), (0, uS.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: Uk,
            onToggle: kk => {
              kk.currentTarget.open !== Uk && nk(kk.currentTarget.open)
            },
            children: [(0, uS.jsx)("summary", {
              children: rk("buildAFactory2Game:dropSalvageWhat")
            }), (0, uS.jsx)("p", {
              children: rk("buildAFactory2Game:dropSalvageIntro")
            }), (0, uS.jsx)("ul", {
              children: Kk.map((kk => {
                let {
                  item: ek,
                  nameKey: ik,
                  useKey: Dk,
                  params: fk
                } = kk;
                return (0, uS.jsxs)("li", {
                  children: [(0, uS.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, uS.jsx)(zf.c, {
                      itemName: ek,
                      amount: 0
                    })
                  }), (0, uS.jsxs)("span", {
                    children: [(0, uS.jsx)("strong", {
                      children: rk(ik)
                    }), ": ", rk(Dk, fk)]
                  })]
                }, ek)
              }))
            })]
          })]
        })
      })
    }
    const sK = "buildAFactory2Game:";

    function dK(kk, ek) {
      return kk.sendIslandEdit(`baf2coopleave ${ek.baf2IslandId}`)
    }

    function VK(kk) {
      let {
        card: ek,
        canRename: ik,
        done: fk,
        t: Sk
      } = kk;
      const bk = ob(),
        [rk, Pk] = (0, Dk.useState)(ek.baf2IslandName),
        mk = sm(rk),
        Mk = "" === mk || dm(mk),
        Kk = () => {
          !Mk && ik && (mk !== ek.baf2IslandName ? fk(bk.sendIslandEdit(`baf2islandrename ${ek.baf2IslandId} ${mk}`)) : fk(null))
        },
        xk = () => {
          fk(null)
        };
      return (0, uS.jsxs)("div", {
        className: "Baf2IslandForm",
        ...Nm(xk),
        children: [(0, uS.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Sk(`${sK}islandsRenameLabel`), (0, uS.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: rk,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Rm,
            onChange: kk => {
              Pk(kk.target.value)
            },
            ...Gm(Kk, xk)
          })]
        }), "" === mk && (0, uS.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Sk(`${sK}islandsRenameEmpty`)
        }), dm(mk) && (0, uS.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Sk(`${sK}islandsNameReserved`)
        }), (0, uS.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, uS.jsx)(db.t, {
            disabled: Mk || !ik,
            onClick: Kk,
            children: Sk(`${sK}islandsRenameSave`)
          }), (0, uS.jsx)(db.f, {
            onClick: xk,
            children: Sk(`${sK}islandsCancel`)
          })]
        })]
      })
    }

    function FK(kk) {
      let {
        card: ek,
        canDelete: ik,
        done: fk,
        t: Sk
      } = kk;
      const bk = ob(),
        [rk, Pk] = (0, Dk.useState)(""),
        mk = function(kk, ek) {
          return sm(kk).toLowerCase() === sm(ek).toLowerCase()
        }(rk, ek.baf2IslandName),
        Mk = () => {
          mk && ik && fk(bk.sendIslandEdit(`baf2islanddelete ${ek.baf2IslandId}`))
        },
        Kk = () => {
          fk(null)
        },
        xk = Wm("name"),
        [nk, Uk = ""] = Sk(`${sK}islandsDeleteConfirm`, {
          name: xk
        }).split(xk);
      return (0, uS.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...Nm(Kk),
        children: [(0, uS.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, uS.jsxs)("span", {
            children: [nk, (0, uS.jsx)("strong", {
              children: ek.baf2IslandName
            }), Uk]
          }), (0, uS.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: rk,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Rm,
            onChange: kk => {
              Pk(kk.target.value)
            },
            ...Gm(Mk, Kk)
          })]
        }), om(ek) && (0, uS.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Sk(`${sK}islandsDeleteLeftBack`)
        }), (0, uS.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, uS.jsx)(db.R, {
            disabled: !mk || !ik,
            onClick: Mk,
            children: Sk(`${sK}islandsDeleteForGood`)
          }), (0, uS.jsx)(db.f, {
            onClick: Kk,
            children: Sk(`${sK}islandsCancel`)
          })]
        })]
      })
    }

    function uK(kk) {
      let {
        members: ek,
        t: ik
      } = kk;
      const Dk = ek.length;
      return (0, uS.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, uS.jsxs)("span", {
          children: [1 === Dk ? ik(`${sK}islandsPlayersOne`) : ik(`${sK}islandsPlayers`, {
            count: String(Dk)
          }), " "]
        }), ek.map(((kk, ek) => (0, uS.jsxs)("span", {
          className: df()("Baf2IslandMember", {
            Here: kk.baf2MemberHere
          }),
          title: kk.baf2MemberHere ? ik(`${sK}islandsPlayerHere`) : void 0,
          children: [kk.baf2MemberName, ek < Dk - 1 ? ", " : ""]
        }, kk.baf2MemberKey)))]
      })
    }

    function qK(kk) {
      let {
        card: ek,
        answered: ik,
        nowMs: fk,
        t: Sk
      } = kk;
      const bk = ob(),
        [rk, Pk] = (0, Dk.useState)(new Map),
        mk = om(ek);
      if (!mk) return null;
      return (0, uS.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, uS.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Sk(`${sK}islandsLeftTitle`)
        }), (0, uS.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: mk.left.map((kk => {
            const Dk = kk.baf2LeftKey,
              Mk = Om(rk.get(Dk), ik, fk),
              Kk = function(kk) {
                return 1 === kk ? [`${Lm}islandsLeftItemsOne`] : [`${Lm}islandsLeftItems`, {
                  count: String(kk)
                }]
              }(kk.baf2LeftItems);
            return (0, uS.jsx)("li", {
              className: df()("Baf2IslandPerson", {
                Pending: Mk
              }),
              children: (0, uS.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, uS.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: kk.baf2LeftName
                }), (0, uS.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Sk(Kk[0], Kk[1])
                }), mk.claim && (0, uS.jsx)(db.t, {
                  className: "Baf2IslandPersonButton",
                  disabled: Mk,
                  onClick: () => {
                    (kk => {
                      const ik = bk.sendIslandEdit(`baf2coopclaim ${ek.baf2IslandId} ${kk}`);
                      Pk((ek => new Map(ek).set(kk, {
                        atMs: Date.now(),
                        answer: ik
                      })))
                    })(Dk)
                  },
                  children: Sk(`${sK}islandsClaim`)
                })]
              })
            }, Dk)
          }))
        }), mk.goThere && (0, uS.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Sk(`${sK}islandsClaimGoThere`)
        })]
      })
    }

    function IK(kk) {
      let {
        card: ek,
        view: ik,
        blocked: fk,
        maxIslands: Sk,
        answered: bk,
        nowMs: rk,
        done: Pk,
        openSocial: mk,
        t: Mk
      } = kk;
      const Kk = ob(),
        [xk, nk] = (0, Dk.useState)(new Map),
        [Uk, Hk] = (0, Dk.useState)(new Map),
        [wk, lk] = (0, Dk.useState)(null),
        pk = (0, Dk.useRef)(null);
      iM(pk);
      const yk = ek.baf2IslandId,
        Yk = ek.baf2IslandCoop,
        Lk = null !== Yk && void 0 !== Yk && Yk.baf2CoopMembers.some((kk => kk.baf2MemberKey === wk)) ? wk : null,
        Ck = function(kk, ek) {
          const ik = kk.baf2IslandCoop;
          return ik && Zm(ik) || null !== ek ? void 0 : kk.baf2IslandInvitable
        }(ek, fk),
        Ak = function(kk, ek) {
          const ik = kk.baf2IslandCoop;
          return ik && Zm(ik) ? {
            key: `${Lm}islandsCoopFull`,
            params: {
              max: String(ik.baf2CoopMax)
            }
          } : void 0 !== kk.baf2IslandInvitable && null === ek || ik && !ik.baf2CoopManageHere ? null : "degraded" === ek || "stuck" === ek ? {
            key: `${Lm}islandsInviteNotLoaded`
          } : null === ek || function(kk) {
            return "notHome" === kk || "wilds" === kk || "visiting" === kk
          }(ek) || qm(ek) ? {
            key: `${Lm}islandsInviteGoThere`
          } : {
            key: `${Lm}islandsInviteBusy`
          }
        }(ek, fk),
        jk = () => {
          var kk;
          lk(null), null === (kk = pk.current) || void 0 === kk || kk.focus()
        };
      return (0, uS.jsxs)("div", {
        ref: pk,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...Nm(null === Lk ? Pk : jk),
        children: [Yk && (0, uS.jsxs)(uS.Fragment, {
          children: [(0, uS.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Mk(`${sK}islandsPlayersTitle`, {
              count: String(Yk.baf2CoopMembers.length),
              max: String(Yk.baf2CoopMax)
            })
          }), (0, uS.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: Yk.baf2CoopMembers.map(((kk, ek) => {
              const Dk = kk.baf2MemberKey,
                fk = Om(xk.get(Dk), bk, rk);
              return (0, uS.jsxs)("li", {
                className: df()("Baf2IslandPerson", {
                  Pending: fk
                }),
                children: [(0, uS.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, uS.jsx)("span", {
                    className: df()("Baf2IslandPersonName", {
                      Here: kk.baf2MemberHere
                    }),
                    children: kk.baf2MemberName
                  }), kk.baf2MemberHere && (0, uS.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Mk(`${sK}islandsPlayerHere`)
                  }), 0 === ek && (0, uS.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Mk(`${sK}islandsPlayerOwner`)
                  }), ik.remove && ek > 0 && !fk && Lk !== Dk && (0, uS.jsx)(db.U, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var kk;
                      lk(Dk), null === (kk = pk.current) || void 0 === kk || kk.focus()
                    },
                    children: Mk(`${sK}islandsRemove`)
                  })]
                }), Lk === Dk && (0, uS.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, uS.jsx)("p", {
                    children: tm(Mk, `${sK}islandsRemoveConfirm`, {
                      player: kk.baf2MemberName
                    })
                  }), (0, uS.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, uS.jsx)(db.R, {
                      onClick: () => {
                        (kk => {
                          const ek = Kk.sendIslandEdit(`baf2coopremove ${yk} ${kk.baf2MemberKey}`);
                          nk((ik => new Map(ik).set(kk.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: ek
                          }))), jk()
                        })(kk)
                      },
                      children: Mk(`${sK}islandsRemoveYes`)
                    }), (0, uS.jsx)(db.f, {
                      onClick: jk,
                      children: Mk(`${sK}islandsCancel`)
                    })]
                  })]
                })]
              }, Dk)
            }))
          })]
        }), (void 0 !== Ck || null !== Ak) && (0, uS.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Mk(`${sK}islandsInviteTitle`)
        }), !Yk && (void 0 !== Ck || null !== Ak) && (0, uS.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Mk(`${sK}islandsInviteShareNote`)
        }), 0 === (null === Ck || void 0 === Ck ? void 0 : Ck.length) && (0, uS.jsx)(zK, {
          openSocial: mk,
          t: Mk
        }), void 0 !== Ck && Ck.length > 0 && (0, uS.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Ck.map((kk => {
            const ek = !0 === kk.baf2InvitableSent || Om(Uk.get(kk.baf2InvitableId), bk, rk);
            return (0, uS.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, uS.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, uS.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: kk.baf2InvitableName
                }), kk.baf2InvitableFull && !ek && (0, uS.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Mk(`${sK}islandsInviteTheirFull`, {
                    max: String(Sk)
                  })
                }), (ek || !kk.baf2InvitableFull) && (0, uS.jsx)(db.t, {
                  className: "Baf2IslandPersonButton",
                  disabled: ek,
                  onClick: () => {
                    (kk => {
                      const ek = Kk.sendIslandEdit(`baf2coopinvite ${yk} ${kk}`);
                      Hk((ik => new Map(ik).set(kk, {
                        atMs: Date.now(),
                        answer: ek
                      })))
                    })(kk.baf2InvitableId)
                  },
                  children: Mk(ek ? `${sK}islandsInvited` : `${sK}islandsInvite`)
                })]
              })
            }, kk.baf2InvitableId)
          }))
        }), Ak && (0, uS.jsx)(SM, {
          note: Ak,
          t: Mk
        }), (0, uS.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, uS.jsx)(db.f, {
            onClick: Pk,
            children: Mk(`${sK}islandsDone`)
          })
        })]
      })
    }

    function zK(kk) {
      let {
        openSocial: ek,
        t: ik
      } = kk;
      return (0, uS.jsxs)(uS.Fragment, {
        children: [(0, uS.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ik(ek ? `${sK}islandsInviteNobody` : `${sK}islandsInviteNobodyGuest`)
        }), ek && (0, uS.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, uS.jsx)(db.f, {
            onClick: ek,
            children: ik("socialBar:social")
          })
        })]
      })
    }

    function QK(kk) {
      let {
        className: ek,
        text: ik,
        ConfirmButton: fk,
        confirmLabel: Sk,
        canConfirm: bk,
        send: rk,
        done: Pk,
        t: mk
      } = kk;
      const Mk = (0, Dk.useRef)(null);
      iM(Mk);
      const Kk = () => {
        Pk(null)
      };
      return (0, uS.jsxs)("div", {
        ref: Mk,
        tabIndex: -1,
        className: df()("Baf2IslandForm", ek),
        ...Nm(Kk),
        children: [(0, uS.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: ik
        }), (0, uS.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, uS.jsx)(fk, {
            disabled: !bk,
            onClick: () => {
              bk && Pk(rk())
            },
            children: Sk
          }), (0, uS.jsx)(db.f, {
            onClick: Kk,
            children: mk(`${sK}islandsCancel`)
          })]
        })]
      })
    }

    function vK(kk) {
      return "hidden" !== kk
    }

    function EK(kk) {
      var ek, ik;
      let {
        card: fk,
        keepOwn: Sk,
        blocked: bk,
        maxIslands: rk,
        serverNowMs: Pk,
        nowMs: mk,
        actions: Mk,
        full: Kk,
        waits: xk,
        answered: nk,
        mode: Uk,
        setMode: Hk,
        pending: wk,
        onSent: lk,
        switchTo: pk,
        leave: yk,
        coopOn: Yk,
        openSocial: Lk,
        t: Ck
      } = kk;
      const Ak = ob(),
        jk = fk.baf2IslandActive,
        sk = jk ? null : function(kk, ek) {
          if (kk <= 0) return null;
          const ik = ek - kk;
          if (ik < YS) return [`${Lm}islandsPlayedJustNow`];
          if (ik < Cm) return [`${Lm}islandsPlayedMinutes`, {
            minutes: String(Math.floor(ik / YS))
          }];
          if (ik < Am) return [`${Lm}islandsPlayedHours`, {
            hours: String(Math.floor(ik / Cm))
          }];
          const Dk = Math.floor(ik / Am);
          return 1 === Dk ? [`${Lm}islandsPlayedDay`] : [`${Lm}islandsPlayedDays`, {
            days: String(Dk)
          }]
        }(fk.baf2IslandLastPlayedMs, Pk),
        dk = void 0 === (Vk = fk.baf2IslandItems) ? null : 0 === Vk ? [`${Lm}islandsItemsNone`] : 1 === Vk ? [`${Lm}islandsItemsOne`] : [`${Lm}islandsItems`, {
          count: String(Vk)
        }];
      var Vk;
      const Fk = function(kk) {
          return kk ? 1 === kk ? [`${Lm}islandsWaitingOne`] : [`${Lm}islandsWaiting`, {
            count: String(kk)
          }] : null
        }(fk.baf2IslandWaiting),
        uk = fk.baf2IslandUnreadable,
        qk = fk.baf2IslandCoop,
        Ik = Tm(fk, Mk, Sk, Kk, Yk, bk),
        zk = (0, Dk.useRef)(null);
      Jm(null !== Uk, zk);
      const Qk = () => {
          var kk;
          Hk(null), null === (kk = zk.current) || void 0 === kk || kk.focus()
        },
        vk = (kk, ek) => {
          Qk(), null !== kk && lk(kk, ek)
        },
        Ek = (kk, ek) => Ck(`${sK}${kk}`, {
          time: sS(Ck, ek)
        });
      return (0, uS.jsxs)("li", {
        ref: zk,
        tabIndex: -1,
        className: df()("Baf2IslandCard", {
          Active: jk,
          Pending: wk,
          Shared: void 0 !== qk
        }),
        children: [(0, uS.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, uS.jsx)("strong", {
            className: "Baf2IslandName",
            children: fk.baf2IslandName
          }), jk && (0, uS.jsx)("span", {
            className: "Baf2IslandBadge",
            children: Ck(`${sK}islandsOnThis`)
          }), qk && (0, uS.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: Ck(`${sK}islandsShared`)
          })]
        }), "member" === (null === qk || void 0 === qk ? void 0 : qk.baf2CoopRole) && (0, uS.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: tm(Ck, `${sK}islandsSharedBy`, {
            owner: qk.baf2CoopOwner
          })
        }), void 0 !== uk && (0, uS.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: Ck("newer" === uk ? `${sK}islandsUnreadable` : `${sK}islandsDamaged`)
        }), "corrupt" === uk && Kk && (0, uS.jsx)("p", {
          className: "Baf2IslandStats",
          children: Ck(`${sK}islandsDamagedFull`)
        }), void 0 === uk && (0, uS.jsxs)(uS.Fragment, {
          children: [(0, uS.jsx)(fM, {
            tier: fk.baf2IslandTier,
            t: Ck
          }), (0, uS.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, uS.jsx)("span", {
              children: 1 === fk.baf2IslandQuestsDone ? Ck(`${sK}islandsQuestsDoneOne`) : Ck(`${sK}islandsQuestsDone`, {
                count: String(fk.baf2IslandQuestsDone)
              })
            }), (0, uS.jsx)("span", {
              children: 1 === fk.baf2IslandMachines ? Ck(`${sK}islandsMachinesOne`) : Ck(`${sK}islandsMachines`, {
                count: String(fk.baf2IslandMachines)
              })
            }), dk && (0, uS.jsx)("span", {
              children: Ck(dk[0], dk[1])
            }), Fk && (0, uS.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: Ck(Fk[0], Fk[1])
            }), sk && (0, uS.jsx)("span", {
              children: Ck(sk[0], sk[1])
            })]
          })]
        }), qk && void 0 === qk.baf2CoopState && "people" !== Uk && (0, uS.jsx)(uK, {
          members: qk.baf2CoopMembers,
          t: Ck
        }), null === Uk && (0, uS.jsx)(qK, {
          card: fk,
          answered: nk,
          nowMs: mk,
          t: Ck
        }), Ik.note && (0, uS.jsx)(SM, {
          note: Ik.note,
          className: df()({
            Unreachable: void 0 !== (null === qk || void 0 === qk ? void 0 : qk.baf2CoopState)
          }),
          t: Ck
        }), "rename" === Uk && (0, uS.jsx)(VK, {
          card: fk,
          canRename: "enabled" === Ik.rename,
          done: vk,
          t: Ck
        }), "delete" === Uk && (0, uS.jsx)(FK, {
          card: fk,
          canDelete: "enabled" === Ik.delete,
          done: kk => {
            vk(kk, qk ? "delete" : void 0)
          },
          t: Ck
        }), "people" === Uk && (0, uS.jsx)(IK, {
          card: fk,
          view: Ik,
          blocked: bk,
          maxIslands: rk,
          answered: nk,
          nowMs: mk,
          done: Qk,
          openSocial: Lk,
          t: Ck
        }), "leave" === Uk && (0, uS.jsx)(QK, {
          className: "Leave",
          text: tm(Ck, `${sK}islandsLeaveConfirm`, {
            island: fk.baf2IslandName,
            owner: null !== (ek = null === (ik = fk.baf2IslandCoop) || void 0 === ik ? void 0 : ik.baf2CoopOwner) && void 0 !== ek ? ek : ""
          }),
          ConfirmButton: db.R,
          confirmLabel: Ck(`${sK}islandsLeaveYes`),
          canConfirm: "enabled" === Ik.leave,
          send: () => dK(Ak, fk),
          done: kk => {
            vk(kk, "leave"), null !== kk && jk && yk()
          },
          t: Ck
        }), "unshare" === Uk && (0, uS.jsx)(QK, {
          className: "Unshare",
          text: tm(Ck, `${sK}islandsStopSharingConfirm`, {
            island: fk.baf2IslandName
          }),
          ConfirmButton: db.t,
          confirmLabel: Ck(`${sK}islandsStopSharing`),
          canConfirm: "enabled" === Ik.unshare,
          send: () => Ak.sendIslandEdit(`baf2coopunshare ${fk.baf2IslandId}`),
          done: kk => {
            vk(kk), null !== kk && yk()
          },
          t: Ck
        }), null === Uk && !wk && (0, uS.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": fk.baf2IslandName,
          children: [vK(Ik.switch) && (0, uS.jsx)(db.t, {
            disabled: "enabled" !== Ik.switch,
            onClick: pk,
            children: "tryAgain" === Ik.switchLabel ? Ck(`${sK}islandsTryAgain`) : xk.switch > 0 ? Ek("islandsSwitchIn", xk.switch) : Ck(`${sK}islandsSwitch`)
          }), vK(Ik.rename) && (0, uS.jsx)(db.f, {
            disabled: "enabled" !== Ik.rename,
            onClick: () => {
              Hk("rename")
            },
            children: Ck(`${sK}islandsRename`)
          }), vK(Ik.people) && (0, uS.jsx)(db.f, {
            disabled: "enabled" !== Ik.people,
            onClick: () => {
              Hk("people")
            },
            children: Ck("players" === Ik.peopleLabel ? `${sK}islandsPlayersButton` : `${sK}islandsInviteButton`)
          }), vK(Ik.unshare) && (0, uS.jsx)(db.f, {
            disabled: "enabled" !== Ik.unshare,
            onClick: () => {
              Hk("unshare")
            },
            children: Ck(`${sK}islandsStopSharing`)
          }), vK(Ik.dismiss) && (0, uS.jsx)(db.f, {
            disabled: "enabled" !== Ik.dismiss,
            onClick: () => {
              lk(dK(Ak, fk), "dismiss"), jk && yk()
            },
            children: Ck(`${sK}islandsDismiss`)
          }), vK(Ik.leave) && (0, uS.jsx)(db.U, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Ik.leave,
            onClick: () => {
              Hk("leave")
            },
            children: jk && xk.switch > 0 ? Ek("islandsLeaveIn", xk.switch) : Ck(`${sK}islandsLeave`)
          }), vK(Ik.delete) && (0, uS.jsx)(db.U, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Ik.delete,
            onClick: () => {
              Hk("delete")
            },
            children: xk.change > 0 && Ik.deleteWaits ? Ek("islandsDeleteIn", xk.change) : Ck(`${sK}islandsDelete`)
          })]
        })]
      })
    }
    const hK = "buildAFactory2Game:";

    function aK(kk) {
      let {
        invite: ek,
        actions: ik,
        full: fk,
        maxIslands: Sk,
        waitSeconds: bk,
        focus: rk,
        focused: Pk,
        join: mk,
        decline: Mk,
        t: Kk
      } = kk;
      const [xk, nk] = (0, Dk.useState)(!1), Uk = (0, Dk.useRef)(null);
      Jm(xk, Uk), (0, Dk.useEffect)((() => {
        var kk;
        rk && (nk(!0), null === (kk = Uk.current) || void 0 === kk || kk.focus(), Pk())
      }), [rk, Pk]);
      const Hk = function(kk, ek, ik, Dk, fk) {
          return ik ? {
            join: !1,
            note: {
              key: `${Lm}islandsJoinTooMany`,
              params: {
                max: String(Dk)
              }
            }
          } : kk.baf2InvitePlayers >= fk ? {
            join: !1,
            note: {
              key: `${Lm}islandsJoinFull`
            }
          } : {
            join: ek.switch,
            note: null
          }
        }(ek, ik, fk, Sk, 10),
        wk = ek.baf2InviteIsland,
        lk = ek.baf2InvitePlayers,
        pk = () => {
          var kk;
          nk(!1), null === (kk = Uk.current) || void 0 === kk || kk.focus()
        },
        yk = bk > 0 && null === Hk.note ? Kk(`${hK}islandsJoinIn`, {
          time: sS(Kk, bk)
        }) : Kk(`${hK}islandsJoin`);
      return (0, uS.jsxs)("li", {
        ref: Uk,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...xk ? Nm(pk) : {},
        children: [(0, uS.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, uS.jsx)("strong", {
            className: "Baf2IslandName",
            children: wk
          })
        }), (0, uS.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: tm(Kk, `${hK}islandsInvitedBy`, {
            owner: ek.baf2InviteOwner
          })
        }), (0, uS.jsx)(fM, {
          tier: ek.baf2InviteTier,
          t: Kk
        }), (0, uS.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, uS.jsx)("span", {
            children: 1 === lk ? Kk(`${hK}islandsPlayersCountOne`) : Kk(`${hK}islandsPlayersCount`, {
              count: String(lk)
            })
          })
        }), Hk.note && (0, uS.jsx)(SM, {
          note: Hk.note,
          t: Kk
        }), xk && (0, uS.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: tm(Kk, `${hK}islandsJoinConfirm`, {
            island: wk
          })
        }), !xk && (0, uS.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": wk,
          children: [(0, uS.jsx)(db.t, {
            disabled: !Hk.join,
            onClick: () => {
              var kk;
              nk(!0), null === (kk = Uk.current) || void 0 === kk || kk.focus()
            },
            children: yk
          }), (0, uS.jsx)(db.f, {
            onClick: Mk,
            children: Kk(`${hK}islandsDecline`)
          })]
        }), xk && (0, uS.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, uS.jsx)(db.t, {
            disabled: !Hk.join,
            onClick: mk,
            children: Kk(`${hK}islandsJoinYes`)
          }), (0, uS.jsx)(db.f, {
            onClick: pk,
            children: Kk(`${hK}islandsCancel`)
          })]
        })]
      })
    }

    function WK(kk) {
      let {
        invites: ek,
        actions: ik,
        full: Dk,
        maxIslands: fk,
        waitSeconds: Sk,
        focus: bk,
        focused: rk,
        leave: Pk,
        declined: mk,
        t: Mk
      } = kk;
      const Kk = ob();
      return (0, uS.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, uS.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Mk(`${hK}islandsInvitesTitle`)
        }), (0, uS.jsx)("ul", {
          className: "Baf2IslandCards",
          children: ek.map((kk => {
            const ek = kk.baf2InviteId;
            return (0, uS.jsx)(aK, {
              invite: kk,
              actions: ik,
              full: Dk,
              maxIslands: fk,
              waitSeconds: Sk,
              focus: bk === ek,
              focused: rk,
              join: () => {
                Kk.send(`baf2coopaccept ${ek}`), Pk()
              },
              decline: () => {
                Kk.send(`baf2coopdecline ${ek}`), mk(ek)
              },
              t: Mk
            }, ek)
          }))
        })]
      })
    }
    const tK = "buildAFactory2Game:";

    function XK(kk) {
      let {
        cards: ek,
        activeName: ik,
        canStart: fk,
        waitSeconds: Sk,
        leave: bk,
        t: rk
      } = kk;
      const Pk = ob(),
        [mk, Mk] = (0, Dk.useState)(!1),
        [Kk, xk] = (0, Dk.useState)(""),
        nk = (0, Dk.useRef)(null);
      Jm(mk, nk), (0, Dk.useEffect)((() => {
        var kk;
        mk && (null === (kk = nk.current) || void 0 === kk || kk.focus())
      }), [mk]);
      const Uk = Vm(ek),
        Hk = sm(Kk),
        wk = dm(Hk),
        lk = () => {
          fk && !wk && (Pk.send("" === Hk || Hk === Uk ? Gk : `${Gk} ${Hk}`), bk())
        },
        pk = () => {
          var kk;
          Mk(!1), null === (kk = nk.current) || void 0 === kk || kk.focus()
        };
      return (0, uS.jsxs)("li", {
        ref: nk,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...mk ? Nm(pk) : {},
        children: [(0, uS.jsx)("strong", {
          className: "Baf2IslandName",
          children: rk(`${tK}islandsNewTitle`)
        }), !mk && (0, uS.jsx)("p", {
          className: "Baf2IslandStats",
          children: rk(`${tK}islandsNewNote`)
        }), mk && (0, uS.jsxs)(uS.Fragment, {
          children: [(0, uS.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: tm(rk, `${tK}islandsNewConfirm`, {
              name: ik
            })
          }), (0, uS.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [rk(`${tK}islandsNewNameLabel`), (0, uS.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Kk,
              placeholder: Uk,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Rm,
              onChange: kk => {
                xk(kk.target.value)
              },
              ...Gm(lk, pk)
            })]
          }), wk && (0, uS.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: rk(`${tK}islandsNameReserved`)
          })]
        }), (0, uS.jsxs)("div", {
          className: df()("Baf2IslandButtons", {
            Stacked: mk
          }),
          children: [(0, uS.jsx)(db.t, {
            disabled: !fk || mk && wk,
            onClick: () => {
              if (!mk) return xk(Uk), void Mk(!0);
              lk()
            },
            children: Sk > 0 ? rk(`${tK}islandsNewIn`, {
              time: sS(rk, Sk)
            }) : rk(mk ? `${tK}islandsNewConfirmButton` : `${tK}islandsNew`)
          }), mk && (0, uS.jsx)(db.f, {
            onClick: pk,
            children: rk(`${tK}islandsCancel`)
          })]
        })]
      })
    }

    function BK(kk) {
      var ek, ik;
      let {
        message: fk,
        arrivedAtMs: Sk,
        close: bk,
        leave: rk,
        openSocial: Pk
      } = kk;
      const mk = ob(),
        {
          t: Mk
        } = (0, qf.D)(),
        Kk = DM(1e3),
        [xk, nk] = (0, Dk.useState)(null),
        [Uk, Hk] = (0, Dk.useState)(new Map),
        [wk, lk] = (0, Dk.useState)(new Set),
        pk = fk.baf2IslandCards,
        yk = function(kk, ek, ik, Dk) {
          return (null !== kk && void 0 !== kk ? kk : []).filter((kk => ek + kk.baf2InviteLeftMs > ik && !Dk.has(kk.baf2InviteId)))
        }(fk.baf2IslandsInvites, Sk, Kk, wk),
        Yk = yk.map((kk => kk.baf2InviteId)).join(" "),
        Lk = (0, Dk.useRef)(null),
        Ck = kM(Lk);
      eM(), (0, Dk.useEffect)((() => {
        var kk, ek;
        null !== (kk = Lk.current) && void 0 !== kk && kk.contains(document.activeElement) || (null === (ek = Lk.current) || void 0 === ek || ek.focus())
      }), [fk, Yk]), (0, Dk.useEffect)((() => {
        Hk((kk => function(kk, ek, ik, Dk) {
          const fk = new Map;
          for (const Sk of ek) {
            const ek = kk.get(Sk.baf2IslandId);
            ek && (void 0 !== ek.untilGone || Dk < ek.answer) && Em(ek, Sk, ik) && fk.set(Sk.baf2IslandId, ek)
          }
          return fk.size === kk.size ? kk : fk
        }(kk, fk.baf2IslandCards, Date.now(), fk.baf2IslandsAnswered)))
      }), [fk]);
      const Ak = jm(Sk, fk.baf2IslandsWaitMs, Kk),
        jk = fk.baf2IslandsBlocked,
        sk = Im(jk, Ak),
        dk = function(kk, ek) {
          const ik = Im(kk, 0);
          return {
            switch: ik.switch ? ek : 0,
            change: ik.change ? ek : 0
          }
        }(jk, Ak),
        Vk = pk.length >= fk.baf2IslandsMax,
        Fk = pk.length > 0,
        uk = function(kk, ek, ik) {
          return kk + Math.max(0, ik - ek)
        }(fk.baf2IslandsNowMs, Sk, Kk),
        qk = null !== (ek = null === (ik = pk.find((kk => kk.baf2IslandActive))) || void 0 === ik ? void 0 : ik.baf2IslandName) && void 0 !== ek ? ek : "",
        Ik = function(kk) {
          const ek = kk.filter(cm).length;
          return ek <= 1 && ek < kk.length
        }(pk),
        zk = !0 === fk.baf2IslandsCoop,
        Qk = function(kk, ek) {
          const ik = kk.find((kk => kk.baf2IslandActive)),
            Dk = null === ik || void 0 === ik ? void 0 : ik.baf2IslandCoop;
          return ik && "member" === (null === Dk || void 0 === Dk ? void 0 : Dk.baf2CoopRole) ? {
            key: `${Lm}islandsKeepOwnMember`,
            names: {
              owner: Dk.baf2CoopOwner,
              island: ik.baf2IslandName
            }
          } : {
            key: ek ? `${Lm}islandsKeepOwn` : `${Lm}islandsKeepOwnSolo`
          }
        }(pk, zk),
        [vk, Ek] = (0, Dk.useState)(null);
      (0, Dk.useEffect)((() => {
        void 0 !== fk.baf2IslandsFocusInvite && Ek(fk.baf2IslandsFocusInvite)
      }), [fk]);
      const hk = (0, Dk.useCallback)((() => {
          Ek(null)
        }), []),
        ak = xk ? pk.find((kk => kk.baf2IslandId === xk.id)) : void 0,
        Wk = xk && ak && "hidden" !== Tm(ak, sk, Ik, Vk, zk, jk)[xk.mode] ? xk : null;
      return (0, uS.jsx)(sb.e, {
        close: bk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, uS.jsxs)("section", {
          ref: Lk,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: Ck ? {
            marginTop: `${Ck.marginTop}px`,
            maxHeight: `${Ck.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsxs)("div", {
              children: [(0, uS.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Mk(`${tK}islandsTitle`)
              }), Fk && (0, uS.jsx)("p", {
                children: Mk(`${tK}islandsSubtitle`, {
                  count: String(pk.length),
                  max: String(fk.baf2IslandsMax)
                })
              })]
            }), (0, uS.jsx)(db.n, {
              ariaLabel: Mk(`${tK}islandsClose`),
              onClick: bk
            })]
          }), (0, uS.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== jk && (0, uS.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: tm(Mk, Fm(jk, um(pk)), {
                island: qk
              })
            }), Fk && yk.length > 0 && (0, uS.jsx)(WK, {
              invites: yk,
              actions: sk,
              full: Vk,
              maxIslands: fk.baf2IslandsMax,
              waitSeconds: dk.switch,
              focus: vk,
              focused: hk,
              leave: rk,
              declined: kk => {
                lk((ek => new Set(ek).add(kk)))
              },
              t: Mk
            }), Fk && (0, uS.jsxs)(uS.Fragment, {
              children: [Vk && (0, uS.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Mk(`${tK}islandsFull`, {
                  max: String(fk.baf2IslandsMax)
                })
              }), (0, uS.jsx)("p", {
                className: "Baf2IslandsNote",
                children: tm(Mk, Qk.key, Qk.names)
              }), (0, uS.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [pk.map((kk => {
                  const ek = kk.baf2IslandId;
                  return (0, uS.jsx)(EK, {
                    card: kk,
                    keepOwn: Ik,
                    coopOn: zk,
                    openSocial: Pk,
                    blocked: jk,
                    maxIslands: fk.baf2IslandsMax,
                    serverNowMs: uk,
                    nowMs: Kk,
                    actions: sk,
                    full: Vk,
                    waits: dk,
                    answered: fk.baf2IslandsAnswered,
                    mode: (null === Wk || void 0 === Wk ? void 0 : Wk.id) === ek ? Wk.mode : null,
                    setMode: kk => {
                      nk(null === kk ? null : {
                        id: ek,
                        mode: kk
                      })
                    },
                    pending: Em(Uk.get(ek), kk, Kk),
                    onSent: (ik, Dk) => {
                      Hk((fk => {
                        const Sk = {
                          atMs: Date.now(),
                          from: kk.baf2IslandName,
                          answer: ik
                        };
                        return new Map(fk).set(ek, Dk ? {
                          ...Sk,
                          untilGone: Dk
                        } : Sk)
                      }))
                    },
                    leave: rk,
                    switchTo: () => {
                      mk.send(`baf2islandswitch ${ek}`), rk()
                    },
                    t: Mk
                  }, ek)
                })), !Vk && (0, uS.jsx)(XK, {
                  cards: pk,
                  activeName: qk,
                  canStart: sk.change,
                  waitSeconds: dk.change,
                  leave: rk,
                  t: Mk
                })]
              })]
            })]
          })]
        })
      })
    }
    var cK = ik(4946);
    const TK = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        xf: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      oK = Object.keys(TK),
      ZK = new Set([...Object.keys(Ge), ...[...ve.Press.recipes, ...ve["Wire Mill"].recipes].map((kk => kk.output))]),
      OK = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      gK = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      GK = / Bar$|Alloy$/,
      NK = /Porkchop|Beef|Mutton|Venison|Steak/,
      RK = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const JK = (0, Dk.memo)((function(kk) {
      let {
        item: ek,
        name: ik,
        amount: Dk,
        selected: fk,
        small: Sk,
        onPick: bk
      } = kk;
      return (0, uS.jsxs)("button", {
        type: "button",
        className: df()("Baf2TermTile", {
          On: fk,
          Small: Sk
        }),
        "aria-label": `${ik}: ${Dk}`,
        "aria-pressed": fk,
        onClick: () => {
          bk(ek)
        },
        children: [(0, uS.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, uS.jsx)(zf.c, {
            itemName: ek,
            amount: 0
          })
        }), (0, uS.jsx)("span", {
          className: "Baf2TermCount",
          children: AS(Dk, 1e4)
        }), !Sk && (0, uS.jsx)("span", {
          className: "Baf2TermName",
          children: ik
        })]
      })
    }));

    function kx(kk) {
      let {
        store: ek,
        close: ik,
        send: fk
      } = kk;
      const {
        t: Sk
      } = (0, qf.D)(), {
        isTouchScreen: bk
      } = (0, Af.n)(["isTouchScreen"]);
      ! function(kk) {
        const [ek, ik] = (0, Dk.useState)(kk.version);
        (0, Dk.useEffect)((() => (ik(kk.version), kk.subscribe((() => {
          ik(kk.version)
        })))), [kk])
      }(ek);
      const [rk, Pk] = (0, Dk.useState)("all"), [mk, Mk] = (0, Dk.useState)(!1), [Kk, xk] = (0, Dk.useState)(""), [nk, Uk] = (0, Dk.useState)(""), [Hk, wk] = (0, Dk.useState)(null), [lk, pk] = (0, Dk.useState)(!1), [yk, Yk, Lk] = function() {
        const kk = (0, Dk.useRef)(null),
          [ek, ik] = (0, Dk.useState)(!1),
          fk = () => {
            const ek = kk.current;
            ik(null !== ek && ek.scrollLeft + ek.clientWidth < ek.scrollWidth - 1)
          };
        return (0, Dk.useEffect)(fk), (0, Dk.useEffect)((() => {
          const ek = kk.current;
          if (!ek) return;
          const ik = new ResizeObserver(fk);
          return ik.observe(ek), () => {
            ik.disconnect()
          }
        }), []), [kk, ek, fk]
      }(), Ck = (0, Dk.useMemo)((() => new Map), [Sk]), Ak = kk => {
        let ek = Ck.get(kk);
        return void 0 === ek && (ek = function(kk, ek) {
          const ik = /^(.+) \((.+)\)$/.exec(kk);
          return ik ? ek(ik[2], ik[1]) : kk
        }(PS(Sk, kk), ((kk, ek) => Sk("buildAFactory2Game:terminalTileKind", {
          kind: kk,
          base: ek
        }))), Ck.set(kk, ek)), ek
      }, jk = ek.isReadOnly(), sk = lk && !jk, dk = ek.recent(), Vk = ek.items(), Fk = nk.trim().toLowerCase(), uk = sk ? ek.heldItems(Hk) : ("recent" === rk ? dk : Vk).filter((kk => {
        const ek = Ak(kk);
        return ("all" === rk || "recent" === rk || function(kk) {
          return wS(kk) ? "farm" : OK.test(kk) ? "nuclear" : GK.test(kk) ? "bars" : NK.test(kk) ? "farm" : gK.test(kk) ? "xf" : ZK.has(kk) ? "parts" : RK.test(kk) ? "farm" : "other"
        }(kk) === rk) && ("" === Fk || ek.toLowerCase().includes(Fk)) && ("" === Kk || ek.toUpperCase().startsWith(Kk))
      })), qk = new Set(Vk.map((kk => Ak(kk).charAt(0).toUpperCase()))), Ik = kk => sk ? ek.heldAmount(kk) : ek.amount(kk), zk = !sk && "recent" !== rk && dk.length > 0, Qk = function(kk, ek) {
        return null !== kk && ek.includes(kk) ? kk : null
      }(Hk, zk ? [...uk, ...dk] : uk), vk = null === Qk ? 0 : ek.amount(Qk), Ek = null === Qk ? 0 : Ik(Qk), hk = (0, Dk.useCallback)((kk => {
        wk((ek => ek === kk ? null : kk))
      }), []), ak = kk => Ek > 0 || sk && null === Qk && "fill" === kk && uk.length > 0, Wk = sk ? [
        ["one", Sk("buildAFactory2Game:terminalStoreOne")],
        ["stack", Sk("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Sk(null === Qk ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Sk("buildAFactory2Game:terminalTakeOne")],
        ["stack", Sk("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Sk("buildAFactory2Game:terminalFill")]
      ], tk = sk ? Sk("buildAFactory2Game:terminalStoreEmpty") : "" !== Kk ? Sk("buildAFactory2Game:terminalEmptyLetter", {
        letter: Kk
      }) : "" !== Fk ? Sk("buildAFactory2Game:terminalEmptySearch", {
        query: nk
      }) : Sk("buildAFactory2Game:terminalEmpty");
      return (0, uS.jsx)(sb.e, {
        close: ik,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, uS.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsxs)("div", {
              children: [(0, uS.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Sk(ek.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, uS.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, uS.jsx)("span", {
                  className: df()({
                    Off: sk
                  }),
                  children: Sk("buildAFactory2Game:terminalSubtitle", {
                    count: String(ek.siloCount())
                  })
                }), !jk && (0, uS.jsx)("span", {
                  className: df()({
                    Off: !sk
                  }),
                  children: Sk("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !jk && (0, uS.jsx)(cK.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Sk("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Sk("buildAFactory2Game:terminalModeStore")
              }],
              value: sk ? "store" : "take",
              onChange: kk => {
                pk("store" === kk), wk(null)
              },
              ariaLabel: Sk("buildAFactory2Game:terminalModes")
            }), (0, uS.jsx)(db.n, {
              onClick: ik
            })]
          }), (0, uS.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, uS.jsxs)("div", {
              className: df()("Baf2TermTools", {
                Hidden: sk
              }),
              children: [(0, uS.jsx)("div", {
                ref: yk,
                className: df()("Baf2TermChips", {
                  MoreRight: Yk
                }),
                onScroll: Lk,
                children: mk ? (0, uS.jsxs)(uS.Fragment, {
                  children: [(0, uS.jsx)("button", {
                    type: "button",
                    "aria-label": Sk("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Mk(!1), xk("")
                    },
                    children: "\u2190"
                  }), [...qk].sort().map((kk => (0, uS.jsx)("button", {
                    type: "button",
                    className: df()({
                      On: Kk === kk
                    }),
                    onClick: () => {
                      xk(Kk === kk ? "" : kk)
                    },
                    children: kk
                  }, kk)))]
                }) : (0, uS.jsxs)(uS.Fragment, {
                  children: [(0, uS.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Mk(!0)
                    },
                    children: Sk("buildAFactory2Game:terminalLetters")
                  }), oK.map((kk => (0, uS.jsx)("button", {
                    type: "button",
                    className: df()({
                      On: rk === kk
                    }),
                    onClick: () => {
                      Pk(kk)
                    },
                    children: Sk(TK[kk])
                  }, kk)))]
                })
              }), !bk && (0, uS.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: nk,
                placeholder: Sk("buildAFactory2Game:terminalSearch"),
                "aria-label": Sk("buildAFactory2Game:terminalSearch"),
                onChange: kk => {
                  Uk(kk.target.value)
                },
                onKeyDown: kk => {
                  kk.stopPropagation()
                }
              }), (0, uS.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Sk("buildAFactory2Game:terminalResort"),
                title: Sk("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  ek.resort()
                },
                children: "\u21c5"
              })]
            }), zk && (0, uS.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, uS.jsx)("span", {
                children: Sk(TK.recent)
              }), dk.map((kk => (0, uS.jsx)(JK, {
                item: kk,
                name: Ak(kk),
                amount: ek.amount(kk),
                selected: Qk === kk,
                small: !0,
                onPick: hk
              }, kk)))]
            }), (0, uS.jsx)("div", {
              className: "Baf2TermTiles",
              children: uk.length > 0 ? uk.map((kk => (0, uS.jsx)(JK, {
                item: kk,
                name: Ak(kk),
                amount: Ik(kk),
                selected: Qk === kk,
                onPick: hk
              }, kk))) : (0, uS.jsx)("p", {
                className: "Baf2TermEmpty",
                children: tk
              })
            }), (0, uS.jsxs)("div", {
              className: df()("Baf2TermActions", {
                Hidden: sk && 0 === uk.length
              }),
              children: [(0, uS.jsx)("span", {
                className: "Baf2TermPicked",
                children: jk ? (0, uS.jsxs)(uS.Fragment, {
                  children: [null !== Qk && vk > 0 ? Ak(Qk) : Sk("buildAFactory2Game:terminalVisiting"), (0, uS.jsx)("small", {
                    children: Sk("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Qk ? (0, uS.jsxs)(uS.Fragment, {
                  children: [Ak(Qk), (0, uS.jsx)("small", {
                    children: Sk("buildAFactory2Game:terminalStored", {
                      amount: vk.toLocaleString()
                    })
                  })]
                }) : Sk(sk ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !jk && Wk.map((kk => {
                let [ik, Dk] = kk;
                const Sk = "fill" === ik ? db.r : db.f;
                return (0, uS.jsx)(Sk, {
                  className: "Baf2TermTake",
                  disabled: !ak(ik),
                  onClick: () => {
                    (kk => {
                      ak(kk) && fk(null === Qk ? ek.putAll() : sk ? ek.put(kk, Qk) : ek.take(kk, Qk))
                    })(ik)
                  },
                  children: Dk
                }, ik)
              }))]
            })]
          })]
        })
      })
    }

    function ex(kk) {
      let {
        kind: ek,
        icon: ik,
        label: Dk,
        number: fk,
        preview: Sk,
        note: bk,
        tone: rk = null,
        share: Pk,
        onExplain: mk
      } = kk;
      return (0, uS.jsxs)("button", {
        type: "button",
        className: df()("NxLane", ek, {
          Warn: "warn" === rk,
          Danger: "danger" === rk
        }),
        onClick: mk,
        children: [(0, uS.jsxs)("span", {
          className: "NxLaneHead",
          children: [ik, (0, uS.jsx)("span", {
            className: "NxLaneLabel",
            children: Dk
          })]
        }), (0, uS.jsxs)("span", {
          className: "NxLaneNum",
          children: [fk, Sk && (0, uS.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Sk]
          })]
        }), (0, uS.jsx)("span", {
          className: "NxLaneNote",
          children: bk
        }), void 0 !== Pk && (0, uS.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Pk)) + "%"
          }
        })]
      })
    }

    function ix(kk) {
      let {
        kind: ek,
        step: ik,
        short: Dk,
        planned: fk
      } = kk;
      return (0, uS.jsx)("i", {
        className: df()("NxPipe", ek, `Step${ik}`, {
          Short: Dk,
          Planned: fk
        }),
        "aria-hidden": "true"
      })
    }

    function Dx(kk) {
      let {
        max: ek,
        bands: ik,
        ticks: Dk,
        now: fk,
        settle: Sk,
        settleTone: bk,
        onExplain: rk
      } = kk;
      const Pk = kk => Math.max(0, Math.min(ek, kk)) / ek * 100 + "%";
      let mk = 0;
      return (0, uS.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: rk,
        children: [(0, uS.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [ik.map((kk => {
            const ek = {
              bottom: Pk(mk),
              height: `calc(${Pk(kk.upTo)} - ${Pk(mk)})`
            };
            return mk = kk.upTo, (0, uS.jsx)("i", {
              className: df()("NxGaugeBand", kk.kind),
              style: ek
            }, kk.kind)
          })), null !== fk && (0, uS.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Pk(fk)
            }
          }), void 0 !== Sk && null !== Sk && (0, uS.jsx)("i", {
            className: df()("NxGaugeSettle", {
              Bad: "bad" === bk
            }),
            style: {
              bottom: Pk(Sk)
            }
          })]
        }), (0, uS.jsx)("span", {
          className: "NxGaugeTicks",
          children: Dk.map((kk => (0, uS.jsx)("small", {
            style: {
              bottom: Pk(kk)
            },
            children: kk
          }, kk)))
        })]
      })
    }

    function fx(kk) {
      const [ek, ik] = (0, Dk.useState)(null), [fk, Sk] = (0, Dk.useState)((() => {
        try {
          return null === window.localStorage.getItem(kk)
        } catch {
          return !1
        }
      })), bk = (0, Dk.useRef)(null);
      (0, Dk.useEffect)((() => () => {
        null !== bk.current && clearTimeout(bk.current)
      }), []);
      const rk = (0, Dk.useCallback)((ek => {
          ik(ek), Sk(!1);
          try {
            window.localStorage.setItem(kk, "1")
          } catch {}
          null !== bk.current && clearTimeout(bk.current), bk.current = setTimeout((() => {
            bk.current = null, ik(null)
          }), 5e3)
        }), [kk]),
        Pk = (0, Dk.useCallback)(((ek, ik) => {
          const Dk = `${kk}:${ek}`;
          try {
            if (null !== window.localStorage.getItem(Dk)) return;
            window.localStorage.setItem(Dk, "1")
          } catch {
            return
          }
          rk(ik)
        }), [rk, kk]);
      return {
        explained: ek,
        hinting: fk,
        explain: rk,
        explainOnce: Pk
      }
    }

    function Sx(kk) {
      let {
        text: ek,
        tone: ik,
        explained: Dk
      } = kk;
      return (0, uS.jsxs)("p", {
        className: df()("NxStatus", null === Dk ? ik : "Explain"),
        "aria-live": "polite",
        children: [null !== Dk && (0, uS.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Dk && void 0 !== Dk ? Dk : ek]
      })
    }
    const bx = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function rx(kk, ek) {
      const ik = Number(kk[ek]);
      return 1 === ik || 2 === ik || 3 === ik ? ik : 0
    }

    function Px(kk) {
      return !!dP("reactor", kk.baf2RxNeed) || void 0 !== kk.baf2RxLayout && kk.baf2RxNeed.some((kk => {
        let [ek, ik] = kk;
        return ik > 0 && bx.includes(ek)
      }))
    }
    const mx = "buildAFactory2Game:";

    function Mx(kk) {
      let {
        status: ek,
        store: ik,
        busy: Dk
      } = kk;
      const {
        t: fk
      } = (0, qf.D)();
      return function(kk) {
        return 0 !== (kk.baf2RxFlags & we) && (!kk.baf2RxFormed || void 0 !== kk.baf2RxLayout)
      }(ek) ? (0, uS.jsx)(db.r, {
        disabled: !Px(ek) || Dk,
        onClick: () => {
          ik.tap("fill", (() => {
            ik.send("fill")
          }))
        },
        children: fk(void 0 !== ek.baf2RxLayout ? `${mx}rxFillLayout` : `${mx}rxFill`)
      }) : null
    }

    function Kx(kk) {
      let {
        status: ek,
        store: ik,
        readOnly: fk,
        bare: Sk = !1
      } = kk;
      const {
        t: bk
      } = (0, qf.D)(), rk = ek.baf2RxLayout, [Pk, mk, Mk] = ek.baf2RxDims, Kk = (0, Dk.useMemo)((() => {
        if (void 0 === rk) return 0;
        const kk = Uint8Array.from(rk, ((kk, ek) => rx(rk, ek)));
        return fP([Pk - 2, mk - 2, Mk - 2], kk).max
      }), [rk, Pk, mk, Mk]);
      return void 0 === rk ? null : (0, uS.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Sk && (0, uS.jsx)("span", {
          className: "Baf2RxHint",
          children: bk(`${mx}rxLayoutLine`, {
            amount: QP(Kk)
          })
        }), !fk && (0, uS.jsx)(db.f, {
          onClick: () => {
            ik.send("layout", 0)
          },
          children: bk(`${mx}rxLayoutHide`)
        })]
      })
    }
    const xx = "buildAFactory2Game:",
      nx = {
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

    function Ux(kk) {
      let {
        id: ek,
        title: ik,
        body: Dk,
        bodyParams: fk,
        yes: Sk,
        cancel: bk,
        confirm: rk
      } = kk;
      const {
        t: Pk
      } = (0, qf.D)();
      return (0, uS.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": ek,
        children: [(0, uS.jsx)("h3", {
          id: ek,
          children: Pk(ik)
        }), (0, uS.jsx)("p", {
          children: Pk(Dk, fk)
        }), (0, uS.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, uS.jsx)(db.j, {
            onClick: bk,
            children: Pk(`${xx}rxCancel`)
          }), (0, uS.jsx)(db.R, {
            onClick: rk,
            children: Pk(Sk)
          })]
        })]
      })
    }

    function Hx(kk) {
      const [ek, ik] = (0, Dk.useState)((() => kk.get()));
      return (0, Dk.useEffect)((() => (ik(kk.get()), kk.subscribe((() => {
        ik(kk.get())
      })))), [kk]), ek
    }

    function wx(kk) {
      let {
        kind: ek,
        cap: ik,
        busy: fk = !1,
        whyNot: Sk = null,
        apart: bk
      } = kk;
      const {
        t: rk
      } = (0, qf.D)(), [Pk, mk] = (0, Dk.useState)(!1), Mk = null !== Sk, Kk = (0, Dk.useRef)(null);
      if ((0, Dk.useEffect)((() => {
          Mk && mk(!1)
        }), [Mk]), (0, Dk.useLayoutEffect)((() => {
          var kk;
          const ek = null === (kk = Kk.current) || void 0 === kk ? void 0 : kk.firstElementChild;
          Mk ? null === ek || void 0 === ek || ek.setAttribute("aria-disabled", "true") : fk || null === ek || void 0 === ek || ek.removeAttribute("aria-disabled")
        })), !Pk || Mk) return (0, uS.jsx)("span", {
        ref: Kk,
        className: "Baf2RxApartWrap",
        children: (0, uS.jsx)(db.j, {
          disabled: fk,
          className: df()({
            Baf2RxNotYet: Mk
          }),
          onClick: () => {
            Sk ? Sk() : mk(!0)
          },
          children: rk(`${xx}rxApart`)
        })
      });
      const xk = "battery" === ek,
        nk = void 0 === ik ? `${xx}batApartConfirmBodyPlan` : `${xx}batApartConfirmBody`;
      return (0, uS.jsx)(Ux, {
        id: `baf2ApartTitle_${ek}`,
        title: xk ? `${xx}batApartConfirmTitle` : `${xx}rxApartConfirmTitle`,
        body: xk ? nk : `${xx}rxApartConfirmBody`,
        bodyParams: void 0 === ik ? void 0 : {
          cap: ik
        },
        yes: `${xx}rxApart`,
        cancel: () => {
          mk(!1)
        },
        confirm: () => {
          mk(!1), bk()
        }
      })
    }

    function lx(kk) {
      let {
        mood: ek,
        big: ik
      } = kk;
      const Dk = nx[ek],
        fk = [];
      return Dk.rows.forEach(((kk, ek) => {
        for (let ik = 0; ik < kk.length; ik++) "." !== kk[ik] && fk.push((0, uS.jsx)("rect", {
          x: ik + 1,
          y: ek + 1,
          width: 1,
          height: 1,
          fill: "w" === kk[ik] ? "#8fd3ff" : Dk.colour
        }, `${ik},${ek}`))
      })), (0, uS.jsxs)("svg", {
        className: df()("Baf2RxFace", {
          Big: ik,
          Alarm: "alarm" === ek
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, uS.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, uS.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), fk]
      })
    }

    function px(kk) {
      return CS(kk, "+").replace("+", "")
    }

    function yx(kk) {
      let {
        kind: ek,
        dims: ik,
        cap: Dk,
        disabled: fk,
        compact: Sk,
        resize: bk
      } = kk;
      const {
        t: rk
      } = (0, qf.D)(), {
        min: Pk,
        max: mk
      } = Bi(ek), Mk = Math.min(Dk, mk), Kk = [`${xx}rxWide`, `${xx}rxTall`, `${xx}rxDeep`], xk = {
        w: String(ik[0]),
        h: String(ik[1]),
        d: String(ik[2]),
        blocks: String(zP(ek, ik))
      };
      return (0, uS.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, uS.jsx)("div", {
          className: "Baf2RxSteppers",
          children: ik.map(((kk, ek) => {
            const Sk = Dk => {
                const fk = [ik[0], ik[1], ik[2]];
                fk[ek] = kk + Dk, bk(fk)
              },
              xk = kk >= Mk;
            return (0, uS.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, uS.jsx)("button", {
                type: "button",
                "aria-label": rk(`${xx}rxSmaller`),
                disabled: fk || kk <= Pk,
                onClick: () => {
                  Sk(-1)
                },
                children: "\u2212"
              }), (0, uS.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [kk, (0, uS.jsx)("small", {
                  children: rk(Kk[ek])
                })]
              }), (0, uS.jsx)("button", {
                type: "button",
                "aria-label": rk(`${xx}rxBigger`),
                disabled: fk || xk,
                onClick: () => {
                  Sk(1)
                },
                children: xk && Dk < mk ? "\ud83d\udd12" : "+"
              })]
            }, Kk[ek])
          }))
        }), !Sk && (0, uS.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === ek ? rk(`${xx}rxSizeLine`, {
            ...xk,
            water: String(IP(ik))
          }) : rk(`${xx}batSizeLine`, xk)
        })]
      })
    }

    function Yx(kk) {
      let {
        on: ek,
        label: ik,
        disabled: Dk,
        locked: fk,
        pending: Sk,
        toggle: bk
      } = kk;
      return (0, uS.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": ek,
        disabled: Dk,
        "aria-disabled": fk || void 0,
        className: df()("Baf2RxSwitch", {
          On: ek,
          Locked: fk,
          Pending: Sk
        }),
        onClick: bk,
        children: [(0, uS.jsx)("span", {
          className: "Baf2RxKnob"
        }), ik]
      })
    }
    const Lx = "buildAFactory2Game:",
      Cx = .95;

    function Ax(kk, ek) {
      return 0 !== (kk.baf2RxFlags & ek)
    }

    function jx(kk) {
      return "cryo" === kk ? Jk.k : Jk.m
    }

    function sx(kk) {
      var ek, ik, Dk, fk, Sk, bk, rk, Pk, mk;
      return kk.baf2RxCryo ? {
        qn: "cryo",
        usePerS: null !== (fk = kk.baf2RxCryoUse) && void 0 !== fk ? fk : 0,
        needPerS: null !== (Sk = kk.baf2RxCryoNeed) && void 0 !== Sk ? Sk : 0,
        inPerS: null !== (bk = kk.baf2RxCryoIn) && void 0 !== bk ? bk : 0,
        stored: null !== (rk = kk.baf2RxCryoStored) && void 0 !== rk ? rk : 0,
        makersShort: null !== (Pk = kk.baf2RxMixersShort) && void 0 !== Pk ? Pk : 0,
        waterBeside: null !== (mk = kk.baf2RxWaterUse) && void 0 !== mk ? mk : 0,
        pct: kk.baf2RxWater
      } : {
        qn: "water",
        usePerS: null !== (ek = kk.baf2RxWaterUse) && void 0 !== ek ? ek : 0,
        needPerS: null !== (ik = kk.baf2RxWaterNeed) && void 0 !== ik ? ik : 0,
        inPerS: kk.baf2RxWaterIn,
        stored: kk.baf2RxWaterStored,
        makersShort: null !== (Dk = kk.baf2RxCondensersShort) && void 0 !== Dk ? Dk : 0,
        waterBeside: 0,
        pct: kk.baf2RxWater
      }
    }

    function dx(kk) {
      const ek = "running" === kk.baf2RxState || "idle" === kk.baf2RxState;
      return kk.baf2RxFormed && kk.baf2RxTarget !== kk.baf2RxThrottle && ek ? Vx(kk, kk.baf2RxTarget) : null
    }

    function Vx(kk, ek) {
      const [ik, Dk, fk, , , , Sk, , bk] = kk.baf2RxStats, rk = Ax(kk, Ue), Pk = sx(kk), mk = Pk.pct / 100, {
        gen: Mk,
        out: Kk,
        load: xk
      } = function(kk, ek, ik, Dk) {
        const fk = ik ? Nr : 1,
          Sk = Math.min(kk.fuelHeat * fk * Math.max(0, Math.min(1, ek)), kk.size * fk);
        return {
          gen: Sk,
          out: Sk,
          load: HP(Sk, kk.cooling, Dk)
        }
      }({
        fuelHeat: ik,
        cooling: Dk,
        size: fk
      }, ek / 100, rk, mk), nk = lP(Sk || DP(...kk.baf2RxDims)), Uk = kk.baf2RxHeat, Hk = Math.abs(xk - Uk), wk = function(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Jk.m;
        const Sk = ik ? Nr : 1,
          bk = Math.min(kk.fuelHeat * Sk * ek / 100, kk.size * Sk),
          rk = bk,
          Pk = kk.fuelHeat * Sk,
          mk = kk.cooling * UP(Dk.pct / 100),
          Mk = Pk > 0 && mk < kk.size * Sk ? Math.floor(100 * mk / Pk) : 100,
          Kk = bk * fk - Dk.inPerS;
        return {
          out: rk,
          hotAbove: Mk >= 100 ? null : Math.max(0, Mk),
          waterSecs: Dk.pct >= 100 && Kk > 1e-6 ? Math.max(0, Dk.stored) / Kk : null
        }
      }({
        fuelHeat: ik,
        cooling: Dk,
        size: fk
      }, ek, rk, {
        pct: Pk.pct,
        inPerS: Pk.inPerS,
        stored: Pk.stored
      }, jx(Pk.qn));
      return {
        pct: ek,
        out: Kk,
        coolPerS: Mk * jx(Pk.qn),
        pelletsPerMin: bk > 0 ? Kk / bk * 60 : 0,
        settle: xk,
        settleS: Hk > 2 ? nk * Math.log(Hk / 2) : 0,
        overheatS: xk > 100 && Uk < 100 ? nk * Math.log((xk - Uk) / (xk - 100)) : null,
        hotAbove: wk.hotAbove,
        coolantSecs: wk.waterSecs
      }
    }

    function Fx(kk) {
      return kk.baf2RxThrottle <= 0 && "running" !== kk.baf2RxState ? 0 : Vx(kk, kk.baf2RxTarget).pelletsPerMin / 60
    }

    function ux(kk, ek) {
      if (kk <= 0 || ek <= 0) return 0;
      const ik = kk / ek;
      return ik < .25 ? 1 : ik < .5 ? 2 : ik < .8 ? 3 : 4
    }

    function qx(kk, ek) {
      const ik = {};
      for (const [Dk, fk] of Object.entries(ek.params)) ik[Dk] = "time" === Dk ? sS(kk, fk) : "amount" === Dk ? QP(fk) : String(Math.round(fk));
      return kk(ek.key, ik)
    }

    function Ix(kk, ek) {
      return {
        key: `${Lx}${kk}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: ek
      }
    }

    function zx(kk) {
      var ek;
      const ik = Ax(kk, Ue),
        Dk = "running" === kk.baf2RxState,
        fk = LP(kk),
        Sk = kk.baf2RxHeat;
      var bk;
      if (Dk && Sk > gr) return {
        key: null !== (bk = fk.fix) && void 0 !== bk ? bk : `${Lx}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const rk = Dk ? Vx(kk, kk.baf2RxTarget).coolantSecs : null,
        Pk = "cryo" === sx(kk).qn;
      if (null !== rk && rk >= 1 && rk <= 30) return Ix(Pk ? "rxWarnCryo" : "rxWarnWater", "bad");
      const mk = eP(DP(...kk.baf2RxDims)).waste,
        Mk = Dk ? VP(kk, mk, Fx(kk)).fullInS : null;
      if (null !== Mk && Mk <= 120 && kk.baf2RxWaste >= .5 * mk) return Ix("rxWarnWaste", "warn");
      if (null !== rk && rk >= 1) return Ix(Pk ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: rk
      });
      const Kk = "noWater" === kk.baf2RxState && Sk > gr;
      if (kk.baf2RxDamage >= 1 && !Kk) return Ix("rxDamagedHeals", "warn", {
        pct: kk.baf2RxDamage
      });
      if (kk.baf2RxCryoCut) return Ix("rxFix_cryoCut", "warn");
      const xk = sx(kk);
      if ("noWater" === kk.baf2RxState && "cryo" === xk.qn) return Ix("noWater" === kk.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const nk = fk.fix === `${Lx}rxFix_scramCool` || "idle" === kk.baf2RxState && kk.baf2RxTarget <= 0;
      if (nk && kk.baf2RxFuel <= 0) return Ix("rxFix_noFuel", "warn");
      if (nk && kk.baf2RxWaterIn <= 0 && (null !== (ek = kk.baf2RxCryoIn) && void 0 !== ek ? ek : 0) <= 0) return Ix("rxFix_noWater", "warn");
      const Uk = fk.fix === `${Lx}rxFix_scramCool` ? AP(kk) : null;
      if (null !== Uk) return {
        key: Uk.key,
        params: {
          amount: Uk.amount
        },
        tone: "info"
      };
      if ("running" !== kk.baf2RxState && "idle" !== kk.baf2RxState && null !== fk.fix) return {
        key: fk.fix,
        params: {},
        tone: "scram" === kk.baf2RxState ? "info" : Kk ? "bad" : "warn"
      };
      var Hk;
      if ("idle" === kk.baf2RxState && kk.baf2RxTarget <= 0) return {
        key: null !== (Hk = fk.fix) && void 0 !== Hk ? Hk : `${Lx}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const wk = kk.baf2RxCryoStarved;
      if ("cryo" === xk.qn && wk && xk.needPerS > 0 && xk.usePerS < Cx * xk.needPerS) return Ix("noWater" === wk ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const lk = "cryo" === xk.qn,
        pk = xk.needPerS > 0 && xk.usePerS < Cx * xk.needPerS;
      if (lk ? pk || xk.makersShort > 0 && xk.pct < 100 : xk.pct < 100) {
        const ek = lk && pk ? Math.floor(100 * xk.usePerS / xk.needPerS) : Math.min(100, xk.pct);
        if (xk.makersShort > 0) {
          return Ix(`${lk?"rxCryoShortLine":"rxWaterShortLine"}${1===xk.makersShort?"One":""}${!lk&&kk.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: ek,
            count: xk.makersShort
          })
        }
        return Ix(lk ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: ek
        })
      }
      const yk = function(kk) {
        const [ek, ik, Dk] = kk.baf2RxStats, fk = sx(kk), Sk = wP({
          fuelHeat: ek,
          cooling: ik,
          size: Dk
        }, "cryo" === fk.qn ? Jk.e : 1, !0);
        return Math.max(0, Sk * jx(fk.qn) - fk.inPerS)
      }(kk);
      if (ik && yk > 0) return Ix("cryo" === xk.qn ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(yk)
      });
      if (Sk >= xP) return Ix("rxHotLine", "warn");
      const Yk = Vx(kk, kk.baf2RxTarget);
      var Lk;
      if (null !== Yk.overheatS) return Ix("rxWillOverheat", "bad", {
        pct: kk.baf2RxTarget,
        time: Yk.overheatS,
        safe: null !== (Lk = Yk.hotAbove) && void 0 !== Lk ? Lk : 100
      });
      if (Math.abs(Yk.settle - Sk) >= 3) return Ix("rxSettling", "info", {
        pct: kk.baf2RxTarget,
        heat: Math.round(Yk.settle),
        time: Yk.settleS
      });
      const Ck = AP(kk);
      if (null !== Ck) return {
        key: Ck.key,
        params: {
          amount: Ck.amount
        },
        tone: "info"
      };
      const Ak = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== ek && ("running" !== ek || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === kk.rods ? `${pP}rxLimitNoRods` : `${pP}rxLimit_${KP(kk)}`
      }({
        rods: kk.baf2RxStats[3],
        ...CP(kk)
      }, kk.baf2RxState, kk.baf2RxOut >= Cx * kk.baf2RxMaxNow, !1);
      if (Ak === `${Lx}rxLimit_size`) {
        const [ek, , ik, Dk] = kk.baf2RxStats, fk = Dk > 0 && ek > 0 ? Math.ceil(ik / (ek / Dk) - 1e-9) : Dk, Sk = kk.baf2RxDims.every((kk => kk >= Bi("reactor").max));
        if (fk < Dk) return Ix(Sk ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: fk,
          have: Dk
        });
        if (Sk) return Ix("rxLimit_sizeMax", "info")
      }
      return null !== Ak ? {
        key: Ak,
        params: {},
        tone: "info"
      } : Ix("rxSteady", "ok", {
        pct: kk.baf2RxTarget
      })
    }

    function Qx(kk) {
      var ek;
      if (kk.melted) return Ix("rxMeltedBody", "bad");
      if (-1 === kk.bad) return Ix("rxFix_noRoom", "warn");
      if (kk.bad > 0) return Ix(1 === kk.bad ? "rxBadOne" : "rxBad", "warn", {
        count: kk.bad
      });
      if (kk.left > 0) {
        const ek = 1 === kk.left ? "One" : "";
        return Ix(kk.canFill ? `rxPlanLeft${ek}` : `rxPlanLeftNoFill${ek}`, "info", {
          count: kk.left
        })
      }
      if (0 === kk.rods) return Ix("rxLimitNoRods", "warn");
      const ik = null !== (ek = kk.idle) && void 0 !== ek ? ek : 0;
      return ik > 0 ? Ix(1 === ik ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: ik
      }) : Ix("rxPlanReady", "ok")
    }

    function vx(kk) {
      return Math.floor(Math.max(0, kk[1] - 1) / 2)
    }

    function Ex(kk) {
      if (kk >= bP && kk < rP) {
        const ek = kk - bP;
        return {
          key: 0 === ek ? `${Lx}rxWhy_rodAlone` : 1 === ek ? `${Lx}rxWhy_rodOne` : `${Lx}rxWhy_rod`,
          params: {
            count: String(ek),
            heat: String(tr * (1 + Xr * ek))
          }
        }
      }
      return kk === rP ? {
        key: `${Lx}rxWhy_channel`,
        params: {
          amount: String(cr)
        }
      } : kk === PP ? {
        key: `${Lx}rxWhy_deadChannel`,
        params: {}
      } : kk === mP ? {
        key: `${Lx}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Lx}rxWhy_core`,
        params: {}
      }
    }
    const hx = "buildAFactory2Game:";

    function ax(kk, ek) {
      return 0 !== (kk.baf2RxFlags & ek)
    }

    function Wx(kk) {
      let {
        status: ek,
        pending: ik,
        store: Dk,
        explain: fk
      } = kk;
      const {
        t: Sk
      } = (0, qf.D)(), bk = ax(ek, ne), rk = ek.baf2RxTarget, Pk = ek.baf2RxThrottle, mk = function(kk) {
        return {
          press: () => {
            kk.throttlePress()
          },
          drag: ek => {
            kk.throttleDrag(ek)
          },
          release: () => {
            kk.throttleRelease()
          }
        }
      }(Dk), Mk = null === (Kk = Vx(ek, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Kk - 10),
        red: Kk
      };
      var Kk;
      return (0, uS.jsxs)("div", {
        className: df()("Baf2RxThrottle", {
          Off: bk
        }),
        onClick: () => {
          bk && fk(`${hx}rxWhy_startFirst`)
        },
        children: [(0, uS.jsx)("span", {
          className: "HideNarrow",
          children: Sk(`${hx}rxThrottle`)
        }), (0, uS.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, uS.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: rk,
            disabled: bk,
            style: bk ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Sk(`${hx}rxThrottle`),
            onPointerDown: () => {
              mk.press();
              const kk = () => {
                window.removeEventListener("pointerup", kk), window.removeEventListener("pointercancel", kk), mk.release()
              };
              window.addEventListener("pointerup", kk), window.addEventListener("pointercancel", kk)
            },
            onKeyUp: mk.release,
            onChange: kk => {
              mk.drag(Number(kk.target.value))
            }
          }), (0, uS.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Mk.amber}%, #ffb020 ${Mk.amber}% ${Mk.red}%, #ff3b30 ${Mk.red}%)`
            },
            "aria-hidden": "true"
          }), (0, uS.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Pk}% + ${8*(1-Pk/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, uS.jsxs)("b", {
          children: [`${rk}%`, (0, uS.jsx)("i", {
            className: df()("Baf2RxPendingDot", {
              On: ik
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function tx(kk) {
      let {
        status: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)(), Dk = Vx(ek, ek.baf2RxTarget), fk = sx(ek).qn, Sk = ik("cryo" === fk ? `${hx}rxRateCryo` : `${hx}rxRateWater`, {
        rate: px(Dk.coolPerS)
      }), bk = ik(`${hx}rxChain`, {
        pct: String(ek.baf2RxTarget),
        out: QP(Dk.out),
        heat: String(Math.round(Dk.settle)),
        coolant: Sk
      }), rk = null !== Dk.coolantSecs ? Dk.coolantSecs >= 1 ? ik("cryo" === fk ? `${hx}rxThrottleCryoOut` : `${hx}rxThrottleWaterOut`, {
        time: sS(ik, Dk.coolantSecs)
      }) : ik("cryo" === fk ? `${hx}rxThrottleCryoDry` : `${hx}rxThrottleWaterDry`) : null;
      return (0, uS.jsxs)("p", {
        className: "Baf2RxChain",
        children: [bk, null !== rk ? (0, uS.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", rk]
        }) : (0, uS.jsxs)("span", {
          children: [" \xb7 ", ik(`${hx}rxChainPellets`, {
            amount: vP(Dk.pelletsPerMin)
          })]
        })]
      })
    }

    function Xx(kk) {
      let {
        view: ek,
        store: ik,
        explain: fk,
        explainOnce: Sk
      } = kk;
      const {
        t: bk
      } = (0, qf.D)(), {
        status: rk
      } = ek, [Pk, mk] = (0, Dk.useState)(!1), Mk = ax(rk, ne), xk = ax(rk, Ue), nk = !ax(rk, le), Uk = rk.baf2RxHeat > 100;
      return (0, uS.jsxs)(uS.Fragment, {
        children: [(0, uS.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, uS.jsx)(Wx, {
            status: rk,
            pending: ek.throttlePending,
            store: ik,
            explain: fk
          }), (0, uS.jsx)(Yx, {
            on: xk,
            label: xk ? bk(`${hx}rxOdLeft`, {
              time: sS(bk, rk.baf2RxOdLeft)
            }) : bk(`${hx}rxOverdrive`),
            locked: nk,
            pending: 0 !== (ek.pendingFlags & Ue),
            toggle: () => {
              nk ? fk(`${hx}rxOverdriveTier`, {
                amount: String(Kk(13))
              }) : xk ? ik.setFlag(Ue, !1) : ek.odConfirmed ? ik.setFlag(Ue, !0) : mk(!0)
            }
          }), Mk || ek.startGuard ? (0, uS.jsx)(db.t, {
            disabled: ek.busy.has("start") || ek.startGuard,
            onClick: () => {
              ik.tap("start", (() => {
                ik.setFlag(ne, !1)
              }))
            },
            children: bk(ek.startGuard ? `${hx}rxStarting` : `${hx}rxStart`)
          }) : (0, uS.jsx)("span", {
            className: df()("Baf2RxScram", {
              Pulse: Uk
            }),
            children: (0, uS.jsx)(db.R, {
              onClick: () => {
                ik.shutDown()
              },
              children: bk(`${hx}rxScram`)
            })
          })]
        }), (0, uS.jsx)(tx, {
          status: rk
        }), Pk && (0, uS.jsx)(Ux, {
          id: "baf2RxOdTitle",
          title: `${hx}rxOdConfirmTitle`,
          body: `${hx}rxOdConfirmBody`,
          yes: `${hx}rxOdConfirm`,
          cancel: () => {
            mk(!1)
          },
          confirm: () => {
            mk(!1), ik.tap("odConfirm", (() => {
              ik.confirmOverdrive(), ik.setFlag(Ue, !0)
            })), Sk(`${hx}rxWhy_overdrive`)
          }
        })]
      })
    }

    function Bx(kk) {
      let {
        view: ek,
        store: ik,
        keepSize: Dk
      } = kk;
      const {
        t: fk
      } = (0, qf.D)(), {
        status: Sk
      } = ek;
      return (0, uS.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, uS.jsx)(yx, {
          kind: "reactor",
          dims: ek.dims,
          cap: Sk.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: kk => {
            ik.resize(kk)
          }
        }), Dk ? (0, uS.jsx)(db.j, {
          onClick: Dk,
          children: fk(`${hx}rxKeepSize`)
        }) : (0, uS.jsxs)(uS.Fragment, {
          children: [(0, uS.jsx)(Yx, {
            on: ek.guide,
            label: fk(`${hx}rxGuide`),
            toggle: () => {
              ik.toggleGuide()
            }
          }), ax(Sk, ye) && (0, uS.jsx)(Yx, {
            on: ek.starter,
            label: fk(`${hx}rxStarter`),
            toggle: () => {
              ik.toggleStarter()
            }
          }), (0, uS.jsx)(Mx, {
            status: Sk,
            store: ik,
            busy: ek.busy.has("fill")
          })]
        })]
      })
    }

    function cx(kk) {
      let {
        need: ek,
        kind: ik = "reactor",
        explain: Dk
      } = kk;
      const {
        t: fk
      } = (0, qf.D)(), Sk = ek.length <= 3, bk = ek.reduce(((kk, ek) => {
        let [, ik] = ek;
        return kk + ik
      }), 0);
      return (0, uS.jsxs)("div", {
        className: df()("Baf2RxParts", {
          Compact: !Sk
        }),
        onClick: () => {
          Dk("battery" === ik ? `${hx}batWhy_store` : `${hx}rxShellHint`)
        },
        children: [bk > 0 && (0, uS.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === bk ? fk(`${hx}rxBlocksOne`) : fk(`${hx}rxBlocks`, {
            blocks: String(bk)
          })
        }), 0 === ek.length ? (0, uS.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: fk("battery" === ik ? `${hx}batPartsDone` : `${hx}rxShellDone`)
        }) : sP(ek).map((kk => {
          let [ek, ik, Dk] = kk;
          const bk = function(kk) {
            const ek = qP[kk];
            if (void 0 === ek) return null;
            const [ik, Dk, fk] = FP[ek].colour.map((kk => Math.round(255 * kk)));
            return `rgb(${ik}, ${Dk}, ${fk})`
          }(ek);
          return (0, uS.jsxs)("span", {
            className: "Baf2RxChip",
            title: PS(fk, ek),
            children: [(0, uS.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === bk ? {
                visibility: "hidden"
              } : {
                background: bk
              },
              title: fk(`${hx}rxShopGhost`)
            }), (0, uS.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, uS.jsx)(zf.c, {
                itemName: ek,
                amount: 0
              })
            }), (0, uS.jsx)("span", {
              className: "Baf2RxChipName",
              children: Sk ? `${ik} ${rk=PS(fk,ek),rk.replace(/^(Reactor|Battery) (?=\S)/,"")}` : ik
            }), Dk >= ik ? (0, uS.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, uS.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Sk ? fk(`${hx}rxShopShort`, {
                count: String(ik - Dk)
              }) : "\u2212" + (ik - Dk)
            })]
          }, ek);
          var rk
        }))]
      })
    }
    const Tx = "buildAFactory2Game:";

    function ox(kk) {
      var ek, ik, fk, Sk, bk, rk, Pk;
      let {
        store: mk,
        close: Mk
      } = kk;
      const {
        t: Kk
      } = (0, qf.D)(), xk = ob(), nk = Hx(mk), {
        explained: Uk,
        explain: Hk
      } = fx("baf2RxExplained"), wk = (0, Dk.useCallback)(((kk, ek) => {
        Hk(Kk(kk, ek))
      }), [Hk, Kk]), lk = null === nk || void 0 === nk ? void 0 : nk.status, pk = !0 === (null === lk || void 0 === lk ? void 0 : lk.baf2BatReadOnly), yk = kk => {
        lk && xk.send(xe(lk.baf2BatAt, kk))
      }, [Yk, Lk, Ck] = null !== (ek = null === nk || void 0 === nk ? void 0 : nk.dims) && void 0 !== ek ? ek : [0, 0, 0], Ak = QP(null !== (ik = null === nk || void 0 === nk ? void 0 : nk.vK) && void 0 !== ik ? ik : 0), jk = !0 === (null === lk || void 0 === lk ? void 0 : lk.baf2BatFormed), sk = null !== (fk = null === lk || void 0 === lk ? void 0 : lk.baf2BatStored) && void 0 !== fk ? fk : 0, dk = Math.max(1, null !== (Sk = null === lk || void 0 === lk ? void 0 : lk.baf2BatIslandCap) && void 0 !== Sk ? Sk : 1), Vk = Math.min(100, 100 * sk / dk), Fk = null === lk || void 0 === lk ? void 0 : lk.baf2BatNetPerS, uk = function(kk, ek, ik) {
        return ik > 0 && ek >= ik ? "full" : void 0 !== kk && kk >= .05 ? "charging" : void 0 !== kk && kk <= -.05 && ek > 0 ? "draining" : "steady"
      }(Fk, sk, null !== (bk = null === lk || void 0 === lk ? void 0 : lk.baf2BatIslandCap) && void 0 !== bk ? bk : 0), qk = null !== (rk = null === lk || void 0 === lk ? void 0 : lk.baf2BatMadePerS) && void 0 !== rk ? rk : 0, Ik = null !== (Pk = null === lk || void 0 === lk ? void 0 : lk.baf2BatUsedPerS) && void 0 !== Pk ? Pk : 0;
      let zk, Qk = {},
        vk = "info";
      if (lk)
        if (jk) "charging" === uk ? (zk = `${Tx}batLine_charging`, Qk = {
          time: sS(Kk, (dk - sk) / Math.max(.05, null !== Fk && void 0 !== Fk ? Fk : 0))
        }, vk = "ok") : "draining" === uk ? (zk = `${Tx}batLine_draining`, Qk = {
          time: sS(Kk, sk / Math.max(.05, -(null !== Fk && void 0 !== Fk ? Fk : 0)))
        }, vk = "warn") : zk = "full" === uk ? `${Tx}batLine_full` : sk <= 0 && Ik > 0 ? `${Tx}batLine_empty` : `${Tx}batLine_steady`;
        else {
          var Ek;
          const kk = Qx({
            left: lk.baf2BatNeed.reduce(((kk, ek) => {
              let [, ik] = ek;
              return kk + ik
            }), 0),
            bad: lk.baf2BatBad,
            rods: 1,
            canFill: !0 === lk.baf2BatCanFill,
            melted: !1
          });
          zk = kk.key, Qk = {
            count: String(null !== (Ek = kk.params.count) && void 0 !== Ek ? Ek : 0)
          }, vk = kk.tone
        }
      else zk = `${Tx}batLine_steady`;
      const hk = Math.max(qk, Ik, 1);
      return (0, uS.jsx)(sb.e, {
        close: Mk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, uS.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, uS.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, uS.jsx)(zf.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, uS.jsxs)("div", {
                children: [(0, uS.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Kk(`${Tx}batTitle`)
                }), lk && (0, uS.jsxs)("p", {
                  className: df()("Baf2RxSubtitle", {
                    good: jk && "charging" === uk,
                    warn: jk && "draining" === uk
                  }),
                  children: [Yk, "\xd7", Lk, "\xd7", Ck, " \xb7 ", Kk(jk ? `${Tx}batState_${uk}` : `${Tx}rxSubPlanShort`)]
                })]
              })]
            }), (0, uS.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [lk && !pk && (0, uS.jsx)(wx, {
                kind: "battery",
                cap: jk ? Ak : void 0,
                busy: null === nk || void 0 === nk ? void 0 : nk.busy.has("apart"),
                apart: () => {
                  mk.tap("apart", (() => {
                    yk("apart")
                  }))
                }
              }), (0, uS.jsx)(db.n, {
                onClick: Mk
              })]
            })]
          }), nk && lk && (0, uS.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, uS.jsxs)("div", {
              className: df()("Baf2RxFlow Baf2BatFlow", {
                Plan: !jk
              }),
              children: [(0, uS.jsx)(ex, {
                kind: "Power",
                label: Kk(`${Tx}batMade`),
                number: jk ? `\u26a1 ${QP(qk)}/s` : "\u2014",
                note: Kk(`${Tx}batMadeNote`),
                share: jk ? qk / hk : void 0,
                onExplain: () => {
                  wk(`${Tx}batWhy_made`)
                }
              }), (0, uS.jsx)(ix, {
                kind: "Power",
                step: jk ? ux(qk, hk) : 0,
                planned: !jk
              }), (0, uS.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  wk(`${Tx}batWhy_store`)
                },
                children: [(0, uS.jsx)(Dx, {
                  max: 100,
                  bands: [{
                    upTo: jk ? Vk : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, uS.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, uS.jsx)("b", {
                    className: "Baf2BatStored",
                    children: jk ? Kk(`${Tx}batStoredOf`, {
                      amount: QP(sk),
                      cap: QP(lk.baf2BatIslandCap)
                    }) : Kk(`${Tx}batWillHold`, {
                      cap: Ak
                    })
                  }), (0, uS.jsx)("span", {
                    children: Kk(`${Tx}batAdds`, {
                      cap: Ak
                    })
                  }), jk && (0, uS.jsx)("small", {
                    children: Kk(`${Tx}batBreakNote`, {
                      cap: Ak
                    })
                  })]
                })]
              }), (0, uS.jsx)(ix, {
                kind: "Power",
                step: jk ? ux(Ik, hk) : 0,
                planned: !jk
              }), (0, uS.jsx)(ex, {
                kind: "Power",
                label: Kk(`${Tx}batUsed`),
                number: jk ? `\u26a1 ${QP(Ik)}/s` : "\u2014",
                note: Kk(`${Tx}batUsedNote`),
                share: jk ? Ik / hk : void 0,
                onExplain: () => {
                  wk(`${Tx}batWhy_used`)
                }
              })]
            }), (0, uS.jsx)(Sx, {
              text: Kk(zk, Qk),
              tone: vk,
              explained: Uk
            }), pk ? (0, uS.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Kk(`${Tx}rxNotYours`)
            }) : !jk && (0, uS.jsxs)(uS.Fragment, {
              children: [(0, uS.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, uS.jsx)(yx, {
                  kind: "battery",
                  dims: nk.dims,
                  cap: lk.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: kk => {
                    mk.resize(kk)
                  }
                }), (0, uS.jsx)(Yx, {
                  on: nk.guide,
                  label: Kk(`${Tx}rxGuide`),
                  toggle: () => {
                    mk.toggleGuide()
                  }
                }), lk.baf2BatCanFill && (0, uS.jsx)(db.r, {
                  disabled: !dP("battery", lk.baf2BatNeed) || nk.busy.has("fill"),
                  onClick: () => {
                    mk.tap("fill", (() => {
                      yk("fill")
                    }))
                  },
                  children: Kk(`${Tx}rxFill`)
                })]
              }), (0, uS.jsx)(cx, {
                need: lk.baf2BatNeed,
                kind: "battery",
                explain: wk
              })]
            })]
          })]
        })
      })
    }
    const Zx = "buildAFactory2Game:",
      Ox = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function gx(kk, ek) {
      return kk === SP ? null : ek ? "#4a4440" : kk < rP ? Ox[kk - bP] : kk === rP ? "#3fd0f0" : kk === PP ? "#2c3e4c" : "#55585e"
    }

    function Gx(kk) {
      let {
        inner: ek,
        looks: ik,
        layer: Dk,
        setLayer: fk,
        glow: Sk,
        melted: bk,
        explain: rk
      } = kk;
      const {
        t: Pk
      } = (0, qf.D)(), [mk, Mk, Kk] = ek, xk = Math.max(0, Math.min(Mk - 1, Dk)), nk = [];
      for (let Hk = 0; Hk < Kk; Hk++)
        for (let kk = 0; kk < mk; kk++) {
          var Uk;
          const ek = null !== (Uk = ik[(xk * Kk + Hk) * mk + kk]) && void 0 !== Uk ? Uk : SP,
            Dk = gx(ek, bk),
            fk = ek >= bP && ek < rP;
          nk.push(null === Dk ? (0, uS.jsx)("circle", {
            cx: kk + .5,
            cy: Hk + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${kk},${Hk}`) : (0, uS.jsx)("rect", {
            x: kk + .06,
            y: Hk + .06,
            width: .88,
            height: .88,
            fill: Dk,
            opacity: fk && !bk ? .5 + .5 * Sk : 1,
            onClick: kk => {
              kk.stopPropagation();
              const ik = Ex(ek);
              rk(ik.key, ik.params)
            }
          }, `${kk},${Hk}`))
        }
      return (0, uS.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, uS.jsx)("svg", {
          className: df()("Baf2RxMapGrid", {
            Melted: bk
          }),
          viewBox: `0 0 ${Math.max(1,mk)} ${Math.max(1,Kk)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Pk(`${Zx}rxWhy_core`),
          onClick: () => {
            rk(`${Zx}rxWhy_core`, {})
          },
          children: nk
        }), Mk > 1 && (0, uS.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, uS.jsx)("button", {
            type: "button",
            "aria-label": Pk(`${Zx}rxLayerDown`),
            disabled: xk <= 0,
            onClick: () => {
              fk(xk - 1)
            },
            children: "\u25bc"
          }), (0, uS.jsxs)("span", {
            children: [(0, uS.jsx)("span", {
              className: "HideNarrow",
              children: Pk(`${Zx}rxLayer`, {
                n: String(xk + 1),
                of: String(Mk)
              })
            }), (0, uS.jsx)("span", {
              className: "ShowNarrow",
              children: Pk(`${Zx}rxLayerShort`, {
                n: String(xk + 1),
                of: String(Mk)
              })
            })]
          }), (0, uS.jsx)("button", {
            type: "button",
            "aria-label": Pk(`${Zx}rxLayerUp`),
            disabled: xk >= Mk - 1,
            onClick: () => {
              fk(xk + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Nx = "buildAFactory2Game:",
      Rx = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Gr,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: YP,
        kind: "red"
      }],
      Jx = [50, Gr, 100];

    function kn(kk) {
      let {
        stats: ek,
        t: ik,
        explain: Dk
      } = kk;
      const fk = KP(ek),
        Sk = Math.max(1, ek.fuelHeat, ek.cooling, ek.size),
        bk = [
          ["fuel", `${Nx}rxBarRods`, ek.fuelHeat],
          ["cooling", `${Nx}rxBarCooling`, ek.cooling],
          ["size", `${Nx}rxBarSize`, ek.size]
        ];
      return (0, uS.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Dk(`${Nx}rxWhy_bars`)
        },
        children: [(0, uS.jsx)("span", {
          className: "Baf2RxMostLine",
          children: ik(`${Nx}rxMost`, {
            amount: QP(Math.min(ek.fuelHeat, ek.cooling, ek.size))
          })
        }), (0, uS.jsx)("span", {
          className: "Baf2RxMostBars",
          children: bk.map((kk => {
            let [ek, Dk, bk] = kk;
            return (0, uS.jsxs)("span", {
              className: df()("Baf2RxMostBar", ek, {
                Low: ek === fk
              }),
              children: [(0, uS.jsx)("small", {
                children: ik(Dk)
              }), (0, uS.jsx)("i", {
                children: (0, uS.jsx)("b", {
                  style: {
                    width: 100 * bk / Sk + "%"
                  }
                })
              })]
            }, ek)
          }))
        })]
      })
    }

    function en(kk) {
      var ek;
      let {
        view: ik,
        heat: fk,
        settle: Sk,
        settleLine: bk,
        settleBad: rk,
        explain: Pk
      } = kk;
      const {
        t: mk
      } = (0, qf.D)(), {
        status: Mk
      } = ik, Kk = Mk.baf2RxAt.join(","), [xk, nk] = (0, Dk.useState)((() => vx(ik.inner)));
      (0, Dk.useEffect)((() => {
        nk(vx(ik.inner))
      }), [Kk, ik.inner[1]]);
      const Uk = null !== (ek = ik.plan) && void 0 !== ek ? ek : CP(Mk),
        Hk = ik.plan ? ik.plan.powerPerUnit : Mk.baf2RxStats[8],
        wk = null === fk ? null : "alarm" === (lk = yP(Mk)) ? "red" : "hot" === lk ? "hot" : "warm" === lk ? "warm" : "cold";
      var lk;
      const pk = !Mk.baf2RxFormed && function(kk, ek) {
          return 0 !== (kk.baf2RxFlags & ek)
        }(Mk, He),
        yk = Mk.baf2RxDamage,
        Yk = Mk.baf2RxDamageTrend;
      return (0, uS.jsxs)("div", {
        className: df()("Baf2RxCore", null !== wk && void 0 !== wk ? wk : "plan"),
        children: [(0, uS.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, uS.jsx)(Gx, {
            inner: ik.inner,
            looks: ik.looks,
            layer: xk,
            setLayer: nk,
            glow: Mk.baf2RxFormed ? Mk.baf2RxThrottle / 100 : 1,
            melted: pk,
            explain: Pk
          }), (0, uS.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Pk(`${Nx}rxWhy_heat`)
            },
            children: [null !== fk ? (0, uS.jsxs)(uS.Fragment, {
              children: [(0, uS.jsx)("b", {
                children: mk(`${Nx}rxHeatPct`, {
                  pct: String(fk)
                })
              }), (0, uS.jsx)("span", {
                className: df()("Baf2RxBand", wk),
                children: mk(`${Nx}rxBand_${wk}`)
              })]
            }) : (0, uS.jsx)("b", {
              children: mk(`${Nx}rxHeat`)
            }), null !== bk && (0, uS.jsx)("span", {
              className: df()("Baf2RxSettle", {
                Bad: rk
              }),
              children: bk
            }), yk >= 1 && (0, uS.jsxs)("span", {
              className: df()("Baf2RxDamage", Yk),
              children: [mk(`${Nx}rxDamageLine`, {
                pct: String(yk)
              }), " \xb7 ", mk(`${Nx}rxDamage_${Yk}`), (0, uS.jsx)("i", {
                children: (0, uS.jsx)("b", {
                  style: {
                    width: `${Math.min(100,yk)}%`
                  }
                })
              })]
            })]
          }), (0, uS.jsx)(Dx, {
            max: YP,
            bands: Rx,
            ticks: Jx,
            now: fk,
            settle: Sk,
            settleTone: rk ? "bad" : null,
            onExplain: () => {
              Pk(`${Nx}rxWhy_heat`)
            }
          })]
        }), (0, uS.jsx)(kn, {
          stats: Uk,
          t: mk,
          explain: Pk
        }), Hk > 0 && (0, uS.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Pk(`${Nx}rxWhy_perPellet`)
          },
          children: mk(`${Nx}rxPerPellet`, {
            amount: QP(Hk)
          })
        })]
      })
    }

    function Dn(kk, ek) {
      var ik;
      if (!kk.baf2RxStore) return {
        note: ek(`${Nx}rxUpTo`, {
          amount: QP(kk.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Dk, fk] = kk.baf2RxStore, Sk = fk > 0 ? Dk / fk : 0, bk = String(Math.floor(100 * Sk)), rk = null !== (ik = kk.baf2RxStoreNetPerS) && void 0 !== ik ? ik : 0, Pk = function(kk) {
        var ek, ik;
        const [Dk, fk] = null !== (ek = kk.baf2RxStore) && void 0 !== ek ? ek : [0, 0], Sk = null !== (ik = kk.baf2RxStoreNetPerS) && void 0 !== ik ? ik : 0;
        return fk > 0 && Dk >= fk - 1 ? "running" === kk.baf2RxState ? `${Lx}rxStoreFull` : `${Lx}rxStoreFullOnly` : Sk > .05 ? `${Lx}rxStoreLine` : Sk < -.05 ? "running" === kk.baf2RxState ? `${Lx}rxStoreUsesMore` : `${Lx}rxStoreDraining` : `${Lx}rxStorePct`
      }(kk);
      return {
        note: ek(Pk, Pk === `${Nx}rxStoreLine` ? {
          pct: bk,
          time: sS(ek, (fk - Dk) / rk)
        } : {
          pct: bk
        }),
        share: Sk
      }
    }

    function fn(kk) {
      let {
        view: ek,
        explain: ik,
        preview: Dk
      } = kk;
      const {
        t: fk
      } = (0, qf.D)(), {
        status: Sk
      } = ek, bk = eP(DP(...ek.dims)), rk = Fx(Sk), Pk = Math.min(Math.round(Sk.baf2RxFuel), bk.fuel), mk = "running" === Sk.baf2RxState, Mk = mk ? ux(Sk.baf2RxOut, Sk.baf2RxMaxNow) : 0, Kk = function(kk, ek, ik) {
        const Dk = sx(kk),
          fk = "cryo" === Dk.qn,
          Sk = ik ? ik.coolantSecs : Dk.pct >= 100 && kk.baf2RxOut >= 1 ? Vx(kk, kk.baf2RxThrottle).coolantSecs : null;
        let bk, rk = !1;
        if (Dk.pct < 100) {
          const ik = 1 === Dk.makersShort,
            Sk = !fk && kk.baf2RxCryoOpen ? "OrCryo" : "";
          bk = Dk.makersShort > 0 ? ek(fk ? `${Nx}rxCryoAddMixer${ik?"":"s"}` : `${Nx}rxWaterAddCondenser${ik?"":"s"}${Sk}`, {
            count: String(Dk.makersShort)
          }) : ek(`${Nx}rxWaterNeeds`, {
            rate: px(Dk.needPerS)
          })
        } else if (null !== Sk) bk = ek(`${Nx}rxWaterRunsOut`, {
          time: sS(ek, Sk)
        });
        else if (Dk.waterBeside > 0) bk = ek(`${Nx}rxCryoPlusWater`, {
          rate: px(Dk.waterBeside)
        });
        else {
          const kk = function(kk) {
            return kk.inPerS <= 0 ? "rxWaterNoSupply" : kk.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Dk);
          rk = "rxWaterNoSupply" === kk, bk = ek(`${Nx}${kk}`, {
            amount: QP(Dk.stored)
          })
        }
        return {
          kind: fk ? "Cryo" : "Water",
          label: ek(fk ? `${Nx}rxCryo` : `${Nx}rxWater`),
          number: `${px(Dk.usePerS)}/s`,
          preview: ik ? `${px(ik.coolPerS)}/s` : null,
          note: bk,
          tone: "noWater" === kk.baf2RxState ? "danger" : rk ? "warn" : (Pk = Dk.pct, mk = Sk, Pk < 100 ? "danger" : null === mk ? null : mk < 300 ? "danger" : "warn"),
          share: Dk.pct / 100,
          why: fk ? `${Nx}rxWhy_cryo` : `${Nx}rxWhy_water`,
          short: Dk.pct < 100
        };
        var Pk, mk
      }(Sk, fk, Dk), xk = VP(Sk, bk.waste, rk), nk = Dn(Sk, fk), Uk = Vx(Sk, Sk.baf2RxTarget), Hk = mk && Math.abs(Uk.settle - Sk.baf2RxHeat) >= 3, wk = Dk ? Dk.pelletsPerMin / 60 : null;
      return (0, uS.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, uS.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, uS.jsx)(ex, {
            kind: "Fuel",
            label: fk(`${Nx}rxFuel`),
            number: String(Pk),
            preview: null !== wk && wk > 0 && Sk.baf2RxFuel > 0 ? sS(fk, Sk.baf2RxFuel / wk) : null,
            note: Sk.baf2RxFuel <= 0 ? fk(`${Nx}rxFuelEmpty`) : rk > 0 ? fk(`${Nx}rxFuelLeft`, {
              time: sS(fk, Sk.baf2RxFuel / rk)
            }) : fk(1 === Pk ? `${Nx}rxFuelPellet` : `${Nx}rxFuelPellets`),
            tone: "noFuel" === Sk.baf2RxState ? "danger" : Sk.baf2RxFuel < 2 ? "warn" : null,
            share: Sk.baf2RxFuel / bk.fuel,
            onExplain: () => {
              ik(`${Nx}rxWhy_fuel`)
            }
          }), (0, uS.jsx)(ex, {
            kind: Kk.kind,
            label: Kk.label,
            number: Kk.number,
            preview: Kk.preview,
            note: Kk.note,
            tone: Kk.tone,
            share: Kk.share,
            onExplain: () => {
              ik(Kk.why)
            }
          })]
        }), (0, uS.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, uS.jsx)(ix, {
            kind: "Fuel",
            step: Mk,
            short: "noFuel" === Sk.baf2RxState
          }), (0, uS.jsx)(ix, {
            kind: Kk.kind,
            step: Mk,
            short: Kk.short || "noWater" === Sk.baf2RxState
          })]
        }), (0, uS.jsx)(en, {
          view: ek,
          heat: Sk.baf2RxHeat,
          settle: Math.min(YP, Uk.settle),
          settleLine: Hk ? fk(`${Nx}rxHeatSettles`, {
            pct: String(Math.round(Uk.settle)),
            time: sS(fk, Uk.settleS)
          }) : null,
          settleBad: Uk.settle > 100,
          explain: ik
        }), (0, uS.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, uS.jsx)(ix, {
            kind: "Power",
            step: Mk
          }), (0, uS.jsx)(ix, {
            kind: "Waste",
            step: mk && Sk.baf2RxFuel - Sk.baf2RxPu > 0 ? Mk : 0,
            short: xk.full
          })]
        }), (0, uS.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, uS.jsx)(ex, {
            kind: "Power",
            label: fk(`${Nx}rxPowerOut`),
            number: `\u26a1 ${QP(Sk.baf2RxOut)}/s`,
            preview: Dk ? QP(Dk.out) : null,
            note: nk.note,
            share: nk.share,
            onExplain: () => {
              ik(`${Nx}rxWhy_power`)
            }
          }), (0, uS.jsx)(ex, {
            kind: "Waste",
            label: fk(`${Nx}rxWaste`),
            number: `${Math.floor(Sk.baf2RxWaste)}/${bk.waste}`,
            note: xk.full ? fk(`${Nx}rxWasteFull`) : null !== xk.fullInS ? fk(`${Nx}rxWasteFullIn`, {
              time: sS(fk, xk.fullInS)
            }) : fk(`${Nx}rxWasteSpent`),
            tone: "wasteFull" === Sk.baf2RxState ? "danger" : xk.full ? "warn" : null,
            share: Sk.baf2RxWaste / bk.waste,
            onExplain: () => {
              ik(`${Nx}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Sn(kk) {
      let {
        view: ek,
        explain: ik
      } = kk;
      const {
        t: Dk
      } = (0, qf.D)(), fk = ek.plan;
      if (!fk) return null;
      const Sk = fk.fuelHeat <= 0 ? null : fk.cooling > 0 ? Math.min(YP, 100 * fk.fuelHeat / fk.cooling) : YP,
        bk = Dk(`${Nx}rxPlanAtFull`);
      return (0, uS.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, uS.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, uS.jsx)(ex, {
            kind: "Fuel",
            label: Dk(`${Nx}rxFuel`),
            number: Dk(`${Nx}rxPlanPerMin`, {
              amount: vP(fk.pelletsPerMin)
            }),
            note: Dk(`${Nx}rxPlanPellets`),
            onExplain: () => {
              ik(`${Nx}rxWhy_fuel`)
            }
          }), (0, uS.jsx)(ex, {
            kind: "Water",
            label: Dk(`${Nx}rxWater`),
            number: `${px(fk.waterPerS)}/s`,
            note: ek.status.baf2RxCryoOpen && fk.waterPerS > 0 ? Dk(`${Nx}rxPlanOrCryo`, {
              rate: px(wP(fk, Jk.e) * Jk.k)
            }) : bk,
            onExplain: () => {
              ik(`${Nx}rxWhy_water`)
            }
          })]
        }), (0, uS.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, uS.jsx)(ix, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, uS.jsx)(ix, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, uS.jsx)(en, {
          view: ek,
          heat: null,
          settle: Sk,
          settleLine: null === Sk ? null : Dk(`${Nx}rxPlanHeat`, {
            pct: String(Math.round(Sk))
          }),
          settleBad: null !== Sk && Sk > 100,
          explain: ik
        }), (0, uS.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, uS.jsx)(ix, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, uS.jsx)(ix, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, uS.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, uS.jsx)(ex, {
            kind: "Power",
            label: Dk(`${Nx}rxPowerOut`),
            number: `\u26a1 ${QP(fk.max)}/s`,
            note: bk,
            onExplain: () => {
              ik(`${Nx}rxWhy_power`)
            }
          }), (0, uS.jsx)(ex, {
            kind: "Waste",
            label: Dk(`${Nx}rxWaste`),
            number: Dk(`${Nx}rxPlanPerMin`, {
              amount: vP(fk.pelletsPerMin)
            }),
            note: Dk(`${Nx}rxWasteSpent`),
            onExplain: () => {
              ik(`${Nx}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const bn = "buildAFactory2Game:",
      rn = {
        key: `${bn}rxWaiting`,
        params: {},
        tone: "info"
      };

    function Pn(kk, ek) {
      return 0 !== (kk.baf2RxFlags & ek)
    }

    function mn(kk) {
      var ek, ik;
      let {
        store: fk,
        close: Sk
      } = kk;
      const {
        t: bk
      } = (0, qf.D)(), rk = Hx(fk), {
        explained: Pk,
        hinting: mk,
        explain: Mk,
        explainOnce: Kk
      } = fx("baf2RxExplained"), xk = (0, Dk.useCallback)(((kk, ek) => {
        Mk(bk(kk, ek))
      }), [Mk, bk]), nk = (0, Dk.useCallback)(((kk, ek) => {
        Kk(kk, bk(kk, ek))
      }), [Kk, bk]), [Uk, Hk] = (0, Dk.useState)(!1), [wk, lk] = (0, Dk.useState)(!1), pk = null === rk || void 0 === rk ? void 0 : rk.status, yk = null === pk || void 0 === pk ? void 0 : pk.baf2RxAt.join(","), Yk = !0 === (null === pk || void 0 === pk ? void 0 : pk.baf2RxFormed);
      (0, Dk.useEffect)((() => {
        lk(!1), Hk(!1)
      }), [yk, Yk]), (0, Dk.useEffect)((() => (fk.opened(), () => {
        fk.closed()
      })), [fk]);
      const Lk = void 0 !== pk && Pn(pk, pe),
        Ck = pk ? Yk ? yP(pk) : null !== rk && void 0 !== rk && rk.plan ? function(kk, ek) {
          if (kk <= 0) return "off";
          if (ek <= 0) return "alarm";
          const ik = 100 * kk / ek;
          return ik < 50 ? "calm" : ik < xP ? "warm" : ik <= 100 ? "hot" : "alarm"
        }(rk.plan.fuelHeat, rk.plan.cooling) : "off" : "off",
        Ak = pk ? LP(pk) : null,
        jk = rk ? rk.waiting ? rn : Yk ? zx(rk.status) : function(kk) {
          var ek, ik;
          const {
            status: Dk
          } = kk;
          return Qx({
            left: Dk.baf2RxNeed.reduce(((kk, ek) => {
              let [, ik] = ek;
              return kk + ik
            }), 0),
            bad: Dk.baf2RxBad,
            rods: null !== (ek = null === (ik = kk.plan) || void 0 === ik ? void 0 : ik.rods) && void 0 !== ek ? ek : 0,
            canFill: Pn(Dk, we),
            melted: Pn(Dk, He),
            idle: kk.looks.reduce(((kk, ek) => kk + (ek === PP ? 1 : 0)), 0)
          })
        }(rk) : null,
        sk = mk && null !== jk && ("ok" === jk.tone || "info" === jk.tone),
        dk = pk ? function(kk) {
          const ek = 0 !== (kk.baf2RxFlags & ne),
            ik = kk.baf2RxHeat < Rr;
          return 0 !== (kk.baf2RxFlags & He) || ik && (ek || !kk.baf2RxFormed) ? null : kk.baf2RxFormed && !ek ? {
            key: `${pP}rxApartScram`,
            params: {}
          } : {
            key: `${pP}rxApartCooling`,
            params: {
              pct: String(Rr)
            }
          }
        }(pk) : null,
        [Vk, Fk, uk] = null !== (ek = null === rk || void 0 === rk ? void 0 : rk.dims) && void 0 !== ek ? ek : [0, 0, 0],
        qk = `${Vk}\xd7${Fk}\xd7${uk}`;
      return (0, uS.jsx)(sb.e, {
        close: Sk,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, uS.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, uS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, uS.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, uS.jsx)(lx, {
                mood: Ck
              }), (0, uS.jsxs)("div", {
                children: [(0, uS.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: bk(`${bn}rxTitle`)
                }), rk && (0, uS.jsxs)("p", {
                  className: df()("Baf2RxSubtitle", Yk && (null === Ak || void 0 === Ak ? void 0 : Ak.tone)),
                  children: [Yk && !Lk ? (0, uS.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": bk(`${bn}rxChangeSize`),
                    onClick: () => {
                      if (!pk) return;
                      const kk = Pn(pk, ne);
                      var ek;
                      (ek = {
                        scram: kk,
                        heat: pk.baf2RxHeat
                      }).scram && ek.heat < Rr ? Hk(!0) : xk(kk ? `${bn}rxResizeCooling` : `${bn}rxResizeHot`, {
                        pct: String(Rr)
                      })
                    },
                    children: [qk, " \u270e"]
                  }) : qk, " \xb7 ", bk(Yk ? null !== (ik = null === Ak || void 0 === Ak ? void 0 : Ak.label) && void 0 !== ik ? ik : `${bn}rxState_running` : `${bn}rxSubPlanShort`)]
                })]
              })]
            }), (0, uS.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [rk && !Lk && (0, uS.jsx)(wx, {
                kind: "reactor",
                busy: rk.busy.has("apart"),
                whyNot: dk ? () => {
                  xk(dk.key, dk.params)
                } : null,
                apart: () => {
                  fk.tap("apart", (() => {
                    fk.send("apart")
                  }))
                }
              }), (0, uS.jsx)(db.n, {
                onClick: Sk
              })]
            })]
          }), rk && jk && (0, uS.jsxs)("div", {
            className: "Baf2RxBody",
            children: [Yk ? (0, uS.jsx)(fn, {
              view: rk,
              explain: xk,
              preview: dx(rk.status)
            }) : (0, uS.jsx)(Sn, {
              view: rk,
              explain: xk
            }), (0, uS.jsx)(Sx, {
              text: sk ? `${qx(bk,jk)} ${bk(`${bn}rxTapHint`)}` : qx(bk, jk),
              tone: jk.tone,
              explained: Pk
            }), Lk ? (0, uS.jsxs)(uS.Fragment, {
              children: [(0, uS.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: bk(`${bn}rxNotYours`)
              }), (0, uS.jsx)(Kx, {
                status: rk.status,
                store: fk,
                readOnly: !0
              })]
            }) : Yk && !wk ? (0, uS.jsxs)(uS.Fragment, {
              children: [(0, uS.jsx)(Xx, {
                view: rk,
                store: fk,
                explain: xk,
                explainOnce: nk
              }), void 0 !== rk.status.baf2RxLayout && Px(rk.status) && (0, uS.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, uS.jsx)(Kx, {
                  status: rk.status,
                  store: fk,
                  readOnly: !1,
                  bare: !0
                }), (0, uS.jsx)(Mx, {
                  status: rk.status,
                  store: fk,
                  busy: rk.busy.has("fill")
                })]
              })]
            }) : (0, uS.jsxs)(uS.Fragment, {
              children: [(0, uS.jsx)(Bx, {
                view: rk,
                store: fk,
                keepSize: Yk ? () => {
                  lk(!1)
                } : void 0
              }), jP(rk.dims, rk.status.baf2RxDims) && (0, uS.jsx)(cx, {
                need: rk.status.baf2RxNeed,
                explain: xk
              }), (0, uS.jsx)(Kx, {
                status: rk.status,
                store: fk,
                readOnly: !1
              })]
            }), Uk && (0, uS.jsx)(Ux, {
              id: "baf2ResizeTitle",
              title: `${bn}rxResizeConfirmTitle`,
              body: `${bn}rxResizeConfirmBody`,
              yes: `${bn}rxChangeSize`,
              cancel: () => {
                Hk(!1)
              },
              confirm: () => {
                Hk(!1), lk(!0)
              }
            })]
          })]
        })
      })
    }
    class Mn {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(kk) {
        this.view = kk;
        for (const ek of this.listeners) ek()
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

    function Kn(kk) {
      let {
        commands: ek,
        store: ik,
        power: fk,
        water: Sk,
        reactor: bk,
        battery: rk,
        collider: Pk,
        terminal: mk,
        quests: Mk,
        tutorial: Kk,
        close: xk,
        leave: nk,
        askIslands: Uk,
        showCore: Hk,
        openSocial: wk
      } = kk;
      const {
        userContext: lk
      } = (0, ar.d)(), pk = hr.featureFlags.useSocialFeatures && lk.isLoggedIn(), [yk, Yk] = (0, Dk.useState)((() => ik.get()));
      (0, Dk.useEffect)((() => ik.subscribe((() => {
        Yk(ik.get())
      }))), [ik]);
      const Lk = "islands" === (null === yk || void 0 === yk ? void 0 : yk.kind) ? yk.backToCore : void 0;
      return (0, uS.jsxs)(Tb.Provider, {
        value: ek,
        children: ["core" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(YK, {
          view: yk.core,
          close: xk,
          askIslands: Uk
        }), "dropMap" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(jK, {
          message: yk.dropMap,
          quests: Mk,
          close: xk,
          leave: nk
        }), "islands" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(BK, {
          message: yk.islands,
          arrivedAtMs: yk.arrivedAtMs,
          close: Lk ? () => {
            Hk(Lk)
          } : xk,
          leave: nk,
          openSocial: pk ? wk : null
        }), "quests" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(WM, {
          store: Mk,
          tutorial: Kk,
          close: xk
        }), "transfer" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(rM, {
          message: yk.transfer,
          arrivedAtMs: yk.arrivedAtMs,
          close: xk,
          leave: nk
        }), "power" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(vb, {
          store: fk,
          close: xk
        }), "water" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(yr, {
          store: Sk,
          close: xk
        }), "reactor" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(mn, {
          store: bk,
          close: xk
        }), "battery" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(ox, {
          store: rk,
          close: xk
        }), "collider" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(Ym, {
          store: Pk,
          close: xk
        }), "terminal" === (null === yk || void 0 === yk ? void 0 : yk.kind) && (0, uS.jsx)(kx, {
          store: mk,
          close: xk,
          send: kk => {
            ek.send(kk)
          }
        })]
      })
    }
    var xn = ik(38081);

    function nn(kk, ek) {
      return kk.distSq - ek.distSq
    }
    class Un {
      constructor() {
        this.list = [], this.pool = []
      }
      add(kk, ek, ik, Dk) {
        let fk = this.pool[this.list.length];
        fk || (fk = {
          x: 0,
          y: 0,
          distSq: 0,
          element: ek,
          liftRem: ik,
          dot: Dk
        }, this.pool.push(fk)), fk.x = kk.x, fk.y = kk.y, fk.distSq = kk.distSq, fk.element = ek, fk.liftRem = ik, fk.dot = Dk, this.list.push(fk)
      }
    }
    class Hn {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = kk, this.sizes = new WeakMap, this.observer = new ResizeObserver((kk => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const ek of kk) {
            const kk = ek.borderBoxSize[0];
            "dot" !== ek.target.dataset.crowded && 0 !== kk.inlineSize && 0 !== kk.blockSize && this.sizes.set(ek.target, {
              width: kk.inlineSize,
              height: kk.blockSize
            })
          }
        })), this.remPx = 16, this.fU = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.Ay = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.Ay)
      }
      observe(kk) {
        this.observer.observe(kk)
      }
      unobserve(kk) {
        this.observer.unobserve(kk)
      }
      run(kk) {
        const ek = kk.list;
        ek.sort(nn);
        const ik = this.pxPerVw,
          Dk = this.pxPerVh;
        this.fU.length = 0, this.hud && this.fU.push(...this.hud.boxes(performance.now()));
        for (const Sk of ek) {
          var fk;
          const kk = this.sizes.get(Sk.element);
          let ek = "no";
          if (kk && kk.width > 0) {
            const fk = Sk.x * ik,
              bk = Sk.y * Dk - Sk.liftRem * this.remPx;
            this.fit(fk, bk, kk.width, kk.height) || (ek = Sk.dot && this.fit(fk, bk, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (fk = Sk.element.dataset.crowded) && void 0 !== fk ? fk : "no") !== ek && ("no" === ek ? delete Sk.element.dataset.crowded : Sk.element.dataset.crowded = ek), "hidden" !== ek && (0, xn.c)(Sk.element, Sk.x, Sk.y)
        }
        ek.length = 0
      }
      fit(kk, ek, ik, Dk) {
        const fk = kk - ik / 2,
          Sk = kk + ik / 2,
          bk = ek - Dk,
          rk = this.fU;
        for (let Pk = 0; Pk < rk.length; Pk += 4)
          if (fk < rk[Pk + 1] - 2 && Sk > rk[Pk] + 2 && bk < rk[Pk + 3] - 2 && ek > rk[Pk + 2] + 2) return !1;
        return rk.push(fk, Sk, bk, ek), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.Ay)
      }
    }
    const wn = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class pn {
      constructor() {
        this.cards = wn.map((kk => document.getElementsByClassName(kk))), this.watched = wn.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(kk) {
        kk - this.refreshedAt > 1e3 && (this.refreshedAt = kk, this.stale = !0);
        for (let ik = 0; ik < this.cards.length; ik++) {
          var ek;
          const kk = null !== (ek = this.cards[ik][0]) && void 0 !== ek ? ek : null;
          kk !== this.watched[ik] && this.watch(ik, kk)
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
        for (const ek of this.watched) {
          if (!ek || ek.closest(".NoRoom")) continue;
          const ik = ek.getBoundingClientRect();
          let Dk = ik.top,
            fk = ik.bottom;
          if (ek === this.watched[0] && this.hud) {
            const kk = this.hud.getBoundingClientRect();
            Dk = Math.max(Dk, kk.top), fk = Math.min(fk, kk.bottom)
          }
          ik.width > 0 && fk > Dk && kk.push(ik.left, ik.right, Dk, fk)
        }
      }
      watch(kk, ek) {
        const ik = this.watched[kk];
        var Dk, fk;
        (ik && this.sizes.unobserve(ik), this.watched[kk] = ek, this.stale = !0, ek && this.sizes.observe(ek), 0 === kk) && (null === (Dk = this.hud) || void 0 === Dk || Dk.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (fk = null === ek || void 0 === ek ? void 0 : ek.closest(".Baf2QuestHud")) && void 0 !== fk ? fk : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const yn = [0, 0, 0],
      Yn = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Ln(kk, ek, ik, Dk, fk, Sk) {
      let [bk, rk, Pk] = Dk;
      const mk = (bk + .5 - ik[0]) ** 2 + (rk - ik[1]) ** 2 + (Pk + .5 - ik[2]) ** 2;
      let Mk = null;
      mk <= Sk ** 2 && (yn[0] = bk + .5, yn[1] = rk + fk, yn[2] = Pk + .5, Mk = ek.projectWorldPosToViewport(yn));
      const Kk = null !== Mk && Mk.x > -5 && Mk.x < 105 && Mk.y > -5 && Mk.y < 105;
      return (0, xn.g)(kk, !Kk), Kk ? (Yn.x = Mk.x, Yn.y = Mk.y, Yn.distSq = mk, Yn) : null
    }
    class Cn {
      constructor(kk) {
        this.onElement = kk, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(kk) {
        const ek = [];
        for (let ik = 0; ik + 4 < kk.length; ik += 5) {
          const Dk = [kk[ik], kk[ik + 1], kk[ik + 2]];
          ek.push({
            key: Dk.join(","),
            pos: Dk,
            status: rf[kk[ik + 3]],
            kind: Fe[kk[ik + 4]]
          })
        }
        this.markers = ek, this.keys = new Set(ek.map((kk => {
          let {
            key: ek
          } = kk;
          return ek
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
        let ek = this.refs.get(kk);
        return ek || (ek = ek => {
          const ik = this.elements.get(kk);
          var Dk, fk;
          ik && (null === (Dk = this.onElement) || void 0 === Dk || Dk.call(this, ik, !1));
          ek ? (this.elements.set(kk, ek), null === (fk = this.onElement) || void 0 === fk || fk.call(this, ek, !0)) : (this.elements.delete(kk), this.refs.delete(kk))
        }, this.refs.set(kk, ek)), ek
      }
      onAfterRender(kk, ek, ik) {
        for (const Dk of this.markers) {
          const fk = this.elements.get(Dk.key);
          if (!fk) continue;
          const Sk = Ln(fk, kk, ek, Dk.pos, 1.05, 24);
          Sk && ik.add(Sk, fk, .45, !0)
        }
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
    }
    const An = {
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
    const jn = (0, Dk.memo)((function(kk) {
        let {
          status: ek,
          kind: ik,
          bindRef: Dk
        } = kk;
        const {
          t: fk
        } = (0, qf.D)(), Sk = function(kk, ek) {
          var ik;
          if ("noFuel" === kk) {
            var Dk, fk;
            const kk = null === (Dk = ve[ek]) || void 0 === Dk || null === (fk = Dk.fuels) || void 0 === fk ? void 0 : fk.find((kk => fi.includes(kk)));
            return null !== kk && void 0 !== kk ? kk : An.noFuel
          }
          return void 0 !== (null === (ik = ve[ek]) || void 0 === ik ? void 0 : ik.cryoMade) ? "noOutlet" === kk ? "Fluid Pipe" : "noInput" === kk ? "Biomass" : An[kk] : An[kk]
        }(ek, ik);
        return (0, uS.jsxs)("div", {
          className: df()("Baf2StallMarker", ek),
          ref: Dk,
          hidden: !0,
          children: [Sk && (0, uS.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, uS.jsx)(zf.c, {
              itemName: Sk,
              amount: 0
            })
          }), (0, uS.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === ek ? "?" : "!"
          }), (0, uS.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: fk(`buildAFactory2Game:stallTag_${ek}`)
          })]
        })
      })),
      sn = (0, Dk.memo)((function(kk) {
        let {
          controller: ek
        } = kk;
        const [ik, fk] = (0, Dk.useState)((() => ek.get()));
        return (0, Dk.useEffect)((() => (fk(ek.get()), ek.subscribe((() => {
          fk(ek.get())
        })))), [ek]), (0, uS.jsx)("div", {
          className: "Baf2StallMarkers",
          children: ik.map((kk => (0, uS.jsx)(jn, {
            status: kk.status,
            kind: kk.kind,
            bindRef: ek.bind(kk.key)
          }, kk.key)))
        })
      })),
      dn = wi.h + 150;
    class Vn {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(kk, ek) {
        const ik = ek - kk;
        null === this.offset || ik < this.offset ? this.offset = ik : this.offset = Math.min(ik, this.offset + .02 * (ek - this.sampledAt)), this.sampledAt = ek
      }
      toLocal(kk) {
        var ek;
        return kk + (null !== (ek = this.offset) && void 0 !== ek ? ek : 0) + dn
      }
    }
    var Fn = ik(38086);
    const un = 15 * Math.PI / 180,
      qn = Math.SQRT2,
      In = [4, 2];

    function zn(kk, ek) {
      const ik = [1 / 0, 1 / 0, 1 / 0],
        Dk = [-1 / 0, -1 / 0, -1 / 0];
      for (const Pk of kk)
        for (let kk = 0; kk < 3; kk++) ik[kk] = Math.min(ik[kk], Pk[kk]), Dk[kk] = Math.max(Dk[kk], Pk[kk]);
      const fk = (ik[0] + Dk[0]) / 2,
        Sk = (ik[1] + Dk[1]) / 2,
        bk = (ik[2] + Dk[2]) / 2;
      let rk = 0;
      for (const Pk of kk) rk = Math.max(rk, Math.hypot(Pk[0] - fk, Pk[1] - Sk, Pk[2] - bk));
      return {
        x: fk,
        y: Sk,
        z: bk,
        r: rk + ek
      }
    }

    function Qn(kk, ek, ik) {
      const Dk = ek.x - kk.x,
        fk = ek.y - kk.y,
        Sk = ek.z - kk.z,
        bk = Math.sqrt(Dk * Dk + fk * fk + Sk * Sk);
      if (bk <= ek.r + 8) return 1;
      const rk = ek.r / bk,
        Pk = Math.sqrt(1 - rk * rk),
        mk = Pk < -kk.cosHalf,
        Mk = (Dk * kk.dx + fk * kk.dy + Sk * kk.dz) / bk;
      if (!mk && Mk < kk.cosHalf * Pk - kk.sinHalf * rk) return 0;
      const Kk = ik * qn * kk.frameMs * kk.pxPerBlock / (bk - ek.r);
      for (let xk = 0; xk < In.length; xk++)
        if (Kk * In[xk] <= 1) return In[xk];
      return 1
    }

    function vn(kk, ek) {
      return {
        name: kk,
        at: ek,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const En = [0, 0, 0];

    function hn(kk, ek, ik) {
      let [, Dk, fk, Sk, bk, rk] = ek;
      const Pk = wi.c * (null !== bk && void 0 !== bk ? bk : 1),
        mk = [];
      for (let nk = 0; nk < Dk.length; nk += 3) mk.push([Dk[nk] + .5, Dk[nk + 1] + .65, Dk[nk + 2] + .5]);
      const Mk = [];
      for (let nk = 0; nk < mk.length - 1; nk++) {
        const [kk, ek] = [mk[nk], mk[nk + 1]];
        Mk.push([(kk[0] + ek[0]) / 2, (kk[1] + ek[1]) / 2, (kk[2] + ek[2]) / 2])
      }
      const Kk = mk.slice(1, -1),
        xk = new Uint8Array(Kk.length);
      for (const nk of null !== rk && void 0 !== rk ? rk : []) xk[nk >> 1] |= 1 & nk ? 2 : 1;
      return {
        island: kk,
        length: Kk.length,
        loop: Sk,
        cellsPerMs: Pk,
        edges: Mk,
        ci: Kk,
        bounds: zn([...Mk, ...Kk], .3),
        changed: !0,
        culled: !1,
        hide: xk,
        items: fk.map((kk => {
          let [ek, Dk] = kk;
          return vn(ek, (0, wi.z)(ek, Dk, ik, Pk).at)
        }))
      }
    }

    function an(kk, ek) {
      const {
        items: ik
      } = kk;
      if (0 === ik.length) return;
      const Dk = kk.length / kk.cellsPerMs,
        fk = Math.floor((ek - ik[0].at) / Dk) - 1;
      if (fk > 0)
        for (const Sk of ik) Sk.at += fk * Dk
    }

    function Wn(kk, ek) {
      const ik = Math.min(Math.floor(ek), kk.length - 1),
        Dk = kk.hide[ik];
      return 0 !== Dk && 0 !== (Dk & (ek - ik < .5 ? 1 : 2))
    }

    function tn(kk, ek) {
      const ik = Math.min(Math.floor(ek), kk.length - 1),
        Dk = ek - ik,
        fk = Dk < .5,
        Sk = fk ? kk.edges[ik] : kk.ci[ik],
        bk = fk ? kk.ci[ik] : kk.edges[ik + 1],
        rk = fk ? 2 * Dk : 2 * Dk - 1;
      En[0] = Sk[0] + (bk[0] - Sk[0]) * rk, En[1] = Sk[1] + (bk[1] - Sk[1]) * rk, En[2] = Sk[2] + (bk[2] - Sk[2]) * rk
    }
    const Xn = Math.PI / 4;
    class Bn {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Vn, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.Ay = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(kk) {
        const ek = performance.now();
        this.clock.sample(kk.baf2BeltLinesAt, ek), this.queue(kk.baf2BeltLinesAt, kk, 0, null, null, 0), this.applyDue(ek)
      }
      onMoves(kk) {
        const ek = performance.now(),
          ik = kk.baf2BeltMovesAt;
        this.clock.sample(ik, ek);
        for (const [Dk, fk, Sk, bk] of kk.baf2BeltMoveList) null === fk ? this.queue(ik - Sk, null, Dk, null, null, null !== bk && void 0 !== bk ? bk : 0) : this.queue(ik - Sk, null, Dk, fk, null !== bk && void 0 !== bk ? bk : null, 0);
        this.applyDue(ek)
      }
      start(kk) {
        this.pool = new Fn.e(kk, {
          scale: .3,
          yaw: Xn
        }, 64), this.Ay(), window.addEventListener("resize", this.Ay)
      }
      onAfterRender(kk) {
        const {
          pool: ek
        } = this;
        if (!ek) return;
        const ik = performance.now(),
          Dk = ik - this.lastRenderAt;
        this.lastRenderAt = ik, Dk < 100 && (this.frameMs += .1 * (Dk - this.frameMs));
        const fk = ik + this.frameMs;
        this.applyDue(fk);
        const Sk = kk.cameraPosition,
          bk = ek.follow(Sk);
        this.setView(kk, Sk);
        const rk = this.frame++;
        for (let Pk = 0; Pk < this.shown.length; Pk++) {
          const kk = this.shown[Pk],
            ik = Qn(this.view, kk.bounds, kk.cellsPerMs),
            Dk = kk.culled && 0 !== ik;
          if (kk.culled = 0 === ik, !bk && !kk.changed && !Dk && (0 === ik || (rk + Pk) % ik !== 0)) continue;
          kk.changed = !1, kk.loop && (an(kk, fk), (0, wi.u)(kk.items, kk.length, fk, kk.cellsPerMs));
          let Sk = kk.length;
          for (let rk = 0; rk < kk.items.length; rk++) {
            const ik = kk.items[rk],
              Dk = (0, wi.B)(ik.at, Sk, fk, kk.cellsPerMs);
            if (Sk = Dk - wi.n, Wn(kk, Dk)) {
              null === ik.kind || ik.hidden || (ik.kind.hide(ik.slot), ik.hidden = !0);
              continue
            }
            let Pk = ik.kind;
            if (null === Pk) {
              if (Pk = ek.kindOf(ik.name), null === Pk) continue;
              ik.kind = Pk, ik.slot = Pk.take(), ik.hidden = !0, ik.drawn = NaN
            } else if (Dk === ik.drawn && !ik.hidden && !bk) continue;
            tn(kk, Dk), Pk.write(ik.slot, En[0], En[1], En[2]), ik.hidden = !1, ik.drawn = Dk
          }
        }
        ek.commit()
      }
      dispose() {
        var kk;
        window.removeEventListener("resize", this.Ay), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (kk = this.pool) || void 0 === kk || kk.dispose(), this.pool = null
      }
      setView(kk, ek) {
        const {
          cameraDir: ik,
          lastDir: Dk
        } = this, fk = kk.cameraDirection;
        for (let Mk = 0; Mk < 3; Mk++) Dk[Mk] = ik[Mk], ik[Mk] = fk[Mk];
        const Sk = ik[0] * Dk[0] + ik[1] * Dk[1] + ik[2] * Dk[2],
          bk = Number.isNaN(Sk) ? 0 : Math.acos(Math.min(1, Math.max(-1, Sk))),
          {
            width: rk,
            height: Pk
          } = this,
          mk = kk.tanHalfFovX;
        ! function(kk, ek, ik, Dk, fk, Sk, bk) {
          let rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          kk.x = ek[0], kk.y = ek[1], kk.z = ek[2], kk.dx = ik[0], kk.dy = ik[1], kk.dz = ik[2];
          const Pk = Math.min(Math.PI, Math.atan(Math.sqrt(Dk * Dk + fk * fk)) + un + rk);
          kk.cosHalf = Math.cos(Pk), kk.sinHalf = Math.sin(Pk), kk.pxPerBlock = Sk / (2 * fk), kk.frameMs = bk
        }(this.view, ek, ik, mk, mk * Pk / rk, Pk * window.devicePixelRatio, this.frameMs, bk)
      }
      queue(kk, ek, ik, Dk, fk, Sk) {
        const bk = Math.max(this.clock.toLocal(kk), this.lastPendingAt);
        this.lastPendingAt = bk, this.pending.push({
          at: bk,
          lines: ek,
          line: ik,
          name: Dk,
          pos: fk,
          idx: Sk
        })
      }
      applyDue(kk) {
        const {
          pending: ek
        } = this;
        for (; this.pendingHead < ek.length && ek[this.pendingHead].at <= kk;) {
          const kk = ek[this.pendingHead++];
          if (kk.lines) this.applyLines(kk.lines, kk.at), kk.lines = null;
          else {
            const ek = this.lines.get(kk.line);
            ek && this.applyMove(ek, kk, kk.at)
          }
        }
        this.pendingHead === ek.length ? (ek.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > ek.length && (ek.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(kk, ek) {
        this.clearIsland(kk.baf2BeltIsland);
        for (const ik of kk.baf2BeltLineList) this.lines.set(ik[0], hn(kk.baf2BeltIsland, ik, ek));
        this.shown = [...this.lines.values()]
      }
      applyMove(kk, ek, ik) {
        let {
          name: Dk,
          pos: fk,
          idx: Sk
        } = ek;
        kk.changed = !0, kk.loop && (an(kk, ik), (0, wi.u)(kk.items, kk.length, ik, kk.cellsPerMs)), null !== Dk && null !== fk ? (0, wi.v)(kk.items, kk.length, vn(Dk, ik), fk, ik, kk.cellsPerMs) : null !== Dk ? kk.items.push(vn(Dk, ik)) : kk.items.length > Sk && this.release((0, wi.C)(kk.items, kk.length, ik, kk.cellsPerMs, Sk))
      }
      clearIsland(kk) {
        for (const [ek, ik] of this.lines)
          if (ik.island === kk) {
            for (const kk of ik.items) this.release(kk);
            this.lines.delete(ek)
          }
      }
      release(kk) {
        null !== kk.kind && (kk.kind.release(kk.slot), kk.kind = null, kk.slot = -1, kk.hidden = !0, kk.drawn = NaN)
      }
    }
    var cn = ik(36140),
      Tn = ik(38090);

    function Zn(kk) {
      let {
        depth: ek,
        store: ik,
        t: fk
      } = kk;
      const Sk = function(kk) {
        const [ek, ik] = (0, Dk.useState)(kk.lastPlayerY());
        return (0, PM.c)(tf, ik), (0, Dk.useEffect)((() => {
          ik(kk.lastPlayerY())
        }), [kk]), ek
      }(ik);
      if (null === Sk) return null;
      const [bk, rk] = ek, Pk = Sk > bk ? bk : null !== rk && Sk < rk ? rk : null, mk = {
        y: jS(Sk),
        target: null === Pk ? "" : jS(Pk)
      };
      return (0, uS.jsx)("span", {
        className: df()("Baf2QuestDepth", {
          Reached: null === Pk
        }),
        children: fk(`${xM}${null===Pk?"questDepthReached":"questDepth"}`, mk)
      })
    }

    function On(kk) {
      let {
        also: ek,
        view: ik,
        t: Dk
      } = kk;
      return (0, uS.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, uS.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, uS.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, uS.jsx)("strong", {
            children: Dk(`${xM}questAlsoDownHere`)
          }), (0, uS.jsx)("span", {
            className: "Baf2QuestChips",
            children: ek.map((kk => {
              let [ek, fk, Sk, bk] = kk;
              return (0, uS.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Dk(`${xM}questAlsoItem`, {
                  item: UM(Dk, ik.itemNames[ek], ek),
                  have: String(fk),
                  need: String(Sk)
                }),
                children: [(0, uS.jsx)(lM, {
                  item: ek
                }), (0, uS.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${fk}/${Sk}`
                }), null !== bk && (0, uS.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Dk(`${xM}questAlsoDepth`, {
                    y: jS(bk)
                  })
                })]
              }, ek)
            }))
          })]
        })]
      })
    }
    var gn = ik(3374);

    function Gn(kk) {
      let {
        expanded: ek,
        inventoryOpen: ik,
        children: fk
      } = kk;
      const Sk = (0, Dk.useRef)(null);
      return (0, Dk.useEffect)((() => {
        const kk = Sk.current,
          ek = null === kk || void 0 === kk ? void 0 : kk.closest(".RightElements"),
          Dk = null === kk || void 0 === kk ? void 0 : kk.firstElementChild;
        if (!kk || !ek || !Dk) return;
        return (0, Tn.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [ek, Dk], (() => {
          const fk = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === fk.length) return;
          const Sk = Math.max(...fk.map((kk => kk.getBoundingClientRect().bottom))),
            bk = ek.getBoundingClientRect(),
            rk = ik ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (rk) {
            const ek = parseFloat(getComputedStyle(Dk).marginLeft) + parseFloat(getComputedStyle(Dk).marginRight),
              ik = bk.right - rk.getBoundingClientRect().right - 8 - ek;
            kk.style.setProperty("--baf2-quest-room", `${ik}px`), kk.classList.toggle("NoRoom", ik < 150)
          } else kk.style.removeProperty("--baf2-quest-room"), kk.classList.remove("NoRoom");
          const Pk = Sk - bk.top + 8,
            mk = function(kk, ek, ik) {
              const Dk = ek.getBoundingClientRect(),
                fk = kk.getBoundingClientRect(),
                Sk = (0, gn.f)(fk.left, fk.right, Dk.top + ik);
              if (null !== Sk && Sk < Dk.bottom) return Sk - Dk.top;
              return Dk.height - (parseFloat(getComputedStyle(ek).paddingBottom) || 0)
            }(kk, ek, Pk) - 8,
            Mk = window.innerHeight / 2 - bk.top,
            {
              top: Kk,
              maxHeight: xk
            } = function(kk, ek, ik, Dk, fk) {
              const Sk = Math.min(ik, Math.max(0, ek - kk)),
                bk = fk ? kk : Math.max(kk, Math.min(Dk - Sk / 2, ek - Sk));
              return {
                top: bk,
                maxHeight: Math.max(0, ek - bk)
              }
            }(Pk, mk, function(kk) {
              const ek = kk.firstElementChild,
                ik = ek ? ek.scrollHeight - ek.clientHeight : 0;
              return kk.getBoundingClientRect().height + Math.max(0, ik)
            }(Dk), Mk, FS());
          kk.style.top = `${Kk}px`, kk.style.maxHeight = `${xk}px`
        }))
      }), [ik]), (0, uS.jsx)("div", {
        ref: Sk,
        className: df()("Baf2QuestHud", {
          Expanded: ek
        }),
        children: fk
      })
    }

    function Nn(kk) {
      let {
        amount: ek,
        t: ik
      } = kk;
      return (0, uS.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, uS.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, uS.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: ik(`${xM}questStepsDone`, {
            amount: String(ek)
          })
        })]
      })
    }

    function Rn(kk) {
      let {
        pulse: ek
      } = kk;
      return 0 === ek ? null : (0, uS.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, ek)
    }

    function Jn(kk) {
      var ek;
      let {
        store: ik
      } = kk;
      const fk = (0, PM.e)(Wf, ik.get()),
        [Sk, bk] = (0, Dk.useState)(!1),
        {
          t: rk
        } = (0, qf.D)(),
        Pk = (0, dS.h)(VS),
        {
          openInGameMenuName: mk,
          openEverythingMenuName: Mk
        } = (0, Af.n)(["openInGameMenuName", "openEverythingMenuName"]),
        Kk = "inventory" === mk && null === Mk,
        xk = null !== mk && !Kk || null !== Mk;
      if (! function(kk) {
          return null !== kk.name || null !== kk.side
        }(fk) || xk || "off" === fk.tutorial) return null;
      const nk = Of(fk.rows),
        Uk = nk.filter((kk => kk.done)).length,
        Hk = function(kk, ek) {
          const ik = Nf(kk);
          let Dk = 0;
          return kk.filter(((kk, fk) => !!kk.justFinished || !(kk.done || fk < ik || Dk > ek) && (Dk++, !0)))
        }(fk.rows, Pk ? 0 : 2),
        wk = Pk ? Hk : function(kk, ek) {
          const ik = ek.filter((kk => !kk.justFinished));
          if (ik.length < 2) return [...ek];
          const Dk = kk.indexOf(ik[0]),
            fk = kk.indexOf(ik[ik.length - 1]),
            Sk = new Set(Of(kk));
          return kk.filter(((kk, ik) => ek.includes(kk) || kk.done && Sk.has(kk) && ik > Dk && ik < fk))
        }(fk.rows, Hk),
        lk = Sk ? fk.rows : wk,
        pk = Sk || Pk ? [] : function(kk, ek) {
          const ik = new Array(ek.length + 1).fill(0),
            Dk = new Set(Of(kk));
          let fk = 0;
          for (const Sk of kk) fk < ek.length && Sk === ek[fk] ? fk++ : Sk.done && Dk.has(Sk) && ik[fk]++;
          return ik
        }(fk.rows, wk),
        yk = Sk || wk.length < fk.rows.length || null !== fk.reward,
        Yk = Zf(fk),
        Lk = Yk ? rk(`${xM}questLineComplete`) : fk.tier ? YM(rk, fk.tier) : rk(`${xM}currentQuest`),
        Ck = function(kk) {
          var ek, ik;
          if (Zf(kk)) return null;
          const Dk = null === (ek = kk.chapters) || void 0 === ek ? void 0 : ek.find((ek => {
            let [ik] = ek;
            return ik === kk.tier
          }));
          if (!Dk) return null;
          const fk = Dk[1].filter((kk => !kk[4]));
          if (0 === fk.length) return null;
          const Sk = null === (ik = kk.name) || void 0 === ik ? void 0 : ik[0],
            bk = kk => fk.findIndex((ek => ek[0] === Sk && (!kk || !ek[3]))),
            rk = bk(!0),
            Pk = rk >= 0 ? rk : bk(!1);
          if (Pk >= 0) return [Pk + 1, fk.length];
          const mk = fk.filter((kk => kk[3])).length;
          return [Math.min(mk + 1, fk.length), fk.length]
        }(fk);
      return (0, uS.jsx)(cn.h, {
        placement: "topRight",
        children: (0, uS.jsx)(Gn, {
          expanded: Sk,
          inventoryOpen: Kk,
          children: (0, uS.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: nM,
            children: [null !== fk.name && (0, uS.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, uS.jsx)(Rn, {
                pulse: fk.pulse
              }), (0, uS.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, uS.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Lk, Ck && (0, uS.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": rk(`${xM}questPlaceLabel`, {
                      n: String(Ck[0]),
                      total: String(Ck[1])
                    }),
                    children: rk(`${xM}questPlace`, {
                      n: String(Ck[0]),
                      total: String(Ck[1])
                    })
                  }), fk.tier && fk.core && !Yk && (0, uS.jsx)(LM, {
                    core: fk.core,
                    t: rk
                  })]
                })
              }), (0, uS.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: rk(`${xM}${fk.name[0]}`, HM(fk.name[1]))
              }), (nk.length > 1 || yk) && (0, uS.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [nk.length > 1 && (0, uS.jsx)(CM, {
                  rows: nk,
                  t: rk
                }), yk && (0, uS.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Sk,
                  onClick: () => {
                    bk(!Sk)
                  },
                  children: [(0, uS.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: rk(`${xM}questStepsToggle`, {
                      done: String(Uk),
                      total: String(nk.length)
                    })
                  }), (0, uS.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Sk ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, uS.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [lk.map(((kk, ek) => {
                  var Sk;
                  const bk = kk.current && fk.depth;
                  return (0, uS.jsxs)(Dk.Fragment, {
                    children: [(null !== (Sk = pk[ek]) && void 0 !== Sk ? Sk : 0) > 0 && (0, uS.jsx)(Nn, {
                      amount: pk[ek],
                      t: rk
                    }), (0, uS.jsx)(AM, {
                      row: kk,
                      view: fk,
                      t: rk,
                      extra: bk && (0, uS.jsx)(Zn, {
                        depth: bk,
                        store: ik,
                        t: rk
                      })
                    })]
                  }, kk.id)
                })), (null !== (ek = pk[lk.length]) && void 0 !== ek ? ek : 0) > 0 && (0, uS.jsx)(Nn, {
                  amount: pk[lk.length],
                  t: rk
                }), fk.also.length > 0 && (0, uS.jsx)(On, {
                  also: fk.also,
                  view: fk,
                  t: rk
                })]
              }), Sk && fk.reward && (0, uS.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [rk(`${xM}questReward`), (0, uS.jsx)(lM, {
                  item: fk.reward
                }), UM(rk, fk.itemNames[fk.reward], fk.reward)]
              })]
            }), fk.side && (0, uS.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Tf(fk, Date.now()) && (0, uS.jsx)(Rn, {
                pulse: fk.sideCameUpAt
              }), (0, uS.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: rk(`${xM}questSide`)
              }), (0, uS.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: rk(`${xM}${fk.side.name[0]}`, HM(fk.side.name[1]))
              }), (0, uS.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, uS.jsx)(AM, {
                  row: fk.side.row,
                  view: fk,
                  t: rk
                })
              })]
            })]
          })
        })
      })
    }
    const kU = "baf2ToastView";
    class eU {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = kk, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: kk,
          holdMs: ek
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const kk = this.dropCovered();
          kk && this.show(kk.message, kk.holdMs)
        }), 250));
        const ik = this.dropCovered();
        null !== ik && (ik.holdMs > 0 || "baf2ToastCelebrate" === ik.message.baf2ToastStyle) && "baf2ToastCelebrate" !== kk.baf2ToastStyle && this.show(ik.message, ik.holdMs);
        const Dk = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== kk.baf2ToastStyle && Dk > 0) return this.pending = {
          message: kk,
          holdMs: ek
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const kk = this.pending;
          this.pending = null, kk && this.present(kk.message, kk.holdMs)
        }), Dk));
        this.present(kk, ek)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(kk, ek) {
        this.clearTimers(), this.pending = null;
        const ik = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: kk.baf2ToastText,
          style: kk.baf2ToastStyle,
          swapped: ik,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === kk.baf2ToastStyle ? 1500 : ek), this.tm();
        const Dk = Math.min(8e3, Math.max(1e3, kk.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Dk)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.tm(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.tm()
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
      tm() {
        hf.j.tm(kU, this.view, !0)
      }
    }
    var iU = ik(75);
    const DU = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function fU(kk) {
      let {
        store: ek
      } = kk;
      const ik = (0, PM.e)(kU, ek.get()),
        {
          openInGameMenuName: Dk,
          openEverythingMenuName: fk
        } = (0, Af.n)(["openInGameMenuName", "openEverythingMenuName"]),
        Sk = ik && (0, uS.jsxs)("div", {
          className: df()("Baf2Toast", DU[ik.style], {
            Swapped: ik.swapped,
            Leaving: ik.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === ik.style && (0, uS.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, uS.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, uS.jsx)(Qf.e, {
              text: ik.text
            })
          })]
        }, ik.id);
      return null !== Dk && null === fk ? (0, iU.createPortal)((0, uS.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Sk
      }), document.body) : (0, uS.jsx)(cn.h, {
        children: Sk
      })
    }
    const SU = "baf2AreaView";
    class bU {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.XM = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.XM = null
      }
      arrive(kk, ek) {
        ek && function(kk) {
          return "home" === kk.baf2AreaPlace && void 0 !== kk.baf2AreaNameText
        }(kk) ? this.XM = kk : this.show(kk)
      }
      release() {
        const kk = this.XM;
        null !== kk && this.show(kk)
      }
      show(kk) {
        this.clearTimer(), this.XM = null;
        const ek = void 0 === kk.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: kk,
          ms: ek
        }, this.tm(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.tm()
        }), ek)
      }
      dispose() {
        this.clearTimer(), this.XM = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      tm() {
        hf.j.tm(SU, this.view, !0)
      }
    }

    function rU(kk) {
      var ek;
      let {
        store: ik
      } = kk;
      const {
        t: Dk
      } = (0, qf.D)(), fk = (0, PM.e)(SU, ik.get());
      if (!fk) return null;
      const {
        area: Sk
      } = fk, bk = Sk.baf2AreaResetMinutes;
      return (0, uS.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Sk.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${fk.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, uS.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Sk.baf2AreaHeading && (0, uS.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Dk(Sk.baf2AreaHeading)
        }), (0, uS.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (ek = Sk.baf2AreaNameText) && void 0 !== ek ? ek : Dk(Sk.baf2AreaName)
        }), Sk.baf2AreaNote && (0, uS.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Dk(Sk.baf2AreaNote)
        }), void 0 !== bk && (0, uS.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Dk("buildAFactory2Game:areaWildsReset", {
            time: sS(Dk, 60 * bk)
          })
        })]
      }, fk.id)
    }
    const PU = "baf2GearGauge";
    class mU {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      Gy(kk) {
        var ek;
        if (this.clearLinger(), null === kk.gearPowerKind) return void this.set(null);
        const ik = "jetpack" === kk.gearPowerKind && (Dk = kk.gearChargeState, fk = kk.gearCharge, "flying" === Dk || "charging" === Dk || "outOfCharge" === Dk || "ceiling" === Dk || "offPlot" === Dk || "noPower" === Dk && fk <= 0);
        var Dk, fk;
        const Sk = !0 === (null === (ek = this.view) || void 0 === ek ? void 0 : ek.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          bk = ik || "jetpack" === kk.gearPowerKind && Sk;
        this.set({
          gauge: kk,
          jetShown: bk
        }), bk && !ik && (this.lingerTimer = setTimeout((() => {
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
        this.view = kk, hf.j.tm(PU, kk, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const MU = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function KU(kk) {
      let {
        store: ek
      } = kk;
      const ik = (0, PM.e)(PU, ek.get());
      return ik ? "jetpack" === ik.gauge.gearPowerKind ? (0, uS.jsx)(xU, {
        view: ik
      }) : (0, uS.jsx)(nU, {
        gauge: ik.gauge
      }) : null
    }

    function xU(kk) {
      let {
        view: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)(), {
        gauge: Dk
      } = ek, fk = Dk.gearChargeMax > 0 ? Math.max(0, Math.min(1, Dk.gearCharge / Dk.gearChargeMax)) : 0, Sk = MU[Dk.gearChargeState], bk = Sk ? ik(Sk) : null;
      return (0, uS.jsxs)("div", {
        className: df()("Baf2JetArc", {
          Shown: ek.jetShown,
          Low: fk < .2,
          Warm: fk >= .2 && fk < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - fk)
        },
        "aria-hidden": !ek.jetShown,
        children: [(0, uS.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, uS.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: UU,
            pathLength: 100
          }), (0, uS.jsx)("path", {
            className: "Baf2JetArcFill",
            d: UU,
            pathLength: 100
          })]
        }), (0, uS.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * fk), "%"]
        }), bk && (0, uS.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: bk
        })]
      })
    }

    function nU(kk) {
      let {
        gauge: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)(), Dk = function(kk, ek) {
        switch (ek.gearPowerKind) {
          case "skyPack":
            return kk("buildAFactory2Game:gearSkyPack", {
              charge: ek.gearCharge,
              max: ek.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return kk("buildAFactory2Game:gearIslandDraw", {
              power: Rk(ek.gearIslandPower),
              cost: Rk(ek.gearCostPerUse)
            });
          case "barrier":
            return kk("buildAFactory2Game:gearBarrier", {
              shield: Math.round(ek.gearCharge),
              max: ek.gearChargeMax,
              power: Rk(ek.gearIslandPower)
            });
          default:
            return null
        }
      }(ik, ek);
      return null === Dk ? null : (0, uS.jsx)(cn.h, {
        children: (0, uS.jsx)("div", {
          className: df()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === ek.gearChargeState || "outOfCharge" === ek.gearChargeState
          }),
          role: "status",
          children: Dk
        })
      })
    }
    const UU = (() => {
      const kk = kk => {
        const ek = kk * Math.PI / 180;
        return `${(40*Math.cos(ek)).toFixed(2)} ${(40*Math.sin(ek)).toFixed(2)}`
      };
      return `M ${kk(160)} A 40 40 0 1 1 ${kk(380)}`
    })();
    class HU {
      constructor(kk) {
        this.onElement = kk, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      Gy(kk) {
        let ek = kk.baf2LabelsReset || kk.baf2LabelsIsland !== this.island;
        ek && (this.labels.clear(), this.island = kk.baf2LabelsIsland);
        for (const [ik, Dk, fk, Sk, bk] of kk.baf2LabelsList) {
          const kk = `${ik},${Dk},${fk}`,
            rk = this.labels.get(kk);
          null === Sk ? ek = this.labels.delete(kk) || ek : rk && rk.item === Sk && (rk.count === bk || rk.count >= 0 && bk >= 0) ? rk.count !== bk && (rk.count = bk, this.writeCount(kk, bk)) : (this.labels.set(kk, {
            key: kk,
            pos: [ik, Dk, fk],
            item: Sk,
            count: bk
          }), this.writeCount(kk, bk), ek = !0)
        }
        if (this.changes++, ek) {
          this.snapshot = [...this.labels.values()];
          for (const kk of this.listeners) kk()
        }
      }
      bindCount(kk) {
        const ek = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${kk}`;
        let ik = this.countRefs.get(ek);
        return ik || (ik = ik => {
          var Dk, fk;
          ik ? (this.countElements.set(ek, ik), this.writeCount(kk, null !== (Dk = null === (fk = this.labels.get(kk)) || void 0 === fk ? void 0 : fk.count) && void 0 !== Dk ? Dk : -1)) : (this.countElements.delete(ek), this.countRefs.delete(ek))
        }, this.countRefs.set(ek, ik)), ik
      }
      setCountWords(kk) {
        this.countWords = kk;
        for (const [ek, ik] of this.labels) this.writePart(`words|${ek}`, kk(ik.count), ik.count)
      }
      writeCount(kk, ek) {
        this.writePart(`bare|${kk}`, AS(ek), ek), this.countElements.has(`words|${kk}`) && this.writePart(`words|${kk}`, this.countWords(ek), ek)
      }
      writePart(kk, ek, ik) {
        const Dk = this.countElements.get(kk);
        if (!Dk || ik < 0) return;
        const fk = Dk.firstChild;
        fk && 3 === fk.nodeType && !fk.nextSibling ? fk.nodeValue !== ek && (fk.nodeValue = ek) : Dk.textContent !== ek && (Dk.textContent = ek)
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
        let ek = this.refs.get(kk);
        return ek || (ek = ek => {
          const ik = this.elements.get(kk);
          var Dk, fk;
          ik && (null === (Dk = this.onElement) || void 0 === Dk || Dk.call(this, ik, !1));
          ek ? (this.elements.set(kk, ek), null === (fk = this.onElement) || void 0 === fk || fk.call(this, ek, !0)) : (this.elements.delete(kk), this.refs.delete(kk))
        }, this.refs.set(kk, ek)), ek
      }
      onAfterRender(kk, ek, ik, Dk) {
        for (const fk of this.snapshot) {
          const Sk = this.elements.get(fk.key);
          if (!Sk) continue;
          if (Dk(fk.key)) {
            (0, xn.g)(Sk, !0);
            continue
          }
          const bk = Ln(Sk, kk, ek, fk.pos, 1.1, 24);
          bk && ik.add(bk, Sk, 0, !1)
        }
      }
    }
    const wU = (0, Dk.memo)((function(kk) {
        let {
          item: ek
        } = kk;
        return (0, uS.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, uS.jsx)(zf.c, {
            itemName: ek,
            amount: 0
          })
        })
      })),
      lU = (0, Dk.memo)((function(kk) {
        let {
          label: ek,
          bindRef: ik,
          countRef: Dk,
          wordsRef: fk
        } = kk;
        return (0, uS.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: ik,
          hidden: !0,
          children: [(0, uS.jsx)(wU, {
            item: ek.item
          }), ek.count >= 0 && (0, uS.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, uS.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: fk
            }), (0, uS.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Dk
            })]
          })]
        })
      })),
      pU = (0, Dk.memo)((function(kk) {
        let {
          store: ek
        } = kk;
        const {
          t: ik
        } = (0, qf.D)(), [fk, Sk] = (0, Dk.useState)((() => ek.list()));
        return (0, Dk.useEffect)((() => (Sk(ek.list()), ek.subscribe((() => {
          Sk(ek.list())
        })))), [ek]), (0, Dk.useEffect)((() => {
          ek.setCountWords((kk => ik("buildAFactory2Game:labelSiloCount", {
            count: AS(kk)
          })))
        }), [ek, ik]), (0, uS.jsx)("div", {
          className: "Baf2IslandLabels",
          children: fk.map((kk => -2 === kk.count ? null : (0, uS.jsx)(lU, {
            label: kk,
            bindRef: ek.bind(kk.key),
            countRef: ek.bindCount(kk.key),
            wordsRef: ek.bindCount(kk.key, "words")
          }, kk.key)))
        })
      })),
      yU = {
        read: () => !0,
        write: () => {}
      };

    function YU(kk) {
      return `${kk[0]},${kk[1]},${kk[2]}`
    }

    function LU(kk) {
      let [ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk] = kk;
      const nk = void 0 === Kk || void 0 === xk ? function(kk) {
        return [Math.floor((kk - 1) / 2), 0]
      }(Sk) : [Kk, xk];
      return {
        kind: 0 === Pk ? "reactor" : "battery",
        box: oi([ek, ik, Dk], fk, Sk, bk, rk, nk),
        formed: 1 === mk,
        level: Mk
      }
    }
    class CU {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yU;
        this.guideSetting = kk, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = kk.read()
      }
      Gy(kk) {
        var ek;
        const ik = new Map;
        for (const Dk of kk.baf2RxPlanList) {
          const kk = LU(Dk);
          ik.set(YU(kk.box.ctrl), kk)
        }
        this.plans = ik, this.layouts = new Map((null !== (ek = kk.baf2RxLayouts) && void 0 !== ek ? ek : []).map((kk => {
          let [ek, ik, Dk, fk] = kk;
          return [YU([ek, ik, Dk]), fk]
        }))), this.predicted.clear(), kk.baf2RxFormedAt && (this.formed = {
          ctrl: kk.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Dk of [...this.startersOff]) {
          const kk = ik.get(Dk);
          kk && !kk.formed || this.startersOff.delete(Dk)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((kk => this.planByKey(kk)))
      }
      planAt(kk) {
        return this.planByKey(YU(kk))
      }
      predictSize(kk, ek) {
        this.predicted.set(YU(kk), ek), this.changed()
      }
      unpredict(kk) {
        this.predicted.delete(YU(kk)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(kk) {
        var ek;
        const ik = YU(kk);
        return this.predicted.has(ik) ? null : null !== (ek = this.layouts.get(ik)) && void 0 !== ek ? ek : null
      }
      showsStarter(kk) {
        return !this.startersOff.has(YU(kk))
      }
      setStarter(kk, ek) {
        const ik = YU(kk);
        ek ? this.startersOff.delete(ik) : this.startersOff.add(ik), this.changed()
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
        const ek = this.plans.get(kk);
        if (!ek) return null;
        const ik = this.predicted.get(kk);
        return ik ? {
          ...ek,
          box: Oi(ek.box, ek.kind, ik[0], ik[1], ik[2])
        } : ek
      }
      changed() {
        this.version++;
        for (const kk of this.listeners) kk()
      }
    }
    var AU = ik(189);
    const jU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function sU(kk, ek, ik, Dk) {
      const fk = kk.length / 3;
      for (let Sk = 0; Sk < jU.length / 3; Sk++) kk.push(jU[3 * Sk] * Dk[0] / 2 + ik[0], jU[3 * Sk + 1] * Dk[1] / 2 + ik[1], jU[3 * Sk + 2] * Dk[2] / 2 + ik[2]);
      for (let Sk = fk; Sk < fk + 24; Sk += 4) ek.push(Sk, Sk + 1, Sk + 2, Sk, Sk + 2, Sk + 3)
    }

    function dU(kk, ek, ik) {
      const Dk = ek[0][0],
        fk = [],
        Sk = [];
      for (const [bk, rk] of ek) sU(fk, Sk, [bk[0] - Dk[0], bk[1] - Dk[1], bk[2] - Dk[2]], rk);
      return kk.createGameMesh({
        positions: fk,
        indices: Sk
      }, ik, Dk)
    }

    function VU(kk, ek) {
      const ik = kk.w - 2,
        Dk = kk.d - 2;
      return 1 === function(kk, ek, ik, Dk) {
        const [fk, Sk, bk] = kk;
        if (Number(fk <= 2) + Number(Sk <= 2) + Number(bk <= 2) >= 2) return function(kk, ek, ik) {
          return (kk + ek + ik) % 2 === 0 ? 1 : 3
        }(ek, ik, Dk);
        const [rk, Pk] = fk >= Sk && fk >= bk ? [ik, Dk] : Sk >= bk ? [ek, Dk] : [ek, ik];
        return rk % 2 === 0 && Pk % 2 === 0 ? 1 : 3
      }([ik, kk.h - 2, Dk], ek % ik, Math.floor(ek / (ik * Dk)), Math.floor(ek / ik) % Dk) ? "rod" : "channel"
    }

    function FU(kk, ek, ik) {
      if ("reactor" !== kk.kind || kk.formed || !ek) return !1;
      const Dk = Ni(kk.box);
      for (let fk = 0; fk < Dk; fk++) {
        const kk = ik(fk);
        if (null !== kk && Ii(kk)) return !1
      }
      return !0
    }

    function uU(kk, ek, ik, Dk, fk) {
      var Sk;
      let bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const rk = DD(kk.box, ek),
        Pk = rD(kk.kind, rk, ik);
      if ("wrong" === Pk || "blocked" === Pk) return "wrong";
      if (!fk) return null;
      if ("inside" === rk && "reactor" === kk.kind && "Air" === zi(ik)) {
        if (null !== bk) {
          var mk;
          const ik = bx[rx(bk, fD(kk.box, ek))];
          return ik && null !== (mk = uP(ik)) && void 0 !== mk ? mk : null
        }
        if (Dk) return VU(kk.box, fD(kk.box, ek))
      }
      if ("missing" !== Pk) return null;
      const Mk = PD(kk.kind, rk);
      return null === Mk ? null : null !== (Sk = uP(Mk)) && void 0 !== Sk ? Sk : null
    }
    const qU = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function IU(kk, ek, ik) {
      const Dk = ik => {
        const Dk = ek(eD(kk.box, ik));
        return null !== Dk && function(kk, ek) {
          return "reactor" !== kk.kind || ek !== Ji(kk.box) && "inside" !== DD(kk.box, ek)
        }(kk, ik) && "ok" !== rD(kk.kind, DD(kk.box, ik), Dk)
      };
      if (ik) {
        const Sk = iD(kk.box, [Math.floor(ik[0]), Math.floor(ik[1]), Math.floor(ik[2])]);
        if (Sk >= 0 && (Dk(Sk) || (fk = Sk, "reactor" === kk.kind && "inside" === DD(kk.box, fk) && "Air" === ek(eD(kk.box, fk))))) return Sk
      }
      var fk;
      const Sk = Ni(kk.box);
      for (let bk = 0; bk < Sk; bk++)
        if (Dk(bk)) return bk;
      return -1
    }

    function zU(kk, ek) {
      return Math.floor(ek / (kk.w * kk.d))
    }

    function QU(kk, ek, ik) {
      return ik >= 0 && zU(kk, ek) > zU(kk, ik)
    }

    function vU(kk, ek) {
      return ek >= 0 && kk.h >= 3 && zU(kk, ek) === kk.h - 1
    }

    function EU(kk) {
      const ek = zi(kk);
      return ek === Yi || "Collider" === ek || "Laser" === ek || ek.startsWith("_Collider ")
    }

    function hU(kk, ek, ik, Dk) {
      if (Dk(kk)) return null;
      if (!qU.every((ek => {
          let [Dk, fk, Sk] = ek;
          const bk = ik([kk[0] + Dk, kk[1] + fk, kk[2] + Sk]);
          return null !== bk && !Xi("reactor", bk) && "reactor" !== Qi(bk)
        }))) return null;
      const fk = Bi("reactor").min,
        Sk = oi([kk[0], kk[1], kk[2]], function(kk, ek) {
          const ik = ek[0] - (kk[0] + .5),
            Dk = ek[2] - (kk[2] + .5);
          return Math.abs(ik) >= Math.abs(Dk) ? ik >= 0 ? 2 : 4 : Dk >= 0 ? 1 : 3
        }(kk, ek), fk, fk, fk, Zi("reactor", fk)),
        bk = Ji(Sk);
      let rk = !0;
      for (let Pk = 0; Pk < Ni(Sk) && rk; Pk++) {
        if (Pk === bk) continue;
        const kk = eD(Sk, Pk),
          ek = ik(kk);
        rk = !Dk(kk) && (null === ek || !EU(ek))
      }
      return {
        box: Sk,
        fits: rk
      }
    }
    const aU = FP,
      WU = "baf2Goal",
      tU = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      XU = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      BU = .4;

    function cU(kk, ek) {
      let [ik, Dk, fk] = kk;
      const Sk = hP([ik - .02, Dk - .02, fk - .02], [ik + 1.02, Dk + 1.02, fk + 1.02], .07);
      return ek && (Sk.push([
        [ik + .5, Dk + 1 + .7, fk + .5],
        [.08, 1.4, .08]
      ]), Sk.push([
        [ik + .5, Dk + 1 + 1.4 + .2, fk + .5],
        [BU, BU, BU]
      ])), Sk
    }

    function TU(kk, ek) {
      let [ik, Dk, fk] = ek;
      return kk.isBlockInLoadedChunk(ik, Dk, fk) ? kk.blockIdToBlockName(kk.getBlockId(ik, Dk, fk)) : null
    }
    let oU = null;
    const ZU = new Set;
    let OU = null;

    function gU(kk) {
      oU = kk;
      for (const ek of ZU) ek(kk)
    }
    class GU {
      constructor(kk) {
        var ek;
        this.plans = kk, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (ek = kk => {
          var ek, ik;
          this.setGoal(null !== (ek = null === kk || void 0 === kk ? void 0 : kk.goal) && void 0 !== ek ? ek : null, null !== (ik = null === kk || void 0 === kk ? void 0 : kk.startsBattery) && void 0 !== ik && ik)
        }, OU ??= [hf.j.subscribe("setDirectionArrow", (kk => {
          let {
            id: ek,
            position: ik,
            text: Dk
          } = kk;
          ek === WU && gU({
            goal: [Math.floor(ik[0]), Math.floor(ik[1]), Math.floor(ik[2])],
            startsBattery: JSON.stringify(null !== Dk && void 0 !== Dk ? Dk : null).includes("arrowStartBattery")
          })
        })), hf.j.subscribe("clearDirectionArrow", (kk => {
          let {
            id: ek
          } = kk;
          null !== ek && ek !== WU || gU(null)
        }))], ZU.add(ek), ek(oU), () => {
          ZU.delete(ek)
        })
      }
      onAfterRender(kk, ek) {
        const ik = performance.now();
        if (this.cues.length > 0) {
          const ek = .55 + .45 * Math.sin(ik / 1100 * Math.PI * 2);
          for (const ik of this.cues) kk.setGameMesh(ik, {
            visibility: ek
          })
        }
        if (ik - this.lastCheckMs < 150) return;
        this.lastCheckMs = ik;
        const Dk = this.plans.all().filter((kk => {
            const [ik, Dk, fk] = kk.box.ctrl;
            return (!kk.formed || null !== this.plans.layoutOf(kk.box.ctrl)) && (ik - ek[0]) ** 2 + (Dk - ek[1]) ** 2 + (fk - ek[2]) ** 2 <= 2304
          })),
          fk = function(kk, ek) {
            const ik = AU.g.oU,
              Dk = new Map;
            for (const Sk of ek) {
              const ek = eD(Sk.box, 0),
                bk = eD(Sk.box, Ni(Sk.box) - 1),
                rk = [Math.min(ek[0], bk[0]), Math.min(ek[1], bk[1]), Math.min(ek[2], bk[2])].map((kk => Math.floor(kk / ik))),
                Pk = [Math.max(ek[0], bk[0]), Math.max(ek[1], bk[1]), Math.max(ek[2], bk[2])].map((kk => Math.floor(kk / ik)));
              for (let ik = rk[0]; ik <= Pk[0]; ik++)
                for (let ek = rk[1]; ek <= Pk[1]; ek++)
                  for (let Sk = rk[2]; Sk <= Pk[2]; Sk++) {
                    var fk;
                    Dk.set(`${ik},${ek},${Sk}`, null !== (fk = kk.getChunkVersion(ik, ek, Sk)) && void 0 !== fk ? fk : -1)
                  }
            }
            return Dk
          }(kk, Dk);
        this.plans.getVersion() === this.storeVersion && (function(kk, ek) {
          if (kk.size !== ek.size) return !1;
          for (const [ik, Dk] of kk)
            if (ek.get(ik) !== Dk) return !1;
          return !0
        }(fk, this.chunkVersions) || ik - this.lastRescanMs < 600) || (this.lastRescanMs = ik, this.storeVersion = this.plans.getVersion(), this.chunkVersions = fk, this.redraw(kk, Dk))
      }
      dispose(kk) {
        this.unwatch(), oU = null, this.clearMeshes(kk), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(kk, ek) {
        var ik;
        (null === kk || void 0 === kk ? void 0 : kk.join()) === (null === (ik = this.goal) || void 0 === ik ? void 0 : ik.join()) && ek === this.startsBattery || (this.goal = kk, this.startsBattery = ek, this.storeVersion = -1)
      }
      redraw(kk, ek) {
        const ik = ek => TU(kk, ek),
          Dk = new Map,
          fk = [],
          Sk = this.plans.guideOn();
        for (const mk of ek) {
          const kk = Sk && FU(mk, this.plans.showsStarter(mk.box.ctrl), (kk => ik(eD(mk.box, kk)))),
            ek = "reactor" === mk.kind ? this.plans.layoutOf(mk.box.ctrl) : null,
            bk = Sk && !mk.formed ? IU(mk, ik, this.goal) : -1;
          bk >= 0 && fk.push([eD(mk.box, bk), vU(mk.box, bk)]);
          const rk = Ni(mk.box);
          for (let fk = 0; fk < rk; fk++) {
            const rk = eD(mk.box, fk),
              Pk = ik(rk),
              Mk = null === Pk ? null : uU(mk, fk, Pk, kk, Sk, ek);
            if (null !== Mk) {
              const kk = "wrong" !== Mk && QU(mk.box, fk, bk),
                ek = kk ? `${Mk}Dim` : Mk;
              let ik = Dk.get(ek);
              ik || (ik = {
                draw: {
                  ghost: Mk,
                  dim: kk
                },
                list: []
              }, Dk.set(ek, ik)), ik.list.push(rk)
            }
          }
        }
        if (Sk && this.startsBattery && this.goal) {
          const [kk, ek, fk] = this.goal, Sk = [];
          for (const [Dk, bk, rk] of tU) {
            const Pk = [kk + Dk, ek + bk, fk + rk];
            "Air" === ik(Pk) && Sk.push(Pk)
          }
          if (Sk.length > 0) {
            var bk;
            const kk = null !== (bk = Dk.get("cell")) && void 0 !== bk ? bk : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            kk.list.push(...Sk), Dk.set("cell", kk)
          }
        }
        const rk = [...Dk.keys()].sort(),
          Pk = [...rk.map((kk => `${kk}:${Dk.get(kk).list.join(";")}`)), `cue:${fk.join(";")}`].join("|");
        if (Pk !== this.shownKey) {
          this.shownKey = Pk, this.clearMeshes(kk);
          for (const ek of rk) {
            const {
              draw: ik,
              list: fk
            } = Dk.get(ek);
            this.meshes.push(this.build(kk, ik, fk))
          }
          for (const [ek, ik] of fk) this.cues.push(dU(kk, cU(ek, ik), XU))
        }
      }
      build(kk, ek, ik) {
        let {
          ghost: Dk,
          dim: fk
        } = ek;
        const {
          size: Sk,
          colour: bk,
          alpha: rk
        } = aU[Dk], Pk = ik[0], mk = [], Mk = [];
        for (const [Kk, xk, nk] of ik) sU(mk, Mk, [Kk - Pk[0] + .5, xk - Pk[1] + .5, nk - Pk[2] + .5], [Sk, Sk, Sk]);
        return kk.createGameMesh({
          positions: mk,
          indices: Mk
        }, {
          rgb: bk,
          alpha: rk * (fk ? .3 : 1)
        }, Pk)
      }
      clearMeshes(kk) {
        for (const ek of [...this.meshes, ...this.cues]) kk.disposeGameMesh(ek);
        this.meshes = [], this.cues = []
      }
    }
    const NU = [.56, .83, 1],
      RU = [1, .3, .25];
    class JU {
      constructor(kk) {
        this.plans = kk, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(kk, ek, ik) {
        var Dk;
        const fk = performance.now();
        if (fk - this.lastCheckMs < 150) return;
        this.lastCheckMs = fk;
        const Sk = ek => TU(kk, ek),
          bk = null === (Dk = kk.jek(ek)) || void 0 === Dk ? void 0 : Dk.name,
          rk = bk && "Reactor Frame" === zi(bk) ? kk.getTargetedBlock() : null,
          Pk = rk ? [rk.gr[0], rk.gr[1], rk.gr[2]] : null,
          mk = null !== Pk && "Air" === Sk(Pk) && Pk.every(((kk, ek) => Math.abs(kk + .5 - ik[ek]) <= 8)) ? hU(Pk, ik, Sk, (kk => this.inPlan(kk))) : null,
          Mk = mk ? `${mk.box.ctrl.join()}|${mk.box.rot}|${mk.fits}` : "";
        Mk !== this.shownKey && this.show(kk, Mk, mk)
      }
      dispose(kk) {
        this.clear(kk), this.shownKey = ""
      }
      inPlan(kk) {
        return this.plans.all().some((ek => iD(ek.box, kk) >= 0))
      }
      show(kk, ek, ik) {
        if (this.clear(kk), this.shownKey = ek, !ik) return;
        const {
          box: Dk,
          fits: fk
        } = ik, Sk = fk ? NU : RU, {
          lo: bk,
          hi: rk
        } = EP(Dk);
        this.meshes.push(dU(kk, hP(bk, rk, .05), {
          rgb: Sk,
          alpha: 1
        }));
        const Pk = [],
          mk = eD(Dk, 0)[1];
        for (let Mk = 0; Mk < Dk.w * Dk.d; Mk++) {
          const [kk, , ek] = eD(Dk, Mk);
          Pk.push([
            [kk + .5, mk + .02 + .01, ek + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(dU(kk, Pk, {
          rgb: Sk,
          alpha: .25
        }))
      }
      clear(kk) {
        for (const ek of this.meshes) kk.disposeGameMesh(ek);
        this.meshes = []
      }
    }
    const kH = "buildAFactory2Game:";

    function eH(kk, ek, ik) {
      const Dk = kk => {
          const [ik, Dk, fk] = kk.box.ctrl;
          return ik === ek[0] && Dk === ek[1] && fk === ek[2]
        },
        fk = kk.find((kk => Dk(kk) || iD(kk.box, ek) >= 0));
      if (!fk) return null;
      const Sk = function(kk, ek, ik) {
        const {
          w: Dk,
          h: fk,
          d: Sk
        } = kk.box, bk = "reactor" === kk.kind ? `${kH}rxTitle` : `${kH}batTitle`;
        if (kk.formed) return {
          key: `${kH}lookPlanFormed`,
          kindKey: bk,
          w: Dk,
          h: fk,
          d: Sk,
          count: 0
        };
        let rk = 0,
          Pk = 0;
        for (let Mk = 0; Mk < Ni(kk.box); Mk++) {
          const ek = ik(eD(kk.box, Mk)),
            Dk = null === ek ? "ok" : rD(kk.kind, DD(kk.box, Mk), ek);
          rk += "missing" === Dk ? 1 : 0, Pk += "wrong" === Dk || "blocked" === Dk ? 1 : 0
        }
        const mk = function(kk, ek, ik) {
          if (ek < 0 || null === ik) return;
          const Dk = DD(kk.box, ek),
            fk = rD(kk.kind, Dk, ik);
          return "blocked" === fk ? `${kH}lookWhy_blocked` : "wrong" === fk ? "ctrl" === Dk ? `${kH}lookWhy_ctrl` : `${kH}lookWhy_reactor_${Dk}` : void 0
        }(kk, iD(kk.box, ek), ik([ek[0], ek[1], ek[2]]));
        if (rk > 0) return {
          key: `${kH}lookPlanToBuild`,
          kindKey: bk,
          w: Dk,
          h: fk,
          d: Sk,
          count: rk,
          why: mk
        };
        if (Pk > 0) return {
          key: `${kH}lookPlanTakeOut`,
          kindKey: bk,
          w: Dk,
          h: fk,
          d: Sk,
          count: Pk,
          why: mk
        };
        return {
          key: "reactor" === kk.kind ? `${kH}lookPlanNoRods` : `${kH}lookPlanDone`,
          kindKey: bk,
          w: Dk,
          h: fk,
          d: Sk,
          count: 0
        }
      }(fk, ek, ik);
      return "reactor" === fk.kind && Dk(fk) ? {
        ...Sk,
        ctrl: !0
      } : Sk
    }

    function iH(kk, ek) {
      return kk === ek || null !== kk && null !== ek && kk.key === ek.key && kk.kindKey === ek.kindKey && kk.w === ek.w && kk.h === ek.h && kk.d === ek.d && kk.count === ek.count && kk.why === ek.why && kk.ctrl === ek.ctrl
    }

    function DH() {
      return performance.now()
    }
    class fH {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DH;
        this.ticket = kk, this.sent = ek, this.backstopMs = ik, this.now = Dk, this.queuedAt = void 0, this.queuedAt = Dk()
      }
      answered() {
        const kk = this.now(),
          ek = this.sent.leftAt(this.ticket);
        return null !== ek && kk - ek > 4e3 || kk - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class SH {
      constructor() {
        this.echoes = []
      }
      add(kk) {
        this.echoes = this.echoes.filter((kk => !kk.answered())), this.echoes.push(kk)
      }
      answered() {
        var kk, ek;
        return null === (kk = null === (ek = this.echoes.at(-1)) || void 0 === ek ? void 0 : ek.answered()) || void 0 === kk || kk
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((kk => kk.answered()))
      }
      age() {
        var kk, ek;
        return null !== (kk = null === (ek = this.echoes.at(-1)) || void 0 === ek ? void 0 : ek.age()) && void 0 !== kk ? kk : null
      }
      clear() {
        this.echoes = []
      }
    }
    class bH {
      constructor(kk) {
        this.send = kk, this.value = null, this.sent = null, this.echoes = new SH, this.down = !1, this.timer = null
      }
      shown(kk) {
        return null === this.value ? kk : this.down || this.value !== this.sent ? this.value : kk === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), kk) : this.value
      }
      pendingFor(kk) {
        return null !== this.value && this.value === this.sent && kk !== this.value ? this.echoes.age() : null
      }
      assume(kk, ek) {
        this.disarm(), this.down = !1, this.value = kk, this.sent = kk, this.echoes.clear(), this.echoes.add(ek)
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
    class rH {
      constructor() {
        this.pending = new Map
      }
      set(kk, ek, ik) {
        var Dk;
        const fk = null !== (Dk = this.pending.get(kk)) && void 0 !== Dk ? Dk : {
          on: ek,
          echoes: new SH
        };
        fk.on = ek, fk.echoes.add(ik), this.pending.set(kk, fk)
      }
      shown(kk) {
        let ek = kk;
        for (const [ik, {
            on: Dk,
            echoes: fk
          }] of this.pending) 0 !== (kk & ik) === Dk && fk.agreeCounts() || fk.answered() ? this.pending.delete(ik) : ek = Dk ? ek | ik : ek & ~ik;
        return ek
      }
      pendingMask() {
        let kk = 0;
        for (const ek of this.pending.keys()) kk |= ek;
        return kk
      }
      pendingFor(kk) {
        let ek = null;
        for (const [Dk, {
            on: fk,
            echoes: Sk
          }] of this.pending) {
          if (void 0 !== kk && 0 !== (kk & Dk) === fk) continue;
          const bk = Sk.age();
          var ik;
          if (null !== bk) ek = Math.max(null !== (ik = ek) && void 0 !== ik ? ik : 0, bk)
        }
        return ek
      }
      clear() {
        this.pending.clear()
      }
    }
    class PH {
      constructor() {
        this.dims = null, this.echoes = new SH, this.unmet = null
      }
      shown(kk) {
        var ek;
        return this.dims && (mH(this.dims, kk) && this.echoes.agreeCounts() || this.echoes.answered()) && (mH(this.dims, kk) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (ek = this.dims) && void 0 !== ek ? ek : kk
      }
      takeUnmet() {
        const kk = this.unmet;
        return this.unmet = null, kk
      }
      set(kk, ek) {
        this.dims = kk, this.echoes.add(ek)
      }
      pendingFor(kk) {
        return null === this.dims || kk && mH(this.dims, kk) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function mH(kk, ek) {
      return kk[0] === ek[0] && kk[1] === ek[1] && kk[2] === ek[2]
    }
    class MH {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DH;
        this.now = kk, this.taps = new Map
      }
      tap(kk, ek, ik) {
        return !this.busy(kk) && (this.taps.set(kk, {
          at: this.now(),
          done: ek
        }), ik(), !0)
      }
      settle(kk) {
        for (const [ek, ik] of [...this.taps]) ik.done(kk) && this.taps.delete(ek)
      }
      busy(kk) {
        const ek = this.taps.get(kk);
        return !!ek && (!(this.now() - ek.at >= 3e3) || (this.taps.delete(kk), !1))
      }
      busyIds() {
        const kk = new Set;
        for (const ek of [...this.taps.keys()]) this.busy(ek) && kk.add(ek);
        return kk
      }
      clear() {
        this.taps.clear()
      }
    }

    function KH(kk) {
      return {
        send: ek => kk.track(ek),
        sendUrgent: (ek, ik) => kk.track(ek, {
          urgent: !0,
          supersedes: ik
        }),
        leftAt: ek => kk.leftAt(ek),
        holdReserve: () => kk.holdUrgentReserve(),
        answerMs: ab
      }
    }

    function xH() {
      return performance.now()
    }

    function nH(kk) {
      const ek = kk.baf2RxNeed.map((kk => {
        let [ek, ik] = kk;
        return [ek, ik]
      }));
      return JSON.stringify([kk.baf2RxFormed, ek, kk.baf2RxBad, kk.baf2RxCells])
    }

    function UH(kk, ek) {
      const ik = 0 !== (ek & ne),
        Dk = 0 !== (kk.baf2RxFlags & ne);
      return !ik || Dk || "running" !== kk.baf2RxState && "idle" !== kk.baf2RxState ? !ik && Dk && "scram" === kk.baf2RxState && kk.baf2RxFuel > 0 ? "idle" : kk.baf2RxState : "scram"
    }

    function HH(kk) {
      return JSON.stringify([kk.baf2BatFormed, kk.baf2BatNeed, kk.baf2BatBad])
    }

    function wH(kk) {
      return kk.join(",")
    }
    class lH {
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
    class pH {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(kk, ek) {
        this.lastAt = kk, this.lastUntil = kk + ek
      }
      answered(kk) {
        return this.lastAt >= kk || kk < this.lastUntil
      }
    }
    class yH {
      constructor(kk, ek) {
        this.link = kk, this.now = ek, this.hold = new PH, this.picked = null, this.notTaken = null
      }
      shown(kk) {
        const ek = this.hold.shown(kk);
        if (this.hold.takeUnmet() && this.picked) {
          var ik;
          const {
            plans: ek,
            ctrl: Dk,
            at: fk
          } = this.picked;
          this.picked = null, ek.unpredict(Dk), null === (ik = this.notTaken) || void 0 === ik || ik.call(this, kk, fk)
        }
        return ek
      }
      pendingFor(kk) {
        return this.hold.pendingFor(kk)
      }
      Un(kk, ek, ik) {
        kk.predictSize(ek, ik), this.picked = {
          plans: kk,
          ctrl: ek,
          at: this.now()
        };
        const Dk = this.link.send(xe(ek, "plan", ...ik));
        this.hold.set(ik, new fH(Dk, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class YH {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xH;
        this.plans = kk, this.readInterior = ek, this.link = ik, this.now = Dk, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new rH, this.throttle = void 0, this.oneShots = void 0, this.listeners = new lH, this.redraw = null, this.releaseReserve = null, this.size = new yH(ik, Dk), this.oneShots = new MH(Dk), this.throttle = new bH((kk => this.echo(this.link.send(this.command("throttle", kk)))))
      }
      set(kk) {
        !kk.baf2RxOpen && this.raw && wH(this.raw.baf2RxAt) === wH(kk.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(kk), this.tm(kk)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(kk) {
        this.size.notTaken = kk
      }
      resize(kk) {
        this.raw && (this.size.Un(this.plans, this.raw.baf2RxAt, kk), this.tm(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const kk = this.raw.baf2RxAt;
        this.plans.setStarter(kk, !this.plans.showsStarter(kk)), this.tm(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.tm(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.tm(this.raw)
      }
      send(kk) {
        if (this.raw) {
          for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
          this.link.send(this.command(kk, ...ik))
        }
      }
      tap(kk, ek) {
        this.raw && this.oneShots.tap(kk, function(kk, ek) {
          if ("start" === kk) return kk => 0 === (kk.baf2RxFlags & ne);
          if ("odConfirm" === kk) return kk => 0 !== (kk.baf2RxFlags & Ue);
          const ik = nH(ek);
          return kk => nH(kk) !== ik
        }(kk, this.raw), ek) && ("start" === kk && (this.startedAt = this.now()), this.tm(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(ne, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(kk, ek) {
        if (!this.raw) return;
        const ik = kk === ne ? this.command(ek ? "scram" : "start") : this.command("od", ek ? 1 : 0),
          Dk = ek && kk === ne,
          fk = `${Ke} ${this.raw.baf2RxAt.join(" ")} `,
          Sk = this.echo(Dk ? this.link.sendUrgent(ik, (kk => {
            const ek = kk.startsWith(fk) ? kk.slice(fk.length).split(" ")[0] : null;
            return "throttle" === ek || "start" === ek
          })) : this.link.send(ik));
        this.flags.set(kk, ek, Sk), Dk && this.throttle.assume(0, Sk), this.tm(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(kk) {
        this.throttle.drag(kk), this.raw && this.tm(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.tm(this.raw)
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
        for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
        return xe(this.raw.baf2RxAt, kk, ...ik)
      }
      echo(kk) {
        return new fH(kk, this.link, this.link.answerMs, this.now)
      }
      tm(kk) {
        var ek;
        this.raw = kk;
        const ik = this.flags.shown(kk.baf2RxFlags),
          Dk = {
            ...kk,
            baf2RxFlags: ik,
            baf2RxTarget: this.throttle.shown(kk.baf2RxTarget),
            baf2RxState: UH(kk, ik)
          },
          fk = this.size.shown(Dk.baf2RxDims),
          Sk = this.throttle.pendingFor(),
          bk = [this.throttle.pendingFor(kk.baf2RxTarget), this.flags.pendingFor(kk.baf2RxFlags), this.size.pendingFor(kk.baf2RxDims)].filter((kk => null !== kk)),
          rk = bk.length > 0 ? Math.max(...bk) : null,
          Pk = this.oneShots.busyIds(),
          mk = Dk.baf2RxAt;
        let Mk, Kk, xk = null,
          nk = [Math.max(0, fk[0] - 2), Math.max(0, fk[1] - 2), Math.max(0, fk[2] - 2)];
        if (Dk.baf2RxFormed) {
          const [kk, ek, ik] = Dk.baf2RxDims;
          nk = [Math.max(0, kk - 2), Math.max(0, ek - 2), Math.max(0, ik - 2)], Mk = Array.from(Dk.baf2RxCells, Number), Kk = `${nk.join(",")}:${Dk.baf2RxCells}`
        } else {
          var Uk;
          const kk = null === (Uk = this.plans.planAt(mk)) || void 0 === Uk ? void 0 : Uk.box,
            ek = kk ? Oi(kk, "reactor", ...fk) : oi(mk, 1, ...fk, Zi("reactor", fk[0])),
            ik = this.readInterior(ek);
          xk = fP(nk, ik), Mk = ik, Kk = `${nk.join(",")}:${ik.join("")}`
        }(null === (ek = this.looksOf) || void 0 === ek ? void 0 : ek.key) !== Kk && (this.looksOf = {
          key: Kk,
          looks: MP(nk, Mk)
        }), this.view = {
          status: Dk,
          dims: fk,
          plan: xk,
          inner: nk,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(mk),
          odConfirmed: this.odConfirmed || 0 !== (Dk.baf2RxFlags & Ye),
          guide: this.plans.guideOn(),
          throttlePending: null !== Sk,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== rk && rk >= 5e3,
          busy: Pk,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== rk || Pk.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.tm(this.raw)
        }), 250))
      }
    }
    class LH {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xH;
        this.plans = kk, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new lH, this.redraw = null, this.size = new yH(ek, ik), this.oneShots = new MH(ik)
      }
      set(kk) {
        !kk.baf2BatOpen && this.view && wH(this.view.status.baf2BatAt) === wH(kk.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(kk), this.tm(kk)
      }
      tap(kk, ek) {
        if (!this.view) return;
        const ik = HH(this.view.status);
        this.oneShots.tap(kk, (kk => HH(kk) !== ik), ek) && this.tm(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(kk) {
        this.size.notTaken = kk
      }
      resize(kk) {
        this.view && (this.size.Un(this.plans, this.view.status.baf2BatAt, kk), this.tm(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.tm(this.view.status)
      }
      subscribe(kk) {
        return this.listeners.subscribe(kk)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      tm(kk) {
        const ek = this.size.shown(kk.baf2BatDims),
          ik = this.oneShots.busyIds();
        this.view = {
          status: kk,
          dims: ek,
          vK: jP(ek, kk.baf2BatDims) ? kk.baf2BatCapacity : nP(...ek),
          guide: this.plans.guideOn(),
          busy: ik
        }, this.listeners.notify(), ik.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.tm(this.view.status)
        }), 250))
      }
    }
    const CH = "buildAFactory2Game:";

    function AH() {
      var kk;
      const ek = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!ek) return null;
      const ik = ek.querySelector(".ExitButton");
      return function(kk, ek) {
        const ik = ek ? ek.left - 8 : kk.right;
        return {
          left: kk.left,
          top: kk.top,
          width: Math.max(0, ik - kk.left),
          height: kk.height
        }
      }(ek.getBoundingClientRect(), null !== (kk = null === ik || void 0 === ik ? void 0 : ik.getBoundingClientRect()) && void 0 !== kk ? kk : null)
    }
    const jH = (0, Dk.memo)((function(kk) {
      let {
        store: ek
      } = kk;
      const {
        t: ik
      } = (0, qf.D)(), [fk, Sk] = (0, Dk.useState)((() => ek.get())), [bk, rk] = (0, Dk.useState)((() => performance.now()));
      (0, Dk.useEffect)((() => (Sk(ek.get()), ek.subscribe((() => {
        Sk(ek.get()), rk(performance.now())
      })))), [ek]);
      const {
        alarm: Pk,
        boomAt: mk
      } = fk, Mk = null !== Pk && null !== Pk.secs, [Kk, xk] = (0, Dk.useState)(null);
      (0, Dk.useEffect)((() => {
        if (!Mk) return;
        xk(AH());
        const kk = setInterval((() => {
          rk(performance.now()), xk(AH())
        }), 250);
        return () => {
          clearInterval(kk)
        }
      }), [Mk]);
      const [nk, Uk] = (0, Dk.useState)(!1);
      return (0, Dk.useEffect)((() => {
        if (mk === -1 / 0) return;
        Uk(!0);
        const kk = setTimeout((() => {
          Uk(!1)
        }), 1300);
        return () => {
          clearTimeout(kk)
        }
      }), [mk]), (0, uS.jsxs)(uS.Fragment, {
        children: [null !== Pk && (0, uS.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: ik(Pk.hot ? `${CH}rxAlarmSiren` : `${CH}rxAlarmDamaged`, {
            amount: String(Pk.damage)
          })
        }), null !== Pk && null !== Pk.secs && (0, uS.jsx)("div", {
          className: Kk ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Kk && void 0 !== Kk ? Kk : void 0,
          "aria-live": "assertive",
          children: ik(`${CH}rxAlarmCountdown`, {
            amount: String((Hk = Pk.secs, wk = bk - Pk.receivedAt, Math.max(1, Math.ceil(Hk - wk / 1e3))))
          })
        }), nk && (0, uS.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Hk, wk
    }));
    class sH {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      Gy(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ik = kk.baf2RxAlarmAt.join(",");
        let Dk = this.snapshot.boomAt;
        if (kk.baf2RxAlarmBoom) this.byReactor.delete(ik), Dk = ek;
        else if (kk.baf2RxAlarmDamage <= 0) this.byReactor.delete(ik);
        else {
          var fk;
          this.byReactor.set(ik, {
            damage: kk.baf2RxAlarmDamage,
            secs: null !== (fk = kk.baf2RxAlarmSecs) && void 0 !== fk ? fk : null,
            hot: !0 === kk.baf2RxAlarmHot,
            receivedAt: ek
          })
        }
        this.tm(Dk)
      }
      retain(kk) {
        let ek = !1;
        for (const ik of [...this.byReactor.keys()]) kk.has(ik) || (this.byReactor.delete(ik), ek = !0);
        ek && this.tm(this.snapshot.boomAt)
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
      tm(kk) {
        let ek = null;
        for (const ik of this.byReactor.values())(!ek || ik.damage > ek.damage) && (ek = ik);
        this.snapshot = {
          alarm: ek,
          boomAt: kk
        };
        for (const ik of this.listeners) ik()
      }
    }
    const dH = {
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

    function VH(kk) {
      return [kk[0], kk[1], kk[2]]
    }

    function FH(kk) {
      return `${kk[0]},${kk[1]},${kk[2]}`
    }
    class uH {
      constructor(kk) {
        if (this.plans = kk, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var kk;
            return {
              active: this.glows.flatMap((kk => {
                let {
                  record: ek
                } = kk;
                return ek ? [ek] : []
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
      check(kk, ek, ik) {
        const Dk = new Set(ek.map((kk => FH(kk.box.ctrl))));
        for (const bk of function(kk, ek) {
            const ik = [],
              Dk = new Map(kk);
            kk.clear();
            for (const fk of ek) {
              const ek = YU(fk.box.ctrl),
                Sk = fk.formed ? fk.level : 0;
              kk.set(ek, Sk), Sk > 0 && 0 === Dk.get(ek) && ik.push(fk)
            }
            return ik
          }(this.levels, this.plans.all())) Dk.has(FH(bk.box.ctrl)) && this.show(kk, bk, "on", ik);
        const fk = this.plans.lastFormed();
        if (null === fk || fk.receivedAt <= this.flashedAt) return null;
        this.flashedAt = fk.receivedAt;
        const Sk = function(kk, ek) {
          var ik;
          const Dk = YU(kk);
          return null !== (ik = ek.find((kk => YU(kk.box.ctrl) === Dk))) && void 0 !== ik ? ik : null
        }(fk.ctrl, ek);
        return Sk && this.show(kk, Sk, "formed", ik), Sk
      }
      fade(kk, ek) {
        0 !== this.glows.length && (this.glows = this.glows.filter((ik => {
          let {
            mesh: Dk,
            glow: fk,
            startMs: Sk,
            record: bk
          } = ik;
          const rk = (ek - Sk) / dH[fk].ms;
          return rk >= 1 ? (kk.disposeGameMesh(Dk), bk && (bk.endMs = ek), !1) : (kk.setGameMesh(Dk, {
            visibility: "formed" === fk ? 1 - rk : Math.sin(Math.PI * rk)
          }), !0)
        })))
      }
      dispose(kk) {
        for (const {
            mesh: ik
          }
          of this.glows) kk.disposeGameMesh(ik);
        this.glows = [], this.levels.clear();
        const ek = "undefined" !== typeof window ? window : null;
        (null === ek || void 0 === ek ? void 0 : ek.baf2Glows) === this.devAccessor && delete ek.baf2Glows
      }
      show(kk, ek, ik, Dk) {
        const {
          lo: fk,
          hi: Sk
        } = EP(ek.box);
        let bk = null;
        this.devLog && (bk = {
          glow: ik,
          ctrl: VH(ek.box.ctrl),
          lo: VH(fk),
          hi: VH(Sk),
          startMs: Dk,
          endMs: null
        }, this.devLog.push(bk), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(kk, ik, hP(fk, Sk, dH[ik].thick)),
          glow: ik,
          startMs: Dk,
          record: bk
        })
      }
      build(kk, ek, ik) {
        const Dk = dU(kk, ik, {
          rgb: dH[ek].colour,
          alpha: 1
        });
        return kk.setGameMesh(Dk, {
          visibility: 0
        }), Dk
      }
    }
    const qH = 1 / .6,
      IH = {
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
        blendMode: Wr.h.Standard,
        soft: !0
      },
      zH = {
        ...IH,
        size: [.25, .4],
        count: 2
      };

    function QH(kk) {
      return {
        colours: [kk, kk],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Wr.h.Add,
        soft: !1
      }
    }
    const vH = QH([150, 225, 255]),
      EH = QH([185, 145, 255]),
      hH = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function aH(kk) {
      const ek = ve[kk];
      return null === ek.fuelSlot || Si(ek) ? hH.includes(kk) ? EH : vH : IH
    }
    const WH = {
        kind: "smokePuff"
      },
      tH = [.2, .025, .2];

    function XH(kk, ek) {
      const [
        [ik, Dk, fk],
        [Sk, bk, rk]
      ] = kk.colours;
      return {
        texture: kk.soft ? WH : "square_particle",
        vK: ek,
        minLifeTime: kk.life[0] / qH,
        maxLifeTime: kk.life[1] / qH,
        minEmitPower: kk.power[0] * qH,
        maxEmitPower: kk.power[1] * qH,
        minSize: kk.size[0],
        maxSize: kk.size[1],
        emitRate: 0,
        gravity: [0, kk.lift * qH * qH, 0],
        dir1: [-kk.spread, 1, -kk.spread],
        dir2: [kk.spread, 1, kk.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [ik, Dk, fk, kk.alpha],
          maxColor: [Sk, bk, rk, kk.alpha]
        }, {
          timeFraction: 1,
          minColor: [ik, Dk, fk, 0],
          maxColor: [Sk, bk, rk, 0]
        }],
        blendMode: kk.blendMode
      }
    }
    class BH {
      constructor(kk) {
        this.fixed = kk, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(kk, ek, ik) {
        var Dk;
        if (ik === this.lastFrame) return !1;
        this.lastFrame = ik;
        const fk = this.at;
        fk[0] = ek[0] + .5, fk[1] = ek[1] + 1.025, fk[2] = ek[2] + .5;
        const Sk = null !== (Dk = this.fixed) && void 0 !== Dk ? Dk : rk() ? zH : IH;
        let bk = this.particles.get(Sk);
        return bk || (bk = kk.createParticles(function(kk) {
          return XH(kk, Math.ceil(12 * kk.count * kk.life[1]) + kk.count)
        }(Sk), {
          pos: fk,
          half: tH
        }), this.particles.set(Sk, bk)), bk.moveTo(fk), bk.emit(Sk.count), !0
      }
      dispose() {
        for (const kk of this.particles.values()) kk.stop();
        this.particles.clear()
      }
    }
    class cH {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(kk) {
        this.indexed = !0;
        for (const ek of Fe) {
          const ik = aH(ek);
          for (let Dk = 1; Dk <= 4; Dk++) {
            const fk = kk.blockNameToBlockId(`${ek}|meta|rot${Dk}|Running`, !0);
            if (null === fk) continue;
            let Sk = this.pufferIndexByStyle.get(ik);
            void 0 === Sk && (Sk = this.pufferList.push(new BH(ik === IH ? null : ik)) - 1, this.pufferIndexByStyle.set(ik, Sk)), this.pufferIndexById[fk] = Sk + 1
          }
        }
      }
      onAfterRender(kk, ek) {
        this.indexed || this.index(kk);
        const ik = performance.now(),
          Dk = 0 === this.lastMs ? 0 : Math.min(ik - this.lastMs, 250) / 1e3;
        this.lastMs = ik, this.frame++, kk.particlesEnabled() ? (this.scan(kk, ek), this.puff(kk, Dk)) : this.sources = []
      }
      dispose() {
        for (const kk of this.pufferList) kk.dispose();
        this.sources = [], this.found = []
      }
      scan(kk, ek) {
        0 === this.scanRow && (this.origin = [Math.floor(ek[0]) - 12, Math.floor(ek[1]) - 6, Math.floor(ek[2]) - 12]);
        const ik = Math.min(this.scanRow + 16, 325),
          [Dk, fk, Sk] = this.origin,
          bk = this.hits;
        bk.length = 0;
        for (let rk = this.scanRow; rk < ik; rk++) {
          const ek = Dk + rk % 25,
            ik = fk + Math.floor(rk / 25);
          kk.scanBlocks(ek, ik, Sk, ek + 1, ik + 1, Sk + 25, this.pufferIndexById, bk)
        }
        for (let rk = 0; rk < bk.length; rk += 4) {
          const kk = bk[rk + 3];
          this.found.push({
            pos: [bk[rk], bk[rk + 1], bk[rk + 2]],
            wP: kk,
            puffer: this.pufferList[this.pufferIndexById[kk] - 1]
          })
        }
        this.scanRow = ik, 325 === ik && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(kk, ek) {
        const ik = this.sources.length;
        if (0 !== ik) {
          this.budget = Math.min(this.budget + Math.min(ik / 1.2, 12) * ek, 2);
          for (let ek = 0; ek < ik && this.budget >= 1; ek++) {
            const ek = this.sources[this.cursor % ik];
            this.cursor = (this.cursor + 1) % ik, kk.getBlockId(ek.pos[0], ek.pos[1], ek.pos[2]) === ek.wP && (ek.puffer.puff(kk, ek.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const TH = {
        ...QH([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      oH = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function ZH(kk) {
      return 0 === kk.spots.length ? 0 : Math.min(1 * kk.level, 4)
    }

    function OH(kk) {
      return 0 === kk.glass.length ? 0 : Math.min(.75 * kk.level, 3)
    }

    function gH(kk) {
      return `${kk.ctrl.join(",")}:${kk.rot}:${kk.cu},${kk.cv}:${kk.w},${kk.h},${kk.d}`
    }

    function GH(kk, ek) {
      const ik = ek.w - 2,
        Dk = ek.h - 2,
        fk = ek.d - 2,
        Sk = [];
      for (let bk = 0; bk < ik * Dk * fk; bk++) {
        const rk = bk % ik,
          Pk = Math.floor(bk / ik) % fk,
          mk = Math.floor(bk / (ik * fk));
        if (rk > 0 && rk < ik - 1 && Pk > 0 && Pk < fk - 1 && mk > 0 && mk < Dk - 1) continue;
        const Mk = eD(ek, SD(ek, bk)),
          Kk = TU(kk, Mk);
        if (null !== Kk && "Fuel Rod" === zi(Kk))
          for (const ek of oH) {
            const ik = [Mk[0] + ek[0], Mk[1] + ek[1], Mk[2] + ek[2]];
            RH(kk, ik) && Sk.push(JH(ik, ek))
          }
      }
      return Sk
    }

    function NH(kk, ek) {
      const {
        lo: ik,
        hi: Dk
      } = EP(ek), fk = [];
      for (let Sk = ik[0]; Sk < Dk[0]; Sk++)
        for (let ek = ik[1]; ek < Dk[1]; ek++) {
          const bk = Sk === ik[0] || Sk === Dk[0] - 1 || ek === ik[1] || ek === Dk[1] - 1 ? 1 : Math.max(1, Dk[2] - 1 - ik[2]);
          for (let rk = ik[2]; rk < Dk[2]; rk += bk) {
            const bk = [Sk, ek, rk];
            if (!RH(kk, bk)) continue;
            const Pk = Sk === ik[0] ? oH[1] : Sk === Dk[0] - 1 ? oH[0] : rk === ik[2] ? oH[5] : rk === Dk[2] - 1 ? oH[4] : ek === ik[1] ? oH[3] : oH[2];
            fk.push(JH(bk, Pk))
          }
        }
      return fk
    }

    function RH(kk, ek) {
      const ik = TU(kk, ek);
      return null !== ik && "Reactor Glass" === zi(ik)
    }

    function JH(kk, ek) {
      return [
        [kk[0] + .5 + .55 * ek[0], kk[1] + .5 + .55 * ek[1], kk[2] + .5 + .55 * ek[2]],
        [0 === ek[0] ? .4 : .02, 0 === ek[1] ? .4 : .02, 0 === ek[2] ? .4 : .02]
      ]
    }
    class kw {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(kk, ek, ik, Dk) {
        const fk = [],
          Sk = new Set;
        for (const mk of ek) {
          var bk, rk, Pk;
          const {
            box: ek
          } = mk;
          if ("reactor" !== mk.kind || mk.level <= 0 || (ek.ctrl[0] - ik[0]) ** 2 + (ek.ctrl[1] - ik[1]) ** 2 + (ek.ctrl[2] - ik[2]) ** 2 > 576) continue;
          const Mk = gH(ek);
          Sk.add(Mk);
          let Kk = this.spots.get(Mk);
          if ((!Kk || Dk - Kk.at > 3e3) && (Kk = {
              at: Dk,
              spots: GH(kk, ek),
              glass: NH(kk, ek)
            }, this.spots.set(Mk, Kk)), 0 === Kk.spots.length && 0 === Kk.glass.length) continue;
          const xk = this.sparking.find((kk => kk.key === Mk));
          fk.push({
            key: Mk,
            level: mk.level,
            spots: Kk.spots,
            glass: Kk.glass,
            budget: null !== (bk = null === xk || void 0 === xk ? void 0 : xk.budget) && void 0 !== bk ? bk : 0,
            cursor: null !== (rk = null === xk || void 0 === xk ? void 0 : xk.cursor) && void 0 !== rk ? rk : 0,
            glassBudget: null !== (Pk = null === xk || void 0 === xk ? void 0 : xk.glassBudget) && void 0 !== Pk ? Pk : 0
          })
        }
        for (const mk of this.spots.keys()) Sk.has(mk) || this.spots.delete(mk);
        this.sparking = fk
      }
      emit(kk, ek, ik) {
        var Dk;
        if (0 === this.sparking.length || !kk.particlesEnabled() || ik === this.lastFrame) return;
        this.lastFrame = ik;
        let fk = 0,
          Sk = 0;
        for (const Uk of this.sparking) fk += ZH(Uk), Sk += OH(Uk);
        const bk = fk > 8 ? 8 / fk : 1,
          rk = Sk > 6 ? 6 / Sk : 1;
        let Pk, mk = null,
          Mk = null;
        for (const Uk of this.sparking) Uk.budget = Math.min(Uk.budget + ZH(Uk) * bk * ek, 2), Uk.budget >= 1 && (!mk || Uk.budget > mk.budget) && (mk = Uk), Uk.glassBudget = Math.min(Uk.glassBudget + OH(Uk) * rk * ek, 2), Uk.glassBudget >= 1 && (!Mk || Uk.glassBudget > Mk.glassBudget) && (Mk = Uk);
        if (mk) mk.budget--, Pk = mk.spots[mk.cursor++ % mk.spots.length];
        else {
          if (!Mk) return;
          Mk.glassBudget--, Pk = Mk.glass[Math.floor(Math.random() * Mk.glass.length)]
        }
        const [Kk, xk] = Pk, nk = null !== (Dk = this.emitter) && void 0 !== Dk ? Dk : this.create(kk, Kk, xk);
        nk.moveTo(Kk, xk), nk.emit(TH.count)
      }
      dispose() {
        var kk;
        null === (kk = this.emitter) || void 0 === kk || kk.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(kk, ek, ik) {
        const Dk = Math.ceil(14 * TH.count * TH.life[1]) + TH.count;
        return this.emitter = kk.createParticles(XH(TH, Dk), {
          pos: ek,
          half: ik
        }), this.emitter
      }
    }
    const ew = [2, 3.2],
      iw = 1 / 3,
      Dw = 1 / .6,
      fw = {
        texture: WH,
        vK: Math.ceil(18 * ew[1]) + 4,
        minLifeTime: ew[0] / Dw,
        maxLifeTime: ew[1] / Dw,
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
        blendMode: Wr.h.Standard
      };
    class Sw {
      constructor(kk) {
        this.plans = kk, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new kw, this.frame = 0, this.outline = new uH(kk)
      }
      onAfterRender(kk, ek, ik) {
        const Dk = performance.now(),
          fk = 0 === this.lastMs ? 0 : Math.min(Dk - this.lastMs, 250) / 1e3;
        if (this.lastMs = Dk, this.outline.fade(kk, Dk), this.puff(kk, fk, ik), this.sparks.emit(kk, fk, this.frame++), Dk - this.lastCheckMs < 150) return;
        this.lastCheckMs = Dk;
        const Sk = this.plans.all().filter((kk => kk.formed && bw(kk.box.ctrl, ik) <= 4096));
        this.plumes = Sk.filter((kk => "reactor" === kk.kind && kk.level > 0)).map((kk => ({
          box: kk.box,
          level: kk.level
        }))), this.updateHums(kk, ek, Sk, ik), this.sparks.update(kk, Sk, ik, Dk), this.chimeFormed(kk, ek, Sk, Dk)
      }
      dispose(kk) {
        var ek;
        this.outline.dispose(kk), null === (ek = this.steam) || void 0 === ek || ek.dispose(), this.steam = null, this.sparks.dispose();
        for (const ik of this.hums.values()) ik.stop();
        this.hums.clear()
      }
      chimeFormed(kk, ek, ik, Dk) {
        const fk = this.outline.check(kk, ik, Dk);
        fk && kk.playSound(ek, "exp_levelup", .6, 1, {
          ze: [fk.box.ctrl[0] + .5, fk.box.ctrl[1], fk.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(kk, ek, ik) {
        const Dk = this.plumes;
        if (0 === Dk.length || !kk.particlesEnabled()) return void(this.plumeBudget = 0);
        const fk = Dk.reduce(((kk, ek) => kk + 3 * ek.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + fk * ek, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Sk = this.plumeCursor % (fk / 3);
        this.plumeCursor++;
        let bk = Dk[0];
        for (const Kk of Dk) {
          if (Sk < Kk.level) {
            bk = Kk;
            break
          }
          Sk -= Kk.level
        }
        const {
          lo: rk,
          hi: Pk
        } = EP(bk.box);
        if (function(kk, ek, ik) {
            const Dk = Math.max(kk[0] - ik[0], 0, ik[0] - ek[0]),
              fk = Math.max(kk[2] - ik[2], 0, ik[2] - ek[2]);
            return Math.hypot(Dk, ik[1] - ek[1], fk)
          }(rk, Pk, ik) < 6 && Math.random() > iw) return;
        const mk = [(rk[0] + Pk[0]) / 2, Pk[1] + .05, (rk[2] + Pk[2]) / 2],
          Mk = [(Pk[0] - rk[0]) / 2 - .5, .05, (Pk[2] - rk[2]) / 2 - .5];
        this.steam ??= kk.createParticles(fw, {
          pos: mk,
          half: Mk
        }), this.steam.moveTo(mk, Mk), this.steam.emit(1)
      }
      updateHums(kk, ek, ik, Dk) {
        const fk = new Map;
        for (const bk of ik) "reactor" === bk.kind && bk.level > 0 && bw(bk.box.ctrl, Dk) <= 576 && fk.set(`${Sk=bk.box.ctrl,`${Sk[0]},${Sk[1]},${Sk[2]}`}:${bk.level}`, bk);
        var Sk;
        for (const [bk, rk] of this.hums) fk.has(bk) || (rk.stop(), this.hums.delete(bk));
        for (const [bk, rk] of fk) {
          if (this.hums.has(bk)) continue;
          const {
            lo: ik,
            hi: Dk
          } = EP(rk.box), fk = [(ik[0] + Dk[0]) / 2, ik[1], (ik[2] + Dk[2]) / 2], Sk = kk.playSound(ek, "rocketEngineLoop", .08 + .06 * rk.level, .55, {
            ze: fk,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Sk && this.hums.set(bk, Sk)
        }
      }
    }

    function bw(kk, ek) {
      return (kk[0] - ek[0]) ** 2 + (kk[1] - ek[1]) ** 2 + (kk[2] - ek[2]) ** 2
    }
    class rw {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      Gy(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Dk = [kk.baf2BombAt[0], kk.baf2BombAt[1], kk.baf2BombAt[2]],
          fk = kk.baf2BombR;
        if (kk.baf2BombBoom) {
          const kk = Math.hypot(ek[0] - Dk[0], ek[1] - Dk[1], ek[2] - Dk[2]);
          this.tm({
            fuse: null,
            blast: {
              at: Dk,
              r: fk,
              receivedAt: ik,
              distance: kk,
              flash: kk <= 3 * fk
            }
          })
        } else this.tm({
          ...this.snapshot,
          fuse: kk.baf2BombMs > 0 ? {
            at: Dk,
            r: fk,
            endsAt: ik + kk.baf2BombMs
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
      tm(kk) {
        this.snapshot = kk;
        for (const ek of this.listeners) ek()
      }
    }
    const Pw = (0, Dk.memo)((function(kk) {
      var ek;
      let {
        store: ik
      } = kk;
      const {
        t: fk
      } = (0, qf.D)(), [Sk, bk] = (0, Dk.useState)((() => ik.get())), [rk, Pk] = (0, Dk.useState)((() => performance.now()));
      (0, Dk.useEffect)((() => (bk(ik.get()), ik.subscribe((() => {
        bk(ik.get()), Pk(performance.now())
      })))), [ik]);
      const {
        fuse: mk,
        blast: Mk
      } = Sk;
      (0, Dk.useEffect)((() => {
        if (!mk) return;
        const kk = setInterval((() => {
          Pk(performance.now())
        }), 250);
        return () => {
          clearInterval(kk)
        }
      }), [mk]);
      const [Kk, xk] = (0, Dk.useState)(!1);
      (0, Dk.useEffect)((() => {
        if (null === Mk || void 0 === Mk || !Mk.flash) return;
        xk(!0);
        const kk = setTimeout((() => {
          xk(!1)
        }), 2500);
        return () => {
          clearTimeout(kk)
        }
      }), [Mk]);
      const nk = mk ? function(kk, ek) {
        return kk.endsAt <= ek ? 0 : Math.ceil((kk.endsAt - ek) / 1e3)
      }(mk, rk) : 0;
      return (0, uS.jsxs)(uS.Fragment, {
        children: [nk > 0 && (0, uS.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: fk("buildAFactory2Game:bombCountdown", {
            amount: String(nk),
            radius: String(null !== (ek = null === mk || void 0 === mk ? void 0 : mk.r) && void 0 !== ek ? ek : 0)
          })
        }), Kk && (0, uS.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function mw(kk) {
      const ek = Math.min(4, Math.max(1, kk / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * kk / 4)),
        capSpread: Math.min(5 * kk / 8, 24 * ek),
        capThick: 6 * ek,
        stemHalfWidth: 3 * ek,
        puffScale: ek
      }
    }
    class Mw {
      constructor() {
        this.XM = !1
      }
      hold(kk) {
        kk.getCameraFar() < 1e3 && (kk.setCameraFar(1e3), this.XM = !0)
      }
      release(kk) {
        this.XM && (this.XM = !1, kk.setCameraFar(null))
      }
    }
    const Kw = 1 / .6,
      xw = [.2, .1, .2],
      nw = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Uw = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Wr.h.Standard,
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
      Hw = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Wr.h.Standard,
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
      ww = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Wr.h.Standard,
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
      lw = {
        texture: WH,
        vK: Math.ceil(120) + 4,
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
        blendMode: Wr.h.Add
      };
    class pw {
      constructor(kk) {
        this.store = kk, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Mw, this.timers = []
      }
      onAfterRender(kk, ek) {
        const ik = performance.now(),
          Dk = 0 === this.lastMs ? 0 : Math.min(ik - this.lastMs, 250) / 1e3;
        this.lastMs = ik;
        const {
          fuse: fk,
          blast: Sk
        } = this.store.get();
        null !== Sk && Sk !== this.shownBlast && (this.shownBlast = Sk, this.startBlast(kk, ek, Sk, ik));
        const bk = kk.particlesEnabled();
        null !== fk && fk.endsAt > ik && bk ? this.emitBeacon(kk, fk, Dk, ik) : this.beaconBudget = 0, null !== this.cloud && (ik - this.cloud.startMs > 33e3 ? this.disposeCloud(kk) : (this.far.hold(kk), bk && this.emitCloud(kk, Dk, ik)))
      }
      dispose(kk) {
        var ek;
        null === (ek = this.beacon) || void 0 === ek || ek.dispose(), this.beacon = null, this.disposeCloud(kk);
        for (const ik of this.timers) clearTimeout(ik);
        this.timers.length = 0
      }
      emitBeacon(kk, ek, ik, Dk) {
        const fk = ek.endsAt - Dk < 5e3 ? 350 : 1e3,
          Sk = .5 + .5 * Math.sin(2 * Math.PI * Dk / fk);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Sk * ik, 4), this.beaconBudget < 1) return;
        const bk = Math.floor(this.beaconBudget);
        this.beaconBudget -= bk;
        const [rk, Pk, mk] = ek.at, Mk = [rk + .5, Pk + 1.1, mk + .5];
        this.beacon ??= kk.createParticles(lw, {
          pos: Mk,
          half: xw
        }), this.beacon.moveTo(Mk), this.beacon.emit(bk)
      }
      startBlast(kk, ek, ik, Dk) {
        var fk;
        null === (fk = this.beacon) || void 0 === fk || fk.dispose(), this.beacon = null, this.disposeCloud(kk);
        const Sk = (0, hr.isMobile)() ? .5 : 1;
        this.streams = [Uw, Hw, ww].map((kk => {
          const ek = Math.round(kk.count * Sk);
          return {
            spec: kk,
            particles: null,
            rate: ek / ((kk.toMs - kk.fromMs) / 1e3),
            budget: 0,
            left: ek
          }
        })), this.cloud = {
          blast: ik,
          startMs: Dk
        };
        const bk = Math.max(.25, 1 - ik.distance / (6 * ik.r)),
          rk = ik.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [ik, Dk, fk] of nw) Yw(kk, ek, ik, bk * Dk, fk)
        }), rk))
      }
      emitCloud(kk, ek, ik) {
        const {
          blast: Dk,
          startMs: fk
        } = this.cloud, Sk = ik - fk, [bk, rk, Pk] = Dk.at, mk = mw(Dk.r);
        for (const Mk of this.streams) {
          const {
            spec: ik
          } = Mk;
          if (Mk.left <= 0 || Sk < ik.fromMs) continue;
          Mk.budget += Mk.rate * ek;
          const fk = Math.min(Math.floor(Mk.budget), Mk.left);
          if (fk < 1) continue;
          Mk.budget -= fk, Mk.left -= fk;
          const Kk = Mk.particles ??= this.createStream(kk, ik, Dk);
          if (ik === Uw) {
            const kk = mk.stemHalfWidth;
            Kk.moveTo([bk, rk + 1, Pk], [kk, 1, kk])
          } else if (ik === Hw) {
            const kk = mk.capSpread * Math.min(1, (Sk - ik.fromMs) / 3e3),
              ek = Math.sqrt(Math.random()),
              Dk = 2 * Math.random() * Math.PI,
              fk = Math.cos(Dk) * ek,
              Mk = Math.sin(Dk) * ek,
              xk = bk + fk * kk,
              nk = Pk + Mk * kk,
              Uk = mk.capThick,
              Hk = rk + mk.capHeight + Uk * (1 - ek * ek) * 2;
            Kk.setDirections([.7 * fk, .05, .7 * Mk], [fk, .2, Mk]), Kk.moveTo([xk, Hk, nk], [Uk, Uk, Uk])
          } else {
            this.ringAngle += 2.39996;
            const kk = Math.cos(this.ringAngle),
              ek = Math.sin(this.ringAngle);
            Kk.setDirections([kk, .05, ek], [kk, .1, ek]), Kk.moveTo([bk + 2 * kk, rk + .5, Pk + 2 * ek], [0, .5, 0])
          }
          Kk.emit(fk)
        }
      }
      createStream(kk, ek, ik) {
        const {
          r: Dk
        } = ik, fk = Math.max(ek.life[0], Dk / 25), Sk = ek === ww ? [.9 * fk, fk] : ek.life, bk = mw(Dk), rk = ek === ww ? 1 : bk.puffScale, Pk = {
          texture: WH,
          vK: ek.count + 4,
          minLifeTime: Sk[0] / Kw,
          maxLifeTime: Sk[1] / Kw,
          minSize: ek.size[0] * rk,
          maxSize: ek.size[1] * rk,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, ek.gravity * Kw * Kw, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: ek.from[0],
            maxColor: ek.from[1]
          }, {
            timeFraction: .6,
            minColor: yw(ek.from[0], ek.to[0]),
            maxColor: yw(ek.from[1], ek.to[1])
          }, {
            timeFraction: 1,
            minColor: ek.to[0],
            maxColor: ek.to[1]
          }],
          blendMode: ek.blend
        };
        if (ek === Uw) {
          const kk = bk.capHeight / ((Sk[0] + Sk[1]) / 2);
          Pk.minEmitPower = .9 * kk * Kw, Pk.maxEmitPower = 1.05 * kk * Kw, Pk.dir1 = [-.1, 1, -.1], Pk.dir2 = [.1, 1, .1]
        } else ek === Hw ? (Pk.minEmitPower = 1.2, Pk.maxEmitPower = 2, Pk.dir1 = [-1, .05, -1], Pk.dir2 = [1, .2, 1]) : (Pk.minEmitPower = 39.583333333333336, Pk.maxEmitPower = 41.66666666666667, Pk.dir1 = [1, 0, 0], Pk.dir2 = [1, 0, 0]);
        return kk.createParticles(Pk, {
          pos: ik.at
        })
      }
      disposeCloud(kk) {
        for (const ik of this.streams) {
          var ek;
          null === (ek = ik.particles) || void 0 === ek || ek.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(kk)
      }
    }

    function yw(kk, ek) {
      return [(kk[0] + ek[0]) / 2, (kk[1] + ek[1]) / 2, (kk[2] + ek[2]) / 2, .75 * kk[3]]
    }

    function Yw(kk, ek, ik, Dk, fk) {
      try {
        kk.playSound(ek, ik, Dk, fk)
      } catch (Sk) {
        console.error(Sk)
      }
    }
    const Lw = {
        vK: 720,
        perS: 100
      },
      Cw = {
        vK: 320,
        perS: 44
      };
    class Aw {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(kk, ek) {
        this.zone = {
          centre: [...kk.centre],
          r: kk.r,
          band: kk.band ? [kk.band[0], kk.band[1]] : void 0
        }, this.endsAt = ek
      }
      stop() {
        this.zone = null
      }
      Gy(kk, ek) {
        const {
          baf2FalloutMs: ik,
          baf2FalloutAt: Dk,
          baf2FalloutR: fk,
          baf2FalloutY: Sk
        } = kk;
        ik > 0 && Dk && void 0 !== fk ? this.start({
          centre: Dk,
          r: fk,
          band: Sk
        }, ek + ik) : this.stop()
      }
      perS(kk, ek, ik) {
        const Dk = this.zone;
        if (!Dk) return 0;
        const fk = this.endsAt - kk;
        return fk <= 0 ? (this.zone = null, 0) : Dk.band && (ek[1] < Dk.band[0] || ek[1] > Dk.band[1]) || Math.hypot(ek[0] - Dk.centre[0], ek[2] - Dk.centre[2]) > Dk.r ? 0 : ik.perS * Math.min(1, fk / 5e3)
      }
    }
    const jw = [5, 7],
      sw = [24, 8, 24],
      dw = .5,
      Vw = 1 / .6,
      Fw = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class uw {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hr.isMobile)();
        this.state = new Aw, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(kk) {
          return kk ? Cw : Lw
        }(kk)
      }
      startFallout(kk, ek) {
        this.state.start(kk, ek)
      }
      stopFallout() {
        this.state.stop()
      }
      Gy(kk) {
        this.state.Gy(kk, performance.now())
      }
      onAfterRender(kk, ek) {
        var ik;
        const Dk = performance.now(),
          fk = 0 === this.lastMs ? 0 : Math.min(Dk - this.lastMs, 250) / 1e3;
        this.lastMs = Dk;
        const Sk = this.state.perS(Dk, ek, this.tier);
        if (Sk <= 0 || !kk.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Sk * fk, Sk / 4);
        const bk = Math.floor(this.budget);
        if (bk < 1) return;
        this.budget -= bk;
        const rk = this.at;
        rk[0] = ek[0], rk[1] = ek[1] + 12, rk[2] = ek[2];
        const Pk = null !== (ik = this.systems) && void 0 !== ik ? ik : this.create(kk, rk),
          mk = this.amounts;
        mk[0] = 0, mk[1] = 0;
        for (let Mk = 0; Mk < bk; Mk++) mk[Math.random() < .3 ? 1 : 0]++;
        for (let Mk = 0; Mk < Pk.length; Mk++) mk[Mk] > 0 && (Pk[Mk].moveTo(rk, sw), Pk[Mk].emit(mk[Mk]))
      }
      dispose() {
        for (const ek of null !== (kk = this.systems) && void 0 !== kk ? kk : []) {
          var kk;
          ek.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(kk, ek) {
        return this.systems = Fw.map((ik => {
          let {
            rgba: [Dk, fk, Sk, bk],
            share: rk
          } = ik;
          const Pk = {
            texture: "square_particle",
            vK: Math.ceil(this.tier.vK * rk),
            minLifeTime: jw[0] / Vw,
            maxLifeTime: jw[1] / Vw,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [dw, -1, dw],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Dk, fk, Sk, 0]
            }, {
              timeFraction: .15,
              minColor: [Dk, fk, Sk, bk]
            }, {
              timeFraction: .8,
              minColor: [Dk, fk, Sk, bk]
            }, {
              timeFraction: 1,
              minColor: [Dk, fk, Sk, 0]
            }],
            blendMode: Wr.h.Standard
          };
          return kk.createParticles(Pk, {
            pos: ek,
            half: sw
          })
        })), this.systems
      }
    }
    const qw = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Iw(kk) {
      const ek = /\|rot(\d)/.exec(kk);
      return qw[ek ? Number(ek[1]) : 1]
    }
    var zw = ik(591),
      Qw = ik(38057);
    const vw = new Set(zw.m);

    function Ew(kk) {
      if (-2 !== kk.count) return null;
      const ek = ck(kk.item);
      return null !== ek && vw.has(ek) ? ek : null
    }

    function hw(kk) {
      const {
        width: ek,
        height: ik
      } = (0, Qw.e)(kk).hitBoxDimensions;
      return .55 / Math.max(ek, ik)
    }

    function aw(kk, ek, ik) {
      if (!ik) return !1;
      const Dk = kk[0] + .5 - ek[0],
        fk = kk[1] + .5 - ek[1],
        Sk = kk[2] + .5 - ek[2];
      return Dk * Dk + fk * fk + Sk * Sk <= 576
    }

    function Ww(kk, ek) {
      return Math.atan2(kk[0], kk[2]) + Math.PI + ek
    }

    function tw(kk, ek) {
      const ik = 2 * Math.PI;
      return (kk + ik * ek / 1e4) % ik
    }
    class Xw {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = kk, this.now = ek, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = kk.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(kk, ek) {
        if (0 === this.farms.size) return;
        const ik = this.now(),
          Dk = Number.isNaN(this.frameMs) ? 0 : Math.min(ik - this.frameMs, 100);
        this.frameMs = ik, ik - this.checkedMs >= 1e3 && (this.checkedMs = ik, this.check(kk, ek));
        for (const fk of this.farms.values()) fk.shown && fk.running && null !== fk.model && Dk > 0 && (fk.spin = tw(fk.spin, Dk), fk.model.setPose(fk.feet, Ww(fk.front, fk.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const kk of this.farms.values()) this.drop(kk);
        this.farms.clear()
      }
      sync() {
        const kk = new Set;
        for (const ek of this.labels.list()) {
          const ik = Ew(ek);
          if (null === ik) continue;
          kk.add(ek.key);
          const Dk = this.farms.get(ek.key);
          if ((null === Dk || void 0 === Dk ? void 0 : Dk.mob) === ik) continue;
          Dk && this.drop(Dk);
          const [fk, Sk, bk] = ek.pos;
          this.farms.set(ek.key, {
            pos: ek.pos,
            feet: [fk + .5, Sk + 1, bk + .5],
            mob: ik,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [ek, ik] of this.farms) kk.has(ek) || (this.drop(ik), this.farms.delete(ek));
        this.checkedMs = -1 / 0
      }
      check(kk, ek) {
        for (const ik of this.farms.values()) {
          const [Dk, fk, Sk] = ik.pos, bk = TU(kk, ik.pos);
          null !== bk && zi(bk) === vk && aw(ik.pos, ek, "Air" === TU(kk, [Dk, fk + 1, Sk])) ? (ik.running = bk.endsWith("|Running"), ik.front = Iw(bk), null === ik.model && (ik.model = kk.createMobModel(ik.mob, hw(ik.mob)), null === ik.model) || (ik.model.setPose(ik.feet, Ww(ik.front, ik.spin)), ik.shown || (ik.model.setVisible(!0), ik.shown = !0))) : (ik.shown && null !== ik.model && ik.model.setVisible(!1), ik.shown = !1)
        }
      }
      drop(kk) {
        var ek;
        null === (ek = kk.model) || void 0 === ek || ek.dispose(), kk.model = null, kk.shown = !1
      }
    }
    class Bw {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(kk) {
        var ek;
        this.island = kk.baf2ColIsland, this.islandSite = (ek = kk.baf2ColSite) && 8 === ek.length ? {
          spawnXZ: [ek[0], ek[1]],
          coreXZ: [ek[2], ek[3]],
          minXZ: [ek[4], ek[5]],
          maxXZ: [ek[6], ek[7]]
        } : null, this.views = kk.baf2ColList.map((kk => ({
          entry: Mf(kk)
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
        var ek;
        return null === (ek = this.views.find((ek => {
          let {
            entry: ik
          } = ek;
          return ik.focus[0] === kk[0] && ik.focus[1] === kk[1] + 1 && ik.focus[2] === kk[2]
        }))) || void 0 === ek ? void 0 : ek.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(kk, ek) {
        return cP(this.entries(), kk, ek)
      }
      lookSource() {
        return {
          handles: kk => HD(kk) >= 0 || wD(kk),
          line: (kk, ek) => this.lookLine(kk, ek),
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
    const Tw = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((kk => kk / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((kk => [kk, kk + 1, kk + 2, kk, kk + 2, kk + 3]))
    };

    function ow(kk, ek, ik, Dk, fk, Sk, bk) {
      let rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Pk = Math.cos(rk),
        mk = Math.sin(rk),
        Mk = kk.positions.length / 3,
        {
          positions: Kk,
          indices: xk
        } = Tw;
      for (let nk = 0; nk < Kk.length; nk += 3) {
        const rk = Kk[nk] * fk,
          Mk = Kk[nk + 2] * bk;
        kk.positions.push(ek + rk * Pk + Mk * mk, ik + Kk[nk + 1] * Sk, Dk - rk * mk + Mk * Pk)
      }
      for (const nk of xk) kk.indices.push(Mk + nk)
    }

    function Zw(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return ek < 1 ? {
        rgb: kk,
        alpha: ek
      } : {
        rgb: kk,
        alpha: 1,
        opaque: !0
      }
    }
    class Ow {
      constructor(kk, ek) {
        this.style = kk, this.perSource = ek, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(kk) {
        this.sources = kk, 0 === kk.length && (this.budget = 0)
      }
      Px(kk, ek, ik) {
        const Dk = this.sources.length;
        if (0 !== Dk) {
          var fk, Sk;
          this.budget = Math.min(this.budget + (fk = Dk, Sk = this.perSource, Math.min(fk * Sk, fm) * ek), 2);
          for (let ek = 0; ek < Dk && this.budget >= 1; ek++) {
            const ek = this.sources[this.cursor % Dk];
            this.cursor = (this.cursor + 1) % Dk;
            if (!(Math.max(Math.abs(ek.x - ik[0]), Math.abs(ek.y - ik[1]), Math.abs(ek.z - ik[2])) > 32)) return this.puff(kk, ek), void this.budget--
          }
        }
      }
      dispose() {
        var kk;
        null === (kk = this.particles) || void 0 === kk || kk.dispose(), this.particles = null, this.sources = []
      }
      puff(kk, ek) {
        let {
          x: ik,
          y: Dk,
          z: fk,
          h: Sk,
          faces: bk
        } = ek;
        const rk = function(kk, ek, ik, Dk, fk) {
            const [Sk, bk, rk] = fk[Math.floor(Math.random() * fk.length)], Pk = .04, mk = (kk, ek, ik) => kk > 0 ? ek + ik + Pk : kk < 0 ? ek - Pk : ek + .1, Mk = (kk, ek, ik) => kk > 0 ? ek + ik + Pk : kk < 0 ? ek - Pk : ek + ik - .1, Kk = [mk(Sk, kk, 1), mk(bk, ek, Dk), mk(rk, ik, 1)], xk = [Mk(Sk, kk, 1), Mk(bk, ek, Dk), Mk(rk, ik, 1)];
            return {
              pos: [(Kk[0] + xk[0]) / 2, (Kk[1] + xk[1]) / 2, (Kk[2] + xk[2]) / 2],
              half: [(xk[0] - Kk[0]) / 2, (xk[1] - Kk[1]) / 2, (xk[2] - Kk[2]) / 2],
              out: [Sk, bk, rk]
            }
          }(ik, Dk, fk, Sk, bk),
          {
            style: Pk
          } = this,
          mk = this.particles ??= kk.createParticles(XH(Pk, Math.ceil(Pk.count * fm * Pk.life[1]) + 4), rk);
        mk.moveTo(rk.pos, rk.half);
        const [Mk, Kk, xk] = rk.out, nk = Pk.spread;
        mk.setDirections([Mk - nk, .6 + Kk, xk - nk], [Mk + nk, 1 + Kk, xk + nk]), mk.emit(Pk.count)
      }
    }
    const gw = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Gw {
      constructor() {
        this.green = new Ow(bm.green, im), this.pink = new Ow(bm.pink, Dm), this.colliders = [], this.lastMs = 0
      }
      setSources(kk) {
        this.colliders = kk;
        const ek = [],
          ik = [];
        for (const Dk of kk) {
          const [kk, fk, Sk] = Dk.focus;
          ek.push({
            x: kk,
            y: fk - 1,
            z: Sk,
            h: 2,
            faces: gw
          });
          for (let ek = 0; ek < 4; ek++) {
            if (!Dk.live[ek]) continue;
            const [kk, fk, Sk] = yD(Dk.focus, ek, mD.LASER_D), [bk, , rk] = pD[ek], Pk = gw.filter((kk => kk[0] !== bk || kk[2] !== rk || 0 !== kk[1]));
            ik.push({
              x: kk,
              y: fk,
              z: Sk,
              h: 1,
              faces: Pk
            })
          }
        }
        this.green.setSources(ek), this.pink.setSources(ik)
      }
      onAfterRender(kk) {
        const ek = performance.now(),
          ik = 0 === this.lastMs ? 0 : Math.min(ek - this.lastMs, 250) / 1e3;
        if (this.lastMs = ek, 0 === this.colliders.length || !kk.particlesEnabled()) return;
        const Dk = kk.getCameraPosition();
        this.green.Px(kk, ik, Dk), this.pink.Px(kk, ik, Dk)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Nw = 1.04,
      Rw = Zw([1, 120 / 255, 220 / 255]),
      Jw = Zw([1, .25, .25], .35);
    class kl {
      constructor(kk) {
        this.store = kk, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Gw
      }
      onAfterRender(kk) {
        this.store.version() !== this.builtVersion && this.rebuild(kk);
        const ek = performance.now();
        for (const ik of this.beams) {
          const Dk = 1 + .35 * Math.sin(ek / 700 * Math.PI * 2 + ik.phase);
          kk.setGameMesh(ik.mesh, {
            scale: [ik.alongX ? 1 : Dk, Dk, ik.alongX ? Dk : 1]
          })
        }
        this.glow.onAfterRender(kk)
      }
      dispose(kk) {
        this.clear(kk), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(kk) {
        this.clear(kk), this.builtVersion = this.store.version();
        const ek = [];
        for (const {
            entry: ik
          }
          of this.store.colliders()) ik.on && ik.live.some(Boolean) && (this.addBeams(kk, ik), ek.push(ik)), ik.blockers.length > 0 && this.addMarkers(kk, ik);
        this.glow.setSources(ek)
      }
      addBeams(kk, ek) {
        const [ik, Dk, fk] = ek.focus, Sk = em - .25, bk = (.25 + em) / 2;
        for (let rk = 0; rk < 4; rk++) {
          if (!ek.live[rk]) continue;
          const [Pk, , mk] = pD[rk], Mk = 0 !== Pk, Kk = {
            positions: [],
            indices: []
          };
          ow(Kk, 0, 0, 0, Mk ? Sk : .2, .2, Mk ? .2 : Sk);
          const xk = [ik + .5 + Pk * bk, Dk + .5, fk + .5 + mk * bk],
            nk = kk.createGameMesh(Kk, Rw, xk);
          this.meshes.push(nk), this.beams.push({
            mesh: nk,
            alongX: Mk,
            phase: rk * Math.PI / 2
          })
        }
      }
      addMarkers(kk, ek) {
        const ik = ek.blockers[0],
          Dk = {
            positions: [],
            indices: []
          };
        for (const [fk, Sk, bk] of ek.blockers) ow(Dk, fk - ik[0] + .5, Sk - ik[1] + .5, bk - ik[2] + .5, Nw, Nw, Nw);
        this.meshes.push(kk.createGameMesh(Dk, Jw, ik))
      }
      clear(kk) {
        for (const ek of this.meshes) kk.disposeGameMesh(ek);
        this.meshes = [], this.beams = []
      }
    }
    const el = [.56, .83, 1],
      il = [1, .73, .08],
      Dl = [1, .25, .25],
      fl = [.85, .85, .85],
      Sl = [.3, .45, .6];

    function bl(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const bk = fk / 2,
        rk = fk + Sk;
      for (const Pk of [-bk, bk])
        for (const fk of [-bk, bk]) ow(kk, ek, ik + Pk, Dk + fk, rk, Sk, Sk), ow(kk, ek + Pk, ik, Dk + fk, Sk, rk, Sk), ow(kk, ek + Pk, ik + fk, Dk, Sk, Sk, rk)
    }

    function rl(kk) {
      return ek => kk.isBlockInLoadedChunk(ek[0], ek[1], ek[2]) && 0 === kk.getBlockId(ek[0], ek[1], ek[2])
    }

    function Pl(kk) {
      return kk.map((kk => {
        let {
          free: ek,
          blocked: ik,
          gaps: Dk,
          supports: fk
        } = kk;
        return `${ek.join(";")}|${ik.join(";")}|${Dk.join(";")}|${fk.join(";")}`
      })).join("/")
    }

    function ml(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Sk = ek[0],
        bk = {
          positions: [],
          indices: []
        };
      for (const [rk, Pk, mk] of ek) bl(bk, rk - Sk[0] + .5, Pk - Sk[1] + .5, mk - Sk[2] + .5, Dk, fk);
      return kk.createGameMesh(bk, ik, Sk)
    }
    class Ml {
      constructor(kk) {
        this.store = kk, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(kk, ek, ik) {
        var Dk;
        const fk = null === (Dk = kk.jek(ek)) || void 0 === Dk ? void 0 : Dk.name;
        if (fk !== KD && fk !== MD) return void("" !== this.shownKey && this.show(kk, "", []));
        const Sk = performance.now();
        if (Sk - this.lastCheckMs >= 200 && (this.lastCheckMs = Sk, fk === KD ? this.check(kk, ik) : this.preview(kk, ik)), this.pulses.length > 0) {
          const ek = 1 + .12 * Math.sin(Sk / 1e3 * 1.25 * Math.PI * 2),
            ik = [ek, ek, ek];
          for (const Dk of this.pulses) kk.setGameMesh(Dk, {
            scale: ik
          })
        }
      }
      dispose(kk) {
        this.clear(kk), this.shownKey = ""
      }
      check(kk, ek) {
        const ik = rl(kk),
          Dk = [];
        for (const {
            entry: Sk
          }
          of this.store.colliders()) {
          Sk.focus.every(((kk, ik) => Math.abs(kk + .5 - ek[ik]) <= mD.GHOST_REACH)) && Dk.push(km(Sk, ik))
        }
        const fk = Pl(Dk);
        fk !== this.shownKey && this.show(kk, fk, Dk)
      }
      preview(kk, ek) {
        const ik = kk.getTargetedBlock(),
          Dk = ik ? [ik.gr[0], ik.gr[1], ik.gr[2]] : null,
          fk = null !== Dk && Dk.every(((kk, ik) => Math.abs(kk + .5 - ek[ik]) <= 8)),
          Sk = this.store.site(),
          bk = fk && Sk ? function(kk, ek, ik) {
            const Dk = lD(kk);
            if (!Dk.every(ek)) return null;
            const fk = CD(kk, ik);
            return {
              column: Dk,
              spots: km({
                focus: Dk[1],
                lasers: [!1, !1, !1, !1],
                open: fk,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, ek),
              fits: fk.filter(Boolean).length >= mD.MIN_SPOTS
            }
          }(Dk, rl(kk), Sk) : null,
          rk = bk ? [bk.spots] : [],
          Pk = bk ? `preview ${Dk.join(",")}|${bk.fits}|${Pl(rk)}` : "";
        var mk, Mk;
        Pk !== this.shownKey && this.show(kk, Pk, rk, null !== (mk = null === bk || void 0 === bk ? void 0 : bk.column) && void 0 !== mk ? mk : [], null === (Mk = null === bk || void 0 === bk ? void 0 : bk.fits) || void 0 === Mk || Mk)
      }
      show(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          fk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(kk), this.shownKey = ek, Dk.length > 0 && this.meshes.push(ml(kk, Dk, Zw(fk ? fl : Dl)));
        for (const {
            free: Sk,
            blocked: bk,
            gaps: rk,
            supports: Pk
          }
          of ik) {
          for (const [ek, ik, Dk] of Sk) {
            const fk = {
              positions: [],
              indices: []
            };
            bl(fk, 0, 0, 0);
            const Sk = kk.createGameMesh(fk, Zw(el), [ek + .5, ik + .5, Dk + .5]);
            this.meshes.push(Sk), this.pulses.push(Sk)
          }
          bk.length > 0 && this.meshes.push(ml(kk, bk, Zw(il))), rk.length > 0 && this.meshes.push(ml(kk, rk, Zw(Dl), 1.06, .07)), Pk.length > 0 && this.meshes.push(ml(kk, Pk, Zw(Sl)))
        }
      }
      clear(kk) {
        for (const ek of this.meshes) kk.disposeGameMesh(ek);
        this.meshes = [], this.pulses = []
      }
    }
    class Kl {
      constructor() {
        this.stored = new Map, this.XM = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(kk) {
        if (!kk.baf2TermOpen) return !1;
        kk.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [ek, ik] of kk.baf2TermItems) ik > 0 ? this.stored.set(ek, ik) : this.stored.delete(ek);
        if (kk.baf2TermHeld && (this.XM = new Map(kk.baf2TermHeld)), this.pending = this.pending.filter((ek => ek.seq > kk.baf2TermAcked)), this.silos = kk.baf2TermSilos, this.readOnly = kk.baf2TermReadOnly, this.pocket = !0 === kk.baf2TermPocket, kk.baf2TermReset) this.resort();
        else {
          const kk = new Set(this.order);
          for (const ek of this.stored.keys()) kk.has(ek) || this.order.push(ek)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((kk, ek) => this.amount(ek) - this.amount(kk) || kk.localeCompare(ek))), this.changed()
      }
      take(kk, ek) {
        const ik = Pe(kk, this.amount(ek));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: ek,
          amount: ik,
          put: !1
        }), this.recents = [ek, ...this.recents.filter((kk => kk !== ek))].slice(0, 6), this.changed(), De(this.seq, kk, ek)
      }
      put(kk, ek) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: ek,
          amount: Pe(kk, this.heldAmount(ek)),
          put: !0
        }), this.changed(), fe(this.seq, kk, ek)
      }
      putAll() {
        this.seq++;
        for (const kk of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: kk,
          amount: this.heldAmount(kk),
          put: !0
        });
        return this.changed(), Se(this.seq)
      }
      amount(kk) {
        var ek;
        let ik = null !== (ek = this.stored.get(kk)) && void 0 !== ek ? ek : 0;
        for (const Dk of this.pending) Dk.item === kk && (ik += Dk.put ? Dk.amount : -Dk.amount);
        return Math.max(0, ik)
      }
      heldAmount(kk) {
        var ek;
        let ik = null !== (ek = this.XM.get(kk)) && void 0 !== ek ? ek : 0;
        for (const Dk of this.pending) Dk.put && Dk.item === kk && (ik -= Dk.amount);
        return Math.max(0, ik)
      }
      heldItems() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((ek => ek === kk || this.heldAmount(ek) > 0))
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
    var xl = ik(38010);
    const nl = {
      isBlock: kk => void 0 !== qk.g[kk],
      harvestType: kk => {
        var ek;
        return null === (ek = qk.g[kk]) || void 0 === ek ? void 0 : ek.harvestType
      },
      harvestLevel: kk => {
        var ek;
        return null === (ek = qk.g[kk]) || void 0 === ek ? void 0 : ek.harvestLevel
      },
      dropsNothing: kk => {
        var ek;
        return null === (null === (ek = qk.g[kk]) || void 0 === ek ? void 0 : ek.drops)
      },
      displayName: kk => {
        var ek;
        return null === (ek = Dr.q[kk]) || void 0 === ek ? void 0 : ek.displayName
      },
      description: kk => {
        var ek;
        return null === (ek = Dr.q[kk]) || void 0 === ek ? void 0 : ek.description
      },
      harvests: kk => {
        var ek;
        return null === (ek = Dr.q[kk]) || void 0 === ek ? void 0 : ek.harvests
      },
      level: kk => {
        var ek;
        return null === (ek = Dr.q[kk]) || void 0 === ek ? void 0 : ek.level
      }
    };

    function Ul(kk, ek, ik) {
      return function(kk, ek, ik, Dk) {
        var fk, Sk;
        const bk = ek.split("|")[0],
          rk = kk.isBlock(ek) ? ek : kk.isBlock(bk) ? bk : null;
        if (null === rk || "rock" !== kk.harvestType(rk) || kk.dropsNothing(rk) && !XD.has(bk)) return null;
        const Pk = ik && "rock" === kk.harvests(ik) ? null !== (fk = kk.level(ik)) && void 0 !== fk ? fk : 0 : null,
          mk = null !== (Sk = null !== Dk && void 0 !== Dk ? Dk : kk.harvestLevel(rk)) && void 0 !== Sk ? Sk : 0;
        return (null !== Pk ? mk <= Pk : 0 === kk.harvestLevel(rk)) ? null : uD(kk, mk)
      }(nl, kk, ek, ik)
    }

    function Hl(kk, ek) {
      return function(kk, ek, ik) {
        if (ek === FD[0]) return [(0, Qk.Md)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Qk.D.whiteUiText)];
        const Dk = ik.split("|")[0],
          fk = kk.isBlock(Dk) ? kk.displayName(Dk) : void 0,
          Sk = "string" === typeof fk ? fk : fk && "translationKey" in fk ? `$t(${fk.translationKey})` : Dk;
        return [(0, Qk.Md)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Sk
          }
        }, Qk.D.whiteUiText), (0, Qk.Md)({
          translationKey: `item:${(0,Qk.je)(ek)}`
        }, Qk.D.yellowUiText)]
      }(nl, kk, ek)
    }
    const wl = "buildAFactory2Game:";
    const ll = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function pl(kk) {
      return kk.endsWith(" Ore")
    }
    const yl = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Yl = [],
      Ll = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: yl,
        plan: null,
        atomic: Yl
      },
      Cl = "buildAFactory2Game:",
      Al = new Set(["Splitter", "Sorting Gate"]),
      jl = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class sl {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = kk, this.planAt = ek, this.tierOf = ik, this.wP = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.XM = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Ll, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(kk, ek, ik) {
        var Dk, fk, Sk;
        let bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const rk = null !== (Dk = null === (fk = kk.jek(ek)) || void 0 === fk ? void 0 : fk.name) && void 0 !== Dk ? Dk : null,
          Pk = kk.isPlayerCrouching(ek),
          mk = 0 === ik ? null : this.resolve(kk, ik),
          Mk = null !== mk && null !== bk && Al.has(mk.rootName) && function(kk, ek) {
            return jl.some((ik => {
              let [Dk, fk] = ik;
              const Sk = kk.getBlockId(ek[0] + Dk, ek[1], ek[2] + fk);
              return 0 !== Sk && "Express Belt" === kk.getMetaInfo(Sk).rootName
            }))
          }(kk, bk),
          Kk = this.updatePlan(0 === ik ? null : bk),
          xk = this.tierOf(),
          nk = null === bk ? null : (0, xl.f)(ik),
          Uk = null !== nk && null !== bk && (0, xl.i)(function(kk) {
            return (ek, ik, Dk) => kk.getBlockId(ek, ik, Dk)
          }(kk), bk[0], bk[1], bk[2], nk),
          Hk = this.readAfloat(kk, ik, bk);
        if (ik === this.wP && Uk === this.missesMaker && Hk === this.afloat && rk === this.XM && Pk === this.crouching && Mk === this.express && xk === this.tier && !Kk && (!this.targetsLive || !this.liveMoved(bk))) return;
        this.wP = ik, this.missesMaker = Uk, this.afloat = Hk, this.XM = rk, this.crouching = Pk, this.express = Mk;
        const wk = Mk && mk ? function(kk) {
          if (null === kk.info) return null;
          return kk.express ??= {
            ...kk.info,
            detail: `${Cl}lookKeepsUpExpress`,
            detailItem: null
          }, kk.express
        }(mk) : null !== mk && Uk && null !== nk ? this.besideMaker(mk, ik, nk) : null !== mk && Hk ? this.hanging(mk) : null !== (Sk = null === mk || void 0 === mk ? void 0 : mk.info) && void 0 !== Sk ? Sk : null;
        this.tier = xk;
        const lk = mk && wk ? function(kk, ek) {
          var ik, Dk;
          const fk = qk.g[kk];
          if (!kk.endsWith(" Ore") || "rock" !== (null === fk || void 0 === fk ? void 0 : fk.harvestType) || 0 === fk.harvestLevel) return null;
          const Sk = null !== (ik = fk.harvestLevel) && void 0 !== ik ? ik : 0,
            bk = ek ? Dr.q[ek] : void 0;
          if ("rock" === (null === bk || void 0 === bk ? void 0 : bk.harvests) && (null !== (Dk = bk.level) && void 0 !== Dk ? Dk : 0) >= Sk) return null;
          const rk = (Pk = Sk, uD(nl, Pk));
          var Pk;
          if (null === rk) return null;
          const mk = rS(rk),
            Mk = /^[AEIOU]/.test(rk) ? "An" : "";
          if ("rock" === (null === bk || void 0 === bk ? void 0 : bk.harvests) && ek) return {
            key: `${Cl}lookToolTooWeak${Mk}`,
            XM: rS(ek),
            needed: mk
          };
          return {
            key: rk === FD[0] ? `${Cl}lookNeedAnyPickaxe` : `${Cl}lookNeedPickaxe${Mk}`,
            XM: null,
            needed: mk
          }
        }(mk.rootName, rk) : null;
        this.targetsLive = !0 === (null === mk || void 0 === mk ? void 0 : mk.live) && null !== bk;
        let pk = null;
        this.targetsLive && mk && bk && this.live && (this.livePos[0] = bk[0], this.livePos[1] = bk[1], this.livePos[2] = bk[2], this.liveVersion = this.live.version(), pk = this.live.line(mk.rootName, bk));
        const yk = null === wk ? yl : function(kk, ek, ik) {
            const Dk = function(kk, ek, ik) {
              const Dk = vi(kk);
              if (null === Dk) return null;
              const fk = `${wl}lookPortMode_${Dk}`,
                Sk = TD(ek);
              if (Sk && ik) return {
                mode: null,
                detail: fk,
                next: `${wl}lookWrenchPickUp`,
                nextState: null
              };
              const bk = Ei(kk),
                rk = null === bk ? null : vi(bk);
              return null === rk ? {
                mode: null,
                detail: fk,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: fk,
                next: Sk ? `${wl}lookWrenchNext` : `${wl}lookPortWrench`,
                nextState: `${wl}lookPortState_${rk}`
              }
            }(kk, ek, ik);
            if (null !== Dk) return Dk;
            const fk = bf(kk, ek, ik);
            return null === fk.mode && null === fk.next ? yl : fk
          }(kk.blockIdToBlockName(ik), rk, Pk),
          Yk = this.plan,
          Lk = mk && wk ? this.rowsOf(mk.rootName, xk) : Yl,
          Ck = this.snapshot;
        if (!(null === wk ? !Ck.visible : Ck.visible && wk === Ck.info && (Ak = lk, jk = Ck.tool, Ak === jk || null !== Ak && null !== jk && Ak.key === jk.key && Ak.XM === jk.XM && Ak.needed === jk.needed) && function(kk, ek) {
            return kk === ek || null !== kk && null !== ek && kk.key === ek.key && JSON.stringify([kk.params, kk.keys]) === JSON.stringify([ek.params, ek.keys])
          }(pk, Ck.live) && function(kk, ek) {
            return kk.mode === ek.mode && kk.detail === ek.detail && kk.next === ek.next && kk.nextState === ek.nextState
          }(yk, Ck.wrench) && iH(Yk, Ck.plan) && Lk === Ck.atomic)) {
          var Ak, jk;
          this.snapshot = null === wk ? {
            ...Ck,
            visible: !1
          } : {
            info: wk,
            visible: !0,
            tool: lk,
            live: pk,
            wrench: yk,
            plan: Yk,
            atomic: Lk
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Ll, this.wP = 0, this.XM = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(kk, ek, ik) {
        if (null === ik || 0 === ek || !rk() || !pl(this.resolve(kk, ek).rootName)) return !1;
        const Dk = `${ik[0]},${ik[1]},${ik[2]},${ek}`,
          fk = performance.now();
        return Dk === this.afloatKey && fk - this.afloatAt < dl ? this.afloat : (this.afloatKey = Dk, this.afloatAt = fk, function(kk, ek) {
          for (const [ik, Dk, fk] of ll) {
            const Sk = ek(kk[0] + ik, kk[1] + Dk, kk[2] + fk);
            if (void 0 === Sk || null !== Sk && !pl(Sk)) return !1
          }
          return !0
        }(ik, ((ek, ik, Dk) => function(kk, ek, ik, Dk) {
          if (!kk.isBlockInLoadedChunk(ek, ik, Dk)) return;
          const fk = kk.getBlockId(ek, ik, Dk);
          return 0 === fk ? null : kk.getMetaInfo(fk).rootName
        }(kk, ek, ik, Dk))))
      }
      liveMoved(kk) {
        var ek;
        const {
          livePos: ik
        } = this;
        return null === kk || kk[0] !== ik[0] || kk[1] !== ik[1] || kk[2] !== ik[2] || (null === (ek = this.live) || void 0 === ek ? void 0 : ek.version()) !== this.liveVersion
      }
      updatePlan(kk) {
        const ek = null === kk ? "" : kk.join(","),
          ik = performance.now();
        if (ek === this.planPos && ik - this.planMs < 250) return !1;
        this.planPos = ek, this.planMs = ik;
        const Dk = null === kk ? null : this.planAt([kk[0], kk[1], kk[2]]),
          fk = !iH(Dk, this.plan);
        return this.plan = Dk, fk
      }
      besideMaker(kk, ek, ik) {
        let {
          info: Dk
        } = kk;
        if (null === Dk) return null;
        let fk = this.besideMakerById.get(ek);
        if (void 0 === fk) {
          const kk = "cryo" === ik ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          fk = {
            ...Dk,
            detail: `${Cl}${kk}`,
            detailItem: null
          }, this.besideMakerById.set(ek, fk)
        }
        return fk
      }
      hanging(kk) {
        let {
          info: ek,
          rootName: ik
        } = kk;
        if (null === ek) return null;
        let Dk = this.afloatByRoot.get(ik);
        return void 0 === Dk && (Dk = {
          ...ek,
          detail: `${Cl}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(ik, Dk)), Dk
      }
      rowsOf(kk, ek) {
        if (null === ek) return Yl;
        const ik = `${kk}|${ek}`;
        let Dk = this.rowsByKey.get(ik);
        if (void 0 === Dk) {
          const fk = function(kk, ek) {
            var ik;
            if (!(kk in ve)) return [];
            const Dk = null !== (ik = Ee[kk]) && void 0 !== ik ? ik : [],
              fk = new Map;
            for (const bk of ZS(kk, ek))
              if ((Dk.includes(bk) || oS(bk.output) && cS(bk.output) > Nk(kk)) && cS(bk.output) <= ek) {
                var Sk;
                const kk = null !== (Sk = fk.get(bk.output)) && void 0 !== Sk ? Sk : [];
                kk.push(bk.input), fk.set(bk.output, kk)
              } return gS([...fk], (kk => {
              let [ek] = kk;
              return -cS(ek)
            })).map((kk => {
              let [ek, ik] = kk;
              return {
                output: ek,
                inputs: ik
              }
            }))
          }(kk, ek);
          Dk = fk.length > 0 ? fk : Yl, this.rowsByKey.set(ik, Dk)
        }
        return Dk
      }
      resolve(kk, ek) {
        const {
          rootId: ik,
          rootName: Dk
        } = kk.getMetaInfo(ek), fk = (0, Hi.m)(Dk) ? ek : ik;
        let Sk = this.byRootId.get(fk);
        const bk = rk();
        if (void 0 === Sk || Sk.nuclear !== bk) {
          var Pk;
          const ik = function(kk) {
            return WD(nl, kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk)
          }(Dk, kk.blockIdToBlockName(ek));
          Sk = {
            info: ik,
            rootName: Dk,
            live: null !== ik && !0 === (null === (Pk = this.live) || void 0 === Pk ? void 0 : Pk.handles(Dk)),
            nuclear: bk
          }, this.byRootId.set(fk, Sk)
        }
        return Sk
      }
    }
    const dl = 500;
    const Vl = (0, Dk.memo)((function(kk) {
      var ek, ik;
      let {
        store: fk
      } = kk;
      const {
        t: Sk
      } = (0, qf.D)(), [bk, rk] = (0, Dk.useState)((() => fk.get()));
      (0, Dk.useEffect)((() => (rk(fk.get()), fk.subscribe((() => {
        rk(fk.get())
      })))), [fk]);
      const {
        openInGameMenuName: Pk,
        openEverythingMenuName: mk,
        isTouchScreen: Mk
      } = (0, Af.n)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Kk,
        tool: xk,
        live: nk,
        wrench: Uk,
        atomic: Hk
      } = bk, wk = bk.visible && null === Pk && null === mk;
      if (null === Kk) return null;
      const lk = null !== Uk.detail ? Sk(Uk.detail) : null !== (ek = bk.plan) && void 0 !== ek && ek.ctrl ? Sk("buildAFactory2Game:lookPlanCtrl") : null !== Kk.detail ? Sk(Kk.detail, null === Kk.detailItem ? void 0 : {
        item: Sk(Kk.detailItem)
      }) : null;
      return (0, uS.jsxs)("div", {
        className: df()("Baf2LookTarget", {
          Visible: wk
        }),
        "aria-hidden": !wk,
        children: [(0, uS.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Sk(Kk.name)
        }), null !== bk.plan && (0, uS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Sk(bk.plan.key, {
            kind: Sk(bk.plan.kindKey),
            w: String(bk.plan.w),
            h: String(bk.plan.h),
            d: String(bk.plan.d),
            count: String(bk.plan.count)
          })
        }), void 0 !== (null === (ik = bk.plan) || void 0 === ik ? void 0 : ik.why) && (0, uS.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Sk(bk.plan.why)
        }), null !== Uk.mode && (0, uS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Sk(Uk.mode)
        }), null !== xk ? (0, uS.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Sk(xk.key, {
            item: Sk(xk.needed),
            XM: null === xk.XM ? "" : Sk(xk.XM)
          })
        }) : null !== nk ? (0, uS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Sk(nk.key, rm(Sk, nk))
        }) : null !== lk && (0, uS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: lk
        }), Hk.length > 0 && (0, uS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Sk("buildAFactory2Game:lookAtomicRecipes", {
            list: Hk.map((kk => {
              let {
                output: ek,
                inputs: ik
              } = kk;
              const Dk = ik.length > 1 ? ` ${Sk("buildAFactory2Game:recipeMore",{count:String(ik.length-1)})}` : "";
              return `${Sk(rS(ik[0]))}${Dk} \u2192 ${Sk(rS(ek))}`
            })).join(", ")
          })
        }), null !== Uk.next && (0, uS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Sk(Uk.next, {
            state: null === Uk.nextState ? "" : Sk(Uk.nextState),
            use: Sk(Mk ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Fl = ik(38092);
    const ul = [],
      ql = [
        [0, -1, 0]
      ];

    function Il(kk) {
      const ek = [kk];
      for (let ik = 1; ik <= 4; ik++) ik > 1 && ek.push(`${kk}|meta|rot${ik}`), ek.push(`${kk}|meta|rot${ik}|Running`);
      return ek
    }

    function zl(kk, ek) {
      return [Math.floor(kk[0] / ek), Math.floor(kk[1] / ek), Math.floor(kk[2] / ek)]
    }

    function Ql(kk, ek, ik) {
      return `${kk},${ek},${ik}`
    }

    function vl(kk) {
      const ek = kk.split("|")[0];
      if (!Mi(ek)) return ul;
      const ik = ve[ek];
      if (ii(ik)) return ql;
      const Dk = Iw(kk);
      return Di(ik) ? [
        [-Dk[0], -Dk[1], -Dk[2]]
      ] : Vf(ik) ? function(kk, ek) {
        const ik = kk[0] - 2 * ek[0],
          Dk = kk[2] - 2 * ek[2],
          fk = [];
        for (let Sk = -1; Sk <= 1; Sk++)
          for (let ek = -1; ek <= 1; ek++) fk.push([ik + Sk, kk[1], Dk + ek]);
        return fk
      }([0, 0, 0], Dk) : ul
    }
    const El = [.5, .5, .5],
      hl = [.2, .8, .3],
      al = [.45, 1, .5];
    class Wl {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(kk) {
        this.indexed = !0;
        for (const ek of Fe)
          for (const ik of Il(ek)) {
            const ek = kk.blockNameToBlockId(ik, !0),
              Dk = vl(ik);
            null !== ek && Dk.length > 0 && (this.offsetsList.push(Dk), this.offsetsIndexById[ek] = this.offsetsList.length)
          }
      }
      onAfterRender(kk, ek) {
        this.indexed || this.index(kk);
        const ik = performance.now();
        if (ik - this.lastCheckMs < 100) return;
        this.lastCheckMs = ik, this.checks++;
        const Dk = AU.g.oU,
          [fk, Sk, bk] = zl(ek, Dk);
        let rk = !1;
        const Pk = [];
        let mk = 0;
        for (let Mk = fk - 2; Mk <= fk + 2; Mk++)
          for (let ek = Sk - 1; ek <= Sk + 1; ek++)
            for (let fk = bk - 2; fk <= bk + 2; fk++) {
              const Sk = mk++,
                bk = Ql(Mk, ek, fk),
                Kk = kk.getChunkVersion(Mk, ek, fk);
              let xk = this.chunks.get(bk);
              null !== Kk ? (xk || (xk = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(bk, xk)), xk.seenAt = this.checks, xk.checkedVersion !== Kk && (xk.checkedVersion = Kk, rk = !0), xk.scannedVersion !== Kk && ik - xk.scannedAt >= 500 && Pk.push({
                slot: Sk,
                entry: xk,
                origin: [Mk * Dk, ek * Dk, fk * Dk]
              })) : (rk ||= void 0 !== xk, this.chunks.delete(bk))
            }
        this.scanDue(kk, Pk) && (rk = !0);
        for (const [Mk, Kk] of this.chunks) Kk.seenAt !== this.checks && (rk ||= Kk.machines.length > 0, this.chunks.delete(Mk));
        for (const Mk of this.chunks.values())
          for (const [ek, ik, Dk] of Mk.cellChunks)(Math.abs(ek - fk) > 2 || Math.abs(ik - Sk) > 1 || Math.abs(Dk - bk) > 2) && this.watchCellChunk(kk, ek, ik, Dk) && (rk = !0);
        for (const [Mk, Kk] of this.cellChunks) Kk.seenAt !== this.checks && this.cellChunks.delete(Mk);
        rk && this.refresh(kk)
      }
      dispose(kk) {
        this.clearMeshes(kk), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(kk, ek) {
        const ik = Math.max(ek.findIndex((kk => {
          let {
            slot: ek
          } = kk;
          return ek >= this.scanFrom
        })), 0);
        let Dk = 96;
        for (let fk = 0; fk < ek.length; fk++) {
          const {
            slot: Sk,
            entry: bk,
            origin: rk
          } = ek[(ik + fk) % ek.length];
          if (Dk -= this.scan(kk, bk, rk), Dk <= 0) {
            this.scanFrom = Sk + 1;
            break
          }
        }
        return ek.length > 0
      }
      scan(kk, ek, ik) {
        let [Dk, fk, Sk] = ik;
        const bk = AU.g.oU,
          rk = this.hits;
        rk.length = 0;
        const Pk = kk.scanBlocks(Dk, fk, Sk, Dk + bk, fk + bk, Sk + bk, this.offsetsIndexById, rk),
          mk = [];
        for (let Mk = 0; Mk < rk.length; Mk += 4) mk.push({
          pos: [rk[Mk], rk[Mk + 1], rk[Mk + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[rk[Mk + 3]] - 1]
        });
        return ek.machines = mk, ek.cellChunks = function(kk, ek) {
          const ik = new Set,
            Dk = [];
          for (const {
              pos: fk,
              offsets: Sk
            }
            of kk)
            for (const [kk, bk, rk] of Sk) {
              const Sk = zl([fk[0] + kk, fk[1] + bk, fk[2] + rk], ek),
                Pk = Ql(...Sk);
              ik.has(Pk) || (ik.add(Pk), Dk.push(Sk))
            }
          return Dk
        }(mk, bk), ek.scannedVersion = ek.checkedVersion, ek.scannedAt = performance.now(), Math.max(Pk, 1)
      }
      watchCellChunk(kk, ek, ik, Dk) {
        const fk = Ql(ek, ik, Dk),
          Sk = kk.getChunkVersion(ek, ik, Dk),
          bk = this.cellChunks.get(fk);
        return null === Sk ? this.cellChunks.delete(fk) : (null === bk || void 0 === bk ? void 0 : bk.version) === Sk ? (bk.seenAt = this.checks, !1) : (this.cellChunks.set(fk, {
          version: Sk,
          seenAt: this.checks
        }), !0)
      }
      refresh(kk) {
        const ek = function(kk, ek) {
            const ik = new Set,
              Dk = [];
            for (const {
                pos: fk,
                offsets: Sk
              }
              of kk)
              for (const [kk, bk, rk] of Sk) {
                const Sk = fk[0] + kk,
                  Pk = fk[1] + bk,
                  mk = fk[2] + rk,
                  Mk = `${Sk},${Pk},${mk}`;
                ik.has(Mk) || (ik.add(Mk), ek(Sk, Pk, mk) && Dk.push([Sk, Pk, mk]))
              }
            return Dk
          }([...this.chunks.values()].flatMap((kk => kk.machines)), ((ek, ik, Dk) => kk.isBlockInLoadedChunk(ek, ik, Dk) && 0 === kk.getBlockId(ek, ik, Dk))),
          ik = ek.join(";");
        ik !== this.shownKey && (this.shownKey = ik, this.clearMeshes(kk), ek.length > 0 && (this.meshes = [this.build(kk, ek, !1), this.build(kk, ek, !0)]))
      }
      build(kk, ek, ik) {
        const Dk = ek[0],
          fk = [],
          Sk = [];
        for (const [bk, rk, Pk] of ek)(0, Fl.b)(fk, Sk, [bk - Dk[0] + .5, rk - Dk[1] + .5, Pk - Dk[2] + .5], El, ik);
        return kk.createGameMesh({
          positions: fk,
          indices: Sk
        }, {
          rgb: ik ? al : hl,
          alpha: .4
        }, Dk)
      }
      clearMeshes(kk) {
        for (const ek of this.meshes) kk.disposeGameMesh(ek);
        this.meshes = []
      }
    }
    const tl = 1 / .6,
      Xl = 200,
      Bl = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      cl = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Tl = 2 * Math.PI / 3;
    class ol {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bl;
        this.style = kk, this.particles = null, this.points = new Float32Array(800), this.budget = Xl, this.lastMs = 0
      }
      static blade() {
        return new ol(cl)
      }
      Gy(kk, ek) {
        const ik = Math.min(ek.arcStruck, ek.arcPoints.length);
        this.draw(kk, [ek.arcFrom, ...ek.arcPoints], ek.arcPoints.slice(0, ik))
      }
      onBlade(kk, ek) {
        const [ik, Dk, fk] = ek.bladeCentre, [Sk, bk] = ek.bladeFacing, rk = ik - 1.5 * Sk, Pk = fk - 1.5 * bk, mk = Math.atan2(bk, Sk), Mk = [];
        for (let Kk = 0; Kk <= 8; Kk++) {
          const kk = mk - Tl / 2 + Tl * Kk / 8;
          Mk.push([rk + 2.5 * Math.cos(kk), Dk, Pk + 2.5 * Math.sin(kk)])
        }
        this.draw(kk, Mk, ek.bladeStruck)
      }
      dispose() {
        var kk;
        null === (kk = this.particles) || void 0 === kk || kk.stop(), this.particles = null
      }
      draw(kk, ek, ik) {
        if (!kk.particlesEnabled() || ek.length < 2) return;
        const Dk = performance.now();
        this.budget = Math.min(Xl, this.budget + (Dk - this.lastMs) / 1e3 * Xl), this.lastMs = Dk;
        const fk = [];
        let Sk = 0,
          bk = ek[0];
        for (const lk of ek.slice(1)) {
          const kk = Math.min(48, Math.round(Math.hypot(lk[0] - bk[0], lk[1] - bk[1], lk[2] - bk[2]) * this.style.perBlock));
          fk.push([bk, lk, kk]), Sk += kk, bk = lk
        }
        const rk = ik.length;
        Sk += 10 * rk;
        const Pk = Sk > this.budget ? this.budget / Sk : 1;
        if (0 === Sk || Pk * Sk < 1) return;
        const mk = ek[0],
          [Mk, Kk, xk] = mk,
          nk = this.points;
        let Uk = 0;
        const Hk = (kk, ek, ik, Dk) => {
          const fk = 4 * Uk;
          nk[fk] = kk - Mk, nk[fk + 1] = ek - Kk, nk[fk + 2] = ik - xk, nk[fk + 3] = Dk, Uk++
        };
        fk.forEach(((kk, ek) => {
          let [ik, Dk, fk] = kk;
          const Sk = Math.min(Math.floor(fk * Pk), Xl - Uk),
            bk = Math.hypot(Dk[0] - ik[0], Dk[1] - ik[1], Dk[2] - ik[2]),
            rk = 0 === ek && bk > 0 ? Math.min(.5, .1 * bk) / bk : 0;
          for (let Pk = 0; Pk < Sk; Pk++) {
            const kk = rk + (Pk + .5) / Sk * (1 - rk);
            Hk(ik[0] + (Dk[0] - ik[0]) * kk, ik[1] + (Dk[1] - ik[1]) * kk, ik[2] + (Dk[2] - ik[2]) * kk, .15)
          }
        }));
        const wk = Math.floor(10 * Pk);
        for (let lk = 0; lk < rk; lk++) {
          const [kk, ek, Dk] = ik[lk];
          for (let ik = 0; ik < wk && Uk < Xl; ik++) Hk(kk, ek, Dk, 2.5)
        }
        this.budget -= Uk, this.particles ??= kk.createParticles(function(kk) {
          const [ek, ik] = kk.colours;
          return {
            texture: "square_particle",
            vK: 400,
            minLifeTime: kk.life[0] / tl,
            maxLifeTime: kk.life[1] / tl,
            minSize: kk.size[0],
            maxSize: kk.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [ek[0], ek[1], ek[2], 1],
              maxColor: [ik[0], ik[1], ik[2], 1]
            }, {
              timeFraction: 1,
              minColor: [ek[0], ek[1], ek[2], 0],
              maxColor: [ik[0], ik[1], ik[2], 0]
            }],
            blendMode: Wr.h.Add
          }
        }(this.style), {
          pos: mk
        }), this.particles.emitPoints(mk, nk, Uk)
      }
    }
    const Zl = new Set(["Sky Spring"]);

    function Ol(kk, ek, ik) {
      const Dk = kk.split("|")[0];
      return "Air" !== ek || ik || ! function(kk) {
        const ek = kk.split("|")[0];
        return void 0 !== ri[ek] || Zl.has(ek)
      }(Dk) ? null : kk
    }
    class gl {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(kk) {
        const ek = kk - this.lastTapAt >= 300;
        return this.lastTapAt = kk, ek
      }
    }
    class Gl {
      constructor() {
        this.presses = new gl, this.predicted = null
      }
      tap(kk, ek) {
        const ik = this.presses.isNewPress(ek);
        return ik && (this.predicted = {
          station: kk,
          at: ek
        }), ik
      }
      consumeServerOpen(kk, ek) {
        const ik = this.predicted;
        return !(null === ik || ik.station !== kk || ek - ik.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Nl {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(kk, ek) {
        return kk && (this.thrustAt = ek), ek - this.thrustAt < 200
      }
    }
    const Rl = [.1, .05, .1],
      Jl = {
        texture: "effect_5",
        vK: Math.ceil(48),
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
        blendMode: Wr.h.OneOne
      };
    class kp {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Nl, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      Gy(kk, ek) {
        for (const [ik, Dk] of ek.baf2JetFlames) kk.isLocalPlayer(ik) || (Dk ? this.lit.add(ik) : this.lit.delete(ik))
      }
      onAfterRender(kk, ek) {
        const ik = performance.now(),
          Dk = this.hold.lit(this.selfThrusting(kk, ek), ik);
        for (const [fk, Sk] of this.flames)(fk === ek ? Dk : this.lit.has(fk)) || this.setEmitting(Sk, !1), fk === ek || kk.getPositionView(fk) ? !Sk.emitting && ik - Sk.offAt >= 1300 && (Sk.particles.stop(), this.flames.delete(fk)) : (Sk.particles.dispose(), this.flames.delete(fk), this.lit.delete(fk));
        Dk && this.draw(kk, ek, ek);
        for (const fk of this.lit) this.draw(kk, ek, fk)
      }
      dispose() {
        for (const kk of this.flames.values()) kk.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(kk, ek) {
        var ik;
        const Dk = kk.getLocalPlayerMovement();
        return !!Dk && (null !== (fk = {
          option: null !== (ik = kk.getClientOption(ek, "jumpHoldThrust")) && void 0 !== ik ? ik : null,
          jumping: Dk.jumpHeld,
          onGround: Dk.onGround,
          alive: kk.isAlive(ek)
        }).option && fk.option.maxUpSpeed >= 0 && fk.jumping && !fk.onGround && fk.alive);
        var fk
      }
      draw(kk, ek, ik) {
        var Dk, fk;
        const Sk = this.pos;
        if (!kk.readDrawnPosition(ik, Sk)) return;
        const bk = kk.readDrawnPosition(ek, this.camera) ? this.camera : Sk;
        if (!((Sk[0] - bk[0]) ** 2 + (Sk[1] - bk[1]) ** 2 + (Sk[2] - bk[2]) ** 2 < 1600) || !kk.particlesEnabled()) {
          const kk = this.flames.get(ik);
          return void(kk && this.setEmitting(kk, !1))
        }
        const rk = null !== (Dk = this.flames.get(ik)) && void 0 !== Dk ? Dk : this.create(kk, ik, Sk),
          Pk = null !== (fk = kk.getDrawnHeading(ik)) && void 0 !== fk ? fk : 0,
          mk = this.at;
        mk[0] = Sk[0] - .35 * Math.sin(Pk), mk[1] = Sk[1] + 1.05, mk[2] = Sk[2] - .35 * Math.cos(Pk), rk.particles.moveTo(mk), this.setEmitting(rk, !0)
      }
      setEmitting(kk, ek) {
        kk.emitting !== ek && (kk.emitting = ek, ek || (kk.offAt = performance.now()), kk.particles.setEmitRate(ek ? 60 : 0))
      }
      create(kk, ek, ik) {
        const Dk = {
          particles: kk.createParticles(Jl, {
            pos: ik,
            half: Rl
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(ek, Dk), Dk
      }
    }

    function ep(kk) {
      return "Reactor Frame" === bD("reactor", kk)
    }

    function ip(kk) {
      return Xi("reactor", kk) && !ep(kk) && (kk.startsWith("Reactor Glass") || kk.startsWith("Reactor Port"))
    }
    const Dp = "baf2Goal";
    class fp {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [hf.j.subscribe("setDirectionArrow", (kk => {
          let {
            id: ek,
            position: ik
          } = kk;
          ek === Dp && (this.goal = ik, this.checkedAt = -1 / 0)
        })), hf.j.subscribe("clearDirectionArrow", (kk => {
          let {
            id: ek
          } = kk;
          null !== ek && ek !== Dp || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const kk of this.subs) hf.j.unsubscribe(kk)
      }
      sideOf(kk, ek, ik, Dk) {
        const fk = this.goal;
        if (!fk) return 0;
        ik - this.checkedAt > 1e3 && (this.checkedAt = ik, this.open = function(kk, ek) {
          const [ik, Dk, fk] = kk.map(Math.floor);
          if (!ip(ek(ik, Dk, fk))) return null;
          for (const [Sk, bk] of [
              [1, 0],
              [0, 1]
            ]) {
            const kk = ek(ik + Sk, Dk, fk + bk),
              rk = ek(ik - Sk, Dk, fk - bk);
            if (ep(rk) && ip(kk)) return [Sk, 0, bk];
            if (ep(kk) && ip(rk)) return [0 - Sk, 0, 0 - bk]
          }
          return null
        }(fk, ((ek, ik, Dk) => kk.blockIdToBlockName(kk.getBlockId(ek, ik, Dk)))));
        const Sk = this.open;
        if (!Sk) return 0;
        const bk = Dk(fk);
        if (Math.abs(bk.x - ek.x) > .05 || Math.abs(bk.y - ek.y) > .05) return 0;
        const rk = Dk([fk[0] + Sk[0], fk[1], fk[2] + Sk[2]]).x - bk.x;
        return Math.abs(rk) < .3 ? 0 : rk > 0 ? 1 : -1
      }
    }
    class Sp {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new fp, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.aU = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Ay = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((kk => {
          for (const ek of kk) ek.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(ek.target, ek.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.aU || this.clear()
        }, window.addEventListener("resize", this.Ay)
      }
      onAfterRender(kk, ek) {
        var ik;
        this.api = kk, this.project = null !== (ik = null === ek || void 0 === ek ? void 0 : ek.projectWorldPosToScreenPos) && void 0 !== ik ? ik : null, this.queued || this.aU || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.aU = !0;
        for (const kk of this.moved.keys()) kk.style.transform = "";
        this.moved.clear();
        for (const kk of this.sideLabels.keys()) kk.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Ay)
      }
      clear() {
        for (const Sk of this.moved.keys()) Sk.isConnected || this.moved.delete(Sk);
        for (const Sk of this.sideLabels.keys()) Sk.isConnected || this.sideLabels.delete(Sk);
        if (0 === this.arrows.length) return;
        const kk = performance.now(),
          ek = kk - this.refreshedAt > 1e3;
        ek && (this.refreshedAt = kk, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const ik = this.trackerBox(),
          Dk = this.barsBox(),
          fk = this.toastBox(ek);
        (ik || Dk || fk) && ek && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Sk = 0; Sk < this.arrows.length; Sk++) {
          const ek = this.arrows[Sk];
          this.labelOffsets.set(ek, this.runLabelAside(ek, kk));
          const bk = (ik ? this.shiftLeftOf(ek, ik) : 0) || this.shiftOnScreen(ek),
            rk = Math.min(Dk ? this.liftAbove(ek, Dk, bk) : 0, fk ? this.liftAbove(ek, fk, bk) : 0),
            Pk = this.moved.get(ek);
          if (0 !== bk || 0 !== rk) {
            const kk = 0 === rk ? `translateX(${bk}px)` : `translate(${bk}px, ${rk}px)`;
            Pk !== kk && (ek.style.transform = kk, this.moved.set(ek, kk))
          } else void 0 !== Pk && (ek.style.transform = "", this.moved.delete(ek))
        }
      }
      trackerBox() {
        var kk, ek;
        const ik = null !== (kk = this.tracker) && void 0 !== kk && kk.isConnected ? this.tracker : null !== (ek = this.trackers[0]) && void 0 !== ek ? ek : null;
        if (ik !== this.tracker && this.watch(ik), this.boxStale && ik) {
          var Dk, fk, Sk;
          this.boxStale = !1;
          const kk = ik.closest(".NoRoom") ? null : ik.getBoundingClientRect(),
            ek = kk && kk.width > 0 ? null === (Dk = this.hud) || void 0 === Dk ? void 0 : Dk.getBoundingClientRect() : void 0,
            bk = kk && ek ? Math.max(kk.top, ek.top) : null !== (fk = null === kk || void 0 === kk ? void 0 : kk.top) && void 0 !== fk ? fk : 0,
            rk = kk && ek ? Math.min(kk.bottom, ek.bottom) : null !== (Sk = null === kk || void 0 === kk ? void 0 : kk.bottom) && void 0 !== Sk ? Sk : 0;
          this.box = kk && kk.width > 0 && rk > bk ? {
            left: kk.left,
            top: bk,
            right: kk.right,
            bottom: rk
          } : null
        }
        return ik ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var kk;
          this.barsStale = !1;
          const ek = null === (kk = this.statBars[0]) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
          this.bars = ek && ek.width > 0 && ek.height > 0 ? {
            left: ek.left,
            top: ek.top,
            right: ek.right,
            bottom: ek.bottom
          } : null
        }
        return this.bars
      }
      toastBox(kk) {
        var ek;
        const ik = null !== (ek = this.toasts[0]) && void 0 !== ek ? ek : null;
        if (ik !== this.toastEl || kk && ik) {
          this.toastEl = ik;
          const kk = null === ik || void 0 === ik ? void 0 : ik.getBoundingClientRect();
          this.toast = kk && kk.width > 0 && kk.height > 0 ? {
            left: kk.left,
            top: kk.top,
            right: kk.right,
            bottom: kk.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(kk, ek, ik) {
        var Dk;
        const fk = this.anchorOf(kk);
        if (!fk) return 0;
        const Sk = fk.x + ik + (null !== (Dk = this.labelOffsets.get(kk)) && void 0 !== Dk ? Dk : 0),
          {
            halfWidth: bk,
            labelled: rk
          } = this.extentOf(kk),
          Pk = fk.y + this.em * (rk ? 6.2 : 3);
        return Pk < ek.top - 6 || Sk + bk < ek.left - 6 || Sk - bk > ek.right + 6 ? 0 : ek.top - 6 - Pk
      }
      watch(kk) {
        var ek, ik;
        this.tracker && this.sizes.unobserve(this.tracker), null === (ek = this.hud) || void 0 === ek || ek.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = kk, this.hud = null !== (ik = null === kk || void 0 === kk ? void 0 : kk.closest(".Baf2QuestHud")) && void 0 !== ik ? ik : null, this.box = null, this.boxStale = !0, kk && this.sizes.observe(kk), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(kk, ek) {
        var ik;
        const Dk = this.anchorOf(kk);
        if (!Dk) return 0;
        const {
          y: fk
        } = Dk, Sk = Dk.x + (null !== (ik = this.labelOffsets.get(kk)) && void 0 !== ik ? ik : 0), bk = this.em, {
          halfWidth: rk,
          labelled: Pk
        } = this.extentOf(kk), mk = fk - bk, Mk = Sk + rk;
        return fk + bk * (Pk ? 6.2 : 3) < ek.top || mk > ek.bottom || Mk < ek.left - 6 || Sk - rk > ek.right ? 0 : Math.max(ek.left - 6 - Mk, 6 - (Sk - rk))
      }
      shiftOnScreen(kk) {
        var ek;
        const ik = this.anchorOf(kk);
        if (!ik) return 0;
        const {
          halfWidth: Dk
        } = this.extentOf(kk), fk = ik.x + (null !== (ek = this.labelOffsets.get(kk)) && void 0 !== ek ? ek : 0), Sk = fk + Dk - (this.innerWidth - 6);
        return Sk > 0 ? -Sk : Math.max(0, 6 - (fk - Dk))
      }
      runLabelAside(kk, ek) {
        var ik;
        let Dk = null;
        for (let bk = 0; bk < kk.children.length; bk++) kk.children[bk].classList.contains("DirectionArrowLabel") && (Dk = kk.children[bk]);
        if (!Dk) return 0;
        const fk = kk.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(kk) : null,
          Sk = (fk && this.api ? this.side.sideOf(this.api, {
            x: fk.x / this.innerWidth * 100,
            y: fk.y / this.innerHeight * 100
          }, ek, this.project) : 0) * this.halfWidthOf(Dk);
        return Sk !== (null !== (ik = this.sideLabels.get(Dk)) && void 0 !== ik ? ik : 0) && (Dk.style.transform = 0 === Sk ? "" : `translateX(-50%) translateX(${Sk}px)`, 0 === Sk ? this.sideLabels.delete(Dk) : this.sideLabels.set(Dk, Sk)), Sk
      }
      extentOf(kk) {
        let ek = this.em,
          ik = !1;
        for (let Dk = 0; Dk < kk.children.length; Dk++) {
          const fk = kk.children[Dk],
            Sk = fk.classList.contains("DirectionArrowLabel");
          ik ||= Sk, (Sk || fk.classList.contains("DirectionArrowDistance")) && (ek = Math.max(ek, this.halfWidthOf(fk)))
        }
        return {
          halfWidth: ek,
          labelled: ik
        }
      }
      halfWidthOf(kk) {
        let ek = this.halfWidths.get(kk);
        return void 0 === ek && (ek = kk.offsetWidth / 2, this.halfWidths.set(kk, ek), this.sizes.observe(kk), this.labels.add(kk)), ek
      }
      forgetGoneLabels() {
        for (const kk of this.labels) kk.isConnected || (this.sizes.unobserve(kk), this.halfWidths.delete(kk), this.labels.delete(kk))
      }
      anchorOf(kk) {
        const ek = kk.style.translate,
          ik = this.anchors.get(kk);
        if (ik && ik.translate === ek && ik.innerWidth === this.innerWidth && ik.innerHeight === this.innerHeight) return ik;
        const Dk = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(ek);
        if (!Dk) return null;
        const fk = {
          translate: ek,
          x: parseFloat(Dk[1]) / 100 * this.innerWidth,
          y: parseFloat(Dk[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(kk, fk), fk
      }
    }
    const bp = "Baf2ArrowText";

    function rp(kk, ek) {
      const ik = kk.rows.find((kk => kk.current));
      return zk(kk.tutorial) && null !== ik && void 0 !== ik && ik.item && gf(ik) && Fk(ik.item).includes(ek) ? ik.item : null
    }
    const Pp = new class {
      constructor(kk) {
        this.select = kk, this.picks = new Map
      }
      open(kk, ek, ik) {
        const Dk = rp(ek, kk);
        null !== Dk && this.Un(kk, Dk, ik)
      }
      follow(kk, ek) {
        if (rk())
          for (const [ik, {
              item: Dk,
              had: fk
            }] of this.picks) {
            const Sk = rp(kk, ik);
            Sk !== Dk && (null !== Sk && ek(Dk) > fk ? this.Un(ik, Sk, ek) : this.picks.delete(ik))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Un(kk, ek, ik) {
        this.picks.set(kk, {
          item: ek,
          had: ik(ek)
        }), this.select(kk, ek)
      }
    }(af.q);

    function mp(kk) {
      return ek => {
        let ik = 0;
        for (const Dk of kk.getInventoryItems())(null === Dk || void 0 === Dk ? void 0 : Dk.name) === ek && (ik += null === Dk.amount ? 1 : Math.max(Dk.amount, 0));
        return ik
      }
    }

    function Mp(kk, ek, ik, Dk) {
      kk.getClientOption(ek, "canCraft") && "inventory" !== Af.b.get("openInGameMenuName") && (Pp.open(ik, Dk.get(), mp(kk)), hf.j.tm("toggleMenu", `inventory|${ik}`))
    }
    let Kp = null,
      xp = !1;

    function np(kk) {
      const ek = FS();
      kk === Kp && ek === xp || (Kp = kk, xp = ek, (0, af.s)(function(kk, ek) {
        const ik = new Map;
        for (let Dk = kk + 1; Dk <= fk.length; Dk++) {
          const fk = GS(Dk, kk, ek);
          if (fk)
            for (const ek of lk(Dk).unlocks) ik.set(ek, {
              ...fk,
              stepsAway: Dk - kk
            })
        }
        return ik
      }(kk, ek)))
    }

    function Up() {
      return kk = () => {
        null !== Kp && np(Kp)
      }, (0, dS.l)(VS, kk);
      var kk
    }

    function Hp() {
      return (0, af.x)(gS(Object.keys(Vk), cS)), () => {
        (0, af.x)([])
      }
    }

    function wp(kk, ek, ik) {
      var Dk, fk;
      const Sk = kk.getTargetedBlock();
      if (!Sk || ! function(kk, ek, ik) {
          if ("Chest" !== ek) return !1;
          const Dk = kk.split("|")[0];
          if (!Mi(Dk) || 0 === ve[Dk].outputSlots.length) return !1;
          const fk = Iw(kk);
          return ik[0] === fk[0] && ik[1] === fk[1] && ik[2] === fk[2]
        }(ik, null === (Dk = kk.jek(ek)) || void 0 === Dk ? void 0 : Dk.name, Sk.normal)) return !1;
      const [bk, rk, Pk] = Sk.gr, mk = kk.getBlockId(bk, rk, Pk);
      return 0 === mk || !0 === (null === (fk = qk.g[mk]) || void 0 === fk ? void 0 : fk.canBePlacedOver)
    }
    var lp = ik(36341);
    const pp = new Set(wi.b);
    class yp {
      constructor(kk) {
        this.toasts = kk, this.lastAt = -1 / 0
      }
      onAltAction(kk, ek, ik) {
        const Dk = kk.getTargetedBlock();
        if (!Dk || function(kk) {
            const ek = kk.split("|")[0];
            return Mi(ek) || null !== dD(ek) || sk(ek) || wi.b.includes(ek)
          }(ik) && !pp.has(ik.split("|")[0])) return;
        const fk = kk.jek(ek);
        if (!fk || !pp.has(fk.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Sk = fk.typeObj.id,
          [bk, rk, Pk] = Dk.gr,
          mk = kk.getBlockId(bk, rk, Pk),
          Mk = qk.g[mk];
        (0 === mk || null !== Mk && void 0 !== Mk && Mk.qn || null !== Mk && void 0 !== Mk && Mk.canBePlacedOver) && kk.isSolidToPlayerBlockId(Sk) && kk.canModifyBlockAt(bk, rk, Pk) && kk.okk(bk, rk, Pk, Sk) && !kk.okk(bk, rk, Pk, Sk, ek) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Qk.Md)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Qk.D.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Yp {
      constructor(kk) {
        this.show = kk, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(kk, ek, ik) {
        var Dk;
        if (!ek) return this.started = null, void this.gatedThisHold.clear();
        if (!kk) return void(this.started = null);
        const fk = `${kk.x},${kk.y},${kk.z},${kk.XM}`;
        if (fk === this.started) return;
        this.started = fk;
        const Sk = tD(kk.y) ? Ul(kk.block, kk.XM, kk.level) : null;
        if (null === Sk || this.gatedThisHold.has(fk)) return;
        this.gatedThisHold.add(fk);
        const bk = kk.block.split("|")[0];
        ik - (null !== (Dk = this.hintedAt.get(bk)) && void 0 !== Dk ? Dk : -1 / 0) < 5e3 || (this.hintedAt.set(bk, ik), this.show({
          baf2ToastText: Hl(Sk, kk.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Lp = ik(38);

    function Cp(kk, ek) {
      const ik = [...kk.baf2CoreBankPaused];
      for (const [fk] of kk.baf2CoreBanked) ik.push(fk);
      for (const bk of fk) {
        for (const {
            item: kk
          }
          of bk.cost) ik.push(kk);
        for (const kk of bk.newDeposits) ik.push(kk.block);
        for (const kk of bk.unlocks) ik.push(kk, uk(kk));
        bk.reward && ik.push(bk.reward);
        for (const {
            item: kk
          }
          of null !== (Dk = null === (Sk = bk.charge) || void 0 === Sk ? void 0 : Sk.items) && void 0 !== Dk ? Dk : []) {
          var Dk, Sk;
          ik.push(kk)
        }
      }
      return {
        message: kk,
        itemNames: ek([...new Set(ik)])
      }
    }
    const Ap = "baf2MultiblockGuide";
    const jp = new Map;
    const sp = function(kk, ek, ik, fk) {
      let {
        localPlayerId: Sk
      } = fk;
      const bk = new Yr,
        rk = new Mn,
        mk = new pn,
        Mk = new Hn(mk),
        Kk = (kk, ek) => {
          ek ? Mk.observe(kk) : Mk.unobserve(kk)
        },
        xk = new Un,
        nk = new Cn(Kk),
        Uk = kk => nk.covers(kk),
        Hk = new Bn;
      let wk;
      const lk = new cb((kk => {
          wk.sendCommand(kk)
        })),
        pk = () => {
          lk.send("baf2questbook")
        },
        yk = kk => function(kk, ek, ik) {
          const Dk = {};
          for (const fk of ik) {
            let ik = jp.get(fk);
            void 0 === ik && (ik = kk.getItemStat(ek, fk, "displayName"), jp.set(fk, ik)), Dk[fk] = ik
          }
          return Dk
        }(wk, Sk, kk),
        Yk = new Bf(pk),
        Lk = new eU((() => Af.b.get("loadingOverlayVisible"))),
        Ck = new qM(lk, Yk, Lk),
        Ak = new bU,
        jk = new yp(Lk),
        dk = new Yp((kk => {
          Lk.show(kk, kk.baf2ToastMs)
        })),
        Vk = new HU(Kk),
        Fk = new Xw(Vk),
        uk = new Fb,
        Ik = new Kl,
        zk = new br,
        Ek = new CU({
          read: () => !1 !== Lp.f.getItem(Ap),
          write: kk => {
            Lp.f.setItem(Ap, kk)
          }
        }),
        hk = new GU(Ek),
        ak = new JU(Ek),
        Wk = new YH(Ek, (kk => function(kk, ek) {
          const ik = DP(ek.w, ek.h, ek.d),
            Dk = new Uint8Array(ik);
          for (let fk = 0; fk < ik; fk++) {
            const ik = TU(kk, eD(ek, SD(ek, fk)));
            Dk[fk] = null === ik ? 0 : Jr(ik)
          }
          return Dk
        }(wk, kk)), KH(lk)),
        tk = new LH(Ek, KH(lk)),
        Xk = new pH,
        Tk = (kk, ek) => {
          let [ik, Dk, fk] = kk;
          Xk.answered(ek) || Lk.show({
            baf2ToastText: [(0, Qk.Md)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: ik,
                h: Dk,
                d: fk
              }
            }, Qk.D.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      Wk.onSizeNotTaken(Tk), tk.onSizeNotTaken(Tk);
      const Zk = new sH,
        Ok = new Sw(Ek),
        Gk = new rw,
        Nk = new pw(Gk),
        Rk = new uw,
        ke = new Bw,
        ee = new kl(ke),
        ie = new Ml(ke),
        De = ke.lookSource(),
        fe = new sl({
          handles: kk => De.handles(kk) || kk === vk,
          line: (kk, ek) => kk === vk ? function(kk, ek, ik) {
            var Dk;
            const fk = ck(null === (Dk = ek.at(ik)) || void 0 === Dk ? void 0 : Dk.item);
            return null === fk ? {
              key: `${Cl}lookFarmEmpty`
            } : {
              key: kk.blockIdToBlockName(kk.getBlockId(ik[0], ik[1], ik[2])).endsWith("|Running") ? `${Cl}lookFarmRunning` : `${Cl}lookFarmWaiting`,
              keys: {
                mob: Bk(fk)
              }
            }
          }(wk, Vk, ek) : De.line(kk, ek),
          version: () => De.version() + Vk.version()
        }, (kk => eH(Ek.all(), kk, (kk => TU(wk, kk)))), (() => Yk.get().tier)),
        Se = new cH,
        be = new Wl,
        re = new ol,
        Pe = ol.blade(),
        me = new kp,
        Me = new mU,
        Ke = new Sp,
        ne = new Gl,
        Ue = new gl;
      let He = -1 / 0,
        we = 0,
        le = -1 / 0,
        pe = -1 / 0;
      const ye = () => {
          lk.send("baf2islandsclose"), pe = Date.now()
        },
        Ye = [];

      function Le(kk) {
        var ek, ik, Dk, fk, Sk, bk, Pk;
        "core" === (null === (ek = rk.get()) || void 0 === ek ? void 0 : ek.kind) && "core" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && lk.send("baf2coreclose"), "power" === (null === (ik = rk.get()) || void 0 === ik ? void 0 : ik.kind) && "power" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && lk.send("baf2powerclose"), "water" === (null === (Dk = rk.get()) || void 0 === Dk ? void 0 : Dk.kind) && "water" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && lk.send(Jk.o), "terminal" === (null === (fk = rk.get()) || void 0 === fk ? void 0 : fk.kind) && "terminal" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && lk.send("baf2terminalclose"), "islands" === (null === (Sk = rk.get()) || void 0 === Sk ? void 0 : Sk.kind) && "islands" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && ye();
        const mk = ke.getStatus();
        "collider" === (null === (bk = rk.get()) || void 0 === bk ? void 0 : bk.kind) && "collider" !== (null === kk || void 0 === kk ? void 0 : kk.kind) && mk && lk.send(tP(mk, "close"));
        const Mk = kk => "reactor" === kk || "battery" === kk;
        if (Mk(null === (Pk = rk.get()) || void 0 === Pk ? void 0 : Pk.kind) && !Mk(null === kk || void 0 === kk ? void 0 : kk.kind)) {
          var Kk, xk, nk;
          const kk = "reactor" === (null === (Kk = rk.get()) || void 0 === Kk ? void 0 : Kk.kind) ? null === (xk = Wk.get()) || void 0 === xk ? void 0 : xk.status.baf2RxAt : null === (nk = tk.get()) || void 0 === nk ? void 0 : nk.status.baf2BatAt;
          kk && lk.send(xe(kk, "close"))
        }
        "quests" === (null === kk || void 0 === kk ? void 0 : kk.kind) && pk(), rk.set(kk), null === kk && Ak.release()
      }

      function Ce() {
        (0, Cf.d)(), Le(null)
      }
      let Ae = new Set,
        je = !1;
      const se = {
        onCreate: kk => {
          wk = kk, wk.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const ek of Fe) {
            const kk = ve[ek].inputSlots ? Er(bk) : zr(ek, bk, uk, lk);
            Ye.push((0, Yf.f)(ek, kk))
          }
          Ye.push((0, Cf.z)((0, Dk.createElement)(Dk.Fragment, null, (0, Dk.createElement)(sn, {
            controller: nk
          }), (0, Dk.createElement)(pU, {
            store: Vk
          }), (0, Dk.createElement)(Vl, {
            store: fe
          }), (0, Dk.createElement)(Jn, {
            store: Yk
          }), (0, Dk.createElement)(fU, {
            store: Lk
          }), (0, Dk.createElement)(rU, {
            store: Ak
          }), (0, Dk.createElement)(KU, {
            store: Me
          }), (0, Dk.createElement)(jH, {
            store: Zk
          }), (0, Dk.createElement)(Pw, {
            store: Gk
          })), {
            content: (0, Dk.createElement)(Kn, {
              commands: lk,
              store: rk,
              power: uk,
              water: zk,
              reactor: Wk,
              battery: tk,
              collider: ke,
              terminal: Ik,
              quests: Yk,
              tutorial: Ck,
              close: Cf.h,
              leave: () => {
                Ak.dropHeld(), (0, Cf.d)()
              },
              askIslands: () => {
                pe = -1 / 0, He = Date.now(), we = lk.send(gk)
              },
              openSocial: () => {
                (0, Cf.d)(), Af.b.set({
                  openEverythingMenuName: xi.r.SOCIAL
                })
              },
              showCore: kk => {
                Le({
                  kind: "core",
                  core: kk
                }), lk.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Le(null)
            }
          })), Ye.push((0, Lf.v)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Le({
                kind: "quests"
              }), (0, Cf.r)()
            }
          })), Ye.push(function(kk, ek) {
            let ik = null,
              Dk = () => {};
            const fk = ek => {
              var fk;
              let {
                tutorial: Sk,
                tutorialKnown: bk
              } = ek;
              (null === (fk = ik) || void 0 === fk ? void 0 : fk.tutorial) === Sk && ik.tutorialKnown === bk || (ik = {
                tutorial: Sk,
                tutorialKnown: bk
              }, Dk = (0, Lf.v)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: FM[Sk],
                icon: {
                  kind: "icon",
                  name: VM[Sk]
                },
                iconOnly: !0,
                disabled: !bk,
                className: "Baf2TutorialButton",
                onClick: () => {
                  kk.next()
                }
              }))
            };
            fk(ek.get());
            const Sk = hf.j.subscribe(Wf, fk);
            return () => {
              hf.j.unsubscribe(Sk), Dk()
            }
          }(Ck, Yk)), je = !1, Ye.push(Up()), Ye.push(Hp()), Ye.push(function() {
            const kk = hf.j.subscribe(Wf, DS),
              ek = () => {
                if (iS) {
                  const kk = iS;
                  iS = null, (0, af.t)(kk)
                }
              },
              ik = hf.j.subscribe("toggleMenu", (kk => {
                "inventory" === (null === kk || void 0 === kk ? void 0 : kk.split("|")[0]) && ek()
              })),
              Dk = hf.j.subscribe("appManagerUpdated|openInGameMenuName", (kk => {
                "inventory" === kk && ek()
              }));
            return () => {
              hf.j.unsubscribe(kk), hf.j.unsubscribe(ik), hf.j.unsubscribe(Dk)
            }
          }()), Ye.push(function(kk) {
            const ek = mp(kk),
              ik = hf.j.subscribe(Wf, (kk => {
                Pp.follow(kk, ek)
              }));
            return () => {
              hf.j.unsubscribe(ik), Pp.clear()
            }
          }(wk)), Ye.push(function() {
            const kk = document.documentElement,
              ek = (0, Tn.d)(".InvenBodyRight", [], (() => {
                const ek = document.querySelector(".InvenBodyRight");
                ek && kk.style.setProperty("--baf2-backpack-width", `${ek.offsetWidth}px`)
              }));
            return () => {
              ek(), kk.style.removeProperty("--baf2-backpack-width")
            }
          }()), Ye.push(function() {
            const kk = document.documentElement;
            return kk.classList.add(bp), () => {
              kk.classList.remove(bp)
            }
          }()), Ye.push((() => {
            Mk.dispose(), mk.dispose()
          })), Hk.start(wk), Ye.push((() => {
            Hk.dispose(), me.dispose(), Fk.dispose()
          }))
        },
        onClose: () => {
          (0, af.t)([]), iS = null, eS = new Set, Kp = null, (0, af.s)(new Map), jp.clear();
          for (const kk of Ye) kk();
          Yk.dispose(), fe.dispose(), Lk.dispose(), Ak.dispose(), Se.dispose(), be.dispose(wk), hk.dispose(wk), ak.dispose(wk), Ok.dispose(wk), Nk.dispose(wk), Gk.dispose(), Rk.dispose(), Ek.dispose(), Wk.dispose(), tk.dispose(), Zk.dispose(), re.dispose(), Pe.dispose(), Me.dispose(), ee.dispose(wk), ie.dispose(wk), ke.dispose(), Ke.dispose(), lk.clear()
        },
        onAfterRender: (kk, ek) => {
          var ik, Dk, fk;
          try {
            Hk.onAfterRender(ek)
          } catch (mk) {
            console.error("Error drawing BAF2 belt items", mk)
          }
          try {
            me.onAfterRender(wk, Sk)
          } catch (mk) {
            console.error("Error drawing BAF2 jet flames", mk)
          }
          je || (je = !0, lk.send("baf2clientready"));
          const bk = wk.getPositionView(Sk);
          nk.onAfterRender(ek, bk, xk), Vk.onAfterRender(ek, bk, xk, Uk), Mk.run(xk), Se.onAfterRender(wk, bk), be.onAfterRender(wk, bk), Fk.onAfterRender(wk, bk), hk.onAfterRender(wk, bk), ak.onAfterRender(wk, Sk, bk), Ok.onAfterRender(wk, Sk, bk), Nk.onAfterRender(wk, Sk), Rk.onAfterRender(wk, bk), Yk.onPlayerY(bk[1]), ee.onAfterRender(wk), ie.onAfterRender(wk, Sk, bk);
          const Pk = wk.getTargetedBlock();
          fe.onAfterRender(wk, Sk, null !== (ik = null === Pk || void 0 === Pk ? void 0 : Pk.PJ) && void 0 !== ik ? ik : 0, null !== (Dk = null === Pk || void 0 === Pk ? void 0 : Pk.position) && void 0 !== Dk ? Dk : null), Ke.onAfterRender(wk, ek), dk.onMining(function(kk, ek) {
            var ik, Dk;
            const fk = kk.getMiningBlock();
            if (!fk) return null;
            const Sk = (0, qk.e)(kk.getBlockId(fk[0], fk[1], fk[2])),
              bk = null !== (ik = null === (Dk = kk.jek(ek)) || void 0 === Dk ? void 0 : Dk.name) && void 0 !== ik ? ik : null,
              rk = kk.getItemStat(ek, Sk.split("|")[0], "harvestLevel");
            return {
              block: Sk,
              x: fk[0],
              y: fk[1],
              z: fk[2],
              XM: bk,
              level: rk
            }
          }(wk, Sk), wk.isMining(), performance.now()), "dropMap" === (null === (fk = rk.get()) || void 0 === fk ? void 0 : fk.kind) && tD(bk[1]) && Ce()
        },
        onPlayerChangeBlock: (kk, ek, ik, Dk, fk, bk) => {
          kk === Sk && function(kk, ek, ik, Dk, fk, Sk, bk) {
            const rk = Ol(Sk, bk, kk.isPlayerCrouching(ek));
            if (null === rk) return;
            if (kk.RV(ik, Dk, fk, rk), !kk.getClientOption(ek, "canPickUpItems")) return;
            const Pk = ri[rk.split("|")[0]];
            var mk, Mk, Kk;
            void 0 !== Pk && (mk = kk.getInventoryItems(), Mk = Pk, Kk = AU.g.maxItemStackSize, kk.getInventoryFreeSlotCount(ek) > 0 || mk.some((kk => null !== kk && kk.name === Mk && null !== kk.amount && kk.amount < Kk))) && kk.playSound(ek, (0, lp.g)("pickUp"), .5, 1)
          }(wk, kk, ek, ik, Dk, fk, bk)
        },
        onPlayerAltAction: (kk, ek, ik, Dk, fk) => {
          var bk, rk;
          if (!wk.getClientOption(Sk, "canPickUpItems")) return;
          const Pk = null !== (bk = null === (rk = wk.jek(Sk)) || void 0 === rk ? void 0 : rk.name) && void 0 !== bk ? bk : null,
            mk = function(kk, ek) {
              const ik = kk.split("|")[0];
              return sk(ik) && ek !== Kf && "Sky Pack" !== ek ? ik : null
            }(fk, Pk);
          if (null !== mk) return void(ne.tap(mk, performance.now()) && Mp(wk, Sk, mk, Yk));
          if (!TD(Pk)) return;
          const Mk = Ue.isNewPress(performance.now()),
            Kk = function(kk, ek, ik) {
              return !TD(ek) || ik ? null : kf(kk)
            }(fk, Pk, wk.isPlayerCrouching(Sk));
          null !== Kk && Mk && wk.RV(ek, ik, Dk, Kk)
        },
        onPlayerAttemptAltAction: (kk, ek, ik, Dk, fk) => {
          if (function(kk, ek, ik, Dk, fk) {
              "Workbench" === Dk.split("|")[0] && kk.getClientOption(ik, "canCraft") && (Pp.open("Workbench", fk.get(), mp(kk)), ek.send("baf2station Workbench"))
            }(wk, lk, Sk, fk, Yk), wp(wk, Sk, fk)) return "preventAction";
          jk.onAltAction(wk, Sk, fk)
        },
        onReceivedMessageFromServer: (kk, ek) => {
          if ("baf2MachineStatus" === kk) {
            var ik, Dk, fk, mk, Mk, Kk, xk, Uk, pk, Ck, jk, sk, dk, Fk, qk, Qk;
            const kk = ek,
              Sk = kk.baf2MachineTaught;
            bk.set(kk.baf2MachinePos, {
              status: kk.baf2MachineStatus,
              power: null !== (ik = kk.baf2MachinePower) && void 0 !== ik ? ik : null,
              opLeftMs: null !== (Dk = kk.baf2MachineOpLeftMs) && void 0 !== Dk ? Dk : null,
              dug: kk.baf2MachineYield ? {
                item: kk.baf2MachineYield,
                name: yk([kk.baf2MachineYield])[kk.baf2MachineYield]
              } : null,
              powerCap: null !== (fk = kk.baf2MachinePowerCap) && void 0 !== fk ? fk : null,
              powerRates: null !== (mk = kk.baf2MachinePowerRates) && void 0 !== mk ? mk : null,
              coupled: !0 === kk.baf2MachineCoupled,
              couplerLevel: null !== (Mk = kk.baf2MachineCoupler) && void 0 !== Mk ? Mk : 1,
              taught: Sk,
              taughtName: Sk ? yk([Sk])[Sk] : null,
              tier: null !== (Kk = kk.baf2MachineTier) && void 0 !== Kk ? Kk : null,
              input: null !== (xk = kk.baf2MachineInput) && void 0 !== xk ? xk : null,
              inertCoupler: null !== (Uk = kk.baf2MachineInertCoupler) && void 0 !== Uk ? Uk : null,
              inputShort: null !== (pk = kk.baf2MachineInputShort) && void 0 !== pk ? pk : null,
              field: null !== (Ck = kk.baf2MachineField) && void 0 !== Ck ? Ck : null,
              noSeeds: !0 === kk.baf2MachineNoSeeds,
              fuelFed: !0 === kk.baf2MachineFuelFed,
              fuelFeeds: !0 === kk.baf2MachineFuelFeeds,
              coreFull: !0 === kk.baf2MachineCoreFull,
              waterUnpowered: !0 === kk.baf2MachineWaterUnpowered,
              powerShort: !0 === kk.baf2MachinePowerShort,
              powerWait: !0 === kk.baf2MachinePowerWait,
              reactorPowered: !0 === kk.baf2MachineReactorPowered,
              fuelLeftMs: null !== (jk = kk.baf2MachineFuelLeftMs) && void 0 !== jk ? jk : null,
              burning: null !== (sk = kk.baf2MachineBurning) && void 0 !== sk ? sk : null,
              fuelKeep: null !== (dk = kk.baf2MachineFuelKeep) && void 0 !== dk ? dk : null,
              water: null !== (Fk = kk.baf2MachineWater) && void 0 !== Fk ? Fk : null,
              farm: null !== (qk = kk.baf2MachineFarm) && void 0 !== qk ? qk : null,
              cryo: null !== (Qk = kk.baf2MachineCryo) && void 0 !== Qk ? Qk : null
            })
          } else if ("baf2StationOpen" === kk) {
            const kk = ek.baf2Station;
            ne.consumeServerOpen(kk, performance.now()) || Mp(wk, Sk, kk, Yk)
          } else if ("baf2Power" === kk) {
            const kk = ek;
            uk.set(kk), kk.baf2PowerOpen && (Le({
              kind: "power"
            }), (0, Cf.r)())
          } else if (kk === Jk.q) {
            const kk = ek;
            zk.set(kk), kk.baf2WaterOpen && (Le({
              kind: "water"
            }), (0, Cf.r)())
          } else if ("baf2RxPlans" === kk) {
            var vk, hk, ak;
            const kk = ek;
            Ek.Gy(kk);
            const ik = new Set(kk.baf2RxPlanList.map((kk => {
              let [ek, ik, Dk] = kk;
              return `${ek},${ik},${Dk}`
            })));
            Zk.retain(ik);
            const Dk = null === (vk = rk.get()) || void 0 === vk ? void 0 : vk.kind,
              fk = "reactor" === Dk ? null === (hk = Wk.get()) || void 0 === hk ? void 0 : hk.status.baf2RxAt : "battery" === Dk ? null === (ak = tk.get()) || void 0 === ak ? void 0 : ak.status.baf2BatAt : void 0;
            fk && Ae.has(fk.join(",")) && !ik.has(fk.join(",")) && Ce(), Ae = ik
          } else if ("baf2RxStatus" === kk) {
            const kk = ek;
            Wk.set(kk), kk.baf2RxOpen && (Le({
              kind: "reactor"
            }), (0, Cf.r)())
          } else if ("baf2BatStatus" === kk) {
            const kk = ek;
            tk.set(kk), kk.baf2BatOpen && (Le({
              kind: "battery"
            }), (0, Cf.r)())
          } else if ("baf2RxAlarm" === kk) Zk.Gy(ek);
          else if ("baf2Bomb" === kk) Gk.Gy(ek, wk.getPositionView(Sk));
          else if ("baf2Fallout" === kk) Rk.Gy(ek);
          else if ("baf2ColBeams" === kk) ke.onBeams(ek);
          else if ("baf2ColStatus" === kk) {
            const kk = ek;
            var Bk, ck;
            if (ke.onStatus(kk), kk.baf2ColOpen) ke.onOpen(null !== (Bk = null === (ck = wk.jek(Sk)) || void 0 === ck ? void 0 : ck.name) && void 0 !== Bk ? Bk : null), Le({
              kind: "collider"
            }), (0, Cf.r)()
          } else if ("baf2Terminal" === kk) {
            const kk = ek;
            var Tk;
            if (Ik.apply(kk)) kk.baf2TermReset && (Le({
              kind: "terminal"
            }), (0, Cf.r)());
            else "terminal" === (null === (Tk = rk.get()) || void 0 === Tk ? void 0 : Tk.kind) && (rk.set(null), (0, Cf.d)())
          } else if ("baf2Core" === kk) {
            var Ok;
            const kk = ek;
            if (Pk(!0 === kk.baf2CoreNuclear), function(kk, ek) {
                return "core" === (null === kk || void 0 === kk ? void 0 : kk.kind) && ek.baf2CoreTier > kk.core.message.baf2CoreTier
              }(rk.get(), kk)) return void(0, Cf.d)();
            if (kk.baf2CoreRefresh && "core" !== (null === (Ok = rk.get()) || void 0 === Ok ? void 0 : Ok.kind)) return;
            Le({
              kind: "core",
              core: Cp(kk, yk)
            }), kk.baf2CoreRefresh || (0, Cf.r)()
          } else if ("baf2WrenchUndo" === kk) {
            const {
              baf2WrenchPos: kk,
              baf2WrenchBlock: ik
            } = ek;
            wk.RV(kk[0], kk[1], kk[2], ik)
          } else if ("baf2Toast" === kk) {
            const kk = ek;
            Xk.heard(performance.now(), kk.baf2ToastMs), Lk.show(kk)
          } else if ("baf2Area" === kk) Ak.arrive(ek, null !== rk.get());
          else if ("baf2Quest" === kk) {
            const kk = ek;
            Pk(!0 === kk.baf2QuestNuclear), Yk.set(kk, function(kk, ek) {
              var ik, Dk, fk, Sk, bk;
              const rk = [];
              for (const [, , Mk, , , , , , Kk, xk] of kk.baf2QuestSteps) null !== Mk && rk.push(Mk), rk.push(...null !== Kk && void 0 !== Kk ? Kk : [], ...null !== xk && void 0 !== xk ? xk : []);
              kk.baf2QuestReward && rk.push(kk.baf2QuestReward);
              const Pk = null === (ik = kk.baf2QuestSide) || void 0 === ik ? void 0 : ik[2][2];
              Pk && rk.push(Pk), rk.push(...null !== (Dk = null === (fk = kk.baf2QuestSide) || void 0 === fk ? void 0 : fk[2][8]) && void 0 !== Dk ? Dk : [], ...null !== (Sk = null === (bk = kk.baf2QuestSide) || void 0 === bk ? void 0 : bk[2][9]) && void 0 !== Sk ? Sk : []);
              for (const [Mk] of null !== (mk = kk.baf2QuestAlso) && void 0 !== mk ? mk : []) {
                var mk;
                rk.push(Mk)
              }
              return ek(rk)
            }(kk, yk)), np(kk.baf2QuestTier)
          } else if ("baf2Route" === kk) ! function(kk, ek) {
            let {
              baf2RouteCells: ik,
              baf2RouteInto: Dk
            } = ek;
            0 !== ik.length && Dk ? kk.setRouteChevrons({
              cells: ik.map(((kk, ek) => {
                const [fk, , Sk] = function(kk, ek, ik) {
                  const Dk = ik + 1 < kk.length ? kk[ik + 1] : ek;
                  return [Dk[0] - kk[ik][0], 0, Dk[2] - kk[ik][2]]
                }(ik, Dk, ek);
                return {
                  pos: kk,
                  way: [fk, Sk]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : kk.setRouteChevrons(null)
          }(wk, ek);
          else if ("baf2QuestBook" === kk) Yk.setBook(ek);
          else if ("baf2Stalls" === kk) nk.set(ek.baf2StallCells);
          else if (kk === wi.j) Hk.onMoves(ek);
          else if (kk === wi.e) Hk.onLines(ek);
          else if ("baf2Labels" === kk) Vk.Gy(ek);
          else if ("baf2DropMap" === kk) Le({
            kind: "dropMap",
            dropMap: ek
          }), (0, Cf.r)();
          else if ("baf2Islands" === kk) {
            var Nk, ee;
            const kk = ek;
            if (lk.syncIslandEdits(kk.baf2IslandsAnswered), !kk.baf2IslandsOpen && "islands" !== (null === (Nk = rk.get()) || void 0 === Nk ? void 0 : Nk.kind)) return;
            if (kk.baf2IslandsOpen) {
              var ie, De;
              const ek = Af.b.get("openEverythingMenuName"),
                ik = lk.sent() >= we,
                Dk = "other" !== (Ue = {
                  askedAtMs: He,
                  askSent: ik,
                  reaskedAtMs: le,
                  nowMs: Date.now(),
                  panel: null !== (ie = null === (De = rk.get()) || void 0 === De ? void 0 : De.kind) && void 0 !== ie ? ie : null,
                  inGameMenu: Af.b.get("openInGameMenuName"),
                  everythingMenu: null === ek ? null : ek === xi.r.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== kk.baf2IslandsFocusInvite
                }).everythingMenu && (!!Ue.focusInvite || "islands" === Ue.panel && "clientGame" === Ue.inGameMenu || !(Ue.nowMs - Ue.reaskedAtMs < hm) && (Ue.askSent && Ue.nowMs - Ue.askedAtMs < hm ? "core" === Ue.panel && "clientGame" === Ue.inGameMenu && null === Ue.everythingMenu : "shop" === Ue.everythingMenu || null === Ue.inGameMenu));
              if (ik && (He = -1 / 0), le = -1 / 0, !Dk) return void ye()
            }
            const ik = (Se = kk.baf2IslandsOpen, be = "islands" === (null === (ee = rk.get()) || void 0 === ee ? void 0 : ee.kind), Ke = pe, xe = Date.now(), Se && !be && xe - Ke < hm);
            Le({
              kind: "islands",
              islands: kk,
              arrivedAtMs: Date.now(),
              backToCore: am(rk.get())
            }), ik && (pe = -1 / 0, le = Date.now(), lk.send(gk)), kk.baf2IslandsOpen && ("clientGame" !== Af.b.get("openInGameMenuName") && (0, jf.h)(), (0, Cf.r)())
          } else if ("baf2CoopTransfer" === kk) {
            var fe;
            const kk = ek;
            kk.baf2TransferOn ? (Le({
              kind: "transfer",
              transfer: kk,
              arrivedAtMs: Date.now()
            }), (0, Cf.r)()) : "transfer" === (null === (fe = rk.get()) || void 0 === fe ? void 0 : fe.kind) && (0, Cf.d)()
          } else "baf2IslandLeft" === kk ? (Ak.dropHeld(), null !== rk.get() && Ce(), "inventory" === Af.b.get("openInGameMenuName") && (0, jf.h)()) : "baf2Arc" === kk ? re.Gy(wk, ek) : "baf2Blade" === kk ? Pe.onBlade(wk, ek) : "baf2JetFlame" === kk ? me.Gy(wk, ek) : "baf2GearPower" === kk && Me.Gy(ek);
          var Se, be, Ke, xe, Ue
        }
      };
      return se
    }
  },
  38090: (kk, ek, ik) => {
    function Dk(kk, ek, ik) {
      const Dk = new Set,
        fk = new ResizeObserver(ik),
        Sk = () => {
          const ek = new Set(document.querySelectorAll(kk));
          let Sk = !1;
          for (const kk of Dk) ek.has(kk) || (fk.unobserve(kk), Dk.delete(kk), Sk = !0);
          for (const kk of ek) Dk.has(kk) || (fk.observe(kk), bk.observe(kk, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Dk.add(kk));
          Sk && ik()
        },
        bk = new MutationObserver((ek => {
          ek.some((kk => "attributes" === kk.type)) && ik(), ek.some((ek => function(kk, ek, ik) {
            if ("childList" !== kk.type) return !1;
            for (const Dk of kk.addedNodes)
              if (Dk instanceof Element && (Dk.matches(ek) || Dk.querySelector(ek))) return !0;
            for (const Dk of kk.removedNodes)
              if (Dk instanceof Element)
                for (const kk of ik)
                  if (Dk.contains(kk)) return !0;
            return !1
          }(ek, kk, Dk))) && Sk()
        }));
      bk.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const rk of ek) fk.observe(rk);
      return window.addEventListener("resize", ik), Sk(), ik(), () => {
        fk.disconnect(), bk.disconnect(), window.removeEventListener("resize", ik)
      }
    }
    ik.d(ek, {
      d: () => Dk
    })
  },
  38081: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      g: () => Sk
    });
    const Dk = new WeakMap;

    function fk(kk) {
      let ek = Dk.get(kk);
      return ek || (ek = {
        hidden: kk.hidden,
        x: NaN,
        y: NaN
      }, Dk.set(kk, ek)), ek
    }

    function Sk(kk, ek) {
      const ik = fk(kk);
      ik.hidden !== ek && (ik.hidden = ek, kk.hidden = ek)
    }

    function bk(kk, ek, ik) {
      const Dk = fk(kk);
      Dk.x === ek && Dk.y === ik || (Dk.x = ek, Dk.y = ik, kk.style.translate = `${ek}vw ${ik}vh`)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);