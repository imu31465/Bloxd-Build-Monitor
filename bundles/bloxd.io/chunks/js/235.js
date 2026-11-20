export const id = 235;
export const ids = [235];
export const modules = {
  38113: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(38117);
    const Wb = [0, 0, 0];
    class ab {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wb;
        this.pool = bb, this.origin = cb, this.count = 0, this.free = []
      }
      take() {
        var bb;
        const cb = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.count++;
        return cb >= this.pool.GM && this.pool.grow(Math.max(2 * this.pool.GM, cb + 1)), this.hide(cb), cb
      }
      release(bb) {
        this.hide(bb), this.free.push(bb)
      }
      write(bb, cb, sb, Wb) {
        const {
          records: ab
        } = this.pool, {
          origin: Tb
        } = this, Ub = bb * kb.b;
        ab[Ub] = cb - Tb[0], ab[Ub + 1] = sb - Tb[1], ab[Ub + 2] = Wb - Tb[2], ab[Ub + kb.e] = 0, this.pool.markDirty(bb)
      }
      hide(bb) {
        this.pool.records[bb * kb.b + kb.e] = 1, this.pool.markDirty(bb)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Tb {
      constructor(bb, cb, sb) {
        this.api = bb, this.model = cb, this.initialCapacity = sb, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(bb) {
        let cb = this.kinds.get(bb);
        if (void 0 === cb) {
          const sb = this.api.createInstancePool({
            ...this.model,
            item: bb
          }, this.initialCapacity);
          null === sb || void 0 === sb || sb.setOrigin(this.origin[0], this.origin[1], this.origin[2]), cb = sb && new ab(sb, this.origin), this.kinds.set(bb, cb)
        }
        return cb
      }
      follow(bb) {
        const {
          origin: cb
        } = this;
        if (Math.abs(bb[0] - cb[0]) <= 512 && Math.abs(bb[1] - cb[1]) <= 512 && Math.abs(bb[2] - cb[2]) <= 512) return !1;
        cb[0] = Math.floor(bb[0]), cb[1] = Math.floor(bb[1]), cb[2] = Math.floor(bb[2]);
        for (const sb of this.kinds.values()) null === sb || void 0 === sb || sb.pool.setOrigin(cb[0], cb[1], cb[2]);
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
  38126: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      g: () => Ub,
      j: () => Ib
    });
    const kb = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Wb = [0, 1, 2, 0, 2, 3],
      ab = [4, 5];

    function Tb(bb, cb, sb, kb, Wb) {
      for (let Tb = 0; Tb < 6; Tb++) ab.includes(Tb) === Wb && Hb(bb, cb, sb, kb, Tb)
    }

    function Ub(bb, cb, sb, kb) {
      for (let Wb = 0; Wb < 6; Wb++) Hb(bb, cb, sb, kb, Wb)
    }

    function Ib(bb, cb, sb, ab, Tb) {
      for (let Ub = 0; Ub < 6; Ub++)
        for (const Ib of [0, 1]) {
          const [Hb, fb, Mb] = [Ib + 2, Ib + 1, (Ib + 3) % 4], Xb = bb.length / 3;
          for (const [cb, Wb] of [
              [Ib, fb],
              [Hb, fb],
              [Hb, Mb],
              [Ib, Mb]
            ])
            for (let Ib = 0; Ib < 3; Ib++) {
              const Hb = kb[3 * (4 * Ub + cb) + Ib],
                fb = kb[3 * (4 * Ub + Wb) + Ib];
              bb.push((Hb + (fb - Hb) * Tb) * ab / 2 + sb[Ib])
            }
          for (const bb of Wb) cb.push(Xb + bb)
        }
    }

    function Hb(bb, cb, sb, ab, Tb) {
      let [Ub, Ib, Hb] = sb, [fb, Mb, Xb] = ab;
      const nb = bb.length / 3;
      for (let Wb = 4 * Tb; Wb < 4 * Tb + 4; Wb++) bb.push(kb[3 * Wb] * fb / 2 + Ub, kb[3 * Wb + 1] * Mb / 2 + Ib, kb[3 * Wb + 2] * Xb / 2 + Hb);
      for (const kb of Wb) cb.push(nb + kb)
    }
  },
  38099: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => uC
    });
    var kb = sb(64);
    const Wb = [{
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
      ab = 10;
    let Tb = !0;

    function Ub() {
      return Tb
    }

    function Ib(bb) {
      Tb = bb
    }
    const Hb = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function fb() {
      return Tb ? Wb.length : ab
    }

    function Mb(bb) {
      var cb, sb;
      return null !== (cb = null === (sb = Wb[bb - 1]) || void 0 === sb ? void 0 : sb.reactorTier) && void 0 !== cb ? cb : 0
    }

    function Xb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mb(bb) > 0;
      return sb && !Tb ? "hidden" : bb <= cb ? "open" : sb ? cb < 5 ? "hidden" : cb < ab ? "teaser" : "locked" : "locked"
    }

    function nb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: kb,
        n: Wb
      } = Qb(bb);
      return {
        key: cb[kb],
        params: {
          [kb]: sb ? String(Wb) : Wb
        }
      }
    }
    const mb = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function lb(bb, cb) {
      return Mb(bb) > 0 && cb < ab
    }

    function Qb(bb) {
      const cb = Mb(bb);
      if (cb > 0) return {
        kind: "atomic",
        n: cb,
        short: `A${cb}`
      };
      const sb = function(bb) {
        return bb >= 6 && bb <= 10 ? bb - 6 + 1 : 0
      }(bb);
      return sb > 0 ? {
        kind: "stage",
        n: sb,
        short: `S${sb}`
      } : {
        kind: "tier",
        n: bb,
        short: String(bb)
      }
    }

    function eb(bb) {
      return Wb[Math.max(1, Math.min(bb, Wb.length)) - 1]
    }

    function Cb(bb, cb) {
      return bb < cb ? function(bb) {
        var cb;
        return null !== (cb = Wb[bb]) && void 0 !== cb ? cb : null
      }(bb) : null
    }
    const Nb = "baf2coresubmit",
      Vb = "baf2corebankpause",
      Lb = "baf2coredeposit",
      ub = "baf2corechargepause";

    function Yb(bb) {
      var cb;
      return null !== (cb = bb.baf2CoreOpen) && void 0 !== cb ? cb : ab
    }
    const hb = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function Jb(bb) {
      return hb.includes(bb)
    }
    const gb = (bb, cb) => cb.map((cb => [cb, [bb]])),
      Bb = Object.fromEntries([...gb("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...gb("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...gb("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...gb("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...gb("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...gb("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...gb("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...gb("Parts Bench", ["Focus Lens"]), ...gb("Machine Bench", ["Laser", "Collider"]), ...gb("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...gb("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...gb("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...gb("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...gb("Tool Bench", ["Mob Cage"]), ...gb("Tool Bench", ["Pocket Terminal"]), ...gb("Tool Bench", ["Comet Beacon"]), ...gb("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function tb(bb) {
      var cb;
      return null !== (cb = Bb[bb]) && void 0 !== cb ? cb : ["Workbench"]
    }

    function yb(bb) {
      return tb(bb)[0]
    }
    Wb.slice(1).map(((bb, cb) => `Core Tier ${cb+2}`));
    var Pb = sb(9017);
    const Db = ["on", "hud", "off"];

    function Eb(bb) {
      return "on" === bb
    }
    var ib = sb(344);
    const Ob = "Mob Farm",
      Gb = {
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
      Kb = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Zb = {
        1: 20,
        2: 60,
        3: 120
      },
      zb = "baf2farmvoid",
      qb = "Caged ",
      db = " Spawner Block";

    function Ab(bb) {
      return `lifeform:${(0,ib.Je)(bb)}`
    }

    function wb(bb) {
      if (!bb) return null;
      if (bb.startsWith(qb)) {
        const cb = bb.slice(6);
        return Kb.includes(cb) ? cb : null
      }
      if (bb.endsWith(db)) {
        const cb = bb.slice(0, -14);
        return void 0 !== Gb[cb] ? cb : null
      }
      return null
    }

    function rb(bb) {
      return !0 === bb.mobFarm
    }

    function ob(bb, cb) {
      return Zb[Gb[cb]] * bb.opMs / 1e3
    }
    const Sb = new Map;
    const Rb = "baf2islands",
      vb = "baf2islandnew";

    function Fb(bb) {
      const cb = Wb.findIndex((cb => cb.unlocks.includes(bb)));
      return cb < 0 ? 1 : cb + 1
    }

    function xb(bb) {
      return Math.floor(bb).toLocaleString("en-US")
    }
    var jb = sb(38029);
    const pb = "baf2terminaltake",
      bc = "baf2terminalput",
      cc = ["one", "stack", "fill"];

    function sc(bb, cb, sb) {
      return `${pb} ${bb} ${cb} ${sb}`
    }

    function kc(bb, cb, sb) {
      return `${bc} ${bb} ${cb} ${sb}`
    }

    function Wc(bb) {
      return `${bc} ${bb}`
    }
    const ac = [
      [`${pb} `, "take"],
      [`${bc} `, "put"]
    ];

    function Tc(bb) {
      const cb = ac.find((cb => {
        let [sb] = cb;
        return bb.startsWith(sb)
      }));
      if (!cb) return null;
      const [sb, kb] = cb, [Wb, ab, ...Tb] = bb.slice(sb.length).trim().split(" "), Ub = Number(Wb);
      if (!Number.isSafeInteger(Ub) || Ub <= 0) return null;
      if ("put" === kb && void 0 === ab) return {
        kind: "putAll",
        seq: Ub
      };
      const Ib = function(bb) {
        if (cc.includes(bb)) return bb;
        const cb = Number(bb);
        return /^\d+$/.test(bb) && Number.isSafeInteger(cb) && cb > 0 ? cb : null
      }(null !== ab && void 0 !== ab ? ab : "");
      return null === Ib || 0 === Tb.length ? null : {
        kind: kb,
        seq: Ub,
        mode: Ib,
        item: Tb.join(" ")
      }
    }

    function Uc(bb, cb) {
      const sb = "number" === typeof bb ? bb : "one" === bb ? 1 : "stack" === bb ? 99 : cb;
      return Math.min(cb, sb)
    }

    function Ic(bb, cb) {
      const sb = bb => "number" === typeof bb ? bb : "one" === bb ? 1 : 99;
      return "fill" === bb || "fill" === cb ? "fill" : sb(bb) + sb(cb)
    }

    function Hc(bb, cb) {
      const sb = Tc(bb),
        kb = Tc(cb),
        Wb = sb && kb ? function(bb, cb) {
          return "take" === bb.kind || "take" === cb.kind ? "take" === bb.kind && "take" === cb.kind && bb.item === cb.item ? {
            ...cb,
            mode: Ic(bb.mode, cb.mode)
          } : null : "putAll" === bb.kind || "putAll" === cb.kind ? {
            kind: "putAll",
            seq: cb.seq
          } : bb.item === cb.item ? {
            ...cb,
            mode: Ic(bb.mode, cb.mode)
          } : null
        }(sb, kb) : null;
      return Wb ? "putAll" === (ab = Wb).kind ? Wc(ab.seq) : "put" === ab.kind ? kc(ab.seq, ab.mode, ab.item) : sc(ab.seq, ab.mode, ab.item) : null;
      var ab
    }
    const fc = "baf2rx";

    function Mc(bb, cb) {
      for (var sb = arguments.length, kb = new Array(sb > 2 ? sb - 2 : 0), Wb = 2; Wb < sb; Wb++) kb[Wb - 2] = arguments[Wb];
      return [fc, bb[0], bb[1], bb[2], cb, ...kb].join(" ")
    }
    const Xc = 2,
      nc = 4,
      mc = 8,
      lc = 16,
      Qc = 32,
      ec = 64,
      Cc = 128,
      Nc = 256,
      Vc = 512,
      Lc = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      uc = [{
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
    const Yc = "Biomass",
      hc = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function Jc(bb) {
      return {
        input: Yc,
        inputAmount: 1,
        output: bb,
        outputAmount: 1
      }
    }
    const gc = "baf2synth",
      Bc = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      tc = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      yc = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Pc = function(bb, cb) {
        return {
          input: bb,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: cb,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Dc = function(bb, cb) {
        return {
          ...Pc(bb, cb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      Ec = tc.map((bb => Dc(bb, "Biomass", 2))),
      ic = {
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
          recipes: [Pc("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Pc("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Pc("Raw Gold", "Gold Grit", 2), Pc("Messy Stone", "Sand"), Pc("Gravel", "Sand"), Pc("Raw Voltite", "Voltite Dust", 2), Pc("Moonstone", "Moonstone Dust", 4), Pc("Wheat Seeds", "Fertiliser"), Pc("Raw Uranium", "Uranium Grit", 2), Dc("Mossy Messy Stone", "Sand"), ...Ec],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Pc("Iron Grit", "Iron Bar"), Pc("Copper Grit", "Copper Bar"), Pc("Gold Grit", "Gold Bar"), Pc("Raw Iron", "Iron Bar"), Pc("Raw Copper", "Copper Bar"), Pc("Raw Gold", "Gold Bar"), Pc("Sand", "Glass"), Pc("Messy Stone", "Stone"), ...ib.Wc.map((bb => Pc(bb, "Charcoal", 1, 4))), Pc("Wheat", "Bread", 1, 2), ...tc.map(((bb, cb) => Dc(bb, yc[cb])))],
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
          recipes: [Pc("Iron Bar", "Iron Plate"), Pc("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Pc("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Pc("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Pc("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Pc("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Pc("Raw Gold", "Gold Grit", 3), Pc("Raw Voltite", "Voltite Dust", 3), Pc("Messy Stone", "Sand", 2), Pc("Gravel", "Sand", 2), Pc("Moonstone", "Moonstone Dust", 6), Pc("Raw Uranium", "Uranium Grit", 3), Dc("Mossy Messy Stone", "Sand", 2), ...Ec],
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
          table: Lc
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Pc("Coal", "Diamond", 1, 24), Pc("Voltite Dust", "Moonstone", 1, 12)],
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
        ...jb.j
      },
      Oc = {
        Crusher: [Pc("Spent Pellet", "Glow Dust"), Pc("Wheat Seeds", "Biomass"), Pc("Wheat", "Biomass"), Pc("Dead Bush", "Biomass"), Pc("Dusk Moss", "Biomass"), Pc("Rotten Flesh", "Biomass"), Pc("Bone", "Biomass", 2)],
        "Shatter Mill": [Pc("Spent Pellet", "Glow Dust"), Pc("Wheat Seeds", "Biomass"), Pc("Wheat", "Biomass"), Pc("Dead Bush", "Biomass"), Pc("Dusk Moss", "Biomass"), Pc("Rotten Flesh", "Biomass"), Pc("Bone", "Biomass", 2), ...ib.Wc.map((bb => Pc(bb, "Biomass")))],
        Smelter: [Pc("Biomass", "Fertiliser", 2)],
        Press: [Pc("Coal", "Graphite", 1, 4)]
      },
      Gc = "Power Coupler",
      Kc = "Advanced Coupler",
      Zc = "Nova Coupler",
      zc = [{
        item: Gc,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Kc,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: Zc,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const qc = new Map;

    function dc(bb) {
      var cb, sb;
      return null !== (cb = null !== (sb = bb.fuelSlot) && void 0 !== sb ? sb : bb.couplerSlot) && void 0 !== cb ? cb : null
    }

    function Ac(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!bb.couplable) throw new Error(`${bb.kind} takes no Power Coupler`);
      let sb = qc.get(bb);
      sb || (sb = [], qc.set(bb, sb));
      let kb = sb[cb];
      if (!kb) {
        var Wb;
        const {
          divisor: ab,
          powerPerS: Tb
        } = zc[cb - 1], Ub = bb.opMs / ab, Ib = void 0 !== bb.fluidMade || void 0 !== bb.cryoMade ? bb.powerPerOp : Tb * Ub / 1e3;
        kb = {
          ...bb,
          fuelSlot: null,
          couplerSlot: null !== (Wb = dc(bb)) && void 0 !== Wb ? Wb : void 0,
          opMs: Ub,
          powerPerOp: Ib,
          coupled: !0
        }, cb > 1 && (kb = {
          ...kb,
          couplerLevel: cb
        }), sb[cb] = kb
      }
      return kb
    }
    const wc = new Map;
    const rc = new Map;

    function oc(bb, cb) {
      if (null === cb || (sb = cb, !hc.includes(sb))) return bb;
      var sb;
      let kb = rc.get(cb);
      return kb || (kb = {
        ...bb,
        recipes: [Jc(cb)]
      }, rc.set(cb, kb)), kb
    }

    function Sc(bb) {
      return !0 === bb.synth
    }
    const Rc = (bb, cb, sb, kb) => ({
        output: bb,
        outputAmount: cb,
        tier: sb,
        inputs: kb.map((bb => {
          let [cb, sb] = bb;
          return {
            item: cb,
            amount: sb
          }
        }))
      }),
      vc = Object.fromEntries([Rc("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), Rc("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), Rc("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Rc("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), Rc("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), Rc("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), Rc("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), Rc("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), Rc("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), Rc("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), Rc("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), Rc("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), Rc("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), Rc("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), Rc("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Rc("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), Rc("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Rc("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), Rc("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Rc("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), Rc("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), Rc("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), Rc("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), Rc("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), Rc("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), Rc("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), Rc("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), Rc("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), Rc("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), Rc("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((bb => [bb.output, bb]))),
      Fc = new Map;

    function xc(bb, cb) {
      let sb = ic[bb];
      if (cb.atomic && (sb = function(bb) {
          const cb = Oc[bb.kind];
          if (!cb) return bb;
          let sb = wc.get(bb.kind);
          if (!sb) {
            const kb = new Set(cb.map((bb => bb.input))),
              Wb = bb.recipes.filter((bb => !kb.has(bb.input)));
            sb = {
              ...bb,
              recipes: [...Wb, ...cb]
            }, wc.set(bb.kind, sb)
          }
          return sb
        }(sb)), sb.synth) return oc(sb, cb.taught);
      if (cb.coupled && sb.couplable) return Ac(sb, cb.level);
      const kb = sb.inputSlots && null !== cb.taught ? vc[cb.taught] : void 0;
      if (!kb) return sb;
      const Wb = `${bb}|${kb.output}`;
      let ab = Fc.get(Wb);
      return ab || (ab = {
        ...sb,
        bench: kb
      }, Fc.set(Wb, ab)), ab
    }
    const jc = ["Diamond", "Moonstone"];

    function pc(bb) {
      return new Set(bb.flatMap((bb => bb.bonus ? [bb.output, bb.bonus.item] : [bb.output])).filter((bb => !jc.includes(bb))))
    }
    const bs = Object.values(ic).flatMap((bb => bb.recipes));
    pc(bs.filter((bb => !0 !== bb.nuclear))), pc([...bs.filter((bb => !0 === bb.nuclear)), ...Object.values(Oc).flat()]);

    function cs(bb) {
      return null === bb.inputSlot && void 0 === bb.inputSlots && void 0 === bb.powerMade && void 0 === bb.fluidMade && !bb.treeCutter && void 0 === bb.table
    }

    function ss(bb) {
      return !0 === bb.treeCutter
    }
    const ks = ["Voltite Cell"];

    function Ws(bb) {
      var cb, sb;
      return null !== (cb = null === (sb = bb.fuels) || void 0 === sb ? void 0 : sb.some((bb => ks.includes(bb)))) && void 0 !== cb && cb
    }
    const as = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(ib.Wc.map((bb => [bb, 8e3]))),
        ...Object.fromEntries(ib.Ld.map((bb => [bb, 2e3]))),
        "Voltite Cell": 12e4
      },
      Ts = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Us = {
        "Uranium Deposit": 4e3
      };

    function Is(bb) {
      var cb;
      return null !== (cb = Object.keys(Ts).find((cb => Ts[cb] === bb))) && void 0 !== cb ? cb : null
    }

    function Hs(bb) {
      return Bc.includes(bb)
    }

    function fs(bb) {
      return !0 !== bb.nuclear || Ub()
    }
    var Ms = sb(334);
    var Xs = sb(9091),
      ns = sb(9030),
      ms = sb(9096),
      ls = sb(9084);
    const Qs = "Reactor Controller",
      es = "Reactor Port",
      Cs = "Battery Cell",
      Ns = ["fuel", "water", "waste"],
      Vs = {
        fuel: es,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Ls = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      us = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Ys = "Reactor Frame",
      hs = "Reactor Glass",
      gs = {
        edge: [Ys],
        cap: [hs, es],
        wall: [hs, es],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Qs]
      },
      Bs = {
        edge: [Cs],
        cap: [Cs],
        wall: [Cs],
        inside: [Cs],
        ctrl: [Cs]
      },
      ts = ["edge", "cap", "wall", "inside"],
      ys = ["Reactor Slag"];

    function Ps(bb) {
      return ys.includes(Ds(bb))
    }

    function Ds(bb) {
      const cb = bb.indexOf("|");
      return cb < 0 ? bb : bb.slice(0, cb)
    }

    function Es(bb) {
      return Ds(bb) === Qs ? "reactor" : null
    }

    function is(bb) {
      return Ds(bb) !== es ? null : bb.endsWith("|Water") ? "water" : bb.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Os(bb) {
      const cb = is(bb);
      return null === cb ? null : Zs(Vs[Ns[(Ns.indexOf(cb) + 1) % Ns.length]], function(bb) {
        return bb.includes(Gs)
      }(bb))
    }
    const Gs = "|meta|rot1|Formed",
      Ks = new Set([Ys, hs, es]);

    function Zs(bb, cb) {
      var sb;
      const kb = Ds(bb);
      if (!Ks.has(kb)) return bb;
      if (kb !== es) return cb ? kb + Gs : kb;
      const Wb = null !== (sb = is(bb)) && void 0 !== sb ? sb : "fuel";
      return cb ? "fuel" === Wb ? kb + Gs : `${kb}${Gs}|${"water"===Wb?"Water":"Waste"}` : Vs[Wb]
    }

    function zs(bb, cb) {
      const sb = ak(bb, cb);
      if ("Air" === sb) return !1;
      const kb = "reactor" === bb ? gs : Bs;
      return ts.some((bb => kb[bb].includes(sb))) || "reactor" === bb && ys.includes(sb)
    }

    function qs(bb) {
      return us[bb]
    }

    function ds(bb) {
      var cb;
      return null !== (cb = Ls[bb]) && void 0 !== cb ? cb : Ls[1]
    }

    function As(bb) {
      const [cb, , sb] = ds(bb);
      return [sb, 0, -cb]
    }

    function ws(bb, cb, sb, kb, Wb, ab) {
      return {
        ctrl: [bb[0], bb[1], bb[2]],
        rot: Ls[cb] ? cb : 1,
        w: sb,
        h: kb,
        d: Wb,
        cu: ab[0],
        cv: ab[1]
      }
    }

    function rs(bb, cb) {
      return "reactor" === bb ? [Math.floor((cb - 1) / 2), 0] : [0, 0]
    }

    function os(bb, cb, sb, kb, Wb) {
      let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb.rot;
      if (sb === bb.w && kb === bb.h && Wb === bb.d && ab === bb.rot) return bb;
      const [Tb] = rs(cb, bb.w);
      if (bb.cu === Tb && bb.cv <= 1) return ws(bb.ctrl, ab, sb, kb, Wb, rs(cb, sb));
      const Ub = (bb, cb) => Math.max(1, Math.min(cb, bb));
      return ws(bb.ctrl, ab, sb, kb, Wb, [Ub(bb.cu, sb - 2), 0 === bb.cv ? 0 : Ub(bb.cv, kb - 2)])
    }
    const Ss = 11,
      Rs = 2 * Ss + 1;
    new Uint8Array(Rs * Rs * Rs);

    function vs(bb) {
      return bb.w * bb.h * bb.d
    }

    function Fs(bb) {
      const cb = As(bb.rot);
      return [bb.ctrl[0] - cb[0] * bb.cu, bb.ctrl[1] - bb.cv, bb.ctrl[2] - cb[2] * bb.cu]
    }

    function xs(bb) {
      return bb.cv * bb.d * bb.w + bb.cu
    }

    function ps(bb, cb) {
      const sb = cb % bb.w,
        kb = Math.floor(cb / bb.w) % bb.d;
      return [sb, Math.floor(cb / (bb.w * bb.d)), kb]
    }

    function bk(bb, cb) {
      const [sb, kb, Wb] = ps(bb, cb), ab = Fs(bb), Tb = ds(bb.rot), Ub = As(bb.rot);
      return [ab[0] + Ub[0] * sb - Tb[0] * Wb, ab[1] + kb, ab[2] + Ub[2] * sb - Tb[2] * Wb]
    }

    function ck(bb, cb) {
      const sb = Fs(bb),
        kb = ds(bb.rot),
        Wb = As(bb.rot),
        ab = cb[0] - sb[0],
        Tb = cb[2] - sb[2],
        Ub = ab * Wb[0] + Tb * Wb[2],
        Ib = -(ab * kb[0] + Tb * kb[2]),
        Hb = cb[1] - sb[1];
      return Ub < 0 || Ub >= bb.w || Hb < 0 || Hb >= bb.h || Ib < 0 || Ib >= bb.d ? -1 : (Hb * bb.d + Ib) * bb.w + Ub
    }

    function sk(bb, cb) {
      if (cb === xs(bb)) return "ctrl";
      const [sb, kb, Wb] = ps(bb, cb), ab = 0 === kb || kb === bb.h - 1, Tb = Number(0 === sb || sb === bb.w - 1) + Number(ab) + Number(0 === Wb || Wb === bb.d - 1);
      return Tb >= 2 ? "edge" : 1 === Tb ? ab ? "cap" : "wall" : "inside"
    }

    function kk(bb, cb) {
      const [sb, kb, Wb] = ps(bb, cb);
      return 0 === sb || sb === bb.w - 1 || 0 === kb || kb === bb.h - 1 || 0 === Wb || Wb === bb.d - 1 ? -1 : ((kb - 1) * (bb.d - 2) + (Wb - 1)) * (bb.w - 2) + (sb - 1)
    }

    function Wk(bb, cb) {
      const sb = bb.w - 2,
        kb = bb.d - 2,
        Wb = cb % sb + 1,
        ab = Math.floor(cb / sb) % kb + 1;
      return ((Math.floor(cb / (sb * kb)) + 1) * bb.d + ab) * bb.w + Wb
    }

    function ak(bb, cb) {
      const sb = Ds(cb);
      return "reactor" === bb && sb === Qs ? Ys : sb
    }

    function Tk(bb, cb, sb) {
      const kb = "ctrl" === cb ? Ds(sb) : ak(bb, sb);
      return ("reactor" === bb ? gs : Bs)[cb].includes(kb) ? "ok" : "Air" === kb ? "missing" : zs(bb, sb) ? "wrong" : "blocked"
    }

    function Uk(bb, cb) {
      return "battery" === bb ? Cs : "inside" === cb ? null : function(bb, cb) {
        if ("inside" === cb || "ctrl" === cb || "battery" === bb) return null;
        return "edge" === cb ? Ys : hs
      }(bb, cb)
    }
    const Ik = {
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
      Hk = "Collider",
      fk = "Laser",
      Mk = "Star Alloy",
      Xk = "Glow Dust",
      nk = [Hk, "_Collider Focus"];

    function mk(bb) {
      return nk.indexOf(Ds(bb))
    }

    function lk(bb) {
      return Ds(bb) === fk
    }

    function Qk(bb) {
      return [
        [bb[0], bb[1], bb[2]],
        [bb[0], bb[1] + 1, bb[2]]
      ]
    }
    const ek = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Ck(bb, cb, sb) {
      const kb = ek[cb];
      return [bb[0] + kb[0] * sb, bb[1], bb[2] + kb[2] * sb]
    }

    function Nk(bb, cb) {
      if (cb[1] !== bb[1]) return null;
      const sb = cb[0] - bb[0],
        kb = cb[2] - bb[2];
      if (0 !== sb === (0 !== kb)) return null;
      const Wb = Math.abs(sb + kb);
      if (Wb > Ik.LASER_D) return null;
      return {
        dir: kb < 0 ? 0 : sb > 0 ? 1 : kb > 0 ? 2 : 3,
        VU: Wb
      }
    }

    function Vk(bb, cb, sb) {
      const kb = cb => Math.abs(bb[0] - cb[0]) <= 1 && Math.abs(bb[1] - cb[1]) <= 1;
      return kb(cb) || kb(sb)
    }

    function Lk(bb, cb) {
      return function(bb, cb, sb, kb) {
        return [0, 1, 2, 3].map((Wb => {
          for (let ab = 1; ab <= Ik.LASER_D; ab++) {
            const Tb = Ck(bb, Wb, ab);
            if (Vk([Tb[0], Tb[2]], cb, sb) || !kb(Tb)) return !1
          }
          return !0
        }))
      }(Qk(bb)[1], cb.spawnXZ, cb.coreXZ, (bb => bb[1] >= Xs.p && bb[1] < Xs.p + Xs.s && bb[0] >= cb.minXZ[0] && bb[0] <= cb.maxXZ[0] && bb[2] >= cb.minXZ[1] && bb[2] <= cb.maxXZ[1]))
    }
    const uk = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Yk(bb) {
      return Math.max(48 + 16 * bb, eb(bb).machineAllowance)
    }
    const hk = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function Jk(bb) {
      const cb = bb.split("|")[0];
      return hk.includes(cb) ? "Solar Panel" : cb === ms.e ? "Fluid Pipe" : mk(cb) >= 0 ? "Collider" : (sb = cb, uk.includes(sb) ? cb : null);
      var sb
    }
    const gk = "buildAFactory2Game:solarPanelDescription";
    const Bk = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function tk(bb, cb) {
      var sb;
      return null !== (sb = Bk.find((sb => {
        var kb;
        return (null !== (kb = bb.level(sb)) && void 0 !== kb ? kb : 0) >= cb
      }))) && void 0 !== sb ? sb : null
    }
    const yk = "buildAFactory2Game:";
    let Pk = null;
    const Dk = {
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
      Ek = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      ik = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      Ok = {
        "Loot Chest": `${yk}lookRuinChestName`
      };

    function Gk(bb) {
      return "object" === typeof bb && null !== bb && "translationKey" in bb && "string" === typeof bb.translationKey ? bb.translationKey : null
    }

    function Kk(bb, cb) {
      var sb;
      return null !== (sb = Gk(bb.displayName(cb))) && void 0 !== sb ? sb : `item:${(0,ib.Je)(cb)}`
    }

    function Zk(bb, cb) {
      var sb, kb, Wb, ab;
      let Tb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cb;
      if ("Solar Panel" === Jk(cb)) return {
        name: Gk(bb.displayName("Solar Panel")),
        detail: gk,
        detailItem: null
      };
      const Ib = cb.endsWith(" Ore"),
        Hb = (Pk ??= new Set([...Object.keys((0, ns.i)()), ...Object.keys((0, ms.q)())].map((bb => bb.split("|")[0]))), Pk).has(cb),
        fb = Ib || Hb ? null : function(bb) {
          var cb;
          return bb.endsWith(" Log") && !bb.startsWith("Barkless ") ? "lookLog" : bb.endsWith(" Sapling") ? "lookSapling" : bb.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (cb = Dk[bb]) && void 0 !== cb ? cb : null
        }(cb);
      if (!bb.isBlock(cb) || !Ib && !Hb && null === fb) return null;
      const Mb = null !== (sb = null !== (kb = Ok[cb]) && void 0 !== kb ? kb : Gk(null !== (Wb = bb.displayName(Tb)) && void 0 !== Wb ? Wb : bb.displayName(cb))) && void 0 !== sb ? sb : `item:${(0,ib.Je)(cb)}`;
      if (null !== fb) return {
        name: Mb,
        detail: `${yk}${fb}`,
        detailItem: null
      };
      const Xb = null !== (ab = Ek[cb]) && void 0 !== ab ? ab : Ub() ? ik[cb] : void 0;
      if (Hb && void 0 !== Xb) return {
        name: Mb,
        detail: `${yk}${Xb}`,
        detailItem: null
      };
      const nb = Ts[cb];
      if (void 0 !== nb) return {
        name: Mb,
        detail: `${yk}lookDeposit`,
        detailItem: Kk(bb, nb)
      };
      const mb = bb.harvestLevel(cb);
      if (Ib && "rock" === bb.harvestType(cb) && 0 !== mb) {
        const cb = tk(bb, null !== mb && void 0 !== mb ? mb : 0);
        if (cb === Bk[0]) return {
          name: Mb,
          detail: `${yk}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== cb) return {
          name: Mb,
          detail: `${yk}lookPickaxe`,
          detailItem: Kk(bb, cb)
        }
      }
      return {
        name: Mb,
        detail: Gk(bb.description(cb)),
        detailItem: null
      }
    }

    function zk(bb) {
      return bb < Xs.p - 24
    }
    const qk = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const dk = "Wrench",
      Ak = "Nova Wrench";

    function wk(bb) {
      return bb === dk || bb === Ak
    }
    const rk = [...Xs.E, "Belt Lift", "Belt Drop"];
    const Sk = ["Belt Lift", "Belt Drop"],
      Rk = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function vk(bb) {
      return bb.split("|")[0]
    }

    function Fk(bb) {
      const cb = /\|rot(\d)/.exec(bb);
      return cb ? Number(cb[1]) : 1
    }

    function xk(bb) {
      return bb % 4 + 1
    }

    function jk(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === cb && "" === sb ? bb : `${bb}|meta|rot${cb}${sb}`
    }

    function pk(bb) {
      return vk(bb) === Xs.x ? (0, Xs.M)(bb) ? "gateRight" : "gateLeft" : (0, Xs.P)(bb)
    }

    function bW(bb) {
      const cb = vk(bb),
        sb = Fk(bb);
      if (Xs.E.includes(cb)) return (0, Xs.H)(cb, xk(sb), null);
      if (cb === Xs.h) return (0, Xs.T)(xk(sb), (0, Xs.N)(bb));
      if (cb === Xs.z) {
        const kb = Rk[(0, Xs.P)(bb)];
        return null === kb ? jk(cb, xk(sb)) : jk(cb, sb, Xs.B[kb])
      }
      return cb === Xs.x ? (0, Xs.M)(bb) ? jk(cb, xk(sb)) : jk(cb, sb, Xs.l) : ls.c.includes(cb) && !Sk.includes(cb) || Hs(cb) ? jk(cb, xk(sb)) : null
    }

    function cW(bb) {
      return ls.c.includes(bb) || Hs(bb) || null !== Jk(bb)
    }

    function sW(bb) {
      return "Solar Panel" === Jk(bb)
    }
    const kW = "buildAFactory2Game:",
      WW = {
        leftFront: `${kW}lookSplitDetail_leftFront`,
        frontRight: `${kW}lookSplitDetail_frontRight`,
        gateRight: `${kW}lookGateDetail_gateRight`
      };

    function aW(bb, cb) {
      var sb;
      let kb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Wb = pk(bb),
        ab = null === Wb ? null : `${kW}${Wb.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Wb}`,
        Tb = null === Wb ? null : null !== (sb = WW[Wb]) && void 0 !== sb ? sb : null;
      if (wk(cb) && kb) {
        const sb = vk(bb);
        return cb === Ak && Ub() && function(bb) {
          return rk.includes(vk(bb))
        }(bb) ? {
          mode: ab,
          detail: Tb,
          next: `${kW}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: ab,
          detail: Tb,
          next: cW(sb) && !sW(sb) ? `${kW}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Ib = wk(cb) ? bW(bb) : null;
      if (null === Ib) return {
        mode: ab,
        detail: Tb,
        next: null,
        nextState: null
      };
      const Hb = pk(Ib);
      return null === Hb || Fk(Ib) !== Fk(bb) ? {
        mode: ab,
        detail: Tb,
        next: `${kW}lookWrenchTurn`,
        nextState: null
      } : {
        mode: ab,
        detail: Tb,
        next: `${kW}lookWrenchNext`,
        nextState: `${kW}lookWrenchState_${Hb}`
      }
    }
    const TW = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const UW = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function IW(bb) {
      return [0, 1, 2, 3].map((cb => 0 !== (bb & 1 << cb)))
    }

    function HW(bb) {
      const cb = [];
      for (let sb = 8; sb + 2 < bb.length; sb += 3) cb.push([bb[sb], bb[sb + 1], bb[sb + 2]]);
      return {
        focus: [bb[0], bb[1], bb[2]],
        lasers: IW(bb[3]),
        open: IW(bb[4]),
        live: IW(bb[5]),
        on: 1 === bb[6],
        state: UW[bb[7]],
        blockers: cb
      }
    }
    const fW = "Arc Caster",
      MW = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      XW = (Object.values(MW), "Jet Chestplate"),
      nW = "Nova Jet Chestplate",
      mW = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      lW = Object.values(mW);

    function QW(bb, cb, sb) {
      return Math.min(function(bb) {
        return Ub() && Mb(bb) >= 5 ? 20 : 10
      }(sb), Math.floor(function(bb, cb) {
        return Math.max(0, bb) + (Ub() ? Math.max(0, cb) : 0)
      }(bb, cb) / 5))
    }

    function eW(bb, cb, sb) {
      const kb = QW(cb, sb, bb),
        Wb = Mb(bb),
        ab = (Wb >= 3 ? 55 : Wb >= 1 ? 50 : bb >= 8 ? 45 : 30) + kb,
        Tb = Math.max(100 + kb, 2 * ab);
      return {
        arcDamage: ab,
        arcPierce: bb >= 7 ? 2 : 1,
        arcChain: bb >= 10,
        barrierMax: (Wb >= 4 ? 100 : Wb >= 2 ? 90 : bb >= 9 ? 80 : bb >= 6 ? 60 : 40) + 5 * kb,
        barrierRegenPerS: Wb >= 5 ? 20 : bb >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * kb,
        novaShieldRegenPerS: 32,
        bladeDamage: Tb,
        bladePunch: Math.round(.5 * Tb),
        forgeRank: kb
      }
    }
    const CW = {
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
    var NW = sb(36410),
      VW = sb(36247),
      LW = sb(36240),
      uW = sb(19),
      YW = sb(1626),
      hW = sb(1033),
      JW = sb.n(hW);

    function gW(bb) {
      return !0 === bb.field
    }
    const BW = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function tW(bb) {
      return BW.has(bb) ? `buildAFactory2Game:itemPlural_${(0,ib.Je)(bb)}` : null
    }
    var yW = sb(1197),
      PW = sb(1039),
      DW = sb(1858),
      EW = sb(1839),
      iW = sb(36397),
      OW = sb(36404),
      GW = sb(26),
      KW = sb(36394);
    const ZW = "baf2QuestView",
      zW = "baf2PlayerY",
      qW = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class dW {
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
      set(bb, cb) {
        var sb, kb, Wb, ab, Tb, Ub, Ib, Hb;
        const fb = JSON.stringify(bb.baf2QuestName) === JSON.stringify(this.view.name),
          Mb = new Set(this.view.rows.filter((bb => bb.done)).map((bb => bb.id))),
          Xb = new Set(this.view.rows.filter((bb => bb.justFinished)).map((bb => bb.id))),
          nb = bb.baf2QuestSide,
          mb = null !== nb && !0 === bb.baf2QuestSideFocus;
        let lb = !1,
          Qb = 0;
        const eb = bb.baf2QuestSteps.map((bb => {
            const cb = FW(bb, qW.has(bb[0]) ? bb[0] : "" + Qb++),
              sb = fb && cb.done && !Mb.has(cb.id);
            return cb.justFinished = sb || fb && cb.done && Xb.has(cb.id), lb ||= sb, cb
          })),
          Cb = vW(eb);
        Cb >= 0 && !mb && (eb[Cb].current = !0);
        const Nb = !fb && null !== bb.baf2QuestName,
          Vb = JSON.stringify(nb && [nb[0], nb[1]]),
          Lb = Vb === JSON.stringify(null !== (sb = null === (kb = this.view.side) || void 0 === kb ? void 0 : kb.name) && void 0 !== sb ? sb : null),
          ub = null !== nb && !this.sidesSeen.has(Vb);
        ub && this.sidesSeen.add(Vb), this.serverTutorial = null !== (Wb = bb.baf2QuestTutorial) && void 0 !== Wb ? Wb : "on", (null !== (ab = bb.baf2QuestTutorialSeq) && void 0 !== ab ? ab : 0) >= this.pickSeq && this.endPick();
        const Yb = !fb || !Lb || bb.baf2QuestTier !== this.view.tier;
        this.view = {
          name: bb.baf2QuestName,
          rows: eb,
          reward: bb.baf2QuestReward,
          goal: bb.baf2QuestGoal,
          pulse: this.view.pulse + (lb || Nb ? 1 : 0),
          itemNames: cb,
          side: nb && {
            name: [nb[0], nb[1]],
            row: {
              ...FW(nb[2], "side"),
              current: mb
            },
            goal: null !== (Tb = nb[3]) && void 0 !== Tb ? Tb : null
          },
          sideCameUpAt: ub ? Date.now() : this.view.sideCameUpAt,
          tier: bb.baf2QuestTier,
          core: bb.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (Ub = bb.baf2QuestAlso) && void 0 !== Ub ? Ub : [],
          depth: null !== (Ib = bb.baf2QuestDepth) && void 0 !== Ib ? Ib : null,
          tutorial: null !== (Hb = this.pickedTutorial) && void 0 !== Hb ? Hb : this.serverTutorial,
          tutorialKnown: !0
        }, this.QQ(), lb && this.scheduleClear(), Yb && this.requestBook()
      }
      setTutorial(bb) {
        return this.endPick(), this.pickedTutorial = bb, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.QQ()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: bb
        }, this.QQ(), this.pickSeq
      }
      onPlayerY(bb) {
        const cb = Math.floor(bb);
        cb !== this.playerY && (this.playerY = cb, this.view.depth && GW.j.QQ(zW, cb))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(bb) {
        this.view = {
          ...this.view,
          chapters: bb.baf2BookChapters
        }, this.QQ()
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
          }, this.QQ()
        }), 2400)
      }
      QQ() {
        GW.j.QQ(ZW, this.view, !0)
      }
    }

    function AW(bb, cb) {
      return bb.sideCameUpAt > 0 && cb - bb.sideCameUpAt < 2400
    }

    function wW(bb) {
      return (null === bb.name || rW(bb)) && null === bb.side && null !== bb.chapters
    }

    function rW(bb) {
      var cb;
      return "quest_forgeOngoing" === (null === (cb = bb.name) || void 0 === cb ? void 0 : cb[0])
    }

    function oW(bb) {
      return bb.filter((bb => !qW.has(bb.key)))
    }

    function SW(bb) {
      return bb.key.startsWith("stepCraft")
    }

    function RW(bb, cb) {
      const sb = new Set,
        kb = bb.side ? [...bb.rows, bb.side.row] : bb.rows;
      for (const ab of kb)
        if (!ab.done) {
          !ab.item || cb && !SW(ab) || sb.add(ab.item);
          for (const [bb, cb, kb] of null !== (Wb = ab.chips) && void 0 !== Wb ? Wb : []) {
            var Wb;
            cb < kb && sb.add(bb)
          }
        } return sb
    }

    function vW(bb) {
      const cb = bb.findIndex((bb => !bb.done && !bb.away));
      return cb >= 0 ? cb : bb.findIndex((bb => !bb.done))
    }

    function FW(bb, cb) {
      let [sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb] = bb;
      return {
        id: cb,
        key: sb,
        params: kb,
        item: Wb,
        amount: ab,
        total: Tb,
        done: Ub,
        chips: null !== Ib && void 0 !== Ib ? Ib : null,
        current: !1,
        away: !0 === Hb,
        madeFor: null !== fb && void 0 !== fb ? fb : [],
        also: null !== Mb && void 0 !== Mb ? Mb : [],
        justFinished: !1
      }
    }
    const xW = "baf2QuestItems",
      jW = new Set;
    let pW = new Set,
      ba = null;

    function ca(bb) {
      const cb = Eb(bb.tutorial),
        sb = cb ? RW(bb, !0) : jW;
      "inventory" === uW.d.get("openInGameMenuName") ? (ba = null, (0, KW.w)(sb)) : ba = sb;
      const kb = cb ? RW(bb, !1) : jW;
      (0, OW.d)(kb, pW) || (pW = kb, GW.j.QQ(xW, pW))
    }

    function sa() {
      return (0, iW.b)(xW, (() => pW))
    }
    var ka = sb(8942),
      Wa = sb(3050);

    function aa(bb) {
      const cb = (0, Wa.b)(bb),
        sb = void 0 === cb ? void 0 : (0, ka.displayNameOf)(cb);
      return "object" === typeof sb && null !== sb && "translationKey" in sb && "string" === typeof sb.translationKey ? sb.translationKey : `item:${(0,ib.Je)(bb)}`
    }

    function Ta(bb, cb) {
      return bb(aa(cb))
    }
    const Ua = [{
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

    function Ia(bb, cb) {
      return [`Deposit Seed (${bb})`, {
        item: Ts[`${bb} Deposit`],
        amount: cb
      }]
    }
    const Ha = Object.fromEntries([Ia("Coal", 8), Ia("Iron", 8), Ia("Copper", 8), Ia("Gold", 6), Ia("Voltite", 4), Ia("Uranium", 4)]),
      fa = "Relay Coil",
      Ma = new Map;

    function Xa(bb) {
      let cb = Ma.get(bb);
      if (!cb) {
        const sb = Math.max(1, bb);
        cb = Ua.filter((bb => {
          var cb;
          return sb >= bb.fromTier && sb <= (null !== (cb = bb.untilTier) && void 0 !== cb ? cb : 1 / 0)
        })).map((bb => bb.later && sb >= bb.later.tier ? {
          ...bb,
          weight: bb.later.weight
        } : bb)), Ma.set(bb, cb)
      }
      return cb
    }

    function na(bb) {
      return Xa(bb).some((bb => {
        let {
          item: cb
        } = bb;
        return cb === fa
      }))
    }

    function ma(bb) {
      return bb.startsWith("Deposit Seed (")
    }

    function la(bb, cb) {
      const sb = Xa(bb);
      return cb ? sb.filter((bb => cb(bb.item))) : sb
    }

    function Qa(bb) {
      return bb.reduce(((bb, cb) => bb + cb.weight), 0)
    }

    function ea(bb, cb) {
      const sb = la(bb, cb),
        kb = Qa(sb);
      return sb.map((bb => ({
        find: bb,
        chance: bb.weight / kb
      })))
    }
    const Ca = 6e4,
      Na = new Intl.NumberFormat("en-US");

    function Va(bb, cb) {
      const sb = bb >= 10 ? Math.round(bb) : Math.round(10 * bb) / 10;
      return 0 === sb ? "0" : `${cb}${Na.format(sb)}`
    }

    function La(bb) {
      return bb < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Na.format(bb) : bb < 1e6 ? `${bb<1e5?Math.floor(bb/100)/10:Math.floor(bb/1e3)}k` : Math.floor(bb / 1e5) / 10 + "M"
    }

    function ua(bb) {
      return bb < 0 ? "\u2212" + -bb : String(bb)
    }

    function Ya(bb, cb) {
      const sb = Math.max(1, Math.round(cb));
      if (sb < 60) return bb("buildAFactory2Game:durationSeconds", {
        seconds: String(sb)
      });
      const kb = Math.round(sb / 60);
      if (kb < 60) return bb("buildAFactory2Game:durationMinutes", {
        minutes: String(kb)
      });
      const Wb = String(Math.floor(kb / 60));
      return kb % 60 === 0 ? bb("buildAFactory2Game:durationWholeHours", {
        hours: Wb
      }) : bb("buildAFactory2Game:durationHours", {
        hours: Wb,
        minutes: String(kb % 60)
      })
    }
    const ha = "(max-height: 420px), (max-width: 650px)";

    function Ja() {
      return "undefined" !== typeof window && window.matchMedia(ha).matches
    }

    function ga(bb) {
      const cb = window.matchMedia(ha),
        sb = () => {
          bb(cb.matches)
        };
      return cb.addEventListener("change", sb), () => {
        cb.removeEventListener("change", sb)
      }
    }
    var Ba = sb(1087);

    function ta(bb, cb) {
      return null !== bb && bb > cb + 1
    }

    function ya(bb) {
      const cb = 100 * bb;
      return String(cb <= 0 || cb >= 1 ? Math.round(cb) : Math.max(.1, Math.round(10 * cb) / 10))
    }

    function Pa(bb) {
      let {
        item: cb,
        amount: sb
      } = bb;
      return (0, Ba.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Ba.jsx)(DW.d, {
            itemName: cb,
            amount: 0
          })
        }), sb > 1 && (0, Ba.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", sb]
        })]
      })
    }

    function Da(bb) {
      let {
        label: cb,
        names: sb
      } = bb;
      const [Wb, ab] = (0, kb.useState)(!1), Tb = sb.join(" / ");
      return (0, Ba.jsxs)(Ba.Fragment, {
        children: [(0, Ba.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Tb,
          "aria-expanded": Wb,
          onClick: () => {
            ab(!Wb)
          },
          children: cb
        }), Wb && (0, Ba.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Tb
        })]
      })
    }

    function Ea(bb) {
      let {
        tier: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)(), {
        key: kb,
        params: Wb
      } = nb(cb, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), ab = sb(`buildAFactory2Game:${kb}`, Wb);
      return (0, Ba.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Ba.jsx)(PW.b, {
          name: "lock"
        }), ab]
      })
    }
    const ia = (0, kb.createContext)(null);

    function Oa() {
      const {
        t: bb
      } = (0, yW.E)(), cb = (0, kb.useContext)(ia);
      return (0, kb.useEffect)((() => null === cb || void 0 === cb ? void 0 : cb()), [cb]), (0, Ba.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: bb("buildAFactory2Game:recipeForQuest"),
        "aria-label": bb("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Ga(bb) {
      let {
        title: cb,
        count: sb,
        children: Wb,
        startOpen: ab = !0
      } = bb;
      const {
        t: Tb
      } = (0, yW.E)(), [Ub, Ib] = (0, kb.useState)((() => ab && !Ja())), [Hb, fb] = (0, kb.useState)(0), Mb = (0, kb.useCallback)((() => (fb((bb => bb + 1)), () => {
        fb((bb => bb - 1))
      })), []);
      return (0, Ba.jsxs)("div", {
        className: JW()("Baf2Recipes", {
          Open: Ub
        }),
        children: [(0, Ba.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Ib(!Ub)
          },
          "aria-expanded": Ub,
          children: [Tb("buildAFactory2Game:recipesToggle", {
            title: cb,
            count: String(sb)
          }), (0, Ba.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: Ub ? "\u25be" : "\u25b8"
          })]
        }), Ub && (0, Ba.jsxs)(ia.Provider, {
          value: Mb,
          children: [(0, Ba.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Wb
          }), Hb > 0 && (0, Ba.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Ba.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Tb("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Ka = "buildAFactory2Game:",
      Za = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const za = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      qa = {
        "Uranium Grit": ab,
        "Raw Uranium": ab
      };

    function da(bb) {
      var cb;
      return null !== (cb = qa[bb]) && void 0 !== cb ? cb : Math.max(Fb(bb), za[bb] ? Fb(za[bb]) : 1, function(bb) {
        const cb = Wb.findIndex((cb => cb.cost.some((cb => cb.item === bb))));
        return cb > ab ? cb : 1
      }(bb))
    }

    function Aa(bb, cb) {
      return wa(cb) ? da(cb) : function(bb) {
        if (Za.has(bb)) return 1;
        const cb = Wb.findIndex((cb => cb.newDeposits.some((cb => {
          let {
            block: sb
          } = cb;
          return sb === bb
        }))));
        return cb < 0 ? 1 : cb + 1
      }(bb)
    }

    function wa(bb) {
      return bb in qa || Mb(da(bb)) > 0
    }

    function ra(bb, cb) {
      return xc(bb, {
        coupled: !1,
        taught: null,
        atomic: Ub() && cb >= 11
      }).recipes
    }

    function oa(bb, cb) {
      const sb = Xb(bb, cb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mb(bb) > 0);
      return "open" === sb || "locked" === sb
    }

    function Sa(bb, cb) {
      return bb.map(((bb, sb) => ({
        value: bb,
        idx: sb,
        tier: cb(bb)
      }))).sort(((bb, cb) => bb.tier - cb.tier || bb.idx - cb.idx)).map((bb => {
        let {
          value: cb
        } = bb;
        return cb
      }))
    }

    function Ra(bb, cb, sb) {
      const kb = Xb(bb, cb);
      if ("hidden" === kb || "open" === kb) return null;
      if ("teaser" === kb) return {
        tag: {
          translationKey: `${Ka}${sb?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Ka}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Wb = nb(bb, {
          tier: sb ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        ab = nb(bb, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Ka}${Wb.key}`,
          params: Wb.params
        },
        reason: {
          translationKey: `${Ka}${ab.key}`,
          params: ab.params
        }
      }
    }

    function va(bb) {
      return !ma(bb)
    }

    function Fa(bb) {
      let {
        seconds: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)();
      return (0, Ba.jsx)(Ga, {
        title: sb("buildAFactory2Game:recipesCuts", {
          seconds: cb
        }),
        count: 1,
        children: (0, Ba.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Ba.jsx)(Pa, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Ba.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ba.jsx)(Pa, {
            item: "Maple Log",
            amount: 1
          }), (0, Ba.jsx)("span", {
            className: "Baf2RecipeName",
            children: sb("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function xa(bb) {
      let {
        fertilised: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)();
      return (0, Ba.jsxs)(Ga, {
        title: sb("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Ba.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Ba.jsx)(Pa, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Ba.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ba.jsx)(Pa, {
            item: "Wheat",
            amount: 1
          }), (0, Ba.jsx)(Pa, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Ba.jsx)("span", {
            className: "Baf2RecipeName",
            children: sb("buildAFactory2Game:recipeField")
          })]
        }), (0, Ba.jsxs)("li", {
          className: JW()("Baf2Recipe", {
            InUse: cb
          }),
          children: [(0, Ba.jsx)(Pa, {
            item: "Fertiliser",
            amount: 1
          }), (0, Ba.jsx)("span", {
            className: "Baf2RecipeName",
            children: sb("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function ja(bb) {
      let {
        tier: cb,
        seconds: sb
      } = bb;
      const {
        t: kb
      } = (0, yW.E)(), Wb = function(bb) {
        return bb >= 5 ? uc : Lc
      }(cb);
      return (0, Ba.jsx)(Ga, {
        title: kb("buildAFactory2Game:recipesBringsUp", {
          seconds: sb
        }),
        count: Wb.length,
        children: Wb.map((bb => {
          let {
            item: cb,
            chance: sb
          } = bb;
          return (0, Ba.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Ba.jsx)(Pa, {
              item: cb,
              amount: 1
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ta(kb, cb)
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: kb("buildAFactory2Game:recipeChance", {
                percent: ya(sb)
              })
            })]
          }, cb)
        }))
      })
    }

    function pa(bb) {
      let {
        tier: cb,
        seconds: sb,
        noSeeds: kb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)(), ab = sa(), Tb = ea(cb, kb ? va : void 0), Ub = kb && ea(cb).length > Tb.length, Ib = na(cb);
      return (0, Ba.jsxs)(Ga, {
        title: Wb("buildAFactory2Game:recipesRecycles", {
          seconds: sb
        }),
        count: Tb.length,
        children: [Tb.map((bb => {
          let {
            find: cb,
            chance: sb
          } = bb;
          return (0, Ba.jsxs)("li", {
            className: "Baf2Recipe",
            children: [ab.has(cb.item) && (0, Ba.jsx)(Oa, {}), (0, Ba.jsx)(Pa, {
              item: cb.item,
              amount: cb.amount
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ta(Wb, cb.item)
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Wb("buildAFactory2Game:recipeChance", {
                percent: ya(sb)
              })
            })]
          }, cb.item)
        })), Ub && (0, Ba.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ba.jsx)("span", {
            className: "Baf2RecipeName",
            children: Wb("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Ib && (0, Ba.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ba.jsx)("span", {
            className: "Baf2RecipeName",
            children: Wb("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function bT(bb) {
      let {
        tier: cb,
        seconds: sb
      } = bb;
      const {
        t: kb
      } = (0, yW.E)(), Wb = Object.entries(Ha).filter((bb => {
        let [, {
          item: sb
        }] = bb;
        return oa(da(sb), cb, wa(sb))
      }));
      return (0, Ba.jsx)(Ga, {
        title: kb("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: sb
        }),
        count: Wb.length,
        children: Wb.map((bb => {
          let [cb, {
            item: sb,
            amount: Wb
          }] = bb;
          return (0, Ba.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Ba.jsx)(Pa, {
              item: cb,
              amount: 1
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ba.jsx)(Pa, {
              item: sb,
              amount: Wb
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ta(kb, sb)
            })]
          }, cb)
        }))
      })
    }

    function cT(bb) {
      let {
        tier: cb,
        seconds: sb
      } = bb;
      const {
        t: kb
      } = (0, yW.E)(), Wb = sa(), ab = Sa(Object.entries(Ts).filter((bb => {
        let [sb, kb] = bb;
        return oa(Aa(sb, kb), cb, wa(kb))
      })), (bb => {
        let [cb, sb] = bb;
        return Aa(cb, sb)
      }));
      return (0, Ba.jsx)(Ga, {
        title: kb("buildAFactory2Game:recipesDigs", {
          seconds: sb
        }),
        count: ab.length,
        children: ab.map((bb => {
          let [sb, ab] = bb;
          const Tb = Aa(sb, ab),
            Ub = Tb > cb ? Tb : null,
            Ib = Us[sb],
            Hb = null === Ub && Wb.has(ab);
          return (0, Ba.jsxs)("li", {
            className: JW()("Baf2Recipe", {
              Locked: null !== Ub,
              Far: ta(Ub, cb)
            }),
            children: [Hb && (0, Ba.jsx)(Oa, {}), (0, Ba.jsx)(Pa, {
              item: sb,
              amount: 1
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ba.jsx)(Pa, {
              item: ab,
              amount: 1
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ta(kb, ab)
            }), void 0 !== Ib && (0, Ba.jsx)("span", {
              className: "Baf2RecipeMore",
              children: kb("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Ib)
              })
            }), null !== Ub && (0, Ba.jsx)(Ea, {
              tier: Ub
            })]
          }, sb)
        }))
      })
    }

    function sT(bb) {
      var cb;
      let {
        def: sb,
        seconds: kb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)();
      return (0, Ba.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ba.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (cb = sb.fuels) && void 0 !== cb ? cb : []).map((bb => (0, Ba.jsx)(Pa, {
            item: bb,
            amount: 1
          }, bb))), (0, Ba.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ba.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ba.jsx)(PW.b, {
              name: "bolt"
            }), Wb("buildAFactory2Game:recipePower", {
              power: xb(sb.powerMade),
              seconds: kb
            })]
          })]
        })
      })
    }

    function kT(bb) {
      let {
        def: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)();
      return (0, Ba.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ba.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ba.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ba.jsx)(PW.b, {
              name: "bolt"
            }), sb("buildAFactory2Game:recipeMixer", {
              cryo: Va((0, jb.J)(cb, cb.cryoMade), "")
            })]
          })
        })
      })
    }

    function WT(bb) {
      let {
        def: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)();
      return (0, Ba.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ba.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ba.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ba.jsx)(PW.b, {
              name: "bolt"
            }), sb("buildAFactory2Game:recipeCondenser", {
              power: Va((0, jb.J)(cb, cb.powerPerOp), ""),
              water: Va((0, jb.J)(cb, cb.fluidMade), "")
            })]
          })
        })
      })
    }

    function aT(bb) {
      let {
        kind: cb,
        def: sb,
        input: kb,
        tier: Wb,
        noSeeds: ab = !1
      } = bb;
      const Tb = String(sb.opMs / 1e3);
      return ss(sb) ? (0, Ba.jsx)(Fa, {
        seconds: Tb
      }) : sb.field ? (0, Ba.jsx)(xa, {
        fertilised: null !== kb
      }) : sb.table ? (0, Ba.jsx)(ja, {
        tier: Wb,
        seconds: Tb
      }) : sb.recycles ? (0, Ba.jsxs)(Ba.Fragment, {
        children: [(0, Ba.jsx)(pa, {
          tier: Wb,
          seconds: Tb,
          noSeeds: ab
        }), (0, Ba.jsx)(bT, {
          tier: Wb,
          seconds: Tb
        })]
      }) : cs(sb) ? (0, Ba.jsx)(cT, {
        tier: Wb,
        seconds: Tb
      }) : void 0 !== sb.fluidMade ? (0, Ba.jsx)(WT, {
        def: sb
      }) : void 0 !== sb.cryoMade ? (0, Ba.jsx)(kT, {
        def: sb
      }) : void 0 !== sb.powerMade ? (0, Ba.jsx)(sT, {
        def: sb,
        seconds: Tb
      }) : (0, Ba.jsx)(TT, {
        kind: cb,
        input: kb,
        tier: Wb,
        seconds: Tb
      })
    }

    function TT(bb) {
      let {
        kind: cb,
        input: sb,
        tier: kb,
        seconds: Wb
      } = bb;
      const {
        t: ab
      } = (0, yW.E)(), Tb = sa(), Ub = Sa(function(bb) {
        const cb = new Map;
        for (const Wb of bb) {
          var sb, kb;
          const bb = [Wb.output, Wb.outputAmount, Wb.inputAmount, null === (sb = Wb.bonus) || void 0 === sb ? void 0 : sb.item, null === (kb = Wb.bonus) || void 0 === kb ? void 0 : kb.chance].join("|"),
            ab = cb.get(bb);
          ab ? ab.inputs.push(Wb.input) : cb.set(bb, {
            inputs: [Wb.input],
            inputAmount: Wb.inputAmount,
            output: Wb.output,
            outputAmount: Wb.outputAmount,
            bonus: Wb.bonus
          })
        }
        return [...cb.values()]
      }(ra(cb, kb).filter(fs)), (bb => da(bb.output))).filter((bb => oa(da(bb.output), kb, wa(bb.output))));
      return (0, Ba.jsx)(Ga, {
        title: ab("buildAFactory2Game:recipesEach", {
          seconds: Wb
        }),
        count: Ub.length,
        children: Ub.map((bb => {
          const cb = null !== sb && bb.inputs.includes(sb),
            Wb = bb.inputs.length > 3 ? [cb ? sb : bb.inputs[0]] : bb.inputs,
            Ub = da(bb.output) > kb ? da(bb.output) : null,
            Ib = null === Ub && Tb.has(bb.output);
          return (0, Ba.jsxs)("li", {
            className: JW()("Baf2Recipe", {
              InUse: cb,
              Locked: null !== Ub,
              Far: ta(Ub, kb)
            }),
            children: [Ib && (0, Ba.jsx)(Oa, {}), Wb.map(((cb, sb) => (0, Ba.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [sb > 0 && (0, Ba.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Ba.jsx)(Pa, {
                item: cb,
                amount: bb.inputAmount
              })]
            }, cb))), Wb.length < bb.inputs.length && (0, Ba.jsx)(Da, {
              label: ab("buildAFactory2Game:recipeMore", {
                count: String(bb.inputs.length - Wb.length)
              }),
              names: bb.inputs.filter((bb => !Wb.includes(bb))).map((bb => Ta(ab, bb)))
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ba.jsx)(Pa, {
              item: bb.output,
              amount: bb.outputAmount
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ta(ab, bb.output)
            }), bb.bonus && (0, Ba.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [ab("buildAFactory2Game:recipeBonus", {
                percent: ya(bb.bonus.chance)
              }), (0, Ba.jsx)(Pa, {
                item: bb.bonus.item,
                amount: 1
              })]
            }), null !== Ub && (0, Ba.jsx)(Ea, {
              tier: Ub
            })]
          }, `${bb.output}|${bb.inputs[0]}`)
        }))
      })
    }

    function UT(bb) {
      let {
        taught: cb,
        tier: sb
      } = bb;
      const {
        t: kb
      } = (0, yW.E)(), Wb = sa(), ab = Sa(Object.values(vc), (bb => bb.tier)).filter((bb => oa(bb.tier, sb)));
      return (0, Ba.jsx)(Ga, {
        title: kb("buildAFactory2Game:benchCanMake"),
        count: ab.length,
        startOpen: !1,
        children: ab.map((bb => {
          const ab = bb.tier > sb,
            Tb = !ab && Wb.has(bb.output);
          return (0, Ba.jsxs)("li", {
            className: JW()("Baf2Recipe", {
              InUse: bb.output === cb,
              Locked: ab,
              Far: ta(ab ? bb.tier : null, sb)
            }),
            children: [Tb && (0, Ba.jsx)(Oa, {}), (0, Ba.jsx)(Pa, {
              item: bb.output,
              amount: bb.outputAmount
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ta(kb, bb.output)
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), bb.inputs.map((bb => (0, Ba.jsx)(Pa, {
              item: bb.item,
              amount: bb.amount
            }, bb.item))), ab && (0, Ba.jsx)(Ea, {
              tier: bb.tier
            })]
          }, bb.output)
        }))
      })
    }
    var IT, HT, fT, MT, XT;
    const nT = ic.Generator,
      mT = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      lT = 1e3 * (null !== (IT = nT.powerMade) && void 0 !== IT ? IT : 0) / nT.opMs,
      QT = Math.min(...(null !== (HT = nT.fuels) && void 0 !== HT ? HT : []).map((bb => as[bb]))) / 1e3,
      eT = ic["Volt Engine"],
      CT = 1e3 * (null !== (fT = eT.powerMade) && void 0 !== fT ? fT : 0) / eT.opMs,
      NT = as[null !== (MT = null === (XT = eT.fuels) || void 0 === XT ? void 0 : XT[0]) && void 0 !== MT ? MT : ""] / 1e3;

    function VT(bb) {
      let {
        item: cb,
        label: sb,
        value: kb,
        note: Wb,
        dim: ab
      } = bb;
      return (0, Ba.jsxs)("li", {
        className: JW()("Baf2PowerRow", {
          Dim: ab
        }),
        children: [(0, Ba.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Ba.jsx)(DW.d, {
            itemName: cb,
            amount: 0
          })
        }), (0, Ba.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Ba.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: sb
          }), Wb && (0, Ba.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Wb
          })]
        }), (0, Ba.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: kb
        })]
      })
    }

    function LT(bb, cb, sb, kb) {
      var Wb;
      const ab = void 0 === kb ? ic[bb] : function(bb, cb) {
          if (null === cb) return bb;
          let sb = Sb.get(cb);
          return sb || (sb = {
            ...bb,
            powerPerOp: ob(bb, cb),
            farmMob: cb
          }, Sb.set(cb, sb)), sb
        }(ic[bb], kb),
        Tb = cb && ab.couplable ? Ac(ab, sb) : ab;
      return 1e3 * (null !== (Wb = Tb.powerPerOp) && void 0 !== Wb ? Wb : 0) / Tb.opMs
    }

    function uT(bb) {
      var cb, sb, kb, Wb, ab, Tb, Ub, Ib;
      let {
        message: Hb
      } = bb;
      const {
        t: fb
      } = (0, yW.E)(), Mb = (bb, cb) => fb("buildAFactory2Game:powerPerSecond", {
        rate: Va(bb, cb)
      }), [Xb, nb] = Hb.baf2PowerGenerators, mb = Hb.baf2PowerGeneratorFuel, lb = Hb.baf2PowerSunPanels, Qb = null !== (cb = Hb.baf2PowerSunShare) && void 0 !== cb ? cb : 1, eb = Hb.baf2PowerVaults, Cb = Hb.baf2PowerUsers, [Nb, Vb] = null !== (sb = Hb.baf2PowerEngines) && void 0 !== sb ? sb : [0, 0], Lb = null !== (kb = Hb.baf2PowerEngineCells) && void 0 !== kb ? kb : 0, ub = null !== (Wb = Hb.baf2PowerPads) && void 0 !== Wb ? Wb : 0, Yb = null !== (ab = Hb.baf2PowerCharge) && void 0 !== ab ? ab : 0, [hb, Jb] = null !== (Tb = Hb.baf2PowerReactors) && void 0 !== Tb ? Tb : [0, 0], [gb, Bb] = null !== (Ub = Hb.baf2PowerBatteries) && void 0 !== Ub ? Ub : [0, 0];
      let tb = fb("buildAFactory2Game:powerEngineCells", {
        amount: String(Lb)
      });
      Lb > 0 && Vb > 0 && (tb = fb("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Lb),
        time: Ya(fb, Lb * NT / Vb)
      }));
      let yb = fb("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(mb)
      });
      mb > 0 && nb > 0 && (yb = fb("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(mb),
        time: Ya(fb, mb * QT / nb)
      }));
      const Pb = Xb + Nb + lb + hb;
      return (0, Ba.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Ba.jsxs)("section", {
          children: [(0, Ba.jsxs)("h3", {
            children: [fb("buildAFactory2Game:powerMaking"), (0, Ba.jsx)("span", {
              children: Mb(Hb.baf2PowerMadePerS, "+")
            })]
          }), (0, Ba.jsxs)("ul", {
            children: [0 === Pb && (0, Ba.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: fb("buildAFactory2Game:powerNoMakers")
            }), Xb > 0 && (0, Ba.jsx)(VT, {
              item: "Generator",
              label: `${Ta(fb,"Generator")} \xd7${Xb}`,
              note: `${fb("buildAFactory2Game:powerRunning",{amount:String(nb)})} \xb7 ${yb}`,
              value: Mb(nb * lT, "+"),
              dim: 0 === nb
            }), Nb > 0 && (0, Ba.jsx)(VT, {
              item: "Volt Engine",
              label: `${Ta(fb,"Volt Engine")} \xd7${Nb}`,
              note: `${fb("buildAFactory2Game:powerRunning",{amount:String(Vb)})} \xb7 ${tb}`,
              value: Mb(Vb * CT, "+"),
              dim: 0 === Vb
            }), lb > 0 && (0, Ba.jsx)(VT, {
              item: "Solar Panel",
              label: `${Ta(fb,"Solar Panel")} \xd7${lb}`,
              note: fb(Qb < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Mb(4 * lb * Qb, "+")
            }), hb > 0 && (0, Ba.jsx)(VT, {
              item: "Reactor Frame",
              label: `${fb("buildAFactory2Game:powerReactors")} \xd7${hb}`,
              note: fb("buildAFactory2Game:powerRunning", {
                amount: String(Jb)
              }),
              value: Mb(null !== (Ib = Hb.baf2PowerReactorPerS) && void 0 !== Ib ? Ib : 0, "+"),
              dim: 0 === Jb
            })]
          })]
        }), (0, Ba.jsxs)("section", {
          children: [(0, Ba.jsxs)("h3", {
            children: [fb("buildAFactory2Game:powerStorage"), (0, Ba.jsx)("span", {
              children: xb(Hb.baf2PowerCap)
            })]
          }), (eb > 0 || gb > 0) && (0, Ba.jsxs)("ul", {
            children: [eb > 0 && (0, Ba.jsx)(VT, {
              item: "Charge Vault",
              label: `${Ta(fb,"Charge Vault")} \xd7${eb}`,
              value: `+${xb(8e3*eb)}`
            }), gb > 0 && (0, Ba.jsx)(VT, {
              item: "Battery Cell",
              label: `${fb("buildAFactory2Game:powerBatteries")} \xd7${gb}`,
              value: `+${xb(Bb)}`
            })]
          })]
        }), (0, Ba.jsxs)("section", {
          children: [(0, Ba.jsxs)("h3", {
            children: [fb("buildAFactory2Game:powerUsing"), (0, Ba.jsx)("span", {
              children: Mb(Hb.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Ba.jsxs)("ul", {
            children: [0 === Cb.length && 0 === ub && 0 === Yb && (0, Ba.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: fb("buildAFactory2Game:powerNoUsers")
            }), Cb.map((bb => {
              let [cb, sb, kb, Wb, ab = 1, Tb] = bb, Ub = sb ? fb(mT[ab - 1], {
                name: Ta(fb, cb)
              }) : Ta(fb, cb);
              return void 0 !== Tb && (Ub = fb("buildAFactory2Game:powerFarmName", {
                name: Ub,
                mob: fb(Ab(Tb))
              })), (0, Ba.jsx)(VT, {
                item: cb,
                label: `${Ub} \xd7${kb}`,
                note: fb("buildAFactory2Game:powerRunning", {
                  amount: String(Wb)
                }),
                value: Wb > 0 ? Mb(Wb * LT(cb, sb, ab, Tb), "\u2212") : fb("buildAFactory2Game:powerIdle"),
                dim: 0 === Wb
              }, `${cb}|${sb}|${ab}|${Tb}`)
            })), ub > 0 && (0, Ba.jsx)(VT, {
              item: "Charging Pad",
              label: `${Ta(fb,"Charging Pad")} \xd7${ub}`,
              value: fb("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Yb > 0 && (0, Ba.jsx)(VT, {
              item: "Homestead Core",
              label: fb("buildAFactory2Game:powerCharge"),
              value: Mb(Yb, "\u2212")
            }), Hb.baf2PowerStarved > 0 && (0, Ba.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Ba.jsx)(PW.b, {
                name: "triangle-exclamation"
              }), fb("buildAFactory2Game:powerStarved", {
                amount: String(Hb.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var YT = sb(4270),
      hT = sb(1431);
    class JT {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(bb) {
        this.message = bb;
        for (const cb of this.listeners) cb()
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
    class gT extends JT {}

    function BT(bb, cb) {
      const sb = () => {
          const sb = bb.get();
          if (!sb || !cb) return sb;
          const [kb, Wb, ab] = sb.baf2PowerAt;
          return kb === cb[0] && Wb === cb[1] && ab === cb[2] ? sb : null
        },
        [Wb, ab] = (0, kb.useState)(sb);
      return (0, kb.useEffect)((() => (ab(sb()), bb.subscribe((() => {
        ab(sb())
      })))), [bb, ...null !== cb && void 0 !== cb ? cb : []]), Wb
    }

    function tT(bb) {
      return {
        stored: bb.baf2PowerStored,
        cap: bb.baf2PowerCap,
        madePerS: bb.baf2PowerMadePerS,
        usedPerS: bb.baf2PowerUsedPerS
      }
    }

    function yT(bb) {
      let {
        stored: cb,
        cap: sb
      } = bb;
      return (0, Ba.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Ba.jsx)("div", {
          style: {
            width: `${Math.min(100,100*cb/Math.max(1,sb))}%`
          }
        })
      })
    }

    function PT(bb) {
      let {
        figures: cb,
        labelled: sb = !1
      } = bb;
      const {
        t: kb
      } = (0, yW.E)(), Wb = cb.madePerS - cb.usedPerS, {
        text: ab,
        draining: Tb
      } = function(bb, cb) {
        let {
          stored: sb,
          cap: kb,
          madePerS: Wb,
          usedPerS: ab
        } = cb;
        const Tb = Wb - ab;
        return sb >= kb ? {
          text: bb("buildAFactory2Game:powerFull"),
          draining: !1
        } : Tb > .05 ? {
          text: bb("buildAFactory2Game:powerFullIn", {
            time: Ya(bb, (kb - sb) / Tb)
          }),
          draining: !1
        } : Tb < -.05 ? {
          text: bb("buildAFactory2Game:powerEmptyIn", {
            time: Ya(bb, sb / -Tb)
          }),
          draining: !0
        } : {
          text: bb("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(kb, cb);
      return (0, Ba.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Ba.jsx)(yT, {
          stored: cb.stored,
          cap: cb.cap
        }), (0, Ba.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Ba.jsx)("span", {
            children: kb(sb ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: xb(cb.stored),
              cap: xb(cb.cap)
            })
          }), (0, Ba.jsxs)("span", {
            className: JW()("Baf2PowerNet", {
              Draining: Tb
            }),
            children: [kb("buildAFactory2Game:powerPerSecond", {
              rate: Va(Math.abs(Wb), Wb < 0 ? "\u2212" : "+")
            }), " \xb7 ", ab]
          })]
        })]
      })
    }

    function DT(bb) {
      let {
        stored: cb,
        cap: sb,
        rates: kb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)();
      return kb ? (0, Ba.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Ba.jsx)(PT, {
          figures: {
            stored: cb,
            cap: sb,
            madePerS: kb[0],
            usedPerS: kb[1]
          },
          labelled: !0
        })
      }) : (0, Ba.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Ba.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Ba.jsx)(yT, {
            stored: cb,
            cap: sb
          }), (0, Ba.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Ba.jsx)("span", {
              children: Wb("buildAFactory2Game:powerStoredLabelled", {
                stored: xb(cb),
                cap: xb(sb)
              })
            })
          })]
        })
      })
    }

    function ET(bb) {
      let {
        store: cb,
        close: sb
      } = bb;
      const {
        t: kb
      } = (0, yW.E)(), Wb = BT(cb);
      return (0, Ba.jsx)(YT.c, {
        close: sb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ba.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsxs)("div", {
              children: [(0, Ba.jsx)("h2", {
                id: "baf2PowerTitle",
                children: kb("buildAFactory2Game:powerTitle")
              }), (0, Ba.jsx)("p", {
                children: kb("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Ba.jsx)(hT.j, {
              onClick: sb
            })]
          }), Wb && (0, Ba.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Ba.jsx)(PT, {
              figures: tT(Wb)
            }), (0, Ba.jsx)(uT, {
              message: Wb
            })]
          })]
        })
      })
    }

    function iT(bb) {
      var cb;
      let {
        kind: sb,
        def: Wb,
        XT: ab,
        power: Tb,
        stored: Ub,
        cap: Ib
      } = bb;
      const {
        t: Hb
      } = (0, yW.E)(), fb = BT(Tb, ab), [Mb, Xb] = (0, kb.useState)(!1);
      return (0, Ba.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Ba.jsx)(aT, {
          kind: sb,
          def: Wb,
          input: null,
          tier: null !== (cb = null === fb || void 0 === fb ? void 0 : fb.baf2PowerTier) && void 0 !== cb ? cb : 1
        }), (0, Ba.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Hb("buildAFactory2Game:powerTitle")
        }), fb && (0, Ba.jsx)(PT, {
          figures: tT(fb)
        }), !fb && (0, Ba.jsx)(DT, {
          stored: Ub,
          cap: Ib,
          rates: null
        }), fb && (0, Ba.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Xb(!Mb)
          },
          "aria-expanded": Mb,
          children: Hb(Mb ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), fb && Mb && (0, Ba.jsx)(uT, {
          message: fb
        })]
      })
    }
    const OT = 2500,
      GT = 17500,
      KT = `${Lb} `;
    const ZT = ["plan", "throttle"];

    function zT(bb) {
      if (bb.startsWith(`${gc} `)) return bb.slice(0, bb.lastIndexOf(" "));
      const cb = bb.split(" ");
      return cb[0] === fc && ZT.includes(cb[4]) ? cb.slice(0, 5).join(" ") : null
    }
    class qT {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = bb, this.now = cb, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.xkb = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = cb()
      }
      enqueue(bb) {
        this.queue(bb, this.nextTicket());
        const cb = this.xkb + this.pending.length;
        return this.flush(), cb
      }
      track(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sb = this.nextTicket();
        if (!cb.urgent) return this.queue(bb, sb), this.flush(), sb;
        const {
          supersedes: kb
        } = cb;
        for (let ab = this.pending.length - 1; ab >= this.urgent; ab--) {
          const cb = this.pending[ab];
          (cb.command === bb || null !== kb && void 0 !== kb && kb(cb.command)) && (this.pending.splice(ab, 1), this.markLeft(cb.tickets))
        }
        const Wb = this.pending.findIndex((cb => {
          let {
            command: sb
          } = cb;
          return sb === bb
        }));
        return -1 !== Wb ? this.pending[Wb].tickets.push(sb) : (this.pending.splice(this.urgent, 0, {
          command: bb,
          tickets: [sb]
        }), this.urgent += 1), this.flush(), sb
      }
      leftAt(bb) {
        const cb = this.leftTimes.get(bb);
        return void 0 !== cb ? cb : this.pending.some((cb => {
          let {
            tickets: sb
          } = cb;
          return sb.includes(bb)
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
        var cb;
        return (null === (cb = this.pending.at(-1)) || void 0 === cb ? void 0 : cb.command) === bb
      }
      sent() {
        return this.xkb
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
        const cb = this.now();
        for (const sb of bb) this.leftTimes.set(sb, cb);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(bb, cb) {
        const sb = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === sb || void 0 === sb ? void 0 : sb.command) === bb) return void(! function(bb) {
          return bb === ub || bb.startsWith(`${Vb} `) || bb.startsWith(`${zb} `)
        }(bb) ? sb.tickets.push(cb) : (this.pending.pop(), this.markLeft([...sb.tickets, cb])));
        const kb = void 0 === sb ? null : Hc(sb.command, bb);
        if (null !== kb && void 0 !== sb) return sb.command = kb, void sb.tickets.push(cb);
        const Wb = zT(bb);
        if (null !== Wb && void 0 !== sb && zT(sb.command) === Wb) return sb.command = bb, void sb.tickets.push(cb);
        if (null !== sb && void 0 !== sb && sb.command.startsWith(KT) && bb.startsWith(KT)) {
          const kb = bb.slice(KT.length);
          if (sb.command.slice(KT.length).split(",").includes(kb)) return void sb.tickets.push(cb);
          const Wb = `${sb.command},${kb}`;
          if (Wb.length <= 119) return sb.command = Wb, void sb.tickets.push(cb)
        }
        this.pending.push({
          command: bb,
          tickets: [cb]
        })
      }
      flush() {
        const bb = this.now();
        for (this.tokens = Math.min(5, this.tokens + (bb - this.refilledAt) / OT), this.refilledAt = bb; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.xkb += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: bb,
            tickets: cb
          } = this.pending.shift();
          this.markLeft(cb), this.send(bb)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * OT)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class dT {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new qT(bb, cb)
      }
      send(bb) {
        return this.queue.enqueue(bb)
      }
      sent() {
        return this.queue.sent()
      }
      track(bb, cb) {
        return this.queue.track(bb, cb)
      }
      leftAt(bb) {
        return this.queue.leftAt(bb)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(bb) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = cb, this.send(bb), this.islandEdits.count
      }
      syncIslandEdits(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: sb
        } = this, kb = cb - sb.lastAtMs < GT;
        sb.count = kb ? Math.max(sb.count, bb) : bb
      }
      clear() {
        this.queue.clear()
      }
    }
    const AT = (0, kb.createContext)(null);

    function wT() {
      const bb = (0, kb.useContext)(AT);
      if (!bb) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return bb
    }

    function rT(bb, cb) {
      return null !== cb && void 0 !== cb ? cb : 1 === bb
    }

    function oT(bb, cb) {
      return bb.every((bb => {
        var sb;
        let [kb, , Wb] = bb;
        return !rT(Wb, null === (sb = cb.get(kb)) || void 0 === sb ? void 0 : sb.vn)
      }))
    }

    function ST(bb, cb, sb) {
      if (0 === bb.size) return bb;
      const kb = new Map(bb);
      for (const [Wb, ab] of bb) {
        const bb = cb.find((bb => {
          let [cb] = bb;
          return cb === Wb
        }));
        (!bb || ab.vn === (1 === bb[2]) || ab.atMs < sb) && kb.delete(Wb)
      }
      return kb
    }

    function RT(bb) {
      var cb;
      let {
        XT: sb,
        input: Wb,
        drops: ab,
        seconds: Tb
      } = bb;
      const {
        t: Ub
      } = (0, yW.E)(), Ib = wT(), [Hb, fb] = (0, kb.useState)(new Map);
      (0, kb.useEffect)((() => {
        ab && fb((bb => ST(bb, ab, Date.now() - GT)))
      }), [ab]), (0, kb.useEffect)((() => {
        const bb = function(bb, cb) {
          let sb = null;
          for (const {
              atMs: kb
            }
            of bb.values()) sb = null === sb ? kb : Math.min(sb, kb);
          return null === sb ? null : sb + cb
        }(Hb, GT);
        if (null === bb || !ab) return;
        const cb = setTimeout((() => {
          fb((bb => ST(bb, ab, Date.now() - GT)))
        }), Math.max(0, bb - Date.now()) + 1);
        return () => {
          clearTimeout(cb)
        }
      }), [Hb, ab]);
      const Mb = wb(Wb),
        Xb = null !== Mb && null !== ab && oT(ab, Hb),
        nb = function(bb, cb, sb) {
          return null === bb || null === cb || oT(cb, sb) ? 0 : Zb[Gb[bb]]
        }(Mb, ab, Hb);
      return (0, Ba.jsxs)(Ga, {
        title: Ub("buildAFactory2Game:farmDropsTitle", {
          seconds: Tb
        }),
        count: null !== (cb = null === ab || void 0 === ab ? void 0 : ab.length) && void 0 !== cb ? cb : 0,
        children: [nb > 0 && (0, Ba.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: Ub("buildAFactory2Game:farmDropsPower", {
            power: String(nb)
          })
        }), (null === Mb || !ab) && (0, Ba.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: Ub("buildAFactory2Game:farmDropsEmpty")
        }), Xb && (0, Ba.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: Ub("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Mb && (null === ab || void 0 === ab ? void 0 : ab.map((bb => {
          var cb;
          let [kb, Wb, ab] = bb;
          const Tb = Wb < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Mb = rT(ab, null === (cb = Hb.get(kb)) || void 0 === cb ? void 0 : cb.vn);
          return (0, Ba.jsxs)("li", {
            className: JW()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Mb
            }),
            children: [(0, Ba.jsx)(Pa, {
              item: kb,
              amount: 1
            }), (0, Ba.jsx)("span", {
              className: "Baf2RecipeName",
              children: Ta(Ub, kb)
            }), (0, Ba.jsx)("span", {
              className: "Baf2FarmRate",
              children: Ub(Tb, {
                amount: String(Wb)
              })
            }), (0, Ba.jsx)("button", {
              type: "button",
              className: JW()("Baf2FarmToggle SmallTextBold", {
                Kept: Mb
              }),
              "aria-pressed": Mb,
              onClick: () => {
                fb(new Map(Hb).set(kb, {
                  vn: !Mb,
                  atMs: Date.now()
                })), Ib.send(function(bb, cb, sb, kb) {
                  return `${zb} ${bb} ${cb} ${sb} ${kb}`
                }(sb[0], sb[1], sb[2], kb))
              },
              children: Ub(Mb ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, kb)
        })))]
      })
    }
    var vT;
    const FT = String(null !== (vT = ic.Synthesizer.waterPerOp) && void 0 !== vT ? vT : 0);

    function xT(bb) {
      let {
        XT: cb,
        taught: sb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)(), ab = wT(), [Tb, Ub] = (0, kb.useState)(null);
      (0, kb.useEffect)((() => {
        null !== Tb && sb === Tb && Ub(null)
      }), [Tb, sb]);
      const Ib = null !== Tb && void 0 !== Tb ? Tb : sb;
      let Hb = Wb("buildAFactory2Game:synthPick");
      return null !== Ib && (Hb = Wb("buildAFactory2Game:synthGrows", {
        name: Ta(Wb, Ib),
        input: Ta(Wb, Yc),
        water: FT
      })), (0, Ba.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Ba.jsx)("div", {
          className: JW()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Ib
          }),
          children: Hb
        }), (0, Ba.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: hc.map(((bb, sb) => {
            const kb = Ta(Wb, bb),
              Tb = bb === Ib;
            return (0, Ba.jsx)("li", {
              children: (0, Ba.jsx)("button", {
                type: "button",
                className: JW()("Baf2SynthTile", {
                  Selected: Tb
                }),
                title: kb,
                "aria-label": kb,
                "aria-pressed": Tb,
                onClick: () => {
                  Tb || (Ub(bb), ab.send(`${gc} ${cb[0]} ${cb[1]} ${cb[2]} ${sb}`))
                },
                children: (0, Ba.jsx)(DW.d, {
                  itemName: bb,
                  amount: 0
                })
              })
            }, bb)
          }))
        })]
      })
    }
    const jT = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function pT(bb) {
      let {
        kind: cb,
        tier: sb,
        coupled: kb,
        level: Wb,
        slot: ab
      } = bb;
      const {
        t: Tb
      } = (0, yW.E)(), Ib = Fb(Gc);
      if (!kb && null !== sb && sb < Ib) return (0, Ba.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Ba.jsx)(PW.b, {
            name: "lock"
          })
        }), (0, Ba.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Tb("buildAFactory2Game:upgradeLocked")
        }), (0, Ba.jsx)("span", {
          className: "Baf2TierTag",
          children: Tb("buildAFactory2Game:tierTag", {
            tier: String(Ib)
          })
        })]
      });
      const Hb = function(bb, cb) {
          if (Ub() && "Crusher" !== bb && null !== cb) {
            if (bU(Zc, cb)) return {
              item: Zc,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (bU(Kc, cb)) return {
              item: Kc,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Gc,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(cb, sb),
        fb = Tb(kb ? jT[Wb - 1] : Hb.emptyKey),
        Mb = null !== sb ? function(bb, cb, sb, kb) {
          if (!Ub() || !sb || "Crusher" === bb || cb < 10) return null;
          const Wb = Fb(Zc);
          if (kb < 3 && Wb > 1 && (2 === kb || cb >= Wb)) return {
            tier: Wb,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const ab = Fb(Kc);
          if (1 === kb && ab > 1) return {
            tier: ab,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(cb, sb, kb, Wb) : null;
      return (0, Ba.jsxs)("div", {
        className: JW()("Baf2UpgradeSocket", {
          Fitted: kb
        }),
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [kb && ab, !kb && (0, Ba.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Ba.jsx)(DW.d, {
              itemName: Hb.item,
              amount: 0
            })
          })]
        }), (0, Ba.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Ba.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Tb("buildAFactory2Game:upgradeTitle")
          }), (0, Ba.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: fb
          }), kb && Wb >= 2 && "Crusher" === cb && (0, Ba.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Tb("buildAFactory2Game:couplerCrusherHint")
          }), Mb && null !== sb && sb < Mb.tier && (0, Ba.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Ba.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Ba.jsx)(PW.b, {
                name: "lock"
              })
            }), Tb(Mb.lockedKey), (0, Ba.jsx)("span", {
              className: "Baf2TierTag",
              children: Tb("buildAFactory2Game:tierTag", {
                tier: String(Mb.tier)
              })
            })]
          }), Mb && null !== sb && sb >= Mb.tier && (0, Ba.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Tb(Mb.nextKey)
          })]
        })]
      })
    }

    function bU(bb, cb) {
      const sb = Fb(bb);
      return sb > 1 && cb >= sb
    }
    var cU = sb(36604);
    const sU = (0, jb.J)(ic.Condenser, ic.Condenser.fluidMade),
      kU = .05;
    class WU extends JT {}

    function aU(bb) {
      return Va(bb, "")
    }

    function TU(bb, cb, sb) {
      return bb(cb ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: sb
      })
    }

    function UU(bb, cb, sb, kb) {
      return sb <= kU && kb <= kU ? null : kb <= kU || sb <= kU ? TU(bb, cb, kb <= kU ? Va(sb, "+") : Va(kb, "\u2212")) : bb(cb ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: aU(sb),
        used: aU(kb)
      })
    }

    function IU(bb, cb) {
      return Math.min(100, 100 * bb / Math.max(1, cb))
    }

    function HU(bb) {
      let {
        stored: cb,
        cap: sb,
        netPerS: kb,
        rates: Wb,
        cryo: ab
      } = bb;
      const {
        t: Tb
      } = (0, yW.E)(), Ub = function(bb, cb, sb, kb) {
        return sb <= 0 ? bb("buildAFactory2Game:waterNoStorage") : cb >= sb ? bb("buildAFactory2Game:powerFull") : kb > kU ? bb("buildAFactory2Game:powerFullIn", {
          time: Ya(bb, (sb - cb) / kb)
        }) : kb < -.05 ? cb <= 0 ? bb("buildAFactory2Game:waterEmpty") : bb("buildAFactory2Game:powerEmptyIn", {
          time: Ya(bb, cb / -kb)
        }) : bb("buildAFactory2Game:powerSteady")
      }(Tb, cb, sb, kb), Ib = sb > 0 && cb < sb && Math.abs(kb) <= kU, Hb = Tb(ab ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), fb = null !== Wb ? `${Wb} \xb7 ${Ub}` : Ib ? Hb : `${Hb} \xb7 ${Ub}`;
      return (0, Ba.jsxs)(Ba.Fragment, {
        children: [(0, Ba.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Ba.jsx)("div", {
            style: {
              width: `${IU(cb,sb)}%`
            }
          })
        }), (0, Ba.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Ba.jsx)("span", {
            children: sb > 0 && Tb("buildAFactory2Game:powerStored", {
              stored: (0, jb.P)(cb),
              cap: (0, jb.P)(sb)
            })
          }), (0, Ba.jsx)("span", {
            className: JW()("Baf2WaterNet", {
              Draining: kb < -.05
            }),
            children: fb
          })]
        })]
      })
    }

    function fU(bb) {
      let {
        water: cb,
        at: sb,
        side: kb = null
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)(), ab = wT(), [Tb, Ub, Ib] = cb;
      return (0, Ba.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Ba.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Wb(null === kb ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${kb}`)
          }), (0, Ba.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              ab.send(`${jb.D} ${sb[0]} ${sb[1]} ${sb[2]}${"cryoOut"===kb?" cryo":""}`)
            },
            children: Wb("buildAFactory2Game:waterDetails")
          })]
        }), (0, Ba.jsx)(HU, {
          stored: Tb,
          cap: Ub,
          netPerS: Ib,
          rates: TU(Wb, "cryoOut" === kb, Va(Math.abs(Ib), Ib < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === kb
        })]
      })
    }

    function MU(bb, cb) {
      var sb, kb, Wb;
      const ab = !0 === cb.baf2WaterCryo,
        Tb = null !== (sb = null === (kb = cb.baf2WaterMakers.find((bb => bb[0] === (ab ? jb.e : "Condenser")))) || void 0 === kb ? void 0 : kb[1]) && void 0 !== sb ? sb : 0,
        Ub = [],
        Ib = (cb, sb, kb) => {
          cb > 0 && Ub.push(bb(1 === cb ? sb : kb, {
            count: String(cb)
          }))
        };
      return ab ? Ib(Tb, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Ib(Tb, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Ib(null !== (Wb = cb.baf2WaterPipes) && void 0 !== Wb ? Wb : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Ib(cb.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), Ub.join(" \xb7 ")
    }

    function XU(bb, cb) {
      if (!0 === cb.baf2WaterCryo) return function(bb, cb) {
        const sb = ic[jb.e];
        switch (cb.baf2WaterThis) {
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
            var kb;
            const [Wb, ab] = null !== (kb = cb.baf2WaterThisRates) && void 0 !== kb ? kb : [(0, jb.J)(sb, sb.cryoMade), (0, jb.J)(sb, sb.powerPerOp)];
            return !0 === cb.baf2WaterDriven ? {
              text: bb("buildAFactory2Game:cryoThisMixerDriven", {
                rate: aU(Wb)
              }),
              bad: !1
            } : {
              text: bb("buildAFactory2Game:cryoThisMixer", {
                rate: aU(Wb),
                power: aU(ab)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: bb("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(bb, cb);
      const sb = !0 === cb.baf2WaterDriven,
        kb = ic.Condenser;
      switch (cb.baf2WaterThis) {
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
              tank: (0, jb.P)(jb.r),
              cap: (0, jb.P)(cb.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Wb;
          const [ab, Tb] = null !== (Wb = cb.baf2WaterThisRates) && void 0 !== Wb ? Wb : [sU, (0, jb.J)(kb, kb.powerPerOp)];
          return sb ? {
            text: bb("buildAFactory2Game:waterThisCondenserDriven", {
              rate: aU(ab)
            }),
            bad: !1
          } : {
            text: bb("buildAFactory2Game:waterThisCondenser", {
              rate: aU(ab),
              power: aU(Tb)
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

    function nU(bb, cb) {
      const sb = cb.baf2WaterMakers.some((bb => !0 === bb[5]));
      if (!0 === cb.baf2WaterCryo) {
        const kb = cb.baf2WaterUsedPerS - cb.baf2WaterMadePerS,
          Wb = sb || kb <= kU ? 0 : (0, jb.G)(kb);
        return 0 === Wb ? null : Wb > 1 ? bb("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Wb)
        }) : bb("buildAFactory2Game:cryoNextOne")
      }
      const kb = sb ? null : function(bb, cb) {
        const sb = cb - bb;
        return sb <= kU ? null : Math.ceil(sb / sU)
      }(cb.baf2WaterMadePerS, cb.baf2WaterUsedPerS);
      return null === kb ? null : kb > 1 ? bb("buildAFactory2Game:waterNextCondensers", {
        condensers: String(kb)
      }) : bb("buildAFactory2Game:waterNextOne")
    }

    function mU(bb) {
      let {
        item: cb,
        label: sb,
        note: kb,
        value: Wb,
        dim: ab,
        bad: Tb
      } = bb;
      return (0, Ba.jsxs)("li", {
        className: JW()("Baf2WaterRow", {
          Dim: ab,
          Bad: Tb
        }),
        children: [(0, Ba.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Ba.jsx)(DW.d, {
            itemName: cb,
            amount: 0
          })
        }), (0, Ba.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Ba.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: sb
          }), kb && (0, Ba.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: kb
          })]
        }), (0, Ba.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Wb
        })]
      })
    }

    function lU(bb) {
      return cU.l[bb] ? bb : "Reactor Port"
    }

    function QU(bb) {
      let {
        message: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)(), kb = !0 === cb.baf2WaterCryo, Wb = (bb, cb) => TU(sb, kb, Va(bb, cb));
      return (0, Ba.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Ba.jsxs)("section", {
          children: [(0, Ba.jsxs)("h3", {
            children: [sb("buildAFactory2Game:waterMakes"), (0, Ba.jsx)("span", {
              children: Wb(cb.baf2WaterMadePerS, "+")
            })]
          }), (0, Ba.jsxs)("ul", {
            children: [0 === cb.baf2WaterMakers.length && (0, Ba.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: sb(kb ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), cb.baf2WaterMakers.map((bb => {
              let [cb, kb, ab, Tb, Ub, Ib] = bb;
              const Hb = sb("buildAFactory2Game:powerRunning", {
                amount: String(ab)
              });
              let fb = Ub > 0 ? sb("buildAFactory2Game:waterMakerPower", {
                running: Hb,
                power: aU(Ub)
              }) : Hb;
              return Ib && (fb = sb(0 === ab && Tb <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Ba.jsx)(mU, {
                item: cb,
                label: `${Ta(sb,cb)} \xd7${kb}`,
                note: fb,
                value: ab > 0 || Ib && Tb > 0 ? Wb(Tb, "+") : sb("buildAFactory2Game:powerIdle"),
                dim: 0 === ab && !Ib,
                bad: Ib
              }, cb)
            }))]
          })]
        }), (0, Ba.jsxs)("section", {
          children: [(0, Ba.jsxs)("h3", {
            children: [sb("buildAFactory2Game:waterUses"), (0, Ba.jsx)("span", {
              children: Wb(cb.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Ba.jsxs)("ul", {
            children: [0 === cb.baf2WaterUsers.length && (0, Ba.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: sb(kb ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), cb.baf2WaterUsers.map((bb => {
              let [cb, kb, ab, Tb] = bb;
              const Ub = cU.l[cb] ? Ta(sb, cb) : cb;
              return (0, Ba.jsx)(mU, {
                item: lU(cb),
                label: kb > 1 ? `${Ub} \xd7${kb}` : Ub,
                note: Tb ? sb("buildAFactory2Game:waterPortFirst") : void 0,
                value: ab > 0 ? Wb(ab, "\u2212") : sb("buildAFactory2Game:powerIdle"),
                dim: 0 === ab
              }, cb)
            }))]
          })]
        })]
      })
    }

    function eU(bb) {
      var cb, sb, Wb, ab, Tb;
      let {
        store: Ub,
        close: Ib
      } = bb;
      const {
        t: Hb
      } = (0, yW.E)(), fb = function(bb) {
        const [cb, sb] = (0, kb.useState)((() => bb.get()));
        return (0, kb.useEffect)((() => (sb(bb.get()), bb.subscribe((() => {
          sb(bb.get())
        })))), [bb]), cb
      }(Ub), Mb = null !== (cb = null === fb || void 0 === fb ? void 0 : fb.baf2WaterStored) && void 0 !== cb ? cb : 0, Xb = null !== (sb = null === fb || void 0 === fb ? void 0 : fb.baf2WaterCap) && void 0 !== sb ? sb : 0, nb = null !== (Wb = null === fb || void 0 === fb ? void 0 : fb.baf2WaterMadePerS) && void 0 !== Wb ? Wb : 0, mb = null !== (ab = null === fb || void 0 === fb ? void 0 : fb.baf2WaterUsedPerS) && void 0 !== ab ? ab : 0, lb = null !== (Tb = null === fb || void 0 === fb ? void 0 : fb.baf2WaterNetPerS) && void 0 !== Tb ? Tb : nb - mb, Qb = fb && XU(Hb, fb), eb = fb && nU(Hb, fb), Cb = !0 === (null === fb || void 0 === fb ? void 0 : fb.baf2WaterCryo);
      return (0, Ba.jsx)(YT.c, {
        close: Ib,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ba.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== fb && Xb <= 0 ? (0, Ba.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Ba.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Ba.jsx)(DW.d, {
                  itemName: Cb ? ms.f : jb.k,
                  amount: 0
                })
              }), (0, Ba.jsxs)("div", {
                children: [(0, Ba.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Hb(Cb ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), fb && (0, Ba.jsx)("p", {
                  children: MU(Hb, fb)
                })]
              })]
            }), (0, Ba.jsx)(hT.j, {
              onClick: Ib
            })]
          }), fb && Qb && (0, Ba.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Ba.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Ba.jsx)(HU, {
                stored: Mb,
                cap: Xb,
                netPerS: lb,
                cryo: Cb,
                rates: UU(Hb, Cb, nb, mb)
              })
            }), (0, Ba.jsx)("div", {
              className: JW()("Baf2WaterThis", {
                Bad: Qb.bad
              }),
              children: Qb.text
            }), fb.baf2WaterDriven && (0, Ba.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Ba.jsx)(PW.b, {
                name: "bolt"
              }), Hb(Cb ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), eb && (0, Ba.jsx)("p", {
              className: "Baf2WaterNext",
              children: eb
            }), (0, Ba.jsx)(QU, {
              message: fb
            })]
          })]
        })
      })
    }
    class CU {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(bb, cb) {
        const sb = this.get(bb);
        sb && null === cb.opLeftMs && null === cb.fuelLeftMs && cb.status === sb.status ? cb = {
          ...cb,
          opLeftMs: sb.opLeftMs,
          fuelLeftMs: sb.fuelLeftMs,
          burning: sb.burning
        } : this.updates++, this.pos = bb, this.view = cb;
        for (const kb of this.listeners) kb()
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

    function NU(bb, cb, sb, kb) {
      return "noFuel" === cb && kb && !Ws(ic[bb]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === cb && !0 === (null === sb || void 0 === sb ? void 0 : sb.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === cb && !0 === (null === sb || void 0 === sb ? void 0 : sb.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === cb && !0 === (null === sb || void 0 === sb ? void 0 : sb.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === cb && !0 === (null === sb || void 0 === sb ? void 0 : sb.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : VU(cb, sb) ? "buildAFactory2Game:machineStatus_noInputShort" : function(bb, cb) {
        const sb = ic[bb];
        if ("noFuel" === cb && void 0 !== sb.fuels) return Ws(sb) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (sb.mobFarm && ("noInput" === cb || "badInput" === cb)) return `buildAFactory2Game:machineStatus_${cb}MobFarm`;
        if ("outputFull" === cb && (void 0 !== sb.table || sb.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === cb && Sc(sb)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== sb.cryoMade && ("noInput" === cb || "noOutlet" === cb || "fluidFull" === cb)) return `buildAFactory2Game:machineStatus_${cb}Mixer`;
        return `buildAFactory2Game:machineStatus_${cb}`
      }(bb, cb)
    }

    function VU(bb, cb) {
      return "noInput" === bb && null !== cb && void 0 !== cb && cb.input && cb.inputShort ? {
        input: cb.input,
        short: cb.inputShort
      } : null
    }

    function LU(bb) {
      return gW(bb) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== bb.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function uU(bb) {
      const cb = (0, ib.Je)(bb);
      return `Baf2Pane Baf2Pane${cb.charAt(0).toUpperCase()}${cb.slice(1)}`
    }

    function YU(bb, cb) {
      const [sb, Wb] = (0, kb.useState)((() => bb.get(cb)));
      return (0, kb.useEffect)((() => {
        Wb(bb.get(cb));
        const sb = bb.subscribe((() => {
          Wb(bb.get(cb))
        }));
        return () => {
          sb(), bb.forget(cb)
        }
      }), [bb, ...cb]), sb
    }

    function hU(bb, cb, sb, kb) {
      const Wb = ic[bb],
        ab = cb && Wb.couplable ? Ac(Wb, sb) : Wb,
        Tb = null !== kb && cs(ab) ? function(bb, cb) {
          var sb;
          return null !== (sb = null !== cb && cs(bb) ? Us[cb] : void 0) && void 0 !== sb ? sb : bb.opMs
        }(ab, Is(kb)) : ab.opMs;
      return Tb === ab.opMs ? ab : {
        ...ab,
        opMs: Tb
      }
    }

    function JU(bb) {
      let {
        running: cb,
        opMs: sb,
        opLeftMs: kb,
        updateCount: Wb
      } = bb;
      return (0, Ba.jsx)("div", {
        className: JW()("Baf2MachineProgress", {
          Running: cb
        }),
        children: (0, Ba.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: sb / 1e3 + "s",
            animationDelay: null === kb ? void 0 : (kb - sb) / 1e3 + "s"
          }
        }, Wb)
      })
    }

    function gU(bb) {
      let {
        running: cb,
        leftMs: sb,
        periodMs: kb,
        updateCount: Wb
      } = bb;
      const {
        t: ab
      } = (0, yW.E)(), Tb = Math.min(Math.max(null !== sb && void 0 !== sb ? sb : 0, 0), kb), Ub = cb && Tb > 0, Ib = ab("buildAFactory2Game:machineBarFuel");
      return (0, Ba.jsx)("div", {
        className: JW()("Baf2FuelBurn", {
          Draining: Ub
        }),
        role: "img",
        title: Ib,
        "aria-label": Ib,
        children: (0, Ba.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: Ub ? {
            animationDuration: kb / 1e3 + "s",
            animationDelay: (Tb - kb) / 1e3 + "s"
          } : {
            transform: `scaleY(${Tb/kb})`
          }
        }, Wb)
      })
    }

    function BU(bb, cb, sb) {
      let [kb, Wb] = sb;
      const ab = 1 !== kb ? tW(cb) : null;
      return {
        amount: kb,
        have: Wb,
        item: bb(ab || aa(cb))
      }
    }

    function tU(bb) {
      return cs(bb) ? "buildAFactory2Game:machineBarMining" : ss(bb) ? "buildAFactory2Game:machineBarCutting" : void 0 !== bb.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function yU(bb) {
      var cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb;
      let {
        kind: Vb,
        XT: Lb,
        store: ub,
        power: Yb,
        renderSlot: hb
      } = bb;
      const {
        t: Jb
      } = (0, yW.E)(), gb = YU(ub, Lb), Bb = ic[Vb], tb = null !== (cb = null === gb || void 0 === gb ? void 0 : gb.coupled) && void 0 !== cb && cb, yb = null !== (sb = null === gb || void 0 === gb ? void 0 : gb.couplerLevel) && void 0 !== sb ? sb : 1, Pb = hU(Vb, tb, yb, null !== (kb = null === gb || void 0 === gb || null === (Wb = gb.dug) || void 0 === Wb ? void 0 : Wb.item) && void 0 !== kb ? kb : null), Db = null !== (ab = null === gb || void 0 === gb ? void 0 : gb.status) && void 0 !== ab ? ab : null, Eb = null !== (Tb = null === gb || void 0 === gb ? void 0 : gb.power) && void 0 !== Tb ? Tb : null, ib = null !== (Ub = null === gb || void 0 === gb ? void 0 : gb.opLeftMs) && void 0 !== Ub ? Ub : null, Ob = null !== (Ib = null === gb || void 0 === gb ? void 0 : gb.dug) && void 0 !== Ib ? Ib : null, Gb = null !== Ob && cs(Bb) ? Us[null !== (Hb = Is(Ob.item)) && void 0 !== Hb ? Hb : ""] : void 0, Kb = void 0 === Gb ? null : 6e4 / Gb, Zb = null !== (fb = null === gb || void 0 === gb ? void 0 : gb.powerCap) && void 0 !== fb ? fb : 4e3, zb = null !== (Mb = null === gb || void 0 === gb ? void 0 : gb.tier) && void 0 !== Mb ? Mb : null, qb = void 0 !== Pb.powerMade, db = null !== Bb.fuelSlot ? hb(Bb.fuelSlot) : null, Ab = dc(Bb), wb = !tb && !0 === (null === gb || void 0 === gb ? void 0 : gb.fuelFed), ob = !tb && !0 === (null === gb || void 0 === gb ? void 0 : gb.fuelFeeds), Sb = null !== Bb.fuelSlot && !tb, Rb = null !== (Xb = null === gb || void 0 === gb ? void 0 : gb.fuelLeftMs) && void 0 !== Xb ? Xb : null, vb = function(bb, cb, sb) {
        var kb;
        const Wb = null === cb ? void 0 : as[cb];
        return Math.max(null !== (kb = null !== Wb && void 0 !== Wb ? Wb : sb) && void 0 !== kb ? kb : 0, bb.opMs)
      }(Pb, null !== (nb = null === gb || void 0 === gb ? void 0 : gb.burning) && void 0 !== nb ? nb : null, Rb), Fb = null !== (mb = null === gb || void 0 === gb ? void 0 : gb.fuelKeep) && void 0 !== mb ? mb : null, xb = null === Db ? null : NU(Vb, Db, gb, wb), jb = null === Db ? null : VU(Db, gb);
      return (0, Ba.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Ba.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Jb(aa(Vb))
          }), Ob && (0, Ba.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [Jb("Tree Cutter" === Vb ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Ba.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Ba.jsx)(DW.d, {
                itemName: Ob.item,
                amount: 0
              })
            }), (0, Ba.jsx)(EW.d, {
              text: Ob.name
            })]
          }), null !== Kb && (0, Ba.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: Jb("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Kb)
            })
          }), (null === gb || void 0 === gb ? void 0 : gb.field) && (0, Ba.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Ba.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Ba.jsx)(DW.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), Jb("buildAFactory2Game:machineField", {
              planted: String(gb.field[0]),
              ripe: String(gb.field[1])
            })]
          }), (0, Ba.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Ba.jsxs)("div", {
              className: JW()("Baf2MachineColumn", {
                Baf2Burns: Sb
              }),
              children: [null !== Pb.inputSlot && (0, Ba.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Ba.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Jb(LU(Pb))
                }), hb(Pb.inputSlot)]
              }), null !== Bb.fuelSlot && !tb && (0, Ba.jsxs)("div", {
                className: JW()("Baf2MachineSlot", {
                  Baf2FuelFed: wb
                }),
                children: [(0, Ba.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [wb && (0, Ba.jsx)(PW.b, {
                    name: "fire"
                  }), Jb("buildAFactory2Game:machineFuel")]
                }), (0, Ba.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Ba.jsx)(gU, {
                    running: "running" === Db,
                    leftMs: Rb,
                    periodMs: vb,
                    updateCount: ub.updateCount
                  }), db]
                })]
              }), null !== Bb.fuelSlot && tb && (0, Ba.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Ba.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Jb("buildAFactory2Game:machineFuel")
                }), (0, Ba.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: Jb("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": Jb("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Ba.jsx)(PW.b, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Ba.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Ba.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Jb(tU(Pb))
              }), (0, Ba.jsx)(JU, {
                running: "running" === Db,
                opMs: Pb.opMs,
                opLeftMs: ib,
                updateCount: ub.updateCount
              })]
            }), Pb.outputSlots.length > 0 && (0, Ba.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Ba.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Jb("buildAFactory2Game:machineOutput")
              }), (0, Ba.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Pb.outputSlots.map((bb => (0, Ba.jsx)("div", {
                  children: hb(bb)
                }, bb)))
              })]
            }), null !== Eb && qb && (0, Ba.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Ba.jsx)("div", {
                style: {
                  height: 100 * Eb / Zb + "%"
                }
              })
            })]
          }), Sb && null !== Fb && (0, Ba.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Ba.jsx)(PW.b, {
              name: "arrows-rotate"
            }), Jb(ss(Pb) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Fb)
            })]
          }), (wb || ob) && (0, Ba.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Ba.jsx)(PW.b, {
              name: "fire"
            }), Jb(wb ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Bb.couplable && (0, Ba.jsx)(pT, {
            kind: Vb,
            tier: zb,
            coupled: tb,
            level: yb,
            slot: Ab === Bb.fuelSlot ? db : null !== Ab ? hb(Ab) : null
          }), null !== Eb && !qb && !0 === (null === gb || void 0 === gb ? void 0 : gb.reactorPowered) && (0, Ba.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: Jb("buildAFactory2Game:machineReactorPowered")
          }), null !== Eb && !qb && !0 !== (null === gb || void 0 === gb ? void 0 : gb.reactorPowered) && (0, Ba.jsx)(DT, {
            stored: Eb,
            cap: Zb,
            rates: null !== (lb = null === gb || void 0 === gb ? void 0 : gb.powerRates) && void 0 !== lb ? lb : null
          }), (null === gb || void 0 === gb ? void 0 : gb.water) && (0, Ba.jsx)(fU, {
            water: gb.water,
            at: Lb,
            side: gb.cryo ? "waterIn" : null
          }), (null === gb || void 0 === gb ? void 0 : gb.cryo) && (0, Ba.jsx)(fU, {
            water: gb.cryo,
            at: Lb,
            side: "cryoOut"
          }), null !== gb && void 0 !== gb && gb.inertCoupler ? (0, Ba.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: Jb("buildAFactory2Game:machineStatus_couplerOff", {
              item: Ta(Jb, gb.inertCoupler)
            })
          }) : null !== xb && (0, Ba.jsx)("div", {
            className: JW()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Db
            }),
            children: Jb(xb, jb ? BU(Jb, jb.input, jb.short) : void 0)
          })]
        }), (0, Ba.jsxs)("div", {
          className: JW()("Baf2MachineSide", {
            Baf2SynthSide: Sc(Bb)
          }),
          children: [Sc(Bb) && (0, Ba.jsx)(xT, {
            XT: Lb,
            taught: null !== (Qb = null === gb || void 0 === gb ? void 0 : gb.taught) && void 0 !== Qb ? Qb : null
          }, Lb.join(",")), qb && (0, Ba.jsx)(iT, {
            kind: Vb,
            def: Pb,
            XT: Lb,
            power: Yb,
            stored: null !== Eb && void 0 !== Eb ? Eb : 0,
            cap: Zb
          }), rb(Bb) && (0, Ba.jsx)(RT, {
            XT: Lb,
            input: null !== (eb = null === gb || void 0 === gb ? void 0 : gb.input) && void 0 !== eb ? eb : null,
            drops: null !== (Cb = null === gb || void 0 === gb ? void 0 : gb.farm) && void 0 !== Cb ? Cb : null,
            seconds: String(Pb.opMs / 1e3)
          }), !qb && !rb(Bb) && !Sc(Bb) && (0, Ba.jsx)(aT, {
            kind: Vb,
            def: Pb,
            input: null !== (Nb = null === gb || void 0 === gb ? void 0 : gb.input) && void 0 !== Nb ? Nb : null,
            tier: null !== zb && void 0 !== zb ? zb : 1,
            noSeeds: !0 === (null === gb || void 0 === gb ? void 0 : gb.noSeeds)
          })]
        })]
      })
    }

    function PU(bb, cb, sb, kb) {
      var Wb;
      const ab = ic[bb],
        Tb = [ab.inputSlot, ab.fuelSlot, ...null !== (Wb = ab.inputSlots) && void 0 !== Wb ? Wb : []].filter((bb => null !== bb));
      return {
        render: Wb => {
          let {
            XT: ab,
            renderSlot: Tb
          } = Wb;
          return (0, Ba.jsx)(AT.Provider, {
            value: kb,
            children: (0, Ba.jsx)(yU, {
              kind: bb,
              XT: ab,
              store: cb,
              power: sb,
              renderSlot: Tb
            })
          })
        },
        quickMoveRange: Tb.length > 0 ? [Math.min(...Tb), Math.max(...Tb) + 1] : [0, 0],
        className: uU(bb)
      }
    }
    const DU = "Assembler";

    function EU(bb) {
      var cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb;
      let {
        XT: fb,
        store: Mb,
        renderSlot: Xb
      } = bb;
      const {
        t: nb
      } = (0, yW.E)(), mb = YU(Mb, fb), lb = null !== (cb = null === mb || void 0 === mb ? void 0 : mb.tier) && void 0 !== cb ? cb : 1, Qb = null !== (sb = null === mb || void 0 === mb ? void 0 : mb.taught) && void 0 !== sb ? sb : null, eb = xc(DU, {
        coupled: !1,
        taught: Qb
      }), Cb = null !== (kb = eb.bench) && void 0 !== kb ? kb : null, Nb = null !== (Wb = null === mb || void 0 === mb ? void 0 : mb.status) && void 0 !== Wb ? Wb : null, Vb = null !== (ab = null === mb || void 0 === mb ? void 0 : mb.power) && void 0 !== ab ? ab : null, Lb = null !== (Tb = null === mb || void 0 === mb ? void 0 : mb.powerCap) && void 0 !== Tb ? Tb : 4e3;
      return (0, Ba.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Ba.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: nb(aa(DU))
          }), Cb && (0, Ba.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [nb("buildAFactory2Game:benchMakes"), (0, Ba.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Ba.jsx)(DW.d, {
                itemName: Cb.output,
                amount: 0
              })
            }), (null === mb || void 0 === mb ? void 0 : mb.taughtName) && (0, Ba.jsx)(EW.d, {
              text: mb.taughtName
            }), Cb.outputAmount > 1 && (0, Ba.jsxs)("span", {
              children: ["\xd7", Cb.outputAmount]
            })]
          }), !Cb && (0, Ba.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: nb("buildAFactory2Game:benchTeachHint")
          }), (0, Ba.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Ba.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (Ub = eb.inputSlots) && void 0 !== Ub ? Ub : []).map(((bb, cb) => {
                const sb = null === Cb || void 0 === Cb ? void 0 : Cb.inputs[cb];
                return (0, Ba.jsxs)("div", {
                  className: JW()("Baf2BenchInput", {
                    Spare: !sb
                  }),
                  children: [(0, Ba.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Xb(bb), sb && (0, Ba.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Ba.jsx)(DW.d, {
                        itemName: sb.item,
                        amount: 0
                      })
                    })]
                  }), (0, Ba.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: sb ? `\xd7${sb.amount}` : "\xa0"
                  })]
                }, bb)
              }))
            }), (0, Ba.jsx)(JU, {
              running: "running" === Nb,
              opMs: eb.opMs,
              opLeftMs: null !== (Ib = null === mb || void 0 === mb ? void 0 : mb.opLeftMs) && void 0 !== Ib ? Ib : null,
              updateCount: Mb.updateCount
            }), (0, Ba.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Ba.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: nb("buildAFactory2Game:machineOutput")
              }), (0, Ba.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: eb.outputSlots.map((bb => (0, Ba.jsx)("div", {
                  children: Xb(bb)
                }, bb)))
              })]
            })]
          }), null !== Vb && (0, Ba.jsx)(DT, {
            stored: Vb,
            cap: Lb,
            rates: null !== (Hb = null === mb || void 0 === mb ? void 0 : mb.powerRates) && void 0 !== Hb ? Hb : null
          }), null !== Nb && (0, Ba.jsx)("div", {
            className: JW()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Nb
            }),
            children: nb(NU(DU, Nb, mb, !1))
          }), Cb && Cb.inputs.length > 1 && (0, Ba.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: nb("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Ba.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Ba.jsx)(UT, {
            taught: Qb,
            tier: lb
          }), Cb && (0, Ba.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: nb("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function iU(bb) {
      var cb;
      const sb = null !== (cb = ic[DU].inputSlots) && void 0 !== cb ? cb : [];
      return {
        render: cb => {
          let {
            XT: sb,
            renderSlot: kb
          } = cb;
          return (0, Ba.jsx)(EU, {
            XT: sb,
            store: bb,
            renderSlot: kb
          })
        },
        quickMoveRange: [Math.min(...sb), Math.max(...sb) + 1],
        className: uU(DU)
      }
    }
    var OU = sb(117),
      GU = sb(1117),
      KU = sb(4023);
    const ZU = 600,
      zU = .5,
      qU = 4,
      dU = 1200,
      AU = 140,
      wU = 100,
      rU = 32,
      oU = 16,
      SU = 100.5,
      RU = 90,
      vU = 1.5,
      FU = 50;

    function xU(bb) {
      switch (Ds(bb)) {
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
    const jU = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function pU(bb) {
      const cb = Math.ceil(60 * bb / wU);
      return {
        fuel: Math.max(rU, cb),
        waste: Math.max(oU, cb)
      }
    }

    function bI(bb, cb, sb) {
      const [kb, Wb, ab] = [bb - 2, cb - 2, sb - 2];
      return 2 * (kb * Wb + Wb * ab + ab * kb) * AU
    }

    function cI(bb, cb, sb) {
      return Math.max(0, bb - 2) * Math.max(0, cb - 2) * Math.max(0, sb - 2)
    }

    function sI(bb, cb) {
      const [sb, kb, Wb] = bb, ab = sb * kb * Wb, Tb = new Float32Array(ab);
      let Ub = 0,
        Ib = 0,
        Hb = 0,
        fb = 0,
        Mb = 0;
      const Xb = (bb, ab, Tb) => bb < 0 || bb >= sb || ab < 0 || ab >= kb || Tb < 0 || Tb >= Wb ? 0 : cb[(ab * Wb + Tb) * sb + bb];
      for (let Qb = 0; Qb < kb; Qb++)
        for (let bb = 0; bb < Wb; bb++)
          for (let kb = 0; kb < sb; kb++) {
            const ab = (Qb * Wb + bb) * sb + kb,
              nb = cb[ab];
            if (1 === nb) {
              Ub++;
              let cb = 0;
              for (const [sb, Wb, ab] of jU) {
                const Tb = Xb(kb + sb, Qb + Wb, bb + ab);
                1 !== Tb && 2 !== Tb || cb++
              }
              Tb[ab] = ZU * (1 + zU * Math.min(cb, qU)), fb += Tb[ab]
            } else if (2 === nb) Ib++;
            else if (3 === nb) {
              Hb++;
              jU.some((cb => {
                let [sb, Wb, ab] = cb;
                return 1 === Xb(kb + sb, Qb + Wb, bb + ab)
              })) && (Mb += dU)
            }
          }
      const nb = bI(sb + 2, kb + 2, Wb + 2),
        mb = Math.min(fb, Mb, nb),
        lb = Ub > 0 ? fb * wU / Ub : 0;
      return {
        rods: Ub,
        graphite: Ib,
        channels: Hb,
        fuelHeat: fb,
        cooling: Mb,
        size: nb,
        max: mb,
        vol: ab,
        powerPerUnit: lb,
        pelletsPerMin: lb > 0 ? mb / lb * 60 : 0,
        waterPerS: mb * jb.o,
        rodHeat: Tb
      }
    }
    const kI = 0,
      WI = 1,
      aI = 6,
      TI = 7,
      UI = 8;

    function II(bb, cb) {
      const [sb, kb, Wb] = bb, ab = new Uint8Array(sb * kb * Wb), Tb = (bb, ab, Tb) => bb < 0 || bb >= sb || ab < 0 || ab >= kb || Tb < 0 || Tb >= Wb ? 0 : cb[(ab * Wb + Tb) * sb + bb];
      for (let Ub = 0; Ub < kb; Ub++)
        for (let bb = 0; bb < Wb; bb++)
          for (let kb = 0; kb < sb; kb++) {
            const Ib = (Ub * Wb + bb) * sb + kb,
              Hb = cb[Ib];
            if (1 === Hb) {
              let cb = 0;
              for (const [sb, Wb, ab] of jU) {
                const Ib = Tb(kb + sb, Ub + Wb, bb + ab);
                cb += 1 === Ib || 2 === Ib ? 1 : 0
              }
              ab[Ib] = WI + Math.min(cb, qU)
            } else if (3 === Hb) {
              const cb = jU.some((cb => {
                let [sb, Wb, ab] = cb;
                return 1 === Tb(kb + sb, Ub + Wb, bb + ab)
              }));
              ab[Ib] = cb ? aI : TI
            } else 2 === Hb && (ab[Ib] = UI)
          }
      return ab
    }

    function HI(bb) {
      return bb.fuelHeat <= bb.cooling && bb.fuelHeat <= bb.size ? "fuel" : bb.cooling <= bb.size ? "cooling" : "size"
    }
    const fI = RU;

    function MI(bb, cb, sb) {
      return Math.round(bb * cb * sb * 25e3 * (1 + .25 * (Math.min(bb, cb, sb) - 2)))
    }

    function XI(bb) {
      return Math.max(0, Math.min(jb.h, bb))
    }

    function nI(bb, cb, sb) {
      const kb = cb * XI(sb);
      return bb <= 0 ? 0 : kb > 0 ? Math.min(200, 100 * bb / kb) : 200
    }

    function mI(bb, cb) {
      const sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? vU : 1;
      return Math.min(bb.fuelHeat * sb, bb.cooling * XI(cb), bb.size * sb)
    }

    function lI(bb) {
      return 2 + bb / 10
    }
    const QI = "buildAFactory2Game:";

    function eI(bb) {
      var cb;
      return null !== (cb = bb.baf2RxMood) && void 0 !== cb ? cb : function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const sb = [
          ["calm", 50],
          ["warm", fI],
          ["hot", SU]
        ];
        for (const [kb, Wb] of sb)
          if (bb < Wb + (kb === cb ? 3 : 0)) return kb;
        return "alarm"
      }(bb.baf2RxHeat)
    }
    const CI = 120;

    function NI(bb) {
      const cb = bb.baf2RxState;
      if ("running" === cb && bb.baf2RxHeat > SU) return {
        label: `${QI}rxState_tooHot`,
        tone: "bad",
        fix: `${QI}rxFix_tooHot`
      };
      switch (cb) {
        case "running":
          return {
            label: `${QI}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${QI}rxState_idle`, tone: "off", fix: `${QI}rxFix_idle`
          };
        case "scram":
          return {
            label: `${QI}rxState_scram`, tone: "off", fix: bb.baf2RxHeat < FU ? `${QI}rxFix_scramCool` : `${QI}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${QI}rxState_${cb}`, tone: "off", fix: `${QI}rxFix_${cb}`
          };
        case "melted":
          return {
            label: `${QI}rxState_melted`, tone: "bad", fix: `${QI}rxFix_melted`
          };
        default:
          return {
            label: `${QI}rxState_${cb}`, tone: "warn", fix: `${QI}rxFix_${cb}`
          }
      }
    }

    function VI(bb) {
      const [cb, sb, kb] = bb.baf2RxStats;
      return {
        fuelHeat: cb,
        cooling: sb * (bb.baf2RxCryo ? Math.max(1, XI(bb.baf2RxWater / 100)) : 1),
        size: kb
      }
    }

    function LI(bb) {
      var cb;
      const sb = "idle" === bb.baf2RxState || "running" === bb.baf2RxState && bb.baf2RxHeat <= SU || "scram" === bb.baf2RxState && bb.baf2RxHeat < FU;
      if (0 === (bb.baf2RxFlags & Vc) || !bb.baf2RxFormed || !sb) return null;
      const {
        fuelHeat: kb,
        cooling: Wb,
        size: ab
      } = VI(bb), Tb = Math.min(kb, Wb, ab), Ub = HI({
        fuelHeat: kb,
        cooling: Wb,
        size: ab
      }), Ib = "cooling" === Ub && !0 === bb.baf2RxCryoOpen && !bb.baf2RxCryo, Hb = null !== (cb = bb.baf2RxCells) && void 0 !== cb ? cb : "", fb = ("fuel" === Ub || "cooling" === Ub && !0 === bb.baf2RxCryo) && Hb.length > 0 && !Hb.includes(String(0)), Mb = Ib ? "Cryo" : "scram" === bb.baf2RxState ? "Off" : "";
      return Tb < 12e3 ? {
        key: `${QI}rxGrow_${fb?"full":Ub}${Mb}`,
        amount: Tb
      } : null
    }

    function uI(bb, cb) {
      return bb[0] === cb[0] && bb[1] === cb[1] && bb[2] === cb[2]
    }

    function YI(bb) {
      return [...bb].sort(((bb, cb) => Number(cb[2] < cb[1]) - Number(bb[2] < bb[1])))
    }

    function hI(bb, cb) {
      return cb.some((cb => {
        let [sb, kb] = cb;
        return !(kb <= 0) && ["edge", "cap", "wall", "inside"].some((cb => sb === Uk(bb, cb)))
      }))
    }

    function JI(bb, cb, sb) {
      const kb = bb.baf2RxFuel - bb.baf2RxPu > 0 ? sb : 0;
      return {
        full: bb.baf2RxWaste > cb - 3,
        fullInS: kb > 0 ? Math.max(0, cb - bb.baf2RxWaste) / kb : null
      }
    }
    const gI = {
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

    function BI(bb) {
      return tI[bb]
    }
    const tI = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function yI(bb) {
      let [cb, sb, kb] = bb;
      return Math.ceil(bI(cb, sb, kb) * jb.o)
    }

    function PI(bb, cb) {
      return "battery" === bb ? cb[0] * cb[1] * cb[2] : function(bb) {
        let [cb, sb, kb] = bb;
        return cb * sb * kb - Math.max(0, cb - 2) * Math.max(0, sb - 2) * Math.max(0, kb - 2)
      }(cb) - 1
    }

    function DI(bb) {
      const cb = Math.max(0, bb);
      if (cb < 10) return String(Math.round(10 * cb) / 10);
      if (cb < 1e4) return Math.round(cb).toLocaleString("en-US");
      if (cb < 1e6) return `${cb<1e5?(Math.floor(cb/100)/10).toFixed(1):Math.floor(cb/1e3)}k`;
      const sb = cb / 1e6;
      return `${sb<10?(Math.floor(100*sb)/100).toFixed(2):sb<100?(Math.floor(10*sb)/10).toFixed(1):Math.floor(sb)}M`
    }

    function EI(bb) {
      return bb <= 0 ? "0" : bb >= 10 ? String(Math.round(bb)) : bb.toFixed(bb >= 1 ? 1 : 2)
    }

    function iI(bb) {
      const cb = bk(bb, 0),
        sb = bk(bb, vs(bb) - 1);
      return {
        lo: [Math.min(cb[0], sb[0]), Math.min(cb[1], sb[1]), Math.min(cb[2], sb[2])],
        hi: [Math.max(cb[0], sb[0]) + 1, Math.max(cb[1], sb[1]) + 1, Math.max(cb[2], sb[2]) + 1]
      }
    }

    function OI(bb, cb, sb) {
      const kb = [cb[0] - bb[0], cb[1] - bb[1], cb[2] - bb[2]],
        Wb = [(bb[0] + cb[0]) / 2, (bb[1] + cb[1]) / 2, (bb[2] + cb[2]) / 2],
        ab = [];
      for (let Tb = 0; Tb < 3; Tb++) {
        const Ub = (Tb + 1) % 3,
          Ib = (Tb + 2) % 3;
        for (const Hb of [bb[Ub], cb[Ub]])
          for (const fb of [bb[Ib], cb[Ib]]) {
            const bb = [0, 0, 0],
              cb = [sb, sb, sb];
            bb[Tb] = Wb[Tb], cb[Tb] = kb[Tb] + sb, bb[Ub] = Hb, bb[Ib] = fb, ab.push([bb, cb])
          }
      }
      return ab
    }
    const GI = "buildAFactory2Game:",
      KI = [`${GI}colNorth`, `${GI}colEast`, `${GI}colSouth`, `${GI}colWest`];

    function ZI(bb, cb) {
      const [sb, kb, Wb] = bb.baf2ColAt;
      return `baf2col ${sb} ${kb} ${Wb} ${cb}`
    }

    function zI(bb) {
      return function(bb) {
        if (!Number.isFinite(bb)) return "";
        const cb = Math.max(1, Math.round(bb));
        if (cb < 60) return `${cb}s`;
        const sb = cb % 60;
        return 0 === sb ? cb / 60 + "m" : `${Math.floor(cb/60)}m ${sb}s`
      }(function(bb) {
        const cb = Ik.FOCUS_BY_LASERS[Math.max(0, Math.min(4, bb))];
        return cb > 0 ? Ik.NOVA_FOCUS / cb : 1 / 0
      }(bb))
    }

    function qI(bb) {
      const cb = Math.abs(Math.round(bb));
      return cb < 1e3 ? Math.round(bb).toLocaleString("en-US") : cb < 1e6 ? `${cb<1e5?(bb/1e3).toFixed(1).replace(/\.0$/,""):Math.round(bb/1e3)}k` : `${(bb/1e6).toFixed(cb<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function dI(bb, cb, sb) {
      if (mk(cb) >= 0) {
        const cb = function(bb, cb) {
          return bb.find((bb => {
            let {
              focus: sb
            } = bb;
            return sb[0] === cb[0] && sb[2] === cb[2] && (cb[1] === sb[1] || cb[1] === sb[1] - 1)
          }))
        }(bb, sb);
        if (!cb) return null;
        const Wb = function(bb) {
          let cb = 0,
            sb = 0;
          for (let kb = 0; kb < 4; kb++) cb += bb.laser[kb] ? 1 : 0, sb += bb.live[kb] ? 1 : 0;
          return {
            lasers: cb,
            live: sb,
            focusPerS: Ik.FOCUS_BY_LASERS[sb],
            drawPerS: Ik.LASER_DRAW * sb
          }
        }({
          laser: cb.lasers,
          live: cb.live
        });
        if (0 === Wb.lasers || "noLasers" === cb.state) return {
          key: `${GI}lookColNoLasers`
        };
        if (0 === Wb.live) return {
          key: `${GI}lookColOff_blocked`
        };
        if (!(cb.on && Wb.live > 0) && ("running" !== (kb = cb.state) && "slowed" !== kb)) return {
          key: `${GI}lookColOff_${cb.state}`
        };
        if (Wb.live < Wb.lasers) return {
          key: `${GI}lookColLasersSome`,
          params: {
            lasers: String(Wb.lasers),
            live: String(Wb.live)
          }
        };
        const ab = cb.open.filter(Boolean).length;
        return ab < 4 ? {
          key: `${GI}lookColLasersSpots`,
          params: {
            live: String(Wb.live),
            spots: String(ab),
            time: zI(Wb.live)
          }
        } : {
          key: `${GI}lookColLasers`,
          params: {
            live: String(Wb.live),
            time: zI(Wb.live)
          }
        }
      }
      var kb;
      if (!lk(cb)) return null;
      const Wb = function(bb, cb) {
        for (const sb of bb) {
          const bb = Nk(sb.focus, [cb[0], cb[1], cb[2]]);
          if (bb && bb.VU === Ik.LASER_D && sb.lasers[bb.dir]) return {
            entry: sb,
            dir: bb.dir
          }
        }
        return null
      }(bb, sb);
      if (!Wb) return {
        key: `${GI}lookLaserNoCollider`
      };
      const {
        entry: ab,
        dir: Tb
      } = Wb;
      return ab.open[Tb] ? ab.live[Tb] ? {
        key: ab.on ? `${GI}lookLaserFiring` : `${GI}lookLaserReady`
      } : {
        key: `${GI}lookLaserBlocked`
      } : {
        key: `${GI}lookLaserClosed`
      }
    }

    function AI(bb, cb) {
      const sb = [];
      for (let kb = 1; kb < Ik.LASER_D; kb++) bb & 1 << cb * (Ik.LASER_D - 1) + kb - 1 && sb.push(kb);
      return sb
    }
    const wI = {
      firing: `${GI}colSlotFiring`,
      ready: `${GI}colSlotReady`,
      blocked: `${GI}colSlotBlocked`,
      empty: `${GI}colSlotEmpty`,
      closed: `${GI}colSlotClosed`
    };

    function rI(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const ab = IW(bb),
        Tb = IW(cb),
        Ub = IW(sb),
        Ib = Ub.filter(Boolean).length,
        Hb = ab.filter(Boolean).length,
        fb = [0, 1, 2, 3].map((bb => Tb[bb] ? ab[bb] ? Ub[bb] ? kb ? "firing" : "ready" : "blocked" : (bb => AI(Wb, bb).length > 0)(bb) ? "blocked" : "empty" : "closed")),
        Mb = fb.indexOf("blocked"),
        Xb = Mb < 0 && Hb > 0 ? fb.indexOf("empty") : -1;
      return fb.map(((bb, cb) => {
        const sb = cb === Mb ? {
          key: `${GI}colSlotClear`
        } : cb === Xb ? {
          key: `${GI}colSlotAdd`,
          params: {
            time: zI(Math.min(4, Ib + 1))
          }
        } : null;
        return {
          dir: cb,
          tone: bb,
          title: {
            key: "blocked" !== bb || ab[cb] ? wI[bb] : `${GI}colSlotGap`,
            keys: {
              dir: KI[cb]
            }
          },
          hint: sb
        }
      }))
    }

    function oI(bb) {
      var cb;
      return "noPower" === bb.baf2ColState && bb.baf2ColRxState ? NI({
        baf2RxState: bb.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (cb = bb.baf2ColRxHeat) && void 0 !== cb ? cb : 0
      }) : null
    }

    function SI(bb) {
      const cb = IW(bb.baf2ColSpots).filter(Boolean).length,
        sb = IW(bb.baf2ColLive);
      let kb = 0,
        Wb = 0;
      return IW(bb.baf2ColLasers).forEach(((bb, cb) => {
        bb && (kb++, Wb += sb[cb] ? 0 : 1)
      })), Wb > 0 ? {
        key: `${GI}colSubSome`,
        params: {
          blocked: String(Wb),
          lasers: String(kb)
        }
      } : cb < 4 ? {
        key: `${GI}colSubSpots`,
        params: {
          lasers: String(kb),
          spots: String(cb)
        }
      } : {
        key: `${GI}colSub`,
        params: {
          lasers: String(kb)
        }
      }
    }

    function RI(bb) {
      const cb = oI(bb);
      if ("idle" === bb.baf2ColRxState && cb) return {
        key: `${GI}colState_noPowerIdle`
      };
      if (cb) return {
        key: `${GI}colState_noPowerReactor`,
        keys: {
          state: cb.label
        }
      };
      if ("noInput" !== bb.baf2ColState) return {
        key: `${GI}colState_${bb.baf2ColState}`
      };
      const sb = String(Math.max(0, Ik.NOVA_SA - bb.baf2ColSa)),
        kb = String(Math.max(0, Ik.NOVA_GD - bb.baf2ColGd));
      return "0" !== sb && "0" !== kb ? {
        key: `${GI}colState_noInput`,
        params: {
          sa: sb,
          gd: kb
        }
      } : "0" !== sb ? {
        key: `${GI}colState_noStarAlloy`,
        params: {
          sa: sb
        }
      } : "0" !== kb ? {
        key: `${GI}colState_noGlowDust`,
        params: {
          gd: kb
        }
      } : {
        key: `${GI}colState_running`
      }
    }

    function vI(bb) {
      return bb.baf2ColP < 0 ? `${GI}colNext` : function(bb) {
        const cb = bb.baf2ColState;
        return bb.baf2ColP >= 0 && ("blocked" === cb || "noLasers" === cb || "noPower" === cb)
      }(bb) ? `${GI}colStalled` : null === FI(bb) ? `${GI}colMaking` : `${GI}colNovaIn`
    }

    function FI(bb) {
      if (bb.baf2ColP < 0 || bb.baf2ColWant <= 0) return null;
      const cb = bb.baf2ColFocusPerS * Math.min(1, bb.baf2ColDraw / bb.baf2ColWant);
      return cb > 0 ? Math.max(0, Ik.NOVA_FOCUS - bb.baf2ColP) / cb : null
    }

    function xI(bb, cb) {
      const sb = [];
      for (let kb = 1; kb <= 3; kb++) {
        const Wb = [bb[0], bb[1] - kb, bb[2]];
        if (!cb(Wb)) return sb;
        sb.push(Wb)
      }
      return []
    }

    function jI(bb, cb) {
      const sb = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let kb = 0; kb < 4; kb++) {
        const Wb = kb,
          ab = Ck(bb.focus, Wb, Ik.LASER_D);
        if (bb.lasers[kb] || !bb.open[kb] || !cb(ab)) continue;
        const Tb = [];
        for (let sb = 1; sb < Ik.LASER_D; sb++) {
          const kb = Ck(bb.focus, Wb, sb);
          cb(kb) || Tb.push(kb)
        }
        sb.supports.push(...xI(ab, cb)), 0 === Tb.length ? sb.free.push(ab) : (sb.blocked.push(ab), sb.gaps.push(...Tb))
      }
      return sb
    }
    const pI = Ik.LASER_D - .25,
      bH = 4,
      cH = 2,
      sH = 16;
    const kH = {
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
        blendMode: KU.f.Standard,
        soft: !0
      },
      WH = {
        green: kH,
        pink: {
          ...kH,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function aH(bb, cb) {
      const sb = {
        ...cb.params
      };
      for (const [Wb, ab] of Object.entries(null !== (kb = cb.keys) && void 0 !== kb ? kb : {})) {
        var kb;
        sb[Wb] = bb(ab)
      }
      return sb
    }
    const TH = "buildAFactory2Game:",
      UH = 2 * Ik.LASER_D + 1,
      IH = Ik.LASER_D;

    function HH(bb) {
      return bb(`${TH}colFocusTip`, {
        need: qI(Ik.NOVA_FOCUS)
      })
    }

    function fH(bb, cb) {
      return bb(cb.key, aH(bb, cb))
    }

    function MH(bb) {
      const cb = bb.getStatus();
      return {
        status: cb,
        entry: cb ? bb.entryAtRoot(cb.baf2ColAt) : void 0
      }
    }

    function XH(bb, cb) {
      return {
        left: 100 * (IH + bb) / UH + "%",
        top: 100 * (IH + cb) / UH + "%"
      }
    }

    function nH(bb) {
      let {
        status: cb,
        entry: sb
      } = bb;
      const kb = IW(cb.baf2ColLasers),
        Wb = IW(cb.baf2ColSpots),
        ab = IW(cb.baf2ColLive),
        Tb = !0 === (null === sb || void 0 === sb ? void 0 : sb.on),
        Ub = Ik.LASER_D,
        Ib = [];
      for (let nb = 0; nb < 4; nb++) {
        const [bb, , cb] = ek[nb];
        if (ab[nb]) {
          const sb = 100 * (Ub - 1) / UH,
            kb = bb + cb > 0 ? 100 * (IH + 1) / UH : 100 * (IH - (Ub - 1)) / UH,
            Wb = 100 * (IH + .35) / UH,
            ab = 30 / UH,
            Hb = 0 !== bb ? {
              left: `${kb}%`,
              width: `${sb}%`,
              top: `${Wb}%`,
              height: `${ab}%`
            } : {
              top: `${kb}%`,
              height: `${sb}%`,
              left: `${Wb}%`,
              width: `${ab}%`
            };
          Ib.push((0, Ba.jsx)("i", {
            className: JW()("Baf2ColDiagramBeam", {
              Off: !Tb
            }),
            style: Hb
          }, `beam${nb}`))
        }
        const sb = kb[nb] ? "Baf2ColDiagramLaser" : Wb[nb] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Ib.push((0, Ba.jsx)("i", {
          className: sb,
          style: XH(bb * Ub, cb * Ub)
        }, `spot${nb}`))
      }
      for (let nb = 0; nb < 4; nb++) {
        if (kb[nb] || !Wb[nb]) continue;
        const [bb, , sb] = ek[nb];
        for (const kb of AI(null !== (Hb = cb.baf2ColGaps) && void 0 !== Hb ? Hb : 0, nb)) {
          var Hb;
          Ib.push((0, Ba.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: XH(bb * kb, sb * kb)
          }, `gap${nb},${kb}`))
        }
      }
      for (const [nb, , mb] of null !== (fb = null === sb || void 0 === sb ? void 0 : sb.blockers) && void 0 !== fb ? fb : []) {
        var fb, Mb, Xb;
        const bb = nb - (null !== (Mb = null === sb || void 0 === sb ? void 0 : sb.focus[0]) && void 0 !== Mb ? Mb : 0),
          cb = mb - (null !== (Xb = null === sb || void 0 === sb ? void 0 : sb.focus[2]) && void 0 !== Xb ? Xb : 0);
        Ib.push((0, Ba.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: XH(bb, cb)
        }, `block${bb},${cb}`))
      }
      return (0, Ba.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Ib, (0, Ba.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function mH(bb) {
      let {
        status: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)(), kb = IW(cb.baf2ColLive).filter(Boolean).length;
      return (0, Ba.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: HH(sb),
          children: sb(`${TH}colLadder`)
        }), (0, Ba.jsx)("ul", {
          children: [1, 2, 3, 4].map((bb => (0, Ba.jsx)("li", {
            className: JW()({
              On: bb === kb
            }),
            children: sb(`${TH}colLadderChip`, {
              lasers: String(bb),
              time: zI(bb)
            })
          }, bb)))
        })]
      })
    }

    function lH(bb) {
      let {
        item: cb,
        qU: sb,
        need: kb,
        cap: Wb
      } = bb;
      const {
        t: ab
      } = (0, yW.E)(), Tb = Math.min(sb, kb);
      return (0, Ba.jsxs)("li", {
        className: JW()("Baf2ColTile", {
          Short: sb < kb
        }),
        children: [(0, Ba.jsx)(QH, {
          item: cb
        }), (0, Ba.jsx)("b", {
          className: "Baf2ColTileValue",
          children: ab(`${TH}colOutOf`, {
            amount: String(Tb),
            cap: String(kb)
          })
        }), (0, Ba.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Ba.jsx)("i", {
            style: {
              width: 100 * Tb / kb + "%"
            }
          })
        }), sb > kb && (0, Ba.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: ab(`${TH}colIntakeHeld`, {
            amount: String(sb),
            cap: String(Wb)
          })
        })]
      })
    }

    function QH(bb) {
      let {
        item: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)();
      return (0, Ba.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Ba.jsx)(DW.d, {
            itemName: cb,
            amount: 0
          })
        }), (0, Ba.jsx)("span", {
          className: "Baf2ColTileName",
          children: Ta(sb, cb)
        })]
      })
    }

    function eH(bb) {
      switch (bb.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function CH(bb) {
      var cb, sb, Wb;
      let {
        store: ab,
        close: Tb
      } = bb;
      const {
        t: Ub
      } = (0, yW.E)(), Ib = wT(), {
        status: Hb,
        entry: fb
      } = function(bb) {
        const [cb, sb] = (0, kb.useState)((() => MH(bb)));
        return (0, kb.useEffect)((() => (sb(MH(bb)), bb.subscribe((() => {
          sb(MH(bb))
        })))), [bb]), cb
      }(ab), [Mb, Xb] = (0, kb.useState)(null), nb = null === Hb || void 0 === Hb ? void 0 : Hb.baf2ColHold;
      (0, kb.useEffect)((() => {
        Xb(null)
      }), [nb]);
      const mb = (0, kb.useRef)({
          p: -1,
          n: 0
        }),
        lb = null !== (cb = null === Hb || void 0 === Hb ? void 0 : Hb.baf2ColP) && void 0 !== cb ? cb : -1;
      lb < mb.current.p && mb.current.n++, mb.current.p = lb;
      const Qb = (0, kb.useRef)(null),
        [eb] = (0, kb.useState)((() => {
          return (bb = ab.heldAtOpen()) === Mk || bb === Xk ? {
            key: `${GI}colBeltItIn`,
            item: bb
          } : null;
          var bb
        }));
      if (!Hb) return null;
      const Cb = Hb.baf2ColMember,
        Nb = Hb.baf2ColP >= 0,
        Vb = function(bb, cb) {
          if (bb.baf2ColP >= 0 && bb.baf2ColDraw > 0) {
            const cb = bb.baf2ColWant > 0 ? Math.min(1, bb.baf2ColDraw / bb.baf2ColWant) : 0;
            return {
              focus: bb.baf2ColFocusPerS * cb,
              draw: bb.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === bb.baf2ColState && cb && cb.draw > 0 ? {
            ...cb,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Hb, Qb.current);
      Qb.current = Vb.draw > 0 ? Vb : null;
      const Lb = "slowed" === Hb.baf2ColState || "noPower" === Hb.baf2ColState,
        ub = FI(Hb),
        Yb = null !== Mb && void 0 !== Mb ? Mb : Hb.baf2ColHold,
        hb = function(bb) {
          var cb, sb;
          return "idle" === bb.baf2ColRxState ? null : null !== (cb = null === (sb = oI(bb)) || void 0 === sb ? void 0 : sb.fix) && void 0 !== cb ? cb : null
        }(Hb),
        Jb = null === hb && null === eb ? function(bb) {
          var cb;
          const sb = bb.baf2ColSentTo;
          if (!sb) return null;
          const kb = null !== (cb = bb.baf2ColSentHeld) && void 0 !== cb ? cb : null;
          return {
            key: null === kb ? `${GI}colNovaSentToMachine` : `${GI}colNovaSentTo`,
            target: sb,
            qU: kb
          }
        }(Hb) : null,
        gb = Nb ? Ub(`${TH}colFocusOf`, {
          focus: qI(Hb.baf2ColP),
          need: qI(Ik.NOVA_FOCUS)
        }) : null;
      return (0, Ba.jsx)(YT.c, {
        close: Tb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Ba.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Ba.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Ba.jsx)(DW.d, {
                  itemName: Hk,
                  amount: 0
                })
              }), (0, Ba.jsxs)("div", {
                children: [(0, Ba.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: Ta(Ub, Hk)
                }), (0, Ba.jsx)("p", {
                  children: fH(Ub, SI(Hb))
                })]
              })]
            }), (0, Ba.jsx)(hT.j, {
              onClick: Tb
            })]
          }), (0, Ba.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Ba.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Ba.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Ba.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: Ub(vI(Hb), {
                    time: null === ub ? "" : Ya(Ub, ub)
                  })
                }), (0, Ba.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Ba.jsx)("i", {
                    style: {
                      width: (Nb ? 100 * Hb.baf2ColP / Ik.NOVA_FOCUS : 0) + "%"
                    }
                  }, mb.current.n)
                }), (0, Ba.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Ba.jsxs)("span", {
                    title: HH(Ub),
                    children: [(0, Ba.jsx)("b", {
                      children: qI(Vb.focus)
                    }), " ", Ub(`${TH}colFocusPerS`)]
                  }), (0, Ba.jsxs)("span", {
                    className: JW()("Baf2ColDraw", {
                      Short: Lb
                    }),
                    children: [(0, Ba.jsx)(PW.b, {
                      name: "bolt"
                    }), Lb ? Ub(`${TH}colDrawOf`, {
                      draw: qI(Hb.baf2ColDraw),
                      want: qI(Hb.baf2ColWant)
                    }) : Ub(`${TH}colPowerPerS`, {
                      rate: qI(Vb.draw)
                    })]
                  }), null !== gb && (0, Ba.jsx)("span", {
                    className: "Soft",
                    children: gb
                  })]
                })]
              }), (0, Ba.jsx)("p", {
                className: JW()("Baf2ColState", eH(Hb)),
                children: fH(Ub, RI(Hb))
              }), null !== hb && (0, Ba.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ub(hb)
              }), null === hb && null !== eb && (0, Ba.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ub(eb.key, {
                  item: Ta(Ub, eb.item)
                })
              }), Jb && (0, Ba.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ub(Jb.key, {
                  target: Ta(Ub, Jb.target),
                  amount: String(null !== (sb = Jb.qU) && void 0 !== sb ? sb : 0)
                })
              }), (0, Ba.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Ba.jsx)(lH, {
                  item: Mk,
                  qU: Hb.baf2ColSa,
                  need: Ik.NOVA_SA,
                  cap: Ik.SA_CAP
                }), (0, Ba.jsx)(lH, {
                  item: Xk,
                  qU: Hb.baf2ColGd,
                  need: Ik.NOVA_GD,
                  cap: Ik.GD_CAP
                }), (0, Ba.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Ba.jsx)(QH, {
                    item: "Nova Matter"
                  }), (0, Ba.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: Ub(`${TH}colNovaHeld`, {
                      amount: String(Hb.baf2ColOut),
                      cap: String(Ik.OUT_CAP)
                    })
                  }), Cb && (0, Ba.jsx)(hT.n, {
                    className: "Baf2ColTake",
                    disabled: 0 === Hb.baf2ColOut,
                    onClick: () => {
                      Ib.send(ZI(Hb, "take"))
                    },
                    children: Ub(`${TH}colTake`)
                  })]
                })]
              }), Cb && (0, Ba.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Yb,
                className: JW()("Baf2ColHold", {
                  On: Yb
                }),
                onClick: bb => {
                  bb.detail > 0 && bb.currentTarget.blur(), Xb(!Yb), Ib.send(ZI(Hb, "hold " + (Yb ? 0 : 1)))
                },
                children: [(0, Ba.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Ba.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Ba.jsx)("b", {
                    children: Ub(`${TH}colHold`)
                  }), (0, Ba.jsx)("span", {
                    children: Ub(`${TH}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Ba.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Ba.jsx)(nH, {
                status: Hb,
                entry: fb
              }), (0, Ba.jsx)("ul", {
                className: "Baf2ColSlots",
                children: rI(Hb.baf2ColLasers, Hb.baf2ColSpots, Hb.baf2ColLive, Vb.beamsOn, null !== (Wb = Hb.baf2ColGaps) && void 0 !== Wb ? Wb : 0).map((bb => (0, Ba.jsxs)("li", {
                  className: bb.tone,
                  children: [(0, Ba.jsx)("b", {
                    children: fH(Ub, bb.title)
                  }), null !== bb.hint && (0, Ba.jsx)("span", {
                    children: fH(Ub, bb.hint)
                  })]
                }, bb.dir)))
              }), (0, Ba.jsx)(mH, {
                status: Hb
              })]
            })]
          })]
        })
      })
    }
    const NH = "buildAFactory2Game:",
      VH = 36e5,
      LH = 864e5;

    function uH(bb, cb, sb) {
      return Math.max(0, Math.ceil((bb + cb - Math.max(sb, bb)) / 1e3))
    }

    function YH(bb) {
      return bb.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function hH(bb) {
      return "Homestead" === bb
    }

    function JH(bb) {
      return function(bb) {
        let cb = 0;
        for (const sb of bb) {
          const bb = /^Island ([1-9]\d{0,5})$/.exec(sb);
          bb && (cb = Math.max(cb, Number(bb[1])))
        }
        return `Island ${cb+1}`
      }(bb.map((bb => bb.baf2IslandName)))
    }

    function gH(bb, cb) {
      return function(bb) {
        return `${NH}islandsBlocked${bb[0].toUpperCase()}${bb.slice(1)}`
      }("degraded" === bb && 0 === cb ? "stuck" : bb)
    }

    function BH(bb) {
      return bb.filter((bb => {
        var cb;
        return !bb.baf2IslandActive && void 0 === bb.baf2IslandUnreadable && void 0 === (null === (cb = bb.baf2IslandCoop) || void 0 === cb ? void 0 : cb.baf2CoopState)
      })).length
    }

    function tH(bb) {
      return "coopMoving" === bb || "coopUnreachable" === bb
    }

    function yH(bb, cb) {
      const sb = cb > 0;
      return {
        change: null === bb && !sb,
        switch: (null === bb || "degraded" === bb || tH(bb)) && !sb,
        rename: "loading" !== bb && "degraded" !== bb && "stuck" !== bb
      }
    }

    function PH(bb, cb) {
      return void 0 === bb || "corrupt" === bb && cb
    }
    const DH = GT;

    function EH(bb, cb, sb) {
      if (null !== bb && void 0 !== bb && bb.untilGone) {
        var kb;
        return !("dismiss" === bb.untilGone && void 0 === (null === (kb = cb.baf2IslandCoop) || void 0 === kb ? void 0 : kb.baf2CoopState)) && sb - bb.atMs < 32500
      }
      return void 0 !== bb && sb - bb.atMs < DH && cb.baf2IslandName === bb.from
    }
    const iH = GT;

    function OH(bb) {
      return "core" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.core : "islands" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.backToCore : void 0
    }

    function GH(bb) {
      return `\0${bb}\0`
    }

    function KH(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const kb = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const ab of Object.keys(sb)) kb[ab] = GH(ab);
      let Wb = Object.keys(kb).length > 0 ? bb(cb, kb) : bb(cb);
      for (const [ab, Tb] of Object.entries(sb)) Wb = Wb.split(GH(ab)).join(Tb);
      return Wb
    }

    function ZH(bb, cb) {
      return bb ? cb ? "enabled" : "disabled" : "hidden"
    }
    const zH = {
      removed: `${NH}islandsCoopRemoved`,
      deleted: `${NH}islandsCoopDeleted`,
      notReady: `${NH}islandsCoopNotReady`,
      gone: `${NH}islandsCoopGone`
    };

    function qH(bb) {
      var cb;
      return "member" !== (null === (cb = bb.baf2IslandCoop) || void 0 === cb ? void 0 : cb.baf2CoopRole) && "newer" !== bb.baf2IslandUnreadable
    }

    function dH(bb, cb, sb, kb, Wb, ab) {
      const Tb = bb.baf2IslandActive,
        Ub = bb.baf2IslandUnreadable,
        Ib = bb.baf2IslandCoop,
        Hb = function(bb, cb, sb) {
          return {
            switch: bb.switch && void 0 === cb,
            delete: bb.change && PH(cb, sb)
          }
        }(cb, Ub, kb),
        fb = Tb && void 0 !== Ib && void 0 === Ib.baf2CoopState && "coopUnreachable" === ab,
        Mb = {
          switch: ZH((!Tb || fb) && void 0 === Ub, fb || Hb.switch),
          switchLabel: fb ? "tryAgain" : "switch",
          rename: ZH(!0, cb.rename),
          delete: ZH(!Tb, Hb.delete),
          deleteWaits: !Tb && PH(Ub, kb),
          people: ZH(void 0 !== bb.baf2IslandInvitable || Wb && Tb && void 0 === Ub && void 0 === Ib, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Xb = !Tb && Hb.delete;
      if (void 0 === Ib) return sb ? {
        ...Mb,
        delete: ZH(!Tb, !1),
        deleteWaits: !1,
        note: Xb ? {
          key: `${NH}islandsCoopKeepOwn`
        } : null
      } : Mb;
      const nb = Ib.baf2CoopState,
        mb = Ib.baf2CoopMembers.length > 1,
        lb = {
          ...Mb,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== nb && "member" === Ib.baf2CoopRole) return {
        ...lb,
        dismiss: ZH(!0, cb.rename),
        note: {
          key: zH[nb],
          names: {
            owner: Ib.baf2CoopOwner
          }
        }
      };
      if (void 0 !== nb) {
        let bb = {
          key: `${NH}islandsCoopOwnLost`
        };
        return Xb && mb ? bb = {
          key: `${NH}islandsCoopDeleteMembers`
        } : Xb && sb && (bb = {
          key: `${NH}islandsCoopKeepOwn`
        }), {
          ...lb,
          delete: ZH(!Tb, Hb.delete && !mb && !sb),
          deleteWaits: Mb.deleteWaits && !mb && !sb,
          note: bb
        }
      }
      if ("member" === Ib.baf2CoopRole) return {
        ...Mb,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: ZH(!0, Tb ? cb.switch : cb.rename)
      };
      const Qb = Ib.baf2CoopManageHere;
      let eb = null;
      var Cb;
      Qb || Tb ? Xb && mb ? eb = {
        key: `${NH}islandsCoopDeleteMembers`
      } : Xb && sb && (eb = {
        key: `${NH}islandsCoopKeepOwn`
      }) : eb = {
        key: null !== (Cb = Ib.baf2CoopLeft) && void 0 !== Cb && Cb.length ? `${NH}islandsCoopManageThereClaim` : `${NH}islandsCoopManageThere`
      };
      return {
        ...Mb,
        rename: ZH(!0, cb.rename && Qb),
        delete: ZH(!Tb, Hb.delete && !mb && !sb),
        deleteWaits: Mb.deleteWaits && !mb && !sb,
        people: "enabled",
        peopleLabel: "players",
        unshare: ZH(Qb && Tb && !mb, cb.change),
        remove: Qb,
        note: eb
      }
    }

    function AH(bb) {
      var cb;
      const sb = bb.baf2IslandCoop;
      if ("owner" !== (null === sb || void 0 === sb ? void 0 : sb.baf2CoopRole) || void 0 !== sb.baf2CoopState || null === (cb = sb.baf2CoopLeft) || void 0 === cb || !cb.length) return null;
      const kb = bb.baf2IslandActive && sb.baf2CoopManageHere;
      return {
        left: sb.baf2CoopLeft,
        claim: kb,
        goThere: !kb && sb.baf2CoopManageHere
      }
    }

    function wH(bb) {
      return bb.baf2CoopMembers.length >= bb.baf2CoopMax
    }

    function rH(bb, cb, sb) {
      return void 0 !== bb && cb < bb.answer && sb - bb.atMs < DH
    }
    const oH = "buildAFactory2Game:";

    function SH(bb, cb) {
      return {
        onKeyDown: sb => {
          sb.stopPropagation(), sb.nativeEvent.isComposing || 229 === sb.nativeEvent.keyCode || ("Enter" === sb.key ? (sb.preventDefault(), bb()) : "Escape" === sb.key && (sb.preventDefault(), cb()))
        }
      }
    }

    function RH(bb) {
      return {
        onKeyDown: cb => {
          "Escape" !== cb.key || cb.nativeEvent.isComposing || (cb.preventDefault(), cb.stopPropagation(), bb())
        }
      }
    }

    function vH(bb) {
      bb.currentTarget.select()
    }

    function FH(bb, cb) {
      (0, kb.useEffect)((() => {
        var sb;
        bb && (null === (sb = cb.current) || void 0 === sb || sb.scrollIntoView({
          block: "nearest"
        }))
      }), [bb, cb])
    }

    function xH(bb) {
      const [cb, sb] = (0, kb.useState)(null);
      return (0, kb.useEffect)((() => {
        const cb = document.querySelector(".UiRequests"),
          kb = bb.current;
        if (!cb || !kb || "undefined" === typeof ResizeObserver) return;
        const Wb = () => {
          const bb = cb.getBoundingClientRect(),
            Wb = kb.getBoundingClientRect(),
            ab = kb.parentElement,
            Tb = ab && parseFloat(getComputedStyle(ab).paddingTop) || 0,
            Ub = function(bb, cb, sb, kb) {
              if (!bb || bb.height <= 0 || bb.right <= cb.left || bb.left >= cb.right) return null;
              const Wb = Math.max(kb, bb.bottom + 8);
              return {
                marginTop: Math.round(Wb - kb),
                maxHeight: Math.max(0, Math.floor(sb - Wb - kb))
              }
            }(bb, Wb, window.innerHeight, Tb);
          sb((bb => (null === bb || void 0 === bb ? void 0 : bb.marginTop) === (null === Ub || void 0 === Ub ? void 0 : Ub.marginTop) && (null === bb || void 0 === bb ? void 0 : bb.maxHeight) === (null === Ub || void 0 === Ub ? void 0 : Ub.maxHeight) ? bb : Ub))
        };
        Wb();
        const ab = new ResizeObserver(Wb);
        return ab.observe(cb), window.addEventListener("resize", Wb), () => {
          ab.disconnect(), window.removeEventListener("resize", Wb)
        }
      }), [bb]), cb
    }

    function jH(bb) {
      (0, kb.useEffect)((() => {
        var cb;
        null === (cb = bb.current) || void 0 === cb || cb.focus()
      }), [bb])
    }

    function pH(bb) {
      const [cb, sb] = (0, kb.useState)(Date.now);
      return (0, kb.useEffect)((() => {
        const cb = window.setInterval((() => {
          sb(Date.now())
        }), bb);
        return () => {
          window.clearInterval(cb)
        }
      }), [bb]), cb
    }

    function bf(bb) {
      let {
        tier: cb,
        t: sb
      } = bb;
      const {
        kind: kb,
        short: Wb
      } = Qb(cb), ab = nb(cb, mb), Tb = sb(`${oH}${ab.key}`, {
        ...ab.params,
        name: sb(`${oH}${eb(cb).nameKey}`)
      });
      return (0, Ba.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Ba.jsx)("span", {
          className: JW()("Baf2IslandTierPip", {
            Stage: "tier" !== kb
          }),
          "aria-hidden": "true",
          children: Wb
        }), Tb]
      })
    }

    function sf(bb) {
      let {
        note: cb,
        className: sb,
        t: kb
      } = bb;
      return (0, Ba.jsx)("p", {
        className: JW()("Baf2IslandNote", sb),
        children: KH(kb, cb.key, cb.names, cb.params)
      })
    }
    const kf = "buildAFactory2Game:";

    function Wf(bb) {
      let {
        message: cb,
        arrivedAtMs: sb,
        close: Wb,
        leave: ab
      } = bb;
      const Tb = wT(),
        {
          t: Ub
        } = (0, yW.E)(),
        Ib = pH(1e3),
        Hb = (0, kb.useRef)(null);
      (0, kb.useEffect)((() => {
        var bb;
        null === (bb = Hb.current) || void 0 === bb || bb.focus()
      }), []);
      const fb = uH(sb, cb.baf2TransferInMs, Ib),
        Mb = sb + cb.baf2TransferInMs - 1e3,
        [Xb, nb] = (0, kb.useState)(null);
      (0, kb.useEffect)((() => {
        const bb = window.setTimeout((() => {
          nb(Mb)
        }), Math.max(0, Mb - Date.now()));
        return () => {
          window.clearTimeout(bb)
        }
      }), [Mb]);
      const mb = Xb === Mb || Ib >= Mb,
        lb = cb.baf2TransferIsland,
        Qb = cb.baf2TransferOwner;
      return (0, Ba.jsx)(YT.c, {
        close: Wb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Ba.jsxs)("section", {
          ref: Hb,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsxs)("div", {
              children: [(0, Ba.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === Qb ? KH(Ub, `${kf}islandsTransferOwn`, {
                  island: lb
                }) : KH(Ub, `${kf}islandsTransfer`, {
                  island: lb,
                  owner: Qb
                })
              }), (0, Ba.jsx)("p", {
                children: mb ? Ub(`${kf}islandsTransferNow`) : Ub(`${kf}islandsTransferIn`, {
                  time: Ya(Ub, fb)
                })
              })]
            }), (0, Ba.jsx)(hT.j, {
              ariaLabel: Ub(`${kf}islandsClose`),
              onClick: Wb
            })]
          }), !mb && (0, Ba.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Ba.jsx)("p", {
              className: "Baf2TransferNote",
              children: Ub(`${kf}islandsTransferNote`)
            }), (0, Ba.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Ba.jsx)(hT.d, {
                onClick: () => {
                  Tb.send("baf2coopstay"), ab()
                },
                children: Ub(`${kf}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var af = sb(1423),
      Tf = sb(1133),
      Uf = sb.n(Tf);
    const If = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const Hf = "buildAFactory2Game:",
      ff = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Mf(bb, cb, sb) {
      return void 0 === cb ? sb : "string" === typeof cb ? cb : Array.isArray(cb) ? cb.map((cb => "string" === typeof cb ? cb : "translationKey" in cb ? bb(cb.translationKey) : "")).join("") : bb(cb.translationKey)
    }

    function Xf(bb) {
      const cb = {};
      for (const [sb, kb] of Object.entries(null !== bb && void 0 !== bb ? bb : {})) cb[sb] = kb < 0 ? ua(kb) : kb.toLocaleString("en-US");
      return cb
    }

    function nf(bb, cb) {
      const sb = cb ? "touch" : "mouse";
      return {
        use: bb(`${Hf}lookUse_${sb}`),
        Use: bb(`${Hf}lookUseStart_${sb}`)
      }
    }
    const mf = (0, kb.memo)((function(bb) {
      let {
        item: cb
      } = bb;
      return (0, Ba.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Ba.jsx)(DW.d, {
          itemName: cb,
          amount: 0
        })
      })
    }));

    function lf(bb) {
      let {
        label: cb,
        percent: sb,
        progress: kb
      } = bb;
      return (0, Ba.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${cb}: ${kb}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": sb,
          children: (0, Ba.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${sb}%`
            }
          })
        }), (0, Ba.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: kb
        })]
      })
    }

    function Qf(bb) {
      let {
        chips: cb
      } = bb;
      return (0, Ba.jsx)("span", {
        className: "Baf2QuestChips",
        children: cb.map((bb => {
          let [cb, sb, kb] = bb;
          const Wb = sb >= kb;
          return (0, Ba.jsxs)("span", {
            className: JW()("Baf2QuestChip", {
              Met: Wb
            }),
            children: [(0, Ba.jsx)(mf, {
              item: cb
            }), (0, Ba.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Wb ? `\u2713${kb}` : `${sb}/${kb}`
            })]
          }, cb)
        }))
      })
    }

    function ef(bb, cb) {
      const {
        key: sb,
        params: kb
      } = nb(cb, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return bb(`${Hf}${sb}`, {
        ...kb,
        name: bb(`${Hf}${eb(cb).nameKey}`)
      })
    }

    function Cf(bb) {
      let {
        core: cb,
        t: sb
      } = bb;
      const [kb, Wb] = cb, ab = Wb > 0 ? Math.floor(100 * kb / Wb) : 100;
      return (0, Ba.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": sb(`${Hf}questCoreLabel`, {
          have: String(kb),
          need: String(Wb)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": ab,
        children: [(0, Ba.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: sb(`${Hf}questCore`, {
            percent: String(ab)
          })
        }), (0, Ba.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Ba.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${ab}%`
            }
          })
        })]
      })
    }

    function Nf(bb) {
      let {
        rows: cb,
        t: sb
      } = bb;
      const kb = cb.filter((bb => bb.done)).length;
      return (0, Ba.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": sb(`${Hf}questStepsProgress`, {
          done: String(kb),
          total: String(cb.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": cb.length,
        "aria-valuenow": kb,
        children: cb.map((bb => (0, Ba.jsx)("span", {
          className: JW()("Baf2QuestSegment", {
            Done: bb.done,
            Current: bb.current
          })
        }, bb.id)))
      })
    }
    const Vf = (0, kb.memo)(uf, Lf);

    function Lf(bb, cb) {
      const sb = sb => bb.view.itemNames[sb] === cb.view.itemNames[sb];
      return bb.t === cb.t && bb.extra === cb.extra && (null === bb.row.item || sb(bb.row.item)) && bb.row.madeFor.every(sb) && bb.row.also.every(sb) && Uf()(bb.row, cb.row)
    }

    function uf(bb) {
      let {
        row: cb,
        view: sb,
        t: kb,
        extra: Wb
      } = bb;
      const {
        isTouchScreen: ab
      } = (0, uW.p)(["isTouchScreen"]), Tb = cb.item ? function(bb, cb, sb) {
        return 1 !== sb && If.has(bb) ? tW(cb) : null
      }(cb.key, cb.item, cb.total) : null, Ub = Tb ? kb(Tb) : cb.item ? Mf(kb, sb.itemNames[cb.item], cb.item) : "", Ib = cb.also.map((bb => Mf(kb, sb.itemNames[bb], bb))), Hb = Ib.join(", "), fb = function(bb, cb) {
        var sb;
        return cb.length < 2 ? null !== (sb = cb[0]) && void 0 !== sb ? sb : "" : bb(`${Hf}listAnd`, {
          rest: cb.slice(0, -1).join(bb(`${Hf}listComma`)),
          last: cb[cb.length - 1]
        })
      }(kb, [Ub, ...Ib]), Mb = kb(`${Hf}${cb.key}`, {
        ...nf(kb, ab),
        ...Xf(cb.params),
        item: Ub,
        also: Hb,
        itemList: fb,
        total: String(cb.total)
      }), [Xb, ...nb] = Mb.split("\n"), mb = cb.total > 1 && !cb.done && !cb.away;
      return (0, Ba.jsxs)("li", {
        className: JW()("Baf2QuestStep", {
          Done: cb.done,
          Current: cb.current,
          JustFinished: cb.justFinished,
          Away: cb.away
        }),
        children: [!cb.done && null !== cb.item && (0, Ba.jsx)(mf, {
          item: cb.item
        }), (cb.done || null === cb.item) && (0, Ba.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: cb.done ? "\u2713" : "\u25cb"
        }), (0, Ba.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Ba.jsx)("strong", {
            children: Xb
          }), nb.length > 0 && (0, Ba.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: nb.join(" ")
          }), !cb.done && cb.madeFor.length > 0 && (0, Ba.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: kb("buildAFactory2Game:questRowFor", {
              items: cb.madeFor.map((bb => Mf(kb, sb.itemNames[bb], bb))).join(" \u2192 ")
            })
          }), mb && (0, Ba.jsx)(lf, {
            label: Xb,
            percent: Math.round(100 * cb.amount / cb.total),
            progress: `${cb.amount.toLocaleString("en-US")}/${cb.total.toLocaleString("en-US")}`
          }), !cb.done && !cb.away && cb.chips && cb.chips.length > 0 && (0, Ba.jsx)(Qf, {
            chips: cb.chips
          }), Wb]
        })]
      })
    }

    function Yf(bb, cb) {
      let [sb, kb] = cb;
      return bb(`${Hf}${sb}`, Xf(kb))
    }

    function hf(bb) {
      let [cb, sb] = bb;
      return cb + JSON.stringify(sb)
    }

    function Jf(bb) {
      let {
        goal: cb,
        t: sb
      } = bb;
      return cb ? (0, Ba.jsx)("span", {
        className: "Baf2BookGoal",
        children: sb(`${Hf}${cb}`)
      }) : null
    }

    function gf(bb) {
      let {
        view: cb,
        t: sb
      } = bb;
      if (!cb.name) return null;
      const kb = oW(cb.rows);
      return (0, Ba.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: sb(`${Hf}currentQuest`)
        }), (0, Ba.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Yf(sb, cb.name)
        }), (0, Ba.jsx)(Jf, {
          goal: cb.goal,
          t: sb
        }), kb.length > 1 && (0, Ba.jsx)(Nf, {
          rows: kb,
          t: sb
        }), (0, Ba.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: cb.rows.map((bb => (0, Ba.jsx)(Vf, {
            row: bb,
            view: cb,
            t: sb
          }, bb.id)))
        }), cb.reward && (0, Ba.jsxs)("span", {
          className: "Baf2BookReward",
          children: [sb(`${Hf}questReward`), (0, Ba.jsx)(mf, {
            item: cb.reward
          }), Mf(sb, cb.itemNames[cb.reward], cb.reward)]
        })]
      })
    }

    function Bf(bb) {
      let {
        quest: cb,
        upcoming: sb,
        t: kb
      } = bb;
      return (0, Ba.jsxs)("li", {
        className: JW()("Baf2BookQuest", {
          Done: cb[3],
          Upcoming: sb
        }),
        children: [(0, Ba.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: cb[3] ? "\u2713" : "\u25cb"
        }), (0, Ba.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Ba.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Yf(kb, cb)
          }), (0, Ba.jsx)(Jf, {
            goal: cb[2],
            t: kb
          })]
        })]
      })
    }

    function tf(bb) {
      let {
        done: cb,
        total: sb,
        t: kb
      } = bb;
      const Wb = sb > 0 ? Math.round(100 * cb / sb) : 0,
        ab = kb(`${Hf}questBookChapterProgress`, {
          done: String(cb),
          total: String(sb)
        });
      return (0, Ba.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": ab,
          "aria-valuemin": 0,
          "aria-valuemax": sb,
          "aria-valuenow": cb,
          children: (0, Ba.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Wb}%`
            }
          })
        }), (0, Ba.jsx)("span", {
          className: "Baf2BookProgressText",
          children: ab
        })]
      })
    }

    function yf(bb) {
      let {
        view: cb,
        tier: sb,
        quests: kb,
        t: Wb
      } = bb;
      const ab = sb === cb.tier,
        Tb = (null !== kb && void 0 !== kb ? kb : []).filter((bb => !bb[4])),
        Ub = (null !== kb && void 0 !== kb ? kb : []).filter((bb => bb[4])),
        Ib = Tb.filter((bb => bb[3])).length,
        Hb = ab && cb.name ? hf(cb.name) : null,
        fb = Tb.findIndex((bb => !bb[3] && hf(bb) === Hb));
      return (0, Ba.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Ba.jsx)("h3", {
            children: ef(Wb, sb)
          }), Tb.length > 0 && (0, Ba.jsx)(tf, {
            done: Ib,
            total: Tb.length,
            t: Wb
          }), ab && cb.core && (0, Ba.jsx)(Cf, {
            core: cb.core,
            t: Wb
          })]
        }), (0, Ba.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === kb && ab && (0, Ba.jsx)(gf, {
            view: cb,
            t: Wb
          }), Tb.map(((bb, sb) => sb === fb ? (0, Ba.jsx)(gf, {
            view: cb,
            t: Wb
          }, hf(bb)) : (0, Ba.jsx)(Bf, {
            quest: bb,
            upcoming: !bb[3],
            t: Wb
          }, hf(bb))))]
        }), ab && cb.side && (0, Ba.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Ba.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Wb(`${Hf}questSide`)
          }), (0, Ba.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Yf(Wb, cb.side.name)
          }), (0, Ba.jsx)(Jf, {
            goal: cb.side.goal,
            t: Wb
          }), (0, Ba.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Ba.jsx)(Vf, {
              row: cb.side.row,
              view: cb,
              t: Wb
            })
          })]
        }), Ub.length > 0 && (0, Ba.jsxs)(Ba.Fragment, {
          children: [(0, Ba.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Wb(`${Hf}questBookSidesDone`)
          }), (0, Ba.jsx)("ol", {
            className: "Baf2BookQuests",
            children: Ub.map((bb => (0, Ba.jsx)(Bf, {
              quest: bb,
              upcoming: !1,
              t: Wb
            }, hf(bb))))
          })]
        })]
      })
    }

    function Pf(bb) {
      var cb, sb, ab;
      let {
        store: Tb,
        close: Ub
      } = bb;
      const {
        t: Ib
      } = (0, yW.E)(), Hb = (0, af.h)(ZW, Tb.get()), Mb = null !== (cb = Hb.tier) && void 0 !== cb ? cb : 1, [Xb, nb] = (0, kb.useState)(null), mb = (null === Xb || void 0 === Xb ? void 0 : Xb.at) === Mb ? Xb.tier : Mb, eb = (0, kb.useRef)(null), Cb = null !== Hb.chapters;
      (0, kb.useEffect)((() => {
        var bb;
        eb.current && (eb.current.scrollTop = 0);
        const cb = null === (bb = eb.current) || void 0 === bb ? void 0 : bb.querySelector(".Baf2BookQuest.Current");
        if (eb.current && cb) {
          const bb = cb.getBoundingClientRect().bottom - eb.current.getBoundingClientRect().bottom;
          bb > 0 && (eb.current.scrollTop += Math.min(bb, cb.getBoundingClientRect().top - eb.current.getBoundingClientRect().top))
        }
      }), [mb, Cb]);
      const Nb = null === (sb = Hb.chapters) || void 0 === sb ? void 0 : sb.find((bb => {
        let [cb] = bb;
        return cb === mb
      }));
      return (0, Ba.jsx)(YT.c, {
        close: Ub,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ba.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: ff,
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Ib(`${Hf}questBookTitle`)
            }), (0, Ba.jsx)(hT.j, {
              onClick: Ub
            })]
          }), (0, Ba.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Ib(`${Hf}questBookChapters`),
            children: Wb.slice(0, fb()).map(((bb, cb) => {
              const sb = cb + 1,
                {
                  kind: kb,
                  short: Wb
                } = Qb(sb),
                ab = lb(sb, Mb),
                Tb = ab ? Ib(`${Hf}coreAtomicHidden`) : ef(Ib, sb);
              return (0, Ba.jsx)("li", {
                children: (0, Ba.jsx)("button", {
                  type: "button",
                  className: JW()({
                    Stage: "tier" !== kb,
                    Atomic: "atomic" === kb,
                    Current: sb === Mb,
                    Selected: sb === mb
                  }),
                  disabled: sb > Mb,
                  "aria-pressed": sb === mb,
                  "aria-label": Tb,
                  title: ab ? void 0 : Tb,
                  onClick: () => {
                    nb({
                      tier: sb,
                      at: Mb
                    })
                  },
                  children: ab ? "?" : Wb
                })
              }, bb.nameKey)
            }))
          }), (0, Ba.jsxs)("div", {
            ref: eb,
            className: "Baf2BookBody",
            children: [wW(Hb) && mb === Mb && (0, Ba.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Ib(`${Hf}questBookAllDone`)
            }), (0, Ba.jsx)(yf, {
              view: Hb,
              tier: mb,
              quests: null !== (ab = null === Nb || void 0 === Nb ? void 0 : Nb[1]) && void 0 !== ab ? ab : null,
              t: Ib
            })]
          })]
        })
      })
    }
    const Df = "buildAFactory2Game:";

    function Ef(bb) {
      let {
        tiers: cb,
        from: sb,
        tier: kb,
        shown: Wb,
        Wn: ab
      } = bb;
      const {
        t: Tb
      } = (0, yW.E)(), Ub = cb.map(((bb, cb) => {
        const Ub = sb + cb,
          {
            kind: Ib,
            short: Hb
          } = Qb(Ub),
          fb = lb(Ub, kb);
        return (0, Ba.jsx)("li", {
          children: (0, Ba.jsx)("button", {
            type: "button",
            className: JW()({
              Stage: "tier" !== Ib,
              Silhouette: fb,
              Reached: Ub <= kb,
              Current: Ub === kb,
              Next: Ub === kb + 1,
              Selected: Ub === Wb
            }),
            disabled: fb,
            "aria-pressed": Ub === Wb,
            "aria-label": fb ? Tb(`${Df}coreAtomicHidden`) : void 0,
            title: fb ? void 0 : Tb(`${Df}${bb.nameKey}`),
            onClick: () => {
              ab(Ub)
            },
            children: fb ? "?" : Hb
          })
        }, bb.nameKey)
      }));
      return (0, Ba.jsx)(Ba.Fragment, {
        children: Ub
      })
    }

    function Of(bb) {
      let {
        id: cb,
        label: sb,
        tiers: kb,
        from: Wb,
        ...ab
      } = bb;
      return (0, Ba.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Ba.jsx)("span", {
          id: cb,
          className: "Baf2CoreLadderLabel",
          children: sb
        }), (0, Ba.jsx)("ol", {
          "aria-labelledby": cb,
          children: (0, Ba.jsx)(Ef, {
            ...ab,
            tiers: kb,
            from: Wb
          })
        })]
      })
    }

    function Gf(bb) {
      const {
        t: cb
      } = (0, yW.E)(), sb = Wb.findIndex((bb => void 0 !== bb.stage)), kb = Wb.findIndex((bb => void 0 !== bb.reactorTier)), ab = sb < 0 ? Wb : Wb.slice(0, sb), Tb = sb < 0 ? [] : Wb.slice(sb, kb < 0 ? void 0 : kb), Ib = kb < 0 || !Ub() ? [] : Wb.slice(kb);
      return (0, Ba.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Ba.jsx)(Of, {
          ...bb,
          id: "baf2CoreTiersLabel",
          label: cb(`${Df}coreTiersLabel`),
          tiers: ab,
          from: 1
        }), Tb.length > 0 && (0, Ba.jsx)(Of, {
          ...bb,
          id: "baf2CoreStagesLabel",
          label: cb(`${Df}coreStagesLabel`),
          tiers: Tb,
          from: sb + 1
        }), Ib.length > 0 && (0, Ba.jsx)(Of, {
          ...bb,
          id: "baf2CoreAtomicLabel",
          label: cb(`${Df}coreAtomicLabel`),
          tiers: Ib,
          from: kb + 1
        })]
      })
    }
    const Kf = "buildAFactory2Game:";

    function Zf(bb) {
      let {
        item: cb,
        itemNames: sb,
        children: kb
      } = bb;
      return (0, Ba.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Ba.jsx)(DW.d, {
            itemName: cb,
            amount: 0
          })
        }), (0, Ba.jsx)(EW.d, {
          text: sb[cb]
        }), kb]
      })
    }

    function zf(bb) {
      const cb = new Map;
      for (const {
          block: kb
        }
        of bb.newDeposits) {
        var sb;
        cb.set(kb, (null !== (sb = cb.get(kb)) && void 0 !== sb ? sb : 0) + 1)
      }
      return [...cb]
    }

    function qf(bb) {
      let {
        value: cb,
        label: sb,
        more: kb
      } = bb;
      return (0, Ba.jsxs)("li", {
        children: [(0, Ba.jsx)("strong", {
          children: cb
        }), (0, Ba.jsx)("span", {
          children: sb
        }), kb > 0 && (0, Ba.jsxs)("em", {
          children: ["+", kb]
        })]
      })
    }

    function df(bb) {
      let {
        items: cb,
        itemNames: sb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)(), [ab, Tb] = (0, kb.useState)(null), Ub = null !== ab && cb.includes(ab) ? ab : null;
      return (0, Ba.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Ba.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Wb(`${Kf}coreRewardUnlocks`)
        }), (0, Ba.jsx)("ul", {
          children: cb.map((bb => (0, Ba.jsx)("li", {
            children: (0, Ba.jsx)("button", {
              type: "button",
              className: JW()("Baf2PanelIcon", {
                Picked: bb === Ub
              }),
              title: Ta(Wb, bb),
              "aria-label": Ta(Wb, bb),
              "aria-pressed": bb === Ub,
              onClick: () => {
                Tb(bb === Ub ? null : bb)
              },
              children: (0, Ba.jsx)(DW.d, {
                itemName: bb,
                amount: 0
              })
            })
          }, bb)))
        }), (0, Ba.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== Ub && (0, Ba.jsxs)(Ba.Fragment, {
            children: [(0, Ba.jsx)(EW.d, {
              text: sb[Ub]
            }), " \xb7 ", (0, Ba.jsx)(EW.d, {
              text: sb[yb(Ub)]
            })]
          }), null === Ub && Wb(`${Kf}coreRecipeTap`)]
        })]
      })
    }

    function Af(bb) {
      var cb, sb;
      let {
        def: kb,
        tier: Wb,
        itemNames: ab
      } = bb;
      const {
        t: Tb
      } = (0, yW.E)(), Ub = Wb > 1 ? eb(Wb - 1) : void 0, Ib = Math.round(2 * kb.islandRadius), Hb = Ub ? Math.round(2 * Ub.islandRadius) : Ib, fb = Wb >= 3 ? Yk(Wb) : null;
      return (0, Ba.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Ba.jsxs)("ul", {
          className: JW()("Baf2CoreStats", {
            Four: null !== fb
          }),
          children: [(0, Ba.jsx)(qf, {
            value: `${Ib}\xd7${Ib}`,
            label: Tb(`${Kf}coreStatIsland`),
            more: Ib - Hb
          }), (0, Ba.jsx)(qf, {
            value: String(kb.machineAllowance),
            label: Tb(`${Kf}coreStatMachines`),
            more: kb.machineAllowance - (null !== (cb = null === Ub || void 0 === Ub ? void 0 : Ub.machineAllowance) && void 0 !== cb ? cb : kb.machineAllowance)
          }), (0, Ba.jsx)(qf, {
            value: String(kb.beltAllowance),
            label: Tb(`${Kf}coreStatBelts`),
            more: kb.beltAllowance - (null !== (sb = null === Ub || void 0 === Ub ? void 0 : Ub.beltAllowance) && void 0 !== sb ? sb : kb.beltAllowance)
          }), null !== fb && (0, Ba.jsx)(qf, {
            value: String(fb),
            label: Tb(`${Kf}coreStatStorage`),
            more: fb - (Ub ? Yk(Wb - 1) : fb)
          })]
        }), kb.reward && (0, Ba.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Ba.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Tb(`${Kf}coreRewardItem`)
          }), (0, Ba.jsx)(Zf, {
            item: kb.reward,
            itemNames: ab
          })]
        }), kb.newDeposits.length > 0 && (0, Ba.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Ba.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Tb(kb.newDeposits.length > 1 ? `${Kf}coreRewardDeposits` : `${Kf}coreRewardDeposit`)
          }), zf(kb).map((bb => {
            let [cb, sb] = bb;
            return (0, Ba.jsx)(Zf, {
              item: cb,
              itemNames: ab,
              children: sb > 1 && ` \xd7${sb}`
            }, cb)
          }))]
        }), kb.unlocks.length > 0 && (0, Ba.jsx)(df, {
          items: kb.unlocks,
          itemNames: ab
        }), (0, Ba.jsx)(wf, {
          tier: Wb
        })]
      })
    }

    function wf(bb) {
      let {
        tier: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)(), kb = CW[cb];
      if (!kb) return null;
      const Wb = eW(cb, 0, 0).barrierMax !== eW(cb - 1, 0, 0).barrierMax;
      return (0, Ba.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Ba.jsx)(DW.d, {
            itemName: Wb ? MW.Chestplate : fW,
            amount: 0
          })
        }), sb(`${Kf}gearPerkLine`, {
          perk: sb(`${Kf}${kb}`)
        })]
      })
    }

    function rf(bb, cb) {
      return null === bb ? cb : bb.value
    }

    function of(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === bb || sb - bb.atMs >= kb ? null : Wb(bb.value, cb) ? bb.armed ? null : bb : bb.armed ? bb : {
        ...bb,
        armed: !0
      }
    }

    function Sf(bb, cb) {
      const sb = cb.filter((cb => {
        var sb;
        return !1 !== (null === (sb = bb.get(cb)) || void 0 === sb ? void 0 : sb.value)
      }));
      for (const [kb, Wb] of bb) Wb.value && !cb.includes(kb) && sb.push(kb);
      return sb
    }

    function Rf(bb, cb, sb, Wb) {
      const [ab, Tb] = (0, kb.useState)((() => new Map)), Ub = () => {
        Tb((cb => function(bb, cb, sb, kb) {
          var Wb;
          let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Tb = null;
          for (const [Ub, Ib] of bb) {
            const Wb = of(Ib, cb(Ub), sb, kb, ab);
            Wb !== Ib && (Tb ??= new Map(bb), null === Wb ? Tb.delete(Ub) : Tb.set(Ub, Wb))
          }
          return null !== (Wb = Tb) && void 0 !== Wb ? Wb : bb
        }(cb, bb, Date.now(), sb, Wb)))
      };
      (0, kb.useEffect)((() => {
        Ub()
      }), [cb, sb]), (0, kb.useEffect)((() => {
        if (0 === ab.size) return;
        const bb = Math.min(...[...ab.values()].map((bb => bb.atMs))),
          cb = setTimeout(Ub, Math.max(0, bb + sb - Date.now()) + 1);
        return () => {
          clearTimeout(cb)
        }
      }), [ab, cb, sb]);
      return [ab, (cb, sb) => {
        Tb((kb => {
          const ab = new Map(kb);
          return ab.set(cb, function(bb, cb, sb) {
            return {
              value: bb,
              atMs: sb,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(bb, cb)
            }
          }(sb, bb(cb), Date.now(), Wb)), ab
        }))
      }]
    }
    const vf = "buildAFactory2Game:";

    function Ff(bb) {
      let {
        message: cb,
        itemNames: sb
      } = bb;
      const Wb = wT(),
        {
          t: ab
        } = (0, yW.E)(),
        [Tb, Ub] = (0, kb.useState)(!1),
        [Ib, Hb] = function(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GT;
          const [sb, kb] = Rf((cb => bb.includes(cb)), bb, cb, Object.is);
          return [Sf(sb, bb), kb]
        }(cb.baf2CoreBankPaused),
        fb = new Set(Ib),
        Mb = [...cb.baf2CoreBanked];
      for (const kb of fb) Mb.some((bb => {
        let [cb] = bb;
        return cb === kb
      })) || Mb.push([kb, 0]);
      return 0 === Mb.length ? null : (0, Ba.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Ba.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Tb,
          onClick: () => {
            Ub(!Tb)
          },
          children: [(0, Ba.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: ab(`${vf}coreBankedLater`)
          }), (0, Ba.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Mb.map((bb => {
              let [cb, sb] = bb;
              const kb = fb.has(cb);
              return (0, Ba.jsxs)("span", {
                className: JW()({
                  Paused: kb
                }),
                title: kb ? ab(`${vf}coreBankPausedTag`) : void 0,
                children: [(0, Ba.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Ba.jsx)(DW.d, {
                    itemName: cb,
                    amount: 0
                  })
                }), sb, kb && (0, Ba.jsx)(PW.b, {
                  name: "pause"
                })]
              }, cb)
            }))
          }), (0, Ba.jsx)(PW.b, {
            name: Tb ? "angle-up" : "angle-down"
          })]
        }), Tb && (0, Ba.jsxs)(Ba.Fragment, {
          children: [(0, Ba.jsx)("ul", {
            children: Mb.map((bb => {
              let [cb, kb] = bb;
              const Tb = fb.has(cb);
              return (0, Ba.jsxs)("li", {
                children: [(0, Ba.jsxs)(Zf, {
                  item: cb,
                  itemNames: sb,
                  children: [(0, Ba.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: kb
                  }), Tb && (0, Ba.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: ab(`${vf}coreBankPausedTag`)
                  })]
                }), (0, Ba.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Ba.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === kb,
                    onClick: () => {
                      Wb.send(`baf2corewithdraw ${kb} ${cb}`)
                    },
                    children: ab(`${vf}coreTake`)
                  }), (0, Ba.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Wb.send(`${Vb} ${cb}`), Hb(cb, !Tb)
                    },
                    children: ab(Tb ? `${vf}coreBankResume` : `${vf}coreBankStop`)
                  })]
                })]
              }, cb)
            }))
          }), (0, Ba.jsx)("p", {
            className: "Baf2CoreHint",
            children: ab(`${vf}coreBankNote`)
          })]
        })]
      })
    }
    const xf = "buildAFactory2Game:";

    function jf(bb) {
      const cb = Math.max(0, Math.floor(bb));
      return `${Math.floor(cb/60)}:${String(cb%60).padStart(2,"0")}`
    }

    function pf(bb) {
      let {
        item: cb
      } = bb;
      return (0, Ba.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Ba.jsx)(DW.d, {
          itemName: cb,
          amount: 0
        })
      })
    }

    function bM() {
      return (0, Ba.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Ba.jsx)(PW.b, {
          name: "bolt"
        })
      })
    }

    function cM(bb) {
      let {
        charge: cb,
        hint: sb,
        itemNames: kb
      } = bb;
      const Wb = wT(),
        {
          t: ab
        } = (0, yW.E)(),
        [Tb, Ub, Ib, Hb, fb, Mb, Xb] = cb,
        [nb, mb] = function(bb) {
          var cb;
          let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GT,
            kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Wb, ab] = Rf((() => bb), bb, sb, kb);
          return [rf(null !== (cb = Wb.get("")) && void 0 !== cb ? cb : null, bb), bb => {
            ab("", bb)
          }]
        }(Xb),
        lb = nb === Xb ? Mb : !nb,
        Qb = Hb >= fb,
        eb = Tb.find((bb => {
          let [, cb, sb] = bb;
          return sb < .9 * cb
        }));
      let Cb = `${xf}coreChargeWaiting`,
        Nb = {};
      return Qb ? Cb = `${xf}coreChargeDone` : nb ? Cb = `${xf}coreChargeStopped` : lb && sb ? (Cb = `${xf}${sb[0]}`, Nb = {
        item: Ta(ab, sb[1])
      }) : lb && eb ? (Cb = `${xf}coreChargeShort`, Nb = {
        item: Ta(ab, eb[0])
      }) : lb && Ub > 0 && !Ib ? Cb = `${xf}coreChargePower` : lb && (Cb = `${xf}coreChargeRunning`), (0, Ba.jsxs)("div", {
        className: JW()("Baf2CoreCharge", {
          Waiting: !lb && !Qb,
          Done: Qb
        }),
        children: [(0, Ba.jsxs)("h4", {
          children: [ab(`${xf}coreChargeTitle`), (0, Ba.jsx)("span", {
            children: ab(`${xf}coreChargeProgress`, {
              done: jf(Hb),
              need: jf(fb)
            })
          })]
        }), (0, Ba.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Ba.jsx)("div", {
            style: {
              width: 100 * Math.min(Hb, fb) / fb + "%"
            }
          })
        }), (0, Ba.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Tb.map((bb => {
            var cb;
            let [sb, Wb, Tb] = bb;
            const Ub = Tb >= .9 * Wb;
            return (0, Ba.jsxs)("li", {
              className: JW()({
                Done: Ub,
                Short: lb && !Ub
              }),
              children: [(0, Ba.jsx)(pf, {
                item: sb
              }), (0, Ba.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Ba.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Ba.jsx)(EW.d, {
                    text: null !== (cb = kb[sb]) && void 0 !== cb ? cb : sb
                  }), (0, Ba.jsx)("span", {
                    children: ab(`${xf}coreChargeItem`, {
                      now: String(Tb),
                      need: String(Wb)
                    })
                  })]
                }), (0, Ba.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Ba.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Tb/Wb)}%`
                    }
                  })
                })]
              })]
            }, sb)
          })), Ub > 0 && (0, Ba.jsxs)("li", {
            className: JW()("Baf2CoreChargePower", {
              Short: lb && !Ib
            }),
            children: [(0, Ba.jsx)(bM, {}), (0, Ba.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Ba.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Ba.jsx)("span", {
                  children: ab(`${xf}coreChargePowerRow`, {
                    power: xb(Ub)
                  })
                })
              })
            })]
          })]
        }), (0, Ba.jsx)("p", {
          className: "Baf2CoreHint",
          children: ab(Cb, Nb)
        }), !Qb && (lb || nb) && (0, Ba.jsx)("button", {
          type: "button",
          className: JW()("Baf2CoreChargeToggle", {
            Stopped: nb
          }),
          onClick: () => {
            Wb.send(ub), mb(!nb)
          },
          children: ab(nb ? `${xf}coreChargeRestart` : `${xf}coreChargeStop`)
        })]
      })
    }

    function sM(bb) {
      let {
        charge: cb,
        reached: sb,
        itemNames: kb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)();
      return (0, Ba.jsxs)("div", {
        className: JW()("Baf2CoreCharge", {
          Done: sb
        }),
        children: [(0, Ba.jsxs)("h4", {
          children: [Wb(`${xf}coreChargeTitle`), (0, Ba.jsx)("span", {
            children: Wb(`${xf}coreChargeSpecTime`, {
              time: jf(cb.seconds)
            })
          })]
        }), (0, Ba.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [cb.items.map((bb => {
            var cb;
            let {
              item: ab,
              amount: Tb
            } = bb;
            return (0, Ba.jsxs)("li", {
              className: JW()({
                Done: sb
              }),
              children: [(0, Ba.jsx)(pf, {
                item: ab
              }), (0, Ba.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Ba.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Ba.jsx)(EW.d, {
                    text: null !== (cb = kb[ab]) && void 0 !== cb ? cb : ab
                  }), (0, Ba.jsx)("span", {
                    children: Wb(`${xf}coreChargeSpecItem`, {
                      need: String(Tb)
                    })
                  })]
                })
              })]
            }, ab)
          })), cb.powerPerS > 0 && (0, Ba.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Ba.jsx)(bM, {}), (0, Ba.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Ba.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Ba.jsx)("span", {
                  children: Wb(`${xf}coreChargePowerRow`, {
                    power: xb(cb.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const kM = "buildAFactory2Game:";

    function WM(bb) {
      let {
        def: cb,
        reached: sb,
        banked: kb,
        itemNames: Wb
      } = bb;
      const {
        t: ab
      } = (0, yW.E)();
      return (0, Ba.jsx)("ul", {
        className: "Baf2CoreCost",
        children: cb.cost.map((bb => {
          let {
            item: cb,
            amount: Tb
          } = bb;
          const Ub = sb ? 0 : kb(cb);
          return (0, Ba.jsx)("li", {
            children: (0, Ba.jsx)(Zf, {
              item: cb,
              itemNames: Wb,
              children: (0, Ba.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: Ub > 0 ? ab(`${kM}coreBankedFor`, {
                  amount: String(Ub),
                  total: String(Tb)
                }) : `\xd7${Tb}`
              })
            })
          }, cb)
        }))
      })
    }

    function aM(bb, cb) {
      if (cb >= fb()) return bb(`${kM}coreMaxTier`);
      const sb = Hb[cb + 1];
      return sb && !sb.startsWith("upgradeCore") ? bb(`${kM}coreGateQuest`, {
        quest: bb(`${kM}quest_${sb}`)
      }) : bb(`${kM}coreGateClosed`)
    }

    function TM() {
      const {
        t: bb
      } = (0, yW.E)(), cb = wT(), sb = (0, kb.useRef)(null), Wb = (0, kb.useRef)(Date.now());
      return FH(!0, sb), (0, Ba.jsx)("div", {
        ref: sb,
        className: "Baf2CoreGrow",
        children: (0, Ba.jsx)(hT.n, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Wb.current >= 600 && cb.send(Nb)
          },
          children: bb(`${kM}coreGrow`)
        })
      })
    }

    function UM(bb) {
      let {
        message: cb,
        itemNames: sb,
        next: kb
      } = bb;
      const Wb = wT(),
        {
          t: ab
        } = (0, yW.E)(),
        Tb = cb.baf2CoreTier,
        Ub = cb.baf2CoreReady,
        Ib = cb.baf2CoreNeeds.filter((bb => {
          let [, cb, sb, kb] = bb;
          return kb > 0 && cb < sb
        })),
        Hb = cb.baf2CoreNeeds.every((bb => {
          let [, cb, sb] = bb;
          return cb >= sb
        })),
        fb = cb.baf2CoreKeep;
      return (0, Ba.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [Ub && (0, Ba.jsx)(TM, {}), (0, Ba.jsx)("h3", {
            children: ab(`${kM}coreBring`)
          }), (0, Ba.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: cb.baf2CoreNeeds.map((bb => {
              let [cb, kb, Tb, Ub] = bb;
              return (0, Ba.jsxs)("li", {
                className: JW()({
                  Done: kb >= Tb
                }),
                children: [(0, Ba.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Ba.jsx)(DW.d, {
                    itemName: cb,
                    amount: 0
                  })
                }), (0, Ba.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Ba.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Ba.jsx)(EW.d, {
                      text: sb[cb]
                    }), (0, Ba.jsxs)("span", {
                      children: [kb, "/", Tb]
                    })]
                  }), (0, Ba.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Ba.jsx)("div", {
                      style: {
                        width: 100 * kb / Tb + "%"
                      }
                    }), Ub > 0 && (0, Ba.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * Ub / Tb + "%"
                      }
                    })]
                  })]
                }), Ub > 0 && kb < Tb && (0, Ba.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Wb.send(`${Lb} ${cb}`)
                  },
                  children: ab(`${kM}coreDeposit`, {
                    amount: String(Ub)
                  })
                })]
              }, cb)
            }))
          }), cb.baf2CoreCharge && (0, Ba.jsx)(cM, {
            charge: cb.baf2CoreCharge,
            hint: cb.baf2CoreChargeHint,
            itemNames: sb
          }), !Ub && Ib.length > 1 && (0, Ba.jsx)(hT.n, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Wb.send(Nb)
            },
            children: ab(`${kM}coreHandOver`)
          }), !Ub && void 0 !== fb && (0, Ba.jsx)("p", {
            className: "Baf2CoreHint",
            children: ab(`${kM}coreKeepRest`, {
              item: Ta(ab, fb)
            })
          }), !Ub && !Hb && 0 === Ib.length && void 0 === fb && (0, Ba.jsx)("p", {
            className: "Baf2CoreHint",
            children: ab(`${kM}coreNothingHeld`)
          }), (0, Ba.jsx)(Ff, {
            message: cb,
            itemNames: sb
          })]
        }), (0, Ba.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ba.jsx)("h3", {
            children: ab(`${kM}coreRewards`)
          }), (0, Ba.jsx)(Af, {
            def: kb,
            tier: Tb + 1,
            itemNames: sb
          })]
        })]
      })
    }

    function IM(bb) {
      let {
        message: cb,
        itemNames: sb,
        shown: kb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)(), ab = cb.baf2CoreTier, Tb = eb(kb), Ub = kb <= ab, Ib = new Map(cb.baf2CoreBanked), Hb = !Cb(ab, Yb(cb)) && kb === ab;
      return (0, Ba.jsxs)("div", {
        className: JW()("Baf2CoreBody", {
          Locked: !Ub
        }),
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ba.jsx)("h3", {
            children: Wb(Ub ? `${kM}coreItTook` : `${kM}coreItNeeds`)
          }), 0 === Tb.cost.length && (0, Ba.jsx)("p", {
            className: "Baf2CoreHint",
            children: Wb(`${kM}coreTierStart`)
          }), Tb.cost.length > 0 && (0, Ba.jsx)(WM, {
            def: Tb,
            reached: Ub,
            banked: bb => {
              var cb;
              return function(bb, cb, sb, kb) {
                let Wb = bb;
                for (let Tb = cb + 2; Tb <= sb; Tb++) {
                  var ab;
                  const bb = eb(Tb).cost.find((bb => bb.item === kb)),
                    cb = Math.min(Wb, null !== (ab = null === bb || void 0 === bb ? void 0 : bb.amount) && void 0 !== ab ? ab : 0);
                  if (Tb === sb) return cb;
                  Wb -= cb
                }
                return 0
              }(null !== (cb = Ib.get(bb)) && void 0 !== cb ? cb : 0, ab, kb, bb)
            },
            itemNames: sb
          }), Tb.charge && (0, Ba.jsx)(sM, {
            charge: Tb.charge,
            reached: Ub,
            itemNames: sb
          }), Hb && (0, Ba.jsxs)(Ba.Fragment, {
            children: [(0, Ba.jsx)("p", {
              className: "Baf2CoreHint",
              children: aM(Wb, ab)
            }), (0, Ba.jsx)(Ff, {
              message: cb,
              itemNames: sb
            })]
          })]
        }), (0, Ba.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ba.jsx)("h3", {
            children: Wb(Ub ? `${kM}coreGave` : `${kM}coreLockedRewards`)
          }), (0, Ba.jsx)(Af, {
            def: Tb,
            tier: kb,
            itemNames: sb
          })]
        })]
      })
    }

    function HM(bb, cb) {
      const {
        key: sb,
        params: kb
      } = nb(cb - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return bb(`${kM}${sb}`, kb)
    }
    const fM = "buildAFactory2Game:",
      MM = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      XM = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function nM(bb) {
      let {
        view: cb,
        close: sb,
        askIslands: Wb
      } = bb;
      const {
        t: ab
      } = (0, yW.E)(), [Tb, Ub] = (0, kb.useState)(!1);
      (0, kb.useEffect)((() => {
        if (!Tb) return;
        const bb = window.setTimeout((() => {
          Ub(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(bb)
        }
      }), [Tb]);
      const {
        message: Ib,
        itemNames: Hb
      } = cb, fb = Ib.baf2CoreTier, Mb = eb(fb), Xb = Cb(fb, Yb(Ib)), [lb, Qb] = Ib.baf2CoreMachines, [Nb, Vb] = Ib.baf2CoreBelts, Lb = Ib.baf2CoreStorage, ub = Ib.baf2CoreReady, [hb, Jb] = (0, kb.useState)(null), gb = (null === hb || void 0 === hb ? void 0 : hb.at) === fb && hb.ready === ub ? hb.tier : Xb ? fb + 1 : fb;
      let Bb = "coreTierLocked";
      gb <= fb ? Bb = "coreTierReached" : gb === fb + 1 && (Bb = "coreTierNext");
      const tb = ab(`${fM}${eb(gb).nameKey}`),
        yb = gb === fb + 1 ? Xb : null,
        Pb = nb(gb, {
          tier: Bb,
          stage: MM[Bb],
          atomic: XM[Bb]
        }),
        Db = ab(`${fM}${Pb.key}`, {
          ...Pb.params,
          name: tb
        }),
        Eb = nb(fb, mb),
        ib = ab(`${fM}${Eb.key}`, {
          ...Eb.params,
          name: ab(`${fM}${Mb.nameKey}`)
        });
      return (0, Ba.jsx)(YT.c, {
        close: sb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Ba.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsxs)("div", {
              children: [(0, Ba.jsx)("h2", {
                id: "baf2CoreTitle",
                children: ab(`${fM}coreTitle`)
              }), void 0 !== Ib.baf2CoreIslandName && (0, Ba.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Ib.baf2CoreIslandName
              }), (0, Ba.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Ba.jsx)("span", {
                  children: ib
                }), (0, Ba.jsx)("span", {
                  className: JW()({
                    Full: lb >= Qb
                  }),
                  children: ab(`${fM}coreMachineCount`, {
                    amount: String(lb),
                    total: String(Qb)
                  })
                }), (0, Ba.jsx)("span", {
                  className: JW()({
                    Full: Nb >= Vb
                  }),
                  children: ab(`${fM}coreBeltCount`, {
                    amount: String(Nb),
                    total: String(Vb)
                  })
                }), void 0 !== Lb && (0, Ba.jsx)("span", {
                  className: JW()({
                    Full: Lb[0] >= Lb[1]
                  }),
                  children: ab(`${fM}coreStorageCount`, {
                    amount: String(Lb[0]),
                    total: String(Lb[1])
                  })
                })]
              })]
            }), (0, Ba.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Ib.baf2CoreIslands && (0, Ba.jsx)(hT.d, {
                className: "Baf2CoreIslandsButton",
                disabled: Tb,
                onClick: () => {
                  Ub(!0), Wb()
                },
                children: ab(`${fM}islandsOpenButton`)
              }), (0, Ba.jsx)(hT.j, {
                onClick: sb
              })]
            })]
          }), (0, Ba.jsx)(Gf, {
            tier: fb,
            shown: gb,
            Wn: bb => {
              Jb({
                tier: bb,
                at: fb,
                ready: ub
              })
            }
          }), (0, Ba.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Db, gb > fb + 1 && (0, Ba.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: HM(ab, gb)
            })]
          }), 6 === gb && gb > fb && (0, Ba.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: ab(`${fM}coreStagesNote`)
          }), 11 === gb && gb > fb && (0, Ba.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: ab(`${fM}coreAtomicNote`)
          }), yb && (0, Ba.jsx)(UM, {
            message: Ib,
            itemNames: Hb,
            next: yb
          }), !yb && (0, Ba.jsx)(IM, {
            message: Ib,
            itemNames: Hb,
            shown: gb
          })]
        })
      })
    }
    const mM = {
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
    const lM = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: fa,
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

    function QM(bb) {
      return bb.baf2DropCometOreOnly ? "dropCometOre" : bb.baf2DropCometIsotope ? "seed" === bb.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function eM(bb) {
      let {
        message: cb,
        quests: sb,
        close: Wb,
        leave: ab
      } = bb;
      const Tb = wT(),
        {
          t: Ub
        } = (0, yW.E)(),
        Ib = (0, af.h)(ZW, sb.get()),
        Hb = function(bb) {
          var cb;
          if (!Eb(bb.tutorial)) return null;
          const sb = bb.rows.find((bb => bb.current)),
            kb = sb ? mM[sb.key] : void 0;
          return null !== (cb = null !== kb && void 0 !== kb ? kb : bb.side ? mM[bb.side.row.key] : void 0) && void 0 !== cb ? cb : null
        }(Ib),
        fb = null === Ib.tier || na(Ib.tier),
        Mb = fb ? lM : lM.filter((bb => {
          let {
            item: cb
          } = bb;
          return cb !== fa
        })),
        [Xb, nb] = (0, kb.useState)(null),
        mb = null !== Xb && void 0 !== Xb ? Xb : !cb.baf2DropFoundSalvage && fb,
        lb = cb.baf2DropRuinDistance,
        Qb = cb.baf2DropComet,
        eb = cb.baf2DropOldWorks,
        Cb = cb.baf2DropGrove,
        Nb = function(bb) {
          return 2 + Number(void 0 !== bb.baf2DropComet) + Number(!!bb.baf2DropOwedComet || void 0 !== bb.baf2DropOwedWaitMinutes) + Number(void 0 !== bb.baf2DropDigDistance) + Number(void 0 !== bb.baf2DropOldWorks) + Number(void 0 !== bb.baf2DropGrove)
        }(cb),
        Vb = bb => {
          Tb.send(function(bb) {
            return `baf2drop ${bb}`
          }(bb)), ab()
        };
      let Lb = Ub("buildAFactory2Game:dropRuinNone");
      if (null !== lb) {
        let bb = cb.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        cb.baf2DropRuinOldWorks && (bb = "dropRuinOldWorks");
        const sb = void 0 === cb.baf2DropRuinCluster ? Ub("buildAFactory2Game:dropRuinOpen") : Ub("buildAFactory2Game:dropRuinCluster", {
          count: String(cb.baf2DropRuinCluster)
        });
        Lb = `${Ub(`buildAFactory2Game:${bb}`,{distance:String(lb)})} ${sb}`
      }
      let ub = Ub("buildAFactory2Game:dropBelowDescription");
      void 0 !== cb.baf2DropBelowLook && (ub = Ub("buildAFactory2Game:dropBelowLook", {
        look: Ub(cb.baf2DropBelowLook)
      }));
      const Yb = "buildAFactory2Game:wildsRegion_survivorGrove" === cb.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        hb = Ya(Ub, 60 * function(bb) {
          const [cb, sb] = (0, kb.useState)((() => Date.now())), [Wb, ab] = (0, kb.useState)(cb);
          return (0, kb.useEffect)((() => {
            const bb = Date.now();
            sb(bb), ab(bb)
          }), [bb]), (0, kb.useEffect)((() => {
            const bb = window.setInterval((() => {
              ab(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(bb)
            }
          }), []), Math.max(1, bb.baf2DropRenewMinutes - Math.floor((Wb - cb) / 6e4))
        }(cb)),
        Jb = function(bb, cb, sb) {
          return "ruin" === bb && !sb || "owed" === bb && !cb.baf2DropOwedComet ? null : bb
        }(Hb, cb, null !== lb),
        gb = function(bb) {
          for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
          return JW()("Baf2DropTile", ...sb, {
            Wanted: Jb === bb
          })
        };
      return (0, Ba.jsx)(YT.c, {
        close: Wb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ba.jsxs)("section", {
          className: JW()("Baf2Panel Baf2DropMap", {
            Many: Nb >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsxs)("div", {
              children: [(0, Ba.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: Ub("buildAFactory2Game:dropMapTitle")
              }), (0, Ba.jsx)("p", {
                children: Ub("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Ba.jsx)(hT.j, {
              onClick: Wb
            })]
          }), (0, Ba.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== Qb && (0, Ba.jsxs)(hT.v, {
              className: gb("comet", "Baf2DropComet"),
              onClick: () => {
                Vb("comet")
              },
              children: [(0, Ba.jsx)("strong", {
                children: Ub("buildAFactory2Game:dropComet")
              }), (0, Ba.jsx)("span", {
                children: Ub(`buildAFactory2Game:${QM(cb)}`, {
                  distance: String(Qb)
                })
              })]
            }), cb.baf2DropOwedComet && (0, Ba.jsxs)(hT.v, {
              className: gb("owed", "Baf2DropComet"),
              onClick: () => {
                Vb("owed")
              },
              children: [(0, Ba.jsx)("strong", {
                children: Ub("buildAFactory2Game:dropOwedComet")
              }), (0, Ba.jsx)("span", {
                children: cb.baf2DropOwedIsotope ? Ub("buildAFactory2Game:dropOwedIsotopeDescription") : Ub("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== cb.baf2DropOwedWaitMinutes && (0, Ba.jsxs)(hT.v, {
              className: gb("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Ba.jsx)("strong", {
                children: Ub("buildAFactory2Game:dropOwedComet")
              }), (0, Ba.jsx)("span", {
                children: Ub("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(cb.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Ba.jsxs)(hT.d, {
              className: gb("below"),
              onClick: () => {
                Vb("below")
              },
              children: [(0, Ba.jsx)("strong", {
                children: Ub("buildAFactory2Game:dropBelow")
              }), (0, Ba.jsx)("span", {
                children: ub
              })]
            }), void 0 !== cb.baf2DropDigDistance && (0, Ba.jsxs)(hT.p, {
              className: gb("dig"),
              onClick: () => {
                Vb("dig")
              },
              children: [(0, Ba.jsx)("strong", {
                children: Ub("buildAFactory2Game:dropDig")
              }), (0, Ba.jsx)("span", {
                children: Ub("buildAFactory2Game:dropDigDescription", {
                  distance: String(cb.baf2DropDigDistance),
                  y: ua(cb.baf2DropDigY)
                })
              })]
            }), void 0 !== Cb && (0, Ba.jsxs)(hT.p, {
              className: gb("grove", "Baf2DropGrove"),
              onClick: () => {
                Vb("grove")
              },
              children: [(0, Ba.jsx)("strong", {
                children: Ub("buildAFactory2Game:dropGrove")
              }), (0, Ba.jsx)("span", {
                children: Ub(`buildAFactory2Game:${Yb}`, {
                  distance: String(Cb)
                })
              })]
            }), (0, Ba.jsxs)(hT.n, {
              className: gb("ruin"),
              disabled: null === lb,
              onClick: () => {
                Vb("ruin")
              },
              children: [(0, Ba.jsx)("strong", {
                children: Ub("buildAFactory2Game:dropRuin")
              }), (0, Ba.jsx)("span", {
                children: Lb
              })]
            }), void 0 !== eb && (0, Ba.jsxs)(hT.G, {
              className: gb("works"),
              onClick: () => {
                Vb("works")
              },
              children: [(0, Ba.jsx)("strong", {
                children: Ub("buildAFactory2Game:dropOldWorks")
              }), (0, Ba.jsx)("span", {
                children: Ub("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(eb)
                })
              })]
            })]
          }), (0, Ba.jsx)("p", {
            className: "Baf2DropRenew",
            children: Ub("buildAFactory2Game:dropRenew", {
              time: hb
            })
          }), (0, Ba.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: mb,
            onToggle: bb => {
              bb.currentTarget.open !== mb && nb(bb.currentTarget.open)
            },
            children: [(0, Ba.jsx)("summary", {
              children: Ub("buildAFactory2Game:dropSalvageWhat")
            }), (0, Ba.jsx)("p", {
              children: Ub("buildAFactory2Game:dropSalvageIntro")
            }), (0, Ba.jsx)("ul", {
              children: Mb.map((bb => {
                let {
                  item: cb,
                  nameKey: sb,
                  useKey: kb,
                  params: Wb
                } = bb;
                return (0, Ba.jsxs)("li", {
                  children: [(0, Ba.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Ba.jsx)(DW.d, {
                      itemName: cb,
                      amount: 0
                    })
                  }), (0, Ba.jsxs)("span", {
                    children: [(0, Ba.jsx)("strong", {
                      children: Ub(sb)
                    }), ": ", Ub(kb, Wb)]
                  })]
                }, cb)
              }))
            })]
          })]
        })
      })
    }
    const CM = "buildAFactory2Game:";

    function NM(bb, cb) {
      return bb.sendIslandEdit(`baf2coopleave ${cb.baf2IslandId}`)
    }

    function VM(bb) {
      let {
        card: cb,
        canRename: sb,
        done: Wb,
        t: ab
      } = bb;
      const Tb = wT(),
        [Ub, Ib] = (0, kb.useState)(cb.baf2IslandName),
        Hb = YH(Ub),
        fb = "" === Hb || hH(Hb),
        Mb = () => {
          !fb && sb && (Hb !== cb.baf2IslandName ? Wb(Tb.sendIslandEdit(`baf2islandrename ${cb.baf2IslandId} ${Hb}`)) : Wb(null))
        },
        Xb = () => {
          Wb(null)
        };
      return (0, Ba.jsxs)("div", {
        className: "Baf2IslandForm",
        ...RH(Xb),
        children: [(0, Ba.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [ab(`${CM}islandsRenameLabel`), (0, Ba.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Ub,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: vH,
            onChange: bb => {
              Ib(bb.target.value)
            },
            ...SH(Mb, Xb)
          })]
        }), "" === Hb && (0, Ba.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: ab(`${CM}islandsRenameEmpty`)
        }), hH(Hb) && (0, Ba.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: ab(`${CM}islandsNameReserved`)
        }), (0, Ba.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Ba.jsx)(hT.p, {
            disabled: fb || !sb,
            onClick: Mb,
            children: ab(`${CM}islandsRenameSave`)
          }), (0, Ba.jsx)(hT.d, {
            onClick: Xb,
            children: ab(`${CM}islandsCancel`)
          })]
        })]
      })
    }

    function LM(bb) {
      let {
        card: cb,
        canDelete: sb,
        done: Wb,
        t: ab
      } = bb;
      const Tb = wT(),
        [Ub, Ib] = (0, kb.useState)(""),
        Hb = function(bb, cb) {
          return YH(bb).toLowerCase() === YH(cb).toLowerCase()
        }(Ub, cb.baf2IslandName),
        fb = () => {
          Hb && sb && Wb(Tb.sendIslandEdit(`baf2islanddelete ${cb.baf2IslandId}`))
        },
        Mb = () => {
          Wb(null)
        },
        Xb = GH("name"),
        [nb, mb = ""] = ab(`${CM}islandsDeleteConfirm`, {
          name: Xb
        }).split(Xb);
      return (0, Ba.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...RH(Mb),
        children: [(0, Ba.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Ba.jsxs)("span", {
            children: [nb, (0, Ba.jsx)("strong", {
              children: cb.baf2IslandName
            }), mb]
          }), (0, Ba.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Ub,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: vH,
            onChange: bb => {
              Ib(bb.target.value)
            },
            ...SH(fb, Mb)
          })]
        }), AH(cb) && (0, Ba.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ab(`${CM}islandsDeleteLeftBack`)
        }), (0, Ba.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Ba.jsx)(hT.G, {
            disabled: !Hb || !sb,
            onClick: fb,
            children: ab(`${CM}islandsDeleteForGood`)
          }), (0, Ba.jsx)(hT.d, {
            onClick: Mb,
            children: ab(`${CM}islandsCancel`)
          })]
        })]
      })
    }

    function uM(bb) {
      let {
        members: cb,
        t: sb
      } = bb;
      const kb = cb.length;
      return (0, Ba.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Ba.jsxs)("span", {
          children: [1 === kb ? sb(`${CM}islandsPlayersOne`) : sb(`${CM}islandsPlayers`, {
            count: String(kb)
          }), " "]
        }), cb.map(((bb, cb) => (0, Ba.jsxs)("span", {
          className: JW()("Baf2IslandMember", {
            Here: bb.baf2MemberHere
          }),
          title: bb.baf2MemberHere ? sb(`${CM}islandsPlayerHere`) : void 0,
          children: [bb.baf2MemberName, cb < kb - 1 ? ", " : ""]
        }, bb.baf2MemberKey)))]
      })
    }

    function YM(bb) {
      let {
        card: cb,
        answered: sb,
        nowMs: Wb,
        t: ab
      } = bb;
      const Tb = wT(),
        [Ub, Ib] = (0, kb.useState)(new Map),
        Hb = AH(cb);
      if (!Hb) return null;
      return (0, Ba.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Ba.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: ab(`${CM}islandsLeftTitle`)
        }), (0, Ba.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Hb.left.map((bb => {
            const kb = bb.baf2LeftKey,
              fb = rH(Ub.get(kb), sb, Wb),
              Mb = function(bb) {
                return 1 === bb ? [`${NH}islandsLeftItemsOne`] : [`${NH}islandsLeftItems`, {
                  count: String(bb)
                }]
              }(bb.baf2LeftItems);
            return (0, Ba.jsx)("li", {
              className: JW()("Baf2IslandPerson", {
                Pending: fb
              }),
              children: (0, Ba.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Ba.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: bb.baf2LeftName
                }), (0, Ba.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: ab(Mb[0], Mb[1])
                }), Hb.claim && (0, Ba.jsx)(hT.p, {
                  className: "Baf2IslandPersonButton",
                  disabled: fb,
                  onClick: () => {
                    (bb => {
                      const sb = Tb.sendIslandEdit(`baf2coopclaim ${cb.baf2IslandId} ${bb}`);
                      Ib((cb => new Map(cb).set(bb, {
                        atMs: Date.now(),
                        answer: sb
                      })))
                    })(kb)
                  },
                  children: ab(`${CM}islandsClaim`)
                })]
              })
            }, kb)
          }))
        }), Hb.goThere && (0, Ba.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ab(`${CM}islandsClaimGoThere`)
        })]
      })
    }

    function hM(bb) {
      let {
        card: cb,
        view: sb,
        blocked: Wb,
        maxIslands: ab,
        answered: Tb,
        nowMs: Ub,
        done: Ib,
        openSocial: Hb,
        t: fb
      } = bb;
      const Mb = wT(),
        [Xb, nb] = (0, kb.useState)(new Map),
        [mb, lb] = (0, kb.useState)(new Map),
        [Qb, eb] = (0, kb.useState)(null),
        Cb = (0, kb.useRef)(null);
      jH(Cb);
      const Nb = cb.baf2IslandId,
        Vb = cb.baf2IslandCoop,
        Lb = null !== Vb && void 0 !== Vb && Vb.baf2CoopMembers.some((bb => bb.baf2MemberKey === Qb)) ? Qb : null,
        ub = function(bb, cb) {
          const sb = bb.baf2IslandCoop;
          return sb && wH(sb) || null !== cb ? void 0 : bb.baf2IslandInvitable
        }(cb, Wb),
        Yb = function(bb, cb) {
          const sb = bb.baf2IslandCoop;
          return sb && wH(sb) ? {
            key: `${NH}islandsCoopFull`,
            params: {
              max: String(sb.baf2CoopMax)
            }
          } : void 0 !== bb.baf2IslandInvitable && null === cb || sb && !sb.baf2CoopManageHere ? null : "degraded" === cb || "stuck" === cb ? {
            key: `${NH}islandsInviteNotLoaded`
          } : null === cb || function(bb) {
            return "notHome" === bb || "wilds" === bb || "visiting" === bb
          }(cb) || tH(cb) ? {
            key: `${NH}islandsInviteGoThere`
          } : {
            key: `${NH}islandsInviteBusy`
          }
        }(cb, Wb),
        hb = () => {
          var bb;
          eb(null), null === (bb = Cb.current) || void 0 === bb || bb.focus()
        };
      return (0, Ba.jsxs)("div", {
        ref: Cb,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...RH(null === Lb ? Ib : hb),
        children: [Vb && (0, Ba.jsxs)(Ba.Fragment, {
          children: [(0, Ba.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: fb(`${CM}islandsPlayersTitle`, {
              count: String(Vb.baf2CoopMembers.length),
              max: String(Vb.baf2CoopMax)
            })
          }), (0, Ba.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: Vb.baf2CoopMembers.map(((bb, cb) => {
              const kb = bb.baf2MemberKey,
                Wb = rH(Xb.get(kb), Tb, Ub);
              return (0, Ba.jsxs)("li", {
                className: JW()("Baf2IslandPerson", {
                  Pending: Wb
                }),
                children: [(0, Ba.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Ba.jsx)("span", {
                    className: JW()("Baf2IslandPersonName", {
                      Here: bb.baf2MemberHere
                    }),
                    children: bb.baf2MemberName
                  }), bb.baf2MemberHere && (0, Ba.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: fb(`${CM}islandsPlayerHere`)
                  }), 0 === cb && (0, Ba.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: fb(`${CM}islandsPlayerOwner`)
                  }), sb.remove && cb > 0 && !Wb && Lb !== kb && (0, Ba.jsx)(hT.J, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var bb;
                      eb(kb), null === (bb = Cb.current) || void 0 === bb || bb.focus()
                    },
                    children: fb(`${CM}islandsRemove`)
                  })]
                }), Lb === kb && (0, Ba.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Ba.jsx)("p", {
                    children: KH(fb, `${CM}islandsRemoveConfirm`, {
                      player: bb.baf2MemberName
                    })
                  }), (0, Ba.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Ba.jsx)(hT.G, {
                      onClick: () => {
                        (bb => {
                          const cb = Mb.sendIslandEdit(`baf2coopremove ${Nb} ${bb.baf2MemberKey}`);
                          nb((sb => new Map(sb).set(bb.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: cb
                          }))), hb()
                        })(bb)
                      },
                      children: fb(`${CM}islandsRemoveYes`)
                    }), (0, Ba.jsx)(hT.d, {
                      onClick: hb,
                      children: fb(`${CM}islandsCancel`)
                    })]
                  })]
                })]
              }, kb)
            }))
          })]
        }), (void 0 !== ub || null !== Yb) && (0, Ba.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: fb(`${CM}islandsInviteTitle`)
        }), !Vb && (void 0 !== ub || null !== Yb) && (0, Ba.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: fb(`${CM}islandsInviteShareNote`)
        }), 0 === (null === ub || void 0 === ub ? void 0 : ub.length) && (0, Ba.jsx)(JM, {
          openSocial: Hb,
          t: fb
        }), void 0 !== ub && ub.length > 0 && (0, Ba.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: ub.map((bb => {
            const cb = !0 === bb.baf2InvitableSent || rH(mb.get(bb.baf2InvitableId), Tb, Ub);
            return (0, Ba.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Ba.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Ba.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: bb.baf2InvitableName
                }), bb.baf2InvitableFull && !cb && (0, Ba.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: fb(`${CM}islandsInviteTheirFull`, {
                    max: String(ab)
                  })
                }), (cb || !bb.baf2InvitableFull) && (0, Ba.jsx)(hT.p, {
                  className: "Baf2IslandPersonButton",
                  disabled: cb,
                  onClick: () => {
                    (bb => {
                      const cb = Mb.sendIslandEdit(`baf2coopinvite ${Nb} ${bb}`);
                      lb((sb => new Map(sb).set(bb, {
                        atMs: Date.now(),
                        answer: cb
                      })))
                    })(bb.baf2InvitableId)
                  },
                  children: fb(cb ? `${CM}islandsInvited` : `${CM}islandsInvite`)
                })]
              })
            }, bb.baf2InvitableId)
          }))
        }), Yb && (0, Ba.jsx)(sf, {
          note: Yb,
          t: fb
        }), (0, Ba.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Ba.jsx)(hT.d, {
            onClick: Ib,
            children: fb(`${CM}islandsDone`)
          })
        })]
      })
    }

    function JM(bb) {
      let {
        openSocial: cb,
        t: sb
      } = bb;
      return (0, Ba.jsxs)(Ba.Fragment, {
        children: [(0, Ba.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: sb(cb ? `${CM}islandsInviteNobody` : `${CM}islandsInviteNobodyGuest`)
        }), cb && (0, Ba.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Ba.jsx)(hT.d, {
            onClick: cb,
            children: sb("socialBar:social")
          })
        })]
      })
    }

    function gM(bb) {
      let {
        className: cb,
        text: sb,
        ConfirmButton: Wb,
        confirmLabel: ab,
        canConfirm: Tb,
        send: Ub,
        done: Ib,
        t: Hb
      } = bb;
      const fb = (0, kb.useRef)(null);
      jH(fb);
      const Mb = () => {
        Ib(null)
      };
      return (0, Ba.jsxs)("div", {
        ref: fb,
        tabIndex: -1,
        className: JW()("Baf2IslandForm", cb),
        ...RH(Mb),
        children: [(0, Ba.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: sb
        }), (0, Ba.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Ba.jsx)(Wb, {
            disabled: !Tb,
            onClick: () => {
              Tb && Ib(Ub())
            },
            children: ab
          }), (0, Ba.jsx)(hT.d, {
            onClick: Mb,
            children: Hb(`${CM}islandsCancel`)
          })]
        })]
      })
    }

    function BM(bb) {
      return "hidden" !== bb
    }

    function tM(bb) {
      var cb, sb;
      let {
        card: Wb,
        keepOwn: ab,
        blocked: Tb,
        maxIslands: Ub,
        serverNowMs: Ib,
        nowMs: Hb,
        actions: fb,
        full: Mb,
        waits: Xb,
        answered: nb,
        mode: mb,
        setMode: lb,
        pending: Qb,
        onSent: eb,
        switchTo: Cb,
        leave: Nb,
        coopOn: Vb,
        openSocial: Lb,
        t: ub
      } = bb;
      const Yb = wT(),
        hb = Wb.baf2IslandActive,
        Jb = hb ? null : function(bb, cb) {
          if (bb <= 0) return null;
          const sb = cb - bb;
          if (sb < Ca) return [`${NH}islandsPlayedJustNow`];
          if (sb < VH) return [`${NH}islandsPlayedMinutes`, {
            minutes: String(Math.floor(sb / Ca))
          }];
          if (sb < LH) return [`${NH}islandsPlayedHours`, {
            hours: String(Math.floor(sb / VH))
          }];
          const kb = Math.floor(sb / LH);
          return 1 === kb ? [`${NH}islandsPlayedDay`] : [`${NH}islandsPlayedDays`, {
            days: String(kb)
          }]
        }(Wb.baf2IslandLastPlayedMs, Ib),
        gb = void 0 === (Bb = Wb.baf2IslandItems) ? null : 0 === Bb ? [`${NH}islandsItemsNone`] : 1 === Bb ? [`${NH}islandsItemsOne`] : [`${NH}islandsItems`, {
          count: String(Bb)
        }];
      var Bb;
      const tb = function(bb) {
          return bb ? 1 === bb ? [`${NH}islandsWaitingOne`] : [`${NH}islandsWaiting`, {
            count: String(bb)
          }] : null
        }(Wb.baf2IslandWaiting),
        yb = Wb.baf2IslandUnreadable,
        Pb = Wb.baf2IslandCoop,
        Db = dH(Wb, fb, ab, Mb, Vb, Tb),
        Eb = (0, kb.useRef)(null);
      FH(null !== mb, Eb);
      const ib = () => {
          var bb;
          lb(null), null === (bb = Eb.current) || void 0 === bb || bb.focus()
        },
        Ob = (bb, cb) => {
          ib(), null !== bb && eb(bb, cb)
        },
        Gb = (bb, cb) => ub(`${CM}${bb}`, {
          time: Ya(ub, cb)
        });
      return (0, Ba.jsxs)("li", {
        ref: Eb,
        tabIndex: -1,
        className: JW()("Baf2IslandCard", {
          Active: hb,
          Pending: Qb,
          Shared: void 0 !== Pb
        }),
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Ba.jsx)("strong", {
            className: "Baf2IslandName",
            children: Wb.baf2IslandName
          }), hb && (0, Ba.jsx)("span", {
            className: "Baf2IslandBadge",
            children: ub(`${CM}islandsOnThis`)
          }), Pb && (0, Ba.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: ub(`${CM}islandsShared`)
          })]
        }), "member" === (null === Pb || void 0 === Pb ? void 0 : Pb.baf2CoopRole) && (0, Ba.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: KH(ub, `${CM}islandsSharedBy`, {
            owner: Pb.baf2CoopOwner
          })
        }), void 0 !== yb && (0, Ba.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: ub("newer" === yb ? `${CM}islandsUnreadable` : `${CM}islandsDamaged`)
        }), "corrupt" === yb && Mb && (0, Ba.jsx)("p", {
          className: "Baf2IslandStats",
          children: ub(`${CM}islandsDamagedFull`)
        }), void 0 === yb && (0, Ba.jsxs)(Ba.Fragment, {
          children: [(0, Ba.jsx)(bf, {
            tier: Wb.baf2IslandTier,
            t: ub
          }), (0, Ba.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Ba.jsx)("span", {
              children: 1 === Wb.baf2IslandQuestsDone ? ub(`${CM}islandsQuestsDoneOne`) : ub(`${CM}islandsQuestsDone`, {
                count: String(Wb.baf2IslandQuestsDone)
              })
            }), (0, Ba.jsx)("span", {
              children: 1 === Wb.baf2IslandMachines ? ub(`${CM}islandsMachinesOne`) : ub(`${CM}islandsMachines`, {
                count: String(Wb.baf2IslandMachines)
              })
            }), gb && (0, Ba.jsx)("span", {
              children: ub(gb[0], gb[1])
            }), tb && (0, Ba.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: ub(tb[0], tb[1])
            }), Jb && (0, Ba.jsx)("span", {
              children: ub(Jb[0], Jb[1])
            })]
          })]
        }), Pb && void 0 === Pb.baf2CoopState && "people" !== mb && (0, Ba.jsx)(uM, {
          members: Pb.baf2CoopMembers,
          t: ub
        }), null === mb && (0, Ba.jsx)(YM, {
          card: Wb,
          answered: nb,
          nowMs: Hb,
          t: ub
        }), Db.note && (0, Ba.jsx)(sf, {
          note: Db.note,
          className: JW()({
            Unreachable: void 0 !== (null === Pb || void 0 === Pb ? void 0 : Pb.baf2CoopState)
          }),
          t: ub
        }), "rename" === mb && (0, Ba.jsx)(VM, {
          card: Wb,
          canRename: "enabled" === Db.rename,
          done: Ob,
          t: ub
        }), "delete" === mb && (0, Ba.jsx)(LM, {
          card: Wb,
          canDelete: "enabled" === Db.delete,
          done: bb => {
            Ob(bb, Pb ? "delete" : void 0)
          },
          t: ub
        }), "people" === mb && (0, Ba.jsx)(hM, {
          card: Wb,
          view: Db,
          blocked: Tb,
          maxIslands: Ub,
          answered: nb,
          nowMs: Hb,
          done: ib,
          openSocial: Lb,
          t: ub
        }), "leave" === mb && (0, Ba.jsx)(gM, {
          className: "Leave",
          text: KH(ub, `${CM}islandsLeaveConfirm`, {
            island: Wb.baf2IslandName,
            owner: null !== (cb = null === (sb = Wb.baf2IslandCoop) || void 0 === sb ? void 0 : sb.baf2CoopOwner) && void 0 !== cb ? cb : ""
          }),
          ConfirmButton: hT.G,
          confirmLabel: ub(`${CM}islandsLeaveYes`),
          canConfirm: "enabled" === Db.leave,
          send: () => NM(Yb, Wb),
          done: bb => {
            Ob(bb, "leave"), null !== bb && hb && Nb()
          },
          t: ub
        }), "unshare" === mb && (0, Ba.jsx)(gM, {
          className: "Unshare",
          text: KH(ub, `${CM}islandsStopSharingConfirm`, {
            island: Wb.baf2IslandName
          }),
          ConfirmButton: hT.p,
          confirmLabel: ub(`${CM}islandsStopSharing`),
          canConfirm: "enabled" === Db.unshare,
          send: () => Yb.sendIslandEdit(`baf2coopunshare ${Wb.baf2IslandId}`),
          done: bb => {
            Ob(bb), null !== bb && Nb()
          },
          t: ub
        }), null === mb && !Qb && (0, Ba.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Wb.baf2IslandName,
          children: [BM(Db.switch) && (0, Ba.jsx)(hT.p, {
            disabled: "enabled" !== Db.switch,
            onClick: Cb,
            children: "tryAgain" === Db.switchLabel ? ub(`${CM}islandsTryAgain`) : Xb.switch > 0 ? Gb("islandsSwitchIn", Xb.switch) : ub(`${CM}islandsSwitch`)
          }), BM(Db.rename) && (0, Ba.jsx)(hT.d, {
            disabled: "enabled" !== Db.rename,
            onClick: () => {
              lb("rename")
            },
            children: ub(`${CM}islandsRename`)
          }), BM(Db.people) && (0, Ba.jsx)(hT.d, {
            disabled: "enabled" !== Db.people,
            onClick: () => {
              lb("people")
            },
            children: ub("players" === Db.peopleLabel ? `${CM}islandsPlayersButton` : `${CM}islandsInviteButton`)
          }), BM(Db.unshare) && (0, Ba.jsx)(hT.d, {
            disabled: "enabled" !== Db.unshare,
            onClick: () => {
              lb("unshare")
            },
            children: ub(`${CM}islandsStopSharing`)
          }), BM(Db.dismiss) && (0, Ba.jsx)(hT.d, {
            disabled: "enabled" !== Db.dismiss,
            onClick: () => {
              eb(NM(Yb, Wb), "dismiss"), hb && Nb()
            },
            children: ub(`${CM}islandsDismiss`)
          }), BM(Db.leave) && (0, Ba.jsx)(hT.J, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Db.leave,
            onClick: () => {
              lb("leave")
            },
            children: hb && Xb.switch > 0 ? Gb("islandsLeaveIn", Xb.switch) : ub(`${CM}islandsLeave`)
          }), BM(Db.delete) && (0, Ba.jsx)(hT.J, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Db.delete,
            onClick: () => {
              lb("delete")
            },
            children: Xb.change > 0 && Db.deleteWaits ? Gb("islandsDeleteIn", Xb.change) : ub(`${CM}islandsDelete`)
          })]
        })]
      })
    }
    const yM = "buildAFactory2Game:";

    function PM(bb) {
      let {
        invite: cb,
        actions: sb,
        full: Wb,
        maxIslands: ab,
        waitSeconds: Tb,
        focus: Ub,
        focused: Ib,
        join: Hb,
        decline: fb,
        t: Mb
      } = bb;
      const [Xb, nb] = (0, kb.useState)(!1), mb = (0, kb.useRef)(null);
      FH(Xb, mb), (0, kb.useEffect)((() => {
        var bb;
        Ub && (nb(!0), null === (bb = mb.current) || void 0 === bb || bb.focus(), Ib())
      }), [Ub, Ib]);
      const lb = function(bb, cb, sb, kb, Wb) {
          return sb ? {
            join: !1,
            note: {
              key: `${NH}islandsJoinTooMany`,
              params: {
                max: String(kb)
              }
            }
          } : bb.baf2InvitePlayers >= Wb ? {
            join: !1,
            note: {
              key: `${NH}islandsJoinFull`
            }
          } : {
            join: cb.switch,
            note: null
          }
        }(cb, sb, Wb, ab, 10),
        Qb = cb.baf2InviteIsland,
        eb = cb.baf2InvitePlayers,
        Cb = () => {
          var bb;
          nb(!1), null === (bb = mb.current) || void 0 === bb || bb.focus()
        },
        Nb = Tb > 0 && null === lb.note ? Mb(`${yM}islandsJoinIn`, {
          time: Ya(Mb, Tb)
        }) : Mb(`${yM}islandsJoin`);
      return (0, Ba.jsxs)("li", {
        ref: mb,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Xb ? RH(Cb) : {},
        children: [(0, Ba.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Ba.jsx)("strong", {
            className: "Baf2IslandName",
            children: Qb
          })
        }), (0, Ba.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: KH(Mb, `${yM}islandsInvitedBy`, {
            owner: cb.baf2InviteOwner
          })
        }), (0, Ba.jsx)(bf, {
          tier: cb.baf2InviteTier,
          t: Mb
        }), (0, Ba.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Ba.jsx)("span", {
            children: 1 === eb ? Mb(`${yM}islandsPlayersCountOne`) : Mb(`${yM}islandsPlayersCount`, {
              count: String(eb)
            })
          })
        }), lb.note && (0, Ba.jsx)(sf, {
          note: lb.note,
          t: Mb
        }), Xb && (0, Ba.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: KH(Mb, `${yM}islandsJoinConfirm`, {
            island: Qb
          })
        }), !Xb && (0, Ba.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Qb,
          children: [(0, Ba.jsx)(hT.p, {
            disabled: !lb.join,
            onClick: () => {
              var bb;
              nb(!0), null === (bb = mb.current) || void 0 === bb || bb.focus()
            },
            children: Nb
          }), (0, Ba.jsx)(hT.d, {
            onClick: fb,
            children: Mb(`${yM}islandsDecline`)
          })]
        }), Xb && (0, Ba.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Ba.jsx)(hT.p, {
            disabled: !lb.join,
            onClick: Hb,
            children: Mb(`${yM}islandsJoinYes`)
          }), (0, Ba.jsx)(hT.d, {
            onClick: Cb,
            children: Mb(`${yM}islandsCancel`)
          })]
        })]
      })
    }

    function DM(bb) {
      let {
        invites: cb,
        actions: sb,
        full: kb,
        maxIslands: Wb,
        waitSeconds: ab,
        focus: Tb,
        focused: Ub,
        leave: Ib,
        declined: Hb,
        t: fb
      } = bb;
      const Mb = wT();
      return (0, Ba.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Ba.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: fb(`${yM}islandsInvitesTitle`)
        }), (0, Ba.jsx)("ul", {
          className: "Baf2IslandCards",
          children: cb.map((bb => {
            const cb = bb.baf2InviteId;
            return (0, Ba.jsx)(PM, {
              invite: bb,
              actions: sb,
              full: kb,
              maxIslands: Wb,
              waitSeconds: ab,
              focus: Tb === cb,
              focused: Ub,
              join: () => {
                Mb.send(`baf2coopaccept ${cb}`), Ib()
              },
              decline: () => {
                Mb.send(`baf2coopdecline ${cb}`), Hb(cb)
              },
              t: fb
            }, cb)
          }))
        })]
      })
    }
    const EM = "buildAFactory2Game:";

    function iM(bb) {
      let {
        cards: cb,
        activeName: sb,
        canStart: Wb,
        waitSeconds: ab,
        leave: Tb,
        t: Ub
      } = bb;
      const Ib = wT(),
        [Hb, fb] = (0, kb.useState)(!1),
        [Mb, Xb] = (0, kb.useState)(""),
        nb = (0, kb.useRef)(null);
      FH(Hb, nb), (0, kb.useEffect)((() => {
        var bb;
        Hb && (null === (bb = nb.current) || void 0 === bb || bb.focus())
      }), [Hb]);
      const mb = JH(cb),
        lb = YH(Mb),
        Qb = hH(lb),
        eb = () => {
          Wb && !Qb && (Ib.send("" === lb || lb === mb ? vb : `${vb} ${lb}`), Tb())
        },
        Cb = () => {
          var bb;
          fb(!1), null === (bb = nb.current) || void 0 === bb || bb.focus()
        };
      return (0, Ba.jsxs)("li", {
        ref: nb,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Hb ? RH(Cb) : {},
        children: [(0, Ba.jsx)("strong", {
          className: "Baf2IslandName",
          children: Ub(`${EM}islandsNewTitle`)
        }), !Hb && (0, Ba.jsx)("p", {
          className: "Baf2IslandStats",
          children: Ub(`${EM}islandsNewNote`)
        }), Hb && (0, Ba.jsxs)(Ba.Fragment, {
          children: [(0, Ba.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: KH(Ub, `${EM}islandsNewConfirm`, {
              name: sb
            })
          }), (0, Ba.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [Ub(`${EM}islandsNewNameLabel`), (0, Ba.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Mb,
              placeholder: mb,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: vH,
              onChange: bb => {
                Xb(bb.target.value)
              },
              ...SH(eb, Cb)
            })]
          }), Qb && (0, Ba.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: Ub(`${EM}islandsNameReserved`)
          })]
        }), (0, Ba.jsxs)("div", {
          className: JW()("Baf2IslandButtons", {
            Stacked: Hb
          }),
          children: [(0, Ba.jsx)(hT.p, {
            disabled: !Wb || Hb && Qb,
            onClick: () => {
              if (!Hb) return Xb(mb), void fb(!0);
              eb()
            },
            children: ab > 0 ? Ub(`${EM}islandsNewIn`, {
              time: Ya(Ub, ab)
            }) : Ub(Hb ? `${EM}islandsNewConfirmButton` : `${EM}islandsNew`)
          }), Hb && (0, Ba.jsx)(hT.d, {
            onClick: Cb,
            children: Ub(`${EM}islandsCancel`)
          })]
        })]
      })
    }

    function OM(bb) {
      var cb, sb;
      let {
        message: Wb,
        arrivedAtMs: ab,
        close: Tb,
        leave: Ub,
        openSocial: Ib
      } = bb;
      const Hb = wT(),
        {
          t: fb
        } = (0, yW.E)(),
        Mb = pH(1e3),
        [Xb, nb] = (0, kb.useState)(null),
        [mb, lb] = (0, kb.useState)(new Map),
        [Qb, eb] = (0, kb.useState)(new Set),
        Cb = Wb.baf2IslandCards,
        Nb = function(bb, cb, sb, kb) {
          return (null !== bb && void 0 !== bb ? bb : []).filter((bb => cb + bb.baf2InviteLeftMs > sb && !kb.has(bb.baf2InviteId)))
        }(Wb.baf2IslandsInvites, ab, Mb, Qb),
        Vb = Nb.map((bb => bb.baf2InviteId)).join(" "),
        Lb = (0, kb.useRef)(null),
        ub = xH(Lb);
      (0, kb.useEffect)((() => {
        var bb, cb;
        null !== (bb = Lb.current) && void 0 !== bb && bb.contains(document.activeElement) || (null === (cb = Lb.current) || void 0 === cb || cb.focus())
      }), [Wb, Vb]), (0, kb.useEffect)((() => {
        lb((bb => function(bb, cb, sb, kb) {
          const Wb = new Map;
          for (const ab of cb) {
            const cb = bb.get(ab.baf2IslandId);
            cb && (void 0 !== cb.untilGone || kb < cb.answer) && EH(cb, ab, sb) && Wb.set(ab.baf2IslandId, cb)
          }
          return Wb.size === bb.size ? bb : Wb
        }(bb, Wb.baf2IslandCards, Date.now(), Wb.baf2IslandsAnswered)))
      }), [Wb]);
      const Yb = uH(ab, Wb.baf2IslandsWaitMs, Mb),
        hb = Wb.baf2IslandsBlocked,
        Jb = yH(hb, Yb),
        gb = function(bb, cb) {
          const sb = yH(bb, 0);
          return {
            switch: sb.switch ? cb : 0,
            change: sb.change ? cb : 0
          }
        }(hb, Yb),
        Bb = Cb.length >= Wb.baf2IslandsMax,
        tb = Cb.length > 0,
        yb = function(bb, cb, sb) {
          return bb + Math.max(0, sb - cb)
        }(Wb.baf2IslandsNowMs, ab, Mb),
        Pb = null !== (cb = null === (sb = Cb.find((bb => bb.baf2IslandActive))) || void 0 === sb ? void 0 : sb.baf2IslandName) && void 0 !== cb ? cb : "",
        Db = function(bb) {
          const cb = bb.filter(qH).length;
          return cb <= 1 && cb < bb.length
        }(Cb),
        Eb = !0 === Wb.baf2IslandsCoop,
        ib = function(bb, cb) {
          const sb = bb.find((bb => bb.baf2IslandActive)),
            kb = null === sb || void 0 === sb ? void 0 : sb.baf2IslandCoop;
          return sb && "member" === (null === kb || void 0 === kb ? void 0 : kb.baf2CoopRole) ? {
            key: `${NH}islandsKeepOwnMember`,
            names: {
              owner: kb.baf2CoopOwner,
              island: sb.baf2IslandName
            }
          } : {
            key: cb ? `${NH}islandsKeepOwn` : `${NH}islandsKeepOwnSolo`
          }
        }(Cb, Eb),
        [Ob, Gb] = (0, kb.useState)(null);
      (0, kb.useEffect)((() => {
        void 0 !== Wb.baf2IslandsFocusInvite && Gb(Wb.baf2IslandsFocusInvite)
      }), [Wb]);
      const Kb = (0, kb.useCallback)((() => {
          Gb(null)
        }), []),
        Zb = Xb ? Cb.find((bb => bb.baf2IslandId === Xb.id)) : void 0,
        zb = Xb && Zb && "hidden" !== dH(Zb, Jb, Db, Bb, Eb, hb)[Xb.mode] ? Xb : null;
      return (0, Ba.jsx)(YT.c, {
        close: Tb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Ba.jsxs)("section", {
          ref: Lb,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: ub ? {
            marginTop: `${ub.marginTop}px`,
            maxHeight: `${ub.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsxs)("div", {
              children: [(0, Ba.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: fb(`${EM}islandsTitle`)
              }), tb && (0, Ba.jsx)("p", {
                children: fb(`${EM}islandsSubtitle`, {
                  count: String(Cb.length),
                  max: String(Wb.baf2IslandsMax)
                })
              })]
            }), (0, Ba.jsx)(hT.j, {
              ariaLabel: fb(`${EM}islandsClose`),
              onClick: Tb
            })]
          }), (0, Ba.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== hb && (0, Ba.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: KH(fb, gH(hb, BH(Cb)), {
                island: Pb
              })
            }), tb && Nb.length > 0 && (0, Ba.jsx)(DM, {
              invites: Nb,
              actions: Jb,
              full: Bb,
              maxIslands: Wb.baf2IslandsMax,
              waitSeconds: gb.switch,
              focus: Ob,
              focused: Kb,
              leave: Ub,
              declined: bb => {
                eb((cb => new Set(cb).add(bb)))
              },
              t: fb
            }), tb && (0, Ba.jsxs)(Ba.Fragment, {
              children: [Bb && (0, Ba.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: fb(`${EM}islandsFull`, {
                  max: String(Wb.baf2IslandsMax)
                })
              }), (0, Ba.jsx)("p", {
                className: "Baf2IslandsNote",
                children: KH(fb, ib.key, ib.names)
              }), (0, Ba.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Cb.map((bb => {
                  const cb = bb.baf2IslandId;
                  return (0, Ba.jsx)(tM, {
                    card: bb,
                    keepOwn: Db,
                    coopOn: Eb,
                    openSocial: Ib,
                    blocked: hb,
                    maxIslands: Wb.baf2IslandsMax,
                    serverNowMs: yb,
                    nowMs: Mb,
                    actions: Jb,
                    full: Bb,
                    waits: gb,
                    answered: Wb.baf2IslandsAnswered,
                    mode: (null === zb || void 0 === zb ? void 0 : zb.id) === cb ? zb.mode : null,
                    setMode: bb => {
                      nb(null === bb ? null : {
                        id: cb,
                        mode: bb
                      })
                    },
                    pending: EH(mb.get(cb), bb, Mb),
                    onSent: (sb, kb) => {
                      lb((Wb => {
                        const ab = {
                          atMs: Date.now(),
                          from: bb.baf2IslandName,
                          answer: sb
                        };
                        return new Map(Wb).set(cb, kb ? {
                          ...ab,
                          untilGone: kb
                        } : ab)
                      }))
                    },
                    leave: Ub,
                    switchTo: () => {
                      Hb.send(`baf2islandswitch ${cb}`), Ub()
                    },
                    t: fb
                  }, cb)
                })), !Bb && (0, Ba.jsx)(iM, {
                  cards: Cb,
                  activeName: Pb,
                  canStart: Jb.change,
                  waitSeconds: gb.change,
                  leave: Ub,
                  t: fb
                })]
              })]
            })]
          })]
        })
      })
    }
    var GM = sb(4728);
    const KM = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        JW: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      ZM = Object.keys(KM),
      zM = new Set([...Object.keys(vc), ...[...ic.Press.recipes, ...ic["Wire Mill"].recipes].map((bb => bb.output))]),
      qM = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      dM = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      AM = / Bar$|Alloy$/,
      wM = /Porkchop|Beef|Mutton|Venison|Steak/,
      rM = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const oM = (0, kb.memo)((function(bb) {
      let {
        item: cb,
        name: sb,
        amount: kb,
        selected: Wb,
        small: ab,
        onPick: Tb
      } = bb;
      return (0, Ba.jsxs)("button", {
        type: "button",
        className: JW()("Baf2TermTile", {
          On: Wb,
          Small: ab
        }),
        "aria-label": `${sb}: ${kb}`,
        "aria-pressed": Wb,
        onClick: () => {
          Tb(cb)
        },
        children: [(0, Ba.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Ba.jsx)(DW.d, {
            itemName: cb,
            amount: 0
          })
        }), (0, Ba.jsx)("span", {
          className: "Baf2TermCount",
          children: La(kb, 1e4)
        }), !ab && (0, Ba.jsx)("span", {
          className: "Baf2TermName",
          children: sb
        })]
      })
    }));

    function SM(bb) {
      let {
        store: cb,
        close: sb,
        send: Wb
      } = bb;
      const {
        t: ab
      } = (0, yW.E)(), {
        isTouchScreen: Tb
      } = (0, uW.p)(["isTouchScreen"]);
      ! function(bb) {
        const [cb, sb] = (0, kb.useState)(bb.version);
        (0, kb.useEffect)((() => (sb(bb.version), bb.subscribe((() => {
          sb(bb.version)
        })))), [bb])
      }(cb);
      const [Ub, Ib] = (0, kb.useState)("all"), [Hb, fb] = (0, kb.useState)(!1), [Mb, Xb] = (0, kb.useState)(""), [nb, mb] = (0, kb.useState)(""), [lb, Qb] = (0, kb.useState)(null), [eb, Cb] = (0, kb.useState)(!1), [Nb, Vb, Lb] = function() {
        const bb = (0, kb.useRef)(null),
          [cb, sb] = (0, kb.useState)(!1),
          Wb = () => {
            const cb = bb.current;
            sb(null !== cb && cb.scrollLeft + cb.clientWidth < cb.scrollWidth - 1)
          };
        return (0, kb.useEffect)(Wb), (0, kb.useEffect)((() => {
          const cb = bb.current;
          if (!cb) return;
          const sb = new ResizeObserver(Wb);
          return sb.observe(cb), () => {
            sb.disconnect()
          }
        }), []), [bb, cb, Wb]
      }(), ub = (0, kb.useMemo)((() => new Map), [ab]), Yb = bb => {
        let cb = ub.get(bb);
        return void 0 === cb && (cb = function(bb, cb) {
          const sb = /^(.+) \((.+)\)$/.exec(bb);
          return sb ? cb(sb[2], sb[1]) : bb
        }(Ta(ab, bb), ((bb, cb) => ab("buildAFactory2Game:terminalTileKind", {
          kind: bb,
          base: cb
        }))), ub.set(bb, cb)), cb
      }, hb = cb.isReadOnly(), Jb = eb && !hb, gb = cb.recent(), Bb = cb.items(), tb = nb.trim().toLowerCase(), yb = Jb ? cb.heldItems(lb) : ("recent" === Ub ? gb : Bb).filter((bb => {
        const cb = Yb(bb);
        return ("all" === Ub || "recent" === Ub || function(bb) {
          return ma(bb) ? "farm" : qM.test(bb) ? "nuclear" : AM.test(bb) ? "bars" : wM.test(bb) ? "farm" : dM.test(bb) ? "JW" : zM.has(bb) ? "parts" : rM.test(bb) ? "farm" : "other"
        }(bb) === Ub) && ("" === tb || cb.toLowerCase().includes(tb)) && ("" === Mb || cb.toUpperCase().startsWith(Mb))
      })), Pb = new Set(Bb.map((bb => Yb(bb).charAt(0).toUpperCase()))), Db = bb => Jb ? cb.heldAmount(bb) : cb.amount(bb), Eb = !Jb && "recent" !== Ub && gb.length > 0, ib = function(bb, cb) {
        return null !== bb && cb.includes(bb) ? bb : null
      }(lb, Eb ? [...yb, ...gb] : yb), Ob = null === ib ? 0 : cb.amount(ib), Gb = null === ib ? 0 : Db(ib), Kb = (0, kb.useCallback)((bb => {
        Qb((cb => cb === bb ? null : bb))
      }), []), Zb = bb => Gb > 0 || Jb && null === ib && "fill" === bb && yb.length > 0, zb = Jb ? [
        ["one", ab("buildAFactory2Game:terminalStoreOne")],
        ["stack", ab("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", ab(null === ib ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", ab("buildAFactory2Game:terminalTakeOne")],
        ["stack", ab("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", ab("buildAFactory2Game:terminalFill")]
      ], qb = Jb ? ab("buildAFactory2Game:terminalStoreEmpty") : "" !== Mb ? ab("buildAFactory2Game:terminalEmptyLetter", {
        letter: Mb
      }) : "" !== tb ? ab("buildAFactory2Game:terminalEmptySearch", {
        query: nb
      }) : ab("buildAFactory2Game:terminalEmpty");
      return (0, Ba.jsx)(YT.c, {
        close: sb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Ba.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsxs)("div", {
              children: [(0, Ba.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: ab(cb.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Ba.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Ba.jsx)("span", {
                  className: JW()({
                    Off: Jb
                  }),
                  children: ab("buildAFactory2Game:terminalSubtitle", {
                    count: String(cb.siloCount())
                  })
                }), !hb && (0, Ba.jsx)("span", {
                  className: JW()({
                    Off: !Jb
                  }),
                  children: ab("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !hb && (0, Ba.jsx)(GM.e, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: ab("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: ab("buildAFactory2Game:terminalModeStore")
              }],
              value: Jb ? "store" : "take",
              onChange: bb => {
                Cb("store" === bb), Qb(null)
              },
              ariaLabel: ab("buildAFactory2Game:terminalModes")
            }), (0, Ba.jsx)(hT.j, {
              onClick: sb
            })]
          }), (0, Ba.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Ba.jsxs)("div", {
              className: JW()("Baf2TermTools", {
                Hidden: Jb
              }),
              children: [(0, Ba.jsx)("div", {
                ref: Nb,
                className: JW()("Baf2TermChips", {
                  MoreRight: Vb
                }),
                onScroll: Lb,
                children: Hb ? (0, Ba.jsxs)(Ba.Fragment, {
                  children: [(0, Ba.jsx)("button", {
                    type: "button",
                    "aria-label": ab("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      fb(!1), Xb("")
                    },
                    children: "\u2190"
                  }), [...Pb].sort().map((bb => (0, Ba.jsx)("button", {
                    type: "button",
                    className: JW()({
                      On: Mb === bb
                    }),
                    onClick: () => {
                      Xb(Mb === bb ? "" : bb)
                    },
                    children: bb
                  }, bb)))]
                }) : (0, Ba.jsxs)(Ba.Fragment, {
                  children: [(0, Ba.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      fb(!0)
                    },
                    children: ab("buildAFactory2Game:terminalLetters")
                  }), ZM.map((bb => (0, Ba.jsx)("button", {
                    type: "button",
                    className: JW()({
                      On: Ub === bb
                    }),
                    onClick: () => {
                      Ib(bb)
                    },
                    children: ab(KM[bb])
                  }, bb)))]
                })
              }), !Tb && (0, Ba.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: nb,
                placeholder: ab("buildAFactory2Game:terminalSearch"),
                "aria-label": ab("buildAFactory2Game:terminalSearch"),
                onChange: bb => {
                  mb(bb.target.value)
                },
                onKeyDown: bb => {
                  bb.stopPropagation()
                }
              }), (0, Ba.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": ab("buildAFactory2Game:terminalResort"),
                title: ab("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  cb.resort()
                },
                children: "\u21c5"
              })]
            }), Eb && (0, Ba.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Ba.jsx)("span", {
                children: ab(KM.recent)
              }), gb.map((bb => (0, Ba.jsx)(oM, {
                item: bb,
                name: Yb(bb),
                amount: cb.amount(bb),
                selected: ib === bb,
                small: !0,
                onPick: Kb
              }, bb)))]
            }), (0, Ba.jsx)("div", {
              className: "Baf2TermTiles",
              children: yb.length > 0 ? yb.map((bb => (0, Ba.jsx)(oM, {
                item: bb,
                name: Yb(bb),
                amount: Db(bb),
                selected: ib === bb,
                onPick: Kb
              }, bb))) : (0, Ba.jsx)("p", {
                className: "Baf2TermEmpty",
                children: qb
              })
            }), (0, Ba.jsxs)("div", {
              className: JW()("Baf2TermActions", {
                Hidden: Jb && 0 === yb.length
              }),
              children: [(0, Ba.jsx)("span", {
                className: "Baf2TermPicked",
                children: hb ? (0, Ba.jsxs)(Ba.Fragment, {
                  children: [null !== ib && Ob > 0 ? Yb(ib) : ab("buildAFactory2Game:terminalVisiting"), (0, Ba.jsx)("small", {
                    children: ab("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== ib ? (0, Ba.jsxs)(Ba.Fragment, {
                  children: [Yb(ib), (0, Ba.jsx)("small", {
                    children: ab("buildAFactory2Game:terminalStored", {
                      amount: Ob.toLocaleString()
                    })
                  })]
                }) : ab(Jb ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !hb && zb.map((bb => {
                let [sb, kb] = bb;
                const ab = "fill" === sb ? hT.n : hT.d;
                return (0, Ba.jsx)(ab, {
                  className: "Baf2TermTake",
                  disabled: !Zb(sb),
                  onClick: () => {
                    (bb => {
                      Zb(bb) && Wb(null === ib ? cb.putAll() : Jb ? cb.put(bb, ib) : cb.take(bb, ib))
                    })(sb)
                  },
                  children: kb
                }, sb)
              }))]
            })]
          })]
        })
      })
    }

    function RM(bb) {
      let {
        kind: cb,
        icon: sb,
        label: kb,
        number: Wb,
        preview: ab,
        note: Tb,
        tone: Ub = null,
        share: Ib,
        onExplain: Hb
      } = bb;
      return (0, Ba.jsxs)("button", {
        type: "button",
        className: JW()("NxLane", cb, {
          Warn: "warn" === Ub,
          Danger: "danger" === Ub
        }),
        onClick: Hb,
        children: [(0, Ba.jsxs)("span", {
          className: "NxLaneHead",
          children: [sb, (0, Ba.jsx)("span", {
            className: "NxLaneLabel",
            children: kb
          })]
        }), (0, Ba.jsxs)("span", {
          className: "NxLaneNum",
          children: [Wb, ab && (0, Ba.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", ab]
          })]
        }), (0, Ba.jsx)("span", {
          className: "NxLaneNote",
          children: Tb
        }), void 0 !== Ib && (0, Ba.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Ib)) + "%"
          }
        })]
      })
    }

    function vM(bb) {
      let {
        kind: cb,
        step: sb,
        short: kb,
        planned: Wb
      } = bb;
      return (0, Ba.jsx)("i", {
        className: JW()("NxPipe", cb, `Step${sb}`, {
          Short: kb,
          Planned: Wb
        }),
        "aria-hidden": "true"
      })
    }

    function FM(bb) {
      let {
        max: cb,
        bands: sb,
        ticks: kb,
        now: Wb,
        settle: ab,
        settleTone: Tb,
        onExplain: Ub
      } = bb;
      const Ib = bb => Math.max(0, Math.min(cb, bb)) / cb * 100 + "%";
      let Hb = 0;
      return (0, Ba.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: Ub,
        children: [(0, Ba.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [sb.map((bb => {
            const cb = {
              bottom: Ib(Hb),
              height: `calc(${Ib(bb.upTo)} - ${Ib(Hb)})`
            };
            return Hb = bb.upTo, (0, Ba.jsx)("i", {
              className: JW()("NxGaugeBand", bb.kind),
              style: cb
            }, bb.kind)
          })), null !== Wb && (0, Ba.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Ib(Wb)
            }
          }), void 0 !== ab && null !== ab && (0, Ba.jsx)("i", {
            className: JW()("NxGaugeSettle", {
              Bad: "bad" === Tb
            }),
            style: {
              bottom: Ib(ab)
            }
          })]
        }), (0, Ba.jsx)("span", {
          className: "NxGaugeTicks",
          children: kb.map((bb => (0, Ba.jsx)("small", {
            style: {
              bottom: Ib(bb)
            },
            children: bb
          }, bb)))
        })]
      })
    }

    function xM(bb) {
      const [cb, sb] = (0, kb.useState)(null), [Wb, ab] = (0, kb.useState)((() => {
        try {
          return null === window.localStorage.getItem(bb)
        } catch {
          return !1
        }
      })), Tb = (0, kb.useRef)(null);
      (0, kb.useEffect)((() => () => {
        null !== Tb.current && clearTimeout(Tb.current)
      }), []);
      const Ub = (0, kb.useCallback)((cb => {
          sb(cb), ab(!1);
          try {
            window.localStorage.setItem(bb, "1")
          } catch {}
          null !== Tb.current && clearTimeout(Tb.current), Tb.current = setTimeout((() => {
            Tb.current = null, sb(null)
          }), 5e3)
        }), [bb]),
        Ib = (0, kb.useCallback)(((cb, sb) => {
          const kb = `${bb}:${cb}`;
          try {
            if (null !== window.localStorage.getItem(kb)) return;
            window.localStorage.setItem(kb, "1")
          } catch {
            return
          }
          Ub(sb)
        }), [Ub, bb]);
      return {
        explained: cb,
        hinting: Wb,
        explain: Ub,
        explainOnce: Ib
      }
    }

    function jM(bb) {
      let {
        text: cb,
        tone: sb,
        explained: kb
      } = bb;
      return (0, Ba.jsxs)("p", {
        className: JW()("NxStatus", null === kb ? sb : "Explain"),
        "aria-live": "polite",
        children: [null !== kb && (0, Ba.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== kb && void 0 !== kb ? kb : cb]
      })
    }
    const pM = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function bX(bb, cb) {
      const sb = Number(bb[cb]);
      return 1 === sb || 2 === sb || 3 === sb ? sb : 0
    }

    function cX(bb) {
      return !!hI("reactor", bb.baf2RxNeed) || void 0 !== bb.baf2RxLayout && bb.baf2RxNeed.some((bb => {
        let [cb, sb] = bb;
        return sb > 0 && pM.includes(cb)
      }))
    }
    const sX = "buildAFactory2Game:";

    function kX(bb) {
      let {
        status: cb,
        store: sb,
        busy: kb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)();
      return function(bb) {
        return 0 !== (bb.baf2RxFlags & lc) && (!bb.baf2RxFormed || void 0 !== bb.baf2RxLayout)
      }(cb) ? (0, Ba.jsx)(hT.n, {
        disabled: !cX(cb) || kb,
        onClick: () => {
          sb.tap("fill", (() => {
            sb.send("fill")
          }))
        },
        children: Wb(void 0 !== cb.baf2RxLayout ? `${sX}rxFillLayout` : `${sX}rxFill`)
      }) : null
    }

    function WX(bb) {
      let {
        status: cb,
        store: sb,
        readOnly: Wb,
        bare: ab = !1
      } = bb;
      const {
        t: Tb
      } = (0, yW.E)(), Ub = cb.baf2RxLayout, [Ib, Hb, fb] = cb.baf2RxDims, Mb = (0, kb.useMemo)((() => {
        if (void 0 === Ub) return 0;
        const bb = Uint8Array.from(Ub, ((bb, cb) => bX(Ub, cb)));
        return sI([Ib - 2, Hb - 2, fb - 2], bb).max
      }), [Ub, Ib, Hb, fb]);
      return void 0 === Ub ? null : (0, Ba.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!ab && (0, Ba.jsx)("span", {
          className: "Baf2RxHint",
          children: Tb(`${sX}rxLayoutLine`, {
            amount: DI(Mb)
          })
        }), !Wb && (0, Ba.jsx)(hT.d, {
          onClick: () => {
            sb.send("layout", 0)
          },
          children: Tb(`${sX}rxLayoutHide`)
        })]
      })
    }
    const aX = "buildAFactory2Game:",
      TX = {
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

    function UX(bb) {
      let {
        id: cb,
        title: sb,
        body: kb,
        bodyParams: Wb,
        yes: ab,
        cancel: Tb,
        confirm: Ub
      } = bb;
      const {
        t: Ib
      } = (0, yW.E)();
      return (0, Ba.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": cb,
        children: [(0, Ba.jsx)("h3", {
          id: cb,
          children: Ib(sb)
        }), (0, Ba.jsx)("p", {
          children: Ib(kb, Wb)
        }), (0, Ba.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Ba.jsx)(hT.h, {
            onClick: Tb,
            children: Ib(`${aX}rxCancel`)
          }), (0, Ba.jsx)(hT.G, {
            onClick: Ub,
            children: Ib(ab)
          })]
        })]
      })
    }

    function IX(bb) {
      const [cb, sb] = (0, kb.useState)((() => bb.get()));
      return (0, kb.useEffect)((() => (sb(bb.get()), bb.subscribe((() => {
        sb(bb.get())
      })))), [bb]), cb
    }

    function HX(bb) {
      let {
        kind: cb,
        cap: sb,
        busy: Wb = !1,
        whyNot: ab = null,
        apart: Tb
      } = bb;
      const {
        t: Ub
      } = (0, yW.E)(), [Ib, Hb] = (0, kb.useState)(!1), fb = null !== ab, Mb = (0, kb.useRef)(null);
      if ((0, kb.useEffect)((() => {
          fb && Hb(!1)
        }), [fb]), (0, kb.useLayoutEffect)((() => {
          var bb;
          const cb = null === (bb = Mb.current) || void 0 === bb ? void 0 : bb.firstElementChild;
          fb ? null === cb || void 0 === cb || cb.setAttribute("aria-disabled", "true") : Wb || null === cb || void 0 === cb || cb.removeAttribute("aria-disabled")
        })), !Ib || fb) return (0, Ba.jsx)("span", {
        ref: Mb,
        className: "Baf2RxApartWrap",
        children: (0, Ba.jsx)(hT.h, {
          disabled: Wb,
          className: JW()({
            Baf2RxNotYet: fb
          }),
          onClick: () => {
            ab ? ab() : Hb(!0)
          },
          children: Ub(`${aX}rxApart`)
        })
      });
      const Xb = "battery" === cb,
        nb = void 0 === sb ? `${aX}batApartConfirmBodyPlan` : `${aX}batApartConfirmBody`;
      return (0, Ba.jsx)(UX, {
        id: `baf2ApartTitle_${cb}`,
        title: Xb ? `${aX}batApartConfirmTitle` : `${aX}rxApartConfirmTitle`,
        body: Xb ? nb : `${aX}rxApartConfirmBody`,
        bodyParams: void 0 === sb ? void 0 : {
          cap: sb
        },
        yes: `${aX}rxApart`,
        cancel: () => {
          Hb(!1)
        },
        confirm: () => {
          Hb(!1), Tb()
        }
      })
    }

    function fX(bb) {
      let {
        mood: cb,
        big: sb
      } = bb;
      const kb = TX[cb],
        Wb = [];
      return kb.rows.forEach(((bb, cb) => {
        for (let sb = 0; sb < bb.length; sb++) "." !== bb[sb] && Wb.push((0, Ba.jsx)("rect", {
          x: sb + 1,
          y: cb + 1,
          width: 1,
          height: 1,
          fill: "w" === bb[sb] ? "#8fd3ff" : kb.colour
        }, `${sb},${cb}`))
      })), (0, Ba.jsxs)("svg", {
        className: JW()("Baf2RxFace", {
          Big: sb,
          Alarm: "alarm" === cb
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Ba.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Ba.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Wb]
      })
    }

    function MX(bb) {
      return Va(bb, "+").replace("+", "")
    }

    function XX(bb) {
      let {
        kind: cb,
        dims: sb,
        cap: kb,
        disabled: Wb,
        compact: ab,
        resize: Tb
      } = bb;
      const {
        t: Ub
      } = (0, yW.E)(), {
        min: Ib,
        max: Hb
      } = qs(cb), fb = Math.min(kb, Hb), Mb = [`${aX}rxWide`, `${aX}rxTall`, `${aX}rxDeep`], Xb = {
        w: String(sb[0]),
        h: String(sb[1]),
        d: String(sb[2]),
        blocks: String(PI(cb, sb))
      };
      return (0, Ba.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Ba.jsx)("div", {
          className: "Baf2RxSteppers",
          children: sb.map(((bb, cb) => {
            const ab = kb => {
                const Wb = [sb[0], sb[1], sb[2]];
                Wb[cb] = bb + kb, Tb(Wb)
              },
              Xb = bb >= fb;
            return (0, Ba.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Ba.jsx)("button", {
                type: "button",
                "aria-label": Ub(`${aX}rxSmaller`),
                disabled: Wb || bb <= Ib,
                onClick: () => {
                  ab(-1)
                },
                children: "\u2212"
              }), (0, Ba.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [bb, (0, Ba.jsx)("small", {
                  children: Ub(Mb[cb])
                })]
              }), (0, Ba.jsx)("button", {
                type: "button",
                "aria-label": Ub(`${aX}rxBigger`),
                disabled: Wb || Xb,
                onClick: () => {
                  ab(1)
                },
                children: Xb && kb < Hb ? "\ud83d\udd12" : "+"
              })]
            }, Mb[cb])
          }))
        }), !ab && (0, Ba.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === cb ? Ub(`${aX}rxSizeLine`, {
            ...Xb,
            water: String(yI(sb))
          }) : Ub(`${aX}batSizeLine`, Xb)
        })]
      })
    }

    function nX(bb) {
      let {
        on: cb,
        label: sb,
        disabled: kb,
        locked: Wb,
        pending: ab,
        toggle: Tb
      } = bb;
      return (0, Ba.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": cb,
        disabled: kb,
        "aria-disabled": Wb || void 0,
        className: JW()("Baf2RxSwitch", {
          On: cb,
          Locked: Wb,
          Pending: ab
        }),
        onClick: Tb,
        children: [(0, Ba.jsx)("span", {
          className: "Baf2RxKnob"
        }), sb]
      })
    }
    const mX = "buildAFactory2Game:",
      lX = .95;

    function QX(bb, cb) {
      return 0 !== (bb.baf2RxFlags & cb)
    }

    function eX(bb) {
      return "cryo" === bb ? jb.l : jb.o
    }

    function CX(bb) {
      var cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb;
      return bb.baf2RxCryo ? {
        Nn: "cryo",
        usePerS: null !== (Wb = bb.baf2RxCryoUse) && void 0 !== Wb ? Wb : 0,
        needPerS: null !== (ab = bb.baf2RxCryoNeed) && void 0 !== ab ? ab : 0,
        inPerS: null !== (Tb = bb.baf2RxCryoIn) && void 0 !== Tb ? Tb : 0,
        stored: null !== (Ub = bb.baf2RxCryoStored) && void 0 !== Ub ? Ub : 0,
        makersShort: null !== (Ib = bb.baf2RxMixersShort) && void 0 !== Ib ? Ib : 0,
        waterBeside: null !== (Hb = bb.baf2RxWaterUse) && void 0 !== Hb ? Hb : 0,
        pct: bb.baf2RxWater
      } : {
        Nn: "water",
        usePerS: null !== (cb = bb.baf2RxWaterUse) && void 0 !== cb ? cb : 0,
        needPerS: null !== (sb = bb.baf2RxWaterNeed) && void 0 !== sb ? sb : 0,
        inPerS: bb.baf2RxWaterIn,
        stored: bb.baf2RxWaterStored,
        makersShort: null !== (kb = bb.baf2RxCondensersShort) && void 0 !== kb ? kb : 0,
        waterBeside: 0,
        pct: bb.baf2RxWater
      }
    }

    function NX(bb) {
      const cb = "running" === bb.baf2RxState || "idle" === bb.baf2RxState;
      return bb.baf2RxFormed && bb.baf2RxTarget !== bb.baf2RxThrottle && cb ? VX(bb, bb.baf2RxTarget) : null
    }

    function VX(bb, cb) {
      const [sb, kb, Wb, , , , ab, , Tb] = bb.baf2RxStats, Ub = QX(bb, nc), Ib = CX(bb), Hb = Ib.pct / 100, {
        gen: fb,
        out: Mb,
        load: Xb
      } = function(bb, cb, sb, kb) {
        const Wb = sb ? vU : 1,
          ab = Math.min(bb.fuelHeat * Wb * Math.max(0, Math.min(1, cb)), bb.size * Wb);
        return {
          gen: ab,
          out: ab,
          load: nI(ab, bb.cooling, kb)
        }
      }({
        fuelHeat: sb,
        cooling: kb,
        size: Wb
      }, cb / 100, Ub, Hb), nb = lI(ab || cI(...bb.baf2RxDims)), mb = bb.baf2RxHeat, lb = Math.abs(Xb - mb), Qb = function(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : jb.o;
        const ab = sb ? vU : 1,
          Tb = Math.min(bb.fuelHeat * ab * cb / 100, bb.size * ab),
          Ub = Tb,
          Ib = bb.fuelHeat * ab,
          Hb = bb.cooling * XI(kb.pct / 100),
          fb = Ib > 0 && Hb < bb.size * ab ? Math.floor(100 * Hb / Ib) : 100,
          Mb = Tb * Wb - kb.inPerS;
        return {
          out: Ub,
          hotAbove: fb >= 100 ? null : Math.max(0, fb),
          waterSecs: kb.pct >= 100 && Mb > 1e-6 ? Math.max(0, kb.stored) / Mb : null
        }
      }({
        fuelHeat: sb,
        cooling: kb,
        size: Wb
      }, cb, Ub, {
        pct: Ib.pct,
        inPerS: Ib.inPerS,
        stored: Ib.stored
      }, eX(Ib.Nn));
      return {
        pct: cb,
        out: Mb,
        coolPerS: fb * eX(Ib.Nn),
        pelletsPerMin: Tb > 0 ? Mb / Tb * 60 : 0,
        settle: Xb,
        settleS: lb > 2 ? nb * Math.log(lb / 2) : 0,
        overheatS: Xb > 100 && mb < 100 ? nb * Math.log((Xb - mb) / (Xb - 100)) : null,
        hotAbove: Qb.hotAbove,
        coolantSecs: Qb.waterSecs
      }
    }

    function LX(bb) {
      return bb.baf2RxThrottle <= 0 && "running" !== bb.baf2RxState ? 0 : VX(bb, bb.baf2RxTarget).pelletsPerMin / 60
    }

    function uX(bb, cb) {
      if (bb <= 0 || cb <= 0) return 0;
      const sb = bb / cb;
      return sb < .25 ? 1 : sb < .5 ? 2 : sb < .8 ? 3 : 4
    }

    function YX(bb, cb) {
      const sb = {};
      for (const [kb, Wb] of Object.entries(cb.params)) sb[kb] = "time" === kb ? Ya(bb, Wb) : "amount" === kb ? DI(Wb) : String(Math.round(Wb));
      return bb(cb.key, sb)
    }

    function hX(bb, cb) {
      return {
        key: `${mX}${bb}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: cb
      }
    }

    function JX(bb) {
      var cb;
      const sb = QX(bb, nc),
        kb = "running" === bb.baf2RxState,
        Wb = NI(bb),
        ab = bb.baf2RxHeat;
      var Tb;
      if (kb && ab > SU) return {
        key: null !== (Tb = Wb.fix) && void 0 !== Tb ? Tb : `${mX}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const Ub = kb ? VX(bb, bb.baf2RxTarget).coolantSecs : null,
        Ib = "cryo" === CX(bb).Nn;
      if (null !== Ub && Ub >= 1 && Ub <= 30) return hX(Ib ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Hb = pU(cI(...bb.baf2RxDims)).waste,
        fb = kb ? JI(bb, Hb, LX(bb)).fullInS : null;
      if (null !== fb && fb <= 120 && bb.baf2RxWaste >= .5 * Hb) return hX("rxWarnWaste", "warn");
      if (null !== Ub && Ub >= 1) return hX(Ib ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: Ub
      });
      const Mb = "noWater" === bb.baf2RxState && ab > SU;
      if (bb.baf2RxDamage >= 1 && !Mb) return hX("rxDamagedHeals", "warn", {
        pct: bb.baf2RxDamage
      });
      if (bb.baf2RxCryoCut) return hX("rxFix_cryoCut", "warn");
      const Xb = CX(bb);
      if ("noWater" === bb.baf2RxState && "cryo" === Xb.Nn) return hX("noWater" === bb.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const nb = Wb.fix === `${mX}rxFix_scramCool` || "idle" === bb.baf2RxState && bb.baf2RxTarget <= 0;
      if (nb && bb.baf2RxFuel <= 0) return hX("rxFix_noFuel", "warn");
      if (nb && bb.baf2RxWaterIn <= 0 && (null !== (cb = bb.baf2RxCryoIn) && void 0 !== cb ? cb : 0) <= 0) return hX("rxFix_noWater", "warn");
      const mb = Wb.fix === `${mX}rxFix_scramCool` ? LI(bb) : null;
      if (null !== mb) return {
        key: mb.key,
        params: {
          amount: mb.amount
        },
        tone: "info"
      };
      if ("running" !== bb.baf2RxState && "idle" !== bb.baf2RxState && null !== Wb.fix) return {
        key: Wb.fix,
        params: {},
        tone: "scram" === bb.baf2RxState ? "info" : Mb ? "bad" : "warn"
      };
      var lb;
      if ("idle" === bb.baf2RxState && bb.baf2RxTarget <= 0) return {
        key: null !== (lb = Wb.fix) && void 0 !== lb ? lb : `${mX}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const Qb = bb.baf2RxCryoStarved;
      if ("cryo" === Xb.Nn && Qb && Xb.needPerS > 0 && Xb.usePerS < lX * Xb.needPerS) return hX("noWater" === Qb ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const eb = "cryo" === Xb.Nn,
        Cb = Xb.needPerS > 0 && Xb.usePerS < lX * Xb.needPerS;
      if (eb ? Cb || Xb.makersShort > 0 && Xb.pct < 100 : Xb.pct < 100) {
        const cb = eb && Cb ? Math.floor(100 * Xb.usePerS / Xb.needPerS) : Math.min(100, Xb.pct);
        if (Xb.makersShort > 0) {
          return hX(`${eb?"rxCryoShortLine":"rxWaterShortLine"}${1===Xb.makersShort?"One":""}${!eb&&bb.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: cb,
            count: Xb.makersShort
          })
        }
        return hX(eb ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: cb
        })
      }
      const Nb = function(bb) {
        const [cb, sb, kb] = bb.baf2RxStats, Wb = CX(bb), ab = mI({
          fuelHeat: cb,
          cooling: sb,
          size: kb
        }, "cryo" === Wb.Nn ? jb.h : 1, !0);
        return Math.max(0, ab * eX(Wb.Nn) - Wb.inPerS)
      }(bb);
      if (sb && Nb > 0) return hX("cryo" === Xb.Nn ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Nb)
      });
      if (ab >= fI) return hX("rxHotLine", "warn");
      const Vb = VX(bb, bb.baf2RxTarget);
      var Lb;
      if (null !== Vb.overheatS) return hX("rxWillOverheat", "bad", {
        pct: bb.baf2RxTarget,
        time: Vb.overheatS,
        safe: null !== (Lb = Vb.hotAbove) && void 0 !== Lb ? Lb : 100
      });
      if (Math.abs(Vb.settle - ab) >= 3) return hX("rxSettling", "info", {
        pct: bb.baf2RxTarget,
        heat: Math.round(Vb.settle),
        time: Vb.settleS
      });
      const ub = LI(bb);
      if (null !== ub) return {
        key: ub.key,
        params: {
          amount: ub.amount
        },
        tone: "info"
      };
      const Yb = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== cb && ("running" !== cb || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === bb.rods ? `${QI}rxLimitNoRods` : `${QI}rxLimit_${HI(bb)}`
      }({
        rods: bb.baf2RxStats[3],
        ...VI(bb)
      }, bb.baf2RxState, bb.baf2RxOut >= lX * bb.baf2RxMaxNow, !1);
      if (Yb === `${mX}rxLimit_size`) {
        const [cb, , sb, kb] = bb.baf2RxStats, Wb = kb > 0 && cb > 0 ? Math.ceil(sb / (cb / kb) - 1e-9) : kb, ab = bb.baf2RxDims.every((bb => bb >= qs("reactor").max));
        if (Wb < kb) return hX(ab ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Wb,
          have: kb
        });
        if (ab) return hX("rxLimit_sizeMax", "info")
      }
      return null !== Yb ? {
        key: Yb,
        params: {},
        tone: "info"
      } : hX("rxSteady", "ok", {
        pct: bb.baf2RxTarget
      })
    }

    function gX(bb) {
      var cb;
      if (bb.melted) return hX("rxMeltedBody", "bad");
      if (-1 === bb.bad) return hX("rxFix_noRoom", "warn");
      if (bb.bad > 0) return hX(1 === bb.bad ? "rxBadOne" : "rxBad", "warn", {
        count: bb.bad
      });
      if (bb.left > 0) {
        const cb = 1 === bb.left ? "One" : "";
        return hX(bb.canFill ? `rxPlanLeft${cb}` : `rxPlanLeftNoFill${cb}`, "info", {
          count: bb.left
        })
      }
      if (0 === bb.rods) return hX("rxLimitNoRods", "warn");
      const sb = null !== (cb = bb.idle) && void 0 !== cb ? cb : 0;
      return sb > 0 ? hX(1 === sb ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: sb
      }) : hX("rxPlanReady", "ok")
    }

    function BX(bb) {
      return Math.floor(Math.max(0, bb[1] - 1) / 2)
    }

    function tX(bb) {
      if (bb >= WI && bb < aI) {
        const cb = bb - WI;
        return {
          key: 0 === cb ? `${mX}rxWhy_rodAlone` : 1 === cb ? `${mX}rxWhy_rodOne` : `${mX}rxWhy_rod`,
          params: {
            count: String(cb),
            heat: String(ZU * (1 + zU * cb))
          }
        }
      }
      return bb === aI ? {
        key: `${mX}rxWhy_channel`,
        params: {
          amount: String(dU)
        }
      } : bb === TI ? {
        key: `${mX}rxWhy_deadChannel`,
        params: {}
      } : bb === UI ? {
        key: `${mX}rxWhy_graphite`,
        params: {}
      } : {
        key: `${mX}rxWhy_core`,
        params: {}
      }
    }
    const yX = "buildAFactory2Game:";

    function PX(bb, cb) {
      return 0 !== (bb.baf2RxFlags & cb)
    }

    function DX(bb) {
      let {
        status: cb,
        pending: sb,
        store: kb,
        explain: Wb
      } = bb;
      const {
        t: ab
      } = (0, yW.E)(), Tb = PX(cb, Xc), Ub = cb.baf2RxTarget, Ib = cb.baf2RxThrottle, Hb = function(bb) {
        return {
          press: () => {
            bb.throttlePress()
          },
          drag: cb => {
            bb.throttleDrag(cb)
          },
          release: () => {
            bb.throttleRelease()
          }
        }
      }(kb), fb = null === (Mb = VX(cb, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Mb - 10),
        red: Mb
      };
      var Mb;
      return (0, Ba.jsxs)("div", {
        className: JW()("Baf2RxThrottle", {
          Off: Tb
        }),
        onClick: () => {
          Tb && Wb(`${yX}rxWhy_startFirst`)
        },
        children: [(0, Ba.jsx)("span", {
          className: "HideNarrow",
          children: ab(`${yX}rxThrottle`)
        }), (0, Ba.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Ba.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: Ub,
            disabled: Tb,
            style: Tb ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": ab(`${yX}rxThrottle`),
            onPointerDown: () => {
              Hb.press();
              const bb = () => {
                window.removeEventListener("pointerup", bb), window.removeEventListener("pointercancel", bb), Hb.release()
              };
              window.addEventListener("pointerup", bb), window.addEventListener("pointercancel", bb)
            },
            onKeyUp: Hb.release,
            onChange: bb => {
              Hb.drag(Number(bb.target.value))
            }
          }), (0, Ba.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${fb.amber}%, #ffb020 ${fb.amber}% ${fb.red}%, #ff3b30 ${fb.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Ba.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Ib}% + ${8*(1-Ib/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Ba.jsxs)("b", {
          children: [`${Ub}%`, (0, Ba.jsx)("i", {
            className: JW()("Baf2RxPendingDot", {
              On: sb
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function EX(bb) {
      let {
        status: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)(), kb = VX(cb, cb.baf2RxTarget), Wb = CX(cb).Nn, ab = sb("cryo" === Wb ? `${yX}rxRateCryo` : `${yX}rxRateWater`, {
        rate: MX(kb.coolPerS)
      }), Tb = sb(`${yX}rxChain`, {
        pct: String(cb.baf2RxTarget),
        out: DI(kb.out),
        heat: String(Math.round(kb.settle)),
        coolant: ab
      }), Ub = null !== kb.coolantSecs ? kb.coolantSecs >= 1 ? sb("cryo" === Wb ? `${yX}rxThrottleCryoOut` : `${yX}rxThrottleWaterOut`, {
        time: Ya(sb, kb.coolantSecs)
      }) : sb("cryo" === Wb ? `${yX}rxThrottleCryoDry` : `${yX}rxThrottleWaterDry`) : null;
      return (0, Ba.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Tb, null !== Ub ? (0, Ba.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", Ub]
        }) : (0, Ba.jsxs)("span", {
          children: [" \xb7 ", sb(`${yX}rxChainPellets`, {
            amount: EI(kb.pelletsPerMin)
          })]
        })]
      })
    }

    function iX(bb) {
      let {
        view: cb,
        store: sb,
        explain: Wb,
        explainOnce: ab
      } = bb;
      const {
        t: Tb
      } = (0, yW.E)(), {
        status: Ub
      } = cb, [Ib, Hb] = (0, kb.useState)(!1), fb = PX(Ub, Xc), Xb = PX(Ub, nc), nb = !PX(Ub, Qc), mb = Ub.baf2RxHeat > 100;
      return (0, Ba.jsxs)(Ba.Fragment, {
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Ba.jsx)(DX, {
            status: Ub,
            pending: cb.throttlePending,
            store: sb,
            explain: Wb
          }), (0, Ba.jsx)(nX, {
            on: Xb,
            label: Xb ? Tb(`${yX}rxOdLeft`, {
              time: Ya(Tb, Ub.baf2RxOdLeft)
            }) : Tb(`${yX}rxOverdrive`),
            locked: nb,
            pending: 0 !== (cb.pendingFlags & nc),
            toggle: () => {
              nb ? Wb(`${yX}rxOverdriveTier`, {
                amount: String(Mb(13))
              }) : Xb ? sb.setFlag(nc, !1) : cb.odConfirmed ? sb.setFlag(nc, !0) : Hb(!0)
            }
          }), fb || cb.startGuard ? (0, Ba.jsx)(hT.p, {
            disabled: cb.busy.has("start") || cb.startGuard,
            onClick: () => {
              sb.tap("start", (() => {
                sb.setFlag(Xc, !1)
              }))
            },
            children: Tb(cb.startGuard ? `${yX}rxStarting` : `${yX}rxStart`)
          }) : (0, Ba.jsx)("span", {
            className: JW()("Baf2RxScram", {
              Pulse: mb
            }),
            children: (0, Ba.jsx)(hT.G, {
              onClick: () => {
                sb.shutDown()
              },
              children: Tb(`${yX}rxScram`)
            })
          })]
        }), (0, Ba.jsx)(EX, {
          status: Ub
        }), Ib && (0, Ba.jsx)(UX, {
          id: "baf2RxOdTitle",
          title: `${yX}rxOdConfirmTitle`,
          body: `${yX}rxOdConfirmBody`,
          yes: `${yX}rxOdConfirm`,
          cancel: () => {
            Hb(!1)
          },
          confirm: () => {
            Hb(!1), sb.tap("odConfirm", (() => {
              sb.confirmOverdrive(), sb.setFlag(nc, !0)
            })), ab(`${yX}rxWhy_overdrive`)
          }
        })]
      })
    }

    function OX(bb) {
      let {
        view: cb,
        store: sb,
        keepSize: kb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)(), {
        status: ab
      } = cb;
      return (0, Ba.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Ba.jsx)(XX, {
          kind: "reactor",
          dims: cb.dims,
          cap: ab.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: bb => {
            sb.resize(bb)
          }
        }), kb ? (0, Ba.jsx)(hT.h, {
          onClick: kb,
          children: Wb(`${yX}rxKeepSize`)
        }) : (0, Ba.jsxs)(Ba.Fragment, {
          children: [(0, Ba.jsx)(nX, {
            on: cb.guide,
            label: Wb(`${yX}rxGuide`),
            toggle: () => {
              sb.toggleGuide()
            }
          }), PX(ab, Cc) && (0, Ba.jsx)(nX, {
            on: cb.starter,
            label: Wb(`${yX}rxStarter`),
            toggle: () => {
              sb.toggleStarter()
            }
          }), (0, Ba.jsx)(kX, {
            status: ab,
            store: sb,
            busy: cb.busy.has("fill")
          })]
        })]
      })
    }

    function GX(bb) {
      let {
        need: cb,
        kind: sb = "reactor",
        explain: kb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)(), ab = cb.length <= 3, Tb = cb.reduce(((bb, cb) => {
        let [, sb] = cb;
        return bb + sb
      }), 0);
      return (0, Ba.jsxs)("div", {
        className: JW()("Baf2RxParts", {
          Compact: !ab
        }),
        onClick: () => {
          kb("battery" === sb ? `${yX}batWhy_store` : `${yX}rxShellHint`)
        },
        children: [Tb > 0 && (0, Ba.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Tb ? Wb(`${yX}rxBlocksOne`) : Wb(`${yX}rxBlocks`, {
            blocks: String(Tb)
          })
        }), 0 === cb.length ? (0, Ba.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Wb("battery" === sb ? `${yX}batPartsDone` : `${yX}rxShellDone`)
        }) : YI(cb).map((bb => {
          let [cb, sb, kb] = bb;
          const Tb = function(bb) {
            const cb = tI[bb];
            if (void 0 === cb) return null;
            const [sb, kb, Wb] = gI[cb].colour.map((bb => Math.round(255 * bb)));
            return `rgb(${sb}, ${kb}, ${Wb})`
          }(cb);
          return (0, Ba.jsxs)("span", {
            className: "Baf2RxChip",
            title: Ta(Wb, cb),
            children: [(0, Ba.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Tb ? {
                visibility: "hidden"
              } : {
                background: Tb
              },
              title: Wb(`${yX}rxShopGhost`)
            }), (0, Ba.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Ba.jsx)(DW.d, {
                itemName: cb,
                amount: 0
              })
            }), (0, Ba.jsx)("span", {
              className: "Baf2RxChipName",
              children: ab ? `${sb} ${Ub=Ta(Wb,cb),Ub.replace(/^(Reactor|Battery) (?=\S)/,"")}` : sb
            }), kb >= sb ? (0, Ba.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Ba.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: ab ? Wb(`${yX}rxShopShort`, {
                count: String(sb - kb)
              }) : "\u2212" + (sb - kb)
            })]
          }, cb);
          var Ub
        }))]
      })
    }
    const KX = "buildAFactory2Game:";

    function ZX(bb) {
      var cb, sb, Wb, ab, Tb, Ub, Ib;
      let {
        store: Hb,
        close: fb
      } = bb;
      const {
        t: Mb
      } = (0, yW.E)(), Xb = wT(), nb = IX(Hb), {
        explained: mb,
        explain: lb
      } = xM("baf2RxExplained"), Qb = (0, kb.useCallback)(((bb, cb) => {
        lb(Mb(bb, cb))
      }), [lb, Mb]), eb = null === nb || void 0 === nb ? void 0 : nb.status, Cb = !0 === (null === eb || void 0 === eb ? void 0 : eb.baf2BatReadOnly), Nb = bb => {
        eb && Xb.send(Mc(eb.baf2BatAt, bb))
      }, [Vb, Lb, ub] = null !== (cb = null === nb || void 0 === nb ? void 0 : nb.dims) && void 0 !== cb ? cb : [0, 0, 0], Yb = DI(null !== (sb = null === nb || void 0 === nb ? void 0 : nb.GM) && void 0 !== sb ? sb : 0), hb = !0 === (null === eb || void 0 === eb ? void 0 : eb.baf2BatFormed), Jb = null !== (Wb = null === eb || void 0 === eb ? void 0 : eb.baf2BatStored) && void 0 !== Wb ? Wb : 0, gb = Math.max(1, null !== (ab = null === eb || void 0 === eb ? void 0 : eb.baf2BatIslandCap) && void 0 !== ab ? ab : 1), Bb = Math.min(100, 100 * Jb / gb), tb = null === eb || void 0 === eb ? void 0 : eb.baf2BatNetPerS, yb = function(bb, cb, sb) {
        return sb > 0 && cb >= sb ? "full" : void 0 !== bb && bb >= .05 ? "charging" : void 0 !== bb && bb <= -.05 && cb > 0 ? "draining" : "steady"
      }(tb, Jb, null !== (Tb = null === eb || void 0 === eb ? void 0 : eb.baf2BatIslandCap) && void 0 !== Tb ? Tb : 0), Pb = null !== (Ub = null === eb || void 0 === eb ? void 0 : eb.baf2BatMadePerS) && void 0 !== Ub ? Ub : 0, Db = null !== (Ib = null === eb || void 0 === eb ? void 0 : eb.baf2BatUsedPerS) && void 0 !== Ib ? Ib : 0;
      let Eb, ib = {},
        Ob = "info";
      if (eb)
        if (hb) "charging" === yb ? (Eb = `${KX}batLine_charging`, ib = {
          time: Ya(Mb, (gb - Jb) / Math.max(.05, null !== tb && void 0 !== tb ? tb : 0))
        }, Ob = "ok") : "draining" === yb ? (Eb = `${KX}batLine_draining`, ib = {
          time: Ya(Mb, Jb / Math.max(.05, -(null !== tb && void 0 !== tb ? tb : 0)))
        }, Ob = "warn") : Eb = "full" === yb ? `${KX}batLine_full` : Jb <= 0 && Db > 0 ? `${KX}batLine_empty` : `${KX}batLine_steady`;
        else {
          var Gb;
          const bb = gX({
            left: eb.baf2BatNeed.reduce(((bb, cb) => {
              let [, sb] = cb;
              return bb + sb
            }), 0),
            bad: eb.baf2BatBad,
            rods: 1,
            canFill: !0 === eb.baf2BatCanFill,
            melted: !1
          });
          Eb = bb.key, ib = {
            count: String(null !== (Gb = bb.params.count) && void 0 !== Gb ? Gb : 0)
          }, Ob = bb.tone
        }
      else Eb = `${KX}batLine_steady`;
      const Kb = Math.max(Pb, Db, 1);
      return (0, Ba.jsx)(YT.c, {
        close: fb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Ba.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Ba.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Ba.jsx)(DW.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Ba.jsxs)("div", {
                children: [(0, Ba.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Mb(`${KX}batTitle`)
                }), eb && (0, Ba.jsxs)("p", {
                  className: JW()("Baf2RxSubtitle", {
                    good: hb && "charging" === yb,
                    warn: hb && "draining" === yb
                  }),
                  children: [Vb, "\xd7", Lb, "\xd7", ub, " \xb7 ", Mb(hb ? `${KX}batState_${yb}` : `${KX}rxSubPlanShort`)]
                })]
              })]
            }), (0, Ba.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [eb && !Cb && (0, Ba.jsx)(HX, {
                kind: "battery",
                cap: hb ? Yb : void 0,
                busy: null === nb || void 0 === nb ? void 0 : nb.busy.has("apart"),
                apart: () => {
                  Hb.tap("apart", (() => {
                    Nb("apart")
                  }))
                }
              }), (0, Ba.jsx)(hT.j, {
                onClick: fb
              })]
            })]
          }), nb && eb && (0, Ba.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Ba.jsxs)("div", {
              className: JW()("Baf2RxFlow Baf2BatFlow", {
                Plan: !hb
              }),
              children: [(0, Ba.jsx)(RM, {
                kind: "Power",
                label: Mb(`${KX}batMade`),
                number: hb ? `\u26a1 ${DI(Pb)}/s` : "\u2014",
                note: Mb(`${KX}batMadeNote`),
                share: hb ? Pb / Kb : void 0,
                onExplain: () => {
                  Qb(`${KX}batWhy_made`)
                }
              }), (0, Ba.jsx)(vM, {
                kind: "Power",
                step: hb ? uX(Pb, Kb) : 0,
                planned: !hb
              }), (0, Ba.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  Qb(`${KX}batWhy_store`)
                },
                children: [(0, Ba.jsx)(FM, {
                  max: 100,
                  bands: [{
                    upTo: hb ? Bb : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Ba.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Ba.jsx)("b", {
                    className: "Baf2BatStored",
                    children: hb ? Mb(`${KX}batStoredOf`, {
                      amount: DI(Jb),
                      cap: DI(eb.baf2BatIslandCap)
                    }) : Mb(`${KX}batWillHold`, {
                      cap: Yb
                    })
                  }), (0, Ba.jsx)("span", {
                    children: Mb(`${KX}batAdds`, {
                      cap: Yb
                    })
                  }), hb && (0, Ba.jsx)("small", {
                    children: Mb(`${KX}batBreakNote`, {
                      cap: Yb
                    })
                  })]
                })]
              }), (0, Ba.jsx)(vM, {
                kind: "Power",
                step: hb ? uX(Db, Kb) : 0,
                planned: !hb
              }), (0, Ba.jsx)(RM, {
                kind: "Power",
                label: Mb(`${KX}batUsed`),
                number: hb ? `\u26a1 ${DI(Db)}/s` : "\u2014",
                note: Mb(`${KX}batUsedNote`),
                share: hb ? Db / Kb : void 0,
                onExplain: () => {
                  Qb(`${KX}batWhy_used`)
                }
              })]
            }), (0, Ba.jsx)(jM, {
              text: Mb(Eb, ib),
              tone: Ob,
              explained: mb
            }), Cb ? (0, Ba.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Mb(`${KX}rxNotYours`)
            }) : !hb && (0, Ba.jsxs)(Ba.Fragment, {
              children: [(0, Ba.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Ba.jsx)(XX, {
                  kind: "battery",
                  dims: nb.dims,
                  cap: eb.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: bb => {
                    Hb.resize(bb)
                  }
                }), (0, Ba.jsx)(nX, {
                  on: nb.guide,
                  label: Mb(`${KX}rxGuide`),
                  toggle: () => {
                    Hb.toggleGuide()
                  }
                }), eb.baf2BatCanFill && (0, Ba.jsx)(hT.n, {
                  disabled: !hI("battery", eb.baf2BatNeed) || nb.busy.has("fill"),
                  onClick: () => {
                    Hb.tap("fill", (() => {
                      Nb("fill")
                    }))
                  },
                  children: Mb(`${KX}rxFill`)
                })]
              }), (0, Ba.jsx)(GX, {
                need: eb.baf2BatNeed,
                kind: "battery",
                explain: Qb
              })]
            })]
          })]
        })
      })
    }
    const zX = "buildAFactory2Game:",
      qX = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function dX(bb, cb) {
      return bb === kI ? null : cb ? "#4a4440" : bb < aI ? qX[bb - WI] : bb === aI ? "#3fd0f0" : bb === TI ? "#2c3e4c" : "#55585e"
    }

    function AX(bb) {
      let {
        inner: cb,
        looks: sb,
        layer: kb,
        setLayer: Wb,
        glow: ab,
        melted: Tb,
        explain: Ub
      } = bb;
      const {
        t: Ib
      } = (0, yW.E)(), [Hb, fb, Mb] = cb, Xb = Math.max(0, Math.min(fb - 1, kb)), nb = [];
      for (let lb = 0; lb < Mb; lb++)
        for (let bb = 0; bb < Hb; bb++) {
          var mb;
          const cb = null !== (mb = sb[(Xb * Mb + lb) * Hb + bb]) && void 0 !== mb ? mb : kI,
            kb = dX(cb, Tb),
            Wb = cb >= WI && cb < aI;
          nb.push(null === kb ? (0, Ba.jsx)("circle", {
            cx: bb + .5,
            cy: lb + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${bb},${lb}`) : (0, Ba.jsx)("rect", {
            x: bb + .06,
            y: lb + .06,
            width: .88,
            height: .88,
            fill: kb,
            opacity: Wb && !Tb ? .5 + .5 * ab : 1,
            onClick: bb => {
              bb.stopPropagation();
              const sb = tX(cb);
              Ub(sb.key, sb.params)
            }
          }, `${bb},${lb}`))
        }
      return (0, Ba.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Ba.jsx)("svg", {
          className: JW()("Baf2RxMapGrid", {
            Melted: Tb
          }),
          viewBox: `0 0 ${Math.max(1,Hb)} ${Math.max(1,Mb)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Ib(`${zX}rxWhy_core`),
          onClick: () => {
            Ub(`${zX}rxWhy_core`, {})
          },
          children: nb
        }), fb > 1 && (0, Ba.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Ba.jsx)("button", {
            type: "button",
            "aria-label": Ib(`${zX}rxLayerDown`),
            disabled: Xb <= 0,
            onClick: () => {
              Wb(Xb - 1)
            },
            children: "\u25bc"
          }), (0, Ba.jsxs)("span", {
            children: [(0, Ba.jsx)("span", {
              className: "HideNarrow",
              children: Ib(`${zX}rxLayer`, {
                n: String(Xb + 1),
                of: String(fb)
              })
            }), (0, Ba.jsx)("span", {
              className: "ShowNarrow",
              children: Ib(`${zX}rxLayerShort`, {
                n: String(Xb + 1),
                of: String(fb)
              })
            })]
          }), (0, Ba.jsx)("button", {
            type: "button",
            "aria-label": Ib(`${zX}rxLayerUp`),
            disabled: Xb >= fb - 1,
            onClick: () => {
              Wb(Xb + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const wX = "buildAFactory2Game:",
      rX = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: RU,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: CI,
        kind: "red"
      }],
      oX = [50, RU, 100];

    function SX(bb) {
      let {
        stats: cb,
        t: sb,
        explain: kb
      } = bb;
      const Wb = HI(cb),
        ab = Math.max(1, cb.fuelHeat, cb.cooling, cb.size),
        Tb = [
          ["fuel", `${wX}rxBarRods`, cb.fuelHeat],
          ["cooling", `${wX}rxBarCooling`, cb.cooling],
          ["size", `${wX}rxBarSize`, cb.size]
        ];
      return (0, Ba.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          kb(`${wX}rxWhy_bars`)
        },
        children: [(0, Ba.jsx)("span", {
          className: "Baf2RxMostLine",
          children: sb(`${wX}rxMost`, {
            amount: DI(Math.min(cb.fuelHeat, cb.cooling, cb.size))
          })
        }), (0, Ba.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Tb.map((bb => {
            let [cb, kb, Tb] = bb;
            return (0, Ba.jsxs)("span", {
              className: JW()("Baf2RxMostBar", cb, {
                Low: cb === Wb
              }),
              children: [(0, Ba.jsx)("small", {
                children: sb(kb)
              }), (0, Ba.jsx)("i", {
                children: (0, Ba.jsx)("b", {
                  style: {
                    width: 100 * Tb / ab + "%"
                  }
                })
              })]
            }, cb)
          }))
        })]
      })
    }

    function RX(bb) {
      var cb;
      let {
        view: sb,
        heat: Wb,
        settle: ab,
        settleLine: Tb,
        settleBad: Ub,
        explain: Ib
      } = bb;
      const {
        t: Hb
      } = (0, yW.E)(), {
        status: fb
      } = sb, Mb = fb.baf2RxAt.join(","), [Xb, nb] = (0, kb.useState)((() => BX(sb.inner)));
      (0, kb.useEffect)((() => {
        nb(BX(sb.inner))
      }), [Mb, sb.inner[1]]);
      const mb = null !== (cb = sb.plan) && void 0 !== cb ? cb : VI(fb),
        lb = sb.plan ? sb.plan.powerPerUnit : fb.baf2RxStats[8],
        Qb = null === Wb ? null : "alarm" === (eb = eI(fb)) ? "red" : "hot" === eb ? "hot" : "warm" === eb ? "warm" : "cold";
      var eb;
      const Cb = !fb.baf2RxFormed && function(bb, cb) {
          return 0 !== (bb.baf2RxFlags & cb)
        }(fb, mc),
        Nb = fb.baf2RxDamage,
        Vb = fb.baf2RxDamageTrend;
      return (0, Ba.jsxs)("div", {
        className: JW()("Baf2RxCore", null !== Qb && void 0 !== Qb ? Qb : "plan"),
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Ba.jsx)(AX, {
            inner: sb.inner,
            looks: sb.looks,
            layer: Xb,
            setLayer: nb,
            glow: fb.baf2RxFormed ? fb.baf2RxThrottle / 100 : 1,
            melted: Cb,
            explain: Ib
          }), (0, Ba.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Ib(`${wX}rxWhy_heat`)
            },
            children: [null !== Wb ? (0, Ba.jsxs)(Ba.Fragment, {
              children: [(0, Ba.jsx)("b", {
                children: Hb(`${wX}rxHeatPct`, {
                  pct: String(Wb)
                })
              }), (0, Ba.jsx)("span", {
                className: JW()("Baf2RxBand", Qb),
                children: Hb(`${wX}rxBand_${Qb}`)
              })]
            }) : (0, Ba.jsx)("b", {
              children: Hb(`${wX}rxHeat`)
            }), null !== Tb && (0, Ba.jsx)("span", {
              className: JW()("Baf2RxSettle", {
                Bad: Ub
              }),
              children: Tb
            }), Nb >= 1 && (0, Ba.jsxs)("span", {
              className: JW()("Baf2RxDamage", Vb),
              children: [Hb(`${wX}rxDamageLine`, {
                pct: String(Nb)
              }), " \xb7 ", Hb(`${wX}rxDamage_${Vb}`), (0, Ba.jsx)("i", {
                children: (0, Ba.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Nb)}%`
                  }
                })
              })]
            })]
          }), (0, Ba.jsx)(FM, {
            max: CI,
            bands: rX,
            ticks: oX,
            now: Wb,
            settle: ab,
            settleTone: Ub ? "bad" : null,
            onExplain: () => {
              Ib(`${wX}rxWhy_heat`)
            }
          })]
        }), (0, Ba.jsx)(SX, {
          stats: mb,
          t: Hb,
          explain: Ib
        }), lb > 0 && (0, Ba.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Ib(`${wX}rxWhy_perPellet`)
          },
          children: Hb(`${wX}rxPerPellet`, {
            amount: DI(lb)
          })
        })]
      })
    }

    function vX(bb, cb) {
      var sb;
      if (!bb.baf2RxStore) return {
        note: cb(`${wX}rxUpTo`, {
          amount: DI(bb.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [kb, Wb] = bb.baf2RxStore, ab = Wb > 0 ? kb / Wb : 0, Tb = String(Math.floor(100 * ab)), Ub = null !== (sb = bb.baf2RxStoreNetPerS) && void 0 !== sb ? sb : 0, Ib = function(bb) {
        var cb, sb;
        const [kb, Wb] = null !== (cb = bb.baf2RxStore) && void 0 !== cb ? cb : [0, 0], ab = null !== (sb = bb.baf2RxStoreNetPerS) && void 0 !== sb ? sb : 0;
        return Wb > 0 && kb >= Wb - 1 ? "running" === bb.baf2RxState ? `${mX}rxStoreFull` : `${mX}rxStoreFullOnly` : ab > .05 ? `${mX}rxStoreLine` : ab < -.05 ? "running" === bb.baf2RxState ? `${mX}rxStoreUsesMore` : `${mX}rxStoreDraining` : `${mX}rxStorePct`
      }(bb);
      return {
        note: cb(Ib, Ib === `${wX}rxStoreLine` ? {
          pct: Tb,
          time: Ya(cb, (Wb - kb) / Ub)
        } : {
          pct: Tb
        }),
        share: ab
      }
    }

    function FX(bb) {
      let {
        view: cb,
        explain: sb,
        preview: kb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)(), {
        status: ab
      } = cb, Tb = pU(cI(...cb.dims)), Ub = LX(ab), Ib = Math.min(Math.round(ab.baf2RxFuel), Tb.fuel), Hb = "running" === ab.baf2RxState, fb = Hb ? uX(ab.baf2RxOut, ab.baf2RxMaxNow) : 0, Mb = function(bb, cb, sb) {
        const kb = CX(bb),
          Wb = "cryo" === kb.Nn,
          ab = sb ? sb.coolantSecs : kb.pct >= 100 && bb.baf2RxOut >= 1 ? VX(bb, bb.baf2RxThrottle).coolantSecs : null;
        let Tb, Ub = !1;
        if (kb.pct < 100) {
          const sb = 1 === kb.makersShort,
            ab = !Wb && bb.baf2RxCryoOpen ? "OrCryo" : "";
          Tb = kb.makersShort > 0 ? cb(Wb ? `${wX}rxCryoAddMixer${sb?"":"s"}` : `${wX}rxWaterAddCondenser${sb?"":"s"}${ab}`, {
            count: String(kb.makersShort)
          }) : cb(`${wX}rxWaterNeeds`, {
            rate: MX(kb.needPerS)
          })
        } else if (null !== ab) Tb = cb(`${wX}rxWaterRunsOut`, {
          time: Ya(cb, ab)
        });
        else if (kb.waterBeside > 0) Tb = cb(`${wX}rxCryoPlusWater`, {
          rate: MX(kb.waterBeside)
        });
        else {
          const bb = function(bb) {
            return bb.inPerS <= 0 ? "rxWaterNoSupply" : bb.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(kb);
          Ub = "rxWaterNoSupply" === bb, Tb = cb(`${wX}${bb}`, {
            amount: DI(kb.stored)
          })
        }
        return {
          kind: Wb ? "Cryo" : "Water",
          label: cb(Wb ? `${wX}rxCryo` : `${wX}rxWater`),
          number: `${MX(kb.usePerS)}/s`,
          preview: sb ? `${MX(sb.coolPerS)}/s` : null,
          note: Tb,
          tone: "noWater" === bb.baf2RxState ? "danger" : Ub ? "warn" : (Ib = kb.pct, Hb = ab, Ib < 100 ? "danger" : null === Hb ? null : Hb < 300 ? "danger" : "warn"),
          share: kb.pct / 100,
          why: Wb ? `${wX}rxWhy_cryo` : `${wX}rxWhy_water`,
          short: kb.pct < 100
        };
        var Ib, Hb
      }(ab, Wb, kb), Xb = JI(ab, Tb.waste, Ub), nb = vX(ab, Wb), mb = VX(ab, ab.baf2RxTarget), lb = Hb && Math.abs(mb.settle - ab.baf2RxHeat) >= 3, Qb = kb ? kb.pelletsPerMin / 60 : null;
      return (0, Ba.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ba.jsx)(RM, {
            kind: "Fuel",
            label: Wb(`${wX}rxFuel`),
            number: String(Ib),
            preview: null !== Qb && Qb > 0 && ab.baf2RxFuel > 0 ? Ya(Wb, ab.baf2RxFuel / Qb) : null,
            note: ab.baf2RxFuel <= 0 ? Wb(`${wX}rxFuelEmpty`) : Ub > 0 ? Wb(`${wX}rxFuelLeft`, {
              time: Ya(Wb, ab.baf2RxFuel / Ub)
            }) : Wb(1 === Ib ? `${wX}rxFuelPellet` : `${wX}rxFuelPellets`),
            tone: "noFuel" === ab.baf2RxState ? "danger" : ab.baf2RxFuel < 2 ? "warn" : null,
            share: ab.baf2RxFuel / Tb.fuel,
            onExplain: () => {
              sb(`${wX}rxWhy_fuel`)
            }
          }), (0, Ba.jsx)(RM, {
            kind: Mb.kind,
            label: Mb.label,
            number: Mb.number,
            preview: Mb.preview,
            note: Mb.note,
            tone: Mb.tone,
            share: Mb.share,
            onExplain: () => {
              sb(Mb.why)
            }
          })]
        }), (0, Ba.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ba.jsx)(vM, {
            kind: "Fuel",
            step: fb,
            short: "noFuel" === ab.baf2RxState
          }), (0, Ba.jsx)(vM, {
            kind: Mb.kind,
            step: fb,
            short: Mb.short || "noWater" === ab.baf2RxState
          })]
        }), (0, Ba.jsx)(RX, {
          view: cb,
          heat: ab.baf2RxHeat,
          settle: Math.min(CI, mb.settle),
          settleLine: lb ? Wb(`${wX}rxHeatSettles`, {
            pct: String(Math.round(mb.settle)),
            time: Ya(Wb, mb.settleS)
          }) : null,
          settleBad: mb.settle > 100,
          explain: sb
        }), (0, Ba.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ba.jsx)(vM, {
            kind: "Power",
            step: fb
          }), (0, Ba.jsx)(vM, {
            kind: "Waste",
            step: Hb && ab.baf2RxFuel - ab.baf2RxPu > 0 ? fb : 0,
            short: Xb.full
          })]
        }), (0, Ba.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ba.jsx)(RM, {
            kind: "Power",
            label: Wb(`${wX}rxPowerOut`),
            number: `\u26a1 ${DI(ab.baf2RxOut)}/s`,
            preview: kb ? DI(kb.out) : null,
            note: nb.note,
            share: nb.share,
            onExplain: () => {
              sb(`${wX}rxWhy_power`)
            }
          }), (0, Ba.jsx)(RM, {
            kind: "Waste",
            label: Wb(`${wX}rxWaste`),
            number: `${Math.floor(ab.baf2RxWaste)}/${Tb.waste}`,
            note: Xb.full ? Wb(`${wX}rxWasteFull`) : null !== Xb.fullInS ? Wb(`${wX}rxWasteFullIn`, {
              time: Ya(Wb, Xb.fullInS)
            }) : Wb(`${wX}rxWasteSpent`),
            tone: "wasteFull" === ab.baf2RxState ? "danger" : Xb.full ? "warn" : null,
            share: ab.baf2RxWaste / Tb.waste,
            onExplain: () => {
              sb(`${wX}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function xX(bb) {
      let {
        view: cb,
        explain: sb
      } = bb;
      const {
        t: kb
      } = (0, yW.E)(), Wb = cb.plan;
      if (!Wb) return null;
      const ab = Wb.fuelHeat <= 0 ? null : Wb.cooling > 0 ? Math.min(CI, 100 * Wb.fuelHeat / Wb.cooling) : CI,
        Tb = kb(`${wX}rxPlanAtFull`);
      return (0, Ba.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Ba.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ba.jsx)(RM, {
            kind: "Fuel",
            label: kb(`${wX}rxFuel`),
            number: kb(`${wX}rxPlanPerMin`, {
              amount: EI(Wb.pelletsPerMin)
            }),
            note: kb(`${wX}rxPlanPellets`),
            onExplain: () => {
              sb(`${wX}rxWhy_fuel`)
            }
          }), (0, Ba.jsx)(RM, {
            kind: "Water",
            label: kb(`${wX}rxWater`),
            number: `${MX(Wb.waterPerS)}/s`,
            note: cb.status.baf2RxCryoOpen && Wb.waterPerS > 0 ? kb(`${wX}rxPlanOrCryo`, {
              rate: MX(mI(Wb, jb.h) * jb.l)
            }) : Tb,
            onExplain: () => {
              sb(`${wX}rxWhy_water`)
            }
          })]
        }), (0, Ba.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ba.jsx)(vM, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Ba.jsx)(vM, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Ba.jsx)(RX, {
          view: cb,
          heat: null,
          settle: ab,
          settleLine: null === ab ? null : kb(`${wX}rxPlanHeat`, {
            pct: String(Math.round(ab))
          }),
          settleBad: null !== ab && ab > 100,
          explain: sb
        }), (0, Ba.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ba.jsx)(vM, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Ba.jsx)(vM, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Ba.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ba.jsx)(RM, {
            kind: "Power",
            label: kb(`${wX}rxPowerOut`),
            number: `\u26a1 ${DI(Wb.max)}/s`,
            note: Tb,
            onExplain: () => {
              sb(`${wX}rxWhy_power`)
            }
          }), (0, Ba.jsx)(RM, {
            kind: "Waste",
            label: kb(`${wX}rxWaste`),
            number: kb(`${wX}rxPlanPerMin`, {
              amount: EI(Wb.pelletsPerMin)
            }),
            note: kb(`${wX}rxWasteSpent`),
            onExplain: () => {
              sb(`${wX}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const jX = "buildAFactory2Game:",
      pX = {
        key: `${jX}rxWaiting`,
        params: {},
        tone: "info"
      };

    function bn(bb, cb) {
      return 0 !== (bb.baf2RxFlags & cb)
    }

    function cn(bb) {
      var cb, sb;
      let {
        store: Wb,
        close: ab
      } = bb;
      const {
        t: Tb
      } = (0, yW.E)(), Ub = IX(Wb), {
        explained: Ib,
        hinting: Hb,
        explain: fb,
        explainOnce: Mb
      } = xM("baf2RxExplained"), Xb = (0, kb.useCallback)(((bb, cb) => {
        fb(Tb(bb, cb))
      }), [fb, Tb]), nb = (0, kb.useCallback)(((bb, cb) => {
        Mb(bb, Tb(bb, cb))
      }), [Mb, Tb]), [mb, lb] = (0, kb.useState)(!1), [Qb, eb] = (0, kb.useState)(!1), Cb = null === Ub || void 0 === Ub ? void 0 : Ub.status, Nb = null === Cb || void 0 === Cb ? void 0 : Cb.baf2RxAt.join(","), Vb = !0 === (null === Cb || void 0 === Cb ? void 0 : Cb.baf2RxFormed);
      (0, kb.useEffect)((() => {
        eb(!1), lb(!1)
      }), [Nb, Vb]), (0, kb.useEffect)((() => (Wb.opened(), () => {
        Wb.closed()
      })), [Wb]);
      const Lb = void 0 !== Cb && bn(Cb, ec),
        ub = Cb ? Vb ? eI(Cb) : null !== Ub && void 0 !== Ub && Ub.plan ? function(bb, cb) {
          if (bb <= 0) return "off";
          if (cb <= 0) return "alarm";
          const sb = 100 * bb / cb;
          return sb < 50 ? "calm" : sb < fI ? "warm" : sb <= 100 ? "hot" : "alarm"
        }(Ub.plan.fuelHeat, Ub.plan.cooling) : "off" : "off",
        Yb = Cb ? NI(Cb) : null,
        hb = Ub ? Ub.waiting ? pX : Vb ? JX(Ub.status) : function(bb) {
          var cb, sb;
          const {
            status: kb
          } = bb;
          return gX({
            left: kb.baf2RxNeed.reduce(((bb, cb) => {
              let [, sb] = cb;
              return bb + sb
            }), 0),
            bad: kb.baf2RxBad,
            rods: null !== (cb = null === (sb = bb.plan) || void 0 === sb ? void 0 : sb.rods) && void 0 !== cb ? cb : 0,
            canFill: bn(kb, lc),
            melted: bn(kb, mc),
            idle: bb.looks.reduce(((bb, cb) => bb + (cb === TI ? 1 : 0)), 0)
          })
        }(Ub) : null,
        Jb = Hb && null !== hb && ("ok" === hb.tone || "info" === hb.tone),
        gb = Cb ? function(bb) {
          const cb = 0 !== (bb.baf2RxFlags & Xc),
            sb = bb.baf2RxHeat < FU;
          return 0 !== (bb.baf2RxFlags & mc) || sb && (cb || !bb.baf2RxFormed) ? null : bb.baf2RxFormed && !cb ? {
            key: `${QI}rxApartScram`,
            params: {}
          } : {
            key: `${QI}rxApartCooling`,
            params: {
              pct: String(FU)
            }
          }
        }(Cb) : null,
        [Bb, tb, yb] = null !== (cb = null === Ub || void 0 === Ub ? void 0 : Ub.dims) && void 0 !== cb ? cb : [0, 0, 0],
        Pb = `${Bb}\xd7${tb}\xd7${yb}`;
      return (0, Ba.jsx)(YT.c, {
        close: ab,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Ba.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Ba.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ba.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Ba.jsx)(fX, {
                mood: ub
              }), (0, Ba.jsxs)("div", {
                children: [(0, Ba.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Tb(`${jX}rxTitle`)
                }), Ub && (0, Ba.jsxs)("p", {
                  className: JW()("Baf2RxSubtitle", Vb && (null === Yb || void 0 === Yb ? void 0 : Yb.tone)),
                  children: [Vb && !Lb ? (0, Ba.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Tb(`${jX}rxChangeSize`),
                    onClick: () => {
                      if (!Cb) return;
                      const bb = bn(Cb, Xc);
                      var cb;
                      (cb = {
                        scram: bb,
                        heat: Cb.baf2RxHeat
                      }).scram && cb.heat < FU ? lb(!0) : Xb(bb ? `${jX}rxResizeCooling` : `${jX}rxResizeHot`, {
                        pct: String(FU)
                      })
                    },
                    children: [Pb, " \u270e"]
                  }) : Pb, " \xb7 ", Tb(Vb ? null !== (sb = null === Yb || void 0 === Yb ? void 0 : Yb.label) && void 0 !== sb ? sb : `${jX}rxState_running` : `${jX}rxSubPlanShort`)]
                })]
              })]
            }), (0, Ba.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Ub && !Lb && (0, Ba.jsx)(HX, {
                kind: "reactor",
                busy: Ub.busy.has("apart"),
                whyNot: gb ? () => {
                  Xb(gb.key, gb.params)
                } : null,
                apart: () => {
                  Wb.tap("apart", (() => {
                    Wb.send("apart")
                  }))
                }
              }), (0, Ba.jsx)(hT.j, {
                onClick: ab
              })]
            })]
          }), Ub && hb && (0, Ba.jsxs)("div", {
            className: "Baf2RxBody",
            children: [Vb ? (0, Ba.jsx)(FX, {
              view: Ub,
              explain: Xb,
              preview: NX(Ub.status)
            }) : (0, Ba.jsx)(xX, {
              view: Ub,
              explain: Xb
            }), (0, Ba.jsx)(jM, {
              text: Jb ? `${YX(Tb,hb)} ${Tb(`${jX}rxTapHint`)}` : YX(Tb, hb),
              tone: hb.tone,
              explained: Ib
            }), Lb ? (0, Ba.jsxs)(Ba.Fragment, {
              children: [(0, Ba.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Tb(`${jX}rxNotYours`)
              }), (0, Ba.jsx)(WX, {
                status: Ub.status,
                store: Wb,
                readOnly: !0
              })]
            }) : Vb && !Qb ? (0, Ba.jsxs)(Ba.Fragment, {
              children: [(0, Ba.jsx)(iX, {
                view: Ub,
                store: Wb,
                explain: Xb,
                explainOnce: nb
              }), void 0 !== Ub.status.baf2RxLayout && cX(Ub.status) && (0, Ba.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Ba.jsx)(WX, {
                  status: Ub.status,
                  store: Wb,
                  readOnly: !1,
                  bare: !0
                }), (0, Ba.jsx)(kX, {
                  status: Ub.status,
                  store: Wb,
                  busy: Ub.busy.has("fill")
                })]
              })]
            }) : (0, Ba.jsxs)(Ba.Fragment, {
              children: [(0, Ba.jsx)(OX, {
                view: Ub,
                store: Wb,
                keepSize: Vb ? () => {
                  eb(!1)
                } : void 0
              }), uI(Ub.dims, Ub.status.baf2RxDims) && (0, Ba.jsx)(GX, {
                need: Ub.status.baf2RxNeed,
                explain: Xb
              }), (0, Ba.jsx)(WX, {
                status: Ub.status,
                store: Wb,
                readOnly: !1
              })]
            }), mb && (0, Ba.jsx)(UX, {
              id: "baf2ResizeTitle",
              title: `${jX}rxResizeConfirmTitle`,
              body: `${jX}rxResizeConfirmBody`,
              yes: `${jX}rxChangeSize`,
              cancel: () => {
                lb(!1)
              },
              confirm: () => {
                lb(!1), eb(!0)
              }
            })]
          })]
        })
      })
    }
    class sn {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(bb) {
        this.view = bb;
        for (const cb of this.listeners) cb()
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

    function kn(bb) {
      let {
        commands: cb,
        store: sb,
        power: Wb,
        water: ab,
        reactor: Tb,
        battery: Ub,
        collider: Ib,
        terminal: Hb,
        quests: fb,
        close: Mb,
        leave: Xb,
        askIslands: nb,
        showCore: mb,
        openSocial: lb
      } = bb;
      const {
        userContext: Qb
      } = (0, GU.c)(), eb = OU.featureFlags.useSocialFeatures && Qb.isLoggedIn(), [Cb, Nb] = (0, kb.useState)((() => sb.get()));
      (0, kb.useEffect)((() => sb.subscribe((() => {
        Nb(sb.get())
      }))), [sb]);
      const Vb = "islands" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) ? Cb.backToCore : void 0;
      return (0, Ba.jsxs)(AT.Provider, {
        value: cb,
        children: ["core" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(nM, {
          view: Cb.core,
          close: Mb,
          askIslands: nb
        }), "dropMap" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(eM, {
          message: Cb.dropMap,
          quests: fb,
          close: Mb,
          leave: Xb
        }), "islands" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(OM, {
          message: Cb.islands,
          arrivedAtMs: Cb.arrivedAtMs,
          close: Vb ? () => {
            mb(Vb)
          } : Mb,
          leave: Xb,
          openSocial: eb ? lb : null
        }), "quests" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(Pf, {
          store: fb,
          close: Mb
        }), "transfer" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(Wf, {
          message: Cb.transfer,
          arrivedAtMs: Cb.arrivedAtMs,
          close: Mb,
          leave: Xb
        }), "power" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(ET, {
          store: Wb,
          close: Mb
        }), "water" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(eU, {
          store: ab,
          close: Mb
        }), "reactor" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(cn, {
          store: Tb,
          close: Mb
        }), "battery" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(ZX, {
          store: Ub,
          close: Mb
        }), "collider" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(CH, {
          store: Ib,
          close: Mb
        }), "terminal" === (null === Cb || void 0 === Cb ? void 0 : Cb.kind) && (0, Ba.jsx)(SM, {
          store: Hb,
          close: Mb,
          send: bb => {
            cb.send(bb)
          }
        })]
      })
    }
    var Wn = sb(38108);

    function an(bb, cb) {
      return bb.distSq - cb.distSq
    }
    class Tn {
      constructor() {
        this.list = [], this.pool = []
      }
      add(bb, cb, sb, kb) {
        let Wb = this.pool[this.list.length];
        Wb || (Wb = {
          x: 0,
          y: 0,
          distSq: 0,
          element: cb,
          liftRem: sb,
          dot: kb
        }, this.pool.push(Wb)), Wb.x = bb.x, Wb.y = bb.y, Wb.distSq = bb.distSq, Wb.element = cb, Wb.liftRem = sb, Wb.dot = kb, this.list.push(Wb)
      }
    }
    class Un {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = bb, this.sizes = new WeakMap, this.observer = new ResizeObserver((bb => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const cb of bb) {
            const bb = cb.borderBoxSize[0];
            "dot" !== cb.target.dataset.crowded && 0 !== bb.inlineSize && 0 !== bb.blockSize && this.sizes.set(cb.target, {
              width: bb.inlineSize,
              height: bb.blockSize
            })
          }
        })), this.remPx = 16, this.vn = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.pC = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.pC)
      }
      observe(bb) {
        this.observer.observe(bb)
      }
      unobserve(bb) {
        this.observer.unobserve(bb)
      }
      run(bb) {
        const cb = bb.list;
        cb.sort(an);
        const sb = this.pxPerVw,
          kb = this.pxPerVh;
        this.vn.length = 0, this.hud && this.vn.push(...this.hud.boxes(performance.now()));
        for (const ab of cb) {
          var Wb;
          const bb = this.sizes.get(ab.element);
          let cb = "no";
          if (bb && bb.width > 0) {
            const Wb = ab.x * sb,
              Tb = ab.y * kb - ab.liftRem * this.remPx;
            this.fit(Wb, Tb, bb.width, bb.height) || (cb = ab.dot && this.fit(Wb, Tb, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Wb = ab.element.dataset.crowded) && void 0 !== Wb ? Wb : "no") !== cb && ("no" === cb ? delete ab.element.dataset.crowded : ab.element.dataset.crowded = cb), "hidden" !== cb && (0, Wn.e)(ab.element, ab.x, ab.y)
        }
        cb.length = 0
      }
      fit(bb, cb, sb, kb) {
        const Wb = bb - sb / 2,
          ab = bb + sb / 2,
          Tb = cb - kb,
          Ub = this.vn;
        for (let Ib = 0; Ib < Ub.length; Ib += 4)
          if (Wb < Ub[Ib + 1] - 2 && ab > Ub[Ib] + 2 && Tb < Ub[Ib + 3] - 2 && cb > Ub[Ib + 2] + 2) return !1;
        return Ub.push(Wb, ab, Tb, cb), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.pC)
      }
    }
    const In = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class Hn {
      constructor() {
        this.cards = In.map((bb => document.getElementsByClassName(bb))), this.watched = In.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(bb) {
        bb - this.refreshedAt > 1e3 && (this.refreshedAt = bb, this.stale = !0);
        for (let sb = 0; sb < this.cards.length; sb++) {
          var cb;
          const bb = null !== (cb = this.cards[sb][0]) && void 0 !== cb ? cb : null;
          bb !== this.watched[sb] && this.watch(sb, bb)
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
        for (const cb of this.watched) {
          if (!cb || cb.closest(".NoRoom")) continue;
          const sb = cb.getBoundingClientRect();
          let kb = sb.top,
            Wb = sb.bottom;
          if (cb === this.watched[0] && this.hud) {
            const bb = this.hud.getBoundingClientRect();
            kb = Math.max(kb, bb.top), Wb = Math.min(Wb, bb.bottom)
          }
          sb.width > 0 && Wb > kb && bb.push(sb.left, sb.right, kb, Wb)
        }
      }
      watch(bb, cb) {
        const sb = this.watched[bb];
        var kb, Wb;
        (sb && this.sizes.unobserve(sb), this.watched[bb] = cb, this.stale = !0, cb && this.sizes.observe(cb), 0 === bb) && (null === (kb = this.hud) || void 0 === kb || kb.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Wb = null === cb || void 0 === cb ? void 0 : cb.closest(".Baf2QuestHud")) && void 0 !== Wb ? Wb : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const fn = [0, 0, 0],
      Mn = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Xn(bb, cb, sb, kb, Wb, ab) {
      let [Tb, Ub, Ib] = kb;
      const Hb = (Tb + .5 - sb[0]) ** 2 + (Ub - sb[1]) ** 2 + (Ib + .5 - sb[2]) ** 2;
      let fb = null;
      Hb <= ab ** 2 && (fn[0] = Tb + .5, fn[1] = Ub + Wb, fn[2] = Ib + .5, fb = cb.projectWorldPosToViewport(fn));
      const Mb = null !== fb && fb.x > -5 && fb.x < 105 && fb.y > -5 && fb.y < 105;
      return (0, Wn.i)(bb, !Mb), Mb ? (Mn.x = fb.x, Mn.y = fb.y, Mn.distSq = Hb, Mn) : null
    }
    class nn {
      constructor(bb) {
        this.onElement = bb, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(bb) {
        const cb = [];
        for (let sb = 0; sb + 4 < bb.length; sb += 5) {
          const kb = [bb[sb], bb[sb + 1], bb[sb + 2]];
          cb.push({
            key: kb.join(","),
            pos: kb,
            status: TW[bb[sb + 3]],
            kind: Bc[bb[sb + 4]]
          })
        }
        this.markers = cb, this.keys = new Set(cb.map((bb => {
          let {
            key: cb
          } = bb;
          return cb
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
        let cb = this.refs.get(bb);
        return cb || (cb = cb => {
          const sb = this.elements.get(bb);
          var kb, Wb;
          sb && (null === (kb = this.onElement) || void 0 === kb || kb.call(this, sb, !1));
          cb ? (this.elements.set(bb, cb), null === (Wb = this.onElement) || void 0 === Wb || Wb.call(this, cb, !0)) : (this.elements.delete(bb), this.refs.delete(bb))
        }, this.refs.set(bb, cb)), cb
      }
      onAfterRender(bb, cb, sb) {
        for (const kb of this.markers) {
          const Wb = this.elements.get(kb.key);
          if (!Wb) continue;
          const ab = Xn(Wb, bb, cb, kb.pos, 1.05, 24);
          ab && sb.add(ab, Wb, .45, !0)
        }
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
    }
    const mn = {
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
    const Qn = (0, kb.memo)((function(bb) {
        let {
          status: cb,
          kind: sb,
          bindRef: kb
        } = bb;
        const {
          t: Wb
        } = (0, yW.E)(), ab = function(bb, cb) {
          var sb;
          if ("noFuel" === bb) {
            var kb, Wb;
            const bb = null === (kb = ic[cb]) || void 0 === kb || null === (Wb = kb.fuels) || void 0 === Wb ? void 0 : Wb.find((bb => ks.includes(bb)));
            return null !== bb && void 0 !== bb ? bb : mn.noFuel
          }
          return void 0 !== (null === (sb = ic[cb]) || void 0 === sb ? void 0 : sb.cryoMade) ? "noOutlet" === bb ? "Fluid Pipe" : "noInput" === bb ? "Biomass" : mn[bb] : mn[bb]
        }(cb, sb);
        return (0, Ba.jsxs)("div", {
          className: JW()("Baf2StallMarker", cb),
          ref: kb,
          hidden: !0,
          children: [ab && (0, Ba.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Ba.jsx)(DW.d, {
              itemName: ab,
              amount: 0
            })
          }), (0, Ba.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === cb ? "?" : "!"
          }), (0, Ba.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Wb(`buildAFactory2Game:stallTag_${cb}`)
          })]
        })
      })),
      en = (0, kb.memo)((function(bb) {
        let {
          controller: cb
        } = bb;
        const [sb, Wb] = (0, kb.useState)((() => cb.get()));
        return (0, kb.useEffect)((() => (Wb(cb.get()), cb.subscribe((() => {
          Wb(cb.get())
        })))), [cb]), (0, Ba.jsx)("div", {
          className: "Baf2StallMarkers",
          children: sb.map((bb => (0, Ba.jsx)(Qn, {
            status: bb.status,
            kind: bb.kind,
            bindRef: cb.bind(bb.key)
          }, bb.key)))
        })
      })),
      Cn = ls.i + 150;
    class Nn {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(bb, cb) {
        const sb = cb - bb;
        null === this.offset || sb < this.offset ? this.offset = sb : this.offset = Math.min(sb, this.offset + .02 * (cb - this.sampledAt)), this.sampledAt = cb
      }
      toLocal(bb) {
        var cb;
        return bb + (null !== (cb = this.offset) && void 0 !== cb ? cb : 0) + Cn
      }
    }
    var Vn = sb(38113);
    const Ln = 15 * Math.PI / 180,
      un = Math.SQRT2,
      Yn = [4, 2];

    function hn(bb, cb) {
      const sb = [1 / 0, 1 / 0, 1 / 0],
        kb = [-1 / 0, -1 / 0, -1 / 0];
      for (const Ib of bb)
        for (let bb = 0; bb < 3; bb++) sb[bb] = Math.min(sb[bb], Ib[bb]), kb[bb] = Math.max(kb[bb], Ib[bb]);
      const Wb = (sb[0] + kb[0]) / 2,
        ab = (sb[1] + kb[1]) / 2,
        Tb = (sb[2] + kb[2]) / 2;
      let Ub = 0;
      for (const Ib of bb) Ub = Math.max(Ub, Math.hypot(Ib[0] - Wb, Ib[1] - ab, Ib[2] - Tb));
      return {
        x: Wb,
        y: ab,
        z: Tb,
        r: Ub + cb
      }
    }

    function Jn(bb, cb, sb) {
      const kb = cb.x - bb.x,
        Wb = cb.y - bb.y,
        ab = cb.z - bb.z,
        Tb = Math.sqrt(kb * kb + Wb * Wb + ab * ab);
      if (Tb <= cb.r + 8) return 1;
      const Ub = cb.r / Tb,
        Ib = Math.sqrt(1 - Ub * Ub),
        Hb = Ib < -bb.cosHalf,
        fb = (kb * bb.dx + Wb * bb.dy + ab * bb.dz) / Tb;
      if (!Hb && fb < bb.cosHalf * Ib - bb.sinHalf * Ub) return 0;
      const Mb = sb * un * bb.frameMs * bb.pxPerBlock / (Tb - cb.r);
      for (let Xb = 0; Xb < Yn.length; Xb++)
        if (Mb * Yn[Xb] <= 1) return Yn[Xb];
      return 1
    }

    function gn(bb, cb) {
      return {
        name: bb,
        at: cb,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Bn = [0, 0, 0];

    function tn(bb, cb, sb) {
      let [, kb, Wb, ab, Tb, Ub] = cb;
      const Ib = ls.d * (null !== Tb && void 0 !== Tb ? Tb : 1),
        Hb = [];
      for (let nb = 0; nb < kb.length; nb += 3) Hb.push([kb[nb] + .5, kb[nb + 1] + .65, kb[nb + 2] + .5]);
      const fb = [];
      for (let nb = 0; nb < Hb.length - 1; nb++) {
        const [bb, cb] = [Hb[nb], Hb[nb + 1]];
        fb.push([(bb[0] + cb[0]) / 2, (bb[1] + cb[1]) / 2, (bb[2] + cb[2]) / 2])
      }
      const Mb = Hb.slice(1, -1),
        Xb = new Uint8Array(Mb.length);
      for (const nb of null !== Ub && void 0 !== Ub ? Ub : []) Xb[nb >> 1] |= 1 & nb ? 2 : 1;
      return {
        island: bb,
        length: Mb.length,
        loop: ab,
        cellsPerMs: Ib,
        edges: fb,
        ml: Mb,
        bounds: hn([...fb, ...Mb], .3),
        changed: !0,
        culled: !1,
        hide: Xb,
        items: Wb.map((bb => {
          let [cb, kb] = bb;
          return gn(cb, (0, ls.x)(cb, kb, sb, Ib).at)
        }))
      }
    }

    function yn(bb, cb) {
      const {
        items: sb
      } = bb;
      if (0 === sb.length) return;
      const kb = bb.length / bb.cellsPerMs,
        Wb = Math.floor((cb - sb[0].at) / kb) - 1;
      if (Wb > 0)
        for (const ab of sb) ab.at += Wb * kb
    }

    function Pn(bb, cb) {
      const sb = Math.min(Math.floor(cb), bb.length - 1),
        kb = bb.hide[sb];
      return 0 !== kb && 0 !== (kb & (cb - sb < .5 ? 1 : 2))
    }

    function Dn(bb, cb) {
      const sb = Math.min(Math.floor(cb), bb.length - 1),
        kb = cb - sb,
        Wb = kb < .5,
        ab = Wb ? bb.edges[sb] : bb.ml[sb],
        Tb = Wb ? bb.ml[sb] : bb.edges[sb + 1],
        Ub = Wb ? 2 * kb : 2 * kb - 1;
      Bn[0] = ab[0] + (Tb[0] - ab[0]) * Ub, Bn[1] = ab[1] + (Tb[1] - ab[1]) * Ub, Bn[2] = ab[2] + (Tb[2] - ab[2]) * Ub
    }
    const En = Math.PI / 4;
    class On {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Nn, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.pC = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(bb) {
        const cb = performance.now();
        this.clock.sample(bb.baf2BeltLinesAt, cb), this.queue(bb.baf2BeltLinesAt, bb, 0, null, null, 0), this.applyDue(cb)
      }
      onMoves(bb) {
        const cb = performance.now(),
          sb = bb.baf2BeltMovesAt;
        this.clock.sample(sb, cb);
        for (const [kb, Wb, ab, Tb] of bb.baf2BeltMoveList) null === Wb ? this.queue(sb - ab, null, kb, null, null, null !== Tb && void 0 !== Tb ? Tb : 0) : this.queue(sb - ab, null, kb, Wb, null !== Tb && void 0 !== Tb ? Tb : null, 0);
        this.applyDue(cb)
      }
      start(bb) {
        this.pool = new Vn.e(bb, {
          scale: .3,
          yaw: En
        }, 64), this.pC(), window.addEventListener("resize", this.pC)
      }
      onAfterRender(bb) {
        const {
          pool: cb
        } = this;
        if (!cb) return;
        const sb = performance.now(),
          kb = sb - this.lastRenderAt;
        this.lastRenderAt = sb, kb < 100 && (this.frameMs += .1 * (kb - this.frameMs));
        const Wb = sb + this.frameMs;
        this.applyDue(Wb);
        const ab = bb.cameraPosition,
          Tb = cb.follow(ab);
        this.setView(bb, ab);
        const Ub = this.frame++;
        for (let Ib = 0; Ib < this.shown.length; Ib++) {
          const bb = this.shown[Ib],
            sb = Jn(this.view, bb.bounds, bb.cellsPerMs),
            kb = bb.culled && 0 !== sb;
          if (bb.culled = 0 === sb, !Tb && !bb.changed && !kb && (0 === sb || (Ub + Ib) % sb !== 0)) continue;
          bb.changed = !1, bb.loop && (yn(bb, Wb), (0, ls.s)(bb.items, bb.length, Wb, bb.cellsPerMs));
          let ab = bb.length;
          for (let Ub = 0; Ub < bb.items.length; Ub++) {
            const sb = bb.items[Ub],
              kb = (0, ls.B)(sb.at, ab, Wb, bb.cellsPerMs);
            if (ab = kb - ls.l, Pn(bb, kb)) {
              null === sb.kind || sb.hidden || (sb.kind.hide(sb.slot), sb.hidden = !0);
              continue
            }
            let Ib = sb.kind;
            if (null === Ib) {
              if (Ib = cb.kindOf(sb.name), null === Ib) continue;
              sb.kind = Ib, sb.slot = Ib.take(), sb.hidden = !0, sb.drawn = NaN
            } else if (kb === sb.drawn && !sb.hidden && !Tb) continue;
            Dn(bb, kb), Ib.write(sb.slot, Bn[0], Bn[1], Bn[2]), sb.hidden = !1, sb.drawn = kb
          }
        }
        cb.commit()
      }
      dispose() {
        var bb;
        window.removeEventListener("resize", this.pC), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (bb = this.pool) || void 0 === bb || bb.dispose(), this.pool = null
      }
      setView(bb, cb) {
        const {
          cameraDir: sb,
          lastDir: kb
        } = this, Wb = bb.cameraDirection;
        for (let fb = 0; fb < 3; fb++) kb[fb] = sb[fb], sb[fb] = Wb[fb];
        const ab = sb[0] * kb[0] + sb[1] * kb[1] + sb[2] * kb[2],
          Tb = Number.isNaN(ab) ? 0 : Math.acos(Math.min(1, Math.max(-1, ab))),
          {
            width: Ub,
            height: Ib
          } = this,
          Hb = bb.tanHalfFovX;
        ! function(bb, cb, sb, kb, Wb, ab, Tb) {
          let Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          bb.x = cb[0], bb.y = cb[1], bb.z = cb[2], bb.dx = sb[0], bb.dy = sb[1], bb.dz = sb[2];
          const Ib = Math.min(Math.PI, Math.atan(Math.sqrt(kb * kb + Wb * Wb)) + Ln + Ub);
          bb.cosHalf = Math.cos(Ib), bb.sinHalf = Math.sin(Ib), bb.pxPerBlock = ab / (2 * Wb), bb.frameMs = Tb
        }(this.view, cb, sb, Hb, Hb * Ib / Ub, Ib * window.devicePixelRatio, this.frameMs, Tb)
      }
      queue(bb, cb, sb, kb, Wb, ab) {
        const Tb = Math.max(this.clock.toLocal(bb), this.lastPendingAt);
        this.lastPendingAt = Tb, this.pending.push({
          at: Tb,
          lines: cb,
          line: sb,
          name: kb,
          pos: Wb,
          idx: ab
        })
      }
      applyDue(bb) {
        const {
          pending: cb
        } = this;
        for (; this.pendingHead < cb.length && cb[this.pendingHead].at <= bb;) {
          const bb = cb[this.pendingHead++];
          if (bb.lines) this.applyLines(bb.lines, bb.at), bb.lines = null;
          else {
            const cb = this.lines.get(bb.line);
            cb && this.applyMove(cb, bb, bb.at)
          }
        }
        this.pendingHead === cb.length ? (cb.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > cb.length && (cb.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(bb, cb) {
        this.clearIsland(bb.baf2BeltIsland);
        for (const sb of bb.baf2BeltLineList) this.lines.set(sb[0], tn(bb.baf2BeltIsland, sb, cb));
        this.shown = [...this.lines.values()]
      }
      applyMove(bb, cb, sb) {
        let {
          name: kb,
          pos: Wb,
          idx: ab
        } = cb;
        bb.changed = !0, bb.loop && (yn(bb, sb), (0, ls.s)(bb.items, bb.length, sb, bb.cellsPerMs)), null !== kb && null !== Wb ? (0, ls.u)(bb.items, bb.length, gn(kb, sb), Wb, sb, bb.cellsPerMs) : null !== kb ? bb.items.push(gn(kb, sb)) : bb.items.length > ab && this.release((0, ls.D)(bb.items, bb.length, sb, bb.cellsPerMs, ab))
      }
      clearIsland(bb) {
        for (const [cb, sb] of this.lines)
          if (sb.island === bb) {
            for (const bb of sb.items) this.release(bb);
            this.lines.delete(cb)
          }
      }
      release(bb) {
        null !== bb.kind && (bb.kind.release(bb.slot), bb.kind = null, bb.slot = -1, bb.hidden = !0, bb.drawn = NaN)
      }
    }
    var Gn = sb(36235),
      Kn = sb(38124);

    function Zn(bb) {
      let {
        depth: cb,
        store: sb,
        t: Wb
      } = bb;
      const ab = function(bb) {
        const [cb, sb] = (0, kb.useState)(bb.lastPlayerY());
        return (0, af.f)(zW, sb), (0, kb.useEffect)((() => {
          sb(bb.lastPlayerY())
        }), [bb]), cb
      }(sb);
      if (null === ab) return null;
      const [Tb, Ub] = cb, Ib = ab > Tb ? Tb : null !== Ub && ab < Ub ? Ub : null, Hb = {
        y: ua(ab),
        target: null === Ib ? "" : ua(Ib)
      };
      return (0, Ba.jsx)("span", {
        className: JW()("Baf2QuestDepth", {
          Reached: null === Ib
        }),
        children: Wb(`${Hf}${null===Ib?"questDepthReached":"questDepth"}`, Hb)
      })
    }

    function zn(bb) {
      let {
        also: cb,
        view: sb,
        t: kb
      } = bb;
      return (0, Ba.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Ba.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Ba.jsx)("strong", {
            children: kb(`${Hf}questAlsoDownHere`)
          }), (0, Ba.jsx)("span", {
            className: "Baf2QuestChips",
            children: cb.map((bb => {
              let [cb, Wb, ab, Tb] = bb;
              return (0, Ba.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": kb(`${Hf}questAlsoItem`, {
                  item: Mf(kb, sb.itemNames[cb], cb),
                  have: String(Wb),
                  need: String(ab)
                }),
                children: [(0, Ba.jsx)(mf, {
                  item: cb
                }), (0, Ba.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Wb}/${ab}`
                }), null !== Tb && (0, Ba.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: kb(`${Hf}questAlsoDepth`, {
                    y: ua(Tb)
                  })
                })]
              }, cb)
            }))
          })]
        })]
      })
    }
    var qn = sb(3179);

    function dn(bb) {
      let {
        expanded: cb,
        inventoryOpen: sb,
        children: Wb
      } = bb;
      const ab = (0, kb.useRef)(null);
      return (0, kb.useEffect)((() => {
        const bb = ab.current,
          cb = null === bb || void 0 === bb ? void 0 : bb.closest(".RightElements"),
          kb = null === bb || void 0 === bb ? void 0 : bb.firstElementChild;
        if (!bb || !cb || !kb) return;
        return (0, Kn.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [cb, kb], (() => {
          const Wb = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Wb.length) return;
          const ab = Math.max(...Wb.map((bb => bb.getBoundingClientRect().bottom))),
            Tb = cb.getBoundingClientRect(),
            Ub = sb ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (Ub) {
            const cb = parseFloat(getComputedStyle(kb).marginLeft) + parseFloat(getComputedStyle(kb).marginRight),
              sb = Tb.right - Ub.getBoundingClientRect().right - 8 - cb;
            bb.style.setProperty("--baf2-quest-room", `${sb}px`), bb.classList.toggle("NoRoom", sb < 150)
          } else bb.style.removeProperty("--baf2-quest-room"), bb.classList.remove("NoRoom");
          const Ib = ab - Tb.top + 8,
            Hb = function(bb, cb, sb) {
              const kb = cb.getBoundingClientRect(),
                Wb = bb.getBoundingClientRect(),
                ab = (0, qn.f)(Wb.left, Wb.right, kb.top + sb);
              if (null !== ab && ab < kb.bottom) return ab - kb.top;
              return kb.height - (parseFloat(getComputedStyle(cb).paddingBottom) || 0)
            }(bb, cb, Ib) - 8,
            fb = window.innerHeight / 2 - Tb.top,
            {
              top: Mb,
              maxHeight: Xb
            } = function(bb, cb, sb, kb, Wb) {
              const ab = Math.min(sb, Math.max(0, cb - bb)),
                Tb = Wb ? bb : Math.max(bb, Math.min(kb - ab / 2, cb - ab));
              return {
                top: Tb,
                maxHeight: Math.max(0, cb - Tb)
              }
            }(Ib, Hb, function(bb) {
              const cb = bb.firstElementChild,
                sb = cb ? cb.scrollHeight - cb.clientHeight : 0;
              return bb.getBoundingClientRect().height + Math.max(0, sb)
            }(kb), fb, Ja());
          bb.style.top = `${Mb}px`, bb.style.maxHeight = `${Xb}px`
        }))
      }), [sb]), (0, Ba.jsx)("div", {
        ref: ab,
        className: JW()("Baf2QuestHud", {
          Expanded: cb
        }),
        children: Wb
      })
    }

    function An(bb) {
      let {
        amount: cb,
        t: sb
      } = bb;
      return (0, Ba.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Ba.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Ba.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: sb(`${Hf}questStepsDone`, {
            amount: String(cb)
          })
        })]
      })
    }

    function wn(bb) {
      let {
        pulse: cb
      } = bb;
      return 0 === cb ? null : (0, Ba.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, cb)
    }

    function rn(bb) {
      var cb;
      let {
        store: sb
      } = bb;
      const Wb = (0, af.h)(ZW, sb.get()),
        [ab, Tb] = (0, kb.useState)(!1),
        {
          t: Ub
        } = (0, yW.E)(),
        Ib = function() {
          const [bb, cb] = (0, kb.useState)(Ja);
          return (0, kb.useEffect)((() => (cb(Ja()), ga(cb))), []), bb
        }(),
        {
          openInGameMenuName: Hb,
          openEverythingMenuName: fb
        } = (0, uW.p)(["openInGameMenuName", "openEverythingMenuName"]),
        Mb = "inventory" === Hb && null === fb,
        Xb = null !== Hb && !Mb || null !== fb;
      if (! function(bb) {
          return null !== bb.name || null !== bb.side
        }(Wb) || Xb || "off" === Wb.tutorial) return null;
      const nb = oW(Wb.rows),
        mb = nb.filter((bb => bb.done)).length,
        lb = function(bb, cb) {
          const sb = vW(bb);
          let kb = 0;
          return bb.filter(((bb, Wb) => !!bb.justFinished || !(bb.done || Wb < sb || kb > cb) && (kb++, !0)))
        }(Wb.rows, Ib ? 0 : 2),
        Qb = Ib ? lb : function(bb, cb) {
          const sb = cb.filter((bb => !bb.justFinished));
          if (sb.length < 2) return [...cb];
          const kb = bb.indexOf(sb[0]),
            Wb = bb.indexOf(sb[sb.length - 1]),
            ab = new Set(oW(bb));
          return bb.filter(((bb, sb) => cb.includes(bb) || bb.done && ab.has(bb) && sb > kb && sb < Wb))
        }(Wb.rows, lb),
        eb = ab ? Wb.rows : Qb,
        Cb = ab || Ib ? [] : function(bb, cb) {
          const sb = new Array(cb.length + 1).fill(0),
            kb = new Set(oW(bb));
          let Wb = 0;
          for (const ab of bb) Wb < cb.length && ab === cb[Wb] ? Wb++ : ab.done && kb.has(ab) && sb[Wb]++;
          return sb
        }(Wb.rows, Qb),
        Nb = ab || Qb.length < Wb.rows.length || null !== Wb.reward,
        Vb = rW(Wb),
        Lb = Vb ? Ub(`${Hf}questLineComplete`) : Wb.tier ? ef(Ub, Wb.tier) : Ub(`${Hf}currentQuest`),
        ub = function(bb) {
          var cb, sb;
          if (rW(bb)) return null;
          const kb = null === (cb = bb.chapters) || void 0 === cb ? void 0 : cb.find((cb => {
            let [sb] = cb;
            return sb === bb.tier
          }));
          if (!kb) return null;
          const Wb = kb[1].filter((bb => !bb[4]));
          if (0 === Wb.length) return null;
          const ab = null === (sb = bb.name) || void 0 === sb ? void 0 : sb[0],
            Tb = bb => Wb.findIndex((cb => cb[0] === ab && (!bb || !cb[3]))),
            Ub = Tb(!0),
            Ib = Ub >= 0 ? Ub : Tb(!1);
          if (Ib >= 0) return [Ib + 1, Wb.length];
          const Hb = Wb.filter((bb => bb[3])).length;
          return [Math.min(Hb + 1, Wb.length), Wb.length]
        }(Wb);
      return (0, Ba.jsx)(Gn.e, {
        placement: "topRight",
        children: (0, Ba.jsx)(dn, {
          expanded: ab,
          inventoryOpen: Mb,
          children: (0, Ba.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: ff,
            children: [null !== Wb.name && (0, Ba.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Ba.jsx)(wn, {
                pulse: Wb.pulse
              }), (0, Ba.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Ba.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Lb, ub && (0, Ba.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": Ub(`${Hf}questPlaceLabel`, {
                      n: String(ub[0]),
                      total: String(ub[1])
                    }),
                    children: Ub(`${Hf}questPlace`, {
                      n: String(ub[0]),
                      total: String(ub[1])
                    })
                  }), Wb.tier && Wb.core && !Vb && (0, Ba.jsx)(Cf, {
                    core: Wb.core,
                    t: Ub
                  })]
                })
              }), (0, Ba.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Ub(`${Hf}${Wb.name[0]}`, Xf(Wb.name[1]))
              }), (nb.length > 1 || Nb) && (0, Ba.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [nb.length > 1 && (0, Ba.jsx)(Nf, {
                  rows: nb,
                  t: Ub
                }), Nb && (0, Ba.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": ab,
                  onClick: () => {
                    Tb(!ab)
                  },
                  children: [(0, Ba.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: Ub(`${Hf}questStepsToggle`, {
                      done: String(mb),
                      total: String(nb.length)
                    })
                  }), (0, Ba.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: ab ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Ba.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [eb.map(((bb, cb) => {
                  var ab;
                  const Tb = bb.current && Wb.depth;
                  return (0, Ba.jsxs)(kb.Fragment, {
                    children: [(null !== (ab = Cb[cb]) && void 0 !== ab ? ab : 0) > 0 && (0, Ba.jsx)(An, {
                      amount: Cb[cb],
                      t: Ub
                    }), (0, Ba.jsx)(Vf, {
                      row: bb,
                      view: Wb,
                      t: Ub,
                      extra: Tb && (0, Ba.jsx)(Zn, {
                        depth: Tb,
                        store: sb,
                        t: Ub
                      })
                    })]
                  }, bb.id)
                })), (null !== (cb = Cb[eb.length]) && void 0 !== cb ? cb : 0) > 0 && (0, Ba.jsx)(An, {
                  amount: Cb[eb.length],
                  t: Ub
                }), Wb.also.length > 0 && (0, Ba.jsx)(zn, {
                  also: Wb.also,
                  view: Wb,
                  t: Ub
                })]
              }), ab && Wb.reward && (0, Ba.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [Ub(`${Hf}questReward`), (0, Ba.jsx)(mf, {
                  item: Wb.reward
                }), Mf(Ub, Wb.itemNames[Wb.reward], Wb.reward)]
              })]
            }), Wb.side && (0, Ba.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [AW(Wb, Date.now()) && (0, Ba.jsx)(wn, {
                pulse: Wb.sideCameUpAt
              }), (0, Ba.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: Ub(`${Hf}questSide`)
              }), (0, Ba.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Ub(`${Hf}${Wb.side.name[0]}`, Xf(Wb.side.name[1]))
              }), (0, Ba.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Ba.jsx)(Vf, {
                  row: Wb.side.row,
                  view: Wb,
                  t: Ub
                })
              })]
            })]
          })
        })
      })
    }
    const Sn = "baf2ToastView";
    class Rn {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = bb, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: bb,
          holdMs: cb
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const bb = this.dropCovered();
          bb && this.show(bb.message, bb.holdMs)
        }), 250));
        const sb = this.dropCovered();
        null !== sb && (sb.holdMs > 0 || "baf2ToastCelebrate" === sb.message.baf2ToastStyle) && "baf2ToastCelebrate" !== bb.baf2ToastStyle && this.show(sb.message, sb.holdMs);
        const kb = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== bb.baf2ToastStyle && kb > 0) return this.pending = {
          message: bb,
          holdMs: cb
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const bb = this.pending;
          this.pending = null, bb && this.present(bb.message, bb.holdMs)
        }), kb));
        this.present(bb, cb)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(bb, cb) {
        this.clearTimers(), this.pending = null;
        const sb = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: bb.baf2ToastText,
          style: bb.baf2ToastStyle,
          swapped: sb,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === bb.baf2ToastStyle ? 1500 : cb), this.QQ();
        const kb = Math.min(8e3, Math.max(1e3, bb.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), kb)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.QQ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.QQ()
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
      QQ() {
        GW.j.QQ(Sn, this.view, !0)
      }
    }
    var vn = sb(89);
    const Fn = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function xn(bb) {
      let {
        store: cb
      } = bb;
      const sb = (0, af.h)(Sn, cb.get()),
        {
          openInGameMenuName: kb,
          openEverythingMenuName: Wb
        } = (0, uW.p)(["openInGameMenuName", "openEverythingMenuName"]),
        ab = sb && (0, Ba.jsxs)("div", {
          className: JW()("Baf2Toast", Fn[sb.style], {
            Swapped: sb.swapped,
            Leaving: sb.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === sb.style && (0, Ba.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Ba.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Ba.jsx)(EW.d, {
              text: sb.text
            })
          })]
        }, sb.id);
      return null !== kb && null === Wb ? (0, vn.createPortal)((0, Ba.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: ab
      }), document.body) : (0, Ba.jsx)(Gn.e, {
        children: ab
      })
    }
    const jn = "baf2AreaView";
    class pn {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.qU = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.qU = null
      }
      arrive(bb, cb) {
        cb && function(bb) {
          return "home" === bb.baf2AreaPlace && void 0 !== bb.baf2AreaNameText
        }(bb) ? this.qU = bb : this.show(bb)
      }
      release() {
        const bb = this.qU;
        null !== bb && this.show(bb)
      }
      show(bb) {
        this.clearTimer(), this.qU = null;
        const cb = void 0 === bb.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: bb,
          ms: cb
        }, this.QQ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.QQ()
        }), cb)
      }
      dispose() {
        this.clearTimer(), this.qU = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      QQ() {
        GW.j.QQ(jn, this.view, !0)
      }
    }

    function bm(bb) {
      var cb;
      let {
        store: sb
      } = bb;
      const {
        t: kb
      } = (0, yW.E)(), Wb = (0, af.h)(jn, sb.get());
      if (!Wb) return null;
      const {
        area: ab
      } = Wb, Tb = ab.baf2AreaResetMinutes;
      return (0, Ba.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": ab.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Wb.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Ba.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), ab.baf2AreaHeading && (0, Ba.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: kb(ab.baf2AreaHeading)
        }), (0, Ba.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (cb = ab.baf2AreaNameText) && void 0 !== cb ? cb : kb(ab.baf2AreaName)
        }), ab.baf2AreaNote && (0, Ba.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: kb(ab.baf2AreaNote)
        }), void 0 !== Tb && (0, Ba.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: kb("buildAFactory2Game:areaWildsReset", {
            time: Ya(kb, 60 * Tb)
          })
        })]
      }, Wb.id)
    }
    const cm = "baf2GearGauge";
    class sm {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      mN(bb) {
        var cb;
        if (this.clearLinger(), null === bb.gearPowerKind) return void this.set(null);
        const sb = "jetpack" === bb.gearPowerKind && (kb = bb.gearChargeState, Wb = bb.gearCharge, "flying" === kb || "charging" === kb || "outOfCharge" === kb || "ceiling" === kb || "offPlot" === kb || "noPower" === kb && Wb <= 0);
        var kb, Wb;
        const ab = !0 === (null === (cb = this.view) || void 0 === cb ? void 0 : cb.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Tb = sb || "jetpack" === bb.gearPowerKind && ab;
        this.set({
          gauge: bb,
          jetShown: Tb
        }), Tb && !sb && (this.lingerTimer = setTimeout((() => {
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
        this.view = bb, GW.j.QQ(cm, bb, !0)
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

    function Wm(bb) {
      let {
        store: cb
      } = bb;
      const sb = (0, af.h)(cm, cb.get());
      return sb ? "jetpack" === sb.gauge.gearPowerKind ? (0, Ba.jsx)(am, {
        view: sb
      }) : (0, Ba.jsx)(Tm, {
        gauge: sb.gauge
      }) : null
    }

    function am(bb) {
      let {
        view: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)(), {
        gauge: kb
      } = cb, Wb = kb.gearChargeMax > 0 ? Math.max(0, Math.min(1, kb.gearCharge / kb.gearChargeMax)) : 0, ab = km[kb.gearChargeState], Tb = ab ? sb(ab) : null;
      return (0, Ba.jsxs)("div", {
        className: JW()("Baf2JetArc", {
          Shown: cb.jetShown,
          Low: Wb < .2,
          Warm: Wb >= .2 && Wb < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Wb)
        },
        "aria-hidden": !cb.jetShown,
        children: [(0, Ba.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Ba.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Um,
            pathLength: 100
          }), (0, Ba.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Um,
            pathLength: 100
          })]
        }), (0, Ba.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Wb), "%"]
        }), Tb && (0, Ba.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Tb
        })]
      })
    }

    function Tm(bb) {
      let {
        gauge: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)(), kb = function(bb, cb) {
        switch (cb.gearPowerKind) {
          case "skyPack":
            return bb("buildAFactory2Game:gearSkyPack", {
              charge: cb.gearCharge,
              max: cb.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return bb("buildAFactory2Game:gearIslandDraw", {
              power: xb(cb.gearIslandPower),
              cost: xb(cb.gearCostPerUse)
            });
          case "barrier":
            return bb("buildAFactory2Game:gearBarrier", {
              shield: Math.round(cb.gearCharge),
              max: cb.gearChargeMax,
              power: xb(cb.gearIslandPower)
            });
          default:
            return null
        }
      }(sb, cb);
      return null === kb ? null : (0, Ba.jsx)(Gn.e, {
        children: (0, Ba.jsx)("div", {
          className: JW()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === cb.gearChargeState || "outOfCharge" === cb.gearChargeState
          }),
          role: "status",
          children: kb
        })
      })
    }
    const Um = (() => {
      const bb = bb => {
        const cb = bb * Math.PI / 180;
        return `${(40*Math.cos(cb)).toFixed(2)} ${(40*Math.sin(cb)).toFixed(2)}`
      };
      return `M ${bb(160)} A 40 40 0 1 1 ${bb(380)}`
    })();
    class Im {
      constructor(bb) {
        this.onElement = bb, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      mN(bb) {
        let cb = bb.baf2LabelsReset || bb.baf2LabelsIsland !== this.island;
        cb && (this.labels.clear(), this.island = bb.baf2LabelsIsland);
        for (const [sb, kb, Wb, ab, Tb] of bb.baf2LabelsList) {
          const bb = `${sb},${kb},${Wb}`,
            Ub = this.labels.get(bb);
          null === ab ? cb = this.labels.delete(bb) || cb : Ub && Ub.item === ab && (Ub.count === Tb || Ub.count >= 0 && Tb >= 0) ? Ub.count !== Tb && (Ub.count = Tb, this.writeCount(bb, Tb)) : (this.labels.set(bb, {
            key: bb,
            pos: [sb, kb, Wb],
            item: ab,
            count: Tb
          }), this.writeCount(bb, Tb), cb = !0)
        }
        if (this.changes++, cb) {
          this.snapshot = [...this.labels.values()];
          for (const bb of this.listeners) bb()
        }
      }
      bindCount(bb) {
        const cb = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${bb}`;
        let sb = this.countRefs.get(cb);
        return sb || (sb = sb => {
          var kb, Wb;
          sb ? (this.countElements.set(cb, sb), this.writeCount(bb, null !== (kb = null === (Wb = this.labels.get(bb)) || void 0 === Wb ? void 0 : Wb.count) && void 0 !== kb ? kb : -1)) : (this.countElements.delete(cb), this.countRefs.delete(cb))
        }, this.countRefs.set(cb, sb)), sb
      }
      setCountWords(bb) {
        this.countWords = bb;
        for (const [cb, sb] of this.labels) this.writePart(`words|${cb}`, bb(sb.count), sb.count)
      }
      writeCount(bb, cb) {
        this.writePart(`bare|${bb}`, La(cb), cb), this.countElements.has(`words|${bb}`) && this.writePart(`words|${bb}`, this.countWords(cb), cb)
      }
      writePart(bb, cb, sb) {
        const kb = this.countElements.get(bb);
        if (!kb || sb < 0) return;
        const Wb = kb.firstChild;
        Wb && 3 === Wb.nodeType && !Wb.nextSibling ? Wb.nodeValue !== cb && (Wb.nodeValue = cb) : kb.textContent !== cb && (kb.textContent = cb)
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
        let cb = this.refs.get(bb);
        return cb || (cb = cb => {
          const sb = this.elements.get(bb);
          var kb, Wb;
          sb && (null === (kb = this.onElement) || void 0 === kb || kb.call(this, sb, !1));
          cb ? (this.elements.set(bb, cb), null === (Wb = this.onElement) || void 0 === Wb || Wb.call(this, cb, !0)) : (this.elements.delete(bb), this.refs.delete(bb))
        }, this.refs.set(bb, cb)), cb
      }
      onAfterRender(bb, cb, sb, kb) {
        for (const Wb of this.snapshot) {
          const ab = this.elements.get(Wb.key);
          if (!ab) continue;
          if (kb(Wb.key)) {
            (0, Wn.i)(ab, !0);
            continue
          }
          const Tb = Xn(ab, bb, cb, Wb.pos, 1.1, 24);
          Tb && sb.add(Tb, ab, 0, !1)
        }
      }
    }
    const Hm = (0, kb.memo)((function(bb) {
        let {
          item: cb
        } = bb;
        return (0, Ba.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Ba.jsx)(DW.d, {
            itemName: cb,
            amount: 0
          })
        })
      })),
      fm = (0, kb.memo)((function(bb) {
        let {
          label: cb,
          bindRef: sb,
          countRef: kb,
          wordsRef: Wb
        } = bb;
        return (0, Ba.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: sb,
          hidden: !0,
          children: [(0, Ba.jsx)(Hm, {
            item: cb.item
          }), cb.count >= 0 && (0, Ba.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Ba.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Wb
            }), (0, Ba.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: kb
            })]
          })]
        })
      })),
      Mm = (0, kb.memo)((function(bb) {
        let {
          store: cb
        } = bb;
        const {
          t: sb
        } = (0, yW.E)(), [Wb, ab] = (0, kb.useState)((() => cb.list()));
        return (0, kb.useEffect)((() => (ab(cb.list()), cb.subscribe((() => {
          ab(cb.list())
        })))), [cb]), (0, kb.useEffect)((() => {
          cb.setCountWords((bb => sb("buildAFactory2Game:labelSiloCount", {
            count: La(bb)
          })))
        }), [cb, sb]), (0, Ba.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Wb.map((bb => -2 === bb.count ? null : (0, Ba.jsx)(fm, {
            label: bb,
            bindRef: cb.bind(bb.key),
            countRef: cb.bindCount(bb.key),
            wordsRef: cb.bindCount(bb.key, "words")
          }, bb.key)))
        })
      })),
      Xm = {
        read: () => !0,
        write: () => {}
      };

    function nm(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }

    function mm(bb) {
      let [cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb] = bb;
      const nb = void 0 === Mb || void 0 === Xb ? function(bb) {
        return [Math.floor((bb - 1) / 2), 0]
      }(ab) : [Mb, Xb];
      return {
        kind: 0 === Ib ? "reactor" : "battery",
        box: ws([cb, sb, kb], Wb, ab, Tb, Ub, nb),
        formed: 1 === Hb,
        level: fb
      }
    }
    class lm {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xm;
        this.guideSetting = bb, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = bb.read()
      }
      mN(bb) {
        var cb;
        const sb = new Map;
        for (const kb of bb.baf2RxPlanList) {
          const bb = mm(kb);
          sb.set(nm(bb.box.ctrl), bb)
        }
        this.plans = sb, this.layouts = new Map((null !== (cb = bb.baf2RxLayouts) && void 0 !== cb ? cb : []).map((bb => {
          let [cb, sb, kb, Wb] = bb;
          return [nm([cb, sb, kb]), Wb]
        }))), this.predicted.clear(), bb.baf2RxFormedAt && (this.formed = {
          ctrl: bb.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const kb of [...this.startersOff]) {
          const bb = sb.get(kb);
          bb && !bb.formed || this.startersOff.delete(kb)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((bb => this.planByKey(bb)))
      }
      planAt(bb) {
        return this.planByKey(nm(bb))
      }
      predictSize(bb, cb) {
        this.predicted.set(nm(bb), cb), this.changed()
      }
      unpredict(bb) {
        this.predicted.delete(nm(bb)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(bb) {
        var cb;
        const sb = nm(bb);
        return this.predicted.has(sb) ? null : null !== (cb = this.layouts.get(sb)) && void 0 !== cb ? cb : null
      }
      showsStarter(bb) {
        return !this.startersOff.has(nm(bb))
      }
      setStarter(bb, cb) {
        const sb = nm(bb);
        cb ? this.startersOff.delete(sb) : this.startersOff.add(sb), this.changed()
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
        const cb = this.plans.get(bb);
        if (!cb) return null;
        const sb = this.predicted.get(bb);
        return sb ? {
          ...cb,
          box: os(cb.box, cb.kind, sb[0], sb[1], sb[2])
        } : cb
      }
      changed() {
        this.version++;
        for (const bb of this.listeners) bb()
      }
    }
    var Qm = sb(223);
    const em = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Cm(bb, cb, sb, kb) {
      const Wb = bb.length / 3;
      for (let ab = 0; ab < em.length / 3; ab++) bb.push(em[3 * ab] * kb[0] / 2 + sb[0], em[3 * ab + 1] * kb[1] / 2 + sb[1], em[3 * ab + 2] * kb[2] / 2 + sb[2]);
      for (let ab = Wb; ab < Wb + 24; ab += 4) cb.push(ab, ab + 1, ab + 2, ab, ab + 2, ab + 3)
    }

    function Nm(bb, cb, sb) {
      const kb = cb[0][0],
        Wb = [],
        ab = [];
      for (const [Tb, Ub] of cb) Cm(Wb, ab, [Tb[0] - kb[0], Tb[1] - kb[1], Tb[2] - kb[2]], Ub);
      return bb.createGameMesh({
        positions: Wb,
        indices: ab
      }, sb, kb)
    }

    function Vm(bb, cb) {
      const sb = bb.w - 2,
        kb = bb.d - 2;
      return 1 === function(bb, cb, sb, kb) {
        const [Wb, ab, Tb] = bb;
        if (Number(Wb <= 2) + Number(ab <= 2) + Number(Tb <= 2) >= 2) return function(bb, cb, sb) {
          return (bb + cb + sb) % 2 === 0 ? 1 : 3
        }(cb, sb, kb);
        const [Ub, Ib] = Wb >= ab && Wb >= Tb ? [sb, kb] : ab >= Tb ? [cb, kb] : [cb, sb];
        return Ub % 2 === 0 && Ib % 2 === 0 ? 1 : 3
      }([sb, bb.h - 2, kb], cb % sb, Math.floor(cb / (sb * kb)), Math.floor(cb / sb) % kb) ? "rod" : "channel"
    }

    function Lm(bb, cb, sb) {
      if ("reactor" !== bb.kind || bb.formed || !cb) return !1;
      const kb = vs(bb.box);
      for (let Wb = 0; Wb < kb; Wb++) {
        const bb = sb(Wb);
        if (null !== bb && Ps(bb)) return !1
      }
      return !0
    }

    function um(bb, cb, sb, kb, Wb) {
      var ab;
      let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const Ub = sk(bb.box, cb),
        Ib = Tk(bb.kind, Ub, sb);
      if ("wrong" === Ib || "blocked" === Ib) return "wrong";
      if (!Wb) return null;
      if ("inside" === Ub && "reactor" === bb.kind && "Air" === Ds(sb)) {
        if (null !== Tb) {
          var Hb;
          const sb = pM[bX(Tb, kk(bb.box, cb))];
          return sb && null !== (Hb = BI(sb)) && void 0 !== Hb ? Hb : null
        }
        if (kb) return Vm(bb.box, kk(bb.box, cb))
      }
      if ("missing" !== Ib) return null;
      const fb = Uk(bb.kind, Ub);
      return null === fb ? null : null !== (ab = BI(fb)) && void 0 !== ab ? ab : null
    }
    const Ym = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function hm(bb, cb, sb) {
      const kb = sb => {
        const kb = cb(bk(bb.box, sb));
        return null !== kb && function(bb, cb) {
          return "reactor" !== bb.kind || cb !== xs(bb.box) && "inside" !== sk(bb.box, cb)
        }(bb, sb) && "ok" !== Tk(bb.kind, sk(bb.box, sb), kb)
      };
      if (sb) {
        const ab = ck(bb.box, [Math.floor(sb[0]), Math.floor(sb[1]), Math.floor(sb[2])]);
        if (ab >= 0 && (kb(ab) || (Wb = ab, "reactor" === bb.kind && "inside" === sk(bb.box, Wb) && "Air" === cb(bk(bb.box, Wb))))) return ab
      }
      var Wb;
      const ab = vs(bb.box);
      for (let Tb = 0; Tb < ab; Tb++)
        if (kb(Tb)) return Tb;
      return -1
    }

    function Jm(bb, cb) {
      return Math.floor(cb / (bb.w * bb.d))
    }

    function gm(bb, cb, sb) {
      return sb >= 0 && Jm(bb, cb) > Jm(bb, sb)
    }

    function Bm(bb, cb) {
      return cb >= 0 && bb.h >= 3 && Jm(bb, cb) === bb.h - 1
    }

    function tm(bb) {
      const cb = Ds(bb);
      return cb === Cs || "Collider" === cb || "Laser" === cb || cb.startsWith("_Collider ")
    }

    function ym(bb, cb, sb, kb) {
      if (kb(bb)) return null;
      if (!Ym.every((cb => {
          let [kb, Wb, ab] = cb;
          const Tb = sb([bb[0] + kb, bb[1] + Wb, bb[2] + ab]);
          return null !== Tb && !zs("reactor", Tb) && "reactor" !== Es(Tb)
        }))) return null;
      const Wb = qs("reactor").min,
        ab = ws([bb[0], bb[1], bb[2]], function(bb, cb) {
          const sb = cb[0] - (bb[0] + .5),
            kb = cb[2] - (bb[2] + .5);
          return Math.abs(sb) >= Math.abs(kb) ? sb >= 0 ? 2 : 4 : kb >= 0 ? 1 : 3
        }(bb, cb), Wb, Wb, Wb, rs("reactor", Wb)),
        Tb = xs(ab);
      let Ub = !0;
      for (let Ib = 0; Ib < vs(ab) && Ub; Ib++) {
        if (Ib === Tb) continue;
        const bb = bk(ab, Ib),
          cb = sb(bb);
        Ub = !kb(bb) && (null === cb || !tm(cb))
      }
      return {
        box: ab,
        fits: Ub
      }
    }
    const Pm = gI,
      Dm = "baf2Goal",
      Em = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      im = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Om = .4;

    function Gm(bb, cb) {
      let [sb, kb, Wb] = bb;
      const ab = OI([sb - .02, kb - .02, Wb - .02], [sb + 1.02, kb + 1.02, Wb + 1.02], .07);
      return cb && (ab.push([
        [sb + .5, kb + 1 + .7, Wb + .5],
        [.08, 1.4, .08]
      ]), ab.push([
        [sb + .5, kb + 1 + 1.4 + .2, Wb + .5],
        [Om, Om, Om]
      ])), ab
    }

    function Km(bb, cb) {
      let [sb, kb, Wb] = cb;
      return bb.isBlockInLoadedChunk(sb, kb, Wb) ? bb.blockIdToBlockName(bb.getBlockId(sb, kb, Wb)) : null
    }
    let Zm = null;
    const zm = new Set;
    let qm = null;

    function dm(bb) {
      Zm = bb;
      for (const cb of zm) cb(bb)
    }
    class Am {
      constructor(bb) {
        var cb;
        this.plans = bb, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (cb = bb => {
          var cb, sb;
          this.setGoal(null !== (cb = null === bb || void 0 === bb ? void 0 : bb.goal) && void 0 !== cb ? cb : null, null !== (sb = null === bb || void 0 === bb ? void 0 : bb.startsBattery) && void 0 !== sb && sb)
        }, qm ??= [GW.j.subscribe("setDirectionArrow", (bb => {
          let {
            id: cb,
            position: sb,
            text: kb
          } = bb;
          cb === Dm && dm({
            goal: [Math.floor(sb[0]), Math.floor(sb[1]), Math.floor(sb[2])],
            startsBattery: JSON.stringify(null !== kb && void 0 !== kb ? kb : null).includes("arrowStartBattery")
          })
        })), GW.j.subscribe("clearDirectionArrow", (bb => {
          let {
            id: cb
          } = bb;
          null !== cb && cb !== Dm || dm(null)
        }))], zm.add(cb), cb(Zm), () => {
          zm.delete(cb)
        })
      }
      onAfterRender(bb, cb) {
        const sb = performance.now();
        if (this.cues.length > 0) {
          const cb = .55 + .45 * Math.sin(sb / 1100 * Math.PI * 2);
          for (const sb of this.cues) bb.setGameMesh(sb, {
            visibility: cb
          })
        }
        if (sb - this.lastCheckMs < 150) return;
        this.lastCheckMs = sb;
        const kb = this.plans.all().filter((bb => {
            const [sb, kb, Wb] = bb.box.ctrl;
            return (!bb.formed || null !== this.plans.layoutOf(bb.box.ctrl)) && (sb - cb[0]) ** 2 + (kb - cb[1]) ** 2 + (Wb - cb[2]) ** 2 <= 2304
          })),
          Wb = function(bb, cb) {
            const sb = Qm.e.qm,
              kb = new Map;
            for (const ab of cb) {
              const cb = bk(ab.box, 0),
                Tb = bk(ab.box, vs(ab.box) - 1),
                Ub = [Math.min(cb[0], Tb[0]), Math.min(cb[1], Tb[1]), Math.min(cb[2], Tb[2])].map((bb => Math.floor(bb / sb))),
                Ib = [Math.max(cb[0], Tb[0]), Math.max(cb[1], Tb[1]), Math.max(cb[2], Tb[2])].map((bb => Math.floor(bb / sb)));
              for (let sb = Ub[0]; sb <= Ib[0]; sb++)
                for (let cb = Ub[1]; cb <= Ib[1]; cb++)
                  for (let ab = Ub[2]; ab <= Ib[2]; ab++) {
                    var Wb;
                    kb.set(`${sb},${cb},${ab}`, null !== (Wb = bb.getChunkVersion(sb, cb, ab)) && void 0 !== Wb ? Wb : -1)
                  }
            }
            return kb
          }(bb, kb);
        this.plans.getVersion() === this.storeVersion && (function(bb, cb) {
          if (bb.size !== cb.size) return !1;
          for (const [sb, kb] of bb)
            if (cb.get(sb) !== kb) return !1;
          return !0
        }(Wb, this.chunkVersions) || sb - this.lastRescanMs < 600) || (this.lastRescanMs = sb, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Wb, this.redraw(bb, kb))
      }
      dispose(bb) {
        this.unwatch(), Zm = null, this.clearMeshes(bb), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(bb, cb) {
        var sb;
        (null === bb || void 0 === bb ? void 0 : bb.join()) === (null === (sb = this.goal) || void 0 === sb ? void 0 : sb.join()) && cb === this.startsBattery || (this.goal = bb, this.startsBattery = cb, this.storeVersion = -1)
      }
      redraw(bb, cb) {
        const sb = cb => Km(bb, cb),
          kb = new Map,
          Wb = [],
          ab = this.plans.guideOn();
        for (const Hb of cb) {
          const bb = ab && Lm(Hb, this.plans.showsStarter(Hb.box.ctrl), (bb => sb(bk(Hb.box, bb)))),
            cb = "reactor" === Hb.kind ? this.plans.layoutOf(Hb.box.ctrl) : null,
            Tb = ab && !Hb.formed ? hm(Hb, sb, this.goal) : -1;
          Tb >= 0 && Wb.push([bk(Hb.box, Tb), Bm(Hb.box, Tb)]);
          const Ub = vs(Hb.box);
          for (let Wb = 0; Wb < Ub; Wb++) {
            const Ub = bk(Hb.box, Wb),
              Ib = sb(Ub),
              fb = null === Ib ? null : um(Hb, Wb, Ib, bb, ab, cb);
            if (null !== fb) {
              const bb = "wrong" !== fb && gm(Hb.box, Wb, Tb),
                cb = bb ? `${fb}Dim` : fb;
              let sb = kb.get(cb);
              sb || (sb = {
                draw: {
                  ghost: fb,
                  dim: bb
                },
                list: []
              }, kb.set(cb, sb)), sb.list.push(Ub)
            }
          }
        }
        if (ab && this.startsBattery && this.goal) {
          const [bb, cb, Wb] = this.goal, ab = [];
          for (const [kb, Tb, Ub] of Em) {
            const Ib = [bb + kb, cb + Tb, Wb + Ub];
            "Air" === sb(Ib) && ab.push(Ib)
          }
          if (ab.length > 0) {
            var Tb;
            const bb = null !== (Tb = kb.get("cell")) && void 0 !== Tb ? Tb : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            bb.list.push(...ab), kb.set("cell", bb)
          }
        }
        const Ub = [...kb.keys()].sort(),
          Ib = [...Ub.map((bb => `${bb}:${kb.get(bb).list.join(";")}`)), `cue:${Wb.join(";")}`].join("|");
        if (Ib !== this.shownKey) {
          this.shownKey = Ib, this.clearMeshes(bb);
          for (const cb of Ub) {
            const {
              draw: sb,
              list: Wb
            } = kb.get(cb);
            this.meshes.push(this.build(bb, sb, Wb))
          }
          for (const [cb, sb] of Wb) this.cues.push(Nm(bb, Gm(cb, sb), im))
        }
      }
      build(bb, cb, sb) {
        let {
          ghost: kb,
          dim: Wb
        } = cb;
        const {
          size: ab,
          colour: Tb,
          alpha: Ub
        } = Pm[kb], Ib = sb[0], Hb = [], fb = [];
        for (const [Mb, Xb, nb] of sb) Cm(Hb, fb, [Mb - Ib[0] + .5, Xb - Ib[1] + .5, nb - Ib[2] + .5], [ab, ab, ab]);
        return bb.createGameMesh({
          positions: Hb,
          indices: fb
        }, {
          rgb: Tb,
          alpha: Ub * (Wb ? .3 : 1)
        }, Ib)
      }
      clearMeshes(bb) {
        for (const cb of [...this.meshes, ...this.cues]) bb.disposeGameMesh(cb);
        this.meshes = [], this.cues = []
      }
    }
    const wm = [.56, .83, 1],
      rm = [1, .3, .25];
    class om {
      constructor(bb) {
        this.plans = bb, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(bb, cb, sb) {
        var kb;
        const Wb = performance.now();
        if (Wb - this.lastCheckMs < 150) return;
        this.lastCheckMs = Wb;
        const ab = cb => Km(bb, cb),
          Tb = null === (kb = bb.Xcb(cb)) || void 0 === kb ? void 0 : kb.name,
          Ub = Tb && "Reactor Frame" === Ds(Tb) ? bb.getTargetedBlock() : null,
          Ib = Ub ? [Ub.LQ[0], Ub.LQ[1], Ub.LQ[2]] : null,
          Hb = null !== Ib && "Air" === ab(Ib) && Ib.every(((bb, cb) => Math.abs(bb + .5 - sb[cb]) <= 8)) ? ym(Ib, sb, ab, (bb => this.inPlan(bb))) : null,
          fb = Hb ? `${Hb.box.ctrl.join()}|${Hb.box.rot}|${Hb.fits}` : "";
        fb !== this.shownKey && this.show(bb, fb, Hb)
      }
      dispose(bb) {
        this.clear(bb), this.shownKey = ""
      }
      inPlan(bb) {
        return this.plans.all().some((cb => ck(cb.box, bb) >= 0))
      }
      show(bb, cb, sb) {
        if (this.clear(bb), this.shownKey = cb, !sb) return;
        const {
          box: kb,
          fits: Wb
        } = sb, ab = Wb ? wm : rm, {
          lo: Tb,
          hi: Ub
        } = iI(kb);
        this.meshes.push(Nm(bb, OI(Tb, Ub, .05), {
          rgb: ab,
          alpha: 1
        }));
        const Ib = [],
          Hb = bk(kb, 0)[1];
        for (let fb = 0; fb < kb.w * kb.d; fb++) {
          const [bb, , cb] = bk(kb, fb);
          Ib.push([
            [bb + .5, Hb + .02 + .01, cb + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Nm(bb, Ib, {
          rgb: ab,
          alpha: .25
        }))
      }
      clear(bb) {
        for (const cb of this.meshes) bb.disposeGameMesh(cb);
        this.meshes = []
      }
    }
    const Sm = "buildAFactory2Game:";

    function Rm(bb, cb, sb) {
      const kb = bb => {
          const [sb, kb, Wb] = bb.box.ctrl;
          return sb === cb[0] && kb === cb[1] && Wb === cb[2]
        },
        Wb = bb.find((bb => kb(bb) || ck(bb.box, cb) >= 0));
      if (!Wb) return null;
      const ab = function(bb, cb, sb) {
        const {
          w: kb,
          h: Wb,
          d: ab
        } = bb.box, Tb = "reactor" === bb.kind ? `${Sm}rxTitle` : `${Sm}batTitle`;
        if (bb.formed) return {
          key: `${Sm}lookPlanFormed`,
          kindKey: Tb,
          w: kb,
          h: Wb,
          d: ab,
          count: 0
        };
        let Ub = 0,
          Ib = 0;
        for (let fb = 0; fb < vs(bb.box); fb++) {
          const cb = sb(bk(bb.box, fb)),
            kb = null === cb ? "ok" : Tk(bb.kind, sk(bb.box, fb), cb);
          Ub += "missing" === kb ? 1 : 0, Ib += "wrong" === kb || "blocked" === kb ? 1 : 0
        }
        const Hb = function(bb, cb, sb) {
          if (cb < 0 || null === sb) return;
          const kb = sk(bb.box, cb),
            Wb = Tk(bb.kind, kb, sb);
          return "blocked" === Wb ? `${Sm}lookWhy_blocked` : "wrong" === Wb ? "ctrl" === kb ? `${Sm}lookWhy_ctrl` : `${Sm}lookWhy_reactor_${kb}` : void 0
        }(bb, ck(bb.box, cb), sb([cb[0], cb[1], cb[2]]));
        if (Ub > 0) return {
          key: `${Sm}lookPlanToBuild`,
          kindKey: Tb,
          w: kb,
          h: Wb,
          d: ab,
          count: Ub,
          why: Hb
        };
        if (Ib > 0) return {
          key: `${Sm}lookPlanTakeOut`,
          kindKey: Tb,
          w: kb,
          h: Wb,
          d: ab,
          count: Ib,
          why: Hb
        };
        return {
          key: "reactor" === bb.kind ? `${Sm}lookPlanNoRods` : `${Sm}lookPlanDone`,
          kindKey: Tb,
          w: kb,
          h: Wb,
          d: ab,
          count: 0
        }
      }(Wb, cb, sb);
      return "reactor" === Wb.kind && kb(Wb) ? {
        ...ab,
        ctrl: !0
      } : ab
    }

    function Fm(bb, cb) {
      return bb === cb || null !== bb && null !== cb && bb.key === cb.key && bb.kindKey === cb.kindKey && bb.w === cb.w && bb.h === cb.h && bb.d === cb.d && bb.count === cb.count && bb.why === cb.why && bb.ctrl === cb.ctrl
    }

    function xm() {
      return performance.now()
    }
    class jm {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xm;
        this.ticket = bb, this.sent = cb, this.backstopMs = sb, this.now = kb, this.queuedAt = void 0, this.queuedAt = kb()
      }
      answered() {
        const bb = this.now(),
          cb = this.sent.leftAt(this.ticket);
        return null !== cb && bb - cb > 4e3 || bb - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class pm {
      constructor() {
        this.echoes = []
      }
      add(bb) {
        this.echoes = this.echoes.filter((bb => !bb.answered())), this.echoes.push(bb)
      }
      answered() {
        var bb, cb;
        return null === (bb = null === (cb = this.echoes.at(-1)) || void 0 === cb ? void 0 : cb.answered()) || void 0 === bb || bb
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((bb => bb.answered()))
      }
      age() {
        var bb, cb;
        return null !== (bb = null === (cb = this.echoes.at(-1)) || void 0 === cb ? void 0 : cb.age()) && void 0 !== bb ? bb : null
      }
      clear() {
        this.echoes = []
      }
    }
    class bl {
      constructor(bb) {
        this.send = bb, this.value = null, this.sent = null, this.echoes = new pm, this.down = !1, this.timer = null
      }
      shown(bb) {
        return null === this.value ? bb : this.down || this.value !== this.sent ? this.value : bb === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), bb) : this.value
      }
      pendingFor(bb) {
        return null !== this.value && this.value === this.sent && bb !== this.value ? this.echoes.age() : null
      }
      assume(bb, cb) {
        this.disarm(), this.down = !1, this.value = bb, this.sent = bb, this.echoes.clear(), this.echoes.add(cb)
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
    class cl {
      constructor() {
        this.pending = new Map
      }
      set(bb, cb, sb) {
        var kb;
        const Wb = null !== (kb = this.pending.get(bb)) && void 0 !== kb ? kb : {
          on: cb,
          echoes: new pm
        };
        Wb.on = cb, Wb.echoes.add(sb), this.pending.set(bb, Wb)
      }
      shown(bb) {
        let cb = bb;
        for (const [sb, {
            on: kb,
            echoes: Wb
          }] of this.pending) 0 !== (bb & sb) === kb && Wb.agreeCounts() || Wb.answered() ? this.pending.delete(sb) : cb = kb ? cb | sb : cb & ~sb;
        return cb
      }
      pendingMask() {
        let bb = 0;
        for (const cb of this.pending.keys()) bb |= cb;
        return bb
      }
      pendingFor(bb) {
        let cb = null;
        for (const [kb, {
            on: Wb,
            echoes: ab
          }] of this.pending) {
          if (void 0 !== bb && 0 !== (bb & kb) === Wb) continue;
          const Tb = ab.age();
          var sb;
          if (null !== Tb) cb = Math.max(null !== (sb = cb) && void 0 !== sb ? sb : 0, Tb)
        }
        return cb
      }
      clear() {
        this.pending.clear()
      }
    }
    class sl {
      constructor() {
        this.dims = null, this.echoes = new pm, this.unmet = null
      }
      shown(bb) {
        var cb;
        return this.dims && (kl(this.dims, bb) && this.echoes.agreeCounts() || this.echoes.answered()) && (kl(this.dims, bb) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (cb = this.dims) && void 0 !== cb ? cb : bb
      }
      takeUnmet() {
        const bb = this.unmet;
        return this.unmet = null, bb
      }
      set(bb, cb) {
        this.dims = bb, this.echoes.add(cb)
      }
      pendingFor(bb) {
        return null === this.dims || bb && kl(this.dims, bb) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function kl(bb, cb) {
      return bb[0] === cb[0] && bb[1] === cb[1] && bb[2] === cb[2]
    }
    class Wl {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm;
        this.now = bb, this.taps = new Map
      }
      tap(bb, cb, sb) {
        return !this.busy(bb) && (this.taps.set(bb, {
          at: this.now(),
          done: cb
        }), sb(), !0)
      }
      settle(bb) {
        for (const [cb, sb] of [...this.taps]) sb.done(bb) && this.taps.delete(cb)
      }
      busy(bb) {
        const cb = this.taps.get(bb);
        return !!cb && (!(this.now() - cb.at >= 3e3) || (this.taps.delete(bb), !1))
      }
      busyIds() {
        const bb = new Set;
        for (const cb of [...this.taps.keys()]) this.busy(cb) && bb.add(cb);
        return bb
      }
      clear() {
        this.taps.clear()
      }
    }

    function al(bb) {
      return {
        send: cb => bb.track(cb),
        sendUrgent: (cb, sb) => bb.track(cb, {
          urgent: !0,
          supersedes: sb
        }),
        leftAt: cb => bb.leftAt(cb),
        holdReserve: () => bb.holdUrgentReserve(),
        answerMs: GT
      }
    }

    function Tl() {
      return performance.now()
    }

    function Ul(bb) {
      const cb = bb.baf2RxNeed.map((bb => {
        let [cb, sb] = bb;
        return [cb, sb]
      }));
      return JSON.stringify([bb.baf2RxFormed, cb, bb.baf2RxBad, bb.baf2RxCells])
    }

    function Il(bb, cb) {
      const sb = 0 !== (cb & Xc),
        kb = 0 !== (bb.baf2RxFlags & Xc);
      return !sb || kb || "running" !== bb.baf2RxState && "idle" !== bb.baf2RxState ? !sb && kb && "scram" === bb.baf2RxState && bb.baf2RxFuel > 0 ? "idle" : bb.baf2RxState : "scram"
    }

    function Hl(bb) {
      return JSON.stringify([bb.baf2BatFormed, bb.baf2BatNeed, bb.baf2BatBad])
    }

    function fl(bb) {
      return bb.join(",")
    }
    class Ml {
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
    class Xl {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(bb, cb) {
        this.lastAt = bb, this.lastUntil = bb + cb
      }
      answered(bb) {
        return this.lastAt >= bb || bb < this.lastUntil
      }
    }
    class nl {
      constructor(bb, cb) {
        this.link = bb, this.now = cb, this.hold = new sl, this.picked = null, this.notTaken = null
      }
      shown(bb) {
        const cb = this.hold.shown(bb);
        if (this.hold.takeUnmet() && this.picked) {
          var sb;
          const {
            plans: cb,
            ctrl: kb,
            at: Wb
          } = this.picked;
          this.picked = null, cb.unpredict(kb), null === (sb = this.notTaken) || void 0 === sb || sb.call(this, bb, Wb)
        }
        return cb
      }
      pendingFor(bb) {
        return this.hold.pendingFor(bb)
      }
      Wn(bb, cb, sb) {
        bb.predictSize(cb, sb), this.picked = {
          plans: bb,
          ctrl: cb,
          at: this.now()
        };
        const kb = this.link.send(Mc(cb, "plan", ...sb));
        this.hold.set(sb, new jm(kb, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class ml {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tl;
        this.plans = bb, this.readInterior = cb, this.link = sb, this.now = kb, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new cl, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Ml, this.redraw = null, this.releaseReserve = null, this.size = new nl(sb, kb), this.oneShots = new Wl(kb), this.throttle = new bl((bb => this.echo(this.link.send(this.command("throttle", bb)))))
      }
      set(bb) {
        !bb.baf2RxOpen && this.raw && fl(this.raw.baf2RxAt) === fl(bb.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(bb), this.QQ(bb)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(bb) {
        this.size.notTaken = bb
      }
      resize(bb) {
        this.raw && (this.size.Wn(this.plans, this.raw.baf2RxAt, bb), this.QQ(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const bb = this.raw.baf2RxAt;
        this.plans.setStarter(bb, !this.plans.showsStarter(bb)), this.QQ(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.QQ(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.QQ(this.raw)
      }
      send(bb) {
        if (this.raw) {
          for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
          this.link.send(this.command(bb, ...sb))
        }
      }
      tap(bb, cb) {
        this.raw && this.oneShots.tap(bb, function(bb, cb) {
          if ("start" === bb) return bb => 0 === (bb.baf2RxFlags & Xc);
          if ("odConfirm" === bb) return bb => 0 !== (bb.baf2RxFlags & nc);
          const sb = Ul(cb);
          return bb => Ul(bb) !== sb
        }(bb, this.raw), cb) && ("start" === bb && (this.startedAt = this.now()), this.QQ(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(Xc, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(bb, cb) {
        if (!this.raw) return;
        const sb = bb === Xc ? this.command(cb ? "scram" : "start") : this.command("od", cb ? 1 : 0),
          kb = cb && bb === Xc,
          Wb = `${fc} ${this.raw.baf2RxAt.join(" ")} `,
          ab = this.echo(kb ? this.link.sendUrgent(sb, (bb => {
            const cb = bb.startsWith(Wb) ? bb.slice(Wb.length).split(" ")[0] : null;
            return "throttle" === cb || "start" === cb
          })) : this.link.send(sb));
        this.flags.set(bb, cb, ab), kb && this.throttle.assume(0, ab), this.QQ(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(bb) {
        this.throttle.drag(bb), this.raw && this.QQ(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.QQ(this.raw)
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
        for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
        return Mc(this.raw.baf2RxAt, bb, ...sb)
      }
      echo(bb) {
        return new jm(bb, this.link, this.link.answerMs, this.now)
      }
      QQ(bb) {
        var cb;
        this.raw = bb;
        const sb = this.flags.shown(bb.baf2RxFlags),
          kb = {
            ...bb,
            baf2RxFlags: sb,
            baf2RxTarget: this.throttle.shown(bb.baf2RxTarget),
            baf2RxState: Il(bb, sb)
          },
          Wb = this.size.shown(kb.baf2RxDims),
          ab = this.throttle.pendingFor(),
          Tb = [this.throttle.pendingFor(bb.baf2RxTarget), this.flags.pendingFor(bb.baf2RxFlags), this.size.pendingFor(bb.baf2RxDims)].filter((bb => null !== bb)),
          Ub = Tb.length > 0 ? Math.max(...Tb) : null,
          Ib = this.oneShots.busyIds(),
          Hb = kb.baf2RxAt;
        let fb, Mb, Xb = null,
          nb = [Math.max(0, Wb[0] - 2), Math.max(0, Wb[1] - 2), Math.max(0, Wb[2] - 2)];
        if (kb.baf2RxFormed) {
          const [bb, cb, sb] = kb.baf2RxDims;
          nb = [Math.max(0, bb - 2), Math.max(0, cb - 2), Math.max(0, sb - 2)], fb = Array.from(kb.baf2RxCells, Number), Mb = `${nb.join(",")}:${kb.baf2RxCells}`
        } else {
          var mb;
          const bb = null === (mb = this.plans.planAt(Hb)) || void 0 === mb ? void 0 : mb.box,
            cb = bb ? os(bb, "reactor", ...Wb) : ws(Hb, 1, ...Wb, rs("reactor", Wb[0])),
            sb = this.readInterior(cb);
          Xb = sI(nb, sb), fb = sb, Mb = `${nb.join(",")}:${sb.join("")}`
        }(null === (cb = this.looksOf) || void 0 === cb ? void 0 : cb.key) !== Mb && (this.looksOf = {
          key: Mb,
          looks: II(nb, fb)
        }), this.view = {
          status: kb,
          dims: Wb,
          plan: Xb,
          inner: nb,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Hb),
          odConfirmed: this.odConfirmed || 0 !== (kb.baf2RxFlags & Nc),
          guide: this.plans.guideOn(),
          throttlePending: null !== ab,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== Ub && Ub >= 5e3,
          busy: Ib,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== Ub || Ib.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.QQ(this.raw)
        }), 250))
      }
    }
    class ll {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tl;
        this.plans = bb, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Ml, this.redraw = null, this.size = new nl(cb, sb), this.oneShots = new Wl(sb)
      }
      set(bb) {
        !bb.baf2BatOpen && this.view && fl(this.view.status.baf2BatAt) === fl(bb.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(bb), this.QQ(bb)
      }
      tap(bb, cb) {
        if (!this.view) return;
        const sb = Hl(this.view.status);
        this.oneShots.tap(bb, (bb => Hl(bb) !== sb), cb) && this.QQ(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(bb) {
        this.size.notTaken = bb
      }
      resize(bb) {
        this.view && (this.size.Wn(this.plans, this.view.status.baf2BatAt, bb), this.QQ(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.QQ(this.view.status)
      }
      subscribe(bb) {
        return this.listeners.subscribe(bb)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      QQ(bb) {
        const cb = this.size.shown(bb.baf2BatDims),
          sb = this.oneShots.busyIds();
        this.view = {
          status: bb,
          dims: cb,
          GM: uI(cb, bb.baf2BatDims) ? bb.baf2BatCapacity : MI(...cb),
          guide: this.plans.guideOn(),
          busy: sb
        }, this.listeners.notify(), sb.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.QQ(this.view.status)
        }), 250))
      }
    }
    const Ql = "buildAFactory2Game:";

    function el() {
      var bb;
      const cb = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!cb) return null;
      const sb = cb.querySelector(".ExitButton");
      return function(bb, cb) {
        const sb = cb ? cb.left - 8 : bb.right;
        return {
          left: bb.left,
          top: bb.top,
          width: Math.max(0, sb - bb.left),
          height: bb.height
        }
      }(cb.getBoundingClientRect(), null !== (bb = null === sb || void 0 === sb ? void 0 : sb.getBoundingClientRect()) && void 0 !== bb ? bb : null)
    }
    const Cl = (0, kb.memo)((function(bb) {
      let {
        store: cb
      } = bb;
      const {
        t: sb
      } = (0, yW.E)(), [Wb, ab] = (0, kb.useState)((() => cb.get())), [Tb, Ub] = (0, kb.useState)((() => performance.now()));
      (0, kb.useEffect)((() => (ab(cb.get()), cb.subscribe((() => {
        ab(cb.get()), Ub(performance.now())
      })))), [cb]);
      const {
        alarm: Ib,
        boomAt: Hb
      } = Wb, fb = null !== Ib && null !== Ib.secs, [Mb, Xb] = (0, kb.useState)(null);
      (0, kb.useEffect)((() => {
        if (!fb) return;
        Xb(el());
        const bb = setInterval((() => {
          Ub(performance.now()), Xb(el())
        }), 250);
        return () => {
          clearInterval(bb)
        }
      }), [fb]);
      const [nb, mb] = (0, kb.useState)(!1);
      return (0, kb.useEffect)((() => {
        if (Hb === -1 / 0) return;
        mb(!0);
        const bb = setTimeout((() => {
          mb(!1)
        }), 1300);
        return () => {
          clearTimeout(bb)
        }
      }), [Hb]), (0, Ba.jsxs)(Ba.Fragment, {
        children: [null !== Ib && (0, Ba.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: sb(Ib.hot ? `${Ql}rxAlarmSiren` : `${Ql}rxAlarmDamaged`, {
            amount: String(Ib.damage)
          })
        }), null !== Ib && null !== Ib.secs && (0, Ba.jsx)("div", {
          className: Mb ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Mb && void 0 !== Mb ? Mb : void 0,
          "aria-live": "assertive",
          children: sb(`${Ql}rxAlarmCountdown`, {
            amount: String((lb = Ib.secs, Qb = Tb - Ib.receivedAt, Math.max(1, Math.ceil(lb - Qb / 1e3))))
          })
        }), nb && (0, Ba.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var lb, Qb
    }));
    class Nl {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      mN(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const sb = bb.baf2RxAlarmAt.join(",");
        let kb = this.snapshot.boomAt;
        if (bb.baf2RxAlarmBoom) this.byReactor.delete(sb), kb = cb;
        else if (bb.baf2RxAlarmDamage <= 0) this.byReactor.delete(sb);
        else {
          var Wb;
          this.byReactor.set(sb, {
            damage: bb.baf2RxAlarmDamage,
            secs: null !== (Wb = bb.baf2RxAlarmSecs) && void 0 !== Wb ? Wb : null,
            hot: !0 === bb.baf2RxAlarmHot,
            receivedAt: cb
          })
        }
        this.QQ(kb)
      }
      retain(bb) {
        let cb = !1;
        for (const sb of [...this.byReactor.keys()]) bb.has(sb) || (this.byReactor.delete(sb), cb = !0);
        cb && this.QQ(this.snapshot.boomAt)
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
      QQ(bb) {
        let cb = null;
        for (const sb of this.byReactor.values())(!cb || sb.damage > cb.damage) && (cb = sb);
        this.snapshot = {
          alarm: cb,
          boomAt: bb
        };
        for (const sb of this.listeners) sb()
      }
    }
    const Vl = {
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

    function Ll(bb) {
      return [bb[0], bb[1], bb[2]]
    }

    function ul(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }
    class Yl {
      constructor(bb) {
        if (this.plans = bb, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var bb;
            return {
              active: this.glows.flatMap((bb => {
                let {
                  record: cb
                } = bb;
                return cb ? [cb] : []
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
      check(bb, cb, sb) {
        const kb = new Set(cb.map((bb => ul(bb.box.ctrl))));
        for (const Tb of function(bb, cb) {
            const sb = [],
              kb = new Map(bb);
            bb.clear();
            for (const Wb of cb) {
              const cb = nm(Wb.box.ctrl),
                ab = Wb.formed ? Wb.level : 0;
              bb.set(cb, ab), ab > 0 && 0 === kb.get(cb) && sb.push(Wb)
            }
            return sb
          }(this.levels, this.plans.all())) kb.has(ul(Tb.box.ctrl)) && this.show(bb, Tb, "on", sb);
        const Wb = this.plans.lastFormed();
        if (null === Wb || Wb.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Wb.receivedAt;
        const ab = function(bb, cb) {
          var sb;
          const kb = nm(bb);
          return null !== (sb = cb.find((bb => nm(bb.box.ctrl) === kb))) && void 0 !== sb ? sb : null
        }(Wb.ctrl, cb);
        return ab && this.show(bb, ab, "formed", sb), ab
      }
      fade(bb, cb) {
        0 !== this.glows.length && (this.glows = this.glows.filter((sb => {
          let {
            mesh: kb,
            glow: Wb,
            startMs: ab,
            record: Tb
          } = sb;
          const Ub = (cb - ab) / Vl[Wb].ms;
          return Ub >= 1 ? (bb.disposeGameMesh(kb), Tb && (Tb.endMs = cb), !1) : (bb.setGameMesh(kb, {
            visibility: "formed" === Wb ? 1 - Ub : Math.sin(Math.PI * Ub)
          }), !0)
        })))
      }
      dispose(bb) {
        for (const {
            mesh: sb
          }
          of this.glows) bb.disposeGameMesh(sb);
        this.glows = [], this.levels.clear();
        const cb = "undefined" !== typeof window ? window : null;
        (null === cb || void 0 === cb ? void 0 : cb.baf2Glows) === this.devAccessor && delete cb.baf2Glows
      }
      show(bb, cb, sb, kb) {
        const {
          lo: Wb,
          hi: ab
        } = iI(cb.box);
        let Tb = null;
        this.devLog && (Tb = {
          glow: sb,
          ctrl: Ll(cb.box.ctrl),
          lo: Ll(Wb),
          hi: Ll(ab),
          startMs: kb,
          endMs: null
        }, this.devLog.push(Tb), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(bb, sb, OI(Wb, ab, Vl[sb].thick)),
          glow: sb,
          startMs: kb,
          record: Tb
        })
      }
      build(bb, cb, sb) {
        const kb = Nm(bb, sb, {
          rgb: Vl[cb].colour,
          alpha: 1
        });
        return bb.setGameMesh(kb, {
          visibility: 0
        }), kb
      }
    }
    const hl = 1 / .6,
      Jl = {
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
        blendMode: KU.f.Standard,
        soft: !0
      },
      gl = {
        ...Jl,
        size: [.25, .4],
        count: 2
      };

    function Bl(bb) {
      return {
        colours: [bb, bb],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: KU.f.Add,
        soft: !1
      }
    }
    const tl = Bl([150, 225, 255]),
      yl = Bl([185, 145, 255]),
      Pl = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function Dl(bb) {
      const cb = ic[bb];
      return null === cb.fuelSlot || Ws(cb) ? Pl.includes(bb) ? yl : tl : Jl
    }
    const El = {
        kind: "smokePuff"
      },
      il = [.2, .025, .2];

    function Ol(bb, cb) {
      const [
        [sb, kb, Wb],
        [ab, Tb, Ub]
      ] = bb.colours;
      return {
        texture: bb.soft ? El : "square_particle",
        GM: cb,
        minLifeTime: bb.life[0] / hl,
        maxLifeTime: bb.life[1] / hl,
        minEmitPower: bb.power[0] * hl,
        maxEmitPower: bb.power[1] * hl,
        minSize: bb.size[0],
        maxSize: bb.size[1],
        emitRate: 0,
        gravity: [0, bb.lift * hl * hl, 0],
        dir1: [-bb.spread, 1, -bb.spread],
        dir2: [bb.spread, 1, bb.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [sb, kb, Wb, bb.alpha],
          maxColor: [ab, Tb, Ub, bb.alpha]
        }, {
          timeFraction: 1,
          minColor: [sb, kb, Wb, 0],
          maxColor: [ab, Tb, Ub, 0]
        }],
        blendMode: bb.blendMode
      }
    }
    class Gl {
      constructor(bb) {
        this.fixed = bb, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(bb, cb, sb) {
        var kb;
        if (sb === this.lastFrame) return !1;
        this.lastFrame = sb;
        const Wb = this.at;
        Wb[0] = cb[0] + .5, Wb[1] = cb[1] + 1.025, Wb[2] = cb[2] + .5;
        const ab = null !== (kb = this.fixed) && void 0 !== kb ? kb : Ub() ? gl : Jl;
        let Tb = this.particles.get(ab);
        return Tb || (Tb = bb.createParticles(function(bb) {
          return Ol(bb, Math.ceil(12 * bb.count * bb.life[1]) + bb.count)
        }(ab), {
          pos: Wb,
          half: il
        }), this.particles.set(ab, Tb)), Tb.moveTo(Wb), Tb.emit(ab.count), !0
      }
      dispose() {
        for (const bb of this.particles.values()) bb.stop();
        this.particles.clear()
      }
    }
    class Kl {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(bb) {
        this.indexed = !0;
        for (const cb of Bc) {
          const sb = Dl(cb);
          for (let kb = 1; kb <= 4; kb++) {
            const Wb = bb.blockNameToBlockId(`${cb}|meta|rot${kb}|Running`, !0);
            if (null === Wb) continue;
            let ab = this.pufferIndexByStyle.get(sb);
            void 0 === ab && (ab = this.pufferList.push(new Gl(sb === Jl ? null : sb)) - 1, this.pufferIndexByStyle.set(sb, ab)), this.pufferIndexById[Wb] = ab + 1
          }
        }
      }
      onAfterRender(bb, cb) {
        this.indexed || this.index(bb);
        const sb = performance.now(),
          kb = 0 === this.lastMs ? 0 : Math.min(sb - this.lastMs, 250) / 1e3;
        this.lastMs = sb, this.frame++, bb.particlesEnabled() ? (this.scan(bb, cb), this.puff(bb, kb)) : this.sources = []
      }
      dispose() {
        for (const bb of this.pufferList) bb.dispose();
        this.sources = [], this.found = []
      }
      scan(bb, cb) {
        0 === this.scanRow && (this.origin = [Math.floor(cb[0]) - 12, Math.floor(cb[1]) - 6, Math.floor(cb[2]) - 12]);
        const sb = Math.min(this.scanRow + 16, 325),
          [kb, Wb, ab] = this.origin,
          Tb = this.hits;
        Tb.length = 0;
        for (let Ub = this.scanRow; Ub < sb; Ub++) {
          const cb = kb + Ub % 25,
            sb = Wb + Math.floor(Ub / 25);
          bb.scanBlocks(cb, sb, ab, cb + 1, sb + 1, ab + 25, this.pufferIndexById, Tb)
        }
        for (let Ub = 0; Ub < Tb.length; Ub += 4) {
          const bb = Tb[Ub + 3];
          this.found.push({
            pos: [Tb[Ub], Tb[Ub + 1], Tb[Ub + 2]],
            Jf: bb,
            puffer: this.pufferList[this.pufferIndexById[bb] - 1]
          })
        }
        this.scanRow = sb, 325 === sb && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(bb, cb) {
        const sb = this.sources.length;
        if (0 !== sb) {
          this.budget = Math.min(this.budget + Math.min(sb / 1.2, 12) * cb, 2);
          for (let cb = 0; cb < sb && this.budget >= 1; cb++) {
            const cb = this.sources[this.cursor % sb];
            this.cursor = (this.cursor + 1) % sb, bb.getBlockId(cb.pos[0], cb.pos[1], cb.pos[2]) === cb.Jf && (cb.puffer.puff(bb, cb.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Zl = {
        ...Bl([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      zl = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function ql(bb) {
      return 0 === bb.spots.length ? 0 : Math.min(1 * bb.level, 4)
    }

    function dl(bb) {
      return 0 === bb.glass.length ? 0 : Math.min(.75 * bb.level, 3)
    }

    function Al(bb) {
      return `${bb.ctrl.join(",")}:${bb.rot}:${bb.cu},${bb.cv}:${bb.w},${bb.h},${bb.d}`
    }

    function wl(bb, cb) {
      const sb = cb.w - 2,
        kb = cb.h - 2,
        Wb = cb.d - 2,
        ab = [];
      for (let Tb = 0; Tb < sb * kb * Wb; Tb++) {
        const Ub = Tb % sb,
          Ib = Math.floor(Tb / sb) % Wb,
          Hb = Math.floor(Tb / (sb * Wb));
        if (Ub > 0 && Ub < sb - 1 && Ib > 0 && Ib < Wb - 1 && Hb > 0 && Hb < kb - 1) continue;
        const fb = bk(cb, Wk(cb, Tb)),
          Mb = Km(bb, fb);
        if (null !== Mb && "Fuel Rod" === Ds(Mb))
          for (const cb of zl) {
            const sb = [fb[0] + cb[0], fb[1] + cb[1], fb[2] + cb[2]];
            ol(bb, sb) && ab.push(Sl(sb, cb))
          }
      }
      return ab
    }

    function rl(bb, cb) {
      const {
        lo: sb,
        hi: kb
      } = iI(cb), Wb = [];
      for (let ab = sb[0]; ab < kb[0]; ab++)
        for (let cb = sb[1]; cb < kb[1]; cb++) {
          const Tb = ab === sb[0] || ab === kb[0] - 1 || cb === sb[1] || cb === kb[1] - 1 ? 1 : Math.max(1, kb[2] - 1 - sb[2]);
          for (let Ub = sb[2]; Ub < kb[2]; Ub += Tb) {
            const Tb = [ab, cb, Ub];
            if (!ol(bb, Tb)) continue;
            const Ib = ab === sb[0] ? zl[1] : ab === kb[0] - 1 ? zl[0] : Ub === sb[2] ? zl[5] : Ub === kb[2] - 1 ? zl[4] : cb === sb[1] ? zl[3] : zl[2];
            Wb.push(Sl(Tb, Ib))
          }
        }
      return Wb
    }

    function ol(bb, cb) {
      const sb = Km(bb, cb);
      return null !== sb && "Reactor Glass" === Ds(sb)
    }

    function Sl(bb, cb) {
      return [
        [bb[0] + .5 + .55 * cb[0], bb[1] + .5 + .55 * cb[1], bb[2] + .5 + .55 * cb[2]],
        [0 === cb[0] ? .4 : .02, 0 === cb[1] ? .4 : .02, 0 === cb[2] ? .4 : .02]
      ]
    }
    class Rl {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(bb, cb, sb, kb) {
        const Wb = [],
          ab = new Set;
        for (const Hb of cb) {
          var Tb, Ub, Ib;
          const {
            box: cb
          } = Hb;
          if ("reactor" !== Hb.kind || Hb.level <= 0 || (cb.ctrl[0] - sb[0]) ** 2 + (cb.ctrl[1] - sb[1]) ** 2 + (cb.ctrl[2] - sb[2]) ** 2 > 576) continue;
          const fb = Al(cb);
          ab.add(fb);
          let Mb = this.spots.get(fb);
          if ((!Mb || kb - Mb.at > 3e3) && (Mb = {
              at: kb,
              spots: wl(bb, cb),
              glass: rl(bb, cb)
            }, this.spots.set(fb, Mb)), 0 === Mb.spots.length && 0 === Mb.glass.length) continue;
          const Xb = this.sparking.find((bb => bb.key === fb));
          Wb.push({
            key: fb,
            level: Hb.level,
            spots: Mb.spots,
            glass: Mb.glass,
            budget: null !== (Tb = null === Xb || void 0 === Xb ? void 0 : Xb.budget) && void 0 !== Tb ? Tb : 0,
            cursor: null !== (Ub = null === Xb || void 0 === Xb ? void 0 : Xb.cursor) && void 0 !== Ub ? Ub : 0,
            glassBudget: null !== (Ib = null === Xb || void 0 === Xb ? void 0 : Xb.glassBudget) && void 0 !== Ib ? Ib : 0
          })
        }
        for (const Hb of this.spots.keys()) ab.has(Hb) || this.spots.delete(Hb);
        this.sparking = Wb
      }
      emit(bb, cb, sb) {
        var kb;
        if (0 === this.sparking.length || !bb.particlesEnabled() || sb === this.lastFrame) return;
        this.lastFrame = sb;
        let Wb = 0,
          ab = 0;
        for (const mb of this.sparking) Wb += ql(mb), ab += dl(mb);
        const Tb = Wb > 8 ? 8 / Wb : 1,
          Ub = ab > 6 ? 6 / ab : 1;
        let Ib, Hb = null,
          fb = null;
        for (const mb of this.sparking) mb.budget = Math.min(mb.budget + ql(mb) * Tb * cb, 2), mb.budget >= 1 && (!Hb || mb.budget > Hb.budget) && (Hb = mb), mb.glassBudget = Math.min(mb.glassBudget + dl(mb) * Ub * cb, 2), mb.glassBudget >= 1 && (!fb || mb.glassBudget > fb.glassBudget) && (fb = mb);
        if (Hb) Hb.budget--, Ib = Hb.spots[Hb.cursor++ % Hb.spots.length];
        else {
          if (!fb) return;
          fb.glassBudget--, Ib = fb.glass[Math.floor(Math.random() * fb.glass.length)]
        }
        const [Mb, Xb] = Ib, nb = null !== (kb = this.emitter) && void 0 !== kb ? kb : this.create(bb, Mb, Xb);
        nb.moveTo(Mb, Xb), nb.emit(Zl.count)
      }
      dispose() {
        var bb;
        null === (bb = this.emitter) || void 0 === bb || bb.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(bb, cb, sb) {
        const kb = Math.ceil(14 * Zl.count * Zl.life[1]) + Zl.count;
        return this.emitter = bb.createParticles(Ol(Zl, kb), {
          pos: cb,
          half: sb
        }), this.emitter
      }
    }
    const vl = [2, 3.2],
      Fl = 1 / 3,
      xl = 1 / .6,
      jl = {
        texture: El,
        GM: Math.ceil(18 * vl[1]) + 4,
        minLifeTime: vl[0] / xl,
        maxLifeTime: vl[1] / xl,
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
        blendMode: KU.f.Standard
      };
    class pl {
      constructor(bb) {
        this.plans = bb, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new Rl, this.frame = 0, this.outline = new Yl(bb)
      }
      onAfterRender(bb, cb, sb) {
        const kb = performance.now(),
          Wb = 0 === this.lastMs ? 0 : Math.min(kb - this.lastMs, 250) / 1e3;
        if (this.lastMs = kb, this.outline.fade(bb, kb), this.puff(bb, Wb, sb), this.sparks.emit(bb, Wb, this.frame++), kb - this.lastCheckMs < 150) return;
        this.lastCheckMs = kb;
        const ab = this.plans.all().filter((bb => bb.formed && bQ(bb.box.ctrl, sb) <= 4096));
        this.plumes = ab.filter((bb => "reactor" === bb.kind && bb.level > 0)).map((bb => ({
          box: bb.box,
          level: bb.level
        }))), this.updateHums(bb, cb, ab, sb), this.sparks.update(bb, ab, sb, kb), this.chimeFormed(bb, cb, ab, kb)
      }
      dispose(bb) {
        var cb;
        this.outline.dispose(bb), null === (cb = this.steam) || void 0 === cb || cb.dispose(), this.steam = null, this.sparks.dispose();
        for (const sb of this.hums.values()) sb.stop();
        this.hums.clear()
      }
      chimeFormed(bb, cb, sb, kb) {
        const Wb = this.outline.check(bb, sb, kb);
        Wb && bb.playSound(cb, "exp_levelup", .6, 1, {
          ca: [Wb.box.ctrl[0] + .5, Wb.box.ctrl[1], Wb.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(bb, cb, sb) {
        const kb = this.plumes;
        if (0 === kb.length || !bb.particlesEnabled()) return void(this.plumeBudget = 0);
        const Wb = kb.reduce(((bb, cb) => bb + 3 * cb.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Wb * cb, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let ab = this.plumeCursor % (Wb / 3);
        this.plumeCursor++;
        let Tb = kb[0];
        for (const Mb of kb) {
          if (ab < Mb.level) {
            Tb = Mb;
            break
          }
          ab -= Mb.level
        }
        const {
          lo: Ub,
          hi: Ib
        } = iI(Tb.box);
        if (function(bb, cb, sb) {
            const kb = Math.max(bb[0] - sb[0], 0, sb[0] - cb[0]),
              Wb = Math.max(bb[2] - sb[2], 0, sb[2] - cb[2]);
            return Math.hypot(kb, sb[1] - cb[1], Wb)
          }(Ub, Ib, sb) < 6 && Math.random() > Fl) return;
        const Hb = [(Ub[0] + Ib[0]) / 2, Ib[1] + .05, (Ub[2] + Ib[2]) / 2],
          fb = [(Ib[0] - Ub[0]) / 2 - .5, .05, (Ib[2] - Ub[2]) / 2 - .5];
        this.steam ??= bb.createParticles(jl, {
          pos: Hb,
          half: fb
        }), this.steam.moveTo(Hb, fb), this.steam.emit(1)
      }
      updateHums(bb, cb, sb, kb) {
        const Wb = new Map;
        for (const Tb of sb) "reactor" === Tb.kind && Tb.level > 0 && bQ(Tb.box.ctrl, kb) <= 576 && Wb.set(`${ab=Tb.box.ctrl,`${ab[0]},${ab[1]},${ab[2]}`}:${Tb.level}`, Tb);
        var ab;
        for (const [Tb, Ub] of this.hums) Wb.has(Tb) || (Ub.stop(), this.hums.delete(Tb));
        for (const [Tb, Ub] of Wb) {
          if (this.hums.has(Tb)) continue;
          const {
            lo: sb,
            hi: kb
          } = iI(Ub.box), Wb = [(sb[0] + kb[0]) / 2, sb[1], (sb[2] + kb[2]) / 2], ab = bb.playSound(cb, "rocketEngineLoop", .08 + .06 * Ub.level, .55, {
            ca: Wb,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          ab && this.hums.set(Tb, ab)
        }
      }
    }

    function bQ(bb, cb) {
      return (bb[0] - cb[0]) ** 2 + (bb[1] - cb[1]) ** 2 + (bb[2] - cb[2]) ** 2
    }
    class cQ {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      mN(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const kb = [bb.baf2BombAt[0], bb.baf2BombAt[1], bb.baf2BombAt[2]],
          Wb = bb.baf2BombR;
        if (bb.baf2BombBoom) {
          const bb = Math.hypot(cb[0] - kb[0], cb[1] - kb[1], cb[2] - kb[2]);
          this.QQ({
            fuse: null,
            blast: {
              at: kb,
              r: Wb,
              receivedAt: sb,
              distance: bb,
              flash: bb <= 3 * Wb
            }
          })
        } else this.QQ({
          ...this.snapshot,
          fuse: bb.baf2BombMs > 0 ? {
            at: kb,
            r: Wb,
            endsAt: sb + bb.baf2BombMs
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
      QQ(bb) {
        this.snapshot = bb;
        for (const cb of this.listeners) cb()
      }
    }
    const sQ = (0, kb.memo)((function(bb) {
      var cb;
      let {
        store: sb
      } = bb;
      const {
        t: Wb
      } = (0, yW.E)(), [ab, Tb] = (0, kb.useState)((() => sb.get())), [Ub, Ib] = (0, kb.useState)((() => performance.now()));
      (0, kb.useEffect)((() => (Tb(sb.get()), sb.subscribe((() => {
        Tb(sb.get()), Ib(performance.now())
      })))), [sb]);
      const {
        fuse: Hb,
        blast: fb
      } = ab;
      (0, kb.useEffect)((() => {
        if (!Hb) return;
        const bb = setInterval((() => {
          Ib(performance.now())
        }), 250);
        return () => {
          clearInterval(bb)
        }
      }), [Hb]);
      const [Mb, Xb] = (0, kb.useState)(!1);
      (0, kb.useEffect)((() => {
        if (null === fb || void 0 === fb || !fb.flash) return;
        Xb(!0);
        const bb = setTimeout((() => {
          Xb(!1)
        }), 2500);
        return () => {
          clearTimeout(bb)
        }
      }), [fb]);
      const nb = Hb ? function(bb, cb) {
        return bb.endsAt <= cb ? 0 : Math.ceil((bb.endsAt - cb) / 1e3)
      }(Hb, Ub) : 0;
      return (0, Ba.jsxs)(Ba.Fragment, {
        children: [nb > 0 && (0, Ba.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Wb("buildAFactory2Game:bombCountdown", {
            amount: String(nb),
            radius: String(null !== (cb = null === Hb || void 0 === Hb ? void 0 : Hb.r) && void 0 !== cb ? cb : 0)
          })
        }), Mb && (0, Ba.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function kQ(bb) {
      const cb = Math.min(4, Math.max(1, bb / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * bb / 4)),
        capSpread: Math.min(5 * bb / 8, 24 * cb),
        capThick: 6 * cb,
        stemHalfWidth: 3 * cb,
        puffScale: cb
      }
    }
    class WQ {
      constructor() {
        this.qU = !1
      }
      hold(bb) {
        bb.getCameraFar() < 1e3 && (bb.setCameraFar(1e3), this.qU = !0)
      }
      release(bb) {
        this.qU && (this.qU = !1, bb.setCameraFar(null))
      }
    }
    const aQ = 1 / .6,
      TQ = [.2, .1, .2],
      UQ = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      IQ = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: KU.f.Standard,
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
      HQ = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: KU.f.Standard,
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
      fQ = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: KU.f.Standard,
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
      MQ = {
        texture: El,
        GM: Math.ceil(120) + 4,
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
        blendMode: KU.f.Add
      };
    class XQ {
      constructor(bb) {
        this.store = bb, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new WQ, this.timers = []
      }
      onAfterRender(bb, cb) {
        const sb = performance.now(),
          kb = 0 === this.lastMs ? 0 : Math.min(sb - this.lastMs, 250) / 1e3;
        this.lastMs = sb;
        const {
          fuse: Wb,
          blast: ab
        } = this.store.get();
        null !== ab && ab !== this.shownBlast && (this.shownBlast = ab, this.startBlast(bb, cb, ab, sb));
        const Tb = bb.particlesEnabled();
        null !== Wb && Wb.endsAt > sb && Tb ? this.emitBeacon(bb, Wb, kb, sb) : this.beaconBudget = 0, null !== this.cloud && (sb - this.cloud.startMs > 33e3 ? this.disposeCloud(bb) : (this.far.hold(bb), Tb && this.emitCloud(bb, kb, sb)))
      }
      dispose(bb) {
        var cb;
        null === (cb = this.beacon) || void 0 === cb || cb.dispose(), this.beacon = null, this.disposeCloud(bb);
        for (const sb of this.timers) clearTimeout(sb);
        this.timers.length = 0
      }
      emitBeacon(bb, cb, sb, kb) {
        const Wb = cb.endsAt - kb < 5e3 ? 350 : 1e3,
          ab = .5 + .5 * Math.sin(2 * Math.PI * kb / Wb);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * ab * sb, 4), this.beaconBudget < 1) return;
        const Tb = Math.floor(this.beaconBudget);
        this.beaconBudget -= Tb;
        const [Ub, Ib, Hb] = cb.at, fb = [Ub + .5, Ib + 1.1, Hb + .5];
        this.beacon ??= bb.createParticles(MQ, {
          pos: fb,
          half: TQ
        }), this.beacon.moveTo(fb), this.beacon.emit(Tb)
      }
      startBlast(bb, cb, sb, kb) {
        var Wb;
        null === (Wb = this.beacon) || void 0 === Wb || Wb.dispose(), this.beacon = null, this.disposeCloud(bb);
        const ab = (0, OU.isMobile)() ? .5 : 1;
        this.streams = [IQ, HQ, fQ].map((bb => {
          const cb = Math.round(bb.count * ab);
          return {
            spec: bb,
            particles: null,
            rate: cb / ((bb.toMs - bb.fromMs) / 1e3),
            budget: 0,
            left: cb
          }
        })), this.cloud = {
          blast: sb,
          startMs: kb
        };
        const Tb = Math.max(.25, 1 - sb.distance / (6 * sb.r)),
          Ub = sb.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [sb, kb, Wb] of UQ) mQ(bb, cb, sb, Tb * kb, Wb)
        }), Ub))
      }
      emitCloud(bb, cb, sb) {
        const {
          blast: kb,
          startMs: Wb
        } = this.cloud, ab = sb - Wb, [Tb, Ub, Ib] = kb.at, Hb = kQ(kb.r);
        for (const fb of this.streams) {
          const {
            spec: sb
          } = fb;
          if (fb.left <= 0 || ab < sb.fromMs) continue;
          fb.budget += fb.rate * cb;
          const Wb = Math.min(Math.floor(fb.budget), fb.left);
          if (Wb < 1) continue;
          fb.budget -= Wb, fb.left -= Wb;
          const Mb = fb.particles ??= this.createStream(bb, sb, kb);
          if (sb === IQ) {
            const bb = Hb.stemHalfWidth;
            Mb.moveTo([Tb, Ub + 1, Ib], [bb, 1, bb])
          } else if (sb === HQ) {
            const bb = Hb.capSpread * Math.min(1, (ab - sb.fromMs) / 3e3),
              cb = Math.sqrt(Math.random()),
              kb = 2 * Math.random() * Math.PI,
              Wb = Math.cos(kb) * cb,
              fb = Math.sin(kb) * cb,
              Xb = Tb + Wb * bb,
              nb = Ib + fb * bb,
              mb = Hb.capThick,
              lb = Ub + Hb.capHeight + mb * (1 - cb * cb) * 2;
            Mb.setDirections([.7 * Wb, .05, .7 * fb], [Wb, .2, fb]), Mb.moveTo([Xb, lb, nb], [mb, mb, mb])
          } else {
            this.ringAngle += 2.39996;
            const bb = Math.cos(this.ringAngle),
              cb = Math.sin(this.ringAngle);
            Mb.setDirections([bb, .05, cb], [bb, .1, cb]), Mb.moveTo([Tb + 2 * bb, Ub + .5, Ib + 2 * cb], [0, .5, 0])
          }
          Mb.emit(Wb)
        }
      }
      createStream(bb, cb, sb) {
        const {
          r: kb
        } = sb, Wb = Math.max(cb.life[0], kb / 25), ab = cb === fQ ? [.9 * Wb, Wb] : cb.life, Tb = kQ(kb), Ub = cb === fQ ? 1 : Tb.puffScale, Ib = {
          texture: El,
          GM: cb.count + 4,
          minLifeTime: ab[0] / aQ,
          maxLifeTime: ab[1] / aQ,
          minSize: cb.size[0] * Ub,
          maxSize: cb.size[1] * Ub,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, cb.gravity * aQ * aQ, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: cb.from[0],
            maxColor: cb.from[1]
          }, {
            timeFraction: .6,
            minColor: nQ(cb.from[0], cb.to[0]),
            maxColor: nQ(cb.from[1], cb.to[1])
          }, {
            timeFraction: 1,
            minColor: cb.to[0],
            maxColor: cb.to[1]
          }],
          blendMode: cb.blend
        };
        if (cb === IQ) {
          const bb = Tb.capHeight / ((ab[0] + ab[1]) / 2);
          Ib.minEmitPower = .9 * bb * aQ, Ib.maxEmitPower = 1.05 * bb * aQ, Ib.dir1 = [-.1, 1, -.1], Ib.dir2 = [.1, 1, .1]
        } else cb === HQ ? (Ib.minEmitPower = 1.2, Ib.maxEmitPower = 2, Ib.dir1 = [-1, .05, -1], Ib.dir2 = [1, .2, 1]) : (Ib.minEmitPower = 39.583333333333336, Ib.maxEmitPower = 41.66666666666667, Ib.dir1 = [1, 0, 0], Ib.dir2 = [1, 0, 0]);
        return bb.createParticles(Ib, {
          pos: sb.at
        })
      }
      disposeCloud(bb) {
        for (const sb of this.streams) {
          var cb;
          null === (cb = sb.particles) || void 0 === cb || cb.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(bb)
      }
    }

    function nQ(bb, cb) {
      return [(bb[0] + cb[0]) / 2, (bb[1] + cb[1]) / 2, (bb[2] + cb[2]) / 2, .75 * bb[3]]
    }

    function mQ(bb, cb, sb, kb, Wb) {
      try {
        bb.playSound(cb, sb, kb, Wb)
      } catch (ab) {
        console.error(ab)
      }
    }
    const lQ = {
        GM: 720,
        perS: 100
      },
      QQ = {
        GM: 320,
        perS: 44
      };
    class eQ {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(bb, cb) {
        this.zone = {
          centre: [...bb.centre],
          r: bb.r,
          band: bb.band ? [bb.band[0], bb.band[1]] : void 0
        }, this.endsAt = cb
      }
      stop() {
        this.zone = null
      }
      mN(bb, cb) {
        const {
          baf2FalloutMs: sb,
          baf2FalloutAt: kb,
          baf2FalloutR: Wb,
          baf2FalloutY: ab
        } = bb;
        sb > 0 && kb && void 0 !== Wb ? this.start({
          centre: kb,
          r: Wb,
          band: ab
        }, cb + sb) : this.stop()
      }
      perS(bb, cb, sb) {
        const kb = this.zone;
        if (!kb) return 0;
        const Wb = this.endsAt - bb;
        return Wb <= 0 ? (this.zone = null, 0) : kb.band && (cb[1] < kb.band[0] || cb[1] > kb.band[1]) || Math.hypot(cb[0] - kb.centre[0], cb[2] - kb.centre[2]) > kb.r ? 0 : sb.perS * Math.min(1, Wb / 5e3)
      }
    }
    const CQ = [5, 7],
      NQ = [24, 8, 24],
      VQ = .5,
      LQ = 1 / .6,
      uQ = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class YQ {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OU.isMobile)();
        this.state = new eQ, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(bb) {
          return bb ? QQ : lQ
        }(bb)
      }
      startFallout(bb, cb) {
        this.state.start(bb, cb)
      }
      stopFallout() {
        this.state.stop()
      }
      mN(bb) {
        this.state.mN(bb, performance.now())
      }
      onAfterRender(bb, cb) {
        var sb;
        const kb = performance.now(),
          Wb = 0 === this.lastMs ? 0 : Math.min(kb - this.lastMs, 250) / 1e3;
        this.lastMs = kb;
        const ab = this.state.perS(kb, cb, this.tier);
        if (ab <= 0 || !bb.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + ab * Wb, ab / 4);
        const Tb = Math.floor(this.budget);
        if (Tb < 1) return;
        this.budget -= Tb;
        const Ub = this.at;
        Ub[0] = cb[0], Ub[1] = cb[1] + 12, Ub[2] = cb[2];
        const Ib = null !== (sb = this.systems) && void 0 !== sb ? sb : this.create(bb, Ub),
          Hb = this.amounts;
        Hb[0] = 0, Hb[1] = 0;
        for (let fb = 0; fb < Tb; fb++) Hb[Math.random() < .3 ? 1 : 0]++;
        for (let fb = 0; fb < Ib.length; fb++) Hb[fb] > 0 && (Ib[fb].moveTo(Ub, NQ), Ib[fb].emit(Hb[fb]))
      }
      dispose() {
        for (const cb of null !== (bb = this.systems) && void 0 !== bb ? bb : []) {
          var bb;
          cb.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(bb, cb) {
        return this.systems = uQ.map((sb => {
          let {
            rgba: [kb, Wb, ab, Tb],
            share: Ub
          } = sb;
          const Ib = {
            texture: "square_particle",
            GM: Math.ceil(this.tier.GM * Ub),
            minLifeTime: CQ[0] / LQ,
            maxLifeTime: CQ[1] / LQ,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [VQ, -1, VQ],
            colorGradients: [{
              timeFraction: 0,
              minColor: [kb, Wb, ab, 0]
            }, {
              timeFraction: .15,
              minColor: [kb, Wb, ab, Tb]
            }, {
              timeFraction: .8,
              minColor: [kb, Wb, ab, Tb]
            }, {
              timeFraction: 1,
              minColor: [kb, Wb, ab, 0]
            }],
            blendMode: KU.f.Standard
          };
          return bb.createParticles(Ib, {
            pos: cb,
            half: NQ
          })
        })), this.systems
      }
    }
    const hQ = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function JQ(bb) {
      const cb = /\|rot(\d)/.exec(bb);
      return hQ[cb ? Number(cb[1]) : 1]
    }
    var gQ = sb(624),
      BQ = sb(38080);
    const tQ = new Set(gQ.l);

    function yQ(bb) {
      if (-2 !== bb.count) return null;
      const cb = wb(bb.item);
      return null !== cb && tQ.has(cb) ? cb : null
    }

    function PQ(bb) {
      const {
        width: cb,
        height: sb
      } = (0, BQ.e)(bb).hitBoxDimensions;
      return .55 / Math.max(cb, sb)
    }

    function DQ(bb, cb, sb) {
      if (!sb) return !1;
      const kb = bb[0] + .5 - cb[0],
        Wb = bb[1] + .5 - cb[1],
        ab = bb[2] + .5 - cb[2];
      return kb * kb + Wb * Wb + ab * ab <= 576
    }

    function EQ(bb, cb) {
      return Math.atan2(bb[0], bb[2]) + Math.PI + cb
    }

    function iQ(bb, cb) {
      const sb = 2 * Math.PI;
      return (bb + sb * cb / 1e4) % sb
    }
    class OQ {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = bb, this.now = cb, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = bb.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(bb, cb) {
        if (0 === this.farms.size) return;
        const sb = this.now(),
          kb = Number.isNaN(this.frameMs) ? 0 : Math.min(sb - this.frameMs, 100);
        this.frameMs = sb, sb - this.checkedMs >= 1e3 && (this.checkedMs = sb, this.check(bb, cb));
        for (const Wb of this.farms.values()) Wb.shown && Wb.running && null !== Wb.model && kb > 0 && (Wb.spin = iQ(Wb.spin, kb), Wb.model.setPose(Wb.feet, EQ(Wb.front, Wb.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const bb of this.farms.values()) this.drop(bb);
        this.farms.clear()
      }
      sync() {
        const bb = new Set;
        for (const cb of this.labels.list()) {
          const sb = yQ(cb);
          if (null === sb) continue;
          bb.add(cb.key);
          const kb = this.farms.get(cb.key);
          if ((null === kb || void 0 === kb ? void 0 : kb.mob) === sb) continue;
          kb && this.drop(kb);
          const [Wb, ab, Tb] = cb.pos;
          this.farms.set(cb.key, {
            pos: cb.pos,
            feet: [Wb + .5, ab + 1, Tb + .5],
            mob: sb,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [cb, sb] of this.farms) bb.has(cb) || (this.drop(sb), this.farms.delete(cb));
        this.checkedMs = -1 / 0
      }
      check(bb, cb) {
        for (const sb of this.farms.values()) {
          const [kb, Wb, ab] = sb.pos, Tb = Km(bb, sb.pos);
          null !== Tb && Ds(Tb) === Ob && DQ(sb.pos, cb, "Air" === Km(bb, [kb, Wb + 1, ab])) ? (sb.running = Tb.endsWith("|Running"), sb.front = JQ(Tb), null === sb.model && (sb.model = bb.createMobModel(sb.mob, PQ(sb.mob)), null === sb.model) || (sb.model.setPose(sb.feet, EQ(sb.front, sb.spin)), sb.shown || (sb.model.setVisible(!0), sb.shown = !0))) : (sb.shown && null !== sb.model && sb.model.setVisible(!1), sb.shown = !1)
        }
      }
      drop(bb) {
        var cb;
        null === (cb = bb.model) || void 0 === cb || cb.dispose(), bb.model = null, bb.shown = !1
      }
    }
    class GQ {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(bb) {
        var cb;
        this.island = bb.baf2ColIsland, this.islandSite = (cb = bb.baf2ColSite) && 8 === cb.length ? {
          spawnXZ: [cb[0], cb[1]],
          coreXZ: [cb[2], cb[3]],
          minXZ: [cb[4], cb[5]],
          maxXZ: [cb[6], cb[7]]
        } : null, this.views = bb.baf2ColList.map((bb => ({
          entry: HW(bb)
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
        var cb;
        return null === (cb = this.views.find((cb => {
          let {
            entry: sb
          } = cb;
          return sb.focus[0] === bb[0] && sb.focus[1] === bb[1] + 1 && sb.focus[2] === bb[2]
        }))) || void 0 === cb ? void 0 : cb.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(bb, cb) {
        return dI(this.entries(), bb, cb)
      }
      lookSource() {
        return {
          handles: bb => mk(bb) >= 0 || lk(bb),
          line: (bb, cb) => this.lookLine(bb, cb),
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
    const KQ = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((bb => bb / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((bb => [bb, bb + 1, bb + 2, bb, bb + 2, bb + 3]))
    };

    function ZQ(bb, cb, sb, kb, Wb, ab, Tb) {
      let Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Ib = Math.cos(Ub),
        Hb = Math.sin(Ub),
        fb = bb.positions.length / 3,
        {
          positions: Mb,
          indices: Xb
        } = KQ;
      for (let nb = 0; nb < Mb.length; nb += 3) {
        const Ub = Mb[nb] * Wb,
          fb = Mb[nb + 2] * Tb;
        bb.positions.push(cb + Ub * Ib + fb * Hb, sb + Mb[nb + 1] * ab, kb - Ub * Hb + fb * Ib)
      }
      for (const nb of Xb) bb.indices.push(fb + nb)
    }

    function zQ(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return cb < 1 ? {
        rgb: bb,
        alpha: cb
      } : {
        rgb: bb,
        alpha: 1,
        opaque: !0
      }
    }
    class qQ {
      constructor(bb, cb) {
        this.style = bb, this.perSource = cb, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(bb) {
        this.sources = bb, 0 === bb.length && (this.budget = 0)
      }
      aX(bb, cb, sb) {
        const kb = this.sources.length;
        if (0 !== kb) {
          var Wb, ab;
          this.budget = Math.min(this.budget + (Wb = kb, ab = this.perSource, Math.min(Wb * ab, sH) * cb), 2);
          for (let cb = 0; cb < kb && this.budget >= 1; cb++) {
            const cb = this.sources[this.cursor % kb];
            this.cursor = (this.cursor + 1) % kb;
            if (!(Math.max(Math.abs(cb.x - sb[0]), Math.abs(cb.y - sb[1]), Math.abs(cb.z - sb[2])) > 32)) return this.puff(bb, cb), void this.budget--
          }
        }
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.dispose(), this.particles = null, this.sources = []
      }
      puff(bb, cb) {
        let {
          x: sb,
          y: kb,
          z: Wb,
          h: ab,
          faces: Tb
        } = cb;
        const Ub = function(bb, cb, sb, kb, Wb) {
            const [ab, Tb, Ub] = Wb[Math.floor(Math.random() * Wb.length)], Ib = .04, Hb = (bb, cb, sb) => bb > 0 ? cb + sb + Ib : bb < 0 ? cb - Ib : cb + .1, fb = (bb, cb, sb) => bb > 0 ? cb + sb + Ib : bb < 0 ? cb - Ib : cb + sb - .1, Mb = [Hb(ab, bb, 1), Hb(Tb, cb, kb), Hb(Ub, sb, 1)], Xb = [fb(ab, bb, 1), fb(Tb, cb, kb), fb(Ub, sb, 1)];
            return {
              pos: [(Mb[0] + Xb[0]) / 2, (Mb[1] + Xb[1]) / 2, (Mb[2] + Xb[2]) / 2],
              half: [(Xb[0] - Mb[0]) / 2, (Xb[1] - Mb[1]) / 2, (Xb[2] - Mb[2]) / 2],
              out: [ab, Tb, Ub]
            }
          }(sb, kb, Wb, ab, Tb),
          {
            style: Ib
          } = this,
          Hb = this.particles ??= bb.createParticles(Ol(Ib, Math.ceil(Ib.count * sH * Ib.life[1]) + 4), Ub);
        Hb.moveTo(Ub.pos, Ub.half);
        const [fb, Mb, Xb] = Ub.out, nb = Ib.spread;
        Hb.setDirections([fb - nb, .6 + Mb, Xb - nb], [fb + nb, 1 + Mb, Xb + nb]), Hb.emit(Ib.count)
      }
    }
    const dQ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class AQ {
      constructor() {
        this.green = new qQ(WH.green, bH), this.pink = new qQ(WH.pink, cH), this.colliders = [], this.lastMs = 0
      }
      setSources(bb) {
        this.colliders = bb;
        const cb = [],
          sb = [];
        for (const kb of bb) {
          const [bb, Wb, ab] = kb.focus;
          cb.push({
            x: bb,
            y: Wb - 1,
            z: ab,
            h: 2,
            faces: dQ
          });
          for (let cb = 0; cb < 4; cb++) {
            if (!kb.live[cb]) continue;
            const [bb, Wb, ab] = Ck(kb.focus, cb, Ik.LASER_D), [Tb, , Ub] = ek[cb], Ib = dQ.filter((bb => bb[0] !== Tb || bb[2] !== Ub || 0 !== bb[1]));
            sb.push({
              x: bb,
              y: Wb,
              z: ab,
              h: 1,
              faces: Ib
            })
          }
        }
        this.green.setSources(cb), this.pink.setSources(sb)
      }
      onAfterRender(bb) {
        const cb = performance.now(),
          sb = 0 === this.lastMs ? 0 : Math.min(cb - this.lastMs, 250) / 1e3;
        if (this.lastMs = cb, 0 === this.colliders.length || !bb.particlesEnabled()) return;
        const kb = bb.getCameraPosition();
        this.green.aX(bb, sb, kb), this.pink.aX(bb, sb, kb)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const wQ = 1.04,
      rQ = zQ([1, 120 / 255, 220 / 255]),
      oQ = zQ([1, .25, .25], .35);
    class SQ {
      constructor(bb) {
        this.store = bb, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new AQ
      }
      onAfterRender(bb) {
        this.store.version() !== this.builtVersion && this.rebuild(bb);
        const cb = performance.now();
        for (const sb of this.beams) {
          const kb = 1 + .35 * Math.sin(cb / 700 * Math.PI * 2 + sb.phase);
          bb.setGameMesh(sb.mesh, {
            scale: [sb.alongX ? 1 : kb, kb, sb.alongX ? kb : 1]
          })
        }
        this.glow.onAfterRender(bb)
      }
      dispose(bb) {
        this.clear(bb), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(bb) {
        this.clear(bb), this.builtVersion = this.store.version();
        const cb = [];
        for (const {
            entry: sb
          }
          of this.store.colliders()) sb.on && sb.live.some(Boolean) && (this.addBeams(bb, sb), cb.push(sb)), sb.blockers.length > 0 && this.addMarkers(bb, sb);
        this.glow.setSources(cb)
      }
      addBeams(bb, cb) {
        const [sb, kb, Wb] = cb.focus, ab = pI - .25, Tb = (.25 + pI) / 2;
        for (let Ub = 0; Ub < 4; Ub++) {
          if (!cb.live[Ub]) continue;
          const [Ib, , Hb] = ek[Ub], fb = 0 !== Ib, Mb = {
            positions: [],
            indices: []
          };
          ZQ(Mb, 0, 0, 0, fb ? ab : .2, .2, fb ? .2 : ab);
          const Xb = [sb + .5 + Ib * Tb, kb + .5, Wb + .5 + Hb * Tb],
            nb = bb.createGameMesh(Mb, rQ, Xb);
          this.meshes.push(nb), this.beams.push({
            mesh: nb,
            alongX: fb,
            phase: Ub * Math.PI / 2
          })
        }
      }
      addMarkers(bb, cb) {
        const sb = cb.blockers[0],
          kb = {
            positions: [],
            indices: []
          };
        for (const [Wb, ab, Tb] of cb.blockers) ZQ(kb, Wb - sb[0] + .5, ab - sb[1] + .5, Tb - sb[2] + .5, wQ, wQ, wQ);
        this.meshes.push(bb.createGameMesh(kb, oQ, sb))
      }
      clear(bb) {
        for (const cb of this.meshes) bb.disposeGameMesh(cb);
        this.meshes = [], this.beams = []
      }
    }
    const RQ = [.56, .83, 1],
      vQ = [1, .73, .08],
      FQ = [1, .25, .25],
      xQ = [.85, .85, .85],
      jQ = [.3, .45, .6];

    function pQ(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Tb = Wb / 2,
        Ub = Wb + ab;
      for (const Ib of [-Tb, Tb])
        for (const Wb of [-Tb, Tb]) ZQ(bb, cb, sb + Ib, kb + Wb, Ub, ab, ab), ZQ(bb, cb + Ib, sb, kb + Wb, ab, Ub, ab), ZQ(bb, cb + Ib, sb + Wb, kb, ab, ab, Ub)
    }

    function be(bb) {
      return cb => bb.isBlockInLoadedChunk(cb[0], cb[1], cb[2]) && 0 === bb.getBlockId(cb[0], cb[1], cb[2])
    }

    function ce(bb) {
      return bb.map((bb => {
        let {
          free: cb,
          blocked: sb,
          gaps: kb,
          supports: Wb
        } = bb;
        return `${cb.join(";")}|${sb.join(";")}|${kb.join(";")}|${Wb.join(";")}`
      })).join("/")
    }

    function se(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const ab = cb[0],
        Tb = {
          positions: [],
          indices: []
        };
      for (const [Ub, Ib, Hb] of cb) pQ(Tb, Ub - ab[0] + .5, Ib - ab[1] + .5, Hb - ab[2] + .5, kb, Wb);
      return bb.createGameMesh(Tb, sb, ab)
    }
    class ke {
      constructor(bb) {
        this.store = bb, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(bb, cb, sb) {
        var kb;
        const Wb = null === (kb = bb.Xcb(cb)) || void 0 === kb ? void 0 : kb.name;
        if (Wb !== fk && Wb !== Hk) return void("" !== this.shownKey && this.show(bb, "", []));
        const ab = performance.now();
        if (ab - this.lastCheckMs >= 200 && (this.lastCheckMs = ab, Wb === fk ? this.check(bb, sb) : this.preview(bb, sb)), this.pulses.length > 0) {
          const cb = 1 + .12 * Math.sin(ab / 1e3 * 1.25 * Math.PI * 2),
            sb = [cb, cb, cb];
          for (const kb of this.pulses) bb.setGameMesh(kb, {
            scale: sb
          })
        }
      }
      dispose(bb) {
        this.clear(bb), this.shownKey = ""
      }
      check(bb, cb) {
        const sb = be(bb),
          kb = [];
        for (const {
            entry: ab
          }
          of this.store.colliders()) {
          ab.focus.every(((bb, sb) => Math.abs(bb + .5 - cb[sb]) <= Ik.GHOST_REACH)) && kb.push(jI(ab, sb))
        }
        const Wb = ce(kb);
        Wb !== this.shownKey && this.show(bb, Wb, kb)
      }
      preview(bb, cb) {
        const sb = bb.getTargetedBlock(),
          kb = sb ? [sb.LQ[0], sb.LQ[1], sb.LQ[2]] : null,
          Wb = null !== kb && kb.every(((bb, sb) => Math.abs(bb + .5 - cb[sb]) <= 8)),
          ab = this.store.site(),
          Tb = Wb && ab ? function(bb, cb, sb) {
            const kb = Qk(bb);
            if (!kb.every(cb)) return null;
            const Wb = Lk(bb, sb);
            return {
              column: kb,
              spots: jI({
                focus: kb[1],
                lasers: [!1, !1, !1, !1],
                open: Wb,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, cb),
              fits: Wb.filter(Boolean).length >= Ik.MIN_SPOTS
            }
          }(kb, be(bb), ab) : null,
          Ub = Tb ? [Tb.spots] : [],
          Ib = Tb ? `preview ${kb.join(",")}|${Tb.fits}|${ce(Ub)}` : "";
        var Hb, fb;
        Ib !== this.shownKey && this.show(bb, Ib, Ub, null !== (Hb = null === Tb || void 0 === Tb ? void 0 : Tb.column) && void 0 !== Hb ? Hb : [], null === (fb = null === Tb || void 0 === Tb ? void 0 : Tb.fits) || void 0 === fb || fb)
      }
      show(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Wb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(bb), this.shownKey = cb, kb.length > 0 && this.meshes.push(se(bb, kb, zQ(Wb ? xQ : FQ)));
        for (const {
            free: ab,
            blocked: Tb,
            gaps: Ub,
            supports: Ib
          }
          of sb) {
          for (const [cb, sb, kb] of ab) {
            const Wb = {
              positions: [],
              indices: []
            };
            pQ(Wb, 0, 0, 0);
            const ab = bb.createGameMesh(Wb, zQ(RQ), [cb + .5, sb + .5, kb + .5]);
            this.meshes.push(ab), this.pulses.push(ab)
          }
          Tb.length > 0 && this.meshes.push(se(bb, Tb, zQ(vQ))), Ub.length > 0 && this.meshes.push(se(bb, Ub, zQ(FQ), 1.06, .07)), Ib.length > 0 && this.meshes.push(se(bb, Ib, zQ(jQ)))
        }
      }
      clear(bb) {
        for (const cb of this.meshes) bb.disposeGameMesh(cb);
        this.meshes = [], this.pulses = []
      }
    }
    class We {
      constructor() {
        this.stored = new Map, this.qU = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(bb) {
        if (!bb.baf2TermOpen) return !1;
        bb.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [cb, sb] of bb.baf2TermItems) sb > 0 ? this.stored.set(cb, sb) : this.stored.delete(cb);
        if (bb.baf2TermHeld && (this.qU = new Map(bb.baf2TermHeld)), this.pending = this.pending.filter((cb => cb.seq > bb.baf2TermAcked)), this.silos = bb.baf2TermSilos, this.readOnly = bb.baf2TermReadOnly, this.pocket = !0 === bb.baf2TermPocket, bb.baf2TermReset) this.resort();
        else {
          const bb = new Set(this.order);
          for (const cb of this.stored.keys()) bb.has(cb) || this.order.push(cb)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((bb, cb) => this.amount(cb) - this.amount(bb) || bb.localeCompare(cb))), this.changed()
      }
      take(bb, cb) {
        const sb = Uc(bb, this.amount(cb));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: cb,
          amount: sb,
          put: !1
        }), this.recents = [cb, ...this.recents.filter((bb => bb !== cb))].slice(0, 6), this.changed(), sc(this.seq, bb, cb)
      }
      put(bb, cb) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: cb,
          amount: Uc(bb, this.heldAmount(cb)),
          put: !0
        }), this.changed(), kc(this.seq, bb, cb)
      }
      putAll() {
        this.seq++;
        for (const bb of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: bb,
          amount: this.heldAmount(bb),
          put: !0
        });
        return this.changed(), Wc(this.seq)
      }
      amount(bb) {
        var cb;
        let sb = null !== (cb = this.stored.get(bb)) && void 0 !== cb ? cb : 0;
        for (const kb of this.pending) kb.item === bb && (sb += kb.put ? kb.amount : -kb.amount);
        return Math.max(0, sb)
      }
      heldAmount(bb) {
        var cb;
        let sb = null !== (cb = this.qU.get(bb)) && void 0 !== cb ? cb : 0;
        for (const kb of this.pending) kb.put && kb.item === bb && (sb -= kb.amount);
        return Math.max(0, sb)
      }
      heldItems() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((cb => cb === bb || this.heldAmount(cb) > 0))
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
    var ae = sb(38027);
    const Te = {
      isBlock: bb => void 0 !== Pb.g[bb],
      harvestType: bb => {
        var cb;
        return null === (cb = Pb.g[bb]) || void 0 === cb ? void 0 : cb.harvestType
      },
      harvestLevel: bb => {
        var cb;
        return null === (cb = Pb.g[bb]) || void 0 === cb ? void 0 : cb.harvestLevel
      },
      dropsNothing: bb => {
        var cb;
        return null === (null === (cb = Pb.g[bb]) || void 0 === cb ? void 0 : cb.drops)
      },
      displayName: bb => {
        var cb;
        return null === (cb = cU.l[bb]) || void 0 === cb ? void 0 : cb.displayName
      },
      description: bb => {
        var cb;
        return null === (cb = cU.l[bb]) || void 0 === cb ? void 0 : cb.description
      },
      harvests: bb => {
        var cb;
        return null === (cb = cU.l[bb]) || void 0 === cb ? void 0 : cb.harvests
      },
      level: bb => {
        var cb;
        return null === (cb = cU.l[bb]) || void 0 === cb ? void 0 : cb.level
      }
    };

    function Ue(bb, cb, sb) {
      return function(bb, cb, sb, kb) {
        var Wb, ab;
        const Tb = cb.split("|")[0],
          Ub = bb.isBlock(cb) ? cb : bb.isBlock(Tb) ? Tb : null;
        if (null === Ub || "rock" !== bb.harvestType(Ub) || bb.dropsNothing(Ub) && !qk.has(Tb)) return null;
        const Ib = sb && "rock" === bb.harvests(sb) ? null !== (Wb = bb.level(sb)) && void 0 !== Wb ? Wb : 0 : null,
          Hb = null !== (ab = null !== kb && void 0 !== kb ? kb : bb.harvestLevel(Ub)) && void 0 !== ab ? ab : 0;
        return (null !== Ib ? Hb <= Ib : 0 === bb.harvestLevel(Ub)) ? null : tk(bb, Hb)
      }(Te, bb, cb, sb)
    }

    function Ie(bb, cb) {
      return function(bb, cb, sb) {
        if (cb === Bk[0]) return [(0, ib.ke)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, ib.L.whiteUiText)];
        const kb = sb.split("|")[0],
          Wb = bb.isBlock(kb) ? bb.displayName(kb) : void 0,
          ab = "string" === typeof Wb ? Wb : Wb && "translationKey" in Wb ? `$t(${Wb.translationKey})` : kb;
        return [(0, ib.ke)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: ab
          }
        }, ib.L.whiteUiText), (0, ib.ke)({
          translationKey: `item:${(0,ib.Je)(cb)}`
        }, ib.L.yellowUiText)]
      }(Te, bb, cb)
    }
    const He = "buildAFactory2Game:";
    const fe = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Me(bb) {
      return bb.endsWith(" Ore")
    }
    const Xe = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      ne = [],
      me = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Xe,
        plan: null,
        atomic: ne
      },
      le = "buildAFactory2Game:",
      Qe = new Set(["Splitter", "Sorting Gate"]),
      ee = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Ce {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = bb, this.planAt = cb, this.tierOf = sb, this.Jf = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.qU = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = me, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(bb, cb, sb) {
        var kb, Wb, ab;
        let Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ub = null !== (kb = null === (Wb = bb.Xcb(cb)) || void 0 === Wb ? void 0 : Wb.name) && void 0 !== kb ? kb : null,
          Ib = bb.isPlayerCrouching(cb),
          Hb = 0 === sb ? null : this.resolve(bb, sb),
          fb = null !== Hb && null !== Tb && Qe.has(Hb.rootName) && function(bb, cb) {
            return ee.some((sb => {
              let [kb, Wb] = sb;
              const ab = bb.getBlockId(cb[0] + kb, cb[1], cb[2] + Wb);
              return 0 !== ab && "Express Belt" === bb.getMetaInfo(ab).rootName
            }))
          }(bb, Tb),
          Mb = this.updatePlan(0 === sb ? null : Tb),
          Xb = this.tierOf(),
          nb = null === Tb ? null : (0, ae.i)(sb),
          mb = null !== nb && null !== Tb && (0, ae.k)(function(bb) {
            return (cb, sb, kb) => bb.getBlockId(cb, sb, kb)
          }(bb), Tb[0], Tb[1], Tb[2], nb),
          lb = this.readAfloat(bb, sb, Tb);
        if (sb === this.Jf && mb === this.missesMaker && lb === this.afloat && Ub === this.qU && Ib === this.crouching && fb === this.express && Xb === this.tier && !Mb && (!this.targetsLive || !this.liveMoved(Tb))) return;
        this.Jf = sb, this.missesMaker = mb, this.afloat = lb, this.qU = Ub, this.crouching = Ib, this.express = fb;
        const Qb = fb && Hb ? function(bb) {
          if (null === bb.info) return null;
          return bb.express ??= {
            ...bb.info,
            detail: `${le}lookKeepsUpExpress`,
            detailItem: null
          }, bb.express
        }(Hb) : null !== Hb && mb && null !== nb ? this.besideMaker(Hb, sb, nb) : null !== Hb && lb ? this.hanging(Hb) : null !== (ab = null === Hb || void 0 === Hb ? void 0 : Hb.info) && void 0 !== ab ? ab : null;
        this.tier = Xb;
        const eb = Hb && Qb ? function(bb, cb) {
          var sb, kb;
          const Wb = Pb.g[bb];
          if (!bb.endsWith(" Ore") || "rock" !== (null === Wb || void 0 === Wb ? void 0 : Wb.harvestType) || 0 === Wb.harvestLevel) return null;
          const ab = null !== (sb = Wb.harvestLevel) && void 0 !== sb ? sb : 0,
            Tb = cb ? cU.l[cb] : void 0;
          if ("rock" === (null === Tb || void 0 === Tb ? void 0 : Tb.harvests) && (null !== (kb = Tb.level) && void 0 !== kb ? kb : 0) >= ab) return null;
          const Ub = (Ib = ab, tk(Te, Ib));
          var Ib;
          if (null === Ub) return null;
          const Hb = aa(Ub),
            fb = /^[AEIOU]/.test(Ub) ? "An" : "";
          if ("rock" === (null === Tb || void 0 === Tb ? void 0 : Tb.harvests) && cb) return {
            key: `${le}lookToolTooWeak${fb}`,
            qU: aa(cb),
            needed: Hb
          };
          return {
            key: Ub === Bk[0] ? `${le}lookNeedAnyPickaxe` : `${le}lookNeedPickaxe${fb}`,
            qU: null,
            needed: Hb
          }
        }(Hb.rootName, Ub) : null;
        this.targetsLive = !0 === (null === Hb || void 0 === Hb ? void 0 : Hb.live) && null !== Tb;
        let Cb = null;
        this.targetsLive && Hb && Tb && this.live && (this.livePos[0] = Tb[0], this.livePos[1] = Tb[1], this.livePos[2] = Tb[2], this.liveVersion = this.live.version(), Cb = this.live.line(Hb.rootName, Tb));
        const Nb = null === Qb ? Xe : function(bb, cb, sb) {
            const kb = function(bb, cb, sb) {
              const kb = is(bb);
              if (null === kb) return null;
              const Wb = `${He}lookPortMode_${kb}`,
                ab = wk(cb);
              if (ab && sb) return {
                mode: null,
                detail: Wb,
                next: `${He}lookWrenchPickUp`,
                nextState: null
              };
              const Tb = Os(bb),
                Ub = null === Tb ? null : is(Tb);
              return null === Ub ? {
                mode: null,
                detail: Wb,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Wb,
                next: ab ? `${He}lookWrenchNext` : `${He}lookPortWrench`,
                nextState: `${He}lookPortState_${Ub}`
              }
            }(bb, cb, sb);
            if (null !== kb) return kb;
            const Wb = aW(bb, cb, sb);
            return null === Wb.mode && null === Wb.next ? Xe : Wb
          }(bb.blockIdToBlockName(sb), Ub, Ib),
          Vb = this.plan,
          Lb = Hb && Qb ? this.rowsOf(Hb.rootName, Xb) : ne,
          ub = this.snapshot;
        if (!(null === Qb ? !ub.visible : ub.visible && Qb === ub.info && (Yb = eb, hb = ub.tool, Yb === hb || null !== Yb && null !== hb && Yb.key === hb.key && Yb.qU === hb.qU && Yb.needed === hb.needed) && function(bb, cb) {
            return bb === cb || null !== bb && null !== cb && bb.key === cb.key && JSON.stringify([bb.params, bb.keys]) === JSON.stringify([cb.params, cb.keys])
          }(Cb, ub.live) && function(bb, cb) {
            return bb.mode === cb.mode && bb.detail === cb.detail && bb.next === cb.next && bb.nextState === cb.nextState
          }(Nb, ub.wrench) && Fm(Vb, ub.plan) && Lb === ub.atomic)) {
          var Yb, hb;
          this.snapshot = null === Qb ? {
            ...ub,
            visible: !1
          } : {
            info: Qb,
            visible: !0,
            tool: eb,
            live: Cb,
            wrench: Nb,
            plan: Vb,
            atomic: Lb
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = me, this.Jf = 0, this.qU = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(bb, cb, sb) {
        if (null === sb || 0 === cb || !Ub() || !Me(this.resolve(bb, cb).rootName)) return !1;
        const kb = `${sb[0]},${sb[1]},${sb[2]},${cb}`,
          Wb = performance.now();
        return kb === this.afloatKey && Wb - this.afloatAt < Ne ? this.afloat : (this.afloatKey = kb, this.afloatAt = Wb, function(bb, cb) {
          for (const [sb, kb, Wb] of fe) {
            const ab = cb(bb[0] + sb, bb[1] + kb, bb[2] + Wb);
            if (void 0 === ab || null !== ab && !Me(ab)) return !1
          }
          return !0
        }(sb, ((cb, sb, kb) => function(bb, cb, sb, kb) {
          if (!bb.isBlockInLoadedChunk(cb, sb, kb)) return;
          const Wb = bb.getBlockId(cb, sb, kb);
          return 0 === Wb ? null : bb.getMetaInfo(Wb).rootName
        }(bb, cb, sb, kb))))
      }
      liveMoved(bb) {
        var cb;
        const {
          livePos: sb
        } = this;
        return null === bb || bb[0] !== sb[0] || bb[1] !== sb[1] || bb[2] !== sb[2] || (null === (cb = this.live) || void 0 === cb ? void 0 : cb.version()) !== this.liveVersion
      }
      updatePlan(bb) {
        const cb = null === bb ? "" : bb.join(","),
          sb = performance.now();
        if (cb === this.planPos && sb - this.planMs < 250) return !1;
        this.planPos = cb, this.planMs = sb;
        const kb = null === bb ? null : this.planAt([bb[0], bb[1], bb[2]]),
          Wb = !Fm(kb, this.plan);
        return this.plan = kb, Wb
      }
      besideMaker(bb, cb, sb) {
        let {
          info: kb
        } = bb;
        if (null === kb) return null;
        let Wb = this.besideMakerById.get(cb);
        if (void 0 === Wb) {
          const bb = "cryo" === sb ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Wb = {
            ...kb,
            detail: `${le}${bb}`,
            detailItem: null
          }, this.besideMakerById.set(cb, Wb)
        }
        return Wb
      }
      hanging(bb) {
        let {
          info: cb,
          rootName: sb
        } = bb;
        if (null === cb) return null;
        let kb = this.afloatByRoot.get(sb);
        return void 0 === kb && (kb = {
          ...cb,
          detail: `${le}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(sb, kb)), kb
      }
      rowsOf(bb, cb) {
        if (null === cb) return ne;
        const sb = `${bb}|${cb}`;
        let kb = this.rowsByKey.get(sb);
        if (void 0 === kb) {
          const Wb = function(bb, cb) {
            var sb;
            if (!(bb in ic)) return [];
            const kb = null !== (sb = Oc[bb]) && void 0 !== sb ? sb : [],
              Wb = new Map;
            for (const Tb of ra(bb, cb))
              if ((kb.includes(Tb) || wa(Tb.output) && da(Tb.output) > Fb(bb)) && da(Tb.output) <= cb) {
                var ab;
                const bb = null !== (ab = Wb.get(Tb.output)) && void 0 !== ab ? ab : [];
                bb.push(Tb.input), Wb.set(Tb.output, bb)
              } return Sa([...Wb], (bb => {
              let [cb] = bb;
              return -da(cb)
            })).map((bb => {
              let [cb, sb] = bb;
              return {
                output: cb,
                inputs: sb
              }
            }))
          }(bb, cb);
          kb = Wb.length > 0 ? Wb : ne, this.rowsByKey.set(sb, kb)
        }
        return kb
      }
      resolve(bb, cb) {
        const {
          rootId: sb,
          rootName: kb
        } = bb.getMetaInfo(cb), Wb = (0, ms.k)(kb) ? cb : sb;
        let ab = this.byRootId.get(Wb);
        const Tb = Ub();
        if (void 0 === ab || ab.nuclear !== Tb) {
          var Ib;
          const sb = function(bb) {
            return Zk(Te, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb)
          }(kb, bb.blockIdToBlockName(cb));
          ab = {
            info: sb,
            rootName: kb,
            live: null !== sb && !0 === (null === (Ib = this.live) || void 0 === Ib ? void 0 : Ib.handles(kb)),
            nuclear: Tb
          }, this.byRootId.set(Wb, ab)
        }
        return ab
      }
    }
    const Ne = 500;
    const Ve = (0, kb.memo)((function(bb) {
      var cb, sb;
      let {
        store: Wb
      } = bb;
      const {
        t: ab
      } = (0, yW.E)(), [Tb, Ub] = (0, kb.useState)((() => Wb.get()));
      (0, kb.useEffect)((() => (Ub(Wb.get()), Wb.subscribe((() => {
        Ub(Wb.get())
      })))), [Wb]);
      const {
        openInGameMenuName: Ib,
        openEverythingMenuName: Hb,
        isTouchScreen: fb
      } = (0, uW.p)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Mb,
        tool: Xb,
        live: nb,
        wrench: mb,
        atomic: lb
      } = Tb, Qb = Tb.visible && null === Ib && null === Hb;
      if (null === Mb) return null;
      const eb = null !== mb.detail ? ab(mb.detail) : null !== (cb = Tb.plan) && void 0 !== cb && cb.ctrl ? ab("buildAFactory2Game:lookPlanCtrl") : null !== Mb.detail ? ab(Mb.detail, null === Mb.detailItem ? void 0 : {
        item: ab(Mb.detailItem)
      }) : null;
      return (0, Ba.jsxs)("div", {
        className: JW()("Baf2LookTarget", {
          Visible: Qb
        }),
        "aria-hidden": !Qb,
        children: [(0, Ba.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: ab(Mb.name)
        }), null !== Tb.plan && (0, Ba.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ab(Tb.plan.key, {
            kind: ab(Tb.plan.kindKey),
            w: String(Tb.plan.w),
            h: String(Tb.plan.h),
            d: String(Tb.plan.d),
            count: String(Tb.plan.count)
          })
        }), void 0 !== (null === (sb = Tb.plan) || void 0 === sb ? void 0 : sb.why) && (0, Ba.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: ab(Tb.plan.why)
        }), null !== mb.mode && (0, Ba.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ab(mb.mode)
        }), null !== Xb ? (0, Ba.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: ab(Xb.key, {
            item: ab(Xb.needed),
            qU: null === Xb.qU ? "" : ab(Xb.qU)
          })
        }) : null !== nb ? (0, Ba.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ab(nb.key, aH(ab, nb))
        }) : null !== eb && (0, Ba.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: eb
        }), lb.length > 0 && (0, Ba.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ab("buildAFactory2Game:lookAtomicRecipes", {
            list: lb.map((bb => {
              let {
                output: cb,
                inputs: sb
              } = bb;
              const kb = sb.length > 1 ? ` ${ab("buildAFactory2Game:recipeMore",{count:String(sb.length-1)})}` : "";
              return `${ab(aa(sb[0]))}${kb} \u2192 ${ab(aa(cb))}`
            })).join(", ")
          })
        }), null !== mb.next && (0, Ba.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ab(mb.next, {
            state: null === mb.nextState ? "" : ab(mb.nextState),
            use: ab(fb ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Le = sb(38126);
    const ue = [],
      Ye = [
        [0, -1, 0]
      ];

    function he(bb) {
      const cb = [bb];
      for (let sb = 1; sb <= 4; sb++) sb > 1 && cb.push(`${bb}|meta|rot${sb}`), cb.push(`${bb}|meta|rot${sb}|Running`);
      return cb
    }

    function Je(bb, cb) {
      return [Math.floor(bb[0] / cb), Math.floor(bb[1] / cb), Math.floor(bb[2] / cb)]
    }

    function ge(bb, cb, sb) {
      return `${bb},${cb},${sb}`
    }

    function Be(bb) {
      const cb = bb.split("|")[0];
      if (!Hs(cb)) return ue;
      const sb = ic[cb];
      if (cs(sb)) return Ye;
      const kb = JQ(bb);
      return ss(sb) ? [
        [-kb[0], -kb[1], -kb[2]]
      ] : gW(sb) ? function(bb, cb) {
        const sb = bb[0] - 2 * cb[0],
          kb = bb[2] - 2 * cb[2],
          Wb = [];
        for (let ab = -1; ab <= 1; ab++)
          for (let cb = -1; cb <= 1; cb++) Wb.push([sb + ab, bb[1], kb + cb]);
        return Wb
      }([0, 0, 0], kb) : ue
    }
    const te = [.5, .5, .5],
      ye = [.2, .8, .3],
      Pe = [.45, 1, .5];
    class De {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(bb) {
        this.indexed = !0;
        for (const cb of Bc)
          for (const sb of he(cb)) {
            const cb = bb.blockNameToBlockId(sb, !0),
              kb = Be(sb);
            null !== cb && kb.length > 0 && (this.offsetsList.push(kb), this.offsetsIndexById[cb] = this.offsetsList.length)
          }
      }
      onAfterRender(bb, cb) {
        this.indexed || this.index(bb);
        const sb = performance.now();
        if (sb - this.lastCheckMs < 100) return;
        this.lastCheckMs = sb, this.checks++;
        const kb = Qm.e.qm,
          [Wb, ab, Tb] = Je(cb, kb);
        let Ub = !1;
        const Ib = [];
        let Hb = 0;
        for (let fb = Wb - 2; fb <= Wb + 2; fb++)
          for (let cb = ab - 1; cb <= ab + 1; cb++)
            for (let Wb = Tb - 2; Wb <= Tb + 2; Wb++) {
              const ab = Hb++,
                Tb = ge(fb, cb, Wb),
                Mb = bb.getChunkVersion(fb, cb, Wb);
              let Xb = this.chunks.get(Tb);
              null !== Mb ? (Xb || (Xb = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Tb, Xb)), Xb.seenAt = this.checks, Xb.checkedVersion !== Mb && (Xb.checkedVersion = Mb, Ub = !0), Xb.scannedVersion !== Mb && sb - Xb.scannedAt >= 500 && Ib.push({
                slot: ab,
                entry: Xb,
                origin: [fb * kb, cb * kb, Wb * kb]
              })) : (Ub ||= void 0 !== Xb, this.chunks.delete(Tb))
            }
        this.scanDue(bb, Ib) && (Ub = !0);
        for (const [fb, Mb] of this.chunks) Mb.seenAt !== this.checks && (Ub ||= Mb.machines.length > 0, this.chunks.delete(fb));
        for (const fb of this.chunks.values())
          for (const [cb, sb, kb] of fb.cellChunks)(Math.abs(cb - Wb) > 2 || Math.abs(sb - ab) > 1 || Math.abs(kb - Tb) > 2) && this.watchCellChunk(bb, cb, sb, kb) && (Ub = !0);
        for (const [fb, Mb] of this.cellChunks) Mb.seenAt !== this.checks && this.cellChunks.delete(fb);
        Ub && this.refresh(bb)
      }
      dispose(bb) {
        this.clearMeshes(bb), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(bb, cb) {
        const sb = Math.max(cb.findIndex((bb => {
          let {
            slot: cb
          } = bb;
          return cb >= this.scanFrom
        })), 0);
        let kb = 96;
        for (let Wb = 0; Wb < cb.length; Wb++) {
          const {
            slot: ab,
            entry: Tb,
            origin: Ub
          } = cb[(sb + Wb) % cb.length];
          if (kb -= this.scan(bb, Tb, Ub), kb <= 0) {
            this.scanFrom = ab + 1;
            break
          }
        }
        return cb.length > 0
      }
      scan(bb, cb, sb) {
        let [kb, Wb, ab] = sb;
        const Tb = Qm.e.qm,
          Ub = this.hits;
        Ub.length = 0;
        const Ib = bb.scanBlocks(kb, Wb, ab, kb + Tb, Wb + Tb, ab + Tb, this.offsetsIndexById, Ub),
          Hb = [];
        for (let fb = 0; fb < Ub.length; fb += 4) Hb.push({
          pos: [Ub[fb], Ub[fb + 1], Ub[fb + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[Ub[fb + 3]] - 1]
        });
        return cb.machines = Hb, cb.cellChunks = function(bb, cb) {
          const sb = new Set,
            kb = [];
          for (const {
              pos: Wb,
              offsets: ab
            }
            of bb)
            for (const [bb, Tb, Ub] of ab) {
              const ab = Je([Wb[0] + bb, Wb[1] + Tb, Wb[2] + Ub], cb),
                Ib = ge(...ab);
              sb.has(Ib) || (sb.add(Ib), kb.push(ab))
            }
          return kb
        }(Hb, Tb), cb.scannedVersion = cb.checkedVersion, cb.scannedAt = performance.now(), Math.max(Ib, 1)
      }
      watchCellChunk(bb, cb, sb, kb) {
        const Wb = ge(cb, sb, kb),
          ab = bb.getChunkVersion(cb, sb, kb),
          Tb = this.cellChunks.get(Wb);
        return null === ab ? this.cellChunks.delete(Wb) : (null === Tb || void 0 === Tb ? void 0 : Tb.version) === ab ? (Tb.seenAt = this.checks, !1) : (this.cellChunks.set(Wb, {
          version: ab,
          seenAt: this.checks
        }), !0)
      }
      refresh(bb) {
        const cb = function(bb, cb) {
            const sb = new Set,
              kb = [];
            for (const {
                pos: Wb,
                offsets: ab
              }
              of bb)
              for (const [bb, Tb, Ub] of ab) {
                const ab = Wb[0] + bb,
                  Ib = Wb[1] + Tb,
                  Hb = Wb[2] + Ub,
                  fb = `${ab},${Ib},${Hb}`;
                sb.has(fb) || (sb.add(fb), cb(ab, Ib, Hb) && kb.push([ab, Ib, Hb]))
              }
            return kb
          }([...this.chunks.values()].flatMap((bb => bb.machines)), ((cb, sb, kb) => bb.isBlockInLoadedChunk(cb, sb, kb) && 0 === bb.getBlockId(cb, sb, kb))),
          sb = cb.join(";");
        sb !== this.shownKey && (this.shownKey = sb, this.clearMeshes(bb), cb.length > 0 && (this.meshes = [this.build(bb, cb, !1), this.build(bb, cb, !0)]))
      }
      build(bb, cb, sb) {
        const kb = cb[0],
          Wb = [],
          ab = [];
        for (const [Tb, Ub, Ib] of cb)(0, Le.d)(Wb, ab, [Tb - kb[0] + .5, Ub - kb[1] + .5, Ib - kb[2] + .5], te, sb);
        return bb.createGameMesh({
          positions: Wb,
          indices: ab
        }, {
          rgb: sb ? Pe : ye,
          alpha: .4
        }, kb)
      }
      clearMeshes(bb) {
        for (const cb of this.meshes) bb.disposeGameMesh(cb);
        this.meshes = []
      }
    }
    const Ee = 1 / .6,
      ie = 200,
      Oe = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Ge = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Ke = 2 * Math.PI / 3;
    class Ze {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe;
        this.style = bb, this.particles = null, this.points = new Float32Array(800), this.budget = ie, this.lastMs = 0
      }
      static blade() {
        return new Ze(Ge)
      }
      mN(bb, cb) {
        const sb = Math.min(cb.arcStruck, cb.arcPoints.length);
        this.draw(bb, [cb.arcFrom, ...cb.arcPoints], cb.arcPoints.slice(0, sb))
      }
      onBlade(bb, cb) {
        const [sb, kb, Wb] = cb.bladeCentre, [ab, Tb] = cb.bladeFacing, Ub = sb - 1.5 * ab, Ib = Wb - 1.5 * Tb, Hb = Math.atan2(Tb, ab), fb = [];
        for (let Mb = 0; Mb <= 8; Mb++) {
          const bb = Hb - Ke / 2 + Ke * Mb / 8;
          fb.push([Ub + 2.5 * Math.cos(bb), kb, Ib + 2.5 * Math.sin(bb)])
        }
        this.draw(bb, fb, cb.bladeStruck)
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null
      }
      draw(bb, cb, sb) {
        if (!bb.particlesEnabled() || cb.length < 2) return;
        const kb = performance.now();
        this.budget = Math.min(ie, this.budget + (kb - this.lastMs) / 1e3 * ie), this.lastMs = kb;
        const Wb = [];
        let ab = 0,
          Tb = cb[0];
        for (const eb of cb.slice(1)) {
          const bb = Math.min(48, Math.round(Math.hypot(eb[0] - Tb[0], eb[1] - Tb[1], eb[2] - Tb[2]) * this.style.perBlock));
          Wb.push([Tb, eb, bb]), ab += bb, Tb = eb
        }
        const Ub = sb.length;
        ab += 10 * Ub;
        const Ib = ab > this.budget ? this.budget / ab : 1;
        if (0 === ab || Ib * ab < 1) return;
        const Hb = cb[0],
          [fb, Mb, Xb] = Hb,
          nb = this.points;
        let mb = 0;
        const lb = (bb, cb, sb, kb) => {
          const Wb = 4 * mb;
          nb[Wb] = bb - fb, nb[Wb + 1] = cb - Mb, nb[Wb + 2] = sb - Xb, nb[Wb + 3] = kb, mb++
        };
        Wb.forEach(((bb, cb) => {
          let [sb, kb, Wb] = bb;
          const ab = Math.min(Math.floor(Wb * Ib), ie - mb),
            Tb = Math.hypot(kb[0] - sb[0], kb[1] - sb[1], kb[2] - sb[2]),
            Ub = 0 === cb && Tb > 0 ? Math.min(.5, .1 * Tb) / Tb : 0;
          for (let Ib = 0; Ib < ab; Ib++) {
            const bb = Ub + (Ib + .5) / ab * (1 - Ub);
            lb(sb[0] + (kb[0] - sb[0]) * bb, sb[1] + (kb[1] - sb[1]) * bb, sb[2] + (kb[2] - sb[2]) * bb, .15)
          }
        }));
        const Qb = Math.floor(10 * Ib);
        for (let eb = 0; eb < Ub; eb++) {
          const [bb, cb, kb] = sb[eb];
          for (let sb = 0; sb < Qb && mb < ie; sb++) lb(bb, cb, kb, 2.5)
        }
        this.budget -= mb, this.particles ??= bb.createParticles(function(bb) {
          const [cb, sb] = bb.colours;
          return {
            texture: "square_particle",
            GM: 400,
            minLifeTime: bb.life[0] / Ee,
            maxLifeTime: bb.life[1] / Ee,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [cb[0], cb[1], cb[2], 1],
              maxColor: [sb[0], sb[1], sb[2], 1]
            }, {
              timeFraction: 1,
              minColor: [cb[0], cb[1], cb[2], 0],
              maxColor: [sb[0], sb[1], sb[2], 0]
            }],
            blendMode: KU.f.Add
          }
        }(this.style), {
          pos: Hb
        }), this.particles.emitPoints(Hb, nb, mb)
      }
    }
    const ze = new Set(["Sky Spring"]);

    function qe(bb, cb, sb) {
      const kb = bb.split("|")[0];
      return "Air" !== cb || sb || ! function(bb) {
        const cb = bb.split("|")[0];
        return void 0 !== Ts[cb] || ze.has(cb)
      }(kb) ? null : bb
    }
    class de {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(bb) {
        const cb = bb - this.lastTapAt >= 300;
        return this.lastTapAt = bb, cb
      }
    }
    class Ae {
      constructor() {
        this.presses = new de, this.predicted = null
      }
      tap(bb, cb) {
        const sb = this.presses.isNewPress(cb);
        return sb && (this.predicted = {
          station: bb,
          at: cb
        }), sb
      }
      consumeServerOpen(bb, cb) {
        const sb = this.predicted;
        return !(null === sb || sb.station !== bb || cb - sb.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class we {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(bb, cb) {
        return bb && (this.thrustAt = cb), cb - this.thrustAt < 200
      }
    }
    const re = [.1, .05, .1],
      oe = {
        texture: "effect_5",
        GM: Math.ceil(48),
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
        blendMode: KU.f.OneOne
      };
    class Se {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new we, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      mN(bb, cb) {
        for (const [sb, kb] of cb.baf2JetFlames) bb.isLocalPlayer(sb) || (kb ? this.lit.add(sb) : this.lit.delete(sb))
      }
      onAfterRender(bb, cb) {
        const sb = performance.now(),
          kb = this.hold.lit(this.selfThrusting(bb, cb), sb);
        for (const [Wb, ab] of this.flames)(Wb === cb ? kb : this.lit.has(Wb)) || this.setEmitting(ab, !1), Wb === cb || bb.getPositionView(Wb) ? !ab.emitting && sb - ab.offAt >= 1300 && (ab.particles.stop(), this.flames.delete(Wb)) : (ab.particles.dispose(), this.flames.delete(Wb), this.lit.delete(Wb));
        kb && this.draw(bb, cb, cb);
        for (const Wb of this.lit) this.draw(bb, cb, Wb)
      }
      dispose() {
        for (const bb of this.flames.values()) bb.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(bb, cb) {
        var sb;
        const kb = bb.getLocalPlayerMovement();
        return !!kb && (null !== (Wb = {
          option: null !== (sb = bb.getClientOption(cb, "jumpHoldThrust")) && void 0 !== sb ? sb : null,
          jumping: kb.jumpHeld,
          onGround: kb.onGround,
          alive: bb.isAlive(cb)
        }).option && Wb.option.maxUpSpeed >= 0 && Wb.jumping && !Wb.onGround && Wb.alive);
        var Wb
      }
      draw(bb, cb, sb) {
        var kb, Wb;
        const ab = this.pos;
        if (!bb.readDrawnPosition(sb, ab)) return;
        const Tb = bb.readDrawnPosition(cb, this.camera) ? this.camera : ab;
        if (!((ab[0] - Tb[0]) ** 2 + (ab[1] - Tb[1]) ** 2 + (ab[2] - Tb[2]) ** 2 < 1600) || !bb.particlesEnabled()) {
          const bb = this.flames.get(sb);
          return void(bb && this.setEmitting(bb, !1))
        }
        const Ub = null !== (kb = this.flames.get(sb)) && void 0 !== kb ? kb : this.create(bb, sb, ab),
          Ib = null !== (Wb = bb.getDrawnHeading(sb)) && void 0 !== Wb ? Wb : 0,
          Hb = this.at;
        Hb[0] = ab[0] - .35 * Math.sin(Ib), Hb[1] = ab[1] + 1.05, Hb[2] = ab[2] - .35 * Math.cos(Ib), Ub.particles.moveTo(Hb), this.setEmitting(Ub, !0)
      }
      setEmitting(bb, cb) {
        bb.emitting !== cb && (bb.emitting = cb, cb || (bb.offAt = performance.now()), bb.particles.setEmitRate(cb ? 60 : 0))
      }
      create(bb, cb, sb) {
        const kb = {
          particles: bb.createParticles(oe, {
            pos: sb,
            half: re
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(cb, kb), kb
      }
    }

    function Re(bb) {
      return "Reactor Frame" === ak("reactor", bb)
    }

    function ve(bb) {
      return zs("reactor", bb) && !Re(bb) && (bb.startsWith("Reactor Glass") || bb.startsWith("Reactor Port"))
    }
    const Fe = "baf2Goal";
    class xe {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [GW.j.subscribe("setDirectionArrow", (bb => {
          let {
            id: cb,
            position: sb
          } = bb;
          cb === Fe && (this.goal = sb, this.checkedAt = -1 / 0)
        })), GW.j.subscribe("clearDirectionArrow", (bb => {
          let {
            id: cb
          } = bb;
          null !== cb && cb !== Fe || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const bb of this.subs) GW.j.unsubscribe(bb)
      }
      sideOf(bb, cb, sb, kb) {
        const Wb = this.goal;
        if (!Wb) return 0;
        sb - this.checkedAt > 1e3 && (this.checkedAt = sb, this.open = function(bb, cb) {
          const [sb, kb, Wb] = bb.map(Math.floor);
          if (!ve(cb(sb, kb, Wb))) return null;
          for (const [ab, Tb] of [
              [1, 0],
              [0, 1]
            ]) {
            const bb = cb(sb + ab, kb, Wb + Tb),
              Ub = cb(sb - ab, kb, Wb - Tb);
            if (Re(Ub) && ve(bb)) return [ab, 0, Tb];
            if (Re(bb) && ve(Ub)) return [0 - ab, 0, 0 - Tb]
          }
          return null
        }(Wb, ((cb, sb, kb) => bb.blockIdToBlockName(bb.getBlockId(cb, sb, kb)))));
        const ab = this.open;
        if (!ab) return 0;
        const Tb = kb(Wb);
        if (Math.abs(Tb.x - cb.x) > .05 || Math.abs(Tb.y - cb.y) > .05) return 0;
        const Ub = kb([Wb[0] + ab[0], Wb[1], Wb[2] + ab[2]]).x - Tb.x;
        return Math.abs(Ub) < .3 ? 0 : Ub > 0 ? 1 : -1
      }
    }
    class je {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new xe, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Em = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.pC = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((bb => {
          for (const cb of bb) cb.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(cb.target, cb.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Em || this.clear()
        }, window.addEventListener("resize", this.pC)
      }
      onAfterRender(bb, cb) {
        var sb;
        this.api = bb, this.project = null !== (sb = null === cb || void 0 === cb ? void 0 : cb.projectWorldPosToScreenPos) && void 0 !== sb ? sb : null, this.queued || this.Em || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Em = !0;
        for (const bb of this.moved.keys()) bb.style.transform = "";
        this.moved.clear();
        for (const bb of this.sideLabels.keys()) bb.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.pC)
      }
      clear() {
        for (const ab of this.moved.keys()) ab.isConnected || this.moved.delete(ab);
        for (const ab of this.sideLabels.keys()) ab.isConnected || this.sideLabels.delete(ab);
        if (0 === this.arrows.length) return;
        const bb = performance.now(),
          cb = bb - this.refreshedAt > 1e3;
        cb && (this.refreshedAt = bb, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const sb = this.trackerBox(),
          kb = this.barsBox(),
          Wb = this.toastBox(cb);
        (sb || kb || Wb) && cb && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let ab = 0; ab < this.arrows.length; ab++) {
          const cb = this.arrows[ab];
          this.labelOffsets.set(cb, this.runLabelAside(cb, bb));
          const Tb = (sb ? this.shiftLeftOf(cb, sb) : 0) || this.shiftOnScreen(cb),
            Ub = Math.min(kb ? this.liftAbove(cb, kb, Tb) : 0, Wb ? this.liftAbove(cb, Wb, Tb) : 0),
            Ib = this.moved.get(cb);
          if (0 !== Tb || 0 !== Ub) {
            const bb = 0 === Ub ? `translateX(${Tb}px)` : `translate(${Tb}px, ${Ub}px)`;
            Ib !== bb && (cb.style.transform = bb, this.moved.set(cb, bb))
          } else void 0 !== Ib && (cb.style.transform = "", this.moved.delete(cb))
        }
      }
      trackerBox() {
        var bb, cb;
        const sb = null !== (bb = this.tracker) && void 0 !== bb && bb.isConnected ? this.tracker : null !== (cb = this.trackers[0]) && void 0 !== cb ? cb : null;
        if (sb !== this.tracker && this.watch(sb), this.boxStale && sb) {
          var kb, Wb, ab;
          this.boxStale = !1;
          const bb = sb.closest(".NoRoom") ? null : sb.getBoundingClientRect(),
            cb = bb && bb.width > 0 ? null === (kb = this.hud) || void 0 === kb ? void 0 : kb.getBoundingClientRect() : void 0,
            Tb = bb && cb ? Math.max(bb.top, cb.top) : null !== (Wb = null === bb || void 0 === bb ? void 0 : bb.top) && void 0 !== Wb ? Wb : 0,
            Ub = bb && cb ? Math.min(bb.bottom, cb.bottom) : null !== (ab = null === bb || void 0 === bb ? void 0 : bb.bottom) && void 0 !== ab ? ab : 0;
          this.box = bb && bb.width > 0 && Ub > Tb ? {
            left: bb.left,
            top: Tb,
            right: bb.right,
            bottom: Ub
          } : null
        }
        return sb ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var bb;
          this.barsStale = !1;
          const cb = null === (bb = this.statBars[0]) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
          this.bars = cb && cb.width > 0 && cb.height > 0 ? {
            left: cb.left,
            top: cb.top,
            right: cb.right,
            bottom: cb.bottom
          } : null
        }
        return this.bars
      }
      toastBox(bb) {
        var cb;
        const sb = null !== (cb = this.toasts[0]) && void 0 !== cb ? cb : null;
        if (sb !== this.toastEl || bb && sb) {
          this.toastEl = sb;
          const bb = null === sb || void 0 === sb ? void 0 : sb.getBoundingClientRect();
          this.toast = bb && bb.width > 0 && bb.height > 0 ? {
            left: bb.left,
            top: bb.top,
            right: bb.right,
            bottom: bb.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(bb, cb, sb) {
        var kb;
        const Wb = this.anchorOf(bb);
        if (!Wb) return 0;
        const ab = Wb.x + sb + (null !== (kb = this.labelOffsets.get(bb)) && void 0 !== kb ? kb : 0),
          {
            halfWidth: Tb,
            labelled: Ub
          } = this.extentOf(bb),
          Ib = Wb.y + this.em * (Ub ? 6.2 : 3);
        return Ib < cb.top - 6 || ab + Tb < cb.left - 6 || ab - Tb > cb.right + 6 ? 0 : cb.top - 6 - Ib
      }
      watch(bb) {
        var cb, sb;
        this.tracker && this.sizes.unobserve(this.tracker), null === (cb = this.hud) || void 0 === cb || cb.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = bb, this.hud = null !== (sb = null === bb || void 0 === bb ? void 0 : bb.closest(".Baf2QuestHud")) && void 0 !== sb ? sb : null, this.box = null, this.boxStale = !0, bb && this.sizes.observe(bb), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(bb, cb) {
        var sb;
        const kb = this.anchorOf(bb);
        if (!kb) return 0;
        const {
          y: Wb
        } = kb, ab = kb.x + (null !== (sb = this.labelOffsets.get(bb)) && void 0 !== sb ? sb : 0), Tb = this.em, {
          halfWidth: Ub,
          labelled: Ib
        } = this.extentOf(bb), Hb = Wb - Tb, fb = ab + Ub;
        return Wb + Tb * (Ib ? 6.2 : 3) < cb.top || Hb > cb.bottom || fb < cb.left - 6 || ab - Ub > cb.right ? 0 : Math.max(cb.left - 6 - fb, 6 - (ab - Ub))
      }
      shiftOnScreen(bb) {
        var cb;
        const sb = this.anchorOf(bb);
        if (!sb) return 0;
        const {
          halfWidth: kb
        } = this.extentOf(bb), Wb = sb.x + (null !== (cb = this.labelOffsets.get(bb)) && void 0 !== cb ? cb : 0), ab = Wb + kb - (this.innerWidth - 6);
        return ab > 0 ? -ab : Math.max(0, 6 - (Wb - kb))
      }
      runLabelAside(bb, cb) {
        var sb;
        let kb = null;
        for (let Tb = 0; Tb < bb.children.length; Tb++) bb.children[Tb].classList.contains("DirectionArrowLabel") && (kb = bb.children[Tb]);
        if (!kb) return 0;
        const Wb = bb.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(bb) : null,
          ab = (Wb && this.api ? this.side.sideOf(this.api, {
            x: Wb.x / this.innerWidth * 100,
            y: Wb.y / this.innerHeight * 100
          }, cb, this.project) : 0) * this.halfWidthOf(kb);
        return ab !== (null !== (sb = this.sideLabels.get(kb)) && void 0 !== sb ? sb : 0) && (kb.style.transform = 0 === ab ? "" : `translateX(-50%) translateX(${ab}px)`, 0 === ab ? this.sideLabels.delete(kb) : this.sideLabels.set(kb, ab)), ab
      }
      extentOf(bb) {
        let cb = this.em,
          sb = !1;
        for (let kb = 0; kb < bb.children.length; kb++) {
          const Wb = bb.children[kb],
            ab = Wb.classList.contains("DirectionArrowLabel");
          sb ||= ab, (ab || Wb.classList.contains("DirectionArrowDistance")) && (cb = Math.max(cb, this.halfWidthOf(Wb)))
        }
        return {
          halfWidth: cb,
          labelled: sb
        }
      }
      halfWidthOf(bb) {
        let cb = this.halfWidths.get(bb);
        return void 0 === cb && (cb = bb.offsetWidth / 2, this.halfWidths.set(bb, cb), this.sizes.observe(bb), this.labels.add(bb)), cb
      }
      forgetGoneLabels() {
        for (const bb of this.labels) bb.isConnected || (this.sizes.unobserve(bb), this.halfWidths.delete(bb), this.labels.delete(bb))
      }
      anchorOf(bb) {
        const cb = bb.style.translate,
          sb = this.anchors.get(bb);
        if (sb && sb.translate === cb && sb.innerWidth === this.innerWidth && sb.innerHeight === this.innerHeight) return sb;
        const kb = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(cb);
        if (!kb) return null;
        const Wb = {
          translate: cb,
          x: parseFloat(kb[1]) / 100 * this.innerWidth,
          y: parseFloat(kb[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(bb, Wb), Wb
      }
    }
    const pe = "Baf2ArrowText";

    function bC(bb, cb) {
      const sb = bb.rows.find((bb => bb.current));
      return Eb(bb.tutorial) && null !== sb && void 0 !== sb && sb.item && SW(sb) && tb(sb.item).includes(cb) ? sb.item : null
    }
    const cC = new class {
      constructor(bb) {
        this.select = bb, this.picks = new Map
      }
      open(bb, cb, sb) {
        const kb = bC(cb, bb);
        null !== kb && this.Wn(bb, kb, sb)
      }
      follow(bb, cb) {
        if (Ub())
          for (const [sb, {
              item: kb,
              had: Wb
            }] of this.picks) {
            const ab = bC(bb, sb);
            ab !== kb && (null !== ab && cb(kb) > Wb ? this.Wn(sb, ab, cb) : this.picks.delete(sb))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Wn(bb, cb, sb) {
        this.picks.set(bb, {
          item: cb,
          had: sb(cb)
        }), this.select(bb, cb)
      }
    }(KW.r);

    function sC(bb) {
      return cb => {
        let sb = 0;
        for (const kb of bb.getInventoryItems())(null === kb || void 0 === kb ? void 0 : kb.name) === cb && (sb += null === kb.amount ? 1 : Math.max(kb.amount, 0));
        return sb
      }
    }

    function kC(bb, cb, sb, kb) {
      bb.getClientOption(cb, "canCraft") && "inventory" !== uW.d.get("openInGameMenuName") && (cC.open(sb, kb.get(), sC(bb)), GW.j.QQ("toggleMenu", `inventory|${sb}`))
    }
    let WC = null,
      aC = !1;

    function TC(bb) {
      const cb = Ja();
      bb === WC && cb === aC || (WC = bb, aC = cb, (0, KW.v)(function(bb, cb) {
        const sb = new Map;
        for (let kb = bb + 1; kb <= Wb.length; kb++) {
          const Wb = Ra(kb, bb, cb);
          if (Wb)
            for (const cb of eb(kb).unlocks) sb.set(cb, {
              ...Wb,
              stepsAway: kb - bb
            })
        }
        return sb
      }(bb, cb)))
    }

    function UC() {
      return (0, KW.x)(Sa(Object.keys(Bb), da)), () => {
        (0, KW.x)([])
      }
    }
    const IC = "buildAFactory2Game:",
      HC = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      fC = {
        on: `${IC}tutorialButtonOn`,
        hud: `${IC}tutorialButtonHud`,
        off: `${IC}tutorialButtonOff`
      },
      MC = {
        on: `${IC}tutorialPickedOn`,
        hud: `${IC}tutorialPickedHud`,
        off: `${IC}tutorialPickedOff`
      };

    function XC(bb, cb, sb) {
      let kb = null,
        Wb = () => {};
      const ab = ab => {
        var Tb;
        let {
          tutorial: Ub,
          tutorialKnown: Ib
        } = ab;
        (null === (Tb = kb) || void 0 === Tb ? void 0 : Tb.tutorial) === Ub && kb.tutorialKnown === Ib || (kb = {
          tutorial: Ub,
          tutorialKnown: Ib
        }, Wb = (0, VW.s)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: fC[Ub],
          icon: {
            kind: "icon",
            name: HC[Ub]
          },
          iconOnly: !0,
          disabled: !Ib,
          className: "Baf2TutorialButton",
          onClick: () => {
            var kb;
            (kb => {
              const Wb = cb.setTutorial(kb);
              bb.send(`baf2tutorial ${kb} ${Wb}`), sb.show({
                baf2ToastText: [(0, ib.ke)({
                  translationKey: MC[kb]
                }, ib.L.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((kb = cb.get().tutorial, Db[(Db.indexOf(kb) + 1) % Db.length]))
          }
        }))
      };
      ab(cb.get());
      const Tb = GW.j.subscribe(ZW, ab);
      return () => {
        GW.j.unsubscribe(Tb), Wb()
      }
    }

    function nC(bb, cb, sb) {
      var kb, Wb;
      const ab = bb.getTargetedBlock();
      if (!ab || ! function(bb, cb, sb) {
          if ("Chest" !== cb) return !1;
          const kb = bb.split("|")[0];
          if (!Hs(kb) || 0 === ic[kb].outputSlots.length) return !1;
          const Wb = JQ(bb);
          return sb[0] === Wb[0] && sb[1] === Wb[1] && sb[2] === Wb[2]
        }(sb, null === (kb = bb.Xcb(cb)) || void 0 === kb ? void 0 : kb.name, ab.normal)) return !1;
      const [Tb, Ub, Ib] = ab.LQ, Hb = bb.getBlockId(Tb, Ub, Ib);
      return 0 === Hb || !0 === (null === (Wb = Pb.g[Hb]) || void 0 === Wb ? void 0 : Wb.canBePlacedOver)
    }
    var mC = sb(36359);
    const lC = new Set(ls.c);
    class QC {
      constructor(bb) {
        this.toasts = bb, this.lastAt = -1 / 0
      }
      onAltAction(bb, cb, sb) {
        const kb = bb.getTargetedBlock();
        if (!kb || function(bb) {
            const cb = bb.split("|")[0];
            return Hs(cb) || null !== Jk(cb) || Jb(cb) || ls.c.includes(cb)
          }(sb) && !lC.has(sb.split("|")[0])) return;
        const Wb = bb.Xcb(cb);
        if (!Wb || !lC.has(Wb.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const ab = Wb.typeObj.id,
          [Tb, Ub, Ib] = kb.LQ,
          Hb = bb.getBlockId(Tb, Ub, Ib),
          fb = Pb.g[Hb];
        (0 === Hb || null !== fb && void 0 !== fb && fb.Nn || null !== fb && void 0 !== fb && fb.canBePlacedOver) && bb.isSolidToPlayerBlockId(ab) && bb.canModifyBlockAt(Tb, Ub, Ib) && bb.ybb(Tb, Ub, Ib, ab) && !bb.ybb(Tb, Ub, Ib, ab, cb) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, ib.ke)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, ib.L.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class eC {
      constructor(bb) {
        this.show = bb, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(bb, cb, sb) {
        var kb;
        if (!cb) return this.started = null, void this.gatedThisHold.clear();
        if (!bb) return void(this.started = null);
        const Wb = `${bb.x},${bb.y},${bb.z},${bb.qU}`;
        if (Wb === this.started) return;
        this.started = Wb;
        const ab = zk(bb.y) ? Ue(bb.block, bb.qU, bb.level) : null;
        if (null === ab || this.gatedThisHold.has(Wb)) return;
        this.gatedThisHold.add(Wb);
        const Tb = bb.block.split("|")[0];
        sb - (null !== (kb = this.hintedAt.get(Tb)) && void 0 !== kb ? kb : -1 / 0) < 5e3 || (this.hintedAt.set(Tb, sb), this.show({
          baf2ToastText: Ie(ab, bb.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var CC = sb(37);

    function NC(bb, cb) {
      const sb = [...bb.baf2CoreBankPaused];
      for (const [Wb] of bb.baf2CoreBanked) sb.push(Wb);
      for (const Tb of Wb) {
        for (const {
            item: bb
          }
          of Tb.cost) sb.push(bb);
        for (const bb of Tb.newDeposits) sb.push(bb.block);
        for (const bb of Tb.unlocks) sb.push(bb, yb(bb));
        Tb.reward && sb.push(Tb.reward);
        for (const {
            item: bb
          }
          of null !== (kb = null === (ab = Tb.charge) || void 0 === ab ? void 0 : ab.items) && void 0 !== kb ? kb : []) {
          var kb, ab;
          sb.push(bb)
        }
      }
      return {
        message: bb,
        itemNames: cb([...new Set(sb)])
      }
    }
    const VC = "baf2MultiblockGuide";
    const LC = new Map;
    const uC = function(bb, cb, sb, Wb) {
      let {
        localPlayerId: ab
      } = Wb;
      const Tb = new CU,
        Ub = new sn,
        Hb = new Hn,
        fb = new Un(Hb),
        Mb = (bb, cb) => {
          cb ? fb.observe(bb) : fb.unobserve(bb)
        },
        Xb = new Tn,
        nb = new nn(Mb),
        mb = bb => nb.covers(bb),
        lb = new On;
      let Qb;
      const eb = new dT((bb => {
          Qb.sendCommand(bb)
        })),
        Cb = () => {
          eb.send("baf2questbook")
        },
        Nb = bb => function(bb, cb, sb) {
          const kb = {};
          for (const Wb of sb) {
            let sb = LC.get(Wb);
            void 0 === sb && (sb = bb.getItemStat(cb, Wb, "displayName"), LC.set(Wb, sb)), kb[Wb] = sb
          }
          return kb
        }(Qb, ab, bb),
        Vb = new dW(Cb),
        Lb = new Rn((() => uW.d.get("loadingOverlayVisible"))),
        ub = new pn,
        Yb = new QC(Lb),
        hb = new eC((bb => {
          Lb.show(bb, bb.baf2ToastMs)
        })),
        gb = new Im(Mb),
        Bb = new OQ(gb),
        tb = new gT,
        yb = new We,
        Db = new WU,
        Eb = new lm({
          read: () => !1 !== CC.h.getItem(VC),
          write: bb => {
            CC.h.setItem(VC, bb)
          }
        }),
        Gb = new Am(Eb),
        Kb = new om(Eb),
        Zb = new ml(Eb, (bb => function(bb, cb) {
          const sb = cI(cb.w, cb.h, cb.d),
            kb = new Uint8Array(sb);
          for (let Wb = 0; Wb < sb; Wb++) {
            const sb = Km(bb, bk(cb, Wk(cb, Wb)));
            kb[Wb] = null === sb ? 0 : xU(sb)
          }
          return kb
        }(Qb, bb)), al(eb)),
        zb = new ll(Eb, al(eb)),
        qb = new Xl,
        db = (bb, cb) => {
          let [sb, kb, Wb] = bb;
          qb.answered(cb) || Lb.show({
            baf2ToastText: [(0, ib.ke)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: sb,
                h: kb,
                d: Wb
              }
            }, ib.L.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      Zb.onSizeNotTaken(db), zb.onSizeNotTaken(db);
      const rb = new Nl,
        ob = new pl(Eb),
        Sb = new cQ,
        vb = new XQ(Sb),
        Fb = new YQ,
        xb = new GQ,
        pb = new SQ(xb),
        bc = new ke(xb),
        cc = xb.lookSource(),
        sc = new Ce({
          handles: bb => cc.handles(bb) || bb === Ob,
          line: (bb, cb) => bb === Ob ? function(bb, cb, sb) {
            var kb;
            const Wb = wb(null === (kb = cb.at(sb)) || void 0 === kb ? void 0 : kb.item);
            return null === Wb ? {
              key: `${le}lookFarmEmpty`
            } : {
              key: bb.blockIdToBlockName(bb.getBlockId(sb[0], sb[1], sb[2])).endsWith("|Running") ? `${le}lookFarmRunning` : `${le}lookFarmWaiting`,
              keys: {
                mob: Ab(Wb)
              }
            }
          }(Qb, gb, cb) : cc.line(bb, cb),
          version: () => cc.version() + gb.version()
        }, (bb => Rm(Eb.all(), bb, (bb => Km(Qb, bb)))), (() => Vb.get().tier)),
        kc = new Kl,
        Wc = new De,
        ac = new Ze,
        Tc = Ze.blade(),
        Uc = new Se,
        Ic = new sm,
        Hc = new je,
        fc = new Ae,
        Xc = new de;
      let nc = -1 / 0,
        mc = 0,
        lc = -1 / 0,
        Qc = -1 / 0;
      const ec = () => {
          eb.send("baf2islandsclose"), Qc = Date.now()
        },
        Cc = [];

      function Nc(bb) {
        var cb, sb, kb, Wb, ab, Tb, Ib;
        "core" === (null === (cb = Ub.get()) || void 0 === cb ? void 0 : cb.kind) && "core" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && eb.send("baf2coreclose"), "power" === (null === (sb = Ub.get()) || void 0 === sb ? void 0 : sb.kind) && "power" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && eb.send("baf2powerclose"), "water" === (null === (kb = Ub.get()) || void 0 === kb ? void 0 : kb.kind) && "water" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && eb.send(jb.u), "terminal" === (null === (Wb = Ub.get()) || void 0 === Wb ? void 0 : Wb.kind) && "terminal" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && eb.send("baf2terminalclose"), "islands" === (null === (ab = Ub.get()) || void 0 === ab ? void 0 : ab.kind) && "islands" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && ec();
        const Hb = xb.getStatus();
        "collider" === (null === (Tb = Ub.get()) || void 0 === Tb ? void 0 : Tb.kind) && "collider" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Hb && eb.send(ZI(Hb, "close"));
        const fb = bb => "reactor" === bb || "battery" === bb;
        if (fb(null === (Ib = Ub.get()) || void 0 === Ib ? void 0 : Ib.kind) && !fb(null === bb || void 0 === bb ? void 0 : bb.kind)) {
          var Mb, Xb, nb;
          const bb = "reactor" === (null === (Mb = Ub.get()) || void 0 === Mb ? void 0 : Mb.kind) ? null === (Xb = Zb.get()) || void 0 === Xb ? void 0 : Xb.status.baf2RxAt : null === (nb = zb.get()) || void 0 === nb ? void 0 : nb.status.baf2BatAt;
          bb && eb.send(Mc(bb, "close"))
        }
        "quests" === (null === bb || void 0 === bb ? void 0 : bb.kind) && Cb(), Ub.set(bb), null === bb && ub.release()
      }

      function Vc() {
        (0, LW.e)(), Nc(null)
      }
      let Lc = new Set,
        uc = !1;
      const Yc = {
        onCreate: bb => {
          Qb = bb, Qb.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const cb of Bc) {
            const bb = ic[cb].inputSlots ? iU(Tb) : PU(cb, Tb, tb, eb);
            Cc.push((0, NW.f)(cb, bb))
          }
          Cc.push((0, LW.s)((0, kb.createElement)(kb.Fragment, null, (0, kb.createElement)(en, {
            controller: nb
          }), (0, kb.createElement)(Mm, {
            store: gb
          }), (0, kb.createElement)(Ve, {
            store: sc
          }), (0, kb.createElement)(rn, {
            store: Vb
          }), (0, kb.createElement)(xn, {
            store: Lb
          }), (0, kb.createElement)(bm, {
            store: ub
          }), (0, kb.createElement)(Wm, {
            store: Ic
          }), (0, kb.createElement)(Cl, {
            store: rb
          }), (0, kb.createElement)(sQ, {
            store: Sb
          })), {
            content: (0, kb.createElement)(kn, {
              commands: eb,
              store: Ub,
              power: tb,
              water: Db,
              reactor: Zb,
              battery: zb,
              collider: xb,
              terminal: yb,
              quests: Vb,
              close: LW.g,
              leave: () => {
                ub.dropHeld(), (0, LW.e)()
              },
              askIslands: () => {
                Qc = -1 / 0, nc = Date.now(), mc = eb.send(Rb)
              },
              openSocial: () => {
                (0, LW.e)(), uW.d.set({
                  openEverythingMenuName: Ms.r.SOCIAL
                })
              },
              showCore: bb => {
                Nc({
                  kind: "core",
                  core: bb
                }), eb.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Nc(null)
            }
          })), Cc.push((0, VW.s)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Nc({
                kind: "quests"
              }), (0, LW.m)()
            }
          })), Cc.push(XC(eb, Vb, Lb)), uc = !1, Cc.push(ga((() => {
            null !== WC && TC(WC)
          }))), Cc.push(UC()), Cc.push(function() {
            const bb = GW.j.subscribe(ZW, ca),
              cb = () => {
                if (ba) {
                  const bb = ba;
                  ba = null, (0, KW.w)(bb)
                }
              },
              sb = GW.j.subscribe("toggleMenu", (bb => {
                "inventory" === (null === bb || void 0 === bb ? void 0 : bb.split("|")[0]) && cb()
              })),
              kb = GW.j.subscribe("appManagerUpdated|openInGameMenuName", (bb => {
                "inventory" === bb && cb()
              }));
            return () => {
              GW.j.unsubscribe(bb), GW.j.unsubscribe(sb), GW.j.unsubscribe(kb)
            }
          }()), Cc.push(function(bb) {
            const cb = sC(bb),
              sb = GW.j.subscribe(ZW, (bb => {
                cC.follow(bb, cb)
              }));
            return () => {
              GW.j.unsubscribe(sb), cC.clear()
            }
          }(Qb)), Cc.push(function() {
            const bb = document.documentElement,
              cb = (0, Kn.c)(".InvenBodyRight", [], (() => {
                const cb = document.querySelector(".InvenBodyRight");
                cb && bb.style.setProperty("--baf2-backpack-width", `${cb.offsetWidth}px`)
              }));
            return () => {
              cb(), bb.style.removeProperty("--baf2-backpack-width")
            }
          }()), Cc.push(function() {
            const bb = document.documentElement;
            return bb.classList.add(pe), () => {
              bb.classList.remove(pe)
            }
          }()), Cc.push((() => {
            fb.dispose(), Hb.dispose()
          })), lb.start(Qb), Cc.push((() => {
            lb.dispose(), Uc.dispose(), Bb.dispose()
          }))
        },
        onClose: () => {
          (0, KW.w)([]), ba = null, pW = new Set, WC = null, (0, KW.v)(new Map), LC.clear();
          for (const bb of Cc) bb();
          Vb.dispose(), sc.dispose(), Lb.dispose(), ub.dispose(), kc.dispose(), Wc.dispose(Qb), Gb.dispose(Qb), Kb.dispose(Qb), ob.dispose(Qb), vb.dispose(Qb), Sb.dispose(), Fb.dispose(), Eb.dispose(), Zb.dispose(), zb.dispose(), rb.dispose(), ac.dispose(), Tc.dispose(), Ic.dispose(), pb.dispose(Qb), bc.dispose(Qb), xb.dispose(), Hc.dispose(), eb.clear()
        },
        onAfterRender: (bb, cb) => {
          var sb, kb, Wb;
          try {
            lb.onAfterRender(cb)
          } catch (Hb) {
            console.error("Error drawing BAF2 belt items", Hb)
          }
          try {
            Uc.onAfterRender(Qb, ab)
          } catch (Hb) {
            console.error("Error drawing BAF2 jet flames", Hb)
          }
          uc || (uc = !0, eb.send("baf2clientready"));
          const Tb = Qb.getPositionView(ab);
          nb.onAfterRender(cb, Tb, Xb), gb.onAfterRender(cb, Tb, Xb, mb), fb.run(Xb), kc.onAfterRender(Qb, Tb), Wc.onAfterRender(Qb, Tb), Bb.onAfterRender(Qb, Tb), Gb.onAfterRender(Qb, Tb), Kb.onAfterRender(Qb, ab, Tb), ob.onAfterRender(Qb, ab, Tb), vb.onAfterRender(Qb, ab), Fb.onAfterRender(Qb, Tb), Vb.onPlayerY(Tb[1]), pb.onAfterRender(Qb), bc.onAfterRender(Qb, ab, Tb);
          const Ib = Qb.getTargetedBlock();
          sc.onAfterRender(Qb, ab, null !== (sb = null === Ib || void 0 === Ib ? void 0 : Ib.kS) && void 0 !== sb ? sb : 0, null !== (kb = null === Ib || void 0 === Ib ? void 0 : Ib.position) && void 0 !== kb ? kb : null), Hc.onAfterRender(Qb, cb), hb.onMining(function(bb, cb) {
            var sb, kb;
            const Wb = bb.getMiningBlock();
            if (!Wb) return null;
            const ab = (0, Pb.f)(bb.getBlockId(Wb[0], Wb[1], Wb[2])),
              Tb = null !== (sb = null === (kb = bb.Xcb(cb)) || void 0 === kb ? void 0 : kb.name) && void 0 !== sb ? sb : null,
              Ub = bb.getItemStat(cb, ab.split("|")[0], "harvestLevel");
            return {
              block: ab,
              x: Wb[0],
              y: Wb[1],
              z: Wb[2],
              qU: Tb,
              level: Ub
            }
          }(Qb, ab), Qb.isMining(), performance.now()), "dropMap" === (null === (Wb = Ub.get()) || void 0 === Wb ? void 0 : Wb.kind) && zk(Tb[1]) && Vc()
        },
        onPlayerChangeBlock: (bb, cb, sb, kb, Wb, Tb) => {
          bb === ab && function(bb, cb, sb, kb, Wb, ab, Tb) {
            const Ub = qe(ab, Tb, bb.isPlayerCrouching(cb));
            if (null === Ub) return;
            if (bb.Tu(sb, kb, Wb, Ub), !bb.getClientOption(cb, "canPickUpItems")) return;
            const Ib = Ts[Ub.split("|")[0]];
            var Hb, fb, Mb;
            void 0 !== Ib && (Hb = bb.getInventoryItems(), fb = Ib, Mb = Qm.e.maxItemStackSize, bb.getInventoryFreeSlotCount(cb) > 0 || Hb.some((bb => null !== bb && bb.name === fb && null !== bb.amount && bb.amount < Mb))) && bb.playSound(cb, (0, mC.c)("pickUp"), .5, 1)
          }(Qb, bb, cb, sb, kb, Wb, Tb)
        },
        onPlayerAltAction: (bb, cb, sb, kb, Wb) => {
          var Tb, Ub;
          if (!Qb.getClientOption(ab, "canPickUpItems")) return;
          const Ib = null !== (Tb = null === (Ub = Qb.Xcb(ab)) || void 0 === Ub ? void 0 : Ub.name) && void 0 !== Tb ? Tb : null,
            Hb = function(bb, cb) {
              const sb = bb.split("|")[0];
              return Jb(sb) && cb !== fW && "Sky Pack" !== cb ? sb : null
            }(Wb, Ib);
          if (null !== Hb) return void(fc.tap(Hb, performance.now()) && kC(Qb, ab, Hb, Vb));
          if (!wk(Ib)) return;
          const fb = Xc.isNewPress(performance.now()),
            Mb = function(bb, cb, sb) {
              return !wk(cb) || sb ? null : bW(bb)
            }(Wb, Ib, Qb.isPlayerCrouching(ab));
          null !== Mb && fb && Qb.Tu(cb, sb, kb, Mb)
        },
        onPlayerAttemptAltAction: (bb, cb, sb, kb, Wb) => {
          if (function(bb, cb, sb, kb, Wb) {
              "Workbench" === kb.split("|")[0] && bb.getClientOption(sb, "canCraft") && (cC.open("Workbench", Wb.get(), sC(bb)), cb.send("baf2station Workbench"))
            }(Qb, eb, ab, Wb, Vb), nC(Qb, ab, Wb)) return "preventAction";
          Yb.onAltAction(Qb, ab, Wb)
        },
        onReceivedMessageFromServer: (bb, cb) => {
          if ("baf2MachineStatus" === bb) {
            var sb, kb, Wb, Hb, fb, Mb, Xb, mb, Cb, Yb, hb, Jb, Bb, Pb, ib, Ob;
            const bb = cb,
              ab = bb.baf2MachineTaught;
            Tb.set(bb.baf2MachinePos, {
              status: bb.baf2MachineStatus,
              power: null !== (sb = bb.baf2MachinePower) && void 0 !== sb ? sb : null,
              opLeftMs: null !== (kb = bb.baf2MachineOpLeftMs) && void 0 !== kb ? kb : null,
              dug: bb.baf2MachineYield ? {
                item: bb.baf2MachineYield,
                name: Nb([bb.baf2MachineYield])[bb.baf2MachineYield]
              } : null,
              powerCap: null !== (Wb = bb.baf2MachinePowerCap) && void 0 !== Wb ? Wb : null,
              powerRates: null !== (Hb = bb.baf2MachinePowerRates) && void 0 !== Hb ? Hb : null,
              coupled: !0 === bb.baf2MachineCoupled,
              couplerLevel: null !== (fb = bb.baf2MachineCoupler) && void 0 !== fb ? fb : 1,
              taught: ab,
              taughtName: ab ? Nb([ab])[ab] : null,
              tier: null !== (Mb = bb.baf2MachineTier) && void 0 !== Mb ? Mb : null,
              input: null !== (Xb = bb.baf2MachineInput) && void 0 !== Xb ? Xb : null,
              inertCoupler: null !== (mb = bb.baf2MachineInertCoupler) && void 0 !== mb ? mb : null,
              inputShort: null !== (Cb = bb.baf2MachineInputShort) && void 0 !== Cb ? Cb : null,
              field: null !== (Yb = bb.baf2MachineField) && void 0 !== Yb ? Yb : null,
              noSeeds: !0 === bb.baf2MachineNoSeeds,
              fuelFed: !0 === bb.baf2MachineFuelFed,
              fuelFeeds: !0 === bb.baf2MachineFuelFeeds,
              coreFull: !0 === bb.baf2MachineCoreFull,
              waterUnpowered: !0 === bb.baf2MachineWaterUnpowered,
              powerShort: !0 === bb.baf2MachinePowerShort,
              powerWait: !0 === bb.baf2MachinePowerWait,
              reactorPowered: !0 === bb.baf2MachineReactorPowered,
              fuelLeftMs: null !== (hb = bb.baf2MachineFuelLeftMs) && void 0 !== hb ? hb : null,
              burning: null !== (Jb = bb.baf2MachineBurning) && void 0 !== Jb ? Jb : null,
              fuelKeep: null !== (Bb = bb.baf2MachineFuelKeep) && void 0 !== Bb ? Bb : null,
              water: null !== (Pb = bb.baf2MachineWater) && void 0 !== Pb ? Pb : null,
              farm: null !== (ib = bb.baf2MachineFarm) && void 0 !== ib ? ib : null,
              cryo: null !== (Ob = bb.baf2MachineCryo) && void 0 !== Ob ? Ob : null
            })
          } else if ("baf2StationOpen" === bb) {
            const bb = cb.baf2Station;
            fc.consumeServerOpen(bb, performance.now()) || kC(Qb, ab, bb, Vb)
          } else if ("baf2Power" === bb) {
            const bb = cb;
            tb.set(bb), bb.baf2PowerOpen && (Nc({
              kind: "power"
            }), (0, LW.m)())
          } else if (bb === jb.C) {
            const bb = cb;
            Db.set(bb), bb.baf2WaterOpen && (Nc({
              kind: "water"
            }), (0, LW.m)())
          } else if ("baf2RxPlans" === bb) {
            var Gb, Kb, db;
            const bb = cb;
            Eb.mN(bb);
            const sb = new Set(bb.baf2RxPlanList.map((bb => {
              let [cb, sb, kb] = bb;
              return `${cb},${sb},${kb}`
            })));
            rb.retain(sb);
            const kb = null === (Gb = Ub.get()) || void 0 === Gb ? void 0 : Gb.kind,
              Wb = "reactor" === kb ? null === (Kb = Zb.get()) || void 0 === Kb ? void 0 : Kb.status.baf2RxAt : "battery" === kb ? null === (db = zb.get()) || void 0 === db ? void 0 : db.status.baf2BatAt : void 0;
            Wb && Lc.has(Wb.join(",")) && !sb.has(Wb.join(",")) && Vc(), Lc = sb
          } else if ("baf2RxStatus" === bb) {
            const bb = cb;
            Zb.set(bb), bb.baf2RxOpen && (Nc({
              kind: "reactor"
            }), (0, LW.m)())
          } else if ("baf2BatStatus" === bb) {
            const bb = cb;
            zb.set(bb), bb.baf2BatOpen && (Nc({
              kind: "battery"
            }), (0, LW.m)())
          } else if ("baf2RxAlarm" === bb) rb.mN(cb);
          else if ("baf2Bomb" === bb) Sb.mN(cb, Qb.getPositionView(ab));
          else if ("baf2Fallout" === bb) Fb.mN(cb);
          else if ("baf2ColBeams" === bb) xb.onBeams(cb);
          else if ("baf2ColStatus" === bb) {
            const bb = cb;
            var Ab, wb;
            if (xb.onStatus(bb), bb.baf2ColOpen) xb.onOpen(null !== (Ab = null === (wb = Qb.Xcb(ab)) || void 0 === wb ? void 0 : wb.name) && void 0 !== Ab ? Ab : null), Nc({
              kind: "collider"
            }), (0, LW.m)()
          } else if ("baf2Terminal" === bb) {
            const bb = cb;
            var ob;
            if (yb.apply(bb)) bb.baf2TermReset && (Nc({
              kind: "terminal"
            }), (0, LW.m)());
            else "terminal" === (null === (ob = Ub.get()) || void 0 === ob ? void 0 : ob.kind) && (Ub.set(null), (0, LW.e)())
          } else if ("baf2Core" === bb) {
            var vb;
            const bb = cb;
            if (Ib(!0 === bb.baf2CoreNuclear), function(bb, cb) {
                return "core" === (null === bb || void 0 === bb ? void 0 : bb.kind) && cb.baf2CoreTier > bb.core.message.baf2CoreTier
              }(Ub.get(), bb)) return void(0, LW.e)();
            if (bb.baf2CoreRefresh && "core" !== (null === (vb = Ub.get()) || void 0 === vb ? void 0 : vb.kind)) return;
            Nc({
              kind: "core",
              core: NC(bb, Nb)
            }), bb.baf2CoreRefresh || (0, LW.m)()
          } else if ("baf2WrenchUndo" === bb) {
            const {
              baf2WrenchPos: bb,
              baf2WrenchBlock: sb
            } = cb;
            Qb.Tu(bb[0], bb[1], bb[2], sb)
          } else if ("baf2Toast" === bb) {
            const bb = cb;
            qb.heard(performance.now(), bb.baf2ToastMs), Lb.show(bb)
          } else if ("baf2Area" === bb) ub.arrive(cb, null !== Ub.get());
          else if ("baf2Quest" === bb) {
            const bb = cb;
            Ib(!0 === bb.baf2QuestNuclear), Vb.set(bb, function(bb, cb) {
              var sb, kb, Wb, ab, Tb;
              const Ub = [];
              for (const [, , fb, , , , , , Mb, Xb] of bb.baf2QuestSteps) null !== fb && Ub.push(fb), Ub.push(...null !== Mb && void 0 !== Mb ? Mb : [], ...null !== Xb && void 0 !== Xb ? Xb : []);
              bb.baf2QuestReward && Ub.push(bb.baf2QuestReward);
              const Ib = null === (sb = bb.baf2QuestSide) || void 0 === sb ? void 0 : sb[2][2];
              Ib && Ub.push(Ib), Ub.push(...null !== (kb = null === (Wb = bb.baf2QuestSide) || void 0 === Wb ? void 0 : Wb[2][8]) && void 0 !== kb ? kb : [], ...null !== (ab = null === (Tb = bb.baf2QuestSide) || void 0 === Tb ? void 0 : Tb[2][9]) && void 0 !== ab ? ab : []);
              for (const [fb] of null !== (Hb = bb.baf2QuestAlso) && void 0 !== Hb ? Hb : []) {
                var Hb;
                Ub.push(fb)
              }
              return cb(Ub)
            }(bb, Nb)), TC(bb.baf2QuestTier)
          } else if ("baf2Route" === bb) ! function(bb, cb) {
            let {
              baf2RouteCells: sb,
              baf2RouteInto: kb
            } = cb;
            0 !== sb.length && kb ? bb.setRouteChevrons({
              cells: sb.map(((bb, cb) => {
                const [Wb, , ab] = function(bb, cb, sb) {
                  const kb = sb + 1 < bb.length ? bb[sb + 1] : cb;
                  return [kb[0] - bb[sb][0], 0, kb[2] - bb[sb][2]]
                }(sb, kb, cb);
                return {
                  pos: bb,
                  way: [Wb, ab]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : bb.setRouteChevrons(null)
          }(Qb, cb);
          else if ("baf2QuestBook" === bb) Vb.setBook(cb);
          else if ("baf2Stalls" === bb) nb.set(cb.baf2StallCells);
          else if (bb === ls.k) lb.onMoves(cb);
          else if (bb === ls.e) lb.onLines(cb);
          else if ("baf2Labels" === bb) gb.mN(cb);
          else if ("baf2DropMap" === bb) Nc({
            kind: "dropMap",
            dropMap: cb
          }), (0, LW.m)();
          else if ("baf2Islands" === bb) {
            var pb, bc;
            const bb = cb;
            if (eb.syncIslandEdits(bb.baf2IslandsAnswered), !bb.baf2IslandsOpen && "islands" !== (null === (pb = Ub.get()) || void 0 === pb ? void 0 : pb.kind)) return;
            if (bb.baf2IslandsOpen) {
              var cc, sc;
              const cb = uW.d.get("openEverythingMenuName"),
                sb = eb.sent() >= mc,
                kb = "other" !== (Cc = {
                  askedAtMs: nc,
                  askSent: sb,
                  reaskedAtMs: lc,
                  nowMs: Date.now(),
                  panel: null !== (cc = null === (sc = Ub.get()) || void 0 === sc ? void 0 : sc.kind) && void 0 !== cc ? cc : null,
                  inGameMenu: uW.d.get("openInGameMenuName"),
                  everythingMenu: null === cb ? null : cb === Ms.r.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== bb.baf2IslandsFocusInvite
                }).everythingMenu && (!!Cc.focusInvite || "islands" === Cc.panel && "clientGame" === Cc.inGameMenu || !(Cc.nowMs - Cc.reaskedAtMs < iH) && (Cc.askSent && Cc.nowMs - Cc.askedAtMs < iH ? "core" === Cc.panel && "clientGame" === Cc.inGameMenu && null === Cc.everythingMenu : "shop" === Cc.everythingMenu || null === Cc.inGameMenu));
              if (sb && (nc = -1 / 0), lc = -1 / 0, !kb) return void ec()
            }
            const sb = (Wc = bb.baf2IslandsOpen, Hc = "islands" === (null === (bc = Ub.get()) || void 0 === bc ? void 0 : bc.kind), Mc = Qc, Xc = Date.now(), Wc && !Hc && Xc - Mc < iH);
            Nc({
              kind: "islands",
              islands: bb,
              arrivedAtMs: Date.now(),
              backToCore: OH(Ub.get())
            }), sb && (Qc = -1 / 0, lc = Date.now(), eb.send(Rb)), bb.baf2IslandsOpen && ("clientGame" !== uW.d.get("openInGameMenuName") && (0, YW.g)(), (0, LW.m)())
          } else if ("baf2CoopTransfer" === bb) {
            var kc;
            const bb = cb;
            bb.baf2TransferOn ? (Nc({
              kind: "transfer",
              transfer: bb,
              arrivedAtMs: Date.now()
            }), (0, LW.m)()) : "transfer" === (null === (kc = Ub.get()) || void 0 === kc ? void 0 : kc.kind) && (0, LW.e)()
          } else "baf2IslandLeft" === bb ? (ub.dropHeld(), null !== Ub.get() && Vc(), "inventory" === uW.d.get("openInGameMenuName") && (0, YW.g)()) : "baf2Arc" === bb ? ac.mN(Qb, cb) : "baf2Blade" === bb ? Tc.onBlade(Qb, cb) : "baf2JetFlame" === bb ? Uc.mN(Qb, cb) : "baf2GearPower" === bb && Ic.mN(cb);
          var Wc, Hc, Mc, Xc, Cc
        }
      };
      return Yc
    }
  },
  38124: (bb, cb, sb) => {
    function kb(bb, cb, sb) {
      const kb = new Set,
        Wb = new ResizeObserver(sb),
        ab = () => {
          const cb = new Set(document.querySelectorAll(bb));
          let ab = !1;
          for (const bb of kb) cb.has(bb) || (Wb.unobserve(bb), kb.delete(bb), ab = !0);
          for (const bb of cb) kb.has(bb) || (Wb.observe(bb), Tb.observe(bb, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), kb.add(bb));
          ab && sb()
        },
        Tb = new MutationObserver((cb => {
          cb.some((bb => "attributes" === bb.type)) && sb(), cb.some((cb => function(bb, cb, sb) {
            if ("childList" !== bb.type) return !1;
            for (const kb of bb.addedNodes)
              if (kb instanceof Element && (kb.matches(cb) || kb.querySelector(cb))) return !0;
            for (const kb of bb.removedNodes)
              if (kb instanceof Element)
                for (const bb of sb)
                  if (kb.contains(bb)) return !0;
            return !1
          }(cb, bb, kb))) && ab()
        }));
      Tb.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Ub of cb) Wb.observe(Ub);
      return window.addEventListener("resize", sb), ab(), sb(), () => {
        Wb.disconnect(), Tb.disconnect(), window.removeEventListener("resize", sb)
      }
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  38108: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      i: () => ab
    });
    const kb = new WeakMap;

    function Wb(bb) {
      let cb = kb.get(bb);
      return cb || (cb = {
        hidden: bb.hidden,
        x: NaN,
        y: NaN
      }, kb.set(bb, cb)), cb
    }

    function ab(bb, cb) {
      const sb = Wb(bb);
      sb.hidden !== cb && (sb.hidden = cb, bb.hidden = cb)
    }

    function Tb(bb, cb, sb) {
      const kb = Wb(bb);
      kb.x === cb && kb.y === sb || (kb.x = cb, kb.y = sb, bb.style.translate = `${cb}vw ${sb}vh`)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);