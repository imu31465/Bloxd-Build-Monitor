export const id = 220;
export const ids = [220];
export const modules = {
  37042: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(37045);
    const Ic = [0, 0, 0];
    class rB {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ic;
        this.pool = cB, this.origin = Bc, this.count = 0, this.free = []
      }
      take() {
        var cB;
        const Bc = null !== (cB = this.free.pop()) && void 0 !== cB ? cB : this.count++;
        return Bc >= this.pool.Qc && this.pool.grow(Math.max(2 * this.pool.Qc, Bc + 1)), this.hide(Bc), Bc
      }
      release(cB) {
        this.hide(cB), this.free.push(cB)
      }
      write(cB, Bc, nc, Ic) {
        const {
          records: rB
        } = this.pool, {
          origin: uc
        } = this, sc = cB * Vc.c;
        rB[sc] = Bc - uc[0], rB[sc + 1] = nc - uc[1], rB[sc + 2] = Ic - uc[2], rB[sc + Vc.g] = 0, this.pool.markDirty(cB)
      }
      hide(cB) {
        this.pool.records[cB * Vc.c + Vc.g] = 1, this.pool.markDirty(cB)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class uc {
      constructor(cB, Bc, nc) {
        this.api = cB, this.model = Bc, this.initialCapacity = nc, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(cB) {
        let Bc = this.kinds.get(cB);
        if (void 0 === Bc) {
          const nc = this.api.createInstancePool({
            ...this.model,
            item: cB
          }, this.initialCapacity);
          null === nc || void 0 === nc || nc.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Bc = nc && new rB(nc, this.origin), this.kinds.set(cB, Bc)
        }
        return Bc
      }
      follow(cB) {
        const {
          origin: Bc
        } = this;
        if (Math.abs(cB[0] - Bc[0]) <= 512 && Math.abs(cB[1] - Bc[1]) <= 512 && Math.abs(cB[2] - Bc[2]) <= 512) return !1;
        Bc[0] = Math.floor(cB[0]), Bc[1] = Math.floor(cB[1]), Bc[2] = Math.floor(cB[2]);
        for (const nc of this.kinds.values()) null === nc || void 0 === nc || nc.pool.setOrigin(Bc[0], Bc[1], Bc[2]);
        return !0
      }
      commit() {
        for (const cB of this.kinds.values()) null === cB || void 0 === cB || cB.commit()
      }
      dispose() {
        for (const cB of this.kinds.values()) null === cB || void 0 === cB || cB.dispose();
        this.kinds.clear()
      }
    }
  },
  37035: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => uy
    });
    var Vc = nc(73);
    const Ic = [{
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
        unlocks: ["Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool", "Nova Coupler", "Pocket Terminal", "Atomic Bomb", "Nova Wrench"],
        reward: "Deposit Seed (Uranium)"
      }],
      rB = 10;
    let uc = !0;

    function sc() {
      return uc
    }

    function Mc(cB) {
      uc = cB
    }
    const Pc = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function qB() {
      return uc ? Ic.length : rB
    }

    function Oc(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = Ic[cB - 1]) || void 0 === nc ? void 0 : nc.reactorTier) && void 0 !== Bc ? Bc : 0
    }

    function Tc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Oc(cB) > 0;
      return nc && !uc ? "hidden" : cB <= Bc ? "open" : nc ? Bc < 5 ? "hidden" : Bc < rB ? "teaser" : "locked" : "locked"
    }

    function fc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Vc,
        n: Ic
      } = tB(cB);
      return {
        key: Bc[Vc],
        params: {
          [Vc]: nc ? String(Ic) : Ic
        }
      }
    }
    const mB = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function ec(cB, Bc) {
      return Oc(cB) > 0 && Bc < rB
    }

    function tB(cB) {
      const Bc = Oc(cB);
      if (Bc > 0) return {
        kind: "atomic",
        n: Bc,
        short: `A${Bc}`
      };
      const nc = function(cB) {
        return cB >= 6 && cB <= 10 ? cB - 6 + 1 : 0
      }(cB);
      return nc > 0 ? {
        kind: "stage",
        n: nc,
        short: `S${nc}`
      } : {
        kind: "tier",
        n: cB,
        short: String(cB)
      }
    }

    function Sc(cB) {
      return Ic[Math.max(1, Math.min(cB, Ic.length)) - 1]
    }

    function yB(cB, Bc) {
      return cB < Bc ? function(cB) {
        var Bc;
        return null !== (Bc = Ic[cB]) && void 0 !== Bc ? Bc : null
      }(cB) : null
    }
    const zB = "baf2coresubmit",
      pc = "baf2corebankpause",
      hc = "baf2coredeposit",
      aB = "baf2corechargepause";

    function lc(cB) {
      var Bc;
      return null !== (Bc = cB.baf2CoreOpen) && void 0 !== Bc ? Bc : rB
    }
    const Yc = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function Lc(cB) {
      return Yc.includes(cB)
    }
    const gB = (cB, Bc) => Bc.map((Bc => [Bc, [cB]])),
      Uc = Object.fromEntries([...gB("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...gB("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...gB("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...gB("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...gB("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...gB("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...gB("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...gB("Parts Bench", ["Focus Lens"]), ...gB("Machine Bench", ["Laser", "Collider"]), ...gB("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb"]), ...gB("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...gB("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...gB("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...gB("Tool Bench", ["Mob Cage"]), ...gB("Tool Bench", ["Pocket Terminal"]), ...gB("Tool Bench", ["Comet Beacon"]), ...gB("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function bB(cB) {
      var Bc;
      return null !== (Bc = Uc[cB]) && void 0 !== Bc ? Bc : ["Workbench"]
    }

    function Zc(cB) {
      return bB(cB)[0]
    }
    Ic.slice(1).map(((cB, Bc) => `Core Tier ${Bc+2}`));
    var Qc = nc(8235);
    const Cc = ["on", "hud", "off"];

    function vB(cB) {
      return "on" === cB
    }
    var Dc = nc(302);
    const Nc = "Mob Farm",
      Ec = {
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
      oc = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Wc = {
        1: 20,
        2: 60,
        3: 120
      },
      wc = "baf2farmvoid",
      kB = "Caged ",
      Xc = " Spawner Block";

    function Hc(cB) {
      return `lifeform:${(0,Dc.Nd)(cB)}`
    }

    function Fc(cB) {
      if (!cB) return null;
      if (cB.startsWith(kB)) {
        const Bc = cB.slice(6);
        return oc.includes(Bc) ? Bc : null
      }
      if (cB.endsWith(Xc)) {
        const Bc = cB.slice(0, -14);
        return void 0 !== Ec[Bc] ? Bc : null
      }
      return null
    }

    function Jc(cB) {
      return !0 === cB.mobFarm
    }

    function jB(cB, Bc) {
      return Wc[Ec[Bc]] * cB.opMs / 1e3
    }
    const Rc = new Map;
    const iB = "baf2islands",
      Kc = "baf2islandnew";

    function xB(cB) {
      const Bc = Ic.findIndex((Bc => Bc.unlocks.includes(cB)));
      return Bc < 0 ? 1 : Bc + 1
    }

    function dc(cB) {
      return Math.floor(cB).toLocaleString("en-US")
    }
    var Ac = nc(36978);
    const Gc = "baf2terminaltake",
      cn = ["one", "stack", "fill"];

    function BB(cB, Bc, nc) {
      return `${Gc} ${cB} ${Bc} ${nc}`
    }

    function nB(cB) {
      const [Bc, nc, ...Vc] = cB.trim().split(" "), Ic = Number(Bc), rB = function(cB) {
        if (cn.includes(cB)) return cB;
        const Bc = Number(cB);
        return /^\d+$/.test(cB) && Number.isSafeInteger(Bc) && Bc > 0 ? Bc : null
      }(null !== nc && void 0 !== nc ? nc : "");
      return !Number.isSafeInteger(Ic) || Ic <= 0 || null === rB || 0 === Vc.length ? null : {
        seq: Ic,
        mode: rB,
        item: Vc.join(" ")
      }
    }
    const VB = "baf2rx";

    function IB(cB, Bc) {
      for (var nc = arguments.length, Vc = new Array(nc > 2 ? nc - 2 : 0), Ic = 2; Ic < nc; Ic++) Vc[Ic - 2] = arguments[Ic];
      return [VB, cB[0], cB[1], cB[2], Bc, ...Vc].join(" ")
    }
    const rn = 2,
      uB = 4,
      sB = 8,
      MB = 16,
      PB = 32,
      qn = 64,
      OB = 128,
      TB = 256,
      fB = 512,
      mn = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      eB = [{
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
    const tn = "Biomass",
      SB = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function yn(cB) {
      return {
        input: tn,
        inputAmount: 1,
        output: cB,
        outputAmount: 1
      }
    }
    const zn = "baf2synth",
      pB = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      hB = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      an = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      lB = function(cB, Bc) {
        return {
          input: cB,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: Bc,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      YB = function(cB, Bc) {
        return {
          ...lB(cB, Bc, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      LB = {
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
          recipes: [lB("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), lB("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), lB("Raw Gold", "Gold Grit", 2), lB("Messy Stone", "Sand"), lB("Gravel", "Sand"), lB("Raw Voltite", "Voltite Dust", 2), lB("Moonstone", "Moonstone Dust", 4), lB("Wheat Seeds", "Fertiliser"), lB("Raw Uranium", "Uranium Grit", 2), YB("Mossy Messy Stone", "Sand"), ...hB.map((cB => YB(cB, "Biomass", 2)))],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [lB("Iron Grit", "Iron Bar"), lB("Copper Grit", "Copper Bar"), lB("Gold Grit", "Gold Bar"), lB("Raw Iron", "Iron Bar"), lB("Raw Copper", "Copper Bar"), lB("Raw Gold", "Gold Bar"), lB("Sand", "Glass"), lB("Messy Stone", "Stone"), ...Dc.qc.map((cB => lB(cB, "Charcoal", 1, 4))), lB("Wheat", "Bread", 1, 2), ...hB.map(((cB, Bc) => YB(cB, an[Bc])))],
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
          recipes: [lB("Iron Bar", "Iron Plate"), lB("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [lB("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [lB("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [lB("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), lB("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), lB("Raw Gold", "Gold Grit", 3), lB("Raw Voltite", "Voltite Dust", 3), lB("Messy Stone", "Sand", 2), lB("Gravel", "Sand", 2), lB("Moonstone", "Moonstone Dust", 6), lB("Raw Uranium", "Uranium Grit", 3)],
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
          table: mn
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [lB("Coal", "Diamond", 1, 24), lB("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Ac.i
      },
      gn = {
        Crusher: [lB("Spent Pellet", "Glow Dust"), lB("Wheat Seeds", "Biomass"), lB("Wheat", "Biomass"), lB("Dead Bush", "Biomass"), lB("Dusk Moss", "Biomass"), lB("Rotten Flesh", "Biomass"), lB("Bone", "Biomass", 2)],
        "Shatter Mill": [lB("Spent Pellet", "Glow Dust"), lB("Wheat Seeds", "Biomass"), lB("Wheat", "Biomass"), lB("Dead Bush", "Biomass"), lB("Dusk Moss", "Biomass"), lB("Rotten Flesh", "Biomass"), lB("Bone", "Biomass", 2), ...Dc.qc.map((cB => lB(cB, "Biomass")))],
        Smelter: [lB("Biomass", "Fertiliser", 2)],
        Press: [lB("Coal", "Graphite", 1, 4)]
      },
      UB = "Power Coupler",
      bn = "Advanced Coupler",
      ZB = "Nova Coupler",
      QB = [{
        item: UB,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: bn,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: ZB,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const CB = new Map;

    function vn(cB) {
      var Bc, nc;
      return null !== (Bc = null !== (nc = cB.fuelSlot) && void 0 !== nc ? nc : cB.couplerSlot) && void 0 !== Bc ? Bc : null
    }

    function DB(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!cB.couplable) throw new Error(`${cB.kind} takes no Power Coupler`);
      let nc = CB.get(cB);
      nc || (nc = [], CB.set(cB, nc));
      let Vc = nc[Bc];
      if (!Vc) {
        var Ic;
        const {
          divisor: rB,
          powerPerS: uc
        } = QB[Bc - 1], sc = cB.opMs / rB, Mc = void 0 !== cB.fluidMade || void 0 !== cB.cryoMade ? cB.powerPerOp : uc * sc / 1e3;
        Vc = {
          ...cB,
          fuelSlot: null,
          couplerSlot: null !== (Ic = vn(cB)) && void 0 !== Ic ? Ic : void 0,
          opMs: sc,
          powerPerOp: Mc,
          coupled: !0
        }, Bc > 1 && (Vc = {
          ...Vc,
          couplerLevel: Bc
        }), nc[Bc] = Vc
      }
      return Vc
    }
    const NB = new Map;
    const EB = new Map;

    function oB(cB, Bc) {
      if (null === Bc || (nc = Bc, !SB.includes(nc))) return cB;
      var nc;
      let Vc = EB.get(Bc);
      return Vc || (Vc = {
        ...cB,
        recipes: [yn(Bc)]
      }, EB.set(Bc, Vc)), Vc
    }

    function WB(cB) {
      return !0 === cB.synth
    }
    const wB = (cB, Bc, nc, Vc) => ({
        output: cB,
        outputAmount: Bc,
        tier: nc,
        inputs: Vc.map((cB => {
          let [Bc, nc] = cB;
          return {
            item: Bc,
            amount: nc
          }
        }))
      }),
      kn = Object.fromEntries([wB("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), wB("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), wB("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), wB("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), wB("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), wB("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), wB("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), wB("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), wB("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), wB("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), wB("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), wB("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), wB("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), wB("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), wB("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), wB("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), wB("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), wB("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), wB("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), wB("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), wB("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), wB("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), wB("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), wB("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), wB("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), wB("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), wB("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), wB("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), wB("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), wB("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((cB => [cB.output, cB]))),
      XB = new Map;

    function HB(cB, Bc) {
      let nc = LB[cB];
      if (Bc.atomic && (nc = function(cB) {
          const Bc = gn[cB.kind];
          if (!Bc) return cB;
          let nc = NB.get(cB.kind);
          if (!nc) {
            const Vc = new Set(Bc.map((cB => cB.input))),
              Ic = cB.recipes.filter((cB => !Vc.has(cB.input)));
            nc = {
              ...cB,
              recipes: [...Ic, ...Bc]
            }, NB.set(cB.kind, nc)
          }
          return nc
        }(nc)), nc.synth) return oB(nc, Bc.taught);
      if (Bc.coupled && nc.couplable) return DB(nc, Bc.level);
      const Vc = nc.inputSlots && null !== Bc.taught ? kn[Bc.taught] : void 0;
      if (!Vc) return nc;
      const Ic = `${cB}|${Vc.output}`;
      let rB = XB.get(Ic);
      return rB || (rB = {
        ...nc,
        bench: Vc
      }, XB.set(Ic, rB)), rB
    }
    const FB = ["Diamond", "Moonstone"];

    function JB(cB) {
      return new Set(cB.flatMap((cB => cB.bonus ? [cB.output, cB.bonus.item] : [cB.output])).filter((cB => !FB.includes(cB))))
    }
    const jn = Object.values(LB).flatMap((cB => cB.recipes));
    JB(jn.filter((cB => !0 !== cB.nuclear))), JB([...jn.filter((cB => !0 === cB.nuclear)), ...Object.values(gn).flat()]);

    function RB(cB) {
      return null === cB.inputSlot && void 0 === cB.inputSlots && void 0 === cB.powerMade && void 0 === cB.fluidMade && !cB.treeCutter && void 0 === cB.table
    }

    function KB(cB) {
      return !0 === cB.treeCutter
    }
    const xn = ["Voltite Cell"];

    function dB(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = cB.fuels) || void 0 === nc ? void 0 : nc.some((cB => xn.includes(cB)))) && void 0 !== Bc && Bc
    }
    const AB = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Dc.qc.map((cB => [cB, 8e3]))),
        ...Object.fromEntries(Dc.Tc.map((cB => [cB, 2e3]))),
        "Voltite Cell": 12e4
      },
      GB = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      cV = {
        "Uranium Deposit": 4e3
      };

    function Bn(cB) {
      var Bc;
      return null !== (Bc = Object.keys(GB).find((Bc => GB[Bc] === cB))) && void 0 !== Bc ? Bc : null
    }

    function nn(cB) {
      return pB.includes(cB)
    }

    function Vn(cB) {
      return !0 !== cB.nuclear || sc()
    }
    var In = nc(244);
    var rV = nc(8317),
      un = nc(8253),
      sn = nc(8320),
      Mn = nc(8315);
    const Pn = "Reactor Controller",
      qV = "Reactor Port",
      On = "Battery Cell",
      Tn = ["fuel", "water", "waste"],
      fn = {
        fuel: qV,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      mV = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      en = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      tV = "Reactor Frame",
      Sn = "Reactor Glass",
      yV = {
        edge: [tV],
        cap: [Sn, qV],
        wall: [Sn, qV],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Pn]
      },
      zV = {
        edge: [On],
        cap: [On],
        wall: [On],
        inside: [On],
        ctrl: [On]
      },
      pn = ["edge", "cap", "wall", "inside"],
      hn = ["Reactor Slag"];

    function aV(cB) {
      return hn.includes(lnc(cB))
    }

    function lnc(cB) {
      const Bc = cB.indexOf("|");
      return Bc < 0 ? cB : cB.slice(0, Bc)
    }

    function Yn(cB) {
      return lnc(cB) === Pn ? "reactor" : null
    }

    function Ln(cB) {
      return lnc(cB) !== qV ? null : cB.endsWith("|Water") ? "water" : cB.endsWith("|Waste") ? "waste" : "fuel"
    }

    function gV(cB) {
      const Bc = Ln(cB);
      return null === Bc ? null : Zn(fn[Tn[(Tn.indexOf(Bc) + 1) % Tn.length]], function(cB) {
        return cB.includes(Un)
      }(cB))
    }
    const Un = "|meta|rot1|Formed",
      bV = new Set([tV, Sn, qV]);

    function Zn(cB, Bc) {
      var nc;
      const Vc = lnc(cB);
      if (!bV.has(Vc)) return cB;
      if (Vc !== qV) return Bc ? Vc + Un : Vc;
      const Ic = null !== (nc = Ln(cB)) && void 0 !== nc ? nc : "fuel";
      return Bc ? "fuel" === Ic ? Vc + Un : `${Vc}${Un}|${"water"===Ic?"Water":"Waste"}` : fn[Ic]
    }

    function Qn(cB, Bc) {
      const nc = xV(cB, Bc);
      if ("Air" === nc) return !1;
      const Vc = "reactor" === cB ? yV : zV;
      return pn.some((cB => Vc[cB].includes(nc))) || "reactor" === cB && hn.includes(nc)
    }

    function Cn(cB) {
      return en[cB]
    }

    function vV(cB) {
      var Bc;
      return null !== (Bc = mV[cB]) && void 0 !== Bc ? Bc : mV[1]
    }

    function Dn(cB) {
      const [Bc, , nc] = vV(cB);
      return [nc, 0, -Bc]
    }

    function Nn(cB, Bc, nc, Vc, Ic, rB) {
      return {
        ctrl: [cB[0], cB[1], cB[2]],
        rot: mV[Bc] ? Bc : 1,
        w: nc,
        h: Vc,
        d: Ic,
        cu: rB[0],
        cv: rB[1]
      }
    }

    function En(cB, Bc) {
      return "reactor" === cB ? [Math.floor((Bc - 1) / 2), 0] : [0, 0]
    }

    function onc(cB, Bc, nc, Vc, Ic) {
      let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : cB.rot;
      if (nc === cB.w && Vc === cB.h && Ic === cB.d && rB === cB.rot) return cB;
      const [uc] = En(Bc, cB.w);
      if (cB.cu === uc && cB.cv <= 1) return Nn(cB.ctrl, rB, nc, Vc, Ic, En(Bc, nc));
      const sc = (cB, Bc) => Math.max(1, Math.min(Bc, cB));
      return Nn(cB.ctrl, rB, nc, Vc, Ic, [sc(cB.cu, nc - 2), 0 === cB.cv ? 0 : sc(cB.cv, Vc - 2)])
    }
    const Wn = 11,
      wn = 2 * Wn + 1;
    new Uint8Array(wn * wn * wn);

    function kV(cB) {
      return cB.w * cB.h * cB.d
    }

    function Xn(cB) {
      const Bc = Dn(cB.rot);
      return [cB.ctrl[0] - Bc[0] * cB.cu, cB.ctrl[1] - cB.cv, cB.ctrl[2] - Bc[2] * cB.cu]
    }

    function Hn(cB) {
      return cB.cv * cB.d * cB.w + cB.cu
    }

    function Fn(cB, Bc) {
      const nc = Bc % cB.w,
        Vc = Math.floor(Bc / cB.w) % cB.d;
      return [nc, Math.floor(Bc / (cB.w * cB.d)), Vc]
    }

    function Jn(cB, Bc) {
      const [nc, Vc, Ic] = Fn(cB, Bc), rB = Xn(cB), uc = vV(cB.rot), sc = Dn(cB.rot);
      return [rB[0] + sc[0] * nc - uc[0] * Ic, rB[1] + Vc, rB[2] + sc[2] * nc - uc[2] * Ic]
    }

    function jV(cB, Bc) {
      const nc = Xn(cB),
        Vc = vV(cB.rot),
        Ic = Dn(cB.rot),
        rB = Bc[0] - nc[0],
        uc = Bc[2] - nc[2],
        sc = rB * Ic[0] + uc * Ic[2],
        Mc = -(rB * Vc[0] + uc * Vc[2]),
        Pc = Bc[1] - nc[1];
      return sc < 0 || sc >= cB.w || Pc < 0 || Pc >= cB.h || Mc < 0 || Mc >= cB.d ? -1 : (Pc * cB.d + Mc) * cB.w + sc
    }

    function Rn(cB, Bc) {
      if (Bc === Hn(cB)) return "ctrl";
      const [nc, Vc, Ic] = Fn(cB, Bc), rB = 0 === Vc || Vc === cB.h - 1, uc = Number(0 === nc || nc === cB.w - 1) + Number(rB) + Number(0 === Ic || Ic === cB.d - 1);
      return uc >= 2 ? "edge" : 1 === uc ? rB ? "cap" : "wall" : "inside"
    }

    function iV(cB, Bc) {
      const [nc, Vc, Ic] = Fn(cB, Bc);
      return 0 === nc || nc === cB.w - 1 || 0 === Vc || Vc === cB.h - 1 || 0 === Ic || Ic === cB.d - 1 ? -1 : ((Vc - 1) * (cB.d - 2) + (Ic - 1)) * (cB.w - 2) + (nc - 1)
    }

    function Kn(cB, Bc) {
      const nc = cB.w - 2,
        Vc = cB.d - 2,
        Ic = Bc % nc + 1,
        rB = Math.floor(Bc / nc) % Vc + 1;
      return ((Math.floor(Bc / (nc * Vc)) + 1) * cB.d + rB) * cB.w + Ic
    }

    function xV(cB, Bc) {
      const nc = lnc(Bc);
      return "reactor" === cB && nc === Pn ? tV : nc
    }

    function dn(cB, Bc, nc) {
      const Vc = "ctrl" === Bc ? lnc(nc) : xV(cB, nc);
      return ("reactor" === cB ? yV : zV)[Bc].includes(Vc) ? "ok" : "Air" === Vc ? "missing" : Qn(cB, nc) ? "wrong" : "blocked"
    }

    function An(cB, Bc) {
      return "battery" === cB ? On : "inside" === Bc ? null : function(cB, Bc) {
        if ("inside" === Bc || "ctrl" === Bc || "battery" === cB) return null;
        return "edge" === Bc ? tV : Sn
      }(cB, Bc)
    }
    const Gn = {
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
      cI = "Collider",
      BV = "Laser",
      nV = "Star Alloy",
      VV = "Glow Dust",
      IV = [cI, "_Collider Focus"];

    function rI(cB) {
      return IV.indexOf(lnc(cB))
    }

    function uV(cB) {
      return lnc(cB) === BV
    }

    function sV(cB) {
      return [
        [cB[0], cB[1], cB[2]],
        [cB[0], cB[1] + 1, cB[2]]
      ]
    }
    const MV = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function PV(cB, Bc, nc) {
      const Vc = MV[Bc];
      return [cB[0] + Vc[0] * nc, cB[1], cB[2] + Vc[2] * nc]
    }

    function qI(cB, Bc) {
      if (Bc[1] !== cB[1]) return null;
      const nc = Bc[0] - cB[0],
        Vc = Bc[2] - cB[2];
      if (0 !== nc === (0 !== Vc)) return null;
      const Ic = Math.abs(nc + Vc);
      if (Ic > Gn.LASER_D) return null;
      return {
        dir: Vc < 0 ? 0 : nc > 0 ? 1 : Vc > 0 ? 2 : 3,
        cB: Ic
      }
    }

    function OV(cB, Bc, nc) {
      const Vc = Bc => Math.abs(cB[0] - Bc[0]) <= 1 && Math.abs(cB[1] - Bc[1]) <= 1;
      return Vc(Bc) || Vc(nc)
    }

    function TV(cB, Bc) {
      return function(cB, Bc, nc, Vc) {
        return [0, 1, 2, 3].map((Ic => {
          for (let rB = 1; rB <= Gn.LASER_D; rB++) {
            const uc = PV(cB, Ic, rB);
            if (OV([uc[0], uc[2]], Bc, nc) || !Vc(uc)) return !1
          }
          return !0
        }))
      }(sV(cB)[1], Bc.spawnXZ, Bc.coreXZ, (cB => cB[1] >= rV.o && cB[1] < rV.o + rV.q && cB[0] >= Bc.minXZ[0] && cB[0] <= Bc.maxXZ[0] && cB[2] >= Bc.minXZ[1] && cB[2] <= Bc.maxXZ[1]))
    }
    const fV = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function mI(cB) {
      return Math.max(48 + 16 * cB, Sc(cB).machineAllowance)
    }
    const eV = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function tI(cB) {
      const Bc = cB.split("|")[0];
      return eV.includes(Bc) ? "Solar Panel" : Bc === sn.e ? "Fluid Pipe" : rI(Bc) >= 0 ? "Collider" : (nc = Bc, fV.includes(nc) ? Bc : null);
      var nc
    }
    const SV = "buildAFactory2Game:solarPanelDescription";
    const yI = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function zI(cB, Bc) {
      var nc;
      return null !== (nc = yI.find((nc => {
        var Vc;
        return (null !== (Vc = cB.level(nc)) && void 0 !== Vc ? Vc : 0) >= Bc
      }))) && void 0 !== nc ? nc : null
    }
    const pV = "buildAFactory2Game:";
    let hV = null;
    const aI = {
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
      lV = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      YV = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      LV = {
        "Loot Chest": `${pV}lookRuinChestName`
      };

    function gI(cB) {
      return "object" === typeof cB && null !== cB && "translationKey" in cB && "string" === typeof cB.translationKey ? cB.translationKey : null
    }

    function UV(cB, Bc) {
      var nc;
      return null !== (nc = gI(cB.displayName(Bc))) && void 0 !== nc ? nc : `item:${(0,Dc.Nd)(Bc)}`
    }

    function bI(cB, Bc) {
      var nc, Vc, Ic, rB;
      let uc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bc;
      if ("Solar Panel" === tI(Bc)) return {
        name: gI(cB.displayName("Solar Panel")),
        detail: SV,
        detailItem: null
      };
      const Mc = Bc.endsWith(" Ore"),
        Pc = (hV ??= new Set([...Object.keys((0, un.i)()), ...Object.keys((0, sn.s)())].map((cB => cB.split("|")[0]))), hV).has(Bc),
        qB = Mc || Pc ? null : function(cB) {
          var Bc;
          return cB.endsWith(" Log") && !cB.startsWith("Barkless ") ? "lookLog" : cB.endsWith(" Sapling") ? "lookSapling" : cB.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (Bc = aI[cB]) && void 0 !== Bc ? Bc : null
        }(Bc);
      if (!cB.isBlock(Bc) || !Mc && !Pc && null === qB) return null;
      const Oc = null !== (nc = null !== (Vc = LV[Bc]) && void 0 !== Vc ? Vc : gI(null !== (Ic = cB.displayName(uc)) && void 0 !== Ic ? Ic : cB.displayName(Bc))) && void 0 !== nc ? nc : `item:${(0,Dc.Nd)(Bc)}`;
      if (null !== qB) return {
        name: Oc,
        detail: `${pV}${qB}`,
        detailItem: null
      };
      const Tc = null !== (rB = lV[Bc]) && void 0 !== rB ? rB : sc() ? YV[Bc] : void 0;
      if (Pc && void 0 !== Tc) return {
        name: Oc,
        detail: `${pV}${Tc}`,
        detailItem: null
      };
      const fc = GB[Bc];
      if (void 0 !== fc) return {
        name: Oc,
        detail: `${pV}lookDeposit`,
        detailItem: UV(cB, fc)
      };
      const mB = cB.harvestLevel(Bc);
      if (Mc && "rock" === cB.harvestType(Bc) && 0 !== mB) {
        const Bc = zI(cB, null !== mB && void 0 !== mB ? mB : 0);
        if (Bc === yI[0]) return {
          name: Oc,
          detail: `${pV}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== Bc) return {
          name: Oc,
          detail: `${pV}lookPickaxe`,
          detailItem: UV(cB, Bc)
        }
      }
      return {
        name: Oc,
        detail: gI(cB.description(Bc)),
        detailItem: null
      }
    }

    function ZV(cB) {
      return cB < rV.o - 24
    }
    const QV = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const CV = "Wrench",
      vI = "Nova Wrench";

    function DV(cB) {
      return cB === CV || cB === vI
    }
    const NV = [...rV.G, "Belt Lift", "Belt Drop"];
    const EV = ["Belt Lift", "Belt Drop"],
      oV = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function WV(cB) {
      return cB.split("|")[0]
    }

    function wV(cB) {
      const Bc = /\|rot(\d)/.exec(cB);
      return Bc ? Number(Bc[1]) : 1
    }

    function kI(cB) {
      return cB % 4 + 1
    }

    function XV(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === Bc && "" === nc ? cB : `${cB}|meta|rot${Bc}${nc}`
    }

    function HV(cB) {
      return WV(cB) === rV.z ? (0, rV.Q)(cB) ? "gateRight" : "gateLeft" : (0, rV.W)(cB)
    }

    function FV(cB) {
      const Bc = WV(cB),
        nc = wV(cB);
      if (rV.G.includes(Bc)) return (0, rV.I)(Bc, kI(nc), null);
      if (Bc === rV.i) return (0, rV.Z)(kI(nc), (0, rV.T)(cB));
      if (Bc === rV.B) {
        const Vc = oV[(0, rV.W)(cB)];
        return null === Vc ? XV(Bc, kI(nc)) : XV(Bc, nc, rV.D[Vc])
      }
      return Bc === rV.z ? (0, rV.Q)(cB) ? XV(Bc, kI(nc)) : XV(Bc, nc, rV.m) : Mn.e.includes(Bc) && !EV.includes(Bc) || nn(Bc) ? XV(Bc, kI(nc)) : null
    }

    function JV(cB) {
      return Mn.e.includes(cB) || nn(cB) || null !== tI(cB)
    }

    function jI(cB) {
      return "Solar Panel" === tI(cB)
    }
    const RV = "buildAFactory2Game:",
      iI = {
        leftFront: `${RV}lookSplitDetail_leftFront`,
        frontRight: `${RV}lookSplitDetail_frontRight`,
        gateRight: `${RV}lookGateDetail_gateRight`
      };

    function KV(cB, Bc) {
      var nc;
      let Vc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Ic = HV(cB),
        rB = null === Ic ? null : `${RV}${Ic.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Ic}`,
        uc = null === Ic ? null : null !== (nc = iI[Ic]) && void 0 !== nc ? nc : null;
      if (DV(Bc) && Vc) {
        const nc = WV(cB);
        return Bc === vI && sc() && function(cB) {
          return NV.includes(WV(cB))
        }(cB) ? {
          mode: rB,
          detail: uc,
          next: `${RV}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: rB,
          detail: uc,
          next: JV(nc) && !jI(nc) ? `${RV}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Mc = DV(Bc) ? FV(cB) : null;
      if (null === Mc) return {
        mode: rB,
        detail: uc,
        next: null,
        nextState: null
      };
      const Pc = HV(Mc);
      return null === Pc || wV(Mc) !== wV(cB) ? {
        mode: rB,
        detail: uc,
        next: `${RV}lookWrenchTurn`,
        nextState: null
      } : {
        mode: rB,
        detail: uc,
        next: `${RV}lookWrenchNext`,
        nextState: `${RV}lookWrenchState_${Pc}`
      }
    }
    const xI = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"],
      dV = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function AV(cB) {
      return [0, 1, 2, 3].map((Bc => 0 !== (cB & 1 << Bc)))
    }

    function GV(cB) {
      const Bc = [];
      for (let nc = 8; nc + 2 < cB.length; nc += 3) Bc.push([cB[nc], cB[nc + 1], cB[nc + 2]]);
      return {
        focus: [cB[0], cB[1], cB[2]],
        lasers: AV(cB[3]),
        open: AV(cB[4]),
        live: AV(cB[5]),
        on: 1 === cB[6],
        state: dV[cB[7]],
        blockers: Bc
      }
    }
    const cr = "Arc Caster",
      BI = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      nI = (Object.values(BI), "Jet Chestplate"),
      VI = "Nova Jet Chestplate",
      II = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      rr = Object.values(II);

    function uI(cB, Bc, nc) {
      return Math.min(function(cB) {
        return sc() && Oc(cB) >= 5 ? 20 : 10
      }(nc), Math.floor(function(cB, Bc) {
        return Math.max(0, cB) + (sc() ? Math.max(0, Bc) : 0)
      }(cB, Bc) / 5))
    }

    function sI(cB, Bc, nc) {
      const Vc = uI(Bc, nc, cB),
        Ic = Oc(cB),
        rB = (Ic >= 3 ? 55 : Ic >= 1 ? 50 : cB >= 8 ? 45 : 30) + Vc,
        uc = Math.max(100 + Vc, 2 * rB);
      return {
        arcDamage: rB,
        arcPierce: cB >= 7 ? 2 : 1,
        arcChain: cB >= 10,
        barrierMax: (Ic >= 4 ? 100 : Ic >= 2 ? 90 : cB >= 9 ? 80 : cB >= 6 ? 60 : 40) + 5 * Vc,
        barrierRegenPerS: Ic >= 5 ? 20 : cB >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Vc,
        novaShieldRegenPerS: 32,
        bladeDamage: uc,
        bladePunch: Math.round(.5 * uc),
        forgeRank: Vc
      }
    }
    const MI = {
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
    var PI = nc(35437),
      qr = nc(35253),
      OI = nc(35247),
      TI = nc(27),
      fI = nc(1464),
      mr = nc(912),
      eI = nc.n(mr);

    function tr(cB) {
      return !0 === cB.field
    }
    const SI = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function yr(cB) {
      return SI.has(cB) ? `buildAFactory2Game:itemPlural_${(0,Dc.Nd)(cB)}` : null
    }
    var zr = nc(1051),
      pI = nc(926),
      hI = nc(1553),
      ar = nc(1536),
      lI = nc(35427),
      YI = nc(35433),
      LI = nc(35),
      gr = nc(35418);
    const UI = "baf2QuestView",
      br = "baf2PlayerY",
      ZI = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class QI {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = cB, this.view = {
          name: null,
          rows: [],
          reward: null,
          goal: null,
          pulse: 0,
          itemNames: {},
          side: null,
          tier: null,
          core: null,
          chapters: null,
          also: [],
          depth: null,
          tutorial: "on",
          tutorialKnown: !1
        }, this.pickedTutorial = null, this.pickSeq = 0, this.serverTutorial = "on", this.pickTimer = null, this.clearTimer = null, this.playerY = null
      }
      get() {
        return this.view
      }
      set(cB, Bc) {
        var nc, Vc, Ic, rB, uc, sc, Mc, Pc;
        const qB = JSON.stringify(cB.baf2QuestName) === JSON.stringify(this.view.name),
          Oc = new Set(this.view.rows.filter((cB => cB.done)).map((cB => cB.id))),
          Tc = new Set(this.view.rows.filter((cB => cB.justFinished)).map((cB => cB.id))),
          fc = cB.baf2QuestSide,
          mB = null !== fc && !0 === cB.baf2QuestSideFocus;
        let ec = !1,
          tB = 0;
        const Sc = cB.baf2QuestSteps.map((cB => {
            const Bc = WI(cB, ZI.has(cB[0]) ? cB[0] : "" + tB++),
              nc = qB && Bc.done && !Oc.has(Bc.id);
            return Bc.justFinished = nc || qB && Bc.done && Tc.has(Bc.id), ec ||= nc, Bc
          })),
          yB = oI(Sc);
        yB >= 0 && !mB && (Sc[yB].current = !0);
        const zB = !qB && null !== cB.baf2QuestName,
          pc = JSON.stringify(fc && [fc[0], fc[1]]) === JSON.stringify(null !== (nc = null === (Vc = this.view.side) || void 0 === Vc ? void 0 : Vc.name) && void 0 !== nc ? nc : null);
        this.serverTutorial = null !== (Ic = cB.baf2QuestTutorial) && void 0 !== Ic ? Ic : "on", (null !== (rB = cB.baf2QuestTutorialSeq) && void 0 !== rB ? rB : 0) >= this.pickSeq && this.endPick();
        const hc = !qB || !pc || cB.baf2QuestTier !== this.view.tier;
        this.view = {
          name: cB.baf2QuestName,
          rows: Sc,
          reward: cB.baf2QuestReward,
          goal: cB.baf2QuestGoal,
          pulse: this.view.pulse + (ec || zB ? 1 : 0),
          itemNames: Bc,
          side: fc && {
            name: [fc[0], fc[1]],
            row: {
              ...WI(fc[2], "side"),
              current: mB
            },
            goal: null !== (uc = fc[3]) && void 0 !== uc ? uc : null
          },
          tier: cB.baf2QuestTier,
          core: cB.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (sc = cB.baf2QuestAlso) && void 0 !== sc ? sc : [],
          depth: null !== (Mc = cB.baf2QuestDepth) && void 0 !== Mc ? Mc : null,
          tutorial: null !== (Pc = this.pickedTutorial) && void 0 !== Pc ? Pc : this.serverTutorial,
          tutorialKnown: !0
        }, this.Vu(), ec && this.scheduleClear(), hc && this.requestBook()
      }
      setTutorial(cB) {
        return this.endPick(), this.pickedTutorial = cB, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Vu()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: cB
        }, this.Vu(), this.pickSeq
      }
      onPlayerY(cB) {
        const Bc = Math.floor(cB);
        Bc !== this.playerY && (this.playerY = Bc, this.view.depth && LI.i.Vu(br, Bc))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(cB) {
        this.view = {
          ...this.view,
          chapters: cB.baf2BookChapters
        }, this.Vu()
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
            rows: this.view.rows.map((cB => cB.justFinished ? {
              ...cB,
              justFinished: !1
            } : cB))
          }, this.Vu()
        }), 2400)
      }
      Vu() {
        LI.i.Vu(UI, this.view, !0)
      }
    }

    function CI(cB) {
      return (null === cB.name || vr(cB)) && null === cB.side && null !== cB.chapters
    }

    function vr(cB) {
      var Bc;
      return "quest_forgeOngoing" === (null === (Bc = cB.name) || void 0 === Bc ? void 0 : Bc[0])
    }

    function DI(cB) {
      return cB.filter((cB => !ZI.has(cB.key)))
    }

    function NI(cB) {
      return cB.key.startsWith("stepCraft")
    }

    function EI(cB, Bc) {
      const nc = new Set,
        Vc = cB.side ? [...cB.rows, cB.side.row] : cB.rows;
      for (const rB of Vc)
        if (!rB.done) {
          !rB.item || Bc && !NI(rB) || nc.add(rB.item);
          for (const [cB, Bc, Vc] of null !== (Ic = rB.chips) && void 0 !== Ic ? Ic : []) {
            var Ic;
            Bc < Vc && nc.add(cB)
          }
        } return nc
    }

    function oI(cB) {
      const Bc = cB.findIndex((cB => !cB.done && !cB.away));
      return Bc >= 0 ? Bc : cB.findIndex((cB => !cB.done))
    }

    function WI(cB, Bc) {
      let [nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc] = cB;
      return {
        id: Bc,
        key: nc,
        params: Vc,
        item: Ic,
        amount: rB,
        total: uc,
        done: sc,
        chips: null !== Mc && void 0 !== Mc ? Mc : null,
        current: !1,
        away: !0 === Pc,
        madeFor: null !== qB && void 0 !== qB ? qB : [],
        also: null !== Oc && void 0 !== Oc ? Oc : [],
        justFinished: !1
      }
    }
    const wI = "baf2QuestItems",
      kr = new Set;
    let XI = new Set,
      HI = null;

    function FI(cB) {
      const Bc = vB(cB.tutorial),
        nc = Bc ? EI(cB, !0) : kr;
      "inventory" === TI.d.get("openInGameMenuName") ? (HI = null, (0, gr.A)(nc)) : HI = nc;
      const Vc = Bc ? EI(cB, !1) : kr;
      (0, YI.c)(Vc, XI) || (XI = Vc, LI.i.Vu(wI, XI))
    }

    function JI() {
      return (0, lI.b)(wI, (() => XI))
    }
    var jr = nc(35325),
      RI = nc(2444);

    function ir(cB) {
      const Bc = (0, RI.e)(cB),
        nc = void 0 === Bc ? void 0 : (0, jr.displayNameOf)(Bc);
      return "object" === typeof nc && null !== nc && "translationKey" in nc && "string" === typeof nc.translationKey ? nc.translationKey : `item:${(0,Dc.Nd)(cB)}`
    }

    function KI(cB, Bc) {
      return cB(ir(Bc))
    }
    const xr = [{
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

    function dI(cB, Bc) {
      return [`Deposit Seed (${cB})`, {
        item: GB[`${cB} Deposit`],
        amount: Bc
      }]
    }
    const AI = Object.fromEntries([dI("Coal", 8), dI("Iron", 8), dI("Copper", 8), dI("Gold", 6), dI("Voltite", 4), dI("Uranium", 4)]),
      GI = "Relay Coil",
      cu = new Map;

    function Br(cB) {
      let Bc = cu.get(cB);
      if (!Bc) {
        const nc = Math.max(1, cB);
        Bc = xr.filter((cB => {
          var Bc;
          return nc >= cB.fromTier && nc <= (null !== (Bc = cB.untilTier) && void 0 !== Bc ? Bc : 1 / 0)
        })).map((cB => cB.later && nc >= cB.later.tier ? {
          ...cB,
          weight: cB.later.weight
        } : cB)), cu.set(cB, Bc)
      }
      return Bc
    }

    function nr(cB) {
      return Br(cB).some((cB => {
        let {
          item: Bc
        } = cB;
        return Bc === GI
      }))
    }

    function Vr(cB) {
      return cB.startsWith("Deposit Seed (")
    }

    function Ir(cB, Bc) {
      const nc = Br(cB);
      return Bc ? nc.filter((cB => Bc(cB.item))) : nc
    }

    function ru(cB) {
      return cB.reduce(((cB, Bc) => cB + Bc.weight), 0)
    }

    function ur(cB, Bc) {
      const nc = Ir(cB, Bc),
        Vc = ru(nc);
      return nc.map((cB => ({
        find: cB,
        chance: cB.weight / Vc
      })))
    }
    const sr = 6e4,
      Mr = new Intl.NumberFormat("en-US");

    function Pr(cB, Bc) {
      const nc = cB >= 10 ? Math.round(cB) : Math.round(10 * cB) / 10;
      return 0 === nc ? "0" : `${Bc}${Mr.format(nc)}`
    }

    function qu(cB) {
      return cB < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Mr.format(cB) : cB < 1e6 ? `${cB<1e5?Math.floor(cB/100)/10:Math.floor(cB/1e3)}k` : Math.floor(cB / 1e5) / 10 + "M"
    }

    function Or(cB) {
      return cB < 0 ? "\u2212" + -cB : String(cB)
    }

    function Tr(cB, Bc) {
      const nc = Math.max(1, Math.round(Bc));
      if (nc < 60) return cB("buildAFactory2Game:durationSeconds", {
        seconds: String(nc)
      });
      const Vc = Math.round(nc / 60);
      if (Vc < 60) return cB("buildAFactory2Game:durationMinutes", {
        minutes: String(Vc)
      });
      const Ic = String(Math.floor(Vc / 60));
      return Vc % 60 === 0 ? cB("buildAFactory2Game:durationWholeHours", {
        hours: Ic
      }) : cB("buildAFactory2Game:durationHours", {
        hours: Ic,
        minutes: String(Vc % 60)
      })
    }
    const fr = "(max-height: 420px), (max-width: 650px)";

    function mu() {
      return "undefined" !== typeof window && window.matchMedia(fr).matches
    }

    function er(cB) {
      const Bc = window.matchMedia(fr),
        nc = () => {
          cB(Bc.matches)
        };
      return Bc.addEventListener("change", nc), () => {
        Bc.removeEventListener("change", nc)
      }
    }
    var tu = nc(957);

    function Sr(cB, Bc) {
      return null !== cB && cB > Bc + 1
    }

    function yu(cB) {
      const Bc = 100 * cB;
      return String(Bc <= 0 || Bc >= 1 ? Math.round(Bc) : Math.max(.1, Math.round(10 * Bc) / 10))
    }

    function zu(cB) {
      let {
        item: Bc,
        amount: nc
      } = cB;
      return (0, tu.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, tu.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, tu.jsx)(hI.d, {
            itemName: Bc,
            amount: 0
          })
        }), nc > 1 && (0, tu.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", nc]
        })]
      })
    }

    function pr(cB) {
      let {
        label: Bc,
        names: nc
      } = cB;
      const [Ic, rB] = (0, Vc.useState)(!1), uc = nc.join(" / ");
      return (0, tu.jsxs)(tu.Fragment, {
        children: [(0, tu.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: uc,
          "aria-expanded": Ic,
          onClick: () => {
            rB(!Ic)
          },
          children: Bc
        }), Ic && (0, tu.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: uc
        })]
      })
    }

    function hr(cB) {
      let {
        tier: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)(), {
        key: Vc,
        params: Ic
      } = fc(Bc, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), rB = nc(`buildAFactory2Game:${Vc}`, Ic);
      return (0, tu.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, tu.jsx)(pI.e, {
          name: "lock"
        }), rB]
      })
    }
    const au = (0, Vc.createContext)(null);

    function lr() {
      const {
        t: cB
      } = (0, zr.x)(), Bc = (0, Vc.useContext)(au);
      return (0, Vc.useEffect)((() => null === Bc || void 0 === Bc ? void 0 : Bc()), [Bc]), (0, tu.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: cB("buildAFactory2Game:recipeForQuest"),
        "aria-label": cB("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Yr(cB) {
      let {
        title: Bc,
        count: nc,
        children: Ic,
        startOpen: rB = !0
      } = cB;
      const {
        t: uc
      } = (0, zr.x)(), [sc, Mc] = (0, Vc.useState)((() => rB && !mu())), [Pc, qB] = (0, Vc.useState)(0), Oc = (0, Vc.useCallback)((() => (qB((cB => cB + 1)), () => {
        qB((cB => cB - 1))
      })), []);
      return (0, tu.jsxs)("div", {
        className: eI()("Baf2Recipes", {
          Open: sc
        }),
        children: [(0, tu.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Mc(!sc)
          },
          "aria-expanded": sc,
          children: [uc("buildAFactory2Game:recipesToggle", {
            title: Bc,
            count: String(nc)
          }), (0, tu.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: sc ? "\u25be" : "\u25b8"
          })]
        }), sc && (0, tu.jsxs)(au.Provider, {
          value: Oc,
          children: [(0, tu.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Ic
          }), Pc > 0 && (0, tu.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, tu.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), uc("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Lr = "buildAFactory2Game:",
      gu = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Ur = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      bu = {
        "Uranium Grit": rB,
        "Raw Uranium": rB
      };

    function Zr(cB) {
      var Bc;
      return null !== (Bc = bu[cB]) && void 0 !== Bc ? Bc : Math.max(xB(cB), Ur[cB] ? xB(Ur[cB]) : 1, function(cB) {
        const Bc = Ic.findIndex((Bc => Bc.cost.some((Bc => Bc.item === cB))));
        return Bc > rB ? Bc : 1
      }(cB))
    }

    function Qr(cB, Bc) {
      return Cr(Bc) ? Zr(Bc) : function(cB) {
        if (gu.has(cB)) return 1;
        const Bc = Ic.findIndex((Bc => Bc.newDeposits.some((Bc => {
          let {
            block: nc
          } = Bc;
          return nc === cB
        }))));
        return Bc < 0 ? 1 : Bc + 1
      }(cB)
    }

    function Cr(cB) {
      return cB in bu || Oc(Zr(cB)) > 0
    }

    function vu(cB, Bc) {
      return HB(cB, {
        coupled: !1,
        taught: null,
        atomic: sc() && Bc >= 11
      }).recipes
    }

    function Dr(cB, Bc) {
      const nc = Tc(cB, Bc, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Oc(cB) > 0);
      return "open" === nc || "locked" === nc
    }

    function Nr(cB, Bc) {
      return cB.map(((cB, nc) => ({
        value: cB,
        idx: nc,
        tier: Bc(cB)
      }))).sort(((cB, Bc) => cB.tier - Bc.tier || cB.idx - Bc.idx)).map((cB => {
        let {
          value: Bc
        } = cB;
        return Bc
      }))
    }

    function Er(cB, Bc, nc) {
      const Vc = Tc(cB, Bc);
      if ("hidden" === Vc || "open" === Vc) return null;
      if ("teaser" === Vc) return {
        tag: {
          translationKey: `${Lr}${nc?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Lr}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Ic = fc(cB, {
          tier: nc ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        rB = fc(cB, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Lr}${Ic.key}`,
          params: Ic.params
        },
        reason: {
          translationKey: `${Lr}${rB.key}`,
          params: rB.params
        }
      }
    }

    function or(cB) {
      return !Vr(cB)
    }

    function Wr(cB) {
      let {
        seconds: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)();
      return (0, tu.jsx)(Yr, {
        title: nc("buildAFactory2Game:recipesCuts", {
          seconds: Bc
        }),
        count: 1,
        children: (0, tu.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, tu.jsx)(zu, {
            item: "Maple Sapling",
            amount: 1
          }), (0, tu.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, tu.jsx)(zu, {
            item: "Maple Log",
            amount: 1
          }), (0, tu.jsx)("span", {
            className: "Baf2RecipeName",
            children: nc("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function wr(cB) {
      let {
        fertilised: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)();
      return (0, tu.jsxs)(Yr, {
        title: nc("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, tu.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, tu.jsx)(zu, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, tu.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, tu.jsx)(zu, {
            item: "Wheat",
            amount: 1
          }), (0, tu.jsx)(zu, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, tu.jsx)("span", {
            className: "Baf2RecipeName",
            children: nc("buildAFactory2Game:recipeField")
          })]
        }), (0, tu.jsxs)("li", {
          className: eI()("Baf2Recipe", {
            InUse: Bc
          }),
          children: [(0, tu.jsx)(zu, {
            item: "Fertiliser",
            amount: 1
          }), (0, tu.jsx)("span", {
            className: "Baf2RecipeName",
            children: nc("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function ku(cB) {
      let {
        tier: Bc,
        seconds: nc
      } = cB;
      const {
        t: Vc
      } = (0, zr.x)(), Ic = function(cB) {
        return cB >= 5 ? eB : mn
      }(Bc);
      return (0, tu.jsx)(Yr, {
        title: Vc("buildAFactory2Game:recipesBringsUp", {
          seconds: nc
        }),
        count: Ic.length,
        children: Ic.map((cB => {
          let {
            item: Bc,
            chance: nc
          } = cB;
          return (0, tu.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, tu.jsx)(zu, {
              item: Bc,
              amount: 1
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeName",
              children: KI(Vc, Bc)
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Vc("buildAFactory2Game:recipeChance", {
                percent: yu(nc)
              })
            })]
          }, Bc)
        }))
      })
    }

    function Xr(cB) {
      let {
        tier: Bc,
        seconds: nc,
        noSeeds: Vc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)(), rB = JI(), uc = ur(Bc, Vc ? or : void 0), sc = Vc && ur(Bc).length > uc.length, Mc = nr(Bc);
      return (0, tu.jsxs)(Yr, {
        title: Ic("buildAFactory2Game:recipesRecycles", {
          seconds: nc
        }),
        count: uc.length,
        children: [uc.map((cB => {
          let {
            find: Bc,
            chance: nc
          } = cB;
          return (0, tu.jsxs)("li", {
            className: "Baf2Recipe",
            children: [rB.has(Bc.item) && (0, tu.jsx)(lr, {}), (0, tu.jsx)(zu, {
              item: Bc.item,
              amount: Bc.amount
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeName",
              children: KI(Ic, Bc.item)
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Ic("buildAFactory2Game:recipeChance", {
                percent: yu(nc)
              })
            })]
          }, Bc.item)
        })), sc && (0, tu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, tu.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ic("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Mc && (0, tu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, tu.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ic("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function Hr(cB) {
      let {
        tier: Bc,
        seconds: nc
      } = cB;
      const {
        t: Vc
      } = (0, zr.x)(), Ic = Object.entries(AI).filter((cB => {
        let [, {
          item: nc
        }] = cB;
        return Dr(Zr(nc), Bc, Cr(nc))
      }));
      return (0, tu.jsx)(Yr, {
        title: Vc("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: nc
        }),
        count: Ic.length,
        children: Ic.map((cB => {
          let [Bc, {
            item: nc,
            amount: Ic
          }] = cB;
          return (0, tu.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, tu.jsx)(zu, {
              item: Bc,
              amount: 1
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, tu.jsx)(zu, {
              item: nc,
              amount: Ic
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeName",
              children: KI(Vc, nc)
            })]
          }, Bc)
        }))
      })
    }

    function Fr(cB) {
      let {
        tier: Bc,
        seconds: nc
      } = cB;
      const {
        t: Vc
      } = (0, zr.x)(), Ic = JI(), rB = Nr(Object.entries(GB).filter((cB => {
        let [nc, Vc] = cB;
        return Dr(Qr(nc, Vc), Bc, Cr(Vc))
      })), (cB => {
        let [Bc, nc] = cB;
        return Qr(Bc, nc)
      }));
      return (0, tu.jsx)(Yr, {
        title: Vc("buildAFactory2Game:recipesDigs", {
          seconds: nc
        }),
        count: rB.length,
        children: rB.map((cB => {
          let [nc, rB] = cB;
          const uc = Qr(nc, rB),
            sc = uc > Bc ? uc : null,
            Mc = cV[nc],
            Pc = null === sc && Ic.has(rB);
          return (0, tu.jsxs)("li", {
            className: eI()("Baf2Recipe", {
              Locked: null !== sc,
              Far: Sr(sc, Bc)
            }),
            children: [Pc && (0, tu.jsx)(lr, {}), (0, tu.jsx)(zu, {
              item: nc,
              amount: 1
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, tu.jsx)(zu, {
              item: rB,
              amount: 1
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeName",
              children: KI(Vc, rB)
            }), void 0 !== Mc && (0, tu.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Vc("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Mc)
              })
            }), null !== sc && (0, tu.jsx)(hr, {
              tier: sc
            })]
          }, nc)
        }))
      })
    }

    function Jr(cB) {
      var Bc;
      let {
        def: nc,
        seconds: Vc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)();
      return (0, tu.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, tu.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (Bc = nc.fuels) && void 0 !== Bc ? Bc : []).map((cB => (0, tu.jsx)(zu, {
            item: cB,
            amount: 1
          }, cB))), (0, tu.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, tu.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, tu.jsx)(pI.e, {
              name: "bolt"
            }), Ic("buildAFactory2Game:recipePower", {
              power: dc(nc.powerMade),
              seconds: Vc
            })]
          })]
        })
      })
    }

    function ju(cB) {
      let {
        def: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)();
      return (0, tu.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, tu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, tu.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, tu.jsx)(pI.e, {
              name: "bolt"
            }), nc("buildAFactory2Game:recipeMixer", {
              cryo: Pr((0, Ac.F)(Bc, Bc.cryoMade), "")
            })]
          })
        })
      })
    }

    function Rr(cB) {
      let {
        def: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)();
      return (0, tu.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, tu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, tu.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, tu.jsx)(pI.e, {
              name: "bolt"
            }), nc("buildAFactory2Game:recipeCondenser", {
              power: Pr((0, Ac.F)(Bc, Bc.powerPerOp), ""),
              water: Pr((0, Ac.F)(Bc, Bc.fluidMade), "")
            })]
          })
        })
      })
    }

    function iu(cB) {
      let {
        kind: Bc,
        def: nc,
        input: Vc,
        tier: Ic,
        noSeeds: rB = !1
      } = cB;
      const uc = String(nc.opMs / 1e3);
      return KB(nc) ? (0, tu.jsx)(Wr, {
        seconds: uc
      }) : nc.field ? (0, tu.jsx)(wr, {
        fertilised: null !== Vc
      }) : nc.table ? (0, tu.jsx)(ku, {
        tier: Ic,
        seconds: uc
      }) : nc.recycles ? (0, tu.jsxs)(tu.Fragment, {
        children: [(0, tu.jsx)(Xr, {
          tier: Ic,
          seconds: uc,
          noSeeds: rB
        }), (0, tu.jsx)(Hr, {
          tier: Ic,
          seconds: uc
        })]
      }) : RB(nc) ? (0, tu.jsx)(Fr, {
        tier: Ic,
        seconds: uc
      }) : void 0 !== nc.fluidMade ? (0, tu.jsx)(Rr, {
        def: nc
      }) : void 0 !== nc.cryoMade ? (0, tu.jsx)(ju, {
        def: nc
      }) : void 0 !== nc.powerMade ? (0, tu.jsx)(Jr, {
        def: nc,
        seconds: uc
      }) : (0, tu.jsx)(Kr, {
        kind: Bc,
        input: Vc,
        tier: Ic,
        seconds: uc
      })
    }

    function Kr(cB) {
      let {
        kind: Bc,
        input: nc,
        tier: Vc,
        seconds: Ic
      } = cB;
      const {
        t: rB
      } = (0, zr.x)(), uc = JI(), sc = Nr(function(cB) {
        const Bc = new Map;
        for (const Ic of cB) {
          var nc, Vc;
          const cB = [Ic.output, Ic.outputAmount, Ic.inputAmount, null === (nc = Ic.bonus) || void 0 === nc ? void 0 : nc.item, null === (Vc = Ic.bonus) || void 0 === Vc ? void 0 : Vc.chance].join("|"),
            rB = Bc.get(cB);
          rB ? rB.inputs.push(Ic.input) : Bc.set(cB, {
            inputs: [Ic.input],
            inputAmount: Ic.inputAmount,
            output: Ic.output,
            outputAmount: Ic.outputAmount,
            bonus: Ic.bonus
          })
        }
        return [...Bc.values()]
      }(vu(Bc, Vc).filter(Vn)), (cB => Zr(cB.output))).filter((cB => Dr(Zr(cB.output), Vc, Cr(cB.output))));
      return (0, tu.jsx)(Yr, {
        title: rB("buildAFactory2Game:recipesEach", {
          seconds: Ic
        }),
        count: sc.length,
        children: sc.map((cB => {
          const Bc = null !== nc && cB.inputs.includes(nc),
            Ic = cB.inputs.length > 3 ? [Bc ? nc : cB.inputs[0]] : cB.inputs,
            sc = Zr(cB.output) > Vc ? Zr(cB.output) : null,
            Mc = null === sc && uc.has(cB.output);
          return (0, tu.jsxs)("li", {
            className: eI()("Baf2Recipe", {
              InUse: Bc,
              Locked: null !== sc,
              Far: Sr(sc, Vc)
            }),
            children: [Mc && (0, tu.jsx)(lr, {}), Ic.map(((Bc, nc) => (0, tu.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [nc > 0 && (0, tu.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, tu.jsx)(zu, {
                item: Bc,
                amount: cB.inputAmount
              })]
            }, Bc))), Ic.length < cB.inputs.length && (0, tu.jsx)(pr, {
              label: rB("buildAFactory2Game:recipeMore", {
                count: String(cB.inputs.length - Ic.length)
              }),
              names: cB.inputs.filter((cB => !Ic.includes(cB))).map((cB => KI(rB, cB)))
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, tu.jsx)(zu, {
              item: cB.output,
              amount: cB.outputAmount
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeName",
              children: KI(rB, cB.output)
            }), cB.bonus && (0, tu.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [rB("buildAFactory2Game:recipeBonus", {
                percent: yu(cB.bonus.chance)
              }), (0, tu.jsx)(zu, {
                item: cB.bonus.item,
                amount: 1
              })]
            }), null !== sc && (0, tu.jsx)(hr, {
              tier: sc
            })]
          }, `${cB.output}|${cB.inputs[0]}`)
        }))
      })
    }

    function xu(cB) {
      let {
        taught: Bc,
        tier: nc
      } = cB;
      const {
        t: Vc
      } = (0, zr.x)(), Ic = JI(), rB = Nr(Object.values(kn), (cB => cB.tier)).filter((cB => Dr(cB.tier, nc)));
      return (0, tu.jsx)(Yr, {
        title: Vc("buildAFactory2Game:benchCanMake"),
        count: rB.length,
        startOpen: !1,
        children: rB.map((cB => {
          const rB = cB.tier > nc,
            uc = !rB && Ic.has(cB.output);
          return (0, tu.jsxs)("li", {
            className: eI()("Baf2Recipe", {
              InUse: cB.output === Bc,
              Locked: rB,
              Far: Sr(rB ? cB.tier : null, nc)
            }),
            children: [uc && (0, tu.jsx)(lr, {}), (0, tu.jsx)(zu, {
              item: cB.output,
              amount: cB.outputAmount
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeName",
              children: KI(Vc, cB.output)
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), cB.inputs.map((cB => (0, tu.jsx)(zu, {
              item: cB.item,
              amount: cB.amount
            }, cB.item))), rB && (0, tu.jsx)(hr, {
              tier: cB.tier
            })]
          }, cB.output)
        }))
      })
    }
    var dr, Ar, Gr, cs, Bu;
    const nu = LB.Generator,
      Vu = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Iu = 1e3 * (null !== (dr = nu.powerMade) && void 0 !== dr ? dr : 0) / nu.opMs,
      rs = Math.min(...(null !== (Ar = nu.fuels) && void 0 !== Ar ? Ar : []).map((cB => AB[cB]))) / 1e3,
      uu = LB["Volt Engine"],
      su = 1e3 * (null !== (Gr = uu.powerMade) && void 0 !== Gr ? Gr : 0) / uu.opMs,
      Mu = AB[null !== (cs = null === (Bu = uu.fuels) || void 0 === Bu ? void 0 : Bu[0]) && void 0 !== cs ? cs : ""] / 1e3;

    function Pu(cB) {
      let {
        item: Bc,
        label: nc,
        value: Vc,
        note: Ic,
        dim: rB
      } = cB;
      return (0, tu.jsxs)("li", {
        className: eI()("Baf2PowerRow", {
          Dim: rB
        }),
        children: [(0, tu.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, tu.jsx)(hI.d, {
            itemName: Bc,
            amount: 0
          })
        }), (0, tu.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, tu.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: nc
          }), Ic && (0, tu.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Ic
          })]
        }), (0, tu.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Vc
        })]
      })
    }

    function qs(cB, Bc, nc, Vc) {
      var Ic;
      const rB = void 0 === Vc ? LB[cB] : function(cB, Bc) {
          if (null === Bc) return cB;
          let nc = Rc.get(Bc);
          return nc || (nc = {
            ...cB,
            powerPerOp: jB(cB, Bc),
            farmMob: Bc
          }, Rc.set(Bc, nc)), nc
        }(LB[cB], Vc),
        uc = Bc && rB.couplable ? DB(rB, nc) : rB;
      return 1e3 * (null !== (Ic = uc.powerPerOp) && void 0 !== Ic ? Ic : 0) / uc.opMs
    }

    function Ou(cB) {
      var Bc, nc, Vc, Ic, rB, uc, sc, Mc;
      let {
        message: Pc
      } = cB;
      const {
        t: qB
      } = (0, zr.x)(), Oc = (cB, Bc) => qB("buildAFactory2Game:powerPerSecond", {
        rate: Pr(cB, Bc)
      }), [Tc, fc] = Pc.baf2PowerGenerators, mB = Pc.baf2PowerGeneratorFuel, ec = Pc.baf2PowerSunPanels, tB = null !== (Bc = Pc.baf2PowerSunShare) && void 0 !== Bc ? Bc : 1, Sc = Pc.baf2PowerVaults, yB = Pc.baf2PowerUsers, [zB, pc] = null !== (nc = Pc.baf2PowerEngines) && void 0 !== nc ? nc : [0, 0], hc = null !== (Vc = Pc.baf2PowerEngineCells) && void 0 !== Vc ? Vc : 0, aB = null !== (Ic = Pc.baf2PowerPads) && void 0 !== Ic ? Ic : 0, lc = null !== (rB = Pc.baf2PowerCharge) && void 0 !== rB ? rB : 0, [Yc, Lc] = null !== (uc = Pc.baf2PowerReactors) && void 0 !== uc ? uc : [0, 0], [gB, Uc] = null !== (sc = Pc.baf2PowerBatteries) && void 0 !== sc ? sc : [0, 0];
      let bB = qB("buildAFactory2Game:powerEngineCells", {
        amount: String(hc)
      });
      hc > 0 && pc > 0 && (bB = qB("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(hc),
        time: Tr(qB, hc * Mu / pc)
      }));
      let Zc = qB("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(mB)
      });
      mB > 0 && fc > 0 && (Zc = qB("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(mB),
        time: Tr(qB, mB * rs / fc)
      }));
      const Qc = Tc + zB + ec + Yc;
      return (0, tu.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, tu.jsxs)("section", {
          children: [(0, tu.jsxs)("h3", {
            children: [qB("buildAFactory2Game:powerMaking"), (0, tu.jsx)("span", {
              children: Oc(Pc.baf2PowerMadePerS, "+")
            })]
          }), (0, tu.jsxs)("ul", {
            children: [0 === Qc && (0, tu.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: qB("buildAFactory2Game:powerNoMakers")
            }), Tc > 0 && (0, tu.jsx)(Pu, {
              item: "Generator",
              label: `${KI(qB,"Generator")} \xd7${Tc}`,
              note: `${qB("buildAFactory2Game:powerRunning",{amount:String(fc)})} \xb7 ${Zc}`,
              value: Oc(fc * Iu, "+"),
              dim: 0 === fc
            }), zB > 0 && (0, tu.jsx)(Pu, {
              item: "Volt Engine",
              label: `${KI(qB,"Volt Engine")} \xd7${zB}`,
              note: `${qB("buildAFactory2Game:powerRunning",{amount:String(pc)})} \xb7 ${bB}`,
              value: Oc(pc * su, "+"),
              dim: 0 === pc
            }), ec > 0 && (0, tu.jsx)(Pu, {
              item: "Solar Panel",
              label: `${KI(qB,"Solar Panel")} \xd7${ec}`,
              note: qB(tB < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Oc(4 * ec * tB, "+")
            }), Yc > 0 && (0, tu.jsx)(Pu, {
              item: "Reactor Frame",
              label: `${qB("buildAFactory2Game:powerReactors")} \xd7${Yc}`,
              note: qB("buildAFactory2Game:powerRunning", {
                amount: String(Lc)
              }),
              value: Oc(null !== (Mc = Pc.baf2PowerReactorPerS) && void 0 !== Mc ? Mc : 0, "+"),
              dim: 0 === Lc
            })]
          })]
        }), (0, tu.jsxs)("section", {
          children: [(0, tu.jsxs)("h3", {
            children: [qB("buildAFactory2Game:powerStorage"), (0, tu.jsx)("span", {
              children: dc(Pc.baf2PowerCap)
            })]
          }), (Sc > 0 || gB > 0) && (0, tu.jsxs)("ul", {
            children: [Sc > 0 && (0, tu.jsx)(Pu, {
              item: "Charge Vault",
              label: `${KI(qB,"Charge Vault")} \xd7${Sc}`,
              value: `+${dc(8e3*Sc)}`
            }), gB > 0 && (0, tu.jsx)(Pu, {
              item: "Battery Cell",
              label: `${qB("buildAFactory2Game:powerBatteries")} \xd7${gB}`,
              value: `+${dc(Uc)}`
            })]
          })]
        }), (0, tu.jsxs)("section", {
          children: [(0, tu.jsxs)("h3", {
            children: [qB("buildAFactory2Game:powerUsing"), (0, tu.jsx)("span", {
              children: Oc(Pc.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, tu.jsxs)("ul", {
            children: [0 === yB.length && 0 === aB && 0 === lc && (0, tu.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: qB("buildAFactory2Game:powerNoUsers")
            }), yB.map((cB => {
              let [Bc, nc, Vc, Ic, rB = 1, uc] = cB, sc = nc ? qB(Vu[rB - 1], {
                name: KI(qB, Bc)
              }) : KI(qB, Bc);
              return void 0 !== uc && (sc = qB("buildAFactory2Game:powerFarmName", {
                name: sc,
                mob: qB(Hc(uc))
              })), (0, tu.jsx)(Pu, {
                item: Bc,
                label: `${sc} \xd7${Vc}`,
                note: qB("buildAFactory2Game:powerRunning", {
                  amount: String(Ic)
                }),
                value: Ic > 0 ? Oc(Ic * qs(Bc, nc, rB, uc), "\u2212") : qB("buildAFactory2Game:powerIdle"),
                dim: 0 === Ic
              }, `${Bc}|${nc}|${rB}|${uc}`)
            })), aB > 0 && (0, tu.jsx)(Pu, {
              item: "Charging Pad",
              label: `${KI(qB,"Charging Pad")} \xd7${aB}`,
              value: qB("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), lc > 0 && (0, tu.jsx)(Pu, {
              item: "Homestead Core",
              label: qB("buildAFactory2Game:powerCharge"),
              value: Oc(lc, "\u2212")
            }), Pc.baf2PowerStarved > 0 && (0, tu.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, tu.jsx)(pI.e, {
                name: "triangle-exclamation"
              }), qB("buildAFactory2Game:powerStarved", {
                amount: String(Pc.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Tu = nc(3646),
      fu = nc(1255);
    class ms {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(cB) {
        this.message = cB;
        for (const Bc of this.listeners) Bc()
      }
      get() {
        return this.message
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
    }
    class eu extends ms {}

    function ts(cB, Bc) {
      const nc = () => {
          const nc = cB.get();
          if (!nc || !Bc) return nc;
          const [Vc, Ic, rB] = nc.baf2PowerAt;
          return Vc === Bc[0] && Ic === Bc[1] && rB === Bc[2] ? nc : null
        },
        [Ic, rB] = (0, Vc.useState)(nc);
      return (0, Vc.useEffect)((() => (rB(nc()), cB.subscribe((() => {
        rB(nc())
      })))), [cB, ...null !== Bc && void 0 !== Bc ? Bc : []]), Ic
    }

    function Su(cB) {
      return {
        stored: cB.baf2PowerStored,
        cap: cB.baf2PowerCap,
        madePerS: cB.baf2PowerMadePerS,
        usedPerS: cB.baf2PowerUsedPerS
      }
    }

    function ys(cB) {
      let {
        stored: Bc,
        cap: nc
      } = cB;
      return (0, tu.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, tu.jsx)("div", {
          style: {
            width: `${Math.min(100,100*Bc/Math.max(1,nc))}%`
          }
        })
      })
    }

    function zs(cB) {
      let {
        figures: Bc,
        labelled: nc = !1
      } = cB;
      const {
        t: Vc
      } = (0, zr.x)(), Ic = Bc.madePerS - Bc.usedPerS, {
        text: rB,
        draining: uc
      } = function(cB, Bc) {
        let {
          stored: nc,
          cap: Vc,
          madePerS: Ic,
          usedPerS: rB
        } = Bc;
        const uc = Ic - rB;
        return nc >= Vc ? {
          text: cB("buildAFactory2Game:powerFull"),
          draining: !1
        } : uc > .05 ? {
          text: cB("buildAFactory2Game:powerFullIn", {
            time: Tr(cB, (Vc - nc) / uc)
          }),
          draining: !1
        } : uc < -.05 ? {
          text: cB("buildAFactory2Game:powerEmptyIn", {
            time: Tr(cB, nc / -uc)
          }),
          draining: !0
        } : {
          text: cB("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Vc, Bc);
      return (0, tu.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, tu.jsx)(ys, {
          stored: Bc.stored,
          cap: Bc.cap
        }), (0, tu.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, tu.jsx)("span", {
            children: Vc(nc ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: dc(Bc.stored),
              cap: dc(Bc.cap)
            })
          }), (0, tu.jsxs)("span", {
            className: eI()("Baf2PowerNet", {
              Draining: uc
            }),
            children: [Vc("buildAFactory2Game:powerPerSecond", {
              rate: Pr(Math.abs(Ic), Ic < 0 ? "\u2212" : "+")
            }), " \xb7 ", rB]
          })]
        })]
      })
    }

    function pu(cB) {
      let {
        stored: Bc,
        cap: nc,
        rates: Vc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)();
      return Vc ? (0, tu.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, tu.jsx)(zs, {
          figures: {
            stored: Bc,
            cap: nc,
            madePerS: Vc[0],
            usedPerS: Vc[1]
          },
          labelled: !0
        })
      }) : (0, tu.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, tu.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, tu.jsx)(ys, {
            stored: Bc,
            cap: nc
          }), (0, tu.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, tu.jsx)("span", {
              children: Ic("buildAFactory2Game:powerStoredLabelled", {
                stored: dc(Bc),
                cap: dc(nc)
              })
            })
          })]
        })
      })
    }

    function hu(cB) {
      let {
        store: Bc,
        close: nc
      } = cB;
      const {
        t: Vc
      } = (0, zr.x)(), Ic = ts(Bc);
      return (0, tu.jsx)(Tu.b, {
        close: nc,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, tu.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsxs)("div", {
              children: [(0, tu.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Vc("buildAFactory2Game:powerTitle")
              }), (0, tu.jsx)("p", {
                children: Vc("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, tu.jsx)(fu.k, {
              onClick: nc
            })]
          }), Ic && (0, tu.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, tu.jsx)(zs, {
              figures: Su(Ic)
            }), (0, tu.jsx)(Ou, {
              message: Ic
            })]
          })]
        })
      })
    }

    function as(cB) {
      var Bc;
      let {
        kind: nc,
        def: Ic,
        dD: rB,
        power: uc,
        stored: sc,
        cap: Mc
      } = cB;
      const {
        t: Pc
      } = (0, zr.x)(), qB = ts(uc, rB), [Oc, Tc] = (0, Vc.useState)(!1);
      return (0, tu.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, tu.jsx)(iu, {
          kind: nc,
          def: Ic,
          input: null,
          tier: null !== (Bc = null === qB || void 0 === qB ? void 0 : qB.baf2PowerTier) && void 0 !== Bc ? Bc : 1
        }), (0, tu.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Pc("buildAFactory2Game:powerTitle")
        }), qB && (0, tu.jsx)(zs, {
          figures: Su(qB)
        }), !qB && (0, tu.jsx)(pu, {
          stored: sc,
          cap: Mc,
          rates: null
        }), qB && (0, tu.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Tc(!Oc)
          },
          "aria-expanded": Oc,
          children: Pc(Oc ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), qB && Oc && (0, tu.jsx)(Ou, {
          message: qB
        })]
      })
    }
    const lu = 2500,
      Yu = 17500,
      Lu = `${hc} `;
    const gs = ["plan", "throttle"];

    function Uu(cB) {
      if (cB.startsWith(`${zn} `)) return cB.slice(0, cB.lastIndexOf(" "));
      const Bc = cB.split(" ");
      return Bc[0] === VB && gs.includes(Bc[4]) ? Bc.slice(0, 5).join(" ") : null
    }
    class bs {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = cB, this.now = Bc, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.sentCount = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = Bc()
      }
      enqueue(cB) {
        this.queue(cB, this.nextTicket());
        const Bc = this.sentCount + this.pending.length;
        return this.flush(), Bc
      }
      track(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const nc = this.nextTicket();
        if (!Bc.urgent) return this.queue(cB, nc), this.flush(), nc;
        const {
          supersedes: Vc
        } = Bc;
        for (let rB = this.pending.length - 1; rB >= this.urgent; rB--) {
          const Bc = this.pending[rB];
          (Bc.command === cB || null !== Vc && void 0 !== Vc && Vc(Bc.command)) && (this.pending.splice(rB, 1), this.markLeft(Bc.tickets))
        }
        const Ic = this.pending.findIndex((Bc => {
          let {
            command: nc
          } = Bc;
          return nc === cB
        }));
        return -1 !== Ic ? this.pending[Ic].tickets.push(nc) : (this.pending.splice(this.urgent, 0, {
          command: cB,
          tickets: [nc]
        }), this.urgent += 1), this.flush(), nc
      }
      leftAt(cB) {
        const Bc = this.leftTimes.get(cB);
        return void 0 !== Bc ? Bc : this.pending.some((Bc => {
          let {
            tickets: nc
          } = Bc;
          return nc.includes(cB)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let cB = !0;
        return () => {
          cB && (cB = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(cB) {
        var Bc;
        return (null === (Bc = this.pending.at(-1)) || void 0 === Bc ? void 0 : Bc.command) === cB
      }
      sent() {
        return this.sentCount
      }
      clear() {
        for (const {
            tickets: cB
          }
          of this.pending) this.markLeft(cB);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(cB) {
        const Bc = this.now();
        for (const nc of cB) this.leftTimes.set(nc, Bc);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(cB, Bc) {
        const nc = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === nc || void 0 === nc ? void 0 : nc.command) === cB) return void(! function(cB) {
          return cB === aB || cB.startsWith(`${pc} `) || cB.startsWith(`${wc} `)
        }(cB) ? nc.tickets.push(Bc) : (this.pending.pop(), this.markLeft([...nc.tickets, Bc])));
        const Vc = void 0 === nc ? null : function(cB, Bc) {
          const nc = `${Gc} `;
          if (!cB.startsWith(nc) || !Bc.startsWith(nc)) return null;
          const Vc = nB(cB.slice(nc.length)),
            Ic = nB(Bc.slice(nc.length));
          return Vc && Ic && Vc.item === Ic.item ? BB(Ic.seq, function(cB, Bc) {
            const nc = cB => "number" === typeof cB ? cB : "one" === cB ? 1 : 99;
            return "fill" === cB || "fill" === Bc ? "fill" : nc(cB) + nc(Bc)
          }(Vc.mode, Ic.mode), Ic.item) : null
        }(nc.command, cB);
        if (null !== Vc && void 0 !== nc) return nc.command = Vc, void nc.tickets.push(Bc);
        const Ic = Uu(cB);
        if (null !== Ic && void 0 !== nc && Uu(nc.command) === Ic) return nc.command = cB, void nc.tickets.push(Bc);
        if (null !== nc && void 0 !== nc && nc.command.startsWith(Lu) && cB.startsWith(Lu)) {
          const Vc = cB.slice(Lu.length);
          if (nc.command.slice(Lu.length).split(",").includes(Vc)) return void nc.tickets.push(Bc);
          const Ic = `${nc.command},${Vc}`;
          if (Ic.length <= 119) return nc.command = Ic, void nc.tickets.push(Bc)
        }
        this.pending.push({
          command: cB,
          tickets: [Bc]
        })
      }
      flush() {
        const cB = this.now();
        for (this.tokens = Math.min(5, this.tokens + (cB - this.refilledAt) / lu), this.refilledAt = cB; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.sentCount += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: cB,
            tickets: Bc
          } = this.pending.shift();
          this.markLeft(Bc), this.send(cB)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * lu)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Zu {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new bs(cB, Bc)
      }
      send(cB) {
        return this.queue.enqueue(cB)
      }
      sent() {
        return this.queue.sent()
      }
      track(cB, Bc) {
        return this.queue.track(cB, Bc)
      }
      leftAt(cB) {
        return this.queue.leftAt(cB)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(cB) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = Bc, this.send(cB), this.islandEdits.count
      }
      syncIslandEdits(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: nc
        } = this, Vc = Bc - nc.lastAtMs < Yu;
        nc.count = Vc ? Math.max(nc.count, cB) : cB
      }
      clear() {
        this.queue.clear()
      }
    }
    const Qu = (0, Vc.createContext)(null);

    function Cu() {
      const cB = (0, Vc.useContext)(Qu);
      if (!cB) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return cB
    }

    function vs(cB, Bc) {
      return null !== Bc && void 0 !== Bc ? Bc : 1 === cB
    }

    function Du(cB, Bc) {
      return cB.every((cB => {
        var nc;
        let [Vc, , Ic] = cB;
        return !vs(Ic, null === (nc = Bc.get(Vc)) || void 0 === nc ? void 0 : nc.kept)
      }))
    }

    function Nu(cB, Bc, nc) {
      if (0 === cB.size) return cB;
      const Vc = new Map(cB);
      for (const [Ic, rB] of cB) {
        const cB = Bc.find((cB => {
          let [Bc] = cB;
          return Bc === Ic
        }));
        (!cB || rB.kept === (1 === cB[2]) || rB.atMs < nc) && Vc.delete(Ic)
      }
      return Vc
    }

    function Eu(cB) {
      var Bc;
      let {
        dD: nc,
        input: Ic,
        drops: rB,
        seconds: uc
      } = cB;
      const {
        t: sc
      } = (0, zr.x)(), Mc = Cu(), [Pc, qB] = (0, Vc.useState)(new Map);
      (0, Vc.useEffect)((() => {
        rB && qB((cB => Nu(cB, rB, Date.now() - Yu)))
      }), [rB]), (0, Vc.useEffect)((() => {
        const cB = function(cB, Bc) {
          let nc = null;
          for (const {
              atMs: Vc
            }
            of cB.values()) nc = null === nc ? Vc : Math.min(nc, Vc);
          return null === nc ? null : nc + Bc
        }(Pc, Yu);
        if (null === cB || !rB) return;
        const Bc = setTimeout((() => {
          qB((cB => Nu(cB, rB, Date.now() - Yu)))
        }), Math.max(0, cB - Date.now()) + 1);
        return () => {
          clearTimeout(Bc)
        }
      }), [Pc, rB]);
      const Oc = Fc(Ic),
        Tc = null !== Oc && null !== rB && Du(rB, Pc),
        fc = function(cB, Bc, nc) {
          return null === cB || null === Bc || Du(Bc, nc) ? 0 : Wc[Ec[cB]]
        }(Oc, rB, Pc);
      return (0, tu.jsxs)(Yr, {
        title: sc("buildAFactory2Game:farmDropsTitle", {
          seconds: uc
        }),
        count: null !== (Bc = null === rB || void 0 === rB ? void 0 : rB.length) && void 0 !== Bc ? Bc : 0,
        children: [fc > 0 && (0, tu.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: sc("buildAFactory2Game:farmDropsPower", {
            power: String(fc)
          })
        }), (null === Oc || !rB) && (0, tu.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: sc("buildAFactory2Game:farmDropsEmpty")
        }), Tc && (0, tu.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: sc("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Oc && (null === rB || void 0 === rB ? void 0 : rB.map((cB => {
          var Bc;
          let [Vc, Ic, rB] = cB;
          const uc = Ic < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Oc = vs(rB, null === (Bc = Pc.get(Vc)) || void 0 === Bc ? void 0 : Bc.kept);
          return (0, tu.jsxs)("li", {
            className: eI()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Oc
            }),
            children: [(0, tu.jsx)(zu, {
              item: Vc,
              amount: 1
            }), (0, tu.jsx)("span", {
              className: "Baf2RecipeName",
              children: KI(sc, Vc)
            }), (0, tu.jsx)("span", {
              className: "Baf2FarmRate",
              children: sc(uc, {
                amount: String(Ic)
              })
            }), (0, tu.jsx)("button", {
              type: "button",
              className: eI()("Baf2FarmToggle SmallTextBold", {
                Kept: Oc
              }),
              "aria-pressed": Oc,
              onClick: () => {
                qB(new Map(Pc).set(Vc, {
                  kept: !Oc,
                  atMs: Date.now()
                })), Mc.send(function(cB, Bc, nc, Vc) {
                  return `${wc} ${cB} ${Bc} ${nc} ${Vc}`
                }(nc[0], nc[1], nc[2], Vc))
              },
              children: sc(Oc ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Vc)
        })))]
      })
    }
    var ou;
    const Wu = String(null !== (ou = LB.Synthesizer.waterPerOp) && void 0 !== ou ? ou : 0);

    function wu(cB) {
      let {
        dD: Bc,
        taught: nc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)(), rB = Cu(), [uc, sc] = (0, Vc.useState)(null);
      (0, Vc.useEffect)((() => {
        null !== uc && nc === uc && sc(null)
      }), [uc, nc]);
      const Mc = null !== uc && void 0 !== uc ? uc : nc;
      let Pc = Ic("buildAFactory2Game:synthPick");
      return null !== Mc && (Pc = Ic("buildAFactory2Game:synthGrows", {
        name: KI(Ic, Mc),
        input: KI(Ic, tn),
        water: Wu
      })), (0, tu.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, tu.jsx)("div", {
          className: eI()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Mc
          }),
          children: Pc
        }), (0, tu.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: SB.map(((cB, nc) => {
            const Vc = KI(Ic, cB),
              uc = cB === Mc;
            return (0, tu.jsx)("li", {
              children: (0, tu.jsx)("button", {
                type: "button",
                className: eI()("Baf2SynthTile", {
                  Selected: uc
                }),
                title: Vc,
                "aria-label": Vc,
                "aria-pressed": uc,
                onClick: () => {
                  uc || (sc(cB), rB.send(`${zn} ${Bc[0]} ${Bc[1]} ${Bc[2]} ${nc}`))
                },
                children: (0, tu.jsx)(hI.d, {
                  itemName: cB,
                  amount: 0
                })
              })
            }, cB)
          }))
        })]
      })
    }
    const ks = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function Xu(cB) {
      let {
        kind: Bc,
        tier: nc,
        coupled: Vc,
        level: Ic,
        slot: rB
      } = cB;
      const {
        t: uc
      } = (0, zr.x)(), Mc = xB(UB);
      if (!Vc && null !== nc && nc < Mc) return (0, tu.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, tu.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, tu.jsx)(pI.e, {
            name: "lock"
          })
        }), (0, tu.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: uc("buildAFactory2Game:upgradeLocked")
        }), (0, tu.jsx)("span", {
          className: "Baf2TierTag",
          children: uc("buildAFactory2Game:tierTag", {
            tier: String(Mc)
          })
        })]
      });
      const Pc = function(cB, Bc) {
          if (sc() && "Crusher" !== cB && null !== Bc) {
            if (Hu(ZB, Bc)) return {
              item: ZB,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (Hu(bn, Bc)) return {
              item: bn,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: UB,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(Bc, nc),
        qB = uc(Vc ? ks[Ic - 1] : Pc.emptyKey),
        Oc = null !== nc ? function(cB, Bc, nc, Vc) {
          if (!sc() || !nc || "Crusher" === cB || Bc < 10) return null;
          const Ic = xB(ZB);
          if (Vc < 3 && Ic > 1 && (2 === Vc || Bc >= Ic)) return {
            tier: Ic,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const rB = xB(bn);
          if (1 === Vc && rB > 1) return {
            tier: rB,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(Bc, nc, Vc, Ic) : null;
      return (0, tu.jsxs)("div", {
        className: eI()("Baf2UpgradeSocket", {
          Fitted: Vc
        }),
        children: [(0, tu.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Vc && rB, !Vc && (0, tu.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, tu.jsx)(hI.d, {
              itemName: Pc.item,
              amount: 0
            })
          })]
        }), (0, tu.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, tu.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: uc("buildAFactory2Game:upgradeTitle")
          }), (0, tu.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: qB
          }), Vc && Ic >= 2 && "Crusher" === Bc && (0, tu.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: uc("buildAFactory2Game:couplerCrusherHint")
          }), Oc && null !== nc && nc < Oc.tier && (0, tu.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, tu.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, tu.jsx)(pI.e, {
                name: "lock"
              })
            }), uc(Oc.lockedKey), (0, tu.jsx)("span", {
              className: "Baf2TierTag",
              children: uc("buildAFactory2Game:tierTag", {
                tier: String(Oc.tier)
              })
            })]
          }), Oc && null !== nc && nc >= Oc.tier && (0, tu.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: uc(Oc.nextKey)
          })]
        })]
      })
    }

    function Hu(cB, Bc) {
      const nc = xB(cB);
      return nc > 1 && Bc >= nc
    }
    var Fu = nc(35628);
    const Ju = (0, Ac.F)(LB.Condenser, LB.Condenser.fluidMade),
      jsc = .05;
    class Ru extends ms {}

    function is(cB) {
      return Pr(cB, "")
    }

    function Ku(cB, Bc, nc) {
      return cB(Bc ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: nc
      })
    }

    function xs(cB, Bc, nc, Vc) {
      return nc <= jsc && Vc <= jsc ? null : Vc <= jsc || nc <= jsc ? Ku(cB, Bc, Vc <= jsc ? Pr(nc, "+") : Pr(Vc, "\u2212")) : cB(Bc ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: is(nc),
        used: is(Vc)
      })
    }

    function du(cB, Bc) {
      return Math.min(100, 100 * cB / Math.max(1, Bc))
    }

    function Au(cB) {
      let {
        stored: Bc,
        cap: nc,
        netPerS: Vc,
        rates: Ic,
        cryo: rB
      } = cB;
      const {
        t: uc
      } = (0, zr.x)(), sc = function(cB, Bc, nc, Vc) {
        return nc <= 0 ? cB("buildAFactory2Game:waterNoStorage") : Bc >= nc ? cB("buildAFactory2Game:powerFull") : Vc > jsc ? cB("buildAFactory2Game:powerFullIn", {
          time: Tr(cB, (nc - Bc) / Vc)
        }) : Vc < -.05 ? Bc <= 0 ? cB("buildAFactory2Game:waterEmpty") : cB("buildAFactory2Game:powerEmptyIn", {
          time: Tr(cB, Bc / -Vc)
        }) : cB("buildAFactory2Game:powerSteady")
      }(uc, Bc, nc, Vc), Mc = nc > 0 && Bc < nc && Math.abs(Vc) <= jsc, Pc = uc(rB ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), qB = null !== Ic ? `${Ic} \xb7 ${sc}` : Mc ? Pc : `${Pc} \xb7 ${sc}`;
      return (0, tu.jsxs)(tu.Fragment, {
        children: [(0, tu.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, tu.jsx)("div", {
            style: {
              width: `${du(Bc,nc)}%`
            }
          })
        }), (0, tu.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, tu.jsx)("span", {
            children: nc > 0 && uc("buildAFactory2Game:powerStored", {
              stored: (0, Ac.O)(Bc),
              cap: (0, Ac.O)(nc)
            })
          }), (0, tu.jsx)("span", {
            className: eI()("Baf2WaterNet", {
              Draining: Vc < -.05
            }),
            children: qB
          })]
        })]
      })
    }

    function Gu(cB) {
      let {
        water: Bc,
        at: nc,
        side: Vc = null
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)(), rB = Cu(), [uc, sc, Mc] = Bc;
      return (0, tu.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, tu.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, tu.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Ic(null === Vc ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Vc}`)
          }), (0, tu.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              rB.send(`${Ac.D} ${nc[0]} ${nc[1]} ${nc[2]}${"cryoOut"===Vc?" cryo":""}`)
            },
            children: Ic("buildAFactory2Game:waterDetails")
          })]
        }), (0, tu.jsx)(Au, {
          stored: uc,
          cap: sc,
          netPerS: Mc,
          rates: Ku(Ic, "cryoOut" === Vc, Pr(Math.abs(Mc), Mc < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Vc
        })]
      })
    }

    function cM(cB, Bc) {
      var nc, Vc, Ic;
      const rB = !0 === Bc.baf2WaterCryo,
        uc = null !== (nc = null === (Vc = Bc.baf2WaterMakers.find((cB => cB[0] === (rB ? Ac.d : "Condenser")))) || void 0 === Vc ? void 0 : Vc[1]) && void 0 !== nc ? nc : 0,
        sc = [],
        Mc = (Bc, nc, Vc) => {
          Bc > 0 && sc.push(cB(1 === Bc ? nc : Vc, {
            count: String(Bc)
          }))
        };
      return rB ? Mc(uc, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Mc(uc, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Mc(null !== (Ic = Bc.baf2WaterPipes) && void 0 !== Ic ? Ic : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Mc(Bc.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), sc.join(" \xb7 ")
    }

    function Bs(cB, Bc) {
      if (!0 === Bc.baf2WaterCryo) return function(cB, Bc) {
        const nc = LB[Ac.d];
        switch (Bc.baf2WaterThis) {
          case "pipe":
            return {
              text: cB("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: cB("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: cB("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: cB("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: cB("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: cB("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: cB("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var Vc;
            const [Ic, rB] = null !== (Vc = Bc.baf2WaterThisRates) && void 0 !== Vc ? Vc : [(0, Ac.F)(nc, nc.cryoMade), (0, Ac.F)(nc, nc.powerPerOp)];
            return !0 === Bc.baf2WaterDriven ? {
              text: cB("buildAFactory2Game:cryoThisMixerDriven", {
                rate: is(Ic)
              }),
              bad: !1
            } : {
              text: cB("buildAFactory2Game:cryoThisMixer", {
                rate: is(Ic),
                power: is(rB)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: cB("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(cB, Bc);
      const nc = !0 === Bc.baf2WaterDriven,
        Vc = LB.Condenser;
      switch (Bc.baf2WaterThis) {
        case "pipe":
          return {
            text: cB("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: cB("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: cB("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: cB("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: cB("buildAFactory2Game:waterThisTank", {
              tank: (0, Ac.O)(Ac.t),
              cap: (0, Ac.O)(Bc.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Ic;
          const [rB, uc] = null !== (Ic = Bc.baf2WaterThisRates) && void 0 !== Ic ? Ic : [Ju, (0, Ac.F)(Vc, Vc.powerPerOp)];
          return nc ? {
            text: cB("buildAFactory2Game:waterThisCondenserDriven", {
              rate: is(rB)
            }),
            bad: !1
          } : {
            text: cB("buildAFactory2Game:waterThisCondenser", {
              rate: is(rB),
              power: is(uc)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: cB("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function ns(cB, Bc) {
      const nc = Bc.baf2WaterMakers.some((cB => !0 === cB[5]));
      if (!0 === Bc.baf2WaterCryo) {
        const Vc = Bc.baf2WaterUsedPerS - Bc.baf2WaterMadePerS,
          Ic = nc || Vc <= jsc ? 0 : (0, Ac.E)(Vc);
        return 0 === Ic ? null : Ic > 1 ? cB("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Ic)
        }) : cB("buildAFactory2Game:cryoNextOne")
      }
      const Vc = nc ? null : function(cB, Bc) {
        const nc = Bc - cB;
        return nc <= jsc ? null : Math.ceil(nc / Ju)
      }(Bc.baf2WaterMadePerS, Bc.baf2WaterUsedPerS);
      return null === Vc ? null : Vc > 1 ? cB("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Vc)
      }) : cB("buildAFactory2Game:waterNextOne")
    }

    function Vs(cB) {
      let {
        item: Bc,
        label: nc,
        note: Vc,
        value: Ic,
        dim: rB,
        bad: uc
      } = cB;
      return (0, tu.jsxs)("li", {
        className: eI()("Baf2WaterRow", {
          Dim: rB,
          Bad: uc
        }),
        children: [(0, tu.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, tu.jsx)(hI.d, {
            itemName: Bc,
            amount: 0
          })
        }), (0, tu.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, tu.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: nc
          }), Vc && (0, tu.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Vc
          })]
        }), (0, tu.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Ic
        })]
      })
    }

    function Is(cB) {
      return Fu.l[cB] ? cB : "Reactor Port"
    }

    function rM(cB) {
      let {
        message: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)(), Vc = !0 === Bc.baf2WaterCryo, Ic = (cB, Bc) => Ku(nc, Vc, Pr(cB, Bc));
      return (0, tu.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, tu.jsxs)("section", {
          children: [(0, tu.jsxs)("h3", {
            children: [nc("buildAFactory2Game:waterMakes"), (0, tu.jsx)("span", {
              children: Ic(Bc.baf2WaterMadePerS, "+")
            })]
          }), (0, tu.jsxs)("ul", {
            children: [0 === Bc.baf2WaterMakers.length && (0, tu.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: nc(Vc ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), Bc.baf2WaterMakers.map((cB => {
              let [Bc, Vc, rB, uc, sc, Mc] = cB;
              const Pc = nc("buildAFactory2Game:powerRunning", {
                amount: String(rB)
              });
              let qB = sc > 0 ? nc("buildAFactory2Game:waterMakerPower", {
                running: Pc,
                power: is(sc)
              }) : Pc;
              return Mc && (qB = nc(0 === rB && uc <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, tu.jsx)(Vs, {
                item: Bc,
                label: `${KI(nc,Bc)} \xd7${Vc}`,
                note: qB,
                value: rB > 0 || Mc && uc > 0 ? Ic(uc, "+") : nc("buildAFactory2Game:powerIdle"),
                dim: 0 === rB && !Mc,
                bad: Mc
              }, Bc)
            }))]
          })]
        }), (0, tu.jsxs)("section", {
          children: [(0, tu.jsxs)("h3", {
            children: [nc("buildAFactory2Game:waterUses"), (0, tu.jsx)("span", {
              children: Ic(Bc.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, tu.jsxs)("ul", {
            children: [0 === Bc.baf2WaterUsers.length && (0, tu.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: nc(Vc ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), Bc.baf2WaterUsers.map((cB => {
              let [Bc, Vc, rB, uc] = cB;
              const sc = Fu.l[Bc] ? KI(nc, Bc) : Bc;
              return (0, tu.jsx)(Vs, {
                item: Is(Bc),
                label: Vc > 1 ? `${sc} \xd7${Vc}` : sc,
                note: uc ? nc("buildAFactory2Game:waterPortFirst") : void 0,
                value: rB > 0 ? Ic(rB, "\u2212") : nc("buildAFactory2Game:powerIdle"),
                dim: 0 === rB
              }, Bc)
            }))]
          })]
        })]
      })
    }

    function us(cB) {
      var Bc, nc, Ic, rB, uc;
      let {
        store: sc,
        close: Mc
      } = cB;
      const {
        t: Pc
      } = (0, zr.x)(), qB = function(cB) {
        const [Bc, nc] = (0, Vc.useState)((() => cB.get()));
        return (0, Vc.useEffect)((() => (nc(cB.get()), cB.subscribe((() => {
          nc(cB.get())
        })))), [cB]), Bc
      }(sc), Oc = null !== (Bc = null === qB || void 0 === qB ? void 0 : qB.baf2WaterStored) && void 0 !== Bc ? Bc : 0, Tc = null !== (nc = null === qB || void 0 === qB ? void 0 : qB.baf2WaterCap) && void 0 !== nc ? nc : 0, fc = null !== (Ic = null === qB || void 0 === qB ? void 0 : qB.baf2WaterMadePerS) && void 0 !== Ic ? Ic : 0, mB = null !== (rB = null === qB || void 0 === qB ? void 0 : qB.baf2WaterUsedPerS) && void 0 !== rB ? rB : 0, ec = null !== (uc = null === qB || void 0 === qB ? void 0 : qB.baf2WaterNetPerS) && void 0 !== uc ? uc : fc - mB, tB = qB && Bs(Pc, qB), Sc = qB && ns(Pc, qB), yB = !0 === (null === qB || void 0 === qB ? void 0 : qB.baf2WaterCryo);
      return (0, tu.jsx)(Tu.b, {
        close: Mc,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, tu.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== qB && Tc <= 0 ? (0, tu.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, tu.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, tu.jsx)(hI.d, {
                  itemName: yB ? sn.h : Ac.k,
                  amount: 0
                })
              }), (0, tu.jsxs)("div", {
                children: [(0, tu.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Pc(yB ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), qB && (0, tu.jsx)("p", {
                  children: cM(Pc, qB)
                })]
              })]
            }), (0, tu.jsx)(fu.k, {
              onClick: Mc
            })]
          }), qB && tB && (0, tu.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, tu.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, tu.jsx)(Au, {
                stored: Oc,
                cap: Tc,
                netPerS: ec,
                cryo: yB,
                rates: xs(Pc, yB, fc, mB)
              })
            }), (0, tu.jsx)("div", {
              className: eI()("Baf2WaterThis", {
                Bad: tB.bad
              }),
              children: tB.text
            }), qB.baf2WaterDriven && (0, tu.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, tu.jsx)(pI.e, {
                name: "bolt"
              }), Pc(yB ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), Sc && (0, tu.jsx)("p", {
              className: "Baf2WaterNext",
              children: Sc
            }), (0, tu.jsx)(rM, {
              message: qB
            })]
          })]
        })
      })
    }
    class ss {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(cB, Bc) {
        const nc = this.get(cB);
        nc && null === Bc.opLeftMs && null === Bc.fuelLeftMs && Bc.status === nc.status ? Bc = {
          ...Bc,
          opLeftMs: nc.opLeftMs,
          fuelLeftMs: nc.fuelLeftMs,
          burning: nc.burning
        } : this.updates++, this.pos = cB, this.view = Bc;
        for (const Vc of this.listeners) Vc()
      }
      get(cB) {
        return null !== this.pos && this.pos[0] === cB[0] && this.pos[1] === cB[1] && this.pos[2] === cB[2] ? this.view : null
      }
      forget(cB) {
        null !== this.get(cB) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
    }

    function Ms(cB, Bc, nc, Vc) {
      return "noFuel" === Bc && Vc && !dB(LB[cB]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === Bc && !0 === (null === nc || void 0 === nc ? void 0 : nc.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === Bc && !0 === (null === nc || void 0 === nc ? void 0 : nc.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === Bc && !0 === (null === nc || void 0 === nc ? void 0 : nc.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === Bc && !0 === (null === nc || void 0 === nc ? void 0 : nc.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Ps(Bc, nc) ? "buildAFactory2Game:machineStatus_noInputShort" : function(cB, Bc) {
        const nc = LB[cB];
        if ("noFuel" === Bc && void 0 !== nc.fuels) return dB(nc) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (nc.mobFarm && ("noInput" === Bc || "badInput" === Bc)) return `buildAFactory2Game:machineStatus_${Bc}MobFarm`;
        if ("outputFull" === Bc && (void 0 !== nc.table || nc.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === Bc && WB(nc)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== nc.cryoMade && ("noInput" === Bc || "noOutlet" === Bc || "fluidFull" === Bc)) return `buildAFactory2Game:machineStatus_${Bc}Mixer`;
        return `buildAFactory2Game:machineStatus_${Bc}`
      }(cB, Bc)
    }

    function Ps(cB, Bc) {
      return "noInput" === cB && null !== Bc && void 0 !== Bc && Bc.input && Bc.inputShort ? {
        input: Bc.input,
        short: Bc.inputShort
      } : null
    }

    function qM(cB) {
      return tr(cB) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== cB.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Os(cB) {
      const Bc = (0, Dc.Nd)(cB);
      return `Baf2Pane Baf2Pane${Bc.charAt(0).toUpperCase()}${Bc.slice(1)}`
    }

    function Ts(cB, Bc) {
      const [nc, Ic] = (0, Vc.useState)((() => cB.get(Bc)));
      return (0, Vc.useEffect)((() => {
        Ic(cB.get(Bc));
        const nc = cB.subscribe((() => {
          Ic(cB.get(Bc))
        }));
        return () => {
          nc(), cB.forget(Bc)
        }
      }), [cB, ...Bc]), nc
    }

    function fs(cB, Bc, nc, Vc) {
      const Ic = LB[cB],
        rB = Bc && Ic.couplable ? DB(Ic, nc) : Ic,
        uc = null !== Vc && RB(rB) ? function(cB, Bc) {
          var nc;
          return null !== (nc = null !== Bc && RB(cB) ? cV[Bc] : void 0) && void 0 !== nc ? nc : cB.opMs
        }(rB, Bn(Vc)) : rB.opMs;
      return uc === rB.opMs ? rB : {
        ...rB,
        opMs: uc
      }
    }

    function mM(cB) {
      let {
        running: Bc,
        opMs: nc,
        opLeftMs: Vc,
        updateCount: Ic
      } = cB;
      return (0, tu.jsx)("div", {
        className: eI()("Baf2MachineProgress", {
          Running: Bc
        }),
        children: (0, tu.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: nc / 1e3 + "s",
            animationDelay: null === Vc ? void 0 : (Vc - nc) / 1e3 + "s"
          }
        }, Ic)
      })
    }

    function es(cB) {
      let {
        running: Bc,
        leftMs: nc,
        periodMs: Vc,
        updateCount: Ic
      } = cB;
      const {
        t: rB
      } = (0, zr.x)(), uc = Math.min(Math.max(null !== nc && void 0 !== nc ? nc : 0, 0), Vc), sc = Bc && uc > 0, Mc = rB("buildAFactory2Game:machineBarFuel");
      return (0, tu.jsx)("div", {
        className: eI()("Baf2FuelBurn", {
          Draining: sc
        }),
        role: "img",
        title: Mc,
        "aria-label": Mc,
        children: (0, tu.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: sc ? {
            animationDuration: Vc / 1e3 + "s",
            animationDelay: (uc - Vc) / 1e3 + "s"
          } : {
            transform: `scaleY(${uc/Vc})`
          }
        }, Ic)
      })
    }

    function tM(cB, Bc, nc) {
      let [Vc, Ic] = nc;
      const rB = 1 !== Vc ? yr(Bc) : null;
      return {
        amount: Vc,
        have: Ic,
        item: cB(rB || ir(Bc))
      }
    }

    function Ss(cB) {
      return RB(cB) ? "buildAFactory2Game:machineBarMining" : KB(cB) ? "buildAFactory2Game:machineBarCutting" : void 0 !== cB.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function yM(cB) {
      var Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc, yB, zB;
      let {
        kind: pc,
        dD: hc,
        store: aB,
        power: lc,
        renderSlot: Yc
      } = cB;
      const {
        t: Lc
      } = (0, zr.x)(), gB = Ts(aB, hc), Uc = LB[pc], bB = null !== (Bc = null === gB || void 0 === gB ? void 0 : gB.coupled) && void 0 !== Bc && Bc, Zc = null !== (nc = null === gB || void 0 === gB ? void 0 : gB.couplerLevel) && void 0 !== nc ? nc : 1, Qc = fs(pc, bB, Zc, null !== (Vc = null === gB || void 0 === gB || null === (Ic = gB.dug) || void 0 === Ic ? void 0 : Ic.item) && void 0 !== Vc ? Vc : null), Cc = null !== (rB = null === gB || void 0 === gB ? void 0 : gB.status) && void 0 !== rB ? rB : null, vB = null !== (uc = null === gB || void 0 === gB ? void 0 : gB.power) && void 0 !== uc ? uc : null, Dc = null !== (sc = null === gB || void 0 === gB ? void 0 : gB.opLeftMs) && void 0 !== sc ? sc : null, Nc = null !== (Mc = null === gB || void 0 === gB ? void 0 : gB.dug) && void 0 !== Mc ? Mc : null, Ec = null !== Nc && RB(Uc) ? cV[null !== (Pc = Bn(Nc.item)) && void 0 !== Pc ? Pc : ""] : void 0, oc = void 0 === Ec ? null : 6e4 / Ec, Wc = null !== (qB = null === gB || void 0 === gB ? void 0 : gB.powerCap) && void 0 !== qB ? qB : 4e3, wc = null !== (Oc = null === gB || void 0 === gB ? void 0 : gB.tier) && void 0 !== Oc ? Oc : null, kB = void 0 !== Qc.powerMade, Xc = null !== Uc.fuelSlot ? Yc(Uc.fuelSlot) : null, Hc = vn(Uc), Fc = !bB && !0 === (null === gB || void 0 === gB ? void 0 : gB.fuelFed), jB = !bB && !0 === (null === gB || void 0 === gB ? void 0 : gB.fuelFeeds), Rc = null !== Uc.fuelSlot && !bB, iB = null !== (Tc = null === gB || void 0 === gB ? void 0 : gB.fuelLeftMs) && void 0 !== Tc ? Tc : null, Kc = function(cB, Bc, nc) {
        var Vc;
        const Ic = null === Bc ? void 0 : AB[Bc];
        return Math.max(null !== (Vc = null !== Ic && void 0 !== Ic ? Ic : nc) && void 0 !== Vc ? Vc : 0, cB.opMs)
      }(Qc, null !== (fc = null === gB || void 0 === gB ? void 0 : gB.burning) && void 0 !== fc ? fc : null, iB), xB = null !== (mB = null === gB || void 0 === gB ? void 0 : gB.fuelKeep) && void 0 !== mB ? mB : null, dc = null === Cc ? null : Ms(pc, Cc, gB, Fc), Ac = null === Cc ? null : Ps(Cc, gB);
      return (0, tu.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, tu.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, tu.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Lc(ir(pc))
          }), Nc && (0, tu.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [Lc("Tree Cutter" === pc ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, tu.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, tu.jsx)(hI.d, {
                itemName: Nc.item,
                amount: 0
              })
            }), (0, tu.jsx)(ar.e, {
              text: Nc.name
            })]
          }), null !== oc && (0, tu.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: Lc("buildAFactory2Game:machineDigsFixed", {
              perMin: String(oc)
            })
          }), (null === gB || void 0 === gB ? void 0 : gB.field) && (0, tu.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, tu.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, tu.jsx)(hI.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), Lc("buildAFactory2Game:machineField", {
              planted: String(gB.field[0]),
              ripe: String(gB.field[1])
            })]
          }), (0, tu.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, tu.jsxs)("div", {
              className: eI()("Baf2MachineColumn", {
                Baf2Burns: Rc
              }),
              children: [null !== Qc.inputSlot && (0, tu.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, tu.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Lc(qM(Qc))
                }), Yc(Qc.inputSlot)]
              }), null !== Uc.fuelSlot && !bB && (0, tu.jsxs)("div", {
                className: eI()("Baf2MachineSlot", {
                  Baf2FuelFed: Fc
                }),
                children: [(0, tu.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [Fc && (0, tu.jsx)(pI.e, {
                    name: "fire"
                  }), Lc("buildAFactory2Game:machineFuel")]
                }), (0, tu.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, tu.jsx)(es, {
                    running: "running" === Cc,
                    leftMs: iB,
                    periodMs: Kc,
                    updateCount: aB.updateCount
                  }), Xc]
                })]
              }), null !== Uc.fuelSlot && bB && (0, tu.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, tu.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Lc("buildAFactory2Game:machineFuel")
                }), (0, tu.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: Lc("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": Lc("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, tu.jsx)(pI.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, tu.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, tu.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Lc(Ss(Qc))
              }), (0, tu.jsx)(mM, {
                running: "running" === Cc,
                opMs: Qc.opMs,
                opLeftMs: Dc,
                updateCount: aB.updateCount
              })]
            }), Qc.outputSlots.length > 0 && (0, tu.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, tu.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Lc("buildAFactory2Game:machineOutput")
              }), (0, tu.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Qc.outputSlots.map((cB => (0, tu.jsx)("div", {
                  children: Yc(cB)
                }, cB)))
              })]
            }), null !== vB && kB && (0, tu.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, tu.jsx)("div", {
                style: {
                  height: 100 * vB / Wc + "%"
                }
              })
            })]
          }), Rc && null !== xB && (0, tu.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, tu.jsx)(pI.e, {
              name: "arrows-rotate"
            }), Lc(KB(Qc) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(xB)
            })]
          }), (Fc || jB) && (0, tu.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, tu.jsx)(pI.e, {
              name: "fire"
            }), Lc(Fc ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Uc.couplable && (0, tu.jsx)(Xu, {
            kind: pc,
            tier: wc,
            coupled: bB,
            level: Zc,
            slot: Hc === Uc.fuelSlot ? Xc : null !== Hc ? Yc(Hc) : null
          }), null !== vB && !kB && !0 === (null === gB || void 0 === gB ? void 0 : gB.reactorPowered) && (0, tu.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: Lc("buildAFactory2Game:machineReactorPowered")
          }), null !== vB && !kB && !0 !== (null === gB || void 0 === gB ? void 0 : gB.reactorPowered) && (0, tu.jsx)(pu, {
            stored: vB,
            cap: Wc,
            rates: null !== (ec = null === gB || void 0 === gB ? void 0 : gB.powerRates) && void 0 !== ec ? ec : null
          }), (null === gB || void 0 === gB ? void 0 : gB.water) && (0, tu.jsx)(Gu, {
            water: gB.water,
            at: hc,
            side: gB.cryo ? "waterIn" : null
          }), (null === gB || void 0 === gB ? void 0 : gB.cryo) && (0, tu.jsx)(Gu, {
            water: gB.cryo,
            at: hc,
            side: "cryoOut"
          }), null !== gB && void 0 !== gB && gB.inertCoupler ? (0, tu.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: Lc("buildAFactory2Game:machineStatus_couplerOff", {
              item: KI(Lc, gB.inertCoupler)
            })
          }) : null !== dc && (0, tu.jsx)("div", {
            className: eI()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Cc
            }),
            children: Lc(dc, Ac ? tM(Lc, Ac.input, Ac.short) : void 0)
          })]
        }), (0, tu.jsxs)("div", {
          className: eI()("Baf2MachineSide", {
            Baf2SynthSide: WB(Uc)
          }),
          children: [WB(Uc) && (0, tu.jsx)(wu, {
            dD: hc,
            taught: null !== (tB = null === gB || void 0 === gB ? void 0 : gB.taught) && void 0 !== tB ? tB : null
          }, hc.join(",")), kB && (0, tu.jsx)(as, {
            kind: pc,
            def: Qc,
            dD: hc,
            power: lc,
            stored: null !== vB && void 0 !== vB ? vB : 0,
            cap: Wc
          }), Jc(Uc) && (0, tu.jsx)(Eu, {
            dD: hc,
            input: null !== (Sc = null === gB || void 0 === gB ? void 0 : gB.input) && void 0 !== Sc ? Sc : null,
            drops: null !== (yB = null === gB || void 0 === gB ? void 0 : gB.farm) && void 0 !== yB ? yB : null,
            seconds: String(Qc.opMs / 1e3)
          }), !kB && !Jc(Uc) && !WB(Uc) && (0, tu.jsx)(iu, {
            kind: pc,
            def: Qc,
            input: null !== (zB = null === gB || void 0 === gB ? void 0 : gB.input) && void 0 !== zB ? zB : null,
            tier: null !== wc && void 0 !== wc ? wc : 1,
            noSeeds: !0 === (null === gB || void 0 === gB ? void 0 : gB.noSeeds)
          })]
        })]
      })
    }

    function zM(cB, Bc, nc, Vc) {
      var Ic;
      const rB = LB[cB],
        uc = [rB.inputSlot, rB.fuelSlot, ...null !== (Ic = rB.inputSlots) && void 0 !== Ic ? Ic : []].filter((cB => null !== cB));
      return {
        render: Ic => {
          let {
            dD: rB,
            renderSlot: uc
          } = Ic;
          return (0, tu.jsx)(Qu.Provider, {
            value: Vc,
            children: (0, tu.jsx)(yM, {
              kind: cB,
              dD: rB,
              store: Bc,
              power: nc,
              renderSlot: uc
            })
          })
        },
        quickMoveRange: uc.length > 0 ? [Math.min(...uc), Math.max(...uc) + 1] : [0, 0],
        className: Os(cB)
      }
    }
    const ps = "Assembler";

    function hs(cB) {
      var Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc;
      let {
        dD: qB,
        store: Oc,
        renderSlot: Tc
      } = cB;
      const {
        t: fc
      } = (0, zr.x)(), mB = Ts(Oc, qB), ec = null !== (Bc = null === mB || void 0 === mB ? void 0 : mB.tier) && void 0 !== Bc ? Bc : 1, tB = null !== (nc = null === mB || void 0 === mB ? void 0 : mB.taught) && void 0 !== nc ? nc : null, Sc = HB(ps, {
        coupled: !1,
        taught: tB
      }), yB = null !== (Vc = Sc.bench) && void 0 !== Vc ? Vc : null, zB = null !== (Ic = null === mB || void 0 === mB ? void 0 : mB.status) && void 0 !== Ic ? Ic : null, pc = null !== (rB = null === mB || void 0 === mB ? void 0 : mB.power) && void 0 !== rB ? rB : null, hc = null !== (uc = null === mB || void 0 === mB ? void 0 : mB.powerCap) && void 0 !== uc ? uc : 4e3;
      return (0, tu.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, tu.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, tu.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: fc(ir(ps))
          }), yB && (0, tu.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [fc("buildAFactory2Game:benchMakes"), (0, tu.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, tu.jsx)(hI.d, {
                itemName: yB.output,
                amount: 0
              })
            }), (null === mB || void 0 === mB ? void 0 : mB.taughtName) && (0, tu.jsx)(ar.e, {
              text: mB.taughtName
            }), yB.outputAmount > 1 && (0, tu.jsxs)("span", {
              children: ["\xd7", yB.outputAmount]
            })]
          }), !yB && (0, tu.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: fc("buildAFactory2Game:benchTeachHint")
          }), (0, tu.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, tu.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (sc = Sc.inputSlots) && void 0 !== sc ? sc : []).map(((cB, Bc) => {
                const nc = null === yB || void 0 === yB ? void 0 : yB.inputs[Bc];
                return (0, tu.jsxs)("div", {
                  className: eI()("Baf2BenchInput", {
                    Spare: !nc
                  }),
                  children: [(0, tu.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Tc(cB), nc && (0, tu.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, tu.jsx)(hI.d, {
                        itemName: nc.item,
                        amount: 0
                      })
                    })]
                  }), (0, tu.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: nc ? `\xd7${nc.amount}` : "\xa0"
                  })]
                }, cB)
              }))
            }), (0, tu.jsx)(mM, {
              running: "running" === zB,
              opMs: Sc.opMs,
              opLeftMs: null !== (Mc = null === mB || void 0 === mB ? void 0 : mB.opLeftMs) && void 0 !== Mc ? Mc : null,
              updateCount: Oc.updateCount
            }), (0, tu.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, tu.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: fc("buildAFactory2Game:machineOutput")
              }), (0, tu.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Sc.outputSlots.map((cB => (0, tu.jsx)("div", {
                  children: Tc(cB)
                }, cB)))
              })]
            })]
          }), null !== pc && (0, tu.jsx)(pu, {
            stored: pc,
            cap: hc,
            rates: null !== (Pc = null === mB || void 0 === mB ? void 0 : mB.powerRates) && void 0 !== Pc ? Pc : null
          }), null !== zB && (0, tu.jsx)("div", {
            className: eI()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== zB
            }),
            children: fc(Ms(ps, zB, mB, !1))
          }), yB && yB.inputs.length > 1 && (0, tu.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: fc("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, tu.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, tu.jsx)(xu, {
            taught: tB,
            tier: ec
          }), yB && (0, tu.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: fc("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function aM(cB) {
      var Bc;
      const nc = null !== (Bc = LB[ps].inputSlots) && void 0 !== Bc ? Bc : [];
      return {
        render: Bc => {
          let {
            dD: nc,
            renderSlot: Vc
          } = Bc;
          return (0, tu.jsx)(hs, {
            dD: nc,
            store: cB,
            renderSlot: Vc
          })
        },
        quickMoveRange: [Math.min(...nc), Math.max(...nc) + 1],
        className: Os(ps)
      }
    }
    var ls = nc(107),
      Ys = nc(985),
      Ls = nc(3441);
    const gM = 600,
      Us = .5,
      bM = 4,
      Zs = 1200,
      Qs = 140,
      Cs = 100,
      vM = 32,
      Ds = 16,
      Ns = 100.5,
      Es = 90,
      os = 1.5,
      Ws = 50;

    function ws(cB) {
      switch (lnc(cB)) {
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
    const kM = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Xs(cB) {
      const Bc = Math.ceil(60 * cB / Cs);
      return {
        fuel: Math.max(vM, Bc),
        waste: Math.max(Ds, Bc)
      }
    }

    function Hs(cB, Bc, nc) {
      const [Vc, Ic, rB] = [cB - 2, Bc - 2, nc - 2];
      return 2 * (Vc * Ic + Ic * rB + rB * Vc) * Qs
    }

    function Fs(cB, Bc, nc) {
      return Math.max(0, cB - 2) * Math.max(0, Bc - 2) * Math.max(0, nc - 2)
    }

    function Jsc(cB, Bc) {
      const [nc, Vc, Ic] = cB, rB = nc * Vc * Ic, uc = new Float32Array(rB);
      let sc = 0,
        Mc = 0,
        Pc = 0,
        qB = 0,
        Oc = 0;
      const Tc = (cB, rB, uc) => cB < 0 || cB >= nc || rB < 0 || rB >= Vc || uc < 0 || uc >= Ic ? 0 : Bc[(rB * Ic + uc) * nc + cB];
      for (let tB = 0; tB < Vc; tB++)
        for (let cB = 0; cB < Ic; cB++)
          for (let Vc = 0; Vc < nc; Vc++) {
            const rB = (tB * Ic + cB) * nc + Vc,
              fc = Bc[rB];
            if (1 === fc) {
              sc++;
              let Bc = 0;
              for (const [nc, Ic, rB] of kM) {
                const uc = Tc(Vc + nc, tB + Ic, cB + rB);
                1 !== uc && 2 !== uc || Bc++
              }
              uc[rB] = gM * (1 + Us * Math.min(Bc, bM)), qB += uc[rB]
            } else if (2 === fc) Mc++;
            else if (3 === fc) {
              Pc++;
              kM.some((Bc => {
                let [nc, Ic, rB] = Bc;
                return 1 === Tc(Vc + nc, tB + Ic, cB + rB)
              })) && (Oc += Zs)
            }
          }
      const fc = Hs(nc + 2, Vc + 2, Ic + 2),
        mB = Math.min(qB, Oc, fc),
        ec = sc > 0 ? qB * Cs / sc : 0;
      return {
        rods: sc,
        graphite: Mc,
        channels: Pc,
        fuelHeat: qB,
        cooling: Oc,
        size: fc,
        max: mB,
        vol: rB,
        powerPerUnit: ec,
        pelletsPerMin: ec > 0 ? mB / ec * 60 : 0,
        waterPerS: mB * Ac.p,
        rodHeat: uc
      }
    }
    const jM = 0,
      Rs = 1,
      iM = 6,
      Ks = 7,
      xM = 8;

    function ds(cB, Bc) {
      const [nc, Vc, Ic] = cB, rB = new Uint8Array(nc * Vc * Ic), uc = (cB, rB, uc) => cB < 0 || cB >= nc || rB < 0 || rB >= Vc || uc < 0 || uc >= Ic ? 0 : Bc[(rB * Ic + uc) * nc + cB];
      for (let sc = 0; sc < Vc; sc++)
        for (let cB = 0; cB < Ic; cB++)
          for (let Vc = 0; Vc < nc; Vc++) {
            const Mc = (sc * Ic + cB) * nc + Vc,
              Pc = Bc[Mc];
            if (1 === Pc) {
              let Bc = 0;
              for (const [nc, Ic, rB] of kM) {
                const Mc = uc(Vc + nc, sc + Ic, cB + rB);
                Bc += 1 === Mc || 2 === Mc ? 1 : 0
              }
              rB[Mc] = Rs + Math.min(Bc, bM)
            } else if (3 === Pc) {
              const Bc = kM.some((Bc => {
                let [nc, Ic, rB] = Bc;
                return 1 === uc(Vc + nc, sc + Ic, cB + rB)
              }));
              rB[Mc] = Bc ? iM : Ks
            } else 2 === Pc && (rB[Mc] = xM)
          }
      return rB
    }

    function As(cB) {
      return cB.fuelHeat <= cB.cooling && cB.fuelHeat <= cB.size ? "fuel" : cB.cooling <= cB.size ? "cooling" : "size"
    }
    const Gs = Es;

    function cP(cB, Bc, nc) {
      return Math.round(cB * Bc * nc * 25e3 * (1 + .25 * (Math.min(cB, Bc, nc) - 2)))
    }

    function BM(cB) {
      return Math.max(0, Math.min(Ac.g, cB))
    }

    function nM(cB, Bc, nc) {
      const Vc = Bc * BM(nc);
      return cB <= 0 ? 0 : Vc > 0 ? Math.min(200, 100 * cB / Vc) : 200
    }

    function VM(cB, Bc) {
      const nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? os : 1;
      return Math.min(cB.fuelHeat * nc, cB.cooling * BM(Bc), cB.size * nc)
    }

    function IM(cB) {
      return 2 + cB / 10
    }
    const rP = "buildAFactory2Game:";

    function uM(cB) {
      var Bc;
      return null !== (Bc = cB.baf2RxMood) && void 0 !== Bc ? Bc : function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const nc = [
          ["calm", 50],
          ["warm", Gs],
          ["hot", Ns]
        ];
        for (const [Vc, Ic] of nc)
          if (cB < Ic + (Vc === Bc ? 3 : 0)) return Vc;
        return "alarm"
      }(cB.baf2RxHeat)
    }
    const sM = 120;

    function MM(cB) {
      const Bc = cB.baf2RxState;
      if ("running" === Bc && cB.baf2RxHeat > Ns) return {
        label: `${rP}rxState_tooHot`,
        tone: "bad",
        fix: `${rP}rxFix_tooHot`
      };
      switch (Bc) {
        case "running":
          return {
            label: `${rP}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${rP}rxState_idle`, tone: "off", fix: `${rP}rxFix_idle`
          };
        case "scram":
          return {
            label: `${rP}rxState_scram`, tone: "off", fix: cB.baf2RxHeat < Ws ? `${rP}rxFix_scramCool` : `${rP}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${rP}rxState_${Bc}`, tone: "off", fix: `${rP}rxFix_${Bc}`
          };
        case "melted":
          return {
            label: `${rP}rxState_melted`, tone: "bad", fix: `${rP}rxFix_melted`
          };
        default:
          return {
            label: `${rP}rxState_${Bc}`, tone: "warn", fix: `${rP}rxFix_${Bc}`
          }
      }
    }

    function PM(cB) {
      const [Bc, nc, Vc] = cB.baf2RxStats;
      return {
        fuelHeat: Bc,
        cooling: nc * (cB.baf2RxCryo ? Math.max(1, BM(cB.baf2RxWater / 100)) : 1),
        size: Vc
      }
    }

    function qP(cB) {
      var Bc;
      const nc = "idle" === cB.baf2RxState || "running" === cB.baf2RxState && cB.baf2RxHeat <= Ns || "scram" === cB.baf2RxState && cB.baf2RxHeat < Ws;
      if (0 === (cB.baf2RxFlags & fB) || !cB.baf2RxFormed || !nc) return null;
      const {
        fuelHeat: Vc,
        cooling: Ic,
        size: rB
      } = PM(cB), uc = Math.min(Vc, Ic, rB), sc = As({
        fuelHeat: Vc,
        cooling: Ic,
        size: rB
      }), Mc = "cooling" === sc && !0 === cB.baf2RxCryoOpen && !cB.baf2RxCryo, Pc = null !== (Bc = cB.baf2RxCells) && void 0 !== Bc ? Bc : "", qB = ("fuel" === sc || "cooling" === sc && !0 === cB.baf2RxCryo) && Pc.length > 0 && !Pc.includes(String(0)), Oc = Mc ? "Cryo" : "scram" === cB.baf2RxState ? "Off" : "";
      return uc < 12e3 ? {
        key: `${rP}rxGrow_${qB?"full":sc}${Oc}`,
        amount: uc
      } : null
    }

    function OM(cB, Bc) {
      return cB[0] === Bc[0] && cB[1] === Bc[1] && cB[2] === Bc[2]
    }

    function TM(cB) {
      return [...cB].sort(((cB, Bc) => Number(Bc[2] < Bc[1]) - Number(cB[2] < cB[1])))
    }

    function fM(cB, Bc) {
      return Bc.some((Bc => {
        let [nc, Vc] = Bc;
        return !(Vc <= 0) && ["edge", "cap", "wall", "inside"].some((Bc => nc === An(cB, Bc)))
      }))
    }

    function mP(cB, Bc, nc) {
      const Vc = cB.baf2RxFuel - cB.baf2RxPu > 0 ? nc : 0;
      return {
        full: cB.baf2RxWaste > Bc - 3,
        fullInS: Vc > 0 ? Math.max(0, Bc - cB.baf2RxWaste) / Vc : null
      }
    }
    const eM = {
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

    function tP(cB) {
      return SM[cB]
    }
    const SM = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function yP(cB) {
      let [Bc, nc, Vc] = cB;
      return Math.ceil(Hs(Bc, nc, Vc) * Ac.p)
    }

    function zP(cB, Bc) {
      return "battery" === cB ? Bc[0] * Bc[1] * Bc[2] : function(cB) {
        let [Bc, nc, Vc] = cB;
        return Bc * nc * Vc - Math.max(0, Bc - 2) * Math.max(0, nc - 2) * Math.max(0, Vc - 2)
      }(Bc) - 1
    }

    function pM(cB) {
      const Bc = Math.max(0, cB);
      if (Bc < 10) return String(Math.round(10 * Bc) / 10);
      if (Bc < 1e4) return Math.round(Bc).toLocaleString("en-US");
      if (Bc < 1e6) return `${Bc<1e5?(Math.floor(Bc/100)/10).toFixed(1):Math.floor(Bc/1e3)}k`;
      const nc = Bc / 1e6;
      return `${nc<10?(Math.floor(100*nc)/100).toFixed(2):nc<100?(Math.floor(10*nc)/10).toFixed(1):Math.floor(nc)}M`
    }

    function hM(cB) {
      return cB <= 0 ? "0" : cB >= 10 ? String(Math.round(cB)) : cB.toFixed(cB >= 1 ? 1 : 2)
    }

    function aP(cB) {
      const Bc = Jn(cB, 0),
        nc = Jn(cB, kV(cB) - 1);
      return {
        lo: [Math.min(Bc[0], nc[0]), Math.min(Bc[1], nc[1]), Math.min(Bc[2], nc[2])],
        hi: [Math.max(Bc[0], nc[0]) + 1, Math.max(Bc[1], nc[1]) + 1, Math.max(Bc[2], nc[2]) + 1]
      }
    }

    function lM(cB, Bc, nc) {
      const Vc = [Bc[0] - cB[0], Bc[1] - cB[1], Bc[2] - cB[2]],
        Ic = [(cB[0] + Bc[0]) / 2, (cB[1] + Bc[1]) / 2, (cB[2] + Bc[2]) / 2],
        rB = [];
      for (let uc = 0; uc < 3; uc++) {
        const sc = (uc + 1) % 3,
          Mc = (uc + 2) % 3;
        for (const Pc of [cB[sc], Bc[sc]])
          for (const qB of [cB[Mc], Bc[Mc]]) {
            const cB = [0, 0, 0],
              Bc = [nc, nc, nc];
            cB[uc] = Ic[uc], Bc[uc] = Vc[uc] + nc, cB[sc] = Pc, cB[Mc] = qB, rB.push([cB, Bc])
          }
      }
      return rB
    }
    const YM = "buildAFactory2Game:",
      LM = [`${YM}colNorth`, `${YM}colEast`, `${YM}colSouth`, `${YM}colWest`];

    function gP(cB, Bc) {
      const [nc, Vc, Ic] = cB.baf2ColAt;
      return `baf2col ${nc} ${Vc} ${Ic} ${Bc}`
    }

    function UM(cB) {
      return function(cB) {
        if (!Number.isFinite(cB)) return "";
        const Bc = Math.max(1, Math.round(cB));
        if (Bc < 60) return `${Bc}s`;
        const nc = Bc % 60;
        return 0 === nc ? Bc / 60 + "m" : `${Math.floor(Bc/60)}m ${nc}s`
      }(function(cB) {
        const Bc = Gn.FOCUS_BY_LASERS[Math.max(0, Math.min(4, cB))];
        return Bc > 0 ? Gn.NOVA_FOCUS / Bc : 1 / 0
      }(cB))
    }

    function bP(cB) {
      const Bc = Math.abs(Math.round(cB));
      return Bc < 1e3 ? Math.round(cB).toLocaleString("en-US") : Bc < 1e6 ? `${Bc<1e5?(cB/1e3).toFixed(1).replace(/\.0$/,""):Math.round(cB/1e3)}k` : `${(cB/1e6).toFixed(Bc<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function ZM(cB, Bc, nc) {
      if (rI(Bc) >= 0) {
        const Bc = function(cB, Bc) {
          return cB.find((cB => {
            let {
              focus: nc
            } = cB;
            return nc[0] === Bc[0] && nc[2] === Bc[2] && (Bc[1] === nc[1] || Bc[1] === nc[1] - 1)
          }))
        }(cB, nc);
        if (!Bc) return null;
        const Ic = function(cB) {
          let Bc = 0,
            nc = 0;
          for (let Vc = 0; Vc < 4; Vc++) Bc += cB.laser[Vc] ? 1 : 0, nc += cB.live[Vc] ? 1 : 0;
          return {
            lasers: Bc,
            live: nc,
            focusPerS: Gn.FOCUS_BY_LASERS[nc],
            drawPerS: Gn.LASER_DRAW * nc
          }
        }({
          laser: Bc.lasers,
          live: Bc.live
        });
        if (0 === Ic.lasers || "noLasers" === Bc.state) return {
          key: `${YM}lookColNoLasers`
        };
        if (0 === Ic.live) return {
          key: `${YM}lookColOff_blocked`
        };
        if (!(Bc.on && Ic.live > 0) && ("running" !== (Vc = Bc.state) && "slowed" !== Vc)) return {
          key: `${YM}lookColOff_${Bc.state}`
        };
        if (Ic.live < Ic.lasers) return {
          key: `${YM}lookColLasersSome`,
          params: {
            lasers: String(Ic.lasers),
            live: String(Ic.live)
          }
        };
        const rB = Bc.open.filter(Boolean).length;
        return rB < 4 ? {
          key: `${YM}lookColLasersSpots`,
          params: {
            live: String(Ic.live),
            spots: String(rB),
            time: UM(Ic.live)
          }
        } : {
          key: `${YM}lookColLasers`,
          params: {
            live: String(Ic.live),
            time: UM(Ic.live)
          }
        }
      }
      var Vc;
      if (!uV(Bc)) return null;
      const Ic = function(cB, Bc) {
        for (const nc of cB) {
          const cB = qI(nc.focus, [Bc[0], Bc[1], Bc[2]]);
          if (cB && cB.cB === Gn.LASER_D && nc.lasers[cB.dir]) return {
            entry: nc,
            dir: cB.dir
          }
        }
        return null
      }(cB, nc);
      if (!Ic) return {
        key: `${YM}lookLaserNoCollider`
      };
      const {
        entry: rB,
        dir: uc
      } = Ic;
      return rB.open[uc] ? rB.live[uc] ? {
        key: rB.on ? `${YM}lookLaserFiring` : `${YM}lookLaserReady`
      } : {
        key: `${YM}lookLaserBlocked`
      } : {
        key: `${YM}lookLaserClosed`
      }
    }

    function QM(cB, Bc) {
      const nc = [];
      for (let Vc = 1; Vc < Gn.LASER_D; Vc++) cB & 1 << Bc * (Gn.LASER_D - 1) + Vc - 1 && nc.push(Vc);
      return nc
    }
    const CM = {
      firing: `${YM}colSlotFiring`,
      ready: `${YM}colSlotReady`,
      blocked: `${YM}colSlotBlocked`,
      empty: `${YM}colSlotEmpty`,
      closed: `${YM}colSlotClosed`
    };

    function vP(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const rB = AV(cB),
        uc = AV(Bc),
        sc = AV(nc),
        Mc = sc.filter(Boolean).length,
        Pc = rB.filter(Boolean).length,
        qB = [0, 1, 2, 3].map((cB => uc[cB] ? rB[cB] ? sc[cB] ? Vc ? "firing" : "ready" : "blocked" : (cB => QM(Ic, cB).length > 0)(cB) ? "blocked" : "empty" : "closed")),
        Oc = qB.indexOf("blocked"),
        Tc = Oc < 0 && Pc > 0 ? qB.indexOf("empty") : -1;
      return qB.map(((cB, Bc) => {
        const nc = Bc === Oc ? {
          key: `${YM}colSlotClear`
        } : Bc === Tc ? {
          key: `${YM}colSlotAdd`,
          params: {
            time: UM(Math.min(4, Mc + 1))
          }
        } : null;
        return {
          dir: Bc,
          tone: cB,
          title: {
            key: "blocked" !== cB || rB[Bc] ? CM[cB] : `${YM}colSlotGap`,
            keys: {
              dir: LM[Bc]
            }
          },
          hint: nc
        }
      }))
    }

    function DM(cB) {
      var Bc;
      return "noPower" === cB.baf2ColState && cB.baf2ColRxState ? MM({
        baf2RxState: cB.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (Bc = cB.baf2ColRxHeat) && void 0 !== Bc ? Bc : 0
      }) : null
    }

    function NM(cB) {
      const Bc = AV(cB.baf2ColSpots).filter(Boolean).length,
        nc = AV(cB.baf2ColLive);
      let Vc = 0,
        Ic = 0;
      return AV(cB.baf2ColLasers).forEach(((cB, Bc) => {
        cB && (Vc++, Ic += nc[Bc] ? 0 : 1)
      })), Ic > 0 ? {
        key: `${YM}colSubSome`,
        params: {
          blocked: String(Ic),
          lasers: String(Vc)
        }
      } : Bc < 4 ? {
        key: `${YM}colSubSpots`,
        params: {
          lasers: String(Vc),
          spots: String(Bc)
        }
      } : {
        key: `${YM}colSub`,
        params: {
          lasers: String(Vc)
        }
      }
    }

    function EM(cB) {
      const Bc = DM(cB);
      if ("idle" === cB.baf2ColRxState && Bc) return {
        key: `${YM}colState_noPowerIdle`
      };
      if (Bc) return {
        key: `${YM}colState_noPowerReactor`,
        keys: {
          state: Bc.label
        }
      };
      if ("noInput" !== cB.baf2ColState) return {
        key: `${YM}colState_${cB.baf2ColState}`
      };
      const nc = String(Math.max(0, Gn.NOVA_SA - cB.baf2ColSa)),
        Vc = String(Math.max(0, Gn.NOVA_GD - cB.baf2ColGd));
      return "0" !== nc && "0" !== Vc ? {
        key: `${YM}colState_noInput`,
        params: {
          sa: nc,
          gd: Vc
        }
      } : "0" !== nc ? {
        key: `${YM}colState_noStarAlloy`,
        params: {
          sa: nc
        }
      } : "0" !== Vc ? {
        key: `${YM}colState_noGlowDust`,
        params: {
          gd: Vc
        }
      } : {
        key: `${YM}colState_running`
      }
    }

    function oM(cB) {
      return cB.baf2ColP < 0 ? `${YM}colNext` : function(cB) {
        const Bc = cB.baf2ColState;
        return cB.baf2ColP >= 0 && ("blocked" === Bc || "noLasers" === Bc || "noPower" === Bc)
      }(cB) ? `${YM}colStalled` : null === WM(cB) ? `${YM}colMaking` : `${YM}colNovaIn`
    }

    function WM(cB) {
      if (cB.baf2ColP < 0 || cB.baf2ColWant <= 0) return null;
      const Bc = cB.baf2ColFocusPerS * Math.min(1, cB.baf2ColDraw / cB.baf2ColWant);
      return Bc > 0 ? Math.max(0, Gn.NOVA_FOCUS - cB.baf2ColP) / Bc : null
    }

    function wM(cB, Bc) {
      const nc = [];
      for (let Vc = 1; Vc <= 3; Vc++) {
        const Ic = [cB[0], cB[1] - Vc, cB[2]];
        if (!Bc(Ic)) return nc;
        nc.push(Ic)
      }
      return []
    }

    function kP(cB, Bc) {
      const nc = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Vc = 0; Vc < 4; Vc++) {
        const Ic = Vc,
          rB = PV(cB.focus, Ic, Gn.LASER_D);
        if (cB.lasers[Vc] || !cB.open[Vc] || !Bc(rB)) continue;
        const uc = [];
        for (let nc = 1; nc < Gn.LASER_D; nc++) {
          const Vc = PV(cB.focus, Ic, nc);
          Bc(Vc) || uc.push(Vc)
        }
        nc.supports.push(...wM(rB, Bc)), 0 === uc.length ? nc.free.push(rB) : (nc.blocked.push(rB), nc.gaps.push(...uc))
      }
      return nc
    }
    const XM = Gn.LASER_D - .25,
      HM = 4,
      FM = 2,
      JM = 16;
    const jP = {
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
        blendMode: Ls.f.Standard,
        soft: !0
      },
      RM = {
        green: jP,
        pink: {
          ...jP,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function iP(cB, Bc) {
      const nc = {
        ...Bc.params
      };
      for (const [Ic, rB] of Object.entries(null !== (Vc = Bc.keys) && void 0 !== Vc ? Vc : {})) {
        var Vc;
        nc[Ic] = cB(rB)
      }
      return nc
    }
    const KM = "buildAFactory2Game:",
      xP = 2 * Gn.LASER_D + 1,
      dM = Gn.LASER_D;

    function AM(cB) {
      return cB(`${KM}colFocusTip`, {
        need: bP(Gn.NOVA_FOCUS)
      })
    }

    function GM(cB, Bc) {
      return cB(Bc.key, iP(cB, Bc))
    }

    function cq(cB) {
      const Bc = cB.getStatus();
      return {
        status: Bc,
        entry: Bc ? cB.entryAtRoot(Bc.baf2ColAt) : void 0
      }
    }

    function BP(cB, Bc) {
      return {
        left: 100 * (dM + cB) / xP + "%",
        top: 100 * (dM + Bc) / xP + "%"
      }
    }

    function nP(cB) {
      let {
        status: Bc,
        entry: nc
      } = cB;
      const Vc = AV(Bc.baf2ColLasers),
        Ic = AV(Bc.baf2ColSpots),
        rB = AV(Bc.baf2ColLive),
        uc = !0 === (null === nc || void 0 === nc ? void 0 : nc.on),
        sc = Gn.LASER_D,
        Mc = [];
      for (let fc = 0; fc < 4; fc++) {
        const [cB, , Bc] = MV[fc];
        if (rB[fc]) {
          const nc = 100 * (sc - 1) / xP,
            Vc = cB + Bc > 0 ? 100 * (dM + 1) / xP : 100 * (dM - (sc - 1)) / xP,
            Ic = 100 * (dM + .35) / xP,
            rB = 30 / xP,
            Pc = 0 !== cB ? {
              left: `${Vc}%`,
              width: `${nc}%`,
              top: `${Ic}%`,
              height: `${rB}%`
            } : {
              top: `${Vc}%`,
              height: `${nc}%`,
              left: `${Ic}%`,
              width: `${rB}%`
            };
          Mc.push((0, tu.jsx)("i", {
            className: eI()("Baf2ColDiagramBeam", {
              Off: !uc
            }),
            style: Pc
          }, `beam${fc}`))
        }
        const nc = Vc[fc] ? "Baf2ColDiagramLaser" : Ic[fc] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Mc.push((0, tu.jsx)("i", {
          className: nc,
          style: BP(cB * sc, Bc * sc)
        }, `spot${fc}`))
      }
      for (let fc = 0; fc < 4; fc++) {
        if (Vc[fc] || !Ic[fc]) continue;
        const [cB, , nc] = MV[fc];
        for (const Vc of QM(null !== (Pc = Bc.baf2ColGaps) && void 0 !== Pc ? Pc : 0, fc)) {
          var Pc;
          Mc.push((0, tu.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: BP(cB * Vc, nc * Vc)
          }, `gap${fc},${Vc}`))
        }
      }
      for (const [fc, , mB] of null !== (qB = null === nc || void 0 === nc ? void 0 : nc.blockers) && void 0 !== qB ? qB : []) {
        var qB, Oc, Tc;
        const cB = fc - (null !== (Oc = null === nc || void 0 === nc ? void 0 : nc.focus[0]) && void 0 !== Oc ? Oc : 0),
          Bc = mB - (null !== (Tc = null === nc || void 0 === nc ? void 0 : nc.focus[2]) && void 0 !== Tc ? Tc : 0);
        Mc.push((0, tu.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: BP(cB, Bc)
        }, `block${cB},${Bc}`))
      }
      return (0, tu.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Mc, (0, tu.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function VP(cB) {
      let {
        status: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)(), Vc = AV(Bc.baf2ColLive).filter(Boolean).length;
      return (0, tu.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, tu.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: AM(nc),
          children: nc(`${KM}colLadder`)
        }), (0, tu.jsx)("ul", {
          children: [1, 2, 3, 4].map((cB => (0, tu.jsx)("li", {
            className: eI()({
              On: cB === Vc
            }),
            children: nc(`${KM}colLadderChip`, {
              lasers: String(cB),
              time: UM(cB)
            })
          }, cB)))
        })]
      })
    }

    function IP(cB) {
      let {
        item: Bc,
        XB: nc,
        need: Vc,
        cap: Ic
      } = cB;
      const {
        t: rB
      } = (0, zr.x)(), uc = Math.min(nc, Vc);
      return (0, tu.jsxs)("li", {
        className: eI()("Baf2ColTile", {
          Short: nc < Vc
        }),
        children: [(0, tu.jsx)(rq, {
          item: Bc
        }), (0, tu.jsx)("b", {
          className: "Baf2ColTileValue",
          children: rB(`${KM}colOutOf`, {
            amount: String(uc),
            cap: String(Vc)
          })
        }), (0, tu.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, tu.jsx)("i", {
            style: {
              width: 100 * uc / Vc + "%"
            }
          })
        }), nc > Vc && (0, tu.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: rB(`${KM}colIntakeHeld`, {
            amount: String(nc),
            cap: String(Ic)
          })
        })]
      })
    }

    function rq(cB) {
      let {
        item: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)();
      return (0, tu.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, tu.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, tu.jsx)(hI.d, {
            itemName: Bc,
            amount: 0
          })
        }), (0, tu.jsx)("span", {
          className: "Baf2ColTileName",
          children: KI(nc, Bc)
        })]
      })
    }

    function uP(cB) {
      switch (cB.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function sP(cB) {
      var Bc, nc, Ic;
      let {
        store: rB,
        close: uc
      } = cB;
      const {
        t: sc
      } = (0, zr.x)(), Mc = Cu(), {
        status: Pc,
        entry: qB
      } = function(cB) {
        const [Bc, nc] = (0, Vc.useState)((() => cq(cB)));
        return (0, Vc.useEffect)((() => (nc(cq(cB)), cB.subscribe((() => {
          nc(cq(cB))
        })))), [cB]), Bc
      }(rB), [Oc, Tc] = (0, Vc.useState)(null), fc = null === Pc || void 0 === Pc ? void 0 : Pc.baf2ColHold;
      (0, Vc.useEffect)((() => {
        Tc(null)
      }), [fc]);
      const mB = (0, Vc.useRef)({
          p: -1,
          n: 0
        }),
        ec = null !== (Bc = null === Pc || void 0 === Pc ? void 0 : Pc.baf2ColP) && void 0 !== Bc ? Bc : -1;
      ec < mB.current.p && mB.current.n++, mB.current.p = ec;
      const tB = (0, Vc.useRef)(null),
        [Sc] = (0, Vc.useState)((() => {
          return (cB = rB.heldAtOpen()) === nV || cB === VV ? {
            key: `${YM}colBeltItIn`,
            item: cB
          } : null;
          var cB
        }));
      if (!Pc) return null;
      const yB = Pc.baf2ColMember,
        zB = Pc.baf2ColP >= 0,
        pc = function(cB, Bc) {
          if (cB.baf2ColP >= 0 && cB.baf2ColDraw > 0) {
            const Bc = cB.baf2ColWant > 0 ? Math.min(1, cB.baf2ColDraw / cB.baf2ColWant) : 0;
            return {
              focus: cB.baf2ColFocusPerS * Bc,
              draw: cB.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === cB.baf2ColState && Bc && Bc.draw > 0 ? {
            ...Bc,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Pc, tB.current);
      tB.current = pc.draw > 0 ? pc : null;
      const hc = "slowed" === Pc.baf2ColState || "noPower" === Pc.baf2ColState,
        aB = WM(Pc),
        lc = null !== Oc && void 0 !== Oc ? Oc : Pc.baf2ColHold,
        Yc = function(cB) {
          var Bc, nc;
          return "idle" === cB.baf2ColRxState ? null : null !== (Bc = null === (nc = DM(cB)) || void 0 === nc ? void 0 : nc.fix) && void 0 !== Bc ? Bc : null
        }(Pc),
        Lc = null === Yc && null === Sc ? function(cB) {
          var Bc;
          const nc = cB.baf2ColSentTo;
          if (!nc) return null;
          const Vc = null !== (Bc = cB.baf2ColSentHeld) && void 0 !== Bc ? Bc : null;
          return {
            key: null === Vc ? `${YM}colNovaSentToMachine` : `${YM}colNovaSentTo`,
            target: nc,
            XB: Vc
          }
        }(Pc) : null,
        gB = zB ? sc(`${KM}colFocusOf`, {
          focus: bP(Pc.baf2ColP),
          need: bP(Gn.NOVA_FOCUS)
        }) : null;
      return (0, tu.jsx)(Tu.b, {
        close: uc,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, tu.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, tu.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, tu.jsx)(hI.d, {
                  itemName: cI,
                  amount: 0
                })
              }), (0, tu.jsxs)("div", {
                children: [(0, tu.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: KI(sc, cI)
                }), (0, tu.jsx)("p", {
                  children: GM(sc, NM(Pc))
                })]
              })]
            }), (0, tu.jsx)(fu.k, {
              onClick: uc
            })]
          }), (0, tu.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, tu.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, tu.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, tu.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: sc(oM(Pc), {
                    time: null === aB ? "" : Tr(sc, aB)
                  })
                }), (0, tu.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, tu.jsx)("i", {
                    style: {
                      width: (zB ? 100 * Pc.baf2ColP / Gn.NOVA_FOCUS : 0) + "%"
                    }
                  }, mB.current.n)
                }), (0, tu.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, tu.jsxs)("span", {
                    title: AM(sc),
                    children: [(0, tu.jsx)("b", {
                      children: bP(pc.focus)
                    }), " ", sc(`${KM}colFocusPerS`)]
                  }), (0, tu.jsxs)("span", {
                    className: eI()("Baf2ColDraw", {
                      Short: hc
                    }),
                    children: [(0, tu.jsx)(pI.e, {
                      name: "bolt"
                    }), hc ? sc(`${KM}colDrawOf`, {
                      draw: bP(Pc.baf2ColDraw),
                      want: bP(Pc.baf2ColWant)
                    }) : sc(`${KM}colPowerPerS`, {
                      rate: bP(pc.draw)
                    })]
                  }), null !== gB && (0, tu.jsx)("span", {
                    className: "Soft",
                    children: gB
                  })]
                })]
              }), (0, tu.jsx)("p", {
                className: eI()("Baf2ColState", uP(Pc)),
                children: GM(sc, EM(Pc))
              }), null !== Yc && (0, tu.jsx)("p", {
                className: "Baf2ColStateFix",
                children: sc(Yc)
              }), null === Yc && null !== Sc && (0, tu.jsx)("p", {
                className: "Baf2ColStateFix",
                children: sc(Sc.key, {
                  item: KI(sc, Sc.item)
                })
              }), Lc && (0, tu.jsx)("p", {
                className: "Baf2ColStateFix",
                children: sc(Lc.key, {
                  target: KI(sc, Lc.target),
                  amount: String(null !== (nc = Lc.XB) && void 0 !== nc ? nc : 0)
                })
              }), (0, tu.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, tu.jsx)(IP, {
                  item: nV,
                  XB: Pc.baf2ColSa,
                  need: Gn.NOVA_SA,
                  cap: Gn.SA_CAP
                }), (0, tu.jsx)(IP, {
                  item: VV,
                  XB: Pc.baf2ColGd,
                  need: Gn.NOVA_GD,
                  cap: Gn.GD_CAP
                }), (0, tu.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, tu.jsx)(rq, {
                    item: "Nova Matter"
                  }), (0, tu.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: sc(`${KM}colNovaHeld`, {
                      amount: String(Pc.baf2ColOut),
                      cap: String(Gn.OUT_CAP)
                    })
                  }), yB && (0, tu.jsx)(fu.n, {
                    className: "Baf2ColTake",
                    disabled: 0 === Pc.baf2ColOut,
                    onClick: () => {
                      Mc.send(gP(Pc, "take"))
                    },
                    children: sc(`${KM}colTake`)
                  })]
                })]
              }), yB && (0, tu.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": lc,
                className: eI()("Baf2ColHold", {
                  On: lc
                }),
                onClick: cB => {
                  cB.detail > 0 && cB.currentTarget.blur(), Tc(!lc), Mc.send(gP(Pc, "hold " + (lc ? 0 : 1)))
                },
                children: [(0, tu.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, tu.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, tu.jsx)("b", {
                    children: sc(`${KM}colHold`)
                  }), (0, tu.jsx)("span", {
                    children: sc(`${KM}colHoldNote`)
                  })]
                })]
              })]
            }), (0, tu.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, tu.jsx)(nP, {
                status: Pc,
                entry: qB
              }), (0, tu.jsx)("ul", {
                className: "Baf2ColSlots",
                children: vP(Pc.baf2ColLasers, Pc.baf2ColSpots, Pc.baf2ColLive, pc.beamsOn, null !== (Ic = Pc.baf2ColGaps) && void 0 !== Ic ? Ic : 0).map((cB => (0, tu.jsxs)("li", {
                  className: cB.tone,
                  children: [(0, tu.jsx)("b", {
                    children: GM(sc, cB.title)
                  }), null !== cB.hint && (0, tu.jsx)("span", {
                    children: GM(sc, cB.hint)
                  })]
                }, cB.dir)))
              }), (0, tu.jsx)(VP, {
                status: Pc
              })]
            })]
          })]
        })
      })
    }
    const MP = "buildAFactory2Game:",
      PP = 36e5,
      qq = 864e5;

    function OP(cB, Bc, nc) {
      return Math.max(0, Math.ceil((cB + Bc - Math.max(nc, cB)) / 1e3))
    }

    function TP(cB) {
      return cB.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function fP(cB) {
      return "Homestead" === cB
    }

    function mq(cB) {
      return function(cB) {
        let Bc = 0;
        for (const nc of cB) {
          const cB = /^Island ([1-9]\d{0,5})$/.exec(nc);
          cB && (Bc = Math.max(Bc, Number(cB[1])))
        }
        return `Island ${Bc+1}`
      }(cB.map((cB => cB.baf2IslandName)))
    }

    function eP(cB, Bc) {
      return function(cB) {
        return `${MP}islandsBlocked${cB[0].toUpperCase()}${cB.slice(1)}`
      }("degraded" === cB && 0 === Bc ? "stuck" : cB)
    }

    function tq(cB) {
      return cB.filter((cB => {
        var Bc;
        return !cB.baf2IslandActive && void 0 === cB.baf2IslandUnreadable && void 0 === (null === (Bc = cB.baf2IslandCoop) || void 0 === Bc ? void 0 : Bc.baf2CoopState)
      })).length
    }

    function SP(cB) {
      return "coopMoving" === cB || "coopUnreachable" === cB
    }

    function yq(cB, Bc) {
      const nc = Bc > 0;
      return {
        change: null === cB && !nc,
        switch: (null === cB || "degraded" === cB || SP(cB)) && !nc,
        rename: "loading" !== cB && "degraded" !== cB && "stuck" !== cB
      }
    }

    function zq(cB, Bc) {
      return void 0 === cB || "corrupt" === cB && Bc
    }
    const pP = Yu;

    function hP(cB, Bc, nc) {
      if (null !== cB && void 0 !== cB && cB.untilGone) {
        var Vc;
        return !("dismiss" === cB.untilGone && void 0 === (null === (Vc = Bc.baf2IslandCoop) || void 0 === Vc ? void 0 : Vc.baf2CoopState)) && nc - cB.atMs < 32500
      }
      return void 0 !== cB && nc - cB.atMs < pP && Bc.baf2IslandName === cB.from
    }
    const aq = Yu;

    function lP(cB) {
      return "core" === (null === cB || void 0 === cB ? void 0 : cB.kind) ? cB.core : "islands" === (null === cB || void 0 === cB ? void 0 : cB.kind) ? cB.backToCore : void 0
    }

    function YP(cB) {
      return `\0${cB}\0`
    }

    function LP(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Vc = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const rB of Object.keys(nc)) Vc[rB] = YP(rB);
      let Ic = Object.keys(Vc).length > 0 ? cB(Bc, Vc) : cB(Bc);
      for (const [rB, uc] of Object.entries(nc)) Ic = Ic.split(YP(rB)).join(uc);
      return Ic
    }

    function gq(cB, Bc) {
      return cB ? Bc ? "enabled" : "disabled" : "hidden"
    }
    const UP = {
      removed: `${MP}islandsCoopRemoved`,
      deleted: `${MP}islandsCoopDeleted`,
      notReady: `${MP}islandsCoopNotReady`,
      gone: `${MP}islandsCoopGone`
    };

    function bq(cB) {
      var Bc;
      return "member" !== (null === (Bc = cB.baf2IslandCoop) || void 0 === Bc ? void 0 : Bc.baf2CoopRole) && "newer" !== cB.baf2IslandUnreadable
    }

    function ZP(cB, Bc, nc, Vc, Ic) {
      const rB = cB.baf2IslandActive,
        uc = cB.baf2IslandUnreadable,
        sc = cB.baf2IslandCoop,
        Mc = function(cB, Bc, nc) {
          return {
            switch: cB.switch && void 0 === Bc,
            delete: cB.change && zq(Bc, nc)
          }
        }(Bc, uc, Vc),
        Pc = {
          switch: gq(!rB && void 0 === uc, Mc.switch),
          rename: gq(!0, Bc.rename),
          delete: gq(!rB, Mc.delete),
          deleteWaits: !rB && zq(uc, Vc),
          people: gq(void 0 !== cB.baf2IslandInvitable || Ic && rB && void 0 === uc && void 0 === sc, !0),
          peopleLabel: "invite",
          OV: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        qB = !rB && Mc.delete;
      if (void 0 === sc) return nc ? {
        ...Pc,
        delete: gq(!rB, !1),
        deleteWaits: !1,
        note: qB ? {
          key: `${MP}islandsCoopKeepOwn`
        } : null
      } : Pc;
      const Oc = sc.baf2CoopState,
        Tc = sc.baf2CoopMembers.length > 1,
        fc = {
          ...Pc,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Oc && "member" === sc.baf2CoopRole) return {
        ...fc,
        dismiss: gq(!0, Bc.rename),
        note: {
          key: UP[Oc],
          names: {
            owner: sc.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Oc) {
        let cB = {
          key: `${MP}islandsCoopOwnLost`
        };
        return qB && Tc ? cB = {
          key: `${MP}islandsCoopDeleteMembers`
        } : qB && nc && (cB = {
          key: `${MP}islandsCoopKeepOwn`
        }), {
          ...fc,
          delete: gq(!rB, Mc.delete && !Tc && !nc),
          deleteWaits: Pc.deleteWaits && !Tc && !nc,
          note: cB
        }
      }
      if ("member" === sc.baf2CoopRole) return {
        ...Pc,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        OV: gq(!0, rB ? Bc.switch : Bc.rename)
      };
      const mB = sc.baf2CoopManageHere;
      let ec = null;
      var tB;
      mB ? qB && Tc ? ec = {
        key: `${MP}islandsCoopDeleteMembers`
      } : qB && nc && (ec = {
        key: `${MP}islandsCoopKeepOwn`
      }) : ec = {
        key: null !== (tB = sc.baf2CoopLeft) && void 0 !== tB && tB.length ? `${MP}islandsCoopManageThereClaim` : `${MP}islandsCoopManageThere`
      };
      return {
        ...Pc,
        rename: gq(!0, Bc.rename && mB),
        delete: gq(!rB, Mc.delete && !Tc && !nc),
        deleteWaits: Pc.deleteWaits && !Tc && !nc,
        people: "enabled",
        peopleLabel: "players",
        unshare: gq(mB && rB && !Tc, Bc.change),
        remove: mB,
        note: ec
      }
    }

    function QP(cB) {
      var Bc;
      const nc = cB.baf2IslandCoop;
      if ("owner" !== (null === nc || void 0 === nc ? void 0 : nc.baf2CoopRole) || void 0 !== nc.baf2CoopState || null === (Bc = nc.baf2CoopLeft) || void 0 === Bc || !Bc.length) return null;
      const Vc = cB.baf2IslandActive && nc.baf2CoopManageHere;
      return {
        left: nc.baf2CoopLeft,
        claim: Vc,
        goThere: !Vc && nc.baf2CoopManageHere
      }
    }

    function CP(cB) {
      return cB.baf2CoopMembers.length >= cB.baf2CoopMax
    }

    function vq(cB, Bc, nc) {
      return void 0 !== cB && Bc < cB.answer && nc - cB.atMs < pP
    }
    const DP = "buildAFactory2Game:";

    function NP(cB, Bc) {
      return {
        onKeyDown: nc => {
          nc.stopPropagation(), nc.nativeEvent.isComposing || 229 === nc.nativeEvent.keyCode || ("Enter" === nc.key ? (nc.preventDefault(), cB()) : "Escape" === nc.key && (nc.preventDefault(), Bc()))
        }
      }
    }

    function EP(cB) {
      return {
        onKeyDown: Bc => {
          "Escape" !== Bc.key || Bc.nativeEvent.isComposing || (Bc.preventDefault(), Bc.stopPropagation(), cB())
        }
      }
    }

    function oP(cB) {
      cB.currentTarget.select()
    }

    function WP(cB, Bc) {
      (0, Vc.useEffect)((() => {
        var nc;
        cB && (null === (nc = Bc.current) || void 0 === nc || nc.scrollIntoView({
          block: "nearest"
        }))
      }), [cB, Bc])
    }

    function wP(cB) {
      const [Bc, nc] = (0, Vc.useState)(null);
      return (0, Vc.useEffect)((() => {
        const Bc = document.querySelector(".UiRequests"),
          Vc = cB.current;
        if (!Bc || !Vc || "undefined" === typeof ResizeObserver) return;
        const Ic = () => {
          const cB = Bc.getBoundingClientRect(),
            Ic = Vc.getBoundingClientRect(),
            rB = Vc.parentElement,
            uc = rB && parseFloat(getComputedStyle(rB).paddingTop) || 0,
            sc = function(cB, Bc, nc, Vc) {
              if (!cB || cB.height <= 0 || cB.right <= Bc.left || cB.left >= Bc.right) return null;
              const Ic = Math.max(Vc, cB.bottom + 8);
              return {
                marginTop: Math.round(Ic - Vc),
                maxHeight: Math.max(0, Math.floor(nc - Ic - Vc))
              }
            }(cB, Ic, window.innerHeight, uc);
          nc((cB => (null === cB || void 0 === cB ? void 0 : cB.marginTop) === (null === sc || void 0 === sc ? void 0 : sc.marginTop) && (null === cB || void 0 === cB ? void 0 : cB.maxHeight) === (null === sc || void 0 === sc ? void 0 : sc.maxHeight) ? cB : sc))
        };
        Ic();
        const rB = new ResizeObserver(Ic);
        return rB.observe(Bc), window.addEventListener("resize", Ic), () => {
          rB.disconnect(), window.removeEventListener("resize", Ic)
        }
      }), [cB]), Bc
    }

    function kq(cB) {
      (0, Vc.useEffect)((() => {
        var Bc;
        null === (Bc = cB.current) || void 0 === Bc || Bc.focus()
      }), [cB])
    }

    function XP(cB) {
      const [Bc, nc] = (0, Vc.useState)(Date.now);
      return (0, Vc.useEffect)((() => {
        const Bc = window.setInterval((() => {
          nc(Date.now())
        }), cB);
        return () => {
          window.clearInterval(Bc)
        }
      }), [cB]), Bc
    }

    function HP(cB) {
      let {
        tier: Bc,
        t: nc
      } = cB;
      const {
        kind: Vc,
        short: Ic
      } = tB(Bc), rB = fc(Bc, mB), uc = nc(`${DP}${rB.key}`, {
        ...rB.params,
        name: nc(`${DP}${Sc(Bc).nameKey}`)
      });
      return (0, tu.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, tu.jsx)("span", {
          className: eI()("Baf2IslandTierPip", {
            Stage: "tier" !== Vc
          }),
          "aria-hidden": "true",
          children: Ic
        }), uc]
      })
    }

    function FP(cB) {
      let {
        note: Bc,
        className: nc,
        t: Vc
      } = cB;
      return (0, tu.jsx)("p", {
        className: eI()("Baf2IslandNote", nc),
        children: LP(Vc, Bc.key, Bc.names, Bc.params)
      })
    }
    const JP = "buildAFactory2Game:";

    function jq(cB) {
      let {
        message: Bc,
        arrivedAtMs: nc,
        close: Ic,
        OV: rB
      } = cB;
      const uc = Cu(),
        {
          t: sc
        } = (0, zr.x)(),
        Mc = XP(1e3),
        Pc = (0, Vc.useRef)(null);
      (0, Vc.useEffect)((() => {
        var cB;
        null === (cB = Pc.current) || void 0 === cB || cB.focus()
      }), []);
      const qB = OP(nc, Bc.baf2TransferInMs, Mc),
        Oc = nc + Bc.baf2TransferInMs - 1e3,
        [Tc, fc] = (0, Vc.useState)(null);
      (0, Vc.useEffect)((() => {
        const cB = window.setTimeout((() => {
          fc(Oc)
        }), Math.max(0, Oc - Date.now()));
        return () => {
          window.clearTimeout(cB)
        }
      }), [Oc]);
      const mB = Tc === Oc || Mc >= Oc,
        ec = Bc.baf2TransferIsland,
        tB = Bc.baf2TransferOwner;
      return (0, tu.jsx)(Tu.b, {
        close: Ic,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, tu.jsxs)("section", {
          ref: Pc,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsxs)("div", {
              children: [(0, tu.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === tB ? LP(sc, `${JP}islandsTransferOwn`, {
                  island: ec
                }) : LP(sc, `${JP}islandsTransfer`, {
                  island: ec,
                  owner: tB
                })
              }), (0, tu.jsx)("p", {
                children: mB ? sc(`${JP}islandsTransferNow`) : sc(`${JP}islandsTransferIn`, {
                  time: Tr(sc, qB)
                })
              })]
            }), (0, tu.jsx)(fu.k, {
              ariaLabel: sc(`${JP}islandsClose`),
              onClick: Ic
            })]
          }), !mB && (0, tu.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, tu.jsx)("p", {
              className: "Baf2TransferNote",
              children: sc(`${JP}islandsTransferNote`)
            }), (0, tu.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, tu.jsx)(fu.d, {
                onClick: () => {
                  uc.send("baf2coopstay"), rB()
                },
                children: sc(`${JP}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var RP = nc(1252),
      iq = nc(35333),
      KP = nc.n(iq);
    const xq = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const dP = "buildAFactory2Game:",
      AP = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function GP(cB, Bc, nc) {
      return void 0 === Bc ? nc : "string" === typeof Bc ? Bc : Array.isArray(Bc) ? Bc.map((Bc => "string" === typeof Bc ? Bc : "translationKey" in Bc ? cB(Bc.translationKey) : "")).join("") : cB(Bc.translationKey)
    }

    function cO(cB) {
      const Bc = {};
      for (const [nc, Vc] of Object.entries(null !== cB && void 0 !== cB ? cB : {})) Bc[nc] = Vc < 0 ? Or(Vc) : Vc.toLocaleString("en-US");
      return Bc
    }
    const Bq = (0, Vc.memo)((function(cB) {
      let {
        item: Bc
      } = cB;
      return (0, tu.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, tu.jsx)(hI.d, {
          itemName: Bc,
          amount: 0
        })
      })
    }));

    function nq(cB) {
      let {
        label: Bc,
        percent: nc,
        progress: Vc
      } = cB;
      return (0, tu.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, tu.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${Bc}: ${Vc}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": nc,
          children: (0, tu.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${nc}%`
            }
          })
        }), (0, tu.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Vc
        })]
      })
    }

    function Vq(cB) {
      let {
        chips: Bc
      } = cB;
      return (0, tu.jsx)("span", {
        className: "Baf2QuestChips",
        children: Bc.map((cB => {
          let [Bc, nc, Vc] = cB;
          const Ic = nc >= Vc;
          return (0, tu.jsxs)("span", {
            className: eI()("Baf2QuestChip", {
              Met: Ic
            }),
            children: [(0, tu.jsx)(Bq, {
              item: Bc
            }), (0, tu.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Ic ? `\u2713${Vc}` : `${nc}/${Vc}`
            })]
          }, Bc)
        }))
      })
    }

    function Iq(cB, Bc) {
      const {
        key: nc,
        params: Vc
      } = fc(Bc, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return cB(`${dP}${nc}`, {
        ...Vc,
        name: cB(`${dP}${Sc(Bc).nameKey}`)
      })
    }

    function rO(cB) {
      let {
        core: Bc,
        t: nc
      } = cB;
      const [Vc, Ic] = Bc, rB = Ic > 0 ? Math.floor(100 * Vc / Ic) : 100;
      return (0, tu.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": nc(`${dP}questCoreLabel`, {
          have: String(Vc),
          need: String(Ic)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": rB,
        children: [(0, tu.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: nc(`${dP}questCore`, {
            percent: String(rB)
          })
        }), (0, tu.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, tu.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${rB}%`
            }
          })
        })]
      })
    }

    function uq(cB) {
      let {
        rows: Bc,
        t: nc
      } = cB;
      const Vc = Bc.filter((cB => cB.done)).length;
      return (0, tu.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": nc(`${dP}questStepsProgress`, {
          done: String(Vc),
          total: String(Bc.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": Bc.length,
        "aria-valuenow": Vc,
        children: Bc.map((cB => (0, tu.jsx)("span", {
          className: eI()("Baf2QuestSegment", {
            Done: cB.done,
            Current: cB.current
          })
        }, cB.id)))
      })
    }
    const sq = (0, Vc.memo)(Pq, Mq);

    function Mq(cB, Bc) {
      const nc = nc => cB.view.itemNames[nc] === Bc.view.itemNames[nc];
      return cB.t === Bc.t && cB.extra === Bc.extra && (null === cB.row.item || nc(cB.row.item)) && cB.row.madeFor.every(nc) && cB.row.also.every(nc) && KP()(cB.row, Bc.row)
    }

    function Pq(cB) {
      let {
        row: Bc,
        view: nc,
        t: Vc,
        extra: Ic
      } = cB;
      const rB = Bc.item ? function(cB, Bc, nc) {
          return 1 !== nc && xq.has(cB) ? yr(Bc) : null
        }(Bc.key, Bc.item, Bc.total) : null,
        uc = rB ? Vc(rB) : Bc.item ? GP(Vc, nc.itemNames[Bc.item], Bc.item) : "",
        sc = Bc.also.map((cB => GP(Vc, nc.itemNames[cB], cB))),
        Mc = sc.join(", "),
        Pc = function(cB, Bc) {
          var nc;
          return Bc.length < 2 ? null !== (nc = Bc[0]) && void 0 !== nc ? nc : "" : cB(`${dP}listAnd`, {
            rest: Bc.slice(0, -1).join(cB(`${dP}listComma`)),
            last: Bc[Bc.length - 1]
          })
        }(Vc, [uc, ...sc]),
        qB = Vc(`${dP}${Bc.key}`, {
          ...cO(Bc.params),
          item: uc,
          also: Mc,
          itemList: Pc,
          total: String(Bc.total)
        }),
        [Oc, ...Tc] = qB.split("\n"),
        fc = Bc.total > 1 && !Bc.done && !Bc.away;
      return (0, tu.jsxs)("li", {
        className: eI()("Baf2QuestStep", {
          Done: Bc.done,
          Current: Bc.current,
          JustFinished: Bc.justFinished,
          Away: Bc.away
        }),
        children: [!Bc.done && null !== Bc.item && (0, tu.jsx)(Bq, {
          item: Bc.item
        }), (Bc.done || null === Bc.item) && (0, tu.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: Bc.done ? "\u2713" : "\u25cb"
        }), (0, tu.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, tu.jsx)("strong", {
            children: Oc
          }), Tc.length > 0 && (0, tu.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Tc.join(" ")
          }), !Bc.done && Bc.madeFor.length > 0 && (0, tu.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Vc("buildAFactory2Game:questRowFor", {
              items: Bc.madeFor.map((cB => GP(Vc, nc.itemNames[cB], cB))).join(" \u2192 ")
            })
          }), fc && (0, tu.jsx)(nq, {
            label: Oc,
            percent: Math.round(100 * Bc.amount / Bc.total),
            progress: `${Bc.amount.toLocaleString("en-US")}/${Bc.total.toLocaleString("en-US")}`
          }), !Bc.done && !Bc.away && Bc.chips && Bc.chips.length > 0 && (0, tu.jsx)(Vq, {
            chips: Bc.chips
          }), Ic]
        })]
      })
    }

    function qO(cB, Bc) {
      let [nc, Vc] = Bc;
      return cB(`${dP}${nc}`, cO(Vc))
    }

    function Oq(cB) {
      let [Bc, nc] = cB;
      return Bc + JSON.stringify(nc)
    }

    function Tq(cB) {
      let {
        goal: Bc,
        t: nc
      } = cB;
      return Bc ? (0, tu.jsx)("span", {
        className: "Baf2BookGoal",
        children: nc(`${dP}${Bc}`)
      }) : null
    }

    function fq(cB) {
      let {
        view: Bc,
        t: nc
      } = cB;
      if (!Bc.name) return null;
      const Vc = DI(Bc.rows);
      return (0, tu.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, tu.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: nc(`${dP}currentQuest`)
        }), (0, tu.jsx)("strong", {
          className: "Baf2BookTitle",
          children: qO(nc, Bc.name)
        }), (0, tu.jsx)(Tq, {
          goal: Bc.goal,
          t: nc
        }), Vc.length > 1 && (0, tu.jsx)(uq, {
          rows: Vc,
          t: nc
        }), (0, tu.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: Bc.rows.map((cB => (0, tu.jsx)(sq, {
            row: cB,
            view: Bc,
            t: nc
          }, cB.id)))
        }), Bc.reward && (0, tu.jsxs)("span", {
          className: "Baf2BookReward",
          children: [nc(`${dP}questReward`), (0, tu.jsx)(Bq, {
            item: Bc.reward
          }), GP(nc, Bc.itemNames[Bc.reward], Bc.reward)]
        })]
      })
    }

    function mO(cB) {
      let {
        quest: Bc,
        upcoming: nc,
        t: Vc
      } = cB;
      return (0, tu.jsxs)("li", {
        className: eI()("Baf2BookQuest", {
          Done: Bc[3],
          Upcoming: nc
        }),
        children: [(0, tu.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: Bc[3] ? "\u2713" : "\u25cb"
        }), (0, tu.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, tu.jsx)("strong", {
            className: "Baf2BookTitle",
            children: qO(Vc, Bc)
          }), (0, tu.jsx)(Tq, {
            goal: Bc[2],
            t: Vc
          })]
        })]
      })
    }

    function eq(cB) {
      let {
        done: Bc,
        total: nc,
        t: Vc
      } = cB;
      const Ic = nc > 0 ? Math.round(100 * Bc / nc) : 0,
        rB = Vc(`${dP}questBookChapterProgress`, {
          done: String(Bc),
          total: String(nc)
        });
      return (0, tu.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, tu.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": rB,
          "aria-valuemin": 0,
          "aria-valuemax": nc,
          "aria-valuenow": Bc,
          children: (0, tu.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Ic}%`
            }
          })
        }), (0, tu.jsx)("span", {
          className: "Baf2BookProgressText",
          children: rB
        })]
      })
    }

    function tO(cB) {
      let {
        view: Bc,
        tier: nc,
        quests: Vc,
        t: Ic
      } = cB;
      const rB = nc === Bc.tier,
        uc = (null !== Vc && void 0 !== Vc ? Vc : []).filter((cB => !cB[4])),
        sc = (null !== Vc && void 0 !== Vc ? Vc : []).filter((cB => cB[4])),
        Mc = uc.filter((cB => cB[3])).length,
        Pc = rB && Bc.name ? Oq(Bc.name) : null,
        qB = uc.findIndex((cB => !cB[3] && Oq(cB) === Pc));
      return (0, tu.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, tu.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, tu.jsx)("h3", {
            children: Iq(Ic, nc)
          }), uc.length > 0 && (0, tu.jsx)(eq, {
            done: Mc,
            total: uc.length,
            t: Ic
          }), rB && Bc.core && (0, tu.jsx)(rO, {
            core: Bc.core,
            t: Ic
          })]
        }), (0, tu.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Vc && rB && (0, tu.jsx)(fq, {
            view: Bc,
            t: Ic
          }), uc.map(((cB, nc) => nc === qB ? (0, tu.jsx)(fq, {
            view: Bc,
            t: Ic
          }, Oq(cB)) : (0, tu.jsx)(mO, {
            quest: cB,
            upcoming: !cB[3],
            t: Ic
          }, Oq(cB))))]
        }), rB && Bc.side && (0, tu.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, tu.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Ic(`${dP}questSide`)
          }), (0, tu.jsx)("strong", {
            className: "Baf2BookTitle",
            children: qO(Ic, Bc.side.name)
          }), (0, tu.jsx)(Tq, {
            goal: Bc.side.goal,
            t: Ic
          }), (0, tu.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, tu.jsx)(sq, {
              row: Bc.side.row,
              view: Bc,
              t: Ic
            })
          })]
        }), sc.length > 0 && (0, tu.jsxs)(tu.Fragment, {
          children: [(0, tu.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Ic(`${dP}questBookSidesDone`)
          }), (0, tu.jsx)("ol", {
            className: "Baf2BookQuests",
            children: sc.map((cB => (0, tu.jsx)(mO, {
              quest: cB,
              upcoming: !1,
              t: Ic
            }, Oq(cB))))
          })]
        })]
      })
    }

    function Sq(cB) {
      var Bc, nc, rB;
      let {
        store: uc,
        close: sc
      } = cB;
      const {
        t: Mc
      } = (0, zr.x)(), Pc = (0, RP.g)(UI, uc.get()), Oc = null !== (Bc = Pc.tier) && void 0 !== Bc ? Bc : 1, [Tc, fc] = (0, Vc.useState)(null), mB = (null === Tc || void 0 === Tc ? void 0 : Tc.at) === Oc ? Tc.tier : Oc, Sc = (0, Vc.useRef)(null), yB = null !== Pc.chapters;
      (0, Vc.useEffect)((() => {
        var cB;
        Sc.current && (Sc.current.scrollTop = 0);
        const Bc = null === (cB = Sc.current) || void 0 === cB ? void 0 : cB.querySelector(".Baf2BookQuest.Current");
        if (Sc.current && Bc) {
          const cB = Bc.getBoundingClientRect().bottom - Sc.current.getBoundingClientRect().bottom;
          cB > 0 && (Sc.current.scrollTop += Math.min(cB, Bc.getBoundingClientRect().top - Sc.current.getBoundingClientRect().top))
        }
      }), [mB, yB]);
      const zB = null === (nc = Pc.chapters) || void 0 === nc ? void 0 : nc.find((cB => {
        let [Bc] = cB;
        return Bc === mB
      }));
      return (0, tu.jsx)(Tu.b, {
        close: sc,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, tu.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: AP,
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Mc(`${dP}questBookTitle`)
            }), (0, tu.jsx)(fu.k, {
              onClick: sc
            })]
          }), (0, tu.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Mc(`${dP}questBookChapters`),
            children: Ic.slice(0, qB()).map(((cB, Bc) => {
              const nc = Bc + 1,
                {
                  kind: Vc,
                  short: Ic
                } = tB(nc),
                rB = ec(nc, Oc),
                uc = rB ? Mc(`${dP}coreAtomicHidden`) : Iq(Mc, nc);
              return (0, tu.jsx)("li", {
                children: (0, tu.jsx)("button", {
                  type: "button",
                  className: eI()({
                    Stage: "tier" !== Vc,
                    Atomic: "atomic" === Vc,
                    Current: nc === Oc,
                    Selected: nc === mB
                  }),
                  disabled: nc > Oc,
                  "aria-pressed": nc === mB,
                  "aria-label": uc,
                  title: rB ? void 0 : uc,
                  onClick: () => {
                    fc({
                      tier: nc,
                      at: Oc
                    })
                  },
                  children: rB ? "?" : Ic
                })
              }, cB.nameKey)
            }))
          }), (0, tu.jsxs)("div", {
            ref: Sc,
            className: "Baf2BookBody",
            children: [CI(Pc) && mB === Oc && (0, tu.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Mc(`${dP}questBookAllDone`)
            }), (0, tu.jsx)(tO, {
              view: Pc,
              tier: mB,
              quests: null !== (rB = null === zB || void 0 === zB ? void 0 : zB[1]) && void 0 !== rB ? rB : null,
              t: Mc
            })]
          })]
        })
      })
    }
    const yO = "buildAFactory2Game:";

    function zO(cB) {
      let {
        tiers: Bc,
        from: nc,
        tier: Vc,
        shown: Ic,
        Vn: rB
      } = cB;
      const {
        t: uc
      } = (0, zr.x)(), sc = Bc.map(((cB, Bc) => {
        const sc = nc + Bc,
          {
            kind: Mc,
            short: Pc
          } = tB(sc),
          qB = ec(sc, Vc);
        return (0, tu.jsx)("li", {
          children: (0, tu.jsx)("button", {
            type: "button",
            className: eI()({
              Stage: "tier" !== Mc,
              Silhouette: qB,
              Reached: sc <= Vc,
              Current: sc === Vc,
              Next: sc === Vc + 1,
              Selected: sc === Ic
            }),
            disabled: qB,
            "aria-pressed": sc === Ic,
            "aria-label": qB ? uc(`${yO}coreAtomicHidden`) : void 0,
            title: qB ? void 0 : uc(`${yO}${cB.nameKey}`),
            onClick: () => {
              rB(sc)
            },
            children: qB ? "?" : Pc
          })
        }, cB.nameKey)
      }));
      return (0, tu.jsx)(tu.Fragment, {
        children: sc
      })
    }

    function pq(cB) {
      let {
        id: Bc,
        label: nc,
        tiers: Vc,
        from: Ic,
        ...rB
      } = cB;
      return (0, tu.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, tu.jsx)("span", {
          id: Bc,
          className: "Baf2CoreLadderLabel",
          children: nc
        }), (0, tu.jsx)("ol", {
          "aria-labelledby": Bc,
          children: (0, tu.jsx)(zO, {
            ...rB,
            tiers: Vc,
            from: Ic
          })
        })]
      })
    }

    function hq(cB) {
      const {
        t: Bc
      } = (0, zr.x)(), nc = Ic.findIndex((cB => void 0 !== cB.stage)), Vc = Ic.findIndex((cB => void 0 !== cB.reactorTier)), rB = nc < 0 ? Ic : Ic.slice(0, nc), uc = nc < 0 ? [] : Ic.slice(nc, Vc < 0 ? void 0 : Vc), Mc = Vc < 0 || !sc() ? [] : Ic.slice(Vc);
      return (0, tu.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, tu.jsx)(pq, {
          ...cB,
          id: "baf2CoreTiersLabel",
          label: Bc(`${yO}coreTiersLabel`),
          tiers: rB,
          from: 1
        }), uc.length > 0 && (0, tu.jsx)(pq, {
          ...cB,
          id: "baf2CoreStagesLabel",
          label: Bc(`${yO}coreStagesLabel`),
          tiers: uc,
          from: nc + 1
        }), Mc.length > 0 && (0, tu.jsx)(pq, {
          ...cB,
          id: "baf2CoreAtomicLabel",
          label: Bc(`${yO}coreAtomicLabel`),
          tiers: Mc,
          from: Vc + 1
        })]
      })
    }
    const aO = "buildAFactory2Game:";

    function lq(cB) {
      let {
        item: Bc,
        itemNames: nc,
        children: Vc
      } = cB;
      return (0, tu.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, tu.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, tu.jsx)(hI.d, {
            itemName: Bc,
            amount: 0
          })
        }), (0, tu.jsx)(ar.e, {
          text: nc[Bc]
        }), Vc]
      })
    }

    function Yq(cB) {
      const Bc = new Map;
      for (const {
          block: Vc
        }
        of cB.newDeposits) {
        var nc;
        Bc.set(Vc, (null !== (nc = Bc.get(Vc)) && void 0 !== nc ? nc : 0) + 1)
      }
      return [...Bc]
    }

    function Lq(cB) {
      let {
        value: Bc,
        label: nc,
        more: Vc
      } = cB;
      return (0, tu.jsxs)("li", {
        children: [(0, tu.jsx)("strong", {
          children: Bc
        }), (0, tu.jsx)("span", {
          children: nc
        }), Vc > 0 && (0, tu.jsxs)("em", {
          children: ["+", Vc]
        })]
      })
    }

    function gO(cB) {
      let {
        items: Bc,
        itemNames: nc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)(), [rB, uc] = (0, Vc.useState)(null), sc = null !== rB && Bc.includes(rB) ? rB : null;
      return (0, tu.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, tu.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Ic(`${aO}coreRewardUnlocks`)
        }), (0, tu.jsx)("ul", {
          children: Bc.map((cB => (0, tu.jsx)("li", {
            children: (0, tu.jsx)("button", {
              type: "button",
              className: eI()("Baf2PanelIcon", {
                Picked: cB === sc
              }),
              title: KI(Ic, cB),
              "aria-label": KI(Ic, cB),
              "aria-pressed": cB === sc,
              onClick: () => {
                uc(cB === sc ? null : cB)
              },
              children: (0, tu.jsx)(hI.d, {
                itemName: cB,
                amount: 0
              })
            })
          }, cB)))
        }), (0, tu.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== sc && (0, tu.jsxs)(tu.Fragment, {
            children: [(0, tu.jsx)(ar.e, {
              text: nc[sc]
            }), " \xb7 ", (0, tu.jsx)(ar.e, {
              text: nc[Zc(sc)]
            })]
          }), null === sc && Ic(`${aO}coreRecipeTap`)]
        })]
      })
    }

    function Uq(cB) {
      var Bc, nc;
      let {
        def: Vc,
        tier: Ic,
        itemNames: rB
      } = cB;
      const {
        t: uc
      } = (0, zr.x)(), sc = Ic > 1 ? Sc(Ic - 1) : void 0, Mc = Math.round(2 * Vc.islandRadius), Pc = sc ? Math.round(2 * sc.islandRadius) : Mc, qB = Ic >= 3 ? mI(Ic) : null;
      return (0, tu.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, tu.jsxs)("ul", {
          className: eI()("Baf2CoreStats", {
            Four: null !== qB
          }),
          children: [(0, tu.jsx)(Lq, {
            value: `${Mc}\xd7${Mc}`,
            label: uc(`${aO}coreStatIsland`),
            more: Mc - Pc
          }), (0, tu.jsx)(Lq, {
            value: String(Vc.machineAllowance),
            label: uc(`${aO}coreStatMachines`),
            more: Vc.machineAllowance - (null !== (Bc = null === sc || void 0 === sc ? void 0 : sc.machineAllowance) && void 0 !== Bc ? Bc : Vc.machineAllowance)
          }), (0, tu.jsx)(Lq, {
            value: String(Vc.beltAllowance),
            label: uc(`${aO}coreStatBelts`),
            more: Vc.beltAllowance - (null !== (nc = null === sc || void 0 === sc ? void 0 : sc.beltAllowance) && void 0 !== nc ? nc : Vc.beltAllowance)
          }), null !== qB && (0, tu.jsx)(Lq, {
            value: String(qB),
            label: uc(`${aO}coreStatStorage`),
            more: qB - (sc ? mI(Ic - 1) : qB)
          })]
        }), Vc.reward && (0, tu.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, tu.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: uc(`${aO}coreRewardItem`)
          }), (0, tu.jsx)(lq, {
            item: Vc.reward,
            itemNames: rB
          })]
        }), Vc.newDeposits.length > 0 && (0, tu.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, tu.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: uc(Vc.newDeposits.length > 1 ? `${aO}coreRewardDeposits` : `${aO}coreRewardDeposit`)
          }), Yq(Vc).map((cB => {
            let [Bc, nc] = cB;
            return (0, tu.jsx)(lq, {
              item: Bc,
              itemNames: rB,
              children: nc > 1 && ` \xd7${nc}`
            }, Bc)
          }))]
        }), Vc.unlocks.length > 0 && (0, tu.jsx)(gO, {
          items: Vc.unlocks,
          itemNames: rB
        }), (0, tu.jsx)(bO, {
          tier: Ic
        })]
      })
    }

    function bO(cB) {
      let {
        tier: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)(), Vc = MI[Bc];
      if (!Vc) return null;
      const Ic = sI(Bc, 0, 0).barrierMax !== sI(Bc - 1, 0, 0).barrierMax;
      return (0, tu.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, tu.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, tu.jsx)(hI.d, {
            itemName: Ic ? BI.Chestplate : cr,
            amount: 0
          })
        }), nc(`${aO}gearPerkLine`, {
          perk: nc(`${aO}${Vc}`)
        })]
      })
    }

    function Zq(cB, Bc) {
      return null === cB ? Bc : cB.value
    }

    function Qq(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === cB || nc - cB.atMs >= Vc ? null : Ic(cB.value, Bc) ? cB.armed ? null : cB : cB.armed ? cB : {
        ...cB,
        armed: !0
      }
    }

    function Cq(cB, Bc) {
      const nc = Bc.filter((Bc => {
        var nc;
        return !1 !== (null === (nc = cB.get(Bc)) || void 0 === nc ? void 0 : nc.value)
      }));
      for (const [Vc, Ic] of cB) Ic.value && !Bc.includes(Vc) && nc.push(Vc);
      return nc
    }

    function vO(cB, Bc, nc, Ic) {
      const [rB, uc] = (0, Vc.useState)((() => new Map)), sc = () => {
        uc((Bc => function(cB, Bc, nc, Vc) {
          var Ic;
          let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            uc = null;
          for (const [sc, Mc] of cB) {
            const Ic = Qq(Mc, Bc(sc), nc, Vc, rB);
            Ic !== Mc && (uc ??= new Map(cB), null === Ic ? uc.delete(sc) : uc.set(sc, Ic))
          }
          return null !== (Ic = uc) && void 0 !== Ic ? Ic : cB
        }(Bc, cB, Date.now(), nc, Ic)))
      };
      (0, Vc.useEffect)((() => {
        sc()
      }), [Bc, nc]), (0, Vc.useEffect)((() => {
        if (0 === rB.size) return;
        const cB = Math.min(...[...rB.values()].map((cB => cB.atMs))),
          Bc = setTimeout(sc, Math.max(0, cB + nc - Date.now()) + 1);
        return () => {
          clearTimeout(Bc)
        }
      }), [rB, Bc, nc]);
      return [rB, (Bc, nc) => {
        uc((Vc => {
          const rB = new Map(Vc);
          return rB.set(Bc, function(cB, Bc, nc) {
            return {
              value: cB,
              atMs: nc,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(cB, Bc)
            }
          }(nc, cB(Bc), Date.now(), Ic)), rB
        }))
      }]
    }
    const Dq = "buildAFactory2Game:";

    function Nq(cB) {
      let {
        message: Bc,
        itemNames: nc
      } = cB;
      const Ic = Cu(),
        {
          t: rB
        } = (0, zr.x)(),
        [uc, sc] = (0, Vc.useState)(!1),
        [Mc, Pc] = function(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yu;
          const [nc, Vc] = vO((Bc => cB.includes(Bc)), cB, Bc, Object.is);
          return [Cq(nc, cB), Vc]
        }(Bc.baf2CoreBankPaused),
        qB = new Set(Mc),
        Oc = [...Bc.baf2CoreBanked];
      for (const Vc of qB) Oc.some((cB => {
        let [Bc] = cB;
        return Bc === Vc
      })) || Oc.push([Vc, 0]);
      return 0 === Oc.length ? null : (0, tu.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, tu.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": uc,
          onClick: () => {
            sc(!uc)
          },
          children: [(0, tu.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: rB(`${Dq}coreBankedLater`)
          }), (0, tu.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Oc.map((cB => {
              let [Bc, nc] = cB;
              const Vc = qB.has(Bc);
              return (0, tu.jsxs)("span", {
                className: eI()({
                  Paused: Vc
                }),
                title: Vc ? rB(`${Dq}coreBankPausedTag`) : void 0,
                children: [(0, tu.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, tu.jsx)(hI.d, {
                    itemName: Bc,
                    amount: 0
                  })
                }), nc, Vc && (0, tu.jsx)(pI.e, {
                  name: "pause"
                })]
              }, Bc)
            }))
          }), (0, tu.jsx)(pI.e, {
            name: uc ? "angle-up" : "angle-down"
          })]
        }), uc && (0, tu.jsxs)(tu.Fragment, {
          children: [(0, tu.jsx)("ul", {
            children: Oc.map((cB => {
              let [Bc, Vc] = cB;
              const uc = qB.has(Bc);
              return (0, tu.jsxs)("li", {
                children: [(0, tu.jsxs)(lq, {
                  item: Bc,
                  itemNames: nc,
                  children: [(0, tu.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Vc
                  }), uc && (0, tu.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: rB(`${Dq}coreBankPausedTag`)
                  })]
                }), (0, tu.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, tu.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Vc,
                    onClick: () => {
                      Ic.send(`baf2corewithdraw ${Vc} ${Bc}`)
                    },
                    children: rB(`${Dq}coreTake`)
                  }), (0, tu.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Ic.send(`${pc} ${Bc}`), Pc(Bc, !uc)
                    },
                    children: rB(uc ? `${Dq}coreBankResume` : `${Dq}coreBankStop`)
                  })]
                })]
              }, Bc)
            }))
          }), (0, tu.jsx)("p", {
            className: "Baf2CoreHint",
            children: rB(`${Dq}coreBankNote`)
          })]
        })]
      })
    }
    const Eq = "buildAFactory2Game:";

    function oq(cB) {
      const Bc = Math.max(0, Math.floor(cB));
      return `${Math.floor(Bc/60)}:${String(Bc%60).padStart(2,"0")}`
    }

    function Wq(cB) {
      let {
        item: Bc
      } = cB;
      return (0, tu.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, tu.jsx)(hI.d, {
          itemName: Bc,
          amount: 0
        })
      })
    }

    function wq() {
      return (0, tu.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, tu.jsx)(pI.e, {
          name: "bolt"
        })
      })
    }

    function kO(cB) {
      let {
        charge: Bc,
        hint: nc,
        itemNames: Vc
      } = cB;
      const Ic = Cu(),
        {
          t: rB
        } = (0, zr.x)(),
        [uc, sc, Mc, Pc, qB, Oc, Tc] = Bc,
        [fc, mB] = function(cB) {
          var Bc;
          let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yu,
            Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Ic, rB] = vO((() => cB), cB, nc, Vc);
          return [Zq(null !== (Bc = Ic.get("")) && void 0 !== Bc ? Bc : null, cB), cB => {
            rB("", cB)
          }]
        }(Tc),
        ec = fc === Tc ? Oc : !fc,
        tB = Pc >= qB,
        Sc = uc.find((cB => {
          let [, Bc, nc] = cB;
          return nc < .9 * Bc
        }));
      let yB = `${Eq}coreChargeWaiting`,
        zB = {};
      return tB ? yB = `${Eq}coreChargeDone` : fc ? yB = `${Eq}coreChargeStopped` : ec && nc ? (yB = `${Eq}${nc[0]}`, zB = {
        item: KI(rB, nc[1])
      }) : ec && Sc ? (yB = `${Eq}coreChargeShort`, zB = {
        item: KI(rB, Sc[0])
      }) : ec && sc > 0 && !Mc ? yB = `${Eq}coreChargePower` : ec && (yB = `${Eq}coreChargeRunning`), (0, tu.jsxs)("div", {
        className: eI()("Baf2CoreCharge", {
          Waiting: !ec && !tB,
          Done: tB
        }),
        children: [(0, tu.jsxs)("h4", {
          children: [rB(`${Eq}coreChargeTitle`), (0, tu.jsx)("span", {
            children: rB(`${Eq}coreChargeProgress`, {
              done: oq(Pc),
              need: oq(qB)
            })
          })]
        }), (0, tu.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, tu.jsx)("div", {
            style: {
              width: 100 * Math.min(Pc, qB) / qB + "%"
            }
          })
        }), (0, tu.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [uc.map((cB => {
            var Bc;
            let [nc, Ic, uc] = cB;
            const sc = uc >= .9 * Ic;
            return (0, tu.jsxs)("li", {
              className: eI()({
                Done: sc,
                Short: ec && !sc
              }),
              children: [(0, tu.jsx)(Wq, {
                item: nc
              }), (0, tu.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, tu.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, tu.jsx)(ar.e, {
                    text: null !== (Bc = Vc[nc]) && void 0 !== Bc ? Bc : nc
                  }), (0, tu.jsx)("span", {
                    children: rB(`${Eq}coreChargeItem`, {
                      now: String(uc),
                      need: String(Ic)
                    })
                  })]
                }), (0, tu.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, tu.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*uc/Ic)}%`
                    }
                  })
                })]
              })]
            }, nc)
          })), sc > 0 && (0, tu.jsxs)("li", {
            className: eI()("Baf2CoreChargePower", {
              Short: ec && !Mc
            }),
            children: [(0, tu.jsx)(wq, {}), (0, tu.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, tu.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, tu.jsx)("span", {
                  children: rB(`${Eq}coreChargePowerRow`, {
                    power: dc(sc)
                  })
                })
              })
            })]
          })]
        }), (0, tu.jsx)("p", {
          className: "Baf2CoreHint",
          children: rB(yB, zB)
        }), !tB && (ec || fc) && (0, tu.jsx)("button", {
          type: "button",
          className: eI()("Baf2CoreChargeToggle", {
            Stopped: fc
          }),
          onClick: () => {
            Ic.send(aB), mB(!fc)
          },
          children: rB(fc ? `${Eq}coreChargeRestart` : `${Eq}coreChargeStop`)
        })]
      })
    }

    function Xq(cB) {
      let {
        charge: Bc,
        reached: nc,
        itemNames: Vc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)();
      return (0, tu.jsxs)("div", {
        className: eI()("Baf2CoreCharge", {
          Done: nc
        }),
        children: [(0, tu.jsxs)("h4", {
          children: [Ic(`${Eq}coreChargeTitle`), (0, tu.jsx)("span", {
            children: Ic(`${Eq}coreChargeSpecTime`, {
              time: oq(Bc.seconds)
            })
          })]
        }), (0, tu.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Bc.items.map((cB => {
            var Bc;
            let {
              item: rB,
              amount: uc
            } = cB;
            return (0, tu.jsxs)("li", {
              className: eI()({
                Done: nc
              }),
              children: [(0, tu.jsx)(Wq, {
                item: rB
              }), (0, tu.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, tu.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, tu.jsx)(ar.e, {
                    text: null !== (Bc = Vc[rB]) && void 0 !== Bc ? Bc : rB
                  }), (0, tu.jsx)("span", {
                    children: Ic(`${Eq}coreChargeSpecItem`, {
                      need: String(uc)
                    })
                  })]
                })
              })]
            }, rB)
          })), Bc.powerPerS > 0 && (0, tu.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, tu.jsx)(wq, {}), (0, tu.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, tu.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, tu.jsx)("span", {
                  children: Ic(`${Eq}coreChargePowerRow`, {
                    power: dc(Bc.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const Hq = "buildAFactory2Game:";

    function Fq(cB) {
      let {
        def: Bc,
        reached: nc,
        banked: Vc,
        itemNames: Ic
      } = cB;
      const {
        t: rB
      } = (0, zr.x)();
      return (0, tu.jsx)("ul", {
        className: "Baf2CoreCost",
        children: Bc.cost.map((cB => {
          let {
            item: Bc,
            amount: uc
          } = cB;
          const sc = nc ? 0 : Vc(Bc);
          return (0, tu.jsx)("li", {
            children: (0, tu.jsx)(lq, {
              item: Bc,
              itemNames: Ic,
              children: (0, tu.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: sc > 0 ? rB(`${Hq}coreBankedFor`, {
                  amount: String(sc),
                  total: String(uc)
                }) : `\xd7${uc}`
              })
            })
          }, Bc)
        }))
      })
    }

    function Jq(cB, Bc) {
      if (Bc >= qB()) return cB(`${Hq}coreMaxTier`);
      const nc = Pc[Bc + 1];
      return nc && !nc.startsWith("upgradeCore") ? cB(`${Hq}coreGateQuest`, {
        quest: cB(`${Hq}quest_${nc}`)
      }) : cB(`${Hq}coreGateClosed`)
    }

    function jO() {
      const {
        t: cB
      } = (0, zr.x)(), Bc = Cu(), nc = (0, Vc.useRef)(null), Ic = (0, Vc.useRef)(Date.now());
      return WP(!0, nc), (0, tu.jsx)("div", {
        ref: nc,
        className: "Baf2CoreGrow",
        children: (0, tu.jsx)(fu.n, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Ic.current >= 600 && Bc.send(zB)
          },
          children: cB(`${Hq}coreGrow`)
        })
      })
    }

    function Rq(cB) {
      let {
        message: Bc,
        itemNames: nc,
        next: Vc
      } = cB;
      const Ic = Cu(),
        {
          t: rB
        } = (0, zr.x)(),
        uc = Bc.baf2CoreTier,
        sc = Bc.baf2CoreReady,
        Mc = Bc.baf2CoreNeeds.filter((cB => {
          let [, Bc, nc, Vc] = cB;
          return Vc > 0 && Bc < nc
        })),
        Pc = Bc.baf2CoreNeeds.every((cB => {
          let [, Bc, nc] = cB;
          return Bc >= nc
        })),
        qB = Bc.baf2CoreKeep;
      return (0, tu.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, tu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [sc && (0, tu.jsx)(jO, {}), (0, tu.jsx)("h3", {
            children: rB(`${Hq}coreBring`)
          }), (0, tu.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: Bc.baf2CoreNeeds.map((cB => {
              let [Bc, Vc, uc, sc] = cB;
              return (0, tu.jsxs)("li", {
                className: eI()({
                  Done: Vc >= uc
                }),
                children: [(0, tu.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, tu.jsx)(hI.d, {
                    itemName: Bc,
                    amount: 0
                  })
                }), (0, tu.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, tu.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, tu.jsx)(ar.e, {
                      text: nc[Bc]
                    }), (0, tu.jsxs)("span", {
                      children: [Vc, "/", uc]
                    })]
                  }), (0, tu.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, tu.jsx)("div", {
                      style: {
                        width: 100 * Vc / uc + "%"
                      }
                    }), sc > 0 && (0, tu.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * sc / uc + "%"
                      }
                    })]
                  })]
                }), sc > 0 && Vc < uc && (0, tu.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Ic.send(`${hc} ${Bc}`)
                  },
                  children: rB(`${Hq}coreDeposit`, {
                    amount: String(sc)
                  })
                })]
              }, Bc)
            }))
          }), Bc.baf2CoreCharge && (0, tu.jsx)(kO, {
            charge: Bc.baf2CoreCharge,
            hint: Bc.baf2CoreChargeHint,
            itemNames: nc
          }), !sc && Mc.length > 1 && (0, tu.jsx)(fu.n, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Ic.send(zB)
            },
            children: rB(`${Hq}coreHandOver`)
          }), !sc && void 0 !== qB && (0, tu.jsx)("p", {
            className: "Baf2CoreHint",
            children: rB(`${Hq}coreKeepRest`, {
              item: KI(rB, qB)
            })
          }), !sc && !Pc && 0 === Mc.length && void 0 === qB && (0, tu.jsx)("p", {
            className: "Baf2CoreHint",
            children: rB(`${Hq}coreNothingHeld`)
          }), (0, tu.jsx)(Nq, {
            message: Bc,
            itemNames: nc
          })]
        }), (0, tu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, tu.jsx)("h3", {
            children: rB(`${Hq}coreRewards`)
          }), (0, tu.jsx)(Uq, {
            def: Vc,
            tier: uc + 1,
            itemNames: nc
          })]
        })]
      })
    }

    function iO(cB) {
      let {
        message: Bc,
        itemNames: nc,
        shown: Vc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)(), rB = Bc.baf2CoreTier, uc = Sc(Vc), sc = Vc <= rB, Mc = new Map(Bc.baf2CoreBanked), Pc = !yB(rB, lc(Bc)) && Vc === rB;
      return (0, tu.jsxs)("div", {
        className: eI()("Baf2CoreBody", {
          Locked: !sc
        }),
        children: [(0, tu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, tu.jsx)("h3", {
            children: Ic(sc ? `${Hq}coreItTook` : `${Hq}coreItNeeds`)
          }), 0 === uc.cost.length && (0, tu.jsx)("p", {
            className: "Baf2CoreHint",
            children: Ic(`${Hq}coreTierStart`)
          }), uc.cost.length > 0 && (0, tu.jsx)(Fq, {
            def: uc,
            reached: sc,
            banked: cB => {
              var Bc;
              return function(cB, Bc, nc, Vc) {
                let Ic = cB;
                for (let uc = Bc + 2; uc <= nc; uc++) {
                  var rB;
                  const cB = Sc(uc).cost.find((cB => cB.item === Vc)),
                    Bc = Math.min(Ic, null !== (rB = null === cB || void 0 === cB ? void 0 : cB.amount) && void 0 !== rB ? rB : 0);
                  if (uc === nc) return Bc;
                  Ic -= Bc
                }
                return 0
              }(null !== (Bc = Mc.get(cB)) && void 0 !== Bc ? Bc : 0, rB, Vc, cB)
            },
            itemNames: nc
          }), uc.charge && (0, tu.jsx)(Xq, {
            charge: uc.charge,
            reached: sc,
            itemNames: nc
          }), Pc && (0, tu.jsxs)(tu.Fragment, {
            children: [(0, tu.jsx)("p", {
              className: "Baf2CoreHint",
              children: Jq(Ic, rB)
            }), (0, tu.jsx)(Nq, {
              message: Bc,
              itemNames: nc
            })]
          })]
        }), (0, tu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, tu.jsx)("h3", {
            children: Ic(sc ? `${Hq}coreGave` : `${Hq}coreLockedRewards`)
          }), (0, tu.jsx)(Uq, {
            def: uc,
            tier: Vc,
            itemNames: nc
          })]
        })]
      })
    }

    function Kq(cB, Bc) {
      const {
        key: nc,
        params: Vc
      } = fc(Bc - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return cB(`${Hq}${nc}`, Vc)
    }
    const xO = "buildAFactory2Game:",
      dq = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Aq = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function Gq(cB) {
      let {
        view: Bc,
        close: nc,
        askIslands: Ic
      } = cB;
      const {
        t: rB
      } = (0, zr.x)(), [uc, sc] = (0, Vc.useState)(!1);
      (0, Vc.useEffect)((() => {
        if (!uc) return;
        const cB = window.setTimeout((() => {
          sc(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(cB)
        }
      }), [uc]);
      const {
        message: Mc,
        itemNames: Pc
      } = Bc, qB = Mc.baf2CoreTier, Oc = Sc(qB), Tc = yB(qB, lc(Mc)), [ec, tB] = Mc.baf2CoreMachines, [zB, pc] = Mc.baf2CoreBelts, hc = Mc.baf2CoreStorage, aB = Mc.baf2CoreReady, [Yc, Lc] = (0, Vc.useState)(null), gB = (null === Yc || void 0 === Yc ? void 0 : Yc.at) === qB && Yc.ready === aB ? Yc.tier : Tc ? qB + 1 : qB;
      let Uc = "coreTierLocked";
      gB <= qB ? Uc = "coreTierReached" : gB === qB + 1 && (Uc = "coreTierNext");
      const bB = rB(`${xO}${Sc(gB).nameKey}`),
        Zc = gB === qB + 1 ? Tc : null,
        Qc = fc(gB, {
          tier: Uc,
          stage: dq[Uc],
          atomic: Aq[Uc]
        }),
        Cc = rB(`${xO}${Qc.key}`, {
          ...Qc.params,
          name: bB
        }),
        vB = fc(qB, mB),
        Dc = rB(`${xO}${vB.key}`, {
          ...vB.params,
          name: rB(`${xO}${Oc.nameKey}`)
        });
      return (0, tu.jsx)(Tu.b, {
        close: nc,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, tu.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsxs)("div", {
              children: [(0, tu.jsx)("h2", {
                id: "baf2CoreTitle",
                children: rB(`${xO}coreTitle`)
              }), void 0 !== Mc.baf2CoreIslandName && (0, tu.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Mc.baf2CoreIslandName
              }), (0, tu.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, tu.jsx)("span", {
                  children: Dc
                }), (0, tu.jsx)("span", {
                  className: eI()({
                    Full: ec >= tB
                  }),
                  children: rB(`${xO}coreMachineCount`, {
                    amount: String(ec),
                    total: String(tB)
                  })
                }), (0, tu.jsx)("span", {
                  className: eI()({
                    Full: zB >= pc
                  }),
                  children: rB(`${xO}coreBeltCount`, {
                    amount: String(zB),
                    total: String(pc)
                  })
                }), void 0 !== hc && (0, tu.jsx)("span", {
                  className: eI()({
                    Full: hc[0] >= hc[1]
                  }),
                  children: rB(`${xO}coreStorageCount`, {
                    amount: String(hc[0]),
                    total: String(hc[1])
                  })
                })]
              })]
            }), (0, tu.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Mc.baf2CoreIslands && (0, tu.jsx)(fu.d, {
                className: "Baf2CoreIslandsButton",
                disabled: uc,
                onClick: () => {
                  sc(!0), Ic()
                },
                children: rB(`${xO}islandsOpenButton`)
              }), (0, tu.jsx)(fu.k, {
                onClick: nc
              })]
            })]
          }), (0, tu.jsx)(hq, {
            tier: qB,
            shown: gB,
            Vn: cB => {
              Lc({
                tier: cB,
                at: qB,
                ready: aB
              })
            }
          }), (0, tu.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Cc, gB > qB + 1 && (0, tu.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: Kq(rB, gB)
            })]
          }), 6 === gB && gB > qB && (0, tu.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: rB(`${xO}coreStagesNote`)
          }), 11 === gB && gB > qB && (0, tu.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: rB(`${xO}coreAtomicNote`)
          }), Zc && (0, tu.jsx)(Rq, {
            message: Mc,
            itemNames: Pc,
            next: Zc
          }), !Zc && (0, tu.jsx)(iO, {
            message: Mc,
            itemNames: Pc,
            shown: gB
          })]
        })
      })
    }
    const cT = {
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
    const BO = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: GI,
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

    function nO(cB) {
      return cB.baf2DropCometOreOnly ? "dropCometOre" : cB.baf2DropCometIsotope ? "seed" === cB.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function VO(cB) {
      let {
        message: Bc,
        quests: nc,
        close: Ic,
        OV: rB
      } = cB;
      const uc = Cu(),
        {
          t: sc
        } = (0, zr.x)(),
        Mc = (0, RP.g)(UI, nc.get()),
        Pc = function(cB) {
          var Bc;
          if (!vB(cB.tutorial)) return null;
          const nc = cB.rows.find((cB => cB.current)),
            Vc = nc ? cT[nc.key] : void 0;
          return null !== (Bc = null !== Vc && void 0 !== Vc ? Vc : cB.side ? cT[cB.side.row.key] : void 0) && void 0 !== Bc ? Bc : null
        }(Mc),
        qB = null === Mc.tier || nr(Mc.tier),
        Oc = qB ? BO : BO.filter((cB => {
          let {
            item: Bc
          } = cB;
          return Bc !== GI
        })),
        [Tc, fc] = (0, Vc.useState)(null),
        mB = null !== Tc && void 0 !== Tc ? Tc : !Bc.baf2DropFoundSalvage && qB,
        ec = Bc.baf2DropRuinDistance,
        tB = Bc.baf2DropComet,
        Sc = Bc.baf2DropOldWorks,
        yB = Bc.baf2DropGrove,
        zB = function(cB) {
          return 2 + Number(void 0 !== cB.baf2DropComet) + Number(!!cB.baf2DropOwedComet || void 0 !== cB.baf2DropOwedWaitMinutes) + Number(void 0 !== cB.baf2DropDigDistance) + Number(void 0 !== cB.baf2DropOldWorks) + Number(void 0 !== cB.baf2DropGrove)
        }(Bc),
        pc = cB => {
          uc.send(function(cB) {
            return `baf2drop ${cB}`
          }(cB)), rB()
        };
      let hc = sc("buildAFactory2Game:dropRuinNone");
      if (null !== ec) {
        let cB = Bc.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        Bc.baf2DropRuinOldWorks && (cB = "dropRuinOldWorks");
        const nc = void 0 === Bc.baf2DropRuinCluster ? sc("buildAFactory2Game:dropRuinOpen") : sc("buildAFactory2Game:dropRuinCluster", {
          count: String(Bc.baf2DropRuinCluster)
        });
        hc = `${sc(`buildAFactory2Game:${cB}`,{distance:String(ec)})} ${nc}`
      }
      let aB = sc("buildAFactory2Game:dropBelowDescription");
      void 0 !== Bc.baf2DropBelowLook && (aB = sc("buildAFactory2Game:dropBelowLook", {
        look: sc(Bc.baf2DropBelowLook)
      }));
      const lc = "buildAFactory2Game:wildsRegion_survivorGrove" === Bc.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        Yc = Tr(sc, 60 * function(cB) {
          const [Bc, nc] = (0, Vc.useState)((() => Date.now())), [Ic, rB] = (0, Vc.useState)(Bc);
          return (0, Vc.useEffect)((() => {
            const cB = Date.now();
            nc(cB), rB(cB)
          }), [cB]), (0, Vc.useEffect)((() => {
            const cB = window.setInterval((() => {
              rB(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(cB)
            }
          }), []), Math.max(1, cB.baf2DropRenewMinutes - Math.floor((Ic - Bc) / 6e4))
        }(Bc)),
        Lc = function(cB, Bc, nc) {
          return "ruin" === cB && !nc || "owed" === cB && !Bc.baf2DropOwedComet ? null : cB
        }(Pc, Bc, null !== ec),
        gB = function(cB) {
          for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
          return eI()("Baf2DropTile", ...nc, {
            Wanted: Lc === cB
          })
        };
      return (0, tu.jsx)(Tu.b, {
        close: Ic,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, tu.jsxs)("section", {
          className: eI()("Baf2Panel Baf2DropMap", {
            Many: zB >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsxs)("div", {
              children: [(0, tu.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: sc("buildAFactory2Game:dropMapTitle")
              }), (0, tu.jsx)("p", {
                children: sc("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, tu.jsx)(fu.k, {
              onClick: Ic
            })]
          }), (0, tu.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== tB && (0, tu.jsxs)(fu.A, {
              className: gB("comet", "Baf2DropComet"),
              onClick: () => {
                pc("comet")
              },
              children: [(0, tu.jsx)("strong", {
                children: sc("buildAFactory2Game:dropComet")
              }), (0, tu.jsx)("span", {
                children: sc(`buildAFactory2Game:${nO(Bc)}`, {
                  distance: String(tB)
                })
              })]
            }), Bc.baf2DropOwedComet && (0, tu.jsxs)(fu.A, {
              className: gB("owed", "Baf2DropComet"),
              onClick: () => {
                pc("owed")
              },
              children: [(0, tu.jsx)("strong", {
                children: sc("buildAFactory2Game:dropOwedComet")
              }), (0, tu.jsx)("span", {
                children: Bc.baf2DropOwedIsotope ? sc("buildAFactory2Game:dropOwedIsotopeDescription") : sc("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== Bc.baf2DropOwedWaitMinutes && (0, tu.jsxs)(fu.A, {
              className: gB("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, tu.jsx)("strong", {
                children: sc("buildAFactory2Game:dropOwedComet")
              }), (0, tu.jsx)("span", {
                children: sc("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(Bc.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, tu.jsxs)(fu.d, {
              className: gB("below"),
              onClick: () => {
                pc("below")
              },
              children: [(0, tu.jsx)("strong", {
                children: sc("buildAFactory2Game:dropBelow")
              }), (0, tu.jsx)("span", {
                children: aB
              })]
            }), void 0 !== Bc.baf2DropDigDistance && (0, tu.jsxs)(fu.u, {
              className: gB("dig"),
              onClick: () => {
                pc("dig")
              },
              children: [(0, tu.jsx)("strong", {
                children: sc("buildAFactory2Game:dropDig")
              }), (0, tu.jsx)("span", {
                children: sc("buildAFactory2Game:dropDigDescription", {
                  distance: String(Bc.baf2DropDigDistance),
                  y: Or(Bc.baf2DropDigY)
                })
              })]
            }), void 0 !== yB && (0, tu.jsxs)(fu.u, {
              className: gB("grove", "Baf2DropGrove"),
              onClick: () => {
                pc("grove")
              },
              children: [(0, tu.jsx)("strong", {
                children: sc("buildAFactory2Game:dropGrove")
              }), (0, tu.jsx)("span", {
                children: sc(`buildAFactory2Game:${lc}`, {
                  distance: String(yB)
                })
              })]
            }), (0, tu.jsxs)(fu.n, {
              className: gB("ruin"),
              disabled: null === ec,
              onClick: () => {
                pc("ruin")
              },
              children: [(0, tu.jsx)("strong", {
                children: sc("buildAFactory2Game:dropRuin")
              }), (0, tu.jsx)("span", {
                children: hc
              })]
            }), void 0 !== Sc && (0, tu.jsxs)(fu.L, {
              className: gB("works"),
              onClick: () => {
                pc("works")
              },
              children: [(0, tu.jsx)("strong", {
                children: sc("buildAFactory2Game:dropOldWorks")
              }), (0, tu.jsx)("span", {
                children: sc("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(Sc)
                })
              })]
            })]
          }), (0, tu.jsx)("p", {
            className: "Baf2DropRenew",
            children: sc("buildAFactory2Game:dropRenew", {
              time: Yc
            })
          }), (0, tu.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: mB,
            onToggle: cB => {
              cB.currentTarget.open !== mB && fc(cB.currentTarget.open)
            },
            children: [(0, tu.jsx)("summary", {
              children: sc("buildAFactory2Game:dropSalvageWhat")
            }), (0, tu.jsx)("p", {
              children: sc("buildAFactory2Game:dropSalvageIntro")
            }), (0, tu.jsx)("ul", {
              children: Oc.map((cB => {
                let {
                  item: Bc,
                  nameKey: nc,
                  useKey: Vc,
                  params: Ic
                } = cB;
                return (0, tu.jsxs)("li", {
                  children: [(0, tu.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, tu.jsx)(hI.d, {
                      itemName: Bc,
                      amount: 0
                    })
                  }), (0, tu.jsxs)("span", {
                    children: [(0, tu.jsx)("strong", {
                      children: sc(nc)
                    }), ": ", sc(Vc, Ic)]
                  })]
                }, Bc)
              }))
            })]
          })]
        })
      })
    }
    const IO = "buildAFactory2Game:";

    function rT(cB, Bc) {
      return cB.sendIslandEdit(`baf2coopleave ${Bc.baf2IslandId}`)
    }

    function uO(cB) {
      let {
        card: Bc,
        canRename: nc,
        done: Ic,
        t: rB
      } = cB;
      const uc = Cu(),
        [sc, Mc] = (0, Vc.useState)(Bc.baf2IslandName),
        Pc = TP(sc),
        qB = "" === Pc || fP(Pc),
        Oc = () => {
          !qB && nc && (Pc !== Bc.baf2IslandName ? Ic(uc.sendIslandEdit(`baf2islandrename ${Bc.baf2IslandId} ${Pc}`)) : Ic(null))
        },
        Tc = () => {
          Ic(null)
        };
      return (0, tu.jsxs)("div", {
        className: "Baf2IslandForm",
        ...EP(Tc),
        children: [(0, tu.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [rB(`${IO}islandsRenameLabel`), (0, tu.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: sc,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: oP,
            onChange: cB => {
              Mc(cB.target.value)
            },
            ...NP(Oc, Tc)
          })]
        }), "" === Pc && (0, tu.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: rB(`${IO}islandsRenameEmpty`)
        }), fP(Pc) && (0, tu.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: rB(`${IO}islandsNameReserved`)
        }), (0, tu.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, tu.jsx)(fu.u, {
            disabled: qB || !nc,
            onClick: Oc,
            children: rB(`${IO}islandsRenameSave`)
          }), (0, tu.jsx)(fu.d, {
            onClick: Tc,
            children: rB(`${IO}islandsCancel`)
          })]
        })]
      })
    }

    function sO(cB) {
      let {
        card: Bc,
        canDelete: nc,
        done: Ic,
        t: rB
      } = cB;
      const uc = Cu(),
        [sc, Mc] = (0, Vc.useState)(""),
        Pc = function(cB, Bc) {
          return TP(cB).toLowerCase() === TP(Bc).toLowerCase()
        }(sc, Bc.baf2IslandName),
        qB = () => {
          Pc && nc && Ic(uc.sendIslandEdit(`baf2islanddelete ${Bc.baf2IslandId}`))
        },
        Oc = () => {
          Ic(null)
        },
        Tc = YP("name"),
        [fc, mB = ""] = rB(`${IO}islandsDeleteConfirm`, {
          name: Tc
        }).split(Tc);
      return (0, tu.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...EP(Oc),
        children: [(0, tu.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, tu.jsxs)("span", {
            children: [fc, (0, tu.jsx)("strong", {
              children: Bc.baf2IslandName
            }), mB]
          }), (0, tu.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: sc,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: oP,
            onChange: cB => {
              Mc(cB.target.value)
            },
            ...NP(qB, Oc)
          })]
        }), QP(Bc) && (0, tu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: rB(`${IO}islandsDeleteLeftBack`)
        }), (0, tu.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, tu.jsx)(fu.L, {
            disabled: !Pc || !nc,
            onClick: qB,
            children: rB(`${IO}islandsDeleteForGood`)
          }), (0, tu.jsx)(fu.d, {
            onClick: Oc,
            children: rB(`${IO}islandsCancel`)
          })]
        })]
      })
    }

    function MO(cB) {
      let {
        members: Bc,
        t: nc
      } = cB;
      const Vc = Bc.length;
      return (0, tu.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, tu.jsxs)("span", {
          children: [1 === Vc ? nc(`${IO}islandsPlayersOne`) : nc(`${IO}islandsPlayers`, {
            count: String(Vc)
          }), " "]
        }), Bc.map(((cB, Bc) => (0, tu.jsxs)("span", {
          className: eI()("Baf2IslandMember", {
            Here: cB.baf2MemberHere
          }),
          title: cB.baf2MemberHere ? nc(`${IO}islandsPlayerHere`) : void 0,
          children: [cB.baf2MemberName, Bc < Vc - 1 ? ", " : ""]
        }, cB.baf2MemberKey)))]
      })
    }

    function PO(cB) {
      let {
        card: Bc,
        answered: nc,
        nowMs: Ic,
        t: rB
      } = cB;
      const uc = Cu(),
        [sc, Mc] = (0, Vc.useState)(new Map),
        Pc = QP(Bc);
      if (!Pc) return null;
      return (0, tu.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, tu.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: rB(`${IO}islandsLeftTitle`)
        }), (0, tu.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Pc.left.map((cB => {
            const Vc = cB.baf2LeftKey,
              qB = vq(sc.get(Vc), nc, Ic),
              Oc = function(cB) {
                return 1 === cB ? [`${MP}islandsLeftItemsOne`] : [`${MP}islandsLeftItems`, {
                  count: String(cB)
                }]
              }(cB.baf2LeftItems);
            return (0, tu.jsx)("li", {
              className: eI()("Baf2IslandPerson", {
                Pending: qB
              }),
              children: (0, tu.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, tu.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: cB.baf2LeftName
                }), (0, tu.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: rB(Oc[0], Oc[1])
                }), Pc.claim && (0, tu.jsx)(fu.u, {
                  className: "Baf2IslandPersonButton",
                  disabled: qB,
                  onClick: () => {
                    (cB => {
                      const nc = uc.sendIslandEdit(`baf2coopclaim ${Bc.baf2IslandId} ${cB}`);
                      Mc((Bc => new Map(Bc).set(cB, {
                        atMs: Date.now(),
                        answer: nc
                      })))
                    })(Vc)
                  },
                  children: rB(`${IO}islandsClaim`)
                })]
              })
            }, Vc)
          }))
        }), Pc.goThere && (0, tu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: rB(`${IO}islandsClaimGoThere`)
        })]
      })
    }

    function qT(cB) {
      let {
        card: Bc,
        view: nc,
        blocked: Ic,
        maxIslands: rB,
        answered: uc,
        nowMs: sc,
        done: Mc,
        openSocial: Pc,
        t: qB
      } = cB;
      const Oc = Cu(),
        [Tc, fc] = (0, Vc.useState)(new Map),
        [mB, ec] = (0, Vc.useState)(new Map),
        [tB, Sc] = (0, Vc.useState)(null),
        yB = (0, Vc.useRef)(null);
      kq(yB);
      const zB = Bc.baf2IslandId,
        pc = Bc.baf2IslandCoop,
        hc = null !== pc && void 0 !== pc && pc.baf2CoopMembers.some((cB => cB.baf2MemberKey === tB)) ? tB : null,
        aB = function(cB, Bc) {
          const nc = cB.baf2IslandCoop;
          return nc && CP(nc) || null !== Bc ? void 0 : cB.baf2IslandInvitable
        }(Bc, Ic),
        lc = function(cB, Bc) {
          const nc = cB.baf2IslandCoop;
          return nc && CP(nc) ? {
            key: `${MP}islandsCoopFull`,
            params: {
              max: String(nc.baf2CoopMax)
            }
          } : void 0 !== cB.baf2IslandInvitable && null === Bc || nc && !nc.baf2CoopManageHere ? null : "degraded" === Bc || "stuck" === Bc ? {
            key: `${MP}islandsInviteNotLoaded`
          } : null === Bc || function(cB) {
            return "notHome" === cB || "wilds" === cB || "visiting" === cB
          }(Bc) || SP(Bc) ? {
            key: `${MP}islandsInviteGoThere`
          } : {
            key: `${MP}islandsInviteBusy`
          }
        }(Bc, Ic),
        Yc = () => {
          var cB;
          Sc(null), null === (cB = yB.current) || void 0 === cB || cB.focus()
        };
      return (0, tu.jsxs)("div", {
        ref: yB,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...EP(null === hc ? Mc : Yc),
        children: [pc && (0, tu.jsxs)(tu.Fragment, {
          children: [(0, tu.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: qB(`${IO}islandsPlayersTitle`, {
              count: String(pc.baf2CoopMembers.length),
              max: String(pc.baf2CoopMax)
            })
          }), (0, tu.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: pc.baf2CoopMembers.map(((cB, Bc) => {
              const Vc = cB.baf2MemberKey,
                Ic = vq(Tc.get(Vc), uc, sc);
              return (0, tu.jsxs)("li", {
                className: eI()("Baf2IslandPerson", {
                  Pending: Ic
                }),
                children: [(0, tu.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, tu.jsx)("span", {
                    className: eI()("Baf2IslandPersonName", {
                      Here: cB.baf2MemberHere
                    }),
                    children: cB.baf2MemberName
                  }), cB.baf2MemberHere && (0, tu.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: qB(`${IO}islandsPlayerHere`)
                  }), 0 === Bc && (0, tu.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: qB(`${IO}islandsPlayerOwner`)
                  }), nc.remove && Bc > 0 && !Ic && hc !== Vc && (0, tu.jsx)(fu.N, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var cB;
                      Sc(Vc), null === (cB = yB.current) || void 0 === cB || cB.focus()
                    },
                    children: qB(`${IO}islandsRemove`)
                  })]
                }), hc === Vc && (0, tu.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, tu.jsx)("p", {
                    children: LP(qB, `${IO}islandsRemoveConfirm`, {
                      player: cB.baf2MemberName
                    })
                  }), (0, tu.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, tu.jsx)(fu.L, {
                      onClick: () => {
                        (cB => {
                          const Bc = Oc.sendIslandEdit(`baf2coopremove ${zB} ${cB.baf2MemberKey}`);
                          fc((nc => new Map(nc).set(cB.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: Bc
                          }))), Yc()
                        })(cB)
                      },
                      children: qB(`${IO}islandsRemoveYes`)
                    }), (0, tu.jsx)(fu.d, {
                      onClick: Yc,
                      children: qB(`${IO}islandsCancel`)
                    })]
                  })]
                })]
              }, Vc)
            }))
          })]
        }), (void 0 !== aB || null !== lc) && (0, tu.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: qB(`${IO}islandsInviteTitle`)
        }), !pc && (void 0 !== aB || null !== lc) && (0, tu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: qB(`${IO}islandsInviteShareNote`)
        }), 0 === (null === aB || void 0 === aB ? void 0 : aB.length) && (0, tu.jsx)(OO, {
          openSocial: Pc,
          t: qB
        }), void 0 !== aB && aB.length > 0 && (0, tu.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: aB.map((cB => {
            const Bc = !0 === cB.baf2InvitableSent || vq(mB.get(cB.baf2InvitableId), uc, sc);
            return (0, tu.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, tu.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, tu.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: cB.baf2InvitableName
                }), cB.baf2InvitableFull && !Bc && (0, tu.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: qB(`${IO}islandsInviteTheirFull`, {
                    max: String(rB)
                  })
                }), (Bc || !cB.baf2InvitableFull) && (0, tu.jsx)(fu.u, {
                  className: "Baf2IslandPersonButton",
                  disabled: Bc,
                  onClick: () => {
                    (cB => {
                      const Bc = Oc.sendIslandEdit(`baf2coopinvite ${zB} ${cB}`);
                      ec((nc => new Map(nc).set(cB, {
                        atMs: Date.now(),
                        answer: Bc
                      })))
                    })(cB.baf2InvitableId)
                  },
                  children: qB(Bc ? `${IO}islandsInvited` : `${IO}islandsInvite`)
                })]
              })
            }, cB.baf2InvitableId)
          }))
        }), lc && (0, tu.jsx)(FP, {
          note: lc,
          t: qB
        }), (0, tu.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, tu.jsx)(fu.d, {
            onClick: Mc,
            children: qB(`${IO}islandsDone`)
          })
        })]
      })
    }

    function OO(cB) {
      let {
        openSocial: Bc,
        t: nc
      } = cB;
      return (0, tu.jsxs)(tu.Fragment, {
        children: [(0, tu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: nc(Bc ? `${IO}islandsInviteNobody` : `${IO}islandsInviteNobodyGuest`)
        }), Bc && (0, tu.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, tu.jsx)(fu.d, {
            onClick: Bc,
            children: nc("socialBar:social")
          })
        })]
      })
    }

    function TO(cB) {
      let {
        className: Bc,
        text: nc,
        ConfirmButton: Ic,
        confirmLabel: rB,
        canConfirm: uc,
        send: sc,
        done: Mc,
        t: Pc
      } = cB;
      const qB = (0, Vc.useRef)(null);
      kq(qB);
      const Oc = () => {
        Mc(null)
      };
      return (0, tu.jsxs)("div", {
        ref: qB,
        tabIndex: -1,
        className: eI()("Baf2IslandForm", Bc),
        ...EP(Oc),
        children: [(0, tu.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: nc
        }), (0, tu.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, tu.jsx)(Ic, {
            disabled: !uc,
            onClick: () => {
              uc && Mc(sc())
            },
            children: rB
          }), (0, tu.jsx)(fu.d, {
            onClick: Oc,
            children: Pc(`${IO}islandsCancel`)
          })]
        })]
      })
    }

    function fO(cB) {
      return "hidden" !== cB
    }

    function mT(cB) {
      var Bc, nc;
      let {
        card: Ic,
        keepOwn: rB,
        blocked: uc,
        maxIslands: sc,
        serverNowMs: Mc,
        nowMs: Pc,
        actions: qB,
        full: Oc,
        waits: Tc,
        answered: fc,
        mode: mB,
        setMode: ec,
        pending: tB,
        onSent: Sc,
        switchTo: yB,
        OV: zB,
        coopOn: pc,
        openSocial: hc,
        t: aB
      } = cB;
      const lc = Cu(),
        Yc = Ic.baf2IslandActive,
        Lc = Yc ? null : function(cB, Bc) {
          if (cB <= 0) return null;
          const nc = Bc - cB;
          if (nc < sr) return [`${MP}islandsPlayedJustNow`];
          if (nc < PP) return [`${MP}islandsPlayedMinutes`, {
            minutes: String(Math.floor(nc / sr))
          }];
          if (nc < qq) return [`${MP}islandsPlayedHours`, {
            hours: String(Math.floor(nc / PP))
          }];
          const Vc = Math.floor(nc / qq);
          return 1 === Vc ? [`${MP}islandsPlayedDay`] : [`${MP}islandsPlayedDays`, {
            days: String(Vc)
          }]
        }(Ic.baf2IslandLastPlayedMs, Mc),
        gB = void 0 === (Uc = Ic.baf2IslandItems) ? null : 0 === Uc ? [`${MP}islandsItemsNone`] : 1 === Uc ? [`${MP}islandsItemsOne`] : [`${MP}islandsItems`, {
          count: String(Uc)
        }];
      var Uc;
      const bB = function(cB) {
          return cB ? 1 === cB ? [`${MP}islandsWaitingOne`] : [`${MP}islandsWaiting`, {
            count: String(cB)
          }] : null
        }(Ic.baf2IslandWaiting),
        Zc = Ic.baf2IslandUnreadable,
        Qc = Ic.baf2IslandCoop,
        Cc = ZP(Ic, qB, rB, Oc, pc),
        vB = (0, Vc.useRef)(null);
      WP(null !== mB, vB);
      const Dc = () => {
          var cB;
          ec(null), null === (cB = vB.current) || void 0 === cB || cB.focus()
        },
        Nc = (cB, Bc) => {
          Dc(), null !== cB && Sc(cB, Bc)
        },
        Ec = (cB, Bc) => aB(`${IO}${cB}`, {
          time: Tr(aB, Bc)
        });
      return (0, tu.jsxs)("li", {
        ref: vB,
        tabIndex: -1,
        className: eI()("Baf2IslandCard", {
          Active: Yc,
          Pending: tB,
          Shared: void 0 !== Qc
        }),
        children: [(0, tu.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, tu.jsx)("strong", {
            className: "Baf2IslandName",
            children: Ic.baf2IslandName
          }), Yc && (0, tu.jsx)("span", {
            className: "Baf2IslandBadge",
            children: aB(`${IO}islandsOnThis`)
          }), Qc && (0, tu.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: aB(`${IO}islandsShared`)
          })]
        }), "member" === (null === Qc || void 0 === Qc ? void 0 : Qc.baf2CoopRole) && (0, tu.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: LP(aB, `${IO}islandsSharedBy`, {
            owner: Qc.baf2CoopOwner
          })
        }), void 0 !== Zc && (0, tu.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: aB("newer" === Zc ? `${IO}islandsUnreadable` : `${IO}islandsDamaged`)
        }), "corrupt" === Zc && Oc && (0, tu.jsx)("p", {
          className: "Baf2IslandStats",
          children: aB(`${IO}islandsDamagedFull`)
        }), void 0 === Zc && (0, tu.jsxs)(tu.Fragment, {
          children: [(0, tu.jsx)(HP, {
            tier: Ic.baf2IslandTier,
            t: aB
          }), (0, tu.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, tu.jsx)("span", {
              children: 1 === Ic.baf2IslandQuestsDone ? aB(`${IO}islandsQuestsDoneOne`) : aB(`${IO}islandsQuestsDone`, {
                count: String(Ic.baf2IslandQuestsDone)
              })
            }), (0, tu.jsx)("span", {
              children: 1 === Ic.baf2IslandMachines ? aB(`${IO}islandsMachinesOne`) : aB(`${IO}islandsMachines`, {
                count: String(Ic.baf2IslandMachines)
              })
            }), gB && (0, tu.jsx)("span", {
              children: aB(gB[0], gB[1])
            }), bB && (0, tu.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: aB(bB[0], bB[1])
            }), Lc && (0, tu.jsx)("span", {
              children: aB(Lc[0], Lc[1])
            })]
          })]
        }), Qc && void 0 === Qc.baf2CoopState && "people" !== mB && (0, tu.jsx)(MO, {
          members: Qc.baf2CoopMembers,
          t: aB
        }), null === mB && (0, tu.jsx)(PO, {
          card: Ic,
          answered: fc,
          nowMs: Pc,
          t: aB
        }), Cc.note && (0, tu.jsx)(FP, {
          note: Cc.note,
          className: eI()({
            Unreachable: void 0 !== (null === Qc || void 0 === Qc ? void 0 : Qc.baf2CoopState)
          }),
          t: aB
        }), "rename" === mB && (0, tu.jsx)(uO, {
          card: Ic,
          canRename: "enabled" === Cc.rename,
          done: Nc,
          t: aB
        }), "delete" === mB && (0, tu.jsx)(sO, {
          card: Ic,
          canDelete: "enabled" === Cc.delete,
          done: cB => {
            Nc(cB, Qc ? "delete" : void 0)
          },
          t: aB
        }), "people" === mB && (0, tu.jsx)(qT, {
          card: Ic,
          view: Cc,
          blocked: uc,
          maxIslands: sc,
          answered: fc,
          nowMs: Pc,
          done: Dc,
          openSocial: hc,
          t: aB
        }), "OV" === mB && (0, tu.jsx)(TO, {
          className: "Leave",
          text: LP(aB, `${IO}islandsLeaveConfirm`, {
            island: Ic.baf2IslandName,
            owner: null !== (Bc = null === (nc = Ic.baf2IslandCoop) || void 0 === nc ? void 0 : nc.baf2CoopOwner) && void 0 !== Bc ? Bc : ""
          }),
          ConfirmButton: fu.L,
          confirmLabel: aB(`${IO}islandsLeaveYes`),
          canConfirm: "enabled" === Cc.OV,
          send: () => rT(lc, Ic),
          done: cB => {
            Nc(cB, "OV"), null !== cB && Yc && zB()
          },
          t: aB
        }), "unshare" === mB && (0, tu.jsx)(TO, {
          className: "Unshare",
          text: LP(aB, `${IO}islandsStopSharingConfirm`, {
            island: Ic.baf2IslandName
          }),
          ConfirmButton: fu.u,
          confirmLabel: aB(`${IO}islandsStopSharing`),
          canConfirm: "enabled" === Cc.unshare,
          send: () => lc.sendIslandEdit(`baf2coopunshare ${Ic.baf2IslandId}`),
          done: cB => {
            Nc(cB), null !== cB && zB()
          },
          t: aB
        }), null === mB && !tB && (0, tu.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Ic.baf2IslandName,
          children: [fO(Cc.switch) && (0, tu.jsx)(fu.u, {
            disabled: "enabled" !== Cc.switch,
            onClick: yB,
            children: Tc.switch > 0 ? Ec("islandsSwitchIn", Tc.switch) : aB(`${IO}islandsSwitch`)
          }), fO(Cc.rename) && (0, tu.jsx)(fu.d, {
            disabled: "enabled" !== Cc.rename,
            onClick: () => {
              ec("rename")
            },
            children: aB(`${IO}islandsRename`)
          }), fO(Cc.people) && (0, tu.jsx)(fu.d, {
            disabled: "enabled" !== Cc.people,
            onClick: () => {
              ec("people")
            },
            children: aB("players" === Cc.peopleLabel ? `${IO}islandsPlayersButton` : `${IO}islandsInviteButton`)
          }), fO(Cc.unshare) && (0, tu.jsx)(fu.d, {
            disabled: "enabled" !== Cc.unshare,
            onClick: () => {
              ec("unshare")
            },
            children: aB(`${IO}islandsStopSharing`)
          }), fO(Cc.dismiss) && (0, tu.jsx)(fu.d, {
            disabled: "enabled" !== Cc.dismiss,
            onClick: () => {
              Sc(rT(lc, Ic), "dismiss"), Yc && zB()
            },
            children: aB(`${IO}islandsDismiss`)
          }), fO(Cc.OV) && (0, tu.jsx)(fu.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Cc.OV,
            onClick: () => {
              ec("OV")
            },
            children: Yc && Tc.switch > 0 ? Ec("islandsLeaveIn", Tc.switch) : aB(`${IO}islandsLeave`)
          }), fO(Cc.delete) && (0, tu.jsx)(fu.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Cc.delete,
            onClick: () => {
              ec("delete")
            },
            children: Tc.change > 0 && Cc.deleteWaits ? Ec("islandsDeleteIn", Tc.change) : aB(`${IO}islandsDelete`)
          })]
        })]
      })
    }
    const eO = "buildAFactory2Game:";

    function tT(cB) {
      let {
        invite: Bc,
        actions: nc,
        full: Ic,
        maxIslands: rB,
        waitSeconds: uc,
        focus: sc,
        focused: Mc,
        join: Pc,
        decline: qB,
        t: Oc
      } = cB;
      const [Tc, fc] = (0, Vc.useState)(!1), mB = (0, Vc.useRef)(null);
      WP(Tc, mB), (0, Vc.useEffect)((() => {
        var cB;
        sc && (fc(!0), null === (cB = mB.current) || void 0 === cB || cB.focus(), Mc())
      }), [sc, Mc]);
      const ec = function(cB, Bc, nc, Vc, Ic) {
          return nc ? {
            join: !1,
            note: {
              key: `${MP}islandsJoinTooMany`,
              params: {
                max: String(Vc)
              }
            }
          } : cB.baf2InvitePlayers >= Ic ? {
            join: !1,
            note: {
              key: `${MP}islandsJoinFull`
            }
          } : {
            join: Bc.switch,
            note: null
          }
        }(Bc, nc, Ic, rB, 10),
        tB = Bc.baf2InviteIsland,
        Sc = Bc.baf2InvitePlayers,
        yB = () => {
          var cB;
          fc(!1), null === (cB = mB.current) || void 0 === cB || cB.focus()
        },
        zB = uc > 0 && null === ec.note ? Oc(`${eO}islandsJoinIn`, {
          time: Tr(Oc, uc)
        }) : Oc(`${eO}islandsJoin`);
      return (0, tu.jsxs)("li", {
        ref: mB,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Tc ? EP(yB) : {},
        children: [(0, tu.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, tu.jsx)("strong", {
            className: "Baf2IslandName",
            children: tB
          })
        }), (0, tu.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: LP(Oc, `${eO}islandsInvitedBy`, {
            owner: Bc.baf2InviteOwner
          })
        }), (0, tu.jsx)(HP, {
          tier: Bc.baf2InviteTier,
          t: Oc
        }), (0, tu.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, tu.jsx)("span", {
            children: 1 === Sc ? Oc(`${eO}islandsPlayersCountOne`) : Oc(`${eO}islandsPlayersCount`, {
              count: String(Sc)
            })
          })
        }), ec.note && (0, tu.jsx)(FP, {
          note: ec.note,
          t: Oc
        }), Tc && (0, tu.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: LP(Oc, `${eO}islandsJoinConfirm`, {
            island: tB
          })
        }), !Tc && (0, tu.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": tB,
          children: [(0, tu.jsx)(fu.u, {
            disabled: !ec.join,
            onClick: () => {
              var cB;
              fc(!0), null === (cB = mB.current) || void 0 === cB || cB.focus()
            },
            children: zB
          }), (0, tu.jsx)(fu.d, {
            onClick: qB,
            children: Oc(`${eO}islandsDecline`)
          })]
        }), Tc && (0, tu.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, tu.jsx)(fu.u, {
            disabled: !ec.join,
            onClick: Pc,
            children: Oc(`${eO}islandsJoinYes`)
          }), (0, tu.jsx)(fu.d, {
            onClick: yB,
            children: Oc(`${eO}islandsCancel`)
          })]
        })]
      })
    }

    function SO(cB) {
      let {
        invites: Bc,
        actions: nc,
        full: Vc,
        maxIslands: Ic,
        waitSeconds: rB,
        focus: uc,
        focused: sc,
        OV: Mc,
        declined: Pc,
        t: qB
      } = cB;
      const Oc = Cu();
      return (0, tu.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, tu.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: qB(`${eO}islandsInvitesTitle`)
        }), (0, tu.jsx)("ul", {
          className: "Baf2IslandCards",
          children: Bc.map((cB => {
            const Bc = cB.baf2InviteId;
            return (0, tu.jsx)(tT, {
              invite: cB,
              actions: nc,
              full: Vc,
              maxIslands: Ic,
              waitSeconds: rB,
              focus: uc === Bc,
              focused: sc,
              join: () => {
                Oc.send(`baf2coopaccept ${Bc}`), Mc()
              },
              decline: () => {
                Oc.send(`baf2coopdecline ${Bc}`), Pc(Bc)
              },
              t: qB
            }, Bc)
          }))
        })]
      })
    }
    const yT = "buildAFactory2Game:";

    function zT(cB) {
      let {
        cards: Bc,
        activeName: nc,
        canStart: Ic,
        waitSeconds: rB,
        OV: uc,
        t: sc
      } = cB;
      const Mc = Cu(),
        [Pc, qB] = (0, Vc.useState)(!1),
        [Oc, Tc] = (0, Vc.useState)(""),
        fc = (0, Vc.useRef)(null);
      WP(Pc, fc), (0, Vc.useEffect)((() => {
        var cB;
        Pc && (null === (cB = fc.current) || void 0 === cB || cB.focus())
      }), [Pc]);
      const mB = mq(Bc),
        ec = TP(Oc),
        tB = fP(ec),
        Sc = () => {
          Ic && !tB && (Mc.send("" === ec || ec === mB ? Kc : `${Kc} ${ec}`), uc())
        },
        yB = () => {
          var cB;
          qB(!1), null === (cB = fc.current) || void 0 === cB || cB.focus()
        };
      return (0, tu.jsxs)("li", {
        ref: fc,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Pc ? EP(yB) : {},
        children: [(0, tu.jsx)("strong", {
          className: "Baf2IslandName",
          children: sc(`${yT}islandsNewTitle`)
        }), !Pc && (0, tu.jsx)("p", {
          className: "Baf2IslandStats",
          children: sc(`${yT}islandsNewNote`)
        }), Pc && (0, tu.jsxs)(tu.Fragment, {
          children: [(0, tu.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: LP(sc, `${yT}islandsNewConfirm`, {
              name: nc
            })
          }), (0, tu.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [sc(`${yT}islandsNewNameLabel`), (0, tu.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Oc,
              placeholder: mB,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: oP,
              onChange: cB => {
                Tc(cB.target.value)
              },
              ...NP(Sc, yB)
            })]
          }), tB && (0, tu.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: sc(`${yT}islandsNameReserved`)
          })]
        }), (0, tu.jsxs)("div", {
          className: eI()("Baf2IslandButtons", {
            Stacked: Pc
          }),
          children: [(0, tu.jsx)(fu.u, {
            disabled: !Ic || Pc && tB,
            onClick: () => {
              if (!Pc) return Tc(mB), void qB(!0);
              Sc()
            },
            children: rB > 0 ? sc(`${yT}islandsNewIn`, {
              time: Tr(sc, rB)
            }) : sc(Pc ? `${yT}islandsNewConfirmButton` : `${yT}islandsNew`)
          }), Pc && (0, tu.jsx)(fu.d, {
            onClick: yB,
            children: sc(`${yT}islandsCancel`)
          })]
        })]
      })
    }

    function pO(cB) {
      var Bc, nc;
      let {
        message: Ic,
        arrivedAtMs: rB,
        close: uc,
        OV: sc,
        openSocial: Mc
      } = cB;
      const Pc = Cu(),
        {
          t: qB
        } = (0, zr.x)(),
        Oc = XP(1e3),
        [Tc, fc] = (0, Vc.useState)(null),
        [mB, ec] = (0, Vc.useState)(new Map),
        [tB, Sc] = (0, Vc.useState)(new Set),
        yB = Ic.baf2IslandCards,
        zB = function(cB, Bc, nc, Vc) {
          return (null !== cB && void 0 !== cB ? cB : []).filter((cB => Bc + cB.baf2InviteLeftMs > nc && !Vc.has(cB.baf2InviteId)))
        }(Ic.baf2IslandsInvites, rB, Oc, tB),
        pc = zB.map((cB => cB.baf2InviteId)).join(" "),
        hc = (0, Vc.useRef)(null),
        aB = wP(hc);
      (0, Vc.useEffect)((() => {
        var cB, Bc;
        null !== (cB = hc.current) && void 0 !== cB && cB.contains(document.activeElement) || (null === (Bc = hc.current) || void 0 === Bc || Bc.focus())
      }), [Ic, pc]), (0, Vc.useEffect)((() => {
        ec((cB => function(cB, Bc, nc, Vc) {
          const Ic = new Map;
          for (const rB of Bc) {
            const Bc = cB.get(rB.baf2IslandId);
            Bc && (void 0 !== Bc.untilGone || Vc < Bc.answer) && hP(Bc, rB, nc) && Ic.set(rB.baf2IslandId, Bc)
          }
          return Ic.size === cB.size ? cB : Ic
        }(cB, Ic.baf2IslandCards, Date.now(), Ic.baf2IslandsAnswered)))
      }), [Ic]);
      const lc = OP(rB, Ic.baf2IslandsWaitMs, Oc),
        Yc = Ic.baf2IslandsBlocked,
        Lc = yq(Yc, lc),
        gB = function(cB, Bc) {
          const nc = yq(cB, 0);
          return {
            switch: nc.switch ? Bc : 0,
            change: nc.change ? Bc : 0
          }
        }(Yc, lc),
        Uc = yB.length >= Ic.baf2IslandsMax,
        bB = yB.length > 0,
        Zc = function(cB, Bc, nc) {
          return cB + Math.max(0, nc - Bc)
        }(Ic.baf2IslandsNowMs, rB, Oc),
        Qc = null !== (Bc = null === (nc = yB.find((cB => cB.baf2IslandActive))) || void 0 === nc ? void 0 : nc.baf2IslandName) && void 0 !== Bc ? Bc : "",
        Cc = function(cB) {
          const Bc = cB.filter(bq).length;
          return Bc <= 1 && Bc < cB.length
        }(yB),
        vB = !0 === Ic.baf2IslandsCoop,
        Dc = function(cB, Bc) {
          const nc = cB.find((cB => cB.baf2IslandActive)),
            Vc = null === nc || void 0 === nc ? void 0 : nc.baf2IslandCoop;
          return nc && "member" === (null === Vc || void 0 === Vc ? void 0 : Vc.baf2CoopRole) ? {
            key: `${MP}islandsKeepOwnMember`,
            names: {
              owner: Vc.baf2CoopOwner,
              island: nc.baf2IslandName
            }
          } : {
            key: Bc ? `${MP}islandsKeepOwn` : `${MP}islandsKeepOwnSolo`
          }
        }(yB, vB),
        [Nc, Ec] = (0, Vc.useState)(null);
      (0, Vc.useEffect)((() => {
        void 0 !== Ic.baf2IslandsFocusInvite && Ec(Ic.baf2IslandsFocusInvite)
      }), [Ic]);
      const oc = (0, Vc.useCallback)((() => {
          Ec(null)
        }), []),
        Wc = Tc ? yB.find((cB => cB.baf2IslandId === Tc.id)) : void 0,
        wc = Tc && Wc && "hidden" !== ZP(Wc, Lc, Cc, Uc, vB)[Tc.mode] ? Tc : null;
      return (0, tu.jsx)(Tu.b, {
        close: uc,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, tu.jsxs)("section", {
          ref: hc,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: aB ? {
            marginTop: `${aB.marginTop}px`,
            maxHeight: `${aB.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsxs)("div", {
              children: [(0, tu.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: qB(`${yT}islandsTitle`)
              }), bB && (0, tu.jsx)("p", {
                children: qB(`${yT}islandsSubtitle`, {
                  count: String(yB.length),
                  max: String(Ic.baf2IslandsMax)
                })
              })]
            }), (0, tu.jsx)(fu.k, {
              ariaLabel: qB(`${yT}islandsClose`),
              onClick: uc
            })]
          }), (0, tu.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== Yc && (0, tu.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: LP(qB, eP(Yc, tq(yB)), {
                island: Qc
              })
            }), bB && zB.length > 0 && (0, tu.jsx)(SO, {
              invites: zB,
              actions: Lc,
              full: Uc,
              maxIslands: Ic.baf2IslandsMax,
              waitSeconds: gB.switch,
              focus: Nc,
              focused: oc,
              OV: sc,
              declined: cB => {
                Sc((Bc => new Set(Bc).add(cB)))
              },
              t: qB
            }), bB && (0, tu.jsxs)(tu.Fragment, {
              children: [Uc && (0, tu.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: qB(`${yT}islandsFull`, {
                  max: String(Ic.baf2IslandsMax)
                })
              }), (0, tu.jsx)("p", {
                className: "Baf2IslandsNote",
                children: LP(qB, Dc.key, Dc.names)
              }), (0, tu.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [yB.map((cB => {
                  const Bc = cB.baf2IslandId;
                  return (0, tu.jsx)(mT, {
                    card: cB,
                    keepOwn: Cc,
                    coopOn: vB,
                    openSocial: Mc,
                    blocked: Yc,
                    maxIslands: Ic.baf2IslandsMax,
                    serverNowMs: Zc,
                    nowMs: Oc,
                    actions: Lc,
                    full: Uc,
                    waits: gB,
                    answered: Ic.baf2IslandsAnswered,
                    mode: (null === wc || void 0 === wc ? void 0 : wc.id) === Bc ? wc.mode : null,
                    setMode: cB => {
                      fc(null === cB ? null : {
                        id: Bc,
                        mode: cB
                      })
                    },
                    pending: hP(mB.get(Bc), cB, Oc),
                    onSent: (nc, Vc) => {
                      ec((Ic => {
                        const rB = {
                          atMs: Date.now(),
                          from: cB.baf2IslandName,
                          answer: nc
                        };
                        return new Map(Ic).set(Bc, Vc ? {
                          ...rB,
                          untilGone: Vc
                        } : rB)
                      }))
                    },
                    OV: sc,
                    switchTo: () => {
                      Pc.send(`baf2islandswitch ${Bc}`), sc()
                    },
                    t: qB
                  }, Bc)
                })), !Uc && (0, tu.jsx)(zT, {
                  cards: yB,
                  activeName: Qc,
                  canStart: Lc.change,
                  waitSeconds: gB.change,
                  OV: sc,
                  t: qB
                })]
              })]
            })]
          })]
        })
      })
    }
    const hO = ["all", "recent", "gr", "bars", "parts", "nuclear", "farm", "other"],
      aT = new Set([...Object.keys(kn), ...[...LB.Press.recipes, ...LB["Wire Mill"].recipes].map((cB => cB.output))]),
      lO = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      YO = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      LO = / Bar$|Alloy$/,
      gT = /Porkchop|Beef|Mutton|Venison|Steak/,
      UO = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;

    function bT(cB) {
      let {
        item: Bc,
        name: nc,
        amount: Vc,
        selected: Ic,
        small: rB,
        onPick: uc
      } = cB;
      return (0, tu.jsxs)("button", {
        type: "button",
        className: eI()("Baf2TermTile", {
          On: Ic,
          Small: rB
        }),
        "aria-label": `${nc}: ${Vc}`,
        "aria-pressed": Ic,
        onClick: uc,
        children: [(0, tu.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, tu.jsx)(hI.d, {
            itemName: Bc,
            amount: 0
          })
        }), (0, tu.jsx)("span", {
          className: "Baf2TermCount",
          children: qu(Vc, 1e4)
        }), !rB && (0, tu.jsx)("span", {
          className: "Baf2TermName",
          children: nc
        })]
      })
    }

    function ZO(cB) {
      let {
        store: Bc,
        close: nc,
        send: Ic
      } = cB;
      const {
        t: rB
      } = (0, zr.x)(), {
        isTouchScreen: uc
      } = (0, TI.j)(["isTouchScreen"]);
      ! function(cB) {
        const [Bc, nc] = (0, Vc.useState)(cB.version);
        (0, Vc.useEffect)((() => (nc(cB.version), cB.subscribe((() => {
          nc(cB.version)
        })))), [cB])
      }(Bc);
      const [sc, Mc] = (0, Vc.useState)("all"), [Pc, qB] = (0, Vc.useState)(!1), [Oc, Tc] = (0, Vc.useState)(""), [fc, mB] = (0, Vc.useState)(""), [ec, tB] = (0, Vc.useState)(null), [Sc, yB, zB] = function() {
        const cB = (0, Vc.useRef)(null),
          [Bc, nc] = (0, Vc.useState)(!1),
          Ic = () => {
            const Bc = cB.current;
            nc(null !== Bc && Bc.scrollLeft + Bc.clientWidth < Bc.scrollWidth - 1)
          };
        return (0, Vc.useEffect)(Ic), (0, Vc.useEffect)((() => {
          const Bc = cB.current;
          if (!Bc) return;
          const nc = new ResizeObserver(Ic);
          return nc.observe(Bc), () => {
            nc.disconnect()
          }
        }), []), [cB, Bc, Ic]
      }(), pc = (0, Vc.useMemo)((() => new Map), [rB]), hc = cB => {
        let Bc = pc.get(cB);
        return void 0 === Bc && (Bc = function(cB, Bc) {
          const nc = /^(.+) \((.+)\)$/.exec(cB);
          return nc ? Bc(nc[2], nc[1]) : cB
        }(KI(rB, cB), ((cB, Bc) => rB("buildAFactory2Game:terminalTileKind", {
          kind: cB,
          base: Bc
        }))), pc.set(cB, Bc)), Bc
      }, aB = Bc.isReadOnly(), lc = Bc.recent(), Yc = Bc.items(), Lc = fc.trim().toLowerCase(), gB = ("recent" === sc ? lc : Yc).filter((cB => {
        const Bc = hc(cB);
        return ("all" === sc || "recent" === sc || function(cB) {
          return Vr(cB) ? "farm" : lO.test(cB) ? "nuclear" : LO.test(cB) ? "bars" : gT.test(cB) ? "farm" : YO.test(cB) ? "gr" : aT.has(cB) ? "parts" : UO.test(cB) ? "farm" : "other"
        }(cB) === sc) && ("" === Lc || Bc.toLowerCase().includes(Lc)) && ("" === Oc || Bc.toUpperCase().startsWith(Oc))
      })), Uc = new Set(Yc.map((cB => hc(cB).charAt(0).toUpperCase()))), bB = "recent" !== sc && lc.length > 0, Zc = function(cB, Bc) {
        return null !== cB && Bc.includes(cB) ? cB : null
      }(ec, bB ? [...gB, ...lc] : gB), Qc = null === Zc ? 0 : Bc.amount(Zc), Cc = cB => {
        tB(Zc === cB ? null : cB)
      }, vB = cB => {
        null !== Zc && Qc > 0 && Ic(Bc.take(cB, Zc))
      }, Dc = "" !== Oc ? rB("buildAFactory2Game:terminalEmptyLetter", {
        letter: Oc
      }) : "" !== Lc ? rB("buildAFactory2Game:terminalEmptySearch", {
        query: fc
      }) : rB("buildAFactory2Game:terminalEmpty");
      return (0, tu.jsx)(Tu.b, {
        close: nc,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, tu.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsxs)("div", {
              children: [(0, tu.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: rB(Bc.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, tu.jsx)("p", {
                children: rB("buildAFactory2Game:terminalSubtitle", {
                  count: String(Bc.siloCount())
                })
              })]
            }), (0, tu.jsx)(fu.k, {
              onClick: nc
            })]
          }), (0, tu.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, tu.jsxs)("div", {
              className: "Baf2TermTools",
              children: [(0, tu.jsx)("div", {
                ref: Sc,
                className: eI()("Baf2TermChips", {
                  MoreRight: yB
                }),
                onScroll: zB,
                children: Pc ? (0, tu.jsxs)(tu.Fragment, {
                  children: [(0, tu.jsx)("button", {
                    type: "button",
                    "aria-label": rB("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      qB(!1), Tc("")
                    },
                    children: "\u2190"
                  }), [...Uc].sort().map((cB => (0, tu.jsx)("button", {
                    type: "button",
                    className: eI()({
                      On: Oc === cB
                    }),
                    onClick: () => {
                      Tc(Oc === cB ? "" : cB)
                    },
                    children: cB
                  }, cB)))]
                }) : (0, tu.jsxs)(tu.Fragment, {
                  children: [(0, tu.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      qB(!0)
                    },
                    children: rB("buildAFactory2Game:terminalLetters")
                  }), hO.map((cB => (0, tu.jsx)("button", {
                    type: "button",
                    className: eI()({
                      On: sc === cB
                    }),
                    onClick: () => {
                      Mc(cB)
                    },
                    children: rB(`buildAFactory2Game:terminalChip_${cB}`)
                  }, cB)))]
                })
              }), !uc && (0, tu.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: fc,
                placeholder: rB("buildAFactory2Game:terminalSearch"),
                "aria-label": rB("buildAFactory2Game:terminalSearch"),
                onChange: cB => {
                  mB(cB.target.value)
                },
                onKeyDown: cB => {
                  cB.stopPropagation()
                }
              }), (0, tu.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": rB("buildAFactory2Game:terminalResort"),
                title: rB("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  Bc.resort()
                },
                children: "\u21c5"
              })]
            }), bB && (0, tu.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, tu.jsx)("span", {
                children: rB("buildAFactory2Game:terminalChip_recent")
              }), lc.map((cB => (0, tu.jsx)(bT, {
                item: cB,
                name: hc(cB),
                amount: Bc.amount(cB),
                selected: Zc === cB,
                small: !0,
                onPick: () => {
                  Cc(cB)
                }
              }, cB)))]
            }), (0, tu.jsx)("div", {
              className: "Baf2TermTiles",
              children: gB.length > 0 ? gB.map((cB => (0, tu.jsx)(bT, {
                item: cB,
                name: hc(cB),
                amount: Bc.amount(cB),
                selected: Zc === cB,
                onPick: () => {
                  Cc(cB)
                }
              }, cB))) : (0, tu.jsx)("p", {
                className: "Baf2TermEmpty",
                children: Dc
              })
            }), (0, tu.jsxs)("div", {
              className: "Baf2TermActions",
              children: [(0, tu.jsx)("span", {
                className: "Baf2TermPicked",
                children: aB ? (0, tu.jsxs)(tu.Fragment, {
                  children: [null !== Zc && Qc > 0 ? hc(Zc) : rB("buildAFactory2Game:terminalVisiting"), (0, tu.jsx)("small", {
                    children: rB("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Zc && Qc > 0 ? (0, tu.jsxs)(tu.Fragment, {
                  children: [hc(Zc), (0, tu.jsx)("small", {
                    children: rB("buildAFactory2Game:terminalStored", {
                      amount: Qc.toLocaleString()
                    })
                  })]
                }) : rB("buildAFactory2Game:terminalPick")
              }), !aB && (0, tu.jsxs)(tu.Fragment, {
                children: [(0, tu.jsx)(fu.d, {
                  className: "Baf2TermTake",
                  disabled: 0 === Qc,
                  onClick: () => {
                    vB("one")
                  },
                  children: rB("buildAFactory2Game:terminalTakeOne")
                }), (0, tu.jsx)(fu.d, {
                  className: "Baf2TermTake",
                  disabled: 0 === Qc,
                  onClick: () => {
                    vB("stack")
                  },
                  children: rB("buildAFactory2Game:terminalTakeStack", {
                    amount: String(99)
                  })
                }), (0, tu.jsx)(fu.n, {
                  className: "Baf2TermTake",
                  disabled: 0 === Qc,
                  onClick: () => {
                    vB("fill")
                  },
                  children: rB("buildAFactory2Game:terminalFill")
                })]
              })]
            })]
          })]
        })
      })
    }

    function QO(cB) {
      let {
        kind: Bc,
        icon: nc,
        label: Vc,
        number: Ic,
        preview: rB,
        note: uc,
        tone: sc = null,
        share: Mc,
        onExplain: Pc
      } = cB;
      return (0, tu.jsxs)("button", {
        type: "button",
        className: eI()("NxLane", Bc, {
          Warn: "warn" === sc,
          Danger: "danger" === sc
        }),
        onClick: Pc,
        children: [(0, tu.jsxs)("span", {
          className: "NxLaneHead",
          children: [nc, (0, tu.jsx)("span", {
            className: "NxLaneLabel",
            children: Vc
          })]
        }), (0, tu.jsxs)("span", {
          className: "NxLaneNum",
          children: [Ic, rB && (0, tu.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", rB]
          })]
        }), (0, tu.jsx)("span", {
          className: "NxLaneNote",
          children: uc
        }), void 0 !== Mc && (0, tu.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Mc)) + "%"
          }
        })]
      })
    }

    function CO(cB) {
      let {
        kind: Bc,
        step: nc,
        short: Vc,
        planned: Ic
      } = cB;
      return (0, tu.jsx)("i", {
        className: eI()("NxPipe", Bc, `Step${nc}`, {
          Short: Vc,
          Planned: Ic
        }),
        "aria-hidden": "true"
      })
    }

    function vT(cB) {
      let {
        max: Bc,
        bands: nc,
        ticks: Vc,
        now: Ic,
        settle: rB,
        settleTone: uc,
        onExplain: sc
      } = cB;
      const Mc = cB => Math.max(0, Math.min(Bc, cB)) / Bc * 100 + "%";
      let Pc = 0;
      return (0, tu.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: sc,
        children: [(0, tu.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [nc.map((cB => {
            const Bc = {
              bottom: Mc(Pc),
              height: `calc(${Mc(cB.upTo)} - ${Mc(Pc)})`
            };
            return Pc = cB.upTo, (0, tu.jsx)("i", {
              className: eI()("NxGaugeBand", cB.kind),
              style: Bc
            }, cB.kind)
          })), null !== Ic && (0, tu.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Mc(Ic)
            }
          }), void 0 !== rB && null !== rB && (0, tu.jsx)("i", {
            className: eI()("NxGaugeSettle", {
              Bad: "bad" === uc
            }),
            style: {
              bottom: Mc(rB)
            }
          })]
        }), (0, tu.jsx)("span", {
          className: "NxGaugeTicks",
          children: Vc.map((cB => (0, tu.jsx)("small", {
            style: {
              bottom: Mc(cB)
            },
            children: cB
          }, cB)))
        })]
      })
    }

    function DO(cB) {
      const [Bc, nc] = (0, Vc.useState)(null), [Ic, rB] = (0, Vc.useState)((() => {
        try {
          return null === window.localStorage.getItem(cB)
        } catch {
          return !1
        }
      })), uc = (0, Vc.useRef)(null);
      (0, Vc.useEffect)((() => () => {
        null !== uc.current && clearTimeout(uc.current)
      }), []);
      const sc = (0, Vc.useCallback)((Bc => {
          nc(Bc), rB(!1);
          try {
            window.localStorage.setItem(cB, "1")
          } catch {}
          null !== uc.current && clearTimeout(uc.current), uc.current = setTimeout((() => {
            uc.current = null, nc(null)
          }), 5e3)
        }), [cB]),
        Mc = (0, Vc.useCallback)(((Bc, nc) => {
          const Vc = `${cB}:${Bc}`;
          try {
            if (null !== window.localStorage.getItem(Vc)) return;
            window.localStorage.setItem(Vc, "1")
          } catch {
            return
          }
          sc(nc)
        }), [sc, cB]);
      return {
        explained: Bc,
        hinting: Ic,
        explain: sc,
        explainOnce: Mc
      }
    }

    function NO(cB) {
      let {
        text: Bc,
        tone: nc,
        explained: Vc
      } = cB;
      return (0, tu.jsxs)("p", {
        className: eI()("NxStatus", null === Vc ? nc : "Explain"),
        "aria-live": "polite",
        children: [null !== Vc && (0, tu.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Vc && void 0 !== Vc ? Vc : Bc]
      })
    }
    const EO = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function oO(cB, Bc) {
      const nc = Number(cB[Bc]);
      return 1 === nc || 2 === nc || 3 === nc ? nc : 0
    }

    function WO(cB) {
      return !!fM("reactor", cB.baf2RxNeed) || void 0 !== cB.baf2RxLayout && cB.baf2RxNeed.some((cB => {
        let [Bc, nc] = cB;
        return nc > 0 && EO.includes(Bc)
      }))
    }
    const wO = "buildAFactory2Game:";

    function kT(cB) {
      let {
        status: Bc,
        store: nc,
        busy: Vc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)();
      return function(cB) {
        return 0 !== (cB.baf2RxFlags & MB) && (!cB.baf2RxFormed || void 0 !== cB.baf2RxLayout)
      }(Bc) ? (0, tu.jsx)(fu.n, {
        disabled: !WO(Bc) || Vc,
        onClick: () => {
          nc.tap("fill", (() => {
            nc.send("fill")
          }))
        },
        children: Ic(void 0 !== Bc.baf2RxLayout ? `${wO}rxFillLayout` : `${wO}rxFill`)
      }) : null
    }

    function XO(cB) {
      let {
        status: Bc,
        store: nc,
        readOnly: Ic,
        bare: rB = !1
      } = cB;
      const {
        t: uc
      } = (0, zr.x)(), sc = Bc.baf2RxLayout, [Mc, Pc, qB] = Bc.baf2RxDims, Oc = (0, Vc.useMemo)((() => {
        if (void 0 === sc) return 0;
        const cB = Uint8Array.from(sc, ((cB, Bc) => oO(sc, Bc)));
        return Jsc([Mc - 2, Pc - 2, qB - 2], cB).max
      }), [sc, Mc, Pc, qB]);
      return void 0 === sc ? null : (0, tu.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!rB && (0, tu.jsx)("span", {
          className: "Baf2RxHint",
          children: uc(`${wO}rxLayoutLine`, {
            amount: pM(Oc)
          })
        }), !Ic && (0, tu.jsx)(fu.d, {
          onClick: () => {
            nc.send("layout", 0)
          },
          children: uc(`${wO}rxLayoutHide`)
        })]
      })
    }
    const HO = "buildAFactory2Game:",
      FO = {
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

    function JO(cB) {
      let {
        id: Bc,
        title: nc,
        body: Vc,
        bodyParams: Ic,
        yes: rB,
        cancel: uc,
        confirm: sc
      } = cB;
      const {
        t: Mc
      } = (0, zr.x)();
      return (0, tu.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": Bc,
        children: [(0, tu.jsx)("h3", {
          id: Bc,
          children: Mc(nc)
        }), (0, tu.jsx)("p", {
          children: Mc(Vc, Ic)
        }), (0, tu.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, tu.jsx)(fu.g, {
            onClick: uc,
            children: Mc(`${HO}rxCancel`)
          }), (0, tu.jsx)(fu.L, {
            onClick: sc,
            children: Mc(rB)
          })]
        })]
      })
    }

    function jT(cB) {
      const [Bc, nc] = (0, Vc.useState)((() => cB.get()));
      return (0, Vc.useEffect)((() => (nc(cB.get()), cB.subscribe((() => {
        nc(cB.get())
      })))), [cB]), Bc
    }

    function RO(cB) {
      let {
        kind: Bc,
        cap: nc,
        busy: Ic = !1,
        whyNot: rB = null,
        apart: uc
      } = cB;
      const {
        t: sc
      } = (0, zr.x)(), [Mc, Pc] = (0, Vc.useState)(!1), qB = null !== rB, Oc = (0, Vc.useRef)(null);
      if ((0, Vc.useEffect)((() => {
          qB && Pc(!1)
        }), [qB]), (0, Vc.useLayoutEffect)((() => {
          var cB;
          const Bc = null === (cB = Oc.current) || void 0 === cB ? void 0 : cB.firstElementChild;
          qB ? null === Bc || void 0 === Bc || Bc.setAttribute("aria-disabled", "true") : Ic || null === Bc || void 0 === Bc || Bc.removeAttribute("aria-disabled")
        })), !Mc || qB) return (0, tu.jsx)("span", {
        ref: Oc,
        className: "Baf2RxApartWrap",
        children: (0, tu.jsx)(fu.g, {
          disabled: Ic,
          className: eI()({
            Baf2RxNotYet: qB
          }),
          onClick: () => {
            rB ? rB() : Pc(!0)
          },
          children: sc(`${HO}rxApart`)
        })
      });
      const Tc = "battery" === Bc,
        fc = void 0 === nc ? `${HO}batApartConfirmBodyPlan` : `${HO}batApartConfirmBody`;
      return (0, tu.jsx)(JO, {
        id: `baf2ApartTitle_${Bc}`,
        title: Tc ? `${HO}batApartConfirmTitle` : `${HO}rxApartConfirmTitle`,
        body: Tc ? fc : `${HO}rxApartConfirmBody`,
        bodyParams: void 0 === nc ? void 0 : {
          cap: nc
        },
        yes: `${HO}rxApart`,
        cancel: () => {
          Pc(!1)
        },
        confirm: () => {
          Pc(!1), uc()
        }
      })
    }

    function iT(cB) {
      let {
        mood: Bc,
        big: nc
      } = cB;
      const Vc = FO[Bc],
        Ic = [];
      return Vc.rows.forEach(((cB, Bc) => {
        for (let nc = 0; nc < cB.length; nc++) "." !== cB[nc] && Ic.push((0, tu.jsx)("rect", {
          x: nc + 1,
          y: Bc + 1,
          width: 1,
          height: 1,
          fill: "w" === cB[nc] ? "#8fd3ff" : Vc.colour
        }, `${nc},${Bc}`))
      })), (0, tu.jsxs)("svg", {
        className: eI()("Baf2RxFace", {
          Big: nc,
          Alarm: "alarm" === Bc
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, tu.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, tu.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Ic]
      })
    }

    function KO(cB) {
      return Pr(cB, "+").replace("+", "")
    }

    function xT(cB) {
      let {
        kind: Bc,
        dims: nc,
        cap: Vc,
        disabled: Ic,
        compact: rB,
        resize: uc
      } = cB;
      const {
        t: sc
      } = (0, zr.x)(), {
        min: Mc,
        max: Pc
      } = Cn(Bc), qB = Math.min(Vc, Pc), Oc = [`${HO}rxWide`, `${HO}rxTall`, `${HO}rxDeep`], Tc = {
        w: String(nc[0]),
        h: String(nc[1]),
        d: String(nc[2]),
        blocks: String(zP(Bc, nc))
      };
      return (0, tu.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, tu.jsx)("div", {
          className: "Baf2RxSteppers",
          children: nc.map(((cB, Bc) => {
            const rB = Vc => {
                const Ic = [nc[0], nc[1], nc[2]];
                Ic[Bc] = cB + Vc, uc(Ic)
              },
              Tc = cB >= qB;
            return (0, tu.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, tu.jsx)("button", {
                type: "button",
                "aria-label": sc(`${HO}rxSmaller`),
                disabled: Ic || cB <= Mc,
                onClick: () => {
                  rB(-1)
                },
                children: "\u2212"
              }), (0, tu.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [cB, (0, tu.jsx)("small", {
                  children: sc(Oc[Bc])
                })]
              }), (0, tu.jsx)("button", {
                type: "button",
                "aria-label": sc(`${HO}rxBigger`),
                disabled: Ic || Tc,
                onClick: () => {
                  rB(1)
                },
                children: Tc && Vc < Pc ? "\ud83d\udd12" : "+"
              })]
            }, Oc[Bc])
          }))
        }), !rB && (0, tu.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === Bc ? sc(`${HO}rxSizeLine`, {
            ...Tc,
            water: String(yP(nc))
          }) : sc(`${HO}batSizeLine`, Tc)
        })]
      })
    }

    function dO(cB) {
      let {
        on: Bc,
        label: nc,
        disabled: Vc,
        locked: Ic,
        pending: rB,
        toggle: uc
      } = cB;
      return (0, tu.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": Bc,
        disabled: Vc,
        "aria-disabled": Ic || void 0,
        className: eI()("Baf2RxSwitch", {
          On: Bc,
          Locked: Ic,
          Pending: rB
        }),
        onClick: uc,
        children: [(0, tu.jsx)("span", {
          className: "Baf2RxKnob"
        }), nc]
      })
    }
    const AO = "buildAFactory2Game:",
      GO = .95;

    function cf(cB, Bc) {
      return 0 !== (cB.baf2RxFlags & Bc)
    }

    function BT(cB) {
      return "cryo" === cB ? Ac.n : Ac.p
    }

    function nT(cB) {
      var Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc;
      return cB.baf2RxCryo ? {
        yV: "cryo",
        usePerS: null !== (Ic = cB.baf2RxCryoUse) && void 0 !== Ic ? Ic : 0,
        needPerS: null !== (rB = cB.baf2RxCryoNeed) && void 0 !== rB ? rB : 0,
        inPerS: null !== (uc = cB.baf2RxCryoIn) && void 0 !== uc ? uc : 0,
        stored: null !== (sc = cB.baf2RxCryoStored) && void 0 !== sc ? sc : 0,
        makersShort: null !== (Mc = cB.baf2RxMixersShort) && void 0 !== Mc ? Mc : 0,
        waterBeside: null !== (Pc = cB.baf2RxWaterUse) && void 0 !== Pc ? Pc : 0,
        pct: cB.baf2RxWater
      } : {
        yV: "water",
        usePerS: null !== (Bc = cB.baf2RxWaterUse) && void 0 !== Bc ? Bc : 0,
        needPerS: null !== (nc = cB.baf2RxWaterNeed) && void 0 !== nc ? nc : 0,
        inPerS: cB.baf2RxWaterIn,
        stored: cB.baf2RxWaterStored,
        makersShort: null !== (Vc = cB.baf2RxCondensersShort) && void 0 !== Vc ? Vc : 0,
        waterBeside: 0,
        pct: cB.baf2RxWater
      }
    }

    function VT(cB) {
      const Bc = "running" === cB.baf2RxState || "idle" === cB.baf2RxState;
      return cB.baf2RxFormed && cB.baf2RxTarget !== cB.baf2RxThrottle && Bc ? IT(cB, cB.baf2RxTarget) : null
    }

    function IT(cB, Bc) {
      const [nc, Vc, Ic, , , , rB, , uc] = cB.baf2RxStats, sc = cf(cB, uB), Mc = nT(cB), Pc = Mc.pct / 100, {
        gen: qB,
        out: Oc,
        load: Tc
      } = function(cB, Bc, nc, Vc) {
        const Ic = nc ? os : 1,
          rB = Math.min(cB.fuelHeat * Ic * Math.max(0, Math.min(1, Bc)), cB.size * Ic);
        return {
          gen: rB,
          out: rB,
          load: nM(rB, cB.cooling, Vc)
        }
      }({
        fuelHeat: nc,
        cooling: Vc,
        size: Ic
      }, Bc / 100, sc, Pc), fc = IM(rB || Fs(...cB.baf2RxDims)), mB = cB.baf2RxHeat, ec = Math.abs(Tc - mB), tB = function(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ac.p;
        const rB = nc ? os : 1,
          uc = Math.min(cB.fuelHeat * rB * Bc / 100, cB.size * rB),
          sc = uc,
          Mc = cB.fuelHeat * rB,
          Pc = cB.cooling * BM(Vc.pct / 100),
          qB = Mc > 0 && Pc < cB.size * rB ? Math.floor(100 * Pc / Mc) : 100,
          Oc = uc * Ic - Vc.inPerS;
        return {
          out: sc,
          hotAbove: qB >= 100 ? null : Math.max(0, qB),
          waterSecs: Vc.pct >= 100 && Oc > 1e-6 ? Math.max(0, Vc.stored) / Oc : null
        }
      }({
        fuelHeat: nc,
        cooling: Vc,
        size: Ic
      }, Bc, sc, {
        pct: Mc.pct,
        inPerS: Mc.inPerS,
        stored: Mc.stored
      }, BT(Mc.yV));
      return {
        pct: Bc,
        out: Oc,
        coolPerS: qB * BT(Mc.yV),
        pelletsPerMin: uc > 0 ? Oc / uc * 60 : 0,
        settle: Tc,
        settleS: ec > 2 ? fc * Math.log(ec / 2) : 0,
        overheatS: Tc > 100 && mB < 100 ? fc * Math.log((Tc - mB) / (Tc - 100)) : null,
        hotAbove: tB.hotAbove,
        coolantSecs: tB.waterSecs
      }
    }

    function rf(cB) {
      return cB.baf2RxThrottle <= 0 && "running" !== cB.baf2RxState ? 0 : IT(cB, cB.baf2RxTarget).pelletsPerMin / 60
    }

    function uT(cB, Bc) {
      if (cB <= 0 || Bc <= 0) return 0;
      const nc = cB / Bc;
      return nc < .25 ? 1 : nc < .5 ? 2 : nc < .8 ? 3 : 4
    }

    function sT(cB, Bc) {
      const nc = {};
      for (const [Vc, Ic] of Object.entries(Bc.params)) nc[Vc] = "time" === Vc ? Tr(cB, Ic) : "amount" === Vc ? pM(Ic) : String(Math.round(Ic));
      return cB(Bc.key, nc)
    }

    function MT(cB, Bc) {
      return {
        key: `${AO}${cB}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: Bc
      }
    }

    function PT(cB) {
      var Bc;
      const nc = cf(cB, uB),
        Vc = "running" === cB.baf2RxState,
        Ic = MM(cB),
        rB = cB.baf2RxHeat;
      var uc;
      if (Vc && rB > Ns) return {
        key: null !== (uc = Ic.fix) && void 0 !== uc ? uc : `${AO}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const sc = Vc ? IT(cB, cB.baf2RxTarget).coolantSecs : null,
        Mc = "cryo" === nT(cB).yV;
      if (null !== sc && sc >= 1 && sc <= 30) return MT(Mc ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Pc = Xs(Fs(...cB.baf2RxDims)).waste,
        qB = Vc ? mP(cB, Pc, rf(cB)).fullInS : null;
      if (null !== qB && qB <= 120 && cB.baf2RxWaste >= .5 * Pc) return MT("rxWarnWaste", "warn");
      if (null !== sc && sc >= 1) return MT(Mc ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: sc
      });
      const Oc = "noWater" === cB.baf2RxState && rB > Ns;
      if (cB.baf2RxDamage >= 1 && !Oc) return MT("rxDamagedHeals", "warn", {
        pct: cB.baf2RxDamage
      });
      if (cB.baf2RxCryoCut) return MT("rxFix_cryoCut", "warn");
      const Tc = nT(cB);
      if ("noWater" === cB.baf2RxState && "cryo" === Tc.yV) return MT("noWater" === cB.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const fc = Ic.fix === `${AO}rxFix_scramCool` || "idle" === cB.baf2RxState && cB.baf2RxTarget <= 0;
      if (fc && cB.baf2RxFuel <= 0) return MT("rxFix_noFuel", "warn");
      if (fc && cB.baf2RxWaterIn <= 0 && (null !== (Bc = cB.baf2RxCryoIn) && void 0 !== Bc ? Bc : 0) <= 0) return MT("rxFix_noWater", "warn");
      const mB = Ic.fix === `${AO}rxFix_scramCool` ? qP(cB) : null;
      if (null !== mB) return {
        key: mB.key,
        params: {
          amount: mB.amount
        },
        tone: "info"
      };
      if ("running" !== cB.baf2RxState && "idle" !== cB.baf2RxState && null !== Ic.fix) return {
        key: Ic.fix,
        params: {},
        tone: "scram" === cB.baf2RxState ? "info" : Oc ? "bad" : "warn"
      };
      var ec;
      if ("idle" === cB.baf2RxState && cB.baf2RxTarget <= 0) return {
        key: null !== (ec = Ic.fix) && void 0 !== ec ? ec : `${AO}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const tB = cB.baf2RxCryoStarved;
      if ("cryo" === Tc.yV && tB && Tc.needPerS > 0 && Tc.usePerS < GO * Tc.needPerS) return MT("noWater" === tB ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const Sc = "cryo" === Tc.yV,
        yB = Tc.needPerS > 0 && Tc.usePerS < GO * Tc.needPerS;
      if (Sc ? yB || Tc.makersShort > 0 && Tc.pct < 100 : Tc.pct < 100) {
        const Bc = Sc && yB ? Math.floor(100 * Tc.usePerS / Tc.needPerS) : Math.min(100, Tc.pct);
        if (Tc.makersShort > 0) {
          return MT(`${Sc?"rxCryoShortLine":"rxWaterShortLine"}${1===Tc.makersShort?"One":""}${!Sc&&cB.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: Bc,
            count: Tc.makersShort
          })
        }
        return MT(Sc ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: Bc
        })
      }
      const zB = function(cB) {
        const [Bc, nc, Vc] = cB.baf2RxStats, Ic = nT(cB), rB = VM({
          fuelHeat: Bc,
          cooling: nc,
          size: Vc
        }, "cryo" === Ic.yV ? Ac.g : 1, !0);
        return Math.max(0, rB * BT(Ic.yV) - Ic.inPerS)
      }(cB);
      if (nc && zB > 0) return MT("cryo" === Tc.yV ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(zB)
      });
      if (rB >= Gs) return MT("rxHotLine", "warn");
      const pc = IT(cB, cB.baf2RxTarget);
      var hc;
      if (null !== pc.overheatS) return MT("rxWillOverheat", "bad", {
        pct: cB.baf2RxTarget,
        time: pc.overheatS,
        safe: null !== (hc = pc.hotAbove) && void 0 !== hc ? hc : 100
      });
      if (Math.abs(pc.settle - rB) >= 3) return MT("rxSettling", "info", {
        pct: cB.baf2RxTarget,
        heat: Math.round(pc.settle),
        time: pc.settleS
      });
      const aB = qP(cB);
      if (null !== aB) return {
        key: aB.key,
        params: {
          amount: aB.amount
        },
        tone: "info"
      };
      const lc = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== Bc && ("running" !== Bc || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === cB.rods ? `${rP}rxLimitNoRods` : `${rP}rxLimit_${As(cB)}`
      }({
        rods: cB.baf2RxStats[3],
        ...PM(cB)
      }, cB.baf2RxState, cB.baf2RxOut >= GO * cB.baf2RxMaxNow, !1);
      if (lc === `${AO}rxLimit_size`) {
        const [Bc, , nc, Vc] = cB.baf2RxStats, Ic = Vc > 0 && Bc > 0 ? Math.ceil(nc / (Bc / Vc) - 1e-9) : Vc, rB = cB.baf2RxDims.every((cB => cB >= Cn("reactor").max));
        if (Ic < Vc) return MT(rB ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Ic,
          have: Vc
        });
        if (rB) return MT("rxLimit_sizeMax", "info")
      }
      return null !== lc ? {
        key: lc,
        params: {},
        tone: "info"
      } : MT("rxSteady", "ok", {
        pct: cB.baf2RxTarget
      })
    }

    function qf(cB) {
      var Bc;
      if (cB.melted) return MT("rxMeltedBody", "bad");
      if (-1 === cB.bad) return MT("rxFix_noRoom", "warn");
      if (cB.bad > 0) return MT(1 === cB.bad ? "rxBadOne" : "rxBad", "warn", {
        count: cB.bad
      });
      if (cB.left > 0) {
        const Bc = 1 === cB.left ? "One" : "";
        return MT(cB.canFill ? `rxPlanLeft${Bc}` : `rxPlanLeftNoFill${Bc}`, "info", {
          count: cB.left
        })
      }
      if (0 === cB.rods) return MT("rxLimitNoRods", "warn");
      const nc = null !== (Bc = cB.idle) && void 0 !== Bc ? Bc : 0;
      return nc > 0 ? MT(1 === nc ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: nc
      }) : MT("rxPlanReady", "ok")
    }

    function OT(cB) {
      return Math.floor(Math.max(0, cB[1] - 1) / 2)
    }

    function TT(cB) {
      if (cB >= Rs && cB < iM) {
        const Bc = cB - Rs;
        return {
          key: 0 === Bc ? `${AO}rxWhy_rodAlone` : 1 === Bc ? `${AO}rxWhy_rodOne` : `${AO}rxWhy_rod`,
          params: {
            count: String(Bc),
            heat: String(gM * (1 + Us * Bc))
          }
        }
      }
      return cB === iM ? {
        key: `${AO}rxWhy_channel`,
        params: {
          amount: String(Zs)
        }
      } : cB === Ks ? {
        key: `${AO}rxWhy_deadChannel`,
        params: {}
      } : cB === xM ? {
        key: `${AO}rxWhy_graphite`,
        params: {}
      } : {
        key: `${AO}rxWhy_core`,
        params: {}
      }
    }
    const fT = "buildAFactory2Game:";

    function mf(cB, Bc) {
      return 0 !== (cB.baf2RxFlags & Bc)
    }

    function eT(cB) {
      let {
        status: Bc,
        pending: nc,
        store: Vc,
        explain: Ic
      } = cB;
      const {
        t: rB
      } = (0, zr.x)(), uc = mf(Bc, rn), sc = Bc.baf2RxTarget, Mc = Bc.baf2RxThrottle, Pc = function(cB) {
        return {
          press: () => {
            cB.throttlePress()
          },
          drag: Bc => {
            cB.throttleDrag(Bc)
          },
          release: () => {
            cB.throttleRelease()
          }
        }
      }(Vc), qB = null === (Oc = IT(Bc, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Oc - 10),
        red: Oc
      };
      var Oc;
      return (0, tu.jsxs)("div", {
        className: eI()("Baf2RxThrottle", {
          Off: uc
        }),
        onClick: () => {
          uc && Ic(`${fT}rxWhy_startFirst`)
        },
        children: [(0, tu.jsx)("span", {
          className: "HideNarrow",
          children: rB(`${fT}rxThrottle`)
        }), (0, tu.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, tu.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: sc,
            disabled: uc,
            style: uc ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": rB(`${fT}rxThrottle`),
            onPointerDown: () => {
              Pc.press();
              const cB = () => {
                window.removeEventListener("pointerup", cB), window.removeEventListener("pointercancel", cB), Pc.release()
              };
              window.addEventListener("pointerup", cB), window.addEventListener("pointercancel", cB)
            },
            onKeyUp: Pc.release,
            onChange: cB => {
              Pc.drag(Number(cB.target.value))
            }
          }), (0, tu.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${qB.amber}%, #ffb020 ${qB.amber}% ${qB.red}%, #ff3b30 ${qB.red}%)`
            },
            "aria-hidden": "true"
          }), (0, tu.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Mc}% + ${8*(1-Mc/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, tu.jsxs)("b", {
          children: [`${sc}%`, (0, tu.jsx)("i", {
            className: eI()("Baf2RxPendingDot", {
              On: nc
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function tf(cB) {
      let {
        status: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)(), Vc = IT(Bc, Bc.baf2RxTarget), Ic = nT(Bc).yV, rB = nc("cryo" === Ic ? `${fT}rxRateCryo` : `${fT}rxRateWater`, {
        rate: KO(Vc.coolPerS)
      }), uc = nc(`${fT}rxChain`, {
        pct: String(Bc.baf2RxTarget),
        out: pM(Vc.out),
        heat: String(Math.round(Vc.settle)),
        coolant: rB
      }), sc = null !== Vc.coolantSecs ? Vc.coolantSecs >= 1 ? nc("cryo" === Ic ? `${fT}rxThrottleCryoOut` : `${fT}rxThrottleWaterOut`, {
        time: Tr(nc, Vc.coolantSecs)
      }) : nc("cryo" === Ic ? `${fT}rxThrottleCryoDry` : `${fT}rxThrottleWaterDry`) : null;
      return (0, tu.jsxs)("p", {
        className: "Baf2RxChain",
        children: [uc, null !== sc ? (0, tu.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", sc]
        }) : (0, tu.jsxs)("span", {
          children: [" \xb7 ", nc(`${fT}rxChainPellets`, {
            amount: hM(Vc.pelletsPerMin)
          })]
        })]
      })
    }

    function ST(cB) {
      let {
        view: Bc,
        store: nc,
        explain: Ic,
        explainOnce: rB
      } = cB;
      const {
        t: uc
      } = (0, zr.x)(), {
        status: sc
      } = Bc, [Mc, Pc] = (0, Vc.useState)(!1), qB = mf(sc, rn), Tc = mf(sc, uB), fc = !mf(sc, PB), mB = sc.baf2RxHeat > 100;
      return (0, tu.jsxs)(tu.Fragment, {
        children: [(0, tu.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, tu.jsx)(eT, {
            status: sc,
            pending: Bc.throttlePending,
            store: nc,
            explain: Ic
          }), (0, tu.jsx)(dO, {
            on: Tc,
            label: Tc ? uc(`${fT}rxOdLeft`, {
              time: Tr(uc, sc.baf2RxOdLeft)
            }) : uc(`${fT}rxOverdrive`),
            locked: fc,
            pending: 0 !== (Bc.pendingFlags & uB),
            toggle: () => {
              fc ? Ic(`${fT}rxOverdriveTier`, {
                amount: String(Oc(13))
              }) : Tc ? nc.setFlag(uB, !1) : Bc.odConfirmed ? nc.setFlag(uB, !0) : Pc(!0)
            }
          }), qB || Bc.startGuard ? (0, tu.jsx)(fu.u, {
            disabled: Bc.busy.has("start") || Bc.startGuard,
            onClick: () => {
              nc.tap("start", (() => {
                nc.setFlag(rn, !1)
              }))
            },
            children: uc(Bc.startGuard ? `${fT}rxStarting` : `${fT}rxStart`)
          }) : (0, tu.jsx)("span", {
            className: eI()("Baf2RxScram", {
              Pulse: mB
            }),
            children: (0, tu.jsx)(fu.L, {
              onClick: () => {
                nc.shutDown()
              },
              children: uc(`${fT}rxScram`)
            })
          })]
        }), (0, tu.jsx)(tf, {
          status: sc
        }), Mc && (0, tu.jsx)(JO, {
          id: "baf2RxOdTitle",
          title: `${fT}rxOdConfirmTitle`,
          body: `${fT}rxOdConfirmBody`,
          yes: `${fT}rxOdConfirm`,
          cancel: () => {
            Pc(!1)
          },
          confirm: () => {
            Pc(!1), nc.tap("odConfirm", (() => {
              nc.confirmOverdrive(), nc.setFlag(uB, !0)
            })), rB(`${fT}rxWhy_overdrive`)
          }
        })]
      })
    }

    function yf(cB) {
      let {
        view: Bc,
        store: nc,
        keepSize: Vc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)(), {
        status: rB
      } = Bc;
      return (0, tu.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, tu.jsx)(xT, {
          kind: "reactor",
          dims: Bc.dims,
          cap: rB.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: cB => {
            nc.resize(cB)
          }
        }), Vc ? (0, tu.jsx)(fu.g, {
          onClick: Vc,
          children: Ic(`${fT}rxKeepSize`)
        }) : (0, tu.jsxs)(tu.Fragment, {
          children: [(0, tu.jsx)(dO, {
            on: Bc.guide,
            label: Ic(`${fT}rxGuide`),
            toggle: () => {
              nc.toggleGuide()
            }
          }), mf(rB, OB) && (0, tu.jsx)(dO, {
            on: Bc.starter,
            label: Ic(`${fT}rxStarter`),
            toggle: () => {
              nc.toggleStarter()
            }
          }), (0, tu.jsx)(kT, {
            status: rB,
            store: nc,
            busy: Bc.busy.has("fill")
          })]
        })]
      })
    }

    function zf(cB) {
      let {
        need: Bc,
        kind: nc = "reactor",
        explain: Vc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)(), rB = Bc.length <= 3, uc = Bc.reduce(((cB, Bc) => {
        let [, nc] = Bc;
        return cB + nc
      }), 0);
      return (0, tu.jsxs)("div", {
        className: eI()("Baf2RxParts", {
          Compact: !rB
        }),
        onClick: () => {
          Vc("battery" === nc ? `${fT}batWhy_store` : `${fT}rxShellHint`)
        },
        children: [uc > 0 && (0, tu.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === uc ? Ic(`${fT}rxBlocksOne`) : Ic(`${fT}rxBlocks`, {
            blocks: String(uc)
          })
        }), 0 === Bc.length ? (0, tu.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Ic("battery" === nc ? `${fT}batPartsDone` : `${fT}rxShellDone`)
        }) : TM(Bc).map((cB => {
          let [Bc, nc, Vc] = cB;
          const uc = function(cB) {
            const Bc = SM[cB];
            if (void 0 === Bc) return null;
            const [nc, Vc, Ic] = eM[Bc].colour.map((cB => Math.round(255 * cB)));
            return `rgb(${nc}, ${Vc}, ${Ic})`
          }(Bc);
          return (0, tu.jsxs)("span", {
            className: "Baf2RxChip",
            title: KI(Ic, Bc),
            children: [(0, tu.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === uc ? {
                visibility: "hidden"
              } : {
                background: uc
              },
              title: Ic(`${fT}rxShopGhost`)
            }), (0, tu.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, tu.jsx)(hI.d, {
                itemName: Bc,
                amount: 0
              })
            }), (0, tu.jsx)("span", {
              className: "Baf2RxChipName",
              children: rB ? `${nc} ${sc=KI(Ic,Bc),sc.replace(/^(Reactor|Battery) (?=\S)/,"")}` : nc
            }), Vc >= nc ? (0, tu.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, tu.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: rB ? Ic(`${fT}rxShopShort`, {
                count: String(nc - Vc)
              }) : "\u2212" + (nc - Vc)
            })]
          }, Bc);
          var sc
        }))]
      })
    }
    const pT = "buildAFactory2Game:";

    function hT(cB) {
      var Bc, nc, Ic, rB, uc, sc, Mc;
      let {
        store: Pc,
        close: qB
      } = cB;
      const {
        t: Oc
      } = (0, zr.x)(), Tc = Cu(), fc = jT(Pc), {
        explained: mB,
        explain: ec
      } = DO("baf2RxExplained"), tB = (0, Vc.useCallback)(((cB, Bc) => {
        ec(Oc(cB, Bc))
      }), [ec, Oc]), Sc = null === fc || void 0 === fc ? void 0 : fc.status, yB = !0 === (null === Sc || void 0 === Sc ? void 0 : Sc.baf2BatReadOnly), zB = cB => {
        Sc && Tc.send(IB(Sc.baf2BatAt, cB))
      }, [pc, hc, aB] = null !== (Bc = null === fc || void 0 === fc ? void 0 : fc.dims) && void 0 !== Bc ? Bc : [0, 0, 0], lc = pM(null !== (nc = null === fc || void 0 === fc ? void 0 : fc.Qc) && void 0 !== nc ? nc : 0), Yc = !0 === (null === Sc || void 0 === Sc ? void 0 : Sc.baf2BatFormed), Lc = null !== (Ic = null === Sc || void 0 === Sc ? void 0 : Sc.baf2BatStored) && void 0 !== Ic ? Ic : 0, gB = Math.max(1, null !== (rB = null === Sc || void 0 === Sc ? void 0 : Sc.baf2BatIslandCap) && void 0 !== rB ? rB : 1), Uc = Math.min(100, 100 * Lc / gB), bB = null === Sc || void 0 === Sc ? void 0 : Sc.baf2BatNetPerS, Zc = function(cB, Bc, nc) {
        return nc > 0 && Bc >= nc ? "full" : void 0 !== cB && cB >= .05 ? "charging" : void 0 !== cB && cB <= -.05 && Bc > 0 ? "draining" : "steady"
      }(bB, Lc, null !== (uc = null === Sc || void 0 === Sc ? void 0 : Sc.baf2BatIslandCap) && void 0 !== uc ? uc : 0), Qc = null !== (sc = null === Sc || void 0 === Sc ? void 0 : Sc.baf2BatMadePerS) && void 0 !== sc ? sc : 0, Cc = null !== (Mc = null === Sc || void 0 === Sc ? void 0 : Sc.baf2BatUsedPerS) && void 0 !== Mc ? Mc : 0;
      let vB, Dc = {},
        Nc = "info";
      if (Sc)
        if (Yc) "charging" === Zc ? (vB = `${pT}batLine_charging`, Dc = {
          time: Tr(Oc, (gB - Lc) / Math.max(.05, null !== bB && void 0 !== bB ? bB : 0))
        }, Nc = "ok") : "draining" === Zc ? (vB = `${pT}batLine_draining`, Dc = {
          time: Tr(Oc, Lc / Math.max(.05, -(null !== bB && void 0 !== bB ? bB : 0)))
        }, Nc = "warn") : vB = "full" === Zc ? `${pT}batLine_full` : Lc <= 0 && Cc > 0 ? `${pT}batLine_empty` : `${pT}batLine_steady`;
        else {
          var Ec;
          const cB = qf({
            left: Sc.baf2BatNeed.reduce(((cB, Bc) => {
              let [, nc] = Bc;
              return cB + nc
            }), 0),
            bad: Sc.baf2BatBad,
            rods: 1,
            canFill: !0 === Sc.baf2BatCanFill,
            melted: !1
          });
          vB = cB.key, Dc = {
            count: String(null !== (Ec = cB.params.count) && void 0 !== Ec ? Ec : 0)
          }, Nc = cB.tone
        }
      else vB = `${pT}batLine_steady`;
      const oc = Math.max(Qc, Cc, 1);
      return (0, tu.jsx)(Tu.b, {
        close: qB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, tu.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, tu.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, tu.jsx)(hI.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, tu.jsxs)("div", {
                children: [(0, tu.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Oc(`${pT}batTitle`)
                }), Sc && (0, tu.jsxs)("p", {
                  className: eI()("Baf2RxSubtitle", {
                    good: Yc && "charging" === Zc,
                    warn: Yc && "draining" === Zc
                  }),
                  children: [pc, "\xd7", hc, "\xd7", aB, " \xb7 ", Oc(Yc ? `${pT}batState_${Zc}` : `${pT}rxSubPlanShort`)]
                })]
              })]
            }), (0, tu.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Sc && !yB && (0, tu.jsx)(RO, {
                kind: "battery",
                cap: Yc ? lc : void 0,
                busy: null === fc || void 0 === fc ? void 0 : fc.busy.has("apart"),
                apart: () => {
                  Pc.tap("apart", (() => {
                    zB("apart")
                  }))
                }
              }), (0, tu.jsx)(fu.k, {
                onClick: qB
              })]
            })]
          }), fc && Sc && (0, tu.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, tu.jsxs)("div", {
              className: eI()("Baf2RxFlow Baf2BatFlow", {
                Plan: !Yc
              }),
              children: [(0, tu.jsx)(QO, {
                kind: "Power",
                label: Oc(`${pT}batMade`),
                number: Yc ? `\u26a1 ${pM(Qc)}/s` : "\u2014",
                note: Oc(`${pT}batMadeNote`),
                share: Yc ? Qc / oc : void 0,
                onExplain: () => {
                  tB(`${pT}batWhy_made`)
                }
              }), (0, tu.jsx)(CO, {
                kind: "Power",
                step: Yc ? uT(Qc, oc) : 0,
                planned: !Yc
              }), (0, tu.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  tB(`${pT}batWhy_store`)
                },
                children: [(0, tu.jsx)(vT, {
                  max: 100,
                  bands: [{
                    upTo: Yc ? Uc : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, tu.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, tu.jsx)("b", {
                    className: "Baf2BatStored",
                    children: Yc ? Oc(`${pT}batStoredOf`, {
                      amount: pM(Lc),
                      cap: pM(Sc.baf2BatIslandCap)
                    }) : Oc(`${pT}batWillHold`, {
                      cap: lc
                    })
                  }), (0, tu.jsx)("span", {
                    children: Oc(`${pT}batAdds`, {
                      cap: lc
                    })
                  }), Yc && (0, tu.jsx)("small", {
                    children: Oc(`${pT}batBreakNote`, {
                      cap: lc
                    })
                  })]
                })]
              }), (0, tu.jsx)(CO, {
                kind: "Power",
                step: Yc ? uT(Cc, oc) : 0,
                planned: !Yc
              }), (0, tu.jsx)(QO, {
                kind: "Power",
                label: Oc(`${pT}batUsed`),
                number: Yc ? `\u26a1 ${pM(Cc)}/s` : "\u2014",
                note: Oc(`${pT}batUsedNote`),
                share: Yc ? Cc / oc : void 0,
                onExplain: () => {
                  tB(`${pT}batWhy_used`)
                }
              })]
            }), (0, tu.jsx)(NO, {
              text: Oc(vB, Dc),
              tone: Nc,
              explained: mB
            }), yB ? (0, tu.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Oc(`${pT}rxNotYours`)
            }) : !Yc && (0, tu.jsxs)(tu.Fragment, {
              children: [(0, tu.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, tu.jsx)(xT, {
                  kind: "battery",
                  dims: fc.dims,
                  cap: Sc.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: cB => {
                    Pc.resize(cB)
                  }
                }), (0, tu.jsx)(dO, {
                  on: fc.guide,
                  label: Oc(`${pT}rxGuide`),
                  toggle: () => {
                    Pc.toggleGuide()
                  }
                }), Sc.baf2BatCanFill && (0, tu.jsx)(fu.n, {
                  disabled: !fM("battery", Sc.baf2BatNeed) || fc.busy.has("fill"),
                  onClick: () => {
                    Pc.tap("fill", (() => {
                      zB("fill")
                    }))
                  },
                  children: Oc(`${pT}rxFill`)
                })]
              }), (0, tu.jsx)(zf, {
                need: Sc.baf2BatNeed,
                kind: "battery",
                explain: tB
              })]
            })]
          })]
        })
      })
    }
    const af = "buildAFactory2Game:",
      lT = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function YT(cB, Bc) {
      return cB === jM ? null : Bc ? "#4a4440" : cB < iM ? lT[cB - Rs] : cB === iM ? "#3fd0f0" : cB === Ks ? "#2c3e4c" : "#55585e"
    }

    function LT(cB) {
      let {
        inner: Bc,
        looks: nc,
        layer: Vc,
        setLayer: Ic,
        glow: rB,
        melted: uc,
        explain: sc
      } = cB;
      const {
        t: Mc
      } = (0, zr.x)(), [Pc, qB, Oc] = Bc, Tc = Math.max(0, Math.min(qB - 1, Vc)), fc = [];
      for (let ec = 0; ec < Oc; ec++)
        for (let cB = 0; cB < Pc; cB++) {
          var mB;
          const Bc = null !== (mB = nc[(Tc * Oc + ec) * Pc + cB]) && void 0 !== mB ? mB : jM,
            Vc = YT(Bc, uc),
            Ic = Bc >= Rs && Bc < iM;
          fc.push(null === Vc ? (0, tu.jsx)("circle", {
            cx: cB + .5,
            cy: ec + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${cB},${ec}`) : (0, tu.jsx)("rect", {
            x: cB + .06,
            y: ec + .06,
            width: .88,
            height: .88,
            fill: Vc,
            opacity: Ic && !uc ? .5 + .5 * rB : 1,
            onClick: cB => {
              cB.stopPropagation();
              const nc = TT(Bc);
              sc(nc.key, nc.params)
            }
          }, `${cB},${ec}`))
        }
      return (0, tu.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, tu.jsx)("svg", {
          className: eI()("Baf2RxMapGrid", {
            Melted: uc
          }),
          viewBox: `0 0 ${Math.max(1,Pc)} ${Math.max(1,Oc)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Mc(`${af}rxWhy_core`),
          onClick: () => {
            sc(`${af}rxWhy_core`, {})
          },
          children: fc
        }), qB > 1 && (0, tu.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, tu.jsx)("button", {
            type: "button",
            "aria-label": Mc(`${af}rxLayerDown`),
            disabled: Tc <= 0,
            onClick: () => {
              Ic(Tc - 1)
            },
            children: "\u25bc"
          }), (0, tu.jsxs)("span", {
            children: [(0, tu.jsx)("span", {
              className: "HideNarrow",
              children: Mc(`${af}rxLayer`, {
                n: String(Tc + 1),
                of: String(qB)
              })
            }), (0, tu.jsx)("span", {
              className: "ShowNarrow",
              children: Mc(`${af}rxLayerShort`, {
                n: String(Tc + 1),
                of: String(qB)
              })
            })]
          }), (0, tu.jsx)("button", {
            type: "button",
            "aria-label": Mc(`${af}rxLayerUp`),
            disabled: Tc >= qB - 1,
            onClick: () => {
              Ic(Tc + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const gf = "buildAFactory2Game:",
      UT = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Es,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: sM,
        kind: "red"
      }],
      bf = [50, Es, 100];

    function ZT(cB) {
      let {
        stats: Bc,
        t: nc,
        explain: Vc
      } = cB;
      const Ic = As(Bc),
        rB = Math.max(1, Bc.fuelHeat, Bc.cooling, Bc.size),
        uc = [
          ["fuel", `${gf}rxBarRods`, Bc.fuelHeat],
          ["cooling", `${gf}rxBarCooling`, Bc.cooling],
          ["size", `${gf}rxBarSize`, Bc.size]
        ];
      return (0, tu.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Vc(`${gf}rxWhy_bars`)
        },
        children: [(0, tu.jsx)("span", {
          className: "Baf2RxMostLine",
          children: nc(`${gf}rxMost`, {
            amount: pM(Math.min(Bc.fuelHeat, Bc.cooling, Bc.size))
          })
        }), (0, tu.jsx)("span", {
          className: "Baf2RxMostBars",
          children: uc.map((cB => {
            let [Bc, Vc, uc] = cB;
            return (0, tu.jsxs)("span", {
              className: eI()("Baf2RxMostBar", Bc, {
                Low: Bc === Ic
              }),
              children: [(0, tu.jsx)("small", {
                children: nc(Vc)
              }), (0, tu.jsx)("i", {
                children: (0, tu.jsx)("b", {
                  style: {
                    width: 100 * uc / rB + "%"
                  }
                })
              })]
            }, Bc)
          }))
        })]
      })
    }

    function QT(cB) {
      var Bc;
      let {
        view: nc,
        heat: Ic,
        settle: rB,
        settleLine: uc,
        settleBad: sc,
        explain: Mc
      } = cB;
      const {
        t: Pc
      } = (0, zr.x)(), {
        status: qB
      } = nc, Oc = qB.baf2RxAt.join(","), [Tc, fc] = (0, Vc.useState)((() => OT(nc.inner)));
      (0, Vc.useEffect)((() => {
        fc(OT(nc.inner))
      }), [Oc, nc.inner[1]]);
      const mB = null !== (Bc = nc.plan) && void 0 !== Bc ? Bc : PM(qB),
        ec = nc.plan ? nc.plan.powerPerUnit : qB.baf2RxStats[8],
        tB = null === Ic ? null : "alarm" === (Sc = uM(qB)) ? "red" : "hot" === Sc ? "hot" : "warm" === Sc ? "warm" : "cold";
      var Sc;
      const yB = !qB.baf2RxFormed && function(cB, Bc) {
          return 0 !== (cB.baf2RxFlags & Bc)
        }(qB, sB),
        zB = qB.baf2RxDamage,
        pc = zB > 0 && qB.baf2RxHeat < Es;
      return (0, tu.jsxs)("div", {
        className: eI()("Baf2RxCore", null !== tB && void 0 !== tB ? tB : "plan"),
        children: [(0, tu.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, tu.jsx)(LT, {
            inner: nc.inner,
            looks: nc.looks,
            layer: Tc,
            setLayer: fc,
            glow: qB.baf2RxFormed ? qB.baf2RxThrottle / 100 : 1,
            melted: yB,
            explain: Mc
          }), (0, tu.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Mc(`${gf}rxWhy_heat`)
            },
            children: [null !== Ic ? (0, tu.jsxs)(tu.Fragment, {
              children: [(0, tu.jsx)("b", {
                children: Pc(`${gf}rxHeatPct`, {
                  pct: String(Ic)
                })
              }), (0, tu.jsx)("span", {
                className: eI()("Baf2RxBand", tB),
                children: Pc(`${gf}rxBand_${tB}`)
              })]
            }) : (0, tu.jsx)("b", {
              children: Pc(`${gf}rxHeat`)
            }), null !== uc && (0, tu.jsx)("span", {
              className: eI()("Baf2RxSettle", {
                Bad: sc
              }),
              children: uc
            }), zB >= 1 && (0, tu.jsxs)("span", {
              className: eI()("Baf2RxDamage", {
                Healing: pc
              }),
              children: [Pc(`${gf}rxDamageLine`, {
                pct: String(zB)
              }), " \xb7 ", Pc(pc ? `${gf}rxDamageHealing` : `${gf}rxDamageRising`), (0, tu.jsx)("i", {
                children: (0, tu.jsx)("b", {
                  style: {
                    width: `${Math.min(100,zB)}%`
                  }
                })
              })]
            })]
          }), (0, tu.jsx)(vT, {
            max: sM,
            bands: UT,
            ticks: bf,
            now: Ic,
            settle: rB,
            settleTone: sc ? "bad" : null,
            onExplain: () => {
              Mc(`${gf}rxWhy_heat`)
            }
          })]
        }), (0, tu.jsx)(ZT, {
          stats: mB,
          t: Pc,
          explain: Mc
        }), ec > 0 && (0, tu.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Mc(`${gf}rxWhy_perPellet`)
          },
          children: Pc(`${gf}rxPerPellet`, {
            amount: pM(ec)
          })
        })]
      })
    }

    function CT(cB, Bc) {
      var nc;
      if (!cB.baf2RxStore) return {
        note: Bc(`${gf}rxUpTo`, {
          amount: pM(cB.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Vc, Ic] = cB.baf2RxStore, rB = Ic > 0 ? Vc / Ic : 0, uc = String(Math.floor(100 * rB)), sc = null !== (nc = cB.baf2RxStoreNetPerS) && void 0 !== nc ? nc : 0, Mc = function(cB) {
        var Bc, nc;
        const [Vc, Ic] = null !== (Bc = cB.baf2RxStore) && void 0 !== Bc ? Bc : [0, 0], rB = null !== (nc = cB.baf2RxStoreNetPerS) && void 0 !== nc ? nc : 0;
        return Ic > 0 && Vc >= Ic - 1 ? "running" === cB.baf2RxState ? `${AO}rxStoreFull` : `${AO}rxStoreFullOnly` : rB > .05 ? `${AO}rxStoreLine` : rB < -.05 ? "running" === cB.baf2RxState ? `${AO}rxStoreUsesMore` : `${AO}rxStoreDraining` : `${AO}rxStorePct`
      }(cB);
      return {
        note: Bc(Mc, Mc === `${gf}rxStoreLine` ? {
          pct: uc,
          time: Tr(Bc, (Ic - Vc) / sc)
        } : {
          pct: uc
        }),
        share: rB
      }
    }

    function vf(cB) {
      let {
        view: Bc,
        explain: nc,
        preview: Vc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)(), {
        status: rB
      } = Bc, uc = Xs(Fs(...Bc.dims)), sc = rf(rB), Mc = Math.min(Math.round(rB.baf2RxFuel), uc.fuel), Pc = "running" === rB.baf2RxState, qB = Pc ? uT(rB.baf2RxOut, rB.baf2RxMaxNow) : 0, Oc = function(cB, Bc, nc) {
        const Vc = nT(cB),
          Ic = "cryo" === Vc.yV,
          rB = nc ? nc.coolantSecs : Vc.pct >= 100 && cB.baf2RxOut >= 1 ? IT(cB, cB.baf2RxThrottle).coolantSecs : null;
        let uc, sc = !1;
        if (Vc.pct < 100) {
          const nc = 1 === Vc.makersShort,
            rB = !Ic && cB.baf2RxCryoOpen ? "OrCryo" : "";
          uc = Vc.makersShort > 0 ? Bc(Ic ? `${gf}rxCryoAddMixer${nc?"":"s"}` : `${gf}rxWaterAddCondenser${nc?"":"s"}${rB}`, {
            count: String(Vc.makersShort)
          }) : Bc(`${gf}rxWaterNeeds`, {
            rate: KO(Vc.needPerS)
          })
        } else if (null !== rB) uc = Bc(`${gf}rxWaterRunsOut`, {
          time: Tr(Bc, rB)
        });
        else if (Vc.waterBeside > 0) uc = Bc(`${gf}rxCryoPlusWater`, {
          rate: KO(Vc.waterBeside)
        });
        else {
          const cB = function(cB) {
            return cB.inPerS <= 0 ? "rxWaterNoSupply" : cB.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Vc);
          sc = "rxWaterNoSupply" === cB, uc = Bc(`${gf}${cB}`, {
            amount: pM(Vc.stored)
          })
        }
        return {
          kind: Ic ? "Cryo" : "Water",
          label: Bc(Ic ? `${gf}rxCryo` : `${gf}rxWater`),
          number: `${KO(Vc.usePerS)}/s`,
          preview: nc ? `${KO(nc.coolPerS)}/s` : null,
          note: uc,
          tone: "noWater" === cB.baf2RxState ? "danger" : sc ? "warn" : (Mc = Vc.pct, Pc = rB, Mc < 100 ? "danger" : null === Pc ? null : Pc < 300 ? "danger" : "warn"),
          share: Vc.pct / 100,
          why: Ic ? `${gf}rxWhy_cryo` : `${gf}rxWhy_water`,
          short: Vc.pct < 100
        };
        var Mc, Pc
      }(rB, Ic, Vc), Tc = mP(rB, uc.waste, sc), fc = CT(rB, Ic), mB = IT(rB, rB.baf2RxTarget), ec = Pc && Math.abs(mB.settle - rB.baf2RxHeat) >= 3, tB = Vc ? Vc.pelletsPerMin / 60 : null;
      return (0, tu.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, tu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, tu.jsx)(QO, {
            kind: "Fuel",
            label: Ic(`${gf}rxFuel`),
            number: String(Mc),
            preview: null !== tB && tB > 0 && rB.baf2RxFuel > 0 ? Tr(Ic, rB.baf2RxFuel / tB) : null,
            note: rB.baf2RxFuel <= 0 ? Ic(`${gf}rxFuelEmpty`) : sc > 0 ? Ic(`${gf}rxFuelLeft`, {
              time: Tr(Ic, rB.baf2RxFuel / sc)
            }) : Ic(1 === Mc ? `${gf}rxFuelPellet` : `${gf}rxFuelPellets`),
            tone: "noFuel" === rB.baf2RxState ? "danger" : rB.baf2RxFuel < 2 ? "warn" : null,
            share: rB.baf2RxFuel / uc.fuel,
            onExplain: () => {
              nc(`${gf}rxWhy_fuel`)
            }
          }), (0, tu.jsx)(QO, {
            kind: Oc.kind,
            label: Oc.label,
            number: Oc.number,
            preview: Oc.preview,
            note: Oc.note,
            tone: Oc.tone,
            share: Oc.share,
            onExplain: () => {
              nc(Oc.why)
            }
          })]
        }), (0, tu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, tu.jsx)(CO, {
            kind: "Fuel",
            step: qB,
            short: "noFuel" === rB.baf2RxState
          }), (0, tu.jsx)(CO, {
            kind: Oc.kind,
            step: qB,
            short: Oc.short || "noWater" === rB.baf2RxState
          })]
        }), (0, tu.jsx)(QT, {
          view: Bc,
          heat: rB.baf2RxHeat,
          settle: Math.min(sM, mB.settle),
          settleLine: ec ? Ic(`${gf}rxHeatSettles`, {
            pct: String(Math.round(mB.settle)),
            time: Tr(Ic, mB.settleS)
          }) : null,
          settleBad: mB.settle > 100,
          explain: nc
        }), (0, tu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, tu.jsx)(CO, {
            kind: "Power",
            step: qB
          }), (0, tu.jsx)(CO, {
            kind: "Waste",
            step: Pc && rB.baf2RxFuel - rB.baf2RxPu > 0 ? qB : 0,
            short: Tc.full
          })]
        }), (0, tu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, tu.jsx)(QO, {
            kind: "Power",
            label: Ic(`${gf}rxPowerOut`),
            number: `\u26a1 ${pM(rB.baf2RxOut)}/s`,
            preview: Vc ? pM(Vc.out) : null,
            note: fc.note,
            share: fc.share,
            onExplain: () => {
              nc(`${gf}rxWhy_power`)
            }
          }), (0, tu.jsx)(QO, {
            kind: "Waste",
            label: Ic(`${gf}rxWaste`),
            number: `${Math.floor(rB.baf2RxWaste)}/${uc.waste}`,
            note: Tc.full ? Ic(`${gf}rxWasteFull`) : null !== Tc.fullInS ? Ic(`${gf}rxWasteFullIn`, {
              time: Tr(Ic, Tc.fullInS)
            }) : Ic(`${gf}rxWasteSpent`),
            tone: "wasteFull" === rB.baf2RxState ? "danger" : Tc.full ? "warn" : null,
            share: rB.baf2RxWaste / uc.waste,
            onExplain: () => {
              nc(`${gf}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function DT(cB) {
      let {
        view: Bc,
        explain: nc
      } = cB;
      const {
        t: Vc
      } = (0, zr.x)(), Ic = Bc.plan;
      if (!Ic) return null;
      const rB = Ic.fuelHeat <= 0 ? null : Ic.cooling > 0 ? Math.min(sM, 100 * Ic.fuelHeat / Ic.cooling) : sM,
        uc = Vc(`${gf}rxPlanAtFull`);
      return (0, tu.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, tu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, tu.jsx)(QO, {
            kind: "Fuel",
            label: Vc(`${gf}rxFuel`),
            number: Vc(`${gf}rxPlanPerMin`, {
              amount: hM(Ic.pelletsPerMin)
            }),
            note: Vc(`${gf}rxPlanPellets`),
            onExplain: () => {
              nc(`${gf}rxWhy_fuel`)
            }
          }), (0, tu.jsx)(QO, {
            kind: "Water",
            label: Vc(`${gf}rxWater`),
            number: `${KO(Ic.waterPerS)}/s`,
            note: Bc.status.baf2RxCryoOpen && Ic.waterPerS > 0 ? Vc(`${gf}rxPlanOrCryo`, {
              rate: KO(VM(Ic, Ac.g) * Ac.n)
            }) : uc,
            onExplain: () => {
              nc(`${gf}rxWhy_water`)
            }
          })]
        }), (0, tu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, tu.jsx)(CO, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, tu.jsx)(CO, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, tu.jsx)(QT, {
          view: Bc,
          heat: null,
          settle: rB,
          settleLine: null === rB ? null : Vc(`${gf}rxPlanHeat`, {
            pct: String(Math.round(rB))
          }),
          settleBad: null !== rB && rB > 100,
          explain: nc
        }), (0, tu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, tu.jsx)(CO, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, tu.jsx)(CO, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, tu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, tu.jsx)(QO, {
            kind: "Power",
            label: Vc(`${gf}rxPowerOut`),
            number: `\u26a1 ${pM(Ic.max)}/s`,
            note: uc,
            onExplain: () => {
              nc(`${gf}rxWhy_power`)
            }
          }), (0, tu.jsx)(QO, {
            kind: "Waste",
            label: Vc(`${gf}rxWaste`),
            number: Vc(`${gf}rxPlanPerMin`, {
              amount: hM(Ic.pelletsPerMin)
            }),
            note: Vc(`${gf}rxWasteSpent`),
            onExplain: () => {
              nc(`${gf}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const NT = "buildAFactory2Game:",
      ET = {
        key: `${NT}rxWaiting`,
        params: {},
        tone: "info"
      };

    function oT(cB, Bc) {
      return 0 !== (cB.baf2RxFlags & Bc)
    }

    function WT(cB) {
      var Bc, nc;
      let {
        store: Ic,
        close: rB
      } = cB;
      const {
        t: uc
      } = (0, zr.x)(), sc = jT(Ic), {
        explained: Mc,
        hinting: Pc,
        explain: qB,
        explainOnce: Oc
      } = DO("baf2RxExplained"), Tc = (0, Vc.useCallback)(((cB, Bc) => {
        qB(uc(cB, Bc))
      }), [qB, uc]), fc = (0, Vc.useCallback)(((cB, Bc) => {
        Oc(cB, uc(cB, Bc))
      }), [Oc, uc]), [mB, ec] = (0, Vc.useState)(!1), [tB, Sc] = (0, Vc.useState)(!1), yB = null === sc || void 0 === sc ? void 0 : sc.status, zB = null === yB || void 0 === yB ? void 0 : yB.baf2RxAt.join(","), pc = !0 === (null === yB || void 0 === yB ? void 0 : yB.baf2RxFormed);
      (0, Vc.useEffect)((() => {
        Sc(!1), ec(!1)
      }), [zB, pc]), (0, Vc.useEffect)((() => (Ic.opened(), () => {
        Ic.closed()
      })), [Ic]);
      const hc = void 0 !== yB && oT(yB, qn),
        aB = yB ? pc ? uM(yB) : null !== sc && void 0 !== sc && sc.plan ? function(cB, Bc) {
          if (cB <= 0) return "off";
          if (Bc <= 0) return "alarm";
          const nc = 100 * cB / Bc;
          return nc < 50 ? "calm" : nc < Gs ? "warm" : nc <= 100 ? "hot" : "alarm"
        }(sc.plan.fuelHeat, sc.plan.cooling) : "off" : "off",
        lc = yB ? MM(yB) : null,
        Yc = sc ? sc.waiting ? ET : pc ? PT(sc.status) : function(cB) {
          var Bc, nc;
          const {
            status: Vc
          } = cB;
          return qf({
            left: Vc.baf2RxNeed.reduce(((cB, Bc) => {
              let [, nc] = Bc;
              return cB + nc
            }), 0),
            bad: Vc.baf2RxBad,
            rods: null !== (Bc = null === (nc = cB.plan) || void 0 === nc ? void 0 : nc.rods) && void 0 !== Bc ? Bc : 0,
            canFill: oT(Vc, MB),
            melted: oT(Vc, sB),
            idle: cB.looks.reduce(((cB, Bc) => cB + (Bc === Ks ? 1 : 0)), 0)
          })
        }(sc) : null,
        Lc = Pc && null !== Yc && ("ok" === Yc.tone || "info" === Yc.tone),
        gB = yB ? function(cB) {
          const Bc = 0 !== (cB.baf2RxFlags & rn),
            nc = cB.baf2RxHeat < Ws;
          return 0 !== (cB.baf2RxFlags & sB) || nc && (Bc || !cB.baf2RxFormed) ? null : cB.baf2RxFormed && !Bc ? {
            key: `${rP}rxApartScram`,
            params: {}
          } : {
            key: `${rP}rxApartCooling`,
            params: {
              pct: String(Ws)
            }
          }
        }(yB) : null,
        [Uc, bB, Zc] = null !== (Bc = null === sc || void 0 === sc ? void 0 : sc.dims) && void 0 !== Bc ? Bc : [0, 0, 0],
        Qc = `${Uc}\xd7${bB}\xd7${Zc}`;
      return (0, tu.jsx)(Tu.b, {
        close: rB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, tu.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, tu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, tu.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, tu.jsx)(iT, {
                mood: aB
              }), (0, tu.jsxs)("div", {
                children: [(0, tu.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: uc(`${NT}rxTitle`)
                }), sc && (0, tu.jsxs)("p", {
                  className: eI()("Baf2RxSubtitle", pc && (null === lc || void 0 === lc ? void 0 : lc.tone)),
                  children: [pc && !hc ? (0, tu.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": uc(`${NT}rxChangeSize`),
                    onClick: () => {
                      if (!yB) return;
                      const cB = oT(yB, rn);
                      var Bc;
                      (Bc = {
                        scram: cB,
                        heat: yB.baf2RxHeat
                      }).scram && Bc.heat < Ws ? ec(!0) : Tc(cB ? `${NT}rxResizeCooling` : `${NT}rxResizeHot`, {
                        pct: String(Ws)
                      })
                    },
                    children: [Qc, " \u270e"]
                  }) : Qc, " \xb7 ", uc(pc ? null !== (nc = null === lc || void 0 === lc ? void 0 : lc.label) && void 0 !== nc ? nc : `${NT}rxState_running` : `${NT}rxSubPlanShort`)]
                })]
              })]
            }), (0, tu.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [sc && !hc && (0, tu.jsx)(RO, {
                kind: "reactor",
                busy: sc.busy.has("apart"),
                whyNot: gB ? () => {
                  Tc(gB.key, gB.params)
                } : null,
                apart: () => {
                  Ic.tap("apart", (() => {
                    Ic.send("apart")
                  }))
                }
              }), (0, tu.jsx)(fu.k, {
                onClick: rB
              })]
            })]
          }), sc && Yc && (0, tu.jsxs)("div", {
            className: "Baf2RxBody",
            children: [pc ? (0, tu.jsx)(vf, {
              view: sc,
              explain: Tc,
              preview: VT(sc.status)
            }) : (0, tu.jsx)(DT, {
              view: sc,
              explain: Tc
            }), (0, tu.jsx)(NO, {
              text: Lc ? `${sT(uc,Yc)} ${uc(`${NT}rxTapHint`)}` : sT(uc, Yc),
              tone: Yc.tone,
              explained: Mc
            }), hc ? (0, tu.jsxs)(tu.Fragment, {
              children: [(0, tu.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: uc(`${NT}rxNotYours`)
              }), (0, tu.jsx)(XO, {
                status: sc.status,
                store: Ic,
                readOnly: !0
              })]
            }) : pc && !tB ? (0, tu.jsxs)(tu.Fragment, {
              children: [(0, tu.jsx)(ST, {
                view: sc,
                store: Ic,
                explain: Tc,
                explainOnce: fc
              }), void 0 !== sc.status.baf2RxLayout && WO(sc.status) && (0, tu.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, tu.jsx)(XO, {
                  status: sc.status,
                  store: Ic,
                  readOnly: !1,
                  bare: !0
                }), (0, tu.jsx)(kT, {
                  status: sc.status,
                  store: Ic,
                  busy: sc.busy.has("fill")
                })]
              })]
            }) : (0, tu.jsxs)(tu.Fragment, {
              children: [(0, tu.jsx)(yf, {
                view: sc,
                store: Ic,
                keepSize: pc ? () => {
                  Sc(!1)
                } : void 0
              }), OM(sc.dims, sc.status.baf2RxDims) && (0, tu.jsx)(zf, {
                need: sc.status.baf2RxNeed,
                explain: Tc
              }), (0, tu.jsx)(XO, {
                status: sc.status,
                store: Ic,
                readOnly: !1
              })]
            }), mB && (0, tu.jsx)(JO, {
              id: "baf2ResizeTitle",
              title: `${NT}rxResizeConfirmTitle`,
              body: `${NT}rxResizeConfirmBody`,
              yes: `${NT}rxChangeSize`,
              cancel: () => {
                ec(!1)
              },
              confirm: () => {
                ec(!1), Sc(!0)
              }
            })]
          })]
        })
      })
    }
    class wT {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(cB) {
        this.view = cB;
        for (const Bc of this.listeners) Bc()
      }
      get() {
        return this.view
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
    }

    function kf(cB) {
      let {
        commands: Bc,
        store: nc,
        power: Ic,
        water: rB,
        reactor: uc,
        battery: sc,
        collider: Mc,
        terminal: Pc,
        quests: qB,
        close: Oc,
        OV: Tc,
        askIslands: fc,
        showCore: mB,
        openSocial: ec
      } = cB;
      const {
        userContext: tB
      } = (0, Ys.c)(), Sc = ls.featureFlags.useSocialFeatures && tB.isLoggedIn(), [yB, zB] = (0, Vc.useState)((() => nc.get()));
      (0, Vc.useEffect)((() => nc.subscribe((() => {
        zB(nc.get())
      }))), [nc]);
      const pc = "islands" === (null === yB || void 0 === yB ? void 0 : yB.kind) ? yB.backToCore : void 0;
      return (0, tu.jsxs)(Qu.Provider, {
        value: Bc,
        children: ["core" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(Gq, {
          view: yB.core,
          close: Oc,
          askIslands: fc
        }), "dropMap" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(VO, {
          message: yB.dropMap,
          quests: qB,
          close: Oc,
          OV: Tc
        }), "islands" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(pO, {
          message: yB.islands,
          arrivedAtMs: yB.arrivedAtMs,
          close: pc ? () => {
            mB(pc)
          } : Oc,
          OV: Tc,
          openSocial: Sc ? ec : null
        }), "quests" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(Sq, {
          store: qB,
          close: Oc
        }), "transfer" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(jq, {
          message: yB.transfer,
          arrivedAtMs: yB.arrivedAtMs,
          close: Oc,
          OV: Tc
        }), "power" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(hu, {
          store: Ic,
          close: Oc
        }), "water" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(us, {
          store: rB,
          close: Oc
        }), "reactor" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(WT, {
          store: uc,
          close: Oc
        }), "battery" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(hT, {
          store: sc,
          close: Oc
        }), "collider" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(sP, {
          store: Mc,
          close: Oc
        }), "terminal" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, tu.jsx)(ZO, {
          store: Pc,
          close: Oc,
          send: cB => {
            Bc.send(cB)
          }
        })]
      })
    }
    const XT = [0, 0, 0],
      HT = new WeakMap;

    function FT(cB) {
      let Bc = HT.get(cB);
      return Bc || (Bc = {
        hidden: cB.hidden,
        x: NaN,
        y: NaN
      }, HT.set(cB, Bc)), Bc
    }
    const JT = {
      x: 0,
      y: 0,
      distSq: 0
    };

    function jf(cB, Bc) {
      const nc = FT(cB);
      nc.hidden !== Bc && (nc.hidden = Bc, cB.hidden = Bc)
    }

    function RT(cB, Bc, nc) {
      const Vc = FT(cB);
      Vc.x === Bc && Vc.y === nc || (Vc.x = Bc, Vc.y = nc, cB.style.translate = `${Bc}vw ${nc}vh`)
    }

    function KT(cB, Bc, nc, Vc, Ic, rB) {
      let [uc, sc, Mc] = Vc;
      const Pc = (uc + .5 - nc[0]) ** 2 + (sc - nc[1]) ** 2 + (Mc + .5 - nc[2]) ** 2;
      let qB = null;
      Pc <= rB ** 2 && (XT[0] = uc + .5, XT[1] = sc + Ic, XT[2] = Mc + .5, qB = Bc.projectWorldPosToViewport(XT));
      const Oc = null !== qB && qB.x > -5 && qB.x < 105 && qB.y > -5 && qB.y < 105;
      return jf(cB, !Oc), Oc ? (JT.x = qB.x, JT.y = qB.y, JT.distSq = Pc, JT) : null
    }

    function xf(cB, Bc) {
      return cB.distSq - Bc.distSq
    }
    class dT {
      constructor() {
        this.list = [], this.pool = []
      }
      add(cB, Bc, nc, Vc) {
        let Ic = this.pool[this.list.length];
        Ic || (Ic = {
          x: 0,
          y: 0,
          distSq: 0,
          element: Bc,
          liftRem: nc,
          dot: Vc
        }, this.pool.push(Ic)), Ic.x = cB.x, Ic.y = cB.y, Ic.distSq = cB.distSq, Ic.element = Bc, Ic.liftRem = nc, Ic.dot = Vc, this.list.push(Ic)
      }
    }
    class AT {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = cB, this.sizes = new WeakMap, this.observer = new ResizeObserver((cB => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const Bc of cB) {
            const cB = Bc.borderBoxSize[0];
            "dot" !== Bc.target.dataset.crowded && 0 !== cB.inlineSize && 0 !== cB.blockSize && this.sizes.set(Bc.target, {
              width: cB.inlineSize,
              height: cB.blockSize
            })
          }
        })), this.remPx = 16, this.kept = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.ZZ = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.ZZ)
      }
      observe(cB) {
        this.observer.observe(cB)
      }
      unobserve(cB) {
        this.observer.unobserve(cB)
      }
      run(cB) {
        const Bc = cB.list;
        Bc.sort(xf);
        const nc = this.pxPerVw,
          Vc = this.pxPerVh;
        this.kept.length = 0, this.hud && this.kept.push(...this.hud.boxes(performance.now()));
        for (const rB of Bc) {
          var Ic;
          const cB = this.sizes.get(rB.element);
          let Bc = "no";
          if (cB && cB.width > 0) {
            const Ic = rB.x * nc,
              uc = rB.y * Vc - rB.liftRem * this.remPx;
            this.fit(Ic, uc, cB.width, cB.height) || (Bc = rB.dot && this.fit(Ic, uc, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Ic = rB.element.dataset.crowded) && void 0 !== Ic ? Ic : "no") !== Bc && ("no" === Bc ? delete rB.element.dataset.crowded : rB.element.dataset.crowded = Bc), "hidden" !== Bc && RT(rB.element, rB.x, rB.y)
        }
        Bc.length = 0
      }
      fit(cB, Bc, nc, Vc) {
        const Ic = cB - nc / 2,
          rB = cB + nc / 2,
          uc = Bc - Vc,
          sc = this.kept;
        for (let Mc = 0; Mc < sc.length; Mc += 4)
          if (Ic < sc[Mc + 1] - 2 && rB > sc[Mc] + 2 && uc < sc[Mc + 3] - 2 && Bc > sc[Mc + 2] + 2) return !1;
        return sc.push(Ic, rB, uc, Bc), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.ZZ)
      }
    }
    const GT = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class cm {
      constructor() {
        this.cards = GT.map((cB => document.getElementsByClassName(cB))), this.watched = GT.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(cB) {
        cB - this.refreshedAt > 1e3 && (this.refreshedAt = cB, this.stale = !0);
        for (let nc = 0; nc < this.cards.length; nc++) {
          var Bc;
          const cB = null !== (Bc = this.cards[nc][0]) && void 0 !== Bc ? Bc : null;
          cB !== this.watched[nc] && this.watch(nc, cB)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let cB = 0; cB < this.watched.length; cB++) this.watch(cB, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const cB = this.list;
        cB.length = 0;
        for (const Bc of this.watched) {
          if (!Bc || Bc.closest(".NoRoom")) continue;
          const nc = Bc.getBoundingClientRect();
          let Vc = nc.top,
            Ic = nc.bottom;
          if (Bc === this.watched[0] && this.hud) {
            const cB = this.hud.getBoundingClientRect();
            Vc = Math.max(Vc, cB.top), Ic = Math.min(Ic, cB.bottom)
          }
          nc.width > 0 && Ic > Vc && cB.push(nc.left, nc.right, Vc, Ic)
        }
      }
      watch(cB, Bc) {
        const nc = this.watched[cB];
        var Vc, Ic;
        (nc && this.sizes.unobserve(nc), this.watched[cB] = Bc, this.stale = !0, Bc && this.sizes.observe(Bc), 0 === cB) && (null === (Vc = this.hud) || void 0 === Vc || Vc.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Ic = null === Bc || void 0 === Bc ? void 0 : Bc.closest(".Baf2QuestHud")) && void 0 !== Ic ? Ic : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    class Bf {
      constructor(cB) {
        this.onElement = cB, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(cB) {
        const Bc = [];
        for (let nc = 0; nc + 4 < cB.length; nc += 5) {
          const Vc = [cB[nc], cB[nc + 1], cB[nc + 2]];
          Bc.push({
            key: Vc.join(","),
            pos: Vc,
            status: xI[cB[nc + 3]],
            kind: pB[cB[nc + 4]]
          })
        }
        this.markers = Bc, this.keys = new Set(Bc.map((cB => {
          let {
            key: Bc
          } = cB;
          return Bc
        }))), this.notify()
      }
      covers(cB) {
        return this.keys.has(cB)
      }
      get() {
        return this.markers
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      bind(cB) {
        let Bc = this.refs.get(cB);
        return Bc || (Bc = Bc => {
          const nc = this.elements.get(cB);
          var Vc, Ic;
          nc && (null === (Vc = this.onElement) || void 0 === Vc || Vc.call(this, nc, !1));
          Bc ? (this.elements.set(cB, Bc), null === (Ic = this.onElement) || void 0 === Ic || Ic.call(this, Bc, !0)) : (this.elements.delete(cB), this.refs.delete(cB))
        }, this.refs.set(cB, Bc)), Bc
      }
      onAfterRender(cB, Bc, nc) {
        for (const Vc of this.markers) {
          const Ic = this.elements.get(Vc.key);
          if (!Ic) continue;
          const rB = KT(Ic, cB, Bc, Vc.pos, 1.05, 24);
          rB && nc.add(rB, Ic, .45, !0)
        }
      }
      notify() {
        for (const cB of this.listeners) cB()
      }
    }
    const nf = {
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
    const Vf = (0, Vc.memo)((function(cB) {
        let {
          status: Bc,
          kind: nc,
          bindRef: Vc
        } = cB;
        const {
          t: Ic
        } = (0, zr.x)(), rB = function(cB, Bc) {
          var nc;
          if ("noFuel" === cB) {
            var Vc, Ic;
            const cB = null === (Vc = LB[Bc]) || void 0 === Vc || null === (Ic = Vc.fuels) || void 0 === Ic ? void 0 : Ic.find((cB => xn.includes(cB)));
            return null !== cB && void 0 !== cB ? cB : nf.noFuel
          }
          return void 0 !== (null === (nc = LB[Bc]) || void 0 === nc ? void 0 : nc.cryoMade) ? "noOutlet" === cB ? "Fluid Pipe" : "noInput" === cB ? "Biomass" : nf[cB] : nf[cB]
        }(Bc, nc);
        return (0, tu.jsxs)("div", {
          className: eI()("Baf2StallMarker", Bc),
          ref: Vc,
          hidden: !0,
          children: [rB && (0, tu.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, tu.jsx)(hI.d, {
              itemName: rB,
              amount: 0
            })
          }), (0, tu.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === Bc ? "?" : "!"
          }), (0, tu.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Ic(`buildAFactory2Game:stallTag_${Bc}`)
          })]
        })
      })),
      If = (0, Vc.memo)((function(cB) {
        let {
          controller: Bc
        } = cB;
        const [nc, Ic] = (0, Vc.useState)((() => Bc.get()));
        return (0, Vc.useEffect)((() => (Ic(Bc.get()), Bc.subscribe((() => {
          Ic(Bc.get())
        })))), [Bc]), (0, tu.jsx)("div", {
          className: "Baf2StallMarkers",
          children: nc.map((cB => (0, tu.jsx)(Vf, {
            status: cB.status,
            kind: cB.kind,
            bindRef: Bc.bind(cB.key)
          }, cB.key)))
        })
      })),
      rm = Mn.n + 150;
    class uf {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(cB, Bc) {
        const nc = Bc - cB;
        null === this.offset || nc < this.offset ? this.offset = nc : this.offset = Math.min(nc, this.offset + .02 * (Bc - this.sampledAt)), this.sampledAt = Bc
      }
      toLocal(cB) {
        var Bc;
        return cB + (null !== (Bc = this.offset) && void 0 !== Bc ? Bc : 0) + rm
      }
    }
    var sf = nc(37042);
    const Mf = 15 * Math.PI / 180,
      Pf = Math.SQRT2,
      qm = [4, 2];

    function Of(cB, Bc) {
      const nc = [1 / 0, 1 / 0, 1 / 0],
        Vc = [-1 / 0, -1 / 0, -1 / 0];
      for (const Mc of cB)
        for (let cB = 0; cB < 3; cB++) nc[cB] = Math.min(nc[cB], Mc[cB]), Vc[cB] = Math.max(Vc[cB], Mc[cB]);
      const Ic = (nc[0] + Vc[0]) / 2,
        rB = (nc[1] + Vc[1]) / 2,
        uc = (nc[2] + Vc[2]) / 2;
      let sc = 0;
      for (const Mc of cB) sc = Math.max(sc, Math.hypot(Mc[0] - Ic, Mc[1] - rB, Mc[2] - uc));
      return {
        x: Ic,
        y: rB,
        z: uc,
        r: sc + Bc
      }
    }

    function Tf(cB, Bc, nc) {
      const Vc = Bc.x - cB.x,
        Ic = Bc.y - cB.y,
        rB = Bc.z - cB.z,
        uc = Math.sqrt(Vc * Vc + Ic * Ic + rB * rB);
      if (uc <= Bc.r + 8) return 1;
      const sc = Bc.r / uc,
        Mc = Math.sqrt(1 - sc * sc),
        Pc = Mc < -cB.cosHalf,
        qB = (Vc * cB.dx + Ic * cB.dy + rB * cB.dz) / uc;
      if (!Pc && qB < cB.cosHalf * Mc - cB.sinHalf * sc) return 0;
      const Oc = nc * Pf * cB.frameMs * cB.pxPerBlock / (uc - Bc.r);
      for (let Tc = 0; Tc < qm.length; Tc++)
        if (Oc * qm[Tc] <= 1) return qm[Tc];
      return 1
    }

    function ff(cB, Bc) {
      return {
        name: cB,
        at: Bc,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const mm = [0, 0, 0];

    function ef(cB, Bc, nc) {
      let [, Vc, Ic, rB, uc, sc] = Bc;
      const Mc = Mn.i * (null !== uc && void 0 !== uc ? uc : 1),
        Pc = [];
      for (let fc = 0; fc < Vc.length; fc += 3) Pc.push([Vc[fc] + .5, Vc[fc + 1] + .65, Vc[fc + 2] + .5]);
      const qB = [];
      for (let fc = 0; fc < Pc.length - 1; fc++) {
        const [cB, Bc] = [Pc[fc], Pc[fc + 1]];
        qB.push([(cB[0] + Bc[0]) / 2, (cB[1] + Bc[1]) / 2, (cB[2] + Bc[2]) / 2])
      }
      const Oc = Pc.slice(1, -1),
        Tc = new Uint8Array(Oc.length);
      for (const fc of null !== sc && void 0 !== sc ? sc : []) Tc[fc >> 1] |= 1 & fc ? 2 : 1;
      return {
        island: cB,
        length: Oc.length,
        loop: rB,
        cellsPerMs: Mc,
        edges: qB,
        Sr: Oc,
        bounds: Of([...qB, ...Oc], .3),
        changed: !0,
        culled: !1,
        hide: Tc,
        items: Ic.map((cB => {
          let [Bc, Vc] = cB;
          return ff(Bc, (0, Mn.C)(Bc, Vc, nc, Mc).at)
        }))
      }
    }

    function tm(cB, Bc) {
      const {
        items: nc
      } = cB;
      if (0 === nc.length) return;
      const Vc = cB.length / cB.cellsPerMs,
        Ic = Math.floor((Bc - nc[0].at) / Vc) - 1;
      if (Ic > 0)
        for (const rB of nc) rB.at += Ic * Vc
    }

    function Sf(cB, Bc) {
      const nc = Math.min(Math.floor(Bc), cB.length - 1),
        Vc = cB.hide[nc];
      return 0 !== Vc && 0 !== (Vc & (Bc - nc < .5 ? 1 : 2))
    }

    function ym(cB, Bc) {
      const nc = Math.min(Math.floor(Bc), cB.length - 1),
        Vc = Bc - nc,
        Ic = Vc < .5,
        rB = Ic ? cB.edges[nc] : cB.Sr[nc],
        uc = Ic ? cB.Sr[nc] : cB.edges[nc + 1],
        sc = Ic ? 2 * Vc : 2 * Vc - 1;
      mm[0] = rB[0] + (uc[0] - rB[0]) * sc, mm[1] = rB[1] + (uc[1] - rB[1]) * sc, mm[2] = rB[2] + (uc[2] - rB[2]) * sc
    }
    const zm = Math.PI / 4;
    class pf {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new uf, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.ZZ = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(cB) {
        const Bc = performance.now();
        this.clock.sample(cB.baf2BeltLinesAt, Bc), this.queue(cB.baf2BeltLinesAt, cB, 0, null, null, 0), this.applyDue(Bc)
      }
      onMoves(cB) {
        const Bc = performance.now(),
          nc = cB.baf2BeltMovesAt;
        this.clock.sample(nc, Bc);
        for (const [Vc, Ic, rB, uc] of cB.baf2BeltMoveList) null === Ic ? this.queue(nc - rB, null, Vc, null, null, null !== uc && void 0 !== uc ? uc : 0) : this.queue(nc - rB, null, Vc, Ic, null !== uc && void 0 !== uc ? uc : null, 0);
        this.applyDue(Bc)
      }
      start(cB) {
        this.pool = new sf.c(cB, {
          scale: .3,
          yaw: zm
        }, 64), this.ZZ(), window.addEventListener("resize", this.ZZ)
      }
      onAfterRender(cB) {
        const {
          pool: Bc
        } = this;
        if (!Bc) return;
        const nc = performance.now(),
          Vc = nc - this.lastRenderAt;
        this.lastRenderAt = nc, Vc < 100 && (this.frameMs += .1 * (Vc - this.frameMs));
        const Ic = nc + this.frameMs;
        this.applyDue(Ic);
        const rB = cB.cameraPosition,
          uc = Bc.follow(rB);
        this.setView(cB, rB);
        const sc = this.frame++;
        for (let Mc = 0; Mc < this.shown.length; Mc++) {
          const cB = this.shown[Mc],
            nc = Tf(this.view, cB.bounds, cB.cellsPerMs),
            Vc = cB.culled && 0 !== nc;
          if (cB.culled = 0 === nc, !uc && !cB.changed && !Vc && (0 === nc || (sc + Mc) % nc !== 0)) continue;
          cB.changed = !1, cB.loop && (tm(cB, Ic), (0, Mn.x)(cB.items, cB.length, Ic, cB.cellsPerMs));
          let rB = cB.length;
          for (let sc = 0; sc < cB.items.length; sc++) {
            const nc = cB.items[sc],
              Vc = (0, Mn.E)(nc.at, rB, Ic, cB.cellsPerMs);
            if (rB = Vc - Mn.p, Sf(cB, Vc)) {
              null === nc.kind || nc.hidden || (nc.kind.hide(nc.slot), nc.hidden = !0);
              continue
            }
            let Mc = nc.kind;
            if (null === Mc) {
              if (Mc = Bc.kindOf(nc.name), null === Mc) continue;
              nc.kind = Mc, nc.slot = Mc.take(), nc.hidden = !0, nc.drawn = NaN
            } else if (Vc === nc.drawn && !nc.hidden && !uc) continue;
            ym(cB, Vc), Mc.write(nc.slot, mm[0], mm[1], mm[2]), nc.hidden = !1, nc.drawn = Vc
          }
        }
        Bc.commit()
      }
      dispose() {
        var cB;
        window.removeEventListener("resize", this.ZZ), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (cB = this.pool) || void 0 === cB || cB.dispose(), this.pool = null
      }
      setView(cB, Bc) {
        const {
          cameraDir: nc,
          lastDir: Vc
        } = this, Ic = cB.cameraDirection;
        for (let qB = 0; qB < 3; qB++) Vc[qB] = nc[qB], nc[qB] = Ic[qB];
        const rB = nc[0] * Vc[0] + nc[1] * Vc[1] + nc[2] * Vc[2],
          uc = Number.isNaN(rB) ? 0 : Math.acos(Math.min(1, Math.max(-1, rB))),
          {
            width: sc,
            height: Mc
          } = this,
          Pc = cB.tanHalfFovX;
        ! function(cB, Bc, nc, Vc, Ic, rB, uc) {
          let sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          cB.x = Bc[0], cB.y = Bc[1], cB.z = Bc[2], cB.dx = nc[0], cB.dy = nc[1], cB.dz = nc[2];
          const Mc = Math.min(Math.PI, Math.atan(Math.sqrt(Vc * Vc + Ic * Ic)) + Mf + sc);
          cB.cosHalf = Math.cos(Mc), cB.sinHalf = Math.sin(Mc), cB.pxPerBlock = rB / (2 * Ic), cB.frameMs = uc
        }(this.view, Bc, nc, Pc, Pc * Mc / sc, Mc * window.devicePixelRatio, this.frameMs, uc)
      }
      queue(cB, Bc, nc, Vc, Ic, rB) {
        const uc = Math.max(this.clock.toLocal(cB), this.lastPendingAt);
        this.lastPendingAt = uc, this.pending.push({
          at: uc,
          lines: Bc,
          line: nc,
          name: Vc,
          pos: Ic,
          idx: rB
        })
      }
      applyDue(cB) {
        const {
          pending: Bc
        } = this;
        for (; this.pendingHead < Bc.length && Bc[this.pendingHead].at <= cB;) {
          const cB = Bc[this.pendingHead++];
          if (cB.lines) this.applyLines(cB.lines, cB.at), cB.lines = null;
          else {
            const Bc = this.lines.get(cB.line);
            Bc && this.applyMove(Bc, cB, cB.at)
          }
        }
        this.pendingHead === Bc.length ? (Bc.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > Bc.length && (Bc.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(cB, Bc) {
        this.clearIsland(cB.baf2BeltIsland);
        for (const nc of cB.baf2BeltLineList) this.lines.set(nc[0], ef(cB.baf2BeltIsland, nc, Bc));
        this.shown = [...this.lines.values()]
      }
      applyMove(cB, Bc, nc) {
        let {
          name: Vc,
          pos: Ic,
          idx: rB
        } = Bc;
        cB.changed = !0, cB.loop && (tm(cB, nc), (0, Mn.x)(cB.items, cB.length, nc, cB.cellsPerMs)), null !== Vc && null !== Ic ? (0, Mn.z)(cB.items, cB.length, ff(Vc, nc), Ic, nc, cB.cellsPerMs) : null !== Vc ? cB.items.push(ff(Vc, nc)) : cB.items.length > rB && this.release((0, Mn.G)(cB.items, cB.length, nc, cB.cellsPerMs, rB))
      }
      clearIsland(cB) {
        for (const [Bc, nc] of this.lines)
          if (nc.island === cB) {
            for (const cB of nc.items) this.release(cB);
            this.lines.delete(Bc)
          }
      }
      release(cB) {
        null !== cB.kind && (cB.kind.release(cB.slot), cB.kind = null, cB.slot = -1, cB.hidden = !0, cB.drawn = NaN)
      }
    }
    var hf = nc(35245),
      am = nc(37049);

    function lf(cB) {
      let {
        depth: Bc,
        store: nc,
        t: Ic
      } = cB;
      const rB = function(cB) {
        const [Bc, nc] = (0, Vc.useState)(cB.lastPlayerY());
        return (0, RP.f)(br, nc), (0, Vc.useEffect)((() => {
          nc(cB.lastPlayerY())
        }), [cB]), Bc
      }(nc);
      if (null === rB) return null;
      const [uc, sc] = Bc, Mc = rB > uc ? uc : null !== sc && rB < sc ? sc : null, Pc = {
        y: Or(rB),
        target: null === Mc ? "" : Or(Mc)
      };
      return (0, tu.jsx)("span", {
        className: eI()("Baf2QuestDepth", {
          Reached: null === Mc
        }),
        children: Ic(`${dP}${null===Mc?"questDepthReached":"questDepth"}`, Pc)
      })
    }

    function Yf(cB) {
      let {
        also: Bc,
        view: nc,
        t: Vc
      } = cB;
      return (0, tu.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, tu.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, tu.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, tu.jsx)("strong", {
            children: Vc(`${dP}questAlsoDownHere`)
          }), (0, tu.jsx)("span", {
            className: "Baf2QuestChips",
            children: Bc.map((cB => {
              let [Bc, Ic, rB, uc] = cB;
              return (0, tu.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Vc(`${dP}questAlsoItem`, {
                  item: GP(Vc, nc.itemNames[Bc], Bc),
                  have: String(Ic),
                  need: String(rB)
                }),
                children: [(0, tu.jsx)(Bq, {
                  item: Bc
                }), (0, tu.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Ic}/${rB}`
                }), null !== uc && (0, tu.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Vc(`${dP}questAlsoDepth`, {
                    y: Or(uc)
                  })
                })]
              }, Bc)
            }))
          })]
        })]
      })
    }
    var Lf = nc(35345);

    function gm(cB) {
      let {
        expanded: Bc,
        inventoryOpen: nc,
        children: Ic
      } = cB;
      const rB = (0, Vc.useRef)(null);
      return (0, Vc.useEffect)((() => {
        const cB = rB.current,
          Bc = null === cB || void 0 === cB ? void 0 : cB.closest(".RightElements"),
          Vc = null === cB || void 0 === cB ? void 0 : cB.firstElementChild;
        if (!cB || !Bc || !Vc) return;
        return (0, am.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Bc, Vc], (() => {
          const Ic = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Ic.length) return;
          const rB = Math.max(...Ic.map((cB => cB.getBoundingClientRect().bottom))),
            uc = Bc.getBoundingClientRect(),
            sc = nc ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (sc) {
            const Bc = parseFloat(getComputedStyle(Vc).marginLeft) + parseFloat(getComputedStyle(Vc).marginRight),
              nc = uc.right - sc.getBoundingClientRect().right - 8 - Bc;
            cB.style.setProperty("--baf2-quest-room", `${nc}px`), cB.classList.toggle("NoRoom", nc < 150)
          } else cB.style.removeProperty("--baf2-quest-room"), cB.classList.remove("NoRoom");
          const Mc = rB - uc.top + 8,
            Pc = function(cB, Bc, nc) {
              const Vc = Bc.getBoundingClientRect(),
                Ic = cB.getBoundingClientRect(),
                rB = (0, Lf.b)(Ic.left, Ic.right, Vc.top + nc);
              if (null !== rB && rB < Vc.bottom) return rB - Vc.top;
              return Vc.height - (parseFloat(getComputedStyle(Bc).paddingBottom) || 0)
            }(cB, Bc, Mc) - 8,
            qB = window.innerHeight / 2 - uc.top,
            {
              top: Oc,
              maxHeight: Tc
            } = function(cB, Bc, nc, Vc, Ic) {
              const rB = Math.min(nc, Math.max(0, Bc - cB)),
                uc = Ic ? cB : Math.max(cB, Math.min(Vc - rB / 2, Bc - rB));
              return {
                top: uc,
                maxHeight: Math.max(0, Bc - uc)
              }
            }(Mc, Pc, function(cB) {
              const Bc = cB.firstElementChild,
                nc = Bc ? Bc.scrollHeight - Bc.clientHeight : 0;
              return cB.getBoundingClientRect().height + Math.max(0, nc)
            }(Vc), qB, mu());
          cB.style.top = `${Oc}px`, cB.style.maxHeight = `${Tc}px`
        }))
      }), [nc]), (0, tu.jsx)("div", {
        ref: rB,
        className: eI()("Baf2QuestHud", {
          Expanded: Bc
        }),
        children: Ic
      })
    }

    function Uf(cB) {
      let {
        amount: Bc,
        t: nc
      } = cB;
      return (0, tu.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, tu.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, tu.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: nc(`${dP}questStepsDone`, {
            amount: String(Bc)
          })
        })]
      })
    }

    function bm(cB) {
      var Bc;
      let {
        store: nc
      } = cB;
      const Ic = (0, RP.g)(UI, nc.get()),
        [rB, uc] = (0, Vc.useState)(!1),
        {
          t: sc
        } = (0, zr.x)(),
        Mc = function() {
          const [cB, Bc] = (0, Vc.useState)(mu);
          return (0, Vc.useEffect)((() => (Bc(mu()), er(Bc))), []), cB
        }(),
        {
          openInGameMenuName: Pc,
          openEverythingMenuName: qB
        } = (0, TI.j)(["openInGameMenuName", "openEverythingMenuName"]),
        Oc = "inventory" === Pc && null === qB,
        Tc = null !== Pc && !Oc || null !== qB;
      if (! function(cB) {
          return null !== cB.name || null !== cB.side
        }(Ic) || Tc || "off" === Ic.tutorial) return null;
      const fc = DI(Ic.rows),
        mB = fc.filter((cB => cB.done)).length,
        ec = function(cB, Bc) {
          const nc = oI(cB);
          let Vc = 0;
          return cB.filter(((cB, Ic) => !!cB.justFinished || !(cB.done || Ic < nc || Vc > Bc) && (Vc++, !0)))
        }(Ic.rows, Mc ? 0 : 2),
        tB = Mc ? ec : function(cB, Bc) {
          const nc = Bc.filter((cB => !cB.justFinished));
          if (nc.length < 2) return [...Bc];
          const Vc = cB.indexOf(nc[0]),
            Ic = cB.indexOf(nc[nc.length - 1]),
            rB = new Set(DI(cB));
          return cB.filter(((cB, nc) => Bc.includes(cB) || cB.done && rB.has(cB) && nc > Vc && nc < Ic))
        }(Ic.rows, ec),
        Sc = rB ? Ic.rows : tB,
        yB = rB || Mc ? [] : function(cB, Bc) {
          const nc = new Array(Bc.length + 1).fill(0),
            Vc = new Set(DI(cB));
          let Ic = 0;
          for (const rB of cB) Ic < Bc.length && rB === Bc[Ic] ? Ic++ : rB.done && Vc.has(rB) && nc[Ic]++;
          return nc
        }(Ic.rows, tB),
        zB = rB || tB.length < Ic.rows.length || null !== Ic.reward,
        pc = vr(Ic),
        hc = pc ? sc(`${dP}questLineComplete`) : Ic.tier ? Iq(sc, Ic.tier) : sc(`${dP}currentQuest`),
        aB = function(cB) {
          var Bc, nc;
          if (vr(cB)) return null;
          const Vc = null === (Bc = cB.chapters) || void 0 === Bc ? void 0 : Bc.find((Bc => {
            let [nc] = Bc;
            return nc === cB.tier
          }));
          if (!Vc) return null;
          const Ic = Vc[1].filter((cB => !cB[4]));
          if (0 === Ic.length) return null;
          const rB = null === (nc = cB.name) || void 0 === nc ? void 0 : nc[0],
            uc = cB => Ic.findIndex((Bc => Bc[0] === rB && (!cB || !Bc[3]))),
            sc = uc(!0),
            Mc = sc >= 0 ? sc : uc(!1);
          if (Mc >= 0) return [Mc + 1, Ic.length];
          const Pc = Ic.filter((cB => cB[3])).length;
          return [Math.min(Pc + 1, Ic.length), Ic.length]
        }(Ic);
      return (0, tu.jsx)(hf.f, {
        placement: "topRight",
        children: (0, tu.jsx)(gm, {
          expanded: rB,
          inventoryOpen: Oc,
          children: (0, tu.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: AP,
            children: [null !== Ic.name && (0, tu.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [Ic.pulse > 0 && (0, tu.jsx)("span", {
                className: "Baf2QuestTrackerPulse",
                "aria-hidden": "true"
              }, Ic.pulse), (0, tu.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, tu.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [hc, aB && (0, tu.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": sc(`${dP}questPlaceLabel`, {
                      n: String(aB[0]),
                      total: String(aB[1])
                    }),
                    children: sc(`${dP}questPlace`, {
                      n: String(aB[0]),
                      total: String(aB[1])
                    })
                  }), Ic.tier && Ic.core && !pc && (0, tu.jsx)(rO, {
                    core: Ic.core,
                    t: sc
                  })]
                })
              }), (0, tu.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: sc(`${dP}${Ic.name[0]}`, cO(Ic.name[1]))
              }), (fc.length > 1 || zB) && (0, tu.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [fc.length > 1 && (0, tu.jsx)(uq, {
                  rows: fc,
                  t: sc
                }), zB && (0, tu.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": rB,
                  onClick: () => {
                    uc(!rB)
                  },
                  children: [(0, tu.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: sc(`${dP}questStepsToggle`, {
                      done: String(mB),
                      total: String(fc.length)
                    })
                  }), (0, tu.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: rB ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, tu.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [Sc.map(((cB, Bc) => {
                  var rB;
                  const uc = cB.current && Ic.depth;
                  return (0, tu.jsxs)(Vc.Fragment, {
                    children: [(null !== (rB = yB[Bc]) && void 0 !== rB ? rB : 0) > 0 && (0, tu.jsx)(Uf, {
                      amount: yB[Bc],
                      t: sc
                    }), (0, tu.jsx)(sq, {
                      row: cB,
                      view: Ic,
                      t: sc,
                      extra: uc && (0, tu.jsx)(lf, {
                        depth: uc,
                        store: nc,
                        t: sc
                      })
                    })]
                  }, cB.id)
                })), (null !== (Bc = yB[Sc.length]) && void 0 !== Bc ? Bc : 0) > 0 && (0, tu.jsx)(Uf, {
                  amount: yB[Sc.length],
                  t: sc
                }), Ic.also.length > 0 && (0, tu.jsx)(Yf, {
                  also: Ic.also,
                  view: Ic,
                  t: sc
                })]
              }), rB && Ic.reward && (0, tu.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [sc(`${dP}questReward`), (0, tu.jsx)(Bq, {
                  item: Ic.reward
                }), GP(sc, Ic.itemNames[Ic.reward], Ic.reward)]
              })]
            }), Ic.side && (0, tu.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [(0, tu.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: sc(`${dP}questSide`)
              }), (0, tu.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: sc(`${dP}${Ic.side.name[0]}`, cO(Ic.side.name[1]))
              }), (0, tu.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, tu.jsx)(sq, {
                  row: Ic.side.row,
                  view: Ic,
                  t: sc
                })
              })]
            })]
          })
        })
      })
    }
    const Zf = "baf2ToastView";
    class Qf {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = cB, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: cB,
          holdMs: Bc
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const cB = this.dropCovered();
          cB && this.show(cB.message, cB.holdMs)
        }), 250));
        const nc = this.dropCovered();
        null !== nc && (nc.holdMs > 0 || "baf2ToastCelebrate" === nc.message.baf2ToastStyle) && "baf2ToastCelebrate" !== cB.baf2ToastStyle && this.show(nc.message, nc.holdMs);
        const Vc = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== cB.baf2ToastStyle && Vc > 0) return this.pending = {
          message: cB,
          holdMs: Bc
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const cB = this.pending;
          this.pending = null, cB && this.present(cB.message, cB.holdMs)
        }), Vc));
        this.present(cB, Bc)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(cB, Bc) {
        this.clearTimers(), this.pending = null;
        const nc = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: cB.baf2ToastText,
          style: cB.baf2ToastStyle,
          swapped: nc,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === cB.baf2ToastStyle ? 1500 : Bc), this.Vu();
        const Vc = Math.min(8e3, Math.max(1e3, cB.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.OV()
        }), Vc)
      }
      OV() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Vu(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Vu()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const cB = this.covering;
        return this.covering = null, cB
      }
      Vu() {
        LI.i.Vu(Zf, this.view, !0)
      }
    }
    var Cf = nc(83);
    const vmc = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Df(cB) {
      let {
        store: Bc
      } = cB;
      const nc = (0, RP.g)(Zf, Bc.get()),
        {
          openInGameMenuName: Vc,
          openEverythingMenuName: Ic
        } = (0, TI.j)(["openInGameMenuName", "openEverythingMenuName"]),
        rB = nc && (0, tu.jsxs)("div", {
          className: eI()("Baf2Toast", vmc[nc.style], {
            Swapped: nc.swapped,
            Leaving: nc.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === nc.style && (0, tu.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, tu.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, tu.jsx)(ar.e, {
              text: nc.text
            })
          })]
        }, nc.id);
      return null !== Vc && null === Ic ? (0, Cf.createPortal)((0, tu.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: rB
      }), document.body) : (0, tu.jsx)(hf.f, {
        children: rB
      })
    }
    const Nf = "baf2AreaView";
    class Ef {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.XB = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.XB = null
      }
      arrive(cB, Bc) {
        Bc && function(cB) {
          return "home" === cB.baf2AreaPlace && void 0 !== cB.baf2AreaNameText
        }(cB) ? this.XB = cB : this.show(cB)
      }
      release() {
        const cB = this.XB;
        null !== cB && this.show(cB)
      }
      show(cB) {
        this.clearTimer(), this.XB = null;
        const Bc = void 0 === cB.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: cB,
          ms: Bc
        }, this.Vu(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Vu()
        }), Bc)
      }
      dispose() {
        this.clearTimer(), this.XB = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Vu() {
        LI.i.Vu(Nf, this.view, !0)
      }
    }

    function of(cB) {
      var Bc;
      let {
        store: nc
      } = cB;
      const {
        t: Vc
      } = (0, zr.x)(), Ic = (0, RP.g)(Nf, nc.get());
      if (!Ic) return null;
      const {
        area: rB
      } = Ic, uc = rB.baf2AreaResetMinutes;
      return (0, tu.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": rB.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Ic.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, tu.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), rB.baf2AreaHeading && (0, tu.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Vc(rB.baf2AreaHeading)
        }), (0, tu.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (Bc = rB.baf2AreaNameText) && void 0 !== Bc ? Bc : Vc(rB.baf2AreaName)
        }), rB.baf2AreaNote && (0, tu.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Vc(rB.baf2AreaNote)
        }), void 0 !== uc && (0, tu.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Vc("buildAFactory2Game:areaWildsReset", {
            time: Tr(Vc, 60 * uc)
          })
        })]
      }, Ic.id)
    }
    const Wf = "baf2GearGauge";
    class wf {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      tC(cB) {
        var Bc;
        if (this.clearLinger(), null === cB.gearPowerKind) return void this.set(null);
        const nc = "jetpack" === cB.gearPowerKind && (Vc = cB.gearChargeState, Ic = cB.gearCharge, "flying" === Vc || "charging" === Vc || "outOfCharge" === Vc || "ceiling" === Vc || "offPlot" === Vc || "noPower" === Vc && Ic <= 0);
        var Vc, Ic;
        const rB = !0 === (null === (Bc = this.view) || void 0 === Bc ? void 0 : Bc.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          uc = nc || "jetpack" === cB.gearPowerKind && rB;
        this.set({
          gauge: cB,
          jetShown: uc
        }), uc && !nc && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(cB) {
        this.view = cB, LI.i.Vu(Wf, cB, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const km = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function Xf(cB) {
      let {
        store: Bc
      } = cB;
      const nc = (0, RP.g)(Wf, Bc.get());
      return nc ? "jetpack" === nc.gauge.gearPowerKind ? (0, tu.jsx)(Hf, {
        view: nc
      }) : (0, tu.jsx)(Ff, {
        gauge: nc.gauge
      }) : null
    }

    function Hf(cB) {
      let {
        view: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)(), {
        gauge: Vc
      } = Bc, Ic = Vc.gearChargeMax > 0 ? Math.max(0, Math.min(1, Vc.gearCharge / Vc.gearChargeMax)) : 0, rB = km[Vc.gearChargeState], uc = rB ? nc(rB) : null;
      return (0, tu.jsxs)("div", {
        className: eI()("Baf2JetArc", {
          Shown: Bc.jetShown,
          Low: Ic < .2,
          Warm: Ic >= .2 && Ic < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Ic)
        },
        "aria-hidden": !Bc.jetShown,
        children: [(0, tu.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, tu.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Jf,
            pathLength: 100
          }), (0, tu.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Jf,
            pathLength: 100
          })]
        }), (0, tu.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Ic), "%"]
        }), uc && (0, tu.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: uc
        })]
      })
    }

    function Ff(cB) {
      let {
        gauge: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)(), Vc = function(cB, Bc) {
        switch (Bc.gearPowerKind) {
          case "skyPack":
            return cB("buildAFactory2Game:gearSkyPack", {
              charge: Bc.gearCharge,
              max: Bc.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return cB("buildAFactory2Game:gearIslandDraw", {
              power: dc(Bc.gearIslandPower),
              cost: dc(Bc.gearCostPerUse)
            });
          case "barrier":
            return cB("buildAFactory2Game:gearBarrier", {
              shield: Math.round(Bc.gearCharge),
              max: Bc.gearChargeMax,
              power: dc(Bc.gearIslandPower)
            });
          default:
            return null
        }
      }(nc, Bc);
      return null === Vc ? null : (0, tu.jsx)(hf.f, {
        children: (0, tu.jsx)("div", {
          className: eI()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === Bc.gearChargeState || "outOfCharge" === Bc.gearChargeState
          }),
          role: "status",
          children: Vc
        })
      })
    }
    const Jf = (() => {
      const cB = cB => {
        const Bc = cB * Math.PI / 180;
        return `${(40*Math.cos(Bc)).toFixed(2)} ${(40*Math.sin(Bc)).toFixed(2)}`
      };
      return `M ${cB(160)} A 40 40 0 1 1 ${cB(380)}`
    })();
    class jm {
      constructor(cB) {
        this.onElement = cB, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      tC(cB) {
        let Bc = cB.baf2LabelsReset || cB.baf2LabelsIsland !== this.island;
        Bc && (this.labels.clear(), this.island = cB.baf2LabelsIsland);
        for (const [nc, Vc, Ic, rB, uc] of cB.baf2LabelsList) {
          const cB = `${nc},${Vc},${Ic}`,
            sc = this.labels.get(cB);
          null === rB ? Bc = this.labels.delete(cB) || Bc : sc && sc.item === rB && (sc.count === uc || sc.count >= 0 && uc >= 0) ? sc.count !== uc && (sc.count = uc, this.writeCount(cB, uc)) : (this.labels.set(cB, {
            key: cB,
            pos: [nc, Vc, Ic],
            item: rB,
            count: uc
          }), this.writeCount(cB, uc), Bc = !0)
        }
        if (this.changes++, Bc) {
          this.snapshot = [...this.labels.values()];
          for (const cB of this.listeners) cB()
        }
      }
      bindCount(cB) {
        const Bc = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${cB}`;
        let nc = this.countRefs.get(Bc);
        return nc || (nc = nc => {
          var Vc, Ic;
          nc ? (this.countElements.set(Bc, nc), this.writeCount(cB, null !== (Vc = null === (Ic = this.labels.get(cB)) || void 0 === Ic ? void 0 : Ic.count) && void 0 !== Vc ? Vc : -1)) : (this.countElements.delete(Bc), this.countRefs.delete(Bc))
        }, this.countRefs.set(Bc, nc)), nc
      }
      setCountWords(cB) {
        this.countWords = cB;
        for (const [Bc, nc] of this.labels) this.writePart(`words|${Bc}`, cB(nc.count), nc.count)
      }
      writeCount(cB, Bc) {
        this.writePart(`bare|${cB}`, qu(Bc), Bc), this.countElements.has(`words|${cB}`) && this.writePart(`words|${cB}`, this.countWords(Bc), Bc)
      }
      writePart(cB, Bc, nc) {
        const Vc = this.countElements.get(cB);
        if (!Vc || nc < 0) return;
        const Ic = Vc.firstChild;
        Ic && 3 === Ic.nodeType && !Ic.nextSibling ? Ic.nodeValue !== Bc && (Ic.nodeValue = Bc) : Vc.textContent !== Bc && (Vc.textContent = Bc)
      }
      list() {
        return this.snapshot
      }
      at(cB) {
        return this.labels.get(`${cB[0]},${cB[1]},${cB[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      bind(cB) {
        let Bc = this.refs.get(cB);
        return Bc || (Bc = Bc => {
          const nc = this.elements.get(cB);
          var Vc, Ic;
          nc && (null === (Vc = this.onElement) || void 0 === Vc || Vc.call(this, nc, !1));
          Bc ? (this.elements.set(cB, Bc), null === (Ic = this.onElement) || void 0 === Ic || Ic.call(this, Bc, !0)) : (this.elements.delete(cB), this.refs.delete(cB))
        }, this.refs.set(cB, Bc)), Bc
      }
      onAfterRender(cB, Bc, nc, Vc) {
        for (const Ic of this.snapshot) {
          const rB = this.elements.get(Ic.key);
          if (!rB) continue;
          if (Vc(Ic.key)) {
            jf(rB, !0);
            continue
          }
          const uc = KT(rB, cB, Bc, Ic.pos, 1.1, 24);
          uc && nc.add(uc, rB, 0, !1)
        }
      }
    }
    const Rf = (0, Vc.memo)((function(cB) {
        let {
          item: Bc
        } = cB;
        return (0, tu.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, tu.jsx)(hI.d, {
            itemName: Bc,
            amount: 0
          })
        })
      })),
      im = (0, Vc.memo)((function(cB) {
        let {
          label: Bc,
          bindRef: nc,
          countRef: Vc,
          wordsRef: Ic
        } = cB;
        return (0, tu.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: nc,
          hidden: !0,
          children: [(0, tu.jsx)(Rf, {
            item: Bc.item
          }), Bc.count >= 0 && (0, tu.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, tu.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Ic
            }), (0, tu.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Vc
            })]
          })]
        })
      })),
      Kf = (0, Vc.memo)((function(cB) {
        let {
          store: Bc
        } = cB;
        const {
          t: nc
        } = (0, zr.x)(), [Ic, rB] = (0, Vc.useState)((() => Bc.list()));
        return (0, Vc.useEffect)((() => (rB(Bc.list()), Bc.subscribe((() => {
          rB(Bc.list())
        })))), [Bc]), (0, Vc.useEffect)((() => {
          Bc.setCountWords((cB => nc("buildAFactory2Game:labelSiloCount", {
            count: qu(cB)
          })))
        }), [Bc, nc]), (0, tu.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Ic.map((cB => -2 === cB.count ? null : (0, tu.jsx)(im, {
            label: cB,
            bindRef: Bc.bind(cB.key),
            countRef: Bc.bindCount(cB.key),
            wordsRef: Bc.bindCount(cB.key, "words")
          }, cB.key)))
        })
      })),
      xm = {
        read: () => !0,
        write: () => {}
      };

    function df(cB) {
      return `${cB[0]},${cB[1]},${cB[2]}`
    }

    function Af(cB) {
      let [Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc] = cB;
      const fc = void 0 === Oc || void 0 === Tc ? function(cB) {
        return [Math.floor((cB - 1) / 2), 0]
      }(rB) : [Oc, Tc];
      return {
        kind: 0 === Mc ? "reactor" : "battery",
        box: Nn([Bc, nc, Vc], Ic, rB, uc, sc, fc),
        formed: 1 === Pc,
        level: qB
      }
    }
    class Gf {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm;
        this.guideSetting = cB, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = cB.read()
      }
      tC(cB) {
        var Bc;
        const nc = new Map;
        for (const Vc of cB.baf2RxPlanList) {
          const cB = Af(Vc);
          nc.set(df(cB.box.ctrl), cB)
        }
        this.plans = nc, this.layouts = new Map((null !== (Bc = cB.baf2RxLayouts) && void 0 !== Bc ? Bc : []).map((cB => {
          let [Bc, nc, Vc, Ic] = cB;
          return [df([Bc, nc, Vc]), Ic]
        }))), this.predicted.clear(), cB.baf2RxFormedAt && (this.formed = {
          ctrl: cB.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Vc of [...this.startersOff]) {
          const cB = nc.get(Vc);
          cB && !cB.formed || this.startersOff.delete(Vc)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((cB => this.planByKey(cB)))
      }
      planAt(cB) {
        return this.planByKey(df(cB))
      }
      predictSize(cB, Bc) {
        this.predicted.set(df(cB), Bc), this.changed()
      }
      unpredict(cB) {
        this.predicted.delete(df(cB)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(cB) {
        var Bc;
        const nc = df(cB);
        return this.predicted.has(nc) ? null : null !== (Bc = this.layouts.get(nc)) && void 0 !== Bc ? Bc : null
      }
      showsStarter(cB) {
        return !this.startersOff.has(df(cB))
      }
      setStarter(cB, Bc) {
        const nc = df(cB);
        Bc ? this.startersOff.delete(nc) : this.startersOff.add(nc), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(cB) {
        this.guide = cB, this.guideSetting.write(cB), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(cB) {
        const Bc = this.plans.get(cB);
        if (!Bc) return null;
        const nc = this.predicted.get(cB);
        return nc ? {
          ...Bc,
          box: onc(Bc.box, Bc.kind, nc[0], nc[1], nc[2])
        } : Bc
      }
      changed() {
        this.version++;
        for (const cB of this.listeners) cB()
      }
    }
    var ce = nc(174);
    const Bm = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function nm(cB, Bc, nc, Vc) {
      const Ic = cB.length / 3;
      for (let rB = 0; rB < Bm.length / 3; rB++) cB.push(Bm[3 * rB] * Vc[0] / 2 + nc[0], Bm[3 * rB + 1] * Vc[1] / 2 + nc[1], Bm[3 * rB + 2] * Vc[2] / 2 + nc[2]);
      for (let rB = Ic; rB < Ic + 24; rB += 4) Bc.push(rB, rB + 1, rB + 2, rB, rB + 2, rB + 3)
    }

    function Vm(cB, Bc, nc) {
      const Vc = Bc[0][0],
        Ic = [],
        rB = [];
      for (const [uc, sc] of Bc) nm(Ic, rB, [uc[0] - Vc[0], uc[1] - Vc[1], uc[2] - Vc[2]], sc);
      return cB.createGameMesh({
        positions: Ic,
        indices: rB
      }, nc, Vc)
    }

    function Im(cB, Bc) {
      const nc = cB.w - 2,
        Vc = cB.d - 2;
      return 1 === function(cB, Bc, nc, Vc) {
        const [Ic, rB, uc] = cB;
        if (Number(Ic <= 2) + Number(rB <= 2) + Number(uc <= 2) >= 2) return function(cB, Bc, nc) {
          return (cB + Bc + nc) % 2 === 0 ? 1 : 3
        }(Bc, nc, Vc);
        const [sc, Mc] = Ic >= rB && Ic >= uc ? [nc, Vc] : rB >= uc ? [Bc, Vc] : [Bc, nc];
        return sc % 2 === 0 && Mc % 2 === 0 ? 1 : 3
      }([nc, cB.h - 2, Vc], Bc % nc, Math.floor(Bc / (nc * Vc)), Math.floor(Bc / nc) % Vc) ? "rod" : "channel"
    }

    function re(cB, Bc, nc) {
      if ("reactor" !== cB.kind || cB.formed || !Bc) return !1;
      const Vc = kV(cB.box);
      for (let Ic = 0; Ic < Vc; Ic++) {
        const cB = nc(Ic);
        if (null !== cB && aV(cB)) return !1
      }
      return !0
    }

    function um(cB, Bc, nc, Vc, Ic) {
      var rB;
      let uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const sc = Rn(cB.box, Bc),
        Mc = dn(cB.kind, sc, nc);
      if ("wrong" === Mc || "blocked" === Mc) return "wrong";
      if (!Ic) return null;
      if ("inside" === sc && "reactor" === cB.kind && "Air" === lnc(nc)) {
        if (null !== uc) {
          var Pc;
          const nc = EO[oO(uc, iV(cB.box, Bc))];
          return nc && null !== (Pc = tP(nc)) && void 0 !== Pc ? Pc : null
        }
        if (Vc) return Im(cB.box, iV(cB.box, Bc))
      }
      if ("missing" !== Mc) return null;
      const qB = An(cB.kind, sc);
      return null === qB ? null : null !== (rB = tP(qB)) && void 0 !== rB ? rB : null
    }
    const sm = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Mm(cB, Bc, nc) {
      const Vc = nc => {
        const Vc = Bc(Jn(cB.box, nc));
        return null !== Vc && function(cB, Bc) {
          return "reactor" !== cB.kind || Bc !== Hn(cB.box) && "inside" !== Rn(cB.box, Bc)
        }(cB, nc) && "ok" !== dn(cB.kind, Rn(cB.box, nc), Vc)
      };
      if (nc) {
        const rB = jV(cB.box, [Math.floor(nc[0]), Math.floor(nc[1]), Math.floor(nc[2])]);
        if (rB >= 0 && (Vc(rB) || (Ic = rB, "reactor" === cB.kind && "inside" === Rn(cB.box, Ic) && "Air" === Bc(Jn(cB.box, Ic))))) return rB
      }
      var Ic;
      const rB = kV(cB.box);
      for (let uc = 0; uc < rB; uc++)
        if (Vc(uc)) return uc;
      return -1
    }

    function Pm(cB, Bc) {
      return Math.floor(Bc / (cB.w * cB.d))
    }

    function qe(cB, Bc, nc) {
      return nc >= 0 && Pm(cB, Bc) > Pm(cB, nc)
    }

    function Om(cB, Bc) {
      return Bc >= 0 && cB.h >= 3 && Pm(cB, Bc) === cB.h - 1
    }

    function Tm(cB) {
      const Bc = lnc(cB);
      return Bc === On || "Collider" === Bc || "Laser" === Bc || Bc.startsWith("_Collider ")
    }

    function fm(cB, Bc, nc, Vc) {
      if (Vc(cB)) return null;
      if (!sm.every((Bc => {
          let [Vc, Ic, rB] = Bc;
          const uc = nc([cB[0] + Vc, cB[1] + Ic, cB[2] + rB]);
          return null !== uc && !Qn("reactor", uc) && "reactor" !== Yn(uc)
        }))) return null;
      const Ic = Cn("reactor").min,
        rB = Nn([cB[0], cB[1], cB[2]], function(cB, Bc) {
          const nc = Bc[0] - (cB[0] + .5),
            Vc = Bc[2] - (cB[2] + .5);
          return Math.abs(nc) >= Math.abs(Vc) ? nc >= 0 ? 2 : 4 : Vc >= 0 ? 1 : 3
        }(cB, Bc), Ic, Ic, Ic, En("reactor", Ic)),
        uc = Hn(rB);
      let sc = !0;
      for (let Mc = 0; Mc < kV(rB) && sc; Mc++) {
        if (Mc === uc) continue;
        const cB = Jn(rB, Mc),
          Bc = nc(cB);
        sc = !Vc(cB) && (null === Bc || !Tm(Bc))
      }
      return {
        box: rB,
        fits: sc
      }
    }
    const me = eM,
      em = "baf2Goal",
      te = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Sm = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      ye = .4;

    function ze(cB, Bc) {
      let [nc, Vc, Ic] = cB;
      const rB = lM([nc - .02, Vc - .02, Ic - .02], [nc + 1.02, Vc + 1.02, Ic + 1.02], .07);
      return Bc && (rB.push([
        [nc + .5, Vc + 1 + .7, Ic + .5],
        [.08, 1.4, .08]
      ]), rB.push([
        [nc + .5, Vc + 1 + 1.4 + .2, Ic + .5],
        [ye, ye, ye]
      ])), rB
    }

    function pm(cB, Bc) {
      let [nc, Vc, Ic] = Bc;
      return cB.isBlockInLoadedChunk(nc, Vc, Ic) ? cB.blockIdToBlockName(cB.getBlockId(nc, Vc, Ic)) : null
    }
    let hm = null;
    const ae = new Set;
    let lm = null;

    function Ym(cB) {
      hm = cB;
      for (const Bc of ae) Bc(cB)
    }
    class Lm {
      constructor(cB) {
        var Bc;
        this.plans = cB, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (Bc = cB => {
          var Bc, nc;
          this.setGoal(null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.goal) && void 0 !== Bc ? Bc : null, null !== (nc = null === cB || void 0 === cB ? void 0 : cB.startsBattery) && void 0 !== nc && nc)
        }, lm ??= [LI.i.subscribe("setDirectionArrow", (cB => {
          let {
            id: Bc,
            position: nc,
            text: Vc
          } = cB;
          Bc === em && Ym({
            goal: [Math.floor(nc[0]), Math.floor(nc[1]), Math.floor(nc[2])],
            startsBattery: JSON.stringify(null !== Vc && void 0 !== Vc ? Vc : null).includes("arrowStartBattery")
          })
        })), LI.i.subscribe("clearDirectionArrow", (cB => {
          let {
            id: Bc
          } = cB;
          null !== Bc && Bc !== em || Ym(null)
        }))], ae.add(Bc), Bc(hm), () => {
          ae.delete(Bc)
        })
      }
      onAfterRender(cB, Bc) {
        const nc = performance.now();
        if (this.cues.length > 0) {
          const Bc = .55 + .45 * Math.sin(nc / 1100 * Math.PI * 2);
          for (const nc of this.cues) cB.setGameMesh(nc, {
            visibility: Bc
          })
        }
        if (nc - this.lastCheckMs < 150) return;
        this.lastCheckMs = nc;
        const Vc = this.plans.all().filter((cB => {
            const [nc, Vc, Ic] = cB.box.ctrl;
            return (!cB.formed || null !== this.plans.layoutOf(cB.box.ctrl)) && (nc - Bc[0]) ** 2 + (Vc - Bc[1]) ** 2 + (Ic - Bc[2]) ** 2 <= 2304
          })),
          Ic = function(cB, Bc) {
            const nc = ce.e.kI,
              Vc = new Map;
            for (const rB of Bc) {
              const Bc = Jn(rB.box, 0),
                uc = Jn(rB.box, kV(rB.box) - 1),
                sc = [Math.min(Bc[0], uc[0]), Math.min(Bc[1], uc[1]), Math.min(Bc[2], uc[2])].map((cB => Math.floor(cB / nc))),
                Mc = [Math.max(Bc[0], uc[0]), Math.max(Bc[1], uc[1]), Math.max(Bc[2], uc[2])].map((cB => Math.floor(cB / nc)));
              for (let nc = sc[0]; nc <= Mc[0]; nc++)
                for (let Bc = sc[1]; Bc <= Mc[1]; Bc++)
                  for (let rB = sc[2]; rB <= Mc[2]; rB++) {
                    var Ic;
                    Vc.set(`${nc},${Bc},${rB}`, null !== (Ic = cB.getChunkVersion(nc, Bc, rB)) && void 0 !== Ic ? Ic : -1)
                  }
            }
            return Vc
          }(cB, Vc);
        this.plans.getVersion() === this.storeVersion && (function(cB, Bc) {
          if (cB.size !== Bc.size) return !1;
          for (const [nc, Vc] of cB)
            if (Bc.get(nc) !== Vc) return !1;
          return !0
        }(Ic, this.chunkVersions) || nc - this.lastRescanMs < 600) || (this.lastRescanMs = nc, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Ic, this.redraw(cB, Vc))
      }
      dispose(cB) {
        this.unwatch(), hm = null, this.clearMeshes(cB), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(cB, Bc) {
        var nc;
        (null === cB || void 0 === cB ? void 0 : cB.join()) === (null === (nc = this.goal) || void 0 === nc ? void 0 : nc.join()) && Bc === this.startsBattery || (this.goal = cB, this.startsBattery = Bc, this.storeVersion = -1)
      }
      redraw(cB, Bc) {
        const nc = Bc => pm(cB, Bc),
          Vc = new Map,
          Ic = [],
          rB = this.plans.guideOn();
        for (const Pc of Bc) {
          const cB = rB && re(Pc, this.plans.showsStarter(Pc.box.ctrl), (cB => nc(Jn(Pc.box, cB)))),
            Bc = "reactor" === Pc.kind ? this.plans.layoutOf(Pc.box.ctrl) : null,
            uc = rB && !Pc.formed ? Mm(Pc, nc, this.goal) : -1;
          uc >= 0 && Ic.push([Jn(Pc.box, uc), Om(Pc.box, uc)]);
          const sc = kV(Pc.box);
          for (let Ic = 0; Ic < sc; Ic++) {
            const sc = Jn(Pc.box, Ic),
              Mc = nc(sc),
              qB = null === Mc ? null : um(Pc, Ic, Mc, cB, rB, Bc);
            if (null !== qB) {
              const cB = "wrong" !== qB && qe(Pc.box, Ic, uc),
                Bc = cB ? `${qB}Dim` : qB;
              let nc = Vc.get(Bc);
              nc || (nc = {
                draw: {
                  ghost: qB,
                  dim: cB
                },
                list: []
              }, Vc.set(Bc, nc)), nc.list.push(sc)
            }
          }
        }
        if (rB && this.startsBattery && this.goal) {
          const [cB, Bc, Ic] = this.goal, rB = [];
          for (const [Vc, uc, sc] of te) {
            const Mc = [cB + Vc, Bc + uc, Ic + sc];
            "Air" === nc(Mc) && rB.push(Mc)
          }
          if (rB.length > 0) {
            var uc;
            const cB = null !== (uc = Vc.get("cell")) && void 0 !== uc ? uc : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            cB.list.push(...rB), Vc.set("cell", cB)
          }
        }
        const sc = [...Vc.keys()].sort(),
          Mc = [...sc.map((cB => `${cB}:${Vc.get(cB).list.join(";")}`)), `cue:${Ic.join(";")}`].join("|");
        if (Mc !== this.shownKey) {
          this.shownKey = Mc, this.clearMeshes(cB);
          for (const Bc of sc) {
            const {
              draw: nc,
              list: Ic
            } = Vc.get(Bc);
            this.meshes.push(this.build(cB, nc, Ic))
          }
          for (const [Bc, nc] of Ic) this.cues.push(Vm(cB, ze(Bc, nc), Sm))
        }
      }
      build(cB, Bc, nc) {
        let {
          ghost: Vc,
          dim: Ic
        } = Bc;
        const {
          size: rB,
          colour: uc,
          alpha: sc
        } = me[Vc], Mc = nc[0], Pc = [], qB = [];
        for (const [Oc, Tc, fc] of nc) nm(Pc, qB, [Oc - Mc[0] + .5, Tc - Mc[1] + .5, fc - Mc[2] + .5], [rB, rB, rB]);
        return cB.createGameMesh({
          positions: Pc,
          indices: qB
        }, {
          rgb: uc,
          alpha: sc * (Ic ? .3 : 1)
        }, Mc)
      }
      clearMeshes(cB) {
        for (const Bc of [...this.meshes, ...this.cues]) cB.disposeGameMesh(Bc);
        this.meshes = [], this.cues = []
      }
    }
    const ge = [.56, .83, 1],
      Um = [1, .3, .25];
    class be {
      constructor(cB) {
        this.plans = cB, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(cB, Bc, nc) {
        var Vc;
        const Ic = performance.now();
        if (Ic - this.lastCheckMs < 150) return;
        this.lastCheckMs = Ic;
        const rB = Bc => pm(cB, Bc),
          uc = null === (Vc = cB.lMc(Bc)) || void 0 === Vc ? void 0 : Vc.name,
          sc = uc && "Reactor Frame" === lnc(uc) ? cB.getTargetedBlock() : null,
          Mc = sc ? [sc.Xr[0], sc.Xr[1], sc.Xr[2]] : null,
          Pc = null !== Mc && "Air" === rB(Mc) && Mc.every(((cB, Bc) => Math.abs(cB + .5 - nc[Bc]) <= 8)) ? fm(Mc, nc, rB, (cB => this.inPlan(cB))) : null,
          qB = Pc ? `${Pc.box.ctrl.join()}|${Pc.box.rot}|${Pc.fits}` : "";
        qB !== this.shownKey && this.show(cB, qB, Pc)
      }
      dispose(cB) {
        this.clear(cB), this.shownKey = ""
      }
      inPlan(cB) {
        return this.plans.all().some((Bc => jV(Bc.box, cB) >= 0))
      }
      show(cB, Bc, nc) {
        if (this.clear(cB), this.shownKey = Bc, !nc) return;
        const {
          box: Vc,
          fits: Ic
        } = nc, rB = Ic ? ge : Um, {
          lo: uc,
          hi: sc
        } = aP(Vc);
        this.meshes.push(Vm(cB, lM(uc, sc, .05), {
          rgb: rB,
          alpha: 1
        }));
        const Mc = [],
          Pc = Jn(Vc, 0)[1];
        for (let qB = 0; qB < Vc.w * Vc.d; qB++) {
          const [cB, , Bc] = Jn(Vc, qB);
          Mc.push([
            [cB + .5, Pc + .02 + .01, Bc + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Vm(cB, Mc, {
          rgb: rB,
          alpha: .25
        }))
      }
      clear(cB) {
        for (const Bc of this.meshes) cB.disposeGameMesh(Bc);
        this.meshes = []
      }
    }
    const Zm = "buildAFactory2Game:";

    function Qm(cB, Bc, nc) {
      const Vc = cB => {
          const [nc, Vc, Ic] = cB.box.ctrl;
          return nc === Bc[0] && Vc === Bc[1] && Ic === Bc[2]
        },
        Ic = cB.find((cB => Vc(cB) || jV(cB.box, Bc) >= 0));
      if (!Ic) return null;
      const rB = function(cB, Bc, nc) {
        const {
          w: Vc,
          h: Ic,
          d: rB
        } = cB.box, uc = "reactor" === cB.kind ? `${Zm}rxTitle` : `${Zm}batTitle`;
        if (cB.formed) return {
          key: `${Zm}lookPlanFormed`,
          kindKey: uc,
          w: Vc,
          h: Ic,
          d: rB,
          count: 0
        };
        let sc = 0,
          Mc = 0;
        for (let qB = 0; qB < kV(cB.box); qB++) {
          const Bc = nc(Jn(cB.box, qB)),
            Vc = null === Bc ? "ok" : dn(cB.kind, Rn(cB.box, qB), Bc);
          sc += "missing" === Vc ? 1 : 0, Mc += "wrong" === Vc || "blocked" === Vc ? 1 : 0
        }
        const Pc = function(cB, Bc, nc) {
          if (Bc < 0 || null === nc) return;
          const Vc = Rn(cB.box, Bc),
            Ic = dn(cB.kind, Vc, nc);
          return "blocked" === Ic ? `${Zm}lookWhy_blocked` : "wrong" === Ic ? "ctrl" === Vc ? `${Zm}lookWhy_ctrl` : `${Zm}lookWhy_reactor_${Vc}` : void 0
        }(cB, jV(cB.box, Bc), nc([Bc[0], Bc[1], Bc[2]]));
        if (sc > 0) return {
          key: `${Zm}lookPlanToBuild`,
          kindKey: uc,
          w: Vc,
          h: Ic,
          d: rB,
          count: sc,
          why: Pc
        };
        if (Mc > 0) return {
          key: `${Zm}lookPlanTakeOut`,
          kindKey: uc,
          w: Vc,
          h: Ic,
          d: rB,
          count: Mc,
          why: Pc
        };
        return {
          key: "reactor" === cB.kind ? `${Zm}lookPlanNoRods` : `${Zm}lookPlanDone`,
          kindKey: uc,
          w: Vc,
          h: Ic,
          d: rB,
          count: 0
        }
      }(Ic, Bc, nc);
      return "reactor" === Ic.kind && Vc(Ic) ? {
        ...rB,
        ctrl: !0
      } : rB
    }

    function Cm(cB, Bc) {
      return cB === Bc || null !== cB && null !== Bc && cB.key === Bc.key && cB.kindKey === Bc.kindKey && cB.w === Bc.w && cB.h === Bc.h && cB.d === Bc.d && cB.count === Bc.count && cB.why === Bc.why && cB.ctrl === Bc.ctrl
    }

    function ve() {
      return performance.now()
    }
    class Dm {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ve;
        this.ticket = cB, this.sent = Bc, this.backstopMs = nc, this.now = Vc, this.queuedAt = void 0, this.queuedAt = Vc()
      }
      answered() {
        const cB = this.now(),
          Bc = this.sent.leftAt(this.ticket);
        return null !== Bc && cB - Bc > 4e3 || cB - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Nm {
      constructor() {
        this.echoes = []
      }
      add(cB) {
        this.echoes = this.echoes.filter((cB => !cB.answered())), this.echoes.push(cB)
      }
      answered() {
        var cB, Bc;
        return null === (cB = null === (Bc = this.echoes.at(-1)) || void 0 === Bc ? void 0 : Bc.answered()) || void 0 === cB || cB
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((cB => cB.answered()))
      }
      age() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.echoes.at(-1)) || void 0 === Bc ? void 0 : Bc.age()) && void 0 !== cB ? cB : null
      }
      clear() {
        this.echoes = []
      }
    }
    class Em {
      constructor(cB) {
        this.send = cB, this.value = null, this.sent = null, this.echoes = new Nm, this.down = !1, this.timer = null
      }
      shown(cB) {
        return null === this.value ? cB : this.down || this.value !== this.sent ? this.value : cB === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), cB) : this.value
      }
      pendingFor(cB) {
        return null !== this.value && this.value === this.sent && cB !== this.value ? this.echoes.age() : null
      }
      assume(cB, Bc) {
        this.disarm(), this.down = !1, this.value = cB, this.sent = cB, this.echoes.clear(), this.echoes.add(Bc)
      }
      press() {
        this.down = !0
      }
      drag(cB) {
        this.value = cB, this.arm(this.down ? 1e3 : 400)
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
      arm(cB) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), cB)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class om {
      constructor() {
        this.pending = new Map
      }
      set(cB, Bc, nc) {
        var Vc;
        const Ic = null !== (Vc = this.pending.get(cB)) && void 0 !== Vc ? Vc : {
          on: Bc,
          echoes: new Nm
        };
        Ic.on = Bc, Ic.echoes.add(nc), this.pending.set(cB, Ic)
      }
      shown(cB) {
        let Bc = cB;
        for (const [nc, {
            on: Vc,
            echoes: Ic
          }] of this.pending) 0 !== (cB & nc) === Vc && Ic.agreeCounts() || Ic.answered() ? this.pending.delete(nc) : Bc = Vc ? Bc | nc : Bc & ~nc;
        return Bc
      }
      pendingMask() {
        let cB = 0;
        for (const Bc of this.pending.keys()) cB |= Bc;
        return cB
      }
      pendingFor(cB) {
        let Bc = null;
        for (const [Vc, {
            on: Ic,
            echoes: rB
          }] of this.pending) {
          if (void 0 !== cB && 0 !== (cB & Vc) === Ic) continue;
          const uc = rB.age();
          var nc;
          if (null !== uc) Bc = Math.max(null !== (nc = Bc) && void 0 !== nc ? nc : 0, uc)
        }
        return Bc
      }
      clear() {
        this.pending.clear()
      }
    }
    class Wm {
      constructor() {
        this.dims = null, this.echoes = new Nm, this.unmet = null
      }
      shown(cB) {
        var Bc;
        return this.dims && (wm(this.dims, cB) && this.echoes.agreeCounts() || this.echoes.answered()) && (wm(this.dims, cB) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Bc = this.dims) && void 0 !== Bc ? Bc : cB
      }
      takeUnmet() {
        const cB = this.unmet;
        return this.unmet = null, cB
      }
      set(cB, Bc) {
        this.dims = cB, this.echoes.add(Bc)
      }
      pendingFor(cB) {
        return null === this.dims || cB && wm(this.dims, cB) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function wm(cB, Bc) {
      return cB[0] === Bc[0] && cB[1] === Bc[1] && cB[2] === Bc[2]
    }
    class ke {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve;
        this.now = cB, this.taps = new Map
      }
      tap(cB, Bc, nc) {
        return !this.busy(cB) && (this.taps.set(cB, {
          at: this.now(),
          done: Bc
        }), nc(), !0)
      }
      settle(cB) {
        for (const [Bc, nc] of [...this.taps]) nc.done(cB) && this.taps.delete(Bc)
      }
      busy(cB) {
        const Bc = this.taps.get(cB);
        return !!Bc && (!(this.now() - Bc.at >= 3e3) || (this.taps.delete(cB), !1))
      }
      busyIds() {
        const cB = new Set;
        for (const Bc of [...this.taps.keys()]) this.busy(Bc) && cB.add(Bc);
        return cB
      }
      clear() {
        this.taps.clear()
      }
    }

    function Xm(cB) {
      return {
        send: Bc => cB.track(Bc),
        sendUrgent: (Bc, nc) => cB.track(Bc, {
          urgent: !0,
          supersedes: nc
        }),
        leftAt: Bc => cB.leftAt(Bc),
        holdReserve: () => cB.holdUrgentReserve(),
        answerMs: Yu
      }
    }

    function Hm() {
      return performance.now()
    }

    function Fm(cB) {
      const Bc = cB.baf2RxNeed.map((cB => {
        let [Bc, nc] = cB;
        return [Bc, nc]
      }));
      return JSON.stringify([cB.baf2RxFormed, Bc, cB.baf2RxBad, cB.baf2RxCells])
    }

    function Jm(cB, Bc) {
      const nc = 0 !== (Bc & rn),
        Vc = 0 !== (cB.baf2RxFlags & rn);
      return !nc || Vc || "running" !== cB.baf2RxState && "idle" !== cB.baf2RxState ? !nc && Vc && "scram" === cB.baf2RxState && cB.baf2RxFuel > 0 ? "idle" : cB.baf2RxState : "scram"
    }

    function je(cB) {
      return JSON.stringify([cB.baf2BatFormed, cB.baf2BatNeed, cB.baf2BatBad])
    }

    function Rm(cB) {
      return cB.join(",")
    }
    class ie {
      constructor() {
        this.listeners = new Set
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      notify() {
        for (const cB of this.listeners) cB()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class Km {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(cB, Bc) {
        this.lastAt = cB, this.lastUntil = cB + Bc
      }
      answered(cB) {
        return this.lastAt >= cB || cB < this.lastUntil
      }
    }
    class xe {
      constructor(cB, Bc) {
        this.link = cB, this.now = Bc, this.hold = new Wm, this.picked = null, this.notTaken = null
      }
      shown(cB) {
        const Bc = this.hold.shown(cB);
        if (this.hold.takeUnmet() && this.picked) {
          var nc;
          const {
            plans: Bc,
            ctrl: Vc,
            at: Ic
          } = this.picked;
          this.picked = null, Bc.unpredict(Vc), null === (nc = this.notTaken) || void 0 === nc || nc.call(this, cB, Ic)
        }
        return Bc
      }
      pendingFor(cB) {
        return this.hold.pendingFor(cB)
      }
      Vn(cB, Bc, nc) {
        cB.predictSize(Bc, nc), this.picked = {
          plans: cB,
          ctrl: Bc,
          at: this.now()
        };
        const Vc = this.link.send(IB(Bc, "plan", ...nc));
        this.hold.set(nc, new Dm(Vc, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class dm {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Hm;
        this.plans = cB, this.readInterior = Bc, this.link = nc, this.now = Vc, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new om, this.throttle = void 0, this.oneShots = void 0, this.listeners = new ie, this.redraw = null, this.releaseReserve = null, this.size = new xe(nc, Vc), this.oneShots = new ke(Vc), this.throttle = new Em((cB => this.echo(this.link.send(this.command("throttle", cB)))))
      }
      set(cB) {
        !cB.baf2RxOpen && this.raw && Rm(this.raw.baf2RxAt) === Rm(cB.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(cB), this.Vu(cB)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(cB) {
        this.size.notTaken = cB
      }
      resize(cB) {
        this.raw && (this.size.Vn(this.plans, this.raw.baf2RxAt, cB), this.Vu(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const cB = this.raw.baf2RxAt;
        this.plans.setStarter(cB, !this.plans.showsStarter(cB)), this.Vu(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Vu(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Vu(this.raw)
      }
      send(cB) {
        if (this.raw) {
          for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
          this.link.send(this.command(cB, ...nc))
        }
      }
      tap(cB, Bc) {
        this.raw && this.oneShots.tap(cB, function(cB, Bc) {
          if ("start" === cB) return cB => 0 === (cB.baf2RxFlags & rn);
          if ("odConfirm" === cB) return cB => 0 !== (cB.baf2RxFlags & uB);
          const nc = Fm(Bc);
          return cB => Fm(cB) !== nc
        }(cB, this.raw), Bc) && ("start" === cB && (this.startedAt = this.now()), this.Vu(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(rn, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(cB, Bc) {
        if (!this.raw) return;
        const nc = cB === rn ? this.command(Bc ? "scram" : "start") : this.command("od", Bc ? 1 : 0),
          Vc = Bc && cB === rn,
          Ic = `${VB} ${this.raw.baf2RxAt.join(" ")} `,
          rB = this.echo(Vc ? this.link.sendUrgent(nc, (cB => {
            const Bc = cB.startsWith(Ic) ? cB.slice(Ic.length).split(" ")[0] : null;
            return "throttle" === Bc || "start" === Bc
          })) : this.link.send(nc));
        this.flags.set(cB, Bc, rB), Vc && this.throttle.assume(0, rB), this.Vu(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(cB) {
        this.throttle.drag(cB), this.raw && this.Vu(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Vu(this.raw)
      }
      subscribe(cB) {
        return this.listeners.subscribe(cB)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var cB;
        this.throttle.release(), null === (cB = this.releaseReserve) || void 0 === cB || cB.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(cB) {
        for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
        return IB(this.raw.baf2RxAt, cB, ...nc)
      }
      echo(cB) {
        return new Dm(cB, this.link, this.link.answerMs, this.now)
      }
      Vu(cB) {
        var Bc;
        this.raw = cB;
        const nc = this.flags.shown(cB.baf2RxFlags),
          Vc = {
            ...cB,
            baf2RxFlags: nc,
            baf2RxTarget: this.throttle.shown(cB.baf2RxTarget),
            baf2RxState: Jm(cB, nc)
          },
          Ic = this.size.shown(Vc.baf2RxDims),
          rB = this.throttle.pendingFor(),
          uc = [this.throttle.pendingFor(cB.baf2RxTarget), this.flags.pendingFor(cB.baf2RxFlags), this.size.pendingFor(cB.baf2RxDims)].filter((cB => null !== cB)),
          sc = uc.length > 0 ? Math.max(...uc) : null,
          Mc = this.oneShots.busyIds(),
          Pc = Vc.baf2RxAt;
        let qB, Oc, Tc = null,
          fc = [Math.max(0, Ic[0] - 2), Math.max(0, Ic[1] - 2), Math.max(0, Ic[2] - 2)];
        if (Vc.baf2RxFormed) {
          const [cB, Bc, nc] = Vc.baf2RxDims;
          fc = [Math.max(0, cB - 2), Math.max(0, Bc - 2), Math.max(0, nc - 2)], qB = Array.from(Vc.baf2RxCells, Number), Oc = `${fc.join(",")}:${Vc.baf2RxCells}`
        } else {
          var mB;
          const cB = null === (mB = this.plans.planAt(Pc)) || void 0 === mB ? void 0 : mB.box,
            Bc = cB ? onc(cB, "reactor", ...Ic) : Nn(Pc, 1, ...Ic, En("reactor", Ic[0])),
            nc = this.readInterior(Bc);
          Tc = Jsc(fc, nc), qB = nc, Oc = `${fc.join(",")}:${nc.join("")}`
        }(null === (Bc = this.looksOf) || void 0 === Bc ? void 0 : Bc.key) !== Oc && (this.looksOf = {
          key: Oc,
          looks: ds(fc, qB)
        }), this.view = {
          status: Vc,
          dims: Ic,
          plan: Tc,
          inner: fc,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Pc),
          odConfirmed: this.odConfirmed || 0 !== (Vc.baf2RxFlags & TB),
          guide: this.plans.guideOn(),
          throttlePending: null !== rB,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== sc && sc >= 5e3,
          busy: Mc,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== sc || Mc.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Vu(this.raw)
        }), 250))
      }
    }
    class Am {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hm;
        this.plans = cB, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new ie, this.redraw = null, this.size = new xe(Bc, nc), this.oneShots = new ke(nc)
      }
      set(cB) {
        !cB.baf2BatOpen && this.view && Rm(this.view.status.baf2BatAt) === Rm(cB.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(cB), this.Vu(cB)
      }
      tap(cB, Bc) {
        if (!this.view) return;
        const nc = je(this.view.status);
        this.oneShots.tap(cB, (cB => je(cB) !== nc), Bc) && this.Vu(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(cB) {
        this.size.notTaken = cB
      }
      resize(cB) {
        this.view && (this.size.Vn(this.plans, this.view.status.baf2BatAt, cB), this.Vu(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Vu(this.view.status)
      }
      subscribe(cB) {
        return this.listeners.subscribe(cB)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Vu(cB) {
        const Bc = this.size.shown(cB.baf2BatDims),
          nc = this.oneShots.busyIds();
        this.view = {
          status: cB,
          dims: Bc,
          Qc: OM(Bc, cB.baf2BatDims) ? cB.baf2BatCapacity : cP(...Bc),
          guide: this.plans.guideOn(),
          busy: nc
        }, this.listeners.notify(), nc.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Vu(this.view.status)
        }), 250))
      }
    }
    const Gm = "buildAFactory2Game:";

    function ct() {
      var cB;
      const Bc = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!Bc) return null;
      const nc = Bc.querySelector(".ExitButton");
      return function(cB, Bc) {
        const nc = Bc ? Bc.left - 8 : cB.right;
        return {
          left: cB.left,
          top: cB.top,
          width: Math.max(0, nc - cB.left),
          height: cB.height
        }
      }(Bc.getBoundingClientRect(), null !== (cB = null === nc || void 0 === nc ? void 0 : nc.getBoundingClientRect()) && void 0 !== cB ? cB : null)
    }
    const Be = (0, Vc.memo)((function(cB) {
      let {
        store: Bc
      } = cB;
      const {
        t: nc
      } = (0, zr.x)(), [Ic, rB] = (0, Vc.useState)((() => Bc.get())), [uc, sc] = (0, Vc.useState)((() => performance.now()));
      (0, Vc.useEffect)((() => (rB(Bc.get()), Bc.subscribe((() => {
        rB(Bc.get()), sc(performance.now())
      })))), [Bc]);
      const {
        alarm: Mc,
        boomAt: Pc
      } = Ic, qB = null !== Mc && null !== Mc.secs, [Oc, Tc] = (0, Vc.useState)(null);
      (0, Vc.useEffect)((() => {
        if (!qB) return;
        Tc(ct());
        const cB = setInterval((() => {
          sc(performance.now()), Tc(ct())
        }), 250);
        return () => {
          clearInterval(cB)
        }
      }), [qB]);
      const [fc, mB] = (0, Vc.useState)(!1);
      return (0, Vc.useEffect)((() => {
        if (Pc === -1 / 0) return;
        mB(!0);
        const cB = setTimeout((() => {
          mB(!1)
        }), 1300);
        return () => {
          clearTimeout(cB)
        }
      }), [Pc]), (0, tu.jsxs)(tu.Fragment, {
        children: [null !== Mc && (0, tu.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: nc(Mc.hot ? `${Gm}rxAlarmSiren` : `${Gm}rxAlarmDamaged`, {
            amount: String(Mc.damage)
          })
        }), null !== Mc && null !== Mc.secs && (0, tu.jsx)("div", {
          className: Oc ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Oc && void 0 !== Oc ? Oc : void 0,
          "aria-live": "assertive",
          children: nc(`${Gm}rxAlarmCountdown`, {
            amount: String((ec = Mc.secs, tB = uc - Mc.receivedAt, Math.max(1, Math.ceil(ec - tB / 1e3))))
          })
        }), fc && (0, tu.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var ec, tB
    }));
    class ne {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      tC(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const nc = cB.baf2RxAlarmAt.join(",");
        let Vc = this.snapshot.boomAt;
        if (cB.baf2RxAlarmBoom) this.byReactor.delete(nc), Vc = Bc;
        else if (cB.baf2RxAlarmDamage <= 0) this.byReactor.delete(nc);
        else {
          var Ic;
          this.byReactor.set(nc, {
            damage: cB.baf2RxAlarmDamage,
            secs: null !== (Ic = cB.baf2RxAlarmSecs) && void 0 !== Ic ? Ic : null,
            hot: !0 === cB.baf2RxAlarmHot,
            receivedAt: Bc
          })
        }
        this.Vu(Vc)
      }
      retain(cB) {
        let Bc = !1;
        for (const nc of [...this.byReactor.keys()]) cB.has(nc) || (this.byReactor.delete(nc), Bc = !0);
        Bc && this.Vu(this.snapshot.boomAt)
      }
      has(cB) {
        return this.byReactor.has(cB)
      }
      get() {
        return this.snapshot
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      Vu(cB) {
        let Bc = null;
        for (const nc of this.byReactor.values())(!Bc || nc.damage > Bc.damage) && (Bc = nc);
        this.snapshot = {
          alarm: Bc,
          boomAt: cB
        };
        for (const nc of this.listeners) nc()
      }
    }
    const Ve = {
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

    function Ie(cB) {
      return [cB[0], cB[1], cB[2]]
    }

    function rt(cB) {
      return `${cB[0]},${cB[1]},${cB[2]}`
    }
    class ue {
      constructor(cB) {
        if (this.plans = cB, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var cB;
            return {
              active: this.glows.flatMap((cB => {
                let {
                  record: Bc
                } = cB;
                return Bc ? [Bc] : []
              })),
              log: [...null !== (cB = this.devLog) && void 0 !== cB ? cB : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var cB;
        return null !== (cB = this.devLog) && void 0 !== cB ? cB : []
      }
      check(cB, Bc, nc) {
        const Vc = new Set(Bc.map((cB => rt(cB.box.ctrl))));
        for (const uc of function(cB, Bc) {
            const nc = [],
              Vc = new Map(cB);
            cB.clear();
            for (const Ic of Bc) {
              const Bc = df(Ic.box.ctrl),
                rB = Ic.formed ? Ic.level : 0;
              cB.set(Bc, rB), rB > 0 && 0 === Vc.get(Bc) && nc.push(Ic)
            }
            return nc
          }(this.levels, this.plans.all())) Vc.has(rt(uc.box.ctrl)) && this.show(cB, uc, "on", nc);
        const Ic = this.plans.lastFormed();
        if (null === Ic || Ic.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Ic.receivedAt;
        const rB = function(cB, Bc) {
          var nc;
          const Vc = df(cB);
          return null !== (nc = Bc.find((cB => df(cB.box.ctrl) === Vc))) && void 0 !== nc ? nc : null
        }(Ic.ctrl, Bc);
        return rB && this.show(cB, rB, "formed", nc), rB
      }
      fade(cB, Bc) {
        0 !== this.glows.length && (this.glows = this.glows.filter((nc => {
          let {
            mesh: Vc,
            glow: Ic,
            startMs: rB,
            record: uc
          } = nc;
          const sc = (Bc - rB) / Ve[Ic].ms;
          return sc >= 1 ? (cB.disposeGameMesh(Vc), uc && (uc.endMs = Bc), !1) : (cB.setGameMesh(Vc, {
            visibility: "formed" === Ic ? 1 - sc : Math.sin(Math.PI * sc)
          }), !0)
        })))
      }
      dispose(cB) {
        for (const {
            mesh: nc
          }
          of this.glows) cB.disposeGameMesh(nc);
        this.glows = [], this.levels.clear();
        const Bc = "undefined" !== typeof window ? window : null;
        (null === Bc || void 0 === Bc ? void 0 : Bc.baf2Glows) === this.devAccessor && delete Bc.baf2Glows
      }
      show(cB, Bc, nc, Vc) {
        const {
          lo: Ic,
          hi: rB
        } = aP(Bc.box);
        let uc = null;
        this.devLog && (uc = {
          glow: nc,
          ctrl: Ie(Bc.box.ctrl),
          lo: Ie(Ic),
          hi: Ie(rB),
          startMs: Vc,
          endMs: null
        }, this.devLog.push(uc), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(cB, nc, lM(Ic, rB, Ve[nc].thick)),
          glow: nc,
          startMs: Vc,
          record: uc
        })
      }
      build(cB, Bc, nc) {
        const Vc = Vm(cB, nc, {
          rgb: Ve[Bc].colour,
          alpha: 1
        });
        return cB.setGameMesh(Vc, {
          visibility: 0
        }), Vc
      }
    }
    const se = 1 / .6,
      Me = {
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
        blendMode: Ls.f.Standard,
        soft: !0
      },
      Pe = {
        ...Me,
        size: [.25, .4],
        count: 2
      };

    function qt(cB) {
      return {
        colours: [cB, cB],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Ls.f.Add,
        soft: !1
      }
    }
    const Oe = qt([150, 225, 255]),
      Te = qt([185, 145, 255]),
      fe = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function mt(cB) {
      const Bc = LB[cB];
      return null === Bc.fuelSlot || dB(Bc) ? fe.includes(cB) ? Te : Oe : Me
    }
    const ee = {
        kind: "smokePuff"
      },
      tt = [.2, .025, .2];

    function Se(cB, Bc) {
      const [
        [nc, Vc, Ic],
        [rB, uc, sc]
      ] = cB.colours;
      return {
        texture: cB.soft ? ee : "square_particle",
        Qc: Bc,
        minLifeTime: cB.life[0] / se,
        maxLifeTime: cB.life[1] / se,
        minEmitPower: cB.power[0] * se,
        maxEmitPower: cB.power[1] * se,
        minSize: cB.size[0],
        maxSize: cB.size[1],
        emitRate: 0,
        gravity: [0, cB.lift * se * se, 0],
        dir1: [-cB.spread, 1, -cB.spread],
        dir2: [cB.spread, 1, cB.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [nc, Vc, Ic, cB.alpha],
          maxColor: [rB, uc, sc, cB.alpha]
        }, {
          timeFraction: 1,
          minColor: [nc, Vc, Ic, 0],
          maxColor: [rB, uc, sc, 0]
        }],
        blendMode: cB.blendMode
      }
    }
    class yt {
      constructor(cB) {
        this.fixed = cB, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(cB, Bc, nc) {
        var Vc;
        if (nc === this.lastFrame) return !1;
        this.lastFrame = nc;
        const Ic = this.at;
        Ic[0] = Bc[0] + .5, Ic[1] = Bc[1] + 1.025, Ic[2] = Bc[2] + .5;
        const rB = null !== (Vc = this.fixed) && void 0 !== Vc ? Vc : sc() ? Pe : Me;
        let uc = this.particles.get(rB);
        return uc || (uc = cB.createParticles(function(cB) {
          return Se(cB, Math.ceil(12 * cB.count * cB.life[1]) + cB.count)
        }(rB), {
          pos: Ic,
          half: tt
        }), this.particles.set(rB, uc)), uc.moveTo(Ic), uc.emit(rB.count), !0
      }
      dispose() {
        for (const cB of this.particles.values()) cB.stop();
        this.particles.clear()
      }
    }
    class zt {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(cB) {
        this.indexed = !0;
        for (const Bc of pB) {
          const nc = mt(Bc);
          for (let Vc = 1; Vc <= 4; Vc++) {
            const Ic = cB.blockNameToBlockId(`${Bc}|meta|rot${Vc}|Running`, !0);
            if (null === Ic) continue;
            let rB = this.pufferIndexByStyle.get(nc);
            void 0 === rB && (rB = this.pufferList.push(new yt(nc === Me ? null : nc)) - 1, this.pufferIndexByStyle.set(nc, rB)), this.pufferIndexById[Ic] = rB + 1
          }
        }
      }
      onAfterRender(cB, Bc) {
        this.indexed || this.index(cB);
        const nc = performance.now(),
          Vc = 0 === this.lastMs ? 0 : Math.min(nc - this.lastMs, 250) / 1e3;
        this.lastMs = nc, this.frame++, cB.particlesEnabled() ? (this.scan(cB, Bc), this.puff(cB, Vc)) : this.sources = []
      }
      dispose() {
        for (const cB of this.pufferList) cB.dispose();
        this.sources = [], this.found = []
      }
      scan(cB, Bc) {
        0 === this.scanRow && (this.origin = [Math.floor(Bc[0]) - 12, Math.floor(Bc[1]) - 6, Math.floor(Bc[2]) - 12]);
        const nc = Math.min(this.scanRow + 16, 325),
          [Vc, Ic, rB] = this.origin,
          uc = this.hits;
        uc.length = 0;
        for (let sc = this.scanRow; sc < nc; sc++) {
          const Bc = Vc + sc % 25,
            nc = Ic + Math.floor(sc / 25);
          cB.scanBlocks(Bc, nc, rB, Bc + 1, nc + 1, rB + 25, this.pufferIndexById, uc)
        }
        for (let sc = 0; sc < uc.length; sc += 4) {
          const cB = uc[sc + 3];
          this.found.push({
            pos: [uc[sc], uc[sc + 1], uc[sc + 2]],
            Zr: cB,
            puffer: this.pufferList[this.pufferIndexById[cB] - 1]
          })
        }
        this.scanRow = nc, 325 === nc && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(cB, Bc) {
        const nc = this.sources.length;
        if (0 !== nc) {
          this.budget = Math.min(this.budget + Math.min(nc / 1.2, 12) * Bc, 2);
          for (let Bc = 0; Bc < nc && this.budget >= 1; Bc++) {
            const Bc = this.sources[this.cursor % nc];
            this.cursor = (this.cursor + 1) % nc, cB.getBlockId(Bc.pos[0], Bc.pos[1], Bc.pos[2]) === Bc.Zr && (Bc.puffer.puff(cB, Bc.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const pe = {
        ...qt([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      he = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function atc(cB) {
      return 0 === cB.spots.length ? 0 : Math.min(1 * cB.level, 4)
    }

    function le(cB) {
      return 0 === cB.glass.length ? 0 : Math.min(.75 * cB.level, 3)
    }

    function Ye(cB) {
      return `${cB.ctrl.join(",")}:${cB.rot}:${cB.cu},${cB.cv}:${cB.w},${cB.h},${cB.d}`
    }

    function Le(cB, Bc) {
      const nc = Bc.w - 2,
        Vc = Bc.h - 2,
        Ic = Bc.d - 2,
        rB = [];
      for (let uc = 0; uc < nc * Vc * Ic; uc++) {
        const sc = uc % nc,
          Mc = Math.floor(uc / nc) % Ic,
          Pc = Math.floor(uc / (nc * Ic));
        if (sc > 0 && sc < nc - 1 && Mc > 0 && Mc < Ic - 1 && Pc > 0 && Pc < Vc - 1) continue;
        const qB = Jn(Bc, Kn(Bc, uc)),
          Oc = pm(cB, qB);
        if (null !== Oc && "Fuel Rod" === lnc(Oc))
          for (const Bc of he) {
            const nc = [qB[0] + Bc[0], qB[1] + Bc[1], qB[2] + Bc[2]];
            Ue(cB, nc) && rB.push(bt(nc, Bc))
          }
      }
      return rB
    }

    function gt(cB, Bc) {
      const {
        lo: nc,
        hi: Vc
      } = aP(Bc), Ic = [];
      for (let rB = nc[0]; rB < Vc[0]; rB++)
        for (let Bc = nc[1]; Bc < Vc[1]; Bc++) {
          const uc = rB === nc[0] || rB === Vc[0] - 1 || Bc === nc[1] || Bc === Vc[1] - 1 ? 1 : Math.max(1, Vc[2] - 1 - nc[2]);
          for (let sc = nc[2]; sc < Vc[2]; sc += uc) {
            const uc = [rB, Bc, sc];
            if (!Ue(cB, uc)) continue;
            const Mc = rB === nc[0] ? he[1] : rB === Vc[0] - 1 ? he[0] : sc === nc[2] ? he[5] : sc === Vc[2] - 1 ? he[4] : Bc === nc[1] ? he[3] : he[2];
            Ic.push(bt(uc, Mc))
          }
        }
      return Ic
    }

    function Ue(cB, Bc) {
      const nc = pm(cB, Bc);
      return null !== nc && "Reactor Glass" === lnc(nc)
    }

    function bt(cB, Bc) {
      return [
        [cB[0] + .5 + .55 * Bc[0], cB[1] + .5 + .55 * Bc[1], cB[2] + .5 + .55 * Bc[2]],
        [0 === Bc[0] ? .4 : .02, 0 === Bc[1] ? .4 : .02, 0 === Bc[2] ? .4 : .02]
      ]
    }
    class Ze {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(cB, Bc, nc, Vc) {
        const Ic = [],
          rB = new Set;
        for (const Pc of Bc) {
          var uc, sc, Mc;
          const {
            box: Bc
          } = Pc;
          if ("reactor" !== Pc.kind || Pc.level <= 0 || (Bc.ctrl[0] - nc[0]) ** 2 + (Bc.ctrl[1] - nc[1]) ** 2 + (Bc.ctrl[2] - nc[2]) ** 2 > 576) continue;
          const qB = Ye(Bc);
          rB.add(qB);
          let Oc = this.spots.get(qB);
          if ((!Oc || Vc - Oc.at > 3e3) && (Oc = {
              at: Vc,
              spots: Le(cB, Bc),
              glass: gt(cB, Bc)
            }, this.spots.set(qB, Oc)), 0 === Oc.spots.length && 0 === Oc.glass.length) continue;
          const Tc = this.sparking.find((cB => cB.key === qB));
          Ic.push({
            key: qB,
            level: Pc.level,
            spots: Oc.spots,
            glass: Oc.glass,
            budget: null !== (uc = null === Tc || void 0 === Tc ? void 0 : Tc.budget) && void 0 !== uc ? uc : 0,
            cursor: null !== (sc = null === Tc || void 0 === Tc ? void 0 : Tc.cursor) && void 0 !== sc ? sc : 0,
            glassBudget: null !== (Mc = null === Tc || void 0 === Tc ? void 0 : Tc.glassBudget) && void 0 !== Mc ? Mc : 0
          })
        }
        for (const Pc of this.spots.keys()) rB.has(Pc) || this.spots.delete(Pc);
        this.sparking = Ic
      }
      emit(cB, Bc, nc) {
        var Vc;
        if (0 === this.sparking.length || !cB.particlesEnabled() || nc === this.lastFrame) return;
        this.lastFrame = nc;
        let Ic = 0,
          rB = 0;
        for (const mB of this.sparking) Ic += atc(mB), rB += le(mB);
        const uc = Ic > 8 ? 8 / Ic : 1,
          sc = rB > 6 ? 6 / rB : 1;
        let Mc, Pc = null,
          qB = null;
        for (const mB of this.sparking) mB.budget = Math.min(mB.budget + atc(mB) * uc * Bc, 2), mB.budget >= 1 && (!Pc || mB.budget > Pc.budget) && (Pc = mB), mB.glassBudget = Math.min(mB.glassBudget + le(mB) * sc * Bc, 2), mB.glassBudget >= 1 && (!qB || mB.glassBudget > qB.glassBudget) && (qB = mB);
        if (Pc) Pc.budget--, Mc = Pc.spots[Pc.cursor++ % Pc.spots.length];
        else {
          if (!qB) return;
          qB.glassBudget--, Mc = qB.glass[Math.floor(Math.random() * qB.glass.length)]
        }
        const [Oc, Tc] = Mc, fc = null !== (Vc = this.emitter) && void 0 !== Vc ? Vc : this.create(cB, Oc, Tc);
        fc.moveTo(Oc, Tc), fc.emit(pe.count)
      }
      dispose() {
        var cB;
        null === (cB = this.emitter) || void 0 === cB || cB.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(cB, Bc, nc) {
        const Vc = Math.ceil(14 * pe.count * pe.life[1]) + pe.count;
        return this.emitter = cB.createParticles(Se(pe, Vc), {
          pos: Bc,
          half: nc
        }), this.emitter
      }
    }
    const Qe = [2, 3.2],
      Ce = 1 / 3,
      vt = 1 / .6,
      De = {
        texture: ee,
        Qc: Math.ceil(18 * Qe[1]) + 4,
        minLifeTime: Qe[0] / vt,
        maxLifeTime: Qe[1] / vt,
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
        blendMode: Ls.f.Standard
      };
    class Ne {
      constructor(cB) {
        this.plans = cB, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new Ze, this.frame = 0, this.outline = new ue(cB)
      }
      onAfterRender(cB, Bc, nc) {
        const Vc = performance.now(),
          Ic = 0 === this.lastMs ? 0 : Math.min(Vc - this.lastMs, 250) / 1e3;
        if (this.lastMs = Vc, this.outline.fade(cB, Vc), this.puff(cB, Ic, nc), this.sparks.emit(cB, Ic, this.frame++), Vc - this.lastCheckMs < 150) return;
        this.lastCheckMs = Vc;
        const rB = this.plans.all().filter((cB => cB.formed && Ee(cB.box.ctrl, nc) <= 4096));
        this.plumes = rB.filter((cB => "reactor" === cB.kind && cB.level > 0)).map((cB => ({
          box: cB.box,
          level: cB.level
        }))), this.updateHums(cB, Bc, rB, nc), this.sparks.update(cB, rB, nc, Vc), this.chimeFormed(cB, Bc, rB, Vc)
      }
      dispose(cB) {
        var Bc;
        this.outline.dispose(cB), null === (Bc = this.steam) || void 0 === Bc || Bc.dispose(), this.steam = null, this.sparks.dispose();
        for (const nc of this.hums.values()) nc.stop();
        this.hums.clear()
      }
      chimeFormed(cB, Bc, nc, Vc) {
        const Ic = this.outline.check(cB, nc, Vc);
        Ic && cB.playSound(Bc, "exp_levelup", .6, 1, {
          vx: [Ic.box.ctrl[0] + .5, Ic.box.ctrl[1], Ic.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(cB, Bc, nc) {
        const Vc = this.plumes;
        if (0 === Vc.length || !cB.particlesEnabled()) return void(this.plumeBudget = 0);
        const Ic = Vc.reduce(((cB, Bc) => cB + 3 * Bc.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Ic * Bc, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let rB = this.plumeCursor % (Ic / 3);
        this.plumeCursor++;
        let uc = Vc[0];
        for (const Oc of Vc) {
          if (rB < Oc.level) {
            uc = Oc;
            break
          }
          rB -= Oc.level
        }
        const {
          lo: sc,
          hi: Mc
        } = aP(uc.box);
        if (function(cB, Bc, nc) {
            const Vc = Math.max(cB[0] - nc[0], 0, nc[0] - Bc[0]),
              Ic = Math.max(cB[2] - nc[2], 0, nc[2] - Bc[2]);
            return Math.hypot(Vc, nc[1] - Bc[1], Ic)
          }(sc, Mc, nc) < 6 && Math.random() > Ce) return;
        const Pc = [(sc[0] + Mc[0]) / 2, Mc[1] + .05, (sc[2] + Mc[2]) / 2],
          qB = [(Mc[0] - sc[0]) / 2 - .5, .05, (Mc[2] - sc[2]) / 2 - .5];
        this.steam ??= cB.createParticles(De, {
          pos: Pc,
          half: qB
        }), this.steam.moveTo(Pc, qB), this.steam.emit(1)
      }
      updateHums(cB, Bc, nc, Vc) {
        const Ic = new Map;
        for (const uc of nc) "reactor" === uc.kind && uc.level > 0 && Ee(uc.box.ctrl, Vc) <= 576 && Ic.set(`${rB=uc.box.ctrl,`${rB[0]},${rB[1]},${rB[2]}`}:${uc.level}`, uc);
        var rB;
        for (const [uc, sc] of this.hums) Ic.has(uc) || (sc.stop(), this.hums.delete(uc));
        for (const [uc, sc] of Ic) {
          if (this.hums.has(uc)) continue;
          const {
            lo: nc,
            hi: Vc
          } = aP(sc.box), Ic = [(nc[0] + Vc[0]) / 2, nc[1], (nc[2] + Vc[2]) / 2], rB = cB.playSound(Bc, "rocketEngineLoop", .08 + .06 * sc.level, .55, {
            vx: Ic,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          rB && this.hums.set(uc, rB)
        }
      }
    }

    function Ee(cB, Bc) {
      return (cB[0] - Bc[0]) ** 2 + (cB[1] - Bc[1]) ** 2 + (cB[2] - Bc[2]) ** 2
    }
    class oe {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      tC(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Vc = [cB.baf2BombAt[0], cB.baf2BombAt[1], cB.baf2BombAt[2]],
          Ic = cB.baf2BombR;
        if (cB.baf2BombBoom) {
          const cB = Math.hypot(Bc[0] - Vc[0], Bc[1] - Vc[1], Bc[2] - Vc[2]);
          this.Vu({
            fuse: null,
            blast: {
              at: Vc,
              r: Ic,
              receivedAt: nc,
              distance: cB,
              flash: cB <= 3 * Ic
            }
          })
        } else this.Vu({
          ...this.snapshot,
          fuse: cB.baf2BombMs > 0 ? {
            at: Vc,
            r: Ic,
            endsAt: nc + cB.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      Vu(cB) {
        this.snapshot = cB;
        for (const Bc of this.listeners) Bc()
      }
    }
    const We = (0, Vc.memo)((function(cB) {
      var Bc;
      let {
        store: nc
      } = cB;
      const {
        t: Ic
      } = (0, zr.x)(), [rB, uc] = (0, Vc.useState)((() => nc.get())), [sc, Mc] = (0, Vc.useState)((() => performance.now()));
      (0, Vc.useEffect)((() => (uc(nc.get()), nc.subscribe((() => {
        uc(nc.get()), Mc(performance.now())
      })))), [nc]);
      const {
        fuse: Pc,
        blast: qB
      } = rB;
      (0, Vc.useEffect)((() => {
        if (!Pc) return;
        const cB = setInterval((() => {
          Mc(performance.now())
        }), 250);
        return () => {
          clearInterval(cB)
        }
      }), [Pc]);
      const [Oc, Tc] = (0, Vc.useState)(!1);
      (0, Vc.useEffect)((() => {
        if (null === qB || void 0 === qB || !qB.flash) return;
        Tc(!0);
        const cB = setTimeout((() => {
          Tc(!1)
        }), 2500);
        return () => {
          clearTimeout(cB)
        }
      }), [qB]);
      const fc = Pc ? function(cB, Bc) {
        return cB.endsAt <= Bc ? 0 : Math.ceil((cB.endsAt - Bc) / 1e3)
      }(Pc, sc) : 0;
      return (0, tu.jsxs)(tu.Fragment, {
        children: [fc > 0 && (0, tu.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Ic("buildAFactory2Game:bombCountdown", {
            amount: String(fc),
            radius: String(null !== (Bc = null === Pc || void 0 === Pc ? void 0 : Pc.r) && void 0 !== Bc ? Bc : 0)
          })
        }), Oc && (0, tu.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function we(cB) {
      const Bc = Math.min(4, Math.max(1, cB / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * cB / 4)),
        capSpread: Math.min(5 * cB / 8, 24 * Bc),
        capThick: 6 * Bc,
        stemHalfWidth: 3 * Bc,
        puffScale: Bc
      }
    }
    class kt {
      constructor() {
        this.XB = !1
      }
      hold(cB) {
        cB.getCameraFar() < 1e3 && (cB.setCameraFar(1e3), this.XB = !0)
      }
      release(cB) {
        this.XB && (this.XB = !1, cB.setCameraFar(null))
      }
    }
    const Xe = 1 / .6,
      He = [.2, .1, .2],
      Fe = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Je = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Ls.f.Standard,
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
      jt = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Ls.f.Standard,
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
      Re = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Ls.f.Standard,
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
      it = {
        texture: ee,
        Qc: Math.ceil(120) + 4,
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
        blendMode: Ls.f.Add
      };
    class Ke {
      constructor(cB) {
        this.store = cB, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new kt, this.timers = []
      }
      onAfterRender(cB, Bc) {
        const nc = performance.now(),
          Vc = 0 === this.lastMs ? 0 : Math.min(nc - this.lastMs, 250) / 1e3;
        this.lastMs = nc;
        const {
          fuse: Ic,
          blast: rB
        } = this.store.get();
        null !== rB && rB !== this.shownBlast && (this.shownBlast = rB, this.startBlast(cB, Bc, rB, nc));
        const uc = cB.particlesEnabled();
        null !== Ic && Ic.endsAt > nc && uc ? this.emitBeacon(cB, Ic, Vc, nc) : this.beaconBudget = 0, null !== this.cloud && (nc - this.cloud.startMs > 33e3 ? this.disposeCloud(cB) : (this.far.hold(cB), uc && this.emitCloud(cB, Vc, nc)))
      }
      dispose(cB) {
        var Bc;
        null === (Bc = this.beacon) || void 0 === Bc || Bc.dispose(), this.beacon = null, this.disposeCloud(cB);
        for (const nc of this.timers) clearTimeout(nc);
        this.timers.length = 0
      }
      emitBeacon(cB, Bc, nc, Vc) {
        const Ic = Bc.endsAt - Vc < 5e3 ? 350 : 1e3,
          rB = .5 + .5 * Math.sin(2 * Math.PI * Vc / Ic);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * rB * nc, 4), this.beaconBudget < 1) return;
        const uc = Math.floor(this.beaconBudget);
        this.beaconBudget -= uc;
        const [sc, Mc, Pc] = Bc.at, qB = [sc + .5, Mc + 1.1, Pc + .5];
        this.beacon ??= cB.createParticles(it, {
          pos: qB,
          half: He
        }), this.beacon.moveTo(qB), this.beacon.emit(uc)
      }
      startBlast(cB, Bc, nc, Vc) {
        var Ic;
        null === (Ic = this.beacon) || void 0 === Ic || Ic.dispose(), this.beacon = null, this.disposeCloud(cB);
        const rB = (0, ls.isMobile)() ? .5 : 1;
        this.streams = [Je, jt, Re].map((cB => {
          const Bc = Math.round(cB.count * rB);
          return {
            spec: cB,
            particles: null,
            rate: Bc / ((cB.toMs - cB.fromMs) / 1e3),
            budget: 0,
            left: Bc
          }
        })), this.cloud = {
          blast: nc,
          startMs: Vc
        };
        const uc = Math.max(.25, 1 - nc.distance / (6 * nc.r)),
          sc = nc.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [nc, Vc, Ic] of Fe) de(cB, Bc, nc, uc * Vc, Ic)
        }), sc))
      }
      emitCloud(cB, Bc, nc) {
        const {
          blast: Vc,
          startMs: Ic
        } = this.cloud, rB = nc - Ic, [uc, sc, Mc] = Vc.at, Pc = we(Vc.r);
        for (const qB of this.streams) {
          const {
            spec: nc
          } = qB;
          if (qB.left <= 0 || rB < nc.fromMs) continue;
          qB.budget += qB.rate * Bc;
          const Ic = Math.min(Math.floor(qB.budget), qB.left);
          if (Ic < 1) continue;
          qB.budget -= Ic, qB.left -= Ic;
          const Oc = qB.particles ??= this.createStream(cB, nc, Vc);
          if (nc === Je) {
            const cB = Pc.stemHalfWidth;
            Oc.moveTo([uc, sc + 1, Mc], [cB, 1, cB])
          } else if (nc === jt) {
            const cB = Pc.capSpread * Math.min(1, (rB - nc.fromMs) / 3e3),
              Bc = Math.sqrt(Math.random()),
              Vc = 2 * Math.random() * Math.PI,
              Ic = Math.cos(Vc) * Bc,
              qB = Math.sin(Vc) * Bc,
              Tc = uc + Ic * cB,
              fc = Mc + qB * cB,
              mB = Pc.capThick,
              ec = sc + Pc.capHeight + mB * (1 - Bc * Bc) * 2;
            Oc.setDirections([.7 * Ic, .05, .7 * qB], [Ic, .2, qB]), Oc.moveTo([Tc, ec, fc], [mB, mB, mB])
          } else {
            this.ringAngle += 2.39996;
            const cB = Math.cos(this.ringAngle),
              Bc = Math.sin(this.ringAngle);
            Oc.setDirections([cB, .05, Bc], [cB, .1, Bc]), Oc.moveTo([uc + 2 * cB, sc + .5, Mc + 2 * Bc], [0, .5, 0])
          }
          Oc.emit(Ic)
        }
      }
      createStream(cB, Bc, nc) {
        const {
          r: Vc
        } = nc, Ic = Math.max(Bc.life[0], Vc / 25), rB = Bc === Re ? [.9 * Ic, Ic] : Bc.life, uc = we(Vc), sc = Bc === Re ? 1 : uc.puffScale, Mc = {
          texture: ee,
          Qc: Bc.count + 4,
          minLifeTime: rB[0] / Xe,
          maxLifeTime: rB[1] / Xe,
          minSize: Bc.size[0] * sc,
          maxSize: Bc.size[1] * sc,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, Bc.gravity * Xe * Xe, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: Bc.from[0],
            maxColor: Bc.from[1]
          }, {
            timeFraction: .6,
            minColor: xt(Bc.from[0], Bc.to[0]),
            maxColor: xt(Bc.from[1], Bc.to[1])
          }, {
            timeFraction: 1,
            minColor: Bc.to[0],
            maxColor: Bc.to[1]
          }],
          blendMode: Bc.blend
        };
        if (Bc === Je) {
          const cB = uc.capHeight / ((rB[0] + rB[1]) / 2);
          Mc.minEmitPower = .9 * cB * Xe, Mc.maxEmitPower = 1.05 * cB * Xe, Mc.dir1 = [-.1, 1, -.1], Mc.dir2 = [.1, 1, .1]
        } else Bc === jt ? (Mc.minEmitPower = 1.2, Mc.maxEmitPower = 2, Mc.dir1 = [-1, .05, -1], Mc.dir2 = [1, .2, 1]) : (Mc.minEmitPower = 39.583333333333336, Mc.maxEmitPower = 41.66666666666667, Mc.dir1 = [1, 0, 0], Mc.dir2 = [1, 0, 0]);
        return cB.createParticles(Mc, {
          pos: nc.at
        })
      }
      disposeCloud(cB) {
        for (const nc of this.streams) {
          var Bc;
          null === (Bc = nc.particles) || void 0 === Bc || Bc.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(cB)
      }
    }

    function xt(cB, Bc) {
      return [(cB[0] + Bc[0]) / 2, (cB[1] + Bc[1]) / 2, (cB[2] + Bc[2]) / 2, .75 * cB[3]]
    }

    function de(cB, Bc, nc, Vc, Ic) {
      try {
        cB.playSound(Bc, nc, Vc, Ic)
      } catch (rB) {
        console.error(rB)
      }
    }
    const Ae = {
        Qc: 720,
        perS: 100
      },
      Ge = {
        Qc: 320,
        perS: 44
      };
    class cS {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(cB, Bc) {
        this.zone = {
          centre: [...cB.centre],
          r: cB.r,
          band: cB.band ? [cB.band[0], cB.band[1]] : void 0
        }, this.endsAt = Bc
      }
      stop() {
        this.zone = null
      }
      tC(cB, Bc) {
        const {
          baf2FalloutMs: nc,
          baf2FalloutAt: Vc,
          baf2FalloutR: Ic,
          baf2FalloutY: rB
        } = cB;
        nc > 0 && Vc && void 0 !== Ic ? this.start({
          centre: Vc,
          r: Ic,
          band: rB
        }, Bc + nc) : this.stop()
      }
      perS(cB, Bc, nc) {
        const Vc = this.zone;
        if (!Vc) return 0;
        const Ic = this.endsAt - cB;
        return Ic <= 0 ? (this.zone = null, 0) : Vc.band && (Bc[1] < Vc.band[0] || Bc[1] > Vc.band[1]) || Math.hypot(Bc[0] - Vc.centre[0], Bc[2] - Vc.centre[2]) > Vc.r ? 0 : nc.perS * Math.min(1, Ic / 5e3)
      }
    }
    const Bt = [5, 7],
      nt = [24, 8, 24],
      Vt = .5,
      It = 1 / .6,
      rS = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class ut {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ls.isMobile)();
        this.state = new cS, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(cB) {
          return cB ? Ge : Ae
        }(cB)
      }
      startFallout(cB, Bc) {
        this.state.start(cB, Bc)
      }
      stopFallout() {
        this.state.stop()
      }
      tC(cB) {
        this.state.tC(cB, performance.now())
      }
      onAfterRender(cB, Bc) {
        var nc;
        const Vc = performance.now(),
          Ic = 0 === this.lastMs ? 0 : Math.min(Vc - this.lastMs, 250) / 1e3;
        this.lastMs = Vc;
        const rB = this.state.perS(Vc, Bc, this.tier);
        if (rB <= 0 || !cB.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + rB * Ic, rB / 4);
        const uc = Math.floor(this.budget);
        if (uc < 1) return;
        this.budget -= uc;
        const sc = this.at;
        sc[0] = Bc[0], sc[1] = Bc[1] + 12, sc[2] = Bc[2];
        const Mc = null !== (nc = this.systems) && void 0 !== nc ? nc : this.create(cB, sc),
          Pc = this.amounts;
        Pc[0] = 0, Pc[1] = 0;
        for (let qB = 0; qB < uc; qB++) Pc[Math.random() < .3 ? 1 : 0]++;
        for (let qB = 0; qB < Mc.length; qB++) Pc[qB] > 0 && (Mc[qB].moveTo(sc, nt), Mc[qB].emit(Pc[qB]))
      }
      dispose() {
        for (const Bc of null !== (cB = this.systems) && void 0 !== cB ? cB : []) {
          var cB;
          Bc.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(cB, Bc) {
        return this.systems = rS.map((nc => {
          let {
            rgba: [Vc, Ic, rB, uc],
            share: sc
          } = nc;
          const Mc = {
            texture: "square_particle",
            Qc: Math.ceil(this.tier.Qc * sc),
            minLifeTime: Bt[0] / It,
            maxLifeTime: Bt[1] / It,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Vt, -1, Vt],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Vc, Ic, rB, 0]
            }, {
              timeFraction: .15,
              minColor: [Vc, Ic, rB, uc]
            }, {
              timeFraction: .8,
              minColor: [Vc, Ic, rB, uc]
            }, {
              timeFraction: 1,
              minColor: [Vc, Ic, rB, 0]
            }],
            blendMode: Ls.f.Standard
          };
          return cB.createParticles(Mc, {
            pos: Bc,
            half: nt
          })
        })), this.systems
      }
    }
    const st = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Mt(cB) {
      const Bc = /\|rot(\d)/.exec(cB);
      return st[Bc ? Number(Bc[1]) : 1]
    }
    var Pt = nc(564),
      qS = nc(37024);
    const Ot = new Set(Pt.h);

    function Tt(cB) {
      if (-2 !== cB.count) return null;
      const Bc = Fc(cB.item);
      return null !== Bc && Ot.has(Bc) ? Bc : null
    }

    function ft(cB) {
      const {
        width: Bc,
        height: nc
      } = (0, qS.d)(cB).hitBoxDimensions;
      return .55 / Math.max(Bc, nc)
    }

    function mS(cB, Bc, nc) {
      if (!nc) return !1;
      const Vc = cB[0] + .5 - Bc[0],
        Ic = cB[1] + .5 - Bc[1],
        rB = cB[2] + .5 - Bc[2];
      return Vc * Vc + Ic * Ic + rB * rB <= 576
    }

    function et(cB, Bc) {
      return Math.atan2(cB[0], cB[2]) + Math.PI + Bc
    }

    function tS(cB, Bc) {
      const nc = 2 * Math.PI;
      return (cB + nc * Bc / 1e4) % nc
    }
    class St {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = cB, this.now = Bc, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = cB.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(cB, Bc) {
        if (0 === this.farms.size) return;
        const nc = this.now(),
          Vc = Number.isNaN(this.frameMs) ? 0 : Math.min(nc - this.frameMs, 100);
        this.frameMs = nc, nc - this.checkedMs >= 1e3 && (this.checkedMs = nc, this.check(cB, Bc));
        for (const Ic of this.farms.values()) Ic.shown && Ic.running && null !== Ic.model && Vc > 0 && (Ic.spin = tS(Ic.spin, Vc), Ic.model.setPose(Ic.feet, et(Ic.front, Ic.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const cB of this.farms.values()) this.drop(cB);
        this.farms.clear()
      }
      sync() {
        const cB = new Set;
        for (const Bc of this.labels.list()) {
          const nc = Tt(Bc);
          if (null === nc) continue;
          cB.add(Bc.key);
          const Vc = this.farms.get(Bc.key);
          if ((null === Vc || void 0 === Vc ? void 0 : Vc.mob) === nc) continue;
          Vc && this.drop(Vc);
          const [Ic, rB, uc] = Bc.pos;
          this.farms.set(Bc.key, {
            pos: Bc.pos,
            feet: [Ic + .5, rB + 1, uc + .5],
            mob: nc,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [Bc, nc] of this.farms) cB.has(Bc) || (this.drop(nc), this.farms.delete(Bc));
        this.checkedMs = -1 / 0
      }
      check(cB, Bc) {
        for (const nc of this.farms.values()) {
          const [Vc, Ic, rB] = nc.pos, uc = pm(cB, nc.pos);
          null !== uc && lnc(uc) === Nc && mS(nc.pos, Bc, "Air" === pm(cB, [Vc, Ic + 1, rB])) ? (nc.running = uc.endsWith("|Running"), nc.front = Mt(uc), null === nc.model && (nc.model = cB.createMobModel(nc.mob, ft(nc.mob)), null === nc.model) || (nc.model.setPose(nc.feet, et(nc.front, nc.spin)), nc.shown || (nc.model.setVisible(!0), nc.shown = !0))) : (nc.shown && null !== nc.model && nc.model.setVisible(!1), nc.shown = !1)
        }
      }
      drop(cB) {
        var Bc;
        null === (Bc = cB.model) || void 0 === Bc || Bc.dispose(), cB.model = null, cB.shown = !1
      }
    }
    class yS {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(cB) {
        var Bc;
        this.island = cB.baf2ColIsland, this.islandSite = (Bc = cB.baf2ColSite) && 8 === Bc.length ? {
          spawnXZ: [Bc[0], Bc[1]],
          coreXZ: [Bc[2], Bc[3]],
          minXZ: [Bc[4], Bc[5]],
          maxXZ: [Bc[6], Bc[7]]
        } : null, this.views = cB.baf2ColList.map((cB => ({
          entry: GV(cB)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(cB) {
        this.status = cB, this.emit()
      }
      onOpen(cB) {
        this.openHeld = cB
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
        return this.views.map((cB => cB.entry))
      }
      entryAtRoot(cB) {
        var Bc;
        return null === (Bc = this.views.find((Bc => {
          let {
            entry: nc
          } = Bc;
          return nc.focus[0] === cB[0] && nc.focus[1] === cB[1] + 1 && nc.focus[2] === cB[2]
        }))) || void 0 === Bc ? void 0 : Bc.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(cB, Bc) {
        return ZM(this.entries(), cB, Bc)
      }
      lookSource() {
        return {
          handles: cB => rI(cB) >= 0 || uV(cB),
          line: (cB, Bc) => this.lookLine(cB, Bc),
          version: () => this.beamsVersion
        }
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const cB of this.listeners) cB()
      }
    }
    const zS = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((cB => cB / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((cB => [cB, cB + 1, cB + 2, cB, cB + 2, cB + 3]))
    };

    function pt(cB, Bc, nc, Vc, Ic, rB, uc) {
      let sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Mc = Math.cos(sc),
        Pc = Math.sin(sc),
        qB = cB.positions.length / 3,
        {
          positions: Oc,
          indices: Tc
        } = zS;
      for (let fc = 0; fc < Oc.length; fc += 3) {
        const sc = Oc[fc] * Ic,
          qB = Oc[fc + 2] * uc;
        cB.positions.push(Bc + sc * Mc + qB * Pc, nc + Oc[fc + 1] * rB, Vc - sc * Pc + qB * Mc)
      }
      for (const fc of Tc) cB.indices.push(qB + fc)
    }

    function ht(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return Bc < 1 ? {
        rgb: cB,
        alpha: Bc
      } : {
        rgb: cB,
        alpha: 1,
        opaque: !0
      }
    }
    class aS {
      constructor(cB, Bc) {
        this.style = cB, this.perSource = Bc, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(cB) {
        this.sources = cB, 0 === cB.length && (this.budget = 0)
      }
      cn(cB, Bc, nc) {
        const Vc = this.sources.length;
        if (0 !== Vc) {
          var Ic, rB;
          this.budget = Math.min(this.budget + (Ic = Vc, rB = this.perSource, Math.min(Ic * rB, JM) * Bc), 2);
          for (let Bc = 0; Bc < Vc && this.budget >= 1; Bc++) {
            const Bc = this.sources[this.cursor % Vc];
            this.cursor = (this.cursor + 1) % Vc;
            if (!(Math.max(Math.abs(Bc.x - nc[0]), Math.abs(Bc.y - nc[1]), Math.abs(Bc.z - nc[2])) > 32)) return this.puff(cB, Bc), void this.budget--
          }
        }
      }
      dispose() {
        var cB;
        null === (cB = this.particles) || void 0 === cB || cB.dispose(), this.particles = null, this.sources = []
      }
      puff(cB, Bc) {
        let {
          x: nc,
          y: Vc,
          z: Ic,
          h: rB,
          faces: uc
        } = Bc;
        const sc = function(cB, Bc, nc, Vc, Ic) {
            const [rB, uc, sc] = Ic[Math.floor(Math.random() * Ic.length)], Mc = .04, Pc = (cB, Bc, nc) => cB > 0 ? Bc + nc + Mc : cB < 0 ? Bc - Mc : Bc + .1, qB = (cB, Bc, nc) => cB > 0 ? Bc + nc + Mc : cB < 0 ? Bc - Mc : Bc + nc - .1, Oc = [Pc(rB, cB, 1), Pc(uc, Bc, Vc), Pc(sc, nc, 1)], Tc = [qB(rB, cB, 1), qB(uc, Bc, Vc), qB(sc, nc, 1)];
            return {
              pos: [(Oc[0] + Tc[0]) / 2, (Oc[1] + Tc[1]) / 2, (Oc[2] + Tc[2]) / 2],
              half: [(Tc[0] - Oc[0]) / 2, (Tc[1] - Oc[1]) / 2, (Tc[2] - Oc[2]) / 2],
              out: [rB, uc, sc]
            }
          }(nc, Vc, Ic, rB, uc),
          {
            style: Mc
          } = this,
          Pc = this.particles ??= cB.createParticles(Se(Mc, Math.ceil(Mc.count * JM * Mc.life[1]) + 4), sc);
        Pc.moveTo(sc.pos, sc.half);
        const [qB, Oc, Tc] = sc.out, fc = Mc.spread;
        Pc.setDirections([qB - fc, .6 + Oc, Tc - fc], [qB + fc, 1 + Oc, Tc + fc]), Pc.emit(Mc.count)
      }
    }
    const lt = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Yt {
      constructor() {
        this.green = new aS(RM.green, HM), this.pink = new aS(RM.pink, FM), this.colliders = [], this.lastMs = 0
      }
      setSources(cB) {
        this.colliders = cB;
        const Bc = [],
          nc = [];
        for (const Vc of cB) {
          const [cB, Ic, rB] = Vc.focus;
          Bc.push({
            x: cB,
            y: Ic - 1,
            z: rB,
            h: 2,
            faces: lt
          });
          for (let Bc = 0; Bc < 4; Bc++) {
            if (!Vc.live[Bc]) continue;
            const [cB, Ic, rB] = PV(Vc.focus, Bc, Gn.LASER_D), [uc, , sc] = MV[Bc], Mc = lt.filter((cB => cB[0] !== uc || cB[2] !== sc || 0 !== cB[1]));
            nc.push({
              x: cB,
              y: Ic,
              z: rB,
              h: 1,
              faces: Mc
            })
          }
        }
        this.green.setSources(Bc), this.pink.setSources(nc)
      }
      onAfterRender(cB) {
        const Bc = performance.now(),
          nc = 0 === this.lastMs ? 0 : Math.min(Bc - this.lastMs, 250) / 1e3;
        if (this.lastMs = Bc, 0 === this.colliders.length || !cB.particlesEnabled()) return;
        const Vc = cB.getCameraPosition();
        this.green.cn(cB, nc, Vc), this.pink.cn(cB, nc, Vc)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Lt = 1.04,
      gS = ht([1, 120 / 255, 220 / 255]),
      Ut = ht([1, .25, .25], .35);
    class bS {
      constructor(cB) {
        this.store = cB, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Yt
      }
      onAfterRender(cB) {
        this.store.version() !== this.builtVersion && this.rebuild(cB);
        const Bc = performance.now();
        for (const nc of this.beams) {
          const Vc = 1 + .35 * Math.sin(Bc / 700 * Math.PI * 2 + nc.phase);
          cB.setGameMesh(nc.mesh, {
            scale: [nc.alongX ? 1 : Vc, Vc, nc.alongX ? Vc : 1]
          })
        }
        this.glow.onAfterRender(cB)
      }
      dispose(cB) {
        this.clear(cB), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(cB) {
        this.clear(cB), this.builtVersion = this.store.version();
        const Bc = [];
        for (const {
            entry: nc
          }
          of this.store.colliders()) nc.on && nc.live.some(Boolean) && (this.addBeams(cB, nc), Bc.push(nc)), nc.blockers.length > 0 && this.addMarkers(cB, nc);
        this.glow.setSources(Bc)
      }
      addBeams(cB, Bc) {
        const [nc, Vc, Ic] = Bc.focus, rB = XM - .25, uc = (.25 + XM) / 2;
        for (let sc = 0; sc < 4; sc++) {
          if (!Bc.live[sc]) continue;
          const [Mc, , Pc] = MV[sc], qB = 0 !== Mc, Oc = {
            positions: [],
            indices: []
          };
          pt(Oc, 0, 0, 0, qB ? rB : .2, .2, qB ? .2 : rB);
          const Tc = [nc + .5 + Mc * uc, Vc + .5, Ic + .5 + Pc * uc],
            fc = cB.createGameMesh(Oc, gS, Tc);
          this.meshes.push(fc), this.beams.push({
            mesh: fc,
            alongX: qB,
            phase: sc * Math.PI / 2
          })
        }
      }
      addMarkers(cB, Bc) {
        const nc = Bc.blockers[0],
          Vc = {
            positions: [],
            indices: []
          };
        for (const [Ic, rB, uc] of Bc.blockers) pt(Vc, Ic - nc[0] + .5, rB - nc[1] + .5, uc - nc[2] + .5, Lt, Lt, Lt);
        this.meshes.push(cB.createGameMesh(Vc, Ut, nc))
      }
      clear(cB) {
        for (const Bc of this.meshes) cB.disposeGameMesh(Bc);
        this.meshes = [], this.beams = []
      }
    }
    const Zt = [.56, .83, 1],
      Qt = [1, .73, .08],
      Ct = [1, .25, .25],
      vS = [.85, .85, .85],
      Dt = [.3, .45, .6];

    function Nt(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const uc = Ic / 2,
        sc = Ic + rB;
      for (const Mc of [-uc, uc])
        for (const Ic of [-uc, uc]) pt(cB, Bc, nc + Mc, Vc + Ic, sc, rB, rB), pt(cB, Bc + Mc, nc, Vc + Ic, rB, sc, rB), pt(cB, Bc + Mc, nc + Ic, Vc, rB, rB, sc)
    }

    function Et(cB) {
      return Bc => cB.isBlockInLoadedChunk(Bc[0], Bc[1], Bc[2]) && 0 === cB.getBlockId(Bc[0], Bc[1], Bc[2])
    }

    function ot(cB) {
      return cB.map((cB => {
        let {
          free: Bc,
          blocked: nc,
          gaps: Vc,
          supports: Ic
        } = cB;
        return `${Bc.join(";")}|${nc.join(";")}|${Vc.join(";")}|${Ic.join(";")}`
      })).join("/")
    }

    function Wt(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const rB = Bc[0],
        uc = {
          positions: [],
          indices: []
        };
      for (const [sc, Mc, Pc] of Bc) Nt(uc, sc - rB[0] + .5, Mc - rB[1] + .5, Pc - rB[2] + .5, Vc, Ic);
      return cB.createGameMesh(uc, nc, rB)
    }
    class wt {
      constructor(cB) {
        this.store = cB, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(cB, Bc, nc) {
        var Vc;
        const Ic = null === (Vc = cB.lMc(Bc)) || void 0 === Vc ? void 0 : Vc.name;
        if (Ic !== BV && Ic !== cI) return void("" !== this.shownKey && this.show(cB, "", []));
        const rB = performance.now();
        if (rB - this.lastCheckMs >= 200 && (this.lastCheckMs = rB, Ic === BV ? this.check(cB, nc) : this.preview(cB, nc)), this.pulses.length > 0) {
          const Bc = 1 + .12 * Math.sin(rB / 1e3 * 1.25 * Math.PI * 2),
            nc = [Bc, Bc, Bc];
          for (const Vc of this.pulses) cB.setGameMesh(Vc, {
            scale: nc
          })
        }
      }
      dispose(cB) {
        this.clear(cB), this.shownKey = ""
      }
      check(cB, Bc) {
        const nc = Et(cB),
          Vc = [];
        for (const {
            entry: rB
          }
          of this.store.colliders()) {
          rB.focus.every(((cB, nc) => Math.abs(cB + .5 - Bc[nc]) <= Gn.GHOST_REACH)) && Vc.push(kP(rB, nc))
        }
        const Ic = ot(Vc);
        Ic !== this.shownKey && this.show(cB, Ic, Vc)
      }
      preview(cB, Bc) {
        const nc = cB.getTargetedBlock(),
          Vc = nc ? [nc.Xr[0], nc.Xr[1], nc.Xr[2]] : null,
          Ic = null !== Vc && Vc.every(((cB, nc) => Math.abs(cB + .5 - Bc[nc]) <= 8)),
          rB = this.store.site(),
          uc = Ic && rB ? function(cB, Bc, nc) {
            const Vc = sV(cB);
            if (!Vc.every(Bc)) return null;
            const Ic = TV(cB, nc);
            return {
              column: Vc,
              spots: kP({
                focus: Vc[1],
                lasers: [!1, !1, !1, !1],
                open: Ic,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, Bc),
              fits: Ic.filter(Boolean).length >= Gn.MIN_SPOTS
            }
          }(Vc, Et(cB), rB) : null,
          sc = uc ? [uc.spots] : [],
          Mc = uc ? `preview ${Vc.join(",")}|${uc.fits}|${ot(sc)}` : "";
        var Pc, qB;
        Mc !== this.shownKey && this.show(cB, Mc, sc, null !== (Pc = null === uc || void 0 === uc ? void 0 : uc.column) && void 0 !== Pc ? Pc : [], null === (qB = null === uc || void 0 === uc ? void 0 : uc.fits) || void 0 === qB || qB)
      }
      show(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Ic = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(cB), this.shownKey = Bc, Vc.length > 0 && this.meshes.push(Wt(cB, Vc, ht(Ic ? vS : Ct)));
        for (const {
            free: rB,
            blocked: uc,
            gaps: sc,
            supports: Mc
          }
          of nc) {
          for (const [Bc, nc, Vc] of rB) {
            const Ic = {
              positions: [],
              indices: []
            };
            Nt(Ic, 0, 0, 0);
            const rB = cB.createGameMesh(Ic, ht(Zt), [Bc + .5, nc + .5, Vc + .5]);
            this.meshes.push(rB), this.pulses.push(rB)
          }
          uc.length > 0 && this.meshes.push(Wt(cB, uc, ht(Qt))), sc.length > 0 && this.meshes.push(Wt(cB, sc, ht(Ct), 1.06, .07)), Mc.length > 0 && this.meshes.push(Wt(cB, Mc, ht(Dt)))
        }
      }
      clear(cB) {
        for (const Bc of this.meshes) cB.disposeGameMesh(Bc);
        this.meshes = [], this.pulses = []
      }
    }
    class kS {
      constructor() {
        this.stored = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(cB) {
        if (!cB.baf2TermOpen) return !1;
        cB.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [Bc, nc] of cB.baf2TermItems) nc > 0 ? this.stored.set(Bc, nc) : this.stored.delete(Bc);
        if (this.pending = this.pending.filter((Bc => Bc.seq > cB.baf2TermAcked)), this.silos = cB.baf2TermSilos, this.readOnly = cB.baf2TermReadOnly, this.pocket = !0 === cB.baf2TermPocket, cB.baf2TermReset) this.resort();
        else
          for (const Bc of this.stored.keys()) this.order.includes(Bc) || this.order.push(Bc);
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((cB, Bc) => this.amount(Bc) - this.amount(cB) || cB.localeCompare(Bc))), this.changed()
      }
      take(cB, Bc) {
        const nc = function(cB, Bc) {
          const nc = "number" === typeof cB ? cB : "one" === cB ? 1 : "stack" === cB ? 99 : Bc;
          return Math.min(Bc, nc)
        }(cB, this.amount(Bc));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Bc,
          amount: nc
        }), this.recents = [Bc, ...this.recents.filter((cB => cB !== Bc))].slice(0, 6), this.changed(), BB(this.seq, cB, Bc)
      }
      amount(cB) {
        var Bc;
        let nc = null !== (Bc = this.stored.get(cB)) && void 0 !== Bc ? Bc : 0;
        for (const Vc of this.pending) Vc.item === cB && (nc -= Vc.amount);
        return Math.max(0, nc)
      }
      items() {
        return this.order.filter((cB => this.amount(cB) > 0))
      }
      recent() {
        return this.recents.filter((cB => this.amount(cB) > 0))
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
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      changed() {
        this.version++;
        for (const cB of this.listeners) cB()
      }
    }
    var Xt = nc(36970);
    const Ht = {
      isBlock: cB => void 0 !== Qc.g[cB],
      harvestType: cB => {
        var Bc;
        return null === (Bc = Qc.g[cB]) || void 0 === Bc ? void 0 : Bc.harvestType
      },
      harvestLevel: cB => {
        var Bc;
        return null === (Bc = Qc.g[cB]) || void 0 === Bc ? void 0 : Bc.harvestLevel
      },
      dropsNothing: cB => {
        var Bc;
        return null === (null === (Bc = Qc.g[cB]) || void 0 === Bc ? void 0 : Bc.drops)
      },
      displayName: cB => {
        var Bc;
        return null === (Bc = Fu.l[cB]) || void 0 === Bc ? void 0 : Bc.displayName
      },
      description: cB => {
        var Bc;
        return null === (Bc = Fu.l[cB]) || void 0 === Bc ? void 0 : Bc.description
      },
      harvests: cB => {
        var Bc;
        return null === (Bc = Fu.l[cB]) || void 0 === Bc ? void 0 : Bc.harvests
      },
      level: cB => {
        var Bc;
        return null === (Bc = Fu.l[cB]) || void 0 === Bc ? void 0 : Bc.level
      }
    };

    function Ft(cB, Bc, nc) {
      return function(cB, Bc, nc, Vc) {
        var Ic, rB;
        const uc = Bc.split("|")[0],
          sc = cB.isBlock(Bc) ? Bc : cB.isBlock(uc) ? uc : null;
        if (null === sc || "rock" !== cB.harvestType(sc) || cB.dropsNothing(sc) && !QV.has(uc)) return null;
        const Mc = nc && "rock" === cB.harvests(nc) ? null !== (Ic = cB.level(nc)) && void 0 !== Ic ? Ic : 0 : null,
          Pc = null !== (rB = null !== Vc && void 0 !== Vc ? Vc : cB.harvestLevel(sc)) && void 0 !== rB ? rB : 0;
        return (null !== Mc ? Pc <= Mc : 0 === cB.harvestLevel(sc)) ? null : zI(cB, Pc)
      }(Ht, cB, Bc, nc)
    }

    function Jt(cB, Bc) {
      return function(cB, Bc, nc) {
        if (Bc === yI[0]) return [(0, Dc.od)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Dc.C.whiteUiText)];
        const Vc = nc.split("|")[0],
          Ic = cB.isBlock(Vc) ? cB.displayName(Vc) : void 0,
          rB = "string" === typeof Ic ? Ic : Ic && "translationKey" in Ic ? `$t(${Ic.translationKey})` : Vc;
        return [(0, Dc.od)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: rB
          }
        }, Dc.C.whiteUiText), (0, Dc.od)({
          translationKey: `item:${(0,Dc.Nd)(Bc)}`
        }, Dc.C.yellowUiText)]
      }(Ht, cB, Bc)
    }
    const jS = "buildAFactory2Game:";
    const Rt = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function iS(cB) {
      return cB.endsWith(" Ore")
    }
    const Kt = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      xS = [],
      dt = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Kt,
        plan: null,
        atomic: xS
      },
      At = "buildAFactory2Game:",
      Gt = new Set(["Splitter", "Sorting Gate"]),
      cy = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class BS {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = cB, this.planAt = Bc, this.tierOf = nc, this.Zr = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.XB = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = dt, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(cB, Bc, nc) {
        var Vc, Ic, rB;
        let uc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const sc = null !== (Vc = null === (Ic = cB.lMc(Bc)) || void 0 === Ic ? void 0 : Ic.name) && void 0 !== Vc ? Vc : null,
          Mc = cB.isPlayerCrouching(Bc),
          Pc = 0 === nc ? null : this.resolve(cB, nc),
          qB = null !== Pc && null !== uc && Gt.has(Pc.rootName) && function(cB, Bc) {
            return cy.some((nc => {
              let [Vc, Ic] = nc;
              const rB = cB.getBlockId(Bc[0] + Vc, Bc[1], Bc[2] + Ic);
              return 0 !== rB && "Express Belt" === cB.getMetaInfo(rB).rootName
            }))
          }(cB, uc),
          Oc = this.updatePlan(0 === nc ? null : uc),
          Tc = this.tierOf(),
          fc = null === uc ? null : (0, Xt.f)(nc),
          mB = null !== fc && null !== uc && (0, Xt.j)(function(cB) {
            return (Bc, nc, Vc) => cB.getBlockId(Bc, nc, Vc)
          }(cB), uc[0], uc[1], uc[2], fc),
          ec = this.readAfloat(cB, nc, uc);
        if (nc === this.Zr && mB === this.missesMaker && ec === this.afloat && sc === this.XB && Mc === this.crouching && qB === this.express && Tc === this.tier && !Oc && (!this.targetsLive || !this.liveMoved(uc))) return;
        this.Zr = nc, this.missesMaker = mB, this.afloat = ec, this.XB = sc, this.crouching = Mc, this.express = qB;
        const tB = qB && Pc ? function(cB) {
          if (null === cB.info) return null;
          return cB.express ??= {
            ...cB.info,
            detail: `${At}lookKeepsUpExpress`,
            detailItem: null
          }, cB.express
        }(Pc) : null !== Pc && mB && null !== fc ? this.besideMaker(Pc, nc, fc) : null !== Pc && ec ? this.hanging(Pc) : null !== (rB = null === Pc || void 0 === Pc ? void 0 : Pc.info) && void 0 !== rB ? rB : null;
        this.tier = Tc;
        const Sc = Pc && tB ? function(cB, Bc) {
          var nc, Vc;
          const Ic = Qc.g[cB];
          if (!cB.endsWith(" Ore") || "rock" !== (null === Ic || void 0 === Ic ? void 0 : Ic.harvestType) || 0 === Ic.harvestLevel) return null;
          const rB = null !== (nc = Ic.harvestLevel) && void 0 !== nc ? nc : 0,
            uc = Bc ? Fu.l[Bc] : void 0;
          if ("rock" === (null === uc || void 0 === uc ? void 0 : uc.harvests) && (null !== (Vc = uc.level) && void 0 !== Vc ? Vc : 0) >= rB) return null;
          const sc = (Mc = rB, zI(Ht, Mc));
          var Mc;
          if (null === sc) return null;
          const Pc = ir(sc),
            qB = /^[AEIOU]/.test(sc) ? "An" : "";
          if ("rock" === (null === uc || void 0 === uc ? void 0 : uc.harvests) && Bc) return {
            key: `${At}lookToolTooWeak${qB}`,
            XB: ir(Bc),
            needed: Pc
          };
          return {
            key: sc === yI[0] ? `${At}lookNeedAnyPickaxe` : `${At}lookNeedPickaxe${qB}`,
            XB: null,
            needed: Pc
          }
        }(Pc.rootName, sc) : null;
        this.targetsLive = !0 === (null === Pc || void 0 === Pc ? void 0 : Pc.live) && null !== uc;
        let yB = null;
        this.targetsLive && Pc && uc && this.live && (this.livePos[0] = uc[0], this.livePos[1] = uc[1], this.livePos[2] = uc[2], this.liveVersion = this.live.version(), yB = this.live.line(Pc.rootName, uc));
        const zB = null === tB ? Kt : function(cB, Bc, nc) {
            const Vc = function(cB, Bc, nc) {
              const Vc = Ln(cB);
              if (null === Vc) return null;
              const Ic = `${jS}lookPortMode_${Vc}`,
                rB = DV(Bc);
              if (rB && nc) return {
                mode: null,
                detail: Ic,
                next: `${jS}lookWrenchPickUp`,
                nextState: null
              };
              const uc = gV(cB),
                sc = null === uc ? null : Ln(uc);
              return null === sc ? {
                mode: null,
                detail: Ic,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Ic,
                next: rB ? `${jS}lookWrenchNext` : `${jS}lookPortWrench`,
                nextState: `${jS}lookPortState_${sc}`
              }
            }(cB, Bc, nc);
            if (null !== Vc) return Vc;
            const Ic = KV(cB, Bc, nc);
            return null === Ic.mode && null === Ic.next ? Kt : Ic
          }(cB.blockIdToBlockName(nc), sc, Mc),
          pc = this.plan,
          hc = Pc && tB ? this.rowsOf(Pc.rootName, Tc) : xS,
          aB = this.snapshot;
        if (!(null === tB ? !aB.visible : aB.visible && tB === aB.info && (lc = Sc, Yc = aB.tool, lc === Yc || null !== lc && null !== Yc && lc.key === Yc.key && lc.XB === Yc.XB && lc.needed === Yc.needed) && function(cB, Bc) {
            return cB === Bc || null !== cB && null !== Bc && cB.key === Bc.key && JSON.stringify([cB.params, cB.keys]) === JSON.stringify([Bc.params, Bc.keys])
          }(yB, aB.live) && function(cB, Bc) {
            return cB.mode === Bc.mode && cB.detail === Bc.detail && cB.next === Bc.next && cB.nextState === Bc.nextState
          }(zB, aB.wrench) && Cm(pc, aB.plan) && hc === aB.atomic)) {
          var lc, Yc;
          this.snapshot = null === tB ? {
            ...aB,
            visible: !1
          } : {
            info: tB,
            visible: !0,
            tool: Sc,
            live: yB,
            wrench: zB,
            plan: pc,
            atomic: hc
          };
          for (const cB of this.listeners) cB()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = dt, this.Zr = 0, this.XB = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(cB, Bc, nc) {
        if (null === nc || 0 === Bc || !sc() || !iS(this.resolve(cB, Bc).rootName)) return !1;
        const Vc = `${nc[0]},${nc[1]},${nc[2]},${Bc}`,
          Ic = performance.now();
        return Vc === this.afloatKey && Ic - this.afloatAt < nS ? this.afloat : (this.afloatKey = Vc, this.afloatAt = Ic, function(cB, Bc) {
          for (const [nc, Vc, Ic] of Rt) {
            const rB = Bc(cB[0] + nc, cB[1] + Vc, cB[2] + Ic);
            if (void 0 === rB || null !== rB && !iS(rB)) return !1
          }
          return !0
        }(nc, ((Bc, nc, Vc) => function(cB, Bc, nc, Vc) {
          if (!cB.isBlockInLoadedChunk(Bc, nc, Vc)) return;
          const Ic = cB.getBlockId(Bc, nc, Vc);
          return 0 === Ic ? null : cB.getMetaInfo(Ic).rootName
        }(cB, Bc, nc, Vc))))
      }
      liveMoved(cB) {
        var Bc;
        const {
          livePos: nc
        } = this;
        return null === cB || cB[0] !== nc[0] || cB[1] !== nc[1] || cB[2] !== nc[2] || (null === (Bc = this.live) || void 0 === Bc ? void 0 : Bc.version()) !== this.liveVersion
      }
      updatePlan(cB) {
        const Bc = null === cB ? "" : cB.join(","),
          nc = performance.now();
        if (Bc === this.planPos && nc - this.planMs < 250) return !1;
        this.planPos = Bc, this.planMs = nc;
        const Vc = null === cB ? null : this.planAt([cB[0], cB[1], cB[2]]),
          Ic = !Cm(Vc, this.plan);
        return this.plan = Vc, Ic
      }
      besideMaker(cB, Bc, nc) {
        let {
          info: Vc
        } = cB;
        if (null === Vc) return null;
        let Ic = this.besideMakerById.get(Bc);
        if (void 0 === Ic) {
          const cB = "cryo" === nc ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Ic = {
            ...Vc,
            detail: `${At}${cB}`,
            detailItem: null
          }, this.besideMakerById.set(Bc, Ic)
        }
        return Ic
      }
      hanging(cB) {
        let {
          info: Bc,
          rootName: nc
        } = cB;
        if (null === Bc) return null;
        let Vc = this.afloatByRoot.get(nc);
        return void 0 === Vc && (Vc = {
          ...Bc,
          detail: `${At}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(nc, Vc)), Vc
      }
      rowsOf(cB, Bc) {
        if (null === Bc) return xS;
        const nc = `${cB}|${Bc}`;
        let Vc = this.rowsByKey.get(nc);
        if (void 0 === Vc) {
          const Ic = function(cB, Bc) {
            var nc;
            if (!(cB in LB)) return [];
            const Vc = null !== (nc = gn[cB]) && void 0 !== nc ? nc : [],
              Ic = new Map;
            for (const uc of vu(cB, Bc))
              if ((Vc.includes(uc) || Cr(uc.output) && Zr(uc.output) > xB(cB)) && Zr(uc.output) <= Bc) {
                var rB;
                const cB = null !== (rB = Ic.get(uc.output)) && void 0 !== rB ? rB : [];
                cB.push(uc.input), Ic.set(uc.output, cB)
              } return Nr([...Ic], (cB => {
              let [Bc] = cB;
              return -Zr(Bc)
            })).map((cB => {
              let [Bc, nc] = cB;
              return {
                output: Bc,
                inputs: nc
              }
            }))
          }(cB, Bc);
          Vc = Ic.length > 0 ? Ic : xS, this.rowsByKey.set(nc, Vc)
        }
        return Vc
      }
      resolve(cB, Bc) {
        const {
          rootId: nc,
          rootName: Vc
        } = cB.getMetaInfo(Bc), Ic = (0, sn.k)(Vc) ? Bc : nc;
        let rB = this.byRootId.get(Ic);
        const uc = sc();
        if (void 0 === rB || rB.nuclear !== uc) {
          var Mc;
          const nc = function(cB) {
            return bI(Ht, cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB)
          }(Vc, cB.blockIdToBlockName(Bc));
          rB = {
            info: nc,
            rootName: Vc,
            live: null !== nc && !0 === (null === (Mc = this.live) || void 0 === Mc ? void 0 : Mc.handles(Vc)),
            nuclear: uc
          }, this.byRootId.set(Ic, rB)
        }
        return rB
      }
    }
    const nS = 500;
    const VS = (0, Vc.memo)((function(cB) {
        var Bc, nc;
        let {
          store: Ic
        } = cB;
        const {
          t: rB
        } = (0, zr.x)(), [uc, sc] = (0, Vc.useState)((() => Ic.get()));
        (0, Vc.useEffect)((() => (sc(Ic.get()), Ic.subscribe((() => {
          sc(Ic.get())
        })))), [Ic]);
        const {
          openInGameMenuName: Mc,
          openEverythingMenuName: Pc,
          isTouchScreen: qB
        } = (0, TI.j)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
          info: Oc,
          tool: Tc,
          live: fc,
          wrench: mB,
          atomic: ec
        } = uc, tB = uc.visible && null === Mc && null === Pc;
        if (null === Oc) return null;
        const Sc = null !== mB.detail ? rB(mB.detail) : null !== (Bc = uc.plan) && void 0 !== Bc && Bc.ctrl ? rB("buildAFactory2Game:lookPlanCtrl") : null !== Oc.detail ? rB(Oc.detail, null === Oc.detailItem ? void 0 : {
          item: rB(Oc.detailItem)
        }) : null;
        return (0, tu.jsxs)("div", {
          className: eI()("Baf2LookTarget", {
            Visible: tB
          }),
          "aria-hidden": !tB,
          children: [(0, tu.jsx)("div", {
            className: "Baf2LookTargetName SmallTextBold",
            children: rB(Oc.name)
          }), null !== uc.plan && (0, tu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: rB(uc.plan.key, {
              kind: rB(uc.plan.kindKey),
              w: String(uc.plan.w),
              h: String(uc.plan.h),
              d: String(uc.plan.d),
              count: String(uc.plan.count)
            })
          }), void 0 !== (null === (nc = uc.plan) || void 0 === nc ? void 0 : nc.why) && (0, tu.jsx)("div", {
            className: "Baf2LookTargetDetail Warning",
            children: rB(uc.plan.why)
          }), null !== mB.mode && (0, tu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: rB(mB.mode)
          }), null !== Tc ? (0, tu.jsx)("div", {
            className: "Baf2LookTargetDetail Warning",
            children: rB(Tc.key, {
              item: rB(Tc.needed),
              XB: null === Tc.XB ? "" : rB(Tc.XB)
            })
          }) : null !== fc ? (0, tu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: rB(fc.key, iP(rB, fc))
          }) : null !== Sc && (0, tu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: Sc
          }), ec.length > 0 && (0, tu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: rB("buildAFactory2Game:lookAtomicRecipes", {
              list: ec.map((cB => {
                let {
                  output: Bc,
                  inputs: nc
                } = cB;
                const Vc = nc.length > 1 ? ` ${rB("buildAFactory2Game:recipeMore",{count:String(nc.length-1)})}` : "";
                return `${rB(ir(nc[0]))}${Vc} \u2192 ${rB(ir(Bc))}`
              })).join(", ")
            })
          }), null !== mB.next && (0, tu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: rB(mB.next, {
              state: null === mB.nextState ? "" : rB(mB.nextState),
              use: rB(qB ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
            })
          })]
        })
      })),
      IS = [],
      ry = [
        [0, -1, 0]
      ];

    function uS(cB) {
      const Bc = [cB];
      for (let nc = 1; nc <= 4; nc++) nc > 1 && Bc.push(`${cB}|meta|rot${nc}`), Bc.push(`${cB}|meta|rot${nc}|Running`);
      return Bc
    }

    function sS(cB, Bc) {
      return [Math.floor(cB[0] / Bc), Math.floor(cB[1] / Bc), Math.floor(cB[2] / Bc)]
    }

    function MS(cB, Bc, nc) {
      return `${cB},${Bc},${nc}`
    }

    function PS(cB) {
      const Bc = cB.split("|")[0];
      if (!nn(Bc)) return IS;
      const nc = LB[Bc];
      if (RB(nc)) return ry;
      const Vc = Mt(cB);
      return KB(nc) ? [
        [-Vc[0], -Vc[1], -Vc[2]]
      ] : tr(nc) ? function(cB, Bc) {
        const nc = cB[0] - 2 * Bc[0],
          Vc = cB[2] - 2 * Bc[2],
          Ic = [];
        for (let rB = -1; rB <= 1; rB++)
          for (let Bc = -1; Bc <= 1; Bc++) Ic.push([nc + rB, cB[1], Vc + Bc]);
        return Ic
      }([0, 0, 0], Vc) : IS
    }
    const qy = [.2, .8, .3],
      OS = [.45, 1, .5],
      TS = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((cB => .5 * cB / 2)),
      fS = [0, 1, 2, 0, 2, 3],
      my = [4, 5];
    class eS {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(cB) {
        this.indexed = !0;
        for (const Bc of pB)
          for (const nc of uS(Bc)) {
            const Bc = cB.blockNameToBlockId(nc, !0),
              Vc = PS(nc);
            null !== Bc && Vc.length > 0 && (this.offsetsList.push(Vc), this.offsetsIndexById[Bc] = this.offsetsList.length)
          }
      }
      onAfterRender(cB, Bc) {
        this.indexed || this.index(cB);
        const nc = performance.now();
        if (nc - this.lastCheckMs < 100) return;
        this.lastCheckMs = nc, this.checks++;
        const Vc = ce.e.kI,
          [Ic, rB, uc] = sS(Bc, Vc);
        let sc = !1;
        const Mc = [];
        let Pc = 0;
        for (let qB = Ic - 2; qB <= Ic + 2; qB++)
          for (let Bc = rB - 1; Bc <= rB + 1; Bc++)
            for (let Ic = uc - 2; Ic <= uc + 2; Ic++) {
              const rB = Pc++,
                uc = MS(qB, Bc, Ic),
                Oc = cB.getChunkVersion(qB, Bc, Ic);
              let Tc = this.chunks.get(uc);
              null !== Oc ? (Tc || (Tc = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(uc, Tc)), Tc.seenAt = this.checks, Tc.checkedVersion !== Oc && (Tc.checkedVersion = Oc, sc = !0), Tc.scannedVersion !== Oc && nc - Tc.scannedAt >= 500 && Mc.push({
                slot: rB,
                entry: Tc,
                origin: [qB * Vc, Bc * Vc, Ic * Vc]
              })) : (sc ||= void 0 !== Tc, this.chunks.delete(uc))
            }
        this.scanDue(cB, Mc) && (sc = !0);
        for (const [qB, Oc] of this.chunks) Oc.seenAt !== this.checks && (sc ||= Oc.machines.length > 0, this.chunks.delete(qB));
        for (const qB of this.chunks.values())
          for (const [Bc, nc, Vc] of qB.cellChunks)(Math.abs(Bc - Ic) > 2 || Math.abs(nc - rB) > 1 || Math.abs(Vc - uc) > 2) && this.watchCellChunk(cB, Bc, nc, Vc) && (sc = !0);
        for (const [qB, Oc] of this.cellChunks) Oc.seenAt !== this.checks && this.cellChunks.delete(qB);
        sc && this.refresh(cB)
      }
      dispose(cB) {
        this.clearMeshes(cB), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(cB, Bc) {
        const nc = Math.max(Bc.findIndex((cB => {
          let {
            slot: Bc
          } = cB;
          return Bc >= this.scanFrom
        })), 0);
        let Vc = 96;
        for (let Ic = 0; Ic < Bc.length; Ic++) {
          const {
            slot: rB,
            entry: uc,
            origin: sc
          } = Bc[(nc + Ic) % Bc.length];
          if (Vc -= this.scan(cB, uc, sc), Vc <= 0) {
            this.scanFrom = rB + 1;
            break
          }
        }
        return Bc.length > 0
      }
      scan(cB, Bc, nc) {
        let [Vc, Ic, rB] = nc;
        const uc = ce.e.kI,
          sc = this.hits;
        sc.length = 0;
        const Mc = cB.scanBlocks(Vc, Ic, rB, Vc + uc, Ic + uc, rB + uc, this.offsetsIndexById, sc),
          Pc = [];
        for (let qB = 0; qB < sc.length; qB += 4) Pc.push({
          pos: [sc[qB], sc[qB + 1], sc[qB + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[sc[qB + 3]] - 1]
        });
        return Bc.machines = Pc, Bc.cellChunks = function(cB, Bc) {
          const nc = new Set,
            Vc = [];
          for (const {
              pos: Ic,
              offsets: rB
            }
            of cB)
            for (const [cB, uc, sc] of rB) {
              const rB = sS([Ic[0] + cB, Ic[1] + uc, Ic[2] + sc], Bc),
                Mc = MS(...rB);
              nc.has(Mc) || (nc.add(Mc), Vc.push(rB))
            }
          return Vc
        }(Pc, uc), Bc.scannedVersion = Bc.checkedVersion, Bc.scannedAt = performance.now(), Math.max(Mc, 1)
      }
      watchCellChunk(cB, Bc, nc, Vc) {
        const Ic = MS(Bc, nc, Vc),
          rB = cB.getChunkVersion(Bc, nc, Vc),
          uc = this.cellChunks.get(Ic);
        return null === rB ? this.cellChunks.delete(Ic) : (null === uc || void 0 === uc ? void 0 : uc.version) === rB ? (uc.seenAt = this.checks, !1) : (this.cellChunks.set(Ic, {
          version: rB,
          seenAt: this.checks
        }), !0)
      }
      refresh(cB) {
        const Bc = function(cB, Bc) {
            const nc = new Set,
              Vc = [];
            for (const {
                pos: Ic,
                offsets: rB
              }
              of cB)
              for (const [cB, uc, sc] of rB) {
                const rB = Ic[0] + cB,
                  Mc = Ic[1] + uc,
                  Pc = Ic[2] + sc,
                  qB = `${rB},${Mc},${Pc}`;
                nc.has(qB) || (nc.add(qB), Bc(rB, Mc, Pc) && Vc.push([rB, Mc, Pc]))
              }
            return Vc
          }([...this.chunks.values()].flatMap((cB => cB.machines)), ((Bc, nc, Vc) => cB.isBlockInLoadedChunk(Bc, nc, Vc) && 0 === cB.getBlockId(Bc, nc, Vc))),
          nc = Bc.join(";");
        nc !== this.shownKey && (this.shownKey = nc, this.clearMeshes(cB), Bc.length > 0 && (this.meshes = [this.build(cB, Bc, !1), this.build(cB, Bc, !0)]))
      }
      build(cB, Bc, nc) {
        const Vc = Bc[0],
          Ic = [],
          rB = [];
        for (const [uc, sc, Mc] of Bc) {
          const cB = uc - Vc[0] + .5,
            Bc = sc - Vc[1] + .5,
            Pc = Mc - Vc[2] + .5;
          for (let Vc = 0; Vc < 6; Vc++) {
            if (my.includes(Vc) !== nc) continue;
            const uc = Ic.length / 3;
            for (let nc = 4 * Vc; nc < 4 * Vc + 4; nc++) Ic.push(TS[3 * nc] + cB, TS[3 * nc + 1] + Bc, TS[3 * nc + 2] + Pc);
            for (const cB of fS) rB.push(uc + cB)
          }
        }
        return cB.createGameMesh({
          positions: Ic,
          indices: rB
        }, {
          rgb: nc ? OS : qy,
          alpha: .4
        }, Vc)
      }
      clearMeshes(cB) {
        for (const Bc of this.meshes) cB.disposeGameMesh(Bc);
        this.meshes = []
      }
    }
    const ty = 1 / .6,
      SS = 200,
      yy = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      zy = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      pS = 2 * Math.PI / 3;
    class hS {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yy;
        this.style = cB, this.particles = null, this.points = new Float32Array(800), this.budget = SS, this.lastMs = 0
      }
      static blade() {
        return new hS(zy)
      }
      tC(cB, Bc) {
        const nc = Math.min(Bc.arcStruck, Bc.arcPoints.length);
        this.draw(cB, [Bc.arcFrom, ...Bc.arcPoints], Bc.arcPoints.slice(0, nc))
      }
      onBlade(cB, Bc) {
        const [nc, Vc, Ic] = Bc.bladeCentre, [rB, uc] = Bc.bladeFacing, sc = nc - 1.5 * rB, Mc = Ic - 1.5 * uc, Pc = Math.atan2(uc, rB), qB = [];
        for (let Oc = 0; Oc <= 8; Oc++) {
          const cB = Pc - pS / 2 + pS * Oc / 8;
          qB.push([sc + 2.5 * Math.cos(cB), Vc, Mc + 2.5 * Math.sin(cB)])
        }
        this.draw(cB, qB, Bc.bladeStruck)
      }
      dispose() {
        var cB;
        null === (cB = this.particles) || void 0 === cB || cB.stop(), this.particles = null
      }
      draw(cB, Bc, nc) {
        if (!cB.particlesEnabled() || Bc.length < 2) return;
        const Vc = performance.now();
        this.budget = Math.min(SS, this.budget + (Vc - this.lastMs) / 1e3 * SS), this.lastMs = Vc;
        const Ic = [];
        let rB = 0,
          uc = Bc[0];
        for (const Sc of Bc.slice(1)) {
          const cB = Math.min(48, Math.round(Math.hypot(Sc[0] - uc[0], Sc[1] - uc[1], Sc[2] - uc[2]) * this.style.perBlock));
          Ic.push([uc, Sc, cB]), rB += cB, uc = Sc
        }
        const sc = nc.length;
        rB += 10 * sc;
        const Mc = rB > this.budget ? this.budget / rB : 1;
        if (0 === rB || Mc * rB < 1) return;
        const Pc = Bc[0],
          [qB, Oc, Tc] = Pc,
          fc = this.points;
        let mB = 0;
        const ec = (cB, Bc, nc, Vc) => {
          const Ic = 4 * mB;
          fc[Ic] = cB - qB, fc[Ic + 1] = Bc - Oc, fc[Ic + 2] = nc - Tc, fc[Ic + 3] = Vc, mB++
        };
        Ic.forEach(((cB, Bc) => {
          let [nc, Vc, Ic] = cB;
          const rB = Math.min(Math.floor(Ic * Mc), SS - mB),
            uc = Math.hypot(Vc[0] - nc[0], Vc[1] - nc[1], Vc[2] - nc[2]),
            sc = 0 === Bc && uc > 0 ? Math.min(.5, .1 * uc) / uc : 0;
          for (let Mc = 0; Mc < rB; Mc++) {
            const cB = sc + (Mc + .5) / rB * (1 - sc);
            ec(nc[0] + (Vc[0] - nc[0]) * cB, nc[1] + (Vc[1] - nc[1]) * cB, nc[2] + (Vc[2] - nc[2]) * cB, .15)
          }
        }));
        const tB = Math.floor(10 * Mc);
        for (let Sc = 0; Sc < sc; Sc++) {
          const [cB, Bc, Vc] = nc[Sc];
          for (let nc = 0; nc < tB && mB < SS; nc++) ec(cB, Bc, Vc, 2.5)
        }
        this.budget -= mB, this.particles ??= cB.createParticles(function(cB) {
          const [Bc, nc] = cB.colours;
          return {
            texture: "square_particle",
            Qc: 400,
            minLifeTime: cB.life[0] / ty,
            maxLifeTime: cB.life[1] / ty,
            minSize: cB.size[0],
            maxSize: cB.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [Bc[0], Bc[1], Bc[2], 1],
              maxColor: [nc[0], nc[1], nc[2], 1]
            }, {
              timeFraction: 1,
              minColor: [Bc[0], Bc[1], Bc[2], 0],
              maxColor: [nc[0], nc[1], nc[2], 0]
            }],
            blendMode: Ls.f.Add
          }
        }(this.style), {
          pos: Pc
        }), this.particles.emitPoints(Pc, fc, mB)
      }
    }
    const ay = new Set(["Sky Spring"]);

    function lS(cB, Bc, nc) {
      const Vc = cB.split("|")[0];
      return "Air" !== Bc || nc || ! function(cB) {
        const Bc = cB.split("|")[0];
        return void 0 !== GB[Bc] || ay.has(Bc)
      }(Vc) ? null : cB
    }
    class YS {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(cB) {
        const Bc = cB - this.lastTapAt >= 300;
        return this.lastTapAt = cB, Bc
      }
    }
    class LS {
      constructor() {
        this.presses = new YS, this.predicted = null
      }
      tap(cB, Bc) {
        const nc = this.presses.isNewPress(Bc);
        return nc && (this.predicted = {
          station: cB,
          at: Bc
        }), nc
      }
      consumeServerOpen(cB, Bc) {
        const nc = this.predicted;
        return !(null === nc || nc.station !== cB || Bc - nc.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class gy {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(cB, Bc) {
        return cB && (this.thrustAt = Bc), Bc - this.thrustAt < 200
      }
    }
    const US = [.1, .05, .1],
      by = {
        texture: "effect_5",
        Qc: Math.ceil(48),
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
        blendMode: Ls.f.OneOne
      };
    class ZS {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new gy, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      tC(cB, Bc) {
        for (const [nc, Vc] of Bc.baf2JetFlames) cB.isLocalPlayer(nc) || (Vc ? this.lit.add(nc) : this.lit.delete(nc))
      }
      onAfterRender(cB, Bc) {
        const nc = performance.now(),
          Vc = this.hold.lit(this.selfThrusting(cB, Bc), nc);
        for (const [Ic, rB] of this.flames)(Ic === Bc ? Vc : this.lit.has(Ic)) || this.setEmitting(rB, !1), Ic === Bc || cB.getPositionView(Ic) ? !rB.emitting && nc - rB.offAt >= 1300 && (rB.particles.stop(), this.flames.delete(Ic)) : (rB.particles.dispose(), this.flames.delete(Ic), this.lit.delete(Ic));
        Vc && this.draw(cB, Bc, Bc);
        for (const Ic of this.lit) this.draw(cB, Bc, Ic)
      }
      dispose() {
        for (const cB of this.flames.values()) cB.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(cB, Bc) {
        var nc;
        const Vc = cB.getLocalPlayerMovement();
        return !!Vc && (null !== (Ic = {
          option: null !== (nc = cB.getClientOption(Bc, "jumpHoldThrust")) && void 0 !== nc ? nc : null,
          jumping: Vc.jumpHeld,
          onGround: Vc.onGround,
          alive: cB.isAlive(Bc)
        }).option && Ic.option.maxUpSpeed >= 0 && Ic.jumping && !Ic.onGround && Ic.alive);
        var Ic
      }
      draw(cB, Bc, nc) {
        var Vc, Ic;
        const rB = this.pos;
        if (!cB.readDrawnPosition(nc, rB)) return;
        const uc = cB.readDrawnPosition(Bc, this.camera) ? this.camera : rB;
        if (!((rB[0] - uc[0]) ** 2 + (rB[1] - uc[1]) ** 2 + (rB[2] - uc[2]) ** 2 < 1600) || !cB.particlesEnabled()) {
          const cB = this.flames.get(nc);
          return void(cB && this.setEmitting(cB, !1))
        }
        const sc = null !== (Vc = this.flames.get(nc)) && void 0 !== Vc ? Vc : this.create(cB, nc, rB),
          Mc = null !== (Ic = cB.getDrawnHeading(nc)) && void 0 !== Ic ? Ic : 0,
          Pc = this.at;
        Pc[0] = rB[0] - .35 * Math.sin(Mc), Pc[1] = rB[1] + 1.05, Pc[2] = rB[2] - .35 * Math.cos(Mc), sc.particles.moveTo(Pc), this.setEmitting(sc, !0)
      }
      setEmitting(cB, Bc) {
        cB.emitting !== Bc && (cB.emitting = Bc, Bc || (cB.offAt = performance.now()), cB.particles.setEmitRate(Bc ? 60 : 0))
      }
      create(cB, Bc, nc) {
        const Vc = {
          particles: cB.createParticles(by, {
            pos: nc,
            half: US
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(Bc, Vc), Vc
      }
    }

    function QS(cB) {
      return "Reactor Frame" === xV("reactor", cB)
    }

    function CS(cB) {
      return Qn("reactor", cB) && !QS(cB) && (cB.startsWith("Reactor Glass") || cB.startsWith("Reactor Port"))
    }
    const vy = "baf2Goal";
    class DS {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [LI.i.subscribe("setDirectionArrow", (cB => {
          let {
            id: Bc,
            position: nc
          } = cB;
          Bc === vy && (this.goal = nc, this.checkedAt = -1 / 0)
        })), LI.i.subscribe("clearDirectionArrow", (cB => {
          let {
            id: Bc
          } = cB;
          null !== Bc && Bc !== vy || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const cB of this.subs) LI.i.unsubscribe(cB)
      }
      sideOf(cB, Bc, nc, Vc) {
        const Ic = this.goal;
        if (!Ic) return 0;
        nc - this.checkedAt > 1e3 && (this.checkedAt = nc, this.open = function(cB, Bc) {
          const [nc, Vc, Ic] = cB.map(Math.floor);
          if (!CS(Bc(nc, Vc, Ic))) return null;
          for (const [rB, uc] of [
              [1, 0],
              [0, 1]
            ]) {
            const cB = Bc(nc + rB, Vc, Ic + uc),
              sc = Bc(nc - rB, Vc, Ic - uc);
            if (QS(sc) && CS(cB)) return [rB, 0, uc];
            if (QS(cB) && CS(sc)) return [0 - rB, 0, 0 - uc]
          }
          return null
        }(Ic, ((Bc, nc, Vc) => cB.blockIdToBlockName(cB.getBlockId(Bc, nc, Vc)))));
        const rB = this.open;
        if (!rB) return 0;
        const uc = Vc(Ic);
        if (Math.abs(uc.x - Bc.x) > .05 || Math.abs(uc.y - Bc.y) > .05) return 0;
        const sc = Vc([Ic[0] + rB[0], Ic[1], Ic[2] + rB[2]]).x - uc.x;
        return Math.abs(sc) < .3 ? 0 : sc > 0 ? 1 : -1
      }
    }
    class NS {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new DS, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.CV = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.ZZ = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((cB => {
          for (const Bc of cB) Bc.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Bc.target, Bc.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.CV || this.clear()
        }, window.addEventListener("resize", this.ZZ)
      }
      onAfterRender(cB, Bc) {
        var nc;
        this.api = cB, this.project = null !== (nc = null === Bc || void 0 === Bc ? void 0 : Bc.projectWorldPosToScreenPos) && void 0 !== nc ? nc : null, this.queued || this.CV || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.CV = !0;
        for (const cB of this.moved.keys()) cB.style.transform = "";
        this.moved.clear();
        for (const cB of this.sideLabels.keys()) cB.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.ZZ)
      }
      clear() {
        for (const rB of this.moved.keys()) rB.isConnected || this.moved.delete(rB);
        for (const rB of this.sideLabels.keys()) rB.isConnected || this.sideLabels.delete(rB);
        if (0 === this.arrows.length) return;
        const cB = performance.now(),
          Bc = cB - this.refreshedAt > 1e3;
        Bc && (this.refreshedAt = cB, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const nc = this.trackerBox(),
          Vc = this.barsBox(),
          Ic = this.toastBox(Bc);
        (nc || Vc || Ic) && Bc && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let rB = 0; rB < this.arrows.length; rB++) {
          const Bc = this.arrows[rB];
          this.labelOffsets.set(Bc, this.runLabelAside(Bc, cB));
          const uc = (nc ? this.shiftLeftOf(Bc, nc) : 0) || this.shiftOnScreen(Bc),
            sc = Math.min(Vc ? this.liftAbove(Bc, Vc, uc) : 0, Ic ? this.liftAbove(Bc, Ic, uc) : 0),
            Mc = this.moved.get(Bc);
          if (0 !== uc || 0 !== sc) {
            const cB = 0 === sc ? `translateX(${uc}px)` : `translate(${uc}px, ${sc}px)`;
            Mc !== cB && (Bc.style.transform = cB, this.moved.set(Bc, cB))
          } else void 0 !== Mc && (Bc.style.transform = "", this.moved.delete(Bc))
        }
      }
      trackerBox() {
        var cB, Bc;
        const nc = null !== (cB = this.tracker) && void 0 !== cB && cB.isConnected ? this.tracker : null !== (Bc = this.trackers[0]) && void 0 !== Bc ? Bc : null;
        if (nc !== this.tracker && this.watch(nc), this.boxStale && nc) {
          var Vc, Ic, rB;
          this.boxStale = !1;
          const cB = nc.closest(".NoRoom") ? null : nc.getBoundingClientRect(),
            Bc = cB && cB.width > 0 ? null === (Vc = this.hud) || void 0 === Vc ? void 0 : Vc.getBoundingClientRect() : void 0,
            uc = cB && Bc ? Math.max(cB.top, Bc.top) : null !== (Ic = null === cB || void 0 === cB ? void 0 : cB.top) && void 0 !== Ic ? Ic : 0,
            sc = cB && Bc ? Math.min(cB.bottom, Bc.bottom) : null !== (rB = null === cB || void 0 === cB ? void 0 : cB.bottom) && void 0 !== rB ? rB : 0;
          this.box = cB && cB.width > 0 && sc > uc ? {
            left: cB.left,
            top: uc,
            right: cB.right,
            bottom: sc
          } : null
        }
        return nc ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var cB;
          this.barsStale = !1;
          const Bc = null === (cB = this.statBars[0]) || void 0 === cB ? void 0 : cB.getBoundingClientRect();
          this.bars = Bc && Bc.width > 0 && Bc.height > 0 ? {
            left: Bc.left,
            top: Bc.top,
            right: Bc.right,
            bottom: Bc.bottom
          } : null
        }
        return this.bars
      }
      toastBox(cB) {
        var Bc;
        const nc = null !== (Bc = this.toasts[0]) && void 0 !== Bc ? Bc : null;
        if (nc !== this.toastEl || cB && nc) {
          this.toastEl = nc;
          const cB = null === nc || void 0 === nc ? void 0 : nc.getBoundingClientRect();
          this.toast = cB && cB.width > 0 && cB.height > 0 ? {
            left: cB.left,
            top: cB.top,
            right: cB.right,
            bottom: cB.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(cB, Bc, nc) {
        var Vc;
        const Ic = this.anchorOf(cB);
        if (!Ic) return 0;
        const rB = Ic.x + nc + (null !== (Vc = this.labelOffsets.get(cB)) && void 0 !== Vc ? Vc : 0),
          {
            halfWidth: uc,
            labelled: sc
          } = this.extentOf(cB),
          Mc = Ic.y + this.em * (sc ? 6.2 : 3);
        return Mc < Bc.top - 6 || rB + uc < Bc.left - 6 || rB - uc > Bc.right + 6 ? 0 : Bc.top - 6 - Mc
      }
      watch(cB) {
        var Bc, nc;
        this.tracker && this.sizes.unobserve(this.tracker), null === (Bc = this.hud) || void 0 === Bc || Bc.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = cB, this.hud = null !== (nc = null === cB || void 0 === cB ? void 0 : cB.closest(".Baf2QuestHud")) && void 0 !== nc ? nc : null, this.box = null, this.boxStale = !0, cB && this.sizes.observe(cB), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(cB, Bc) {
        var nc;
        const Vc = this.anchorOf(cB);
        if (!Vc) return 0;
        const {
          y: Ic
        } = Vc, rB = Vc.x + (null !== (nc = this.labelOffsets.get(cB)) && void 0 !== nc ? nc : 0), uc = this.em, {
          halfWidth: sc,
          labelled: Mc
        } = this.extentOf(cB), Pc = Ic - uc, qB = rB + sc;
        return Ic + uc * (Mc ? 6.2 : 3) < Bc.top || Pc > Bc.bottom || qB < Bc.left - 6 || rB - sc > Bc.right ? 0 : Math.max(Bc.left - 6 - qB, 6 - (rB - sc))
      }
      shiftOnScreen(cB) {
        var Bc;
        const nc = this.anchorOf(cB);
        if (!nc) return 0;
        const {
          halfWidth: Vc
        } = this.extentOf(cB), Ic = nc.x + (null !== (Bc = this.labelOffsets.get(cB)) && void 0 !== Bc ? Bc : 0), rB = Ic + Vc - (this.innerWidth - 6);
        return rB > 0 ? -rB : Math.max(0, 6 - (Ic - Vc))
      }
      runLabelAside(cB, Bc) {
        var nc;
        let Vc = null;
        for (let uc = 0; uc < cB.children.length; uc++) cB.children[uc].classList.contains("DirectionArrowLabel") && (Vc = cB.children[uc]);
        if (!Vc) return 0;
        const Ic = cB.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(cB) : null,
          rB = (Ic && this.api ? this.side.sideOf(this.api, {
            x: Ic.x / this.innerWidth * 100,
            y: Ic.y / this.innerHeight * 100
          }, Bc, this.project) : 0) * this.halfWidthOf(Vc);
        return rB !== (null !== (nc = this.sideLabels.get(Vc)) && void 0 !== nc ? nc : 0) && (Vc.style.transform = 0 === rB ? "" : `translateX(-50%) translateX(${rB}px)`, 0 === rB ? this.sideLabels.delete(Vc) : this.sideLabels.set(Vc, rB)), rB
      }
      extentOf(cB) {
        let Bc = this.em,
          nc = !1;
        for (let Vc = 0; Vc < cB.children.length; Vc++) {
          const Ic = cB.children[Vc],
            rB = Ic.classList.contains("DirectionArrowLabel");
          nc ||= rB, (rB || Ic.classList.contains("DirectionArrowDistance")) && (Bc = Math.max(Bc, this.halfWidthOf(Ic)))
        }
        return {
          halfWidth: Bc,
          labelled: nc
        }
      }
      halfWidthOf(cB) {
        let Bc = this.halfWidths.get(cB);
        return void 0 === Bc && (Bc = cB.offsetWidth / 2, this.halfWidths.set(cB, Bc), this.sizes.observe(cB), this.labels.add(cB)), Bc
      }
      forgetGoneLabels() {
        for (const cB of this.labels) cB.isConnected || (this.sizes.unobserve(cB), this.halfWidths.delete(cB), this.labels.delete(cB))
      }
      anchorOf(cB) {
        const Bc = cB.style.translate,
          nc = this.anchors.get(cB);
        if (nc && nc.translate === Bc && nc.innerWidth === this.innerWidth && nc.innerHeight === this.innerHeight) return nc;
        const Vc = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Bc);
        if (!Vc) return null;
        const Ic = {
          translate: Bc,
          x: parseFloat(Vc[1]) / 100 * this.innerWidth,
          y: parseFloat(Vc[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(cB, Ic), Ic
      }
    }
    const ES = "Baf2ArrowText";

    function oS(cB, Bc) {
      const nc = cB.rows.find((cB => cB.current));
      return vB(cB.tutorial) && null !== nc && void 0 !== nc && nc.item && NI(nc) && bB(nc.item).includes(Bc) ? nc.item : null
    }
    const WS = new class {
      constructor(cB) {
        this.select = cB, this.picks = new Map
      }
      open(cB, Bc, nc) {
        const Vc = oS(Bc, cB);
        null !== Vc && this.Vn(cB, Vc, nc)
      }
      follow(cB, Bc) {
        if (sc())
          for (const [nc, {
              item: Vc,
              had: Ic
            }] of this.picks) {
            const rB = oS(cB, nc);
            rB !== Vc && (null !== rB && Bc(Vc) > Ic ? this.Vn(nc, rB, Bc) : this.picks.delete(nc))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Vn(cB, Bc, nc) {
        this.picks.set(cB, {
          item: Bc,
          had: nc(Bc)
        }), this.select(cB, Bc)
      }
    }(gr.s);

    function wS(cB) {
      return Bc => {
        let nc = 0;
        for (const Vc of cB.getInventoryItems())(null === Vc || void 0 === Vc ? void 0 : Vc.name) === Bc && (nc += null === Vc.amount ? 1 : Math.max(Vc.amount, 0));
        return nc
      }
    }

    function ky(cB, Bc, nc, Vc) {
      cB.getClientOption(Bc, "canCraft") && "inventory" !== TI.d.get("openInGameMenuName") && (WS.open(nc, Vc.get(), wS(cB)), LI.i.Vu("toggleMenu", `inventory|${nc}`))
    }
    let XS = null,
      HS = !1;

    function FS(cB) {
      const Bc = mu();
      cB === XS && Bc === HS || (XS = cB, HS = Bc, (0, gr.w)(function(cB, Bc) {
        const nc = new Map;
        for (let Vc = cB + 1; Vc <= Ic.length; Vc++) {
          const Ic = Er(Vc, cB, Bc);
          if (Ic)
            for (const Bc of Sc(Vc).unlocks) nc.set(Bc, {
              ...Ic,
              stepsAway: Vc - cB
            })
        }
        return nc
      }(cB, Bc)))
    }

    function JS() {
      return (0, gr.D)(Nr(Object.keys(Uc), Zr)), () => {
        (0, gr.D)([])
      }
    }
    const jy = "buildAFactory2Game:",
      RS = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      iy = {
        on: `${jy}tutorialButtonOn`,
        hud: `${jy}tutorialButtonHud`,
        off: `${jy}tutorialButtonOff`
      },
      KS = {
        on: `${jy}tutorialPickedOn`,
        hud: `${jy}tutorialPickedHud`,
        off: `${jy}tutorialPickedOff`
      };

    function xy(cB, Bc, nc) {
      let Vc = null,
        Ic = () => {};
      const rB = rB => {
        var uc;
        let {
          tutorial: sc,
          tutorialKnown: Mc
        } = rB;
        (null === (uc = Vc) || void 0 === uc ? void 0 : uc.tutorial) === sc && Vc.tutorialKnown === Mc || (Vc = {
          tutorial: sc,
          tutorialKnown: Mc
        }, Ic = (0, qr.w)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: iy[sc],
          icon: {
            kind: "icon",
            name: RS[sc]
          },
          iconOnly: !0,
          disabled: !Mc,
          className: "Baf2TutorialButton",
          onClick: () => {
            var Vc;
            (Vc => {
              const Ic = Bc.setTutorial(Vc);
              cB.send(`baf2tutorial ${Vc} ${Ic}`), nc.show({
                baf2ToastText: [(0, Dc.od)({
                  translationKey: KS[Vc]
                }, Dc.C.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((Vc = Bc.get().tutorial, Cc[(Cc.indexOf(Vc) + 1) % Cc.length]))
          }
        }))
      };
      rB(Bc.get());
      const uc = LI.i.subscribe(UI, rB);
      return () => {
        LI.i.unsubscribe(uc), Ic()
      }
    }

    function dS(cB, Bc, nc) {
      var Vc, Ic;
      const rB = cB.getTargetedBlock();
      if (!rB || ! function(cB, Bc, nc) {
          if ("Chest" !== Bc) return !1;
          const Vc = cB.split("|")[0];
          if (!nn(Vc) || 0 === LB[Vc].outputSlots.length) return !1;
          const Ic = Mt(cB);
          return nc[0] === Ic[0] && nc[1] === Ic[1] && nc[2] === Ic[2]
        }(nc, null === (Vc = cB.lMc(Bc)) || void 0 === Vc ? void 0 : Vc.name, rB.normal)) return !1;
      const [uc, sc, Mc] = rB.Xr, Pc = cB.getBlockId(uc, sc, Mc);
      return 0 === Pc || !0 === (null === (Ic = Qc.g[Pc]) || void 0 === Ic ? void 0 : Ic.canBePlacedOver)
    }
    var AS = nc(35371);
    const GS = new Set(Mn.e);
    class cz {
      constructor(cB) {
        this.toasts = cB, this.lastAt = -1 / 0
      }
      onAltAction(cB, Bc, nc) {
        const Vc = cB.getTargetedBlock();
        if (!Vc || function(cB) {
            const Bc = cB.split("|")[0];
            return nn(Bc) || null !== tI(Bc) || Lc(Bc) || Mn.e.includes(Bc)
          }(nc) && !GS.has(nc.split("|")[0])) return;
        const Ic = cB.lMc(Bc);
        if (!Ic || !GS.has(Ic.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const rB = Ic.typeObj.id,
          [uc, sc, Mc] = Vc.Xr,
          Pc = cB.getBlockId(uc, sc, Mc),
          qB = Qc.g[Pc];
        (0 === Pc || null !== qB && void 0 !== qB && qB.yV || null !== qB && void 0 !== qB && qB.canBePlacedOver) && cB.isSolidToPlayerBlockId(rB) && cB.canModifyBlockAt(uc, sc, Mc) && cB.Fsc(uc, sc, Mc, rB) && !cB.Fsc(uc, sc, Mc, rB, Bc) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Dc.od)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Dc.C.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class By {
      constructor(cB) {
        this.show = cB, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(cB, Bc, nc) {
        var Vc;
        if (!Bc) return this.started = null, void this.gatedThisHold.clear();
        if (!cB) return void(this.started = null);
        const Ic = `${cB.x},${cB.y},${cB.z},${cB.XB}`;
        if (Ic === this.started) return;
        this.started = Ic;
        const rB = ZV(cB.y) ? Ft(cB.block, cB.XB, cB.level) : null;
        if (null === rB || this.gatedThisHold.has(Ic)) return;
        this.gatedThisHold.add(Ic);
        const uc = cB.block.split("|")[0];
        nc - (null !== (Vc = this.hintedAt.get(uc)) && void 0 !== Vc ? Vc : -1 / 0) < 5e3 || (this.hintedAt.set(uc, nc), this.show({
          baf2ToastText: Jt(rB, cB.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var ny = nc(51);

    function Vy(cB, Bc) {
      const nc = [...cB.baf2CoreBankPaused];
      for (const [Ic] of cB.baf2CoreBanked) nc.push(Ic);
      for (const uc of Ic) {
        for (const {
            item: cB
          }
          of uc.cost) nc.push(cB);
        for (const cB of uc.newDeposits) nc.push(cB.block);
        for (const cB of uc.unlocks) nc.push(cB, Zc(cB));
        uc.reward && nc.push(uc.reward);
        for (const {
            item: cB
          }
          of null !== (Vc = null === (rB = uc.charge) || void 0 === rB ? void 0 : rB.items) && void 0 !== Vc ? Vc : []) {
          var Vc, rB;
          nc.push(cB)
        }
      }
      return {
        message: cB,
        itemNames: Bc([...new Set(nc)])
      }
    }
    const Iy = "baf2MultiblockGuide";
    const rz = new Map;
    const uy = function(cB, Bc, nc, Ic) {
      let {
        localPlayerId: rB
      } = Ic;
      const uc = new ss,
        sc = new wT,
        Pc = new cm,
        qB = new AT(Pc),
        Oc = (cB, Bc) => {
          Bc ? qB.observe(cB) : qB.unobserve(cB)
        },
        Tc = new dT,
        fc = new Bf(Oc),
        mB = cB => fc.covers(cB),
        ec = new pf;
      let tB;
      const Sc = new Zu((cB => {
          tB.sendCommand(cB)
        })),
        yB = () => {
          Sc.send("baf2questbook")
        },
        zB = cB => function(cB, Bc, nc) {
          const Vc = {};
          for (const Ic of nc) {
            let nc = rz.get(Ic);
            void 0 === nc && (nc = cB.getItemStat(Bc, Ic, "displayName"), rz.set(Ic, nc)), Vc[Ic] = nc
          }
          return Vc
        }(tB, rB, cB),
        pc = new QI(yB),
        hc = new Qf((() => TI.d.get("loadingOverlayVisible"))),
        aB = new Ef,
        lc = new cz(hc),
        Yc = new By((cB => {
          hc.show(cB, cB.baf2ToastMs)
        })),
        gB = new jm(Oc),
        Uc = new St(gB),
        bB = new eu,
        Zc = new kS,
        Cc = new Ru,
        vB = new Gf({
          read: () => !1 !== ny.h.getItem(Iy),
          write: cB => {
            ny.h.setItem(Iy, cB)
          }
        }),
        Ec = new Lm(vB),
        oc = new be(vB),
        Wc = new dm(vB, (cB => function(cB, Bc) {
          const nc = Fs(Bc.w, Bc.h, Bc.d),
            Vc = new Uint8Array(nc);
          for (let Ic = 0; Ic < nc; Ic++) {
            const nc = pm(cB, Jn(Bc, Kn(Bc, Ic)));
            Vc[Ic] = null === nc ? 0 : ws(nc)
          }
          return Vc
        }(tB, cB)), Xm(Sc)),
        wc = new Am(vB, Xm(Sc)),
        kB = new Km,
        Xc = (cB, Bc) => {
          let [nc, Vc, Ic] = cB;
          kB.answered(Bc) || hc.show({
            baf2ToastText: [(0, Dc.od)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: nc,
                h: Vc,
                d: Ic
              }
            }, Dc.C.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      Wc.onSizeNotTaken(Xc), wc.onSizeNotTaken(Xc);
      const Jc = new ne,
        jB = new Ne(vB),
        Rc = new oe,
        Kc = new Ke(Rc),
        xB = new ut,
        dc = new yS,
        Gc = new bS(dc),
        cn = new wt(dc),
        BB = dc.lookSource(),
        nB = new BS({
          handles: cB => BB.handles(cB) || cB === Nc,
          line: (cB, Bc) => cB === Nc ? function(cB, Bc, nc) {
            var Vc;
            const Ic = Fc(null === (Vc = Bc.at(nc)) || void 0 === Vc ? void 0 : Vc.item);
            return null === Ic ? {
              key: `${At}lookFarmEmpty`
            } : {
              key: cB.blockIdToBlockName(cB.getBlockId(nc[0], nc[1], nc[2])).endsWith("|Running") ? `${At}lookFarmRunning` : `${At}lookFarmWaiting`,
              keys: {
                mob: Hc(Ic)
              }
            }
          }(tB, gB, Bc) : BB.line(cB, Bc),
          version: () => BB.version() + gB.version()
        }, (cB => Qm(vB.all(), cB, (cB => pm(tB, cB)))), (() => pc.get().tier)),
        VB = new zt,
        rn = new eS,
        uB = new hS,
        sB = hS.blade(),
        MB = new ZS,
        PB = new wf,
        qn = new NS,
        OB = new LS,
        TB = new YS;
      let fB = -1 / 0,
        mn = 0,
        eB = -1 / 0,
        tn = -1 / 0;
      const SB = () => {
          Sc.send("baf2islandsclose"), tn = Date.now()
        },
        yn = [];

      function zn(cB) {
        var Bc, nc, Vc, Ic, rB, uc, Mc;
        "core" === (null === (Bc = sc.get()) || void 0 === Bc ? void 0 : Bc.kind) && "core" !== (null === cB || void 0 === cB ? void 0 : cB.kind) && Sc.send("baf2coreclose"), "power" === (null === (nc = sc.get()) || void 0 === nc ? void 0 : nc.kind) && "power" !== (null === cB || void 0 === cB ? void 0 : cB.kind) && Sc.send("baf2powerclose"), "water" === (null === (Vc = sc.get()) || void 0 === Vc ? void 0 : Vc.kind) && "water" !== (null === cB || void 0 === cB ? void 0 : cB.kind) && Sc.send(Ac.v), "terminal" === (null === (Ic = sc.get()) || void 0 === Ic ? void 0 : Ic.kind) && "terminal" !== (null === cB || void 0 === cB ? void 0 : cB.kind) && Sc.send("baf2terminalclose"), "islands" === (null === (rB = sc.get()) || void 0 === rB ? void 0 : rB.kind) && "islands" !== (null === cB || void 0 === cB ? void 0 : cB.kind) && SB();
        const Pc = dc.getStatus();
        "collider" === (null === (uc = sc.get()) || void 0 === uc ? void 0 : uc.kind) && "collider" !== (null === cB || void 0 === cB ? void 0 : cB.kind) && Pc && Sc.send(gP(Pc, "close"));
        const qB = cB => "reactor" === cB || "battery" === cB;
        if (qB(null === (Mc = sc.get()) || void 0 === Mc ? void 0 : Mc.kind) && !qB(null === cB || void 0 === cB ? void 0 : cB.kind)) {
          var Oc, Tc, fc;
          const cB = "reactor" === (null === (Oc = sc.get()) || void 0 === Oc ? void 0 : Oc.kind) ? null === (Tc = Wc.get()) || void 0 === Tc ? void 0 : Tc.status.baf2RxAt : null === (fc = wc.get()) || void 0 === fc ? void 0 : fc.status.baf2BatAt;
          cB && Sc.send(IB(cB, "close"))
        }
        "quests" === (null === cB || void 0 === cB ? void 0 : cB.kind) && yB(), sc.set(cB), null === cB && aB.release()
      }

      function hB() {
        (0, OI.f)(), zn(null)
      }
      let an = new Set,
        lB = !1;
      const YB = {
        onCreate: cB => {
          tB = cB, tB.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const Bc of pB) {
            const cB = LB[Bc].inputSlots ? aM(uc) : zM(Bc, uc, bB, Sc);
            yn.push((0, PI.e)(Bc, cB))
          }
          yn.push((0, OI.x)((0, Vc.createElement)(Vc.Fragment, null, (0, Vc.createElement)(If, {
            controller: fc
          }), (0, Vc.createElement)(Kf, {
            store: gB
          }), (0, Vc.createElement)(VS, {
            store: nB
          }), (0, Vc.createElement)(bm, {
            store: pc
          }), (0, Vc.createElement)(Df, {
            store: hc
          }), (0, Vc.createElement)(of, {
            store: aB
          }), (0, Vc.createElement)(Xf, {
            store: PB
          }), (0, Vc.createElement)(Be, {
            store: Jc
          }), (0, Vc.createElement)(We, {
            store: Rc
          })), {
            content: (0, Vc.createElement)(kf, {
              commands: Sc,
              store: sc,
              power: bB,
              water: Cc,
              reactor: Wc,
              battery: wc,
              collider: dc,
              terminal: Zc,
              quests: pc,
              close: OI.j,
              OV: () => {
                aB.dropHeld(), (0, OI.f)()
              },
              askIslands: () => {
                tn = -1 / 0, fB = Date.now(), mn = Sc.send(iB)
              },
              openSocial: () => {
                (0, OI.f)(), TI.d.set({
                  openEverythingMenuName: In.i.SOCIAL
                })
              },
              showCore: cB => {
                zn({
                  kind: "core",
                  core: cB
                }), Sc.send("baf2corereopen")
              }
            }),
            onClose: () => {
              zn(null)
            }
          })), yn.push((0, qr.w)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              zn({
                kind: "quests"
              }), (0, OI.s)()
            }
          })), yn.push(xy(Sc, pc, hc)), lB = !1, yn.push(er((() => {
            null !== XS && FS(XS)
          }))), yn.push(JS()), yn.push(function() {
            const cB = LI.i.subscribe(UI, FI),
              Bc = () => {
                if (HI) {
                  const cB = HI;
                  HI = null, (0, gr.A)(cB)
                }
              },
              nc = LI.i.subscribe("toggleMenu", (cB => {
                "inventory" === (null === cB || void 0 === cB ? void 0 : cB.split("|")[0]) && Bc()
              })),
              Vc = LI.i.subscribe("appManagerUpdated|openInGameMenuName", (cB => {
                "inventory" === cB && Bc()
              }));
            return () => {
              LI.i.unsubscribe(cB), LI.i.unsubscribe(nc), LI.i.unsubscribe(Vc)
            }
          }()), yn.push(function(cB) {
            const Bc = wS(cB),
              nc = LI.i.subscribe(UI, (cB => {
                WS.follow(cB, Bc)
              }));
            return () => {
              LI.i.unsubscribe(nc), WS.clear()
            }
          }(tB)), yn.push(function() {
            const cB = document.documentElement,
              Bc = (0, am.e)(".InvenBodyRight", [], (() => {
                const Bc = document.querySelector(".InvenBodyRight");
                Bc && cB.style.setProperty("--baf2-backpack-width", `${Bc.offsetWidth}px`)
              }));
            return () => {
              Bc(), cB.style.removeProperty("--baf2-backpack-width")
            }
          }()), yn.push(function() {
            const cB = document.documentElement;
            return cB.classList.add(ES), () => {
              cB.classList.remove(ES)
            }
          }()), yn.push((() => {
            qB.dispose(), Pc.dispose()
          })), ec.start(tB), yn.push((() => {
            ec.dispose(), MB.dispose(), Uc.dispose()
          }))
        },
        onClose: () => {
          (0, gr.A)([]), HI = null, XI = new Set, XS = null, (0, gr.w)(new Map), rz.clear();
          for (const cB of yn) cB();
          pc.dispose(), nB.dispose(), hc.dispose(), aB.dispose(), VB.dispose(), rn.dispose(tB), Ec.dispose(tB), oc.dispose(tB), jB.dispose(tB), Kc.dispose(tB), Rc.dispose(), xB.dispose(), vB.dispose(), Wc.dispose(), wc.dispose(), Jc.dispose(), uB.dispose(), sB.dispose(), PB.dispose(), Gc.dispose(tB), cn.dispose(tB), dc.dispose(), qn.dispose(), Sc.clear()
        },
        onAfterRender: (cB, Bc) => {
          var nc, Vc, Ic;
          try {
            ec.onAfterRender(Bc)
          } catch (Pc) {
            console.error("Error drawing BAF2 belt items", Pc)
          }
          try {
            MB.onAfterRender(tB, rB)
          } catch (Pc) {
            console.error("Error drawing BAF2 jet flames", Pc)
          }
          lB || (lB = !0, Sc.send("baf2clientready"));
          const uc = tB.getPositionView(rB);
          fc.onAfterRender(Bc, uc, Tc), gB.onAfterRender(Bc, uc, Tc, mB), qB.run(Tc), VB.onAfterRender(tB, uc), rn.onAfterRender(tB, uc), Uc.onAfterRender(tB, uc), Ec.onAfterRender(tB, uc), oc.onAfterRender(tB, rB, uc), jB.onAfterRender(tB, rB, uc), Kc.onAfterRender(tB, rB), xB.onAfterRender(tB, uc), pc.onPlayerY(uc[1]), Gc.onAfterRender(tB), cn.onAfterRender(tB, rB, uc);
          const Mc = tB.getTargetedBlock();
          nB.onAfterRender(tB, rB, null !== (nc = null === Mc || void 0 === Mc ? void 0 : Mc.WIc) && void 0 !== nc ? nc : 0, null !== (Vc = null === Mc || void 0 === Mc ? void 0 : Mc.position) && void 0 !== Vc ? Vc : null), qn.onAfterRender(tB, Bc), Yc.onMining(function(cB, Bc) {
            var nc, Vc;
            const Ic = cB.getMiningBlock();
            if (!Ic) return null;
            const rB = (0, Qc.f)(cB.getBlockId(Ic[0], Ic[1], Ic[2])),
              uc = null !== (nc = null === (Vc = cB.lMc(Bc)) || void 0 === Vc ? void 0 : Vc.name) && void 0 !== nc ? nc : null,
              sc = cB.getItemStat(Bc, rB.split("|")[0], "harvestLevel");
            return {
              block: rB,
              x: Ic[0],
              y: Ic[1],
              z: Ic[2],
              XB: uc,
              level: sc
            }
          }(tB, rB), tB.isMining(), performance.now()), "dropMap" === (null === (Ic = sc.get()) || void 0 === Ic ? void 0 : Ic.kind) && ZV(uc[1]) && hB()
        },
        onPlayerChangeBlock: (cB, Bc, nc, Vc, Ic, uc) => {
          cB === rB && function(cB, Bc, nc, Vc, Ic, rB, uc) {
            const sc = lS(rB, uc, cB.isPlayerCrouching(Bc));
            if (null === sc) return;
            if (cB.UBc(nc, Vc, Ic, sc), !cB.getClientOption(Bc, "canPickUpItems")) return;
            const Mc = GB[sc.split("|")[0]];
            var Pc, qB, Oc;
            void 0 !== Mc && (Pc = cB.getInventoryItems(), qB = Mc, Oc = ce.e.maxItemStackSize, cB.getInventoryFreeSlotCount(Bc) > 0 || Pc.some((cB => null !== cB && cB.name === qB && null !== cB.amount && cB.amount < Oc))) && cB.playSound(Bc, (0, AS.b)("pickUp"), .5, 1)
          }(tB, cB, Bc, nc, Vc, Ic, uc)
        },
        onPlayerAltAction: (cB, Bc, nc, Vc, Ic) => {
          var uc, sc;
          if (!tB.getClientOption(rB, "canPickUpItems")) return;
          const Mc = null !== (uc = null === (sc = tB.lMc(rB)) || void 0 === sc ? void 0 : sc.name) && void 0 !== uc ? uc : null,
            Pc = function(cB, Bc) {
              const nc = cB.split("|")[0];
              return Lc(nc) && Bc !== cr && "Sky Pack" !== Bc ? nc : null
            }(Ic, Mc);
          if (null !== Pc) return void(OB.tap(Pc, performance.now()) && ky(tB, rB, Pc, pc));
          if (!DV(Mc)) return;
          const qB = TB.isNewPress(performance.now()),
            Oc = function(cB, Bc, nc) {
              return !DV(Bc) || nc ? null : FV(cB)
            }(Ic, Mc, tB.isPlayerCrouching(rB));
          null !== Oc && qB && tB.UBc(Bc, nc, Vc, Oc)
        },
        onPlayerAttemptAltAction: (cB, Bc, nc, Vc, Ic) => {
          if (function(cB, Bc, nc, Vc, Ic) {
              "Workbench" === Vc.split("|")[0] && cB.getClientOption(nc, "canCraft") && (WS.open("Workbench", Ic.get(), wS(cB)), Bc.send("baf2station Workbench"))
            }(tB, Sc, rB, Ic, pc), dS(tB, rB, Ic)) return "preventAction";
          lc.onAltAction(tB, rB, Ic)
        },
        onReceivedMessageFromServer: (cB, Bc) => {
          if ("baf2MachineStatus" === cB) {
            var nc, Vc, Ic, Pc, qB, Oc, Tc, mB, yB, lc, Yc, Lc, Uc, Qc, Dc, Nc;
            const cB = Bc,
              rB = cB.baf2MachineTaught;
            uc.set(cB.baf2MachinePos, {
              status: cB.baf2MachineStatus,
              power: null !== (nc = cB.baf2MachinePower) && void 0 !== nc ? nc : null,
              opLeftMs: null !== (Vc = cB.baf2MachineOpLeftMs) && void 0 !== Vc ? Vc : null,
              dug: cB.baf2MachineYield ? {
                item: cB.baf2MachineYield,
                name: zB([cB.baf2MachineYield])[cB.baf2MachineYield]
              } : null,
              powerCap: null !== (Ic = cB.baf2MachinePowerCap) && void 0 !== Ic ? Ic : null,
              powerRates: null !== (Pc = cB.baf2MachinePowerRates) && void 0 !== Pc ? Pc : null,
              coupled: !0 === cB.baf2MachineCoupled,
              couplerLevel: null !== (qB = cB.baf2MachineCoupler) && void 0 !== qB ? qB : 1,
              taught: rB,
              taughtName: rB ? zB([rB])[rB] : null,
              tier: null !== (Oc = cB.baf2MachineTier) && void 0 !== Oc ? Oc : null,
              input: null !== (Tc = cB.baf2MachineInput) && void 0 !== Tc ? Tc : null,
              inertCoupler: null !== (mB = cB.baf2MachineInertCoupler) && void 0 !== mB ? mB : null,
              inputShort: null !== (yB = cB.baf2MachineInputShort) && void 0 !== yB ? yB : null,
              field: null !== (lc = cB.baf2MachineField) && void 0 !== lc ? lc : null,
              noSeeds: !0 === cB.baf2MachineNoSeeds,
              fuelFed: !0 === cB.baf2MachineFuelFed,
              fuelFeeds: !0 === cB.baf2MachineFuelFeeds,
              coreFull: !0 === cB.baf2MachineCoreFull,
              waterUnpowered: !0 === cB.baf2MachineWaterUnpowered,
              powerShort: !0 === cB.baf2MachinePowerShort,
              powerWait: !0 === cB.baf2MachinePowerWait,
              reactorPowered: !0 === cB.baf2MachineReactorPowered,
              fuelLeftMs: null !== (Yc = cB.baf2MachineFuelLeftMs) && void 0 !== Yc ? Yc : null,
              burning: null !== (Lc = cB.baf2MachineBurning) && void 0 !== Lc ? Lc : null,
              fuelKeep: null !== (Uc = cB.baf2MachineFuelKeep) && void 0 !== Uc ? Uc : null,
              water: null !== (Qc = cB.baf2MachineWater) && void 0 !== Qc ? Qc : null,
              farm: null !== (Dc = cB.baf2MachineFarm) && void 0 !== Dc ? Dc : null,
              cryo: null !== (Nc = cB.baf2MachineCryo) && void 0 !== Nc ? Nc : null
            })
          } else if ("baf2StationOpen" === cB) {
            const cB = Bc.baf2Station;
            OB.consumeServerOpen(cB, performance.now()) || ky(tB, rB, cB, pc)
          } else if ("baf2Power" === cB) {
            const cB = Bc;
            bB.set(cB), cB.baf2PowerOpen && (zn({
              kind: "power"
            }), (0, OI.s)())
          } else if (cB === Ac.z) {
            const cB = Bc;
            Cc.set(cB), cB.baf2WaterOpen && (zn({
              kind: "water"
            }), (0, OI.s)())
          } else if ("baf2RxPlans" === cB) {
            var Ec, oc, Xc;
            const cB = Bc;
            vB.tC(cB);
            const nc = new Set(cB.baf2RxPlanList.map((cB => {
              let [Bc, nc, Vc] = cB;
              return `${Bc},${nc},${Vc}`
            })));
            Jc.retain(nc);
            const Vc = null === (Ec = sc.get()) || void 0 === Ec ? void 0 : Ec.kind,
              Ic = "reactor" === Vc ? null === (oc = Wc.get()) || void 0 === oc ? void 0 : oc.status.baf2RxAt : "battery" === Vc ? null === (Xc = wc.get()) || void 0 === Xc ? void 0 : Xc.status.baf2BatAt : void 0;
            Ic && an.has(Ic.join(",")) && !nc.has(Ic.join(",")) && hB(), an = nc
          } else if ("baf2RxStatus" === cB) {
            const cB = Bc;
            Wc.set(cB), cB.baf2RxOpen && (zn({
              kind: "reactor"
            }), (0, OI.s)())
          } else if ("baf2BatStatus" === cB) {
            const cB = Bc;
            wc.set(cB), cB.baf2BatOpen && (zn({
              kind: "battery"
            }), (0, OI.s)())
          } else if ("baf2RxAlarm" === cB) Jc.tC(Bc);
          else if ("baf2Bomb" === cB) Rc.tC(Bc, tB.getPositionView(rB));
          else if ("baf2Fallout" === cB) xB.tC(Bc);
          else if ("baf2ColBeams" === cB) dc.onBeams(Bc);
          else if ("baf2ColStatus" === cB) {
            const cB = Bc;
            var Hc, Fc;
            if (dc.onStatus(cB), cB.baf2ColOpen) dc.onOpen(null !== (Hc = null === (Fc = tB.lMc(rB)) || void 0 === Fc ? void 0 : Fc.name) && void 0 !== Hc ? Hc : null), zn({
              kind: "collider"
            }), (0, OI.s)()
          } else if ("baf2Terminal" === cB) {
            const cB = Bc;
            var jB;
            if (Zc.apply(cB)) cB.baf2TermReset && (zn({
              kind: "terminal"
            }), (0, OI.s)());
            else "terminal" === (null === (jB = sc.get()) || void 0 === jB ? void 0 : jB.kind) && (sc.set(null), (0, OI.f)())
          } else if ("baf2Core" === cB) {
            var Kc;
            const cB = Bc;
            if (Mc(!0 === cB.baf2CoreNuclear), function(cB, Bc) {
                return "core" === (null === cB || void 0 === cB ? void 0 : cB.kind) && Bc.baf2CoreTier > cB.core.message.baf2CoreTier
              }(sc.get(), cB)) return void(0, OI.f)();
            if (cB.baf2CoreRefresh && "core" !== (null === (Kc = sc.get()) || void 0 === Kc ? void 0 : Kc.kind)) return;
            zn({
              kind: "core",
              core: Vy(cB, zB)
            }), cB.baf2CoreRefresh || (0, OI.s)()
          } else if ("baf2WrenchUndo" === cB) {
            const {
              baf2WrenchPos: cB,
              baf2WrenchBlock: nc
            } = Bc;
            tB.UBc(cB[0], cB[1], cB[2], nc)
          } else if ("baf2Toast" === cB) {
            const cB = Bc;
            kB.heard(performance.now(), cB.baf2ToastMs), hc.show(cB)
          } else if ("baf2Area" === cB) aB.arrive(Bc, null !== sc.get());
          else if ("baf2Quest" === cB) {
            const cB = Bc;
            Mc(!0 === cB.baf2QuestNuclear), pc.set(cB, function(cB, Bc) {
              var nc, Vc, Ic, rB, uc;
              const sc = [];
              for (const [, , qB, , , , , , Oc, Tc] of cB.baf2QuestSteps) null !== qB && sc.push(qB), sc.push(...null !== Oc && void 0 !== Oc ? Oc : [], ...null !== Tc && void 0 !== Tc ? Tc : []);
              cB.baf2QuestReward && sc.push(cB.baf2QuestReward);
              const Mc = null === (nc = cB.baf2QuestSide) || void 0 === nc ? void 0 : nc[2][2];
              Mc && sc.push(Mc), sc.push(...null !== (Vc = null === (Ic = cB.baf2QuestSide) || void 0 === Ic ? void 0 : Ic[2][8]) && void 0 !== Vc ? Vc : [], ...null !== (rB = null === (uc = cB.baf2QuestSide) || void 0 === uc ? void 0 : uc[2][9]) && void 0 !== rB ? rB : []);
              for (const [qB] of null !== (Pc = cB.baf2QuestAlso) && void 0 !== Pc ? Pc : []) {
                var Pc;
                sc.push(qB)
              }
              return Bc(sc)
            }(cB, zB)), FS(cB.baf2QuestTier)
          } else if ("baf2Route" === cB) ! function(cB, Bc) {
            let {
              baf2RouteCells: nc,
              baf2RouteInto: Vc
            } = Bc;
            0 !== nc.length && Vc ? cB.setRouteChevrons({
              cells: nc.map(((cB, Bc) => {
                const [Ic, , rB] = function(cB, Bc, nc) {
                  const Vc = nc + 1 < cB.length ? cB[nc + 1] : Bc;
                  return [Vc[0] - cB[nc][0], 0, Vc[2] - cB[nc][2]]
                }(nc, Vc, Bc);
                return {
                  pos: cB,
                  way: [Ic, rB]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : cB.setRouteChevrons(null)
          }(tB, Bc);
          else if ("baf2QuestBook" === cB) pc.setBook(Bc);
          else if ("baf2Stalls" === cB) fc.set(Bc.baf2StallCells);
          else if (cB === Mn.o) ec.onMoves(Bc);
          else if (cB === Mn.m) ec.onLines(Bc);
          else if ("baf2Labels" === cB) gB.tC(Bc);
          else if ("baf2DropMap" === cB) zn({
            kind: "dropMap",
            dropMap: Bc
          }), (0, OI.s)();
          else if ("baf2Islands" === cB) {
            var Gc, cn;
            const cB = Bc;
            if (Sc.syncIslandEdits(cB.baf2IslandsAnswered), !cB.baf2IslandsOpen && "islands" !== (null === (Gc = sc.get()) || void 0 === Gc ? void 0 : Gc.kind)) return;
            if (cB.baf2IslandsOpen) {
              var BB, nB;
              const Bc = TI.d.get("openEverythingMenuName"),
                nc = Sc.sent() >= mn,
                Vc = "other" !== (yn = {
                  askedAtMs: fB,
                  askSent: nc,
                  reaskedAtMs: eB,
                  nowMs: Date.now(),
                  panel: null !== (BB = null === (nB = sc.get()) || void 0 === nB ? void 0 : nB.kind) && void 0 !== BB ? BB : null,
                  inGameMenu: TI.d.get("openInGameMenuName"),
                  everythingMenu: null === Bc ? null : Bc === In.i.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== cB.baf2IslandsFocusInvite
                }).everythingMenu && (!!yn.focusInvite || "islands" === yn.panel && "clientGame" === yn.inGameMenu || !(yn.nowMs - yn.reaskedAtMs < aq) && (yn.askSent && yn.nowMs - yn.askedAtMs < aq ? "core" === yn.panel && "clientGame" === yn.inGameMenu && null === yn.everythingMenu : "shop" === yn.everythingMenu || null === yn.inGameMenu));
              if (nc && (fB = -1 / 0), eB = -1 / 0, !Vc) return void SB()
            }
            const nc = (IB = cB.baf2IslandsOpen, rn = "islands" === (null === (cn = sc.get()) || void 0 === cn ? void 0 : cn.kind), qn = tn, TB = Date.now(), IB && !rn && TB - qn < aq);
            zn({
              kind: "islands",
              islands: cB,
              arrivedAtMs: Date.now(),
              backToCore: lP(sc.get())
            }), nc && (tn = -1 / 0, eB = Date.now(), Sc.send(iB)), cB.baf2IslandsOpen && ("clientGame" !== TI.d.get("openInGameMenuName") && (0, fI.e)(), (0, OI.s)())
          } else if ("baf2CoopTransfer" === cB) {
            var VB;
            const cB = Bc;
            cB.baf2TransferOn ? (zn({
              kind: "transfer",
              transfer: cB,
              arrivedAtMs: Date.now()
            }), (0, OI.s)()) : "transfer" === (null === (VB = sc.get()) || void 0 === VB ? void 0 : VB.kind) && (0, OI.f)()
          } else "baf2IslandLeft" === cB ? (aB.dropHeld(), null !== sc.get() && hB(), "inventory" === TI.d.get("openInGameMenuName") && (0, fI.e)()) : "baf2Arc" === cB ? uB.tC(tB, Bc) : "baf2Blade" === cB ? sB.onBlade(tB, Bc) : "baf2JetFlame" === cB ? MB.tC(tB, Bc) : "baf2GearPower" === cB && PB.tC(Bc);
          var IB, rn, qn, TB, yn
        }
      };
      return YB
    }
  },
  37049: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc) {
      const Vc = new Set,
        Ic = new ResizeObserver(nc),
        rB = () => {
          const Bc = new Set(document.querySelectorAll(cB));
          let rB = !1;
          for (const cB of Vc) Bc.has(cB) || (Ic.unobserve(cB), Vc.delete(cB), rB = !0);
          for (const cB of Bc) Vc.has(cB) || (Ic.observe(cB), uc.observe(cB, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Vc.add(cB));
          rB && nc()
        },
        uc = new MutationObserver((Bc => {
          Bc.some((cB => "attributes" === cB.type)) && nc(), Bc.some((Bc => function(cB, Bc, nc) {
            if ("childList" !== cB.type) return !1;
            for (const Vc of cB.addedNodes)
              if (Vc instanceof Element && (Vc.matches(Bc) || Vc.querySelector(Bc))) return !0;
            for (const Vc of cB.removedNodes)
              if (Vc instanceof Element)
                for (const cB of nc)
                  if (Vc.contains(cB)) return !0;
            return !1
          }(Bc, cB, Vc))) && rB()
        }));
      uc.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const sc of Bc) Ic.observe(sc);
      return window.addEventListener("resize", nc), rB(), nc(), () => {
        Ic.disconnect(), uc.disconnect(), window.removeEventListener("resize", nc)
      }
    }
    nc.d(Bc, {
      e: () => Vc
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);