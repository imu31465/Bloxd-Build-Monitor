export const id = 275;
export const ids = [275];
export const modules = {
  40044: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(40048);
    const Fd = [0, 0, 0];
    class Rd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd;
        this.pool = dd, this.origin = Od, this.count = 0, this.free = []
      }
      take() {
        var dd;
        const Od = null !== (dd = this.free.pop()) && void 0 !== dd ? dd : this.count++;
        return Od >= this.pool.Mt && this.pool.grow(Math.max(2 * this.pool.Mt, Od + 1)), this.hide(Od), Od
      }
      release(dd) {
        this.hide(dd), this.free.push(dd)
      }
      write(dd, Od, md, Fd) {
        const {
          records: Rd
        } = this.pool, {
          origin: Xd
        } = this, Kd = dd * Wd.b;
        Rd[Kd] = Od - Xd[0], Rd[Kd + 1] = md - Xd[1], Rd[Kd + 2] = Fd - Xd[2], Rd[Kd + Wd.f] = 0, this.pool.markDirty(dd)
      }
      hide(dd) {
        this.pool.records[dd * Wd.b + Wd.f] = 1, this.pool.markDirty(dd)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Xd {
      constructor(dd, Od, md) {
        this.api = dd, this.model = Od, this.initialCapacity = md, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(dd) {
        let Od = this.kinds.get(dd);
        if (void 0 === Od) {
          const md = this.api.createInstancePool({
            ...this.model,
            item: dd
          }, this.initialCapacity);
          null === md || void 0 === md || md.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Od = md && new Rd(md, this.origin), this.kinds.set(dd, Od)
        }
        return Od
      }
      follow(dd) {
        const {
          origin: Od
        } = this;
        if (Math.abs(dd[0] - Od[0]) <= 512 && Math.abs(dd[1] - Od[1]) <= 512 && Math.abs(dd[2] - Od[2]) <= 512) return !1;
        Od[0] = Math.floor(dd[0]), Od[1] = Math.floor(dd[1]), Od[2] = Math.floor(dd[2]);
        for (const md of this.kinds.values()) null === md || void 0 === md || md.pool.setOrigin(Od[0], Od[1], Od[2]);
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
  40062: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      g: () => Kd,
      h: () => hd
    });
    const Wd = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Fd = [0, 1, 2, 0, 2, 3],
      Rd = [4, 5];

    function Xd(dd, Od, md, Wd, Fd) {
      for (let Xd = 0; Xd < 6; Xd++) Rd.includes(Xd) === Fd && vd(dd, Od, md, Wd, Xd)
    }

    function Kd(dd, Od, md, Wd) {
      for (let Fd = 0; Fd < 6; Fd++) vd(dd, Od, md, Wd, Fd)
    }

    function hd(dd, Od, md, Rd, Xd) {
      for (let Kd = 0; Kd < 6; Kd++)
        for (const hd of [0, 1]) {
          const [vd, Qd, td] = [hd + 2, hd + 1, (hd + 3) % 4], od = dd.length / 3;
          for (const [Od, Fd] of [
              [hd, Qd],
              [vd, Qd],
              [vd, td],
              [hd, td]
            ])
            for (let hd = 0; hd < 3; hd++) {
              const vd = Wd[3 * (4 * Kd + Od) + hd],
                Qd = Wd[3 * (4 * Kd + Fd) + hd];
              dd.push((vd + (Qd - vd) * Xd) * Rd / 2 + md[hd])
            }
          for (const dd of Fd) Od.push(od + dd)
        }
    }

    function vd(dd, Od, md, Rd, Xd) {
      let [Kd, hd, vd] = md, [Qd, td, od] = Rd;
      const Nd = dd.length / 3;
      for (let Fd = 4 * Xd; Fd < 4 * Xd + 4; Fd++) dd.push(Wd[3 * Fd] * Qd / 2 + Kd, Wd[3 * Fd + 1] * td / 2 + hd, Wd[3 * Fd + 2] * od / 2 + vd);
      for (const Wd of Fd) Od.push(Nd + Wd)
    }
  },
  40016: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => tT
    });
    var Wd = md(66);
    const Fd = [{
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
      Rd = 10;
    let Xd = !0;

    function Kd() {
      return Xd
    }

    function hd(dd) {
      Xd = dd
    }
    const vd = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Qd() {
      return Xd ? Fd.length : Rd
    }

    function td(dd) {
      var Od, md;
      return null !== (Od = null === (md = Fd[dd - 1]) || void 0 === md ? void 0 : md.reactorTier) && void 0 !== Od ? Od : 0
    }

    function od(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : td(dd) > 0;
      return md && !Xd ? "hidden" : dd <= Od ? "open" : md ? Od < 5 ? "hidden" : Od < Rd ? "teaser" : "locked" : "locked"
    }

    function Nd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Wd,
        n: Fd
      } = yd(dd);
      return {
        key: Od[Wd],
        params: {
          [Wd]: md ? String(Fd) : Fd
        }
      }
    }
    const qd = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Hd(dd, Od) {
      return td(dd) > 0 && Od < Rd
    }

    function yd(dd) {
      const Od = td(dd);
      if (Od > 0) return {
        kind: "atomic",
        n: Od,
        short: `A${Od}`
      };
      const md = function(dd) {
        return dd >= 6 && dd <= 10 ? dd - 6 + 1 : 0
      }(dd);
      return md > 0 ? {
        kind: "stage",
        n: md,
        short: `S${md}`
      } : {
        kind: "tier",
        n: dd,
        short: String(dd)
      }
    }

    function bd(dd) {
      return Fd[Math.max(1, Math.min(dd, Fd.length)) - 1]
    }

    function Td(dd, Od) {
      return dd < Od ? function(dd) {
        var Od;
        return null !== (Od = Fd[dd]) && void 0 !== Od ? Od : null
      }(dd) : null
    }
    const pd = "baf2coresubmit",
      Yd = "baf2corebankpause",
      gd = "baf2coredeposit",
      wd = "baf2corechargepause";

    function Ed(dd) {
      var Od;
      return null !== (Od = dd.baf2CoreOpen) && void 0 !== Od ? Od : Rd
    }
    const Jd = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function Ud(dd) {
      return Jd.includes(dd)
    }
    const xd = (dd, Od) => Od.map((Od => [Od, [dd]])),
      Bd = Object.fromEntries([...xd("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...xd("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...xd("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...xd("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...xd("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...xd("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...xd("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...xd("Parts Bench", ["Focus Lens"]), ...xd("Machine Bench", ["Laser", "Collider"]), ...xd("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...xd("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...xd("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...xd("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...xd("Tool Bench", ["Mob Cage"]), ...xd("Tool Bench", ["Pocket Terminal"]), ...xd("Tool Bench", ["Comet Beacon"]), ...xd("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Sd(dd) {
      var Od;
      return null !== (Od = Bd[dd]) && void 0 !== Od ? Od : ["Workbench"]
    }

    function sd(dd) {
      return Sd(dd)[0]
    }
    Fd.slice(1).map(((dd, Od) => `Core Tier ${Od+2}`));
    var ud = md(5733);
    const Vd = ["on", "hud", "off"];

    function Ad(dd) {
      return "on" === dd
    }
    var rd = md(405);
    const Gd = "Mob Farm",
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
      Ld = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Pd = {
        1: 20,
        2: 60,
        3: 120
      },
      zd = "baf2farmvoid",
      cd = "Caged ",
      jd = " Spawner Block";

    function Dd(dd) {
      return `lifeform:${(0,rd.te)(dd)}`
    }

    function ed(dd) {
      if (!dd) return null;
      if (dd.startsWith(cd)) {
        const Od = dd.slice(6);
        return Ld.includes(Od) ? Od : null
      }
      if (dd.endsWith(jd)) {
        const Od = dd.slice(0, -14);
        return void 0 !== nd[Od] ? Od : null
      }
      return null
    }

    function Id(dd) {
      return !0 === dd.mobFarm
    }

    function ld(dd, Od) {
      return Pd[nd[Od]] * dd.opMs / 1e3
    }
    const Cd = new Map;
    const Zd = "baf2islands",
      kd = "baf2islandnew";

    function fd(dd) {
      const Od = Fd.findIndex((Od => Od.unlocks.includes(dd)));
      return Od < 0 ? 1 : Od + 1
    }

    function Md(dd) {
      return Math.floor(dd).toLocaleString("en-US")
    }
    var dO = md(39958);
    const OO = "baf2terminaltake",
      mO = "baf2terminalput",
      WO = ["one", "stack", "fill"];

    function FO(dd, Od, md) {
      return `${OO} ${dd} ${Od} ${md}`
    }

    function RO(dd, Od, md) {
      return `${mO} ${dd} ${Od} ${md}`
    }

    function XO(dd) {
      return `${mO} ${dd}`
    }
    const KO = [
      [`${OO} `, "take"],
      [`${mO} `, "put"]
    ];

    function hO(dd) {
      const Od = KO.find((Od => {
        let [md] = Od;
        return dd.startsWith(md)
      }));
      if (!Od) return null;
      const [md, Wd] = Od, [Fd, Rd, ...Xd] = dd.slice(md.length).trim().split(" "), Kd = Number(Fd);
      if (!Number.isSafeInteger(Kd) || Kd <= 0) return null;
      if ("put" === Wd && void 0 === Rd) return {
        kind: "putAll",
        seq: Kd
      };
      const hd = function(dd) {
        if (WO.includes(dd)) return dd;
        const Od = Number(dd);
        return /^\d+$/.test(dd) && Number.isSafeInteger(Od) && Od > 0 ? Od : null
      }(null !== Rd && void 0 !== Rd ? Rd : "");
      return null === hd || 0 === Xd.length ? null : {
        kind: Wd,
        seq: Kd,
        mode: hd,
        item: Xd.join(" ")
      }
    }

    function vO(dd, Od) {
      const md = "number" === typeof dd ? dd : "one" === dd ? 1 : "stack" === dd ? 99 : Od;
      return Math.min(Od, md)
    }

    function QO(dd, Od) {
      const md = dd => "number" === typeof dd ? dd : "one" === dd ? 1 : 99;
      return "fill" === dd || "fill" === Od ? "fill" : md(dd) + md(Od)
    }

    function tO(dd, Od) {
      const md = hO(dd),
        Wd = hO(Od),
        Fd = md && Wd ? function(dd, Od) {
          return "take" === dd.kind || "take" === Od.kind ? "take" === dd.kind && "take" === Od.kind && dd.item === Od.item ? {
            ...Od,
            mode: QO(dd.mode, Od.mode)
          } : null : "putAll" === dd.kind || "putAll" === Od.kind ? {
            kind: "putAll",
            seq: Od.seq
          } : dd.item === Od.item ? {
            ...Od,
            mode: QO(dd.mode, Od.mode)
          } : null
        }(md, Wd) : null;
      return Fd ? "putAll" === (Rd = Fd).kind ? XO(Rd.seq) : "put" === Rd.kind ? RO(Rd.seq, Rd.mode, Rd.item) : FO(Rd.seq, Rd.mode, Rd.item) : null;
      var Rd
    }
    const oO = "baf2rx";

    function NO(dd, Od) {
      for (var md = arguments.length, Wd = new Array(md > 2 ? md - 2 : 0), Fd = 2; Fd < md; Fd++) Wd[Fd - 2] = arguments[Fd];
      return [oO, dd[0], dd[1], dd[2], Od, ...Wd].join(" ")
    }
    const qO = 2,
      HO = 4,
      yO = 8,
      bO = 16,
      TO = 32,
      pO = 64,
      YO = 128,
      gO = 256,
      wO = 512,
      aO = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      EO = [{
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
    const JO = "Biomass",
      UO = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function xO(dd) {
      return {
        input: JO,
        inputAmount: 1,
        output: dd,
        outputAmount: 1
      }
    }
    const BO = "baf2synth",
      SO = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      sO = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      uO = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      VO = function(dd, Od) {
        return {
          input: dd,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: Od,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      iO = function(dd, Od) {
        return {
          ...VO(dd, Od, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      AO = sO.map((dd => iO(dd, "Biomass", 2))),
      rO = {
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
          recipes: [VO("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), VO("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), VO("Raw Gold", "Gold Grit", 2), VO("Messy Stone", "Sand"), VO("Gravel", "Sand"), VO("Raw Voltite", "Voltite Dust", 2), VO("Moonstone", "Moonstone Dust", 4), VO("Wheat Seeds", "Fertiliser"), VO("Raw Uranium", "Uranium Grit", 2), iO("Mossy Messy Stone", "Sand"), ...AO],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [VO("Iron Grit", "Iron Bar"), VO("Copper Grit", "Copper Bar"), VO("Gold Grit", "Gold Bar"), VO("Raw Iron", "Iron Bar"), VO("Raw Copper", "Copper Bar"), VO("Raw Gold", "Gold Bar"), VO("Sand", "Glass"), VO("Messy Stone", "Stone"), ...rd.Pc.map((dd => VO(dd, "Charcoal", 1, 4))), VO("Wheat", "Bread", 1, 2), ...sO.map(((dd, Od) => iO(dd, uO[Od])))],
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
          recipes: [VO("Iron Bar", "Iron Plate"), VO("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [VO("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [VO("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [VO("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), VO("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), VO("Raw Gold", "Gold Grit", 3), VO("Raw Voltite", "Voltite Dust", 3), VO("Messy Stone", "Sand", 2), VO("Gravel", "Sand", 2), VO("Moonstone", "Moonstone Dust", 6), VO("Raw Uranium", "Uranium Grit", 3), iO("Mossy Messy Stone", "Sand", 2), ...AO],
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
          table: aO
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [VO("Coal", "Diamond", 1, 24), VO("Voltite Dust", "Moonstone", 1, 12)],
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
        ...dO.i
      },
      GO = {
        Crusher: [VO("Spent Pellet", "Glow Dust"), VO("Wheat Seeds", "Biomass"), VO("Wheat", "Biomass"), VO("Dead Bush", "Biomass"), VO("Dusk Moss", "Biomass"), VO("Rotten Flesh", "Biomass"), VO("Bone", "Biomass", 2)],
        "Shatter Mill": [VO("Spent Pellet", "Glow Dust"), VO("Wheat Seeds", "Biomass"), VO("Wheat", "Biomass"), VO("Dead Bush", "Biomass"), VO("Dusk Moss", "Biomass"), VO("Rotten Flesh", "Biomass"), VO("Bone", "Biomass", 2), ...rd.Pc.map((dd => VO(dd, "Biomass")))],
        Smelter: [VO("Biomass", "Fertiliser", 2)],
        Press: [VO("Coal", "Graphite", 1, 4)]
      },
      nO = "Power Coupler",
      LO = "Advanced Coupler",
      PO = "Nova Coupler",
      zO = [{
        item: nO,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: LO,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: PO,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const cO = new Map;

    function jO(dd) {
      var Od, md;
      return null !== (Od = null !== (md = dd.fuelSlot) && void 0 !== md ? md : dd.couplerSlot) && void 0 !== Od ? Od : null
    }

    function DO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!dd.couplable) throw new Error(`${dd.kind} takes no Power Coupler`);
      let md = cO.get(dd);
      md || (md = [], cO.set(dd, md));
      let Wd = md[Od];
      if (!Wd) {
        var Fd;
        const {
          divisor: Rd,
          powerPerS: Xd
        } = zO[Od - 1], Kd = dd.opMs / Rd, hd = void 0 !== dd.fluidMade || void 0 !== dd.cryoMade ? dd.powerPerOp : Xd * Kd / 1e3;
        Wd = {
          ...dd,
          fuelSlot: null,
          couplerSlot: null !== (Fd = jO(dd)) && void 0 !== Fd ? Fd : void 0,
          opMs: Kd,
          powerPerOp: hd,
          coupled: !0
        }, Od > 1 && (Wd = {
          ...Wd,
          couplerLevel: Od
        }), md[Od] = Wd
      }
      return Wd
    }
    const eO = new Map;
    const IO = new Map;

    function lO(dd, Od) {
      if (null === Od || (md = Od, !UO.includes(md))) return dd;
      var md;
      let Wd = IO.get(Od);
      return Wd || (Wd = {
        ...dd,
        recipes: [xO(Od)]
      }, IO.set(Od, Wd)), Wd
    }

    function CO(dd) {
      return !0 === dd.synth
    }
    const ZO = (dd, Od, md, Wd) => ({
        output: dd,
        outputAmount: Od,
        tier: md,
        inputs: Wd.map((dd => {
          let [Od, md] = dd;
          return {
            item: Od,
            amount: md
          }
        }))
      }),
      kO = Object.fromEntries([ZO("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), ZO("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), ZO("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ZO("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), ZO("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), ZO("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), ZO("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), ZO("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), ZO("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), ZO("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), ZO("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), ZO("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), ZO("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), ZO("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), ZO("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ZO("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), ZO("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ZO("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), ZO("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ZO("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), ZO("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), ZO("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), ZO("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), ZO("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), ZO("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), ZO("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), ZO("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), ZO("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), ZO("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), ZO("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((dd => [dd.output, dd]))),
      fO = new Map;

    function MO(dd, Od) {
      let md = rO[dd];
      if (Od.atomic && (md = function(dd) {
          const Od = GO[dd.kind];
          if (!Od) return dd;
          let md = eO.get(dd.kind);
          if (!md) {
            const Wd = new Set(Od.map((dd => dd.input))),
              Fd = dd.recipes.filter((dd => !Wd.has(dd.input)));
            md = {
              ...dd,
              recipes: [...Fd, ...Od]
            }, eO.set(dd.kind, md)
          }
          return md
        }(md)), md.synth) return lO(md, Od.taught);
      if (Od.coupled && md.couplable) return DO(md, Od.level);
      const Wd = md.inputSlots && null !== Od.taught ? kO[Od.taught] : void 0;
      if (!Wd) return md;
      const Fd = `${dd}|${Wd.output}`;
      let Rd = fO.get(Fd);
      return Rd || (Rd = {
        ...md,
        bench: Wd
      }, fO.set(Fd, Rd)), Rd
    }
    const dm = ["Diamond", "Moonstone"];

    function Om(dd) {
      return new Set(dd.flatMap((dd => dd.bonus ? [dd.output, dd.bonus.item] : [dd.output])).filter((dd => !dm.includes(dd))))
    }
    const mm = Object.values(rO).flatMap((dd => dd.recipes));
    Om(mm.filter((dd => !0 !== dd.nuclear))), Om([...mm.filter((dd => !0 === dd.nuclear)), ...Object.values(GO).flat()]);

    function Wm(dd) {
      return null === dd.inputSlot && void 0 === dd.inputSlots && void 0 === dd.powerMade && void 0 === dd.fluidMade && !dd.treeCutter && void 0 === dd.table
    }

    function Fm(dd) {
      return !0 === dd.treeCutter
    }
    const Rm = ["Voltite Cell"];

    function Xm(dd) {
      var Od, md;
      return null !== (Od = null === (md = dd.fuels) || void 0 === md ? void 0 : md.some((dd => Rm.includes(dd)))) && void 0 !== Od && Od
    }
    const Km = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(rd.Pc.map((dd => [dd, 8e3]))),
        ...Object.fromEntries(rd.xd.map((dd => [dd, 2e3]))),
        "Voltite Cell": 12e4
      },
      hm = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Qm = {
        "Uranium Deposit": 4e3
      };

    function tm(dd) {
      var Od;
      return null !== (Od = Object.keys(hm).find((Od => hm[Od] === dd))) && void 0 !== Od ? Od : null
    }

    function om(dd) {
      return SO.includes(dd)
    }

    function Nm(dd) {
      return !0 !== dd.nuclear || Kd()
    }
    var qm = md(387);
    var Hm = md(5804),
      ym = md(5746),
      bm = md(5813),
      Tm = md(5796);
    const pm = "Reactor Controller",
      Ym = "Reactor Port",
      gm = "Battery Cell",
      wm = ["fuel", "water", "waste"],
      am = {
        fuel: Ym,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Em = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      Jm = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Um = "Reactor Frame",
      xm = "Reactor Glass",
      Bm = {
        edge: [Um],
        cap: [xm, Ym],
        wall: [xm, Ym],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [pm]
      },
      Sm = {
        edge: [gm],
        cap: [gm],
        wall: [gm],
        inside: [gm],
        ctrl: [gm]
      },
      sm = ["edge", "cap", "wall", "inside"],
      um = ["Reactor Slag"];

    function Vm(dd) {
      return um.includes(im(dd))
    }

    function im(dd) {
      const Od = dd.indexOf("|");
      return Od < 0 ? dd : dd.slice(0, Od)
    }

    function Am(dd) {
      return im(dd) === pm ? "reactor" : null
    }

    function rm(dd) {
      return im(dd) !== Ym ? null : dd.endsWith("|Water") ? "water" : dd.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Gm(dd) {
      const Od = rm(dd);
      return null === Od ? null : Pm(am[wm[(wm.indexOf(Od) + 1) % wm.length]], function(dd) {
        return dd.includes(nm)
      }(dd))
    }
    const nm = "|meta|rot1|Formed",
      Lm = new Set([Um, xm, Ym]);

    function Pm(dd, Od) {
      var md;
      const Wd = im(dd);
      if (!Lm.has(Wd)) return dd;
      if (Wd !== Ym) return Od ? Wd + nm : Wd;
      const Fd = null !== (md = rm(dd)) && void 0 !== md ? md : "fuel";
      return Od ? "fuel" === Fd ? Wd + nm : `${Wd}${nm}|${"water"===Fd?"Water":"Waste"}` : am[Fd]
    }

    function zm(dd, Od) {
      const md = XW(dd, Od);
      if ("Air" === md) return !1;
      const Wd = "reactor" === dd ? Bm : Sm;
      return sm.some((dd => Wd[dd].includes(md))) || "reactor" === dd && um.includes(md)
    }

    function cm(dd) {
      return Jm[dd]
    }

    function jm(dd) {
      var Od;
      return null !== (Od = Em[dd]) && void 0 !== Od ? Od : Em[1]
    }

    function Dm(dd) {
      const [Od, , md] = jm(dd);
      return [md, 0, -Od]
    }

    function em(dd, Od, md, Wd, Fd, Rd) {
      return {
        ctrl: [dd[0], dd[1], dd[2]],
        rot: Em[Od] ? Od : 1,
        w: md,
        h: Wd,
        d: Fd,
        cu: Rd[0],
        cv: Rd[1]
      }
    }

    function Im(dd, Od) {
      return "reactor" === dd ? [Math.floor((Od - 1) / 2), 0] : [0, 0]
    }

    function lm(dd, Od, md, Wd, Fd) {
      let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd.rot;
      if (md === dd.w && Wd === dd.h && Fd === dd.d && Rd === dd.rot) return dd;
      const [Xd] = Im(Od, dd.w);
      if (dd.cu === Xd && dd.cv <= 1) return em(dd.ctrl, Rd, md, Wd, Fd, Im(Od, md));
      const Kd = (dd, Od) => Math.max(1, Math.min(Od, dd));
      return em(dd.ctrl, Rd, md, Wd, Fd, [Kd(dd.cu, md - 2), 0 === dd.cv ? 0 : Kd(dd.cv, Wd - 2)])
    }
    const Cm = 11,
      Zm = 2 * Cm + 1;
    new Uint8Array(Zm * Zm * Zm);

    function km(dd) {
      return dd.w * dd.h * dd.d
    }

    function fm(dd) {
      const Od = Dm(dd.rot);
      return [dd.ctrl[0] - Od[0] * dd.cu, dd.ctrl[1] - dd.cv, dd.ctrl[2] - Od[2] * dd.cu]
    }

    function Mm(dd) {
      return dd.cv * dd.d * dd.w + dd.cu
    }

    function dW(dd, Od) {
      const md = Od % dd.w,
        Wd = Math.floor(Od / dd.w) % dd.d;
      return [md, Math.floor(Od / (dd.w * dd.d)), Wd]
    }

    function OW(dd, Od) {
      const [md, Wd, Fd] = dW(dd, Od), Rd = fm(dd), Xd = jm(dd.rot), Kd = Dm(dd.rot);
      return [Rd[0] + Kd[0] * md - Xd[0] * Fd, Rd[1] + Wd, Rd[2] + Kd[2] * md - Xd[2] * Fd]
    }

    function mW(dd, Od) {
      const md = fm(dd),
        Wd = jm(dd.rot),
        Fd = Dm(dd.rot),
        Rd = Od[0] - md[0],
        Xd = Od[2] - md[2],
        Kd = Rd * Fd[0] + Xd * Fd[2],
        hd = -(Rd * Wd[0] + Xd * Wd[2]),
        vd = Od[1] - md[1];
      return Kd < 0 || Kd >= dd.w || vd < 0 || vd >= dd.h || hd < 0 || hd >= dd.d ? -1 : (vd * dd.d + hd) * dd.w + Kd
    }

    function WW(dd, Od) {
      if (Od === Mm(dd)) return "ctrl";
      const [md, Wd, Fd] = dW(dd, Od), Rd = 0 === Wd || Wd === dd.h - 1, Xd = Number(0 === md || md === dd.w - 1) + Number(Rd) + Number(0 === Fd || Fd === dd.d - 1);
      return Xd >= 2 ? "edge" : 1 === Xd ? Rd ? "cap" : "wall" : "inside"
    }

    function FW(dd, Od) {
      const [md, Wd, Fd] = dW(dd, Od);
      return 0 === md || md === dd.w - 1 || 0 === Wd || Wd === dd.h - 1 || 0 === Fd || Fd === dd.d - 1 ? -1 : ((Wd - 1) * (dd.d - 2) + (Fd - 1)) * (dd.w - 2) + (md - 1)
    }

    function RW(dd, Od) {
      const md = dd.w - 2,
        Wd = dd.d - 2,
        Fd = Od % md + 1,
        Rd = Math.floor(Od / md) % Wd + 1;
      return ((Math.floor(Od / (md * Wd)) + 1) * dd.d + Rd) * dd.w + Fd
    }

    function XW(dd, Od) {
      const md = im(Od);
      return "reactor" === dd && md === pm ? Um : md
    }

    function KW(dd, Od, md) {
      const Wd = "ctrl" === Od ? im(md) : XW(dd, md);
      return ("reactor" === dd ? Bm : Sm)[Od].includes(Wd) ? "ok" : "Air" === Wd ? "missing" : zm(dd, md) ? "wrong" : "blocked"
    }

    function hW(dd, Od) {
      return "battery" === dd ? gm : "inside" === Od ? null : function(dd, Od) {
        if ("inside" === Od || "ctrl" === Od || "battery" === dd) return null;
        return "edge" === Od ? Um : xm
      }(dd, Od)
    }
    const vW = {
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
      QW = "Collider",
      tW = "Laser",
      oW = "Star Alloy",
      NW = "Glow Dust",
      qW = [QW, "_Collider Focus"];

    function HW(dd) {
      return qW.indexOf(im(dd))
    }

    function yW(dd) {
      return im(dd) === tW
    }

    function bW(dd) {
      return [
        [dd[0], dd[1], dd[2]],
        [dd[0], dd[1] + 1, dd[2]]
      ]
    }
    const TW = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function pW(dd, Od, md) {
      const Wd = TW[Od];
      return [dd[0] + Wd[0] * md, dd[1], dd[2] + Wd[2] * md]
    }

    function YW(dd, Od) {
      if (Od[1] !== dd[1]) return null;
      const md = Od[0] - dd[0],
        Wd = Od[2] - dd[2];
      if (0 !== md === (0 !== Wd)) return null;
      const Fd = Math.abs(md + Wd);
      if (Fd > vW.LASER_D) return null;
      return {
        dir: Wd < 0 ? 0 : md > 0 ? 1 : Wd > 0 ? 2 : 3,
        UX: Fd
      }
    }

    function gW(dd, Od, md) {
      const Wd = Od => Math.abs(dd[0] - Od[0]) <= 1 && Math.abs(dd[1] - Od[1]) <= 1;
      return Wd(Od) || Wd(md)
    }

    function wW(dd, Od) {
      return function(dd, Od, md, Wd) {
        return [0, 1, 2, 3].map((Fd => {
          for (let Rd = 1; Rd <= vW.LASER_D; Rd++) {
            const Xd = pW(dd, Fd, Rd);
            if (gW([Xd[0], Xd[2]], Od, md) || !Wd(Xd)) return !1
          }
          return !0
        }))
      }(bW(dd)[1], Od.spawnXZ, Od.coreXZ, (dd => dd[1] >= Hm.p && dd[1] < Hm.p + Hm.t && dd[0] >= Od.minXZ[0] && dd[0] <= Od.maxXZ[0] && dd[2] >= Od.minXZ[1] && dd[2] <= Od.maxXZ[1]))
    }
    const aW = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function EW(dd) {
      return Math.max(48 + 16 * dd, bd(dd).machineAllowance)
    }
    const JW = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function UW(dd) {
      const Od = dd.split("|")[0];
      return JW.includes(Od) ? "Solar Panel" : Od === bm.d ? "Fluid Pipe" : HW(Od) >= 0 ? "Collider" : (md = Od, aW.includes(md) ? Od : null);
      var md
    }
    const xW = "buildAFactory2Game:solarPanelDescription";
    const BW = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function SW(dd, Od) {
      var md;
      return null !== (md = BW.find((md => {
        var Wd;
        return (null !== (Wd = dd.level(md)) && void 0 !== Wd ? Wd : 0) >= Od
      }))) && void 0 !== md ? md : null
    }
    const sW = "buildAFactory2Game:";
    let uW = null;
    const VW = {
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
      iW = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      AW = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      rW = {
        "Loot Chest": `${sW}lookRuinChestName`
      };

    function GW(dd, Od) {
      var md, Wd, Fd;
      let Rd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Od;
      if ("Solar Panel" === UW(Od)) return {
        name: (0, rd.Ce)(dd.displayName("Solar Panel")),
        detail: xW,
        detailItem: null
      };
      const Xd = Od.endsWith(" Ore"),
        hd = (uW ??= new Set([...Object.keys((0, ym.f)()), ...Object.keys((0, bm.t)())].map((dd => dd.split("|")[0]))), uW).has(Od),
        vd = Xd || hd ? null : function(dd) {
          var Od;
          return dd.endsWith(" Log") && !dd.startsWith("Barkless ") ? "lookLog" : dd.endsWith(" Sapling") ? "lookSapling" : dd.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (Od = VW[dd]) && void 0 !== Od ? Od : null
        }(Od);
      if (!dd.isBlock(Od) || !Xd && !hd && null === vd) return null;
      const Qd = null !== (md = rW[Od]) && void 0 !== md ? md : (0, rd.Kb)(Od, null !== (Wd = dd.displayName(Rd)) && void 0 !== Wd ? Wd : dd.displayName(Od));
      if (null !== vd) return {
        name: Qd,
        detail: `${sW}${vd}`,
        detailItem: null
      };
      const td = null !== (Fd = iW[Od]) && void 0 !== Fd ? Fd : Kd() ? AW[Od] : void 0;
      if (hd && void 0 !== td) return {
        name: Qd,
        detail: `${sW}${td}`,
        detailItem: null
      };
      const od = hm[Od];
      if (void 0 !== od) return {
        name: Qd,
        detail: `${sW}lookDeposit`,
        detailItem: (0, rd.Kb)(od, dd.displayName(od))
      };
      const Nd = dd.harvestLevel(Od);
      if (Xd && "rock" === dd.harvestType(Od) && 0 !== Nd) {
        const Od = SW(dd, null !== Nd && void 0 !== Nd ? Nd : 0);
        if (Od === BW[0]) return {
          name: Qd,
          detail: `${sW}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== Od) return {
          name: Qd,
          detail: `${sW}lookPickaxe`,
          detailItem: (0, rd.Kb)(Od, dd.displayName(Od))
        }
      }
      return {
        name: Qd,
        detail: (0, rd.Ce)(dd.description(Od)),
        detailItem: null
      }
    }

    function nW(dd) {
      return dd < Hm.p - 24
    }
    const LW = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const PW = "Wrench",
      zW = "Nova Wrench";

    function cW(dd) {
      return dd === PW || dd === zW
    }
    const jW = [...Hm.N, "Belt Lift", "Belt Drop"];
    const DW = ["Belt Lift", "Belt Drop"],
      eW = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function IW(dd) {
      return dd.split("|")[0]
    }

    function lW(dd) {
      const Od = /\|rot(\d)/.exec(dd);
      return Od ? Number(Od[1]) : 1
    }

    function CW(dd) {
      return dd % 4 + 1
    }

    function ZW(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === Od && "" === md ? dd : `${dd}|meta|rot${Od}${md}`
    }

    function kW(dd) {
      return IW(dd) === Hm.B ? (0, Hm.X)(dd) ? "gateRight" : "gateLeft" : (0, Hm.$)(dd)
    }

    function fW(dd) {
      const Od = IW(dd),
        md = lW(dd);
      if (Hm.N.includes(Od)) return (0, Hm.P)(Od, CW(md), null);
      if (Od === Hm.i) return (0, Hm.fb)(CW(md), (0, Hm.Z)(dd));
      if (Od === Hm.F) {
        const Wd = eW[(0, Hm.$)(dd)];
        return null === Wd ? ZW(Od, CW(md)) : ZW(Od, md, Hm.J[Wd])
      }
      return Od === Hm.B ? (0, Hm.X)(dd) ? ZW(Od, CW(md)) : ZW(Od, md, Hm.m) : Tm.e.includes(Od) && !DW.includes(Od) || om(Od) ? ZW(Od, CW(md)) : null
    }

    function MW(dd) {
      return Tm.e.includes(dd) || om(dd) || null !== UW(dd)
    }

    function dF(dd) {
      return "Solar Panel" === UW(dd)
    }
    const OF = "buildAFactory2Game:",
      mF = {
        leftFront: `${OF}lookSplitDetail_leftFront`,
        frontRight: `${OF}lookSplitDetail_frontRight`,
        gateRight: `${OF}lookGateDetail_gateRight`
      };

    function WF(dd, Od) {
      var md;
      let Wd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Fd = kW(dd),
        Rd = null === Fd ? null : `${OF}${Fd.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Fd}`,
        Xd = null === Fd ? null : null !== (md = mF[Fd]) && void 0 !== md ? md : null;
      if (cW(Od) && Wd) {
        const md = IW(dd);
        return Od === zW && Kd() && function(dd) {
          return jW.includes(IW(dd))
        }(dd) ? {
          mode: Rd,
          detail: Xd,
          next: `${OF}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Rd,
          detail: Xd,
          next: MW(md) && !dF(md) ? `${OF}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const hd = cW(Od) ? fW(dd) : null;
      if (null === hd) return {
        mode: Rd,
        detail: Xd,
        next: null,
        nextState: null
      };
      const vd = kW(hd);
      return null === vd || lW(hd) !== lW(dd) ? {
        mode: Rd,
        detail: Xd,
        next: `${OF}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Rd,
        detail: Xd,
        next: `${OF}lookWrenchNext`,
        nextState: `${OF}lookWrenchState_${vd}`
      }
    }
    const FF = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const RF = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function XF(dd) {
      return [0, 1, 2, 3].map((Od => 0 !== (dd & 1 << Od)))
    }

    function KF(dd) {
      const Od = [];
      for (let md = 8; md + 2 < dd.length; md += 3) Od.push([dd[md], dd[md + 1], dd[md + 2]]);
      return {
        focus: [dd[0], dd[1], dd[2]],
        lasers: XF(dd[3]),
        open: XF(dd[4]),
        live: XF(dd[5]),
        on: 1 === dd[6],
        state: RF[dd[7]],
        blockers: Od
      }
    }
    const hF = "Arc Caster",
      vF = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      QF = (Object.values(vF), "Jet Chestplate"),
      tF = "Nova Jet Chestplate",
      oF = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      NF = Object.values(oF);

    function qF(dd, Od, md) {
      return Math.min(function(dd) {
        return Kd() && td(dd) >= 5 ? 20 : 10
      }(md), Math.floor(function(dd, Od) {
        return Math.max(0, dd) + (Kd() ? Math.max(0, Od) : 0)
      }(dd, Od) / 5))
    }

    function HF(dd, Od, md) {
      const Wd = qF(Od, md, dd),
        Fd = td(dd),
        Rd = (Fd >= 3 ? 55 : Fd >= 1 ? 50 : dd >= 8 ? 45 : 30) + Wd,
        Xd = Math.max(100 + Wd, 2 * Rd);
      return {
        arcDamage: Rd,
        arcPierce: dd >= 7 ? 2 : 1,
        arcChain: dd >= 10,
        barrierMax: (Fd >= 4 ? 100 : Fd >= 2 ? 90 : dd >= 9 ? 80 : dd >= 6 ? 60 : 40) + 5 * Wd,
        barrierRegenPerS: Fd >= 5 ? 20 : dd >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Wd,
        novaShieldRegenPerS: 32,
        bladeDamage: Xd,
        bladePunch: Math.round(.5 * Xd),
        forgeRank: Wd
      }
    }
    const yF = {
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
    var bF = md(38382),
      TF = md(3432),
      pF = md(3428),
      YF = md(29),
      gF = md(1765),
      wF = md(1155),
      aF = md.n(wF);

    function EF(dd) {
      return !0 === dd.field
    }
    const JF = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function UF(dd) {
      return JF.has(dd) ? `buildAFactory2Game:itemPlural_${(0,rd.te)(dd)}` : null
    }
    var xF = md(1238),
      BF = md(1443),
      SF = md(2079),
      sF = md(2060),
      uF = md(1503),
      VF = md(38375),
      iF = md(32),
      AF = md(38370);
    const rF = "baf2QuestView",
      GF = "baf2PlayerY",
      nF = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class LF {
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
      set(dd, Od) {
        var md, Wd, Fd, Rd, Xd, Kd, hd, vd;
        const Qd = JSON.stringify(dd.baf2QuestName) === JSON.stringify(this.view.name),
          td = new Set(this.view.rows.filter((dd => dd.done)).map((dd => dd.id))),
          od = new Set(this.view.rows.filter((dd => dd.justFinished)).map((dd => dd.id))),
          Nd = dd.baf2QuestSide,
          qd = null !== Nd && !0 === dd.baf2QuestSideFocus;
        let Hd = !1,
          yd = 0;
        const bd = dd.baf2QuestSteps.map((dd => {
            const Od = lF(dd, nF.has(dd[0]) ? dd[0] : "" + yd++),
              md = Qd && Od.done && !td.has(Od.id);
            return Od.justFinished = md || Qd && Od.done && od.has(Od.id), Hd ||= md, Od
          })),
          Td = IF(bd);
        Td >= 0 && !qd && (bd[Td].current = !0);
        const pd = !Qd && null !== dd.baf2QuestName,
          Yd = JSON.stringify(Nd && [Nd[0], Nd[1]]),
          gd = Yd === JSON.stringify(null !== (md = null === (Wd = this.view.side) || void 0 === Wd ? void 0 : Wd.name) && void 0 !== md ? md : null),
          wd = null !== Nd && !this.sidesSeen.has(Yd);
        wd && this.sidesSeen.add(Yd), this.serverTutorial = null !== (Fd = dd.baf2QuestTutorial) && void 0 !== Fd ? Fd : "on", (null !== (Rd = dd.baf2QuestTutorialSeq) && void 0 !== Rd ? Rd : 0) >= this.pickSeq && this.endPick();
        const Ed = !Qd || !gd || dd.baf2QuestTier !== this.view.tier;
        this.view = {
          name: dd.baf2QuestName,
          rows: bd,
          reward: dd.baf2QuestReward,
          goal: dd.baf2QuestGoal,
          pulse: this.view.pulse + (Hd || pd ? 1 : 0),
          itemNames: Od,
          side: Nd && {
            name: [Nd[0], Nd[1]],
            row: {
              ...lF(Nd[2], "side"),
              current: qd
            },
            goal: null !== (Xd = Nd[3]) && void 0 !== Xd ? Xd : null
          },
          sideCameUpAt: wd ? Date.now() : this.view.sideCameUpAt,
          tier: dd.baf2QuestTier,
          core: dd.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (Kd = dd.baf2QuestAlso) && void 0 !== Kd ? Kd : [],
          depth: null !== (hd = dd.baf2QuestDepth) && void 0 !== hd ? hd : null,
          tutorial: null !== (vd = this.pickedTutorial) && void 0 !== vd ? vd : this.serverTutorial,
          tutorialKnown: !0
        }, this.lQ(), Hd && this.scheduleClear(), Ed && this.requestBook()
      }
      setTutorial(dd) {
        return this.endPick(), this.pickedTutorial = dd, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.lQ()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: dd
        }, this.lQ(), this.pickSeq
      }
      onPlayerY(dd) {
        const Od = Math.floor(dd);
        Od !== this.playerY && (this.playerY = Od, this.view.depth && iF.j.lQ(GF, Od))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(dd) {
        this.view = {
          ...this.view,
          chapters: dd.baf2BookChapters
        }, this.lQ()
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
          }, this.lQ()
        }), 2400)
      }
      lQ() {
        iF.j.lQ(rF, this.view, !0)
      }
    }

    function PF(dd, Od) {
      return dd.sideCameUpAt > 0 && Od - dd.sideCameUpAt < 2400
    }

    function zF(dd) {
      return (null === dd.name || cF(dd)) && null === dd.side && null !== dd.chapters
    }

    function cF(dd) {
      var Od;
      return "quest_forgeOngoing" === (null === (Od = dd.name) || void 0 === Od ? void 0 : Od[0])
    }

    function jF(dd) {
      return dd.filter((dd => !nF.has(dd.key)))
    }

    function DF(dd) {
      return dd.key.startsWith("stepCraft")
    }

    function eF(dd, Od) {
      const md = new Set,
        Wd = dd.side ? [...dd.rows, dd.side.row] : dd.rows;
      for (const Rd of Wd)
        if (!Rd.done) {
          !Rd.item || Od && !DF(Rd) || md.add(Rd.item);
          for (const [dd, Od, Wd] of null !== (Fd = Rd.chips) && void 0 !== Fd ? Fd : []) {
            var Fd;
            Od < Wd && md.add(dd)
          }
        } return md
    }

    function IF(dd) {
      const Od = dd.findIndex((dd => !dd.done && !dd.away));
      return Od >= 0 ? Od : dd.findIndex((dd => !dd.done))
    }

    function lF(dd, Od) {
      let [md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td] = dd;
      return {
        id: Od,
        key: md,
        params: Wd,
        item: Fd,
        amount: Rd,
        total: Xd,
        done: Kd,
        chips: null !== hd && void 0 !== hd ? hd : null,
        current: !1,
        away: !0 === vd,
        madeFor: null !== Qd && void 0 !== Qd ? Qd : [],
        also: null !== td && void 0 !== td ? td : [],
        justFinished: !1
      }
    }
    const CF = "baf2QuestItems",
      ZF = new Set;
    let kF = new Set,
      fF = null;

    function MF(dd) {
      const Od = Ad(dd.tutorial),
        md = Od ? eF(dd, !0) : ZF;
      "inventory" === YF.e.get("openInGameMenuName") ? (fF = null, (0, AF.u)(md)) : fF = md;
      const Wd = Od ? eF(dd, !1) : ZF;
      (0, VF.d)(Wd, kF) || (kF = Wd, iF.j.lQ(CF, kF))
    }

    function dR() {
      return (0, uF.e)(CF, (() => kF))
    }
    var OR = md(40023);
    const mR = [{
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

    function WR(dd, Od) {
      return [`Deposit Seed (${dd})`, {
        item: hm[`${dd} Deposit`],
        amount: Od
      }]
    }
    const FR = Object.fromEntries([WR("Coal", 8), WR("Iron", 8), WR("Copper", 8), WR("Gold", 6), WR("Voltite", 4), WR("Uranium", 4)]),
      RR = "Relay Coil",
      XR = new Map;

    function KR(dd) {
      let Od = XR.get(dd);
      if (!Od) {
        const md = Math.max(1, dd);
        Od = mR.filter((dd => {
          var Od;
          return md >= dd.fromTier && md <= (null !== (Od = dd.untilTier) && void 0 !== Od ? Od : 1 / 0)
        })).map((dd => dd.later && md >= dd.later.tier ? {
          ...dd,
          weight: dd.later.weight
        } : dd)), XR.set(dd, Od)
      }
      return Od
    }

    function hR(dd) {
      return KR(dd).some((dd => {
        let {
          item: Od
        } = dd;
        return Od === RR
      }))
    }

    function vR(dd) {
      return dd.startsWith("Deposit Seed (")
    }

    function QR(dd, Od) {
      const md = KR(dd);
      return Od ? md.filter((dd => Od(dd.item))) : md
    }

    function tR(dd) {
      return dd.reduce(((dd, Od) => dd + Od.weight), 0)
    }

    function oR(dd, Od) {
      const md = QR(dd, Od),
        Wd = tR(md);
      return md.map((dd => ({
        find: dd,
        chance: dd.weight / Wd
      })))
    }
    const NR = 6e4,
      qR = new Intl.NumberFormat("en-US");

    function HR(dd, Od) {
      const md = dd >= 10 ? Math.round(dd) : Math.round(10 * dd) / 10;
      return 0 === md ? "0" : `${Od}${qR.format(md)}`
    }

    function yR(dd) {
      return dd < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? qR.format(dd) : dd < 1e6 ? `${dd<1e5?Math.floor(dd/100)/10:Math.floor(dd/1e3)}k` : Math.floor(dd / 1e5) / 10 + "M"
    }

    function bR(dd) {
      return dd < 0 ? "\u2212" + -dd : String(dd)
    }

    function TR(dd, Od) {
      const md = Math.max(1, Math.round(Od));
      if (md < 60) return dd("buildAFactory2Game:durationSeconds", {
        seconds: String(md)
      });
      const Wd = Math.round(md / 60);
      if (Wd < 60) return dd("buildAFactory2Game:durationMinutes", {
        minutes: String(Wd)
      });
      const Fd = String(Math.floor(Wd / 60));
      return Wd % 60 === 0 ? dd("buildAFactory2Game:durationWholeHours", {
        hours: Fd
      }) : dd("buildAFactory2Game:durationHours", {
        hours: Fd,
        minutes: String(Wd % 60)
      })
    }
    var pR = md(40026),
      YR = md(1341);

    function gR(dd, Od) {
      return null !== dd && dd > Od + 1
    }

    function wR(dd) {
      const Od = 100 * dd;
      return String(Od <= 0 || Od >= 1 ? Math.round(Od) : Math.max(.1, Math.round(10 * Od) / 10))
    }

    function aR(dd) {
      let {
        item: Od,
        amount: md
      } = dd;
      return (0, YR.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, YR.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, YR.jsx)(SF.c, {
            itemName: Od,
            amount: 0
          })
        }), md > 1 && (0, YR.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", md]
        })]
      })
    }

    function ER(dd) {
      let {
        label: Od,
        names: md
      } = dd;
      const [Fd, Rd] = (0, Wd.useState)(!1), Xd = md.join(" / ");
      return (0, YR.jsxs)(YR.Fragment, {
        children: [(0, YR.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Xd,
          "aria-expanded": Fd,
          onClick: () => {
            Rd(!Fd)
          },
          children: Od
        }), Fd && (0, YR.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Xd
        })]
      })
    }

    function JR(dd) {
      let {
        tier: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)(), {
        key: Wd,
        params: Fd
      } = Nd(Od, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Rd = md(`buildAFactory2Game:${Wd}`, Fd);
      return (0, YR.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, YR.jsx)(BF.c, {
          name: "lock"
        }), Rd]
      })
    }
    const UR = (0, Wd.createContext)(null);

    function xR() {
      const {
        t: dd
      } = (0, xF.G)(), Od = (0, Wd.useContext)(UR);
      return (0, Wd.useEffect)((() => null === Od || void 0 === Od ? void 0 : Od()), [Od]), (0, YR.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: dd("buildAFactory2Game:recipeForQuest"),
        "aria-label": dd("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function BR(dd) {
      let {
        title: Od,
        count: md,
        children: Fd,
        startOpen: Rd = !0
      } = dd;
      const {
        t: Xd
      } = (0, xF.G)(), [Kd, hd] = (0, Wd.useState)((() => Rd && !(0, pR.b)())), [vd, Qd] = (0, Wd.useState)(0), td = (0, Wd.useCallback)((() => (Qd((dd => dd + 1)), () => {
        Qd((dd => dd - 1))
      })), []);
      return (0, YR.jsxs)("div", {
        className: aF()("Baf2Recipes", {
          Open: Kd
        }),
        children: [(0, YR.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            hd(!Kd)
          },
          "aria-expanded": Kd,
          children: [Xd("buildAFactory2Game:recipesToggle", {
            title: Od,
            count: String(md)
          }), (0, YR.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: Kd ? "\u25be" : "\u25b8"
          })]
        }), Kd && (0, YR.jsxs)(UR.Provider, {
          value: td,
          children: [(0, YR.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Fd
          }), vd > 0 && (0, YR.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, YR.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Xd("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const SR = "buildAFactory2Game:",
      sR = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const uR = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      VR = {
        "Uranium Grit": Rd,
        "Raw Uranium": Rd
      };

    function iR(dd) {
      var Od;
      return null !== (Od = VR[dd]) && void 0 !== Od ? Od : Math.max(fd(dd), uR[dd] ? fd(uR[dd]) : 1, function(dd) {
        const Od = Fd.findIndex((Od => Od.cost.some((Od => Od.item === dd))));
        return Od > Rd ? Od : 1
      }(dd))
    }

    function AR(dd, Od) {
      return rR(Od) ? iR(Od) : function(dd) {
        if (sR.has(dd)) return 1;
        const Od = Fd.findIndex((Od => Od.newDeposits.some((Od => {
          let {
            block: md
          } = Od;
          return md === dd
        }))));
        return Od < 0 ? 1 : Od + 1
      }(dd)
    }

    function rR(dd) {
      return dd in VR || td(iR(dd)) > 0
    }

    function GR(dd, Od) {
      return MO(dd, {
        coupled: !1,
        taught: null,
        atomic: Kd() && Od >= 11
      }).recipes
    }

    function nR(dd, Od) {
      const md = od(dd, Od, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : td(dd) > 0);
      return "open" === md || "locked" === md
    }

    function LR(dd, Od) {
      return dd.map(((dd, md) => ({
        value: dd,
        idx: md,
        tier: Od(dd)
      }))).sort(((dd, Od) => dd.tier - Od.tier || dd.idx - Od.idx)).map((dd => {
        let {
          value: Od
        } = dd;
        return Od
      }))
    }

    function PR(dd, Od, md) {
      const Wd = od(dd, Od);
      if ("hidden" === Wd || "open" === Wd) return null;
      if ("teaser" === Wd) return {
        tag: {
          translationKey: `${SR}${md?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${SR}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Fd = Nd(dd, {
          tier: md ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Rd = Nd(dd, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${SR}${Fd.key}`,
          params: Fd.params
        },
        reason: {
          translationKey: `${SR}${Rd.key}`,
          params: Rd.params
        }
      }
    }

    function zR(dd) {
      return !vR(dd)
    }

    function cR(dd) {
      let {
        seconds: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)();
      return (0, YR.jsx)(BR, {
        title: md("buildAFactory2Game:recipesCuts", {
          seconds: Od
        }),
        count: 1,
        children: (0, YR.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, YR.jsx)(aR, {
            item: "Maple Sapling",
            amount: 1
          }), (0, YR.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, YR.jsx)(aR, {
            item: "Maple Log",
            amount: 1
          }), (0, YR.jsx)("span", {
            className: "Baf2RecipeName",
            children: md("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function jR(dd) {
      let {
        fertilised: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)();
      return (0, YR.jsxs)(BR, {
        title: md("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, YR.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, YR.jsx)(aR, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, YR.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, YR.jsx)(aR, {
            item: "Wheat",
            amount: 1
          }), (0, YR.jsx)(aR, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, YR.jsx)("span", {
            className: "Baf2RecipeName",
            children: md("buildAFactory2Game:recipeField")
          })]
        }), (0, YR.jsxs)("li", {
          className: aF()("Baf2Recipe", {
            InUse: Od
          }),
          children: [(0, YR.jsx)(aR, {
            item: "Fertiliser",
            amount: 1
          }), (0, YR.jsx)("span", {
            className: "Baf2RecipeName",
            children: md("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function DR(dd) {
      let {
        tier: Od,
        seconds: md
      } = dd;
      const {
        t: Wd
      } = (0, xF.G)(), Fd = function(dd) {
        return dd >= 5 ? EO : aO
      }(Od);
      return (0, YR.jsx)(BR, {
        title: Wd("buildAFactory2Game:recipesBringsUp", {
          seconds: md
        }),
        count: Fd.length,
        children: Fd.map((dd => {
          let {
            item: Od,
            chance: md
          } = dd;
          return (0, YR.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, YR.jsx)(aR, {
              item: Od,
              amount: 1
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, OR.d)(Wd, Od)
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Wd("buildAFactory2Game:recipeChance", {
                percent: wR(md)
              })
            })]
          }, Od)
        }))
      })
    }

    function eR(dd) {
      let {
        tier: Od,
        seconds: md,
        noSeeds: Wd
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)(), Rd = dR(), Xd = oR(Od, Wd ? zR : void 0), Kd = Wd && oR(Od).length > Xd.length, hd = hR(Od);
      return (0, YR.jsxs)(BR, {
        title: Fd("buildAFactory2Game:recipesRecycles", {
          seconds: md
        }),
        count: Xd.length,
        children: [Xd.map((dd => {
          let {
            find: Od,
            chance: md
          } = dd;
          return (0, YR.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Rd.has(Od.item) && (0, YR.jsx)(xR, {}), (0, YR.jsx)(aR, {
              item: Od.item,
              amount: Od.amount
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, OR.d)(Fd, Od.item)
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Fd("buildAFactory2Game:recipeChance", {
                percent: wR(md)
              })
            })]
          }, Od.item)
        })), Kd && (0, YR.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, YR.jsx)("span", {
            className: "Baf2RecipeName",
            children: Fd("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), hd && (0, YR.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, YR.jsx)("span", {
            className: "Baf2RecipeName",
            children: Fd("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function IR(dd) {
      let {
        tier: Od,
        seconds: md
      } = dd;
      const {
        t: Wd
      } = (0, xF.G)(), Fd = Object.entries(FR).filter((dd => {
        let [, {
          item: md
        }] = dd;
        return nR(iR(md), Od, rR(md))
      }));
      return (0, YR.jsx)(BR, {
        title: Wd("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: md
        }),
        count: Fd.length,
        children: Fd.map((dd => {
          let [Od, {
            item: md,
            amount: Fd
          }] = dd;
          return (0, YR.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, YR.jsx)(aR, {
              item: Od,
              amount: 1
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, YR.jsx)(aR, {
              item: md,
              amount: Fd
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, OR.d)(Wd, md)
            })]
          }, Od)
        }))
      })
    }

    function lR(dd) {
      let {
        tier: Od,
        seconds: md
      } = dd;
      const {
        t: Wd
      } = (0, xF.G)(), Fd = dR(), Rd = LR(Object.entries(hm).filter((dd => {
        let [md, Wd] = dd;
        return nR(AR(md, Wd), Od, rR(Wd))
      })), (dd => {
        let [Od, md] = dd;
        return AR(Od, md)
      }));
      return (0, YR.jsx)(BR, {
        title: Wd("buildAFactory2Game:recipesDigs", {
          seconds: md
        }),
        count: Rd.length,
        children: Rd.map((dd => {
          let [md, Rd] = dd;
          const Xd = AR(md, Rd),
            Kd = Xd > Od ? Xd : null,
            hd = Qm[md],
            vd = null === Kd && Fd.has(Rd);
          return (0, YR.jsxs)("li", {
            className: aF()("Baf2Recipe", {
              Locked: null !== Kd,
              Far: gR(Kd, Od)
            }),
            children: [vd && (0, YR.jsx)(xR, {}), (0, YR.jsx)(aR, {
              item: md,
              amount: 1
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, YR.jsx)(aR, {
              item: Rd,
              amount: 1
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, OR.d)(Wd, Rd)
            }), void 0 !== hd && (0, YR.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Wd("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / hd)
              })
            }), null !== Kd && (0, YR.jsx)(JR, {
              tier: Kd
            })]
          }, md)
        }))
      })
    }

    function CR(dd) {
      var Od;
      let {
        def: md,
        seconds: Wd
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)();
      return (0, YR.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, YR.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (Od = md.fuels) && void 0 !== Od ? Od : []).map((dd => (0, YR.jsx)(aR, {
            item: dd,
            amount: 1
          }, dd))), (0, YR.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, YR.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, YR.jsx)(BF.c, {
              name: "bolt"
            }), Fd("buildAFactory2Game:recipePower", {
              power: Md(md.powerMade),
              seconds: Wd
            })]
          })]
        })
      })
    }

    function ZR(dd) {
      let {
        def: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)();
      return (0, YR.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, YR.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, YR.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, YR.jsx)(BF.c, {
              name: "bolt"
            }), md("buildAFactory2Game:recipeMixer", {
              cryo: HR((0, dO.F)(Od, Od.cryoMade), "")
            })]
          })
        })
      })
    }

    function kR(dd) {
      let {
        def: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)();
      return (0, YR.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, YR.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, YR.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, YR.jsx)(BF.c, {
              name: "bolt"
            }), md("buildAFactory2Game:recipeCondenser", {
              power: HR((0, dO.F)(Od, Od.powerPerOp), ""),
              water: HR((0, dO.F)(Od, Od.fluidMade), "")
            })]
          })
        })
      })
    }

    function fR(dd) {
      let {
        kind: Od,
        def: md,
        input: Wd,
        tier: Fd,
        noSeeds: Rd = !1
      } = dd;
      const Xd = String(md.opMs / 1e3);
      return Fm(md) ? (0, YR.jsx)(cR, {
        seconds: Xd
      }) : md.field ? (0, YR.jsx)(jR, {
        fertilised: null !== Wd
      }) : md.table ? (0, YR.jsx)(DR, {
        tier: Fd,
        seconds: Xd
      }) : md.recycles ? (0, YR.jsxs)(YR.Fragment, {
        children: [(0, YR.jsx)(eR, {
          tier: Fd,
          seconds: Xd,
          noSeeds: Rd
        }), (0, YR.jsx)(IR, {
          tier: Fd,
          seconds: Xd
        })]
      }) : Wm(md) ? (0, YR.jsx)(lR, {
        tier: Fd,
        seconds: Xd
      }) : void 0 !== md.fluidMade ? (0, YR.jsx)(kR, {
        def: md
      }) : void 0 !== md.cryoMade ? (0, YR.jsx)(ZR, {
        def: md
      }) : void 0 !== md.powerMade ? (0, YR.jsx)(CR, {
        def: md,
        seconds: Xd
      }) : (0, YR.jsx)(MR, {
        kind: Od,
        input: Wd,
        tier: Fd,
        seconds: Xd
      })
    }

    function MR(dd) {
      let {
        kind: Od,
        input: md,
        tier: Wd,
        seconds: Fd
      } = dd;
      const {
        t: Rd
      } = (0, xF.G)(), Xd = dR(), Kd = LR(function(dd) {
        const Od = new Map;
        for (const Fd of dd) {
          var md, Wd;
          const dd = [Fd.output, Fd.outputAmount, Fd.inputAmount, null === (md = Fd.bonus) || void 0 === md ? void 0 : md.item, null === (Wd = Fd.bonus) || void 0 === Wd ? void 0 : Wd.chance].join("|"),
            Rd = Od.get(dd);
          Rd ? Rd.inputs.push(Fd.input) : Od.set(dd, {
            inputs: [Fd.input],
            inputAmount: Fd.inputAmount,
            output: Fd.output,
            outputAmount: Fd.outputAmount,
            bonus: Fd.bonus
          })
        }
        return [...Od.values()]
      }(GR(Od, Wd).filter(Nm)), (dd => iR(dd.output))).filter((dd => nR(iR(dd.output), Wd, rR(dd.output))));
      return (0, YR.jsx)(BR, {
        title: Rd("buildAFactory2Game:recipesEach", {
          seconds: Fd
        }),
        count: Kd.length,
        children: Kd.map((dd => {
          const Od = null !== md && dd.inputs.includes(md),
            Fd = dd.inputs.length > 3 ? [Od ? md : dd.inputs[0]] : dd.inputs,
            Kd = iR(dd.output) > Wd ? iR(dd.output) : null,
            hd = null === Kd && Xd.has(dd.output);
          return (0, YR.jsxs)("li", {
            className: aF()("Baf2Recipe", {
              InUse: Od,
              Locked: null !== Kd,
              Far: gR(Kd, Wd)
            }),
            children: [hd && (0, YR.jsx)(xR, {}), Fd.map(((Od, md) => (0, YR.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [md > 0 && (0, YR.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, YR.jsx)(aR, {
                item: Od,
                amount: dd.inputAmount
              })]
            }, Od))), Fd.length < dd.inputs.length && (0, YR.jsx)(ER, {
              label: Rd("buildAFactory2Game:recipeMore", {
                count: String(dd.inputs.length - Fd.length)
              }),
              names: dd.inputs.filter((dd => !Fd.includes(dd))).map((dd => (0, OR.d)(Rd, dd)))
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, YR.jsx)(aR, {
              item: dd.output,
              amount: dd.outputAmount
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, OR.d)(Rd, dd.output)
            }), dd.bonus && (0, YR.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Rd("buildAFactory2Game:recipeBonus", {
                percent: wR(dd.bonus.chance)
              }), (0, YR.jsx)(aR, {
                item: dd.bonus.item,
                amount: 1
              })]
            }), null !== Kd && (0, YR.jsx)(JR, {
              tier: Kd
            })]
          }, `${dd.output}|${dd.inputs[0]}`)
        }))
      })
    }

    function dX(dd) {
      let {
        taught: Od,
        tier: md
      } = dd;
      const {
        t: Wd
      } = (0, xF.G)(), Fd = dR(), Rd = LR(Object.values(kO), (dd => dd.tier)).filter((dd => nR(dd.tier, md)));
      return (0, YR.jsx)(BR, {
        title: Wd("buildAFactory2Game:benchCanMake"),
        count: Rd.length,
        startOpen: !1,
        children: Rd.map((dd => {
          const Rd = dd.tier > md,
            Xd = !Rd && Fd.has(dd.output);
          return (0, YR.jsxs)("li", {
            className: aF()("Baf2Recipe", {
              InUse: dd.output === Od,
              Locked: Rd,
              Far: gR(Rd ? dd.tier : null, md)
            }),
            children: [Xd && (0, YR.jsx)(xR, {}), (0, YR.jsx)(aR, {
              item: dd.output,
              amount: dd.outputAmount
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, OR.d)(Wd, dd.output)
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), dd.inputs.map((dd => (0, YR.jsx)(aR, {
              item: dd.item,
              amount: dd.amount
            }, dd.item))), Rd && (0, YR.jsx)(JR, {
              tier: dd.tier
            })]
          }, dd.output)
        }))
      })
    }
    var OX, mX, WX, FX, RX;
    const XX = rO.Generator,
      KX = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      hX = 1e3 * (null !== (OX = XX.powerMade) && void 0 !== OX ? OX : 0) / XX.opMs,
      vX = Math.min(...(null !== (mX = XX.fuels) && void 0 !== mX ? mX : []).map((dd => Km[dd]))) / 1e3,
      QX = rO["Volt Engine"],
      tX = 1e3 * (null !== (WX = QX.powerMade) && void 0 !== WX ? WX : 0) / QX.opMs,
      oX = Km[null !== (FX = null === (RX = QX.fuels) || void 0 === RX ? void 0 : RX[0]) && void 0 !== FX ? FX : ""] / 1e3;

    function NX(dd) {
      let {
        item: Od,
        label: md,
        value: Wd,
        note: Fd,
        dim: Rd
      } = dd;
      return (0, YR.jsxs)("li", {
        className: aF()("Baf2PowerRow", {
          Dim: Rd
        }),
        children: [(0, YR.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, YR.jsx)(SF.c, {
            itemName: Od,
            amount: 0
          })
        }), (0, YR.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, YR.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: md
          }), Fd && (0, YR.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Fd
          })]
        }), (0, YR.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Wd
        })]
      })
    }

    function qX(dd, Od, md, Wd) {
      var Fd;
      const Rd = void 0 === Wd ? rO[dd] : function(dd, Od) {
          if (null === Od) return dd;
          let md = Cd.get(Od);
          return md || (md = {
            ...dd,
            powerPerOp: ld(dd, Od),
            farmMob: Od
          }, Cd.set(Od, md)), md
        }(rO[dd], Wd),
        Xd = Od && Rd.couplable ? DO(Rd, md) : Rd;
      return 1e3 * (null !== (Fd = Xd.powerPerOp) && void 0 !== Fd ? Fd : 0) / Xd.opMs
    }

    function HX(dd) {
      var Od, md, Wd, Fd, Rd, Xd, Kd, hd;
      let {
        message: vd
      } = dd;
      const {
        t: Qd
      } = (0, xF.G)(), td = (dd, Od) => Qd("buildAFactory2Game:powerPerSecond", {
        rate: HR(dd, Od)
      }), [od, Nd] = vd.baf2PowerGenerators, qd = vd.baf2PowerGeneratorFuel, Hd = vd.baf2PowerSunPanels, yd = null !== (Od = vd.baf2PowerSunShare) && void 0 !== Od ? Od : 1, bd = vd.baf2PowerVaults, Td = vd.baf2PowerUsers, [pd, Yd] = null !== (md = vd.baf2PowerEngines) && void 0 !== md ? md : [0, 0], gd = null !== (Wd = vd.baf2PowerEngineCells) && void 0 !== Wd ? Wd : 0, wd = null !== (Fd = vd.baf2PowerPads) && void 0 !== Fd ? Fd : 0, Ed = null !== (Rd = vd.baf2PowerCharge) && void 0 !== Rd ? Rd : 0, [Jd, Ud] = null !== (Xd = vd.baf2PowerReactors) && void 0 !== Xd ? Xd : [0, 0], [xd, Bd] = null !== (Kd = vd.baf2PowerBatteries) && void 0 !== Kd ? Kd : [0, 0];
      let Sd = Qd("buildAFactory2Game:powerEngineCells", {
        amount: String(gd)
      });
      gd > 0 && Yd > 0 && (Sd = Qd("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(gd),
        time: TR(Qd, gd * oX / Yd)
      }));
      let sd = Qd("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(qd)
      });
      qd > 0 && Nd > 0 && (sd = Qd("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(qd),
        time: TR(Qd, qd * vX / Nd)
      }));
      const ud = od + pd + Hd + Jd;
      return (0, YR.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, YR.jsxs)("section", {
          children: [(0, YR.jsxs)("h3", {
            children: [Qd("buildAFactory2Game:powerMaking"), (0, YR.jsx)("span", {
              children: td(vd.baf2PowerMadePerS, "+")
            })]
          }), (0, YR.jsxs)("ul", {
            children: [0 === ud && (0, YR.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Qd("buildAFactory2Game:powerNoMakers")
            }), od > 0 && (0, YR.jsx)(NX, {
              item: "Generator",
              label: `${(0,OR.d)(Qd,"Generator")} \xd7${od}`,
              note: `${Qd("buildAFactory2Game:powerRunning",{amount:String(Nd)})} \xb7 ${sd}`,
              value: td(Nd * hX, "+"),
              dim: 0 === Nd
            }), pd > 0 && (0, YR.jsx)(NX, {
              item: "Volt Engine",
              label: `${(0,OR.d)(Qd,"Volt Engine")} \xd7${pd}`,
              note: `${Qd("buildAFactory2Game:powerRunning",{amount:String(Yd)})} \xb7 ${Sd}`,
              value: td(Yd * tX, "+"),
              dim: 0 === Yd
            }), Hd > 0 && (0, YR.jsx)(NX, {
              item: "Solar Panel",
              label: `${(0,OR.d)(Qd,"Solar Panel")} \xd7${Hd}`,
              note: Qd(yd < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: td(4 * Hd * yd, "+")
            }), Jd > 0 && (0, YR.jsx)(NX, {
              item: "Reactor Frame",
              label: `${Qd("buildAFactory2Game:powerReactors")} \xd7${Jd}`,
              note: Qd("buildAFactory2Game:powerRunning", {
                amount: String(Ud)
              }),
              value: td(null !== (hd = vd.baf2PowerReactorPerS) && void 0 !== hd ? hd : 0, "+"),
              dim: 0 === Ud
            })]
          })]
        }), (0, YR.jsxs)("section", {
          children: [(0, YR.jsxs)("h3", {
            children: [Qd("buildAFactory2Game:powerStorage"), (0, YR.jsx)("span", {
              children: Md(vd.baf2PowerCap)
            })]
          }), (bd > 0 || xd > 0) && (0, YR.jsxs)("ul", {
            children: [bd > 0 && (0, YR.jsx)(NX, {
              item: "Charge Vault",
              label: `${(0,OR.d)(Qd,"Charge Vault")} \xd7${bd}`,
              value: `+${Md(8e3*bd)}`
            }), xd > 0 && (0, YR.jsx)(NX, {
              item: "Battery Cell",
              label: `${Qd("buildAFactory2Game:powerBatteries")} \xd7${xd}`,
              value: `+${Md(Bd)}`
            })]
          })]
        }), (0, YR.jsxs)("section", {
          children: [(0, YR.jsxs)("h3", {
            children: [Qd("buildAFactory2Game:powerUsing"), (0, YR.jsx)("span", {
              children: td(vd.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, YR.jsxs)("ul", {
            children: [0 === Td.length && 0 === wd && 0 === Ed && (0, YR.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Qd("buildAFactory2Game:powerNoUsers")
            }), Td.map((dd => {
              let [Od, md, Wd, Fd, Rd = 1, Xd] = dd, Kd = md ? Qd(KX[Rd - 1], {
                name: (0, OR.d)(Qd, Od)
              }) : (0, OR.d)(Qd, Od);
              return void 0 !== Xd && (Kd = Qd("buildAFactory2Game:powerFarmName", {
                name: Kd,
                mob: Qd(Dd(Xd))
              })), (0, YR.jsx)(NX, {
                item: Od,
                label: `${Kd} \xd7${Wd}`,
                note: Qd("buildAFactory2Game:powerRunning", {
                  amount: String(Fd)
                }),
                value: Fd > 0 ? td(Fd * qX(Od, md, Rd, Xd), "\u2212") : Qd("buildAFactory2Game:powerIdle"),
                dim: 0 === Fd
              }, `${Od}|${md}|${Rd}|${Xd}`)
            })), wd > 0 && (0, YR.jsx)(NX, {
              item: "Charging Pad",
              label: `${(0,OR.d)(Qd,"Charging Pad")} \xd7${wd}`,
              value: Qd("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Ed > 0 && (0, YR.jsx)(NX, {
              item: "Homestead Core",
              label: Qd("buildAFactory2Game:powerCharge"),
              value: td(Ed, "\u2212")
            }), vd.baf2PowerStarved > 0 && (0, YR.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, YR.jsx)(BF.c, {
                name: "triangle-exclamation"
              }), Qd("buildAFactory2Game:powerStarved", {
                amount: String(vd.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var yX = md(5194),
      bX = md(1572);
    class TX {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(dd) {
        this.message = dd;
        for (const Od of this.listeners) Od()
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
    class pX extends TX {}

    function YX(dd, Od) {
      const md = () => {
          const md = dd.get();
          if (!md || !Od) return md;
          const [Wd, Fd, Rd] = md.baf2PowerAt;
          return Wd === Od[0] && Fd === Od[1] && Rd === Od[2] ? md : null
        },
        [Fd, Rd] = (0, Wd.useState)(md);
      return (0, Wd.useEffect)((() => (Rd(md()), dd.subscribe((() => {
        Rd(md())
      })))), [dd, ...null !== Od && void 0 !== Od ? Od : []]), Fd
    }

    function gX(dd) {
      return {
        stored: dd.baf2PowerStored,
        cap: dd.baf2PowerCap,
        madePerS: dd.baf2PowerMadePerS,
        usedPerS: dd.baf2PowerUsedPerS
      }
    }

    function wX(dd) {
      let {
        stored: Od,
        cap: md
      } = dd;
      return (0, YR.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, YR.jsx)("div", {
          style: {
            width: `${Math.min(100,100*Od/Math.max(1,md))}%`
          }
        })
      })
    }

    function aX(dd) {
      let {
        figures: Od,
        labelled: md = !1
      } = dd;
      const {
        t: Wd
      } = (0, xF.G)(), Fd = Od.madePerS - Od.usedPerS, {
        text: Rd,
        draining: Xd
      } = function(dd, Od) {
        let {
          stored: md,
          cap: Wd,
          madePerS: Fd,
          usedPerS: Rd
        } = Od;
        const Xd = Fd - Rd;
        return md >= Wd ? {
          text: dd("buildAFactory2Game:powerFull"),
          draining: !1
        } : Xd > .05 ? {
          text: dd("buildAFactory2Game:powerFullIn", {
            time: TR(dd, (Wd - md) / Xd)
          }),
          draining: !1
        } : Xd < -.05 ? {
          text: dd("buildAFactory2Game:powerEmptyIn", {
            time: TR(dd, md / -Xd)
          }),
          draining: !0
        } : {
          text: dd("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Wd, Od);
      return (0, YR.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, YR.jsx)(wX, {
          stored: Od.stored,
          cap: Od.cap
        }), (0, YR.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, YR.jsx)("span", {
            children: Wd(md ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: Md(Od.stored),
              cap: Md(Od.cap)
            })
          }), (0, YR.jsxs)("span", {
            className: aF()("Baf2PowerNet", {
              Draining: Xd
            }),
            children: [Wd("buildAFactory2Game:powerPerSecond", {
              rate: HR(Math.abs(Fd), Fd < 0 ? "\u2212" : "+")
            }), " \xb7 ", Rd]
          })]
        })]
      })
    }

    function EX(dd) {
      let {
        stored: Od,
        cap: md,
        rates: Wd
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)();
      return Wd ? (0, YR.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, YR.jsx)(aX, {
          figures: {
            stored: Od,
            cap: md,
            madePerS: Wd[0],
            usedPerS: Wd[1]
          },
          labelled: !0
        })
      }) : (0, YR.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, YR.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, YR.jsx)(wX, {
            stored: Od,
            cap: md
          }), (0, YR.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, YR.jsx)("span", {
              children: Fd("buildAFactory2Game:powerStoredLabelled", {
                stored: Md(Od),
                cap: Md(md)
              })
            })
          })]
        })
      })
    }

    function JX(dd) {
      let {
        store: Od,
        close: md
      } = dd;
      const {
        t: Wd
      } = (0, xF.G)(), Fd = YX(Od);
      return (0, YR.jsx)(yX.c, {
        close: md,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, YR.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsxs)("div", {
              children: [(0, YR.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Wd("buildAFactory2Game:powerTitle")
              }), (0, YR.jsx)("p", {
                children: Wd("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, YR.jsx)(bX.j, {
              onClick: md
            })]
          }), Fd && (0, YR.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, YR.jsx)(aX, {
              figures: gX(Fd)
            }), (0, YR.jsx)(HX, {
              message: Fd
            })]
          })]
        })
      })
    }

    function UX(dd) {
      var Od;
      let {
        kind: md,
        def: Fd,
        cF: Rd,
        power: Xd,
        stored: Kd,
        cap: hd
      } = dd;
      const {
        t: vd
      } = (0, xF.G)(), Qd = YX(Xd, Rd), [td, od] = (0, Wd.useState)(!1);
      return (0, YR.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, YR.jsx)(fR, {
          kind: md,
          def: Fd,
          input: null,
          tier: null !== (Od = null === Qd || void 0 === Qd ? void 0 : Qd.baf2PowerTier) && void 0 !== Od ? Od : 1
        }), (0, YR.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: vd("buildAFactory2Game:powerTitle")
        }), Qd && (0, YR.jsx)(aX, {
          figures: gX(Qd)
        }), !Qd && (0, YR.jsx)(EX, {
          stored: Kd,
          cap: hd,
          rates: null
        }), Qd && (0, YR.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            od(!td)
          },
          "aria-expanded": td,
          children: vd(td ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Qd && td && (0, YR.jsx)(HX, {
          message: Qd
        })]
      })
    }
    const xX = 2500,
      BX = 17500,
      SX = `${gd} `;
    const sX = ["plan", "throttle"];

    function uX(dd) {
      if (dd.startsWith(`${BO} `)) return dd.slice(0, dd.lastIndexOf(" "));
      const Od = dd.split(" ");
      return Od[0] === oO && sX.includes(Od[4]) ? Od.slice(0, 5).join(" ") : null
    }
    class VX {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = dd, this.now = Od, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.HXd = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = Od()
      }
      enqueue(dd) {
        this.queue(dd, this.nextTicket());
        const Od = this.HXd + this.pending.length;
        return this.flush(), Od
      }
      track(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const md = this.nextTicket();
        if (!Od.urgent) return this.queue(dd, md), this.flush(), md;
        const {
          supersedes: Wd
        } = Od;
        for (let Rd = this.pending.length - 1; Rd >= this.urgent; Rd--) {
          const Od = this.pending[Rd];
          (Od.command === dd || null !== Wd && void 0 !== Wd && Wd(Od.command)) && (this.pending.splice(Rd, 1), this.markLeft(Od.tickets))
        }
        const Fd = this.pending.findIndex((Od => {
          let {
            command: md
          } = Od;
          return md === dd
        }));
        return -1 !== Fd ? this.pending[Fd].tickets.push(md) : (this.pending.splice(this.urgent, 0, {
          command: dd,
          tickets: [md]
        }), this.urgent += 1), this.flush(), md
      }
      leftAt(dd) {
        const Od = this.leftTimes.get(dd);
        return void 0 !== Od ? Od : this.pending.some((Od => {
          let {
            tickets: md
          } = Od;
          return md.includes(dd)
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
        var Od;
        return (null === (Od = this.pending.at(-1)) || void 0 === Od ? void 0 : Od.command) === dd
      }
      sent() {
        return this.HXd
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
        const Od = this.now();
        for (const md of dd) this.leftTimes.set(md, Od);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(dd, Od) {
        const md = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === md || void 0 === md ? void 0 : md.command) === dd) return void(! function(dd) {
          return dd === wd || dd.startsWith(`${Yd} `) || dd.startsWith(`${zd} `)
        }(dd) ? md.tickets.push(Od) : (this.pending.pop(), this.markLeft([...md.tickets, Od])));
        const Wd = void 0 === md ? null : tO(md.command, dd);
        if (null !== Wd && void 0 !== md) return md.command = Wd, void md.tickets.push(Od);
        const Fd = uX(dd);
        if (null !== Fd && void 0 !== md && uX(md.command) === Fd) return md.command = dd, void md.tickets.push(Od);
        if (null !== md && void 0 !== md && md.command.startsWith(SX) && dd.startsWith(SX)) {
          const Wd = dd.slice(SX.length);
          if (md.command.slice(SX.length).split(",").includes(Wd)) return void md.tickets.push(Od);
          const Fd = `${md.command},${Wd}`;
          if (Fd.length <= 119) return md.command = Fd, void md.tickets.push(Od)
        }
        this.pending.push({
          command: dd,
          tickets: [Od]
        })
      }
      flush() {
        const dd = this.now();
        for (this.tokens = Math.min(5, this.tokens + (dd - this.refilledAt) / xX), this.refilledAt = dd; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.HXd += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: dd,
            tickets: Od
          } = this.pending.shift();
          this.markLeft(Od), this.send(dd)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * xX)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class iX {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new VX(dd, Od)
      }
      send(dd) {
        return this.queue.enqueue(dd)
      }
      sent() {
        return this.queue.sent()
      }
      track(dd, Od) {
        return this.queue.track(dd, Od)
      }
      leftAt(dd) {
        return this.queue.leftAt(dd)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(dd) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = Od, this.send(dd), this.islandEdits.count
      }
      syncIslandEdits(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: md
        } = this, Wd = Od - md.lastAtMs < BX;
        md.count = Wd ? Math.max(md.count, dd) : dd
      }
      clear() {
        this.queue.clear()
      }
    }
    const AX = (0, Wd.createContext)(null);

    function rX() {
      const dd = (0, Wd.useContext)(AX);
      if (!dd) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return dd
    }

    function GX(dd, Od) {
      return null !== Od && void 0 !== Od ? Od : 1 === dd
    }

    function nX(dd, Od) {
      return dd.every((dd => {
        var md;
        let [Wd, , Fd] = dd;
        return !GX(Fd, null === (md = Od.get(Wd)) || void 0 === md ? void 0 : md.kQ)
      }))
    }

    function LX(dd, Od, md) {
      if (0 === dd.size) return dd;
      const Wd = new Map(dd);
      for (const [Fd, Rd] of dd) {
        const dd = Od.find((dd => {
          let [Od] = dd;
          return Od === Fd
        }));
        (!dd || Rd.kQ === (1 === dd[2]) || Rd.atMs < md) && Wd.delete(Fd)
      }
      return Wd
    }

    function PX(dd) {
      var Od;
      let {
        cF: md,
        input: Fd,
        drops: Rd,
        seconds: Xd
      } = dd;
      const {
        t: Kd
      } = (0, xF.G)(), hd = rX(), [vd, Qd] = (0, Wd.useState)(new Map);
      (0, Wd.useEffect)((() => {
        Rd && Qd((dd => LX(dd, Rd, Date.now() - BX)))
      }), [Rd]), (0, Wd.useEffect)((() => {
        const dd = function(dd, Od) {
          let md = null;
          for (const {
              atMs: Wd
            }
            of dd.values()) md = null === md ? Wd : Math.min(md, Wd);
          return null === md ? null : md + Od
        }(vd, BX);
        if (null === dd || !Rd) return;
        const Od = setTimeout((() => {
          Qd((dd => LX(dd, Rd, Date.now() - BX)))
        }), Math.max(0, dd - Date.now()) + 1);
        return () => {
          clearTimeout(Od)
        }
      }), [vd, Rd]);
      const td = ed(Fd),
        od = null !== td && null !== Rd && nX(Rd, vd),
        Nd = function(dd, Od, md) {
          return null === dd || null === Od || nX(Od, md) ? 0 : Pd[nd[dd]]
        }(td, Rd, vd);
      return (0, YR.jsxs)(BR, {
        title: Kd("buildAFactory2Game:farmDropsTitle", {
          seconds: Xd
        }),
        count: null !== (Od = null === Rd || void 0 === Rd ? void 0 : Rd.length) && void 0 !== Od ? Od : 0,
        children: [Nd > 0 && (0, YR.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: Kd("buildAFactory2Game:farmDropsPower", {
            power: String(Nd)
          })
        }), (null === td || !Rd) && (0, YR.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: Kd("buildAFactory2Game:farmDropsEmpty")
        }), od && (0, YR.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: Kd("buildAFactory2Game:farmDropsAllVoided")
        }), null !== td && (null === Rd || void 0 === Rd ? void 0 : Rd.map((dd => {
          var Od;
          let [Wd, Fd, Rd] = dd;
          const Xd = Fd < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            td = GX(Rd, null === (Od = vd.get(Wd)) || void 0 === Od ? void 0 : Od.kQ);
          return (0, YR.jsxs)("li", {
            className: aF()("Baf2Recipe Baf2FarmDrop", {
              Voided: !td
            }),
            children: [(0, YR.jsx)(aR, {
              item: Wd,
              amount: 1
            }), (0, YR.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, OR.d)(Kd, Wd)
            }), (0, YR.jsx)("span", {
              className: "Baf2FarmRate",
              children: Kd(Xd, {
                amount: String(Fd)
              })
            }), (0, YR.jsx)("button", {
              type: "button",
              className: aF()("Baf2FarmToggle SmallTextBold", {
                Kept: td
              }),
              "aria-pressed": td,
              onClick: () => {
                Qd(new Map(vd).set(Wd, {
                  kQ: !td,
                  atMs: Date.now()
                })), hd.send(function(dd, Od, md, Wd) {
                  return `${zd} ${dd} ${Od} ${md} ${Wd}`
                }(md[0], md[1], md[2], Wd))
              },
              children: Kd(td ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Wd)
        })))]
      })
    }
    var zX;
    const cX = String(null !== (zX = rO.Synthesizer.waterPerOp) && void 0 !== zX ? zX : 0);

    function jX(dd) {
      let {
        cF: Od,
        taught: md
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)(), Rd = rX(), [Xd, Kd] = (0, Wd.useState)(null);
      (0, Wd.useEffect)((() => {
        null !== Xd && md === Xd && Kd(null)
      }), [Xd, md]);
      const hd = null !== Xd && void 0 !== Xd ? Xd : md;
      let vd = Fd("buildAFactory2Game:synthPick");
      return null !== hd && (vd = Fd("buildAFactory2Game:synthGrows", {
        name: (0, OR.d)(Fd, hd),
        input: (0, OR.d)(Fd, JO),
        water: cX
      })), (0, YR.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, YR.jsx)("div", {
          className: aF()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === hd
          }),
          children: vd
        }), (0, YR.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: UO.map(((dd, md) => {
            const Wd = (0, OR.d)(Fd, dd),
              Xd = dd === hd;
            return (0, YR.jsx)("li", {
              children: (0, YR.jsx)("button", {
                type: "button",
                className: aF()("Baf2SynthTile", {
                  Selected: Xd
                }),
                title: Wd,
                "aria-label": Wd,
                "aria-pressed": Xd,
                onClick: () => {
                  Xd || (Kd(dd), Rd.send(`${BO} ${Od[0]} ${Od[1]} ${Od[2]} ${md}`))
                },
                children: (0, YR.jsx)(SF.c, {
                  itemName: dd,
                  amount: 0
                })
              })
            }, dd)
          }))
        })]
      })
    }
    const DX = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function eX(dd) {
      let {
        kind: Od,
        tier: md,
        coupled: Wd,
        level: Fd,
        slot: Rd
      } = dd;
      const {
        t: Xd
      } = (0, xF.G)(), hd = fd(nO);
      if (!Wd && null !== md && md < hd) return (0, YR.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, YR.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, YR.jsx)(BF.c, {
            name: "lock"
          })
        }), (0, YR.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Xd("buildAFactory2Game:upgradeLocked")
        }), (0, YR.jsx)("span", {
          className: "Baf2TierTag",
          children: Xd("buildAFactory2Game:tierTag", {
            tier: String(hd)
          })
        })]
      });
      const vd = function(dd, Od) {
          if (Kd() && "Crusher" !== dd && null !== Od) {
            if (IX(PO, Od)) return {
              item: PO,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (IX(LO, Od)) return {
              item: LO,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: nO,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(Od, md),
        Qd = Xd(Wd ? DX[Fd - 1] : vd.emptyKey),
        td = null !== md ? function(dd, Od, md, Wd) {
          if (!Kd() || !md || "Crusher" === dd || Od < 10) return null;
          const Fd = fd(PO);
          if (Wd < 3 && Fd > 1 && (2 === Wd || Od >= Fd)) return {
            tier: Fd,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Rd = fd(LO);
          if (1 === Wd && Rd > 1) return {
            tier: Rd,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(Od, md, Wd, Fd) : null;
      return (0, YR.jsxs)("div", {
        className: aF()("Baf2UpgradeSocket", {
          Fitted: Wd
        }),
        children: [(0, YR.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Wd && Rd, !Wd && (0, YR.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, YR.jsx)(SF.c, {
              itemName: vd.item,
              amount: 0
            })
          })]
        }), (0, YR.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, YR.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Xd("buildAFactory2Game:upgradeTitle")
          }), (0, YR.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Qd
          }), Wd && Fd >= 2 && "Crusher" === Od && (0, YR.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Xd("buildAFactory2Game:couplerCrusherHint")
          }), td && null !== md && md < td.tier && (0, YR.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, YR.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, YR.jsx)(BF.c, {
                name: "lock"
              })
            }), Xd(td.lockedKey), (0, YR.jsx)("span", {
              className: "Baf2TierTag",
              children: Xd("buildAFactory2Game:tierTag", {
                tier: String(td.tier)
              })
            })]
          }), td && null !== md && md >= td.tier && (0, YR.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Xd(td.nextKey)
          })]
        })]
      })
    }

    function IX(dd, Od) {
      const md = fd(dd);
      return md > 1 && Od >= md
    }
    var lX = md(38573);
    const CX = (0, dO.F)(rO.Condenser, rO.Condenser.fluidMade),
      ZX = .05;
    class kX extends TX {}

    function fX(dd) {
      return HR(dd, "")
    }

    function MX(dd, Od, md) {
      return dd(Od ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: md
      })
    }

    function dK(dd, Od, md, Wd) {
      return md <= ZX && Wd <= ZX ? null : Wd <= ZX || md <= ZX ? MX(dd, Od, Wd <= ZX ? HR(md, "+") : HR(Wd, "\u2212")) : dd(Od ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: fX(md),
        used: fX(Wd)
      })
    }

    function OK(dd, Od) {
      return Math.min(100, 100 * dd / Math.max(1, Od))
    }

    function mK(dd) {
      let {
        stored: Od,
        cap: md,
        netPerS: Wd,
        rates: Fd,
        cryo: Rd
      } = dd;
      const {
        t: Xd
      } = (0, xF.G)(), Kd = function(dd, Od, md, Wd) {
        return md <= 0 ? dd("buildAFactory2Game:waterNoStorage") : Od >= md ? dd("buildAFactory2Game:powerFull") : Wd > ZX ? dd("buildAFactory2Game:powerFullIn", {
          time: TR(dd, (md - Od) / Wd)
        }) : Wd < -.05 ? Od <= 0 ? dd("buildAFactory2Game:waterEmpty") : dd("buildAFactory2Game:powerEmptyIn", {
          time: TR(dd, Od / -Wd)
        }) : dd("buildAFactory2Game:powerSteady")
      }(Xd, Od, md, Wd), hd = md > 0 && Od < md && Math.abs(Wd) <= ZX, vd = Xd(Rd ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Qd = null !== Fd ? `${Fd} \xb7 ${Kd}` : hd ? vd : `${vd} \xb7 ${Kd}`;
      return (0, YR.jsxs)(YR.Fragment, {
        children: [(0, YR.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, YR.jsx)("div", {
            style: {
              width: `${OK(Od,md)}%`
            }
          })
        }), (0, YR.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, YR.jsx)("span", {
            children: md > 0 && Xd("buildAFactory2Game:powerStored", {
              stored: (0, dO.O)(Od),
              cap: (0, dO.O)(md)
            })
          }), (0, YR.jsx)("span", {
            className: aF()("Baf2WaterNet", {
              Draining: Wd < -.05
            }),
            children: Qd
          })]
        })]
      })
    }

    function WK(dd) {
      let {
        water: Od,
        at: md,
        side: Wd = null
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)(), Rd = rX(), [Xd, Kd, hd] = Od;
      return (0, YR.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, YR.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, YR.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Fd(null === Wd ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Wd}`)
          }), (0, YR.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Rd.send(`${dO.A} ${md[0]} ${md[1]} ${md[2]}${"cryoOut"===Wd?" cryo":""}`)
            },
            children: Fd("buildAFactory2Game:waterDetails")
          })]
        }), (0, YR.jsx)(mK, {
          stored: Xd,
          cap: Kd,
          netPerS: hd,
          rates: MX(Fd, "cryoOut" === Wd, HR(Math.abs(hd), hd < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Wd
        })]
      })
    }

    function FK(dd, Od) {
      var md, Wd, Fd;
      const Rd = !0 === Od.baf2WaterCryo,
        Xd = null !== (md = null === (Wd = Od.baf2WaterMakers.find((dd => dd[0] === (Rd ? dO.b : "Condenser")))) || void 0 === Wd ? void 0 : Wd[1]) && void 0 !== md ? md : 0,
        Kd = [],
        hd = (Od, md, Wd) => {
          Od > 0 && Kd.push(dd(1 === Od ? md : Wd, {
            count: String(Od)
          }))
        };
      return Rd ? hd(Xd, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : hd(Xd, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), hd(null !== (Fd = Od.baf2WaterPipes) && void 0 !== Fd ? Fd : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), hd(Od.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), Kd.join(" \xb7 ")
    }

    function RK(dd, Od) {
      if (!0 === Od.baf2WaterCryo) return function(dd, Od) {
        const md = rO[dO.b];
        switch (Od.baf2WaterThis) {
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
            var Wd;
            const [Fd, Rd] = null !== (Wd = Od.baf2WaterThisRates) && void 0 !== Wd ? Wd : [(0, dO.F)(md, md.cryoMade), (0, dO.F)(md, md.powerPerOp)];
            return !0 === Od.baf2WaterDriven ? {
              text: dd("buildAFactory2Game:cryoThisMixerDriven", {
                rate: fX(Fd)
              }),
              bad: !1
            } : {
              text: dd("buildAFactory2Game:cryoThisMixer", {
                rate: fX(Fd),
                power: fX(Rd)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: dd("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(dd, Od);
      const md = !0 === Od.baf2WaterDriven,
        Wd = rO.Condenser;
      switch (Od.baf2WaterThis) {
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
              tank: (0, dO.O)(dO.t),
              cap: (0, dO.O)(Od.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Fd;
          const [Rd, Xd] = null !== (Fd = Od.baf2WaterThisRates) && void 0 !== Fd ? Fd : [CX, (0, dO.F)(Wd, Wd.powerPerOp)];
          return md ? {
            text: dd("buildAFactory2Game:waterThisCondenserDriven", {
              rate: fX(Rd)
            }),
            bad: !1
          } : {
            text: dd("buildAFactory2Game:waterThisCondenser", {
              rate: fX(Rd),
              power: fX(Xd)
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

    function XK(dd, Od) {
      const md = Od.baf2WaterMakers.some((dd => !0 === dd[5]));
      if (!0 === Od.baf2WaterCryo) {
        const Wd = Od.baf2WaterUsedPerS - Od.baf2WaterMadePerS,
          Fd = md || Wd <= ZX ? 0 : (0, dO.E)(Wd);
        return 0 === Fd ? null : Fd > 1 ? dd("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Fd)
        }) : dd("buildAFactory2Game:cryoNextOne")
      }
      const Wd = md ? null : function(dd, Od) {
        const md = Od - dd;
        return md <= ZX ? null : Math.ceil(md / CX)
      }(Od.baf2WaterMadePerS, Od.baf2WaterUsedPerS);
      return null === Wd ? null : Wd > 1 ? dd("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Wd)
      }) : dd("buildAFactory2Game:waterNextOne")
    }

    function KK(dd) {
      let {
        item: Od,
        label: md,
        note: Wd,
        value: Fd,
        dim: Rd,
        bad: Xd
      } = dd;
      return (0, YR.jsxs)("li", {
        className: aF()("Baf2WaterRow", {
          Dim: Rd,
          Bad: Xd
        }),
        children: [(0, YR.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, YR.jsx)(SF.c, {
            itemName: Od,
            amount: 0
          })
        }), (0, YR.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, YR.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: md
          }), Wd && (0, YR.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Wd
          })]
        }), (0, YR.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Fd
        })]
      })
    }

    function hK(dd) {
      return lX.q[dd] ? dd : "Reactor Port"
    }

    function vK(dd) {
      let {
        message: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)(), Wd = !0 === Od.baf2WaterCryo, Fd = (dd, Od) => MX(md, Wd, HR(dd, Od));
      return (0, YR.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, YR.jsxs)("section", {
          children: [(0, YR.jsxs)("h3", {
            children: [md("buildAFactory2Game:waterMakes"), (0, YR.jsx)("span", {
              children: Fd(Od.baf2WaterMadePerS, "+")
            })]
          }), (0, YR.jsxs)("ul", {
            children: [0 === Od.baf2WaterMakers.length && (0, YR.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: md(Wd ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), Od.baf2WaterMakers.map((dd => {
              let [Od, Wd, Rd, Xd, Kd, hd] = dd;
              const vd = md("buildAFactory2Game:powerRunning", {
                amount: String(Rd)
              });
              let Qd = Kd > 0 ? md("buildAFactory2Game:waterMakerPower", {
                running: vd,
                power: fX(Kd)
              }) : vd;
              return hd && (Qd = md(0 === Rd && Xd <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, YR.jsx)(KK, {
                item: Od,
                label: `${(0,OR.d)(md,Od)} \xd7${Wd}`,
                note: Qd,
                value: Rd > 0 || hd && Xd > 0 ? Fd(Xd, "+") : md("buildAFactory2Game:powerIdle"),
                dim: 0 === Rd && !hd,
                bad: hd
              }, Od)
            }))]
          })]
        }), (0, YR.jsxs)("section", {
          children: [(0, YR.jsxs)("h3", {
            children: [md("buildAFactory2Game:waterUses"), (0, YR.jsx)("span", {
              children: Fd(Od.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, YR.jsxs)("ul", {
            children: [0 === Od.baf2WaterUsers.length && (0, YR.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: md(Wd ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), Od.baf2WaterUsers.map((dd => {
              let [Od, Wd, Rd, Xd] = dd;
              const Kd = lX.q[Od] ? (0, OR.d)(md, Od) : Od;
              return (0, YR.jsx)(KK, {
                item: hK(Od),
                label: Wd > 1 ? `${Kd} \xd7${Wd}` : Kd,
                note: Xd ? md("buildAFactory2Game:waterPortFirst") : void 0,
                value: Rd > 0 ? Fd(Rd, "\u2212") : md("buildAFactory2Game:powerIdle"),
                dim: 0 === Rd
              }, Od)
            }))]
          })]
        })]
      })
    }

    function QK(dd) {
      var Od, md, Fd, Rd, Xd;
      let {
        store: Kd,
        close: hd
      } = dd;
      const {
        t: vd
      } = (0, xF.G)(), Qd = function(dd) {
        const [Od, md] = (0, Wd.useState)((() => dd.get()));
        return (0, Wd.useEffect)((() => (md(dd.get()), dd.subscribe((() => {
          md(dd.get())
        })))), [dd]), Od
      }(Kd), td = null !== (Od = null === Qd || void 0 === Qd ? void 0 : Qd.baf2WaterStored) && void 0 !== Od ? Od : 0, od = null !== (md = null === Qd || void 0 === Qd ? void 0 : Qd.baf2WaterCap) && void 0 !== md ? md : 0, Nd = null !== (Fd = null === Qd || void 0 === Qd ? void 0 : Qd.baf2WaterMadePerS) && void 0 !== Fd ? Fd : 0, qd = null !== (Rd = null === Qd || void 0 === Qd ? void 0 : Qd.baf2WaterUsedPerS) && void 0 !== Rd ? Rd : 0, Hd = null !== (Xd = null === Qd || void 0 === Qd ? void 0 : Qd.baf2WaterNetPerS) && void 0 !== Xd ? Xd : Nd - qd, yd = Qd && RK(vd, Qd), bd = Qd && XK(vd, Qd), Td = !0 === (null === Qd || void 0 === Qd ? void 0 : Qd.baf2WaterCryo);
      return (0, YR.jsx)(yX.c, {
        close: hd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, YR.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Qd && od <= 0 ? (0, YR.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, YR.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, YR.jsx)(SF.c, {
                  itemName: Td ? bm.h : dO.m,
                  amount: 0
                })
              }), (0, YR.jsxs)("div", {
                children: [(0, YR.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: vd(Td ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Qd && (0, YR.jsx)("p", {
                  children: FK(vd, Qd)
                })]
              })]
            }), (0, YR.jsx)(bX.j, {
              onClick: hd
            })]
          }), Qd && yd && (0, YR.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, YR.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, YR.jsx)(mK, {
                stored: td,
                cap: od,
                netPerS: Hd,
                cryo: Td,
                rates: dK(vd, Td, Nd, qd)
              })
            }), (0, YR.jsx)("div", {
              className: aF()("Baf2WaterThis", {
                Bad: yd.bad
              }),
              children: yd.text
            }), Qd.baf2WaterDriven && (0, YR.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, YR.jsx)(BF.c, {
                name: "bolt"
              }), vd(Td ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), bd && (0, YR.jsx)("p", {
              className: "Baf2WaterNext",
              children: bd
            }), (0, YR.jsx)(vK, {
              message: Qd
            })]
          })]
        })
      })
    }
    class tK {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(dd, Od) {
        const md = this.get(dd);
        md && null === Od.opLeftMs && null === Od.fuelLeftMs && Od.status === md.status ? Od = {
          ...Od,
          opLeftMs: md.opLeftMs,
          fuelLeftMs: md.fuelLeftMs,
          burning: md.burning
        } : this.updates++, this.pos = dd, this.view = Od;
        for (const Wd of this.listeners) Wd()
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

    function oK(dd, Od, md, Wd) {
      return "noFuel" === Od && Wd && !Xm(rO[dd]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === Od && !0 === (null === md || void 0 === md ? void 0 : md.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === Od && !0 === (null === md || void 0 === md ? void 0 : md.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === Od && !0 === (null === md || void 0 === md ? void 0 : md.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === Od && !0 === (null === md || void 0 === md ? void 0 : md.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : NK(Od, md) ? "buildAFactory2Game:machineStatus_noInputShort" : function(dd, Od) {
        const md = rO[dd];
        if ("noFuel" === Od && void 0 !== md.fuels) return Xm(md) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (md.mobFarm && ("noInput" === Od || "badInput" === Od)) return `buildAFactory2Game:machineStatus_${Od}MobFarm`;
        if ("outputFull" === Od && (void 0 !== md.table || md.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === Od && CO(md)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== md.cryoMade && ("noInput" === Od || "noOutlet" === Od || "fluidFull" === Od)) return `buildAFactory2Game:machineStatus_${Od}Mixer`;
        return `buildAFactory2Game:machineStatus_${Od}`
      }(dd, Od)
    }

    function NK(dd, Od) {
      return "noInput" === dd && null !== Od && void 0 !== Od && Od.input && Od.inputShort ? {
        input: Od.input,
        short: Od.inputShort
      } : null
    }

    function qK(dd) {
      return EF(dd) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== dd.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function HK(dd) {
      const Od = (0, rd.te)(dd);
      return `Baf2Pane Baf2Pane${Od.charAt(0).toUpperCase()}${Od.slice(1)}`
    }

    function yK(dd, Od) {
      const [md, Fd] = (0, Wd.useState)((() => dd.get(Od)));
      return (0, Wd.useEffect)((() => {
        Fd(dd.get(Od));
        const md = dd.subscribe((() => {
          Fd(dd.get(Od))
        }));
        return () => {
          md(), dd.forget(Od)
        }
      }), [dd, ...Od]), md
    }

    function bK(dd, Od, md, Wd) {
      const Fd = rO[dd],
        Rd = Od && Fd.couplable ? DO(Fd, md) : Fd,
        Xd = null !== Wd && Wm(Rd) ? function(dd, Od) {
          var md;
          return null !== (md = null !== Od && Wm(dd) ? Qm[Od] : void 0) && void 0 !== md ? md : dd.opMs
        }(Rd, tm(Wd)) : Rd.opMs;
      return Xd === Rd.opMs ? Rd : {
        ...Rd,
        opMs: Xd
      }
    }

    function TK(dd) {
      let {
        running: Od,
        opMs: md,
        opLeftMs: Wd,
        updateCount: Fd
      } = dd;
      return (0, YR.jsx)("div", {
        className: aF()("Baf2MachineProgress", {
          Running: Od
        }),
        children: (0, YR.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: md / 1e3 + "s",
            animationDelay: null === Wd ? void 0 : (Wd - md) / 1e3 + "s"
          }
        }, Fd)
      })
    }

    function pK(dd) {
      let {
        running: Od,
        leftMs: md,
        periodMs: Wd,
        updateCount: Fd
      } = dd;
      const {
        t: Rd
      } = (0, xF.G)(), Xd = Math.min(Math.max(null !== md && void 0 !== md ? md : 0, 0), Wd), Kd = Od && Xd > 0, hd = Rd("buildAFactory2Game:machineBarFuel");
      return (0, YR.jsx)("div", {
        className: aF()("Baf2FuelBurn", {
          Draining: Kd
        }),
        role: "img",
        title: hd,
        "aria-label": hd,
        children: (0, YR.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: Kd ? {
            animationDuration: Wd / 1e3 + "s",
            animationDelay: (Xd - Wd) / 1e3 + "s"
          } : {
            transform: `scaleY(${Xd/Wd})`
          }
        }, Fd)
      })
    }

    function YK(dd, Od, md) {
      let [Wd, Fd] = md;
      const Rd = 1 !== Wd ? UF(Od) : null;
      return {
        amount: Wd,
        have: Fd,
        item: dd(Rd || (0, OR.c)(Od))
      }
    }

    function gK(dd) {
      return Wm(dd) ? "buildAFactory2Game:machineBarMining" : Fm(dd) ? "buildAFactory2Game:machineBarCutting" : void 0 !== dd.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function wK(dd) {
      var Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd;
      let {
        kind: Yd,
        cF: gd,
        store: wd,
        power: Ed,
        renderSlot: Jd
      } = dd;
      const {
        t: Ud
      } = (0, xF.G)(), xd = yK(wd, gd), Bd = rO[Yd], Sd = null !== (Od = null === xd || void 0 === xd ? void 0 : xd.coupled) && void 0 !== Od && Od, sd = null !== (md = null === xd || void 0 === xd ? void 0 : xd.couplerLevel) && void 0 !== md ? md : 1, ud = bK(Yd, Sd, sd, null !== (Wd = null === xd || void 0 === xd || null === (Fd = xd.dug) || void 0 === Fd ? void 0 : Fd.item) && void 0 !== Wd ? Wd : null), Vd = null !== (Rd = null === xd || void 0 === xd ? void 0 : xd.status) && void 0 !== Rd ? Rd : null, Ad = null !== (Xd = null === xd || void 0 === xd ? void 0 : xd.power) && void 0 !== Xd ? Xd : null, rd = null !== (Kd = null === xd || void 0 === xd ? void 0 : xd.opLeftMs) && void 0 !== Kd ? Kd : null, Gd = null !== (hd = null === xd || void 0 === xd ? void 0 : xd.dug) && void 0 !== hd ? hd : null, nd = null !== Gd && Wm(Bd) ? Qm[null !== (vd = tm(Gd.item)) && void 0 !== vd ? vd : ""] : void 0, Ld = void 0 === nd ? null : 6e4 / nd, Pd = null !== (Qd = null === xd || void 0 === xd ? void 0 : xd.powerCap) && void 0 !== Qd ? Qd : 4e3, zd = null !== (td = null === xd || void 0 === xd ? void 0 : xd.tier) && void 0 !== td ? td : null, cd = void 0 !== ud.powerMade, jd = null !== Bd.fuelSlot ? Jd(Bd.fuelSlot) : null, Dd = jO(Bd), ed = !Sd && !0 === (null === xd || void 0 === xd ? void 0 : xd.fuelFed), ld = !Sd && !0 === (null === xd || void 0 === xd ? void 0 : xd.fuelFeeds), Cd = null !== Bd.fuelSlot && !Sd, Zd = null !== (od = null === xd || void 0 === xd ? void 0 : xd.fuelLeftMs) && void 0 !== od ? od : null, kd = function(dd, Od, md) {
        var Wd;
        const Fd = null === Od ? void 0 : Km[Od];
        return Math.max(null !== (Wd = null !== Fd && void 0 !== Fd ? Fd : md) && void 0 !== Wd ? Wd : 0, dd.opMs)
      }(ud, null !== (Nd = null === xd || void 0 === xd ? void 0 : xd.burning) && void 0 !== Nd ? Nd : null, Zd), fd = null !== (qd = null === xd || void 0 === xd ? void 0 : xd.fuelKeep) && void 0 !== qd ? qd : null, Md = null === Vd ? null : oK(Yd, Vd, xd, ed), dO = null === Vd ? null : NK(Vd, xd);
      return (0, YR.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, YR.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, YR.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Ud((0, OR.c)(Yd))
          }), Gd && (0, YR.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [Ud("Tree Cutter" === Yd ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, YR.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, YR.jsx)(SF.c, {
                itemName: Gd.item,
                amount: 0
              })
            }), (0, YR.jsx)(sF.d, {
              text: Gd.name
            })]
          }), null !== Ld && (0, YR.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: Ud("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Ld)
            })
          }), (null === xd || void 0 === xd ? void 0 : xd.field) && (0, YR.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, YR.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, YR.jsx)(SF.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), Ud("buildAFactory2Game:machineField", {
              planted: String(xd.field[0]),
              ripe: String(xd.field[1])
            })]
          }), (0, YR.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, YR.jsxs)("div", {
              className: aF()("Baf2MachineColumn", {
                Baf2Burns: Cd
              }),
              children: [null !== ud.inputSlot && (0, YR.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, YR.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Ud(qK(ud))
                }), Jd(ud.inputSlot)]
              }), null !== Bd.fuelSlot && !Sd && (0, YR.jsxs)("div", {
                className: aF()("Baf2MachineSlot", {
                  Baf2FuelFed: ed
                }),
                children: [(0, YR.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [ed && (0, YR.jsx)(BF.c, {
                    name: "fire"
                  }), Ud("buildAFactory2Game:machineFuel")]
                }), (0, YR.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, YR.jsx)(pK, {
                    running: "running" === Vd,
                    leftMs: Zd,
                    periodMs: kd,
                    updateCount: wd.updateCount
                  }), jd]
                })]
              }), null !== Bd.fuelSlot && Sd && (0, YR.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, YR.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Ud("buildAFactory2Game:machineFuel")
                }), (0, YR.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: Ud("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": Ud("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, YR.jsx)(BF.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, YR.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, YR.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Ud(gK(ud))
              }), (0, YR.jsx)(TK, {
                running: "running" === Vd,
                opMs: ud.opMs,
                opLeftMs: rd,
                updateCount: wd.updateCount
              })]
            }), ud.outputSlots.length > 0 && (0, YR.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, YR.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Ud("buildAFactory2Game:machineOutput")
              }), (0, YR.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: ud.outputSlots.map((dd => (0, YR.jsx)("div", {
                  children: Jd(dd)
                }, dd)))
              })]
            }), null !== Ad && cd && (0, YR.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, YR.jsx)("div", {
                style: {
                  height: 100 * Ad / Pd + "%"
                }
              })
            })]
          }), Cd && null !== fd && (0, YR.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, YR.jsx)(BF.c, {
              name: "arrows-rotate"
            }), Ud(Fm(ud) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(fd)
            })]
          }), (ed || ld) && (0, YR.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, YR.jsx)(BF.c, {
              name: "fire"
            }), Ud(ed ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Bd.couplable && (0, YR.jsx)(eX, {
            kind: Yd,
            tier: zd,
            coupled: Sd,
            level: sd,
            slot: Dd === Bd.fuelSlot ? jd : null !== Dd ? Jd(Dd) : null
          }), null !== Ad && !cd && !0 === (null === xd || void 0 === xd ? void 0 : xd.reactorPowered) && (0, YR.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: Ud("buildAFactory2Game:machineReactorPowered")
          }), null !== Ad && !cd && !0 !== (null === xd || void 0 === xd ? void 0 : xd.reactorPowered) && (0, YR.jsx)(EX, {
            stored: Ad,
            cap: Pd,
            rates: null !== (Hd = null === xd || void 0 === xd ? void 0 : xd.powerRates) && void 0 !== Hd ? Hd : null
          }), (null === xd || void 0 === xd ? void 0 : xd.water) && (0, YR.jsx)(WK, {
            water: xd.water,
            at: gd,
            side: xd.cryo ? "waterIn" : null
          }), (null === xd || void 0 === xd ? void 0 : xd.cryo) && (0, YR.jsx)(WK, {
            water: xd.cryo,
            at: gd,
            side: "cryoOut"
          }), null !== xd && void 0 !== xd && xd.inertCoupler ? (0, YR.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: Ud("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, OR.d)(Ud, xd.inertCoupler)
            })
          }) : null !== Md && (0, YR.jsx)("div", {
            className: aF()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Vd
            }),
            children: Ud(Md, dO ? YK(Ud, dO.input, dO.short) : void 0)
          })]
        }), (0, YR.jsxs)("div", {
          className: aF()("Baf2MachineSide", {
            Baf2SynthSide: CO(Bd)
          }),
          children: [CO(Bd) && (0, YR.jsx)(jX, {
            cF: gd,
            taught: null !== (yd = null === xd || void 0 === xd ? void 0 : xd.taught) && void 0 !== yd ? yd : null
          }, gd.join(",")), cd && (0, YR.jsx)(UX, {
            kind: Yd,
            def: ud,
            cF: gd,
            power: Ed,
            stored: null !== Ad && void 0 !== Ad ? Ad : 0,
            cap: Pd
          }), Id(Bd) && (0, YR.jsx)(PX, {
            cF: gd,
            input: null !== (bd = null === xd || void 0 === xd ? void 0 : xd.input) && void 0 !== bd ? bd : null,
            drops: null !== (Td = null === xd || void 0 === xd ? void 0 : xd.farm) && void 0 !== Td ? Td : null,
            seconds: String(ud.opMs / 1e3)
          }), !cd && !Id(Bd) && !CO(Bd) && (0, YR.jsx)(fR, {
            kind: Yd,
            def: ud,
            input: null !== (pd = null === xd || void 0 === xd ? void 0 : xd.input) && void 0 !== pd ? pd : null,
            tier: null !== zd && void 0 !== zd ? zd : 1,
            noSeeds: !0 === (null === xd || void 0 === xd ? void 0 : xd.noSeeds)
          })]
        })]
      })
    }

    function aK(dd, Od, md, Wd) {
      var Fd;
      const Rd = rO[dd],
        Xd = [Rd.inputSlot, Rd.fuelSlot, ...null !== (Fd = Rd.inputSlots) && void 0 !== Fd ? Fd : []].filter((dd => null !== dd));
      return {
        render: Fd => {
          let {
            cF: Rd,
            renderSlot: Xd
          } = Fd;
          return (0, YR.jsx)(AX.Provider, {
            value: Wd,
            children: (0, YR.jsx)(wK, {
              kind: dd,
              cF: Rd,
              store: Od,
              power: md,
              renderSlot: Xd
            })
          })
        },
        quickMoveRange: Xd.length > 0 ? [Math.min(...Xd), Math.max(...Xd) + 1] : [0, 0],
        className: HK(dd)
      }
    }
    const EK = "Assembler";

    function JK(dd) {
      var Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd;
      let {
        cF: Qd,
        store: td,
        renderSlot: od
      } = dd;
      const {
        t: Nd
      } = (0, xF.G)(), qd = yK(td, Qd), Hd = null !== (Od = null === qd || void 0 === qd ? void 0 : qd.tier) && void 0 !== Od ? Od : 1, yd = null !== (md = null === qd || void 0 === qd ? void 0 : qd.taught) && void 0 !== md ? md : null, bd = MO(EK, {
        coupled: !1,
        taught: yd
      }), Td = null !== (Wd = bd.bench) && void 0 !== Wd ? Wd : null, pd = null !== (Fd = null === qd || void 0 === qd ? void 0 : qd.status) && void 0 !== Fd ? Fd : null, Yd = null !== (Rd = null === qd || void 0 === qd ? void 0 : qd.power) && void 0 !== Rd ? Rd : null, gd = null !== (Xd = null === qd || void 0 === qd ? void 0 : qd.powerCap) && void 0 !== Xd ? Xd : 4e3;
      return (0, YR.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, YR.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, YR.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Nd((0, OR.c)(EK))
          }), Td && (0, YR.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Nd("buildAFactory2Game:benchMakes"), (0, YR.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, YR.jsx)(SF.c, {
                itemName: Td.output,
                amount: 0
              })
            }), (null === qd || void 0 === qd ? void 0 : qd.taughtName) && (0, YR.jsx)(sF.d, {
              text: qd.taughtName
            }), Td.outputAmount > 1 && (0, YR.jsxs)("span", {
              children: ["\xd7", Td.outputAmount]
            })]
          }), !Td && (0, YR.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Nd("buildAFactory2Game:benchTeachHint")
          }), (0, YR.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, YR.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (Kd = bd.inputSlots) && void 0 !== Kd ? Kd : []).map(((dd, Od) => {
                const md = null === Td || void 0 === Td ? void 0 : Td.inputs[Od];
                return (0, YR.jsxs)("div", {
                  className: aF()("Baf2BenchInput", {
                    Spare: !md
                  }),
                  children: [(0, YR.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [od(dd), md && (0, YR.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, YR.jsx)(SF.c, {
                        itemName: md.item,
                        amount: 0
                      })
                    })]
                  }), (0, YR.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: md ? `\xd7${md.amount}` : "\xa0"
                  })]
                }, dd)
              }))
            }), (0, YR.jsx)(TK, {
              running: "running" === pd,
              opMs: bd.opMs,
              opLeftMs: null !== (hd = null === qd || void 0 === qd ? void 0 : qd.opLeftMs) && void 0 !== hd ? hd : null,
              updateCount: td.updateCount
            }), (0, YR.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, YR.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Nd("buildAFactory2Game:machineOutput")
              }), (0, YR.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: bd.outputSlots.map((dd => (0, YR.jsx)("div", {
                  children: od(dd)
                }, dd)))
              })]
            })]
          }), null !== Yd && (0, YR.jsx)(EX, {
            stored: Yd,
            cap: gd,
            rates: null !== (vd = null === qd || void 0 === qd ? void 0 : qd.powerRates) && void 0 !== vd ? vd : null
          }), null !== pd && (0, YR.jsx)("div", {
            className: aF()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== pd
            }),
            children: Nd(oK(EK, pd, qd, !1))
          }), Td && Td.inputs.length > 1 && (0, YR.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Nd("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, YR.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, YR.jsx)(dX, {
            taught: yd,
            tier: Hd
          }), Td && (0, YR.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Nd("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function UK(dd) {
      var Od;
      const md = null !== (Od = rO[EK].inputSlots) && void 0 !== Od ? Od : [];
      return {
        render: Od => {
          let {
            cF: md,
            renderSlot: Wd
          } = Od;
          return (0, YR.jsx)(JK, {
            cF: md,
            store: dd,
            renderSlot: Wd
          })
        },
        quickMoveRange: [Math.min(...md), Math.max(...md) + 1],
        className: HK(EK)
      }
    }
    var xK = md(107),
      BK = md(1186),
      SK = md(2991);
    const sK = 600,
      uK = .5,
      VK = 4,
      iK = 1200,
      AK = 140,
      rK = 100,
      GK = 32,
      nK = 16,
      LK = 100.5,
      PK = 90,
      zK = 1.5,
      cK = 50;

    function jK(dd) {
      switch (im(dd)) {
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
    const DK = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function eK(dd) {
      const Od = Math.ceil(60 * dd / rK);
      return {
        fuel: Math.max(GK, Od),
        waste: Math.max(nK, Od)
      }
    }

    function IK(dd, Od, md) {
      const [Wd, Fd, Rd] = [dd - 2, Od - 2, md - 2];
      return 2 * (Wd * Fd + Fd * Rd + Rd * Wd) * AK
    }

    function lK(dd, Od, md) {
      return Math.max(0, dd - 2) * Math.max(0, Od - 2) * Math.max(0, md - 2)
    }

    function CK(dd, Od) {
      const [md, Wd, Fd] = dd, Rd = md * Wd * Fd, Xd = new Float32Array(Rd);
      let Kd = 0,
        hd = 0,
        vd = 0,
        Qd = 0,
        td = 0;
      const od = (dd, Rd, Xd) => dd < 0 || dd >= md || Rd < 0 || Rd >= Wd || Xd < 0 || Xd >= Fd ? 0 : Od[(Rd * Fd + Xd) * md + dd];
      for (let yd = 0; yd < Wd; yd++)
        for (let dd = 0; dd < Fd; dd++)
          for (let Wd = 0; Wd < md; Wd++) {
            const Rd = (yd * Fd + dd) * md + Wd,
              Nd = Od[Rd];
            if (1 === Nd) {
              Kd++;
              let Od = 0;
              for (const [md, Fd, Rd] of DK) {
                const Xd = od(Wd + md, yd + Fd, dd + Rd);
                1 !== Xd && 2 !== Xd || Od++
              }
              Xd[Rd] = sK * (1 + uK * Math.min(Od, VK)), Qd += Xd[Rd]
            } else if (2 === Nd) hd++;
            else if (3 === Nd) {
              vd++;
              DK.some((Od => {
                let [md, Fd, Rd] = Od;
                return 1 === od(Wd + md, yd + Fd, dd + Rd)
              })) && (td += iK)
            }
          }
      const Nd = IK(md + 2, Wd + 2, Fd + 2),
        qd = Math.min(Qd, td, Nd),
        Hd = Kd > 0 ? Qd * rK / Kd : 0;
      return {
        rods: Kd,
        graphite: hd,
        channels: vd,
        fuelHeat: Qd,
        cooling: td,
        size: Nd,
        max: qd,
        vol: Rd,
        powerPerUnit: Hd,
        pelletsPerMin: Hd > 0 ? qd / Hd * 60 : 0,
        waterPerS: qd * dO.q,
        rodHeat: Xd
      }
    }
    const ZK = 0,
      kK = 1,
      fK = 6,
      MK = 7,
      dh = 8;

    function Oh(dd, Od) {
      const [md, Wd, Fd] = dd, Rd = new Uint8Array(md * Wd * Fd), Xd = (dd, Rd, Xd) => dd < 0 || dd >= md || Rd < 0 || Rd >= Wd || Xd < 0 || Xd >= Fd ? 0 : Od[(Rd * Fd + Xd) * md + dd];
      for (let Kd = 0; Kd < Wd; Kd++)
        for (let dd = 0; dd < Fd; dd++)
          for (let Wd = 0; Wd < md; Wd++) {
            const hd = (Kd * Fd + dd) * md + Wd,
              vd = Od[hd];
            if (1 === vd) {
              let Od = 0;
              for (const [md, Fd, Rd] of DK) {
                const hd = Xd(Wd + md, Kd + Fd, dd + Rd);
                Od += 1 === hd || 2 === hd ? 1 : 0
              }
              Rd[hd] = kK + Math.min(Od, VK)
            } else if (3 === vd) {
              const Od = DK.some((Od => {
                let [md, Fd, Rd] = Od;
                return 1 === Xd(Wd + md, Kd + Fd, dd + Rd)
              }));
              Rd[hd] = Od ? fK : MK
            } else 2 === vd && (Rd[hd] = dh)
          }
      return Rd
    }

    function mh(dd) {
      return dd.fuelHeat <= dd.cooling && dd.fuelHeat <= dd.size ? "fuel" : dd.cooling <= dd.size ? "cooling" : "size"
    }
    const Wh = PK;

    function Fh(dd, Od, md) {
      return Math.round(dd * Od * md * 25e3 * (1 + .25 * (Math.min(dd, Od, md) - 2)))
    }

    function Rh(dd) {
      return Math.max(0, Math.min(dO.e, dd))
    }

    function Xh(dd, Od, md) {
      const Wd = Od * Rh(md);
      return dd <= 0 ? 0 : Wd > 0 ? Math.min(200, 100 * dd / Wd) : 200
    }

    function Kh(dd, Od) {
      const md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? zK : 1;
      return Math.min(dd.fuelHeat * md, dd.cooling * Rh(Od), dd.size * md)
    }

    function hh(dd) {
      return 2 + dd / 10
    }
    const vh = "buildAFactory2Game:";

    function Qh(dd) {
      var Od;
      return null !== (Od = dd.baf2RxMood) && void 0 !== Od ? Od : function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const md = [
          ["calm", 50],
          ["warm", Wh],
          ["hot", LK]
        ];
        for (const [Wd, Fd] of md)
          if (dd < Fd + (Wd === Od ? 3 : 0)) return Wd;
        return "alarm"
      }(dd.baf2RxHeat)
    }
    const th = 120;

    function oh(dd) {
      const Od = dd.baf2RxState;
      if ("running" === Od && dd.baf2RxHeat > LK) return {
        label: `${vh}rxState_tooHot`,
        tone: "bad",
        fix: `${vh}rxFix_tooHot`
      };
      switch (Od) {
        case "running":
          return {
            label: `${vh}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${vh}rxState_idle`, tone: "off", fix: `${vh}rxFix_idle`
          };
        case "scram":
          return {
            label: `${vh}rxState_scram`, tone: "off", fix: dd.baf2RxHeat < cK ? `${vh}rxFix_scramCool` : `${vh}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${vh}rxState_${Od}`, tone: "off", fix: `${vh}rxFix_${Od}`
          };
        case "melted":
          return {
            label: `${vh}rxState_melted`, tone: "bad", fix: `${vh}rxFix_melted`
          };
        default:
          return {
            label: `${vh}rxState_${Od}`, tone: "warn", fix: `${vh}rxFix_${Od}`
          }
      }
    }

    function Nh(dd) {
      const [Od, md, Wd] = dd.baf2RxStats;
      return {
        fuelHeat: Od,
        cooling: md * (dd.baf2RxCryo ? Math.max(1, Rh(dd.baf2RxWater / 100)) : 1),
        size: Wd
      }
    }

    function qh(dd) {
      var Od;
      const md = "idle" === dd.baf2RxState || "running" === dd.baf2RxState && dd.baf2RxHeat <= LK || "scram" === dd.baf2RxState && dd.baf2RxHeat < cK;
      if (0 === (dd.baf2RxFlags & wO) || !dd.baf2RxFormed || !md) return null;
      const {
        fuelHeat: Wd,
        cooling: Fd,
        size: Rd
      } = Nh(dd), Xd = Math.min(Wd, Fd, Rd), Kd = mh({
        fuelHeat: Wd,
        cooling: Fd,
        size: Rd
      }), hd = "cooling" === Kd && !0 === dd.baf2RxCryoOpen && !dd.baf2RxCryo, vd = null !== (Od = dd.baf2RxCells) && void 0 !== Od ? Od : "", Qd = ("fuel" === Kd || "cooling" === Kd && !0 === dd.baf2RxCryo) && vd.length > 0 && !vd.includes(String(0)), td = hd ? "Cryo" : "scram" === dd.baf2RxState ? "Off" : "";
      return Xd < 12e3 ? {
        key: `${vh}rxGrow_${Qd?"full":Kd}${td}`,
        amount: Xd
      } : null
    }

    function Hh(dd, Od) {
      return dd[0] === Od[0] && dd[1] === Od[1] && dd[2] === Od[2]
    }

    function yh(dd) {
      return [...dd].sort(((dd, Od) => Number(Od[2] < Od[1]) - Number(dd[2] < dd[1])))
    }

    function bh(dd, Od) {
      return Od.some((Od => {
        let [md, Wd] = Od;
        return !(Wd <= 0) && ["edge", "cap", "wall", "inside"].some((Od => md === hW(dd, Od)))
      }))
    }

    function Th(dd, Od, md) {
      const Wd = dd.baf2RxFuel - dd.baf2RxPu > 0 ? md : 0;
      return {
        full: dd.baf2RxWaste > Od - 3,
        fullInS: Wd > 0 ? Math.max(0, Od - dd.baf2RxWaste) / Wd : null
      }
    }
    const ph = {
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

    function Yh(dd) {
      return gh[dd]
    }
    const gh = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function wh(dd) {
      let [Od, md, Wd] = dd;
      return Math.ceil(IK(Od, md, Wd) * dO.q)
    }

    function ah(dd, Od) {
      return "battery" === dd ? Od[0] * Od[1] * Od[2] : function(dd) {
        let [Od, md, Wd] = dd;
        return Od * md * Wd - Math.max(0, Od - 2) * Math.max(0, md - 2) * Math.max(0, Wd - 2)
      }(Od) - 1
    }

    function Eh(dd) {
      const Od = Math.max(0, dd);
      if (Od < 10) return String(Math.round(10 * Od) / 10);
      if (Od < 1e4) return Math.round(Od).toLocaleString("en-US");
      if (Od < 1e6) return `${Od<1e5?(Math.floor(Od/100)/10).toFixed(1):Math.floor(Od/1e3)}k`;
      const md = Od / 1e6;
      return `${md<10?(Math.floor(100*md)/100).toFixed(2):md<100?(Math.floor(10*md)/10).toFixed(1):Math.floor(md)}M`
    }

    function Jh(dd) {
      return dd <= 0 ? "0" : dd >= 10 ? String(Math.round(dd)) : dd.toFixed(dd >= 1 ? 1 : 2)
    }

    function Uh(dd) {
      const Od = OW(dd, 0),
        md = OW(dd, km(dd) - 1);
      return {
        lo: [Math.min(Od[0], md[0]), Math.min(Od[1], md[1]), Math.min(Od[2], md[2])],
        hi: [Math.max(Od[0], md[0]) + 1, Math.max(Od[1], md[1]) + 1, Math.max(Od[2], md[2]) + 1]
      }
    }

    function xh(dd, Od, md) {
      const Wd = [Od[0] - dd[0], Od[1] - dd[1], Od[2] - dd[2]],
        Fd = [(dd[0] + Od[0]) / 2, (dd[1] + Od[1]) / 2, (dd[2] + Od[2]) / 2],
        Rd = [];
      for (let Xd = 0; Xd < 3; Xd++) {
        const Kd = (Xd + 1) % 3,
          hd = (Xd + 2) % 3;
        for (const vd of [dd[Kd], Od[Kd]])
          for (const Qd of [dd[hd], Od[hd]]) {
            const dd = [0, 0, 0],
              Od = [md, md, md];
            dd[Xd] = Fd[Xd], Od[Xd] = Wd[Xd] + md, dd[Kd] = vd, dd[hd] = Qd, Rd.push([dd, Od])
          }
      }
      return Rd
    }
    const Bh = "buildAFactory2Game:",
      Sh = [`${Bh}colNorth`, `${Bh}colEast`, `${Bh}colSouth`, `${Bh}colWest`];

    function sh(dd, Od) {
      const [md, Wd, Fd] = dd.baf2ColAt;
      return `baf2col ${md} ${Wd} ${Fd} ${Od}`
    }

    function uh(dd) {
      return function(dd) {
        if (!Number.isFinite(dd)) return "";
        const Od = Math.max(1, Math.round(dd));
        if (Od < 60) return `${Od}s`;
        const md = Od % 60;
        return 0 === md ? Od / 60 + "m" : `${Math.floor(Od/60)}m ${md}s`
      }(function(dd) {
        const Od = vW.FOCUS_BY_LASERS[Math.max(0, Math.min(4, dd))];
        return Od > 0 ? vW.NOVA_FOCUS / Od : 1 / 0
      }(dd))
    }

    function Vh(dd) {
      const Od = Math.abs(Math.round(dd));
      return Od < 1e3 ? Math.round(dd).toLocaleString("en-US") : Od < 1e6 ? `${Od<1e5?(dd/1e3).toFixed(1).replace(/\.0$/,""):Math.round(dd/1e3)}k` : `${(dd/1e6).toFixed(Od<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function ih(dd, Od, md) {
      if (HW(Od) >= 0) {
        const Od = function(dd, Od) {
          return dd.find((dd => {
            let {
              focus: md
            } = dd;
            return md[0] === Od[0] && md[2] === Od[2] && (Od[1] === md[1] || Od[1] === md[1] - 1)
          }))
        }(dd, md);
        if (!Od) return null;
        const Fd = function(dd) {
          let Od = 0,
            md = 0;
          for (let Wd = 0; Wd < 4; Wd++) Od += dd.laser[Wd] ? 1 : 0, md += dd.live[Wd] ? 1 : 0;
          return {
            lasers: Od,
            live: md,
            focusPerS: vW.FOCUS_BY_LASERS[md],
            drawPerS: vW.LASER_DRAW * md
          }
        }({
          laser: Od.lasers,
          live: Od.live
        });
        if (0 === Fd.lasers || "noLasers" === Od.state) return {
          key: `${Bh}lookColNoLasers`
        };
        if (0 === Fd.live) return {
          key: `${Bh}lookColOff_blocked`
        };
        if (!(Od.on && Fd.live > 0) && ("running" !== (Wd = Od.state) && "slowed" !== Wd)) return {
          key: `${Bh}lookColOff_${Od.state}`
        };
        if (Fd.live < Fd.lasers) return {
          key: `${Bh}lookColLasersSome`,
          params: {
            lasers: String(Fd.lasers),
            live: String(Fd.live)
          }
        };
        const Rd = Od.open.filter(Boolean).length;
        return Rd < 4 ? {
          key: `${Bh}lookColLasersSpots`,
          params: {
            live: String(Fd.live),
            spots: String(Rd),
            time: uh(Fd.live)
          }
        } : {
          key: `${Bh}lookColLasers`,
          params: {
            live: String(Fd.live),
            time: uh(Fd.live)
          }
        }
      }
      var Wd;
      if (!yW(Od)) return null;
      const Fd = function(dd, Od) {
        for (const md of dd) {
          const dd = YW(md.focus, [Od[0], Od[1], Od[2]]);
          if (dd && dd.UX === vW.LASER_D && md.lasers[dd.dir]) return {
            entry: md,
            dir: dd.dir
          }
        }
        return null
      }(dd, md);
      if (!Fd) return {
        key: `${Bh}lookLaserNoCollider`
      };
      const {
        entry: Rd,
        dir: Xd
      } = Fd;
      return Rd.open[Xd] ? Rd.live[Xd] ? {
        key: Rd.on ? `${Bh}lookLaserFiring` : `${Bh}lookLaserReady`
      } : {
        key: `${Bh}lookLaserBlocked`
      } : {
        key: `${Bh}lookLaserClosed`
      }
    }

    function Ah(dd, Od) {
      const md = [];
      for (let Wd = 1; Wd < vW.LASER_D; Wd++) dd & 1 << Od * (vW.LASER_D - 1) + Wd - 1 && md.push(Wd);
      return md
    }
    const rh = {
      firing: `${Bh}colSlotFiring`,
      ready: `${Bh}colSlotReady`,
      blocked: `${Bh}colSlotBlocked`,
      empty: `${Bh}colSlotEmpty`,
      closed: `${Bh}colSlotClosed`
    };

    function Gh(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Rd = XF(dd),
        Xd = XF(Od),
        Kd = XF(md),
        hd = Kd.filter(Boolean).length,
        vd = Rd.filter(Boolean).length,
        Qd = [0, 1, 2, 3].map((dd => Xd[dd] ? Rd[dd] ? Kd[dd] ? Wd ? "firing" : "ready" : "blocked" : (dd => Ah(Fd, dd).length > 0)(dd) ? "blocked" : "empty" : "closed")),
        td = Qd.indexOf("blocked"),
        od = td < 0 && vd > 0 ? Qd.indexOf("empty") : -1;
      return Qd.map(((dd, Od) => {
        const md = Od === td ? {
          key: `${Bh}colSlotClear`
        } : Od === od ? {
          key: `${Bh}colSlotAdd`,
          params: {
            time: uh(Math.min(4, hd + 1))
          }
        } : null;
        return {
          dir: Od,
          tone: dd,
          title: {
            key: "blocked" !== dd || Rd[Od] ? rh[dd] : `${Bh}colSlotGap`,
            keys: {
              dir: Sh[Od]
            }
          },
          hint: md
        }
      }))
    }

    function nh(dd) {
      var Od;
      return "noPower" === dd.baf2ColState && dd.baf2ColRxState ? oh({
        baf2RxState: dd.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (Od = dd.baf2ColRxHeat) && void 0 !== Od ? Od : 0
      }) : null
    }

    function Lh(dd) {
      const Od = XF(dd.baf2ColSpots).filter(Boolean).length,
        md = XF(dd.baf2ColLive);
      let Wd = 0,
        Fd = 0;
      return XF(dd.baf2ColLasers).forEach(((dd, Od) => {
        dd && (Wd++, Fd += md[Od] ? 0 : 1)
      })), Fd > 0 ? {
        key: `${Bh}colSubSome`,
        params: {
          blocked: String(Fd),
          lasers: String(Wd)
        }
      } : Od < 4 ? {
        key: `${Bh}colSubSpots`,
        params: {
          lasers: String(Wd),
          spots: String(Od)
        }
      } : {
        key: `${Bh}colSub`,
        params: {
          lasers: String(Wd)
        }
      }
    }

    function Ph(dd) {
      const Od = nh(dd);
      if ("idle" === dd.baf2ColRxState && Od) return {
        key: `${Bh}colState_noPowerIdle`
      };
      if (Od) return {
        key: `${Bh}colState_noPowerReactor`,
        keys: {
          state: Od.label
        }
      };
      if ("noInput" !== dd.baf2ColState) return {
        key: `${Bh}colState_${dd.baf2ColState}`
      };
      const md = String(Math.max(0, vW.NOVA_SA - dd.baf2ColSa)),
        Wd = String(Math.max(0, vW.NOVA_GD - dd.baf2ColGd));
      return "0" !== md && "0" !== Wd ? {
        key: `${Bh}colState_noInput`,
        params: {
          sa: md,
          gd: Wd
        }
      } : "0" !== md ? {
        key: `${Bh}colState_noStarAlloy`,
        params: {
          sa: md
        }
      } : "0" !== Wd ? {
        key: `${Bh}colState_noGlowDust`,
        params: {
          gd: Wd
        }
      } : {
        key: `${Bh}colState_running`
      }
    }

    function zh(dd) {
      return dd.baf2ColP < 0 ? `${Bh}colNext` : function(dd) {
        const Od = dd.baf2ColState;
        return dd.baf2ColP >= 0 && ("blocked" === Od || "noLasers" === Od || "noPower" === Od)
      }(dd) ? `${Bh}colStalled` : null === ch(dd) ? `${Bh}colMaking` : `${Bh}colNovaIn`
    }

    function ch(dd) {
      if (dd.baf2ColP < 0 || dd.baf2ColWant <= 0) return null;
      const Od = dd.baf2ColFocusPerS * Math.min(1, dd.baf2ColDraw / dd.baf2ColWant);
      return Od > 0 ? Math.max(0, vW.NOVA_FOCUS - dd.baf2ColP) / Od : null
    }

    function jh(dd, Od) {
      const md = [];
      for (let Wd = 1; Wd <= 3; Wd++) {
        const Fd = [dd[0], dd[1] - Wd, dd[2]];
        if (!Od(Fd)) return md;
        md.push(Fd)
      }
      return []
    }

    function Dh(dd, Od) {
      const md = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Wd = 0; Wd < 4; Wd++) {
        const Fd = Wd,
          Rd = pW(dd.focus, Fd, vW.LASER_D);
        if (dd.lasers[Wd] || !dd.open[Wd] || !Od(Rd)) continue;
        const Xd = [];
        for (let md = 1; md < vW.LASER_D; md++) {
          const Wd = pW(dd.focus, Fd, md);
          Od(Wd) || Xd.push(Wd)
        }
        md.supports.push(...jh(Rd, Od)), 0 === Xd.length ? md.free.push(Rd) : (md.blocked.push(Rd), md.gaps.push(...Xd))
      }
      return md
    }
    const eh = vW.LASER_D - .25,
      Ih = 4,
      lh = 2,
      Ch = 16;
    const Zh = {
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
        blendMode: SK.g.Standard,
        soft: !0
      },
      kh = {
        green: Zh,
        pink: {
          ...Zh,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function fh(dd, Od) {
      const md = {
        ...Od.params
      };
      for (const [Fd, Rd] of Object.entries(null !== (Wd = Od.keys) && void 0 !== Wd ? Wd : {})) {
        var Wd;
        md[Fd] = dd(Rd)
      }
      return md
    }
    const Mh = "buildAFactory2Game:",
      dv = 2 * vW.LASER_D + 1,
      Ov = vW.LASER_D;

    function mv(dd) {
      return dd(`${Mh}colFocusTip`, {
        need: Vh(vW.NOVA_FOCUS)
      })
    }

    function Wv(dd, Od) {
      return dd(Od.key, fh(dd, Od))
    }

    function Fv(dd) {
      const Od = dd.getStatus();
      return {
        status: Od,
        entry: Od ? dd.entryAtRoot(Od.baf2ColAt) : void 0
      }
    }

    function Rv(dd, Od) {
      return {
        left: 100 * (Ov + dd) / dv + "%",
        top: 100 * (Ov + Od) / dv + "%"
      }
    }

    function Xv(dd) {
      let {
        status: Od,
        entry: md
      } = dd;
      const Wd = XF(Od.baf2ColLasers),
        Fd = XF(Od.baf2ColSpots),
        Rd = XF(Od.baf2ColLive),
        Xd = !0 === (null === md || void 0 === md ? void 0 : md.on),
        Kd = vW.LASER_D,
        hd = [];
      for (let Nd = 0; Nd < 4; Nd++) {
        const [dd, , Od] = TW[Nd];
        if (Rd[Nd]) {
          const md = 100 * (Kd - 1) / dv,
            Wd = dd + Od > 0 ? 100 * (Ov + 1) / dv : 100 * (Ov - (Kd - 1)) / dv,
            Fd = 100 * (Ov + .35) / dv,
            Rd = 30 / dv,
            vd = 0 !== dd ? {
              left: `${Wd}%`,
              width: `${md}%`,
              top: `${Fd}%`,
              height: `${Rd}%`
            } : {
              top: `${Wd}%`,
              height: `${md}%`,
              left: `${Fd}%`,
              width: `${Rd}%`
            };
          hd.push((0, YR.jsx)("i", {
            className: aF()("Baf2ColDiagramBeam", {
              Off: !Xd
            }),
            style: vd
          }, `beam${Nd}`))
        }
        const md = Wd[Nd] ? "Baf2ColDiagramLaser" : Fd[Nd] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        hd.push((0, YR.jsx)("i", {
          className: md,
          style: Rv(dd * Kd, Od * Kd)
        }, `spot${Nd}`))
      }
      for (let Nd = 0; Nd < 4; Nd++) {
        if (Wd[Nd] || !Fd[Nd]) continue;
        const [dd, , md] = TW[Nd];
        for (const Wd of Ah(null !== (vd = Od.baf2ColGaps) && void 0 !== vd ? vd : 0, Nd)) {
          var vd;
          hd.push((0, YR.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Rv(dd * Wd, md * Wd)
          }, `gap${Nd},${Wd}`))
        }
      }
      for (const [Nd, , qd] of null !== (Qd = null === md || void 0 === md ? void 0 : md.blockers) && void 0 !== Qd ? Qd : []) {
        var Qd, td, od;
        const dd = Nd - (null !== (td = null === md || void 0 === md ? void 0 : md.focus[0]) && void 0 !== td ? td : 0),
          Od = qd - (null !== (od = null === md || void 0 === md ? void 0 : md.focus[2]) && void 0 !== od ? od : 0);
        hd.push((0, YR.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Rv(dd, Od)
        }, `block${dd},${Od}`))
      }
      return (0, YR.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [hd, (0, YR.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Kv(dd) {
      let {
        status: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)(), Wd = XF(Od.baf2ColLive).filter(Boolean).length;
      return (0, YR.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, YR.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: mv(md),
          children: md(`${Mh}colLadder`)
        }), (0, YR.jsx)("ul", {
          children: [1, 2, 3, 4].map((dd => (0, YR.jsx)("li", {
            className: aF()({
              On: dd === Wd
            }),
            children: md(`${Mh}colLadderChip`, {
              lasers: String(dd),
              time: uh(dd)
            })
          }, dd)))
        })]
      })
    }

    function hv(dd) {
      let {
        item: Od,
        jK: md,
        need: Wd,
        cap: Fd
      } = dd;
      const {
        t: Rd
      } = (0, xF.G)(), Xd = Math.min(md, Wd);
      return (0, YR.jsxs)("li", {
        className: aF()("Baf2ColTile", {
          Short: md < Wd
        }),
        children: [(0, YR.jsx)(vv, {
          item: Od
        }), (0, YR.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Rd(`${Mh}colOutOf`, {
            amount: String(Xd),
            cap: String(Wd)
          })
        }), (0, YR.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, YR.jsx)("i", {
            style: {
              width: 100 * Xd / Wd + "%"
            }
          })
        }), md > Wd && (0, YR.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Rd(`${Mh}colIntakeHeld`, {
            amount: String(md),
            cap: String(Fd)
          })
        })]
      })
    }

    function vv(dd) {
      let {
        item: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)();
      return (0, YR.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, YR.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, YR.jsx)(SF.c, {
            itemName: Od,
            amount: 0
          })
        }), (0, YR.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, OR.d)(md, Od)
        })]
      })
    }

    function Qv(dd) {
      switch (dd.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function tv(dd) {
      var Od, md, Fd;
      let {
        store: Rd,
        close: Xd
      } = dd;
      const {
        t: Kd
      } = (0, xF.G)(), hd = rX(), {
        status: vd,
        entry: Qd
      } = function(dd) {
        const [Od, md] = (0, Wd.useState)((() => Fv(dd)));
        return (0, Wd.useEffect)((() => (md(Fv(dd)), dd.subscribe((() => {
          md(Fv(dd))
        })))), [dd]), Od
      }(Rd), [td, od] = (0, Wd.useState)(null), Nd = null === vd || void 0 === vd ? void 0 : vd.baf2ColHold;
      (0, Wd.useEffect)((() => {
        od(null)
      }), [Nd]);
      const qd = (0, Wd.useRef)({
          p: -1,
          n: 0
        }),
        Hd = null !== (Od = null === vd || void 0 === vd ? void 0 : vd.baf2ColP) && void 0 !== Od ? Od : -1;
      Hd < qd.current.p && qd.current.n++, qd.current.p = Hd;
      const yd = (0, Wd.useRef)(null),
        [bd] = (0, Wd.useState)((() => {
          return (dd = Rd.heldAtOpen()) === oW || dd === NW ? {
            key: `${Bh}colBeltItIn`,
            item: dd
          } : null;
          var dd
        }));
      if (!vd) return null;
      const Td = vd.baf2ColMember,
        pd = vd.baf2ColP >= 0,
        Yd = function(dd, Od) {
          if (dd.baf2ColP >= 0 && dd.baf2ColDraw > 0) {
            const Od = dd.baf2ColWant > 0 ? Math.min(1, dd.baf2ColDraw / dd.baf2ColWant) : 0;
            return {
              focus: dd.baf2ColFocusPerS * Od,
              draw: dd.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === dd.baf2ColState && Od && Od.draw > 0 ? {
            ...Od,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(vd, yd.current);
      yd.current = Yd.draw > 0 ? Yd : null;
      const gd = "slowed" === vd.baf2ColState || "noPower" === vd.baf2ColState,
        wd = ch(vd),
        Ed = null !== td && void 0 !== td ? td : vd.baf2ColHold,
        Jd = function(dd) {
          var Od, md;
          return "idle" === dd.baf2ColRxState ? null : null !== (Od = null === (md = nh(dd)) || void 0 === md ? void 0 : md.fix) && void 0 !== Od ? Od : null
        }(vd),
        Ud = null === Jd && null === bd ? function(dd) {
          var Od;
          const md = dd.baf2ColSentTo;
          if (!md) return null;
          const Wd = null !== (Od = dd.baf2ColSentHeld) && void 0 !== Od ? Od : null;
          return {
            key: null === Wd ? `${Bh}colNovaSentToMachine` : `${Bh}colNovaSentTo`,
            target: md,
            jK: Wd
          }
        }(vd) : null,
        xd = pd ? Kd(`${Mh}colFocusOf`, {
          focus: Vh(vd.baf2ColP),
          need: Vh(vW.NOVA_FOCUS)
        }) : null;
      return (0, YR.jsx)(yX.c, {
        close: Xd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, YR.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, YR.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, YR.jsx)(SF.c, {
                  itemName: QW,
                  amount: 0
                })
              }), (0, YR.jsxs)("div", {
                children: [(0, YR.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, OR.d)(Kd, QW)
                }), (0, YR.jsx)("p", {
                  children: Wv(Kd, Lh(vd))
                })]
              })]
            }), (0, YR.jsx)(bX.j, {
              onClick: Xd
            })]
          }), (0, YR.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, YR.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, YR.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, YR.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: Kd(zh(vd), {
                    time: null === wd ? "" : TR(Kd, wd)
                  })
                }), (0, YR.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, YR.jsx)("i", {
                    style: {
                      width: (pd ? 100 * vd.baf2ColP / vW.NOVA_FOCUS : 0) + "%"
                    }
                  }, qd.current.n)
                }), (0, YR.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, YR.jsxs)("span", {
                    title: mv(Kd),
                    children: [(0, YR.jsx)("b", {
                      children: Vh(Yd.focus)
                    }), " ", Kd(`${Mh}colFocusPerS`)]
                  }), (0, YR.jsxs)("span", {
                    className: aF()("Baf2ColDraw", {
                      Short: gd
                    }),
                    children: [(0, YR.jsx)(BF.c, {
                      name: "bolt"
                    }), gd ? Kd(`${Mh}colDrawOf`, {
                      draw: Vh(vd.baf2ColDraw),
                      want: Vh(vd.baf2ColWant)
                    }) : Kd(`${Mh}colPowerPerS`, {
                      rate: Vh(Yd.draw)
                    })]
                  }), null !== xd && (0, YR.jsx)("span", {
                    className: "Soft",
                    children: xd
                  })]
                })]
              }), (0, YR.jsx)("p", {
                className: aF()("Baf2ColState", Qv(vd)),
                children: Wv(Kd, Ph(vd))
              }), null !== Jd && (0, YR.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Kd(Jd)
              }), null === Jd && null !== bd && (0, YR.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Kd(bd.key, {
                  item: (0, OR.d)(Kd, bd.item)
                })
              }), Ud && (0, YR.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Kd(Ud.key, {
                  target: (0, OR.d)(Kd, Ud.target),
                  amount: String(null !== (md = Ud.jK) && void 0 !== md ? md : 0)
                })
              }), (0, YR.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, YR.jsx)(hv, {
                  item: oW,
                  jK: vd.baf2ColSa,
                  need: vW.NOVA_SA,
                  cap: vW.SA_CAP
                }), (0, YR.jsx)(hv, {
                  item: NW,
                  jK: vd.baf2ColGd,
                  need: vW.NOVA_GD,
                  cap: vW.GD_CAP
                }), (0, YR.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, YR.jsx)(vv, {
                    item: "Nova Matter"
                  }), (0, YR.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: Kd(`${Mh}colNovaHeld`, {
                      amount: String(vd.baf2ColOut),
                      cap: String(vW.OUT_CAP)
                    })
                  }), Td && (0, YR.jsx)(bX.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === vd.baf2ColOut,
                    onClick: () => {
                      hd.send(sh(vd, "take"))
                    },
                    children: Kd(`${Mh}colTake`)
                  })]
                })]
              }), Td && (0, YR.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Ed,
                className: aF()("Baf2ColHold", {
                  On: Ed
                }),
                onClick: dd => {
                  dd.detail > 0 && dd.currentTarget.blur(), od(!Ed), hd.send(sh(vd, "hold " + (Ed ? 0 : 1)))
                },
                children: [(0, YR.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, YR.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, YR.jsx)("b", {
                    children: Kd(`${Mh}colHold`)
                  }), (0, YR.jsx)("span", {
                    children: Kd(`${Mh}colHoldNote`)
                  })]
                })]
              })]
            }), (0, YR.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, YR.jsx)(Xv, {
                status: vd,
                entry: Qd
              }), (0, YR.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Gh(vd.baf2ColLasers, vd.baf2ColSpots, vd.baf2ColLive, Yd.beamsOn, null !== (Fd = vd.baf2ColGaps) && void 0 !== Fd ? Fd : 0).map((dd => (0, YR.jsxs)("li", {
                  className: dd.tone,
                  children: [(0, YR.jsx)("b", {
                    children: Wv(Kd, dd.title)
                  }), null !== dd.hint && (0, YR.jsx)("span", {
                    children: Wv(Kd, dd.hint)
                  })]
                }, dd.dir)))
              }), (0, YR.jsx)(Kv, {
                status: vd
              })]
            })]
          })]
        })
      })
    }
    const ov = "buildAFactory2Game:",
      Nv = 36e5,
      qv = 864e5;

    function Hv(dd, Od, md) {
      return Math.max(0, Math.ceil((dd + Od - Math.max(md, dd)) / 1e3))
    }

    function yv(dd) {
      return dd.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function bv(dd) {
      return "Homestead" === dd
    }

    function Tv(dd) {
      return function(dd) {
        let Od = 0;
        for (const md of dd) {
          const dd = /^Island ([1-9]\d{0,5})$/.exec(md);
          dd && (Od = Math.max(Od, Number(dd[1])))
        }
        return `Island ${Od+1}`
      }(dd.map((dd => dd.baf2IslandName)))
    }

    function pv(dd, Od) {
      return function(dd) {
        return `${ov}islandsBlocked${dd[0].toUpperCase()}${dd.slice(1)}`
      }("degraded" === dd && 0 === Od ? "stuck" : dd)
    }

    function Yv(dd) {
      return dd.filter((dd => {
        var Od;
        return !dd.baf2IslandActive && void 0 === dd.baf2IslandUnreadable && void 0 === (null === (Od = dd.baf2IslandCoop) || void 0 === Od ? void 0 : Od.baf2CoopState)
      })).length
    }

    function gv(dd) {
      return "coopMoving" === dd || "coopUnreachable" === dd
    }

    function wv(dd, Od) {
      const md = Od > 0;
      return {
        change: null === dd && !md,
        switch: (null === dd || "degraded" === dd || gv(dd)) && !md,
        rename: "loading" !== dd && "degraded" !== dd && "stuck" !== dd
      }
    }

    function av(dd, Od) {
      return void 0 === dd || "corrupt" === dd && Od
    }
    const Ev = BX;

    function Jv(dd, Od, md) {
      if (null !== dd && void 0 !== dd && dd.untilGone) {
        var Wd;
        return !("dismiss" === dd.untilGone && void 0 === (null === (Wd = Od.baf2IslandCoop) || void 0 === Wd ? void 0 : Wd.baf2CoopState)) && md - dd.atMs < 32500
      }
      return void 0 !== dd && md - dd.atMs < Ev && Od.baf2IslandName === dd.from
    }
    const Uv = BX;

    function xv(dd) {
      return "core" === (null === dd || void 0 === dd ? void 0 : dd.kind) ? dd.core : "islands" === (null === dd || void 0 === dd ? void 0 : dd.kind) ? dd.backToCore : void 0
    }

    function Bv(dd) {
      return `\0${dd}\0`
    }

    function Sv(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Wd = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Rd of Object.keys(md)) Wd[Rd] = Bv(Rd);
      let Fd = Object.keys(Wd).length > 0 ? dd(Od, Wd) : dd(Od);
      for (const [Rd, Xd] of Object.entries(md)) Fd = Fd.split(Bv(Rd)).join(Xd);
      return Fd
    }

    function sv(dd, Od) {
      return dd ? Od ? "enabled" : "disabled" : "hidden"
    }
    const uv = {
      removed: `${ov}islandsCoopRemoved`,
      deleted: `${ov}islandsCoopDeleted`,
      notReady: `${ov}islandsCoopNotReady`,
      gone: `${ov}islandsCoopGone`
    };

    function Vv(dd) {
      var Od;
      return "member" !== (null === (Od = dd.baf2IslandCoop) || void 0 === Od ? void 0 : Od.baf2CoopRole) && "newer" !== dd.baf2IslandUnreadable
    }

    function iv(dd, Od, md, Wd, Fd, Rd) {
      const Xd = dd.baf2IslandActive,
        Kd = dd.baf2IslandUnreadable,
        hd = dd.baf2IslandCoop,
        vd = function(dd, Od, md) {
          return {
            switch: dd.switch && void 0 === Od,
            delete: dd.change && av(Od, md)
          }
        }(Od, Kd, Wd),
        Qd = Xd && void 0 !== hd && void 0 === hd.baf2CoopState && "coopUnreachable" === Rd,
        td = {
          switch: sv((!Xd || Qd) && void 0 === Kd, Qd || vd.switch),
          switchLabel: Qd ? "tryAgain" : "switch",
          rename: sv(!0, Od.rename),
          delete: sv(!Xd, vd.delete),
          deleteWaits: !Xd && av(Kd, Wd),
          people: sv(void 0 !== dd.baf2IslandInvitable || Fd && Xd && void 0 === Kd && void 0 === hd, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        od = !Xd && vd.delete;
      if (void 0 === hd) return md ? {
        ...td,
        delete: sv(!Xd, !1),
        deleteWaits: !1,
        note: od ? {
          key: `${ov}islandsCoopKeepOwn`
        } : null
      } : td;
      const Nd = hd.baf2CoopState,
        qd = hd.baf2CoopMembers.length > 1,
        Hd = {
          ...td,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Nd && "member" === hd.baf2CoopRole) return {
        ...Hd,
        dismiss: sv(!0, Od.rename),
        note: {
          key: uv[Nd],
          names: {
            owner: hd.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Nd) {
        let dd = {
          key: `${ov}islandsCoopOwnLost`
        };
        return od && qd ? dd = {
          key: `${ov}islandsCoopDeleteMembers`
        } : od && md && (dd = {
          key: `${ov}islandsCoopKeepOwn`
        }), {
          ...Hd,
          delete: sv(!Xd, vd.delete && !qd && !md),
          deleteWaits: td.deleteWaits && !qd && !md,
          note: dd
        }
      }
      if ("member" === hd.baf2CoopRole) return {
        ...td,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: sv(!0, Xd ? Od.switch : Od.rename)
      };
      const yd = hd.baf2CoopManageHere;
      let bd = null;
      var Td;
      yd || Xd ? od && qd ? bd = {
        key: `${ov}islandsCoopDeleteMembers`
      } : od && md && (bd = {
        key: `${ov}islandsCoopKeepOwn`
      }) : bd = {
        key: null !== (Td = hd.baf2CoopLeft) && void 0 !== Td && Td.length ? `${ov}islandsCoopManageThereClaim` : `${ov}islandsCoopManageThere`
      };
      return {
        ...td,
        rename: sv(!0, Od.rename && yd),
        delete: sv(!Xd, vd.delete && !qd && !md),
        deleteWaits: td.deleteWaits && !qd && !md,
        people: "enabled",
        peopleLabel: "players",
        unshare: sv(yd && Xd && !qd, Od.change),
        remove: yd,
        note: bd
      }
    }

    function Av(dd) {
      var Od;
      const md = dd.baf2IslandCoop;
      if ("owner" !== (null === md || void 0 === md ? void 0 : md.baf2CoopRole) || void 0 !== md.baf2CoopState || null === (Od = md.baf2CoopLeft) || void 0 === Od || !Od.length) return null;
      const Wd = dd.baf2IslandActive && md.baf2CoopManageHere;
      return {
        left: md.baf2CoopLeft,
        claim: Wd,
        goThere: !Wd && md.baf2CoopManageHere
      }
    }

    function rv(dd) {
      return dd.baf2CoopMembers.length >= dd.baf2CoopMax
    }

    function Gv(dd, Od, md) {
      return void 0 !== dd && Od < dd.answer && md - dd.atMs < Ev
    }
    const nv = "buildAFactory2Game:";

    function Lv(dd, Od) {
      return {
        onKeyDown: md => {
          md.stopPropagation(), md.nativeEvent.isComposing || 229 === md.nativeEvent.keyCode || ("Enter" === md.key ? (md.preventDefault(), dd()) : "Escape" === md.key && (md.preventDefault(), Od()))
        }
      }
    }

    function Pv(dd) {
      return {
        onKeyDown: Od => {
          "Escape" !== Od.key || Od.nativeEvent.isComposing || (Od.preventDefault(), Od.stopPropagation(), dd())
        }
      }
    }

    function zv(dd) {
      dd.currentTarget.select()
    }

    function cv(dd, Od) {
      (0, Wd.useEffect)((() => {
        var md;
        dd && (null === (md = Od.current) || void 0 === md || md.scrollIntoView({
          block: "nearest"
        }))
      }), [dd, Od])
    }

    function jv(dd) {
      const [Od, md] = (0, Wd.useState)(null);
      return (0, Wd.useEffect)((() => {
        const Od = document.querySelector(".UiRequests"),
          Wd = dd.current;
        if (!Od || !Wd || "undefined" === typeof ResizeObserver) return;
        const Fd = () => {
          const dd = Od.getBoundingClientRect(),
            Fd = Wd.getBoundingClientRect(),
            Rd = Wd.parentElement,
            Xd = Rd && parseFloat(getComputedStyle(Rd).paddingTop) || 0,
            Kd = function(dd, Od, md, Wd) {
              if (!dd || dd.height <= 0 || dd.right <= Od.left || dd.left >= Od.right) return null;
              const Fd = Math.max(Wd, dd.bottom + 8);
              return {
                marginTop: Math.round(Fd - Wd),
                maxHeight: Math.max(0, Math.floor(md - Fd - Wd))
              }
            }(dd, Fd, window.innerHeight, Xd);
          md((dd => (null === dd || void 0 === dd ? void 0 : dd.marginTop) === (null === Kd || void 0 === Kd ? void 0 : Kd.marginTop) && (null === dd || void 0 === dd ? void 0 : dd.maxHeight) === (null === Kd || void 0 === Kd ? void 0 : Kd.maxHeight) ? dd : Kd))
        };
        Fd();
        const Rd = new ResizeObserver(Fd);
        return Rd.observe(Od), window.addEventListener("resize", Fd), () => {
          Rd.disconnect(), window.removeEventListener("resize", Fd)
        }
      }), [dd]), Od
    }

    function Dv() {
      (0, Wd.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function ev(dd) {
      (0, Wd.useEffect)((() => {
        var Od;
        null === (Od = dd.current) || void 0 === Od || Od.focus()
      }), [dd])
    }

    function Iv(dd) {
      const [Od, md] = (0, Wd.useState)(Date.now);
      return (0, Wd.useEffect)((() => {
        const Od = window.setInterval((() => {
          md(Date.now())
        }), dd);
        return () => {
          window.clearInterval(Od)
        }
      }), [dd]), Od
    }

    function lv(dd) {
      let {
        tier: Od,
        t: md
      } = dd;
      const {
        kind: Wd,
        short: Fd
      } = yd(Od), Rd = Nd(Od, qd), Xd = md(`${nv}${Rd.key}`, {
        ...Rd.params,
        name: md(`${nv}${bd(Od).nameKey}`)
      });
      return (0, YR.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, YR.jsx)("span", {
          className: aF()("Baf2IslandTierPip", {
            Stage: "tier" !== Wd
          }),
          "aria-hidden": "true",
          children: Fd
        }), Xd]
      })
    }

    function Cv(dd) {
      let {
        note: Od,
        className: md,
        t: Wd
      } = dd;
      return (0, YR.jsx)("p", {
        className: aF()("Baf2IslandNote", md),
        children: Sv(Wd, Od.key, Od.names, Od.params)
      })
    }
    const Zv = "buildAFactory2Game:";

    function kv(dd) {
      let {
        message: Od,
        arrivedAtMs: md,
        close: Fd,
        leave: Rd
      } = dd;
      const Xd = rX(),
        {
          t: Kd
        } = (0, xF.G)(),
        hd = Iv(1e3),
        vd = (0, Wd.useRef)(null);
      Dv(), (0, Wd.useEffect)((() => {
        var dd;
        null === (dd = vd.current) || void 0 === dd || dd.focus()
      }), []);
      const Qd = Hv(md, Od.baf2TransferInMs, hd),
        td = md + Od.baf2TransferInMs - 1e3,
        [od, Nd] = (0, Wd.useState)(null);
      (0, Wd.useEffect)((() => {
        const dd = window.setTimeout((() => {
          Nd(td)
        }), Math.max(0, td - Date.now()));
        return () => {
          window.clearTimeout(dd)
        }
      }), [td]);
      const qd = od === td || hd >= td,
        Hd = Od.baf2TransferIsland,
        yd = Od.baf2TransferOwner;
      return (0, YR.jsx)(yX.c, {
        close: Fd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, YR.jsxs)("section", {
          ref: vd,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsxs)("div", {
              children: [(0, YR.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === yd ? Sv(Kd, `${Zv}islandsTransferOwn`, {
                  island: Hd
                }) : Sv(Kd, `${Zv}islandsTransfer`, {
                  island: Hd,
                  owner: yd
                })
              }), (0, YR.jsx)("p", {
                children: qd ? Kd(`${Zv}islandsTransferNow`) : Kd(`${Zv}islandsTransferIn`, {
                  time: TR(Kd, Qd)
                })
              })]
            }), (0, YR.jsx)(bX.j, {
              ariaLabel: Kd(`${Zv}islandsClose`),
              onClick: Fd
            })]
          }), !qd && (0, YR.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, YR.jsx)("p", {
              className: "Baf2TransferNote",
              children: Kd(`${Zv}islandsTransferNote`)
            }), (0, YR.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, YR.jsx)(bX.g, {
                onClick: () => {
                  Xd.send("baf2coopstay"), Rd()
                },
                children: Kd(`${Zv}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var fv = md(1566),
      Mv = md(1195),
      dQ = md.n(Mv);
    const OQ = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const mQ = "buildAFactory2Game:",
      WQ = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function FQ(dd, Od, md) {
      return void 0 === Od ? md : "string" === typeof Od ? Od : Array.isArray(Od) ? Od.map((Od => "string" === typeof Od ? Od : "translationKey" in Od ? dd(Od.translationKey) : "")).join("") : dd(Od.translationKey)
    }

    function RQ(dd) {
      const Od = {};
      for (const [md, Wd] of Object.entries(null !== dd && void 0 !== dd ? dd : {})) Od[md] = Wd < 0 ? bR(Wd) : Wd.toLocaleString("en-US");
      return Od
    }

    function XQ(dd, Od) {
      const md = Od ? "touch" : "mouse";
      return {
        use: dd(`${mQ}lookUse_${md}`),
        Use: dd(`${mQ}lookUseStart_${md}`)
      }
    }
    const KQ = (0, Wd.memo)((function(dd) {
      let {
        item: Od
      } = dd;
      return (0, YR.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, YR.jsx)(SF.c, {
          itemName: Od,
          amount: 0
        })
      })
    }));

    function hQ(dd) {
      let {
        label: Od,
        percent: md,
        progress: Wd
      } = dd;
      return (0, YR.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, YR.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${Od}: ${Wd}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": md,
          children: (0, YR.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${md}%`
            }
          })
        }), (0, YR.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Wd
        })]
      })
    }

    function vQ(dd) {
      let {
        chips: Od
      } = dd;
      return (0, YR.jsx)("span", {
        className: "Baf2QuestChips",
        children: Od.map((dd => {
          let [Od, md, Wd] = dd;
          const Fd = md >= Wd;
          return (0, YR.jsxs)("span", {
            className: aF()("Baf2QuestChip", {
              Met: Fd
            }),
            children: [(0, YR.jsx)(KQ, {
              item: Od
            }), (0, YR.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Fd ? `\u2713${Wd}` : `${md}/${Wd}`
            })]
          }, Od)
        }))
      })
    }

    function QQ(dd, Od) {
      const {
        key: md,
        params: Wd
      } = Nd(Od, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return dd(`${mQ}${md}`, {
        ...Wd,
        name: dd(`${mQ}${bd(Od).nameKey}`)
      })
    }

    function tQ(dd) {
      let {
        core: Od,
        t: md
      } = dd;
      const [Wd, Fd] = Od, Rd = Fd > 0 ? Math.floor(100 * Wd / Fd) : 100;
      return (0, YR.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": md(`${mQ}questCoreLabel`, {
          have: String(Wd),
          need: String(Fd)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Rd,
        children: [(0, YR.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: md(`${mQ}questCore`, {
            percent: String(Rd)
          })
        }), (0, YR.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, YR.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Rd}%`
            }
          })
        })]
      })
    }

    function oQ(dd) {
      let {
        rows: Od,
        t: md
      } = dd;
      const Wd = Od.filter((dd => dd.done)).length;
      return (0, YR.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": md(`${mQ}questStepsProgress`, {
          done: String(Wd),
          total: String(Od.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": Od.length,
        "aria-valuenow": Wd,
        children: Od.map((dd => (0, YR.jsx)("span", {
          className: aF()("Baf2QuestSegment", {
            Done: dd.done,
            Current: dd.current
          })
        }, dd.id)))
      })
    }
    const NQ = (0, Wd.memo)(HQ, qQ);

    function qQ(dd, Od) {
      const md = md => dd.view.itemNames[md] === Od.view.itemNames[md];
      return dd.t === Od.t && dd.extra === Od.extra && (null === dd.row.item || md(dd.row.item)) && dd.row.madeFor.every(md) && dd.row.also.every(md) && dQ()(dd.row, Od.row)
    }

    function HQ(dd) {
      let {
        row: Od,
        view: md,
        t: Wd,
        extra: Fd
      } = dd;
      const {
        isTouchScreen: Rd
      } = (0, YF.p)(["isTouchScreen"]), Xd = Od.item ? function(dd, Od, md) {
        return 1 !== md && OQ.has(dd) ? UF(Od) : null
      }(Od.key, Od.item, Od.total) : null, Kd = Xd ? Wd(Xd) : Od.item ? FQ(Wd, md.itemNames[Od.item], Od.item) : "", hd = Od.also.map((dd => FQ(Wd, md.itemNames[dd], dd))), vd = hd.join(", "), Qd = function(dd, Od) {
        var md;
        return Od.length < 2 ? null !== (md = Od[0]) && void 0 !== md ? md : "" : dd(`${mQ}listAnd`, {
          rest: Od.slice(0, -1).join(dd(`${mQ}listComma`)),
          last: Od[Od.length - 1]
        })
      }(Wd, [Kd, ...hd]), td = Wd(`${mQ}${Od.key}`, {
        ...XQ(Wd, Rd),
        ...RQ(Od.params),
        item: Kd,
        also: vd,
        itemList: Qd,
        total: String(Od.total)
      }), [od, ...Nd] = td.split("\n"), qd = Od.total > 1 && !Od.done && !Od.away;
      return (0, YR.jsxs)("li", {
        className: aF()("Baf2QuestStep", {
          Done: Od.done,
          Current: Od.current,
          JustFinished: Od.justFinished,
          Away: Od.away
        }),
        children: [!Od.done && null !== Od.item && (0, YR.jsx)(KQ, {
          item: Od.item
        }), (Od.done || null === Od.item) && (0, YR.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: Od.done ? "\u2713" : "\u25cb"
        }), (0, YR.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, YR.jsx)("strong", {
            children: od
          }), Nd.length > 0 && (0, YR.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Nd.join(" ")
          }), !Od.done && Od.madeFor.length > 0 && (0, YR.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Wd("buildAFactory2Game:questRowFor", {
              items: Od.madeFor.map((dd => FQ(Wd, md.itemNames[dd], dd))).join(" \u2192 ")
            })
          }), qd && (0, YR.jsx)(hQ, {
            label: od,
            percent: Math.round(100 * Od.amount / Od.total),
            progress: `${Od.amount.toLocaleString("en-US")}/${Od.total.toLocaleString("en-US")}`
          }), !Od.done && !Od.away && Od.chips && Od.chips.length > 0 && (0, YR.jsx)(vQ, {
            chips: Od.chips
          }), Fd]
        })]
      })
    }
    const yQ = "buildAFactory2Game:",
      bQ = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      TQ = {
        on: `${yQ}tutorialButtonOn`,
        hud: `${yQ}tutorialButtonHud`,
        off: `${yQ}tutorialButtonOff`
      },
      pQ = {
        on: `${yQ}tutorialPickedOn`,
        hud: `${yQ}tutorialPickedHud`,
        off: `${yQ}tutorialPickedOff`
      };
    class YQ {
      constructor(dd, Od, md) {
        this.commands = dd, this.quests = Od, this.toasts = md
      }
      next() {
        const dd = function(dd) {
            return Vd[(Vd.indexOf(dd) + 1) % Vd.length]
          }(this.quests.get().tutorial),
          Od = this.quests.setTutorial(dd);
        this.commands.send(`baf2tutorial ${dd} ${Od}`), this.toasts.show({
          baf2ToastText: [(0, rd.ae)({
            translationKey: pQ[dd]
          }, rd.E.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function gQ(dd, Od) {
      let [md, Wd] = Od;
      return dd(`${mQ}${md}`, RQ(Wd))
    }

    function wQ(dd) {
      let [Od, md] = dd;
      return Od + JSON.stringify(md)
    }

    function aQ(dd) {
      let {
        goal: Od,
        t: md
      } = dd;
      return Od ? (0, YR.jsx)("span", {
        className: "Baf2BookGoal",
        children: md(`${mQ}${Od}`)
      }) : null
    }

    function EQ(dd) {
      let {
        view: Od,
        t: md
      } = dd;
      if (!Od.name) return null;
      const Wd = jF(Od.rows);
      return (0, YR.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, YR.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: md(`${mQ}currentQuest`)
        }), (0, YR.jsx)("strong", {
          className: "Baf2BookTitle",
          children: gQ(md, Od.name)
        }), (0, YR.jsx)(aQ, {
          goal: Od.goal,
          t: md
        }), Wd.length > 1 && (0, YR.jsx)(oQ, {
          rows: Wd,
          t: md
        }), (0, YR.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: Od.rows.map((dd => (0, YR.jsx)(NQ, {
            row: dd,
            view: Od,
            t: md
          }, dd.id)))
        }), Od.reward && (0, YR.jsxs)("span", {
          className: "Baf2BookReward",
          children: [md(`${mQ}questReward`), (0, YR.jsx)(KQ, {
            item: Od.reward
          }), FQ(md, Od.itemNames[Od.reward], Od.reward)]
        })]
      })
    }

    function JQ(dd) {
      let {
        quest: Od,
        upcoming: md,
        t: Wd
      } = dd;
      return (0, YR.jsxs)("li", {
        className: aF()("Baf2BookQuest", {
          Done: Od[3],
          Upcoming: md
        }),
        children: [(0, YR.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: Od[3] ? "\u2713" : "\u25cb"
        }), (0, YR.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, YR.jsx)("strong", {
            className: "Baf2BookTitle",
            children: gQ(Wd, Od)
          }), (0, YR.jsx)(aQ, {
            goal: Od[2],
            t: Wd
          })]
        })]
      })
    }

    function UQ(dd) {
      let {
        done: Od,
        total: md,
        t: Wd
      } = dd;
      const Fd = md > 0 ? Math.round(100 * Od / md) : 0,
        Rd = Wd(`${mQ}questBookChapterProgress`, {
          done: String(Od),
          total: String(md)
        });
      return (0, YR.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, YR.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Rd,
          "aria-valuemin": 0,
          "aria-valuemax": md,
          "aria-valuenow": Od,
          children: (0, YR.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Fd}%`
            }
          })
        }), (0, YR.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Rd
        })]
      })
    }

    function xQ(dd) {
      let {
        view: Od,
        tier: md,
        quests: Wd,
        t: Fd
      } = dd;
      const Rd = md === Od.tier,
        Xd = (null !== Wd && void 0 !== Wd ? Wd : []).filter((dd => !dd[4])),
        Kd = (null !== Wd && void 0 !== Wd ? Wd : []).filter((dd => dd[4])),
        hd = Xd.filter((dd => dd[3])).length,
        vd = Rd && Od.name ? wQ(Od.name) : null,
        Qd = Xd.findIndex((dd => !dd[3] && wQ(dd) === vd));
      return (0, YR.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, YR.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, YR.jsx)("h3", {
            children: QQ(Fd, md)
          }), Xd.length > 0 && (0, YR.jsx)(UQ, {
            done: hd,
            total: Xd.length,
            t: Fd
          }), Rd && Od.core && (0, YR.jsx)(tQ, {
            core: Od.core,
            t: Fd
          })]
        }), (0, YR.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Wd && Rd && (0, YR.jsx)(EQ, {
            view: Od,
            t: Fd
          }), Xd.map(((dd, md) => md === Qd ? (0, YR.jsx)(EQ, {
            view: Od,
            t: Fd
          }, wQ(dd)) : (0, YR.jsx)(JQ, {
            quest: dd,
            upcoming: !dd[3],
            t: Fd
          }, wQ(dd))))]
        }), Rd && Od.side && (0, YR.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, YR.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Fd(`${mQ}questSide`)
          }), (0, YR.jsx)("strong", {
            className: "Baf2BookTitle",
            children: gQ(Fd, Od.side.name)
          }), (0, YR.jsx)(aQ, {
            goal: Od.side.goal,
            t: Fd
          }), (0, YR.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, YR.jsx)(NQ, {
              row: Od.side.row,
              view: Od,
              t: Fd
            })
          })]
        }), Kd.length > 0 && (0, YR.jsxs)(YR.Fragment, {
          children: [(0, YR.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Fd(`${mQ}questBookSidesDone`)
          }), (0, YR.jsx)("ol", {
            className: "Baf2BookQuests",
            children: Kd.map((dd => (0, YR.jsx)(JQ, {
              quest: dd,
              upcoming: !1,
              t: Fd
            }, wQ(dd))))
          })]
        })]
      })
    }

    function BQ(dd) {
      var Od, md, Rd;
      let {
        store: Xd,
        tutorial: Kd,
        close: hd
      } = dd;
      const {
        t: vd
      } = (0, xF.G)(), td = (0, fv.i)(rF, Xd.get()), od = null !== (Od = td.tier) && void 0 !== Od ? Od : 1, [Nd, qd] = (0, Wd.useState)(null), bd = (null === Nd || void 0 === Nd ? void 0 : Nd.at) === od ? Nd.tier : od, Td = (0, Wd.useRef)(null), pd = null !== td.chapters;
      (0, Wd.useEffect)((() => {
        var dd;
        Td.current && (Td.current.scrollTop = 0);
        const Od = null === (dd = Td.current) || void 0 === dd ? void 0 : dd.querySelector(".Baf2BookQuest.Current");
        if (Td.current && Od) {
          const dd = Od.getBoundingClientRect().bottom - Td.current.getBoundingClientRect().bottom;
          dd > 0 && (Td.current.scrollTop += Math.min(dd, Od.getBoundingClientRect().top - Td.current.getBoundingClientRect().top))
        }
      }), [bd, pd]);
      const Yd = null === (md = td.chapters) || void 0 === md ? void 0 : md.find((dd => {
        let [Od] = dd;
        return Od === bd
      }));
      return (0, YR.jsx)(yX.c, {
        close: hd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, YR.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: WQ,
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: vd(`${mQ}questBookTitle`)
            }), (0, YR.jsx)(bX.m, {
              className: "Baf2BookTutorialButton",
              disabled: !td.tutorialKnown,
              ariaLabel: vd(TQ[td.tutorial]),
              title: vd(TQ[td.tutorial]),
              onClick: () => {
                Kd.next()
              },
              children: (0, YR.jsx)(BF.c, {
                name: bQ[td.tutorial]
              })
            }), (0, YR.jsx)(bX.j, {
              onClick: hd
            })]
          }), (0, YR.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": vd(`${mQ}questBookChapters`),
            "data-pad-initial-area": !0,
            children: Fd.slice(0, Qd()).map(((dd, Od) => {
              const md = Od + 1,
                {
                  kind: Wd,
                  short: Fd
                } = yd(md),
                Rd = Hd(md, od),
                Xd = Rd ? vd(`${mQ}coreAtomicHidden`) : QQ(vd, md);
              return (0, YR.jsx)("li", {
                children: (0, YR.jsx)("button", {
                  type: "button",
                  className: aF()({
                    Stage: "tier" !== Wd,
                    Atomic: "atomic" === Wd,
                    Current: md === od,
                    Selected: md === bd
                  }),
                  disabled: md > od,
                  "aria-pressed": md === bd,
                  "aria-label": Xd,
                  title: Rd ? void 0 : Xd,
                  onClick: () => {
                    qd({
                      tier: md,
                      at: od
                    })
                  },
                  children: Rd ? "?" : Fd
                })
              }, dd.nameKey)
            }))
          }), (0, YR.jsxs)("div", {
            ref: Td,
            className: "Baf2BookBody",
            children: [zF(td) && bd === od && (0, YR.jsx)("p", {
              className: "Baf2BookEmpty",
              children: vd(`${mQ}questBookAllDone`)
            }), (0, YR.jsx)(xQ, {
              view: td,
              tier: bd,
              quests: null !== (Rd = null === Yd || void 0 === Yd ? void 0 : Yd[1]) && void 0 !== Rd ? Rd : null,
              t: vd
            })]
          })]
        })
      })
    }
    const SQ = "buildAFactory2Game:";

    function sQ(dd) {
      let {
        tiers: Od,
        from: md,
        tier: Wd,
        shown: Fd,
        xN: Rd
      } = dd;
      const {
        t: Xd
      } = (0, xF.G)(), Kd = Od.map(((dd, Od) => {
        const Kd = md + Od,
          {
            kind: hd,
            short: vd
          } = yd(Kd),
          Qd = Hd(Kd, Wd);
        return (0, YR.jsx)("li", {
          children: (0, YR.jsx)("button", {
            type: "button",
            className: aF()({
              Stage: "tier" !== hd,
              Silhouette: Qd,
              Reached: Kd <= Wd,
              Current: Kd === Wd,
              Next: Kd === Wd + 1,
              Selected: Kd === Fd
            }),
            disabled: Qd,
            "aria-pressed": Kd === Fd,
            "aria-label": Qd ? Xd(`${SQ}coreAtomicHidden`) : void 0,
            title: Qd ? void 0 : Xd(`${SQ}${dd.nameKey}`),
            onClick: () => {
              Rd(Kd)
            },
            children: Qd ? "?" : vd
          })
        }, dd.nameKey)
      }));
      return (0, YR.jsx)(YR.Fragment, {
        children: Kd
      })
    }

    function uQ(dd) {
      let {
        id: Od,
        label: md,
        tiers: Wd,
        from: Fd,
        ...Rd
      } = dd;
      return (0, YR.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, YR.jsx)("span", {
          id: Od,
          className: "Baf2CoreLadderLabel",
          children: md
        }), (0, YR.jsx)("ol", {
          "aria-labelledby": Od,
          children: (0, YR.jsx)(sQ, {
            ...Rd,
            tiers: Wd,
            from: Fd
          })
        })]
      })
    }

    function VQ(dd) {
      const {
        t: Od
      } = (0, xF.G)(), md = Fd.findIndex((dd => void 0 !== dd.stage)), Wd = Fd.findIndex((dd => void 0 !== dd.reactorTier)), Rd = md < 0 ? Fd : Fd.slice(0, md), Xd = md < 0 ? [] : Fd.slice(md, Wd < 0 ? void 0 : Wd), hd = Wd < 0 || !Kd() ? [] : Fd.slice(Wd);
      return (0, YR.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, YR.jsx)(uQ, {
          ...dd,
          id: "baf2CoreTiersLabel",
          label: Od(`${SQ}coreTiersLabel`),
          tiers: Rd,
          from: 1
        }), Xd.length > 0 && (0, YR.jsx)(uQ, {
          ...dd,
          id: "baf2CoreStagesLabel",
          label: Od(`${SQ}coreStagesLabel`),
          tiers: Xd,
          from: md + 1
        }), hd.length > 0 && (0, YR.jsx)(uQ, {
          ...dd,
          id: "baf2CoreAtomicLabel",
          label: Od(`${SQ}coreAtomicLabel`),
          tiers: hd,
          from: Wd + 1
        })]
      })
    }
    const iQ = "buildAFactory2Game:";

    function AQ(dd) {
      let {
        item: Od,
        itemNames: md,
        children: Wd
      } = dd;
      return (0, YR.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, YR.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, YR.jsx)(SF.c, {
            itemName: Od,
            amount: 0
          })
        }), (0, YR.jsx)(sF.d, {
          text: md[Od]
        }), Wd]
      })
    }

    function rQ(dd) {
      const Od = new Map;
      for (const {
          block: Wd
        }
        of dd.newDeposits) {
        var md;
        Od.set(Wd, (null !== (md = Od.get(Wd)) && void 0 !== md ? md : 0) + 1)
      }
      return [...Od]
    }

    function GQ(dd) {
      let {
        value: Od,
        label: md,
        more: Wd
      } = dd;
      return (0, YR.jsxs)("li", {
        children: [(0, YR.jsx)("strong", {
          children: Od
        }), (0, YR.jsx)("span", {
          children: md
        }), Wd > 0 && (0, YR.jsxs)("em", {
          children: ["+", Wd]
        })]
      })
    }

    function nQ(dd) {
      let {
        items: Od,
        itemNames: md
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)(), [Rd, Xd] = (0, Wd.useState)(null), Kd = null !== Rd && Od.includes(Rd) ? Rd : null;
      return (0, YR.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, YR.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Fd(`${iQ}coreRewardUnlocks`)
        }), (0, YR.jsx)("ul", {
          children: Od.map((dd => (0, YR.jsx)("li", {
            children: (0, YR.jsx)("button", {
              type: "button",
              className: aF()("Baf2PanelIcon", {
                Picked: dd === Kd
              }),
              title: (0, OR.d)(Fd, dd),
              "aria-label": (0, OR.d)(Fd, dd),
              "aria-pressed": dd === Kd,
              onClick: () => {
                Xd(dd === Kd ? null : dd)
              },
              children: (0, YR.jsx)(SF.c, {
                itemName: dd,
                amount: 0
              })
            })
          }, dd)))
        }), (0, YR.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== Kd && (0, YR.jsxs)(YR.Fragment, {
            children: [(0, YR.jsx)(sF.d, {
              text: md[Kd]
            }), " \xb7 ", (0, YR.jsx)(sF.d, {
              text: md[sd(Kd)]
            })]
          }), null === Kd && Fd(`${iQ}coreRecipeTap`)]
        })]
      })
    }

    function LQ(dd) {
      var Od, md;
      let {
        def: Wd,
        tier: Fd,
        itemNames: Rd
      } = dd;
      const {
        t: Xd
      } = (0, xF.G)(), Kd = Fd > 1 ? bd(Fd - 1) : void 0, hd = Math.round(2 * Wd.islandRadius), vd = Kd ? Math.round(2 * Kd.islandRadius) : hd, Qd = Fd >= 3 ? EW(Fd) : null;
      return (0, YR.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, YR.jsxs)("ul", {
          className: aF()("Baf2CoreStats", {
            Four: null !== Qd
          }),
          children: [(0, YR.jsx)(GQ, {
            value: `${hd}\xd7${hd}`,
            label: Xd(`${iQ}coreStatIsland`),
            more: hd - vd
          }), (0, YR.jsx)(GQ, {
            value: String(Wd.machineAllowance),
            label: Xd(`${iQ}coreStatMachines`),
            more: Wd.machineAllowance - (null !== (Od = null === Kd || void 0 === Kd ? void 0 : Kd.machineAllowance) && void 0 !== Od ? Od : Wd.machineAllowance)
          }), (0, YR.jsx)(GQ, {
            value: String(Wd.beltAllowance),
            label: Xd(`${iQ}coreStatBelts`),
            more: Wd.beltAllowance - (null !== (md = null === Kd || void 0 === Kd ? void 0 : Kd.beltAllowance) && void 0 !== md ? md : Wd.beltAllowance)
          }), null !== Qd && (0, YR.jsx)(GQ, {
            value: String(Qd),
            label: Xd(`${iQ}coreStatStorage`),
            more: Qd - (Kd ? EW(Fd - 1) : Qd)
          })]
        }), Wd.reward && (0, YR.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, YR.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Xd(`${iQ}coreRewardItem`)
          }), (0, YR.jsx)(AQ, {
            item: Wd.reward,
            itemNames: Rd
          })]
        }), Wd.newDeposits.length > 0 && (0, YR.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, YR.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Xd(Wd.newDeposits.length > 1 ? `${iQ}coreRewardDeposits` : `${iQ}coreRewardDeposit`)
          }), rQ(Wd).map((dd => {
            let [Od, md] = dd;
            return (0, YR.jsx)(AQ, {
              item: Od,
              itemNames: Rd,
              children: md > 1 && ` \xd7${md}`
            }, Od)
          }))]
        }), Wd.unlocks.length > 0 && (0, YR.jsx)(nQ, {
          items: Wd.unlocks,
          itemNames: Rd
        }), (0, YR.jsx)(PQ, {
          tier: Fd
        })]
      })
    }

    function PQ(dd) {
      let {
        tier: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)(), Wd = yF[Od];
      if (!Wd) return null;
      const Fd = HF(Od, 0, 0).barrierMax !== HF(Od - 1, 0, 0).barrierMax;
      return (0, YR.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, YR.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, YR.jsx)(SF.c, {
            itemName: Fd ? vF.Chestplate : hF,
            amount: 0
          })
        }), md(`${iQ}gearPerkLine`, {
          perk: md(`${iQ}${Wd}`)
        })]
      })
    }

    function zQ(dd, Od) {
      return null === dd ? Od : dd.value
    }

    function cQ(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === dd || md - dd.atMs >= Wd ? null : Fd(dd.value, Od) ? dd.armed ? null : dd : dd.armed ? dd : {
        ...dd,
        armed: !0
      }
    }

    function jQ(dd, Od) {
      const md = Od.filter((Od => {
        var md;
        return !1 !== (null === (md = dd.get(Od)) || void 0 === md ? void 0 : md.value)
      }));
      for (const [Wd, Fd] of dd) Fd.value && !Od.includes(Wd) && md.push(Wd);
      return md
    }

    function DQ(dd, Od, md, Fd) {
      const [Rd, Xd] = (0, Wd.useState)((() => new Map)), Kd = () => {
        Xd((Od => function(dd, Od, md, Wd) {
          var Fd;
          let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Xd = null;
          for (const [Kd, hd] of dd) {
            const Fd = cQ(hd, Od(Kd), md, Wd, Rd);
            Fd !== hd && (Xd ??= new Map(dd), null === Fd ? Xd.delete(Kd) : Xd.set(Kd, Fd))
          }
          return null !== (Fd = Xd) && void 0 !== Fd ? Fd : dd
        }(Od, dd, Date.now(), md, Fd)))
      };
      (0, Wd.useEffect)((() => {
        Kd()
      }), [Od, md]), (0, Wd.useEffect)((() => {
        if (0 === Rd.size) return;
        const dd = Math.min(...[...Rd.values()].map((dd => dd.atMs))),
          Od = setTimeout(Kd, Math.max(0, dd + md - Date.now()) + 1);
        return () => {
          clearTimeout(Od)
        }
      }), [Rd, Od, md]);
      return [Rd, (Od, md) => {
        Xd((Wd => {
          const Rd = new Map(Wd);
          return Rd.set(Od, function(dd, Od, md) {
            return {
              value: dd,
              atMs: md,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(dd, Od)
            }
          }(md, dd(Od), Date.now(), Fd)), Rd
        }))
      }]
    }
    const eQ = "buildAFactory2Game:";

    function IQ(dd) {
      let {
        message: Od,
        itemNames: md
      } = dd;
      const Fd = rX(),
        {
          t: Rd
        } = (0, xF.G)(),
        [Xd, Kd] = (0, Wd.useState)(!1),
        [hd, vd] = function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BX;
          const [md, Wd] = DQ((Od => dd.includes(Od)), dd, Od, Object.is);
          return [jQ(md, dd), Wd]
        }(Od.baf2CoreBankPaused),
        Qd = new Set(hd),
        td = [...Od.baf2CoreBanked];
      for (const Wd of Qd) td.some((dd => {
        let [Od] = dd;
        return Od === Wd
      })) || td.push([Wd, 0]);
      return 0 === td.length ? null : (0, YR.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, YR.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Xd,
          onClick: () => {
            Kd(!Xd)
          },
          children: [(0, YR.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Rd(`${eQ}coreBankedLater`)
          }), (0, YR.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: td.map((dd => {
              let [Od, md] = dd;
              const Wd = Qd.has(Od);
              return (0, YR.jsxs)("span", {
                className: aF()({
                  Paused: Wd
                }),
                title: Wd ? Rd(`${eQ}coreBankPausedTag`) : void 0,
                children: [(0, YR.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, YR.jsx)(SF.c, {
                    itemName: Od,
                    amount: 0
                  })
                }), md, Wd && (0, YR.jsx)(BF.c, {
                  name: "pause"
                })]
              }, Od)
            }))
          }), (0, YR.jsx)(BF.c, {
            name: Xd ? "angle-up" : "angle-down"
          })]
        }), Xd && (0, YR.jsxs)(YR.Fragment, {
          children: [(0, YR.jsx)("ul", {
            children: td.map((dd => {
              let [Od, Wd] = dd;
              const Xd = Qd.has(Od);
              return (0, YR.jsxs)("li", {
                children: [(0, YR.jsxs)(AQ, {
                  item: Od,
                  itemNames: md,
                  children: [(0, YR.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Wd
                  }), Xd && (0, YR.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Rd(`${eQ}coreBankPausedTag`)
                  })]
                }), (0, YR.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, YR.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Wd,
                    onClick: () => {
                      Fd.send(`baf2corewithdraw ${Wd} ${Od}`)
                    },
                    children: Rd(`${eQ}coreTake`)
                  }), (0, YR.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Fd.send(`${Yd} ${Od}`), vd(Od, !Xd)
                    },
                    children: Rd(Xd ? `${eQ}coreBankResume` : `${eQ}coreBankStop`)
                  })]
                })]
              }, Od)
            }))
          }), (0, YR.jsx)("p", {
            className: "Baf2CoreHint",
            children: Rd(`${eQ}coreBankNote`)
          })]
        })]
      })
    }
    const lQ = "buildAFactory2Game:";

    function CQ(dd) {
      const Od = Math.max(0, Math.floor(dd));
      return `${Math.floor(Od/60)}:${String(Od%60).padStart(2,"0")}`
    }

    function ZQ(dd) {
      let {
        item: Od
      } = dd;
      return (0, YR.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, YR.jsx)(SF.c, {
          itemName: Od,
          amount: 0
        })
      })
    }

    function kQ() {
      return (0, YR.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, YR.jsx)(BF.c, {
          name: "bolt"
        })
      })
    }

    function fQ(dd) {
      let {
        charge: Od,
        hint: md,
        itemNames: Wd
      } = dd;
      const Fd = rX(),
        {
          t: Rd
        } = (0, xF.G)(),
        [Xd, Kd, hd, vd, Qd, td, od] = Od,
        [Nd, qd] = function(dd) {
          var Od;
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BX,
            Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Fd, Rd] = DQ((() => dd), dd, md, Wd);
          return [zQ(null !== (Od = Fd.get("")) && void 0 !== Od ? Od : null, dd), dd => {
            Rd("", dd)
          }]
        }(od),
        Hd = Nd === od ? td : !Nd,
        yd = vd >= Qd,
        bd = Xd.find((dd => {
          let [, Od, md] = dd;
          return md < .9 * Od
        }));
      let Td = `${lQ}coreChargeWaiting`,
        pd = {};
      return yd ? Td = `${lQ}coreChargeDone` : Nd ? Td = `${lQ}coreChargeStopped` : Hd && md ? (Td = `${lQ}${md[0]}`, pd = {
        item: (0, OR.d)(Rd, md[1])
      }) : Hd && bd ? (Td = `${lQ}coreChargeShort`, pd = {
        item: (0, OR.d)(Rd, bd[0])
      }) : Hd && Kd > 0 && !hd ? Td = `${lQ}coreChargePower` : Hd && (Td = `${lQ}coreChargeRunning`), (0, YR.jsxs)("div", {
        className: aF()("Baf2CoreCharge", {
          Waiting: !Hd && !yd,
          Done: yd
        }),
        children: [(0, YR.jsxs)("h4", {
          children: [Rd(`${lQ}coreChargeTitle`), (0, YR.jsx)("span", {
            children: Rd(`${lQ}coreChargeProgress`, {
              done: CQ(vd),
              need: CQ(Qd)
            })
          })]
        }), (0, YR.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, YR.jsx)("div", {
            style: {
              width: 100 * Math.min(vd, Qd) / Qd + "%"
            }
          })
        }), (0, YR.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Xd.map((dd => {
            var Od;
            let [md, Fd, Xd] = dd;
            const Kd = Xd >= .9 * Fd;
            return (0, YR.jsxs)("li", {
              className: aF()({
                Done: Kd,
                Short: Hd && !Kd
              }),
              children: [(0, YR.jsx)(ZQ, {
                item: md
              }), (0, YR.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, YR.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, YR.jsx)(sF.d, {
                    text: null !== (Od = Wd[md]) && void 0 !== Od ? Od : md
                  }), (0, YR.jsx)("span", {
                    children: Rd(`${lQ}coreChargeItem`, {
                      now: String(Xd),
                      need: String(Fd)
                    })
                  })]
                }), (0, YR.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, YR.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Xd/Fd)}%`
                    }
                  })
                })]
              })]
            }, md)
          })), Kd > 0 && (0, YR.jsxs)("li", {
            className: aF()("Baf2CoreChargePower", {
              Short: Hd && !hd
            }),
            children: [(0, YR.jsx)(kQ, {}), (0, YR.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, YR.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, YR.jsx)("span", {
                  children: Rd(`${lQ}coreChargePowerRow`, {
                    power: Md(Kd)
                  })
                })
              })
            })]
          })]
        }), (0, YR.jsx)("p", {
          className: "Baf2CoreHint",
          children: Rd(Td, pd)
        }), !yd && (Hd || Nd) && (0, YR.jsx)("button", {
          type: "button",
          className: aF()("Baf2CoreChargeToggle", {
            Stopped: Nd
          }),
          onClick: () => {
            Fd.send(wd), qd(!Nd)
          },
          children: Rd(Nd ? `${lQ}coreChargeRestart` : `${lQ}coreChargeStop`)
        })]
      })
    }

    function MQ(dd) {
      let {
        charge: Od,
        reached: md,
        itemNames: Wd
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)();
      return (0, YR.jsxs)("div", {
        className: aF()("Baf2CoreCharge", {
          Done: md
        }),
        children: [(0, YR.jsxs)("h4", {
          children: [Fd(`${lQ}coreChargeTitle`), (0, YR.jsx)("span", {
            children: Fd(`${lQ}coreChargeSpecTime`, {
              time: CQ(Od.seconds)
            })
          })]
        }), (0, YR.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Od.items.map((dd => {
            var Od;
            let {
              item: Rd,
              amount: Xd
            } = dd;
            return (0, YR.jsxs)("li", {
              className: aF()({
                Done: md
              }),
              children: [(0, YR.jsx)(ZQ, {
                item: Rd
              }), (0, YR.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, YR.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, YR.jsx)(sF.d, {
                    text: null !== (Od = Wd[Rd]) && void 0 !== Od ? Od : Rd
                  }), (0, YR.jsx)("span", {
                    children: Fd(`${lQ}coreChargeSpecItem`, {
                      need: String(Xd)
                    })
                  })]
                })
              })]
            }, Rd)
          })), Od.powerPerS > 0 && (0, YR.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, YR.jsx)(kQ, {}), (0, YR.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, YR.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, YR.jsx)("span", {
                  children: Fd(`${lQ}coreChargePowerRow`, {
                    power: Md(Od.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const dt = "buildAFactory2Game:";

    function Ot(dd) {
      let {
        def: Od,
        reached: md,
        banked: Wd,
        itemNames: Fd
      } = dd;
      const {
        t: Rd
      } = (0, xF.G)();
      return (0, YR.jsx)("ul", {
        className: "Baf2CoreCost",
        children: Od.cost.map((dd => {
          let {
            item: Od,
            amount: Xd
          } = dd;
          const Kd = md ? 0 : Wd(Od);
          return (0, YR.jsx)("li", {
            children: (0, YR.jsx)(AQ, {
              item: Od,
              itemNames: Fd,
              children: (0, YR.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: Kd > 0 ? Rd(`${dt}coreBankedFor`, {
                  amount: String(Kd),
                  total: String(Xd)
                }) : `\xd7${Xd}`
              })
            })
          }, Od)
        }))
      })
    }

    function mt(dd, Od) {
      if (Od >= Qd()) return dd(`${dt}coreMaxTier`);
      const md = vd[Od + 1];
      return md && !md.startsWith("upgradeCore") ? dd(`${dt}coreGateQuest`, {
        quest: dd(`${dt}quest_${md}`)
      }) : dd(`${dt}coreGateClosed`)
    }

    function Wt() {
      const {
        t: dd
      } = (0, xF.G)(), Od = rX(), md = (0, Wd.useRef)(null), Fd = (0, Wd.useRef)(Date.now());
      return cv(!0, md), (0, YR.jsx)("div", {
        ref: md,
        className: "Baf2CoreGrow",
        children: (0, YR.jsx)(bX.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Fd.current >= 600 && Od.send(pd)
          },
          children: dd(`${dt}coreGrow`)
        })
      })
    }

    function Ft(dd) {
      let {
        message: Od,
        itemNames: md,
        next: Wd
      } = dd;
      const Fd = rX(),
        {
          t: Rd
        } = (0, xF.G)(),
        Xd = Od.baf2CoreTier,
        Kd = Od.baf2CoreReady,
        hd = Od.baf2CoreNeeds.filter((dd => {
          let [, Od, md, Wd] = dd;
          return Wd > 0 && Od < md
        })),
        vd = Od.baf2CoreNeeds.every((dd => {
          let [, Od, md] = dd;
          return Od >= md
        })),
        Qd = Od.baf2CoreKeep;
      return (0, YR.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, YR.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [Kd && (0, YR.jsx)(Wt, {}), (0, YR.jsx)("h3", {
            children: Rd(`${dt}coreBring`)
          }), (0, YR.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: Od.baf2CoreNeeds.map((dd => {
              let [Od, Wd, Xd, Kd] = dd;
              return (0, YR.jsxs)("li", {
                className: aF()({
                  Done: Wd >= Xd
                }),
                children: [(0, YR.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, YR.jsx)(SF.c, {
                    itemName: Od,
                    amount: 0
                  })
                }), (0, YR.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, YR.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, YR.jsx)(sF.d, {
                      text: md[Od]
                    }), (0, YR.jsxs)("span", {
                      children: [Wd, "/", Xd]
                    })]
                  }), (0, YR.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, YR.jsx)("div", {
                      style: {
                        width: 100 * Wd / Xd + "%"
                      }
                    }), Kd > 0 && (0, YR.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * Kd / Xd + "%"
                      }
                    })]
                  })]
                }), Kd > 0 && Wd < Xd && (0, YR.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Fd.send(`${gd} ${Od}`)
                  },
                  children: Rd(`${dt}coreDeposit`, {
                    amount: String(Kd)
                  })
                })]
              }, Od)
            }))
          }), Od.baf2CoreCharge && (0, YR.jsx)(fQ, {
            charge: Od.baf2CoreCharge,
            hint: Od.baf2CoreChargeHint,
            itemNames: md
          }), !Kd && hd.length > 1 && (0, YR.jsx)(bX.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Fd.send(pd)
            },
            children: Rd(`${dt}coreHandOver`)
          }), !Kd && void 0 !== Qd && (0, YR.jsx)("p", {
            className: "Baf2CoreHint",
            children: Rd(`${dt}coreKeepRest`, {
              item: (0, OR.d)(Rd, Qd)
            })
          }), !Kd && !vd && 0 === hd.length && void 0 === Qd && (0, YR.jsx)("p", {
            className: "Baf2CoreHint",
            children: Rd(`${dt}coreNothingHeld`)
          }), (0, YR.jsx)(IQ, {
            message: Od,
            itemNames: md
          })]
        }), (0, YR.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, YR.jsx)("h3", {
            children: Rd(`${dt}coreRewards`)
          }), (0, YR.jsx)(LQ, {
            def: Wd,
            tier: Xd + 1,
            itemNames: md
          })]
        })]
      })
    }

    function Rt(dd) {
      let {
        message: Od,
        itemNames: md,
        shown: Wd
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)(), Rd = Od.baf2CoreTier, Xd = bd(Wd), Kd = Wd <= Rd, hd = new Map(Od.baf2CoreBanked), vd = !Td(Rd, Ed(Od)) && Wd === Rd;
      return (0, YR.jsxs)("div", {
        className: aF()("Baf2CoreBody", {
          Locked: !Kd
        }),
        children: [(0, YR.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, YR.jsx)("h3", {
            children: Fd(Kd ? `${dt}coreItTook` : `${dt}coreItNeeds`)
          }), 0 === Xd.cost.length && (0, YR.jsx)("p", {
            className: "Baf2CoreHint",
            children: Fd(`${dt}coreTierStart`)
          }), Xd.cost.length > 0 && (0, YR.jsx)(Ot, {
            def: Xd,
            reached: Kd,
            banked: dd => {
              var Od;
              return function(dd, Od, md, Wd) {
                let Fd = dd;
                for (let Xd = Od + 2; Xd <= md; Xd++) {
                  var Rd;
                  const dd = bd(Xd).cost.find((dd => dd.item === Wd)),
                    Od = Math.min(Fd, null !== (Rd = null === dd || void 0 === dd ? void 0 : dd.amount) && void 0 !== Rd ? Rd : 0);
                  if (Xd === md) return Od;
                  Fd -= Od
                }
                return 0
              }(null !== (Od = hd.get(dd)) && void 0 !== Od ? Od : 0, Rd, Wd, dd)
            },
            itemNames: md
          }), Xd.charge && (0, YR.jsx)(MQ, {
            charge: Xd.charge,
            reached: Kd,
            itemNames: md
          }), vd && (0, YR.jsxs)(YR.Fragment, {
            children: [(0, YR.jsx)("p", {
              className: "Baf2CoreHint",
              children: mt(Fd, Rd)
            }), (0, YR.jsx)(IQ, {
              message: Od,
              itemNames: md
            })]
          })]
        }), (0, YR.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, YR.jsx)("h3", {
            children: Fd(Kd ? `${dt}coreGave` : `${dt}coreLockedRewards`)
          }), (0, YR.jsx)(LQ, {
            def: Xd,
            tier: Wd,
            itemNames: md
          })]
        })]
      })
    }

    function Xt(dd, Od) {
      const {
        key: md,
        params: Wd
      } = Nd(Od - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return dd(`${dt}${md}`, Wd)
    }
    const Kt = "buildAFactory2Game:",
      ht = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      vt = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function Qt(dd) {
      let {
        view: Od,
        close: md,
        askIslands: Fd
      } = dd;
      const {
        t: Rd
      } = (0, xF.G)(), [Xd, Kd] = (0, Wd.useState)(!1);
      (0, Wd.useEffect)((() => {
        if (!Xd) return;
        const dd = window.setTimeout((() => {
          Kd(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(dd)
        }
      }), [Xd]);
      const {
        message: hd,
        itemNames: vd
      } = Od, Qd = hd.baf2CoreTier, td = bd(Qd), od = Td(Qd, Ed(hd)), [Hd, yd] = hd.baf2CoreMachines, [pd, Yd] = hd.baf2CoreBelts, gd = hd.baf2CoreStorage, wd = hd.baf2CoreReady, [Jd, Ud] = (0, Wd.useState)(null), xd = (null === Jd || void 0 === Jd ? void 0 : Jd.at) === Qd && Jd.ready === wd ? Jd.tier : od ? Qd + 1 : Qd;
      let Bd = "coreTierLocked";
      xd <= Qd ? Bd = "coreTierReached" : xd === Qd + 1 && (Bd = "coreTierNext");
      const Sd = Rd(`${Kt}${bd(xd).nameKey}`),
        sd = xd === Qd + 1 ? od : null,
        ud = Nd(xd, {
          tier: Bd,
          stage: ht[Bd],
          atomic: vt[Bd]
        }),
        Vd = Rd(`${Kt}${ud.key}`, {
          ...ud.params,
          name: Sd
        }),
        Ad = Nd(Qd, qd),
        rd = Rd(`${Kt}${Ad.key}`, {
          ...Ad.params,
          name: Rd(`${Kt}${td.nameKey}`)
        });
      return (0, YR.jsx)(yX.c, {
        close: md,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, YR.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsxs)("div", {
              children: [(0, YR.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Rd(`${Kt}coreTitle`)
              }), void 0 !== hd.baf2CoreIslandName && (0, YR.jsx)("p", {
                className: "Baf2CoreIsland",
                children: hd.baf2CoreIslandName
              }), (0, YR.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, YR.jsx)("span", {
                  children: rd
                }), (0, YR.jsx)("span", {
                  className: aF()({
                    Full: Hd >= yd
                  }),
                  children: Rd(`${Kt}coreMachineCount`, {
                    amount: String(Hd),
                    total: String(yd)
                  })
                }), (0, YR.jsx)("span", {
                  className: aF()({
                    Full: pd >= Yd
                  }),
                  children: Rd(`${Kt}coreBeltCount`, {
                    amount: String(pd),
                    total: String(Yd)
                  })
                }), void 0 !== gd && (0, YR.jsx)("span", {
                  className: aF()({
                    Full: gd[0] >= gd[1]
                  }),
                  children: Rd(`${Kt}coreStorageCount`, {
                    amount: String(gd[0]),
                    total: String(gd[1])
                  })
                })]
              })]
            }), (0, YR.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [hd.baf2CoreIslands && (0, YR.jsx)(bX.g, {
                className: "Baf2CoreIslandsButton",
                disabled: Xd,
                onClick: () => {
                  Kd(!0), Fd()
                },
                children: Rd(`${Kt}islandsOpenButton`)
              }), (0, YR.jsx)(bX.j, {
                onClick: md
              })]
            })]
          }), (0, YR.jsx)(VQ, {
            tier: Qd,
            shown: xd,
            xN: dd => {
              Ud({
                tier: dd,
                at: Qd,
                ready: wd
              })
            }
          }), (0, YR.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Vd, xd > Qd + 1 && (0, YR.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: Xt(Rd, xd)
            })]
          }), 6 === xd && xd > Qd && (0, YR.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Rd(`${Kt}coreStagesNote`)
          }), 11 === xd && xd > Qd && (0, YR.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Rd(`${Kt}coreAtomicNote`)
          }), sd && (0, YR.jsx)(Ft, {
            message: hd,
            itemNames: vd,
            next: sd
          }), !sd && (0, YR.jsx)(Rt, {
            message: hd,
            itemNames: vd,
            shown: xd
          })]
        })
      })
    }
    const tt = {
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
    const ot = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: RR,
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

    function Nt(dd) {
      return dd.baf2DropCometOreOnly ? "dropCometOre" : dd.baf2DropCometIsotope ? "seed" === dd.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function qt(dd) {
      let {
        message: Od,
        quests: md,
        close: Fd,
        leave: Rd
      } = dd;
      const Xd = rX(),
        {
          t: Kd
        } = (0, xF.G)(),
        hd = (0, fv.i)(rF, md.get()),
        vd = function(dd) {
          var Od;
          if (!Ad(dd.tutorial)) return null;
          const md = dd.rows.find((dd => dd.current)),
            Wd = md ? tt[md.key] : void 0;
          return null !== (Od = null !== Wd && void 0 !== Wd ? Wd : dd.side ? tt[dd.side.row.key] : void 0) && void 0 !== Od ? Od : null
        }(hd),
        Qd = null === hd.tier || hR(hd.tier),
        td = Qd ? ot : ot.filter((dd => {
          let {
            item: Od
          } = dd;
          return Od !== RR
        })),
        [od, Nd] = (0, Wd.useState)(null),
        qd = null !== od && void 0 !== od ? od : !Od.baf2DropFoundSalvage && Qd,
        Hd = Od.baf2DropRuinDistance,
        yd = Od.baf2DropComet,
        bd = Od.baf2DropOldWorks,
        Td = Od.baf2DropGrove,
        pd = function(dd) {
          return 2 + Number(void 0 !== dd.baf2DropComet) + Number(!!dd.baf2DropOwedComet || void 0 !== dd.baf2DropOwedWaitMinutes) + Number(void 0 !== dd.baf2DropDigDistance) + Number(void 0 !== dd.baf2DropOldWorks) + Number(void 0 !== dd.baf2DropGrove)
        }(Od),
        Yd = dd => {
          Xd.send(function(dd) {
            return `baf2drop ${dd}`
          }(dd)), Rd()
        };
      let gd = Kd("buildAFactory2Game:dropRuinNone");
      if (null !== Hd) {
        let dd = Od.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        Od.baf2DropRuinOldWorks && (dd = "dropRuinOldWorks");
        const md = void 0 === Od.baf2DropRuinCluster ? Kd("buildAFactory2Game:dropRuinOpen") : Kd("buildAFactory2Game:dropRuinCluster", {
          count: String(Od.baf2DropRuinCluster)
        });
        gd = `${Kd(`buildAFactory2Game:${dd}`,{distance:String(Hd)})} ${md}`
      }
      let wd = Kd("buildAFactory2Game:dropBelowDescription");
      void 0 !== Od.baf2DropBelowLook && (wd = Kd("buildAFactory2Game:dropBelowLook", {
        look: Kd(Od.baf2DropBelowLook)
      }));
      const Ed = "buildAFactory2Game:wildsRegion_survivorGrove" === Od.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        Jd = TR(Kd, 60 * function(dd) {
          const [Od, md] = (0, Wd.useState)((() => Date.now())), [Fd, Rd] = (0, Wd.useState)(Od);
          return (0, Wd.useEffect)((() => {
            const dd = Date.now();
            md(dd), Rd(dd)
          }), [dd]), (0, Wd.useEffect)((() => {
            const dd = window.setInterval((() => {
              Rd(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(dd)
            }
          }), []), Math.max(1, dd.baf2DropRenewMinutes - Math.floor((Fd - Od) / 6e4))
        }(Od)),
        Ud = function(dd, Od, md) {
          return "ruin" === dd && !md || "owed" === dd && !Od.baf2DropOwedComet ? null : dd
        }(vd, Od, null !== Hd),
        xd = function(dd) {
          for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
          return aF()("Baf2DropTile", ...md, {
            Wanted: Ud === dd
          })
        };
      return (0, YR.jsx)(yX.c, {
        close: Fd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, YR.jsxs)("section", {
          className: aF()("Baf2Panel Baf2DropMap", {
            Many: pd >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsxs)("div", {
              children: [(0, YR.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: Kd("buildAFactory2Game:dropMapTitle")
              }), (0, YR.jsx)("p", {
                children: Kd("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, YR.jsx)(bX.j, {
              onClick: Fd
            })]
          }), (0, YR.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== yd && (0, YR.jsxs)(bX.A, {
              className: xd("comet", "Baf2DropComet"),
              onClick: () => {
                Yd("comet")
              },
              children: [(0, YR.jsx)("strong", {
                children: Kd("buildAFactory2Game:dropComet")
              }), (0, YR.jsx)("span", {
                children: Kd(`buildAFactory2Game:${Nt(Od)}`, {
                  distance: String(yd)
                })
              })]
            }), Od.baf2DropOwedComet && (0, YR.jsxs)(bX.A, {
              className: xd("owed", "Baf2DropComet"),
              onClick: () => {
                Yd("owed")
              },
              children: [(0, YR.jsx)("strong", {
                children: Kd("buildAFactory2Game:dropOwedComet")
              }), (0, YR.jsx)("span", {
                children: Od.baf2DropOwedIsotope ? Kd("buildAFactory2Game:dropOwedIsotopeDescription") : Kd("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== Od.baf2DropOwedWaitMinutes && (0, YR.jsxs)(bX.A, {
              className: xd("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, YR.jsx)("strong", {
                children: Kd("buildAFactory2Game:dropOwedComet")
              }), (0, YR.jsx)("span", {
                children: Kd("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(Od.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, YR.jsxs)(bX.g, {
              className: xd("below"),
              onClick: () => {
                Yd("below")
              },
              children: [(0, YR.jsx)("strong", {
                children: Kd("buildAFactory2Game:dropBelow")
              }), (0, YR.jsx)("span", {
                children: wd
              })]
            }), void 0 !== Od.baf2DropDigDistance && (0, YR.jsxs)(bX.r, {
              className: xd("dig"),
              onClick: () => {
                Yd("dig")
              },
              children: [(0, YR.jsx)("strong", {
                children: Kd("buildAFactory2Game:dropDig")
              }), (0, YR.jsx)("span", {
                children: Kd("buildAFactory2Game:dropDigDescription", {
                  distance: String(Od.baf2DropDigDistance),
                  y: bR(Od.baf2DropDigY)
                })
              })]
            }), void 0 !== Td && (0, YR.jsxs)(bX.r, {
              className: xd("grove", "Baf2DropGrove"),
              onClick: () => {
                Yd("grove")
              },
              children: [(0, YR.jsx)("strong", {
                children: Kd("buildAFactory2Game:dropGrove")
              }), (0, YR.jsx)("span", {
                children: Kd(`buildAFactory2Game:${Ed}`, {
                  distance: String(Td)
                })
              })]
            }), (0, YR.jsxs)(bX.m, {
              className: xd("ruin"),
              disabled: null === Hd,
              onClick: () => {
                Yd("ruin")
              },
              children: [(0, YR.jsx)("strong", {
                children: Kd("buildAFactory2Game:dropRuin")
              }), (0, YR.jsx)("span", {
                children: gd
              })]
            }), void 0 !== bd && (0, YR.jsxs)(bX.G, {
              className: xd("works"),
              onClick: () => {
                Yd("works")
              },
              children: [(0, YR.jsx)("strong", {
                children: Kd("buildAFactory2Game:dropOldWorks")
              }), (0, YR.jsx)("span", {
                children: Kd("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(bd)
                })
              })]
            })]
          }), (0, YR.jsx)("p", {
            className: "Baf2DropRenew",
            children: Kd("buildAFactory2Game:dropRenew", {
              time: Jd
            })
          }), (0, YR.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: qd,
            onToggle: dd => {
              dd.currentTarget.open !== qd && Nd(dd.currentTarget.open)
            },
            children: [(0, YR.jsx)("summary", {
              children: Kd("buildAFactory2Game:dropSalvageWhat")
            }), (0, YR.jsx)("p", {
              children: Kd("buildAFactory2Game:dropSalvageIntro")
            }), (0, YR.jsx)("ul", {
              children: td.map((dd => {
                let {
                  item: Od,
                  nameKey: md,
                  useKey: Wd,
                  params: Fd
                } = dd;
                return (0, YR.jsxs)("li", {
                  children: [(0, YR.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, YR.jsx)(SF.c, {
                      itemName: Od,
                      amount: 0
                    })
                  }), (0, YR.jsxs)("span", {
                    children: [(0, YR.jsx)("strong", {
                      children: Kd(md)
                    }), ": ", Kd(Wd, Fd)]
                  })]
                }, Od)
              }))
            })]
          })]
        })
      })
    }
    const Ht = "buildAFactory2Game:";

    function yt(dd, Od) {
      return dd.sendIslandEdit(`baf2coopleave ${Od.baf2IslandId}`)
    }

    function bt(dd) {
      let {
        card: Od,
        canRename: md,
        done: Fd,
        t: Rd
      } = dd;
      const Xd = rX(),
        [Kd, hd] = (0, Wd.useState)(Od.baf2IslandName),
        vd = yv(Kd),
        Qd = "" === vd || bv(vd),
        td = () => {
          !Qd && md && (vd !== Od.baf2IslandName ? Fd(Xd.sendIslandEdit(`baf2islandrename ${Od.baf2IslandId} ${vd}`)) : Fd(null))
        },
        od = () => {
          Fd(null)
        };
      return (0, YR.jsxs)("div", {
        className: "Baf2IslandForm",
        ...Pv(od),
        children: [(0, YR.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Rd(`${Ht}islandsRenameLabel`), (0, YR.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Kd,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: zv,
            onChange: dd => {
              hd(dd.target.value)
            },
            ...Lv(td, od)
          })]
        }), "" === vd && (0, YR.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Rd(`${Ht}islandsRenameEmpty`)
        }), bv(vd) && (0, YR.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Rd(`${Ht}islandsNameReserved`)
        }), (0, YR.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, YR.jsx)(bX.r, {
            disabled: Qd || !md,
            onClick: td,
            children: Rd(`${Ht}islandsRenameSave`)
          }), (0, YR.jsx)(bX.g, {
            onClick: od,
            children: Rd(`${Ht}islandsCancel`)
          })]
        })]
      })
    }

    function Tt(dd) {
      let {
        card: Od,
        canDelete: md,
        done: Fd,
        t: Rd
      } = dd;
      const Xd = rX(),
        [Kd, hd] = (0, Wd.useState)(""),
        vd = function(dd, Od) {
          return yv(dd).toLowerCase() === yv(Od).toLowerCase()
        }(Kd, Od.baf2IslandName),
        Qd = () => {
          vd && md && Fd(Xd.sendIslandEdit(`baf2islanddelete ${Od.baf2IslandId}`))
        },
        td = () => {
          Fd(null)
        },
        od = Bv("name"),
        [Nd, qd = ""] = Rd(`${Ht}islandsDeleteConfirm`, {
          name: od
        }).split(od);
      return (0, YR.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...Pv(td),
        children: [(0, YR.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, YR.jsxs)("span", {
            children: [Nd, (0, YR.jsx)("strong", {
              children: Od.baf2IslandName
            }), qd]
          }), (0, YR.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Kd,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: zv,
            onChange: dd => {
              hd(dd.target.value)
            },
            ...Lv(Qd, td)
          })]
        }), Av(Od) && (0, YR.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Rd(`${Ht}islandsDeleteLeftBack`)
        }), (0, YR.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, YR.jsx)(bX.G, {
            disabled: !vd || !md,
            onClick: Qd,
            children: Rd(`${Ht}islandsDeleteForGood`)
          }), (0, YR.jsx)(bX.g, {
            onClick: td,
            children: Rd(`${Ht}islandsCancel`)
          })]
        })]
      })
    }

    function pt(dd) {
      let {
        members: Od,
        t: md
      } = dd;
      const Wd = Od.length;
      return (0, YR.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, YR.jsxs)("span", {
          children: [1 === Wd ? md(`${Ht}islandsPlayersOne`) : md(`${Ht}islandsPlayers`, {
            count: String(Wd)
          }), " "]
        }), Od.map(((dd, Od) => (0, YR.jsxs)("span", {
          className: aF()("Baf2IslandMember", {
            Here: dd.baf2MemberHere
          }),
          title: dd.baf2MemberHere ? md(`${Ht}islandsPlayerHere`) : void 0,
          children: [dd.baf2MemberName, Od < Wd - 1 ? ", " : ""]
        }, dd.baf2MemberKey)))]
      })
    }

    function Yt(dd) {
      let {
        card: Od,
        answered: md,
        nowMs: Fd,
        t: Rd
      } = dd;
      const Xd = rX(),
        [Kd, hd] = (0, Wd.useState)(new Map),
        vd = Av(Od);
      if (!vd) return null;
      return (0, YR.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, YR.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Rd(`${Ht}islandsLeftTitle`)
        }), (0, YR.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: vd.left.map((dd => {
            const Wd = dd.baf2LeftKey,
              Qd = Gv(Kd.get(Wd), md, Fd),
              td = function(dd) {
                return 1 === dd ? [`${ov}islandsLeftItemsOne`] : [`${ov}islandsLeftItems`, {
                  count: String(dd)
                }]
              }(dd.baf2LeftItems);
            return (0, YR.jsx)("li", {
              className: aF()("Baf2IslandPerson", {
                Pending: Qd
              }),
              children: (0, YR.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, YR.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: dd.baf2LeftName
                }), (0, YR.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Rd(td[0], td[1])
                }), vd.claim && (0, YR.jsx)(bX.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: Qd,
                  onClick: () => {
                    (dd => {
                      const md = Xd.sendIslandEdit(`baf2coopclaim ${Od.baf2IslandId} ${dd}`);
                      hd((Od => new Map(Od).set(dd, {
                        atMs: Date.now(),
                        answer: md
                      })))
                    })(Wd)
                  },
                  children: Rd(`${Ht}islandsClaim`)
                })]
              })
            }, Wd)
          }))
        }), vd.goThere && (0, YR.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Rd(`${Ht}islandsClaimGoThere`)
        })]
      })
    }

    function gt(dd) {
      let {
        card: Od,
        view: md,
        blocked: Fd,
        maxIslands: Rd,
        answered: Xd,
        nowMs: Kd,
        done: hd,
        openSocial: vd,
        t: Qd
      } = dd;
      const td = rX(),
        [od, Nd] = (0, Wd.useState)(new Map),
        [qd, Hd] = (0, Wd.useState)(new Map),
        [yd, bd] = (0, Wd.useState)(null),
        Td = (0, Wd.useRef)(null);
      ev(Td);
      const pd = Od.baf2IslandId,
        Yd = Od.baf2IslandCoop,
        gd = null !== Yd && void 0 !== Yd && Yd.baf2CoopMembers.some((dd => dd.baf2MemberKey === yd)) ? yd : null,
        wd = function(dd, Od) {
          const md = dd.baf2IslandCoop;
          return md && rv(md) || null !== Od ? void 0 : dd.baf2IslandInvitable
        }(Od, Fd),
        Ed = function(dd, Od) {
          const md = dd.baf2IslandCoop;
          return md && rv(md) ? {
            key: `${ov}islandsCoopFull`,
            params: {
              max: String(md.baf2CoopMax)
            }
          } : void 0 !== dd.baf2IslandInvitable && null === Od || md && !md.baf2CoopManageHere ? null : "degraded" === Od || "stuck" === Od ? {
            key: `${ov}islandsInviteNotLoaded`
          } : null === Od || function(dd) {
            return "notHome" === dd || "wilds" === dd || "visiting" === dd
          }(Od) || gv(Od) ? {
            key: `${ov}islandsInviteGoThere`
          } : {
            key: `${ov}islandsInviteBusy`
          }
        }(Od, Fd),
        Jd = () => {
          var dd;
          bd(null), null === (dd = Td.current) || void 0 === dd || dd.focus()
        };
      return (0, YR.jsxs)("div", {
        ref: Td,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...Pv(null === gd ? hd : Jd),
        children: [Yd && (0, YR.jsxs)(YR.Fragment, {
          children: [(0, YR.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Qd(`${Ht}islandsPlayersTitle`, {
              count: String(Yd.baf2CoopMembers.length),
              max: String(Yd.baf2CoopMax)
            })
          }), (0, YR.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: Yd.baf2CoopMembers.map(((dd, Od) => {
              const Wd = dd.baf2MemberKey,
                Fd = Gv(od.get(Wd), Xd, Kd);
              return (0, YR.jsxs)("li", {
                className: aF()("Baf2IslandPerson", {
                  Pending: Fd
                }),
                children: [(0, YR.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, YR.jsx)("span", {
                    className: aF()("Baf2IslandPersonName", {
                      Here: dd.baf2MemberHere
                    }),
                    children: dd.baf2MemberName
                  }), dd.baf2MemberHere && (0, YR.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Qd(`${Ht}islandsPlayerHere`)
                  }), 0 === Od && (0, YR.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Qd(`${Ht}islandsPlayerOwner`)
                  }), md.remove && Od > 0 && !Fd && gd !== Wd && (0, YR.jsx)(bX.K, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var dd;
                      bd(Wd), null === (dd = Td.current) || void 0 === dd || dd.focus()
                    },
                    children: Qd(`${Ht}islandsRemove`)
                  })]
                }), gd === Wd && (0, YR.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, YR.jsx)("p", {
                    children: Sv(Qd, `${Ht}islandsRemoveConfirm`, {
                      player: dd.baf2MemberName
                    })
                  }), (0, YR.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, YR.jsx)(bX.G, {
                      onClick: () => {
                        (dd => {
                          const Od = td.sendIslandEdit(`baf2coopremove ${pd} ${dd.baf2MemberKey}`);
                          Nd((md => new Map(md).set(dd.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: Od
                          }))), Jd()
                        })(dd)
                      },
                      children: Qd(`${Ht}islandsRemoveYes`)
                    }), (0, YR.jsx)(bX.g, {
                      onClick: Jd,
                      children: Qd(`${Ht}islandsCancel`)
                    })]
                  })]
                })]
              }, Wd)
            }))
          })]
        }), (void 0 !== wd || null !== Ed) && (0, YR.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Qd(`${Ht}islandsInviteTitle`)
        }), !Yd && (void 0 !== wd || null !== Ed) && (0, YR.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Qd(`${Ht}islandsInviteShareNote`)
        }), 0 === (null === wd || void 0 === wd ? void 0 : wd.length) && (0, YR.jsx)(wt, {
          openSocial: vd,
          t: Qd
        }), void 0 !== wd && wd.length > 0 && (0, YR.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: wd.map((dd => {
            const Od = !0 === dd.baf2InvitableSent || Gv(qd.get(dd.baf2InvitableId), Xd, Kd);
            return (0, YR.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, YR.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, YR.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: dd.baf2InvitableName
                }), dd.baf2InvitableFull && !Od && (0, YR.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Qd(`${Ht}islandsInviteTheirFull`, {
                    max: String(Rd)
                  })
                }), (Od || !dd.baf2InvitableFull) && (0, YR.jsx)(bX.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: Od,
                  onClick: () => {
                    (dd => {
                      const Od = td.sendIslandEdit(`baf2coopinvite ${pd} ${dd}`);
                      Hd((md => new Map(md).set(dd, {
                        atMs: Date.now(),
                        answer: Od
                      })))
                    })(dd.baf2InvitableId)
                  },
                  children: Qd(Od ? `${Ht}islandsInvited` : `${Ht}islandsInvite`)
                })]
              })
            }, dd.baf2InvitableId)
          }))
        }), Ed && (0, YR.jsx)(Cv, {
          note: Ed,
          t: Qd
        }), (0, YR.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, YR.jsx)(bX.g, {
            onClick: hd,
            children: Qd(`${Ht}islandsDone`)
          })
        })]
      })
    }

    function wt(dd) {
      let {
        openSocial: Od,
        t: md
      } = dd;
      return (0, YR.jsxs)(YR.Fragment, {
        children: [(0, YR.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: md(Od ? `${Ht}islandsInviteNobody` : `${Ht}islandsInviteNobodyGuest`)
        }), Od && (0, YR.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, YR.jsx)(bX.g, {
            onClick: Od,
            children: md("socialBar:social")
          })
        })]
      })
    }

    function Et(dd) {
      let {
        className: Od,
        text: md,
        ConfirmButton: Fd,
        confirmLabel: Rd,
        canConfirm: Xd,
        send: Kd,
        done: hd,
        t: vd
      } = dd;
      const Qd = (0, Wd.useRef)(null);
      ev(Qd);
      const td = () => {
        hd(null)
      };
      return (0, YR.jsxs)("div", {
        ref: Qd,
        tabIndex: -1,
        className: aF()("Baf2IslandForm", Od),
        ...Pv(td),
        children: [(0, YR.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: md
        }), (0, YR.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, YR.jsx)(Fd, {
            disabled: !Xd,
            onClick: () => {
              Xd && hd(Kd())
            },
            children: Rd
          }), (0, YR.jsx)(bX.g, {
            onClick: td,
            children: vd(`${Ht}islandsCancel`)
          })]
        })]
      })
    }

    function Jt(dd) {
      return "hidden" !== dd
    }

    function Ut(dd) {
      var Od, md;
      let {
        card: Fd,
        keepOwn: Rd,
        blocked: Xd,
        maxIslands: Kd,
        serverNowMs: hd,
        nowMs: vd,
        actions: Qd,
        full: td,
        waits: od,
        answered: Nd,
        mode: qd,
        setMode: Hd,
        pending: yd,
        onSent: bd,
        switchTo: Td,
        leave: pd,
        coopOn: Yd,
        openSocial: gd,
        t: wd
      } = dd;
      const Ed = rX(),
        Jd = Fd.baf2IslandActive,
        Ud = Jd ? null : function(dd, Od) {
          if (dd <= 0) return null;
          const md = Od - dd;
          if (md < NR) return [`${ov}islandsPlayedJustNow`];
          if (md < Nv) return [`${ov}islandsPlayedMinutes`, {
            minutes: String(Math.floor(md / NR))
          }];
          if (md < qv) return [`${ov}islandsPlayedHours`, {
            hours: String(Math.floor(md / Nv))
          }];
          const Wd = Math.floor(md / qv);
          return 1 === Wd ? [`${ov}islandsPlayedDay`] : [`${ov}islandsPlayedDays`, {
            days: String(Wd)
          }]
        }(Fd.baf2IslandLastPlayedMs, hd),
        xd = void 0 === (Bd = Fd.baf2IslandItems) ? null : 0 === Bd ? [`${ov}islandsItemsNone`] : 1 === Bd ? [`${ov}islandsItemsOne`] : [`${ov}islandsItems`, {
          count: String(Bd)
        }];
      var Bd;
      const Sd = function(dd) {
          return dd ? 1 === dd ? [`${ov}islandsWaitingOne`] : [`${ov}islandsWaiting`, {
            count: String(dd)
          }] : null
        }(Fd.baf2IslandWaiting),
        sd = Fd.baf2IslandUnreadable,
        ud = Fd.baf2IslandCoop,
        Vd = iv(Fd, Qd, Rd, td, Yd, Xd),
        Ad = (0, Wd.useRef)(null);
      cv(null !== qd, Ad);
      const rd = () => {
          var dd;
          Hd(null), null === (dd = Ad.current) || void 0 === dd || dd.focus()
        },
        Gd = (dd, Od) => {
          rd(), null !== dd && bd(dd, Od)
        },
        nd = (dd, Od) => wd(`${Ht}${dd}`, {
          time: TR(wd, Od)
        });
      return (0, YR.jsxs)("li", {
        ref: Ad,
        tabIndex: -1,
        className: aF()("Baf2IslandCard", {
          Active: Jd,
          Pending: yd,
          Shared: void 0 !== ud
        }),
        children: [(0, YR.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, YR.jsx)("strong", {
            className: "Baf2IslandName",
            children: Fd.baf2IslandName
          }), Jd && (0, YR.jsx)("span", {
            className: "Baf2IslandBadge",
            children: wd(`${Ht}islandsOnThis`)
          }), ud && (0, YR.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: wd(`${Ht}islandsShared`)
          })]
        }), "member" === (null === ud || void 0 === ud ? void 0 : ud.baf2CoopRole) && (0, YR.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Sv(wd, `${Ht}islandsSharedBy`, {
            owner: ud.baf2CoopOwner
          })
        }), void 0 !== sd && (0, YR.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: wd("newer" === sd ? `${Ht}islandsUnreadable` : `${Ht}islandsDamaged`)
        }), "corrupt" === sd && td && (0, YR.jsx)("p", {
          className: "Baf2IslandStats",
          children: wd(`${Ht}islandsDamagedFull`)
        }), void 0 === sd && (0, YR.jsxs)(YR.Fragment, {
          children: [(0, YR.jsx)(lv, {
            tier: Fd.baf2IslandTier,
            t: wd
          }), (0, YR.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, YR.jsx)("span", {
              children: 1 === Fd.baf2IslandQuestsDone ? wd(`${Ht}islandsQuestsDoneOne`) : wd(`${Ht}islandsQuestsDone`, {
                count: String(Fd.baf2IslandQuestsDone)
              })
            }), (0, YR.jsx)("span", {
              children: 1 === Fd.baf2IslandMachines ? wd(`${Ht}islandsMachinesOne`) : wd(`${Ht}islandsMachines`, {
                count: String(Fd.baf2IslandMachines)
              })
            }), xd && (0, YR.jsx)("span", {
              children: wd(xd[0], xd[1])
            }), Sd && (0, YR.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: wd(Sd[0], Sd[1])
            }), Ud && (0, YR.jsx)("span", {
              children: wd(Ud[0], Ud[1])
            })]
          })]
        }), ud && void 0 === ud.baf2CoopState && "people" !== qd && (0, YR.jsx)(pt, {
          members: ud.baf2CoopMembers,
          t: wd
        }), null === qd && (0, YR.jsx)(Yt, {
          card: Fd,
          answered: Nd,
          nowMs: vd,
          t: wd
        }), Vd.note && (0, YR.jsx)(Cv, {
          note: Vd.note,
          className: aF()({
            Unreachable: void 0 !== (null === ud || void 0 === ud ? void 0 : ud.baf2CoopState)
          }),
          t: wd
        }), "rename" === qd && (0, YR.jsx)(bt, {
          card: Fd,
          canRename: "enabled" === Vd.rename,
          done: Gd,
          t: wd
        }), "delete" === qd && (0, YR.jsx)(Tt, {
          card: Fd,
          canDelete: "enabled" === Vd.delete,
          done: dd => {
            Gd(dd, ud ? "delete" : void 0)
          },
          t: wd
        }), "people" === qd && (0, YR.jsx)(gt, {
          card: Fd,
          view: Vd,
          blocked: Xd,
          maxIslands: Kd,
          answered: Nd,
          nowMs: vd,
          done: rd,
          openSocial: gd,
          t: wd
        }), "leave" === qd && (0, YR.jsx)(Et, {
          className: "Leave",
          text: Sv(wd, `${Ht}islandsLeaveConfirm`, {
            island: Fd.baf2IslandName,
            owner: null !== (Od = null === (md = Fd.baf2IslandCoop) || void 0 === md ? void 0 : md.baf2CoopOwner) && void 0 !== Od ? Od : ""
          }),
          ConfirmButton: bX.G,
          confirmLabel: wd(`${Ht}islandsLeaveYes`),
          canConfirm: "enabled" === Vd.leave,
          send: () => yt(Ed, Fd),
          done: dd => {
            Gd(dd, "leave"), null !== dd && Jd && pd()
          },
          t: wd
        }), "unshare" === qd && (0, YR.jsx)(Et, {
          className: "Unshare",
          text: Sv(wd, `${Ht}islandsStopSharingConfirm`, {
            island: Fd.baf2IslandName
          }),
          ConfirmButton: bX.r,
          confirmLabel: wd(`${Ht}islandsStopSharing`),
          canConfirm: "enabled" === Vd.unshare,
          send: () => Ed.sendIslandEdit(`baf2coopunshare ${Fd.baf2IslandId}`),
          done: dd => {
            Gd(dd), null !== dd && pd()
          },
          t: wd
        }), null === qd && !yd && (0, YR.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Fd.baf2IslandName,
          children: [Jt(Vd.switch) && (0, YR.jsx)(bX.r, {
            disabled: "enabled" !== Vd.switch,
            onClick: Td,
            children: "tryAgain" === Vd.switchLabel ? wd(`${Ht}islandsTryAgain`) : od.switch > 0 ? nd("islandsSwitchIn", od.switch) : wd(`${Ht}islandsSwitch`)
          }), Jt(Vd.rename) && (0, YR.jsx)(bX.g, {
            disabled: "enabled" !== Vd.rename,
            onClick: () => {
              Hd("rename")
            },
            children: wd(`${Ht}islandsRename`)
          }), Jt(Vd.people) && (0, YR.jsx)(bX.g, {
            disabled: "enabled" !== Vd.people,
            onClick: () => {
              Hd("people")
            },
            children: wd("players" === Vd.peopleLabel ? `${Ht}islandsPlayersButton` : `${Ht}islandsInviteButton`)
          }), Jt(Vd.unshare) && (0, YR.jsx)(bX.g, {
            disabled: "enabled" !== Vd.unshare,
            onClick: () => {
              Hd("unshare")
            },
            children: wd(`${Ht}islandsStopSharing`)
          }), Jt(Vd.dismiss) && (0, YR.jsx)(bX.g, {
            disabled: "enabled" !== Vd.dismiss,
            onClick: () => {
              bd(yt(Ed, Fd), "dismiss"), Jd && pd()
            },
            children: wd(`${Ht}islandsDismiss`)
          }), Jt(Vd.leave) && (0, YR.jsx)(bX.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Vd.leave,
            onClick: () => {
              Hd("leave")
            },
            children: Jd && od.switch > 0 ? nd("islandsLeaveIn", od.switch) : wd(`${Ht}islandsLeave`)
          }), Jt(Vd.delete) && (0, YR.jsx)(bX.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Vd.delete,
            onClick: () => {
              Hd("delete")
            },
            children: od.change > 0 && Vd.deleteWaits ? nd("islandsDeleteIn", od.change) : wd(`${Ht}islandsDelete`)
          })]
        })]
      })
    }
    const xt = "buildAFactory2Game:";

    function Bt(dd) {
      let {
        invite: Od,
        actions: md,
        full: Fd,
        maxIslands: Rd,
        waitSeconds: Xd,
        focus: Kd,
        focused: hd,
        join: vd,
        decline: Qd,
        t: td
      } = dd;
      const [od, Nd] = (0, Wd.useState)(!1), qd = (0, Wd.useRef)(null);
      cv(od, qd), (0, Wd.useEffect)((() => {
        var dd;
        Kd && (Nd(!0), null === (dd = qd.current) || void 0 === dd || dd.focus(), hd())
      }), [Kd, hd]);
      const Hd = function(dd, Od, md, Wd, Fd) {
          return md ? {
            join: !1,
            note: {
              key: `${ov}islandsJoinTooMany`,
              params: {
                max: String(Wd)
              }
            }
          } : dd.baf2InvitePlayers >= Fd ? {
            join: !1,
            note: {
              key: `${ov}islandsJoinFull`
            }
          } : {
            join: Od.switch,
            note: null
          }
        }(Od, md, Fd, Rd, 10),
        yd = Od.baf2InviteIsland,
        bd = Od.baf2InvitePlayers,
        Td = () => {
          var dd;
          Nd(!1), null === (dd = qd.current) || void 0 === dd || dd.focus()
        },
        pd = Xd > 0 && null === Hd.note ? td(`${xt}islandsJoinIn`, {
          time: TR(td, Xd)
        }) : td(`${xt}islandsJoin`);
      return (0, YR.jsxs)("li", {
        ref: qd,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...od ? Pv(Td) : {},
        children: [(0, YR.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, YR.jsx)("strong", {
            className: "Baf2IslandName",
            children: yd
          })
        }), (0, YR.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Sv(td, `${xt}islandsInvitedBy`, {
            owner: Od.baf2InviteOwner
          })
        }), (0, YR.jsx)(lv, {
          tier: Od.baf2InviteTier,
          t: td
        }), (0, YR.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, YR.jsx)("span", {
            children: 1 === bd ? td(`${xt}islandsPlayersCountOne`) : td(`${xt}islandsPlayersCount`, {
              count: String(bd)
            })
          })
        }), Hd.note && (0, YR.jsx)(Cv, {
          note: Hd.note,
          t: td
        }), od && (0, YR.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Sv(td, `${xt}islandsJoinConfirm`, {
            island: yd
          })
        }), !od && (0, YR.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": yd,
          children: [(0, YR.jsx)(bX.r, {
            disabled: !Hd.join,
            onClick: () => {
              var dd;
              Nd(!0), null === (dd = qd.current) || void 0 === dd || dd.focus()
            },
            children: pd
          }), (0, YR.jsx)(bX.g, {
            onClick: Qd,
            children: td(`${xt}islandsDecline`)
          })]
        }), od && (0, YR.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, YR.jsx)(bX.r, {
            disabled: !Hd.join,
            onClick: vd,
            children: td(`${xt}islandsJoinYes`)
          }), (0, YR.jsx)(bX.g, {
            onClick: Td,
            children: td(`${xt}islandsCancel`)
          })]
        })]
      })
    }

    function St(dd) {
      let {
        invites: Od,
        actions: md,
        full: Wd,
        maxIslands: Fd,
        waitSeconds: Rd,
        focus: Xd,
        focused: Kd,
        leave: hd,
        declined: vd,
        t: Qd
      } = dd;
      const td = rX();
      return (0, YR.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, YR.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Qd(`${xt}islandsInvitesTitle`)
        }), (0, YR.jsx)("ul", {
          className: "Baf2IslandCards",
          children: Od.map((dd => {
            const Od = dd.baf2InviteId;
            return (0, YR.jsx)(Bt, {
              invite: dd,
              actions: md,
              full: Wd,
              maxIslands: Fd,
              waitSeconds: Rd,
              focus: Xd === Od,
              focused: Kd,
              join: () => {
                td.send(`baf2coopaccept ${Od}`), hd()
              },
              decline: () => {
                td.send(`baf2coopdecline ${Od}`), vd(Od)
              },
              t: Qd
            }, Od)
          }))
        })]
      })
    }
    const st = "buildAFactory2Game:";

    function ut(dd) {
      let {
        cards: Od,
        activeName: md,
        canStart: Fd,
        waitSeconds: Rd,
        leave: Xd,
        t: Kd
      } = dd;
      const hd = rX(),
        [vd, Qd] = (0, Wd.useState)(!1),
        [td, od] = (0, Wd.useState)(""),
        Nd = (0, Wd.useRef)(null);
      cv(vd, Nd), (0, Wd.useEffect)((() => {
        var dd;
        vd && (null === (dd = Nd.current) || void 0 === dd || dd.focus())
      }), [vd]);
      const qd = Tv(Od),
        Hd = yv(td),
        yd = bv(Hd),
        bd = () => {
          Fd && !yd && (hd.send("" === Hd || Hd === qd ? kd : `${kd} ${Hd}`), Xd())
        },
        Td = () => {
          var dd;
          Qd(!1), null === (dd = Nd.current) || void 0 === dd || dd.focus()
        };
      return (0, YR.jsxs)("li", {
        ref: Nd,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...vd ? Pv(Td) : {},
        children: [(0, YR.jsx)("strong", {
          className: "Baf2IslandName",
          children: Kd(`${st}islandsNewTitle`)
        }), !vd && (0, YR.jsx)("p", {
          className: "Baf2IslandStats",
          children: Kd(`${st}islandsNewNote`)
        }), vd && (0, YR.jsxs)(YR.Fragment, {
          children: [(0, YR.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Sv(Kd, `${st}islandsNewConfirm`, {
              name: md
            })
          }), (0, YR.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [Kd(`${st}islandsNewNameLabel`), (0, YR.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: td,
              placeholder: qd,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: zv,
              onChange: dd => {
                od(dd.target.value)
              },
              ...Lv(bd, Td)
            })]
          }), yd && (0, YR.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: Kd(`${st}islandsNameReserved`)
          })]
        }), (0, YR.jsxs)("div", {
          className: aF()("Baf2IslandButtons", {
            Stacked: vd
          }),
          children: [(0, YR.jsx)(bX.r, {
            disabled: !Fd || vd && yd,
            onClick: () => {
              if (!vd) return od(qd), void Qd(!0);
              bd()
            },
            children: Rd > 0 ? Kd(`${st}islandsNewIn`, {
              time: TR(Kd, Rd)
            }) : Kd(vd ? `${st}islandsNewConfirmButton` : `${st}islandsNew`)
          }), vd && (0, YR.jsx)(bX.g, {
            onClick: Td,
            children: Kd(`${st}islandsCancel`)
          })]
        })]
      })
    }

    function Vt(dd) {
      var Od, md;
      let {
        message: Fd,
        arrivedAtMs: Rd,
        close: Xd,
        leave: Kd,
        openSocial: hd
      } = dd;
      const vd = rX(),
        {
          t: Qd
        } = (0, xF.G)(),
        td = Iv(1e3),
        [od, Nd] = (0, Wd.useState)(null),
        [qd, Hd] = (0, Wd.useState)(new Map),
        [yd, bd] = (0, Wd.useState)(new Set),
        Td = Fd.baf2IslandCards,
        pd = function(dd, Od, md, Wd) {
          return (null !== dd && void 0 !== dd ? dd : []).filter((dd => Od + dd.baf2InviteLeftMs > md && !Wd.has(dd.baf2InviteId)))
        }(Fd.baf2IslandsInvites, Rd, td, yd),
        Yd = pd.map((dd => dd.baf2InviteId)).join(" "),
        gd = (0, Wd.useRef)(null),
        wd = jv(gd);
      Dv(), (0, Wd.useEffect)((() => {
        var dd, Od;
        null !== (dd = gd.current) && void 0 !== dd && dd.contains(document.activeElement) || (null === (Od = gd.current) || void 0 === Od || Od.focus())
      }), [Fd, Yd]), (0, Wd.useEffect)((() => {
        Hd((dd => function(dd, Od, md, Wd) {
          const Fd = new Map;
          for (const Rd of Od) {
            const Od = dd.get(Rd.baf2IslandId);
            Od && (void 0 !== Od.untilGone || Wd < Od.answer) && Jv(Od, Rd, md) && Fd.set(Rd.baf2IslandId, Od)
          }
          return Fd.size === dd.size ? dd : Fd
        }(dd, Fd.baf2IslandCards, Date.now(), Fd.baf2IslandsAnswered)))
      }), [Fd]);
      const Ed = Hv(Rd, Fd.baf2IslandsWaitMs, td),
        Jd = Fd.baf2IslandsBlocked,
        Ud = wv(Jd, Ed),
        xd = function(dd, Od) {
          const md = wv(dd, 0);
          return {
            switch: md.switch ? Od : 0,
            change: md.change ? Od : 0
          }
        }(Jd, Ed),
        Bd = Td.length >= Fd.baf2IslandsMax,
        Sd = Td.length > 0,
        sd = function(dd, Od, md) {
          return dd + Math.max(0, md - Od)
        }(Fd.baf2IslandsNowMs, Rd, td),
        ud = null !== (Od = null === (md = Td.find((dd => dd.baf2IslandActive))) || void 0 === md ? void 0 : md.baf2IslandName) && void 0 !== Od ? Od : "",
        Vd = function(dd) {
          const Od = dd.filter(Vv).length;
          return Od <= 1 && Od < dd.length
        }(Td),
        Ad = !0 === Fd.baf2IslandsCoop,
        rd = function(dd, Od) {
          const md = dd.find((dd => dd.baf2IslandActive)),
            Wd = null === md || void 0 === md ? void 0 : md.baf2IslandCoop;
          return md && "member" === (null === Wd || void 0 === Wd ? void 0 : Wd.baf2CoopRole) ? {
            key: `${ov}islandsKeepOwnMember`,
            names: {
              owner: Wd.baf2CoopOwner,
              island: md.baf2IslandName
            }
          } : {
            key: Od ? `${ov}islandsKeepOwn` : `${ov}islandsKeepOwnSolo`
          }
        }(Td, Ad),
        [Gd, nd] = (0, Wd.useState)(null);
      (0, Wd.useEffect)((() => {
        void 0 !== Fd.baf2IslandsFocusInvite && nd(Fd.baf2IslandsFocusInvite)
      }), [Fd]);
      const Ld = (0, Wd.useCallback)((() => {
          nd(null)
        }), []),
        Pd = od ? Td.find((dd => dd.baf2IslandId === od.id)) : void 0,
        zd = od && Pd && "hidden" !== iv(Pd, Ud, Vd, Bd, Ad, Jd)[od.mode] ? od : null;
      return (0, YR.jsx)(yX.c, {
        close: Xd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, YR.jsxs)("section", {
          ref: gd,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: wd ? {
            marginTop: `${wd.marginTop}px`,
            maxHeight: `${wd.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsxs)("div", {
              children: [(0, YR.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Qd(`${st}islandsTitle`)
              }), Sd && (0, YR.jsx)("p", {
                children: Qd(`${st}islandsSubtitle`, {
                  count: String(Td.length),
                  max: String(Fd.baf2IslandsMax)
                })
              })]
            }), (0, YR.jsx)(bX.j, {
              ariaLabel: Qd(`${st}islandsClose`),
              onClick: Xd
            })]
          }), (0, YR.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== Jd && (0, YR.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Sv(Qd, pv(Jd, Yv(Td)), {
                island: ud
              })
            }), Sd && pd.length > 0 && (0, YR.jsx)(St, {
              invites: pd,
              actions: Ud,
              full: Bd,
              maxIslands: Fd.baf2IslandsMax,
              waitSeconds: xd.switch,
              focus: Gd,
              focused: Ld,
              leave: Kd,
              declined: dd => {
                bd((Od => new Set(Od).add(dd)))
              },
              t: Qd
            }), Sd && (0, YR.jsxs)(YR.Fragment, {
              children: [Bd && (0, YR.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Qd(`${st}islandsFull`, {
                  max: String(Fd.baf2IslandsMax)
                })
              }), (0, YR.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Sv(Qd, rd.key, rd.names)
              }), (0, YR.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Td.map((dd => {
                  const Od = dd.baf2IslandId;
                  return (0, YR.jsx)(Ut, {
                    card: dd,
                    keepOwn: Vd,
                    coopOn: Ad,
                    openSocial: hd,
                    blocked: Jd,
                    maxIslands: Fd.baf2IslandsMax,
                    serverNowMs: sd,
                    nowMs: td,
                    actions: Ud,
                    full: Bd,
                    waits: xd,
                    answered: Fd.baf2IslandsAnswered,
                    mode: (null === zd || void 0 === zd ? void 0 : zd.id) === Od ? zd.mode : null,
                    setMode: dd => {
                      Nd(null === dd ? null : {
                        id: Od,
                        mode: dd
                      })
                    },
                    pending: Jv(qd.get(Od), dd, td),
                    onSent: (md, Wd) => {
                      Hd((Fd => {
                        const Rd = {
                          atMs: Date.now(),
                          from: dd.baf2IslandName,
                          answer: md
                        };
                        return new Map(Fd).set(Od, Wd ? {
                          ...Rd,
                          untilGone: Wd
                        } : Rd)
                      }))
                    },
                    leave: Kd,
                    switchTo: () => {
                      vd.send(`baf2islandswitch ${Od}`), Kd()
                    },
                    t: Qd
                  }, Od)
                })), !Bd && (0, YR.jsx)(ut, {
                  cards: Td,
                  activeName: ud,
                  canStart: Ud.change,
                  waitSeconds: xd.change,
                  leave: Kd,
                  t: Qd
                })]
              })]
            })]
          })]
        })
      })
    }
    var it = md(4199);
    const At = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        jW: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      rt = Object.keys(At),
      Gt = new Set([...Object.keys(kO), ...[...rO.Press.recipes, ...rO["Wire Mill"].recipes].map((dd => dd.output))]),
      nt = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Lt = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Pt = / Bar$|Alloy$/,
      zt = /Porkchop|Beef|Mutton|Venison|Steak/,
      ct = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const jt = (0, Wd.memo)((function(dd) {
      let {
        item: Od,
        name: md,
        amount: Wd,
        selected: Fd,
        small: Rd,
        onPick: Xd
      } = dd;
      return (0, YR.jsxs)("button", {
        type: "button",
        className: aF()("Baf2TermTile", {
          On: Fd,
          Small: Rd
        }),
        "aria-label": `${md}: ${Wd}`,
        "aria-pressed": Fd,
        onClick: () => {
          Xd(Od)
        },
        children: [(0, YR.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, YR.jsx)(SF.c, {
            itemName: Od,
            amount: 0
          })
        }), (0, YR.jsx)("span", {
          className: "Baf2TermCount",
          children: yR(Wd, 1e4)
        }), !Rd && (0, YR.jsx)("span", {
          className: "Baf2TermName",
          children: md
        })]
      })
    }));

    function Dt(dd) {
      let {
        store: Od,
        close: md,
        send: Fd
      } = dd;
      const {
        t: Rd
      } = (0, xF.G)(), {
        isTouchScreen: Xd
      } = (0, YF.p)(["isTouchScreen"]);
      ! function(dd) {
        const [Od, md] = (0, Wd.useState)(dd.version);
        (0, Wd.useEffect)((() => (md(dd.version), dd.subscribe((() => {
          md(dd.version)
        })))), [dd])
      }(Od);
      const [Kd, hd] = (0, Wd.useState)("all"), [vd, Qd] = (0, Wd.useState)(!1), [td, od] = (0, Wd.useState)(""), [Nd, qd] = (0, Wd.useState)(""), [Hd, yd] = (0, Wd.useState)(null), [bd, Td] = (0, Wd.useState)(!1), [pd, Yd, gd] = function() {
        const dd = (0, Wd.useRef)(null),
          [Od, md] = (0, Wd.useState)(!1),
          Fd = () => {
            const Od = dd.current;
            md(null !== Od && Od.scrollLeft + Od.clientWidth < Od.scrollWidth - 1)
          };
        return (0, Wd.useEffect)(Fd), (0, Wd.useEffect)((() => {
          const Od = dd.current;
          if (!Od) return;
          const md = new ResizeObserver(Fd);
          return md.observe(Od), () => {
            md.disconnect()
          }
        }), []), [dd, Od, Fd]
      }(), wd = (0, Wd.useMemo)((() => new Map), [Rd]), Ed = dd => {
        let Od = wd.get(dd);
        return void 0 === Od && (Od = function(dd, Od) {
          const md = /^(.+) \((.+)\)$/.exec(dd);
          return md ? Od(md[2], md[1]) : dd
        }((0, OR.d)(Rd, dd), ((dd, Od) => Rd("buildAFactory2Game:terminalTileKind", {
          kind: dd,
          base: Od
        }))), wd.set(dd, Od)), Od
      }, Jd = Od.isReadOnly(), Ud = bd && !Jd, xd = Od.recent(), Bd = Od.items(), Sd = Nd.trim().toLowerCase(), sd = Ud ? Od.heldItems(Hd) : ("recent" === Kd ? xd : Bd).filter((dd => {
        const Od = Ed(dd);
        return ("all" === Kd || "recent" === Kd || function(dd) {
          return vR(dd) ? "farm" : nt.test(dd) ? "nuclear" : Pt.test(dd) ? "bars" : zt.test(dd) ? "farm" : Lt.test(dd) ? "jW" : Gt.has(dd) ? "parts" : ct.test(dd) ? "farm" : "other"
        }(dd) === Kd) && ("" === Sd || Od.toLowerCase().includes(Sd)) && ("" === td || Od.toUpperCase().startsWith(td))
      })), ud = new Set(Bd.map((dd => Ed(dd).charAt(0).toUpperCase()))), Vd = dd => Ud ? Od.heldAmount(dd) : Od.amount(dd), Ad = !Ud && "recent" !== Kd && xd.length > 0, rd = function(dd, Od) {
        return null !== dd && Od.includes(dd) ? dd : null
      }(Hd, Ad ? [...sd, ...xd] : sd), Gd = null === rd ? 0 : Od.amount(rd), nd = null === rd ? 0 : Vd(rd), Ld = (0, Wd.useCallback)((dd => {
        yd((Od => Od === dd ? null : dd))
      }), []), Pd = dd => nd > 0 || Ud && null === rd && "fill" === dd && sd.length > 0, zd = Ud ? [
        ["one", Rd("buildAFactory2Game:terminalStoreOne")],
        ["stack", Rd("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Rd(null === rd ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Rd("buildAFactory2Game:terminalTakeOne")],
        ["stack", Rd("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Rd("buildAFactory2Game:terminalFill")]
      ], cd = Ud ? Rd("buildAFactory2Game:terminalStoreEmpty") : "" !== td ? Rd("buildAFactory2Game:terminalEmptyLetter", {
        letter: td
      }) : "" !== Sd ? Rd("buildAFactory2Game:terminalEmptySearch", {
        query: Nd
      }) : Rd("buildAFactory2Game:terminalEmpty");
      return (0, YR.jsx)(yX.c, {
        close: md,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, YR.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsxs)("div", {
              children: [(0, YR.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Rd(Od.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, YR.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, YR.jsx)("span", {
                  className: aF()({
                    Off: Ud
                  }),
                  children: Rd("buildAFactory2Game:terminalSubtitle", {
                    count: String(Od.siloCount())
                  })
                }), !Jd && (0, YR.jsx)("span", {
                  className: aF()({
                    Off: !Ud
                  }),
                  children: Rd("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !Jd && (0, YR.jsx)(it.e, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Rd("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Rd("buildAFactory2Game:terminalModeStore")
              }],
              value: Ud ? "store" : "take",
              onChange: dd => {
                Td("store" === dd), yd(null)
              },
              ariaLabel: Rd("buildAFactory2Game:terminalModes")
            }), (0, YR.jsx)(bX.j, {
              onClick: md
            })]
          }), (0, YR.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, YR.jsxs)("div", {
              className: aF()("Baf2TermTools", {
                Hidden: Ud
              }),
              children: [(0, YR.jsx)("div", {
                ref: pd,
                className: aF()("Baf2TermChips", {
                  MoreRight: Yd
                }),
                onScroll: gd,
                children: vd ? (0, YR.jsxs)(YR.Fragment, {
                  children: [(0, YR.jsx)("button", {
                    type: "button",
                    "aria-label": Rd("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Qd(!1), od("")
                    },
                    children: "\u2190"
                  }), [...ud].sort().map((dd => (0, YR.jsx)("button", {
                    type: "button",
                    className: aF()({
                      On: td === dd
                    }),
                    onClick: () => {
                      od(td === dd ? "" : dd)
                    },
                    children: dd
                  }, dd)))]
                }) : (0, YR.jsxs)(YR.Fragment, {
                  children: [(0, YR.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Qd(!0)
                    },
                    children: Rd("buildAFactory2Game:terminalLetters")
                  }), rt.map((dd => (0, YR.jsx)("button", {
                    type: "button",
                    className: aF()({
                      On: Kd === dd
                    }),
                    onClick: () => {
                      hd(dd)
                    },
                    children: Rd(At[dd])
                  }, dd)))]
                })
              }), !Xd && (0, YR.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Nd,
                placeholder: Rd("buildAFactory2Game:terminalSearch"),
                "aria-label": Rd("buildAFactory2Game:terminalSearch"),
                onChange: dd => {
                  qd(dd.target.value)
                },
                onKeyDown: dd => {
                  dd.stopPropagation()
                }
              }), (0, YR.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Rd("buildAFactory2Game:terminalResort"),
                title: Rd("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  Od.resort()
                },
                children: "\u21c5"
              })]
            }), Ad && (0, YR.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, YR.jsx)("span", {
                children: Rd(At.recent)
              }), xd.map((dd => (0, YR.jsx)(jt, {
                item: dd,
                name: Ed(dd),
                amount: Od.amount(dd),
                selected: rd === dd,
                small: !0,
                onPick: Ld
              }, dd)))]
            }), (0, YR.jsx)("div", {
              className: "Baf2TermTiles",
              children: sd.length > 0 ? sd.map((dd => (0, YR.jsx)(jt, {
                item: dd,
                name: Ed(dd),
                amount: Vd(dd),
                selected: rd === dd,
                onPick: Ld
              }, dd))) : (0, YR.jsx)("p", {
                className: "Baf2TermEmpty",
                children: cd
              })
            }), (0, YR.jsxs)("div", {
              className: aF()("Baf2TermActions", {
                Hidden: Ud && 0 === sd.length
              }),
              children: [(0, YR.jsx)("span", {
                className: "Baf2TermPicked",
                children: Jd ? (0, YR.jsxs)(YR.Fragment, {
                  children: [null !== rd && Gd > 0 ? Ed(rd) : Rd("buildAFactory2Game:terminalVisiting"), (0, YR.jsx)("small", {
                    children: Rd("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== rd ? (0, YR.jsxs)(YR.Fragment, {
                  children: [Ed(rd), (0, YR.jsx)("small", {
                    children: Rd("buildAFactory2Game:terminalStored", {
                      amount: Gd.toLocaleString()
                    })
                  })]
                }) : Rd(Ud ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !Jd && zd.map((dd => {
                let [md, Wd] = dd;
                const Rd = "fill" === md ? bX.m : bX.g;
                return (0, YR.jsx)(Rd, {
                  className: "Baf2TermTake",
                  disabled: !Pd(md),
                  onClick: () => {
                    (dd => {
                      Pd(dd) && Fd(null === rd ? Od.putAll() : Ud ? Od.put(dd, rd) : Od.take(dd, rd))
                    })(md)
                  },
                  children: Wd
                }, md)
              }))]
            })]
          })]
        })
      })
    }

    function et(dd) {
      let {
        kind: Od,
        icon: md,
        label: Wd,
        number: Fd,
        preview: Rd,
        note: Xd,
        tone: Kd = null,
        share: hd,
        onExplain: vd
      } = dd;
      return (0, YR.jsxs)("button", {
        type: "button",
        className: aF()("NxLane", Od, {
          Warn: "warn" === Kd,
          Danger: "danger" === Kd
        }),
        onClick: vd,
        children: [(0, YR.jsxs)("span", {
          className: "NxLaneHead",
          children: [md, (0, YR.jsx)("span", {
            className: "NxLaneLabel",
            children: Wd
          })]
        }), (0, YR.jsxs)("span", {
          className: "NxLaneNum",
          children: [Fd, Rd && (0, YR.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Rd]
          })]
        }), (0, YR.jsx)("span", {
          className: "NxLaneNote",
          children: Xd
        }), void 0 !== hd && (0, YR.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, hd)) + "%"
          }
        })]
      })
    }

    function It(dd) {
      let {
        kind: Od,
        step: md,
        short: Wd,
        planned: Fd
      } = dd;
      return (0, YR.jsx)("i", {
        className: aF()("NxPipe", Od, `Step${md}`, {
          Short: Wd,
          Planned: Fd
        }),
        "aria-hidden": "true"
      })
    }

    function lt(dd) {
      let {
        max: Od,
        bands: md,
        ticks: Wd,
        now: Fd,
        settle: Rd,
        settleTone: Xd,
        onExplain: Kd
      } = dd;
      const hd = dd => Math.max(0, Math.min(Od, dd)) / Od * 100 + "%";
      let vd = 0;
      return (0, YR.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: Kd,
        children: [(0, YR.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [md.map((dd => {
            const Od = {
              bottom: hd(vd),
              height: `calc(${hd(dd.upTo)} - ${hd(vd)})`
            };
            return vd = dd.upTo, (0, YR.jsx)("i", {
              className: aF()("NxGaugeBand", dd.kind),
              style: Od
            }, dd.kind)
          })), null !== Fd && (0, YR.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: hd(Fd)
            }
          }), void 0 !== Rd && null !== Rd && (0, YR.jsx)("i", {
            className: aF()("NxGaugeSettle", {
              Bad: "bad" === Xd
            }),
            style: {
              bottom: hd(Rd)
            }
          })]
        }), (0, YR.jsx)("span", {
          className: "NxGaugeTicks",
          children: Wd.map((dd => (0, YR.jsx)("small", {
            style: {
              bottom: hd(dd)
            },
            children: dd
          }, dd)))
        })]
      })
    }

    function Ct(dd) {
      const [Od, md] = (0, Wd.useState)(null), [Fd, Rd] = (0, Wd.useState)((() => {
        try {
          return null === window.localStorage.getItem(dd)
        } catch {
          return !1
        }
      })), Xd = (0, Wd.useRef)(null);
      (0, Wd.useEffect)((() => () => {
        null !== Xd.current && clearTimeout(Xd.current)
      }), []);
      const Kd = (0, Wd.useCallback)((Od => {
          md(Od), Rd(!1);
          try {
            window.localStorage.setItem(dd, "1")
          } catch {}
          null !== Xd.current && clearTimeout(Xd.current), Xd.current = setTimeout((() => {
            Xd.current = null, md(null)
          }), 5e3)
        }), [dd]),
        hd = (0, Wd.useCallback)(((Od, md) => {
          const Wd = `${dd}:${Od}`;
          try {
            if (null !== window.localStorage.getItem(Wd)) return;
            window.localStorage.setItem(Wd, "1")
          } catch {
            return
          }
          Kd(md)
        }), [Kd, dd]);
      return {
        explained: Od,
        hinting: Fd,
        explain: Kd,
        explainOnce: hd
      }
    }

    function Zt(dd) {
      let {
        text: Od,
        tone: md,
        explained: Wd
      } = dd;
      return (0, YR.jsxs)("p", {
        className: aF()("NxStatus", null === Wd ? md : "Explain"),
        "aria-live": "polite",
        children: [null !== Wd && (0, YR.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Wd && void 0 !== Wd ? Wd : Od]
      })
    }
    const kt = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function ft(dd, Od) {
      const md = Number(dd[Od]);
      return 1 === md || 2 === md || 3 === md ? md : 0
    }

    function Mt(dd) {
      return !!bh("reactor", dd.baf2RxNeed) || void 0 !== dd.baf2RxLayout && dd.baf2RxNeed.some((dd => {
        let [Od, md] = dd;
        return md > 0 && kt.includes(Od)
      }))
    }
    const Oo = "buildAFactory2Game:";

    function mo(dd) {
      let {
        status: Od,
        store: md,
        busy: Wd
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)();
      return function(dd) {
        return 0 !== (dd.baf2RxFlags & bO) && (!dd.baf2RxFormed || void 0 !== dd.baf2RxLayout)
      }(Od) ? (0, YR.jsx)(bX.m, {
        disabled: !Mt(Od) || Wd,
        onClick: () => {
          md.tap("fill", (() => {
            md.send("fill")
          }))
        },
        children: Fd(void 0 !== Od.baf2RxLayout ? `${Oo}rxFillLayout` : `${Oo}rxFill`)
      }) : null
    }

    function Wo(dd) {
      let {
        status: Od,
        store: md,
        readOnly: Fd,
        bare: Rd = !1
      } = dd;
      const {
        t: Xd
      } = (0, xF.G)(), Kd = Od.baf2RxLayout, [hd, vd, Qd] = Od.baf2RxDims, td = (0, Wd.useMemo)((() => {
        if (void 0 === Kd) return 0;
        const dd = Uint8Array.from(Kd, ((dd, Od) => ft(Kd, Od)));
        return CK([hd - 2, vd - 2, Qd - 2], dd).max
      }), [Kd, hd, vd, Qd]);
      return void 0 === Kd ? null : (0, YR.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Rd && (0, YR.jsx)("span", {
          className: "Baf2RxHint",
          children: Xd(`${Oo}rxLayoutLine`, {
            amount: Eh(td)
          })
        }), !Fd && (0, YR.jsx)(bX.g, {
          onClick: () => {
            md.send("layout", 0)
          },
          children: Xd(`${Oo}rxLayoutHide`)
        })]
      })
    }
    const Fo = "buildAFactory2Game:",
      Ro = {
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

    function Xo(dd) {
      let {
        id: Od,
        title: md,
        body: Wd,
        bodyParams: Fd,
        yes: Rd,
        cancel: Xd,
        confirm: Kd
      } = dd;
      const {
        t: hd
      } = (0, xF.G)();
      return (0, YR.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": Od,
        children: [(0, YR.jsx)("h3", {
          id: Od,
          children: hd(md)
        }), (0, YR.jsx)("p", {
          children: hd(Wd, Fd)
        }), (0, YR.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, YR.jsx)(bX.i, {
            onClick: Xd,
            children: hd(`${Fo}rxCancel`)
          }), (0, YR.jsx)(bX.G, {
            onClick: Kd,
            children: hd(Rd)
          })]
        })]
      })
    }

    function Ko(dd) {
      const [Od, md] = (0, Wd.useState)((() => dd.get()));
      return (0, Wd.useEffect)((() => (md(dd.get()), dd.subscribe((() => {
        md(dd.get())
      })))), [dd]), Od
    }

    function ho(dd) {
      let {
        kind: Od,
        cap: md,
        busy: Fd = !1,
        whyNot: Rd = null,
        apart: Xd
      } = dd;
      const {
        t: Kd
      } = (0, xF.G)(), [hd, vd] = (0, Wd.useState)(!1), Qd = null !== Rd, td = (0, Wd.useRef)(null);
      if ((0, Wd.useEffect)((() => {
          Qd && vd(!1)
        }), [Qd]), (0, Wd.useLayoutEffect)((() => {
          var dd;
          const Od = null === (dd = td.current) || void 0 === dd ? void 0 : dd.firstElementChild;
          Qd ? null === Od || void 0 === Od || Od.setAttribute("aria-disabled", "true") : Fd || null === Od || void 0 === Od || Od.removeAttribute("aria-disabled")
        })), !hd || Qd) return (0, YR.jsx)("span", {
        ref: td,
        className: "Baf2RxApartWrap",
        children: (0, YR.jsx)(bX.i, {
          disabled: Fd,
          className: aF()({
            Baf2RxNotYet: Qd
          }),
          onClick: () => {
            Rd ? Rd() : vd(!0)
          },
          children: Kd(`${Fo}rxApart`)
        })
      });
      const od = "battery" === Od,
        Nd = void 0 === md ? `${Fo}batApartConfirmBodyPlan` : `${Fo}batApartConfirmBody`;
      return (0, YR.jsx)(Xo, {
        id: `baf2ApartTitle_${Od}`,
        title: od ? `${Fo}batApartConfirmTitle` : `${Fo}rxApartConfirmTitle`,
        body: od ? Nd : `${Fo}rxApartConfirmBody`,
        bodyParams: void 0 === md ? void 0 : {
          cap: md
        },
        yes: `${Fo}rxApart`,
        cancel: () => {
          vd(!1)
        },
        confirm: () => {
          vd(!1), Xd()
        }
      })
    }

    function vo(dd) {
      let {
        mood: Od,
        big: md
      } = dd;
      const Wd = Ro[Od],
        Fd = [];
      return Wd.rows.forEach(((dd, Od) => {
        for (let md = 0; md < dd.length; md++) "." !== dd[md] && Fd.push((0, YR.jsx)("rect", {
          x: md + 1,
          y: Od + 1,
          width: 1,
          height: 1,
          fill: "w" === dd[md] ? "#8fd3ff" : Wd.colour
        }, `${md},${Od}`))
      })), (0, YR.jsxs)("svg", {
        className: aF()("Baf2RxFace", {
          Big: md,
          Alarm: "alarm" === Od
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, YR.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, YR.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Fd]
      })
    }

    function Qo(dd) {
      return HR(dd, "+").replace("+", "")
    }

    function to(dd) {
      let {
        kind: Od,
        dims: md,
        cap: Wd,
        disabled: Fd,
        compact: Rd,
        resize: Xd
      } = dd;
      const {
        t: Kd
      } = (0, xF.G)(), {
        min: hd,
        max: vd
      } = cm(Od), Qd = Math.min(Wd, vd), td = [`${Fo}rxWide`, `${Fo}rxTall`, `${Fo}rxDeep`], od = {
        w: String(md[0]),
        h: String(md[1]),
        d: String(md[2]),
        blocks: String(ah(Od, md))
      };
      return (0, YR.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, YR.jsx)("div", {
          className: "Baf2RxSteppers",
          children: md.map(((dd, Od) => {
            const Rd = Wd => {
                const Fd = [md[0], md[1], md[2]];
                Fd[Od] = dd + Wd, Xd(Fd)
              },
              od = dd >= Qd;
            return (0, YR.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, YR.jsx)("button", {
                type: "button",
                "aria-label": Kd(`${Fo}rxSmaller`),
                disabled: Fd || dd <= hd,
                onClick: () => {
                  Rd(-1)
                },
                children: "\u2212"
              }), (0, YR.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [dd, (0, YR.jsx)("small", {
                  children: Kd(td[Od])
                })]
              }), (0, YR.jsx)("button", {
                type: "button",
                "aria-label": Kd(`${Fo}rxBigger`),
                disabled: Fd || od,
                onClick: () => {
                  Rd(1)
                },
                children: od && Wd < vd ? "\ud83d\udd12" : "+"
              })]
            }, td[Od])
          }))
        }), !Rd && (0, YR.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === Od ? Kd(`${Fo}rxSizeLine`, {
            ...od,
            water: String(wh(md))
          }) : Kd(`${Fo}batSizeLine`, od)
        })]
      })
    }

    function oo(dd) {
      let {
        on: Od,
        label: md,
        disabled: Wd,
        locked: Fd,
        pending: Rd,
        toggle: Xd
      } = dd;
      return (0, YR.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": Od,
        disabled: Wd,
        "aria-disabled": Fd || void 0,
        className: aF()("Baf2RxSwitch", {
          On: Od,
          Locked: Fd,
          Pending: Rd
        }),
        onClick: Xd,
        children: [(0, YR.jsx)("span", {
          className: "Baf2RxKnob"
        }), md]
      })
    }
    const No = "buildAFactory2Game:",
      qo = .95;

    function Ho(dd, Od) {
      return 0 !== (dd.baf2RxFlags & Od)
    }

    function yo(dd) {
      return "cryo" === dd ? dO.o : dO.q
    }

    function bo(dd) {
      var Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd;
      return dd.baf2RxCryo ? {
        LN: "cryo",
        usePerS: null !== (Fd = dd.baf2RxCryoUse) && void 0 !== Fd ? Fd : 0,
        needPerS: null !== (Rd = dd.baf2RxCryoNeed) && void 0 !== Rd ? Rd : 0,
        inPerS: null !== (Xd = dd.baf2RxCryoIn) && void 0 !== Xd ? Xd : 0,
        stored: null !== (Kd = dd.baf2RxCryoStored) && void 0 !== Kd ? Kd : 0,
        makersShort: null !== (hd = dd.baf2RxMixersShort) && void 0 !== hd ? hd : 0,
        waterBeside: null !== (vd = dd.baf2RxWaterUse) && void 0 !== vd ? vd : 0,
        pct: dd.baf2RxWater
      } : {
        LN: "water",
        usePerS: null !== (Od = dd.baf2RxWaterUse) && void 0 !== Od ? Od : 0,
        needPerS: null !== (md = dd.baf2RxWaterNeed) && void 0 !== md ? md : 0,
        inPerS: dd.baf2RxWaterIn,
        stored: dd.baf2RxWaterStored,
        makersShort: null !== (Wd = dd.baf2RxCondensersShort) && void 0 !== Wd ? Wd : 0,
        waterBeside: 0,
        pct: dd.baf2RxWater
      }
    }

    function To(dd) {
      const Od = "running" === dd.baf2RxState || "idle" === dd.baf2RxState;
      return dd.baf2RxFormed && dd.baf2RxTarget !== dd.baf2RxThrottle && Od ? po(dd, dd.baf2RxTarget) : null
    }

    function po(dd, Od) {
      const [md, Wd, Fd, , , , Rd, , Xd] = dd.baf2RxStats, Kd = Ho(dd, HO), hd = bo(dd), vd = hd.pct / 100, {
        gen: Qd,
        out: td,
        load: od
      } = function(dd, Od, md, Wd) {
        const Fd = md ? zK : 1,
          Rd = Math.min(dd.fuelHeat * Fd * Math.max(0, Math.min(1, Od)), dd.size * Fd);
        return {
          gen: Rd,
          out: Rd,
          load: Xh(Rd, dd.cooling, Wd)
        }
      }({
        fuelHeat: md,
        cooling: Wd,
        size: Fd
      }, Od / 100, Kd, vd), Nd = hh(Rd || lK(...dd.baf2RxDims)), qd = dd.baf2RxHeat, Hd = Math.abs(od - qd), yd = function(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dO.q;
        const Rd = md ? zK : 1,
          Xd = Math.min(dd.fuelHeat * Rd * Od / 100, dd.size * Rd),
          Kd = Xd,
          hd = dd.fuelHeat * Rd,
          vd = dd.cooling * Rh(Wd.pct / 100),
          Qd = hd > 0 && vd < dd.size * Rd ? Math.floor(100 * vd / hd) : 100,
          td = Xd * Fd - Wd.inPerS;
        return {
          out: Kd,
          hotAbove: Qd >= 100 ? null : Math.max(0, Qd),
          waterSecs: Wd.pct >= 100 && td > 1e-6 ? Math.max(0, Wd.stored) / td : null
        }
      }({
        fuelHeat: md,
        cooling: Wd,
        size: Fd
      }, Od, Kd, {
        pct: hd.pct,
        inPerS: hd.inPerS,
        stored: hd.stored
      }, yo(hd.LN));
      return {
        pct: Od,
        out: td,
        coolPerS: Qd * yo(hd.LN),
        pelletsPerMin: Xd > 0 ? td / Xd * 60 : 0,
        settle: od,
        settleS: Hd > 2 ? Nd * Math.log(Hd / 2) : 0,
        overheatS: od > 100 && qd < 100 ? Nd * Math.log((od - qd) / (od - 100)) : null,
        hotAbove: yd.hotAbove,
        coolantSecs: yd.waterSecs
      }
    }

    function Yo(dd) {
      return dd.baf2RxThrottle <= 0 && "running" !== dd.baf2RxState ? 0 : po(dd, dd.baf2RxTarget).pelletsPerMin / 60
    }

    function go(dd, Od) {
      if (dd <= 0 || Od <= 0) return 0;
      const md = dd / Od;
      return md < .25 ? 1 : md < .5 ? 2 : md < .8 ? 3 : 4
    }

    function wo(dd, Od) {
      const md = {};
      for (const [Wd, Fd] of Object.entries(Od.params)) md[Wd] = "time" === Wd ? TR(dd, Fd) : "amount" === Wd ? Eh(Fd) : String(Math.round(Fd));
      return dd(Od.key, md)
    }

    function ao(dd, Od) {
      return {
        key: `${No}${dd}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: Od
      }
    }

    function Eo(dd) {
      var Od;
      const md = Ho(dd, HO),
        Wd = "running" === dd.baf2RxState,
        Fd = oh(dd),
        Rd = dd.baf2RxHeat;
      var Xd;
      if (Wd && Rd > LK) return {
        key: null !== (Xd = Fd.fix) && void 0 !== Xd ? Xd : `${No}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const Kd = Wd ? po(dd, dd.baf2RxTarget).coolantSecs : null,
        hd = "cryo" === bo(dd).LN;
      if (null !== Kd && Kd >= 1 && Kd <= 30) return ao(hd ? "rxWarnCryo" : "rxWarnWater", "bad");
      const vd = eK(lK(...dd.baf2RxDims)).waste,
        Qd = Wd ? Th(dd, vd, Yo(dd)).fullInS : null;
      if (null !== Qd && Qd <= 120 && dd.baf2RxWaste >= .5 * vd) return ao("rxWarnWaste", "warn");
      if (null !== Kd && Kd >= 1) return ao(hd ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: Kd
      });
      const td = "noWater" === dd.baf2RxState && Rd > LK;
      if (dd.baf2RxDamage >= 1 && !td) return ao("rxDamagedHeals", "warn", {
        pct: dd.baf2RxDamage
      });
      if (dd.baf2RxCryoCut) return ao("rxFix_cryoCut", "warn");
      const od = bo(dd);
      if ("noWater" === dd.baf2RxState && "cryo" === od.LN) return ao("noWater" === dd.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Nd = Fd.fix === `${No}rxFix_scramCool` || "idle" === dd.baf2RxState && dd.baf2RxTarget <= 0;
      if (Nd && dd.baf2RxFuel <= 0) return ao("rxFix_noFuel", "warn");
      if (Nd && dd.baf2RxWaterIn <= 0 && (null !== (Od = dd.baf2RxCryoIn) && void 0 !== Od ? Od : 0) <= 0) return ao("rxFix_noWater", "warn");
      const qd = Fd.fix === `${No}rxFix_scramCool` ? qh(dd) : null;
      if (null !== qd) return {
        key: qd.key,
        params: {
          amount: qd.amount
        },
        tone: "info"
      };
      if ("running" !== dd.baf2RxState && "idle" !== dd.baf2RxState && null !== Fd.fix) return {
        key: Fd.fix,
        params: {},
        tone: "scram" === dd.baf2RxState ? "info" : td ? "bad" : "warn"
      };
      var Hd;
      if ("idle" === dd.baf2RxState && dd.baf2RxTarget <= 0) return {
        key: null !== (Hd = Fd.fix) && void 0 !== Hd ? Hd : `${No}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const yd = dd.baf2RxCryoStarved;
      if ("cryo" === od.LN && yd && od.needPerS > 0 && od.usePerS < qo * od.needPerS) return ao("noWater" === yd ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const bd = "cryo" === od.LN,
        Td = od.needPerS > 0 && od.usePerS < qo * od.needPerS;
      if (bd ? Td || od.makersShort > 0 && od.pct < 100 : od.pct < 100) {
        const Od = bd && Td ? Math.floor(100 * od.usePerS / od.needPerS) : Math.min(100, od.pct);
        if (od.makersShort > 0) {
          return ao(`${bd?"rxCryoShortLine":"rxWaterShortLine"}${1===od.makersShort?"One":""}${!bd&&dd.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: Od,
            count: od.makersShort
          })
        }
        return ao(bd ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: Od
        })
      }
      const pd = function(dd) {
        const [Od, md, Wd] = dd.baf2RxStats, Fd = bo(dd), Rd = Kh({
          fuelHeat: Od,
          cooling: md,
          size: Wd
        }, "cryo" === Fd.LN ? dO.e : 1, !0);
        return Math.max(0, Rd * yo(Fd.LN) - Fd.inPerS)
      }(dd);
      if (md && pd > 0) return ao("cryo" === od.LN ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(pd)
      });
      if (Rd >= Wh) return ao("rxHotLine", "warn");
      const Yd = po(dd, dd.baf2RxTarget);
      var gd;
      if (null !== Yd.overheatS) return ao("rxWillOverheat", "bad", {
        pct: dd.baf2RxTarget,
        time: Yd.overheatS,
        safe: null !== (gd = Yd.hotAbove) && void 0 !== gd ? gd : 100
      });
      if (Math.abs(Yd.settle - Rd) >= 3) return ao("rxSettling", "info", {
        pct: dd.baf2RxTarget,
        heat: Math.round(Yd.settle),
        time: Yd.settleS
      });
      const wd = qh(dd);
      if (null !== wd) return {
        key: wd.key,
        params: {
          amount: wd.amount
        },
        tone: "info"
      };
      const Ed = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== Od && ("running" !== Od || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === dd.rods ? `${vh}rxLimitNoRods` : `${vh}rxLimit_${mh(dd)}`
      }({
        rods: dd.baf2RxStats[3],
        ...Nh(dd)
      }, dd.baf2RxState, dd.baf2RxOut >= qo * dd.baf2RxMaxNow, !1);
      if (Ed === `${No}rxLimit_size`) {
        const [Od, , md, Wd] = dd.baf2RxStats, Fd = Wd > 0 && Od > 0 ? Math.ceil(md / (Od / Wd) - 1e-9) : Wd, Rd = dd.baf2RxDims.every((dd => dd >= cm("reactor").max));
        if (Fd < Wd) return ao(Rd ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Fd,
          have: Wd
        });
        if (Rd) return ao("rxLimit_sizeMax", "info")
      }
      return null !== Ed ? {
        key: Ed,
        params: {},
        tone: "info"
      } : ao("rxSteady", "ok", {
        pct: dd.baf2RxTarget
      })
    }

    function Jo(dd) {
      var Od;
      if (dd.melted) return ao("rxMeltedBody", "bad");
      if (-1 === dd.bad) return ao("rxFix_noRoom", "warn");
      if (dd.bad > 0) return ao(1 === dd.bad ? "rxBadOne" : "rxBad", "warn", {
        count: dd.bad
      });
      if (dd.left > 0) {
        const Od = 1 === dd.left ? "One" : "";
        return ao(dd.canFill ? `rxPlanLeft${Od}` : `rxPlanLeftNoFill${Od}`, "info", {
          count: dd.left
        })
      }
      if (0 === dd.rods) return ao("rxLimitNoRods", "warn");
      const md = null !== (Od = dd.idle) && void 0 !== Od ? Od : 0;
      return md > 0 ? ao(1 === md ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: md
      }) : ao("rxPlanReady", "ok")
    }

    function Uo(dd) {
      return Math.floor(Math.max(0, dd[1] - 1) / 2)
    }

    function xo(dd) {
      if (dd >= kK && dd < fK) {
        const Od = dd - kK;
        return {
          key: 0 === Od ? `${No}rxWhy_rodAlone` : 1 === Od ? `${No}rxWhy_rodOne` : `${No}rxWhy_rod`,
          params: {
            count: String(Od),
            heat: String(sK * (1 + uK * Od))
          }
        }
      }
      return dd === fK ? {
        key: `${No}rxWhy_channel`,
        params: {
          amount: String(iK)
        }
      } : dd === MK ? {
        key: `${No}rxWhy_deadChannel`,
        params: {}
      } : dd === dh ? {
        key: `${No}rxWhy_graphite`,
        params: {}
      } : {
        key: `${No}rxWhy_core`,
        params: {}
      }
    }
    const Bo = "buildAFactory2Game:";

    function So(dd, Od) {
      return 0 !== (dd.baf2RxFlags & Od)
    }

    function so(dd) {
      let {
        status: Od,
        pending: md,
        store: Wd,
        explain: Fd
      } = dd;
      const {
        t: Rd
      } = (0, xF.G)(), Xd = So(Od, qO), Kd = Od.baf2RxTarget, hd = Od.baf2RxThrottle, vd = function(dd) {
        return {
          press: () => {
            dd.throttlePress()
          },
          drag: Od => {
            dd.throttleDrag(Od)
          },
          release: () => {
            dd.throttleRelease()
          }
        }
      }(Wd), Qd = null === (td = po(Od, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, td - 10),
        red: td
      };
      var td;
      return (0, YR.jsxs)("div", {
        className: aF()("Baf2RxThrottle", {
          Off: Xd
        }),
        onClick: () => {
          Xd && Fd(`${Bo}rxWhy_startFirst`)
        },
        children: [(0, YR.jsx)("span", {
          className: "HideNarrow",
          children: Rd(`${Bo}rxThrottle`)
        }), (0, YR.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, YR.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: Kd,
            disabled: Xd,
            style: Xd ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Rd(`${Bo}rxThrottle`),
            onPointerDown: () => {
              vd.press();
              const dd = () => {
                window.removeEventListener("pointerup", dd), window.removeEventListener("pointercancel", dd), vd.release()
              };
              window.addEventListener("pointerup", dd), window.addEventListener("pointercancel", dd)
            },
            onKeyUp: vd.release,
            onChange: dd => {
              vd.drag(Number(dd.target.value))
            }
          }), (0, YR.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Qd.amber}%, #ffb020 ${Qd.amber}% ${Qd.red}%, #ff3b30 ${Qd.red}%)`
            },
            "aria-hidden": "true"
          }), (0, YR.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${hd}% + ${8*(1-hd/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, YR.jsxs)("b", {
          children: [`${Kd}%`, (0, YR.jsx)("i", {
            className: aF()("Baf2RxPendingDot", {
              On: md
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function uo(dd) {
      let {
        status: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)(), Wd = po(Od, Od.baf2RxTarget), Fd = bo(Od).LN, Rd = md("cryo" === Fd ? `${Bo}rxRateCryo` : `${Bo}rxRateWater`, {
        rate: Qo(Wd.coolPerS)
      }), Xd = md(`${Bo}rxChain`, {
        pct: String(Od.baf2RxTarget),
        out: Eh(Wd.out),
        heat: String(Math.round(Wd.settle)),
        coolant: Rd
      }), Kd = null !== Wd.coolantSecs ? Wd.coolantSecs >= 1 ? md("cryo" === Fd ? `${Bo}rxThrottleCryoOut` : `${Bo}rxThrottleWaterOut`, {
        time: TR(md, Wd.coolantSecs)
      }) : md("cryo" === Fd ? `${Bo}rxThrottleCryoDry` : `${Bo}rxThrottleWaterDry`) : null;
      return (0, YR.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Xd, null !== Kd ? (0, YR.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", Kd]
        }) : (0, YR.jsxs)("span", {
          children: [" \xb7 ", md(`${Bo}rxChainPellets`, {
            amount: Jh(Wd.pelletsPerMin)
          })]
        })]
      })
    }

    function Vo(dd) {
      let {
        view: Od,
        store: md,
        explain: Fd,
        explainOnce: Rd
      } = dd;
      const {
        t: Xd
      } = (0, xF.G)(), {
        status: Kd
      } = Od, [hd, vd] = (0, Wd.useState)(!1), Qd = So(Kd, qO), od = So(Kd, HO), Nd = !So(Kd, TO), qd = Kd.baf2RxHeat > 100;
      return (0, YR.jsxs)(YR.Fragment, {
        children: [(0, YR.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, YR.jsx)(so, {
            status: Kd,
            pending: Od.throttlePending,
            store: md,
            explain: Fd
          }), (0, YR.jsx)(oo, {
            on: od,
            label: od ? Xd(`${Bo}rxOdLeft`, {
              time: TR(Xd, Kd.baf2RxOdLeft)
            }) : Xd(`${Bo}rxOverdrive`),
            locked: Nd,
            pending: 0 !== (Od.pendingFlags & HO),
            toggle: () => {
              Nd ? Fd(`${Bo}rxOverdriveTier`, {
                amount: String(td(13))
              }) : od ? md.setFlag(HO, !1) : Od.odConfirmed ? md.setFlag(HO, !0) : vd(!0)
            }
          }), Qd || Od.startGuard ? (0, YR.jsx)(bX.r, {
            disabled: Od.busy.has("start") || Od.startGuard,
            onClick: () => {
              md.tap("start", (() => {
                md.setFlag(qO, !1)
              }))
            },
            children: Xd(Od.startGuard ? `${Bo}rxStarting` : `${Bo}rxStart`)
          }) : (0, YR.jsx)("span", {
            className: aF()("Baf2RxScram", {
              Pulse: qd
            }),
            children: (0, YR.jsx)(bX.G, {
              onClick: () => {
                md.shutDown()
              },
              children: Xd(`${Bo}rxScram`)
            })
          })]
        }), (0, YR.jsx)(uo, {
          status: Kd
        }), hd && (0, YR.jsx)(Xo, {
          id: "baf2RxOdTitle",
          title: `${Bo}rxOdConfirmTitle`,
          body: `${Bo}rxOdConfirmBody`,
          yes: `${Bo}rxOdConfirm`,
          cancel: () => {
            vd(!1)
          },
          confirm: () => {
            vd(!1), md.tap("odConfirm", (() => {
              md.confirmOverdrive(), md.setFlag(HO, !0)
            })), Rd(`${Bo}rxWhy_overdrive`)
          }
        })]
      })
    }

    function io(dd) {
      let {
        view: Od,
        store: md,
        keepSize: Wd
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)(), {
        status: Rd
      } = Od;
      return (0, YR.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, YR.jsx)(to, {
          kind: "reactor",
          dims: Od.dims,
          cap: Rd.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: dd => {
            md.resize(dd)
          }
        }), Wd ? (0, YR.jsx)(bX.i, {
          onClick: Wd,
          children: Fd(`${Bo}rxKeepSize`)
        }) : (0, YR.jsxs)(YR.Fragment, {
          children: [(0, YR.jsx)(oo, {
            on: Od.guide,
            label: Fd(`${Bo}rxGuide`),
            toggle: () => {
              md.toggleGuide()
            }
          }), So(Rd, YO) && (0, YR.jsx)(oo, {
            on: Od.starter,
            label: Fd(`${Bo}rxStarter`),
            toggle: () => {
              md.toggleStarter()
            }
          }), (0, YR.jsx)(mo, {
            status: Rd,
            store: md,
            busy: Od.busy.has("fill")
          })]
        })]
      })
    }

    function Ao(dd) {
      let {
        need: Od,
        kind: md = "reactor",
        explain: Wd
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)(), Rd = Od.length <= 3, Xd = Od.reduce(((dd, Od) => {
        let [, md] = Od;
        return dd + md
      }), 0);
      return (0, YR.jsxs)("div", {
        className: aF()("Baf2RxParts", {
          Compact: !Rd
        }),
        onClick: () => {
          Wd("battery" === md ? `${Bo}batWhy_store` : `${Bo}rxShellHint`)
        },
        children: [Xd > 0 && (0, YR.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Xd ? Fd(`${Bo}rxBlocksOne`) : Fd(`${Bo}rxBlocks`, {
            blocks: String(Xd)
          })
        }), 0 === Od.length ? (0, YR.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Fd("battery" === md ? `${Bo}batPartsDone` : `${Bo}rxShellDone`)
        }) : yh(Od).map((dd => {
          let [Od, md, Wd] = dd;
          const Xd = function(dd) {
            const Od = gh[dd];
            if (void 0 === Od) return null;
            const [md, Wd, Fd] = ph[Od].colour.map((dd => Math.round(255 * dd)));
            return `rgb(${md}, ${Wd}, ${Fd})`
          }(Od);
          return (0, YR.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, OR.d)(Fd, Od),
            children: [(0, YR.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Xd ? {
                visibility: "hidden"
              } : {
                background: Xd
              },
              title: Fd(`${Bo}rxShopGhost`)
            }), (0, YR.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, YR.jsx)(SF.c, {
                itemName: Od,
                amount: 0
              })
            }), (0, YR.jsx)("span", {
              className: "Baf2RxChipName",
              children: Rd ? `${md} ${Kd=(0,OR.d)(Fd,Od),Kd.replace(/^(Reactor|Battery) (?=\S)/,"")}` : md
            }), Wd >= md ? (0, YR.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, YR.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Rd ? Fd(`${Bo}rxShopShort`, {
                count: String(md - Wd)
              }) : "\u2212" + (md - Wd)
            })]
          }, Od);
          var Kd
        }))]
      })
    }
    const ro = "buildAFactory2Game:";

    function Go(dd) {
      var Od, md, Fd, Rd, Xd, Kd, hd;
      let {
        store: vd,
        close: Qd
      } = dd;
      const {
        t: td
      } = (0, xF.G)(), od = rX(), Nd = Ko(vd), {
        explained: qd,
        explain: Hd
      } = Ct("baf2RxExplained"), yd = (0, Wd.useCallback)(((dd, Od) => {
        Hd(td(dd, Od))
      }), [Hd, td]), bd = null === Nd || void 0 === Nd ? void 0 : Nd.status, Td = !0 === (null === bd || void 0 === bd ? void 0 : bd.baf2BatReadOnly), pd = dd => {
        bd && od.send(NO(bd.baf2BatAt, dd))
      }, [Yd, gd, wd] = null !== (Od = null === Nd || void 0 === Nd ? void 0 : Nd.dims) && void 0 !== Od ? Od : [0, 0, 0], Ed = Eh(null !== (md = null === Nd || void 0 === Nd ? void 0 : Nd.Mt) && void 0 !== md ? md : 0), Jd = !0 === (null === bd || void 0 === bd ? void 0 : bd.baf2BatFormed), Ud = null !== (Fd = null === bd || void 0 === bd ? void 0 : bd.baf2BatStored) && void 0 !== Fd ? Fd : 0, xd = Math.max(1, null !== (Rd = null === bd || void 0 === bd ? void 0 : bd.baf2BatIslandCap) && void 0 !== Rd ? Rd : 1), Bd = Math.min(100, 100 * Ud / xd), Sd = null === bd || void 0 === bd ? void 0 : bd.baf2BatNetPerS, sd = function(dd, Od, md) {
        return md > 0 && Od >= md ? "full" : void 0 !== dd && dd >= .05 ? "charging" : void 0 !== dd && dd <= -.05 && Od > 0 ? "draining" : "steady"
      }(Sd, Ud, null !== (Xd = null === bd || void 0 === bd ? void 0 : bd.baf2BatIslandCap) && void 0 !== Xd ? Xd : 0), ud = null !== (Kd = null === bd || void 0 === bd ? void 0 : bd.baf2BatMadePerS) && void 0 !== Kd ? Kd : 0, Vd = null !== (hd = null === bd || void 0 === bd ? void 0 : bd.baf2BatUsedPerS) && void 0 !== hd ? hd : 0;
      let Ad, rd = {},
        Gd = "info";
      if (bd)
        if (Jd) "charging" === sd ? (Ad = `${ro}batLine_charging`, rd = {
          time: TR(td, (xd - Ud) / Math.max(.05, null !== Sd && void 0 !== Sd ? Sd : 0))
        }, Gd = "ok") : "draining" === sd ? (Ad = `${ro}batLine_draining`, rd = {
          time: TR(td, Ud / Math.max(.05, -(null !== Sd && void 0 !== Sd ? Sd : 0)))
        }, Gd = "warn") : Ad = "full" === sd ? `${ro}batLine_full` : Ud <= 0 && Vd > 0 ? `${ro}batLine_empty` : `${ro}batLine_steady`;
        else {
          var nd;
          const dd = Jo({
            left: bd.baf2BatNeed.reduce(((dd, Od) => {
              let [, md] = Od;
              return dd + md
            }), 0),
            bad: bd.baf2BatBad,
            rods: 1,
            canFill: !0 === bd.baf2BatCanFill,
            melted: !1
          });
          Ad = dd.key, rd = {
            count: String(null !== (nd = dd.params.count) && void 0 !== nd ? nd : 0)
          }, Gd = dd.tone
        }
      else Ad = `${ro}batLine_steady`;
      const Ld = Math.max(ud, Vd, 1);
      return (0, YR.jsx)(yX.c, {
        close: Qd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, YR.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, YR.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, YR.jsx)(SF.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, YR.jsxs)("div", {
                children: [(0, YR.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: td(`${ro}batTitle`)
                }), bd && (0, YR.jsxs)("p", {
                  className: aF()("Baf2RxSubtitle", {
                    good: Jd && "charging" === sd,
                    warn: Jd && "draining" === sd
                  }),
                  children: [Yd, "\xd7", gd, "\xd7", wd, " \xb7 ", td(Jd ? `${ro}batState_${sd}` : `${ro}rxSubPlanShort`)]
                })]
              })]
            }), (0, YR.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [bd && !Td && (0, YR.jsx)(ho, {
                kind: "battery",
                cap: Jd ? Ed : void 0,
                busy: null === Nd || void 0 === Nd ? void 0 : Nd.busy.has("apart"),
                apart: () => {
                  vd.tap("apart", (() => {
                    pd("apart")
                  }))
                }
              }), (0, YR.jsx)(bX.j, {
                onClick: Qd
              })]
            })]
          }), Nd && bd && (0, YR.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, YR.jsxs)("div", {
              className: aF()("Baf2RxFlow Baf2BatFlow", {
                Plan: !Jd
              }),
              children: [(0, YR.jsx)(et, {
                kind: "Power",
                label: td(`${ro}batMade`),
                number: Jd ? `\u26a1 ${Eh(ud)}/s` : "\u2014",
                note: td(`${ro}batMadeNote`),
                share: Jd ? ud / Ld : void 0,
                onExplain: () => {
                  yd(`${ro}batWhy_made`)
                }
              }), (0, YR.jsx)(It, {
                kind: "Power",
                step: Jd ? go(ud, Ld) : 0,
                planned: !Jd
              }), (0, YR.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  yd(`${ro}batWhy_store`)
                },
                children: [(0, YR.jsx)(lt, {
                  max: 100,
                  bands: [{
                    upTo: Jd ? Bd : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, YR.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, YR.jsx)("b", {
                    className: "Baf2BatStored",
                    children: Jd ? td(`${ro}batStoredOf`, {
                      amount: Eh(Ud),
                      cap: Eh(bd.baf2BatIslandCap)
                    }) : td(`${ro}batWillHold`, {
                      cap: Ed
                    })
                  }), (0, YR.jsx)("span", {
                    children: td(`${ro}batAdds`, {
                      cap: Ed
                    })
                  }), Jd && (0, YR.jsx)("small", {
                    children: td(`${ro}batBreakNote`, {
                      cap: Ed
                    })
                  })]
                })]
              }), (0, YR.jsx)(It, {
                kind: "Power",
                step: Jd ? go(Vd, Ld) : 0,
                planned: !Jd
              }), (0, YR.jsx)(et, {
                kind: "Power",
                label: td(`${ro}batUsed`),
                number: Jd ? `\u26a1 ${Eh(Vd)}/s` : "\u2014",
                note: td(`${ro}batUsedNote`),
                share: Jd ? Vd / Ld : void 0,
                onExplain: () => {
                  yd(`${ro}batWhy_used`)
                }
              })]
            }), (0, YR.jsx)(Zt, {
              text: td(Ad, rd),
              tone: Gd,
              explained: qd
            }), Td ? (0, YR.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: td(`${ro}rxNotYours`)
            }) : !Jd && (0, YR.jsxs)(YR.Fragment, {
              children: [(0, YR.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, YR.jsx)(to, {
                  kind: "battery",
                  dims: Nd.dims,
                  cap: bd.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: dd => {
                    vd.resize(dd)
                  }
                }), (0, YR.jsx)(oo, {
                  on: Nd.guide,
                  label: td(`${ro}rxGuide`),
                  toggle: () => {
                    vd.toggleGuide()
                  }
                }), bd.baf2BatCanFill && (0, YR.jsx)(bX.m, {
                  disabled: !bh("battery", bd.baf2BatNeed) || Nd.busy.has("fill"),
                  onClick: () => {
                    vd.tap("fill", (() => {
                      pd("fill")
                    }))
                  },
                  children: td(`${ro}rxFill`)
                })]
              }), (0, YR.jsx)(Ao, {
                need: bd.baf2BatNeed,
                kind: "battery",
                explain: yd
              })]
            })]
          })]
        })
      })
    }
    const no = "buildAFactory2Game:",
      Lo = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Po(dd, Od) {
      return dd === ZK ? null : Od ? "#4a4440" : dd < fK ? Lo[dd - kK] : dd === fK ? "#3fd0f0" : dd === MK ? "#2c3e4c" : "#55585e"
    }

    function zo(dd) {
      let {
        inner: Od,
        looks: md,
        layer: Wd,
        setLayer: Fd,
        glow: Rd,
        melted: Xd,
        explain: Kd
      } = dd;
      const {
        t: hd
      } = (0, xF.G)(), [vd, Qd, td] = Od, od = Math.max(0, Math.min(Qd - 1, Wd)), Nd = [];
      for (let Hd = 0; Hd < td; Hd++)
        for (let dd = 0; dd < vd; dd++) {
          var qd;
          const Od = null !== (qd = md[(od * td + Hd) * vd + dd]) && void 0 !== qd ? qd : ZK,
            Wd = Po(Od, Xd),
            Fd = Od >= kK && Od < fK;
          Nd.push(null === Wd ? (0, YR.jsx)("circle", {
            cx: dd + .5,
            cy: Hd + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${dd},${Hd}`) : (0, YR.jsx)("rect", {
            x: dd + .06,
            y: Hd + .06,
            width: .88,
            height: .88,
            fill: Wd,
            opacity: Fd && !Xd ? .5 + .5 * Rd : 1,
            onClick: dd => {
              dd.stopPropagation();
              const md = xo(Od);
              Kd(md.key, md.params)
            }
          }, `${dd},${Hd}`))
        }
      return (0, YR.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, YR.jsx)("svg", {
          className: aF()("Baf2RxMapGrid", {
            Melted: Xd
          }),
          viewBox: `0 0 ${Math.max(1,vd)} ${Math.max(1,td)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": hd(`${no}rxWhy_core`),
          onClick: () => {
            Kd(`${no}rxWhy_core`, {})
          },
          children: Nd
        }), Qd > 1 && (0, YR.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, YR.jsx)("button", {
            type: "button",
            "aria-label": hd(`${no}rxLayerDown`),
            disabled: od <= 0,
            onClick: () => {
              Fd(od - 1)
            },
            children: "\u25bc"
          }), (0, YR.jsxs)("span", {
            children: [(0, YR.jsx)("span", {
              className: "HideNarrow",
              children: hd(`${no}rxLayer`, {
                n: String(od + 1),
                of: String(Qd)
              })
            }), (0, YR.jsx)("span", {
              className: "ShowNarrow",
              children: hd(`${no}rxLayerShort`, {
                n: String(od + 1),
                of: String(Qd)
              })
            })]
          }), (0, YR.jsx)("button", {
            type: "button",
            "aria-label": hd(`${no}rxLayerUp`),
            disabled: od >= Qd - 1,
            onClick: () => {
              Fd(od + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const co = "buildAFactory2Game:",
      jo = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: PK,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: th,
        kind: "red"
      }],
      Do = [50, PK, 100];

    function eo(dd) {
      let {
        stats: Od,
        t: md,
        explain: Wd
      } = dd;
      const Fd = mh(Od),
        Rd = Math.max(1, Od.fuelHeat, Od.cooling, Od.size),
        Xd = [
          ["fuel", `${co}rxBarRods`, Od.fuelHeat],
          ["cooling", `${co}rxBarCooling`, Od.cooling],
          ["size", `${co}rxBarSize`, Od.size]
        ];
      return (0, YR.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Wd(`${co}rxWhy_bars`)
        },
        children: [(0, YR.jsx)("span", {
          className: "Baf2RxMostLine",
          children: md(`${co}rxMost`, {
            amount: Eh(Math.min(Od.fuelHeat, Od.cooling, Od.size))
          })
        }), (0, YR.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Xd.map((dd => {
            let [Od, Wd, Xd] = dd;
            return (0, YR.jsxs)("span", {
              className: aF()("Baf2RxMostBar", Od, {
                Low: Od === Fd
              }),
              children: [(0, YR.jsx)("small", {
                children: md(Wd)
              }), (0, YR.jsx)("i", {
                children: (0, YR.jsx)("b", {
                  style: {
                    width: 100 * Xd / Rd + "%"
                  }
                })
              })]
            }, Od)
          }))
        })]
      })
    }

    function Io(dd) {
      var Od;
      let {
        view: md,
        heat: Fd,
        settle: Rd,
        settleLine: Xd,
        settleBad: Kd,
        explain: hd
      } = dd;
      const {
        t: vd
      } = (0, xF.G)(), {
        status: Qd
      } = md, td = Qd.baf2RxAt.join(","), [od, Nd] = (0, Wd.useState)((() => Uo(md.inner)));
      (0, Wd.useEffect)((() => {
        Nd(Uo(md.inner))
      }), [td, md.inner[1]]);
      const qd = null !== (Od = md.plan) && void 0 !== Od ? Od : Nh(Qd),
        Hd = md.plan ? md.plan.powerPerUnit : Qd.baf2RxStats[8],
        yd = null === Fd ? null : "alarm" === (bd = Qh(Qd)) ? "red" : "hot" === bd ? "hot" : "warm" === bd ? "warm" : "cold";
      var bd;
      const Td = !Qd.baf2RxFormed && function(dd, Od) {
          return 0 !== (dd.baf2RxFlags & Od)
        }(Qd, yO),
        pd = Qd.baf2RxDamage,
        Yd = Qd.baf2RxDamageTrend;
      return (0, YR.jsxs)("div", {
        className: aF()("Baf2RxCore", null !== yd && void 0 !== yd ? yd : "plan"),
        children: [(0, YR.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, YR.jsx)(zo, {
            inner: md.inner,
            looks: md.looks,
            layer: od,
            setLayer: Nd,
            glow: Qd.baf2RxFormed ? Qd.baf2RxThrottle / 100 : 1,
            melted: Td,
            explain: hd
          }), (0, YR.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              hd(`${co}rxWhy_heat`)
            },
            children: [null !== Fd ? (0, YR.jsxs)(YR.Fragment, {
              children: [(0, YR.jsx)("b", {
                children: vd(`${co}rxHeatPct`, {
                  pct: String(Fd)
                })
              }), (0, YR.jsx)("span", {
                className: aF()("Baf2RxBand", yd),
                children: vd(`${co}rxBand_${yd}`)
              })]
            }) : (0, YR.jsx)("b", {
              children: vd(`${co}rxHeat`)
            }), null !== Xd && (0, YR.jsx)("span", {
              className: aF()("Baf2RxSettle", {
                Bad: Kd
              }),
              children: Xd
            }), pd >= 1 && (0, YR.jsxs)("span", {
              className: aF()("Baf2RxDamage", Yd),
              children: [vd(`${co}rxDamageLine`, {
                pct: String(pd)
              }), " \xb7 ", vd(`${co}rxDamage_${Yd}`), (0, YR.jsx)("i", {
                children: (0, YR.jsx)("b", {
                  style: {
                    width: `${Math.min(100,pd)}%`
                  }
                })
              })]
            })]
          }), (0, YR.jsx)(lt, {
            max: th,
            bands: jo,
            ticks: Do,
            now: Fd,
            settle: Rd,
            settleTone: Kd ? "bad" : null,
            onExplain: () => {
              hd(`${co}rxWhy_heat`)
            }
          })]
        }), (0, YR.jsx)(eo, {
          stats: qd,
          t: vd,
          explain: hd
        }), Hd > 0 && (0, YR.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            hd(`${co}rxWhy_perPellet`)
          },
          children: vd(`${co}rxPerPellet`, {
            amount: Eh(Hd)
          })
        })]
      })
    }

    function Co(dd, Od) {
      var md;
      if (!dd.baf2RxStore) return {
        note: Od(`${co}rxUpTo`, {
          amount: Eh(dd.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Wd, Fd] = dd.baf2RxStore, Rd = Fd > 0 ? Wd / Fd : 0, Xd = String(Math.floor(100 * Rd)), Kd = null !== (md = dd.baf2RxStoreNetPerS) && void 0 !== md ? md : 0, hd = function(dd) {
        var Od, md;
        const [Wd, Fd] = null !== (Od = dd.baf2RxStore) && void 0 !== Od ? Od : [0, 0], Rd = null !== (md = dd.baf2RxStoreNetPerS) && void 0 !== md ? md : 0;
        return Fd > 0 && Wd >= Fd - 1 ? "running" === dd.baf2RxState ? `${No}rxStoreFull` : `${No}rxStoreFullOnly` : Rd > .05 ? `${No}rxStoreLine` : Rd < -.05 ? "running" === dd.baf2RxState ? `${No}rxStoreUsesMore` : `${No}rxStoreDraining` : `${No}rxStorePct`
      }(dd);
      return {
        note: Od(hd, hd === `${co}rxStoreLine` ? {
          pct: Xd,
          time: TR(Od, (Fd - Wd) / Kd)
        } : {
          pct: Xd
        }),
        share: Rd
      }
    }

    function Zo(dd) {
      let {
        view: Od,
        explain: md,
        preview: Wd
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)(), {
        status: Rd
      } = Od, Xd = eK(lK(...Od.dims)), Kd = Yo(Rd), hd = Math.min(Math.round(Rd.baf2RxFuel), Xd.fuel), vd = "running" === Rd.baf2RxState, Qd = vd ? go(Rd.baf2RxOut, Rd.baf2RxMaxNow) : 0, td = function(dd, Od, md) {
        const Wd = bo(dd),
          Fd = "cryo" === Wd.LN,
          Rd = md ? md.coolantSecs : Wd.pct >= 100 && dd.baf2RxOut >= 1 ? po(dd, dd.baf2RxThrottle).coolantSecs : null;
        let Xd, Kd = !1;
        if (Wd.pct < 100) {
          const md = 1 === Wd.makersShort,
            Rd = !Fd && dd.baf2RxCryoOpen ? "OrCryo" : "";
          Xd = Wd.makersShort > 0 ? Od(Fd ? `${co}rxCryoAddMixer${md?"":"s"}` : `${co}rxWaterAddCondenser${md?"":"s"}${Rd}`, {
            count: String(Wd.makersShort)
          }) : Od(`${co}rxWaterNeeds`, {
            rate: Qo(Wd.needPerS)
          })
        } else if (null !== Rd) Xd = Od(`${co}rxWaterRunsOut`, {
          time: TR(Od, Rd)
        });
        else if (Wd.waterBeside > 0) Xd = Od(`${co}rxCryoPlusWater`, {
          rate: Qo(Wd.waterBeside)
        });
        else {
          const dd = function(dd) {
            return dd.inPerS <= 0 ? "rxWaterNoSupply" : dd.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Wd);
          Kd = "rxWaterNoSupply" === dd, Xd = Od(`${co}${dd}`, {
            amount: Eh(Wd.stored)
          })
        }
        return {
          kind: Fd ? "Cryo" : "Water",
          label: Od(Fd ? `${co}rxCryo` : `${co}rxWater`),
          number: `${Qo(Wd.usePerS)}/s`,
          preview: md ? `${Qo(md.coolPerS)}/s` : null,
          note: Xd,
          tone: "noWater" === dd.baf2RxState ? "danger" : Kd ? "warn" : (hd = Wd.pct, vd = Rd, hd < 100 ? "danger" : null === vd ? null : vd < 300 ? "danger" : "warn"),
          share: Wd.pct / 100,
          why: Fd ? `${co}rxWhy_cryo` : `${co}rxWhy_water`,
          short: Wd.pct < 100
        };
        var hd, vd
      }(Rd, Fd, Wd), od = Th(Rd, Xd.waste, Kd), Nd = Co(Rd, Fd), qd = po(Rd, Rd.baf2RxTarget), Hd = vd && Math.abs(qd.settle - Rd.baf2RxHeat) >= 3, yd = Wd ? Wd.pelletsPerMin / 60 : null;
      return (0, YR.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, YR.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, YR.jsx)(et, {
            kind: "Fuel",
            label: Fd(`${co}rxFuel`),
            number: String(hd),
            preview: null !== yd && yd > 0 && Rd.baf2RxFuel > 0 ? TR(Fd, Rd.baf2RxFuel / yd) : null,
            note: Rd.baf2RxFuel <= 0 ? Fd(`${co}rxFuelEmpty`) : Kd > 0 ? Fd(`${co}rxFuelLeft`, {
              time: TR(Fd, Rd.baf2RxFuel / Kd)
            }) : Fd(1 === hd ? `${co}rxFuelPellet` : `${co}rxFuelPellets`),
            tone: "noFuel" === Rd.baf2RxState ? "danger" : Rd.baf2RxFuel < 2 ? "warn" : null,
            share: Rd.baf2RxFuel / Xd.fuel,
            onExplain: () => {
              md(`${co}rxWhy_fuel`)
            }
          }), (0, YR.jsx)(et, {
            kind: td.kind,
            label: td.label,
            number: td.number,
            preview: td.preview,
            note: td.note,
            tone: td.tone,
            share: td.share,
            onExplain: () => {
              md(td.why)
            }
          })]
        }), (0, YR.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, YR.jsx)(It, {
            kind: "Fuel",
            step: Qd,
            short: "noFuel" === Rd.baf2RxState
          }), (0, YR.jsx)(It, {
            kind: td.kind,
            step: Qd,
            short: td.short || "noWater" === Rd.baf2RxState
          })]
        }), (0, YR.jsx)(Io, {
          view: Od,
          heat: Rd.baf2RxHeat,
          settle: Math.min(th, qd.settle),
          settleLine: Hd ? Fd(`${co}rxHeatSettles`, {
            pct: String(Math.round(qd.settle)),
            time: TR(Fd, qd.settleS)
          }) : null,
          settleBad: qd.settle > 100,
          explain: md
        }), (0, YR.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, YR.jsx)(It, {
            kind: "Power",
            step: Qd
          }), (0, YR.jsx)(It, {
            kind: "Waste",
            step: vd && Rd.baf2RxFuel - Rd.baf2RxPu > 0 ? Qd : 0,
            short: od.full
          })]
        }), (0, YR.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, YR.jsx)(et, {
            kind: "Power",
            label: Fd(`${co}rxPowerOut`),
            number: `\u26a1 ${Eh(Rd.baf2RxOut)}/s`,
            preview: Wd ? Eh(Wd.out) : null,
            note: Nd.note,
            share: Nd.share,
            onExplain: () => {
              md(`${co}rxWhy_power`)
            }
          }), (0, YR.jsx)(et, {
            kind: "Waste",
            label: Fd(`${co}rxWaste`),
            number: `${Math.floor(Rd.baf2RxWaste)}/${Xd.waste}`,
            note: od.full ? Fd(`${co}rxWasteFull`) : null !== od.fullInS ? Fd(`${co}rxWasteFullIn`, {
              time: TR(Fd, od.fullInS)
            }) : Fd(`${co}rxWasteSpent`),
            tone: "wasteFull" === Rd.baf2RxState ? "danger" : od.full ? "warn" : null,
            share: Rd.baf2RxWaste / Xd.waste,
            onExplain: () => {
              md(`${co}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function ko(dd) {
      let {
        view: Od,
        explain: md
      } = dd;
      const {
        t: Wd
      } = (0, xF.G)(), Fd = Od.plan;
      if (!Fd) return null;
      const Rd = Fd.fuelHeat <= 0 ? null : Fd.cooling > 0 ? Math.min(th, 100 * Fd.fuelHeat / Fd.cooling) : th,
        Xd = Wd(`${co}rxPlanAtFull`);
      return (0, YR.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, YR.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, YR.jsx)(et, {
            kind: "Fuel",
            label: Wd(`${co}rxFuel`),
            number: Wd(`${co}rxPlanPerMin`, {
              amount: Jh(Fd.pelletsPerMin)
            }),
            note: Wd(`${co}rxPlanPellets`),
            onExplain: () => {
              md(`${co}rxWhy_fuel`)
            }
          }), (0, YR.jsx)(et, {
            kind: "Water",
            label: Wd(`${co}rxWater`),
            number: `${Qo(Fd.waterPerS)}/s`,
            note: Od.status.baf2RxCryoOpen && Fd.waterPerS > 0 ? Wd(`${co}rxPlanOrCryo`, {
              rate: Qo(Kh(Fd, dO.e) * dO.o)
            }) : Xd,
            onExplain: () => {
              md(`${co}rxWhy_water`)
            }
          })]
        }), (0, YR.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, YR.jsx)(It, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, YR.jsx)(It, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, YR.jsx)(Io, {
          view: Od,
          heat: null,
          settle: Rd,
          settleLine: null === Rd ? null : Wd(`${co}rxPlanHeat`, {
            pct: String(Math.round(Rd))
          }),
          settleBad: null !== Rd && Rd > 100,
          explain: md
        }), (0, YR.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, YR.jsx)(It, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, YR.jsx)(It, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, YR.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, YR.jsx)(et, {
            kind: "Power",
            label: Wd(`${co}rxPowerOut`),
            number: `\u26a1 ${Eh(Fd.max)}/s`,
            note: Xd,
            onExplain: () => {
              md(`${co}rxWhy_power`)
            }
          }), (0, YR.jsx)(et, {
            kind: "Waste",
            label: Wd(`${co}rxWaste`),
            number: Wd(`${co}rxPlanPerMin`, {
              amount: Jh(Fd.pelletsPerMin)
            }),
            note: Wd(`${co}rxWasteSpent`),
            onExplain: () => {
              md(`${co}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const fo = "buildAFactory2Game:",
      Mo = {
        key: `${fo}rxWaiting`,
        params: {},
        tone: "info"
      };

    function dN(dd, Od) {
      return 0 !== (dd.baf2RxFlags & Od)
    }

    function ON(dd) {
      var Od, md;
      let {
        store: Fd,
        close: Rd
      } = dd;
      const {
        t: Xd
      } = (0, xF.G)(), Kd = Ko(Fd), {
        explained: hd,
        hinting: vd,
        explain: Qd,
        explainOnce: td
      } = Ct("baf2RxExplained"), od = (0, Wd.useCallback)(((dd, Od) => {
        Qd(Xd(dd, Od))
      }), [Qd, Xd]), Nd = (0, Wd.useCallback)(((dd, Od) => {
        td(dd, Xd(dd, Od))
      }), [td, Xd]), [qd, Hd] = (0, Wd.useState)(!1), [yd, bd] = (0, Wd.useState)(!1), Td = null === Kd || void 0 === Kd ? void 0 : Kd.status, pd = null === Td || void 0 === Td ? void 0 : Td.baf2RxAt.join(","), Yd = !0 === (null === Td || void 0 === Td ? void 0 : Td.baf2RxFormed);
      (0, Wd.useEffect)((() => {
        bd(!1), Hd(!1)
      }), [pd, Yd]), (0, Wd.useEffect)((() => (Fd.opened(), () => {
        Fd.closed()
      })), [Fd]);
      const gd = void 0 !== Td && dN(Td, pO),
        wd = Td ? Yd ? Qh(Td) : null !== Kd && void 0 !== Kd && Kd.plan ? function(dd, Od) {
          if (dd <= 0) return "off";
          if (Od <= 0) return "alarm";
          const md = 100 * dd / Od;
          return md < 50 ? "calm" : md < Wh ? "warm" : md <= 100 ? "hot" : "alarm"
        }(Kd.plan.fuelHeat, Kd.plan.cooling) : "off" : "off",
        Ed = Td ? oh(Td) : null,
        Jd = Kd ? Kd.waiting ? Mo : Yd ? Eo(Kd.status) : function(dd) {
          var Od, md;
          const {
            status: Wd
          } = dd;
          return Jo({
            left: Wd.baf2RxNeed.reduce(((dd, Od) => {
              let [, md] = Od;
              return dd + md
            }), 0),
            bad: Wd.baf2RxBad,
            rods: null !== (Od = null === (md = dd.plan) || void 0 === md ? void 0 : md.rods) && void 0 !== Od ? Od : 0,
            canFill: dN(Wd, bO),
            melted: dN(Wd, yO),
            idle: dd.looks.reduce(((dd, Od) => dd + (Od === MK ? 1 : 0)), 0)
          })
        }(Kd) : null,
        Ud = vd && null !== Jd && ("ok" === Jd.tone || "info" === Jd.tone),
        xd = Td ? function(dd) {
          const Od = 0 !== (dd.baf2RxFlags & qO),
            md = dd.baf2RxHeat < cK;
          return 0 !== (dd.baf2RxFlags & yO) || md && (Od || !dd.baf2RxFormed) ? null : dd.baf2RxFormed && !Od ? {
            key: `${vh}rxApartScram`,
            params: {}
          } : {
            key: `${vh}rxApartCooling`,
            params: {
              pct: String(cK)
            }
          }
        }(Td) : null,
        [Bd, Sd, sd] = null !== (Od = null === Kd || void 0 === Kd ? void 0 : Kd.dims) && void 0 !== Od ? Od : [0, 0, 0],
        ud = `${Bd}\xd7${Sd}\xd7${sd}`;
      return (0, YR.jsx)(yX.c, {
        close: Rd,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, YR.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, YR.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, YR.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, YR.jsx)(vo, {
                mood: wd
              }), (0, YR.jsxs)("div", {
                children: [(0, YR.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Xd(`${fo}rxTitle`)
                }), Kd && (0, YR.jsxs)("p", {
                  className: aF()("Baf2RxSubtitle", Yd && (null === Ed || void 0 === Ed ? void 0 : Ed.tone)),
                  children: [Yd && !gd ? (0, YR.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Xd(`${fo}rxChangeSize`),
                    onClick: () => {
                      if (!Td) return;
                      const dd = dN(Td, qO);
                      var Od;
                      (Od = {
                        scram: dd,
                        heat: Td.baf2RxHeat
                      }).scram && Od.heat < cK ? Hd(!0) : od(dd ? `${fo}rxResizeCooling` : `${fo}rxResizeHot`, {
                        pct: String(cK)
                      })
                    },
                    children: [ud, " \u270e"]
                  }) : ud, " \xb7 ", Xd(Yd ? null !== (md = null === Ed || void 0 === Ed ? void 0 : Ed.label) && void 0 !== md ? md : `${fo}rxState_running` : `${fo}rxSubPlanShort`)]
                })]
              })]
            }), (0, YR.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Kd && !gd && (0, YR.jsx)(ho, {
                kind: "reactor",
                busy: Kd.busy.has("apart"),
                whyNot: xd ? () => {
                  od(xd.key, xd.params)
                } : null,
                apart: () => {
                  Fd.tap("apart", (() => {
                    Fd.send("apart")
                  }))
                }
              }), (0, YR.jsx)(bX.j, {
                onClick: Rd
              })]
            })]
          }), Kd && Jd && (0, YR.jsxs)("div", {
            className: "Baf2RxBody",
            children: [Yd ? (0, YR.jsx)(Zo, {
              view: Kd,
              explain: od,
              preview: To(Kd.status)
            }) : (0, YR.jsx)(ko, {
              view: Kd,
              explain: od
            }), (0, YR.jsx)(Zt, {
              text: Ud ? `${wo(Xd,Jd)} ${Xd(`${fo}rxTapHint`)}` : wo(Xd, Jd),
              tone: Jd.tone,
              explained: hd
            }), gd ? (0, YR.jsxs)(YR.Fragment, {
              children: [(0, YR.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Xd(`${fo}rxNotYours`)
              }), (0, YR.jsx)(Wo, {
                status: Kd.status,
                store: Fd,
                readOnly: !0
              })]
            }) : Yd && !yd ? (0, YR.jsxs)(YR.Fragment, {
              children: [(0, YR.jsx)(Vo, {
                view: Kd,
                store: Fd,
                explain: od,
                explainOnce: Nd
              }), void 0 !== Kd.status.baf2RxLayout && Mt(Kd.status) && (0, YR.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, YR.jsx)(Wo, {
                  status: Kd.status,
                  store: Fd,
                  readOnly: !1,
                  bare: !0
                }), (0, YR.jsx)(mo, {
                  status: Kd.status,
                  store: Fd,
                  busy: Kd.busy.has("fill")
                })]
              })]
            }) : (0, YR.jsxs)(YR.Fragment, {
              children: [(0, YR.jsx)(io, {
                view: Kd,
                store: Fd,
                keepSize: Yd ? () => {
                  bd(!1)
                } : void 0
              }), Hh(Kd.dims, Kd.status.baf2RxDims) && (0, YR.jsx)(Ao, {
                need: Kd.status.baf2RxNeed,
                explain: od
              }), (0, YR.jsx)(Wo, {
                status: Kd.status,
                store: Fd,
                readOnly: !1
              })]
            }), qd && (0, YR.jsx)(Xo, {
              id: "baf2ResizeTitle",
              title: `${fo}rxResizeConfirmTitle`,
              body: `${fo}rxResizeConfirmBody`,
              yes: `${fo}rxChangeSize`,
              cancel: () => {
                Hd(!1)
              },
              confirm: () => {
                Hd(!1), bd(!0)
              }
            })]
          })]
        })
      })
    }
    class mN {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(dd) {
        this.view = dd;
        for (const Od of this.listeners) Od()
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

    function WN(dd) {
      let {
        commands: Od,
        store: md,
        power: Fd,
        water: Rd,
        reactor: Xd,
        battery: Kd,
        collider: hd,
        terminal: vd,
        quests: Qd,
        tutorial: td,
        close: od,
        leave: Nd,
        askIslands: qd,
        showCore: Hd,
        openSocial: yd
      } = dd;
      const {
        userContext: bd
      } = (0, BK.d)(), Td = xK.featureFlags.useSocialFeatures && bd.isLoggedIn(), [pd, Yd] = (0, Wd.useState)((() => md.get()));
      (0, Wd.useEffect)((() => md.subscribe((() => {
        Yd(md.get())
      }))), [md]);
      const gd = "islands" === (null === pd || void 0 === pd ? void 0 : pd.kind) ? pd.backToCore : void 0;
      return (0, YR.jsxs)(AX.Provider, {
        value: Od,
        children: ["core" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(Qt, {
          view: pd.core,
          close: od,
          askIslands: qd
        }), "dropMap" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(qt, {
          message: pd.dropMap,
          quests: Qd,
          close: od,
          leave: Nd
        }), "islands" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(Vt, {
          message: pd.islands,
          arrivedAtMs: pd.arrivedAtMs,
          close: gd ? () => {
            Hd(gd)
          } : od,
          leave: Nd,
          openSocial: Td ? yd : null
        }), "quests" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(BQ, {
          store: Qd,
          tutorial: td,
          close: od
        }), "transfer" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(kv, {
          message: pd.transfer,
          arrivedAtMs: pd.arrivedAtMs,
          close: od,
          leave: Nd
        }), "power" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(JX, {
          store: Fd,
          close: od
        }), "water" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(QK, {
          store: Rd,
          close: od
        }), "reactor" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(ON, {
          store: Xd,
          close: od
        }), "battery" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(Go, {
          store: Kd,
          close: od
        }), "collider" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(tv, {
          store: hd,
          close: od
        }), "terminal" === (null === pd || void 0 === pd ? void 0 : pd.kind) && (0, YR.jsx)(Dt, {
          store: vd,
          close: od,
          send: dd => {
            Od.send(dd)
          }
        })]
      })
    }
    var FN = md(40028);

    function RN(dd, Od) {
      return dd.distSq - Od.distSq
    }
    class XN {
      constructor() {
        this.list = [], this.pool = []
      }
      add(dd, Od, md, Wd) {
        let Fd = this.pool[this.list.length];
        Fd || (Fd = {
          x: 0,
          y: 0,
          distSq: 0,
          element: Od,
          liftRem: md,
          dot: Wd
        }, this.pool.push(Fd)), Fd.x = dd.x, Fd.y = dd.y, Fd.distSq = dd.distSq, Fd.element = Od, Fd.liftRem = md, Fd.dot = Wd, this.list.push(Fd)
      }
    }
    class KN {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = dd, this.sizes = new WeakMap, this.observer = new ResizeObserver((dd => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const Od of dd) {
            const dd = Od.borderBoxSize[0];
            "dot" !== Od.target.dataset.crowded && 0 !== dd.inlineSize && 0 !== dd.blockSize && this.sizes.set(Od.target, {
              width: dd.inlineSize,
              height: dd.blockSize
            })
          }
        })), this.remPx = 16, this.kQ = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.Ip = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.Ip)
      }
      observe(dd) {
        this.observer.observe(dd)
      }
      unobserve(dd) {
        this.observer.unobserve(dd)
      }
      run(dd) {
        const Od = dd.list;
        Od.sort(RN);
        const md = this.pxPerVw,
          Wd = this.pxPerVh;
        this.kQ.length = 0, this.hud && this.kQ.push(...this.hud.boxes(performance.now()));
        for (const Rd of Od) {
          var Fd;
          const dd = this.sizes.get(Rd.element);
          let Od = "no";
          if (dd && dd.width > 0) {
            const Fd = Rd.x * md,
              Xd = Rd.y * Wd - Rd.liftRem * this.remPx;
            this.fit(Fd, Xd, dd.width, dd.height) || (Od = Rd.dot && this.fit(Fd, Xd, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Fd = Rd.element.dataset.crowded) && void 0 !== Fd ? Fd : "no") !== Od && ("no" === Od ? delete Rd.element.dataset.crowded : Rd.element.dataset.crowded = Od), "hidden" !== Od && (0, FN.e)(Rd.element, Rd.x, Rd.y)
        }
        Od.length = 0
      }
      fit(dd, Od, md, Wd) {
        const Fd = dd - md / 2,
          Rd = dd + md / 2,
          Xd = Od - Wd,
          Kd = this.kQ;
        for (let hd = 0; hd < Kd.length; hd += 4)
          if (Fd < Kd[hd + 1] - 2 && Rd > Kd[hd] + 2 && Xd < Kd[hd + 3] - 2 && Od > Kd[hd + 2] + 2) return !1;
        return Kd.push(Fd, Rd, Xd, Od), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.Ip)
      }
    }
    const hN = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class vN {
      constructor() {
        this.cards = hN.map((dd => document.getElementsByClassName(dd))), this.watched = hN.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(dd) {
        dd - this.refreshedAt > 1e3 && (this.refreshedAt = dd, this.stale = !0);
        for (let md = 0; md < this.cards.length; md++) {
          var Od;
          const dd = null !== (Od = this.cards[md][0]) && void 0 !== Od ? Od : null;
          dd !== this.watched[md] && this.watch(md, dd)
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
        for (const Od of this.watched) {
          if (!Od || Od.closest(".NoRoom")) continue;
          const md = Od.getBoundingClientRect();
          let Wd = md.top,
            Fd = md.bottom;
          if (Od === this.watched[0] && this.hud) {
            const dd = this.hud.getBoundingClientRect();
            Wd = Math.max(Wd, dd.top), Fd = Math.min(Fd, dd.bottom)
          }
          md.width > 0 && Fd > Wd && dd.push(md.left, md.right, Wd, Fd)
        }
      }
      watch(dd, Od) {
        const md = this.watched[dd];
        var Wd, Fd;
        (md && this.sizes.unobserve(md), this.watched[dd] = Od, this.stale = !0, Od && this.sizes.observe(Od), 0 === dd) && (null === (Wd = this.hud) || void 0 === Wd || Wd.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Fd = null === Od || void 0 === Od ? void 0 : Od.closest(".Baf2QuestHud")) && void 0 !== Fd ? Fd : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var QN = md(40036);
    class tN {
      constructor(dd) {
        this.onElement = dd, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(dd) {
        const Od = [];
        for (let md = 0; md + 4 < dd.length; md += 5) {
          const Wd = [dd[md], dd[md + 1], dd[md + 2]];
          Od.push({
            key: Wd.join(","),
            pos: Wd,
            status: FF[dd[md + 3]],
            kind: SO[dd[md + 4]]
          })
        }
        this.markers = Od, this.keys = new Set(Od.map((dd => {
          let {
            key: Od
          } = dd;
          return Od
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
        let Od = this.refs.get(dd);
        return Od || (Od = Od => {
          const md = this.elements.get(dd);
          var Wd, Fd;
          md && (null === (Wd = this.onElement) || void 0 === Wd || Wd.call(this, md, !1));
          Od ? (this.elements.set(dd, Od), null === (Fd = this.onElement) || void 0 === Fd || Fd.call(this, Od, !0)) : (this.elements.delete(dd), this.refs.delete(dd))
        }, this.refs.set(dd, Od)), Od
      }
      onAfterRender(dd, Od, md) {
        for (const Wd of this.markers) {
          const Fd = this.elements.get(Wd.key);
          if (!Fd) continue;
          const Rd = (0, QN.c)(Fd, dd, Od, Wd.pos, 1.05, 24);
          Rd && md.add(Rd, Fd, .45, !0)
        }
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
    }
    const oN = {
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
    const NN = (0, Wd.memo)((function(dd) {
        let {
          status: Od,
          kind: md,
          bindRef: Wd
        } = dd;
        const {
          t: Fd
        } = (0, xF.G)(), Rd = function(dd, Od) {
          var md;
          if ("noFuel" === dd) {
            var Wd, Fd;
            const dd = null === (Wd = rO[Od]) || void 0 === Wd || null === (Fd = Wd.fuels) || void 0 === Fd ? void 0 : Fd.find((dd => Rm.includes(dd)));
            return null !== dd && void 0 !== dd ? dd : oN.noFuel
          }
          return void 0 !== (null === (md = rO[Od]) || void 0 === md ? void 0 : md.cryoMade) ? "noOutlet" === dd ? "Fluid Pipe" : "noInput" === dd ? "Biomass" : oN[dd] : oN[dd]
        }(Od, md);
        return (0, YR.jsxs)("div", {
          className: aF()("Baf2StallMarker", Od),
          ref: Wd,
          hidden: !0,
          children: [Rd && (0, YR.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, YR.jsx)(SF.c, {
              itemName: Rd,
              amount: 0
            })
          }), (0, YR.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === Od ? "?" : "!"
          }), (0, YR.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Fd(`buildAFactory2Game:stallTag_${Od}`)
          })]
        })
      })),
      qN = (0, Wd.memo)((function(dd) {
        let {
          controller: Od
        } = dd;
        const [md, Fd] = (0, Wd.useState)((() => Od.get()));
        return (0, Wd.useEffect)((() => (Fd(Od.get()), Od.subscribe((() => {
          Fd(Od.get())
        })))), [Od]), (0, YR.jsx)("div", {
          className: "Baf2StallMarkers",
          children: md.map((dd => (0, YR.jsx)(NN, {
            status: dd.status,
            kind: dd.kind,
            bindRef: Od.bind(dd.key)
          }, dd.key)))
        })
      })),
      HN = Tm.m + 150;
    class yN {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(dd, Od) {
        const md = Od - dd;
        null === this.offset || md < this.offset ? this.offset = md : this.offset = Math.min(md, this.offset + .02 * (Od - this.sampledAt)), this.sampledAt = Od
      }
      toLocal(dd) {
        var Od;
        return dd + (null !== (Od = this.offset) && void 0 !== Od ? Od : 0) + HN
      }
    }
    var bN = md(40044);
    const TN = 15 * Math.PI / 180,
      pN = Math.SQRT2,
      YN = [4, 2];

    function gN(dd, Od) {
      const md = [1 / 0, 1 / 0, 1 / 0],
        Wd = [-1 / 0, -1 / 0, -1 / 0];
      for (const hd of dd)
        for (let dd = 0; dd < 3; dd++) md[dd] = Math.min(md[dd], hd[dd]), Wd[dd] = Math.max(Wd[dd], hd[dd]);
      const Fd = (md[0] + Wd[0]) / 2,
        Rd = (md[1] + Wd[1]) / 2,
        Xd = (md[2] + Wd[2]) / 2;
      let Kd = 0;
      for (const hd of dd) Kd = Math.max(Kd, Math.hypot(hd[0] - Fd, hd[1] - Rd, hd[2] - Xd));
      return {
        x: Fd,
        y: Rd,
        z: Xd,
        r: Kd + Od
      }
    }

    function wN(dd, Od, md) {
      const Wd = Od.x - dd.x,
        Fd = Od.y - dd.y,
        Rd = Od.z - dd.z,
        Xd = Math.sqrt(Wd * Wd + Fd * Fd + Rd * Rd);
      if (Xd <= Od.r + 8) return 1;
      const Kd = Od.r / Xd,
        hd = Math.sqrt(1 - Kd * Kd),
        vd = hd < -dd.cosHalf,
        Qd = (Wd * dd.dx + Fd * dd.dy + Rd * dd.dz) / Xd;
      if (!vd && Qd < dd.cosHalf * hd - dd.sinHalf * Kd) return 0;
      const td = md * pN * dd.frameMs * dd.pxPerBlock / (Xd - Od.r);
      for (let od = 0; od < YN.length; od++)
        if (td * YN[od] <= 1) return YN[od];
      return 1
    }

    function aN(dd, Od) {
      return {
        name: dd,
        at: Od,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const EN = [0, 0, 0];

    function JN(dd, Od, md) {
      let [, Wd, Fd, Rd, Xd, Kd] = Od;
      const hd = Tm.i * (null !== Xd && void 0 !== Xd ? Xd : 1),
        vd = [];
      for (let Nd = 0; Nd < Wd.length; Nd += 3) vd.push([Wd[Nd] + .5, Wd[Nd + 1] + .65, Wd[Nd + 2] + .5]);
      const Qd = [];
      for (let Nd = 0; Nd < vd.length - 1; Nd++) {
        const [dd, Od] = [vd[Nd], vd[Nd + 1]];
        Qd.push([(dd[0] + Od[0]) / 2, (dd[1] + Od[1]) / 2, (dd[2] + Od[2]) / 2])
      }
      const td = vd.slice(1, -1),
        od = new Uint8Array(td.length);
      for (const Nd of null !== Kd && void 0 !== Kd ? Kd : []) od[Nd >> 1] |= 1 & Nd ? 2 : 1;
      return {
        island: dd,
        length: td.length,
        loop: Rd,
        cellsPerMs: hd,
        edges: Qd,
        Ty: td,
        bounds: gN([...Qd, ...td], .3),
        changed: !0,
        culled: !1,
        hide: od,
        items: Fd.map((dd => {
          let [Od, Wd] = dd;
          return aN(Od, (0, Tm.K)(Od, Wd, md, hd).at)
        }))
      }
    }

    function UN(dd, Od) {
      const {
        items: md
      } = dd;
      if (0 === md.length) return;
      const Wd = dd.length / dd.cellsPerMs,
        Fd = Math.floor((Od - md[0].at) / Wd) - 1;
      if (Fd > 0)
        for (const Rd of md) Rd.at += Fd * Wd
    }

    function xN(dd, Od) {
      const md = Math.min(Math.floor(Od), dd.length - 1),
        Wd = dd.hide[md];
      return 0 !== Wd && 0 !== (Wd & (Od - md < .5 ? 1 : 2))
    }

    function BN(dd, Od) {
      const md = Math.min(Math.floor(Od), dd.length - 1),
        Wd = Od - md,
        Fd = Wd < .5,
        Rd = Fd ? dd.edges[md] : dd.Ty[md],
        Xd = Fd ? dd.Ty[md] : dd.edges[md + 1],
        Kd = Fd ? 2 * Wd : 2 * Wd - 1;
      EN[0] = Rd[0] + (Xd[0] - Rd[0]) * Kd, EN[1] = Rd[1] + (Xd[1] - Rd[1]) * Kd, EN[2] = Rd[2] + (Xd[2] - Rd[2]) * Kd
    }
    const SN = Math.PI / 4;
    class sN {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new yN, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.Ip = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(dd) {
        const Od = performance.now();
        this.clock.sample(dd.baf2BeltLinesAt, Od), this.queue(dd.baf2BeltLinesAt, dd, 0, null, null, 0), this.applyDue(Od)
      }
      onMoves(dd) {
        const Od = performance.now(),
          md = dd.baf2BeltMovesAt;
        this.clock.sample(md, Od);
        for (const [Wd, Fd, Rd, Xd] of dd.baf2BeltMoveList) null === Fd ? this.queue(md - Rd, null, Wd, null, null, null !== Xd && void 0 !== Xd ? Xd : 0) : this.queue(md - Rd, null, Wd, Fd, null !== Xd && void 0 !== Xd ? Xd : null, 0);
        this.applyDue(Od)
      }
      start(dd) {
        this.pool = new bN.c(dd, {
          scale: .3,
          yaw: SN
        }, 64), this.Ip(), window.addEventListener("resize", this.Ip)
      }
      onAfterRender(dd) {
        const {
          pool: Od
        } = this;
        if (!Od) return;
        const md = performance.now(),
          Wd = md - this.lastRenderAt;
        this.lastRenderAt = md, Wd < 100 && (this.frameMs += .1 * (Wd - this.frameMs));
        const Fd = md + this.frameMs;
        this.applyDue(Fd);
        const Rd = dd.cameraPosition,
          Xd = Od.follow(Rd);
        this.setView(dd, Rd);
        const Kd = this.frame++;
        for (let hd = 0; hd < this.shown.length; hd++) {
          const dd = this.shown[hd],
            md = wN(this.view, dd.bounds, dd.cellsPerMs),
            Wd = dd.culled && 0 !== md;
          if (dd.culled = 0 === md, !Xd && !dd.changed && !Wd && (0 === md || (Kd + hd) % md !== 0)) continue;
          dd.changed = !1, dd.loop && (UN(dd, Fd), (0, Tm.C)(dd.items, dd.length, Fd, dd.cellsPerMs));
          let Rd = dd.length;
          for (let Kd = 0; Kd < dd.items.length; Kd++) {
            const md = dd.items[Kd],
              Wd = (0, Tm.O)(md.at, Rd, Fd, dd.cellsPerMs);
            if (Rd = Wd - Tm.r, xN(dd, Wd)) {
              null === md.kind || md.hidden || (md.kind.hide(md.slot), md.hidden = !0);
              continue
            }
            let hd = md.kind;
            if (null === hd) {
              if (hd = Od.kindOf(md.name), null === hd) continue;
              md.kind = hd, md.slot = hd.take(), md.hidden = !0, md.drawn = NaN
            } else if (Wd === md.drawn && !md.hidden && !Xd) continue;
            BN(dd, Wd), hd.write(md.slot, EN[0], EN[1], EN[2]), md.hidden = !1, md.drawn = Wd
          }
        }
        Od.commit()
      }
      dispose() {
        var dd;
        window.removeEventListener("resize", this.Ip), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (dd = this.pool) || void 0 === dd || dd.dispose(), this.pool = null
      }
      setView(dd, Od) {
        const {
          cameraDir: md,
          lastDir: Wd
        } = this, Fd = dd.cameraDirection;
        for (let Qd = 0; Qd < 3; Qd++) Wd[Qd] = md[Qd], md[Qd] = Fd[Qd];
        const Rd = md[0] * Wd[0] + md[1] * Wd[1] + md[2] * Wd[2],
          Xd = Number.isNaN(Rd) ? 0 : Math.acos(Math.min(1, Math.max(-1, Rd))),
          {
            width: Kd,
            height: hd
          } = this,
          vd = dd.tanHalfFovX;
        ! function(dd, Od, md, Wd, Fd, Rd, Xd) {
          let Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          dd.x = Od[0], dd.y = Od[1], dd.z = Od[2], dd.dx = md[0], dd.dy = md[1], dd.dz = md[2];
          const hd = Math.min(Math.PI, Math.atan(Math.sqrt(Wd * Wd + Fd * Fd)) + TN + Kd);
          dd.cosHalf = Math.cos(hd), dd.sinHalf = Math.sin(hd), dd.pxPerBlock = Rd / (2 * Fd), dd.frameMs = Xd
        }(this.view, Od, md, vd, vd * hd / Kd, hd * window.devicePixelRatio, this.frameMs, Xd)
      }
      queue(dd, Od, md, Wd, Fd, Rd) {
        const Xd = Math.max(this.clock.toLocal(dd), this.lastPendingAt);
        this.lastPendingAt = Xd, this.pending.push({
          at: Xd,
          lines: Od,
          line: md,
          name: Wd,
          pos: Fd,
          idx: Rd
        })
      }
      applyDue(dd) {
        const {
          pending: Od
        } = this;
        for (; this.pendingHead < Od.length && Od[this.pendingHead].at <= dd;) {
          const dd = Od[this.pendingHead++];
          if (dd.lines) this.applyLines(dd.lines, dd.at), dd.lines = null;
          else {
            const Od = this.lines.get(dd.line);
            Od && this.applyMove(Od, dd, dd.at)
          }
        }
        this.pendingHead === Od.length ? (Od.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > Od.length && (Od.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(dd, Od) {
        this.clearIsland(dd.baf2BeltIsland);
        for (const md of dd.baf2BeltLineList) this.lines.set(md[0], JN(dd.baf2BeltIsland, md, Od));
        this.shown = [...this.lines.values()]
      }
      applyMove(dd, Od, md) {
        let {
          name: Wd,
          pos: Fd,
          idx: Rd
        } = Od;
        dd.changed = !0, dd.loop && (UN(dd, md), (0, Tm.C)(dd.items, dd.length, md, dd.cellsPerMs)), null !== Wd && null !== Fd ? (0, Tm.G)(dd.items, dd.length, aN(Wd, md), Fd, md, dd.cellsPerMs) : null !== Wd ? dd.items.push(aN(Wd, md)) : dd.items.length > Rd && this.release((0, Tm.S)(dd.items, dd.length, md, dd.cellsPerMs, Rd))
      }
      clearIsland(dd) {
        for (const [Od, md] of this.lines)
          if (md.island === dd) {
            for (const dd of md.items) this.release(dd);
            this.lines.delete(Od)
          }
      }
      release(dd) {
        null !== dd.kind && (dd.kind.release(dd.slot), dd.kind = null, dd.slot = -1, dd.hidden = !0, dd.drawn = NaN)
      }
    }
    var uN = md(38243),
      VN = md(40057);

    function iN(dd) {
      let {
        depth: Od,
        store: md,
        t: Fd
      } = dd;
      const Rd = function(dd) {
        const [Od, md] = (0, Wd.useState)(dd.lastPlayerY());
        return (0, fv.f)(GF, md), (0, Wd.useEffect)((() => {
          md(dd.lastPlayerY())
        }), [dd]), Od
      }(md);
      if (null === Rd) return null;
      const [Xd, Kd] = Od, hd = Rd > Xd ? Xd : null !== Kd && Rd < Kd ? Kd : null, vd = {
        y: bR(Rd),
        target: null === hd ? "" : bR(hd)
      };
      return (0, YR.jsx)("span", {
        className: aF()("Baf2QuestDepth", {
          Reached: null === hd
        }),
        children: Fd(`${mQ}${null===hd?"questDepthReached":"questDepth"}`, vd)
      })
    }

    function AN(dd) {
      let {
        also: Od,
        view: md,
        t: Wd
      } = dd;
      return (0, YR.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, YR.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, YR.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, YR.jsx)("strong", {
            children: Wd(`${mQ}questAlsoDownHere`)
          }), (0, YR.jsx)("span", {
            className: "Baf2QuestChips",
            children: Od.map((dd => {
              let [Od, Fd, Rd, Xd] = dd;
              return (0, YR.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Wd(`${mQ}questAlsoItem`, {
                  item: FQ(Wd, md.itemNames[Od], Od),
                  have: String(Fd),
                  need: String(Rd)
                }),
                children: [(0, YR.jsx)(KQ, {
                  item: Od
                }), (0, YR.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Fd}/${Rd}`
                }), null !== Xd && (0, YR.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Wd(`${mQ}questAlsoDepth`, {
                    y: bR(Xd)
                  })
                })]
              }, Od)
            }))
          })]
        })]
      })
    }
    var rN = md(4627);

    function GN(dd) {
      let {
        expanded: Od,
        inventoryOpen: md,
        children: Fd
      } = dd;
      const Rd = (0, Wd.useRef)(null);
      return (0, Wd.useEffect)((() => {
        const dd = Rd.current,
          Od = null === dd || void 0 === dd ? void 0 : dd.closest(".RightElements"),
          Wd = null === dd || void 0 === dd ? void 0 : dd.firstElementChild;
        if (!dd || !Od || !Wd) return;
        return (0, VN.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Od, Wd], (() => {
          const Fd = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Fd.length) return;
          const Rd = Math.max(...Fd.map((dd => dd.getBoundingClientRect().bottom))),
            Xd = Od.getBoundingClientRect(),
            Kd = md ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (Kd) {
            const Od = parseFloat(getComputedStyle(Wd).marginLeft) + parseFloat(getComputedStyle(Wd).marginRight),
              md = Xd.right - Kd.getBoundingClientRect().right - 8 - Od;
            dd.style.setProperty("--baf2-quest-room", `${md}px`), dd.classList.toggle("NoRoom", md < 150)
          } else dd.style.removeProperty("--baf2-quest-room"), dd.classList.remove("NoRoom");
          const hd = Rd - Xd.top + 8,
            vd = function(dd, Od, md) {
              const Wd = Od.getBoundingClientRect(),
                Fd = dd.getBoundingClientRect(),
                Rd = (0, rN.i)(Fd.left, Fd.right, Wd.top + md);
              if (null !== Rd && Rd < Wd.bottom) return Rd - Wd.top;
              return Wd.height - (parseFloat(getComputedStyle(Od).paddingBottom) || 0)
            }(dd, Od, hd) - 8,
            Qd = window.innerHeight / 2 - Xd.top,
            {
              top: td,
              maxHeight: od
            } = function(dd, Od, md, Wd, Fd) {
              const Rd = Math.min(md, Math.max(0, Od - dd)),
                Xd = Fd ? dd : Math.max(dd, Math.min(Wd - Rd / 2, Od - Rd));
              return {
                top: Xd,
                maxHeight: Math.max(0, Od - Xd)
              }
            }(hd, vd, function(dd) {
              const Od = dd.firstElementChild,
                md = Od ? Od.scrollHeight - Od.clientHeight : 0;
              return dd.getBoundingClientRect().height + Math.max(0, md)
            }(Wd), Qd, (0, pR.b)());
          dd.style.top = `${td}px`, dd.style.maxHeight = `${od}px`
        }))
      }), [md]), (0, YR.jsx)("div", {
        ref: Rd,
        className: aF()("Baf2QuestHud", {
          Expanded: Od
        }),
        children: Fd
      })
    }

    function nN(dd) {
      let {
        amount: Od,
        t: md
      } = dd;
      return (0, YR.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, YR.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, YR.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: md(`${mQ}questStepsDone`, {
            amount: String(Od)
          })
        })]
      })
    }

    function LN(dd) {
      let {
        pulse: Od
      } = dd;
      return 0 === Od ? null : (0, YR.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, Od)
    }

    function PN(dd) {
      var Od;
      let {
        store: md
      } = dd;
      const Fd = (0, fv.i)(rF, md.get()),
        [Rd, Xd] = (0, Wd.useState)(!1),
        {
          t: Kd
        } = (0, xF.G)(),
        hd = (0, pR.d)(),
        {
          openInGameMenuName: vd,
          openEverythingMenuName: Qd
        } = (0, YF.p)(["openInGameMenuName", "openEverythingMenuName"]),
        td = "inventory" === vd && null === Qd,
        od = null !== vd && !td || null !== Qd;
      if (! function(dd) {
          return null !== dd.name || null !== dd.side
        }(Fd) || od || "off" === Fd.tutorial) return null;
      const Nd = jF(Fd.rows),
        qd = Nd.filter((dd => dd.done)).length,
        Hd = function(dd, Od) {
          const md = IF(dd);
          let Wd = 0;
          return dd.filter(((dd, Fd) => !!dd.justFinished || !(dd.done || Fd < md || Wd > Od) && (Wd++, !0)))
        }(Fd.rows, hd ? 0 : 2),
        yd = hd ? Hd : function(dd, Od) {
          const md = Od.filter((dd => !dd.justFinished));
          if (md.length < 2) return [...Od];
          const Wd = dd.indexOf(md[0]),
            Fd = dd.indexOf(md[md.length - 1]),
            Rd = new Set(jF(dd));
          return dd.filter(((dd, md) => Od.includes(dd) || dd.done && Rd.has(dd) && md > Wd && md < Fd))
        }(Fd.rows, Hd),
        bd = Rd ? Fd.rows : yd,
        Td = Rd || hd ? [] : function(dd, Od) {
          const md = new Array(Od.length + 1).fill(0),
            Wd = new Set(jF(dd));
          let Fd = 0;
          for (const Rd of dd) Fd < Od.length && Rd === Od[Fd] ? Fd++ : Rd.done && Wd.has(Rd) && md[Fd]++;
          return md
        }(Fd.rows, yd),
        pd = Rd || yd.length < Fd.rows.length || null !== Fd.reward,
        Yd = cF(Fd),
        gd = Yd ? Kd(`${mQ}questLineComplete`) : Fd.tier ? QQ(Kd, Fd.tier) : Kd(`${mQ}currentQuest`),
        wd = function(dd) {
          var Od, md;
          if (cF(dd)) return null;
          const Wd = null === (Od = dd.chapters) || void 0 === Od ? void 0 : Od.find((Od => {
            let [md] = Od;
            return md === dd.tier
          }));
          if (!Wd) return null;
          const Fd = Wd[1].filter((dd => !dd[4]));
          if (0 === Fd.length) return null;
          const Rd = null === (md = dd.name) || void 0 === md ? void 0 : md[0],
            Xd = dd => Fd.findIndex((Od => Od[0] === Rd && (!dd || !Od[3]))),
            Kd = Xd(!0),
            hd = Kd >= 0 ? Kd : Xd(!1);
          if (hd >= 0) return [hd + 1, Fd.length];
          const vd = Fd.filter((dd => dd[3])).length;
          return [Math.min(vd + 1, Fd.length), Fd.length]
        }(Fd);
      return (0, YR.jsx)(uN.h, {
        placement: "topRight",
        children: (0, YR.jsx)(GN, {
          expanded: Rd,
          inventoryOpen: td,
          children: (0, YR.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: WQ,
            children: [null !== Fd.name && (0, YR.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, YR.jsx)(LN, {
                pulse: Fd.pulse
              }), (0, YR.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, YR.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [gd, wd && (0, YR.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": Kd(`${mQ}questPlaceLabel`, {
                      n: String(wd[0]),
                      total: String(wd[1])
                    }),
                    children: Kd(`${mQ}questPlace`, {
                      n: String(wd[0]),
                      total: String(wd[1])
                    })
                  }), Fd.tier && Fd.core && !Yd && (0, YR.jsx)(tQ, {
                    core: Fd.core,
                    t: Kd
                  })]
                })
              }), (0, YR.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Kd(`${mQ}${Fd.name[0]}`, RQ(Fd.name[1]))
              }), (Nd.length > 1 || pd) && (0, YR.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Nd.length > 1 && (0, YR.jsx)(oQ, {
                  rows: Nd,
                  t: Kd
                }), pd && (0, YR.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Rd,
                  onClick: () => {
                    Xd(!Rd)
                  },
                  children: [(0, YR.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: Kd(`${mQ}questStepsToggle`, {
                      done: String(qd),
                      total: String(Nd.length)
                    })
                  }), (0, YR.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Rd ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, YR.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [bd.map(((dd, Od) => {
                  var Rd;
                  const Xd = dd.current && Fd.depth;
                  return (0, YR.jsxs)(Wd.Fragment, {
                    children: [(null !== (Rd = Td[Od]) && void 0 !== Rd ? Rd : 0) > 0 && (0, YR.jsx)(nN, {
                      amount: Td[Od],
                      t: Kd
                    }), (0, YR.jsx)(NQ, {
                      row: dd,
                      view: Fd,
                      t: Kd,
                      extra: Xd && (0, YR.jsx)(iN, {
                        depth: Xd,
                        store: md,
                        t: Kd
                      })
                    })]
                  }, dd.id)
                })), (null !== (Od = Td[bd.length]) && void 0 !== Od ? Od : 0) > 0 && (0, YR.jsx)(nN, {
                  amount: Td[bd.length],
                  t: Kd
                }), Fd.also.length > 0 && (0, YR.jsx)(AN, {
                  also: Fd.also,
                  view: Fd,
                  t: Kd
                })]
              }), Rd && Fd.reward && (0, YR.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [Kd(`${mQ}questReward`), (0, YR.jsx)(KQ, {
                  item: Fd.reward
                }), FQ(Kd, Fd.itemNames[Fd.reward], Fd.reward)]
              })]
            }), Fd.side && (0, YR.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [PF(Fd, Date.now()) && (0, YR.jsx)(LN, {
                pulse: Fd.sideCameUpAt
              }), (0, YR.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: Kd(`${mQ}questSide`)
              }), (0, YR.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Kd(`${mQ}${Fd.side.name[0]}`, RQ(Fd.side.name[1]))
              }), (0, YR.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, YR.jsx)(NQ, {
                  row: Fd.side.row,
                  view: Fd,
                  t: Kd
                })
              })]
            })]
          })
        })
      })
    }
    const zN = "baf2ToastView";
    class cN {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = dd, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: dd,
          holdMs: Od
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const dd = this.dropCovered();
          dd && this.show(dd.message, dd.holdMs)
        }), 250));
        const md = this.dropCovered();
        null !== md && (md.holdMs > 0 || "baf2ToastCelebrate" === md.message.baf2ToastStyle) && "baf2ToastCelebrate" !== dd.baf2ToastStyle && this.show(md.message, md.holdMs);
        const Wd = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== dd.baf2ToastStyle && Wd > 0) return this.pending = {
          message: dd,
          holdMs: Od
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const dd = this.pending;
          this.pending = null, dd && this.present(dd.message, dd.holdMs)
        }), Wd));
        this.present(dd, Od)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(dd, Od) {
        this.clearTimers(), this.pending = null;
        const md = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: dd.baf2ToastText,
          style: dd.baf2ToastStyle,
          swapped: md,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === dd.baf2ToastStyle ? 1500 : Od), this.lQ();
        const Wd = Math.min(8e3, Math.max(1e3, dd.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Wd)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.lQ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.lQ()
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
      lQ() {
        iF.j.lQ(zN, this.view, !0)
      }
    }
    var jN = md(86);
    const DN = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function eN(dd) {
      let {
        store: Od
      } = dd;
      const md = (0, fv.i)(zN, Od.get()),
        {
          openInGameMenuName: Wd,
          openEverythingMenuName: Fd
        } = (0, YF.p)(["openInGameMenuName", "openEverythingMenuName"]),
        Rd = md && (0, YR.jsxs)("div", {
          className: aF()("Baf2Toast", DN[md.style], {
            Swapped: md.swapped,
            Leaving: md.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === md.style && (0, YR.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, YR.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, YR.jsx)(sF.d, {
              text: md.text
            })
          })]
        }, md.id);
      return null !== Wd && null === Fd ? (0, jN.createPortal)((0, YR.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Rd
      }), document.body) : (0, YR.jsx)(uN.h, {
        children: Rd
      })
    }
    const IN = "baf2AreaView";
    class lN {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.jK = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.jK = null
      }
      arrive(dd, Od) {
        Od && function(dd) {
          return "home" === dd.baf2AreaPlace && void 0 !== dd.baf2AreaNameText
        }(dd) ? this.jK = dd : this.show(dd)
      }
      release() {
        const dd = this.jK;
        null !== dd && this.show(dd)
      }
      show(dd) {
        this.clearTimer(), this.jK = null;
        const Od = void 0 === dd.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: dd,
          ms: Od
        }, this.lQ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.lQ()
        }), Od)
      }
      dispose() {
        this.clearTimer(), this.jK = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      lQ() {
        iF.j.lQ(IN, this.view, !0)
      }
    }

    function CN(dd) {
      var Od;
      let {
        store: md
      } = dd;
      const {
        t: Wd
      } = (0, xF.G)(), Fd = (0, fv.i)(IN, md.get());
      if (!Fd) return null;
      const {
        area: Rd
      } = Fd, Xd = Rd.baf2AreaResetMinutes;
      return (0, YR.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Rd.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Fd.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, YR.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Rd.baf2AreaHeading && (0, YR.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Wd(Rd.baf2AreaHeading)
        }), (0, YR.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (Od = Rd.baf2AreaNameText) && void 0 !== Od ? Od : Wd(Rd.baf2AreaName)
        }), Rd.baf2AreaNote && (0, YR.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Wd(Rd.baf2AreaNote)
        }), void 0 !== Xd && (0, YR.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Wd("buildAFactory2Game:areaWildsReset", {
            time: TR(Wd, 60 * Xd)
          })
        })]
      }, Fd.id)
    }
    const ZN = "baf2GearGauge";
    class kN {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      bY(dd) {
        var Od;
        if (this.clearLinger(), null === dd.gearPowerKind) return void this.set(null);
        const md = "jetpack" === dd.gearPowerKind && (Wd = dd.gearChargeState, Fd = dd.gearCharge, "flying" === Wd || "charging" === Wd || "outOfCharge" === Wd || "ceiling" === Wd || "offPlot" === Wd || "noPower" === Wd && Fd <= 0);
        var Wd, Fd;
        const Rd = !0 === (null === (Od = this.view) || void 0 === Od ? void 0 : Od.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Xd = md || "jetpack" === dd.gearPowerKind && Rd;
        this.set({
          gauge: dd,
          jetShown: Xd
        }), Xd && !md && (this.lingerTimer = setTimeout((() => {
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
        this.view = dd, iF.j.lQ(ZN, dd, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const fN = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function MN(dd) {
      let {
        store: Od
      } = dd;
      const md = (0, fv.i)(ZN, Od.get());
      return md ? "jetpack" === md.gauge.gearPowerKind ? (0, YR.jsx)(dq, {
        view: md
      }) : (0, YR.jsx)(Oq, {
        gauge: md.gauge
      }) : null
    }

    function dq(dd) {
      let {
        view: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)(), {
        gauge: Wd
      } = Od, Fd = Wd.gearChargeMax > 0 ? Math.max(0, Math.min(1, Wd.gearCharge / Wd.gearChargeMax)) : 0, Rd = fN[Wd.gearChargeState], Xd = Rd ? md(Rd) : null;
      return (0, YR.jsxs)("div", {
        className: aF()("Baf2JetArc", {
          Shown: Od.jetShown,
          Low: Fd < .2,
          Warm: Fd >= .2 && Fd < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Fd)
        },
        "aria-hidden": !Od.jetShown,
        children: [(0, YR.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, YR.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: mq,
            pathLength: 100
          }), (0, YR.jsx)("path", {
            className: "Baf2JetArcFill",
            d: mq,
            pathLength: 100
          })]
        }), (0, YR.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Fd), "%"]
        }), Xd && (0, YR.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Xd
        })]
      })
    }

    function Oq(dd) {
      let {
        gauge: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)(), Wd = function(dd, Od) {
        switch (Od.gearPowerKind) {
          case "skyPack":
            return dd("buildAFactory2Game:gearSkyPack", {
              charge: Od.gearCharge,
              max: Od.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return dd("buildAFactory2Game:gearIslandDraw", {
              power: Md(Od.gearIslandPower),
              cost: Md(Od.gearCostPerUse)
            });
          case "barrier":
            return dd("buildAFactory2Game:gearBarrier", {
              shield: Math.round(Od.gearCharge),
              max: Od.gearChargeMax,
              power: Md(Od.gearIslandPower)
            });
          default:
            return null
        }
      }(md, Od);
      return null === Wd ? null : (0, YR.jsx)(uN.h, {
        children: (0, YR.jsx)("div", {
          className: aF()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === Od.gearChargeState || "outOfCharge" === Od.gearChargeState
          }),
          role: "status",
          children: Wd
        })
      })
    }
    const mq = (() => {
      const dd = dd => {
        const Od = dd * Math.PI / 180;
        return `${(40*Math.cos(Od)).toFixed(2)} ${(40*Math.sin(Od)).toFixed(2)}`
      };
      return `M ${dd(160)} A 40 40 0 1 1 ${dd(380)}`
    })();
    class Wq {
      constructor(dd) {
        this.onElement = dd, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      bY(dd) {
        let Od = dd.baf2LabelsReset || dd.baf2LabelsIsland !== this.island;
        Od && (this.labels.clear(), this.island = dd.baf2LabelsIsland);
        for (const [md, Wd, Fd, Rd, Xd] of dd.baf2LabelsList) {
          const dd = `${md},${Wd},${Fd}`,
            Kd = this.labels.get(dd);
          null === Rd ? Od = this.labels.delete(dd) || Od : Kd && Kd.item === Rd && (Kd.count === Xd || Kd.count >= 0 && Xd >= 0) ? Kd.count !== Xd && (Kd.count = Xd, this.writeCount(dd, Xd)) : (this.labels.set(dd, {
            key: dd,
            pos: [md, Wd, Fd],
            item: Rd,
            count: Xd
          }), this.writeCount(dd, Xd), Od = !0)
        }
        if (this.changes++, Od) {
          this.snapshot = [...this.labels.values()];
          for (const dd of this.listeners) dd()
        }
      }
      bindCount(dd) {
        const Od = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${dd}`;
        let md = this.countRefs.get(Od);
        return md || (md = md => {
          var Wd, Fd;
          md ? (this.countElements.set(Od, md), this.writeCount(dd, null !== (Wd = null === (Fd = this.labels.get(dd)) || void 0 === Fd ? void 0 : Fd.count) && void 0 !== Wd ? Wd : -1)) : (this.countElements.delete(Od), this.countRefs.delete(Od))
        }, this.countRefs.set(Od, md)), md
      }
      setCountWords(dd) {
        this.countWords = dd;
        for (const [Od, md] of this.labels) this.writePart(`words|${Od}`, dd(md.count), md.count)
      }
      writeCount(dd, Od) {
        this.writePart(`bare|${dd}`, yR(Od), Od), this.countElements.has(`words|${dd}`) && this.writePart(`words|${dd}`, this.countWords(Od), Od)
      }
      writePart(dd, Od, md) {
        const Wd = this.countElements.get(dd);
        if (!Wd || md < 0) return;
        const Fd = Wd.firstChild;
        Fd && 3 === Fd.nodeType && !Fd.nextSibling ? Fd.nodeValue !== Od && (Fd.nodeValue = Od) : Wd.textContent !== Od && (Wd.textContent = Od)
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
        let Od = this.refs.get(dd);
        return Od || (Od = Od => {
          const md = this.elements.get(dd);
          var Wd, Fd;
          md && (null === (Wd = this.onElement) || void 0 === Wd || Wd.call(this, md, !1));
          Od ? (this.elements.set(dd, Od), null === (Fd = this.onElement) || void 0 === Fd || Fd.call(this, Od, !0)) : (this.elements.delete(dd), this.refs.delete(dd))
        }, this.refs.set(dd, Od)), Od
      }
      onAfterRender(dd, Od, md, Wd) {
        for (const Fd of this.snapshot) {
          const Rd = this.elements.get(Fd.key);
          if (!Rd) continue;
          if (Wd(Fd.key)) {
            (0, FN.h)(Rd, !0);
            continue
          }
          const Xd = (0, QN.c)(Rd, dd, Od, Fd.pos, 1.1, 24);
          Xd && md.add(Xd, Rd, 0, !1)
        }
      }
    }
    const Fq = (0, Wd.memo)((function(dd) {
        let {
          item: Od
        } = dd;
        return (0, YR.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, YR.jsx)(SF.c, {
            itemName: Od,
            amount: 0
          })
        })
      })),
      Rq = (0, Wd.memo)((function(dd) {
        let {
          label: Od,
          bindRef: md,
          countRef: Wd,
          wordsRef: Fd
        } = dd;
        return (0, YR.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: md,
          hidden: !0,
          children: [(0, YR.jsx)(Fq, {
            item: Od.item
          }), Od.count >= 0 && (0, YR.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, YR.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Fd
            }), (0, YR.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Wd
            })]
          })]
        })
      })),
      Xq = (0, Wd.memo)((function(dd) {
        let {
          store: Od
        } = dd;
        const {
          t: md
        } = (0, xF.G)(), [Fd, Rd] = (0, Wd.useState)((() => Od.list()));
        return (0, Wd.useEffect)((() => (Rd(Od.list()), Od.subscribe((() => {
          Rd(Od.list())
        })))), [Od]), (0, Wd.useEffect)((() => {
          Od.setCountWords((dd => md("buildAFactory2Game:labelSiloCount", {
            count: yR(dd)
          })))
        }), [Od, md]), (0, YR.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Fd.map((dd => -2 === dd.count ? null : (0, YR.jsx)(Rq, {
            label: dd,
            bindRef: Od.bind(dd.key),
            countRef: Od.bindCount(dd.key),
            wordsRef: Od.bindCount(dd.key, "words")
          }, dd.key)))
        })
      })),
      Kq = {
        read: () => !0,
        write: () => {}
      };

    function hq(dd) {
      return `${dd[0]},${dd[1]},${dd[2]}`
    }

    function vq(dd) {
      let [Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od] = dd;
      const Nd = void 0 === td || void 0 === od ? function(dd) {
        return [Math.floor((dd - 1) / 2), 0]
      }(Rd) : [td, od];
      return {
        kind: 0 === hd ? "reactor" : "battery",
        box: em([Od, md, Wd], Fd, Rd, Xd, Kd, Nd),
        formed: 1 === vd,
        level: Qd
      }
    }
    class Qq {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kq;
        this.guideSetting = dd, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = dd.read()
      }
      bY(dd) {
        var Od;
        const md = new Map;
        for (const Wd of dd.baf2RxPlanList) {
          const dd = vq(Wd);
          md.set(hq(dd.box.ctrl), dd)
        }
        this.plans = md, this.layouts = new Map((null !== (Od = dd.baf2RxLayouts) && void 0 !== Od ? Od : []).map((dd => {
          let [Od, md, Wd, Fd] = dd;
          return [hq([Od, md, Wd]), Fd]
        }))), this.predicted.clear(), dd.baf2RxFormedAt && (this.formed = {
          ctrl: dd.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Wd of [...this.startersOff]) {
          const dd = md.get(Wd);
          dd && !dd.formed || this.startersOff.delete(Wd)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((dd => this.planByKey(dd)))
      }
      planAt(dd) {
        return this.planByKey(hq(dd))
      }
      predictSize(dd, Od) {
        this.predicted.set(hq(dd), Od), this.changed()
      }
      unpredict(dd) {
        this.predicted.delete(hq(dd)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(dd) {
        var Od;
        const md = hq(dd);
        return this.predicted.has(md) ? null : null !== (Od = this.layouts.get(md)) && void 0 !== Od ? Od : null
      }
      showsStarter(dd) {
        return !this.startersOff.has(hq(dd))
      }
      setStarter(dd, Od) {
        const md = hq(dd);
        Od ? this.startersOff.delete(md) : this.startersOff.add(md), this.changed()
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
        const Od = this.plans.get(dd);
        if (!Od) return null;
        const md = this.predicted.get(dd);
        return md ? {
          ...Od,
          box: lm(Od.box, Od.kind, md[0], md[1], md[2])
        } : Od
      }
      changed() {
        this.version++;
        for (const dd of this.listeners) dd()
      }
    }
    var tq = md(218);
    const oq = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Nq(dd, Od, md, Wd) {
      const Fd = dd.length / 3;
      for (let Rd = 0; Rd < oq.length / 3; Rd++) dd.push(oq[3 * Rd] * Wd[0] / 2 + md[0], oq[3 * Rd + 1] * Wd[1] / 2 + md[1], oq[3 * Rd + 2] * Wd[2] / 2 + md[2]);
      for (let Rd = Fd; Rd < Fd + 24; Rd += 4) Od.push(Rd, Rd + 1, Rd + 2, Rd, Rd + 2, Rd + 3)
    }

    function qq(dd, Od, md) {
      const Wd = Od[0][0],
        Fd = [],
        Rd = [];
      for (const [Xd, Kd] of Od) Nq(Fd, Rd, [Xd[0] - Wd[0], Xd[1] - Wd[1], Xd[2] - Wd[2]], Kd);
      return dd.createGameMesh({
        positions: Fd,
        indices: Rd
      }, md, Wd)
    }

    function Hq(dd, Od) {
      const md = dd.w - 2,
        Wd = dd.d - 2;
      return 1 === function(dd, Od, md, Wd) {
        const [Fd, Rd, Xd] = dd;
        if (Number(Fd <= 2) + Number(Rd <= 2) + Number(Xd <= 2) >= 2) return function(dd, Od, md) {
          return (dd + Od + md) % 2 === 0 ? 1 : 3
        }(Od, md, Wd);
        const [Kd, hd] = Fd >= Rd && Fd >= Xd ? [md, Wd] : Rd >= Xd ? [Od, Wd] : [Od, md];
        return Kd % 2 === 0 && hd % 2 === 0 ? 1 : 3
      }([md, dd.h - 2, Wd], Od % md, Math.floor(Od / (md * Wd)), Math.floor(Od / md) % Wd) ? "rod" : "channel"
    }

    function yq(dd, Od, md) {
      if ("reactor" !== dd.kind || dd.formed || !Od) return !1;
      const Wd = km(dd.box);
      for (let Fd = 0; Fd < Wd; Fd++) {
        const dd = md(Fd);
        if (null !== dd && Vm(dd)) return !1
      }
      return !0
    }

    function bq(dd, Od, md, Wd, Fd) {
      var Rd;
      let Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const Kd = WW(dd.box, Od),
        hd = KW(dd.kind, Kd, md);
      if ("wrong" === hd || "blocked" === hd) return "wrong";
      if (!Fd) return null;
      if ("inside" === Kd && "reactor" === dd.kind && "Air" === im(md)) {
        if (null !== Xd) {
          var vd;
          const md = kt[ft(Xd, FW(dd.box, Od))];
          return md && null !== (vd = Yh(md)) && void 0 !== vd ? vd : null
        }
        if (Wd) return Hq(dd.box, FW(dd.box, Od))
      }
      if ("missing" !== hd) return null;
      const Qd = hW(dd.kind, Kd);
      return null === Qd ? null : null !== (Rd = Yh(Qd)) && void 0 !== Rd ? Rd : null
    }
    const Tq = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function pq(dd, Od, md) {
      const Wd = md => {
        const Wd = Od(OW(dd.box, md));
        return null !== Wd && function(dd, Od) {
          return "reactor" !== dd.kind || Od !== Mm(dd.box) && "inside" !== WW(dd.box, Od)
        }(dd, md) && "ok" !== KW(dd.kind, WW(dd.box, md), Wd)
      };
      if (md) {
        const Rd = mW(dd.box, [Math.floor(md[0]), Math.floor(md[1]), Math.floor(md[2])]);
        if (Rd >= 0 && (Wd(Rd) || (Fd = Rd, "reactor" === dd.kind && "inside" === WW(dd.box, Fd) && "Air" === Od(OW(dd.box, Fd))))) return Rd
      }
      var Fd;
      const Rd = km(dd.box);
      for (let Xd = 0; Xd < Rd; Xd++)
        if (Wd(Xd)) return Xd;
      return -1
    }

    function Yq(dd, Od) {
      return Math.floor(Od / (dd.w * dd.d))
    }

    function gq(dd, Od, md) {
      return md >= 0 && Yq(dd, Od) > Yq(dd, md)
    }

    function wq(dd, Od) {
      return Od >= 0 && dd.h >= 3 && Yq(dd, Od) === dd.h - 1
    }

    function aq(dd) {
      const Od = im(dd);
      return Od === gm || "Collider" === Od || "Laser" === Od || Od.startsWith("_Collider ")
    }

    function Eq(dd, Od, md, Wd) {
      if (Wd(dd)) return null;
      if (!Tq.every((Od => {
          let [Wd, Fd, Rd] = Od;
          const Xd = md([dd[0] + Wd, dd[1] + Fd, dd[2] + Rd]);
          return null !== Xd && !zm("reactor", Xd) && "reactor" !== Am(Xd)
        }))) return null;
      const Fd = cm("reactor").min,
        Rd = em([dd[0], dd[1], dd[2]], function(dd, Od) {
          const md = Od[0] - (dd[0] + .5),
            Wd = Od[2] - (dd[2] + .5);
          return Math.abs(md) >= Math.abs(Wd) ? md >= 0 ? 2 : 4 : Wd >= 0 ? 1 : 3
        }(dd, Od), Fd, Fd, Fd, Im("reactor", Fd)),
        Xd = Mm(Rd);
      let Kd = !0;
      for (let hd = 0; hd < km(Rd) && Kd; hd++) {
        if (hd === Xd) continue;
        const dd = OW(Rd, hd),
          Od = md(dd);
        Kd = !Wd(dd) && (null === Od || !aq(Od))
      }
      return {
        box: Rd,
        fits: Kd
      }
    }
    const Jq = ph,
      Uq = "baf2Goal",
      xq = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Bq = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Sq = .4;

    function sq(dd, Od) {
      let [md, Wd, Fd] = dd;
      const Rd = xh([md - .02, Wd - .02, Fd - .02], [md + 1.02, Wd + 1.02, Fd + 1.02], .07);
      return Od && (Rd.push([
        [md + .5, Wd + 1 + .7, Fd + .5],
        [.08, 1.4, .08]
      ]), Rd.push([
        [md + .5, Wd + 1 + 1.4 + .2, Fd + .5],
        [Sq, Sq, Sq]
      ])), Rd
    }

    function uq(dd, Od) {
      let [md, Wd, Fd] = Od;
      return dd.isBlockInLoadedChunk(md, Wd, Fd) ? dd.blockIdToBlockName(dd.getBlockId(md, Wd, Fd)) : null
    }
    let Vq = null;
    const iq = new Set;
    let Aq = null;

    function rq(dd) {
      Vq = dd;
      for (const Od of iq) Od(dd)
    }
    class Gq {
      constructor(dd) {
        var Od;
        this.plans = dd, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (Od = dd => {
          var Od, md;
          this.setGoal(null !== (Od = null === dd || void 0 === dd ? void 0 : dd.goal) && void 0 !== Od ? Od : null, null !== (md = null === dd || void 0 === dd ? void 0 : dd.startsBattery) && void 0 !== md && md)
        }, Aq ??= [iF.j.subscribe("setDirectionArrow", (dd => {
          let {
            id: Od,
            position: md,
            text: Wd
          } = dd;
          Od === Uq && rq({
            goal: [Math.floor(md[0]), Math.floor(md[1]), Math.floor(md[2])],
            startsBattery: JSON.stringify(null !== Wd && void 0 !== Wd ? Wd : null).includes("arrowStartBattery")
          })
        })), iF.j.subscribe("clearDirectionArrow", (dd => {
          let {
            id: Od
          } = dd;
          null !== Od && Od !== Uq || rq(null)
        }))], iq.add(Od), Od(Vq), () => {
          iq.delete(Od)
        })
      }
      onAfterRender(dd, Od) {
        const md = performance.now();
        if (this.cues.length > 0) {
          const Od = .55 + .45 * Math.sin(md / 1100 * Math.PI * 2);
          for (const md of this.cues) dd.setGameMesh(md, {
            visibility: Od
          })
        }
        if (md - this.lastCheckMs < 150) return;
        this.lastCheckMs = md;
        const Wd = this.plans.all().filter((dd => {
            const [md, Wd, Fd] = dd.box.ctrl;
            return (!dd.formed || null !== this.plans.layoutOf(dd.box.ctrl)) && (md - Od[0]) ** 2 + (Wd - Od[1]) ** 2 + (Fd - Od[2]) ** 2 <= 2304
          })),
          Fd = function(dd, Od) {
            const md = tq.i.Qt,
              Wd = new Map;
            for (const Rd of Od) {
              const Od = OW(Rd.box, 0),
                Xd = OW(Rd.box, km(Rd.box) - 1),
                Kd = [Math.min(Od[0], Xd[0]), Math.min(Od[1], Xd[1]), Math.min(Od[2], Xd[2])].map((dd => Math.floor(dd / md))),
                hd = [Math.max(Od[0], Xd[0]), Math.max(Od[1], Xd[1]), Math.max(Od[2], Xd[2])].map((dd => Math.floor(dd / md)));
              for (let md = Kd[0]; md <= hd[0]; md++)
                for (let Od = Kd[1]; Od <= hd[1]; Od++)
                  for (let Rd = Kd[2]; Rd <= hd[2]; Rd++) {
                    var Fd;
                    Wd.set(`${md},${Od},${Rd}`, null !== (Fd = dd.getChunkVersion(md, Od, Rd)) && void 0 !== Fd ? Fd : -1)
                  }
            }
            return Wd
          }(dd, Wd);
        this.plans.getVersion() === this.storeVersion && (function(dd, Od) {
          if (dd.size !== Od.size) return !1;
          for (const [md, Wd] of dd)
            if (Od.get(md) !== Wd) return !1;
          return !0
        }(Fd, this.chunkVersions) || md - this.lastRescanMs < 600) || (this.lastRescanMs = md, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Fd, this.redraw(dd, Wd))
      }
      dispose(dd) {
        this.unwatch(), Vq = null, this.clearMeshes(dd), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(dd, Od) {
        var md;
        (null === dd || void 0 === dd ? void 0 : dd.join()) === (null === (md = this.goal) || void 0 === md ? void 0 : md.join()) && Od === this.startsBattery || (this.goal = dd, this.startsBattery = Od, this.storeVersion = -1)
      }
      redraw(dd, Od) {
        const md = Od => uq(dd, Od),
          Wd = new Map,
          Fd = [],
          Rd = this.plans.guideOn();
        for (const vd of Od) {
          const dd = Rd && yq(vd, this.plans.showsStarter(vd.box.ctrl), (dd => md(OW(vd.box, dd)))),
            Od = "reactor" === vd.kind ? this.plans.layoutOf(vd.box.ctrl) : null,
            Xd = Rd && !vd.formed ? pq(vd, md, this.goal) : -1;
          Xd >= 0 && Fd.push([OW(vd.box, Xd), wq(vd.box, Xd)]);
          const Kd = km(vd.box);
          for (let Fd = 0; Fd < Kd; Fd++) {
            const Kd = OW(vd.box, Fd),
              hd = md(Kd),
              Qd = null === hd ? null : bq(vd, Fd, hd, dd, Rd, Od);
            if (null !== Qd) {
              const dd = "wrong" !== Qd && gq(vd.box, Fd, Xd),
                Od = dd ? `${Qd}Dim` : Qd;
              let md = Wd.get(Od);
              md || (md = {
                draw: {
                  ghost: Qd,
                  dim: dd
                },
                list: []
              }, Wd.set(Od, md)), md.list.push(Kd)
            }
          }
        }
        if (Rd && this.startsBattery && this.goal) {
          const [dd, Od, Fd] = this.goal, Rd = [];
          for (const [Wd, Xd, Kd] of xq) {
            const hd = [dd + Wd, Od + Xd, Fd + Kd];
            "Air" === md(hd) && Rd.push(hd)
          }
          if (Rd.length > 0) {
            var Xd;
            const dd = null !== (Xd = Wd.get("cell")) && void 0 !== Xd ? Xd : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            dd.list.push(...Rd), Wd.set("cell", dd)
          }
        }
        const Kd = [...Wd.keys()].sort(),
          hd = [...Kd.map((dd => `${dd}:${Wd.get(dd).list.join(";")}`)), `cue:${Fd.join(";")}`].join("|");
        if (hd !== this.shownKey) {
          this.shownKey = hd, this.clearMeshes(dd);
          for (const Od of Kd) {
            const {
              draw: md,
              list: Fd
            } = Wd.get(Od);
            this.meshes.push(this.build(dd, md, Fd))
          }
          for (const [Od, md] of Fd) this.cues.push(qq(dd, sq(Od, md), Bq))
        }
      }
      build(dd, Od, md) {
        let {
          ghost: Wd,
          dim: Fd
        } = Od;
        const {
          size: Rd,
          colour: Xd,
          alpha: Kd
        } = Jq[Wd], hd = md[0], vd = [], Qd = [];
        for (const [td, od, Nd] of md) Nq(vd, Qd, [td - hd[0] + .5, od - hd[1] + .5, Nd - hd[2] + .5], [Rd, Rd, Rd]);
        return dd.createGameMesh({
          positions: vd,
          indices: Qd
        }, {
          rgb: Xd,
          alpha: Kd * (Fd ? .3 : 1)
        }, hd)
      }
      clearMeshes(dd) {
        for (const Od of [...this.meshes, ...this.cues]) dd.disposeGameMesh(Od);
        this.meshes = [], this.cues = []
      }
    }
    const nq = [.56, .83, 1],
      Lq = [1, .3, .25];
    class Pq {
      constructor(dd) {
        this.plans = dd, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(dd, Od, md) {
        var Wd;
        const Fd = performance.now();
        if (Fd - this.lastCheckMs < 150) return;
        this.lastCheckMs = Fd;
        const Rd = Od => uq(dd, Od),
          Xd = null === (Wd = dd.NWd(Od)) || void 0 === Wd ? void 0 : Wd.name,
          Kd = Xd && "Reactor Frame" === im(Xd) ? dd.getTargetedBlock() : null,
          hd = Kd ? [Kd.Uy[0], Kd.Uy[1], Kd.Uy[2]] : null,
          vd = null !== hd && "Air" === Rd(hd) && hd.every(((dd, Od) => Math.abs(dd + .5 - md[Od]) <= 8)) ? Eq(hd, md, Rd, (dd => this.inPlan(dd))) : null,
          Qd = vd ? `${vd.box.ctrl.join()}|${vd.box.rot}|${vd.fits}` : "";
        Qd !== this.shownKey && this.show(dd, Qd, vd)
      }
      dispose(dd) {
        this.clear(dd), this.shownKey = ""
      }
      inPlan(dd) {
        return this.plans.all().some((Od => mW(Od.box, dd) >= 0))
      }
      show(dd, Od, md) {
        if (this.clear(dd), this.shownKey = Od, !md) return;
        const {
          box: Wd,
          fits: Fd
        } = md, Rd = Fd ? nq : Lq, {
          lo: Xd,
          hi: Kd
        } = Uh(Wd);
        this.meshes.push(qq(dd, xh(Xd, Kd, .05), {
          rgb: Rd,
          alpha: 1
        }));
        const hd = [],
          vd = OW(Wd, 0)[1];
        for (let Qd = 0; Qd < Wd.w * Wd.d; Qd++) {
          const [dd, , Od] = OW(Wd, Qd);
          hd.push([
            [dd + .5, vd + .02 + .01, Od + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(qq(dd, hd, {
          rgb: Rd,
          alpha: .25
        }))
      }
      clear(dd) {
        for (const Od of this.meshes) dd.disposeGameMesh(Od);
        this.meshes = []
      }
    }
    const zq = "buildAFactory2Game:";

    function cq(dd, Od, md) {
      const Wd = dd => {
          const [md, Wd, Fd] = dd.box.ctrl;
          return md === Od[0] && Wd === Od[1] && Fd === Od[2]
        },
        Fd = dd.find((dd => Wd(dd) || mW(dd.box, Od) >= 0));
      if (!Fd) return null;
      const Rd = function(dd, Od, md) {
        const {
          w: Wd,
          h: Fd,
          d: Rd
        } = dd.box, Xd = "reactor" === dd.kind ? `${zq}rxTitle` : `${zq}batTitle`;
        if (dd.formed) return {
          key: `${zq}lookPlanFormed`,
          kindKey: Xd,
          w: Wd,
          h: Fd,
          d: Rd,
          count: 0
        };
        let Kd = 0,
          hd = 0;
        for (let Qd = 0; Qd < km(dd.box); Qd++) {
          const Od = md(OW(dd.box, Qd)),
            Wd = null === Od ? "ok" : KW(dd.kind, WW(dd.box, Qd), Od);
          Kd += "missing" === Wd ? 1 : 0, hd += "wrong" === Wd || "blocked" === Wd ? 1 : 0
        }
        const vd = function(dd, Od, md) {
          if (Od < 0 || null === md) return;
          const Wd = WW(dd.box, Od),
            Fd = KW(dd.kind, Wd, md);
          return "blocked" === Fd ? `${zq}lookWhy_blocked` : "wrong" === Fd ? "ctrl" === Wd ? `${zq}lookWhy_ctrl` : `${zq}lookWhy_reactor_${Wd}` : void 0
        }(dd, mW(dd.box, Od), md([Od[0], Od[1], Od[2]]));
        if (Kd > 0) return {
          key: `${zq}lookPlanToBuild`,
          kindKey: Xd,
          w: Wd,
          h: Fd,
          d: Rd,
          count: Kd,
          why: vd
        };
        if (hd > 0) return {
          key: `${zq}lookPlanTakeOut`,
          kindKey: Xd,
          w: Wd,
          h: Fd,
          d: Rd,
          count: hd,
          why: vd
        };
        return {
          key: "reactor" === dd.kind ? `${zq}lookPlanNoRods` : `${zq}lookPlanDone`,
          kindKey: Xd,
          w: Wd,
          h: Fd,
          d: Rd,
          count: 0
        }
      }(Fd, Od, md);
      return "reactor" === Fd.kind && Wd(Fd) ? {
        ...Rd,
        ctrl: !0
      } : Rd
    }

    function jq(dd, Od) {
      return dd === Od || null !== dd && null !== Od && dd.key === Od.key && dd.kindKey === Od.kindKey && dd.w === Od.w && dd.h === Od.h && dd.d === Od.d && dd.count === Od.count && dd.why === Od.why && dd.ctrl === Od.ctrl
    }

    function Dq() {
      return performance.now()
    }
    class eq {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Dq;
        this.ticket = dd, this.sent = Od, this.backstopMs = md, this.now = Wd, this.queuedAt = void 0, this.queuedAt = Wd()
      }
      answered() {
        const dd = this.now(),
          Od = this.sent.leftAt(this.ticket);
        return null !== Od && dd - Od > 4e3 || dd - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Iq {
      constructor() {
        this.echoes = []
      }
      add(dd) {
        this.echoes = this.echoes.filter((dd => !dd.answered())), this.echoes.push(dd)
      }
      answered() {
        var dd, Od;
        return null === (dd = null === (Od = this.echoes.at(-1)) || void 0 === Od ? void 0 : Od.answered()) || void 0 === dd || dd
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((dd => dd.answered()))
      }
      age() {
        var dd, Od;
        return null !== (dd = null === (Od = this.echoes.at(-1)) || void 0 === Od ? void 0 : Od.age()) && void 0 !== dd ? dd : null
      }
      clear() {
        this.echoes = []
      }
    }
    class lq {
      constructor(dd) {
        this.send = dd, this.value = null, this.sent = null, this.echoes = new Iq, this.down = !1, this.timer = null
      }
      shown(dd) {
        return null === this.value ? dd : this.down || this.value !== this.sent ? this.value : dd === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), dd) : this.value
      }
      pendingFor(dd) {
        return null !== this.value && this.value === this.sent && dd !== this.value ? this.echoes.age() : null
      }
      assume(dd, Od) {
        this.disarm(), this.down = !1, this.value = dd, this.sent = dd, this.echoes.clear(), this.echoes.add(Od)
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
    class Cq {
      constructor() {
        this.pending = new Map
      }
      set(dd, Od, md) {
        var Wd;
        const Fd = null !== (Wd = this.pending.get(dd)) && void 0 !== Wd ? Wd : {
          on: Od,
          echoes: new Iq
        };
        Fd.on = Od, Fd.echoes.add(md), this.pending.set(dd, Fd)
      }
      shown(dd) {
        let Od = dd;
        for (const [md, {
            on: Wd,
            echoes: Fd
          }] of this.pending) 0 !== (dd & md) === Wd && Fd.agreeCounts() || Fd.answered() ? this.pending.delete(md) : Od = Wd ? Od | md : Od & ~md;
        return Od
      }
      pendingMask() {
        let dd = 0;
        for (const Od of this.pending.keys()) dd |= Od;
        return dd
      }
      pendingFor(dd) {
        let Od = null;
        for (const [Wd, {
            on: Fd,
            echoes: Rd
          }] of this.pending) {
          if (void 0 !== dd && 0 !== (dd & Wd) === Fd) continue;
          const Xd = Rd.age();
          var md;
          if (null !== Xd) Od = Math.max(null !== (md = Od) && void 0 !== md ? md : 0, Xd)
        }
        return Od
      }
      clear() {
        this.pending.clear()
      }
    }
    class Zq {
      constructor() {
        this.dims = null, this.echoes = new Iq, this.unmet = null
      }
      shown(dd) {
        var Od;
        return this.dims && (kq(this.dims, dd) && this.echoes.agreeCounts() || this.echoes.answered()) && (kq(this.dims, dd) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Od = this.dims) && void 0 !== Od ? Od : dd
      }
      takeUnmet() {
        const dd = this.unmet;
        return this.unmet = null, dd
      }
      set(dd, Od) {
        this.dims = dd, this.echoes.add(Od)
      }
      pendingFor(dd) {
        return null === this.dims || dd && kq(this.dims, dd) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function kq(dd, Od) {
      return dd[0] === Od[0] && dd[1] === Od[1] && dd[2] === Od[2]
    }
    class fq {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dq;
        this.now = dd, this.taps = new Map
      }
      tap(dd, Od, md) {
        return !this.busy(dd) && (this.taps.set(dd, {
          at: this.now(),
          done: Od
        }), md(), !0)
      }
      settle(dd) {
        for (const [Od, md] of [...this.taps]) md.done(dd) && this.taps.delete(Od)
      }
      busy(dd) {
        const Od = this.taps.get(dd);
        return !!Od && (!(this.now() - Od.at >= 3e3) || (this.taps.delete(dd), !1))
      }
      busyIds() {
        const dd = new Set;
        for (const Od of [...this.taps.keys()]) this.busy(Od) && dd.add(Od);
        return dd
      }
      clear() {
        this.taps.clear()
      }
    }

    function Mq(dd) {
      return {
        send: Od => dd.track(Od),
        sendUrgent: (Od, md) => dd.track(Od, {
          urgent: !0,
          supersedes: md
        }),
        leftAt: Od => dd.leftAt(Od),
        holdReserve: () => dd.holdUrgentReserve(),
        answerMs: BX
      }
    }

    function dH() {
      return performance.now()
    }

    function OH(dd) {
      const Od = dd.baf2RxNeed.map((dd => {
        let [Od, md] = dd;
        return [Od, md]
      }));
      return JSON.stringify([dd.baf2RxFormed, Od, dd.baf2RxBad, dd.baf2RxCells])
    }

    function mH(dd, Od) {
      const md = 0 !== (Od & qO),
        Wd = 0 !== (dd.baf2RxFlags & qO);
      return !md || Wd || "running" !== dd.baf2RxState && "idle" !== dd.baf2RxState ? !md && Wd && "scram" === dd.baf2RxState && dd.baf2RxFuel > 0 ? "idle" : dd.baf2RxState : "scram"
    }

    function WH(dd) {
      return JSON.stringify([dd.baf2BatFormed, dd.baf2BatNeed, dd.baf2BatBad])
    }

    function FH(dd) {
      return dd.join(",")
    }
    class RH {
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
    class XH {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(dd, Od) {
        this.lastAt = dd, this.lastUntil = dd + Od
      }
      answered(dd) {
        return this.lastAt >= dd || dd < this.lastUntil
      }
    }
    class KH {
      constructor(dd, Od) {
        this.link = dd, this.now = Od, this.hold = new Zq, this.picked = null, this.notTaken = null
      }
      shown(dd) {
        const Od = this.hold.shown(dd);
        if (this.hold.takeUnmet() && this.picked) {
          var md;
          const {
            plans: Od,
            ctrl: Wd,
            at: Fd
          } = this.picked;
          this.picked = null, Od.unpredict(Wd), null === (md = this.notTaken) || void 0 === md || md.call(this, dd, Fd)
        }
        return Od
      }
      pendingFor(dd) {
        return this.hold.pendingFor(dd)
      }
      xN(dd, Od, md) {
        dd.predictSize(Od, md), this.picked = {
          plans: dd,
          ctrl: Od,
          at: this.now()
        };
        const Wd = this.link.send(NO(Od, "plan", ...md));
        this.hold.set(md, new eq(Wd, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class hH {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dH;
        this.plans = dd, this.readInterior = Od, this.link = md, this.now = Wd, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Cq, this.throttle = void 0, this.oneShots = void 0, this.listeners = new RH, this.redraw = null, this.releaseReserve = null, this.size = new KH(md, Wd), this.oneShots = new fq(Wd), this.throttle = new lq((dd => this.echo(this.link.send(this.command("throttle", dd)))))
      }
      set(dd) {
        !dd.baf2RxOpen && this.raw && FH(this.raw.baf2RxAt) === FH(dd.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(dd), this.lQ(dd)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(dd) {
        this.size.notTaken = dd
      }
      resize(dd) {
        this.raw && (this.size.xN(this.plans, this.raw.baf2RxAt, dd), this.lQ(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const dd = this.raw.baf2RxAt;
        this.plans.setStarter(dd, !this.plans.showsStarter(dd)), this.lQ(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.lQ(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.lQ(this.raw)
      }
      send(dd) {
        if (this.raw) {
          for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
          this.link.send(this.command(dd, ...md))
        }
      }
      tap(dd, Od) {
        this.raw && this.oneShots.tap(dd, function(dd, Od) {
          if ("start" === dd) return dd => 0 === (dd.baf2RxFlags & qO);
          if ("odConfirm" === dd) return dd => 0 !== (dd.baf2RxFlags & HO);
          const md = OH(Od);
          return dd => OH(dd) !== md
        }(dd, this.raw), Od) && ("start" === dd && (this.startedAt = this.now()), this.lQ(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(qO, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(dd, Od) {
        if (!this.raw) return;
        const md = dd === qO ? this.command(Od ? "scram" : "start") : this.command("od", Od ? 1 : 0),
          Wd = Od && dd === qO,
          Fd = `${oO} ${this.raw.baf2RxAt.join(" ")} `,
          Rd = this.echo(Wd ? this.link.sendUrgent(md, (dd => {
            const Od = dd.startsWith(Fd) ? dd.slice(Fd.length).split(" ")[0] : null;
            return "throttle" === Od || "start" === Od
          })) : this.link.send(md));
        this.flags.set(dd, Od, Rd), Wd && this.throttle.assume(0, Rd), this.lQ(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(dd) {
        this.throttle.drag(dd), this.raw && this.lQ(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.lQ(this.raw)
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
        for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
        return NO(this.raw.baf2RxAt, dd, ...md)
      }
      echo(dd) {
        return new eq(dd, this.link, this.link.answerMs, this.now)
      }
      lQ(dd) {
        var Od;
        this.raw = dd;
        const md = this.flags.shown(dd.baf2RxFlags),
          Wd = {
            ...dd,
            baf2RxFlags: md,
            baf2RxTarget: this.throttle.shown(dd.baf2RxTarget),
            baf2RxState: mH(dd, md)
          },
          Fd = this.size.shown(Wd.baf2RxDims),
          Rd = this.throttle.pendingFor(),
          Xd = [this.throttle.pendingFor(dd.baf2RxTarget), this.flags.pendingFor(dd.baf2RxFlags), this.size.pendingFor(dd.baf2RxDims)].filter((dd => null !== dd)),
          Kd = Xd.length > 0 ? Math.max(...Xd) : null,
          hd = this.oneShots.busyIds(),
          vd = Wd.baf2RxAt;
        let Qd, td, od = null,
          Nd = [Math.max(0, Fd[0] - 2), Math.max(0, Fd[1] - 2), Math.max(0, Fd[2] - 2)];
        if (Wd.baf2RxFormed) {
          const [dd, Od, md] = Wd.baf2RxDims;
          Nd = [Math.max(0, dd - 2), Math.max(0, Od - 2), Math.max(0, md - 2)], Qd = Array.from(Wd.baf2RxCells, Number), td = `${Nd.join(",")}:${Wd.baf2RxCells}`
        } else {
          var qd;
          const dd = null === (qd = this.plans.planAt(vd)) || void 0 === qd ? void 0 : qd.box,
            Od = dd ? lm(dd, "reactor", ...Fd) : em(vd, 1, ...Fd, Im("reactor", Fd[0])),
            md = this.readInterior(Od);
          od = CK(Nd, md), Qd = md, td = `${Nd.join(",")}:${md.join("")}`
        }(null === (Od = this.looksOf) || void 0 === Od ? void 0 : Od.key) !== td && (this.looksOf = {
          key: td,
          looks: Oh(Nd, Qd)
        }), this.view = {
          status: Wd,
          dims: Fd,
          plan: od,
          inner: Nd,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(vd),
          odConfirmed: this.odConfirmed || 0 !== (Wd.baf2RxFlags & gO),
          guide: this.plans.guideOn(),
          throttlePending: null !== Rd,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== Kd && Kd >= 5e3,
          busy: hd,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== Kd || hd.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.lQ(this.raw)
        }), 250))
      }
    }
    class vH {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dH;
        this.plans = dd, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new RH, this.redraw = null, this.size = new KH(Od, md), this.oneShots = new fq(md)
      }
      set(dd) {
        !dd.baf2BatOpen && this.view && FH(this.view.status.baf2BatAt) === FH(dd.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(dd), this.lQ(dd)
      }
      tap(dd, Od) {
        if (!this.view) return;
        const md = WH(this.view.status);
        this.oneShots.tap(dd, (dd => WH(dd) !== md), Od) && this.lQ(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(dd) {
        this.size.notTaken = dd
      }
      resize(dd) {
        this.view && (this.size.xN(this.plans, this.view.status.baf2BatAt, dd), this.lQ(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.lQ(this.view.status)
      }
      subscribe(dd) {
        return this.listeners.subscribe(dd)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      lQ(dd) {
        const Od = this.size.shown(dd.baf2BatDims),
          md = this.oneShots.busyIds();
        this.view = {
          status: dd,
          dims: Od,
          Mt: Hh(Od, dd.baf2BatDims) ? dd.baf2BatCapacity : Fh(...Od),
          guide: this.plans.guideOn(),
          busy: md
        }, this.listeners.notify(), md.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.lQ(this.view.status)
        }), 250))
      }
    }
    const QH = "buildAFactory2Game:";

    function tH() {
      var dd;
      const Od = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!Od) return null;
      const md = Od.querySelector(".ExitButton");
      return function(dd, Od) {
        const md = Od ? Od.left - 8 : dd.right;
        return {
          left: dd.left,
          top: dd.top,
          width: Math.max(0, md - dd.left),
          height: dd.height
        }
      }(Od.getBoundingClientRect(), null !== (dd = null === md || void 0 === md ? void 0 : md.getBoundingClientRect()) && void 0 !== dd ? dd : null)
    }
    const oH = (0, Wd.memo)((function(dd) {
      let {
        store: Od
      } = dd;
      const {
        t: md
      } = (0, xF.G)(), [Fd, Rd] = (0, Wd.useState)((() => Od.get())), [Xd, Kd] = (0, Wd.useState)((() => performance.now()));
      (0, Wd.useEffect)((() => (Rd(Od.get()), Od.subscribe((() => {
        Rd(Od.get()), Kd(performance.now())
      })))), [Od]);
      const {
        alarm: hd,
        boomAt: vd
      } = Fd, Qd = null !== hd && null !== hd.secs, [td, od] = (0, Wd.useState)(null);
      (0, Wd.useEffect)((() => {
        if (!Qd) return;
        od(tH());
        const dd = setInterval((() => {
          Kd(performance.now()), od(tH())
        }), 250);
        return () => {
          clearInterval(dd)
        }
      }), [Qd]);
      const [Nd, qd] = (0, Wd.useState)(!1);
      return (0, Wd.useEffect)((() => {
        if (vd === -1 / 0) return;
        qd(!0);
        const dd = setTimeout((() => {
          qd(!1)
        }), 1300);
        return () => {
          clearTimeout(dd)
        }
      }), [vd]), (0, YR.jsxs)(YR.Fragment, {
        children: [null !== hd && (0, YR.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: md(hd.hot ? `${QH}rxAlarmSiren` : `${QH}rxAlarmDamaged`, {
            amount: String(hd.damage)
          })
        }), null !== hd && null !== hd.secs && (0, YR.jsx)("div", {
          className: td ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== td && void 0 !== td ? td : void 0,
          "aria-live": "assertive",
          children: md(`${QH}rxAlarmCountdown`, {
            amount: String((Hd = hd.secs, yd = Xd - hd.receivedAt, Math.max(1, Math.ceil(Hd - yd / 1e3))))
          })
        }), Nd && (0, YR.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Hd, yd
    }));
    class NH {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      bY(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const md = dd.baf2RxAlarmAt.join(",");
        let Wd = this.snapshot.boomAt;
        if (dd.baf2RxAlarmBoom) this.byReactor.delete(md), Wd = Od;
        else if (dd.baf2RxAlarmDamage <= 0) this.byReactor.delete(md);
        else {
          var Fd;
          this.byReactor.set(md, {
            damage: dd.baf2RxAlarmDamage,
            secs: null !== (Fd = dd.baf2RxAlarmSecs) && void 0 !== Fd ? Fd : null,
            hot: !0 === dd.baf2RxAlarmHot,
            receivedAt: Od
          })
        }
        this.lQ(Wd)
      }
      retain(dd) {
        let Od = !1;
        for (const md of [...this.byReactor.keys()]) dd.has(md) || (this.byReactor.delete(md), Od = !0);
        Od && this.lQ(this.snapshot.boomAt)
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
      lQ(dd) {
        let Od = null;
        for (const md of this.byReactor.values())(!Od || md.damage > Od.damage) && (Od = md);
        this.snapshot = {
          alarm: Od,
          boomAt: dd
        };
        for (const md of this.listeners) md()
      }
    }
    const qH = {
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

    function HH(dd) {
      return [dd[0], dd[1], dd[2]]
    }

    function yH(dd) {
      return `${dd[0]},${dd[1]},${dd[2]}`
    }
    class bH {
      constructor(dd) {
        if (this.plans = dd, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var dd;
            return {
              active: this.glows.flatMap((dd => {
                let {
                  record: Od
                } = dd;
                return Od ? [Od] : []
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
      check(dd, Od, md) {
        const Wd = new Set(Od.map((dd => yH(dd.box.ctrl))));
        for (const Xd of function(dd, Od) {
            const md = [],
              Wd = new Map(dd);
            dd.clear();
            for (const Fd of Od) {
              const Od = hq(Fd.box.ctrl),
                Rd = Fd.formed ? Fd.level : 0;
              dd.set(Od, Rd), Rd > 0 && 0 === Wd.get(Od) && md.push(Fd)
            }
            return md
          }(this.levels, this.plans.all())) Wd.has(yH(Xd.box.ctrl)) && this.show(dd, Xd, "on", md);
        const Fd = this.plans.lastFormed();
        if (null === Fd || Fd.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Fd.receivedAt;
        const Rd = function(dd, Od) {
          var md;
          const Wd = hq(dd);
          return null !== (md = Od.find((dd => hq(dd.box.ctrl) === Wd))) && void 0 !== md ? md : null
        }(Fd.ctrl, Od);
        return Rd && this.show(dd, Rd, "formed", md), Rd
      }
      fade(dd, Od) {
        0 !== this.glows.length && (this.glows = this.glows.filter((md => {
          let {
            mesh: Wd,
            glow: Fd,
            startMs: Rd,
            record: Xd
          } = md;
          const Kd = (Od - Rd) / qH[Fd].ms;
          return Kd >= 1 ? (dd.disposeGameMesh(Wd), Xd && (Xd.endMs = Od), !1) : (dd.setGameMesh(Wd, {
            visibility: "formed" === Fd ? 1 - Kd : Math.sin(Math.PI * Kd)
          }), !0)
        })))
      }
      dispose(dd) {
        for (const {
            mesh: md
          }
          of this.glows) dd.disposeGameMesh(md);
        this.glows = [], this.levels.clear();
        const Od = "undefined" !== typeof window ? window : null;
        (null === Od || void 0 === Od ? void 0 : Od.baf2Glows) === this.devAccessor && delete Od.baf2Glows
      }
      show(dd, Od, md, Wd) {
        const {
          lo: Fd,
          hi: Rd
        } = Uh(Od.box);
        let Xd = null;
        this.devLog && (Xd = {
          glow: md,
          ctrl: HH(Od.box.ctrl),
          lo: HH(Fd),
          hi: HH(Rd),
          startMs: Wd,
          endMs: null
        }, this.devLog.push(Xd), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(dd, md, xh(Fd, Rd, qH[md].thick)),
          glow: md,
          startMs: Wd,
          record: Xd
        })
      }
      build(dd, Od, md) {
        const Wd = qq(dd, md, {
          rgb: qH[Od].colour,
          alpha: 1
        });
        return dd.setGameMesh(Wd, {
          visibility: 0
        }), Wd
      }
    }
    const TH = 1 / .6,
      pH = {
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
        blendMode: SK.g.Standard,
        soft: !0
      },
      YH = {
        ...pH,
        size: [.25, .4],
        count: 2
      };

    function gH(dd) {
      return {
        colours: [dd, dd],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: SK.g.Add,
        soft: !1
      }
    }
    const wH = gH([150, 225, 255]),
      aH = gH([185, 145, 255]),
      EH = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function JH(dd) {
      const Od = rO[dd];
      return null === Od.fuelSlot || Xm(Od) ? EH.includes(dd) ? aH : wH : pH
    }
    const UH = {
        kind: "smokePuff"
      },
      xH = [.2, .025, .2];

    function BH(dd, Od) {
      const [
        [md, Wd, Fd],
        [Rd, Xd, Kd]
      ] = dd.colours;
      return {
        texture: dd.soft ? UH : "square_particle",
        Mt: Od,
        minLifeTime: dd.life[0] / TH,
        maxLifeTime: dd.life[1] / TH,
        minEmitPower: dd.power[0] * TH,
        maxEmitPower: dd.power[1] * TH,
        minSize: dd.size[0],
        maxSize: dd.size[1],
        emitRate: 0,
        gravity: [0, dd.lift * TH * TH, 0],
        dir1: [-dd.spread, 1, -dd.spread],
        dir2: [dd.spread, 1, dd.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [md, Wd, Fd, dd.alpha],
          maxColor: [Rd, Xd, Kd, dd.alpha]
        }, {
          timeFraction: 1,
          minColor: [md, Wd, Fd, 0],
          maxColor: [Rd, Xd, Kd, 0]
        }],
        blendMode: dd.blendMode
      }
    }
    class SH {
      constructor(dd) {
        this.fixed = dd, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(dd, Od, md) {
        var Wd;
        if (md === this.lastFrame) return !1;
        this.lastFrame = md;
        const Fd = this.at;
        Fd[0] = Od[0] + .5, Fd[1] = Od[1] + 1.025, Fd[2] = Od[2] + .5;
        const Rd = null !== (Wd = this.fixed) && void 0 !== Wd ? Wd : Kd() ? YH : pH;
        let Xd = this.particles.get(Rd);
        return Xd || (Xd = dd.createParticles(function(dd) {
          return BH(dd, Math.ceil(12 * dd.count * dd.life[1]) + dd.count)
        }(Rd), {
          pos: Fd,
          half: xH
        }), this.particles.set(Rd, Xd)), Xd.moveTo(Fd), Xd.emit(Rd.count), !0
      }
      dispose() {
        for (const dd of this.particles.values()) dd.stop();
        this.particles.clear()
      }
    }
    class sH {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(dd) {
        this.indexed = !0;
        for (const Od of SO) {
          const md = JH(Od);
          for (let Wd = 1; Wd <= 4; Wd++) {
            const Fd = dd.blockNameToBlockId(`${Od}|meta|rot${Wd}|Running`, !0);
            if (null === Fd) continue;
            let Rd = this.pufferIndexByStyle.get(md);
            void 0 === Rd && (Rd = this.pufferList.push(new SH(md === pH ? null : md)) - 1, this.pufferIndexByStyle.set(md, Rd)), this.pufferIndexById[Fd] = Rd + 1
          }
        }
      }
      onAfterRender(dd, Od) {
        this.indexed || this.index(dd);
        const md = performance.now(),
          Wd = 0 === this.lastMs ? 0 : Math.min(md - this.lastMs, 250) / 1e3;
        this.lastMs = md, this.frame++, dd.particlesEnabled() ? (this.scan(dd, Od), this.puff(dd, Wd)) : this.sources = []
      }
      dispose() {
        for (const dd of this.pufferList) dd.dispose();
        this.sources = [], this.found = []
      }
      scan(dd, Od) {
        0 === this.scanRow && (this.origin = [Math.floor(Od[0]) - 12, Math.floor(Od[1]) - 6, Math.floor(Od[2]) - 12]);
        const md = Math.min(this.scanRow + 16, 325),
          [Wd, Fd, Rd] = this.origin,
          Xd = this.hits;
        Xd.length = 0;
        for (let Kd = this.scanRow; Kd < md; Kd++) {
          const Od = Wd + Kd % 25,
            md = Fd + Math.floor(Kd / 25);
          dd.scanBlocks(Od, md, Rd, Od + 1, md + 1, Rd + 25, this.pufferIndexById, Xd)
        }
        for (let Kd = 0; Kd < Xd.length; Kd += 4) {
          const dd = Xd[Kd + 3];
          this.found.push({
            pos: [Xd[Kd], Xd[Kd + 1], Xd[Kd + 2]],
            XK: dd,
            puffer: this.pufferList[this.pufferIndexById[dd] - 1]
          })
        }
        this.scanRow = md, 325 === md && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(dd, Od) {
        const md = this.sources.length;
        if (0 !== md) {
          this.budget = Math.min(this.budget + Math.min(md / 1.2, 12) * Od, 2);
          for (let Od = 0; Od < md && this.budget >= 1; Od++) {
            const Od = this.sources[this.cursor % md];
            this.cursor = (this.cursor + 1) % md, dd.getBlockId(Od.pos[0], Od.pos[1], Od.pos[2]) === Od.XK && (Od.puffer.puff(dd, Od.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const uH = {
        ...gH([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      VH = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function iH(dd) {
      return 0 === dd.spots.length ? 0 : Math.min(1 * dd.level, 4)
    }

    function AH(dd) {
      return 0 === dd.glass.length ? 0 : Math.min(.75 * dd.level, 3)
    }

    function rH(dd) {
      return `${dd.ctrl.join(",")}:${dd.rot}:${dd.cu},${dd.cv}:${dd.w},${dd.h},${dd.d}`
    }

    function GH(dd, Od) {
      const md = Od.w - 2,
        Wd = Od.h - 2,
        Fd = Od.d - 2,
        Rd = [];
      for (let Xd = 0; Xd < md * Wd * Fd; Xd++) {
        const Kd = Xd % md,
          hd = Math.floor(Xd / md) % Fd,
          vd = Math.floor(Xd / (md * Fd));
        if (Kd > 0 && Kd < md - 1 && hd > 0 && hd < Fd - 1 && vd > 0 && vd < Wd - 1) continue;
        const Qd = OW(Od, RW(Od, Xd)),
          td = uq(dd, Qd);
        if (null !== td && "Fuel Rod" === im(td))
          for (const Od of VH) {
            const md = [Qd[0] + Od[0], Qd[1] + Od[1], Qd[2] + Od[2]];
            LH(dd, md) && Rd.push(PH(md, Od))
          }
      }
      return Rd
    }

    function nH(dd, Od) {
      const {
        lo: md,
        hi: Wd
      } = Uh(Od), Fd = [];
      for (let Rd = md[0]; Rd < Wd[0]; Rd++)
        for (let Od = md[1]; Od < Wd[1]; Od++) {
          const Xd = Rd === md[0] || Rd === Wd[0] - 1 || Od === md[1] || Od === Wd[1] - 1 ? 1 : Math.max(1, Wd[2] - 1 - md[2]);
          for (let Kd = md[2]; Kd < Wd[2]; Kd += Xd) {
            const Xd = [Rd, Od, Kd];
            if (!LH(dd, Xd)) continue;
            const hd = Rd === md[0] ? VH[1] : Rd === Wd[0] - 1 ? VH[0] : Kd === md[2] ? VH[5] : Kd === Wd[2] - 1 ? VH[4] : Od === md[1] ? VH[3] : VH[2];
            Fd.push(PH(Xd, hd))
          }
        }
      return Fd
    }

    function LH(dd, Od) {
      const md = uq(dd, Od);
      return null !== md && "Reactor Glass" === im(md)
    }

    function PH(dd, Od) {
      return [
        [dd[0] + .5 + .55 * Od[0], dd[1] + .5 + .55 * Od[1], dd[2] + .5 + .55 * Od[2]],
        [0 === Od[0] ? .4 : .02, 0 === Od[1] ? .4 : .02, 0 === Od[2] ? .4 : .02]
      ]
    }
    class zH {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(dd, Od, md, Wd) {
        const Fd = [],
          Rd = new Set;
        for (const vd of Od) {
          var Xd, Kd, hd;
          const {
            box: Od
          } = vd;
          if ("reactor" !== vd.kind || vd.level <= 0 || (Od.ctrl[0] - md[0]) ** 2 + (Od.ctrl[1] - md[1]) ** 2 + (Od.ctrl[2] - md[2]) ** 2 > 576) continue;
          const Qd = rH(Od);
          Rd.add(Qd);
          let td = this.spots.get(Qd);
          if ((!td || Wd - td.at > 3e3) && (td = {
              at: Wd,
              spots: GH(dd, Od),
              glass: nH(dd, Od)
            }, this.spots.set(Qd, td)), 0 === td.spots.length && 0 === td.glass.length) continue;
          const od = this.sparking.find((dd => dd.key === Qd));
          Fd.push({
            key: Qd,
            level: vd.level,
            spots: td.spots,
            glass: td.glass,
            budget: null !== (Xd = null === od || void 0 === od ? void 0 : od.budget) && void 0 !== Xd ? Xd : 0,
            cursor: null !== (Kd = null === od || void 0 === od ? void 0 : od.cursor) && void 0 !== Kd ? Kd : 0,
            glassBudget: null !== (hd = null === od || void 0 === od ? void 0 : od.glassBudget) && void 0 !== hd ? hd : 0
          })
        }
        for (const vd of this.spots.keys()) Rd.has(vd) || this.spots.delete(vd);
        this.sparking = Fd
      }
      emit(dd, Od, md) {
        var Wd;
        if (0 === this.sparking.length || !dd.particlesEnabled() || md === this.lastFrame) return;
        this.lastFrame = md;
        let Fd = 0,
          Rd = 0;
        for (const qd of this.sparking) Fd += iH(qd), Rd += AH(qd);
        const Xd = Fd > 8 ? 8 / Fd : 1,
          Kd = Rd > 6 ? 6 / Rd : 1;
        let hd, vd = null,
          Qd = null;
        for (const qd of this.sparking) qd.budget = Math.min(qd.budget + iH(qd) * Xd * Od, 2), qd.budget >= 1 && (!vd || qd.budget > vd.budget) && (vd = qd), qd.glassBudget = Math.min(qd.glassBudget + AH(qd) * Kd * Od, 2), qd.glassBudget >= 1 && (!Qd || qd.glassBudget > Qd.glassBudget) && (Qd = qd);
        if (vd) vd.budget--, hd = vd.spots[vd.cursor++ % vd.spots.length];
        else {
          if (!Qd) return;
          Qd.glassBudget--, hd = Qd.glass[Math.floor(Math.random() * Qd.glass.length)]
        }
        const [td, od] = hd, Nd = null !== (Wd = this.emitter) && void 0 !== Wd ? Wd : this.create(dd, td, od);
        Nd.moveTo(td, od), Nd.emit(uH.count)
      }
      dispose() {
        var dd;
        null === (dd = this.emitter) || void 0 === dd || dd.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(dd, Od, md) {
        const Wd = Math.ceil(14 * uH.count * uH.life[1]) + uH.count;
        return this.emitter = dd.createParticles(BH(uH, Wd), {
          pos: Od,
          half: md
        }), this.emitter
      }
    }
    const cH = [2, 3.2],
      jH = 1 / 3,
      DH = 1 / .6,
      eH = {
        texture: UH,
        Mt: Math.ceil(18 * cH[1]) + 4,
        minLifeTime: cH[0] / DH,
        maxLifeTime: cH[1] / DH,
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
        blendMode: SK.g.Standard
      };
    class IH {
      constructor(dd) {
        this.plans = dd, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new zH, this.frame = 0, this.outline = new bH(dd)
      }
      onAfterRender(dd, Od, md) {
        const Wd = performance.now(),
          Fd = 0 === this.lastMs ? 0 : Math.min(Wd - this.lastMs, 250) / 1e3;
        if (this.lastMs = Wd, this.outline.fade(dd, Wd), this.puff(dd, Fd, md), this.sparks.emit(dd, Fd, this.frame++), Wd - this.lastCheckMs < 150) return;
        this.lastCheckMs = Wd;
        const Rd = this.plans.all().filter((dd => dd.formed && lH(dd.box.ctrl, md) <= 4096));
        this.plumes = Rd.filter((dd => "reactor" === dd.kind && dd.level > 0)).map((dd => ({
          box: dd.box,
          level: dd.level
        }))), this.updateHums(dd, Od, Rd, md), this.sparks.update(dd, Rd, md, Wd), this.chimeFormed(dd, Od, Rd, Wd)
      }
      dispose(dd) {
        var Od;
        this.outline.dispose(dd), null === (Od = this.steam) || void 0 === Od || Od.dispose(), this.steam = null, this.sparks.dispose();
        for (const md of this.hums.values()) md.stop();
        this.hums.clear()
      }
      chimeFormed(dd, Od, md, Wd) {
        const Fd = this.outline.check(dd, md, Wd);
        Fd && dd.playSound(Od, "exp_levelup", .6, 1, {
          mW: [Fd.box.ctrl[0] + .5, Fd.box.ctrl[1], Fd.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(dd, Od, md) {
        const Wd = this.plumes;
        if (0 === Wd.length || !dd.particlesEnabled()) return void(this.plumeBudget = 0);
        const Fd = Wd.reduce(((dd, Od) => dd + 3 * Od.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Fd * Od, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Rd = this.plumeCursor % (Fd / 3);
        this.plumeCursor++;
        let Xd = Wd[0];
        for (const td of Wd) {
          if (Rd < td.level) {
            Xd = td;
            break
          }
          Rd -= td.level
        }
        const {
          lo: Kd,
          hi: hd
        } = Uh(Xd.box);
        if (function(dd, Od, md) {
            const Wd = Math.max(dd[0] - md[0], 0, md[0] - Od[0]),
              Fd = Math.max(dd[2] - md[2], 0, md[2] - Od[2]);
            return Math.hypot(Wd, md[1] - Od[1], Fd)
          }(Kd, hd, md) < 6 && Math.random() > jH) return;
        const vd = [(Kd[0] + hd[0]) / 2, hd[1] + .05, (Kd[2] + hd[2]) / 2],
          Qd = [(hd[0] - Kd[0]) / 2 - .5, .05, (hd[2] - Kd[2]) / 2 - .5];
        this.steam ??= dd.createParticles(eH, {
          pos: vd,
          half: Qd
        }), this.steam.moveTo(vd, Qd), this.steam.emit(1)
      }
      updateHums(dd, Od, md, Wd) {
        const Fd = new Map;
        for (const Xd of md) "reactor" === Xd.kind && Xd.level > 0 && lH(Xd.box.ctrl, Wd) <= 576 && Fd.set(`${Rd=Xd.box.ctrl,`${Rd[0]},${Rd[1]},${Rd[2]}`}:${Xd.level}`, Xd);
        var Rd;
        for (const [Xd, Kd] of this.hums) Fd.has(Xd) || (Kd.stop(), this.hums.delete(Xd));
        for (const [Xd, Kd] of Fd) {
          if (this.hums.has(Xd)) continue;
          const {
            lo: md,
            hi: Wd
          } = Uh(Kd.box), Fd = [(md[0] + Wd[0]) / 2, md[1], (md[2] + Wd[2]) / 2], Rd = dd.playSound(Od, "rocketEngineLoop", .08 + .06 * Kd.level, .55, {
            mW: Fd,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Rd && this.hums.set(Xd, Rd)
        }
      }
    }

    function lH(dd, Od) {
      return (dd[0] - Od[0]) ** 2 + (dd[1] - Od[1]) ** 2 + (dd[2] - Od[2]) ** 2
    }
    class CH {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      bY(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Wd = [dd.baf2BombAt[0], dd.baf2BombAt[1], dd.baf2BombAt[2]],
          Fd = dd.baf2BombR;
        if (dd.baf2BombBoom) {
          const dd = Math.hypot(Od[0] - Wd[0], Od[1] - Wd[1], Od[2] - Wd[2]);
          this.lQ({
            fuse: null,
            blast: {
              at: Wd,
              r: Fd,
              receivedAt: md,
              distance: dd,
              flash: dd <= 3 * Fd
            }
          })
        } else this.lQ({
          ...this.snapshot,
          fuse: dd.baf2BombMs > 0 ? {
            at: Wd,
            r: Fd,
            endsAt: md + dd.baf2BombMs
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
      lQ(dd) {
        this.snapshot = dd;
        for (const Od of this.listeners) Od()
      }
    }
    const ZH = (0, Wd.memo)((function(dd) {
      var Od;
      let {
        store: md
      } = dd;
      const {
        t: Fd
      } = (0, xF.G)(), [Rd, Xd] = (0, Wd.useState)((() => md.get())), [Kd, hd] = (0, Wd.useState)((() => performance.now()));
      (0, Wd.useEffect)((() => (Xd(md.get()), md.subscribe((() => {
        Xd(md.get()), hd(performance.now())
      })))), [md]);
      const {
        fuse: vd,
        blast: Qd
      } = Rd;
      (0, Wd.useEffect)((() => {
        if (!vd) return;
        const dd = setInterval((() => {
          hd(performance.now())
        }), 250);
        return () => {
          clearInterval(dd)
        }
      }), [vd]);
      const [td, od] = (0, Wd.useState)(!1);
      (0, Wd.useEffect)((() => {
        if (null === Qd || void 0 === Qd || !Qd.flash) return;
        od(!0);
        const dd = setTimeout((() => {
          od(!1)
        }), 2500);
        return () => {
          clearTimeout(dd)
        }
      }), [Qd]);
      const Nd = vd ? function(dd, Od) {
        return dd.endsAt <= Od ? 0 : Math.ceil((dd.endsAt - Od) / 1e3)
      }(vd, Kd) : 0;
      return (0, YR.jsxs)(YR.Fragment, {
        children: [Nd > 0 && (0, YR.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Fd("buildAFactory2Game:bombCountdown", {
            amount: String(Nd),
            radius: String(null !== (Od = null === vd || void 0 === vd ? void 0 : vd.r) && void 0 !== Od ? Od : 0)
          })
        }), td && (0, YR.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function kH(dd) {
      const Od = Math.min(4, Math.max(1, dd / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * dd / 4)),
        capSpread: Math.min(5 * dd / 8, 24 * Od),
        capThick: 6 * Od,
        stemHalfWidth: 3 * Od,
        puffScale: Od
      }
    }
    class fH {
      constructor() {
        this.jK = !1
      }
      hold(dd) {
        dd.getCameraFar() < 1e3 && (dd.setCameraFar(1e3), this.jK = !0)
      }
      release(dd) {
        this.jK && (this.jK = !1, dd.setCameraFar(null))
      }
    }
    const MH = 1 / .6,
      dy = [.2, .1, .2],
      Oy = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      my = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: SK.g.Standard,
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
      Wy = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: SK.g.Standard,
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
      Fy = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: SK.g.Standard,
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
      Ry = {
        texture: UH,
        Mt: Math.ceil(120) + 4,
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
        blendMode: SK.g.Add
      };
    class Xy {
      constructor(dd) {
        this.store = dd, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new fH, this.timers = []
      }
      onAfterRender(dd, Od) {
        const md = performance.now(),
          Wd = 0 === this.lastMs ? 0 : Math.min(md - this.lastMs, 250) / 1e3;
        this.lastMs = md;
        const {
          fuse: Fd,
          blast: Rd
        } = this.store.get();
        null !== Rd && Rd !== this.shownBlast && (this.shownBlast = Rd, this.startBlast(dd, Od, Rd, md));
        const Xd = dd.particlesEnabled();
        null !== Fd && Fd.endsAt > md && Xd ? this.emitBeacon(dd, Fd, Wd, md) : this.beaconBudget = 0, null !== this.cloud && (md - this.cloud.startMs > 33e3 ? this.disposeCloud(dd) : (this.far.hold(dd), Xd && this.emitCloud(dd, Wd, md)))
      }
      dispose(dd) {
        var Od;
        null === (Od = this.beacon) || void 0 === Od || Od.dispose(), this.beacon = null, this.disposeCloud(dd);
        for (const md of this.timers) clearTimeout(md);
        this.timers.length = 0
      }
      emitBeacon(dd, Od, md, Wd) {
        const Fd = Od.endsAt - Wd < 5e3 ? 350 : 1e3,
          Rd = .5 + .5 * Math.sin(2 * Math.PI * Wd / Fd);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Rd * md, 4), this.beaconBudget < 1) return;
        const Xd = Math.floor(this.beaconBudget);
        this.beaconBudget -= Xd;
        const [Kd, hd, vd] = Od.at, Qd = [Kd + .5, hd + 1.1, vd + .5];
        this.beacon ??= dd.createParticles(Ry, {
          pos: Qd,
          half: dy
        }), this.beacon.moveTo(Qd), this.beacon.emit(Xd)
      }
      startBlast(dd, Od, md, Wd) {
        var Fd;
        null === (Fd = this.beacon) || void 0 === Fd || Fd.dispose(), this.beacon = null, this.disposeCloud(dd);
        const Rd = (0, xK.isMobile)() ? .5 : 1;
        this.streams = [my, Wy, Fy].map((dd => {
          const Od = Math.round(dd.count * Rd);
          return {
            spec: dd,
            particles: null,
            rate: Od / ((dd.toMs - dd.fromMs) / 1e3),
            budget: 0,
            left: Od
          }
        })), this.cloud = {
          blast: md,
          startMs: Wd
        };
        const Xd = Math.max(.25, 1 - md.distance / (6 * md.r)),
          Kd = md.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [md, Wd, Fd] of Oy) hy(dd, Od, md, Xd * Wd, Fd)
        }), Kd))
      }
      emitCloud(dd, Od, md) {
        const {
          blast: Wd,
          startMs: Fd
        } = this.cloud, Rd = md - Fd, [Xd, Kd, hd] = Wd.at, vd = kH(Wd.r);
        for (const Qd of this.streams) {
          const {
            spec: md
          } = Qd;
          if (Qd.left <= 0 || Rd < md.fromMs) continue;
          Qd.budget += Qd.rate * Od;
          const Fd = Math.min(Math.floor(Qd.budget), Qd.left);
          if (Fd < 1) continue;
          Qd.budget -= Fd, Qd.left -= Fd;
          const td = Qd.particles ??= this.createStream(dd, md, Wd);
          if (md === my) {
            const dd = vd.stemHalfWidth;
            td.moveTo([Xd, Kd + 1, hd], [dd, 1, dd])
          } else if (md === Wy) {
            const dd = vd.capSpread * Math.min(1, (Rd - md.fromMs) / 3e3),
              Od = Math.sqrt(Math.random()),
              Wd = 2 * Math.random() * Math.PI,
              Fd = Math.cos(Wd) * Od,
              Qd = Math.sin(Wd) * Od,
              od = Xd + Fd * dd,
              Nd = hd + Qd * dd,
              qd = vd.capThick,
              Hd = Kd + vd.capHeight + qd * (1 - Od * Od) * 2;
            td.setDirections([.7 * Fd, .05, .7 * Qd], [Fd, .2, Qd]), td.moveTo([od, Hd, Nd], [qd, qd, qd])
          } else {
            this.ringAngle += 2.39996;
            const dd = Math.cos(this.ringAngle),
              Od = Math.sin(this.ringAngle);
            td.setDirections([dd, .05, Od], [dd, .1, Od]), td.moveTo([Xd + 2 * dd, Kd + .5, hd + 2 * Od], [0, .5, 0])
          }
          td.emit(Fd)
        }
      }
      createStream(dd, Od, md) {
        const {
          r: Wd
        } = md, Fd = Math.max(Od.life[0], Wd / 25), Rd = Od === Fy ? [.9 * Fd, Fd] : Od.life, Xd = kH(Wd), Kd = Od === Fy ? 1 : Xd.puffScale, hd = {
          texture: UH,
          Mt: Od.count + 4,
          minLifeTime: Rd[0] / MH,
          maxLifeTime: Rd[1] / MH,
          minSize: Od.size[0] * Kd,
          maxSize: Od.size[1] * Kd,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, Od.gravity * MH * MH, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: Od.from[0],
            maxColor: Od.from[1]
          }, {
            timeFraction: .6,
            minColor: Ky(Od.from[0], Od.to[0]),
            maxColor: Ky(Od.from[1], Od.to[1])
          }, {
            timeFraction: 1,
            minColor: Od.to[0],
            maxColor: Od.to[1]
          }],
          blendMode: Od.blend
        };
        if (Od === my) {
          const dd = Xd.capHeight / ((Rd[0] + Rd[1]) / 2);
          hd.minEmitPower = .9 * dd * MH, hd.maxEmitPower = 1.05 * dd * MH, hd.dir1 = [-.1, 1, -.1], hd.dir2 = [.1, 1, .1]
        } else Od === Wy ? (hd.minEmitPower = 1.2, hd.maxEmitPower = 2, hd.dir1 = [-1, .05, -1], hd.dir2 = [1, .2, 1]) : (hd.minEmitPower = 39.583333333333336, hd.maxEmitPower = 41.66666666666667, hd.dir1 = [1, 0, 0], hd.dir2 = [1, 0, 0]);
        return dd.createParticles(hd, {
          pos: md.at
        })
      }
      disposeCloud(dd) {
        for (const md of this.streams) {
          var Od;
          null === (Od = md.particles) || void 0 === Od || Od.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(dd)
      }
    }

    function Ky(dd, Od) {
      return [(dd[0] + Od[0]) / 2, (dd[1] + Od[1]) / 2, (dd[2] + Od[2]) / 2, .75 * dd[3]]
    }

    function hy(dd, Od, md, Wd, Fd) {
      try {
        dd.playSound(Od, md, Wd, Fd)
      } catch (Rd) {
        console.error(Rd)
      }
    }
    const vy = {
        Mt: 720,
        perS: 100
      },
      Qy = {
        Mt: 320,
        perS: 44
      };
    class ty {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(dd, Od) {
        this.zone = {
          centre: [...dd.centre],
          r: dd.r,
          band: dd.band ? [dd.band[0], dd.band[1]] : void 0
        }, this.endsAt = Od
      }
      stop() {
        this.zone = null
      }
      bY(dd, Od) {
        const {
          baf2FalloutMs: md,
          baf2FalloutAt: Wd,
          baf2FalloutR: Fd,
          baf2FalloutY: Rd
        } = dd;
        md > 0 && Wd && void 0 !== Fd ? this.start({
          centre: Wd,
          r: Fd,
          band: Rd
        }, Od + md) : this.stop()
      }
      perS(dd, Od, md) {
        const Wd = this.zone;
        if (!Wd) return 0;
        const Fd = this.endsAt - dd;
        return Fd <= 0 ? (this.zone = null, 0) : Wd.band && (Od[1] < Wd.band[0] || Od[1] > Wd.band[1]) || Math.hypot(Od[0] - Wd.centre[0], Od[2] - Wd.centre[2]) > Wd.r ? 0 : md.perS * Math.min(1, Fd / 5e3)
      }
    }
    const oy = [5, 7],
      Ny = [24, 8, 24],
      qy = .5,
      Hy = 1 / .6,
      yy = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class by {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, xK.isMobile)();
        this.state = new ty, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(dd) {
          return dd ? Qy : vy
        }(dd)
      }
      startFallout(dd, Od) {
        this.state.start(dd, Od)
      }
      stopFallout() {
        this.state.stop()
      }
      bY(dd) {
        this.state.bY(dd, performance.now())
      }
      onAfterRender(dd, Od) {
        var md;
        const Wd = performance.now(),
          Fd = 0 === this.lastMs ? 0 : Math.min(Wd - this.lastMs, 250) / 1e3;
        this.lastMs = Wd;
        const Rd = this.state.perS(Wd, Od, this.tier);
        if (Rd <= 0 || !dd.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Rd * Fd, Rd / 4);
        const Xd = Math.floor(this.budget);
        if (Xd < 1) return;
        this.budget -= Xd;
        const Kd = this.at;
        Kd[0] = Od[0], Kd[1] = Od[1] + 12, Kd[2] = Od[2];
        const hd = null !== (md = this.systems) && void 0 !== md ? md : this.create(dd, Kd),
          vd = this.amounts;
        vd[0] = 0, vd[1] = 0;
        for (let Qd = 0; Qd < Xd; Qd++) vd[Math.random() < .3 ? 1 : 0]++;
        for (let Qd = 0; Qd < hd.length; Qd++) vd[Qd] > 0 && (hd[Qd].moveTo(Kd, Ny), hd[Qd].emit(vd[Qd]))
      }
      dispose() {
        for (const Od of null !== (dd = this.systems) && void 0 !== dd ? dd : []) {
          var dd;
          Od.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(dd, Od) {
        return this.systems = yy.map((md => {
          let {
            rgba: [Wd, Fd, Rd, Xd],
            share: Kd
          } = md;
          const hd = {
            texture: "square_particle",
            Mt: Math.ceil(this.tier.Mt * Kd),
            minLifeTime: oy[0] / Hy,
            maxLifeTime: oy[1] / Hy,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [qy, -1, qy],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Wd, Fd, Rd, 0]
            }, {
              timeFraction: .15,
              minColor: [Wd, Fd, Rd, Xd]
            }, {
              timeFraction: .8,
              minColor: [Wd, Fd, Rd, Xd]
            }, {
              timeFraction: 1,
              minColor: [Wd, Fd, Rd, 0]
            }],
            blendMode: SK.g.Standard
          };
          return dd.createParticles(hd, {
            pos: Od,
            half: Ny
          })
        })), this.systems
      }
    }
    const Ty = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function py(dd) {
      const Od = /\|rot(\d)/.exec(dd);
      return Ty[Od ? Number(Od[1]) : 1]
    }
    var Yy = md(699),
      gy = md(40001);
    const wy = new Set(Yy.q);

    function ay(dd) {
      if (-2 !== dd.count) return null;
      const Od = ed(dd.item);
      return null !== Od && wy.has(Od) ? Od : null
    }

    function Ey(dd) {
      const {
        width: Od,
        height: md
      } = (0, gy.e)(dd).hitBoxDimensions;
      return .55 / Math.max(Od, md)
    }

    function Jy(dd, Od, md) {
      if (!md) return !1;
      const Wd = dd[0] + .5 - Od[0],
        Fd = dd[1] + .5 - Od[1],
        Rd = dd[2] + .5 - Od[2];
      return Wd * Wd + Fd * Fd + Rd * Rd <= 576
    }

    function Uy(dd, Od) {
      return Math.atan2(dd[0], dd[2]) + Math.PI + Od
    }

    function xy(dd, Od) {
      const md = 2 * Math.PI;
      return (dd + md * Od / 1e4) % md
    }
    class By {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = dd, this.now = Od, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = dd.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(dd, Od) {
        if (0 === this.farms.size) return;
        const md = this.now(),
          Wd = Number.isNaN(this.frameMs) ? 0 : Math.min(md - this.frameMs, 100);
        this.frameMs = md, md - this.checkedMs >= 1e3 && (this.checkedMs = md, this.check(dd, Od));
        for (const Fd of this.farms.values()) Fd.shown && Fd.running && null !== Fd.model && Wd > 0 && (Fd.spin = xy(Fd.spin, Wd), Fd.model.setPose(Fd.feet, Uy(Fd.front, Fd.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const dd of this.farms.values()) this.drop(dd);
        this.farms.clear()
      }
      sync() {
        const dd = new Set;
        for (const Od of this.labels.list()) {
          const md = ay(Od);
          if (null === md) continue;
          dd.add(Od.key);
          const Wd = this.farms.get(Od.key);
          if ((null === Wd || void 0 === Wd ? void 0 : Wd.mob) === md) continue;
          Wd && this.drop(Wd);
          const [Fd, Rd, Xd] = Od.pos;
          this.farms.set(Od.key, {
            pos: Od.pos,
            feet: [Fd + .5, Rd + 1, Xd + .5],
            mob: md,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [Od, md] of this.farms) dd.has(Od) || (this.drop(md), this.farms.delete(Od));
        this.checkedMs = -1 / 0
      }
      check(dd, Od) {
        for (const md of this.farms.values()) {
          const [Wd, Fd, Rd] = md.pos, Xd = uq(dd, md.pos);
          null !== Xd && im(Xd) === Gd && Jy(md.pos, Od, "Air" === uq(dd, [Wd, Fd + 1, Rd])) ? (md.running = Xd.endsWith("|Running"), md.front = py(Xd), null === md.model && (md.model = dd.createMobModel(md.mob, Ey(md.mob)), null === md.model) || (md.model.setPose(md.feet, Uy(md.front, md.spin)), md.shown || (md.model.setVisible(!0), md.shown = !0))) : (md.shown && null !== md.model && md.model.setVisible(!1), md.shown = !1)
        }
      }
      drop(dd) {
        var Od;
        null === (Od = dd.model) || void 0 === Od || Od.dispose(), dd.model = null, dd.shown = !1
      }
    }
    class Sy {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(dd) {
        var Od;
        this.island = dd.baf2ColIsland, this.islandSite = (Od = dd.baf2ColSite) && 8 === Od.length ? {
          spawnXZ: [Od[0], Od[1]],
          coreXZ: [Od[2], Od[3]],
          minXZ: [Od[4], Od[5]],
          maxXZ: [Od[6], Od[7]]
        } : null, this.views = dd.baf2ColList.map((dd => ({
          entry: KF(dd)
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
        var Od;
        return null === (Od = this.views.find((Od => {
          let {
            entry: md
          } = Od;
          return md.focus[0] === dd[0] && md.focus[1] === dd[1] + 1 && md.focus[2] === dd[2]
        }))) || void 0 === Od ? void 0 : Od.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(dd, Od) {
        return ih(this.entries(), dd, Od)
      }
      lookSource() {
        return {
          handles: dd => HW(dd) >= 0 || yW(dd),
          line: (dd, Od) => this.lookLine(dd, Od),
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
    const sy = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((dd => dd / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((dd => [dd, dd + 1, dd + 2, dd, dd + 2, dd + 3]))
    };

    function uy(dd, Od, md, Wd, Fd, Rd, Xd) {
      let Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const hd = Math.cos(Kd),
        vd = Math.sin(Kd),
        Qd = dd.positions.length / 3,
        {
          positions: td,
          indices: od
        } = sy;
      for (let Nd = 0; Nd < td.length; Nd += 3) {
        const Kd = td[Nd] * Fd,
          Qd = td[Nd + 2] * Xd;
        dd.positions.push(Od + Kd * hd + Qd * vd, md + td[Nd + 1] * Rd, Wd - Kd * vd + Qd * hd)
      }
      for (const Nd of od) dd.indices.push(Qd + Nd)
    }

    function Vy(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return Od < 1 ? {
        rgb: dd,
        alpha: Od
      } : {
        rgb: dd,
        alpha: 1,
        opaque: !0
      }
    }
    class iy {
      constructor(dd, Od) {
        this.style = dd, this.perSource = Od, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(dd) {
        this.sources = dd, 0 === dd.length && (this.budget = 0)
      }
      Et(dd, Od, md) {
        const Wd = this.sources.length;
        if (0 !== Wd) {
          var Fd, Rd;
          this.budget = Math.min(this.budget + (Fd = Wd, Rd = this.perSource, Math.min(Fd * Rd, Ch) * Od), 2);
          for (let Od = 0; Od < Wd && this.budget >= 1; Od++) {
            const Od = this.sources[this.cursor % Wd];
            this.cursor = (this.cursor + 1) % Wd;
            if (!(Math.max(Math.abs(Od.x - md[0]), Math.abs(Od.y - md[1]), Math.abs(Od.z - md[2])) > 32)) return this.puff(dd, Od), void this.budget--
          }
        }
      }
      dispose() {
        var dd;
        null === (dd = this.particles) || void 0 === dd || dd.dispose(), this.particles = null, this.sources = []
      }
      puff(dd, Od) {
        let {
          x: md,
          y: Wd,
          z: Fd,
          h: Rd,
          faces: Xd
        } = Od;
        const Kd = function(dd, Od, md, Wd, Fd) {
            const [Rd, Xd, Kd] = Fd[Math.floor(Math.random() * Fd.length)], hd = .04, vd = (dd, Od, md) => dd > 0 ? Od + md + hd : dd < 0 ? Od - hd : Od + .1, Qd = (dd, Od, md) => dd > 0 ? Od + md + hd : dd < 0 ? Od - hd : Od + md - .1, td = [vd(Rd, dd, 1), vd(Xd, Od, Wd), vd(Kd, md, 1)], od = [Qd(Rd, dd, 1), Qd(Xd, Od, Wd), Qd(Kd, md, 1)];
            return {
              pos: [(td[0] + od[0]) / 2, (td[1] + od[1]) / 2, (td[2] + od[2]) / 2],
              half: [(od[0] - td[0]) / 2, (od[1] - td[1]) / 2, (od[2] - td[2]) / 2],
              out: [Rd, Xd, Kd]
            }
          }(md, Wd, Fd, Rd, Xd),
          {
            style: hd
          } = this,
          vd = this.particles ??= dd.createParticles(BH(hd, Math.ceil(hd.count * Ch * hd.life[1]) + 4), Kd);
        vd.moveTo(Kd.pos, Kd.half);
        const [Qd, td, od] = Kd.out, Nd = hd.spread;
        vd.setDirections([Qd - Nd, .6 + td, od - Nd], [Qd + Nd, 1 + td, od + Nd]), vd.emit(hd.count)
      }
    }
    const Ay = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class ry {
      constructor() {
        this.green = new iy(kh.green, Ih), this.pink = new iy(kh.pink, lh), this.colliders = [], this.lastMs = 0
      }
      setSources(dd) {
        this.colliders = dd;
        const Od = [],
          md = [];
        for (const Wd of dd) {
          const [dd, Fd, Rd] = Wd.focus;
          Od.push({
            x: dd,
            y: Fd - 1,
            z: Rd,
            h: 2,
            faces: Ay
          });
          for (let Od = 0; Od < 4; Od++) {
            if (!Wd.live[Od]) continue;
            const [dd, Fd, Rd] = pW(Wd.focus, Od, vW.LASER_D), [Xd, , Kd] = TW[Od], hd = Ay.filter((dd => dd[0] !== Xd || dd[2] !== Kd || 0 !== dd[1]));
            md.push({
              x: dd,
              y: Fd,
              z: Rd,
              h: 1,
              faces: hd
            })
          }
        }
        this.green.setSources(Od), this.pink.setSources(md)
      }
      onAfterRender(dd) {
        const Od = performance.now(),
          md = 0 === this.lastMs ? 0 : Math.min(Od - this.lastMs, 250) / 1e3;
        if (this.lastMs = Od, 0 === this.colliders.length || !dd.particlesEnabled()) return;
        const Wd = dd.getCameraPosition();
        this.green.Et(dd, md, Wd), this.pink.Et(dd, md, Wd)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Gy = 1.04,
      ny = Vy([1, 120 / 255, 220 / 255]),
      Ly = Vy([1, .25, .25], .35);
    class Py {
      constructor(dd) {
        this.store = dd, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new ry
      }
      onAfterRender(dd) {
        this.store.version() !== this.builtVersion && this.rebuild(dd);
        const Od = performance.now();
        for (const md of this.beams) {
          const Wd = 1 + .35 * Math.sin(Od / 700 * Math.PI * 2 + md.phase);
          dd.setGameMesh(md.mesh, {
            scale: [md.alongX ? 1 : Wd, Wd, md.alongX ? Wd : 1]
          })
        }
        this.glow.onAfterRender(dd)
      }
      dispose(dd) {
        this.clear(dd), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(dd) {
        this.clear(dd), this.builtVersion = this.store.version();
        const Od = [];
        for (const {
            entry: md
          }
          of this.store.colliders()) md.on && md.live.some(Boolean) && (this.addBeams(dd, md), Od.push(md)), md.blockers.length > 0 && this.addMarkers(dd, md);
        this.glow.setSources(Od)
      }
      addBeams(dd, Od) {
        const [md, Wd, Fd] = Od.focus, Rd = eh - .25, Xd = (.25 + eh) / 2;
        for (let Kd = 0; Kd < 4; Kd++) {
          if (!Od.live[Kd]) continue;
          const [hd, , vd] = TW[Kd], Qd = 0 !== hd, td = {
            positions: [],
            indices: []
          };
          uy(td, 0, 0, 0, Qd ? Rd : .2, .2, Qd ? .2 : Rd);
          const od = [md + .5 + hd * Xd, Wd + .5, Fd + .5 + vd * Xd],
            Nd = dd.createGameMesh(td, ny, od);
          this.meshes.push(Nd), this.beams.push({
            mesh: Nd,
            alongX: Qd,
            phase: Kd * Math.PI / 2
          })
        }
      }
      addMarkers(dd, Od) {
        const md = Od.blockers[0],
          Wd = {
            positions: [],
            indices: []
          };
        for (const [Fd, Rd, Xd] of Od.blockers) uy(Wd, Fd - md[0] + .5, Rd - md[1] + .5, Xd - md[2] + .5, Gy, Gy, Gy);
        this.meshes.push(dd.createGameMesh(Wd, Ly, md))
      }
      clear(dd) {
        for (const Od of this.meshes) dd.disposeGameMesh(Od);
        this.meshes = [], this.beams = []
      }
    }
    const zy = [.56, .83, 1],
      cy = [1, .73, .08],
      jy = [1, .25, .25],
      Dy = [.85, .85, .85],
      ey = [.3, .45, .6];

    function Iy(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Xd = Fd / 2,
        Kd = Fd + Rd;
      for (const hd of [-Xd, Xd])
        for (const Fd of [-Xd, Xd]) uy(dd, Od, md + hd, Wd + Fd, Kd, Rd, Rd), uy(dd, Od + hd, md, Wd + Fd, Rd, Kd, Rd), uy(dd, Od + hd, md + Fd, Wd, Rd, Rd, Kd)
    }

    function ly(dd) {
      return Od => dd.isBlockInLoadedChunk(Od[0], Od[1], Od[2]) && 0 === dd.getBlockId(Od[0], Od[1], Od[2])
    }

    function Cy(dd) {
      return dd.map((dd => {
        let {
          free: Od,
          blocked: md,
          gaps: Wd,
          supports: Fd
        } = dd;
        return `${Od.join(";")}|${md.join(";")}|${Wd.join(";")}|${Fd.join(";")}`
      })).join("/")
    }

    function Zy(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Rd = Od[0],
        Xd = {
          positions: [],
          indices: []
        };
      for (const [Kd, hd, vd] of Od) Iy(Xd, Kd - Rd[0] + .5, hd - Rd[1] + .5, vd - Rd[2] + .5, Wd, Fd);
      return dd.createGameMesh(Xd, md, Rd)
    }
    class ky {
      constructor(dd) {
        this.store = dd, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(dd, Od, md) {
        var Wd;
        const Fd = null === (Wd = dd.NWd(Od)) || void 0 === Wd ? void 0 : Wd.name;
        if (Fd !== tW && Fd !== QW) return void("" !== this.shownKey && this.show(dd, "", []));
        const Rd = performance.now();
        if (Rd - this.lastCheckMs >= 200 && (this.lastCheckMs = Rd, Fd === tW ? this.check(dd, md) : this.preview(dd, md)), this.pulses.length > 0) {
          const Od = 1 + .12 * Math.sin(Rd / 1e3 * 1.25 * Math.PI * 2),
            md = [Od, Od, Od];
          for (const Wd of this.pulses) dd.setGameMesh(Wd, {
            scale: md
          })
        }
      }
      dispose(dd) {
        this.clear(dd), this.shownKey = ""
      }
      check(dd, Od) {
        const md = ly(dd),
          Wd = [];
        for (const {
            entry: Rd
          }
          of this.store.colliders()) {
          Rd.focus.every(((dd, md) => Math.abs(dd + .5 - Od[md]) <= vW.GHOST_REACH)) && Wd.push(Dh(Rd, md))
        }
        const Fd = Cy(Wd);
        Fd !== this.shownKey && this.show(dd, Fd, Wd)
      }
      preview(dd, Od) {
        const md = dd.getTargetedBlock(),
          Wd = md ? [md.Uy[0], md.Uy[1], md.Uy[2]] : null,
          Fd = null !== Wd && Wd.every(((dd, md) => Math.abs(dd + .5 - Od[md]) <= 8)),
          Rd = this.store.site(),
          Xd = Fd && Rd ? function(dd, Od, md) {
            const Wd = bW(dd);
            if (!Wd.every(Od)) return null;
            const Fd = wW(dd, md);
            return {
              column: Wd,
              spots: Dh({
                focus: Wd[1],
                lasers: [!1, !1, !1, !1],
                open: Fd,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, Od),
              fits: Fd.filter(Boolean).length >= vW.MIN_SPOTS
            }
          }(Wd, ly(dd), Rd) : null,
          Kd = Xd ? [Xd.spots] : [],
          hd = Xd ? `preview ${Wd.join(",")}|${Xd.fits}|${Cy(Kd)}` : "";
        var vd, Qd;
        hd !== this.shownKey && this.show(dd, hd, Kd, null !== (vd = null === Xd || void 0 === Xd ? void 0 : Xd.column) && void 0 !== vd ? vd : [], null === (Qd = null === Xd || void 0 === Xd ? void 0 : Xd.fits) || void 0 === Qd || Qd)
      }
      show(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Fd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(dd), this.shownKey = Od, Wd.length > 0 && this.meshes.push(Zy(dd, Wd, Vy(Fd ? Dy : jy)));
        for (const {
            free: Rd,
            blocked: Xd,
            gaps: Kd,
            supports: hd
          }
          of md) {
          for (const [Od, md, Wd] of Rd) {
            const Fd = {
              positions: [],
              indices: []
            };
            Iy(Fd, 0, 0, 0);
            const Rd = dd.createGameMesh(Fd, Vy(zy), [Od + .5, md + .5, Wd + .5]);
            this.meshes.push(Rd), this.pulses.push(Rd)
          }
          Xd.length > 0 && this.meshes.push(Zy(dd, Xd, Vy(cy))), Kd.length > 0 && this.meshes.push(Zy(dd, Kd, Vy(jy), 1.06, .07)), hd.length > 0 && this.meshes.push(Zy(dd, hd, Vy(ey)))
        }
      }
      clear(dd) {
        for (const Od of this.meshes) dd.disposeGameMesh(Od);
        this.meshes = [], this.pulses = []
      }
    }
    class fy {
      constructor() {
        this.stored = new Map, this.jK = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(dd) {
        if (!dd.baf2TermOpen) return !1;
        dd.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [Od, md] of dd.baf2TermItems) md > 0 ? this.stored.set(Od, md) : this.stored.delete(Od);
        if (dd.baf2TermHeld && (this.jK = new Map(dd.baf2TermHeld)), this.pending = this.pending.filter((Od => Od.seq > dd.baf2TermAcked)), this.silos = dd.baf2TermSilos, this.readOnly = dd.baf2TermReadOnly, this.pocket = !0 === dd.baf2TermPocket, dd.baf2TermReset) this.resort();
        else {
          const dd = new Set(this.order);
          for (const Od of this.stored.keys()) dd.has(Od) || this.order.push(Od)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((dd, Od) => this.amount(Od) - this.amount(dd) || dd.localeCompare(Od))), this.changed()
      }
      take(dd, Od) {
        const md = vO(dd, this.amount(Od));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Od,
          amount: md,
          put: !1
        }), this.recents = [Od, ...this.recents.filter((dd => dd !== Od))].slice(0, 6), this.changed(), FO(this.seq, dd, Od)
      }
      put(dd, Od) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Od,
          amount: vO(dd, this.heldAmount(Od)),
          put: !0
        }), this.changed(), RO(this.seq, dd, Od)
      }
      putAll() {
        this.seq++;
        for (const dd of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: dd,
          amount: this.heldAmount(dd),
          put: !0
        });
        return this.changed(), XO(this.seq)
      }
      amount(dd) {
        var Od;
        let md = null !== (Od = this.stored.get(dd)) && void 0 !== Od ? Od : 0;
        for (const Wd of this.pending) Wd.item === dd && (md += Wd.put ? Wd.amount : -Wd.amount);
        return Math.max(0, md)
      }
      heldAmount(dd) {
        var Od;
        let md = null !== (Od = this.jK.get(dd)) && void 0 !== Od ? Od : 0;
        for (const Wd of this.pending) Wd.put && Wd.item === dd && (md -= Wd.amount);
        return Math.max(0, md)
      }
      heldItems() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((Od => Od === dd || this.heldAmount(Od) > 0))
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
    var My = md(39955);
    const db = {
      isBlock: dd => void 0 !== ud.i[dd],
      harvestType: dd => {
        var Od;
        return null === (Od = ud.i[dd]) || void 0 === Od ? void 0 : Od.harvestType
      },
      harvestLevel: dd => {
        var Od;
        return null === (Od = ud.i[dd]) || void 0 === Od ? void 0 : Od.harvestLevel
      },
      dropsNothing: dd => {
        var Od;
        return null === (null === (Od = ud.i[dd]) || void 0 === Od ? void 0 : Od.drops)
      },
      displayName: dd => {
        var Od;
        return null === (Od = lX.q[dd]) || void 0 === Od ? void 0 : Od.displayName
      },
      description: dd => {
        var Od;
        return null === (Od = lX.q[dd]) || void 0 === Od ? void 0 : Od.description
      },
      harvests: dd => {
        var Od;
        return null === (Od = lX.q[dd]) || void 0 === Od ? void 0 : Od.harvests
      },
      level: dd => {
        var Od;
        return null === (Od = lX.q[dd]) || void 0 === Od ? void 0 : Od.level
      }
    };

    function Ob(dd, Od, md) {
      return function(dd, Od, md, Wd) {
        var Fd, Rd;
        const Xd = Od.split("|")[0],
          Kd = dd.isBlock(Od) ? Od : dd.isBlock(Xd) ? Xd : null;
        if (null === Kd || "rock" !== dd.harvestType(Kd) || dd.dropsNothing(Kd) && !LW.has(Xd)) return null;
        const hd = md && "rock" === dd.harvests(md) ? null !== (Fd = dd.level(md)) && void 0 !== Fd ? Fd : 0 : null,
          vd = null !== (Rd = null !== Wd && void 0 !== Wd ? Wd : dd.harvestLevel(Kd)) && void 0 !== Rd ? Rd : 0;
        return (null !== hd ? vd <= hd : 0 === dd.harvestLevel(Kd)) ? null : SW(dd, vd)
      }(db, dd, Od, md)
    }

    function mb(dd, Od) {
      return function(dd, Od, md) {
        if (Od === BW[0]) return [(0, rd.ae)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, rd.E.whiteUiText)];
        const Wd = md.split("|")[0],
          Fd = dd.isBlock(Wd) ? dd.displayName(Wd) : void 0,
          Rd = "string" === typeof Fd ? Fd : Fd && "translationKey" in Fd ? `$t(${Fd.translationKey})` : Wd;
        return [(0, rd.ae)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Rd
          }
        }, rd.E.whiteUiText), (0, rd.ae)({
          translationKey: `item:${(0,rd.te)(Od)}`
        }, rd.E.yellowUiText)]
      }(db, dd, Od)
    }
    const Wb = "buildAFactory2Game:";
    const Fb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Rb(dd) {
      return dd.endsWith(" Ore")
    }
    const Xb = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Kb = [],
      hb = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Xb,
        plan: null,
        atomic: Kb
      },
      vb = "buildAFactory2Game:",
      Qb = new Set(["Splitter", "Sorting Gate"]),
      tb = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class ob {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = dd, this.planAt = Od, this.tierOf = md, this.XK = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.jK = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = hb, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(dd, Od, md) {
        var Wd, Fd, Rd;
        let Xd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Kd = null !== (Wd = null === (Fd = dd.NWd(Od)) || void 0 === Fd ? void 0 : Fd.name) && void 0 !== Wd ? Wd : null,
          hd = dd.isPlayerCrouching(Od),
          vd = 0 === md ? null : this.resolve(dd, md),
          Qd = null !== vd && null !== Xd && Qb.has(vd.rootName) && function(dd, Od) {
            return tb.some((md => {
              let [Wd, Fd] = md;
              const Rd = dd.getBlockId(Od[0] + Wd, Od[1], Od[2] + Fd);
              return 0 !== Rd && "Express Belt" === dd.getMetaInfo(Rd).rootName
            }))
          }(dd, Xd),
          td = this.updatePlan(0 === md ? null : Xd),
          od = this.tierOf(),
          Nd = null === Xd ? null : (0, My.h)(md),
          qd = null !== Nd && null !== Xd && (0, My.l)(function(dd) {
            return (Od, md, Wd) => dd.getBlockId(Od, md, Wd)
          }(dd), Xd[0], Xd[1], Xd[2], Nd),
          Hd = this.readAfloat(dd, md, Xd);
        if (md === this.XK && qd === this.missesMaker && Hd === this.afloat && Kd === this.jK && hd === this.crouching && Qd === this.express && od === this.tier && !td && (!this.targetsLive || !this.liveMoved(Xd))) return;
        this.XK = md, this.missesMaker = qd, this.afloat = Hd, this.jK = Kd, this.crouching = hd, this.express = Qd;
        const yd = Qd && vd ? function(dd) {
          if (null === dd.info) return null;
          return dd.express ??= {
            ...dd.info,
            detail: `${vb}lookKeepsUpExpress`,
            detailItem: null
          }, dd.express
        }(vd) : null !== vd && qd && null !== Nd ? this.besideMaker(vd, md, Nd) : null !== vd && Hd ? this.hanging(vd) : null !== (Rd = null === vd || void 0 === vd ? void 0 : vd.info) && void 0 !== Rd ? Rd : null;
        this.tier = od;
        const bd = vd && yd ? function(dd, Od) {
          var md, Wd;
          const Fd = ud.i[dd];
          if (!dd.endsWith(" Ore") || "rock" !== (null === Fd || void 0 === Fd ? void 0 : Fd.harvestType) || 0 === Fd.harvestLevel) return null;
          const Rd = null !== (md = Fd.harvestLevel) && void 0 !== md ? md : 0,
            Xd = Od ? lX.q[Od] : void 0;
          if ("rock" === (null === Xd || void 0 === Xd ? void 0 : Xd.harvests) && (null !== (Wd = Xd.level) && void 0 !== Wd ? Wd : 0) >= Rd) return null;
          const Kd = (hd = Rd, SW(db, hd));
          var hd;
          if (null === Kd) return null;
          const vd = (0, OR.c)(Kd),
            Qd = /^[AEIOU]/.test(Kd) ? "An" : "";
          if ("rock" === (null === Xd || void 0 === Xd ? void 0 : Xd.harvests) && Od) return {
            key: `${vb}lookToolTooWeak${Qd}`,
            jK: (0, OR.c)(Od),
            needed: vd
          };
          return {
            key: Kd === BW[0] ? `${vb}lookNeedAnyPickaxe` : `${vb}lookNeedPickaxe${Qd}`,
            jK: null,
            needed: vd
          }
        }(vd.rootName, Kd) : null;
        this.targetsLive = !0 === (null === vd || void 0 === vd ? void 0 : vd.live) && null !== Xd;
        let Td = null;
        this.targetsLive && vd && Xd && this.live && (this.livePos[0] = Xd[0], this.livePos[1] = Xd[1], this.livePos[2] = Xd[2], this.liveVersion = this.live.version(), Td = this.live.line(vd.rootName, Xd));
        const pd = null === yd ? Xb : function(dd, Od, md) {
            const Wd = function(dd, Od, md) {
              const Wd = rm(dd);
              if (null === Wd) return null;
              const Fd = `${Wb}lookPortMode_${Wd}`,
                Rd = cW(Od);
              if (Rd && md) return {
                mode: null,
                detail: Fd,
                next: `${Wb}lookWrenchPickUp`,
                nextState: null
              };
              const Xd = Gm(dd),
                Kd = null === Xd ? null : rm(Xd);
              return null === Kd ? {
                mode: null,
                detail: Fd,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Fd,
                next: Rd ? `${Wb}lookWrenchNext` : `${Wb}lookPortWrench`,
                nextState: `${Wb}lookPortState_${Kd}`
              }
            }(dd, Od, md);
            if (null !== Wd) return Wd;
            const Fd = WF(dd, Od, md);
            return null === Fd.mode && null === Fd.next ? Xb : Fd
          }(dd.blockIdToBlockName(md), Kd, hd),
          Yd = this.plan,
          gd = vd && yd ? this.rowsOf(vd.rootName, od) : Kb,
          wd = this.snapshot;
        if (!(null === yd ? !wd.visible : wd.visible && yd === wd.info && (Ed = bd, Jd = wd.tool, Ed === Jd || null !== Ed && null !== Jd && Ed.key === Jd.key && Ed.jK === Jd.jK && Ed.needed === Jd.needed) && function(dd, Od) {
            return dd === Od || null !== dd && null !== Od && dd.key === Od.key && JSON.stringify([dd.params, dd.keys]) === JSON.stringify([Od.params, Od.keys])
          }(Td, wd.live) && function(dd, Od) {
            return dd.mode === Od.mode && dd.detail === Od.detail && dd.next === Od.next && dd.nextState === Od.nextState
          }(pd, wd.wrench) && jq(Yd, wd.plan) && gd === wd.atomic)) {
          var Ed, Jd;
          this.snapshot = null === yd ? {
            ...wd,
            visible: !1
          } : {
            info: yd,
            visible: !0,
            tool: bd,
            live: Td,
            wrench: pd,
            plan: Yd,
            atomic: gd
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = hb, this.XK = 0, this.jK = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(dd, Od, md) {
        if (null === md || 0 === Od || !Kd() || !Rb(this.resolve(dd, Od).rootName)) return !1;
        const Wd = `${md[0]},${md[1]},${md[2]},${Od}`,
          Fd = performance.now();
        return Wd === this.afloatKey && Fd - this.afloatAt < Nb ? this.afloat : (this.afloatKey = Wd, this.afloatAt = Fd, function(dd, Od) {
          for (const [md, Wd, Fd] of Fb) {
            const Rd = Od(dd[0] + md, dd[1] + Wd, dd[2] + Fd);
            if (void 0 === Rd || null !== Rd && !Rb(Rd)) return !1
          }
          return !0
        }(md, ((Od, md, Wd) => function(dd, Od, md, Wd) {
          if (!dd.isBlockInLoadedChunk(Od, md, Wd)) return;
          const Fd = dd.getBlockId(Od, md, Wd);
          return 0 === Fd ? null : dd.getMetaInfo(Fd).rootName
        }(dd, Od, md, Wd))))
      }
      liveMoved(dd) {
        var Od;
        const {
          livePos: md
        } = this;
        return null === dd || dd[0] !== md[0] || dd[1] !== md[1] || dd[2] !== md[2] || (null === (Od = this.live) || void 0 === Od ? void 0 : Od.version()) !== this.liveVersion
      }
      updatePlan(dd) {
        const Od = null === dd ? "" : dd.join(","),
          md = performance.now();
        if (Od === this.planPos && md - this.planMs < 250) return !1;
        this.planPos = Od, this.planMs = md;
        const Wd = null === dd ? null : this.planAt([dd[0], dd[1], dd[2]]),
          Fd = !jq(Wd, this.plan);
        return this.plan = Wd, Fd
      }
      besideMaker(dd, Od, md) {
        let {
          info: Wd
        } = dd;
        if (null === Wd) return null;
        let Fd = this.besideMakerById.get(Od);
        if (void 0 === Fd) {
          const dd = "cryo" === md ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Fd = {
            ...Wd,
            detail: `${vb}${dd}`,
            detailItem: null
          }, this.besideMakerById.set(Od, Fd)
        }
        return Fd
      }
      hanging(dd) {
        let {
          info: Od,
          rootName: md
        } = dd;
        if (null === Od) return null;
        let Wd = this.afloatByRoot.get(md);
        return void 0 === Wd && (Wd = {
          ...Od,
          detail: `${vb}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(md, Wd)), Wd
      }
      rowsOf(dd, Od) {
        if (null === Od) return Kb;
        const md = `${dd}|${Od}`;
        let Wd = this.rowsByKey.get(md);
        if (void 0 === Wd) {
          const Fd = function(dd, Od) {
            var md;
            if (!(dd in rO)) return [];
            const Wd = null !== (md = GO[dd]) && void 0 !== md ? md : [],
              Fd = new Map;
            for (const Xd of GR(dd, Od))
              if ((Wd.includes(Xd) || rR(Xd.output) && iR(Xd.output) > fd(dd)) && iR(Xd.output) <= Od) {
                var Rd;
                const dd = null !== (Rd = Fd.get(Xd.output)) && void 0 !== Rd ? Rd : [];
                dd.push(Xd.input), Fd.set(Xd.output, dd)
              } return LR([...Fd], (dd => {
              let [Od] = dd;
              return -iR(Od)
            })).map((dd => {
              let [Od, md] = dd;
              return {
                output: Od,
                inputs: md
              }
            }))
          }(dd, Od);
          Wd = Fd.length > 0 ? Fd : Kb, this.rowsByKey.set(md, Wd)
        }
        return Wd
      }
      resolve(dd, Od) {
        const {
          rootId: md,
          rootName: Wd
        } = dd.getMetaInfo(Od), Fd = (0, bm.n)(Wd) ? Od : md;
        let Rd = this.byRootId.get(Fd);
        const Xd = Kd();
        if (void 0 === Rd || Rd.nuclear !== Xd) {
          var hd;
          const md = function(dd) {
            return GW(db, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd)
          }(Wd, dd.blockIdToBlockName(Od));
          Rd = {
            info: md,
            rootName: Wd,
            live: null !== md && !0 === (null === (hd = this.live) || void 0 === hd ? void 0 : hd.handles(Wd)),
            nuclear: Xd
          }, this.byRootId.set(Fd, Rd)
        }
        return Rd
      }
    }
    const Nb = 500;
    const qb = (0, Wd.memo)((function(dd) {
      var Od, md;
      let {
        store: Fd
      } = dd;
      const {
        t: Rd
      } = (0, xF.G)(), [Xd, Kd] = (0, Wd.useState)((() => Fd.get()));
      (0, Wd.useEffect)((() => (Kd(Fd.get()), Fd.subscribe((() => {
        Kd(Fd.get())
      })))), [Fd]);
      const {
        openInGameMenuName: hd,
        openEverythingMenuName: vd,
        isTouchScreen: Qd
      } = (0, YF.p)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: td,
        tool: od,
        live: Nd,
        wrench: qd,
        atomic: Hd
      } = Xd, yd = Xd.visible && null === hd && null === vd;
      if (null === td) return null;
      const bd = null !== qd.detail ? Rd(qd.detail) : null !== (Od = Xd.plan) && void 0 !== Od && Od.ctrl ? Rd("buildAFactory2Game:lookPlanCtrl") : null !== td.detail ? Rd(td.detail, null === td.detailItem ? void 0 : {
        item: Rd(td.detailItem)
      }) : null;
      return (0, YR.jsxs)("div", {
        className: aF()("Baf2LookTarget", {
          Visible: yd
        }),
        "aria-hidden": !yd,
        children: [(0, YR.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Rd(td.name)
        }), null !== Xd.plan && (0, YR.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Rd(Xd.plan.key, {
            kind: Rd(Xd.plan.kindKey),
            w: String(Xd.plan.w),
            h: String(Xd.plan.h),
            d: String(Xd.plan.d),
            count: String(Xd.plan.count)
          })
        }), void 0 !== (null === (md = Xd.plan) || void 0 === md ? void 0 : md.why) && (0, YR.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Rd(Xd.plan.why)
        }), null !== qd.mode && (0, YR.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Rd(qd.mode)
        }), null !== od ? (0, YR.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Rd(od.key, {
            item: Rd(od.needed),
            jK: null === od.jK ? "" : Rd(od.jK)
          })
        }) : null !== Nd ? (0, YR.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Rd(Nd.key, fh(Rd, Nd))
        }) : null !== bd && (0, YR.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: bd
        }), Hd.length > 0 && (0, YR.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Rd("buildAFactory2Game:lookAtomicRecipes", {
            list: Hd.map((dd => {
              let {
                output: Od,
                inputs: md
              } = dd;
              const Wd = md.length > 1 ? ` ${Rd("buildAFactory2Game:recipeMore",{count:String(md.length-1)})}` : "";
              return `${Rd((0,OR.c)(md[0]))}${Wd} \u2192 ${Rd((0,OR.c)(Od))}`
            })).join(", ")
          })
        }), null !== qd.next && (0, YR.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Rd(qd.next, {
            state: null === qd.nextState ? "" : Rd(qd.nextState),
            use: Rd(Qd ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Hb = md(40062);
    const yb = [],
      bb = [
        [0, -1, 0]
      ];

    function Tb(dd) {
      const Od = [dd];
      for (let md = 1; md <= 4; md++) md > 1 && Od.push(`${dd}|meta|rot${md}`), Od.push(`${dd}|meta|rot${md}|Running`);
      return Od
    }

    function pb(dd, Od) {
      return [Math.floor(dd[0] / Od), Math.floor(dd[1] / Od), Math.floor(dd[2] / Od)]
    }

    function Yb(dd, Od, md) {
      return `${dd},${Od},${md}`
    }

    function gb(dd) {
      const Od = dd.split("|")[0];
      if (!om(Od)) return yb;
      const md = rO[Od];
      if (Wm(md)) return bb;
      const Wd = py(dd);
      return Fm(md) ? [
        [-Wd[0], -Wd[1], -Wd[2]]
      ] : EF(md) ? function(dd, Od) {
        const md = dd[0] - 2 * Od[0],
          Wd = dd[2] - 2 * Od[2],
          Fd = [];
        for (let Rd = -1; Rd <= 1; Rd++)
          for (let Od = -1; Od <= 1; Od++) Fd.push([md + Rd, dd[1], Wd + Od]);
        return Fd
      }([0, 0, 0], Wd) : yb
    }
    const wb = [.5, .5, .5],
      ab = [.2, .8, .3],
      Eb = [.45, 1, .5];
    class Jb {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(dd) {
        this.indexed = !0;
        for (const Od of SO)
          for (const md of Tb(Od)) {
            const Od = dd.blockNameToBlockId(md, !0),
              Wd = gb(md);
            null !== Od && Wd.length > 0 && (this.offsetsList.push(Wd), this.offsetsIndexById[Od] = this.offsetsList.length)
          }
      }
      onAfterRender(dd, Od) {
        this.indexed || this.index(dd);
        const md = performance.now();
        if (md - this.lastCheckMs < 100) return;
        this.lastCheckMs = md, this.checks++;
        const Wd = tq.i.Qt,
          [Fd, Rd, Xd] = pb(Od, Wd);
        let Kd = !1;
        const hd = [];
        let vd = 0;
        for (let Qd = Fd - 2; Qd <= Fd + 2; Qd++)
          for (let Od = Rd - 1; Od <= Rd + 1; Od++)
            for (let Fd = Xd - 2; Fd <= Xd + 2; Fd++) {
              const Rd = vd++,
                Xd = Yb(Qd, Od, Fd),
                td = dd.getChunkVersion(Qd, Od, Fd);
              let od = this.chunks.get(Xd);
              null !== td ? (od || (od = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Xd, od)), od.seenAt = this.checks, od.checkedVersion !== td && (od.checkedVersion = td, Kd = !0), od.scannedVersion !== td && md - od.scannedAt >= 500 && hd.push({
                slot: Rd,
                entry: od,
                origin: [Qd * Wd, Od * Wd, Fd * Wd]
              })) : (Kd ||= void 0 !== od, this.chunks.delete(Xd))
            }
        this.scanDue(dd, hd) && (Kd = !0);
        for (const [Qd, td] of this.chunks) td.seenAt !== this.checks && (Kd ||= td.machines.length > 0, this.chunks.delete(Qd));
        for (const Qd of this.chunks.values())
          for (const [Od, md, Wd] of Qd.cellChunks)(Math.abs(Od - Fd) > 2 || Math.abs(md - Rd) > 1 || Math.abs(Wd - Xd) > 2) && this.watchCellChunk(dd, Od, md, Wd) && (Kd = !0);
        for (const [Qd, td] of this.cellChunks) td.seenAt !== this.checks && this.cellChunks.delete(Qd);
        Kd && this.refresh(dd)
      }
      dispose(dd) {
        this.clearMeshes(dd), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(dd, Od) {
        const md = Math.max(Od.findIndex((dd => {
          let {
            slot: Od
          } = dd;
          return Od >= this.scanFrom
        })), 0);
        let Wd = 96;
        for (let Fd = 0; Fd < Od.length; Fd++) {
          const {
            slot: Rd,
            entry: Xd,
            origin: Kd
          } = Od[(md + Fd) % Od.length];
          if (Wd -= this.scan(dd, Xd, Kd), Wd <= 0) {
            this.scanFrom = Rd + 1;
            break
          }
        }
        return Od.length > 0
      }
      scan(dd, Od, md) {
        let [Wd, Fd, Rd] = md;
        const Xd = tq.i.Qt,
          Kd = this.hits;
        Kd.length = 0;
        const hd = dd.scanBlocks(Wd, Fd, Rd, Wd + Xd, Fd + Xd, Rd + Xd, this.offsetsIndexById, Kd),
          vd = [];
        for (let Qd = 0; Qd < Kd.length; Qd += 4) vd.push({
          pos: [Kd[Qd], Kd[Qd + 1], Kd[Qd + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[Kd[Qd + 3]] - 1]
        });
        return Od.machines = vd, Od.cellChunks = function(dd, Od) {
          const md = new Set,
            Wd = [];
          for (const {
              pos: Fd,
              offsets: Rd
            }
            of dd)
            for (const [dd, Xd, Kd] of Rd) {
              const Rd = pb([Fd[0] + dd, Fd[1] + Xd, Fd[2] + Kd], Od),
                hd = Yb(...Rd);
              md.has(hd) || (md.add(hd), Wd.push(Rd))
            }
          return Wd
        }(vd, Xd), Od.scannedVersion = Od.checkedVersion, Od.scannedAt = performance.now(), Math.max(hd, 1)
      }
      watchCellChunk(dd, Od, md, Wd) {
        const Fd = Yb(Od, md, Wd),
          Rd = dd.getChunkVersion(Od, md, Wd),
          Xd = this.cellChunks.get(Fd);
        return null === Rd ? this.cellChunks.delete(Fd) : (null === Xd || void 0 === Xd ? void 0 : Xd.version) === Rd ? (Xd.seenAt = this.checks, !1) : (this.cellChunks.set(Fd, {
          version: Rd,
          seenAt: this.checks
        }), !0)
      }
      refresh(dd) {
        const Od = function(dd, Od) {
            const md = new Set,
              Wd = [];
            for (const {
                pos: Fd,
                offsets: Rd
              }
              of dd)
              for (const [dd, Xd, Kd] of Rd) {
                const Rd = Fd[0] + dd,
                  hd = Fd[1] + Xd,
                  vd = Fd[2] + Kd,
                  Qd = `${Rd},${hd},${vd}`;
                md.has(Qd) || (md.add(Qd), Od(Rd, hd, vd) && Wd.push([Rd, hd, vd]))
              }
            return Wd
          }([...this.chunks.values()].flatMap((dd => dd.machines)), ((Od, md, Wd) => dd.isBlockInLoadedChunk(Od, md, Wd) && 0 === dd.getBlockId(Od, md, Wd))),
          md = Od.join(";");
        md !== this.shownKey && (this.shownKey = md, this.clearMeshes(dd), Od.length > 0 && (this.meshes = [this.build(dd, Od, !1), this.build(dd, Od, !0)]))
      }
      build(dd, Od, md) {
        const Wd = Od[0],
          Fd = [],
          Rd = [];
        for (const [Xd, Kd, hd] of Od)(0, Hb.c)(Fd, Rd, [Xd - Wd[0] + .5, Kd - Wd[1] + .5, hd - Wd[2] + .5], wb, md);
        return dd.createGameMesh({
          positions: Fd,
          indices: Rd
        }, {
          rgb: md ? Eb : ab,
          alpha: .4
        }, Wd)
      }
      clearMeshes(dd) {
        for (const Od of this.meshes) dd.disposeGameMesh(Od);
        this.meshes = []
      }
    }
    const Ub = 1 / .6,
      xb = 200,
      Bb = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Sb = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      sb = 2 * Math.PI / 3;
    class ub {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bb;
        this.style = dd, this.particles = null, this.points = new Float32Array(800), this.budget = xb, this.lastMs = 0
      }
      static blade() {
        return new ub(Sb)
      }
      bY(dd, Od) {
        const md = Math.min(Od.arcStruck, Od.arcPoints.length);
        this.draw(dd, [Od.arcFrom, ...Od.arcPoints], Od.arcPoints.slice(0, md))
      }
      onBlade(dd, Od) {
        const [md, Wd, Fd] = Od.bladeCentre, [Rd, Xd] = Od.bladeFacing, Kd = md - 1.5 * Rd, hd = Fd - 1.5 * Xd, vd = Math.atan2(Xd, Rd), Qd = [];
        for (let td = 0; td <= 8; td++) {
          const dd = vd - sb / 2 + sb * td / 8;
          Qd.push([Kd + 2.5 * Math.cos(dd), Wd, hd + 2.5 * Math.sin(dd)])
        }
        this.draw(dd, Qd, Od.bladeStruck)
      }
      dispose() {
        var dd;
        null === (dd = this.particles) || void 0 === dd || dd.stop(), this.particles = null
      }
      draw(dd, Od, md) {
        if (!dd.particlesEnabled() || Od.length < 2) return;
        const Wd = performance.now();
        this.budget = Math.min(xb, this.budget + (Wd - this.lastMs) / 1e3 * xb), this.lastMs = Wd;
        const Fd = [];
        let Rd = 0,
          Xd = Od[0];
        for (const bd of Od.slice(1)) {
          const dd = Math.min(48, Math.round(Math.hypot(bd[0] - Xd[0], bd[1] - Xd[1], bd[2] - Xd[2]) * this.style.perBlock));
          Fd.push([Xd, bd, dd]), Rd += dd, Xd = bd
        }
        const Kd = md.length;
        Rd += 10 * Kd;
        const hd = Rd > this.budget ? this.budget / Rd : 1;
        if (0 === Rd || hd * Rd < 1) return;
        const vd = Od[0],
          [Qd, td, od] = vd,
          Nd = this.points;
        let qd = 0;
        const Hd = (dd, Od, md, Wd) => {
          const Fd = 4 * qd;
          Nd[Fd] = dd - Qd, Nd[Fd + 1] = Od - td, Nd[Fd + 2] = md - od, Nd[Fd + 3] = Wd, qd++
        };
        Fd.forEach(((dd, Od) => {
          let [md, Wd, Fd] = dd;
          const Rd = Math.min(Math.floor(Fd * hd), xb - qd),
            Xd = Math.hypot(Wd[0] - md[0], Wd[1] - md[1], Wd[2] - md[2]),
            Kd = 0 === Od && Xd > 0 ? Math.min(.5, .1 * Xd) / Xd : 0;
          for (let hd = 0; hd < Rd; hd++) {
            const dd = Kd + (hd + .5) / Rd * (1 - Kd);
            Hd(md[0] + (Wd[0] - md[0]) * dd, md[1] + (Wd[1] - md[1]) * dd, md[2] + (Wd[2] - md[2]) * dd, .15)
          }
        }));
        const yd = Math.floor(10 * hd);
        for (let bd = 0; bd < Kd; bd++) {
          const [dd, Od, Wd] = md[bd];
          for (let md = 0; md < yd && qd < xb; md++) Hd(dd, Od, Wd, 2.5)
        }
        this.budget -= qd, this.particles ??= dd.createParticles(function(dd) {
          const [Od, md] = dd.colours;
          return {
            texture: "square_particle",
            Mt: 400,
            minLifeTime: dd.life[0] / Ub,
            maxLifeTime: dd.life[1] / Ub,
            minSize: dd.size[0],
            maxSize: dd.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [Od[0], Od[1], Od[2], 1],
              maxColor: [md[0], md[1], md[2], 1]
            }, {
              timeFraction: 1,
              minColor: [Od[0], Od[1], Od[2], 0],
              maxColor: [md[0], md[1], md[2], 0]
            }],
            blendMode: SK.g.Add
          }
        }(this.style), {
          pos: vd
        }), this.particles.emitPoints(vd, Nd, qd)
      }
    }
    const Vb = new Set(["Sky Spring"]);

    function ib(dd, Od, md) {
      const Wd = dd.split("|")[0];
      return "Air" !== Od || md || ! function(dd) {
        const Od = dd.split("|")[0];
        return void 0 !== hm[Od] || Vb.has(Od)
      }(Wd) ? null : dd
    }
    class Ab {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(dd) {
        const Od = dd - this.lastTapAt >= 300;
        return this.lastTapAt = dd, Od
      }
    }
    class rb {
      constructor() {
        this.presses = new Ab, this.predicted = null
      }
      tap(dd, Od) {
        const md = this.presses.isNewPress(Od);
        return md && (this.predicted = {
          station: dd,
          at: Od
        }), md
      }
      consumeServerOpen(dd, Od) {
        const md = this.predicted;
        return !(null === md || md.station !== dd || Od - md.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Gb {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(dd, Od) {
        return dd && (this.thrustAt = Od), Od - this.thrustAt < 200
      }
    }
    const nb = [.1, .05, .1],
      Lb = {
        texture: "effect_5",
        Mt: Math.ceil(48),
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
        blendMode: SK.g.OneOne
      };
    class Pb {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Gb, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      bY(dd, Od) {
        for (const [md, Wd] of Od.baf2JetFlames) dd.isLocalPlayer(md) || (Wd ? this.lit.add(md) : this.lit.delete(md))
      }
      onAfterRender(dd, Od) {
        const md = performance.now(),
          Wd = this.hold.lit(this.selfThrusting(dd, Od), md);
        for (const [Fd, Rd] of this.flames)(Fd === Od ? Wd : this.lit.has(Fd)) || this.setEmitting(Rd, !1), Fd === Od || dd.getPositionView(Fd) ? !Rd.emitting && md - Rd.offAt >= 1300 && (Rd.particles.stop(), this.flames.delete(Fd)) : (Rd.particles.dispose(), this.flames.delete(Fd), this.lit.delete(Fd));
        Wd && this.draw(dd, Od, Od);
        for (const Fd of this.lit) this.draw(dd, Od, Fd)
      }
      dispose() {
        for (const dd of this.flames.values()) dd.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(dd, Od) {
        var md;
        const Wd = dd.getLocalPlayerMovement();
        return !!Wd && (null !== (Fd = {
          option: null !== (md = dd.getClientOption(Od, "jumpHoldThrust")) && void 0 !== md ? md : null,
          jumping: Wd.jumpHeld,
          onGround: Wd.onGround,
          alive: dd.isAlive(Od)
        }).option && Fd.option.maxUpSpeed >= 0 && Fd.jumping && !Fd.onGround && Fd.alive);
        var Fd
      }
      draw(dd, Od, md) {
        var Wd, Fd;
        const Rd = this.pos;
        if (!dd.readDrawnPosition(md, Rd)) return;
        const Xd = dd.readDrawnPosition(Od, this.camera) ? this.camera : Rd;
        if (!((Rd[0] - Xd[0]) ** 2 + (Rd[1] - Xd[1]) ** 2 + (Rd[2] - Xd[2]) ** 2 < 1600) || !dd.particlesEnabled()) {
          const dd = this.flames.get(md);
          return void(dd && this.setEmitting(dd, !1))
        }
        const Kd = null !== (Wd = this.flames.get(md)) && void 0 !== Wd ? Wd : this.create(dd, md, Rd),
          hd = null !== (Fd = dd.getDrawnHeading(md)) && void 0 !== Fd ? Fd : 0,
          vd = this.at;
        vd[0] = Rd[0] - .35 * Math.sin(hd), vd[1] = Rd[1] + 1.05, vd[2] = Rd[2] - .35 * Math.cos(hd), Kd.particles.moveTo(vd), this.setEmitting(Kd, !0)
      }
      setEmitting(dd, Od) {
        dd.emitting !== Od && (dd.emitting = Od, Od || (dd.offAt = performance.now()), dd.particles.setEmitRate(Od ? 60 : 0))
      }
      create(dd, Od, md) {
        const Wd = {
          particles: dd.createParticles(Lb, {
            pos: md,
            half: nb
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(Od, Wd), Wd
      }
    }

    function zb(dd) {
      return "Reactor Frame" === XW("reactor", dd)
    }

    function cb(dd) {
      return zm("reactor", dd) && !zb(dd) && (dd.startsWith("Reactor Glass") || dd.startsWith("Reactor Port"))
    }
    const jb = "baf2Goal";
    class Db {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [iF.j.subscribe("setDirectionArrow", (dd => {
          let {
            id: Od,
            position: md
          } = dd;
          Od === jb && (this.goal = md, this.checkedAt = -1 / 0)
        })), iF.j.subscribe("clearDirectionArrow", (dd => {
          let {
            id: Od
          } = dd;
          null !== Od && Od !== jb || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const dd of this.subs) iF.j.unsubscribe(dd)
      }
      sideOf(dd, Od, md, Wd) {
        const Fd = this.goal;
        if (!Fd) return 0;
        md - this.checkedAt > 1e3 && (this.checkedAt = md, this.open = function(dd, Od) {
          const [md, Wd, Fd] = dd.map(Math.floor);
          if (!cb(Od(md, Wd, Fd))) return null;
          for (const [Rd, Xd] of [
              [1, 0],
              [0, 1]
            ]) {
            const dd = Od(md + Rd, Wd, Fd + Xd),
              Kd = Od(md - Rd, Wd, Fd - Xd);
            if (zb(Kd) && cb(dd)) return [Rd, 0, Xd];
            if (zb(dd) && cb(Kd)) return [0 - Rd, 0, 0 - Xd]
          }
          return null
        }(Fd, ((Od, md, Wd) => dd.blockIdToBlockName(dd.getBlockId(Od, md, Wd)))));
        const Rd = this.open;
        if (!Rd) return 0;
        const Xd = Wd(Fd);
        if (Math.abs(Xd.x - Od.x) > .05 || Math.abs(Xd.y - Od.y) > .05) return 0;
        const Kd = Wd([Fd[0] + Rd[0], Fd[1], Fd[2] + Rd[2]]).x - Xd.x;
        return Math.abs(Kd) < .3 ? 0 : Kd > 0 ? 1 : -1
      }
    }
    class eb {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Db, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Aq = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Ip = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((dd => {
          for (const Od of dd) Od.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Od.target, Od.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Aq || this.clear()
        }, window.addEventListener("resize", this.Ip)
      }
      onAfterRender(dd, Od) {
        var md;
        this.api = dd, this.project = null !== (md = null === Od || void 0 === Od ? void 0 : Od.projectWorldPosToScreenPos) && void 0 !== md ? md : null, this.queued || this.Aq || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Aq = !0;
        for (const dd of this.moved.keys()) dd.style.transform = "";
        this.moved.clear();
        for (const dd of this.sideLabels.keys()) dd.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Ip)
      }
      clear() {
        for (const Rd of this.moved.keys()) Rd.isConnected || this.moved.delete(Rd);
        for (const Rd of this.sideLabels.keys()) Rd.isConnected || this.sideLabels.delete(Rd);
        if (0 === this.arrows.length) return;
        const dd = performance.now(),
          Od = dd - this.refreshedAt > 1e3;
        Od && (this.refreshedAt = dd, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const md = this.trackerBox(),
          Wd = this.barsBox(),
          Fd = this.toastBox(Od);
        (md || Wd || Fd) && Od && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Rd = 0; Rd < this.arrows.length; Rd++) {
          const Od = this.arrows[Rd];
          this.labelOffsets.set(Od, this.runLabelAside(Od, dd));
          const Xd = (md ? this.shiftLeftOf(Od, md) : 0) || this.shiftOnScreen(Od),
            Kd = Math.min(Wd ? this.liftAbove(Od, Wd, Xd) : 0, Fd ? this.liftAbove(Od, Fd, Xd) : 0),
            hd = this.moved.get(Od);
          if (0 !== Xd || 0 !== Kd) {
            const dd = 0 === Kd ? `translateX(${Xd}px)` : `translate(${Xd}px, ${Kd}px)`;
            hd !== dd && (Od.style.transform = dd, this.moved.set(Od, dd))
          } else void 0 !== hd && (Od.style.transform = "", this.moved.delete(Od))
        }
      }
      trackerBox() {
        var dd, Od;
        const md = null !== (dd = this.tracker) && void 0 !== dd && dd.isConnected ? this.tracker : null !== (Od = this.trackers[0]) && void 0 !== Od ? Od : null;
        if (md !== this.tracker && this.watch(md), this.boxStale && md) {
          var Wd, Fd, Rd;
          this.boxStale = !1;
          const dd = md.closest(".NoRoom") ? null : md.getBoundingClientRect(),
            Od = dd && dd.width > 0 ? null === (Wd = this.hud) || void 0 === Wd ? void 0 : Wd.getBoundingClientRect() : void 0,
            Xd = dd && Od ? Math.max(dd.top, Od.top) : null !== (Fd = null === dd || void 0 === dd ? void 0 : dd.top) && void 0 !== Fd ? Fd : 0,
            Kd = dd && Od ? Math.min(dd.bottom, Od.bottom) : null !== (Rd = null === dd || void 0 === dd ? void 0 : dd.bottom) && void 0 !== Rd ? Rd : 0;
          this.box = dd && dd.width > 0 && Kd > Xd ? {
            left: dd.left,
            top: Xd,
            right: dd.right,
            bottom: Kd
          } : null
        }
        return md ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var dd;
          this.barsStale = !1;
          const Od = null === (dd = this.statBars[0]) || void 0 === dd ? void 0 : dd.getBoundingClientRect();
          this.bars = Od && Od.width > 0 && Od.height > 0 ? {
            left: Od.left,
            top: Od.top,
            right: Od.right,
            bottom: Od.bottom
          } : null
        }
        return this.bars
      }
      toastBox(dd) {
        var Od;
        const md = null !== (Od = this.toasts[0]) && void 0 !== Od ? Od : null;
        if (md !== this.toastEl || dd && md) {
          this.toastEl = md;
          const dd = null === md || void 0 === md ? void 0 : md.getBoundingClientRect();
          this.toast = dd && dd.width > 0 && dd.height > 0 ? {
            left: dd.left,
            top: dd.top,
            right: dd.right,
            bottom: dd.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(dd, Od, md) {
        var Wd;
        const Fd = this.anchorOf(dd);
        if (!Fd) return 0;
        const Rd = Fd.x + md + (null !== (Wd = this.labelOffsets.get(dd)) && void 0 !== Wd ? Wd : 0),
          {
            halfWidth: Xd,
            labelled: Kd
          } = this.extentOf(dd),
          hd = Fd.y + this.em * (Kd ? 6.2 : 3);
        return hd < Od.top - 6 || Rd + Xd < Od.left - 6 || Rd - Xd > Od.right + 6 ? 0 : Od.top - 6 - hd
      }
      watch(dd) {
        var Od, md;
        this.tracker && this.sizes.unobserve(this.tracker), null === (Od = this.hud) || void 0 === Od || Od.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = dd, this.hud = null !== (md = null === dd || void 0 === dd ? void 0 : dd.closest(".Baf2QuestHud")) && void 0 !== md ? md : null, this.box = null, this.boxStale = !0, dd && this.sizes.observe(dd), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(dd, Od) {
        var md;
        const Wd = this.anchorOf(dd);
        if (!Wd) return 0;
        const {
          y: Fd
        } = Wd, Rd = Wd.x + (null !== (md = this.labelOffsets.get(dd)) && void 0 !== md ? md : 0), Xd = this.em, {
          halfWidth: Kd,
          labelled: hd
        } = this.extentOf(dd), vd = Fd - Xd, Qd = Rd + Kd;
        return Fd + Xd * (hd ? 6.2 : 3) < Od.top || vd > Od.bottom || Qd < Od.left - 6 || Rd - Kd > Od.right ? 0 : Math.max(Od.left - 6 - Qd, 6 - (Rd - Kd))
      }
      shiftOnScreen(dd) {
        var Od;
        const md = this.anchorOf(dd);
        if (!md) return 0;
        const {
          halfWidth: Wd
        } = this.extentOf(dd), Fd = md.x + (null !== (Od = this.labelOffsets.get(dd)) && void 0 !== Od ? Od : 0), Rd = Fd + Wd - (this.innerWidth - 6);
        return Rd > 0 ? -Rd : Math.max(0, 6 - (Fd - Wd))
      }
      runLabelAside(dd, Od) {
        var md;
        let Wd = null;
        for (let Xd = 0; Xd < dd.children.length; Xd++) dd.children[Xd].classList.contains("DirectionArrowLabel") && (Wd = dd.children[Xd]);
        if (!Wd) return 0;
        const Fd = dd.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(dd) : null,
          Rd = (Fd && this.api ? this.side.sideOf(this.api, {
            x: Fd.x / this.innerWidth * 100,
            y: Fd.y / this.innerHeight * 100
          }, Od, this.project) : 0) * this.halfWidthOf(Wd);
        return Rd !== (null !== (md = this.sideLabels.get(Wd)) && void 0 !== md ? md : 0) && (Wd.style.transform = 0 === Rd ? "" : `translateX(-50%) translateX(${Rd}px)`, 0 === Rd ? this.sideLabels.delete(Wd) : this.sideLabels.set(Wd, Rd)), Rd
      }
      extentOf(dd) {
        let Od = this.em,
          md = !1;
        for (let Wd = 0; Wd < dd.children.length; Wd++) {
          const Fd = dd.children[Wd],
            Rd = Fd.classList.contains("DirectionArrowLabel");
          md ||= Rd, (Rd || Fd.classList.contains("DirectionArrowDistance")) && (Od = Math.max(Od, this.halfWidthOf(Fd)))
        }
        return {
          halfWidth: Od,
          labelled: md
        }
      }
      halfWidthOf(dd) {
        let Od = this.halfWidths.get(dd);
        return void 0 === Od && (Od = dd.offsetWidth / 2, this.halfWidths.set(dd, Od), this.sizes.observe(dd), this.labels.add(dd)), Od
      }
      forgetGoneLabels() {
        for (const dd of this.labels) dd.isConnected || (this.sizes.unobserve(dd), this.halfWidths.delete(dd), this.labels.delete(dd))
      }
      anchorOf(dd) {
        const Od = dd.style.translate,
          md = this.anchors.get(dd);
        if (md && md.translate === Od && md.innerWidth === this.innerWidth && md.innerHeight === this.innerHeight) return md;
        const Wd = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Od);
        if (!Wd) return null;
        const Fd = {
          translate: Od,
          x: parseFloat(Wd[1]) / 100 * this.innerWidth,
          y: parseFloat(Wd[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(dd, Fd), Fd
      }
    }
    const Ib = "Baf2ArrowText";

    function lb(dd, Od) {
      const md = dd.rows.find((dd => dd.current));
      return Ad(dd.tutorial) && null !== md && void 0 !== md && md.item && DF(md) && Sd(md.item).includes(Od) ? md.item : null
    }
    const Cb = new class {
      constructor(dd) {
        this.select = dd, this.picks = new Map
      }
      open(dd, Od, md) {
        const Wd = lb(Od, dd);
        null !== Wd && this.xN(dd, Wd, md)
      }
      follow(dd, Od) {
        if (Kd())
          for (const [md, {
              item: Wd,
              had: Fd
            }] of this.picks) {
            const Rd = lb(dd, md);
            Rd !== Wd && (null !== Rd && Od(Wd) > Fd ? this.xN(md, Rd, Od) : this.picks.delete(md))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      xN(dd, Od, md) {
        this.picks.set(dd, {
          item: Od,
          had: md(Od)
        }), this.select(dd, Od)
      }
    }(AF.r);

    function Zb(dd) {
      return Od => {
        let md = 0;
        for (const Wd of dd.getInventoryItems())(null === Wd || void 0 === Wd ? void 0 : Wd.name) === Od && (md += null === Wd.amount ? 1 : Math.max(Wd.amount, 0));
        return md
      }
    }

    function kb(dd, Od, md, Wd) {
      dd.getClientOption(Od, "canCraft") && "inventory" !== YF.e.get("openInGameMenuName") && (Cb.open(md, Wd.get(), Zb(dd)), iF.j.lQ("toggleMenu", `inventory|${md}`))
    }
    let fb = null,
      Mb = !1;

    function dT(dd) {
      const Od = (0, pR.b)();
      dd === fb && Od === Mb || (fb = dd, Mb = Od, (0, AF.s)(function(dd, Od) {
        const md = new Map;
        for (let Wd = dd + 1; Wd <= Fd.length; Wd++) {
          const Fd = PR(Wd, dd, Od);
          if (Fd)
            for (const Od of bd(Wd).unlocks) md.set(Od, {
              ...Fd,
              stepsAway: Wd - dd
            })
        }
        return md
      }(dd, Od)))
    }

    function OT() {
      return (0, AF.x)(LR(Object.keys(Bd), iR)), () => {
        (0, AF.x)([])
      }
    }

    function mT(dd, Od, md) {
      var Wd, Fd;
      const Rd = dd.getTargetedBlock();
      if (!Rd || ! function(dd, Od, md) {
          if ("Chest" !== Od) return !1;
          const Wd = dd.split("|")[0];
          if (!om(Wd) || 0 === rO[Wd].outputSlots.length) return !1;
          const Fd = py(dd);
          return md[0] === Fd[0] && md[1] === Fd[1] && md[2] === Fd[2]
        }(md, null === (Wd = dd.NWd(Od)) || void 0 === Wd ? void 0 : Wd.name, Rd.normal)) return !1;
      const [Xd, Kd, hd] = Rd.Uy, vd = dd.getBlockId(Xd, Kd, hd);
      return 0 === vd || !0 === (null === (Fd = ud.i[vd]) || void 0 === Fd ? void 0 : Fd.canBePlacedOver)
    }
    var WT = md(37942);
    const FT = new Set(Tm.e);
    class RT {
      constructor(dd) {
        this.toasts = dd, this.lastAt = -1 / 0
      }
      onAltAction(dd, Od, md) {
        const Wd = dd.getTargetedBlock();
        if (!Wd || function(dd) {
            const Od = dd.split("|")[0];
            return om(Od) || null !== UW(Od) || Ud(Od) || Tm.e.includes(Od)
          }(md) && !FT.has(md.split("|")[0])) return;
        const Fd = dd.NWd(Od);
        if (!Fd || !FT.has(Fd.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Rd = Fd.typeObj.id,
          [Xd, Kd, hd] = Wd.Uy,
          vd = dd.getBlockId(Xd, Kd, hd),
          Qd = ud.i[vd];
        (0 === vd || null !== Qd && void 0 !== Qd && Qd.LN || null !== Qd && void 0 !== Qd && Qd.canBePlacedOver) && dd.isSolidToPlayerBlockId(Rd) && dd.canModifyBlockAt(Xd, Kd, hd) && dd.Bmd(Xd, Kd, hd, Rd) && !dd.Bmd(Xd, Kd, hd, Rd, Od) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, rd.ae)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, rd.E.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class XT {
      constructor(dd) {
        this.show = dd, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(dd, Od, md) {
        var Wd;
        if (!Od) return this.started = null, void this.gatedThisHold.clear();
        if (!dd) return void(this.started = null);
        const Fd = `${dd.x},${dd.y},${dd.z},${dd.jK}`;
        if (Fd === this.started) return;
        this.started = Fd;
        const Rd = nW(dd.y) ? Ob(dd.block, dd.jK, dd.level) : null;
        if (null === Rd || this.gatedThisHold.has(Fd)) return;
        this.gatedThisHold.add(Fd);
        const Xd = dd.block.split("|")[0];
        md - (null !== (Wd = this.hintedAt.get(Xd)) && void 0 !== Wd ? Wd : -1 / 0) < 5e3 || (this.hintedAt.set(Xd, md), this.show({
          baf2ToastText: mb(Rd, dd.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var KT = md(46);

    function hT(dd, Od) {
      const md = [...dd.baf2CoreBankPaused];
      for (const [Fd] of dd.baf2CoreBanked) md.push(Fd);
      for (const Xd of Fd) {
        for (const {
            item: dd
          }
          of Xd.cost) md.push(dd);
        for (const dd of Xd.newDeposits) md.push(dd.block);
        for (const dd of Xd.unlocks) md.push(dd, sd(dd));
        Xd.reward && md.push(Xd.reward);
        for (const {
            item: dd
          }
          of null !== (Wd = null === (Rd = Xd.charge) || void 0 === Rd ? void 0 : Rd.items) && void 0 !== Wd ? Wd : []) {
          var Wd, Rd;
          md.push(dd)
        }
      }
      return {
        message: dd,
        itemNames: Od([...new Set(md)])
      }
    }
    const vT = "baf2MultiblockGuide";
    const QT = new Map;
    const tT = function(dd, Od, md, Fd) {
      let {
        localPlayerId: Rd
      } = Fd;
      const Xd = new tK,
        Kd = new mN,
        vd = new vN,
        Qd = new KN(vd),
        td = (dd, Od) => {
          Od ? Qd.observe(dd) : Qd.unobserve(dd)
        },
        od = new XN,
        Nd = new tN(td),
        qd = dd => Nd.covers(dd),
        Hd = new sN;
      let yd;
      const bd = new iX((dd => {
          yd.sendCommand(dd)
        })),
        Td = () => {
          bd.send("baf2questbook")
        },
        pd = dd => function(dd, Od, md) {
          const Wd = {};
          for (const Fd of md) {
            let md = QT.get(Fd);
            void 0 === md && (md = dd.getItemStat(Od, Fd, "displayName"), QT.set(Fd, md)), Wd[Fd] = md
          }
          return Wd
        }(yd, Rd, dd),
        Yd = new LF(Td),
        gd = new cN((() => YF.e.get("loadingOverlayVisible"))),
        wd = new YQ(bd, Yd, gd),
        Ed = new lN,
        Jd = new RT(gd),
        xd = new XT((dd => {
          gd.show(dd, dd.baf2ToastMs)
        })),
        Bd = new Wq(td),
        Sd = new By(Bd),
        sd = new pX,
        Vd = new fy,
        Ad = new kX,
        nd = new Qq({
          read: () => !1 !== KT.k.getItem(vT),
          write: dd => {
            KT.k.setItem(vT, dd)
          }
        }),
        Ld = new Gq(nd),
        Pd = new Pq(nd),
        zd = new hH(nd, (dd => function(dd, Od) {
          const md = lK(Od.w, Od.h, Od.d),
            Wd = new Uint8Array(md);
          for (let Fd = 0; Fd < md; Fd++) {
            const md = uq(dd, OW(Od, RW(Od, Fd)));
            Wd[Fd] = null === md ? 0 : jK(md)
          }
          return Wd
        }(yd, dd)), Mq(bd)),
        cd = new vH(nd, Mq(bd)),
        jd = new XH,
        Id = (dd, Od) => {
          let [md, Wd, Fd] = dd;
          jd.answered(Od) || gd.show({
            baf2ToastText: [(0, rd.ae)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: md,
                h: Wd,
                d: Fd
              }
            }, rd.E.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      zd.onSizeNotTaken(Id), cd.onSizeNotTaken(Id);
      const ld = new NH,
        Cd = new IH(nd),
        kd = new CH,
        fd = new Xy(kd),
        Md = new by,
        OO = new Sy,
        mO = new Py(OO),
        WO = new ky(OO),
        FO = OO.lookSource(),
        RO = new ob({
          handles: dd => FO.handles(dd) || dd === Gd,
          line: (dd, Od) => dd === Gd ? function(dd, Od, md) {
            var Wd;
            const Fd = ed(null === (Wd = Od.at(md)) || void 0 === Wd ? void 0 : Wd.item);
            return null === Fd ? {
              key: `${vb}lookFarmEmpty`
            } : {
              key: dd.blockIdToBlockName(dd.getBlockId(md[0], md[1], md[2])).endsWith("|Running") ? `${vb}lookFarmRunning` : `${vb}lookFarmWaiting`,
              keys: {
                mob: Dd(Fd)
              }
            }
          }(yd, Bd, Od) : FO.line(dd, Od),
          version: () => FO.version() + Bd.version()
        }, (dd => cq(nd.all(), dd, (dd => uq(yd, dd)))), (() => Yd.get().tier)),
        XO = new sH,
        KO = new Jb,
        hO = new ub,
        vO = ub.blade(),
        QO = new Pb,
        tO = new kN,
        oO = new eb,
        qO = new rb,
        HO = new Ab;
      let yO = -1 / 0,
        bO = 0,
        TO = -1 / 0,
        pO = -1 / 0;
      const YO = () => {
          bd.send("baf2islandsclose"), pO = Date.now()
        },
        gO = [];

      function wO(dd) {
        var Od, md, Wd, Fd, Rd, Xd, hd;
        "core" === (null === (Od = Kd.get()) || void 0 === Od ? void 0 : Od.kind) && "core" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && bd.send("baf2coreclose"), "power" === (null === (md = Kd.get()) || void 0 === md ? void 0 : md.kind) && "power" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && bd.send("baf2powerclose"), "water" === (null === (Wd = Kd.get()) || void 0 === Wd ? void 0 : Wd.kind) && "water" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && bd.send(dO.w), "terminal" === (null === (Fd = Kd.get()) || void 0 === Fd ? void 0 : Fd.kind) && "terminal" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && bd.send("baf2terminalclose"), "islands" === (null === (Rd = Kd.get()) || void 0 === Rd ? void 0 : Rd.kind) && "islands" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && YO();
        const vd = OO.getStatus();
        "collider" === (null === (Xd = Kd.get()) || void 0 === Xd ? void 0 : Xd.kind) && "collider" !== (null === dd || void 0 === dd ? void 0 : dd.kind) && vd && bd.send(sh(vd, "close"));
        const Qd = dd => "reactor" === dd || "battery" === dd;
        if (Qd(null === (hd = Kd.get()) || void 0 === hd ? void 0 : hd.kind) && !Qd(null === dd || void 0 === dd ? void 0 : dd.kind)) {
          var td, od, Nd;
          const dd = "reactor" === (null === (td = Kd.get()) || void 0 === td ? void 0 : td.kind) ? null === (od = zd.get()) || void 0 === od ? void 0 : od.status.baf2RxAt : null === (Nd = cd.get()) || void 0 === Nd ? void 0 : Nd.status.baf2BatAt;
          dd && bd.send(NO(dd, "close"))
        }
        "quests" === (null === dd || void 0 === dd ? void 0 : dd.kind) && Td(), Kd.set(dd), null === dd && Ed.release()
      }

      function aO() {
        (0, pF.g)(), wO(null)
      }
      let EO = new Set,
        JO = !1;
      const UO = {
        onCreate: dd => {
          yd = dd, yd.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const Od of SO) {
            const dd = rO[Od].inputSlots ? UK(Xd) : aK(Od, Xd, sd, bd);
            gO.push((0, bF.g)(Od, dd))
          }
          gO.push((0, pF.F)((0, Wd.createElement)(Wd.Fragment, null, (0, Wd.createElement)(qN, {
            controller: Nd
          }), (0, Wd.createElement)(Xq, {
            store: Bd
          }), (0, Wd.createElement)(qb, {
            store: RO
          }), (0, Wd.createElement)(PN, {
            store: Yd
          }), (0, Wd.createElement)(eN, {
            store: gd
          }), (0, Wd.createElement)(CN, {
            store: Ed
          }), (0, Wd.createElement)(MN, {
            store: tO
          }), (0, Wd.createElement)(oH, {
            store: ld
          }), (0, Wd.createElement)(ZH, {
            store: kd
          })), {
            content: (0, Wd.createElement)(WN, {
              commands: bd,
              store: Kd,
              power: sd,
              water: Ad,
              reactor: zd,
              battery: cd,
              collider: OO,
              terminal: Vd,
              quests: Yd,
              tutorial: wd,
              close: pF.h,
              leave: () => {
                Ed.dropHeld(), (0, pF.g)()
              },
              askIslands: () => {
                pO = -1 / 0, yO = Date.now(), bO = bd.send(Zd)
              },
              openSocial: () => {
                (0, pF.g)(), YF.e.set({
                  openEverythingMenuName: qm.m.SOCIAL
                })
              },
              showCore: dd => {
                wO({
                  kind: "core",
                  core: dd
                }), bd.send("baf2corereopen")
              }
            }),
            onClose: () => {
              wO(null)
            }
          })), gO.push((0, TF.w)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              wO({
                kind: "quests"
              }), (0, pF.q)()
            }
          })), gO.push(function(dd, Od) {
            let md = null,
              Wd = () => {};
            const Fd = Od => {
              var Fd;
              let {
                tutorial: Rd,
                tutorialKnown: Xd
              } = Od;
              (null === (Fd = md) || void 0 === Fd ? void 0 : Fd.tutorial) === Rd && md.tutorialKnown === Xd || (md = {
                tutorial: Rd,
                tutorialKnown: Xd
              }, Wd = (0, TF.w)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: TQ[Rd],
                icon: {
                  kind: "icon",
                  name: bQ[Rd]
                },
                iconOnly: !0,
                disabled: !Xd,
                className: "Baf2TutorialButton",
                onClick: () => {
                  dd.next()
                }
              }))
            };
            Fd(Od.get());
            const Rd = iF.j.subscribe(rF, Fd);
            return () => {
              iF.j.unsubscribe(Rd), Wd()
            }
          }(wd, Yd)), JO = !1, gO.push((0, pR.g)((() => {
            null !== fb && dT(fb)
          }))), gO.push(OT()), gO.push(function() {
            const dd = iF.j.subscribe(rF, MF),
              Od = () => {
                if (fF) {
                  const dd = fF;
                  fF = null, (0, AF.u)(dd)
                }
              },
              md = iF.j.subscribe("toggleMenu", (dd => {
                "inventory" === (null === dd || void 0 === dd ? void 0 : dd.split("|")[0]) && Od()
              })),
              Wd = iF.j.subscribe("appManagerUpdated|openInGameMenuName", (dd => {
                "inventory" === dd && Od()
              }));
            return () => {
              iF.j.unsubscribe(dd), iF.j.unsubscribe(md), iF.j.unsubscribe(Wd)
            }
          }()), gO.push(function(dd) {
            const Od = Zb(dd),
              md = iF.j.subscribe(rF, (dd => {
                Cb.follow(dd, Od)
              }));
            return () => {
              iF.j.unsubscribe(md), Cb.clear()
            }
          }(yd)), gO.push(function() {
            const dd = document.documentElement,
              Od = (0, VN.b)(".InvenBodyRight", [], (() => {
                const Od = document.querySelector(".InvenBodyRight");
                Od && dd.style.setProperty("--baf2-backpack-width", `${Od.offsetWidth}px`)
              }));
            return () => {
              Od(), dd.style.removeProperty("--baf2-backpack-width")
            }
          }()), gO.push(function() {
            const dd = document.documentElement;
            return dd.classList.add(Ib), () => {
              dd.classList.remove(Ib)
            }
          }()), gO.push((() => {
            Qd.dispose(), vd.dispose()
          })), Hd.start(yd), gO.push((() => {
            Hd.dispose(), QO.dispose(), Sd.dispose()
          }))
        },
        onClose: () => {
          (0, AF.u)([]), fF = null, kF = new Set, fb = null, (0, AF.s)(new Map), QT.clear();
          for (const dd of gO) dd();
          Yd.dispose(), RO.dispose(), gd.dispose(), Ed.dispose(), XO.dispose(), KO.dispose(yd), Ld.dispose(yd), Pd.dispose(yd), Cd.dispose(yd), fd.dispose(yd), kd.dispose(), Md.dispose(), nd.dispose(), zd.dispose(), cd.dispose(), ld.dispose(), hO.dispose(), vO.dispose(), tO.dispose(), mO.dispose(yd), WO.dispose(yd), OO.dispose(), oO.dispose(), bd.clear()
        },
        onAfterRender: (dd, Od) => {
          var md, Wd, Fd;
          try {
            Hd.onAfterRender(Od)
          } catch (vd) {
            console.error("Error drawing BAF2 belt items", vd)
          }
          try {
            QO.onAfterRender(yd, Rd)
          } catch (vd) {
            console.error("Error drawing BAF2 jet flames", vd)
          }
          JO || (JO = !0, bd.send("baf2clientready"));
          const Xd = yd.getPositionView(Rd);
          Nd.onAfterRender(Od, Xd, od), Bd.onAfterRender(Od, Xd, od, qd), Qd.run(od), XO.onAfterRender(yd, Xd), KO.onAfterRender(yd, Xd), Sd.onAfterRender(yd, Xd), Ld.onAfterRender(yd, Xd), Pd.onAfterRender(yd, Rd, Xd), Cd.onAfterRender(yd, Rd, Xd), fd.onAfterRender(yd, Rd), Md.onAfterRender(yd, Xd), Yd.onPlayerY(Xd[1]), mO.onAfterRender(yd), WO.onAfterRender(yd, Rd, Xd);
          const hd = yd.getTargetedBlock();
          RO.onAfterRender(yd, Rd, null !== (md = null === hd || void 0 === hd ? void 0 : hd.K9) && void 0 !== md ? md : 0, null !== (Wd = null === hd || void 0 === hd ? void 0 : hd.position) && void 0 !== Wd ? Wd : null), oO.onAfterRender(yd, Od), xd.onMining(function(dd, Od) {
            var md, Wd;
            const Fd = dd.getMiningBlock();
            if (!Fd) return null;
            const Rd = (0, ud.g)(dd.getBlockId(Fd[0], Fd[1], Fd[2])),
              Xd = null !== (md = null === (Wd = dd.NWd(Od)) || void 0 === Wd ? void 0 : Wd.name) && void 0 !== md ? md : null,
              Kd = dd.getItemStat(Od, Rd.split("|")[0], "harvestLevel");
            return {
              block: Rd,
              x: Fd[0],
              y: Fd[1],
              z: Fd[2],
              jK: Xd,
              level: Kd
            }
          }(yd, Rd), yd.isMining(), performance.now()), "dropMap" === (null === (Fd = Kd.get()) || void 0 === Fd ? void 0 : Fd.kind) && nW(Xd[1]) && aO()
        },
        onPlayerChangeBlock: (dd, Od, md, Wd, Fd, Xd) => {
          dd === Rd && function(dd, Od, md, Wd, Fd, Rd, Xd) {
            const Kd = ib(Rd, Xd, dd.isPlayerCrouching(Od));
            if (null === Kd) return;
            if (dd.nS(md, Wd, Fd, Kd), !dd.getClientOption(Od, "canPickUpItems")) return;
            const hd = hm[Kd.split("|")[0]];
            var vd, Qd, td;
            void 0 !== hd && (vd = dd.getInventoryItems(), Qd = hd, td = tq.i.maxItemStackSize, dd.getInventoryFreeSlotCount(Od) > 0 || vd.some((dd => null !== dd && dd.name === Qd && null !== dd.amount && dd.amount < td))) && dd.playSound(Od, (0, WT.f)("pickUp"), .5, 1)
          }(yd, dd, Od, md, Wd, Fd, Xd)
        },
        onPlayerAltAction: (dd, Od, md, Wd, Fd) => {
          var Xd, Kd;
          if (!yd.getClientOption(Rd, "canPickUpItems")) return;
          const hd = null !== (Xd = null === (Kd = yd.NWd(Rd)) || void 0 === Kd ? void 0 : Kd.name) && void 0 !== Xd ? Xd : null,
            vd = function(dd, Od) {
              const md = dd.split("|")[0];
              return Ud(md) && Od !== hF && "Sky Pack" !== Od ? md : null
            }(Fd, hd);
          if (null !== vd) return void(qO.tap(vd, performance.now()) && kb(yd, Rd, vd, Yd));
          if (!cW(hd)) return;
          const Qd = HO.isNewPress(performance.now()),
            td = function(dd, Od, md) {
              return !cW(Od) || md ? null : fW(dd)
            }(Fd, hd, yd.isPlayerCrouching(Rd));
          null !== td && Qd && yd.nS(Od, md, Wd, td)
        },
        onPlayerAttemptAltAction: (dd, Od, md, Wd, Fd) => {
          if (function(dd, Od, md, Wd, Fd) {
              "Workbench" === Wd.split("|")[0] && dd.getClientOption(md, "canCraft") && (Cb.open("Workbench", Fd.get(), Zb(dd)), Od.send("baf2station Workbench"))
            }(yd, bd, Rd, Fd, Yd), mT(yd, Rd, Fd)) return "preventAction";
          Jd.onAltAction(yd, Rd, Fd)
        },
        onReceivedMessageFromServer: (dd, Od) => {
          if ("baf2MachineStatus" === dd) {
            var md, Wd, Fd, vd, Qd, td, od, qd, Td, wd, Jd, Ud, xd, Sd, ud, rd;
            const dd = Od,
              Rd = dd.baf2MachineTaught;
            Xd.set(dd.baf2MachinePos, {
              status: dd.baf2MachineStatus,
              power: null !== (md = dd.baf2MachinePower) && void 0 !== md ? md : null,
              opLeftMs: null !== (Wd = dd.baf2MachineOpLeftMs) && void 0 !== Wd ? Wd : null,
              dug: dd.baf2MachineYield ? {
                item: dd.baf2MachineYield,
                name: pd([dd.baf2MachineYield])[dd.baf2MachineYield]
              } : null,
              powerCap: null !== (Fd = dd.baf2MachinePowerCap) && void 0 !== Fd ? Fd : null,
              powerRates: null !== (vd = dd.baf2MachinePowerRates) && void 0 !== vd ? vd : null,
              coupled: !0 === dd.baf2MachineCoupled,
              couplerLevel: null !== (Qd = dd.baf2MachineCoupler) && void 0 !== Qd ? Qd : 1,
              taught: Rd,
              taughtName: Rd ? pd([Rd])[Rd] : null,
              tier: null !== (td = dd.baf2MachineTier) && void 0 !== td ? td : null,
              input: null !== (od = dd.baf2MachineInput) && void 0 !== od ? od : null,
              inertCoupler: null !== (qd = dd.baf2MachineInertCoupler) && void 0 !== qd ? qd : null,
              inputShort: null !== (Td = dd.baf2MachineInputShort) && void 0 !== Td ? Td : null,
              field: null !== (wd = dd.baf2MachineField) && void 0 !== wd ? wd : null,
              noSeeds: !0 === dd.baf2MachineNoSeeds,
              fuelFed: !0 === dd.baf2MachineFuelFed,
              fuelFeeds: !0 === dd.baf2MachineFuelFeeds,
              coreFull: !0 === dd.baf2MachineCoreFull,
              waterUnpowered: !0 === dd.baf2MachineWaterUnpowered,
              powerShort: !0 === dd.baf2MachinePowerShort,
              powerWait: !0 === dd.baf2MachinePowerWait,
              reactorPowered: !0 === dd.baf2MachineReactorPowered,
              fuelLeftMs: null !== (Jd = dd.baf2MachineFuelLeftMs) && void 0 !== Jd ? Jd : null,
              burning: null !== (Ud = dd.baf2MachineBurning) && void 0 !== Ud ? Ud : null,
              fuelKeep: null !== (xd = dd.baf2MachineFuelKeep) && void 0 !== xd ? xd : null,
              water: null !== (Sd = dd.baf2MachineWater) && void 0 !== Sd ? Sd : null,
              farm: null !== (ud = dd.baf2MachineFarm) && void 0 !== ud ? ud : null,
              cryo: null !== (rd = dd.baf2MachineCryo) && void 0 !== rd ? rd : null
            })
          } else if ("baf2StationOpen" === dd) {
            const dd = Od.baf2Station;
            qO.consumeServerOpen(dd, performance.now()) || kb(yd, Rd, dd, Yd)
          } else if ("baf2Power" === dd) {
            const dd = Od;
            sd.set(dd), dd.baf2PowerOpen && (wO({
              kind: "power"
            }), (0, pF.q)())
          } else if (dd === dO.y) {
            const dd = Od;
            Ad.set(dd), dd.baf2WaterOpen && (wO({
              kind: "water"
            }), (0, pF.q)())
          } else if ("baf2RxPlans" === dd) {
            var Gd, Ld, Pd;
            const dd = Od;
            nd.bY(dd);
            const md = new Set(dd.baf2RxPlanList.map((dd => {
              let [Od, md, Wd] = dd;
              return `${Od},${md},${Wd}`
            })));
            ld.retain(md);
            const Wd = null === (Gd = Kd.get()) || void 0 === Gd ? void 0 : Gd.kind,
              Fd = "reactor" === Wd ? null === (Ld = zd.get()) || void 0 === Ld ? void 0 : Ld.status.baf2RxAt : "battery" === Wd ? null === (Pd = cd.get()) || void 0 === Pd ? void 0 : Pd.status.baf2BatAt : void 0;
            Fd && EO.has(Fd.join(",")) && !md.has(Fd.join(",")) && aO(), EO = md
          } else if ("baf2RxStatus" === dd) {
            const dd = Od;
            zd.set(dd), dd.baf2RxOpen && (wO({
              kind: "reactor"
            }), (0, pF.q)())
          } else if ("baf2BatStatus" === dd) {
            const dd = Od;
            cd.set(dd), dd.baf2BatOpen && (wO({
              kind: "battery"
            }), (0, pF.q)())
          } else if ("baf2RxAlarm" === dd) ld.bY(Od);
          else if ("baf2Bomb" === dd) kd.bY(Od, yd.getPositionView(Rd));
          else if ("baf2Fallout" === dd) Md.bY(Od);
          else if ("baf2ColBeams" === dd) OO.onBeams(Od);
          else if ("baf2ColStatus" === dd) {
            const dd = Od;
            var Dd, ed;
            if (OO.onStatus(dd), dd.baf2ColOpen) OO.onOpen(null !== (Dd = null === (ed = yd.NWd(Rd)) || void 0 === ed ? void 0 : ed.name) && void 0 !== Dd ? Dd : null), wO({
              kind: "collider"
            }), (0, pF.q)()
          } else if ("baf2Terminal" === dd) {
            const dd = Od;
            var Id;
            if (Vd.apply(dd)) dd.baf2TermReset && (wO({
              kind: "terminal"
            }), (0, pF.q)());
            else "terminal" === (null === (Id = Kd.get()) || void 0 === Id ? void 0 : Id.kind) && (Kd.set(null), (0, pF.g)())
          } else if ("baf2Core" === dd) {
            var Cd;
            const dd = Od;
            if (hd(!0 === dd.baf2CoreNuclear), function(dd, Od) {
                return "core" === (null === dd || void 0 === dd ? void 0 : dd.kind) && Od.baf2CoreTier > dd.core.message.baf2CoreTier
              }(Kd.get(), dd)) return void(0, pF.g)();
            if (dd.baf2CoreRefresh && "core" !== (null === (Cd = Kd.get()) || void 0 === Cd ? void 0 : Cd.kind)) return;
            wO({
              kind: "core",
              core: hT(dd, pd)
            }), dd.baf2CoreRefresh || (0, pF.q)()
          } else if ("baf2WrenchUndo" === dd) {
            const {
              baf2WrenchPos: dd,
              baf2WrenchBlock: md
            } = Od;
            yd.nS(dd[0], dd[1], dd[2], md)
          } else if ("baf2Toast" === dd) {
            const dd = Od;
            jd.heard(performance.now(), dd.baf2ToastMs), gd.show(dd)
          } else if ("baf2Area" === dd) Ed.arrive(Od, null !== Kd.get());
          else if ("baf2Quest" === dd) {
            const dd = Od;
            hd(!0 === dd.baf2QuestNuclear), Yd.set(dd, function(dd, Od) {
              var md, Wd, Fd, Rd, Xd;
              const Kd = [];
              for (const [, , Qd, , , , , , td, od] of dd.baf2QuestSteps) null !== Qd && Kd.push(Qd), Kd.push(...null !== td && void 0 !== td ? td : [], ...null !== od && void 0 !== od ? od : []);
              dd.baf2QuestReward && Kd.push(dd.baf2QuestReward);
              const hd = null === (md = dd.baf2QuestSide) || void 0 === md ? void 0 : md[2][2];
              hd && Kd.push(hd), Kd.push(...null !== (Wd = null === (Fd = dd.baf2QuestSide) || void 0 === Fd ? void 0 : Fd[2][8]) && void 0 !== Wd ? Wd : [], ...null !== (Rd = null === (Xd = dd.baf2QuestSide) || void 0 === Xd ? void 0 : Xd[2][9]) && void 0 !== Rd ? Rd : []);
              for (const [Qd] of null !== (vd = dd.baf2QuestAlso) && void 0 !== vd ? vd : []) {
                var vd;
                Kd.push(Qd)
              }
              return Od(Kd)
            }(dd, pd)), dT(dd.baf2QuestTier)
          } else if ("baf2Route" === dd) ! function(dd, Od) {
            let {
              baf2RouteCells: md,
              baf2RouteInto: Wd
            } = Od;
            0 !== md.length && Wd ? dd.setRouteChevrons({
              cells: md.map(((dd, Od) => {
                const [Fd, , Rd] = function(dd, Od, md) {
                  const Wd = md + 1 < dd.length ? dd[md + 1] : Od;
                  return [Wd[0] - dd[md][0], 0, Wd[2] - dd[md][2]]
                }(md, Wd, Od);
                return {
                  pos: dd,
                  way: [Fd, Rd]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : dd.setRouteChevrons(null)
          }(yd, Od);
          else if ("baf2QuestBook" === dd) Yd.setBook(Od);
          else if ("baf2Stalls" === dd) Nd.set(Od.baf2StallCells);
          else if (dd === Tm.q) Hd.onMoves(Od);
          else if (dd === Tm.k) Hd.onLines(Od);
          else if ("baf2Labels" === dd) Bd.bY(Od);
          else if ("baf2DropMap" === dd) wO({
            kind: "dropMap",
            dropMap: Od
          }), (0, pF.q)();
          else if ("baf2Islands" === dd) {
            var fd, mO;
            const dd = Od;
            if (bd.syncIslandEdits(dd.baf2IslandsAnswered), !dd.baf2IslandsOpen && "islands" !== (null === (fd = Kd.get()) || void 0 === fd ? void 0 : fd.kind)) return;
            if (dd.baf2IslandsOpen) {
              var WO, FO;
              const Od = YF.e.get("openEverythingMenuName"),
                md = bd.sent() >= bO,
                Wd = "other" !== (HO = {
                  askedAtMs: yO,
                  askSent: md,
                  reaskedAtMs: TO,
                  nowMs: Date.now(),
                  panel: null !== (WO = null === (FO = Kd.get()) || void 0 === FO ? void 0 : FO.kind) && void 0 !== WO ? WO : null,
                  inGameMenu: YF.e.get("openInGameMenuName"),
                  everythingMenu: null === Od ? null : Od === qm.m.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== dd.baf2IslandsFocusInvite
                }).everythingMenu && (!!HO.focusInvite || "islands" === HO.panel && "clientGame" === HO.inGameMenu || !(HO.nowMs - HO.reaskedAtMs < Uv) && (HO.askSent && HO.nowMs - HO.askedAtMs < Uv ? "core" === HO.panel && "clientGame" === HO.inGameMenu && null === HO.everythingMenu : "shop" === HO.everythingMenu || null === HO.inGameMenu));
              if (md && (yO = -1 / 0), TO = -1 / 0, !Wd) return void YO()
            }
            const md = (XO = dd.baf2IslandsOpen, KO = "islands" === (null === (mO = Kd.get()) || void 0 === mO ? void 0 : mO.kind), oO = pO, NO = Date.now(), XO && !KO && NO - oO < Uv);
            wO({
              kind: "islands",
              islands: dd,
              arrivedAtMs: Date.now(),
              backToCore: xv(Kd.get())
            }), md && (pO = -1 / 0, TO = Date.now(), bd.send(Zd)), dd.baf2IslandsOpen && ("clientGame" !== YF.e.get("openInGameMenuName") && (0, gF.g)(), (0, pF.q)())
          } else if ("baf2CoopTransfer" === dd) {
            var RO;
            const dd = Od;
            dd.baf2TransferOn ? (wO({
              kind: "transfer",
              transfer: dd,
              arrivedAtMs: Date.now()
            }), (0, pF.q)()) : "transfer" === (null === (RO = Kd.get()) || void 0 === RO ? void 0 : RO.kind) && (0, pF.g)()
          } else "baf2IslandLeft" === dd ? (Ed.dropHeld(), null !== Kd.get() && aO(), "inventory" === YF.e.get("openInGameMenuName") && (0, gF.g)()) : "baf2Arc" === dd ? hO.bY(yd, Od) : "baf2Blade" === dd ? vO.onBlade(yd, Od) : "baf2JetFlame" === dd ? QO.bY(yd, Od) : "baf2GearPower" === dd && tO.bY(Od);
          var XO, KO, oO, NO, HO
        }
      };
      return UO
    }
  },
  40023: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      d: () => Kd
    });
    var Wd = md(405),
      Fd = md(35549),
      Rd = md(4509);

    function Xd(dd) {
      const Od = (0, Rd.d)(dd);
      return (0, Wd.Kb)(dd, void 0 === Od ? void 0 : (0, Fd.displayNameOf)(Od))
    }

    function Kd(dd, Od) {
      return dd(Xd(Od))
    }
  },
  40057: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      const Wd = new Set,
        Fd = new ResizeObserver(md),
        Rd = () => {
          const Od = new Set(document.querySelectorAll(dd));
          let Rd = !1;
          for (const dd of Wd) Od.has(dd) || (Fd.unobserve(dd), Wd.delete(dd), Rd = !0);
          for (const dd of Od) Wd.has(dd) || (Fd.observe(dd), Xd.observe(dd, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Wd.add(dd));
          Rd && md()
        },
        Xd = new MutationObserver((Od => {
          Od.some((dd => "attributes" === dd.type)) && md(), Od.some((Od => function(dd, Od, md) {
            if ("childList" !== dd.type) return !1;
            for (const Wd of dd.addedNodes)
              if (Wd instanceof Element && (Wd.matches(Od) || Wd.querySelector(Od))) return !0;
            for (const Wd of dd.removedNodes)
              if (Wd instanceof Element)
                for (const dd of md)
                  if (Wd.contains(dd)) return !0;
            return !1
          }(Od, dd, Wd))) && Rd()
        }));
      Xd.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Kd of Od) Fd.observe(Kd);
      return window.addEventListener("resize", md), Rd(), md(), () => {
        Fd.disconnect(), Xd.disconnect(), window.removeEventListener("resize", md)
      }
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  40036: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd
    });
    var Wd = md(40028);
    const Fd = 5,
      Rd = [0, 0, 0],
      Xd = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Kd(dd, Od, md, Kd, hd, vd) {
      let [Qd, td, od] = Kd;
      const Nd = (Qd + .5 - md[0]) ** 2 + (td - md[1]) ** 2 + (od + .5 - md[2]) ** 2;
      let qd = null;
      Nd <= vd ** 2 && (Rd[0] = Qd + .5, Rd[1] = td + hd, Rd[2] = od + .5, qd = Od.projectWorldPosToViewport(Rd));
      const Hd = null !== qd && qd.x > -Fd && qd.x < 100 + Fd && qd.y > -Fd && qd.y < 100 + Fd;
      return (0, Wd.h)(dd, !Hd), Hd ? (Xd.x = qd.x, Xd.y = qd.y, Xd.distSq = Nd, Xd) : null
    }
  },
  40026: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Kd,
      g: () => Xd
    });
    var Wd = md(3505);
    const Fd = "(max-height: 420px), (max-width: 650px)";

    function Rd() {
      return (0, Wd.d)(Fd)
    }

    function Xd(dd) {
      return (0, Wd.j)(Fd, dd)
    }

    function Kd() {
      return (0, Wd.f)(Fd)
    }
  },
  40028: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      h: () => Rd
    });
    const Wd = new WeakMap;

    function Fd(dd) {
      let Od = Wd.get(dd);
      return Od || (Od = {
        hidden: dd.hidden,
        x: NaN,
        y: NaN
      }, Wd.set(dd, Od)), Od
    }

    function Rd(dd, Od) {
      const md = Fd(dd);
      md.hidden !== Od && (md.hidden = Od, dd.hidden = Od)
    }

    function Xd(dd, Od, md) {
      const Wd = Fd(dd);
      Wd.x === Od && Wd.y === md || (Wd.x = Od, Wd.y = md, dd.style.translate = `${Od}vw ${md}vh`)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);