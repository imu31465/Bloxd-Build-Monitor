export const id = 237;
export const ids = [237];
export const modules = {
  38639: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd
    });
    var pd = kd(38642);
    const Nd = [0, 0, 0];
    class Wd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nd;
        this.pool = dd, this.origin = Jd, this.count = 0, this.free = []
      }
      take() {
        var dd;
        const Jd = null !== (dd = this.free.pop()) && void 0 !== dd ? dd : this.count++;
        return Jd >= this.pool.oo && this.pool.grow(Math.max(2 * this.pool.oo, Jd + 1)), this.hide(Jd), Jd
      }
      release(dd) {
        this.hide(dd), this.free.push(dd)
      }
      write(dd, Jd, kd, Nd) {
        const {
          records: Wd
        } = this.pool, {
          origin: Pd
        } = this, Zd = dd * pd.c;
        Wd[Zd] = Jd - Pd[0], Wd[Zd + 1] = kd - Pd[1], Wd[Zd + 2] = Nd - Pd[2], Wd[Zd + pd.d] = 0, this.pool.markDirty(dd)
      }
      hide(dd) {
        this.pool.records[dd * pd.c + pd.d] = 1, this.pool.markDirty(dd)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Pd {
      constructor(dd, Jd, kd) {
        this.api = dd, this.model = Jd, this.initialCapacity = kd, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(dd) {
        let Jd = this.kinds.get(dd);
        if (void 0 === Jd) {
          const kd = this.api.createInstancePool({
            ...this.model,
            item: dd
          }, this.initialCapacity);
          null === kd || void 0 === kd || kd.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Jd = kd && new Wd(kd, this.origin), this.kinds.set(dd, Jd)
        }
        return Jd
      }
      follow(dd) {
        const {
          origin: Jd
        } = this;
        if (Math.abs(dd[0] - Jd[0]) <= 512 && Math.abs(dd[1] - Jd[1]) <= 512 && Math.abs(dd[2] - Jd[2]) <= 512) return !1;
        Jd[0] = Math.floor(dd[0]), Jd[1] = Math.floor(dd[1]), Jd[2] = Math.floor(dd[2]);
        for (const kd of this.kinds.values()) null === kd || void 0 === kd || kd.pool.setOrigin(Jd[0], Jd[1], Jd[2]);
        return !0
      }
      commit() {
        for (const dd of this.kinds.values()) null === dd || void 0 === dd || dd.commit()
      }
      dispose() {
        for (const dd of this.kinds.values()) null === dd || void 0 === dd || dd.dispose();
        this.kinds.clear()
      }
    }
  },
  38660: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      f: () => Zd,
      h: () => gd
    });
    const pd = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Nd = [0, 1, 2, 0, 2, 3],
      Wd = [4, 5];

    function Pd(dd, Jd, kd, pd, Nd) {
      for (let Pd = 0; Pd < 6; Pd++) Wd.includes(Pd) === Nd && Cd(dd, Jd, kd, pd, Pd)
    }

    function Zd(dd, Jd, kd, pd) {
      for (let Nd = 0; Nd < 6; Nd++) Cd(dd, Jd, kd, pd, Nd)
    }

    function gd(dd, Jd, kd, Wd, Pd) {
      for (let Zd = 0; Zd < 6; Zd++)
        for (const gd of [0, 1]) {
          const [Cd, Kd, od] = [gd + 2, gd + 1, (gd + 3) % 4], ld = dd.length / 3;
          for (const [Jd, Nd] of [
              [gd, Kd],
              [Cd, Kd],
              [Cd, od],
              [gd, od]
            ])
            for (let gd = 0; gd < 3; gd++) {
              const Cd = pd[3 * (4 * Zd + Jd) + gd],
                Kd = pd[3 * (4 * Zd + Nd) + gd];
              dd.push((Cd + (Kd - Cd) * Pd) * Wd / 2 + kd[gd])
            }
          for (const dd of Nd) Jd.push(ld + dd)
        }
    }

    function Cd(dd, Jd, kd, Wd, Pd) {
      let [Zd, gd, Cd] = kd, [Kd, od, ld] = Wd;
      const Qd = dd.length / 3;
      for (let Nd = 4 * Pd; Nd < 4 * Pd + 4; Nd++) dd.push(pd[3 * Nd] * Kd / 2 + Zd, pd[3 * Nd + 1] * od / 2 + gd, pd[3 * Nd + 2] * ld / 2 + Cd);
      for (const pd of Nd) Jd.push(Qd + pd)
    }
  },
  38630: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => GI
    });
    var pd = kd(56);
    const Nd = [{
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
      Wd = 10;
    let Pd = !0;

    function Zd() {
      return Pd
    }

    function gd(dd) {
      Pd = dd
    }
    const Cd = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Kd() {
      return Pd ? Nd.length : Wd
    }

    function od(dd) {
      var Jd, kd;
      return null !== (Jd = null === (kd = Nd[dd - 1]) || void 0 === kd ? void 0 : kd.reactorTier) && void 0 !== Jd ? Jd : 0
    }

    function ld(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : od(dd) > 0;
      return kd && !Pd ? "hidden" : dd <= Jd ? "open" : kd ? Jd < 5 ? "hidden" : Jd < Wd ? "teaser" : "locked" : "locked"
    }

    function Qd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: pd,
        n: Nd
      } = ed(dd);
      return {
        key: Jd[pd],
        params: {
          [pd]: kd ? String(Nd) : Nd
        }
      }
    }
    const Ld = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Od(dd, Jd) {
      return od(dd) > 0 && Jd < Wd
    }

    function ed(dd) {
      const Jd = od(dd);
      if (Jd > 0) return {
        kind: "atomic",
        n: Jd,
        short: `A${Jd}`
      };
      const kd = function(dd) {
        return dd >= 6 && dd <= 10 ? dd - 6 + 1 : 0
      }(dd);
      return kd > 0 ? {
        kind: "stage",
        n: kd,
        short: `S${kd}`
      } : {
        kind: "tier",
        n: dd,
        short: String(dd)
      }
    }

    function Rd(dd) {
      return Nd[Math.max(1, Math.min(dd, Nd.length)) - 1]
    }

    function Id(dd, Jd) {
      return dd < Jd ? function(dd) {
        var Jd;
        return null !== (Jd = Nd[dd]) && void 0 !== Jd ? Jd : null
      }(dd) : null
    }
    const Gd = "baf2coresubmit",
      vd = "baf2corebankpause",
      xd = "baf2coredeposit",
      qd = "baf2corechargepause";

    function Bd(dd) {
      var Jd;
      return null !== (Jd = dd.baf2CoreOpen) && void 0 !== Jd ? Jd : Wd
    }
    const sd = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function ad(dd) {
      return sd.includes(dd)
    }
    const Md = (dd, Jd) => Jd.map((Jd => [Jd, [dd]])),
      Fd = Object.fromEntries([...Md("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Md("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Md("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Md("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Md("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Md("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Md("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Md("Parts Bench", ["Focus Lens"]), ...Md("Machine Bench", ["Laser", "Collider"]), ...Md("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Md("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Md("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Md("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Md("Tool Bench", ["Mob Cage"]), ...Md("Tool Bench", ["Pocket Terminal"]), ...Md("Tool Bench", ["Comet Beacon"]), ...Md("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Yd(dd) {
      var Jd;
      return null !== (Jd = Fd[dd]) && void 0 !== Jd ? Jd : ["Workbench"]
    }

    function md(dd) {
      return Yd(dd)[0]
    }
    Nd.slice(1).map(((dd, Jd) => `Core Tier ${Jd+2}`));
    var bd = kd(9331);
    const Sd = ["on", "hud", "off"];

    function jd(dd) {
      return "on" === dd
    }
    var Xd = kd(313);
    const fd = "Mob Farm",
      nd = {
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
      Ud = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      yd = {
        1: 20,
        2: 60,
        3: 120
      },
      Dd = "baf2farmvoid",
      Td = "Caged ",
      Ed = " Spawner Block";

    function cd(dd) {
      return `lifeform:${(0,Xd.Be)(dd)}`
    }

    function hd(dd) {
      if (!dd) return null;
      if (dd.startsWith(Td)) {
        const Jd = dd.slice(6);
        return Ud.includes(Jd) ? Jd : null
      }
      if (dd.endsWith(Ed)) {
        const Jd = dd.slice(0, -14);
        return void 0 !== nd[Jd] ? Jd : null
      }
      return null
    }

    function rd(dd) {
      return !0 === dd.mobFarm
    }

    function ud(dd, Jd) {
      return yd[nd[Jd]] * dd.opMs / 1e3
    }
    const td = new Map;
    const Vd = "baf2islands",
      zd = "baf2islandnew";

    function Hd(dd) {
      const Jd = Nd.findIndex((Jd => Jd.unlocks.includes(dd)));
      return Jd < 0 ? 1 : Jd + 1
    }

    function wd(dd) {
      return Math.floor(dd).toLocaleString("en-US")
    }
    var Ad = kd(38571);
    const dJ = "baf2terminaltake",
      JJ = "baf2terminalput",
      kJ = ["one", "stack", "fill"];

    function pJ(dd, Jd, kd) {
      return `${dJ} ${dd} ${Jd} ${kd}`
    }

    function NJ(dd, Jd, kd) {
      return `${JJ} ${dd} ${Jd} ${kd}`
    }

    function WJ(dd) {
      return `${JJ} ${dd}`
    }
    const PJ = [
      [`${dJ} `, "take"],
      [`${JJ} `, "put"]
    ];

    function ZJ(dd) {
      const Jd = PJ.find((Jd => {
        let [kd] = Jd;
        return dd.startsWith(kd)
      }));
      if (!Jd) return null;
      const [kd, pd] = Jd, [Nd, Wd, ...Pd] = dd.slice(kd.length).trim().split(" "), Zd = Number(Nd);
      if (!Number.isSafeInteger(Zd) || Zd <= 0) return null;
      if ("put" === pd && void 0 === Wd) return {
        kind: "putAll",
        seq: Zd
      };
      const gd = function(dd) {
        if (kJ.includes(dd)) return dd;
        const Jd = Number(dd);
        return /^\d+$/.test(dd) && Number.isSafeInteger(Jd) && Jd > 0 ? Jd : null
      }(null !== Wd && void 0 !== Wd ? Wd : "");
      return null === gd || 0 === Pd.length ? null : {
        kind: pd,
        seq: Zd,
        mode: gd,
        item: Pd.join(" ")
      }
    }

    function gJ(dd, Jd) {
      const kd = "number" === typeof dd ? dd : "one" === dd ? 1 : "stack" === dd ? 99 : Jd;
      return Math.min(Jd, kd)
    }

    function CJ(dd, Jd) {
      const kd = dd => "number" === typeof dd ? dd : "one" === dd ? 1 : 99;
      return "fill" === dd || "fill" === Jd ? "fill" : kd(dd) + kd(Jd)
    }

    function KJ(dd, Jd) {
      const kd = ZJ(dd),
        pd = ZJ(Jd),
        Nd = kd && pd ? function(dd, Jd) {
          return "take" === dd.kind || "take" === Jd.kind ? "take" === dd.kind && "take" === Jd.kind && dd.item === Jd.item ? {
            ...Jd,
            mode: CJ(dd.mode, Jd.mode)
          } : null : "putAll" === dd.kind || "putAll" === Jd.kind ? {
            kind: "putAll",
            seq: Jd.seq
          } : dd.item === Jd.item ? {
            ...Jd,
            mode: CJ(dd.mode, Jd.mode)
          } : null
        }(kd, pd) : null;
      return Nd ? "putAll" === (Wd = Nd).kind ? WJ(Wd.seq) : "put" === Wd.kind ? NJ(Wd.seq, Wd.mode, Wd.item) : pJ(Wd.seq, Wd.mode, Wd.item) : null;
      var Wd
    }
    const oJ = "baf2rx";

    function lJ(dd, Jd) {
      for (var kd = arguments.length, pd = new Array(kd > 2 ? kd - 2 : 0), Nd = 2; Nd < kd; Nd++) pd[Nd - 2] = arguments[Nd];
      return [oJ, dd[0], dd[1], dd[2], Jd, ...pd].join(" ")
    }
    const QJ = 2,
      LJ = 4,
      OJ = 8,
      eJ = 16,
      RJ = 32,
      IJ = 64,
      GJ = 128,
      vJ = 256,
      xJ = 512,
      qJ = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      BJ = [{
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
    const sJ = "Biomass",
      iJ = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function aJ(dd) {
      return {
        input: sJ,
        inputAmount: 1,
        output: dd,
        outputAmount: 1
      }
    }
    const MJ = "baf2synth",
      FJ = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      YJ = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      mJ = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      bJ = function(dd, Jd) {
        return {
          input: dd,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: Jd,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      SJ = function(dd, Jd) {
        return {
          ...bJ(dd, Jd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      jJ = YJ.map((dd => SJ(dd, "Biomass", 2))),
      XJ = {
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
          recipes: [bJ("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), bJ("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), bJ("Raw Gold", "Gold Grit", 2), bJ("Messy Stone", "Sand"), bJ("Gravel", "Sand"), bJ("Raw Voltite", "Voltite Dust", 2), bJ("Moonstone", "Moonstone Dust", 4), bJ("Wheat Seeds", "Fertiliser"), bJ("Raw Uranium", "Uranium Grit", 2), SJ("Mossy Messy Stone", "Sand"), ...jJ],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [bJ("Iron Grit", "Iron Bar"), bJ("Copper Grit", "Copper Bar"), bJ("Gold Grit", "Gold Bar"), bJ("Raw Iron", "Iron Bar"), bJ("Raw Copper", "Copper Bar"), bJ("Raw Gold", "Gold Bar"), bJ("Sand", "Glass"), bJ("Messy Stone", "Stone"), ...Xd.ad.map((dd => bJ(dd, "Charcoal", 1, 4))), bJ("Wheat", "Bread", 1, 2), ...YJ.map(((dd, Jd) => SJ(dd, mJ[Jd])))],
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
          recipes: [bJ("Iron Bar", "Iron Plate"), bJ("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [bJ("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [bJ("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [bJ("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), bJ("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), bJ("Raw Gold", "Gold Grit", 3), bJ("Raw Voltite", "Voltite Dust", 3), bJ("Messy Stone", "Sand", 2), bJ("Gravel", "Sand", 2), bJ("Moonstone", "Moonstone Dust", 6), bJ("Raw Uranium", "Uranium Grit", 3), SJ("Mossy Messy Stone", "Sand", 2), ...jJ],
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
          table: qJ
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [bJ("Coal", "Diamond", 1, 24), bJ("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Ad.j
      },
      fJ = {
        Crusher: [bJ("Spent Pellet", "Glow Dust"), bJ("Wheat Seeds", "Biomass"), bJ("Wheat", "Biomass"), bJ("Dead Bush", "Biomass"), bJ("Dusk Moss", "Biomass"), bJ("Rotten Flesh", "Biomass"), bJ("Bone", "Biomass", 2)],
        "Shatter Mill": [bJ("Spent Pellet", "Glow Dust"), bJ("Wheat Seeds", "Biomass"), bJ("Wheat", "Biomass"), bJ("Dead Bush", "Biomass"), bJ("Dusk Moss", "Biomass"), bJ("Rotten Flesh", "Biomass"), bJ("Bone", "Biomass", 2), ...Xd.ad.map((dd => bJ(dd, "Biomass")))],
        Smelter: [bJ("Biomass", "Fertiliser", 2)],
        Press: [bJ("Coal", "Graphite", 1, 4)]
      },
      nJ = "Power Coupler",
      UJ = "Advanced Coupler",
      yJ = "Nova Coupler",
      DJ = [{
        item: nJ,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: UJ,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: yJ,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const TJ = new Map;

    function EJ(dd) {
      var Jd, kd;
      return null !== (Jd = null !== (kd = dd.fuelSlot) && void 0 !== kd ? kd : dd.couplerSlot) && void 0 !== Jd ? Jd : null
    }

    function cJ(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!dd.couplable) throw new Error(`${dd.kind} takes no Power Coupler`);
      let kd = TJ.get(dd);
      kd || (kd = [], TJ.set(dd, kd));
      let pd = kd[Jd];
      if (!pd) {
        var Nd;
        const {
          divisor: Wd,
          powerPerS: Pd
        } = DJ[Jd - 1], Zd = dd.opMs / Wd, gd = void 0 !== dd.fluidMade || void 0 !== dd.cryoMade ? dd.powerPerOp : Pd * Zd / 1e3;
        pd = {
          ...dd,
          fuelSlot: null,
          couplerSlot: null !== (Nd = EJ(dd)) && void 0 !== Nd ? Nd : void 0,
          opMs: Zd,
          powerPerOp: gd,
          coupled: !0
        }, Jd > 1 && (pd = {
          ...pd,
          couplerLevel: Jd
        }), kd[Jd] = pd
      }
      return pd
    }
    const hJ = new Map;
    const rJ = new Map;

    function uJ(dd, Jd) {
      if (null === Jd || (kd = Jd, !iJ.includes(kd))) return dd;
      var kd;
      let pd = rJ.get(Jd);
      return pd || (pd = {
        ...dd,
        recipes: [aJ(Jd)]
      }, rJ.set(Jd, pd)), pd
    }

    function tJ(dd) {
      return !0 === dd.synth
    }
    const VJ = (dd, Jd, kd, pd) => ({
        output: dd,
        outputAmount: Jd,
        tier: kd,
        inputs: pd.map((dd => {
          let [Jd, kd] = dd;
          return {
            item: Jd,
            amount: kd
          }
        }))
      }),
      zJ = Object.fromEntries([VJ("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), VJ("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), VJ("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), VJ("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), VJ("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), VJ("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), VJ("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), VJ("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), VJ("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), VJ("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), VJ("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), VJ("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), VJ("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), VJ("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), VJ("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), VJ("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), VJ("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), VJ("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), VJ("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), VJ("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), VJ("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), VJ("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), VJ("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), VJ("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), VJ("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), VJ("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), VJ("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), VJ("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), VJ("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), VJ("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((dd => [dd.output, dd]))),
      HJ = new Map;

    function wJ(dd, Jd) {
      let kd = XJ[dd];
      if (Jd.atomic && (kd = function(dd) {
          const Jd = fJ[dd.kind];
          if (!Jd) return dd;
          let kd = hJ.get(dd.kind);
          if (!kd) {
            const pd = new Set(Jd.map((dd => dd.input))),
              Nd = dd.recipes.filter((dd => !pd.has(dd.input)));
            kd = {
              ...dd,
              recipes: [...Nd, ...Jd]
            }, hJ.set(dd.kind, kd)
          }
          return kd
        }(kd)), kd.synth) return uJ(kd, Jd.taught);
      if (Jd.coupled && kd.couplable) return cJ(kd, Jd.level);
      const pd = kd.inputSlots && null !== Jd.taught ? zJ[Jd.taught] : void 0;
      if (!pd) return kd;
      const Nd = `${dd}|${pd.output}`;
      let Wd = HJ.get(Nd);
      return Wd || (Wd = {
        ...kd,
        bench: pd
      }, HJ.set(Nd, Wd)), Wd
    }
    const AJ = ["Diamond", "Moonstone"];

    function dk(dd) {
      return new Set(dd.flatMap((dd => dd.bonus ? [dd.output, dd.bonus.item] : [dd.output])).filter((dd => !AJ.includes(dd))))
    }
    const Jk = Object.values(XJ).flatMap((dd => dd.recipes));
    dk(Jk.filter((dd => !0 !== dd.nuclear))), dk([...Jk.filter((dd => !0 === dd.nuclear)), ...Object.values(fJ).flat()]);

    function kk(dd) {
      return null === dd.inputSlot && void 0 === dd.inputSlots && void 0 === dd.powerMade && void 0 === dd.fluidMade && !dd.treeCutter && void 0 === dd.table
    }

    function pk(dd) {
      return !0 === dd.treeCutter
    }
    const Nk = ["Voltite Cell"];

    function Wk(dd) {
      var Jd, kd;
      return null !== (Jd = null === (kd = dd.fuels) || void 0 === kd ? void 0 : kd.some((dd => Nk.includes(dd)))) && void 0 !== Jd && Jd
    }
    const Pk = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Xd.ad.map((dd => [dd, 8e3]))),
        ...Object.fromEntries(Xd.Gd.map((dd => [dd, 2e3]))),
        "Voltite Cell": 12e4
      },
      Zk = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      gk = {
        "Uranium Deposit": 4e3
      };

    function Ck(dd) {
      var Jd;
      return null !== (Jd = Object.keys(Zk).find((Jd => Zk[Jd] === dd))) && void 0 !== Jd ? Jd : null
    }

    function Kk(dd) {
      return FJ.includes(dd)
    }

    function lk(dd) {
      return !0 !== dd.nuclear || Zd()
    }
    var Qk = kd(300);
    var Lk = kd(9413),
      Ok = kd(9345),
      ek = kd(9417),
      Rk = kd(9409);
    const Ik = "Reactor Controller",
      Gk = "Reactor Port",
      vk = "Battery Cell",
      xk = ["fuel", "water", "waste"],
      qk = {
        fuel: Gk,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Bk = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      sk = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      ik = "Reactor Frame",
      ak = "Reactor Glass",
      Mk = {
        edge: [ik],
        cap: [ak, Gk],
        wall: [ak, Gk],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Ik]
      },
      Fk = {
        edge: [vk],
        cap: [vk],
        wall: [vk],
        inside: [vk],
        ctrl: [vk]
      },
      Yk = ["edge", "cap", "wall", "inside"],
      mk = ["Reactor Slag"];

    function bk(dd) {
      return mk.includes(Sk(dd))
    }

    function Sk(dd) {
      const Jd = dd.indexOf("|");
      return Jd < 0 ? dd : dd.slice(0, Jd)
    }

    function jk(dd) {
      return Sk(dd) === Ik ? "reactor" : null
    }

    function Xk(dd) {
      return Sk(dd) !== Gk ? null : dd.endsWith("|Water") ? "water" : dd.endsWith("|Waste") ? "waste" : "fuel"
    }

    function fk(dd) {
      const Jd = Xk(dd);
      return null === Jd ? null : yk(qk[xk[(xk.indexOf(Jd) + 1) % xk.length]], function(dd) {
        return dd.includes(nk)
      }(dd))
    }
    const nk = "|meta|rot1|Formed",
      Uk = new Set([ik, ak, Gk]);

    function yk(dd, Jd) {
      var kd;
      const pd = Sk(dd);
      if (!Uk.has(pd)) return dd;
      if (pd !== Gk) return Jd ? pd + nk : pd;
      const Nd = null !== (kd = Xk(dd)) && void 0 !== kd ? kd : "fuel";
      return Jd ? "fuel" === Nd ? pd + nk : `${pd}${nk}|${"water"===Nd?"Water":"Waste"}` : qk[Nd]
    }

    function Dk(dd, Jd) {
      const kd = Wp(dd, Jd);
      if ("Air" === kd) return !1;
      const pd = "reactor" === dd ? Mk : Fk;
      return Yk.some((dd => pd[dd].includes(kd))) || "reactor" === dd && mk.includes(kd)
    }

    function Tk(dd) {
      return sk[dd]
    }

    function Ek(dd) {
      var Jd;
      return null !== (Jd = Bk[dd]) && void 0 !== Jd ? Jd : Bk[1]
    }

    function ck(dd) {
      const [Jd, , kd] = Ek(dd);
      return [kd, 0, -Jd]
    }

    function hk(dd, Jd, kd, pd, Nd, Wd) {
      return {
        ctrl: [dd[0], dd[1], dd[2]],
        rot: Bk[Jd] ? Jd : 1,
        w: kd,
        h: pd,
        d: Nd,
        cu: Wd[0],
        cv: Wd[1]
      }
    }

    function rk(dd, Jd) {
      return "reactor" === dd ? [Math.floor((Jd - 1) / 2), 0] : [0, 0]
    }

    function uk(dd, Jd, kd, pd, Nd) {
      let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd.rot;
      if (kd === dd.w && pd === dd.h && Nd === dd.d && Wd === dd.rot) return dd;
      const [Pd] = rk(Jd, dd.w);
      if (dd.cu === Pd && dd.cv <= 1) return hk(dd.ctrl, Wd, kd, pd, Nd, rk(Jd, kd));
      const Zd = (dd, Jd) => Math.max(1, Math.min(Jd, dd));
      return hk(dd.ctrl, Wd, kd, pd, Nd, [Zd(dd.cu, kd - 2), 0 === dd.cv ? 0 : Zd(dd.cv, pd - 2)])
    }
    const tk = 11,
      Vk = 2 * tk + 1;
    new Uint8Array(Vk * Vk * Vk);

    function zk(dd) {
      return dd.w * dd.h * dd.d
    }

    function Hk(dd) {
      const Jd = ck(dd.rot);
      return [dd.ctrl[0] - Jd[0] * dd.cu, dd.ctrl[1] - dd.cv, dd.ctrl[2] - Jd[2] * dd.cu]
    }

    function wk(dd) {
      return dd.cv * dd.d * dd.w + dd.cu
    }

    function Ak(dd, Jd) {
      const kd = Jd % dd.w,
        pd = Math.floor(Jd / dd.w) % dd.d;
      return [kd, Math.floor(Jd / (dd.w * dd.d)), pd]
    }

    function dp(dd, Jd) {
      const [kd, pd, Nd] = Ak(dd, Jd), Wd = Hk(dd), Pd = Ek(dd.rot), Zd = ck(dd.rot);
      return [Wd[0] + Zd[0] * kd - Pd[0] * Nd, Wd[1] + pd, Wd[2] + Zd[2] * kd - Pd[2] * Nd]
    }

    function Jp(dd, Jd) {
      const kd = Hk(dd),
        pd = Ek(dd.rot),
        Nd = ck(dd.rot),
        Wd = Jd[0] - kd[0],
        Pd = Jd[2] - kd[2],
        Zd = Wd * Nd[0] + Pd * Nd[2],
        gd = -(Wd * pd[0] + Pd * pd[2]),
        Cd = Jd[1] - kd[1];
      return Zd < 0 || Zd >= dd.w || Cd < 0 || Cd >= dd.h || gd < 0 || gd >= dd.d ? -1 : (Cd * dd.d + gd) * dd.w + Zd
    }

    function kp(dd, Jd) {
      if (Jd === wk(dd)) return "ctrl";
      const [kd, pd, Nd] = Ak(dd, Jd), Wd = 0 === pd || pd === dd.h - 1, Pd = Number(0 === kd || kd === dd.w - 1) + Number(Wd) + Number(0 === Nd || Nd === dd.d - 1);
      return Pd >= 2 ? "edge" : 1 === Pd ? Wd ? "cap" : "wall" : "inside"
    }

    function pp(dd, Jd) {
      const [kd, pd, Nd] = Ak(dd, Jd);
      return 0 === kd || kd === dd.w - 1 || 0 === pd || pd === dd.h - 1 || 0 === Nd || Nd === dd.d - 1 ? -1 : ((pd - 1) * (dd.d - 2) + (Nd - 1)) * (dd.w - 2) + (kd - 1)
    }

    function Np(dd, Jd) {
      const kd = dd.w - 2,
        pd = dd.d - 2,
        Nd = Jd % kd + 1,
        Wd = Math.floor(Jd / kd) % pd + 1;
      return ((Math.floor(Jd / (kd * pd)) + 1) * dd.d + Wd) * dd.w + Nd
    }

    function Wp(dd, Jd) {
      const kd = Sk(Jd);
      return "reactor" === dd && kd === Ik ? ik : kd
    }

    function Pp(dd, Jd, kd) {
      const pd = "ctrl" === Jd ? Sk(kd) : Wp(dd, kd);
      return ("reactor" === dd ? Mk : Fk)[Jd].includes(pd) ? "ok" : "Air" === pd ? "missing" : Dk(dd, kd) ? "wrong" : "blocked"
    }

    function Zp(dd, Jd) {
      return "battery" === dd ? vk : "inside" === Jd ? null : function(dd, Jd) {
        if ("inside" === Jd || "ctrl" === Jd || "battery" === dd) return null;
        return "edge" === Jd ? ik : ak
      }(dd, Jd)
    }
    const gp = {
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
      Cp = "Collider",
      Kp = "Laser",
      op = "Star Alloy",
      lp = "Glow Dust",
      Qp = [Cp, "_Collider Focus"];

    function Lp(dd) {
      return Qp.indexOf(Sk(dd))
    }

    function Op(dd) {
      return Sk(dd) === Kp
    }

    function ep(dd) {
      return [
        [dd[0], dd[1], dd[2]],
        [dd[0], dd[1] + 1, dd[2]]
      ]
    }
    const Rp = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Ip(dd, Jd, kd) {
      const pd = Rp[Jd];
      return [dd[0] + pd[0] * kd, dd[1], dd[2] + pd[2] * kd]
    }

    function Gp(dd, Jd) {
      if (Jd[1] !== dd[1]) return null;
      const kd = Jd[0] - dd[0],
        pd = Jd[2] - dd[2];
      if (0 !== kd === (0 !== pd)) return null;
      const Nd = Math.abs(kd + pd);
      if (Nd > gp.LASER_D) return null;
      return {
        dir: pd < 0 ? 0 : kd > 0 ? 1 : pd > 0 ? 2 : 3,
        gP: Nd
      }
    }

    function vp(dd, Jd, kd) {
      const pd = Jd => Math.abs(dd[0] - Jd[0]) <= 1 && Math.abs(dd[1] - Jd[1]) <= 1;
      return pd(Jd) || pd(kd)
    }

    function xp(dd, Jd) {
      return function(dd, Jd, kd, pd) {
        return [0, 1, 2, 3].map((Nd => {
          for (let Wd = 1; Wd <= gp.LASER_D; Wd++) {
            const Pd = Ip(dd, Nd, Wd);
            if (vp([Pd[0], Pd[2]], Jd, kd) || !pd(Pd)) return !1
          }
          return !0
        }))
      }(ep(dd)[1], Jd.spawnXZ, Jd.coreXZ, (dd => dd[1] >= Lk.u && dd[1] < Lk.u + Lk.v && dd[0] >= Jd.minXZ[0] && dd[0] <= Jd.maxXZ[0] && dd[2] >= Jd.minXZ[1] && dd[2] <= Jd.maxXZ[1]))
    }
    const qp = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Bp(dd) {
      return Math.max(48 + 16 * dd, Rd(dd).machineAllowance)
    }
    const sp = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function ip(dd) {
      const Jd = dd.split("|")[0];
      return sp.includes(Jd) ? "Solar Panel" : Jd === ek.e ? "Fluid Pipe" : Lp(Jd) >= 0 ? "Collider" : (kd = Jd, qp.includes(kd) ? Jd : null);
      var kd
    }
    const ap = "buildAFactory2Game:solarPanelDescription";
    const Mp = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function Fp(dd, Jd) {
      var kd;
      return null !== (kd = Mp.find((kd => {
        var pd;
        return (null !== (pd = dd.level(kd)) && void 0 !== pd ? pd : 0) >= Jd
      }))) && void 0 !== kd ? kd : null
    }
    const Yp = "buildAFactory2Game:";
    let mp = null;
    const bp = {
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
      Sp = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      jp = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      Xp = {
        "Loot Chest": `${Yp}lookRuinChestName`
      };

    function fp(dd) {
      return "object" === typeof dd && null !== dd && "translationKey" in dd && "string" === typeof dd.translationKey ? dd.translationKey : null
    }

    function np(dd, Jd) {
      var kd;
      return null !== (kd = fp(dd.displayName(Jd))) && void 0 !== kd ? kd : `item:${(0,Xd.Be)(Jd)}`
    }

    function Up(dd, Jd) {
      var kd, pd, Nd, Wd;
      let Pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jd;
      if ("Solar Panel" === ip(Jd)) return {
        name: fp(dd.displayName("Solar Panel")),
        detail: ap,
        detailItem: null
      };
      const gd = Jd.endsWith(" Ore"),
        Cd = (mp ??= new Set([...Object.keys((0, Ok.g)()), ...Object.keys((0, ek.v)())].map((dd => dd.split("|")[0]))), mp).has(Jd),
        Kd = gd || Cd ? null : function(dd) {
          var Jd;
          return dd.endsWith(" Log") && !dd.startsWith("Barkless ") ? "lookLog" : dd.endsWith(" Sapling") ? "lookSapling" : dd.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (Jd = bp[dd]) && void 0 !== Jd ? Jd : null
        }(Jd);
      if (!dd.isBlock(Jd) || !gd && !Cd && null === Kd) return null;
      const od = null !== (kd = null !== (pd = Xp[Jd]) && void 0 !== pd ? pd : fp(null !== (Nd = dd.displayName(Pd)) && void 0 !== Nd ? Nd : dd.displayName(Jd))) && void 0 !== kd ? kd : `item:${(0,Xd.Be)(Jd)}`;
      if (null !== Kd) return {
        name: od,
        detail: `${Yp}${Kd}`,
        detailItem: null
      };
      const ld = null !== (Wd = Sp[Jd]) && void 0 !== Wd ? Wd : Zd() ? jp[Jd] : void 0;
      if (Cd && void 0 !== ld) return {
        name: od,
        detail: `${Yp}${ld}`,
        detailItem: null
      };
      const Qd = Zk[Jd];
      if (void 0 !== Qd) return {
        name: od,
        detail: `${Yp}lookDeposit`,
        detailItem: np(dd, Qd)
      };
      const Ld = dd.harvestLevel(Jd);
      if (gd && "rock" === dd.harvestType(Jd) && 0 !== Ld) {
        const Jd = Fp(dd, null !== Ld && void 0 !== Ld ? Ld : 0);
        if (Jd === Mp[0]) return {
          name: od,
          detail: `${Yp}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== Jd) return {
          name: od,
          detail: `${Yp}lookPickaxe`,
          detailItem: np(dd, Jd)
        }
      }
      return {
        name: od,
        detail: fp(dd.description(Jd)),
        detailItem: null
      }
    }

    function yp(dd) {
      return dd < Lk.u - 24
    }
    const Dp = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const Tp = "Wrench",
      Ep = "Nova Wrench";

    function cp(dd) {
      return dd === Tp || dd === Ep
    }
    const hp = [...Lk.J, "Belt Lift", "Belt Drop"];
    const rp = ["Belt Lift", "Belt Drop"],
      tp = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Vp(dd) {
      return dd.split("|")[0]
    }

    function zp(dd) {
      const Jd = /\|rot(\d)/.exec(dd);
      return Jd ? Number(Jd[1]) : 1
    }

    function Hp(dd) {
      return dd % 4 + 1
    }

    function wp(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === Jd && "" === kd ? dd : `${dd}|meta|rot${Jd}${kd}`
    }

    function Ap(dd) {
      return Vp(dd) === Lk.B ? (0, Lk.Q)(dd) ? "gateRight" : "gateLeft" : (0, Lk.X)(dd)
    }

    function dN(dd) {
      const Jd = Vp(dd),
        kd = zp(dd);
      if (Lk.J.includes(Jd)) return (0, Lk.N)(Jd, Hp(kd), null);
      if (Jd === Lk.l) return (0, Lk.Z)(Hp(kd), (0, Lk.U)(dd));
      if (Jd === Lk.D) {
        const pd = tp[(0, Lk.X)(dd)];
        return null === pd ? wp(Jd, Hp(kd)) : wp(Jd, kd, Lk.E[pd])
      }
      return Jd === Lk.B ? (0, Lk.Q)(dd) ? wp(Jd, Hp(kd)) : wp(Jd, kd, Lk.s) : Rk.b.includes(Jd) && !rp.includes(Jd) || Kk(Jd) ? wp(Jd, Hp(kd)) : null
    }

    function JN(dd) {
      return Rk.b.includes(dd) || Kk(dd) || null !== ip(dd)
    }

    function kN(dd) {
      return "Solar Panel" === ip(dd)
    }
    const pN = "buildAFactory2Game:",
      NN = {
        leftFront: `${pN}lookSplitDetail_leftFront`,
        frontRight: `${pN}lookSplitDetail_frontRight`,
        gateRight: `${pN}lookGateDetail_gateRight`
      };

    function WN(dd, Jd) {
      var kd;
      let pd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Nd = Ap(dd),
        Wd = null === Nd ? null : `${pN}${Nd.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Nd}`,
        Pd = null === Nd ? null : null !== (kd = NN[Nd]) && void 0 !== kd ? kd : null;
      if (cp(Jd) && pd) {
        const kd = Vp(dd);
        return Jd === Ep && Zd() && function(dd) {
          return hp.includes(Vp(dd))
        }(dd) ? {
          mode: Wd,
          detail: Pd,
          next: `${pN}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Wd,
          detail: Pd,
          next: JN(kd) && !kN(kd) ? `${pN}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const gd = cp(Jd) ? dN(dd) : null;
      if (null === gd) return {
        mode: Wd,
        detail: Pd,
        next: null,
        nextState: null
      };
      const Cd = Ap(gd);
      return null === Cd || zp(gd) !== zp(dd) ? {
        mode: Wd,
        detail: Pd,
        next: `${pN}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Wd,
        detail: Pd,
        next: `${pN}lookWrenchNext`,
        nextState: `${pN}lookWrenchState_${Cd}`
      }
    }
    const PN = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const ZN = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function gN(dd) {
      return [0, 1, 2, 3].map((Jd => 0 !== (dd & 1 << Jd)))
    }

    function CN(dd) {
      const Jd = [];
      for (let kd = 8; kd + 2 < dd.length; kd += 3) Jd.push([dd[kd], dd[kd + 1], dd[kd + 2]]);
      return {
        focus: [dd[0], dd[1], dd[2]],
        lasers: gN(dd[3]),
        open: gN(dd[4]),
        live: gN(dd[5]),
        on: 1 === dd[6],
        state: ZN[dd[7]],
        blockers: Jd
      }
    }
    const KN = "Arc Caster",
      oN = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      lN = (Object.values(oN), "Jet Chestplate"),
      QN = "Nova Jet Chestplate",
      LN = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      ON = Object.values(LN);

    function eN(dd, Jd, kd) {
      return Math.min(function(dd) {
        return Zd() && od(dd) >= 5 ? 20 : 10
      }(kd), Math.floor(function(dd, Jd) {
        return Math.max(0, dd) + (Zd() ? Math.max(0, Jd) : 0)
      }(dd, Jd) / 5))
    }

    function RN(dd, Jd, kd) {
      const pd = eN(Jd, kd, dd),
        Nd = od(dd),
        Wd = (Nd >= 3 ? 55 : Nd >= 1 ? 50 : dd >= 8 ? 45 : 30) + pd,
        Pd = Math.max(100 + pd, 2 * Wd);
      return {
        arcDamage: Wd,
        arcPierce: dd >= 7 ? 2 : 1,
        arcChain: dd >= 10,
        barrierMax: (Nd >= 4 ? 100 : Nd >= 2 ? 90 : dd >= 9 ? 80 : dd >= 6 ? 60 : 40) + 5 * pd,
        barrierRegenPerS: Nd >= 5 ? 20 : dd >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * pd,
        novaShieldRegenPerS: 32,
        bladeDamage: Pd,
        bladePunch: Math.round(.5 * Pd),
        forgeRank: pd
      }
    }
    const IN = {
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
    var GN = kd(37009),
      vN = kd(36783),
      xN = kd(36779),
      qN = kd(22),
      BN = kd(1670),
      sN = kd(1044),
      iN = kd.n(sN);

    function aN(dd) {
      return !0 === dd.field
    }
    const MN = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function FN(dd) {
      return MN.has(dd) ? `buildAFactory2Game:itemPlural_${(0,Xd.Be)(dd)}` : null
    }
    var YN = kd(1211),
      mN = kd(1059),
      bN = kd(1924),
      SN = kd(1904),
      jN = kd(36999),
      XN = kd(37004),
      fN = kd(29),
      nN = kd(36991);
    const UN = "baf2QuestView",
      yN = "baf2PlayerY",
      DN = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class TN {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = dd, this.view = {
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
      set(dd, Jd) {
        var kd, pd, Nd, Wd, Pd, Zd, gd, Cd;
        const Kd = JSON.stringify(dd.baf2QuestName) === JSON.stringify(this.view.name),
          od = new Set(this.view.rows.filter((dd => dd.done)).map((dd => dd.id))),
          ld = new Set(this.view.rows.filter((dd => dd.justFinished)).map((dd => dd.id))),
          Qd = dd.baf2QuestSide,
          Ld = null !== Qd && !0 === dd.baf2QuestSideFocus;
        let Od = !1,
          ed = 0;
        const Rd = dd.baf2QuestSteps.map((dd => {
            const Jd = zN(dd, DN.has(dd[0]) ? dd[0] : "" + ed++),
              kd = Kd && Jd.done && !od.has(Jd.id);
            return Jd.justFinished = kd || Kd && Jd.done && ld.has(Jd.id), Od ||= kd, Jd
          })),
          Id = VN(Rd);
        Id >= 0 && !Ld && (Rd[Id].current = !0);
        const Gd = !Kd && null !== dd.baf2QuestName,
          vd = JSON.stringify(Qd && [Qd[0], Qd[1]]),
          xd = vd === JSON.stringify(null !== (kd = null === (pd = this.view.side) || void 0 === pd ? void 0 : pd.name) && void 0 !== kd ? kd : null),
          qd = null !== Qd && !this.sidesSeen.has(vd);
        qd && this.sidesSeen.add(vd), this.serverTutorial = null !== (Nd = dd.baf2QuestTutorial) && void 0 !== Nd ? Nd : "on", (null !== (Wd = dd.baf2QuestTutorialSeq) && void 0 !== Wd ? Wd : 0) >= this.pickSeq && this.endPick();
        const Bd = !Kd || !xd || dd.baf2QuestTier !== this.view.tier;
        this.view = {
          name: dd.baf2QuestName,
          rows: Rd,
          reward: dd.baf2QuestReward,
          goal: dd.baf2QuestGoal,
          pulse: this.view.pulse + (Od || Gd ? 1 : 0),
          itemNames: Jd,
          side: Qd && {
            name: [Qd[0], Qd[1]],
            row: {
              ...zN(Qd[2], "side"),
              current: Ld
            },
            goal: null !== (Pd = Qd[3]) && void 0 !== Pd ? Pd : null
          },
          sideCameUpAt: qd ? Date.now() : this.view.sideCameUpAt,
          tier: dd.baf2QuestTier,
          core: dd.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (Zd = dd.baf2QuestAlso) && void 0 !== Zd ? Zd : [],
          depth: null !== (gd = dd.baf2QuestDepth) && void 0 !== gd ? gd : null,
          tutorial: null !== (Cd = this.pickedTutorial) && void 0 !== Cd ? Cd : this.serverTutorial,
          tutorialKnown: !0
        }, this.nO(), Od && this.scheduleClear(), Bd && this.requestBook()
      }
      setTutorial(dd) {
        return this.endPick(), this.pickedTutorial = dd, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.nO()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: dd
        }, this.nO(), this.pickSeq
      }
      onPlayerY(dd) {
        const Jd = Math.floor(dd);
        Jd !== this.playerY && (this.playerY = Jd, this.view.depth && fN.j.nO(yN, Jd))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(dd) {
        this.view = {
          ...this.view,
          chapters: dd.baf2BookChapters
        }, this.nO()
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
            rows: this.view.rows.map((dd => dd.justFinished ? {
              ...dd,
              justFinished: !1
            } : dd))
          }, this.nO()
        }), 2400)
      }
      nO() {
        fN.j.nO(UN, this.view, !0)
      }
    }

    function EN(dd, Jd) {
      return dd.sideCameUpAt > 0 && Jd - dd.sideCameUpAt < 2400
    }

    function cN(dd) {
      return (null === dd.name || hN(dd)) && null === dd.side && null !== dd.chapters
    }

    function hN(dd) {
      var Jd;
      return "quest_forgeOngoing" === (null === (Jd = dd.name) || void 0 === Jd ? void 0 : Jd[0])
    }

    function rN(dd) {
      return dd.filter((dd => !DN.has(dd.key)))
    }

    function uN(dd) {
      return dd.key.startsWith("stepCraft")
    }

    function tN(dd, Jd) {
      const kd = new Set,
        pd = dd.side ? [...dd.rows, dd.side.row] : dd.rows;
      for (const Wd of pd)
        if (!Wd.done) {
          !Wd.item || Jd && !uN(Wd) || kd.add(Wd.item);
          for (const [dd, Jd, pd] of null !== (Nd = Wd.chips) && void 0 !== Nd ? Nd : []) {
            var Nd;
            Jd < pd && kd.add(dd)
          }
        } return kd
    }

    function VN(dd) {
      const Jd = dd.findIndex((dd => !dd.done && !dd.away));
      return Jd >= 0 ? Jd : dd.findIndex((dd => !dd.done))
    }

    function zN(dd, Jd) {
      let [kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od] = dd;
      return {
        id: Jd,
        key: kd,
        params: pd,
        item: Nd,
        amount: Wd,
        total: Pd,
        done: Zd,
        chips: null !== gd && void 0 !== gd ? gd : null,
        current: !1,
        away: !0 === Cd,
        madeFor: null !== Kd && void 0 !== Kd ? Kd : [],
        also: null !== od && void 0 !== od ? od : [],
        justFinished: !1
      }
    }
    const HN = "baf2QuestItems",
      wN = new Set;
    let AN = new Set,
      dW = null;

    function JW(dd) {
      const Jd = jd(dd.tutorial),
        kd = Jd ? tN(dd, !0) : wN;
      "inventory" === qN.d.get("openInGameMenuName") ? (dW = null, (0, nN.v)(kd)) : dW = kd;
      const pd = Jd ? tN(dd, !1) : wN;
      (0, XN.e)(pd, AN) || (AN = pd, fN.j.nO(HN, AN))
    }

    function kW() {
      return (0, jN.b)(HN, (() => AN))
    }
    var pW = kd(9252),
      NW = kd(3130);

    function WW(dd) {
      const Jd = (0, NW.c)(dd),
        kd = void 0 === Jd ? void 0 : (0, pW.displayNameOf)(Jd);
      return "object" === typeof kd && null !== kd && "translationKey" in kd && "string" === typeof kd.translationKey ? kd.translationKey : `item:${(0,Xd.Be)(dd)}`
    }

    function PW(dd, Jd) {
      return dd(WW(Jd))
    }
    const ZW = [{
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

    function gW(dd, Jd) {
      return [`Deposit Seed (${dd})`, {
        item: Zk[`${dd} Deposit`],
        amount: Jd
      }]
    }
    const CW = Object.fromEntries([gW("Coal", 8), gW("Iron", 8), gW("Copper", 8), gW("Gold", 6), gW("Voltite", 4), gW("Uranium", 4)]),
      KW = "Relay Coil",
      oW = new Map;

    function lW(dd) {
      let Jd = oW.get(dd);
      if (!Jd) {
        const kd = Math.max(1, dd);
        Jd = ZW.filter((dd => {
          var Jd;
          return kd >= dd.fromTier && kd <= (null !== (Jd = dd.untilTier) && void 0 !== Jd ? Jd : 1 / 0)
        })).map((dd => dd.later && kd >= dd.later.tier ? {
          ...dd,
          weight: dd.later.weight
        } : dd)), oW.set(dd, Jd)
      }
      return Jd
    }

    function QW(dd) {
      return lW(dd).some((dd => {
        let {
          item: Jd
        } = dd;
        return Jd === KW
      }))
    }

    function LW(dd) {
      return dd.startsWith("Deposit Seed (")
    }

    function OW(dd, Jd) {
      const kd = lW(dd);
      return Jd ? kd.filter((dd => Jd(dd.item))) : kd
    }

    function eW(dd) {
      return dd.reduce(((dd, Jd) => dd + Jd.weight), 0)
    }

    function RW(dd, Jd) {
      const kd = OW(dd, Jd),
        pd = eW(kd);
      return kd.map((dd => ({
        find: dd,
        chance: dd.weight / pd
      })))
    }
    const IW = 6e4,
      GW = new Intl.NumberFormat("en-US");

    function vW(dd, Jd) {
      const kd = dd >= 10 ? Math.round(dd) : Math.round(10 * dd) / 10;
      return 0 === kd ? "0" : `${Jd}${GW.format(kd)}`
    }

    function xW(dd) {
      return dd < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? GW.format(dd) : dd < 1e6 ? `${dd<1e5?Math.floor(dd/100)/10:Math.floor(dd/1e3)}k` : Math.floor(dd / 1e5) / 10 + "M"
    }

    function qW(dd) {
      return dd < 0 ? "\u2212" + -dd : String(dd)
    }

    function BW(dd, Jd) {
      const kd = Math.max(1, Math.round(Jd));
      if (kd < 60) return dd("buildAFactory2Game:durationSeconds", {
        seconds: String(kd)
      });
      const pd = Math.round(kd / 60);
      if (pd < 60) return dd("buildAFactory2Game:durationMinutes", {
        minutes: String(pd)
      });
      const Nd = String(Math.floor(pd / 60));
      return pd % 60 === 0 ? dd("buildAFactory2Game:durationWholeHours", {
        hours: Nd
      }) : dd("buildAFactory2Game:durationHours", {
        hours: Nd,
        minutes: String(pd % 60)
      })
    }
    const sW = "(max-height: 420px), (max-width: 650px)";

    function iW() {
      return "undefined" !== typeof window && window.matchMedia(sW).matches
    }

    function aW(dd) {
      const Jd = window.matchMedia(sW),
        kd = () => {
          dd(Jd.matches)
        };
      return Jd.addEventListener("change", kd), () => {
        Jd.removeEventListener("change", kd)
      }
    }
    var MW = kd(1103);

    function FW(dd, Jd) {
      return null !== dd && dd > Jd + 1
    }

    function YW(dd) {
      const Jd = 100 * dd;
      return String(Jd <= 0 || Jd >= 1 ? Math.round(Jd) : Math.max(.1, Math.round(10 * Jd) / 10))
    }

    function mW(dd) {
      let {
        item: Jd,
        amount: kd
      } = dd;
      return (0, MW.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, MW.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, MW.jsx)(bN.d, {
            itemName: Jd,
            amount: 0
          })
        }), kd > 1 && (0, MW.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", kd]
        })]
      })
    }

    function bW(dd) {
      let {
        label: Jd,
        names: kd
      } = dd;
      const [Nd, Wd] = (0, pd.useState)(!1), Pd = kd.join(" / ");
      return (0, MW.jsxs)(MW.Fragment, {
        children: [(0, MW.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Pd,
          "aria-expanded": Nd,
          onClick: () => {
            Wd(!Nd)
          },
          children: Jd
        }), Nd && (0, MW.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Pd
        })]
      })
    }

    function SW(dd) {
      let {
        tier: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)(), {
        key: pd,
        params: Nd
      } = Qd(Jd, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Wd = kd(`buildAFactory2Game:${pd}`, Nd);
      return (0, MW.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, MW.jsx)(mN.e, {
          name: "lock"
        }), Wd]
      })
    }
    const jW = (0, pd.createContext)(null);

    function XW() {
      const {
        t: dd
      } = (0, YN.B)(), Jd = (0, pd.useContext)(jW);
      return (0, pd.useEffect)((() => null === Jd || void 0 === Jd ? void 0 : Jd()), [Jd]), (0, MW.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: dd("buildAFactory2Game:recipeForQuest"),
        "aria-label": dd("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function fW(dd) {
      let {
        title: Jd,
        count: kd,
        children: Nd,
        startOpen: Wd = !0
      } = dd;
      const {
        t: Pd
      } = (0, YN.B)(), [Zd, gd] = (0, pd.useState)((() => Wd && !iW())), [Cd, Kd] = (0, pd.useState)(0), od = (0, pd.useCallback)((() => (Kd((dd => dd + 1)), () => {
        Kd((dd => dd - 1))
      })), []);
      return (0, MW.jsxs)("div", {
        className: iN()("Baf2Recipes", {
          Open: Zd
        }),
        children: [(0, MW.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            gd(!Zd)
          },
          "aria-expanded": Zd,
          children: [Pd("buildAFactory2Game:recipesToggle", {
            title: Jd,
            count: String(kd)
          }), (0, MW.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: Zd ? "\u25be" : "\u25b8"
          })]
        }), Zd && (0, MW.jsxs)(jW.Provider, {
          value: od,
          children: [(0, MW.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Nd
          }), Cd > 0 && (0, MW.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, MW.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Pd("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const nW = "buildAFactory2Game:",
      UW = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const yW = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      DW = {
        "Uranium Grit": Wd,
        "Raw Uranium": Wd
      };

    function TW(dd) {
      var Jd;
      return null !== (Jd = DW[dd]) && void 0 !== Jd ? Jd : Math.max(Hd(dd), yW[dd] ? Hd(yW[dd]) : 1, function(dd) {
        const Jd = Nd.findIndex((Jd => Jd.cost.some((Jd => Jd.item === dd))));
        return Jd > Wd ? Jd : 1
      }(dd))
    }

    function EW(dd, Jd) {
      return cW(Jd) ? TW(Jd) : function(dd) {
        if (UW.has(dd)) return 1;
        const Jd = Nd.findIndex((Jd => Jd.newDeposits.some((Jd => {
          let {
            block: kd
          } = Jd;
          return kd === dd
        }))));
        return Jd < 0 ? 1 : Jd + 1
      }(dd)
    }

    function cW(dd) {
      return dd in DW || od(TW(dd)) > 0
    }

    function hW(dd, Jd) {
      return wJ(dd, {
        coupled: !1,
        taught: null,
        atomic: Zd() && Jd >= 11
      }).recipes
    }

    function rW(dd, Jd) {
      const kd = ld(dd, Jd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : od(dd) > 0);
      return "open" === kd || "locked" === kd
    }

    function uW(dd, Jd) {
      return dd.map(((dd, kd) => ({
        value: dd,
        idx: kd,
        tier: Jd(dd)
      }))).sort(((dd, Jd) => dd.tier - Jd.tier || dd.idx - Jd.idx)).map((dd => {
        let {
          value: Jd
        } = dd;
        return Jd
      }))
    }

    function tW(dd, Jd, kd) {
      const pd = ld(dd, Jd);
      if ("hidden" === pd || "open" === pd) return null;
      if ("teaser" === pd) return {
        tag: {
          translationKey: `${nW}${kd?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${nW}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Nd = Qd(dd, {
          tier: kd ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Wd = Qd(dd, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${nW}${Nd.key}`,
          params: Nd.params
        },
        reason: {
          translationKey: `${nW}${Wd.key}`,
          params: Wd.params
        }
      }
    }

    function VW(dd) {
      return !LW(dd)
    }

    function zW(dd) {
      let {
        seconds: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)();
      return (0, MW.jsx)(fW, {
        title: kd("buildAFactory2Game:recipesCuts", {
          seconds: Jd
        }),
        count: 1,
        children: (0, MW.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, MW.jsx)(mW, {
            item: "Maple Sapling",
            amount: 1
          }), (0, MW.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, MW.jsx)(mW, {
            item: "Maple Log",
            amount: 1
          }), (0, MW.jsx)("span", {
            className: "Baf2RecipeName",
            children: kd("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function HW(dd) {
      let {
        fertilised: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)();
      return (0, MW.jsxs)(fW, {
        title: kd("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, MW.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, MW.jsx)(mW, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, MW.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, MW.jsx)(mW, {
            item: "Wheat",
            amount: 1
          }), (0, MW.jsx)(mW, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, MW.jsx)("span", {
            className: "Baf2RecipeName",
            children: kd("buildAFactory2Game:recipeField")
          })]
        }), (0, MW.jsxs)("li", {
          className: iN()("Baf2Recipe", {
            InUse: Jd
          }),
          children: [(0, MW.jsx)(mW, {
            item: "Fertiliser",
            amount: 1
          }), (0, MW.jsx)("span", {
            className: "Baf2RecipeName",
            children: kd("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function wW(dd) {
      let {
        tier: Jd,
        seconds: kd
      } = dd;
      const {
        t: pd
      } = (0, YN.B)(), Nd = function(dd) {
        return dd >= 5 ? BJ : qJ
      }(Jd);
      return (0, MW.jsx)(fW, {
        title: pd("buildAFactory2Game:recipesBringsUp", {
          seconds: kd
        }),
        count: Nd.length,
        children: Nd.map((dd => {
          let {
            item: Jd,
            chance: kd
          } = dd;
          return (0, MW.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, MW.jsx)(mW, {
              item: Jd,
              amount: 1
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeName",
              children: PW(pd, Jd)
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: pd("buildAFactory2Game:recipeChance", {
                percent: YW(kd)
              })
            })]
          }, Jd)
        }))
      })
    }

    function AW(dd) {
      let {
        tier: Jd,
        seconds: kd,
        noSeeds: pd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)(), Wd = kW(), Pd = RW(Jd, pd ? VW : void 0), Zd = pd && RW(Jd).length > Pd.length, gd = QW(Jd);
      return (0, MW.jsxs)(fW, {
        title: Nd("buildAFactory2Game:recipesRecycles", {
          seconds: kd
        }),
        count: Pd.length,
        children: [Pd.map((dd => {
          let {
            find: Jd,
            chance: kd
          } = dd;
          return (0, MW.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Wd.has(Jd.item) && (0, MW.jsx)(XW, {}), (0, MW.jsx)(mW, {
              item: Jd.item,
              amount: Jd.amount
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeName",
              children: PW(Nd, Jd.item)
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Nd("buildAFactory2Game:recipeChance", {
                percent: YW(kd)
              })
            })]
          }, Jd.item)
        })), Zd && (0, MW.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, MW.jsx)("span", {
            className: "Baf2RecipeName",
            children: Nd("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), gd && (0, MW.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, MW.jsx)("span", {
            className: "Baf2RecipeName",
            children: Nd("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function dP(dd) {
      let {
        tier: Jd,
        seconds: kd
      } = dd;
      const {
        t: pd
      } = (0, YN.B)(), Nd = Object.entries(CW).filter((dd => {
        let [, {
          item: kd
        }] = dd;
        return rW(TW(kd), Jd, cW(kd))
      }));
      return (0, MW.jsx)(fW, {
        title: pd("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: kd
        }),
        count: Nd.length,
        children: Nd.map((dd => {
          let [Jd, {
            item: kd,
            amount: Nd
          }] = dd;
          return (0, MW.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, MW.jsx)(mW, {
              item: Jd,
              amount: 1
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, MW.jsx)(mW, {
              item: kd,
              amount: Nd
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeName",
              children: PW(pd, kd)
            })]
          }, Jd)
        }))
      })
    }

    function JP(dd) {
      let {
        tier: Jd,
        seconds: kd
      } = dd;
      const {
        t: pd
      } = (0, YN.B)(), Nd = kW(), Wd = uW(Object.entries(Zk).filter((dd => {
        let [kd, pd] = dd;
        return rW(EW(kd, pd), Jd, cW(pd))
      })), (dd => {
        let [Jd, kd] = dd;
        return EW(Jd, kd)
      }));
      return (0, MW.jsx)(fW, {
        title: pd("buildAFactory2Game:recipesDigs", {
          seconds: kd
        }),
        count: Wd.length,
        children: Wd.map((dd => {
          let [kd, Wd] = dd;
          const Pd = EW(kd, Wd),
            Zd = Pd > Jd ? Pd : null,
            gd = gk[kd],
            Cd = null === Zd && Nd.has(Wd);
          return (0, MW.jsxs)("li", {
            className: iN()("Baf2Recipe", {
              Locked: null !== Zd,
              Far: FW(Zd, Jd)
            }),
            children: [Cd && (0, MW.jsx)(XW, {}), (0, MW.jsx)(mW, {
              item: kd,
              amount: 1
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, MW.jsx)(mW, {
              item: Wd,
              amount: 1
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeName",
              children: PW(pd, Wd)
            }), void 0 !== gd && (0, MW.jsx)("span", {
              className: "Baf2RecipeMore",
              children: pd("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / gd)
              })
            }), null !== Zd && (0, MW.jsx)(SW, {
              tier: Zd
            })]
          }, kd)
        }))
      })
    }

    function kP(dd) {
      var Jd;
      let {
        def: kd,
        seconds: pd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)();
      return (0, MW.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, MW.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (Jd = kd.fuels) && void 0 !== Jd ? Jd : []).map((dd => (0, MW.jsx)(mW, {
            item: dd,
            amount: 1
          }, dd))), (0, MW.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, MW.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, MW.jsx)(mN.e, {
              name: "bolt"
            }), Nd("buildAFactory2Game:recipePower", {
              power: wd(kd.powerMade),
              seconds: pd
            })]
          })]
        })
      })
    }

    function pP(dd) {
      let {
        def: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)();
      return (0, MW.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, MW.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, MW.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, MW.jsx)(mN.e, {
              name: "bolt"
            }), kd("buildAFactory2Game:recipeMixer", {
              cryo: vW((0, Ad.L)(Jd, Jd.cryoMade), "")
            })]
          })
        })
      })
    }

    function NP(dd) {
      let {
        def: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)();
      return (0, MW.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, MW.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, MW.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, MW.jsx)(mN.e, {
              name: "bolt"
            }), kd("buildAFactory2Game:recipeCondenser", {
              power: vW((0, Ad.L)(Jd, Jd.powerPerOp), ""),
              water: vW((0, Ad.L)(Jd, Jd.fluidMade), "")
            })]
          })
        })
      })
    }

    function WP(dd) {
      let {
        kind: Jd,
        def: kd,
        input: pd,
        tier: Nd,
        noSeeds: Wd = !1
      } = dd;
      const Pd = String(kd.opMs / 1e3);
      return pk(kd) ? (0, MW.jsx)(zW, {
        seconds: Pd
      }) : kd.field ? (0, MW.jsx)(HW, {
        fertilised: null !== pd
      }) : kd.table ? (0, MW.jsx)(wW, {
        tier: Nd,
        seconds: Pd
      }) : kd.recycles ? (0, MW.jsxs)(MW.Fragment, {
        children: [(0, MW.jsx)(AW, {
          tier: Nd,
          seconds: Pd,
          noSeeds: Wd
        }), (0, MW.jsx)(dP, {
          tier: Nd,
          seconds: Pd
        })]
      }) : kk(kd) ? (0, MW.jsx)(JP, {
        tier: Nd,
        seconds: Pd
      }) : void 0 !== kd.fluidMade ? (0, MW.jsx)(NP, {
        def: kd
      }) : void 0 !== kd.cryoMade ? (0, MW.jsx)(pP, {
        def: kd
      }) : void 0 !== kd.powerMade ? (0, MW.jsx)(kP, {
        def: kd,
        seconds: Pd
      }) : (0, MW.jsx)(PP, {
        kind: Jd,
        input: pd,
        tier: Nd,
        seconds: Pd
      })
    }

    function PP(dd) {
      let {
        kind: Jd,
        input: kd,
        tier: pd,
        seconds: Nd
      } = dd;
      const {
        t: Wd
      } = (0, YN.B)(), Pd = kW(), Zd = uW(function(dd) {
        const Jd = new Map;
        for (const Nd of dd) {
          var kd, pd;
          const dd = [Nd.output, Nd.outputAmount, Nd.inputAmount, null === (kd = Nd.bonus) || void 0 === kd ? void 0 : kd.item, null === (pd = Nd.bonus) || void 0 === pd ? void 0 : pd.chance].join("|"),
            Wd = Jd.get(dd);
          Wd ? Wd.inputs.push(Nd.input) : Jd.set(dd, {
            inputs: [Nd.input],
            inputAmount: Nd.inputAmount,
            output: Nd.output,
            outputAmount: Nd.outputAmount,
            bonus: Nd.bonus
          })
        }
        return [...Jd.values()]
      }(hW(Jd, pd).filter(lk)), (dd => TW(dd.output))).filter((dd => rW(TW(dd.output), pd, cW(dd.output))));
      return (0, MW.jsx)(fW, {
        title: Wd("buildAFactory2Game:recipesEach", {
          seconds: Nd
        }),
        count: Zd.length,
        children: Zd.map((dd => {
          const Jd = null !== kd && dd.inputs.includes(kd),
            Nd = dd.inputs.length > 3 ? [Jd ? kd : dd.inputs[0]] : dd.inputs,
            Zd = TW(dd.output) > pd ? TW(dd.output) : null,
            gd = null === Zd && Pd.has(dd.output);
          return (0, MW.jsxs)("li", {
            className: iN()("Baf2Recipe", {
              InUse: Jd,
              Locked: null !== Zd,
              Far: FW(Zd, pd)
            }),
            children: [gd && (0, MW.jsx)(XW, {}), Nd.map(((Jd, kd) => (0, MW.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [kd > 0 && (0, MW.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, MW.jsx)(mW, {
                item: Jd,
                amount: dd.inputAmount
              })]
            }, Jd))), Nd.length < dd.inputs.length && (0, MW.jsx)(bW, {
              label: Wd("buildAFactory2Game:recipeMore", {
                count: String(dd.inputs.length - Nd.length)
              }),
              names: dd.inputs.filter((dd => !Nd.includes(dd))).map((dd => PW(Wd, dd)))
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, MW.jsx)(mW, {
              item: dd.output,
              amount: dd.outputAmount
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeName",
              children: PW(Wd, dd.output)
            }), dd.bonus && (0, MW.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Wd("buildAFactory2Game:recipeBonus", {
                percent: YW(dd.bonus.chance)
              }), (0, MW.jsx)(mW, {
                item: dd.bonus.item,
                amount: 1
              })]
            }), null !== Zd && (0, MW.jsx)(SW, {
              tier: Zd
            })]
          }, `${dd.output}|${dd.inputs[0]}`)
        }))
      })
    }

    function ZP(dd) {
      let {
        taught: Jd,
        tier: kd
      } = dd;
      const {
        t: pd
      } = (0, YN.B)(), Nd = kW(), Wd = uW(Object.values(zJ), (dd => dd.tier)).filter((dd => rW(dd.tier, kd)));
      return (0, MW.jsx)(fW, {
        title: pd("buildAFactory2Game:benchCanMake"),
        count: Wd.length,
        startOpen: !1,
        children: Wd.map((dd => {
          const Wd = dd.tier > kd,
            Pd = !Wd && Nd.has(dd.output);
          return (0, MW.jsxs)("li", {
            className: iN()("Baf2Recipe", {
              InUse: dd.output === Jd,
              Locked: Wd,
              Far: FW(Wd ? dd.tier : null, kd)
            }),
            children: [Pd && (0, MW.jsx)(XW, {}), (0, MW.jsx)(mW, {
              item: dd.output,
              amount: dd.outputAmount
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeName",
              children: PW(pd, dd.output)
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), dd.inputs.map((dd => (0, MW.jsx)(mW, {
              item: dd.item,
              amount: dd.amount
            }, dd.item))), Wd && (0, MW.jsx)(SW, {
              tier: dd.tier
            })]
          }, dd.output)
        }))
      })
    }
    var gP, CP, KP, oP, lP;
    const QP = XJ.Generator,
      LP = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      OP = 1e3 * (null !== (gP = QP.powerMade) && void 0 !== gP ? gP : 0) / QP.opMs,
      eP = Math.min(...(null !== (CP = QP.fuels) && void 0 !== CP ? CP : []).map((dd => Pk[dd]))) / 1e3,
      RP = XJ["Volt Engine"],
      IP = 1e3 * (null !== (KP = RP.powerMade) && void 0 !== KP ? KP : 0) / RP.opMs,
      GP = Pk[null !== (oP = null === (lP = RP.fuels) || void 0 === lP ? void 0 : lP[0]) && void 0 !== oP ? oP : ""] / 1e3;

    function vP(dd) {
      let {
        item: Jd,
        label: kd,
        value: pd,
        note: Nd,
        dim: Wd
      } = dd;
      return (0, MW.jsxs)("li", {
        className: iN()("Baf2PowerRow", {
          Dim: Wd
        }),
        children: [(0, MW.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, MW.jsx)(bN.d, {
            itemName: Jd,
            amount: 0
          })
        }), (0, MW.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, MW.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: kd
          }), Nd && (0, MW.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Nd
          })]
        }), (0, MW.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: pd
        })]
      })
    }

    function xP(dd, Jd, kd, pd) {
      var Nd;
      const Wd = void 0 === pd ? XJ[dd] : function(dd, Jd) {
          if (null === Jd) return dd;
          let kd = td.get(Jd);
          return kd || (kd = {
            ...dd,
            powerPerOp: ud(dd, Jd),
            farmMob: Jd
          }, td.set(Jd, kd)), kd
        }(XJ[dd], pd),
        Pd = Jd && Wd.couplable ? cJ(Wd, kd) : Wd;
      return 1e3 * (null !== (Nd = Pd.powerPerOp) && void 0 !== Nd ? Nd : 0) / Pd.opMs
    }

    function qP(dd) {
      var Jd, kd, pd, Nd, Wd, Pd, Zd, gd;
      let {
        message: Cd
      } = dd;
      const {
        t: Kd
      } = (0, YN.B)(), od = (dd, Jd) => Kd("buildAFactory2Game:powerPerSecond", {
        rate: vW(dd, Jd)
      }), [ld, Qd] = Cd.baf2PowerGenerators, Ld = Cd.baf2PowerGeneratorFuel, Od = Cd.baf2PowerSunPanels, ed = null !== (Jd = Cd.baf2PowerSunShare) && void 0 !== Jd ? Jd : 1, Rd = Cd.baf2PowerVaults, Id = Cd.baf2PowerUsers, [Gd, vd] = null !== (kd = Cd.baf2PowerEngines) && void 0 !== kd ? kd : [0, 0], xd = null !== (pd = Cd.baf2PowerEngineCells) && void 0 !== pd ? pd : 0, qd = null !== (Nd = Cd.baf2PowerPads) && void 0 !== Nd ? Nd : 0, Bd = null !== (Wd = Cd.baf2PowerCharge) && void 0 !== Wd ? Wd : 0, [sd, ad] = null !== (Pd = Cd.baf2PowerReactors) && void 0 !== Pd ? Pd : [0, 0], [Md, Fd] = null !== (Zd = Cd.baf2PowerBatteries) && void 0 !== Zd ? Zd : [0, 0];
      let Yd = Kd("buildAFactory2Game:powerEngineCells", {
        amount: String(xd)
      });
      xd > 0 && vd > 0 && (Yd = Kd("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(xd),
        time: BW(Kd, xd * GP / vd)
      }));
      let md = Kd("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(Ld)
      });
      Ld > 0 && Qd > 0 && (md = Kd("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(Ld),
        time: BW(Kd, Ld * eP / Qd)
      }));
      const bd = ld + Gd + Od + sd;
      return (0, MW.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, MW.jsxs)("section", {
          children: [(0, MW.jsxs)("h3", {
            children: [Kd("buildAFactory2Game:powerMaking"), (0, MW.jsx)("span", {
              children: od(Cd.baf2PowerMadePerS, "+")
            })]
          }), (0, MW.jsxs)("ul", {
            children: [0 === bd && (0, MW.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Kd("buildAFactory2Game:powerNoMakers")
            }), ld > 0 && (0, MW.jsx)(vP, {
              item: "Generator",
              label: `${PW(Kd,"Generator")} \xd7${ld}`,
              note: `${Kd("buildAFactory2Game:powerRunning",{amount:String(Qd)})} \xb7 ${md}`,
              value: od(Qd * OP, "+"),
              dim: 0 === Qd
            }), Gd > 0 && (0, MW.jsx)(vP, {
              item: "Volt Engine",
              label: `${PW(Kd,"Volt Engine")} \xd7${Gd}`,
              note: `${Kd("buildAFactory2Game:powerRunning",{amount:String(vd)})} \xb7 ${Yd}`,
              value: od(vd * IP, "+"),
              dim: 0 === vd
            }), Od > 0 && (0, MW.jsx)(vP, {
              item: "Solar Panel",
              label: `${PW(Kd,"Solar Panel")} \xd7${Od}`,
              note: Kd(ed < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: od(4 * Od * ed, "+")
            }), sd > 0 && (0, MW.jsx)(vP, {
              item: "Reactor Frame",
              label: `${Kd("buildAFactory2Game:powerReactors")} \xd7${sd}`,
              note: Kd("buildAFactory2Game:powerRunning", {
                amount: String(ad)
              }),
              value: od(null !== (gd = Cd.baf2PowerReactorPerS) && void 0 !== gd ? gd : 0, "+"),
              dim: 0 === ad
            })]
          })]
        }), (0, MW.jsxs)("section", {
          children: [(0, MW.jsxs)("h3", {
            children: [Kd("buildAFactory2Game:powerStorage"), (0, MW.jsx)("span", {
              children: wd(Cd.baf2PowerCap)
            })]
          }), (Rd > 0 || Md > 0) && (0, MW.jsxs)("ul", {
            children: [Rd > 0 && (0, MW.jsx)(vP, {
              item: "Charge Vault",
              label: `${PW(Kd,"Charge Vault")} \xd7${Rd}`,
              value: `+${wd(8e3*Rd)}`
            }), Md > 0 && (0, MW.jsx)(vP, {
              item: "Battery Cell",
              label: `${Kd("buildAFactory2Game:powerBatteries")} \xd7${Md}`,
              value: `+${wd(Fd)}`
            })]
          })]
        }), (0, MW.jsxs)("section", {
          children: [(0, MW.jsxs)("h3", {
            children: [Kd("buildAFactory2Game:powerUsing"), (0, MW.jsx)("span", {
              children: od(Cd.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, MW.jsxs)("ul", {
            children: [0 === Id.length && 0 === qd && 0 === Bd && (0, MW.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Kd("buildAFactory2Game:powerNoUsers")
            }), Id.map((dd => {
              let [Jd, kd, pd, Nd, Wd = 1, Pd] = dd, Zd = kd ? Kd(LP[Wd - 1], {
                name: PW(Kd, Jd)
              }) : PW(Kd, Jd);
              return void 0 !== Pd && (Zd = Kd("buildAFactory2Game:powerFarmName", {
                name: Zd,
                mob: Kd(cd(Pd))
              })), (0, MW.jsx)(vP, {
                item: Jd,
                label: `${Zd} \xd7${pd}`,
                note: Kd("buildAFactory2Game:powerRunning", {
                  amount: String(Nd)
                }),
                value: Nd > 0 ? od(Nd * xP(Jd, kd, Wd, Pd), "\u2212") : Kd("buildAFactory2Game:powerIdle"),
                dim: 0 === Nd
              }, `${Jd}|${kd}|${Wd}|${Pd}`)
            })), qd > 0 && (0, MW.jsx)(vP, {
              item: "Charging Pad",
              label: `${PW(Kd,"Charging Pad")} \xd7${qd}`,
              value: Kd("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Bd > 0 && (0, MW.jsx)(vP, {
              item: "Homestead Core",
              label: Kd("buildAFactory2Game:powerCharge"),
              value: od(Bd, "\u2212")
            }), Cd.baf2PowerStarved > 0 && (0, MW.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, MW.jsx)(mN.e, {
                name: "triangle-exclamation"
              }), Kd("buildAFactory2Game:powerStarved", {
                amount: String(Cd.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var BP = kd(4389),
      sP = kd(1461);
    class iP {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(dd) {
        this.message = dd;
        for (const Jd of this.listeners) Jd()
      }
      get() {
        return this.message
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
    }
    class aP extends iP {}

    function MP(dd, Jd) {
      const kd = () => {
          const kd = dd.get();
          if (!kd || !Jd) return kd;
          const [pd, Nd, Wd] = kd.baf2PowerAt;
          return pd === Jd[0] && Nd === Jd[1] && Wd === Jd[2] ? kd : null
        },
        [Nd, Wd] = (0, pd.useState)(kd);
      return (0, pd.useEffect)((() => (Wd(kd()), dd.subscribe((() => {
        Wd(kd())
      })))), [dd, ...null !== Jd && void 0 !== Jd ? Jd : []]), Nd
    }

    function FP(dd) {
      return {
        stored: dd.baf2PowerStored,
        cap: dd.baf2PowerCap,
        madePerS: dd.baf2PowerMadePerS,
        usedPerS: dd.baf2PowerUsedPerS
      }
    }

    function YP(dd) {
      let {
        stored: Jd,
        cap: kd
      } = dd;
      return (0, MW.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, MW.jsx)("div", {
          style: {
            width: `${Math.min(100,100*Jd/Math.max(1,kd))}%`
          }
        })
      })
    }

    function mP(dd) {
      let {
        figures: Jd,
        labelled: kd = !1
      } = dd;
      const {
        t: pd
      } = (0, YN.B)(), Nd = Jd.madePerS - Jd.usedPerS, {
        text: Wd,
        draining: Pd
      } = function(dd, Jd) {
        let {
          stored: kd,
          cap: pd,
          madePerS: Nd,
          usedPerS: Wd
        } = Jd;
        const Pd = Nd - Wd;
        return kd >= pd ? {
          text: dd("buildAFactory2Game:powerFull"),
          draining: !1
        } : Pd > .05 ? {
          text: dd("buildAFactory2Game:powerFullIn", {
            time: BW(dd, (pd - kd) / Pd)
          }),
          draining: !1
        } : Pd < -.05 ? {
          text: dd("buildAFactory2Game:powerEmptyIn", {
            time: BW(dd, kd / -Pd)
          }),
          draining: !0
        } : {
          text: dd("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(pd, Jd);
      return (0, MW.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, MW.jsx)(YP, {
          stored: Jd.stored,
          cap: Jd.cap
        }), (0, MW.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, MW.jsx)("span", {
            children: pd(kd ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: wd(Jd.stored),
              cap: wd(Jd.cap)
            })
          }), (0, MW.jsxs)("span", {
            className: iN()("Baf2PowerNet", {
              Draining: Pd
            }),
            children: [pd("buildAFactory2Game:powerPerSecond", {
              rate: vW(Math.abs(Nd), Nd < 0 ? "\u2212" : "+")
            }), " \xb7 ", Wd]
          })]
        })]
      })
    }

    function bP(dd) {
      let {
        stored: Jd,
        cap: kd,
        rates: pd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)();
      return pd ? (0, MW.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, MW.jsx)(mP, {
          figures: {
            stored: Jd,
            cap: kd,
            madePerS: pd[0],
            usedPerS: pd[1]
          },
          labelled: !0
        })
      }) : (0, MW.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, MW.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, MW.jsx)(YP, {
            stored: Jd,
            cap: kd
          }), (0, MW.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, MW.jsx)("span", {
              children: Nd("buildAFactory2Game:powerStoredLabelled", {
                stored: wd(Jd),
                cap: wd(kd)
              })
            })
          })]
        })
      })
    }

    function SP(dd) {
      let {
        store: Jd,
        close: kd
      } = dd;
      const {
        t: pd
      } = (0, YN.B)(), Nd = MP(Jd);
      return (0, MW.jsx)(BP.e, {
        close: kd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, MW.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsxs)("div", {
              children: [(0, MW.jsx)("h2", {
                id: "baf2PowerTitle",
                children: pd("buildAFactory2Game:powerTitle")
              }), (0, MW.jsx)("p", {
                children: pd("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, MW.jsx)(sP.i, {
              onClick: kd
            })]
          }), Nd && (0, MW.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, MW.jsx)(mP, {
              figures: FP(Nd)
            }), (0, MW.jsx)(qP, {
              message: Nd
            })]
          })]
        })
      })
    }

    function jP(dd) {
      var Jd;
      let {
        kind: kd,
        def: Nd,
        zd: Wd,
        power: Pd,
        stored: Zd,
        cap: gd
      } = dd;
      const {
        t: Cd
      } = (0, YN.B)(), Kd = MP(Pd, Wd), [od, ld] = (0, pd.useState)(!1);
      return (0, MW.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, MW.jsx)(WP, {
          kind: kd,
          def: Nd,
          input: null,
          tier: null !== (Jd = null === Kd || void 0 === Kd ? void 0 : Kd.baf2PowerTier) && void 0 !== Jd ? Jd : 1
        }), (0, MW.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Cd("buildAFactory2Game:powerTitle")
        }), Kd && (0, MW.jsx)(mP, {
          figures: FP(Kd)
        }), !Kd && (0, MW.jsx)(bP, {
          stored: Zd,
          cap: gd,
          rates: null
        }), Kd && (0, MW.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            ld(!od)
          },
          "aria-expanded": od,
          children: Cd(od ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Kd && od && (0, MW.jsx)(qP, {
          message: Kd
        })]
      })
    }
    const XP = 2500,
      fP = 17500,
      nP = `${xd} `;
    const UP = ["plan", "throttle"];

    function yP(dd) {
      if (dd.startsWith(`${MJ} `)) return dd.slice(0, dd.lastIndexOf(" "));
      const Jd = dd.split(" ");
      return Jd[0] === oJ && UP.includes(Jd[4]) ? Jd.slice(0, 5).join(" ") : null
    }
    class DP {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = dd, this.now = Jd, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.UNd = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = Jd()
      }
      enqueue(dd) {
        this.queue(dd, this.nextTicket());
        const Jd = this.UNd + this.pending.length;
        return this.flush(), Jd
      }
      track(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const kd = this.nextTicket();
        if (!Jd.urgent) return this.queue(dd, kd), this.flush(), kd;
        const {
          supersedes: pd
        } = Jd;
        for (let Wd = this.pending.length - 1; Wd >= this.urgent; Wd--) {
          const Jd = this.pending[Wd];
          (Jd.command === dd || null !== pd && void 0 !== pd && pd(Jd.command)) && (this.pending.splice(Wd, 1), this.markLeft(Jd.tickets))
        }
        const Nd = this.pending.findIndex((Jd => {
          let {
            command: kd
          } = Jd;
          return kd === dd
        }));
        return -1 !== Nd ? this.pending[Nd].tickets.push(kd) : (this.pending.splice(this.urgent, 0, {
          command: dd,
          tickets: [kd]
        }), this.urgent += 1), this.flush(), kd
      }
      leftAt(dd) {
        const Jd = this.leftTimes.get(dd);
        return void 0 !== Jd ? Jd : this.pending.some((Jd => {
          let {
            tickets: kd
          } = Jd;
          return kd.includes(dd)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let dd = !0;
        return () => {
          dd && (dd = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(dd) {
        var Jd;
        return (null === (Jd = this.pending.at(-1)) || void 0 === Jd ? void 0 : Jd.command) === dd
      }
      sent() {
        return this.UNd
      }
      clear() {
        for (const {
            tickets: dd
          }
          of this.pending) this.markLeft(dd);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(dd) {
        const Jd = this.now();
        for (const kd of dd) this.leftTimes.set(kd, Jd);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(dd, Jd) {
        const kd = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === kd || void 0 === kd ? void 0 : kd.command) === dd) return void(! function(dd) {
          return dd === qd || dd.startsWith(`${vd} `) || dd.startsWith(`${Dd} `)
        }(dd) ? kd.tickets.push(Jd) : (this.pending.pop(), this.markLeft([...kd.tickets, Jd])));
        const pd = void 0 === kd ? null : KJ(kd.command, dd);
        if (null !== pd && void 0 !== kd) return kd.command = pd, void kd.tickets.push(Jd);
        const Nd = yP(dd);
        if (null !== Nd && void 0 !== kd && yP(kd.command) === Nd) return kd.command = dd, void kd.tickets.push(Jd);
        if (null !== kd && void 0 !== kd && kd.command.startsWith(nP) && dd.startsWith(nP)) {
          const pd = dd.slice(nP.length);
          if (kd.command.slice(nP.length).split(",").includes(pd)) return void kd.tickets.push(Jd);
          const Nd = `${kd.command},${pd}`;
          if (Nd.length <= 119) return kd.command = Nd, void kd.tickets.push(Jd)
        }
        this.pending.push({
          command: dd,
          tickets: [Jd]
        })
      }
      flush() {
        const dd = this.now();
        for (this.tokens = Math.min(5, this.tokens + (dd - this.refilledAt) / XP), this.refilledAt = dd; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.UNd += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: dd,
            tickets: Jd
          } = this.pending.shift();
          this.markLeft(Jd), this.send(dd)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * XP)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class TP {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new DP(dd, Jd)
      }
      send(dd) {
        return this.queue.enqueue(dd)
      }
      sent() {
        return this.queue.sent()
      }
      track(dd, Jd) {
        return this.queue.track(dd, Jd)
      }
      leftAt(dd) {
        return this.queue.leftAt(dd)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(dd) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = Jd, this.send(dd), this.islandEdits.count
      }
      syncIslandEdits(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: kd
        } = this, pd = Jd - kd.lastAtMs < fP;
        kd.count = pd ? Math.max(kd.count, dd) : dd
      }
      clear() {
        this.queue.clear()
      }
    }
    const EP = (0, pd.createContext)(null);

    function cP() {
      const dd = (0, pd.useContext)(EP);
      if (!dd) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return dd
    }

    function hP(dd, Jd) {
      return null !== Jd && void 0 !== Jd ? Jd : 1 === dd
    }

    function rP(dd, Jd) {
      return dd.every((dd => {
        var kd;
        let [pd, , Nd] = dd;
        return !hP(Nd, null === (kd = Jd.get(pd)) || void 0 === kd ? void 0 : kd.qQ)
      }))
    }

    function uP(dd, Jd, kd) {
      if (0 === dd.size) return dd;
      const pd = new Map(dd);
      for (const [Nd, Wd] of dd) {
        const dd = Jd.find((dd => {
          let [Jd] = dd;
          return Jd === Nd
        }));
        (!dd || Wd.qQ === (1 === dd[2]) || Wd.atMs < kd) && pd.delete(Nd)
      }
      return pd
    }

    function tP(dd) {
      var Jd;
      let {
        zd: kd,
        input: Nd,
        drops: Wd,
        seconds: Pd
      } = dd;
      const {
        t: Zd
      } = (0, YN.B)(), gd = cP(), [Cd, Kd] = (0, pd.useState)(new Map);
      (0, pd.useEffect)((() => {
        Wd && Kd((dd => uP(dd, Wd, Date.now() - fP)))
      }), [Wd]), (0, pd.useEffect)((() => {
        const dd = function(dd, Jd) {
          let kd = null;
          for (const {
              atMs: pd
            }
            of dd.values()) kd = null === kd ? pd : Math.min(kd, pd);
          return null === kd ? null : kd + Jd
        }(Cd, fP);
        if (null === dd || !Wd) return;
        const Jd = setTimeout((() => {
          Kd((dd => uP(dd, Wd, Date.now() - fP)))
        }), Math.max(0, dd - Date.now()) + 1);
        return () => {
          clearTimeout(Jd)
        }
      }), [Cd, Wd]);
      const od = hd(Nd),
        ld = null !== od && null !== Wd && rP(Wd, Cd),
        Qd = function(dd, Jd, kd) {
          return null === dd || null === Jd || rP(Jd, kd) ? 0 : yd[nd[dd]]
        }(od, Wd, Cd);
      return (0, MW.jsxs)(fW, {
        title: Zd("buildAFactory2Game:farmDropsTitle", {
          seconds: Pd
        }),
        count: null !== (Jd = null === Wd || void 0 === Wd ? void 0 : Wd.length) && void 0 !== Jd ? Jd : 0,
        children: [Qd > 0 && (0, MW.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: Zd("buildAFactory2Game:farmDropsPower", {
            power: String(Qd)
          })
        }), (null === od || !Wd) && (0, MW.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: Zd("buildAFactory2Game:farmDropsEmpty")
        }), ld && (0, MW.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: Zd("buildAFactory2Game:farmDropsAllVoided")
        }), null !== od && (null === Wd || void 0 === Wd ? void 0 : Wd.map((dd => {
          var Jd;
          let [pd, Nd, Wd] = dd;
          const Pd = Nd < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            od = hP(Wd, null === (Jd = Cd.get(pd)) || void 0 === Jd ? void 0 : Jd.qQ);
          return (0, MW.jsxs)("li", {
            className: iN()("Baf2Recipe Baf2FarmDrop", {
              Voided: !od
            }),
            children: [(0, MW.jsx)(mW, {
              item: pd,
              amount: 1
            }), (0, MW.jsx)("span", {
              className: "Baf2RecipeName",
              children: PW(Zd, pd)
            }), (0, MW.jsx)("span", {
              className: "Baf2FarmRate",
              children: Zd(Pd, {
                amount: String(Nd)
              })
            }), (0, MW.jsx)("button", {
              type: "button",
              className: iN()("Baf2FarmToggle SmallTextBold", {
                Kept: od
              }),
              "aria-pressed": od,
              onClick: () => {
                Kd(new Map(Cd).set(pd, {
                  qQ: !od,
                  atMs: Date.now()
                })), gd.send(function(dd, Jd, kd, pd) {
                  return `${Dd} ${dd} ${Jd} ${kd} ${pd}`
                }(kd[0], kd[1], kd[2], pd))
              },
              children: Zd(od ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, pd)
        })))]
      })
    }
    var VP;
    const zP = String(null !== (VP = XJ.Synthesizer.waterPerOp) && void 0 !== VP ? VP : 0);

    function HP(dd) {
      let {
        zd: Jd,
        taught: kd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)(), Wd = cP(), [Pd, Zd] = (0, pd.useState)(null);
      (0, pd.useEffect)((() => {
        null !== Pd && kd === Pd && Zd(null)
      }), [Pd, kd]);
      const gd = null !== Pd && void 0 !== Pd ? Pd : kd;
      let Cd = Nd("buildAFactory2Game:synthPick");
      return null !== gd && (Cd = Nd("buildAFactory2Game:synthGrows", {
        name: PW(Nd, gd),
        input: PW(Nd, sJ),
        water: zP
      })), (0, MW.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, MW.jsx)("div", {
          className: iN()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === gd
          }),
          children: Cd
        }), (0, MW.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: iJ.map(((dd, kd) => {
            const pd = PW(Nd, dd),
              Pd = dd === gd;
            return (0, MW.jsx)("li", {
              children: (0, MW.jsx)("button", {
                type: "button",
                className: iN()("Baf2SynthTile", {
                  Selected: Pd
                }),
                title: pd,
                "aria-label": pd,
                "aria-pressed": Pd,
                onClick: () => {
                  Pd || (Zd(dd), Wd.send(`${MJ} ${Jd[0]} ${Jd[1]} ${Jd[2]} ${kd}`))
                },
                children: (0, MW.jsx)(bN.d, {
                  itemName: dd,
                  amount: 0
                })
              })
            }, dd)
          }))
        })]
      })
    }
    const wP = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function AP(dd) {
      let {
        kind: Jd,
        tier: kd,
        coupled: pd,
        level: Nd,
        slot: Wd
      } = dd;
      const {
        t: Pd
      } = (0, YN.B)(), gd = Hd(nJ);
      if (!pd && null !== kd && kd < gd) return (0, MW.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, MW.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, MW.jsx)(mN.e, {
            name: "lock"
          })
        }), (0, MW.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Pd("buildAFactory2Game:upgradeLocked")
        }), (0, MW.jsx)("span", {
          className: "Baf2TierTag",
          children: Pd("buildAFactory2Game:tierTag", {
            tier: String(gd)
          })
        })]
      });
      const Cd = function(dd, Jd) {
          if (Zd() && "Crusher" !== dd && null !== Jd) {
            if (dZ(yJ, Jd)) return {
              item: yJ,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (dZ(UJ, Jd)) return {
              item: UJ,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: nJ,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(Jd, kd),
        Kd = Pd(pd ? wP[Nd - 1] : Cd.emptyKey),
        od = null !== kd ? function(dd, Jd, kd, pd) {
          if (!Zd() || !kd || "Crusher" === dd || Jd < 10) return null;
          const Nd = Hd(yJ);
          if (pd < 3 && Nd > 1 && (2 === pd || Jd >= Nd)) return {
            tier: Nd,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Wd = Hd(UJ);
          if (1 === pd && Wd > 1) return {
            tier: Wd,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(Jd, kd, pd, Nd) : null;
      return (0, MW.jsxs)("div", {
        className: iN()("Baf2UpgradeSocket", {
          Fitted: pd
        }),
        children: [(0, MW.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [pd && Wd, !pd && (0, MW.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, MW.jsx)(bN.d, {
              itemName: Cd.item,
              amount: 0
            })
          })]
        }), (0, MW.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, MW.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Pd("buildAFactory2Game:upgradeTitle")
          }), (0, MW.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Kd
          }), pd && Nd >= 2 && "Crusher" === Jd && (0, MW.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Pd("buildAFactory2Game:couplerCrusherHint")
          }), od && null !== kd && kd < od.tier && (0, MW.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, MW.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, MW.jsx)(mN.e, {
                name: "lock"
              })
            }), Pd(od.lockedKey), (0, MW.jsx)("span", {
              className: "Baf2TierTag",
              children: Pd("buildAFactory2Game:tierTag", {
                tier: String(od.tier)
              })
            })]
          }), od && null !== kd && kd >= od.tier && (0, MW.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Pd(od.nextKey)
          })]
        })]
      })
    }

    function dZ(dd, Jd) {
      const kd = Hd(dd);
      return kd > 1 && Jd >= kd
    }
    var JZ = kd(37195);
    const kZ = (0, Ad.L)(XJ.Condenser, XJ.Condenser.fluidMade),
      pZ = .05;
    class NZ extends iP {}

    function WZ(dd) {
      return vW(dd, "")
    }

    function PZ(dd, Jd, kd) {
      return dd(Jd ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: kd
      })
    }

    function ZZ(dd, Jd, kd, pd) {
      return kd <= pZ && pd <= pZ ? null : pd <= pZ || kd <= pZ ? PZ(dd, Jd, pd <= pZ ? vW(kd, "+") : vW(pd, "\u2212")) : dd(Jd ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: WZ(kd),
        used: WZ(pd)
      })
    }

    function gZ(dd, Jd) {
      return Math.min(100, 100 * dd / Math.max(1, Jd))
    }

    function CZ(dd) {
      let {
        stored: Jd,
        cap: kd,
        netPerS: pd,
        rates: Nd,
        cryo: Wd
      } = dd;
      const {
        t: Pd
      } = (0, YN.B)(), Zd = function(dd, Jd, kd, pd) {
        return kd <= 0 ? dd("buildAFactory2Game:waterNoStorage") : Jd >= kd ? dd("buildAFactory2Game:powerFull") : pd > pZ ? dd("buildAFactory2Game:powerFullIn", {
          time: BW(dd, (kd - Jd) / pd)
        }) : pd < -.05 ? Jd <= 0 ? dd("buildAFactory2Game:waterEmpty") : dd("buildAFactory2Game:powerEmptyIn", {
          time: BW(dd, Jd / -pd)
        }) : dd("buildAFactory2Game:powerSteady")
      }(Pd, Jd, kd, pd), gd = kd > 0 && Jd < kd && Math.abs(pd) <= pZ, Cd = Pd(Wd ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Kd = null !== Nd ? `${Nd} \xb7 ${Zd}` : gd ? Cd : `${Cd} \xb7 ${Zd}`;
      return (0, MW.jsxs)(MW.Fragment, {
        children: [(0, MW.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, MW.jsx)("div", {
            style: {
              width: `${gZ(Jd,kd)}%`
            }
          })
        }), (0, MW.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, MW.jsx)("span", {
            children: kd > 0 && Pd("buildAFactory2Game:powerStored", {
              stored: (0, Ad.S)(Jd),
              cap: (0, Ad.S)(kd)
            })
          }), (0, MW.jsx)("span", {
            className: iN()("Baf2WaterNet", {
              Draining: pd < -.05
            }),
            children: Kd
          })]
        })]
      })
    }

    function KZ(dd) {
      let {
        water: Jd,
        at: kd,
        side: pd = null
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)(), Wd = cP(), [Pd, Zd, gd] = Jd;
      return (0, MW.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, MW.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, MW.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Nd(null === pd ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${pd}`)
          }), (0, MW.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Wd.send(`${Ad.G} ${kd[0]} ${kd[1]} ${kd[2]}${"cryoOut"===pd?" cryo":""}`)
            },
            children: Nd("buildAFactory2Game:waterDetails")
          })]
        }), (0, MW.jsx)(CZ, {
          stored: Pd,
          cap: Zd,
          netPerS: gd,
          rates: PZ(Nd, "cryoOut" === pd, vW(Math.abs(gd), gd < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === pd
        })]
      })
    }

    function oZ(dd, Jd) {
      var kd, pd, Nd;
      const Wd = !0 === Jd.baf2WaterCryo,
        Pd = null !== (kd = null === (pd = Jd.baf2WaterMakers.find((dd => dd[0] === (Wd ? Ad.d : "Condenser")))) || void 0 === pd ? void 0 : pd[1]) && void 0 !== kd ? kd : 0,
        Zd = [],
        gd = (Jd, kd, pd) => {
          Jd > 0 && Zd.push(dd(1 === Jd ? kd : pd, {
            count: String(Jd)
          }))
        };
      return Wd ? gd(Pd, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : gd(Pd, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), gd(null !== (Nd = Jd.baf2WaterPipes) && void 0 !== Nd ? Nd : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), gd(Jd.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), Zd.join(" \xb7 ")
    }

    function lZ(dd, Jd) {
      if (!0 === Jd.baf2WaterCryo) return function(dd, Jd) {
        const kd = XJ[Ad.d];
        switch (Jd.baf2WaterThis) {
          case "pipe":
            return {
              text: dd("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: dd("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: dd("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: dd("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: dd("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: dd("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: dd("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var pd;
            const [Nd, Wd] = null !== (pd = Jd.baf2WaterThisRates) && void 0 !== pd ? pd : [(0, Ad.L)(kd, kd.cryoMade), (0, Ad.L)(kd, kd.powerPerOp)];
            return !0 === Jd.baf2WaterDriven ? {
              text: dd("buildAFactory2Game:cryoThisMixerDriven", {
                rate: WZ(Nd)
              }),
              bad: !1
            } : {
              text: dd("buildAFactory2Game:cryoThisMixer", {
                rate: WZ(Nd),
                power: WZ(Wd)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: dd("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(dd, Jd);
      const kd = !0 === Jd.baf2WaterDriven,
        pd = XJ.Condenser;
      switch (Jd.baf2WaterThis) {
        case "pipe":
          return {
            text: dd("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: dd("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: dd("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: dd("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: dd("buildAFactory2Game:waterThisTank", {
              tank: (0, Ad.S)(Ad.v),
              cap: (0, Ad.S)(Jd.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Nd;
          const [Wd, Pd] = null !== (Nd = Jd.baf2WaterThisRates) && void 0 !== Nd ? Nd : [kZ, (0, Ad.L)(pd, pd.powerPerOp)];
          return kd ? {
            text: dd("buildAFactory2Game:waterThisCondenserDriven", {
              rate: WZ(Wd)
            }),
            bad: !1
          } : {
            text: dd("buildAFactory2Game:waterThisCondenser", {
              rate: WZ(Wd),
              power: WZ(Pd)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: dd("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function QZ(dd, Jd) {
      const kd = Jd.baf2WaterMakers.some((dd => !0 === dd[5]));
      if (!0 === Jd.baf2WaterCryo) {
        const pd = Jd.baf2WaterUsedPerS - Jd.baf2WaterMadePerS,
          Nd = kd || pd <= pZ ? 0 : (0, Ad.H)(pd);
        return 0 === Nd ? null : Nd > 1 ? dd("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Nd)
        }) : dd("buildAFactory2Game:cryoNextOne")
      }
      const pd = kd ? null : function(dd, Jd) {
        const kd = Jd - dd;
        return kd <= pZ ? null : Math.ceil(kd / kZ)
      }(Jd.baf2WaterMadePerS, Jd.baf2WaterUsedPerS);
      return null === pd ? null : pd > 1 ? dd("buildAFactory2Game:waterNextCondensers", {
        condensers: String(pd)
      }) : dd("buildAFactory2Game:waterNextOne")
    }

    function LZ(dd) {
      let {
        item: Jd,
        label: kd,
        note: pd,
        value: Nd,
        dim: Wd,
        bad: Pd
      } = dd;
      return (0, MW.jsxs)("li", {
        className: iN()("Baf2WaterRow", {
          Dim: Wd,
          Bad: Pd
        }),
        children: [(0, MW.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, MW.jsx)(bN.d, {
            itemName: Jd,
            amount: 0
          })
        }), (0, MW.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, MW.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: kd
          }), pd && (0, MW.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: pd
          })]
        }), (0, MW.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Nd
        })]
      })
    }

    function OZ(dd) {
      return JZ.n[dd] ? dd : "Reactor Port"
    }

    function eZ(dd) {
      let {
        message: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)(), pd = !0 === Jd.baf2WaterCryo, Nd = (dd, Jd) => PZ(kd, pd, vW(dd, Jd));
      return (0, MW.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, MW.jsxs)("section", {
          children: [(0, MW.jsxs)("h3", {
            children: [kd("buildAFactory2Game:waterMakes"), (0, MW.jsx)("span", {
              children: Nd(Jd.baf2WaterMadePerS, "+")
            })]
          }), (0, MW.jsxs)("ul", {
            children: [0 === Jd.baf2WaterMakers.length && (0, MW.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: kd(pd ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), Jd.baf2WaterMakers.map((dd => {
              let [Jd, pd, Wd, Pd, Zd, gd] = dd;
              const Cd = kd("buildAFactory2Game:powerRunning", {
                amount: String(Wd)
              });
              let Kd = Zd > 0 ? kd("buildAFactory2Game:waterMakerPower", {
                running: Cd,
                power: WZ(Zd)
              }) : Cd;
              return gd && (Kd = kd(0 === Wd && Pd <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, MW.jsx)(LZ, {
                item: Jd,
                label: `${PW(kd,Jd)} \xd7${pd}`,
                note: Kd,
                value: Wd > 0 || gd && Pd > 0 ? Nd(Pd, "+") : kd("buildAFactory2Game:powerIdle"),
                dim: 0 === Wd && !gd,
                bad: gd
              }, Jd)
            }))]
          })]
        }), (0, MW.jsxs)("section", {
          children: [(0, MW.jsxs)("h3", {
            children: [kd("buildAFactory2Game:waterUses"), (0, MW.jsx)("span", {
              children: Nd(Jd.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, MW.jsxs)("ul", {
            children: [0 === Jd.baf2WaterUsers.length && (0, MW.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: kd(pd ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), Jd.baf2WaterUsers.map((dd => {
              let [Jd, pd, Wd, Pd] = dd;
              const Zd = JZ.n[Jd] ? PW(kd, Jd) : Jd;
              return (0, MW.jsx)(LZ, {
                item: OZ(Jd),
                label: pd > 1 ? `${Zd} \xd7${pd}` : Zd,
                note: Pd ? kd("buildAFactory2Game:waterPortFirst") : void 0,
                value: Wd > 0 ? Nd(Wd, "\u2212") : kd("buildAFactory2Game:powerIdle"),
                dim: 0 === Wd
              }, Jd)
            }))]
          })]
        })]
      })
    }

    function RZ(dd) {
      var Jd, kd, Nd, Wd, Pd;
      let {
        store: Zd,
        close: gd
      } = dd;
      const {
        t: Cd
      } = (0, YN.B)(), Kd = function(dd) {
        const [Jd, kd] = (0, pd.useState)((() => dd.get()));
        return (0, pd.useEffect)((() => (kd(dd.get()), dd.subscribe((() => {
          kd(dd.get())
        })))), [dd]), Jd
      }(Zd), od = null !== (Jd = null === Kd || void 0 === Kd ? void 0 : Kd.baf2WaterStored) && void 0 !== Jd ? Jd : 0, ld = null !== (kd = null === Kd || void 0 === Kd ? void 0 : Kd.baf2WaterCap) && void 0 !== kd ? kd : 0, Qd = null !== (Nd = null === Kd || void 0 === Kd ? void 0 : Kd.baf2WaterMadePerS) && void 0 !== Nd ? Nd : 0, Ld = null !== (Wd = null === Kd || void 0 === Kd ? void 0 : Kd.baf2WaterUsedPerS) && void 0 !== Wd ? Wd : 0, Od = null !== (Pd = null === Kd || void 0 === Kd ? void 0 : Kd.baf2WaterNetPerS) && void 0 !== Pd ? Pd : Qd - Ld, ed = Kd && lZ(Cd, Kd), Rd = Kd && QZ(Cd, Kd), Id = !0 === (null === Kd || void 0 === Kd ? void 0 : Kd.baf2WaterCryo);
      return (0, MW.jsx)(BP.e, {
        close: gd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, MW.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Kd && ld <= 0 ? (0, MW.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, MW.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, MW.jsx)(bN.d, {
                  itemName: Id ? ek.g : Ad.n,
                  amount: 0
                })
              }), (0, MW.jsxs)("div", {
                children: [(0, MW.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Cd(Id ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Kd && (0, MW.jsx)("p", {
                  children: oZ(Cd, Kd)
                })]
              })]
            }), (0, MW.jsx)(sP.i, {
              onClick: gd
            })]
          }), Kd && ed && (0, MW.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, MW.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, MW.jsx)(CZ, {
                stored: od,
                cap: ld,
                netPerS: Od,
                cryo: Id,
                rates: ZZ(Cd, Id, Qd, Ld)
              })
            }), (0, MW.jsx)("div", {
              className: iN()("Baf2WaterThis", {
                Bad: ed.bad
              }),
              children: ed.text
            }), Kd.baf2WaterDriven && (0, MW.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, MW.jsx)(mN.e, {
                name: "bolt"
              }), Cd(Id ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), Rd && (0, MW.jsx)("p", {
              className: "Baf2WaterNext",
              children: Rd
            }), (0, MW.jsx)(eZ, {
              message: Kd
            })]
          })]
        })
      })
    }
    class IZ {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(dd, Jd) {
        const kd = this.get(dd);
        kd && null === Jd.opLeftMs && null === Jd.fuelLeftMs && Jd.status === kd.status ? Jd = {
          ...Jd,
          opLeftMs: kd.opLeftMs,
          fuelLeftMs: kd.fuelLeftMs,
          burning: kd.burning
        } : this.updates++, this.pos = dd, this.view = Jd;
        for (const pd of this.listeners) pd()
      }
      get(dd) {
        return null !== this.pos && this.pos[0] === dd[0] && this.pos[1] === dd[1] && this.pos[2] === dd[2] ? this.view : null
      }
      forget(dd) {
        null !== this.get(dd) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
    }

    function GZ(dd, Jd, kd, pd) {
      return "noFuel" === Jd && pd && !Wk(XJ[dd]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === Jd && !0 === (null === kd || void 0 === kd ? void 0 : kd.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === Jd && !0 === (null === kd || void 0 === kd ? void 0 : kd.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === Jd && !0 === (null === kd || void 0 === kd ? void 0 : kd.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === Jd && !0 === (null === kd || void 0 === kd ? void 0 : kd.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : vZ(Jd, kd) ? "buildAFactory2Game:machineStatus_noInputShort" : function(dd, Jd) {
        const kd = XJ[dd];
        if ("noFuel" === Jd && void 0 !== kd.fuels) return Wk(kd) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (kd.mobFarm && ("noInput" === Jd || "badInput" === Jd)) return `buildAFactory2Game:machineStatus_${Jd}MobFarm`;
        if ("outputFull" === Jd && (void 0 !== kd.table || kd.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === Jd && tJ(kd)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== kd.cryoMade && ("noInput" === Jd || "noOutlet" === Jd || "fluidFull" === Jd)) return `buildAFactory2Game:machineStatus_${Jd}Mixer`;
        return `buildAFactory2Game:machineStatus_${Jd}`
      }(dd, Jd)
    }

    function vZ(dd, Jd) {
      return "noInput" === dd && null !== Jd && void 0 !== Jd && Jd.input && Jd.inputShort ? {
        input: Jd.input,
        short: Jd.inputShort
      } : null
    }

    function xZ(dd) {
      return aN(dd) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== dd.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function qZ(dd) {
      const Jd = (0, Xd.Be)(dd);
      return `Baf2Pane Baf2Pane${Jd.charAt(0).toUpperCase()}${Jd.slice(1)}`
    }

    function BZ(dd, Jd) {
      const [kd, Nd] = (0, pd.useState)((() => dd.get(Jd)));
      return (0, pd.useEffect)((() => {
        Nd(dd.get(Jd));
        const kd = dd.subscribe((() => {
          Nd(dd.get(Jd))
        }));
        return () => {
          kd(), dd.forget(Jd)
        }
      }), [dd, ...Jd]), kd
    }

    function sZ(dd, Jd, kd, pd) {
      const Nd = XJ[dd],
        Wd = Jd && Nd.couplable ? cJ(Nd, kd) : Nd,
        Pd = null !== pd && kk(Wd) ? function(dd, Jd) {
          var kd;
          return null !== (kd = null !== Jd && kk(dd) ? gk[Jd] : void 0) && void 0 !== kd ? kd : dd.opMs
        }(Wd, Ck(pd)) : Wd.opMs;
      return Pd === Wd.opMs ? Wd : {
        ...Wd,
        opMs: Pd
      }
    }

    function iZ(dd) {
      let {
        running: Jd,
        opMs: kd,
        opLeftMs: pd,
        updateCount: Nd
      } = dd;
      return (0, MW.jsx)("div", {
        className: iN()("Baf2MachineProgress", {
          Running: Jd
        }),
        children: (0, MW.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: kd / 1e3 + "s",
            animationDelay: null === pd ? void 0 : (pd - kd) / 1e3 + "s"
          }
        }, Nd)
      })
    }

    function aZ(dd) {
      let {
        running: Jd,
        leftMs: kd,
        periodMs: pd,
        updateCount: Nd
      } = dd;
      const {
        t: Wd
      } = (0, YN.B)(), Pd = Math.min(Math.max(null !== kd && void 0 !== kd ? kd : 0, 0), pd), Zd = Jd && Pd > 0, gd = Wd("buildAFactory2Game:machineBarFuel");
      return (0, MW.jsx)("div", {
        className: iN()("Baf2FuelBurn", {
          Draining: Zd
        }),
        role: "img",
        title: gd,
        "aria-label": gd,
        children: (0, MW.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: Zd ? {
            animationDuration: pd / 1e3 + "s",
            animationDelay: (Pd - pd) / 1e3 + "s"
          } : {
            transform: `scaleY(${Pd/pd})`
          }
        }, Nd)
      })
    }

    function MZ(dd, Jd, kd) {
      let [pd, Nd] = kd;
      const Wd = 1 !== pd ? FN(Jd) : null;
      return {
        amount: pd,
        have: Nd,
        item: dd(Wd || WW(Jd))
      }
    }

    function FZ(dd) {
      return kk(dd) ? "buildAFactory2Game:machineBarMining" : pk(dd) ? "buildAFactory2Game:machineBarCutting" : void 0 !== dd.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function YZ(dd) {
      var Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Gd;
      let {
        kind: vd,
        zd: xd,
        store: qd,
        power: Bd,
        renderSlot: sd
      } = dd;
      const {
        t: ad
      } = (0, YN.B)(), Md = BZ(qd, xd), Fd = XJ[vd], Yd = null !== (Jd = null === Md || void 0 === Md ? void 0 : Md.coupled) && void 0 !== Jd && Jd, md = null !== (kd = null === Md || void 0 === Md ? void 0 : Md.couplerLevel) && void 0 !== kd ? kd : 1, bd = sZ(vd, Yd, md, null !== (pd = null === Md || void 0 === Md || null === (Nd = Md.dug) || void 0 === Nd ? void 0 : Nd.item) && void 0 !== pd ? pd : null), Sd = null !== (Wd = null === Md || void 0 === Md ? void 0 : Md.status) && void 0 !== Wd ? Wd : null, jd = null !== (Pd = null === Md || void 0 === Md ? void 0 : Md.power) && void 0 !== Pd ? Pd : null, Xd = null !== (Zd = null === Md || void 0 === Md ? void 0 : Md.opLeftMs) && void 0 !== Zd ? Zd : null, fd = null !== (gd = null === Md || void 0 === Md ? void 0 : Md.dug) && void 0 !== gd ? gd : null, nd = null !== fd && kk(Fd) ? gk[null !== (Cd = Ck(fd.item)) && void 0 !== Cd ? Cd : ""] : void 0, Ud = void 0 === nd ? null : 6e4 / nd, yd = null !== (Kd = null === Md || void 0 === Md ? void 0 : Md.powerCap) && void 0 !== Kd ? Kd : 4e3, Dd = null !== (od = null === Md || void 0 === Md ? void 0 : Md.tier) && void 0 !== od ? od : null, Td = void 0 !== bd.powerMade, Ed = null !== Fd.fuelSlot ? sd(Fd.fuelSlot) : null, cd = EJ(Fd), hd = !Yd && !0 === (null === Md || void 0 === Md ? void 0 : Md.fuelFed), ud = !Yd && !0 === (null === Md || void 0 === Md ? void 0 : Md.fuelFeeds), td = null !== Fd.fuelSlot && !Yd, Vd = null !== (ld = null === Md || void 0 === Md ? void 0 : Md.fuelLeftMs) && void 0 !== ld ? ld : null, zd = function(dd, Jd, kd) {
        var pd;
        const Nd = null === Jd ? void 0 : Pk[Jd];
        return Math.max(null !== (pd = null !== Nd && void 0 !== Nd ? Nd : kd) && void 0 !== pd ? pd : 0, dd.opMs)
      }(bd, null !== (Qd = null === Md || void 0 === Md ? void 0 : Md.burning) && void 0 !== Qd ? Qd : null, Vd), Hd = null !== (Ld = null === Md || void 0 === Md ? void 0 : Md.fuelKeep) && void 0 !== Ld ? Ld : null, wd = null === Sd ? null : GZ(vd, Sd, Md, hd), Ad = null === Sd ? null : vZ(Sd, Md);
      return (0, MW.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, MW.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, MW.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: ad(WW(vd))
          }), fd && (0, MW.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [ad("Tree Cutter" === vd ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, MW.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, MW.jsx)(bN.d, {
                itemName: fd.item,
                amount: 0
              })
            }), (0, MW.jsx)(SN.c, {
              text: fd.name
            })]
          }), null !== Ud && (0, MW.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: ad("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Ud)
            })
          }), (null === Md || void 0 === Md ? void 0 : Md.field) && (0, MW.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, MW.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, MW.jsx)(bN.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), ad("buildAFactory2Game:machineField", {
              planted: String(Md.field[0]),
              ripe: String(Md.field[1])
            })]
          }), (0, MW.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, MW.jsxs)("div", {
              className: iN()("Baf2MachineColumn", {
                Baf2Burns: td
              }),
              children: [null !== bd.inputSlot && (0, MW.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, MW.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: ad(xZ(bd))
                }), sd(bd.inputSlot)]
              }), null !== Fd.fuelSlot && !Yd && (0, MW.jsxs)("div", {
                className: iN()("Baf2MachineSlot", {
                  Baf2FuelFed: hd
                }),
                children: [(0, MW.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [hd && (0, MW.jsx)(mN.e, {
                    name: "fire"
                  }), ad("buildAFactory2Game:machineFuel")]
                }), (0, MW.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, MW.jsx)(aZ, {
                    running: "running" === Sd,
                    leftMs: Vd,
                    periodMs: zd,
                    updateCount: qd.updateCount
                  }), Ed]
                })]
              }), null !== Fd.fuelSlot && Yd && (0, MW.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, MW.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: ad("buildAFactory2Game:machineFuel")
                }), (0, MW.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: ad("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": ad("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, MW.jsx)(mN.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, MW.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, MW.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: ad(FZ(bd))
              }), (0, MW.jsx)(iZ, {
                running: "running" === Sd,
                opMs: bd.opMs,
                opLeftMs: Xd,
                updateCount: qd.updateCount
              })]
            }), bd.outputSlots.length > 0 && (0, MW.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, MW.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: ad("buildAFactory2Game:machineOutput")
              }), (0, MW.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: bd.outputSlots.map((dd => (0, MW.jsx)("div", {
                  children: sd(dd)
                }, dd)))
              })]
            }), null !== jd && Td && (0, MW.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, MW.jsx)("div", {
                style: {
                  height: 100 * jd / yd + "%"
                }
              })
            })]
          }), td && null !== Hd && (0, MW.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, MW.jsx)(mN.e, {
              name: "arrows-rotate"
            }), ad(pk(bd) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Hd)
            })]
          }), (hd || ud) && (0, MW.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, MW.jsx)(mN.e, {
              name: "fire"
            }), ad(hd ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Fd.couplable && (0, MW.jsx)(AP, {
            kind: vd,
            tier: Dd,
            coupled: Yd,
            level: md,
            slot: cd === Fd.fuelSlot ? Ed : null !== cd ? sd(cd) : null
          }), null !== jd && !Td && !0 === (null === Md || void 0 === Md ? void 0 : Md.reactorPowered) && (0, MW.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: ad("buildAFactory2Game:machineReactorPowered")
          }), null !== jd && !Td && !0 !== (null === Md || void 0 === Md ? void 0 : Md.reactorPowered) && (0, MW.jsx)(bP, {
            stored: jd,
            cap: yd,
            rates: null !== (Od = null === Md || void 0 === Md ? void 0 : Md.powerRates) && void 0 !== Od ? Od : null
          }), (null === Md || void 0 === Md ? void 0 : Md.water) && (0, MW.jsx)(KZ, {
            water: Md.water,
            at: xd,
            side: Md.cryo ? "waterIn" : null
          }), (null === Md || void 0 === Md ? void 0 : Md.cryo) && (0, MW.jsx)(KZ, {
            water: Md.cryo,
            at: xd,
            side: "cryoOut"
          }), null !== Md && void 0 !== Md && Md.inertCoupler ? (0, MW.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: ad("buildAFactory2Game:machineStatus_couplerOff", {
              item: PW(ad, Md.inertCoupler)
            })
          }) : null !== wd && (0, MW.jsx)("div", {
            className: iN()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Sd
            }),
            children: ad(wd, Ad ? MZ(ad, Ad.input, Ad.short) : void 0)
          })]
        }), (0, MW.jsxs)("div", {
          className: iN()("Baf2MachineSide", {
            Baf2SynthSide: tJ(Fd)
          }),
          children: [tJ(Fd) && (0, MW.jsx)(HP, {
            zd: xd,
            taught: null !== (ed = null === Md || void 0 === Md ? void 0 : Md.taught) && void 0 !== ed ? ed : null
          }, xd.join(",")), Td && (0, MW.jsx)(jP, {
            kind: vd,
            def: bd,
            zd: xd,
            power: Bd,
            stored: null !== jd && void 0 !== jd ? jd : 0,
            cap: yd
          }), rd(Fd) && (0, MW.jsx)(tP, {
            zd: xd,
            input: null !== (Rd = null === Md || void 0 === Md ? void 0 : Md.input) && void 0 !== Rd ? Rd : null,
            drops: null !== (Id = null === Md || void 0 === Md ? void 0 : Md.farm) && void 0 !== Id ? Id : null,
            seconds: String(bd.opMs / 1e3)
          }), !Td && !rd(Fd) && !tJ(Fd) && (0, MW.jsx)(WP, {
            kind: vd,
            def: bd,
            input: null !== (Gd = null === Md || void 0 === Md ? void 0 : Md.input) && void 0 !== Gd ? Gd : null,
            tier: null !== Dd && void 0 !== Dd ? Dd : 1,
            noSeeds: !0 === (null === Md || void 0 === Md ? void 0 : Md.noSeeds)
          })]
        })]
      })
    }

    function mZ(dd, Jd, kd, pd) {
      var Nd;
      const Wd = XJ[dd],
        Pd = [Wd.inputSlot, Wd.fuelSlot, ...null !== (Nd = Wd.inputSlots) && void 0 !== Nd ? Nd : []].filter((dd => null !== dd));
      return {
        render: Nd => {
          let {
            zd: Wd,
            renderSlot: Pd
          } = Nd;
          return (0, MW.jsx)(EP.Provider, {
            value: pd,
            children: (0, MW.jsx)(YZ, {
              kind: dd,
              zd: Wd,
              store: Jd,
              power: kd,
              renderSlot: Pd
            })
          })
        },
        quickMoveRange: Pd.length > 0 ? [Math.min(...Pd), Math.max(...Pd) + 1] : [0, 0],
        className: qZ(dd)
      }
    }
    const bZ = "Assembler";

    function SZ(dd) {
      var Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd;
      let {
        zd: Kd,
        store: od,
        renderSlot: ld
      } = dd;
      const {
        t: Qd
      } = (0, YN.B)(), Ld = BZ(od, Kd), Od = null !== (Jd = null === Ld || void 0 === Ld ? void 0 : Ld.tier) && void 0 !== Jd ? Jd : 1, ed = null !== (kd = null === Ld || void 0 === Ld ? void 0 : Ld.taught) && void 0 !== kd ? kd : null, Rd = wJ(bZ, {
        coupled: !1,
        taught: ed
      }), Id = null !== (pd = Rd.bench) && void 0 !== pd ? pd : null, Gd = null !== (Nd = null === Ld || void 0 === Ld ? void 0 : Ld.status) && void 0 !== Nd ? Nd : null, vd = null !== (Wd = null === Ld || void 0 === Ld ? void 0 : Ld.power) && void 0 !== Wd ? Wd : null, xd = null !== (Pd = null === Ld || void 0 === Ld ? void 0 : Ld.powerCap) && void 0 !== Pd ? Pd : 4e3;
      return (0, MW.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, MW.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, MW.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Qd(WW(bZ))
          }), Id && (0, MW.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Qd("buildAFactory2Game:benchMakes"), (0, MW.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, MW.jsx)(bN.d, {
                itemName: Id.output,
                amount: 0
              })
            }), (null === Ld || void 0 === Ld ? void 0 : Ld.taughtName) && (0, MW.jsx)(SN.c, {
              text: Ld.taughtName
            }), Id.outputAmount > 1 && (0, MW.jsxs)("span", {
              children: ["\xd7", Id.outputAmount]
            })]
          }), !Id && (0, MW.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Qd("buildAFactory2Game:benchTeachHint")
          }), (0, MW.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, MW.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (Zd = Rd.inputSlots) && void 0 !== Zd ? Zd : []).map(((dd, Jd) => {
                const kd = null === Id || void 0 === Id ? void 0 : Id.inputs[Jd];
                return (0, MW.jsxs)("div", {
                  className: iN()("Baf2BenchInput", {
                    Spare: !kd
                  }),
                  children: [(0, MW.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [ld(dd), kd && (0, MW.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, MW.jsx)(bN.d, {
                        itemName: kd.item,
                        amount: 0
                      })
                    })]
                  }), (0, MW.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: kd ? `\xd7${kd.amount}` : "\xa0"
                  })]
                }, dd)
              }))
            }), (0, MW.jsx)(iZ, {
              running: "running" === Gd,
              opMs: Rd.opMs,
              opLeftMs: null !== (gd = null === Ld || void 0 === Ld ? void 0 : Ld.opLeftMs) && void 0 !== gd ? gd : null,
              updateCount: od.updateCount
            }), (0, MW.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, MW.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Qd("buildAFactory2Game:machineOutput")
              }), (0, MW.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Rd.outputSlots.map((dd => (0, MW.jsx)("div", {
                  children: ld(dd)
                }, dd)))
              })]
            })]
          }), null !== vd && (0, MW.jsx)(bP, {
            stored: vd,
            cap: xd,
            rates: null !== (Cd = null === Ld || void 0 === Ld ? void 0 : Ld.powerRates) && void 0 !== Cd ? Cd : null
          }), null !== Gd && (0, MW.jsx)("div", {
            className: iN()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Gd
            }),
            children: Qd(GZ(bZ, Gd, Ld, !1))
          }), Id && Id.inputs.length > 1 && (0, MW.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Qd("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, MW.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, MW.jsx)(ZP, {
            taught: ed,
            tier: Od
          }), Id && (0, MW.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Qd("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function jZ(dd) {
      var Jd;
      const kd = null !== (Jd = XJ[bZ].inputSlots) && void 0 !== Jd ? Jd : [];
      return {
        render: Jd => {
          let {
            zd: kd,
            renderSlot: pd
          } = Jd;
          return (0, MW.jsx)(SZ, {
            zd: kd,
            store: dd,
            renderSlot: pd
          })
        },
        quickMoveRange: [Math.min(...kd), Math.max(...kd) + 1],
        className: qZ(bZ)
      }
    }
    var XZ = kd(95),
      fZ = kd(1140),
      nZ = kd(4090);
    const UZ = 600,
      yZ = .5,
      DZ = 4,
      TZ = 1200,
      EZ = 140,
      cZ = 100,
      hZ = 32,
      rZ = 16,
      uZ = 100.5,
      tZ = 90,
      VZ = 1.5,
      zZ = 50;

    function HZ(dd) {
      switch (Sk(dd)) {
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
    const wZ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function AZ(dd) {
      const Jd = Math.ceil(60 * dd / cZ);
      return {
        fuel: Math.max(hZ, Jd),
        waste: Math.max(rZ, Jd)
      }
    }

    function dg(dd, Jd, kd) {
      const [pd, Nd, Wd] = [dd - 2, Jd - 2, kd - 2];
      return 2 * (pd * Nd + Nd * Wd + Wd * pd) * EZ
    }

    function Jg(dd, Jd, kd) {
      return Math.max(0, dd - 2) * Math.max(0, Jd - 2) * Math.max(0, kd - 2)
    }

    function kg(dd, Jd) {
      const [kd, pd, Nd] = dd, Wd = kd * pd * Nd, Pd = new Float32Array(Wd);
      let Zd = 0,
        gd = 0,
        Cd = 0,
        Kd = 0,
        od = 0;
      const ld = (dd, Wd, Pd) => dd < 0 || dd >= kd || Wd < 0 || Wd >= pd || Pd < 0 || Pd >= Nd ? 0 : Jd[(Wd * Nd + Pd) * kd + dd];
      for (let ed = 0; ed < pd; ed++)
        for (let dd = 0; dd < Nd; dd++)
          for (let pd = 0; pd < kd; pd++) {
            const Wd = (ed * Nd + dd) * kd + pd,
              Qd = Jd[Wd];
            if (1 === Qd) {
              Zd++;
              let Jd = 0;
              for (const [kd, Nd, Wd] of wZ) {
                const Pd = ld(pd + kd, ed + Nd, dd + Wd);
                1 !== Pd && 2 !== Pd || Jd++
              }
              Pd[Wd] = UZ * (1 + yZ * Math.min(Jd, DZ)), Kd += Pd[Wd]
            } else if (2 === Qd) gd++;
            else if (3 === Qd) {
              Cd++;
              wZ.some((Jd => {
                let [kd, Nd, Wd] = Jd;
                return 1 === ld(pd + kd, ed + Nd, dd + Wd)
              })) && (od += TZ)
            }
          }
      const Qd = dg(kd + 2, pd + 2, Nd + 2),
        Ld = Math.min(Kd, od, Qd),
        Od = Zd > 0 ? Kd * cZ / Zd : 0;
      return {
        rods: Zd,
        graphite: gd,
        channels: Cd,
        fuelHeat: Kd,
        cooling: od,
        size: Qd,
        max: Ld,
        vol: Wd,
        powerPerUnit: Od,
        pelletsPerMin: Od > 0 ? Ld / Od * 60 : 0,
        waterPerS: Ld * Ad.t,
        rodHeat: Pd
      }
    }
    const pg = 0,
      Ng = 1,
      Wg = 6,
      Pg = 7,
      Zg = 8;

    function gg(dd, Jd) {
      const [kd, pd, Nd] = dd, Wd = new Uint8Array(kd * pd * Nd), Pd = (dd, Wd, Pd) => dd < 0 || dd >= kd || Wd < 0 || Wd >= pd || Pd < 0 || Pd >= Nd ? 0 : Jd[(Wd * Nd + Pd) * kd + dd];
      for (let Zd = 0; Zd < pd; Zd++)
        for (let dd = 0; dd < Nd; dd++)
          for (let pd = 0; pd < kd; pd++) {
            const gd = (Zd * Nd + dd) * kd + pd,
              Cd = Jd[gd];
            if (1 === Cd) {
              let Jd = 0;
              for (const [kd, Nd, Wd] of wZ) {
                const gd = Pd(pd + kd, Zd + Nd, dd + Wd);
                Jd += 1 === gd || 2 === gd ? 1 : 0
              }
              Wd[gd] = Ng + Math.min(Jd, DZ)
            } else if (3 === Cd) {
              const Jd = wZ.some((Jd => {
                let [kd, Nd, Wd] = Jd;
                return 1 === Pd(pd + kd, Zd + Nd, dd + Wd)
              }));
              Wd[gd] = Jd ? Wg : Pg
            } else 2 === Cd && (Wd[gd] = Zg)
          }
      return Wd
    }

    function Cg(dd) {
      return dd.fuelHeat <= dd.cooling && dd.fuelHeat <= dd.size ? "fuel" : dd.cooling <= dd.size ? "cooling" : "size"
    }
    const Kg = tZ;

    function og(dd, Jd, kd) {
      return Math.round(dd * Jd * kd * 25e3 * (1 + .25 * (Math.min(dd, Jd, kd) - 2)))
    }

    function lg(dd) {
      return Math.max(0, Math.min(Ad.g, dd))
    }

    function Qg(dd, Jd, kd) {
      const pd = Jd * lg(kd);
      return dd <= 0 ? 0 : pd > 0 ? Math.min(200, 100 * dd / pd) : 200
    }

    function Lg(dd, Jd) {
      const kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? VZ : 1;
      return Math.min(dd.fuelHeat * kd, dd.cooling * lg(Jd), dd.size * kd)
    }

    function Og(dd) {
      return 2 + dd / 10
    }
    const eg = "buildAFactory2Game:";

    function Rg(dd) {
      var Jd;
      return null !== (Jd = dd.baf2RxMood) && void 0 !== Jd ? Jd : function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const kd = [
          ["calm", 50],
          ["warm", Kg],
          ["hot", uZ]
        ];
        for (const [pd, Nd] of kd)
          if (dd < Nd + (pd === Jd ? 3 : 0)) return pd;
        return "alarm"
      }(dd.baf2RxHeat)
    }
    const Ig = 120;

    function Gg(dd) {
      const Jd = dd.baf2RxState;
      if ("running" === Jd && dd.baf2RxHeat > uZ) return {
        label: `${eg}rxState_tooHot`,
        tone: "bad",
        fix: `${eg}rxFix_tooHot`
      };
      switch (Jd) {
        case "running":
          return {
            label: `${eg}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${eg}rxState_idle`, tone: "off", fix: `${eg}rxFix_idle`
          };
        case "scram":
          return {
            label: `${eg}rxState_scram`, tone: "off", fix: dd.baf2RxHeat < zZ ? `${eg}rxFix_scramCool` : `${eg}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${eg}rxState_${Jd}`, tone: "off", fix: `${eg}rxFix_${Jd}`
          };
        case "melted":
          return {
            label: `${eg}rxState_melted`, tone: "bad", fix: `${eg}rxFix_melted`
          };
        default:
          return {
            label: `${eg}rxState_${Jd}`, tone: "warn", fix: `${eg}rxFix_${Jd}`
          }
      }
    }

    function vg(dd) {
      const [Jd, kd, pd] = dd.baf2RxStats;
      return {
        fuelHeat: Jd,
        cooling: kd * (dd.baf2RxCryo ? Math.max(1, lg(dd.baf2RxWater / 100)) : 1),
        size: pd
      }
    }

    function xg(dd) {
      var Jd;
      const kd = "idle" === dd.baf2RxState || "running" === dd.baf2RxState && dd.baf2RxHeat <= uZ || "scram" === dd.baf2RxState && dd.baf2RxHeat < zZ;
      if (0 === (dd.baf2RxFlags & xJ) || !dd.baf2RxFormed || !kd) return null;
      const {
        fuelHeat: pd,
        cooling: Nd,
        size: Wd
      } = vg(dd), Pd = Math.min(pd, Nd, Wd), Zd = Cg({
        fuelHeat: pd,
        cooling: Nd,
        size: Wd
      }), gd = "cooling" === Zd && !0 === dd.baf2RxCryoOpen && !dd.baf2RxCryo, Cd = null !== (Jd = dd.baf2RxCells) && void 0 !== Jd ? Jd : "", Kd = ("fuel" === Zd || "cooling" === Zd && !0 === dd.baf2RxCryo) && Cd.length > 0 && !Cd.includes(String(0)), od = gd ? "Cryo" : "scram" === dd.baf2RxState ? "Off" : "";
      return Pd < 12e3 ? {
        key: `${eg}rxGrow_${Kd?"full":Zd}${od}`,
        amount: Pd
      } : null
    }

    function qg(dd, Jd) {
      return dd[0] === Jd[0] && dd[1] === Jd[1] && dd[2] === Jd[2]
    }

    function Bg(dd) {
      return [...dd].sort(((dd, Jd) => Number(Jd[2] < Jd[1]) - Number(dd[2] < dd[1])))
    }

    function sg(dd, Jd) {
      return Jd.some((Jd => {
        let [kd, pd] = Jd;
        return !(pd <= 0) && ["edge", "cap", "wall", "inside"].some((Jd => kd === Zp(dd, Jd)))
      }))
    }

    function ig(dd, Jd, kd) {
      const pd = dd.baf2RxFuel - dd.baf2RxPu > 0 ? kd : 0;
      return {
        full: dd.baf2RxWaste > Jd - 3,
        fullInS: pd > 0 ? Math.max(0, Jd - dd.baf2RxWaste) / pd : null
      }
    }
    const ag = {
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

    function Mg(dd) {
      return Fg[dd]
    }
    const Fg = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Yg(dd) {
      let [Jd, kd, pd] = dd;
      return Math.ceil(dg(Jd, kd, pd) * Ad.t)
    }

    function mg(dd, Jd) {
      return "battery" === dd ? Jd[0] * Jd[1] * Jd[2] : function(dd) {
        let [Jd, kd, pd] = dd;
        return Jd * kd * pd - Math.max(0, Jd - 2) * Math.max(0, kd - 2) * Math.max(0, pd - 2)
      }(Jd) - 1
    }

    function bg(dd) {
      const Jd = Math.max(0, dd);
      if (Jd < 10) return String(Math.round(10 * Jd) / 10);
      if (Jd < 1e4) return Math.round(Jd).toLocaleString("en-US");
      if (Jd < 1e6) return `${Jd<1e5?(Math.floor(Jd/100)/10).toFixed(1):Math.floor(Jd/1e3)}k`;
      const kd = Jd / 1e6;
      return `${kd<10?(Math.floor(100*kd)/100).toFixed(2):kd<100?(Math.floor(10*kd)/10).toFixed(1):Math.floor(kd)}M`
    }

    function Sg(dd) {
      return dd <= 0 ? "0" : dd >= 10 ? String(Math.round(dd)) : dd.toFixed(dd >= 1 ? 1 : 2)
    }

    function jg(dd) {
      const Jd = dp(dd, 0),
        kd = dp(dd, zk(dd) - 1);
      return {
        lo: [Math.min(Jd[0], kd[0]), Math.min(Jd[1], kd[1]), Math.min(Jd[2], kd[2])],
        hi: [Math.max(Jd[0], kd[0]) + 1, Math.max(Jd[1], kd[1]) + 1, Math.max(Jd[2], kd[2]) + 1]
      }
    }

    function Xg(dd, Jd, kd) {
      const pd = [Jd[0] - dd[0], Jd[1] - dd[1], Jd[2] - dd[2]],
        Nd = [(dd[0] + Jd[0]) / 2, (dd[1] + Jd[1]) / 2, (dd[2] + Jd[2]) / 2],
        Wd = [];
      for (let Pd = 0; Pd < 3; Pd++) {
        const Zd = (Pd + 1) % 3,
          gd = (Pd + 2) % 3;
        for (const Cd of [dd[Zd], Jd[Zd]])
          for (const Kd of [dd[gd], Jd[gd]]) {
            const dd = [0, 0, 0],
              Jd = [kd, kd, kd];
            dd[Pd] = Nd[Pd], Jd[Pd] = pd[Pd] + kd, dd[Zd] = Cd, dd[gd] = Kd, Wd.push([dd, Jd])
          }
      }
      return Wd
    }
    const fg = "buildAFactory2Game:",
      ng = [`${fg}colNorth`, `${fg}colEast`, `${fg}colSouth`, `${fg}colWest`];

    function Ug(dd, Jd) {
      const [kd, pd, Nd] = dd.baf2ColAt;
      return `baf2col ${kd} ${pd} ${Nd} ${Jd}`
    }

    function yg(dd) {
      return function(dd) {
        if (!Number.isFinite(dd)) return "";
        const Jd = Math.max(1, Math.round(dd));
        if (Jd < 60) return `${Jd}s`;
        const kd = Jd % 60;
        return 0 === kd ? Jd / 60 + "m" : `${Math.floor(Jd/60)}m ${kd}s`
      }(function(dd) {
        const Jd = gp.FOCUS_BY_LASERS[Math.max(0, Math.min(4, dd))];
        return Jd > 0 ? gp.NOVA_FOCUS / Jd : 1 / 0
      }(dd))
    }

    function Dg(dd) {
      const Jd = Math.abs(Math.round(dd));
      return Jd < 1e3 ? Math.round(dd).toLocaleString("en-US") : Jd < 1e6 ? `${Jd<1e5?(dd/1e3).toFixed(1).replace(/\.0$/,""):Math.round(dd/1e3)}k` : `${(dd/1e6).toFixed(Jd<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Tg(dd, Jd, kd) {
      if (Lp(Jd) >= 0) {
        const Jd = function(dd, Jd) {
          return dd.find((dd => {
            let {
              focus: kd
            } = dd;
            return kd[0] === Jd[0] && kd[2] === Jd[2] && (Jd[1] === kd[1] || Jd[1] === kd[1] - 1)
          }))
        }(dd, kd);
        if (!Jd) return null;
        const Nd = function(dd) {
          let Jd = 0,
            kd = 0;
          for (let pd = 0; pd < 4; pd++) Jd += dd.laser[pd] ? 1 : 0, kd += dd.live[pd] ? 1 : 0;
          return {
            lasers: Jd,
            live: kd,
            focusPerS: gp.FOCUS_BY_LASERS[kd],
            drawPerS: gp.LASER_DRAW * kd
          }
        }({
          laser: Jd.lasers,
          live: Jd.live
        });
        if (0 === Nd.lasers || "noLasers" === Jd.state) return {
          key: `${fg}lookColNoLasers`
        };
        if (0 === Nd.live) return {
          key: `${fg}lookColOff_blocked`
        };
        if (!(Jd.on && Nd.live > 0) && ("running" !== (pd = Jd.state) && "slowed" !== pd)) return {
          key: `${fg}lookColOff_${Jd.state}`
        };
        if (Nd.live < Nd.lasers) return {
          key: `${fg}lookColLasersSome`,
          params: {
            lasers: String(Nd.lasers),
            live: String(Nd.live)
          }
        };
        const Wd = Jd.open.filter(Boolean).length;
        return Wd < 4 ? {
          key: `${fg}lookColLasersSpots`,
          params: {
            live: String(Nd.live),
            spots: String(Wd),
            time: yg(Nd.live)
          }
        } : {
          key: `${fg}lookColLasers`,
          params: {
            live: String(Nd.live),
            time: yg(Nd.live)
          }
        }
      }
      var pd;
      if (!Op(Jd)) return null;
      const Nd = function(dd, Jd) {
        for (const kd of dd) {
          const dd = Gp(kd.focus, [Jd[0], Jd[1], Jd[2]]);
          if (dd && dd.gP === gp.LASER_D && kd.lasers[dd.dir]) return {
            entry: kd,
            dir: dd.dir
          }
        }
        return null
      }(dd, kd);
      if (!Nd) return {
        key: `${fg}lookLaserNoCollider`
      };
      const {
        entry: Wd,
        dir: Pd
      } = Nd;
      return Wd.open[Pd] ? Wd.live[Pd] ? {
        key: Wd.on ? `${fg}lookLaserFiring` : `${fg}lookLaserReady`
      } : {
        key: `${fg}lookLaserBlocked`
      } : {
        key: `${fg}lookLaserClosed`
      }
    }

    function Eg(dd, Jd) {
      const kd = [];
      for (let pd = 1; pd < gp.LASER_D; pd++) dd & 1 << Jd * (gp.LASER_D - 1) + pd - 1 && kd.push(pd);
      return kd
    }
    const cg = {
      firing: `${fg}colSlotFiring`,
      ready: `${fg}colSlotReady`,
      blocked: `${fg}colSlotBlocked`,
      empty: `${fg}colSlotEmpty`,
      closed: `${fg}colSlotClosed`
    };

    function hg(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Wd = gN(dd),
        Pd = gN(Jd),
        Zd = gN(kd),
        gd = Zd.filter(Boolean).length,
        Cd = Wd.filter(Boolean).length,
        Kd = [0, 1, 2, 3].map((dd => Pd[dd] ? Wd[dd] ? Zd[dd] ? pd ? "firing" : "ready" : "blocked" : (dd => Eg(Nd, dd).length > 0)(dd) ? "blocked" : "empty" : "closed")),
        od = Kd.indexOf("blocked"),
        ld = od < 0 && Cd > 0 ? Kd.indexOf("empty") : -1;
      return Kd.map(((dd, Jd) => {
        const kd = Jd === od ? {
          key: `${fg}colSlotClear`
        } : Jd === ld ? {
          key: `${fg}colSlotAdd`,
          params: {
            time: yg(Math.min(4, gd + 1))
          }
        } : null;
        return {
          dir: Jd,
          tone: dd,
          title: {
            key: "blocked" !== dd || Wd[Jd] ? cg[dd] : `${fg}colSlotGap`,
            keys: {
              dir: ng[Jd]
            }
          },
          hint: kd
        }
      }))
    }

    function rg(dd) {
      var Jd;
      return "noPower" === dd.baf2ColState && dd.baf2ColRxState ? Gg({
        baf2RxState: dd.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (Jd = dd.baf2ColRxHeat) && void 0 !== Jd ? Jd : 0
      }) : null
    }

    function ug(dd) {
      const Jd = gN(dd.baf2ColSpots).filter(Boolean).length,
        kd = gN(dd.baf2ColLive);
      let pd = 0,
        Nd = 0;
      return gN(dd.baf2ColLasers).forEach(((dd, Jd) => {
        dd && (pd++, Nd += kd[Jd] ? 0 : 1)
      })), Nd > 0 ? {
        key: `${fg}colSubSome`,
        params: {
          blocked: String(Nd),
          lasers: String(pd)
        }
      } : Jd < 4 ? {
        key: `${fg}colSubSpots`,
        params: {
          lasers: String(pd),
          spots: String(Jd)
        }
      } : {
        key: `${fg}colSub`,
        params: {
          lasers: String(pd)
        }
      }
    }

    function tg(dd) {
      const Jd = rg(dd);
      if ("idle" === dd.baf2ColRxState && Jd) return {
        key: `${fg}colState_noPowerIdle`
      };
      if (Jd) return {
        key: `${fg}colState_noPowerReactor`,
        keys: {
          state: Jd.label
        }
      };
      if ("noInput" !== dd.baf2ColState) return {
        key: `${fg}colState_${dd.baf2ColState}`
      };
      const kd = String(Math.max(0, gp.NOVA_SA - dd.baf2ColSa)),
        pd = String(Math.max(0, gp.NOVA_GD - dd.baf2ColGd));
      return "0" !== kd && "0" !== pd ? {
        key: `${fg}colState_noInput`,
        params: {
          sa: kd,
          gd: pd
        }
      } : "0" !== kd ? {
        key: `${fg}colState_noStarAlloy`,
        params: {
          sa: kd
        }
      } : "0" !== pd ? {
        key: `${fg}colState_noGlowDust`,
        params: {
          gd: pd
        }
      } : {
        key: `${fg}colState_running`
      }
    }

    function Vg(dd) {
      return dd.baf2ColP < 0 ? `${fg}colNext` : function(dd) {
        const Jd = dd.baf2ColState;
        return dd.baf2ColP >= 0 && ("blocked" === Jd || "noLasers" === Jd || "noPower" === Jd)
      }(dd) ? `${fg}colStalled` : null === zg(dd) ? `${fg}colMaking` : `${fg}colNovaIn`
    }

    function zg(dd) {
      if (dd.baf2ColP < 0 || dd.baf2ColWant <= 0) return null;
      const Jd = dd.baf2ColFocusPerS * Math.min(1, dd.baf2ColDraw / dd.baf2ColWant);
      return Jd > 0 ? Math.max(0, gp.NOVA_FOCUS - dd.baf2ColP) / Jd : null
    }

    function Hg(dd, Jd) {
      const kd = [];
      for (let pd = 1; pd <= 3; pd++) {
        const Nd = [dd[0], dd[1] - pd, dd[2]];
        if (!Jd(Nd)) return kd;
        kd.push(Nd)
      }
      return []
    }

    function wg(dd, Jd) {
      const kd = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let pd = 0; pd < 4; pd++) {
        const Nd = pd,
          Wd = Ip(dd.focus, Nd, gp.LASER_D);
        if (dd.lasers[pd] || !dd.open[pd] || !Jd(Wd)) continue;
        const Pd = [];
        for (let kd = 1; kd < gp.LASER_D; kd++) {
          const pd = Ip(dd.focus, Nd, kd);
          Jd(pd) || Pd.push(pd)
        }
        kd.supports.push(...Hg(Wd, Jd)), 0 === Pd.length ? kd.free.push(Wd) : (kd.blocked.push(Wd), kd.gaps.push(...Pd))
      }
      return kd
    }
    const Ag = gp.LASER_D - .25,
      dC = 4,
      JC = 2,
      kC = 16;
    const pC = {
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
        blendMode: nZ.d.Standard,
        soft: !0
      },
      NC = {
        green: pC,
        pink: {
          ...pC,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function WC(dd, Jd) {
      const kd = {
        ...Jd.params
      };
      for (const [Nd, Wd] of Object.entries(null !== (pd = Jd.keys) && void 0 !== pd ? pd : {})) {
        var pd;
        kd[Nd] = dd(Wd)
      }
      return kd
    }
    const PC = "buildAFactory2Game:",
      ZC = 2 * gp.LASER_D + 1,
      gC = gp.LASER_D;

    function CC(dd) {
      return dd(`${PC}colFocusTip`, {
        need: Dg(gp.NOVA_FOCUS)
      })
    }

    function KC(dd, Jd) {
      return dd(Jd.key, WC(dd, Jd))
    }

    function oC(dd) {
      const Jd = dd.getStatus();
      return {
        status: Jd,
        entry: Jd ? dd.entryAtRoot(Jd.baf2ColAt) : void 0
      }
    }

    function lC(dd, Jd) {
      return {
        left: 100 * (gC + dd) / ZC + "%",
        top: 100 * (gC + Jd) / ZC + "%"
      }
    }

    function QC(dd) {
      let {
        status: Jd,
        entry: kd
      } = dd;
      const pd = gN(Jd.baf2ColLasers),
        Nd = gN(Jd.baf2ColSpots),
        Wd = gN(Jd.baf2ColLive),
        Pd = !0 === (null === kd || void 0 === kd ? void 0 : kd.on),
        Zd = gp.LASER_D,
        gd = [];
      for (let Qd = 0; Qd < 4; Qd++) {
        const [dd, , Jd] = Rp[Qd];
        if (Wd[Qd]) {
          const kd = 100 * (Zd - 1) / ZC,
            pd = dd + Jd > 0 ? 100 * (gC + 1) / ZC : 100 * (gC - (Zd - 1)) / ZC,
            Nd = 100 * (gC + .35) / ZC,
            Wd = 30 / ZC,
            Cd = 0 !== dd ? {
              left: `${pd}%`,
              width: `${kd}%`,
              top: `${Nd}%`,
              height: `${Wd}%`
            } : {
              top: `${pd}%`,
              height: `${kd}%`,
              left: `${Nd}%`,
              width: `${Wd}%`
            };
          gd.push((0, MW.jsx)("i", {
            className: iN()("Baf2ColDiagramBeam", {
              Off: !Pd
            }),
            style: Cd
          }, `beam${Qd}`))
        }
        const kd = pd[Qd] ? "Baf2ColDiagramLaser" : Nd[Qd] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        gd.push((0, MW.jsx)("i", {
          className: kd,
          style: lC(dd * Zd, Jd * Zd)
        }, `spot${Qd}`))
      }
      for (let Qd = 0; Qd < 4; Qd++) {
        if (pd[Qd] || !Nd[Qd]) continue;
        const [dd, , kd] = Rp[Qd];
        for (const pd of Eg(null !== (Cd = Jd.baf2ColGaps) && void 0 !== Cd ? Cd : 0, Qd)) {
          var Cd;
          gd.push((0, MW.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: lC(dd * pd, kd * pd)
          }, `gap${Qd},${pd}`))
        }
      }
      for (const [Qd, , Ld] of null !== (Kd = null === kd || void 0 === kd ? void 0 : kd.blockers) && void 0 !== Kd ? Kd : []) {
        var Kd, od, ld;
        const dd = Qd - (null !== (od = null === kd || void 0 === kd ? void 0 : kd.focus[0]) && void 0 !== od ? od : 0),
          Jd = Ld - (null !== (ld = null === kd || void 0 === kd ? void 0 : kd.focus[2]) && void 0 !== ld ? ld : 0);
        gd.push((0, MW.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: lC(dd, Jd)
        }, `block${dd},${Jd}`))
      }
      return (0, MW.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [gd, (0, MW.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function LC(dd) {
      let {
        status: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)(), pd = gN(Jd.baf2ColLive).filter(Boolean).length;
      return (0, MW.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, MW.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: CC(kd),
          children: kd(`${PC}colLadder`)
        }), (0, MW.jsx)("ul", {
          children: [1, 2, 3, 4].map((dd => (0, MW.jsx)("li", {
            className: iN()({
              On: dd === pd
            }),
            children: kd(`${PC}colLadderChip`, {
              lasers: String(dd),
              time: yg(dd)
            })
          }, dd)))
        })]
      })
    }

    function OC(dd) {
      let {
        item: Jd,
        EC: kd,
        need: pd,
        cap: Nd
      } = dd;
      const {
        t: Wd
      } = (0, YN.B)(), Pd = Math.min(kd, pd);
      return (0, MW.jsxs)("li", {
        className: iN()("Baf2ColTile", {
          Short: kd < pd
        }),
        children: [(0, MW.jsx)(eC, {
          item: Jd
        }), (0, MW.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Wd(`${PC}colOutOf`, {
            amount: String(Pd),
            cap: String(pd)
          })
        }), (0, MW.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, MW.jsx)("i", {
            style: {
              width: 100 * Pd / pd + "%"
            }
          })
        }), kd > pd && (0, MW.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Wd(`${PC}colIntakeHeld`, {
            amount: String(kd),
            cap: String(Nd)
          })
        })]
      })
    }

    function eC(dd) {
      let {
        item: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)();
      return (0, MW.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, MW.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, MW.jsx)(bN.d, {
            itemName: Jd,
            amount: 0
          })
        }), (0, MW.jsx)("span", {
          className: "Baf2ColTileName",
          children: PW(kd, Jd)
        })]
      })
    }

    function RC(dd) {
      switch (dd.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function IC(dd) {
      var Jd, kd, Nd;
      let {
        store: Wd,
        close: Pd
      } = dd;
      const {
        t: Zd
      } = (0, YN.B)(), gd = cP(), {
        status: Cd,
        entry: Kd
      } = function(dd) {
        const [Jd, kd] = (0, pd.useState)((() => oC(dd)));
        return (0, pd.useEffect)((() => (kd(oC(dd)), dd.subscribe((() => {
          kd(oC(dd))
        })))), [dd]), Jd
      }(Wd), [od, ld] = (0, pd.useState)(null), Qd = null === Cd || void 0 === Cd ? void 0 : Cd.baf2ColHold;
      (0, pd.useEffect)((() => {
        ld(null)
      }), [Qd]);
      const Ld = (0, pd.useRef)({
          p: -1,
          n: 0
        }),
        Od = null !== (Jd = null === Cd || void 0 === Cd ? void 0 : Cd.baf2ColP) && void 0 !== Jd ? Jd : -1;
      Od < Ld.current.p && Ld.current.n++, Ld.current.p = Od;
      const ed = (0, pd.useRef)(null),
        [Rd] = (0, pd.useState)((() => {
          return (dd = Wd.heldAtOpen()) === op || dd === lp ? {
            key: `${fg}colBeltItIn`,
            item: dd
          } : null;
          var dd
        }));
      if (!Cd) return null;
      const Id = Cd.baf2ColMember,
        Gd = Cd.baf2ColP >= 0,
        vd = function(dd, Jd) {
          if (dd.baf2ColP >= 0 && dd.baf2ColDraw > 0) {
            const Jd = dd.baf2ColWant > 0 ? Math.min(1, dd.baf2ColDraw / dd.baf2ColWant) : 0;
            return {
              focus: dd.baf2ColFocusPerS * Jd,
              draw: dd.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === dd.baf2ColState && Jd && Jd.draw > 0 ? {
            ...Jd,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Cd, ed.current);
      ed.current = vd.draw > 0 ? vd : null;
      const xd = "slowed" === Cd.baf2ColState || "noPower" === Cd.baf2ColState,
        qd = zg(Cd),
        Bd = null !== od && void 0 !== od ? od : Cd.baf2ColHold,
        sd = function(dd) {
          var Jd, kd;
          return "idle" === dd.baf2ColRxState ? null : null !== (Jd = null === (kd = rg(dd)) || void 0 === kd ? void 0 : kd.fix) && void 0 !== Jd ? Jd : null
        }(Cd),
        ad = null === sd && null === Rd ? function(dd) {
          var Jd;
          const kd = dd.baf2ColSentTo;
          if (!kd) return null;
          const pd = null !== (Jd = dd.baf2ColSentHeld) && void 0 !== Jd ? Jd : null;
          return {
            key: null === pd ? `${fg}colNovaSentToMachine` : `${fg}colNovaSentTo`,
            target: kd,
            EC: pd
          }
        }(Cd) : null,
        Md = Gd ? Zd(`${PC}colFocusOf`, {
          focus: Dg(Cd.baf2ColP),
          need: Dg(gp.NOVA_FOCUS)
        }) : null;
      return (0, MW.jsx)(BP.e, {
        close: Pd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, MW.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, MW.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, MW.jsx)(bN.d, {
                  itemName: Cp,
                  amount: 0
                })
              }), (0, MW.jsxs)("div", {
                children: [(0, MW.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: PW(Zd, Cp)
                }), (0, MW.jsx)("p", {
                  children: KC(Zd, ug(Cd))
                })]
              })]
            }), (0, MW.jsx)(sP.i, {
              onClick: Pd
            })]
          }), (0, MW.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, MW.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, MW.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, MW.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: Zd(Vg(Cd), {
                    time: null === qd ? "" : BW(Zd, qd)
                  })
                }), (0, MW.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, MW.jsx)("i", {
                    style: {
                      width: (Gd ? 100 * Cd.baf2ColP / gp.NOVA_FOCUS : 0) + "%"
                    }
                  }, Ld.current.n)
                }), (0, MW.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, MW.jsxs)("span", {
                    title: CC(Zd),
                    children: [(0, MW.jsx)("b", {
                      children: Dg(vd.focus)
                    }), " ", Zd(`${PC}colFocusPerS`)]
                  }), (0, MW.jsxs)("span", {
                    className: iN()("Baf2ColDraw", {
                      Short: xd
                    }),
                    children: [(0, MW.jsx)(mN.e, {
                      name: "bolt"
                    }), xd ? Zd(`${PC}colDrawOf`, {
                      draw: Dg(Cd.baf2ColDraw),
                      want: Dg(Cd.baf2ColWant)
                    }) : Zd(`${PC}colPowerPerS`, {
                      rate: Dg(vd.draw)
                    })]
                  }), null !== Md && (0, MW.jsx)("span", {
                    className: "Soft",
                    children: Md
                  })]
                })]
              }), (0, MW.jsx)("p", {
                className: iN()("Baf2ColState", RC(Cd)),
                children: KC(Zd, tg(Cd))
              }), null !== sd && (0, MW.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Zd(sd)
              }), null === sd && null !== Rd && (0, MW.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Zd(Rd.key, {
                  item: PW(Zd, Rd.item)
                })
              }), ad && (0, MW.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Zd(ad.key, {
                  target: PW(Zd, ad.target),
                  amount: String(null !== (kd = ad.EC) && void 0 !== kd ? kd : 0)
                })
              }), (0, MW.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, MW.jsx)(OC, {
                  item: op,
                  EC: Cd.baf2ColSa,
                  need: gp.NOVA_SA,
                  cap: gp.SA_CAP
                }), (0, MW.jsx)(OC, {
                  item: lp,
                  EC: Cd.baf2ColGd,
                  need: gp.NOVA_GD,
                  cap: gp.GD_CAP
                }), (0, MW.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, MW.jsx)(eC, {
                    item: "Nova Matter"
                  }), (0, MW.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: Zd(`${PC}colNovaHeld`, {
                      amount: String(Cd.baf2ColOut),
                      cap: String(gp.OUT_CAP)
                    })
                  }), Id && (0, MW.jsx)(sP.j, {
                    className: "Baf2ColTake",
                    disabled: 0 === Cd.baf2ColOut,
                    onClick: () => {
                      gd.send(Ug(Cd, "take"))
                    },
                    children: Zd(`${PC}colTake`)
                  })]
                })]
              }), Id && (0, MW.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Bd,
                className: iN()("Baf2ColHold", {
                  On: Bd
                }),
                onClick: dd => {
                  dd.detail > 0 && dd.currentTarget.blur(), ld(!Bd), gd.send(Ug(Cd, "hold " + (Bd ? 0 : 1)))
                },
                children: [(0, MW.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, MW.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, MW.jsx)("b", {
                    children: Zd(`${PC}colHold`)
                  }), (0, MW.jsx)("span", {
                    children: Zd(`${PC}colHoldNote`)
                  })]
                })]
              })]
            }), (0, MW.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, MW.jsx)(QC, {
                status: Cd,
                entry: Kd
              }), (0, MW.jsx)("ul", {
                className: "Baf2ColSlots",
                children: hg(Cd.baf2ColLasers, Cd.baf2ColSpots, Cd.baf2ColLive, vd.beamsOn, null !== (Nd = Cd.baf2ColGaps) && void 0 !== Nd ? Nd : 0).map((dd => (0, MW.jsxs)("li", {
                  className: dd.tone,
                  children: [(0, MW.jsx)("b", {
                    children: KC(Zd, dd.title)
                  }), null !== dd.hint && (0, MW.jsx)("span", {
                    children: KC(Zd, dd.hint)
                  })]
                }, dd.dir)))
              }), (0, MW.jsx)(LC, {
                status: Cd
              })]
            })]
          })]
        })
      })
    }
    const GC = "buildAFactory2Game:",
      vC = 36e5,
      xC = 864e5;

    function qC(dd, Jd, kd) {
      return Math.max(0, Math.ceil((dd + Jd - Math.max(kd, dd)) / 1e3))
    }

    function BC(dd) {
      return dd.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function sC(dd) {
      return "Homestead" === dd
    }

    function iC(dd) {
      return function(dd) {
        let Jd = 0;
        for (const kd of dd) {
          const dd = /^Island ([1-9]\d{0,5})$/.exec(kd);
          dd && (Jd = Math.max(Jd, Number(dd[1])))
        }
        return `Island ${Jd+1}`
      }(dd.map((dd => dd.baf2IslandName)))
    }

    function aC(dd, Jd) {
      return function(dd) {
        return `${GC}islandsBlocked${dd[0].toUpperCase()}${dd.slice(1)}`
      }("degraded" === dd && 0 === Jd ? "stuck" : dd)
    }

    function MC(dd) {
      return dd.filter((dd => {
        var Jd;
        return !dd.baf2IslandActive && void 0 === dd.baf2IslandUnreadable && void 0 === (null === (Jd = dd.baf2IslandCoop) || void 0 === Jd ? void 0 : Jd.baf2CoopState)
      })).length
    }

    function FC(dd) {
      return "coopMoving" === dd || "coopUnreachable" === dd
    }

    function YC(dd, Jd) {
      const kd = Jd > 0;
      return {
        change: null === dd && !kd,
        switch: (null === dd || "degraded" === dd || FC(dd)) && !kd,
        rename: "loading" !== dd && "degraded" !== dd && "stuck" !== dd
      }
    }

    function mC(dd, Jd) {
      return void 0 === dd || "corrupt" === dd && Jd
    }
    const bC = fP;

    function SC(dd, Jd, kd) {
      if (null !== dd && void 0 !== dd && dd.untilGone) {
        var pd;
        return !("dismiss" === dd.untilGone && void 0 === (null === (pd = Jd.baf2IslandCoop) || void 0 === pd ? void 0 : pd.baf2CoopState)) && kd - dd.atMs < 32500
      }
      return void 0 !== dd && kd - dd.atMs < bC && Jd.baf2IslandName === dd.from
    }
    const jC = fP;

    function XC(dd) {
      return "core" === (null === dd || void 0 === dd ? void 0 : dd.kind) ? dd.core : "islands" === (null === dd || void 0 === dd ? void 0 : dd.kind) ? dd.backToCore : void 0
    }

    function fC(dd) {
      return `\0${dd}\0`
    }

    function nC(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const pd = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Wd of Object.keys(kd)) pd[Wd] = fC(Wd);
      let Nd = Object.keys(pd).length > 0 ? dd(Jd, pd) : dd(Jd);
      for (const [Wd, Pd] of Object.entries(kd)) Nd = Nd.split(fC(Wd)).join(Pd);
      return Nd
    }

    function UC(dd, Jd) {
      return dd ? Jd ? "enabled" : "disabled" : "hidden"
    }
    const yC = {
      removed: `${GC}islandsCoopRemoved`,
      deleted: `${GC}islandsCoopDeleted`,
      notReady: `${GC}islandsCoopNotReady`,
      gone: `${GC}islandsCoopGone`
    };

    function DC(dd) {
      var Jd;
      return "member" !== (null === (Jd = dd.baf2IslandCoop) || void 0 === Jd ? void 0 : Jd.baf2CoopRole) && "newer" !== dd.baf2IslandUnreadable
    }

    function TC(dd, Jd, kd, pd, Nd, Wd) {
      const Pd = dd.baf2IslandActive,
        Zd = dd.baf2IslandUnreadable,
        gd = dd.baf2IslandCoop,
        Cd = function(dd, Jd, kd) {
          return {
            switch: dd.switch && void 0 === Jd,
            delete: dd.change && mC(Jd, kd)
          }
        }(Jd, Zd, pd),
        Kd = Pd && void 0 !== gd && void 0 === gd.baf2CoopState && "coopUnreachable" === Wd,
        od = {
          switch: UC((!Pd || Kd) && void 0 === Zd, Kd || Cd.switch),
          switchLabel: Kd ? "tryAgain" : "switch",
          rename: UC(!0, Jd.rename),
          delete: UC(!Pd, Cd.delete),
          deleteWaits: !Pd && mC(Zd, pd),
          people: UC(void 0 !== dd.baf2IslandInvitable || Nd && Pd && void 0 === Zd && void 0 === gd, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        ld = !Pd && Cd.delete;
      if (void 0 === gd) return kd ? {
        ...od,
        delete: UC(!Pd, !1),
        deleteWaits: !1,
        note: ld ? {
          key: `${GC}islandsCoopKeepOwn`
        } : null
      } : od;
      const Qd = gd.baf2CoopState,
        Ld = gd.baf2CoopMembers.length > 1,
        Od = {
          ...od,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Qd && "member" === gd.baf2CoopRole) return {
        ...Od,
        dismiss: UC(!0, Jd.rename),
        note: {
          key: yC[Qd],
          names: {
            owner: gd.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Qd) {
        let dd = {
          key: `${GC}islandsCoopOwnLost`
        };
        return ld && Ld ? dd = {
          key: `${GC}islandsCoopDeleteMembers`
        } : ld && kd && (dd = {
          key: `${GC}islandsCoopKeepOwn`
        }), {
          ...Od,
          delete: UC(!Pd, Cd.delete && !Ld && !kd),
          deleteWaits: od.deleteWaits && !Ld && !kd,
          note: dd
        }
      }
      if ("member" === gd.baf2CoopRole) return {
        ...od,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: UC(!0, Pd ? Jd.switch : Jd.rename)
      };
      const ed = gd.baf2CoopManageHere;
      let Rd = null;
      var Id;
      ed || Pd ? ld && Ld ? Rd = {
        key: `${GC}islandsCoopDeleteMembers`
      } : ld && kd && (Rd = {
        key: `${GC}islandsCoopKeepOwn`
      }) : Rd = {
        key: null !== (Id = gd.baf2CoopLeft) && void 0 !== Id && Id.length ? `${GC}islandsCoopManageThereClaim` : `${GC}islandsCoopManageThere`
      };
      return {
        ...od,
        rename: UC(!0, Jd.rename && ed),
        delete: UC(!Pd, Cd.delete && !Ld && !kd),
        deleteWaits: od.deleteWaits && !Ld && !kd,
        people: "enabled",
        peopleLabel: "players",
        unshare: UC(ed && Pd && !Ld, Jd.change),
        remove: ed,
        note: Rd
      }
    }

    function EC(dd) {
      var Jd;
      const kd = dd.baf2IslandCoop;
      if ("owner" !== (null === kd || void 0 === kd ? void 0 : kd.baf2CoopRole) || void 0 !== kd.baf2CoopState || null === (Jd = kd.baf2CoopLeft) || void 0 === Jd || !Jd.length) return null;
      const pd = dd.baf2IslandActive && kd.baf2CoopManageHere;
      return {
        left: kd.baf2CoopLeft,
        claim: pd,
        goThere: !pd && kd.baf2CoopManageHere
      }
    }

    function cC(dd) {
      return dd.baf2CoopMembers.length >= dd.baf2CoopMax
    }

    function hC(dd, Jd, kd) {
      return void 0 !== dd && Jd < dd.answer && kd - dd.atMs < bC
    }
    const rC = "buildAFactory2Game:";

    function uC(dd, Jd) {
      return {
        onKeyDown: kd => {
          kd.stopPropagation(), kd.nativeEvent.isComposing || 229 === kd.nativeEvent.keyCode || ("Enter" === kd.key ? (kd.preventDefault(), dd()) : "Escape" === kd.key && (kd.preventDefault(), Jd()))
        }
      }
    }

    function tC(dd) {
      return {
        onKeyDown: Jd => {
          "Escape" !== Jd.key || Jd.nativeEvent.isComposing || (Jd.preventDefault(), Jd.stopPropagation(), dd())
        }
      }
    }

    function VC(dd) {
      dd.currentTarget.select()
    }

    function zC(dd, Jd) {
      (0, pd.useEffect)((() => {
        var kd;
        dd && (null === (kd = Jd.current) || void 0 === kd || kd.scrollIntoView({
          block: "nearest"
        }))
      }), [dd, Jd])
    }

    function HC(dd) {
      const [Jd, kd] = (0, pd.useState)(null);
      return (0, pd.useEffect)((() => {
        const Jd = document.querySelector(".UiRequests"),
          pd = dd.current;
        if (!Jd || !pd || "undefined" === typeof ResizeObserver) return;
        const Nd = () => {
          const dd = Jd.getBoundingClientRect(),
            Nd = pd.getBoundingClientRect(),
            Wd = pd.parentElement,
            Pd = Wd && parseFloat(getComputedStyle(Wd).paddingTop) || 0,
            Zd = function(dd, Jd, kd, pd) {
              if (!dd || dd.height <= 0 || dd.right <= Jd.left || dd.left >= Jd.right) return null;
              const Nd = Math.max(pd, dd.bottom + 8);
              return {
                marginTop: Math.round(Nd - pd),
                maxHeight: Math.max(0, Math.floor(kd - Nd - pd))
              }
            }(dd, Nd, window.innerHeight, Pd);
          kd((dd => (null === dd || void 0 === dd ? void 0 : dd.marginTop) === (null === Zd || void 0 === Zd ? void 0 : Zd.marginTop) && (null === dd || void 0 === dd ? void 0 : dd.maxHeight) === (null === Zd || void 0 === Zd ? void 0 : Zd.maxHeight) ? dd : Zd))
        };
        Nd();
        const Wd = new ResizeObserver(Nd);
        return Wd.observe(Jd), window.addEventListener("resize", Nd), () => {
          Wd.disconnect(), window.removeEventListener("resize", Nd)
        }
      }), [dd]), Jd
    }

    function wC() {
      (0, pd.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function AC(dd) {
      (0, pd.useEffect)((() => {
        var Jd;
        null === (Jd = dd.current) || void 0 === Jd || Jd.focus()
      }), [dd])
    }

    function dK(dd) {
      const [Jd, kd] = (0, pd.useState)(Date.now);
      return (0, pd.useEffect)((() => {
        const Jd = window.setInterval((() => {
          kd(Date.now())
        }), dd);
        return () => {
          window.clearInterval(Jd)
        }
      }), [dd]), Jd
    }

    function JK(dd) {
      let {
        tier: Jd,
        t: kd
      } = dd;
      const {
        kind: pd,
        short: Nd
      } = ed(Jd), Wd = Qd(Jd, Ld), Pd = kd(`${rC}${Wd.key}`, {
        ...Wd.params,
        name: kd(`${rC}${Rd(Jd).nameKey}`)
      });
      return (0, MW.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, MW.jsx)("span", {
          className: iN()("Baf2IslandTierPip", {
            Stage: "tier" !== pd
          }),
          "aria-hidden": "true",
          children: Nd
        }), Pd]
      })
    }

    function kK(dd) {
      let {
        note: Jd,
        className: kd,
        t: pd
      } = dd;
      return (0, MW.jsx)("p", {
        className: iN()("Baf2IslandNote", kd),
        children: nC(pd, Jd.key, Jd.names, Jd.params)
      })
    }
    const pK = "buildAFactory2Game:";

    function NK(dd) {
      let {
        message: Jd,
        arrivedAtMs: kd,
        close: Nd,
        leave: Wd
      } = dd;
      const Pd = cP(),
        {
          t: Zd
        } = (0, YN.B)(),
        gd = dK(1e3),
        Cd = (0, pd.useRef)(null);
      wC(), (0, pd.useEffect)((() => {
        var dd;
        null === (dd = Cd.current) || void 0 === dd || dd.focus()
      }), []);
      const Kd = qC(kd, Jd.baf2TransferInMs, gd),
        od = kd + Jd.baf2TransferInMs - 1e3,
        [ld, Qd] = (0, pd.useState)(null);
      (0, pd.useEffect)((() => {
        const dd = window.setTimeout((() => {
          Qd(od)
        }), Math.max(0, od - Date.now()));
        return () => {
          window.clearTimeout(dd)
        }
      }), [od]);
      const Ld = ld === od || gd >= od,
        Od = Jd.baf2TransferIsland,
        ed = Jd.baf2TransferOwner;
      return (0, MW.jsx)(BP.e, {
        close: Nd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, MW.jsxs)("section", {
          ref: Cd,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsxs)("div", {
              children: [(0, MW.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === ed ? nC(Zd, `${pK}islandsTransferOwn`, {
                  island: Od
                }) : nC(Zd, `${pK}islandsTransfer`, {
                  island: Od,
                  owner: ed
                })
              }), (0, MW.jsx)("p", {
                children: Ld ? Zd(`${pK}islandsTransferNow`) : Zd(`${pK}islandsTransferIn`, {
                  time: BW(Zd, Kd)
                })
              })]
            }), (0, MW.jsx)(sP.i, {
              ariaLabel: Zd(`${pK}islandsClose`),
              onClick: Nd
            })]
          }), !Ld && (0, MW.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, MW.jsx)("p", {
              className: "Baf2TransferNote",
              children: Zd(`${pK}islandsTransferNote`)
            }), (0, MW.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, MW.jsx)(sP.d, {
                onClick: () => {
                  Pd.send("baf2coopstay"), Wd()
                },
                children: Zd(`${pK}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var WK = kd(1459),
      PK = kd(1155),
      ZK = kd.n(PK);
    const gK = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const CK = "buildAFactory2Game:",
      KK = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function oK(dd, Jd, kd) {
      return void 0 === Jd ? kd : "string" === typeof Jd ? Jd : Array.isArray(Jd) ? Jd.map((Jd => "string" === typeof Jd ? Jd : "translationKey" in Jd ? dd(Jd.translationKey) : "")).join("") : dd(Jd.translationKey)
    }

    function lK(dd) {
      const Jd = {};
      for (const [kd, pd] of Object.entries(null !== dd && void 0 !== dd ? dd : {})) Jd[kd] = pd < 0 ? qW(pd) : pd.toLocaleString("en-US");
      return Jd
    }

    function QK(dd, Jd) {
      const kd = Jd ? "touch" : "mouse";
      return {
        use: dd(`${CK}lookUse_${kd}`),
        Use: dd(`${CK}lookUseStart_${kd}`)
      }
    }
    const LK = (0, pd.memo)((function(dd) {
      let {
        item: Jd
      } = dd;
      return (0, MW.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, MW.jsx)(bN.d, {
          itemName: Jd,
          amount: 0
        })
      })
    }));

    function OK(dd) {
      let {
        label: Jd,
        percent: kd,
        progress: pd
      } = dd;
      return (0, MW.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, MW.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${Jd}: ${pd}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": kd,
          children: (0, MW.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${kd}%`
            }
          })
        }), (0, MW.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: pd
        })]
      })
    }

    function eK(dd) {
      let {
        chips: Jd
      } = dd;
      return (0, MW.jsx)("span", {
        className: "Baf2QuestChips",
        children: Jd.map((dd => {
          let [Jd, kd, pd] = dd;
          const Nd = kd >= pd;
          return (0, MW.jsxs)("span", {
            className: iN()("Baf2QuestChip", {
              Met: Nd
            }),
            children: [(0, MW.jsx)(LK, {
              item: Jd
            }), (0, MW.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Nd ? `\u2713${pd}` : `${kd}/${pd}`
            })]
          }, Jd)
        }))
      })
    }

    function RK(dd, Jd) {
      const {
        key: kd,
        params: pd
      } = Qd(Jd, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return dd(`${CK}${kd}`, {
        ...pd,
        name: dd(`${CK}${Rd(Jd).nameKey}`)
      })
    }

    function IK(dd) {
      let {
        core: Jd,
        t: kd
      } = dd;
      const [pd, Nd] = Jd, Wd = Nd > 0 ? Math.floor(100 * pd / Nd) : 100;
      return (0, MW.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": kd(`${CK}questCoreLabel`, {
          have: String(pd),
          need: String(Nd)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Wd,
        children: [(0, MW.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: kd(`${CK}questCore`, {
            percent: String(Wd)
          })
        }), (0, MW.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, MW.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Wd}%`
            }
          })
        })]
      })
    }

    function GK(dd) {
      let {
        rows: Jd,
        t: kd
      } = dd;
      const pd = Jd.filter((dd => dd.done)).length;
      return (0, MW.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": kd(`${CK}questStepsProgress`, {
          done: String(pd),
          total: String(Jd.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": Jd.length,
        "aria-valuenow": pd,
        children: Jd.map((dd => (0, MW.jsx)("span", {
          className: iN()("Baf2QuestSegment", {
            Done: dd.done,
            Current: dd.current
          })
        }, dd.id)))
      })
    }
    const vK = (0, pd.memo)(qK, xK);

    function xK(dd, Jd) {
      const kd = kd => dd.view.itemNames[kd] === Jd.view.itemNames[kd];
      return dd.t === Jd.t && dd.extra === Jd.extra && (null === dd.row.item || kd(dd.row.item)) && dd.row.madeFor.every(kd) && dd.row.also.every(kd) && ZK()(dd.row, Jd.row)
    }

    function qK(dd) {
      let {
        row: Jd,
        view: kd,
        t: pd,
        extra: Nd
      } = dd;
      const {
        isTouchScreen: Wd
      } = (0, qN.j)(["isTouchScreen"]), Pd = Jd.item ? function(dd, Jd, kd) {
        return 1 !== kd && gK.has(dd) ? FN(Jd) : null
      }(Jd.key, Jd.item, Jd.total) : null, Zd = Pd ? pd(Pd) : Jd.item ? oK(pd, kd.itemNames[Jd.item], Jd.item) : "", gd = Jd.also.map((dd => oK(pd, kd.itemNames[dd], dd))), Cd = gd.join(", "), Kd = function(dd, Jd) {
        var kd;
        return Jd.length < 2 ? null !== (kd = Jd[0]) && void 0 !== kd ? kd : "" : dd(`${CK}listAnd`, {
          rest: Jd.slice(0, -1).join(dd(`${CK}listComma`)),
          last: Jd[Jd.length - 1]
        })
      }(pd, [Zd, ...gd]), od = pd(`${CK}${Jd.key}`, {
        ...QK(pd, Wd),
        ...lK(Jd.params),
        item: Zd,
        also: Cd,
        itemList: Kd,
        total: String(Jd.total)
      }), [ld, ...Qd] = od.split("\n"), Ld = Jd.total > 1 && !Jd.done && !Jd.away;
      return (0, MW.jsxs)("li", {
        className: iN()("Baf2QuestStep", {
          Done: Jd.done,
          Current: Jd.current,
          JustFinished: Jd.justFinished,
          Away: Jd.away
        }),
        children: [!Jd.done && null !== Jd.item && (0, MW.jsx)(LK, {
          item: Jd.item
        }), (Jd.done || null === Jd.item) && (0, MW.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: Jd.done ? "\u2713" : "\u25cb"
        }), (0, MW.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, MW.jsx)("strong", {
            children: ld
          }), Qd.length > 0 && (0, MW.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Qd.join(" ")
          }), !Jd.done && Jd.madeFor.length > 0 && (0, MW.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: pd("buildAFactory2Game:questRowFor", {
              items: Jd.madeFor.map((dd => oK(pd, kd.itemNames[dd], dd))).join(" \u2192 ")
            })
          }), Ld && (0, MW.jsx)(OK, {
            label: ld,
            percent: Math.round(100 * Jd.amount / Jd.total),
            progress: `${Jd.amount.toLocaleString("en-US")}/${Jd.total.toLocaleString("en-US")}`
          }), !Jd.done && !Jd.away && Jd.chips && Jd.chips.length > 0 && (0, MW.jsx)(eK, {
            chips: Jd.chips
          }), Nd]
        })]
      })
    }

    function BK(dd, Jd) {
      let [kd, pd] = Jd;
      return dd(`${CK}${kd}`, lK(pd))
    }

    function sK(dd) {
      let [Jd, kd] = dd;
      return Jd + JSON.stringify(kd)
    }

    function iK(dd) {
      let {
        goal: Jd,
        t: kd
      } = dd;
      return Jd ? (0, MW.jsx)("span", {
        className: "Baf2BookGoal",
        children: kd(`${CK}${Jd}`)
      }) : null
    }

    function aK(dd) {
      let {
        view: Jd,
        t: kd
      } = dd;
      if (!Jd.name) return null;
      const pd = rN(Jd.rows);
      return (0, MW.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, MW.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: kd(`${CK}currentQuest`)
        }), (0, MW.jsx)("strong", {
          className: "Baf2BookTitle",
          children: BK(kd, Jd.name)
        }), (0, MW.jsx)(iK, {
          goal: Jd.goal,
          t: kd
        }), pd.length > 1 && (0, MW.jsx)(GK, {
          rows: pd,
          t: kd
        }), (0, MW.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: Jd.rows.map((dd => (0, MW.jsx)(vK, {
            row: dd,
            view: Jd,
            t: kd
          }, dd.id)))
        }), Jd.reward && (0, MW.jsxs)("span", {
          className: "Baf2BookReward",
          children: [kd(`${CK}questReward`), (0, MW.jsx)(LK, {
            item: Jd.reward
          }), oK(kd, Jd.itemNames[Jd.reward], Jd.reward)]
        })]
      })
    }

    function MK(dd) {
      let {
        quest: Jd,
        upcoming: kd,
        t: pd
      } = dd;
      return (0, MW.jsxs)("li", {
        className: iN()("Baf2BookQuest", {
          Done: Jd[3],
          Upcoming: kd
        }),
        children: [(0, MW.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: Jd[3] ? "\u2713" : "\u25cb"
        }), (0, MW.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, MW.jsx)("strong", {
            className: "Baf2BookTitle",
            children: BK(pd, Jd)
          }), (0, MW.jsx)(iK, {
            goal: Jd[2],
            t: pd
          })]
        })]
      })
    }

    function FK(dd) {
      let {
        done: Jd,
        total: kd,
        t: pd
      } = dd;
      const Nd = kd > 0 ? Math.round(100 * Jd / kd) : 0,
        Wd = pd(`${CK}questBookChapterProgress`, {
          done: String(Jd),
          total: String(kd)
        });
      return (0, MW.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, MW.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Wd,
          "aria-valuemin": 0,
          "aria-valuemax": kd,
          "aria-valuenow": Jd,
          children: (0, MW.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Nd}%`
            }
          })
        }), (0, MW.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Wd
        })]
      })
    }

    function YK(dd) {
      let {
        view: Jd,
        tier: kd,
        quests: pd,
        t: Nd
      } = dd;
      const Wd = kd === Jd.tier,
        Pd = (null !== pd && void 0 !== pd ? pd : []).filter((dd => !dd[4])),
        Zd = (null !== pd && void 0 !== pd ? pd : []).filter((dd => dd[4])),
        gd = Pd.filter((dd => dd[3])).length,
        Cd = Wd && Jd.name ? sK(Jd.name) : null,
        Kd = Pd.findIndex((dd => !dd[3] && sK(dd) === Cd));
      return (0, MW.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, MW.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, MW.jsx)("h3", {
            children: RK(Nd, kd)
          }), Pd.length > 0 && (0, MW.jsx)(FK, {
            done: gd,
            total: Pd.length,
            t: Nd
          }), Wd && Jd.core && (0, MW.jsx)(IK, {
            core: Jd.core,
            t: Nd
          })]
        }), (0, MW.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === pd && Wd && (0, MW.jsx)(aK, {
            view: Jd,
            t: Nd
          }), Pd.map(((dd, kd) => kd === Kd ? (0, MW.jsx)(aK, {
            view: Jd,
            t: Nd
          }, sK(dd)) : (0, MW.jsx)(MK, {
            quest: dd,
            upcoming: !dd[3],
            t: Nd
          }, sK(dd))))]
        }), Wd && Jd.side && (0, MW.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, MW.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Nd(`${CK}questSide`)
          }), (0, MW.jsx)("strong", {
            className: "Baf2BookTitle",
            children: BK(Nd, Jd.side.name)
          }), (0, MW.jsx)(iK, {
            goal: Jd.side.goal,
            t: Nd
          }), (0, MW.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, MW.jsx)(vK, {
              row: Jd.side.row,
              view: Jd,
              t: Nd
            })
          })]
        }), Zd.length > 0 && (0, MW.jsxs)(MW.Fragment, {
          children: [(0, MW.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Nd(`${CK}questBookSidesDone`)
          }), (0, MW.jsx)("ol", {
            className: "Baf2BookQuests",
            children: Zd.map((dd => (0, MW.jsx)(MK, {
              quest: dd,
              upcoming: !1,
              t: Nd
            }, sK(dd))))
          })]
        })]
      })
    }

    function mK(dd) {
      var Jd, kd, Wd;
      let {
        store: Pd,
        close: Zd
      } = dd;
      const {
        t: gd
      } = (0, YN.B)(), Cd = (0, WK.i)(UN, Pd.get()), od = null !== (Jd = Cd.tier) && void 0 !== Jd ? Jd : 1, [ld, Qd] = (0, pd.useState)(null), Ld = (null === ld || void 0 === ld ? void 0 : ld.at) === od ? ld.tier : od, Rd = (0, pd.useRef)(null), Id = null !== Cd.chapters;
      (0, pd.useEffect)((() => {
        var dd;
        Rd.current && (Rd.current.scrollTop = 0);
        const Jd = null === (dd = Rd.current) || void 0 === dd ? void 0 : dd.querySelector(".Baf2BookQuest.Current");
        if (Rd.current && Jd) {
          const dd = Jd.getBoundingClientRect().bottom - Rd.current.getBoundingClientRect().bottom;
          dd > 0 && (Rd.current.scrollTop += Math.min(dd, Jd.getBoundingClientRect().top - Rd.current.getBoundingClientRect().top))
        }
      }), [Ld, Id]);
      const Gd = null === (kd = Cd.chapters) || void 0 === kd ? void 0 : kd.find((dd => {
        let [Jd] = dd;
        return Jd === Ld
      }));
      return (0, MW.jsx)(BP.e, {
        close: Zd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, MW.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: KK,
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: gd(`${CK}questBookTitle`)
            }), (0, MW.jsx)(sP.i, {
              onClick: Zd
            })]
          }), (0, MW.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": gd(`${CK}questBookChapters`),
            children: Nd.slice(0, Kd()).map(((dd, Jd) => {
              const kd = Jd + 1,
                {
                  kind: pd,
                  short: Nd
                } = ed(kd),
                Wd = Od(kd, od),
                Pd = Wd ? gd(`${CK}coreAtomicHidden`) : RK(gd, kd);
              return (0, MW.jsx)("li", {
                children: (0, MW.jsx)("button", {
                  type: "button",
                  className: iN()({
                    Stage: "tier" !== pd,
                    Atomic: "atomic" === pd,
                    Current: kd === od,
                    Selected: kd === Ld
                  }),
                  disabled: kd > od,
                  "aria-pressed": kd === Ld,
                  "aria-label": Pd,
                  title: Wd ? void 0 : Pd,
                  onClick: () => {
                    Qd({
                      tier: kd,
                      at: od
                    })
                  },
                  children: Wd ? "?" : Nd
                })
              }, dd.nameKey)
            }))
          }), (0, MW.jsxs)("div", {
            ref: Rd,
            className: "Baf2BookBody",
            children: [cN(Cd) && Ld === od && (0, MW.jsx)("p", {
              className: "Baf2BookEmpty",
              children: gd(`${CK}questBookAllDone`)
            }), (0, MW.jsx)(YK, {
              view: Cd,
              tier: Ld,
              quests: null !== (Wd = null === Gd || void 0 === Gd ? void 0 : Gd[1]) && void 0 !== Wd ? Wd : null,
              t: gd
            })]
          })]
        })
      })
    }
    const bK = "buildAFactory2Game:";

    function SK(dd) {
      let {
        tiers: Jd,
        from: kd,
        tier: pd,
        shown: Nd,
        Tl: Wd
      } = dd;
      const {
        t: Pd
      } = (0, YN.B)(), Zd = Jd.map(((dd, Jd) => {
        const Zd = kd + Jd,
          {
            kind: gd,
            short: Cd
          } = ed(Zd),
          Kd = Od(Zd, pd);
        return (0, MW.jsx)("li", {
          children: (0, MW.jsx)("button", {
            type: "button",
            className: iN()({
              Stage: "tier" !== gd,
              Silhouette: Kd,
              Reached: Zd <= pd,
              Current: Zd === pd,
              Next: Zd === pd + 1,
              Selected: Zd === Nd
            }),
            disabled: Kd,
            "aria-pressed": Zd === Nd,
            "aria-label": Kd ? Pd(`${bK}coreAtomicHidden`) : void 0,
            title: Kd ? void 0 : Pd(`${bK}${dd.nameKey}`),
            onClick: () => {
              Wd(Zd)
            },
            children: Kd ? "?" : Cd
          })
        }, dd.nameKey)
      }));
      return (0, MW.jsx)(MW.Fragment, {
        children: Zd
      })
    }

    function jK(dd) {
      let {
        id: Jd,
        label: kd,
        tiers: pd,
        from: Nd,
        ...Wd
      } = dd;
      return (0, MW.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, MW.jsx)("span", {
          id: Jd,
          className: "Baf2CoreLadderLabel",
          children: kd
        }), (0, MW.jsx)("ol", {
          "aria-labelledby": Jd,
          children: (0, MW.jsx)(SK, {
            ...Wd,
            tiers: pd,
            from: Nd
          })
        })]
      })
    }

    function XK(dd) {
      const {
        t: Jd
      } = (0, YN.B)(), kd = Nd.findIndex((dd => void 0 !== dd.stage)), pd = Nd.findIndex((dd => void 0 !== dd.reactorTier)), Wd = kd < 0 ? Nd : Nd.slice(0, kd), Pd = kd < 0 ? [] : Nd.slice(kd, pd < 0 ? void 0 : pd), gd = pd < 0 || !Zd() ? [] : Nd.slice(pd);
      return (0, MW.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, MW.jsx)(jK, {
          ...dd,
          id: "baf2CoreTiersLabel",
          label: Jd(`${bK}coreTiersLabel`),
          tiers: Wd,
          from: 1
        }), Pd.length > 0 && (0, MW.jsx)(jK, {
          ...dd,
          id: "baf2CoreStagesLabel",
          label: Jd(`${bK}coreStagesLabel`),
          tiers: Pd,
          from: kd + 1
        }), gd.length > 0 && (0, MW.jsx)(jK, {
          ...dd,
          id: "baf2CoreAtomicLabel",
          label: Jd(`${bK}coreAtomicLabel`),
          tiers: gd,
          from: pd + 1
        })]
      })
    }
    const fK = "buildAFactory2Game:";

    function nK(dd) {
      let {
        item: Jd,
        itemNames: kd,
        children: pd
      } = dd;
      return (0, MW.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, MW.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, MW.jsx)(bN.d, {
            itemName: Jd,
            amount: 0
          })
        }), (0, MW.jsx)(SN.c, {
          text: kd[Jd]
        }), pd]
      })
    }

    function UK(dd) {
      const Jd = new Map;
      for (const {
          block: pd
        }
        of dd.newDeposits) {
        var kd;
        Jd.set(pd, (null !== (kd = Jd.get(pd)) && void 0 !== kd ? kd : 0) + 1)
      }
      return [...Jd]
    }

    function yK(dd) {
      let {
        value: Jd,
        label: kd,
        more: pd
      } = dd;
      return (0, MW.jsxs)("li", {
        children: [(0, MW.jsx)("strong", {
          children: Jd
        }), (0, MW.jsx)("span", {
          children: kd
        }), pd > 0 && (0, MW.jsxs)("em", {
          children: ["+", pd]
        })]
      })
    }

    function DK(dd) {
      let {
        items: Jd,
        itemNames: kd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)(), [Wd, Pd] = (0, pd.useState)(null), Zd = null !== Wd && Jd.includes(Wd) ? Wd : null;
      return (0, MW.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, MW.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Nd(`${fK}coreRewardUnlocks`)
        }), (0, MW.jsx)("ul", {
          children: Jd.map((dd => (0, MW.jsx)("li", {
            children: (0, MW.jsx)("button", {
              type: "button",
              className: iN()("Baf2PanelIcon", {
                Picked: dd === Zd
              }),
              title: PW(Nd, dd),
              "aria-label": PW(Nd, dd),
              "aria-pressed": dd === Zd,
              onClick: () => {
                Pd(dd === Zd ? null : dd)
              },
              children: (0, MW.jsx)(bN.d, {
                itemName: dd,
                amount: 0
              })
            })
          }, dd)))
        }), (0, MW.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== Zd && (0, MW.jsxs)(MW.Fragment, {
            children: [(0, MW.jsx)(SN.c, {
              text: kd[Zd]
            }), " \xb7 ", (0, MW.jsx)(SN.c, {
              text: kd[md(Zd)]
            })]
          }), null === Zd && Nd(`${fK}coreRecipeTap`)]
        })]
      })
    }

    function TK(dd) {
      var Jd, kd;
      let {
        def: pd,
        tier: Nd,
        itemNames: Wd
      } = dd;
      const {
        t: Pd
      } = (0, YN.B)(), Zd = Nd > 1 ? Rd(Nd - 1) : void 0, gd = Math.round(2 * pd.islandRadius), Cd = Zd ? Math.round(2 * Zd.islandRadius) : gd, Kd = Nd >= 3 ? Bp(Nd) : null;
      return (0, MW.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, MW.jsxs)("ul", {
          className: iN()("Baf2CoreStats", {
            Four: null !== Kd
          }),
          children: [(0, MW.jsx)(yK, {
            value: `${gd}\xd7${gd}`,
            label: Pd(`${fK}coreStatIsland`),
            more: gd - Cd
          }), (0, MW.jsx)(yK, {
            value: String(pd.machineAllowance),
            label: Pd(`${fK}coreStatMachines`),
            more: pd.machineAllowance - (null !== (Jd = null === Zd || void 0 === Zd ? void 0 : Zd.machineAllowance) && void 0 !== Jd ? Jd : pd.machineAllowance)
          }), (0, MW.jsx)(yK, {
            value: String(pd.beltAllowance),
            label: Pd(`${fK}coreStatBelts`),
            more: pd.beltAllowance - (null !== (kd = null === Zd || void 0 === Zd ? void 0 : Zd.beltAllowance) && void 0 !== kd ? kd : pd.beltAllowance)
          }), null !== Kd && (0, MW.jsx)(yK, {
            value: String(Kd),
            label: Pd(`${fK}coreStatStorage`),
            more: Kd - (Zd ? Bp(Nd - 1) : Kd)
          })]
        }), pd.reward && (0, MW.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, MW.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Pd(`${fK}coreRewardItem`)
          }), (0, MW.jsx)(nK, {
            item: pd.reward,
            itemNames: Wd
          })]
        }), pd.newDeposits.length > 0 && (0, MW.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, MW.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Pd(pd.newDeposits.length > 1 ? `${fK}coreRewardDeposits` : `${fK}coreRewardDeposit`)
          }), UK(pd).map((dd => {
            let [Jd, kd] = dd;
            return (0, MW.jsx)(nK, {
              item: Jd,
              itemNames: Wd,
              children: kd > 1 && ` \xd7${kd}`
            }, Jd)
          }))]
        }), pd.unlocks.length > 0 && (0, MW.jsx)(DK, {
          items: pd.unlocks,
          itemNames: Wd
        }), (0, MW.jsx)(EK, {
          tier: Nd
        })]
      })
    }

    function EK(dd) {
      let {
        tier: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)(), pd = IN[Jd];
      if (!pd) return null;
      const Nd = RN(Jd, 0, 0).barrierMax !== RN(Jd - 1, 0, 0).barrierMax;
      return (0, MW.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, MW.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, MW.jsx)(bN.d, {
            itemName: Nd ? oN.Chestplate : KN,
            amount: 0
          })
        }), kd(`${fK}gearPerkLine`, {
          perk: kd(`${fK}${pd}`)
        })]
      })
    }

    function cK(dd, Jd) {
      return null === dd ? Jd : dd.value
    }

    function hK(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === dd || kd - dd.atMs >= pd ? null : Nd(dd.value, Jd) ? dd.armed ? null : dd : dd.armed ? dd : {
        ...dd,
        armed: !0
      }
    }

    function rK(dd, Jd) {
      const kd = Jd.filter((Jd => {
        var kd;
        return !1 !== (null === (kd = dd.get(Jd)) || void 0 === kd ? void 0 : kd.value)
      }));
      for (const [pd, Nd] of dd) Nd.value && !Jd.includes(pd) && kd.push(pd);
      return kd
    }

    function uK(dd, Jd, kd, Nd) {
      const [Wd, Pd] = (0, pd.useState)((() => new Map)), Zd = () => {
        Pd((Jd => function(dd, Jd, kd, pd) {
          var Nd;
          let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Pd = null;
          for (const [Zd, gd] of dd) {
            const Nd = hK(gd, Jd(Zd), kd, pd, Wd);
            Nd !== gd && (Pd ??= new Map(dd), null === Nd ? Pd.delete(Zd) : Pd.set(Zd, Nd))
          }
          return null !== (Nd = Pd) && void 0 !== Nd ? Nd : dd
        }(Jd, dd, Date.now(), kd, Nd)))
      };
      (0, pd.useEffect)((() => {
        Zd()
      }), [Jd, kd]), (0, pd.useEffect)((() => {
        if (0 === Wd.size) return;
        const dd = Math.min(...[...Wd.values()].map((dd => dd.atMs))),
          Jd = setTimeout(Zd, Math.max(0, dd + kd - Date.now()) + 1);
        return () => {
          clearTimeout(Jd)
        }
      }), [Wd, Jd, kd]);
      return [Wd, (Jd, kd) => {
        Pd((pd => {
          const Wd = new Map(pd);
          return Wd.set(Jd, function(dd, Jd, kd) {
            return {
              value: dd,
              atMs: kd,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(dd, Jd)
            }
          }(kd, dd(Jd), Date.now(), Nd)), Wd
        }))
      }]
    }
    const tK = "buildAFactory2Game:";

    function VK(dd) {
      let {
        message: Jd,
        itemNames: kd
      } = dd;
      const Nd = cP(),
        {
          t: Wd
        } = (0, YN.B)(),
        [Pd, Zd] = (0, pd.useState)(!1),
        [gd, Cd] = function(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fP;
          const [kd, pd] = uK((Jd => dd.includes(Jd)), dd, Jd, Object.is);
          return [rK(kd, dd), pd]
        }(Jd.baf2CoreBankPaused),
        Kd = new Set(gd),
        od = [...Jd.baf2CoreBanked];
      for (const pd of Kd) od.some((dd => {
        let [Jd] = dd;
        return Jd === pd
      })) || od.push([pd, 0]);
      return 0 === od.length ? null : (0, MW.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, MW.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Pd,
          onClick: () => {
            Zd(!Pd)
          },
          children: [(0, MW.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Wd(`${tK}coreBankedLater`)
          }), (0, MW.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: od.map((dd => {
              let [Jd, kd] = dd;
              const pd = Kd.has(Jd);
              return (0, MW.jsxs)("span", {
                className: iN()({
                  Paused: pd
                }),
                title: pd ? Wd(`${tK}coreBankPausedTag`) : void 0,
                children: [(0, MW.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, MW.jsx)(bN.d, {
                    itemName: Jd,
                    amount: 0
                  })
                }), kd, pd && (0, MW.jsx)(mN.e, {
                  name: "pause"
                })]
              }, Jd)
            }))
          }), (0, MW.jsx)(mN.e, {
            name: Pd ? "angle-up" : "angle-down"
          })]
        }), Pd && (0, MW.jsxs)(MW.Fragment, {
          children: [(0, MW.jsx)("ul", {
            children: od.map((dd => {
              let [Jd, pd] = dd;
              const Pd = Kd.has(Jd);
              return (0, MW.jsxs)("li", {
                children: [(0, MW.jsxs)(nK, {
                  item: Jd,
                  itemNames: kd,
                  children: [(0, MW.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: pd
                  }), Pd && (0, MW.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Wd(`${tK}coreBankPausedTag`)
                  })]
                }), (0, MW.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, MW.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === pd,
                    onClick: () => {
                      Nd.send(`baf2corewithdraw ${pd} ${Jd}`)
                    },
                    children: Wd(`${tK}coreTake`)
                  }), (0, MW.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Nd.send(`${vd} ${Jd}`), Cd(Jd, !Pd)
                    },
                    children: Wd(Pd ? `${tK}coreBankResume` : `${tK}coreBankStop`)
                  })]
                })]
              }, Jd)
            }))
          }), (0, MW.jsx)("p", {
            className: "Baf2CoreHint",
            children: Wd(`${tK}coreBankNote`)
          })]
        })]
      })
    }
    const zK = "buildAFactory2Game:";

    function HK(dd) {
      const Jd = Math.max(0, Math.floor(dd));
      return `${Math.floor(Jd/60)}:${String(Jd%60).padStart(2,"0")}`
    }

    function wK(dd) {
      let {
        item: Jd
      } = dd;
      return (0, MW.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, MW.jsx)(bN.d, {
          itemName: Jd,
          amount: 0
        })
      })
    }

    function AK() {
      return (0, MW.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, MW.jsx)(mN.e, {
          name: "bolt"
        })
      })
    }

    function Jo(dd) {
      let {
        charge: Jd,
        hint: kd,
        itemNames: pd
      } = dd;
      const Nd = cP(),
        {
          t: Wd
        } = (0, YN.B)(),
        [Pd, Zd, gd, Cd, Kd, od, ld] = Jd,
        [Qd, Ld] = function(dd) {
          var Jd;
          let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fP,
            pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Nd, Wd] = uK((() => dd), dd, kd, pd);
          return [cK(null !== (Jd = Nd.get("")) && void 0 !== Jd ? Jd : null, dd), dd => {
            Wd("", dd)
          }]
        }(ld),
        Od = Qd === ld ? od : !Qd,
        ed = Cd >= Kd,
        Rd = Pd.find((dd => {
          let [, Jd, kd] = dd;
          return kd < .9 * Jd
        }));
      let Id = `${zK}coreChargeWaiting`,
        Gd = {};
      return ed ? Id = `${zK}coreChargeDone` : Qd ? Id = `${zK}coreChargeStopped` : Od && kd ? (Id = `${zK}${kd[0]}`, Gd = {
        item: PW(Wd, kd[1])
      }) : Od && Rd ? (Id = `${zK}coreChargeShort`, Gd = {
        item: PW(Wd, Rd[0])
      }) : Od && Zd > 0 && !gd ? Id = `${zK}coreChargePower` : Od && (Id = `${zK}coreChargeRunning`), (0, MW.jsxs)("div", {
        className: iN()("Baf2CoreCharge", {
          Waiting: !Od && !ed,
          Done: ed
        }),
        children: [(0, MW.jsxs)("h4", {
          children: [Wd(`${zK}coreChargeTitle`), (0, MW.jsx)("span", {
            children: Wd(`${zK}coreChargeProgress`, {
              done: HK(Cd),
              need: HK(Kd)
            })
          })]
        }), (0, MW.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, MW.jsx)("div", {
            style: {
              width: 100 * Math.min(Cd, Kd) / Kd + "%"
            }
          })
        }), (0, MW.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Pd.map((dd => {
            var Jd;
            let [kd, Nd, Pd] = dd;
            const Zd = Pd >= .9 * Nd;
            return (0, MW.jsxs)("li", {
              className: iN()({
                Done: Zd,
                Short: Od && !Zd
              }),
              children: [(0, MW.jsx)(wK, {
                item: kd
              }), (0, MW.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, MW.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, MW.jsx)(SN.c, {
                    text: null !== (Jd = pd[kd]) && void 0 !== Jd ? Jd : kd
                  }), (0, MW.jsx)("span", {
                    children: Wd(`${zK}coreChargeItem`, {
                      now: String(Pd),
                      need: String(Nd)
                    })
                  })]
                }), (0, MW.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, MW.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Pd/Nd)}%`
                    }
                  })
                })]
              })]
            }, kd)
          })), Zd > 0 && (0, MW.jsxs)("li", {
            className: iN()("Baf2CoreChargePower", {
              Short: Od && !gd
            }),
            children: [(0, MW.jsx)(AK, {}), (0, MW.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, MW.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, MW.jsx)("span", {
                  children: Wd(`${zK}coreChargePowerRow`, {
                    power: wd(Zd)
                  })
                })
              })
            })]
          })]
        }), (0, MW.jsx)("p", {
          className: "Baf2CoreHint",
          children: Wd(Id, Gd)
        }), !ed && (Od || Qd) && (0, MW.jsx)("button", {
          type: "button",
          className: iN()("Baf2CoreChargeToggle", {
            Stopped: Qd
          }),
          onClick: () => {
            Nd.send(qd), Ld(!Qd)
          },
          children: Wd(Qd ? `${zK}coreChargeRestart` : `${zK}coreChargeStop`)
        })]
      })
    }

    function ko(dd) {
      let {
        charge: Jd,
        reached: kd,
        itemNames: pd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)();
      return (0, MW.jsxs)("div", {
        className: iN()("Baf2CoreCharge", {
          Done: kd
        }),
        children: [(0, MW.jsxs)("h4", {
          children: [Nd(`${zK}coreChargeTitle`), (0, MW.jsx)("span", {
            children: Nd(`${zK}coreChargeSpecTime`, {
              time: HK(Jd.seconds)
            })
          })]
        }), (0, MW.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Jd.items.map((dd => {
            var Jd;
            let {
              item: Wd,
              amount: Pd
            } = dd;
            return (0, MW.jsxs)("li", {
              className: iN()({
                Done: kd
              }),
              children: [(0, MW.jsx)(wK, {
                item: Wd
              }), (0, MW.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, MW.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, MW.jsx)(SN.c, {
                    text: null !== (Jd = pd[Wd]) && void 0 !== Jd ? Jd : Wd
                  }), (0, MW.jsx)("span", {
                    children: Nd(`${zK}coreChargeSpecItem`, {
                      need: String(Pd)
                    })
                  })]
                })
              })]
            }, Wd)
          })), Jd.powerPerS > 0 && (0, MW.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, MW.jsx)(AK, {}), (0, MW.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, MW.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, MW.jsx)("span", {
                  children: Nd(`${zK}coreChargePowerRow`, {
                    power: wd(Jd.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const po = "buildAFactory2Game:";

    function No(dd) {
      let {
        def: Jd,
        reached: kd,
        banked: pd,
        itemNames: Nd
      } = dd;
      const {
        t: Wd
      } = (0, YN.B)();
      return (0, MW.jsx)("ul", {
        className: "Baf2CoreCost",
        children: Jd.cost.map((dd => {
          let {
            item: Jd,
            amount: Pd
          } = dd;
          const Zd = kd ? 0 : pd(Jd);
          return (0, MW.jsx)("li", {
            children: (0, MW.jsx)(nK, {
              item: Jd,
              itemNames: Nd,
              children: (0, MW.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: Zd > 0 ? Wd(`${po}coreBankedFor`, {
                  amount: String(Zd),
                  total: String(Pd)
                }) : `\xd7${Pd}`
              })
            })
          }, Jd)
        }))
      })
    }

    function Wo(dd, Jd) {
      if (Jd >= Kd()) return dd(`${po}coreMaxTier`);
      const kd = Cd[Jd + 1];
      return kd && !kd.startsWith("upgradeCore") ? dd(`${po}coreGateQuest`, {
        quest: dd(`${po}quest_${kd}`)
      }) : dd(`${po}coreGateClosed`)
    }

    function Po() {
      const {
        t: dd
      } = (0, YN.B)(), Jd = cP(), kd = (0, pd.useRef)(null), Nd = (0, pd.useRef)(Date.now());
      return zC(!0, kd), (0, MW.jsx)("div", {
        ref: kd,
        className: "Baf2CoreGrow",
        children: (0, MW.jsx)(sP.j, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Nd.current >= 600 && Jd.send(Gd)
          },
          children: dd(`${po}coreGrow`)
        })
      })
    }

    function Zo(dd) {
      let {
        message: Jd,
        itemNames: kd,
        next: pd
      } = dd;
      const Nd = cP(),
        {
          t: Wd
        } = (0, YN.B)(),
        Pd = Jd.baf2CoreTier,
        Zd = Jd.baf2CoreReady,
        gd = Jd.baf2CoreNeeds.filter((dd => {
          let [, Jd, kd, pd] = dd;
          return pd > 0 && Jd < kd
        })),
        Cd = Jd.baf2CoreNeeds.every((dd => {
          let [, Jd, kd] = dd;
          return Jd >= kd
        })),
        Kd = Jd.baf2CoreKeep;
      return (0, MW.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, MW.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [Zd && (0, MW.jsx)(Po, {}), (0, MW.jsx)("h3", {
            children: Wd(`${po}coreBring`)
          }), (0, MW.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: Jd.baf2CoreNeeds.map((dd => {
              let [Jd, pd, Pd, Zd] = dd;
              return (0, MW.jsxs)("li", {
                className: iN()({
                  Done: pd >= Pd
                }),
                children: [(0, MW.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, MW.jsx)(bN.d, {
                    itemName: Jd,
                    amount: 0
                  })
                }), (0, MW.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, MW.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, MW.jsx)(SN.c, {
                      text: kd[Jd]
                    }), (0, MW.jsxs)("span", {
                      children: [pd, "/", Pd]
                    })]
                  }), (0, MW.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, MW.jsx)("div", {
                      style: {
                        width: 100 * pd / Pd + "%"
                      }
                    }), Zd > 0 && (0, MW.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * Zd / Pd + "%"
                      }
                    })]
                  })]
                }), Zd > 0 && pd < Pd && (0, MW.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Nd.send(`${xd} ${Jd}`)
                  },
                  children: Wd(`${po}coreDeposit`, {
                    amount: String(Zd)
                  })
                })]
              }, Jd)
            }))
          }), Jd.baf2CoreCharge && (0, MW.jsx)(Jo, {
            charge: Jd.baf2CoreCharge,
            hint: Jd.baf2CoreChargeHint,
            itemNames: kd
          }), !Zd && gd.length > 1 && (0, MW.jsx)(sP.j, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Nd.send(Gd)
            },
            children: Wd(`${po}coreHandOver`)
          }), !Zd && void 0 !== Kd && (0, MW.jsx)("p", {
            className: "Baf2CoreHint",
            children: Wd(`${po}coreKeepRest`, {
              item: PW(Wd, Kd)
            })
          }), !Zd && !Cd && 0 === gd.length && void 0 === Kd && (0, MW.jsx)("p", {
            className: "Baf2CoreHint",
            children: Wd(`${po}coreNothingHeld`)
          }), (0, MW.jsx)(VK, {
            message: Jd,
            itemNames: kd
          })]
        }), (0, MW.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, MW.jsx)("h3", {
            children: Wd(`${po}coreRewards`)
          }), (0, MW.jsx)(TK, {
            def: pd,
            tier: Pd + 1,
            itemNames: kd
          })]
        })]
      })
    }

    function go(dd) {
      let {
        message: Jd,
        itemNames: kd,
        shown: pd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)(), Wd = Jd.baf2CoreTier, Pd = Rd(pd), Zd = pd <= Wd, gd = new Map(Jd.baf2CoreBanked), Cd = !Id(Wd, Bd(Jd)) && pd === Wd;
      return (0, MW.jsxs)("div", {
        className: iN()("Baf2CoreBody", {
          Locked: !Zd
        }),
        children: [(0, MW.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, MW.jsx)("h3", {
            children: Nd(Zd ? `${po}coreItTook` : `${po}coreItNeeds`)
          }), 0 === Pd.cost.length && (0, MW.jsx)("p", {
            className: "Baf2CoreHint",
            children: Nd(`${po}coreTierStart`)
          }), Pd.cost.length > 0 && (0, MW.jsx)(No, {
            def: Pd,
            reached: Zd,
            banked: dd => {
              var Jd;
              return function(dd, Jd, kd, pd) {
                let Nd = dd;
                for (let Pd = Jd + 2; Pd <= kd; Pd++) {
                  var Wd;
                  const dd = Rd(Pd).cost.find((dd => dd.item === pd)),
                    Jd = Math.min(Nd, null !== (Wd = null === dd || void 0 === dd ? void 0 : dd.amount) && void 0 !== Wd ? Wd : 0);
                  if (Pd === kd) return Jd;
                  Nd -= Jd
                }
                return 0
              }(null !== (Jd = gd.get(dd)) && void 0 !== Jd ? Jd : 0, Wd, pd, dd)
            },
            itemNames: kd
          }), Pd.charge && (0, MW.jsx)(ko, {
            charge: Pd.charge,
            reached: Zd,
            itemNames: kd
          }), Cd && (0, MW.jsxs)(MW.Fragment, {
            children: [(0, MW.jsx)("p", {
              className: "Baf2CoreHint",
              children: Wo(Nd, Wd)
            }), (0, MW.jsx)(VK, {
              message: Jd,
              itemNames: kd
            })]
          })]
        }), (0, MW.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, MW.jsx)("h3", {
            children: Nd(Zd ? `${po}coreGave` : `${po}coreLockedRewards`)
          }), (0, MW.jsx)(TK, {
            def: Pd,
            tier: pd,
            itemNames: kd
          })]
        })]
      })
    }

    function Co(dd, Jd) {
      const {
        key: kd,
        params: pd
      } = Qd(Jd - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return dd(`${po}${kd}`, pd)
    }
    const Ko = "buildAFactory2Game:",
      oo = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Qo = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function Lo(dd) {
      let {
        view: Jd,
        close: kd,
        askIslands: Nd
      } = dd;
      const {
        t: Wd
      } = (0, YN.B)(), [Pd, Zd] = (0, pd.useState)(!1);
      (0, pd.useEffect)((() => {
        if (!Pd) return;
        const dd = window.setTimeout((() => {
          Zd(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(dd)
        }
      }), [Pd]);
      const {
        message: gd,
        itemNames: Cd
      } = Jd, Kd = gd.baf2CoreTier, od = Rd(Kd), ld = Id(Kd, Bd(gd)), [Od, ed] = gd.baf2CoreMachines, [Gd, vd] = gd.baf2CoreBelts, xd = gd.baf2CoreStorage, qd = gd.baf2CoreReady, [sd, ad] = (0, pd.useState)(null), Md = (null === sd || void 0 === sd ? void 0 : sd.at) === Kd && sd.ready === qd ? sd.tier : ld ? Kd + 1 : Kd;
      let Fd = "coreTierLocked";
      Md <= Kd ? Fd = "coreTierReached" : Md === Kd + 1 && (Fd = "coreTierNext");
      const Yd = Wd(`${Ko}${Rd(Md).nameKey}`),
        md = Md === Kd + 1 ? ld : null,
        bd = Qd(Md, {
          tier: Fd,
          stage: oo[Fd],
          atomic: Qo[Fd]
        }),
        Sd = Wd(`${Ko}${bd.key}`, {
          ...bd.params,
          name: Yd
        }),
        jd = Qd(Kd, Ld),
        Xd = Wd(`${Ko}${jd.key}`, {
          ...jd.params,
          name: Wd(`${Ko}${od.nameKey}`)
        });
      return (0, MW.jsx)(BP.e, {
        close: kd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, MW.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsxs)("div", {
              children: [(0, MW.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Wd(`${Ko}coreTitle`)
              }), void 0 !== gd.baf2CoreIslandName && (0, MW.jsx)("p", {
                className: "Baf2CoreIsland",
                children: gd.baf2CoreIslandName
              }), (0, MW.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, MW.jsx)("span", {
                  children: Xd
                }), (0, MW.jsx)("span", {
                  className: iN()({
                    Full: Od >= ed
                  }),
                  children: Wd(`${Ko}coreMachineCount`, {
                    amount: String(Od),
                    total: String(ed)
                  })
                }), (0, MW.jsx)("span", {
                  className: iN()({
                    Full: Gd >= vd
                  }),
                  children: Wd(`${Ko}coreBeltCount`, {
                    amount: String(Gd),
                    total: String(vd)
                  })
                }), void 0 !== xd && (0, MW.jsx)("span", {
                  className: iN()({
                    Full: xd[0] >= xd[1]
                  }),
                  children: Wd(`${Ko}coreStorageCount`, {
                    amount: String(xd[0]),
                    total: String(xd[1])
                  })
                })]
              })]
            }), (0, MW.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [gd.baf2CoreIslands && (0, MW.jsx)(sP.d, {
                className: "Baf2CoreIslandsButton",
                disabled: Pd,
                onClick: () => {
                  Zd(!0), Nd()
                },
                children: Wd(`${Ko}islandsOpenButton`)
              }), (0, MW.jsx)(sP.i, {
                onClick: kd
              })]
            })]
          }), (0, MW.jsx)(XK, {
            tier: Kd,
            shown: Md,
            Tl: dd => {
              ad({
                tier: dd,
                at: Kd,
                ready: qd
              })
            }
          }), (0, MW.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Sd, Md > Kd + 1 && (0, MW.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: Co(Wd, Md)
            })]
          }), 6 === Md && Md > Kd && (0, MW.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Wd(`${Ko}coreStagesNote`)
          }), 11 === Md && Md > Kd && (0, MW.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Wd(`${Ko}coreAtomicNote`)
          }), md && (0, MW.jsx)(Zo, {
            message: gd,
            itemNames: Cd,
            next: md
          }), !md && (0, MW.jsx)(go, {
            message: gd,
            itemNames: Cd,
            shown: Md
          })]
        })
      })
    }
    const Oo = {
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
    const eo = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: KW,
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

    function Ro(dd) {
      return dd.baf2DropCometOreOnly ? "dropCometOre" : dd.baf2DropCometIsotope ? "seed" === dd.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function Io(dd) {
      let {
        message: Jd,
        quests: kd,
        close: Nd,
        leave: Wd
      } = dd;
      const Pd = cP(),
        {
          t: Zd
        } = (0, YN.B)(),
        gd = (0, WK.i)(UN, kd.get()),
        Cd = function(dd) {
          var Jd;
          if (!jd(dd.tutorial)) return null;
          const kd = dd.rows.find((dd => dd.current)),
            pd = kd ? Oo[kd.key] : void 0;
          return null !== (Jd = null !== pd && void 0 !== pd ? pd : dd.side ? Oo[dd.side.row.key] : void 0) && void 0 !== Jd ? Jd : null
        }(gd),
        Kd = null === gd.tier || QW(gd.tier),
        od = Kd ? eo : eo.filter((dd => {
          let {
            item: Jd
          } = dd;
          return Jd !== KW
        })),
        [ld, Qd] = (0, pd.useState)(null),
        Ld = null !== ld && void 0 !== ld ? ld : !Jd.baf2DropFoundSalvage && Kd,
        Od = Jd.baf2DropRuinDistance,
        ed = Jd.baf2DropComet,
        Rd = Jd.baf2DropOldWorks,
        Id = Jd.baf2DropGrove,
        Gd = function(dd) {
          return 2 + Number(void 0 !== dd.baf2DropComet) + Number(!!dd.baf2DropOwedComet || void 0 !== dd.baf2DropOwedWaitMinutes) + Number(void 0 !== dd.baf2DropDigDistance) + Number(void 0 !== dd.baf2DropOldWorks) + Number(void 0 !== dd.baf2DropGrove)
        }(Jd),
        vd = dd => {
          Pd.send(function(dd) {
            return `baf2drop ${dd}`
          }(dd)), Wd()
        };
      let xd = Zd("buildAFactory2Game:dropRuinNone");
      if (null !== Od) {
        let dd = Jd.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        Jd.baf2DropRuinOldWorks && (dd = "dropRuinOldWorks");
        const kd = void 0 === Jd.baf2DropRuinCluster ? Zd("buildAFactory2Game:dropRuinOpen") : Zd("buildAFactory2Game:dropRuinCluster", {
          count: String(Jd.baf2DropRuinCluster)
        });
        xd = `${Zd(`buildAFactory2Game:${dd}`,{distance:String(Od)})} ${kd}`
      }
      let qd = Zd("buildAFactory2Game:dropBelowDescription");
      void 0 !== Jd.baf2DropBelowLook && (qd = Zd("buildAFactory2Game:dropBelowLook", {
        look: Zd(Jd.baf2DropBelowLook)
      }));
      const Bd = "buildAFactory2Game:wildsRegion_survivorGrove" === Jd.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        sd = BW(Zd, 60 * function(dd) {
          const [Jd, kd] = (0, pd.useState)((() => Date.now())), [Nd, Wd] = (0, pd.useState)(Jd);
          return (0, pd.useEffect)((() => {
            const dd = Date.now();
            kd(dd), Wd(dd)
          }), [dd]), (0, pd.useEffect)((() => {
            const dd = window.setInterval((() => {
              Wd(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(dd)
            }
          }), []), Math.max(1, dd.baf2DropRenewMinutes - Math.floor((Nd - Jd) / 6e4))
        }(Jd)),
        ad = function(dd, Jd, kd) {
          return "ruin" === dd && !kd || "owed" === dd && !Jd.baf2DropOwedComet ? null : dd
        }(Cd, Jd, null !== Od),
        Md = function(dd) {
          for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
          return iN()("Baf2DropTile", ...kd, {
            Wanted: ad === dd
          })
        };
      return (0, MW.jsx)(BP.e, {
        close: Nd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, MW.jsxs)("section", {
          className: iN()("Baf2Panel Baf2DropMap", {
            Many: Gd >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsxs)("div", {
              children: [(0, MW.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: Zd("buildAFactory2Game:dropMapTitle")
              }), (0, MW.jsx)("p", {
                children: Zd("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, MW.jsx)(sP.i, {
              onClick: Nd
            })]
          }), (0, MW.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== ed && (0, MW.jsxs)(sP.t, {
              className: Md("comet", "Baf2DropComet"),
              onClick: () => {
                vd("comet")
              },
              children: [(0, MW.jsx)("strong", {
                children: Zd("buildAFactory2Game:dropComet")
              }), (0, MW.jsx)("span", {
                children: Zd(`buildAFactory2Game:${Ro(Jd)}`, {
                  distance: String(ed)
                })
              })]
            }), Jd.baf2DropOwedComet && (0, MW.jsxs)(sP.t, {
              className: Md("owed", "Baf2DropComet"),
              onClick: () => {
                vd("owed")
              },
              children: [(0, MW.jsx)("strong", {
                children: Zd("buildAFactory2Game:dropOwedComet")
              }), (0, MW.jsx)("span", {
                children: Jd.baf2DropOwedIsotope ? Zd("buildAFactory2Game:dropOwedIsotopeDescription") : Zd("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== Jd.baf2DropOwedWaitMinutes && (0, MW.jsxs)(sP.t, {
              className: Md("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, MW.jsx)("strong", {
                children: Zd("buildAFactory2Game:dropOwedComet")
              }), (0, MW.jsx)("span", {
                children: Zd("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(Jd.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, MW.jsxs)(sP.d, {
              className: Md("below"),
              onClick: () => {
                vd("below")
              },
              children: [(0, MW.jsx)("strong", {
                children: Zd("buildAFactory2Game:dropBelow")
              }), (0, MW.jsx)("span", {
                children: qd
              })]
            }), void 0 !== Jd.baf2DropDigDistance && (0, MW.jsxs)(sP.n, {
              className: Md("dig"),
              onClick: () => {
                vd("dig")
              },
              children: [(0, MW.jsx)("strong", {
                children: Zd("buildAFactory2Game:dropDig")
              }), (0, MW.jsx)("span", {
                children: Zd("buildAFactory2Game:dropDigDescription", {
                  distance: String(Jd.baf2DropDigDistance),
                  y: qW(Jd.baf2DropDigY)
                })
              })]
            }), void 0 !== Id && (0, MW.jsxs)(sP.n, {
              className: Md("grove", "Baf2DropGrove"),
              onClick: () => {
                vd("grove")
              },
              children: [(0, MW.jsx)("strong", {
                children: Zd("buildAFactory2Game:dropGrove")
              }), (0, MW.jsx)("span", {
                children: Zd(`buildAFactory2Game:${Bd}`, {
                  distance: String(Id)
                })
              })]
            }), (0, MW.jsxs)(sP.j, {
              className: Md("ruin"),
              disabled: null === Od,
              onClick: () => {
                vd("ruin")
              },
              children: [(0, MW.jsx)("strong", {
                children: Zd("buildAFactory2Game:dropRuin")
              }), (0, MW.jsx)("span", {
                children: xd
              })]
            }), void 0 !== Rd && (0, MW.jsxs)(sP.B, {
              className: Md("works"),
              onClick: () => {
                vd("works")
              },
              children: [(0, MW.jsx)("strong", {
                children: Zd("buildAFactory2Game:dropOldWorks")
              }), (0, MW.jsx)("span", {
                children: Zd("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(Rd)
                })
              })]
            })]
          }), (0, MW.jsx)("p", {
            className: "Baf2DropRenew",
            children: Zd("buildAFactory2Game:dropRenew", {
              time: sd
            })
          }), (0, MW.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: Ld,
            onToggle: dd => {
              dd.currentTarget.open !== Ld && Qd(dd.currentTarget.open)
            },
            children: [(0, MW.jsx)("summary", {
              children: Zd("buildAFactory2Game:dropSalvageWhat")
            }), (0, MW.jsx)("p", {
              children: Zd("buildAFactory2Game:dropSalvageIntro")
            }), (0, MW.jsx)("ul", {
              children: od.map((dd => {
                let {
                  item: Jd,
                  nameKey: kd,
                  useKey: pd,
                  params: Nd
                } = dd;
                return (0, MW.jsxs)("li", {
                  children: [(0, MW.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, MW.jsx)(bN.d, {
                      itemName: Jd,
                      amount: 0
                    })
                  }), (0, MW.jsxs)("span", {
                    children: [(0, MW.jsx)("strong", {
                      children: Zd(kd)
                    }), ": ", Zd(pd, Nd)]
                  })]
                }, Jd)
              }))
            })]
          })]
        })
      })
    }
    const Go = "buildAFactory2Game:";

    function vo(dd, Jd) {
      return dd.sendIslandEdit(`baf2coopleave ${Jd.baf2IslandId}`)
    }

    function xo(dd) {
      let {
        card: Jd,
        canRename: kd,
        done: Nd,
        t: Wd
      } = dd;
      const Pd = cP(),
        [Zd, gd] = (0, pd.useState)(Jd.baf2IslandName),
        Cd = BC(Zd),
        Kd = "" === Cd || sC(Cd),
        od = () => {
          !Kd && kd && (Cd !== Jd.baf2IslandName ? Nd(Pd.sendIslandEdit(`baf2islandrename ${Jd.baf2IslandId} ${Cd}`)) : Nd(null))
        },
        ld = () => {
          Nd(null)
        };
      return (0, MW.jsxs)("div", {
        className: "Baf2IslandForm",
        ...tC(ld),
        children: [(0, MW.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Wd(`${Go}islandsRenameLabel`), (0, MW.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Zd,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: VC,
            onChange: dd => {
              gd(dd.target.value)
            },
            ...uC(od, ld)
          })]
        }), "" === Cd && (0, MW.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Wd(`${Go}islandsRenameEmpty`)
        }), sC(Cd) && (0, MW.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Wd(`${Go}islandsNameReserved`)
        }), (0, MW.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, MW.jsx)(sP.n, {
            disabled: Kd || !kd,
            onClick: od,
            children: Wd(`${Go}islandsRenameSave`)
          }), (0, MW.jsx)(sP.d, {
            onClick: ld,
            children: Wd(`${Go}islandsCancel`)
          })]
        })]
      })
    }

    function qo(dd) {
      let {
        card: Jd,
        canDelete: kd,
        done: Nd,
        t: Wd
      } = dd;
      const Pd = cP(),
        [Zd, gd] = (0, pd.useState)(""),
        Cd = function(dd, Jd) {
          return BC(dd).toLowerCase() === BC(Jd).toLowerCase()
        }(Zd, Jd.baf2IslandName),
        Kd = () => {
          Cd && kd && Nd(Pd.sendIslandEdit(`baf2islanddelete ${Jd.baf2IslandId}`))
        },
        od = () => {
          Nd(null)
        },
        ld = fC("name"),
        [Qd, Ld = ""] = Wd(`${Go}islandsDeleteConfirm`, {
          name: ld
        }).split(ld);
      return (0, MW.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...tC(od),
        children: [(0, MW.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, MW.jsxs)("span", {
            children: [Qd, (0, MW.jsx)("strong", {
              children: Jd.baf2IslandName
            }), Ld]
          }), (0, MW.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Zd,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: VC,
            onChange: dd => {
              gd(dd.target.value)
            },
            ...uC(Kd, od)
          })]
        }), EC(Jd) && (0, MW.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Wd(`${Go}islandsDeleteLeftBack`)
        }), (0, MW.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, MW.jsx)(sP.B, {
            disabled: !Cd || !kd,
            onClick: Kd,
            children: Wd(`${Go}islandsDeleteForGood`)
          }), (0, MW.jsx)(sP.d, {
            onClick: od,
            children: Wd(`${Go}islandsCancel`)
          })]
        })]
      })
    }

    function Bo(dd) {
      let {
        members: Jd,
        t: kd
      } = dd;
      const pd = Jd.length;
      return (0, MW.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, MW.jsxs)("span", {
          children: [1 === pd ? kd(`${Go}islandsPlayersOne`) : kd(`${Go}islandsPlayers`, {
            count: String(pd)
          }), " "]
        }), Jd.map(((dd, Jd) => (0, MW.jsxs)("span", {
          className: iN()("Baf2IslandMember", {
            Here: dd.baf2MemberHere
          }),
          title: dd.baf2MemberHere ? kd(`${Go}islandsPlayerHere`) : void 0,
          children: [dd.baf2MemberName, Jd < pd - 1 ? ", " : ""]
        }, dd.baf2MemberKey)))]
      })
    }

    function so(dd) {
      let {
        card: Jd,
        answered: kd,
        nowMs: Nd,
        t: Wd
      } = dd;
      const Pd = cP(),
        [Zd, gd] = (0, pd.useState)(new Map),
        Cd = EC(Jd);
      if (!Cd) return null;
      return (0, MW.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, MW.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Wd(`${Go}islandsLeftTitle`)
        }), (0, MW.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Cd.left.map((dd => {
            const pd = dd.baf2LeftKey,
              Kd = hC(Zd.get(pd), kd, Nd),
              od = function(dd) {
                return 1 === dd ? [`${GC}islandsLeftItemsOne`] : [`${GC}islandsLeftItems`, {
                  count: String(dd)
                }]
              }(dd.baf2LeftItems);
            return (0, MW.jsx)("li", {
              className: iN()("Baf2IslandPerson", {
                Pending: Kd
              }),
              children: (0, MW.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, MW.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: dd.baf2LeftName
                }), (0, MW.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Wd(od[0], od[1])
                }), Cd.claim && (0, MW.jsx)(sP.n, {
                  className: "Baf2IslandPersonButton",
                  disabled: Kd,
                  onClick: () => {
                    (dd => {
                      const kd = Pd.sendIslandEdit(`baf2coopclaim ${Jd.baf2IslandId} ${dd}`);
                      gd((Jd => new Map(Jd).set(dd, {
                        atMs: Date.now(),
                        answer: kd
                      })))
                    })(pd)
                  },
                  children: Wd(`${Go}islandsClaim`)
                })]
              })
            }, pd)
          }))
        }), Cd.goThere && (0, MW.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Wd(`${Go}islandsClaimGoThere`)
        })]
      })
    }

    function io(dd) {
      let {
        card: Jd,
        view: kd,
        blocked: Nd,
        maxIslands: Wd,
        answered: Pd,
        nowMs: Zd,
        done: gd,
        openSocial: Cd,
        t: Kd
      } = dd;
      const od = cP(),
        [ld, Qd] = (0, pd.useState)(new Map),
        [Ld, Od] = (0, pd.useState)(new Map),
        [ed, Rd] = (0, pd.useState)(null),
        Id = (0, pd.useRef)(null);
      AC(Id);
      const Gd = Jd.baf2IslandId,
        vd = Jd.baf2IslandCoop,
        xd = null !== vd && void 0 !== vd && vd.baf2CoopMembers.some((dd => dd.baf2MemberKey === ed)) ? ed : null,
        qd = function(dd, Jd) {
          const kd = dd.baf2IslandCoop;
          return kd && cC(kd) || null !== Jd ? void 0 : dd.baf2IslandInvitable
        }(Jd, Nd),
        Bd = function(dd, Jd) {
          const kd = dd.baf2IslandCoop;
          return kd && cC(kd) ? {
            key: `${GC}islandsCoopFull`,
            params: {
              max: String(kd.baf2CoopMax)
            }
          } : void 0 !== dd.baf2IslandInvitable && null === Jd || kd && !kd.baf2CoopManageHere ? null : "degraded" === Jd || "stuck" === Jd ? {
            key: `${GC}islandsInviteNotLoaded`
          } : null === Jd || function(dd) {
            return "notHome" === dd || "wilds" === dd || "visiting" === dd
          }(Jd) || FC(Jd) ? {
            key: `${GC}islandsInviteGoThere`
          } : {
            key: `${GC}islandsInviteBusy`
          }
        }(Jd, Nd),
        sd = () => {
          var dd;
          Rd(null), null === (dd = Id.current) || void 0 === dd || dd.focus()
        };
      return (0, MW.jsxs)("div", {
        ref: Id,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...tC(null === xd ? gd : sd),
        children: [vd && (0, MW.jsxs)(MW.Fragment, {
          children: [(0, MW.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Kd(`${Go}islandsPlayersTitle`, {
              count: String(vd.baf2CoopMembers.length),
              max: String(vd.baf2CoopMax)
            })
          }), (0, MW.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: vd.baf2CoopMembers.map(((dd, Jd) => {
              const pd = dd.baf2MemberKey,
                Nd = hC(ld.get(pd), Pd, Zd);
              return (0, MW.jsxs)("li", {
                className: iN()("Baf2IslandPerson", {
                  Pending: Nd
                }),
                children: [(0, MW.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, MW.jsx)("span", {
                    className: iN()("Baf2IslandPersonName", {
                      Here: dd.baf2MemberHere
                    }),
                    children: dd.baf2MemberName
                  }), dd.baf2MemberHere && (0, MW.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Kd(`${Go}islandsPlayerHere`)
                  }), 0 === Jd && (0, MW.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Kd(`${Go}islandsPlayerOwner`)
                  }), kd.remove && Jd > 0 && !Nd && xd !== pd && (0, MW.jsx)(sP.E, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var dd;
                      Rd(pd), null === (dd = Id.current) || void 0 === dd || dd.focus()
                    },
                    children: Kd(`${Go}islandsRemove`)
                  })]
                }), xd === pd && (0, MW.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, MW.jsx)("p", {
                    children: nC(Kd, `${Go}islandsRemoveConfirm`, {
                      player: dd.baf2MemberName
                    })
                  }), (0, MW.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, MW.jsx)(sP.B, {
                      onClick: () => {
                        (dd => {
                          const Jd = od.sendIslandEdit(`baf2coopremove ${Gd} ${dd.baf2MemberKey}`);
                          Qd((kd => new Map(kd).set(dd.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: Jd
                          }))), sd()
                        })(dd)
                      },
                      children: Kd(`${Go}islandsRemoveYes`)
                    }), (0, MW.jsx)(sP.d, {
                      onClick: sd,
                      children: Kd(`${Go}islandsCancel`)
                    })]
                  })]
                })]
              }, pd)
            }))
          })]
        }), (void 0 !== qd || null !== Bd) && (0, MW.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Kd(`${Go}islandsInviteTitle`)
        }), !vd && (void 0 !== qd || null !== Bd) && (0, MW.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Kd(`${Go}islandsInviteShareNote`)
        }), 0 === (null === qd || void 0 === qd ? void 0 : qd.length) && (0, MW.jsx)(ao, {
          openSocial: Cd,
          t: Kd
        }), void 0 !== qd && qd.length > 0 && (0, MW.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: qd.map((dd => {
            const Jd = !0 === dd.baf2InvitableSent || hC(Ld.get(dd.baf2InvitableId), Pd, Zd);
            return (0, MW.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, MW.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, MW.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: dd.baf2InvitableName
                }), dd.baf2InvitableFull && !Jd && (0, MW.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Kd(`${Go}islandsInviteTheirFull`, {
                    max: String(Wd)
                  })
                }), (Jd || !dd.baf2InvitableFull) && (0, MW.jsx)(sP.n, {
                  className: "Baf2IslandPersonButton",
                  disabled: Jd,
                  onClick: () => {
                    (dd => {
                      const Jd = od.sendIslandEdit(`baf2coopinvite ${Gd} ${dd}`);
                      Od((kd => new Map(kd).set(dd, {
                        atMs: Date.now(),
                        answer: Jd
                      })))
                    })(dd.baf2InvitableId)
                  },
                  children: Kd(Jd ? `${Go}islandsInvited` : `${Go}islandsInvite`)
                })]
              })
            }, dd.baf2InvitableId)
          }))
        }), Bd && (0, MW.jsx)(kK, {
          note: Bd,
          t: Kd
        }), (0, MW.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, MW.jsx)(sP.d, {
            onClick: gd,
            children: Kd(`${Go}islandsDone`)
          })
        })]
      })
    }

    function ao(dd) {
      let {
        openSocial: Jd,
        t: kd
      } = dd;
      return (0, MW.jsxs)(MW.Fragment, {
        children: [(0, MW.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: kd(Jd ? `${Go}islandsInviteNobody` : `${Go}islandsInviteNobodyGuest`)
        }), Jd && (0, MW.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, MW.jsx)(sP.d, {
            onClick: Jd,
            children: kd("socialBar:social")
          })
        })]
      })
    }

    function Mo(dd) {
      let {
        className: Jd,
        text: kd,
        ConfirmButton: Nd,
        confirmLabel: Wd,
        canConfirm: Pd,
        send: Zd,
        done: gd,
        t: Cd
      } = dd;
      const Kd = (0, pd.useRef)(null);
      AC(Kd);
      const od = () => {
        gd(null)
      };
      return (0, MW.jsxs)("div", {
        ref: Kd,
        tabIndex: -1,
        className: iN()("Baf2IslandForm", Jd),
        ...tC(od),
        children: [(0, MW.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: kd
        }), (0, MW.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, MW.jsx)(Nd, {
            disabled: !Pd,
            onClick: () => {
              Pd && gd(Zd())
            },
            children: Wd
          }), (0, MW.jsx)(sP.d, {
            onClick: od,
            children: Cd(`${Go}islandsCancel`)
          })]
        })]
      })
    }

    function Fo(dd) {
      return "hidden" !== dd
    }

    function Yo(dd) {
      var Jd, kd;
      let {
        card: Nd,
        keepOwn: Wd,
        blocked: Pd,
        maxIslands: Zd,
        serverNowMs: gd,
        nowMs: Cd,
        actions: Kd,
        full: od,
        waits: ld,
        answered: Qd,
        mode: Ld,
        setMode: Od,
        pending: ed,
        onSent: Rd,
        switchTo: Id,
        leave: Gd,
        coopOn: vd,
        openSocial: xd,
        t: qd
      } = dd;
      const Bd = cP(),
        sd = Nd.baf2IslandActive,
        ad = sd ? null : function(dd, Jd) {
          if (dd <= 0) return null;
          const kd = Jd - dd;
          if (kd < IW) return [`${GC}islandsPlayedJustNow`];
          if (kd < vC) return [`${GC}islandsPlayedMinutes`, {
            minutes: String(Math.floor(kd / IW))
          }];
          if (kd < xC) return [`${GC}islandsPlayedHours`, {
            hours: String(Math.floor(kd / vC))
          }];
          const pd = Math.floor(kd / xC);
          return 1 === pd ? [`${GC}islandsPlayedDay`] : [`${GC}islandsPlayedDays`, {
            days: String(pd)
          }]
        }(Nd.baf2IslandLastPlayedMs, gd),
        Md = void 0 === (Fd = Nd.baf2IslandItems) ? null : 0 === Fd ? [`${GC}islandsItemsNone`] : 1 === Fd ? [`${GC}islandsItemsOne`] : [`${GC}islandsItems`, {
          count: String(Fd)
        }];
      var Fd;
      const Yd = function(dd) {
          return dd ? 1 === dd ? [`${GC}islandsWaitingOne`] : [`${GC}islandsWaiting`, {
            count: String(dd)
          }] : null
        }(Nd.baf2IslandWaiting),
        md = Nd.baf2IslandUnreadable,
        bd = Nd.baf2IslandCoop,
        Sd = TC(Nd, Kd, Wd, od, vd, Pd),
        jd = (0, pd.useRef)(null);
      zC(null !== Ld, jd);
      const Xd = () => {
          var dd;
          Od(null), null === (dd = jd.current) || void 0 === dd || dd.focus()
        },
        fd = (dd, Jd) => {
          Xd(), null !== dd && Rd(dd, Jd)
        },
        nd = (dd, Jd) => qd(`${Go}${dd}`, {
          time: BW(qd, Jd)
        });
      return (0, MW.jsxs)("li", {
        ref: jd,
        tabIndex: -1,
        className: iN()("Baf2IslandCard", {
          Active: sd,
          Pending: ed,
          Shared: void 0 !== bd
        }),
        children: [(0, MW.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, MW.jsx)("strong", {
            className: "Baf2IslandName",
            children: Nd.baf2IslandName
          }), sd && (0, MW.jsx)("span", {
            className: "Baf2IslandBadge",
            children: qd(`${Go}islandsOnThis`)
          }), bd && (0, MW.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: qd(`${Go}islandsShared`)
          })]
        }), "member" === (null === bd || void 0 === bd ? void 0 : bd.baf2CoopRole) && (0, MW.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: nC(qd, `${Go}islandsSharedBy`, {
            owner: bd.baf2CoopOwner
          })
        }), void 0 !== md && (0, MW.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: qd("newer" === md ? `${Go}islandsUnreadable` : `${Go}islandsDamaged`)
        }), "corrupt" === md && od && (0, MW.jsx)("p", {
          className: "Baf2IslandStats",
          children: qd(`${Go}islandsDamagedFull`)
        }), void 0 === md && (0, MW.jsxs)(MW.Fragment, {
          children: [(0, MW.jsx)(JK, {
            tier: Nd.baf2IslandTier,
            t: qd
          }), (0, MW.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, MW.jsx)("span", {
              children: 1 === Nd.baf2IslandQuestsDone ? qd(`${Go}islandsQuestsDoneOne`) : qd(`${Go}islandsQuestsDone`, {
                count: String(Nd.baf2IslandQuestsDone)
              })
            }), (0, MW.jsx)("span", {
              children: 1 === Nd.baf2IslandMachines ? qd(`${Go}islandsMachinesOne`) : qd(`${Go}islandsMachines`, {
                count: String(Nd.baf2IslandMachines)
              })
            }), Md && (0, MW.jsx)("span", {
              children: qd(Md[0], Md[1])
            }), Yd && (0, MW.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: qd(Yd[0], Yd[1])
            }), ad && (0, MW.jsx)("span", {
              children: qd(ad[0], ad[1])
            })]
          })]
        }), bd && void 0 === bd.baf2CoopState && "people" !== Ld && (0, MW.jsx)(Bo, {
          members: bd.baf2CoopMembers,
          t: qd
        }), null === Ld && (0, MW.jsx)(so, {
          card: Nd,
          answered: Qd,
          nowMs: Cd,
          t: qd
        }), Sd.note && (0, MW.jsx)(kK, {
          note: Sd.note,
          className: iN()({
            Unreachable: void 0 !== (null === bd || void 0 === bd ? void 0 : bd.baf2CoopState)
          }),
          t: qd
        }), "rename" === Ld && (0, MW.jsx)(xo, {
          card: Nd,
          canRename: "enabled" === Sd.rename,
          done: fd,
          t: qd
        }), "delete" === Ld && (0, MW.jsx)(qo, {
          card: Nd,
          canDelete: "enabled" === Sd.delete,
          done: dd => {
            fd(dd, bd ? "delete" : void 0)
          },
          t: qd
        }), "people" === Ld && (0, MW.jsx)(io, {
          card: Nd,
          view: Sd,
          blocked: Pd,
          maxIslands: Zd,
          answered: Qd,
          nowMs: Cd,
          done: Xd,
          openSocial: xd,
          t: qd
        }), "leave" === Ld && (0, MW.jsx)(Mo, {
          className: "Leave",
          text: nC(qd, `${Go}islandsLeaveConfirm`, {
            island: Nd.baf2IslandName,
            owner: null !== (Jd = null === (kd = Nd.baf2IslandCoop) || void 0 === kd ? void 0 : kd.baf2CoopOwner) && void 0 !== Jd ? Jd : ""
          }),
          ConfirmButton: sP.B,
          confirmLabel: qd(`${Go}islandsLeaveYes`),
          canConfirm: "enabled" === Sd.leave,
          send: () => vo(Bd, Nd),
          done: dd => {
            fd(dd, "leave"), null !== dd && sd && Gd()
          },
          t: qd
        }), "unshare" === Ld && (0, MW.jsx)(Mo, {
          className: "Unshare",
          text: nC(qd, `${Go}islandsStopSharingConfirm`, {
            island: Nd.baf2IslandName
          }),
          ConfirmButton: sP.n,
          confirmLabel: qd(`${Go}islandsStopSharing`),
          canConfirm: "enabled" === Sd.unshare,
          send: () => Bd.sendIslandEdit(`baf2coopunshare ${Nd.baf2IslandId}`),
          done: dd => {
            fd(dd), null !== dd && Gd()
          },
          t: qd
        }), null === Ld && !ed && (0, MW.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Nd.baf2IslandName,
          children: [Fo(Sd.switch) && (0, MW.jsx)(sP.n, {
            disabled: "enabled" !== Sd.switch,
            onClick: Id,
            children: "tryAgain" === Sd.switchLabel ? qd(`${Go}islandsTryAgain`) : ld.switch > 0 ? nd("islandsSwitchIn", ld.switch) : qd(`${Go}islandsSwitch`)
          }), Fo(Sd.rename) && (0, MW.jsx)(sP.d, {
            disabled: "enabled" !== Sd.rename,
            onClick: () => {
              Od("rename")
            },
            children: qd(`${Go}islandsRename`)
          }), Fo(Sd.people) && (0, MW.jsx)(sP.d, {
            disabled: "enabled" !== Sd.people,
            onClick: () => {
              Od("people")
            },
            children: qd("players" === Sd.peopleLabel ? `${Go}islandsPlayersButton` : `${Go}islandsInviteButton`)
          }), Fo(Sd.unshare) && (0, MW.jsx)(sP.d, {
            disabled: "enabled" !== Sd.unshare,
            onClick: () => {
              Od("unshare")
            },
            children: qd(`${Go}islandsStopSharing`)
          }), Fo(Sd.dismiss) && (0, MW.jsx)(sP.d, {
            disabled: "enabled" !== Sd.dismiss,
            onClick: () => {
              Rd(vo(Bd, Nd), "dismiss"), sd && Gd()
            },
            children: qd(`${Go}islandsDismiss`)
          }), Fo(Sd.leave) && (0, MW.jsx)(sP.E, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Sd.leave,
            onClick: () => {
              Od("leave")
            },
            children: sd && ld.switch > 0 ? nd("islandsLeaveIn", ld.switch) : qd(`${Go}islandsLeave`)
          }), Fo(Sd.delete) && (0, MW.jsx)(sP.E, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Sd.delete,
            onClick: () => {
              Od("delete")
            },
            children: ld.change > 0 && Sd.deleteWaits ? nd("islandsDeleteIn", ld.change) : qd(`${Go}islandsDelete`)
          })]
        })]
      })
    }
    const mo = "buildAFactory2Game:";

    function bo(dd) {
      let {
        invite: Jd,
        actions: kd,
        full: Nd,
        maxIslands: Wd,
        waitSeconds: Pd,
        focus: Zd,
        focused: gd,
        join: Cd,
        decline: Kd,
        t: od
      } = dd;
      const [ld, Qd] = (0, pd.useState)(!1), Ld = (0, pd.useRef)(null);
      zC(ld, Ld), (0, pd.useEffect)((() => {
        var dd;
        Zd && (Qd(!0), null === (dd = Ld.current) || void 0 === dd || dd.focus(), gd())
      }), [Zd, gd]);
      const Od = function(dd, Jd, kd, pd, Nd) {
          return kd ? {
            join: !1,
            note: {
              key: `${GC}islandsJoinTooMany`,
              params: {
                max: String(pd)
              }
            }
          } : dd.baf2InvitePlayers >= Nd ? {
            join: !1,
            note: {
              key: `${GC}islandsJoinFull`
            }
          } : {
            join: Jd.switch,
            note: null
          }
        }(Jd, kd, Nd, Wd, 10),
        ed = Jd.baf2InviteIsland,
        Rd = Jd.baf2InvitePlayers,
        Id = () => {
          var dd;
          Qd(!1), null === (dd = Ld.current) || void 0 === dd || dd.focus()
        },
        Gd = Pd > 0 && null === Od.note ? od(`${mo}islandsJoinIn`, {
          time: BW(od, Pd)
        }) : od(`${mo}islandsJoin`);
      return (0, MW.jsxs)("li", {
        ref: Ld,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...ld ? tC(Id) : {},
        children: [(0, MW.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, MW.jsx)("strong", {
            className: "Baf2IslandName",
            children: ed
          })
        }), (0, MW.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: nC(od, `${mo}islandsInvitedBy`, {
            owner: Jd.baf2InviteOwner
          })
        }), (0, MW.jsx)(JK, {
          tier: Jd.baf2InviteTier,
          t: od
        }), (0, MW.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, MW.jsx)("span", {
            children: 1 === Rd ? od(`${mo}islandsPlayersCountOne`) : od(`${mo}islandsPlayersCount`, {
              count: String(Rd)
            })
          })
        }), Od.note && (0, MW.jsx)(kK, {
          note: Od.note,
          t: od
        }), ld && (0, MW.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: nC(od, `${mo}islandsJoinConfirm`, {
            island: ed
          })
        }), !ld && (0, MW.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": ed,
          children: [(0, MW.jsx)(sP.n, {
            disabled: !Od.join,
            onClick: () => {
              var dd;
              Qd(!0), null === (dd = Ld.current) || void 0 === dd || dd.focus()
            },
            children: Gd
          }), (0, MW.jsx)(sP.d, {
            onClick: Kd,
            children: od(`${mo}islandsDecline`)
          })]
        }), ld && (0, MW.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, MW.jsx)(sP.n, {
            disabled: !Od.join,
            onClick: Cd,
            children: od(`${mo}islandsJoinYes`)
          }), (0, MW.jsx)(sP.d, {
            onClick: Id,
            children: od(`${mo}islandsCancel`)
          })]
        })]
      })
    }

    function So(dd) {
      let {
        invites: Jd,
        actions: kd,
        full: pd,
        maxIslands: Nd,
        waitSeconds: Wd,
        focus: Pd,
        focused: Zd,
        leave: gd,
        declined: Cd,
        t: Kd
      } = dd;
      const od = cP();
      return (0, MW.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, MW.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Kd(`${mo}islandsInvitesTitle`)
        }), (0, MW.jsx)("ul", {
          className: "Baf2IslandCards",
          children: Jd.map((dd => {
            const Jd = dd.baf2InviteId;
            return (0, MW.jsx)(bo, {
              invite: dd,
              actions: kd,
              full: pd,
              maxIslands: Nd,
              waitSeconds: Wd,
              focus: Pd === Jd,
              focused: Zd,
              join: () => {
                od.send(`baf2coopaccept ${Jd}`), gd()
              },
              decline: () => {
                od.send(`baf2coopdecline ${Jd}`), Cd(Jd)
              },
              t: Kd
            }, Jd)
          }))
        })]
      })
    }
    const jo = "buildAFactory2Game:";

    function Xo(dd) {
      let {
        cards: Jd,
        activeName: kd,
        canStart: Nd,
        waitSeconds: Wd,
        leave: Pd,
        t: Zd
      } = dd;
      const gd = cP(),
        [Cd, Kd] = (0, pd.useState)(!1),
        [od, ld] = (0, pd.useState)(""),
        Qd = (0, pd.useRef)(null);
      zC(Cd, Qd), (0, pd.useEffect)((() => {
        var dd;
        Cd && (null === (dd = Qd.current) || void 0 === dd || dd.focus())
      }), [Cd]);
      const Ld = iC(Jd),
        Od = BC(od),
        ed = sC(Od),
        Rd = () => {
          Nd && !ed && (gd.send("" === Od || Od === Ld ? zd : `${zd} ${Od}`), Pd())
        },
        Id = () => {
          var dd;
          Kd(!1), null === (dd = Qd.current) || void 0 === dd || dd.focus()
        };
      return (0, MW.jsxs)("li", {
        ref: Qd,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Cd ? tC(Id) : {},
        children: [(0, MW.jsx)("strong", {
          className: "Baf2IslandName",
          children: Zd(`${jo}islandsNewTitle`)
        }), !Cd && (0, MW.jsx)("p", {
          className: "Baf2IslandStats",
          children: Zd(`${jo}islandsNewNote`)
        }), Cd && (0, MW.jsxs)(MW.Fragment, {
          children: [(0, MW.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: nC(Zd, `${jo}islandsNewConfirm`, {
              name: kd
            })
          }), (0, MW.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [Zd(`${jo}islandsNewNameLabel`), (0, MW.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: od,
              placeholder: Ld,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: VC,
              onChange: dd => {
                ld(dd.target.value)
              },
              ...uC(Rd, Id)
            })]
          }), ed && (0, MW.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: Zd(`${jo}islandsNameReserved`)
          })]
        }), (0, MW.jsxs)("div", {
          className: iN()("Baf2IslandButtons", {
            Stacked: Cd
          }),
          children: [(0, MW.jsx)(sP.n, {
            disabled: !Nd || Cd && ed,
            onClick: () => {
              if (!Cd) return ld(Ld), void Kd(!0);
              Rd()
            },
            children: Wd > 0 ? Zd(`${jo}islandsNewIn`, {
              time: BW(Zd, Wd)
            }) : Zd(Cd ? `${jo}islandsNewConfirmButton` : `${jo}islandsNew`)
          }), Cd && (0, MW.jsx)(sP.d, {
            onClick: Id,
            children: Zd(`${jo}islandsCancel`)
          })]
        })]
      })
    }

    function fo(dd) {
      var Jd, kd;
      let {
        message: Nd,
        arrivedAtMs: Wd,
        close: Pd,
        leave: Zd,
        openSocial: gd
      } = dd;
      const Cd = cP(),
        {
          t: Kd
        } = (0, YN.B)(),
        od = dK(1e3),
        [ld, Qd] = (0, pd.useState)(null),
        [Ld, Od] = (0, pd.useState)(new Map),
        [ed, Rd] = (0, pd.useState)(new Set),
        Id = Nd.baf2IslandCards,
        Gd = function(dd, Jd, kd, pd) {
          return (null !== dd && void 0 !== dd ? dd : []).filter((dd => Jd + dd.baf2InviteLeftMs > kd && !pd.has(dd.baf2InviteId)))
        }(Nd.baf2IslandsInvites, Wd, od, ed),
        vd = Gd.map((dd => dd.baf2InviteId)).join(" "),
        xd = (0, pd.useRef)(null),
        qd = HC(xd);
      wC(), (0, pd.useEffect)((() => {
        var dd, Jd;
        null !== (dd = xd.current) && void 0 !== dd && dd.contains(document.activeElement) || (null === (Jd = xd.current) || void 0 === Jd || Jd.focus())
      }), [Nd, vd]), (0, pd.useEffect)((() => {
        Od((dd => function(dd, Jd, kd, pd) {
          const Nd = new Map;
          for (const Wd of Jd) {
            const Jd = dd.get(Wd.baf2IslandId);
            Jd && (void 0 !== Jd.untilGone || pd < Jd.answer) && SC(Jd, Wd, kd) && Nd.set(Wd.baf2IslandId, Jd)
          }
          return Nd.size === dd.size ? dd : Nd
        }(dd, Nd.baf2IslandCards, Date.now(), Nd.baf2IslandsAnswered)))
      }), [Nd]);
      const Bd = qC(Wd, Nd.baf2IslandsWaitMs, od),
        sd = Nd.baf2IslandsBlocked,
        ad = YC(sd, Bd),
        Md = function(dd, Jd) {
          const kd = YC(dd, 0);
          return {
            switch: kd.switch ? Jd : 0,
            change: kd.change ? Jd : 0
          }
        }(sd, Bd),
        Fd = Id.length >= Nd.baf2IslandsMax,
        Yd = Id.length > 0,
        md = function(dd, Jd, kd) {
          return dd + Math.max(0, kd - Jd)
        }(Nd.baf2IslandsNowMs, Wd, od),
        bd = null !== (Jd = null === (kd = Id.find((dd => dd.baf2IslandActive))) || void 0 === kd ? void 0 : kd.baf2IslandName) && void 0 !== Jd ? Jd : "",
        Sd = function(dd) {
          const Jd = dd.filter(DC).length;
          return Jd <= 1 && Jd < dd.length
        }(Id),
        jd = !0 === Nd.baf2IslandsCoop,
        Xd = function(dd, Jd) {
          const kd = dd.find((dd => dd.baf2IslandActive)),
            pd = null === kd || void 0 === kd ? void 0 : kd.baf2IslandCoop;
          return kd && "member" === (null === pd || void 0 === pd ? void 0 : pd.baf2CoopRole) ? {
            key: `${GC}islandsKeepOwnMember`,
            names: {
              owner: pd.baf2CoopOwner,
              island: kd.baf2IslandName
            }
          } : {
            key: Jd ? `${GC}islandsKeepOwn` : `${GC}islandsKeepOwnSolo`
          }
        }(Id, jd),
        [fd, nd] = (0, pd.useState)(null);
      (0, pd.useEffect)((() => {
        void 0 !== Nd.baf2IslandsFocusInvite && nd(Nd.baf2IslandsFocusInvite)
      }), [Nd]);
      const Ud = (0, pd.useCallback)((() => {
          nd(null)
        }), []),
        yd = ld ? Id.find((dd => dd.baf2IslandId === ld.id)) : void 0,
        Dd = ld && yd && "hidden" !== TC(yd, ad, Sd, Fd, jd, sd)[ld.mode] ? ld : null;
      return (0, MW.jsx)(BP.e, {
        close: Pd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, MW.jsxs)("section", {
          ref: xd,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: qd ? {
            marginTop: `${qd.marginTop}px`,
            maxHeight: `${qd.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsxs)("div", {
              children: [(0, MW.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Kd(`${jo}islandsTitle`)
              }), Yd && (0, MW.jsx)("p", {
                children: Kd(`${jo}islandsSubtitle`, {
                  count: String(Id.length),
                  max: String(Nd.baf2IslandsMax)
                })
              })]
            }), (0, MW.jsx)(sP.i, {
              ariaLabel: Kd(`${jo}islandsClose`),
              onClick: Pd
            })]
          }), (0, MW.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== sd && (0, MW.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: nC(Kd, aC(sd, MC(Id)), {
                island: bd
              })
            }), Yd && Gd.length > 0 && (0, MW.jsx)(So, {
              invites: Gd,
              actions: ad,
              full: Fd,
              maxIslands: Nd.baf2IslandsMax,
              waitSeconds: Md.switch,
              focus: fd,
              focused: Ud,
              leave: Zd,
              declined: dd => {
                Rd((Jd => new Set(Jd).add(dd)))
              },
              t: Kd
            }), Yd && (0, MW.jsxs)(MW.Fragment, {
              children: [Fd && (0, MW.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Kd(`${jo}islandsFull`, {
                  max: String(Nd.baf2IslandsMax)
                })
              }), (0, MW.jsx)("p", {
                className: "Baf2IslandsNote",
                children: nC(Kd, Xd.key, Xd.names)
              }), (0, MW.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Id.map((dd => {
                  const Jd = dd.baf2IslandId;
                  return (0, MW.jsx)(Yo, {
                    card: dd,
                    keepOwn: Sd,
                    coopOn: jd,
                    openSocial: gd,
                    blocked: sd,
                    maxIslands: Nd.baf2IslandsMax,
                    serverNowMs: md,
                    nowMs: od,
                    actions: ad,
                    full: Fd,
                    waits: Md,
                    answered: Nd.baf2IslandsAnswered,
                    mode: (null === Dd || void 0 === Dd ? void 0 : Dd.id) === Jd ? Dd.mode : null,
                    setMode: dd => {
                      Qd(null === dd ? null : {
                        id: Jd,
                        mode: dd
                      })
                    },
                    pending: SC(Ld.get(Jd), dd, od),
                    onSent: (kd, pd) => {
                      Od((Nd => {
                        const Wd = {
                          atMs: Date.now(),
                          from: dd.baf2IslandName,
                          answer: kd
                        };
                        return new Map(Nd).set(Jd, pd ? {
                          ...Wd,
                          untilGone: pd
                        } : Wd)
                      }))
                    },
                    leave: Zd,
                    switchTo: () => {
                      Cd.send(`baf2islandswitch ${Jd}`), Zd()
                    },
                    t: Kd
                  }, Jd)
                })), !Fd && (0, MW.jsx)(Xo, {
                  cards: Id,
                  activeName: bd,
                  canStart: ad.change,
                  waitSeconds: Md.change,
                  leave: Zd,
                  t: Kd
                })]
              })]
            })]
          })]
        })
      })
    }
    var no = kd(4904);
    const Uo = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        nW: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      yo = Object.keys(Uo),
      Do = new Set([...Object.keys(zJ), ...[...XJ.Press.recipes, ...XJ["Wire Mill"].recipes].map((dd => dd.output))]),
      To = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Eo = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      co = / Bar$|Alloy$/,
      ho = /Porkchop|Beef|Mutton|Venison|Steak/,
      ro = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const uo = (0, pd.memo)((function(dd) {
      let {
        item: Jd,
        name: kd,
        amount: pd,
        selected: Nd,
        small: Wd,
        onPick: Pd
      } = dd;
      return (0, MW.jsxs)("button", {
        type: "button",
        className: iN()("Baf2TermTile", {
          On: Nd,
          Small: Wd
        }),
        "aria-label": `${kd}: ${pd}`,
        "aria-pressed": Nd,
        onClick: () => {
          Pd(Jd)
        },
        children: [(0, MW.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, MW.jsx)(bN.d, {
            itemName: Jd,
            amount: 0
          })
        }), (0, MW.jsx)("span", {
          className: "Baf2TermCount",
          children: xW(pd, 1e4)
        }), !Wd && (0, MW.jsx)("span", {
          className: "Baf2TermName",
          children: kd
        })]
      })
    }));

    function to(dd) {
      let {
        store: Jd,
        close: kd,
        send: Nd
      } = dd;
      const {
        t: Wd
      } = (0, YN.B)(), {
        isTouchScreen: Pd
      } = (0, qN.j)(["isTouchScreen"]);
      ! function(dd) {
        const [Jd, kd] = (0, pd.useState)(dd.version);
        (0, pd.useEffect)((() => (kd(dd.version), dd.subscribe((() => {
          kd(dd.version)
        })))), [dd])
      }(Jd);
      const [Zd, gd] = (0, pd.useState)("all"), [Cd, Kd] = (0, pd.useState)(!1), [od, ld] = (0, pd.useState)(""), [Qd, Ld] = (0, pd.useState)(""), [Od, ed] = (0, pd.useState)(null), [Rd, Id] = (0, pd.useState)(!1), [Gd, vd, xd] = function() {
        const dd = (0, pd.useRef)(null),
          [Jd, kd] = (0, pd.useState)(!1),
          Nd = () => {
            const Jd = dd.current;
            kd(null !== Jd && Jd.scrollLeft + Jd.clientWidth < Jd.scrollWidth - 1)
          };
        return (0, pd.useEffect)(Nd), (0, pd.useEffect)((() => {
          const Jd = dd.current;
          if (!Jd) return;
          const kd = new ResizeObserver(Nd);
          return kd.observe(Jd), () => {
            kd.disconnect()
          }
        }), []), [dd, Jd, Nd]
      }(), qd = (0, pd.useMemo)((() => new Map), [Wd]), Bd = dd => {
        let Jd = qd.get(dd);
        return void 0 === Jd && (Jd = function(dd, Jd) {
          const kd = /^(.+) \((.+)\)$/.exec(dd);
          return kd ? Jd(kd[2], kd[1]) : dd
        }(PW(Wd, dd), ((dd, Jd) => Wd("buildAFactory2Game:terminalTileKind", {
          kind: dd,
          base: Jd
        }))), qd.set(dd, Jd)), Jd
      }, sd = Jd.isReadOnly(), ad = Rd && !sd, Md = Jd.recent(), Fd = Jd.items(), Yd = Qd.trim().toLowerCase(), md = ad ? Jd.heldItems(Od) : ("recent" === Zd ? Md : Fd).filter((dd => {
        const Jd = Bd(dd);
        return ("all" === Zd || "recent" === Zd || function(dd) {
          return LW(dd) ? "farm" : To.test(dd) ? "nuclear" : co.test(dd) ? "bars" : ho.test(dd) ? "farm" : Eo.test(dd) ? "nW" : Do.has(dd) ? "parts" : ro.test(dd) ? "farm" : "other"
        }(dd) === Zd) && ("" === Yd || Jd.toLowerCase().includes(Yd)) && ("" === od || Jd.toUpperCase().startsWith(od))
      })), bd = new Set(Fd.map((dd => Bd(dd).charAt(0).toUpperCase()))), Sd = dd => ad ? Jd.heldAmount(dd) : Jd.amount(dd), jd = !ad && "recent" !== Zd && Md.length > 0, Xd = function(dd, Jd) {
        return null !== dd && Jd.includes(dd) ? dd : null
      }(Od, jd ? [...md, ...Md] : md), fd = null === Xd ? 0 : Jd.amount(Xd), nd = null === Xd ? 0 : Sd(Xd), Ud = (0, pd.useCallback)((dd => {
        ed((Jd => Jd === dd ? null : dd))
      }), []), yd = dd => nd > 0 || ad && null === Xd && "fill" === dd && md.length > 0, Dd = ad ? [
        ["one", Wd("buildAFactory2Game:terminalStoreOne")],
        ["stack", Wd("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Wd(null === Xd ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Wd("buildAFactory2Game:terminalTakeOne")],
        ["stack", Wd("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Wd("buildAFactory2Game:terminalFill")]
      ], Td = ad ? Wd("buildAFactory2Game:terminalStoreEmpty") : "" !== od ? Wd("buildAFactory2Game:terminalEmptyLetter", {
        letter: od
      }) : "" !== Yd ? Wd("buildAFactory2Game:terminalEmptySearch", {
        query: Qd
      }) : Wd("buildAFactory2Game:terminalEmpty");
      return (0, MW.jsx)(BP.e, {
        close: kd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, MW.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsxs)("div", {
              children: [(0, MW.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Wd(Jd.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, MW.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, MW.jsx)("span", {
                  className: iN()({
                    Off: ad
                  }),
                  children: Wd("buildAFactory2Game:terminalSubtitle", {
                    count: String(Jd.siloCount())
                  })
                }), !sd && (0, MW.jsx)("span", {
                  className: iN()({
                    Off: !ad
                  }),
                  children: Wd("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !sd && (0, MW.jsx)(no.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Wd("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Wd("buildAFactory2Game:terminalModeStore")
              }],
              value: ad ? "store" : "take",
              onChange: dd => {
                Id("store" === dd), ed(null)
              },
              ariaLabel: Wd("buildAFactory2Game:terminalModes")
            }), (0, MW.jsx)(sP.i, {
              onClick: kd
            })]
          }), (0, MW.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, MW.jsxs)("div", {
              className: iN()("Baf2TermTools", {
                Hidden: ad
              }),
              children: [(0, MW.jsx)("div", {
                ref: Gd,
                className: iN()("Baf2TermChips", {
                  MoreRight: vd
                }),
                onScroll: xd,
                children: Cd ? (0, MW.jsxs)(MW.Fragment, {
                  children: [(0, MW.jsx)("button", {
                    type: "button",
                    "aria-label": Wd("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Kd(!1), ld("")
                    },
                    children: "\u2190"
                  }), [...bd].sort().map((dd => (0, MW.jsx)("button", {
                    type: "button",
                    className: iN()({
                      On: od === dd
                    }),
                    onClick: () => {
                      ld(od === dd ? "" : dd)
                    },
                    children: dd
                  }, dd)))]
                }) : (0, MW.jsxs)(MW.Fragment, {
                  children: [(0, MW.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Kd(!0)
                    },
                    children: Wd("buildAFactory2Game:terminalLetters")
                  }), yo.map((dd => (0, MW.jsx)("button", {
                    type: "button",
                    className: iN()({
                      On: Zd === dd
                    }),
                    onClick: () => {
                      gd(dd)
                    },
                    children: Wd(Uo[dd])
                  }, dd)))]
                })
              }), !Pd && (0, MW.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Qd,
                placeholder: Wd("buildAFactory2Game:terminalSearch"),
                "aria-label": Wd("buildAFactory2Game:terminalSearch"),
                onChange: dd => {
                  Ld(dd.target.value)
                },
                onKeyDown: dd => {
                  dd.stopPropagation()
                }
              }), (0, MW.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Wd("buildAFactory2Game:terminalResort"),
                title: Wd("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  Jd.resort()
                },
                children: "\u21c5"
              })]
            }), jd && (0, MW.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, MW.jsx)("span", {
                children: Wd(Uo.recent)
              }), Md.map((dd => (0, MW.jsx)(uo, {
                item: dd,
                name: Bd(dd),
                amount: Jd.amount(dd),
                selected: Xd === dd,
                small: !0,
                onPick: Ud
              }, dd)))]
            }), (0, MW.jsx)("div", {
              className: "Baf2TermTiles",
              children: md.length > 0 ? md.map((dd => (0, MW.jsx)(uo, {
                item: dd,
                name: Bd(dd),
                amount: Sd(dd),
                selected: Xd === dd,
                onPick: Ud
              }, dd))) : (0, MW.jsx)("p", {
                className: "Baf2TermEmpty",
                children: Td
              })
            }), (0, MW.jsxs)("div", {
              className: iN()("Baf2TermActions", {
                Hidden: ad && 0 === md.length
              }),
              children: [(0, MW.jsx)("span", {
                className: "Baf2TermPicked",
                children: sd ? (0, MW.jsxs)(MW.Fragment, {
                  children: [null !== Xd && fd > 0 ? Bd(Xd) : Wd("buildAFactory2Game:terminalVisiting"), (0, MW.jsx)("small", {
                    children: Wd("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Xd ? (0, MW.jsxs)(MW.Fragment, {
                  children: [Bd(Xd), (0, MW.jsx)("small", {
                    children: Wd("buildAFactory2Game:terminalStored", {
                      amount: fd.toLocaleString()
                    })
                  })]
                }) : Wd(ad ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !sd && Dd.map((dd => {
                let [kd, pd] = dd;
                const Wd = "fill" === kd ? sP.j : sP.d;
                return (0, MW.jsx)(Wd, {
                  className: "Baf2TermTake",
                  disabled: !yd(kd),
                  onClick: () => {
                    (dd => {
                      yd(dd) && Nd(null === Xd ? Jd.putAll() : ad ? Jd.put(dd, Xd) : Jd.take(dd, Xd))
                    })(kd)
                  },
                  children: pd
                }, kd)
              }))]
            })]
          })]
        })
      })
    }

    function Vo(dd) {
      let {
        kind: Jd,
        icon: kd,
        label: pd,
        number: Nd,
        preview: Wd,
        note: Pd,
        tone: Zd = null,
        share: gd,
        onExplain: Cd
      } = dd;
      return (0, MW.jsxs)("button", {
        type: "button",
        className: iN()("NxLane", Jd, {
          Warn: "warn" === Zd,
          Danger: "danger" === Zd
        }),
        onClick: Cd,
        children: [(0, MW.jsxs)("span", {
          className: "NxLaneHead",
          children: [kd, (0, MW.jsx)("span", {
            className: "NxLaneLabel",
            children: pd
          })]
        }), (0, MW.jsxs)("span", {
          className: "NxLaneNum",
          children: [Nd, Wd && (0, MW.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Wd]
          })]
        }), (0, MW.jsx)("span", {
          className: "NxLaneNote",
          children: Pd
        }), void 0 !== gd && (0, MW.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, gd)) + "%"
          }
        })]
      })
    }

    function zo(dd) {
      let {
        kind: Jd,
        step: kd,
        short: pd,
        planned: Nd
      } = dd;
      return (0, MW.jsx)("i", {
        className: iN()("NxPipe", Jd, `Step${kd}`, {
          Short: pd,
          Planned: Nd
        }),
        "aria-hidden": "true"
      })
    }

    function Ho(dd) {
      let {
        max: Jd,
        bands: kd,
        ticks: pd,
        now: Nd,
        settle: Wd,
        settleTone: Pd,
        onExplain: Zd
      } = dd;
      const gd = dd => Math.max(0, Math.min(Jd, dd)) / Jd * 100 + "%";
      let Cd = 0;
      return (0, MW.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: Zd,
        children: [(0, MW.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [kd.map((dd => {
            const Jd = {
              bottom: gd(Cd),
              height: `calc(${gd(dd.upTo)} - ${gd(Cd)})`
            };
            return Cd = dd.upTo, (0, MW.jsx)("i", {
              className: iN()("NxGaugeBand", dd.kind),
              style: Jd
            }, dd.kind)
          })), null !== Nd && (0, MW.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: gd(Nd)
            }
          }), void 0 !== Wd && null !== Wd && (0, MW.jsx)("i", {
            className: iN()("NxGaugeSettle", {
              Bad: "bad" === Pd
            }),
            style: {
              bottom: gd(Wd)
            }
          })]
        }), (0, MW.jsx)("span", {
          className: "NxGaugeTicks",
          children: pd.map((dd => (0, MW.jsx)("small", {
            style: {
              bottom: gd(dd)
            },
            children: dd
          }, dd)))
        })]
      })
    }

    function wo(dd) {
      const [Jd, kd] = (0, pd.useState)(null), [Nd, Wd] = (0, pd.useState)((() => {
        try {
          return null === window.localStorage.getItem(dd)
        } catch {
          return !1
        }
      })), Pd = (0, pd.useRef)(null);
      (0, pd.useEffect)((() => () => {
        null !== Pd.current && clearTimeout(Pd.current)
      }), []);
      const Zd = (0, pd.useCallback)((Jd => {
          kd(Jd), Wd(!1);
          try {
            window.localStorage.setItem(dd, "1")
          } catch {}
          null !== Pd.current && clearTimeout(Pd.current), Pd.current = setTimeout((() => {
            Pd.current = null, kd(null)
          }), 5e3)
        }), [dd]),
        gd = (0, pd.useCallback)(((Jd, kd) => {
          const pd = `${dd}:${Jd}`;
          try {
            if (null !== window.localStorage.getItem(pd)) return;
            window.localStorage.setItem(pd, "1")
          } catch {
            return
          }
          Zd(kd)
        }), [Zd, dd]);
      return {
        explained: Jd,
        hinting: Nd,
        explain: Zd,
        explainOnce: gd
      }
    }

    function Ao(dd) {
      let {
        text: Jd,
        tone: kd,
        explained: pd
      } = dd;
      return (0, MW.jsxs)("p", {
        className: iN()("NxStatus", null === pd ? kd : "Explain"),
        "aria-live": "polite",
        children: [null !== pd && (0, MW.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== pd && void 0 !== pd ? pd : Jd]
      })
    }
    const dl = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function Jl(dd, Jd) {
      const kd = Number(dd[Jd]);
      return 1 === kd || 2 === kd || 3 === kd ? kd : 0
    }

    function kl(dd) {
      return !!sg("reactor", dd.baf2RxNeed) || void 0 !== dd.baf2RxLayout && dd.baf2RxNeed.some((dd => {
        let [Jd, kd] = dd;
        return kd > 0 && dl.includes(Jd)
      }))
    }
    const pl = "buildAFactory2Game:";

    function Nl(dd) {
      let {
        status: Jd,
        store: kd,
        busy: pd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)();
      return function(dd) {
        return 0 !== (dd.baf2RxFlags & eJ) && (!dd.baf2RxFormed || void 0 !== dd.baf2RxLayout)
      }(Jd) ? (0, MW.jsx)(sP.j, {
        disabled: !kl(Jd) || pd,
        onClick: () => {
          kd.tap("fill", (() => {
            kd.send("fill")
          }))
        },
        children: Nd(void 0 !== Jd.baf2RxLayout ? `${pl}rxFillLayout` : `${pl}rxFill`)
      }) : null
    }

    function Wl(dd) {
      let {
        status: Jd,
        store: kd,
        readOnly: Nd,
        bare: Wd = !1
      } = dd;
      const {
        t: Pd
      } = (0, YN.B)(), Zd = Jd.baf2RxLayout, [gd, Cd, Kd] = Jd.baf2RxDims, od = (0, pd.useMemo)((() => {
        if (void 0 === Zd) return 0;
        const dd = Uint8Array.from(Zd, ((dd, Jd) => Jl(Zd, Jd)));
        return kg([gd - 2, Cd - 2, Kd - 2], dd).max
      }), [Zd, gd, Cd, Kd]);
      return void 0 === Zd ? null : (0, MW.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Wd && (0, MW.jsx)("span", {
          className: "Baf2RxHint",
          children: Pd(`${pl}rxLayoutLine`, {
            amount: bg(od)
          })
        }), !Nd && (0, MW.jsx)(sP.d, {
          onClick: () => {
            kd.send("layout", 0)
          },
          children: Pd(`${pl}rxLayoutHide`)
        })]
      })
    }
    const Pl = "buildAFactory2Game:",
      Zl = {
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

    function gl(dd) {
      let {
        id: Jd,
        title: kd,
        body: pd,
        bodyParams: Nd,
        yes: Wd,
        cancel: Pd,
        confirm: Zd
      } = dd;
      const {
        t: gd
      } = (0, YN.B)();
      return (0, MW.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": Jd,
        children: [(0, MW.jsx)("h3", {
          id: Jd,
          children: gd(kd)
        }), (0, MW.jsx)("p", {
          children: gd(pd, Nd)
        }), (0, MW.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, MW.jsx)(sP.f, {
            onClick: Pd,
            children: gd(`${Pl}rxCancel`)
          }), (0, MW.jsx)(sP.B, {
            onClick: Zd,
            children: gd(Wd)
          })]
        })]
      })
    }

    function Cl(dd) {
      const [Jd, kd] = (0, pd.useState)((() => dd.get()));
      return (0, pd.useEffect)((() => (kd(dd.get()), dd.subscribe((() => {
        kd(dd.get())
      })))), [dd]), Jd
    }

    function Kl(dd) {
      let {
        kind: Jd,
        cap: kd,
        busy: Nd = !1,
        whyNot: Wd = null,
        apart: Pd
      } = dd;
      const {
        t: Zd
      } = (0, YN.B)(), [gd, Cd] = (0, pd.useState)(!1), Kd = null !== Wd, od = (0, pd.useRef)(null);
      if ((0, pd.useEffect)((() => {
          Kd && Cd(!1)
        }), [Kd]), (0, pd.useLayoutEffect)((() => {
          var dd;
          const Jd = null === (dd = od.current) || void 0 === dd ? void 0 : dd.firstElementChild;
          Kd ? null === Jd || void 0 === Jd || Jd.setAttribute("aria-disabled", "true") : Nd || null === Jd || void 0 === Jd || Jd.removeAttribute("aria-disabled")
        })), !gd || Kd) return (0, MW.jsx)("span", {
        ref: od,
        className: "Baf2RxApartWrap",
        children: (0, MW.jsx)(sP.f, {
          disabled: Nd,
          className: iN()({
            Baf2RxNotYet: Kd
          }),
          onClick: () => {
            Wd ? Wd() : Cd(!0)
          },
          children: Zd(`${Pl}rxApart`)
        })
      });
      const ld = "battery" === Jd,
        Qd = void 0 === kd ? `${Pl}batApartConfirmBodyPlan` : `${Pl}batApartConfirmBody`;
      return (0, MW.jsx)(gl, {
        id: `baf2ApartTitle_${Jd}`,
        title: ld ? `${Pl}batApartConfirmTitle` : `${Pl}rxApartConfirmTitle`,
        body: ld ? Qd : `${Pl}rxApartConfirmBody`,
        bodyParams: void 0 === kd ? void 0 : {
          cap: kd
        },
        yes: `${Pl}rxApart`,
        cancel: () => {
          Cd(!1)
        },
        confirm: () => {
          Cd(!1), Pd()
        }
      })
    }

    function ol(dd) {
      let {
        mood: Jd,
        big: kd
      } = dd;
      const pd = Zl[Jd],
        Nd = [];
      return pd.rows.forEach(((dd, Jd) => {
        for (let kd = 0; kd < dd.length; kd++) "." !== dd[kd] && Nd.push((0, MW.jsx)("rect", {
          x: kd + 1,
          y: Jd + 1,
          width: 1,
          height: 1,
          fill: "w" === dd[kd] ? "#8fd3ff" : pd.colour
        }, `${kd},${Jd}`))
      })), (0, MW.jsxs)("svg", {
        className: iN()("Baf2RxFace", {
          Big: kd,
          Alarm: "alarm" === Jd
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, MW.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, MW.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Nd]
      })
    }

    function ll(dd) {
      return vW(dd, "+").replace("+", "")
    }

    function Ql(dd) {
      let {
        kind: Jd,
        dims: kd,
        cap: pd,
        disabled: Nd,
        compact: Wd,
        resize: Pd
      } = dd;
      const {
        t: Zd
      } = (0, YN.B)(), {
        min: gd,
        max: Cd
      } = Tk(Jd), Kd = Math.min(pd, Cd), od = [`${Pl}rxWide`, `${Pl}rxTall`, `${Pl}rxDeep`], ld = {
        w: String(kd[0]),
        h: String(kd[1]),
        d: String(kd[2]),
        blocks: String(mg(Jd, kd))
      };
      return (0, MW.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, MW.jsx)("div", {
          className: "Baf2RxSteppers",
          children: kd.map(((dd, Jd) => {
            const Wd = pd => {
                const Nd = [kd[0], kd[1], kd[2]];
                Nd[Jd] = dd + pd, Pd(Nd)
              },
              ld = dd >= Kd;
            return (0, MW.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, MW.jsx)("button", {
                type: "button",
                "aria-label": Zd(`${Pl}rxSmaller`),
                disabled: Nd || dd <= gd,
                onClick: () => {
                  Wd(-1)
                },
                children: "\u2212"
              }), (0, MW.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [dd, (0, MW.jsx)("small", {
                  children: Zd(od[Jd])
                })]
              }), (0, MW.jsx)("button", {
                type: "button",
                "aria-label": Zd(`${Pl}rxBigger`),
                disabled: Nd || ld,
                onClick: () => {
                  Wd(1)
                },
                children: ld && pd < Cd ? "\ud83d\udd12" : "+"
              })]
            }, od[Jd])
          }))
        }), !Wd && (0, MW.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === Jd ? Zd(`${Pl}rxSizeLine`, {
            ...ld,
            water: String(Yg(kd))
          }) : Zd(`${Pl}batSizeLine`, ld)
        })]
      })
    }

    function Ll(dd) {
      let {
        on: Jd,
        label: kd,
        disabled: pd,
        locked: Nd,
        pending: Wd,
        toggle: Pd
      } = dd;
      return (0, MW.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": Jd,
        disabled: pd,
        "aria-disabled": Nd || void 0,
        className: iN()("Baf2RxSwitch", {
          On: Jd,
          Locked: Nd,
          Pending: Wd
        }),
        onClick: Pd,
        children: [(0, MW.jsx)("span", {
          className: "Baf2RxKnob"
        }), kd]
      })
    }
    const Ol = "buildAFactory2Game:",
      el = .95;

    function Rl(dd, Jd) {
      return 0 !== (dd.baf2RxFlags & Jd)
    }

    function Il(dd) {
      return "cryo" === dd ? Ad.r : Ad.t
    }

    function Gl(dd) {
      var Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd;
      return dd.baf2RxCryo ? {
        dQ: "cryo",
        usePerS: null !== (Nd = dd.baf2RxCryoUse) && void 0 !== Nd ? Nd : 0,
        needPerS: null !== (Wd = dd.baf2RxCryoNeed) && void 0 !== Wd ? Wd : 0,
        inPerS: null !== (Pd = dd.baf2RxCryoIn) && void 0 !== Pd ? Pd : 0,
        stored: null !== (Zd = dd.baf2RxCryoStored) && void 0 !== Zd ? Zd : 0,
        makersShort: null !== (gd = dd.baf2RxMixersShort) && void 0 !== gd ? gd : 0,
        waterBeside: null !== (Cd = dd.baf2RxWaterUse) && void 0 !== Cd ? Cd : 0,
        pct: dd.baf2RxWater
      } : {
        dQ: "water",
        usePerS: null !== (Jd = dd.baf2RxWaterUse) && void 0 !== Jd ? Jd : 0,
        needPerS: null !== (kd = dd.baf2RxWaterNeed) && void 0 !== kd ? kd : 0,
        inPerS: dd.baf2RxWaterIn,
        stored: dd.baf2RxWaterStored,
        makersShort: null !== (pd = dd.baf2RxCondensersShort) && void 0 !== pd ? pd : 0,
        waterBeside: 0,
        pct: dd.baf2RxWater
      }
    }

    function vl(dd) {
      const Jd = "running" === dd.baf2RxState || "idle" === dd.baf2RxState;
      return dd.baf2RxFormed && dd.baf2RxTarget !== dd.baf2RxThrottle && Jd ? xl(dd, dd.baf2RxTarget) : null
    }

    function xl(dd, Jd) {
      const [kd, pd, Nd, , , , Wd, , Pd] = dd.baf2RxStats, Zd = Rl(dd, LJ), gd = Gl(dd), Cd = gd.pct / 100, {
        gen: Kd,
        out: od,
        load: ld
      } = function(dd, Jd, kd, pd) {
        const Nd = kd ? VZ : 1,
          Wd = Math.min(dd.fuelHeat * Nd * Math.max(0, Math.min(1, Jd)), dd.size * Nd);
        return {
          gen: Wd,
          out: Wd,
          load: Qg(Wd, dd.cooling, pd)
        }
      }({
        fuelHeat: kd,
        cooling: pd,
        size: Nd
      }, Jd / 100, Zd, Cd), Qd = Og(Wd || Jg(...dd.baf2RxDims)), Ld = dd.baf2RxHeat, Od = Math.abs(ld - Ld), ed = function(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ad.t;
        const Wd = kd ? VZ : 1,
          Pd = Math.min(dd.fuelHeat * Wd * Jd / 100, dd.size * Wd),
          Zd = Pd,
          gd = dd.fuelHeat * Wd,
          Cd = dd.cooling * lg(pd.pct / 100),
          Kd = gd > 0 && Cd < dd.size * Wd ? Math.floor(100 * Cd / gd) : 100,
          od = Pd * Nd - pd.inPerS;
        return {
          out: Zd,
          hotAbove: Kd >= 100 ? null : Math.max(0, Kd),
          waterSecs: pd.pct >= 100 && od > 1e-6 ? Math.max(0, pd.stored) / od : null
        }
      }({
        fuelHeat: kd,
        cooling: pd,
        size: Nd
      }, Jd, Zd, {
        pct: gd.pct,
        inPerS: gd.inPerS,
        stored: gd.stored
      }, Il(gd.dQ));
      return {
        pct: Jd,
        out: od,
        coolPerS: Kd * Il(gd.dQ),
        pelletsPerMin: Pd > 0 ? od / Pd * 60 : 0,
        settle: ld,
        settleS: Od > 2 ? Qd * Math.log(Od / 2) : 0,
        overheatS: ld > 100 && Ld < 100 ? Qd * Math.log((ld - Ld) / (ld - 100)) : null,
        hotAbove: ed.hotAbove,
        coolantSecs: ed.waterSecs
      }
    }

    function ql(dd) {
      return dd.baf2RxThrottle <= 0 && "running" !== dd.baf2RxState ? 0 : xl(dd, dd.baf2RxTarget).pelletsPerMin / 60
    }

    function Bl(dd, Jd) {
      if (dd <= 0 || Jd <= 0) return 0;
      const kd = dd / Jd;
      return kd < .25 ? 1 : kd < .5 ? 2 : kd < .8 ? 3 : 4
    }

    function sl(dd, Jd) {
      const kd = {};
      for (const [pd, Nd] of Object.entries(Jd.params)) kd[pd] = "time" === pd ? BW(dd, Nd) : "amount" === pd ? bg(Nd) : String(Math.round(Nd));
      return dd(Jd.key, kd)
    }

    function il(dd, Jd) {
      return {
        key: `${Ol}${dd}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: Jd
      }
    }

    function al(dd) {
      var Jd;
      const kd = Rl(dd, LJ),
        pd = "running" === dd.baf2RxState,
        Nd = Gg(dd),
        Wd = dd.baf2RxHeat;
      var Pd;
      if (pd && Wd > uZ) return {
        key: null !== (Pd = Nd.fix) && void 0 !== Pd ? Pd : `${Ol}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const Zd = pd ? xl(dd, dd.baf2RxTarget).coolantSecs : null,
        gd = "cryo" === Gl(dd).dQ;
      if (null !== Zd && Zd >= 1 && Zd <= 30) return il(gd ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Cd = AZ(Jg(...dd.baf2RxDims)).waste,
        Kd = pd ? ig(dd, Cd, ql(dd)).fullInS : null;
      if (null !== Kd && Kd <= 120 && dd.baf2RxWaste >= .5 * Cd) return il("rxWarnWaste", "warn");
      if (null !== Zd && Zd >= 1) return il(gd ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: Zd
      });
      const od = "noWater" === dd.baf2RxState && Wd > uZ;
      if (dd.baf2RxDamage >= 1 && !od) return il("rxDamagedHeals", "warn", {
        pct: dd.baf2RxDamage
      });
      if (dd.baf2RxCryoCut) return il("rxFix_cryoCut", "warn");
      const ld = Gl(dd);
      if ("noWater" === dd.baf2RxState && "cryo" === ld.dQ) return il("noWater" === dd.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Qd = Nd.fix === `${Ol}rxFix_scramCool` || "idle" === dd.baf2RxState && dd.baf2RxTarget <= 0;
      if (Qd && dd.baf2RxFuel <= 0) return il("rxFix_noFuel", "warn");
      if (Qd && dd.baf2RxWaterIn <= 0 && (null !== (Jd = dd.baf2RxCryoIn) && void 0 !== Jd ? Jd : 0) <= 0) return il("rxFix_noWater", "warn");
      const Ld = Nd.fix === `${Ol}rxFix_scramCool` ? xg(dd) : null;
      if (null !== Ld) return {
        key: Ld.key,
        params: {
          amount: Ld.amount
        },
        tone: "info"
      };
      if ("running" !== dd.baf2RxState && "idle" !== dd.baf2RxState && null !== Nd.fix) return {
        key: Nd.fix,
        params: {},
        tone: "scram" === dd.baf2RxState ? "info" : od ? "bad" : "warn"
      };
      var Od;
      if ("idle" === dd.baf2RxState && dd.baf2RxTarget <= 0) return {
        key: null !== (Od = Nd.fix) && void 0 !== Od ? Od : `${Ol}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const ed = dd.baf2RxCryoStarved;
      if ("cryo" === ld.dQ && ed && ld.needPerS > 0 && ld.usePerS < el * ld.needPerS) return il("noWater" === ed ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const Rd = "cryo" === ld.dQ,
        Id = ld.needPerS > 0 && ld.usePerS < el * ld.needPerS;
      if (Rd ? Id || ld.makersShort > 0 && ld.pct < 100 : ld.pct < 100) {
        const Jd = Rd && Id ? Math.floor(100 * ld.usePerS / ld.needPerS) : Math.min(100, ld.pct);
        if (ld.makersShort > 0) {
          return il(`${Rd?"rxCryoShortLine":"rxWaterShortLine"}${1===ld.makersShort?"One":""}${!Rd&&dd.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: Jd,
            count: ld.makersShort
          })
        }
        return il(Rd ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: Jd
        })
      }
      const Gd = function(dd) {
        const [Jd, kd, pd] = dd.baf2RxStats, Nd = Gl(dd), Wd = Lg({
          fuelHeat: Jd,
          cooling: kd,
          size: pd
        }, "cryo" === Nd.dQ ? Ad.g : 1, !0);
        return Math.max(0, Wd * Il(Nd.dQ) - Nd.inPerS)
      }(dd);
      if (kd && Gd > 0) return il("cryo" === ld.dQ ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Gd)
      });
      if (Wd >= Kg) return il("rxHotLine", "warn");
      const vd = xl(dd, dd.baf2RxTarget);
      var xd;
      if (null !== vd.overheatS) return il("rxWillOverheat", "bad", {
        pct: dd.baf2RxTarget,
        time: vd.overheatS,
        safe: null !== (xd = vd.hotAbove) && void 0 !== xd ? xd : 100
      });
      if (Math.abs(vd.settle - Wd) >= 3) return il("rxSettling", "info", {
        pct: dd.baf2RxTarget,
        heat: Math.round(vd.settle),
        time: vd.settleS
      });
      const qd = xg(dd);
      if (null !== qd) return {
        key: qd.key,
        params: {
          amount: qd.amount
        },
        tone: "info"
      };
      const Bd = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== Jd && ("running" !== Jd || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === dd.rods ? `${eg}rxLimitNoRods` : `${eg}rxLimit_${Cg(dd)}`
      }({
        rods: dd.baf2RxStats[3],
        ...vg(dd)
      }, dd.baf2RxState, dd.baf2RxOut >= el * dd.baf2RxMaxNow, !1);
      if (Bd === `${Ol}rxLimit_size`) {
        const [Jd, , kd, pd] = dd.baf2RxStats, Nd = pd > 0 && Jd > 0 ? Math.ceil(kd / (Jd / pd) - 1e-9) : pd, Wd = dd.baf2RxDims.every((dd => dd >= Tk("reactor").max));
        if (Nd < pd) return il(Wd ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Nd,
          have: pd
        });
        if (Wd) return il("rxLimit_sizeMax", "info")
      }
      return null !== Bd ? {
        key: Bd,
        params: {},
        tone: "info"
      } : il("rxSteady", "ok", {
        pct: dd.baf2RxTarget
      })
    }

    function Ml(dd) {
      var Jd;
      if (dd.melted) return il("rxMeltedBody", "bad");
      if (-1 === dd.bad) return il("rxFix_noRoom", "warn");
      if (dd.bad > 0) return il(1 === dd.bad ? "rxBadOne" : "rxBad", "warn", {
        count: dd.bad
      });
      if (dd.left > 0) {
        const Jd = 1 === dd.left ? "One" : "";
        return il(dd.canFill ? `rxPlanLeft${Jd}` : `rxPlanLeftNoFill${Jd}`, "info", {
          count: dd.left
        })
      }
      if (0 === dd.rods) return il("rxLimitNoRods", "warn");
      const kd = null !== (Jd = dd.idle) && void 0 !== Jd ? Jd : 0;
      return kd > 0 ? il(1 === kd ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: kd
      }) : il("rxPlanReady", "ok")
    }

    function Fl(dd) {
      return Math.floor(Math.max(0, dd[1] - 1) / 2)
    }

    function Yl(dd) {
      if (dd >= Ng && dd < Wg) {
        const Jd = dd - Ng;
        return {
          key: 0 === Jd ? `${Ol}rxWhy_rodAlone` : 1 === Jd ? `${Ol}rxWhy_rodOne` : `${Ol}rxWhy_rod`,
          params: {
            count: String(Jd),
            heat: String(UZ * (1 + yZ * Jd))
          }
        }
      }
      return dd === Wg ? {
        key: `${Ol}rxWhy_channel`,
        params: {
          amount: String(TZ)
        }
      } : dd === Pg ? {
        key: `${Ol}rxWhy_deadChannel`,
        params: {}
      } : dd === Zg ? {
        key: `${Ol}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Ol}rxWhy_core`,
        params: {}
      }
    }
    const ml = "buildAFactory2Game:";

    function bl(dd, Jd) {
      return 0 !== (dd.baf2RxFlags & Jd)
    }

    function Sl(dd) {
      let {
        status: Jd,
        pending: kd,
        store: pd,
        explain: Nd
      } = dd;
      const {
        t: Wd
      } = (0, YN.B)(), Pd = bl(Jd, QJ), Zd = Jd.baf2RxTarget, gd = Jd.baf2RxThrottle, Cd = function(dd) {
        return {
          press: () => {
            dd.throttlePress()
          },
          drag: Jd => {
            dd.throttleDrag(Jd)
          },
          release: () => {
            dd.throttleRelease()
          }
        }
      }(pd), Kd = null === (od = xl(Jd, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, od - 10),
        red: od
      };
      var od;
      return (0, MW.jsxs)("div", {
        className: iN()("Baf2RxThrottle", {
          Off: Pd
        }),
        onClick: () => {
          Pd && Nd(`${ml}rxWhy_startFirst`)
        },
        children: [(0, MW.jsx)("span", {
          className: "HideNarrow",
          children: Wd(`${ml}rxThrottle`)
        }), (0, MW.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, MW.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: Zd,
            disabled: Pd,
            style: Pd ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Wd(`${ml}rxThrottle`),
            onPointerDown: () => {
              Cd.press();
              const dd = () => {
                window.removeEventListener("pointerup", dd), window.removeEventListener("pointercancel", dd), Cd.release()
              };
              window.addEventListener("pointerup", dd), window.addEventListener("pointercancel", dd)
            },
            onKeyUp: Cd.release,
            onChange: dd => {
              Cd.drag(Number(dd.target.value))
            }
          }), (0, MW.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Kd.amber}%, #ffb020 ${Kd.amber}% ${Kd.red}%, #ff3b30 ${Kd.red}%)`
            },
            "aria-hidden": "true"
          }), (0, MW.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${gd}% + ${8*(1-gd/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, MW.jsxs)("b", {
          children: [`${Zd}%`, (0, MW.jsx)("i", {
            className: iN()("Baf2RxPendingDot", {
              On: kd
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function jl(dd) {
      let {
        status: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)(), pd = xl(Jd, Jd.baf2RxTarget), Nd = Gl(Jd).dQ, Wd = kd("cryo" === Nd ? `${ml}rxRateCryo` : `${ml}rxRateWater`, {
        rate: ll(pd.coolPerS)
      }), Pd = kd(`${ml}rxChain`, {
        pct: String(Jd.baf2RxTarget),
        out: bg(pd.out),
        heat: String(Math.round(pd.settle)),
        coolant: Wd
      }), Zd = null !== pd.coolantSecs ? pd.coolantSecs >= 1 ? kd("cryo" === Nd ? `${ml}rxThrottleCryoOut` : `${ml}rxThrottleWaterOut`, {
        time: BW(kd, pd.coolantSecs)
      }) : kd("cryo" === Nd ? `${ml}rxThrottleCryoDry` : `${ml}rxThrottleWaterDry`) : null;
      return (0, MW.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Pd, null !== Zd ? (0, MW.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", Zd]
        }) : (0, MW.jsxs)("span", {
          children: [" \xb7 ", kd(`${ml}rxChainPellets`, {
            amount: Sg(pd.pelletsPerMin)
          })]
        })]
      })
    }

    function Xl(dd) {
      let {
        view: Jd,
        store: kd,
        explain: Nd,
        explainOnce: Wd
      } = dd;
      const {
        t: Pd
      } = (0, YN.B)(), {
        status: Zd
      } = Jd, [gd, Cd] = (0, pd.useState)(!1), Kd = bl(Zd, QJ), ld = bl(Zd, LJ), Qd = !bl(Zd, RJ), Ld = Zd.baf2RxHeat > 100;
      return (0, MW.jsxs)(MW.Fragment, {
        children: [(0, MW.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, MW.jsx)(Sl, {
            status: Zd,
            pending: Jd.throttlePending,
            store: kd,
            explain: Nd
          }), (0, MW.jsx)(Ll, {
            on: ld,
            label: ld ? Pd(`${ml}rxOdLeft`, {
              time: BW(Pd, Zd.baf2RxOdLeft)
            }) : Pd(`${ml}rxOverdrive`),
            locked: Qd,
            pending: 0 !== (Jd.pendingFlags & LJ),
            toggle: () => {
              Qd ? Nd(`${ml}rxOverdriveTier`, {
                amount: String(od(13))
              }) : ld ? kd.setFlag(LJ, !1) : Jd.odConfirmed ? kd.setFlag(LJ, !0) : Cd(!0)
            }
          }), Kd || Jd.startGuard ? (0, MW.jsx)(sP.n, {
            disabled: Jd.busy.has("start") || Jd.startGuard,
            onClick: () => {
              kd.tap("start", (() => {
                kd.setFlag(QJ, !1)
              }))
            },
            children: Pd(Jd.startGuard ? `${ml}rxStarting` : `${ml}rxStart`)
          }) : (0, MW.jsx)("span", {
            className: iN()("Baf2RxScram", {
              Pulse: Ld
            }),
            children: (0, MW.jsx)(sP.B, {
              onClick: () => {
                kd.shutDown()
              },
              children: Pd(`${ml}rxScram`)
            })
          })]
        }), (0, MW.jsx)(jl, {
          status: Zd
        }), gd && (0, MW.jsx)(gl, {
          id: "baf2RxOdTitle",
          title: `${ml}rxOdConfirmTitle`,
          body: `${ml}rxOdConfirmBody`,
          yes: `${ml}rxOdConfirm`,
          cancel: () => {
            Cd(!1)
          },
          confirm: () => {
            Cd(!1), kd.tap("odConfirm", (() => {
              kd.confirmOverdrive(), kd.setFlag(LJ, !0)
            })), Wd(`${ml}rxWhy_overdrive`)
          }
        })]
      })
    }

    function fl(dd) {
      let {
        view: Jd,
        store: kd,
        keepSize: pd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)(), {
        status: Wd
      } = Jd;
      return (0, MW.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, MW.jsx)(Ql, {
          kind: "reactor",
          dims: Jd.dims,
          cap: Wd.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: dd => {
            kd.resize(dd)
          }
        }), pd ? (0, MW.jsx)(sP.f, {
          onClick: pd,
          children: Nd(`${ml}rxKeepSize`)
        }) : (0, MW.jsxs)(MW.Fragment, {
          children: [(0, MW.jsx)(Ll, {
            on: Jd.guide,
            label: Nd(`${ml}rxGuide`),
            toggle: () => {
              kd.toggleGuide()
            }
          }), bl(Wd, GJ) && (0, MW.jsx)(Ll, {
            on: Jd.starter,
            label: Nd(`${ml}rxStarter`),
            toggle: () => {
              kd.toggleStarter()
            }
          }), (0, MW.jsx)(Nl, {
            status: Wd,
            store: kd,
            busy: Jd.busy.has("fill")
          })]
        })]
      })
    }

    function nl(dd) {
      let {
        need: Jd,
        kind: kd = "reactor",
        explain: pd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)(), Wd = Jd.length <= 3, Pd = Jd.reduce(((dd, Jd) => {
        let [, kd] = Jd;
        return dd + kd
      }), 0);
      return (0, MW.jsxs)("div", {
        className: iN()("Baf2RxParts", {
          Compact: !Wd
        }),
        onClick: () => {
          pd("battery" === kd ? `${ml}batWhy_store` : `${ml}rxShellHint`)
        },
        children: [Pd > 0 && (0, MW.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Pd ? Nd(`${ml}rxBlocksOne`) : Nd(`${ml}rxBlocks`, {
            blocks: String(Pd)
          })
        }), 0 === Jd.length ? (0, MW.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Nd("battery" === kd ? `${ml}batPartsDone` : `${ml}rxShellDone`)
        }) : Bg(Jd).map((dd => {
          let [Jd, kd, pd] = dd;
          const Pd = function(dd) {
            const Jd = Fg[dd];
            if (void 0 === Jd) return null;
            const [kd, pd, Nd] = ag[Jd].colour.map((dd => Math.round(255 * dd)));
            return `rgb(${kd}, ${pd}, ${Nd})`
          }(Jd);
          return (0, MW.jsxs)("span", {
            className: "Baf2RxChip",
            title: PW(Nd, Jd),
            children: [(0, MW.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Pd ? {
                visibility: "hidden"
              } : {
                background: Pd
              },
              title: Nd(`${ml}rxShopGhost`)
            }), (0, MW.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, MW.jsx)(bN.d, {
                itemName: Jd,
                amount: 0
              })
            }), (0, MW.jsx)("span", {
              className: "Baf2RxChipName",
              children: Wd ? `${kd} ${Zd=PW(Nd,Jd),Zd.replace(/^(Reactor|Battery) (?=\S)/,"")}` : kd
            }), pd >= kd ? (0, MW.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, MW.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Wd ? Nd(`${ml}rxShopShort`, {
                count: String(kd - pd)
              }) : "\u2212" + (kd - pd)
            })]
          }, Jd);
          var Zd
        }))]
      })
    }
    const Ul = "buildAFactory2Game:";

    function yl(dd) {
      var Jd, kd, Nd, Wd, Pd, Zd, gd;
      let {
        store: Cd,
        close: Kd
      } = dd;
      const {
        t: od
      } = (0, YN.B)(), ld = cP(), Qd = Cl(Cd), {
        explained: Ld,
        explain: Od
      } = wo("baf2RxExplained"), ed = (0, pd.useCallback)(((dd, Jd) => {
        Od(od(dd, Jd))
      }), [Od, od]), Rd = null === Qd || void 0 === Qd ? void 0 : Qd.status, Id = !0 === (null === Rd || void 0 === Rd ? void 0 : Rd.baf2BatReadOnly), Gd = dd => {
        Rd && ld.send(lJ(Rd.baf2BatAt, dd))
      }, [vd, xd, qd] = null !== (Jd = null === Qd || void 0 === Qd ? void 0 : Qd.dims) && void 0 !== Jd ? Jd : [0, 0, 0], Bd = bg(null !== (kd = null === Qd || void 0 === Qd ? void 0 : Qd.oo) && void 0 !== kd ? kd : 0), sd = !0 === (null === Rd || void 0 === Rd ? void 0 : Rd.baf2BatFormed), ad = null !== (Nd = null === Rd || void 0 === Rd ? void 0 : Rd.baf2BatStored) && void 0 !== Nd ? Nd : 0, Md = Math.max(1, null !== (Wd = null === Rd || void 0 === Rd ? void 0 : Rd.baf2BatIslandCap) && void 0 !== Wd ? Wd : 1), Fd = Math.min(100, 100 * ad / Md), Yd = null === Rd || void 0 === Rd ? void 0 : Rd.baf2BatNetPerS, md = function(dd, Jd, kd) {
        return kd > 0 && Jd >= kd ? "full" : void 0 !== dd && dd >= .05 ? "charging" : void 0 !== dd && dd <= -.05 && Jd > 0 ? "draining" : "steady"
      }(Yd, ad, null !== (Pd = null === Rd || void 0 === Rd ? void 0 : Rd.baf2BatIslandCap) && void 0 !== Pd ? Pd : 0), bd = null !== (Zd = null === Rd || void 0 === Rd ? void 0 : Rd.baf2BatMadePerS) && void 0 !== Zd ? Zd : 0, Sd = null !== (gd = null === Rd || void 0 === Rd ? void 0 : Rd.baf2BatUsedPerS) && void 0 !== gd ? gd : 0;
      let jd, Xd = {},
        fd = "info";
      if (Rd)
        if (sd) "charging" === md ? (jd = `${Ul}batLine_charging`, Xd = {
          time: BW(od, (Md - ad) / Math.max(.05, null !== Yd && void 0 !== Yd ? Yd : 0))
        }, fd = "ok") : "draining" === md ? (jd = `${Ul}batLine_draining`, Xd = {
          time: BW(od, ad / Math.max(.05, -(null !== Yd && void 0 !== Yd ? Yd : 0)))
        }, fd = "warn") : jd = "full" === md ? `${Ul}batLine_full` : ad <= 0 && Sd > 0 ? `${Ul}batLine_empty` : `${Ul}batLine_steady`;
        else {
          var nd;
          const dd = Ml({
            left: Rd.baf2BatNeed.reduce(((dd, Jd) => {
              let [, kd] = Jd;
              return dd + kd
            }), 0),
            bad: Rd.baf2BatBad,
            rods: 1,
            canFill: !0 === Rd.baf2BatCanFill,
            melted: !1
          });
          jd = dd.key, Xd = {
            count: String(null !== (nd = dd.params.count) && void 0 !== nd ? nd : 0)
          }, fd = dd.tone
        }
      else jd = `${Ul}batLine_steady`;
      const Ud = Math.max(bd, Sd, 1);
      return (0, MW.jsx)(BP.e, {
        close: Kd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, MW.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, MW.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, MW.jsx)(bN.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, MW.jsxs)("div", {
                children: [(0, MW.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: od(`${Ul}batTitle`)
                }), Rd && (0, MW.jsxs)("p", {
                  className: iN()("Baf2RxSubtitle", {
                    good: sd && "charging" === md,
                    warn: sd && "draining" === md
                  }),
                  children: [vd, "\xd7", xd, "\xd7", qd, " \xb7 ", od(sd ? `${Ul}batState_${md}` : `${Ul}rxSubPlanShort`)]
                })]
              })]
            }), (0, MW.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Rd && !Id && (0, MW.jsx)(Kl, {
                kind: "battery",
                cap: sd ? Bd : void 0,
                busy: null === Qd || void 0 === Qd ? void 0 : Qd.busy.has("apart"),
                apart: () => {
                  Cd.tap("apart", (() => {
                    Gd("apart")
                  }))
                }
              }), (0, MW.jsx)(sP.i, {
                onClick: Kd
              })]
            })]
          }), Qd && Rd && (0, MW.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, MW.jsxs)("div", {
              className: iN()("Baf2RxFlow Baf2BatFlow", {
                Plan: !sd
              }),
              children: [(0, MW.jsx)(Vo, {
                kind: "Power",
                label: od(`${Ul}batMade`),
                number: sd ? `\u26a1 ${bg(bd)}/s` : "\u2014",
                note: od(`${Ul}batMadeNote`),
                share: sd ? bd / Ud : void 0,
                onExplain: () => {
                  ed(`${Ul}batWhy_made`)
                }
              }), (0, MW.jsx)(zo, {
                kind: "Power",
                step: sd ? Bl(bd, Ud) : 0,
                planned: !sd
              }), (0, MW.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  ed(`${Ul}batWhy_store`)
                },
                children: [(0, MW.jsx)(Ho, {
                  max: 100,
                  bands: [{
                    upTo: sd ? Fd : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, MW.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, MW.jsx)("b", {
                    className: "Baf2BatStored",
                    children: sd ? od(`${Ul}batStoredOf`, {
                      amount: bg(ad),
                      cap: bg(Rd.baf2BatIslandCap)
                    }) : od(`${Ul}batWillHold`, {
                      cap: Bd
                    })
                  }), (0, MW.jsx)("span", {
                    children: od(`${Ul}batAdds`, {
                      cap: Bd
                    })
                  }), sd && (0, MW.jsx)("small", {
                    children: od(`${Ul}batBreakNote`, {
                      cap: Bd
                    })
                  })]
                })]
              }), (0, MW.jsx)(zo, {
                kind: "Power",
                step: sd ? Bl(Sd, Ud) : 0,
                planned: !sd
              }), (0, MW.jsx)(Vo, {
                kind: "Power",
                label: od(`${Ul}batUsed`),
                number: sd ? `\u26a1 ${bg(Sd)}/s` : "\u2014",
                note: od(`${Ul}batUsedNote`),
                share: sd ? Sd / Ud : void 0,
                onExplain: () => {
                  ed(`${Ul}batWhy_used`)
                }
              })]
            }), (0, MW.jsx)(Ao, {
              text: od(jd, Xd),
              tone: fd,
              explained: Ld
            }), Id ? (0, MW.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: od(`${Ul}rxNotYours`)
            }) : !sd && (0, MW.jsxs)(MW.Fragment, {
              children: [(0, MW.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, MW.jsx)(Ql, {
                  kind: "battery",
                  dims: Qd.dims,
                  cap: Rd.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: dd => {
                    Cd.resize(dd)
                  }
                }), (0, MW.jsx)(Ll, {
                  on: Qd.guide,
                  label: od(`${Ul}rxGuide`),
                  toggle: () => {
                    Cd.toggleGuide()
                  }
                }), Rd.baf2BatCanFill && (0, MW.jsx)(sP.j, {
                  disabled: !sg("battery", Rd.baf2BatNeed) || Qd.busy.has("fill"),
                  onClick: () => {
                    Cd.tap("fill", (() => {
                      Gd("fill")
                    }))
                  },
                  children: od(`${Ul}rxFill`)
                })]
              }), (0, MW.jsx)(nl, {
                need: Rd.baf2BatNeed,
                kind: "battery",
                explain: ed
              })]
            })]
          })]
        })
      })
    }
    const Dl = "buildAFactory2Game:",
      Tl = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function El(dd, Jd) {
      return dd === pg ? null : Jd ? "#4a4440" : dd < Wg ? Tl[dd - Ng] : dd === Wg ? "#3fd0f0" : dd === Pg ? "#2c3e4c" : "#55585e"
    }

    function cl(dd) {
      let {
        inner: Jd,
        looks: kd,
        layer: pd,
        setLayer: Nd,
        glow: Wd,
        melted: Pd,
        explain: Zd
      } = dd;
      const {
        t: gd
      } = (0, YN.B)(), [Cd, Kd, od] = Jd, ld = Math.max(0, Math.min(Kd - 1, pd)), Qd = [];
      for (let Od = 0; Od < od; Od++)
        for (let dd = 0; dd < Cd; dd++) {
          var Ld;
          const Jd = null !== (Ld = kd[(ld * od + Od) * Cd + dd]) && void 0 !== Ld ? Ld : pg,
            pd = El(Jd, Pd),
            Nd = Jd >= Ng && Jd < Wg;
          Qd.push(null === pd ? (0, MW.jsx)("circle", {
            cx: dd + .5,
            cy: Od + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${dd},${Od}`) : (0, MW.jsx)("rect", {
            x: dd + .06,
            y: Od + .06,
            width: .88,
            height: .88,
            fill: pd,
            opacity: Nd && !Pd ? .5 + .5 * Wd : 1,
            onClick: dd => {
              dd.stopPropagation();
              const kd = Yl(Jd);
              Zd(kd.key, kd.params)
            }
          }, `${dd},${Od}`))
        }
      return (0, MW.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, MW.jsx)("svg", {
          className: iN()("Baf2RxMapGrid", {
            Melted: Pd
          }),
          viewBox: `0 0 ${Math.max(1,Cd)} ${Math.max(1,od)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": gd(`${Dl}rxWhy_core`),
          onClick: () => {
            Zd(`${Dl}rxWhy_core`, {})
          },
          children: Qd
        }), Kd > 1 && (0, MW.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, MW.jsx)("button", {
            type: "button",
            "aria-label": gd(`${Dl}rxLayerDown`),
            disabled: ld <= 0,
            onClick: () => {
              Nd(ld - 1)
            },
            children: "\u25bc"
          }), (0, MW.jsxs)("span", {
            children: [(0, MW.jsx)("span", {
              className: "HideNarrow",
              children: gd(`${Dl}rxLayer`, {
                n: String(ld + 1),
                of: String(Kd)
              })
            }), (0, MW.jsx)("span", {
              className: "ShowNarrow",
              children: gd(`${Dl}rxLayerShort`, {
                n: String(ld + 1),
                of: String(Kd)
              })
            })]
          }), (0, MW.jsx)("button", {
            type: "button",
            "aria-label": gd(`${Dl}rxLayerUp`),
            disabled: ld >= Kd - 1,
            onClick: () => {
              Nd(ld + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const hl = "buildAFactory2Game:",
      rl = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: tZ,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Ig,
        kind: "red"
      }],
      ul = [50, tZ, 100];

    function tl(dd) {
      let {
        stats: Jd,
        t: kd,
        explain: pd
      } = dd;
      const Nd = Cg(Jd),
        Wd = Math.max(1, Jd.fuelHeat, Jd.cooling, Jd.size),
        Pd = [
          ["fuel", `${hl}rxBarRods`, Jd.fuelHeat],
          ["cooling", `${hl}rxBarCooling`, Jd.cooling],
          ["size", `${hl}rxBarSize`, Jd.size]
        ];
      return (0, MW.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          pd(`${hl}rxWhy_bars`)
        },
        children: [(0, MW.jsx)("span", {
          className: "Baf2RxMostLine",
          children: kd(`${hl}rxMost`, {
            amount: bg(Math.min(Jd.fuelHeat, Jd.cooling, Jd.size))
          })
        }), (0, MW.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Pd.map((dd => {
            let [Jd, pd, Pd] = dd;
            return (0, MW.jsxs)("span", {
              className: iN()("Baf2RxMostBar", Jd, {
                Low: Jd === Nd
              }),
              children: [(0, MW.jsx)("small", {
                children: kd(pd)
              }), (0, MW.jsx)("i", {
                children: (0, MW.jsx)("b", {
                  style: {
                    width: 100 * Pd / Wd + "%"
                  }
                })
              })]
            }, Jd)
          }))
        })]
      })
    }

    function Vl(dd) {
      var Jd;
      let {
        view: kd,
        heat: Nd,
        settle: Wd,
        settleLine: Pd,
        settleBad: Zd,
        explain: gd
      } = dd;
      const {
        t: Cd
      } = (0, YN.B)(), {
        status: Kd
      } = kd, od = Kd.baf2RxAt.join(","), [ld, Qd] = (0, pd.useState)((() => Fl(kd.inner)));
      (0, pd.useEffect)((() => {
        Qd(Fl(kd.inner))
      }), [od, kd.inner[1]]);
      const Ld = null !== (Jd = kd.plan) && void 0 !== Jd ? Jd : vg(Kd),
        Od = kd.plan ? kd.plan.powerPerUnit : Kd.baf2RxStats[8],
        ed = null === Nd ? null : "alarm" === (Rd = Rg(Kd)) ? "red" : "hot" === Rd ? "hot" : "warm" === Rd ? "warm" : "cold";
      var Rd;
      const Id = !Kd.baf2RxFormed && function(dd, Jd) {
          return 0 !== (dd.baf2RxFlags & Jd)
        }(Kd, OJ),
        Gd = Kd.baf2RxDamage,
        vd = Kd.baf2RxDamageTrend;
      return (0, MW.jsxs)("div", {
        className: iN()("Baf2RxCore", null !== ed && void 0 !== ed ? ed : "plan"),
        children: [(0, MW.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, MW.jsx)(cl, {
            inner: kd.inner,
            looks: kd.looks,
            layer: ld,
            setLayer: Qd,
            glow: Kd.baf2RxFormed ? Kd.baf2RxThrottle / 100 : 1,
            melted: Id,
            explain: gd
          }), (0, MW.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              gd(`${hl}rxWhy_heat`)
            },
            children: [null !== Nd ? (0, MW.jsxs)(MW.Fragment, {
              children: [(0, MW.jsx)("b", {
                children: Cd(`${hl}rxHeatPct`, {
                  pct: String(Nd)
                })
              }), (0, MW.jsx)("span", {
                className: iN()("Baf2RxBand", ed),
                children: Cd(`${hl}rxBand_${ed}`)
              })]
            }) : (0, MW.jsx)("b", {
              children: Cd(`${hl}rxHeat`)
            }), null !== Pd && (0, MW.jsx)("span", {
              className: iN()("Baf2RxSettle", {
                Bad: Zd
              }),
              children: Pd
            }), Gd >= 1 && (0, MW.jsxs)("span", {
              className: iN()("Baf2RxDamage", vd),
              children: [Cd(`${hl}rxDamageLine`, {
                pct: String(Gd)
              }), " \xb7 ", Cd(`${hl}rxDamage_${vd}`), (0, MW.jsx)("i", {
                children: (0, MW.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Gd)}%`
                  }
                })
              })]
            })]
          }), (0, MW.jsx)(Ho, {
            max: Ig,
            bands: rl,
            ticks: ul,
            now: Nd,
            settle: Wd,
            settleTone: Zd ? "bad" : null,
            onExplain: () => {
              gd(`${hl}rxWhy_heat`)
            }
          })]
        }), (0, MW.jsx)(tl, {
          stats: Ld,
          t: Cd,
          explain: gd
        }), Od > 0 && (0, MW.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            gd(`${hl}rxWhy_perPellet`)
          },
          children: Cd(`${hl}rxPerPellet`, {
            amount: bg(Od)
          })
        })]
      })
    }

    function zl(dd, Jd) {
      var kd;
      if (!dd.baf2RxStore) return {
        note: Jd(`${hl}rxUpTo`, {
          amount: bg(dd.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [pd, Nd] = dd.baf2RxStore, Wd = Nd > 0 ? pd / Nd : 0, Pd = String(Math.floor(100 * Wd)), Zd = null !== (kd = dd.baf2RxStoreNetPerS) && void 0 !== kd ? kd : 0, gd = function(dd) {
        var Jd, kd;
        const [pd, Nd] = null !== (Jd = dd.baf2RxStore) && void 0 !== Jd ? Jd : [0, 0], Wd = null !== (kd = dd.baf2RxStoreNetPerS) && void 0 !== kd ? kd : 0;
        return Nd > 0 && pd >= Nd - 1 ? "running" === dd.baf2RxState ? `${Ol}rxStoreFull` : `${Ol}rxStoreFullOnly` : Wd > .05 ? `${Ol}rxStoreLine` : Wd < -.05 ? "running" === dd.baf2RxState ? `${Ol}rxStoreUsesMore` : `${Ol}rxStoreDraining` : `${Ol}rxStorePct`
      }(dd);
      return {
        note: Jd(gd, gd === `${hl}rxStoreLine` ? {
          pct: Pd,
          time: BW(Jd, (Nd - pd) / Zd)
        } : {
          pct: Pd
        }),
        share: Wd
      }
    }

    function Hl(dd) {
      let {
        view: Jd,
        explain: kd,
        preview: pd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)(), {
        status: Wd
      } = Jd, Pd = AZ(Jg(...Jd.dims)), Zd = ql(Wd), gd = Math.min(Math.round(Wd.baf2RxFuel), Pd.fuel), Cd = "running" === Wd.baf2RxState, Kd = Cd ? Bl(Wd.baf2RxOut, Wd.baf2RxMaxNow) : 0, od = function(dd, Jd, kd) {
        const pd = Gl(dd),
          Nd = "cryo" === pd.dQ,
          Wd = kd ? kd.coolantSecs : pd.pct >= 100 && dd.baf2RxOut >= 1 ? xl(dd, dd.baf2RxThrottle).coolantSecs : null;
        let Pd, Zd = !1;
        if (pd.pct < 100) {
          const kd = 1 === pd.makersShort,
            Wd = !Nd && dd.baf2RxCryoOpen ? "OrCryo" : "";
          Pd = pd.makersShort > 0 ? Jd(Nd ? `${hl}rxCryoAddMixer${kd?"":"s"}` : `${hl}rxWaterAddCondenser${kd?"":"s"}${Wd}`, {
            count: String(pd.makersShort)
          }) : Jd(`${hl}rxWaterNeeds`, {
            rate: ll(pd.needPerS)
          })
        } else if (null !== Wd) Pd = Jd(`${hl}rxWaterRunsOut`, {
          time: BW(Jd, Wd)
        });
        else if (pd.waterBeside > 0) Pd = Jd(`${hl}rxCryoPlusWater`, {
          rate: ll(pd.waterBeside)
        });
        else {
          const dd = function(dd) {
            return dd.inPerS <= 0 ? "rxWaterNoSupply" : dd.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(pd);
          Zd = "rxWaterNoSupply" === dd, Pd = Jd(`${hl}${dd}`, {
            amount: bg(pd.stored)
          })
        }
        return {
          kind: Nd ? "Cryo" : "Water",
          label: Jd(Nd ? `${hl}rxCryo` : `${hl}rxWater`),
          number: `${ll(pd.usePerS)}/s`,
          preview: kd ? `${ll(kd.coolPerS)}/s` : null,
          note: Pd,
          tone: "noWater" === dd.baf2RxState ? "danger" : Zd ? "warn" : (gd = pd.pct, Cd = Wd, gd < 100 ? "danger" : null === Cd ? null : Cd < 300 ? "danger" : "warn"),
          share: pd.pct / 100,
          why: Nd ? `${hl}rxWhy_cryo` : `${hl}rxWhy_water`,
          short: pd.pct < 100
        };
        var gd, Cd
      }(Wd, Nd, pd), ld = ig(Wd, Pd.waste, Zd), Qd = zl(Wd, Nd), Ld = xl(Wd, Wd.baf2RxTarget), Od = Cd && Math.abs(Ld.settle - Wd.baf2RxHeat) >= 3, ed = pd ? pd.pelletsPerMin / 60 : null;
      return (0, MW.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, MW.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, MW.jsx)(Vo, {
            kind: "Fuel",
            label: Nd(`${hl}rxFuel`),
            number: String(gd),
            preview: null !== ed && ed > 0 && Wd.baf2RxFuel > 0 ? BW(Nd, Wd.baf2RxFuel / ed) : null,
            note: Wd.baf2RxFuel <= 0 ? Nd(`${hl}rxFuelEmpty`) : Zd > 0 ? Nd(`${hl}rxFuelLeft`, {
              time: BW(Nd, Wd.baf2RxFuel / Zd)
            }) : Nd(1 === gd ? `${hl}rxFuelPellet` : `${hl}rxFuelPellets`),
            tone: "noFuel" === Wd.baf2RxState ? "danger" : Wd.baf2RxFuel < 2 ? "warn" : null,
            share: Wd.baf2RxFuel / Pd.fuel,
            onExplain: () => {
              kd(`${hl}rxWhy_fuel`)
            }
          }), (0, MW.jsx)(Vo, {
            kind: od.kind,
            label: od.label,
            number: od.number,
            preview: od.preview,
            note: od.note,
            tone: od.tone,
            share: od.share,
            onExplain: () => {
              kd(od.why)
            }
          })]
        }), (0, MW.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, MW.jsx)(zo, {
            kind: "Fuel",
            step: Kd,
            short: "noFuel" === Wd.baf2RxState
          }), (0, MW.jsx)(zo, {
            kind: od.kind,
            step: Kd,
            short: od.short || "noWater" === Wd.baf2RxState
          })]
        }), (0, MW.jsx)(Vl, {
          view: Jd,
          heat: Wd.baf2RxHeat,
          settle: Math.min(Ig, Ld.settle),
          settleLine: Od ? Nd(`${hl}rxHeatSettles`, {
            pct: String(Math.round(Ld.settle)),
            time: BW(Nd, Ld.settleS)
          }) : null,
          settleBad: Ld.settle > 100,
          explain: kd
        }), (0, MW.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, MW.jsx)(zo, {
            kind: "Power",
            step: Kd
          }), (0, MW.jsx)(zo, {
            kind: "Waste",
            step: Cd && Wd.baf2RxFuel - Wd.baf2RxPu > 0 ? Kd : 0,
            short: ld.full
          })]
        }), (0, MW.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, MW.jsx)(Vo, {
            kind: "Power",
            label: Nd(`${hl}rxPowerOut`),
            number: `\u26a1 ${bg(Wd.baf2RxOut)}/s`,
            preview: pd ? bg(pd.out) : null,
            note: Qd.note,
            share: Qd.share,
            onExplain: () => {
              kd(`${hl}rxWhy_power`)
            }
          }), (0, MW.jsx)(Vo, {
            kind: "Waste",
            label: Nd(`${hl}rxWaste`),
            number: `${Math.floor(Wd.baf2RxWaste)}/${Pd.waste}`,
            note: ld.full ? Nd(`${hl}rxWasteFull`) : null !== ld.fullInS ? Nd(`${hl}rxWasteFullIn`, {
              time: BW(Nd, ld.fullInS)
            }) : Nd(`${hl}rxWasteSpent`),
            tone: "wasteFull" === Wd.baf2RxState ? "danger" : ld.full ? "warn" : null,
            share: Wd.baf2RxWaste / Pd.waste,
            onExplain: () => {
              kd(`${hl}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function wl(dd) {
      let {
        view: Jd,
        explain: kd
      } = dd;
      const {
        t: pd
      } = (0, YN.B)(), Nd = Jd.plan;
      if (!Nd) return null;
      const Wd = Nd.fuelHeat <= 0 ? null : Nd.cooling > 0 ? Math.min(Ig, 100 * Nd.fuelHeat / Nd.cooling) : Ig,
        Pd = pd(`${hl}rxPlanAtFull`);
      return (0, MW.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, MW.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, MW.jsx)(Vo, {
            kind: "Fuel",
            label: pd(`${hl}rxFuel`),
            number: pd(`${hl}rxPlanPerMin`, {
              amount: Sg(Nd.pelletsPerMin)
            }),
            note: pd(`${hl}rxPlanPellets`),
            onExplain: () => {
              kd(`${hl}rxWhy_fuel`)
            }
          }), (0, MW.jsx)(Vo, {
            kind: "Water",
            label: pd(`${hl}rxWater`),
            number: `${ll(Nd.waterPerS)}/s`,
            note: Jd.status.baf2RxCryoOpen && Nd.waterPerS > 0 ? pd(`${hl}rxPlanOrCryo`, {
              rate: ll(Lg(Nd, Ad.g) * Ad.r)
            }) : Pd,
            onExplain: () => {
              kd(`${hl}rxWhy_water`)
            }
          })]
        }), (0, MW.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, MW.jsx)(zo, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, MW.jsx)(zo, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, MW.jsx)(Vl, {
          view: Jd,
          heat: null,
          settle: Wd,
          settleLine: null === Wd ? null : pd(`${hl}rxPlanHeat`, {
            pct: String(Math.round(Wd))
          }),
          settleBad: null !== Wd && Wd > 100,
          explain: kd
        }), (0, MW.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, MW.jsx)(zo, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, MW.jsx)(zo, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, MW.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, MW.jsx)(Vo, {
            kind: "Power",
            label: pd(`${hl}rxPowerOut`),
            number: `\u26a1 ${bg(Nd.max)}/s`,
            note: Pd,
            onExplain: () => {
              kd(`${hl}rxWhy_power`)
            }
          }), (0, MW.jsx)(Vo, {
            kind: "Waste",
            label: pd(`${hl}rxWaste`),
            number: pd(`${hl}rxPlanPerMin`, {
              amount: Sg(Nd.pelletsPerMin)
            }),
            note: pd(`${hl}rxWasteSpent`),
            onExplain: () => {
              kd(`${hl}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const Al = "buildAFactory2Game:",
      dQ = {
        key: `${Al}rxWaiting`,
        params: {},
        tone: "info"
      };

    function JQ(dd, Jd) {
      return 0 !== (dd.baf2RxFlags & Jd)
    }

    function kQ(dd) {
      var Jd, kd;
      let {
        store: Nd,
        close: Wd
      } = dd;
      const {
        t: Pd
      } = (0, YN.B)(), Zd = Cl(Nd), {
        explained: gd,
        hinting: Cd,
        explain: Kd,
        explainOnce: od
      } = wo("baf2RxExplained"), ld = (0, pd.useCallback)(((dd, Jd) => {
        Kd(Pd(dd, Jd))
      }), [Kd, Pd]), Qd = (0, pd.useCallback)(((dd, Jd) => {
        od(dd, Pd(dd, Jd))
      }), [od, Pd]), [Ld, Od] = (0, pd.useState)(!1), [ed, Rd] = (0, pd.useState)(!1), Id = null === Zd || void 0 === Zd ? void 0 : Zd.status, Gd = null === Id || void 0 === Id ? void 0 : Id.baf2RxAt.join(","), vd = !0 === (null === Id || void 0 === Id ? void 0 : Id.baf2RxFormed);
      (0, pd.useEffect)((() => {
        Rd(!1), Od(!1)
      }), [Gd, vd]), (0, pd.useEffect)((() => (Nd.opened(), () => {
        Nd.closed()
      })), [Nd]);
      const xd = void 0 !== Id && JQ(Id, IJ),
        qd = Id ? vd ? Rg(Id) : null !== Zd && void 0 !== Zd && Zd.plan ? function(dd, Jd) {
          if (dd <= 0) return "off";
          if (Jd <= 0) return "alarm";
          const kd = 100 * dd / Jd;
          return kd < 50 ? "calm" : kd < Kg ? "warm" : kd <= 100 ? "hot" : "alarm"
        }(Zd.plan.fuelHeat, Zd.plan.cooling) : "off" : "off",
        Bd = Id ? Gg(Id) : null,
        sd = Zd ? Zd.waiting ? dQ : vd ? al(Zd.status) : function(dd) {
          var Jd, kd;
          const {
            status: pd
          } = dd;
          return Ml({
            left: pd.baf2RxNeed.reduce(((dd, Jd) => {
              let [, kd] = Jd;
              return dd + kd
            }), 0),
            bad: pd.baf2RxBad,
            rods: null !== (Jd = null === (kd = dd.plan) || void 0 === kd ? void 0 : kd.rods) && void 0 !== Jd ? Jd : 0,
            canFill: JQ(pd, eJ),
            melted: JQ(pd, OJ),
            idle: dd.looks.reduce(((dd, Jd) => dd + (Jd === Pg ? 1 : 0)), 0)
          })
        }(Zd) : null,
        ad = Cd && null !== sd && ("ok" === sd.tone || "info" === sd.tone),
        Md = Id ? function(dd) {
          const Jd = 0 !== (dd.baf2RxFlags & QJ),
            kd = dd.baf2RxHeat < zZ;
          return 0 !== (dd.baf2RxFlags & OJ) || kd && (Jd || !dd.baf2RxFormed) ? null : dd.baf2RxFormed && !Jd ? {
            key: `${eg}rxApartScram`,
            params: {}
          } : {
            key: `${eg}rxApartCooling`,
            params: {
              pct: String(zZ)
            }
          }
        }(Id) : null,
        [Fd, Yd, md] = null !== (Jd = null === Zd || void 0 === Zd ? void 0 : Zd.dims) && void 0 !== Jd ? Jd : [0, 0, 0],
        bd = `${Fd}\xd7${Yd}\xd7${md}`;
      return (0, MW.jsx)(BP.e, {
        close: Wd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, MW.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, MW.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MW.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, MW.jsx)(ol, {
                mood: qd
              }), (0, MW.jsxs)("div", {
                children: [(0, MW.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Pd(`${Al}rxTitle`)
                }), Zd && (0, MW.jsxs)("p", {
                  className: iN()("Baf2RxSubtitle", vd && (null === Bd || void 0 === Bd ? void 0 : Bd.tone)),
                  children: [vd && !xd ? (0, MW.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Pd(`${Al}rxChangeSize`),
                    onClick: () => {
                      if (!Id) return;
                      const dd = JQ(Id, QJ);
                      var Jd;
                      (Jd = {
                        scram: dd,
                        heat: Id.baf2RxHeat
                      }).scram && Jd.heat < zZ ? Od(!0) : ld(dd ? `${Al}rxResizeCooling` : `${Al}rxResizeHot`, {
                        pct: String(zZ)
                      })
                    },
                    children: [bd, " \u270e"]
                  }) : bd, " \xb7 ", Pd(vd ? null !== (kd = null === Bd || void 0 === Bd ? void 0 : Bd.label) && void 0 !== kd ? kd : `${Al}rxState_running` : `${Al}rxSubPlanShort`)]
                })]
              })]
            }), (0, MW.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Zd && !xd && (0, MW.jsx)(Kl, {
                kind: "reactor",
                busy: Zd.busy.has("apart"),
                whyNot: Md ? () => {
                  ld(Md.key, Md.params)
                } : null,
                apart: () => {
                  Nd.tap("apart", (() => {
                    Nd.send("apart")
                  }))
                }
              }), (0, MW.jsx)(sP.i, {
                onClick: Wd
              })]
            })]
          }), Zd && sd && (0, MW.jsxs)("div", {
            className: "Baf2RxBody",
            children: [vd ? (0, MW.jsx)(Hl, {
              view: Zd,
              explain: ld,
              preview: vl(Zd.status)
            }) : (0, MW.jsx)(wl, {
              view: Zd,
              explain: ld
            }), (0, MW.jsx)(Ao, {
              text: ad ? `${sl(Pd,sd)} ${Pd(`${Al}rxTapHint`)}` : sl(Pd, sd),
              tone: sd.tone,
              explained: gd
            }), xd ? (0, MW.jsxs)(MW.Fragment, {
              children: [(0, MW.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Pd(`${Al}rxNotYours`)
              }), (0, MW.jsx)(Wl, {
                status: Zd.status,
                store: Nd,
                readOnly: !0
              })]
            }) : vd && !ed ? (0, MW.jsxs)(MW.Fragment, {
              children: [(0, MW.jsx)(Xl, {
                view: Zd,
                store: Nd,
                explain: ld,
                explainOnce: Qd
              }), void 0 !== Zd.status.baf2RxLayout && kl(Zd.status) && (0, MW.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, MW.jsx)(Wl, {
                  status: Zd.status,
                  store: Nd,
                  readOnly: !1,
                  bare: !0
                }), (0, MW.jsx)(Nl, {
                  status: Zd.status,
                  store: Nd,
                  busy: Zd.busy.has("fill")
                })]
              })]
            }) : (0, MW.jsxs)(MW.Fragment, {
              children: [(0, MW.jsx)(fl, {
                view: Zd,
                store: Nd,
                keepSize: vd ? () => {
                  Rd(!1)
                } : void 0
              }), qg(Zd.dims, Zd.status.baf2RxDims) && (0, MW.jsx)(nl, {
                need: Zd.status.baf2RxNeed,
                explain: ld
              }), (0, MW.jsx)(Wl, {
                status: Zd.status,
                store: Nd,
                readOnly: !1
              })]
            }), Ld && (0, MW.jsx)(gl, {
              id: "baf2ResizeTitle",
              title: `${Al}rxResizeConfirmTitle`,
              body: `${Al}rxResizeConfirmBody`,
              yes: `${Al}rxChangeSize`,
              cancel: () => {
                Od(!1)
              },
              confirm: () => {
                Od(!1), Rd(!0)
              }
            })]
          })]
        })
      })
    }
    class pQ {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(dd) {
        this.view = dd;
        for (const Jd of this.listeners) Jd()
      }
      get() {
        return this.view
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
    }

    function NQ(dd) {
      let {
        commands: Jd,
        store: kd,
        power: Nd,
        water: Wd,
        reactor: Pd,
        battery: Zd,
        collider: gd,
        terminal: Cd,
        quests: Kd,
        close: od,
        leave: ld,
        askIslands: Qd,
        showCore: Ld,
        openSocial: Od
      } = dd;
      const {
        userContext: ed
      } = (0, fZ.c)(), Rd = XZ.featureFlags.useSocialFeatures && ed.isLoggedIn(), [Id, Gd] = (0, pd.useState)((() => kd.get()));
      (0, pd.useEffect)((() => kd.subscribe((() => {
        Gd(kd.get())
      }))), [kd]);
      const vd = "islands" === (null === Id || void 0 === Id ? void 0 : Id.kind) ? Id.backToCore : void 0;
      return (0, MW.jsxs)(EP.Provider, {
        value: Jd,
        children: ["core" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(Lo, {
          view: Id.core,
          close: od,
          askIslands: Qd
        }), "dropMap" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(Io, {
          message: Id.dropMap,
          quests: Kd,
          close: od,
          leave: ld
        }), "islands" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(fo, {
          message: Id.islands,
          arrivedAtMs: Id.arrivedAtMs,
          close: vd ? () => {
            Ld(vd)
          } : od,
          leave: ld,
          openSocial: Rd ? Od : null
        }), "quests" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(mK, {
          store: Kd,
          close: od
        }), "transfer" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(NK, {
          message: Id.transfer,
          arrivedAtMs: Id.arrivedAtMs,
          close: od,
          leave: ld
        }), "power" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(SP, {
          store: Nd,
          close: od
        }), "water" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(RZ, {
          store: Wd,
          close: od
        }), "reactor" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(kQ, {
          store: Pd,
          close: od
        }), "battery" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(yl, {
          store: Zd,
          close: od
        }), "collider" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(IC, {
          store: gd,
          close: od
        }), "terminal" === (null === Id || void 0 === Id ? void 0 : Id.kind) && (0, MW.jsx)(to, {
          store: Cd,
          close: od,
          send: dd => {
            Jd.send(dd)
          }
        })]
      })
    }
    var WQ = kd(38637);

    function PQ(dd, Jd) {
      return dd.distSq - Jd.distSq
    }
    class ZQ {
      constructor() {
        this.list = [], this.pool = []
      }
      add(dd, Jd, kd, pd) {
        let Nd = this.pool[this.list.length];
        Nd || (Nd = {
          x: 0,
          y: 0,
          distSq: 0,
          element: Jd,
          liftRem: kd,
          dot: pd
        }, this.pool.push(Nd)), Nd.x = dd.x, Nd.y = dd.y, Nd.distSq = dd.distSq, Nd.element = Jd, Nd.liftRem = kd, Nd.dot = pd, this.list.push(Nd)
      }
    }
    class gQ {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = dd, this.sizes = new WeakMap, this.observer = new ResizeObserver((dd => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const Jd of dd) {
            const dd = Jd.borderBoxSize[0];
            "dot" !== Jd.target.dataset.crowded && 0 !== dd.inlineSize && 0 !== dd.blockSize && this.sizes.set(Jd.target, {
              width: dd.inlineSize,
              height: dd.blockSize
            })
          }
        })), this.remPx = 16, this.qQ = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.xI = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.xI)
      }
      observe(dd) {
        this.observer.observe(dd)
      }
      unobserve(dd) {
        this.observer.unobserve(dd)
      }
      run(dd) {
        const Jd = dd.list;
        Jd.sort(PQ);
        const kd = this.pxPerVw,
          pd = this.pxPerVh;
        this.qQ.length = 0, this.hud && this.qQ.push(...this.hud.boxes(performance.now()));
        for (const Wd of Jd) {
          var Nd;
          const dd = this.sizes.get(Wd.element);
          let Jd = "no";
          if (dd && dd.width > 0) {
            const Nd = Wd.x * kd,
              Pd = Wd.y * pd - Wd.liftRem * this.remPx;
            this.fit(Nd, Pd, dd.width, dd.height) || (Jd = Wd.dot && this.fit(Nd, Pd, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Nd = Wd.element.dataset.crowded) && void 0 !== Nd ? Nd : "no") !== Jd && ("no" === Jd ? delete Wd.element.dataset.crowded : Wd.element.dataset.crowded = Jd), "hidden" !== Jd && (0, WQ.d)(Wd.element, Wd.x, Wd.y)
        }
        Jd.length = 0
      }
      fit(dd, Jd, kd, pd) {
        const Nd = dd - kd / 2,
          Wd = dd + kd / 2,
          Pd = Jd - pd,
          Zd = this.qQ;
        for (let gd = 0; gd < Zd.length; gd += 4)
          if (Nd < Zd[gd + 1] - 2 && Wd > Zd[gd] + 2 && Pd < Zd[gd + 3] - 2 && Jd > Zd[gd + 2] + 2) return !1;
        return Zd.push(Nd, Wd, Pd, Jd), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.xI)
      }
    }
    const CQ = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class KQ {
      constructor() {
        this.cards = CQ.map((dd => document.getElementsByClassName(dd))), this.watched = CQ.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(dd) {
        dd - this.refreshedAt > 1e3 && (this.refreshedAt = dd, this.stale = !0);
        for (let kd = 0; kd < this.cards.length; kd++) {
          var Jd;
          const dd = null !== (Jd = this.cards[kd][0]) && void 0 !== Jd ? Jd : null;
          dd !== this.watched[kd] && this.watch(kd, dd)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let dd = 0; dd < this.watched.length; dd++) this.watch(dd, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const dd = this.list;
        dd.length = 0;
        for (const Jd of this.watched) {
          if (!Jd || Jd.closest(".NoRoom")) continue;
          const kd = Jd.getBoundingClientRect();
          let pd = kd.top,
            Nd = kd.bottom;
          if (Jd === this.watched[0] && this.hud) {
            const dd = this.hud.getBoundingClientRect();
            pd = Math.max(pd, dd.top), Nd = Math.min(Nd, dd.bottom)
          }
          kd.width > 0 && Nd > pd && dd.push(kd.left, kd.right, pd, Nd)
        }
      }
      watch(dd, Jd) {
        const kd = this.watched[dd];
        var pd, Nd;
        (kd && this.sizes.unobserve(kd), this.watched[dd] = Jd, this.stale = !0, Jd && this.sizes.observe(Jd), 0 === dd) && (null === (pd = this.hud) || void 0 === pd || pd.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Nd = null === Jd || void 0 === Jd ? void 0 : Jd.closest(".Baf2QuestHud")) && void 0 !== Nd ? Nd : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const oQ = [0, 0, 0],
      lQ = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function QQ(dd, Jd, kd, pd, Nd, Wd) {
      let [Pd, Zd, gd] = pd;
      const Cd = (Pd + .5 - kd[0]) ** 2 + (Zd - kd[1]) ** 2 + (gd + .5 - kd[2]) ** 2;
      let Kd = null;
      Cd <= Wd ** 2 && (oQ[0] = Pd + .5, oQ[1] = Zd + Nd, oQ[2] = gd + .5, Kd = Jd.projectWorldPosToViewport(oQ));
      const od = null !== Kd && Kd.x > -5 && Kd.x < 105 && Kd.y > -5 && Kd.y < 105;
      return (0, WQ.f)(dd, !od), od ? (lQ.x = Kd.x, lQ.y = Kd.y, lQ.distSq = Cd, lQ) : null
    }
    class LQ {
      constructor(dd) {
        this.onElement = dd, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(dd) {
        const Jd = [];
        for (let kd = 0; kd + 4 < dd.length; kd += 5) {
          const pd = [dd[kd], dd[kd + 1], dd[kd + 2]];
          Jd.push({
            key: pd.join(","),
            pos: pd,
            status: PN[dd[kd + 3]],
            kind: FJ[dd[kd + 4]]
          })
        }
        this.markers = Jd, this.keys = new Set(Jd.map((dd => {
          let {
            key: Jd
          } = dd;
          return Jd
        }))), this.notify()
      }
      covers(dd) {
        return this.keys.has(dd)
      }
      get() {
        return this.markers
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      bind(dd) {
        let Jd = this.refs.get(dd);
        return Jd || (Jd = Jd => {
          const kd = this.elements.get(dd);
          var pd, Nd;
          kd && (null === (pd = this.onElement) || void 0 === pd || pd.call(this, kd, !1));
          Jd ? (this.elements.set(dd, Jd), null === (Nd = this.onElement) || void 0 === Nd || Nd.call(this, Jd, !0)) : (this.elements.delete(dd), this.refs.delete(dd))
        }, this.refs.set(dd, Jd)), Jd
      }
      onAfterRender(dd, Jd, kd) {
        for (const pd of this.markers) {
          const Nd = this.elements.get(pd.key);
          if (!Nd) continue;
          const Wd = QQ(Nd, dd, Jd, pd.pos, 1.05, 24);
          Wd && kd.add(Wd, Nd, .45, !0)
        }
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
    }
    const OQ = {
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
    const eQ = (0, pd.memo)((function(dd) {
        let {
          status: Jd,
          kind: kd,
          bindRef: pd
        } = dd;
        const {
          t: Nd
        } = (0, YN.B)(), Wd = function(dd, Jd) {
          var kd;
          if ("noFuel" === dd) {
            var pd, Nd;
            const dd = null === (pd = XJ[Jd]) || void 0 === pd || null === (Nd = pd.fuels) || void 0 === Nd ? void 0 : Nd.find((dd => Nk.includes(dd)));
            return null !== dd && void 0 !== dd ? dd : OQ.noFuel
          }
          return void 0 !== (null === (kd = XJ[Jd]) || void 0 === kd ? void 0 : kd.cryoMade) ? "noOutlet" === dd ? "Fluid Pipe" : "noInput" === dd ? "Biomass" : OQ[dd] : OQ[dd]
        }(Jd, kd);
        return (0, MW.jsxs)("div", {
          className: iN()("Baf2StallMarker", Jd),
          ref: pd,
          hidden: !0,
          children: [Wd && (0, MW.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, MW.jsx)(bN.d, {
              itemName: Wd,
              amount: 0
            })
          }), (0, MW.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === Jd ? "?" : "!"
          }), (0, MW.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Nd(`buildAFactory2Game:stallTag_${Jd}`)
          })]
        })
      })),
      RQ = (0, pd.memo)((function(dd) {
        let {
          controller: Jd
        } = dd;
        const [kd, Nd] = (0, pd.useState)((() => Jd.get()));
        return (0, pd.useEffect)((() => (Nd(Jd.get()), Jd.subscribe((() => {
          Nd(Jd.get())
        })))), [Jd]), (0, MW.jsx)("div", {
          className: "Baf2StallMarkers",
          children: kd.map((dd => (0, MW.jsx)(eQ, {
            status: dd.status,
            kind: dd.kind,
            bindRef: Jd.bind(dd.key)
          }, dd.key)))
        })
      })),
      IQ = Rk.k + 150;
    class GQ {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(dd, Jd) {
        const kd = Jd - dd;
        null === this.offset || kd < this.offset ? this.offset = kd : this.offset = Math.min(kd, this.offset + .02 * (Jd - this.sampledAt)), this.sampledAt = Jd
      }
      toLocal(dd) {
        var Jd;
        return dd + (null !== (Jd = this.offset) && void 0 !== Jd ? Jd : 0) + IQ
      }
    }
    var vQ = kd(38639);
    const xQ = 15 * Math.PI / 180,
      qQ = Math.SQRT2,
      BQ = [4, 2];

    function sQ(dd, Jd) {
      const kd = [1 / 0, 1 / 0, 1 / 0],
        pd = [-1 / 0, -1 / 0, -1 / 0];
      for (const gd of dd)
        for (let dd = 0; dd < 3; dd++) kd[dd] = Math.min(kd[dd], gd[dd]), pd[dd] = Math.max(pd[dd], gd[dd]);
      const Nd = (kd[0] + pd[0]) / 2,
        Wd = (kd[1] + pd[1]) / 2,
        Pd = (kd[2] + pd[2]) / 2;
      let Zd = 0;
      for (const gd of dd) Zd = Math.max(Zd, Math.hypot(gd[0] - Nd, gd[1] - Wd, gd[2] - Pd));
      return {
        x: Nd,
        y: Wd,
        z: Pd,
        r: Zd + Jd
      }
    }

    function iQ(dd, Jd, kd) {
      const pd = Jd.x - dd.x,
        Nd = Jd.y - dd.y,
        Wd = Jd.z - dd.z,
        Pd = Math.sqrt(pd * pd + Nd * Nd + Wd * Wd);
      if (Pd <= Jd.r + 8) return 1;
      const Zd = Jd.r / Pd,
        gd = Math.sqrt(1 - Zd * Zd),
        Cd = gd < -dd.cosHalf,
        Kd = (pd * dd.dx + Nd * dd.dy + Wd * dd.dz) / Pd;
      if (!Cd && Kd < dd.cosHalf * gd - dd.sinHalf * Zd) return 0;
      const od = kd * qQ * dd.frameMs * dd.pxPerBlock / (Pd - Jd.r);
      for (let ld = 0; ld < BQ.length; ld++)
        if (od * BQ[ld] <= 1) return BQ[ld];
      return 1
    }

    function aQ(dd, Jd) {
      return {
        name: dd,
        at: Jd,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const MQ = [0, 0, 0];

    function FQ(dd, Jd, kd) {
      let [, pd, Nd, Wd, Pd, Zd] = Jd;
      const gd = Rk.c * (null !== Pd && void 0 !== Pd ? Pd : 1),
        Cd = [];
      for (let Qd = 0; Qd < pd.length; Qd += 3) Cd.push([pd[Qd] + .5, pd[Qd + 1] + .65, pd[Qd + 2] + .5]);
      const Kd = [];
      for (let Qd = 0; Qd < Cd.length - 1; Qd++) {
        const [dd, Jd] = [Cd[Qd], Cd[Qd + 1]];
        Kd.push([(dd[0] + Jd[0]) / 2, (dd[1] + Jd[1]) / 2, (dd[2] + Jd[2]) / 2])
      }
      const od = Cd.slice(1, -1),
        ld = new Uint8Array(od.length);
      for (const Qd of null !== Zd && void 0 !== Zd ? Zd : []) ld[Qd >> 1] |= 1 & Qd ? 2 : 1;
      return {
        island: dd,
        length: od.length,
        loop: Wd,
        cellsPerMs: gd,
        edges: Kd,
        pg: od,
        bounds: sQ([...Kd, ...od], .3),
        changed: !0,
        culled: !1,
        hide: ld,
        items: Nd.map((dd => {
          let [Jd, pd] = dd;
          return aQ(Jd, (0, Rk.C)(Jd, pd, kd, gd).at)
        }))
      }
    }

    function YQ(dd, Jd) {
      const {
        items: kd
      } = dd;
      if (0 === kd.length) return;
      const pd = dd.length / dd.cellsPerMs,
        Nd = Math.floor((Jd - kd[0].at) / pd) - 1;
      if (Nd > 0)
        for (const Wd of kd) Wd.at += Nd * pd
    }

    function mQ(dd, Jd) {
      const kd = Math.min(Math.floor(Jd), dd.length - 1),
        pd = dd.hide[kd];
      return 0 !== pd && 0 !== (pd & (Jd - kd < .5 ? 1 : 2))
    }

    function bQ(dd, Jd) {
      const kd = Math.min(Math.floor(Jd), dd.length - 1),
        pd = Jd - kd,
        Nd = pd < .5,
        Wd = Nd ? dd.edges[kd] : dd.pg[kd],
        Pd = Nd ? dd.pg[kd] : dd.edges[kd + 1],
        Zd = Nd ? 2 * pd : 2 * pd - 1;
      MQ[0] = Wd[0] + (Pd[0] - Wd[0]) * Zd, MQ[1] = Wd[1] + (Pd[1] - Wd[1]) * Zd, MQ[2] = Wd[2] + (Pd[2] - Wd[2]) * Zd
    }
    const SQ = Math.PI / 4;
    class jQ {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new GQ, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.xI = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(dd) {
        const Jd = performance.now();
        this.clock.sample(dd.baf2BeltLinesAt, Jd), this.queue(dd.baf2BeltLinesAt, dd, 0, null, null, 0), this.applyDue(Jd)
      }
      onMoves(dd) {
        const Jd = performance.now(),
          kd = dd.baf2BeltMovesAt;
        this.clock.sample(kd, Jd);
        for (const [pd, Nd, Wd, Pd] of dd.baf2BeltMoveList) null === Nd ? this.queue(kd - Wd, null, pd, null, null, null !== Pd && void 0 !== Pd ? Pd : 0) : this.queue(kd - Wd, null, pd, Nd, null !== Pd && void 0 !== Pd ? Pd : null, 0);
        this.applyDue(Jd)
      }
      start(dd) {
        this.pool = new vQ.d(dd, {
          scale: .3,
          yaw: SQ
        }, 64), this.xI(), window.addEventListener("resize", this.xI)
      }
      onAfterRender(dd) {
        const {
          pool: Jd
        } = this;
        if (!Jd) return;
        const kd = performance.now(),
          pd = kd - this.lastRenderAt;
        this.lastRenderAt = kd, pd < 100 && (this.frameMs += .1 * (pd - this.frameMs));
        const Nd = kd + this.frameMs;
        this.applyDue(Nd);
        const Wd = dd.cameraPosition,
          Pd = Jd.follow(Wd);
        this.setView(dd, Wd);
        const Zd = this.frame++;
        for (let gd = 0; gd < this.shown.length; gd++) {
          const dd = this.shown[gd],
            kd = iQ(this.view, dd.bounds, dd.cellsPerMs),
            pd = dd.culled && 0 !== kd;
          if (dd.culled = 0 === kd, !Pd && !dd.changed && !pd && (0 === kd || (Zd + gd) % kd !== 0)) continue;
          dd.changed = !1, dd.loop && (YQ(dd, Nd), (0, Rk.x)(dd.items, dd.length, Nd, dd.cellsPerMs));
          let Wd = dd.length;
          for (let Zd = 0; Zd < dd.items.length; Zd++) {
            const kd = dd.items[Zd],
              pd = (0, Rk.G)(kd.at, Wd, Nd, dd.cellsPerMs);
            if (Wd = pd - Rk.r, mQ(dd, pd)) {
              null === kd.kind || kd.hidden || (kd.kind.hide(kd.slot), kd.hidden = !0);
              continue
            }
            let gd = kd.kind;
            if (null === gd) {
              if (gd = Jd.kindOf(kd.name), null === gd) continue;
              kd.kind = gd, kd.slot = gd.take(), kd.hidden = !0, kd.drawn = NaN
            } else if (pd === kd.drawn && !kd.hidden && !Pd) continue;
            bQ(dd, pd), gd.write(kd.slot, MQ[0], MQ[1], MQ[2]), kd.hidden = !1, kd.drawn = pd
          }
        }
        Jd.commit()
      }
      dispose() {
        var dd;
        window.removeEventListener("resize", this.xI), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (dd = this.pool) || void 0 === dd || dd.dispose(), this.pool = null
      }
      setView(dd, Jd) {
        const {
          cameraDir: kd,
          lastDir: pd
        } = this, Nd = dd.cameraDirection;
        for (let Kd = 0; Kd < 3; Kd++) pd[Kd] = kd[Kd], kd[Kd] = Nd[Kd];
        const Wd = kd[0] * pd[0] + kd[1] * pd[1] + kd[2] * pd[2],
          Pd = Number.isNaN(Wd) ? 0 : Math.acos(Math.min(1, Math.max(-1, Wd))),
          {
            width: Zd,
            height: gd
          } = this,
          Cd = dd.tanHalfFovX;
        ! function(dd, Jd, kd, pd, Nd, Wd, Pd) {
          let Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          dd.x = Jd[0], dd.y = Jd[1], dd.z = Jd[2], dd.dx = kd[0], dd.dy = kd[1], dd.dz = kd[2];
          const gd = Math.min(Math.PI, Math.atan(Math.sqrt(pd * pd + Nd * Nd)) + xQ + Zd);
          dd.cosHalf = Math.cos(gd), dd.sinHalf = Math.sin(gd), dd.pxPerBlock = Wd / (2 * Nd), dd.frameMs = Pd
        }(this.view, Jd, kd, Cd, Cd * gd / Zd, gd * window.devicePixelRatio, this.frameMs, Pd)
      }
      queue(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = Math.max(this.clock.toLocal(dd), this.lastPendingAt);
        this.lastPendingAt = Pd, this.pending.push({
          at: Pd,
          lines: Jd,
          line: kd,
          name: pd,
          pos: Nd,
          idx: Wd
        })
      }
      applyDue(dd) {
        const {
          pending: Jd
        } = this;
        for (; this.pendingHead < Jd.length && Jd[this.pendingHead].at <= dd;) {
          const dd = Jd[this.pendingHead++];
          if (dd.lines) this.applyLines(dd.lines, dd.at), dd.lines = null;
          else {
            const Jd = this.lines.get(dd.line);
            Jd && this.applyMove(Jd, dd, dd.at)
          }
        }
        this.pendingHead === Jd.length ? (Jd.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > Jd.length && (Jd.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(dd, Jd) {
        this.clearIsland(dd.baf2BeltIsland);
        for (const kd of dd.baf2BeltLineList) this.lines.set(kd[0], FQ(dd.baf2BeltIsland, kd, Jd));
        this.shown = [...this.lines.values()]
      }
      applyMove(dd, Jd, kd) {
        let {
          name: pd,
          pos: Nd,
          idx: Wd
        } = Jd;
        dd.changed = !0, dd.loop && (YQ(dd, kd), (0, Rk.x)(dd.items, dd.length, kd, dd.cellsPerMs)), null !== pd && null !== Nd ? (0, Rk.z)(dd.items, dd.length, aQ(pd, kd), Nd, kd, dd.cellsPerMs) : null !== pd ? dd.items.push(aQ(pd, kd)) : dd.items.length > Wd && this.release((0, Rk.H)(dd.items, dd.length, kd, dd.cellsPerMs, Wd))
      }
      clearIsland(dd) {
        for (const [Jd, kd] of this.lines)
          if (kd.island === dd) {
            for (const dd of kd.items) this.release(dd);
            this.lines.delete(Jd)
          }
      }
      release(dd) {
        null !== dd.kind && (dd.kind.release(dd.slot), dd.kind = null, dd.slot = -1, dd.hidden = !0, dd.drawn = NaN)
      }
    }
    var XQ = kd(36772),
      fQ = kd(38651);

    function nQ(dd) {
      let {
        depth: Jd,
        store: kd,
        t: Nd
      } = dd;
      const Wd = function(dd) {
        const [Jd, kd] = (0, pd.useState)(dd.lastPlayerY());
        return (0, WK.h)(yN, kd), (0, pd.useEffect)((() => {
          kd(dd.lastPlayerY())
        }), [dd]), Jd
      }(kd);
      if (null === Wd) return null;
      const [Pd, Zd] = Jd, gd = Wd > Pd ? Pd : null !== Zd && Wd < Zd ? Zd : null, Cd = {
        y: qW(Wd),
        target: null === gd ? "" : qW(gd)
      };
      return (0, MW.jsx)("span", {
        className: iN()("Baf2QuestDepth", {
          Reached: null === gd
        }),
        children: Nd(`${CK}${null===gd?"questDepthReached":"questDepth"}`, Cd)
      })
    }

    function UQ(dd) {
      let {
        also: Jd,
        view: kd,
        t: pd
      } = dd;
      return (0, MW.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, MW.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, MW.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, MW.jsx)("strong", {
            children: pd(`${CK}questAlsoDownHere`)
          }), (0, MW.jsx)("span", {
            className: "Baf2QuestChips",
            children: Jd.map((dd => {
              let [Jd, Nd, Wd, Pd] = dd;
              return (0, MW.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": pd(`${CK}questAlsoItem`, {
                  item: oK(pd, kd.itemNames[Jd], Jd),
                  have: String(Nd),
                  need: String(Wd)
                }),
                children: [(0, MW.jsx)(LK, {
                  item: Jd
                }), (0, MW.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Nd}/${Wd}`
                }), null !== Pd && (0, MW.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: pd(`${CK}questAlsoDepth`, {
                    y: qW(Pd)
                  })
                })]
              }, Jd)
            }))
          })]
        })]
      })
    }
    var yQ = kd(3247);

    function DQ(dd) {
      let {
        expanded: Jd,
        inventoryOpen: kd,
        children: Nd
      } = dd;
      const Wd = (0, pd.useRef)(null);
      return (0, pd.useEffect)((() => {
        const dd = Wd.current,
          Jd = null === dd || void 0 === dd ? void 0 : dd.closest(".RightElements"),
          pd = null === dd || void 0 === dd ? void 0 : dd.firstElementChild;
        if (!dd || !Jd || !pd) return;
        return (0, fQ.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Jd, pd], (() => {
          const Nd = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Nd.length) return;
          const Wd = Math.max(...Nd.map((dd => dd.getBoundingClientRect().bottom))),
            Pd = Jd.getBoundingClientRect(),
            Zd = kd ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (Zd) {
            const Jd = parseFloat(getComputedStyle(pd).marginLeft) + parseFloat(getComputedStyle(pd).marginRight),
              kd = Pd.right - Zd.getBoundingClientRect().right - 8 - Jd;
            dd.style.setProperty("--baf2-quest-room", `${kd}px`), dd.classList.toggle("NoRoom", kd < 150)
          } else dd.style.removeProperty("--baf2-quest-room"), dd.classList.remove("NoRoom");
          const gd = Wd - Pd.top + 8,
            Cd = function(dd, Jd, kd) {
              const pd = Jd.getBoundingClientRect(),
                Nd = dd.getBoundingClientRect(),
                Wd = (0, yQ.e)(Nd.left, Nd.right, pd.top + kd);
              if (null !== Wd && Wd < pd.bottom) return Wd - pd.top;
              return pd.height - (parseFloat(getComputedStyle(Jd).paddingBottom) || 0)
            }(dd, Jd, gd) - 8,
            Kd = window.innerHeight / 2 - Pd.top,
            {
              top: od,
              maxHeight: ld
            } = function(dd, Jd, kd, pd, Nd) {
              const Wd = Math.min(kd, Math.max(0, Jd - dd)),
                Pd = Nd ? dd : Math.max(dd, Math.min(pd - Wd / 2, Jd - Wd));
              return {
                top: Pd,
                maxHeight: Math.max(0, Jd - Pd)
              }
            }(gd, Cd, function(dd) {
              const Jd = dd.firstElementChild,
                kd = Jd ? Jd.scrollHeight - Jd.clientHeight : 0;
              return dd.getBoundingClientRect().height + Math.max(0, kd)
            }(pd), Kd, iW());
          dd.style.top = `${od}px`, dd.style.maxHeight = `${ld}px`
        }))
      }), [kd]), (0, MW.jsx)("div", {
        ref: Wd,
        className: iN()("Baf2QuestHud", {
          Expanded: Jd
        }),
        children: Nd
      })
    }

    function TQ(dd) {
      let {
        amount: Jd,
        t: kd
      } = dd;
      return (0, MW.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, MW.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, MW.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: kd(`${CK}questStepsDone`, {
            amount: String(Jd)
          })
        })]
      })
    }

    function EQ(dd) {
      let {
        pulse: Jd
      } = dd;
      return 0 === Jd ? null : (0, MW.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, Jd)
    }

    function cQ(dd) {
      var Jd;
      let {
        store: kd
      } = dd;
      const Nd = (0, WK.i)(UN, kd.get()),
        [Wd, Pd] = (0, pd.useState)(!1),
        {
          t: Zd
        } = (0, YN.B)(),
        gd = function() {
          const [dd, Jd] = (0, pd.useState)(iW);
          return (0, pd.useEffect)((() => (Jd(iW()), aW(Jd))), []), dd
        }(),
        {
          openInGameMenuName: Cd,
          openEverythingMenuName: Kd
        } = (0, qN.j)(["openInGameMenuName", "openEverythingMenuName"]),
        od = "inventory" === Cd && null === Kd,
        ld = null !== Cd && !od || null !== Kd;
      if (! function(dd) {
          return null !== dd.name || null !== dd.side
        }(Nd) || ld || "off" === Nd.tutorial) return null;
      const Qd = rN(Nd.rows),
        Ld = Qd.filter((dd => dd.done)).length,
        Od = function(dd, Jd) {
          const kd = VN(dd);
          let pd = 0;
          return dd.filter(((dd, Nd) => !!dd.justFinished || !(dd.done || Nd < kd || pd > Jd) && (pd++, !0)))
        }(Nd.rows, gd ? 0 : 2),
        ed = gd ? Od : function(dd, Jd) {
          const kd = Jd.filter((dd => !dd.justFinished));
          if (kd.length < 2) return [...Jd];
          const pd = dd.indexOf(kd[0]),
            Nd = dd.indexOf(kd[kd.length - 1]),
            Wd = new Set(rN(dd));
          return dd.filter(((dd, kd) => Jd.includes(dd) || dd.done && Wd.has(dd) && kd > pd && kd < Nd))
        }(Nd.rows, Od),
        Rd = Wd ? Nd.rows : ed,
        Id = Wd || gd ? [] : function(dd, Jd) {
          const kd = new Array(Jd.length + 1).fill(0),
            pd = new Set(rN(dd));
          let Nd = 0;
          for (const Wd of dd) Nd < Jd.length && Wd === Jd[Nd] ? Nd++ : Wd.done && pd.has(Wd) && kd[Nd]++;
          return kd
        }(Nd.rows, ed),
        Gd = Wd || ed.length < Nd.rows.length || null !== Nd.reward,
        vd = hN(Nd),
        xd = vd ? Zd(`${CK}questLineComplete`) : Nd.tier ? RK(Zd, Nd.tier) : Zd(`${CK}currentQuest`),
        qd = function(dd) {
          var Jd, kd;
          if (hN(dd)) return null;
          const pd = null === (Jd = dd.chapters) || void 0 === Jd ? void 0 : Jd.find((Jd => {
            let [kd] = Jd;
            return kd === dd.tier
          }));
          if (!pd) return null;
          const Nd = pd[1].filter((dd => !dd[4]));
          if (0 === Nd.length) return null;
          const Wd = null === (kd = dd.name) || void 0 === kd ? void 0 : kd[0],
            Pd = dd => Nd.findIndex((Jd => Jd[0] === Wd && (!dd || !Jd[3]))),
            Zd = Pd(!0),
            gd = Zd >= 0 ? Zd : Pd(!1);
          if (gd >= 0) return [gd + 1, Nd.length];
          const Cd = Nd.filter((dd => dd[3])).length;
          return [Math.min(Cd + 1, Nd.length), Nd.length]
        }(Nd);
      return (0, MW.jsx)(XQ.g, {
        placement: "topRight",
        children: (0, MW.jsx)(DQ, {
          expanded: Wd,
          inventoryOpen: od,
          children: (0, MW.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: KK,
            children: [null !== Nd.name && (0, MW.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, MW.jsx)(EQ, {
                pulse: Nd.pulse
              }), (0, MW.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, MW.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [xd, qd && (0, MW.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": Zd(`${CK}questPlaceLabel`, {
                      n: String(qd[0]),
                      total: String(qd[1])
                    }),
                    children: Zd(`${CK}questPlace`, {
                      n: String(qd[0]),
                      total: String(qd[1])
                    })
                  }), Nd.tier && Nd.core && !vd && (0, MW.jsx)(IK, {
                    core: Nd.core,
                    t: Zd
                  })]
                })
              }), (0, MW.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Zd(`${CK}${Nd.name[0]}`, lK(Nd.name[1]))
              }), (Qd.length > 1 || Gd) && (0, MW.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Qd.length > 1 && (0, MW.jsx)(GK, {
                  rows: Qd,
                  t: Zd
                }), Gd && (0, MW.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Wd,
                  onClick: () => {
                    Pd(!Wd)
                  },
                  children: [(0, MW.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: Zd(`${CK}questStepsToggle`, {
                      done: String(Ld),
                      total: String(Qd.length)
                    })
                  }), (0, MW.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Wd ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, MW.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [Rd.map(((dd, Jd) => {
                  var Wd;
                  const Pd = dd.current && Nd.depth;
                  return (0, MW.jsxs)(pd.Fragment, {
                    children: [(null !== (Wd = Id[Jd]) && void 0 !== Wd ? Wd : 0) > 0 && (0, MW.jsx)(TQ, {
                      amount: Id[Jd],
                      t: Zd
                    }), (0, MW.jsx)(vK, {
                      row: dd,
                      view: Nd,
                      t: Zd,
                      extra: Pd && (0, MW.jsx)(nQ, {
                        depth: Pd,
                        store: kd,
                        t: Zd
                      })
                    })]
                  }, dd.id)
                })), (null !== (Jd = Id[Rd.length]) && void 0 !== Jd ? Jd : 0) > 0 && (0, MW.jsx)(TQ, {
                  amount: Id[Rd.length],
                  t: Zd
                }), Nd.also.length > 0 && (0, MW.jsx)(UQ, {
                  also: Nd.also,
                  view: Nd,
                  t: Zd
                })]
              }), Wd && Nd.reward && (0, MW.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [Zd(`${CK}questReward`), (0, MW.jsx)(LK, {
                  item: Nd.reward
                }), oK(Zd, Nd.itemNames[Nd.reward], Nd.reward)]
              })]
            }), Nd.side && (0, MW.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [EN(Nd, Date.now()) && (0, MW.jsx)(EQ, {
                pulse: Nd.sideCameUpAt
              }), (0, MW.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: Zd(`${CK}questSide`)
              }), (0, MW.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Zd(`${CK}${Nd.side.name[0]}`, lK(Nd.side.name[1]))
              }), (0, MW.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, MW.jsx)(vK, {
                  row: Nd.side.row,
                  view: Nd,
                  t: Zd
                })
              })]
            })]
          })
        })
      })
    }
    const hQ = "baf2ToastView";
    class rQ {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = dd, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: dd,
          holdMs: Jd
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const dd = this.dropCovered();
          dd && this.show(dd.message, dd.holdMs)
        }), 250));
        const kd = this.dropCovered();
        null !== kd && (kd.holdMs > 0 || "baf2ToastCelebrate" === kd.message.baf2ToastStyle) && "baf2ToastCelebrate" !== dd.baf2ToastStyle && this.show(kd.message, kd.holdMs);
        const pd = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== dd.baf2ToastStyle && pd > 0) return this.pending = {
          message: dd,
          holdMs: Jd
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const dd = this.pending;
          this.pending = null, dd && this.present(dd.message, dd.holdMs)
        }), pd));
        this.present(dd, Jd)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(dd, Jd) {
        this.clearTimers(), this.pending = null;
        const kd = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: dd.baf2ToastText,
          style: dd.baf2ToastStyle,
          swapped: kd,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === dd.baf2ToastStyle ? 1500 : Jd), this.nO();
        const pd = Math.min(8e3, Math.max(1e3, dd.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), pd)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.nO(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.nO()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const dd = this.covering;
        return this.covering = null, dd
      }
      nO() {
        fN.j.nO(hQ, this.view, !0)
      }
    }
    var uQ = kd(72);
    const tQ = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function VQ(dd) {
      let {
        store: Jd
      } = dd;
      const kd = (0, WK.i)(hQ, Jd.get()),
        {
          openInGameMenuName: pd,
          openEverythingMenuName: Nd
        } = (0, qN.j)(["openInGameMenuName", "openEverythingMenuName"]),
        Wd = kd && (0, MW.jsxs)("div", {
          className: iN()("Baf2Toast", tQ[kd.style], {
            Swapped: kd.swapped,
            Leaving: kd.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === kd.style && (0, MW.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, MW.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, MW.jsx)(SN.c, {
              text: kd.text
            })
          })]
        }, kd.id);
      return null !== pd && null === Nd ? (0, uQ.createPortal)((0, MW.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Wd
      }), document.body) : (0, MW.jsx)(XQ.g, {
        children: Wd
      })
    }
    const zQ = "baf2AreaView";
    class HQ {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.EC = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.EC = null
      }
      arrive(dd, Jd) {
        Jd && function(dd) {
          return "home" === dd.baf2AreaPlace && void 0 !== dd.baf2AreaNameText
        }(dd) ? this.EC = dd : this.show(dd)
      }
      release() {
        const dd = this.EC;
        null !== dd && this.show(dd)
      }
      show(dd) {
        this.clearTimer(), this.EC = null;
        const Jd = void 0 === dd.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: dd,
          ms: Jd
        }, this.nO(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.nO()
        }), Jd)
      }
      dispose() {
        this.clearTimer(), this.EC = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nO() {
        fN.j.nO(zQ, this.view, !0)
      }
    }

    function wQ(dd) {
      var Jd;
      let {
        store: kd
      } = dd;
      const {
        t: pd
      } = (0, YN.B)(), Nd = (0, WK.i)(zQ, kd.get());
      if (!Nd) return null;
      const {
        area: Wd
      } = Nd, Pd = Wd.baf2AreaResetMinutes;
      return (0, MW.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Wd.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Nd.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, MW.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Wd.baf2AreaHeading && (0, MW.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: pd(Wd.baf2AreaHeading)
        }), (0, MW.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (Jd = Wd.baf2AreaNameText) && void 0 !== Jd ? Jd : pd(Wd.baf2AreaName)
        }), Wd.baf2AreaNote && (0, MW.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: pd(Wd.baf2AreaNote)
        }), void 0 !== Pd && (0, MW.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: pd("buildAFactory2Game:areaWildsReset", {
            time: BW(pd, 60 * Pd)
          })
        })]
      }, Nd.id)
    }
    const AQ = "baf2GearGauge";
    class dL {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      JG(dd) {
        var Jd;
        if (this.clearLinger(), null === dd.gearPowerKind) return void this.set(null);
        const kd = "jetpack" === dd.gearPowerKind && (pd = dd.gearChargeState, Nd = dd.gearCharge, "flying" === pd || "charging" === pd || "outOfCharge" === pd || "ceiling" === pd || "offPlot" === pd || "noPower" === pd && Nd <= 0);
        var pd, Nd;
        const Wd = !0 === (null === (Jd = this.view) || void 0 === Jd ? void 0 : Jd.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Pd = kd || "jetpack" === dd.gearPowerKind && Wd;
        this.set({
          gauge: dd,
          jetShown: Pd
        }), Pd && !kd && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(dd) {
        this.view = dd, fN.j.nO(AQ, dd, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const JL = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function kL(dd) {
      let {
        store: Jd
      } = dd;
      const kd = (0, WK.i)(AQ, Jd.get());
      return kd ? "jetpack" === kd.gauge.gearPowerKind ? (0, MW.jsx)(pL, {
        view: kd
      }) : (0, MW.jsx)(NL, {
        gauge: kd.gauge
      }) : null
    }

    function pL(dd) {
      let {
        view: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)(), {
        gauge: pd
      } = Jd, Nd = pd.gearChargeMax > 0 ? Math.max(0, Math.min(1, pd.gearCharge / pd.gearChargeMax)) : 0, Wd = JL[pd.gearChargeState], Pd = Wd ? kd(Wd) : null;
      return (0, MW.jsxs)("div", {
        className: iN()("Baf2JetArc", {
          Shown: Jd.jetShown,
          Low: Nd < .2,
          Warm: Nd >= .2 && Nd < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Nd)
        },
        "aria-hidden": !Jd.jetShown,
        children: [(0, MW.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, MW.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: WL,
            pathLength: 100
          }), (0, MW.jsx)("path", {
            className: "Baf2JetArcFill",
            d: WL,
            pathLength: 100
          })]
        }), (0, MW.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Nd), "%"]
        }), Pd && (0, MW.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Pd
        })]
      })
    }

    function NL(dd) {
      let {
        gauge: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)(), pd = function(dd, Jd) {
        switch (Jd.gearPowerKind) {
          case "skyPack":
            return dd("buildAFactory2Game:gearSkyPack", {
              charge: Jd.gearCharge,
              max: Jd.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return dd("buildAFactory2Game:gearIslandDraw", {
              power: wd(Jd.gearIslandPower),
              cost: wd(Jd.gearCostPerUse)
            });
          case "barrier":
            return dd("buildAFactory2Game:gearBarrier", {
              shield: Math.round(Jd.gearCharge),
              max: Jd.gearChargeMax,
              power: wd(Jd.gearIslandPower)
            });
          default:
            return null
        }
      }(kd, Jd);
      return null === pd ? null : (0, MW.jsx)(XQ.g, {
        children: (0, MW.jsx)("div", {
          className: iN()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === Jd.gearChargeState || "outOfCharge" === Jd.gearChargeState
          }),
          role: "status",
          children: pd
        })
      })
    }
    const WL = (() => {
      const dd = dd => {
        const Jd = dd * Math.PI / 180;
        return `${(40*Math.cos(Jd)).toFixed(2)} ${(40*Math.sin(Jd)).toFixed(2)}`
      };
      return `M ${dd(160)} A 40 40 0 1 1 ${dd(380)}`
    })();
    class PL {
      constructor(dd) {
        this.onElement = dd, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      JG(dd) {
        let Jd = dd.baf2LabelsReset || dd.baf2LabelsIsland !== this.island;
        Jd && (this.labels.clear(), this.island = dd.baf2LabelsIsland);
        for (const [kd, pd, Nd, Wd, Pd] of dd.baf2LabelsList) {
          const dd = `${kd},${pd},${Nd}`,
            Zd = this.labels.get(dd);
          null === Wd ? Jd = this.labels.delete(dd) || Jd : Zd && Zd.item === Wd && (Zd.count === Pd || Zd.count >= 0 && Pd >= 0) ? Zd.count !== Pd && (Zd.count = Pd, this.writeCount(dd, Pd)) : (this.labels.set(dd, {
            key: dd,
            pos: [kd, pd, Nd],
            item: Wd,
            count: Pd
          }), this.writeCount(dd, Pd), Jd = !0)
        }
        if (this.changes++, Jd) {
          this.snapshot = [...this.labels.values()];
          for (const dd of this.listeners) dd()
        }
      }
      bindCount(dd) {
        const Jd = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${dd}`;
        let kd = this.countRefs.get(Jd);
        return kd || (kd = kd => {
          var pd, Nd;
          kd ? (this.countElements.set(Jd, kd), this.writeCount(dd, null !== (pd = null === (Nd = this.labels.get(dd)) || void 0 === Nd ? void 0 : Nd.count) && void 0 !== pd ? pd : -1)) : (this.countElements.delete(Jd), this.countRefs.delete(Jd))
        }, this.countRefs.set(Jd, kd)), kd
      }
      setCountWords(dd) {
        this.countWords = dd;
        for (const [Jd, kd] of this.labels) this.writePart(`words|${Jd}`, dd(kd.count), kd.count)
      }
      writeCount(dd, Jd) {
        this.writePart(`bare|${dd}`, xW(Jd), Jd), this.countElements.has(`words|${dd}`) && this.writePart(`words|${dd}`, this.countWords(Jd), Jd)
      }
      writePart(dd, Jd, kd) {
        const pd = this.countElements.get(dd);
        if (!pd || kd < 0) return;
        const Nd = pd.firstChild;
        Nd && 3 === Nd.nodeType && !Nd.nextSibling ? Nd.nodeValue !== Jd && (Nd.nodeValue = Jd) : pd.textContent !== Jd && (pd.textContent = Jd)
      }
      list() {
        return this.snapshot
      }
      at(dd) {
        return this.labels.get(`${dd[0]},${dd[1]},${dd[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      bind(dd) {
        let Jd = this.refs.get(dd);
        return Jd || (Jd = Jd => {
          const kd = this.elements.get(dd);
          var pd, Nd;
          kd && (null === (pd = this.onElement) || void 0 === pd || pd.call(this, kd, !1));
          Jd ? (this.elements.set(dd, Jd), null === (Nd = this.onElement) || void 0 === Nd || Nd.call(this, Jd, !0)) : (this.elements.delete(dd), this.refs.delete(dd))
        }, this.refs.set(dd, Jd)), Jd
      }
      onAfterRender(dd, Jd, kd, pd) {
        for (const Nd of this.snapshot) {
          const Wd = this.elements.get(Nd.key);
          if (!Wd) continue;
          if (pd(Nd.key)) {
            (0, WQ.f)(Wd, !0);
            continue
          }
          const Pd = QQ(Wd, dd, Jd, Nd.pos, 1.1, 24);
          Pd && kd.add(Pd, Wd, 0, !1)
        }
      }
    }
    const ZL = (0, pd.memo)((function(dd) {
        let {
          item: Jd
        } = dd;
        return (0, MW.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, MW.jsx)(bN.d, {
            itemName: Jd,
            amount: 0
          })
        })
      })),
      gL = (0, pd.memo)((function(dd) {
        let {
          label: Jd,
          bindRef: kd,
          countRef: pd,
          wordsRef: Nd
        } = dd;
        return (0, MW.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: kd,
          hidden: !0,
          children: [(0, MW.jsx)(ZL, {
            item: Jd.item
          }), Jd.count >= 0 && (0, MW.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, MW.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Nd
            }), (0, MW.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: pd
            })]
          })]
        })
      })),
      CL = (0, pd.memo)((function(dd) {
        let {
          store: Jd
        } = dd;
        const {
          t: kd
        } = (0, YN.B)(), [Nd, Wd] = (0, pd.useState)((() => Jd.list()));
        return (0, pd.useEffect)((() => (Wd(Jd.list()), Jd.subscribe((() => {
          Wd(Jd.list())
        })))), [Jd]), (0, pd.useEffect)((() => {
          Jd.setCountWords((dd => kd("buildAFactory2Game:labelSiloCount", {
            count: xW(dd)
          })))
        }), [Jd, kd]), (0, MW.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Nd.map((dd => -2 === dd.count ? null : (0, MW.jsx)(gL, {
            label: dd,
            bindRef: Jd.bind(dd.key),
            countRef: Jd.bindCount(dd.key),
            wordsRef: Jd.bindCount(dd.key, "words")
          }, dd.key)))
        })
      })),
      KL = {
        read: () => !0,
        write: () => {}
      };

    function oL(dd) {
      return `${dd[0]},${dd[1]},${dd[2]}`
    }

    function lL(dd) {
      let [Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld] = dd;
      const Qd = void 0 === od || void 0 === ld ? function(dd) {
        return [Math.floor((dd - 1) / 2), 0]
      }(Wd) : [od, ld];
      return {
        kind: 0 === gd ? "reactor" : "battery",
        box: hk([Jd, kd, pd], Nd, Wd, Pd, Zd, Qd),
        formed: 1 === Cd,
        level: Kd
      }
    }
    class QL {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KL;
        this.guideSetting = dd, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = dd.read()
      }
      JG(dd) {
        var Jd;
        const kd = new Map;
        for (const pd of dd.baf2RxPlanList) {
          const dd = lL(pd);
          kd.set(oL(dd.box.ctrl), dd)
        }
        this.plans = kd, this.layouts = new Map((null !== (Jd = dd.baf2RxLayouts) && void 0 !== Jd ? Jd : []).map((dd => {
          let [Jd, kd, pd, Nd] = dd;
          return [oL([Jd, kd, pd]), Nd]
        }))), this.predicted.clear(), dd.baf2RxFormedAt && (this.formed = {
          ctrl: dd.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const pd of [...this.startersOff]) {
          const dd = kd.get(pd);
          dd && !dd.formed || this.startersOff.delete(pd)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((dd => this.planByKey(dd)))
      }
      planAt(dd) {
        return this.planByKey(oL(dd))
      }
      predictSize(dd, Jd) {
        this.predicted.set(oL(dd), Jd), this.changed()
      }
      unpredict(dd) {
        this.predicted.delete(oL(dd)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(dd) {
        var Jd;
        const kd = oL(dd);
        return this.predicted.has(kd) ? null : null !== (Jd = this.layouts.get(kd)) && void 0 !== Jd ? Jd : null
      }
      showsStarter(dd) {
        return !this.startersOff.has(oL(dd))
      }
      setStarter(dd, Jd) {
        const kd = oL(dd);
        Jd ? this.startersOff.delete(kd) : this.startersOff.add(kd), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(dd) {
        this.guide = dd, this.guideSetting.write(dd), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(dd) {
        const Jd = this.plans.get(dd);
        if (!Jd) return null;
        const kd = this.predicted.get(dd);
        return kd ? {
          ...Jd,
          box: uk(Jd.box, Jd.kind, kd[0], kd[1], kd[2])
        } : Jd
      }
      changed() {
        this.version++;
        for (const dd of this.listeners) dd()
      }
    }
    var LL = kd(193);
    const OL = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function eL(dd, Jd, kd, pd) {
      const Nd = dd.length / 3;
      for (let Wd = 0; Wd < OL.length / 3; Wd++) dd.push(OL[3 * Wd] * pd[0] / 2 + kd[0], OL[3 * Wd + 1] * pd[1] / 2 + kd[1], OL[3 * Wd + 2] * pd[2] / 2 + kd[2]);
      for (let Wd = Nd; Wd < Nd + 24; Wd += 4) Jd.push(Wd, Wd + 1, Wd + 2, Wd, Wd + 2, Wd + 3)
    }

    function RL(dd, Jd, kd) {
      const pd = Jd[0][0],
        Nd = [],
        Wd = [];
      for (const [Pd, Zd] of Jd) eL(Nd, Wd, [Pd[0] - pd[0], Pd[1] - pd[1], Pd[2] - pd[2]], Zd);
      return dd.createGameMesh({
        positions: Nd,
        indices: Wd
      }, kd, pd)
    }

    function IL(dd, Jd) {
      const kd = dd.w - 2,
        pd = dd.d - 2;
      return 1 === function(dd, Jd, kd, pd) {
        const [Nd, Wd, Pd] = dd;
        if (Number(Nd <= 2) + Number(Wd <= 2) + Number(Pd <= 2) >= 2) return function(dd, Jd, kd) {
          return (dd + Jd + kd) % 2 === 0 ? 1 : 3
        }(Jd, kd, pd);
        const [Zd, gd] = Nd >= Wd && Nd >= Pd ? [kd, pd] : Wd >= Pd ? [Jd, pd] : [Jd, kd];
        return Zd % 2 === 0 && gd % 2 === 0 ? 1 : 3
      }([kd, dd.h - 2, pd], Jd % kd, Math.floor(Jd / (kd * pd)), Math.floor(Jd / kd) % pd) ? "rod" : "channel"
    }

    function GL(dd, Jd, kd) {
      if ("reactor" !== dd.kind || dd.formed || !Jd) return !1;
      const pd = zk(dd.box);
      for (let Nd = 0; Nd < pd; Nd++) {
        const dd = kd(Nd);
        if (null !== dd && bk(dd)) return !1
      }
      return !0
    }

    function vL(dd, Jd, kd, pd, Nd) {
      var Wd;
      let Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const Zd = kp(dd.box, Jd),
        gd = Pp(dd.kind, Zd, kd);
      if ("wrong" === gd || "blocked" === gd) return "wrong";
      if (!Nd) return null;
      if ("inside" === Zd && "reactor" === dd.kind && "Air" === Sk(kd)) {
        if (null !== Pd) {
          var Cd;
          const kd = dl[Jl(Pd, pp(dd.box, Jd))];
          return kd && null !== (Cd = Mg(kd)) && void 0 !== Cd ? Cd : null
        }
        if (pd) return IL(dd.box, pp(dd.box, Jd))
      }
      if ("missing" !== gd) return null;
      const Kd = Zp(dd.kind, Zd);
      return null === Kd ? null : null !== (Wd = Mg(Kd)) && void 0 !== Wd ? Wd : null
    }
    const xL = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function qL(dd, Jd, kd) {
      const pd = kd => {
        const pd = Jd(dp(dd.box, kd));
        return null !== pd && function(dd, Jd) {
          return "reactor" !== dd.kind || Jd !== wk(dd.box) && "inside" !== kp(dd.box, Jd)
        }(dd, kd) && "ok" !== Pp(dd.kind, kp(dd.box, kd), pd)
      };
      if (kd) {
        const Wd = Jp(dd.box, [Math.floor(kd[0]), Math.floor(kd[1]), Math.floor(kd[2])]);
        if (Wd >= 0 && (pd(Wd) || (Nd = Wd, "reactor" === dd.kind && "inside" === kp(dd.box, Nd) && "Air" === Jd(dp(dd.box, Nd))))) return Wd
      }
      var Nd;
      const Wd = zk(dd.box);
      for (let Pd = 0; Pd < Wd; Pd++)
        if (pd(Pd)) return Pd;
      return -1
    }

    function BL(dd, Jd) {
      return Math.floor(Jd / (dd.w * dd.d))
    }

    function sL(dd, Jd, kd) {
      return kd >= 0 && BL(dd, Jd) > BL(dd, kd)
    }

    function iL(dd, Jd) {
      return Jd >= 0 && dd.h >= 3 && BL(dd, Jd) === dd.h - 1
    }

    function aL(dd) {
      const Jd = Sk(dd);
      return Jd === vk || "Collider" === Jd || "Laser" === Jd || Jd.startsWith("_Collider ")
    }

    function ML(dd, Jd, kd, pd) {
      if (pd(dd)) return null;
      if (!xL.every((Jd => {
          let [pd, Nd, Wd] = Jd;
          const Pd = kd([dd[0] + pd, dd[1] + Nd, dd[2] + Wd]);
          return null !== Pd && !Dk("reactor", Pd) && "reactor" !== jk(Pd)
        }))) return null;
      const Nd = Tk("reactor").min,
        Wd = hk([dd[0], dd[1], dd[2]], function(dd, Jd) {
          const kd = Jd[0] - (dd[0] + .5),
            pd = Jd[2] - (dd[2] + .5);
          return Math.abs(kd) >= Math.abs(pd) ? kd >= 0 ? 2 : 4 : pd >= 0 ? 1 : 3
        }(dd, Jd), Nd, Nd, Nd, rk("reactor", Nd)),
        Pd = wk(Wd);
      let Zd = !0;
      for (let gd = 0; gd < zk(Wd) && Zd; gd++) {
        if (gd === Pd) continue;
        const dd = dp(Wd, gd),
          Jd = kd(dd);
        Zd = !pd(dd) && (null === Jd || !aL(Jd))
      }
      return {
        box: Wd,
        fits: Zd
      }
    }
    const FL = ag,
      YL = "baf2Goal",
      mL = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      bL = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      SL = .4;

    function jL(dd, Jd) {
      let [kd, pd, Nd] = dd;
      const Wd = Xg([kd - .02, pd - .02, Nd - .02], [kd + 1.02, pd + 1.02, Nd + 1.02], .07);
      return Jd && (Wd.push([
        [kd + .5, pd + 1 + .7, Nd + .5],
        [.08, 1.4, .08]
      ]), Wd.push([
        [kd + .5, pd + 1 + 1.4 + .2, Nd + .5],
        [SL, SL, SL]
      ])), Wd
    }

    function XL(dd, Jd) {
      let [kd, pd, Nd] = Jd;
      return dd.isBlockInLoadedChunk(kd, pd, Nd) ? dd.blockIdToBlockName(dd.getBlockId(kd, pd, Nd)) : null
    }
    let fL = null;
    const nL = new Set;
    let UL = null;

    function yL(dd) {
      fL = dd;
      for (const Jd of nL) Jd(dd)
    }
    class DL {
      constructor(dd) {
        var Jd;
        this.plans = dd, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (Jd = dd => {
          var Jd, kd;
          this.setGoal(null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.goal) && void 0 !== Jd ? Jd : null, null !== (kd = null === dd || void 0 === dd ? void 0 : dd.startsBattery) && void 0 !== kd && kd)
        }, UL ??= [fN.j.subscribe("setDirectionArrow", (dd => {
          let {
            id: Jd,
            position: kd,
            text: pd
          } = dd;
          Jd === YL && yL({
            goal: [Math.floor(kd[0]), Math.floor(kd[1]), Math.floor(kd[2])],
            startsBattery: JSON.stringify(null !== pd && void 0 !== pd ? pd : null).includes("arrowStartBattery")
          })
        })), fN.j.subscribe("clearDirectionArrow", (dd => {
          let {
            id: Jd
          } = dd;
          null !== Jd && Jd !== YL || yL(null)
        }))], nL.add(Jd), Jd(fL), () => {
          nL.delete(Jd)
        })
      }
      onAfterRender(dd, Jd) {
        const kd = performance.now();
        if (this.cues.length > 0) {
          const Jd = .55 + .45 * Math.sin(kd / 1100 * Math.PI * 2);
          for (const kd of this.cues) dd.setGameMesh(kd, {
            visibility: Jd
          })
        }
        if (kd - this.lastCheckMs < 150) return;
        this.lastCheckMs = kd;
        const pd = this.plans.all().filter((dd => {
            const [kd, pd, Nd] = dd.box.ctrl;
            return (!dd.formed || null !== this.plans.layoutOf(dd.box.ctrl)) && (kd - Jd[0]) ** 2 + (pd - Jd[1]) ** 2 + (Nd - Jd[2]) ** 2 <= 2304
          })),
          Nd = function(dd, Jd) {
            const kd = LL.g.KL,
              pd = new Map;
            for (const Wd of Jd) {
              const Jd = dp(Wd.box, 0),
                Pd = dp(Wd.box, zk(Wd.box) - 1),
                Zd = [Math.min(Jd[0], Pd[0]), Math.min(Jd[1], Pd[1]), Math.min(Jd[2], Pd[2])].map((dd => Math.floor(dd / kd))),
                gd = [Math.max(Jd[0], Pd[0]), Math.max(Jd[1], Pd[1]), Math.max(Jd[2], Pd[2])].map((dd => Math.floor(dd / kd)));
              for (let kd = Zd[0]; kd <= gd[0]; kd++)
                for (let Jd = Zd[1]; Jd <= gd[1]; Jd++)
                  for (let Wd = Zd[2]; Wd <= gd[2]; Wd++) {
                    var Nd;
                    pd.set(`${kd},${Jd},${Wd}`, null !== (Nd = dd.getChunkVersion(kd, Jd, Wd)) && void 0 !== Nd ? Nd : -1)
                  }
            }
            return pd
          }(dd, pd);
        this.plans.getVersion() === this.storeVersion && (function(dd, Jd) {
          if (dd.size !== Jd.size) return !1;
          for (const [kd, pd] of dd)
            if (Jd.get(kd) !== pd) return !1;
          return !0
        }(Nd, this.chunkVersions) || kd - this.lastRescanMs < 600) || (this.lastRescanMs = kd, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Nd, this.redraw(dd, pd))
      }
      dispose(dd) {
        this.unwatch(), fL = null, this.clearMeshes(dd), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(dd, Jd) {
        var kd;
        (null === dd || void 0 === dd ? void 0 : dd.join()) === (null === (kd = this.goal) || void 0 === kd ? void 0 : kd.join()) && Jd === this.startsBattery || (this.goal = dd, this.startsBattery = Jd, this.storeVersion = -1)
      }
      redraw(dd, Jd) {
        const kd = Jd => XL(dd, Jd),
          pd = new Map,
          Nd = [],
          Wd = this.plans.guideOn();
        for (const Cd of Jd) {
          const dd = Wd && GL(Cd, this.plans.showsStarter(Cd.box.ctrl), (dd => kd(dp(Cd.box, dd)))),
            Jd = "reactor" === Cd.kind ? this.plans.layoutOf(Cd.box.ctrl) : null,
            Pd = Wd && !Cd.formed ? qL(Cd, kd, this.goal) : -1;
          Pd >= 0 && Nd.push([dp(Cd.box, Pd), iL(Cd.box, Pd)]);
          const Zd = zk(Cd.box);
          for (let Nd = 0; Nd < Zd; Nd++) {
            const Zd = dp(Cd.box, Nd),
              gd = kd(Zd),
              Kd = null === gd ? null : vL(Cd, Nd, gd, dd, Wd, Jd);
            if (null !== Kd) {
              const dd = "wrong" !== Kd && sL(Cd.box, Nd, Pd),
                Jd = dd ? `${Kd}Dim` : Kd;
              let kd = pd.get(Jd);
              kd || (kd = {
                draw: {
                  ghost: Kd,
                  dim: dd
                },
                list: []
              }, pd.set(Jd, kd)), kd.list.push(Zd)
            }
          }
        }
        if (Wd && this.startsBattery && this.goal) {
          const [dd, Jd, Nd] = this.goal, Wd = [];
          for (const [pd, Pd, Zd] of mL) {
            const gd = [dd + pd, Jd + Pd, Nd + Zd];
            "Air" === kd(gd) && Wd.push(gd)
          }
          if (Wd.length > 0) {
            var Pd;
            const dd = null !== (Pd = pd.get("cell")) && void 0 !== Pd ? Pd : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            dd.list.push(...Wd), pd.set("cell", dd)
          }
        }
        const Zd = [...pd.keys()].sort(),
          gd = [...Zd.map((dd => `${dd}:${pd.get(dd).list.join(";")}`)), `cue:${Nd.join(";")}`].join("|");
        if (gd !== this.shownKey) {
          this.shownKey = gd, this.clearMeshes(dd);
          for (const Jd of Zd) {
            const {
              draw: kd,
              list: Nd
            } = pd.get(Jd);
            this.meshes.push(this.build(dd, kd, Nd))
          }
          for (const [Jd, kd] of Nd) this.cues.push(RL(dd, jL(Jd, kd), bL))
        }
      }
      build(dd, Jd, kd) {
        let {
          ghost: pd,
          dim: Nd
        } = Jd;
        const {
          size: Wd,
          colour: Pd,
          alpha: Zd
        } = FL[pd], gd = kd[0], Cd = [], Kd = [];
        for (const [od, ld, Qd] of kd) eL(Cd, Kd, [od - gd[0] + .5, ld - gd[1] + .5, Qd - gd[2] + .5], [Wd, Wd, Wd]);
        return dd.createGameMesh({
          positions: Cd,
          indices: Kd
        }, {
          rgb: Pd,
          alpha: Zd * (Nd ? .3 : 1)
        }, gd)
      }
      clearMeshes(dd) {
        for (const Jd of [...this.meshes, ...this.cues]) dd.disposeGameMesh(Jd);
        this.meshes = [], this.cues = []
      }
    }
    const TL = [.56, .83, 1],
      EL = [1, .3, .25];
    class cL {
      constructor(dd) {
        this.plans = dd, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(dd, Jd, kd) {
        var pd;
        const Nd = performance.now();
        if (Nd - this.lastCheckMs < 150) return;
        this.lastCheckMs = Nd;
        const Wd = Jd => XL(dd, Jd),
          Pd = null === (pd = dd.Pkd(Jd)) || void 0 === pd ? void 0 : pd.name,
          Zd = Pd && "Reactor Frame" === Sk(Pd) ? dd.getTargetedBlock() : null,
          gd = Zd ? [Zd.fO[0], Zd.fO[1], Zd.fO[2]] : null,
          Cd = null !== gd && "Air" === Wd(gd) && gd.every(((dd, Jd) => Math.abs(dd + .5 - kd[Jd]) <= 8)) ? ML(gd, kd, Wd, (dd => this.inPlan(dd))) : null,
          Kd = Cd ? `${Cd.box.ctrl.join()}|${Cd.box.rot}|${Cd.fits}` : "";
        Kd !== this.shownKey && this.show(dd, Kd, Cd)
      }
      dispose(dd) {
        this.clear(dd), this.shownKey = ""
      }
      inPlan(dd) {
        return this.plans.all().some((Jd => Jp(Jd.box, dd) >= 0))
      }
      show(dd, Jd, kd) {
        if (this.clear(dd), this.shownKey = Jd, !kd) return;
        const {
          box: pd,
          fits: Nd
        } = kd, Wd = Nd ? TL : EL, {
          lo: Pd,
          hi: Zd
        } = jg(pd);
        this.meshes.push(RL(dd, Xg(Pd, Zd, .05), {
          rgb: Wd,
          alpha: 1
        }));
        const gd = [],
          Cd = dp(pd, 0)[1];
        for (let Kd = 0; Kd < pd.w * pd.d; Kd++) {
          const [dd, , Jd] = dp(pd, Kd);
          gd.push([
            [dd + .5, Cd + .02 + .01, Jd + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(RL(dd, gd, {
          rgb: Wd,
          alpha: .25
        }))
      }
      clear(dd) {
        for (const Jd of this.meshes) dd.disposeGameMesh(Jd);
        this.meshes = []
      }
    }
    const hL = "buildAFactory2Game:";

    function rL(dd, Jd, kd) {
      const pd = dd => {
          const [kd, pd, Nd] = dd.box.ctrl;
          return kd === Jd[0] && pd === Jd[1] && Nd === Jd[2]
        },
        Nd = dd.find((dd => pd(dd) || Jp(dd.box, Jd) >= 0));
      if (!Nd) return null;
      const Wd = function(dd, Jd, kd) {
        const {
          w: pd,
          h: Nd,
          d: Wd
        } = dd.box, Pd = "reactor" === dd.kind ? `${hL}rxTitle` : `${hL}batTitle`;
        if (dd.formed) return {
          key: `${hL}lookPlanFormed`,
          kindKey: Pd,
          w: pd,
          h: Nd,
          d: Wd,
          count: 0
        };
        let Zd = 0,
          gd = 0;
        for (let Kd = 0; Kd < zk(dd.box); Kd++) {
          const Jd = kd(dp(dd.box, Kd)),
            pd = null === Jd ? "ok" : Pp(dd.kind, kp(dd.box, Kd), Jd);
          Zd += "missing" === pd ? 1 : 0, gd += "wrong" === pd || "blocked" === pd ? 1 : 0
        }
        const Cd = function(dd, Jd, kd) {
          if (Jd < 0 || null === kd) return;
          const pd = kp(dd.box, Jd),
            Nd = Pp(dd.kind, pd, kd);
          return "blocked" === Nd ? `${hL}lookWhy_blocked` : "wrong" === Nd ? "ctrl" === pd ? `${hL}lookWhy_ctrl` : `${hL}lookWhy_reactor_${pd}` : void 0
        }(dd, Jp(dd.box, Jd), kd([Jd[0], Jd[1], Jd[2]]));
        if (Zd > 0) return {
          key: `${hL}lookPlanToBuild`,
          kindKey: Pd,
          w: pd,
          h: Nd,
          d: Wd,
          count: Zd,
          why: Cd
        };
        if (gd > 0) return {
          key: `${hL}lookPlanTakeOut`,
          kindKey: Pd,
          w: pd,
          h: Nd,
          d: Wd,
          count: gd,
          why: Cd
        };
        return {
          key: "reactor" === dd.kind ? `${hL}lookPlanNoRods` : `${hL}lookPlanDone`,
          kindKey: Pd,
          w: pd,
          h: Nd,
          d: Wd,
          count: 0
        }
      }(Nd, Jd, kd);
      return "reactor" === Nd.kind && pd(Nd) ? {
        ...Wd,
        ctrl: !0
      } : Wd
    }

    function uL(dd, Jd) {
      return dd === Jd || null !== dd && null !== Jd && dd.key === Jd.key && dd.kindKey === Jd.kindKey && dd.w === Jd.w && dd.h === Jd.h && dd.d === Jd.d && dd.count === Jd.count && dd.why === Jd.why && dd.ctrl === Jd.ctrl
    }

    function tL() {
      return performance.now()
    }
    class VL {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tL;
        this.ticket = dd, this.sent = Jd, this.backstopMs = kd, this.now = pd, this.queuedAt = void 0, this.queuedAt = pd()
      }
      answered() {
        const dd = this.now(),
          Jd = this.sent.leftAt(this.ticket);
        return null !== Jd && dd - Jd > 4e3 || dd - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class zL {
      constructor() {
        this.echoes = []
      }
      add(dd) {
        this.echoes = this.echoes.filter((dd => !dd.answered())), this.echoes.push(dd)
      }
      answered() {
        var dd, Jd;
        return null === (dd = null === (Jd = this.echoes.at(-1)) || void 0 === Jd ? void 0 : Jd.answered()) || void 0 === dd || dd
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((dd => dd.answered()))
      }
      age() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.echoes.at(-1)) || void 0 === Jd ? void 0 : Jd.age()) && void 0 !== dd ? dd : null
      }
      clear() {
        this.echoes = []
      }
    }
    class HL {
      constructor(dd) {
        this.send = dd, this.value = null, this.sent = null, this.echoes = new zL, this.down = !1, this.timer = null
      }
      shown(dd) {
        return null === this.value ? dd : this.down || this.value !== this.sent ? this.value : dd === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), dd) : this.value
      }
      pendingFor(dd) {
        return null !== this.value && this.value === this.sent && dd !== this.value ? this.echoes.age() : null
      }
      assume(dd, Jd) {
        this.disarm(), this.down = !1, this.value = dd, this.sent = dd, this.echoes.clear(), this.echoes.add(Jd)
      }
      press() {
        this.down = !0
      }
      drag(dd) {
        this.value = dd, this.arm(this.down ? 1e3 : 400)
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
      arm(dd) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), dd)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class wL {
      constructor() {
        this.pending = new Map
      }
      set(dd, Jd, kd) {
        var pd;
        const Nd = null !== (pd = this.pending.get(dd)) && void 0 !== pd ? pd : {
          on: Jd,
          echoes: new zL
        };
        Nd.on = Jd, Nd.echoes.add(kd), this.pending.set(dd, Nd)
      }
      shown(dd) {
        let Jd = dd;
        for (const [kd, {
            on: pd,
            echoes: Nd
          }] of this.pending) 0 !== (dd & kd) === pd && Nd.agreeCounts() || Nd.answered() ? this.pending.delete(kd) : Jd = pd ? Jd | kd : Jd & ~kd;
        return Jd
      }
      pendingMask() {
        let dd = 0;
        for (const Jd of this.pending.keys()) dd |= Jd;
        return dd
      }
      pendingFor(dd) {
        let Jd = null;
        for (const [pd, {
            on: Nd,
            echoes: Wd
          }] of this.pending) {
          if (void 0 !== dd && 0 !== (dd & pd) === Nd) continue;
          const Pd = Wd.age();
          var kd;
          if (null !== Pd) Jd = Math.max(null !== (kd = Jd) && void 0 !== kd ? kd : 0, Pd)
        }
        return Jd
      }
      clear() {
        this.pending.clear()
      }
    }
    class AL {
      constructor() {
        this.dims = null, this.echoes = new zL, this.unmet = null
      }
      shown(dd) {
        var Jd;
        return this.dims && (dO(this.dims, dd) && this.echoes.agreeCounts() || this.echoes.answered()) && (dO(this.dims, dd) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Jd = this.dims) && void 0 !== Jd ? Jd : dd
      }
      takeUnmet() {
        const dd = this.unmet;
        return this.unmet = null, dd
      }
      set(dd, Jd) {
        this.dims = dd, this.echoes.add(Jd)
      }
      pendingFor(dd) {
        return null === this.dims || dd && dO(this.dims, dd) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function dO(dd, Jd) {
      return dd[0] === Jd[0] && dd[1] === Jd[1] && dd[2] === Jd[2]
    }
    class JO {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tL;
        this.now = dd, this.taps = new Map
      }
      tap(dd, Jd, kd) {
        return !this.busy(dd) && (this.taps.set(dd, {
          at: this.now(),
          done: Jd
        }), kd(), !0)
      }
      settle(dd) {
        for (const [Jd, kd] of [...this.taps]) kd.done(dd) && this.taps.delete(Jd)
      }
      busy(dd) {
        const Jd = this.taps.get(dd);
        return !!Jd && (!(this.now() - Jd.at >= 3e3) || (this.taps.delete(dd), !1))
      }
      busyIds() {
        const dd = new Set;
        for (const Jd of [...this.taps.keys()]) this.busy(Jd) && dd.add(Jd);
        return dd
      }
      clear() {
        this.taps.clear()
      }
    }

    function kO(dd) {
      return {
        send: Jd => dd.track(Jd),
        sendUrgent: (Jd, kd) => dd.track(Jd, {
          urgent: !0,
          supersedes: kd
        }),
        leftAt: Jd => dd.leftAt(Jd),
        holdReserve: () => dd.holdUrgentReserve(),
        answerMs: fP
      }
    }

    function pO() {
      return performance.now()
    }

    function NO(dd) {
      const Jd = dd.baf2RxNeed.map((dd => {
        let [Jd, kd] = dd;
        return [Jd, kd]
      }));
      return JSON.stringify([dd.baf2RxFormed, Jd, dd.baf2RxBad, dd.baf2RxCells])
    }

    function WO(dd, Jd) {
      const kd = 0 !== (Jd & QJ),
        pd = 0 !== (dd.baf2RxFlags & QJ);
      return !kd || pd || "running" !== dd.baf2RxState && "idle" !== dd.baf2RxState ? !kd && pd && "scram" === dd.baf2RxState && dd.baf2RxFuel > 0 ? "idle" : dd.baf2RxState : "scram"
    }

    function PO(dd) {
      return JSON.stringify([dd.baf2BatFormed, dd.baf2BatNeed, dd.baf2BatBad])
    }

    function ZO(dd) {
      return dd.join(",")
    }
    class gO {
      constructor() {
        this.listeners = new Set
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class CO {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(dd, Jd) {
        this.lastAt = dd, this.lastUntil = dd + Jd
      }
      answered(dd) {
        return this.lastAt >= dd || dd < this.lastUntil
      }
    }
    class KO {
      constructor(dd, Jd) {
        this.link = dd, this.now = Jd, this.hold = new AL, this.picked = null, this.notTaken = null
      }
      shown(dd) {
        const Jd = this.hold.shown(dd);
        if (this.hold.takeUnmet() && this.picked) {
          var kd;
          const {
            plans: Jd,
            ctrl: pd,
            at: Nd
          } = this.picked;
          this.picked = null, Jd.unpredict(pd), null === (kd = this.notTaken) || void 0 === kd || kd.call(this, dd, Nd)
        }
        return Jd
      }
      pendingFor(dd) {
        return this.hold.pendingFor(dd)
      }
      Tl(dd, Jd, kd) {
        dd.predictSize(Jd, kd), this.picked = {
          plans: dd,
          ctrl: Jd,
          at: this.now()
        };
        const pd = this.link.send(lJ(Jd, "plan", ...kd));
        this.hold.set(kd, new VL(pd, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class oO {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pO;
        this.plans = dd, this.readInterior = Jd, this.link = kd, this.now = pd, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new wL, this.throttle = void 0, this.oneShots = void 0, this.listeners = new gO, this.redraw = null, this.releaseReserve = null, this.size = new KO(kd, pd), this.oneShots = new JO(pd), this.throttle = new HL((dd => this.echo(this.link.send(this.command("throttle", dd)))))
      }
      set(dd) {
        !dd.baf2RxOpen && this.raw && ZO(this.raw.baf2RxAt) === ZO(dd.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(dd), this.nO(dd)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(dd) {
        this.size.notTaken = dd
      }
      resize(dd) {
        this.raw && (this.size.Tl(this.plans, this.raw.baf2RxAt, dd), this.nO(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const dd = this.raw.baf2RxAt;
        this.plans.setStarter(dd, !this.plans.showsStarter(dd)), this.nO(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.nO(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.nO(this.raw)
      }
      send(dd) {
        if (this.raw) {
          for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
          this.link.send(this.command(dd, ...kd))
        }
      }
      tap(dd, Jd) {
        this.raw && this.oneShots.tap(dd, function(dd, Jd) {
          if ("start" === dd) return dd => 0 === (dd.baf2RxFlags & QJ);
          if ("odConfirm" === dd) return dd => 0 !== (dd.baf2RxFlags & LJ);
          const kd = NO(Jd);
          return dd => NO(dd) !== kd
        }(dd, this.raw), Jd) && ("start" === dd && (this.startedAt = this.now()), this.nO(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(QJ, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(dd, Jd) {
        if (!this.raw) return;
        const kd = dd === QJ ? this.command(Jd ? "scram" : "start") : this.command("od", Jd ? 1 : 0),
          pd = Jd && dd === QJ,
          Nd = `${oJ} ${this.raw.baf2RxAt.join(" ")} `,
          Wd = this.echo(pd ? this.link.sendUrgent(kd, (dd => {
            const Jd = dd.startsWith(Nd) ? dd.slice(Nd.length).split(" ")[0] : null;
            return "throttle" === Jd || "start" === Jd
          })) : this.link.send(kd));
        this.flags.set(dd, Jd, Wd), pd && this.throttle.assume(0, Wd), this.nO(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(dd) {
        this.throttle.drag(dd), this.raw && this.nO(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.nO(this.raw)
      }
      subscribe(dd) {
        return this.listeners.subscribe(dd)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var dd;
        this.throttle.release(), null === (dd = this.releaseReserve) || void 0 === dd || dd.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(dd) {
        for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
        return lJ(this.raw.baf2RxAt, dd, ...kd)
      }
      echo(dd) {
        return new VL(dd, this.link, this.link.answerMs, this.now)
      }
      nO(dd) {
        var Jd;
        this.raw = dd;
        const kd = this.flags.shown(dd.baf2RxFlags),
          pd = {
            ...dd,
            baf2RxFlags: kd,
            baf2RxTarget: this.throttle.shown(dd.baf2RxTarget),
            baf2RxState: WO(dd, kd)
          },
          Nd = this.size.shown(pd.baf2RxDims),
          Wd = this.throttle.pendingFor(),
          Pd = [this.throttle.pendingFor(dd.baf2RxTarget), this.flags.pendingFor(dd.baf2RxFlags), this.size.pendingFor(dd.baf2RxDims)].filter((dd => null !== dd)),
          Zd = Pd.length > 0 ? Math.max(...Pd) : null,
          gd = this.oneShots.busyIds(),
          Cd = pd.baf2RxAt;
        let Kd, od, ld = null,
          Qd = [Math.max(0, Nd[0] - 2), Math.max(0, Nd[1] - 2), Math.max(0, Nd[2] - 2)];
        if (pd.baf2RxFormed) {
          const [dd, Jd, kd] = pd.baf2RxDims;
          Qd = [Math.max(0, dd - 2), Math.max(0, Jd - 2), Math.max(0, kd - 2)], Kd = Array.from(pd.baf2RxCells, Number), od = `${Qd.join(",")}:${pd.baf2RxCells}`
        } else {
          var Ld;
          const dd = null === (Ld = this.plans.planAt(Cd)) || void 0 === Ld ? void 0 : Ld.box,
            Jd = dd ? uk(dd, "reactor", ...Nd) : hk(Cd, 1, ...Nd, rk("reactor", Nd[0])),
            kd = this.readInterior(Jd);
          ld = kg(Qd, kd), Kd = kd, od = `${Qd.join(",")}:${kd.join("")}`
        }(null === (Jd = this.looksOf) || void 0 === Jd ? void 0 : Jd.key) !== od && (this.looksOf = {
          key: od,
          looks: gg(Qd, Kd)
        }), this.view = {
          status: pd,
          dims: Nd,
          plan: ld,
          inner: Qd,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Cd),
          odConfirmed: this.odConfirmed || 0 !== (pd.baf2RxFlags & vJ),
          guide: this.plans.guideOn(),
          throttlePending: null !== Wd,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== Zd && Zd >= 5e3,
          busy: gd,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== Zd || gd.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.nO(this.raw)
        }), 250))
      }
    }
    class lO {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pO;
        this.plans = dd, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new gO, this.redraw = null, this.size = new KO(Jd, kd), this.oneShots = new JO(kd)
      }
      set(dd) {
        !dd.baf2BatOpen && this.view && ZO(this.view.status.baf2BatAt) === ZO(dd.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(dd), this.nO(dd)
      }
      tap(dd, Jd) {
        if (!this.view) return;
        const kd = PO(this.view.status);
        this.oneShots.tap(dd, (dd => PO(dd) !== kd), Jd) && this.nO(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(dd) {
        this.size.notTaken = dd
      }
      resize(dd) {
        this.view && (this.size.Tl(this.plans, this.view.status.baf2BatAt, dd), this.nO(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.nO(this.view.status)
      }
      subscribe(dd) {
        return this.listeners.subscribe(dd)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      nO(dd) {
        const Jd = this.size.shown(dd.baf2BatDims),
          kd = this.oneShots.busyIds();
        this.view = {
          status: dd,
          dims: Jd,
          oo: qg(Jd, dd.baf2BatDims) ? dd.baf2BatCapacity : og(...Jd),
          guide: this.plans.guideOn(),
          busy: kd
        }, this.listeners.notify(), kd.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.nO(this.view.status)
        }), 250))
      }
    }
    const QO = "buildAFactory2Game:";

    function LO() {
      var dd;
      const Jd = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!Jd) return null;
      const kd = Jd.querySelector(".ExitButton");
      return function(dd, Jd) {
        const kd = Jd ? Jd.left - 8 : dd.right;
        return {
          left: dd.left,
          top: dd.top,
          width: Math.max(0, kd - dd.left),
          height: dd.height
        }
      }(Jd.getBoundingClientRect(), null !== (dd = null === kd || void 0 === kd ? void 0 : kd.getBoundingClientRect()) && void 0 !== dd ? dd : null)
    }
    const OO = (0, pd.memo)((function(dd) {
      let {
        store: Jd
      } = dd;
      const {
        t: kd
      } = (0, YN.B)(), [Nd, Wd] = (0, pd.useState)((() => Jd.get())), [Pd, Zd] = (0, pd.useState)((() => performance.now()));
      (0, pd.useEffect)((() => (Wd(Jd.get()), Jd.subscribe((() => {
        Wd(Jd.get()), Zd(performance.now())
      })))), [Jd]);
      const {
        alarm: gd,
        boomAt: Cd
      } = Nd, Kd = null !== gd && null !== gd.secs, [od, ld] = (0, pd.useState)(null);
      (0, pd.useEffect)((() => {
        if (!Kd) return;
        ld(LO());
        const dd = setInterval((() => {
          Zd(performance.now()), ld(LO())
        }), 250);
        return () => {
          clearInterval(dd)
        }
      }), [Kd]);
      const [Qd, Ld] = (0, pd.useState)(!1);
      return (0, pd.useEffect)((() => {
        if (Cd === -1 / 0) return;
        Ld(!0);
        const dd = setTimeout((() => {
          Ld(!1)
        }), 1300);
        return () => {
          clearTimeout(dd)
        }
      }), [Cd]), (0, MW.jsxs)(MW.Fragment, {
        children: [null !== gd && (0, MW.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: kd(gd.hot ? `${QO}rxAlarmSiren` : `${QO}rxAlarmDamaged`, {
            amount: String(gd.damage)
          })
        }), null !== gd && null !== gd.secs && (0, MW.jsx)("div", {
          className: od ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== od && void 0 !== od ? od : void 0,
          "aria-live": "assertive",
          children: kd(`${QO}rxAlarmCountdown`, {
            amount: String((Od = gd.secs, ed = Pd - gd.receivedAt, Math.max(1, Math.ceil(Od - ed / 1e3))))
          })
        }), Qd && (0, MW.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Od, ed
    }));
    class eO {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      JG(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const kd = dd.baf2RxAlarmAt.join(",");
        let pd = this.snapshot.boomAt;
        if (dd.baf2RxAlarmBoom) this.byReactor.delete(kd), pd = Jd;
        else if (dd.baf2RxAlarmDamage <= 0) this.byReactor.delete(kd);
        else {
          var Nd;
          this.byReactor.set(kd, {
            damage: dd.baf2RxAlarmDamage,
            secs: null !== (Nd = dd.baf2RxAlarmSecs) && void 0 !== Nd ? Nd : null,
            hot: !0 === dd.baf2RxAlarmHot,
            receivedAt: Jd
          })
        }
        this.nO(pd)
      }
      retain(dd) {
        let Jd = !1;
        for (const kd of [...this.byReactor.keys()]) dd.has(kd) || (this.byReactor.delete(kd), Jd = !0);
        Jd && this.nO(this.snapshot.boomAt)
      }
      has(dd) {
        return this.byReactor.has(dd)
      }
      get() {
        return this.snapshot
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      nO(dd) {
        let Jd = null;
        for (const kd of this.byReactor.values())(!Jd || kd.damage > Jd.damage) && (Jd = kd);
        this.snapshot = {
          alarm: Jd,
          boomAt: dd
        };
        for (const kd of this.listeners) kd()
      }
    }
    const RO = {
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

    function IO(dd) {
      return [dd[0], dd[1], dd[2]]
    }

    function GO(dd) {
      return `${dd[0]},${dd[1]},${dd[2]}`
    }
    class vO {
      constructor(dd) {
        if (this.plans = dd, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var dd;
            return {
              active: this.glows.flatMap((dd => {
                let {
                  record: Jd
                } = dd;
                return Jd ? [Jd] : []
              })),
              log: [...null !== (dd = this.devLog) && void 0 !== dd ? dd : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var dd;
        return null !== (dd = this.devLog) && void 0 !== dd ? dd : []
      }
      check(dd, Jd, kd) {
        const pd = new Set(Jd.map((dd => GO(dd.box.ctrl))));
        for (const Pd of function(dd, Jd) {
            const kd = [],
              pd = new Map(dd);
            dd.clear();
            for (const Nd of Jd) {
              const Jd = oL(Nd.box.ctrl),
                Wd = Nd.formed ? Nd.level : 0;
              dd.set(Jd, Wd), Wd > 0 && 0 === pd.get(Jd) && kd.push(Nd)
            }
            return kd
          }(this.levels, this.plans.all())) pd.has(GO(Pd.box.ctrl)) && this.show(dd, Pd, "on", kd);
        const Nd = this.plans.lastFormed();
        if (null === Nd || Nd.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Nd.receivedAt;
        const Wd = function(dd, Jd) {
          var kd;
          const pd = oL(dd);
          return null !== (kd = Jd.find((dd => oL(dd.box.ctrl) === pd))) && void 0 !== kd ? kd : null
        }(Nd.ctrl, Jd);
        return Wd && this.show(dd, Wd, "formed", kd), Wd
      }
      fade(dd, Jd) {
        0 !== this.glows.length && (this.glows = this.glows.filter((kd => {
          let {
            mesh: pd,
            glow: Nd,
            startMs: Wd,
            record: Pd
          } = kd;
          const Zd = (Jd - Wd) / RO[Nd].ms;
          return Zd >= 1 ? (dd.disposeGameMesh(pd), Pd && (Pd.endMs = Jd), !1) : (dd.setGameMesh(pd, {
            visibility: "formed" === Nd ? 1 - Zd : Math.sin(Math.PI * Zd)
          }), !0)
        })))
      }
      dispose(dd) {
        for (const {
            mesh: kd
          }
          of this.glows) dd.disposeGameMesh(kd);
        this.glows = [], this.levels.clear();
        const Jd = "undefined" !== typeof window ? window : null;
        (null === Jd || void 0 === Jd ? void 0 : Jd.baf2Glows) === this.devAccessor && delete Jd.baf2Glows
      }
      show(dd, Jd, kd, pd) {
        const {
          lo: Nd,
          hi: Wd
        } = jg(Jd.box);
        let Pd = null;
        this.devLog && (Pd = {
          glow: kd,
          ctrl: IO(Jd.box.ctrl),
          lo: IO(Nd),
          hi: IO(Wd),
          startMs: pd,
          endMs: null
        }, this.devLog.push(Pd), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(dd, kd, Xg(Nd, Wd, RO[kd].thick)),
          glow: kd,
          startMs: pd,
          record: Pd
        })
      }
      build(dd, Jd, kd) {
        const pd = RL(dd, kd, {
          rgb: RO[Jd].colour,
          alpha: 1
        });
        return dd.setGameMesh(pd, {
          visibility: 0
        }), pd
      }
    }
    const xO = 1 / .6,
      qO = {
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
        blendMode: nZ.d.Standard,
        soft: !0
      },
      BO = {
        ...qO,
        size: [.25, .4],
        count: 2
      };

    function sO(dd) {
      return {
        colours: [dd, dd],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: nZ.d.Add,
        soft: !1
      }
    }
    const iO = sO([150, 225, 255]),
      aO = sO([185, 145, 255]),
      MO = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function FO(dd) {
      const Jd = XJ[dd];
      return null === Jd.fuelSlot || Wk(Jd) ? MO.includes(dd) ? aO : iO : qO
    }
    const YO = {
        kind: "smokePuff"
      },
      mO = [.2, .025, .2];

    function bO(dd, Jd) {
      const [
        [kd, pd, Nd],
        [Wd, Pd, Zd]
      ] = dd.colours;
      return {
        texture: dd.soft ? YO : "square_particle",
        oo: Jd,
        minLifeTime: dd.life[0] / xO,
        maxLifeTime: dd.life[1] / xO,
        minEmitPower: dd.power[0] * xO,
        maxEmitPower: dd.power[1] * xO,
        minSize: dd.size[0],
        maxSize: dd.size[1],
        emitRate: 0,
        gravity: [0, dd.lift * xO * xO, 0],
        dir1: [-dd.spread, 1, -dd.spread],
        dir2: [dd.spread, 1, dd.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [kd, pd, Nd, dd.alpha],
          maxColor: [Wd, Pd, Zd, dd.alpha]
        }, {
          timeFraction: 1,
          minColor: [kd, pd, Nd, 0],
          maxColor: [Wd, Pd, Zd, 0]
        }],
        blendMode: dd.blendMode
      }
    }
    class SO {
      constructor(dd) {
        this.fixed = dd, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(dd, Jd, kd) {
        var pd;
        if (kd === this.lastFrame) return !1;
        this.lastFrame = kd;
        const Nd = this.at;
        Nd[0] = Jd[0] + .5, Nd[1] = Jd[1] + 1.025, Nd[2] = Jd[2] + .5;
        const Wd = null !== (pd = this.fixed) && void 0 !== pd ? pd : Zd() ? BO : qO;
        let Pd = this.particles.get(Wd);
        return Pd || (Pd = dd.createParticles(function(dd) {
          return bO(dd, Math.ceil(12 * dd.count * dd.life[1]) + dd.count)
        }(Wd), {
          pos: Nd,
          half: mO
        }), this.particles.set(Wd, Pd)), Pd.moveTo(Nd), Pd.emit(Wd.count), !0
      }
      dispose() {
        for (const dd of this.particles.values()) dd.stop();
        this.particles.clear()
      }
    }
    class jO {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(dd) {
        this.indexed = !0;
        for (const Jd of FJ) {
          const kd = FO(Jd);
          for (let pd = 1; pd <= 4; pd++) {
            const Nd = dd.blockNameToBlockId(`${Jd}|meta|rot${pd}|Running`, !0);
            if (null === Nd) continue;
            let Wd = this.pufferIndexByStyle.get(kd);
            void 0 === Wd && (Wd = this.pufferList.push(new SO(kd === qO ? null : kd)) - 1, this.pufferIndexByStyle.set(kd, Wd)), this.pufferIndexById[Nd] = Wd + 1
          }
        }
      }
      onAfterRender(dd, Jd) {
        this.indexed || this.index(dd);
        const kd = performance.now(),
          pd = 0 === this.lastMs ? 0 : Math.min(kd - this.lastMs, 250) / 1e3;
        this.lastMs = kd, this.frame++, dd.particlesEnabled() ? (this.scan(dd, Jd), this.puff(dd, pd)) : this.sources = []
      }
      dispose() {
        for (const dd of this.pufferList) dd.dispose();
        this.sources = [], this.found = []
      }
      scan(dd, Jd) {
        0 === this.scanRow && (this.origin = [Math.floor(Jd[0]) - 12, Math.floor(Jd[1]) - 6, Math.floor(Jd[2]) - 12]);
        const kd = Math.min(this.scanRow + 16, 325),
          [pd, Nd, Wd] = this.origin,
          Pd = this.hits;
        Pd.length = 0;
        for (let Zd = this.scanRow; Zd < kd; Zd++) {
          const Jd = pd + Zd % 25,
            kd = Nd + Math.floor(Zd / 25);
          dd.scanBlocks(Jd, kd, Wd, Jd + 1, kd + 1, Wd + 25, this.pufferIndexById, Pd)
        }
        for (let Zd = 0; Zd < Pd.length; Zd += 4) {
          const dd = Pd[Zd + 3];
          this.found.push({
            pos: [Pd[Zd], Pd[Zd + 1], Pd[Zd + 2]],
            NC: dd,
            puffer: this.pufferList[this.pufferIndexById[dd] - 1]
          })
        }
        this.scanRow = kd, 325 === kd && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(dd, Jd) {
        const kd = this.sources.length;
        if (0 !== kd) {
          this.budget = Math.min(this.budget + Math.min(kd / 1.2, 12) * Jd, 2);
          for (let Jd = 0; Jd < kd && this.budget >= 1; Jd++) {
            const Jd = this.sources[this.cursor % kd];
            this.cursor = (this.cursor + 1) % kd, dd.getBlockId(Jd.pos[0], Jd.pos[1], Jd.pos[2]) === Jd.NC && (Jd.puffer.puff(dd, Jd.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const XO = {
        ...sO([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      fO = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function nO(dd) {
      return 0 === dd.spots.length ? 0 : Math.min(1 * dd.level, 4)
    }

    function UO(dd) {
      return 0 === dd.glass.length ? 0 : Math.min(.75 * dd.level, 3)
    }

    function yO(dd) {
      return `${dd.ctrl.join(",")}:${dd.rot}:${dd.cu},${dd.cv}:${dd.w},${dd.h},${dd.d}`
    }

    function DO(dd, Jd) {
      const kd = Jd.w - 2,
        pd = Jd.h - 2,
        Nd = Jd.d - 2,
        Wd = [];
      for (let Pd = 0; Pd < kd * pd * Nd; Pd++) {
        const Zd = Pd % kd,
          gd = Math.floor(Pd / kd) % Nd,
          Cd = Math.floor(Pd / (kd * Nd));
        if (Zd > 0 && Zd < kd - 1 && gd > 0 && gd < Nd - 1 && Cd > 0 && Cd < pd - 1) continue;
        const Kd = dp(Jd, Np(Jd, Pd)),
          od = XL(dd, Kd);
        if (null !== od && "Fuel Rod" === Sk(od))
          for (const Jd of fO) {
            const kd = [Kd[0] + Jd[0], Kd[1] + Jd[1], Kd[2] + Jd[2]];
            EO(dd, kd) && Wd.push(cO(kd, Jd))
          }
      }
      return Wd
    }

    function TO(dd, Jd) {
      const {
        lo: kd,
        hi: pd
      } = jg(Jd), Nd = [];
      for (let Wd = kd[0]; Wd < pd[0]; Wd++)
        for (let Jd = kd[1]; Jd < pd[1]; Jd++) {
          const Pd = Wd === kd[0] || Wd === pd[0] - 1 || Jd === kd[1] || Jd === pd[1] - 1 ? 1 : Math.max(1, pd[2] - 1 - kd[2]);
          for (let Zd = kd[2]; Zd < pd[2]; Zd += Pd) {
            const Pd = [Wd, Jd, Zd];
            if (!EO(dd, Pd)) continue;
            const gd = Wd === kd[0] ? fO[1] : Wd === pd[0] - 1 ? fO[0] : Zd === kd[2] ? fO[5] : Zd === pd[2] - 1 ? fO[4] : Jd === kd[1] ? fO[3] : fO[2];
            Nd.push(cO(Pd, gd))
          }
        }
      return Nd
    }

    function EO(dd, Jd) {
      const kd = XL(dd, Jd);
      return null !== kd && "Reactor Glass" === Sk(kd)
    }

    function cO(dd, Jd) {
      return [
        [dd[0] + .5 + .55 * Jd[0], dd[1] + .5 + .55 * Jd[1], dd[2] + .5 + .55 * Jd[2]],
        [0 === Jd[0] ? .4 : .02, 0 === Jd[1] ? .4 : .02, 0 === Jd[2] ? .4 : .02]
      ]
    }
    class hO {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(dd, Jd, kd, pd) {
        const Nd = [],
          Wd = new Set;
        for (const Cd of Jd) {
          var Pd, Zd, gd;
          const {
            box: Jd
          } = Cd;
          if ("reactor" !== Cd.kind || Cd.level <= 0 || (Jd.ctrl[0] - kd[0]) ** 2 + (Jd.ctrl[1] - kd[1]) ** 2 + (Jd.ctrl[2] - kd[2]) ** 2 > 576) continue;
          const Kd = yO(Jd);
          Wd.add(Kd);
          let od = this.spots.get(Kd);
          if ((!od || pd - od.at > 3e3) && (od = {
              at: pd,
              spots: DO(dd, Jd),
              glass: TO(dd, Jd)
            }, this.spots.set(Kd, od)), 0 === od.spots.length && 0 === od.glass.length) continue;
          const ld = this.sparking.find((dd => dd.key === Kd));
          Nd.push({
            key: Kd,
            level: Cd.level,
            spots: od.spots,
            glass: od.glass,
            budget: null !== (Pd = null === ld || void 0 === ld ? void 0 : ld.budget) && void 0 !== Pd ? Pd : 0,
            cursor: null !== (Zd = null === ld || void 0 === ld ? void 0 : ld.cursor) && void 0 !== Zd ? Zd : 0,
            glassBudget: null !== (gd = null === ld || void 0 === ld ? void 0 : ld.glassBudget) && void 0 !== gd ? gd : 0
          })
        }
        for (const Cd of this.spots.keys()) Wd.has(Cd) || this.spots.delete(Cd);
        this.sparking = Nd
      }
      emit(dd, Jd, kd) {
        var pd;
        if (0 === this.sparking.length || !dd.particlesEnabled() || kd === this.lastFrame) return;
        this.lastFrame = kd;
        let Nd = 0,
          Wd = 0;
        for (const Ld of this.sparking) Nd += nO(Ld), Wd += UO(Ld);
        const Pd = Nd > 8 ? 8 / Nd : 1,
          Zd = Wd > 6 ? 6 / Wd : 1;
        let gd, Cd = null,
          Kd = null;
        for (const Ld of this.sparking) Ld.budget = Math.min(Ld.budget + nO(Ld) * Pd * Jd, 2), Ld.budget >= 1 && (!Cd || Ld.budget > Cd.budget) && (Cd = Ld), Ld.glassBudget = Math.min(Ld.glassBudget + UO(Ld) * Zd * Jd, 2), Ld.glassBudget >= 1 && (!Kd || Ld.glassBudget > Kd.glassBudget) && (Kd = Ld);
        if (Cd) Cd.budget--, gd = Cd.spots[Cd.cursor++ % Cd.spots.length];
        else {
          if (!Kd) return;
          Kd.glassBudget--, gd = Kd.glass[Math.floor(Math.random() * Kd.glass.length)]
        }
        const [od, ld] = gd, Qd = null !== (pd = this.emitter) && void 0 !== pd ? pd : this.create(dd, od, ld);
        Qd.moveTo(od, ld), Qd.emit(XO.count)
      }
      dispose() {
        var dd;
        null === (dd = this.emitter) || void 0 === dd || dd.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(dd, Jd, kd) {
        const pd = Math.ceil(14 * XO.count * XO.life[1]) + XO.count;
        return this.emitter = dd.createParticles(bO(XO, pd), {
          pos: Jd,
          half: kd
        }), this.emitter
      }
    }
    const rO = [2, 3.2],
      uO = 1 / 3,
      tO = 1 / .6,
      VO = {
        texture: YO,
        oo: Math.ceil(18 * rO[1]) + 4,
        minLifeTime: rO[0] / tO,
        maxLifeTime: rO[1] / tO,
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
        blendMode: nZ.d.Standard
      };
    class zO {
      constructor(dd) {
        this.plans = dd, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new hO, this.frame = 0, this.outline = new vO(dd)
      }
      onAfterRender(dd, Jd, kd) {
        const pd = performance.now(),
          Nd = 0 === this.lastMs ? 0 : Math.min(pd - this.lastMs, 250) / 1e3;
        if (this.lastMs = pd, this.outline.fade(dd, pd), this.puff(dd, Nd, kd), this.sparks.emit(dd, Nd, this.frame++), pd - this.lastCheckMs < 150) return;
        this.lastCheckMs = pd;
        const Wd = this.plans.all().filter((dd => dd.formed && HO(dd.box.ctrl, kd) <= 4096));
        this.plumes = Wd.filter((dd => "reactor" === dd.kind && dd.level > 0)).map((dd => ({
          box: dd.box,
          level: dd.level
        }))), this.updateHums(dd, Jd, Wd, kd), this.sparks.update(dd, Wd, kd, pd), this.chimeFormed(dd, Jd, Wd, pd)
      }
      dispose(dd) {
        var Jd;
        this.outline.dispose(dd), null === (Jd = this.steam) || void 0 === Jd || Jd.dispose(), this.steam = null, this.sparks.dispose();
        for (const kd of this.hums.values()) kd.stop();
        this.hums.clear()
      }
      chimeFormed(dd, Jd, kd, pd) {
        const Nd = this.outline.check(dd, kd, pd);
        Nd && dd.playSound(Jd, "exp_levelup", .6, 1, {
          Pk: [Nd.box.ctrl[0] + .5, Nd.box.ctrl[1], Nd.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(dd, Jd, kd) {
        const pd = this.plumes;
        if (0 === pd.length || !dd.particlesEnabled()) return void(this.plumeBudget = 0);
        const Nd = pd.reduce(((dd, Jd) => dd + 3 * Jd.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Nd * Jd, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Wd = this.plumeCursor % (Nd / 3);
        this.plumeCursor++;
        let Pd = pd[0];
        for (const od of pd) {
          if (Wd < od.level) {
            Pd = od;
            break
          }
          Wd -= od.level
        }
        const {
          lo: Zd,
          hi: gd
        } = jg(Pd.box);
        if (function(dd, Jd, kd) {
            const pd = Math.max(dd[0] - kd[0], 0, kd[0] - Jd[0]),
              Nd = Math.max(dd[2] - kd[2], 0, kd[2] - Jd[2]);
            return Math.hypot(pd, kd[1] - Jd[1], Nd)
          }(Zd, gd, kd) < 6 && Math.random() > uO) return;
        const Cd = [(Zd[0] + gd[0]) / 2, gd[1] + .05, (Zd[2] + gd[2]) / 2],
          Kd = [(gd[0] - Zd[0]) / 2 - .5, .05, (gd[2] - Zd[2]) / 2 - .5];
        this.steam ??= dd.createParticles(VO, {
          pos: Cd,
          half: Kd
        }), this.steam.moveTo(Cd, Kd), this.steam.emit(1)
      }
      updateHums(dd, Jd, kd, pd) {
        const Nd = new Map;
        for (const Pd of kd) "reactor" === Pd.kind && Pd.level > 0 && HO(Pd.box.ctrl, pd) <= 576 && Nd.set(`${Wd=Pd.box.ctrl,`${Wd[0]},${Wd[1]},${Wd[2]}`}:${Pd.level}`, Pd);
        var Wd;
        for (const [Pd, Zd] of this.hums) Nd.has(Pd) || (Zd.stop(), this.hums.delete(Pd));
        for (const [Pd, Zd] of Nd) {
          if (this.hums.has(Pd)) continue;
          const {
            lo: kd,
            hi: pd
          } = jg(Zd.box), Nd = [(kd[0] + pd[0]) / 2, kd[1], (kd[2] + pd[2]) / 2], Wd = dd.playSound(Jd, "rocketEngineLoop", .08 + .06 * Zd.level, .55, {
            Pk: Nd,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Wd && this.hums.set(Pd, Wd)
        }
      }
    }

    function HO(dd, Jd) {
      return (dd[0] - Jd[0]) ** 2 + (dd[1] - Jd[1]) ** 2 + (dd[2] - Jd[2]) ** 2
    }
    class wO {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      JG(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const pd = [dd.baf2BombAt[0], dd.baf2BombAt[1], dd.baf2BombAt[2]],
          Nd = dd.baf2BombR;
        if (dd.baf2BombBoom) {
          const dd = Math.hypot(Jd[0] - pd[0], Jd[1] - pd[1], Jd[2] - pd[2]);
          this.nO({
            fuse: null,
            blast: {
              at: pd,
              r: Nd,
              receivedAt: kd,
              distance: dd,
              flash: dd <= 3 * Nd
            }
          })
        } else this.nO({
          ...this.snapshot,
          fuse: dd.baf2BombMs > 0 ? {
            at: pd,
            r: Nd,
            endsAt: kd + dd.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      nO(dd) {
        this.snapshot = dd;
        for (const Jd of this.listeners) Jd()
      }
    }
    const AO = (0, pd.memo)((function(dd) {
      var Jd;
      let {
        store: kd
      } = dd;
      const {
        t: Nd
      } = (0, YN.B)(), [Wd, Pd] = (0, pd.useState)((() => kd.get())), [Zd, gd] = (0, pd.useState)((() => performance.now()));
      (0, pd.useEffect)((() => (Pd(kd.get()), kd.subscribe((() => {
        Pd(kd.get()), gd(performance.now())
      })))), [kd]);
      const {
        fuse: Cd,
        blast: Kd
      } = Wd;
      (0, pd.useEffect)((() => {
        if (!Cd) return;
        const dd = setInterval((() => {
          gd(performance.now())
        }), 250);
        return () => {
          clearInterval(dd)
        }
      }), [Cd]);
      const [od, ld] = (0, pd.useState)(!1);
      (0, pd.useEffect)((() => {
        if (null === Kd || void 0 === Kd || !Kd.flash) return;
        ld(!0);
        const dd = setTimeout((() => {
          ld(!1)
        }), 2500);
        return () => {
          clearTimeout(dd)
        }
      }), [Kd]);
      const Qd = Cd ? function(dd, Jd) {
        return dd.endsAt <= Jd ? 0 : Math.ceil((dd.endsAt - Jd) / 1e3)
      }(Cd, Zd) : 0;
      return (0, MW.jsxs)(MW.Fragment, {
        children: [Qd > 0 && (0, MW.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Nd("buildAFactory2Game:bombCountdown", {
            amount: String(Qd),
            radius: String(null !== (Jd = null === Cd || void 0 === Cd ? void 0 : Cd.r) && void 0 !== Jd ? Jd : 0)
          })
        }), od && (0, MW.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function de(dd) {
      const Jd = Math.min(4, Math.max(1, dd / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * dd / 4)),
        capSpread: Math.min(5 * dd / 8, 24 * Jd),
        capThick: 6 * Jd,
        stemHalfWidth: 3 * Jd,
        puffScale: Jd
      }
    }
    class Je {
      constructor() {
        this.EC = !1
      }
      hold(dd) {
        dd.getCameraFar() < 1e3 && (dd.setCameraFar(1e3), this.EC = !0)
      }
      release(dd) {
        this.EC && (this.EC = !1, dd.setCameraFar(null))
      }
    }
    const ke = 1 / .6,
      pe = [.2, .1, .2],
      Ne = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      We = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: nZ.d.Standard,
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
      Pe = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: nZ.d.Standard,
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
      Ze = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: nZ.d.Standard,
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
      ge = {
        texture: YO,
        oo: Math.ceil(120) + 4,
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
        blendMode: nZ.d.Add
      };
    class Ce {
      constructor(dd) {
        this.store = dd, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Je, this.timers = []
      }
      onAfterRender(dd, Jd) {
        const kd = performance.now(),
          pd = 0 === this.lastMs ? 0 : Math.min(kd - this.lastMs, 250) / 1e3;
        this.lastMs = kd;
        const {
          fuse: Nd,
          blast: Wd
        } = this.store.get();
        null !== Wd && Wd !== this.shownBlast && (this.shownBlast = Wd, this.startBlast(dd, Jd, Wd, kd));
        const Pd = dd.particlesEnabled();
        null !== Nd && Nd.endsAt > kd && Pd ? this.emitBeacon(dd, Nd, pd, kd) : this.beaconBudget = 0, null !== this.cloud && (kd - this.cloud.startMs > 33e3 ? this.disposeCloud(dd) : (this.far.hold(dd), Pd && this.emitCloud(dd, pd, kd)))
      }
      dispose(dd) {
        var Jd;
        null === (Jd = this.beacon) || void 0 === Jd || Jd.dispose(), this.beacon = null, this.disposeCloud(dd);
        for (const kd of this.timers) clearTimeout(kd);
        this.timers.length = 0
      }
      emitBeacon(dd, Jd, kd, pd) {
        const Nd = Jd.endsAt - pd < 5e3 ? 350 : 1e3,
          Wd = .5 + .5 * Math.sin(2 * Math.PI * pd / Nd);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Wd * kd, 4), this.beaconBudget < 1) return;
        const Pd = Math.floor(this.beaconBudget);
        this.beaconBudget -= Pd;
        const [Zd, gd, Cd] = Jd.at, Kd = [Zd + .5, gd + 1.1, Cd + .5];
        this.beacon ??= dd.createParticles(ge, {
          pos: Kd,
          half: pe
        }), this.beacon.moveTo(Kd), this.beacon.emit(Pd)
      }
      startBlast(dd, Jd, kd, pd) {
        var Nd;
        null === (Nd = this.beacon) || void 0 === Nd || Nd.dispose(), this.beacon = null, this.disposeCloud(dd);
        const Wd = (0, XZ.isMobile)() ? .5 : 1;
        this.streams = [We, Pe, Ze].map((dd => {
          const Jd = Math.round(dd.count * Wd);
          return {
            spec: dd,
            particles: null,
            rate: Jd / ((dd.toMs - dd.fromMs) / 1e3),
            budget: 0,
            left: Jd
          }
        })), this.cloud = {
          blast: kd,
          startMs: pd
        };
        const Pd = Math.max(.25, 1 - kd.distance / (6 * kd.r)),
          Zd = kd.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [kd, pd, Nd] of Ne) oe(dd, Jd, kd, Pd * pd, Nd)
        }), Zd))
      }
      emitCloud(dd, Jd, kd) {
        const {
          blast: pd,
          startMs: Nd
        } = this.cloud, Wd = kd - Nd, [Pd, Zd, gd] = pd.at, Cd = de(pd.r);
        for (const Kd of this.streams) {
          const {
            spec: kd
          } = Kd;
          if (Kd.left <= 0 || Wd < kd.fromMs) continue;
          Kd.budget += Kd.rate * Jd;
          const Nd = Math.min(Math.floor(Kd.budget), Kd.left);
          if (Nd < 1) continue;
          Kd.budget -= Nd, Kd.left -= Nd;
          const od = Kd.particles ??= this.createStream(dd, kd, pd);
          if (kd === We) {
            const dd = Cd.stemHalfWidth;
            od.moveTo([Pd, Zd + 1, gd], [dd, 1, dd])
          } else if (kd === Pe) {
            const dd = Cd.capSpread * Math.min(1, (Wd - kd.fromMs) / 3e3),
              Jd = Math.sqrt(Math.random()),
              pd = 2 * Math.random() * Math.PI,
              Nd = Math.cos(pd) * Jd,
              Kd = Math.sin(pd) * Jd,
              ld = Pd + Nd * dd,
              Qd = gd + Kd * dd,
              Ld = Cd.capThick,
              Od = Zd + Cd.capHeight + Ld * (1 - Jd * Jd) * 2;
            od.setDirections([.7 * Nd, .05, .7 * Kd], [Nd, .2, Kd]), od.moveTo([ld, Od, Qd], [Ld, Ld, Ld])
          } else {
            this.ringAngle += 2.39996;
            const dd = Math.cos(this.ringAngle),
              Jd = Math.sin(this.ringAngle);
            od.setDirections([dd, .05, Jd], [dd, .1, Jd]), od.moveTo([Pd + 2 * dd, Zd + .5, gd + 2 * Jd], [0, .5, 0])
          }
          od.emit(Nd)
        }
      }
      createStream(dd, Jd, kd) {
        const {
          r: pd
        } = kd, Nd = Math.max(Jd.life[0], pd / 25), Wd = Jd === Ze ? [.9 * Nd, Nd] : Jd.life, Pd = de(pd), Zd = Jd === Ze ? 1 : Pd.puffScale, gd = {
          texture: YO,
          oo: Jd.count + 4,
          minLifeTime: Wd[0] / ke,
          maxLifeTime: Wd[1] / ke,
          minSize: Jd.size[0] * Zd,
          maxSize: Jd.size[1] * Zd,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, Jd.gravity * ke * ke, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: Jd.from[0],
            maxColor: Jd.from[1]
          }, {
            timeFraction: .6,
            minColor: Ke(Jd.from[0], Jd.to[0]),
            maxColor: Ke(Jd.from[1], Jd.to[1])
          }, {
            timeFraction: 1,
            minColor: Jd.to[0],
            maxColor: Jd.to[1]
          }],
          blendMode: Jd.blend
        };
        if (Jd === We) {
          const dd = Pd.capHeight / ((Wd[0] + Wd[1]) / 2);
          gd.minEmitPower = .9 * dd * ke, gd.maxEmitPower = 1.05 * dd * ke, gd.dir1 = [-.1, 1, -.1], gd.dir2 = [.1, 1, .1]
        } else Jd === Pe ? (gd.minEmitPower = 1.2, gd.maxEmitPower = 2, gd.dir1 = [-1, .05, -1], gd.dir2 = [1, .2, 1]) : (gd.minEmitPower = 39.583333333333336, gd.maxEmitPower = 41.66666666666667, gd.dir1 = [1, 0, 0], gd.dir2 = [1, 0, 0]);
        return dd.createParticles(gd, {
          pos: kd.at
        })
      }
      disposeCloud(dd) {
        for (const kd of this.streams) {
          var Jd;
          null === (Jd = kd.particles) || void 0 === Jd || Jd.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(dd)
      }
    }

    function Ke(dd, Jd) {
      return [(dd[0] + Jd[0]) / 2, (dd[1] + Jd[1]) / 2, (dd[2] + Jd[2]) / 2, .75 * dd[3]]
    }

    function oe(dd, Jd, kd, pd, Nd) {
      try {
        dd.playSound(Jd, kd, pd, Nd)
      } catch (Wd) {
        console.error(Wd)
      }
    }
    const le = {
        oo: 720,
        perS: 100
      },
      Qe = {
        oo: 320,
        perS: 44
      };
    class Le {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(dd, Jd) {
        this.zone = {
          centre: [...dd.centre],
          r: dd.r,
          band: dd.band ? [dd.band[0], dd.band[1]] : void 0
        }, this.endsAt = Jd
      }
      stop() {
        this.zone = null
      }
      JG(dd, Jd) {
        const {
          baf2FalloutMs: kd,
          baf2FalloutAt: pd,
          baf2FalloutR: Nd,
          baf2FalloutY: Wd
        } = dd;
        kd > 0 && pd && void 0 !== Nd ? this.start({
          centre: pd,
          r: Nd,
          band: Wd
        }, Jd + kd) : this.stop()
      }
      perS(dd, Jd, kd) {
        const pd = this.zone;
        if (!pd) return 0;
        const Nd = this.endsAt - dd;
        return Nd <= 0 ? (this.zone = null, 0) : pd.band && (Jd[1] < pd.band[0] || Jd[1] > pd.band[1]) || Math.hypot(Jd[0] - pd.centre[0], Jd[2] - pd.centre[2]) > pd.r ? 0 : kd.perS * Math.min(1, Nd / 5e3)
      }
    }
    const Oe = [5, 7],
      ee = [24, 8, 24],
      Re = .5,
      Ie = 1 / .6,
      Ge = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class ve {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, XZ.isMobile)();
        this.state = new Le, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(dd) {
          return dd ? Qe : le
        }(dd)
      }
      startFallout(dd, Jd) {
        this.state.start(dd, Jd)
      }
      stopFallout() {
        this.state.stop()
      }
      JG(dd) {
        this.state.JG(dd, performance.now())
      }
      onAfterRender(dd, Jd) {
        var kd;
        const pd = performance.now(),
          Nd = 0 === this.lastMs ? 0 : Math.min(pd - this.lastMs, 250) / 1e3;
        this.lastMs = pd;
        const Wd = this.state.perS(pd, Jd, this.tier);
        if (Wd <= 0 || !dd.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Wd * Nd, Wd / 4);
        const Pd = Math.floor(this.budget);
        if (Pd < 1) return;
        this.budget -= Pd;
        const Zd = this.at;
        Zd[0] = Jd[0], Zd[1] = Jd[1] + 12, Zd[2] = Jd[2];
        const gd = null !== (kd = this.systems) && void 0 !== kd ? kd : this.create(dd, Zd),
          Cd = this.amounts;
        Cd[0] = 0, Cd[1] = 0;
        for (let Kd = 0; Kd < Pd; Kd++) Cd[Math.random() < .3 ? 1 : 0]++;
        for (let Kd = 0; Kd < gd.length; Kd++) Cd[Kd] > 0 && (gd[Kd].moveTo(Zd, ee), gd[Kd].emit(Cd[Kd]))
      }
      dispose() {
        for (const Jd of null !== (dd = this.systems) && void 0 !== dd ? dd : []) {
          var dd;
          Jd.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(dd, Jd) {
        return this.systems = Ge.map((kd => {
          let {
            rgba: [pd, Nd, Wd, Pd],
            share: Zd
          } = kd;
          const gd = {
            texture: "square_particle",
            oo: Math.ceil(this.tier.oo * Zd),
            minLifeTime: Oe[0] / Ie,
            maxLifeTime: Oe[1] / Ie,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Re, -1, Re],
            colorGradients: [{
              timeFraction: 0,
              minColor: [pd, Nd, Wd, 0]
            }, {
              timeFraction: .15,
              minColor: [pd, Nd, Wd, Pd]
            }, {
              timeFraction: .8,
              minColor: [pd, Nd, Wd, Pd]
            }, {
              timeFraction: 1,
              minColor: [pd, Nd, Wd, 0]
            }],
            blendMode: nZ.d.Standard
          };
          return dd.createParticles(gd, {
            pos: Jd,
            half: ee
          })
        })), this.systems
      }
    }
    const xe = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function qe(dd) {
      const Jd = /\|rot(\d)/.exec(dd);
      return xe[Jd ? Number(Jd[1]) : 1]
    }
    var Be = kd(605),
      se = kd(38613);
    const ie = new Set(Be.n);

    function ae(dd) {
      if (-2 !== dd.count) return null;
      const Jd = hd(dd.item);
      return null !== Jd && ie.has(Jd) ? Jd : null
    }

    function Me(dd) {
      const {
        width: Jd,
        height: kd
      } = (0, se.d)(dd).hitBoxDimensions;
      return .55 / Math.max(Jd, kd)
    }

    function Fe(dd, Jd, kd) {
      if (!kd) return !1;
      const pd = dd[0] + .5 - Jd[0],
        Nd = dd[1] + .5 - Jd[1],
        Wd = dd[2] + .5 - Jd[2];
      return pd * pd + Nd * Nd + Wd * Wd <= 576
    }

    function Ye(dd, Jd) {
      return Math.atan2(dd[0], dd[2]) + Math.PI + Jd
    }

    function me(dd, Jd) {
      const kd = 2 * Math.PI;
      return (dd + kd * Jd / 1e4) % kd
    }
    class be {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = dd, this.now = Jd, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = dd.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(dd, Jd) {
        if (0 === this.farms.size) return;
        const kd = this.now(),
          pd = Number.isNaN(this.frameMs) ? 0 : Math.min(kd - this.frameMs, 100);
        this.frameMs = kd, kd - this.checkedMs >= 1e3 && (this.checkedMs = kd, this.check(dd, Jd));
        for (const Nd of this.farms.values()) Nd.shown && Nd.running && null !== Nd.model && pd > 0 && (Nd.spin = me(Nd.spin, pd), Nd.model.setPose(Nd.feet, Ye(Nd.front, Nd.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const dd of this.farms.values()) this.drop(dd);
        this.farms.clear()
      }
      sync() {
        const dd = new Set;
        for (const Jd of this.labels.list()) {
          const kd = ae(Jd);
          if (null === kd) continue;
          dd.add(Jd.key);
          const pd = this.farms.get(Jd.key);
          if ((null === pd || void 0 === pd ? void 0 : pd.mob) === kd) continue;
          pd && this.drop(pd);
          const [Nd, Wd, Pd] = Jd.pos;
          this.farms.set(Jd.key, {
            pos: Jd.pos,
            feet: [Nd + .5, Wd + 1, Pd + .5],
            mob: kd,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [Jd, kd] of this.farms) dd.has(Jd) || (this.drop(kd), this.farms.delete(Jd));
        this.checkedMs = -1 / 0
      }
      check(dd, Jd) {
        for (const kd of this.farms.values()) {
          const [pd, Nd, Wd] = kd.pos, Pd = XL(dd, kd.pos);
          null !== Pd && Sk(Pd) === fd && Fe(kd.pos, Jd, "Air" === XL(dd, [pd, Nd + 1, Wd])) ? (kd.running = Pd.endsWith("|Running"), kd.front = qe(Pd), null === kd.model && (kd.model = dd.createMobModel(kd.mob, Me(kd.mob)), null === kd.model) || (kd.model.setPose(kd.feet, Ye(kd.front, kd.spin)), kd.shown || (kd.model.setVisible(!0), kd.shown = !0))) : (kd.shown && null !== kd.model && kd.model.setVisible(!1), kd.shown = !1)
        }
      }
      drop(dd) {
        var Jd;
        null === (Jd = dd.model) || void 0 === Jd || Jd.dispose(), dd.model = null, dd.shown = !1
      }
    }
    class Se {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(dd) {
        var Jd;
        this.island = dd.baf2ColIsland, this.islandSite = (Jd = dd.baf2ColSite) && 8 === Jd.length ? {
          spawnXZ: [Jd[0], Jd[1]],
          coreXZ: [Jd[2], Jd[3]],
          minXZ: [Jd[4], Jd[5]],
          maxXZ: [Jd[6], Jd[7]]
        } : null, this.views = dd.baf2ColList.map((dd => ({
          entry: CN(dd)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(dd) {
        this.status = dd, this.emit()
      }
      onOpen(dd) {
        this.openHeld = dd
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
        return this.views.map((dd => dd.entry))
      }
      entryAtRoot(dd) {
        var Jd;
        return null === (Jd = this.views.find((Jd => {
          let {
            entry: kd
          } = Jd;
          return kd.focus[0] === dd[0] && kd.focus[1] === dd[1] + 1 && kd.focus[2] === dd[2]
        }))) || void 0 === Jd ? void 0 : Jd.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(dd, Jd) {
        return Tg(this.entries(), dd, Jd)
      }
      lookSource() {
        return {
          handles: dd => Lp(dd) >= 0 || Op(dd),
          line: (dd, Jd) => this.lookLine(dd, Jd),
          version: () => this.beamsVersion
        }
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const dd of this.listeners) dd()
      }
    }
    const je = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((dd => dd / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((dd => [dd, dd + 1, dd + 2, dd, dd + 2, dd + 3]))
    };

    function Xe(dd, Jd, kd, pd, Nd, Wd, Pd) {
      let Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const gd = Math.cos(Zd),
        Cd = Math.sin(Zd),
        Kd = dd.positions.length / 3,
        {
          positions: od,
          indices: ld
        } = je;
      for (let Qd = 0; Qd < od.length; Qd += 3) {
        const Zd = od[Qd] * Nd,
          Kd = od[Qd + 2] * Pd;
        dd.positions.push(Jd + Zd * gd + Kd * Cd, kd + od[Qd + 1] * Wd, pd - Zd * Cd + Kd * gd)
      }
      for (const Qd of ld) dd.indices.push(Kd + Qd)
    }

    function fe(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return Jd < 1 ? {
        rgb: dd,
        alpha: Jd
      } : {
        rgb: dd,
        alpha: 1,
        opaque: !0
      }
    }
    class ne {
      constructor(dd, Jd) {
        this.style = dd, this.perSource = Jd, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(dd) {
        this.sources = dd, 0 === dd.length && (this.budget = 0)
      }
      Do(dd, Jd, kd) {
        const pd = this.sources.length;
        if (0 !== pd) {
          var Nd, Wd;
          this.budget = Math.min(this.budget + (Nd = pd, Wd = this.perSource, Math.min(Nd * Wd, kC) * Jd), 2);
          for (let Jd = 0; Jd < pd && this.budget >= 1; Jd++) {
            const Jd = this.sources[this.cursor % pd];
            this.cursor = (this.cursor + 1) % pd;
            if (!(Math.max(Math.abs(Jd.x - kd[0]), Math.abs(Jd.y - kd[1]), Math.abs(Jd.z - kd[2])) > 32)) return this.puff(dd, Jd), void this.budget--
          }
        }
      }
      dispose() {
        var dd;
        null === (dd = this.particles) || void 0 === dd || dd.dispose(), this.particles = null, this.sources = []
      }
      puff(dd, Jd) {
        let {
          x: kd,
          y: pd,
          z: Nd,
          h: Wd,
          faces: Pd
        } = Jd;
        const Zd = function(dd, Jd, kd, pd, Nd) {
            const [Wd, Pd, Zd] = Nd[Math.floor(Math.random() * Nd.length)], gd = .04, Cd = (dd, Jd, kd) => dd > 0 ? Jd + kd + gd : dd < 0 ? Jd - gd : Jd + .1, Kd = (dd, Jd, kd) => dd > 0 ? Jd + kd + gd : dd < 0 ? Jd - gd : Jd + kd - .1, od = [Cd(Wd, dd, 1), Cd(Pd, Jd, pd), Cd(Zd, kd, 1)], ld = [Kd(Wd, dd, 1), Kd(Pd, Jd, pd), Kd(Zd, kd, 1)];
            return {
              pos: [(od[0] + ld[0]) / 2, (od[1] + ld[1]) / 2, (od[2] + ld[2]) / 2],
              half: [(ld[0] - od[0]) / 2, (ld[1] - od[1]) / 2, (ld[2] - od[2]) / 2],
              out: [Wd, Pd, Zd]
            }
          }(kd, pd, Nd, Wd, Pd),
          {
            style: gd
          } = this,
          Cd = this.particles ??= dd.createParticles(bO(gd, Math.ceil(gd.count * kC * gd.life[1]) + 4), Zd);
        Cd.moveTo(Zd.pos, Zd.half);
        const [Kd, od, ld] = Zd.out, Qd = gd.spread;
        Cd.setDirections([Kd - Qd, .6 + od, ld - Qd], [Kd + Qd, 1 + od, ld + Qd]), Cd.emit(gd.count)
      }
    }
    const Ue = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class ye {
      constructor() {
        this.green = new ne(NC.green, dC), this.pink = new ne(NC.pink, JC), this.colliders = [], this.lastMs = 0
      }
      setSources(dd) {
        this.colliders = dd;
        const Jd = [],
          kd = [];
        for (const pd of dd) {
          const [dd, Nd, Wd] = pd.focus;
          Jd.push({
            x: dd,
            y: Nd - 1,
            z: Wd,
            h: 2,
            faces: Ue
          });
          for (let Jd = 0; Jd < 4; Jd++) {
            if (!pd.live[Jd]) continue;
            const [dd, Nd, Wd] = Ip(pd.focus, Jd, gp.LASER_D), [Pd, , Zd] = Rp[Jd], gd = Ue.filter((dd => dd[0] !== Pd || dd[2] !== Zd || 0 !== dd[1]));
            kd.push({
              x: dd,
              y: Nd,
              z: Wd,
              h: 1,
              faces: gd
            })
          }
        }
        this.green.setSources(Jd), this.pink.setSources(kd)
      }
      onAfterRender(dd) {
        const Jd = performance.now(),
          kd = 0 === this.lastMs ? 0 : Math.min(Jd - this.lastMs, 250) / 1e3;
        if (this.lastMs = Jd, 0 === this.colliders.length || !dd.particlesEnabled()) return;
        const pd = dd.getCameraPosition();
        this.green.Do(dd, kd, pd), this.pink.Do(dd, kd, pd)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const De = 1.04,
      Te = fe([1, 120 / 255, 220 / 255]),
      Ee = fe([1, .25, .25], .35);
    class ce {
      constructor(dd) {
        this.store = dd, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new ye
      }
      onAfterRender(dd) {
        this.store.version() !== this.builtVersion && this.rebuild(dd);
        const Jd = performance.now();
        for (const kd of this.beams) {
          const pd = 1 + .35 * Math.sin(Jd / 700 * Math.PI * 2 + kd.phase);
          dd.setGameMesh(kd.mesh, {
            scale: [kd.alongX ? 1 : pd, pd, kd.alongX ? pd : 1]
          })
        }
        this.glow.onAfterRender(dd)
      }
      dispose(dd) {
        this.clear(dd), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(dd) {
        this.clear(dd), this.builtVersion = this.store.version();
        const Jd = [];
        for (const {
            entry: kd
          }
          of this.store.colliders()) kd.on && kd.live.some(Boolean) && (this.addBeams(dd, kd), Jd.push(kd)), kd.blockers.length > 0 && this.addMarkers(dd, kd);
        this.glow.setSources(Jd)
      }
      addBeams(dd, Jd) {
        const [kd, pd, Nd] = Jd.focus, Wd = Ag - .25, Pd = (.25 + Ag) / 2;
        for (let Zd = 0; Zd < 4; Zd++) {
          if (!Jd.live[Zd]) continue;
          const [gd, , Cd] = Rp[Zd], Kd = 0 !== gd, od = {
            positions: [],
            indices: []
          };
          Xe(od, 0, 0, 0, Kd ? Wd : .2, .2, Kd ? .2 : Wd);
          const ld = [kd + .5 + gd * Pd, pd + .5, Nd + .5 + Cd * Pd],
            Qd = dd.createGameMesh(od, Te, ld);
          this.meshes.push(Qd), this.beams.push({
            mesh: Qd,
            alongX: Kd,
            phase: Zd * Math.PI / 2
          })
        }
      }
      addMarkers(dd, Jd) {
        const kd = Jd.blockers[0],
          pd = {
            positions: [],
            indices: []
          };
        for (const [Nd, Wd, Pd] of Jd.blockers) Xe(pd, Nd - kd[0] + .5, Wd - kd[1] + .5, Pd - kd[2] + .5, De, De, De);
        this.meshes.push(dd.createGameMesh(pd, Ee, kd))
      }
      clear(dd) {
        for (const Jd of this.meshes) dd.disposeGameMesh(Jd);
        this.meshes = [], this.beams = []
      }
    }
    const he = [.56, .83, 1],
      re = [1, .73, .08],
      ue = [1, .25, .25],
      te = [.85, .85, .85],
      Ve = [.3, .45, .6];

    function ze(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Pd = Nd / 2,
        Zd = Nd + Wd;
      for (const gd of [-Pd, Pd])
        for (const Nd of [-Pd, Pd]) Xe(dd, Jd, kd + gd, pd + Nd, Zd, Wd, Wd), Xe(dd, Jd + gd, kd, pd + Nd, Wd, Zd, Wd), Xe(dd, Jd + gd, kd + Nd, pd, Wd, Wd, Zd)
    }

    function He(dd) {
      return Jd => dd.isBlockInLoadedChunk(Jd[0], Jd[1], Jd[2]) && 0 === dd.getBlockId(Jd[0], Jd[1], Jd[2])
    }

    function we(dd) {
      return dd.map((dd => {
        let {
          free: Jd,
          blocked: kd,
          gaps: pd,
          supports: Nd
        } = dd;
        return `${Jd.join(";")}|${kd.join(";")}|${pd.join(";")}|${Nd.join(";")}`
      })).join("/")
    }

    function Ae(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Wd = Jd[0],
        Pd = {
          positions: [],
          indices: []
        };
      for (const [Zd, gd, Cd] of Jd) ze(Pd, Zd - Wd[0] + .5, gd - Wd[1] + .5, Cd - Wd[2] + .5, pd, Nd);
      return dd.createGameMesh(Pd, kd, Wd)
    }
    class dR {
      constructor(dd) {
        this.store = dd, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(dd, Jd, kd) {
        var pd;
        const Nd = null === (pd = dd.Pkd(Jd)) || void 0 === pd ? void 0 : pd.name;
        if (Nd !== Kp && Nd !== Cp) return void("" !== this.shownKey && this.show(dd, "", []));
        const Wd = performance.now();
        if (Wd - this.lastCheckMs >= 200 && (this.lastCheckMs = Wd, Nd === Kp ? this.check(dd, kd) : this.preview(dd, kd)), this.pulses.length > 0) {
          const Jd = 1 + .12 * Math.sin(Wd / 1e3 * 1.25 * Math.PI * 2),
            kd = [Jd, Jd, Jd];
          for (const pd of this.pulses) dd.setGameMesh(pd, {
            scale: kd
          })
        }
      }
      dispose(dd) {
        this.clear(dd), this.shownKey = ""
      }
      check(dd, Jd) {
        const kd = He(dd),
          pd = [];
        for (const {
            entry: Wd
          }
          of this.store.colliders()) {
          Wd.focus.every(((dd, kd) => Math.abs(dd + .5 - Jd[kd]) <= gp.GHOST_REACH)) && pd.push(wg(Wd, kd))
        }
        const Nd = we(pd);
        Nd !== this.shownKey && this.show(dd, Nd, pd)
      }
      preview(dd, Jd) {
        const kd = dd.getTargetedBlock(),
          pd = kd ? [kd.fO[0], kd.fO[1], kd.fO[2]] : null,
          Nd = null !== pd && pd.every(((dd, kd) => Math.abs(dd + .5 - Jd[kd]) <= 8)),
          Wd = this.store.site(),
          Pd = Nd && Wd ? function(dd, Jd, kd) {
            const pd = ep(dd);
            if (!pd.every(Jd)) return null;
            const Nd = xp(dd, kd);
            return {
              column: pd,
              spots: wg({
                focus: pd[1],
                lasers: [!1, !1, !1, !1],
                open: Nd,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, Jd),
              fits: Nd.filter(Boolean).length >= gp.MIN_SPOTS
            }
          }(pd, He(dd), Wd) : null,
          Zd = Pd ? [Pd.spots] : [],
          gd = Pd ? `preview ${pd.join(",")}|${Pd.fits}|${we(Zd)}` : "";
        var Cd, Kd;
        gd !== this.shownKey && this.show(dd, gd, Zd, null !== (Cd = null === Pd || void 0 === Pd ? void 0 : Pd.column) && void 0 !== Cd ? Cd : [], null === (Kd = null === Pd || void 0 === Pd ? void 0 : Pd.fits) || void 0 === Kd || Kd)
      }
      show(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Nd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(dd), this.shownKey = Jd, pd.length > 0 && this.meshes.push(Ae(dd, pd, fe(Nd ? te : ue)));
        for (const {
            free: Wd,
            blocked: Pd,
            gaps: Zd,
            supports: gd
          }
          of kd) {
          for (const [Jd, kd, pd] of Wd) {
            const Nd = {
              positions: [],
              indices: []
            };
            ze(Nd, 0, 0, 0);
            const Wd = dd.createGameMesh(Nd, fe(he), [Jd + .5, kd + .5, pd + .5]);
            this.meshes.push(Wd), this.pulses.push(Wd)
          }
          Pd.length > 0 && this.meshes.push(Ae(dd, Pd, fe(re))), Zd.length > 0 && this.meshes.push(Ae(dd, Zd, fe(ue), 1.06, .07)), gd.length > 0 && this.meshes.push(Ae(dd, gd, fe(Ve)))
        }
      }
      clear(dd) {
        for (const Jd of this.meshes) dd.disposeGameMesh(Jd);
        this.meshes = [], this.pulses = []
      }
    }
    class JR {
      constructor() {
        this.stored = new Map, this.EC = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(dd) {
        if (!dd.baf2TermOpen) return !1;
        dd.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [Jd, kd] of dd.baf2TermItems) kd > 0 ? this.stored.set(Jd, kd) : this.stored.delete(Jd);
        if (dd.baf2TermHeld && (this.EC = new Map(dd.baf2TermHeld)), this.pending = this.pending.filter((Jd => Jd.seq > dd.baf2TermAcked)), this.silos = dd.baf2TermSilos, this.readOnly = dd.baf2TermReadOnly, this.pocket = !0 === dd.baf2TermPocket, dd.baf2TermReset) this.resort();
        else {
          const dd = new Set(this.order);
          for (const Jd of this.stored.keys()) dd.has(Jd) || this.order.push(Jd)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((dd, Jd) => this.amount(Jd) - this.amount(dd) || dd.localeCompare(Jd))), this.changed()
      }
      take(dd, Jd) {
        const kd = gJ(dd, this.amount(Jd));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Jd,
          amount: kd,
          put: !1
        }), this.recents = [Jd, ...this.recents.filter((dd => dd !== Jd))].slice(0, 6), this.changed(), pJ(this.seq, dd, Jd)
      }
      put(dd, Jd) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Jd,
          amount: gJ(dd, this.heldAmount(Jd)),
          put: !0
        }), this.changed(), NJ(this.seq, dd, Jd)
      }
      putAll() {
        this.seq++;
        for (const dd of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: dd,
          amount: this.heldAmount(dd),
          put: !0
        });
        return this.changed(), WJ(this.seq)
      }
      amount(dd) {
        var Jd;
        let kd = null !== (Jd = this.stored.get(dd)) && void 0 !== Jd ? Jd : 0;
        for (const pd of this.pending) pd.item === dd && (kd += pd.put ? pd.amount : -pd.amount);
        return Math.max(0, kd)
      }
      heldAmount(dd) {
        var Jd;
        let kd = null !== (Jd = this.EC.get(dd)) && void 0 !== Jd ? Jd : 0;
        for (const pd of this.pending) pd.put && pd.item === dd && (kd -= pd.amount);
        return Math.max(0, kd)
      }
      heldItems() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((Jd => Jd === dd || this.heldAmount(Jd) > 0))
      }
      items() {
        return this.order.filter((dd => this.amount(dd) > 0))
      }
      recent() {
        return this.recents.filter((dd => this.amount(dd) > 0))
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
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      changed() {
        this.version++;
        for (const dd of this.listeners) dd()
      }
    }
    var kR = kd(38562);
    const pR = {
      isBlock: dd => void 0 !== bd.g[dd],
      harvestType: dd => {
        var Jd;
        return null === (Jd = bd.g[dd]) || void 0 === Jd ? void 0 : Jd.harvestType
      },
      harvestLevel: dd => {
        var Jd;
        return null === (Jd = bd.g[dd]) || void 0 === Jd ? void 0 : Jd.harvestLevel
      },
      dropsNothing: dd => {
        var Jd;
        return null === (null === (Jd = bd.g[dd]) || void 0 === Jd ? void 0 : Jd.drops)
      },
      displayName: dd => {
        var Jd;
        return null === (Jd = JZ.n[dd]) || void 0 === Jd ? void 0 : Jd.displayName
      },
      description: dd => {
        var Jd;
        return null === (Jd = JZ.n[dd]) || void 0 === Jd ? void 0 : Jd.description
      },
      harvests: dd => {
        var Jd;
        return null === (Jd = JZ.n[dd]) || void 0 === Jd ? void 0 : Jd.harvests
      },
      level: dd => {
        var Jd;
        return null === (Jd = JZ.n[dd]) || void 0 === Jd ? void 0 : Jd.level
      }
    };

    function NR(dd, Jd, kd) {
      return function(dd, Jd, kd, pd) {
        var Nd, Wd;
        const Pd = Jd.split("|")[0],
          Zd = dd.isBlock(Jd) ? Jd : dd.isBlock(Pd) ? Pd : null;
        if (null === Zd || "rock" !== dd.harvestType(Zd) || dd.dropsNothing(Zd) && !Dp.has(Pd)) return null;
        const gd = kd && "rock" === dd.harvests(kd) ? null !== (Nd = dd.level(kd)) && void 0 !== Nd ? Nd : 0 : null,
          Cd = null !== (Wd = null !== pd && void 0 !== pd ? pd : dd.harvestLevel(Zd)) && void 0 !== Wd ? Wd : 0;
        return (null !== gd ? Cd <= gd : 0 === dd.harvestLevel(Zd)) ? null : Fp(dd, Cd)
      }(pR, dd, Jd, kd)
    }

    function WR(dd, Jd) {
      return function(dd, Jd, kd) {
        if (Jd === Mp[0]) return [(0, Xd.ee)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Xd.M.whiteUiText)];
        const pd = kd.split("|")[0],
          Nd = dd.isBlock(pd) ? dd.displayName(pd) : void 0,
          Wd = "string" === typeof Nd ? Nd : Nd && "translationKey" in Nd ? `$t(${Nd.translationKey})` : pd;
        return [(0, Xd.ee)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Wd
          }
        }, Xd.M.whiteUiText), (0, Xd.ee)({
          translationKey: `item:${(0,Xd.Be)(Jd)}`
        }, Xd.M.yellowUiText)]
      }(pR, dd, Jd)
    }
    const PR = "buildAFactory2Game:";
    const ZR = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function gR(dd) {
      return dd.endsWith(" Ore")
    }
    const CR = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      KR = [],
      oR = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: CR,
        plan: null,
        atomic: KR
      },
      lR = "buildAFactory2Game:",
      QR = new Set(["Splitter", "Sorting Gate"]),
      LR = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class OR {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = dd, this.planAt = Jd, this.tierOf = kd, this.NC = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.EC = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = oR, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(dd, Jd, kd) {
        var pd, Nd, Wd;
        let Pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Zd = null !== (pd = null === (Nd = dd.Pkd(Jd)) || void 0 === Nd ? void 0 : Nd.name) && void 0 !== pd ? pd : null,
          gd = dd.isPlayerCrouching(Jd),
          Cd = 0 === kd ? null : this.resolve(dd, kd),
          Kd = null !== Cd && null !== Pd && QR.has(Cd.rootName) && function(dd, Jd) {
            return LR.some((kd => {
              let [pd, Nd] = kd;
              const Wd = dd.getBlockId(Jd[0] + pd, Jd[1], Jd[2] + Nd);
              return 0 !== Wd && "Express Belt" === dd.getMetaInfo(Wd).rootName
            }))
          }(dd, Pd),
          od = this.updatePlan(0 === kd ? null : Pd),
          ld = this.tierOf(),
          Qd = null === Pd ? null : (0, kR.h)(kd),
          Ld = null !== Qd && null !== Pd && (0, kR.j)(function(dd) {
            return (Jd, kd, pd) => dd.getBlockId(Jd, kd, pd)
          }(dd), Pd[0], Pd[1], Pd[2], Qd),
          Od = this.readAfloat(dd, kd, Pd);
        if (kd === this.NC && Ld === this.missesMaker && Od === this.afloat && Zd === this.EC && gd === this.crouching && Kd === this.express && ld === this.tier && !od && (!this.targetsLive || !this.liveMoved(Pd))) return;
        this.NC = kd, this.missesMaker = Ld, this.afloat = Od, this.EC = Zd, this.crouching = gd, this.express = Kd;
        const ed = Kd && Cd ? function(dd) {
          if (null === dd.info) return null;
          return dd.express ??= {
            ...dd.info,
            detail: `${lR}lookKeepsUpExpress`,
            detailItem: null
          }, dd.express
        }(Cd) : null !== Cd && Ld && null !== Qd ? this.besideMaker(Cd, kd, Qd) : null !== Cd && Od ? this.hanging(Cd) : null !== (Wd = null === Cd || void 0 === Cd ? void 0 : Cd.info) && void 0 !== Wd ? Wd : null;
        this.tier = ld;
        const Rd = Cd && ed ? function(dd, Jd) {
          var kd, pd;
          const Nd = bd.g[dd];
          if (!dd.endsWith(" Ore") || "rock" !== (null === Nd || void 0 === Nd ? void 0 : Nd.harvestType) || 0 === Nd.harvestLevel) return null;
          const Wd = null !== (kd = Nd.harvestLevel) && void 0 !== kd ? kd : 0,
            Pd = Jd ? JZ.n[Jd] : void 0;
          if ("rock" === (null === Pd || void 0 === Pd ? void 0 : Pd.harvests) && (null !== (pd = Pd.level) && void 0 !== pd ? pd : 0) >= Wd) return null;
          const Zd = (gd = Wd, Fp(pR, gd));
          var gd;
          if (null === Zd) return null;
          const Cd = WW(Zd),
            Kd = /^[AEIOU]/.test(Zd) ? "An" : "";
          if ("rock" === (null === Pd || void 0 === Pd ? void 0 : Pd.harvests) && Jd) return {
            key: `${lR}lookToolTooWeak${Kd}`,
            EC: WW(Jd),
            needed: Cd
          };
          return {
            key: Zd === Mp[0] ? `${lR}lookNeedAnyPickaxe` : `${lR}lookNeedPickaxe${Kd}`,
            EC: null,
            needed: Cd
          }
        }(Cd.rootName, Zd) : null;
        this.targetsLive = !0 === (null === Cd || void 0 === Cd ? void 0 : Cd.live) && null !== Pd;
        let Id = null;
        this.targetsLive && Cd && Pd && this.live && (this.livePos[0] = Pd[0], this.livePos[1] = Pd[1], this.livePos[2] = Pd[2], this.liveVersion = this.live.version(), Id = this.live.line(Cd.rootName, Pd));
        const Gd = null === ed ? CR : function(dd, Jd, kd) {
            const pd = function(dd, Jd, kd) {
              const pd = Xk(dd);
              if (null === pd) return null;
              const Nd = `${PR}lookPortMode_${pd}`,
                Wd = cp(Jd);
              if (Wd && kd) return {
                mode: null,
                detail: Nd,
                next: `${PR}lookWrenchPickUp`,
                nextState: null
              };
              const Pd = fk(dd),
                Zd = null === Pd ? null : Xk(Pd);
              return null === Zd ? {
                mode: null,
                detail: Nd,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Nd,
                next: Wd ? `${PR}lookWrenchNext` : `${PR}lookPortWrench`,
                nextState: `${PR}lookPortState_${Zd}`
              }
            }(dd, Jd, kd);
            if (null !== pd) return pd;
            const Nd = WN(dd, Jd, kd);
            return null === Nd.mode && null === Nd.next ? CR : Nd
          }(dd.blockIdToBlockName(kd), Zd, gd),
          vd = this.plan,
          xd = Cd && ed ? this.rowsOf(Cd.rootName, ld) : KR,
          qd = this.snapshot;
        if (!(null === ed ? !qd.visible : qd.visible && ed === qd.info && (Bd = Rd, sd = qd.tool, Bd === sd || null !== Bd && null !== sd && Bd.key === sd.key && Bd.EC === sd.EC && Bd.needed === sd.needed) && function(dd, Jd) {
            return dd === Jd || null !== dd && null !== Jd && dd.key === Jd.key && JSON.stringify([dd.params, dd.keys]) === JSON.stringify([Jd.params, Jd.keys])
          }(Id, qd.live) && function(dd, Jd) {
            return dd.mode === Jd.mode && dd.detail === Jd.detail && dd.next === Jd.next && dd.nextState === Jd.nextState
          }(Gd, qd.wrench) && uL(vd, qd.plan) && xd === qd.atomic)) {
          var Bd, sd;
          this.snapshot = null === ed ? {
            ...qd,
            visible: !1
          } : {
            info: ed,
            visible: !0,
            tool: Rd,
            live: Id,
            wrench: Gd,
            plan: vd,
            atomic: xd
          };
          for (const dd of this.listeners) dd()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = oR, this.NC = 0, this.EC = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(dd, Jd, kd) {
        if (null === kd || 0 === Jd || !Zd() || !gR(this.resolve(dd, Jd).rootName)) return !1;
        const pd = `${kd[0]},${kd[1]},${kd[2]},${Jd}`,
          Nd = performance.now();
        return pd === this.afloatKey && Nd - this.afloatAt < eR ? this.afloat : (this.afloatKey = pd, this.afloatAt = Nd, function(dd, Jd) {
          for (const [kd, pd, Nd] of ZR) {
            const Wd = Jd(dd[0] + kd, dd[1] + pd, dd[2] + Nd);
            if (void 0 === Wd || null !== Wd && !gR(Wd)) return !1
          }
          return !0
        }(kd, ((Jd, kd, pd) => function(dd, Jd, kd, pd) {
          if (!dd.isBlockInLoadedChunk(Jd, kd, pd)) return;
          const Nd = dd.getBlockId(Jd, kd, pd);
          return 0 === Nd ? null : dd.getMetaInfo(Nd).rootName
        }(dd, Jd, kd, pd))))
      }
      liveMoved(dd) {
        var Jd;
        const {
          livePos: kd
        } = this;
        return null === dd || dd[0] !== kd[0] || dd[1] !== kd[1] || dd[2] !== kd[2] || (null === (Jd = this.live) || void 0 === Jd ? void 0 : Jd.version()) !== this.liveVersion
      }
      updatePlan(dd) {
        const Jd = null === dd ? "" : dd.join(","),
          kd = performance.now();
        if (Jd === this.planPos && kd - this.planMs < 250) return !1;
        this.planPos = Jd, this.planMs = kd;
        const pd = null === dd ? null : this.planAt([dd[0], dd[1], dd[2]]),
          Nd = !uL(pd, this.plan);
        return this.plan = pd, Nd
      }
      besideMaker(dd, Jd, kd) {
        let {
          info: pd
        } = dd;
        if (null === pd) return null;
        let Nd = this.besideMakerById.get(Jd);
        if (void 0 === Nd) {
          const dd = "cryo" === kd ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Nd = {
            ...pd,
            detail: `${lR}${dd}`,
            detailItem: null
          }, this.besideMakerById.set(Jd, Nd)
        }
        return Nd
      }
      hanging(dd) {
        let {
          info: Jd,
          rootName: kd
        } = dd;
        if (null === Jd) return null;
        let pd = this.afloatByRoot.get(kd);
        return void 0 === pd && (pd = {
          ...Jd,
          detail: `${lR}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(kd, pd)), pd
      }
      rowsOf(dd, Jd) {
        if (null === Jd) return KR;
        const kd = `${dd}|${Jd}`;
        let pd = this.rowsByKey.get(kd);
        if (void 0 === pd) {
          const Nd = function(dd, Jd) {
            var kd;
            if (!(dd in XJ)) return [];
            const pd = null !== (kd = fJ[dd]) && void 0 !== kd ? kd : [],
              Nd = new Map;
            for (const Pd of hW(dd, Jd))
              if ((pd.includes(Pd) || cW(Pd.output) && TW(Pd.output) > Hd(dd)) && TW(Pd.output) <= Jd) {
                var Wd;
                const dd = null !== (Wd = Nd.get(Pd.output)) && void 0 !== Wd ? Wd : [];
                dd.push(Pd.input), Nd.set(Pd.output, dd)
              } return uW([...Nd], (dd => {
              let [Jd] = dd;
              return -TW(Jd)
            })).map((dd => {
              let [Jd, kd] = dd;
              return {
                output: Jd,
                inputs: kd
              }
            }))
          }(dd, Jd);
          pd = Nd.length > 0 ? Nd : KR, this.rowsByKey.set(kd, pd)
        }
        return pd
      }
      resolve(dd, Jd) {
        const {
          rootId: kd,
          rootName: pd
        } = dd.getMetaInfo(Jd), Nd = (0, ek.l)(pd) ? Jd : kd;
        let Wd = this.byRootId.get(Nd);
        const Pd = Zd();
        if (void 0 === Wd || Wd.nuclear !== Pd) {
          var gd;
          const kd = function(dd) {
            return Up(pR, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd)
          }(pd, dd.blockIdToBlockName(Jd));
          Wd = {
            info: kd,
            rootName: pd,
            live: null !== kd && !0 === (null === (gd = this.live) || void 0 === gd ? void 0 : gd.handles(pd)),
            nuclear: Pd
          }, this.byRootId.set(Nd, Wd)
        }
        return Wd
      }
    }
    const eR = 500;
    const RR = (0, pd.memo)((function(dd) {
      var Jd, kd;
      let {
        store: Nd
      } = dd;
      const {
        t: Wd
      } = (0, YN.B)(), [Pd, Zd] = (0, pd.useState)((() => Nd.get()));
      (0, pd.useEffect)((() => (Zd(Nd.get()), Nd.subscribe((() => {
        Zd(Nd.get())
      })))), [Nd]);
      const {
        openInGameMenuName: gd,
        openEverythingMenuName: Cd,
        isTouchScreen: Kd
      } = (0, qN.j)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: od,
        tool: ld,
        live: Qd,
        wrench: Ld,
        atomic: Od
      } = Pd, ed = Pd.visible && null === gd && null === Cd;
      if (null === od) return null;
      const Rd = null !== Ld.detail ? Wd(Ld.detail) : null !== (Jd = Pd.plan) && void 0 !== Jd && Jd.ctrl ? Wd("buildAFactory2Game:lookPlanCtrl") : null !== od.detail ? Wd(od.detail, null === od.detailItem ? void 0 : {
        item: Wd(od.detailItem)
      }) : null;
      return (0, MW.jsxs)("div", {
        className: iN()("Baf2LookTarget", {
          Visible: ed
        }),
        "aria-hidden": !ed,
        children: [(0, MW.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Wd(od.name)
        }), null !== Pd.plan && (0, MW.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Wd(Pd.plan.key, {
            kind: Wd(Pd.plan.kindKey),
            w: String(Pd.plan.w),
            h: String(Pd.plan.h),
            d: String(Pd.plan.d),
            count: String(Pd.plan.count)
          })
        }), void 0 !== (null === (kd = Pd.plan) || void 0 === kd ? void 0 : kd.why) && (0, MW.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Wd(Pd.plan.why)
        }), null !== Ld.mode && (0, MW.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Wd(Ld.mode)
        }), null !== ld ? (0, MW.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Wd(ld.key, {
            item: Wd(ld.needed),
            EC: null === ld.EC ? "" : Wd(ld.EC)
          })
        }) : null !== Qd ? (0, MW.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Wd(Qd.key, WC(Wd, Qd))
        }) : null !== Rd && (0, MW.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Rd
        }), Od.length > 0 && (0, MW.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Wd("buildAFactory2Game:lookAtomicRecipes", {
            list: Od.map((dd => {
              let {
                output: Jd,
                inputs: kd
              } = dd;
              const pd = kd.length > 1 ? ` ${Wd("buildAFactory2Game:recipeMore",{count:String(kd.length-1)})}` : "";
              return `${Wd(WW(kd[0]))}${pd} \u2192 ${Wd(WW(Jd))}`
            })).join(", ")
          })
        }), null !== Ld.next && (0, MW.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Wd(Ld.next, {
            state: null === Ld.nextState ? "" : Wd(Ld.nextState),
            use: Wd(Kd ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var IR = kd(38660);
    const GR = [],
      vR = [
        [0, -1, 0]
      ];

    function xR(dd) {
      const Jd = [dd];
      for (let kd = 1; kd <= 4; kd++) kd > 1 && Jd.push(`${dd}|meta|rot${kd}`), Jd.push(`${dd}|meta|rot${kd}|Running`);
      return Jd
    }

    function qR(dd, Jd) {
      return [Math.floor(dd[0] / Jd), Math.floor(dd[1] / Jd), Math.floor(dd[2] / Jd)]
    }

    function BR(dd, Jd, kd) {
      return `${dd},${Jd},${kd}`
    }

    function sR(dd) {
      const Jd = dd.split("|")[0];
      if (!Kk(Jd)) return GR;
      const kd = XJ[Jd];
      if (kk(kd)) return vR;
      const pd = qe(dd);
      return pk(kd) ? [
        [-pd[0], -pd[1], -pd[2]]
      ] : aN(kd) ? function(dd, Jd) {
        const kd = dd[0] - 2 * Jd[0],
          pd = dd[2] - 2 * Jd[2],
          Nd = [];
        for (let Wd = -1; Wd <= 1; Wd++)
          for (let Jd = -1; Jd <= 1; Jd++) Nd.push([kd + Wd, dd[1], pd + Jd]);
        return Nd
      }([0, 0, 0], pd) : GR
    }
    const iR = [.5, .5, .5],
      aR = [.2, .8, .3],
      MR = [.45, 1, .5];
    class FR {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(dd) {
        this.indexed = !0;
        for (const Jd of FJ)
          for (const kd of xR(Jd)) {
            const Jd = dd.blockNameToBlockId(kd, !0),
              pd = sR(kd);
            null !== Jd && pd.length > 0 && (this.offsetsList.push(pd), this.offsetsIndexById[Jd] = this.offsetsList.length)
          }
      }
      onAfterRender(dd, Jd) {
        this.indexed || this.index(dd);
        const kd = performance.now();
        if (kd - this.lastCheckMs < 100) return;
        this.lastCheckMs = kd, this.checks++;
        const pd = LL.g.KL,
          [Nd, Wd, Pd] = qR(Jd, pd);
        let Zd = !1;
        const gd = [];
        let Cd = 0;
        for (let Kd = Nd - 2; Kd <= Nd + 2; Kd++)
          for (let Jd = Wd - 1; Jd <= Wd + 1; Jd++)
            for (let Nd = Pd - 2; Nd <= Pd + 2; Nd++) {
              const Wd = Cd++,
                Pd = BR(Kd, Jd, Nd),
                od = dd.getChunkVersion(Kd, Jd, Nd);
              let ld = this.chunks.get(Pd);
              null !== od ? (ld || (ld = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Pd, ld)), ld.seenAt = this.checks, ld.checkedVersion !== od && (ld.checkedVersion = od, Zd = !0), ld.scannedVersion !== od && kd - ld.scannedAt >= 500 && gd.push({
                slot: Wd,
                entry: ld,
                origin: [Kd * pd, Jd * pd, Nd * pd]
              })) : (Zd ||= void 0 !== ld, this.chunks.delete(Pd))
            }
        this.scanDue(dd, gd) && (Zd = !0);
        for (const [Kd, od] of this.chunks) od.seenAt !== this.checks && (Zd ||= od.machines.length > 0, this.chunks.delete(Kd));
        for (const Kd of this.chunks.values())
          for (const [Jd, kd, pd] of Kd.cellChunks)(Math.abs(Jd - Nd) > 2 || Math.abs(kd - Wd) > 1 || Math.abs(pd - Pd) > 2) && this.watchCellChunk(dd, Jd, kd, pd) && (Zd = !0);
        for (const [Kd, od] of this.cellChunks) od.seenAt !== this.checks && this.cellChunks.delete(Kd);
        Zd && this.refresh(dd)
      }
      dispose(dd) {
        this.clearMeshes(dd), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(dd, Jd) {
        const kd = Math.max(Jd.findIndex((dd => {
          let {
            slot: Jd
          } = dd;
          return Jd >= this.scanFrom
        })), 0);
        let pd = 96;
        for (let Nd = 0; Nd < Jd.length; Nd++) {
          const {
            slot: Wd,
            entry: Pd,
            origin: Zd
          } = Jd[(kd + Nd) % Jd.length];
          if (pd -= this.scan(dd, Pd, Zd), pd <= 0) {
            this.scanFrom = Wd + 1;
            break
          }
        }
        return Jd.length > 0
      }
      scan(dd, Jd, kd) {
        let [pd, Nd, Wd] = kd;
        const Pd = LL.g.KL,
          Zd = this.hits;
        Zd.length = 0;
        const gd = dd.scanBlocks(pd, Nd, Wd, pd + Pd, Nd + Pd, Wd + Pd, this.offsetsIndexById, Zd),
          Cd = [];
        for (let Kd = 0; Kd < Zd.length; Kd += 4) Cd.push({
          pos: [Zd[Kd], Zd[Kd + 1], Zd[Kd + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[Zd[Kd + 3]] - 1]
        });
        return Jd.machines = Cd, Jd.cellChunks = function(dd, Jd) {
          const kd = new Set,
            pd = [];
          for (const {
              pos: Nd,
              offsets: Wd
            }
            of dd)
            for (const [dd, Pd, Zd] of Wd) {
              const Wd = qR([Nd[0] + dd, Nd[1] + Pd, Nd[2] + Zd], Jd),
                gd = BR(...Wd);
              kd.has(gd) || (kd.add(gd), pd.push(Wd))
            }
          return pd
        }(Cd, Pd), Jd.scannedVersion = Jd.checkedVersion, Jd.scannedAt = performance.now(), Math.max(gd, 1)
      }
      watchCellChunk(dd, Jd, kd, pd) {
        const Nd = BR(Jd, kd, pd),
          Wd = dd.getChunkVersion(Jd, kd, pd),
          Pd = this.cellChunks.get(Nd);
        return null === Wd ? this.cellChunks.delete(Nd) : (null === Pd || void 0 === Pd ? void 0 : Pd.version) === Wd ? (Pd.seenAt = this.checks, !1) : (this.cellChunks.set(Nd, {
          version: Wd,
          seenAt: this.checks
        }), !0)
      }
      refresh(dd) {
        const Jd = function(dd, Jd) {
            const kd = new Set,
              pd = [];
            for (const {
                pos: Nd,
                offsets: Wd
              }
              of dd)
              for (const [dd, Pd, Zd] of Wd) {
                const Wd = Nd[0] + dd,
                  gd = Nd[1] + Pd,
                  Cd = Nd[2] + Zd,
                  Kd = `${Wd},${gd},${Cd}`;
                kd.has(Kd) || (kd.add(Kd), Jd(Wd, gd, Cd) && pd.push([Wd, gd, Cd]))
              }
            return pd
          }([...this.chunks.values()].flatMap((dd => dd.machines)), ((Jd, kd, pd) => dd.isBlockInLoadedChunk(Jd, kd, pd) && 0 === dd.getBlockId(Jd, kd, pd))),
          kd = Jd.join(";");
        kd !== this.shownKey && (this.shownKey = kd, this.clearMeshes(dd), Jd.length > 0 && (this.meshes = [this.build(dd, Jd, !1), this.build(dd, Jd, !0)]))
      }
      build(dd, Jd, kd) {
        const pd = Jd[0],
          Nd = [],
          Wd = [];
        for (const [Pd, Zd, gd] of Jd)(0, IR.e)(Nd, Wd, [Pd - pd[0] + .5, Zd - pd[1] + .5, gd - pd[2] + .5], iR, kd);
        return dd.createGameMesh({
          positions: Nd,
          indices: Wd
        }, {
          rgb: kd ? MR : aR,
          alpha: .4
        }, pd)
      }
      clearMeshes(dd) {
        for (const Jd of this.meshes) dd.disposeGameMesh(Jd);
        this.meshes = []
      }
    }
    const YR = 1 / .6,
      mR = 200,
      bR = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      SR = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      jR = 2 * Math.PI / 3;
    class XR {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bR;
        this.style = dd, this.particles = null, this.points = new Float32Array(800), this.budget = mR, this.lastMs = 0
      }
      static blade() {
        return new XR(SR)
      }
      JG(dd, Jd) {
        const kd = Math.min(Jd.arcStruck, Jd.arcPoints.length);
        this.draw(dd, [Jd.arcFrom, ...Jd.arcPoints], Jd.arcPoints.slice(0, kd))
      }
      onBlade(dd, Jd) {
        const [kd, pd, Nd] = Jd.bladeCentre, [Wd, Pd] = Jd.bladeFacing, Zd = kd - 1.5 * Wd, gd = Nd - 1.5 * Pd, Cd = Math.atan2(Pd, Wd), Kd = [];
        for (let od = 0; od <= 8; od++) {
          const dd = Cd - jR / 2 + jR * od / 8;
          Kd.push([Zd + 2.5 * Math.cos(dd), pd, gd + 2.5 * Math.sin(dd)])
        }
        this.draw(dd, Kd, Jd.bladeStruck)
      }
      dispose() {
        var dd;
        null === (dd = this.particles) || void 0 === dd || dd.stop(), this.particles = null
      }
      draw(dd, Jd, kd) {
        if (!dd.particlesEnabled() || Jd.length < 2) return;
        const pd = performance.now();
        this.budget = Math.min(mR, this.budget + (pd - this.lastMs) / 1e3 * mR), this.lastMs = pd;
        const Nd = [];
        let Wd = 0,
          Pd = Jd[0];
        for (const Rd of Jd.slice(1)) {
          const dd = Math.min(48, Math.round(Math.hypot(Rd[0] - Pd[0], Rd[1] - Pd[1], Rd[2] - Pd[2]) * this.style.perBlock));
          Nd.push([Pd, Rd, dd]), Wd += dd, Pd = Rd
        }
        const Zd = kd.length;
        Wd += 10 * Zd;
        const gd = Wd > this.budget ? this.budget / Wd : 1;
        if (0 === Wd || gd * Wd < 1) return;
        const Cd = Jd[0],
          [Kd, od, ld] = Cd,
          Qd = this.points;
        let Ld = 0;
        const Od = (dd, Jd, kd, pd) => {
          const Nd = 4 * Ld;
          Qd[Nd] = dd - Kd, Qd[Nd + 1] = Jd - od, Qd[Nd + 2] = kd - ld, Qd[Nd + 3] = pd, Ld++
        };
        Nd.forEach(((dd, Jd) => {
          let [kd, pd, Nd] = dd;
          const Wd = Math.min(Math.floor(Nd * gd), mR - Ld),
            Pd = Math.hypot(pd[0] - kd[0], pd[1] - kd[1], pd[2] - kd[2]),
            Zd = 0 === Jd && Pd > 0 ? Math.min(.5, .1 * Pd) / Pd : 0;
          for (let gd = 0; gd < Wd; gd++) {
            const dd = Zd + (gd + .5) / Wd * (1 - Zd);
            Od(kd[0] + (pd[0] - kd[0]) * dd, kd[1] + (pd[1] - kd[1]) * dd, kd[2] + (pd[2] - kd[2]) * dd, .15)
          }
        }));
        const ed = Math.floor(10 * gd);
        for (let Rd = 0; Rd < Zd; Rd++) {
          const [dd, Jd, pd] = kd[Rd];
          for (let kd = 0; kd < ed && Ld < mR; kd++) Od(dd, Jd, pd, 2.5)
        }
        this.budget -= Ld, this.particles ??= dd.createParticles(function(dd) {
          const [Jd, kd] = dd.colours;
          return {
            texture: "square_particle",
            oo: 400,
            minLifeTime: dd.life[0] / YR,
            maxLifeTime: dd.life[1] / YR,
            minSize: dd.size[0],
            maxSize: dd.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [Jd[0], Jd[1], Jd[2], 1],
              maxColor: [kd[0], kd[1], kd[2], 1]
            }, {
              timeFraction: 1,
              minColor: [Jd[0], Jd[1], Jd[2], 0],
              maxColor: [kd[0], kd[1], kd[2], 0]
            }],
            blendMode: nZ.d.Add
          }
        }(this.style), {
          pos: Cd
        }), this.particles.emitPoints(Cd, Qd, Ld)
      }
    }
    const fR = new Set(["Sky Spring"]);

    function nR(dd, Jd, kd) {
      const pd = dd.split("|")[0];
      return "Air" !== Jd || kd || ! function(dd) {
        const Jd = dd.split("|")[0];
        return void 0 !== Zk[Jd] || fR.has(Jd)
      }(pd) ? null : dd
    }
    class UR {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(dd) {
        const Jd = dd - this.lastTapAt >= 300;
        return this.lastTapAt = dd, Jd
      }
    }
    class yR {
      constructor() {
        this.presses = new UR, this.predicted = null
      }
      tap(dd, Jd) {
        const kd = this.presses.isNewPress(Jd);
        return kd && (this.predicted = {
          station: dd,
          at: Jd
        }), kd
      }
      consumeServerOpen(dd, Jd) {
        const kd = this.predicted;
        return !(null === kd || kd.station !== dd || Jd - kd.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class DR {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(dd, Jd) {
        return dd && (this.thrustAt = Jd), Jd - this.thrustAt < 200
      }
    }
    const TR = [.1, .05, .1],
      ER = {
        texture: "effect_5",
        oo: Math.ceil(48),
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
        blendMode: nZ.d.OneOne
      };
    class cR {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new DR, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      JG(dd, Jd) {
        for (const [kd, pd] of Jd.baf2JetFlames) dd.isLocalPlayer(kd) || (pd ? this.lit.add(kd) : this.lit.delete(kd))
      }
      onAfterRender(dd, Jd) {
        const kd = performance.now(),
          pd = this.hold.lit(this.selfThrusting(dd, Jd), kd);
        for (const [Nd, Wd] of this.flames)(Nd === Jd ? pd : this.lit.has(Nd)) || this.setEmitting(Wd, !1), Nd === Jd || dd.getPositionView(Nd) ? !Wd.emitting && kd - Wd.offAt >= 1300 && (Wd.particles.stop(), this.flames.delete(Nd)) : (Wd.particles.dispose(), this.flames.delete(Nd), this.lit.delete(Nd));
        pd && this.draw(dd, Jd, Jd);
        for (const Nd of this.lit) this.draw(dd, Jd, Nd)
      }
      dispose() {
        for (const dd of this.flames.values()) dd.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(dd, Jd) {
        var kd;
        const pd = dd.getLocalPlayerMovement();
        return !!pd && (null !== (Nd = {
          option: null !== (kd = dd.getClientOption(Jd, "jumpHoldThrust")) && void 0 !== kd ? kd : null,
          jumping: pd.jumpHeld,
          onGround: pd.onGround,
          alive: dd.isAlive(Jd)
        }).option && Nd.option.maxUpSpeed >= 0 && Nd.jumping && !Nd.onGround && Nd.alive);
        var Nd
      }
      draw(dd, Jd, kd) {
        var pd, Nd;
        const Wd = this.pos;
        if (!dd.readDrawnPosition(kd, Wd)) return;
        const Pd = dd.readDrawnPosition(Jd, this.camera) ? this.camera : Wd;
        if (!((Wd[0] - Pd[0]) ** 2 + (Wd[1] - Pd[1]) ** 2 + (Wd[2] - Pd[2]) ** 2 < 1600) || !dd.particlesEnabled()) {
          const dd = this.flames.get(kd);
          return void(dd && this.setEmitting(dd, !1))
        }
        const Zd = null !== (pd = this.flames.get(kd)) && void 0 !== pd ? pd : this.create(dd, kd, Wd),
          gd = null !== (Nd = dd.getDrawnHeading(kd)) && void 0 !== Nd ? Nd : 0,
          Cd = this.at;
        Cd[0] = Wd[0] - .35 * Math.sin(gd), Cd[1] = Wd[1] + 1.05, Cd[2] = Wd[2] - .35 * Math.cos(gd), Zd.particles.moveTo(Cd), this.setEmitting(Zd, !0)
      }
      setEmitting(dd, Jd) {
        dd.emitting !== Jd && (dd.emitting = Jd, Jd || (dd.offAt = performance.now()), dd.particles.setEmitRate(Jd ? 60 : 0))
      }
      create(dd, Jd, kd) {
        const pd = {
          particles: dd.createParticles(ER, {
            pos: kd,
            half: TR
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(Jd, pd), pd
      }
    }

    function hR(dd) {
      return "Reactor Frame" === Wp("reactor", dd)
    }

    function rR(dd) {
      return Dk("reactor", dd) && !hR(dd) && (dd.startsWith("Reactor Glass") || dd.startsWith("Reactor Port"))
    }
    const uR = "baf2Goal";
    class tR {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [fN.j.subscribe("setDirectionArrow", (dd => {
          let {
            id: Jd,
            position: kd
          } = dd;
          Jd === uR && (this.goal = kd, this.checkedAt = -1 / 0)
        })), fN.j.subscribe("clearDirectionArrow", (dd => {
          let {
            id: Jd
          } = dd;
          null !== Jd && Jd !== uR || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const dd of this.subs) fN.j.unsubscribe(dd)
      }
      sideOf(dd, Jd, kd, pd) {
        const Nd = this.goal;
        if (!Nd) return 0;
        kd - this.checkedAt > 1e3 && (this.checkedAt = kd, this.open = function(dd, Jd) {
          const [kd, pd, Nd] = dd.map(Math.floor);
          if (!rR(Jd(kd, pd, Nd))) return null;
          for (const [Wd, Pd] of [
              [1, 0],
              [0, 1]
            ]) {
            const dd = Jd(kd + Wd, pd, Nd + Pd),
              Zd = Jd(kd - Wd, pd, Nd - Pd);
            if (hR(Zd) && rR(dd)) return [Wd, 0, Pd];
            if (hR(dd) && rR(Zd)) return [0 - Wd, 0, 0 - Pd]
          }
          return null
        }(Nd, ((Jd, kd, pd) => dd.blockIdToBlockName(dd.getBlockId(Jd, kd, pd)))));
        const Wd = this.open;
        if (!Wd) return 0;
        const Pd = pd(Nd);
        if (Math.abs(Pd.x - Jd.x) > .05 || Math.abs(Pd.y - Jd.y) > .05) return 0;
        const Zd = pd([Nd[0] + Wd[0], Nd[1], Nd[2] + Wd[2]]).x - Pd.x;
        return Math.abs(Zd) < .3 ? 0 : Zd > 0 ? 1 : -1
      }
    }
    class VR {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new tR, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.pL = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.xI = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((dd => {
          for (const Jd of dd) Jd.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Jd.target, Jd.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.pL || this.clear()
        }, window.addEventListener("resize", this.xI)
      }
      onAfterRender(dd, Jd) {
        var kd;
        this.api = dd, this.project = null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.projectWorldPosToScreenPos) && void 0 !== kd ? kd : null, this.queued || this.pL || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.pL = !0;
        for (const dd of this.moved.keys()) dd.style.transform = "";
        this.moved.clear();
        for (const dd of this.sideLabels.keys()) dd.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.xI)
      }
      clear() {
        for (const Wd of this.moved.keys()) Wd.isConnected || this.moved.delete(Wd);
        for (const Wd of this.sideLabels.keys()) Wd.isConnected || this.sideLabels.delete(Wd);
        if (0 === this.arrows.length) return;
        const dd = performance.now(),
          Jd = dd - this.refreshedAt > 1e3;
        Jd && (this.refreshedAt = dd, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const kd = this.trackerBox(),
          pd = this.barsBox(),
          Nd = this.toastBox(Jd);
        (kd || pd || Nd) && Jd && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Wd = 0; Wd < this.arrows.length; Wd++) {
          const Jd = this.arrows[Wd];
          this.labelOffsets.set(Jd, this.runLabelAside(Jd, dd));
          const Pd = (kd ? this.shiftLeftOf(Jd, kd) : 0) || this.shiftOnScreen(Jd),
            Zd = Math.min(pd ? this.liftAbove(Jd, pd, Pd) : 0, Nd ? this.liftAbove(Jd, Nd, Pd) : 0),
            gd = this.moved.get(Jd);
          if (0 !== Pd || 0 !== Zd) {
            const dd = 0 === Zd ? `translateX(${Pd}px)` : `translate(${Pd}px, ${Zd}px)`;
            gd !== dd && (Jd.style.transform = dd, this.moved.set(Jd, dd))
          } else void 0 !== gd && (Jd.style.transform = "", this.moved.delete(Jd))
        }
      }
      trackerBox() {
        var dd, Jd;
        const kd = null !== (dd = this.tracker) && void 0 !== dd && dd.isConnected ? this.tracker : null !== (Jd = this.trackers[0]) && void 0 !== Jd ? Jd : null;
        if (kd !== this.tracker && this.watch(kd), this.boxStale && kd) {
          var pd, Nd, Wd;
          this.boxStale = !1;
          const dd = kd.closest(".NoRoom") ? null : kd.getBoundingClientRect(),
            Jd = dd && dd.width > 0 ? null === (pd = this.hud) || void 0 === pd ? void 0 : pd.getBoundingClientRect() : void 0,
            Pd = dd && Jd ? Math.max(dd.top, Jd.top) : null !== (Nd = null === dd || void 0 === dd ? void 0 : dd.top) && void 0 !== Nd ? Nd : 0,
            Zd = dd && Jd ? Math.min(dd.bottom, Jd.bottom) : null !== (Wd = null === dd || void 0 === dd ? void 0 : dd.bottom) && void 0 !== Wd ? Wd : 0;
          this.box = dd && dd.width > 0 && Zd > Pd ? {
            left: dd.left,
            top: Pd,
            right: dd.right,
            bottom: Zd
          } : null
        }
        return kd ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var dd;
          this.barsStale = !1;
          const Jd = null === (dd = this.statBars[0]) || void 0 === dd ? void 0 : dd.getBoundingClientRect();
          this.bars = Jd && Jd.width > 0 && Jd.height > 0 ? {
            left: Jd.left,
            top: Jd.top,
            right: Jd.right,
            bottom: Jd.bottom
          } : null
        }
        return this.bars
      }
      toastBox(dd) {
        var Jd;
        const kd = null !== (Jd = this.toasts[0]) && void 0 !== Jd ? Jd : null;
        if (kd !== this.toastEl || dd && kd) {
          this.toastEl = kd;
          const dd = null === kd || void 0 === kd ? void 0 : kd.getBoundingClientRect();
          this.toast = dd && dd.width > 0 && dd.height > 0 ? {
            left: dd.left,
            top: dd.top,
            right: dd.right,
            bottom: dd.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(dd, Jd, kd) {
        var pd;
        const Nd = this.anchorOf(dd);
        if (!Nd) return 0;
        const Wd = Nd.x + kd + (null !== (pd = this.labelOffsets.get(dd)) && void 0 !== pd ? pd : 0),
          {
            halfWidth: Pd,
            labelled: Zd
          } = this.extentOf(dd),
          gd = Nd.y + this.em * (Zd ? 6.2 : 3);
        return gd < Jd.top - 6 || Wd + Pd < Jd.left - 6 || Wd - Pd > Jd.right + 6 ? 0 : Jd.top - 6 - gd
      }
      watch(dd) {
        var Jd, kd;
        this.tracker && this.sizes.unobserve(this.tracker), null === (Jd = this.hud) || void 0 === Jd || Jd.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = dd, this.hud = null !== (kd = null === dd || void 0 === dd ? void 0 : dd.closest(".Baf2QuestHud")) && void 0 !== kd ? kd : null, this.box = null, this.boxStale = !0, dd && this.sizes.observe(dd), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(dd, Jd) {
        var kd;
        const pd = this.anchorOf(dd);
        if (!pd) return 0;
        const {
          y: Nd
        } = pd, Wd = pd.x + (null !== (kd = this.labelOffsets.get(dd)) && void 0 !== kd ? kd : 0), Pd = this.em, {
          halfWidth: Zd,
          labelled: gd
        } = this.extentOf(dd), Cd = Nd - Pd, Kd = Wd + Zd;
        return Nd + Pd * (gd ? 6.2 : 3) < Jd.top || Cd > Jd.bottom || Kd < Jd.left - 6 || Wd - Zd > Jd.right ? 0 : Math.max(Jd.left - 6 - Kd, 6 - (Wd - Zd))
      }
      shiftOnScreen(dd) {
        var Jd;
        const kd = this.anchorOf(dd);
        if (!kd) return 0;
        const {
          halfWidth: pd
        } = this.extentOf(dd), Nd = kd.x + (null !== (Jd = this.labelOffsets.get(dd)) && void 0 !== Jd ? Jd : 0), Wd = Nd + pd - (this.innerWidth - 6);
        return Wd > 0 ? -Wd : Math.max(0, 6 - (Nd - pd))
      }
      runLabelAside(dd, Jd) {
        var kd;
        let pd = null;
        for (let Pd = 0; Pd < dd.children.length; Pd++) dd.children[Pd].classList.contains("DirectionArrowLabel") && (pd = dd.children[Pd]);
        if (!pd) return 0;
        const Nd = dd.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(dd) : null,
          Wd = (Nd && this.api ? this.side.sideOf(this.api, {
            x: Nd.x / this.innerWidth * 100,
            y: Nd.y / this.innerHeight * 100
          }, Jd, this.project) : 0) * this.halfWidthOf(pd);
        return Wd !== (null !== (kd = this.sideLabels.get(pd)) && void 0 !== kd ? kd : 0) && (pd.style.transform = 0 === Wd ? "" : `translateX(-50%) translateX(${Wd}px)`, 0 === Wd ? this.sideLabels.delete(pd) : this.sideLabels.set(pd, Wd)), Wd
      }
      extentOf(dd) {
        let Jd = this.em,
          kd = !1;
        for (let pd = 0; pd < dd.children.length; pd++) {
          const Nd = dd.children[pd],
            Wd = Nd.classList.contains("DirectionArrowLabel");
          kd ||= Wd, (Wd || Nd.classList.contains("DirectionArrowDistance")) && (Jd = Math.max(Jd, this.halfWidthOf(Nd)))
        }
        return {
          halfWidth: Jd,
          labelled: kd
        }
      }
      halfWidthOf(dd) {
        let Jd = this.halfWidths.get(dd);
        return void 0 === Jd && (Jd = dd.offsetWidth / 2, this.halfWidths.set(dd, Jd), this.sizes.observe(dd), this.labels.add(dd)), Jd
      }
      forgetGoneLabels() {
        for (const dd of this.labels) dd.isConnected || (this.sizes.unobserve(dd), this.halfWidths.delete(dd), this.labels.delete(dd))
      }
      anchorOf(dd) {
        const Jd = dd.style.translate,
          kd = this.anchors.get(dd);
        if (kd && kd.translate === Jd && kd.innerWidth === this.innerWidth && kd.innerHeight === this.innerHeight) return kd;
        const pd = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Jd);
        if (!pd) return null;
        const Nd = {
          translate: Jd,
          x: parseFloat(pd[1]) / 100 * this.innerWidth,
          y: parseFloat(pd[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(dd, Nd), Nd
      }
    }
    const zR = "Baf2ArrowText";

    function HR(dd, Jd) {
      const kd = dd.rows.find((dd => dd.current));
      return jd(dd.tutorial) && null !== kd && void 0 !== kd && kd.item && uN(kd) && Yd(kd.item).includes(Jd) ? kd.item : null
    }
    const wR = new class {
      constructor(dd) {
        this.select = dd, this.picks = new Map
      }
      open(dd, Jd, kd) {
        const pd = HR(Jd, dd);
        null !== pd && this.Tl(dd, pd, kd)
      }
      follow(dd, Jd) {
        if (Zd())
          for (const [kd, {
              item: pd,
              had: Nd
            }] of this.picks) {
            const Wd = HR(dd, kd);
            Wd !== pd && (null !== Wd && Jd(pd) > Nd ? this.Tl(kd, Wd, Jd) : this.picks.delete(kd))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Tl(dd, Jd, kd) {
        this.picks.set(dd, {
          item: Jd,
          had: kd(Jd)
        }), this.select(dd, Jd)
      }
    }(nN.p);

    function AR(dd) {
      return Jd => {
        let kd = 0;
        for (const pd of dd.getInventoryItems())(null === pd || void 0 === pd ? void 0 : pd.name) === Jd && (kd += null === pd.amount ? 1 : Math.max(pd.amount, 0));
        return kd
      }
    }

    function dI(dd, Jd, kd, pd) {
      dd.getClientOption(Jd, "canCraft") && "inventory" !== qN.d.get("openInGameMenuName") && (wR.open(kd, pd.get(), AR(dd)), fN.j.nO("toggleMenu", `inventory|${kd}`))
    }
    let JI = null,
      kI = !1;

    function pI(dd) {
      const Jd = iW();
      dd === JI && Jd === kI || (JI = dd, kI = Jd, (0, nN.r)(function(dd, Jd) {
        const kd = new Map;
        for (let pd = dd + 1; pd <= Nd.length; pd++) {
          const Nd = tW(pd, dd, Jd);
          if (Nd)
            for (const Jd of Rd(pd).unlocks) kd.set(Jd, {
              ...Nd,
              stepsAway: pd - dd
            })
        }
        return kd
      }(dd, Jd)))
    }

    function NI() {
      return (0, nN.w)(uW(Object.keys(Fd), TW)), () => {
        (0, nN.w)([])
      }
    }
    const WI = "buildAFactory2Game:",
      PI = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      ZI = {
        on: `${WI}tutorialButtonOn`,
        hud: `${WI}tutorialButtonHud`,
        off: `${WI}tutorialButtonOff`
      },
      gI = {
        on: `${WI}tutorialPickedOn`,
        hud: `${WI}tutorialPickedHud`,
        off: `${WI}tutorialPickedOff`
      };

    function CI(dd, Jd, kd) {
      let pd = null,
        Nd = () => {};
      const Wd = Wd => {
        var Pd;
        let {
          tutorial: Zd,
          tutorialKnown: gd
        } = Wd;
        (null === (Pd = pd) || void 0 === Pd ? void 0 : Pd.tutorial) === Zd && pd.tutorialKnown === gd || (pd = {
          tutorial: Zd,
          tutorialKnown: gd
        }, Nd = (0, vN.x)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: ZI[Zd],
          icon: {
            kind: "icon",
            name: PI[Zd]
          },
          iconOnly: !0,
          disabled: !gd,
          className: "Baf2TutorialButton",
          onClick: () => {
            var pd;
            (pd => {
              const Nd = Jd.setTutorial(pd);
              dd.send(`baf2tutorial ${pd} ${Nd}`), kd.show({
                baf2ToastText: [(0, Xd.ee)({
                  translationKey: gI[pd]
                }, Xd.M.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((pd = Jd.get().tutorial, Sd[(Sd.indexOf(pd) + 1) % Sd.length]))
          }
        }))
      };
      Wd(Jd.get());
      const Pd = fN.j.subscribe(UN, Wd);
      return () => {
        fN.j.unsubscribe(Pd), Nd()
      }
    }

    function KI(dd, Jd, kd) {
      var pd, Nd;
      const Wd = dd.getTargetedBlock();
      if (!Wd || ! function(dd, Jd, kd) {
          if ("Chest" !== Jd) return !1;
          const pd = dd.split("|")[0];
          if (!Kk(pd) || 0 === XJ[pd].outputSlots.length) return !1;
          const Nd = qe(dd);
          return kd[0] === Nd[0] && kd[1] === Nd[1] && kd[2] === Nd[2]
        }(kd, null === (pd = dd.Pkd(Jd)) || void 0 === pd ? void 0 : pd.name, Wd.normal)) return !1;
      const [Pd, Zd, gd] = Wd.fO, Cd = dd.getBlockId(Pd, Zd, gd);
      return 0 === Cd || !0 === (null === (Nd = bd.g[Cd]) || void 0 === Nd ? void 0 : Nd.canBePlacedOver)
    }
    var oI = kd(36933);
    const lI = new Set(Rk.b);
    class QI {
      constructor(dd) {
        this.toasts = dd, this.lastAt = -1 / 0
      }
      onAltAction(dd, Jd, kd) {
        const pd = dd.getTargetedBlock();
        if (!pd || function(dd) {
            const Jd = dd.split("|")[0];
            return Kk(Jd) || null !== ip(Jd) || ad(Jd) || Rk.b.includes(Jd)
          }(kd) && !lI.has(kd.split("|")[0])) return;
        const Nd = dd.Pkd(Jd);
        if (!Nd || !lI.has(Nd.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Wd = Nd.typeObj.id,
          [Pd, Zd, gd] = pd.fO,
          Cd = dd.getBlockId(Pd, Zd, gd),
          Kd = bd.g[Cd];
        (0 === Cd || null !== Kd && void 0 !== Kd && Kd.dQ || null !== Kd && void 0 !== Kd && Kd.canBePlacedOver) && dd.isSolidToPlayerBlockId(Wd) && dd.canModifyBlockAt(Pd, Zd, gd) && dd.MJd(Pd, Zd, gd, Wd) && !dd.MJd(Pd, Zd, gd, Wd, Jd) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Xd.ee)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Xd.M.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class LI {
      constructor(dd) {
        this.show = dd, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(dd, Jd, kd) {
        var pd;
        if (!Jd) return this.started = null, void this.gatedThisHold.clear();
        if (!dd) return void(this.started = null);
        const Nd = `${dd.x},${dd.y},${dd.z},${dd.EC}`;
        if (Nd === this.started) return;
        this.started = Nd;
        const Wd = yp(dd.y) ? NR(dd.block, dd.EC, dd.level) : null;
        if (null === Wd || this.gatedThisHold.has(Nd)) return;
        this.gatedThisHold.add(Nd);
        const Pd = dd.block.split("|")[0];
        kd - (null !== (pd = this.hintedAt.get(Pd)) && void 0 !== pd ? pd : -1 / 0) < 5e3 || (this.hintedAt.set(Pd, kd), this.show({
          baf2ToastText: WR(Wd, dd.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var OI = kd(33);

    function eI(dd, Jd) {
      const kd = [...dd.baf2CoreBankPaused];
      for (const [Nd] of dd.baf2CoreBanked) kd.push(Nd);
      for (const Pd of Nd) {
        for (const {
            item: dd
          }
          of Pd.cost) kd.push(dd);
        for (const dd of Pd.newDeposits) kd.push(dd.block);
        for (const dd of Pd.unlocks) kd.push(dd, md(dd));
        Pd.reward && kd.push(Pd.reward);
        for (const {
            item: dd
          }
          of null !== (pd = null === (Wd = Pd.charge) || void 0 === Wd ? void 0 : Wd.items) && void 0 !== pd ? pd : []) {
          var pd, Wd;
          kd.push(dd)
        }
      }
      return {
        message: dd,
        itemNames: Jd([...new Set(kd)])
      }
    }
    const RI = "baf2MultiblockGuide";
    const II = new Map;
    const GI = function(dd, Jd, kd, Nd) {
      let {
        localPlayerId: Wd
      } = Nd;
      const Pd = new IZ,
        Zd = new pQ,
        Cd = new KQ,
        Kd = new gQ(Cd),
        od = (dd, Jd) => {
          Jd ? Kd.observe(dd) : Kd.unobserve(dd)
        },
        ld = new ZQ,
        Qd = new LQ(od),
        Ld = dd => Qd.covers(dd),
        Od = new jQ;
      let ed;
      const Rd = new TP((dd => {
          ed.sendCommand(dd)
        })),
        Id = () => {
          Rd.send("baf2questbook")
        },
        Gd = dd => function(dd, Jd, kd) {
          const pd = {};
          for (const Nd of kd) {
            let kd = II.get(Nd);
            void 0 === kd && (kd = dd.getItemStat(Jd, Nd, "displayName"), II.set(Nd, kd)), pd[Nd] = kd
          }
          return pd
        }(ed, Wd, dd),
        vd = new TN(Id),
        xd = new rQ((() => qN.d.get("loadingOverlayVisible"))),
        qd = new HQ,
        Bd = new QI(xd),
        sd = new LI((dd => {
          xd.show(dd, dd.baf2ToastMs)
        })),
        Md = new PL(od),
        Fd = new be(Md),
        Yd = new aP,
        md = new JR,
        Sd = new NZ,
        jd = new QL({
          read: () => !1 !== OI.i.getItem(RI),
          write: dd => {
            OI.i.setItem(RI, dd)
          }
        }),
        nd = new DL(jd),
        Ud = new cL(jd),
        yd = new oO(jd, (dd => function(dd, Jd) {
          const kd = Jg(Jd.w, Jd.h, Jd.d),
            pd = new Uint8Array(kd);
          for (let Nd = 0; Nd < kd; Nd++) {
            const kd = XL(dd, dp(Jd, Np(Jd, Nd)));
            pd[Nd] = null === kd ? 0 : HZ(kd)
          }
          return pd
        }(ed, dd)), kO(Rd)),
        Dd = new lO(jd, kO(Rd)),
        Td = new CO,
        Ed = (dd, Jd) => {
          let [kd, pd, Nd] = dd;
          Td.answered(Jd) || xd.show({
            baf2ToastText: [(0, Xd.ee)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: kd,
                h: pd,
                d: Nd
              }
            }, Xd.M.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      yd.onSizeNotTaken(Ed), Dd.onSizeNotTaken(Ed);
      const rd = new eO,
        ud = new zO(jd),
        td = new wO,
        zd = new Ce(td),
        Hd = new ve,
        wd = new Se,
        dJ = new ce(wd),
        JJ = new dR(wd),
        kJ = wd.lookSource(),
        pJ = new OR({
          handles: dd => kJ.handles(dd) || dd === fd,
          line: (dd, Jd) => dd === fd ? function(dd, Jd, kd) {
            var pd;
            const Nd = hd(null === (pd = Jd.at(kd)) || void 0 === pd ? void 0 : pd.item);
            return null === Nd ? {
              key: `${lR}lookFarmEmpty`
            } : {
              key: dd.blockIdToBlockName(dd.getBlockId(kd[0], kd[1], kd[2])).endsWith("|Running") ? `${lR}lookFarmRunning` : `${lR}lookFarmWaiting`,
              keys: {
                mob: cd(Nd)
              }
            }
          }(ed, Md, Jd) : kJ.line(dd, Jd),
          version: () => kJ.version() + Md.version()
        }, (dd => rL(jd.all(), dd, (dd => XL(ed, dd)))), (() => vd.get().tier)),
        NJ = new jO,
        WJ = new FR,
        PJ = new XR,
        ZJ = XR.blade(),
        gJ = new cR,
        CJ = new dL,
        KJ = new VR,
        oJ = new yR,
        QJ = new UR;
      let LJ = -1 / 0,
        OJ = 0,
        eJ = -1 / 0,
        RJ = -1 / 0;
      const IJ = () => {
          Rd.send("baf2islandsclose"), RJ = Date.now()
        },
        GJ = [];

      function vJ(dd) {
        var Jd, kd, pd, Nd, Wd, Pd, gd;
        "core" === (null === (Jd = Zd.get()) || void 0 === Jd ? void 0 : Jd.kind) && "core" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && Rd.send("baf2coreclose"), "power" === (null === (kd = Zd.get()) || void 0 === kd ? void 0 : kd.kind) && "power" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && Rd.send("baf2powerclose"), "water" === (null === (pd = Zd.get()) || void 0 === pd ? void 0 : pd.kind) && "water" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && Rd.send(Ad.w), "terminal" === (null === (Nd = Zd.get()) || void 0 === Nd ? void 0 : Nd.kind) && "terminal" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && Rd.send("baf2terminalclose"), "islands" === (null === (Wd = Zd.get()) || void 0 === Wd ? void 0 : Wd.kind) && "islands" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && IJ();
        const Cd = wd.getStatus();
        "collider" === (null === (Pd = Zd.get()) || void 0 === Pd ? void 0 : Pd.kind) && "collider" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && Cd && Rd.send(Ug(Cd, "close"));
        const Kd = dd => "reactor" === dd || "battery" === dd;
        if (Kd(null === (gd = Zd.get()) || void 0 === gd ? void 0 : gd.kind) && !Kd(null === dd || void 0 === dd ? void 0 : dd.kind)) {
          var od, ld, Qd;
          const dd = "reactor" === (null === (od = Zd.get()) || void 0 === od ? void 0 : od.kind) ? null === (ld = yd.get()) || void 0 === ld ? void 0 : ld.status.baf2RxAt : null === (Qd = Dd.get()) || void 0 === Qd ? void 0 : Qd.status.baf2BatAt;
          dd && Rd.send(lJ(dd, "close"))
        }
        "quests" === (null === dd || void 0 === dd ? void 0 : dd.kind) && Id(), Zd.set(dd), null === dd && qd.release()
      }

      function xJ() {
        (0, xN.g)(), vJ(null)
      }
      let qJ = new Set,
        BJ = !1;
      const sJ = {
        onCreate: dd => {
          ed = dd, ed.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const Jd of FJ) {
            const dd = XJ[Jd].inputSlots ? jZ(Pd) : mZ(Jd, Pd, Yd, Rd);
            GJ.push((0, GN.e)(Jd, dd))
          }
          GJ.push((0, xN.w)((0, pd.createElement)(pd.Fragment, null, (0, pd.createElement)(RQ, {
            controller: Qd
          }), (0, pd.createElement)(CL, {
            store: Md
          }), (0, pd.createElement)(RR, {
            store: pJ
          }), (0, pd.createElement)(cQ, {
            store: vd
          }), (0, pd.createElement)(VQ, {
            store: xd
          }), (0, pd.createElement)(wQ, {
            store: qd
          }), (0, pd.createElement)(kL, {
            store: CJ
          }), (0, pd.createElement)(OO, {
            store: rd
          }), (0, pd.createElement)(AO, {
            store: td
          })), {
            content: (0, pd.createElement)(NQ, {
              commands: Rd,
              store: Zd,
              power: Yd,
              water: Sd,
              reactor: yd,
              battery: Dd,
              collider: wd,
              terminal: md,
              quests: vd,
              close: xN.j,
              leave: () => {
                qd.dropHeld(), (0, xN.g)()
              },
              askIslands: () => {
                RJ = -1 / 0, LJ = Date.now(), OJ = Rd.send(Vd)
              },
              openSocial: () => {
                (0, xN.g)(), qN.d.set({
                  openEverythingMenuName: Qk.s.SOCIAL
                })
              },
              showCore: dd => {
                vJ({
                  kind: "core",
                  core: dd
                }), Rd.send("baf2corereopen")
              }
            }),
            onClose: () => {
              vJ(null)
            }
          })), GJ.push((0, vN.x)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              vJ({
                kind: "quests"
              }), (0, xN.p)()
            }
          })), GJ.push(CI(Rd, vd, xd)), BJ = !1, GJ.push(aW((() => {
            null !== JI && pI(JI)
          }))), GJ.push(NI()), GJ.push(function() {
            const dd = fN.j.subscribe(UN, JW),
              Jd = () => {
                if (dW) {
                  const dd = dW;
                  dW = null, (0, nN.v)(dd)
                }
              },
              kd = fN.j.subscribe("toggleMenu", (dd => {
                "inventory" === (null === dd || void 0 === dd ? void 0 : dd.split("|")[0]) && Jd()
              })),
              pd = fN.j.subscribe("appManagerUpdated|openInGameMenuName", (dd => {
                "inventory" === dd && Jd()
              }));
            return () => {
              fN.j.unsubscribe(dd), fN.j.unsubscribe(kd), fN.j.unsubscribe(pd)
            }
          }()), GJ.push(function(dd) {
            const Jd = AR(dd),
              kd = fN.j.subscribe(UN, (dd => {
                wR.follow(dd, Jd)
              }));
            return () => {
              fN.j.unsubscribe(kd), wR.clear()
            }
          }(ed)), GJ.push(function() {
            const dd = document.documentElement,
              Jd = (0, fQ.e)(".InvenBodyRight", [], (() => {
                const Jd = document.querySelector(".InvenBodyRight");
                Jd && dd.style.setProperty("--baf2-backpack-width", `${Jd.offsetWidth}px`)
              }));
            return () => {
              Jd(), dd.style.removeProperty("--baf2-backpack-width")
            }
          }()), GJ.push(function() {
            const dd = document.documentElement;
            return dd.classList.add(zR), () => {
              dd.classList.remove(zR)
            }
          }()), GJ.push((() => {
            Kd.dispose(), Cd.dispose()
          })), Od.start(ed), GJ.push((() => {
            Od.dispose(), gJ.dispose(), Fd.dispose()
          }))
        },
        onClose: () => {
          (0, nN.v)([]), dW = null, AN = new Set, JI = null, (0, nN.r)(new Map), II.clear();
          for (const dd of GJ) dd();
          vd.dispose(), pJ.dispose(), xd.dispose(), qd.dispose(), NJ.dispose(), WJ.dispose(ed), nd.dispose(ed), Ud.dispose(ed), ud.dispose(ed), zd.dispose(ed), td.dispose(), Hd.dispose(), jd.dispose(), yd.dispose(), Dd.dispose(), rd.dispose(), PJ.dispose(), ZJ.dispose(), CJ.dispose(), dJ.dispose(ed), JJ.dispose(ed), wd.dispose(), KJ.dispose(), Rd.clear()
        },
        onAfterRender: (dd, Jd) => {
          var kd, pd, Nd;
          try {
            Od.onAfterRender(Jd)
          } catch (Cd) {
            console.error("Error drawing BAF2 belt items", Cd)
          }
          try {
            gJ.onAfterRender(ed, Wd)
          } catch (Cd) {
            console.error("Error drawing BAF2 jet flames", Cd)
          }
          BJ || (BJ = !0, Rd.send("baf2clientready"));
          const Pd = ed.getPositionView(Wd);
          Qd.onAfterRender(Jd, Pd, ld), Md.onAfterRender(Jd, Pd, ld, Ld), Kd.run(ld), NJ.onAfterRender(ed, Pd), WJ.onAfterRender(ed, Pd), Fd.onAfterRender(ed, Pd), nd.onAfterRender(ed, Pd), Ud.onAfterRender(ed, Wd, Pd), ud.onAfterRender(ed, Wd, Pd), zd.onAfterRender(ed, Wd), Hd.onAfterRender(ed, Pd), vd.onPlayerY(Pd[1]), dJ.onAfterRender(ed), JJ.onAfterRender(ed, Wd, Pd);
          const gd = ed.getTargetedBlock();
          pJ.onAfterRender(ed, Wd, null !== (kd = null === gd || void 0 === gd ? void 0 : gd.W9) && void 0 !== kd ? kd : 0, null !== (pd = null === gd || void 0 === gd ? void 0 : gd.position) && void 0 !== pd ? pd : null), KJ.onAfterRender(ed, Jd), sd.onMining(function(dd, Jd) {
            var kd, pd;
            const Nd = dd.getMiningBlock();
            if (!Nd) return null;
            const Wd = (0, bd.e)(dd.getBlockId(Nd[0], Nd[1], Nd[2])),
              Pd = null !== (kd = null === (pd = dd.Pkd(Jd)) || void 0 === pd ? void 0 : pd.name) && void 0 !== kd ? kd : null,
              Zd = dd.getItemStat(Jd, Wd.split("|")[0], "harvestLevel");
            return {
              block: Wd,
              x: Nd[0],
              y: Nd[1],
              z: Nd[2],
              EC: Pd,
              level: Zd
            }
          }(ed, Wd), ed.isMining(), performance.now()), "dropMap" === (null === (Nd = Zd.get()) || void 0 === Nd ? void 0 : Nd.kind) && yp(Pd[1]) && xJ()
        },
        onPlayerChangeBlock: (dd, Jd, kd, pd, Nd, Pd) => {
          dd === Wd && function(dd, Jd, kd, pd, Nd, Wd, Pd) {
            const Zd = nR(Wd, Pd, dd.isPlayerCrouching(Jd));
            if (null === Zd) return;
            if (dd.aY(kd, pd, Nd, Zd), !dd.getClientOption(Jd, "canPickUpItems")) return;
            const gd = Zk[Zd.split("|")[0]];
            var Cd, Kd, od;
            void 0 !== gd && (Cd = dd.getInventoryItems(), Kd = gd, od = LL.g.maxItemStackSize, dd.getInventoryFreeSlotCount(Jd) > 0 || Cd.some((dd => null !== dd && dd.name === Kd && null !== dd.amount && dd.amount < od))) && dd.playSound(Jd, (0, oI.g)("pickUp"), .5, 1)
          }(ed, dd, Jd, kd, pd, Nd, Pd)
        },
        onPlayerAltAction: (dd, Jd, kd, pd, Nd) => {
          var Pd, Zd;
          if (!ed.getClientOption(Wd, "canPickUpItems")) return;
          const gd = null !== (Pd = null === (Zd = ed.Pkd(Wd)) || void 0 === Zd ? void 0 : Zd.name) && void 0 !== Pd ? Pd : null,
            Cd = function(dd, Jd) {
              const kd = dd.split("|")[0];
              return ad(kd) && Jd !== KN && "Sky Pack" !== Jd ? kd : null
            }(Nd, gd);
          if (null !== Cd) return void(oJ.tap(Cd, performance.now()) && dI(ed, Wd, Cd, vd));
          if (!cp(gd)) return;
          const Kd = QJ.isNewPress(performance.now()),
            od = function(dd, Jd, kd) {
              return !cp(Jd) || kd ? null : dN(dd)
            }(Nd, gd, ed.isPlayerCrouching(Wd));
          null !== od && Kd && ed.aY(Jd, kd, pd, od)
        },
        onPlayerAttemptAltAction: (dd, Jd, kd, pd, Nd) => {
          if (function(dd, Jd, kd, pd, Nd) {
              "Workbench" === pd.split("|")[0] && dd.getClientOption(kd, "canCraft") && (wR.open("Workbench", Nd.get(), AR(dd)), Jd.send("baf2station Workbench"))
            }(ed, Rd, Wd, Nd, vd), KI(ed, Wd, Nd)) return "preventAction";
          Bd.onAltAction(ed, Wd, Nd)
        },
        onReceivedMessageFromServer: (dd, Jd) => {
          if ("baf2MachineStatus" === dd) {
            var kd, pd, Nd, Cd, Kd, od, ld, Ld, Id, Bd, sd, ad, Fd, bd, Xd, fd;
            const dd = Jd,
              Wd = dd.baf2MachineTaught;
            Pd.set(dd.baf2MachinePos, {
              status: dd.baf2MachineStatus,
              power: null !== (kd = dd.baf2MachinePower) && void 0 !== kd ? kd : null,
              opLeftMs: null !== (pd = dd.baf2MachineOpLeftMs) && void 0 !== pd ? pd : null,
              dug: dd.baf2MachineYield ? {
                item: dd.baf2MachineYield,
                name: Gd([dd.baf2MachineYield])[dd.baf2MachineYield]
              } : null,
              powerCap: null !== (Nd = dd.baf2MachinePowerCap) && void 0 !== Nd ? Nd : null,
              powerRates: null !== (Cd = dd.baf2MachinePowerRates) && void 0 !== Cd ? Cd : null,
              coupled: !0 === dd.baf2MachineCoupled,
              couplerLevel: null !== (Kd = dd.baf2MachineCoupler) && void 0 !== Kd ? Kd : 1,
              taught: Wd,
              taughtName: Wd ? Gd([Wd])[Wd] : null,
              tier: null !== (od = dd.baf2MachineTier) && void 0 !== od ? od : null,
              input: null !== (ld = dd.baf2MachineInput) && void 0 !== ld ? ld : null,
              inertCoupler: null !== (Ld = dd.baf2MachineInertCoupler) && void 0 !== Ld ? Ld : null,
              inputShort: null !== (Id = dd.baf2MachineInputShort) && void 0 !== Id ? Id : null,
              field: null !== (Bd = dd.baf2MachineField) && void 0 !== Bd ? Bd : null,
              noSeeds: !0 === dd.baf2MachineNoSeeds,
              fuelFed: !0 === dd.baf2MachineFuelFed,
              fuelFeeds: !0 === dd.baf2MachineFuelFeeds,
              coreFull: !0 === dd.baf2MachineCoreFull,
              waterUnpowered: !0 === dd.baf2MachineWaterUnpowered,
              powerShort: !0 === dd.baf2MachinePowerShort,
              powerWait: !0 === dd.baf2MachinePowerWait,
              reactorPowered: !0 === dd.baf2MachineReactorPowered,
              fuelLeftMs: null !== (sd = dd.baf2MachineFuelLeftMs) && void 0 !== sd ? sd : null,
              burning: null !== (ad = dd.baf2MachineBurning) && void 0 !== ad ? ad : null,
              fuelKeep: null !== (Fd = dd.baf2MachineFuelKeep) && void 0 !== Fd ? Fd : null,
              water: null !== (bd = dd.baf2MachineWater) && void 0 !== bd ? bd : null,
              farm: null !== (Xd = dd.baf2MachineFarm) && void 0 !== Xd ? Xd : null,
              cryo: null !== (fd = dd.baf2MachineCryo) && void 0 !== fd ? fd : null
            })
          } else if ("baf2StationOpen" === dd) {
            const dd = Jd.baf2Station;
            oJ.consumeServerOpen(dd, performance.now()) || dI(ed, Wd, dd, vd)
          } else if ("baf2Power" === dd) {
            const dd = Jd;
            Yd.set(dd), dd.baf2PowerOpen && (vJ({
              kind: "power"
            }), (0, xN.p)())
          } else if (dd === Ad.D) {
            const dd = Jd;
            Sd.set(dd), dd.baf2WaterOpen && (vJ({
              kind: "water"
            }), (0, xN.p)())
          } else if ("baf2RxPlans" === dd) {
            var nd, Ud, Ed;
            const dd = Jd;
            jd.JG(dd);
            const kd = new Set(dd.baf2RxPlanList.map((dd => {
              let [Jd, kd, pd] = dd;
              return `${Jd},${kd},${pd}`
            })));
            rd.retain(kd);
            const pd = null === (nd = Zd.get()) || void 0 === nd ? void 0 : nd.kind,
              Nd = "reactor" === pd ? null === (Ud = yd.get()) || void 0 === Ud ? void 0 : Ud.status.baf2RxAt : "battery" === pd ? null === (Ed = Dd.get()) || void 0 === Ed ? void 0 : Ed.status.baf2BatAt : void 0;
            Nd && qJ.has(Nd.join(",")) && !kd.has(Nd.join(",")) && xJ(), qJ = kd
          } else if ("baf2RxStatus" === dd) {
            const dd = Jd;
            yd.set(dd), dd.baf2RxOpen && (vJ({
              kind: "reactor"
            }), (0, xN.p)())
          } else if ("baf2BatStatus" === dd) {
            const dd = Jd;
            Dd.set(dd), dd.baf2BatOpen && (vJ({
              kind: "battery"
            }), (0, xN.p)())
          } else if ("baf2RxAlarm" === dd) rd.JG(Jd);
          else if ("baf2Bomb" === dd) td.JG(Jd, ed.getPositionView(Wd));
          else if ("baf2Fallout" === dd) Hd.JG(Jd);
          else if ("baf2ColBeams" === dd) wd.onBeams(Jd);
          else if ("baf2ColStatus" === dd) {
            const dd = Jd;
            var cd, hd;
            if (wd.onStatus(dd), dd.baf2ColOpen) wd.onOpen(null !== (cd = null === (hd = ed.Pkd(Wd)) || void 0 === hd ? void 0 : hd.name) && void 0 !== cd ? cd : null), vJ({
              kind: "collider"
            }), (0, xN.p)()
          } else if ("baf2Terminal" === dd) {
            const dd = Jd;
            var ud;
            if (md.apply(dd)) dd.baf2TermReset && (vJ({
              kind: "terminal"
            }), (0, xN.p)());
            else "terminal" === (null === (ud = Zd.get()) || void 0 === ud ? void 0 : ud.kind) && (Zd.set(null), (0, xN.g)())
          } else if ("baf2Core" === dd) {
            var zd;
            const dd = Jd;
            if (gd(!0 === dd.baf2CoreNuclear), function(dd, Jd) {
                return "core" === (null === dd || void 0 === dd ? void 0 : dd.kind) && Jd.baf2CoreTier > dd.core.message.baf2CoreTier
              }(Zd.get(), dd)) return void(0, xN.g)();
            if (dd.baf2CoreRefresh && "core" !== (null === (zd = Zd.get()) || void 0 === zd ? void 0 : zd.kind)) return;
            vJ({
              kind: "core",
              core: eI(dd, Gd)
            }), dd.baf2CoreRefresh || (0, xN.p)()
          } else if ("baf2WrenchUndo" === dd) {
            const {
              baf2WrenchPos: dd,
              baf2WrenchBlock: kd
            } = Jd;
            ed.aY(dd[0], dd[1], dd[2], kd)
          } else if ("baf2Toast" === dd) {
            const dd = Jd;
            Td.heard(performance.now(), dd.baf2ToastMs), xd.show(dd)
          } else if ("baf2Area" === dd) qd.arrive(Jd, null !== Zd.get());
          else if ("baf2Quest" === dd) {
            const dd = Jd;
            gd(!0 === dd.baf2QuestNuclear), vd.set(dd, function(dd, Jd) {
              var kd, pd, Nd, Wd, Pd;
              const Zd = [];
              for (const [, , Kd, , , , , , od, ld] of dd.baf2QuestSteps) null !== Kd && Zd.push(Kd), Zd.push(...null !== od && void 0 !== od ? od : [], ...null !== ld && void 0 !== ld ? ld : []);
              dd.baf2QuestReward && Zd.push(dd.baf2QuestReward);
              const gd = null === (kd = dd.baf2QuestSide) || void 0 === kd ? void 0 : kd[2][2];
              gd && Zd.push(gd), Zd.push(...null !== (pd = null === (Nd = dd.baf2QuestSide) || void 0 === Nd ? void 0 : Nd[2][8]) && void 0 !== pd ? pd : [], ...null !== (Wd = null === (Pd = dd.baf2QuestSide) || void 0 === Pd ? void 0 : Pd[2][9]) && void 0 !== Wd ? Wd : []);
              for (const [Kd] of null !== (Cd = dd.baf2QuestAlso) && void 0 !== Cd ? Cd : []) {
                var Cd;
                Zd.push(Kd)
              }
              return Jd(Zd)
            }(dd, Gd)), pI(dd.baf2QuestTier)
          } else if ("baf2Route" === dd) ! function(dd, Jd) {
            let {
              baf2RouteCells: kd,
              baf2RouteInto: pd
            } = Jd;
            0 !== kd.length && pd ? dd.setRouteChevrons({
              cells: kd.map(((dd, Jd) => {
                const [Nd, , Wd] = function(dd, Jd, kd) {
                  const pd = kd + 1 < dd.length ? dd[kd + 1] : Jd;
                  return [pd[0] - dd[kd][0], 0, pd[2] - dd[kd][2]]
                }(kd, pd, Jd);
                return {
                  pos: dd,
                  way: [Nd, Wd]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : dd.setRouteChevrons(null)
          }(ed, Jd);
          else if ("baf2QuestBook" === dd) vd.setBook(Jd);
          else if ("baf2Stalls" === dd) Qd.set(Jd.baf2StallCells);
          else if (dd === Rk.o) Od.onMoves(Jd);
          else if (dd === Rk.g) Od.onLines(Jd);
          else if ("baf2Labels" === dd) Md.JG(Jd);
          else if ("baf2DropMap" === dd) vJ({
            kind: "dropMap",
            dropMap: Jd
          }), (0, xN.p)();
          else if ("baf2Islands" === dd) {
            var dJ, JJ;
            const dd = Jd;
            if (Rd.syncIslandEdits(dd.baf2IslandsAnswered), !dd.baf2IslandsOpen && "islands" !== (null === (dJ = Zd.get()) || void 0 === dJ ? void 0 : dJ.kind)) return;
            if (dd.baf2IslandsOpen) {
              var kJ, pJ;
              const Jd = qN.d.get("openEverythingMenuName"),
                kd = Rd.sent() >= OJ,
                pd = "other" !== (GJ = {
                  askedAtMs: LJ,
                  askSent: kd,
                  reaskedAtMs: eJ,
                  nowMs: Date.now(),
                  panel: null !== (kJ = null === (pJ = Zd.get()) || void 0 === pJ ? void 0 : pJ.kind) && void 0 !== kJ ? kJ : null,
                  inGameMenu: qN.d.get("openInGameMenuName"),
                  everythingMenu: null === Jd ? null : Jd === Qk.s.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== dd.baf2IslandsFocusInvite
                }).everythingMenu && (!!GJ.focusInvite || "islands" === GJ.panel && "clientGame" === GJ.inGameMenu || !(GJ.nowMs - GJ.reaskedAtMs < jC) && (GJ.askSent && GJ.nowMs - GJ.askedAtMs < jC ? "core" === GJ.panel && "clientGame" === GJ.inGameMenu && null === GJ.everythingMenu : "shop" === GJ.everythingMenu || null === GJ.inGameMenu));
              if (kd && (LJ = -1 / 0), eJ = -1 / 0, !pd) return void IJ()
            }
            const kd = (WJ = dd.baf2IslandsOpen, KJ = "islands" === (null === (JJ = Zd.get()) || void 0 === JJ ? void 0 : JJ.kind), lJ = RJ, QJ = Date.now(), WJ && !KJ && QJ - lJ < jC);
            vJ({
              kind: "islands",
              islands: dd,
              arrivedAtMs: Date.now(),
              backToCore: XC(Zd.get())
            }), kd && (RJ = -1 / 0, eJ = Date.now(), Rd.send(Vd)), dd.baf2IslandsOpen && ("clientGame" !== qN.d.get("openInGameMenuName") && (0, BN.e)(), (0, xN.p)())
          } else if ("baf2CoopTransfer" === dd) {
            var NJ;
            const dd = Jd;
            dd.baf2TransferOn ? (vJ({
              kind: "transfer",
              transfer: dd,
              arrivedAtMs: Date.now()
            }), (0, xN.p)()) : "transfer" === (null === (NJ = Zd.get()) || void 0 === NJ ? void 0 : NJ.kind) && (0, xN.g)()
          } else "baf2IslandLeft" === dd ? (qd.dropHeld(), null !== Zd.get() && xJ(), "inventory" === qN.d.get("openInGameMenuName") && (0, BN.e)()) : "baf2Arc" === dd ? PJ.JG(ed, Jd) : "baf2Blade" === dd ? ZJ.onBlade(ed, Jd) : "baf2JetFlame" === dd ? gJ.JG(ed, Jd) : "baf2GearPower" === dd && CJ.JG(Jd);
          var WJ, KJ, lJ, QJ, GJ
        }
      };
      return sJ
    }
  },
  38651: (dd, Jd, kd) => {
    function pd(dd, Jd, kd) {
      const pd = new Set,
        Nd = new ResizeObserver(kd),
        Wd = () => {
          const Jd = new Set(document.querySelectorAll(dd));
          let Wd = !1;
          for (const dd of pd) Jd.has(dd) || (Nd.unobserve(dd), pd.delete(dd), Wd = !0);
          for (const dd of Jd) pd.has(dd) || (Nd.observe(dd), Pd.observe(dd, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), pd.add(dd));
          Wd && kd()
        },
        Pd = new MutationObserver((Jd => {
          Jd.some((dd => "attributes" === dd.type)) && kd(), Jd.some((Jd => function(dd, Jd, kd) {
            if ("childList" !== dd.type) return !1;
            for (const pd of dd.addedNodes)
              if (pd instanceof Element && (pd.matches(Jd) || pd.querySelector(Jd))) return !0;
            for (const pd of dd.removedNodes)
              if (pd instanceof Element)
                for (const dd of kd)
                  if (pd.contains(dd)) return !0;
            return !1
          }(Jd, dd, pd))) && Wd()
        }));
      Pd.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Zd of Jd) Nd.observe(Zd);
      return window.addEventListener("resize", kd), Wd(), kd(), () => {
        Nd.disconnect(), Pd.disconnect(), window.removeEventListener("resize", kd)
      }
    }
    kd.d(Jd, {
      e: () => pd
    })
  },
  38637: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      f: () => Wd
    });
    const pd = new WeakMap;

    function Nd(dd) {
      let Jd = pd.get(dd);
      return Jd || (Jd = {
        hidden: dd.hidden,
        x: NaN,
        y: NaN
      }, pd.set(dd, Jd)), Jd
    }

    function Wd(dd, Jd) {
      const kd = Nd(dd);
      kd.hidden !== Jd && (kd.hidden = Jd, dd.hidden = Jd)
    }

    function Pd(dd, Jd, kd) {
      const pd = Nd(dd);
      pd.x === Jd && pd.y === kd || (pd.x = Jd, pd.y = kd, dd.style.translate = `${Jd}vw ${kd}vh`)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);