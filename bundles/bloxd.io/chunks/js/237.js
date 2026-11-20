export const id = 237;
export const ids = [237];
export const modules = {
  38123: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(38128);
    const Ob = [0, 0, 0];
    class Gb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ob;
        this.pool = bb, this.origin = ub, this.count = 0, this.free = []
      }
      take() {
        var bb;
        const ub = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.count++;
        return ub >= this.pool.LH && this.pool.grow(Math.max(2 * this.pool.LH, ub + 1)), this.hide(ub), ub
      }
      release(bb) {
        this.hide(bb), this.free.push(bb)
      }
      write(bb, ub, hb, Ob) {
        const {
          records: Gb
        } = this.pool, {
          origin: Ub
        } = this, Lb = bb * Bb.d;
        Gb[Lb] = ub - Ub[0], Gb[Lb + 1] = hb - Ub[1], Gb[Lb + 2] = Ob - Ub[2], Gb[Lb + Bb.h] = 0, this.pool.markDirty(bb)
      }
      hide(bb) {
        this.pool.records[bb * Bb.d + Bb.h] = 1, this.pool.markDirty(bb)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Ub {
      constructor(bb, ub, hb) {
        this.api = bb, this.model = ub, this.initialCapacity = hb, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(bb) {
        let ub = this.kinds.get(bb);
        if (void 0 === ub) {
          const hb = this.api.createInstancePool({
            ...this.model,
            item: bb
          }, this.initialCapacity);
          null === hb || void 0 === hb || hb.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ub = hb && new Gb(hb, this.origin), this.kinds.set(bb, ub)
        }
        return ub
      }
      follow(bb) {
        const {
          origin: ub
        } = this;
        if (Math.abs(bb[0] - ub[0]) <= 512 && Math.abs(bb[1] - ub[1]) <= 512 && Math.abs(bb[2] - ub[2]) <= 512) return !1;
        ub[0] = Math.floor(bb[0]), ub[1] = Math.floor(bb[1]), ub[2] = Math.floor(bb[2]);
        for (const hb of this.kinds.values()) null === hb || void 0 === hb || hb.pool.setOrigin(ub[0], ub[1], ub[2]);
        return !0
      }
      commit() {
        for (const bb of this.kinds.values()) null === bb || void 0 === bb || bb.commit()
      }
      dispose() {
        for (const bb of this.kinds.values()) null === bb || void 0 === bb || bb.dispose();
        this.kinds.clear()
      }
    }
  },
  38142: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      e: () => Lb,
      f: () => Yb
    });
    const Bb = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Ob = [0, 1, 2, 0, 2, 3],
      Gb = [4, 5];

    function Ub(bb, ub, hb, Bb, Ob) {
      for (let Ub = 0; Ub < 6; Ub++) Gb.includes(Ub) === Ob && Sb(bb, ub, hb, Bb, Ub)
    }

    function Lb(bb, ub, hb, Bb) {
      for (let Ob = 0; Ob < 6; Ob++) Sb(bb, ub, hb, Bb, Ob)
    }

    function Yb(bb, ub, hb, Gb, Ub) {
      for (let Lb = 0; Lb < 6; Lb++)
        for (const Yb of [0, 1]) {
          const [Sb, ab, Hb] = [Yb + 2, Yb + 1, (Yb + 3) % 4], wb = bb.length / 3;
          for (const [ub, Ob] of [
              [Yb, ab],
              [Sb, ab],
              [Sb, Hb],
              [Yb, Hb]
            ])
            for (let Yb = 0; Yb < 3; Yb++) {
              const Sb = Bb[3 * (4 * Lb + ub) + Yb],
                ab = Bb[3 * (4 * Lb + Ob) + Yb];
              bb.push((Sb + (ab - Sb) * Ub) * Gb / 2 + hb[Yb])
            }
          for (const bb of Ob) ub.push(wb + bb)
        }
    }

    function Sb(bb, ub, hb, Gb, Ub) {
      let [Lb, Yb, Sb] = hb, [ab, Hb, wb] = Gb;
      const Zb = bb.length / 3;
      for (let Ob = 4 * Ub; Ob < 4 * Ub + 4; Ob++) bb.push(Bb[3 * Ob] * ab / 2 + Lb, Bb[3 * Ob + 1] * Hb / 2 + Yb, Bb[3 * Ob + 2] * wb / 2 + Sb);
      for (const Bb of Ob) ub.push(Zb + Bb)
    }
  },
  38117: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => ll
    });
    var Bb = hb(49);
    const Ob = [{
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
      Gb = 10;
    let Ub = !0;

    function Lb() {
      return Ub
    }

    function Yb(bb) {
      Ub = bb
    }
    const Sb = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function ab() {
      return Ub ? Ob.length : Gb
    }

    function Hb(bb) {
      var ub, hb;
      return null !== (ub = null === (hb = Ob[bb - 1]) || void 0 === hb ? void 0 : hb.reactorTier) && void 0 !== ub ? ub : 0
    }

    function wb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hb(bb) > 0;
      return hb && !Ub ? "hidden" : bb <= ub ? "open" : hb ? ub < 5 ? "hidden" : ub < Gb ? "teaser" : "locked" : "locked"
    }

    function Zb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Bb,
        n: Ob
      } = ob(bb);
      return {
        key: ub[Bb],
        params: {
          [Bb]: hb ? String(Ob) : Ob
        }
      }
    }
    const Xb = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function pb(bb, ub) {
      return Hb(bb) > 0 && ub < Gb
    }

    function ob(bb) {
      const ub = Hb(bb);
      if (ub > 0) return {
        kind: "atomic",
        n: ub,
        short: `A${ub}`
      };
      const hb = function(bb) {
        return bb >= 6 && bb <= 10 ? bb - 6 + 1 : 0
      }(bb);
      return hb > 0 ? {
        kind: "stage",
        n: hb,
        short: `S${hb}`
      } : {
        kind: "tier",
        n: bb,
        short: String(bb)
      }
    }

    function Ab(bb) {
      return Ob[Math.max(1, Math.min(bb, Ob.length)) - 1]
    }

    function lb(bb, ub) {
      return bb < ub ? function(bb) {
        var ub;
        return null !== (ub = Ob[bb]) && void 0 !== ub ? ub : null
      }(bb) : null
    }
    const Kb = "baf2coresubmit",
      Wb = "baf2corebankpause",
      Cb = "baf2coredeposit",
      db = "baf2corechargepause";

    function rb(bb) {
      var ub;
      return null !== (ub = bb.baf2CoreOpen) && void 0 !== ub ? ub : Gb
    }
    const jb = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function nb(bb) {
      return jb.includes(bb)
    }
    const Db = (bb, ub) => ub.map((ub => [ub, [bb]])),
      xb = Object.fromEntries([...Db("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Db("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Db("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Db("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Db("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Db("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Db("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Db("Parts Bench", ["Focus Lens"]), ...Db("Machine Bench", ["Laser", "Collider"]), ...Db("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Db("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Db("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Db("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Db("Tool Bench", ["Mob Cage"]), ...Db("Tool Bench", ["Pocket Terminal"]), ...Db("Tool Bench", ["Comet Beacon"]), ...Db("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function zb(bb) {
      var ub;
      return null !== (ub = xb[bb]) && void 0 !== ub ? ub : ["Workbench"]
    }

    function gb(bb) {
      return zb(bb)[0]
    }
    Ob.slice(1).map(((bb, ub) => `Core Tier ${ub+2}`));
    var ib = hb(9181);
    const vb = ["on", "hud", "off"];

    function tb(bb) {
      return "on" === bb
    }
    var Jb = hb(314);
    const eb = "Mob Farm",
      Nb = {
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
      sb = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Mb = {
        1: 20,
        2: 60,
        3: 120
      },
      mb = "baf2farmvoid",
      Ib = "Caged ",
      Pb = " Spawner Block";

    function qb(bb) {
      return `lifeform:${(0,Jb.oe)(bb)}`
    }

    function Eb(bb) {
      if (!bb) return null;
      if (bb.startsWith(Ib)) {
        const ub = bb.slice(6);
        return sb.includes(ub) ? ub : null
      }
      if (bb.endsWith(Pb)) {
        const ub = bb.slice(0, -14);
        return void 0 !== Nb[ub] ? ub : null
      }
      return null
    }

    function yb(bb) {
      return !0 === bb.mobFarm
    }

    function Vb(bb, ub) {
      return Mb[Nb[ub]] * bb.opMs / 1e3
    }
    const Fb = new Map;
    const fb = "baf2islands",
      kb = "baf2islandnew";

    function Tb(bb) {
      const ub = Ob.findIndex((ub => ub.unlocks.includes(bb)));
      return ub < 0 ? 1 : ub + 1
    }

    function cb(bb) {
      return Math.floor(bb).toLocaleString("en-US")
    }
    var Qb = hb(38056);
    const Rb = "baf2terminaltake",
      bu = "baf2terminalput",
      uu = ["one", "stack", "fill"];

    function hu(bb, ub, hb) {
      return `${Rb} ${bb} ${ub} ${hb}`
    }

    function Bu(bb, ub, hb) {
      return `${bu} ${bb} ${ub} ${hb}`
    }

    function Ou(bb) {
      return `${bu} ${bb}`
    }
    const Gu = [
      [`${Rb} `, "take"],
      [`${bu} `, "put"]
    ];

    function Uu(bb) {
      const ub = Gu.find((ub => {
        let [hb] = ub;
        return bb.startsWith(hb)
      }));
      if (!ub) return null;
      const [hb, Bb] = ub, [Ob, Gb, ...Ub] = bb.slice(hb.length).trim().split(" "), Lb = Number(Ob);
      if (!Number.isSafeInteger(Lb) || Lb <= 0) return null;
      if ("put" === Bb && void 0 === Gb) return {
        kind: "putAll",
        seq: Lb
      };
      const Yb = function(bb) {
        if (uu.includes(bb)) return bb;
        const ub = Number(bb);
        return /^\d+$/.test(bb) && Number.isSafeInteger(ub) && ub > 0 ? ub : null
      }(null !== Gb && void 0 !== Gb ? Gb : "");
      return null === Yb || 0 === Ub.length ? null : {
        kind: Bb,
        seq: Lb,
        mode: Yb,
        item: Ub.join(" ")
      }
    }

    function Lu(bb, ub) {
      const hb = "number" === typeof bb ? bb : "one" === bb ? 1 : "stack" === bb ? 99 : ub;
      return Math.min(ub, hb)
    }

    function Yu(bb, ub) {
      const hb = bb => "number" === typeof bb ? bb : "one" === bb ? 1 : 99;
      return "fill" === bb || "fill" === ub ? "fill" : hb(bb) + hb(ub)
    }

    function Su(bb, ub) {
      const hb = Uu(bb),
        Bb = Uu(ub),
        Ob = hb && Bb ? function(bb, ub) {
          return "take" === bb.kind || "take" === ub.kind ? "take" === bb.kind && "take" === ub.kind && bb.item === ub.item ? {
            ...ub,
            mode: Yu(bb.mode, ub.mode)
          } : null : "putAll" === bb.kind || "putAll" === ub.kind ? {
            kind: "putAll",
            seq: ub.seq
          } : bb.item === ub.item ? {
            ...ub,
            mode: Yu(bb.mode, ub.mode)
          } : null
        }(hb, Bb) : null;
      return Ob ? "putAll" === (Gb = Ob).kind ? Ou(Gb.seq) : "put" === Gb.kind ? Bu(Gb.seq, Gb.mode, Gb.item) : hu(Gb.seq, Gb.mode, Gb.item) : null;
      var Gb
    }
    const au = "baf2rx";

    function Hu(bb, ub) {
      for (var hb = arguments.length, Bb = new Array(hb > 2 ? hb - 2 : 0), Ob = 2; Ob < hb; Ob++) Bb[Ob - 2] = arguments[Ob];
      return [au, bb[0], bb[1], bb[2], ub, ...Bb].join(" ")
    }
    const wu = 2,
      Zu = 4,
      Xu = 8,
      pu = 16,
      ou = 32,
      Au = 64,
      lu = 128,
      Ku = 256,
      Wu = 512,
      Cu = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      du = [{
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
    const ru = "Biomass",
      ju = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function nu(bb) {
      return {
        input: ru,
        inputAmount: 1,
        output: bb,
        outputAmount: 1
      }
    }
    const Du = "baf2synth",
      xu = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      zu = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      gu = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      iu = function(bb, ub) {
        return {
          input: bb,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: ub,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      vu = function(bb, ub) {
        return {
          ...iu(bb, ub, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      tu = zu.map((bb => vu(bb, "Biomass", 2))),
      Ju = {
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
          recipes: [iu("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), iu("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), iu("Raw Gold", "Gold Grit", 2), iu("Messy Stone", "Sand"), iu("Gravel", "Sand"), iu("Raw Voltite", "Voltite Dust", 2), iu("Moonstone", "Moonstone Dust", 4), iu("Wheat Seeds", "Fertiliser"), iu("Raw Uranium", "Uranium Grit", 2), vu("Mossy Messy Stone", "Sand"), ...tu],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [iu("Iron Grit", "Iron Bar"), iu("Copper Grit", "Copper Bar"), iu("Gold Grit", "Gold Bar"), iu("Raw Iron", "Iron Bar"), iu("Raw Copper", "Copper Bar"), iu("Raw Gold", "Gold Bar"), iu("Sand", "Glass"), iu("Messy Stone", "Stone"), ...Jb.Sc.map((bb => iu(bb, "Charcoal", 1, 4))), iu("Wheat", "Bread", 1, 2), ...zu.map(((bb, ub) => vu(bb, gu[ub])))],
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
          recipes: [iu("Iron Bar", "Iron Plate"), iu("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [iu("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [iu("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [iu("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), iu("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), iu("Raw Gold", "Gold Grit", 3), iu("Raw Voltite", "Voltite Dust", 3), iu("Messy Stone", "Sand", 2), iu("Gravel", "Sand", 2), iu("Moonstone", "Moonstone Dust", 6), iu("Raw Uranium", "Uranium Grit", 3), vu("Mossy Messy Stone", "Sand", 2), ...tu],
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
          table: Cu
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [iu("Coal", "Diamond", 1, 24), iu("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Qb.h
      },
      eu = {
        Crusher: [iu("Spent Pellet", "Glow Dust"), iu("Wheat Seeds", "Biomass"), iu("Wheat", "Biomass"), iu("Dead Bush", "Biomass"), iu("Dusk Moss", "Biomass"), iu("Rotten Flesh", "Biomass"), iu("Bone", "Biomass", 2)],
        "Shatter Mill": [iu("Spent Pellet", "Glow Dust"), iu("Wheat Seeds", "Biomass"), iu("Wheat", "Biomass"), iu("Dead Bush", "Biomass"), iu("Dusk Moss", "Biomass"), iu("Rotten Flesh", "Biomass"), iu("Bone", "Biomass", 2), ...Jb.Sc.map((bb => iu(bb, "Biomass")))],
        Smelter: [iu("Biomass", "Fertiliser", 2)],
        Press: [iu("Coal", "Graphite", 1, 4)]
      },
      Nu = "Power Coupler",
      su = "Advanced Coupler",
      Mu = "Nova Coupler",
      mu = [{
        item: Nu,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: su,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: Mu,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const Iu = new Map;

    function Pu(bb) {
      var ub, hb;
      return null !== (ub = null !== (hb = bb.fuelSlot) && void 0 !== hb ? hb : bb.couplerSlot) && void 0 !== ub ? ub : null
    }

    function qu(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!bb.couplable) throw new Error(`${bb.kind} takes no Power Coupler`);
      let hb = Iu.get(bb);
      hb || (hb = [], Iu.set(bb, hb));
      let Bb = hb[ub];
      if (!Bb) {
        var Ob;
        const {
          divisor: Gb,
          powerPerS: Ub
        } = mu[ub - 1], Lb = bb.opMs / Gb, Yb = void 0 !== bb.fluidMade || void 0 !== bb.cryoMade ? bb.powerPerOp : Ub * Lb / 1e3;
        Bb = {
          ...bb,
          fuelSlot: null,
          couplerSlot: null !== (Ob = Pu(bb)) && void 0 !== Ob ? Ob : void 0,
          opMs: Lb,
          powerPerOp: Yb,
          coupled: !0
        }, ub > 1 && (Bb = {
          ...Bb,
          couplerLevel: ub
        }), hb[ub] = Bb
      }
      return Bb
    }
    const Eu = new Map;
    const yu = new Map;

    function Vu(bb, ub) {
      if (null === ub || (hb = ub, !ju.includes(hb))) return bb;
      var hb;
      let Bb = yu.get(ub);
      return Bb || (Bb = {
        ...bb,
        recipes: [nu(ub)]
      }, yu.set(ub, Bb)), Bb
    }

    function Fu(bb) {
      return !0 === bb.synth
    }
    const fu = (bb, ub, hb, Bb) => ({
        output: bb,
        outputAmount: ub,
        tier: hb,
        inputs: Bb.map((bb => {
          let [ub, hb] = bb;
          return {
            item: ub,
            amount: hb
          }
        }))
      }),
      ku = Object.fromEntries([fu("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), fu("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), fu("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), fu("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), fu("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), fu("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), fu("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), fu("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), fu("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), fu("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), fu("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), fu("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), fu("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), fu("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), fu("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), fu("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), fu("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), fu("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), fu("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), fu("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), fu("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), fu("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), fu("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), fu("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), fu("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), fu("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), fu("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), fu("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), fu("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), fu("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((bb => [bb.output, bb]))),
      Tu = new Map;

    function cu(bb, ub) {
      let hb = Ju[bb];
      if (ub.atomic && (hb = function(bb) {
          const ub = eu[bb.kind];
          if (!ub) return bb;
          let hb = Eu.get(bb.kind);
          if (!hb) {
            const Bb = new Set(ub.map((bb => bb.input))),
              Ob = bb.recipes.filter((bb => !Bb.has(bb.input)));
            hb = {
              ...bb,
              recipes: [...Ob, ...ub]
            }, Eu.set(bb.kind, hb)
          }
          return hb
        }(hb)), hb.synth) return Vu(hb, ub.taught);
      if (ub.coupled && hb.couplable) return qu(hb, ub.level);
      const Bb = hb.inputSlots && null !== ub.taught ? ku[ub.taught] : void 0;
      if (!Bb) return hb;
      const Ob = `${bb}|${Bb.output}`;
      let Gb = Tu.get(Ob);
      return Gb || (Gb = {
        ...hb,
        bench: Bb
      }, Tu.set(Ob, Gb)), Gb
    }
    const Qu = ["Diamond", "Moonstone"];

    function Ru(bb) {
      return new Set(bb.flatMap((bb => bb.bonus ? [bb.output, bb.bonus.item] : [bb.output])).filter((bb => !Qu.includes(bb))))
    }
    const bh = Object.values(Ju).flatMap((bb => bb.recipes));
    Ru(bh.filter((bb => !0 !== bb.nuclear))), Ru([...bh.filter((bb => !0 === bb.nuclear)), ...Object.values(eu).flat()]);

    function uh(bb) {
      return null === bb.inputSlot && void 0 === bb.inputSlots && void 0 === bb.powerMade && void 0 === bb.fluidMade && !bb.treeCutter && void 0 === bb.table
    }

    function hh(bb) {
      return !0 === bb.treeCutter
    }
    const Bh = ["Voltite Cell"];

    function Oh(bb) {
      var ub, hb;
      return null !== (ub = null === (hb = bb.fuels) || void 0 === hb ? void 0 : hb.some((bb => Bh.includes(bb)))) && void 0 !== ub && ub
    }
    const Gh = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Jb.Sc.map((bb => [bb, 8e3]))),
        ...Object.fromEntries(Jb.sd.map((bb => [bb, 2e3]))),
        "Voltite Cell": 12e4
      },
      Uh = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Lh = {
        "Uranium Deposit": 4e3
      };

    function Yh(bb) {
      var ub;
      return null !== (ub = Object.keys(Uh).find((ub => Uh[ub] === bb))) && void 0 !== ub ? ub : null
    }

    function Sh(bb) {
      return xu.includes(bb)
    }

    function ah(bb) {
      return !0 !== bb.nuclear || Lb()
    }
    var Hh = hb(298);
    var wh = hb(9269),
      Zh = hb(9189),
      Xh = hb(9273),
      ph = hb(9260);
    const oh = "Reactor Controller",
      Ah = "Reactor Port",
      lh = "Battery Cell",
      Kh = ["fuel", "water", "waste"],
      Wh = {
        fuel: Ah,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Ch = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      dh = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      rh = "Reactor Frame",
      jh = "Reactor Glass",
      nh = {
        edge: [rh],
        cap: [jh, Ah],
        wall: [jh, Ah],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [oh]
      },
      Dh = {
        edge: [lh],
        cap: [lh],
        wall: [lh],
        inside: [lh],
        ctrl: [lh]
      },
      xh = ["edge", "cap", "wall", "inside"],
      zh = ["Reactor Slag"];

    function gh(bb) {
      return zh.includes(ih(bb))
    }

    function ih(bb) {
      const ub = bb.indexOf("|");
      return ub < 0 ? bb : bb.slice(0, ub)
    }

    function vh(bb) {
      return ih(bb) === oh ? "reactor" : null
    }

    function th(bb) {
      return ih(bb) !== Ah ? null : bb.endsWith("|Water") ? "water" : bb.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Jh(bb) {
      const ub = th(bb);
      return null === ub ? null : sh(Wh[Kh[(Kh.indexOf(ub) + 1) % Kh.length]], function(bb) {
        return bb.includes(eh)
      }(bb))
    }
    const eh = "|meta|rot1|Formed",
      Nh = new Set([rh, jh, Ah]);

    function sh(bb, ub) {
      var hb;
      const Bb = ih(bb);
      if (!Nh.has(Bb)) return bb;
      if (Bb !== Ah) return ub ? Bb + eh : Bb;
      const Ob = null !== (hb = th(bb)) && void 0 !== hb ? hb : "fuel";
      return ub ? "fuel" === Ob ? Bb + eh : `${Bb}${eh}|${"water"===Ob?"Water":"Waste"}` : Wh[Ob]
    }

    function Mh(bb, ub) {
      const hb = BB(bb, ub);
      if ("Air" === hb) return !1;
      const Bb = "reactor" === bb ? nh : Dh;
      return xh.some((bb => Bb[bb].includes(hb))) || "reactor" === bb && zh.includes(hb)
    }

    function mh(bb) {
      return dh[bb]
    }

    function Ih(bb) {
      var ub;
      return null !== (ub = Ch[bb]) && void 0 !== ub ? ub : Ch[1]
    }

    function Ph(bb) {
      const [ub, , hb] = Ih(bb);
      return [hb, 0, -ub]
    }

    function qh(bb, ub, hb, Bb, Ob, Gb) {
      return {
        ctrl: [bb[0], bb[1], bb[2]],
        rot: Ch[ub] ? ub : 1,
        w: hb,
        h: Bb,
        d: Ob,
        cu: Gb[0],
        cv: Gb[1]
      }
    }

    function Eh(bb, ub) {
      return "reactor" === bb ? [Math.floor((ub - 1) / 2), 0] : [0, 0]
    }

    function yh(bb, ub, hb, Bb, Ob) {
      let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb.rot;
      if (hb === bb.w && Bb === bb.h && Ob === bb.d && Gb === bb.rot) return bb;
      const [Ub] = Eh(ub, bb.w);
      if (bb.cu === Ub && bb.cv <= 1) return qh(bb.ctrl, Gb, hb, Bb, Ob, Eh(ub, hb));
      const Lb = (bb, ub) => Math.max(1, Math.min(ub, bb));
      return qh(bb.ctrl, Gb, hb, Bb, Ob, [Lb(bb.cu, hb - 2), 0 === bb.cv ? 0 : Lb(bb.cv, Bb - 2)])
    }
    const Vh = 11,
      Fh = 2 * Vh + 1;
    new Uint8Array(Fh * Fh * Fh);

    function fh(bb) {
      return bb.w * bb.h * bb.d
    }

    function kh(bb) {
      const ub = Ph(bb.rot);
      return [bb.ctrl[0] - ub[0] * bb.cu, bb.ctrl[1] - bb.cv, bb.ctrl[2] - ub[2] * bb.cu]
    }

    function Th(bb) {
      return bb.cv * bb.d * bb.w + bb.cu
    }

    function ch(bb, ub) {
      const hb = ub % bb.w,
        Bb = Math.floor(ub / bb.w) % bb.d;
      return [hb, Math.floor(ub / (bb.w * bb.d)), Bb]
    }

    function Qh(bb, ub) {
      const [hb, Bb, Ob] = ch(bb, ub), Gb = kh(bb), Ub = Ih(bb.rot), Lb = Ph(bb.rot);
      return [Gb[0] + Lb[0] * hb - Ub[0] * Ob, Gb[1] + Bb, Gb[2] + Lb[2] * hb - Ub[2] * Ob]
    }

    function Rh(bb, ub) {
      const hb = kh(bb),
        Bb = Ih(bb.rot),
        Ob = Ph(bb.rot),
        Gb = ub[0] - hb[0],
        Ub = ub[2] - hb[2],
        Lb = Gb * Ob[0] + Ub * Ob[2],
        Yb = -(Gb * Bb[0] + Ub * Bb[2]),
        Sb = ub[1] - hb[1];
      return Lb < 0 || Lb >= bb.w || Sb < 0 || Sb >= bb.h || Yb < 0 || Yb >= bb.d ? -1 : (Sb * bb.d + Yb) * bb.w + Lb
    }

    function bB(bb, ub) {
      if (ub === Th(bb)) return "ctrl";
      const [hb, Bb, Ob] = ch(bb, ub), Gb = 0 === Bb || Bb === bb.h - 1, Ub = Number(0 === hb || hb === bb.w - 1) + Number(Gb) + Number(0 === Ob || Ob === bb.d - 1);
      return Ub >= 2 ? "edge" : 1 === Ub ? Gb ? "cap" : "wall" : "inside"
    }

    function uB(bb, ub) {
      const [hb, Bb, Ob] = ch(bb, ub);
      return 0 === hb || hb === bb.w - 1 || 0 === Bb || Bb === bb.h - 1 || 0 === Ob || Ob === bb.d - 1 ? -1 : ((Bb - 1) * (bb.d - 2) + (Ob - 1)) * (bb.w - 2) + (hb - 1)
    }

    function hB(bb, ub) {
      const hb = bb.w - 2,
        Bb = bb.d - 2,
        Ob = ub % hb + 1,
        Gb = Math.floor(ub / hb) % Bb + 1;
      return ((Math.floor(ub / (hb * Bb)) + 1) * bb.d + Gb) * bb.w + Ob
    }

    function BB(bb, ub) {
      const hb = ih(ub);
      return "reactor" === bb && hb === oh ? rh : hb
    }

    function OB(bb, ub, hb) {
      const Bb = "ctrl" === ub ? ih(hb) : BB(bb, hb);
      return ("reactor" === bb ? nh : Dh)[ub].includes(Bb) ? "ok" : "Air" === Bb ? "missing" : Mh(bb, hb) ? "wrong" : "blocked"
    }

    function GB(bb, ub) {
      return "battery" === bb ? lh : "inside" === ub ? null : function(bb, ub) {
        if ("inside" === ub || "ctrl" === ub || "battery" === bb) return null;
        return "edge" === ub ? rh : jh
      }(bb, ub)
    }
    const UB = {
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
      LB = "Collider",
      YB = "Laser",
      SB = "Star Alloy",
      aB = "Glow Dust",
      HB = [LB, "_Collider Focus"];

    function wB(bb) {
      return HB.indexOf(ih(bb))
    }

    function ZB(bb) {
      return ih(bb) === YB
    }

    function XB(bb) {
      return [
        [bb[0], bb[1], bb[2]],
        [bb[0], bb[1] + 1, bb[2]]
      ]
    }
    const pB = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function oB(bb, ub, hb) {
      const Bb = pB[ub];
      return [bb[0] + Bb[0] * hb, bb[1], bb[2] + Bb[2] * hb]
    }

    function AB(bb, ub) {
      if (ub[1] !== bb[1]) return null;
      const hb = ub[0] - bb[0],
        Bb = ub[2] - bb[2];
      if (0 !== hb === (0 !== Bb)) return null;
      const Ob = Math.abs(hb + Bb);
      if (Ob > UB.LASER_D) return null;
      return {
        dir: Bb < 0 ? 0 : hb > 0 ? 1 : Bb > 0 ? 2 : 3,
        GU: Ob
      }
    }

    function lB(bb, ub, hb) {
      const Bb = ub => Math.abs(bb[0] - ub[0]) <= 1 && Math.abs(bb[1] - ub[1]) <= 1;
      return Bb(ub) || Bb(hb)
    }

    function KB(bb, ub) {
      return function(bb, ub, hb, Bb) {
        return [0, 1, 2, 3].map((Ob => {
          for (let Gb = 1; Gb <= UB.LASER_D; Gb++) {
            const Ub = oB(bb, Ob, Gb);
            if (lB([Ub[0], Ub[2]], ub, hb) || !Bb(Ub)) return !1
          }
          return !0
        }))
      }(XB(bb)[1], ub.spawnXZ, ub.coreXZ, (bb => bb[1] >= wh.t && bb[1] < wh.t + wh.u && bb[0] >= ub.minXZ[0] && bb[0] <= ub.maxXZ[0] && bb[2] >= ub.minXZ[1] && bb[2] <= ub.maxXZ[1]))
    }
    const WB = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function CB(bb) {
      return Math.max(48 + 16 * bb, Ab(bb).machineAllowance)
    }
    const dB = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function rB(bb) {
      const ub = bb.split("|")[0];
      return dB.includes(ub) ? "Solar Panel" : ub === Xh.d ? "Fluid Pipe" : wB(ub) >= 0 ? "Collider" : (hb = ub, WB.includes(hb) ? ub : null);
      var hb
    }
    const jB = "buildAFactory2Game:solarPanelDescription";
    const nB = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function DB(bb, ub) {
      var hb;
      return null !== (hb = nB.find((hb => {
        var Bb;
        return (null !== (Bb = bb.level(hb)) && void 0 !== Bb ? Bb : 0) >= ub
      }))) && void 0 !== hb ? hb : null
    }
    const xB = "buildAFactory2Game:";
    let zB = null;
    const gB = {
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
      iB = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      vB = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      tB = {
        "Loot Chest": `${xB}lookRuinChestName`
      };

    function JB(bb) {
      return "object" === typeof bb && null !== bb && "translationKey" in bb && "string" === typeof bb.translationKey ? bb.translationKey : null
    }

    function eB(bb, ub) {
      var hb;
      return null !== (hb = JB(bb.displayName(ub))) && void 0 !== hb ? hb : `item:${(0,Jb.oe)(ub)}`
    }

    function NB(bb, ub) {
      var hb, Bb, Ob, Gb;
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ub;
      if ("Solar Panel" === rB(ub)) return {
        name: JB(bb.displayName("Solar Panel")),
        detail: jB,
        detailItem: null
      };
      const Yb = ub.endsWith(" Ore"),
        Sb = (zB ??= new Set([...Object.keys((0, Zh.j)()), ...Object.keys((0, Xh.s)())].map((bb => bb.split("|")[0]))), zB).has(ub),
        ab = Yb || Sb ? null : function(bb) {
          var ub;
          return bb.endsWith(" Log") && !bb.startsWith("Barkless ") ? "lookLog" : bb.endsWith(" Sapling") ? "lookSapling" : bb.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (ub = gB[bb]) && void 0 !== ub ? ub : null
        }(ub);
      if (!bb.isBlock(ub) || !Yb && !Sb && null === ab) return null;
      const Hb = null !== (hb = null !== (Bb = tB[ub]) && void 0 !== Bb ? Bb : JB(null !== (Ob = bb.displayName(Ub)) && void 0 !== Ob ? Ob : bb.displayName(ub))) && void 0 !== hb ? hb : `item:${(0,Jb.oe)(ub)}`;
      if (null !== ab) return {
        name: Hb,
        detail: `${xB}${ab}`,
        detailItem: null
      };
      const wb = null !== (Gb = iB[ub]) && void 0 !== Gb ? Gb : Lb() ? vB[ub] : void 0;
      if (Sb && void 0 !== wb) return {
        name: Hb,
        detail: `${xB}${wb}`,
        detailItem: null
      };
      const Zb = Uh[ub];
      if (void 0 !== Zb) return {
        name: Hb,
        detail: `${xB}lookDeposit`,
        detailItem: eB(bb, Zb)
      };
      const Xb = bb.harvestLevel(ub);
      if (Yb && "rock" === bb.harvestType(ub) && 0 !== Xb) {
        const ub = DB(bb, null !== Xb && void 0 !== Xb ? Xb : 0);
        if (ub === nB[0]) return {
          name: Hb,
          detail: `${xB}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== ub) return {
          name: Hb,
          detail: `${xB}lookPickaxe`,
          detailItem: eB(bb, ub)
        }
      }
      return {
        name: Hb,
        detail: JB(bb.description(ub)),
        detailItem: null
      }
    }

    function sB(bb) {
      return bb < wh.t - 24
    }
    const MB = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const mB = "Wrench",
      IB = "Nova Wrench";

    function PB(bb) {
      return bb === mB || bb === IB
    }
    const qB = [...wh.N, "Belt Lift", "Belt Drop"];
    const EB = ["Belt Lift", "Belt Drop"],
      yB = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function VB(bb) {
      return bb.split("|")[0]
    }

    function FB(bb) {
      const ub = /\|rot(\d)/.exec(bb);
      return ub ? Number(ub[1]) : 1
    }

    function fB(bb) {
      return bb % 4 + 1
    }

    function kB(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === ub && "" === hb ? bb : `${bb}|meta|rot${ub}${hb}`
    }

    function TB(bb) {
      return VB(bb) === wh.B ? (0, wh.U)(bb) ? "gateRight" : "gateLeft" : (0, wh.W)(bb)
    }

    function cB(bb) {
      const ub = VB(bb),
        hb = FB(bb);
      if (wh.N.includes(ub)) return (0, wh.P)(ub, fB(hb), null);
      if (ub === wh.k) return (0, wh.cb)(fB(hb), (0, wh.V)(bb));
      if (ub === wh.E) {
        const Bb = yB[(0, wh.W)(bb)];
        return null === Bb ? kB(ub, fB(hb)) : kB(ub, hb, wh.I[Bb])
      }
      return ub === wh.B ? (0, wh.U)(bb) ? kB(ub, fB(hb)) : kB(ub, hb, wh.p) : ph.d.includes(ub) && !EB.includes(ub) || Sh(ub) ? kB(ub, fB(hb)) : null
    }

    function QB(bb) {
      return ph.d.includes(bb) || Sh(bb) || null !== rB(bb)
    }

    function RB(bb) {
      return "Solar Panel" === rB(bb)
    }
    const bO = "buildAFactory2Game:",
      uO = {
        leftFront: `${bO}lookSplitDetail_leftFront`,
        frontRight: `${bO}lookSplitDetail_frontRight`,
        gateRight: `${bO}lookGateDetail_gateRight`
      };

    function hO(bb, ub) {
      var hb;
      let Bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Ob = TB(bb),
        Gb = null === Ob ? null : `${bO}${Ob.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Ob}`,
        Ub = null === Ob ? null : null !== (hb = uO[Ob]) && void 0 !== hb ? hb : null;
      if (PB(ub) && Bb) {
        const hb = VB(bb);
        return ub === IB && Lb() && function(bb) {
          return qB.includes(VB(bb))
        }(bb) ? {
          mode: Gb,
          detail: Ub,
          next: `${bO}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Gb,
          detail: Ub,
          next: QB(hb) && !RB(hb) ? `${bO}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Yb = PB(ub) ? cB(bb) : null;
      if (null === Yb) return {
        mode: Gb,
        detail: Ub,
        next: null,
        nextState: null
      };
      const Sb = TB(Yb);
      return null === Sb || FB(Yb) !== FB(bb) ? {
        mode: Gb,
        detail: Ub,
        next: `${bO}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Gb,
        detail: Ub,
        next: `${bO}lookWrenchNext`,
        nextState: `${bO}lookWrenchState_${Sb}`
      }
    }
    const BO = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const OO = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function GO(bb) {
      return [0, 1, 2, 3].map((ub => 0 !== (bb & 1 << ub)))
    }

    function UO(bb) {
      const ub = [];
      for (let hb = 8; hb + 2 < bb.length; hb += 3) ub.push([bb[hb], bb[hb + 1], bb[hb + 2]]);
      return {
        focus: [bb[0], bb[1], bb[2]],
        lasers: GO(bb[3]),
        open: GO(bb[4]),
        live: GO(bb[5]),
        on: 1 === bb[6],
        state: OO[bb[7]],
        blockers: ub
      }
    }
    const LO = "Arc Caster",
      YO = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      SO = (Object.values(YO), "Jet Chestplate"),
      aO = "Nova Jet Chestplate",
      HO = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      wO = Object.values(HO);

    function ZO(bb, ub, hb) {
      return Math.min(function(bb) {
        return Lb() && Hb(bb) >= 5 ? 20 : 10
      }(hb), Math.floor(function(bb, ub) {
        return Math.max(0, bb) + (Lb() ? Math.max(0, ub) : 0)
      }(bb, ub) / 5))
    }

    function XO(bb, ub, hb) {
      const Bb = ZO(ub, hb, bb),
        Ob = Hb(bb),
        Gb = (Ob >= 3 ? 55 : Ob >= 1 ? 50 : bb >= 8 ? 45 : 30) + Bb,
        Ub = Math.max(100 + Bb, 2 * Gb);
      return {
        arcDamage: Gb,
        arcPierce: bb >= 7 ? 2 : 1,
        arcChain: bb >= 10,
        barrierMax: (Ob >= 4 ? 100 : Ob >= 2 ? 90 : bb >= 9 ? 80 : bb >= 6 ? 60 : 40) + 5 * Bb,
        barrierRegenPerS: Ob >= 5 ? 20 : bb >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Bb,
        novaShieldRegenPerS: 32,
        bladeDamage: Ub,
        bladePunch: Math.round(.5 * Ub),
        forgeRank: Bb
      }
    }
    const pO = {
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
    var oO = hb(36476),
      AO = hb(36217),
      lO = hb(36214),
      KO = hb(13),
      WO = hb(1537),
      CO = hb(958),
      dO = hb.n(CO);

    function rO(bb) {
      return !0 === bb.field
    }
    const jO = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function nO(bb) {
      return jO.has(bb) ? `buildAFactory2Game:itemPlural_${(0,Jb.oe)(bb)}` : null
    }
    var DO = hb(1095),
      xO = hb(966),
      zO = hb(1799),
      gO = hb(1789),
      iO = hb(36468),
      vO = hb(36470),
      tO = hb(16),
      JO = hb(36459);
    const eO = "baf2QuestView",
      NO = "baf2PlayerY",
      sO = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class MO {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = bb, this.view = {
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
      set(bb, ub) {
        var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb;
        const ab = JSON.stringify(bb.baf2QuestName) === JSON.stringify(this.view.name),
          Hb = new Set(this.view.rows.filter((bb => bb.done)).map((bb => bb.id))),
          wb = new Set(this.view.rows.filter((bb => bb.justFinished)).map((bb => bb.id))),
          Zb = bb.baf2QuestSide,
          Xb = null !== Zb && !0 === bb.baf2QuestSideFocus;
        let pb = !1,
          ob = 0;
        const Ab = bb.baf2QuestSteps.map((bb => {
            const ub = FO(bb, sO.has(bb[0]) ? bb[0] : "" + ob++),
              hb = ab && ub.done && !Hb.has(ub.id);
            return ub.justFinished = hb || ab && ub.done && wb.has(ub.id), pb ||= hb, ub
          })),
          lb = VO(Ab);
        lb >= 0 && !Xb && (Ab[lb].current = !0);
        const Kb = !ab && null !== bb.baf2QuestName,
          Wb = JSON.stringify(Zb && [Zb[0], Zb[1]]),
          Cb = Wb === JSON.stringify(null !== (hb = null === (Bb = this.view.side) || void 0 === Bb ? void 0 : Bb.name) && void 0 !== hb ? hb : null),
          db = null !== Zb && !this.sidesSeen.has(Wb);
        db && this.sidesSeen.add(Wb), this.serverTutorial = null !== (Ob = bb.baf2QuestTutorial) && void 0 !== Ob ? Ob : "on", (null !== (Gb = bb.baf2QuestTutorialSeq) && void 0 !== Gb ? Gb : 0) >= this.pickSeq && this.endPick();
        const rb = !ab || !Cb || bb.baf2QuestTier !== this.view.tier;
        this.view = {
          name: bb.baf2QuestName,
          rows: Ab,
          reward: bb.baf2QuestReward,
          goal: bb.baf2QuestGoal,
          pulse: this.view.pulse + (pb || Kb ? 1 : 0),
          itemNames: ub,
          side: Zb && {
            name: [Zb[0], Zb[1]],
            row: {
              ...FO(Zb[2], "side"),
              current: Xb
            },
            goal: null !== (Ub = Zb[3]) && void 0 !== Ub ? Ub : null
          },
          sideCameUpAt: db ? Date.now() : this.view.sideCameUpAt,
          tier: bb.baf2QuestTier,
          core: bb.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (Lb = bb.baf2QuestAlso) && void 0 !== Lb ? Lb : [],
          depth: null !== (Yb = bb.baf2QuestDepth) && void 0 !== Yb ? Yb : null,
          tutorial: null !== (Sb = this.pickedTutorial) && void 0 !== Sb ? Sb : this.serverTutorial,
          tutorialKnown: !0
        }, this.vp(), pb && this.scheduleClear(), rb && this.requestBook()
      }
      setTutorial(bb) {
        return this.endPick(), this.pickedTutorial = bb, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.vp()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: bb
        }, this.vp(), this.pickSeq
      }
      onPlayerY(bb) {
        const ub = Math.floor(bb);
        ub !== this.playerY && (this.playerY = ub, this.view.depth && tO.i.vp(NO, ub))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(bb) {
        this.view = {
          ...this.view,
          chapters: bb.baf2BookChapters
        }, this.vp()
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
            rows: this.view.rows.map((bb => bb.justFinished ? {
              ...bb,
              justFinished: !1
            } : bb))
          }, this.vp()
        }), 2400)
      }
      vp() {
        tO.i.vp(eO, this.view, !0)
      }
    }

    function mO(bb, ub) {
      return bb.sideCameUpAt > 0 && ub - bb.sideCameUpAt < 2400
    }

    function IO(bb) {
      return (null === bb.name || PO(bb)) && null === bb.side && null !== bb.chapters
    }

    function PO(bb) {
      var ub;
      return "quest_forgeOngoing" === (null === (ub = bb.name) || void 0 === ub ? void 0 : ub[0])
    }

    function qO(bb) {
      return bb.filter((bb => !sO.has(bb.key)))
    }

    function EO(bb) {
      return bb.key.startsWith("stepCraft")
    }

    function yO(bb, ub) {
      const hb = new Set,
        Bb = bb.side ? [...bb.rows, bb.side.row] : bb.rows;
      for (const Gb of Bb)
        if (!Gb.done) {
          !Gb.item || ub && !EO(Gb) || hb.add(Gb.item);
          for (const [bb, ub, Bb] of null !== (Ob = Gb.chips) && void 0 !== Ob ? Ob : []) {
            var Ob;
            ub < Bb && hb.add(bb)
          }
        } return hb
    }

    function VO(bb) {
      const ub = bb.findIndex((bb => !bb.done && !bb.away));
      return ub >= 0 ? ub : bb.findIndex((bb => !bb.done))
    }

    function FO(bb, ub) {
      let [hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb] = bb;
      return {
        id: ub,
        key: hb,
        params: Bb,
        item: Ob,
        amount: Gb,
        total: Ub,
        done: Lb,
        chips: null !== Yb && void 0 !== Yb ? Yb : null,
        current: !1,
        away: !0 === Sb,
        madeFor: null !== ab && void 0 !== ab ? ab : [],
        also: null !== Hb && void 0 !== Hb ? Hb : [],
        justFinished: !1
      }
    }
    const fO = "baf2QuestItems",
      kO = new Set;
    let TO = new Set,
      cO = null;

    function QO(bb) {
      const ub = tb(bb.tutorial),
        hb = ub ? yO(bb, !0) : kO;
      "inventory" === KO.d.get("openInGameMenuName") ? (cO = null, (0, JO.s)(hb)) : cO = hb;
      const Bb = ub ? yO(bb, !1) : kO;
      (0, vO.b)(Bb, TO) || (TO = Bb, tO.i.vp(fO, TO))
    }

    function RO() {
      return (0, iO.b)(fO, (() => TO))
    }
    var bG = hb(9106),
      uG = hb(3063);

    function hG(bb) {
      const ub = (0, uG.e)(bb),
        hb = void 0 === ub ? void 0 : (0, bG.displayNameOf)(ub);
      return "object" === typeof hb && null !== hb && "translationKey" in hb && "string" === typeof hb.translationKey ? hb.translationKey : `item:${(0,Jb.oe)(bb)}`
    }

    function BG(bb, ub) {
      return bb(hG(ub))
    }
    const OG = [{
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

    function GG(bb, ub) {
      return [`Deposit Seed (${bb})`, {
        item: Uh[`${bb} Deposit`],
        amount: ub
      }]
    }
    const UG = Object.fromEntries([GG("Coal", 8), GG("Iron", 8), GG("Copper", 8), GG("Gold", 6), GG("Voltite", 4), GG("Uranium", 4)]),
      LG = "Relay Coil",
      YG = new Map;

    function SG(bb) {
      let ub = YG.get(bb);
      if (!ub) {
        const hb = Math.max(1, bb);
        ub = OG.filter((bb => {
          var ub;
          return hb >= bb.fromTier && hb <= (null !== (ub = bb.untilTier) && void 0 !== ub ? ub : 1 / 0)
        })).map((bb => bb.later && hb >= bb.later.tier ? {
          ...bb,
          weight: bb.later.weight
        } : bb)), YG.set(bb, ub)
      }
      return ub
    }

    function aG(bb) {
      return SG(bb).some((bb => {
        let {
          item: ub
        } = bb;
        return ub === LG
      }))
    }

    function HG(bb) {
      return bb.startsWith("Deposit Seed (")
    }

    function wG(bb, ub) {
      const hb = SG(bb);
      return ub ? hb.filter((bb => ub(bb.item))) : hb
    }

    function ZG(bb) {
      return bb.reduce(((bb, ub) => bb + ub.weight), 0)
    }

    function XG(bb, ub) {
      const hb = wG(bb, ub),
        Bb = ZG(hb);
      return hb.map((bb => ({
        find: bb,
        chance: bb.weight / Bb
      })))
    }
    const pG = 6e4,
      oG = new Intl.NumberFormat("en-US");

    function AG(bb, ub) {
      const hb = bb >= 10 ? Math.round(bb) : Math.round(10 * bb) / 10;
      return 0 === hb ? "0" : `${ub}${oG.format(hb)}`
    }

    function lG(bb) {
      return bb < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? oG.format(bb) : bb < 1e6 ? `${bb<1e5?Math.floor(bb/100)/10:Math.floor(bb/1e3)}k` : Math.floor(bb / 1e5) / 10 + "M"
    }

    function KG(bb) {
      return bb < 0 ? "\u2212" + -bb : String(bb)
    }

    function WG(bb, ub) {
      const hb = Math.max(1, Math.round(ub));
      if (hb < 60) return bb("buildAFactory2Game:durationSeconds", {
        seconds: String(hb)
      });
      const Bb = Math.round(hb / 60);
      if (Bb < 60) return bb("buildAFactory2Game:durationMinutes", {
        minutes: String(Bb)
      });
      const Ob = String(Math.floor(Bb / 60));
      return Bb % 60 === 0 ? bb("buildAFactory2Game:durationWholeHours", {
        hours: Ob
      }) : bb("buildAFactory2Game:durationHours", {
        hours: Ob,
        minutes: String(Bb % 60)
      })
    }
    const CG = "(max-height: 420px), (max-width: 650px)";

    function dG() {
      return "undefined" !== typeof window && window.matchMedia(CG).matches
    }

    function rG(bb) {
      const ub = window.matchMedia(CG),
        hb = () => {
          bb(ub.matches)
        };
      return ub.addEventListener("change", hb), () => {
        ub.removeEventListener("change", hb)
      }
    }
    var jG = hb(1007);

    function nG(bb, ub) {
      return null !== bb && bb > ub + 1
    }

    function DG(bb) {
      const ub = 100 * bb;
      return String(ub <= 0 || ub >= 1 ? Math.round(ub) : Math.max(.1, Math.round(10 * ub) / 10))
    }

    function xG(bb) {
      let {
        item: ub,
        amount: hb
      } = bb;
      return (0, jG.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, jG.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, jG.jsx)(zO.d, {
            itemName: ub,
            amount: 0
          })
        }), hb > 1 && (0, jG.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", hb]
        })]
      })
    }

    function zG(bb) {
      let {
        label: ub,
        names: hb
      } = bb;
      const [Ob, Gb] = (0, Bb.useState)(!1), Ub = hb.join(" / ");
      return (0, jG.jsxs)(jG.Fragment, {
        children: [(0, jG.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Ub,
          "aria-expanded": Ob,
          onClick: () => {
            Gb(!Ob)
          },
          children: ub
        }), Ob && (0, jG.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Ub
        })]
      })
    }

    function gG(bb) {
      let {
        tier: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)(), {
        key: Bb,
        params: Ob
      } = Zb(ub, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Gb = hb(`buildAFactory2Game:${Bb}`, Ob);
      return (0, jG.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, jG.jsx)(xO.e, {
          name: "lock"
        }), Gb]
      })
    }
    const iG = (0, Bb.createContext)(null);

    function vG() {
      const {
        t: bb
      } = (0, DO.K)(), ub = (0, Bb.useContext)(iG);
      return (0, Bb.useEffect)((() => null === ub || void 0 === ub ? void 0 : ub()), [ub]), (0, jG.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: bb("buildAFactory2Game:recipeForQuest"),
        "aria-label": bb("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function tG(bb) {
      let {
        title: ub,
        count: hb,
        children: Ob,
        startOpen: Gb = !0
      } = bb;
      const {
        t: Ub
      } = (0, DO.K)(), [Lb, Yb] = (0, Bb.useState)((() => Gb && !dG())), [Sb, ab] = (0, Bb.useState)(0), Hb = (0, Bb.useCallback)((() => (ab((bb => bb + 1)), () => {
        ab((bb => bb - 1))
      })), []);
      return (0, jG.jsxs)("div", {
        className: dO()("Baf2Recipes", {
          Open: Lb
        }),
        children: [(0, jG.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Yb(!Lb)
          },
          "aria-expanded": Lb,
          children: [Ub("buildAFactory2Game:recipesToggle", {
            title: ub,
            count: String(hb)
          }), (0, jG.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: Lb ? "\u25be" : "\u25b8"
          })]
        }), Lb && (0, jG.jsxs)(iG.Provider, {
          value: Hb,
          children: [(0, jG.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Ob
          }), Sb > 0 && (0, jG.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, jG.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Ub("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const JG = "buildAFactory2Game:",
      eG = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const NG = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      sG = {
        "Uranium Grit": Gb,
        "Raw Uranium": Gb
      };

    function MG(bb) {
      var ub;
      return null !== (ub = sG[bb]) && void 0 !== ub ? ub : Math.max(Tb(bb), NG[bb] ? Tb(NG[bb]) : 1, function(bb) {
        const ub = Ob.findIndex((ub => ub.cost.some((ub => ub.item === bb))));
        return ub > Gb ? ub : 1
      }(bb))
    }

    function mG(bb, ub) {
      return IG(ub) ? MG(ub) : function(bb) {
        if (eG.has(bb)) return 1;
        const ub = Ob.findIndex((ub => ub.newDeposits.some((ub => {
          let {
            block: hb
          } = ub;
          return hb === bb
        }))));
        return ub < 0 ? 1 : ub + 1
      }(bb)
    }

    function IG(bb) {
      return bb in sG || Hb(MG(bb)) > 0
    }

    function PG(bb, ub) {
      return cu(bb, {
        coupled: !1,
        taught: null,
        atomic: Lb() && ub >= 11
      }).recipes
    }

    function qG(bb, ub) {
      const hb = wb(bb, ub, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hb(bb) > 0);
      return "open" === hb || "locked" === hb
    }

    function EG(bb, ub) {
      return bb.map(((bb, hb) => ({
        value: bb,
        idx: hb,
        tier: ub(bb)
      }))).sort(((bb, ub) => bb.tier - ub.tier || bb.idx - ub.idx)).map((bb => {
        let {
          value: ub
        } = bb;
        return ub
      }))
    }

    function yG(bb, ub, hb) {
      const Bb = wb(bb, ub);
      if ("hidden" === Bb || "open" === Bb) return null;
      if ("teaser" === Bb) return {
        tag: {
          translationKey: `${JG}${hb?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${JG}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Ob = Zb(bb, {
          tier: hb ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Gb = Zb(bb, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${JG}${Ob.key}`,
          params: Ob.params
        },
        reason: {
          translationKey: `${JG}${Gb.key}`,
          params: Gb.params
        }
      }
    }

    function VG(bb) {
      return !HG(bb)
    }

    function FG(bb) {
      let {
        seconds: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)();
      return (0, jG.jsx)(tG, {
        title: hb("buildAFactory2Game:recipesCuts", {
          seconds: ub
        }),
        count: 1,
        children: (0, jG.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, jG.jsx)(xG, {
            item: "Maple Sapling",
            amount: 1
          }), (0, jG.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, jG.jsx)(xG, {
            item: "Maple Log",
            amount: 1
          }), (0, jG.jsx)("span", {
            className: "Baf2RecipeName",
            children: hb("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function fG(bb) {
      let {
        fertilised: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)();
      return (0, jG.jsxs)(tG, {
        title: hb("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, jG.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, jG.jsx)(xG, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, jG.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, jG.jsx)(xG, {
            item: "Wheat",
            amount: 1
          }), (0, jG.jsx)(xG, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, jG.jsx)("span", {
            className: "Baf2RecipeName",
            children: hb("buildAFactory2Game:recipeField")
          })]
        }), (0, jG.jsxs)("li", {
          className: dO()("Baf2Recipe", {
            InUse: ub
          }),
          children: [(0, jG.jsx)(xG, {
            item: "Fertiliser",
            amount: 1
          }), (0, jG.jsx)("span", {
            className: "Baf2RecipeName",
            children: hb("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function kG(bb) {
      let {
        tier: ub,
        seconds: hb
      } = bb;
      const {
        t: Bb
      } = (0, DO.K)(), Ob = function(bb) {
        return bb >= 5 ? du : Cu
      }(ub);
      return (0, jG.jsx)(tG, {
        title: Bb("buildAFactory2Game:recipesBringsUp", {
          seconds: hb
        }),
        count: Ob.length,
        children: Ob.map((bb => {
          let {
            item: ub,
            chance: hb
          } = bb;
          return (0, jG.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, jG.jsx)(xG, {
              item: ub,
              amount: 1
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeName",
              children: BG(Bb, ub)
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Bb("buildAFactory2Game:recipeChance", {
                percent: DG(hb)
              })
            })]
          }, ub)
        }))
      })
    }

    function TG(bb) {
      let {
        tier: ub,
        seconds: hb,
        noSeeds: Bb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)(), Gb = RO(), Ub = XG(ub, Bb ? VG : void 0), Lb = Bb && XG(ub).length > Ub.length, Yb = aG(ub);
      return (0, jG.jsxs)(tG, {
        title: Ob("buildAFactory2Game:recipesRecycles", {
          seconds: hb
        }),
        count: Ub.length,
        children: [Ub.map((bb => {
          let {
            find: ub,
            chance: hb
          } = bb;
          return (0, jG.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Gb.has(ub.item) && (0, jG.jsx)(vG, {}), (0, jG.jsx)(xG, {
              item: ub.item,
              amount: ub.amount
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeName",
              children: BG(Ob, ub.item)
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Ob("buildAFactory2Game:recipeChance", {
                percent: DG(hb)
              })
            })]
          }, ub.item)
        })), Lb && (0, jG.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, jG.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ob("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Yb && (0, jG.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, jG.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ob("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function cG(bb) {
      let {
        tier: ub,
        seconds: hb
      } = bb;
      const {
        t: Bb
      } = (0, DO.K)(), Ob = Object.entries(UG).filter((bb => {
        let [, {
          item: hb
        }] = bb;
        return qG(MG(hb), ub, IG(hb))
      }));
      return (0, jG.jsx)(tG, {
        title: Bb("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: hb
        }),
        count: Ob.length,
        children: Ob.map((bb => {
          let [ub, {
            item: hb,
            amount: Ob
          }] = bb;
          return (0, jG.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, jG.jsx)(xG, {
              item: ub,
              amount: 1
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, jG.jsx)(xG, {
              item: hb,
              amount: Ob
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeName",
              children: BG(Bb, hb)
            })]
          }, ub)
        }))
      })
    }

    function QG(bb) {
      let {
        tier: ub,
        seconds: hb
      } = bb;
      const {
        t: Bb
      } = (0, DO.K)(), Ob = RO(), Gb = EG(Object.entries(Uh).filter((bb => {
        let [hb, Bb] = bb;
        return qG(mG(hb, Bb), ub, IG(Bb))
      })), (bb => {
        let [ub, hb] = bb;
        return mG(ub, hb)
      }));
      return (0, jG.jsx)(tG, {
        title: Bb("buildAFactory2Game:recipesDigs", {
          seconds: hb
        }),
        count: Gb.length,
        children: Gb.map((bb => {
          let [hb, Gb] = bb;
          const Ub = mG(hb, Gb),
            Lb = Ub > ub ? Ub : null,
            Yb = Lh[hb],
            Sb = null === Lb && Ob.has(Gb);
          return (0, jG.jsxs)("li", {
            className: dO()("Baf2Recipe", {
              Locked: null !== Lb,
              Far: nG(Lb, ub)
            }),
            children: [Sb && (0, jG.jsx)(vG, {}), (0, jG.jsx)(xG, {
              item: hb,
              amount: 1
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, jG.jsx)(xG, {
              item: Gb,
              amount: 1
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeName",
              children: BG(Bb, Gb)
            }), void 0 !== Yb && (0, jG.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Bb("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Yb)
              })
            }), null !== Lb && (0, jG.jsx)(gG, {
              tier: Lb
            })]
          }, hb)
        }))
      })
    }

    function RG(bb) {
      var ub;
      let {
        def: hb,
        seconds: Bb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)();
      return (0, jG.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, jG.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (ub = hb.fuels) && void 0 !== ub ? ub : []).map((bb => (0, jG.jsx)(xG, {
            item: bb,
            amount: 1
          }, bb))), (0, jG.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, jG.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, jG.jsx)(xO.e, {
              name: "bolt"
            }), Ob("buildAFactory2Game:recipePower", {
              power: cb(hb.powerMade),
              seconds: Bb
            })]
          })]
        })
      })
    }

    function bU(bb) {
      let {
        def: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)();
      return (0, jG.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, jG.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, jG.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, jG.jsx)(xO.e, {
              name: "bolt"
            }), hb("buildAFactory2Game:recipeMixer", {
              cryo: AG((0, Qb.A)(ub, ub.cryoMade), "")
            })]
          })
        })
      })
    }

    function uU(bb) {
      let {
        def: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)();
      return (0, jG.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, jG.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, jG.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, jG.jsx)(xO.e, {
              name: "bolt"
            }), hb("buildAFactory2Game:recipeCondenser", {
              power: AG((0, Qb.A)(ub, ub.powerPerOp), ""),
              water: AG((0, Qb.A)(ub, ub.fluidMade), "")
            })]
          })
        })
      })
    }

    function hU(bb) {
      let {
        kind: ub,
        def: hb,
        input: Bb,
        tier: Ob,
        noSeeds: Gb = !1
      } = bb;
      const Ub = String(hb.opMs / 1e3);
      return hh(hb) ? (0, jG.jsx)(FG, {
        seconds: Ub
      }) : hb.field ? (0, jG.jsx)(fG, {
        fertilised: null !== Bb
      }) : hb.table ? (0, jG.jsx)(kG, {
        tier: Ob,
        seconds: Ub
      }) : hb.recycles ? (0, jG.jsxs)(jG.Fragment, {
        children: [(0, jG.jsx)(TG, {
          tier: Ob,
          seconds: Ub,
          noSeeds: Gb
        }), (0, jG.jsx)(cG, {
          tier: Ob,
          seconds: Ub
        })]
      }) : uh(hb) ? (0, jG.jsx)(QG, {
        tier: Ob,
        seconds: Ub
      }) : void 0 !== hb.fluidMade ? (0, jG.jsx)(uU, {
        def: hb
      }) : void 0 !== hb.cryoMade ? (0, jG.jsx)(bU, {
        def: hb
      }) : void 0 !== hb.powerMade ? (0, jG.jsx)(RG, {
        def: hb,
        seconds: Ub
      }) : (0, jG.jsx)(BU, {
        kind: ub,
        input: Bb,
        tier: Ob,
        seconds: Ub
      })
    }

    function BU(bb) {
      let {
        kind: ub,
        input: hb,
        tier: Bb,
        seconds: Ob
      } = bb;
      const {
        t: Gb
      } = (0, DO.K)(), Ub = RO(), Lb = EG(function(bb) {
        const ub = new Map;
        for (const Ob of bb) {
          var hb, Bb;
          const bb = [Ob.output, Ob.outputAmount, Ob.inputAmount, null === (hb = Ob.bonus) || void 0 === hb ? void 0 : hb.item, null === (Bb = Ob.bonus) || void 0 === Bb ? void 0 : Bb.chance].join("|"),
            Gb = ub.get(bb);
          Gb ? Gb.inputs.push(Ob.input) : ub.set(bb, {
            inputs: [Ob.input],
            inputAmount: Ob.inputAmount,
            output: Ob.output,
            outputAmount: Ob.outputAmount,
            bonus: Ob.bonus
          })
        }
        return [...ub.values()]
      }(PG(ub, Bb).filter(ah)), (bb => MG(bb.output))).filter((bb => qG(MG(bb.output), Bb, IG(bb.output))));
      return (0, jG.jsx)(tG, {
        title: Gb("buildAFactory2Game:recipesEach", {
          seconds: Ob
        }),
        count: Lb.length,
        children: Lb.map((bb => {
          const ub = null !== hb && bb.inputs.includes(hb),
            Ob = bb.inputs.length > 3 ? [ub ? hb : bb.inputs[0]] : bb.inputs,
            Lb = MG(bb.output) > Bb ? MG(bb.output) : null,
            Yb = null === Lb && Ub.has(bb.output);
          return (0, jG.jsxs)("li", {
            className: dO()("Baf2Recipe", {
              InUse: ub,
              Locked: null !== Lb,
              Far: nG(Lb, Bb)
            }),
            children: [Yb && (0, jG.jsx)(vG, {}), Ob.map(((ub, hb) => (0, jG.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [hb > 0 && (0, jG.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, jG.jsx)(xG, {
                item: ub,
                amount: bb.inputAmount
              })]
            }, ub))), Ob.length < bb.inputs.length && (0, jG.jsx)(zG, {
              label: Gb("buildAFactory2Game:recipeMore", {
                count: String(bb.inputs.length - Ob.length)
              }),
              names: bb.inputs.filter((bb => !Ob.includes(bb))).map((bb => BG(Gb, bb)))
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, jG.jsx)(xG, {
              item: bb.output,
              amount: bb.outputAmount
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeName",
              children: BG(Gb, bb.output)
            }), bb.bonus && (0, jG.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Gb("buildAFactory2Game:recipeBonus", {
                percent: DG(bb.bonus.chance)
              }), (0, jG.jsx)(xG, {
                item: bb.bonus.item,
                amount: 1
              })]
            }), null !== Lb && (0, jG.jsx)(gG, {
              tier: Lb
            })]
          }, `${bb.output}|${bb.inputs[0]}`)
        }))
      })
    }

    function OU(bb) {
      let {
        taught: ub,
        tier: hb
      } = bb;
      const {
        t: Bb
      } = (0, DO.K)(), Ob = RO(), Gb = EG(Object.values(ku), (bb => bb.tier)).filter((bb => qG(bb.tier, hb)));
      return (0, jG.jsx)(tG, {
        title: Bb("buildAFactory2Game:benchCanMake"),
        count: Gb.length,
        startOpen: !1,
        children: Gb.map((bb => {
          const Gb = bb.tier > hb,
            Ub = !Gb && Ob.has(bb.output);
          return (0, jG.jsxs)("li", {
            className: dO()("Baf2Recipe", {
              InUse: bb.output === ub,
              Locked: Gb,
              Far: nG(Gb ? bb.tier : null, hb)
            }),
            children: [Ub && (0, jG.jsx)(vG, {}), (0, jG.jsx)(xG, {
              item: bb.output,
              amount: bb.outputAmount
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeName",
              children: BG(Bb, bb.output)
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), bb.inputs.map((bb => (0, jG.jsx)(xG, {
              item: bb.item,
              amount: bb.amount
            }, bb.item))), Gb && (0, jG.jsx)(gG, {
              tier: bb.tier
            })]
          }, bb.output)
        }))
      })
    }
    var GU, UU, LU, YU, SU;
    const aU = Ju.Generator,
      HU = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      wU = 1e3 * (null !== (GU = aU.powerMade) && void 0 !== GU ? GU : 0) / aU.opMs,
      ZU = Math.min(...(null !== (UU = aU.fuels) && void 0 !== UU ? UU : []).map((bb => Gh[bb]))) / 1e3,
      XU = Ju["Volt Engine"],
      pU = 1e3 * (null !== (LU = XU.powerMade) && void 0 !== LU ? LU : 0) / XU.opMs,
      oU = Gh[null !== (YU = null === (SU = XU.fuels) || void 0 === SU ? void 0 : SU[0]) && void 0 !== YU ? YU : ""] / 1e3;

    function AU(bb) {
      let {
        item: ub,
        label: hb,
        value: Bb,
        note: Ob,
        dim: Gb
      } = bb;
      return (0, jG.jsxs)("li", {
        className: dO()("Baf2PowerRow", {
          Dim: Gb
        }),
        children: [(0, jG.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, jG.jsx)(zO.d, {
            itemName: ub,
            amount: 0
          })
        }), (0, jG.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, jG.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: hb
          }), Ob && (0, jG.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Ob
          })]
        }), (0, jG.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Bb
        })]
      })
    }

    function lU(bb, ub, hb, Bb) {
      var Ob;
      const Gb = void 0 === Bb ? Ju[bb] : function(bb, ub) {
          if (null === ub) return bb;
          let hb = Fb.get(ub);
          return hb || (hb = {
            ...bb,
            powerPerOp: Vb(bb, ub),
            farmMob: ub
          }, Fb.set(ub, hb)), hb
        }(Ju[bb], Bb),
        Ub = ub && Gb.couplable ? qu(Gb, hb) : Gb;
      return 1e3 * (null !== (Ob = Ub.powerPerOp) && void 0 !== Ob ? Ob : 0) / Ub.opMs
    }

    function KU(bb) {
      var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb;
      let {
        message: Sb
      } = bb;
      const {
        t: ab
      } = (0, DO.K)(), Hb = (bb, ub) => ab("buildAFactory2Game:powerPerSecond", {
        rate: AG(bb, ub)
      }), [wb, Zb] = Sb.baf2PowerGenerators, Xb = Sb.baf2PowerGeneratorFuel, pb = Sb.baf2PowerSunPanels, ob = null !== (ub = Sb.baf2PowerSunShare) && void 0 !== ub ? ub : 1, Ab = Sb.baf2PowerVaults, lb = Sb.baf2PowerUsers, [Kb, Wb] = null !== (hb = Sb.baf2PowerEngines) && void 0 !== hb ? hb : [0, 0], Cb = null !== (Bb = Sb.baf2PowerEngineCells) && void 0 !== Bb ? Bb : 0, db = null !== (Ob = Sb.baf2PowerPads) && void 0 !== Ob ? Ob : 0, rb = null !== (Gb = Sb.baf2PowerCharge) && void 0 !== Gb ? Gb : 0, [jb, nb] = null !== (Ub = Sb.baf2PowerReactors) && void 0 !== Ub ? Ub : [0, 0], [Db, xb] = null !== (Lb = Sb.baf2PowerBatteries) && void 0 !== Lb ? Lb : [0, 0];
      let zb = ab("buildAFactory2Game:powerEngineCells", {
        amount: String(Cb)
      });
      Cb > 0 && Wb > 0 && (zb = ab("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Cb),
        time: WG(ab, Cb * oU / Wb)
      }));
      let gb = ab("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(Xb)
      });
      Xb > 0 && Zb > 0 && (gb = ab("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(Xb),
        time: WG(ab, Xb * ZU / Zb)
      }));
      const ib = wb + Kb + pb + jb;
      return (0, jG.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, jG.jsxs)("section", {
          children: [(0, jG.jsxs)("h3", {
            children: [ab("buildAFactory2Game:powerMaking"), (0, jG.jsx)("span", {
              children: Hb(Sb.baf2PowerMadePerS, "+")
            })]
          }), (0, jG.jsxs)("ul", {
            children: [0 === ib && (0, jG.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: ab("buildAFactory2Game:powerNoMakers")
            }), wb > 0 && (0, jG.jsx)(AU, {
              item: "Generator",
              label: `${BG(ab,"Generator")} \xd7${wb}`,
              note: `${ab("buildAFactory2Game:powerRunning",{amount:String(Zb)})} \xb7 ${gb}`,
              value: Hb(Zb * wU, "+"),
              dim: 0 === Zb
            }), Kb > 0 && (0, jG.jsx)(AU, {
              item: "Volt Engine",
              label: `${BG(ab,"Volt Engine")} \xd7${Kb}`,
              note: `${ab("buildAFactory2Game:powerRunning",{amount:String(Wb)})} \xb7 ${zb}`,
              value: Hb(Wb * pU, "+"),
              dim: 0 === Wb
            }), pb > 0 && (0, jG.jsx)(AU, {
              item: "Solar Panel",
              label: `${BG(ab,"Solar Panel")} \xd7${pb}`,
              note: ab(ob < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Hb(4 * pb * ob, "+")
            }), jb > 0 && (0, jG.jsx)(AU, {
              item: "Reactor Frame",
              label: `${ab("buildAFactory2Game:powerReactors")} \xd7${jb}`,
              note: ab("buildAFactory2Game:powerRunning", {
                amount: String(nb)
              }),
              value: Hb(null !== (Yb = Sb.baf2PowerReactorPerS) && void 0 !== Yb ? Yb : 0, "+"),
              dim: 0 === nb
            })]
          })]
        }), (0, jG.jsxs)("section", {
          children: [(0, jG.jsxs)("h3", {
            children: [ab("buildAFactory2Game:powerStorage"), (0, jG.jsx)("span", {
              children: cb(Sb.baf2PowerCap)
            })]
          }), (Ab > 0 || Db > 0) && (0, jG.jsxs)("ul", {
            children: [Ab > 0 && (0, jG.jsx)(AU, {
              item: "Charge Vault",
              label: `${BG(ab,"Charge Vault")} \xd7${Ab}`,
              value: `+${cb(8e3*Ab)}`
            }), Db > 0 && (0, jG.jsx)(AU, {
              item: "Battery Cell",
              label: `${ab("buildAFactory2Game:powerBatteries")} \xd7${Db}`,
              value: `+${cb(xb)}`
            })]
          })]
        }), (0, jG.jsxs)("section", {
          children: [(0, jG.jsxs)("h3", {
            children: [ab("buildAFactory2Game:powerUsing"), (0, jG.jsx)("span", {
              children: Hb(Sb.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, jG.jsxs)("ul", {
            children: [0 === lb.length && 0 === db && 0 === rb && (0, jG.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: ab("buildAFactory2Game:powerNoUsers")
            }), lb.map((bb => {
              let [ub, hb, Bb, Ob, Gb = 1, Ub] = bb, Lb = hb ? ab(HU[Gb - 1], {
                name: BG(ab, ub)
              }) : BG(ab, ub);
              return void 0 !== Ub && (Lb = ab("buildAFactory2Game:powerFarmName", {
                name: Lb,
                mob: ab(qb(Ub))
              })), (0, jG.jsx)(AU, {
                item: ub,
                label: `${Lb} \xd7${Bb}`,
                note: ab("buildAFactory2Game:powerRunning", {
                  amount: String(Ob)
                }),
                value: Ob > 0 ? Hb(Ob * lU(ub, hb, Gb, Ub), "\u2212") : ab("buildAFactory2Game:powerIdle"),
                dim: 0 === Ob
              }, `${ub}|${hb}|${Gb}|${Ub}`)
            })), db > 0 && (0, jG.jsx)(AU, {
              item: "Charging Pad",
              label: `${BG(ab,"Charging Pad")} \xd7${db}`,
              value: ab("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), rb > 0 && (0, jG.jsx)(AU, {
              item: "Homestead Core",
              label: ab("buildAFactory2Game:powerCharge"),
              value: Hb(rb, "\u2212")
            }), Sb.baf2PowerStarved > 0 && (0, jG.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, jG.jsx)(xO.e, {
                name: "triangle-exclamation"
              }), ab("buildAFactory2Game:powerStarved", {
                amount: String(Sb.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var WU = hb(4292),
      CU = hb(1357);
    class dU {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(bb) {
        this.message = bb;
        for (const ub of this.listeners) ub()
      }
      get() {
        return this.message
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
    }
    class rU extends dU {}

    function jU(bb, ub) {
      const hb = () => {
          const hb = bb.get();
          if (!hb || !ub) return hb;
          const [Bb, Ob, Gb] = hb.baf2PowerAt;
          return Bb === ub[0] && Ob === ub[1] && Gb === ub[2] ? hb : null
        },
        [Ob, Gb] = (0, Bb.useState)(hb);
      return (0, Bb.useEffect)((() => (Gb(hb()), bb.subscribe((() => {
        Gb(hb())
      })))), [bb, ...null !== ub && void 0 !== ub ? ub : []]), Ob
    }

    function nU(bb) {
      return {
        stored: bb.baf2PowerStored,
        cap: bb.baf2PowerCap,
        madePerS: bb.baf2PowerMadePerS,
        usedPerS: bb.baf2PowerUsedPerS
      }
    }

    function DU(bb) {
      let {
        stored: ub,
        cap: hb
      } = bb;
      return (0, jG.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, jG.jsx)("div", {
          style: {
            width: `${Math.min(100,100*ub/Math.max(1,hb))}%`
          }
        })
      })
    }

    function xU(bb) {
      let {
        figures: ub,
        labelled: hb = !1
      } = bb;
      const {
        t: Bb
      } = (0, DO.K)(), Ob = ub.madePerS - ub.usedPerS, {
        text: Gb,
        draining: Ub
      } = function(bb, ub) {
        let {
          stored: hb,
          cap: Bb,
          madePerS: Ob,
          usedPerS: Gb
        } = ub;
        const Ub = Ob - Gb;
        return hb >= Bb ? {
          text: bb("buildAFactory2Game:powerFull"),
          draining: !1
        } : Ub > .05 ? {
          text: bb("buildAFactory2Game:powerFullIn", {
            time: WG(bb, (Bb - hb) / Ub)
          }),
          draining: !1
        } : Ub < -.05 ? {
          text: bb("buildAFactory2Game:powerEmptyIn", {
            time: WG(bb, hb / -Ub)
          }),
          draining: !0
        } : {
          text: bb("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Bb, ub);
      return (0, jG.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, jG.jsx)(DU, {
          stored: ub.stored,
          cap: ub.cap
        }), (0, jG.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, jG.jsx)("span", {
            children: Bb(hb ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: cb(ub.stored),
              cap: cb(ub.cap)
            })
          }), (0, jG.jsxs)("span", {
            className: dO()("Baf2PowerNet", {
              Draining: Ub
            }),
            children: [Bb("buildAFactory2Game:powerPerSecond", {
              rate: AG(Math.abs(Ob), Ob < 0 ? "\u2212" : "+")
            }), " \xb7 ", Gb]
          })]
        })]
      })
    }

    function zU(bb) {
      let {
        stored: ub,
        cap: hb,
        rates: Bb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)();
      return Bb ? (0, jG.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, jG.jsx)(xU, {
          figures: {
            stored: ub,
            cap: hb,
            madePerS: Bb[0],
            usedPerS: Bb[1]
          },
          labelled: !0
        })
      }) : (0, jG.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, jG.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, jG.jsx)(DU, {
            stored: ub,
            cap: hb
          }), (0, jG.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, jG.jsx)("span", {
              children: Ob("buildAFactory2Game:powerStoredLabelled", {
                stored: cb(ub),
                cap: cb(hb)
              })
            })
          })]
        })
      })
    }

    function gU(bb) {
      let {
        store: ub,
        close: hb
      } = bb;
      const {
        t: Bb
      } = (0, DO.K)(), Ob = jU(ub);
      return (0, jG.jsx)(WU.b, {
        close: hb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, jG.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsxs)("div", {
              children: [(0, jG.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Bb("buildAFactory2Game:powerTitle")
              }), (0, jG.jsx)("p", {
                children: Bb("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, jG.jsx)(CU.i, {
              onClick: hb
            })]
          }), Ob && (0, jG.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, jG.jsx)(xU, {
              figures: nU(Ob)
            }), (0, jG.jsx)(KU, {
              message: Ob
            })]
          })]
        })
      })
    }

    function iU(bb) {
      var ub;
      let {
        kind: hb,
        def: Ob,
        Fb: Gb,
        power: Ub,
        stored: Lb,
        cap: Yb
      } = bb;
      const {
        t: Sb
      } = (0, DO.K)(), ab = jU(Ub, Gb), [Hb, wb] = (0, Bb.useState)(!1);
      return (0, jG.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, jG.jsx)(hU, {
          kind: hb,
          def: Ob,
          input: null,
          tier: null !== (ub = null === ab || void 0 === ab ? void 0 : ab.baf2PowerTier) && void 0 !== ub ? ub : 1
        }), (0, jG.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Sb("buildAFactory2Game:powerTitle")
        }), ab && (0, jG.jsx)(xU, {
          figures: nU(ab)
        }), !ab && (0, jG.jsx)(zU, {
          stored: Lb,
          cap: Yb,
          rates: null
        }), ab && (0, jG.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            wb(!Hb)
          },
          "aria-expanded": Hb,
          children: Sb(Hb ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), ab && Hb && (0, jG.jsx)(KU, {
          message: ab
        })]
      })
    }
    const vU = 2500,
      tU = 17500,
      JU = `${Cb} `;
    const eU = ["plan", "throttle"];

    function NU(bb) {
      if (bb.startsWith(`${Du} `)) return bb.slice(0, bb.lastIndexOf(" "));
      const ub = bb.split(" ");
      return ub[0] === au && eU.includes(ub[4]) ? ub.slice(0, 5).join(" ") : null
    }
    class sU {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = bb, this.now = ub, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.nOb = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = ub()
      }
      enqueue(bb) {
        this.queue(bb, this.nextTicket());
        const ub = this.nOb + this.pending.length;
        return this.flush(), ub
      }
      track(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const hb = this.nextTicket();
        if (!ub.urgent) return this.queue(bb, hb), this.flush(), hb;
        const {
          supersedes: Bb
        } = ub;
        for (let Gb = this.pending.length - 1; Gb >= this.urgent; Gb--) {
          const ub = this.pending[Gb];
          (ub.command === bb || null !== Bb && void 0 !== Bb && Bb(ub.command)) && (this.pending.splice(Gb, 1), this.markLeft(ub.tickets))
        }
        const Ob = this.pending.findIndex((ub => {
          let {
            command: hb
          } = ub;
          return hb === bb
        }));
        return -1 !== Ob ? this.pending[Ob].tickets.push(hb) : (this.pending.splice(this.urgent, 0, {
          command: bb,
          tickets: [hb]
        }), this.urgent += 1), this.flush(), hb
      }
      leftAt(bb) {
        const ub = this.leftTimes.get(bb);
        return void 0 !== ub ? ub : this.pending.some((ub => {
          let {
            tickets: hb
          } = ub;
          return hb.includes(bb)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let bb = !0;
        return () => {
          bb && (bb = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(bb) {
        var ub;
        return (null === (ub = this.pending.at(-1)) || void 0 === ub ? void 0 : ub.command) === bb
      }
      sent() {
        return this.nOb
      }
      clear() {
        for (const {
            tickets: bb
          }
          of this.pending) this.markLeft(bb);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(bb) {
        const ub = this.now();
        for (const hb of bb) this.leftTimes.set(hb, ub);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(bb, ub) {
        const hb = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === hb || void 0 === hb ? void 0 : hb.command) === bb) return void(! function(bb) {
          return bb === db || bb.startsWith(`${Wb} `) || bb.startsWith(`${mb} `)
        }(bb) ? hb.tickets.push(ub) : (this.pending.pop(), this.markLeft([...hb.tickets, ub])));
        const Bb = void 0 === hb ? null : Su(hb.command, bb);
        if (null !== Bb && void 0 !== hb) return hb.command = Bb, void hb.tickets.push(ub);
        const Ob = NU(bb);
        if (null !== Ob && void 0 !== hb && NU(hb.command) === Ob) return hb.command = bb, void hb.tickets.push(ub);
        if (null !== hb && void 0 !== hb && hb.command.startsWith(JU) && bb.startsWith(JU)) {
          const Bb = bb.slice(JU.length);
          if (hb.command.slice(JU.length).split(",").includes(Bb)) return void hb.tickets.push(ub);
          const Ob = `${hb.command},${Bb}`;
          if (Ob.length <= 119) return hb.command = Ob, void hb.tickets.push(ub)
        }
        this.pending.push({
          command: bb,
          tickets: [ub]
        })
      }
      flush() {
        const bb = this.now();
        for (this.tokens = Math.min(5, this.tokens + (bb - this.refilledAt) / vU), this.refilledAt = bb; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.nOb += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: bb,
            tickets: ub
          } = this.pending.shift();
          this.markLeft(ub), this.send(bb)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * vU)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class MU {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new sU(bb, ub)
      }
      send(bb) {
        return this.queue.enqueue(bb)
      }
      sent() {
        return this.queue.sent()
      }
      track(bb, ub) {
        return this.queue.track(bb, ub)
      }
      leftAt(bb) {
        return this.queue.leftAt(bb)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(bb) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = ub, this.send(bb), this.islandEdits.count
      }
      syncIslandEdits(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: hb
        } = this, Bb = ub - hb.lastAtMs < tU;
        hb.count = Bb ? Math.max(hb.count, bb) : bb
      }
      clear() {
        this.queue.clear()
      }
    }
    const mU = (0, Bb.createContext)(null);

    function IU() {
      const bb = (0, Bb.useContext)(mU);
      if (!bb) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return bb
    }

    function PU(bb, ub) {
      return null !== ub && void 0 !== ub ? ub : 1 === bb
    }

    function qU(bb, ub) {
      return bb.every((bb => {
        var hb;
        let [Bb, , Ob] = bb;
        return !PU(Ob, null === (hb = ub.get(Bb)) || void 0 === hb ? void 0 : hb.HZ)
      }))
    }

    function EU(bb, ub, hb) {
      if (0 === bb.size) return bb;
      const Bb = new Map(bb);
      for (const [Ob, Gb] of bb) {
        const bb = ub.find((bb => {
          let [ub] = bb;
          return ub === Ob
        }));
        (!bb || Gb.HZ === (1 === bb[2]) || Gb.atMs < hb) && Bb.delete(Ob)
      }
      return Bb
    }

    function yU(bb) {
      var ub;
      let {
        Fb: hb,
        input: Ob,
        drops: Gb,
        seconds: Ub
      } = bb;
      const {
        t: Lb
      } = (0, DO.K)(), Yb = IU(), [Sb, ab] = (0, Bb.useState)(new Map);
      (0, Bb.useEffect)((() => {
        Gb && ab((bb => EU(bb, Gb, Date.now() - tU)))
      }), [Gb]), (0, Bb.useEffect)((() => {
        const bb = function(bb, ub) {
          let hb = null;
          for (const {
              atMs: Bb
            }
            of bb.values()) hb = null === hb ? Bb : Math.min(hb, Bb);
          return null === hb ? null : hb + ub
        }(Sb, tU);
        if (null === bb || !Gb) return;
        const ub = setTimeout((() => {
          ab((bb => EU(bb, Gb, Date.now() - tU)))
        }), Math.max(0, bb - Date.now()) + 1);
        return () => {
          clearTimeout(ub)
        }
      }), [Sb, Gb]);
      const Hb = Eb(Ob),
        wb = null !== Hb && null !== Gb && qU(Gb, Sb),
        Zb = function(bb, ub, hb) {
          return null === bb || null === ub || qU(ub, hb) ? 0 : Mb[Nb[bb]]
        }(Hb, Gb, Sb);
      return (0, jG.jsxs)(tG, {
        title: Lb("buildAFactory2Game:farmDropsTitle", {
          seconds: Ub
        }),
        count: null !== (ub = null === Gb || void 0 === Gb ? void 0 : Gb.length) && void 0 !== ub ? ub : 0,
        children: [Zb > 0 && (0, jG.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: Lb("buildAFactory2Game:farmDropsPower", {
            power: String(Zb)
          })
        }), (null === Hb || !Gb) && (0, jG.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: Lb("buildAFactory2Game:farmDropsEmpty")
        }), wb && (0, jG.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: Lb("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Hb && (null === Gb || void 0 === Gb ? void 0 : Gb.map((bb => {
          var ub;
          let [Bb, Ob, Gb] = bb;
          const Ub = Ob < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Hb = PU(Gb, null === (ub = Sb.get(Bb)) || void 0 === ub ? void 0 : ub.HZ);
          return (0, jG.jsxs)("li", {
            className: dO()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Hb
            }),
            children: [(0, jG.jsx)(xG, {
              item: Bb,
              amount: 1
            }), (0, jG.jsx)("span", {
              className: "Baf2RecipeName",
              children: BG(Lb, Bb)
            }), (0, jG.jsx)("span", {
              className: "Baf2FarmRate",
              children: Lb(Ub, {
                amount: String(Ob)
              })
            }), (0, jG.jsx)("button", {
              type: "button",
              className: dO()("Baf2FarmToggle SmallTextBold", {
                Kept: Hb
              }),
              "aria-pressed": Hb,
              onClick: () => {
                ab(new Map(Sb).set(Bb, {
                  HZ: !Hb,
                  atMs: Date.now()
                })), Yb.send(function(bb, ub, hb, Bb) {
                  return `${mb} ${bb} ${ub} ${hb} ${Bb}`
                }(hb[0], hb[1], hb[2], Bb))
              },
              children: Lb(Hb ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Bb)
        })))]
      })
    }
    var VU;
    const FU = String(null !== (VU = Ju.Synthesizer.waterPerOp) && void 0 !== VU ? VU : 0);

    function fU(bb) {
      let {
        Fb: ub,
        taught: hb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)(), Gb = IU(), [Ub, Lb] = (0, Bb.useState)(null);
      (0, Bb.useEffect)((() => {
        null !== Ub && hb === Ub && Lb(null)
      }), [Ub, hb]);
      const Yb = null !== Ub && void 0 !== Ub ? Ub : hb;
      let Sb = Ob("buildAFactory2Game:synthPick");
      return null !== Yb && (Sb = Ob("buildAFactory2Game:synthGrows", {
        name: BG(Ob, Yb),
        input: BG(Ob, ru),
        water: FU
      })), (0, jG.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, jG.jsx)("div", {
          className: dO()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Yb
          }),
          children: Sb
        }), (0, jG.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: ju.map(((bb, hb) => {
            const Bb = BG(Ob, bb),
              Ub = bb === Yb;
            return (0, jG.jsx)("li", {
              children: (0, jG.jsx)("button", {
                type: "button",
                className: dO()("Baf2SynthTile", {
                  Selected: Ub
                }),
                title: Bb,
                "aria-label": Bb,
                "aria-pressed": Ub,
                onClick: () => {
                  Ub || (Lb(bb), Gb.send(`${Du} ${ub[0]} ${ub[1]} ${ub[2]} ${hb}`))
                },
                children: (0, jG.jsx)(zO.d, {
                  itemName: bb,
                  amount: 0
                })
              })
            }, bb)
          }))
        })]
      })
    }
    const kU = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function TU(bb) {
      let {
        kind: ub,
        tier: hb,
        coupled: Bb,
        level: Ob,
        slot: Gb
      } = bb;
      const {
        t: Ub
      } = (0, DO.K)(), Yb = Tb(Nu);
      if (!Bb && null !== hb && hb < Yb) return (0, jG.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, jG.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, jG.jsx)(xO.e, {
            name: "lock"
          })
        }), (0, jG.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Ub("buildAFactory2Game:upgradeLocked")
        }), (0, jG.jsx)("span", {
          className: "Baf2TierTag",
          children: Ub("buildAFactory2Game:tierTag", {
            tier: String(Yb)
          })
        })]
      });
      const Sb = function(bb, ub) {
          if (Lb() && "Crusher" !== bb && null !== ub) {
            if (cU(Mu, ub)) return {
              item: Mu,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (cU(su, ub)) return {
              item: su,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Nu,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(ub, hb),
        ab = Ub(Bb ? kU[Ob - 1] : Sb.emptyKey),
        Hb = null !== hb ? function(bb, ub, hb, Bb) {
          if (!Lb() || !hb || "Crusher" === bb || ub < 10) return null;
          const Ob = Tb(Mu);
          if (Bb < 3 && Ob > 1 && (2 === Bb || ub >= Ob)) return {
            tier: Ob,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Gb = Tb(su);
          if (1 === Bb && Gb > 1) return {
            tier: Gb,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(ub, hb, Bb, Ob) : null;
      return (0, jG.jsxs)("div", {
        className: dO()("Baf2UpgradeSocket", {
          Fitted: Bb
        }),
        children: [(0, jG.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Bb && Gb, !Bb && (0, jG.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, jG.jsx)(zO.d, {
              itemName: Sb.item,
              amount: 0
            })
          })]
        }), (0, jG.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, jG.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Ub("buildAFactory2Game:upgradeTitle")
          }), (0, jG.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: ab
          }), Bb && Ob >= 2 && "Crusher" === ub && (0, jG.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Ub("buildAFactory2Game:couplerCrusherHint")
          }), Hb && null !== hb && hb < Hb.tier && (0, jG.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, jG.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, jG.jsx)(xO.e, {
                name: "lock"
              })
            }), Ub(Hb.lockedKey), (0, jG.jsx)("span", {
              className: "Baf2TierTag",
              children: Ub("buildAFactory2Game:tierTag", {
                tier: String(Hb.tier)
              })
            })]
          }), Hb && null !== hb && hb >= Hb.tier && (0, jG.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Ub(Hb.nextKey)
          })]
        })]
      })
    }

    function cU(bb, ub) {
      const hb = Tb(bb);
      return hb > 1 && ub >= hb
    }
    var QU = hb(36684);
    const RU = (0, Qb.A)(Ju.Condenser, Ju.Condenser.fluidMade),
      bL = .05;
    class uL extends dU {}

    function hL(bb) {
      return AG(bb, "")
    }

    function BL(bb, ub, hb) {
      return bb(ub ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: hb
      })
    }

    function OL(bb, ub, hb, Bb) {
      return hb <= bL && Bb <= bL ? null : Bb <= bL || hb <= bL ? BL(bb, ub, Bb <= bL ? AG(hb, "+") : AG(Bb, "\u2212")) : bb(ub ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: hL(hb),
        used: hL(Bb)
      })
    }

    function GL(bb, ub) {
      return Math.min(100, 100 * bb / Math.max(1, ub))
    }

    function UL(bb) {
      let {
        stored: ub,
        cap: hb,
        netPerS: Bb,
        rates: Ob,
        cryo: Gb
      } = bb;
      const {
        t: Ub
      } = (0, DO.K)(), Lb = function(bb, ub, hb, Bb) {
        return hb <= 0 ? bb("buildAFactory2Game:waterNoStorage") : ub >= hb ? bb("buildAFactory2Game:powerFull") : Bb > bL ? bb("buildAFactory2Game:powerFullIn", {
          time: WG(bb, (hb - ub) / Bb)
        }) : Bb < -.05 ? ub <= 0 ? bb("buildAFactory2Game:waterEmpty") : bb("buildAFactory2Game:powerEmptyIn", {
          time: WG(bb, ub / -Bb)
        }) : bb("buildAFactory2Game:powerSteady")
      }(Ub, ub, hb, Bb), Yb = hb > 0 && ub < hb && Math.abs(Bb) <= bL, Sb = Ub(Gb ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), ab = null !== Ob ? `${Ob} \xb7 ${Lb}` : Yb ? Sb : `${Sb} \xb7 ${Lb}`;
      return (0, jG.jsxs)(jG.Fragment, {
        children: [(0, jG.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, jG.jsx)("div", {
            style: {
              width: `${GL(ub,hb)}%`
            }
          })
        }), (0, jG.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, jG.jsx)("span", {
            children: hb > 0 && Ub("buildAFactory2Game:powerStored", {
              stored: (0, Qb.K)(ub),
              cap: (0, Qb.K)(hb)
            })
          }), (0, jG.jsx)("span", {
            className: dO()("Baf2WaterNet", {
              Draining: Bb < -.05
            }),
            children: ab
          })]
        })]
      })
    }

    function LL(bb) {
      let {
        water: ub,
        at: hb,
        side: Bb = null
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)(), Gb = IU(), [Ub, Lb, Yb] = ub;
      return (0, jG.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, jG.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, jG.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Ob(null === Bb ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Bb}`)
          }), (0, jG.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Gb.send(`${Qb.t} ${hb[0]} ${hb[1]} ${hb[2]}${"cryoOut"===Bb?" cryo":""}`)
            },
            children: Ob("buildAFactory2Game:waterDetails")
          })]
        }), (0, jG.jsx)(UL, {
          stored: Ub,
          cap: Lb,
          netPerS: Yb,
          rates: BL(Ob, "cryoOut" === Bb, AG(Math.abs(Yb), Yb < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Bb
        })]
      })
    }

    function YL(bb, ub) {
      var hb, Bb, Ob;
      const Gb = !0 === ub.baf2WaterCryo,
        Ub = null !== (hb = null === (Bb = ub.baf2WaterMakers.find((bb => bb[0] === (Gb ? Qb.e : "Condenser")))) || void 0 === Bb ? void 0 : Bb[1]) && void 0 !== hb ? hb : 0,
        Lb = [],
        Yb = (ub, hb, Bb) => {
          ub > 0 && Lb.push(bb(1 === ub ? hb : Bb, {
            count: String(ub)
          }))
        };
      return Gb ? Yb(Ub, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Yb(Ub, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Yb(null !== (Ob = ub.baf2WaterPipes) && void 0 !== Ob ? Ob : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Yb(ub.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), Lb.join(" \xb7 ")
    }

    function SL(bb, ub) {
      if (!0 === ub.baf2WaterCryo) return function(bb, ub) {
        const hb = Ju[Qb.e];
        switch (ub.baf2WaterThis) {
          case "pipe":
            return {
              text: bb("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: bb("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: bb("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: bb("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: bb("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: bb("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: bb("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var Bb;
            const [Ob, Gb] = null !== (Bb = ub.baf2WaterThisRates) && void 0 !== Bb ? Bb : [(0, Qb.A)(hb, hb.cryoMade), (0, Qb.A)(hb, hb.powerPerOp)];
            return !0 === ub.baf2WaterDriven ? {
              text: bb("buildAFactory2Game:cryoThisMixerDriven", {
                rate: hL(Ob)
              }),
              bad: !1
            } : {
              text: bb("buildAFactory2Game:cryoThisMixer", {
                rate: hL(Ob),
                power: hL(Gb)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: bb("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(bb, ub);
      const hb = !0 === ub.baf2WaterDriven,
        Bb = Ju.Condenser;
      switch (ub.baf2WaterThis) {
        case "pipe":
          return {
            text: bb("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: bb("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: bb("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: bb("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: bb("buildAFactory2Game:waterThisTank", {
              tank: (0, Qb.K)(Qb.o),
              cap: (0, Qb.K)(ub.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Ob;
          const [Gb, Ub] = null !== (Ob = ub.baf2WaterThisRates) && void 0 !== Ob ? Ob : [RU, (0, Qb.A)(Bb, Bb.powerPerOp)];
          return hb ? {
            text: bb("buildAFactory2Game:waterThisCondenserDriven", {
              rate: hL(Gb)
            }),
            bad: !1
          } : {
            text: bb("buildAFactory2Game:waterThisCondenser", {
              rate: hL(Gb),
              power: hL(Ub)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: bb("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function aL(bb, ub) {
      const hb = ub.baf2WaterMakers.some((bb => !0 === bb[5]));
      if (!0 === ub.baf2WaterCryo) {
        const Bb = ub.baf2WaterUsedPerS - ub.baf2WaterMadePerS,
          Ob = hb || Bb <= bL ? 0 : (0, Qb.x)(Bb);
        return 0 === Ob ? null : Ob > 1 ? bb("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Ob)
        }) : bb("buildAFactory2Game:cryoNextOne")
      }
      const Bb = hb ? null : function(bb, ub) {
        const hb = ub - bb;
        return hb <= bL ? null : Math.ceil(hb / RU)
      }(ub.baf2WaterMadePerS, ub.baf2WaterUsedPerS);
      return null === Bb ? null : Bb > 1 ? bb("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Bb)
      }) : bb("buildAFactory2Game:waterNextOne")
    }

    function HL(bb) {
      let {
        item: ub,
        label: hb,
        note: Bb,
        value: Ob,
        dim: Gb,
        bad: Ub
      } = bb;
      return (0, jG.jsxs)("li", {
        className: dO()("Baf2WaterRow", {
          Dim: Gb,
          Bad: Ub
        }),
        children: [(0, jG.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, jG.jsx)(zO.d, {
            itemName: ub,
            amount: 0
          })
        }), (0, jG.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, jG.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: hb
          }), Bb && (0, jG.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Bb
          })]
        }), (0, jG.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Ob
        })]
      })
    }

    function wL(bb) {
      return QU.j[bb] ? bb : "Reactor Port"
    }

    function ZL(bb) {
      let {
        message: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)(), Bb = !0 === ub.baf2WaterCryo, Ob = (bb, ub) => BL(hb, Bb, AG(bb, ub));
      return (0, jG.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, jG.jsxs)("section", {
          children: [(0, jG.jsxs)("h3", {
            children: [hb("buildAFactory2Game:waterMakes"), (0, jG.jsx)("span", {
              children: Ob(ub.baf2WaterMadePerS, "+")
            })]
          }), (0, jG.jsxs)("ul", {
            children: [0 === ub.baf2WaterMakers.length && (0, jG.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: hb(Bb ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), ub.baf2WaterMakers.map((bb => {
              let [ub, Bb, Gb, Ub, Lb, Yb] = bb;
              const Sb = hb("buildAFactory2Game:powerRunning", {
                amount: String(Gb)
              });
              let ab = Lb > 0 ? hb("buildAFactory2Game:waterMakerPower", {
                running: Sb,
                power: hL(Lb)
              }) : Sb;
              return Yb && (ab = hb(0 === Gb && Ub <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, jG.jsx)(HL, {
                item: ub,
                label: `${BG(hb,ub)} \xd7${Bb}`,
                note: ab,
                value: Gb > 0 || Yb && Ub > 0 ? Ob(Ub, "+") : hb("buildAFactory2Game:powerIdle"),
                dim: 0 === Gb && !Yb,
                bad: Yb
              }, ub)
            }))]
          })]
        }), (0, jG.jsxs)("section", {
          children: [(0, jG.jsxs)("h3", {
            children: [hb("buildAFactory2Game:waterUses"), (0, jG.jsx)("span", {
              children: Ob(ub.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, jG.jsxs)("ul", {
            children: [0 === ub.baf2WaterUsers.length && (0, jG.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: hb(Bb ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), ub.baf2WaterUsers.map((bb => {
              let [ub, Bb, Gb, Ub] = bb;
              const Lb = QU.j[ub] ? BG(hb, ub) : ub;
              return (0, jG.jsx)(HL, {
                item: wL(ub),
                label: Bb > 1 ? `${Lb} \xd7${Bb}` : Lb,
                note: Ub ? hb("buildAFactory2Game:waterPortFirst") : void 0,
                value: Gb > 0 ? Ob(Gb, "\u2212") : hb("buildAFactory2Game:powerIdle"),
                dim: 0 === Gb
              }, ub)
            }))]
          })]
        })]
      })
    }

    function XL(bb) {
      var ub, hb, Ob, Gb, Ub;
      let {
        store: Lb,
        close: Yb
      } = bb;
      const {
        t: Sb
      } = (0, DO.K)(), ab = function(bb) {
        const [ub, hb] = (0, Bb.useState)((() => bb.get()));
        return (0, Bb.useEffect)((() => (hb(bb.get()), bb.subscribe((() => {
          hb(bb.get())
        })))), [bb]), ub
      }(Lb), Hb = null !== (ub = null === ab || void 0 === ab ? void 0 : ab.baf2WaterStored) && void 0 !== ub ? ub : 0, wb = null !== (hb = null === ab || void 0 === ab ? void 0 : ab.baf2WaterCap) && void 0 !== hb ? hb : 0, Zb = null !== (Ob = null === ab || void 0 === ab ? void 0 : ab.baf2WaterMadePerS) && void 0 !== Ob ? Ob : 0, Xb = null !== (Gb = null === ab || void 0 === ab ? void 0 : ab.baf2WaterUsedPerS) && void 0 !== Gb ? Gb : 0, pb = null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.baf2WaterNetPerS) && void 0 !== Ub ? Ub : Zb - Xb, ob = ab && SL(Sb, ab), Ab = ab && aL(Sb, ab), lb = !0 === (null === ab || void 0 === ab ? void 0 : ab.baf2WaterCryo);
      return (0, jG.jsx)(WU.b, {
        close: Yb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, jG.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== ab && wb <= 0 ? (0, jG.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, jG.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, jG.jsx)(zO.d, {
                  itemName: lb ? Xh.g : Qb.j,
                  amount: 0
                })
              }), (0, jG.jsxs)("div", {
                children: [(0, jG.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Sb(lb ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), ab && (0, jG.jsx)("p", {
                  children: YL(Sb, ab)
                })]
              })]
            }), (0, jG.jsx)(CU.i, {
              onClick: Yb
            })]
          }), ab && ob && (0, jG.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, jG.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, jG.jsx)(UL, {
                stored: Hb,
                cap: wb,
                netPerS: pb,
                cryo: lb,
                rates: OL(Sb, lb, Zb, Xb)
              })
            }), (0, jG.jsx)("div", {
              className: dO()("Baf2WaterThis", {
                Bad: ob.bad
              }),
              children: ob.text
            }), ab.baf2WaterDriven && (0, jG.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, jG.jsx)(xO.e, {
                name: "bolt"
              }), Sb(lb ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), Ab && (0, jG.jsx)("p", {
              className: "Baf2WaterNext",
              children: Ab
            }), (0, jG.jsx)(ZL, {
              message: ab
            })]
          })]
        })
      })
    }
    class pL {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(bb, ub) {
        const hb = this.get(bb);
        hb && null === ub.opLeftMs && null === ub.fuelLeftMs && ub.status === hb.status ? ub = {
          ...ub,
          opLeftMs: hb.opLeftMs,
          fuelLeftMs: hb.fuelLeftMs,
          burning: hb.burning
        } : this.updates++, this.pos = bb, this.view = ub;
        for (const Bb of this.listeners) Bb()
      }
      get(bb) {
        return null !== this.pos && this.pos[0] === bb[0] && this.pos[1] === bb[1] && this.pos[2] === bb[2] ? this.view : null
      }
      forget(bb) {
        null !== this.get(bb) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
    }

    function oL(bb, ub, hb, Bb) {
      return "noFuel" === ub && Bb && !Oh(Ju[bb]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === ub && !0 === (null === hb || void 0 === hb ? void 0 : hb.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === ub && !0 === (null === hb || void 0 === hb ? void 0 : hb.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === ub && !0 === (null === hb || void 0 === hb ? void 0 : hb.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === ub && !0 === (null === hb || void 0 === hb ? void 0 : hb.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : AL(ub, hb) ? "buildAFactory2Game:machineStatus_noInputShort" : function(bb, ub) {
        const hb = Ju[bb];
        if ("noFuel" === ub && void 0 !== hb.fuels) return Oh(hb) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (hb.mobFarm && ("noInput" === ub || "badInput" === ub)) return `buildAFactory2Game:machineStatus_${ub}MobFarm`;
        if ("outputFull" === ub && (void 0 !== hb.table || hb.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === ub && Fu(hb)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== hb.cryoMade && ("noInput" === ub || "noOutlet" === ub || "fluidFull" === ub)) return `buildAFactory2Game:machineStatus_${ub}Mixer`;
        return `buildAFactory2Game:machineStatus_${ub}`
      }(bb, ub)
    }

    function AL(bb, ub) {
      return "noInput" === bb && null !== ub && void 0 !== ub && ub.input && ub.inputShort ? {
        input: ub.input,
        short: ub.inputShort
      } : null
    }

    function lL(bb) {
      return rO(bb) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== bb.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function KL(bb) {
      const ub = (0, Jb.oe)(bb);
      return `Baf2Pane Baf2Pane${ub.charAt(0).toUpperCase()}${ub.slice(1)}`
    }

    function WL(bb, ub) {
      const [hb, Ob] = (0, Bb.useState)((() => bb.get(ub)));
      return (0, Bb.useEffect)((() => {
        Ob(bb.get(ub));
        const hb = bb.subscribe((() => {
          Ob(bb.get(ub))
        }));
        return () => {
          hb(), bb.forget(ub)
        }
      }), [bb, ...ub]), hb
    }

    function CL(bb, ub, hb, Bb) {
      const Ob = Ju[bb],
        Gb = ub && Ob.couplable ? qu(Ob, hb) : Ob,
        Ub = null !== Bb && uh(Gb) ? function(bb, ub) {
          var hb;
          return null !== (hb = null !== ub && uh(bb) ? Lh[ub] : void 0) && void 0 !== hb ? hb : bb.opMs
        }(Gb, Yh(Bb)) : Gb.opMs;
      return Ub === Gb.opMs ? Gb : {
        ...Gb,
        opMs: Ub
      }
    }

    function dL(bb) {
      let {
        running: ub,
        opMs: hb,
        opLeftMs: Bb,
        updateCount: Ob
      } = bb;
      return (0, jG.jsx)("div", {
        className: dO()("Baf2MachineProgress", {
          Running: ub
        }),
        children: (0, jG.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: hb / 1e3 + "s",
            animationDelay: null === Bb ? void 0 : (Bb - hb) / 1e3 + "s"
          }
        }, Ob)
      })
    }

    function rL(bb) {
      let {
        running: ub,
        leftMs: hb,
        periodMs: Bb,
        updateCount: Ob
      } = bb;
      const {
        t: Gb
      } = (0, DO.K)(), Ub = Math.min(Math.max(null !== hb && void 0 !== hb ? hb : 0, 0), Bb), Lb = ub && Ub > 0, Yb = Gb("buildAFactory2Game:machineBarFuel");
      return (0, jG.jsx)("div", {
        className: dO()("Baf2FuelBurn", {
          Draining: Lb
        }),
        role: "img",
        title: Yb,
        "aria-label": Yb,
        children: (0, jG.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: Lb ? {
            animationDuration: Bb / 1e3 + "s",
            animationDelay: (Ub - Bb) / 1e3 + "s"
          } : {
            transform: `scaleY(${Ub/Bb})`
          }
        }, Ob)
      })
    }

    function jL(bb, ub, hb) {
      let [Bb, Ob] = hb;
      const Gb = 1 !== Bb ? nO(ub) : null;
      return {
        amount: Bb,
        have: Ob,
        item: bb(Gb || hG(ub))
      }
    }

    function nL(bb) {
      return uh(bb) ? "buildAFactory2Game:machineBarMining" : hh(bb) ? "buildAFactory2Game:machineBarCutting" : void 0 !== bb.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function DL(bb) {
      var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb;
      let {
        kind: Wb,
        Fb: Cb,
        store: db,
        power: rb,
        renderSlot: jb
      } = bb;
      const {
        t: nb
      } = (0, DO.K)(), Db = WL(db, Cb), xb = Ju[Wb], zb = null !== (ub = null === Db || void 0 === Db ? void 0 : Db.coupled) && void 0 !== ub && ub, gb = null !== (hb = null === Db || void 0 === Db ? void 0 : Db.couplerLevel) && void 0 !== hb ? hb : 1, ib = CL(Wb, zb, gb, null !== (Bb = null === Db || void 0 === Db || null === (Ob = Db.dug) || void 0 === Ob ? void 0 : Ob.item) && void 0 !== Bb ? Bb : null), vb = null !== (Gb = null === Db || void 0 === Db ? void 0 : Db.status) && void 0 !== Gb ? Gb : null, tb = null !== (Ub = null === Db || void 0 === Db ? void 0 : Db.power) && void 0 !== Ub ? Ub : null, Jb = null !== (Lb = null === Db || void 0 === Db ? void 0 : Db.opLeftMs) && void 0 !== Lb ? Lb : null, eb = null !== (Yb = null === Db || void 0 === Db ? void 0 : Db.dug) && void 0 !== Yb ? Yb : null, Nb = null !== eb && uh(xb) ? Lh[null !== (Sb = Yh(eb.item)) && void 0 !== Sb ? Sb : ""] : void 0, sb = void 0 === Nb ? null : 6e4 / Nb, Mb = null !== (ab = null === Db || void 0 === Db ? void 0 : Db.powerCap) && void 0 !== ab ? ab : 4e3, mb = null !== (Hb = null === Db || void 0 === Db ? void 0 : Db.tier) && void 0 !== Hb ? Hb : null, Ib = void 0 !== ib.powerMade, Pb = null !== xb.fuelSlot ? jb(xb.fuelSlot) : null, qb = Pu(xb), Eb = !zb && !0 === (null === Db || void 0 === Db ? void 0 : Db.fuelFed), Vb = !zb && !0 === (null === Db || void 0 === Db ? void 0 : Db.fuelFeeds), Fb = null !== xb.fuelSlot && !zb, fb = null !== (wb = null === Db || void 0 === Db ? void 0 : Db.fuelLeftMs) && void 0 !== wb ? wb : null, kb = function(bb, ub, hb) {
        var Bb;
        const Ob = null === ub ? void 0 : Gh[ub];
        return Math.max(null !== (Bb = null !== Ob && void 0 !== Ob ? Ob : hb) && void 0 !== Bb ? Bb : 0, bb.opMs)
      }(ib, null !== (Zb = null === Db || void 0 === Db ? void 0 : Db.burning) && void 0 !== Zb ? Zb : null, fb), Tb = null !== (Xb = null === Db || void 0 === Db ? void 0 : Db.fuelKeep) && void 0 !== Xb ? Xb : null, cb = null === vb ? null : oL(Wb, vb, Db, Eb), Qb = null === vb ? null : AL(vb, Db);
      return (0, jG.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, jG.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, jG.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: nb(hG(Wb))
          }), eb && (0, jG.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [nb("Tree Cutter" === Wb ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, jG.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, jG.jsx)(zO.d, {
                itemName: eb.item,
                amount: 0
              })
            }), (0, jG.jsx)(gO.c, {
              text: eb.name
            })]
          }), null !== sb && (0, jG.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: nb("buildAFactory2Game:machineDigsFixed", {
              perMin: String(sb)
            })
          }), (null === Db || void 0 === Db ? void 0 : Db.field) && (0, jG.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, jG.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, jG.jsx)(zO.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), nb("buildAFactory2Game:machineField", {
              planted: String(Db.field[0]),
              ripe: String(Db.field[1])
            })]
          }), (0, jG.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, jG.jsxs)("div", {
              className: dO()("Baf2MachineColumn", {
                Baf2Burns: Fb
              }),
              children: [null !== ib.inputSlot && (0, jG.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, jG.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: nb(lL(ib))
                }), jb(ib.inputSlot)]
              }), null !== xb.fuelSlot && !zb && (0, jG.jsxs)("div", {
                className: dO()("Baf2MachineSlot", {
                  Baf2FuelFed: Eb
                }),
                children: [(0, jG.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [Eb && (0, jG.jsx)(xO.e, {
                    name: "fire"
                  }), nb("buildAFactory2Game:machineFuel")]
                }), (0, jG.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, jG.jsx)(rL, {
                    running: "running" === vb,
                    leftMs: fb,
                    periodMs: kb,
                    updateCount: db.updateCount
                  }), Pb]
                })]
              }), null !== xb.fuelSlot && zb && (0, jG.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, jG.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: nb("buildAFactory2Game:machineFuel")
                }), (0, jG.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: nb("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": nb("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, jG.jsx)(xO.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, jG.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, jG.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: nb(nL(ib))
              }), (0, jG.jsx)(dL, {
                running: "running" === vb,
                opMs: ib.opMs,
                opLeftMs: Jb,
                updateCount: db.updateCount
              })]
            }), ib.outputSlots.length > 0 && (0, jG.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, jG.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: nb("buildAFactory2Game:machineOutput")
              }), (0, jG.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: ib.outputSlots.map((bb => (0, jG.jsx)("div", {
                  children: jb(bb)
                }, bb)))
              })]
            }), null !== tb && Ib && (0, jG.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, jG.jsx)("div", {
                style: {
                  height: 100 * tb / Mb + "%"
                }
              })
            })]
          }), Fb && null !== Tb && (0, jG.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, jG.jsx)(xO.e, {
              name: "arrows-rotate"
            }), nb(hh(ib) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Tb)
            })]
          }), (Eb || Vb) && (0, jG.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, jG.jsx)(xO.e, {
              name: "fire"
            }), nb(Eb ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), xb.couplable && (0, jG.jsx)(TU, {
            kind: Wb,
            tier: mb,
            coupled: zb,
            level: gb,
            slot: qb === xb.fuelSlot ? Pb : null !== qb ? jb(qb) : null
          }), null !== tb && !Ib && !0 === (null === Db || void 0 === Db ? void 0 : Db.reactorPowered) && (0, jG.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: nb("buildAFactory2Game:machineReactorPowered")
          }), null !== tb && !Ib && !0 !== (null === Db || void 0 === Db ? void 0 : Db.reactorPowered) && (0, jG.jsx)(zU, {
            stored: tb,
            cap: Mb,
            rates: null !== (pb = null === Db || void 0 === Db ? void 0 : Db.powerRates) && void 0 !== pb ? pb : null
          }), (null === Db || void 0 === Db ? void 0 : Db.water) && (0, jG.jsx)(LL, {
            water: Db.water,
            at: Cb,
            side: Db.cryo ? "waterIn" : null
          }), (null === Db || void 0 === Db ? void 0 : Db.cryo) && (0, jG.jsx)(LL, {
            water: Db.cryo,
            at: Cb,
            side: "cryoOut"
          }), null !== Db && void 0 !== Db && Db.inertCoupler ? (0, jG.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: nb("buildAFactory2Game:machineStatus_couplerOff", {
              item: BG(nb, Db.inertCoupler)
            })
          }) : null !== cb && (0, jG.jsx)("div", {
            className: dO()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== vb
            }),
            children: nb(cb, Qb ? jL(nb, Qb.input, Qb.short) : void 0)
          })]
        }), (0, jG.jsxs)("div", {
          className: dO()("Baf2MachineSide", {
            Baf2SynthSide: Fu(xb)
          }),
          children: [Fu(xb) && (0, jG.jsx)(fU, {
            Fb: Cb,
            taught: null !== (ob = null === Db || void 0 === Db ? void 0 : Db.taught) && void 0 !== ob ? ob : null
          }, Cb.join(",")), Ib && (0, jG.jsx)(iU, {
            kind: Wb,
            def: ib,
            Fb: Cb,
            power: rb,
            stored: null !== tb && void 0 !== tb ? tb : 0,
            cap: Mb
          }), yb(xb) && (0, jG.jsx)(yU, {
            Fb: Cb,
            input: null !== (Ab = null === Db || void 0 === Db ? void 0 : Db.input) && void 0 !== Ab ? Ab : null,
            drops: null !== (lb = null === Db || void 0 === Db ? void 0 : Db.farm) && void 0 !== lb ? lb : null,
            seconds: String(ib.opMs / 1e3)
          }), !Ib && !yb(xb) && !Fu(xb) && (0, jG.jsx)(hU, {
            kind: Wb,
            def: ib,
            input: null !== (Kb = null === Db || void 0 === Db ? void 0 : Db.input) && void 0 !== Kb ? Kb : null,
            tier: null !== mb && void 0 !== mb ? mb : 1,
            noSeeds: !0 === (null === Db || void 0 === Db ? void 0 : Db.noSeeds)
          })]
        })]
      })
    }

    function xL(bb, ub, hb, Bb) {
      var Ob;
      const Gb = Ju[bb],
        Ub = [Gb.inputSlot, Gb.fuelSlot, ...null !== (Ob = Gb.inputSlots) && void 0 !== Ob ? Ob : []].filter((bb => null !== bb));
      return {
        render: Ob => {
          let {
            Fb: Gb,
            renderSlot: Ub
          } = Ob;
          return (0, jG.jsx)(mU.Provider, {
            value: Bb,
            children: (0, jG.jsx)(DL, {
              kind: bb,
              Fb: Gb,
              store: ub,
              power: hb,
              renderSlot: Ub
            })
          })
        },
        quickMoveRange: Ub.length > 0 ? [Math.min(...Ub), Math.max(...Ub) + 1] : [0, 0],
        className: KL(bb)
      }
    }
    const zL = "Assembler";

    function gL(bb) {
      var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb;
      let {
        Fb: ab,
        store: Hb,
        renderSlot: wb
      } = bb;
      const {
        t: Zb
      } = (0, DO.K)(), Xb = WL(Hb, ab), pb = null !== (ub = null === Xb || void 0 === Xb ? void 0 : Xb.tier) && void 0 !== ub ? ub : 1, ob = null !== (hb = null === Xb || void 0 === Xb ? void 0 : Xb.taught) && void 0 !== hb ? hb : null, Ab = cu(zL, {
        coupled: !1,
        taught: ob
      }), lb = null !== (Bb = Ab.bench) && void 0 !== Bb ? Bb : null, Kb = null !== (Ob = null === Xb || void 0 === Xb ? void 0 : Xb.status) && void 0 !== Ob ? Ob : null, Wb = null !== (Gb = null === Xb || void 0 === Xb ? void 0 : Xb.power) && void 0 !== Gb ? Gb : null, Cb = null !== (Ub = null === Xb || void 0 === Xb ? void 0 : Xb.powerCap) && void 0 !== Ub ? Ub : 4e3;
      return (0, jG.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, jG.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, jG.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Zb(hG(zL))
          }), lb && (0, jG.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Zb("buildAFactory2Game:benchMakes"), (0, jG.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, jG.jsx)(zO.d, {
                itemName: lb.output,
                amount: 0
              })
            }), (null === Xb || void 0 === Xb ? void 0 : Xb.taughtName) && (0, jG.jsx)(gO.c, {
              text: Xb.taughtName
            }), lb.outputAmount > 1 && (0, jG.jsxs)("span", {
              children: ["\xd7", lb.outputAmount]
            })]
          }), !lb && (0, jG.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Zb("buildAFactory2Game:benchTeachHint")
          }), (0, jG.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, jG.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (Lb = Ab.inputSlots) && void 0 !== Lb ? Lb : []).map(((bb, ub) => {
                const hb = null === lb || void 0 === lb ? void 0 : lb.inputs[ub];
                return (0, jG.jsxs)("div", {
                  className: dO()("Baf2BenchInput", {
                    Spare: !hb
                  }),
                  children: [(0, jG.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [wb(bb), hb && (0, jG.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, jG.jsx)(zO.d, {
                        itemName: hb.item,
                        amount: 0
                      })
                    })]
                  }), (0, jG.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: hb ? `\xd7${hb.amount}` : "\xa0"
                  })]
                }, bb)
              }))
            }), (0, jG.jsx)(dL, {
              running: "running" === Kb,
              opMs: Ab.opMs,
              opLeftMs: null !== (Yb = null === Xb || void 0 === Xb ? void 0 : Xb.opLeftMs) && void 0 !== Yb ? Yb : null,
              updateCount: Hb.updateCount
            }), (0, jG.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, jG.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Zb("buildAFactory2Game:machineOutput")
              }), (0, jG.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Ab.outputSlots.map((bb => (0, jG.jsx)("div", {
                  children: wb(bb)
                }, bb)))
              })]
            })]
          }), null !== Wb && (0, jG.jsx)(zU, {
            stored: Wb,
            cap: Cb,
            rates: null !== (Sb = null === Xb || void 0 === Xb ? void 0 : Xb.powerRates) && void 0 !== Sb ? Sb : null
          }), null !== Kb && (0, jG.jsx)("div", {
            className: dO()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Kb
            }),
            children: Zb(oL(zL, Kb, Xb, !1))
          }), lb && lb.inputs.length > 1 && (0, jG.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Zb("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, jG.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, jG.jsx)(OU, {
            taught: ob,
            tier: pb
          }), lb && (0, jG.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Zb("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function iL(bb) {
      var ub;
      const hb = null !== (ub = Ju[zL].inputSlots) && void 0 !== ub ? ub : [];
      return {
        render: ub => {
          let {
            Fb: hb,
            renderSlot: Bb
          } = ub;
          return (0, jG.jsx)(gL, {
            Fb: hb,
            store: bb,
            renderSlot: Bb
          })
        },
        quickMoveRange: [Math.min(...hb), Math.max(...hb) + 1],
        className: KL(zL)
      }
    }
    var vL = hb(86),
      tL = hb(1029),
      JL = hb(4013);
    const eL = 600,
      NL = .5,
      sL = 4,
      ML = 1200,
      mL = 140,
      IL = 100,
      PL = 32,
      qL = 16,
      EL = 100.5,
      yL = 90,
      VL = 1.5,
      FL = 50;

    function fL(bb) {
      switch (ih(bb)) {
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
    const kL = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function TL(bb) {
      const ub = Math.ceil(60 * bb / IL);
      return {
        fuel: Math.max(PL, ub),
        waste: Math.max(qL, ub)
      }
    }

    function cL(bb, ub, hb) {
      const [Bb, Ob, Gb] = [bb - 2, ub - 2, hb - 2];
      return 2 * (Bb * Ob + Ob * Gb + Gb * Bb) * mL
    }

    function QL(bb, ub, hb) {
      return Math.max(0, bb - 2) * Math.max(0, ub - 2) * Math.max(0, hb - 2)
    }

    function RL(bb, ub) {
      const [hb, Bb, Ob] = bb, Gb = hb * Bb * Ob, Ub = new Float32Array(Gb);
      let Lb = 0,
        Yb = 0,
        Sb = 0,
        ab = 0,
        Hb = 0;
      const wb = (bb, Gb, Ub) => bb < 0 || bb >= hb || Gb < 0 || Gb >= Bb || Ub < 0 || Ub >= Ob ? 0 : ub[(Gb * Ob + Ub) * hb + bb];
      for (let ob = 0; ob < Bb; ob++)
        for (let bb = 0; bb < Ob; bb++)
          for (let Bb = 0; Bb < hb; Bb++) {
            const Gb = (ob * Ob + bb) * hb + Bb,
              Zb = ub[Gb];
            if (1 === Zb) {
              Lb++;
              let ub = 0;
              for (const [hb, Ob, Gb] of kL) {
                const Ub = wb(Bb + hb, ob + Ob, bb + Gb);
                1 !== Ub && 2 !== Ub || ub++
              }
              Ub[Gb] = eL * (1 + NL * Math.min(ub, sL)), ab += Ub[Gb]
            } else if (2 === Zb) Yb++;
            else if (3 === Zb) {
              Sb++;
              kL.some((ub => {
                let [hb, Ob, Gb] = ub;
                return 1 === wb(Bb + hb, ob + Ob, bb + Gb)
              })) && (Hb += ML)
            }
          }
      const Zb = cL(hb + 2, Bb + 2, Ob + 2),
        Xb = Math.min(ab, Hb, Zb),
        pb = Lb > 0 ? ab * IL / Lb : 0;
      return {
        rods: Lb,
        graphite: Yb,
        channels: Sb,
        fuelHeat: ab,
        cooling: Hb,
        size: Zb,
        max: Xb,
        vol: Gb,
        powerPerUnit: pb,
        pelletsPerMin: pb > 0 ? Xb / pb * 60 : 0,
        waterPerS: Xb * Qb.m,
        rodHeat: Ub
      }
    }
    const bY = 0,
      uY = 1,
      hY = 6,
      BY = 7,
      OY = 8;

    function GY(bb, ub) {
      const [hb, Bb, Ob] = bb, Gb = new Uint8Array(hb * Bb * Ob), Ub = (bb, Gb, Ub) => bb < 0 || bb >= hb || Gb < 0 || Gb >= Bb || Ub < 0 || Ub >= Ob ? 0 : ub[(Gb * Ob + Ub) * hb + bb];
      for (let Lb = 0; Lb < Bb; Lb++)
        for (let bb = 0; bb < Ob; bb++)
          for (let Bb = 0; Bb < hb; Bb++) {
            const Yb = (Lb * Ob + bb) * hb + Bb,
              Sb = ub[Yb];
            if (1 === Sb) {
              let ub = 0;
              for (const [hb, Ob, Gb] of kL) {
                const Yb = Ub(Bb + hb, Lb + Ob, bb + Gb);
                ub += 1 === Yb || 2 === Yb ? 1 : 0
              }
              Gb[Yb] = uY + Math.min(ub, sL)
            } else if (3 === Sb) {
              const ub = kL.some((ub => {
                let [hb, Ob, Gb] = ub;
                return 1 === Ub(Bb + hb, Lb + Ob, bb + Gb)
              }));
              Gb[Yb] = ub ? hY : BY
            } else 2 === Sb && (Gb[Yb] = OY)
          }
      return Gb
    }

    function UY(bb) {
      return bb.fuelHeat <= bb.cooling && bb.fuelHeat <= bb.size ? "fuel" : bb.cooling <= bb.size ? "cooling" : "size"
    }
    const LY = yL;

    function YY(bb, ub, hb) {
      return Math.round(bb * ub * hb * 25e3 * (1 + .25 * (Math.min(bb, ub, hb) - 2)))
    }

    function SY(bb) {
      return Math.max(0, Math.min(Qb.f, bb))
    }

    function aY(bb, ub, hb) {
      const Bb = ub * SY(hb);
      return bb <= 0 ? 0 : Bb > 0 ? Math.min(200, 100 * bb / Bb) : 200
    }

    function HY(bb, ub) {
      const hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? VL : 1;
      return Math.min(bb.fuelHeat * hb, bb.cooling * SY(ub), bb.size * hb)
    }

    function wY(bb) {
      return 2 + bb / 10
    }
    const ZY = "buildAFactory2Game:";

    function XY(bb) {
      var ub;
      return null !== (ub = bb.baf2RxMood) && void 0 !== ub ? ub : function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const hb = [
          ["calm", 50],
          ["warm", LY],
          ["hot", EL]
        ];
        for (const [Bb, Ob] of hb)
          if (bb < Ob + (Bb === ub ? 3 : 0)) return Bb;
        return "alarm"
      }(bb.baf2RxHeat)
    }
    const pY = 120;

    function oY(bb) {
      const ub = bb.baf2RxState;
      if ("running" === ub && bb.baf2RxHeat > EL) return {
        label: `${ZY}rxState_tooHot`,
        tone: "bad",
        fix: `${ZY}rxFix_tooHot`
      };
      switch (ub) {
        case "running":
          return {
            label: `${ZY}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${ZY}rxState_idle`, tone: "off", fix: `${ZY}rxFix_idle`
          };
        case "scram":
          return {
            label: `${ZY}rxState_scram`, tone: "off", fix: bb.baf2RxHeat < FL ? `${ZY}rxFix_scramCool` : `${ZY}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${ZY}rxState_${ub}`, tone: "off", fix: `${ZY}rxFix_${ub}`
          };
        case "melted":
          return {
            label: `${ZY}rxState_melted`, tone: "bad", fix: `${ZY}rxFix_melted`
          };
        default:
          return {
            label: `${ZY}rxState_${ub}`, tone: "warn", fix: `${ZY}rxFix_${ub}`
          }
      }
    }

    function AY(bb) {
      const [ub, hb, Bb] = bb.baf2RxStats;
      return {
        fuelHeat: ub,
        cooling: hb * (bb.baf2RxCryo ? Math.max(1, SY(bb.baf2RxWater / 100)) : 1),
        size: Bb
      }
    }

    function lY(bb) {
      var ub;
      const hb = "idle" === bb.baf2RxState || "running" === bb.baf2RxState && bb.baf2RxHeat <= EL || "scram" === bb.baf2RxState && bb.baf2RxHeat < FL;
      if (0 === (bb.baf2RxFlags & Wu) || !bb.baf2RxFormed || !hb) return null;
      const {
        fuelHeat: Bb,
        cooling: Ob,
        size: Gb
      } = AY(bb), Ub = Math.min(Bb, Ob, Gb), Lb = UY({
        fuelHeat: Bb,
        cooling: Ob,
        size: Gb
      }), Yb = "cooling" === Lb && !0 === bb.baf2RxCryoOpen && !bb.baf2RxCryo, Sb = null !== (ub = bb.baf2RxCells) && void 0 !== ub ? ub : "", ab = ("fuel" === Lb || "cooling" === Lb && !0 === bb.baf2RxCryo) && Sb.length > 0 && !Sb.includes(String(0)), Hb = Yb ? "Cryo" : "scram" === bb.baf2RxState ? "Off" : "";
      return Ub < 12e3 ? {
        key: `${ZY}rxGrow_${ab?"full":Lb}${Hb}`,
        amount: Ub
      } : null
    }

    function KY(bb, ub) {
      return bb[0] === ub[0] && bb[1] === ub[1] && bb[2] === ub[2]
    }

    function WY(bb) {
      return [...bb].sort(((bb, ub) => Number(ub[2] < ub[1]) - Number(bb[2] < bb[1])))
    }

    function CY(bb, ub) {
      return ub.some((ub => {
        let [hb, Bb] = ub;
        return !(Bb <= 0) && ["edge", "cap", "wall", "inside"].some((ub => hb === GB(bb, ub)))
      }))
    }

    function dY(bb, ub, hb) {
      const Bb = bb.baf2RxFuel - bb.baf2RxPu > 0 ? hb : 0;
      return {
        full: bb.baf2RxWaste > ub - 3,
        fullInS: Bb > 0 ? Math.max(0, ub - bb.baf2RxWaste) / Bb : null
      }
    }
    const rY = {
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

    function jY(bb) {
      return nY[bb]
    }
    const nY = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function DY(bb) {
      let [ub, hb, Bb] = bb;
      return Math.ceil(cL(ub, hb, Bb) * Qb.m)
    }

    function xY(bb, ub) {
      return "battery" === bb ? ub[0] * ub[1] * ub[2] : function(bb) {
        let [ub, hb, Bb] = bb;
        return ub * hb * Bb - Math.max(0, ub - 2) * Math.max(0, hb - 2) * Math.max(0, Bb - 2)
      }(ub) - 1
    }

    function zY(bb) {
      const ub = Math.max(0, bb);
      if (ub < 10) return String(Math.round(10 * ub) / 10);
      if (ub < 1e4) return Math.round(ub).toLocaleString("en-US");
      if (ub < 1e6) return `${ub<1e5?(Math.floor(ub/100)/10).toFixed(1):Math.floor(ub/1e3)}k`;
      const hb = ub / 1e6;
      return `${hb<10?(Math.floor(100*hb)/100).toFixed(2):hb<100?(Math.floor(10*hb)/10).toFixed(1):Math.floor(hb)}M`
    }

    function gY(bb) {
      return bb <= 0 ? "0" : bb >= 10 ? String(Math.round(bb)) : bb.toFixed(bb >= 1 ? 1 : 2)
    }

    function iY(bb) {
      const ub = Qh(bb, 0),
        hb = Qh(bb, fh(bb) - 1);
      return {
        lo: [Math.min(ub[0], hb[0]), Math.min(ub[1], hb[1]), Math.min(ub[2], hb[2])],
        hi: [Math.max(ub[0], hb[0]) + 1, Math.max(ub[1], hb[1]) + 1, Math.max(ub[2], hb[2]) + 1]
      }
    }

    function vY(bb, ub, hb) {
      const Bb = [ub[0] - bb[0], ub[1] - bb[1], ub[2] - bb[2]],
        Ob = [(bb[0] + ub[0]) / 2, (bb[1] + ub[1]) / 2, (bb[2] + ub[2]) / 2],
        Gb = [];
      for (let Ub = 0; Ub < 3; Ub++) {
        const Lb = (Ub + 1) % 3,
          Yb = (Ub + 2) % 3;
        for (const Sb of [bb[Lb], ub[Lb]])
          for (const ab of [bb[Yb], ub[Yb]]) {
            const bb = [0, 0, 0],
              ub = [hb, hb, hb];
            bb[Ub] = Ob[Ub], ub[Ub] = Bb[Ub] + hb, bb[Lb] = Sb, bb[Yb] = ab, Gb.push([bb, ub])
          }
      }
      return Gb
    }
    const tY = "buildAFactory2Game:",
      JY = [`${tY}colNorth`, `${tY}colEast`, `${tY}colSouth`, `${tY}colWest`];

    function eY(bb, ub) {
      const [hb, Bb, Ob] = bb.baf2ColAt;
      return `baf2col ${hb} ${Bb} ${Ob} ${ub}`
    }

    function NY(bb) {
      return function(bb) {
        if (!Number.isFinite(bb)) return "";
        const ub = Math.max(1, Math.round(bb));
        if (ub < 60) return `${ub}s`;
        const hb = ub % 60;
        return 0 === hb ? ub / 60 + "m" : `${Math.floor(ub/60)}m ${hb}s`
      }(function(bb) {
        const ub = UB.FOCUS_BY_LASERS[Math.max(0, Math.min(4, bb))];
        return ub > 0 ? UB.NOVA_FOCUS / ub : 1 / 0
      }(bb))
    }

    function sY(bb) {
      const ub = Math.abs(Math.round(bb));
      return ub < 1e3 ? Math.round(bb).toLocaleString("en-US") : ub < 1e6 ? `${ub<1e5?(bb/1e3).toFixed(1).replace(/\.0$/,""):Math.round(bb/1e3)}k` : `${(bb/1e6).toFixed(ub<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function MY(bb, ub, hb) {
      if (wB(ub) >= 0) {
        const ub = function(bb, ub) {
          return bb.find((bb => {
            let {
              focus: hb
            } = bb;
            return hb[0] === ub[0] && hb[2] === ub[2] && (ub[1] === hb[1] || ub[1] === hb[1] - 1)
          }))
        }(bb, hb);
        if (!ub) return null;
        const Ob = function(bb) {
          let ub = 0,
            hb = 0;
          for (let Bb = 0; Bb < 4; Bb++) ub += bb.laser[Bb] ? 1 : 0, hb += bb.live[Bb] ? 1 : 0;
          return {
            lasers: ub,
            live: hb,
            focusPerS: UB.FOCUS_BY_LASERS[hb],
            drawPerS: UB.LASER_DRAW * hb
          }
        }({
          laser: ub.lasers,
          live: ub.live
        });
        if (0 === Ob.lasers || "noLasers" === ub.state) return {
          key: `${tY}lookColNoLasers`
        };
        if (0 === Ob.live) return {
          key: `${tY}lookColOff_blocked`
        };
        if (!(ub.on && Ob.live > 0) && ("running" !== (Bb = ub.state) && "slowed" !== Bb)) return {
          key: `${tY}lookColOff_${ub.state}`
        };
        if (Ob.live < Ob.lasers) return {
          key: `${tY}lookColLasersSome`,
          params: {
            lasers: String(Ob.lasers),
            live: String(Ob.live)
          }
        };
        const Gb = ub.open.filter(Boolean).length;
        return Gb < 4 ? {
          key: `${tY}lookColLasersSpots`,
          params: {
            live: String(Ob.live),
            spots: String(Gb),
            time: NY(Ob.live)
          }
        } : {
          key: `${tY}lookColLasers`,
          params: {
            live: String(Ob.live),
            time: NY(Ob.live)
          }
        }
      }
      var Bb;
      if (!ZB(ub)) return null;
      const Ob = function(bb, ub) {
        for (const hb of bb) {
          const bb = AB(hb.focus, [ub[0], ub[1], ub[2]]);
          if (bb && bb.GU === UB.LASER_D && hb.lasers[bb.dir]) return {
            entry: hb,
            dir: bb.dir
          }
        }
        return null
      }(bb, hb);
      if (!Ob) return {
        key: `${tY}lookLaserNoCollider`
      };
      const {
        entry: Gb,
        dir: Ub
      } = Ob;
      return Gb.open[Ub] ? Gb.live[Ub] ? {
        key: Gb.on ? `${tY}lookLaserFiring` : `${tY}lookLaserReady`
      } : {
        key: `${tY}lookLaserBlocked`
      } : {
        key: `${tY}lookLaserClosed`
      }
    }

    function mY(bb, ub) {
      const hb = [];
      for (let Bb = 1; Bb < UB.LASER_D; Bb++) bb & 1 << ub * (UB.LASER_D - 1) + Bb - 1 && hb.push(Bb);
      return hb
    }
    const IY = {
      firing: `${tY}colSlotFiring`,
      ready: `${tY}colSlotReady`,
      blocked: `${tY}colSlotBlocked`,
      empty: `${tY}colSlotEmpty`,
      closed: `${tY}colSlotClosed`
    };

    function PY(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Gb = GO(bb),
        Ub = GO(ub),
        Lb = GO(hb),
        Yb = Lb.filter(Boolean).length,
        Sb = Gb.filter(Boolean).length,
        ab = [0, 1, 2, 3].map((bb => Ub[bb] ? Gb[bb] ? Lb[bb] ? Bb ? "firing" : "ready" : "blocked" : (bb => mY(Ob, bb).length > 0)(bb) ? "blocked" : "empty" : "closed")),
        Hb = ab.indexOf("blocked"),
        wb = Hb < 0 && Sb > 0 ? ab.indexOf("empty") : -1;
      return ab.map(((bb, ub) => {
        const hb = ub === Hb ? {
          key: `${tY}colSlotClear`
        } : ub === wb ? {
          key: `${tY}colSlotAdd`,
          params: {
            time: NY(Math.min(4, Yb + 1))
          }
        } : null;
        return {
          dir: ub,
          tone: bb,
          title: {
            key: "blocked" !== bb || Gb[ub] ? IY[bb] : `${tY}colSlotGap`,
            keys: {
              dir: JY[ub]
            }
          },
          hint: hb
        }
      }))
    }

    function qY(bb) {
      var ub;
      return "noPower" === bb.baf2ColState && bb.baf2ColRxState ? oY({
        baf2RxState: bb.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (ub = bb.baf2ColRxHeat) && void 0 !== ub ? ub : 0
      }) : null
    }

    function EY(bb) {
      const ub = GO(bb.baf2ColSpots).filter(Boolean).length,
        hb = GO(bb.baf2ColLive);
      let Bb = 0,
        Ob = 0;
      return GO(bb.baf2ColLasers).forEach(((bb, ub) => {
        bb && (Bb++, Ob += hb[ub] ? 0 : 1)
      })), Ob > 0 ? {
        key: `${tY}colSubSome`,
        params: {
          blocked: String(Ob),
          lasers: String(Bb)
        }
      } : ub < 4 ? {
        key: `${tY}colSubSpots`,
        params: {
          lasers: String(Bb),
          spots: String(ub)
        }
      } : {
        key: `${tY}colSub`,
        params: {
          lasers: String(Bb)
        }
      }
    }

    function yY(bb) {
      const ub = qY(bb);
      if ("idle" === bb.baf2ColRxState && ub) return {
        key: `${tY}colState_noPowerIdle`
      };
      if (ub) return {
        key: `${tY}colState_noPowerReactor`,
        keys: {
          state: ub.label
        }
      };
      if ("noInput" !== bb.baf2ColState) return {
        key: `${tY}colState_${bb.baf2ColState}`
      };
      const hb = String(Math.max(0, UB.NOVA_SA - bb.baf2ColSa)),
        Bb = String(Math.max(0, UB.NOVA_GD - bb.baf2ColGd));
      return "0" !== hb && "0" !== Bb ? {
        key: `${tY}colState_noInput`,
        params: {
          sa: hb,
          gd: Bb
        }
      } : "0" !== hb ? {
        key: `${tY}colState_noStarAlloy`,
        params: {
          sa: hb
        }
      } : "0" !== Bb ? {
        key: `${tY}colState_noGlowDust`,
        params: {
          gd: Bb
        }
      } : {
        key: `${tY}colState_running`
      }
    }

    function VY(bb) {
      return bb.baf2ColP < 0 ? `${tY}colNext` : function(bb) {
        const ub = bb.baf2ColState;
        return bb.baf2ColP >= 0 && ("blocked" === ub || "noLasers" === ub || "noPower" === ub)
      }(bb) ? `${tY}colStalled` : null === FY(bb) ? `${tY}colMaking` : `${tY}colNovaIn`
    }

    function FY(bb) {
      if (bb.baf2ColP < 0 || bb.baf2ColWant <= 0) return null;
      const ub = bb.baf2ColFocusPerS * Math.min(1, bb.baf2ColDraw / bb.baf2ColWant);
      return ub > 0 ? Math.max(0, UB.NOVA_FOCUS - bb.baf2ColP) / ub : null
    }

    function fY(bb, ub) {
      const hb = [];
      for (let Bb = 1; Bb <= 3; Bb++) {
        const Ob = [bb[0], bb[1] - Bb, bb[2]];
        if (!ub(Ob)) return hb;
        hb.push(Ob)
      }
      return []
    }

    function kY(bb, ub) {
      const hb = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Bb = 0; Bb < 4; Bb++) {
        const Ob = Bb,
          Gb = oB(bb.focus, Ob, UB.LASER_D);
        if (bb.lasers[Bb] || !bb.open[Bb] || !ub(Gb)) continue;
        const Ub = [];
        for (let hb = 1; hb < UB.LASER_D; hb++) {
          const Bb = oB(bb.focus, Ob, hb);
          ub(Bb) || Ub.push(Bb)
        }
        hb.supports.push(...fY(Gb, ub)), 0 === Ub.length ? hb.free.push(Gb) : (hb.blocked.push(Gb), hb.gaps.push(...Ub))
      }
      return hb
    }
    const TY = UB.LASER_D - .25,
      cY = 4,
      QY = 2,
      RY = 16;
    const bS = {
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
        blendMode: JL.f.Standard,
        soft: !0
      },
      uS = {
        green: bS,
        pink: {
          ...bS,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function hS(bb, ub) {
      const hb = {
        ...ub.params
      };
      for (const [Ob, Gb] of Object.entries(null !== (Bb = ub.keys) && void 0 !== Bb ? Bb : {})) {
        var Bb;
        hb[Ob] = bb(Gb)
      }
      return hb
    }
    const BS = "buildAFactory2Game:",
      OS = 2 * UB.LASER_D + 1,
      GS = UB.LASER_D;

    function US(bb) {
      return bb(`${BS}colFocusTip`, {
        need: sY(UB.NOVA_FOCUS)
      })
    }

    function LS(bb, ub) {
      return bb(ub.key, hS(bb, ub))
    }

    function YS(bb) {
      const ub = bb.getStatus();
      return {
        status: ub,
        entry: ub ? bb.entryAtRoot(ub.baf2ColAt) : void 0
      }
    }

    function SS(bb, ub) {
      return {
        left: 100 * (GS + bb) / OS + "%",
        top: 100 * (GS + ub) / OS + "%"
      }
    }

    function aS(bb) {
      let {
        status: ub,
        entry: hb
      } = bb;
      const Bb = GO(ub.baf2ColLasers),
        Ob = GO(ub.baf2ColSpots),
        Gb = GO(ub.baf2ColLive),
        Ub = !0 === (null === hb || void 0 === hb ? void 0 : hb.on),
        Lb = UB.LASER_D,
        Yb = [];
      for (let Zb = 0; Zb < 4; Zb++) {
        const [bb, , ub] = pB[Zb];
        if (Gb[Zb]) {
          const hb = 100 * (Lb - 1) / OS,
            Bb = bb + ub > 0 ? 100 * (GS + 1) / OS : 100 * (GS - (Lb - 1)) / OS,
            Ob = 100 * (GS + .35) / OS,
            Gb = 30 / OS,
            Sb = 0 !== bb ? {
              left: `${Bb}%`,
              width: `${hb}%`,
              top: `${Ob}%`,
              height: `${Gb}%`
            } : {
              top: `${Bb}%`,
              height: `${hb}%`,
              left: `${Ob}%`,
              width: `${Gb}%`
            };
          Yb.push((0, jG.jsx)("i", {
            className: dO()("Baf2ColDiagramBeam", {
              Off: !Ub
            }),
            style: Sb
          }, `beam${Zb}`))
        }
        const hb = Bb[Zb] ? "Baf2ColDiagramLaser" : Ob[Zb] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Yb.push((0, jG.jsx)("i", {
          className: hb,
          style: SS(bb * Lb, ub * Lb)
        }, `spot${Zb}`))
      }
      for (let Zb = 0; Zb < 4; Zb++) {
        if (Bb[Zb] || !Ob[Zb]) continue;
        const [bb, , hb] = pB[Zb];
        for (const Bb of mY(null !== (Sb = ub.baf2ColGaps) && void 0 !== Sb ? Sb : 0, Zb)) {
          var Sb;
          Yb.push((0, jG.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: SS(bb * Bb, hb * Bb)
          }, `gap${Zb},${Bb}`))
        }
      }
      for (const [Zb, , Xb] of null !== (ab = null === hb || void 0 === hb ? void 0 : hb.blockers) && void 0 !== ab ? ab : []) {
        var ab, Hb, wb;
        const bb = Zb - (null !== (Hb = null === hb || void 0 === hb ? void 0 : hb.focus[0]) && void 0 !== Hb ? Hb : 0),
          ub = Xb - (null !== (wb = null === hb || void 0 === hb ? void 0 : hb.focus[2]) && void 0 !== wb ? wb : 0);
        Yb.push((0, jG.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: SS(bb, ub)
        }, `block${bb},${ub}`))
      }
      return (0, jG.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Yb, (0, jG.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function HS(bb) {
      let {
        status: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)(), Bb = GO(ub.baf2ColLive).filter(Boolean).length;
      return (0, jG.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, jG.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: US(hb),
          children: hb(`${BS}colLadder`)
        }), (0, jG.jsx)("ul", {
          children: [1, 2, 3, 4].map((bb => (0, jG.jsx)("li", {
            className: dO()({
              On: bb === Bb
            }),
            children: hb(`${BS}colLadderChip`, {
              lasers: String(bb),
              time: NY(bb)
            })
          }, bb)))
        })]
      })
    }

    function wS(bb) {
      let {
        item: ub,
        MS: hb,
        need: Bb,
        cap: Ob
      } = bb;
      const {
        t: Gb
      } = (0, DO.K)(), Ub = Math.min(hb, Bb);
      return (0, jG.jsxs)("li", {
        className: dO()("Baf2ColTile", {
          Short: hb < Bb
        }),
        children: [(0, jG.jsx)(ZS, {
          item: ub
        }), (0, jG.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Gb(`${BS}colOutOf`, {
            amount: String(Ub),
            cap: String(Bb)
          })
        }), (0, jG.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, jG.jsx)("i", {
            style: {
              width: 100 * Ub / Bb + "%"
            }
          })
        }), hb > Bb && (0, jG.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Gb(`${BS}colIntakeHeld`, {
            amount: String(hb),
            cap: String(Ob)
          })
        })]
      })
    }

    function ZS(bb) {
      let {
        item: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)();
      return (0, jG.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, jG.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, jG.jsx)(zO.d, {
            itemName: ub,
            amount: 0
          })
        }), (0, jG.jsx)("span", {
          className: "Baf2ColTileName",
          children: BG(hb, ub)
        })]
      })
    }

    function XS(bb) {
      switch (bb.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function pS(bb) {
      var ub, hb, Ob;
      let {
        store: Gb,
        close: Ub
      } = bb;
      const {
        t: Lb
      } = (0, DO.K)(), Yb = IU(), {
        status: Sb,
        entry: ab
      } = function(bb) {
        const [ub, hb] = (0, Bb.useState)((() => YS(bb)));
        return (0, Bb.useEffect)((() => (hb(YS(bb)), bb.subscribe((() => {
          hb(YS(bb))
        })))), [bb]), ub
      }(Gb), [Hb, wb] = (0, Bb.useState)(null), Zb = null === Sb || void 0 === Sb ? void 0 : Sb.baf2ColHold;
      (0, Bb.useEffect)((() => {
        wb(null)
      }), [Zb]);
      const Xb = (0, Bb.useRef)({
          p: -1,
          n: 0
        }),
        pb = null !== (ub = null === Sb || void 0 === Sb ? void 0 : Sb.baf2ColP) && void 0 !== ub ? ub : -1;
      pb < Xb.current.p && Xb.current.n++, Xb.current.p = pb;
      const ob = (0, Bb.useRef)(null),
        [Ab] = (0, Bb.useState)((() => {
          return (bb = Gb.heldAtOpen()) === SB || bb === aB ? {
            key: `${tY}colBeltItIn`,
            item: bb
          } : null;
          var bb
        }));
      if (!Sb) return null;
      const lb = Sb.baf2ColMember,
        Kb = Sb.baf2ColP >= 0,
        Wb = function(bb, ub) {
          if (bb.baf2ColP >= 0 && bb.baf2ColDraw > 0) {
            const ub = bb.baf2ColWant > 0 ? Math.min(1, bb.baf2ColDraw / bb.baf2ColWant) : 0;
            return {
              focus: bb.baf2ColFocusPerS * ub,
              draw: bb.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === bb.baf2ColState && ub && ub.draw > 0 ? {
            ...ub,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Sb, ob.current);
      ob.current = Wb.draw > 0 ? Wb : null;
      const Cb = "slowed" === Sb.baf2ColState || "noPower" === Sb.baf2ColState,
        db = FY(Sb),
        rb = null !== Hb && void 0 !== Hb ? Hb : Sb.baf2ColHold,
        jb = function(bb) {
          var ub, hb;
          return "idle" === bb.baf2ColRxState ? null : null !== (ub = null === (hb = qY(bb)) || void 0 === hb ? void 0 : hb.fix) && void 0 !== ub ? ub : null
        }(Sb),
        nb = null === jb && null === Ab ? function(bb) {
          var ub;
          const hb = bb.baf2ColSentTo;
          if (!hb) return null;
          const Bb = null !== (ub = bb.baf2ColSentHeld) && void 0 !== ub ? ub : null;
          return {
            key: null === Bb ? `${tY}colNovaSentToMachine` : `${tY}colNovaSentTo`,
            target: hb,
            MS: Bb
          }
        }(Sb) : null,
        Db = Kb ? Lb(`${BS}colFocusOf`, {
          focus: sY(Sb.baf2ColP),
          need: sY(UB.NOVA_FOCUS)
        }) : null;
      return (0, jG.jsx)(WU.b, {
        close: Ub,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, jG.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, jG.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, jG.jsx)(zO.d, {
                  itemName: LB,
                  amount: 0
                })
              }), (0, jG.jsxs)("div", {
                children: [(0, jG.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: BG(Lb, LB)
                }), (0, jG.jsx)("p", {
                  children: LS(Lb, EY(Sb))
                })]
              })]
            }), (0, jG.jsx)(CU.i, {
              onClick: Ub
            })]
          }), (0, jG.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, jG.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, jG.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, jG.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: Lb(VY(Sb), {
                    time: null === db ? "" : WG(Lb, db)
                  })
                }), (0, jG.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, jG.jsx)("i", {
                    style: {
                      width: (Kb ? 100 * Sb.baf2ColP / UB.NOVA_FOCUS : 0) + "%"
                    }
                  }, Xb.current.n)
                }), (0, jG.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, jG.jsxs)("span", {
                    title: US(Lb),
                    children: [(0, jG.jsx)("b", {
                      children: sY(Wb.focus)
                    }), " ", Lb(`${BS}colFocusPerS`)]
                  }), (0, jG.jsxs)("span", {
                    className: dO()("Baf2ColDraw", {
                      Short: Cb
                    }),
                    children: [(0, jG.jsx)(xO.e, {
                      name: "bolt"
                    }), Cb ? Lb(`${BS}colDrawOf`, {
                      draw: sY(Sb.baf2ColDraw),
                      want: sY(Sb.baf2ColWant)
                    }) : Lb(`${BS}colPowerPerS`, {
                      rate: sY(Wb.draw)
                    })]
                  }), null !== Db && (0, jG.jsx)("span", {
                    className: "Soft",
                    children: Db
                  })]
                })]
              }), (0, jG.jsx)("p", {
                className: dO()("Baf2ColState", XS(Sb)),
                children: LS(Lb, yY(Sb))
              }), null !== jb && (0, jG.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Lb(jb)
              }), null === jb && null !== Ab && (0, jG.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Lb(Ab.key, {
                  item: BG(Lb, Ab.item)
                })
              }), nb && (0, jG.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Lb(nb.key, {
                  target: BG(Lb, nb.target),
                  amount: String(null !== (hb = nb.MS) && void 0 !== hb ? hb : 0)
                })
              }), (0, jG.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, jG.jsx)(wS, {
                  item: SB,
                  MS: Sb.baf2ColSa,
                  need: UB.NOVA_SA,
                  cap: UB.SA_CAP
                }), (0, jG.jsx)(wS, {
                  item: aB,
                  MS: Sb.baf2ColGd,
                  need: UB.NOVA_GD,
                  cap: UB.GD_CAP
                }), (0, jG.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, jG.jsx)(ZS, {
                    item: "Nova Matter"
                  }), (0, jG.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: Lb(`${BS}colNovaHeld`, {
                      amount: String(Sb.baf2ColOut),
                      cap: String(UB.OUT_CAP)
                    })
                  }), lb && (0, jG.jsx)(CU.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === Sb.baf2ColOut,
                    onClick: () => {
                      Yb.send(eY(Sb, "take"))
                    },
                    children: Lb(`${BS}colTake`)
                  })]
                })]
              }), lb && (0, jG.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": rb,
                className: dO()("Baf2ColHold", {
                  On: rb
                }),
                onClick: bb => {
                  bb.detail > 0 && bb.currentTarget.blur(), wb(!rb), Yb.send(eY(Sb, "hold " + (rb ? 0 : 1)))
                },
                children: [(0, jG.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, jG.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, jG.jsx)("b", {
                    children: Lb(`${BS}colHold`)
                  }), (0, jG.jsx)("span", {
                    children: Lb(`${BS}colHoldNote`)
                  })]
                })]
              })]
            }), (0, jG.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, jG.jsx)(aS, {
                status: Sb,
                entry: ab
              }), (0, jG.jsx)("ul", {
                className: "Baf2ColSlots",
                children: PY(Sb.baf2ColLasers, Sb.baf2ColSpots, Sb.baf2ColLive, Wb.beamsOn, null !== (Ob = Sb.baf2ColGaps) && void 0 !== Ob ? Ob : 0).map((bb => (0, jG.jsxs)("li", {
                  className: bb.tone,
                  children: [(0, jG.jsx)("b", {
                    children: LS(Lb, bb.title)
                  }), null !== bb.hint && (0, jG.jsx)("span", {
                    children: LS(Lb, bb.hint)
                  })]
                }, bb.dir)))
              }), (0, jG.jsx)(HS, {
                status: Sb
              })]
            })]
          })]
        })
      })
    }
    const oS = "buildAFactory2Game:",
      AS = 36e5,
      lS = 864e5;

    function KS(bb, ub, hb) {
      return Math.max(0, Math.ceil((bb + ub - Math.max(hb, bb)) / 1e3))
    }

    function WS(bb) {
      return bb.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function CS(bb) {
      return "Homestead" === bb
    }

    function dS(bb) {
      return function(bb) {
        let ub = 0;
        for (const hb of bb) {
          const bb = /^Island ([1-9]\d{0,5})$/.exec(hb);
          bb && (ub = Math.max(ub, Number(bb[1])))
        }
        return `Island ${ub+1}`
      }(bb.map((bb => bb.baf2IslandName)))
    }

    function rS(bb, ub) {
      return function(bb) {
        return `${oS}islandsBlocked${bb[0].toUpperCase()}${bb.slice(1)}`
      }("degraded" === bb && 0 === ub ? "stuck" : bb)
    }

    function jS(bb) {
      return bb.filter((bb => {
        var ub;
        return !bb.baf2IslandActive && void 0 === bb.baf2IslandUnreadable && void 0 === (null === (ub = bb.baf2IslandCoop) || void 0 === ub ? void 0 : ub.baf2CoopState)
      })).length
    }

    function nS(bb) {
      return "coopMoving" === bb || "coopUnreachable" === bb
    }

    function DS(bb, ub) {
      const hb = ub > 0;
      return {
        change: null === bb && !hb,
        switch: (null === bb || "degraded" === bb || nS(bb)) && !hb,
        rename: "loading" !== bb && "degraded" !== bb && "stuck" !== bb
      }
    }

    function xS(bb, ub) {
      return void 0 === bb || "corrupt" === bb && ub
    }
    const zS = tU;

    function gS(bb, ub, hb) {
      if (null !== bb && void 0 !== bb && bb.untilGone) {
        var Bb;
        return !("dismiss" === bb.untilGone && void 0 === (null === (Bb = ub.baf2IslandCoop) || void 0 === Bb ? void 0 : Bb.baf2CoopState)) && hb - bb.atMs < 32500
      }
      return void 0 !== bb && hb - bb.atMs < zS && ub.baf2IslandName === bb.from
    }
    const iS = tU;

    function vS(bb) {
      return "core" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.core : "islands" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.backToCore : void 0
    }

    function tS(bb) {
      return `\0${bb}\0`
    }

    function JS(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Bb = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Gb of Object.keys(hb)) Bb[Gb] = tS(Gb);
      let Ob = Object.keys(Bb).length > 0 ? bb(ub, Bb) : bb(ub);
      for (const [Gb, Ub] of Object.entries(hb)) Ob = Ob.split(tS(Gb)).join(Ub);
      return Ob
    }

    function eS(bb, ub) {
      return bb ? ub ? "enabled" : "disabled" : "hidden"
    }
    const NS = {
      removed: `${oS}islandsCoopRemoved`,
      deleted: `${oS}islandsCoopDeleted`,
      notReady: `${oS}islandsCoopNotReady`,
      gone: `${oS}islandsCoopGone`
    };

    function sS(bb) {
      var ub;
      return "member" !== (null === (ub = bb.baf2IslandCoop) || void 0 === ub ? void 0 : ub.baf2CoopRole) && "newer" !== bb.baf2IslandUnreadable
    }

    function MS(bb, ub, hb, Bb, Ob, Gb) {
      const Ub = bb.baf2IslandActive,
        Lb = bb.baf2IslandUnreadable,
        Yb = bb.baf2IslandCoop,
        Sb = function(bb, ub, hb) {
          return {
            switch: bb.switch && void 0 === ub,
            delete: bb.change && xS(ub, hb)
          }
        }(ub, Lb, Bb),
        ab = Ub && void 0 !== Yb && void 0 === Yb.baf2CoopState && "coopUnreachable" === Gb,
        Hb = {
          switch: eS((!Ub || ab) && void 0 === Lb, ab || Sb.switch),
          switchLabel: ab ? "tryAgain" : "switch",
          rename: eS(!0, ub.rename),
          delete: eS(!Ub, Sb.delete),
          deleteWaits: !Ub && xS(Lb, Bb),
          people: eS(void 0 !== bb.baf2IslandInvitable || Ob && Ub && void 0 === Lb && void 0 === Yb, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        wb = !Ub && Sb.delete;
      if (void 0 === Yb) return hb ? {
        ...Hb,
        delete: eS(!Ub, !1),
        deleteWaits: !1,
        note: wb ? {
          key: `${oS}islandsCoopKeepOwn`
        } : null
      } : Hb;
      const Zb = Yb.baf2CoopState,
        Xb = Yb.baf2CoopMembers.length > 1,
        pb = {
          ...Hb,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Zb && "member" === Yb.baf2CoopRole) return {
        ...pb,
        dismiss: eS(!0, ub.rename),
        note: {
          key: NS[Zb],
          names: {
            owner: Yb.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Zb) {
        let bb = {
          key: `${oS}islandsCoopOwnLost`
        };
        return wb && Xb ? bb = {
          key: `${oS}islandsCoopDeleteMembers`
        } : wb && hb && (bb = {
          key: `${oS}islandsCoopKeepOwn`
        }), {
          ...pb,
          delete: eS(!Ub, Sb.delete && !Xb && !hb),
          deleteWaits: Hb.deleteWaits && !Xb && !hb,
          note: bb
        }
      }
      if ("member" === Yb.baf2CoopRole) return {
        ...Hb,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: eS(!0, Ub ? ub.switch : ub.rename)
      };
      const ob = Yb.baf2CoopManageHere;
      let Ab = null;
      var lb;
      ob || Ub ? wb && Xb ? Ab = {
        key: `${oS}islandsCoopDeleteMembers`
      } : wb && hb && (Ab = {
        key: `${oS}islandsCoopKeepOwn`
      }) : Ab = {
        key: null !== (lb = Yb.baf2CoopLeft) && void 0 !== lb && lb.length ? `${oS}islandsCoopManageThereClaim` : `${oS}islandsCoopManageThere`
      };
      return {
        ...Hb,
        rename: eS(!0, ub.rename && ob),
        delete: eS(!Ub, Sb.delete && !Xb && !hb),
        deleteWaits: Hb.deleteWaits && !Xb && !hb,
        people: "enabled",
        peopleLabel: "players",
        unshare: eS(ob && Ub && !Xb, ub.change),
        remove: ob,
        note: Ab
      }
    }

    function mS(bb) {
      var ub;
      const hb = bb.baf2IslandCoop;
      if ("owner" !== (null === hb || void 0 === hb ? void 0 : hb.baf2CoopRole) || void 0 !== hb.baf2CoopState || null === (ub = hb.baf2CoopLeft) || void 0 === ub || !ub.length) return null;
      const Bb = bb.baf2IslandActive && hb.baf2CoopManageHere;
      return {
        left: hb.baf2CoopLeft,
        claim: Bb,
        goThere: !Bb && hb.baf2CoopManageHere
      }
    }

    function IS(bb) {
      return bb.baf2CoopMembers.length >= bb.baf2CoopMax
    }

    function PS(bb, ub, hb) {
      return void 0 !== bb && ub < bb.answer && hb - bb.atMs < zS
    }
    const qS = "buildAFactory2Game:";

    function ES(bb, ub) {
      return {
        onKeyDown: hb => {
          hb.stopPropagation(), hb.nativeEvent.isComposing || 229 === hb.nativeEvent.keyCode || ("Enter" === hb.key ? (hb.preventDefault(), bb()) : "Escape" === hb.key && (hb.preventDefault(), ub()))
        }
      }
    }

    function yS(bb) {
      return {
        onKeyDown: ub => {
          "Escape" !== ub.key || ub.nativeEvent.isComposing || (ub.preventDefault(), ub.stopPropagation(), bb())
        }
      }
    }

    function VS(bb) {
      bb.currentTarget.select()
    }

    function FS(bb, ub) {
      (0, Bb.useEffect)((() => {
        var hb;
        bb && (null === (hb = ub.current) || void 0 === hb || hb.scrollIntoView({
          block: "nearest"
        }))
      }), [bb, ub])
    }

    function fS(bb) {
      const [ub, hb] = (0, Bb.useState)(null);
      return (0, Bb.useEffect)((() => {
        const ub = document.querySelector(".UiRequests"),
          Bb = bb.current;
        if (!ub || !Bb || "undefined" === typeof ResizeObserver) return;
        const Ob = () => {
          const bb = ub.getBoundingClientRect(),
            Ob = Bb.getBoundingClientRect(),
            Gb = Bb.parentElement,
            Ub = Gb && parseFloat(getComputedStyle(Gb).paddingTop) || 0,
            Lb = function(bb, ub, hb, Bb) {
              if (!bb || bb.height <= 0 || bb.right <= ub.left || bb.left >= ub.right) return null;
              const Ob = Math.max(Bb, bb.bottom + 8);
              return {
                marginTop: Math.round(Ob - Bb),
                maxHeight: Math.max(0, Math.floor(hb - Ob - Bb))
              }
            }(bb, Ob, window.innerHeight, Ub);
          hb((bb => (null === bb || void 0 === bb ? void 0 : bb.marginTop) === (null === Lb || void 0 === Lb ? void 0 : Lb.marginTop) && (null === bb || void 0 === bb ? void 0 : bb.maxHeight) === (null === Lb || void 0 === Lb ? void 0 : Lb.maxHeight) ? bb : Lb))
        };
        Ob();
        const Gb = new ResizeObserver(Ob);
        return Gb.observe(ub), window.addEventListener("resize", Ob), () => {
          Gb.disconnect(), window.removeEventListener("resize", Ob)
        }
      }), [bb]), ub
    }

    function kS() {
      (0, Bb.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function TS(bb) {
      (0, Bb.useEffect)((() => {
        var ub;
        null === (ub = bb.current) || void 0 === ub || ub.focus()
      }), [bb])
    }

    function cS(bb) {
      const [ub, hb] = (0, Bb.useState)(Date.now);
      return (0, Bb.useEffect)((() => {
        const ub = window.setInterval((() => {
          hb(Date.now())
        }), bb);
        return () => {
          window.clearInterval(ub)
        }
      }), [bb]), ub
    }

    function QS(bb) {
      let {
        tier: ub,
        t: hb
      } = bb;
      const {
        kind: Bb,
        short: Ob
      } = ob(ub), Gb = Zb(ub, Xb), Ub = hb(`${qS}${Gb.key}`, {
        ...Gb.params,
        name: hb(`${qS}${Ab(ub).nameKey}`)
      });
      return (0, jG.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, jG.jsx)("span", {
          className: dO()("Baf2IslandTierPip", {
            Stage: "tier" !== Bb
          }),
          "aria-hidden": "true",
          children: Ob
        }), Ub]
      })
    }

    function RS(bb) {
      let {
        note: ub,
        className: hb,
        t: Bb
      } = bb;
      return (0, jG.jsx)("p", {
        className: dO()("Baf2IslandNote", hb),
        children: JS(Bb, ub.key, ub.names, ub.params)
      })
    }
    const ba = "buildAFactory2Game:";

    function ua(bb) {
      let {
        message: ub,
        arrivedAtMs: hb,
        close: Ob,
        leave: Gb
      } = bb;
      const Ub = IU(),
        {
          t: Lb
        } = (0, DO.K)(),
        Yb = cS(1e3),
        Sb = (0, Bb.useRef)(null);
      kS(), (0, Bb.useEffect)((() => {
        var bb;
        null === (bb = Sb.current) || void 0 === bb || bb.focus()
      }), []);
      const ab = KS(hb, ub.baf2TransferInMs, Yb),
        Hb = hb + ub.baf2TransferInMs - 1e3,
        [wb, Zb] = (0, Bb.useState)(null);
      (0, Bb.useEffect)((() => {
        const bb = window.setTimeout((() => {
          Zb(Hb)
        }), Math.max(0, Hb - Date.now()));
        return () => {
          window.clearTimeout(bb)
        }
      }), [Hb]);
      const Xb = wb === Hb || Yb >= Hb,
        pb = ub.baf2TransferIsland,
        ob = ub.baf2TransferOwner;
      return (0, jG.jsx)(WU.b, {
        close: Ob,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, jG.jsxs)("section", {
          ref: Sb,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsxs)("div", {
              children: [(0, jG.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === ob ? JS(Lb, `${ba}islandsTransferOwn`, {
                  island: pb
                }) : JS(Lb, `${ba}islandsTransfer`, {
                  island: pb,
                  owner: ob
                })
              }), (0, jG.jsx)("p", {
                children: Xb ? Lb(`${ba}islandsTransferNow`) : Lb(`${ba}islandsTransferIn`, {
                  time: WG(Lb, ab)
                })
              })]
            }), (0, jG.jsx)(CU.i, {
              ariaLabel: Lb(`${ba}islandsClose`),
              onClick: Ob
            })]
          }), !Xb && (0, jG.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, jG.jsx)("p", {
              className: "Baf2TransferNote",
              children: Lb(`${ba}islandsTransferNote`)
            }), (0, jG.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, jG.jsx)(CU.e, {
                onClick: () => {
                  Ub.send("baf2coopstay"), Gb()
                },
                children: Lb(`${ba}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var ha = hb(1348),
      Ba = hb(1044),
      Oa = hb.n(Ba);
    const Ga = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const Ua = "buildAFactory2Game:",
      La = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Ya(bb, ub, hb) {
      return void 0 === ub ? hb : "string" === typeof ub ? ub : Array.isArray(ub) ? ub.map((ub => "string" === typeof ub ? ub : "translationKey" in ub ? bb(ub.translationKey) : "")).join("") : bb(ub.translationKey)
    }

    function Sa(bb) {
      const ub = {};
      for (const [hb, Bb] of Object.entries(null !== bb && void 0 !== bb ? bb : {})) ub[hb] = Bb < 0 ? KG(Bb) : Bb.toLocaleString("en-US");
      return ub
    }

    function aa(bb, ub) {
      const hb = ub ? "touch" : "mouse";
      return {
        use: bb(`${Ua}lookUse_${hb}`),
        Use: bb(`${Ua}lookUseStart_${hb}`)
      }
    }
    const Ha = (0, Bb.memo)((function(bb) {
      let {
        item: ub
      } = bb;
      return (0, jG.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, jG.jsx)(zO.d, {
          itemName: ub,
          amount: 0
        })
      })
    }));

    function wa(bb) {
      let {
        label: ub,
        percent: hb,
        progress: Bb
      } = bb;
      return (0, jG.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, jG.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${ub}: ${Bb}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": hb,
          children: (0, jG.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${hb}%`
            }
          })
        }), (0, jG.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Bb
        })]
      })
    }

    function Za(bb) {
      let {
        chips: ub
      } = bb;
      return (0, jG.jsx)("span", {
        className: "Baf2QuestChips",
        children: ub.map((bb => {
          let [ub, hb, Bb] = bb;
          const Ob = hb >= Bb;
          return (0, jG.jsxs)("span", {
            className: dO()("Baf2QuestChip", {
              Met: Ob
            }),
            children: [(0, jG.jsx)(Ha, {
              item: ub
            }), (0, jG.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Ob ? `\u2713${Bb}` : `${hb}/${Bb}`
            })]
          }, ub)
        }))
      })
    }

    function Xa(bb, ub) {
      const {
        key: hb,
        params: Bb
      } = Zb(ub, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return bb(`${Ua}${hb}`, {
        ...Bb,
        name: bb(`${Ua}${Ab(ub).nameKey}`)
      })
    }

    function pa(bb) {
      let {
        core: ub,
        t: hb
      } = bb;
      const [Bb, Ob] = ub, Gb = Ob > 0 ? Math.floor(100 * Bb / Ob) : 100;
      return (0, jG.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": hb(`${Ua}questCoreLabel`, {
          have: String(Bb),
          need: String(Ob)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Gb,
        children: [(0, jG.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: hb(`${Ua}questCore`, {
            percent: String(Gb)
          })
        }), (0, jG.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, jG.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Gb}%`
            }
          })
        })]
      })
    }

    function oa(bb) {
      let {
        rows: ub,
        t: hb
      } = bb;
      const Bb = ub.filter((bb => bb.done)).length;
      return (0, jG.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": hb(`${Ua}questStepsProgress`, {
          done: String(Bb),
          total: String(ub.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": ub.length,
        "aria-valuenow": Bb,
        children: ub.map((bb => (0, jG.jsx)("span", {
          className: dO()("Baf2QuestSegment", {
            Done: bb.done,
            Current: bb.current
          })
        }, bb.id)))
      })
    }
    const Aa = (0, Bb.memo)(Ka, la);

    function la(bb, ub) {
      const hb = hb => bb.view.itemNames[hb] === ub.view.itemNames[hb];
      return bb.t === ub.t && bb.extra === ub.extra && (null === bb.row.item || hb(bb.row.item)) && bb.row.madeFor.every(hb) && bb.row.also.every(hb) && Oa()(bb.row, ub.row)
    }

    function Ka(bb) {
      let {
        row: ub,
        view: hb,
        t: Bb,
        extra: Ob
      } = bb;
      const {
        isTouchScreen: Gb
      } = (0, KO.j)(["isTouchScreen"]), Ub = ub.item ? function(bb, ub, hb) {
        return 1 !== hb && Ga.has(bb) ? nO(ub) : null
      }(ub.key, ub.item, ub.total) : null, Lb = Ub ? Bb(Ub) : ub.item ? Ya(Bb, hb.itemNames[ub.item], ub.item) : "", Yb = ub.also.map((bb => Ya(Bb, hb.itemNames[bb], bb))), Sb = Yb.join(", "), ab = function(bb, ub) {
        var hb;
        return ub.length < 2 ? null !== (hb = ub[0]) && void 0 !== hb ? hb : "" : bb(`${Ua}listAnd`, {
          rest: ub.slice(0, -1).join(bb(`${Ua}listComma`)),
          last: ub[ub.length - 1]
        })
      }(Bb, [Lb, ...Yb]), Hb = Bb(`${Ua}${ub.key}`, {
        ...aa(Bb, Gb),
        ...Sa(ub.params),
        item: Lb,
        also: Sb,
        itemList: ab,
        total: String(ub.total)
      }), [wb, ...Zb] = Hb.split("\n"), Xb = ub.total > 1 && !ub.done && !ub.away;
      return (0, jG.jsxs)("li", {
        className: dO()("Baf2QuestStep", {
          Done: ub.done,
          Current: ub.current,
          JustFinished: ub.justFinished,
          Away: ub.away
        }),
        children: [!ub.done && null !== ub.item && (0, jG.jsx)(Ha, {
          item: ub.item
        }), (ub.done || null === ub.item) && (0, jG.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: ub.done ? "\u2713" : "\u25cb"
        }), (0, jG.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, jG.jsx)("strong", {
            children: wb
          }), Zb.length > 0 && (0, jG.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Zb.join(" ")
          }), !ub.done && ub.madeFor.length > 0 && (0, jG.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Bb("buildAFactory2Game:questRowFor", {
              items: ub.madeFor.map((bb => Ya(Bb, hb.itemNames[bb], bb))).join(" \u2192 ")
            })
          }), Xb && (0, jG.jsx)(wa, {
            label: wb,
            percent: Math.round(100 * ub.amount / ub.total),
            progress: `${ub.amount.toLocaleString("en-US")}/${ub.total.toLocaleString("en-US")}`
          }), !ub.done && !ub.away && ub.chips && ub.chips.length > 0 && (0, jG.jsx)(Za, {
            chips: ub.chips
          }), Ob]
        })]
      })
    }

    function Wa(bb, ub) {
      let [hb, Bb] = ub;
      return bb(`${Ua}${hb}`, Sa(Bb))
    }

    function Ca(bb) {
      let [ub, hb] = bb;
      return ub + JSON.stringify(hb)
    }

    function da(bb) {
      let {
        goal: ub,
        t: hb
      } = bb;
      return ub ? (0, jG.jsx)("span", {
        className: "Baf2BookGoal",
        children: hb(`${Ua}${ub}`)
      }) : null
    }

    function ra(bb) {
      let {
        view: ub,
        t: hb
      } = bb;
      if (!ub.name) return null;
      const Bb = qO(ub.rows);
      return (0, jG.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, jG.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: hb(`${Ua}currentQuest`)
        }), (0, jG.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Wa(hb, ub.name)
        }), (0, jG.jsx)(da, {
          goal: ub.goal,
          t: hb
        }), Bb.length > 1 && (0, jG.jsx)(oa, {
          rows: Bb,
          t: hb
        }), (0, jG.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: ub.rows.map((bb => (0, jG.jsx)(Aa, {
            row: bb,
            view: ub,
            t: hb
          }, bb.id)))
        }), ub.reward && (0, jG.jsxs)("span", {
          className: "Baf2BookReward",
          children: [hb(`${Ua}questReward`), (0, jG.jsx)(Ha, {
            item: ub.reward
          }), Ya(hb, ub.itemNames[ub.reward], ub.reward)]
        })]
      })
    }

    function ja(bb) {
      let {
        quest: ub,
        upcoming: hb,
        t: Bb
      } = bb;
      return (0, jG.jsxs)("li", {
        className: dO()("Baf2BookQuest", {
          Done: ub[3],
          Upcoming: hb
        }),
        children: [(0, jG.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: ub[3] ? "\u2713" : "\u25cb"
        }), (0, jG.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, jG.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Wa(Bb, ub)
          }), (0, jG.jsx)(da, {
            goal: ub[2],
            t: Bb
          })]
        })]
      })
    }

    function na(bb) {
      let {
        done: ub,
        total: hb,
        t: Bb
      } = bb;
      const Ob = hb > 0 ? Math.round(100 * ub / hb) : 0,
        Gb = Bb(`${Ua}questBookChapterProgress`, {
          done: String(ub),
          total: String(hb)
        });
      return (0, jG.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, jG.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Gb,
          "aria-valuemin": 0,
          "aria-valuemax": hb,
          "aria-valuenow": ub,
          children: (0, jG.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Ob}%`
            }
          })
        }), (0, jG.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Gb
        })]
      })
    }

    function Da(bb) {
      let {
        view: ub,
        tier: hb,
        quests: Bb,
        t: Ob
      } = bb;
      const Gb = hb === ub.tier,
        Ub = (null !== Bb && void 0 !== Bb ? Bb : []).filter((bb => !bb[4])),
        Lb = (null !== Bb && void 0 !== Bb ? Bb : []).filter((bb => bb[4])),
        Yb = Ub.filter((bb => bb[3])).length,
        Sb = Gb && ub.name ? Ca(ub.name) : null,
        ab = Ub.findIndex((bb => !bb[3] && Ca(bb) === Sb));
      return (0, jG.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, jG.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, jG.jsx)("h3", {
            children: Xa(Ob, hb)
          }), Ub.length > 0 && (0, jG.jsx)(na, {
            done: Yb,
            total: Ub.length,
            t: Ob
          }), Gb && ub.core && (0, jG.jsx)(pa, {
            core: ub.core,
            t: Ob
          })]
        }), (0, jG.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Bb && Gb && (0, jG.jsx)(ra, {
            view: ub,
            t: Ob
          }), Ub.map(((bb, hb) => hb === ab ? (0, jG.jsx)(ra, {
            view: ub,
            t: Ob
          }, Ca(bb)) : (0, jG.jsx)(ja, {
            quest: bb,
            upcoming: !bb[3],
            t: Ob
          }, Ca(bb))))]
        }), Gb && ub.side && (0, jG.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, jG.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Ob(`${Ua}questSide`)
          }), (0, jG.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Wa(Ob, ub.side.name)
          }), (0, jG.jsx)(da, {
            goal: ub.side.goal,
            t: Ob
          }), (0, jG.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, jG.jsx)(Aa, {
              row: ub.side.row,
              view: ub,
              t: Ob
            })
          })]
        }), Lb.length > 0 && (0, jG.jsxs)(jG.Fragment, {
          children: [(0, jG.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Ob(`${Ua}questBookSidesDone`)
          }), (0, jG.jsx)("ol", {
            className: "Baf2BookQuests",
            children: Lb.map((bb => (0, jG.jsx)(ja, {
              quest: bb,
              upcoming: !1,
              t: Ob
            }, Ca(bb))))
          })]
        })]
      })
    }

    function xa(bb) {
      var ub, hb, Gb;
      let {
        store: Ub,
        close: Lb
      } = bb;
      const {
        t: Yb
      } = (0, DO.K)(), Sb = (0, ha.k)(eO, Ub.get()), Hb = null !== (ub = Sb.tier) && void 0 !== ub ? ub : 1, [wb, Zb] = (0, Bb.useState)(null), Xb = (null === wb || void 0 === wb ? void 0 : wb.at) === Hb ? wb.tier : Hb, Ab = (0, Bb.useRef)(null), lb = null !== Sb.chapters;
      (0, Bb.useEffect)((() => {
        var bb;
        Ab.current && (Ab.current.scrollTop = 0);
        const ub = null === (bb = Ab.current) || void 0 === bb ? void 0 : bb.querySelector(".Baf2BookQuest.Current");
        if (Ab.current && ub) {
          const bb = ub.getBoundingClientRect().bottom - Ab.current.getBoundingClientRect().bottom;
          bb > 0 && (Ab.current.scrollTop += Math.min(bb, ub.getBoundingClientRect().top - Ab.current.getBoundingClientRect().top))
        }
      }), [Xb, lb]);
      const Kb = null === (hb = Sb.chapters) || void 0 === hb ? void 0 : hb.find((bb => {
        let [ub] = bb;
        return ub === Xb
      }));
      return (0, jG.jsx)(WU.b, {
        close: Lb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, jG.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: La,
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Yb(`${Ua}questBookTitle`)
            }), (0, jG.jsx)(CU.i, {
              onClick: Lb
            })]
          }), (0, jG.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Yb(`${Ua}questBookChapters`),
            children: Ob.slice(0, ab()).map(((bb, ub) => {
              const hb = ub + 1,
                {
                  kind: Bb,
                  short: Ob
                } = ob(hb),
                Gb = pb(hb, Hb),
                Ub = Gb ? Yb(`${Ua}coreAtomicHidden`) : Xa(Yb, hb);
              return (0, jG.jsx)("li", {
                children: (0, jG.jsx)("button", {
                  type: "button",
                  className: dO()({
                    Stage: "tier" !== Bb,
                    Atomic: "atomic" === Bb,
                    Current: hb === Hb,
                    Selected: hb === Xb
                  }),
                  disabled: hb > Hb,
                  "aria-pressed": hb === Xb,
                  "aria-label": Ub,
                  title: Gb ? void 0 : Ub,
                  onClick: () => {
                    Zb({
                      tier: hb,
                      at: Hb
                    })
                  },
                  children: Gb ? "?" : Ob
                })
              }, bb.nameKey)
            }))
          }), (0, jG.jsxs)("div", {
            ref: Ab,
            className: "Baf2BookBody",
            children: [IO(Sb) && Xb === Hb && (0, jG.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Yb(`${Ua}questBookAllDone`)
            }), (0, jG.jsx)(Da, {
              view: Sb,
              tier: Xb,
              quests: null !== (Gb = null === Kb || void 0 === Kb ? void 0 : Kb[1]) && void 0 !== Gb ? Gb : null,
              t: Yb
            })]
          })]
        })
      })
    }
    const za = "buildAFactory2Game:";

    function ga(bb) {
      let {
        tiers: ub,
        from: hb,
        tier: Bb,
        shown: Ob,
        xw: Gb
      } = bb;
      const {
        t: Ub
      } = (0, DO.K)(), Lb = ub.map(((bb, ub) => {
        const Lb = hb + ub,
          {
            kind: Yb,
            short: Sb
          } = ob(Lb),
          ab = pb(Lb, Bb);
        return (0, jG.jsx)("li", {
          children: (0, jG.jsx)("button", {
            type: "button",
            className: dO()({
              Stage: "tier" !== Yb,
              Silhouette: ab,
              Reached: Lb <= Bb,
              Current: Lb === Bb,
              Next: Lb === Bb + 1,
              Selected: Lb === Ob
            }),
            disabled: ab,
            "aria-pressed": Lb === Ob,
            "aria-label": ab ? Ub(`${za}coreAtomicHidden`) : void 0,
            title: ab ? void 0 : Ub(`${za}${bb.nameKey}`),
            onClick: () => {
              Gb(Lb)
            },
            children: ab ? "?" : Sb
          })
        }, bb.nameKey)
      }));
      return (0, jG.jsx)(jG.Fragment, {
        children: Lb
      })
    }

    function ia(bb) {
      let {
        id: ub,
        label: hb,
        tiers: Bb,
        from: Ob,
        ...Gb
      } = bb;
      return (0, jG.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, jG.jsx)("span", {
          id: ub,
          className: "Baf2CoreLadderLabel",
          children: hb
        }), (0, jG.jsx)("ol", {
          "aria-labelledby": ub,
          children: (0, jG.jsx)(ga, {
            ...Gb,
            tiers: Bb,
            from: Ob
          })
        })]
      })
    }

    function va(bb) {
      const {
        t: ub
      } = (0, DO.K)(), hb = Ob.findIndex((bb => void 0 !== bb.stage)), Bb = Ob.findIndex((bb => void 0 !== bb.reactorTier)), Gb = hb < 0 ? Ob : Ob.slice(0, hb), Ub = hb < 0 ? [] : Ob.slice(hb, Bb < 0 ? void 0 : Bb), Yb = Bb < 0 || !Lb() ? [] : Ob.slice(Bb);
      return (0, jG.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, jG.jsx)(ia, {
          ...bb,
          id: "baf2CoreTiersLabel",
          label: ub(`${za}coreTiersLabel`),
          tiers: Gb,
          from: 1
        }), Ub.length > 0 && (0, jG.jsx)(ia, {
          ...bb,
          id: "baf2CoreStagesLabel",
          label: ub(`${za}coreStagesLabel`),
          tiers: Ub,
          from: hb + 1
        }), Yb.length > 0 && (0, jG.jsx)(ia, {
          ...bb,
          id: "baf2CoreAtomicLabel",
          label: ub(`${za}coreAtomicLabel`),
          tiers: Yb,
          from: Bb + 1
        })]
      })
    }
    const ta = "buildAFactory2Game:";

    function Ja(bb) {
      let {
        item: ub,
        itemNames: hb,
        children: Bb
      } = bb;
      return (0, jG.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, jG.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, jG.jsx)(zO.d, {
            itemName: ub,
            amount: 0
          })
        }), (0, jG.jsx)(gO.c, {
          text: hb[ub]
        }), Bb]
      })
    }

    function ea(bb) {
      const ub = new Map;
      for (const {
          block: Bb
        }
        of bb.newDeposits) {
        var hb;
        ub.set(Bb, (null !== (hb = ub.get(Bb)) && void 0 !== hb ? hb : 0) + 1)
      }
      return [...ub]
    }

    function Na(bb) {
      let {
        value: ub,
        label: hb,
        more: Bb
      } = bb;
      return (0, jG.jsxs)("li", {
        children: [(0, jG.jsx)("strong", {
          children: ub
        }), (0, jG.jsx)("span", {
          children: hb
        }), Bb > 0 && (0, jG.jsxs)("em", {
          children: ["+", Bb]
        })]
      })
    }

    function sa(bb) {
      let {
        items: ub,
        itemNames: hb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)(), [Gb, Ub] = (0, Bb.useState)(null), Lb = null !== Gb && ub.includes(Gb) ? Gb : null;
      return (0, jG.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, jG.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Ob(`${ta}coreRewardUnlocks`)
        }), (0, jG.jsx)("ul", {
          children: ub.map((bb => (0, jG.jsx)("li", {
            children: (0, jG.jsx)("button", {
              type: "button",
              className: dO()("Baf2PanelIcon", {
                Picked: bb === Lb
              }),
              title: BG(Ob, bb),
              "aria-label": BG(Ob, bb),
              "aria-pressed": bb === Lb,
              onClick: () => {
                Ub(bb === Lb ? null : bb)
              },
              children: (0, jG.jsx)(zO.d, {
                itemName: bb,
                amount: 0
              })
            })
          }, bb)))
        }), (0, jG.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== Lb && (0, jG.jsxs)(jG.Fragment, {
            children: [(0, jG.jsx)(gO.c, {
              text: hb[Lb]
            }), " \xb7 ", (0, jG.jsx)(gO.c, {
              text: hb[gb(Lb)]
            })]
          }), null === Lb && Ob(`${ta}coreRecipeTap`)]
        })]
      })
    }

    function Ma(bb) {
      var ub, hb;
      let {
        def: Bb,
        tier: Ob,
        itemNames: Gb
      } = bb;
      const {
        t: Ub
      } = (0, DO.K)(), Lb = Ob > 1 ? Ab(Ob - 1) : void 0, Yb = Math.round(2 * Bb.islandRadius), Sb = Lb ? Math.round(2 * Lb.islandRadius) : Yb, ab = Ob >= 3 ? CB(Ob) : null;
      return (0, jG.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, jG.jsxs)("ul", {
          className: dO()("Baf2CoreStats", {
            Four: null !== ab
          }),
          children: [(0, jG.jsx)(Na, {
            value: `${Yb}\xd7${Yb}`,
            label: Ub(`${ta}coreStatIsland`),
            more: Yb - Sb
          }), (0, jG.jsx)(Na, {
            value: String(Bb.machineAllowance),
            label: Ub(`${ta}coreStatMachines`),
            more: Bb.machineAllowance - (null !== (ub = null === Lb || void 0 === Lb ? void 0 : Lb.machineAllowance) && void 0 !== ub ? ub : Bb.machineAllowance)
          }), (0, jG.jsx)(Na, {
            value: String(Bb.beltAllowance),
            label: Ub(`${ta}coreStatBelts`),
            more: Bb.beltAllowance - (null !== (hb = null === Lb || void 0 === Lb ? void 0 : Lb.beltAllowance) && void 0 !== hb ? hb : Bb.beltAllowance)
          }), null !== ab && (0, jG.jsx)(Na, {
            value: String(ab),
            label: Ub(`${ta}coreStatStorage`),
            more: ab - (Lb ? CB(Ob - 1) : ab)
          })]
        }), Bb.reward && (0, jG.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, jG.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Ub(`${ta}coreRewardItem`)
          }), (0, jG.jsx)(Ja, {
            item: Bb.reward,
            itemNames: Gb
          })]
        }), Bb.newDeposits.length > 0 && (0, jG.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, jG.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Ub(Bb.newDeposits.length > 1 ? `${ta}coreRewardDeposits` : `${ta}coreRewardDeposit`)
          }), ea(Bb).map((bb => {
            let [ub, hb] = bb;
            return (0, jG.jsx)(Ja, {
              item: ub,
              itemNames: Gb,
              children: hb > 1 && ` \xd7${hb}`
            }, ub)
          }))]
        }), Bb.unlocks.length > 0 && (0, jG.jsx)(sa, {
          items: Bb.unlocks,
          itemNames: Gb
        }), (0, jG.jsx)(ma, {
          tier: Ob
        })]
      })
    }

    function ma(bb) {
      let {
        tier: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)(), Bb = pO[ub];
      if (!Bb) return null;
      const Ob = XO(ub, 0, 0).barrierMax !== XO(ub - 1, 0, 0).barrierMax;
      return (0, jG.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, jG.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, jG.jsx)(zO.d, {
            itemName: Ob ? YO.Chestplate : LO,
            amount: 0
          })
        }), hb(`${ta}gearPerkLine`, {
          perk: hb(`${ta}${Bb}`)
        })]
      })
    }

    function Ia(bb, ub) {
      return null === bb ? ub : bb.value
    }

    function Pa(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === bb || hb - bb.atMs >= Bb ? null : Ob(bb.value, ub) ? bb.armed ? null : bb : bb.armed ? bb : {
        ...bb,
        armed: !0
      }
    }

    function qa(bb, ub) {
      const hb = ub.filter((ub => {
        var hb;
        return !1 !== (null === (hb = bb.get(ub)) || void 0 === hb ? void 0 : hb.value)
      }));
      for (const [Bb, Ob] of bb) Ob.value && !ub.includes(Bb) && hb.push(Bb);
      return hb
    }

    function Ea(bb, ub, hb, Ob) {
      const [Gb, Ub] = (0, Bb.useState)((() => new Map)), Lb = () => {
        Ub((ub => function(bb, ub, hb, Bb) {
          var Ob;
          let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Ub = null;
          for (const [Lb, Yb] of bb) {
            const Ob = Pa(Yb, ub(Lb), hb, Bb, Gb);
            Ob !== Yb && (Ub ??= new Map(bb), null === Ob ? Ub.delete(Lb) : Ub.set(Lb, Ob))
          }
          return null !== (Ob = Ub) && void 0 !== Ob ? Ob : bb
        }(ub, bb, Date.now(), hb, Ob)))
      };
      (0, Bb.useEffect)((() => {
        Lb()
      }), [ub, hb]), (0, Bb.useEffect)((() => {
        if (0 === Gb.size) return;
        const bb = Math.min(...[...Gb.values()].map((bb => bb.atMs))),
          ub = setTimeout(Lb, Math.max(0, bb + hb - Date.now()) + 1);
        return () => {
          clearTimeout(ub)
        }
      }), [Gb, ub, hb]);
      return [Gb, (ub, hb) => {
        Ub((Bb => {
          const Gb = new Map(Bb);
          return Gb.set(ub, function(bb, ub, hb) {
            return {
              value: bb,
              atMs: hb,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(bb, ub)
            }
          }(hb, bb(ub), Date.now(), Ob)), Gb
        }))
      }]
    }
    const ya = "buildAFactory2Game:";

    function Va(bb) {
      let {
        message: ub,
        itemNames: hb
      } = bb;
      const Ob = IU(),
        {
          t: Gb
        } = (0, DO.K)(),
        [Ub, Lb] = (0, Bb.useState)(!1),
        [Yb, Sb] = function(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tU;
          const [hb, Bb] = Ea((ub => bb.includes(ub)), bb, ub, Object.is);
          return [qa(hb, bb), Bb]
        }(ub.baf2CoreBankPaused),
        ab = new Set(Yb),
        Hb = [...ub.baf2CoreBanked];
      for (const Bb of ab) Hb.some((bb => {
        let [ub] = bb;
        return ub === Bb
      })) || Hb.push([Bb, 0]);
      return 0 === Hb.length ? null : (0, jG.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, jG.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Ub,
          onClick: () => {
            Lb(!Ub)
          },
          children: [(0, jG.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Gb(`${ya}coreBankedLater`)
          }), (0, jG.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Hb.map((bb => {
              let [ub, hb] = bb;
              const Bb = ab.has(ub);
              return (0, jG.jsxs)("span", {
                className: dO()({
                  Paused: Bb
                }),
                title: Bb ? Gb(`${ya}coreBankPausedTag`) : void 0,
                children: [(0, jG.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, jG.jsx)(zO.d, {
                    itemName: ub,
                    amount: 0
                  })
                }), hb, Bb && (0, jG.jsx)(xO.e, {
                  name: "pause"
                })]
              }, ub)
            }))
          }), (0, jG.jsx)(xO.e, {
            name: Ub ? "angle-up" : "angle-down"
          })]
        }), Ub && (0, jG.jsxs)(jG.Fragment, {
          children: [(0, jG.jsx)("ul", {
            children: Hb.map((bb => {
              let [ub, Bb] = bb;
              const Ub = ab.has(ub);
              return (0, jG.jsxs)("li", {
                children: [(0, jG.jsxs)(Ja, {
                  item: ub,
                  itemNames: hb,
                  children: [(0, jG.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Bb
                  }), Ub && (0, jG.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Gb(`${ya}coreBankPausedTag`)
                  })]
                }), (0, jG.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, jG.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Bb,
                    onClick: () => {
                      Ob.send(`baf2corewithdraw ${Bb} ${ub}`)
                    },
                    children: Gb(`${ya}coreTake`)
                  }), (0, jG.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Ob.send(`${Wb} ${ub}`), Sb(ub, !Ub)
                    },
                    children: Gb(Ub ? `${ya}coreBankResume` : `${ya}coreBankStop`)
                  })]
                })]
              }, ub)
            }))
          }), (0, jG.jsx)("p", {
            className: "Baf2CoreHint",
            children: Gb(`${ya}coreBankNote`)
          })]
        })]
      })
    }
    const Fa = "buildAFactory2Game:";

    function fa(bb) {
      const ub = Math.max(0, Math.floor(bb));
      return `${Math.floor(ub/60)}:${String(ub%60).padStart(2,"0")}`
    }

    function ka(bb) {
      let {
        item: ub
      } = bb;
      return (0, jG.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, jG.jsx)(zO.d, {
          itemName: ub,
          amount: 0
        })
      })
    }

    function Ta() {
      return (0, jG.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, jG.jsx)(xO.e, {
          name: "bolt"
        })
      })
    }

    function ca(bb) {
      let {
        charge: ub,
        hint: hb,
        itemNames: Bb
      } = bb;
      const Ob = IU(),
        {
          t: Gb
        } = (0, DO.K)(),
        [Ub, Lb, Yb, Sb, ab, Hb, wb] = ub,
        [Zb, Xb] = function(bb) {
          var ub;
          let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tU,
            Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Ob, Gb] = Ea((() => bb), bb, hb, Bb);
          return [Ia(null !== (ub = Ob.get("")) && void 0 !== ub ? ub : null, bb), bb => {
            Gb("", bb)
          }]
        }(wb),
        pb = Zb === wb ? Hb : !Zb,
        ob = Sb >= ab,
        Ab = Ub.find((bb => {
          let [, ub, hb] = bb;
          return hb < .9 * ub
        }));
      let lb = `${Fa}coreChargeWaiting`,
        Kb = {};
      return ob ? lb = `${Fa}coreChargeDone` : Zb ? lb = `${Fa}coreChargeStopped` : pb && hb ? (lb = `${Fa}${hb[0]}`, Kb = {
        item: BG(Gb, hb[1])
      }) : pb && Ab ? (lb = `${Fa}coreChargeShort`, Kb = {
        item: BG(Gb, Ab[0])
      }) : pb && Lb > 0 && !Yb ? lb = `${Fa}coreChargePower` : pb && (lb = `${Fa}coreChargeRunning`), (0, jG.jsxs)("div", {
        className: dO()("Baf2CoreCharge", {
          Waiting: !pb && !ob,
          Done: ob
        }),
        children: [(0, jG.jsxs)("h4", {
          children: [Gb(`${Fa}coreChargeTitle`), (0, jG.jsx)("span", {
            children: Gb(`${Fa}coreChargeProgress`, {
              done: fa(Sb),
              need: fa(ab)
            })
          })]
        }), (0, jG.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, jG.jsx)("div", {
            style: {
              width: 100 * Math.min(Sb, ab) / ab + "%"
            }
          })
        }), (0, jG.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Ub.map((bb => {
            var ub;
            let [hb, Ob, Ub] = bb;
            const Lb = Ub >= .9 * Ob;
            return (0, jG.jsxs)("li", {
              className: dO()({
                Done: Lb,
                Short: pb && !Lb
              }),
              children: [(0, jG.jsx)(ka, {
                item: hb
              }), (0, jG.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, jG.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, jG.jsx)(gO.c, {
                    text: null !== (ub = Bb[hb]) && void 0 !== ub ? ub : hb
                  }), (0, jG.jsx)("span", {
                    children: Gb(`${Fa}coreChargeItem`, {
                      now: String(Ub),
                      need: String(Ob)
                    })
                  })]
                }), (0, jG.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, jG.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Ub/Ob)}%`
                    }
                  })
                })]
              })]
            }, hb)
          })), Lb > 0 && (0, jG.jsxs)("li", {
            className: dO()("Baf2CoreChargePower", {
              Short: pb && !Yb
            }),
            children: [(0, jG.jsx)(Ta, {}), (0, jG.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, jG.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, jG.jsx)("span", {
                  children: Gb(`${Fa}coreChargePowerRow`, {
                    power: cb(Lb)
                  })
                })
              })
            })]
          })]
        }), (0, jG.jsx)("p", {
          className: "Baf2CoreHint",
          children: Gb(lb, Kb)
        }), !ob && (pb || Zb) && (0, jG.jsx)("button", {
          type: "button",
          className: dO()("Baf2CoreChargeToggle", {
            Stopped: Zb
          }),
          onClick: () => {
            Ob.send(db), Xb(!Zb)
          },
          children: Gb(Zb ? `${Fa}coreChargeRestart` : `${Fa}coreChargeStop`)
        })]
      })
    }

    function Qa(bb) {
      let {
        charge: ub,
        reached: hb,
        itemNames: Bb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)();
      return (0, jG.jsxs)("div", {
        className: dO()("Baf2CoreCharge", {
          Done: hb
        }),
        children: [(0, jG.jsxs)("h4", {
          children: [Ob(`${Fa}coreChargeTitle`), (0, jG.jsx)("span", {
            children: Ob(`${Fa}coreChargeSpecTime`, {
              time: fa(ub.seconds)
            })
          })]
        }), (0, jG.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [ub.items.map((bb => {
            var ub;
            let {
              item: Gb,
              amount: Ub
            } = bb;
            return (0, jG.jsxs)("li", {
              className: dO()({
                Done: hb
              }),
              children: [(0, jG.jsx)(ka, {
                item: Gb
              }), (0, jG.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, jG.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, jG.jsx)(gO.c, {
                    text: null !== (ub = Bb[Gb]) && void 0 !== ub ? ub : Gb
                  }), (0, jG.jsx)("span", {
                    children: Ob(`${Fa}coreChargeSpecItem`, {
                      need: String(Ub)
                    })
                  })]
                })
              })]
            }, Gb)
          })), ub.powerPerS > 0 && (0, jG.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, jG.jsx)(Ta, {}), (0, jG.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, jG.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, jG.jsx)("span", {
                  children: Ob(`${Fa}coreChargePowerRow`, {
                    power: cb(ub.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const Ra = "buildAFactory2Game:";

    function bH(bb) {
      let {
        def: ub,
        reached: hb,
        banked: Bb,
        itemNames: Ob
      } = bb;
      const {
        t: Gb
      } = (0, DO.K)();
      return (0, jG.jsx)("ul", {
        className: "Baf2CoreCost",
        children: ub.cost.map((bb => {
          let {
            item: ub,
            amount: Ub
          } = bb;
          const Lb = hb ? 0 : Bb(ub);
          return (0, jG.jsx)("li", {
            children: (0, jG.jsx)(Ja, {
              item: ub,
              itemNames: Ob,
              children: (0, jG.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: Lb > 0 ? Gb(`${Ra}coreBankedFor`, {
                  amount: String(Lb),
                  total: String(Ub)
                }) : `\xd7${Ub}`
              })
            })
          }, ub)
        }))
      })
    }

    function uH(bb, ub) {
      if (ub >= ab()) return bb(`${Ra}coreMaxTier`);
      const hb = Sb[ub + 1];
      return hb && !hb.startsWith("upgradeCore") ? bb(`${Ra}coreGateQuest`, {
        quest: bb(`${Ra}quest_${hb}`)
      }) : bb(`${Ra}coreGateClosed`)
    }

    function hH() {
      const {
        t: bb
      } = (0, DO.K)(), ub = IU(), hb = (0, Bb.useRef)(null), Ob = (0, Bb.useRef)(Date.now());
      return FS(!0, hb), (0, jG.jsx)("div", {
        ref: hb,
        className: "Baf2CoreGrow",
        children: (0, jG.jsx)(CU.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Ob.current >= 600 && ub.send(Kb)
          },
          children: bb(`${Ra}coreGrow`)
        })
      })
    }

    function BH(bb) {
      let {
        message: ub,
        itemNames: hb,
        next: Bb
      } = bb;
      const Ob = IU(),
        {
          t: Gb
        } = (0, DO.K)(),
        Ub = ub.baf2CoreTier,
        Lb = ub.baf2CoreReady,
        Yb = ub.baf2CoreNeeds.filter((bb => {
          let [, ub, hb, Bb] = bb;
          return Bb > 0 && ub < hb
        })),
        Sb = ub.baf2CoreNeeds.every((bb => {
          let [, ub, hb] = bb;
          return ub >= hb
        })),
        ab = ub.baf2CoreKeep;
      return (0, jG.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, jG.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [Lb && (0, jG.jsx)(hH, {}), (0, jG.jsx)("h3", {
            children: Gb(`${Ra}coreBring`)
          }), (0, jG.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: ub.baf2CoreNeeds.map((bb => {
              let [ub, Bb, Ub, Lb] = bb;
              return (0, jG.jsxs)("li", {
                className: dO()({
                  Done: Bb >= Ub
                }),
                children: [(0, jG.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, jG.jsx)(zO.d, {
                    itemName: ub,
                    amount: 0
                  })
                }), (0, jG.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, jG.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, jG.jsx)(gO.c, {
                      text: hb[ub]
                    }), (0, jG.jsxs)("span", {
                      children: [Bb, "/", Ub]
                    })]
                  }), (0, jG.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, jG.jsx)("div", {
                      style: {
                        width: 100 * Bb / Ub + "%"
                      }
                    }), Lb > 0 && (0, jG.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * Lb / Ub + "%"
                      }
                    })]
                  })]
                }), Lb > 0 && Bb < Ub && (0, jG.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Ob.send(`${Cb} ${ub}`)
                  },
                  children: Gb(`${Ra}coreDeposit`, {
                    amount: String(Lb)
                  })
                })]
              }, ub)
            }))
          }), ub.baf2CoreCharge && (0, jG.jsx)(ca, {
            charge: ub.baf2CoreCharge,
            hint: ub.baf2CoreChargeHint,
            itemNames: hb
          }), !Lb && Yb.length > 1 && (0, jG.jsx)(CU.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Ob.send(Kb)
            },
            children: Gb(`${Ra}coreHandOver`)
          }), !Lb && void 0 !== ab && (0, jG.jsx)("p", {
            className: "Baf2CoreHint",
            children: Gb(`${Ra}coreKeepRest`, {
              item: BG(Gb, ab)
            })
          }), !Lb && !Sb && 0 === Yb.length && void 0 === ab && (0, jG.jsx)("p", {
            className: "Baf2CoreHint",
            children: Gb(`${Ra}coreNothingHeld`)
          }), (0, jG.jsx)(Va, {
            message: ub,
            itemNames: hb
          })]
        }), (0, jG.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, jG.jsx)("h3", {
            children: Gb(`${Ra}coreRewards`)
          }), (0, jG.jsx)(Ma, {
            def: Bb,
            tier: Ub + 1,
            itemNames: hb
          })]
        })]
      })
    }

    function OH(bb) {
      let {
        message: ub,
        itemNames: hb,
        shown: Bb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)(), Gb = ub.baf2CoreTier, Ub = Ab(Bb), Lb = Bb <= Gb, Yb = new Map(ub.baf2CoreBanked), Sb = !lb(Gb, rb(ub)) && Bb === Gb;
      return (0, jG.jsxs)("div", {
        className: dO()("Baf2CoreBody", {
          Locked: !Lb
        }),
        children: [(0, jG.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, jG.jsx)("h3", {
            children: Ob(Lb ? `${Ra}coreItTook` : `${Ra}coreItNeeds`)
          }), 0 === Ub.cost.length && (0, jG.jsx)("p", {
            className: "Baf2CoreHint",
            children: Ob(`${Ra}coreTierStart`)
          }), Ub.cost.length > 0 && (0, jG.jsx)(bH, {
            def: Ub,
            reached: Lb,
            banked: bb => {
              var ub;
              return function(bb, ub, hb, Bb) {
                let Ob = bb;
                for (let Ub = ub + 2; Ub <= hb; Ub++) {
                  var Gb;
                  const bb = Ab(Ub).cost.find((bb => bb.item === Bb)),
                    ub = Math.min(Ob, null !== (Gb = null === bb || void 0 === bb ? void 0 : bb.amount) && void 0 !== Gb ? Gb : 0);
                  if (Ub === hb) return ub;
                  Ob -= ub
                }
                return 0
              }(null !== (ub = Yb.get(bb)) && void 0 !== ub ? ub : 0, Gb, Bb, bb)
            },
            itemNames: hb
          }), Ub.charge && (0, jG.jsx)(Qa, {
            charge: Ub.charge,
            reached: Lb,
            itemNames: hb
          }), Sb && (0, jG.jsxs)(jG.Fragment, {
            children: [(0, jG.jsx)("p", {
              className: "Baf2CoreHint",
              children: uH(Ob, Gb)
            }), (0, jG.jsx)(Va, {
              message: ub,
              itemNames: hb
            })]
          })]
        }), (0, jG.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, jG.jsx)("h3", {
            children: Ob(Lb ? `${Ra}coreGave` : `${Ra}coreLockedRewards`)
          }), (0, jG.jsx)(Ma, {
            def: Ub,
            tier: Bb,
            itemNames: hb
          })]
        })]
      })
    }

    function GH(bb, ub) {
      const {
        key: hb,
        params: Bb
      } = Zb(ub - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return bb(`${Ra}${hb}`, Bb)
    }
    const UH = "buildAFactory2Game:",
      LH = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      YH = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function SH(bb) {
      let {
        view: ub,
        close: hb,
        askIslands: Ob
      } = bb;
      const {
        t: Gb
      } = (0, DO.K)(), [Ub, Lb] = (0, Bb.useState)(!1);
      (0, Bb.useEffect)((() => {
        if (!Ub) return;
        const bb = window.setTimeout((() => {
          Lb(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(bb)
        }
      }), [Ub]);
      const {
        message: Yb,
        itemNames: Sb
      } = ub, ab = Yb.baf2CoreTier, Hb = Ab(ab), wb = lb(ab, rb(Yb)), [pb, ob] = Yb.baf2CoreMachines, [Kb, Wb] = Yb.baf2CoreBelts, Cb = Yb.baf2CoreStorage, db = Yb.baf2CoreReady, [jb, nb] = (0, Bb.useState)(null), Db = (null === jb || void 0 === jb ? void 0 : jb.at) === ab && jb.ready === db ? jb.tier : wb ? ab + 1 : ab;
      let xb = "coreTierLocked";
      Db <= ab ? xb = "coreTierReached" : Db === ab + 1 && (xb = "coreTierNext");
      const zb = Gb(`${UH}${Ab(Db).nameKey}`),
        gb = Db === ab + 1 ? wb : null,
        ib = Zb(Db, {
          tier: xb,
          stage: LH[xb],
          atomic: YH[xb]
        }),
        vb = Gb(`${UH}${ib.key}`, {
          ...ib.params,
          name: zb
        }),
        tb = Zb(ab, Xb),
        Jb = Gb(`${UH}${tb.key}`, {
          ...tb.params,
          name: Gb(`${UH}${Hb.nameKey}`)
        });
      return (0, jG.jsx)(WU.b, {
        close: hb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, jG.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsxs)("div", {
              children: [(0, jG.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Gb(`${UH}coreTitle`)
              }), void 0 !== Yb.baf2CoreIslandName && (0, jG.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Yb.baf2CoreIslandName
              }), (0, jG.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, jG.jsx)("span", {
                  children: Jb
                }), (0, jG.jsx)("span", {
                  className: dO()({
                    Full: pb >= ob
                  }),
                  children: Gb(`${UH}coreMachineCount`, {
                    amount: String(pb),
                    total: String(ob)
                  })
                }), (0, jG.jsx)("span", {
                  className: dO()({
                    Full: Kb >= Wb
                  }),
                  children: Gb(`${UH}coreBeltCount`, {
                    amount: String(Kb),
                    total: String(Wb)
                  })
                }), void 0 !== Cb && (0, jG.jsx)("span", {
                  className: dO()({
                    Full: Cb[0] >= Cb[1]
                  }),
                  children: Gb(`${UH}coreStorageCount`, {
                    amount: String(Cb[0]),
                    total: String(Cb[1])
                  })
                })]
              })]
            }), (0, jG.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Yb.baf2CoreIslands && (0, jG.jsx)(CU.e, {
                className: "Baf2CoreIslandsButton",
                disabled: Ub,
                onClick: () => {
                  Lb(!0), Ob()
                },
                children: Gb(`${UH}islandsOpenButton`)
              }), (0, jG.jsx)(CU.i, {
                onClick: hb
              })]
            })]
          }), (0, jG.jsx)(va, {
            tier: ab,
            shown: Db,
            xw: bb => {
              nb({
                tier: bb,
                at: ab,
                ready: db
              })
            }
          }), (0, jG.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [vb, Db > ab + 1 && (0, jG.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: GH(Gb, Db)
            })]
          }), 6 === Db && Db > ab && (0, jG.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Gb(`${UH}coreStagesNote`)
          }), 11 === Db && Db > ab && (0, jG.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Gb(`${UH}coreAtomicNote`)
          }), gb && (0, jG.jsx)(BH, {
            message: Yb,
            itemNames: Sb,
            next: gb
          }), !gb && (0, jG.jsx)(OH, {
            message: Yb,
            itemNames: Sb,
            shown: Db
          })]
        })
      })
    }
    const aH = {
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
    const HH = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: LG,
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

    function wH(bb) {
      return bb.baf2DropCometOreOnly ? "dropCometOre" : bb.baf2DropCometIsotope ? "seed" === bb.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function ZH(bb) {
      let {
        message: ub,
        quests: hb,
        close: Ob,
        leave: Gb
      } = bb;
      const Ub = IU(),
        {
          t: Lb
        } = (0, DO.K)(),
        Yb = (0, ha.k)(eO, hb.get()),
        Sb = function(bb) {
          var ub;
          if (!tb(bb.tutorial)) return null;
          const hb = bb.rows.find((bb => bb.current)),
            Bb = hb ? aH[hb.key] : void 0;
          return null !== (ub = null !== Bb && void 0 !== Bb ? Bb : bb.side ? aH[bb.side.row.key] : void 0) && void 0 !== ub ? ub : null
        }(Yb),
        ab = null === Yb.tier || aG(Yb.tier),
        Hb = ab ? HH : HH.filter((bb => {
          let {
            item: ub
          } = bb;
          return ub !== LG
        })),
        [wb, Zb] = (0, Bb.useState)(null),
        Xb = null !== wb && void 0 !== wb ? wb : !ub.baf2DropFoundSalvage && ab,
        pb = ub.baf2DropRuinDistance,
        ob = ub.baf2DropComet,
        Ab = ub.baf2DropOldWorks,
        lb = ub.baf2DropGrove,
        Kb = function(bb) {
          return 2 + Number(void 0 !== bb.baf2DropComet) + Number(!!bb.baf2DropOwedComet || void 0 !== bb.baf2DropOwedWaitMinutes) + Number(void 0 !== bb.baf2DropDigDistance) + Number(void 0 !== bb.baf2DropOldWorks) + Number(void 0 !== bb.baf2DropGrove)
        }(ub),
        Wb = bb => {
          Ub.send(function(bb) {
            return `baf2drop ${bb}`
          }(bb)), Gb()
        };
      let Cb = Lb("buildAFactory2Game:dropRuinNone");
      if (null !== pb) {
        let bb = ub.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        ub.baf2DropRuinOldWorks && (bb = "dropRuinOldWorks");
        const hb = void 0 === ub.baf2DropRuinCluster ? Lb("buildAFactory2Game:dropRuinOpen") : Lb("buildAFactory2Game:dropRuinCluster", {
          count: String(ub.baf2DropRuinCluster)
        });
        Cb = `${Lb(`buildAFactory2Game:${bb}`,{distance:String(pb)})} ${hb}`
      }
      let db = Lb("buildAFactory2Game:dropBelowDescription");
      void 0 !== ub.baf2DropBelowLook && (db = Lb("buildAFactory2Game:dropBelowLook", {
        look: Lb(ub.baf2DropBelowLook)
      }));
      const rb = "buildAFactory2Game:wildsRegion_survivorGrove" === ub.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        jb = WG(Lb, 60 * function(bb) {
          const [ub, hb] = (0, Bb.useState)((() => Date.now())), [Ob, Gb] = (0, Bb.useState)(ub);
          return (0, Bb.useEffect)((() => {
            const bb = Date.now();
            hb(bb), Gb(bb)
          }), [bb]), (0, Bb.useEffect)((() => {
            const bb = window.setInterval((() => {
              Gb(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(bb)
            }
          }), []), Math.max(1, bb.baf2DropRenewMinutes - Math.floor((Ob - ub) / 6e4))
        }(ub)),
        nb = function(bb, ub, hb) {
          return "ruin" === bb && !hb || "owed" === bb && !ub.baf2DropOwedComet ? null : bb
        }(Sb, ub, null !== pb),
        Db = function(bb) {
          for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
          return dO()("Baf2DropTile", ...hb, {
            Wanted: nb === bb
          })
        };
      return (0, jG.jsx)(WU.b, {
        close: Ob,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, jG.jsxs)("section", {
          className: dO()("Baf2Panel Baf2DropMap", {
            Many: Kb >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsxs)("div", {
              children: [(0, jG.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: Lb("buildAFactory2Game:dropMapTitle")
              }), (0, jG.jsx)("p", {
                children: Lb("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, jG.jsx)(CU.i, {
              onClick: Ob
            })]
          }), (0, jG.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== ob && (0, jG.jsxs)(CU.v, {
              className: Db("comet", "Baf2DropComet"),
              onClick: () => {
                Wb("comet")
              },
              children: [(0, jG.jsx)("strong", {
                children: Lb("buildAFactory2Game:dropComet")
              }), (0, jG.jsx)("span", {
                children: Lb(`buildAFactory2Game:${wH(ub)}`, {
                  distance: String(ob)
                })
              })]
            }), ub.baf2DropOwedComet && (0, jG.jsxs)(CU.v, {
              className: Db("owed", "Baf2DropComet"),
              onClick: () => {
                Wb("owed")
              },
              children: [(0, jG.jsx)("strong", {
                children: Lb("buildAFactory2Game:dropOwedComet")
              }), (0, jG.jsx)("span", {
                children: ub.baf2DropOwedIsotope ? Lb("buildAFactory2Game:dropOwedIsotopeDescription") : Lb("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== ub.baf2DropOwedWaitMinutes && (0, jG.jsxs)(CU.v, {
              className: Db("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, jG.jsx)("strong", {
                children: Lb("buildAFactory2Game:dropOwedComet")
              }), (0, jG.jsx)("span", {
                children: Lb("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(ub.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, jG.jsxs)(CU.e, {
              className: Db("below"),
              onClick: () => {
                Wb("below")
              },
              children: [(0, jG.jsx)("strong", {
                children: Lb("buildAFactory2Game:dropBelow")
              }), (0, jG.jsx)("span", {
                children: db
              })]
            }), void 0 !== ub.baf2DropDigDistance && (0, jG.jsxs)(CU.q, {
              className: Db("dig"),
              onClick: () => {
                Wb("dig")
              },
              children: [(0, jG.jsx)("strong", {
                children: Lb("buildAFactory2Game:dropDig")
              }), (0, jG.jsx)("span", {
                children: Lb("buildAFactory2Game:dropDigDescription", {
                  distance: String(ub.baf2DropDigDistance),
                  y: KG(ub.baf2DropDigY)
                })
              })]
            }), void 0 !== lb && (0, jG.jsxs)(CU.q, {
              className: Db("grove", "Baf2DropGrove"),
              onClick: () => {
                Wb("grove")
              },
              children: [(0, jG.jsx)("strong", {
                children: Lb("buildAFactory2Game:dropGrove")
              }), (0, jG.jsx)("span", {
                children: Lb(`buildAFactory2Game:${rb}`, {
                  distance: String(lb)
                })
              })]
            }), (0, jG.jsxs)(CU.m, {
              className: Db("ruin"),
              disabled: null === pb,
              onClick: () => {
                Wb("ruin")
              },
              children: [(0, jG.jsx)("strong", {
                children: Lb("buildAFactory2Game:dropRuin")
              }), (0, jG.jsx)("span", {
                children: Cb
              })]
            }), void 0 !== Ab && (0, jG.jsxs)(CU.H, {
              className: Db("works"),
              onClick: () => {
                Wb("works")
              },
              children: [(0, jG.jsx)("strong", {
                children: Lb("buildAFactory2Game:dropOldWorks")
              }), (0, jG.jsx)("span", {
                children: Lb("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(Ab)
                })
              })]
            })]
          }), (0, jG.jsx)("p", {
            className: "Baf2DropRenew",
            children: Lb("buildAFactory2Game:dropRenew", {
              time: jb
            })
          }), (0, jG.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: Xb,
            onToggle: bb => {
              bb.currentTarget.open !== Xb && Zb(bb.currentTarget.open)
            },
            children: [(0, jG.jsx)("summary", {
              children: Lb("buildAFactory2Game:dropSalvageWhat")
            }), (0, jG.jsx)("p", {
              children: Lb("buildAFactory2Game:dropSalvageIntro")
            }), (0, jG.jsx)("ul", {
              children: Hb.map((bb => {
                let {
                  item: ub,
                  nameKey: hb,
                  useKey: Bb,
                  params: Ob
                } = bb;
                return (0, jG.jsxs)("li", {
                  children: [(0, jG.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, jG.jsx)(zO.d, {
                      itemName: ub,
                      amount: 0
                    })
                  }), (0, jG.jsxs)("span", {
                    children: [(0, jG.jsx)("strong", {
                      children: Lb(hb)
                    }), ": ", Lb(Bb, Ob)]
                  })]
                }, ub)
              }))
            })]
          })]
        })
      })
    }
    const XH = "buildAFactory2Game:";

    function pH(bb, ub) {
      return bb.sendIslandEdit(`baf2coopleave ${ub.baf2IslandId}`)
    }

    function oH(bb) {
      let {
        card: ub,
        canRename: hb,
        done: Ob,
        t: Gb
      } = bb;
      const Ub = IU(),
        [Lb, Yb] = (0, Bb.useState)(ub.baf2IslandName),
        Sb = WS(Lb),
        ab = "" === Sb || CS(Sb),
        Hb = () => {
          !ab && hb && (Sb !== ub.baf2IslandName ? Ob(Ub.sendIslandEdit(`baf2islandrename ${ub.baf2IslandId} ${Sb}`)) : Ob(null))
        },
        wb = () => {
          Ob(null)
        };
      return (0, jG.jsxs)("div", {
        className: "Baf2IslandForm",
        ...yS(wb),
        children: [(0, jG.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Gb(`${XH}islandsRenameLabel`), (0, jG.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Lb,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: VS,
            onChange: bb => {
              Yb(bb.target.value)
            },
            ...ES(Hb, wb)
          })]
        }), "" === Sb && (0, jG.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Gb(`${XH}islandsRenameEmpty`)
        }), CS(Sb) && (0, jG.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Gb(`${XH}islandsNameReserved`)
        }), (0, jG.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, jG.jsx)(CU.q, {
            disabled: ab || !hb,
            onClick: Hb,
            children: Gb(`${XH}islandsRenameSave`)
          }), (0, jG.jsx)(CU.e, {
            onClick: wb,
            children: Gb(`${XH}islandsCancel`)
          })]
        })]
      })
    }

    function AH(bb) {
      let {
        card: ub,
        canDelete: hb,
        done: Ob,
        t: Gb
      } = bb;
      const Ub = IU(),
        [Lb, Yb] = (0, Bb.useState)(""),
        Sb = function(bb, ub) {
          return WS(bb).toLowerCase() === WS(ub).toLowerCase()
        }(Lb, ub.baf2IslandName),
        ab = () => {
          Sb && hb && Ob(Ub.sendIslandEdit(`baf2islanddelete ${ub.baf2IslandId}`))
        },
        Hb = () => {
          Ob(null)
        },
        wb = tS("name"),
        [Zb, Xb = ""] = Gb(`${XH}islandsDeleteConfirm`, {
          name: wb
        }).split(wb);
      return (0, jG.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...yS(Hb),
        children: [(0, jG.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, jG.jsxs)("span", {
            children: [Zb, (0, jG.jsx)("strong", {
              children: ub.baf2IslandName
            }), Xb]
          }), (0, jG.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Lb,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: VS,
            onChange: bb => {
              Yb(bb.target.value)
            },
            ...ES(ab, Hb)
          })]
        }), mS(ub) && (0, jG.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Gb(`${XH}islandsDeleteLeftBack`)
        }), (0, jG.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, jG.jsx)(CU.H, {
            disabled: !Sb || !hb,
            onClick: ab,
            children: Gb(`${XH}islandsDeleteForGood`)
          }), (0, jG.jsx)(CU.e, {
            onClick: Hb,
            children: Gb(`${XH}islandsCancel`)
          })]
        })]
      })
    }

    function lH(bb) {
      let {
        members: ub,
        t: hb
      } = bb;
      const Bb = ub.length;
      return (0, jG.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, jG.jsxs)("span", {
          children: [1 === Bb ? hb(`${XH}islandsPlayersOne`) : hb(`${XH}islandsPlayers`, {
            count: String(Bb)
          }), " "]
        }), ub.map(((bb, ub) => (0, jG.jsxs)("span", {
          className: dO()("Baf2IslandMember", {
            Here: bb.baf2MemberHere
          }),
          title: bb.baf2MemberHere ? hb(`${XH}islandsPlayerHere`) : void 0,
          children: [bb.baf2MemberName, ub < Bb - 1 ? ", " : ""]
        }, bb.baf2MemberKey)))]
      })
    }

    function KH(bb) {
      let {
        card: ub,
        answered: hb,
        nowMs: Ob,
        t: Gb
      } = bb;
      const Ub = IU(),
        [Lb, Yb] = (0, Bb.useState)(new Map),
        Sb = mS(ub);
      if (!Sb) return null;
      return (0, jG.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, jG.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Gb(`${XH}islandsLeftTitle`)
        }), (0, jG.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Sb.left.map((bb => {
            const Bb = bb.baf2LeftKey,
              ab = PS(Lb.get(Bb), hb, Ob),
              Hb = function(bb) {
                return 1 === bb ? [`${oS}islandsLeftItemsOne`] : [`${oS}islandsLeftItems`, {
                  count: String(bb)
                }]
              }(bb.baf2LeftItems);
            return (0, jG.jsx)("li", {
              className: dO()("Baf2IslandPerson", {
                Pending: ab
              }),
              children: (0, jG.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, jG.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: bb.baf2LeftName
                }), (0, jG.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Gb(Hb[0], Hb[1])
                }), Sb.claim && (0, jG.jsx)(CU.q, {
                  className: "Baf2IslandPersonButton",
                  disabled: ab,
                  onClick: () => {
                    (bb => {
                      const hb = Ub.sendIslandEdit(`baf2coopclaim ${ub.baf2IslandId} ${bb}`);
                      Yb((ub => new Map(ub).set(bb, {
                        atMs: Date.now(),
                        answer: hb
                      })))
                    })(Bb)
                  },
                  children: Gb(`${XH}islandsClaim`)
                })]
              })
            }, Bb)
          }))
        }), Sb.goThere && (0, jG.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Gb(`${XH}islandsClaimGoThere`)
        })]
      })
    }

    function WH(bb) {
      let {
        card: ub,
        view: hb,
        blocked: Ob,
        maxIslands: Gb,
        answered: Ub,
        nowMs: Lb,
        done: Yb,
        openSocial: Sb,
        t: ab
      } = bb;
      const Hb = IU(),
        [wb, Zb] = (0, Bb.useState)(new Map),
        [Xb, pb] = (0, Bb.useState)(new Map),
        [ob, Ab] = (0, Bb.useState)(null),
        lb = (0, Bb.useRef)(null);
      TS(lb);
      const Kb = ub.baf2IslandId,
        Wb = ub.baf2IslandCoop,
        Cb = null !== Wb && void 0 !== Wb && Wb.baf2CoopMembers.some((bb => bb.baf2MemberKey === ob)) ? ob : null,
        db = function(bb, ub) {
          const hb = bb.baf2IslandCoop;
          return hb && IS(hb) || null !== ub ? void 0 : bb.baf2IslandInvitable
        }(ub, Ob),
        rb = function(bb, ub) {
          const hb = bb.baf2IslandCoop;
          return hb && IS(hb) ? {
            key: `${oS}islandsCoopFull`,
            params: {
              max: String(hb.baf2CoopMax)
            }
          } : void 0 !== bb.baf2IslandInvitable && null === ub || hb && !hb.baf2CoopManageHere ? null : "degraded" === ub || "stuck" === ub ? {
            key: `${oS}islandsInviteNotLoaded`
          } : null === ub || function(bb) {
            return "notHome" === bb || "wilds" === bb || "visiting" === bb
          }(ub) || nS(ub) ? {
            key: `${oS}islandsInviteGoThere`
          } : {
            key: `${oS}islandsInviteBusy`
          }
        }(ub, Ob),
        jb = () => {
          var bb;
          Ab(null), null === (bb = lb.current) || void 0 === bb || bb.focus()
        };
      return (0, jG.jsxs)("div", {
        ref: lb,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...yS(null === Cb ? Yb : jb),
        children: [Wb && (0, jG.jsxs)(jG.Fragment, {
          children: [(0, jG.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: ab(`${XH}islandsPlayersTitle`, {
              count: String(Wb.baf2CoopMembers.length),
              max: String(Wb.baf2CoopMax)
            })
          }), (0, jG.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: Wb.baf2CoopMembers.map(((bb, ub) => {
              const Bb = bb.baf2MemberKey,
                Ob = PS(wb.get(Bb), Ub, Lb);
              return (0, jG.jsxs)("li", {
                className: dO()("Baf2IslandPerson", {
                  Pending: Ob
                }),
                children: [(0, jG.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, jG.jsx)("span", {
                    className: dO()("Baf2IslandPersonName", {
                      Here: bb.baf2MemberHere
                    }),
                    children: bb.baf2MemberName
                  }), bb.baf2MemberHere && (0, jG.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: ab(`${XH}islandsPlayerHere`)
                  }), 0 === ub && (0, jG.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: ab(`${XH}islandsPlayerOwner`)
                  }), hb.remove && ub > 0 && !Ob && Cb !== Bb && (0, jG.jsx)(CU.I, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var bb;
                      Ab(Bb), null === (bb = lb.current) || void 0 === bb || bb.focus()
                    },
                    children: ab(`${XH}islandsRemove`)
                  })]
                }), Cb === Bb && (0, jG.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, jG.jsx)("p", {
                    children: JS(ab, `${XH}islandsRemoveConfirm`, {
                      player: bb.baf2MemberName
                    })
                  }), (0, jG.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, jG.jsx)(CU.H, {
                      onClick: () => {
                        (bb => {
                          const ub = Hb.sendIslandEdit(`baf2coopremove ${Kb} ${bb.baf2MemberKey}`);
                          Zb((hb => new Map(hb).set(bb.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: ub
                          }))), jb()
                        })(bb)
                      },
                      children: ab(`${XH}islandsRemoveYes`)
                    }), (0, jG.jsx)(CU.e, {
                      onClick: jb,
                      children: ab(`${XH}islandsCancel`)
                    })]
                  })]
                })]
              }, Bb)
            }))
          })]
        }), (void 0 !== db || null !== rb) && (0, jG.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: ab(`${XH}islandsInviteTitle`)
        }), !Wb && (void 0 !== db || null !== rb) && (0, jG.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ab(`${XH}islandsInviteShareNote`)
        }), 0 === (null === db || void 0 === db ? void 0 : db.length) && (0, jG.jsx)(CH, {
          openSocial: Sb,
          t: ab
        }), void 0 !== db && db.length > 0 && (0, jG.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: db.map((bb => {
            const ub = !0 === bb.baf2InvitableSent || PS(Xb.get(bb.baf2InvitableId), Ub, Lb);
            return (0, jG.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, jG.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, jG.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: bb.baf2InvitableName
                }), bb.baf2InvitableFull && !ub && (0, jG.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: ab(`${XH}islandsInviteTheirFull`, {
                    max: String(Gb)
                  })
                }), (ub || !bb.baf2InvitableFull) && (0, jG.jsx)(CU.q, {
                  className: "Baf2IslandPersonButton",
                  disabled: ub,
                  onClick: () => {
                    (bb => {
                      const ub = Hb.sendIslandEdit(`baf2coopinvite ${Kb} ${bb}`);
                      pb((hb => new Map(hb).set(bb, {
                        atMs: Date.now(),
                        answer: ub
                      })))
                    })(bb.baf2InvitableId)
                  },
                  children: ab(ub ? `${XH}islandsInvited` : `${XH}islandsInvite`)
                })]
              })
            }, bb.baf2InvitableId)
          }))
        }), rb && (0, jG.jsx)(RS, {
          note: rb,
          t: ab
        }), (0, jG.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, jG.jsx)(CU.e, {
            onClick: Yb,
            children: ab(`${XH}islandsDone`)
          })
        })]
      })
    }

    function CH(bb) {
      let {
        openSocial: ub,
        t: hb
      } = bb;
      return (0, jG.jsxs)(jG.Fragment, {
        children: [(0, jG.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: hb(ub ? `${XH}islandsInviteNobody` : `${XH}islandsInviteNobodyGuest`)
        }), ub && (0, jG.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, jG.jsx)(CU.e, {
            onClick: ub,
            children: hb("socialBar:social")
          })
        })]
      })
    }

    function dH(bb) {
      let {
        className: ub,
        text: hb,
        ConfirmButton: Ob,
        confirmLabel: Gb,
        canConfirm: Ub,
        send: Lb,
        done: Yb,
        t: Sb
      } = bb;
      const ab = (0, Bb.useRef)(null);
      TS(ab);
      const Hb = () => {
        Yb(null)
      };
      return (0, jG.jsxs)("div", {
        ref: ab,
        tabIndex: -1,
        className: dO()("Baf2IslandForm", ub),
        ...yS(Hb),
        children: [(0, jG.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: hb
        }), (0, jG.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, jG.jsx)(Ob, {
            disabled: !Ub,
            onClick: () => {
              Ub && Yb(Lb())
            },
            children: Gb
          }), (0, jG.jsx)(CU.e, {
            onClick: Hb,
            children: Sb(`${XH}islandsCancel`)
          })]
        })]
      })
    }

    function rH(bb) {
      return "hidden" !== bb
    }

    function jH(bb) {
      var ub, hb;
      let {
        card: Ob,
        keepOwn: Gb,
        blocked: Ub,
        maxIslands: Lb,
        serverNowMs: Yb,
        nowMs: Sb,
        actions: ab,
        full: Hb,
        waits: wb,
        answered: Zb,
        mode: Xb,
        setMode: pb,
        pending: ob,
        onSent: Ab,
        switchTo: lb,
        leave: Kb,
        coopOn: Wb,
        openSocial: Cb,
        t: db
      } = bb;
      const rb = IU(),
        jb = Ob.baf2IslandActive,
        nb = jb ? null : function(bb, ub) {
          if (bb <= 0) return null;
          const hb = ub - bb;
          if (hb < pG) return [`${oS}islandsPlayedJustNow`];
          if (hb < AS) return [`${oS}islandsPlayedMinutes`, {
            minutes: String(Math.floor(hb / pG))
          }];
          if (hb < lS) return [`${oS}islandsPlayedHours`, {
            hours: String(Math.floor(hb / AS))
          }];
          const Bb = Math.floor(hb / lS);
          return 1 === Bb ? [`${oS}islandsPlayedDay`] : [`${oS}islandsPlayedDays`, {
            days: String(Bb)
          }]
        }(Ob.baf2IslandLastPlayedMs, Yb),
        Db = void 0 === (xb = Ob.baf2IslandItems) ? null : 0 === xb ? [`${oS}islandsItemsNone`] : 1 === xb ? [`${oS}islandsItemsOne`] : [`${oS}islandsItems`, {
          count: String(xb)
        }];
      var xb;
      const zb = function(bb) {
          return bb ? 1 === bb ? [`${oS}islandsWaitingOne`] : [`${oS}islandsWaiting`, {
            count: String(bb)
          }] : null
        }(Ob.baf2IslandWaiting),
        gb = Ob.baf2IslandUnreadable,
        ib = Ob.baf2IslandCoop,
        vb = MS(Ob, ab, Gb, Hb, Wb, Ub),
        tb = (0, Bb.useRef)(null);
      FS(null !== Xb, tb);
      const Jb = () => {
          var bb;
          pb(null), null === (bb = tb.current) || void 0 === bb || bb.focus()
        },
        eb = (bb, ub) => {
          Jb(), null !== bb && Ab(bb, ub)
        },
        Nb = (bb, ub) => db(`${XH}${bb}`, {
          time: WG(db, ub)
        });
      return (0, jG.jsxs)("li", {
        ref: tb,
        tabIndex: -1,
        className: dO()("Baf2IslandCard", {
          Active: jb,
          Pending: ob,
          Shared: void 0 !== ib
        }),
        children: [(0, jG.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, jG.jsx)("strong", {
            className: "Baf2IslandName",
            children: Ob.baf2IslandName
          }), jb && (0, jG.jsx)("span", {
            className: "Baf2IslandBadge",
            children: db(`${XH}islandsOnThis`)
          }), ib && (0, jG.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: db(`${XH}islandsShared`)
          })]
        }), "member" === (null === ib || void 0 === ib ? void 0 : ib.baf2CoopRole) && (0, jG.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: JS(db, `${XH}islandsSharedBy`, {
            owner: ib.baf2CoopOwner
          })
        }), void 0 !== gb && (0, jG.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: db("newer" === gb ? `${XH}islandsUnreadable` : `${XH}islandsDamaged`)
        }), "corrupt" === gb && Hb && (0, jG.jsx)("p", {
          className: "Baf2IslandStats",
          children: db(`${XH}islandsDamagedFull`)
        }), void 0 === gb && (0, jG.jsxs)(jG.Fragment, {
          children: [(0, jG.jsx)(QS, {
            tier: Ob.baf2IslandTier,
            t: db
          }), (0, jG.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, jG.jsx)("span", {
              children: 1 === Ob.baf2IslandQuestsDone ? db(`${XH}islandsQuestsDoneOne`) : db(`${XH}islandsQuestsDone`, {
                count: String(Ob.baf2IslandQuestsDone)
              })
            }), (0, jG.jsx)("span", {
              children: 1 === Ob.baf2IslandMachines ? db(`${XH}islandsMachinesOne`) : db(`${XH}islandsMachines`, {
                count: String(Ob.baf2IslandMachines)
              })
            }), Db && (0, jG.jsx)("span", {
              children: db(Db[0], Db[1])
            }), zb && (0, jG.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: db(zb[0], zb[1])
            }), nb && (0, jG.jsx)("span", {
              children: db(nb[0], nb[1])
            })]
          })]
        }), ib && void 0 === ib.baf2CoopState && "people" !== Xb && (0, jG.jsx)(lH, {
          members: ib.baf2CoopMembers,
          t: db
        }), null === Xb && (0, jG.jsx)(KH, {
          card: Ob,
          answered: Zb,
          nowMs: Sb,
          t: db
        }), vb.note && (0, jG.jsx)(RS, {
          note: vb.note,
          className: dO()({
            Unreachable: void 0 !== (null === ib || void 0 === ib ? void 0 : ib.baf2CoopState)
          }),
          t: db
        }), "rename" === Xb && (0, jG.jsx)(oH, {
          card: Ob,
          canRename: "enabled" === vb.rename,
          done: eb,
          t: db
        }), "delete" === Xb && (0, jG.jsx)(AH, {
          card: Ob,
          canDelete: "enabled" === vb.delete,
          done: bb => {
            eb(bb, ib ? "delete" : void 0)
          },
          t: db
        }), "people" === Xb && (0, jG.jsx)(WH, {
          card: Ob,
          view: vb,
          blocked: Ub,
          maxIslands: Lb,
          answered: Zb,
          nowMs: Sb,
          done: Jb,
          openSocial: Cb,
          t: db
        }), "leave" === Xb && (0, jG.jsx)(dH, {
          className: "Leave",
          text: JS(db, `${XH}islandsLeaveConfirm`, {
            island: Ob.baf2IslandName,
            owner: null !== (ub = null === (hb = Ob.baf2IslandCoop) || void 0 === hb ? void 0 : hb.baf2CoopOwner) && void 0 !== ub ? ub : ""
          }),
          ConfirmButton: CU.H,
          confirmLabel: db(`${XH}islandsLeaveYes`),
          canConfirm: "enabled" === vb.leave,
          send: () => pH(rb, Ob),
          done: bb => {
            eb(bb, "leave"), null !== bb && jb && Kb()
          },
          t: db
        }), "unshare" === Xb && (0, jG.jsx)(dH, {
          className: "Unshare",
          text: JS(db, `${XH}islandsStopSharingConfirm`, {
            island: Ob.baf2IslandName
          }),
          ConfirmButton: CU.q,
          confirmLabel: db(`${XH}islandsStopSharing`),
          canConfirm: "enabled" === vb.unshare,
          send: () => rb.sendIslandEdit(`baf2coopunshare ${Ob.baf2IslandId}`),
          done: bb => {
            eb(bb), null !== bb && Kb()
          },
          t: db
        }), null === Xb && !ob && (0, jG.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Ob.baf2IslandName,
          children: [rH(vb.switch) && (0, jG.jsx)(CU.q, {
            disabled: "enabled" !== vb.switch,
            onClick: lb,
            children: "tryAgain" === vb.switchLabel ? db(`${XH}islandsTryAgain`) : wb.switch > 0 ? Nb("islandsSwitchIn", wb.switch) : db(`${XH}islandsSwitch`)
          }), rH(vb.rename) && (0, jG.jsx)(CU.e, {
            disabled: "enabled" !== vb.rename,
            onClick: () => {
              pb("rename")
            },
            children: db(`${XH}islandsRename`)
          }), rH(vb.people) && (0, jG.jsx)(CU.e, {
            disabled: "enabled" !== vb.people,
            onClick: () => {
              pb("people")
            },
            children: db("players" === vb.peopleLabel ? `${XH}islandsPlayersButton` : `${XH}islandsInviteButton`)
          }), rH(vb.unshare) && (0, jG.jsx)(CU.e, {
            disabled: "enabled" !== vb.unshare,
            onClick: () => {
              pb("unshare")
            },
            children: db(`${XH}islandsStopSharing`)
          }), rH(vb.dismiss) && (0, jG.jsx)(CU.e, {
            disabled: "enabled" !== vb.dismiss,
            onClick: () => {
              Ab(pH(rb, Ob), "dismiss"), jb && Kb()
            },
            children: db(`${XH}islandsDismiss`)
          }), rH(vb.leave) && (0, jG.jsx)(CU.I, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== vb.leave,
            onClick: () => {
              pb("leave")
            },
            children: jb && wb.switch > 0 ? Nb("islandsLeaveIn", wb.switch) : db(`${XH}islandsLeave`)
          }), rH(vb.delete) && (0, jG.jsx)(CU.I, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== vb.delete,
            onClick: () => {
              pb("delete")
            },
            children: wb.change > 0 && vb.deleteWaits ? Nb("islandsDeleteIn", wb.change) : db(`${XH}islandsDelete`)
          })]
        })]
      })
    }
    const nH = "buildAFactory2Game:";

    function DH(bb) {
      let {
        invite: ub,
        actions: hb,
        full: Ob,
        maxIslands: Gb,
        waitSeconds: Ub,
        focus: Lb,
        focused: Yb,
        join: Sb,
        decline: ab,
        t: Hb
      } = bb;
      const [wb, Zb] = (0, Bb.useState)(!1), Xb = (0, Bb.useRef)(null);
      FS(wb, Xb), (0, Bb.useEffect)((() => {
        var bb;
        Lb && (Zb(!0), null === (bb = Xb.current) || void 0 === bb || bb.focus(), Yb())
      }), [Lb, Yb]);
      const pb = function(bb, ub, hb, Bb, Ob) {
          return hb ? {
            join: !1,
            note: {
              key: `${oS}islandsJoinTooMany`,
              params: {
                max: String(Bb)
              }
            }
          } : bb.baf2InvitePlayers >= Ob ? {
            join: !1,
            note: {
              key: `${oS}islandsJoinFull`
            }
          } : {
            join: ub.switch,
            note: null
          }
        }(ub, hb, Ob, Gb, 10),
        ob = ub.baf2InviteIsland,
        Ab = ub.baf2InvitePlayers,
        lb = () => {
          var bb;
          Zb(!1), null === (bb = Xb.current) || void 0 === bb || bb.focus()
        },
        Kb = Ub > 0 && null === pb.note ? Hb(`${nH}islandsJoinIn`, {
          time: WG(Hb, Ub)
        }) : Hb(`${nH}islandsJoin`);
      return (0, jG.jsxs)("li", {
        ref: Xb,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...wb ? yS(lb) : {},
        children: [(0, jG.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, jG.jsx)("strong", {
            className: "Baf2IslandName",
            children: ob
          })
        }), (0, jG.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: JS(Hb, `${nH}islandsInvitedBy`, {
            owner: ub.baf2InviteOwner
          })
        }), (0, jG.jsx)(QS, {
          tier: ub.baf2InviteTier,
          t: Hb
        }), (0, jG.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, jG.jsx)("span", {
            children: 1 === Ab ? Hb(`${nH}islandsPlayersCountOne`) : Hb(`${nH}islandsPlayersCount`, {
              count: String(Ab)
            })
          })
        }), pb.note && (0, jG.jsx)(RS, {
          note: pb.note,
          t: Hb
        }), wb && (0, jG.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: JS(Hb, `${nH}islandsJoinConfirm`, {
            island: ob
          })
        }), !wb && (0, jG.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": ob,
          children: [(0, jG.jsx)(CU.q, {
            disabled: !pb.join,
            onClick: () => {
              var bb;
              Zb(!0), null === (bb = Xb.current) || void 0 === bb || bb.focus()
            },
            children: Kb
          }), (0, jG.jsx)(CU.e, {
            onClick: ab,
            children: Hb(`${nH}islandsDecline`)
          })]
        }), wb && (0, jG.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, jG.jsx)(CU.q, {
            disabled: !pb.join,
            onClick: Sb,
            children: Hb(`${nH}islandsJoinYes`)
          }), (0, jG.jsx)(CU.e, {
            onClick: lb,
            children: Hb(`${nH}islandsCancel`)
          })]
        })]
      })
    }

    function xH(bb) {
      let {
        invites: ub,
        actions: hb,
        full: Bb,
        maxIslands: Ob,
        waitSeconds: Gb,
        focus: Ub,
        focused: Lb,
        leave: Yb,
        declined: Sb,
        t: ab
      } = bb;
      const Hb = IU();
      return (0, jG.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, jG.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: ab(`${nH}islandsInvitesTitle`)
        }), (0, jG.jsx)("ul", {
          className: "Baf2IslandCards",
          children: ub.map((bb => {
            const ub = bb.baf2InviteId;
            return (0, jG.jsx)(DH, {
              invite: bb,
              actions: hb,
              full: Bb,
              maxIslands: Ob,
              waitSeconds: Gb,
              focus: Ub === ub,
              focused: Lb,
              join: () => {
                Hb.send(`baf2coopaccept ${ub}`), Yb()
              },
              decline: () => {
                Hb.send(`baf2coopdecline ${ub}`), Sb(ub)
              },
              t: ab
            }, ub)
          }))
        })]
      })
    }
    const zH = "buildAFactory2Game:";

    function gH(bb) {
      let {
        cards: ub,
        activeName: hb,
        canStart: Ob,
        waitSeconds: Gb,
        leave: Ub,
        t: Lb
      } = bb;
      const Yb = IU(),
        [Sb, ab] = (0, Bb.useState)(!1),
        [Hb, wb] = (0, Bb.useState)(""),
        Zb = (0, Bb.useRef)(null);
      FS(Sb, Zb), (0, Bb.useEffect)((() => {
        var bb;
        Sb && (null === (bb = Zb.current) || void 0 === bb || bb.focus())
      }), [Sb]);
      const Xb = dS(ub),
        pb = WS(Hb),
        ob = CS(pb),
        Ab = () => {
          Ob && !ob && (Yb.send("" === pb || pb === Xb ? kb : `${kb} ${pb}`), Ub())
        },
        lb = () => {
          var bb;
          ab(!1), null === (bb = Zb.current) || void 0 === bb || bb.focus()
        };
      return (0, jG.jsxs)("li", {
        ref: Zb,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Sb ? yS(lb) : {},
        children: [(0, jG.jsx)("strong", {
          className: "Baf2IslandName",
          children: Lb(`${zH}islandsNewTitle`)
        }), !Sb && (0, jG.jsx)("p", {
          className: "Baf2IslandStats",
          children: Lb(`${zH}islandsNewNote`)
        }), Sb && (0, jG.jsxs)(jG.Fragment, {
          children: [(0, jG.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: JS(Lb, `${zH}islandsNewConfirm`, {
              name: hb
            })
          }), (0, jG.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [Lb(`${zH}islandsNewNameLabel`), (0, jG.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Hb,
              placeholder: Xb,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: VS,
              onChange: bb => {
                wb(bb.target.value)
              },
              ...ES(Ab, lb)
            })]
          }), ob && (0, jG.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: Lb(`${zH}islandsNameReserved`)
          })]
        }), (0, jG.jsxs)("div", {
          className: dO()("Baf2IslandButtons", {
            Stacked: Sb
          }),
          children: [(0, jG.jsx)(CU.q, {
            disabled: !Ob || Sb && ob,
            onClick: () => {
              if (!Sb) return wb(Xb), void ab(!0);
              Ab()
            },
            children: Gb > 0 ? Lb(`${zH}islandsNewIn`, {
              time: WG(Lb, Gb)
            }) : Lb(Sb ? `${zH}islandsNewConfirmButton` : `${zH}islandsNew`)
          }), Sb && (0, jG.jsx)(CU.e, {
            onClick: lb,
            children: Lb(`${zH}islandsCancel`)
          })]
        })]
      })
    }

    function iH(bb) {
      var ub, hb;
      let {
        message: Ob,
        arrivedAtMs: Gb,
        close: Ub,
        leave: Lb,
        openSocial: Yb
      } = bb;
      const Sb = IU(),
        {
          t: ab
        } = (0, DO.K)(),
        Hb = cS(1e3),
        [wb, Zb] = (0, Bb.useState)(null),
        [Xb, pb] = (0, Bb.useState)(new Map),
        [ob, Ab] = (0, Bb.useState)(new Set),
        lb = Ob.baf2IslandCards,
        Kb = function(bb, ub, hb, Bb) {
          return (null !== bb && void 0 !== bb ? bb : []).filter((bb => ub + bb.baf2InviteLeftMs > hb && !Bb.has(bb.baf2InviteId)))
        }(Ob.baf2IslandsInvites, Gb, Hb, ob),
        Wb = Kb.map((bb => bb.baf2InviteId)).join(" "),
        Cb = (0, Bb.useRef)(null),
        db = fS(Cb);
      kS(), (0, Bb.useEffect)((() => {
        var bb, ub;
        null !== (bb = Cb.current) && void 0 !== bb && bb.contains(document.activeElement) || (null === (ub = Cb.current) || void 0 === ub || ub.focus())
      }), [Ob, Wb]), (0, Bb.useEffect)((() => {
        pb((bb => function(bb, ub, hb, Bb) {
          const Ob = new Map;
          for (const Gb of ub) {
            const ub = bb.get(Gb.baf2IslandId);
            ub && (void 0 !== ub.untilGone || Bb < ub.answer) && gS(ub, Gb, hb) && Ob.set(Gb.baf2IslandId, ub)
          }
          return Ob.size === bb.size ? bb : Ob
        }(bb, Ob.baf2IslandCards, Date.now(), Ob.baf2IslandsAnswered)))
      }), [Ob]);
      const rb = KS(Gb, Ob.baf2IslandsWaitMs, Hb),
        jb = Ob.baf2IslandsBlocked,
        nb = DS(jb, rb),
        Db = function(bb, ub) {
          const hb = DS(bb, 0);
          return {
            switch: hb.switch ? ub : 0,
            change: hb.change ? ub : 0
          }
        }(jb, rb),
        xb = lb.length >= Ob.baf2IslandsMax,
        zb = lb.length > 0,
        gb = function(bb, ub, hb) {
          return bb + Math.max(0, hb - ub)
        }(Ob.baf2IslandsNowMs, Gb, Hb),
        ib = null !== (ub = null === (hb = lb.find((bb => bb.baf2IslandActive))) || void 0 === hb ? void 0 : hb.baf2IslandName) && void 0 !== ub ? ub : "",
        vb = function(bb) {
          const ub = bb.filter(sS).length;
          return ub <= 1 && ub < bb.length
        }(lb),
        tb = !0 === Ob.baf2IslandsCoop,
        Jb = function(bb, ub) {
          const hb = bb.find((bb => bb.baf2IslandActive)),
            Bb = null === hb || void 0 === hb ? void 0 : hb.baf2IslandCoop;
          return hb && "member" === (null === Bb || void 0 === Bb ? void 0 : Bb.baf2CoopRole) ? {
            key: `${oS}islandsKeepOwnMember`,
            names: {
              owner: Bb.baf2CoopOwner,
              island: hb.baf2IslandName
            }
          } : {
            key: ub ? `${oS}islandsKeepOwn` : `${oS}islandsKeepOwnSolo`
          }
        }(lb, tb),
        [eb, Nb] = (0, Bb.useState)(null);
      (0, Bb.useEffect)((() => {
        void 0 !== Ob.baf2IslandsFocusInvite && Nb(Ob.baf2IslandsFocusInvite)
      }), [Ob]);
      const sb = (0, Bb.useCallback)((() => {
          Nb(null)
        }), []),
        Mb = wb ? lb.find((bb => bb.baf2IslandId === wb.id)) : void 0,
        mb = wb && Mb && "hidden" !== MS(Mb, nb, vb, xb, tb, jb)[wb.mode] ? wb : null;
      return (0, jG.jsx)(WU.b, {
        close: Ub,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, jG.jsxs)("section", {
          ref: Cb,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: db ? {
            marginTop: `${db.marginTop}px`,
            maxHeight: `${db.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsxs)("div", {
              children: [(0, jG.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: ab(`${zH}islandsTitle`)
              }), zb && (0, jG.jsx)("p", {
                children: ab(`${zH}islandsSubtitle`, {
                  count: String(lb.length),
                  max: String(Ob.baf2IslandsMax)
                })
              })]
            }), (0, jG.jsx)(CU.i, {
              ariaLabel: ab(`${zH}islandsClose`),
              onClick: Ub
            })]
          }), (0, jG.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== jb && (0, jG.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: JS(ab, rS(jb, jS(lb)), {
                island: ib
              })
            }), zb && Kb.length > 0 && (0, jG.jsx)(xH, {
              invites: Kb,
              actions: nb,
              full: xb,
              maxIslands: Ob.baf2IslandsMax,
              waitSeconds: Db.switch,
              focus: eb,
              focused: sb,
              leave: Lb,
              declined: bb => {
                Ab((ub => new Set(ub).add(bb)))
              },
              t: ab
            }), zb && (0, jG.jsxs)(jG.Fragment, {
              children: [xb && (0, jG.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: ab(`${zH}islandsFull`, {
                  max: String(Ob.baf2IslandsMax)
                })
              }), (0, jG.jsx)("p", {
                className: "Baf2IslandsNote",
                children: JS(ab, Jb.key, Jb.names)
              }), (0, jG.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [lb.map((bb => {
                  const ub = bb.baf2IslandId;
                  return (0, jG.jsx)(jH, {
                    card: bb,
                    keepOwn: vb,
                    coopOn: tb,
                    openSocial: Yb,
                    blocked: jb,
                    maxIslands: Ob.baf2IslandsMax,
                    serverNowMs: gb,
                    nowMs: Hb,
                    actions: nb,
                    full: xb,
                    waits: Db,
                    answered: Ob.baf2IslandsAnswered,
                    mode: (null === mb || void 0 === mb ? void 0 : mb.id) === ub ? mb.mode : null,
                    setMode: bb => {
                      Zb(null === bb ? null : {
                        id: ub,
                        mode: bb
                      })
                    },
                    pending: gS(Xb.get(ub), bb, Hb),
                    onSent: (hb, Bb) => {
                      pb((Ob => {
                        const Gb = {
                          atMs: Date.now(),
                          from: bb.baf2IslandName,
                          answer: hb
                        };
                        return new Map(Ob).set(ub, Bb ? {
                          ...Gb,
                          untilGone: Bb
                        } : Gb)
                      }))
                    },
                    leave: Lb,
                    switchTo: () => {
                      Sb.send(`baf2islandswitch ${ub}`), Lb()
                    },
                    t: ab
                  }, ub)
                })), !xb && (0, jG.jsx)(gH, {
                  cards: lb,
                  activeName: ib,
                  canStart: nb.change,
                  waitSeconds: Db.change,
                  leave: Lb,
                  t: ab
                })]
              })]
            })]
          })]
        })
      })
    }
    var vH = hb(4791);
    const tH = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        tG: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      JH = Object.keys(tH),
      eH = new Set([...Object.keys(ku), ...[...Ju.Press.recipes, ...Ju["Wire Mill"].recipes].map((bb => bb.output))]),
      NH = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      sH = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      MH = / Bar$|Alloy$/,
      mH = /Porkchop|Beef|Mutton|Venison|Steak/,
      IH = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const PH = (0, Bb.memo)((function(bb) {
      let {
        item: ub,
        name: hb,
        amount: Bb,
        selected: Ob,
        small: Gb,
        onPick: Ub
      } = bb;
      return (0, jG.jsxs)("button", {
        type: "button",
        className: dO()("Baf2TermTile", {
          On: Ob,
          Small: Gb
        }),
        "aria-label": `${hb}: ${Bb}`,
        "aria-pressed": Ob,
        onClick: () => {
          Ub(ub)
        },
        children: [(0, jG.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, jG.jsx)(zO.d, {
            itemName: ub,
            amount: 0
          })
        }), (0, jG.jsx)("span", {
          className: "Baf2TermCount",
          children: lG(Bb, 1e4)
        }), !Gb && (0, jG.jsx)("span", {
          className: "Baf2TermName",
          children: hb
        })]
      })
    }));

    function qH(bb) {
      let {
        store: ub,
        close: hb,
        send: Ob
      } = bb;
      const {
        t: Gb
      } = (0, DO.K)(), {
        isTouchScreen: Ub
      } = (0, KO.j)(["isTouchScreen"]);
      ! function(bb) {
        const [ub, hb] = (0, Bb.useState)(bb.version);
        (0, Bb.useEffect)((() => (hb(bb.version), bb.subscribe((() => {
          hb(bb.version)
        })))), [bb])
      }(ub);
      const [Lb, Yb] = (0, Bb.useState)("all"), [Sb, ab] = (0, Bb.useState)(!1), [Hb, wb] = (0, Bb.useState)(""), [Zb, Xb] = (0, Bb.useState)(""), [pb, ob] = (0, Bb.useState)(null), [Ab, lb] = (0, Bb.useState)(!1), [Kb, Wb, Cb] = function() {
        const bb = (0, Bb.useRef)(null),
          [ub, hb] = (0, Bb.useState)(!1),
          Ob = () => {
            const ub = bb.current;
            hb(null !== ub && ub.scrollLeft + ub.clientWidth < ub.scrollWidth - 1)
          };
        return (0, Bb.useEffect)(Ob), (0, Bb.useEffect)((() => {
          const ub = bb.current;
          if (!ub) return;
          const hb = new ResizeObserver(Ob);
          return hb.observe(ub), () => {
            hb.disconnect()
          }
        }), []), [bb, ub, Ob]
      }(), db = (0, Bb.useMemo)((() => new Map), [Gb]), rb = bb => {
        let ub = db.get(bb);
        return void 0 === ub && (ub = function(bb, ub) {
          const hb = /^(.+) \((.+)\)$/.exec(bb);
          return hb ? ub(hb[2], hb[1]) : bb
        }(BG(Gb, bb), ((bb, ub) => Gb("buildAFactory2Game:terminalTileKind", {
          kind: bb,
          base: ub
        }))), db.set(bb, ub)), ub
      }, jb = ub.isReadOnly(), nb = Ab && !jb, Db = ub.recent(), xb = ub.items(), zb = Zb.trim().toLowerCase(), gb = nb ? ub.heldItems(pb) : ("recent" === Lb ? Db : xb).filter((bb => {
        const ub = rb(bb);
        return ("all" === Lb || "recent" === Lb || function(bb) {
          return HG(bb) ? "farm" : NH.test(bb) ? "nuclear" : MH.test(bb) ? "bars" : mH.test(bb) ? "farm" : sH.test(bb) ? "tG" : eH.has(bb) ? "parts" : IH.test(bb) ? "farm" : "other"
        }(bb) === Lb) && ("" === zb || ub.toLowerCase().includes(zb)) && ("" === Hb || ub.toUpperCase().startsWith(Hb))
      })), ib = new Set(xb.map((bb => rb(bb).charAt(0).toUpperCase()))), vb = bb => nb ? ub.heldAmount(bb) : ub.amount(bb), tb = !nb && "recent" !== Lb && Db.length > 0, Jb = function(bb, ub) {
        return null !== bb && ub.includes(bb) ? bb : null
      }(pb, tb ? [...gb, ...Db] : gb), eb = null === Jb ? 0 : ub.amount(Jb), Nb = null === Jb ? 0 : vb(Jb), sb = (0, Bb.useCallback)((bb => {
        ob((ub => ub === bb ? null : bb))
      }), []), Mb = bb => Nb > 0 || nb && null === Jb && "fill" === bb && gb.length > 0, mb = nb ? [
        ["one", Gb("buildAFactory2Game:terminalStoreOne")],
        ["stack", Gb("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Gb(null === Jb ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Gb("buildAFactory2Game:terminalTakeOne")],
        ["stack", Gb("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Gb("buildAFactory2Game:terminalFill")]
      ], Ib = nb ? Gb("buildAFactory2Game:terminalStoreEmpty") : "" !== Hb ? Gb("buildAFactory2Game:terminalEmptyLetter", {
        letter: Hb
      }) : "" !== zb ? Gb("buildAFactory2Game:terminalEmptySearch", {
        query: Zb
      }) : Gb("buildAFactory2Game:terminalEmpty");
      return (0, jG.jsx)(WU.b, {
        close: hb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, jG.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsxs)("div", {
              children: [(0, jG.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Gb(ub.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, jG.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, jG.jsx)("span", {
                  className: dO()({
                    Off: nb
                  }),
                  children: Gb("buildAFactory2Game:terminalSubtitle", {
                    count: String(ub.siloCount())
                  })
                }), !jb && (0, jG.jsx)("span", {
                  className: dO()({
                    Off: !nb
                  }),
                  children: Gb("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !jb && (0, jG.jsx)(vH.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Gb("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Gb("buildAFactory2Game:terminalModeStore")
              }],
              value: nb ? "store" : "take",
              onChange: bb => {
                lb("store" === bb), ob(null)
              },
              ariaLabel: Gb("buildAFactory2Game:terminalModes")
            }), (0, jG.jsx)(CU.i, {
              onClick: hb
            })]
          }), (0, jG.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, jG.jsxs)("div", {
              className: dO()("Baf2TermTools", {
                Hidden: nb
              }),
              children: [(0, jG.jsx)("div", {
                ref: Kb,
                className: dO()("Baf2TermChips", {
                  MoreRight: Wb
                }),
                onScroll: Cb,
                children: Sb ? (0, jG.jsxs)(jG.Fragment, {
                  children: [(0, jG.jsx)("button", {
                    type: "button",
                    "aria-label": Gb("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      ab(!1), wb("")
                    },
                    children: "\u2190"
                  }), [...ib].sort().map((bb => (0, jG.jsx)("button", {
                    type: "button",
                    className: dO()({
                      On: Hb === bb
                    }),
                    onClick: () => {
                      wb(Hb === bb ? "" : bb)
                    },
                    children: bb
                  }, bb)))]
                }) : (0, jG.jsxs)(jG.Fragment, {
                  children: [(0, jG.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      ab(!0)
                    },
                    children: Gb("buildAFactory2Game:terminalLetters")
                  }), JH.map((bb => (0, jG.jsx)("button", {
                    type: "button",
                    className: dO()({
                      On: Lb === bb
                    }),
                    onClick: () => {
                      Yb(bb)
                    },
                    children: Gb(tH[bb])
                  }, bb)))]
                })
              }), !Ub && (0, jG.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Zb,
                placeholder: Gb("buildAFactory2Game:terminalSearch"),
                "aria-label": Gb("buildAFactory2Game:terminalSearch"),
                onChange: bb => {
                  Xb(bb.target.value)
                },
                onKeyDown: bb => {
                  bb.stopPropagation()
                }
              }), (0, jG.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Gb("buildAFactory2Game:terminalResort"),
                title: Gb("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  ub.resort()
                },
                children: "\u21c5"
              })]
            }), tb && (0, jG.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, jG.jsx)("span", {
                children: Gb(tH.recent)
              }), Db.map((bb => (0, jG.jsx)(PH, {
                item: bb,
                name: rb(bb),
                amount: ub.amount(bb),
                selected: Jb === bb,
                small: !0,
                onPick: sb
              }, bb)))]
            }), (0, jG.jsx)("div", {
              className: "Baf2TermTiles",
              children: gb.length > 0 ? gb.map((bb => (0, jG.jsx)(PH, {
                item: bb,
                name: rb(bb),
                amount: vb(bb),
                selected: Jb === bb,
                onPick: sb
              }, bb))) : (0, jG.jsx)("p", {
                className: "Baf2TermEmpty",
                children: Ib
              })
            }), (0, jG.jsxs)("div", {
              className: dO()("Baf2TermActions", {
                Hidden: nb && 0 === gb.length
              }),
              children: [(0, jG.jsx)("span", {
                className: "Baf2TermPicked",
                children: jb ? (0, jG.jsxs)(jG.Fragment, {
                  children: [null !== Jb && eb > 0 ? rb(Jb) : Gb("buildAFactory2Game:terminalVisiting"), (0, jG.jsx)("small", {
                    children: Gb("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Jb ? (0, jG.jsxs)(jG.Fragment, {
                  children: [rb(Jb), (0, jG.jsx)("small", {
                    children: Gb("buildAFactory2Game:terminalStored", {
                      amount: eb.toLocaleString()
                    })
                  })]
                }) : Gb(nb ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !jb && mb.map((bb => {
                let [hb, Bb] = bb;
                const Gb = "fill" === hb ? CU.m : CU.e;
                return (0, jG.jsx)(Gb, {
                  className: "Baf2TermTake",
                  disabled: !Mb(hb),
                  onClick: () => {
                    (bb => {
                      Mb(bb) && Ob(null === Jb ? ub.putAll() : nb ? ub.put(bb, Jb) : ub.take(bb, Jb))
                    })(hb)
                  },
                  children: Bb
                }, hb)
              }))]
            })]
          })]
        })
      })
    }

    function EH(bb) {
      let {
        kind: ub,
        icon: hb,
        label: Bb,
        number: Ob,
        preview: Gb,
        note: Ub,
        tone: Lb = null,
        share: Yb,
        onExplain: Sb
      } = bb;
      return (0, jG.jsxs)("button", {
        type: "button",
        className: dO()("NxLane", ub, {
          Warn: "warn" === Lb,
          Danger: "danger" === Lb
        }),
        onClick: Sb,
        children: [(0, jG.jsxs)("span", {
          className: "NxLaneHead",
          children: [hb, (0, jG.jsx)("span", {
            className: "NxLaneLabel",
            children: Bb
          })]
        }), (0, jG.jsxs)("span", {
          className: "NxLaneNum",
          children: [Ob, Gb && (0, jG.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Gb]
          })]
        }), (0, jG.jsx)("span", {
          className: "NxLaneNote",
          children: Ub
        }), void 0 !== Yb && (0, jG.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Yb)) + "%"
          }
        })]
      })
    }

    function yH(bb) {
      let {
        kind: ub,
        step: hb,
        short: Bb,
        planned: Ob
      } = bb;
      return (0, jG.jsx)("i", {
        className: dO()("NxPipe", ub, `Step${hb}`, {
          Short: Bb,
          Planned: Ob
        }),
        "aria-hidden": "true"
      })
    }

    function VH(bb) {
      let {
        max: ub,
        bands: hb,
        ticks: Bb,
        now: Ob,
        settle: Gb,
        settleTone: Ub,
        onExplain: Lb
      } = bb;
      const Yb = bb => Math.max(0, Math.min(ub, bb)) / ub * 100 + "%";
      let Sb = 0;
      return (0, jG.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: Lb,
        children: [(0, jG.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [hb.map((bb => {
            const ub = {
              bottom: Yb(Sb),
              height: `calc(${Yb(bb.upTo)} - ${Yb(Sb)})`
            };
            return Sb = bb.upTo, (0, jG.jsx)("i", {
              className: dO()("NxGaugeBand", bb.kind),
              style: ub
            }, bb.kind)
          })), null !== Ob && (0, jG.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Yb(Ob)
            }
          }), void 0 !== Gb && null !== Gb && (0, jG.jsx)("i", {
            className: dO()("NxGaugeSettle", {
              Bad: "bad" === Ub
            }),
            style: {
              bottom: Yb(Gb)
            }
          })]
        }), (0, jG.jsx)("span", {
          className: "NxGaugeTicks",
          children: Bb.map((bb => (0, jG.jsx)("small", {
            style: {
              bottom: Yb(bb)
            },
            children: bb
          }, bb)))
        })]
      })
    }

    function FH(bb) {
      const [ub, hb] = (0, Bb.useState)(null), [Ob, Gb] = (0, Bb.useState)((() => {
        try {
          return null === window.localStorage.getItem(bb)
        } catch {
          return !1
        }
      })), Ub = (0, Bb.useRef)(null);
      (0, Bb.useEffect)((() => () => {
        null !== Ub.current && clearTimeout(Ub.current)
      }), []);
      const Lb = (0, Bb.useCallback)((ub => {
          hb(ub), Gb(!1);
          try {
            window.localStorage.setItem(bb, "1")
          } catch {}
          null !== Ub.current && clearTimeout(Ub.current), Ub.current = setTimeout((() => {
            Ub.current = null, hb(null)
          }), 5e3)
        }), [bb]),
        Yb = (0, Bb.useCallback)(((ub, hb) => {
          const Bb = `${bb}:${ub}`;
          try {
            if (null !== window.localStorage.getItem(Bb)) return;
            window.localStorage.setItem(Bb, "1")
          } catch {
            return
          }
          Lb(hb)
        }), [Lb, bb]);
      return {
        explained: ub,
        hinting: Ob,
        explain: Lb,
        explainOnce: Yb
      }
    }

    function fH(bb) {
      let {
        text: ub,
        tone: hb,
        explained: Bb
      } = bb;
      return (0, jG.jsxs)("p", {
        className: dO()("NxStatus", null === Bb ? hb : "Explain"),
        "aria-live": "polite",
        children: [null !== Bb && (0, jG.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Bb && void 0 !== Bb ? Bb : ub]
      })
    }
    const kH = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function TH(bb, ub) {
      const hb = Number(bb[ub]);
      return 1 === hb || 2 === hb || 3 === hb ? hb : 0
    }

    function cH(bb) {
      return !!CY("reactor", bb.baf2RxNeed) || void 0 !== bb.baf2RxLayout && bb.baf2RxNeed.some((bb => {
        let [ub, hb] = bb;
        return hb > 0 && kH.includes(ub)
      }))
    }
    const QH = "buildAFactory2Game:";

    function RH(bb) {
      let {
        status: ub,
        store: hb,
        busy: Bb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)();
      return function(bb) {
        return 0 !== (bb.baf2RxFlags & pu) && (!bb.baf2RxFormed || void 0 !== bb.baf2RxLayout)
      }(ub) ? (0, jG.jsx)(CU.m, {
        disabled: !cH(ub) || Bb,
        onClick: () => {
          hb.tap("fill", (() => {
            hb.send("fill")
          }))
        },
        children: Ob(void 0 !== ub.baf2RxLayout ? `${QH}rxFillLayout` : `${QH}rxFill`)
      }) : null
    }

    function bw(bb) {
      let {
        status: ub,
        store: hb,
        readOnly: Ob,
        bare: Gb = !1
      } = bb;
      const {
        t: Ub
      } = (0, DO.K)(), Lb = ub.baf2RxLayout, [Yb, Sb, ab] = ub.baf2RxDims, Hb = (0, Bb.useMemo)((() => {
        if (void 0 === Lb) return 0;
        const bb = Uint8Array.from(Lb, ((bb, ub) => TH(Lb, ub)));
        return RL([Yb - 2, Sb - 2, ab - 2], bb).max
      }), [Lb, Yb, Sb, ab]);
      return void 0 === Lb ? null : (0, jG.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Gb && (0, jG.jsx)("span", {
          className: "Baf2RxHint",
          children: Ub(`${QH}rxLayoutLine`, {
            amount: zY(Hb)
          })
        }), !Ob && (0, jG.jsx)(CU.e, {
          onClick: () => {
            hb.send("layout", 0)
          },
          children: Ub(`${QH}rxLayoutHide`)
        })]
      })
    }
    const uw = "buildAFactory2Game:",
      hw = {
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

    function Bw(bb) {
      let {
        id: ub,
        title: hb,
        body: Bb,
        bodyParams: Ob,
        yes: Gb,
        cancel: Ub,
        confirm: Lb
      } = bb;
      const {
        t: Yb
      } = (0, DO.K)();
      return (0, jG.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": ub,
        children: [(0, jG.jsx)("h3", {
          id: ub,
          children: Yb(hb)
        }), (0, jG.jsx)("p", {
          children: Yb(Bb, Ob)
        }), (0, jG.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, jG.jsx)(CU.g, {
            onClick: Ub,
            children: Yb(`${uw}rxCancel`)
          }), (0, jG.jsx)(CU.H, {
            onClick: Lb,
            children: Yb(Gb)
          })]
        })]
      })
    }

    function Ow(bb) {
      const [ub, hb] = (0, Bb.useState)((() => bb.get()));
      return (0, Bb.useEffect)((() => (hb(bb.get()), bb.subscribe((() => {
        hb(bb.get())
      })))), [bb]), ub
    }

    function Gw(bb) {
      let {
        kind: ub,
        cap: hb,
        busy: Ob = !1,
        whyNot: Gb = null,
        apart: Ub
      } = bb;
      const {
        t: Lb
      } = (0, DO.K)(), [Yb, Sb] = (0, Bb.useState)(!1), ab = null !== Gb, Hb = (0, Bb.useRef)(null);
      if ((0, Bb.useEffect)((() => {
          ab && Sb(!1)
        }), [ab]), (0, Bb.useLayoutEffect)((() => {
          var bb;
          const ub = null === (bb = Hb.current) || void 0 === bb ? void 0 : bb.firstElementChild;
          ab ? null === ub || void 0 === ub || ub.setAttribute("aria-disabled", "true") : Ob || null === ub || void 0 === ub || ub.removeAttribute("aria-disabled")
        })), !Yb || ab) return (0, jG.jsx)("span", {
        ref: Hb,
        className: "Baf2RxApartWrap",
        children: (0, jG.jsx)(CU.g, {
          disabled: Ob,
          className: dO()({
            Baf2RxNotYet: ab
          }),
          onClick: () => {
            Gb ? Gb() : Sb(!0)
          },
          children: Lb(`${uw}rxApart`)
        })
      });
      const wb = "battery" === ub,
        Zb = void 0 === hb ? `${uw}batApartConfirmBodyPlan` : `${uw}batApartConfirmBody`;
      return (0, jG.jsx)(Bw, {
        id: `baf2ApartTitle_${ub}`,
        title: wb ? `${uw}batApartConfirmTitle` : `${uw}rxApartConfirmTitle`,
        body: wb ? Zb : `${uw}rxApartConfirmBody`,
        bodyParams: void 0 === hb ? void 0 : {
          cap: hb
        },
        yes: `${uw}rxApart`,
        cancel: () => {
          Sb(!1)
        },
        confirm: () => {
          Sb(!1), Ub()
        }
      })
    }

    function Uw(bb) {
      let {
        mood: ub,
        big: hb
      } = bb;
      const Bb = hw[ub],
        Ob = [];
      return Bb.rows.forEach(((bb, ub) => {
        for (let hb = 0; hb < bb.length; hb++) "." !== bb[hb] && Ob.push((0, jG.jsx)("rect", {
          x: hb + 1,
          y: ub + 1,
          width: 1,
          height: 1,
          fill: "w" === bb[hb] ? "#8fd3ff" : Bb.colour
        }, `${hb},${ub}`))
      })), (0, jG.jsxs)("svg", {
        className: dO()("Baf2RxFace", {
          Big: hb,
          Alarm: "alarm" === ub
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, jG.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, jG.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Ob]
      })
    }

    function Lw(bb) {
      return AG(bb, "+").replace("+", "")
    }

    function Yw(bb) {
      let {
        kind: ub,
        dims: hb,
        cap: Bb,
        disabled: Ob,
        compact: Gb,
        resize: Ub
      } = bb;
      const {
        t: Lb
      } = (0, DO.K)(), {
        min: Yb,
        max: Sb
      } = mh(ub), ab = Math.min(Bb, Sb), Hb = [`${uw}rxWide`, `${uw}rxTall`, `${uw}rxDeep`], wb = {
        w: String(hb[0]),
        h: String(hb[1]),
        d: String(hb[2]),
        blocks: String(xY(ub, hb))
      };
      return (0, jG.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, jG.jsx)("div", {
          className: "Baf2RxSteppers",
          children: hb.map(((bb, ub) => {
            const Gb = Bb => {
                const Ob = [hb[0], hb[1], hb[2]];
                Ob[ub] = bb + Bb, Ub(Ob)
              },
              wb = bb >= ab;
            return (0, jG.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, jG.jsx)("button", {
                type: "button",
                "aria-label": Lb(`${uw}rxSmaller`),
                disabled: Ob || bb <= Yb,
                onClick: () => {
                  Gb(-1)
                },
                children: "\u2212"
              }), (0, jG.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [bb, (0, jG.jsx)("small", {
                  children: Lb(Hb[ub])
                })]
              }), (0, jG.jsx)("button", {
                type: "button",
                "aria-label": Lb(`${uw}rxBigger`),
                disabled: Ob || wb,
                onClick: () => {
                  Gb(1)
                },
                children: wb && Bb < Sb ? "\ud83d\udd12" : "+"
              })]
            }, Hb[ub])
          }))
        }), !Gb && (0, jG.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === ub ? Lb(`${uw}rxSizeLine`, {
            ...wb,
            water: String(DY(hb))
          }) : Lb(`${uw}batSizeLine`, wb)
        })]
      })
    }

    function Sw(bb) {
      let {
        on: ub,
        label: hb,
        disabled: Bb,
        locked: Ob,
        pending: Gb,
        toggle: Ub
      } = bb;
      return (0, jG.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": ub,
        disabled: Bb,
        "aria-disabled": Ob || void 0,
        className: dO()("Baf2RxSwitch", {
          On: ub,
          Locked: Ob,
          Pending: Gb
        }),
        onClick: Ub,
        children: [(0, jG.jsx)("span", {
          className: "Baf2RxKnob"
        }), hb]
      })
    }
    const aw = "buildAFactory2Game:",
      Hw = .95;

    function ww(bb, ub) {
      return 0 !== (bb.baf2RxFlags & ub)
    }

    function Zw(bb) {
      return "cryo" === bb ? Qb.k : Qb.m
    }

    function Xw(bb) {
      var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb;
      return bb.baf2RxCryo ? {
        Pw: "cryo",
        usePerS: null !== (Ob = bb.baf2RxCryoUse) && void 0 !== Ob ? Ob : 0,
        needPerS: null !== (Gb = bb.baf2RxCryoNeed) && void 0 !== Gb ? Gb : 0,
        inPerS: null !== (Ub = bb.baf2RxCryoIn) && void 0 !== Ub ? Ub : 0,
        stored: null !== (Lb = bb.baf2RxCryoStored) && void 0 !== Lb ? Lb : 0,
        makersShort: null !== (Yb = bb.baf2RxMixersShort) && void 0 !== Yb ? Yb : 0,
        waterBeside: null !== (Sb = bb.baf2RxWaterUse) && void 0 !== Sb ? Sb : 0,
        pct: bb.baf2RxWater
      } : {
        Pw: "water",
        usePerS: null !== (ub = bb.baf2RxWaterUse) && void 0 !== ub ? ub : 0,
        needPerS: null !== (hb = bb.baf2RxWaterNeed) && void 0 !== hb ? hb : 0,
        inPerS: bb.baf2RxWaterIn,
        stored: bb.baf2RxWaterStored,
        makersShort: null !== (Bb = bb.baf2RxCondensersShort) && void 0 !== Bb ? Bb : 0,
        waterBeside: 0,
        pct: bb.baf2RxWater
      }
    }

    function pw(bb) {
      const ub = "running" === bb.baf2RxState || "idle" === bb.baf2RxState;
      return bb.baf2RxFormed && bb.baf2RxTarget !== bb.baf2RxThrottle && ub ? ow(bb, bb.baf2RxTarget) : null
    }

    function ow(bb, ub) {
      const [hb, Bb, Ob, , , , Gb, , Ub] = bb.baf2RxStats, Lb = ww(bb, Zu), Yb = Xw(bb), Sb = Yb.pct / 100, {
        gen: ab,
        out: Hb,
        load: wb
      } = function(bb, ub, hb, Bb) {
        const Ob = hb ? VL : 1,
          Gb = Math.min(bb.fuelHeat * Ob * Math.max(0, Math.min(1, ub)), bb.size * Ob);
        return {
          gen: Gb,
          out: Gb,
          load: aY(Gb, bb.cooling, Bb)
        }
      }({
        fuelHeat: hb,
        cooling: Bb,
        size: Ob
      }, ub / 100, Lb, Sb), Zb = wY(Gb || QL(...bb.baf2RxDims)), Xb = bb.baf2RxHeat, pb = Math.abs(wb - Xb), ob = function(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Qb.m;
        const Gb = hb ? VL : 1,
          Ub = Math.min(bb.fuelHeat * Gb * ub / 100, bb.size * Gb),
          Lb = Ub,
          Yb = bb.fuelHeat * Gb,
          Sb = bb.cooling * SY(Bb.pct / 100),
          ab = Yb > 0 && Sb < bb.size * Gb ? Math.floor(100 * Sb / Yb) : 100,
          Hb = Ub * Ob - Bb.inPerS;
        return {
          out: Lb,
          hotAbove: ab >= 100 ? null : Math.max(0, ab),
          waterSecs: Bb.pct >= 100 && Hb > 1e-6 ? Math.max(0, Bb.stored) / Hb : null
        }
      }({
        fuelHeat: hb,
        cooling: Bb,
        size: Ob
      }, ub, Lb, {
        pct: Yb.pct,
        inPerS: Yb.inPerS,
        stored: Yb.stored
      }, Zw(Yb.Pw));
      return {
        pct: ub,
        out: Hb,
        coolPerS: ab * Zw(Yb.Pw),
        pelletsPerMin: Ub > 0 ? Hb / Ub * 60 : 0,
        settle: wb,
        settleS: pb > 2 ? Zb * Math.log(pb / 2) : 0,
        overheatS: wb > 100 && Xb < 100 ? Zb * Math.log((wb - Xb) / (wb - 100)) : null,
        hotAbove: ob.hotAbove,
        coolantSecs: ob.waterSecs
      }
    }

    function Aw(bb) {
      return bb.baf2RxThrottle <= 0 && "running" !== bb.baf2RxState ? 0 : ow(bb, bb.baf2RxTarget).pelletsPerMin / 60
    }

    function lw(bb, ub) {
      if (bb <= 0 || ub <= 0) return 0;
      const hb = bb / ub;
      return hb < .25 ? 1 : hb < .5 ? 2 : hb < .8 ? 3 : 4
    }

    function Kw(bb, ub) {
      const hb = {};
      for (const [Bb, Ob] of Object.entries(ub.params)) hb[Bb] = "time" === Bb ? WG(bb, Ob) : "amount" === Bb ? zY(Ob) : String(Math.round(Ob));
      return bb(ub.key, hb)
    }

    function Ww(bb, ub) {
      return {
        key: `${aw}${bb}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: ub
      }
    }

    function Cw(bb) {
      var ub;
      const hb = ww(bb, Zu),
        Bb = "running" === bb.baf2RxState,
        Ob = oY(bb),
        Gb = bb.baf2RxHeat;
      var Ub;
      if (Bb && Gb > EL) return {
        key: null !== (Ub = Ob.fix) && void 0 !== Ub ? Ub : `${aw}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const Lb = Bb ? ow(bb, bb.baf2RxTarget).coolantSecs : null,
        Yb = "cryo" === Xw(bb).Pw;
      if (null !== Lb && Lb >= 1 && Lb <= 30) return Ww(Yb ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Sb = TL(QL(...bb.baf2RxDims)).waste,
        ab = Bb ? dY(bb, Sb, Aw(bb)).fullInS : null;
      if (null !== ab && ab <= 120 && bb.baf2RxWaste >= .5 * Sb) return Ww("rxWarnWaste", "warn");
      if (null !== Lb && Lb >= 1) return Ww(Yb ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: Lb
      });
      const Hb = "noWater" === bb.baf2RxState && Gb > EL;
      if (bb.baf2RxDamage >= 1 && !Hb) return Ww("rxDamagedHeals", "warn", {
        pct: bb.baf2RxDamage
      });
      if (bb.baf2RxCryoCut) return Ww("rxFix_cryoCut", "warn");
      const wb = Xw(bb);
      if ("noWater" === bb.baf2RxState && "cryo" === wb.Pw) return Ww("noWater" === bb.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Zb = Ob.fix === `${aw}rxFix_scramCool` || "idle" === bb.baf2RxState && bb.baf2RxTarget <= 0;
      if (Zb && bb.baf2RxFuel <= 0) return Ww("rxFix_noFuel", "warn");
      if (Zb && bb.baf2RxWaterIn <= 0 && (null !== (ub = bb.baf2RxCryoIn) && void 0 !== ub ? ub : 0) <= 0) return Ww("rxFix_noWater", "warn");
      const Xb = Ob.fix === `${aw}rxFix_scramCool` ? lY(bb) : null;
      if (null !== Xb) return {
        key: Xb.key,
        params: {
          amount: Xb.amount
        },
        tone: "info"
      };
      if ("running" !== bb.baf2RxState && "idle" !== bb.baf2RxState && null !== Ob.fix) return {
        key: Ob.fix,
        params: {},
        tone: "scram" === bb.baf2RxState ? "info" : Hb ? "bad" : "warn"
      };
      var pb;
      if ("idle" === bb.baf2RxState && bb.baf2RxTarget <= 0) return {
        key: null !== (pb = Ob.fix) && void 0 !== pb ? pb : `${aw}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const ob = bb.baf2RxCryoStarved;
      if ("cryo" === wb.Pw && ob && wb.needPerS > 0 && wb.usePerS < Hw * wb.needPerS) return Ww("noWater" === ob ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const Ab = "cryo" === wb.Pw,
        lb = wb.needPerS > 0 && wb.usePerS < Hw * wb.needPerS;
      if (Ab ? lb || wb.makersShort > 0 && wb.pct < 100 : wb.pct < 100) {
        const ub = Ab && lb ? Math.floor(100 * wb.usePerS / wb.needPerS) : Math.min(100, wb.pct);
        if (wb.makersShort > 0) {
          return Ww(`${Ab?"rxCryoShortLine":"rxWaterShortLine"}${1===wb.makersShort?"One":""}${!Ab&&bb.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: ub,
            count: wb.makersShort
          })
        }
        return Ww(Ab ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: ub
        })
      }
      const Kb = function(bb) {
        const [ub, hb, Bb] = bb.baf2RxStats, Ob = Xw(bb), Gb = HY({
          fuelHeat: ub,
          cooling: hb,
          size: Bb
        }, "cryo" === Ob.Pw ? Qb.f : 1, !0);
        return Math.max(0, Gb * Zw(Ob.Pw) - Ob.inPerS)
      }(bb);
      if (hb && Kb > 0) return Ww("cryo" === wb.Pw ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Kb)
      });
      if (Gb >= LY) return Ww("rxHotLine", "warn");
      const Wb = ow(bb, bb.baf2RxTarget);
      var Cb;
      if (null !== Wb.overheatS) return Ww("rxWillOverheat", "bad", {
        pct: bb.baf2RxTarget,
        time: Wb.overheatS,
        safe: null !== (Cb = Wb.hotAbove) && void 0 !== Cb ? Cb : 100
      });
      if (Math.abs(Wb.settle - Gb) >= 3) return Ww("rxSettling", "info", {
        pct: bb.baf2RxTarget,
        heat: Math.round(Wb.settle),
        time: Wb.settleS
      });
      const db = lY(bb);
      if (null !== db) return {
        key: db.key,
        params: {
          amount: db.amount
        },
        tone: "info"
      };
      const rb = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== ub && ("running" !== ub || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === bb.rods ? `${ZY}rxLimitNoRods` : `${ZY}rxLimit_${UY(bb)}`
      }({
        rods: bb.baf2RxStats[3],
        ...AY(bb)
      }, bb.baf2RxState, bb.baf2RxOut >= Hw * bb.baf2RxMaxNow, !1);
      if (rb === `${aw}rxLimit_size`) {
        const [ub, , hb, Bb] = bb.baf2RxStats, Ob = Bb > 0 && ub > 0 ? Math.ceil(hb / (ub / Bb) - 1e-9) : Bb, Gb = bb.baf2RxDims.every((bb => bb >= mh("reactor").max));
        if (Ob < Bb) return Ww(Gb ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Ob,
          have: Bb
        });
        if (Gb) return Ww("rxLimit_sizeMax", "info")
      }
      return null !== rb ? {
        key: rb,
        params: {},
        tone: "info"
      } : Ww("rxSteady", "ok", {
        pct: bb.baf2RxTarget
      })
    }

    function dw(bb) {
      var ub;
      if (bb.melted) return Ww("rxMeltedBody", "bad");
      if (-1 === bb.bad) return Ww("rxFix_noRoom", "warn");
      if (bb.bad > 0) return Ww(1 === bb.bad ? "rxBadOne" : "rxBad", "warn", {
        count: bb.bad
      });
      if (bb.left > 0) {
        const ub = 1 === bb.left ? "One" : "";
        return Ww(bb.canFill ? `rxPlanLeft${ub}` : `rxPlanLeftNoFill${ub}`, "info", {
          count: bb.left
        })
      }
      if (0 === bb.rods) return Ww("rxLimitNoRods", "warn");
      const hb = null !== (ub = bb.idle) && void 0 !== ub ? ub : 0;
      return hb > 0 ? Ww(1 === hb ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: hb
      }) : Ww("rxPlanReady", "ok")
    }

    function rw(bb) {
      return Math.floor(Math.max(0, bb[1] - 1) / 2)
    }

    function jw(bb) {
      if (bb >= uY && bb < hY) {
        const ub = bb - uY;
        return {
          key: 0 === ub ? `${aw}rxWhy_rodAlone` : 1 === ub ? `${aw}rxWhy_rodOne` : `${aw}rxWhy_rod`,
          params: {
            count: String(ub),
            heat: String(eL * (1 + NL * ub))
          }
        }
      }
      return bb === hY ? {
        key: `${aw}rxWhy_channel`,
        params: {
          amount: String(ML)
        }
      } : bb === BY ? {
        key: `${aw}rxWhy_deadChannel`,
        params: {}
      } : bb === OY ? {
        key: `${aw}rxWhy_graphite`,
        params: {}
      } : {
        key: `${aw}rxWhy_core`,
        params: {}
      }
    }
    const nw = "buildAFactory2Game:";

    function Dw(bb, ub) {
      return 0 !== (bb.baf2RxFlags & ub)
    }

    function xw(bb) {
      let {
        status: ub,
        pending: hb,
        store: Bb,
        explain: Ob
      } = bb;
      const {
        t: Gb
      } = (0, DO.K)(), Ub = Dw(ub, wu), Lb = ub.baf2RxTarget, Yb = ub.baf2RxThrottle, Sb = function(bb) {
        return {
          press: () => {
            bb.throttlePress()
          },
          drag: ub => {
            bb.throttleDrag(ub)
          },
          release: () => {
            bb.throttleRelease()
          }
        }
      }(Bb), ab = null === (Hb = ow(ub, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Hb - 10),
        red: Hb
      };
      var Hb;
      return (0, jG.jsxs)("div", {
        className: dO()("Baf2RxThrottle", {
          Off: Ub
        }),
        onClick: () => {
          Ub && Ob(`${nw}rxWhy_startFirst`)
        },
        children: [(0, jG.jsx)("span", {
          className: "HideNarrow",
          children: Gb(`${nw}rxThrottle`)
        }), (0, jG.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, jG.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: Lb,
            disabled: Ub,
            style: Ub ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Gb(`${nw}rxThrottle`),
            onPointerDown: () => {
              Sb.press();
              const bb = () => {
                window.removeEventListener("pointerup", bb), window.removeEventListener("pointercancel", bb), Sb.release()
              };
              window.addEventListener("pointerup", bb), window.addEventListener("pointercancel", bb)
            },
            onKeyUp: Sb.release,
            onChange: bb => {
              Sb.drag(Number(bb.target.value))
            }
          }), (0, jG.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${ab.amber}%, #ffb020 ${ab.amber}% ${ab.red}%, #ff3b30 ${ab.red}%)`
            },
            "aria-hidden": "true"
          }), (0, jG.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Yb}% + ${8*(1-Yb/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, jG.jsxs)("b", {
          children: [`${Lb}%`, (0, jG.jsx)("i", {
            className: dO()("Baf2RxPendingDot", {
              On: hb
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function zw(bb) {
      let {
        status: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)(), Bb = ow(ub, ub.baf2RxTarget), Ob = Xw(ub).Pw, Gb = hb("cryo" === Ob ? `${nw}rxRateCryo` : `${nw}rxRateWater`, {
        rate: Lw(Bb.coolPerS)
      }), Ub = hb(`${nw}rxChain`, {
        pct: String(ub.baf2RxTarget),
        out: zY(Bb.out),
        heat: String(Math.round(Bb.settle)),
        coolant: Gb
      }), Lb = null !== Bb.coolantSecs ? Bb.coolantSecs >= 1 ? hb("cryo" === Ob ? `${nw}rxThrottleCryoOut` : `${nw}rxThrottleWaterOut`, {
        time: WG(hb, Bb.coolantSecs)
      }) : hb("cryo" === Ob ? `${nw}rxThrottleCryoDry` : `${nw}rxThrottleWaterDry`) : null;
      return (0, jG.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Ub, null !== Lb ? (0, jG.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", Lb]
        }) : (0, jG.jsxs)("span", {
          children: [" \xb7 ", hb(`${nw}rxChainPellets`, {
            amount: gY(Bb.pelletsPerMin)
          })]
        })]
      })
    }

    function gw(bb) {
      let {
        view: ub,
        store: hb,
        explain: Ob,
        explainOnce: Gb
      } = bb;
      const {
        t: Ub
      } = (0, DO.K)(), {
        status: Lb
      } = ub, [Yb, Sb] = (0, Bb.useState)(!1), ab = Dw(Lb, wu), wb = Dw(Lb, Zu), Zb = !Dw(Lb, ou), Xb = Lb.baf2RxHeat > 100;
      return (0, jG.jsxs)(jG.Fragment, {
        children: [(0, jG.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, jG.jsx)(xw, {
            status: Lb,
            pending: ub.throttlePending,
            store: hb,
            explain: Ob
          }), (0, jG.jsx)(Sw, {
            on: wb,
            label: wb ? Ub(`${nw}rxOdLeft`, {
              time: WG(Ub, Lb.baf2RxOdLeft)
            }) : Ub(`${nw}rxOverdrive`),
            locked: Zb,
            pending: 0 !== (ub.pendingFlags & Zu),
            toggle: () => {
              Zb ? Ob(`${nw}rxOverdriveTier`, {
                amount: String(Hb(13))
              }) : wb ? hb.setFlag(Zu, !1) : ub.odConfirmed ? hb.setFlag(Zu, !0) : Sb(!0)
            }
          }), ab || ub.startGuard ? (0, jG.jsx)(CU.q, {
            disabled: ub.busy.has("start") || ub.startGuard,
            onClick: () => {
              hb.tap("start", (() => {
                hb.setFlag(wu, !1)
              }))
            },
            children: Ub(ub.startGuard ? `${nw}rxStarting` : `${nw}rxStart`)
          }) : (0, jG.jsx)("span", {
            className: dO()("Baf2RxScram", {
              Pulse: Xb
            }),
            children: (0, jG.jsx)(CU.H, {
              onClick: () => {
                hb.shutDown()
              },
              children: Ub(`${nw}rxScram`)
            })
          })]
        }), (0, jG.jsx)(zw, {
          status: Lb
        }), Yb && (0, jG.jsx)(Bw, {
          id: "baf2RxOdTitle",
          title: `${nw}rxOdConfirmTitle`,
          body: `${nw}rxOdConfirmBody`,
          yes: `${nw}rxOdConfirm`,
          cancel: () => {
            Sb(!1)
          },
          confirm: () => {
            Sb(!1), hb.tap("odConfirm", (() => {
              hb.confirmOverdrive(), hb.setFlag(Zu, !0)
            })), Gb(`${nw}rxWhy_overdrive`)
          }
        })]
      })
    }

    function iw(bb) {
      let {
        view: ub,
        store: hb,
        keepSize: Bb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)(), {
        status: Gb
      } = ub;
      return (0, jG.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, jG.jsx)(Yw, {
          kind: "reactor",
          dims: ub.dims,
          cap: Gb.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: bb => {
            hb.resize(bb)
          }
        }), Bb ? (0, jG.jsx)(CU.g, {
          onClick: Bb,
          children: Ob(`${nw}rxKeepSize`)
        }) : (0, jG.jsxs)(jG.Fragment, {
          children: [(0, jG.jsx)(Sw, {
            on: ub.guide,
            label: Ob(`${nw}rxGuide`),
            toggle: () => {
              hb.toggleGuide()
            }
          }), Dw(Gb, lu) && (0, jG.jsx)(Sw, {
            on: ub.starter,
            label: Ob(`${nw}rxStarter`),
            toggle: () => {
              hb.toggleStarter()
            }
          }), (0, jG.jsx)(RH, {
            status: Gb,
            store: hb,
            busy: ub.busy.has("fill")
          })]
        })]
      })
    }

    function vw(bb) {
      let {
        need: ub,
        kind: hb = "reactor",
        explain: Bb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)(), Gb = ub.length <= 3, Ub = ub.reduce(((bb, ub) => {
        let [, hb] = ub;
        return bb + hb
      }), 0);
      return (0, jG.jsxs)("div", {
        className: dO()("Baf2RxParts", {
          Compact: !Gb
        }),
        onClick: () => {
          Bb("battery" === hb ? `${nw}batWhy_store` : `${nw}rxShellHint`)
        },
        children: [Ub > 0 && (0, jG.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Ub ? Ob(`${nw}rxBlocksOne`) : Ob(`${nw}rxBlocks`, {
            blocks: String(Ub)
          })
        }), 0 === ub.length ? (0, jG.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Ob("battery" === hb ? `${nw}batPartsDone` : `${nw}rxShellDone`)
        }) : WY(ub).map((bb => {
          let [ub, hb, Bb] = bb;
          const Ub = function(bb) {
            const ub = nY[bb];
            if (void 0 === ub) return null;
            const [hb, Bb, Ob] = rY[ub].colour.map((bb => Math.round(255 * bb)));
            return `rgb(${hb}, ${Bb}, ${Ob})`
          }(ub);
          return (0, jG.jsxs)("span", {
            className: "Baf2RxChip",
            title: BG(Ob, ub),
            children: [(0, jG.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Ub ? {
                visibility: "hidden"
              } : {
                background: Ub
              },
              title: Ob(`${nw}rxShopGhost`)
            }), (0, jG.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, jG.jsx)(zO.d, {
                itemName: ub,
                amount: 0
              })
            }), (0, jG.jsx)("span", {
              className: "Baf2RxChipName",
              children: Gb ? `${hb} ${Lb=BG(Ob,ub),Lb.replace(/^(Reactor|Battery) (?=\S)/,"")}` : hb
            }), Bb >= hb ? (0, jG.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, jG.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Gb ? Ob(`${nw}rxShopShort`, {
                count: String(hb - Bb)
              }) : "\u2212" + (hb - Bb)
            })]
          }, ub);
          var Lb
        }))]
      })
    }
    const tw = "buildAFactory2Game:";

    function Jw(bb) {
      var ub, hb, Ob, Gb, Ub, Lb, Yb;
      let {
        store: Sb,
        close: ab
      } = bb;
      const {
        t: Hb
      } = (0, DO.K)(), wb = IU(), Zb = Ow(Sb), {
        explained: Xb,
        explain: pb
      } = FH("baf2RxExplained"), ob = (0, Bb.useCallback)(((bb, ub) => {
        pb(Hb(bb, ub))
      }), [pb, Hb]), Ab = null === Zb || void 0 === Zb ? void 0 : Zb.status, lb = !0 === (null === Ab || void 0 === Ab ? void 0 : Ab.baf2BatReadOnly), Kb = bb => {
        Ab && wb.send(Hu(Ab.baf2BatAt, bb))
      }, [Wb, Cb, db] = null !== (ub = null === Zb || void 0 === Zb ? void 0 : Zb.dims) && void 0 !== ub ? ub : [0, 0, 0], rb = zY(null !== (hb = null === Zb || void 0 === Zb ? void 0 : Zb.LH) && void 0 !== hb ? hb : 0), jb = !0 === (null === Ab || void 0 === Ab ? void 0 : Ab.baf2BatFormed), nb = null !== (Ob = null === Ab || void 0 === Ab ? void 0 : Ab.baf2BatStored) && void 0 !== Ob ? Ob : 0, Db = Math.max(1, null !== (Gb = null === Ab || void 0 === Ab ? void 0 : Ab.baf2BatIslandCap) && void 0 !== Gb ? Gb : 1), xb = Math.min(100, 100 * nb / Db), zb = null === Ab || void 0 === Ab ? void 0 : Ab.baf2BatNetPerS, gb = function(bb, ub, hb) {
        return hb > 0 && ub >= hb ? "full" : void 0 !== bb && bb >= .05 ? "charging" : void 0 !== bb && bb <= -.05 && ub > 0 ? "draining" : "steady"
      }(zb, nb, null !== (Ub = null === Ab || void 0 === Ab ? void 0 : Ab.baf2BatIslandCap) && void 0 !== Ub ? Ub : 0), ib = null !== (Lb = null === Ab || void 0 === Ab ? void 0 : Ab.baf2BatMadePerS) && void 0 !== Lb ? Lb : 0, vb = null !== (Yb = null === Ab || void 0 === Ab ? void 0 : Ab.baf2BatUsedPerS) && void 0 !== Yb ? Yb : 0;
      let tb, Jb = {},
        eb = "info";
      if (Ab)
        if (jb) "charging" === gb ? (tb = `${tw}batLine_charging`, Jb = {
          time: WG(Hb, (Db - nb) / Math.max(.05, null !== zb && void 0 !== zb ? zb : 0))
        }, eb = "ok") : "draining" === gb ? (tb = `${tw}batLine_draining`, Jb = {
          time: WG(Hb, nb / Math.max(.05, -(null !== zb && void 0 !== zb ? zb : 0)))
        }, eb = "warn") : tb = "full" === gb ? `${tw}batLine_full` : nb <= 0 && vb > 0 ? `${tw}batLine_empty` : `${tw}batLine_steady`;
        else {
          var Nb;
          const bb = dw({
            left: Ab.baf2BatNeed.reduce(((bb, ub) => {
              let [, hb] = ub;
              return bb + hb
            }), 0),
            bad: Ab.baf2BatBad,
            rods: 1,
            canFill: !0 === Ab.baf2BatCanFill,
            melted: !1
          });
          tb = bb.key, Jb = {
            count: String(null !== (Nb = bb.params.count) && void 0 !== Nb ? Nb : 0)
          }, eb = bb.tone
        }
      else tb = `${tw}batLine_steady`;
      const sb = Math.max(ib, vb, 1);
      return (0, jG.jsx)(WU.b, {
        close: ab,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, jG.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, jG.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, jG.jsx)(zO.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, jG.jsxs)("div", {
                children: [(0, jG.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Hb(`${tw}batTitle`)
                }), Ab && (0, jG.jsxs)("p", {
                  className: dO()("Baf2RxSubtitle", {
                    good: jb && "charging" === gb,
                    warn: jb && "draining" === gb
                  }),
                  children: [Wb, "\xd7", Cb, "\xd7", db, " \xb7 ", Hb(jb ? `${tw}batState_${gb}` : `${tw}rxSubPlanShort`)]
                })]
              })]
            }), (0, jG.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Ab && !lb && (0, jG.jsx)(Gw, {
                kind: "battery",
                cap: jb ? rb : void 0,
                busy: null === Zb || void 0 === Zb ? void 0 : Zb.busy.has("apart"),
                apart: () => {
                  Sb.tap("apart", (() => {
                    Kb("apart")
                  }))
                }
              }), (0, jG.jsx)(CU.i, {
                onClick: ab
              })]
            })]
          }), Zb && Ab && (0, jG.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, jG.jsxs)("div", {
              className: dO()("Baf2RxFlow Baf2BatFlow", {
                Plan: !jb
              }),
              children: [(0, jG.jsx)(EH, {
                kind: "Power",
                label: Hb(`${tw}batMade`),
                number: jb ? `\u26a1 ${zY(ib)}/s` : "\u2014",
                note: Hb(`${tw}batMadeNote`),
                share: jb ? ib / sb : void 0,
                onExplain: () => {
                  ob(`${tw}batWhy_made`)
                }
              }), (0, jG.jsx)(yH, {
                kind: "Power",
                step: jb ? lw(ib, sb) : 0,
                planned: !jb
              }), (0, jG.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  ob(`${tw}batWhy_store`)
                },
                children: [(0, jG.jsx)(VH, {
                  max: 100,
                  bands: [{
                    upTo: jb ? xb : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, jG.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, jG.jsx)("b", {
                    className: "Baf2BatStored",
                    children: jb ? Hb(`${tw}batStoredOf`, {
                      amount: zY(nb),
                      cap: zY(Ab.baf2BatIslandCap)
                    }) : Hb(`${tw}batWillHold`, {
                      cap: rb
                    })
                  }), (0, jG.jsx)("span", {
                    children: Hb(`${tw}batAdds`, {
                      cap: rb
                    })
                  }), jb && (0, jG.jsx)("small", {
                    children: Hb(`${tw}batBreakNote`, {
                      cap: rb
                    })
                  })]
                })]
              }), (0, jG.jsx)(yH, {
                kind: "Power",
                step: jb ? lw(vb, sb) : 0,
                planned: !jb
              }), (0, jG.jsx)(EH, {
                kind: "Power",
                label: Hb(`${tw}batUsed`),
                number: jb ? `\u26a1 ${zY(vb)}/s` : "\u2014",
                note: Hb(`${tw}batUsedNote`),
                share: jb ? vb / sb : void 0,
                onExplain: () => {
                  ob(`${tw}batWhy_used`)
                }
              })]
            }), (0, jG.jsx)(fH, {
              text: Hb(tb, Jb),
              tone: eb,
              explained: Xb
            }), lb ? (0, jG.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Hb(`${tw}rxNotYours`)
            }) : !jb && (0, jG.jsxs)(jG.Fragment, {
              children: [(0, jG.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, jG.jsx)(Yw, {
                  kind: "battery",
                  dims: Zb.dims,
                  cap: Ab.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: bb => {
                    Sb.resize(bb)
                  }
                }), (0, jG.jsx)(Sw, {
                  on: Zb.guide,
                  label: Hb(`${tw}rxGuide`),
                  toggle: () => {
                    Sb.toggleGuide()
                  }
                }), Ab.baf2BatCanFill && (0, jG.jsx)(CU.m, {
                  disabled: !CY("battery", Ab.baf2BatNeed) || Zb.busy.has("fill"),
                  onClick: () => {
                    Sb.tap("fill", (() => {
                      Kb("fill")
                    }))
                  },
                  children: Hb(`${tw}rxFill`)
                })]
              }), (0, jG.jsx)(vw, {
                need: Ab.baf2BatNeed,
                kind: "battery",
                explain: ob
              })]
            })]
          })]
        })
      })
    }
    const ew = "buildAFactory2Game:",
      Nw = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function sw(bb, ub) {
      return bb === bY ? null : ub ? "#4a4440" : bb < hY ? Nw[bb - uY] : bb === hY ? "#3fd0f0" : bb === BY ? "#2c3e4c" : "#55585e"
    }

    function Mw(bb) {
      let {
        inner: ub,
        looks: hb,
        layer: Bb,
        setLayer: Ob,
        glow: Gb,
        melted: Ub,
        explain: Lb
      } = bb;
      const {
        t: Yb
      } = (0, DO.K)(), [Sb, ab, Hb] = ub, wb = Math.max(0, Math.min(ab - 1, Bb)), Zb = [];
      for (let pb = 0; pb < Hb; pb++)
        for (let bb = 0; bb < Sb; bb++) {
          var Xb;
          const ub = null !== (Xb = hb[(wb * Hb + pb) * Sb + bb]) && void 0 !== Xb ? Xb : bY,
            Bb = sw(ub, Ub),
            Ob = ub >= uY && ub < hY;
          Zb.push(null === Bb ? (0, jG.jsx)("circle", {
            cx: bb + .5,
            cy: pb + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${bb},${pb}`) : (0, jG.jsx)("rect", {
            x: bb + .06,
            y: pb + .06,
            width: .88,
            height: .88,
            fill: Bb,
            opacity: Ob && !Ub ? .5 + .5 * Gb : 1,
            onClick: bb => {
              bb.stopPropagation();
              const hb = jw(ub);
              Lb(hb.key, hb.params)
            }
          }, `${bb},${pb}`))
        }
      return (0, jG.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, jG.jsx)("svg", {
          className: dO()("Baf2RxMapGrid", {
            Melted: Ub
          }),
          viewBox: `0 0 ${Math.max(1,Sb)} ${Math.max(1,Hb)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Yb(`${ew}rxWhy_core`),
          onClick: () => {
            Lb(`${ew}rxWhy_core`, {})
          },
          children: Zb
        }), ab > 1 && (0, jG.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, jG.jsx)("button", {
            type: "button",
            "aria-label": Yb(`${ew}rxLayerDown`),
            disabled: wb <= 0,
            onClick: () => {
              Ob(wb - 1)
            },
            children: "\u25bc"
          }), (0, jG.jsxs)("span", {
            children: [(0, jG.jsx)("span", {
              className: "HideNarrow",
              children: Yb(`${ew}rxLayer`, {
                n: String(wb + 1),
                of: String(ab)
              })
            }), (0, jG.jsx)("span", {
              className: "ShowNarrow",
              children: Yb(`${ew}rxLayerShort`, {
                n: String(wb + 1),
                of: String(ab)
              })
            })]
          }), (0, jG.jsx)("button", {
            type: "button",
            "aria-label": Yb(`${ew}rxLayerUp`),
            disabled: wb >= ab - 1,
            onClick: () => {
              Ob(wb + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const mw = "buildAFactory2Game:",
      Iw = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: yL,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: pY,
        kind: "red"
      }],
      Pw = [50, yL, 100];

    function qw(bb) {
      let {
        stats: ub,
        t: hb,
        explain: Bb
      } = bb;
      const Ob = UY(ub),
        Gb = Math.max(1, ub.fuelHeat, ub.cooling, ub.size),
        Ub = [
          ["fuel", `${mw}rxBarRods`, ub.fuelHeat],
          ["cooling", `${mw}rxBarCooling`, ub.cooling],
          ["size", `${mw}rxBarSize`, ub.size]
        ];
      return (0, jG.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Bb(`${mw}rxWhy_bars`)
        },
        children: [(0, jG.jsx)("span", {
          className: "Baf2RxMostLine",
          children: hb(`${mw}rxMost`, {
            amount: zY(Math.min(ub.fuelHeat, ub.cooling, ub.size))
          })
        }), (0, jG.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Ub.map((bb => {
            let [ub, Bb, Ub] = bb;
            return (0, jG.jsxs)("span", {
              className: dO()("Baf2RxMostBar", ub, {
                Low: ub === Ob
              }),
              children: [(0, jG.jsx)("small", {
                children: hb(Bb)
              }), (0, jG.jsx)("i", {
                children: (0, jG.jsx)("b", {
                  style: {
                    width: 100 * Ub / Gb + "%"
                  }
                })
              })]
            }, ub)
          }))
        })]
      })
    }

    function Ew(bb) {
      var ub;
      let {
        view: hb,
        heat: Ob,
        settle: Gb,
        settleLine: Ub,
        settleBad: Lb,
        explain: Yb
      } = bb;
      const {
        t: Sb
      } = (0, DO.K)(), {
        status: ab
      } = hb, Hb = ab.baf2RxAt.join(","), [wb, Zb] = (0, Bb.useState)((() => rw(hb.inner)));
      (0, Bb.useEffect)((() => {
        Zb(rw(hb.inner))
      }), [Hb, hb.inner[1]]);
      const Xb = null !== (ub = hb.plan) && void 0 !== ub ? ub : AY(ab),
        pb = hb.plan ? hb.plan.powerPerUnit : ab.baf2RxStats[8],
        ob = null === Ob ? null : "alarm" === (Ab = XY(ab)) ? "red" : "hot" === Ab ? "hot" : "warm" === Ab ? "warm" : "cold";
      var Ab;
      const lb = !ab.baf2RxFormed && function(bb, ub) {
          return 0 !== (bb.baf2RxFlags & ub)
        }(ab, Xu),
        Kb = ab.baf2RxDamage,
        Wb = ab.baf2RxDamageTrend;
      return (0, jG.jsxs)("div", {
        className: dO()("Baf2RxCore", null !== ob && void 0 !== ob ? ob : "plan"),
        children: [(0, jG.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, jG.jsx)(Mw, {
            inner: hb.inner,
            looks: hb.looks,
            layer: wb,
            setLayer: Zb,
            glow: ab.baf2RxFormed ? ab.baf2RxThrottle / 100 : 1,
            melted: lb,
            explain: Yb
          }), (0, jG.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Yb(`${mw}rxWhy_heat`)
            },
            children: [null !== Ob ? (0, jG.jsxs)(jG.Fragment, {
              children: [(0, jG.jsx)("b", {
                children: Sb(`${mw}rxHeatPct`, {
                  pct: String(Ob)
                })
              }), (0, jG.jsx)("span", {
                className: dO()("Baf2RxBand", ob),
                children: Sb(`${mw}rxBand_${ob}`)
              })]
            }) : (0, jG.jsx)("b", {
              children: Sb(`${mw}rxHeat`)
            }), null !== Ub && (0, jG.jsx)("span", {
              className: dO()("Baf2RxSettle", {
                Bad: Lb
              }),
              children: Ub
            }), Kb >= 1 && (0, jG.jsxs)("span", {
              className: dO()("Baf2RxDamage", Wb),
              children: [Sb(`${mw}rxDamageLine`, {
                pct: String(Kb)
              }), " \xb7 ", Sb(`${mw}rxDamage_${Wb}`), (0, jG.jsx)("i", {
                children: (0, jG.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Kb)}%`
                  }
                })
              })]
            })]
          }), (0, jG.jsx)(VH, {
            max: pY,
            bands: Iw,
            ticks: Pw,
            now: Ob,
            settle: Gb,
            settleTone: Lb ? "bad" : null,
            onExplain: () => {
              Yb(`${mw}rxWhy_heat`)
            }
          })]
        }), (0, jG.jsx)(qw, {
          stats: Xb,
          t: Sb,
          explain: Yb
        }), pb > 0 && (0, jG.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Yb(`${mw}rxWhy_perPellet`)
          },
          children: Sb(`${mw}rxPerPellet`, {
            amount: zY(pb)
          })
        })]
      })
    }

    function yw(bb, ub) {
      var hb;
      if (!bb.baf2RxStore) return {
        note: ub(`${mw}rxUpTo`, {
          amount: zY(bb.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Bb, Ob] = bb.baf2RxStore, Gb = Ob > 0 ? Bb / Ob : 0, Ub = String(Math.floor(100 * Gb)), Lb = null !== (hb = bb.baf2RxStoreNetPerS) && void 0 !== hb ? hb : 0, Yb = function(bb) {
        var ub, hb;
        const [Bb, Ob] = null !== (ub = bb.baf2RxStore) && void 0 !== ub ? ub : [0, 0], Gb = null !== (hb = bb.baf2RxStoreNetPerS) && void 0 !== hb ? hb : 0;
        return Ob > 0 && Bb >= Ob - 1 ? "running" === bb.baf2RxState ? `${aw}rxStoreFull` : `${aw}rxStoreFullOnly` : Gb > .05 ? `${aw}rxStoreLine` : Gb < -.05 ? "running" === bb.baf2RxState ? `${aw}rxStoreUsesMore` : `${aw}rxStoreDraining` : `${aw}rxStorePct`
      }(bb);
      return {
        note: ub(Yb, Yb === `${mw}rxStoreLine` ? {
          pct: Ub,
          time: WG(ub, (Ob - Bb) / Lb)
        } : {
          pct: Ub
        }),
        share: Gb
      }
    }

    function Vw(bb) {
      let {
        view: ub,
        explain: hb,
        preview: Bb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)(), {
        status: Gb
      } = ub, Ub = TL(QL(...ub.dims)), Lb = Aw(Gb), Yb = Math.min(Math.round(Gb.baf2RxFuel), Ub.fuel), Sb = "running" === Gb.baf2RxState, ab = Sb ? lw(Gb.baf2RxOut, Gb.baf2RxMaxNow) : 0, Hb = function(bb, ub, hb) {
        const Bb = Xw(bb),
          Ob = "cryo" === Bb.Pw,
          Gb = hb ? hb.coolantSecs : Bb.pct >= 100 && bb.baf2RxOut >= 1 ? ow(bb, bb.baf2RxThrottle).coolantSecs : null;
        let Ub, Lb = !1;
        if (Bb.pct < 100) {
          const hb = 1 === Bb.makersShort,
            Gb = !Ob && bb.baf2RxCryoOpen ? "OrCryo" : "";
          Ub = Bb.makersShort > 0 ? ub(Ob ? `${mw}rxCryoAddMixer${hb?"":"s"}` : `${mw}rxWaterAddCondenser${hb?"":"s"}${Gb}`, {
            count: String(Bb.makersShort)
          }) : ub(`${mw}rxWaterNeeds`, {
            rate: Lw(Bb.needPerS)
          })
        } else if (null !== Gb) Ub = ub(`${mw}rxWaterRunsOut`, {
          time: WG(ub, Gb)
        });
        else if (Bb.waterBeside > 0) Ub = ub(`${mw}rxCryoPlusWater`, {
          rate: Lw(Bb.waterBeside)
        });
        else {
          const bb = function(bb) {
            return bb.inPerS <= 0 ? "rxWaterNoSupply" : bb.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Bb);
          Lb = "rxWaterNoSupply" === bb, Ub = ub(`${mw}${bb}`, {
            amount: zY(Bb.stored)
          })
        }
        return {
          kind: Ob ? "Cryo" : "Water",
          label: ub(Ob ? `${mw}rxCryo` : `${mw}rxWater`),
          number: `${Lw(Bb.usePerS)}/s`,
          preview: hb ? `${Lw(hb.coolPerS)}/s` : null,
          note: Ub,
          tone: "noWater" === bb.baf2RxState ? "danger" : Lb ? "warn" : (Yb = Bb.pct, Sb = Gb, Yb < 100 ? "danger" : null === Sb ? null : Sb < 300 ? "danger" : "warn"),
          share: Bb.pct / 100,
          why: Ob ? `${mw}rxWhy_cryo` : `${mw}rxWhy_water`,
          short: Bb.pct < 100
        };
        var Yb, Sb
      }(Gb, Ob, Bb), wb = dY(Gb, Ub.waste, Lb), Zb = yw(Gb, Ob), Xb = ow(Gb, Gb.baf2RxTarget), pb = Sb && Math.abs(Xb.settle - Gb.baf2RxHeat) >= 3, ob = Bb ? Bb.pelletsPerMin / 60 : null;
      return (0, jG.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, jG.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, jG.jsx)(EH, {
            kind: "Fuel",
            label: Ob(`${mw}rxFuel`),
            number: String(Yb),
            preview: null !== ob && ob > 0 && Gb.baf2RxFuel > 0 ? WG(Ob, Gb.baf2RxFuel / ob) : null,
            note: Gb.baf2RxFuel <= 0 ? Ob(`${mw}rxFuelEmpty`) : Lb > 0 ? Ob(`${mw}rxFuelLeft`, {
              time: WG(Ob, Gb.baf2RxFuel / Lb)
            }) : Ob(1 === Yb ? `${mw}rxFuelPellet` : `${mw}rxFuelPellets`),
            tone: "noFuel" === Gb.baf2RxState ? "danger" : Gb.baf2RxFuel < 2 ? "warn" : null,
            share: Gb.baf2RxFuel / Ub.fuel,
            onExplain: () => {
              hb(`${mw}rxWhy_fuel`)
            }
          }), (0, jG.jsx)(EH, {
            kind: Hb.kind,
            label: Hb.label,
            number: Hb.number,
            preview: Hb.preview,
            note: Hb.note,
            tone: Hb.tone,
            share: Hb.share,
            onExplain: () => {
              hb(Hb.why)
            }
          })]
        }), (0, jG.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, jG.jsx)(yH, {
            kind: "Fuel",
            step: ab,
            short: "noFuel" === Gb.baf2RxState
          }), (0, jG.jsx)(yH, {
            kind: Hb.kind,
            step: ab,
            short: Hb.short || "noWater" === Gb.baf2RxState
          })]
        }), (0, jG.jsx)(Ew, {
          view: ub,
          heat: Gb.baf2RxHeat,
          settle: Math.min(pY, Xb.settle),
          settleLine: pb ? Ob(`${mw}rxHeatSettles`, {
            pct: String(Math.round(Xb.settle)),
            time: WG(Ob, Xb.settleS)
          }) : null,
          settleBad: Xb.settle > 100,
          explain: hb
        }), (0, jG.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, jG.jsx)(yH, {
            kind: "Power",
            step: ab
          }), (0, jG.jsx)(yH, {
            kind: "Waste",
            step: Sb && Gb.baf2RxFuel - Gb.baf2RxPu > 0 ? ab : 0,
            short: wb.full
          })]
        }), (0, jG.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, jG.jsx)(EH, {
            kind: "Power",
            label: Ob(`${mw}rxPowerOut`),
            number: `\u26a1 ${zY(Gb.baf2RxOut)}/s`,
            preview: Bb ? zY(Bb.out) : null,
            note: Zb.note,
            share: Zb.share,
            onExplain: () => {
              hb(`${mw}rxWhy_power`)
            }
          }), (0, jG.jsx)(EH, {
            kind: "Waste",
            label: Ob(`${mw}rxWaste`),
            number: `${Math.floor(Gb.baf2RxWaste)}/${Ub.waste}`,
            note: wb.full ? Ob(`${mw}rxWasteFull`) : null !== wb.fullInS ? Ob(`${mw}rxWasteFullIn`, {
              time: WG(Ob, wb.fullInS)
            }) : Ob(`${mw}rxWasteSpent`),
            tone: "wasteFull" === Gb.baf2RxState ? "danger" : wb.full ? "warn" : null,
            share: Gb.baf2RxWaste / Ub.waste,
            onExplain: () => {
              hb(`${mw}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Fw(bb) {
      let {
        view: ub,
        explain: hb
      } = bb;
      const {
        t: Bb
      } = (0, DO.K)(), Ob = ub.plan;
      if (!Ob) return null;
      const Gb = Ob.fuelHeat <= 0 ? null : Ob.cooling > 0 ? Math.min(pY, 100 * Ob.fuelHeat / Ob.cooling) : pY,
        Ub = Bb(`${mw}rxPlanAtFull`);
      return (0, jG.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, jG.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, jG.jsx)(EH, {
            kind: "Fuel",
            label: Bb(`${mw}rxFuel`),
            number: Bb(`${mw}rxPlanPerMin`, {
              amount: gY(Ob.pelletsPerMin)
            }),
            note: Bb(`${mw}rxPlanPellets`),
            onExplain: () => {
              hb(`${mw}rxWhy_fuel`)
            }
          }), (0, jG.jsx)(EH, {
            kind: "Water",
            label: Bb(`${mw}rxWater`),
            number: `${Lw(Ob.waterPerS)}/s`,
            note: ub.status.baf2RxCryoOpen && Ob.waterPerS > 0 ? Bb(`${mw}rxPlanOrCryo`, {
              rate: Lw(HY(Ob, Qb.f) * Qb.k)
            }) : Ub,
            onExplain: () => {
              hb(`${mw}rxWhy_water`)
            }
          })]
        }), (0, jG.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, jG.jsx)(yH, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, jG.jsx)(yH, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, jG.jsx)(Ew, {
          view: ub,
          heat: null,
          settle: Gb,
          settleLine: null === Gb ? null : Bb(`${mw}rxPlanHeat`, {
            pct: String(Math.round(Gb))
          }),
          settleBad: null !== Gb && Gb > 100,
          explain: hb
        }), (0, jG.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, jG.jsx)(yH, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, jG.jsx)(yH, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, jG.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, jG.jsx)(EH, {
            kind: "Power",
            label: Bb(`${mw}rxPowerOut`),
            number: `\u26a1 ${zY(Ob.max)}/s`,
            note: Ub,
            onExplain: () => {
              hb(`${mw}rxWhy_power`)
            }
          }), (0, jG.jsx)(EH, {
            kind: "Waste",
            label: Bb(`${mw}rxWaste`),
            number: Bb(`${mw}rxPlanPerMin`, {
              amount: gY(Ob.pelletsPerMin)
            }),
            note: Bb(`${mw}rxWasteSpent`),
            onExplain: () => {
              hb(`${mw}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const fw = "buildAFactory2Game:",
      kw = {
        key: `${fw}rxWaiting`,
        params: {},
        tone: "info"
      };

    function Tw(bb, ub) {
      return 0 !== (bb.baf2RxFlags & ub)
    }

    function Qw(bb) {
      var ub, hb;
      let {
        store: Ob,
        close: Gb
      } = bb;
      const {
        t: Ub
      } = (0, DO.K)(), Lb = Ow(Ob), {
        explained: Yb,
        hinting: Sb,
        explain: ab,
        explainOnce: Hb
      } = FH("baf2RxExplained"), wb = (0, Bb.useCallback)(((bb, ub) => {
        ab(Ub(bb, ub))
      }), [ab, Ub]), Zb = (0, Bb.useCallback)(((bb, ub) => {
        Hb(bb, Ub(bb, ub))
      }), [Hb, Ub]), [Xb, pb] = (0, Bb.useState)(!1), [ob, Ab] = (0, Bb.useState)(!1), lb = null === Lb || void 0 === Lb ? void 0 : Lb.status, Kb = null === lb || void 0 === lb ? void 0 : lb.baf2RxAt.join(","), Wb = !0 === (null === lb || void 0 === lb ? void 0 : lb.baf2RxFormed);
      (0, Bb.useEffect)((() => {
        Ab(!1), pb(!1)
      }), [Kb, Wb]), (0, Bb.useEffect)((() => (Ob.opened(), () => {
        Ob.closed()
      })), [Ob]);
      const Cb = void 0 !== lb && Tw(lb, Au),
        db = lb ? Wb ? XY(lb) : null !== Lb && void 0 !== Lb && Lb.plan ? function(bb, ub) {
          if (bb <= 0) return "off";
          if (ub <= 0) return "alarm";
          const hb = 100 * bb / ub;
          return hb < 50 ? "calm" : hb < LY ? "warm" : hb <= 100 ? "hot" : "alarm"
        }(Lb.plan.fuelHeat, Lb.plan.cooling) : "off" : "off",
        rb = lb ? oY(lb) : null,
        jb = Lb ? Lb.waiting ? kw : Wb ? Cw(Lb.status) : function(bb) {
          var ub, hb;
          const {
            status: Bb
          } = bb;
          return dw({
            left: Bb.baf2RxNeed.reduce(((bb, ub) => {
              let [, hb] = ub;
              return bb + hb
            }), 0),
            bad: Bb.baf2RxBad,
            rods: null !== (ub = null === (hb = bb.plan) || void 0 === hb ? void 0 : hb.rods) && void 0 !== ub ? ub : 0,
            canFill: Tw(Bb, pu),
            melted: Tw(Bb, Xu),
            idle: bb.looks.reduce(((bb, ub) => bb + (ub === BY ? 1 : 0)), 0)
          })
        }(Lb) : null,
        nb = Sb && null !== jb && ("ok" === jb.tone || "info" === jb.tone),
        Db = lb ? function(bb) {
          const ub = 0 !== (bb.baf2RxFlags & wu),
            hb = bb.baf2RxHeat < FL;
          return 0 !== (bb.baf2RxFlags & Xu) || hb && (ub || !bb.baf2RxFormed) ? null : bb.baf2RxFormed && !ub ? {
            key: `${ZY}rxApartScram`,
            params: {}
          } : {
            key: `${ZY}rxApartCooling`,
            params: {
              pct: String(FL)
            }
          }
        }(lb) : null,
        [xb, zb, gb] = null !== (ub = null === Lb || void 0 === Lb ? void 0 : Lb.dims) && void 0 !== ub ? ub : [0, 0, 0],
        ib = `${xb}\xd7${zb}\xd7${gb}`;
      return (0, jG.jsx)(WU.b, {
        close: Gb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, jG.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, jG.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, jG.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, jG.jsx)(Uw, {
                mood: db
              }), (0, jG.jsxs)("div", {
                children: [(0, jG.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Ub(`${fw}rxTitle`)
                }), Lb && (0, jG.jsxs)("p", {
                  className: dO()("Baf2RxSubtitle", Wb && (null === rb || void 0 === rb ? void 0 : rb.tone)),
                  children: [Wb && !Cb ? (0, jG.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Ub(`${fw}rxChangeSize`),
                    onClick: () => {
                      if (!lb) return;
                      const bb = Tw(lb, wu);
                      var ub;
                      (ub = {
                        scram: bb,
                        heat: lb.baf2RxHeat
                      }).scram && ub.heat < FL ? pb(!0) : wb(bb ? `${fw}rxResizeCooling` : `${fw}rxResizeHot`, {
                        pct: String(FL)
                      })
                    },
                    children: [ib, " \u270e"]
                  }) : ib, " \xb7 ", Ub(Wb ? null !== (hb = null === rb || void 0 === rb ? void 0 : rb.label) && void 0 !== hb ? hb : `${fw}rxState_running` : `${fw}rxSubPlanShort`)]
                })]
              })]
            }), (0, jG.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Lb && !Cb && (0, jG.jsx)(Gw, {
                kind: "reactor",
                busy: Lb.busy.has("apart"),
                whyNot: Db ? () => {
                  wb(Db.key, Db.params)
                } : null,
                apart: () => {
                  Ob.tap("apart", (() => {
                    Ob.send("apart")
                  }))
                }
              }), (0, jG.jsx)(CU.i, {
                onClick: Gb
              })]
            })]
          }), Lb && jb && (0, jG.jsxs)("div", {
            className: "Baf2RxBody",
            children: [Wb ? (0, jG.jsx)(Vw, {
              view: Lb,
              explain: wb,
              preview: pw(Lb.status)
            }) : (0, jG.jsx)(Fw, {
              view: Lb,
              explain: wb
            }), (0, jG.jsx)(fH, {
              text: nb ? `${Kw(Ub,jb)} ${Ub(`${fw}rxTapHint`)}` : Kw(Ub, jb),
              tone: jb.tone,
              explained: Yb
            }), Cb ? (0, jG.jsxs)(jG.Fragment, {
              children: [(0, jG.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Ub(`${fw}rxNotYours`)
              }), (0, jG.jsx)(bw, {
                status: Lb.status,
                store: Ob,
                readOnly: !0
              })]
            }) : Wb && !ob ? (0, jG.jsxs)(jG.Fragment, {
              children: [(0, jG.jsx)(gw, {
                view: Lb,
                store: Ob,
                explain: wb,
                explainOnce: Zb
              }), void 0 !== Lb.status.baf2RxLayout && cH(Lb.status) && (0, jG.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, jG.jsx)(bw, {
                  status: Lb.status,
                  store: Ob,
                  readOnly: !1,
                  bare: !0
                }), (0, jG.jsx)(RH, {
                  status: Lb.status,
                  store: Ob,
                  busy: Lb.busy.has("fill")
                })]
              })]
            }) : (0, jG.jsxs)(jG.Fragment, {
              children: [(0, jG.jsx)(iw, {
                view: Lb,
                store: Ob,
                keepSize: Wb ? () => {
                  Ab(!1)
                } : void 0
              }), KY(Lb.dims, Lb.status.baf2RxDims) && (0, jG.jsx)(vw, {
                need: Lb.status.baf2RxNeed,
                explain: wb
              }), (0, jG.jsx)(bw, {
                status: Lb.status,
                store: Ob,
                readOnly: !1
              })]
            }), Xb && (0, jG.jsx)(Bw, {
              id: "baf2ResizeTitle",
              title: `${fw}rxResizeConfirmTitle`,
              body: `${fw}rxResizeConfirmBody`,
              yes: `${fw}rxChangeSize`,
              cancel: () => {
                pb(!1)
              },
              confirm: () => {
                pb(!1), Ab(!0)
              }
            })]
          })]
        })
      })
    }
    class Rw {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(bb) {
        this.view = bb;
        for (const ub of this.listeners) ub()
      }
      get() {
        return this.view
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
    }

    function bZ(bb) {
      let {
        commands: ub,
        store: hb,
        power: Ob,
        water: Gb,
        reactor: Ub,
        battery: Lb,
        collider: Yb,
        terminal: Sb,
        quests: ab,
        close: Hb,
        leave: wb,
        askIslands: Zb,
        showCore: Xb,
        openSocial: pb
      } = bb;
      const {
        userContext: ob
      } = (0, tL.d)(), Ab = vL.featureFlags.useSocialFeatures && ob.isLoggedIn(), [lb, Kb] = (0, Bb.useState)((() => hb.get()));
      (0, Bb.useEffect)((() => hb.subscribe((() => {
        Kb(hb.get())
      }))), [hb]);
      const Wb = "islands" === (null === lb || void 0 === lb ? void 0 : lb.kind) ? lb.backToCore : void 0;
      return (0, jG.jsxs)(mU.Provider, {
        value: ub,
        children: ["core" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(SH, {
          view: lb.core,
          close: Hb,
          askIslands: Zb
        }), "dropMap" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(ZH, {
          message: lb.dropMap,
          quests: ab,
          close: Hb,
          leave: wb
        }), "islands" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(iH, {
          message: lb.islands,
          arrivedAtMs: lb.arrivedAtMs,
          close: Wb ? () => {
            Xb(Wb)
          } : Hb,
          leave: wb,
          openSocial: Ab ? pb : null
        }), "quests" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(xa, {
          store: ab,
          close: Hb
        }), "transfer" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(ua, {
          message: lb.transfer,
          arrivedAtMs: lb.arrivedAtMs,
          close: Hb,
          leave: wb
        }), "power" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(gU, {
          store: Ob,
          close: Hb
        }), "water" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(XL, {
          store: Gb,
          close: Hb
        }), "reactor" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(Qw, {
          store: Ub,
          close: Hb
        }), "battery" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(Jw, {
          store: Lb,
          close: Hb
        }), "collider" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(pS, {
          store: Yb,
          close: Hb
        }), "terminal" === (null === lb || void 0 === lb ? void 0 : lb.kind) && (0, jG.jsx)(qH, {
          store: Sb,
          close: Hb,
          send: bb => {
            ub.send(bb)
          }
        })]
      })
    }
    var uZ = hb(38120);

    function hZ(bb, ub) {
      return bb.distSq - ub.distSq
    }
    class BZ {
      constructor() {
        this.list = [], this.pool = []
      }
      add(bb, ub, hb, Bb) {
        let Ob = this.pool[this.list.length];
        Ob || (Ob = {
          x: 0,
          y: 0,
          distSq: 0,
          element: ub,
          liftRem: hb,
          dot: Bb
        }, this.pool.push(Ob)), Ob.x = bb.x, Ob.y = bb.y, Ob.distSq = bb.distSq, Ob.element = ub, Ob.liftRem = hb, Ob.dot = Bb, this.list.push(Ob)
      }
    }
    class OZ {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = bb, this.sizes = new WeakMap, this.observer = new ResizeObserver((bb => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const ub of bb) {
            const bb = ub.borderBoxSize[0];
            "dot" !== ub.target.dataset.crowded && 0 !== bb.inlineSize && 0 !== bb.blockSize && this.sizes.set(ub.target, {
              width: bb.inlineSize,
              height: bb.blockSize
            })
          }
        })), this.remPx = 16, this.HZ = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.lK = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.lK)
      }
      observe(bb) {
        this.observer.observe(bb)
      }
      unobserve(bb) {
        this.observer.unobserve(bb)
      }
      run(bb) {
        const ub = bb.list;
        ub.sort(hZ);
        const hb = this.pxPerVw,
          Bb = this.pxPerVh;
        this.HZ.length = 0, this.hud && this.HZ.push(...this.hud.boxes(performance.now()));
        for (const Gb of ub) {
          var Ob;
          const bb = this.sizes.get(Gb.element);
          let ub = "no";
          if (bb && bb.width > 0) {
            const Ob = Gb.x * hb,
              Ub = Gb.y * Bb - Gb.liftRem * this.remPx;
            this.fit(Ob, Ub, bb.width, bb.height) || (ub = Gb.dot && this.fit(Ob, Ub, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Ob = Gb.element.dataset.crowded) && void 0 !== Ob ? Ob : "no") !== ub && ("no" === ub ? delete Gb.element.dataset.crowded : Gb.element.dataset.crowded = ub), "hidden" !== ub && (0, uZ.b)(Gb.element, Gb.x, Gb.y)
        }
        ub.length = 0
      }
      fit(bb, ub, hb, Bb) {
        const Ob = bb - hb / 2,
          Gb = bb + hb / 2,
          Ub = ub - Bb,
          Lb = this.HZ;
        for (let Yb = 0; Yb < Lb.length; Yb += 4)
          if (Ob < Lb[Yb + 1] - 2 && Gb > Lb[Yb] + 2 && Ub < Lb[Yb + 3] - 2 && ub > Lb[Yb + 2] + 2) return !1;
        return Lb.push(Ob, Gb, Ub, ub), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.lK)
      }
    }
    const GZ = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class UZ {
      constructor() {
        this.cards = GZ.map((bb => document.getElementsByClassName(bb))), this.watched = GZ.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(bb) {
        bb - this.refreshedAt > 1e3 && (this.refreshedAt = bb, this.stale = !0);
        for (let hb = 0; hb < this.cards.length; hb++) {
          var ub;
          const bb = null !== (ub = this.cards[hb][0]) && void 0 !== ub ? ub : null;
          bb !== this.watched[hb] && this.watch(hb, bb)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let bb = 0; bb < this.watched.length; bb++) this.watch(bb, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const bb = this.list;
        bb.length = 0;
        for (const ub of this.watched) {
          if (!ub || ub.closest(".NoRoom")) continue;
          const hb = ub.getBoundingClientRect();
          let Bb = hb.top,
            Ob = hb.bottom;
          if (ub === this.watched[0] && this.hud) {
            const bb = this.hud.getBoundingClientRect();
            Bb = Math.max(Bb, bb.top), Ob = Math.min(Ob, bb.bottom)
          }
          hb.width > 0 && Ob > Bb && bb.push(hb.left, hb.right, Bb, Ob)
        }
      }
      watch(bb, ub) {
        const hb = this.watched[bb];
        var Bb, Ob;
        (hb && this.sizes.unobserve(hb), this.watched[bb] = ub, this.stale = !0, ub && this.sizes.observe(ub), 0 === bb) && (null === (Bb = this.hud) || void 0 === Bb || Bb.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Ob = null === ub || void 0 === ub ? void 0 : ub.closest(".Baf2QuestHud")) && void 0 !== Ob ? Ob : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const LZ = [0, 0, 0],
      YZ = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function SZ(bb, ub, hb, Bb, Ob, Gb) {
      let [Ub, Lb, Yb] = Bb;
      const Sb = (Ub + .5 - hb[0]) ** 2 + (Lb - hb[1]) ** 2 + (Yb + .5 - hb[2]) ** 2;
      let ab = null;
      Sb <= Gb ** 2 && (LZ[0] = Ub + .5, LZ[1] = Lb + Ob, LZ[2] = Yb + .5, ab = ub.projectWorldPosToViewport(LZ));
      const Hb = null !== ab && ab.x > -5 && ab.x < 105 && ab.y > -5 && ab.y < 105;
      return (0, uZ.d)(bb, !Hb), Hb ? (YZ.x = ab.x, YZ.y = ab.y, YZ.distSq = Sb, YZ) : null
    }
    class aZ {
      constructor(bb) {
        this.onElement = bb, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(bb) {
        const ub = [];
        for (let hb = 0; hb + 4 < bb.length; hb += 5) {
          const Bb = [bb[hb], bb[hb + 1], bb[hb + 2]];
          ub.push({
            key: Bb.join(","),
            pos: Bb,
            status: BO[bb[hb + 3]],
            kind: xu[bb[hb + 4]]
          })
        }
        this.markers = ub, this.keys = new Set(ub.map((bb => {
          let {
            key: ub
          } = bb;
          return ub
        }))), this.notify()
      }
      covers(bb) {
        return this.keys.has(bb)
      }
      get() {
        return this.markers
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      bind(bb) {
        let ub = this.refs.get(bb);
        return ub || (ub = ub => {
          const hb = this.elements.get(bb);
          var Bb, Ob;
          hb && (null === (Bb = this.onElement) || void 0 === Bb || Bb.call(this, hb, !1));
          ub ? (this.elements.set(bb, ub), null === (Ob = this.onElement) || void 0 === Ob || Ob.call(this, ub, !0)) : (this.elements.delete(bb), this.refs.delete(bb))
        }, this.refs.set(bb, ub)), ub
      }
      onAfterRender(bb, ub, hb) {
        for (const Bb of this.markers) {
          const Ob = this.elements.get(Bb.key);
          if (!Ob) continue;
          const Gb = SZ(Ob, bb, ub, Bb.pos, 1.05, 24);
          Gb && hb.add(Gb, Ob, .45, !0)
        }
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
    }
    const HZ = {
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
    const wZ = (0, Bb.memo)((function(bb) {
        let {
          status: ub,
          kind: hb,
          bindRef: Bb
        } = bb;
        const {
          t: Ob
        } = (0, DO.K)(), Gb = function(bb, ub) {
          var hb;
          if ("noFuel" === bb) {
            var Bb, Ob;
            const bb = null === (Bb = Ju[ub]) || void 0 === Bb || null === (Ob = Bb.fuels) || void 0 === Ob ? void 0 : Ob.find((bb => Bh.includes(bb)));
            return null !== bb && void 0 !== bb ? bb : HZ.noFuel
          }
          return void 0 !== (null === (hb = Ju[ub]) || void 0 === hb ? void 0 : hb.cryoMade) ? "noOutlet" === bb ? "Fluid Pipe" : "noInput" === bb ? "Biomass" : HZ[bb] : HZ[bb]
        }(ub, hb);
        return (0, jG.jsxs)("div", {
          className: dO()("Baf2StallMarker", ub),
          ref: Bb,
          hidden: !0,
          children: [Gb && (0, jG.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, jG.jsx)(zO.d, {
              itemName: Gb,
              amount: 0
            })
          }), (0, jG.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === ub ? "?" : "!"
          }), (0, jG.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Ob(`buildAFactory2Game:stallTag_${ub}`)
          })]
        })
      })),
      ZZ = (0, Bb.memo)((function(bb) {
        let {
          controller: ub
        } = bb;
        const [hb, Ob] = (0, Bb.useState)((() => ub.get()));
        return (0, Bb.useEffect)((() => (Ob(ub.get()), ub.subscribe((() => {
          Ob(ub.get())
        })))), [ub]), (0, jG.jsx)("div", {
          className: "Baf2StallMarkers",
          children: hb.map((bb => (0, jG.jsx)(wZ, {
            status: bb.status,
            kind: bb.kind,
            bindRef: ub.bind(bb.key)
          }, bb.key)))
        })
      })),
      XZ = ph.l + 150;
    class pZ {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(bb, ub) {
        const hb = ub - bb;
        null === this.offset || hb < this.offset ? this.offset = hb : this.offset = Math.min(hb, this.offset + .02 * (ub - this.sampledAt)), this.sampledAt = ub
      }
      toLocal(bb) {
        var ub;
        return bb + (null !== (ub = this.offset) && void 0 !== ub ? ub : 0) + XZ
      }
    }
    var oZ = hb(38123);
    const AZ = 15 * Math.PI / 180,
      lZ = Math.SQRT2,
      KZ = [4, 2];

    function WZ(bb, ub) {
      const hb = [1 / 0, 1 / 0, 1 / 0],
        Bb = [-1 / 0, -1 / 0, -1 / 0];
      for (const Yb of bb)
        for (let bb = 0; bb < 3; bb++) hb[bb] = Math.min(hb[bb], Yb[bb]), Bb[bb] = Math.max(Bb[bb], Yb[bb]);
      const Ob = (hb[0] + Bb[0]) / 2,
        Gb = (hb[1] + Bb[1]) / 2,
        Ub = (hb[2] + Bb[2]) / 2;
      let Lb = 0;
      for (const Yb of bb) Lb = Math.max(Lb, Math.hypot(Yb[0] - Ob, Yb[1] - Gb, Yb[2] - Ub));
      return {
        x: Ob,
        y: Gb,
        z: Ub,
        r: Lb + ub
      }
    }

    function CZ(bb, ub, hb) {
      const Bb = ub.x - bb.x,
        Ob = ub.y - bb.y,
        Gb = ub.z - bb.z,
        Ub = Math.sqrt(Bb * Bb + Ob * Ob + Gb * Gb);
      if (Ub <= ub.r + 8) return 1;
      const Lb = ub.r / Ub,
        Yb = Math.sqrt(1 - Lb * Lb),
        Sb = Yb < -bb.cosHalf,
        ab = (Bb * bb.dx + Ob * bb.dy + Gb * bb.dz) / Ub;
      if (!Sb && ab < bb.cosHalf * Yb - bb.sinHalf * Lb) return 0;
      const Hb = hb * lZ * bb.frameMs * bb.pxPerBlock / (Ub - ub.r);
      for (let wb = 0; wb < KZ.length; wb++)
        if (Hb * KZ[wb] <= 1) return KZ[wb];
      return 1
    }

    function dZ(bb, ub) {
      return {
        name: bb,
        at: ub,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const rZ = [0, 0, 0];

    function jZ(bb, ub, hb) {
      let [, Bb, Ob, Gb, Ub, Lb] = ub;
      const Yb = ph.g * (null !== Ub && void 0 !== Ub ? Ub : 1),
        Sb = [];
      for (let Zb = 0; Zb < Bb.length; Zb += 3) Sb.push([Bb[Zb] + .5, Bb[Zb + 1] + .65, Bb[Zb + 2] + .5]);
      const ab = [];
      for (let Zb = 0; Zb < Sb.length - 1; Zb++) {
        const [bb, ub] = [Sb[Zb], Sb[Zb + 1]];
        ab.push([(bb[0] + ub[0]) / 2, (bb[1] + ub[1]) / 2, (bb[2] + ub[2]) / 2])
      }
      const Hb = Sb.slice(1, -1),
        wb = new Uint8Array(Hb.length);
      for (const Zb of null !== Lb && void 0 !== Lb ? Lb : []) wb[Zb >> 1] |= 1 & Zb ? 2 : 1;
      return {
        island: bb,
        length: Hb.length,
        loop: Gb,
        cellsPerMs: Yb,
        edges: ab,
        nZ: Hb,
        bounds: WZ([...ab, ...Hb], .3),
        changed: !0,
        culled: !1,
        hide: wb,
        items: Ob.map((bb => {
          let [ub, Bb] = bb;
          return dZ(ub, (0, ph.A)(ub, Bb, hb, Yb).at)
        }))
      }
    }

    function nZ(bb, ub) {
      const {
        items: hb
      } = bb;
      if (0 === hb.length) return;
      const Bb = bb.length / bb.cellsPerMs,
        Ob = Math.floor((ub - hb[0].at) / Bb) - 1;
      if (Ob > 0)
        for (const Gb of hb) Gb.at += Ob * Bb
    }

    function DZ(bb, ub) {
      const hb = Math.min(Math.floor(ub), bb.length - 1),
        Bb = bb.hide[hb];
      return 0 !== Bb && 0 !== (Bb & (ub - hb < .5 ? 1 : 2))
    }

    function xZ(bb, ub) {
      const hb = Math.min(Math.floor(ub), bb.length - 1),
        Bb = ub - hb,
        Ob = Bb < .5,
        Gb = Ob ? bb.edges[hb] : bb.nZ[hb],
        Ub = Ob ? bb.nZ[hb] : bb.edges[hb + 1],
        Lb = Ob ? 2 * Bb : 2 * Bb - 1;
      rZ[0] = Gb[0] + (Ub[0] - Gb[0]) * Lb, rZ[1] = Gb[1] + (Ub[1] - Gb[1]) * Lb, rZ[2] = Gb[2] + (Ub[2] - Gb[2]) * Lb
    }
    const zZ = Math.PI / 4;
    class gZ {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new pZ, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.lK = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(bb) {
        const ub = performance.now();
        this.clock.sample(bb.baf2BeltLinesAt, ub), this.queue(bb.baf2BeltLinesAt, bb, 0, null, null, 0), this.applyDue(ub)
      }
      onMoves(bb) {
        const ub = performance.now(),
          hb = bb.baf2BeltMovesAt;
        this.clock.sample(hb, ub);
        for (const [Bb, Ob, Gb, Ub] of bb.baf2BeltMoveList) null === Ob ? this.queue(hb - Gb, null, Bb, null, null, null !== Ub && void 0 !== Ub ? Ub : 0) : this.queue(hb - Gb, null, Bb, Ob, null !== Ub && void 0 !== Ub ? Ub : null, 0);
        this.applyDue(ub)
      }
      start(bb) {
        this.pool = new oZ.b(bb, {
          scale: .3,
          yaw: zZ
        }, 64), this.lK(), window.addEventListener("resize", this.lK)
      }
      onAfterRender(bb) {
        const {
          pool: ub
        } = this;
        if (!ub) return;
        const hb = performance.now(),
          Bb = hb - this.lastRenderAt;
        this.lastRenderAt = hb, Bb < 100 && (this.frameMs += .1 * (Bb - this.frameMs));
        const Ob = hb + this.frameMs;
        this.applyDue(Ob);
        const Gb = bb.cameraPosition,
          Ub = ub.follow(Gb);
        this.setView(bb, Gb);
        const Lb = this.frame++;
        for (let Yb = 0; Yb < this.shown.length; Yb++) {
          const bb = this.shown[Yb],
            hb = CZ(this.view, bb.bounds, bb.cellsPerMs),
            Bb = bb.culled && 0 !== hb;
          if (bb.culled = 0 === hb, !Ub && !bb.changed && !Bb && (0 === hb || (Lb + Yb) % hb !== 0)) continue;
          bb.changed = !1, bb.loop && (nZ(bb, Ob), (0, ph.v)(bb.items, bb.length, Ob, bb.cellsPerMs));
          let Gb = bb.length;
          for (let Lb = 0; Lb < bb.items.length; Lb++) {
            const hb = bb.items[Lb],
              Bb = (0, ph.D)(hb.at, Gb, Ob, bb.cellsPerMs);
            if (Gb = Bb - ph.p, DZ(bb, Bb)) {
              null === hb.kind || hb.hidden || (hb.kind.hide(hb.slot), hb.hidden = !0);
              continue
            }
            let Yb = hb.kind;
            if (null === Yb) {
              if (Yb = ub.kindOf(hb.name), null === Yb) continue;
              hb.kind = Yb, hb.slot = Yb.take(), hb.hidden = !0, hb.drawn = NaN
            } else if (Bb === hb.drawn && !hb.hidden && !Ub) continue;
            xZ(bb, Bb), Yb.write(hb.slot, rZ[0], rZ[1], rZ[2]), hb.hidden = !1, hb.drawn = Bb
          }
        }
        ub.commit()
      }
      dispose() {
        var bb;
        window.removeEventListener("resize", this.lK), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (bb = this.pool) || void 0 === bb || bb.dispose(), this.pool = null
      }
      setView(bb, ub) {
        const {
          cameraDir: hb,
          lastDir: Bb
        } = this, Ob = bb.cameraDirection;
        for (let ab = 0; ab < 3; ab++) Bb[ab] = hb[ab], hb[ab] = Ob[ab];
        const Gb = hb[0] * Bb[0] + hb[1] * Bb[1] + hb[2] * Bb[2],
          Ub = Number.isNaN(Gb) ? 0 : Math.acos(Math.min(1, Math.max(-1, Gb))),
          {
            width: Lb,
            height: Yb
          } = this,
          Sb = bb.tanHalfFovX;
        ! function(bb, ub, hb, Bb, Ob, Gb, Ub) {
          let Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          bb.x = ub[0], bb.y = ub[1], bb.z = ub[2], bb.dx = hb[0], bb.dy = hb[1], bb.dz = hb[2];
          const Yb = Math.min(Math.PI, Math.atan(Math.sqrt(Bb * Bb + Ob * Ob)) + AZ + Lb);
          bb.cosHalf = Math.cos(Yb), bb.sinHalf = Math.sin(Yb), bb.pxPerBlock = Gb / (2 * Ob), bb.frameMs = Ub
        }(this.view, ub, hb, Sb, Sb * Yb / Lb, Yb * window.devicePixelRatio, this.frameMs, Ub)
      }
      queue(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = Math.max(this.clock.toLocal(bb), this.lastPendingAt);
        this.lastPendingAt = Ub, this.pending.push({
          at: Ub,
          lines: ub,
          line: hb,
          name: Bb,
          pos: Ob,
          idx: Gb
        })
      }
      applyDue(bb) {
        const {
          pending: ub
        } = this;
        for (; this.pendingHead < ub.length && ub[this.pendingHead].at <= bb;) {
          const bb = ub[this.pendingHead++];
          if (bb.lines) this.applyLines(bb.lines, bb.at), bb.lines = null;
          else {
            const ub = this.lines.get(bb.line);
            ub && this.applyMove(ub, bb, bb.at)
          }
        }
        this.pendingHead === ub.length ? (ub.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > ub.length && (ub.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(bb, ub) {
        this.clearIsland(bb.baf2BeltIsland);
        for (const hb of bb.baf2BeltLineList) this.lines.set(hb[0], jZ(bb.baf2BeltIsland, hb, ub));
        this.shown = [...this.lines.values()]
      }
      applyMove(bb, ub, hb) {
        let {
          name: Bb,
          pos: Ob,
          idx: Gb
        } = ub;
        bb.changed = !0, bb.loop && (nZ(bb, hb), (0, ph.v)(bb.items, bb.length, hb, bb.cellsPerMs)), null !== Bb && null !== Ob ? (0, ph.y)(bb.items, bb.length, dZ(Bb, hb), Ob, hb, bb.cellsPerMs) : null !== Bb ? bb.items.push(dZ(Bb, hb)) : bb.items.length > Gb && this.release((0, ph.E)(bb.items, bb.length, hb, bb.cellsPerMs, Gb))
      }
      clearIsland(bb) {
        for (const [ub, hb] of this.lines)
          if (hb.island === bb) {
            for (const bb of hb.items) this.release(bb);
            this.lines.delete(ub)
          }
      }
      release(bb) {
        null !== bb.kind && (bb.kind.release(bb.slot), bb.kind = null, bb.slot = -1, bb.hidden = !0, bb.drawn = NaN)
      }
    }
    var iZ = hb(36208),
      vZ = hb(38134);

    function tZ(bb) {
      let {
        depth: ub,
        store: hb,
        t: Ob
      } = bb;
      const Gb = function(bb) {
        const [ub, hb] = (0, Bb.useState)(bb.lastPlayerY());
        return (0, ha.h)(NO, hb), (0, Bb.useEffect)((() => {
          hb(bb.lastPlayerY())
        }), [bb]), ub
      }(hb);
      if (null === Gb) return null;
      const [Ub, Lb] = ub, Yb = Gb > Ub ? Ub : null !== Lb && Gb < Lb ? Lb : null, Sb = {
        y: KG(Gb),
        target: null === Yb ? "" : KG(Yb)
      };
      return (0, jG.jsx)("span", {
        className: dO()("Baf2QuestDepth", {
          Reached: null === Yb
        }),
        children: Ob(`${Ua}${null===Yb?"questDepthReached":"questDepth"}`, Sb)
      })
    }

    function JZ(bb) {
      let {
        also: ub,
        view: hb,
        t: Bb
      } = bb;
      return (0, jG.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, jG.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, jG.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, jG.jsx)("strong", {
            children: Bb(`${Ua}questAlsoDownHere`)
          }), (0, jG.jsx)("span", {
            className: "Baf2QuestChips",
            children: ub.map((bb => {
              let [ub, Ob, Gb, Ub] = bb;
              return (0, jG.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Bb(`${Ua}questAlsoItem`, {
                  item: Ya(Bb, hb.itemNames[ub], ub),
                  have: String(Ob),
                  need: String(Gb)
                }),
                children: [(0, jG.jsx)(Ha, {
                  item: ub
                }), (0, jG.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Ob}/${Gb}`
                }), null !== Ub && (0, jG.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Bb(`${Ua}questAlsoDepth`, {
                    y: KG(Ub)
                  })
                })]
              }, ub)
            }))
          })]
        })]
      })
    }
    var eZ = hb(3183);

    function NZ(bb) {
      let {
        expanded: ub,
        inventoryOpen: hb,
        children: Ob
      } = bb;
      const Gb = (0, Bb.useRef)(null);
      return (0, Bb.useEffect)((() => {
        const bb = Gb.current,
          ub = null === bb || void 0 === bb ? void 0 : bb.closest(".RightElements"),
          Bb = null === bb || void 0 === bb ? void 0 : bb.firstElementChild;
        if (!bb || !ub || !Bb) return;
        return (0, vZ.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [ub, Bb], (() => {
          const Ob = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Ob.length) return;
          const Gb = Math.max(...Ob.map((bb => bb.getBoundingClientRect().bottom))),
            Ub = ub.getBoundingClientRect(),
            Lb = hb ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (Lb) {
            const ub = parseFloat(getComputedStyle(Bb).marginLeft) + parseFloat(getComputedStyle(Bb).marginRight),
              hb = Ub.right - Lb.getBoundingClientRect().right - 8 - ub;
            bb.style.setProperty("--baf2-quest-room", `${hb}px`), bb.classList.toggle("NoRoom", hb < 150)
          } else bb.style.removeProperty("--baf2-quest-room"), bb.classList.remove("NoRoom");
          const Yb = Gb - Ub.top + 8,
            Sb = function(bb, ub, hb) {
              const Bb = ub.getBoundingClientRect(),
                Ob = bb.getBoundingClientRect(),
                Gb = (0, eZ.h)(Ob.left, Ob.right, Bb.top + hb);
              if (null !== Gb && Gb < Bb.bottom) return Gb - Bb.top;
              return Bb.height - (parseFloat(getComputedStyle(ub).paddingBottom) || 0)
            }(bb, ub, Yb) - 8,
            ab = window.innerHeight / 2 - Ub.top,
            {
              top: Hb,
              maxHeight: wb
            } = function(bb, ub, hb, Bb, Ob) {
              const Gb = Math.min(hb, Math.max(0, ub - bb)),
                Ub = Ob ? bb : Math.max(bb, Math.min(Bb - Gb / 2, ub - Gb));
              return {
                top: Ub,
                maxHeight: Math.max(0, ub - Ub)
              }
            }(Yb, Sb, function(bb) {
              const ub = bb.firstElementChild,
                hb = ub ? ub.scrollHeight - ub.clientHeight : 0;
              return bb.getBoundingClientRect().height + Math.max(0, hb)
            }(Bb), ab, dG());
          bb.style.top = `${Hb}px`, bb.style.maxHeight = `${wb}px`
        }))
      }), [hb]), (0, jG.jsx)("div", {
        ref: Gb,
        className: dO()("Baf2QuestHud", {
          Expanded: ub
        }),
        children: Ob
      })
    }

    function sZ(bb) {
      let {
        amount: ub,
        t: hb
      } = bb;
      return (0, jG.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, jG.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, jG.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: hb(`${Ua}questStepsDone`, {
            amount: String(ub)
          })
        })]
      })
    }

    function MZ(bb) {
      let {
        pulse: ub
      } = bb;
      return 0 === ub ? null : (0, jG.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, ub)
    }

    function mZ(bb) {
      var ub;
      let {
        store: hb
      } = bb;
      const Ob = (0, ha.k)(eO, hb.get()),
        [Gb, Ub] = (0, Bb.useState)(!1),
        {
          t: Lb
        } = (0, DO.K)(),
        Yb = function() {
          const [bb, ub] = (0, Bb.useState)(dG);
          return (0, Bb.useEffect)((() => (ub(dG()), rG(ub))), []), bb
        }(),
        {
          openInGameMenuName: Sb,
          openEverythingMenuName: ab
        } = (0, KO.j)(["openInGameMenuName", "openEverythingMenuName"]),
        Hb = "inventory" === Sb && null === ab,
        wb = null !== Sb && !Hb || null !== ab;
      if (! function(bb) {
          return null !== bb.name || null !== bb.side
        }(Ob) || wb || "off" === Ob.tutorial) return null;
      const Zb = qO(Ob.rows),
        Xb = Zb.filter((bb => bb.done)).length,
        pb = function(bb, ub) {
          const hb = VO(bb);
          let Bb = 0;
          return bb.filter(((bb, Ob) => !!bb.justFinished || !(bb.done || Ob < hb || Bb > ub) && (Bb++, !0)))
        }(Ob.rows, Yb ? 0 : 2),
        ob = Yb ? pb : function(bb, ub) {
          const hb = ub.filter((bb => !bb.justFinished));
          if (hb.length < 2) return [...ub];
          const Bb = bb.indexOf(hb[0]),
            Ob = bb.indexOf(hb[hb.length - 1]),
            Gb = new Set(qO(bb));
          return bb.filter(((bb, hb) => ub.includes(bb) || bb.done && Gb.has(bb) && hb > Bb && hb < Ob))
        }(Ob.rows, pb),
        Ab = Gb ? Ob.rows : ob,
        lb = Gb || Yb ? [] : function(bb, ub) {
          const hb = new Array(ub.length + 1).fill(0),
            Bb = new Set(qO(bb));
          let Ob = 0;
          for (const Gb of bb) Ob < ub.length && Gb === ub[Ob] ? Ob++ : Gb.done && Bb.has(Gb) && hb[Ob]++;
          return hb
        }(Ob.rows, ob),
        Kb = Gb || ob.length < Ob.rows.length || null !== Ob.reward,
        Wb = PO(Ob),
        Cb = Wb ? Lb(`${Ua}questLineComplete`) : Ob.tier ? Xa(Lb, Ob.tier) : Lb(`${Ua}currentQuest`),
        db = function(bb) {
          var ub, hb;
          if (PO(bb)) return null;
          const Bb = null === (ub = bb.chapters) || void 0 === ub ? void 0 : ub.find((ub => {
            let [hb] = ub;
            return hb === bb.tier
          }));
          if (!Bb) return null;
          const Ob = Bb[1].filter((bb => !bb[4]));
          if (0 === Ob.length) return null;
          const Gb = null === (hb = bb.name) || void 0 === hb ? void 0 : hb[0],
            Ub = bb => Ob.findIndex((ub => ub[0] === Gb && (!bb || !ub[3]))),
            Lb = Ub(!0),
            Yb = Lb >= 0 ? Lb : Ub(!1);
          if (Yb >= 0) return [Yb + 1, Ob.length];
          const Sb = Ob.filter((bb => bb[3])).length;
          return [Math.min(Sb + 1, Ob.length), Ob.length]
        }(Ob);
      return (0, jG.jsx)(iZ.e, {
        placement: "topRight",
        children: (0, jG.jsx)(NZ, {
          expanded: Gb,
          inventoryOpen: Hb,
          children: (0, jG.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: La,
            children: [null !== Ob.name && (0, jG.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, jG.jsx)(MZ, {
                pulse: Ob.pulse
              }), (0, jG.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, jG.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Cb, db && (0, jG.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": Lb(`${Ua}questPlaceLabel`, {
                      n: String(db[0]),
                      total: String(db[1])
                    }),
                    children: Lb(`${Ua}questPlace`, {
                      n: String(db[0]),
                      total: String(db[1])
                    })
                  }), Ob.tier && Ob.core && !Wb && (0, jG.jsx)(pa, {
                    core: Ob.core,
                    t: Lb
                  })]
                })
              }), (0, jG.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Lb(`${Ua}${Ob.name[0]}`, Sa(Ob.name[1]))
              }), (Zb.length > 1 || Kb) && (0, jG.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Zb.length > 1 && (0, jG.jsx)(oa, {
                  rows: Zb,
                  t: Lb
                }), Kb && (0, jG.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Gb,
                  onClick: () => {
                    Ub(!Gb)
                  },
                  children: [(0, jG.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: Lb(`${Ua}questStepsToggle`, {
                      done: String(Xb),
                      total: String(Zb.length)
                    })
                  }), (0, jG.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Gb ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, jG.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [Ab.map(((bb, ub) => {
                  var Gb;
                  const Ub = bb.current && Ob.depth;
                  return (0, jG.jsxs)(Bb.Fragment, {
                    children: [(null !== (Gb = lb[ub]) && void 0 !== Gb ? Gb : 0) > 0 && (0, jG.jsx)(sZ, {
                      amount: lb[ub],
                      t: Lb
                    }), (0, jG.jsx)(Aa, {
                      row: bb,
                      view: Ob,
                      t: Lb,
                      extra: Ub && (0, jG.jsx)(tZ, {
                        depth: Ub,
                        store: hb,
                        t: Lb
                      })
                    })]
                  }, bb.id)
                })), (null !== (ub = lb[Ab.length]) && void 0 !== ub ? ub : 0) > 0 && (0, jG.jsx)(sZ, {
                  amount: lb[Ab.length],
                  t: Lb
                }), Ob.also.length > 0 && (0, jG.jsx)(JZ, {
                  also: Ob.also,
                  view: Ob,
                  t: Lb
                })]
              }), Gb && Ob.reward && (0, jG.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [Lb(`${Ua}questReward`), (0, jG.jsx)(Ha, {
                  item: Ob.reward
                }), Ya(Lb, Ob.itemNames[Ob.reward], Ob.reward)]
              })]
            }), Ob.side && (0, jG.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [mO(Ob, Date.now()) && (0, jG.jsx)(MZ, {
                pulse: Ob.sideCameUpAt
              }), (0, jG.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: Lb(`${Ua}questSide`)
              }), (0, jG.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Lb(`${Ua}${Ob.side.name[0]}`, Sa(Ob.side.name[1]))
              }), (0, jG.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, jG.jsx)(Aa, {
                  row: Ob.side.row,
                  view: Ob,
                  t: Lb
                })
              })]
            })]
          })
        })
      })
    }
    const IZ = "baf2ToastView";
    class PZ {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = bb, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: bb,
          holdMs: ub
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const bb = this.dropCovered();
          bb && this.show(bb.message, bb.holdMs)
        }), 250));
        const hb = this.dropCovered();
        null !== hb && (hb.holdMs > 0 || "baf2ToastCelebrate" === hb.message.baf2ToastStyle) && "baf2ToastCelebrate" !== bb.baf2ToastStyle && this.show(hb.message, hb.holdMs);
        const Bb = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== bb.baf2ToastStyle && Bb > 0) return this.pending = {
          message: bb,
          holdMs: ub
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const bb = this.pending;
          this.pending = null, bb && this.present(bb.message, bb.holdMs)
        }), Bb));
        this.present(bb, ub)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(bb, ub) {
        this.clearTimers(), this.pending = null;
        const hb = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: bb.baf2ToastText,
          style: bb.baf2ToastStyle,
          swapped: hb,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === bb.baf2ToastStyle ? 1500 : ub), this.vp();
        const Bb = Math.min(8e3, Math.max(1e3, bb.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Bb)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.vp(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.vp()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const bb = this.covering;
        return this.covering = null, bb
      }
      vp() {
        tO.i.vp(IZ, this.view, !0)
      }
    }
    var qZ = hb(65);
    const EZ = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function yZ(bb) {
      let {
        store: ub
      } = bb;
      const hb = (0, ha.k)(IZ, ub.get()),
        {
          openInGameMenuName: Bb,
          openEverythingMenuName: Ob
        } = (0, KO.j)(["openInGameMenuName", "openEverythingMenuName"]),
        Gb = hb && (0, jG.jsxs)("div", {
          className: dO()("Baf2Toast", EZ[hb.style], {
            Swapped: hb.swapped,
            Leaving: hb.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === hb.style && (0, jG.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, jG.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, jG.jsx)(gO.c, {
              text: hb.text
            })
          })]
        }, hb.id);
      return null !== Bb && null === Ob ? (0, qZ.createPortal)((0, jG.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Gb
      }), document.body) : (0, jG.jsx)(iZ.e, {
        children: Gb
      })
    }
    const VZ = "baf2AreaView";
    class FZ {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.MS = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.MS = null
      }
      arrive(bb, ub) {
        ub && function(bb) {
          return "home" === bb.baf2AreaPlace && void 0 !== bb.baf2AreaNameText
        }(bb) ? this.MS = bb : this.show(bb)
      }
      release() {
        const bb = this.MS;
        null !== bb && this.show(bb)
      }
      show(bb) {
        this.clearTimer(), this.MS = null;
        const ub = void 0 === bb.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: bb,
          ms: ub
        }, this.vp(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.vp()
        }), ub)
      }
      dispose() {
        this.clearTimer(), this.MS = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      vp() {
        tO.i.vp(VZ, this.view, !0)
      }
    }

    function fZ(bb) {
      var ub;
      let {
        store: hb
      } = bb;
      const {
        t: Bb
      } = (0, DO.K)(), Ob = (0, ha.k)(VZ, hb.get());
      if (!Ob) return null;
      const {
        area: Gb
      } = Ob, Ub = Gb.baf2AreaResetMinutes;
      return (0, jG.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Gb.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Ob.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, jG.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Gb.baf2AreaHeading && (0, jG.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Bb(Gb.baf2AreaHeading)
        }), (0, jG.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (ub = Gb.baf2AreaNameText) && void 0 !== ub ? ub : Bb(Gb.baf2AreaName)
        }), Gb.baf2AreaNote && (0, jG.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Bb(Gb.baf2AreaNote)
        }), void 0 !== Ub && (0, jG.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Bb("buildAFactory2Game:areaWildsReset", {
            time: WG(Bb, 60 * Ub)
          })
        })]
      }, Ob.id)
    }
    const kZ = "baf2GearGauge";
    class TZ {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      sK(bb) {
        var ub;
        if (this.clearLinger(), null === bb.gearPowerKind) return void this.set(null);
        const hb = "jetpack" === bb.gearPowerKind && (Bb = bb.gearChargeState, Ob = bb.gearCharge, "flying" === Bb || "charging" === Bb || "outOfCharge" === Bb || "ceiling" === Bb || "offPlot" === Bb || "noPower" === Bb && Ob <= 0);
        var Bb, Ob;
        const Gb = !0 === (null === (ub = this.view) || void 0 === ub ? void 0 : ub.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Ub = hb || "jetpack" === bb.gearPowerKind && Gb;
        this.set({
          gauge: bb,
          jetShown: Ub
        }), Ub && !hb && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(bb) {
        this.view = bb, tO.i.vp(kZ, bb, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const cZ = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function QZ(bb) {
      let {
        store: ub
      } = bb;
      const hb = (0, ha.k)(kZ, ub.get());
      return hb ? "jetpack" === hb.gauge.gearPowerKind ? (0, jG.jsx)(RZ, {
        view: hb
      }) : (0, jG.jsx)(bX, {
        gauge: hb.gauge
      }) : null
    }

    function RZ(bb) {
      let {
        view: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)(), {
        gauge: Bb
      } = ub, Ob = Bb.gearChargeMax > 0 ? Math.max(0, Math.min(1, Bb.gearCharge / Bb.gearChargeMax)) : 0, Gb = cZ[Bb.gearChargeState], Ub = Gb ? hb(Gb) : null;
      return (0, jG.jsxs)("div", {
        className: dO()("Baf2JetArc", {
          Shown: ub.jetShown,
          Low: Ob < .2,
          Warm: Ob >= .2 && Ob < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Ob)
        },
        "aria-hidden": !ub.jetShown,
        children: [(0, jG.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, jG.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: uX,
            pathLength: 100
          }), (0, jG.jsx)("path", {
            className: "Baf2JetArcFill",
            d: uX,
            pathLength: 100
          })]
        }), (0, jG.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Ob), "%"]
        }), Ub && (0, jG.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Ub
        })]
      })
    }

    function bX(bb) {
      let {
        gauge: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)(), Bb = function(bb, ub) {
        switch (ub.gearPowerKind) {
          case "skyPack":
            return bb("buildAFactory2Game:gearSkyPack", {
              charge: ub.gearCharge,
              max: ub.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return bb("buildAFactory2Game:gearIslandDraw", {
              power: cb(ub.gearIslandPower),
              cost: cb(ub.gearCostPerUse)
            });
          case "barrier":
            return bb("buildAFactory2Game:gearBarrier", {
              shield: Math.round(ub.gearCharge),
              max: ub.gearChargeMax,
              power: cb(ub.gearIslandPower)
            });
          default:
            return null
        }
      }(hb, ub);
      return null === Bb ? null : (0, jG.jsx)(iZ.e, {
        children: (0, jG.jsx)("div", {
          className: dO()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === ub.gearChargeState || "outOfCharge" === ub.gearChargeState
          }),
          role: "status",
          children: Bb
        })
      })
    }
    const uX = (() => {
      const bb = bb => {
        const ub = bb * Math.PI / 180;
        return `${(40*Math.cos(ub)).toFixed(2)} ${(40*Math.sin(ub)).toFixed(2)}`
      };
      return `M ${bb(160)} A 40 40 0 1 1 ${bb(380)}`
    })();
    class hX {
      constructor(bb) {
        this.onElement = bb, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      sK(bb) {
        let ub = bb.baf2LabelsReset || bb.baf2LabelsIsland !== this.island;
        ub && (this.labels.clear(), this.island = bb.baf2LabelsIsland);
        for (const [hb, Bb, Ob, Gb, Ub] of bb.baf2LabelsList) {
          const bb = `${hb},${Bb},${Ob}`,
            Lb = this.labels.get(bb);
          null === Gb ? ub = this.labels.delete(bb) || ub : Lb && Lb.item === Gb && (Lb.count === Ub || Lb.count >= 0 && Ub >= 0) ? Lb.count !== Ub && (Lb.count = Ub, this.writeCount(bb, Ub)) : (this.labels.set(bb, {
            key: bb,
            pos: [hb, Bb, Ob],
            item: Gb,
            count: Ub
          }), this.writeCount(bb, Ub), ub = !0)
        }
        if (this.changes++, ub) {
          this.snapshot = [...this.labels.values()];
          for (const bb of this.listeners) bb()
        }
      }
      bindCount(bb) {
        const ub = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${bb}`;
        let hb = this.countRefs.get(ub);
        return hb || (hb = hb => {
          var Bb, Ob;
          hb ? (this.countElements.set(ub, hb), this.writeCount(bb, null !== (Bb = null === (Ob = this.labels.get(bb)) || void 0 === Ob ? void 0 : Ob.count) && void 0 !== Bb ? Bb : -1)) : (this.countElements.delete(ub), this.countRefs.delete(ub))
        }, this.countRefs.set(ub, hb)), hb
      }
      setCountWords(bb) {
        this.countWords = bb;
        for (const [ub, hb] of this.labels) this.writePart(`words|${ub}`, bb(hb.count), hb.count)
      }
      writeCount(bb, ub) {
        this.writePart(`bare|${bb}`, lG(ub), ub), this.countElements.has(`words|${bb}`) && this.writePart(`words|${bb}`, this.countWords(ub), ub)
      }
      writePart(bb, ub, hb) {
        const Bb = this.countElements.get(bb);
        if (!Bb || hb < 0) return;
        const Ob = Bb.firstChild;
        Ob && 3 === Ob.nodeType && !Ob.nextSibling ? Ob.nodeValue !== ub && (Ob.nodeValue = ub) : Bb.textContent !== ub && (Bb.textContent = ub)
      }
      list() {
        return this.snapshot
      }
      at(bb) {
        return this.labels.get(`${bb[0]},${bb[1]},${bb[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      bind(bb) {
        let ub = this.refs.get(bb);
        return ub || (ub = ub => {
          const hb = this.elements.get(bb);
          var Bb, Ob;
          hb && (null === (Bb = this.onElement) || void 0 === Bb || Bb.call(this, hb, !1));
          ub ? (this.elements.set(bb, ub), null === (Ob = this.onElement) || void 0 === Ob || Ob.call(this, ub, !0)) : (this.elements.delete(bb), this.refs.delete(bb))
        }, this.refs.set(bb, ub)), ub
      }
      onAfterRender(bb, ub, hb, Bb) {
        for (const Ob of this.snapshot) {
          const Gb = this.elements.get(Ob.key);
          if (!Gb) continue;
          if (Bb(Ob.key)) {
            (0, uZ.d)(Gb, !0);
            continue
          }
          const Ub = SZ(Gb, bb, ub, Ob.pos, 1.1, 24);
          Ub && hb.add(Ub, Gb, 0, !1)
        }
      }
    }
    const BX = (0, Bb.memo)((function(bb) {
        let {
          item: ub
        } = bb;
        return (0, jG.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, jG.jsx)(zO.d, {
            itemName: ub,
            amount: 0
          })
        })
      })),
      OX = (0, Bb.memo)((function(bb) {
        let {
          label: ub,
          bindRef: hb,
          countRef: Bb,
          wordsRef: Ob
        } = bb;
        return (0, jG.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: hb,
          hidden: !0,
          children: [(0, jG.jsx)(BX, {
            item: ub.item
          }), ub.count >= 0 && (0, jG.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, jG.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Ob
            }), (0, jG.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Bb
            })]
          })]
        })
      })),
      GX = (0, Bb.memo)((function(bb) {
        let {
          store: ub
        } = bb;
        const {
          t: hb
        } = (0, DO.K)(), [Ob, Gb] = (0, Bb.useState)((() => ub.list()));
        return (0, Bb.useEffect)((() => (Gb(ub.list()), ub.subscribe((() => {
          Gb(ub.list())
        })))), [ub]), (0, Bb.useEffect)((() => {
          ub.setCountWords((bb => hb("buildAFactory2Game:labelSiloCount", {
            count: lG(bb)
          })))
        }), [ub, hb]), (0, jG.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Ob.map((bb => -2 === bb.count ? null : (0, jG.jsx)(OX, {
            label: bb,
            bindRef: ub.bind(bb.key),
            countRef: ub.bindCount(bb.key),
            wordsRef: ub.bindCount(bb.key, "words")
          }, bb.key)))
        })
      })),
      UX = {
        read: () => !0,
        write: () => {}
      };

    function LX(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }

    function YX(bb) {
      let [ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb] = bb;
      const Zb = void 0 === Hb || void 0 === wb ? function(bb) {
        return [Math.floor((bb - 1) / 2), 0]
      }(Gb) : [Hb, wb];
      return {
        kind: 0 === Yb ? "reactor" : "battery",
        box: qh([ub, hb, Bb], Ob, Gb, Ub, Lb, Zb),
        formed: 1 === Sb,
        level: ab
      }
    }
    class SX {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UX;
        this.guideSetting = bb, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = bb.read()
      }
      sK(bb) {
        var ub;
        const hb = new Map;
        for (const Bb of bb.baf2RxPlanList) {
          const bb = YX(Bb);
          hb.set(LX(bb.box.ctrl), bb)
        }
        this.plans = hb, this.layouts = new Map((null !== (ub = bb.baf2RxLayouts) && void 0 !== ub ? ub : []).map((bb => {
          let [ub, hb, Bb, Ob] = bb;
          return [LX([ub, hb, Bb]), Ob]
        }))), this.predicted.clear(), bb.baf2RxFormedAt && (this.formed = {
          ctrl: bb.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Bb of [...this.startersOff]) {
          const bb = hb.get(Bb);
          bb && !bb.formed || this.startersOff.delete(Bb)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((bb => this.planByKey(bb)))
      }
      planAt(bb) {
        return this.planByKey(LX(bb))
      }
      predictSize(bb, ub) {
        this.predicted.set(LX(bb), ub), this.changed()
      }
      unpredict(bb) {
        this.predicted.delete(LX(bb)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(bb) {
        var ub;
        const hb = LX(bb);
        return this.predicted.has(hb) ? null : null !== (ub = this.layouts.get(hb)) && void 0 !== ub ? ub : null
      }
      showsStarter(bb) {
        return !this.startersOff.has(LX(bb))
      }
      setStarter(bb, ub) {
        const hb = LX(bb);
        ub ? this.startersOff.delete(hb) : this.startersOff.add(hb), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(bb) {
        this.guide = bb, this.guideSetting.write(bb), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(bb) {
        const ub = this.plans.get(bb);
        if (!ub) return null;
        const hb = this.predicted.get(bb);
        return hb ? {
          ...ub,
          box: yh(ub.box, ub.kind, hb[0], hb[1], hb[2])
        } : ub
      }
      changed() {
        this.version++;
        for (const bb of this.listeners) bb()
      }
    }
    var aX = hb(191);
    const HX = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function wX(bb, ub, hb, Bb) {
      const Ob = bb.length / 3;
      for (let Gb = 0; Gb < HX.length / 3; Gb++) bb.push(HX[3 * Gb] * Bb[0] / 2 + hb[0], HX[3 * Gb + 1] * Bb[1] / 2 + hb[1], HX[3 * Gb + 2] * Bb[2] / 2 + hb[2]);
      for (let Gb = Ob; Gb < Ob + 24; Gb += 4) ub.push(Gb, Gb + 1, Gb + 2, Gb, Gb + 2, Gb + 3)
    }

    function ZX(bb, ub, hb) {
      const Bb = ub[0][0],
        Ob = [],
        Gb = [];
      for (const [Ub, Lb] of ub) wX(Ob, Gb, [Ub[0] - Bb[0], Ub[1] - Bb[1], Ub[2] - Bb[2]], Lb);
      return bb.createGameMesh({
        positions: Ob,
        indices: Gb
      }, hb, Bb)
    }

    function XX(bb, ub) {
      const hb = bb.w - 2,
        Bb = bb.d - 2;
      return 1 === function(bb, ub, hb, Bb) {
        const [Ob, Gb, Ub] = bb;
        if (Number(Ob <= 2) + Number(Gb <= 2) + Number(Ub <= 2) >= 2) return function(bb, ub, hb) {
          return (bb + ub + hb) % 2 === 0 ? 1 : 3
        }(ub, hb, Bb);
        const [Lb, Yb] = Ob >= Gb && Ob >= Ub ? [hb, Bb] : Gb >= Ub ? [ub, Bb] : [ub, hb];
        return Lb % 2 === 0 && Yb % 2 === 0 ? 1 : 3
      }([hb, bb.h - 2, Bb], ub % hb, Math.floor(ub / (hb * Bb)), Math.floor(ub / hb) % Bb) ? "rod" : "channel"
    }

    function pX(bb, ub, hb) {
      if ("reactor" !== bb.kind || bb.formed || !ub) return !1;
      const Bb = fh(bb.box);
      for (let Ob = 0; Ob < Bb; Ob++) {
        const bb = hb(Ob);
        if (null !== bb && gh(bb)) return !1
      }
      return !0
    }

    function oX(bb, ub, hb, Bb, Ob) {
      var Gb;
      let Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const Lb = bB(bb.box, ub),
        Yb = OB(bb.kind, Lb, hb);
      if ("wrong" === Yb || "blocked" === Yb) return "wrong";
      if (!Ob) return null;
      if ("inside" === Lb && "reactor" === bb.kind && "Air" === ih(hb)) {
        if (null !== Ub) {
          var Sb;
          const hb = kH[TH(Ub, uB(bb.box, ub))];
          return hb && null !== (Sb = jY(hb)) && void 0 !== Sb ? Sb : null
        }
        if (Bb) return XX(bb.box, uB(bb.box, ub))
      }
      if ("missing" !== Yb) return null;
      const ab = GB(bb.kind, Lb);
      return null === ab ? null : null !== (Gb = jY(ab)) && void 0 !== Gb ? Gb : null
    }
    const AX = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function lX(bb, ub, hb) {
      const Bb = hb => {
        const Bb = ub(Qh(bb.box, hb));
        return null !== Bb && function(bb, ub) {
          return "reactor" !== bb.kind || ub !== Th(bb.box) && "inside" !== bB(bb.box, ub)
        }(bb, hb) && "ok" !== OB(bb.kind, bB(bb.box, hb), Bb)
      };
      if (hb) {
        const Gb = Rh(bb.box, [Math.floor(hb[0]), Math.floor(hb[1]), Math.floor(hb[2])]);
        if (Gb >= 0 && (Bb(Gb) || (Ob = Gb, "reactor" === bb.kind && "inside" === bB(bb.box, Ob) && "Air" === ub(Qh(bb.box, Ob))))) return Gb
      }
      var Ob;
      const Gb = fh(bb.box);
      for (let Ub = 0; Ub < Gb; Ub++)
        if (Bb(Ub)) return Ub;
      return -1
    }

    function KX(bb, ub) {
      return Math.floor(ub / (bb.w * bb.d))
    }

    function WX(bb, ub, hb) {
      return hb >= 0 && KX(bb, ub) > KX(bb, hb)
    }

    function CX(bb, ub) {
      return ub >= 0 && bb.h >= 3 && KX(bb, ub) === bb.h - 1
    }

    function dX(bb) {
      const ub = ih(bb);
      return ub === lh || "Collider" === ub || "Laser" === ub || ub.startsWith("_Collider ")
    }

    function rX(bb, ub, hb, Bb) {
      if (Bb(bb)) return null;
      if (!AX.every((ub => {
          let [Bb, Ob, Gb] = ub;
          const Ub = hb([bb[0] + Bb, bb[1] + Ob, bb[2] + Gb]);
          return null !== Ub && !Mh("reactor", Ub) && "reactor" !== vh(Ub)
        }))) return null;
      const Ob = mh("reactor").min,
        Gb = qh([bb[0], bb[1], bb[2]], function(bb, ub) {
          const hb = ub[0] - (bb[0] + .5),
            Bb = ub[2] - (bb[2] + .5);
          return Math.abs(hb) >= Math.abs(Bb) ? hb >= 0 ? 2 : 4 : Bb >= 0 ? 1 : 3
        }(bb, ub), Ob, Ob, Ob, Eh("reactor", Ob)),
        Ub = Th(Gb);
      let Lb = !0;
      for (let Yb = 0; Yb < fh(Gb) && Lb; Yb++) {
        if (Yb === Ub) continue;
        const bb = Qh(Gb, Yb),
          ub = hb(bb);
        Lb = !Bb(bb) && (null === ub || !dX(ub))
      }
      return {
        box: Gb,
        fits: Lb
      }
    }
    const jX = rY,
      nX = "baf2Goal",
      DX = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      xX = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      zX = .4;

    function gX(bb, ub) {
      let [hb, Bb, Ob] = bb;
      const Gb = vY([hb - .02, Bb - .02, Ob - .02], [hb + 1.02, Bb + 1.02, Ob + 1.02], .07);
      return ub && (Gb.push([
        [hb + .5, Bb + 1 + .7, Ob + .5],
        [.08, 1.4, .08]
      ]), Gb.push([
        [hb + .5, Bb + 1 + 1.4 + .2, Ob + .5],
        [zX, zX, zX]
      ])), Gb
    }

    function iX(bb, ub) {
      let [hb, Bb, Ob] = ub;
      return bb.isBlockInLoadedChunk(hb, Bb, Ob) ? bb.blockIdToBlockName(bb.getBlockId(hb, Bb, Ob)) : null
    }
    let vX = null;
    const tX = new Set;
    let JX = null;

    function eX(bb) {
      vX = bb;
      for (const ub of tX) ub(bb)
    }
    class NX {
      constructor(bb) {
        var ub;
        this.plans = bb, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (ub = bb => {
          var ub, hb;
          this.setGoal(null !== (ub = null === bb || void 0 === bb ? void 0 : bb.goal) && void 0 !== ub ? ub : null, null !== (hb = null === bb || void 0 === bb ? void 0 : bb.startsBattery) && void 0 !== hb && hb)
        }, JX ??= [tO.i.subscribe("setDirectionArrow", (bb => {
          let {
            id: ub,
            position: hb,
            text: Bb
          } = bb;
          ub === nX && eX({
            goal: [Math.floor(hb[0]), Math.floor(hb[1]), Math.floor(hb[2])],
            startsBattery: JSON.stringify(null !== Bb && void 0 !== Bb ? Bb : null).includes("arrowStartBattery")
          })
        })), tO.i.subscribe("clearDirectionArrow", (bb => {
          let {
            id: ub
          } = bb;
          null !== ub && ub !== nX || eX(null)
        }))], tX.add(ub), ub(vX), () => {
          tX.delete(ub)
        })
      }
      onAfterRender(bb, ub) {
        const hb = performance.now();
        if (this.cues.length > 0) {
          const ub = .55 + .45 * Math.sin(hb / 1100 * Math.PI * 2);
          for (const hb of this.cues) bb.setGameMesh(hb, {
            visibility: ub
          })
        }
        if (hb - this.lastCheckMs < 150) return;
        this.lastCheckMs = hb;
        const Bb = this.plans.all().filter((bb => {
            const [hb, Bb, Ob] = bb.box.ctrl;
            return (!bb.formed || null !== this.plans.layoutOf(bb.box.ctrl)) && (hb - ub[0]) ** 2 + (Bb - ub[1]) ** 2 + (Ob - ub[2]) ** 2 <= 2304
          })),
          Ob = function(bb, ub) {
            const hb = aX.e.bX,
              Bb = new Map;
            for (const Gb of ub) {
              const ub = Qh(Gb.box, 0),
                Ub = Qh(Gb.box, fh(Gb.box) - 1),
                Lb = [Math.min(ub[0], Ub[0]), Math.min(ub[1], Ub[1]), Math.min(ub[2], Ub[2])].map((bb => Math.floor(bb / hb))),
                Yb = [Math.max(ub[0], Ub[0]), Math.max(ub[1], Ub[1]), Math.max(ub[2], Ub[2])].map((bb => Math.floor(bb / hb)));
              for (let hb = Lb[0]; hb <= Yb[0]; hb++)
                for (let ub = Lb[1]; ub <= Yb[1]; ub++)
                  for (let Gb = Lb[2]; Gb <= Yb[2]; Gb++) {
                    var Ob;
                    Bb.set(`${hb},${ub},${Gb}`, null !== (Ob = bb.getChunkVersion(hb, ub, Gb)) && void 0 !== Ob ? Ob : -1)
                  }
            }
            return Bb
          }(bb, Bb);
        this.plans.getVersion() === this.storeVersion && (function(bb, ub) {
          if (bb.size !== ub.size) return !1;
          for (const [hb, Bb] of bb)
            if (ub.get(hb) !== Bb) return !1;
          return !0
        }(Ob, this.chunkVersions) || hb - this.lastRescanMs < 600) || (this.lastRescanMs = hb, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Ob, this.redraw(bb, Bb))
      }
      dispose(bb) {
        this.unwatch(), vX = null, this.clearMeshes(bb), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(bb, ub) {
        var hb;
        (null === bb || void 0 === bb ? void 0 : bb.join()) === (null === (hb = this.goal) || void 0 === hb ? void 0 : hb.join()) && ub === this.startsBattery || (this.goal = bb, this.startsBattery = ub, this.storeVersion = -1)
      }
      redraw(bb, ub) {
        const hb = ub => iX(bb, ub),
          Bb = new Map,
          Ob = [],
          Gb = this.plans.guideOn();
        for (const Sb of ub) {
          const bb = Gb && pX(Sb, this.plans.showsStarter(Sb.box.ctrl), (bb => hb(Qh(Sb.box, bb)))),
            ub = "reactor" === Sb.kind ? this.plans.layoutOf(Sb.box.ctrl) : null,
            Ub = Gb && !Sb.formed ? lX(Sb, hb, this.goal) : -1;
          Ub >= 0 && Ob.push([Qh(Sb.box, Ub), CX(Sb.box, Ub)]);
          const Lb = fh(Sb.box);
          for (let Ob = 0; Ob < Lb; Ob++) {
            const Lb = Qh(Sb.box, Ob),
              Yb = hb(Lb),
              ab = null === Yb ? null : oX(Sb, Ob, Yb, bb, Gb, ub);
            if (null !== ab) {
              const bb = "wrong" !== ab && WX(Sb.box, Ob, Ub),
                ub = bb ? `${ab}Dim` : ab;
              let hb = Bb.get(ub);
              hb || (hb = {
                draw: {
                  ghost: ab,
                  dim: bb
                },
                list: []
              }, Bb.set(ub, hb)), hb.list.push(Lb)
            }
          }
        }
        if (Gb && this.startsBattery && this.goal) {
          const [bb, ub, Ob] = this.goal, Gb = [];
          for (const [Bb, Ub, Lb] of DX) {
            const Yb = [bb + Bb, ub + Ub, Ob + Lb];
            "Air" === hb(Yb) && Gb.push(Yb)
          }
          if (Gb.length > 0) {
            var Ub;
            const bb = null !== (Ub = Bb.get("cell")) && void 0 !== Ub ? Ub : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            bb.list.push(...Gb), Bb.set("cell", bb)
          }
        }
        const Lb = [...Bb.keys()].sort(),
          Yb = [...Lb.map((bb => `${bb}:${Bb.get(bb).list.join(";")}`)), `cue:${Ob.join(";")}`].join("|");
        if (Yb !== this.shownKey) {
          this.shownKey = Yb, this.clearMeshes(bb);
          for (const ub of Lb) {
            const {
              draw: hb,
              list: Ob
            } = Bb.get(ub);
            this.meshes.push(this.build(bb, hb, Ob))
          }
          for (const [ub, hb] of Ob) this.cues.push(ZX(bb, gX(ub, hb), xX))
        }
      }
      build(bb, ub, hb) {
        let {
          ghost: Bb,
          dim: Ob
        } = ub;
        const {
          size: Gb,
          colour: Ub,
          alpha: Lb
        } = jX[Bb], Yb = hb[0], Sb = [], ab = [];
        for (const [Hb, wb, Zb] of hb) wX(Sb, ab, [Hb - Yb[0] + .5, wb - Yb[1] + .5, Zb - Yb[2] + .5], [Gb, Gb, Gb]);
        return bb.createGameMesh({
          positions: Sb,
          indices: ab
        }, {
          rgb: Ub,
          alpha: Lb * (Ob ? .3 : 1)
        }, Yb)
      }
      clearMeshes(bb) {
        for (const ub of [...this.meshes, ...this.cues]) bb.disposeGameMesh(ub);
        this.meshes = [], this.cues = []
      }
    }
    const sX = [.56, .83, 1],
      MX = [1, .3, .25];
    class mX {
      constructor(bb) {
        this.plans = bb, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(bb, ub, hb) {
        var Bb;
        const Ob = performance.now();
        if (Ob - this.lastCheckMs < 150) return;
        this.lastCheckMs = Ob;
        const Gb = ub => iX(bb, ub),
          Ub = null === (Bb = bb.cub(ub)) || void 0 === Bb ? void 0 : Bb.name,
          Lb = Ub && "Reactor Frame" === ih(Ub) ? bb.getTargetedBlock() : null,
          Yb = Lb ? [Lb.gp[0], Lb.gp[1], Lb.gp[2]] : null,
          Sb = null !== Yb && "Air" === Gb(Yb) && Yb.every(((bb, ub) => Math.abs(bb + .5 - hb[ub]) <= 8)) ? rX(Yb, hb, Gb, (bb => this.inPlan(bb))) : null,
          ab = Sb ? `${Sb.box.ctrl.join()}|${Sb.box.rot}|${Sb.fits}` : "";
        ab !== this.shownKey && this.show(bb, ab, Sb)
      }
      dispose(bb) {
        this.clear(bb), this.shownKey = ""
      }
      inPlan(bb) {
        return this.plans.all().some((ub => Rh(ub.box, bb) >= 0))
      }
      show(bb, ub, hb) {
        if (this.clear(bb), this.shownKey = ub, !hb) return;
        const {
          box: Bb,
          fits: Ob
        } = hb, Gb = Ob ? sX : MX, {
          lo: Ub,
          hi: Lb
        } = iY(Bb);
        this.meshes.push(ZX(bb, vY(Ub, Lb, .05), {
          rgb: Gb,
          alpha: 1
        }));
        const Yb = [],
          Sb = Qh(Bb, 0)[1];
        for (let ab = 0; ab < Bb.w * Bb.d; ab++) {
          const [bb, , ub] = Qh(Bb, ab);
          Yb.push([
            [bb + .5, Sb + .02 + .01, ub + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(ZX(bb, Yb, {
          rgb: Gb,
          alpha: .25
        }))
      }
      clear(bb) {
        for (const ub of this.meshes) bb.disposeGameMesh(ub);
        this.meshes = []
      }
    }
    const IX = "buildAFactory2Game:";

    function PX(bb, ub, hb) {
      const Bb = bb => {
          const [hb, Bb, Ob] = bb.box.ctrl;
          return hb === ub[0] && Bb === ub[1] && Ob === ub[2]
        },
        Ob = bb.find((bb => Bb(bb) || Rh(bb.box, ub) >= 0));
      if (!Ob) return null;
      const Gb = function(bb, ub, hb) {
        const {
          w: Bb,
          h: Ob,
          d: Gb
        } = bb.box, Ub = "reactor" === bb.kind ? `${IX}rxTitle` : `${IX}batTitle`;
        if (bb.formed) return {
          key: `${IX}lookPlanFormed`,
          kindKey: Ub,
          w: Bb,
          h: Ob,
          d: Gb,
          count: 0
        };
        let Lb = 0,
          Yb = 0;
        for (let ab = 0; ab < fh(bb.box); ab++) {
          const ub = hb(Qh(bb.box, ab)),
            Bb = null === ub ? "ok" : OB(bb.kind, bB(bb.box, ab), ub);
          Lb += "missing" === Bb ? 1 : 0, Yb += "wrong" === Bb || "blocked" === Bb ? 1 : 0
        }
        const Sb = function(bb, ub, hb) {
          if (ub < 0 || null === hb) return;
          const Bb = bB(bb.box, ub),
            Ob = OB(bb.kind, Bb, hb);
          return "blocked" === Ob ? `${IX}lookWhy_blocked` : "wrong" === Ob ? "ctrl" === Bb ? `${IX}lookWhy_ctrl` : `${IX}lookWhy_reactor_${Bb}` : void 0
        }(bb, Rh(bb.box, ub), hb([ub[0], ub[1], ub[2]]));
        if (Lb > 0) return {
          key: `${IX}lookPlanToBuild`,
          kindKey: Ub,
          w: Bb,
          h: Ob,
          d: Gb,
          count: Lb,
          why: Sb
        };
        if (Yb > 0) return {
          key: `${IX}lookPlanTakeOut`,
          kindKey: Ub,
          w: Bb,
          h: Ob,
          d: Gb,
          count: Yb,
          why: Sb
        };
        return {
          key: "reactor" === bb.kind ? `${IX}lookPlanNoRods` : `${IX}lookPlanDone`,
          kindKey: Ub,
          w: Bb,
          h: Ob,
          d: Gb,
          count: 0
        }
      }(Ob, ub, hb);
      return "reactor" === Ob.kind && Bb(Ob) ? {
        ...Gb,
        ctrl: !0
      } : Gb
    }

    function qX(bb, ub) {
      return bb === ub || null !== bb && null !== ub && bb.key === ub.key && bb.kindKey === ub.kindKey && bb.w === ub.w && bb.h === ub.h && bb.d === ub.d && bb.count === ub.count && bb.why === ub.why && bb.ctrl === ub.ctrl
    }

    function EX() {
      return performance.now()
    }
    class yX {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EX;
        this.ticket = bb, this.sent = ub, this.backstopMs = hb, this.now = Bb, this.queuedAt = void 0, this.queuedAt = Bb()
      }
      answered() {
        const bb = this.now(),
          ub = this.sent.leftAt(this.ticket);
        return null !== ub && bb - ub > 4e3 || bb - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class VX {
      constructor() {
        this.echoes = []
      }
      add(bb) {
        this.echoes = this.echoes.filter((bb => !bb.answered())), this.echoes.push(bb)
      }
      answered() {
        var bb, ub;
        return null === (bb = null === (ub = this.echoes.at(-1)) || void 0 === ub ? void 0 : ub.answered()) || void 0 === bb || bb
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((bb => bb.answered()))
      }
      age() {
        var bb, ub;
        return null !== (bb = null === (ub = this.echoes.at(-1)) || void 0 === ub ? void 0 : ub.age()) && void 0 !== bb ? bb : null
      }
      clear() {
        this.echoes = []
      }
    }
    class FX {
      constructor(bb) {
        this.send = bb, this.value = null, this.sent = null, this.echoes = new VX, this.down = !1, this.timer = null
      }
      shown(bb) {
        return null === this.value ? bb : this.down || this.value !== this.sent ? this.value : bb === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), bb) : this.value
      }
      pendingFor(bb) {
        return null !== this.value && this.value === this.sent && bb !== this.value ? this.echoes.age() : null
      }
      assume(bb, ub) {
        this.disarm(), this.down = !1, this.value = bb, this.sent = bb, this.echoes.clear(), this.echoes.add(ub)
      }
      press() {
        this.down = !0
      }
      drag(bb) {
        this.value = bb, this.arm(this.down ? 1e3 : 400)
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
      arm(bb) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), bb)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class fX {
      constructor() {
        this.pending = new Map
      }
      set(bb, ub, hb) {
        var Bb;
        const Ob = null !== (Bb = this.pending.get(bb)) && void 0 !== Bb ? Bb : {
          on: ub,
          echoes: new VX
        };
        Ob.on = ub, Ob.echoes.add(hb), this.pending.set(bb, Ob)
      }
      shown(bb) {
        let ub = bb;
        for (const [hb, {
            on: Bb,
            echoes: Ob
          }] of this.pending) 0 !== (bb & hb) === Bb && Ob.agreeCounts() || Ob.answered() ? this.pending.delete(hb) : ub = Bb ? ub | hb : ub & ~hb;
        return ub
      }
      pendingMask() {
        let bb = 0;
        for (const ub of this.pending.keys()) bb |= ub;
        return bb
      }
      pendingFor(bb) {
        let ub = null;
        for (const [Bb, {
            on: Ob,
            echoes: Gb
          }] of this.pending) {
          if (void 0 !== bb && 0 !== (bb & Bb) === Ob) continue;
          const Ub = Gb.age();
          var hb;
          if (null !== Ub) ub = Math.max(null !== (hb = ub) && void 0 !== hb ? hb : 0, Ub)
        }
        return ub
      }
      clear() {
        this.pending.clear()
      }
    }
    class kX {
      constructor() {
        this.dims = null, this.echoes = new VX, this.unmet = null
      }
      shown(bb) {
        var ub;
        return this.dims && (TX(this.dims, bb) && this.echoes.agreeCounts() || this.echoes.answered()) && (TX(this.dims, bb) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (ub = this.dims) && void 0 !== ub ? ub : bb
      }
      takeUnmet() {
        const bb = this.unmet;
        return this.unmet = null, bb
      }
      set(bb, ub) {
        this.dims = bb, this.echoes.add(ub)
      }
      pendingFor(bb) {
        return null === this.dims || bb && TX(this.dims, bb) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function TX(bb, ub) {
      return bb[0] === ub[0] && bb[1] === ub[1] && bb[2] === ub[2]
    }
    class cX {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EX;
        this.now = bb, this.taps = new Map
      }
      tap(bb, ub, hb) {
        return !this.busy(bb) && (this.taps.set(bb, {
          at: this.now(),
          done: ub
        }), hb(), !0)
      }
      settle(bb) {
        for (const [ub, hb] of [...this.taps]) hb.done(bb) && this.taps.delete(ub)
      }
      busy(bb) {
        const ub = this.taps.get(bb);
        return !!ub && (!(this.now() - ub.at >= 3e3) || (this.taps.delete(bb), !1))
      }
      busyIds() {
        const bb = new Set;
        for (const ub of [...this.taps.keys()]) this.busy(ub) && bb.add(ub);
        return bb
      }
      clear() {
        this.taps.clear()
      }
    }

    function QX(bb) {
      return {
        send: ub => bb.track(ub),
        sendUrgent: (ub, hb) => bb.track(ub, {
          urgent: !0,
          supersedes: hb
        }),
        leftAt: ub => bb.leftAt(ub),
        holdReserve: () => bb.holdUrgentReserve(),
        answerMs: tU
      }
    }

    function RX() {
      return performance.now()
    }

    function bp(bb) {
      const ub = bb.baf2RxNeed.map((bb => {
        let [ub, hb] = bb;
        return [ub, hb]
      }));
      return JSON.stringify([bb.baf2RxFormed, ub, bb.baf2RxBad, bb.baf2RxCells])
    }

    function hp(bb, ub) {
      const hb = 0 !== (ub & wu),
        Bb = 0 !== (bb.baf2RxFlags & wu);
      return !hb || Bb || "running" !== bb.baf2RxState && "idle" !== bb.baf2RxState ? !hb && Bb && "scram" === bb.baf2RxState && bb.baf2RxFuel > 0 ? "idle" : bb.baf2RxState : "scram"
    }

    function Bp(bb) {
      return JSON.stringify([bb.baf2BatFormed, bb.baf2BatNeed, bb.baf2BatBad])
    }

    function Op(bb) {
      return bb.join(",")
    }
    class Gp {
      constructor() {
        this.listeners = new Set
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class Up {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(bb, ub) {
        this.lastAt = bb, this.lastUntil = bb + ub
      }
      answered(bb) {
        return this.lastAt >= bb || bb < this.lastUntil
      }
    }
    class Lp {
      constructor(bb, ub) {
        this.link = bb, this.now = ub, this.hold = new kX, this.picked = null, this.notTaken = null
      }
      shown(bb) {
        const ub = this.hold.shown(bb);
        if (this.hold.takeUnmet() && this.picked) {
          var hb;
          const {
            plans: ub,
            ctrl: Bb,
            at: Ob
          } = this.picked;
          this.picked = null, ub.unpredict(Bb), null === (hb = this.notTaken) || void 0 === hb || hb.call(this, bb, Ob)
        }
        return ub
      }
      pendingFor(bb) {
        return this.hold.pendingFor(bb)
      }
      xw(bb, ub, hb) {
        bb.predictSize(ub, hb), this.picked = {
          plans: bb,
          ctrl: ub,
          at: this.now()
        };
        const Bb = this.link.send(Hu(ub, "plan", ...hb));
        this.hold.set(hb, new yX(Bb, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class Yp {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RX;
        this.plans = bb, this.readInterior = ub, this.link = hb, this.now = Bb, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new fX, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Gp, this.redraw = null, this.releaseReserve = null, this.size = new Lp(hb, Bb), this.oneShots = new cX(Bb), this.throttle = new FX((bb => this.echo(this.link.send(this.command("throttle", bb)))))
      }
      set(bb) {
        !bb.baf2RxOpen && this.raw && Op(this.raw.baf2RxAt) === Op(bb.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(bb), this.vp(bb)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(bb) {
        this.size.notTaken = bb
      }
      resize(bb) {
        this.raw && (this.size.xw(this.plans, this.raw.baf2RxAt, bb), this.vp(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const bb = this.raw.baf2RxAt;
        this.plans.setStarter(bb, !this.plans.showsStarter(bb)), this.vp(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.vp(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.vp(this.raw)
      }
      send(bb) {
        if (this.raw) {
          for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
          this.link.send(this.command(bb, ...hb))
        }
      }
      tap(bb, ub) {
        this.raw && this.oneShots.tap(bb, function(bb, ub) {
          if ("start" === bb) return bb => 0 === (bb.baf2RxFlags & wu);
          if ("odConfirm" === bb) return bb => 0 !== (bb.baf2RxFlags & Zu);
          const hb = bp(ub);
          return bb => bp(bb) !== hb
        }(bb, this.raw), ub) && ("start" === bb && (this.startedAt = this.now()), this.vp(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(wu, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(bb, ub) {
        if (!this.raw) return;
        const hb = bb === wu ? this.command(ub ? "scram" : "start") : this.command("od", ub ? 1 : 0),
          Bb = ub && bb === wu,
          Ob = `${au} ${this.raw.baf2RxAt.join(" ")} `,
          Gb = this.echo(Bb ? this.link.sendUrgent(hb, (bb => {
            const ub = bb.startsWith(Ob) ? bb.slice(Ob.length).split(" ")[0] : null;
            return "throttle" === ub || "start" === ub
          })) : this.link.send(hb));
        this.flags.set(bb, ub, Gb), Bb && this.throttle.assume(0, Gb), this.vp(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(bb) {
        this.throttle.drag(bb), this.raw && this.vp(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.vp(this.raw)
      }
      subscribe(bb) {
        return this.listeners.subscribe(bb)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var bb;
        this.throttle.release(), null === (bb = this.releaseReserve) || void 0 === bb || bb.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(bb) {
        for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
        return Hu(this.raw.baf2RxAt, bb, ...hb)
      }
      echo(bb) {
        return new yX(bb, this.link, this.link.answerMs, this.now)
      }
      vp(bb) {
        var ub;
        this.raw = bb;
        const hb = this.flags.shown(bb.baf2RxFlags),
          Bb = {
            ...bb,
            baf2RxFlags: hb,
            baf2RxTarget: this.throttle.shown(bb.baf2RxTarget),
            baf2RxState: hp(bb, hb)
          },
          Ob = this.size.shown(Bb.baf2RxDims),
          Gb = this.throttle.pendingFor(),
          Ub = [this.throttle.pendingFor(bb.baf2RxTarget), this.flags.pendingFor(bb.baf2RxFlags), this.size.pendingFor(bb.baf2RxDims)].filter((bb => null !== bb)),
          Lb = Ub.length > 0 ? Math.max(...Ub) : null,
          Yb = this.oneShots.busyIds(),
          Sb = Bb.baf2RxAt;
        let ab, Hb, wb = null,
          Zb = [Math.max(0, Ob[0] - 2), Math.max(0, Ob[1] - 2), Math.max(0, Ob[2] - 2)];
        if (Bb.baf2RxFormed) {
          const [bb, ub, hb] = Bb.baf2RxDims;
          Zb = [Math.max(0, bb - 2), Math.max(0, ub - 2), Math.max(0, hb - 2)], ab = Array.from(Bb.baf2RxCells, Number), Hb = `${Zb.join(",")}:${Bb.baf2RxCells}`
        } else {
          var Xb;
          const bb = null === (Xb = this.plans.planAt(Sb)) || void 0 === Xb ? void 0 : Xb.box,
            ub = bb ? yh(bb, "reactor", ...Ob) : qh(Sb, 1, ...Ob, Eh("reactor", Ob[0])),
            hb = this.readInterior(ub);
          wb = RL(Zb, hb), ab = hb, Hb = `${Zb.join(",")}:${hb.join("")}`
        }(null === (ub = this.looksOf) || void 0 === ub ? void 0 : ub.key) !== Hb && (this.looksOf = {
          key: Hb,
          looks: GY(Zb, ab)
        }), this.view = {
          status: Bb,
          dims: Ob,
          plan: wb,
          inner: Zb,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Sb),
          odConfirmed: this.odConfirmed || 0 !== (Bb.baf2RxFlags & Ku),
          guide: this.plans.guideOn(),
          throttlePending: null !== Gb,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== Lb && Lb >= 5e3,
          busy: Yb,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== Lb || Yb.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.vp(this.raw)
        }), 250))
      }
    }
    class Sp {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RX;
        this.plans = bb, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Gp, this.redraw = null, this.size = new Lp(ub, hb), this.oneShots = new cX(hb)
      }
      set(bb) {
        !bb.baf2BatOpen && this.view && Op(this.view.status.baf2BatAt) === Op(bb.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(bb), this.vp(bb)
      }
      tap(bb, ub) {
        if (!this.view) return;
        const hb = Bp(this.view.status);
        this.oneShots.tap(bb, (bb => Bp(bb) !== hb), ub) && this.vp(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(bb) {
        this.size.notTaken = bb
      }
      resize(bb) {
        this.view && (this.size.xw(this.plans, this.view.status.baf2BatAt, bb), this.vp(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.vp(this.view.status)
      }
      subscribe(bb) {
        return this.listeners.subscribe(bb)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      vp(bb) {
        const ub = this.size.shown(bb.baf2BatDims),
          hb = this.oneShots.busyIds();
        this.view = {
          status: bb,
          dims: ub,
          LH: KY(ub, bb.baf2BatDims) ? bb.baf2BatCapacity : YY(...ub),
          guide: this.plans.guideOn(),
          busy: hb
        }, this.listeners.notify(), hb.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.vp(this.view.status)
        }), 250))
      }
    }
    const ap = "buildAFactory2Game:";

    function Hp() {
      var bb;
      const ub = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!ub) return null;
      const hb = ub.querySelector(".ExitButton");
      return function(bb, ub) {
        const hb = ub ? ub.left - 8 : bb.right;
        return {
          left: bb.left,
          top: bb.top,
          width: Math.max(0, hb - bb.left),
          height: bb.height
        }
      }(ub.getBoundingClientRect(), null !== (bb = null === hb || void 0 === hb ? void 0 : hb.getBoundingClientRect()) && void 0 !== bb ? bb : null)
    }
    const wp = (0, Bb.memo)((function(bb) {
      let {
        store: ub
      } = bb;
      const {
        t: hb
      } = (0, DO.K)(), [Ob, Gb] = (0, Bb.useState)((() => ub.get())), [Ub, Lb] = (0, Bb.useState)((() => performance.now()));
      (0, Bb.useEffect)((() => (Gb(ub.get()), ub.subscribe((() => {
        Gb(ub.get()), Lb(performance.now())
      })))), [ub]);
      const {
        alarm: Yb,
        boomAt: Sb
      } = Ob, ab = null !== Yb && null !== Yb.secs, [Hb, wb] = (0, Bb.useState)(null);
      (0, Bb.useEffect)((() => {
        if (!ab) return;
        wb(Hp());
        const bb = setInterval((() => {
          Lb(performance.now()), wb(Hp())
        }), 250);
        return () => {
          clearInterval(bb)
        }
      }), [ab]);
      const [Zb, Xb] = (0, Bb.useState)(!1);
      return (0, Bb.useEffect)((() => {
        if (Sb === -1 / 0) return;
        Xb(!0);
        const bb = setTimeout((() => {
          Xb(!1)
        }), 1300);
        return () => {
          clearTimeout(bb)
        }
      }), [Sb]), (0, jG.jsxs)(jG.Fragment, {
        children: [null !== Yb && (0, jG.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: hb(Yb.hot ? `${ap}rxAlarmSiren` : `${ap}rxAlarmDamaged`, {
            amount: String(Yb.damage)
          })
        }), null !== Yb && null !== Yb.secs && (0, jG.jsx)("div", {
          className: Hb ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Hb && void 0 !== Hb ? Hb : void 0,
          "aria-live": "assertive",
          children: hb(`${ap}rxAlarmCountdown`, {
            amount: String((pb = Yb.secs, ob = Ub - Yb.receivedAt, Math.max(1, Math.ceil(pb - ob / 1e3))))
          })
        }), Zb && (0, jG.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var pb, ob
    }));
    class Zp {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      sK(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const hb = bb.baf2RxAlarmAt.join(",");
        let Bb = this.snapshot.boomAt;
        if (bb.baf2RxAlarmBoom) this.byReactor.delete(hb), Bb = ub;
        else if (bb.baf2RxAlarmDamage <= 0) this.byReactor.delete(hb);
        else {
          var Ob;
          this.byReactor.set(hb, {
            damage: bb.baf2RxAlarmDamage,
            secs: null !== (Ob = bb.baf2RxAlarmSecs) && void 0 !== Ob ? Ob : null,
            hot: !0 === bb.baf2RxAlarmHot,
            receivedAt: ub
          })
        }
        this.vp(Bb)
      }
      retain(bb) {
        let ub = !1;
        for (const hb of [...this.byReactor.keys()]) bb.has(hb) || (this.byReactor.delete(hb), ub = !0);
        ub && this.vp(this.snapshot.boomAt)
      }
      has(bb) {
        return this.byReactor.has(bb)
      }
      get() {
        return this.snapshot
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      vp(bb) {
        let ub = null;
        for (const hb of this.byReactor.values())(!ub || hb.damage > ub.damage) && (ub = hb);
        this.snapshot = {
          alarm: ub,
          boomAt: bb
        };
        for (const hb of this.listeners) hb()
      }
    }
    const Xp = {
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

    function pp(bb) {
      return [bb[0], bb[1], bb[2]]
    }

    function op(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }
    class Ap {
      constructor(bb) {
        if (this.plans = bb, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var bb;
            return {
              active: this.glows.flatMap((bb => {
                let {
                  record: ub
                } = bb;
                return ub ? [ub] : []
              })),
              log: [...null !== (bb = this.devLog) && void 0 !== bb ? bb : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var bb;
        return null !== (bb = this.devLog) && void 0 !== bb ? bb : []
      }
      check(bb, ub, hb) {
        const Bb = new Set(ub.map((bb => op(bb.box.ctrl))));
        for (const Ub of function(bb, ub) {
            const hb = [],
              Bb = new Map(bb);
            bb.clear();
            for (const Ob of ub) {
              const ub = LX(Ob.box.ctrl),
                Gb = Ob.formed ? Ob.level : 0;
              bb.set(ub, Gb), Gb > 0 && 0 === Bb.get(ub) && hb.push(Ob)
            }
            return hb
          }(this.levels, this.plans.all())) Bb.has(op(Ub.box.ctrl)) && this.show(bb, Ub, "on", hb);
        const Ob = this.plans.lastFormed();
        if (null === Ob || Ob.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Ob.receivedAt;
        const Gb = function(bb, ub) {
          var hb;
          const Bb = LX(bb);
          return null !== (hb = ub.find((bb => LX(bb.box.ctrl) === Bb))) && void 0 !== hb ? hb : null
        }(Ob.ctrl, ub);
        return Gb && this.show(bb, Gb, "formed", hb), Gb
      }
      fade(bb, ub) {
        0 !== this.glows.length && (this.glows = this.glows.filter((hb => {
          let {
            mesh: Bb,
            glow: Ob,
            startMs: Gb,
            record: Ub
          } = hb;
          const Lb = (ub - Gb) / Xp[Ob].ms;
          return Lb >= 1 ? (bb.disposeGameMesh(Bb), Ub && (Ub.endMs = ub), !1) : (bb.setGameMesh(Bb, {
            visibility: "formed" === Ob ? 1 - Lb : Math.sin(Math.PI * Lb)
          }), !0)
        })))
      }
      dispose(bb) {
        for (const {
            mesh: hb
          }
          of this.glows) bb.disposeGameMesh(hb);
        this.glows = [], this.levels.clear();
        const ub = "undefined" !== typeof window ? window : null;
        (null === ub || void 0 === ub ? void 0 : ub.baf2Glows) === this.devAccessor && delete ub.baf2Glows
      }
      show(bb, ub, hb, Bb) {
        const {
          lo: Ob,
          hi: Gb
        } = iY(ub.box);
        let Ub = null;
        this.devLog && (Ub = {
          glow: hb,
          ctrl: pp(ub.box.ctrl),
          lo: pp(Ob),
          hi: pp(Gb),
          startMs: Bb,
          endMs: null
        }, this.devLog.push(Ub), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(bb, hb, vY(Ob, Gb, Xp[hb].thick)),
          glow: hb,
          startMs: Bb,
          record: Ub
        })
      }
      build(bb, ub, hb) {
        const Bb = ZX(bb, hb, {
          rgb: Xp[ub].colour,
          alpha: 1
        });
        return bb.setGameMesh(Bb, {
          visibility: 0
        }), Bb
      }
    }
    const lp = 1 / .6,
      Kp = {
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
        blendMode: JL.f.Standard,
        soft: !0
      },
      Wp = {
        ...Kp,
        size: [.25, .4],
        count: 2
      };

    function Cp(bb) {
      return {
        colours: [bb, bb],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: JL.f.Add,
        soft: !1
      }
    }
    const dp = Cp([150, 225, 255]),
      rp = Cp([185, 145, 255]),
      jp = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function np(bb) {
      const ub = Ju[bb];
      return null === ub.fuelSlot || Oh(ub) ? jp.includes(bb) ? rp : dp : Kp
    }
    const Dp = {
        kind: "smokePuff"
      },
      xp = [.2, .025, .2];

    function zp(bb, ub) {
      const [
        [hb, Bb, Ob],
        [Gb, Ub, Lb]
      ] = bb.colours;
      return {
        texture: bb.soft ? Dp : "square_particle",
        LH: ub,
        minLifeTime: bb.life[0] / lp,
        maxLifeTime: bb.life[1] / lp,
        minEmitPower: bb.power[0] * lp,
        maxEmitPower: bb.power[1] * lp,
        minSize: bb.size[0],
        maxSize: bb.size[1],
        emitRate: 0,
        gravity: [0, bb.lift * lp * lp, 0],
        dir1: [-bb.spread, 1, -bb.spread],
        dir2: [bb.spread, 1, bb.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [hb, Bb, Ob, bb.alpha],
          maxColor: [Gb, Ub, Lb, bb.alpha]
        }, {
          timeFraction: 1,
          minColor: [hb, Bb, Ob, 0],
          maxColor: [Gb, Ub, Lb, 0]
        }],
        blendMode: bb.blendMode
      }
    }
    class gp {
      constructor(bb) {
        this.fixed = bb, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(bb, ub, hb) {
        var Bb;
        if (hb === this.lastFrame) return !1;
        this.lastFrame = hb;
        const Ob = this.at;
        Ob[0] = ub[0] + .5, Ob[1] = ub[1] + 1.025, Ob[2] = ub[2] + .5;
        const Gb = null !== (Bb = this.fixed) && void 0 !== Bb ? Bb : Lb() ? Wp : Kp;
        let Ub = this.particles.get(Gb);
        return Ub || (Ub = bb.createParticles(function(bb) {
          return zp(bb, Math.ceil(12 * bb.count * bb.life[1]) + bb.count)
        }(Gb), {
          pos: Ob,
          half: xp
        }), this.particles.set(Gb, Ub)), Ub.moveTo(Ob), Ub.emit(Gb.count), !0
      }
      dispose() {
        for (const bb of this.particles.values()) bb.stop();
        this.particles.clear()
      }
    }
    class ip {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(bb) {
        this.indexed = !0;
        for (const ub of xu) {
          const hb = np(ub);
          for (let Bb = 1; Bb <= 4; Bb++) {
            const Ob = bb.blockNameToBlockId(`${ub}|meta|rot${Bb}|Running`, !0);
            if (null === Ob) continue;
            let Gb = this.pufferIndexByStyle.get(hb);
            void 0 === Gb && (Gb = this.pufferList.push(new gp(hb === Kp ? null : hb)) - 1, this.pufferIndexByStyle.set(hb, Gb)), this.pufferIndexById[Ob] = Gb + 1
          }
        }
      }
      onAfterRender(bb, ub) {
        this.indexed || this.index(bb);
        const hb = performance.now(),
          Bb = 0 === this.lastMs ? 0 : Math.min(hb - this.lastMs, 250) / 1e3;
        this.lastMs = hb, this.frame++, bb.particlesEnabled() ? (this.scan(bb, ub), this.puff(bb, Bb)) : this.sources = []
      }
      dispose() {
        for (const bb of this.pufferList) bb.dispose();
        this.sources = [], this.found = []
      }
      scan(bb, ub) {
        0 === this.scanRow && (this.origin = [Math.floor(ub[0]) - 12, Math.floor(ub[1]) - 6, Math.floor(ub[2]) - 12]);
        const hb = Math.min(this.scanRow + 16, 325),
          [Bb, Ob, Gb] = this.origin,
          Ub = this.hits;
        Ub.length = 0;
        for (let Lb = this.scanRow; Lb < hb; Lb++) {
          const ub = Bb + Lb % 25,
            hb = Ob + Math.floor(Lb / 25);
          bb.scanBlocks(ub, hb, Gb, ub + 1, hb + 1, Gb + 25, this.pufferIndexById, Ub)
        }
        for (let Lb = 0; Lb < Ub.length; Lb += 4) {
          const bb = Ub[Lb + 3];
          this.found.push({
            pos: [Ub[Lb], Ub[Lb + 1], Ub[Lb + 2]],
            bS: bb,
            puffer: this.pufferList[this.pufferIndexById[bb] - 1]
          })
        }
        this.scanRow = hb, 325 === hb && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(bb, ub) {
        const hb = this.sources.length;
        if (0 !== hb) {
          this.budget = Math.min(this.budget + Math.min(hb / 1.2, 12) * ub, 2);
          for (let ub = 0; ub < hb && this.budget >= 1; ub++) {
            const ub = this.sources[this.cursor % hb];
            this.cursor = (this.cursor + 1) % hb, bb.getBlockId(ub.pos[0], ub.pos[1], ub.pos[2]) === ub.bS && (ub.puffer.puff(bb, ub.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const vp = {
        ...Cp([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      tp = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function Jp(bb) {
      return 0 === bb.spots.length ? 0 : Math.min(1 * bb.level, 4)
    }

    function ep(bb) {
      return 0 === bb.glass.length ? 0 : Math.min(.75 * bb.level, 3)
    }

    function Np(bb) {
      return `${bb.ctrl.join(",")}:${bb.rot}:${bb.cu},${bb.cv}:${bb.w},${bb.h},${bb.d}`
    }

    function sp(bb, ub) {
      const hb = ub.w - 2,
        Bb = ub.h - 2,
        Ob = ub.d - 2,
        Gb = [];
      for (let Ub = 0; Ub < hb * Bb * Ob; Ub++) {
        const Lb = Ub % hb,
          Yb = Math.floor(Ub / hb) % Ob,
          Sb = Math.floor(Ub / (hb * Ob));
        if (Lb > 0 && Lb < hb - 1 && Yb > 0 && Yb < Ob - 1 && Sb > 0 && Sb < Bb - 1) continue;
        const ab = Qh(ub, hB(ub, Ub)),
          Hb = iX(bb, ab);
        if (null !== Hb && "Fuel Rod" === ih(Hb))
          for (const ub of tp) {
            const hb = [ab[0] + ub[0], ab[1] + ub[1], ab[2] + ub[2]];
            mp(bb, hb) && Gb.push(Ip(hb, ub))
          }
      }
      return Gb
    }

    function Mp(bb, ub) {
      const {
        lo: hb,
        hi: Bb
      } = iY(ub), Ob = [];
      for (let Gb = hb[0]; Gb < Bb[0]; Gb++)
        for (let ub = hb[1]; ub < Bb[1]; ub++) {
          const Ub = Gb === hb[0] || Gb === Bb[0] - 1 || ub === hb[1] || ub === Bb[1] - 1 ? 1 : Math.max(1, Bb[2] - 1 - hb[2]);
          for (let Lb = hb[2]; Lb < Bb[2]; Lb += Ub) {
            const Ub = [Gb, ub, Lb];
            if (!mp(bb, Ub)) continue;
            const Yb = Gb === hb[0] ? tp[1] : Gb === Bb[0] - 1 ? tp[0] : Lb === hb[2] ? tp[5] : Lb === Bb[2] - 1 ? tp[4] : ub === hb[1] ? tp[3] : tp[2];
            Ob.push(Ip(Ub, Yb))
          }
        }
      return Ob
    }

    function mp(bb, ub) {
      const hb = iX(bb, ub);
      return null !== hb && "Reactor Glass" === ih(hb)
    }

    function Ip(bb, ub) {
      return [
        [bb[0] + .5 + .55 * ub[0], bb[1] + .5 + .55 * ub[1], bb[2] + .5 + .55 * ub[2]],
        [0 === ub[0] ? .4 : .02, 0 === ub[1] ? .4 : .02, 0 === ub[2] ? .4 : .02]
      ]
    }
    class Pp {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(bb, ub, hb, Bb) {
        const Ob = [],
          Gb = new Set;
        for (const Sb of ub) {
          var Ub, Lb, Yb;
          const {
            box: ub
          } = Sb;
          if ("reactor" !== Sb.kind || Sb.level <= 0 || (ub.ctrl[0] - hb[0]) ** 2 + (ub.ctrl[1] - hb[1]) ** 2 + (ub.ctrl[2] - hb[2]) ** 2 > 576) continue;
          const ab = Np(ub);
          Gb.add(ab);
          let Hb = this.spots.get(ab);
          if ((!Hb || Bb - Hb.at > 3e3) && (Hb = {
              at: Bb,
              spots: sp(bb, ub),
              glass: Mp(bb, ub)
            }, this.spots.set(ab, Hb)), 0 === Hb.spots.length && 0 === Hb.glass.length) continue;
          const wb = this.sparking.find((bb => bb.key === ab));
          Ob.push({
            key: ab,
            level: Sb.level,
            spots: Hb.spots,
            glass: Hb.glass,
            budget: null !== (Ub = null === wb || void 0 === wb ? void 0 : wb.budget) && void 0 !== Ub ? Ub : 0,
            cursor: null !== (Lb = null === wb || void 0 === wb ? void 0 : wb.cursor) && void 0 !== Lb ? Lb : 0,
            glassBudget: null !== (Yb = null === wb || void 0 === wb ? void 0 : wb.glassBudget) && void 0 !== Yb ? Yb : 0
          })
        }
        for (const Sb of this.spots.keys()) Gb.has(Sb) || this.spots.delete(Sb);
        this.sparking = Ob
      }
      emit(bb, ub, hb) {
        var Bb;
        if (0 === this.sparking.length || !bb.particlesEnabled() || hb === this.lastFrame) return;
        this.lastFrame = hb;
        let Ob = 0,
          Gb = 0;
        for (const Xb of this.sparking) Ob += Jp(Xb), Gb += ep(Xb);
        const Ub = Ob > 8 ? 8 / Ob : 1,
          Lb = Gb > 6 ? 6 / Gb : 1;
        let Yb, Sb = null,
          ab = null;
        for (const Xb of this.sparking) Xb.budget = Math.min(Xb.budget + Jp(Xb) * Ub * ub, 2), Xb.budget >= 1 && (!Sb || Xb.budget > Sb.budget) && (Sb = Xb), Xb.glassBudget = Math.min(Xb.glassBudget + ep(Xb) * Lb * ub, 2), Xb.glassBudget >= 1 && (!ab || Xb.glassBudget > ab.glassBudget) && (ab = Xb);
        if (Sb) Sb.budget--, Yb = Sb.spots[Sb.cursor++ % Sb.spots.length];
        else {
          if (!ab) return;
          ab.glassBudget--, Yb = ab.glass[Math.floor(Math.random() * ab.glass.length)]
        }
        const [Hb, wb] = Yb, Zb = null !== (Bb = this.emitter) && void 0 !== Bb ? Bb : this.create(bb, Hb, wb);
        Zb.moveTo(Hb, wb), Zb.emit(vp.count)
      }
      dispose() {
        var bb;
        null === (bb = this.emitter) || void 0 === bb || bb.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(bb, ub, hb) {
        const Bb = Math.ceil(14 * vp.count * vp.life[1]) + vp.count;
        return this.emitter = bb.createParticles(zp(vp, Bb), {
          pos: ub,
          half: hb
        }), this.emitter
      }
    }
    const qp = [2, 3.2],
      Ep = 1 / 3,
      yp = 1 / .6,
      Vp = {
        texture: Dp,
        LH: Math.ceil(18 * qp[1]) + 4,
        minLifeTime: qp[0] / yp,
        maxLifeTime: qp[1] / yp,
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
        blendMode: JL.f.Standard
      };
    class Fp {
      constructor(bb) {
        this.plans = bb, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new Pp, this.frame = 0, this.outline = new Ap(bb)
      }
      onAfterRender(bb, ub, hb) {
        const Bb = performance.now(),
          Ob = 0 === this.lastMs ? 0 : Math.min(Bb - this.lastMs, 250) / 1e3;
        if (this.lastMs = Bb, this.outline.fade(bb, Bb), this.puff(bb, Ob, hb), this.sparks.emit(bb, Ob, this.frame++), Bb - this.lastCheckMs < 150) return;
        this.lastCheckMs = Bb;
        const Gb = this.plans.all().filter((bb => bb.formed && fp(bb.box.ctrl, hb) <= 4096));
        this.plumes = Gb.filter((bb => "reactor" === bb.kind && bb.level > 0)).map((bb => ({
          box: bb.box,
          level: bb.level
        }))), this.updateHums(bb, ub, Gb, hb), this.sparks.update(bb, Gb, hb, Bb), this.chimeFormed(bb, ub, Gb, Bb)
      }
      dispose(bb) {
        var ub;
        this.outline.dispose(bb), null === (ub = this.steam) || void 0 === ub || ub.dispose(), this.steam = null, this.sparks.dispose();
        for (const hb of this.hums.values()) hb.stop();
        this.hums.clear()
      }
      chimeFormed(bb, ub, hb, Bb) {
        const Ob = this.outline.check(bb, hb, Bb);
        Ob && bb.playSound(ub, "exp_levelup", .6, 1, {
          Oh: [Ob.box.ctrl[0] + .5, Ob.box.ctrl[1], Ob.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(bb, ub, hb) {
        const Bb = this.plumes;
        if (0 === Bb.length || !bb.particlesEnabled()) return void(this.plumeBudget = 0);
        const Ob = Bb.reduce(((bb, ub) => bb + 3 * ub.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Ob * ub, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Gb = this.plumeCursor % (Ob / 3);
        this.plumeCursor++;
        let Ub = Bb[0];
        for (const Hb of Bb) {
          if (Gb < Hb.level) {
            Ub = Hb;
            break
          }
          Gb -= Hb.level
        }
        const {
          lo: Lb,
          hi: Yb
        } = iY(Ub.box);
        if (function(bb, ub, hb) {
            const Bb = Math.max(bb[0] - hb[0], 0, hb[0] - ub[0]),
              Ob = Math.max(bb[2] - hb[2], 0, hb[2] - ub[2]);
            return Math.hypot(Bb, hb[1] - ub[1], Ob)
          }(Lb, Yb, hb) < 6 && Math.random() > Ep) return;
        const Sb = [(Lb[0] + Yb[0]) / 2, Yb[1] + .05, (Lb[2] + Yb[2]) / 2],
          ab = [(Yb[0] - Lb[0]) / 2 - .5, .05, (Yb[2] - Lb[2]) / 2 - .5];
        this.steam ??= bb.createParticles(Vp, {
          pos: Sb,
          half: ab
        }), this.steam.moveTo(Sb, ab), this.steam.emit(1)
      }
      updateHums(bb, ub, hb, Bb) {
        const Ob = new Map;
        for (const Ub of hb) "reactor" === Ub.kind && Ub.level > 0 && fp(Ub.box.ctrl, Bb) <= 576 && Ob.set(`${Gb=Ub.box.ctrl,`${Gb[0]},${Gb[1]},${Gb[2]}`}:${Ub.level}`, Ub);
        var Gb;
        for (const [Ub, Lb] of this.hums) Ob.has(Ub) || (Lb.stop(), this.hums.delete(Ub));
        for (const [Ub, Lb] of Ob) {
          if (this.hums.has(Ub)) continue;
          const {
            lo: hb,
            hi: Bb
          } = iY(Lb.box), Ob = [(hb[0] + Bb[0]) / 2, hb[1], (hb[2] + Bb[2]) / 2], Gb = bb.playSound(ub, "rocketEngineLoop", .08 + .06 * Lb.level, .55, {
            Oh: Ob,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Gb && this.hums.set(Ub, Gb)
        }
      }
    }

    function fp(bb, ub) {
      return (bb[0] - ub[0]) ** 2 + (bb[1] - ub[1]) ** 2 + (bb[2] - ub[2]) ** 2
    }
    class kp {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      sK(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Bb = [bb.baf2BombAt[0], bb.baf2BombAt[1], bb.baf2BombAt[2]],
          Ob = bb.baf2BombR;
        if (bb.baf2BombBoom) {
          const bb = Math.hypot(ub[0] - Bb[0], ub[1] - Bb[1], ub[2] - Bb[2]);
          this.vp({
            fuse: null,
            blast: {
              at: Bb,
              r: Ob,
              receivedAt: hb,
              distance: bb,
              flash: bb <= 3 * Ob
            }
          })
        } else this.vp({
          ...this.snapshot,
          fuse: bb.baf2BombMs > 0 ? {
            at: Bb,
            r: Ob,
            endsAt: hb + bb.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      vp(bb) {
        this.snapshot = bb;
        for (const ub of this.listeners) ub()
      }
    }
    const Tp = (0, Bb.memo)((function(bb) {
      var ub;
      let {
        store: hb
      } = bb;
      const {
        t: Ob
      } = (0, DO.K)(), [Gb, Ub] = (0, Bb.useState)((() => hb.get())), [Lb, Yb] = (0, Bb.useState)((() => performance.now()));
      (0, Bb.useEffect)((() => (Ub(hb.get()), hb.subscribe((() => {
        Ub(hb.get()), Yb(performance.now())
      })))), [hb]);
      const {
        fuse: Sb,
        blast: ab
      } = Gb;
      (0, Bb.useEffect)((() => {
        if (!Sb) return;
        const bb = setInterval((() => {
          Yb(performance.now())
        }), 250);
        return () => {
          clearInterval(bb)
        }
      }), [Sb]);
      const [Hb, wb] = (0, Bb.useState)(!1);
      (0, Bb.useEffect)((() => {
        if (null === ab || void 0 === ab || !ab.flash) return;
        wb(!0);
        const bb = setTimeout((() => {
          wb(!1)
        }), 2500);
        return () => {
          clearTimeout(bb)
        }
      }), [ab]);
      const Zb = Sb ? function(bb, ub) {
        return bb.endsAt <= ub ? 0 : Math.ceil((bb.endsAt - ub) / 1e3)
      }(Sb, Lb) : 0;
      return (0, jG.jsxs)(jG.Fragment, {
        children: [Zb > 0 && (0, jG.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Ob("buildAFactory2Game:bombCountdown", {
            amount: String(Zb),
            radius: String(null !== (ub = null === Sb || void 0 === Sb ? void 0 : Sb.r) && void 0 !== ub ? ub : 0)
          })
        }), Hb && (0, jG.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function cp(bb) {
      const ub = Math.min(4, Math.max(1, bb / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * bb / 4)),
        capSpread: Math.min(5 * bb / 8, 24 * ub),
        capThick: 6 * ub,
        stemHalfWidth: 3 * ub,
        puffScale: ub
      }
    }
    class Qp {
      constructor() {
        this.MS = !1
      }
      hold(bb) {
        bb.getCameraFar() < 1e3 && (bb.setCameraFar(1e3), this.MS = !0)
      }
      release(bb) {
        this.MS && (this.MS = !1, bb.setCameraFar(null))
      }
    }
    const Rp = 1 / .6,
      bo = [.2, .1, .2],
      uo = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      ho = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: JL.f.Standard,
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
      Bo = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: JL.f.Standard,
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
      Oo = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: JL.f.Standard,
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
      Go = {
        texture: Dp,
        LH: Math.ceil(120) + 4,
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
        blendMode: JL.f.Add
      };
    class Uo {
      constructor(bb) {
        this.store = bb, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Qp, this.timers = []
      }
      onAfterRender(bb, ub) {
        const hb = performance.now(),
          Bb = 0 === this.lastMs ? 0 : Math.min(hb - this.lastMs, 250) / 1e3;
        this.lastMs = hb;
        const {
          fuse: Ob,
          blast: Gb
        } = this.store.get();
        null !== Gb && Gb !== this.shownBlast && (this.shownBlast = Gb, this.startBlast(bb, ub, Gb, hb));
        const Ub = bb.particlesEnabled();
        null !== Ob && Ob.endsAt > hb && Ub ? this.emitBeacon(bb, Ob, Bb, hb) : this.beaconBudget = 0, null !== this.cloud && (hb - this.cloud.startMs > 33e3 ? this.disposeCloud(bb) : (this.far.hold(bb), Ub && this.emitCloud(bb, Bb, hb)))
      }
      dispose(bb) {
        var ub;
        null === (ub = this.beacon) || void 0 === ub || ub.dispose(), this.beacon = null, this.disposeCloud(bb);
        for (const hb of this.timers) clearTimeout(hb);
        this.timers.length = 0
      }
      emitBeacon(bb, ub, hb, Bb) {
        const Ob = ub.endsAt - Bb < 5e3 ? 350 : 1e3,
          Gb = .5 + .5 * Math.sin(2 * Math.PI * Bb / Ob);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Gb * hb, 4), this.beaconBudget < 1) return;
        const Ub = Math.floor(this.beaconBudget);
        this.beaconBudget -= Ub;
        const [Lb, Yb, Sb] = ub.at, ab = [Lb + .5, Yb + 1.1, Sb + .5];
        this.beacon ??= bb.createParticles(Go, {
          pos: ab,
          half: bo
        }), this.beacon.moveTo(ab), this.beacon.emit(Ub)
      }
      startBlast(bb, ub, hb, Bb) {
        var Ob;
        null === (Ob = this.beacon) || void 0 === Ob || Ob.dispose(), this.beacon = null, this.disposeCloud(bb);
        const Gb = (0, vL.isMobile)() ? .5 : 1;
        this.streams = [ho, Bo, Oo].map((bb => {
          const ub = Math.round(bb.count * Gb);
          return {
            spec: bb,
            particles: null,
            rate: ub / ((bb.toMs - bb.fromMs) / 1e3),
            budget: 0,
            left: ub
          }
        })), this.cloud = {
          blast: hb,
          startMs: Bb
        };
        const Ub = Math.max(.25, 1 - hb.distance / (6 * hb.r)),
          Lb = hb.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [hb, Bb, Ob] of uo) Yo(bb, ub, hb, Ub * Bb, Ob)
        }), Lb))
      }
      emitCloud(bb, ub, hb) {
        const {
          blast: Bb,
          startMs: Ob
        } = this.cloud, Gb = hb - Ob, [Ub, Lb, Yb] = Bb.at, Sb = cp(Bb.r);
        for (const ab of this.streams) {
          const {
            spec: hb
          } = ab;
          if (ab.left <= 0 || Gb < hb.fromMs) continue;
          ab.budget += ab.rate * ub;
          const Ob = Math.min(Math.floor(ab.budget), ab.left);
          if (Ob < 1) continue;
          ab.budget -= Ob, ab.left -= Ob;
          const Hb = ab.particles ??= this.createStream(bb, hb, Bb);
          if (hb === ho) {
            const bb = Sb.stemHalfWidth;
            Hb.moveTo([Ub, Lb + 1, Yb], [bb, 1, bb])
          } else if (hb === Bo) {
            const bb = Sb.capSpread * Math.min(1, (Gb - hb.fromMs) / 3e3),
              ub = Math.sqrt(Math.random()),
              Bb = 2 * Math.random() * Math.PI,
              Ob = Math.cos(Bb) * ub,
              ab = Math.sin(Bb) * ub,
              wb = Ub + Ob * bb,
              Zb = Yb + ab * bb,
              Xb = Sb.capThick,
              pb = Lb + Sb.capHeight + Xb * (1 - ub * ub) * 2;
            Hb.setDirections([.7 * Ob, .05, .7 * ab], [Ob, .2, ab]), Hb.moveTo([wb, pb, Zb], [Xb, Xb, Xb])
          } else {
            this.ringAngle += 2.39996;
            const bb = Math.cos(this.ringAngle),
              ub = Math.sin(this.ringAngle);
            Hb.setDirections([bb, .05, ub], [bb, .1, ub]), Hb.moveTo([Ub + 2 * bb, Lb + .5, Yb + 2 * ub], [0, .5, 0])
          }
          Hb.emit(Ob)
        }
      }
      createStream(bb, ub, hb) {
        const {
          r: Bb
        } = hb, Ob = Math.max(ub.life[0], Bb / 25), Gb = ub === Oo ? [.9 * Ob, Ob] : ub.life, Ub = cp(Bb), Lb = ub === Oo ? 1 : Ub.puffScale, Yb = {
          texture: Dp,
          LH: ub.count + 4,
          minLifeTime: Gb[0] / Rp,
          maxLifeTime: Gb[1] / Rp,
          minSize: ub.size[0] * Lb,
          maxSize: ub.size[1] * Lb,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, ub.gravity * Rp * Rp, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: ub.from[0],
            maxColor: ub.from[1]
          }, {
            timeFraction: .6,
            minColor: Lo(ub.from[0], ub.to[0]),
            maxColor: Lo(ub.from[1], ub.to[1])
          }, {
            timeFraction: 1,
            minColor: ub.to[0],
            maxColor: ub.to[1]
          }],
          blendMode: ub.blend
        };
        if (ub === ho) {
          const bb = Ub.capHeight / ((Gb[0] + Gb[1]) / 2);
          Yb.minEmitPower = .9 * bb * Rp, Yb.maxEmitPower = 1.05 * bb * Rp, Yb.dir1 = [-.1, 1, -.1], Yb.dir2 = [.1, 1, .1]
        } else ub === Bo ? (Yb.minEmitPower = 1.2, Yb.maxEmitPower = 2, Yb.dir1 = [-1, .05, -1], Yb.dir2 = [1, .2, 1]) : (Yb.minEmitPower = 39.583333333333336, Yb.maxEmitPower = 41.66666666666667, Yb.dir1 = [1, 0, 0], Yb.dir2 = [1, 0, 0]);
        return bb.createParticles(Yb, {
          pos: hb.at
        })
      }
      disposeCloud(bb) {
        for (const hb of this.streams) {
          var ub;
          null === (ub = hb.particles) || void 0 === ub || ub.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(bb)
      }
    }

    function Lo(bb, ub) {
      return [(bb[0] + ub[0]) / 2, (bb[1] + ub[1]) / 2, (bb[2] + ub[2]) / 2, .75 * bb[3]]
    }

    function Yo(bb, ub, hb, Bb, Ob) {
      try {
        bb.playSound(ub, hb, Bb, Ob)
      } catch (Gb) {
        console.error(Gb)
      }
    }
    const So = {
        LH: 720,
        perS: 100
      },
      ao = {
        LH: 320,
        perS: 44
      };
    class Ho {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(bb, ub) {
        this.zone = {
          centre: [...bb.centre],
          r: bb.r,
          band: bb.band ? [bb.band[0], bb.band[1]] : void 0
        }, this.endsAt = ub
      }
      stop() {
        this.zone = null
      }
      sK(bb, ub) {
        const {
          baf2FalloutMs: hb,
          baf2FalloutAt: Bb,
          baf2FalloutR: Ob,
          baf2FalloutY: Gb
        } = bb;
        hb > 0 && Bb && void 0 !== Ob ? this.start({
          centre: Bb,
          r: Ob,
          band: Gb
        }, ub + hb) : this.stop()
      }
      perS(bb, ub, hb) {
        const Bb = this.zone;
        if (!Bb) return 0;
        const Ob = this.endsAt - bb;
        return Ob <= 0 ? (this.zone = null, 0) : Bb.band && (ub[1] < Bb.band[0] || ub[1] > Bb.band[1]) || Math.hypot(ub[0] - Bb.centre[0], ub[2] - Bb.centre[2]) > Bb.r ? 0 : hb.perS * Math.min(1, Ob / 5e3)
      }
    }
    const wo = [5, 7],
      Zo = [24, 8, 24],
      Xo = .5,
      po = 1 / .6,
      oo = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class Ao {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, vL.isMobile)();
        this.state = new Ho, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(bb) {
          return bb ? ao : So
        }(bb)
      }
      startFallout(bb, ub) {
        this.state.start(bb, ub)
      }
      stopFallout() {
        this.state.stop()
      }
      sK(bb) {
        this.state.sK(bb, performance.now())
      }
      onAfterRender(bb, ub) {
        var hb;
        const Bb = performance.now(),
          Ob = 0 === this.lastMs ? 0 : Math.min(Bb - this.lastMs, 250) / 1e3;
        this.lastMs = Bb;
        const Gb = this.state.perS(Bb, ub, this.tier);
        if (Gb <= 0 || !bb.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Gb * Ob, Gb / 4);
        const Ub = Math.floor(this.budget);
        if (Ub < 1) return;
        this.budget -= Ub;
        const Lb = this.at;
        Lb[0] = ub[0], Lb[1] = ub[1] + 12, Lb[2] = ub[2];
        const Yb = null !== (hb = this.systems) && void 0 !== hb ? hb : this.create(bb, Lb),
          Sb = this.amounts;
        Sb[0] = 0, Sb[1] = 0;
        for (let ab = 0; ab < Ub; ab++) Sb[Math.random() < .3 ? 1 : 0]++;
        for (let ab = 0; ab < Yb.length; ab++) Sb[ab] > 0 && (Yb[ab].moveTo(Lb, Zo), Yb[ab].emit(Sb[ab]))
      }
      dispose() {
        for (const ub of null !== (bb = this.systems) && void 0 !== bb ? bb : []) {
          var bb;
          ub.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(bb, ub) {
        return this.systems = oo.map((hb => {
          let {
            rgba: [Bb, Ob, Gb, Ub],
            share: Lb
          } = hb;
          const Yb = {
            texture: "square_particle",
            LH: Math.ceil(this.tier.LH * Lb),
            minLifeTime: wo[0] / po,
            maxLifeTime: wo[1] / po,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Xo, -1, Xo],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Bb, Ob, Gb, 0]
            }, {
              timeFraction: .15,
              minColor: [Bb, Ob, Gb, Ub]
            }, {
              timeFraction: .8,
              minColor: [Bb, Ob, Gb, Ub]
            }, {
              timeFraction: 1,
              minColor: [Bb, Ob, Gb, 0]
            }],
            blendMode: JL.f.Standard
          };
          return bb.createParticles(Yb, {
            pos: ub,
            half: Zo
          })
        })), this.systems
      }
    }
    const Ko = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Wo(bb) {
      const ub = /\|rot(\d)/.exec(bb);
      return Ko[ub ? Number(ub[1]) : 1]
    }
    var Co = hb(580),
      ro = hb(38095);
    const jo = new Set(Co.k);

    function no(bb) {
      if (-2 !== bb.count) return null;
      const ub = Eb(bb.item);
      return null !== ub && jo.has(ub) ? ub : null
    }

    function Do(bb) {
      const {
        width: ub,
        height: hb
      } = (0, ro.e)(bb).hitBoxDimensions;
      return .55 / Math.max(ub, hb)
    }

    function xo(bb, ub, hb) {
      if (!hb) return !1;
      const Bb = bb[0] + .5 - ub[0],
        Ob = bb[1] + .5 - ub[1],
        Gb = bb[2] + .5 - ub[2];
      return Bb * Bb + Ob * Ob + Gb * Gb <= 576
    }

    function zo(bb, ub) {
      return Math.atan2(bb[0], bb[2]) + Math.PI + ub
    }

    function go(bb, ub) {
      const hb = 2 * Math.PI;
      return (bb + hb * ub / 1e4) % hb
    }
    class io {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = bb, this.now = ub, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = bb.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(bb, ub) {
        if (0 === this.farms.size) return;
        const hb = this.now(),
          Bb = Number.isNaN(this.frameMs) ? 0 : Math.min(hb - this.frameMs, 100);
        this.frameMs = hb, hb - this.checkedMs >= 1e3 && (this.checkedMs = hb, this.check(bb, ub));
        for (const Ob of this.farms.values()) Ob.shown && Ob.running && null !== Ob.model && Bb > 0 && (Ob.spin = go(Ob.spin, Bb), Ob.model.setPose(Ob.feet, zo(Ob.front, Ob.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const bb of this.farms.values()) this.drop(bb);
        this.farms.clear()
      }
      sync() {
        const bb = new Set;
        for (const ub of this.labels.list()) {
          const hb = no(ub);
          if (null === hb) continue;
          bb.add(ub.key);
          const Bb = this.farms.get(ub.key);
          if ((null === Bb || void 0 === Bb ? void 0 : Bb.mob) === hb) continue;
          Bb && this.drop(Bb);
          const [Ob, Gb, Ub] = ub.pos;
          this.farms.set(ub.key, {
            pos: ub.pos,
            feet: [Ob + .5, Gb + 1, Ub + .5],
            mob: hb,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [ub, hb] of this.farms) bb.has(ub) || (this.drop(hb), this.farms.delete(ub));
        this.checkedMs = -1 / 0
      }
      check(bb, ub) {
        for (const hb of this.farms.values()) {
          const [Bb, Ob, Gb] = hb.pos, Ub = iX(bb, hb.pos);
          null !== Ub && ih(Ub) === eb && xo(hb.pos, ub, "Air" === iX(bb, [Bb, Ob + 1, Gb])) ? (hb.running = Ub.endsWith("|Running"), hb.front = Wo(Ub), null === hb.model && (hb.model = bb.createMobModel(hb.mob, Do(hb.mob)), null === hb.model) || (hb.model.setPose(hb.feet, zo(hb.front, hb.spin)), hb.shown || (hb.model.setVisible(!0), hb.shown = !0))) : (hb.shown && null !== hb.model && hb.model.setVisible(!1), hb.shown = !1)
        }
      }
      drop(bb) {
        var ub;
        null === (ub = bb.model) || void 0 === ub || ub.dispose(), bb.model = null, bb.shown = !1
      }
    }
    class vo {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(bb) {
        var ub;
        this.island = bb.baf2ColIsland, this.islandSite = (ub = bb.baf2ColSite) && 8 === ub.length ? {
          spawnXZ: [ub[0], ub[1]],
          coreXZ: [ub[2], ub[3]],
          minXZ: [ub[4], ub[5]],
          maxXZ: [ub[6], ub[7]]
        } : null, this.views = bb.baf2ColList.map((bb => ({
          entry: UO(bb)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(bb) {
        this.status = bb, this.emit()
      }
      onOpen(bb) {
        this.openHeld = bb
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
        return this.views.map((bb => bb.entry))
      }
      entryAtRoot(bb) {
        var ub;
        return null === (ub = this.views.find((ub => {
          let {
            entry: hb
          } = ub;
          return hb.focus[0] === bb[0] && hb.focus[1] === bb[1] + 1 && hb.focus[2] === bb[2]
        }))) || void 0 === ub ? void 0 : ub.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(bb, ub) {
        return MY(this.entries(), bb, ub)
      }
      lookSource() {
        return {
          handles: bb => wB(bb) >= 0 || ZB(bb),
          line: (bb, ub) => this.lookLine(bb, ub),
          version: () => this.beamsVersion
        }
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const bb of this.listeners) bb()
      }
    }
    const to = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((bb => bb / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((bb => [bb, bb + 1, bb + 2, bb, bb + 2, bb + 3]))
    };

    function Jo(bb, ub, hb, Bb, Ob, Gb, Ub) {
      let Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Yb = Math.cos(Lb),
        Sb = Math.sin(Lb),
        ab = bb.positions.length / 3,
        {
          positions: Hb,
          indices: wb
        } = to;
      for (let Zb = 0; Zb < Hb.length; Zb += 3) {
        const Lb = Hb[Zb] * Ob,
          ab = Hb[Zb + 2] * Ub;
        bb.positions.push(ub + Lb * Yb + ab * Sb, hb + Hb[Zb + 1] * Gb, Bb - Lb * Sb + ab * Yb)
      }
      for (const Zb of wb) bb.indices.push(ab + Zb)
    }

    function eo(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return ub < 1 ? {
        rgb: bb,
        alpha: ub
      } : {
        rgb: bb,
        alpha: 1,
        opaque: !0
      }
    }
    class No {
      constructor(bb, ub) {
        this.style = bb, this.perSource = ub, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(bb) {
        this.sources = bb, 0 === bb.length && (this.budget = 0)
      }
      gH(bb, ub, hb) {
        const Bb = this.sources.length;
        if (0 !== Bb) {
          var Ob, Gb;
          this.budget = Math.min(this.budget + (Ob = Bb, Gb = this.perSource, Math.min(Ob * Gb, RY) * ub), 2);
          for (let ub = 0; ub < Bb && this.budget >= 1; ub++) {
            const ub = this.sources[this.cursor % Bb];
            this.cursor = (this.cursor + 1) % Bb;
            if (!(Math.max(Math.abs(ub.x - hb[0]), Math.abs(ub.y - hb[1]), Math.abs(ub.z - hb[2])) > 32)) return this.puff(bb, ub), void this.budget--
          }
        }
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.dispose(), this.particles = null, this.sources = []
      }
      puff(bb, ub) {
        let {
          x: hb,
          y: Bb,
          z: Ob,
          h: Gb,
          faces: Ub
        } = ub;
        const Lb = function(bb, ub, hb, Bb, Ob) {
            const [Gb, Ub, Lb] = Ob[Math.floor(Math.random() * Ob.length)], Yb = .04, Sb = (bb, ub, hb) => bb > 0 ? ub + hb + Yb : bb < 0 ? ub - Yb : ub + .1, ab = (bb, ub, hb) => bb > 0 ? ub + hb + Yb : bb < 0 ? ub - Yb : ub + hb - .1, Hb = [Sb(Gb, bb, 1), Sb(Ub, ub, Bb), Sb(Lb, hb, 1)], wb = [ab(Gb, bb, 1), ab(Ub, ub, Bb), ab(Lb, hb, 1)];
            return {
              pos: [(Hb[0] + wb[0]) / 2, (Hb[1] + wb[1]) / 2, (Hb[2] + wb[2]) / 2],
              half: [(wb[0] - Hb[0]) / 2, (wb[1] - Hb[1]) / 2, (wb[2] - Hb[2]) / 2],
              out: [Gb, Ub, Lb]
            }
          }(hb, Bb, Ob, Gb, Ub),
          {
            style: Yb
          } = this,
          Sb = this.particles ??= bb.createParticles(zp(Yb, Math.ceil(Yb.count * RY * Yb.life[1]) + 4), Lb);
        Sb.moveTo(Lb.pos, Lb.half);
        const [ab, Hb, wb] = Lb.out, Zb = Yb.spread;
        Sb.setDirections([ab - Zb, .6 + Hb, wb - Zb], [ab + Zb, 1 + Hb, wb + Zb]), Sb.emit(Yb.count)
      }
    }
    const so = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Mo {
      constructor() {
        this.green = new No(uS.green, cY), this.pink = new No(uS.pink, QY), this.colliders = [], this.lastMs = 0
      }
      setSources(bb) {
        this.colliders = bb;
        const ub = [],
          hb = [];
        for (const Bb of bb) {
          const [bb, Ob, Gb] = Bb.focus;
          ub.push({
            x: bb,
            y: Ob - 1,
            z: Gb,
            h: 2,
            faces: so
          });
          for (let ub = 0; ub < 4; ub++) {
            if (!Bb.live[ub]) continue;
            const [bb, Ob, Gb] = oB(Bb.focus, ub, UB.LASER_D), [Ub, , Lb] = pB[ub], Yb = so.filter((bb => bb[0] !== Ub || bb[2] !== Lb || 0 !== bb[1]));
            hb.push({
              x: bb,
              y: Ob,
              z: Gb,
              h: 1,
              faces: Yb
            })
          }
        }
        this.green.setSources(ub), this.pink.setSources(hb)
      }
      onAfterRender(bb) {
        const ub = performance.now(),
          hb = 0 === this.lastMs ? 0 : Math.min(ub - this.lastMs, 250) / 1e3;
        if (this.lastMs = ub, 0 === this.colliders.length || !bb.particlesEnabled()) return;
        const Bb = bb.getCameraPosition();
        this.green.gH(bb, hb, Bb), this.pink.gH(bb, hb, Bb)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const mo = 1.04,
      Io = eo([1, 120 / 255, 220 / 255]),
      Po = eo([1, .25, .25], .35);
    class qo {
      constructor(bb) {
        this.store = bb, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Mo
      }
      onAfterRender(bb) {
        this.store.version() !== this.builtVersion && this.rebuild(bb);
        const ub = performance.now();
        for (const hb of this.beams) {
          const Bb = 1 + .35 * Math.sin(ub / 700 * Math.PI * 2 + hb.phase);
          bb.setGameMesh(hb.mesh, {
            scale: [hb.alongX ? 1 : Bb, Bb, hb.alongX ? Bb : 1]
          })
        }
        this.glow.onAfterRender(bb)
      }
      dispose(bb) {
        this.clear(bb), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(bb) {
        this.clear(bb), this.builtVersion = this.store.version();
        const ub = [];
        for (const {
            entry: hb
          }
          of this.store.colliders()) hb.on && hb.live.some(Boolean) && (this.addBeams(bb, hb), ub.push(hb)), hb.blockers.length > 0 && this.addMarkers(bb, hb);
        this.glow.setSources(ub)
      }
      addBeams(bb, ub) {
        const [hb, Bb, Ob] = ub.focus, Gb = TY - .25, Ub = (.25 + TY) / 2;
        for (let Lb = 0; Lb < 4; Lb++) {
          if (!ub.live[Lb]) continue;
          const [Yb, , Sb] = pB[Lb], ab = 0 !== Yb, Hb = {
            positions: [],
            indices: []
          };
          Jo(Hb, 0, 0, 0, ab ? Gb : .2, .2, ab ? .2 : Gb);
          const wb = [hb + .5 + Yb * Ub, Bb + .5, Ob + .5 + Sb * Ub],
            Zb = bb.createGameMesh(Hb, Io, wb);
          this.meshes.push(Zb), this.beams.push({
            mesh: Zb,
            alongX: ab,
            phase: Lb * Math.PI / 2
          })
        }
      }
      addMarkers(bb, ub) {
        const hb = ub.blockers[0],
          Bb = {
            positions: [],
            indices: []
          };
        for (const [Ob, Gb, Ub] of ub.blockers) Jo(Bb, Ob - hb[0] + .5, Gb - hb[1] + .5, Ub - hb[2] + .5, mo, mo, mo);
        this.meshes.push(bb.createGameMesh(Bb, Po, hb))
      }
      clear(bb) {
        for (const ub of this.meshes) bb.disposeGameMesh(ub);
        this.meshes = [], this.beams = []
      }
    }
    const Eo = [.56, .83, 1],
      yo = [1, .73, .08],
      Vo = [1, .25, .25],
      Fo = [.85, .85, .85],
      fo = [.3, .45, .6];

    function ko(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Ub = Ob / 2,
        Lb = Ob + Gb;
      for (const Yb of [-Ub, Ub])
        for (const Ob of [-Ub, Ub]) Jo(bb, ub, hb + Yb, Bb + Ob, Lb, Gb, Gb), Jo(bb, ub + Yb, hb, Bb + Ob, Gb, Lb, Gb), Jo(bb, ub + Yb, hb + Ob, Bb, Gb, Gb, Lb)
    }

    function To(bb) {
      return ub => bb.isBlockInLoadedChunk(ub[0], ub[1], ub[2]) && 0 === bb.getBlockId(ub[0], ub[1], ub[2])
    }

    function co(bb) {
      return bb.map((bb => {
        let {
          free: ub,
          blocked: hb,
          gaps: Bb,
          supports: Ob
        } = bb;
        return `${ub.join(";")}|${hb.join(";")}|${Bb.join(";")}|${Ob.join(";")}`
      })).join("/")
    }

    function Qo(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Gb = ub[0],
        Ub = {
          positions: [],
          indices: []
        };
      for (const [Lb, Yb, Sb] of ub) ko(Ub, Lb - Gb[0] + .5, Yb - Gb[1] + .5, Sb - Gb[2] + .5, Bb, Ob);
      return bb.createGameMesh(Ub, hb, Gb)
    }
    class Ro {
      constructor(bb) {
        this.store = bb, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(bb, ub, hb) {
        var Bb;
        const Ob = null === (Bb = bb.cub(ub)) || void 0 === Bb ? void 0 : Bb.name;
        if (Ob !== YB && Ob !== LB) return void("" !== this.shownKey && this.show(bb, "", []));
        const Gb = performance.now();
        if (Gb - this.lastCheckMs >= 200 && (this.lastCheckMs = Gb, Ob === YB ? this.check(bb, hb) : this.preview(bb, hb)), this.pulses.length > 0) {
          const ub = 1 + .12 * Math.sin(Gb / 1e3 * 1.25 * Math.PI * 2),
            hb = [ub, ub, ub];
          for (const Bb of this.pulses) bb.setGameMesh(Bb, {
            scale: hb
          })
        }
      }
      dispose(bb) {
        this.clear(bb), this.shownKey = ""
      }
      check(bb, ub) {
        const hb = To(bb),
          Bb = [];
        for (const {
            entry: Gb
          }
          of this.store.colliders()) {
          Gb.focus.every(((bb, hb) => Math.abs(bb + .5 - ub[hb]) <= UB.GHOST_REACH)) && Bb.push(kY(Gb, hb))
        }
        const Ob = co(Bb);
        Ob !== this.shownKey && this.show(bb, Ob, Bb)
      }
      preview(bb, ub) {
        const hb = bb.getTargetedBlock(),
          Bb = hb ? [hb.gp[0], hb.gp[1], hb.gp[2]] : null,
          Ob = null !== Bb && Bb.every(((bb, hb) => Math.abs(bb + .5 - ub[hb]) <= 8)),
          Gb = this.store.site(),
          Ub = Ob && Gb ? function(bb, ub, hb) {
            const Bb = XB(bb);
            if (!Bb.every(ub)) return null;
            const Ob = KB(bb, hb);
            return {
              column: Bb,
              spots: kY({
                focus: Bb[1],
                lasers: [!1, !1, !1, !1],
                open: Ob,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, ub),
              fits: Ob.filter(Boolean).length >= UB.MIN_SPOTS
            }
          }(Bb, To(bb), Gb) : null,
          Lb = Ub ? [Ub.spots] : [],
          Yb = Ub ? `preview ${Bb.join(",")}|${Ub.fits}|${co(Lb)}` : "";
        var Sb, ab;
        Yb !== this.shownKey && this.show(bb, Yb, Lb, null !== (Sb = null === Ub || void 0 === Ub ? void 0 : Ub.column) && void 0 !== Sb ? Sb : [], null === (ab = null === Ub || void 0 === Ub ? void 0 : Ub.fits) || void 0 === ab || ab)
      }
      show(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Ob = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(bb), this.shownKey = ub, Bb.length > 0 && this.meshes.push(Qo(bb, Bb, eo(Ob ? Fo : Vo)));
        for (const {
            free: Gb,
            blocked: Ub,
            gaps: Lb,
            supports: Yb
          }
          of hb) {
          for (const [ub, hb, Bb] of Gb) {
            const Ob = {
              positions: [],
              indices: []
            };
            ko(Ob, 0, 0, 0);
            const Gb = bb.createGameMesh(Ob, eo(Eo), [ub + .5, hb + .5, Bb + .5]);
            this.meshes.push(Gb), this.pulses.push(Gb)
          }
          Ub.length > 0 && this.meshes.push(Qo(bb, Ub, eo(yo))), Lb.length > 0 && this.meshes.push(Qo(bb, Lb, eo(Vo), 1.06, .07)), Yb.length > 0 && this.meshes.push(Qo(bb, Yb, eo(fo)))
        }
      }
      clear(bb) {
        for (const ub of this.meshes) bb.disposeGameMesh(ub);
        this.meshes = [], this.pulses = []
      }
    }
    class bA {
      constructor() {
        this.stored = new Map, this.MS = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(bb) {
        if (!bb.baf2TermOpen) return !1;
        bb.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [ub, hb] of bb.baf2TermItems) hb > 0 ? this.stored.set(ub, hb) : this.stored.delete(ub);
        if (bb.baf2TermHeld && (this.MS = new Map(bb.baf2TermHeld)), this.pending = this.pending.filter((ub => ub.seq > bb.baf2TermAcked)), this.silos = bb.baf2TermSilos, this.readOnly = bb.baf2TermReadOnly, this.pocket = !0 === bb.baf2TermPocket, bb.baf2TermReset) this.resort();
        else {
          const bb = new Set(this.order);
          for (const ub of this.stored.keys()) bb.has(ub) || this.order.push(ub)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((bb, ub) => this.amount(ub) - this.amount(bb) || bb.localeCompare(ub))), this.changed()
      }
      take(bb, ub) {
        const hb = Lu(bb, this.amount(ub));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: ub,
          amount: hb,
          put: !1
        }), this.recents = [ub, ...this.recents.filter((bb => bb !== ub))].slice(0, 6), this.changed(), hu(this.seq, bb, ub)
      }
      put(bb, ub) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: ub,
          amount: Lu(bb, this.heldAmount(ub)),
          put: !0
        }), this.changed(), Bu(this.seq, bb, ub)
      }
      putAll() {
        this.seq++;
        for (const bb of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: bb,
          amount: this.heldAmount(bb),
          put: !0
        });
        return this.changed(), Ou(this.seq)
      }
      amount(bb) {
        var ub;
        let hb = null !== (ub = this.stored.get(bb)) && void 0 !== ub ? ub : 0;
        for (const Bb of this.pending) Bb.item === bb && (hb += Bb.put ? Bb.amount : -Bb.amount);
        return Math.max(0, hb)
      }
      heldAmount(bb) {
        var ub;
        let hb = null !== (ub = this.MS.get(bb)) && void 0 !== ub ? ub : 0;
        for (const Bb of this.pending) Bb.put && Bb.item === bb && (hb -= Bb.amount);
        return Math.max(0, hb)
      }
      heldItems() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((ub => ub === bb || this.heldAmount(ub) > 0))
      }
      items() {
        return this.order.filter((bb => this.amount(bb) > 0))
      }
      recent() {
        return this.recents.filter((bb => this.amount(bb) > 0))
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
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      changed() {
        this.version++;
        for (const bb of this.listeners) bb()
      }
    }
    var uA = hb(38048);
    const hA = {
      isBlock: bb => void 0 !== ib.i[bb],
      harvestType: bb => {
        var ub;
        return null === (ub = ib.i[bb]) || void 0 === ub ? void 0 : ub.harvestType
      },
      harvestLevel: bb => {
        var ub;
        return null === (ub = ib.i[bb]) || void 0 === ub ? void 0 : ub.harvestLevel
      },
      dropsNothing: bb => {
        var ub;
        return null === (null === (ub = ib.i[bb]) || void 0 === ub ? void 0 : ub.drops)
      },
      displayName: bb => {
        var ub;
        return null === (ub = QU.j[bb]) || void 0 === ub ? void 0 : ub.displayName
      },
      description: bb => {
        var ub;
        return null === (ub = QU.j[bb]) || void 0 === ub ? void 0 : ub.description
      },
      harvests: bb => {
        var ub;
        return null === (ub = QU.j[bb]) || void 0 === ub ? void 0 : ub.harvests
      },
      level: bb => {
        var ub;
        return null === (ub = QU.j[bb]) || void 0 === ub ? void 0 : ub.level
      }
    };

    function BA(bb, ub, hb) {
      return function(bb, ub, hb, Bb) {
        var Ob, Gb;
        const Ub = ub.split("|")[0],
          Lb = bb.isBlock(ub) ? ub : bb.isBlock(Ub) ? Ub : null;
        if (null === Lb || "rock" !== bb.harvestType(Lb) || bb.dropsNothing(Lb) && !MB.has(Ub)) return null;
        const Yb = hb && "rock" === bb.harvests(hb) ? null !== (Ob = bb.level(hb)) && void 0 !== Ob ? Ob : 0 : null,
          Sb = null !== (Gb = null !== Bb && void 0 !== Bb ? Bb : bb.harvestLevel(Lb)) && void 0 !== Gb ? Gb : 0;
        return (null !== Yb ? Sb <= Yb : 0 === bb.harvestLevel(Lb)) ? null : DB(bb, Sb)
      }(hA, bb, ub, hb)
    }

    function OA(bb, ub) {
      return function(bb, ub, hb) {
        if (ub === nB[0]) return [(0, Jb.Qd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Jb.I.whiteUiText)];
        const Bb = hb.split("|")[0],
          Ob = bb.isBlock(Bb) ? bb.displayName(Bb) : void 0,
          Gb = "string" === typeof Ob ? Ob : Ob && "translationKey" in Ob ? `$t(${Ob.translationKey})` : Bb;
        return [(0, Jb.Qd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Gb
          }
        }, Jb.I.whiteUiText), (0, Jb.Qd)({
          translationKey: `item:${(0,Jb.oe)(ub)}`
        }, Jb.I.yellowUiText)]
      }(hA, bb, ub)
    }
    const GA = "buildAFactory2Game:";
    const UA = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function LA(bb) {
      return bb.endsWith(" Ore")
    }
    const YA = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      SA = [],
      aA = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: YA,
        plan: null,
        atomic: SA
      },
      HA = "buildAFactory2Game:",
      wA = new Set(["Splitter", "Sorting Gate"]),
      ZA = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class XA {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = bb, this.planAt = ub, this.tierOf = hb, this.bS = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.MS = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = aA, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(bb, ub, hb) {
        var Bb, Ob, Gb;
        let Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Lb = null !== (Bb = null === (Ob = bb.cub(ub)) || void 0 === Ob ? void 0 : Ob.name) && void 0 !== Bb ? Bb : null,
          Yb = bb.isPlayerCrouching(ub),
          Sb = 0 === hb ? null : this.resolve(bb, hb),
          ab = null !== Sb && null !== Ub && wA.has(Sb.rootName) && function(bb, ub) {
            return ZA.some((hb => {
              let [Bb, Ob] = hb;
              const Gb = bb.getBlockId(ub[0] + Bb, ub[1], ub[2] + Ob);
              return 0 !== Gb && "Express Belt" === bb.getMetaInfo(Gb).rootName
            }))
          }(bb, Ub),
          Hb = this.updatePlan(0 === hb ? null : Ub),
          wb = this.tierOf(),
          Zb = null === Ub ? null : (0, uA.e)(hb),
          Xb = null !== Zb && null !== Ub && (0, uA.h)(function(bb) {
            return (ub, hb, Bb) => bb.getBlockId(ub, hb, Bb)
          }(bb), Ub[0], Ub[1], Ub[2], Zb),
          pb = this.readAfloat(bb, hb, Ub);
        if (hb === this.bS && Xb === this.missesMaker && pb === this.afloat && Lb === this.MS && Yb === this.crouching && ab === this.express && wb === this.tier && !Hb && (!this.targetsLive || !this.liveMoved(Ub))) return;
        this.bS = hb, this.missesMaker = Xb, this.afloat = pb, this.MS = Lb, this.crouching = Yb, this.express = ab;
        const ob = ab && Sb ? function(bb) {
          if (null === bb.info) return null;
          return bb.express ??= {
            ...bb.info,
            detail: `${HA}lookKeepsUpExpress`,
            detailItem: null
          }, bb.express
        }(Sb) : null !== Sb && Xb && null !== Zb ? this.besideMaker(Sb, hb, Zb) : null !== Sb && pb ? this.hanging(Sb) : null !== (Gb = null === Sb || void 0 === Sb ? void 0 : Sb.info) && void 0 !== Gb ? Gb : null;
        this.tier = wb;
        const Ab = Sb && ob ? function(bb, ub) {
          var hb, Bb;
          const Ob = ib.i[bb];
          if (!bb.endsWith(" Ore") || "rock" !== (null === Ob || void 0 === Ob ? void 0 : Ob.harvestType) || 0 === Ob.harvestLevel) return null;
          const Gb = null !== (hb = Ob.harvestLevel) && void 0 !== hb ? hb : 0,
            Ub = ub ? QU.j[ub] : void 0;
          if ("rock" === (null === Ub || void 0 === Ub ? void 0 : Ub.harvests) && (null !== (Bb = Ub.level) && void 0 !== Bb ? Bb : 0) >= Gb) return null;
          const Lb = (Yb = Gb, DB(hA, Yb));
          var Yb;
          if (null === Lb) return null;
          const Sb = hG(Lb),
            ab = /^[AEIOU]/.test(Lb) ? "An" : "";
          if ("rock" === (null === Ub || void 0 === Ub ? void 0 : Ub.harvests) && ub) return {
            key: `${HA}lookToolTooWeak${ab}`,
            MS: hG(ub),
            needed: Sb
          };
          return {
            key: Lb === nB[0] ? `${HA}lookNeedAnyPickaxe` : `${HA}lookNeedPickaxe${ab}`,
            MS: null,
            needed: Sb
          }
        }(Sb.rootName, Lb) : null;
        this.targetsLive = !0 === (null === Sb || void 0 === Sb ? void 0 : Sb.live) && null !== Ub;
        let lb = null;
        this.targetsLive && Sb && Ub && this.live && (this.livePos[0] = Ub[0], this.livePos[1] = Ub[1], this.livePos[2] = Ub[2], this.liveVersion = this.live.version(), lb = this.live.line(Sb.rootName, Ub));
        const Kb = null === ob ? YA : function(bb, ub, hb) {
            const Bb = function(bb, ub, hb) {
              const Bb = th(bb);
              if (null === Bb) return null;
              const Ob = `${GA}lookPortMode_${Bb}`,
                Gb = PB(ub);
              if (Gb && hb) return {
                mode: null,
                detail: Ob,
                next: `${GA}lookWrenchPickUp`,
                nextState: null
              };
              const Ub = Jh(bb),
                Lb = null === Ub ? null : th(Ub);
              return null === Lb ? {
                mode: null,
                detail: Ob,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Ob,
                next: Gb ? `${GA}lookWrenchNext` : `${GA}lookPortWrench`,
                nextState: `${GA}lookPortState_${Lb}`
              }
            }(bb, ub, hb);
            if (null !== Bb) return Bb;
            const Ob = hO(bb, ub, hb);
            return null === Ob.mode && null === Ob.next ? YA : Ob
          }(bb.blockIdToBlockName(hb), Lb, Yb),
          Wb = this.plan,
          Cb = Sb && ob ? this.rowsOf(Sb.rootName, wb) : SA,
          db = this.snapshot;
        if (!(null === ob ? !db.visible : db.visible && ob === db.info && (rb = Ab, jb = db.tool, rb === jb || null !== rb && null !== jb && rb.key === jb.key && rb.MS === jb.MS && rb.needed === jb.needed) && function(bb, ub) {
            return bb === ub || null !== bb && null !== ub && bb.key === ub.key && JSON.stringify([bb.params, bb.keys]) === JSON.stringify([ub.params, ub.keys])
          }(lb, db.live) && function(bb, ub) {
            return bb.mode === ub.mode && bb.detail === ub.detail && bb.next === ub.next && bb.nextState === ub.nextState
          }(Kb, db.wrench) && qX(Wb, db.plan) && Cb === db.atomic)) {
          var rb, jb;
          this.snapshot = null === ob ? {
            ...db,
            visible: !1
          } : {
            info: ob,
            visible: !0,
            tool: Ab,
            live: lb,
            wrench: Kb,
            plan: Wb,
            atomic: Cb
          };
          for (const bb of this.listeners) bb()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = aA, this.bS = 0, this.MS = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(bb, ub, hb) {
        if (null === hb || 0 === ub || !Lb() || !LA(this.resolve(bb, ub).rootName)) return !1;
        const Bb = `${hb[0]},${hb[1]},${hb[2]},${ub}`,
          Ob = performance.now();
        return Bb === this.afloatKey && Ob - this.afloatAt < pA ? this.afloat : (this.afloatKey = Bb, this.afloatAt = Ob, function(bb, ub) {
          for (const [hb, Bb, Ob] of UA) {
            const Gb = ub(bb[0] + hb, bb[1] + Bb, bb[2] + Ob);
            if (void 0 === Gb || null !== Gb && !LA(Gb)) return !1
          }
          return !0
        }(hb, ((ub, hb, Bb) => function(bb, ub, hb, Bb) {
          if (!bb.isBlockInLoadedChunk(ub, hb, Bb)) return;
          const Ob = bb.getBlockId(ub, hb, Bb);
          return 0 === Ob ? null : bb.getMetaInfo(Ob).rootName
        }(bb, ub, hb, Bb))))
      }
      liveMoved(bb) {
        var ub;
        const {
          livePos: hb
        } = this;
        return null === bb || bb[0] !== hb[0] || bb[1] !== hb[1] || bb[2] !== hb[2] || (null === (ub = this.live) || void 0 === ub ? void 0 : ub.version()) !== this.liveVersion
      }
      updatePlan(bb) {
        const ub = null === bb ? "" : bb.join(","),
          hb = performance.now();
        if (ub === this.planPos && hb - this.planMs < 250) return !1;
        this.planPos = ub, this.planMs = hb;
        const Bb = null === bb ? null : this.planAt([bb[0], bb[1], bb[2]]),
          Ob = !qX(Bb, this.plan);
        return this.plan = Bb, Ob
      }
      besideMaker(bb, ub, hb) {
        let {
          info: Bb
        } = bb;
        if (null === Bb) return null;
        let Ob = this.besideMakerById.get(ub);
        if (void 0 === Ob) {
          const bb = "cryo" === hb ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Ob = {
            ...Bb,
            detail: `${HA}${bb}`,
            detailItem: null
          }, this.besideMakerById.set(ub, Ob)
        }
        return Ob
      }
      hanging(bb) {
        let {
          info: ub,
          rootName: hb
        } = bb;
        if (null === ub) return null;
        let Bb = this.afloatByRoot.get(hb);
        return void 0 === Bb && (Bb = {
          ...ub,
          detail: `${HA}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(hb, Bb)), Bb
      }
      rowsOf(bb, ub) {
        if (null === ub) return SA;
        const hb = `${bb}|${ub}`;
        let Bb = this.rowsByKey.get(hb);
        if (void 0 === Bb) {
          const Ob = function(bb, ub) {
            var hb;
            if (!(bb in Ju)) return [];
            const Bb = null !== (hb = eu[bb]) && void 0 !== hb ? hb : [],
              Ob = new Map;
            for (const Ub of PG(bb, ub))
              if ((Bb.includes(Ub) || IG(Ub.output) && MG(Ub.output) > Tb(bb)) && MG(Ub.output) <= ub) {
                var Gb;
                const bb = null !== (Gb = Ob.get(Ub.output)) && void 0 !== Gb ? Gb : [];
                bb.push(Ub.input), Ob.set(Ub.output, bb)
              } return EG([...Ob], (bb => {
              let [ub] = bb;
              return -MG(ub)
            })).map((bb => {
              let [ub, hb] = bb;
              return {
                output: ub,
                inputs: hb
              }
            }))
          }(bb, ub);
          Bb = Ob.length > 0 ? Ob : SA, this.rowsByKey.set(hb, Bb)
        }
        return Bb
      }
      resolve(bb, ub) {
        const {
          rootId: hb,
          rootName: Bb
        } = bb.getMetaInfo(ub), Ob = (0, Xh.n)(Bb) ? ub : hb;
        let Gb = this.byRootId.get(Ob);
        const Ub = Lb();
        if (void 0 === Gb || Gb.nuclear !== Ub) {
          var Yb;
          const hb = function(bb) {
            return NB(hA, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb)
          }(Bb, bb.blockIdToBlockName(ub));
          Gb = {
            info: hb,
            rootName: Bb,
            live: null !== hb && !0 === (null === (Yb = this.live) || void 0 === Yb ? void 0 : Yb.handles(Bb)),
            nuclear: Ub
          }, this.byRootId.set(Ob, Gb)
        }
        return Gb
      }
    }
    const pA = 500;
    const oA = (0, Bb.memo)((function(bb) {
      var ub, hb;
      let {
        store: Ob
      } = bb;
      const {
        t: Gb
      } = (0, DO.K)(), [Ub, Lb] = (0, Bb.useState)((() => Ob.get()));
      (0, Bb.useEffect)((() => (Lb(Ob.get()), Ob.subscribe((() => {
        Lb(Ob.get())
      })))), [Ob]);
      const {
        openInGameMenuName: Yb,
        openEverythingMenuName: Sb,
        isTouchScreen: ab
      } = (0, KO.j)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Hb,
        tool: wb,
        live: Zb,
        wrench: Xb,
        atomic: pb
      } = Ub, ob = Ub.visible && null === Yb && null === Sb;
      if (null === Hb) return null;
      const Ab = null !== Xb.detail ? Gb(Xb.detail) : null !== (ub = Ub.plan) && void 0 !== ub && ub.ctrl ? Gb("buildAFactory2Game:lookPlanCtrl") : null !== Hb.detail ? Gb(Hb.detail, null === Hb.detailItem ? void 0 : {
        item: Gb(Hb.detailItem)
      }) : null;
      return (0, jG.jsxs)("div", {
        className: dO()("Baf2LookTarget", {
          Visible: ob
        }),
        "aria-hidden": !ob,
        children: [(0, jG.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Gb(Hb.name)
        }), null !== Ub.plan && (0, jG.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Gb(Ub.plan.key, {
            kind: Gb(Ub.plan.kindKey),
            w: String(Ub.plan.w),
            h: String(Ub.plan.h),
            d: String(Ub.plan.d),
            count: String(Ub.plan.count)
          })
        }), void 0 !== (null === (hb = Ub.plan) || void 0 === hb ? void 0 : hb.why) && (0, jG.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Gb(Ub.plan.why)
        }), null !== Xb.mode && (0, jG.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Gb(Xb.mode)
        }), null !== wb ? (0, jG.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Gb(wb.key, {
            item: Gb(wb.needed),
            MS: null === wb.MS ? "" : Gb(wb.MS)
          })
        }) : null !== Zb ? (0, jG.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Gb(Zb.key, hS(Gb, Zb))
        }) : null !== Ab && (0, jG.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Ab
        }), pb.length > 0 && (0, jG.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Gb("buildAFactory2Game:lookAtomicRecipes", {
            list: pb.map((bb => {
              let {
                output: ub,
                inputs: hb
              } = bb;
              const Bb = hb.length > 1 ? ` ${Gb("buildAFactory2Game:recipeMore",{count:String(hb.length-1)})}` : "";
              return `${Gb(hG(hb[0]))}${Bb} \u2192 ${Gb(hG(ub))}`
            })).join(", ")
          })
        }), null !== Xb.next && (0, jG.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Gb(Xb.next, {
            state: null === Xb.nextState ? "" : Gb(Xb.nextState),
            use: Gb(ab ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var AA = hb(38142);
    const lA = [],
      KA = [
        [0, -1, 0]
      ];

    function WA(bb) {
      const ub = [bb];
      for (let hb = 1; hb <= 4; hb++) hb > 1 && ub.push(`${bb}|meta|rot${hb}`), ub.push(`${bb}|meta|rot${hb}|Running`);
      return ub
    }

    function CA(bb, ub) {
      return [Math.floor(bb[0] / ub), Math.floor(bb[1] / ub), Math.floor(bb[2] / ub)]
    }

    function dA(bb, ub, hb) {
      return `${bb},${ub},${hb}`
    }

    function rA(bb) {
      const ub = bb.split("|")[0];
      if (!Sh(ub)) return lA;
      const hb = Ju[ub];
      if (uh(hb)) return KA;
      const Bb = Wo(bb);
      return hh(hb) ? [
        [-Bb[0], -Bb[1], -Bb[2]]
      ] : rO(hb) ? function(bb, ub) {
        const hb = bb[0] - 2 * ub[0],
          Bb = bb[2] - 2 * ub[2],
          Ob = [];
        for (let Gb = -1; Gb <= 1; Gb++)
          for (let ub = -1; ub <= 1; ub++) Ob.push([hb + Gb, bb[1], Bb + ub]);
        return Ob
      }([0, 0, 0], Bb) : lA
    }
    const jA = [.5, .5, .5],
      nA = [.2, .8, .3],
      DA = [.45, 1, .5];
    class xA {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(bb) {
        this.indexed = !0;
        for (const ub of xu)
          for (const hb of WA(ub)) {
            const ub = bb.blockNameToBlockId(hb, !0),
              Bb = rA(hb);
            null !== ub && Bb.length > 0 && (this.offsetsList.push(Bb), this.offsetsIndexById[ub] = this.offsetsList.length)
          }
      }
      onAfterRender(bb, ub) {
        this.indexed || this.index(bb);
        const hb = performance.now();
        if (hb - this.lastCheckMs < 100) return;
        this.lastCheckMs = hb, this.checks++;
        const Bb = aX.e.bX,
          [Ob, Gb, Ub] = CA(ub, Bb);
        let Lb = !1;
        const Yb = [];
        let Sb = 0;
        for (let ab = Ob - 2; ab <= Ob + 2; ab++)
          for (let ub = Gb - 1; ub <= Gb + 1; ub++)
            for (let Ob = Ub - 2; Ob <= Ub + 2; Ob++) {
              const Gb = Sb++,
                Ub = dA(ab, ub, Ob),
                Hb = bb.getChunkVersion(ab, ub, Ob);
              let wb = this.chunks.get(Ub);
              null !== Hb ? (wb || (wb = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Ub, wb)), wb.seenAt = this.checks, wb.checkedVersion !== Hb && (wb.checkedVersion = Hb, Lb = !0), wb.scannedVersion !== Hb && hb - wb.scannedAt >= 500 && Yb.push({
                slot: Gb,
                entry: wb,
                origin: [ab * Bb, ub * Bb, Ob * Bb]
              })) : (Lb ||= void 0 !== wb, this.chunks.delete(Ub))
            }
        this.scanDue(bb, Yb) && (Lb = !0);
        for (const [ab, Hb] of this.chunks) Hb.seenAt !== this.checks && (Lb ||= Hb.machines.length > 0, this.chunks.delete(ab));
        for (const ab of this.chunks.values())
          for (const [ub, hb, Bb] of ab.cellChunks)(Math.abs(ub - Ob) > 2 || Math.abs(hb - Gb) > 1 || Math.abs(Bb - Ub) > 2) && this.watchCellChunk(bb, ub, hb, Bb) && (Lb = !0);
        for (const [ab, Hb] of this.cellChunks) Hb.seenAt !== this.checks && this.cellChunks.delete(ab);
        Lb && this.refresh(bb)
      }
      dispose(bb) {
        this.clearMeshes(bb), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(bb, ub) {
        const hb = Math.max(ub.findIndex((bb => {
          let {
            slot: ub
          } = bb;
          return ub >= this.scanFrom
        })), 0);
        let Bb = 96;
        for (let Ob = 0; Ob < ub.length; Ob++) {
          const {
            slot: Gb,
            entry: Ub,
            origin: Lb
          } = ub[(hb + Ob) % ub.length];
          if (Bb -= this.scan(bb, Ub, Lb), Bb <= 0) {
            this.scanFrom = Gb + 1;
            break
          }
        }
        return ub.length > 0
      }
      scan(bb, ub, hb) {
        let [Bb, Ob, Gb] = hb;
        const Ub = aX.e.bX,
          Lb = this.hits;
        Lb.length = 0;
        const Yb = bb.scanBlocks(Bb, Ob, Gb, Bb + Ub, Ob + Ub, Gb + Ub, this.offsetsIndexById, Lb),
          Sb = [];
        for (let ab = 0; ab < Lb.length; ab += 4) Sb.push({
          pos: [Lb[ab], Lb[ab + 1], Lb[ab + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[Lb[ab + 3]] - 1]
        });
        return ub.machines = Sb, ub.cellChunks = function(bb, ub) {
          const hb = new Set,
            Bb = [];
          for (const {
              pos: Ob,
              offsets: Gb
            }
            of bb)
            for (const [bb, Ub, Lb] of Gb) {
              const Gb = CA([Ob[0] + bb, Ob[1] + Ub, Ob[2] + Lb], ub),
                Yb = dA(...Gb);
              hb.has(Yb) || (hb.add(Yb), Bb.push(Gb))
            }
          return Bb
        }(Sb, Ub), ub.scannedVersion = ub.checkedVersion, ub.scannedAt = performance.now(), Math.max(Yb, 1)
      }
      watchCellChunk(bb, ub, hb, Bb) {
        const Ob = dA(ub, hb, Bb),
          Gb = bb.getChunkVersion(ub, hb, Bb),
          Ub = this.cellChunks.get(Ob);
        return null === Gb ? this.cellChunks.delete(Ob) : (null === Ub || void 0 === Ub ? void 0 : Ub.version) === Gb ? (Ub.seenAt = this.checks, !1) : (this.cellChunks.set(Ob, {
          version: Gb,
          seenAt: this.checks
        }), !0)
      }
      refresh(bb) {
        const ub = function(bb, ub) {
            const hb = new Set,
              Bb = [];
            for (const {
                pos: Ob,
                offsets: Gb
              }
              of bb)
              for (const [bb, Ub, Lb] of Gb) {
                const Gb = Ob[0] + bb,
                  Yb = Ob[1] + Ub,
                  Sb = Ob[2] + Lb,
                  ab = `${Gb},${Yb},${Sb}`;
                hb.has(ab) || (hb.add(ab), ub(Gb, Yb, Sb) && Bb.push([Gb, Yb, Sb]))
              }
            return Bb
          }([...this.chunks.values()].flatMap((bb => bb.machines)), ((ub, hb, Bb) => bb.isBlockInLoadedChunk(ub, hb, Bb) && 0 === bb.getBlockId(ub, hb, Bb))),
          hb = ub.join(";");
        hb !== this.shownKey && (this.shownKey = hb, this.clearMeshes(bb), ub.length > 0 && (this.meshes = [this.build(bb, ub, !1), this.build(bb, ub, !0)]))
      }
      build(bb, ub, hb) {
        const Bb = ub[0],
          Ob = [],
          Gb = [];
        for (const [Ub, Lb, Yb] of ub)(0, AA.b)(Ob, Gb, [Ub - Bb[0] + .5, Lb - Bb[1] + .5, Yb - Bb[2] + .5], jA, hb);
        return bb.createGameMesh({
          positions: Ob,
          indices: Gb
        }, {
          rgb: hb ? DA : nA,
          alpha: .4
        }, Bb)
      }
      clearMeshes(bb) {
        for (const ub of this.meshes) bb.disposeGameMesh(ub);
        this.meshes = []
      }
    }
    const zA = 1 / .6,
      gA = 200,
      iA = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      vA = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      tA = 2 * Math.PI / 3;
    class JA {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iA;
        this.style = bb, this.particles = null, this.points = new Float32Array(800), this.budget = gA, this.lastMs = 0
      }
      static blade() {
        return new JA(vA)
      }
      sK(bb, ub) {
        const hb = Math.min(ub.arcStruck, ub.arcPoints.length);
        this.draw(bb, [ub.arcFrom, ...ub.arcPoints], ub.arcPoints.slice(0, hb))
      }
      onBlade(bb, ub) {
        const [hb, Bb, Ob] = ub.bladeCentre, [Gb, Ub] = ub.bladeFacing, Lb = hb - 1.5 * Gb, Yb = Ob - 1.5 * Ub, Sb = Math.atan2(Ub, Gb), ab = [];
        for (let Hb = 0; Hb <= 8; Hb++) {
          const bb = Sb - tA / 2 + tA * Hb / 8;
          ab.push([Lb + 2.5 * Math.cos(bb), Bb, Yb + 2.5 * Math.sin(bb)])
        }
        this.draw(bb, ab, ub.bladeStruck)
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null
      }
      draw(bb, ub, hb) {
        if (!bb.particlesEnabled() || ub.length < 2) return;
        const Bb = performance.now();
        this.budget = Math.min(gA, this.budget + (Bb - this.lastMs) / 1e3 * gA), this.lastMs = Bb;
        const Ob = [];
        let Gb = 0,
          Ub = ub[0];
        for (const Ab of ub.slice(1)) {
          const bb = Math.min(48, Math.round(Math.hypot(Ab[0] - Ub[0], Ab[1] - Ub[1], Ab[2] - Ub[2]) * this.style.perBlock));
          Ob.push([Ub, Ab, bb]), Gb += bb, Ub = Ab
        }
        const Lb = hb.length;
        Gb += 10 * Lb;
        const Yb = Gb > this.budget ? this.budget / Gb : 1;
        if (0 === Gb || Yb * Gb < 1) return;
        const Sb = ub[0],
          [ab, Hb, wb] = Sb,
          Zb = this.points;
        let Xb = 0;
        const pb = (bb, ub, hb, Bb) => {
          const Ob = 4 * Xb;
          Zb[Ob] = bb - ab, Zb[Ob + 1] = ub - Hb, Zb[Ob + 2] = hb - wb, Zb[Ob + 3] = Bb, Xb++
        };
        Ob.forEach(((bb, ub) => {
          let [hb, Bb, Ob] = bb;
          const Gb = Math.min(Math.floor(Ob * Yb), gA - Xb),
            Ub = Math.hypot(Bb[0] - hb[0], Bb[1] - hb[1], Bb[2] - hb[2]),
            Lb = 0 === ub && Ub > 0 ? Math.min(.5, .1 * Ub) / Ub : 0;
          for (let Yb = 0; Yb < Gb; Yb++) {
            const bb = Lb + (Yb + .5) / Gb * (1 - Lb);
            pb(hb[0] + (Bb[0] - hb[0]) * bb, hb[1] + (Bb[1] - hb[1]) * bb, hb[2] + (Bb[2] - hb[2]) * bb, .15)
          }
        }));
        const ob = Math.floor(10 * Yb);
        for (let Ab = 0; Ab < Lb; Ab++) {
          const [bb, ub, Bb] = hb[Ab];
          for (let hb = 0; hb < ob && Xb < gA; hb++) pb(bb, ub, Bb, 2.5)
        }
        this.budget -= Xb, this.particles ??= bb.createParticles(function(bb) {
          const [ub, hb] = bb.colours;
          return {
            texture: "square_particle",
            LH: 400,
            minLifeTime: bb.life[0] / zA,
            maxLifeTime: bb.life[1] / zA,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [ub[0], ub[1], ub[2], 1],
              maxColor: [hb[0], hb[1], hb[2], 1]
            }, {
              timeFraction: 1,
              minColor: [ub[0], ub[1], ub[2], 0],
              maxColor: [hb[0], hb[1], hb[2], 0]
            }],
            blendMode: JL.f.Add
          }
        }(this.style), {
          pos: Sb
        }), this.particles.emitPoints(Sb, Zb, Xb)
      }
    }
    const eA = new Set(["Sky Spring"]);

    function NA(bb, ub, hb) {
      const Bb = bb.split("|")[0];
      return "Air" !== ub || hb || ! function(bb) {
        const ub = bb.split("|")[0];
        return void 0 !== Uh[ub] || eA.has(ub)
      }(Bb) ? null : bb
    }
    class sA {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(bb) {
        const ub = bb - this.lastTapAt >= 300;
        return this.lastTapAt = bb, ub
      }
    }
    class MA {
      constructor() {
        this.presses = new sA, this.predicted = null
      }
      tap(bb, ub) {
        const hb = this.presses.isNewPress(ub);
        return hb && (this.predicted = {
          station: bb,
          at: ub
        }), hb
      }
      consumeServerOpen(bb, ub) {
        const hb = this.predicted;
        return !(null === hb || hb.station !== bb || ub - hb.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class mA {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(bb, ub) {
        return bb && (this.thrustAt = ub), ub - this.thrustAt < 200
      }
    }
    const IA = [.1, .05, .1],
      PA = {
        texture: "effect_5",
        LH: Math.ceil(48),
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
        blendMode: JL.f.OneOne
      };
    class qA {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new mA, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      sK(bb, ub) {
        for (const [hb, Bb] of ub.baf2JetFlames) bb.isLocalPlayer(hb) || (Bb ? this.lit.add(hb) : this.lit.delete(hb))
      }
      onAfterRender(bb, ub) {
        const hb = performance.now(),
          Bb = this.hold.lit(this.selfThrusting(bb, ub), hb);
        for (const [Ob, Gb] of this.flames)(Ob === ub ? Bb : this.lit.has(Ob)) || this.setEmitting(Gb, !1), Ob === ub || bb.getPositionView(Ob) ? !Gb.emitting && hb - Gb.offAt >= 1300 && (Gb.particles.stop(), this.flames.delete(Ob)) : (Gb.particles.dispose(), this.flames.delete(Ob), this.lit.delete(Ob));
        Bb && this.draw(bb, ub, ub);
        for (const Ob of this.lit) this.draw(bb, ub, Ob)
      }
      dispose() {
        for (const bb of this.flames.values()) bb.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(bb, ub) {
        var hb;
        const Bb = bb.getLocalPlayerMovement();
        return !!Bb && (null !== (Ob = {
          option: null !== (hb = bb.getClientOption(ub, "jumpHoldThrust")) && void 0 !== hb ? hb : null,
          jumping: Bb.jumpHeld,
          onGround: Bb.onGround,
          alive: bb.isAlive(ub)
        }).option && Ob.option.maxUpSpeed >= 0 && Ob.jumping && !Ob.onGround && Ob.alive);
        var Ob
      }
      draw(bb, ub, hb) {
        var Bb, Ob;
        const Gb = this.pos;
        if (!bb.readDrawnPosition(hb, Gb)) return;
        const Ub = bb.readDrawnPosition(ub, this.camera) ? this.camera : Gb;
        if (!((Gb[0] - Ub[0]) ** 2 + (Gb[1] - Ub[1]) ** 2 + (Gb[2] - Ub[2]) ** 2 < 1600) || !bb.particlesEnabled()) {
          const bb = this.flames.get(hb);
          return void(bb && this.setEmitting(bb, !1))
        }
        const Lb = null !== (Bb = this.flames.get(hb)) && void 0 !== Bb ? Bb : this.create(bb, hb, Gb),
          Yb = null !== (Ob = bb.getDrawnHeading(hb)) && void 0 !== Ob ? Ob : 0,
          Sb = this.at;
        Sb[0] = Gb[0] - .35 * Math.sin(Yb), Sb[1] = Gb[1] + 1.05, Sb[2] = Gb[2] - .35 * Math.cos(Yb), Lb.particles.moveTo(Sb), this.setEmitting(Lb, !0)
      }
      setEmitting(bb, ub) {
        bb.emitting !== ub && (bb.emitting = ub, ub || (bb.offAt = performance.now()), bb.particles.setEmitRate(ub ? 60 : 0))
      }
      create(bb, ub, hb) {
        const Bb = {
          particles: bb.createParticles(PA, {
            pos: hb,
            half: IA
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(ub, Bb), Bb
      }
    }

    function EA(bb) {
      return "Reactor Frame" === BB("reactor", bb)
    }

    function yA(bb) {
      return Mh("reactor", bb) && !EA(bb) && (bb.startsWith("Reactor Glass") || bb.startsWith("Reactor Port"))
    }
    const VA = "baf2Goal";
    class FA {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [tO.i.subscribe("setDirectionArrow", (bb => {
          let {
            id: ub,
            position: hb
          } = bb;
          ub === VA && (this.goal = hb, this.checkedAt = -1 / 0)
        })), tO.i.subscribe("clearDirectionArrow", (bb => {
          let {
            id: ub
          } = bb;
          null !== ub && ub !== VA || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const bb of this.subs) tO.i.unsubscribe(bb)
      }
      sideOf(bb, ub, hb, Bb) {
        const Ob = this.goal;
        if (!Ob) return 0;
        hb - this.checkedAt > 1e3 && (this.checkedAt = hb, this.open = function(bb, ub) {
          const [hb, Bb, Ob] = bb.map(Math.floor);
          if (!yA(ub(hb, Bb, Ob))) return null;
          for (const [Gb, Ub] of [
              [1, 0],
              [0, 1]
            ]) {
            const bb = ub(hb + Gb, Bb, Ob + Ub),
              Lb = ub(hb - Gb, Bb, Ob - Ub);
            if (EA(Lb) && yA(bb)) return [Gb, 0, Ub];
            if (EA(bb) && yA(Lb)) return [0 - Gb, 0, 0 - Ub]
          }
          return null
        }(Ob, ((ub, hb, Bb) => bb.blockIdToBlockName(bb.getBlockId(ub, hb, Bb)))));
        const Gb = this.open;
        if (!Gb) return 0;
        const Ub = Bb(Ob);
        if (Math.abs(Ub.x - ub.x) > .05 || Math.abs(Ub.y - ub.y) > .05) return 0;
        const Lb = Bb([Ob[0] + Gb[0], Ob[1], Ob[2] + Gb[2]]).x - Ub.x;
        return Math.abs(Lb) < .3 ? 0 : Lb > 0 ? 1 : -1
      }
    }
    class fA {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new FA, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.FZ = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.lK = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((bb => {
          for (const ub of bb) ub.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(ub.target, ub.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.FZ || this.clear()
        }, window.addEventListener("resize", this.lK)
      }
      onAfterRender(bb, ub) {
        var hb;
        this.api = bb, this.project = null !== (hb = null === ub || void 0 === ub ? void 0 : ub.projectWorldPosToScreenPos) && void 0 !== hb ? hb : null, this.queued || this.FZ || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.FZ = !0;
        for (const bb of this.moved.keys()) bb.style.transform = "";
        this.moved.clear();
        for (const bb of this.sideLabels.keys()) bb.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.lK)
      }
      clear() {
        for (const Gb of this.moved.keys()) Gb.isConnected || this.moved.delete(Gb);
        for (const Gb of this.sideLabels.keys()) Gb.isConnected || this.sideLabels.delete(Gb);
        if (0 === this.arrows.length) return;
        const bb = performance.now(),
          ub = bb - this.refreshedAt > 1e3;
        ub && (this.refreshedAt = bb, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const hb = this.trackerBox(),
          Bb = this.barsBox(),
          Ob = this.toastBox(ub);
        (hb || Bb || Ob) && ub && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Gb = 0; Gb < this.arrows.length; Gb++) {
          const ub = this.arrows[Gb];
          this.labelOffsets.set(ub, this.runLabelAside(ub, bb));
          const Ub = (hb ? this.shiftLeftOf(ub, hb) : 0) || this.shiftOnScreen(ub),
            Lb = Math.min(Bb ? this.liftAbove(ub, Bb, Ub) : 0, Ob ? this.liftAbove(ub, Ob, Ub) : 0),
            Yb = this.moved.get(ub);
          if (0 !== Ub || 0 !== Lb) {
            const bb = 0 === Lb ? `translateX(${Ub}px)` : `translate(${Ub}px, ${Lb}px)`;
            Yb !== bb && (ub.style.transform = bb, this.moved.set(ub, bb))
          } else void 0 !== Yb && (ub.style.transform = "", this.moved.delete(ub))
        }
      }
      trackerBox() {
        var bb, ub;
        const hb = null !== (bb = this.tracker) && void 0 !== bb && bb.isConnected ? this.tracker : null !== (ub = this.trackers[0]) && void 0 !== ub ? ub : null;
        if (hb !== this.tracker && this.watch(hb), this.boxStale && hb) {
          var Bb, Ob, Gb;
          this.boxStale = !1;
          const bb = hb.closest(".NoRoom") ? null : hb.getBoundingClientRect(),
            ub = bb && bb.width > 0 ? null === (Bb = this.hud) || void 0 === Bb ? void 0 : Bb.getBoundingClientRect() : void 0,
            Ub = bb && ub ? Math.max(bb.top, ub.top) : null !== (Ob = null === bb || void 0 === bb ? void 0 : bb.top) && void 0 !== Ob ? Ob : 0,
            Lb = bb && ub ? Math.min(bb.bottom, ub.bottom) : null !== (Gb = null === bb || void 0 === bb ? void 0 : bb.bottom) && void 0 !== Gb ? Gb : 0;
          this.box = bb && bb.width > 0 && Lb > Ub ? {
            left: bb.left,
            top: Ub,
            right: bb.right,
            bottom: Lb
          } : null
        }
        return hb ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var bb;
          this.barsStale = !1;
          const ub = null === (bb = this.statBars[0]) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
          this.bars = ub && ub.width > 0 && ub.height > 0 ? {
            left: ub.left,
            top: ub.top,
            right: ub.right,
            bottom: ub.bottom
          } : null
        }
        return this.bars
      }
      toastBox(bb) {
        var ub;
        const hb = null !== (ub = this.toasts[0]) && void 0 !== ub ? ub : null;
        if (hb !== this.toastEl || bb && hb) {
          this.toastEl = hb;
          const bb = null === hb || void 0 === hb ? void 0 : hb.getBoundingClientRect();
          this.toast = bb && bb.width > 0 && bb.height > 0 ? {
            left: bb.left,
            top: bb.top,
            right: bb.right,
            bottom: bb.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(bb, ub, hb) {
        var Bb;
        const Ob = this.anchorOf(bb);
        if (!Ob) return 0;
        const Gb = Ob.x + hb + (null !== (Bb = this.labelOffsets.get(bb)) && void 0 !== Bb ? Bb : 0),
          {
            halfWidth: Ub,
            labelled: Lb
          } = this.extentOf(bb),
          Yb = Ob.y + this.em * (Lb ? 6.2 : 3);
        return Yb < ub.top - 6 || Gb + Ub < ub.left - 6 || Gb - Ub > ub.right + 6 ? 0 : ub.top - 6 - Yb
      }
      watch(bb) {
        var ub, hb;
        this.tracker && this.sizes.unobserve(this.tracker), null === (ub = this.hud) || void 0 === ub || ub.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = bb, this.hud = null !== (hb = null === bb || void 0 === bb ? void 0 : bb.closest(".Baf2QuestHud")) && void 0 !== hb ? hb : null, this.box = null, this.boxStale = !0, bb && this.sizes.observe(bb), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(bb, ub) {
        var hb;
        const Bb = this.anchorOf(bb);
        if (!Bb) return 0;
        const {
          y: Ob
        } = Bb, Gb = Bb.x + (null !== (hb = this.labelOffsets.get(bb)) && void 0 !== hb ? hb : 0), Ub = this.em, {
          halfWidth: Lb,
          labelled: Yb
        } = this.extentOf(bb), Sb = Ob - Ub, ab = Gb + Lb;
        return Ob + Ub * (Yb ? 6.2 : 3) < ub.top || Sb > ub.bottom || ab < ub.left - 6 || Gb - Lb > ub.right ? 0 : Math.max(ub.left - 6 - ab, 6 - (Gb - Lb))
      }
      shiftOnScreen(bb) {
        var ub;
        const hb = this.anchorOf(bb);
        if (!hb) return 0;
        const {
          halfWidth: Bb
        } = this.extentOf(bb), Ob = hb.x + (null !== (ub = this.labelOffsets.get(bb)) && void 0 !== ub ? ub : 0), Gb = Ob + Bb - (this.innerWidth - 6);
        return Gb > 0 ? -Gb : Math.max(0, 6 - (Ob - Bb))
      }
      runLabelAside(bb, ub) {
        var hb;
        let Bb = null;
        for (let Ub = 0; Ub < bb.children.length; Ub++) bb.children[Ub].classList.contains("DirectionArrowLabel") && (Bb = bb.children[Ub]);
        if (!Bb) return 0;
        const Ob = bb.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(bb) : null,
          Gb = (Ob && this.api ? this.side.sideOf(this.api, {
            x: Ob.x / this.innerWidth * 100,
            y: Ob.y / this.innerHeight * 100
          }, ub, this.project) : 0) * this.halfWidthOf(Bb);
        return Gb !== (null !== (hb = this.sideLabels.get(Bb)) && void 0 !== hb ? hb : 0) && (Bb.style.transform = 0 === Gb ? "" : `translateX(-50%) translateX(${Gb}px)`, 0 === Gb ? this.sideLabels.delete(Bb) : this.sideLabels.set(Bb, Gb)), Gb
      }
      extentOf(bb) {
        let ub = this.em,
          hb = !1;
        for (let Bb = 0; Bb < bb.children.length; Bb++) {
          const Ob = bb.children[Bb],
            Gb = Ob.classList.contains("DirectionArrowLabel");
          hb ||= Gb, (Gb || Ob.classList.contains("DirectionArrowDistance")) && (ub = Math.max(ub, this.halfWidthOf(Ob)))
        }
        return {
          halfWidth: ub,
          labelled: hb
        }
      }
      halfWidthOf(bb) {
        let ub = this.halfWidths.get(bb);
        return void 0 === ub && (ub = bb.offsetWidth / 2, this.halfWidths.set(bb, ub), this.sizes.observe(bb), this.labels.add(bb)), ub
      }
      forgetGoneLabels() {
        for (const bb of this.labels) bb.isConnected || (this.sizes.unobserve(bb), this.halfWidths.delete(bb), this.labels.delete(bb))
      }
      anchorOf(bb) {
        const ub = bb.style.translate,
          hb = this.anchors.get(bb);
        if (hb && hb.translate === ub && hb.innerWidth === this.innerWidth && hb.innerHeight === this.innerHeight) return hb;
        const Bb = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(ub);
        if (!Bb) return null;
        const Ob = {
          translate: ub,
          x: parseFloat(Bb[1]) / 100 * this.innerWidth,
          y: parseFloat(Bb[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(bb, Ob), Ob
      }
    }
    const kA = "Baf2ArrowText";

    function TA(bb, ub) {
      const hb = bb.rows.find((bb => bb.current));
      return tb(bb.tutorial) && null !== hb && void 0 !== hb && hb.item && EO(hb) && zb(hb.item).includes(ub) ? hb.item : null
    }
    const cA = new class {
      constructor(bb) {
        this.select = bb, this.picks = new Map
      }
      open(bb, ub, hb) {
        const Bb = TA(ub, bb);
        null !== Bb && this.xw(bb, Bb, hb)
      }
      follow(bb, ub) {
        if (Lb())
          for (const [hb, {
              item: Bb,
              had: Ob
            }] of this.picks) {
            const Gb = TA(bb, hb);
            Gb !== Bb && (null !== Gb && ub(Bb) > Ob ? this.xw(hb, Gb, ub) : this.picks.delete(hb))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      xw(bb, ub, hb) {
        this.picks.set(bb, {
          item: ub,
          had: hb(ub)
        }), this.select(bb, ub)
      }
    }(JO.l);

    function QA(bb) {
      return ub => {
        let hb = 0;
        for (const Bb of bb.getInventoryItems())(null === Bb || void 0 === Bb ? void 0 : Bb.name) === ub && (hb += null === Bb.amount ? 1 : Math.max(Bb.amount, 0));
        return hb
      }
    }

    function RA(bb, ub, hb, Bb) {
      bb.getClientOption(ub, "canCraft") && "inventory" !== KO.d.get("openInGameMenuName") && (cA.open(hb, Bb.get(), QA(bb)), tO.i.vp("toggleMenu", `inventory|${hb}`))
    }
    let bl = null,
      ul = !1;

    function hl(bb) {
      const ub = dG();
      bb === bl && ub === ul || (bl = bb, ul = ub, (0, JO.o)(function(bb, ub) {
        const hb = new Map;
        for (let Bb = bb + 1; Bb <= Ob.length; Bb++) {
          const Ob = yG(Bb, bb, ub);
          if (Ob)
            for (const ub of Ab(Bb).unlocks) hb.set(ub, {
              ...Ob,
              stepsAway: Bb - bb
            })
        }
        return hb
      }(bb, ub)))
    }

    function Bl() {
      return (0, JO.u)(EG(Object.keys(xb), MG)), () => {
        (0, JO.u)([])
      }
    }
    const Ol = "buildAFactory2Game:",
      Gl = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      Ul = {
        on: `${Ol}tutorialButtonOn`,
        hud: `${Ol}tutorialButtonHud`,
        off: `${Ol}tutorialButtonOff`
      },
      Ll = {
        on: `${Ol}tutorialPickedOn`,
        hud: `${Ol}tutorialPickedHud`,
        off: `${Ol}tutorialPickedOff`
      };

    function Yl(bb, ub, hb) {
      let Bb = null,
        Ob = () => {};
      const Gb = Gb => {
        var Ub;
        let {
          tutorial: Lb,
          tutorialKnown: Yb
        } = Gb;
        (null === (Ub = Bb) || void 0 === Ub ? void 0 : Ub.tutorial) === Lb && Bb.tutorialKnown === Yb || (Bb = {
          tutorial: Lb,
          tutorialKnown: Yb
        }, Ob = (0, AO.r)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: Ul[Lb],
          icon: {
            kind: "icon",
            name: Gl[Lb]
          },
          iconOnly: !0,
          disabled: !Yb,
          className: "Baf2TutorialButton",
          onClick: () => {
            var Bb;
            (Bb => {
              const Ob = ub.setTutorial(Bb);
              bb.send(`baf2tutorial ${Bb} ${Ob}`), hb.show({
                baf2ToastText: [(0, Jb.Qd)({
                  translationKey: Ll[Bb]
                }, Jb.I.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((Bb = ub.get().tutorial, vb[(vb.indexOf(Bb) + 1) % vb.length]))
          }
        }))
      };
      Gb(ub.get());
      const Ub = tO.i.subscribe(eO, Gb);
      return () => {
        tO.i.unsubscribe(Ub), Ob()
      }
    }

    function Sl(bb, ub, hb) {
      var Bb, Ob;
      const Gb = bb.getTargetedBlock();
      if (!Gb || ! function(bb, ub, hb) {
          if ("Chest" !== ub) return !1;
          const Bb = bb.split("|")[0];
          if (!Sh(Bb) || 0 === Ju[Bb].outputSlots.length) return !1;
          const Ob = Wo(bb);
          return hb[0] === Ob[0] && hb[1] === Ob[1] && hb[2] === Ob[2]
        }(hb, null === (Bb = bb.cub(ub)) || void 0 === Bb ? void 0 : Bb.name, Gb.normal)) return !1;
      const [Ub, Lb, Yb] = Gb.gp, Sb = bb.getBlockId(Ub, Lb, Yb);
      return 0 === Sb || !0 === (null === (Ob = ib.i[Sb]) || void 0 === Ob ? void 0 : Ob.canBePlacedOver)
    }
    var al = hb(36393);
    const Hl = new Set(ph.d);
    class wl {
      constructor(bb) {
        this.toasts = bb, this.lastAt = -1 / 0
      }
      onAltAction(bb, ub, hb) {
        const Bb = bb.getTargetedBlock();
        if (!Bb || function(bb) {
            const ub = bb.split("|")[0];
            return Sh(ub) || null !== rB(ub) || nb(ub) || ph.d.includes(ub)
          }(hb) && !Hl.has(hb.split("|")[0])) return;
        const Ob = bb.cub(ub);
        if (!Ob || !Hl.has(Ob.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Gb = Ob.typeObj.id,
          [Ub, Lb, Yb] = Bb.gp,
          Sb = bb.getBlockId(Ub, Lb, Yb),
          ab = ib.i[Sb];
        (0 === Sb || null !== ab && void 0 !== ab && ab.Pw || null !== ab && void 0 !== ab && ab.canBePlacedOver) && bb.isSolidToPlayerBlockId(Gb) && bb.canModifyBlockAt(Ub, Lb, Yb) && bb.Xub(Ub, Lb, Yb, Gb) && !bb.Xub(Ub, Lb, Yb, Gb, ub) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Jb.Qd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Jb.I.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Zl {
      constructor(bb) {
        this.show = bb, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(bb, ub, hb) {
        var Bb;
        if (!ub) return this.started = null, void this.gatedThisHold.clear();
        if (!bb) return void(this.started = null);
        const Ob = `${bb.x},${bb.y},${bb.z},${bb.MS}`;
        if (Ob === this.started) return;
        this.started = Ob;
        const Gb = sB(bb.y) ? BA(bb.block, bb.MS, bb.level) : null;
        if (null === Gb || this.gatedThisHold.has(Ob)) return;
        this.gatedThisHold.add(Ob);
        const Ub = bb.block.split("|")[0];
        hb - (null !== (Bb = this.hintedAt.get(Ub)) && void 0 !== Bb ? Bb : -1 / 0) < 5e3 || (this.hintedAt.set(Ub, hb), this.show({
          baf2ToastText: OA(Gb, bb.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Xl = hb(29);

    function pl(bb, ub) {
      const hb = [...bb.baf2CoreBankPaused];
      for (const [Ob] of bb.baf2CoreBanked) hb.push(Ob);
      for (const Ub of Ob) {
        for (const {
            item: bb
          }
          of Ub.cost) hb.push(bb);
        for (const bb of Ub.newDeposits) hb.push(bb.block);
        for (const bb of Ub.unlocks) hb.push(bb, gb(bb));
        Ub.reward && hb.push(Ub.reward);
        for (const {
            item: bb
          }
          of null !== (Bb = null === (Gb = Ub.charge) || void 0 === Gb ? void 0 : Gb.items) && void 0 !== Bb ? Bb : []) {
          var Bb, Gb;
          hb.push(bb)
        }
      }
      return {
        message: bb,
        itemNames: ub([...new Set(hb)])
      }
    }
    const ol = "baf2MultiblockGuide";
    const Al = new Map;
    const ll = function(bb, ub, hb, Ob) {
      let {
        localPlayerId: Gb
      } = Ob;
      const Ub = new pL,
        Lb = new Rw,
        Sb = new UZ,
        ab = new OZ(Sb),
        Hb = (bb, ub) => {
          ub ? ab.observe(bb) : ab.unobserve(bb)
        },
        wb = new BZ,
        Zb = new aZ(Hb),
        Xb = bb => Zb.covers(bb),
        pb = new gZ;
      let ob;
      const Ab = new MU((bb => {
          ob.sendCommand(bb)
        })),
        lb = () => {
          Ab.send("baf2questbook")
        },
        Kb = bb => function(bb, ub, hb) {
          const Bb = {};
          for (const Ob of hb) {
            let hb = Al.get(Ob);
            void 0 === hb && (hb = bb.getItemStat(ub, Ob, "displayName"), Al.set(Ob, hb)), Bb[Ob] = hb
          }
          return Bb
        }(ob, Gb, bb),
        Wb = new MO(lb),
        Cb = new PZ((() => KO.d.get("loadingOverlayVisible"))),
        db = new FZ,
        rb = new wl(Cb),
        jb = new Zl((bb => {
          Cb.show(bb, bb.baf2ToastMs)
        })),
        Db = new hX(Hb),
        xb = new io(Db),
        zb = new rU,
        gb = new bA,
        vb = new uL,
        tb = new SX({
          read: () => !1 !== Xl.j.getItem(ol),
          write: bb => {
            Xl.j.setItem(ol, bb)
          }
        }),
        Nb = new NX(tb),
        sb = new mX(tb),
        Mb = new Yp(tb, (bb => function(bb, ub) {
          const hb = QL(ub.w, ub.h, ub.d),
            Bb = new Uint8Array(hb);
          for (let Ob = 0; Ob < hb; Ob++) {
            const hb = iX(bb, Qh(ub, hB(ub, Ob)));
            Bb[Ob] = null === hb ? 0 : fL(hb)
          }
          return Bb
        }(ob, bb)), QX(Ab)),
        mb = new Sp(tb, QX(Ab)),
        Ib = new Up,
        Pb = (bb, ub) => {
          let [hb, Bb, Ob] = bb;
          Ib.answered(ub) || Cb.show({
            baf2ToastText: [(0, Jb.Qd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: hb,
                h: Bb,
                d: Ob
              }
            }, Jb.I.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      Mb.onSizeNotTaken(Pb), mb.onSizeNotTaken(Pb);
      const yb = new Zp,
        Vb = new Fp(tb),
        Fb = new kp,
        kb = new Uo(Fb),
        Tb = new Ao,
        cb = new vo,
        Rb = new qo(cb),
        bu = new Ro(cb),
        uu = cb.lookSource(),
        hu = new XA({
          handles: bb => uu.handles(bb) || bb === eb,
          line: (bb, ub) => bb === eb ? function(bb, ub, hb) {
            var Bb;
            const Ob = Eb(null === (Bb = ub.at(hb)) || void 0 === Bb ? void 0 : Bb.item);
            return null === Ob ? {
              key: `${HA}lookFarmEmpty`
            } : {
              key: bb.blockIdToBlockName(bb.getBlockId(hb[0], hb[1], hb[2])).endsWith("|Running") ? `${HA}lookFarmRunning` : `${HA}lookFarmWaiting`,
              keys: {
                mob: qb(Ob)
              }
            }
          }(ob, Db, ub) : uu.line(bb, ub),
          version: () => uu.version() + Db.version()
        }, (bb => PX(tb.all(), bb, (bb => iX(ob, bb)))), (() => Wb.get().tier)),
        Bu = new ip,
        Ou = new xA,
        Gu = new JA,
        Uu = JA.blade(),
        Lu = new qA,
        Yu = new TZ,
        Su = new fA,
        au = new MA,
        wu = new sA;
      let Zu = -1 / 0,
        Xu = 0,
        pu = -1 / 0,
        ou = -1 / 0;
      const Au = () => {
          Ab.send("baf2islandsclose"), ou = Date.now()
        },
        lu = [];

      function Ku(bb) {
        var ub, hb, Bb, Ob, Gb, Ub, Yb;
        "core" === (null === (ub = Lb.get()) || void 0 === ub ? void 0 : ub.kind) && "core" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Ab.send("baf2coreclose"), "power" === (null === (hb = Lb.get()) || void 0 === hb ? void 0 : hb.kind) && "power" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Ab.send("baf2powerclose"), "water" === (null === (Bb = Lb.get()) || void 0 === Bb ? void 0 : Bb.kind) && "water" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Ab.send(Qb.p), "terminal" === (null === (Ob = Lb.get()) || void 0 === Ob ? void 0 : Ob.kind) && "terminal" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Ab.send("baf2terminalclose"), "islands" === (null === (Gb = Lb.get()) || void 0 === Gb ? void 0 : Gb.kind) && "islands" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Au();
        const Sb = cb.getStatus();
        "collider" === (null === (Ub = Lb.get()) || void 0 === Ub ? void 0 : Ub.kind) && "collider" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Sb && Ab.send(eY(Sb, "close"));
        const ab = bb => "reactor" === bb || "battery" === bb;
        if (ab(null === (Yb = Lb.get()) || void 0 === Yb ? void 0 : Yb.kind) && !ab(null === bb || void 0 === bb ? void 0 : bb.kind)) {
          var Hb, wb, Zb;
          const bb = "reactor" === (null === (Hb = Lb.get()) || void 0 === Hb ? void 0 : Hb.kind) ? null === (wb = Mb.get()) || void 0 === wb ? void 0 : wb.status.baf2RxAt : null === (Zb = mb.get()) || void 0 === Zb ? void 0 : Zb.status.baf2BatAt;
          bb && Ab.send(Hu(bb, "close"))
        }
        "quests" === (null === bb || void 0 === bb ? void 0 : bb.kind) && lb(), Lb.set(bb), null === bb && db.release()
      }

      function Wu() {
        (0, lO.g)(), Ku(null)
      }
      let Cu = new Set,
        du = !1;
      const ru = {
        onCreate: bb => {
          ob = bb, ob.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const ub of xu) {
            const bb = Ju[ub].inputSlots ? iL(Ub) : xL(ub, Ub, zb, Ab);
            lu.push((0, oO.f)(ub, bb))
          }
          lu.push((0, lO.t)((0, Bb.createElement)(Bb.Fragment, null, (0, Bb.createElement)(ZZ, {
            controller: Zb
          }), (0, Bb.createElement)(GX, {
            store: Db
          }), (0, Bb.createElement)(oA, {
            store: hu
          }), (0, Bb.createElement)(mZ, {
            store: Wb
          }), (0, Bb.createElement)(yZ, {
            store: Cb
          }), (0, Bb.createElement)(fZ, {
            store: db
          }), (0, Bb.createElement)(QZ, {
            store: Yu
          }), (0, Bb.createElement)(wp, {
            store: yb
          }), (0, Bb.createElement)(Tp, {
            store: Fb
          })), {
            content: (0, Bb.createElement)(bZ, {
              commands: Ab,
              store: Lb,
              power: zb,
              water: vb,
              reactor: Mb,
              battery: mb,
              collider: cb,
              terminal: gb,
              quests: Wb,
              close: lO.j,
              leave: () => {
                db.dropHeld(), (0, lO.g)()
              },
              askIslands: () => {
                ou = -1 / 0, Zu = Date.now(), Xu = Ab.send(fb)
              },
              openSocial: () => {
                (0, lO.g)(), KO.d.set({
                  openEverythingMenuName: Hh.u.SOCIAL
                })
              },
              showCore: bb => {
                Ku({
                  kind: "core",
                  core: bb
                }), Ab.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Ku(null)
            }
          })), lu.push((0, AO.r)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Ku({
                kind: "quests"
              }), (0, lO.p)()
            }
          })), lu.push(Yl(Ab, Wb, Cb)), du = !1, lu.push(rG((() => {
            null !== bl && hl(bl)
          }))), lu.push(Bl()), lu.push(function() {
            const bb = tO.i.subscribe(eO, QO),
              ub = () => {
                if (cO) {
                  const bb = cO;
                  cO = null, (0, JO.s)(bb)
                }
              },
              hb = tO.i.subscribe("toggleMenu", (bb => {
                "inventory" === (null === bb || void 0 === bb ? void 0 : bb.split("|")[0]) && ub()
              })),
              Bb = tO.i.subscribe("appManagerUpdated|openInGameMenuName", (bb => {
                "inventory" === bb && ub()
              }));
            return () => {
              tO.i.unsubscribe(bb), tO.i.unsubscribe(hb), tO.i.unsubscribe(Bb)
            }
          }()), lu.push(function(bb) {
            const ub = QA(bb),
              hb = tO.i.subscribe(eO, (bb => {
                cA.follow(bb, ub)
              }));
            return () => {
              tO.i.unsubscribe(hb), cA.clear()
            }
          }(ob)), lu.push(function() {
            const bb = document.documentElement,
              ub = (0, vZ.c)(".InvenBodyRight", [], (() => {
                const ub = document.querySelector(".InvenBodyRight");
                ub && bb.style.setProperty("--baf2-backpack-width", `${ub.offsetWidth}px`)
              }));
            return () => {
              ub(), bb.style.removeProperty("--baf2-backpack-width")
            }
          }()), lu.push(function() {
            const bb = document.documentElement;
            return bb.classList.add(kA), () => {
              bb.classList.remove(kA)
            }
          }()), lu.push((() => {
            ab.dispose(), Sb.dispose()
          })), pb.start(ob), lu.push((() => {
            pb.dispose(), Lu.dispose(), xb.dispose()
          }))
        },
        onClose: () => {
          (0, JO.s)([]), cO = null, TO = new Set, bl = null, (0, JO.o)(new Map), Al.clear();
          for (const bb of lu) bb();
          Wb.dispose(), hu.dispose(), Cb.dispose(), db.dispose(), Bu.dispose(), Ou.dispose(ob), Nb.dispose(ob), sb.dispose(ob), Vb.dispose(ob), kb.dispose(ob), Fb.dispose(), Tb.dispose(), tb.dispose(), Mb.dispose(), mb.dispose(), yb.dispose(), Gu.dispose(), Uu.dispose(), Yu.dispose(), Rb.dispose(ob), bu.dispose(ob), cb.dispose(), Su.dispose(), Ab.clear()
        },
        onAfterRender: (bb, ub) => {
          var hb, Bb, Ob;
          try {
            pb.onAfterRender(ub)
          } catch (Sb) {
            console.error("Error drawing BAF2 belt items", Sb)
          }
          try {
            Lu.onAfterRender(ob, Gb)
          } catch (Sb) {
            console.error("Error drawing BAF2 jet flames", Sb)
          }
          du || (du = !0, Ab.send("baf2clientready"));
          const Ub = ob.getPositionView(Gb);
          Zb.onAfterRender(ub, Ub, wb), Db.onAfterRender(ub, Ub, wb, Xb), ab.run(wb), Bu.onAfterRender(ob, Ub), Ou.onAfterRender(ob, Ub), xb.onAfterRender(ob, Ub), Nb.onAfterRender(ob, Ub), sb.onAfterRender(ob, Gb, Ub), Vb.onAfterRender(ob, Gb, Ub), kb.onAfterRender(ob, Gb), Tb.onAfterRender(ob, Ub), Wb.onPlayerY(Ub[1]), Rb.onAfterRender(ob), bu.onAfterRender(ob, Gb, Ub);
          const Yb = ob.getTargetedBlock();
          hu.onAfterRender(ob, Gb, null !== (hb = null === Yb || void 0 === Yb ? void 0 : Yb.vR) && void 0 !== hb ? hb : 0, null !== (Bb = null === Yb || void 0 === Yb ? void 0 : Yb.position) && void 0 !== Bb ? Bb : null), Su.onAfterRender(ob, ub), jb.onMining(function(bb, ub) {
            var hb, Bb;
            const Ob = bb.getMiningBlock();
            if (!Ob) return null;
            const Gb = (0, ib.g)(bb.getBlockId(Ob[0], Ob[1], Ob[2])),
              Ub = null !== (hb = null === (Bb = bb.cub(ub)) || void 0 === Bb ? void 0 : Bb.name) && void 0 !== hb ? hb : null,
              Lb = bb.getItemStat(ub, Gb.split("|")[0], "harvestLevel");
            return {
              block: Gb,
              x: Ob[0],
              y: Ob[1],
              z: Ob[2],
              MS: Ub,
              level: Lb
            }
          }(ob, Gb), ob.isMining(), performance.now()), "dropMap" === (null === (Ob = Lb.get()) || void 0 === Ob ? void 0 : Ob.kind) && sB(Ub[1]) && Wu()
        },
        onPlayerChangeBlock: (bb, ub, hb, Bb, Ob, Ub) => {
          bb === Gb && function(bb, ub, hb, Bb, Ob, Gb, Ub) {
            const Lb = NA(Gb, Ub, bb.isPlayerCrouching(ub));
            if (null === Lb) return;
            if (bb.vJ(hb, Bb, Ob, Lb), !bb.getClientOption(ub, "canPickUpItems")) return;
            const Yb = Uh[Lb.split("|")[0]];
            var Sb, ab, Hb;
            void 0 !== Yb && (Sb = bb.getInventoryItems(), ab = Yb, Hb = aX.e.maxItemStackSize, bb.getInventoryFreeSlotCount(ub) > 0 || Sb.some((bb => null !== bb && bb.name === ab && null !== bb.amount && bb.amount < Hb))) && bb.playSound(ub, (0, al.i)("pickUp"), .5, 1)
          }(ob, bb, ub, hb, Bb, Ob, Ub)
        },
        onPlayerAltAction: (bb, ub, hb, Bb, Ob) => {
          var Ub, Lb;
          if (!ob.getClientOption(Gb, "canPickUpItems")) return;
          const Yb = null !== (Ub = null === (Lb = ob.cub(Gb)) || void 0 === Lb ? void 0 : Lb.name) && void 0 !== Ub ? Ub : null,
            Sb = function(bb, ub) {
              const hb = bb.split("|")[0];
              return nb(hb) && ub !== LO && "Sky Pack" !== ub ? hb : null
            }(Ob, Yb);
          if (null !== Sb) return void(au.tap(Sb, performance.now()) && RA(ob, Gb, Sb, Wb));
          if (!PB(Yb)) return;
          const ab = wu.isNewPress(performance.now()),
            Hb = function(bb, ub, hb) {
              return !PB(ub) || hb ? null : cB(bb)
            }(Ob, Yb, ob.isPlayerCrouching(Gb));
          null !== Hb && ab && ob.vJ(ub, hb, Bb, Hb)
        },
        onPlayerAttemptAltAction: (bb, ub, hb, Bb, Ob) => {
          if (function(bb, ub, hb, Bb, Ob) {
              "Workbench" === Bb.split("|")[0] && bb.getClientOption(hb, "canCraft") && (cA.open("Workbench", Ob.get(), QA(bb)), ub.send("baf2station Workbench"))
            }(ob, Ab, Gb, Ob, Wb), Sl(ob, Gb, Ob)) return "preventAction";
          rb.onAltAction(ob, Gb, Ob)
        },
        onReceivedMessageFromServer: (bb, ub) => {
          if ("baf2MachineStatus" === bb) {
            var hb, Bb, Ob, Sb, ab, Hb, wb, Xb, lb, rb, jb, nb, xb, ib, Jb, eb;
            const bb = ub,
              Gb = bb.baf2MachineTaught;
            Ub.set(bb.baf2MachinePos, {
              status: bb.baf2MachineStatus,
              power: null !== (hb = bb.baf2MachinePower) && void 0 !== hb ? hb : null,
              opLeftMs: null !== (Bb = bb.baf2MachineOpLeftMs) && void 0 !== Bb ? Bb : null,
              dug: bb.baf2MachineYield ? {
                item: bb.baf2MachineYield,
                name: Kb([bb.baf2MachineYield])[bb.baf2MachineYield]
              } : null,
              powerCap: null !== (Ob = bb.baf2MachinePowerCap) && void 0 !== Ob ? Ob : null,
              powerRates: null !== (Sb = bb.baf2MachinePowerRates) && void 0 !== Sb ? Sb : null,
              coupled: !0 === bb.baf2MachineCoupled,
              couplerLevel: null !== (ab = bb.baf2MachineCoupler) && void 0 !== ab ? ab : 1,
              taught: Gb,
              taughtName: Gb ? Kb([Gb])[Gb] : null,
              tier: null !== (Hb = bb.baf2MachineTier) && void 0 !== Hb ? Hb : null,
              input: null !== (wb = bb.baf2MachineInput) && void 0 !== wb ? wb : null,
              inertCoupler: null !== (Xb = bb.baf2MachineInertCoupler) && void 0 !== Xb ? Xb : null,
              inputShort: null !== (lb = bb.baf2MachineInputShort) && void 0 !== lb ? lb : null,
              field: null !== (rb = bb.baf2MachineField) && void 0 !== rb ? rb : null,
              noSeeds: !0 === bb.baf2MachineNoSeeds,
              fuelFed: !0 === bb.baf2MachineFuelFed,
              fuelFeeds: !0 === bb.baf2MachineFuelFeeds,
              coreFull: !0 === bb.baf2MachineCoreFull,
              waterUnpowered: !0 === bb.baf2MachineWaterUnpowered,
              powerShort: !0 === bb.baf2MachinePowerShort,
              powerWait: !0 === bb.baf2MachinePowerWait,
              reactorPowered: !0 === bb.baf2MachineReactorPowered,
              fuelLeftMs: null !== (jb = bb.baf2MachineFuelLeftMs) && void 0 !== jb ? jb : null,
              burning: null !== (nb = bb.baf2MachineBurning) && void 0 !== nb ? nb : null,
              fuelKeep: null !== (xb = bb.baf2MachineFuelKeep) && void 0 !== xb ? xb : null,
              water: null !== (ib = bb.baf2MachineWater) && void 0 !== ib ? ib : null,
              farm: null !== (Jb = bb.baf2MachineFarm) && void 0 !== Jb ? Jb : null,
              cryo: null !== (eb = bb.baf2MachineCryo) && void 0 !== eb ? eb : null
            })
          } else if ("baf2StationOpen" === bb) {
            const bb = ub.baf2Station;
            au.consumeServerOpen(bb, performance.now()) || RA(ob, Gb, bb, Wb)
          } else if ("baf2Power" === bb) {
            const bb = ub;
            zb.set(bb), bb.baf2PowerOpen && (Ku({
              kind: "power"
            }), (0, lO.p)())
          } else if (bb === Qb.s) {
            const bb = ub;
            vb.set(bb), bb.baf2WaterOpen && (Ku({
              kind: "water"
            }), (0, lO.p)())
          } else if ("baf2RxPlans" === bb) {
            var Nb, sb, Pb;
            const bb = ub;
            tb.sK(bb);
            const hb = new Set(bb.baf2RxPlanList.map((bb => {
              let [ub, hb, Bb] = bb;
              return `${ub},${hb},${Bb}`
            })));
            yb.retain(hb);
            const Bb = null === (Nb = Lb.get()) || void 0 === Nb ? void 0 : Nb.kind,
              Ob = "reactor" === Bb ? null === (sb = Mb.get()) || void 0 === sb ? void 0 : sb.status.baf2RxAt : "battery" === Bb ? null === (Pb = mb.get()) || void 0 === Pb ? void 0 : Pb.status.baf2BatAt : void 0;
            Ob && Cu.has(Ob.join(",")) && !hb.has(Ob.join(",")) && Wu(), Cu = hb
          } else if ("baf2RxStatus" === bb) {
            const bb = ub;
            Mb.set(bb), bb.baf2RxOpen && (Ku({
              kind: "reactor"
            }), (0, lO.p)())
          } else if ("baf2BatStatus" === bb) {
            const bb = ub;
            mb.set(bb), bb.baf2BatOpen && (Ku({
              kind: "battery"
            }), (0, lO.p)())
          } else if ("baf2RxAlarm" === bb) yb.sK(ub);
          else if ("baf2Bomb" === bb) Fb.sK(ub, ob.getPositionView(Gb));
          else if ("baf2Fallout" === bb) Tb.sK(ub);
          else if ("baf2ColBeams" === bb) cb.onBeams(ub);
          else if ("baf2ColStatus" === bb) {
            const bb = ub;
            var qb, Eb;
            if (cb.onStatus(bb), bb.baf2ColOpen) cb.onOpen(null !== (qb = null === (Eb = ob.cub(Gb)) || void 0 === Eb ? void 0 : Eb.name) && void 0 !== qb ? qb : null), Ku({
              kind: "collider"
            }), (0, lO.p)()
          } else if ("baf2Terminal" === bb) {
            const bb = ub;
            var Vb;
            if (gb.apply(bb)) bb.baf2TermReset && (Ku({
              kind: "terminal"
            }), (0, lO.p)());
            else "terminal" === (null === (Vb = Lb.get()) || void 0 === Vb ? void 0 : Vb.kind) && (Lb.set(null), (0, lO.g)())
          } else if ("baf2Core" === bb) {
            var kb;
            const bb = ub;
            if (Yb(!0 === bb.baf2CoreNuclear), function(bb, ub) {
                return "core" === (null === bb || void 0 === bb ? void 0 : bb.kind) && ub.baf2CoreTier > bb.core.message.baf2CoreTier
              }(Lb.get(), bb)) return void(0, lO.g)();
            if (bb.baf2CoreRefresh && "core" !== (null === (kb = Lb.get()) || void 0 === kb ? void 0 : kb.kind)) return;
            Ku({
              kind: "core",
              core: pl(bb, Kb)
            }), bb.baf2CoreRefresh || (0, lO.p)()
          } else if ("baf2WrenchUndo" === bb) {
            const {
              baf2WrenchPos: bb,
              baf2WrenchBlock: hb
            } = ub;
            ob.vJ(bb[0], bb[1], bb[2], hb)
          } else if ("baf2Toast" === bb) {
            const bb = ub;
            Ib.heard(performance.now(), bb.baf2ToastMs), Cb.show(bb)
          } else if ("baf2Area" === bb) db.arrive(ub, null !== Lb.get());
          else if ("baf2Quest" === bb) {
            const bb = ub;
            Yb(!0 === bb.baf2QuestNuclear), Wb.set(bb, function(bb, ub) {
              var hb, Bb, Ob, Gb, Ub;
              const Lb = [];
              for (const [, , ab, , , , , , Hb, wb] of bb.baf2QuestSteps) null !== ab && Lb.push(ab), Lb.push(...null !== Hb && void 0 !== Hb ? Hb : [], ...null !== wb && void 0 !== wb ? wb : []);
              bb.baf2QuestReward && Lb.push(bb.baf2QuestReward);
              const Yb = null === (hb = bb.baf2QuestSide) || void 0 === hb ? void 0 : hb[2][2];
              Yb && Lb.push(Yb), Lb.push(...null !== (Bb = null === (Ob = bb.baf2QuestSide) || void 0 === Ob ? void 0 : Ob[2][8]) && void 0 !== Bb ? Bb : [], ...null !== (Gb = null === (Ub = bb.baf2QuestSide) || void 0 === Ub ? void 0 : Ub[2][9]) && void 0 !== Gb ? Gb : []);
              for (const [ab] of null !== (Sb = bb.baf2QuestAlso) && void 0 !== Sb ? Sb : []) {
                var Sb;
                Lb.push(ab)
              }
              return ub(Lb)
            }(bb, Kb)), hl(bb.baf2QuestTier)
          } else if ("baf2Route" === bb) ! function(bb, ub) {
            let {
              baf2RouteCells: hb,
              baf2RouteInto: Bb
            } = ub;
            0 !== hb.length && Bb ? bb.setRouteChevrons({
              cells: hb.map(((bb, ub) => {
                const [Ob, , Gb] = function(bb, ub, hb) {
                  const Bb = hb + 1 < bb.length ? bb[hb + 1] : ub;
                  return [Bb[0] - bb[hb][0], 0, Bb[2] - bb[hb][2]]
                }(hb, Bb, ub);
                return {
                  pos: bb,
                  way: [Ob, Gb]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : bb.setRouteChevrons(null)
          }(ob, ub);
          else if ("baf2QuestBook" === bb) Wb.setBook(ub);
          else if ("baf2Stalls" === bb) Zb.set(ub.baf2StallCells);
          else if (bb === ph.o) pb.onMoves(ub);
          else if (bb === ph.h) pb.onLines(ub);
          else if ("baf2Labels" === bb) Db.sK(ub);
          else if ("baf2DropMap" === bb) Ku({
            kind: "dropMap",
            dropMap: ub
          }), (0, lO.p)();
          else if ("baf2Islands" === bb) {
            var Rb, bu;
            const bb = ub;
            if (Ab.syncIslandEdits(bb.baf2IslandsAnswered), !bb.baf2IslandsOpen && "islands" !== (null === (Rb = Lb.get()) || void 0 === Rb ? void 0 : Rb.kind)) return;
            if (bb.baf2IslandsOpen) {
              var uu, hu;
              const ub = KO.d.get("openEverythingMenuName"),
                hb = Ab.sent() >= Xu,
                Bb = "other" !== (lu = {
                  askedAtMs: Zu,
                  askSent: hb,
                  reaskedAtMs: pu,
                  nowMs: Date.now(),
                  panel: null !== (uu = null === (hu = Lb.get()) || void 0 === hu ? void 0 : hu.kind) && void 0 !== uu ? uu : null,
                  inGameMenu: KO.d.get("openInGameMenuName"),
                  everythingMenu: null === ub ? null : ub === Hh.u.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== bb.baf2IslandsFocusInvite
                }).everythingMenu && (!!lu.focusInvite || "islands" === lu.panel && "clientGame" === lu.inGameMenu || !(lu.nowMs - lu.reaskedAtMs < iS) && (lu.askSent && lu.nowMs - lu.askedAtMs < iS ? "core" === lu.panel && "clientGame" === lu.inGameMenu && null === lu.everythingMenu : "shop" === lu.everythingMenu || null === lu.inGameMenu));
              if (hb && (Zu = -1 / 0), pu = -1 / 0, !Bb) return void Au()
            }
            const hb = (Ou = bb.baf2IslandsOpen, Su = "islands" === (null === (bu = Lb.get()) || void 0 === bu ? void 0 : bu.kind), Hu = ou, wu = Date.now(), Ou && !Su && wu - Hu < iS);
            Ku({
              kind: "islands",
              islands: bb,
              arrivedAtMs: Date.now(),
              backToCore: vS(Lb.get())
            }), hb && (ou = -1 / 0, pu = Date.now(), Ab.send(fb)), bb.baf2IslandsOpen && ("clientGame" !== KO.d.get("openInGameMenuName") && (0, WO.i)(), (0, lO.p)())
          } else if ("baf2CoopTransfer" === bb) {
            var Bu;
            const bb = ub;
            bb.baf2TransferOn ? (Ku({
              kind: "transfer",
              transfer: bb,
              arrivedAtMs: Date.now()
            }), (0, lO.p)()) : "transfer" === (null === (Bu = Lb.get()) || void 0 === Bu ? void 0 : Bu.kind) && (0, lO.g)()
          } else "baf2IslandLeft" === bb ? (db.dropHeld(), null !== Lb.get() && Wu(), "inventory" === KO.d.get("openInGameMenuName") && (0, WO.i)()) : "baf2Arc" === bb ? Gu.sK(ob, ub) : "baf2Blade" === bb ? Uu.onBlade(ob, ub) : "baf2JetFlame" === bb ? Lu.sK(ob, ub) : "baf2GearPower" === bb && Yu.sK(ub);
          var Ou, Su, Hu, wu, lu
        }
      };
      return ru
    }
  },
  38134: (bb, ub, hb) => {
    function Bb(bb, ub, hb) {
      const Bb = new Set,
        Ob = new ResizeObserver(hb),
        Gb = () => {
          const ub = new Set(document.querySelectorAll(bb));
          let Gb = !1;
          for (const bb of Bb) ub.has(bb) || (Ob.unobserve(bb), Bb.delete(bb), Gb = !0);
          for (const bb of ub) Bb.has(bb) || (Ob.observe(bb), Ub.observe(bb, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Bb.add(bb));
          Gb && hb()
        },
        Ub = new MutationObserver((ub => {
          ub.some((bb => "attributes" === bb.type)) && hb(), ub.some((ub => function(bb, ub, hb) {
            if ("childList" !== bb.type) return !1;
            for (const Bb of bb.addedNodes)
              if (Bb instanceof Element && (Bb.matches(ub) || Bb.querySelector(ub))) return !0;
            for (const Bb of bb.removedNodes)
              if (Bb instanceof Element)
                for (const bb of hb)
                  if (Bb.contains(bb)) return !0;
            return !1
          }(ub, bb, Bb))) && Gb()
        }));
      Ub.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Lb of ub) Ob.observe(Lb);
      return window.addEventListener("resize", hb), Gb(), hb(), () => {
        Ob.disconnect(), Ub.disconnect(), window.removeEventListener("resize", hb)
      }
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  38120: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      d: () => Gb
    });
    const Bb = new WeakMap;

    function Ob(bb) {
      let ub = Bb.get(bb);
      return ub || (ub = {
        hidden: bb.hidden,
        x: NaN,
        y: NaN
      }, Bb.set(bb, ub)), ub
    }

    function Gb(bb, ub) {
      const hb = Ob(bb);
      hb.hidden !== ub && (hb.hidden = ub, bb.hidden = ub)
    }

    function Ub(bb, ub, hb) {
      const Bb = Ob(bb);
      Bb.x === ub && Bb.y === hb || (Bb.x = ub, Bb.y = hb, bb.style.translate = `${ub}vw ${hb}vh`)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);