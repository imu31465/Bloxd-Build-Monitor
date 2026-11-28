export const id = 275;
export const ids = [275];
export const modules = {
  39736: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(39744);
    const Hb = [0, 0, 0];
    class pb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb;
        this.pool = bb, this.origin = wb, this.count = 0, this.free = []
      }
      take() {
        var bb;
        const wb = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.count++;
        return wb >= this.pool.qO && this.pool.grow(Math.max(2 * this.pool.qO, wb + 1)), this.hide(wb), wb
      }
      release(bb) {
        this.hide(bb), this.free.push(bb)
      }
      write(bb, wb, Mb, Hb) {
        const {
          records: pb
        } = this.pool, {
          origin: Vb
        } = this, gb = bb * eb.e;
        pb[gb] = wb - Vb[0], pb[gb + 1] = Mb - Vb[1], pb[gb + 2] = Hb - Vb[2], pb[gb + eb.h] = 0, this.pool.markDirty(bb)
      }
      hide(bb) {
        this.pool.records[bb * eb.e + eb.h] = 1, this.pool.markDirty(bb)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Vb {
      constructor(bb, wb, Mb) {
        this.api = bb, this.model = wb, this.initialCapacity = Mb, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(bb) {
        let wb = this.kinds.get(bb);
        if (void 0 === wb) {
          const Mb = this.api.createInstancePool({
            ...this.model,
            item: bb
          }, this.initialCapacity);
          null === Mb || void 0 === Mb || Mb.setOrigin(this.origin[0], this.origin[1], this.origin[2]), wb = Mb && new pb(Mb, this.origin), this.kinds.set(bb, wb)
        }
        return wb
      }
      follow(bb) {
        const {
          origin: wb
        } = this;
        if (Math.abs(bb[0] - wb[0]) <= 512 && Math.abs(bb[1] - wb[1]) <= 512 && Math.abs(bb[2] - wb[2]) <= 512) return !1;
        wb[0] = Math.floor(bb[0]), wb[1] = Math.floor(bb[1]), wb[2] = Math.floor(bb[2]);
        for (const Mb of this.kinds.values()) null === Mb || void 0 === Mb || Mb.pool.setOrigin(wb[0], wb[1], wb[2]);
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
  39756: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      g: () => gb,
      i: () => lb
    });
    const eb = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Hb = [0, 1, 2, 0, 2, 3],
      pb = [4, 5];

    function Vb(bb, wb, Mb, eb, Hb) {
      for (let Vb = 0; Vb < 6; Vb++) pb.includes(Vb) === Hb && Lb(bb, wb, Mb, eb, Vb)
    }

    function gb(bb, wb, Mb, eb) {
      for (let Hb = 0; Hb < 6; Hb++) Lb(bb, wb, Mb, eb, Hb)
    }

    function lb(bb, wb, Mb, pb, Vb) {
      for (let gb = 0; gb < 6; gb++)
        for (const lb of [0, 1]) {
          const [Lb, Ib, Ob] = [lb + 2, lb + 1, (lb + 3) % 4], Ub = bb.length / 3;
          for (const [wb, Hb] of [
              [lb, Ib],
              [Lb, Ib],
              [Lb, Ob],
              [lb, Ob]
            ])
            for (let lb = 0; lb < 3; lb++) {
              const Lb = eb[3 * (4 * gb + wb) + lb],
                Ib = eb[3 * (4 * gb + Hb) + lb];
              bb.push((Lb + (Ib - Lb) * Vb) * pb / 2 + Mb[lb])
            }
          for (const bb of Hb) wb.push(Ub + bb)
        }
    }

    function Lb(bb, wb, Mb, pb, Vb) {
      let [gb, lb, Lb] = Mb, [Ib, Ob, Ub] = pb;
      const tb = bb.length / 3;
      for (let Hb = 4 * Vb; Hb < 4 * Vb + 4; Hb++) bb.push(eb[3 * Hb] * Ib / 2 + gb, eb[3 * Hb + 1] * Ob / 2 + lb, eb[3 * Hb + 2] * Ub / 2 + Lb);
      for (const eb of Hb) wb.push(tb + eb)
    }
  },
  39707: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => ls
    });
    var eb = Mb(64);
    const Hb = [{
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
      pb = 10;
    let Vb = !0;

    function gb() {
      return Vb
    }

    function lb(bb) {
      Vb = bb
    }
    const Lb = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Ib() {
      return Vb ? Hb.length : pb
    }

    function Ob(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = Hb[bb - 1]) || void 0 === Mb ? void 0 : Mb.reactorTier) && void 0 !== wb ? wb : 0
    }

    function Ub(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ob(bb) > 0;
      return Mb && !Vb ? "hidden" : bb <= wb ? "open" : Mb ? wb < 5 ? "hidden" : wb < pb ? "teaser" : "locked" : "locked"
    }

    function tb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: eb,
        n: Hb
      } = Fb(bb);
      return {
        key: wb[eb],
        params: {
          [eb]: Mb ? String(Hb) : Hb
        }
      }
    }
    const Cb = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Eb(bb, wb) {
      return Ob(bb) > 0 && wb < pb
    }

    function Fb(bb) {
      const wb = Ob(bb);
      if (wb > 0) return {
        kind: "atomic",
        n: wb,
        short: `A${wb}`
      };
      const Mb = function(bb) {
        return bb >= 6 && bb <= 10 ? bb - 6 + 1 : 0
      }(bb);
      return Mb > 0 ? {
        kind: "stage",
        n: Mb,
        short: `S${Mb}`
      } : {
        kind: "tier",
        n: bb,
        short: String(bb)
      }
    }

    function Bb(bb) {
      return Hb[Math.max(1, Math.min(bb, Hb.length)) - 1]
    }

    function sb(bb, wb) {
      return bb < wb ? function(bb) {
        var wb;
        return null !== (wb = Hb[bb]) && void 0 !== wb ? wb : null
      }(bb) : null
    }
    const mb = "baf2coresubmit",
      hb = "baf2corebankpause",
      zb = "baf2coredeposit",
      Xb = "baf2corechargepause";

    function xb(bb) {
      var wb;
      return null !== (wb = bb.baf2CoreOpen) && void 0 !== wb ? wb : pb
    }
    const jb = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function Kb(bb) {
      return jb.includes(bb)
    }
    const rb = (bb, wb) => wb.map((wb => [wb, [bb]])),
      Rb = Object.fromEntries([...rb("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...rb("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...rb("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...rb("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...rb("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...rb("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...rb("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...rb("Parts Bench", ["Focus Lens"]), ...rb("Machine Bench", ["Laser", "Collider"]), ...rb("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...rb("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...rb("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...rb("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...rb("Tool Bench", ["Mob Cage"]), ...rb("Tool Bench", ["Pocket Terminal"]), ...rb("Tool Bench", ["Comet Beacon"]), ...rb("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Db(bb) {
      var wb;
      return null !== (wb = Rb[bb]) && void 0 !== wb ? wb : ["Workbench"]
    }

    function cb(bb) {
      return Db(bb)[0]
    }
    Hb.slice(1).map(((bb, wb) => `Core Tier ${wb+2}`));
    var Yb = Mb(5868);
    const Zb = ["on", "hud", "off"];

    function fb(bb) {
      return "on" === bb
    }
    var Ab = Mb(382);
    const Wb = "Mob Farm",
      Jb = {
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
      Sb = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Nb = {
        1: 20,
        2: 60,
        3: 120
      },
      vb = "baf2farmvoid",
      Qb = "Caged ",
      Gb = " Spawner Block";

    function qb(bb) {
      return `lifeform:${(0,Ab.De)(bb)}`
    }

    function ab(bb) {
      if (!bb) return null;
      if (bb.startsWith(Qb)) {
        const wb = bb.slice(6);
        return Sb.includes(wb) ? wb : null
      }
      if (bb.endsWith(Gb)) {
        const wb = bb.slice(0, -14);
        return void 0 !== Jb[wb] ? wb : null
      }
      return null
    }

    function ib(bb) {
      return !0 === bb.mobFarm
    }

    function ub(bb, wb) {
      return Nb[Jb[wb]] * bb.opMs / 1e3
    }
    const db = new Map;
    const Pb = "baf2islands",
      nb = "baf2islandnew";

    function yb(bb) {
      const wb = Hb.findIndex((wb => wb.unlocks.includes(bb)));
      return wb < 0 ? 1 : wb + 1
    }

    function ob(bb) {
      return Math.floor(bb).toLocaleString("en-US")
    }
    var Tb = Mb(39637);
    const kb = "baf2terminaltake",
      bw = "baf2terminalput",
      ww = ["one", "stack", "fill"];

    function Mw(bb, wb, Mb) {
      return `${kb} ${bb} ${wb} ${Mb}`
    }

    function ew(bb, wb, Mb) {
      return `${bw} ${bb} ${wb} ${Mb}`
    }

    function Hw(bb) {
      return `${bw} ${bb}`
    }
    const pw = [
      [`${kb} `, "take"],
      [`${bw} `, "put"]
    ];

    function Vw(bb) {
      const wb = pw.find((wb => {
        let [Mb] = wb;
        return bb.startsWith(Mb)
      }));
      if (!wb) return null;
      const [Mb, eb] = wb, [Hb, pb, ...Vb] = bb.slice(Mb.length).trim().split(" "), gb = Number(Hb);
      if (!Number.isSafeInteger(gb) || gb <= 0) return null;
      if ("put" === eb && void 0 === pb) return {
        kind: "putAll",
        seq: gb
      };
      const lb = function(bb) {
        if (ww.includes(bb)) return bb;
        const wb = Number(bb);
        return /^\d+$/.test(bb) && Number.isSafeInteger(wb) && wb > 0 ? wb : null
      }(null !== pb && void 0 !== pb ? pb : "");
      return null === lb || 0 === Vb.length ? null : {
        kind: eb,
        seq: gb,
        mode: lb,
        item: Vb.join(" ")
      }
    }

    function gw(bb, wb) {
      const Mb = "number" === typeof bb ? bb : "one" === bb ? 1 : "stack" === bb ? 99 : wb;
      return Math.min(wb, Mb)
    }

    function lw(bb, wb) {
      const Mb = bb => "number" === typeof bb ? bb : "one" === bb ? 1 : 99;
      return "fill" === bb || "fill" === wb ? "fill" : Mb(bb) + Mb(wb)
    }

    function Lw(bb, wb) {
      const Mb = Vw(bb),
        eb = Vw(wb),
        Hb = Mb && eb ? function(bb, wb) {
          return "take" === bb.kind || "take" === wb.kind ? "take" === bb.kind && "take" === wb.kind && bb.item === wb.item ? {
            ...wb,
            mode: lw(bb.mode, wb.mode)
          } : null : "putAll" === bb.kind || "putAll" === wb.kind ? {
            kind: "putAll",
            seq: wb.seq
          } : bb.item === wb.item ? {
            ...wb,
            mode: lw(bb.mode, wb.mode)
          } : null
        }(Mb, eb) : null;
      return Hb ? "putAll" === (pb = Hb).kind ? Hw(pb.seq) : "put" === pb.kind ? ew(pb.seq, pb.mode, pb.item) : Mw(pb.seq, pb.mode, pb.item) : null;
      var pb
    }
    const Iw = "baf2rx";

    function Ow(bb, wb) {
      for (var Mb = arguments.length, eb = new Array(Mb > 2 ? Mb - 2 : 0), Hb = 2; Hb < Mb; Hb++) eb[Hb - 2] = arguments[Hb];
      return [Iw, bb[0], bb[1], bb[2], wb, ...eb].join(" ")
    }
    const Uw = 2,
      tw = 4,
      Cw = 8,
      Ew = 16,
      Fw = 32,
      Bw = 64,
      sw = 128,
      mw = 256,
      hw = 512,
      zw = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Xw = [{
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
    const xw = "Biomass",
      jw = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function Kw(bb) {
      return {
        input: xw,
        inputAmount: 1,
        output: bb,
        outputAmount: 1
      }
    }
    const rw = "baf2synth",
      Rw = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Dw = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Yw = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Zw = function(bb, wb) {
        return {
          input: bb,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: wb,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      fw = function(bb, wb) {
        return {
          ...Zw(bb, wb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      Aw = Dw.map((bb => fw(bb, "Biomass", 2))),
      Ww = {
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
          recipes: [Zw("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Zw("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Zw("Raw Gold", "Gold Grit", 2), Zw("Messy Stone", "Sand"), Zw("Gravel", "Sand"), Zw("Raw Voltite", "Voltite Dust", 2), Zw("Moonstone", "Moonstone Dust", 4), Zw("Wheat Seeds", "Fertiliser"), Zw("Raw Uranium", "Uranium Grit", 2), fw("Mossy Messy Stone", "Sand"), ...Aw],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Zw("Iron Grit", "Iron Bar"), Zw("Copper Grit", "Copper Bar"), Zw("Gold Grit", "Gold Bar"), Zw("Raw Iron", "Iron Bar"), Zw("Raw Copper", "Copper Bar"), Zw("Raw Gold", "Gold Bar"), Zw("Sand", "Glass"), Zw("Messy Stone", "Stone"), ...Ab.gd.map((bb => Zw(bb, "Charcoal", 1, 4))), Zw("Wheat", "Bread", 1, 2), ...Dw.map(((bb, wb) => fw(bb, Yw[wb])))],
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
          recipes: [Zw("Iron Bar", "Iron Plate"), Zw("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Zw("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Zw("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Zw("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Zw("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Zw("Raw Gold", "Gold Grit", 3), Zw("Raw Voltite", "Voltite Dust", 3), Zw("Messy Stone", "Sand", 2), Zw("Gravel", "Sand", 2), Zw("Moonstone", "Moonstone Dust", 6), Zw("Raw Uranium", "Uranium Grit", 3), fw("Mossy Messy Stone", "Sand", 2), ...Aw],
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
          table: zw
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Zw("Coal", "Diamond", 1, 24), Zw("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Tb.i
      },
      Jw = {
        Crusher: [Zw("Spent Pellet", "Glow Dust"), Zw("Wheat Seeds", "Biomass"), Zw("Wheat", "Biomass"), Zw("Dead Bush", "Biomass"), Zw("Dusk Moss", "Biomass"), Zw("Rotten Flesh", "Biomass"), Zw("Bone", "Biomass", 2)],
        "Shatter Mill": [Zw("Spent Pellet", "Glow Dust"), Zw("Wheat Seeds", "Biomass"), Zw("Wheat", "Biomass"), Zw("Dead Bush", "Biomass"), Zw("Dusk Moss", "Biomass"), Zw("Rotten Flesh", "Biomass"), Zw("Bone", "Biomass", 2), ...Ab.gd.map((bb => Zw(bb, "Biomass")))],
        Smelter: [Zw("Biomass", "Fertiliser", 2)],
        Press: [Zw("Coal", "Graphite", 1, 4)]
      },
      Sw = "Power Coupler",
      Nw = "Advanced Coupler",
      vw = "Nova Coupler",
      Qw = [{
        item: Sw,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Nw,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: vw,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const Gw = new Map;

    function qw(bb) {
      var wb, Mb;
      return null !== (wb = null !== (Mb = bb.fuelSlot) && void 0 !== Mb ? Mb : bb.couplerSlot) && void 0 !== wb ? wb : null
    }

    function aw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!bb.couplable) throw new Error(`${bb.kind} takes no Power Coupler`);
      let Mb = Gw.get(bb);
      Mb || (Mb = [], Gw.set(bb, Mb));
      let eb = Mb[wb];
      if (!eb) {
        var Hb;
        const {
          divisor: pb,
          powerPerS: Vb
        } = Qw[wb - 1], gb = bb.opMs / pb, lb = void 0 !== bb.fluidMade || void 0 !== bb.cryoMade ? bb.powerPerOp : Vb * gb / 1e3;
        eb = {
          ...bb,
          fuelSlot: null,
          couplerSlot: null !== (Hb = qw(bb)) && void 0 !== Hb ? Hb : void 0,
          opMs: gb,
          powerPerOp: lb,
          coupled: !0
        }, wb > 1 && (eb = {
          ...eb,
          couplerLevel: wb
        }), Mb[wb] = eb
      }
      return eb
    }
    const iw = new Map;
    const uw = new Map;

    function dw(bb, wb) {
      if (null === wb || (Mb = wb, !jw.includes(Mb))) return bb;
      var Mb;
      let eb = uw.get(wb);
      return eb || (eb = {
        ...bb,
        recipes: [Kw(wb)]
      }, uw.set(wb, eb)), eb
    }

    function Pw(bb) {
      return !0 === bb.synth
    }
    const nw = (bb, wb, Mb, eb) => ({
        output: bb,
        outputAmount: wb,
        tier: Mb,
        inputs: eb.map((bb => {
          let [wb, Mb] = bb;
          return {
            item: wb,
            amount: Mb
          }
        }))
      }),
      yw = Object.fromEntries([nw("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), nw("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), nw("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), nw("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), nw("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), nw("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), nw("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), nw("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), nw("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), nw("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), nw("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), nw("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), nw("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), nw("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), nw("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), nw("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), nw("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), nw("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), nw("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), nw("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), nw("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), nw("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), nw("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), nw("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), nw("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), nw("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), nw("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), nw("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), nw("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), nw("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((bb => [bb.output, bb]))),
      ow = new Map;

    function Tw(bb, wb) {
      let Mb = Ww[bb];
      if (wb.atomic && (Mb = function(bb) {
          const wb = Jw[bb.kind];
          if (!wb) return bb;
          let Mb = iw.get(bb.kind);
          if (!Mb) {
            const eb = new Set(wb.map((bb => bb.input))),
              Hb = bb.recipes.filter((bb => !eb.has(bb.input)));
            Mb = {
              ...bb,
              recipes: [...Hb, ...wb]
            }, iw.set(bb.kind, Mb)
          }
          return Mb
        }(Mb)), Mb.synth) return dw(Mb, wb.taught);
      if (wb.coupled && Mb.couplable) return aw(Mb, wb.level);
      const eb = Mb.inputSlots && null !== wb.taught ? yw[wb.taught] : void 0;
      if (!eb) return Mb;
      const Hb = `${bb}|${eb.output}`;
      let pb = ow.get(Hb);
      return pb || (pb = {
        ...Mb,
        bench: eb
      }, ow.set(Hb, pb)), pb
    }
    const kw = ["Diamond", "Moonstone"];

    function bM(bb) {
      return new Set(bb.flatMap((bb => bb.bonus ? [bb.output, bb.bonus.item] : [bb.output])).filter((bb => !kw.includes(bb))))
    }
    const wM = Object.values(Ww).flatMap((bb => bb.recipes));
    bM(wM.filter((bb => !0 !== bb.nuclear))), bM([...wM.filter((bb => !0 === bb.nuclear)), ...Object.values(Jw).flat()]);

    function MM(bb) {
      return null === bb.inputSlot && void 0 === bb.inputSlots && void 0 === bb.powerMade && void 0 === bb.fluidMade && !bb.treeCutter && void 0 === bb.table
    }

    function eM(bb) {
      return !0 === bb.treeCutter
    }
    const HM = ["Voltite Cell"];

    function pM(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = bb.fuels) || void 0 === Mb ? void 0 : Mb.some((bb => HM.includes(bb)))) && void 0 !== wb && wb
    }
    const VM = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Ab.gd.map((bb => [bb, 8e3]))),
        ...Object.fromEntries(Ab.Od.map((bb => [bb, 2e3]))),
        "Voltite Cell": 12e4
      },
      gM = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      lM = {
        "Uranium Deposit": 4e3
      };

    function LM(bb) {
      var wb;
      return null !== (wb = Object.keys(gM).find((wb => gM[wb] === bb))) && void 0 !== wb ? wb : null
    }

    function IM(bb) {
      return Rw.includes(bb)
    }

    function OM(bb) {
      return !0 !== bb.nuclear || gb()
    }
    var UM = Mb(366);
    var tM = Mb(5945),
      CM = Mb(5878),
      EM = Mb(5953),
      FM = Mb(5941);
    const BM = "Reactor Controller",
      sM = "Reactor Port",
      mM = "Battery Cell",
      hM = ["fuel", "water", "waste"],
      zM = {
        fuel: sM,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      XM = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      xM = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      jM = "Reactor Frame",
      KM = "Reactor Glass",
      rM = {
        edge: [jM],
        cap: [KM, sM],
        wall: [KM, sM],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [BM]
      },
      RM = {
        edge: [mM],
        cap: [mM],
        wall: [mM],
        inside: [mM],
        ctrl: [mM]
      },
      DM = ["edge", "cap", "wall", "inside"],
      cM = ["Reactor Slag"];

    function YM(bb) {
      return cM.includes(ZM(bb))
    }

    function ZM(bb) {
      const wb = bb.indexOf("|");
      return wb < 0 ? bb : bb.slice(0, wb)
    }

    function fM(bb) {
      return ZM(bb) === BM ? "reactor" : null
    }

    function AM(bb) {
      return ZM(bb) !== sM ? null : bb.endsWith("|Water") ? "water" : bb.endsWith("|Waste") ? "waste" : "fuel"
    }

    function WM(bb) {
      const wb = AM(bb);
      return null === wb ? null : NM(zM[hM[(hM.indexOf(wb) + 1) % hM.length]], function(bb) {
        return bb.includes(JM)
      }(bb))
    }
    const JM = "|meta|rot1|Formed",
      SM = new Set([jM, KM, sM]);

    function NM(bb, wb) {
      var Mb;
      const eb = ZM(bb);
      if (!SM.has(eb)) return bb;
      if (eb !== sM) return wb ? eb + JM : eb;
      const Hb = null !== (Mb = AM(bb)) && void 0 !== Mb ? Mb : "fuel";
      return wb ? "fuel" === Hb ? eb + JM : `${eb}${JM}|${"water"===Hb?"Water":"Waste"}` : zM[Hb]
    }

    function vM(bb, wb) {
      const Mb = He(bb, wb);
      if ("Air" === Mb) return !1;
      const eb = "reactor" === bb ? rM : RM;
      return DM.some((bb => eb[bb].includes(Mb))) || "reactor" === bb && cM.includes(Mb)
    }

    function QM(bb) {
      return xM[bb]
    }

    function GM(bb) {
      var wb;
      return null !== (wb = XM[bb]) && void 0 !== wb ? wb : XM[1]
    }

    function qM(bb) {
      const [wb, , Mb] = GM(bb);
      return [Mb, 0, -wb]
    }

    function aM(bb, wb, Mb, eb, Hb, pb) {
      return {
        ctrl: [bb[0], bb[1], bb[2]],
        rot: XM[wb] ? wb : 1,
        w: Mb,
        h: eb,
        d: Hb,
        cu: pb[0],
        cv: pb[1]
      }
    }

    function iM(bb, wb) {
      return "reactor" === bb ? [Math.floor((wb - 1) / 2), 0] : [0, 0]
    }

    function uM(bb, wb, Mb, eb, Hb) {
      let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb.rot;
      if (Mb === bb.w && eb === bb.h && Hb === bb.d && pb === bb.rot) return bb;
      const [Vb] = iM(wb, bb.w);
      if (bb.cu === Vb && bb.cv <= 1) return aM(bb.ctrl, pb, Mb, eb, Hb, iM(wb, Mb));
      const gb = (bb, wb) => Math.max(1, Math.min(wb, bb));
      return aM(bb.ctrl, pb, Mb, eb, Hb, [gb(bb.cu, Mb - 2), 0 === bb.cv ? 0 : gb(bb.cv, eb - 2)])
    }
    const dM = 11,
      PM = 2 * dM + 1;
    new Uint8Array(PM * PM * PM);

    function nM(bb) {
      return bb.w * bb.h * bb.d
    }

    function yM(bb) {
      const wb = qM(bb.rot);
      return [bb.ctrl[0] - wb[0] * bb.cu, bb.ctrl[1] - bb.cv, bb.ctrl[2] - wb[2] * bb.cu]
    }

    function oM(bb) {
      return bb.cv * bb.d * bb.w + bb.cu
    }

    function TM(bb, wb) {
      const Mb = wb % bb.w,
        eb = Math.floor(wb / bb.w) % bb.d;
      return [Mb, Math.floor(wb / (bb.w * bb.d)), eb]
    }

    function kM(bb, wb) {
      const [Mb, eb, Hb] = TM(bb, wb), pb = yM(bb), Vb = GM(bb.rot), gb = qM(bb.rot);
      return [pb[0] + gb[0] * Mb - Vb[0] * Hb, pb[1] + eb, pb[2] + gb[2] * Mb - Vb[2] * Hb]
    }

    function be(bb, wb) {
      const Mb = yM(bb),
        eb = GM(bb.rot),
        Hb = qM(bb.rot),
        pb = wb[0] - Mb[0],
        Vb = wb[2] - Mb[2],
        gb = pb * Hb[0] + Vb * Hb[2],
        lb = -(pb * eb[0] + Vb * eb[2]),
        Lb = wb[1] - Mb[1];
      return gb < 0 || gb >= bb.w || Lb < 0 || Lb >= bb.h || lb < 0 || lb >= bb.d ? -1 : (Lb * bb.d + lb) * bb.w + gb
    }

    function we(bb, wb) {
      if (wb === oM(bb)) return "ctrl";
      const [Mb, eb, Hb] = TM(bb, wb), pb = 0 === eb || eb === bb.h - 1, Vb = Number(0 === Mb || Mb === bb.w - 1) + Number(pb) + Number(0 === Hb || Hb === bb.d - 1);
      return Vb >= 2 ? "edge" : 1 === Vb ? pb ? "cap" : "wall" : "inside"
    }

    function Me(bb, wb) {
      const [Mb, eb, Hb] = TM(bb, wb);
      return 0 === Mb || Mb === bb.w - 1 || 0 === eb || eb === bb.h - 1 || 0 === Hb || Hb === bb.d - 1 ? -1 : ((eb - 1) * (bb.d - 2) + (Hb - 1)) * (bb.w - 2) + (Mb - 1)
    }

    function ee(bb, wb) {
      const Mb = bb.w - 2,
        eb = bb.d - 2,
        Hb = wb % Mb + 1,
        pb = Math.floor(wb / Mb) % eb + 1;
      return ((Math.floor(wb / (Mb * eb)) + 1) * bb.d + pb) * bb.w + Hb
    }

    function He(bb, wb) {
      const Mb = ZM(wb);
      return "reactor" === bb && Mb === BM ? jM : Mb
    }

    function pe(bb, wb, Mb) {
      const eb = "ctrl" === wb ? ZM(Mb) : He(bb, Mb);
      return ("reactor" === bb ? rM : RM)[wb].includes(eb) ? "ok" : "Air" === eb ? "missing" : vM(bb, Mb) ? "wrong" : "blocked"
    }

    function Ve(bb, wb) {
      return "battery" === bb ? mM : "inside" === wb ? null : function(bb, wb) {
        if ("inside" === wb || "ctrl" === wb || "battery" === bb) return null;
        return "edge" === wb ? jM : KM
      }(bb, wb)
    }
    const ge = {
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
      le = "Collider",
      Le = "Laser",
      Ie = "Star Alloy",
      Oe = "Glow Dust",
      Ue = [le, "_Collider Focus"];

    function te(bb) {
      return Ue.indexOf(ZM(bb))
    }

    function Ce(bb) {
      return ZM(bb) === Le
    }

    function Ee(bb) {
      return [
        [bb[0], bb[1], bb[2]],
        [bb[0], bb[1] + 1, bb[2]]
      ]
    }
    const Fe = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Be(bb, wb, Mb) {
      const eb = Fe[wb];
      return [bb[0] + eb[0] * Mb, bb[1], bb[2] + eb[2] * Mb]
    }

    function se(bb, wb) {
      if (wb[1] !== bb[1]) return null;
      const Mb = wb[0] - bb[0],
        eb = wb[2] - bb[2];
      if (0 !== Mb === (0 !== eb)) return null;
      const Hb = Math.abs(Mb + eb);
      if (Hb > ge.LASER_D) return null;
      return {
        dir: eb < 0 ? 0 : Mb > 0 ? 1 : eb > 0 ? 2 : 3,
        DV: Hb
      }
    }

    function me(bb, wb, Mb) {
      const eb = wb => Math.abs(bb[0] - wb[0]) <= 1 && Math.abs(bb[1] - wb[1]) <= 1;
      return eb(wb) || eb(Mb)
    }

    function he(bb, wb) {
      return function(bb, wb, Mb, eb) {
        return [0, 1, 2, 3].map((Hb => {
          for (let pb = 1; pb <= ge.LASER_D; pb++) {
            const Vb = Be(bb, Hb, pb);
            if (me([Vb[0], Vb[2]], wb, Mb) || !eb(Vb)) return !1
          }
          return !0
        }))
      }(Ee(bb)[1], wb.spawnXZ, wb.coreXZ, (bb => bb[1] >= tM.n && bb[1] < tM.n + tM.o && bb[0] >= wb.minXZ[0] && bb[0] <= wb.maxXZ[0] && bb[2] >= wb.minXZ[1] && bb[2] <= wb.maxXZ[1]))
    }
    const ze = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Xe(bb) {
      return Math.max(48 + 16 * bb, Bb(bb).machineAllowance)
    }
    const xe = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function je(bb) {
      const wb = bb.split("|")[0];
      return xe.includes(wb) ? "Solar Panel" : wb === EM.e ? "Fluid Pipe" : te(wb) >= 0 ? "Collider" : (Mb = wb, ze.includes(Mb) ? wb : null);
      var Mb
    }
    const Ke = "buildAFactory2Game:solarPanelDescription";
    const re = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function Re(bb, wb) {
      var Mb;
      return null !== (Mb = re.find((Mb => {
        var eb;
        return (null !== (eb = bb.level(Mb)) && void 0 !== eb ? eb : 0) >= wb
      }))) && void 0 !== Mb ? Mb : null
    }
    const De = "buildAFactory2Game:";
    let ce = null;
    const Ye = {
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
      Ze = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      fe = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      Ae = {
        "Loot Chest": `${De}lookRuinChestName`
      };

    function We(bb, wb) {
      var Mb, eb, Hb;
      let pb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wb;
      if ("Solar Panel" === je(wb)) return {
        name: (0, Ab.Oe)(bb.displayName("Solar Panel")),
        detail: Ke,
        detailItem: null
      };
      const Vb = wb.endsWith(" Ore"),
        lb = (ce ??= new Set([...Object.keys((0, CM.g)()), ...Object.keys((0, EM.o)())].map((bb => bb.split("|")[0]))), ce).has(wb),
        Lb = Vb || lb ? null : function(bb) {
          var wb;
          return bb.endsWith(" Log") && !bb.startsWith("Barkless ") ? "lookLog" : bb.endsWith(" Sapling") ? "lookSapling" : bb.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (wb = Ye[bb]) && void 0 !== wb ? wb : null
        }(wb);
      if (!bb.isBlock(wb) || !Vb && !lb && null === Lb) return null;
      const Ib = null !== (Mb = Ae[wb]) && void 0 !== Mb ? Mb : (0, Ab._b)(wb, null !== (eb = bb.displayName(pb)) && void 0 !== eb ? eb : bb.displayName(wb));
      if (null !== Lb) return {
        name: Ib,
        detail: `${De}${Lb}`,
        detailItem: null
      };
      const Ob = null !== (Hb = Ze[wb]) && void 0 !== Hb ? Hb : gb() ? fe[wb] : void 0;
      if (lb && void 0 !== Ob) return {
        name: Ib,
        detail: `${De}${Ob}`,
        detailItem: null
      };
      const Ub = gM[wb];
      if (void 0 !== Ub) return {
        name: Ib,
        detail: `${De}lookDeposit`,
        detailItem: (0, Ab._b)(Ub, bb.displayName(Ub))
      };
      const tb = bb.harvestLevel(wb);
      if (Vb && "rock" === bb.harvestType(wb) && 0 !== tb) {
        const wb = Re(bb, null !== tb && void 0 !== tb ? tb : 0);
        if (wb === re[0]) return {
          name: Ib,
          detail: `${De}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== wb) return {
          name: Ib,
          detail: `${De}lookPickaxe`,
          detailItem: (0, Ab._b)(wb, bb.displayName(wb))
        }
      }
      return {
        name: Ib,
        detail: (0, Ab.Oe)(bb.description(wb)),
        detailItem: null
      }
    }

    function Je(bb) {
      return bb < tM.n - 24
    }
    const Se = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const Ne = "Wrench",
      ve = "Nova Wrench";

    function Qe(bb) {
      return bb === Ne || bb === ve
    }
    const Ge = [...tM.H, "Belt Lift", "Belt Drop"];
    const qe = ["Belt Lift", "Belt Drop"],
      ae = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function ie(bb) {
      return bb.split("|")[0]
    }

    function ue(bb) {
      const wb = /\|rot(\d)/.exec(bb);
      return wb ? Number(wb[1]) : 1
    }

    function de(bb) {
      return bb % 4 + 1
    }

    function Pe(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === wb && "" === Mb ? bb : `${bb}|meta|rot${wb}${Mb}`
    }

    function ne(bb) {
      return ie(bb) === tM.y ? (0, tM.N)(bb) ? "gateRight" : "gateLeft" : (0, tM.R)(bb)
    }

    function ye(bb) {
      const wb = ie(bb),
        Mb = ue(bb);
      if (tM.H.includes(wb)) return (0, tM.I)(wb, de(Mb), null);
      if (wb === tM.g) return (0, tM.W)(de(Mb), (0, tM.P)(bb));
      if (wb === tM.z) {
        const eb = ae[(0, tM.R)(bb)];
        return null === eb ? Pe(wb, de(Mb)) : Pe(wb, Mb, tM.C[eb])
      }
      return wb === tM.y ? (0, tM.N)(bb) ? Pe(wb, de(Mb)) : Pe(wb, Mb, tM.k) : FM.d.includes(wb) && !qe.includes(wb) || IM(wb) ? Pe(wb, de(Mb)) : null
    }

    function oe(bb) {
      return FM.d.includes(bb) || IM(bb) || null !== je(bb)
    }

    function Te(bb) {
      return "Solar Panel" === je(bb)
    }
    const ke = "buildAFactory2Game:",
      bH = {
        leftFront: `${ke}lookSplitDetail_leftFront`,
        frontRight: `${ke}lookSplitDetail_frontRight`,
        gateRight: `${ke}lookGateDetail_gateRight`
      };

    function wH(bb, wb) {
      var Mb;
      let eb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Hb = ne(bb),
        pb = null === Hb ? null : `${ke}${Hb.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Hb}`,
        Vb = null === Hb ? null : null !== (Mb = bH[Hb]) && void 0 !== Mb ? Mb : null;
      if (Qe(wb) && eb) {
        const Mb = ie(bb);
        return wb === ve && gb() && function(bb) {
          return Ge.includes(ie(bb))
        }(bb) ? {
          mode: pb,
          detail: Vb,
          next: `${ke}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: pb,
          detail: Vb,
          next: oe(Mb) && !Te(Mb) ? `${ke}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const lb = Qe(wb) ? ye(bb) : null;
      if (null === lb) return {
        mode: pb,
        detail: Vb,
        next: null,
        nextState: null
      };
      const Lb = ne(lb);
      return null === Lb || ue(lb) !== ue(bb) ? {
        mode: pb,
        detail: Vb,
        next: `${ke}lookWrenchTurn`,
        nextState: null
      } : {
        mode: pb,
        detail: Vb,
        next: `${ke}lookWrenchNext`,
        nextState: `${ke}lookWrenchState_${Lb}`
      }
    }
    const MH = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const eH = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function HH(bb) {
      return [0, 1, 2, 3].map((wb => 0 !== (bb & 1 << wb)))
    }

    function pH(bb) {
      const wb = [];
      for (let Mb = 8; Mb + 2 < bb.length; Mb += 3) wb.push([bb[Mb], bb[Mb + 1], bb[Mb + 2]]);
      return {
        focus: [bb[0], bb[1], bb[2]],
        lasers: HH(bb[3]),
        open: HH(bb[4]),
        live: HH(bb[5]),
        on: 1 === bb[6],
        state: eH[bb[7]],
        blockers: wb
      }
    }
    const VH = "Arc Caster",
      gH = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      lH = (Object.values(gH), "Jet Chestplate"),
      LH = "Nova Jet Chestplate",
      IH = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      OH = Object.values(IH);

    function UH(bb, wb, Mb) {
      return Math.min(function(bb) {
        return gb() && Ob(bb) >= 5 ? 20 : 10
      }(Mb), Math.floor(function(bb, wb) {
        return Math.max(0, bb) + (gb() ? Math.max(0, wb) : 0)
      }(bb, wb) / 5))
    }

    function tH(bb, wb, Mb) {
      const eb = UH(wb, Mb, bb),
        Hb = Ob(bb),
        pb = (Hb >= 3 ? 55 : Hb >= 1 ? 50 : bb >= 8 ? 45 : 30) + eb,
        Vb = Math.max(100 + eb, 2 * pb);
      return {
        arcDamage: pb,
        arcPierce: bb >= 7 ? 2 : 1,
        arcChain: bb >= 10,
        barrierMax: (Hb >= 4 ? 100 : Hb >= 2 ? 90 : bb >= 9 ? 80 : bb >= 6 ? 60 : 40) + 5 * eb,
        barrierRegenPerS: Hb >= 5 ? 20 : bb >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * eb,
        novaShieldRegenPerS: 32,
        bladeDamage: Vb,
        bladePunch: Math.round(.5 * Vb),
        forgeRank: eb
      }
    }
    const CH = {
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
    var EH = Mb(38047),
      FH = Mb(3538),
      BH = Mb(3531),
      sH = Mb(26),
      mH = Mb(1821),
      hH = Mb(1159),
      zH = Mb.n(hH);

    function XH(bb) {
      return !0 === bb.field
    }
    const xH = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function jH(bb) {
      return xH.has(bb) ? `buildAFactory2Game:itemPlural_${(0,Ab.De)(bb)}` : null
    }
    var KH = Mb(1259),
      rH = Mb(1475),
      RH = Mb(2130),
      DH = Mb(2116),
      cH = Mb(1557),
      YH = Mb(38041),
      ZH = Mb(29),
      fH = Mb(38032);
    const AH = "baf2QuestView",
      WH = "baf2PlayerY",
      JH = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class SH {
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
      set(bb, wb) {
        var Mb, eb, Hb, pb, Vb, gb, lb, Lb;
        const Ib = JSON.stringify(bb.baf2QuestName) === JSON.stringify(this.view.name),
          Ob = new Set(this.view.rows.filter((bb => bb.done)).map((bb => bb.id))),
          Ub = new Set(this.view.rows.filter((bb => bb.justFinished)).map((bb => bb.id))),
          tb = bb.baf2QuestSide,
          Cb = null !== tb && !0 === bb.baf2QuestSideFocus;
        let Eb = !1,
          Fb = 0;
        const Bb = bb.baf2QuestSteps.map((bb => {
            const wb = uH(bb, JH.has(bb[0]) ? bb[0] : "" + Fb++),
              Mb = Ib && wb.done && !Ob.has(wb.id);
            return wb.justFinished = Mb || Ib && wb.done && Ub.has(wb.id), Eb ||= Mb, wb
          })),
          sb = iH(Bb);
        sb >= 0 && !Cb && (Bb[sb].current = !0);
        const mb = !Ib && null !== bb.baf2QuestName,
          hb = JSON.stringify(tb && [tb[0], tb[1]]),
          zb = hb === JSON.stringify(null !== (Mb = null === (eb = this.view.side) || void 0 === eb ? void 0 : eb.name) && void 0 !== Mb ? Mb : null),
          Xb = null !== tb && !this.sidesSeen.has(hb);
        Xb && this.sidesSeen.add(hb), this.serverTutorial = null !== (Hb = bb.baf2QuestTutorial) && void 0 !== Hb ? Hb : "on", (null !== (pb = bb.baf2QuestTutorialSeq) && void 0 !== pb ? pb : 0) >= this.pickSeq && this.endPick();
        const xb = !Ib || !zb || bb.baf2QuestTier !== this.view.tier;
        this.view = {
          name: bb.baf2QuestName,
          rows: Bb,
          reward: bb.baf2QuestReward,
          goal: bb.baf2QuestGoal,
          pulse: this.view.pulse + (Eb || mb ? 1 : 0),
          itemNames: wb,
          side: tb && {
            name: [tb[0], tb[1]],
            row: {
              ...uH(tb[2], "side"),
              current: Cb
            },
            goal: null !== (Vb = tb[3]) && void 0 !== Vb ? Vb : null
          },
          sideCameUpAt: Xb ? Date.now() : this.view.sideCameUpAt,
          tier: bb.baf2QuestTier,
          core: bb.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (gb = bb.baf2QuestAlso) && void 0 !== gb ? gb : [],
          depth: null !== (lb = bb.baf2QuestDepth) && void 0 !== lb ? lb : null,
          tutorial: null !== (Lb = this.pickedTutorial) && void 0 !== Lb ? Lb : this.serverTutorial,
          tutorialKnown: !0
        }, this.iI(), Eb && this.scheduleClear(), xb && this.requestBook()
      }
      setTutorial(bb) {
        return this.endPick(), this.pickedTutorial = bb, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.iI()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: bb
        }, this.iI(), this.pickSeq
      }
      onPlayerY(bb) {
        const wb = Math.floor(bb);
        wb !== this.playerY && (this.playerY = wb, this.view.depth && ZH.k.iI(WH, wb))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(bb) {
        this.view = {
          ...this.view,
          chapters: bb.baf2BookChapters
        }, this.iI()
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
          }, this.iI()
        }), 2400)
      }
      iI() {
        ZH.k.iI(AH, this.view, !0)
      }
    }

    function NH(bb, wb) {
      return bb.sideCameUpAt > 0 && wb - bb.sideCameUpAt < 2400
    }

    function vH(bb) {
      return (null === bb.name || QH(bb)) && null === bb.side && null !== bb.chapters
    }

    function QH(bb) {
      var wb;
      return "quest_forgeOngoing" === (null === (wb = bb.name) || void 0 === wb ? void 0 : wb[0])
    }

    function GH(bb) {
      return bb.filter((bb => !JH.has(bb.key)))
    }

    function qH(bb) {
      return bb.key.startsWith("stepCraft")
    }

    function aH(bb, wb) {
      const Mb = new Set,
        eb = bb.side ? [...bb.rows, bb.side.row] : bb.rows;
      for (const pb of eb)
        if (!pb.done) {
          !pb.item || wb && !qH(pb) || Mb.add(pb.item);
          for (const [bb, wb, eb] of null !== (Hb = pb.chips) && void 0 !== Hb ? Hb : []) {
            var Hb;
            wb < eb && Mb.add(bb)
          }
        } return Mb
    }

    function iH(bb) {
      const wb = bb.findIndex((bb => !bb.done && !bb.away));
      return wb >= 0 ? wb : bb.findIndex((bb => !bb.done))
    }

    function uH(bb, wb) {
      let [Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob] = bb;
      return {
        id: wb,
        key: Mb,
        params: eb,
        item: Hb,
        amount: pb,
        total: Vb,
        done: gb,
        chips: null !== lb && void 0 !== lb ? lb : null,
        current: !1,
        away: !0 === Lb,
        madeFor: null !== Ib && void 0 !== Ib ? Ib : [],
        also: null !== Ob && void 0 !== Ob ? Ob : [],
        justFinished: !1
      }
    }
    const dH = "baf2QuestItems",
      PH = new Set;
    let nH = new Set,
      yH = null;

    function oH(bb) {
      const wb = fb(bb.tutorial),
        Mb = wb ? aH(bb, !0) : PH;
      "inventory" === sH.c.get("openInGameMenuName") ? (yH = null, (0, fH.t)(Mb)) : yH = Mb;
      const eb = wb ? aH(bb, !1) : PH;
      (0, YH.b)(eb, nH) || (nH = eb, ZH.k.iI(dH, nH))
    }

    function TH() {
      return (0, cH.b)(dH, (() => nH))
    }
    var kH = Mb(39714);
    const bp = [{
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

    function wp(bb, wb) {
      return [`Deposit Seed (${bb})`, {
        item: gM[`${bb} Deposit`],
        amount: wb
      }]
    }
    const Mp = Object.fromEntries([wp("Coal", 8), wp("Iron", 8), wp("Copper", 8), wp("Gold", 6), wp("Voltite", 4), wp("Uranium", 4)]),
      ep = "Relay Coil",
      Hp = new Map;

    function pp(bb) {
      let wb = Hp.get(bb);
      if (!wb) {
        const Mb = Math.max(1, bb);
        wb = bp.filter((bb => {
          var wb;
          return Mb >= bb.fromTier && Mb <= (null !== (wb = bb.untilTier) && void 0 !== wb ? wb : 1 / 0)
        })).map((bb => bb.later && Mb >= bb.later.tier ? {
          ...bb,
          weight: bb.later.weight
        } : bb)), Hp.set(bb, wb)
      }
      return wb
    }

    function Vp(bb) {
      return pp(bb).some((bb => {
        let {
          item: wb
        } = bb;
        return wb === ep
      }))
    }

    function gp(bb) {
      return bb.startsWith("Deposit Seed (")
    }

    function lp(bb, wb) {
      const Mb = pp(bb);
      return wb ? Mb.filter((bb => wb(bb.item))) : Mb
    }

    function Lp(bb) {
      return bb.reduce(((bb, wb) => bb + wb.weight), 0)
    }

    function Ip(bb, wb) {
      const Mb = lp(bb, wb),
        eb = Lp(Mb);
      return Mb.map((bb => ({
        find: bb,
        chance: bb.weight / eb
      })))
    }
    const Op = 6e4,
      Up = new Intl.NumberFormat("en-US");

    function tp(bb, wb) {
      const Mb = bb >= 10 ? Math.round(bb) : Math.round(10 * bb) / 10;
      return 0 === Mb ? "0" : `${wb}${Up.format(Mb)}`
    }

    function Cp(bb) {
      return bb < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Up.format(bb) : bb < 1e6 ? `${bb<1e5?Math.floor(bb/100)/10:Math.floor(bb/1e3)}k` : Math.floor(bb / 1e5) / 10 + "M"
    }

    function Ep(bb) {
      return bb < 0 ? "\u2212" + -bb : String(bb)
    }

    function Fp(bb, wb) {
      const Mb = Math.max(1, Math.round(wb));
      if (Mb < 60) return bb("buildAFactory2Game:durationSeconds", {
        seconds: String(Mb)
      });
      const eb = Math.round(Mb / 60);
      if (eb < 60) return bb("buildAFactory2Game:durationMinutes", {
        minutes: String(eb)
      });
      const Hb = String(Math.floor(eb / 60));
      return eb % 60 === 0 ? bb("buildAFactory2Game:durationWholeHours", {
        hours: Hb
      }) : bb("buildAFactory2Game:durationHours", {
        hours: Hb,
        minutes: String(eb % 60)
      })
    }
    var Bp = Mb(39721),
      sp = Mb(1364);

    function mp(bb, wb) {
      return null !== bb && bb > wb + 1
    }

    function hp(bb) {
      const wb = 100 * bb;
      return String(wb <= 0 || wb >= 1 ? Math.round(wb) : Math.max(.1, Math.round(10 * wb) / 10))
    }

    function zp(bb) {
      let {
        item: wb,
        amount: Mb
      } = bb;
      return (0, sp.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, sp.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, sp.jsx)(RH.c, {
            itemName: wb,
            amount: 0
          })
        }), Mb > 1 && (0, sp.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", Mb]
        })]
      })
    }

    function Xp(bb) {
      let {
        label: wb,
        names: Mb
      } = bb;
      const [Hb, pb] = (0, eb.useState)(!1), Vb = Mb.join(" / ");
      return (0, sp.jsxs)(sp.Fragment, {
        children: [(0, sp.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Vb,
          "aria-expanded": Hb,
          onClick: () => {
            pb(!Hb)
          },
          children: wb
        }), Hb && (0, sp.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Vb
        })]
      })
    }

    function xp(bb) {
      let {
        tier: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)(), {
        key: eb,
        params: Hb
      } = tb(wb, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), pb = Mb(`buildAFactory2Game:${eb}`, Hb);
      return (0, sp.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, sp.jsx)(rH.b, {
          name: "lock"
        }), pb]
      })
    }
    const jp = (0, eb.createContext)(null);

    function Kp() {
      const {
        t: bb
      } = (0, KH.C)(), wb = (0, eb.useContext)(jp);
      return (0, eb.useEffect)((() => null === wb || void 0 === wb ? void 0 : wb()), [wb]), (0, sp.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: bb("buildAFactory2Game:recipeForQuest"),
        "aria-label": bb("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function rp(bb) {
      let {
        title: wb,
        count: Mb,
        children: Hb,
        startOpen: pb = !0
      } = bb;
      const {
        t: Vb
      } = (0, KH.C)(), [gb, lb] = (0, eb.useState)((() => pb && !(0, Bp.d)())), [Lb, Ib] = (0, eb.useState)(0), Ob = (0, eb.useCallback)((() => (Ib((bb => bb + 1)), () => {
        Ib((bb => bb - 1))
      })), []);
      return (0, sp.jsxs)("div", {
        className: zH()("Baf2Recipes", {
          Open: gb
        }),
        children: [(0, sp.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            lb(!gb)
          },
          "aria-expanded": gb,
          children: [Vb("buildAFactory2Game:recipesToggle", {
            title: wb,
            count: String(Mb)
          }), (0, sp.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: gb ? "\u25be" : "\u25b8"
          })]
        }), gb && (0, sp.jsxs)(jp.Provider, {
          value: Ob,
          children: [(0, sp.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Hb
          }), Lb > 0 && (0, sp.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, sp.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Vb("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Rp = "buildAFactory2Game:",
      Dp = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const cp = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      Yp = {
        "Uranium Grit": pb,
        "Raw Uranium": pb
      };

    function Zp(bb) {
      var wb;
      return null !== (wb = Yp[bb]) && void 0 !== wb ? wb : Math.max(yb(bb), cp[bb] ? yb(cp[bb]) : 1, function(bb) {
        const wb = Hb.findIndex((wb => wb.cost.some((wb => wb.item === bb))));
        return wb > pb ? wb : 1
      }(bb))
    }

    function fp(bb, wb) {
      return Ap(wb) ? Zp(wb) : function(bb) {
        if (Dp.has(bb)) return 1;
        const wb = Hb.findIndex((wb => wb.newDeposits.some((wb => {
          let {
            block: Mb
          } = wb;
          return Mb === bb
        }))));
        return wb < 0 ? 1 : wb + 1
      }(bb)
    }

    function Ap(bb) {
      return bb in Yp || Ob(Zp(bb)) > 0
    }

    function Wp(bb, wb) {
      return Tw(bb, {
        coupled: !1,
        taught: null,
        atomic: gb() && wb >= 11
      }).recipes
    }

    function Jp(bb, wb) {
      const Mb = Ub(bb, wb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ob(bb) > 0);
      return "open" === Mb || "locked" === Mb
    }

    function Sp(bb, wb) {
      return bb.map(((bb, Mb) => ({
        value: bb,
        idx: Mb,
        tier: wb(bb)
      }))).sort(((bb, wb) => bb.tier - wb.tier || bb.idx - wb.idx)).map((bb => {
        let {
          value: wb
        } = bb;
        return wb
      }))
    }

    function Np(bb, wb, Mb) {
      const eb = Ub(bb, wb);
      if ("hidden" === eb || "open" === eb) return null;
      if ("teaser" === eb) return {
        tag: {
          translationKey: `${Rp}${Mb?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Rp}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Hb = tb(bb, {
          tier: Mb ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        pb = tb(bb, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Rp}${Hb.key}`,
          params: Hb.params
        },
        reason: {
          translationKey: `${Rp}${pb.key}`,
          params: pb.params
        }
      }
    }

    function vp(bb) {
      return !gp(bb)
    }

    function Qp(bb) {
      let {
        seconds: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)();
      return (0, sp.jsx)(rp, {
        title: Mb("buildAFactory2Game:recipesCuts", {
          seconds: wb
        }),
        count: 1,
        children: (0, sp.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, sp.jsx)(zp, {
            item: "Maple Sapling",
            amount: 1
          }), (0, sp.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, sp.jsx)(zp, {
            item: "Maple Log",
            amount: 1
          }), (0, sp.jsx)("span", {
            className: "Baf2RecipeName",
            children: Mb("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Gp(bb) {
      let {
        fertilised: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)();
      return (0, sp.jsxs)(rp, {
        title: Mb("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, sp.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, sp.jsx)(zp, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, sp.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, sp.jsx)(zp, {
            item: "Wheat",
            amount: 1
          }), (0, sp.jsx)(zp, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, sp.jsx)("span", {
            className: "Baf2RecipeName",
            children: Mb("buildAFactory2Game:recipeField")
          })]
        }), (0, sp.jsxs)("li", {
          className: zH()("Baf2Recipe", {
            InUse: wb
          }),
          children: [(0, sp.jsx)(zp, {
            item: "Fertiliser",
            amount: 1
          }), (0, sp.jsx)("span", {
            className: "Baf2RecipeName",
            children: Mb("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function qp(bb) {
      let {
        tier: wb,
        seconds: Mb
      } = bb;
      const {
        t: eb
      } = (0, KH.C)(), Hb = function(bb) {
        return bb >= 5 ? Xw : zw
      }(wb);
      return (0, sp.jsx)(rp, {
        title: eb("buildAFactory2Game:recipesBringsUp", {
          seconds: Mb
        }),
        count: Hb.length,
        children: Hb.map((bb => {
          let {
            item: wb,
            chance: Mb
          } = bb;
          return (0, sp.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, sp.jsx)(zp, {
              item: wb,
              amount: 1
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, kH.f)(eb, wb)
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: eb("buildAFactory2Game:recipeChance", {
                percent: hp(Mb)
              })
            })]
          }, wb)
        }))
      })
    }

    function ap(bb) {
      let {
        tier: wb,
        seconds: Mb,
        noSeeds: eb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)(), pb = TH(), Vb = Ip(wb, eb ? vp : void 0), gb = eb && Ip(wb).length > Vb.length, lb = Vp(wb);
      return (0, sp.jsxs)(rp, {
        title: Hb("buildAFactory2Game:recipesRecycles", {
          seconds: Mb
        }),
        count: Vb.length,
        children: [Vb.map((bb => {
          let {
            find: wb,
            chance: Mb
          } = bb;
          return (0, sp.jsxs)("li", {
            className: "Baf2Recipe",
            children: [pb.has(wb.item) && (0, sp.jsx)(Kp, {}), (0, sp.jsx)(zp, {
              item: wb.item,
              amount: wb.amount
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, kH.f)(Hb, wb.item)
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Hb("buildAFactory2Game:recipeChance", {
                percent: hp(Mb)
              })
            })]
          }, wb.item)
        })), gb && (0, sp.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, sp.jsx)("span", {
            className: "Baf2RecipeName",
            children: Hb("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), lb && (0, sp.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, sp.jsx)("span", {
            className: "Baf2RecipeName",
            children: Hb("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function ip(bb) {
      let {
        tier: wb,
        seconds: Mb
      } = bb;
      const {
        t: eb
      } = (0, KH.C)(), Hb = Object.entries(Mp).filter((bb => {
        let [, {
          item: Mb
        }] = bb;
        return Jp(Zp(Mb), wb, Ap(Mb))
      }));
      return (0, sp.jsx)(rp, {
        title: eb("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: Mb
        }),
        count: Hb.length,
        children: Hb.map((bb => {
          let [wb, {
            item: Mb,
            amount: Hb
          }] = bb;
          return (0, sp.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, sp.jsx)(zp, {
              item: wb,
              amount: 1
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, sp.jsx)(zp, {
              item: Mb,
              amount: Hb
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, kH.f)(eb, Mb)
            })]
          }, wb)
        }))
      })
    }

    function dp(bb) {
      let {
        tier: wb,
        seconds: Mb
      } = bb;
      const {
        t: eb
      } = (0, KH.C)(), Hb = TH(), pb = Sp(Object.entries(gM).filter((bb => {
        let [Mb, eb] = bb;
        return Jp(fp(Mb, eb), wb, Ap(eb))
      })), (bb => {
        let [wb, Mb] = bb;
        return fp(wb, Mb)
      }));
      return (0, sp.jsx)(rp, {
        title: eb("buildAFactory2Game:recipesDigs", {
          seconds: Mb
        }),
        count: pb.length,
        children: pb.map((bb => {
          let [Mb, pb] = bb;
          const Vb = fp(Mb, pb),
            gb = Vb > wb ? Vb : null,
            lb = lM[Mb],
            Lb = null === gb && Hb.has(pb);
          return (0, sp.jsxs)("li", {
            className: zH()("Baf2Recipe", {
              Locked: null !== gb,
              Far: mp(gb, wb)
            }),
            children: [Lb && (0, sp.jsx)(Kp, {}), (0, sp.jsx)(zp, {
              item: Mb,
              amount: 1
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, sp.jsx)(zp, {
              item: pb,
              amount: 1
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, kH.f)(eb, pb)
            }), void 0 !== lb && (0, sp.jsx)("span", {
              className: "Baf2RecipeMore",
              children: eb("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / lb)
              })
            }), null !== gb && (0, sp.jsx)(xp, {
              tier: gb
            })]
          }, Mb)
        }))
      })
    }

    function Pp(bb) {
      var wb;
      let {
        def: Mb,
        seconds: eb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)();
      return (0, sp.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, sp.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (wb = Mb.fuels) && void 0 !== wb ? wb : []).map((bb => (0, sp.jsx)(zp, {
            item: bb,
            amount: 1
          }, bb))), (0, sp.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, sp.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, sp.jsx)(rH.b, {
              name: "bolt"
            }), Hb("buildAFactory2Game:recipePower", {
              power: ob(Mb.powerMade),
              seconds: eb
            })]
          })]
        })
      })
    }

    function np(bb) {
      let {
        def: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)();
      return (0, sp.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, sp.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, sp.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, sp.jsx)(rH.b, {
              name: "bolt"
            }), Mb("buildAFactory2Game:recipeMixer", {
              cryo: tp((0, Tb.J)(wb, wb.cryoMade), "")
            })]
          })
        })
      })
    }

    function yp(bb) {
      let {
        def: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)();
      return (0, sp.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, sp.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, sp.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, sp.jsx)(rH.b, {
              name: "bolt"
            }), Mb("buildAFactory2Game:recipeCondenser", {
              power: tp((0, Tb.J)(wb, wb.powerPerOp), ""),
              water: tp((0, Tb.J)(wb, wb.fluidMade), "")
            })]
          })
        })
      })
    }

    function op(bb) {
      let {
        kind: wb,
        def: Mb,
        input: eb,
        tier: Hb,
        noSeeds: pb = !1
      } = bb;
      const Vb = String(Mb.opMs / 1e3);
      return eM(Mb) ? (0, sp.jsx)(Qp, {
        seconds: Vb
      }) : Mb.field ? (0, sp.jsx)(Gp, {
        fertilised: null !== eb
      }) : Mb.table ? (0, sp.jsx)(qp, {
        tier: Hb,
        seconds: Vb
      }) : Mb.recycles ? (0, sp.jsxs)(sp.Fragment, {
        children: [(0, sp.jsx)(ap, {
          tier: Hb,
          seconds: Vb,
          noSeeds: pb
        }), (0, sp.jsx)(ip, {
          tier: Hb,
          seconds: Vb
        })]
      }) : MM(Mb) ? (0, sp.jsx)(dp, {
        tier: Hb,
        seconds: Vb
      }) : void 0 !== Mb.fluidMade ? (0, sp.jsx)(yp, {
        def: Mb
      }) : void 0 !== Mb.cryoMade ? (0, sp.jsx)(np, {
        def: Mb
      }) : void 0 !== Mb.powerMade ? (0, sp.jsx)(Pp, {
        def: Mb,
        seconds: Vb
      }) : (0, sp.jsx)(Tp, {
        kind: wb,
        input: eb,
        tier: Hb,
        seconds: Vb
      })
    }

    function Tp(bb) {
      let {
        kind: wb,
        input: Mb,
        tier: eb,
        seconds: Hb
      } = bb;
      const {
        t: pb
      } = (0, KH.C)(), Vb = TH(), gb = Sp(function(bb) {
        const wb = new Map;
        for (const Hb of bb) {
          var Mb, eb;
          const bb = [Hb.output, Hb.outputAmount, Hb.inputAmount, null === (Mb = Hb.bonus) || void 0 === Mb ? void 0 : Mb.item, null === (eb = Hb.bonus) || void 0 === eb ? void 0 : eb.chance].join("|"),
            pb = wb.get(bb);
          pb ? pb.inputs.push(Hb.input) : wb.set(bb, {
            inputs: [Hb.input],
            inputAmount: Hb.inputAmount,
            output: Hb.output,
            outputAmount: Hb.outputAmount,
            bonus: Hb.bonus
          })
        }
        return [...wb.values()]
      }(Wp(wb, eb).filter(OM)), (bb => Zp(bb.output))).filter((bb => Jp(Zp(bb.output), eb, Ap(bb.output))));
      return (0, sp.jsx)(rp, {
        title: pb("buildAFactory2Game:recipesEach", {
          seconds: Hb
        }),
        count: gb.length,
        children: gb.map((bb => {
          const wb = null !== Mb && bb.inputs.includes(Mb),
            Hb = bb.inputs.length > 3 ? [wb ? Mb : bb.inputs[0]] : bb.inputs,
            gb = Zp(bb.output) > eb ? Zp(bb.output) : null,
            lb = null === gb && Vb.has(bb.output);
          return (0, sp.jsxs)("li", {
            className: zH()("Baf2Recipe", {
              InUse: wb,
              Locked: null !== gb,
              Far: mp(gb, eb)
            }),
            children: [lb && (0, sp.jsx)(Kp, {}), Hb.map(((wb, Mb) => (0, sp.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [Mb > 0 && (0, sp.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, sp.jsx)(zp, {
                item: wb,
                amount: bb.inputAmount
              })]
            }, wb))), Hb.length < bb.inputs.length && (0, sp.jsx)(Xp, {
              label: pb("buildAFactory2Game:recipeMore", {
                count: String(bb.inputs.length - Hb.length)
              }),
              names: bb.inputs.filter((bb => !Hb.includes(bb))).map((bb => (0, kH.f)(pb, bb)))
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, sp.jsx)(zp, {
              item: bb.output,
              amount: bb.outputAmount
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, kH.f)(pb, bb.output)
            }), bb.bonus && (0, sp.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [pb("buildAFactory2Game:recipeBonus", {
                percent: hp(bb.bonus.chance)
              }), (0, sp.jsx)(zp, {
                item: bb.bonus.item,
                amount: 1
              })]
            }), null !== gb && (0, sp.jsx)(xp, {
              tier: gb
            })]
          }, `${bb.output}|${bb.inputs[0]}`)
        }))
      })
    }

    function kp(bb) {
      let {
        taught: wb,
        tier: Mb
      } = bb;
      const {
        t: eb
      } = (0, KH.C)(), Hb = TH(), pb = Sp(Object.values(yw), (bb => bb.tier)).filter((bb => Jp(bb.tier, Mb)));
      return (0, sp.jsx)(rp, {
        title: eb("buildAFactory2Game:benchCanMake"),
        count: pb.length,
        startOpen: !1,
        children: pb.map((bb => {
          const pb = bb.tier > Mb,
            Vb = !pb && Hb.has(bb.output);
          return (0, sp.jsxs)("li", {
            className: zH()("Baf2Recipe", {
              InUse: bb.output === wb,
              Locked: pb,
              Far: mp(pb ? bb.tier : null, Mb)
            }),
            children: [Vb && (0, sp.jsx)(Kp, {}), (0, sp.jsx)(zp, {
              item: bb.output,
              amount: bb.outputAmount
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, kH.f)(eb, bb.output)
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), bb.inputs.map((bb => (0, sp.jsx)(zp, {
              item: bb.item,
              amount: bb.amount
            }, bb.item))), pb && (0, sp.jsx)(xp, {
              tier: bb.tier
            })]
          }, bb.output)
        }))
      })
    }
    var bV, wV, MV, eV, HV;
    const pV = Ww.Generator,
      VV = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      gV = 1e3 * (null !== (bV = pV.powerMade) && void 0 !== bV ? bV : 0) / pV.opMs,
      lV = Math.min(...(null !== (wV = pV.fuels) && void 0 !== wV ? wV : []).map((bb => VM[bb]))) / 1e3,
      LV = Ww["Volt Engine"],
      IV = 1e3 * (null !== (MV = LV.powerMade) && void 0 !== MV ? MV : 0) / LV.opMs,
      OV = VM[null !== (eV = null === (HV = LV.fuels) || void 0 === HV ? void 0 : HV[0]) && void 0 !== eV ? eV : ""] / 1e3;

    function UV(bb) {
      let {
        item: wb,
        label: Mb,
        value: eb,
        note: Hb,
        dim: pb
      } = bb;
      return (0, sp.jsxs)("li", {
        className: zH()("Baf2PowerRow", {
          Dim: pb
        }),
        children: [(0, sp.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, sp.jsx)(RH.c, {
            itemName: wb,
            amount: 0
          })
        }), (0, sp.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, sp.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: Mb
          }), Hb && (0, sp.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Hb
          })]
        }), (0, sp.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: eb
        })]
      })
    }

    function tV(bb, wb, Mb, eb) {
      var Hb;
      const pb = void 0 === eb ? Ww[bb] : function(bb, wb) {
          if (null === wb) return bb;
          let Mb = db.get(wb);
          return Mb || (Mb = {
            ...bb,
            powerPerOp: ub(bb, wb),
            farmMob: wb
          }, db.set(wb, Mb)), Mb
        }(Ww[bb], eb),
        Vb = wb && pb.couplable ? aw(pb, Mb) : pb;
      return 1e3 * (null !== (Hb = Vb.powerPerOp) && void 0 !== Hb ? Hb : 0) / Vb.opMs
    }

    function CV(bb) {
      var wb, Mb, eb, Hb, pb, Vb, gb, lb;
      let {
        message: Lb
      } = bb;
      const {
        t: Ib
      } = (0, KH.C)(), Ob = (bb, wb) => Ib("buildAFactory2Game:powerPerSecond", {
        rate: tp(bb, wb)
      }), [Ub, tb] = Lb.baf2PowerGenerators, Cb = Lb.baf2PowerGeneratorFuel, Eb = Lb.baf2PowerSunPanels, Fb = null !== (wb = Lb.baf2PowerSunShare) && void 0 !== wb ? wb : 1, Bb = Lb.baf2PowerVaults, sb = Lb.baf2PowerUsers, [mb, hb] = null !== (Mb = Lb.baf2PowerEngines) && void 0 !== Mb ? Mb : [0, 0], zb = null !== (eb = Lb.baf2PowerEngineCells) && void 0 !== eb ? eb : 0, Xb = null !== (Hb = Lb.baf2PowerPads) && void 0 !== Hb ? Hb : 0, xb = null !== (pb = Lb.baf2PowerCharge) && void 0 !== pb ? pb : 0, [jb, Kb] = null !== (Vb = Lb.baf2PowerReactors) && void 0 !== Vb ? Vb : [0, 0], [rb, Rb] = null !== (gb = Lb.baf2PowerBatteries) && void 0 !== gb ? gb : [0, 0];
      let Db = Ib("buildAFactory2Game:powerEngineCells", {
        amount: String(zb)
      });
      zb > 0 && hb > 0 && (Db = Ib("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(zb),
        time: Fp(Ib, zb * OV / hb)
      }));
      let cb = Ib("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(Cb)
      });
      Cb > 0 && tb > 0 && (cb = Ib("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(Cb),
        time: Fp(Ib, Cb * lV / tb)
      }));
      const Yb = Ub + mb + Eb + jb;
      return (0, sp.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, sp.jsxs)("section", {
          children: [(0, sp.jsxs)("h3", {
            children: [Ib("buildAFactory2Game:powerMaking"), (0, sp.jsx)("span", {
              children: Ob(Lb.baf2PowerMadePerS, "+")
            })]
          }), (0, sp.jsxs)("ul", {
            children: [0 === Yb && (0, sp.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Ib("buildAFactory2Game:powerNoMakers")
            }), Ub > 0 && (0, sp.jsx)(UV, {
              item: "Generator",
              label: `${(0,kH.f)(Ib,"Generator")} \xd7${Ub}`,
              note: `${Ib("buildAFactory2Game:powerRunning",{amount:String(tb)})} \xb7 ${cb}`,
              value: Ob(tb * gV, "+"),
              dim: 0 === tb
            }), mb > 0 && (0, sp.jsx)(UV, {
              item: "Volt Engine",
              label: `${(0,kH.f)(Ib,"Volt Engine")} \xd7${mb}`,
              note: `${Ib("buildAFactory2Game:powerRunning",{amount:String(hb)})} \xb7 ${Db}`,
              value: Ob(hb * IV, "+"),
              dim: 0 === hb
            }), Eb > 0 && (0, sp.jsx)(UV, {
              item: "Solar Panel",
              label: `${(0,kH.f)(Ib,"Solar Panel")} \xd7${Eb}`,
              note: Ib(Fb < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Ob(4 * Eb * Fb, "+")
            }), jb > 0 && (0, sp.jsx)(UV, {
              item: "Reactor Frame",
              label: `${Ib("buildAFactory2Game:powerReactors")} \xd7${jb}`,
              note: Ib("buildAFactory2Game:powerRunning", {
                amount: String(Kb)
              }),
              value: Ob(null !== (lb = Lb.baf2PowerReactorPerS) && void 0 !== lb ? lb : 0, "+"),
              dim: 0 === Kb
            })]
          })]
        }), (0, sp.jsxs)("section", {
          children: [(0, sp.jsxs)("h3", {
            children: [Ib("buildAFactory2Game:powerStorage"), (0, sp.jsx)("span", {
              children: ob(Lb.baf2PowerCap)
            })]
          }), (Bb > 0 || rb > 0) && (0, sp.jsxs)("ul", {
            children: [Bb > 0 && (0, sp.jsx)(UV, {
              item: "Charge Vault",
              label: `${(0,kH.f)(Ib,"Charge Vault")} \xd7${Bb}`,
              value: `+${ob(8e3*Bb)}`
            }), rb > 0 && (0, sp.jsx)(UV, {
              item: "Battery Cell",
              label: `${Ib("buildAFactory2Game:powerBatteries")} \xd7${rb}`,
              value: `+${ob(Rb)}`
            })]
          })]
        }), (0, sp.jsxs)("section", {
          children: [(0, sp.jsxs)("h3", {
            children: [Ib("buildAFactory2Game:powerUsing"), (0, sp.jsx)("span", {
              children: Ob(Lb.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, sp.jsxs)("ul", {
            children: [0 === sb.length && 0 === Xb && 0 === xb && (0, sp.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Ib("buildAFactory2Game:powerNoUsers")
            }), sb.map((bb => {
              let [wb, Mb, eb, Hb, pb = 1, Vb] = bb, gb = Mb ? Ib(VV[pb - 1], {
                name: (0, kH.f)(Ib, wb)
              }) : (0, kH.f)(Ib, wb);
              return void 0 !== Vb && (gb = Ib("buildAFactory2Game:powerFarmName", {
                name: gb,
                mob: Ib(qb(Vb))
              })), (0, sp.jsx)(UV, {
                item: wb,
                label: `${gb} \xd7${eb}`,
                note: Ib("buildAFactory2Game:powerRunning", {
                  amount: String(Hb)
                }),
                value: Hb > 0 ? Ob(Hb * tV(wb, Mb, pb, Vb), "\u2212") : Ib("buildAFactory2Game:powerIdle"),
                dim: 0 === Hb
              }, `${wb}|${Mb}|${pb}|${Vb}`)
            })), Xb > 0 && (0, sp.jsx)(UV, {
              item: "Charging Pad",
              label: `${(0,kH.f)(Ib,"Charging Pad")} \xd7${Xb}`,
              value: Ib("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), xb > 0 && (0, sp.jsx)(UV, {
              item: "Homestead Core",
              label: Ib("buildAFactory2Game:powerCharge"),
              value: Ob(xb, "\u2212")
            }), Lb.baf2PowerStarved > 0 && (0, sp.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, sp.jsx)(rH.b, {
                name: "triangle-exclamation"
              }), Ib("buildAFactory2Game:powerStarved", {
                amount: String(Lb.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var EV = Mb(5384),
      FV = Mb(1616);
    class BV {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(bb) {
        this.message = bb;
        for (const wb of this.listeners) wb()
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
    class sV extends BV {}

    function mV(bb, wb) {
      const Mb = () => {
          const Mb = bb.get();
          if (!Mb || !wb) return Mb;
          const [eb, Hb, pb] = Mb.baf2PowerAt;
          return eb === wb[0] && Hb === wb[1] && pb === wb[2] ? Mb : null
        },
        [Hb, pb] = (0, eb.useState)(Mb);
      return (0, eb.useEffect)((() => (pb(Mb()), bb.subscribe((() => {
        pb(Mb())
      })))), [bb, ...null !== wb && void 0 !== wb ? wb : []]), Hb
    }

    function hV(bb) {
      return {
        stored: bb.baf2PowerStored,
        cap: bb.baf2PowerCap,
        madePerS: bb.baf2PowerMadePerS,
        usedPerS: bb.baf2PowerUsedPerS
      }
    }

    function zV(bb) {
      let {
        stored: wb,
        cap: Mb
      } = bb;
      return (0, sp.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, sp.jsx)("div", {
          style: {
            width: `${Math.min(100,100*wb/Math.max(1,Mb))}%`
          }
        })
      })
    }

    function XV(bb) {
      let {
        figures: wb,
        labelled: Mb = !1
      } = bb;
      const {
        t: eb
      } = (0, KH.C)(), Hb = wb.madePerS - wb.usedPerS, {
        text: pb,
        draining: Vb
      } = function(bb, wb) {
        let {
          stored: Mb,
          cap: eb,
          madePerS: Hb,
          usedPerS: pb
        } = wb;
        const Vb = Hb - pb;
        return Mb >= eb ? {
          text: bb("buildAFactory2Game:powerFull"),
          draining: !1
        } : Vb > .05 ? {
          text: bb("buildAFactory2Game:powerFullIn", {
            time: Fp(bb, (eb - Mb) / Vb)
          }),
          draining: !1
        } : Vb < -.05 ? {
          text: bb("buildAFactory2Game:powerEmptyIn", {
            time: Fp(bb, Mb / -Vb)
          }),
          draining: !0
        } : {
          text: bb("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(eb, wb);
      return (0, sp.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, sp.jsx)(zV, {
          stored: wb.stored,
          cap: wb.cap
        }), (0, sp.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, sp.jsx)("span", {
            children: eb(Mb ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: ob(wb.stored),
              cap: ob(wb.cap)
            })
          }), (0, sp.jsxs)("span", {
            className: zH()("Baf2PowerNet", {
              Draining: Vb
            }),
            children: [eb("buildAFactory2Game:powerPerSecond", {
              rate: tp(Math.abs(Hb), Hb < 0 ? "\u2212" : "+")
            }), " \xb7 ", pb]
          })]
        })]
      })
    }

    function xV(bb) {
      let {
        stored: wb,
        cap: Mb,
        rates: eb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)();
      return eb ? (0, sp.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, sp.jsx)(XV, {
          figures: {
            stored: wb,
            cap: Mb,
            madePerS: eb[0],
            usedPerS: eb[1]
          },
          labelled: !0
        })
      }) : (0, sp.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, sp.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, sp.jsx)(zV, {
            stored: wb,
            cap: Mb
          }), (0, sp.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, sp.jsx)("span", {
              children: Hb("buildAFactory2Game:powerStoredLabelled", {
                stored: ob(wb),
                cap: ob(Mb)
              })
            })
          })]
        })
      })
    }

    function jV(bb) {
      let {
        store: wb,
        close: Mb
      } = bb;
      const {
        t: eb
      } = (0, KH.C)(), Hb = mV(wb);
      return (0, sp.jsx)(EV.e, {
        close: Mb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, sp.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsxs)("div", {
              children: [(0, sp.jsx)("h2", {
                id: "baf2PowerTitle",
                children: eb("buildAFactory2Game:powerTitle")
              }), (0, sp.jsx)("p", {
                children: eb("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, sp.jsx)(FV.l, {
              onClick: Mb
            })]
          }), Hb && (0, sp.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, sp.jsx)(XV, {
              figures: hV(Hb)
            }), (0, sp.jsx)(CV, {
              message: Hb
            })]
          })]
        })
      })
    }

    function KV(bb) {
      var wb;
      let {
        kind: Mb,
        def: Hb,
        aH: pb,
        power: Vb,
        stored: gb,
        cap: lb
      } = bb;
      const {
        t: Lb
      } = (0, KH.C)(), Ib = mV(Vb, pb), [Ob, Ub] = (0, eb.useState)(!1);
      return (0, sp.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, sp.jsx)(op, {
          kind: Mb,
          def: Hb,
          input: null,
          tier: null !== (wb = null === Ib || void 0 === Ib ? void 0 : Ib.baf2PowerTier) && void 0 !== wb ? wb : 1
        }), (0, sp.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Lb("buildAFactory2Game:powerTitle")
        }), Ib && (0, sp.jsx)(XV, {
          figures: hV(Ib)
        }), !Ib && (0, sp.jsx)(xV, {
          stored: gb,
          cap: lb,
          rates: null
        }), Ib && (0, sp.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Ub(!Ob)
          },
          "aria-expanded": Ob,
          children: Lb(Ob ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Ib && Ob && (0, sp.jsx)(CV, {
          message: Ib
        })]
      })
    }
    const rV = 2500,
      RV = 17500,
      DV = `${zb} `;
    const cV = ["plan", "throttle"];

    function YV(bb) {
      if (bb.startsWith(`${rw} `)) return bb.slice(0, bb.lastIndexOf(" "));
      const wb = bb.split(" ");
      return wb[0] === Iw && cV.includes(wb[4]) ? wb.slice(0, 5).join(" ") : null
    }
    class ZV {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = bb, this.now = wb, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.BVb = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = wb()
      }
      enqueue(bb) {
        this.queue(bb, this.nextTicket());
        const wb = this.BVb + this.pending.length;
        return this.flush(), wb
      }
      track(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Mb = this.nextTicket();
        if (!wb.urgent) return this.queue(bb, Mb), this.flush(), Mb;
        const {
          supersedes: eb
        } = wb;
        for (let pb = this.pending.length - 1; pb >= this.urgent; pb--) {
          const wb = this.pending[pb];
          (wb.command === bb || null !== eb && void 0 !== eb && eb(wb.command)) && (this.pending.splice(pb, 1), this.markLeft(wb.tickets))
        }
        const Hb = this.pending.findIndex((wb => {
          let {
            command: Mb
          } = wb;
          return Mb === bb
        }));
        return -1 !== Hb ? this.pending[Hb].tickets.push(Mb) : (this.pending.splice(this.urgent, 0, {
          command: bb,
          tickets: [Mb]
        }), this.urgent += 1), this.flush(), Mb
      }
      leftAt(bb) {
        const wb = this.leftTimes.get(bb);
        return void 0 !== wb ? wb : this.pending.some((wb => {
          let {
            tickets: Mb
          } = wb;
          return Mb.includes(bb)
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
        var wb;
        return (null === (wb = this.pending.at(-1)) || void 0 === wb ? void 0 : wb.command) === bb
      }
      sent() {
        return this.BVb
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
        const wb = this.now();
        for (const Mb of bb) this.leftTimes.set(Mb, wb);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(bb, wb) {
        const Mb = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === Mb || void 0 === Mb ? void 0 : Mb.command) === bb) return void(! function(bb) {
          return bb === Xb || bb.startsWith(`${hb} `) || bb.startsWith(`${vb} `)
        }(bb) ? Mb.tickets.push(wb) : (this.pending.pop(), this.markLeft([...Mb.tickets, wb])));
        const eb = void 0 === Mb ? null : Lw(Mb.command, bb);
        if (null !== eb && void 0 !== Mb) return Mb.command = eb, void Mb.tickets.push(wb);
        const Hb = YV(bb);
        if (null !== Hb && void 0 !== Mb && YV(Mb.command) === Hb) return Mb.command = bb, void Mb.tickets.push(wb);
        if (null !== Mb && void 0 !== Mb && Mb.command.startsWith(DV) && bb.startsWith(DV)) {
          const eb = bb.slice(DV.length);
          if (Mb.command.slice(DV.length).split(",").includes(eb)) return void Mb.tickets.push(wb);
          const Hb = `${Mb.command},${eb}`;
          if (Hb.length <= 119) return Mb.command = Hb, void Mb.tickets.push(wb)
        }
        this.pending.push({
          command: bb,
          tickets: [wb]
        })
      }
      flush() {
        const bb = this.now();
        for (this.tokens = Math.min(5, this.tokens + (bb - this.refilledAt) / rV), this.refilledAt = bb; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.BVb += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: bb,
            tickets: wb
          } = this.pending.shift();
          this.markLeft(wb), this.send(bb)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * rV)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class fV {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new ZV(bb, wb)
      }
      send(bb) {
        return this.queue.enqueue(bb)
      }
      sent() {
        return this.queue.sent()
      }
      track(bb, wb) {
        return this.queue.track(bb, wb)
      }
      leftAt(bb) {
        return this.queue.leftAt(bb)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(bb) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = wb, this.send(bb), this.islandEdits.count
      }
      syncIslandEdits(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: Mb
        } = this, eb = wb - Mb.lastAtMs < RV;
        Mb.count = eb ? Math.max(Mb.count, bb) : bb
      }
      clear() {
        this.queue.clear()
      }
    }
    const AV = (0, eb.createContext)(null);

    function WV() {
      const bb = (0, eb.useContext)(AV);
      if (!bb) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return bb
    }

    function JV(bb, wb) {
      return null !== wb && void 0 !== wb ? wb : 1 === bb
    }

    function SV(bb, wb) {
      return bb.every((bb => {
        var Mb;
        let [eb, , Hb] = bb;
        return !JV(Hb, null === (Mb = wb.get(eb)) || void 0 === Mb ? void 0 : Mb.nI)
      }))
    }

    function NV(bb, wb, Mb) {
      if (0 === bb.size) return bb;
      const eb = new Map(bb);
      for (const [Hb, pb] of bb) {
        const bb = wb.find((bb => {
          let [wb] = bb;
          return wb === Hb
        }));
        (!bb || pb.nI === (1 === bb[2]) || pb.atMs < Mb) && eb.delete(Hb)
      }
      return eb
    }

    function vV(bb) {
      var wb;
      let {
        aH: Mb,
        input: Hb,
        drops: pb,
        seconds: Vb
      } = bb;
      const {
        t: gb
      } = (0, KH.C)(), lb = WV(), [Lb, Ib] = (0, eb.useState)(new Map);
      (0, eb.useEffect)((() => {
        pb && Ib((bb => NV(bb, pb, Date.now() - RV)))
      }), [pb]), (0, eb.useEffect)((() => {
        const bb = function(bb, wb) {
          let Mb = null;
          for (const {
              atMs: eb
            }
            of bb.values()) Mb = null === Mb ? eb : Math.min(Mb, eb);
          return null === Mb ? null : Mb + wb
        }(Lb, RV);
        if (null === bb || !pb) return;
        const wb = setTimeout((() => {
          Ib((bb => NV(bb, pb, Date.now() - RV)))
        }), Math.max(0, bb - Date.now()) + 1);
        return () => {
          clearTimeout(wb)
        }
      }), [Lb, pb]);
      const Ob = ab(Hb),
        Ub = null !== Ob && null !== pb && SV(pb, Lb),
        tb = function(bb, wb, Mb) {
          return null === bb || null === wb || SV(wb, Mb) ? 0 : Nb[Jb[bb]]
        }(Ob, pb, Lb);
      return (0, sp.jsxs)(rp, {
        title: gb("buildAFactory2Game:farmDropsTitle", {
          seconds: Vb
        }),
        count: null !== (wb = null === pb || void 0 === pb ? void 0 : pb.length) && void 0 !== wb ? wb : 0,
        children: [tb > 0 && (0, sp.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: gb("buildAFactory2Game:farmDropsPower", {
            power: String(tb)
          })
        }), (null === Ob || !pb) && (0, sp.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: gb("buildAFactory2Game:farmDropsEmpty")
        }), Ub && (0, sp.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: gb("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Ob && (null === pb || void 0 === pb ? void 0 : pb.map((bb => {
          var wb;
          let [eb, Hb, pb] = bb;
          const Vb = Hb < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Ob = JV(pb, null === (wb = Lb.get(eb)) || void 0 === wb ? void 0 : wb.nI);
          return (0, sp.jsxs)("li", {
            className: zH()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Ob
            }),
            children: [(0, sp.jsx)(zp, {
              item: eb,
              amount: 1
            }), (0, sp.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, kH.f)(gb, eb)
            }), (0, sp.jsx)("span", {
              className: "Baf2FarmRate",
              children: gb(Vb, {
                amount: String(Hb)
              })
            }), (0, sp.jsx)("button", {
              type: "button",
              className: zH()("Baf2FarmToggle SmallTextBold", {
                Kept: Ob
              }),
              "aria-pressed": Ob,
              onClick: () => {
                Ib(new Map(Lb).set(eb, {
                  nI: !Ob,
                  atMs: Date.now()
                })), lb.send(function(bb, wb, Mb, eb) {
                  return `${vb} ${bb} ${wb} ${Mb} ${eb}`
                }(Mb[0], Mb[1], Mb[2], eb))
              },
              children: gb(Ob ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, eb)
        })))]
      })
    }
    var QV;
    const GV = String(null !== (QV = Ww.Synthesizer.waterPerOp) && void 0 !== QV ? QV : 0);

    function qV(bb) {
      let {
        aH: wb,
        taught: Mb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)(), pb = WV(), [Vb, gb] = (0, eb.useState)(null);
      (0, eb.useEffect)((() => {
        null !== Vb && Mb === Vb && gb(null)
      }), [Vb, Mb]);
      const lb = null !== Vb && void 0 !== Vb ? Vb : Mb;
      let Lb = Hb("buildAFactory2Game:synthPick");
      return null !== lb && (Lb = Hb("buildAFactory2Game:synthGrows", {
        name: (0, kH.f)(Hb, lb),
        input: (0, kH.f)(Hb, xw),
        water: GV
      })), (0, sp.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, sp.jsx)("div", {
          className: zH()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === lb
          }),
          children: Lb
        }), (0, sp.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: jw.map(((bb, Mb) => {
            const eb = (0, kH.f)(Hb, bb),
              Vb = bb === lb;
            return (0, sp.jsx)("li", {
              children: (0, sp.jsx)("button", {
                type: "button",
                className: zH()("Baf2SynthTile", {
                  Selected: Vb
                }),
                title: eb,
                "aria-label": eb,
                "aria-pressed": Vb,
                onClick: () => {
                  Vb || (gb(bb), pb.send(`${rw} ${wb[0]} ${wb[1]} ${wb[2]} ${Mb}`))
                },
                children: (0, sp.jsx)(RH.c, {
                  itemName: bb,
                  amount: 0
                })
              })
            }, bb)
          }))
        })]
      })
    }
    const aV = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function iV(bb) {
      let {
        kind: wb,
        tier: Mb,
        coupled: eb,
        level: Hb,
        slot: pb
      } = bb;
      const {
        t: Vb
      } = (0, KH.C)(), lb = yb(Sw);
      if (!eb && null !== Mb && Mb < lb) return (0, sp.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, sp.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, sp.jsx)(rH.b, {
            name: "lock"
          })
        }), (0, sp.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Vb("buildAFactory2Game:upgradeLocked")
        }), (0, sp.jsx)("span", {
          className: "Baf2TierTag",
          children: Vb("buildAFactory2Game:tierTag", {
            tier: String(lb)
          })
        })]
      });
      const Lb = function(bb, wb) {
          if (gb() && "Crusher" !== bb && null !== wb) {
            if (uV(vw, wb)) return {
              item: vw,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (uV(Nw, wb)) return {
              item: Nw,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Sw,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(wb, Mb),
        Ib = Vb(eb ? aV[Hb - 1] : Lb.emptyKey),
        Ob = null !== Mb ? function(bb, wb, Mb, eb) {
          if (!gb() || !Mb || "Crusher" === bb || wb < 10) return null;
          const Hb = yb(vw);
          if (eb < 3 && Hb > 1 && (2 === eb || wb >= Hb)) return {
            tier: Hb,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const pb = yb(Nw);
          if (1 === eb && pb > 1) return {
            tier: pb,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(wb, Mb, eb, Hb) : null;
      return (0, sp.jsxs)("div", {
        className: zH()("Baf2UpgradeSocket", {
          Fitted: eb
        }),
        children: [(0, sp.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [eb && pb, !eb && (0, sp.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, sp.jsx)(RH.c, {
              itemName: Lb.item,
              amount: 0
            })
          })]
        }), (0, sp.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, sp.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Vb("buildAFactory2Game:upgradeTitle")
          }), (0, sp.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Ib
          }), eb && Hb >= 2 && "Crusher" === wb && (0, sp.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Vb("buildAFactory2Game:couplerCrusherHint")
          }), Ob && null !== Mb && Mb < Ob.tier && (0, sp.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, sp.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, sp.jsx)(rH.b, {
                name: "lock"
              })
            }), Vb(Ob.lockedKey), (0, sp.jsx)("span", {
              className: "Baf2TierTag",
              children: Vb("buildAFactory2Game:tierTag", {
                tier: String(Ob.tier)
              })
            })]
          }), Ob && null !== Mb && Mb >= Ob.tier && (0, sp.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Vb(Ob.nextKey)
          })]
        })]
      })
    }

    function uV(bb, wb) {
      const Mb = yb(bb);
      return Mb > 1 && wb >= Mb
    }
    var dV = Mb(38227);
    const PV = (0, Tb.J)(Ww.Condenser, Ww.Condenser.fluidMade),
      nV = .05;
    class yV extends BV {}

    function oV(bb) {
      return tp(bb, "")
    }

    function TV(bb, wb, Mb) {
      return bb(wb ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: Mb
      })
    }

    function kV(bb, wb, Mb, eb) {
      return Mb <= nV && eb <= nV ? null : eb <= nV || Mb <= nV ? TV(bb, wb, eb <= nV ? tp(Mb, "+") : tp(eb, "\u2212")) : bb(wb ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: oV(Mb),
        used: oV(eb)
      })
    }

    function bg(bb, wb) {
      return Math.min(100, 100 * bb / Math.max(1, wb))
    }

    function wg(bb) {
      let {
        stored: wb,
        cap: Mb,
        netPerS: eb,
        rates: Hb,
        cryo: pb
      } = bb;
      const {
        t: Vb
      } = (0, KH.C)(), gb = function(bb, wb, Mb, eb) {
        return Mb <= 0 ? bb("buildAFactory2Game:waterNoStorage") : wb >= Mb ? bb("buildAFactory2Game:powerFull") : eb > nV ? bb("buildAFactory2Game:powerFullIn", {
          time: Fp(bb, (Mb - wb) / eb)
        }) : eb < -.05 ? wb <= 0 ? bb("buildAFactory2Game:waterEmpty") : bb("buildAFactory2Game:powerEmptyIn", {
          time: Fp(bb, wb / -eb)
        }) : bb("buildAFactory2Game:powerSteady")
      }(Vb, wb, Mb, eb), lb = Mb > 0 && wb < Mb && Math.abs(eb) <= nV, Lb = Vb(pb ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Ib = null !== Hb ? `${Hb} \xb7 ${gb}` : lb ? Lb : `${Lb} \xb7 ${gb}`;
      return (0, sp.jsxs)(sp.Fragment, {
        children: [(0, sp.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, sp.jsx)("div", {
            style: {
              width: `${bg(wb,Mb)}%`
            }
          })
        }), (0, sp.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, sp.jsx)("span", {
            children: Mb > 0 && Vb("buildAFactory2Game:powerStored", {
              stored: (0, Tb.T)(wb),
              cap: (0, Tb.T)(Mb)
            })
          }), (0, sp.jsx)("span", {
            className: zH()("Baf2WaterNet", {
              Draining: eb < -.05
            }),
            children: Ib
          })]
        })]
      })
    }

    function Mg(bb) {
      let {
        water: wb,
        at: Mb,
        side: eb = null
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)(), pb = WV(), [Vb, gb, lb] = wb;
      return (0, sp.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, sp.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, sp.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Hb(null === eb ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${eb}`)
          }), (0, sp.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              pb.send(`${Tb.E} ${Mb[0]} ${Mb[1]} ${Mb[2]}${"cryoOut"===eb?" cryo":""}`)
            },
            children: Hb("buildAFactory2Game:waterDetails")
          })]
        }), (0, sp.jsx)(wg, {
          stored: Vb,
          cap: gb,
          netPerS: lb,
          rates: TV(Hb, "cryoOut" === eb, tp(Math.abs(lb), lb < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === eb
        })]
      })
    }

    function eg(bb, wb) {
      var Mb, eb, Hb;
      const pb = !0 === wb.baf2WaterCryo,
        Vb = null !== (Mb = null === (eb = wb.baf2WaterMakers.find((bb => bb[0] === (pb ? Tb.c : "Condenser")))) || void 0 === eb ? void 0 : eb[1]) && void 0 !== Mb ? Mb : 0,
        gb = [],
        lb = (wb, Mb, eb) => {
          wb > 0 && gb.push(bb(1 === wb ? Mb : eb, {
            count: String(wb)
          }))
        };
      return pb ? lb(Vb, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : lb(Vb, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), lb(null !== (Hb = wb.baf2WaterPipes) && void 0 !== Hb ? Hb : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), lb(wb.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), gb.join(" \xb7 ")
    }

    function Hg(bb, wb) {
      if (!0 === wb.baf2WaterCryo) return function(bb, wb) {
        const Mb = Ww[Tb.c];
        switch (wb.baf2WaterThis) {
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
            var eb;
            const [Hb, pb] = null !== (eb = wb.baf2WaterThisRates) && void 0 !== eb ? eb : [(0, Tb.J)(Mb, Mb.cryoMade), (0, Tb.J)(Mb, Mb.powerPerOp)];
            return !0 === wb.baf2WaterDriven ? {
              text: bb("buildAFactory2Game:cryoThisMixerDriven", {
                rate: oV(Hb)
              }),
              bad: !1
            } : {
              text: bb("buildAFactory2Game:cryoThisMixer", {
                rate: oV(Hb),
                power: oV(pb)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: bb("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(bb, wb);
      const Mb = !0 === wb.baf2WaterDriven,
        eb = Ww.Condenser;
      switch (wb.baf2WaterThis) {
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
              tank: (0, Tb.T)(Tb.u),
              cap: (0, Tb.T)(wb.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Hb;
          const [pb, Vb] = null !== (Hb = wb.baf2WaterThisRates) && void 0 !== Hb ? Hb : [PV, (0, Tb.J)(eb, eb.powerPerOp)];
          return Mb ? {
            text: bb("buildAFactory2Game:waterThisCondenserDriven", {
              rate: oV(pb)
            }),
            bad: !1
          } : {
            text: bb("buildAFactory2Game:waterThisCondenser", {
              rate: oV(pb),
              power: oV(Vb)
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

    function pg(bb, wb) {
      const Mb = wb.baf2WaterMakers.some((bb => !0 === bb[5]));
      if (!0 === wb.baf2WaterCryo) {
        const eb = wb.baf2WaterUsedPerS - wb.baf2WaterMadePerS,
          Hb = Mb || eb <= nV ? 0 : (0, Tb.I)(eb);
        return 0 === Hb ? null : Hb > 1 ? bb("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Hb)
        }) : bb("buildAFactory2Game:cryoNextOne")
      }
      const eb = Mb ? null : function(bb, wb) {
        const Mb = wb - bb;
        return Mb <= nV ? null : Math.ceil(Mb / PV)
      }(wb.baf2WaterMadePerS, wb.baf2WaterUsedPerS);
      return null === eb ? null : eb > 1 ? bb("buildAFactory2Game:waterNextCondensers", {
        condensers: String(eb)
      }) : bb("buildAFactory2Game:waterNextOne")
    }

    function Vg(bb) {
      let {
        item: wb,
        label: Mb,
        note: eb,
        value: Hb,
        dim: pb,
        bad: Vb
      } = bb;
      return (0, sp.jsxs)("li", {
        className: zH()("Baf2WaterRow", {
          Dim: pb,
          Bad: Vb
        }),
        children: [(0, sp.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, sp.jsx)(RH.c, {
            itemName: wb,
            amount: 0
          })
        }), (0, sp.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, sp.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: Mb
          }), eb && (0, sp.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: eb
          })]
        }), (0, sp.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Hb
        })]
      })
    }

    function gg(bb) {
      return dV.o[bb] ? bb : "Reactor Port"
    }

    function lg(bb) {
      let {
        message: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)(), eb = !0 === wb.baf2WaterCryo, Hb = (bb, wb) => TV(Mb, eb, tp(bb, wb));
      return (0, sp.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, sp.jsxs)("section", {
          children: [(0, sp.jsxs)("h3", {
            children: [Mb("buildAFactory2Game:waterMakes"), (0, sp.jsx)("span", {
              children: Hb(wb.baf2WaterMadePerS, "+")
            })]
          }), (0, sp.jsxs)("ul", {
            children: [0 === wb.baf2WaterMakers.length && (0, sp.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Mb(eb ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), wb.baf2WaterMakers.map((bb => {
              let [wb, eb, pb, Vb, gb, lb] = bb;
              const Lb = Mb("buildAFactory2Game:powerRunning", {
                amount: String(pb)
              });
              let Ib = gb > 0 ? Mb("buildAFactory2Game:waterMakerPower", {
                running: Lb,
                power: oV(gb)
              }) : Lb;
              return lb && (Ib = Mb(0 === pb && Vb <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, sp.jsx)(Vg, {
                item: wb,
                label: `${(0,kH.f)(Mb,wb)} \xd7${eb}`,
                note: Ib,
                value: pb > 0 || lb && Vb > 0 ? Hb(Vb, "+") : Mb("buildAFactory2Game:powerIdle"),
                dim: 0 === pb && !lb,
                bad: lb
              }, wb)
            }))]
          })]
        }), (0, sp.jsxs)("section", {
          children: [(0, sp.jsxs)("h3", {
            children: [Mb("buildAFactory2Game:waterUses"), (0, sp.jsx)("span", {
              children: Hb(wb.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, sp.jsxs)("ul", {
            children: [0 === wb.baf2WaterUsers.length && (0, sp.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Mb(eb ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), wb.baf2WaterUsers.map((bb => {
              let [wb, eb, pb, Vb] = bb;
              const gb = dV.o[wb] ? (0, kH.f)(Mb, wb) : wb;
              return (0, sp.jsx)(Vg, {
                item: gg(wb),
                label: eb > 1 ? `${gb} \xd7${eb}` : gb,
                note: Vb ? Mb("buildAFactory2Game:waterPortFirst") : void 0,
                value: pb > 0 ? Hb(pb, "\u2212") : Mb("buildAFactory2Game:powerIdle"),
                dim: 0 === pb
              }, wb)
            }))]
          })]
        })]
      })
    }

    function Lg(bb) {
      var wb, Mb, Hb, pb, Vb;
      let {
        store: gb,
        close: lb
      } = bb;
      const {
        t: Lb
      } = (0, KH.C)(), Ib = function(bb) {
        const [wb, Mb] = (0, eb.useState)((() => bb.get()));
        return (0, eb.useEffect)((() => (Mb(bb.get()), bb.subscribe((() => {
          Mb(bb.get())
        })))), [bb]), wb
      }(gb), Ob = null !== (wb = null === Ib || void 0 === Ib ? void 0 : Ib.baf2WaterStored) && void 0 !== wb ? wb : 0, Ub = null !== (Mb = null === Ib || void 0 === Ib ? void 0 : Ib.baf2WaterCap) && void 0 !== Mb ? Mb : 0, tb = null !== (Hb = null === Ib || void 0 === Ib ? void 0 : Ib.baf2WaterMadePerS) && void 0 !== Hb ? Hb : 0, Cb = null !== (pb = null === Ib || void 0 === Ib ? void 0 : Ib.baf2WaterUsedPerS) && void 0 !== pb ? pb : 0, Eb = null !== (Vb = null === Ib || void 0 === Ib ? void 0 : Ib.baf2WaterNetPerS) && void 0 !== Vb ? Vb : tb - Cb, Fb = Ib && Hg(Lb, Ib), Bb = Ib && pg(Lb, Ib), sb = !0 === (null === Ib || void 0 === Ib ? void 0 : Ib.baf2WaterCryo);
      return (0, sp.jsx)(EV.e, {
        close: lb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, sp.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Ib && Ub <= 0 ? (0, sp.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, sp.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, sp.jsx)(RH.c, {
                  itemName: sb ? EM.f : Tb.l,
                  amount: 0
                })
              }), (0, sp.jsxs)("div", {
                children: [(0, sp.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Lb(sb ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Ib && (0, sp.jsx)("p", {
                  children: eg(Lb, Ib)
                })]
              })]
            }), (0, sp.jsx)(FV.l, {
              onClick: lb
            })]
          }), Ib && Fb && (0, sp.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, sp.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, sp.jsx)(wg, {
                stored: Ob,
                cap: Ub,
                netPerS: Eb,
                cryo: sb,
                rates: kV(Lb, sb, tb, Cb)
              })
            }), (0, sp.jsx)("div", {
              className: zH()("Baf2WaterThis", {
                Bad: Fb.bad
              }),
              children: Fb.text
            }), Ib.baf2WaterDriven && (0, sp.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, sp.jsx)(rH.b, {
                name: "bolt"
              }), Lb(sb ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), Bb && (0, sp.jsx)("p", {
              className: "Baf2WaterNext",
              children: Bb
            }), (0, sp.jsx)(lg, {
              message: Ib
            })]
          })]
        })
      })
    }
    class Ig {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(bb, wb) {
        const Mb = this.get(bb);
        Mb && null === wb.opLeftMs && null === wb.fuelLeftMs && wb.status === Mb.status ? wb = {
          ...wb,
          opLeftMs: Mb.opLeftMs,
          fuelLeftMs: Mb.fuelLeftMs,
          burning: Mb.burning
        } : this.updates++, this.pos = bb, this.view = wb;
        for (const eb of this.listeners) eb()
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

    function Og(bb, wb, Mb, eb) {
      return "noFuel" === wb && eb && !pM(Ww[bb]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === wb && !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === wb && !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === wb && !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === wb && !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Ug(wb, Mb) ? "buildAFactory2Game:machineStatus_noInputShort" : function(bb, wb) {
        const Mb = Ww[bb];
        if ("noFuel" === wb && void 0 !== Mb.fuels) return pM(Mb) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (Mb.mobFarm && ("noInput" === wb || "badInput" === wb)) return `buildAFactory2Game:machineStatus_${wb}MobFarm`;
        if ("outputFull" === wb && (void 0 !== Mb.table || Mb.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === wb && Pw(Mb)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== Mb.cryoMade && ("noInput" === wb || "noOutlet" === wb || "fluidFull" === wb)) return `buildAFactory2Game:machineStatus_${wb}Mixer`;
        return `buildAFactory2Game:machineStatus_${wb}`
      }(bb, wb)
    }

    function Ug(bb, wb) {
      return "noInput" === bb && null !== wb && void 0 !== wb && wb.input && wb.inputShort ? {
        input: wb.input,
        short: wb.inputShort
      } : null
    }

    function tg(bb) {
      return XH(bb) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== bb.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Cg(bb) {
      const wb = (0, Ab.De)(bb);
      return `Baf2Pane Baf2Pane${wb.charAt(0).toUpperCase()}${wb.slice(1)}`
    }

    function Eg(bb, wb) {
      const [Mb, Hb] = (0, eb.useState)((() => bb.get(wb)));
      return (0, eb.useEffect)((() => {
        Hb(bb.get(wb));
        const Mb = bb.subscribe((() => {
          Hb(bb.get(wb))
        }));
        return () => {
          Mb(), bb.forget(wb)
        }
      }), [bb, ...wb]), Mb
    }

    function Fg(bb, wb, Mb, eb) {
      const Hb = Ww[bb],
        pb = wb && Hb.couplable ? aw(Hb, Mb) : Hb,
        Vb = null !== eb && MM(pb) ? function(bb, wb) {
          var Mb;
          return null !== (Mb = null !== wb && MM(bb) ? lM[wb] : void 0) && void 0 !== Mb ? Mb : bb.opMs
        }(pb, LM(eb)) : pb.opMs;
      return Vb === pb.opMs ? pb : {
        ...pb,
        opMs: Vb
      }
    }

    function Bg(bb) {
      let {
        running: wb,
        opMs: Mb,
        opLeftMs: eb,
        updateCount: Hb
      } = bb;
      return (0, sp.jsx)("div", {
        className: zH()("Baf2MachineProgress", {
          Running: wb
        }),
        children: (0, sp.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: Mb / 1e3 + "s",
            animationDelay: null === eb ? void 0 : (eb - Mb) / 1e3 + "s"
          }
        }, Hb)
      })
    }

    function sg(bb) {
      let {
        running: wb,
        leftMs: Mb,
        periodMs: eb,
        updateCount: Hb
      } = bb;
      const {
        t: pb
      } = (0, KH.C)(), Vb = Math.min(Math.max(null !== Mb && void 0 !== Mb ? Mb : 0, 0), eb), gb = wb && Vb > 0, lb = pb("buildAFactory2Game:machineBarFuel");
      return (0, sp.jsx)("div", {
        className: zH()("Baf2FuelBurn", {
          Draining: gb
        }),
        role: "img",
        title: lb,
        "aria-label": lb,
        children: (0, sp.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: gb ? {
            animationDuration: eb / 1e3 + "s",
            animationDelay: (Vb - eb) / 1e3 + "s"
          } : {
            transform: `scaleY(${Vb/eb})`
          }
        }, Hb)
      })
    }

    function mg(bb, wb, Mb) {
      let [eb, Hb] = Mb;
      const pb = 1 !== eb ? jH(wb) : null;
      return {
        amount: eb,
        have: Hb,
        item: bb(pb || (0, kH.d)(wb))
      }
    }

    function hg(bb) {
      return MM(bb) ? "buildAFactory2Game:machineBarMining" : eM(bb) ? "buildAFactory2Game:machineBarCutting" : void 0 !== bb.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function zg(bb) {
      var wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb;
      let {
        kind: hb,
        aH: zb,
        store: Xb,
        power: xb,
        renderSlot: jb
      } = bb;
      const {
        t: Kb
      } = (0, KH.C)(), rb = Eg(Xb, zb), Rb = Ww[hb], Db = null !== (wb = null === rb || void 0 === rb ? void 0 : rb.coupled) && void 0 !== wb && wb, cb = null !== (Mb = null === rb || void 0 === rb ? void 0 : rb.couplerLevel) && void 0 !== Mb ? Mb : 1, Yb = Fg(hb, Db, cb, null !== (eb = null === rb || void 0 === rb || null === (Hb = rb.dug) || void 0 === Hb ? void 0 : Hb.item) && void 0 !== eb ? eb : null), Zb = null !== (pb = null === rb || void 0 === rb ? void 0 : rb.status) && void 0 !== pb ? pb : null, fb = null !== (Vb = null === rb || void 0 === rb ? void 0 : rb.power) && void 0 !== Vb ? Vb : null, Ab = null !== (gb = null === rb || void 0 === rb ? void 0 : rb.opLeftMs) && void 0 !== gb ? gb : null, Wb = null !== (lb = null === rb || void 0 === rb ? void 0 : rb.dug) && void 0 !== lb ? lb : null, Jb = null !== Wb && MM(Rb) ? lM[null !== (Lb = LM(Wb.item)) && void 0 !== Lb ? Lb : ""] : void 0, Sb = void 0 === Jb ? null : 6e4 / Jb, Nb = null !== (Ib = null === rb || void 0 === rb ? void 0 : rb.powerCap) && void 0 !== Ib ? Ib : 4e3, vb = null !== (Ob = null === rb || void 0 === rb ? void 0 : rb.tier) && void 0 !== Ob ? Ob : null, Qb = void 0 !== Yb.powerMade, Gb = null !== Rb.fuelSlot ? jb(Rb.fuelSlot) : null, qb = qw(Rb), ab = !Db && !0 === (null === rb || void 0 === rb ? void 0 : rb.fuelFed), ub = !Db && !0 === (null === rb || void 0 === rb ? void 0 : rb.fuelFeeds), db = null !== Rb.fuelSlot && !Db, Pb = null !== (Ub = null === rb || void 0 === rb ? void 0 : rb.fuelLeftMs) && void 0 !== Ub ? Ub : null, nb = function(bb, wb, Mb) {
        var eb;
        const Hb = null === wb ? void 0 : VM[wb];
        return Math.max(null !== (eb = null !== Hb && void 0 !== Hb ? Hb : Mb) && void 0 !== eb ? eb : 0, bb.opMs)
      }(Yb, null !== (tb = null === rb || void 0 === rb ? void 0 : rb.burning) && void 0 !== tb ? tb : null, Pb), yb = null !== (Cb = null === rb || void 0 === rb ? void 0 : rb.fuelKeep) && void 0 !== Cb ? Cb : null, ob = null === Zb ? null : Og(hb, Zb, rb, ab), Tb = null === Zb ? null : Ug(Zb, rb);
      return (0, sp.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, sp.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, sp.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Kb((0, kH.d)(hb))
          }), Wb && (0, sp.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [Kb("Tree Cutter" === hb ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, sp.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, sp.jsx)(RH.c, {
                itemName: Wb.item,
                amount: 0
              })
            }), (0, sp.jsx)(DH.d, {
              text: Wb.name
            })]
          }), null !== Sb && (0, sp.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: Kb("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Sb)
            })
          }), (null === rb || void 0 === rb ? void 0 : rb.field) && (0, sp.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, sp.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, sp.jsx)(RH.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), Kb("buildAFactory2Game:machineField", {
              planted: String(rb.field[0]),
              ripe: String(rb.field[1])
            })]
          }), (0, sp.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, sp.jsxs)("div", {
              className: zH()("Baf2MachineColumn", {
                Baf2Burns: db
              }),
              children: [null !== Yb.inputSlot && (0, sp.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, sp.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Kb(tg(Yb))
                }), jb(Yb.inputSlot)]
              }), null !== Rb.fuelSlot && !Db && (0, sp.jsxs)("div", {
                className: zH()("Baf2MachineSlot", {
                  Baf2FuelFed: ab
                }),
                children: [(0, sp.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [ab && (0, sp.jsx)(rH.b, {
                    name: "fire"
                  }), Kb("buildAFactory2Game:machineFuel")]
                }), (0, sp.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, sp.jsx)(sg, {
                    running: "running" === Zb,
                    leftMs: Pb,
                    periodMs: nb,
                    updateCount: Xb.updateCount
                  }), Gb]
                })]
              }), null !== Rb.fuelSlot && Db && (0, sp.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, sp.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Kb("buildAFactory2Game:machineFuel")
                }), (0, sp.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: Kb("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": Kb("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, sp.jsx)(rH.b, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, sp.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, sp.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Kb(hg(Yb))
              }), (0, sp.jsx)(Bg, {
                running: "running" === Zb,
                opMs: Yb.opMs,
                opLeftMs: Ab,
                updateCount: Xb.updateCount
              })]
            }), Yb.outputSlots.length > 0 && (0, sp.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, sp.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Kb("buildAFactory2Game:machineOutput")
              }), (0, sp.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Yb.outputSlots.map((bb => (0, sp.jsx)("div", {
                  children: jb(bb)
                }, bb)))
              })]
            }), null !== fb && Qb && (0, sp.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, sp.jsx)("div", {
                style: {
                  height: 100 * fb / Nb + "%"
                }
              })
            })]
          }), db && null !== yb && (0, sp.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, sp.jsx)(rH.b, {
              name: "arrows-rotate"
            }), Kb(eM(Yb) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(yb)
            })]
          }), (ab || ub) && (0, sp.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, sp.jsx)(rH.b, {
              name: "fire"
            }), Kb(ab ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Rb.couplable && (0, sp.jsx)(iV, {
            kind: hb,
            tier: vb,
            coupled: Db,
            level: cb,
            slot: qb === Rb.fuelSlot ? Gb : null !== qb ? jb(qb) : null
          }), null !== fb && !Qb && !0 === (null === rb || void 0 === rb ? void 0 : rb.reactorPowered) && (0, sp.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: Kb("buildAFactory2Game:machineReactorPowered")
          }), null !== fb && !Qb && !0 !== (null === rb || void 0 === rb ? void 0 : rb.reactorPowered) && (0, sp.jsx)(xV, {
            stored: fb,
            cap: Nb,
            rates: null !== (Eb = null === rb || void 0 === rb ? void 0 : rb.powerRates) && void 0 !== Eb ? Eb : null
          }), (null === rb || void 0 === rb ? void 0 : rb.water) && (0, sp.jsx)(Mg, {
            water: rb.water,
            at: zb,
            side: rb.cryo ? "waterIn" : null
          }), (null === rb || void 0 === rb ? void 0 : rb.cryo) && (0, sp.jsx)(Mg, {
            water: rb.cryo,
            at: zb,
            side: "cryoOut"
          }), null !== rb && void 0 !== rb && rb.inertCoupler ? (0, sp.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: Kb("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, kH.f)(Kb, rb.inertCoupler)
            })
          }) : null !== ob && (0, sp.jsx)("div", {
            className: zH()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Zb
            }),
            children: Kb(ob, Tb ? mg(Kb, Tb.input, Tb.short) : void 0)
          })]
        }), (0, sp.jsxs)("div", {
          className: zH()("Baf2MachineSide", {
            Baf2SynthSide: Pw(Rb)
          }),
          children: [Pw(Rb) && (0, sp.jsx)(qV, {
            aH: zb,
            taught: null !== (Fb = null === rb || void 0 === rb ? void 0 : rb.taught) && void 0 !== Fb ? Fb : null
          }, zb.join(",")), Qb && (0, sp.jsx)(KV, {
            kind: hb,
            def: Yb,
            aH: zb,
            power: xb,
            stored: null !== fb && void 0 !== fb ? fb : 0,
            cap: Nb
          }), ib(Rb) && (0, sp.jsx)(vV, {
            aH: zb,
            input: null !== (Bb = null === rb || void 0 === rb ? void 0 : rb.input) && void 0 !== Bb ? Bb : null,
            drops: null !== (sb = null === rb || void 0 === rb ? void 0 : rb.farm) && void 0 !== sb ? sb : null,
            seconds: String(Yb.opMs / 1e3)
          }), !Qb && !ib(Rb) && !Pw(Rb) && (0, sp.jsx)(op, {
            kind: hb,
            def: Yb,
            input: null !== (mb = null === rb || void 0 === rb ? void 0 : rb.input) && void 0 !== mb ? mb : null,
            tier: null !== vb && void 0 !== vb ? vb : 1,
            noSeeds: !0 === (null === rb || void 0 === rb ? void 0 : rb.noSeeds)
          })]
        })]
      })
    }

    function Xg(bb, wb, Mb, eb) {
      var Hb;
      const pb = Ww[bb],
        Vb = [pb.inputSlot, pb.fuelSlot, ...null !== (Hb = pb.inputSlots) && void 0 !== Hb ? Hb : []].filter((bb => null !== bb));
      return {
        render: Hb => {
          let {
            aH: pb,
            renderSlot: Vb
          } = Hb;
          return (0, sp.jsx)(AV.Provider, {
            value: eb,
            children: (0, sp.jsx)(zg, {
              kind: bb,
              aH: pb,
              store: wb,
              power: Mb,
              renderSlot: Vb
            })
          })
        },
        quickMoveRange: Vb.length > 0 ? [Math.min(...Vb), Math.max(...Vb) + 1] : [0, 0],
        className: Cg(bb)
      }
    }
    const xg = "Assembler";

    function jg(bb) {
      var wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb;
      let {
        aH: Ib,
        store: Ob,
        renderSlot: Ub
      } = bb;
      const {
        t: tb
      } = (0, KH.C)(), Cb = Eg(Ob, Ib), Eb = null !== (wb = null === Cb || void 0 === Cb ? void 0 : Cb.tier) && void 0 !== wb ? wb : 1, Fb = null !== (Mb = null === Cb || void 0 === Cb ? void 0 : Cb.taught) && void 0 !== Mb ? Mb : null, Bb = Tw(xg, {
        coupled: !1,
        taught: Fb
      }), sb = null !== (eb = Bb.bench) && void 0 !== eb ? eb : null, mb = null !== (Hb = null === Cb || void 0 === Cb ? void 0 : Cb.status) && void 0 !== Hb ? Hb : null, hb = null !== (pb = null === Cb || void 0 === Cb ? void 0 : Cb.power) && void 0 !== pb ? pb : null, zb = null !== (Vb = null === Cb || void 0 === Cb ? void 0 : Cb.powerCap) && void 0 !== Vb ? Vb : 4e3;
      return (0, sp.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, sp.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, sp.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: tb((0, kH.d)(xg))
          }), sb && (0, sp.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [tb("buildAFactory2Game:benchMakes"), (0, sp.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, sp.jsx)(RH.c, {
                itemName: sb.output,
                amount: 0
              })
            }), (null === Cb || void 0 === Cb ? void 0 : Cb.taughtName) && (0, sp.jsx)(DH.d, {
              text: Cb.taughtName
            }), sb.outputAmount > 1 && (0, sp.jsxs)("span", {
              children: ["\xd7", sb.outputAmount]
            })]
          }), !sb && (0, sp.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: tb("buildAFactory2Game:benchTeachHint")
          }), (0, sp.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, sp.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (gb = Bb.inputSlots) && void 0 !== gb ? gb : []).map(((bb, wb) => {
                const Mb = null === sb || void 0 === sb ? void 0 : sb.inputs[wb];
                return (0, sp.jsxs)("div", {
                  className: zH()("Baf2BenchInput", {
                    Spare: !Mb
                  }),
                  children: [(0, sp.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Ub(bb), Mb && (0, sp.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, sp.jsx)(RH.c, {
                        itemName: Mb.item,
                        amount: 0
                      })
                    })]
                  }), (0, sp.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: Mb ? `\xd7${Mb.amount}` : "\xa0"
                  })]
                }, bb)
              }))
            }), (0, sp.jsx)(Bg, {
              running: "running" === mb,
              opMs: Bb.opMs,
              opLeftMs: null !== (lb = null === Cb || void 0 === Cb ? void 0 : Cb.opLeftMs) && void 0 !== lb ? lb : null,
              updateCount: Ob.updateCount
            }), (0, sp.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, sp.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: tb("buildAFactory2Game:machineOutput")
              }), (0, sp.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Bb.outputSlots.map((bb => (0, sp.jsx)("div", {
                  children: Ub(bb)
                }, bb)))
              })]
            })]
          }), null !== hb && (0, sp.jsx)(xV, {
            stored: hb,
            cap: zb,
            rates: null !== (Lb = null === Cb || void 0 === Cb ? void 0 : Cb.powerRates) && void 0 !== Lb ? Lb : null
          }), null !== mb && (0, sp.jsx)("div", {
            className: zH()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== mb
            }),
            children: tb(Og(xg, mb, Cb, !1))
          }), sb && sb.inputs.length > 1 && (0, sp.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: tb("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, sp.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, sp.jsx)(kp, {
            taught: Fb,
            tier: Eb
          }), sb && (0, sp.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: tb("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Kg(bb) {
      var wb;
      const Mb = null !== (wb = Ww[xg].inputSlots) && void 0 !== wb ? wb : [];
      return {
        render: wb => {
          let {
            aH: Mb,
            renderSlot: eb
          } = wb;
          return (0, sp.jsx)(jg, {
            aH: Mb,
            store: bb,
            renderSlot: eb
          })
        },
        quickMoveRange: [Math.min(...Mb), Math.max(...Mb) + 1],
        className: Cg(xg)
      }
    }
    var rg = Mb(110),
      Rg = Mb(1179),
      Dg = Mb(3059);
    const cg = 600,
      Yg = .5,
      Zg = 4,
      fg = 1200,
      Ag = 140,
      Wg = 100,
      Jg = 32,
      Sg = 16,
      Ng = 100.5,
      vg = 90,
      Qg = 1.5,
      Gg = 50;

    function qg(bb) {
      switch (ZM(bb)) {
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
    const ag = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function ig(bb) {
      const wb = Math.ceil(60 * bb / Wg);
      return {
        fuel: Math.max(Jg, wb),
        waste: Math.max(Sg, wb)
      }
    }

    function ug(bb, wb, Mb) {
      const [eb, Hb, pb] = [bb - 2, wb - 2, Mb - 2];
      return 2 * (eb * Hb + Hb * pb + pb * eb) * Ag
    }

    function dg(bb, wb, Mb) {
      return Math.max(0, bb - 2) * Math.max(0, wb - 2) * Math.max(0, Mb - 2)
    }

    function Pg(bb, wb) {
      const [Mb, eb, Hb] = bb, pb = Mb * eb * Hb, Vb = new Float32Array(pb);
      let gb = 0,
        lb = 0,
        Lb = 0,
        Ib = 0,
        Ob = 0;
      const Ub = (bb, pb, Vb) => bb < 0 || bb >= Mb || pb < 0 || pb >= eb || Vb < 0 || Vb >= Hb ? 0 : wb[(pb * Hb + Vb) * Mb + bb];
      for (let Fb = 0; Fb < eb; Fb++)
        for (let bb = 0; bb < Hb; bb++)
          for (let eb = 0; eb < Mb; eb++) {
            const pb = (Fb * Hb + bb) * Mb + eb,
              tb = wb[pb];
            if (1 === tb) {
              gb++;
              let wb = 0;
              for (const [Mb, Hb, pb] of ag) {
                const Vb = Ub(eb + Mb, Fb + Hb, bb + pb);
                1 !== Vb && 2 !== Vb || wb++
              }
              Vb[pb] = cg * (1 + Yg * Math.min(wb, Zg)), Ib += Vb[pb]
            } else if (2 === tb) lb++;
            else if (3 === tb) {
              Lb++;
              ag.some((wb => {
                let [Mb, Hb, pb] = wb;
                return 1 === Ub(eb + Mb, Fb + Hb, bb + pb)
              })) && (Ob += fg)
            }
          }
      const tb = ug(Mb + 2, eb + 2, Hb + 2),
        Cb = Math.min(Ib, Ob, tb),
        Eb = gb > 0 ? Ib * Wg / gb : 0;
      return {
        rods: gb,
        graphite: lb,
        channels: Lb,
        fuelHeat: Ib,
        cooling: Ob,
        size: tb,
        max: Cb,
        vol: pb,
        powerPerUnit: Eb,
        pelletsPerMin: Eb > 0 ? Cb / Eb * 60 : 0,
        waterPerS: Cb * Tb.q,
        rodHeat: Vb
      }
    }
    const ng = 0,
      yg = 1,
      og = 6,
      Tg = 7,
      kg = 8;

    function bl(bb, wb) {
      const [Mb, eb, Hb] = bb, pb = new Uint8Array(Mb * eb * Hb), Vb = (bb, pb, Vb) => bb < 0 || bb >= Mb || pb < 0 || pb >= eb || Vb < 0 || Vb >= Hb ? 0 : wb[(pb * Hb + Vb) * Mb + bb];
      for (let gb = 0; gb < eb; gb++)
        for (let bb = 0; bb < Hb; bb++)
          for (let eb = 0; eb < Mb; eb++) {
            const lb = (gb * Hb + bb) * Mb + eb,
              Lb = wb[lb];
            if (1 === Lb) {
              let wb = 0;
              for (const [Mb, Hb, pb] of ag) {
                const lb = Vb(eb + Mb, gb + Hb, bb + pb);
                wb += 1 === lb || 2 === lb ? 1 : 0
              }
              pb[lb] = yg + Math.min(wb, Zg)
            } else if (3 === Lb) {
              const wb = ag.some((wb => {
                let [Mb, Hb, pb] = wb;
                return 1 === Vb(eb + Mb, gb + Hb, bb + pb)
              }));
              pb[lb] = wb ? og : Tg
            } else 2 === Lb && (pb[lb] = kg)
          }
      return pb
    }

    function wl(bb) {
      return bb.fuelHeat <= bb.cooling && bb.fuelHeat <= bb.size ? "fuel" : bb.cooling <= bb.size ? "cooling" : "size"
    }
    const Ml = vg;

    function el(bb, wb, Mb) {
      return Math.round(bb * wb * Mb * 25e3 * (1 + .25 * (Math.min(bb, wb, Mb) - 2)))
    }

    function Hl(bb) {
      return Math.max(0, Math.min(Tb.g, bb))
    }

    function pl(bb, wb, Mb) {
      const eb = wb * Hl(Mb);
      return bb <= 0 ? 0 : eb > 0 ? Math.min(200, 100 * bb / eb) : 200
    }

    function Vl(bb, wb) {
      const Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Qg : 1;
      return Math.min(bb.fuelHeat * Mb, bb.cooling * Hl(wb), bb.size * Mb)
    }

    function gl(bb) {
      return 2 + bb / 10
    }
    const ll = "buildAFactory2Game:";

    function Ll(bb) {
      var wb;
      return null !== (wb = bb.baf2RxMood) && void 0 !== wb ? wb : function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const Mb = [
          ["calm", 50],
          ["warm", Ml],
          ["hot", Ng]
        ];
        for (const [eb, Hb] of Mb)
          if (bb < Hb + (eb === wb ? 3 : 0)) return eb;
        return "alarm"
      }(bb.baf2RxHeat)
    }
    const Il = 120;

    function Ol(bb) {
      const wb = bb.baf2RxState;
      if ("running" === wb && bb.baf2RxHeat > Ng) return {
        label: `${ll}rxState_tooHot`,
        tone: "bad",
        fix: `${ll}rxFix_tooHot`
      };
      switch (wb) {
        case "running":
          return {
            label: `${ll}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${ll}rxState_idle`, tone: "off", fix: `${ll}rxFix_idle`
          };
        case "scram":
          return {
            label: `${ll}rxState_scram`, tone: "off", fix: bb.baf2RxHeat < Gg ? `${ll}rxFix_scramCool` : `${ll}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${ll}rxState_${wb}`, tone: "off", fix: `${ll}rxFix_${wb}`
          };
        case "melted":
          return {
            label: `${ll}rxState_melted`, tone: "bad", fix: `${ll}rxFix_melted`
          };
        default:
          return {
            label: `${ll}rxState_${wb}`, tone: "warn", fix: `${ll}rxFix_${wb}`
          }
      }
    }

    function Ul(bb) {
      const [wb, Mb, eb] = bb.baf2RxStats;
      return {
        fuelHeat: wb,
        cooling: Mb * (bb.baf2RxCryo ? Math.max(1, Hl(bb.baf2RxWater / 100)) : 1),
        size: eb
      }
    }

    function tl(bb) {
      var wb;
      const Mb = "idle" === bb.baf2RxState || "running" === bb.baf2RxState && bb.baf2RxHeat <= Ng || "scram" === bb.baf2RxState && bb.baf2RxHeat < Gg;
      if (0 === (bb.baf2RxFlags & hw) || !bb.baf2RxFormed || !Mb) return null;
      const {
        fuelHeat: eb,
        cooling: Hb,
        size: pb
      } = Ul(bb), Vb = Math.min(eb, Hb, pb), gb = wl({
        fuelHeat: eb,
        cooling: Hb,
        size: pb
      }), lb = "cooling" === gb && !0 === bb.baf2RxCryoOpen && !bb.baf2RxCryo, Lb = null !== (wb = bb.baf2RxCells) && void 0 !== wb ? wb : "", Ib = ("fuel" === gb || "cooling" === gb && !0 === bb.baf2RxCryo) && Lb.length > 0 && !Lb.includes(String(0)), Ob = lb ? "Cryo" : "scram" === bb.baf2RxState ? "Off" : "";
      return Vb < 12e3 ? {
        key: `${ll}rxGrow_${Ib?"full":gb}${Ob}`,
        amount: Vb
      } : null
    }

    function Cl(bb, wb) {
      return bb[0] === wb[0] && bb[1] === wb[1] && bb[2] === wb[2]
    }

    function El(bb) {
      return [...bb].sort(((bb, wb) => Number(wb[2] < wb[1]) - Number(bb[2] < bb[1])))
    }

    function Fl(bb, wb) {
      return wb.some((wb => {
        let [Mb, eb] = wb;
        return !(eb <= 0) && ["edge", "cap", "wall", "inside"].some((wb => Mb === Ve(bb, wb)))
      }))
    }

    function Bl(bb, wb, Mb) {
      const eb = bb.baf2RxFuel - bb.baf2RxPu > 0 ? Mb : 0;
      return {
        full: bb.baf2RxWaste > wb - 3,
        fullInS: eb > 0 ? Math.max(0, wb - bb.baf2RxWaste) / eb : null
      }
    }
    const sl = {
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

    function ml(bb) {
      return hl[bb]
    }
    const hl = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function zl(bb) {
      let [wb, Mb, eb] = bb;
      return Math.ceil(ug(wb, Mb, eb) * Tb.q)
    }

    function Xl(bb, wb) {
      return "battery" === bb ? wb[0] * wb[1] * wb[2] : function(bb) {
        let [wb, Mb, eb] = bb;
        return wb * Mb * eb - Math.max(0, wb - 2) * Math.max(0, Mb - 2) * Math.max(0, eb - 2)
      }(wb) - 1
    }

    function xl(bb) {
      const wb = Math.max(0, bb);
      if (wb < 10) return String(Math.round(10 * wb) / 10);
      if (wb < 1e4) return Math.round(wb).toLocaleString("en-US");
      if (wb < 1e6) return `${wb<1e5?(Math.floor(wb/100)/10).toFixed(1):Math.floor(wb/1e3)}k`;
      const Mb = wb / 1e6;
      return `${Mb<10?(Math.floor(100*Mb)/100).toFixed(2):Mb<100?(Math.floor(10*Mb)/10).toFixed(1):Math.floor(Mb)}M`
    }

    function jl(bb) {
      return bb <= 0 ? "0" : bb >= 10 ? String(Math.round(bb)) : bb.toFixed(bb >= 1 ? 1 : 2)
    }

    function Kl(bb) {
      const wb = kM(bb, 0),
        Mb = kM(bb, nM(bb) - 1);
      return {
        lo: [Math.min(wb[0], Mb[0]), Math.min(wb[1], Mb[1]), Math.min(wb[2], Mb[2])],
        hi: [Math.max(wb[0], Mb[0]) + 1, Math.max(wb[1], Mb[1]) + 1, Math.max(wb[2], Mb[2]) + 1]
      }
    }

    function rl(bb, wb, Mb) {
      const eb = [wb[0] - bb[0], wb[1] - bb[1], wb[2] - bb[2]],
        Hb = [(bb[0] + wb[0]) / 2, (bb[1] + wb[1]) / 2, (bb[2] + wb[2]) / 2],
        pb = [];
      for (let Vb = 0; Vb < 3; Vb++) {
        const gb = (Vb + 1) % 3,
          lb = (Vb + 2) % 3;
        for (const Lb of [bb[gb], wb[gb]])
          for (const Ib of [bb[lb], wb[lb]]) {
            const bb = [0, 0, 0],
              wb = [Mb, Mb, Mb];
            bb[Vb] = Hb[Vb], wb[Vb] = eb[Vb] + Mb, bb[gb] = Lb, bb[lb] = Ib, pb.push([bb, wb])
          }
      }
      return pb
    }
    const Rl = "buildAFactory2Game:",
      Dl = [`${Rl}colNorth`, `${Rl}colEast`, `${Rl}colSouth`, `${Rl}colWest`];

    function cl(bb, wb) {
      const [Mb, eb, Hb] = bb.baf2ColAt;
      return `baf2col ${Mb} ${eb} ${Hb} ${wb}`
    }

    function Yl(bb) {
      return function(bb) {
        if (!Number.isFinite(bb)) return "";
        const wb = Math.max(1, Math.round(bb));
        if (wb < 60) return `${wb}s`;
        const Mb = wb % 60;
        return 0 === Mb ? wb / 60 + "m" : `${Math.floor(wb/60)}m ${Mb}s`
      }(function(bb) {
        const wb = ge.FOCUS_BY_LASERS[Math.max(0, Math.min(4, bb))];
        return wb > 0 ? ge.NOVA_FOCUS / wb : 1 / 0
      }(bb))
    }

    function Zl(bb) {
      const wb = Math.abs(Math.round(bb));
      return wb < 1e3 ? Math.round(bb).toLocaleString("en-US") : wb < 1e6 ? `${wb<1e5?(bb/1e3).toFixed(1).replace(/\.0$/,""):Math.round(bb/1e3)}k` : `${(bb/1e6).toFixed(wb<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function fl(bb, wb, Mb) {
      if (te(wb) >= 0) {
        const wb = function(bb, wb) {
          return bb.find((bb => {
            let {
              focus: Mb
            } = bb;
            return Mb[0] === wb[0] && Mb[2] === wb[2] && (wb[1] === Mb[1] || wb[1] === Mb[1] - 1)
          }))
        }(bb, Mb);
        if (!wb) return null;
        const Hb = function(bb) {
          let wb = 0,
            Mb = 0;
          for (let eb = 0; eb < 4; eb++) wb += bb.laser[eb] ? 1 : 0, Mb += bb.live[eb] ? 1 : 0;
          return {
            lasers: wb,
            live: Mb,
            focusPerS: ge.FOCUS_BY_LASERS[Mb],
            drawPerS: ge.LASER_DRAW * Mb
          }
        }({
          laser: wb.lasers,
          live: wb.live
        });
        if (0 === Hb.lasers || "noLasers" === wb.state) return {
          key: `${Rl}lookColNoLasers`
        };
        if (0 === Hb.live) return {
          key: `${Rl}lookColOff_blocked`
        };
        if (!(wb.on && Hb.live > 0) && ("running" !== (eb = wb.state) && "slowed" !== eb)) return {
          key: `${Rl}lookColOff_${wb.state}`
        };
        if (Hb.live < Hb.lasers) return {
          key: `${Rl}lookColLasersSome`,
          params: {
            lasers: String(Hb.lasers),
            live: String(Hb.live)
          }
        };
        const pb = wb.open.filter(Boolean).length;
        return pb < 4 ? {
          key: `${Rl}lookColLasersSpots`,
          params: {
            live: String(Hb.live),
            spots: String(pb),
            time: Yl(Hb.live)
          }
        } : {
          key: `${Rl}lookColLasers`,
          params: {
            live: String(Hb.live),
            time: Yl(Hb.live)
          }
        }
      }
      var eb;
      if (!Ce(wb)) return null;
      const Hb = function(bb, wb) {
        for (const Mb of bb) {
          const bb = se(Mb.focus, [wb[0], wb[1], wb[2]]);
          if (bb && bb.DV === ge.LASER_D && Mb.lasers[bb.dir]) return {
            entry: Mb,
            dir: bb.dir
          }
        }
        return null
      }(bb, Mb);
      if (!Hb) return {
        key: `${Rl}lookLaserNoCollider`
      };
      const {
        entry: pb,
        dir: Vb
      } = Hb;
      return pb.open[Vb] ? pb.live[Vb] ? {
        key: pb.on ? `${Rl}lookLaserFiring` : `${Rl}lookLaserReady`
      } : {
        key: `${Rl}lookLaserBlocked`
      } : {
        key: `${Rl}lookLaserClosed`
      }
    }

    function Al(bb, wb) {
      const Mb = [];
      for (let eb = 1; eb < ge.LASER_D; eb++) bb & 1 << wb * (ge.LASER_D - 1) + eb - 1 && Mb.push(eb);
      return Mb
    }
    const Wl = {
      firing: `${Rl}colSlotFiring`,
      ready: `${Rl}colSlotReady`,
      blocked: `${Rl}colSlotBlocked`,
      empty: `${Rl}colSlotEmpty`,
      closed: `${Rl}colSlotClosed`
    };

    function Jl(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const pb = HH(bb),
        Vb = HH(wb),
        gb = HH(Mb),
        lb = gb.filter(Boolean).length,
        Lb = pb.filter(Boolean).length,
        Ib = [0, 1, 2, 3].map((bb => Vb[bb] ? pb[bb] ? gb[bb] ? eb ? "firing" : "ready" : "blocked" : (bb => Al(Hb, bb).length > 0)(bb) ? "blocked" : "empty" : "closed")),
        Ob = Ib.indexOf("blocked"),
        Ub = Ob < 0 && Lb > 0 ? Ib.indexOf("empty") : -1;
      return Ib.map(((bb, wb) => {
        const Mb = wb === Ob ? {
          key: `${Rl}colSlotClear`
        } : wb === Ub ? {
          key: `${Rl}colSlotAdd`,
          params: {
            time: Yl(Math.min(4, lb + 1))
          }
        } : null;
        return {
          dir: wb,
          tone: bb,
          title: {
            key: "blocked" !== bb || pb[wb] ? Wl[bb] : `${Rl}colSlotGap`,
            keys: {
              dir: Dl[wb]
            }
          },
          hint: Mb
        }
      }))
    }

    function Sl(bb) {
      var wb;
      return "noPower" === bb.baf2ColState && bb.baf2ColRxState ? Ol({
        baf2RxState: bb.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (wb = bb.baf2ColRxHeat) && void 0 !== wb ? wb : 0
      }) : null
    }

    function Nl(bb) {
      const wb = HH(bb.baf2ColSpots).filter(Boolean).length,
        Mb = HH(bb.baf2ColLive);
      let eb = 0,
        Hb = 0;
      return HH(bb.baf2ColLasers).forEach(((bb, wb) => {
        bb && (eb++, Hb += Mb[wb] ? 0 : 1)
      })), Hb > 0 ? {
        key: `${Rl}colSubSome`,
        params: {
          blocked: String(Hb),
          lasers: String(eb)
        }
      } : wb < 4 ? {
        key: `${Rl}colSubSpots`,
        params: {
          lasers: String(eb),
          spots: String(wb)
        }
      } : {
        key: `${Rl}colSub`,
        params: {
          lasers: String(eb)
        }
      }
    }

    function vl(bb) {
      const wb = Sl(bb);
      if ("idle" === bb.baf2ColRxState && wb) return {
        key: `${Rl}colState_noPowerIdle`
      };
      if (wb) return {
        key: `${Rl}colState_noPowerReactor`,
        keys: {
          state: wb.label
        }
      };
      if ("noInput" !== bb.baf2ColState) return {
        key: `${Rl}colState_${bb.baf2ColState}`
      };
      const Mb = String(Math.max(0, ge.NOVA_SA - bb.baf2ColSa)),
        eb = String(Math.max(0, ge.NOVA_GD - bb.baf2ColGd));
      return "0" !== Mb && "0" !== eb ? {
        key: `${Rl}colState_noInput`,
        params: {
          sa: Mb,
          gd: eb
        }
      } : "0" !== Mb ? {
        key: `${Rl}colState_noStarAlloy`,
        params: {
          sa: Mb
        }
      } : "0" !== eb ? {
        key: `${Rl}colState_noGlowDust`,
        params: {
          gd: eb
        }
      } : {
        key: `${Rl}colState_running`
      }
    }

    function Ql(bb) {
      return bb.baf2ColP < 0 ? `${Rl}colNext` : function(bb) {
        const wb = bb.baf2ColState;
        return bb.baf2ColP >= 0 && ("blocked" === wb || "noLasers" === wb || "noPower" === wb)
      }(bb) ? `${Rl}colStalled` : null === Gl(bb) ? `${Rl}colMaking` : `${Rl}colNovaIn`
    }

    function Gl(bb) {
      if (bb.baf2ColP < 0 || bb.baf2ColWant <= 0) return null;
      const wb = bb.baf2ColFocusPerS * Math.min(1, bb.baf2ColDraw / bb.baf2ColWant);
      return wb > 0 ? Math.max(0, ge.NOVA_FOCUS - bb.baf2ColP) / wb : null
    }

    function ql(bb, wb) {
      const Mb = [];
      for (let eb = 1; eb <= 3; eb++) {
        const Hb = [bb[0], bb[1] - eb, bb[2]];
        if (!wb(Hb)) return Mb;
        Mb.push(Hb)
      }
      return []
    }

    function al(bb, wb) {
      const Mb = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let eb = 0; eb < 4; eb++) {
        const Hb = eb,
          pb = Be(bb.focus, Hb, ge.LASER_D);
        if (bb.lasers[eb] || !bb.open[eb] || !wb(pb)) continue;
        const Vb = [];
        for (let Mb = 1; Mb < ge.LASER_D; Mb++) {
          const eb = Be(bb.focus, Hb, Mb);
          wb(eb) || Vb.push(eb)
        }
        Mb.supports.push(...ql(pb, wb)), 0 === Vb.length ? Mb.free.push(pb) : (Mb.blocked.push(pb), Mb.gaps.push(...Vb))
      }
      return Mb
    }
    const il = ge.LASER_D - .25,
      ul = 4,
      dl = 2,
      Pl = 16;
    const nl = {
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
        blendMode: Dg.d.Standard,
        soft: !0
      },
      yl = {
        green: nl,
        pink: {
          ...nl,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function ol(bb, wb) {
      const Mb = {
        ...wb.params
      };
      for (const [Hb, pb] of Object.entries(null !== (eb = wb.keys) && void 0 !== eb ? eb : {})) {
        var eb;
        Mb[Hb] = bb(pb)
      }
      return Mb
    }
    const Tl = "buildAFactory2Game:",
      kl = 2 * ge.LASER_D + 1,
      bL = ge.LASER_D;

    function wL(bb) {
      return bb(`${Tl}colFocusTip`, {
        need: Zl(ge.NOVA_FOCUS)
      })
    }

    function ML(bb, wb) {
      return bb(wb.key, ol(bb, wb))
    }

    function eL(bb) {
      const wb = bb.getStatus();
      return {
        status: wb,
        entry: wb ? bb.entryAtRoot(wb.baf2ColAt) : void 0
      }
    }

    function HL(bb, wb) {
      return {
        left: 100 * (bL + bb) / kl + "%",
        top: 100 * (bL + wb) / kl + "%"
      }
    }

    function pL(bb) {
      let {
        status: wb,
        entry: Mb
      } = bb;
      const eb = HH(wb.baf2ColLasers),
        Hb = HH(wb.baf2ColSpots),
        pb = HH(wb.baf2ColLive),
        Vb = !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.on),
        gb = ge.LASER_D,
        lb = [];
      for (let tb = 0; tb < 4; tb++) {
        const [bb, , wb] = Fe[tb];
        if (pb[tb]) {
          const Mb = 100 * (gb - 1) / kl,
            eb = bb + wb > 0 ? 100 * (bL + 1) / kl : 100 * (bL - (gb - 1)) / kl,
            Hb = 100 * (bL + .35) / kl,
            pb = 30 / kl,
            Lb = 0 !== bb ? {
              left: `${eb}%`,
              width: `${Mb}%`,
              top: `${Hb}%`,
              height: `${pb}%`
            } : {
              top: `${eb}%`,
              height: `${Mb}%`,
              left: `${Hb}%`,
              width: `${pb}%`
            };
          lb.push((0, sp.jsx)("i", {
            className: zH()("Baf2ColDiagramBeam", {
              Off: !Vb
            }),
            style: Lb
          }, `beam${tb}`))
        }
        const Mb = eb[tb] ? "Baf2ColDiagramLaser" : Hb[tb] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        lb.push((0, sp.jsx)("i", {
          className: Mb,
          style: HL(bb * gb, wb * gb)
        }, `spot${tb}`))
      }
      for (let tb = 0; tb < 4; tb++) {
        if (eb[tb] || !Hb[tb]) continue;
        const [bb, , Mb] = Fe[tb];
        for (const eb of Al(null !== (Lb = wb.baf2ColGaps) && void 0 !== Lb ? Lb : 0, tb)) {
          var Lb;
          lb.push((0, sp.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: HL(bb * eb, Mb * eb)
          }, `gap${tb},${eb}`))
        }
      }
      for (const [tb, , Cb] of null !== (Ib = null === Mb || void 0 === Mb ? void 0 : Mb.blockers) && void 0 !== Ib ? Ib : []) {
        var Ib, Ob, Ub;
        const bb = tb - (null !== (Ob = null === Mb || void 0 === Mb ? void 0 : Mb.focus[0]) && void 0 !== Ob ? Ob : 0),
          wb = Cb - (null !== (Ub = null === Mb || void 0 === Mb ? void 0 : Mb.focus[2]) && void 0 !== Ub ? Ub : 0);
        lb.push((0, sp.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: HL(bb, wb)
        }, `block${bb},${wb}`))
      }
      return (0, sp.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [lb, (0, sp.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function VL(bb) {
      let {
        status: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)(), eb = HH(wb.baf2ColLive).filter(Boolean).length;
      return (0, sp.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, sp.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: wL(Mb),
          children: Mb(`${Tl}colLadder`)
        }), (0, sp.jsx)("ul", {
          children: [1, 2, 3, 4].map((bb => (0, sp.jsx)("li", {
            className: zH()({
              On: bb === eb
            }),
            children: Mb(`${Tl}colLadderChip`, {
              lasers: String(bb),
              time: Yl(bb)
            })
          }, bb)))
        })]
      })
    }

    function gL(bb) {
      let {
        item: wb,
        dg: Mb,
        need: eb,
        cap: Hb
      } = bb;
      const {
        t: pb
      } = (0, KH.C)(), Vb = Math.min(Mb, eb);
      return (0, sp.jsxs)("li", {
        className: zH()("Baf2ColTile", {
          Short: Mb < eb
        }),
        children: [(0, sp.jsx)(lL, {
          item: wb
        }), (0, sp.jsx)("b", {
          className: "Baf2ColTileValue",
          children: pb(`${Tl}colOutOf`, {
            amount: String(Vb),
            cap: String(eb)
          })
        }), (0, sp.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, sp.jsx)("i", {
            style: {
              width: 100 * Vb / eb + "%"
            }
          })
        }), Mb > eb && (0, sp.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: pb(`${Tl}colIntakeHeld`, {
            amount: String(Mb),
            cap: String(Hb)
          })
        })]
      })
    }

    function lL(bb) {
      let {
        item: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)();
      return (0, sp.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, sp.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, sp.jsx)(RH.c, {
            itemName: wb,
            amount: 0
          })
        }), (0, sp.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, kH.f)(Mb, wb)
        })]
      })
    }

    function LL(bb) {
      switch (bb.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function IL(bb) {
      var wb, Mb, Hb;
      let {
        store: pb,
        close: Vb
      } = bb;
      const {
        t: gb
      } = (0, KH.C)(), lb = WV(), {
        status: Lb,
        entry: Ib
      } = function(bb) {
        const [wb, Mb] = (0, eb.useState)((() => eL(bb)));
        return (0, eb.useEffect)((() => (Mb(eL(bb)), bb.subscribe((() => {
          Mb(eL(bb))
        })))), [bb]), wb
      }(pb), [Ob, Ub] = (0, eb.useState)(null), tb = null === Lb || void 0 === Lb ? void 0 : Lb.baf2ColHold;
      (0, eb.useEffect)((() => {
        Ub(null)
      }), [tb]);
      const Cb = (0, eb.useRef)({
          p: -1,
          n: 0
        }),
        Eb = null !== (wb = null === Lb || void 0 === Lb ? void 0 : Lb.baf2ColP) && void 0 !== wb ? wb : -1;
      Eb < Cb.current.p && Cb.current.n++, Cb.current.p = Eb;
      const Fb = (0, eb.useRef)(null),
        [Bb] = (0, eb.useState)((() => {
          return (bb = pb.heldAtOpen()) === Ie || bb === Oe ? {
            key: `${Rl}colBeltItIn`,
            item: bb
          } : null;
          var bb
        }));
      if (!Lb) return null;
      const sb = Lb.baf2ColMember,
        mb = Lb.baf2ColP >= 0,
        hb = function(bb, wb) {
          if (bb.baf2ColP >= 0 && bb.baf2ColDraw > 0) {
            const wb = bb.baf2ColWant > 0 ? Math.min(1, bb.baf2ColDraw / bb.baf2ColWant) : 0;
            return {
              focus: bb.baf2ColFocusPerS * wb,
              draw: bb.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === bb.baf2ColState && wb && wb.draw > 0 ? {
            ...wb,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Lb, Fb.current);
      Fb.current = hb.draw > 0 ? hb : null;
      const zb = "slowed" === Lb.baf2ColState || "noPower" === Lb.baf2ColState,
        Xb = Gl(Lb),
        xb = null !== Ob && void 0 !== Ob ? Ob : Lb.baf2ColHold,
        jb = function(bb) {
          var wb, Mb;
          return "idle" === bb.baf2ColRxState ? null : null !== (wb = null === (Mb = Sl(bb)) || void 0 === Mb ? void 0 : Mb.fix) && void 0 !== wb ? wb : null
        }(Lb),
        Kb = null === jb && null === Bb ? function(bb) {
          var wb;
          const Mb = bb.baf2ColSentTo;
          if (!Mb) return null;
          const eb = null !== (wb = bb.baf2ColSentHeld) && void 0 !== wb ? wb : null;
          return {
            key: null === eb ? `${Rl}colNovaSentToMachine` : `${Rl}colNovaSentTo`,
            target: Mb,
            dg: eb
          }
        }(Lb) : null,
        rb = mb ? gb(`${Tl}colFocusOf`, {
          focus: Zl(Lb.baf2ColP),
          need: Zl(ge.NOVA_FOCUS)
        }) : null;
      return (0, sp.jsx)(EV.e, {
        close: Vb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, sp.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, sp.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, sp.jsx)(RH.c, {
                  itemName: le,
                  amount: 0
                })
              }), (0, sp.jsxs)("div", {
                children: [(0, sp.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, kH.f)(gb, le)
                }), (0, sp.jsx)("p", {
                  children: ML(gb, Nl(Lb))
                })]
              })]
            }), (0, sp.jsx)(FV.l, {
              onClick: Vb
            })]
          }), (0, sp.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, sp.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, sp.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, sp.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: gb(Ql(Lb), {
                    time: null === Xb ? "" : Fp(gb, Xb)
                  })
                }), (0, sp.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, sp.jsx)("i", {
                    style: {
                      width: (mb ? 100 * Lb.baf2ColP / ge.NOVA_FOCUS : 0) + "%"
                    }
                  }, Cb.current.n)
                }), (0, sp.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, sp.jsxs)("span", {
                    title: wL(gb),
                    children: [(0, sp.jsx)("b", {
                      children: Zl(hb.focus)
                    }), " ", gb(`${Tl}colFocusPerS`)]
                  }), (0, sp.jsxs)("span", {
                    className: zH()("Baf2ColDraw", {
                      Short: zb
                    }),
                    children: [(0, sp.jsx)(rH.b, {
                      name: "bolt"
                    }), zb ? gb(`${Tl}colDrawOf`, {
                      draw: Zl(Lb.baf2ColDraw),
                      want: Zl(Lb.baf2ColWant)
                    }) : gb(`${Tl}colPowerPerS`, {
                      rate: Zl(hb.draw)
                    })]
                  }), null !== rb && (0, sp.jsx)("span", {
                    className: "Soft",
                    children: rb
                  })]
                })]
              }), (0, sp.jsx)("p", {
                className: zH()("Baf2ColState", LL(Lb)),
                children: ML(gb, vl(Lb))
              }), null !== jb && (0, sp.jsx)("p", {
                className: "Baf2ColStateFix",
                children: gb(jb)
              }), null === jb && null !== Bb && (0, sp.jsx)("p", {
                className: "Baf2ColStateFix",
                children: gb(Bb.key, {
                  item: (0, kH.f)(gb, Bb.item)
                })
              }), Kb && (0, sp.jsx)("p", {
                className: "Baf2ColStateFix",
                children: gb(Kb.key, {
                  target: (0, kH.f)(gb, Kb.target),
                  amount: String(null !== (Mb = Kb.dg) && void 0 !== Mb ? Mb : 0)
                })
              }), (0, sp.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, sp.jsx)(gL, {
                  item: Ie,
                  dg: Lb.baf2ColSa,
                  need: ge.NOVA_SA,
                  cap: ge.SA_CAP
                }), (0, sp.jsx)(gL, {
                  item: Oe,
                  dg: Lb.baf2ColGd,
                  need: ge.NOVA_GD,
                  cap: ge.GD_CAP
                }), (0, sp.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, sp.jsx)(lL, {
                    item: "Nova Matter"
                  }), (0, sp.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: gb(`${Tl}colNovaHeld`, {
                      amount: String(Lb.baf2ColOut),
                      cap: String(ge.OUT_CAP)
                    })
                  }), sb && (0, sp.jsx)(FV.p, {
                    className: "Baf2ColTake",
                    disabled: 0 === Lb.baf2ColOut,
                    onClick: () => {
                      lb.send(cl(Lb, "take"))
                    },
                    children: gb(`${Tl}colTake`)
                  })]
                })]
              }), sb && (0, sp.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": xb,
                className: zH()("Baf2ColHold", {
                  On: xb
                }),
                onClick: bb => {
                  bb.detail > 0 && bb.currentTarget.blur(), Ub(!xb), lb.send(cl(Lb, "hold " + (xb ? 0 : 1)))
                },
                children: [(0, sp.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, sp.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, sp.jsx)("b", {
                    children: gb(`${Tl}colHold`)
                  }), (0, sp.jsx)("span", {
                    children: gb(`${Tl}colHoldNote`)
                  })]
                })]
              })]
            }), (0, sp.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, sp.jsx)(pL, {
                status: Lb,
                entry: Ib
              }), (0, sp.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Jl(Lb.baf2ColLasers, Lb.baf2ColSpots, Lb.baf2ColLive, hb.beamsOn, null !== (Hb = Lb.baf2ColGaps) && void 0 !== Hb ? Hb : 0).map((bb => (0, sp.jsxs)("li", {
                  className: bb.tone,
                  children: [(0, sp.jsx)("b", {
                    children: ML(gb, bb.title)
                  }), null !== bb.hint && (0, sp.jsx)("span", {
                    children: ML(gb, bb.hint)
                  })]
                }, bb.dir)))
              }), (0, sp.jsx)(VL, {
                status: Lb
              })]
            })]
          })]
        })
      })
    }
    const OL = "buildAFactory2Game:",
      UL = 36e5,
      tL = 864e5;

    function CL(bb, wb, Mb) {
      return Math.max(0, Math.ceil((bb + wb - Math.max(Mb, bb)) / 1e3))
    }

    function EL(bb) {
      return bb.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function FL(bb) {
      return "Homestead" === bb
    }

    function BL(bb) {
      return function(bb) {
        let wb = 0;
        for (const Mb of bb) {
          const bb = /^Island ([1-9]\d{0,5})$/.exec(Mb);
          bb && (wb = Math.max(wb, Number(bb[1])))
        }
        return `Island ${wb+1}`
      }(bb.map((bb => bb.baf2IslandName)))
    }

    function sL(bb, wb) {
      return function(bb) {
        return `${OL}islandsBlocked${bb[0].toUpperCase()}${bb.slice(1)}`
      }("degraded" === bb && 0 === wb ? "stuck" : bb)
    }

    function mL(bb) {
      return bb.filter((bb => {
        var wb;
        return !bb.baf2IslandActive && void 0 === bb.baf2IslandUnreadable && void 0 === (null === (wb = bb.baf2IslandCoop) || void 0 === wb ? void 0 : wb.baf2CoopState)
      })).length
    }

    function hL(bb) {
      return "coopMoving" === bb || "coopUnreachable" === bb
    }

    function zL(bb, wb) {
      const Mb = wb > 0;
      return {
        change: null === bb && !Mb,
        switch: (null === bb || "degraded" === bb || hL(bb)) && !Mb,
        rename: "loading" !== bb && "degraded" !== bb && "stuck" !== bb
      }
    }

    function XL(bb, wb) {
      return void 0 === bb || "corrupt" === bb && wb
    }
    const xL = RV;

    function jL(bb, wb, Mb) {
      if (null !== bb && void 0 !== bb && bb.untilGone) {
        var eb;
        return !("dismiss" === bb.untilGone && void 0 === (null === (eb = wb.baf2IslandCoop) || void 0 === eb ? void 0 : eb.baf2CoopState)) && Mb - bb.atMs < 32500
      }
      return void 0 !== bb && Mb - bb.atMs < xL && wb.baf2IslandName === bb.from
    }
    const KL = RV;

    function rL(bb) {
      return "core" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.core : "islands" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.backToCore : void 0
    }

    function RL(bb) {
      return `\0${bb}\0`
    }

    function DL(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const eb = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const pb of Object.keys(Mb)) eb[pb] = RL(pb);
      let Hb = Object.keys(eb).length > 0 ? bb(wb, eb) : bb(wb);
      for (const [pb, Vb] of Object.entries(Mb)) Hb = Hb.split(RL(pb)).join(Vb);
      return Hb
    }

    function cL(bb, wb) {
      return bb ? wb ? "enabled" : "disabled" : "hidden"
    }
    const YL = {
      removed: `${OL}islandsCoopRemoved`,
      deleted: `${OL}islandsCoopDeleted`,
      notReady: `${OL}islandsCoopNotReady`,
      gone: `${OL}islandsCoopGone`
    };

    function ZL(bb) {
      var wb;
      return "member" !== (null === (wb = bb.baf2IslandCoop) || void 0 === wb ? void 0 : wb.baf2CoopRole) && "newer" !== bb.baf2IslandUnreadable
    }

    function fL(bb, wb, Mb, eb, Hb, pb) {
      const Vb = bb.baf2IslandActive,
        gb = bb.baf2IslandUnreadable,
        lb = bb.baf2IslandCoop,
        Lb = function(bb, wb, Mb) {
          return {
            switch: bb.switch && void 0 === wb,
            delete: bb.change && XL(wb, Mb)
          }
        }(wb, gb, eb),
        Ib = Vb && void 0 !== lb && void 0 === lb.baf2CoopState && "coopUnreachable" === pb,
        Ob = {
          switch: cL((!Vb || Ib) && void 0 === gb, Ib || Lb.switch),
          switchLabel: Ib ? "tryAgain" : "switch",
          rename: cL(!0, wb.rename),
          delete: cL(!Vb, Lb.delete),
          deleteWaits: !Vb && XL(gb, eb),
          people: cL(void 0 !== bb.baf2IslandInvitable || Hb && Vb && void 0 === gb && void 0 === lb, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Ub = !Vb && Lb.delete;
      if (void 0 === lb) return Mb ? {
        ...Ob,
        delete: cL(!Vb, !1),
        deleteWaits: !1,
        note: Ub ? {
          key: `${OL}islandsCoopKeepOwn`
        } : null
      } : Ob;
      const tb = lb.baf2CoopState,
        Cb = lb.baf2CoopMembers.length > 1,
        Eb = {
          ...Ob,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== tb && "member" === lb.baf2CoopRole) return {
        ...Eb,
        dismiss: cL(!0, wb.rename),
        note: {
          key: YL[tb],
          names: {
            owner: lb.baf2CoopOwner
          }
        }
      };
      if (void 0 !== tb) {
        let bb = {
          key: `${OL}islandsCoopOwnLost`
        };
        return Ub && Cb ? bb = {
          key: `${OL}islandsCoopDeleteMembers`
        } : Ub && Mb && (bb = {
          key: `${OL}islandsCoopKeepOwn`
        }), {
          ...Eb,
          delete: cL(!Vb, Lb.delete && !Cb && !Mb),
          deleteWaits: Ob.deleteWaits && !Cb && !Mb,
          note: bb
        }
      }
      if ("member" === lb.baf2CoopRole) return {
        ...Ob,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: cL(!0, Vb ? wb.switch : wb.rename)
      };
      const Fb = lb.baf2CoopManageHere;
      let Bb = null;
      var sb;
      Fb || Vb ? Ub && Cb ? Bb = {
        key: `${OL}islandsCoopDeleteMembers`
      } : Ub && Mb && (Bb = {
        key: `${OL}islandsCoopKeepOwn`
      }) : Bb = {
        key: null !== (sb = lb.baf2CoopLeft) && void 0 !== sb && sb.length ? `${OL}islandsCoopManageThereClaim` : `${OL}islandsCoopManageThere`
      };
      return {
        ...Ob,
        rename: cL(!0, wb.rename && Fb),
        delete: cL(!Vb, Lb.delete && !Cb && !Mb),
        deleteWaits: Ob.deleteWaits && !Cb && !Mb,
        people: "enabled",
        peopleLabel: "players",
        unshare: cL(Fb && Vb && !Cb, wb.change),
        remove: Fb,
        note: Bb
      }
    }

    function AL(bb) {
      var wb;
      const Mb = bb.baf2IslandCoop;
      if ("owner" !== (null === Mb || void 0 === Mb ? void 0 : Mb.baf2CoopRole) || void 0 !== Mb.baf2CoopState || null === (wb = Mb.baf2CoopLeft) || void 0 === wb || !wb.length) return null;
      const eb = bb.baf2IslandActive && Mb.baf2CoopManageHere;
      return {
        left: Mb.baf2CoopLeft,
        claim: eb,
        goThere: !eb && Mb.baf2CoopManageHere
      }
    }

    function WL(bb) {
      return bb.baf2CoopMembers.length >= bb.baf2CoopMax
    }

    function JL(bb, wb, Mb) {
      return void 0 !== bb && wb < bb.answer && Mb - bb.atMs < xL
    }
    const SL = "buildAFactory2Game:";

    function NL(bb, wb) {
      return {
        onKeyDown: Mb => {
          Mb.stopPropagation(), Mb.nativeEvent.isComposing || 229 === Mb.nativeEvent.keyCode || ("Enter" === Mb.key ? (Mb.preventDefault(), bb()) : "Escape" === Mb.key && (Mb.preventDefault(), wb()))
        }
      }
    }

    function vL(bb) {
      return {
        onKeyDown: wb => {
          "Escape" !== wb.key || wb.nativeEvent.isComposing || (wb.preventDefault(), wb.stopPropagation(), bb())
        }
      }
    }

    function QL(bb) {
      bb.currentTarget.select()
    }

    function GL(bb, wb) {
      (0, eb.useEffect)((() => {
        var Mb;
        bb && (null === (Mb = wb.current) || void 0 === Mb || Mb.scrollIntoView({
          block: "nearest"
        }))
      }), [bb, wb])
    }

    function qL(bb) {
      const [wb, Mb] = (0, eb.useState)(null);
      return (0, eb.useEffect)((() => {
        const wb = document.querySelector(".UiRequests"),
          eb = bb.current;
        if (!wb || !eb || "undefined" === typeof ResizeObserver) return;
        const Hb = () => {
          const bb = wb.getBoundingClientRect(),
            Hb = eb.getBoundingClientRect(),
            pb = eb.parentElement,
            Vb = pb && parseFloat(getComputedStyle(pb).paddingTop) || 0,
            gb = function(bb, wb, Mb, eb) {
              if (!bb || bb.height <= 0 || bb.right <= wb.left || bb.left >= wb.right) return null;
              const Hb = Math.max(eb, bb.bottom + 8);
              return {
                marginTop: Math.round(Hb - eb),
                maxHeight: Math.max(0, Math.floor(Mb - Hb - eb))
              }
            }(bb, Hb, window.innerHeight, Vb);
          Mb((bb => (null === bb || void 0 === bb ? void 0 : bb.marginTop) === (null === gb || void 0 === gb ? void 0 : gb.marginTop) && (null === bb || void 0 === bb ? void 0 : bb.maxHeight) === (null === gb || void 0 === gb ? void 0 : gb.maxHeight) ? bb : gb))
        };
        Hb();
        const pb = new ResizeObserver(Hb);
        return pb.observe(wb), window.addEventListener("resize", Hb), () => {
          pb.disconnect(), window.removeEventListener("resize", Hb)
        }
      }), [bb]), wb
    }

    function aL() {
      (0, eb.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function iL(bb) {
      (0, eb.useEffect)((() => {
        var wb;
        null === (wb = bb.current) || void 0 === wb || wb.focus()
      }), [bb])
    }

    function uL(bb) {
      const [wb, Mb] = (0, eb.useState)(Date.now);
      return (0, eb.useEffect)((() => {
        const wb = window.setInterval((() => {
          Mb(Date.now())
        }), bb);
        return () => {
          window.clearInterval(wb)
        }
      }), [bb]), wb
    }

    function dL(bb) {
      let {
        tier: wb,
        t: Mb
      } = bb;
      const {
        kind: eb,
        short: Hb
      } = Fb(wb), pb = tb(wb, Cb), Vb = Mb(`${SL}${pb.key}`, {
        ...pb.params,
        name: Mb(`${SL}${Bb(wb).nameKey}`)
      });
      return (0, sp.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, sp.jsx)("span", {
          className: zH()("Baf2IslandTierPip", {
            Stage: "tier" !== eb
          }),
          "aria-hidden": "true",
          children: Hb
        }), Vb]
      })
    }

    function PL(bb) {
      let {
        note: wb,
        className: Mb,
        t: eb
      } = bb;
      return (0, sp.jsx)("p", {
        className: zH()("Baf2IslandNote", Mb),
        children: DL(eb, wb.key, wb.names, wb.params)
      })
    }
    const nL = "buildAFactory2Game:";

    function yL(bb) {
      let {
        message: wb,
        arrivedAtMs: Mb,
        close: Hb,
        leave: pb
      } = bb;
      const Vb = WV(),
        {
          t: gb
        } = (0, KH.C)(),
        lb = uL(1e3),
        Lb = (0, eb.useRef)(null);
      aL(), (0, eb.useEffect)((() => {
        var bb;
        null === (bb = Lb.current) || void 0 === bb || bb.focus()
      }), []);
      const Ib = CL(Mb, wb.baf2TransferInMs, lb),
        Ob = Mb + wb.baf2TransferInMs - 1e3,
        [Ub, tb] = (0, eb.useState)(null);
      (0, eb.useEffect)((() => {
        const bb = window.setTimeout((() => {
          tb(Ob)
        }), Math.max(0, Ob - Date.now()));
        return () => {
          window.clearTimeout(bb)
        }
      }), [Ob]);
      const Cb = Ub === Ob || lb >= Ob,
        Eb = wb.baf2TransferIsland,
        Fb = wb.baf2TransferOwner;
      return (0, sp.jsx)(EV.e, {
        close: Hb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, sp.jsxs)("section", {
          ref: Lb,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsxs)("div", {
              children: [(0, sp.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === Fb ? DL(gb, `${nL}islandsTransferOwn`, {
                  island: Eb
                }) : DL(gb, `${nL}islandsTransfer`, {
                  island: Eb,
                  owner: Fb
                })
              }), (0, sp.jsx)("p", {
                children: Cb ? gb(`${nL}islandsTransferNow`) : gb(`${nL}islandsTransferIn`, {
                  time: Fp(gb, Ib)
                })
              })]
            }), (0, sp.jsx)(FV.l, {
              ariaLabel: gb(`${nL}islandsClose`),
              onClick: Hb
            })]
          }), !Cb && (0, sp.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, sp.jsx)("p", {
              className: "Baf2TransferNote",
              children: gb(`${nL}islandsTransferNote`)
            }), (0, sp.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, sp.jsx)(FV.f, {
                onClick: () => {
                  Vb.send("baf2coopstay"), pb()
                },
                children: gb(`${nL}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var oL = Mb(1611),
      TL = Mb(1192),
      kL = Mb.n(TL);
    const bI = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const wI = "buildAFactory2Game:",
      MI = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function eI(bb, wb, Mb) {
      return void 0 === wb ? Mb : "string" === typeof wb ? wb : Array.isArray(wb) ? wb.map((wb => "string" === typeof wb ? wb : "translationKey" in wb ? bb(wb.translationKey) : "")).join("") : bb(wb.translationKey)
    }

    function HI(bb) {
      const wb = {};
      for (const [Mb, eb] of Object.entries(null !== bb && void 0 !== bb ? bb : {})) wb[Mb] = eb < 0 ? Ep(eb) : eb.toLocaleString("en-US");
      return wb
    }

    function pI(bb, wb) {
      const Mb = wb ? "touch" : "mouse";
      return {
        use: bb(`${wI}lookUse_${Mb}`),
        Use: bb(`${wI}lookUseStart_${Mb}`)
      }
    }
    const VI = (0, eb.memo)((function(bb) {
      let {
        item: wb
      } = bb;
      return (0, sp.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, sp.jsx)(RH.c, {
          itemName: wb,
          amount: 0
        })
      })
    }));

    function gI(bb) {
      let {
        label: wb,
        percent: Mb,
        progress: eb
      } = bb;
      return (0, sp.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, sp.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${wb}: ${eb}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Mb,
          children: (0, sp.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${Mb}%`
            }
          })
        }), (0, sp.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: eb
        })]
      })
    }

    function lI(bb) {
      let {
        chips: wb
      } = bb;
      return (0, sp.jsx)("span", {
        className: "Baf2QuestChips",
        children: wb.map((bb => {
          let [wb, Mb, eb] = bb;
          const Hb = Mb >= eb;
          return (0, sp.jsxs)("span", {
            className: zH()("Baf2QuestChip", {
              Met: Hb
            }),
            children: [(0, sp.jsx)(VI, {
              item: wb
            }), (0, sp.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Hb ? `\u2713${eb}` : `${Mb}/${eb}`
            })]
          }, wb)
        }))
      })
    }

    function LI(bb, wb) {
      const {
        key: Mb,
        params: eb
      } = tb(wb, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return bb(`${wI}${Mb}`, {
        ...eb,
        name: bb(`${wI}${Bb(wb).nameKey}`)
      })
    }

    function II(bb) {
      let {
        core: wb,
        t: Mb
      } = bb;
      const [eb, Hb] = wb, pb = Hb > 0 ? Math.floor(100 * eb / Hb) : 100;
      return (0, sp.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": Mb(`${wI}questCoreLabel`, {
          have: String(eb),
          need: String(Hb)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": pb,
        children: [(0, sp.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: Mb(`${wI}questCore`, {
            percent: String(pb)
          })
        }), (0, sp.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, sp.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${pb}%`
            }
          })
        })]
      })
    }

    function OI(bb) {
      let {
        rows: wb,
        t: Mb
      } = bb;
      const eb = wb.filter((bb => bb.done)).length;
      return (0, sp.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": Mb(`${wI}questStepsProgress`, {
          done: String(eb),
          total: String(wb.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": wb.length,
        "aria-valuenow": eb,
        children: wb.map((bb => (0, sp.jsx)("span", {
          className: zH()("Baf2QuestSegment", {
            Done: bb.done,
            Current: bb.current
          })
        }, bb.id)))
      })
    }
    const UI = (0, eb.memo)(CI, tI);

    function tI(bb, wb) {
      const Mb = Mb => bb.view.itemNames[Mb] === wb.view.itemNames[Mb];
      return bb.t === wb.t && bb.extra === wb.extra && (null === bb.row.item || Mb(bb.row.item)) && bb.row.madeFor.every(Mb) && bb.row.also.every(Mb) && kL()(bb.row, wb.row)
    }

    function CI(bb) {
      let {
        row: wb,
        view: Mb,
        t: eb,
        extra: Hb
      } = bb;
      const {
        isTouchScreen: pb
      } = (0, sH.o)(["isTouchScreen"]), Vb = wb.item ? function(bb, wb, Mb) {
        return 1 !== Mb && bI.has(bb) ? jH(wb) : null
      }(wb.key, wb.item, wb.total) : null, gb = Vb ? eb(Vb) : wb.item ? eI(eb, Mb.itemNames[wb.item], wb.item) : "", lb = wb.also.map((bb => eI(eb, Mb.itemNames[bb], bb))), Lb = lb.join(", "), Ib = function(bb, wb) {
        var Mb;
        return wb.length < 2 ? null !== (Mb = wb[0]) && void 0 !== Mb ? Mb : "" : bb(`${wI}listAnd`, {
          rest: wb.slice(0, -1).join(bb(`${wI}listComma`)),
          last: wb[wb.length - 1]
        })
      }(eb, [gb, ...lb]), Ob = eb(`${wI}${wb.key}`, {
        ...pI(eb, pb),
        ...HI(wb.params),
        item: gb,
        also: Lb,
        itemList: Ib,
        total: String(wb.total)
      }), [Ub, ...tb] = Ob.split("\n"), Cb = wb.total > 1 && !wb.done && !wb.away;
      return (0, sp.jsxs)("li", {
        className: zH()("Baf2QuestStep", {
          Done: wb.done,
          Current: wb.current,
          JustFinished: wb.justFinished,
          Away: wb.away
        }),
        children: [!wb.done && null !== wb.item && (0, sp.jsx)(VI, {
          item: wb.item
        }), (wb.done || null === wb.item) && (0, sp.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: wb.done ? "\u2713" : "\u25cb"
        }), (0, sp.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, sp.jsx)("strong", {
            children: Ub
          }), tb.length > 0 && (0, sp.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: tb.join(" ")
          }), !wb.done && wb.madeFor.length > 0 && (0, sp.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: eb("buildAFactory2Game:questRowFor", {
              items: wb.madeFor.map((bb => eI(eb, Mb.itemNames[bb], bb))).join(" \u2192 ")
            })
          }), Cb && (0, sp.jsx)(gI, {
            label: Ub,
            percent: Math.round(100 * wb.amount / wb.total),
            progress: `${wb.amount.toLocaleString("en-US")}/${wb.total.toLocaleString("en-US")}`
          }), !wb.done && !wb.away && wb.chips && wb.chips.length > 0 && (0, sp.jsx)(lI, {
            chips: wb.chips
          }), Hb]
        })]
      })
    }
    const EI = "buildAFactory2Game:",
      FI = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      BI = {
        on: `${EI}tutorialButtonOn`,
        hud: `${EI}tutorialButtonHud`,
        off: `${EI}tutorialButtonOff`
      },
      sI = {
        on: `${EI}tutorialPickedOn`,
        hud: `${EI}tutorialPickedHud`,
        off: `${EI}tutorialPickedOff`
      };
    class mI {
      constructor(bb, wb, Mb) {
        this.commands = bb, this.quests = wb, this.toasts = Mb
      }
      next() {
        const bb = function(bb) {
            return Zb[(Zb.indexOf(bb) + 1) % Zb.length]
          }(this.quests.get().tutorial),
          wb = this.quests.setTutorial(bb);
        this.commands.send(`baf2tutorial ${bb} ${wb}`), this.toasts.show({
          baf2ToastText: [(0, Ab.de)({
            translationKey: sI[bb]
          }, Ab.O.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function hI(bb, wb) {
      let [Mb, eb] = wb;
      return bb(`${wI}${Mb}`, HI(eb))
    }

    function zI(bb) {
      let [wb, Mb] = bb;
      return wb + JSON.stringify(Mb)
    }

    function XI(bb) {
      let {
        goal: wb,
        t: Mb
      } = bb;
      return wb ? (0, sp.jsx)("span", {
        className: "Baf2BookGoal",
        children: Mb(`${wI}${wb}`)
      }) : null
    }

    function xI(bb) {
      let {
        view: wb,
        t: Mb
      } = bb;
      if (!wb.name) return null;
      const eb = GH(wb.rows);
      return (0, sp.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, sp.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: Mb(`${wI}currentQuest`)
        }), (0, sp.jsx)("strong", {
          className: "Baf2BookTitle",
          children: hI(Mb, wb.name)
        }), (0, sp.jsx)(XI, {
          goal: wb.goal,
          t: Mb
        }), eb.length > 1 && (0, sp.jsx)(OI, {
          rows: eb,
          t: Mb
        }), (0, sp.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: wb.rows.map((bb => (0, sp.jsx)(UI, {
            row: bb,
            view: wb,
            t: Mb
          }, bb.id)))
        }), wb.reward && (0, sp.jsxs)("span", {
          className: "Baf2BookReward",
          children: [Mb(`${wI}questReward`), (0, sp.jsx)(VI, {
            item: wb.reward
          }), eI(Mb, wb.itemNames[wb.reward], wb.reward)]
        })]
      })
    }

    function jI(bb) {
      let {
        quest: wb,
        upcoming: Mb,
        t: eb
      } = bb;
      return (0, sp.jsxs)("li", {
        className: zH()("Baf2BookQuest", {
          Done: wb[3],
          Upcoming: Mb
        }),
        children: [(0, sp.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: wb[3] ? "\u2713" : "\u25cb"
        }), (0, sp.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, sp.jsx)("strong", {
            className: "Baf2BookTitle",
            children: hI(eb, wb)
          }), (0, sp.jsx)(XI, {
            goal: wb[2],
            t: eb
          })]
        })]
      })
    }

    function KI(bb) {
      let {
        done: wb,
        total: Mb,
        t: eb
      } = bb;
      const Hb = Mb > 0 ? Math.round(100 * wb / Mb) : 0,
        pb = eb(`${wI}questBookChapterProgress`, {
          done: String(wb),
          total: String(Mb)
        });
      return (0, sp.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, sp.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": pb,
          "aria-valuemin": 0,
          "aria-valuemax": Mb,
          "aria-valuenow": wb,
          children: (0, sp.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Hb}%`
            }
          })
        }), (0, sp.jsx)("span", {
          className: "Baf2BookProgressText",
          children: pb
        })]
      })
    }

    function rI(bb) {
      let {
        view: wb,
        tier: Mb,
        quests: eb,
        t: Hb
      } = bb;
      const pb = Mb === wb.tier,
        Vb = (null !== eb && void 0 !== eb ? eb : []).filter((bb => !bb[4])),
        gb = (null !== eb && void 0 !== eb ? eb : []).filter((bb => bb[4])),
        lb = Vb.filter((bb => bb[3])).length,
        Lb = pb && wb.name ? zI(wb.name) : null,
        Ib = Vb.findIndex((bb => !bb[3] && zI(bb) === Lb));
      return (0, sp.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, sp.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, sp.jsx)("h3", {
            children: LI(Hb, Mb)
          }), Vb.length > 0 && (0, sp.jsx)(KI, {
            done: lb,
            total: Vb.length,
            t: Hb
          }), pb && wb.core && (0, sp.jsx)(II, {
            core: wb.core,
            t: Hb
          })]
        }), (0, sp.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === eb && pb && (0, sp.jsx)(xI, {
            view: wb,
            t: Hb
          }), Vb.map(((bb, Mb) => Mb === Ib ? (0, sp.jsx)(xI, {
            view: wb,
            t: Hb
          }, zI(bb)) : (0, sp.jsx)(jI, {
            quest: bb,
            upcoming: !bb[3],
            t: Hb
          }, zI(bb))))]
        }), pb && wb.side && (0, sp.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, sp.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Hb(`${wI}questSide`)
          }), (0, sp.jsx)("strong", {
            className: "Baf2BookTitle",
            children: hI(Hb, wb.side.name)
          }), (0, sp.jsx)(XI, {
            goal: wb.side.goal,
            t: Hb
          }), (0, sp.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, sp.jsx)(UI, {
              row: wb.side.row,
              view: wb,
              t: Hb
            })
          })]
        }), gb.length > 0 && (0, sp.jsxs)(sp.Fragment, {
          children: [(0, sp.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Hb(`${wI}questBookSidesDone`)
          }), (0, sp.jsx)("ol", {
            className: "Baf2BookQuests",
            children: gb.map((bb => (0, sp.jsx)(jI, {
              quest: bb,
              upcoming: !1,
              t: Hb
            }, zI(bb))))
          })]
        })]
      })
    }

    function RI(bb) {
      var wb, Mb, pb;
      let {
        store: Vb,
        tutorial: gb,
        close: lb
      } = bb;
      const {
        t: Lb
      } = (0, KH.C)(), Ob = (0, oL.h)(AH, Vb.get()), Ub = null !== (wb = Ob.tier) && void 0 !== wb ? wb : 1, [tb, Cb] = (0, eb.useState)(null), Bb = (null === tb || void 0 === tb ? void 0 : tb.at) === Ub ? tb.tier : Ub, sb = (0, eb.useRef)(null), mb = null !== Ob.chapters;
      (0, eb.useEffect)((() => {
        var bb;
        sb.current && (sb.current.scrollTop = 0);
        const wb = null === (bb = sb.current) || void 0 === bb ? void 0 : bb.querySelector(".Baf2BookQuest.Current");
        if (sb.current && wb) {
          const bb = wb.getBoundingClientRect().bottom - sb.current.getBoundingClientRect().bottom;
          bb > 0 && (sb.current.scrollTop += Math.min(bb, wb.getBoundingClientRect().top - sb.current.getBoundingClientRect().top))
        }
      }), [Bb, mb]);
      const hb = null === (Mb = Ob.chapters) || void 0 === Mb ? void 0 : Mb.find((bb => {
        let [wb] = bb;
        return wb === Bb
      }));
      return (0, sp.jsx)(EV.e, {
        close: lb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, sp.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: MI,
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Lb(`${wI}questBookTitle`)
            }), (0, sp.jsx)(FV.p, {
              className: "Baf2BookTutorialButton",
              disabled: !Ob.tutorialKnown,
              ariaLabel: Lb(BI[Ob.tutorial]),
              title: Lb(BI[Ob.tutorial]),
              onClick: () => {
                gb.next()
              },
              children: (0, sp.jsx)(rH.b, {
                name: FI[Ob.tutorial]
              })
            }), (0, sp.jsx)(FV.l, {
              onClick: lb
            })]
          }), (0, sp.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Lb(`${wI}questBookChapters`),
            "data-pad-initial-area": !0,
            children: Hb.slice(0, Ib()).map(((bb, wb) => {
              const Mb = wb + 1,
                {
                  kind: eb,
                  short: Hb
                } = Fb(Mb),
                pb = Eb(Mb, Ub),
                Vb = pb ? Lb(`${wI}coreAtomicHidden`) : LI(Lb, Mb);
              return (0, sp.jsx)("li", {
                children: (0, sp.jsx)("button", {
                  type: "button",
                  className: zH()({
                    Stage: "tier" !== eb,
                    Atomic: "atomic" === eb,
                    Current: Mb === Ub,
                    Selected: Mb === Bb
                  }),
                  disabled: Mb > Ub,
                  "aria-pressed": Mb === Bb,
                  "aria-label": Vb,
                  title: pb ? void 0 : Vb,
                  onClick: () => {
                    Cb({
                      tier: Mb,
                      at: Ub
                    })
                  },
                  children: pb ? "?" : Hb
                })
              }, bb.nameKey)
            }))
          }), (0, sp.jsxs)("div", {
            ref: sb,
            className: "Baf2BookBody",
            children: [vH(Ob) && Bb === Ub && (0, sp.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Lb(`${wI}questBookAllDone`)
            }), (0, sp.jsx)(rI, {
              view: Ob,
              tier: Bb,
              quests: null !== (pb = null === hb || void 0 === hb ? void 0 : hb[1]) && void 0 !== pb ? pb : null,
              t: Lb
            })]
          })]
        })
      })
    }
    const DI = "buildAFactory2Game:";

    function cI(bb) {
      let {
        tiers: wb,
        from: Mb,
        tier: eb,
        shown: Hb,
        Vt: pb
      } = bb;
      const {
        t: Vb
      } = (0, KH.C)(), gb = wb.map(((bb, wb) => {
        const gb = Mb + wb,
          {
            kind: lb,
            short: Lb
          } = Fb(gb),
          Ib = Eb(gb, eb);
        return (0, sp.jsx)("li", {
          children: (0, sp.jsx)("button", {
            type: "button",
            className: zH()({
              Stage: "tier" !== lb,
              Silhouette: Ib,
              Reached: gb <= eb,
              Current: gb === eb,
              Next: gb === eb + 1,
              Selected: gb === Hb
            }),
            disabled: Ib,
            "aria-pressed": gb === Hb,
            "aria-label": Ib ? Vb(`${DI}coreAtomicHidden`) : void 0,
            title: Ib ? void 0 : Vb(`${DI}${bb.nameKey}`),
            onClick: () => {
              pb(gb)
            },
            children: Ib ? "?" : Lb
          })
        }, bb.nameKey)
      }));
      return (0, sp.jsx)(sp.Fragment, {
        children: gb
      })
    }

    function YI(bb) {
      let {
        id: wb,
        label: Mb,
        tiers: eb,
        from: Hb,
        ...pb
      } = bb;
      return (0, sp.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, sp.jsx)("span", {
          id: wb,
          className: "Baf2CoreLadderLabel",
          children: Mb
        }), (0, sp.jsx)("ol", {
          "aria-labelledby": wb,
          children: (0, sp.jsx)(cI, {
            ...pb,
            tiers: eb,
            from: Hb
          })
        })]
      })
    }

    function ZI(bb) {
      const {
        t: wb
      } = (0, KH.C)(), Mb = Hb.findIndex((bb => void 0 !== bb.stage)), eb = Hb.findIndex((bb => void 0 !== bb.reactorTier)), pb = Mb < 0 ? Hb : Hb.slice(0, Mb), Vb = Mb < 0 ? [] : Hb.slice(Mb, eb < 0 ? void 0 : eb), lb = eb < 0 || !gb() ? [] : Hb.slice(eb);
      return (0, sp.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, sp.jsx)(YI, {
          ...bb,
          id: "baf2CoreTiersLabel",
          label: wb(`${DI}coreTiersLabel`),
          tiers: pb,
          from: 1
        }), Vb.length > 0 && (0, sp.jsx)(YI, {
          ...bb,
          id: "baf2CoreStagesLabel",
          label: wb(`${DI}coreStagesLabel`),
          tiers: Vb,
          from: Mb + 1
        }), lb.length > 0 && (0, sp.jsx)(YI, {
          ...bb,
          id: "baf2CoreAtomicLabel",
          label: wb(`${DI}coreAtomicLabel`),
          tiers: lb,
          from: eb + 1
        })]
      })
    }
    const fI = "buildAFactory2Game:";

    function AI(bb) {
      let {
        item: wb,
        itemNames: Mb,
        children: eb
      } = bb;
      return (0, sp.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, sp.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, sp.jsx)(RH.c, {
            itemName: wb,
            amount: 0
          })
        }), (0, sp.jsx)(DH.d, {
          text: Mb[wb]
        }), eb]
      })
    }

    function WI(bb) {
      const wb = new Map;
      for (const {
          block: eb
        }
        of bb.newDeposits) {
        var Mb;
        wb.set(eb, (null !== (Mb = wb.get(eb)) && void 0 !== Mb ? Mb : 0) + 1)
      }
      return [...wb]
    }

    function JI(bb) {
      let {
        value: wb,
        label: Mb,
        more: eb
      } = bb;
      return (0, sp.jsxs)("li", {
        children: [(0, sp.jsx)("strong", {
          children: wb
        }), (0, sp.jsx)("span", {
          children: Mb
        }), eb > 0 && (0, sp.jsxs)("em", {
          children: ["+", eb]
        })]
      })
    }

    function SI(bb) {
      let {
        items: wb,
        itemNames: Mb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)(), [pb, Vb] = (0, eb.useState)(null), gb = null !== pb && wb.includes(pb) ? pb : null;
      return (0, sp.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, sp.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Hb(`${fI}coreRewardUnlocks`)
        }), (0, sp.jsx)("ul", {
          children: wb.map((bb => (0, sp.jsx)("li", {
            children: (0, sp.jsx)("button", {
              type: "button",
              className: zH()("Baf2PanelIcon", {
                Picked: bb === gb
              }),
              title: (0, kH.f)(Hb, bb),
              "aria-label": (0, kH.f)(Hb, bb),
              "aria-pressed": bb === gb,
              onClick: () => {
                Vb(bb === gb ? null : bb)
              },
              children: (0, sp.jsx)(RH.c, {
                itemName: bb,
                amount: 0
              })
            })
          }, bb)))
        }), (0, sp.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== gb && (0, sp.jsxs)(sp.Fragment, {
            children: [(0, sp.jsx)(DH.d, {
              text: Mb[gb]
            }), " \xb7 ", (0, sp.jsx)(DH.d, {
              text: Mb[cb(gb)]
            })]
          }), null === gb && Hb(`${fI}coreRecipeTap`)]
        })]
      })
    }

    function NI(bb) {
      var wb, Mb;
      let {
        def: eb,
        tier: Hb,
        itemNames: pb
      } = bb;
      const {
        t: Vb
      } = (0, KH.C)(), gb = Hb > 1 ? Bb(Hb - 1) : void 0, lb = Math.round(2 * eb.islandRadius), Lb = gb ? Math.round(2 * gb.islandRadius) : lb, Ib = Hb >= 3 ? Xe(Hb) : null;
      return (0, sp.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, sp.jsxs)("ul", {
          className: zH()("Baf2CoreStats", {
            Four: null !== Ib
          }),
          children: [(0, sp.jsx)(JI, {
            value: `${lb}\xd7${lb}`,
            label: Vb(`${fI}coreStatIsland`),
            more: lb - Lb
          }), (0, sp.jsx)(JI, {
            value: String(eb.machineAllowance),
            label: Vb(`${fI}coreStatMachines`),
            more: eb.machineAllowance - (null !== (wb = null === gb || void 0 === gb ? void 0 : gb.machineAllowance) && void 0 !== wb ? wb : eb.machineAllowance)
          }), (0, sp.jsx)(JI, {
            value: String(eb.beltAllowance),
            label: Vb(`${fI}coreStatBelts`),
            more: eb.beltAllowance - (null !== (Mb = null === gb || void 0 === gb ? void 0 : gb.beltAllowance) && void 0 !== Mb ? Mb : eb.beltAllowance)
          }), null !== Ib && (0, sp.jsx)(JI, {
            value: String(Ib),
            label: Vb(`${fI}coreStatStorage`),
            more: Ib - (gb ? Xe(Hb - 1) : Ib)
          })]
        }), eb.reward && (0, sp.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, sp.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Vb(`${fI}coreRewardItem`)
          }), (0, sp.jsx)(AI, {
            item: eb.reward,
            itemNames: pb
          })]
        }), eb.newDeposits.length > 0 && (0, sp.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, sp.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Vb(eb.newDeposits.length > 1 ? `${fI}coreRewardDeposits` : `${fI}coreRewardDeposit`)
          }), WI(eb).map((bb => {
            let [wb, Mb] = bb;
            return (0, sp.jsx)(AI, {
              item: wb,
              itemNames: pb,
              children: Mb > 1 && ` \xd7${Mb}`
            }, wb)
          }))]
        }), eb.unlocks.length > 0 && (0, sp.jsx)(SI, {
          items: eb.unlocks,
          itemNames: pb
        }), (0, sp.jsx)(vI, {
          tier: Hb
        })]
      })
    }

    function vI(bb) {
      let {
        tier: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)(), eb = CH[wb];
      if (!eb) return null;
      const Hb = tH(wb, 0, 0).barrierMax !== tH(wb - 1, 0, 0).barrierMax;
      return (0, sp.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, sp.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, sp.jsx)(RH.c, {
            itemName: Hb ? gH.Chestplate : VH,
            amount: 0
          })
        }), Mb(`${fI}gearPerkLine`, {
          perk: Mb(`${fI}${eb}`)
        })]
      })
    }

    function QI(bb, wb) {
      return null === bb ? wb : bb.value
    }

    function GI(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === bb || Mb - bb.atMs >= eb ? null : Hb(bb.value, wb) ? bb.armed ? null : bb : bb.armed ? bb : {
        ...bb,
        armed: !0
      }
    }

    function qI(bb, wb) {
      const Mb = wb.filter((wb => {
        var Mb;
        return !1 !== (null === (Mb = bb.get(wb)) || void 0 === Mb ? void 0 : Mb.value)
      }));
      for (const [eb, Hb] of bb) Hb.value && !wb.includes(eb) && Mb.push(eb);
      return Mb
    }

    function aI(bb, wb, Mb, Hb) {
      const [pb, Vb] = (0, eb.useState)((() => new Map)), gb = () => {
        Vb((wb => function(bb, wb, Mb, eb) {
          var Hb;
          let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Vb = null;
          for (const [gb, lb] of bb) {
            const Hb = GI(lb, wb(gb), Mb, eb, pb);
            Hb !== lb && (Vb ??= new Map(bb), null === Hb ? Vb.delete(gb) : Vb.set(gb, Hb))
          }
          return null !== (Hb = Vb) && void 0 !== Hb ? Hb : bb
        }(wb, bb, Date.now(), Mb, Hb)))
      };
      (0, eb.useEffect)((() => {
        gb()
      }), [wb, Mb]), (0, eb.useEffect)((() => {
        if (0 === pb.size) return;
        const bb = Math.min(...[...pb.values()].map((bb => bb.atMs))),
          wb = setTimeout(gb, Math.max(0, bb + Mb - Date.now()) + 1);
        return () => {
          clearTimeout(wb)
        }
      }), [pb, wb, Mb]);
      return [pb, (wb, Mb) => {
        Vb((eb => {
          const pb = new Map(eb);
          return pb.set(wb, function(bb, wb, Mb) {
            return {
              value: bb,
              atMs: Mb,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(bb, wb)
            }
          }(Mb, bb(wb), Date.now(), Hb)), pb
        }))
      }]
    }
    const iI = "buildAFactory2Game:";

    function uI(bb) {
      let {
        message: wb,
        itemNames: Mb
      } = bb;
      const Hb = WV(),
        {
          t: pb
        } = (0, KH.C)(),
        [Vb, gb] = (0, eb.useState)(!1),
        [lb, Lb] = function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RV;
          const [Mb, eb] = aI((wb => bb.includes(wb)), bb, wb, Object.is);
          return [qI(Mb, bb), eb]
        }(wb.baf2CoreBankPaused),
        Ib = new Set(lb),
        Ob = [...wb.baf2CoreBanked];
      for (const eb of Ib) Ob.some((bb => {
        let [wb] = bb;
        return wb === eb
      })) || Ob.push([eb, 0]);
      return 0 === Ob.length ? null : (0, sp.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, sp.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Vb,
          onClick: () => {
            gb(!Vb)
          },
          children: [(0, sp.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: pb(`${iI}coreBankedLater`)
          }), (0, sp.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Ob.map((bb => {
              let [wb, Mb] = bb;
              const eb = Ib.has(wb);
              return (0, sp.jsxs)("span", {
                className: zH()({
                  Paused: eb
                }),
                title: eb ? pb(`${iI}coreBankPausedTag`) : void 0,
                children: [(0, sp.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, sp.jsx)(RH.c, {
                    itemName: wb,
                    amount: 0
                  })
                }), Mb, eb && (0, sp.jsx)(rH.b, {
                  name: "pause"
                })]
              }, wb)
            }))
          }), (0, sp.jsx)(rH.b, {
            name: Vb ? "angle-up" : "angle-down"
          })]
        }), Vb && (0, sp.jsxs)(sp.Fragment, {
          children: [(0, sp.jsx)("ul", {
            children: Ob.map((bb => {
              let [wb, eb] = bb;
              const Vb = Ib.has(wb);
              return (0, sp.jsxs)("li", {
                children: [(0, sp.jsxs)(AI, {
                  item: wb,
                  itemNames: Mb,
                  children: [(0, sp.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: eb
                  }), Vb && (0, sp.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: pb(`${iI}coreBankPausedTag`)
                  })]
                }), (0, sp.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, sp.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === eb,
                    onClick: () => {
                      Hb.send(`baf2corewithdraw ${eb} ${wb}`)
                    },
                    children: pb(`${iI}coreTake`)
                  }), (0, sp.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Hb.send(`${hb} ${wb}`), Lb(wb, !Vb)
                    },
                    children: pb(Vb ? `${iI}coreBankResume` : `${iI}coreBankStop`)
                  })]
                })]
              }, wb)
            }))
          }), (0, sp.jsx)("p", {
            className: "Baf2CoreHint",
            children: pb(`${iI}coreBankNote`)
          })]
        })]
      })
    }
    const dI = "buildAFactory2Game:";

    function PI(bb) {
      const wb = Math.max(0, Math.floor(bb));
      return `${Math.floor(wb/60)}:${String(wb%60).padStart(2,"0")}`
    }

    function nI(bb) {
      let {
        item: wb
      } = bb;
      return (0, sp.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, sp.jsx)(RH.c, {
          itemName: wb,
          amount: 0
        })
      })
    }

    function yI() {
      return (0, sp.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, sp.jsx)(rH.b, {
          name: "bolt"
        })
      })
    }

    function oI(bb) {
      let {
        charge: wb,
        hint: Mb,
        itemNames: eb
      } = bb;
      const Hb = WV(),
        {
          t: pb
        } = (0, KH.C)(),
        [Vb, gb, lb, Lb, Ib, Ob, Ub] = wb,
        [tb, Cb] = function(bb) {
          var wb;
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RV,
            eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Hb, pb] = aI((() => bb), bb, Mb, eb);
          return [QI(null !== (wb = Hb.get("")) && void 0 !== wb ? wb : null, bb), bb => {
            pb("", bb)
          }]
        }(Ub),
        Eb = tb === Ub ? Ob : !tb,
        Fb = Lb >= Ib,
        Bb = Vb.find((bb => {
          let [, wb, Mb] = bb;
          return Mb < .9 * wb
        }));
      let sb = `${dI}coreChargeWaiting`,
        mb = {};
      return Fb ? sb = `${dI}coreChargeDone` : tb ? sb = `${dI}coreChargeStopped` : Eb && Mb ? (sb = `${dI}${Mb[0]}`, mb = {
        item: (0, kH.f)(pb, Mb[1])
      }) : Eb && Bb ? (sb = `${dI}coreChargeShort`, mb = {
        item: (0, kH.f)(pb, Bb[0])
      }) : Eb && gb > 0 && !lb ? sb = `${dI}coreChargePower` : Eb && (sb = `${dI}coreChargeRunning`), (0, sp.jsxs)("div", {
        className: zH()("Baf2CoreCharge", {
          Waiting: !Eb && !Fb,
          Done: Fb
        }),
        children: [(0, sp.jsxs)("h4", {
          children: [pb(`${dI}coreChargeTitle`), (0, sp.jsx)("span", {
            children: pb(`${dI}coreChargeProgress`, {
              done: PI(Lb),
              need: PI(Ib)
            })
          })]
        }), (0, sp.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, sp.jsx)("div", {
            style: {
              width: 100 * Math.min(Lb, Ib) / Ib + "%"
            }
          })
        }), (0, sp.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Vb.map((bb => {
            var wb;
            let [Mb, Hb, Vb] = bb;
            const gb = Vb >= .9 * Hb;
            return (0, sp.jsxs)("li", {
              className: zH()({
                Done: gb,
                Short: Eb && !gb
              }),
              children: [(0, sp.jsx)(nI, {
                item: Mb
              }), (0, sp.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, sp.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, sp.jsx)(DH.d, {
                    text: null !== (wb = eb[Mb]) && void 0 !== wb ? wb : Mb
                  }), (0, sp.jsx)("span", {
                    children: pb(`${dI}coreChargeItem`, {
                      now: String(Vb),
                      need: String(Hb)
                    })
                  })]
                }), (0, sp.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, sp.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Vb/Hb)}%`
                    }
                  })
                })]
              })]
            }, Mb)
          })), gb > 0 && (0, sp.jsxs)("li", {
            className: zH()("Baf2CoreChargePower", {
              Short: Eb && !lb
            }),
            children: [(0, sp.jsx)(yI, {}), (0, sp.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, sp.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, sp.jsx)("span", {
                  children: pb(`${dI}coreChargePowerRow`, {
                    power: ob(gb)
                  })
                })
              })
            })]
          })]
        }), (0, sp.jsx)("p", {
          className: "Baf2CoreHint",
          children: pb(sb, mb)
        }), !Fb && (Eb || tb) && (0, sp.jsx)("button", {
          type: "button",
          className: zH()("Baf2CoreChargeToggle", {
            Stopped: tb
          }),
          onClick: () => {
            Hb.send(Xb), Cb(!tb)
          },
          children: pb(tb ? `${dI}coreChargeRestart` : `${dI}coreChargeStop`)
        })]
      })
    }

    function TI(bb) {
      let {
        charge: wb,
        reached: Mb,
        itemNames: eb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)();
      return (0, sp.jsxs)("div", {
        className: zH()("Baf2CoreCharge", {
          Done: Mb
        }),
        children: [(0, sp.jsxs)("h4", {
          children: [Hb(`${dI}coreChargeTitle`), (0, sp.jsx)("span", {
            children: Hb(`${dI}coreChargeSpecTime`, {
              time: PI(wb.seconds)
            })
          })]
        }), (0, sp.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [wb.items.map((bb => {
            var wb;
            let {
              item: pb,
              amount: Vb
            } = bb;
            return (0, sp.jsxs)("li", {
              className: zH()({
                Done: Mb
              }),
              children: [(0, sp.jsx)(nI, {
                item: pb
              }), (0, sp.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, sp.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, sp.jsx)(DH.d, {
                    text: null !== (wb = eb[pb]) && void 0 !== wb ? wb : pb
                  }), (0, sp.jsx)("span", {
                    children: Hb(`${dI}coreChargeSpecItem`, {
                      need: String(Vb)
                    })
                  })]
                })
              })]
            }, pb)
          })), wb.powerPerS > 0 && (0, sp.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, sp.jsx)(yI, {}), (0, sp.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, sp.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, sp.jsx)("span", {
                  children: Hb(`${dI}coreChargePowerRow`, {
                    power: ob(wb.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const kI = "buildAFactory2Game:";

    function bO(bb) {
      let {
        def: wb,
        reached: Mb,
        banked: eb,
        itemNames: Hb
      } = bb;
      const {
        t: pb
      } = (0, KH.C)();
      return (0, sp.jsx)("ul", {
        className: "Baf2CoreCost",
        children: wb.cost.map((bb => {
          let {
            item: wb,
            amount: Vb
          } = bb;
          const gb = Mb ? 0 : eb(wb);
          return (0, sp.jsx)("li", {
            children: (0, sp.jsx)(AI, {
              item: wb,
              itemNames: Hb,
              children: (0, sp.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: gb > 0 ? pb(`${kI}coreBankedFor`, {
                  amount: String(gb),
                  total: String(Vb)
                }) : `\xd7${Vb}`
              })
            })
          }, wb)
        }))
      })
    }

    function wO(bb, wb) {
      if (wb >= Ib()) return bb(`${kI}coreMaxTier`);
      const Mb = Lb[wb + 1];
      return Mb && !Mb.startsWith("upgradeCore") ? bb(`${kI}coreGateQuest`, {
        quest: bb(`${kI}quest_${Mb}`)
      }) : bb(`${kI}coreGateClosed`)
    }

    function MO() {
      const {
        t: bb
      } = (0, KH.C)(), wb = WV(), Mb = (0, eb.useRef)(null), Hb = (0, eb.useRef)(Date.now());
      return GL(!0, Mb), (0, sp.jsx)("div", {
        ref: Mb,
        className: "Baf2CoreGrow",
        children: (0, sp.jsx)(FV.p, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Hb.current >= 600 && wb.send(mb)
          },
          children: bb(`${kI}coreGrow`)
        })
      })
    }

    function eO(bb) {
      let {
        message: wb,
        itemNames: Mb,
        next: eb
      } = bb;
      const Hb = WV(),
        {
          t: pb
        } = (0, KH.C)(),
        Vb = wb.baf2CoreTier,
        gb = wb.baf2CoreReady,
        lb = wb.baf2CoreNeeds.filter((bb => {
          let [, wb, Mb, eb] = bb;
          return eb > 0 && wb < Mb
        })),
        Lb = wb.baf2CoreNeeds.every((bb => {
          let [, wb, Mb] = bb;
          return wb >= Mb
        })),
        Ib = wb.baf2CoreKeep;
      return (0, sp.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, sp.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [gb && (0, sp.jsx)(MO, {}), (0, sp.jsx)("h3", {
            children: pb(`${kI}coreBring`)
          }), (0, sp.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: wb.baf2CoreNeeds.map((bb => {
              let [wb, eb, Vb, gb] = bb;
              return (0, sp.jsxs)("li", {
                className: zH()({
                  Done: eb >= Vb
                }),
                children: [(0, sp.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, sp.jsx)(RH.c, {
                    itemName: wb,
                    amount: 0
                  })
                }), (0, sp.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, sp.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, sp.jsx)(DH.d, {
                      text: Mb[wb]
                    }), (0, sp.jsxs)("span", {
                      children: [eb, "/", Vb]
                    })]
                  }), (0, sp.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, sp.jsx)("div", {
                      style: {
                        width: 100 * eb / Vb + "%"
                      }
                    }), gb > 0 && (0, sp.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * gb / Vb + "%"
                      }
                    })]
                  })]
                }), gb > 0 && eb < Vb && (0, sp.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Hb.send(`${zb} ${wb}`)
                  },
                  children: pb(`${kI}coreDeposit`, {
                    amount: String(gb)
                  })
                })]
              }, wb)
            }))
          }), wb.baf2CoreCharge && (0, sp.jsx)(oI, {
            charge: wb.baf2CoreCharge,
            hint: wb.baf2CoreChargeHint,
            itemNames: Mb
          }), !gb && lb.length > 1 && (0, sp.jsx)(FV.p, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Hb.send(mb)
            },
            children: pb(`${kI}coreHandOver`)
          }), !gb && void 0 !== Ib && (0, sp.jsx)("p", {
            className: "Baf2CoreHint",
            children: pb(`${kI}coreKeepRest`, {
              item: (0, kH.f)(pb, Ib)
            })
          }), !gb && !Lb && 0 === lb.length && void 0 === Ib && (0, sp.jsx)("p", {
            className: "Baf2CoreHint",
            children: pb(`${kI}coreNothingHeld`)
          }), (0, sp.jsx)(uI, {
            message: wb,
            itemNames: Mb
          })]
        }), (0, sp.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, sp.jsx)("h3", {
            children: pb(`${kI}coreRewards`)
          }), (0, sp.jsx)(NI, {
            def: eb,
            tier: Vb + 1,
            itemNames: Mb
          })]
        })]
      })
    }

    function HO(bb) {
      let {
        message: wb,
        itemNames: Mb,
        shown: eb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)(), pb = wb.baf2CoreTier, Vb = Bb(eb), gb = eb <= pb, lb = new Map(wb.baf2CoreBanked), Lb = !sb(pb, xb(wb)) && eb === pb;
      return (0, sp.jsxs)("div", {
        className: zH()("Baf2CoreBody", {
          Locked: !gb
        }),
        children: [(0, sp.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, sp.jsx)("h3", {
            children: Hb(gb ? `${kI}coreItTook` : `${kI}coreItNeeds`)
          }), 0 === Vb.cost.length && (0, sp.jsx)("p", {
            className: "Baf2CoreHint",
            children: Hb(`${kI}coreTierStart`)
          }), Vb.cost.length > 0 && (0, sp.jsx)(bO, {
            def: Vb,
            reached: gb,
            banked: bb => {
              var wb;
              return function(bb, wb, Mb, eb) {
                let Hb = bb;
                for (let Vb = wb + 2; Vb <= Mb; Vb++) {
                  var pb;
                  const bb = Bb(Vb).cost.find((bb => bb.item === eb)),
                    wb = Math.min(Hb, null !== (pb = null === bb || void 0 === bb ? void 0 : bb.amount) && void 0 !== pb ? pb : 0);
                  if (Vb === Mb) return wb;
                  Hb -= wb
                }
                return 0
              }(null !== (wb = lb.get(bb)) && void 0 !== wb ? wb : 0, pb, eb, bb)
            },
            itemNames: Mb
          }), Vb.charge && (0, sp.jsx)(TI, {
            charge: Vb.charge,
            reached: gb,
            itemNames: Mb
          }), Lb && (0, sp.jsxs)(sp.Fragment, {
            children: [(0, sp.jsx)("p", {
              className: "Baf2CoreHint",
              children: wO(Hb, pb)
            }), (0, sp.jsx)(uI, {
              message: wb,
              itemNames: Mb
            })]
          })]
        }), (0, sp.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, sp.jsx)("h3", {
            children: Hb(gb ? `${kI}coreGave` : `${kI}coreLockedRewards`)
          }), (0, sp.jsx)(NI, {
            def: Vb,
            tier: eb,
            itemNames: Mb
          })]
        })]
      })
    }

    function pO(bb, wb) {
      const {
        key: Mb,
        params: eb
      } = tb(wb - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return bb(`${kI}${Mb}`, eb)
    }
    const VO = "buildAFactory2Game:",
      gO = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      lO = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function LO(bb) {
      let {
        view: wb,
        close: Mb,
        askIslands: Hb
      } = bb;
      const {
        t: pb
      } = (0, KH.C)(), [Vb, gb] = (0, eb.useState)(!1);
      (0, eb.useEffect)((() => {
        if (!Vb) return;
        const bb = window.setTimeout((() => {
          gb(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(bb)
        }
      }), [Vb]);
      const {
        message: lb,
        itemNames: Lb
      } = wb, Ib = lb.baf2CoreTier, Ob = Bb(Ib), Ub = sb(Ib, xb(lb)), [Eb, Fb] = lb.baf2CoreMachines, [mb, hb] = lb.baf2CoreBelts, zb = lb.baf2CoreStorage, Xb = lb.baf2CoreReady, [jb, Kb] = (0, eb.useState)(null), rb = (null === jb || void 0 === jb ? void 0 : jb.at) === Ib && jb.ready === Xb ? jb.tier : Ub ? Ib + 1 : Ib;
      let Rb = "coreTierLocked";
      rb <= Ib ? Rb = "coreTierReached" : rb === Ib + 1 && (Rb = "coreTierNext");
      const Db = pb(`${VO}${Bb(rb).nameKey}`),
        cb = rb === Ib + 1 ? Ub : null,
        Yb = tb(rb, {
          tier: Rb,
          stage: gO[Rb],
          atomic: lO[Rb]
        }),
        Zb = pb(`${VO}${Yb.key}`, {
          ...Yb.params,
          name: Db
        }),
        fb = tb(Ib, Cb),
        Ab = pb(`${VO}${fb.key}`, {
          ...fb.params,
          name: pb(`${VO}${Ob.nameKey}`)
        });
      return (0, sp.jsx)(EV.e, {
        close: Mb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, sp.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsxs)("div", {
              children: [(0, sp.jsx)("h2", {
                id: "baf2CoreTitle",
                children: pb(`${VO}coreTitle`)
              }), void 0 !== lb.baf2CoreIslandName && (0, sp.jsx)("p", {
                className: "Baf2CoreIsland",
                children: lb.baf2CoreIslandName
              }), (0, sp.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, sp.jsx)("span", {
                  children: Ab
                }), (0, sp.jsx)("span", {
                  className: zH()({
                    Full: Eb >= Fb
                  }),
                  children: pb(`${VO}coreMachineCount`, {
                    amount: String(Eb),
                    total: String(Fb)
                  })
                }), (0, sp.jsx)("span", {
                  className: zH()({
                    Full: mb >= hb
                  }),
                  children: pb(`${VO}coreBeltCount`, {
                    amount: String(mb),
                    total: String(hb)
                  })
                }), void 0 !== zb && (0, sp.jsx)("span", {
                  className: zH()({
                    Full: zb[0] >= zb[1]
                  }),
                  children: pb(`${VO}coreStorageCount`, {
                    amount: String(zb[0]),
                    total: String(zb[1])
                  })
                })]
              })]
            }), (0, sp.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [lb.baf2CoreIslands && (0, sp.jsx)(FV.f, {
                className: "Baf2CoreIslandsButton",
                disabled: Vb,
                onClick: () => {
                  gb(!0), Hb()
                },
                children: pb(`${VO}islandsOpenButton`)
              }), (0, sp.jsx)(FV.l, {
                onClick: Mb
              })]
            })]
          }), (0, sp.jsx)(ZI, {
            tier: Ib,
            shown: rb,
            Vt: bb => {
              Kb({
                tier: bb,
                at: Ib,
                ready: Xb
              })
            }
          }), (0, sp.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Zb, rb > Ib + 1 && (0, sp.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: pO(pb, rb)
            })]
          }), 6 === rb && rb > Ib && (0, sp.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: pb(`${VO}coreStagesNote`)
          }), 11 === rb && rb > Ib && (0, sp.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: pb(`${VO}coreAtomicNote`)
          }), cb && (0, sp.jsx)(eO, {
            message: lb,
            itemNames: Lb,
            next: cb
          }), !cb && (0, sp.jsx)(HO, {
            message: lb,
            itemNames: Lb,
            shown: rb
          })]
        })
      })
    }
    const IO = {
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
    const OO = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: ep,
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

    function UO(bb) {
      return bb.baf2DropCometOreOnly ? "dropCometOre" : bb.baf2DropCometIsotope ? "seed" === bb.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function tO(bb) {
      let {
        message: wb,
        quests: Mb,
        close: Hb,
        leave: pb
      } = bb;
      const Vb = WV(),
        {
          t: gb
        } = (0, KH.C)(),
        lb = (0, oL.h)(AH, Mb.get()),
        Lb = function(bb) {
          var wb;
          if (!fb(bb.tutorial)) return null;
          const Mb = bb.rows.find((bb => bb.current)),
            eb = Mb ? IO[Mb.key] : void 0;
          return null !== (wb = null !== eb && void 0 !== eb ? eb : bb.side ? IO[bb.side.row.key] : void 0) && void 0 !== wb ? wb : null
        }(lb),
        Ib = null === lb.tier || Vp(lb.tier),
        Ob = Ib ? OO : OO.filter((bb => {
          let {
            item: wb
          } = bb;
          return wb !== ep
        })),
        [Ub, tb] = (0, eb.useState)(null),
        Cb = null !== Ub && void 0 !== Ub ? Ub : !wb.baf2DropFoundSalvage && Ib,
        Eb = wb.baf2DropRuinDistance,
        Fb = wb.baf2DropComet,
        Bb = wb.baf2DropOldWorks,
        sb = wb.baf2DropGrove,
        mb = function(bb) {
          return 2 + Number(void 0 !== bb.baf2DropComet) + Number(!!bb.baf2DropOwedComet || void 0 !== bb.baf2DropOwedWaitMinutes) + Number(void 0 !== bb.baf2DropDigDistance) + Number(void 0 !== bb.baf2DropOldWorks) + Number(void 0 !== bb.baf2DropGrove)
        }(wb),
        hb = bb => {
          Vb.send(function(bb) {
            return `baf2drop ${bb}`
          }(bb)), pb()
        };
      let zb = gb("buildAFactory2Game:dropRuinNone");
      if (null !== Eb) {
        let bb = wb.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        wb.baf2DropRuinOldWorks && (bb = "dropRuinOldWorks");
        const Mb = void 0 === wb.baf2DropRuinCluster ? gb("buildAFactory2Game:dropRuinOpen") : gb("buildAFactory2Game:dropRuinCluster", {
          count: String(wb.baf2DropRuinCluster)
        });
        zb = `${gb(`buildAFactory2Game:${bb}`,{distance:String(Eb)})} ${Mb}`
      }
      let Xb = gb("buildAFactory2Game:dropBelowDescription");
      void 0 !== wb.baf2DropBelowLook && (Xb = gb("buildAFactory2Game:dropBelowLook", {
        look: gb(wb.baf2DropBelowLook)
      }));
      const xb = "buildAFactory2Game:wildsRegion_survivorGrove" === wb.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        jb = Fp(gb, 60 * function(bb) {
          const [wb, Mb] = (0, eb.useState)((() => Date.now())), [Hb, pb] = (0, eb.useState)(wb);
          return (0, eb.useEffect)((() => {
            const bb = Date.now();
            Mb(bb), pb(bb)
          }), [bb]), (0, eb.useEffect)((() => {
            const bb = window.setInterval((() => {
              pb(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(bb)
            }
          }), []), Math.max(1, bb.baf2DropRenewMinutes - Math.floor((Hb - wb) / 6e4))
        }(wb)),
        Kb = function(bb, wb, Mb) {
          return "ruin" === bb && !Mb || "owed" === bb && !wb.baf2DropOwedComet ? null : bb
        }(Lb, wb, null !== Eb),
        rb = function(bb) {
          for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
          return zH()("Baf2DropTile", ...Mb, {
            Wanted: Kb === bb
          })
        };
      return (0, sp.jsx)(EV.e, {
        close: Hb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, sp.jsxs)("section", {
          className: zH()("Baf2Panel Baf2DropMap", {
            Many: mb >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsxs)("div", {
              children: [(0, sp.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: gb("buildAFactory2Game:dropMapTitle")
              }), (0, sp.jsx)("p", {
                children: gb("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, sp.jsx)(FV.l, {
              onClick: Hb
            })]
          }), (0, sp.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== Fb && (0, sp.jsxs)(FV.D, {
              className: rb("comet", "Baf2DropComet"),
              onClick: () => {
                hb("comet")
              },
              children: [(0, sp.jsx)("strong", {
                children: gb("buildAFactory2Game:dropComet")
              }), (0, sp.jsx)("span", {
                children: gb(`buildAFactory2Game:${UO(wb)}`, {
                  distance: String(Fb)
                })
              })]
            }), wb.baf2DropOwedComet && (0, sp.jsxs)(FV.D, {
              className: rb("owed", "Baf2DropComet"),
              onClick: () => {
                hb("owed")
              },
              children: [(0, sp.jsx)("strong", {
                children: gb("buildAFactory2Game:dropOwedComet")
              }), (0, sp.jsx)("span", {
                children: wb.baf2DropOwedIsotope ? gb("buildAFactory2Game:dropOwedIsotopeDescription") : gb("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== wb.baf2DropOwedWaitMinutes && (0, sp.jsxs)(FV.D, {
              className: rb("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, sp.jsx)("strong", {
                children: gb("buildAFactory2Game:dropOwedComet")
              }), (0, sp.jsx)("span", {
                children: gb("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(wb.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, sp.jsxs)(FV.f, {
              className: rb("below"),
              onClick: () => {
                hb("below")
              },
              children: [(0, sp.jsx)("strong", {
                children: gb("buildAFactory2Game:dropBelow")
              }), (0, sp.jsx)("span", {
                children: Xb
              })]
            }), void 0 !== wb.baf2DropDigDistance && (0, sp.jsxs)(FV.u, {
              className: rb("dig"),
              onClick: () => {
                hb("dig")
              },
              children: [(0, sp.jsx)("strong", {
                children: gb("buildAFactory2Game:dropDig")
              }), (0, sp.jsx)("span", {
                children: gb("buildAFactory2Game:dropDigDescription", {
                  distance: String(wb.baf2DropDigDistance),
                  y: Ep(wb.baf2DropDigY)
                })
              })]
            }), void 0 !== sb && (0, sp.jsxs)(FV.u, {
              className: rb("grove", "Baf2DropGrove"),
              onClick: () => {
                hb("grove")
              },
              children: [(0, sp.jsx)("strong", {
                children: gb("buildAFactory2Game:dropGrove")
              }), (0, sp.jsx)("span", {
                children: gb(`buildAFactory2Game:${xb}`, {
                  distance: String(sb)
                })
              })]
            }), (0, sp.jsxs)(FV.p, {
              className: rb("ruin"),
              disabled: null === Eb,
              onClick: () => {
                hb("ruin")
              },
              children: [(0, sp.jsx)("strong", {
                children: gb("buildAFactory2Game:dropRuin")
              }), (0, sp.jsx)("span", {
                children: zb
              })]
            }), void 0 !== Bb && (0, sp.jsxs)(FV.Q, {
              className: rb("works"),
              onClick: () => {
                hb("works")
              },
              children: [(0, sp.jsx)("strong", {
                children: gb("buildAFactory2Game:dropOldWorks")
              }), (0, sp.jsx)("span", {
                children: gb("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(Bb)
                })
              })]
            })]
          }), (0, sp.jsx)("p", {
            className: "Baf2DropRenew",
            children: gb("buildAFactory2Game:dropRenew", {
              time: jb
            })
          }), (0, sp.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: Cb,
            onToggle: bb => {
              bb.currentTarget.open !== Cb && tb(bb.currentTarget.open)
            },
            children: [(0, sp.jsx)("summary", {
              children: gb("buildAFactory2Game:dropSalvageWhat")
            }), (0, sp.jsx)("p", {
              children: gb("buildAFactory2Game:dropSalvageIntro")
            }), (0, sp.jsx)("ul", {
              children: Ob.map((bb => {
                let {
                  item: wb,
                  nameKey: Mb,
                  useKey: eb,
                  params: Hb
                } = bb;
                return (0, sp.jsxs)("li", {
                  children: [(0, sp.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, sp.jsx)(RH.c, {
                      itemName: wb,
                      amount: 0
                    })
                  }), (0, sp.jsxs)("span", {
                    children: [(0, sp.jsx)("strong", {
                      children: gb(Mb)
                    }), ": ", gb(eb, Hb)]
                  })]
                }, wb)
              }))
            })]
          })]
        })
      })
    }
    const CO = "buildAFactory2Game:";

    function EO(bb, wb) {
      return bb.sendIslandEdit(`baf2coopleave ${wb.baf2IslandId}`)
    }

    function FO(bb) {
      let {
        card: wb,
        canRename: Mb,
        done: Hb,
        t: pb
      } = bb;
      const Vb = WV(),
        [gb, lb] = (0, eb.useState)(wb.baf2IslandName),
        Lb = EL(gb),
        Ib = "" === Lb || FL(Lb),
        Ob = () => {
          !Ib && Mb && (Lb !== wb.baf2IslandName ? Hb(Vb.sendIslandEdit(`baf2islandrename ${wb.baf2IslandId} ${Lb}`)) : Hb(null))
        },
        Ub = () => {
          Hb(null)
        };
      return (0, sp.jsxs)("div", {
        className: "Baf2IslandForm",
        ...vL(Ub),
        children: [(0, sp.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [pb(`${CO}islandsRenameLabel`), (0, sp.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: gb,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: QL,
            onChange: bb => {
              lb(bb.target.value)
            },
            ...NL(Ob, Ub)
          })]
        }), "" === Lb && (0, sp.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: pb(`${CO}islandsRenameEmpty`)
        }), FL(Lb) && (0, sp.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: pb(`${CO}islandsNameReserved`)
        }), (0, sp.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, sp.jsx)(FV.u, {
            disabled: Ib || !Mb,
            onClick: Ob,
            children: pb(`${CO}islandsRenameSave`)
          }), (0, sp.jsx)(FV.f, {
            onClick: Ub,
            children: pb(`${CO}islandsCancel`)
          })]
        })]
      })
    }

    function BO(bb) {
      let {
        card: wb,
        canDelete: Mb,
        done: Hb,
        t: pb
      } = bb;
      const Vb = WV(),
        [gb, lb] = (0, eb.useState)(""),
        Lb = function(bb, wb) {
          return EL(bb).toLowerCase() === EL(wb).toLowerCase()
        }(gb, wb.baf2IslandName),
        Ib = () => {
          Lb && Mb && Hb(Vb.sendIslandEdit(`baf2islanddelete ${wb.baf2IslandId}`))
        },
        Ob = () => {
          Hb(null)
        },
        Ub = RL("name"),
        [tb, Cb = ""] = pb(`${CO}islandsDeleteConfirm`, {
          name: Ub
        }).split(Ub);
      return (0, sp.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...vL(Ob),
        children: [(0, sp.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, sp.jsxs)("span", {
            children: [tb, (0, sp.jsx)("strong", {
              children: wb.baf2IslandName
            }), Cb]
          }), (0, sp.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: gb,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: QL,
            onChange: bb => {
              lb(bb.target.value)
            },
            ...NL(Ib, Ob)
          })]
        }), AL(wb) && (0, sp.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: pb(`${CO}islandsDeleteLeftBack`)
        }), (0, sp.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, sp.jsx)(FV.Q, {
            disabled: !Lb || !Mb,
            onClick: Ib,
            children: pb(`${CO}islandsDeleteForGood`)
          }), (0, sp.jsx)(FV.f, {
            onClick: Ob,
            children: pb(`${CO}islandsCancel`)
          })]
        })]
      })
    }

    function sO(bb) {
      let {
        members: wb,
        t: Mb
      } = bb;
      const eb = wb.length;
      return (0, sp.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, sp.jsxs)("span", {
          children: [1 === eb ? Mb(`${CO}islandsPlayersOne`) : Mb(`${CO}islandsPlayers`, {
            count: String(eb)
          }), " "]
        }), wb.map(((bb, wb) => (0, sp.jsxs)("span", {
          className: zH()("Baf2IslandMember", {
            Here: bb.baf2MemberHere
          }),
          title: bb.baf2MemberHere ? Mb(`${CO}islandsPlayerHere`) : void 0,
          children: [bb.baf2MemberName, wb < eb - 1 ? ", " : ""]
        }, bb.baf2MemberKey)))]
      })
    }

    function mO(bb) {
      let {
        card: wb,
        answered: Mb,
        nowMs: Hb,
        t: pb
      } = bb;
      const Vb = WV(),
        [gb, lb] = (0, eb.useState)(new Map),
        Lb = AL(wb);
      if (!Lb) return null;
      return (0, sp.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, sp.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: pb(`${CO}islandsLeftTitle`)
        }), (0, sp.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Lb.left.map((bb => {
            const eb = bb.baf2LeftKey,
              Ib = JL(gb.get(eb), Mb, Hb),
              Ob = function(bb) {
                return 1 === bb ? [`${OL}islandsLeftItemsOne`] : [`${OL}islandsLeftItems`, {
                  count: String(bb)
                }]
              }(bb.baf2LeftItems);
            return (0, sp.jsx)("li", {
              className: zH()("Baf2IslandPerson", {
                Pending: Ib
              }),
              children: (0, sp.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, sp.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: bb.baf2LeftName
                }), (0, sp.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: pb(Ob[0], Ob[1])
                }), Lb.claim && (0, sp.jsx)(FV.u, {
                  className: "Baf2IslandPersonButton",
                  disabled: Ib,
                  onClick: () => {
                    (bb => {
                      const Mb = Vb.sendIslandEdit(`baf2coopclaim ${wb.baf2IslandId} ${bb}`);
                      lb((wb => new Map(wb).set(bb, {
                        atMs: Date.now(),
                        answer: Mb
                      })))
                    })(eb)
                  },
                  children: pb(`${CO}islandsClaim`)
                })]
              })
            }, eb)
          }))
        }), Lb.goThere && (0, sp.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: pb(`${CO}islandsClaimGoThere`)
        })]
      })
    }

    function hO(bb) {
      let {
        card: wb,
        view: Mb,
        blocked: Hb,
        maxIslands: pb,
        answered: Vb,
        nowMs: gb,
        done: lb,
        openSocial: Lb,
        t: Ib
      } = bb;
      const Ob = WV(),
        [Ub, tb] = (0, eb.useState)(new Map),
        [Cb, Eb] = (0, eb.useState)(new Map),
        [Fb, Bb] = (0, eb.useState)(null),
        sb = (0, eb.useRef)(null);
      iL(sb);
      const mb = wb.baf2IslandId,
        hb = wb.baf2IslandCoop,
        zb = null !== hb && void 0 !== hb && hb.baf2CoopMembers.some((bb => bb.baf2MemberKey === Fb)) ? Fb : null,
        Xb = function(bb, wb) {
          const Mb = bb.baf2IslandCoop;
          return Mb && WL(Mb) || null !== wb ? void 0 : bb.baf2IslandInvitable
        }(wb, Hb),
        xb = function(bb, wb) {
          const Mb = bb.baf2IslandCoop;
          return Mb && WL(Mb) ? {
            key: `${OL}islandsCoopFull`,
            params: {
              max: String(Mb.baf2CoopMax)
            }
          } : void 0 !== bb.baf2IslandInvitable && null === wb || Mb && !Mb.baf2CoopManageHere ? null : "degraded" === wb || "stuck" === wb ? {
            key: `${OL}islandsInviteNotLoaded`
          } : null === wb || function(bb) {
            return "notHome" === bb || "wilds" === bb || "visiting" === bb
          }(wb) || hL(wb) ? {
            key: `${OL}islandsInviteGoThere`
          } : {
            key: `${OL}islandsInviteBusy`
          }
        }(wb, Hb),
        jb = () => {
          var bb;
          Bb(null), null === (bb = sb.current) || void 0 === bb || bb.focus()
        };
      return (0, sp.jsxs)("div", {
        ref: sb,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...vL(null === zb ? lb : jb),
        children: [hb && (0, sp.jsxs)(sp.Fragment, {
          children: [(0, sp.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Ib(`${CO}islandsPlayersTitle`, {
              count: String(hb.baf2CoopMembers.length),
              max: String(hb.baf2CoopMax)
            })
          }), (0, sp.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: hb.baf2CoopMembers.map(((bb, wb) => {
              const eb = bb.baf2MemberKey,
                Hb = JL(Ub.get(eb), Vb, gb);
              return (0, sp.jsxs)("li", {
                className: zH()("Baf2IslandPerson", {
                  Pending: Hb
                }),
                children: [(0, sp.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, sp.jsx)("span", {
                    className: zH()("Baf2IslandPersonName", {
                      Here: bb.baf2MemberHere
                    }),
                    children: bb.baf2MemberName
                  }), bb.baf2MemberHere && (0, sp.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Ib(`${CO}islandsPlayerHere`)
                  }), 0 === wb && (0, sp.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Ib(`${CO}islandsPlayerOwner`)
                  }), Mb.remove && wb > 0 && !Hb && zb !== eb && (0, sp.jsx)(FV.S, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var bb;
                      Bb(eb), null === (bb = sb.current) || void 0 === bb || bb.focus()
                    },
                    children: Ib(`${CO}islandsRemove`)
                  })]
                }), zb === eb && (0, sp.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, sp.jsx)("p", {
                    children: DL(Ib, `${CO}islandsRemoveConfirm`, {
                      player: bb.baf2MemberName
                    })
                  }), (0, sp.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, sp.jsx)(FV.Q, {
                      onClick: () => {
                        (bb => {
                          const wb = Ob.sendIslandEdit(`baf2coopremove ${mb} ${bb.baf2MemberKey}`);
                          tb((Mb => new Map(Mb).set(bb.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: wb
                          }))), jb()
                        })(bb)
                      },
                      children: Ib(`${CO}islandsRemoveYes`)
                    }), (0, sp.jsx)(FV.f, {
                      onClick: jb,
                      children: Ib(`${CO}islandsCancel`)
                    })]
                  })]
                })]
              }, eb)
            }))
          })]
        }), (void 0 !== Xb || null !== xb) && (0, sp.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Ib(`${CO}islandsInviteTitle`)
        }), !hb && (void 0 !== Xb || null !== xb) && (0, sp.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Ib(`${CO}islandsInviteShareNote`)
        }), 0 === (null === Xb || void 0 === Xb ? void 0 : Xb.length) && (0, sp.jsx)(zO, {
          openSocial: Lb,
          t: Ib
        }), void 0 !== Xb && Xb.length > 0 && (0, sp.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Xb.map((bb => {
            const wb = !0 === bb.baf2InvitableSent || JL(Cb.get(bb.baf2InvitableId), Vb, gb);
            return (0, sp.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, sp.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, sp.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: bb.baf2InvitableName
                }), bb.baf2InvitableFull && !wb && (0, sp.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Ib(`${CO}islandsInviteTheirFull`, {
                    max: String(pb)
                  })
                }), (wb || !bb.baf2InvitableFull) && (0, sp.jsx)(FV.u, {
                  className: "Baf2IslandPersonButton",
                  disabled: wb,
                  onClick: () => {
                    (bb => {
                      const wb = Ob.sendIslandEdit(`baf2coopinvite ${mb} ${bb}`);
                      Eb((Mb => new Map(Mb).set(bb, {
                        atMs: Date.now(),
                        answer: wb
                      })))
                    })(bb.baf2InvitableId)
                  },
                  children: Ib(wb ? `${CO}islandsInvited` : `${CO}islandsInvite`)
                })]
              })
            }, bb.baf2InvitableId)
          }))
        }), xb && (0, sp.jsx)(PL, {
          note: xb,
          t: Ib
        }), (0, sp.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, sp.jsx)(FV.f, {
            onClick: lb,
            children: Ib(`${CO}islandsDone`)
          })
        })]
      })
    }

    function zO(bb) {
      let {
        openSocial: wb,
        t: Mb
      } = bb;
      return (0, sp.jsxs)(sp.Fragment, {
        children: [(0, sp.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Mb(wb ? `${CO}islandsInviteNobody` : `${CO}islandsInviteNobodyGuest`)
        }), wb && (0, sp.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, sp.jsx)(FV.f, {
            onClick: wb,
            children: Mb("socialBar:social")
          })
        })]
      })
    }

    function XO(bb) {
      let {
        className: wb,
        text: Mb,
        ConfirmButton: Hb,
        confirmLabel: pb,
        canConfirm: Vb,
        send: gb,
        done: lb,
        t: Lb
      } = bb;
      const Ib = (0, eb.useRef)(null);
      iL(Ib);
      const Ob = () => {
        lb(null)
      };
      return (0, sp.jsxs)("div", {
        ref: Ib,
        tabIndex: -1,
        className: zH()("Baf2IslandForm", wb),
        ...vL(Ob),
        children: [(0, sp.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Mb
        }), (0, sp.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, sp.jsx)(Hb, {
            disabled: !Vb,
            onClick: () => {
              Vb && lb(gb())
            },
            children: pb
          }), (0, sp.jsx)(FV.f, {
            onClick: Ob,
            children: Lb(`${CO}islandsCancel`)
          })]
        })]
      })
    }

    function xO(bb) {
      return "hidden" !== bb
    }

    function jO(bb) {
      var wb, Mb;
      let {
        card: Hb,
        keepOwn: pb,
        blocked: Vb,
        maxIslands: gb,
        serverNowMs: lb,
        nowMs: Lb,
        actions: Ib,
        full: Ob,
        waits: Ub,
        answered: tb,
        mode: Cb,
        setMode: Eb,
        pending: Fb,
        onSent: Bb,
        switchTo: sb,
        leave: mb,
        coopOn: hb,
        openSocial: zb,
        t: Xb
      } = bb;
      const xb = WV(),
        jb = Hb.baf2IslandActive,
        Kb = jb ? null : function(bb, wb) {
          if (bb <= 0) return null;
          const Mb = wb - bb;
          if (Mb < Op) return [`${OL}islandsPlayedJustNow`];
          if (Mb < UL) return [`${OL}islandsPlayedMinutes`, {
            minutes: String(Math.floor(Mb / Op))
          }];
          if (Mb < tL) return [`${OL}islandsPlayedHours`, {
            hours: String(Math.floor(Mb / UL))
          }];
          const eb = Math.floor(Mb / tL);
          return 1 === eb ? [`${OL}islandsPlayedDay`] : [`${OL}islandsPlayedDays`, {
            days: String(eb)
          }]
        }(Hb.baf2IslandLastPlayedMs, lb),
        rb = void 0 === (Rb = Hb.baf2IslandItems) ? null : 0 === Rb ? [`${OL}islandsItemsNone`] : 1 === Rb ? [`${OL}islandsItemsOne`] : [`${OL}islandsItems`, {
          count: String(Rb)
        }];
      var Rb;
      const Db = function(bb) {
          return bb ? 1 === bb ? [`${OL}islandsWaitingOne`] : [`${OL}islandsWaiting`, {
            count: String(bb)
          }] : null
        }(Hb.baf2IslandWaiting),
        cb = Hb.baf2IslandUnreadable,
        Yb = Hb.baf2IslandCoop,
        Zb = fL(Hb, Ib, pb, Ob, hb, Vb),
        fb = (0, eb.useRef)(null);
      GL(null !== Cb, fb);
      const Ab = () => {
          var bb;
          Eb(null), null === (bb = fb.current) || void 0 === bb || bb.focus()
        },
        Wb = (bb, wb) => {
          Ab(), null !== bb && Bb(bb, wb)
        },
        Jb = (bb, wb) => Xb(`${CO}${bb}`, {
          time: Fp(Xb, wb)
        });
      return (0, sp.jsxs)("li", {
        ref: fb,
        tabIndex: -1,
        className: zH()("Baf2IslandCard", {
          Active: jb,
          Pending: Fb,
          Shared: void 0 !== Yb
        }),
        children: [(0, sp.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, sp.jsx)("strong", {
            className: "Baf2IslandName",
            children: Hb.baf2IslandName
          }), jb && (0, sp.jsx)("span", {
            className: "Baf2IslandBadge",
            children: Xb(`${CO}islandsOnThis`)
          }), Yb && (0, sp.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: Xb(`${CO}islandsShared`)
          })]
        }), "member" === (null === Yb || void 0 === Yb ? void 0 : Yb.baf2CoopRole) && (0, sp.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: DL(Xb, `${CO}islandsSharedBy`, {
            owner: Yb.baf2CoopOwner
          })
        }), void 0 !== cb && (0, sp.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: Xb("newer" === cb ? `${CO}islandsUnreadable` : `${CO}islandsDamaged`)
        }), "corrupt" === cb && Ob && (0, sp.jsx)("p", {
          className: "Baf2IslandStats",
          children: Xb(`${CO}islandsDamagedFull`)
        }), void 0 === cb && (0, sp.jsxs)(sp.Fragment, {
          children: [(0, sp.jsx)(dL, {
            tier: Hb.baf2IslandTier,
            t: Xb
          }), (0, sp.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, sp.jsx)("span", {
              children: 1 === Hb.baf2IslandQuestsDone ? Xb(`${CO}islandsQuestsDoneOne`) : Xb(`${CO}islandsQuestsDone`, {
                count: String(Hb.baf2IslandQuestsDone)
              })
            }), (0, sp.jsx)("span", {
              children: 1 === Hb.baf2IslandMachines ? Xb(`${CO}islandsMachinesOne`) : Xb(`${CO}islandsMachines`, {
                count: String(Hb.baf2IslandMachines)
              })
            }), rb && (0, sp.jsx)("span", {
              children: Xb(rb[0], rb[1])
            }), Db && (0, sp.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: Xb(Db[0], Db[1])
            }), Kb && (0, sp.jsx)("span", {
              children: Xb(Kb[0], Kb[1])
            })]
          })]
        }), Yb && void 0 === Yb.baf2CoopState && "people" !== Cb && (0, sp.jsx)(sO, {
          members: Yb.baf2CoopMembers,
          t: Xb
        }), null === Cb && (0, sp.jsx)(mO, {
          card: Hb,
          answered: tb,
          nowMs: Lb,
          t: Xb
        }), Zb.note && (0, sp.jsx)(PL, {
          note: Zb.note,
          className: zH()({
            Unreachable: void 0 !== (null === Yb || void 0 === Yb ? void 0 : Yb.baf2CoopState)
          }),
          t: Xb
        }), "rename" === Cb && (0, sp.jsx)(FO, {
          card: Hb,
          canRename: "enabled" === Zb.rename,
          done: Wb,
          t: Xb
        }), "delete" === Cb && (0, sp.jsx)(BO, {
          card: Hb,
          canDelete: "enabled" === Zb.delete,
          done: bb => {
            Wb(bb, Yb ? "delete" : void 0)
          },
          t: Xb
        }), "people" === Cb && (0, sp.jsx)(hO, {
          card: Hb,
          view: Zb,
          blocked: Vb,
          maxIslands: gb,
          answered: tb,
          nowMs: Lb,
          done: Ab,
          openSocial: zb,
          t: Xb
        }), "leave" === Cb && (0, sp.jsx)(XO, {
          className: "Leave",
          text: DL(Xb, `${CO}islandsLeaveConfirm`, {
            island: Hb.baf2IslandName,
            owner: null !== (wb = null === (Mb = Hb.baf2IslandCoop) || void 0 === Mb ? void 0 : Mb.baf2CoopOwner) && void 0 !== wb ? wb : ""
          }),
          ConfirmButton: FV.Q,
          confirmLabel: Xb(`${CO}islandsLeaveYes`),
          canConfirm: "enabled" === Zb.leave,
          send: () => EO(xb, Hb),
          done: bb => {
            Wb(bb, "leave"), null !== bb && jb && mb()
          },
          t: Xb
        }), "unshare" === Cb && (0, sp.jsx)(XO, {
          className: "Unshare",
          text: DL(Xb, `${CO}islandsStopSharingConfirm`, {
            island: Hb.baf2IslandName
          }),
          ConfirmButton: FV.u,
          confirmLabel: Xb(`${CO}islandsStopSharing`),
          canConfirm: "enabled" === Zb.unshare,
          send: () => xb.sendIslandEdit(`baf2coopunshare ${Hb.baf2IslandId}`),
          done: bb => {
            Wb(bb), null !== bb && mb()
          },
          t: Xb
        }), null === Cb && !Fb && (0, sp.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Hb.baf2IslandName,
          children: [xO(Zb.switch) && (0, sp.jsx)(FV.u, {
            disabled: "enabled" !== Zb.switch,
            onClick: sb,
            children: "tryAgain" === Zb.switchLabel ? Xb(`${CO}islandsTryAgain`) : Ub.switch > 0 ? Jb("islandsSwitchIn", Ub.switch) : Xb(`${CO}islandsSwitch`)
          }), xO(Zb.rename) && (0, sp.jsx)(FV.f, {
            disabled: "enabled" !== Zb.rename,
            onClick: () => {
              Eb("rename")
            },
            children: Xb(`${CO}islandsRename`)
          }), xO(Zb.people) && (0, sp.jsx)(FV.f, {
            disabled: "enabled" !== Zb.people,
            onClick: () => {
              Eb("people")
            },
            children: Xb("players" === Zb.peopleLabel ? `${CO}islandsPlayersButton` : `${CO}islandsInviteButton`)
          }), xO(Zb.unshare) && (0, sp.jsx)(FV.f, {
            disabled: "enabled" !== Zb.unshare,
            onClick: () => {
              Eb("unshare")
            },
            children: Xb(`${CO}islandsStopSharing`)
          }), xO(Zb.dismiss) && (0, sp.jsx)(FV.f, {
            disabled: "enabled" !== Zb.dismiss,
            onClick: () => {
              Bb(EO(xb, Hb), "dismiss"), jb && mb()
            },
            children: Xb(`${CO}islandsDismiss`)
          }), xO(Zb.leave) && (0, sp.jsx)(FV.S, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Zb.leave,
            onClick: () => {
              Eb("leave")
            },
            children: jb && Ub.switch > 0 ? Jb("islandsLeaveIn", Ub.switch) : Xb(`${CO}islandsLeave`)
          }), xO(Zb.delete) && (0, sp.jsx)(FV.S, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Zb.delete,
            onClick: () => {
              Eb("delete")
            },
            children: Ub.change > 0 && Zb.deleteWaits ? Jb("islandsDeleteIn", Ub.change) : Xb(`${CO}islandsDelete`)
          })]
        })]
      })
    }
    const KO = "buildAFactory2Game:";

    function rO(bb) {
      let {
        invite: wb,
        actions: Mb,
        full: Hb,
        maxIslands: pb,
        waitSeconds: Vb,
        focus: gb,
        focused: lb,
        join: Lb,
        decline: Ib,
        t: Ob
      } = bb;
      const [Ub, tb] = (0, eb.useState)(!1), Cb = (0, eb.useRef)(null);
      GL(Ub, Cb), (0, eb.useEffect)((() => {
        var bb;
        gb && (tb(!0), null === (bb = Cb.current) || void 0 === bb || bb.focus(), lb())
      }), [gb, lb]);
      const Eb = function(bb, wb, Mb, eb, Hb) {
          return Mb ? {
            join: !1,
            note: {
              key: `${OL}islandsJoinTooMany`,
              params: {
                max: String(eb)
              }
            }
          } : bb.baf2InvitePlayers >= Hb ? {
            join: !1,
            note: {
              key: `${OL}islandsJoinFull`
            }
          } : {
            join: wb.switch,
            note: null
          }
        }(wb, Mb, Hb, pb, 10),
        Fb = wb.baf2InviteIsland,
        Bb = wb.baf2InvitePlayers,
        sb = () => {
          var bb;
          tb(!1), null === (bb = Cb.current) || void 0 === bb || bb.focus()
        },
        mb = Vb > 0 && null === Eb.note ? Ob(`${KO}islandsJoinIn`, {
          time: Fp(Ob, Vb)
        }) : Ob(`${KO}islandsJoin`);
      return (0, sp.jsxs)("li", {
        ref: Cb,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Ub ? vL(sb) : {},
        children: [(0, sp.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, sp.jsx)("strong", {
            className: "Baf2IslandName",
            children: Fb
          })
        }), (0, sp.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: DL(Ob, `${KO}islandsInvitedBy`, {
            owner: wb.baf2InviteOwner
          })
        }), (0, sp.jsx)(dL, {
          tier: wb.baf2InviteTier,
          t: Ob
        }), (0, sp.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, sp.jsx)("span", {
            children: 1 === Bb ? Ob(`${KO}islandsPlayersCountOne`) : Ob(`${KO}islandsPlayersCount`, {
              count: String(Bb)
            })
          })
        }), Eb.note && (0, sp.jsx)(PL, {
          note: Eb.note,
          t: Ob
        }), Ub && (0, sp.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: DL(Ob, `${KO}islandsJoinConfirm`, {
            island: Fb
          })
        }), !Ub && (0, sp.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Fb,
          children: [(0, sp.jsx)(FV.u, {
            disabled: !Eb.join,
            onClick: () => {
              var bb;
              tb(!0), null === (bb = Cb.current) || void 0 === bb || bb.focus()
            },
            children: mb
          }), (0, sp.jsx)(FV.f, {
            onClick: Ib,
            children: Ob(`${KO}islandsDecline`)
          })]
        }), Ub && (0, sp.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, sp.jsx)(FV.u, {
            disabled: !Eb.join,
            onClick: Lb,
            children: Ob(`${KO}islandsJoinYes`)
          }), (0, sp.jsx)(FV.f, {
            onClick: sb,
            children: Ob(`${KO}islandsCancel`)
          })]
        })]
      })
    }

    function RO(bb) {
      let {
        invites: wb,
        actions: Mb,
        full: eb,
        maxIslands: Hb,
        waitSeconds: pb,
        focus: Vb,
        focused: gb,
        leave: lb,
        declined: Lb,
        t: Ib
      } = bb;
      const Ob = WV();
      return (0, sp.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, sp.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Ib(`${KO}islandsInvitesTitle`)
        }), (0, sp.jsx)("ul", {
          className: "Baf2IslandCards",
          children: wb.map((bb => {
            const wb = bb.baf2InviteId;
            return (0, sp.jsx)(rO, {
              invite: bb,
              actions: Mb,
              full: eb,
              maxIslands: Hb,
              waitSeconds: pb,
              focus: Vb === wb,
              focused: gb,
              join: () => {
                Ob.send(`baf2coopaccept ${wb}`), lb()
              },
              decline: () => {
                Ob.send(`baf2coopdecline ${wb}`), Lb(wb)
              },
              t: Ib
            }, wb)
          }))
        })]
      })
    }
    const DO = "buildAFactory2Game:";

    function cO(bb) {
      let {
        cards: wb,
        activeName: Mb,
        canStart: Hb,
        waitSeconds: pb,
        leave: Vb,
        t: gb
      } = bb;
      const lb = WV(),
        [Lb, Ib] = (0, eb.useState)(!1),
        [Ob, Ub] = (0, eb.useState)(""),
        tb = (0, eb.useRef)(null);
      GL(Lb, tb), (0, eb.useEffect)((() => {
        var bb;
        Lb && (null === (bb = tb.current) || void 0 === bb || bb.focus())
      }), [Lb]);
      const Cb = BL(wb),
        Eb = EL(Ob),
        Fb = FL(Eb),
        Bb = () => {
          Hb && !Fb && (lb.send("" === Eb || Eb === Cb ? nb : `${nb} ${Eb}`), Vb())
        },
        sb = () => {
          var bb;
          Ib(!1), null === (bb = tb.current) || void 0 === bb || bb.focus()
        };
      return (0, sp.jsxs)("li", {
        ref: tb,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Lb ? vL(sb) : {},
        children: [(0, sp.jsx)("strong", {
          className: "Baf2IslandName",
          children: gb(`${DO}islandsNewTitle`)
        }), !Lb && (0, sp.jsx)("p", {
          className: "Baf2IslandStats",
          children: gb(`${DO}islandsNewNote`)
        }), Lb && (0, sp.jsxs)(sp.Fragment, {
          children: [(0, sp.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: DL(gb, `${DO}islandsNewConfirm`, {
              name: Mb
            })
          }), (0, sp.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [gb(`${DO}islandsNewNameLabel`), (0, sp.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Ob,
              placeholder: Cb,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: QL,
              onChange: bb => {
                Ub(bb.target.value)
              },
              ...NL(Bb, sb)
            })]
          }), Fb && (0, sp.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: gb(`${DO}islandsNameReserved`)
          })]
        }), (0, sp.jsxs)("div", {
          className: zH()("Baf2IslandButtons", {
            Stacked: Lb
          }),
          children: [(0, sp.jsx)(FV.u, {
            disabled: !Hb || Lb && Fb,
            onClick: () => {
              if (!Lb) return Ub(Cb), void Ib(!0);
              Bb()
            },
            children: pb > 0 ? gb(`${DO}islandsNewIn`, {
              time: Fp(gb, pb)
            }) : gb(Lb ? `${DO}islandsNewConfirmButton` : `${DO}islandsNew`)
          }), Lb && (0, sp.jsx)(FV.f, {
            onClick: sb,
            children: gb(`${DO}islandsCancel`)
          })]
        })]
      })
    }

    function YO(bb) {
      var wb, Mb;
      let {
        message: Hb,
        arrivedAtMs: pb,
        close: Vb,
        leave: gb,
        openSocial: lb
      } = bb;
      const Lb = WV(),
        {
          t: Ib
        } = (0, KH.C)(),
        Ob = uL(1e3),
        [Ub, tb] = (0, eb.useState)(null),
        [Cb, Eb] = (0, eb.useState)(new Map),
        [Fb, Bb] = (0, eb.useState)(new Set),
        sb = Hb.baf2IslandCards,
        mb = function(bb, wb, Mb, eb) {
          return (null !== bb && void 0 !== bb ? bb : []).filter((bb => wb + bb.baf2InviteLeftMs > Mb && !eb.has(bb.baf2InviteId)))
        }(Hb.baf2IslandsInvites, pb, Ob, Fb),
        hb = mb.map((bb => bb.baf2InviteId)).join(" "),
        zb = (0, eb.useRef)(null),
        Xb = qL(zb);
      aL(), (0, eb.useEffect)((() => {
        var bb, wb;
        null !== (bb = zb.current) && void 0 !== bb && bb.contains(document.activeElement) || (null === (wb = zb.current) || void 0 === wb || wb.focus())
      }), [Hb, hb]), (0, eb.useEffect)((() => {
        Eb((bb => function(bb, wb, Mb, eb) {
          const Hb = new Map;
          for (const pb of wb) {
            const wb = bb.get(pb.baf2IslandId);
            wb && (void 0 !== wb.untilGone || eb < wb.answer) && jL(wb, pb, Mb) && Hb.set(pb.baf2IslandId, wb)
          }
          return Hb.size === bb.size ? bb : Hb
        }(bb, Hb.baf2IslandCards, Date.now(), Hb.baf2IslandsAnswered)))
      }), [Hb]);
      const xb = CL(pb, Hb.baf2IslandsWaitMs, Ob),
        jb = Hb.baf2IslandsBlocked,
        Kb = zL(jb, xb),
        rb = function(bb, wb) {
          const Mb = zL(bb, 0);
          return {
            switch: Mb.switch ? wb : 0,
            change: Mb.change ? wb : 0
          }
        }(jb, xb),
        Rb = sb.length >= Hb.baf2IslandsMax,
        Db = sb.length > 0,
        cb = function(bb, wb, Mb) {
          return bb + Math.max(0, Mb - wb)
        }(Hb.baf2IslandsNowMs, pb, Ob),
        Yb = null !== (wb = null === (Mb = sb.find((bb => bb.baf2IslandActive))) || void 0 === Mb ? void 0 : Mb.baf2IslandName) && void 0 !== wb ? wb : "",
        Zb = function(bb) {
          const wb = bb.filter(ZL).length;
          return wb <= 1 && wb < bb.length
        }(sb),
        fb = !0 === Hb.baf2IslandsCoop,
        Ab = function(bb, wb) {
          const Mb = bb.find((bb => bb.baf2IslandActive)),
            eb = null === Mb || void 0 === Mb ? void 0 : Mb.baf2IslandCoop;
          return Mb && "member" === (null === eb || void 0 === eb ? void 0 : eb.baf2CoopRole) ? {
            key: `${OL}islandsKeepOwnMember`,
            names: {
              owner: eb.baf2CoopOwner,
              island: Mb.baf2IslandName
            }
          } : {
            key: wb ? `${OL}islandsKeepOwn` : `${OL}islandsKeepOwnSolo`
          }
        }(sb, fb),
        [Wb, Jb] = (0, eb.useState)(null);
      (0, eb.useEffect)((() => {
        void 0 !== Hb.baf2IslandsFocusInvite && Jb(Hb.baf2IslandsFocusInvite)
      }), [Hb]);
      const Sb = (0, eb.useCallback)((() => {
          Jb(null)
        }), []),
        Nb = Ub ? sb.find((bb => bb.baf2IslandId === Ub.id)) : void 0,
        vb = Ub && Nb && "hidden" !== fL(Nb, Kb, Zb, Rb, fb, jb)[Ub.mode] ? Ub : null;
      return (0, sp.jsx)(EV.e, {
        close: Vb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, sp.jsxs)("section", {
          ref: zb,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: Xb ? {
            marginTop: `${Xb.marginTop}px`,
            maxHeight: `${Xb.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsxs)("div", {
              children: [(0, sp.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Ib(`${DO}islandsTitle`)
              }), Db && (0, sp.jsx)("p", {
                children: Ib(`${DO}islandsSubtitle`, {
                  count: String(sb.length),
                  max: String(Hb.baf2IslandsMax)
                })
              })]
            }), (0, sp.jsx)(FV.l, {
              ariaLabel: Ib(`${DO}islandsClose`),
              onClick: Vb
            })]
          }), (0, sp.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== jb && (0, sp.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: DL(Ib, sL(jb, mL(sb)), {
                island: Yb
              })
            }), Db && mb.length > 0 && (0, sp.jsx)(RO, {
              invites: mb,
              actions: Kb,
              full: Rb,
              maxIslands: Hb.baf2IslandsMax,
              waitSeconds: rb.switch,
              focus: Wb,
              focused: Sb,
              leave: gb,
              declined: bb => {
                Bb((wb => new Set(wb).add(bb)))
              },
              t: Ib
            }), Db && (0, sp.jsxs)(sp.Fragment, {
              children: [Rb && (0, sp.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Ib(`${DO}islandsFull`, {
                  max: String(Hb.baf2IslandsMax)
                })
              }), (0, sp.jsx)("p", {
                className: "Baf2IslandsNote",
                children: DL(Ib, Ab.key, Ab.names)
              }), (0, sp.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [sb.map((bb => {
                  const wb = bb.baf2IslandId;
                  return (0, sp.jsx)(jO, {
                    card: bb,
                    keepOwn: Zb,
                    coopOn: fb,
                    openSocial: lb,
                    blocked: jb,
                    maxIslands: Hb.baf2IslandsMax,
                    serverNowMs: cb,
                    nowMs: Ob,
                    actions: Kb,
                    full: Rb,
                    waits: rb,
                    answered: Hb.baf2IslandsAnswered,
                    mode: (null === vb || void 0 === vb ? void 0 : vb.id) === wb ? vb.mode : null,
                    setMode: bb => {
                      tb(null === bb ? null : {
                        id: wb,
                        mode: bb
                      })
                    },
                    pending: jL(Cb.get(wb), bb, Ob),
                    onSent: (Mb, eb) => {
                      Eb((Hb => {
                        const pb = {
                          atMs: Date.now(),
                          from: bb.baf2IslandName,
                          answer: Mb
                        };
                        return new Map(Hb).set(wb, eb ? {
                          ...pb,
                          untilGone: eb
                        } : pb)
                      }))
                    },
                    leave: gb,
                    switchTo: () => {
                      Lb.send(`baf2islandswitch ${wb}`), gb()
                    },
                    t: Ib
                  }, wb)
                })), !Rb && (0, sp.jsx)(cO, {
                  cards: sb,
                  activeName: Yb,
                  canStart: Kb.change,
                  waitSeconds: rb.change,
                  leave: gb,
                  t: Ib
                })]
              })]
            })]
          })]
        })
      })
    }
    var ZO = Mb(4374);
    const fO = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        ie: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      AO = Object.keys(fO),
      WO = new Set([...Object.keys(yw), ...[...Ww.Press.recipes, ...Ww["Wire Mill"].recipes].map((bb => bb.output))]),
      JO = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      SO = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      NO = / Bar$|Alloy$/,
      vO = /Porkchop|Beef|Mutton|Venison|Steak/,
      QO = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const GO = (0, eb.memo)((function(bb) {
      let {
        item: wb,
        name: Mb,
        amount: eb,
        selected: Hb,
        small: pb,
        onPick: Vb
      } = bb;
      return (0, sp.jsxs)("button", {
        type: "button",
        className: zH()("Baf2TermTile", {
          On: Hb,
          Small: pb
        }),
        "aria-label": `${Mb}: ${eb}`,
        "aria-pressed": Hb,
        onClick: () => {
          Vb(wb)
        },
        children: [(0, sp.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, sp.jsx)(RH.c, {
            itemName: wb,
            amount: 0
          })
        }), (0, sp.jsx)("span", {
          className: "Baf2TermCount",
          children: Cp(eb, 1e4)
        }), !pb && (0, sp.jsx)("span", {
          className: "Baf2TermName",
          children: Mb
        })]
      })
    }));

    function qO(bb) {
      let {
        store: wb,
        close: Mb,
        send: Hb
      } = bb;
      const {
        t: pb
      } = (0, KH.C)(), {
        isTouchScreen: Vb
      } = (0, sH.o)(["isTouchScreen"]);
      ! function(bb) {
        const [wb, Mb] = (0, eb.useState)(bb.version);
        (0, eb.useEffect)((() => (Mb(bb.version), bb.subscribe((() => {
          Mb(bb.version)
        })))), [bb])
      }(wb);
      const [gb, lb] = (0, eb.useState)("all"), [Lb, Ib] = (0, eb.useState)(!1), [Ob, Ub] = (0, eb.useState)(""), [tb, Cb] = (0, eb.useState)(""), [Eb, Fb] = (0, eb.useState)(null), [Bb, sb] = (0, eb.useState)(!1), [mb, hb, zb] = function() {
        const bb = (0, eb.useRef)(null),
          [wb, Mb] = (0, eb.useState)(!1),
          Hb = () => {
            const wb = bb.current;
            Mb(null !== wb && wb.scrollLeft + wb.clientWidth < wb.scrollWidth - 1)
          };
        return (0, eb.useEffect)(Hb), (0, eb.useEffect)((() => {
          const wb = bb.current;
          if (!wb) return;
          const Mb = new ResizeObserver(Hb);
          return Mb.observe(wb), () => {
            Mb.disconnect()
          }
        }), []), [bb, wb, Hb]
      }(), Xb = (0, eb.useMemo)((() => new Map), [pb]), xb = bb => {
        let wb = Xb.get(bb);
        return void 0 === wb && (wb = function(bb, wb) {
          const Mb = /^(.+) \((.+)\)$/.exec(bb);
          return Mb ? wb(Mb[2], Mb[1]) : bb
        }((0, kH.f)(pb, bb), ((bb, wb) => pb("buildAFactory2Game:terminalTileKind", {
          kind: bb,
          base: wb
        }))), Xb.set(bb, wb)), wb
      }, jb = wb.isReadOnly(), Kb = Bb && !jb, rb = wb.recent(), Rb = wb.items(), Db = tb.trim().toLowerCase(), cb = Kb ? wb.heldItems(Eb) : ("recent" === gb ? rb : Rb).filter((bb => {
        const wb = xb(bb);
        return ("all" === gb || "recent" === gb || function(bb) {
          return gp(bb) ? "farm" : JO.test(bb) ? "nuclear" : NO.test(bb) ? "bars" : vO.test(bb) ? "farm" : SO.test(bb) ? "ie" : WO.has(bb) ? "parts" : QO.test(bb) ? "farm" : "other"
        }(bb) === gb) && ("" === Db || wb.toLowerCase().includes(Db)) && ("" === Ob || wb.toUpperCase().startsWith(Ob))
      })), Yb = new Set(Rb.map((bb => xb(bb).charAt(0).toUpperCase()))), Zb = bb => Kb ? wb.heldAmount(bb) : wb.amount(bb), fb = !Kb && "recent" !== gb && rb.length > 0, Ab = function(bb, wb) {
        return null !== bb && wb.includes(bb) ? bb : null
      }(Eb, fb ? [...cb, ...rb] : cb), Wb = null === Ab ? 0 : wb.amount(Ab), Jb = null === Ab ? 0 : Zb(Ab), Sb = (0, eb.useCallback)((bb => {
        Fb((wb => wb === bb ? null : bb))
      }), []), Nb = bb => Jb > 0 || Kb && null === Ab && "fill" === bb && cb.length > 0, vb = Kb ? [
        ["one", pb("buildAFactory2Game:terminalStoreOne")],
        ["stack", pb("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", pb(null === Ab ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", pb("buildAFactory2Game:terminalTakeOne")],
        ["stack", pb("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", pb("buildAFactory2Game:terminalFill")]
      ], Qb = Kb ? pb("buildAFactory2Game:terminalStoreEmpty") : "" !== Ob ? pb("buildAFactory2Game:terminalEmptyLetter", {
        letter: Ob
      }) : "" !== Db ? pb("buildAFactory2Game:terminalEmptySearch", {
        query: tb
      }) : pb("buildAFactory2Game:terminalEmpty");
      return (0, sp.jsx)(EV.e, {
        close: Mb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, sp.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsxs)("div", {
              children: [(0, sp.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: pb(wb.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, sp.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, sp.jsx)("span", {
                  className: zH()({
                    Off: Kb
                  }),
                  children: pb("buildAFactory2Game:terminalSubtitle", {
                    count: String(wb.siloCount())
                  })
                }), !jb && (0, sp.jsx)("span", {
                  className: zH()({
                    Off: !Kb
                  }),
                  children: pb("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !jb && (0, sp.jsx)(ZO.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: pb("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: pb("buildAFactory2Game:terminalModeStore")
              }],
              value: Kb ? "store" : "take",
              onChange: bb => {
                sb("store" === bb), Fb(null)
              },
              ariaLabel: pb("buildAFactory2Game:terminalModes")
            }), (0, sp.jsx)(FV.l, {
              onClick: Mb
            })]
          }), (0, sp.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, sp.jsxs)("div", {
              className: zH()("Baf2TermTools", {
                Hidden: Kb
              }),
              children: [(0, sp.jsx)("div", {
                ref: mb,
                className: zH()("Baf2TermChips", {
                  MoreRight: hb
                }),
                onScroll: zb,
                children: Lb ? (0, sp.jsxs)(sp.Fragment, {
                  children: [(0, sp.jsx)("button", {
                    type: "button",
                    "aria-label": pb("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Ib(!1), Ub("")
                    },
                    children: "\u2190"
                  }), [...Yb].sort().map((bb => (0, sp.jsx)("button", {
                    type: "button",
                    className: zH()({
                      On: Ob === bb
                    }),
                    onClick: () => {
                      Ub(Ob === bb ? "" : bb)
                    },
                    children: bb
                  }, bb)))]
                }) : (0, sp.jsxs)(sp.Fragment, {
                  children: [(0, sp.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Ib(!0)
                    },
                    children: pb("buildAFactory2Game:terminalLetters")
                  }), AO.map((bb => (0, sp.jsx)("button", {
                    type: "button",
                    className: zH()({
                      On: gb === bb
                    }),
                    onClick: () => {
                      lb(bb)
                    },
                    children: pb(fO[bb])
                  }, bb)))]
                })
              }), !Vb && (0, sp.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: tb,
                placeholder: pb("buildAFactory2Game:terminalSearch"),
                "aria-label": pb("buildAFactory2Game:terminalSearch"),
                onChange: bb => {
                  Cb(bb.target.value)
                },
                onKeyDown: bb => {
                  bb.stopPropagation()
                }
              }), (0, sp.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": pb("buildAFactory2Game:terminalResort"),
                title: pb("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  wb.resort()
                },
                children: "\u21c5"
              })]
            }), fb && (0, sp.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, sp.jsx)("span", {
                children: pb(fO.recent)
              }), rb.map((bb => (0, sp.jsx)(GO, {
                item: bb,
                name: xb(bb),
                amount: wb.amount(bb),
                selected: Ab === bb,
                small: !0,
                onPick: Sb
              }, bb)))]
            }), (0, sp.jsx)("div", {
              className: "Baf2TermTiles",
              children: cb.length > 0 ? cb.map((bb => (0, sp.jsx)(GO, {
                item: bb,
                name: xb(bb),
                amount: Zb(bb),
                selected: Ab === bb,
                onPick: Sb
              }, bb))) : (0, sp.jsx)("p", {
                className: "Baf2TermEmpty",
                children: Qb
              })
            }), (0, sp.jsxs)("div", {
              className: zH()("Baf2TermActions", {
                Hidden: Kb && 0 === cb.length
              }),
              children: [(0, sp.jsx)("span", {
                className: "Baf2TermPicked",
                children: jb ? (0, sp.jsxs)(sp.Fragment, {
                  children: [null !== Ab && Wb > 0 ? xb(Ab) : pb("buildAFactory2Game:terminalVisiting"), (0, sp.jsx)("small", {
                    children: pb("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Ab ? (0, sp.jsxs)(sp.Fragment, {
                  children: [xb(Ab), (0, sp.jsx)("small", {
                    children: pb("buildAFactory2Game:terminalStored", {
                      amount: Wb.toLocaleString()
                    })
                  })]
                }) : pb(Kb ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !jb && vb.map((bb => {
                let [Mb, eb] = bb;
                const pb = "fill" === Mb ? FV.p : FV.f;
                return (0, sp.jsx)(pb, {
                  className: "Baf2TermTake",
                  disabled: !Nb(Mb),
                  onClick: () => {
                    (bb => {
                      Nb(bb) && Hb(null === Ab ? wb.putAll() : Kb ? wb.put(bb, Ab) : wb.take(bb, Ab))
                    })(Mb)
                  },
                  children: eb
                }, Mb)
              }))]
            })]
          })]
        })
      })
    }

    function aO(bb) {
      let {
        kind: wb,
        icon: Mb,
        label: eb,
        number: Hb,
        preview: pb,
        note: Vb,
        tone: gb = null,
        share: lb,
        onExplain: Lb
      } = bb;
      return (0, sp.jsxs)("button", {
        type: "button",
        className: zH()("NxLane", wb, {
          Warn: "warn" === gb,
          Danger: "danger" === gb
        }),
        onClick: Lb,
        children: [(0, sp.jsxs)("span", {
          className: "NxLaneHead",
          children: [Mb, (0, sp.jsx)("span", {
            className: "NxLaneLabel",
            children: eb
          })]
        }), (0, sp.jsxs)("span", {
          className: "NxLaneNum",
          children: [Hb, pb && (0, sp.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", pb]
          })]
        }), (0, sp.jsx)("span", {
          className: "NxLaneNote",
          children: Vb
        }), void 0 !== lb && (0, sp.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, lb)) + "%"
          }
        })]
      })
    }

    function iO(bb) {
      let {
        kind: wb,
        step: Mb,
        short: eb,
        planned: Hb
      } = bb;
      return (0, sp.jsx)("i", {
        className: zH()("NxPipe", wb, `Step${Mb}`, {
          Short: eb,
          Planned: Hb
        }),
        "aria-hidden": "true"
      })
    }

    function uO(bb) {
      let {
        max: wb,
        bands: Mb,
        ticks: eb,
        now: Hb,
        settle: pb,
        settleTone: Vb,
        onExplain: gb
      } = bb;
      const lb = bb => Math.max(0, Math.min(wb, bb)) / wb * 100 + "%";
      let Lb = 0;
      return (0, sp.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: gb,
        children: [(0, sp.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [Mb.map((bb => {
            const wb = {
              bottom: lb(Lb),
              height: `calc(${lb(bb.upTo)} - ${lb(Lb)})`
            };
            return Lb = bb.upTo, (0, sp.jsx)("i", {
              className: zH()("NxGaugeBand", bb.kind),
              style: wb
            }, bb.kind)
          })), null !== Hb && (0, sp.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: lb(Hb)
            }
          }), void 0 !== pb && null !== pb && (0, sp.jsx)("i", {
            className: zH()("NxGaugeSettle", {
              Bad: "bad" === Vb
            }),
            style: {
              bottom: lb(pb)
            }
          })]
        }), (0, sp.jsx)("span", {
          className: "NxGaugeTicks",
          children: eb.map((bb => (0, sp.jsx)("small", {
            style: {
              bottom: lb(bb)
            },
            children: bb
          }, bb)))
        })]
      })
    }

    function dO(bb) {
      const [wb, Mb] = (0, eb.useState)(null), [Hb, pb] = (0, eb.useState)((() => {
        try {
          return null === window.localStorage.getItem(bb)
        } catch {
          return !1
        }
      })), Vb = (0, eb.useRef)(null);
      (0, eb.useEffect)((() => () => {
        null !== Vb.current && clearTimeout(Vb.current)
      }), []);
      const gb = (0, eb.useCallback)((wb => {
          Mb(wb), pb(!1);
          try {
            window.localStorage.setItem(bb, "1")
          } catch {}
          null !== Vb.current && clearTimeout(Vb.current), Vb.current = setTimeout((() => {
            Vb.current = null, Mb(null)
          }), 5e3)
        }), [bb]),
        lb = (0, eb.useCallback)(((wb, Mb) => {
          const eb = `${bb}:${wb}`;
          try {
            if (null !== window.localStorage.getItem(eb)) return;
            window.localStorage.setItem(eb, "1")
          } catch {
            return
          }
          gb(Mb)
        }), [gb, bb]);
      return {
        explained: wb,
        hinting: Hb,
        explain: gb,
        explainOnce: lb
      }
    }

    function PO(bb) {
      let {
        text: wb,
        tone: Mb,
        explained: eb
      } = bb;
      return (0, sp.jsxs)("p", {
        className: zH()("NxStatus", null === eb ? Mb : "Explain"),
        "aria-live": "polite",
        children: [null !== eb && (0, sp.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== eb && void 0 !== eb ? eb : wb]
      })
    }
    const nO = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function yO(bb, wb) {
      const Mb = Number(bb[wb]);
      return 1 === Mb || 2 === Mb || 3 === Mb ? Mb : 0
    }

    function oO(bb) {
      return !!Fl("reactor", bb.baf2RxNeed) || void 0 !== bb.baf2RxLayout && bb.baf2RxNeed.some((bb => {
        let [wb, Mb] = bb;
        return Mb > 0 && nO.includes(wb)
      }))
    }
    const TO = "buildAFactory2Game:";

    function kO(bb) {
      let {
        status: wb,
        store: Mb,
        busy: eb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)();
      return function(bb) {
        return 0 !== (bb.baf2RxFlags & Ew) && (!bb.baf2RxFormed || void 0 !== bb.baf2RxLayout)
      }(wb) ? (0, sp.jsx)(FV.p, {
        disabled: !oO(wb) || eb,
        onClick: () => {
          Mb.tap("fill", (() => {
            Mb.send("fill")
          }))
        },
        children: Hb(void 0 !== wb.baf2RxLayout ? `${TO}rxFillLayout` : `${TO}rxFill`)
      }) : null
    }

    function bU(bb) {
      let {
        status: wb,
        store: Mb,
        readOnly: Hb,
        bare: pb = !1
      } = bb;
      const {
        t: Vb
      } = (0, KH.C)(), gb = wb.baf2RxLayout, [lb, Lb, Ib] = wb.baf2RxDims, Ob = (0, eb.useMemo)((() => {
        if (void 0 === gb) return 0;
        const bb = Uint8Array.from(gb, ((bb, wb) => yO(gb, wb)));
        return Pg([lb - 2, Lb - 2, Ib - 2], bb).max
      }), [gb, lb, Lb, Ib]);
      return void 0 === gb ? null : (0, sp.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!pb && (0, sp.jsx)("span", {
          className: "Baf2RxHint",
          children: Vb(`${TO}rxLayoutLine`, {
            amount: xl(Ob)
          })
        }), !Hb && (0, sp.jsx)(FV.f, {
          onClick: () => {
            Mb.send("layout", 0)
          },
          children: Vb(`${TO}rxLayoutHide`)
        })]
      })
    }
    const wU = "buildAFactory2Game:",
      MU = {
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

    function eU(bb) {
      let {
        id: wb,
        title: Mb,
        body: eb,
        bodyParams: Hb,
        yes: pb,
        cancel: Vb,
        confirm: gb
      } = bb;
      const {
        t: lb
      } = (0, KH.C)();
      return (0, sp.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": wb,
        children: [(0, sp.jsx)("h3", {
          id: wb,
          children: lb(Mb)
        }), (0, sp.jsx)("p", {
          children: lb(eb, Hb)
        }), (0, sp.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, sp.jsx)(FV.j, {
            onClick: Vb,
            children: lb(`${wU}rxCancel`)
          }), (0, sp.jsx)(FV.Q, {
            onClick: gb,
            children: lb(pb)
          })]
        })]
      })
    }

    function HU(bb) {
      const [wb, Mb] = (0, eb.useState)((() => bb.get()));
      return (0, eb.useEffect)((() => (Mb(bb.get()), bb.subscribe((() => {
        Mb(bb.get())
      })))), [bb]), wb
    }

    function pU(bb) {
      let {
        kind: wb,
        cap: Mb,
        busy: Hb = !1,
        whyNot: pb = null,
        apart: Vb
      } = bb;
      const {
        t: gb
      } = (0, KH.C)(), [lb, Lb] = (0, eb.useState)(!1), Ib = null !== pb, Ob = (0, eb.useRef)(null);
      if ((0, eb.useEffect)((() => {
          Ib && Lb(!1)
        }), [Ib]), (0, eb.useLayoutEffect)((() => {
          var bb;
          const wb = null === (bb = Ob.current) || void 0 === bb ? void 0 : bb.firstElementChild;
          Ib ? null === wb || void 0 === wb || wb.setAttribute("aria-disabled", "true") : Hb || null === wb || void 0 === wb || wb.removeAttribute("aria-disabled")
        })), !lb || Ib) return (0, sp.jsx)("span", {
        ref: Ob,
        className: "Baf2RxApartWrap",
        children: (0, sp.jsx)(FV.j, {
          disabled: Hb,
          className: zH()({
            Baf2RxNotYet: Ib
          }),
          onClick: () => {
            pb ? pb() : Lb(!0)
          },
          children: gb(`${wU}rxApart`)
        })
      });
      const Ub = "battery" === wb,
        tb = void 0 === Mb ? `${wU}batApartConfirmBodyPlan` : `${wU}batApartConfirmBody`;
      return (0, sp.jsx)(eU, {
        id: `baf2ApartTitle_${wb}`,
        title: Ub ? `${wU}batApartConfirmTitle` : `${wU}rxApartConfirmTitle`,
        body: Ub ? tb : `${wU}rxApartConfirmBody`,
        bodyParams: void 0 === Mb ? void 0 : {
          cap: Mb
        },
        yes: `${wU}rxApart`,
        cancel: () => {
          Lb(!1)
        },
        confirm: () => {
          Lb(!1), Vb()
        }
      })
    }

    function VU(bb) {
      let {
        mood: wb,
        big: Mb
      } = bb;
      const eb = MU[wb],
        Hb = [];
      return eb.rows.forEach(((bb, wb) => {
        for (let Mb = 0; Mb < bb.length; Mb++) "." !== bb[Mb] && Hb.push((0, sp.jsx)("rect", {
          x: Mb + 1,
          y: wb + 1,
          width: 1,
          height: 1,
          fill: "w" === bb[Mb] ? "#8fd3ff" : eb.colour
        }, `${Mb},${wb}`))
      })), (0, sp.jsxs)("svg", {
        className: zH()("Baf2RxFace", {
          Big: Mb,
          Alarm: "alarm" === wb
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, sp.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, sp.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Hb]
      })
    }

    function gU(bb) {
      return tp(bb, "+").replace("+", "")
    }

    function lU(bb) {
      let {
        kind: wb,
        dims: Mb,
        cap: eb,
        disabled: Hb,
        compact: pb,
        resize: Vb
      } = bb;
      const {
        t: gb
      } = (0, KH.C)(), {
        min: lb,
        max: Lb
      } = QM(wb), Ib = Math.min(eb, Lb), Ob = [`${wU}rxWide`, `${wU}rxTall`, `${wU}rxDeep`], Ub = {
        w: String(Mb[0]),
        h: String(Mb[1]),
        d: String(Mb[2]),
        blocks: String(Xl(wb, Mb))
      };
      return (0, sp.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, sp.jsx)("div", {
          className: "Baf2RxSteppers",
          children: Mb.map(((bb, wb) => {
            const pb = eb => {
                const Hb = [Mb[0], Mb[1], Mb[2]];
                Hb[wb] = bb + eb, Vb(Hb)
              },
              Ub = bb >= Ib;
            return (0, sp.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, sp.jsx)("button", {
                type: "button",
                "aria-label": gb(`${wU}rxSmaller`),
                disabled: Hb || bb <= lb,
                onClick: () => {
                  pb(-1)
                },
                children: "\u2212"
              }), (0, sp.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [bb, (0, sp.jsx)("small", {
                  children: gb(Ob[wb])
                })]
              }), (0, sp.jsx)("button", {
                type: "button",
                "aria-label": gb(`${wU}rxBigger`),
                disabled: Hb || Ub,
                onClick: () => {
                  pb(1)
                },
                children: Ub && eb < Lb ? "\ud83d\udd12" : "+"
              })]
            }, Ob[wb])
          }))
        }), !pb && (0, sp.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === wb ? gb(`${wU}rxSizeLine`, {
            ...Ub,
            water: String(zl(Mb))
          }) : gb(`${wU}batSizeLine`, Ub)
        })]
      })
    }

    function LU(bb) {
      let {
        on: wb,
        label: Mb,
        disabled: eb,
        locked: Hb,
        pending: pb,
        toggle: Vb
      } = bb;
      return (0, sp.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": wb,
        disabled: eb,
        "aria-disabled": Hb || void 0,
        className: zH()("Baf2RxSwitch", {
          On: wb,
          Locked: Hb,
          Pending: pb
        }),
        onClick: Vb,
        children: [(0, sp.jsx)("span", {
          className: "Baf2RxKnob"
        }), Mb]
      })
    }
    const IU = "buildAFactory2Game:",
      OU = .95;

    function UU(bb, wb) {
      return 0 !== (bb.baf2RxFlags & wb)
    }

    function tU(bb) {
      return "cryo" === bb ? Tb.o : Tb.q
    }

    function CU(bb) {
      var wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb;
      return bb.baf2RxCryo ? {
        ht: "cryo",
        usePerS: null !== (Hb = bb.baf2RxCryoUse) && void 0 !== Hb ? Hb : 0,
        needPerS: null !== (pb = bb.baf2RxCryoNeed) && void 0 !== pb ? pb : 0,
        inPerS: null !== (Vb = bb.baf2RxCryoIn) && void 0 !== Vb ? Vb : 0,
        stored: null !== (gb = bb.baf2RxCryoStored) && void 0 !== gb ? gb : 0,
        makersShort: null !== (lb = bb.baf2RxMixersShort) && void 0 !== lb ? lb : 0,
        waterBeside: null !== (Lb = bb.baf2RxWaterUse) && void 0 !== Lb ? Lb : 0,
        pct: bb.baf2RxWater
      } : {
        ht: "water",
        usePerS: null !== (wb = bb.baf2RxWaterUse) && void 0 !== wb ? wb : 0,
        needPerS: null !== (Mb = bb.baf2RxWaterNeed) && void 0 !== Mb ? Mb : 0,
        inPerS: bb.baf2RxWaterIn,
        stored: bb.baf2RxWaterStored,
        makersShort: null !== (eb = bb.baf2RxCondensersShort) && void 0 !== eb ? eb : 0,
        waterBeside: 0,
        pct: bb.baf2RxWater
      }
    }

    function EU(bb) {
      const wb = "running" === bb.baf2RxState || "idle" === bb.baf2RxState;
      return bb.baf2RxFormed && bb.baf2RxTarget !== bb.baf2RxThrottle && wb ? FU(bb, bb.baf2RxTarget) : null
    }

    function FU(bb, wb) {
      const [Mb, eb, Hb, , , , pb, , Vb] = bb.baf2RxStats, gb = UU(bb, tw), lb = CU(bb), Lb = lb.pct / 100, {
        gen: Ib,
        out: Ob,
        load: Ub
      } = function(bb, wb, Mb, eb) {
        const Hb = Mb ? Qg : 1,
          pb = Math.min(bb.fuelHeat * Hb * Math.max(0, Math.min(1, wb)), bb.size * Hb);
        return {
          gen: pb,
          out: pb,
          load: pl(pb, bb.cooling, eb)
        }
      }({
        fuelHeat: Mb,
        cooling: eb,
        size: Hb
      }, wb / 100, gb, Lb), tb = gl(pb || dg(...bb.baf2RxDims)), Cb = bb.baf2RxHeat, Eb = Math.abs(Ub - Cb), Fb = function(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Tb.q;
        const pb = Mb ? Qg : 1,
          Vb = Math.min(bb.fuelHeat * pb * wb / 100, bb.size * pb),
          gb = Vb,
          lb = bb.fuelHeat * pb,
          Lb = bb.cooling * Hl(eb.pct / 100),
          Ib = lb > 0 && Lb < bb.size * pb ? Math.floor(100 * Lb / lb) : 100,
          Ob = Vb * Hb - eb.inPerS;
        return {
          out: gb,
          hotAbove: Ib >= 100 ? null : Math.max(0, Ib),
          waterSecs: eb.pct >= 100 && Ob > 1e-6 ? Math.max(0, eb.stored) / Ob : null
        }
      }({
        fuelHeat: Mb,
        cooling: eb,
        size: Hb
      }, wb, gb, {
        pct: lb.pct,
        inPerS: lb.inPerS,
        stored: lb.stored
      }, tU(lb.ht));
      return {
        pct: wb,
        out: Ob,
        coolPerS: Ib * tU(lb.ht),
        pelletsPerMin: Vb > 0 ? Ob / Vb * 60 : 0,
        settle: Ub,
        settleS: Eb > 2 ? tb * Math.log(Eb / 2) : 0,
        overheatS: Ub > 100 && Cb < 100 ? tb * Math.log((Ub - Cb) / (Ub - 100)) : null,
        hotAbove: Fb.hotAbove,
        coolantSecs: Fb.waterSecs
      }
    }

    function BU(bb) {
      return bb.baf2RxThrottle <= 0 && "running" !== bb.baf2RxState ? 0 : FU(bb, bb.baf2RxTarget).pelletsPerMin / 60
    }

    function sU(bb, wb) {
      if (bb <= 0 || wb <= 0) return 0;
      const Mb = bb / wb;
      return Mb < .25 ? 1 : Mb < .5 ? 2 : Mb < .8 ? 3 : 4
    }

    function mU(bb, wb) {
      const Mb = {};
      for (const [eb, Hb] of Object.entries(wb.params)) Mb[eb] = "time" === eb ? Fp(bb, Hb) : "amount" === eb ? xl(Hb) : String(Math.round(Hb));
      return bb(wb.key, Mb)
    }

    function hU(bb, wb) {
      return {
        key: `${IU}${bb}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: wb
      }
    }

    function zU(bb) {
      var wb;
      const Mb = UU(bb, tw),
        eb = "running" === bb.baf2RxState,
        Hb = Ol(bb),
        pb = bb.baf2RxHeat;
      var Vb;
      if (eb && pb > Ng) return {
        key: null !== (Vb = Hb.fix) && void 0 !== Vb ? Vb : `${IU}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const gb = eb ? FU(bb, bb.baf2RxTarget).coolantSecs : null,
        lb = "cryo" === CU(bb).ht;
      if (null !== gb && gb >= 1 && gb <= 30) return hU(lb ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Lb = ig(dg(...bb.baf2RxDims)).waste,
        Ib = eb ? Bl(bb, Lb, BU(bb)).fullInS : null;
      if (null !== Ib && Ib <= 120 && bb.baf2RxWaste >= .5 * Lb) return hU("rxWarnWaste", "warn");
      if (null !== gb && gb >= 1) return hU(lb ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: gb
      });
      const Ob = "noWater" === bb.baf2RxState && pb > Ng;
      if (bb.baf2RxDamage >= 1 && !Ob) return hU("rxDamagedHeals", "warn", {
        pct: bb.baf2RxDamage
      });
      if (bb.baf2RxCryoCut) return hU("rxFix_cryoCut", "warn");
      const Ub = CU(bb);
      if ("noWater" === bb.baf2RxState && "cryo" === Ub.ht) return hU("noWater" === bb.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const tb = Hb.fix === `${IU}rxFix_scramCool` || "idle" === bb.baf2RxState && bb.baf2RxTarget <= 0;
      if (tb && bb.baf2RxFuel <= 0) return hU("rxFix_noFuel", "warn");
      if (tb && bb.baf2RxWaterIn <= 0 && (null !== (wb = bb.baf2RxCryoIn) && void 0 !== wb ? wb : 0) <= 0) return hU("rxFix_noWater", "warn");
      const Cb = Hb.fix === `${IU}rxFix_scramCool` ? tl(bb) : null;
      if (null !== Cb) return {
        key: Cb.key,
        params: {
          amount: Cb.amount
        },
        tone: "info"
      };
      if ("running" !== bb.baf2RxState && "idle" !== bb.baf2RxState && null !== Hb.fix) return {
        key: Hb.fix,
        params: {},
        tone: "scram" === bb.baf2RxState ? "info" : Ob ? "bad" : "warn"
      };
      var Eb;
      if ("idle" === bb.baf2RxState && bb.baf2RxTarget <= 0) return {
        key: null !== (Eb = Hb.fix) && void 0 !== Eb ? Eb : `${IU}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const Fb = bb.baf2RxCryoStarved;
      if ("cryo" === Ub.ht && Fb && Ub.needPerS > 0 && Ub.usePerS < OU * Ub.needPerS) return hU("noWater" === Fb ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const Bb = "cryo" === Ub.ht,
        sb = Ub.needPerS > 0 && Ub.usePerS < OU * Ub.needPerS;
      if (Bb ? sb || Ub.makersShort > 0 && Ub.pct < 100 : Ub.pct < 100) {
        const wb = Bb && sb ? Math.floor(100 * Ub.usePerS / Ub.needPerS) : Math.min(100, Ub.pct);
        if (Ub.makersShort > 0) {
          return hU(`${Bb?"rxCryoShortLine":"rxWaterShortLine"}${1===Ub.makersShort?"One":""}${!Bb&&bb.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: wb,
            count: Ub.makersShort
          })
        }
        return hU(Bb ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: wb
        })
      }
      const mb = function(bb) {
        const [wb, Mb, eb] = bb.baf2RxStats, Hb = CU(bb), pb = Vl({
          fuelHeat: wb,
          cooling: Mb,
          size: eb
        }, "cryo" === Hb.ht ? Tb.g : 1, !0);
        return Math.max(0, pb * tU(Hb.ht) - Hb.inPerS)
      }(bb);
      if (Mb && mb > 0) return hU("cryo" === Ub.ht ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(mb)
      });
      if (pb >= Ml) return hU("rxHotLine", "warn");
      const hb = FU(bb, bb.baf2RxTarget);
      var zb;
      if (null !== hb.overheatS) return hU("rxWillOverheat", "bad", {
        pct: bb.baf2RxTarget,
        time: hb.overheatS,
        safe: null !== (zb = hb.hotAbove) && void 0 !== zb ? zb : 100
      });
      if (Math.abs(hb.settle - pb) >= 3) return hU("rxSettling", "info", {
        pct: bb.baf2RxTarget,
        heat: Math.round(hb.settle),
        time: hb.settleS
      });
      const Xb = tl(bb);
      if (null !== Xb) return {
        key: Xb.key,
        params: {
          amount: Xb.amount
        },
        tone: "info"
      };
      const xb = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== wb && ("running" !== wb || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === bb.rods ? `${ll}rxLimitNoRods` : `${ll}rxLimit_${wl(bb)}`
      }({
        rods: bb.baf2RxStats[3],
        ...Ul(bb)
      }, bb.baf2RxState, bb.baf2RxOut >= OU * bb.baf2RxMaxNow, !1);
      if (xb === `${IU}rxLimit_size`) {
        const [wb, , Mb, eb] = bb.baf2RxStats, Hb = eb > 0 && wb > 0 ? Math.ceil(Mb / (wb / eb) - 1e-9) : eb, pb = bb.baf2RxDims.every((bb => bb >= QM("reactor").max));
        if (Hb < eb) return hU(pb ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Hb,
          have: eb
        });
        if (pb) return hU("rxLimit_sizeMax", "info")
      }
      return null !== xb ? {
        key: xb,
        params: {},
        tone: "info"
      } : hU("rxSteady", "ok", {
        pct: bb.baf2RxTarget
      })
    }

    function XU(bb) {
      var wb;
      if (bb.melted) return hU("rxMeltedBody", "bad");
      if (-1 === bb.bad) return hU("rxFix_noRoom", "warn");
      if (bb.bad > 0) return hU(1 === bb.bad ? "rxBadOne" : "rxBad", "warn", {
        count: bb.bad
      });
      if (bb.left > 0) {
        const wb = 1 === bb.left ? "One" : "";
        return hU(bb.canFill ? `rxPlanLeft${wb}` : `rxPlanLeftNoFill${wb}`, "info", {
          count: bb.left
        })
      }
      if (0 === bb.rods) return hU("rxLimitNoRods", "warn");
      const Mb = null !== (wb = bb.idle) && void 0 !== wb ? wb : 0;
      return Mb > 0 ? hU(1 === Mb ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: Mb
      }) : hU("rxPlanReady", "ok")
    }

    function xU(bb) {
      return Math.floor(Math.max(0, bb[1] - 1) / 2)
    }

    function jU(bb) {
      if (bb >= yg && bb < og) {
        const wb = bb - yg;
        return {
          key: 0 === wb ? `${IU}rxWhy_rodAlone` : 1 === wb ? `${IU}rxWhy_rodOne` : `${IU}rxWhy_rod`,
          params: {
            count: String(wb),
            heat: String(cg * (1 + Yg * wb))
          }
        }
      }
      return bb === og ? {
        key: `${IU}rxWhy_channel`,
        params: {
          amount: String(fg)
        }
      } : bb === Tg ? {
        key: `${IU}rxWhy_deadChannel`,
        params: {}
      } : bb === kg ? {
        key: `${IU}rxWhy_graphite`,
        params: {}
      } : {
        key: `${IU}rxWhy_core`,
        params: {}
      }
    }
    const KU = "buildAFactory2Game:";

    function rU(bb, wb) {
      return 0 !== (bb.baf2RxFlags & wb)
    }

    function RU(bb) {
      let {
        status: wb,
        pending: Mb,
        store: eb,
        explain: Hb
      } = bb;
      const {
        t: pb
      } = (0, KH.C)(), Vb = rU(wb, Uw), gb = wb.baf2RxTarget, lb = wb.baf2RxThrottle, Lb = function(bb) {
        return {
          press: () => {
            bb.throttlePress()
          },
          drag: wb => {
            bb.throttleDrag(wb)
          },
          release: () => {
            bb.throttleRelease()
          }
        }
      }(eb), Ib = null === (Ob = FU(wb, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Ob - 10),
        red: Ob
      };
      var Ob;
      return (0, sp.jsxs)("div", {
        className: zH()("Baf2RxThrottle", {
          Off: Vb
        }),
        onClick: () => {
          Vb && Hb(`${KU}rxWhy_startFirst`)
        },
        children: [(0, sp.jsx)("span", {
          className: "HideNarrow",
          children: pb(`${KU}rxThrottle`)
        }), (0, sp.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, sp.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: gb,
            disabled: Vb,
            style: Vb ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": pb(`${KU}rxThrottle`),
            onPointerDown: () => {
              Lb.press();
              const bb = () => {
                window.removeEventListener("pointerup", bb), window.removeEventListener("pointercancel", bb), Lb.release()
              };
              window.addEventListener("pointerup", bb), window.addEventListener("pointercancel", bb)
            },
            onKeyUp: Lb.release,
            onChange: bb => {
              Lb.drag(Number(bb.target.value))
            }
          }), (0, sp.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Ib.amber}%, #ffb020 ${Ib.amber}% ${Ib.red}%, #ff3b30 ${Ib.red}%)`
            },
            "aria-hidden": "true"
          }), (0, sp.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${lb}% + ${8*(1-lb/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, sp.jsxs)("b", {
          children: [`${gb}%`, (0, sp.jsx)("i", {
            className: zH()("Baf2RxPendingDot", {
              On: Mb
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function DU(bb) {
      let {
        status: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)(), eb = FU(wb, wb.baf2RxTarget), Hb = CU(wb).ht, pb = Mb("cryo" === Hb ? `${KU}rxRateCryo` : `${KU}rxRateWater`, {
        rate: gU(eb.coolPerS)
      }), Vb = Mb(`${KU}rxChain`, {
        pct: String(wb.baf2RxTarget),
        out: xl(eb.out),
        heat: String(Math.round(eb.settle)),
        coolant: pb
      }), gb = null !== eb.coolantSecs ? eb.coolantSecs >= 1 ? Mb("cryo" === Hb ? `${KU}rxThrottleCryoOut` : `${KU}rxThrottleWaterOut`, {
        time: Fp(Mb, eb.coolantSecs)
      }) : Mb("cryo" === Hb ? `${KU}rxThrottleCryoDry` : `${KU}rxThrottleWaterDry`) : null;
      return (0, sp.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Vb, null !== gb ? (0, sp.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", gb]
        }) : (0, sp.jsxs)("span", {
          children: [" \xb7 ", Mb(`${KU}rxChainPellets`, {
            amount: jl(eb.pelletsPerMin)
          })]
        })]
      })
    }

    function cU(bb) {
      let {
        view: wb,
        store: Mb,
        explain: Hb,
        explainOnce: pb
      } = bb;
      const {
        t: Vb
      } = (0, KH.C)(), {
        status: gb
      } = wb, [lb, Lb] = (0, eb.useState)(!1), Ib = rU(gb, Uw), Ub = rU(gb, tw), tb = !rU(gb, Fw), Cb = gb.baf2RxHeat > 100;
      return (0, sp.jsxs)(sp.Fragment, {
        children: [(0, sp.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, sp.jsx)(RU, {
            status: gb,
            pending: wb.throttlePending,
            store: Mb,
            explain: Hb
          }), (0, sp.jsx)(LU, {
            on: Ub,
            label: Ub ? Vb(`${KU}rxOdLeft`, {
              time: Fp(Vb, gb.baf2RxOdLeft)
            }) : Vb(`${KU}rxOverdrive`),
            locked: tb,
            pending: 0 !== (wb.pendingFlags & tw),
            toggle: () => {
              tb ? Hb(`${KU}rxOverdriveTier`, {
                amount: String(Ob(13))
              }) : Ub ? Mb.setFlag(tw, !1) : wb.odConfirmed ? Mb.setFlag(tw, !0) : Lb(!0)
            }
          }), Ib || wb.startGuard ? (0, sp.jsx)(FV.u, {
            disabled: wb.busy.has("start") || wb.startGuard,
            onClick: () => {
              Mb.tap("start", (() => {
                Mb.setFlag(Uw, !1)
              }))
            },
            children: Vb(wb.startGuard ? `${KU}rxStarting` : `${KU}rxStart`)
          }) : (0, sp.jsx)("span", {
            className: zH()("Baf2RxScram", {
              Pulse: Cb
            }),
            children: (0, sp.jsx)(FV.Q, {
              onClick: () => {
                Mb.shutDown()
              },
              children: Vb(`${KU}rxScram`)
            })
          })]
        }), (0, sp.jsx)(DU, {
          status: gb
        }), lb && (0, sp.jsx)(eU, {
          id: "baf2RxOdTitle",
          title: `${KU}rxOdConfirmTitle`,
          body: `${KU}rxOdConfirmBody`,
          yes: `${KU}rxOdConfirm`,
          cancel: () => {
            Lb(!1)
          },
          confirm: () => {
            Lb(!1), Mb.tap("odConfirm", (() => {
              Mb.confirmOverdrive(), Mb.setFlag(tw, !0)
            })), pb(`${KU}rxWhy_overdrive`)
          }
        })]
      })
    }

    function YU(bb) {
      let {
        view: wb,
        store: Mb,
        keepSize: eb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)(), {
        status: pb
      } = wb;
      return (0, sp.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, sp.jsx)(lU, {
          kind: "reactor",
          dims: wb.dims,
          cap: pb.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: bb => {
            Mb.resize(bb)
          }
        }), eb ? (0, sp.jsx)(FV.j, {
          onClick: eb,
          children: Hb(`${KU}rxKeepSize`)
        }) : (0, sp.jsxs)(sp.Fragment, {
          children: [(0, sp.jsx)(LU, {
            on: wb.guide,
            label: Hb(`${KU}rxGuide`),
            toggle: () => {
              Mb.toggleGuide()
            }
          }), rU(pb, sw) && (0, sp.jsx)(LU, {
            on: wb.starter,
            label: Hb(`${KU}rxStarter`),
            toggle: () => {
              Mb.toggleStarter()
            }
          }), (0, sp.jsx)(kO, {
            status: pb,
            store: Mb,
            busy: wb.busy.has("fill")
          })]
        })]
      })
    }

    function ZU(bb) {
      let {
        need: wb,
        kind: Mb = "reactor",
        explain: eb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)(), pb = wb.length <= 3, Vb = wb.reduce(((bb, wb) => {
        let [, Mb] = wb;
        return bb + Mb
      }), 0);
      return (0, sp.jsxs)("div", {
        className: zH()("Baf2RxParts", {
          Compact: !pb
        }),
        onClick: () => {
          eb("battery" === Mb ? `${KU}batWhy_store` : `${KU}rxShellHint`)
        },
        children: [Vb > 0 && (0, sp.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Vb ? Hb(`${KU}rxBlocksOne`) : Hb(`${KU}rxBlocks`, {
            blocks: String(Vb)
          })
        }), 0 === wb.length ? (0, sp.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Hb("battery" === Mb ? `${KU}batPartsDone` : `${KU}rxShellDone`)
        }) : El(wb).map((bb => {
          let [wb, Mb, eb] = bb;
          const Vb = function(bb) {
            const wb = hl[bb];
            if (void 0 === wb) return null;
            const [Mb, eb, Hb] = sl[wb].colour.map((bb => Math.round(255 * bb)));
            return `rgb(${Mb}, ${eb}, ${Hb})`
          }(wb);
          return (0, sp.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, kH.f)(Hb, wb),
            children: [(0, sp.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Vb ? {
                visibility: "hidden"
              } : {
                background: Vb
              },
              title: Hb(`${KU}rxShopGhost`)
            }), (0, sp.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, sp.jsx)(RH.c, {
                itemName: wb,
                amount: 0
              })
            }), (0, sp.jsx)("span", {
              className: "Baf2RxChipName",
              children: pb ? `${Mb} ${gb=(0,kH.f)(Hb,wb),gb.replace(/^(Reactor|Battery) (?=\S)/,"")}` : Mb
            }), eb >= Mb ? (0, sp.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, sp.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: pb ? Hb(`${KU}rxShopShort`, {
                count: String(Mb - eb)
              }) : "\u2212" + (Mb - eb)
            })]
          }, wb);
          var gb
        }))]
      })
    }
    const fU = "buildAFactory2Game:";

    function AU(bb) {
      var wb, Mb, Hb, pb, Vb, gb, lb;
      let {
        store: Lb,
        close: Ib
      } = bb;
      const {
        t: Ob
      } = (0, KH.C)(), Ub = WV(), tb = HU(Lb), {
        explained: Cb,
        explain: Eb
      } = dO("baf2RxExplained"), Fb = (0, eb.useCallback)(((bb, wb) => {
        Eb(Ob(bb, wb))
      }), [Eb, Ob]), Bb = null === tb || void 0 === tb ? void 0 : tb.status, sb = !0 === (null === Bb || void 0 === Bb ? void 0 : Bb.baf2BatReadOnly), mb = bb => {
        Bb && Ub.send(Ow(Bb.baf2BatAt, bb))
      }, [hb, zb, Xb] = null !== (wb = null === tb || void 0 === tb ? void 0 : tb.dims) && void 0 !== wb ? wb : [0, 0, 0], xb = xl(null !== (Mb = null === tb || void 0 === tb ? void 0 : tb.qO) && void 0 !== Mb ? Mb : 0), jb = !0 === (null === Bb || void 0 === Bb ? void 0 : Bb.baf2BatFormed), Kb = null !== (Hb = null === Bb || void 0 === Bb ? void 0 : Bb.baf2BatStored) && void 0 !== Hb ? Hb : 0, rb = Math.max(1, null !== (pb = null === Bb || void 0 === Bb ? void 0 : Bb.baf2BatIslandCap) && void 0 !== pb ? pb : 1), Rb = Math.min(100, 100 * Kb / rb), Db = null === Bb || void 0 === Bb ? void 0 : Bb.baf2BatNetPerS, cb = function(bb, wb, Mb) {
        return Mb > 0 && wb >= Mb ? "full" : void 0 !== bb && bb >= .05 ? "charging" : void 0 !== bb && bb <= -.05 && wb > 0 ? "draining" : "steady"
      }(Db, Kb, null !== (Vb = null === Bb || void 0 === Bb ? void 0 : Bb.baf2BatIslandCap) && void 0 !== Vb ? Vb : 0), Yb = null !== (gb = null === Bb || void 0 === Bb ? void 0 : Bb.baf2BatMadePerS) && void 0 !== gb ? gb : 0, Zb = null !== (lb = null === Bb || void 0 === Bb ? void 0 : Bb.baf2BatUsedPerS) && void 0 !== lb ? lb : 0;
      let fb, Ab = {},
        Wb = "info";
      if (Bb)
        if (jb) "charging" === cb ? (fb = `${fU}batLine_charging`, Ab = {
          time: Fp(Ob, (rb - Kb) / Math.max(.05, null !== Db && void 0 !== Db ? Db : 0))
        }, Wb = "ok") : "draining" === cb ? (fb = `${fU}batLine_draining`, Ab = {
          time: Fp(Ob, Kb / Math.max(.05, -(null !== Db && void 0 !== Db ? Db : 0)))
        }, Wb = "warn") : fb = "full" === cb ? `${fU}batLine_full` : Kb <= 0 && Zb > 0 ? `${fU}batLine_empty` : `${fU}batLine_steady`;
        else {
          var Jb;
          const bb = XU({
            left: Bb.baf2BatNeed.reduce(((bb, wb) => {
              let [, Mb] = wb;
              return bb + Mb
            }), 0),
            bad: Bb.baf2BatBad,
            rods: 1,
            canFill: !0 === Bb.baf2BatCanFill,
            melted: !1
          });
          fb = bb.key, Ab = {
            count: String(null !== (Jb = bb.params.count) && void 0 !== Jb ? Jb : 0)
          }, Wb = bb.tone
        }
      else fb = `${fU}batLine_steady`;
      const Sb = Math.max(Yb, Zb, 1);
      return (0, sp.jsx)(EV.e, {
        close: Ib,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, sp.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, sp.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, sp.jsx)(RH.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, sp.jsxs)("div", {
                children: [(0, sp.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Ob(`${fU}batTitle`)
                }), Bb && (0, sp.jsxs)("p", {
                  className: zH()("Baf2RxSubtitle", {
                    good: jb && "charging" === cb,
                    warn: jb && "draining" === cb
                  }),
                  children: [hb, "\xd7", zb, "\xd7", Xb, " \xb7 ", Ob(jb ? `${fU}batState_${cb}` : `${fU}rxSubPlanShort`)]
                })]
              })]
            }), (0, sp.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Bb && !sb && (0, sp.jsx)(pU, {
                kind: "battery",
                cap: jb ? xb : void 0,
                busy: null === tb || void 0 === tb ? void 0 : tb.busy.has("apart"),
                apart: () => {
                  Lb.tap("apart", (() => {
                    mb("apart")
                  }))
                }
              }), (0, sp.jsx)(FV.l, {
                onClick: Ib
              })]
            })]
          }), tb && Bb && (0, sp.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, sp.jsxs)("div", {
              className: zH()("Baf2RxFlow Baf2BatFlow", {
                Plan: !jb
              }),
              children: [(0, sp.jsx)(aO, {
                kind: "Power",
                label: Ob(`${fU}batMade`),
                number: jb ? `\u26a1 ${xl(Yb)}/s` : "\u2014",
                note: Ob(`${fU}batMadeNote`),
                share: jb ? Yb / Sb : void 0,
                onExplain: () => {
                  Fb(`${fU}batWhy_made`)
                }
              }), (0, sp.jsx)(iO, {
                kind: "Power",
                step: jb ? sU(Yb, Sb) : 0,
                planned: !jb
              }), (0, sp.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  Fb(`${fU}batWhy_store`)
                },
                children: [(0, sp.jsx)(uO, {
                  max: 100,
                  bands: [{
                    upTo: jb ? Rb : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, sp.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, sp.jsx)("b", {
                    className: "Baf2BatStored",
                    children: jb ? Ob(`${fU}batStoredOf`, {
                      amount: xl(Kb),
                      cap: xl(Bb.baf2BatIslandCap)
                    }) : Ob(`${fU}batWillHold`, {
                      cap: xb
                    })
                  }), (0, sp.jsx)("span", {
                    children: Ob(`${fU}batAdds`, {
                      cap: xb
                    })
                  }), jb && (0, sp.jsx)("small", {
                    children: Ob(`${fU}batBreakNote`, {
                      cap: xb
                    })
                  })]
                })]
              }), (0, sp.jsx)(iO, {
                kind: "Power",
                step: jb ? sU(Zb, Sb) : 0,
                planned: !jb
              }), (0, sp.jsx)(aO, {
                kind: "Power",
                label: Ob(`${fU}batUsed`),
                number: jb ? `\u26a1 ${xl(Zb)}/s` : "\u2014",
                note: Ob(`${fU}batUsedNote`),
                share: jb ? Zb / Sb : void 0,
                onExplain: () => {
                  Fb(`${fU}batWhy_used`)
                }
              })]
            }), (0, sp.jsx)(PO, {
              text: Ob(fb, Ab),
              tone: Wb,
              explained: Cb
            }), sb ? (0, sp.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Ob(`${fU}rxNotYours`)
            }) : !jb && (0, sp.jsxs)(sp.Fragment, {
              children: [(0, sp.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, sp.jsx)(lU, {
                  kind: "battery",
                  dims: tb.dims,
                  cap: Bb.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: bb => {
                    Lb.resize(bb)
                  }
                }), (0, sp.jsx)(LU, {
                  on: tb.guide,
                  label: Ob(`${fU}rxGuide`),
                  toggle: () => {
                    Lb.toggleGuide()
                  }
                }), Bb.baf2BatCanFill && (0, sp.jsx)(FV.p, {
                  disabled: !Fl("battery", Bb.baf2BatNeed) || tb.busy.has("fill"),
                  onClick: () => {
                    Lb.tap("fill", (() => {
                      mb("fill")
                    }))
                  },
                  children: Ob(`${fU}rxFill`)
                })]
              }), (0, sp.jsx)(ZU, {
                need: Bb.baf2BatNeed,
                kind: "battery",
                explain: Fb
              })]
            })]
          })]
        })
      })
    }
    const WU = "buildAFactory2Game:",
      JU = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function SU(bb, wb) {
      return bb === ng ? null : wb ? "#4a4440" : bb < og ? JU[bb - yg] : bb === og ? "#3fd0f0" : bb === Tg ? "#2c3e4c" : "#55585e"
    }

    function NU(bb) {
      let {
        inner: wb,
        looks: Mb,
        layer: eb,
        setLayer: Hb,
        glow: pb,
        melted: Vb,
        explain: gb
      } = bb;
      const {
        t: lb
      } = (0, KH.C)(), [Lb, Ib, Ob] = wb, Ub = Math.max(0, Math.min(Ib - 1, eb)), tb = [];
      for (let Eb = 0; Eb < Ob; Eb++)
        for (let bb = 0; bb < Lb; bb++) {
          var Cb;
          const wb = null !== (Cb = Mb[(Ub * Ob + Eb) * Lb + bb]) && void 0 !== Cb ? Cb : ng,
            eb = SU(wb, Vb),
            Hb = wb >= yg && wb < og;
          tb.push(null === eb ? (0, sp.jsx)("circle", {
            cx: bb + .5,
            cy: Eb + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${bb},${Eb}`) : (0, sp.jsx)("rect", {
            x: bb + .06,
            y: Eb + .06,
            width: .88,
            height: .88,
            fill: eb,
            opacity: Hb && !Vb ? .5 + .5 * pb : 1,
            onClick: bb => {
              bb.stopPropagation();
              const Mb = jU(wb);
              gb(Mb.key, Mb.params)
            }
          }, `${bb},${Eb}`))
        }
      return (0, sp.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, sp.jsx)("svg", {
          className: zH()("Baf2RxMapGrid", {
            Melted: Vb
          }),
          viewBox: `0 0 ${Math.max(1,Lb)} ${Math.max(1,Ob)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": lb(`${WU}rxWhy_core`),
          onClick: () => {
            gb(`${WU}rxWhy_core`, {})
          },
          children: tb
        }), Ib > 1 && (0, sp.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, sp.jsx)("button", {
            type: "button",
            "aria-label": lb(`${WU}rxLayerDown`),
            disabled: Ub <= 0,
            onClick: () => {
              Hb(Ub - 1)
            },
            children: "\u25bc"
          }), (0, sp.jsxs)("span", {
            children: [(0, sp.jsx)("span", {
              className: "HideNarrow",
              children: lb(`${WU}rxLayer`, {
                n: String(Ub + 1),
                of: String(Ib)
              })
            }), (0, sp.jsx)("span", {
              className: "ShowNarrow",
              children: lb(`${WU}rxLayerShort`, {
                n: String(Ub + 1),
                of: String(Ib)
              })
            })]
          }), (0, sp.jsx)("button", {
            type: "button",
            "aria-label": lb(`${WU}rxLayerUp`),
            disabled: Ub >= Ib - 1,
            onClick: () => {
              Hb(Ub + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const vU = "buildAFactory2Game:",
      QU = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: vg,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Il,
        kind: "red"
      }],
      GU = [50, vg, 100];

    function qU(bb) {
      let {
        stats: wb,
        t: Mb,
        explain: eb
      } = bb;
      const Hb = wl(wb),
        pb = Math.max(1, wb.fuelHeat, wb.cooling, wb.size),
        Vb = [
          ["fuel", `${vU}rxBarRods`, wb.fuelHeat],
          ["cooling", `${vU}rxBarCooling`, wb.cooling],
          ["size", `${vU}rxBarSize`, wb.size]
        ];
      return (0, sp.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          eb(`${vU}rxWhy_bars`)
        },
        children: [(0, sp.jsx)("span", {
          className: "Baf2RxMostLine",
          children: Mb(`${vU}rxMost`, {
            amount: xl(Math.min(wb.fuelHeat, wb.cooling, wb.size))
          })
        }), (0, sp.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Vb.map((bb => {
            let [wb, eb, Vb] = bb;
            return (0, sp.jsxs)("span", {
              className: zH()("Baf2RxMostBar", wb, {
                Low: wb === Hb
              }),
              children: [(0, sp.jsx)("small", {
                children: Mb(eb)
              }), (0, sp.jsx)("i", {
                children: (0, sp.jsx)("b", {
                  style: {
                    width: 100 * Vb / pb + "%"
                  }
                })
              })]
            }, wb)
          }))
        })]
      })
    }

    function aU(bb) {
      var wb;
      let {
        view: Mb,
        heat: Hb,
        settle: pb,
        settleLine: Vb,
        settleBad: gb,
        explain: lb
      } = bb;
      const {
        t: Lb
      } = (0, KH.C)(), {
        status: Ib
      } = Mb, Ob = Ib.baf2RxAt.join(","), [Ub, tb] = (0, eb.useState)((() => xU(Mb.inner)));
      (0, eb.useEffect)((() => {
        tb(xU(Mb.inner))
      }), [Ob, Mb.inner[1]]);
      const Cb = null !== (wb = Mb.plan) && void 0 !== wb ? wb : Ul(Ib),
        Eb = Mb.plan ? Mb.plan.powerPerUnit : Ib.baf2RxStats[8],
        Fb = null === Hb ? null : "alarm" === (Bb = Ll(Ib)) ? "red" : "hot" === Bb ? "hot" : "warm" === Bb ? "warm" : "cold";
      var Bb;
      const sb = !Ib.baf2RxFormed && function(bb, wb) {
          return 0 !== (bb.baf2RxFlags & wb)
        }(Ib, Cw),
        mb = Ib.baf2RxDamage,
        hb = Ib.baf2RxDamageTrend;
      return (0, sp.jsxs)("div", {
        className: zH()("Baf2RxCore", null !== Fb && void 0 !== Fb ? Fb : "plan"),
        children: [(0, sp.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, sp.jsx)(NU, {
            inner: Mb.inner,
            looks: Mb.looks,
            layer: Ub,
            setLayer: tb,
            glow: Ib.baf2RxFormed ? Ib.baf2RxThrottle / 100 : 1,
            melted: sb,
            explain: lb
          }), (0, sp.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              lb(`${vU}rxWhy_heat`)
            },
            children: [null !== Hb ? (0, sp.jsxs)(sp.Fragment, {
              children: [(0, sp.jsx)("b", {
                children: Lb(`${vU}rxHeatPct`, {
                  pct: String(Hb)
                })
              }), (0, sp.jsx)("span", {
                className: zH()("Baf2RxBand", Fb),
                children: Lb(`${vU}rxBand_${Fb}`)
              })]
            }) : (0, sp.jsx)("b", {
              children: Lb(`${vU}rxHeat`)
            }), null !== Vb && (0, sp.jsx)("span", {
              className: zH()("Baf2RxSettle", {
                Bad: gb
              }),
              children: Vb
            }), mb >= 1 && (0, sp.jsxs)("span", {
              className: zH()("Baf2RxDamage", hb),
              children: [Lb(`${vU}rxDamageLine`, {
                pct: String(mb)
              }), " \xb7 ", Lb(`${vU}rxDamage_${hb}`), (0, sp.jsx)("i", {
                children: (0, sp.jsx)("b", {
                  style: {
                    width: `${Math.min(100,mb)}%`
                  }
                })
              })]
            })]
          }), (0, sp.jsx)(uO, {
            max: Il,
            bands: QU,
            ticks: GU,
            now: Hb,
            settle: pb,
            settleTone: gb ? "bad" : null,
            onExplain: () => {
              lb(`${vU}rxWhy_heat`)
            }
          })]
        }), (0, sp.jsx)(qU, {
          stats: Cb,
          t: Lb,
          explain: lb
        }), Eb > 0 && (0, sp.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            lb(`${vU}rxWhy_perPellet`)
          },
          children: Lb(`${vU}rxPerPellet`, {
            amount: xl(Eb)
          })
        })]
      })
    }

    function iU(bb, wb) {
      var Mb;
      if (!bb.baf2RxStore) return {
        note: wb(`${vU}rxUpTo`, {
          amount: xl(bb.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [eb, Hb] = bb.baf2RxStore, pb = Hb > 0 ? eb / Hb : 0, Vb = String(Math.floor(100 * pb)), gb = null !== (Mb = bb.baf2RxStoreNetPerS) && void 0 !== Mb ? Mb : 0, lb = function(bb) {
        var wb, Mb;
        const [eb, Hb] = null !== (wb = bb.baf2RxStore) && void 0 !== wb ? wb : [0, 0], pb = null !== (Mb = bb.baf2RxStoreNetPerS) && void 0 !== Mb ? Mb : 0;
        return Hb > 0 && eb >= Hb - 1 ? "running" === bb.baf2RxState ? `${IU}rxStoreFull` : `${IU}rxStoreFullOnly` : pb > .05 ? `${IU}rxStoreLine` : pb < -.05 ? "running" === bb.baf2RxState ? `${IU}rxStoreUsesMore` : `${IU}rxStoreDraining` : `${IU}rxStorePct`
      }(bb);
      return {
        note: wb(lb, lb === `${vU}rxStoreLine` ? {
          pct: Vb,
          time: Fp(wb, (Hb - eb) / gb)
        } : {
          pct: Vb
        }),
        share: pb
      }
    }

    function uU(bb) {
      let {
        view: wb,
        explain: Mb,
        preview: eb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)(), {
        status: pb
      } = wb, Vb = ig(dg(...wb.dims)), gb = BU(pb), lb = Math.min(Math.round(pb.baf2RxFuel), Vb.fuel), Lb = "running" === pb.baf2RxState, Ib = Lb ? sU(pb.baf2RxOut, pb.baf2RxMaxNow) : 0, Ob = function(bb, wb, Mb) {
        const eb = CU(bb),
          Hb = "cryo" === eb.ht,
          pb = Mb ? Mb.coolantSecs : eb.pct >= 100 && bb.baf2RxOut >= 1 ? FU(bb, bb.baf2RxThrottle).coolantSecs : null;
        let Vb, gb = !1;
        if (eb.pct < 100) {
          const Mb = 1 === eb.makersShort,
            pb = !Hb && bb.baf2RxCryoOpen ? "OrCryo" : "";
          Vb = eb.makersShort > 0 ? wb(Hb ? `${vU}rxCryoAddMixer${Mb?"":"s"}` : `${vU}rxWaterAddCondenser${Mb?"":"s"}${pb}`, {
            count: String(eb.makersShort)
          }) : wb(`${vU}rxWaterNeeds`, {
            rate: gU(eb.needPerS)
          })
        } else if (null !== pb) Vb = wb(`${vU}rxWaterRunsOut`, {
          time: Fp(wb, pb)
        });
        else if (eb.waterBeside > 0) Vb = wb(`${vU}rxCryoPlusWater`, {
          rate: gU(eb.waterBeside)
        });
        else {
          const bb = function(bb) {
            return bb.inPerS <= 0 ? "rxWaterNoSupply" : bb.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(eb);
          gb = "rxWaterNoSupply" === bb, Vb = wb(`${vU}${bb}`, {
            amount: xl(eb.stored)
          })
        }
        return {
          kind: Hb ? "Cryo" : "Water",
          label: wb(Hb ? `${vU}rxCryo` : `${vU}rxWater`),
          number: `${gU(eb.usePerS)}/s`,
          preview: Mb ? `${gU(Mb.coolPerS)}/s` : null,
          note: Vb,
          tone: "noWater" === bb.baf2RxState ? "danger" : gb ? "warn" : (lb = eb.pct, Lb = pb, lb < 100 ? "danger" : null === Lb ? null : Lb < 300 ? "danger" : "warn"),
          share: eb.pct / 100,
          why: Hb ? `${vU}rxWhy_cryo` : `${vU}rxWhy_water`,
          short: eb.pct < 100
        };
        var lb, Lb
      }(pb, Hb, eb), Ub = Bl(pb, Vb.waste, gb), tb = iU(pb, Hb), Cb = FU(pb, pb.baf2RxTarget), Eb = Lb && Math.abs(Cb.settle - pb.baf2RxHeat) >= 3, Fb = eb ? eb.pelletsPerMin / 60 : null;
      return (0, sp.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, sp.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, sp.jsx)(aO, {
            kind: "Fuel",
            label: Hb(`${vU}rxFuel`),
            number: String(lb),
            preview: null !== Fb && Fb > 0 && pb.baf2RxFuel > 0 ? Fp(Hb, pb.baf2RxFuel / Fb) : null,
            note: pb.baf2RxFuel <= 0 ? Hb(`${vU}rxFuelEmpty`) : gb > 0 ? Hb(`${vU}rxFuelLeft`, {
              time: Fp(Hb, pb.baf2RxFuel / gb)
            }) : Hb(1 === lb ? `${vU}rxFuelPellet` : `${vU}rxFuelPellets`),
            tone: "noFuel" === pb.baf2RxState ? "danger" : pb.baf2RxFuel < 2 ? "warn" : null,
            share: pb.baf2RxFuel / Vb.fuel,
            onExplain: () => {
              Mb(`${vU}rxWhy_fuel`)
            }
          }), (0, sp.jsx)(aO, {
            kind: Ob.kind,
            label: Ob.label,
            number: Ob.number,
            preview: Ob.preview,
            note: Ob.note,
            tone: Ob.tone,
            share: Ob.share,
            onExplain: () => {
              Mb(Ob.why)
            }
          })]
        }), (0, sp.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, sp.jsx)(iO, {
            kind: "Fuel",
            step: Ib,
            short: "noFuel" === pb.baf2RxState
          }), (0, sp.jsx)(iO, {
            kind: Ob.kind,
            step: Ib,
            short: Ob.short || "noWater" === pb.baf2RxState
          })]
        }), (0, sp.jsx)(aU, {
          view: wb,
          heat: pb.baf2RxHeat,
          settle: Math.min(Il, Cb.settle),
          settleLine: Eb ? Hb(`${vU}rxHeatSettles`, {
            pct: String(Math.round(Cb.settle)),
            time: Fp(Hb, Cb.settleS)
          }) : null,
          settleBad: Cb.settle > 100,
          explain: Mb
        }), (0, sp.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, sp.jsx)(iO, {
            kind: "Power",
            step: Ib
          }), (0, sp.jsx)(iO, {
            kind: "Waste",
            step: Lb && pb.baf2RxFuel - pb.baf2RxPu > 0 ? Ib : 0,
            short: Ub.full
          })]
        }), (0, sp.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, sp.jsx)(aO, {
            kind: "Power",
            label: Hb(`${vU}rxPowerOut`),
            number: `\u26a1 ${xl(pb.baf2RxOut)}/s`,
            preview: eb ? xl(eb.out) : null,
            note: tb.note,
            share: tb.share,
            onExplain: () => {
              Mb(`${vU}rxWhy_power`)
            }
          }), (0, sp.jsx)(aO, {
            kind: "Waste",
            label: Hb(`${vU}rxWaste`),
            number: `${Math.floor(pb.baf2RxWaste)}/${Vb.waste}`,
            note: Ub.full ? Hb(`${vU}rxWasteFull`) : null !== Ub.fullInS ? Hb(`${vU}rxWasteFullIn`, {
              time: Fp(Hb, Ub.fullInS)
            }) : Hb(`${vU}rxWasteSpent`),
            tone: "wasteFull" === pb.baf2RxState ? "danger" : Ub.full ? "warn" : null,
            share: pb.baf2RxWaste / Vb.waste,
            onExplain: () => {
              Mb(`${vU}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function dU(bb) {
      let {
        view: wb,
        explain: Mb
      } = bb;
      const {
        t: eb
      } = (0, KH.C)(), Hb = wb.plan;
      if (!Hb) return null;
      const pb = Hb.fuelHeat <= 0 ? null : Hb.cooling > 0 ? Math.min(Il, 100 * Hb.fuelHeat / Hb.cooling) : Il,
        Vb = eb(`${vU}rxPlanAtFull`);
      return (0, sp.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, sp.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, sp.jsx)(aO, {
            kind: "Fuel",
            label: eb(`${vU}rxFuel`),
            number: eb(`${vU}rxPlanPerMin`, {
              amount: jl(Hb.pelletsPerMin)
            }),
            note: eb(`${vU}rxPlanPellets`),
            onExplain: () => {
              Mb(`${vU}rxWhy_fuel`)
            }
          }), (0, sp.jsx)(aO, {
            kind: "Water",
            label: eb(`${vU}rxWater`),
            number: `${gU(Hb.waterPerS)}/s`,
            note: wb.status.baf2RxCryoOpen && Hb.waterPerS > 0 ? eb(`${vU}rxPlanOrCryo`, {
              rate: gU(Vl(Hb, Tb.g) * Tb.o)
            }) : Vb,
            onExplain: () => {
              Mb(`${vU}rxWhy_water`)
            }
          })]
        }), (0, sp.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, sp.jsx)(iO, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, sp.jsx)(iO, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, sp.jsx)(aU, {
          view: wb,
          heat: null,
          settle: pb,
          settleLine: null === pb ? null : eb(`${vU}rxPlanHeat`, {
            pct: String(Math.round(pb))
          }),
          settleBad: null !== pb && pb > 100,
          explain: Mb
        }), (0, sp.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, sp.jsx)(iO, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, sp.jsx)(iO, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, sp.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, sp.jsx)(aO, {
            kind: "Power",
            label: eb(`${vU}rxPowerOut`),
            number: `\u26a1 ${xl(Hb.max)}/s`,
            note: Vb,
            onExplain: () => {
              Mb(`${vU}rxWhy_power`)
            }
          }), (0, sp.jsx)(aO, {
            kind: "Waste",
            label: eb(`${vU}rxWaste`),
            number: eb(`${vU}rxPlanPerMin`, {
              amount: jl(Hb.pelletsPerMin)
            }),
            note: eb(`${vU}rxWasteSpent`),
            onExplain: () => {
              Mb(`${vU}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const PU = "buildAFactory2Game:",
      nU = {
        key: `${PU}rxWaiting`,
        params: {},
        tone: "info"
      };

    function yU(bb, wb) {
      return 0 !== (bb.baf2RxFlags & wb)
    }

    function oU(bb) {
      var wb, Mb;
      let {
        store: Hb,
        close: pb
      } = bb;
      const {
        t: Vb
      } = (0, KH.C)(), gb = HU(Hb), {
        explained: lb,
        hinting: Lb,
        explain: Ib,
        explainOnce: Ob
      } = dO("baf2RxExplained"), Ub = (0, eb.useCallback)(((bb, wb) => {
        Ib(Vb(bb, wb))
      }), [Ib, Vb]), tb = (0, eb.useCallback)(((bb, wb) => {
        Ob(bb, Vb(bb, wb))
      }), [Ob, Vb]), [Cb, Eb] = (0, eb.useState)(!1), [Fb, Bb] = (0, eb.useState)(!1), sb = null === gb || void 0 === gb ? void 0 : gb.status, mb = null === sb || void 0 === sb ? void 0 : sb.baf2RxAt.join(","), hb = !0 === (null === sb || void 0 === sb ? void 0 : sb.baf2RxFormed);
      (0, eb.useEffect)((() => {
        Bb(!1), Eb(!1)
      }), [mb, hb]), (0, eb.useEffect)((() => (Hb.opened(), () => {
        Hb.closed()
      })), [Hb]);
      const zb = void 0 !== sb && yU(sb, Bw),
        Xb = sb ? hb ? Ll(sb) : null !== gb && void 0 !== gb && gb.plan ? function(bb, wb) {
          if (bb <= 0) return "off";
          if (wb <= 0) return "alarm";
          const Mb = 100 * bb / wb;
          return Mb < 50 ? "calm" : Mb < Ml ? "warm" : Mb <= 100 ? "hot" : "alarm"
        }(gb.plan.fuelHeat, gb.plan.cooling) : "off" : "off",
        xb = sb ? Ol(sb) : null,
        jb = gb ? gb.waiting ? nU : hb ? zU(gb.status) : function(bb) {
          var wb, Mb;
          const {
            status: eb
          } = bb;
          return XU({
            left: eb.baf2RxNeed.reduce(((bb, wb) => {
              let [, Mb] = wb;
              return bb + Mb
            }), 0),
            bad: eb.baf2RxBad,
            rods: null !== (wb = null === (Mb = bb.plan) || void 0 === Mb ? void 0 : Mb.rods) && void 0 !== wb ? wb : 0,
            canFill: yU(eb, Ew),
            melted: yU(eb, Cw),
            idle: bb.looks.reduce(((bb, wb) => bb + (wb === Tg ? 1 : 0)), 0)
          })
        }(gb) : null,
        Kb = Lb && null !== jb && ("ok" === jb.tone || "info" === jb.tone),
        rb = sb ? function(bb) {
          const wb = 0 !== (bb.baf2RxFlags & Uw),
            Mb = bb.baf2RxHeat < Gg;
          return 0 !== (bb.baf2RxFlags & Cw) || Mb && (wb || !bb.baf2RxFormed) ? null : bb.baf2RxFormed && !wb ? {
            key: `${ll}rxApartScram`,
            params: {}
          } : {
            key: `${ll}rxApartCooling`,
            params: {
              pct: String(Gg)
            }
          }
        }(sb) : null,
        [Rb, Db, cb] = null !== (wb = null === gb || void 0 === gb ? void 0 : gb.dims) && void 0 !== wb ? wb : [0, 0, 0],
        Yb = `${Rb}\xd7${Db}\xd7${cb}`;
      return (0, sp.jsx)(EV.e, {
        close: pb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, sp.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, sp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, sp.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, sp.jsx)(VU, {
                mood: Xb
              }), (0, sp.jsxs)("div", {
                children: [(0, sp.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Vb(`${PU}rxTitle`)
                }), gb && (0, sp.jsxs)("p", {
                  className: zH()("Baf2RxSubtitle", hb && (null === xb || void 0 === xb ? void 0 : xb.tone)),
                  children: [hb && !zb ? (0, sp.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Vb(`${PU}rxChangeSize`),
                    onClick: () => {
                      if (!sb) return;
                      const bb = yU(sb, Uw);
                      var wb;
                      (wb = {
                        scram: bb,
                        heat: sb.baf2RxHeat
                      }).scram && wb.heat < Gg ? Eb(!0) : Ub(bb ? `${PU}rxResizeCooling` : `${PU}rxResizeHot`, {
                        pct: String(Gg)
                      })
                    },
                    children: [Yb, " \u270e"]
                  }) : Yb, " \xb7 ", Vb(hb ? null !== (Mb = null === xb || void 0 === xb ? void 0 : xb.label) && void 0 !== Mb ? Mb : `${PU}rxState_running` : `${PU}rxSubPlanShort`)]
                })]
              })]
            }), (0, sp.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [gb && !zb && (0, sp.jsx)(pU, {
                kind: "reactor",
                busy: gb.busy.has("apart"),
                whyNot: rb ? () => {
                  Ub(rb.key, rb.params)
                } : null,
                apart: () => {
                  Hb.tap("apart", (() => {
                    Hb.send("apart")
                  }))
                }
              }), (0, sp.jsx)(FV.l, {
                onClick: pb
              })]
            })]
          }), gb && jb && (0, sp.jsxs)("div", {
            className: "Baf2RxBody",
            children: [hb ? (0, sp.jsx)(uU, {
              view: gb,
              explain: Ub,
              preview: EU(gb.status)
            }) : (0, sp.jsx)(dU, {
              view: gb,
              explain: Ub
            }), (0, sp.jsx)(PO, {
              text: Kb ? `${mU(Vb,jb)} ${Vb(`${PU}rxTapHint`)}` : mU(Vb, jb),
              tone: jb.tone,
              explained: lb
            }), zb ? (0, sp.jsxs)(sp.Fragment, {
              children: [(0, sp.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Vb(`${PU}rxNotYours`)
              }), (0, sp.jsx)(bU, {
                status: gb.status,
                store: Hb,
                readOnly: !0
              })]
            }) : hb && !Fb ? (0, sp.jsxs)(sp.Fragment, {
              children: [(0, sp.jsx)(cU, {
                view: gb,
                store: Hb,
                explain: Ub,
                explainOnce: tb
              }), void 0 !== gb.status.baf2RxLayout && oO(gb.status) && (0, sp.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, sp.jsx)(bU, {
                  status: gb.status,
                  store: Hb,
                  readOnly: !1,
                  bare: !0
                }), (0, sp.jsx)(kO, {
                  status: gb.status,
                  store: Hb,
                  busy: gb.busy.has("fill")
                })]
              })]
            }) : (0, sp.jsxs)(sp.Fragment, {
              children: [(0, sp.jsx)(YU, {
                view: gb,
                store: Hb,
                keepSize: hb ? () => {
                  Bb(!1)
                } : void 0
              }), Cl(gb.dims, gb.status.baf2RxDims) && (0, sp.jsx)(ZU, {
                need: gb.status.baf2RxNeed,
                explain: Ub
              }), (0, sp.jsx)(bU, {
                status: gb.status,
                store: Hb,
                readOnly: !1
              })]
            }), Cb && (0, sp.jsx)(eU, {
              id: "baf2ResizeTitle",
              title: `${PU}rxResizeConfirmTitle`,
              body: `${PU}rxResizeConfirmBody`,
              yes: `${PU}rxChangeSize`,
              cancel: () => {
                Eb(!1)
              },
              confirm: () => {
                Eb(!1), Bb(!0)
              }
            })]
          })]
        })
      })
    }
    class TU {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(bb) {
        this.view = bb;
        for (const wb of this.listeners) wb()
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

    function kU(bb) {
      let {
        commands: wb,
        store: Mb,
        power: Hb,
        water: pb,
        reactor: Vb,
        battery: gb,
        collider: lb,
        terminal: Lb,
        quests: Ib,
        tutorial: Ob,
        close: Ub,
        leave: tb,
        askIslands: Cb,
        showCore: Eb,
        openSocial: Fb
      } = bb;
      const {
        userContext: Bb
      } = (0, Rg.e)(), sb = rg.featureFlags.useSocialFeatures && Bb.isLoggedIn(), [mb, hb] = (0, eb.useState)((() => Mb.get()));
      (0, eb.useEffect)((() => Mb.subscribe((() => {
        hb(Mb.get())
      }))), [Mb]);
      const zb = "islands" === (null === mb || void 0 === mb ? void 0 : mb.kind) ? mb.backToCore : void 0;
      return (0, sp.jsxs)(AV.Provider, {
        value: wb,
        children: ["core" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(LO, {
          view: mb.core,
          close: Ub,
          askIslands: Cb
        }), "dropMap" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(tO, {
          message: mb.dropMap,
          quests: Ib,
          close: Ub,
          leave: tb
        }), "islands" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(YO, {
          message: mb.islands,
          arrivedAtMs: mb.arrivedAtMs,
          close: zb ? () => {
            Eb(zb)
          } : Ub,
          leave: tb,
          openSocial: sb ? Fb : null
        }), "quests" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(RI, {
          store: Ib,
          tutorial: Ob,
          close: Ub
        }), "transfer" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(yL, {
          message: mb.transfer,
          arrivedAtMs: mb.arrivedAtMs,
          close: Ub,
          leave: tb
        }), "power" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(jV, {
          store: Hb,
          close: Ub
        }), "water" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(Lg, {
          store: pb,
          close: Ub
        }), "reactor" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(oU, {
          store: Vb,
          close: Ub
        }), "battery" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(AU, {
          store: gb,
          close: Ub
        }), "collider" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(IL, {
          store: lb,
          close: Ub
        }), "terminal" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, sp.jsx)(qO, {
          store: Lb,
          close: Ub,
          send: bb => {
            wb.send(bb)
          }
        })]
      })
    }
    var bt = Mb(39723);

    function wt(bb, wb) {
      return bb.distSq - wb.distSq
    }
    class Mt {
      constructor() {
        this.list = [], this.pool = []
      }
      add(bb, wb, Mb, eb) {
        let Hb = this.pool[this.list.length];
        Hb || (Hb = {
          x: 0,
          y: 0,
          distSq: 0,
          element: wb,
          liftRem: Mb,
          dot: eb
        }, this.pool.push(Hb)), Hb.x = bb.x, Hb.y = bb.y, Hb.distSq = bb.distSq, Hb.element = wb, Hb.liftRem = Mb, Hb.dot = eb, this.list.push(Hb)
      }
    }
    class et {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = bb, this.sizes = new WeakMap, this.observer = new ResizeObserver((bb => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const wb of bb) {
            const bb = wb.borderBoxSize[0];
            "dot" !== wb.target.dataset.crowded && 0 !== bb.inlineSize && 0 !== bb.blockSize && this.sizes.set(wb.target, {
              width: bb.inlineSize,
              height: bb.blockSize
            })
          }
        })), this.remPx = 16, this.nI = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.Rm = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.Rm)
      }
      observe(bb) {
        this.observer.observe(bb)
      }
      unobserve(bb) {
        this.observer.unobserve(bb)
      }
      run(bb) {
        const wb = bb.list;
        wb.sort(wt);
        const Mb = this.pxPerVw,
          eb = this.pxPerVh;
        this.nI.length = 0, this.hud && this.nI.push(...this.hud.boxes(performance.now()));
        for (const pb of wb) {
          var Hb;
          const bb = this.sizes.get(pb.element);
          let wb = "no";
          if (bb && bb.width > 0) {
            const Hb = pb.x * Mb,
              Vb = pb.y * eb - pb.liftRem * this.remPx;
            this.fit(Hb, Vb, bb.width, bb.height) || (wb = pb.dot && this.fit(Hb, Vb, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Hb = pb.element.dataset.crowded) && void 0 !== Hb ? Hb : "no") !== wb && ("no" === wb ? delete pb.element.dataset.crowded : pb.element.dataset.crowded = wb), "hidden" !== wb && (0, bt.b)(pb.element, pb.x, pb.y)
        }
        wb.length = 0
      }
      fit(bb, wb, Mb, eb) {
        const Hb = bb - Mb / 2,
          pb = bb + Mb / 2,
          Vb = wb - eb,
          gb = this.nI;
        for (let lb = 0; lb < gb.length; lb += 4)
          if (Hb < gb[lb + 1] - 2 && pb > gb[lb] + 2 && Vb < gb[lb + 3] - 2 && wb > gb[lb + 2] + 2) return !1;
        return gb.push(Hb, pb, Vb, wb), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.Rm)
      }
    }
    const Ht = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class pt {
      constructor() {
        this.cards = Ht.map((bb => document.getElementsByClassName(bb))), this.watched = Ht.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(bb) {
        bb - this.refreshedAt > 1e3 && (this.refreshedAt = bb, this.stale = !0);
        for (let Mb = 0; Mb < this.cards.length; Mb++) {
          var wb;
          const bb = null !== (wb = this.cards[Mb][0]) && void 0 !== wb ? wb : null;
          bb !== this.watched[Mb] && this.watch(Mb, bb)
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
        for (const wb of this.watched) {
          if (!wb || wb.closest(".NoRoom")) continue;
          const Mb = wb.getBoundingClientRect();
          let eb = Mb.top,
            Hb = Mb.bottom;
          if (wb === this.watched[0] && this.hud) {
            const bb = this.hud.getBoundingClientRect();
            eb = Math.max(eb, bb.top), Hb = Math.min(Hb, bb.bottom)
          }
          Mb.width > 0 && Hb > eb && bb.push(Mb.left, Mb.right, eb, Hb)
        }
      }
      watch(bb, wb) {
        const Mb = this.watched[bb];
        var eb, Hb;
        (Mb && this.sizes.unobserve(Mb), this.watched[bb] = wb, this.stale = !0, wb && this.sizes.observe(wb), 0 === bb) && (null === (eb = this.hud) || void 0 === eb || eb.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Hb = null === wb || void 0 === wb ? void 0 : wb.closest(".Baf2QuestHud")) && void 0 !== Hb ? Hb : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var Vt = Mb(39727);
    class gt {
      constructor(bb) {
        this.onElement = bb, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(bb) {
        const wb = [];
        for (let Mb = 0; Mb + 4 < bb.length; Mb += 5) {
          const eb = [bb[Mb], bb[Mb + 1], bb[Mb + 2]];
          wb.push({
            key: eb.join(","),
            pos: eb,
            status: MH[bb[Mb + 3]],
            kind: Rw[bb[Mb + 4]]
          })
        }
        this.markers = wb, this.keys = new Set(wb.map((bb => {
          let {
            key: wb
          } = bb;
          return wb
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
        let wb = this.refs.get(bb);
        return wb || (wb = wb => {
          const Mb = this.elements.get(bb);
          var eb, Hb;
          Mb && (null === (eb = this.onElement) || void 0 === eb || eb.call(this, Mb, !1));
          wb ? (this.elements.set(bb, wb), null === (Hb = this.onElement) || void 0 === Hb || Hb.call(this, wb, !0)) : (this.elements.delete(bb), this.refs.delete(bb))
        }, this.refs.set(bb, wb)), wb
      }
      onAfterRender(bb, wb, Mb) {
        for (const eb of this.markers) {
          const Hb = this.elements.get(eb.key);
          if (!Hb) continue;
          const pb = (0, Vt.d)(Hb, bb, wb, eb.pos, 1.05, 24);
          pb && Mb.add(pb, Hb, .45, !0)
        }
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
    }
    const lt = {
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
    const Lt = (0, eb.memo)((function(bb) {
        let {
          status: wb,
          kind: Mb,
          bindRef: eb
        } = bb;
        const {
          t: Hb
        } = (0, KH.C)(), pb = function(bb, wb) {
          var Mb;
          if ("noFuel" === bb) {
            var eb, Hb;
            const bb = null === (eb = Ww[wb]) || void 0 === eb || null === (Hb = eb.fuels) || void 0 === Hb ? void 0 : Hb.find((bb => HM.includes(bb)));
            return null !== bb && void 0 !== bb ? bb : lt.noFuel
          }
          return void 0 !== (null === (Mb = Ww[wb]) || void 0 === Mb ? void 0 : Mb.cryoMade) ? "noOutlet" === bb ? "Fluid Pipe" : "noInput" === bb ? "Biomass" : lt[bb] : lt[bb]
        }(wb, Mb);
        return (0, sp.jsxs)("div", {
          className: zH()("Baf2StallMarker", wb),
          ref: eb,
          hidden: !0,
          children: [pb && (0, sp.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, sp.jsx)(RH.c, {
              itemName: pb,
              amount: 0
            })
          }), (0, sp.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === wb ? "?" : "!"
          }), (0, sp.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Hb(`buildAFactory2Game:stallTag_${wb}`)
          })]
        })
      })),
      It = (0, eb.memo)((function(bb) {
        let {
          controller: wb
        } = bb;
        const [Mb, Hb] = (0, eb.useState)((() => wb.get()));
        return (0, eb.useEffect)((() => (Hb(wb.get()), wb.subscribe((() => {
          Hb(wb.get())
        })))), [wb]), (0, sp.jsx)("div", {
          className: "Baf2StallMarkers",
          children: Mb.map((bb => (0, sp.jsx)(Lt, {
            status: bb.status,
            kind: bb.kind,
            bindRef: wb.bind(bb.key)
          }, bb.key)))
        })
      })),
      Ot = FM.k + 150;
    class Ut {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(bb, wb) {
        const Mb = wb - bb;
        null === this.offset || Mb < this.offset ? this.offset = Mb : this.offset = Math.min(Mb, this.offset + .02 * (wb - this.sampledAt)), this.sampledAt = wb
      }
      toLocal(bb) {
        var wb;
        return bb + (null !== (wb = this.offset) && void 0 !== wb ? wb : 0) + Ot
      }
    }
    var tt = Mb(39736);
    const Ct = 15 * Math.PI / 180,
      Et = Math.SQRT2,
      Ft = [4, 2];

    function Bt(bb, wb) {
      const Mb = [1 / 0, 1 / 0, 1 / 0],
        eb = [-1 / 0, -1 / 0, -1 / 0];
      for (const lb of bb)
        for (let bb = 0; bb < 3; bb++) Mb[bb] = Math.min(Mb[bb], lb[bb]), eb[bb] = Math.max(eb[bb], lb[bb]);
      const Hb = (Mb[0] + eb[0]) / 2,
        pb = (Mb[1] + eb[1]) / 2,
        Vb = (Mb[2] + eb[2]) / 2;
      let gb = 0;
      for (const lb of bb) gb = Math.max(gb, Math.hypot(lb[0] - Hb, lb[1] - pb, lb[2] - Vb));
      return {
        x: Hb,
        y: pb,
        z: Vb,
        r: gb + wb
      }
    }

    function st(bb, wb, Mb) {
      const eb = wb.x - bb.x,
        Hb = wb.y - bb.y,
        pb = wb.z - bb.z,
        Vb = Math.sqrt(eb * eb + Hb * Hb + pb * pb);
      if (Vb <= wb.r + 8) return 1;
      const gb = wb.r / Vb,
        lb = Math.sqrt(1 - gb * gb),
        Lb = lb < -bb.cosHalf,
        Ib = (eb * bb.dx + Hb * bb.dy + pb * bb.dz) / Vb;
      if (!Lb && Ib < bb.cosHalf * lb - bb.sinHalf * gb) return 0;
      const Ob = Mb * Et * bb.frameMs * bb.pxPerBlock / (Vb - wb.r);
      for (let Ub = 0; Ub < Ft.length; Ub++)
        if (Ob * Ft[Ub] <= 1) return Ft[Ub];
      return 1
    }

    function mt(bb, wb) {
      return {
        name: bb,
        at: wb,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const ht = [0, 0, 0];

    function zt(bb, wb, Mb) {
      let [, eb, Hb, pb, Vb, gb] = wb;
      const lb = FM.g * (null !== Vb && void 0 !== Vb ? Vb : 1),
        Lb = [];
      for (let tb = 0; tb < eb.length; tb += 3) Lb.push([eb[tb] + .5, eb[tb + 1] + .65, eb[tb + 2] + .5]);
      const Ib = [];
      for (let tb = 0; tb < Lb.length - 1; tb++) {
        const [bb, wb] = [Lb[tb], Lb[tb + 1]];
        Ib.push([(bb[0] + wb[0]) / 2, (bb[1] + wb[1]) / 2, (bb[2] + wb[2]) / 2])
      }
      const Ob = Lb.slice(1, -1),
        Ub = new Uint8Array(Ob.length);
      for (const tb of null !== gb && void 0 !== gb ? gb : []) Ub[tb >> 1] |= 1 & tb ? 2 : 1;
      return {
        island: bb,
        length: Ob.length,
        loop: pb,
        cellsPerMs: lb,
        edges: Ib,
        wF: Ob,
        bounds: Bt([...Ib, ...Ob], .3),
        changed: !0,
        culled: !1,
        hide: Ub,
        items: Hb.map((bb => {
          let [wb, eb] = bb;
          return mt(wb, (0, FM.A)(wb, eb, Mb, lb).at)
        }))
      }
    }

    function Xt(bb, wb) {
      const {
        items: Mb
      } = bb;
      if (0 === Mb.length) return;
      const eb = bb.length / bb.cellsPerMs,
        Hb = Math.floor((wb - Mb[0].at) / eb) - 1;
      if (Hb > 0)
        for (const pb of Mb) pb.at += Hb * eb
    }

    function xt(bb, wb) {
      const Mb = Math.min(Math.floor(wb), bb.length - 1),
        eb = bb.hide[Mb];
      return 0 !== eb && 0 !== (eb & (wb - Mb < .5 ? 1 : 2))
    }

    function jt(bb, wb) {
      const Mb = Math.min(Math.floor(wb), bb.length - 1),
        eb = wb - Mb,
        Hb = eb < .5,
        pb = Hb ? bb.edges[Mb] : bb.wF[Mb],
        Vb = Hb ? bb.wF[Mb] : bb.edges[Mb + 1],
        gb = Hb ? 2 * eb : 2 * eb - 1;
      ht[0] = pb[0] + (Vb[0] - pb[0]) * gb, ht[1] = pb[1] + (Vb[1] - pb[1]) * gb, ht[2] = pb[2] + (Vb[2] - pb[2]) * gb
    }
    const Kt = Math.PI / 4;
    class rt {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Ut, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.Rm = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(bb) {
        const wb = performance.now();
        this.clock.sample(bb.baf2BeltLinesAt, wb), this.queue(bb.baf2BeltLinesAt, bb, 0, null, null, 0), this.applyDue(wb)
      }
      onMoves(bb) {
        const wb = performance.now(),
          Mb = bb.baf2BeltMovesAt;
        this.clock.sample(Mb, wb);
        for (const [eb, Hb, pb, Vb] of bb.baf2BeltMoveList) null === Hb ? this.queue(Mb - pb, null, eb, null, null, null !== Vb && void 0 !== Vb ? Vb : 0) : this.queue(Mb - pb, null, eb, Hb, null !== Vb && void 0 !== Vb ? Vb : null, 0);
        this.applyDue(wb)
      }
      start(bb) {
        this.pool = new tt.e(bb, {
          scale: .3,
          yaw: Kt
        }, 64), this.Rm(), window.addEventListener("resize", this.Rm)
      }
      onAfterRender(bb) {
        const {
          pool: wb
        } = this;
        if (!wb) return;
        const Mb = performance.now(),
          eb = Mb - this.lastRenderAt;
        this.lastRenderAt = Mb, eb < 100 && (this.frameMs += .1 * (eb - this.frameMs));
        const Hb = Mb + this.frameMs;
        this.applyDue(Hb);
        const pb = bb.cameraPosition,
          Vb = wb.follow(pb);
        this.setView(bb, pb);
        const gb = this.frame++;
        for (let lb = 0; lb < this.shown.length; lb++) {
          const bb = this.shown[lb],
            Mb = st(this.view, bb.bounds, bb.cellsPerMs),
            eb = bb.culled && 0 !== Mb;
          if (bb.culled = 0 === Mb, !Vb && !bb.changed && !eb && (0 === Mb || (gb + lb) % Mb !== 0)) continue;
          bb.changed = !1, bb.loop && (Xt(bb, Hb), (0, FM.w)(bb.items, bb.length, Hb, bb.cellsPerMs));
          let pb = bb.length;
          for (let gb = 0; gb < bb.items.length; gb++) {
            const Mb = bb.items[gb],
              eb = (0, FM.D)(Mb.at, pb, Hb, bb.cellsPerMs);
            if (pb = eb - FM.n, xt(bb, eb)) {
              null === Mb.kind || Mb.hidden || (Mb.kind.hide(Mb.slot), Mb.hidden = !0);
              continue
            }
            let lb = Mb.kind;
            if (null === lb) {
              if (lb = wb.kindOf(Mb.name), null === lb) continue;
              Mb.kind = lb, Mb.slot = lb.take(), Mb.hidden = !0, Mb.drawn = NaN
            } else if (eb === Mb.drawn && !Mb.hidden && !Vb) continue;
            jt(bb, eb), lb.write(Mb.slot, ht[0], ht[1], ht[2]), Mb.hidden = !1, Mb.drawn = eb
          }
        }
        wb.commit()
      }
      dispose() {
        var bb;
        window.removeEventListener("resize", this.Rm), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (bb = this.pool) || void 0 === bb || bb.dispose(), this.pool = null
      }
      setView(bb, wb) {
        const {
          cameraDir: Mb,
          lastDir: eb
        } = this, Hb = bb.cameraDirection;
        for (let Ib = 0; Ib < 3; Ib++) eb[Ib] = Mb[Ib], Mb[Ib] = Hb[Ib];
        const pb = Mb[0] * eb[0] + Mb[1] * eb[1] + Mb[2] * eb[2],
          Vb = Number.isNaN(pb) ? 0 : Math.acos(Math.min(1, Math.max(-1, pb))),
          {
            width: gb,
            height: lb
          } = this,
          Lb = bb.tanHalfFovX;
        ! function(bb, wb, Mb, eb, Hb, pb, Vb) {
          let gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          bb.x = wb[0], bb.y = wb[1], bb.z = wb[2], bb.dx = Mb[0], bb.dy = Mb[1], bb.dz = Mb[2];
          const lb = Math.min(Math.PI, Math.atan(Math.sqrt(eb * eb + Hb * Hb)) + Ct + gb);
          bb.cosHalf = Math.cos(lb), bb.sinHalf = Math.sin(lb), bb.pxPerBlock = pb / (2 * Hb), bb.frameMs = Vb
        }(this.view, wb, Mb, Lb, Lb * lb / gb, lb * window.devicePixelRatio, this.frameMs, Vb)
      }
      queue(bb, wb, Mb, eb, Hb, pb) {
        const Vb = Math.max(this.clock.toLocal(bb), this.lastPendingAt);
        this.lastPendingAt = Vb, this.pending.push({
          at: Vb,
          lines: wb,
          line: Mb,
          name: eb,
          pos: Hb,
          idx: pb
        })
      }
      applyDue(bb) {
        const {
          pending: wb
        } = this;
        for (; this.pendingHead < wb.length && wb[this.pendingHead].at <= bb;) {
          const bb = wb[this.pendingHead++];
          if (bb.lines) this.applyLines(bb.lines, bb.at), bb.lines = null;
          else {
            const wb = this.lines.get(bb.line);
            wb && this.applyMove(wb, bb, bb.at)
          }
        }
        this.pendingHead === wb.length ? (wb.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > wb.length && (wb.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(bb, wb) {
        this.clearIsland(bb.baf2BeltIsland);
        for (const Mb of bb.baf2BeltLineList) this.lines.set(Mb[0], zt(bb.baf2BeltIsland, Mb, wb));
        this.shown = [...this.lines.values()]
      }
      applyMove(bb, wb, Mb) {
        let {
          name: eb,
          pos: Hb,
          idx: pb
        } = wb;
        bb.changed = !0, bb.loop && (Xt(bb, Mb), (0, FM.w)(bb.items, bb.length, Mb, bb.cellsPerMs)), null !== eb && null !== Hb ? (0, FM.z)(bb.items, bb.length, mt(eb, Mb), Hb, Mb, bb.cellsPerMs) : null !== eb ? bb.items.push(mt(eb, Mb)) : bb.items.length > pb && this.release((0, FM.E)(bb.items, bb.length, Mb, bb.cellsPerMs, pb))
      }
      clearIsland(bb) {
        for (const [wb, Mb] of this.lines)
          if (Mb.island === bb) {
            for (const bb of Mb.items) this.release(bb);
            this.lines.delete(wb)
          }
      }
      release(bb) {
        null !== bb.kind && (bb.kind.release(bb.slot), bb.kind = null, bb.slot = -1, bb.hidden = !0, bb.drawn = NaN)
      }
    }
    var Rt = Mb(37898),
      Dt = Mb(39752);

    function ct(bb) {
      let {
        depth: wb,
        store: Mb,
        t: Hb
      } = bb;
      const pb = function(bb) {
        const [wb, Mb] = (0, eb.useState)(bb.lastPlayerY());
        return (0, oL.e)(WH, Mb), (0, eb.useEffect)((() => {
          Mb(bb.lastPlayerY())
        }), [bb]), wb
      }(Mb);
      if (null === pb) return null;
      const [Vb, gb] = wb, lb = pb > Vb ? Vb : null !== gb && pb < gb ? gb : null, Lb = {
        y: Ep(pb),
        target: null === lb ? "" : Ep(lb)
      };
      return (0, sp.jsx)("span", {
        className: zH()("Baf2QuestDepth", {
          Reached: null === lb
        }),
        children: Hb(`${wI}${null===lb?"questDepthReached":"questDepth"}`, Lb)
      })
    }

    function Yt(bb) {
      let {
        also: wb,
        view: Mb,
        t: eb
      } = bb;
      return (0, sp.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, sp.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, sp.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, sp.jsx)("strong", {
            children: eb(`${wI}questAlsoDownHere`)
          }), (0, sp.jsx)("span", {
            className: "Baf2QuestChips",
            children: wb.map((bb => {
              let [wb, Hb, pb, Vb] = bb;
              return (0, sp.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": eb(`${wI}questAlsoItem`, {
                  item: eI(eb, Mb.itemNames[wb], wb),
                  have: String(Hb),
                  need: String(pb)
                }),
                children: [(0, sp.jsx)(VI, {
                  item: wb
                }), (0, sp.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Hb}/${pb}`
                }), null !== Vb && (0, sp.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: eb(`${wI}questAlsoDepth`, {
                    y: Ep(Vb)
                  })
                })]
              }, wb)
            }))
          })]
        })]
      })
    }
    var Zt = Mb(4792);

    function ft(bb) {
      let {
        expanded: wb,
        inventoryOpen: Mb,
        children: Hb
      } = bb;
      const pb = (0, eb.useRef)(null);
      return (0, eb.useEffect)((() => {
        const bb = pb.current,
          wb = null === bb || void 0 === bb ? void 0 : bb.closest(".RightElements"),
          eb = null === bb || void 0 === bb ? void 0 : bb.firstElementChild;
        if (!bb || !wb || !eb) return;
        return (0, Dt.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [wb, eb], (() => {
          const Hb = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Hb.length) return;
          const pb = Math.max(...Hb.map((bb => bb.getBoundingClientRect().bottom))),
            Vb = wb.getBoundingClientRect(),
            gb = Mb ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (gb) {
            const wb = parseFloat(getComputedStyle(eb).marginLeft) + parseFloat(getComputedStyle(eb).marginRight),
              Mb = Vb.right - gb.getBoundingClientRect().right - 8 - wb;
            bb.style.setProperty("--baf2-quest-room", `${Mb}px`), bb.classList.toggle("NoRoom", Mb < 150)
          } else bb.style.removeProperty("--baf2-quest-room"), bb.classList.remove("NoRoom");
          const lb = pb - Vb.top + 8,
            Lb = function(bb, wb, Mb) {
              const eb = wb.getBoundingClientRect(),
                Hb = bb.getBoundingClientRect(),
                pb = (0, Zt.h)(Hb.left, Hb.right, eb.top + Mb);
              if (null !== pb && pb < eb.bottom) return pb - eb.top;
              return eb.height - (parseFloat(getComputedStyle(wb).paddingBottom) || 0)
            }(bb, wb, lb) - 8,
            Ib = window.innerHeight / 2 - Vb.top,
            {
              top: Ob,
              maxHeight: Ub
            } = function(bb, wb, Mb, eb, Hb) {
              const pb = Math.min(Mb, Math.max(0, wb - bb)),
                Vb = Hb ? bb : Math.max(bb, Math.min(eb - pb / 2, wb - pb));
              return {
                top: Vb,
                maxHeight: Math.max(0, wb - Vb)
              }
            }(lb, Lb, function(bb) {
              const wb = bb.firstElementChild,
                Mb = wb ? wb.scrollHeight - wb.clientHeight : 0;
              return bb.getBoundingClientRect().height + Math.max(0, Mb)
            }(eb), Ib, (0, Bp.d)());
          bb.style.top = `${Ob}px`, bb.style.maxHeight = `${Ub}px`
        }))
      }), [Mb]), (0, sp.jsx)("div", {
        ref: pb,
        className: zH()("Baf2QuestHud", {
          Expanded: wb
        }),
        children: Hb
      })
    }

    function At(bb) {
      let {
        amount: wb,
        t: Mb
      } = bb;
      return (0, sp.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, sp.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, sp.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: Mb(`${wI}questStepsDone`, {
            amount: String(wb)
          })
        })]
      })
    }

    function Wt(bb) {
      let {
        pulse: wb
      } = bb;
      return 0 === wb ? null : (0, sp.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, wb)
    }

    function Jt(bb) {
      var wb;
      let {
        store: Mb
      } = bb;
      const Hb = (0, oL.h)(AH, Mb.get()),
        [pb, Vb] = (0, eb.useState)(!1),
        {
          t: gb
        } = (0, KH.C)(),
        lb = (0, Bp.h)(),
        {
          openInGameMenuName: Lb,
          openEverythingMenuName: Ib
        } = (0, sH.o)(["openInGameMenuName", "openEverythingMenuName"]),
        Ob = "inventory" === Lb && null === Ib,
        Ub = null !== Lb && !Ob || null !== Ib;
      if (! function(bb) {
          return null !== bb.name || null !== bb.side
        }(Hb) || Ub || "off" === Hb.tutorial) return null;
      const tb = GH(Hb.rows),
        Cb = tb.filter((bb => bb.done)).length,
        Eb = function(bb, wb) {
          const Mb = iH(bb);
          let eb = 0;
          return bb.filter(((bb, Hb) => !!bb.justFinished || !(bb.done || Hb < Mb || eb > wb) && (eb++, !0)))
        }(Hb.rows, lb ? 0 : 2),
        Fb = lb ? Eb : function(bb, wb) {
          const Mb = wb.filter((bb => !bb.justFinished));
          if (Mb.length < 2) return [...wb];
          const eb = bb.indexOf(Mb[0]),
            Hb = bb.indexOf(Mb[Mb.length - 1]),
            pb = new Set(GH(bb));
          return bb.filter(((bb, Mb) => wb.includes(bb) || bb.done && pb.has(bb) && Mb > eb && Mb < Hb))
        }(Hb.rows, Eb),
        Bb = pb ? Hb.rows : Fb,
        sb = pb || lb ? [] : function(bb, wb) {
          const Mb = new Array(wb.length + 1).fill(0),
            eb = new Set(GH(bb));
          let Hb = 0;
          for (const pb of bb) Hb < wb.length && pb === wb[Hb] ? Hb++ : pb.done && eb.has(pb) && Mb[Hb]++;
          return Mb
        }(Hb.rows, Fb),
        mb = pb || Fb.length < Hb.rows.length || null !== Hb.reward,
        hb = QH(Hb),
        zb = hb ? gb(`${wI}questLineComplete`) : Hb.tier ? LI(gb, Hb.tier) : gb(`${wI}currentQuest`),
        Xb = function(bb) {
          var wb, Mb;
          if (QH(bb)) return null;
          const eb = null === (wb = bb.chapters) || void 0 === wb ? void 0 : wb.find((wb => {
            let [Mb] = wb;
            return Mb === bb.tier
          }));
          if (!eb) return null;
          const Hb = eb[1].filter((bb => !bb[4]));
          if (0 === Hb.length) return null;
          const pb = null === (Mb = bb.name) || void 0 === Mb ? void 0 : Mb[0],
            Vb = bb => Hb.findIndex((wb => wb[0] === pb && (!bb || !wb[3]))),
            gb = Vb(!0),
            lb = gb >= 0 ? gb : Vb(!1);
          if (lb >= 0) return [lb + 1, Hb.length];
          const Lb = Hb.filter((bb => bb[3])).length;
          return [Math.min(Lb + 1, Hb.length), Hb.length]
        }(Hb);
      return (0, sp.jsx)(Rt.d, {
        placement: "topRight",
        children: (0, sp.jsx)(ft, {
          expanded: pb,
          inventoryOpen: Ob,
          children: (0, sp.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: MI,
            children: [null !== Hb.name && (0, sp.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, sp.jsx)(Wt, {
                pulse: Hb.pulse
              }), (0, sp.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, sp.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [zb, Xb && (0, sp.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": gb(`${wI}questPlaceLabel`, {
                      n: String(Xb[0]),
                      total: String(Xb[1])
                    }),
                    children: gb(`${wI}questPlace`, {
                      n: String(Xb[0]),
                      total: String(Xb[1])
                    })
                  }), Hb.tier && Hb.core && !hb && (0, sp.jsx)(II, {
                    core: Hb.core,
                    t: gb
                  })]
                })
              }), (0, sp.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: gb(`${wI}${Hb.name[0]}`, HI(Hb.name[1]))
              }), (tb.length > 1 || mb) && (0, sp.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [tb.length > 1 && (0, sp.jsx)(OI, {
                  rows: tb,
                  t: gb
                }), mb && (0, sp.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": pb,
                  onClick: () => {
                    Vb(!pb)
                  },
                  children: [(0, sp.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: gb(`${wI}questStepsToggle`, {
                      done: String(Cb),
                      total: String(tb.length)
                    })
                  }), (0, sp.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: pb ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, sp.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [Bb.map(((bb, wb) => {
                  var pb;
                  const Vb = bb.current && Hb.depth;
                  return (0, sp.jsxs)(eb.Fragment, {
                    children: [(null !== (pb = sb[wb]) && void 0 !== pb ? pb : 0) > 0 && (0, sp.jsx)(At, {
                      amount: sb[wb],
                      t: gb
                    }), (0, sp.jsx)(UI, {
                      row: bb,
                      view: Hb,
                      t: gb,
                      extra: Vb && (0, sp.jsx)(ct, {
                        depth: Vb,
                        store: Mb,
                        t: gb
                      })
                    })]
                  }, bb.id)
                })), (null !== (wb = sb[Bb.length]) && void 0 !== wb ? wb : 0) > 0 && (0, sp.jsx)(At, {
                  amount: sb[Bb.length],
                  t: gb
                }), Hb.also.length > 0 && (0, sp.jsx)(Yt, {
                  also: Hb.also,
                  view: Hb,
                  t: gb
                })]
              }), pb && Hb.reward && (0, sp.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [gb(`${wI}questReward`), (0, sp.jsx)(VI, {
                  item: Hb.reward
                }), eI(gb, Hb.itemNames[Hb.reward], Hb.reward)]
              })]
            }), Hb.side && (0, sp.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [NH(Hb, Date.now()) && (0, sp.jsx)(Wt, {
                pulse: Hb.sideCameUpAt
              }), (0, sp.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: gb(`${wI}questSide`)
              }), (0, sp.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: gb(`${wI}${Hb.side.name[0]}`, HI(Hb.side.name[1]))
              }), (0, sp.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, sp.jsx)(UI, {
                  row: Hb.side.row,
                  view: Hb,
                  t: gb
                })
              })]
            })]
          })
        })
      })
    }
    const St = "baf2ToastView";
    class Nt {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = bb, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: bb,
          holdMs: wb
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const bb = this.dropCovered();
          bb && this.show(bb.message, bb.holdMs)
        }), 250));
        const Mb = this.dropCovered();
        null !== Mb && (Mb.holdMs > 0 || "baf2ToastCelebrate" === Mb.message.baf2ToastStyle) && "baf2ToastCelebrate" !== bb.baf2ToastStyle && this.show(Mb.message, Mb.holdMs);
        const eb = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== bb.baf2ToastStyle && eb > 0) return this.pending = {
          message: bb,
          holdMs: wb
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const bb = this.pending;
          this.pending = null, bb && this.present(bb.message, bb.holdMs)
        }), eb));
        this.present(bb, wb)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(bb, wb) {
        this.clearTimers(), this.pending = null;
        const Mb = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: bb.baf2ToastText,
          style: bb.baf2ToastStyle,
          swapped: Mb,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === bb.baf2ToastStyle ? 1500 : wb), this.iI();
        const eb = Math.min(8e3, Math.max(1e3, bb.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), eb)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.iI(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.iI()
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
      iI() {
        ZH.k.iI(St, this.view, !0)
      }
    }
    var vt = Mb(81);
    const Qt = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Gt(bb) {
      let {
        store: wb
      } = bb;
      const Mb = (0, oL.h)(St, wb.get()),
        {
          openInGameMenuName: eb,
          openEverythingMenuName: Hb
        } = (0, sH.o)(["openInGameMenuName", "openEverythingMenuName"]),
        pb = Mb && (0, sp.jsxs)("div", {
          className: zH()("Baf2Toast", Qt[Mb.style], {
            Swapped: Mb.swapped,
            Leaving: Mb.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === Mb.style && (0, sp.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, sp.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, sp.jsx)(DH.d, {
              text: Mb.text
            })
          })]
        }, Mb.id);
      return null !== eb && null === Hb ? (0, vt.createPortal)((0, sp.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: pb
      }), document.body) : (0, sp.jsx)(Rt.d, {
        children: pb
      })
    }
    const qt = "baf2AreaView";
    class it {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.dg = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.dg = null
      }
      arrive(bb, wb) {
        wb && function(bb) {
          return "home" === bb.baf2AreaPlace && void 0 !== bb.baf2AreaNameText
        }(bb) ? this.dg = bb : this.show(bb)
      }
      release() {
        const bb = this.dg;
        null !== bb && this.show(bb)
      }
      show(bb) {
        this.clearTimer(), this.dg = null;
        const wb = void 0 === bb.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: bb,
          ms: wb
        }, this.iI(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.iI()
        }), wb)
      }
      dispose() {
        this.clearTimer(), this.dg = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      iI() {
        ZH.k.iI(qt, this.view, !0)
      }
    }

    function ut(bb) {
      var wb;
      let {
        store: Mb
      } = bb;
      const {
        t: eb
      } = (0, KH.C)(), Hb = (0, oL.h)(qt, Mb.get());
      if (!Hb) return null;
      const {
        area: pb
      } = Hb, Vb = pb.baf2AreaResetMinutes;
      return (0, sp.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": pb.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Hb.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, sp.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), pb.baf2AreaHeading && (0, sp.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: eb(pb.baf2AreaHeading)
        }), (0, sp.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (wb = pb.baf2AreaNameText) && void 0 !== wb ? wb : eb(pb.baf2AreaName)
        }), pb.baf2AreaNote && (0, sp.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: eb(pb.baf2AreaNote)
        }), void 0 !== Vb && (0, sp.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: eb("buildAFactory2Game:areaWildsReset", {
            time: Fp(eb, 60 * Vb)
          })
        })]
      }, Hb.id)
    }
    const dt = "baf2GearGauge";
    class Pt {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      Tm(bb) {
        var wb;
        if (this.clearLinger(), null === bb.gearPowerKind) return void this.set(null);
        const Mb = "jetpack" === bb.gearPowerKind && (eb = bb.gearChargeState, Hb = bb.gearCharge, "flying" === eb || "charging" === eb || "outOfCharge" === eb || "ceiling" === eb || "offPlot" === eb || "noPower" === eb && Hb <= 0);
        var eb, Hb;
        const pb = !0 === (null === (wb = this.view) || void 0 === wb ? void 0 : wb.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Vb = Mb || "jetpack" === bb.gearPowerKind && pb;
        this.set({
          gauge: bb,
          jetShown: Vb
        }), Vb && !Mb && (this.lingerTimer = setTimeout((() => {
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
        this.view = bb, ZH.k.iI(dt, bb, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const nt = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function yt(bb) {
      let {
        store: wb
      } = bb;
      const Mb = (0, oL.h)(dt, wb.get());
      return Mb ? "jetpack" === Mb.gauge.gearPowerKind ? (0, sp.jsx)(ot, {
        view: Mb
      }) : (0, sp.jsx)(Tt, {
        gauge: Mb.gauge
      }) : null
    }

    function ot(bb) {
      let {
        view: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)(), {
        gauge: eb
      } = wb, Hb = eb.gearChargeMax > 0 ? Math.max(0, Math.min(1, eb.gearCharge / eb.gearChargeMax)) : 0, pb = nt[eb.gearChargeState], Vb = pb ? Mb(pb) : null;
      return (0, sp.jsxs)("div", {
        className: zH()("Baf2JetArc", {
          Shown: wb.jetShown,
          Low: Hb < .2,
          Warm: Hb >= .2 && Hb < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Hb)
        },
        "aria-hidden": !wb.jetShown,
        children: [(0, sp.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, sp.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: kt,
            pathLength: 100
          }), (0, sp.jsx)("path", {
            className: "Baf2JetArcFill",
            d: kt,
            pathLength: 100
          })]
        }), (0, sp.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Hb), "%"]
        }), Vb && (0, sp.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Vb
        })]
      })
    }

    function Tt(bb) {
      let {
        gauge: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)(), eb = function(bb, wb) {
        switch (wb.gearPowerKind) {
          case "skyPack":
            return bb("buildAFactory2Game:gearSkyPack", {
              charge: wb.gearCharge,
              max: wb.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return bb("buildAFactory2Game:gearIslandDraw", {
              power: ob(wb.gearIslandPower),
              cost: ob(wb.gearCostPerUse)
            });
          case "barrier":
            return bb("buildAFactory2Game:gearBarrier", {
              shield: Math.round(wb.gearCharge),
              max: wb.gearChargeMax,
              power: ob(wb.gearIslandPower)
            });
          default:
            return null
        }
      }(Mb, wb);
      return null === eb ? null : (0, sp.jsx)(Rt.d, {
        children: (0, sp.jsx)("div", {
          className: zH()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === wb.gearChargeState || "outOfCharge" === wb.gearChargeState
          }),
          role: "status",
          children: eb
        })
      })
    }
    const kt = (() => {
      const bb = bb => {
        const wb = bb * Math.PI / 180;
        return `${(40*Math.cos(wb)).toFixed(2)} ${(40*Math.sin(wb)).toFixed(2)}`
      };
      return `M ${bb(160)} A 40 40 0 1 1 ${bb(380)}`
    })();
    class bC {
      constructor(bb) {
        this.onElement = bb, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      Tm(bb) {
        let wb = bb.baf2LabelsReset || bb.baf2LabelsIsland !== this.island;
        wb && (this.labels.clear(), this.island = bb.baf2LabelsIsland);
        for (const [Mb, eb, Hb, pb, Vb] of bb.baf2LabelsList) {
          const bb = `${Mb},${eb},${Hb}`,
            gb = this.labels.get(bb);
          null === pb ? wb = this.labels.delete(bb) || wb : gb && gb.item === pb && (gb.count === Vb || gb.count >= 0 && Vb >= 0) ? gb.count !== Vb && (gb.count = Vb, this.writeCount(bb, Vb)) : (this.labels.set(bb, {
            key: bb,
            pos: [Mb, eb, Hb],
            item: pb,
            count: Vb
          }), this.writeCount(bb, Vb), wb = !0)
        }
        if (this.changes++, wb) {
          this.snapshot = [...this.labels.values()];
          for (const bb of this.listeners) bb()
        }
      }
      bindCount(bb) {
        const wb = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${bb}`;
        let Mb = this.countRefs.get(wb);
        return Mb || (Mb = Mb => {
          var eb, Hb;
          Mb ? (this.countElements.set(wb, Mb), this.writeCount(bb, null !== (eb = null === (Hb = this.labels.get(bb)) || void 0 === Hb ? void 0 : Hb.count) && void 0 !== eb ? eb : -1)) : (this.countElements.delete(wb), this.countRefs.delete(wb))
        }, this.countRefs.set(wb, Mb)), Mb
      }
      setCountWords(bb) {
        this.countWords = bb;
        for (const [wb, Mb] of this.labels) this.writePart(`words|${wb}`, bb(Mb.count), Mb.count)
      }
      writeCount(bb, wb) {
        this.writePart(`bare|${bb}`, Cp(wb), wb), this.countElements.has(`words|${bb}`) && this.writePart(`words|${bb}`, this.countWords(wb), wb)
      }
      writePart(bb, wb, Mb) {
        const eb = this.countElements.get(bb);
        if (!eb || Mb < 0) return;
        const Hb = eb.firstChild;
        Hb && 3 === Hb.nodeType && !Hb.nextSibling ? Hb.nodeValue !== wb && (Hb.nodeValue = wb) : eb.textContent !== wb && (eb.textContent = wb)
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
        let wb = this.refs.get(bb);
        return wb || (wb = wb => {
          const Mb = this.elements.get(bb);
          var eb, Hb;
          Mb && (null === (eb = this.onElement) || void 0 === eb || eb.call(this, Mb, !1));
          wb ? (this.elements.set(bb, wb), null === (Hb = this.onElement) || void 0 === Hb || Hb.call(this, wb, !0)) : (this.elements.delete(bb), this.refs.delete(bb))
        }, this.refs.set(bb, wb)), wb
      }
      onAfterRender(bb, wb, Mb, eb) {
        for (const Hb of this.snapshot) {
          const pb = this.elements.get(Hb.key);
          if (!pb) continue;
          if (eb(Hb.key)) {
            (0, bt.f)(pb, !0);
            continue
          }
          const Vb = (0, Vt.d)(pb, bb, wb, Hb.pos, 1.1, 24);
          Vb && Mb.add(Vb, pb, 0, !1)
        }
      }
    }
    const wC = (0, eb.memo)((function(bb) {
        let {
          item: wb
        } = bb;
        return (0, sp.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, sp.jsx)(RH.c, {
            itemName: wb,
            amount: 0
          })
        })
      })),
      MC = (0, eb.memo)((function(bb) {
        let {
          label: wb,
          bindRef: Mb,
          countRef: eb,
          wordsRef: Hb
        } = bb;
        return (0, sp.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: Mb,
          hidden: !0,
          children: [(0, sp.jsx)(wC, {
            item: wb.item
          }), wb.count >= 0 && (0, sp.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, sp.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Hb
            }), (0, sp.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: eb
            })]
          })]
        })
      })),
      eC = (0, eb.memo)((function(bb) {
        let {
          store: wb
        } = bb;
        const {
          t: Mb
        } = (0, KH.C)(), [Hb, pb] = (0, eb.useState)((() => wb.list()));
        return (0, eb.useEffect)((() => (pb(wb.list()), wb.subscribe((() => {
          pb(wb.list())
        })))), [wb]), (0, eb.useEffect)((() => {
          wb.setCountWords((bb => Mb("buildAFactory2Game:labelSiloCount", {
            count: Cp(bb)
          })))
        }), [wb, Mb]), (0, sp.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Hb.map((bb => -2 === bb.count ? null : (0, sp.jsx)(MC, {
            label: bb,
            bindRef: wb.bind(bb.key),
            countRef: wb.bindCount(bb.key),
            wordsRef: wb.bindCount(bb.key, "words")
          }, bb.key)))
        })
      })),
      HC = {
        read: () => !0,
        write: () => {}
      };

    function pC(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }

    function VC(bb) {
      let [wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub] = bb;
      const tb = void 0 === Ob || void 0 === Ub ? function(bb) {
        return [Math.floor((bb - 1) / 2), 0]
      }(pb) : [Ob, Ub];
      return {
        kind: 0 === lb ? "reactor" : "battery",
        box: aM([wb, Mb, eb], Hb, pb, Vb, gb, tb),
        formed: 1 === Lb,
        level: Ib
      }
    }
    class gC {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HC;
        this.guideSetting = bb, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = bb.read()
      }
      Tm(bb) {
        var wb;
        const Mb = new Map;
        for (const eb of bb.baf2RxPlanList) {
          const bb = VC(eb);
          Mb.set(pC(bb.box.ctrl), bb)
        }
        this.plans = Mb, this.layouts = new Map((null !== (wb = bb.baf2RxLayouts) && void 0 !== wb ? wb : []).map((bb => {
          let [wb, Mb, eb, Hb] = bb;
          return [pC([wb, Mb, eb]), Hb]
        }))), this.predicted.clear(), bb.baf2RxFormedAt && (this.formed = {
          ctrl: bb.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const eb of [...this.startersOff]) {
          const bb = Mb.get(eb);
          bb && !bb.formed || this.startersOff.delete(eb)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((bb => this.planByKey(bb)))
      }
      planAt(bb) {
        return this.planByKey(pC(bb))
      }
      predictSize(bb, wb) {
        this.predicted.set(pC(bb), wb), this.changed()
      }
      unpredict(bb) {
        this.predicted.delete(pC(bb)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(bb) {
        var wb;
        const Mb = pC(bb);
        return this.predicted.has(Mb) ? null : null !== (wb = this.layouts.get(Mb)) && void 0 !== wb ? wb : null
      }
      showsStarter(bb) {
        return !this.startersOff.has(pC(bb))
      }
      setStarter(bb, wb) {
        const Mb = pC(bb);
        wb ? this.startersOff.delete(Mb) : this.startersOff.add(Mb), this.changed()
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
        const wb = this.plans.get(bb);
        if (!wb) return null;
        const Mb = this.predicted.get(bb);
        return Mb ? {
          ...wb,
          box: uM(wb.box, wb.kind, Mb[0], Mb[1], Mb[2])
        } : wb
      }
      changed() {
        this.version++;
        for (const bb of this.listeners) bb()
      }
    }
    var lC = Mb(225);
    const LC = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function IC(bb, wb, Mb, eb) {
      const Hb = bb.length / 3;
      for (let pb = 0; pb < LC.length / 3; pb++) bb.push(LC[3 * pb] * eb[0] / 2 + Mb[0], LC[3 * pb + 1] * eb[1] / 2 + Mb[1], LC[3 * pb + 2] * eb[2] / 2 + Mb[2]);
      for (let pb = Hb; pb < Hb + 24; pb += 4) wb.push(pb, pb + 1, pb + 2, pb, pb + 2, pb + 3)
    }

    function OC(bb, wb, Mb) {
      const eb = wb[0][0],
        Hb = [],
        pb = [];
      for (const [Vb, gb] of wb) IC(Hb, pb, [Vb[0] - eb[0], Vb[1] - eb[1], Vb[2] - eb[2]], gb);
      return bb.createGameMesh({
        positions: Hb,
        indices: pb
      }, Mb, eb)
    }

    function UC(bb, wb) {
      const Mb = bb.w - 2,
        eb = bb.d - 2;
      return 1 === function(bb, wb, Mb, eb) {
        const [Hb, pb, Vb] = bb;
        if (Number(Hb <= 2) + Number(pb <= 2) + Number(Vb <= 2) >= 2) return function(bb, wb, Mb) {
          return (bb + wb + Mb) % 2 === 0 ? 1 : 3
        }(wb, Mb, eb);
        const [gb, lb] = Hb >= pb && Hb >= Vb ? [Mb, eb] : pb >= Vb ? [wb, eb] : [wb, Mb];
        return gb % 2 === 0 && lb % 2 === 0 ? 1 : 3
      }([Mb, bb.h - 2, eb], wb % Mb, Math.floor(wb / (Mb * eb)), Math.floor(wb / Mb) % eb) ? "rod" : "channel"
    }

    function tC(bb, wb, Mb) {
      if ("reactor" !== bb.kind || bb.formed || !wb) return !1;
      const eb = nM(bb.box);
      for (let Hb = 0; Hb < eb; Hb++) {
        const bb = Mb(Hb);
        if (null !== bb && YM(bb)) return !1
      }
      return !0
    }

    function CC(bb, wb, Mb, eb, Hb) {
      var pb;
      let Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const gb = we(bb.box, wb),
        lb = pe(bb.kind, gb, Mb);
      if ("wrong" === lb || "blocked" === lb) return "wrong";
      if (!Hb) return null;
      if ("inside" === gb && "reactor" === bb.kind && "Air" === ZM(Mb)) {
        if (null !== Vb) {
          var Lb;
          const Mb = nO[yO(Vb, Me(bb.box, wb))];
          return Mb && null !== (Lb = ml(Mb)) && void 0 !== Lb ? Lb : null
        }
        if (eb) return UC(bb.box, Me(bb.box, wb))
      }
      if ("missing" !== lb) return null;
      const Ib = Ve(bb.kind, gb);
      return null === Ib ? null : null !== (pb = ml(Ib)) && void 0 !== pb ? pb : null
    }
    const EC = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function FC(bb, wb, Mb) {
      const eb = Mb => {
        const eb = wb(kM(bb.box, Mb));
        return null !== eb && function(bb, wb) {
          return "reactor" !== bb.kind || wb !== oM(bb.box) && "inside" !== we(bb.box, wb)
        }(bb, Mb) && "ok" !== pe(bb.kind, we(bb.box, Mb), eb)
      };
      if (Mb) {
        const pb = be(bb.box, [Math.floor(Mb[0]), Math.floor(Mb[1]), Math.floor(Mb[2])]);
        if (pb >= 0 && (eb(pb) || (Hb = pb, "reactor" === bb.kind && "inside" === we(bb.box, Hb) && "Air" === wb(kM(bb.box, Hb))))) return pb
      }
      var Hb;
      const pb = nM(bb.box);
      for (let Vb = 0; Vb < pb; Vb++)
        if (eb(Vb)) return Vb;
      return -1
    }

    function BC(bb, wb) {
      return Math.floor(wb / (bb.w * bb.d))
    }

    function sC(bb, wb, Mb) {
      return Mb >= 0 && BC(bb, wb) > BC(bb, Mb)
    }

    function mC(bb, wb) {
      return wb >= 0 && bb.h >= 3 && BC(bb, wb) === bb.h - 1
    }

    function hC(bb) {
      const wb = ZM(bb);
      return wb === mM || "Collider" === wb || "Laser" === wb || wb.startsWith("_Collider ")
    }

    function zC(bb, wb, Mb, eb) {
      if (eb(bb)) return null;
      if (!EC.every((wb => {
          let [eb, Hb, pb] = wb;
          const Vb = Mb([bb[0] + eb, bb[1] + Hb, bb[2] + pb]);
          return null !== Vb && !vM("reactor", Vb) && "reactor" !== fM(Vb)
        }))) return null;
      const Hb = QM("reactor").min,
        pb = aM([bb[0], bb[1], bb[2]], function(bb, wb) {
          const Mb = wb[0] - (bb[0] + .5),
            eb = wb[2] - (bb[2] + .5);
          return Math.abs(Mb) >= Math.abs(eb) ? Mb >= 0 ? 2 : 4 : eb >= 0 ? 1 : 3
        }(bb, wb), Hb, Hb, Hb, iM("reactor", Hb)),
        Vb = oM(pb);
      let gb = !0;
      for (let lb = 0; lb < nM(pb) && gb; lb++) {
        if (lb === Vb) continue;
        const bb = kM(pb, lb),
          wb = Mb(bb);
        gb = !eb(bb) && (null === wb || !hC(wb))
      }
      return {
        box: pb,
        fits: gb
      }
    }
    const XC = sl,
      xC = "baf2Goal",
      jC = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      KC = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      rC = .4;

    function RC(bb, wb) {
      let [Mb, eb, Hb] = bb;
      const pb = rl([Mb - .02, eb - .02, Hb - .02], [Mb + 1.02, eb + 1.02, Hb + 1.02], .07);
      return wb && (pb.push([
        [Mb + .5, eb + 1 + .7, Hb + .5],
        [.08, 1.4, .08]
      ]), pb.push([
        [Mb + .5, eb + 1 + 1.4 + .2, Hb + .5],
        [rC, rC, rC]
      ])), pb
    }

    function DC(bb, wb) {
      let [Mb, eb, Hb] = wb;
      return bb.isBlockInLoadedChunk(Mb, eb, Hb) ? bb.blockIdToBlockName(bb.getBlockId(Mb, eb, Hb)) : null
    }
    let cC = null;
    const YC = new Set;
    let ZC = null;

    function fC(bb) {
      cC = bb;
      for (const wb of YC) wb(bb)
    }
    class AC {
      constructor(bb) {
        var wb;
        this.plans = bb, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (wb = bb => {
          var wb, Mb;
          this.setGoal(null !== (wb = null === bb || void 0 === bb ? void 0 : bb.goal) && void 0 !== wb ? wb : null, null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.startsBattery) && void 0 !== Mb && Mb)
        }, ZC ??= [ZH.k.subscribe("setDirectionArrow", (bb => {
          let {
            id: wb,
            position: Mb,
            text: eb
          } = bb;
          wb === xC && fC({
            goal: [Math.floor(Mb[0]), Math.floor(Mb[1]), Math.floor(Mb[2])],
            startsBattery: JSON.stringify(null !== eb && void 0 !== eb ? eb : null).includes("arrowStartBattery")
          })
        })), ZH.k.subscribe("clearDirectionArrow", (bb => {
          let {
            id: wb
          } = bb;
          null !== wb && wb !== xC || fC(null)
        }))], YC.add(wb), wb(cC), () => {
          YC.delete(wb)
        })
      }
      onAfterRender(bb, wb) {
        const Mb = performance.now();
        if (this.cues.length > 0) {
          const wb = .55 + .45 * Math.sin(Mb / 1100 * Math.PI * 2);
          for (const Mb of this.cues) bb.setGameMesh(Mb, {
            visibility: wb
          })
        }
        if (Mb - this.lastCheckMs < 150) return;
        this.lastCheckMs = Mb;
        const eb = this.plans.all().filter((bb => {
            const [Mb, eb, Hb] = bb.box.ctrl;
            return (!bb.formed || null !== this.plans.layoutOf(bb.box.ctrl)) && (Mb - wb[0]) ** 2 + (eb - wb[1]) ** 2 + (Hb - wb[2]) ** 2 <= 2304
          })),
          Hb = function(bb, wb) {
            const Mb = lC.e.gO,
              eb = new Map;
            for (const pb of wb) {
              const wb = kM(pb.box, 0),
                Vb = kM(pb.box, nM(pb.box) - 1),
                gb = [Math.min(wb[0], Vb[0]), Math.min(wb[1], Vb[1]), Math.min(wb[2], Vb[2])].map((bb => Math.floor(bb / Mb))),
                lb = [Math.max(wb[0], Vb[0]), Math.max(wb[1], Vb[1]), Math.max(wb[2], Vb[2])].map((bb => Math.floor(bb / Mb)));
              for (let Mb = gb[0]; Mb <= lb[0]; Mb++)
                for (let wb = gb[1]; wb <= lb[1]; wb++)
                  for (let pb = gb[2]; pb <= lb[2]; pb++) {
                    var Hb;
                    eb.set(`${Mb},${wb},${pb}`, null !== (Hb = bb.getChunkVersion(Mb, wb, pb)) && void 0 !== Hb ? Hb : -1)
                  }
            }
            return eb
          }(bb, eb);
        this.plans.getVersion() === this.storeVersion && (function(bb, wb) {
          if (bb.size !== wb.size) return !1;
          for (const [Mb, eb] of bb)
            if (wb.get(Mb) !== eb) return !1;
          return !0
        }(Hb, this.chunkVersions) || Mb - this.lastRescanMs < 600) || (this.lastRescanMs = Mb, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Hb, this.redraw(bb, eb))
      }
      dispose(bb) {
        this.unwatch(), cC = null, this.clearMeshes(bb), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(bb, wb) {
        var Mb;
        (null === bb || void 0 === bb ? void 0 : bb.join()) === (null === (Mb = this.goal) || void 0 === Mb ? void 0 : Mb.join()) && wb === this.startsBattery || (this.goal = bb, this.startsBattery = wb, this.storeVersion = -1)
      }
      redraw(bb, wb) {
        const Mb = wb => DC(bb, wb),
          eb = new Map,
          Hb = [],
          pb = this.plans.guideOn();
        for (const Lb of wb) {
          const bb = pb && tC(Lb, this.plans.showsStarter(Lb.box.ctrl), (bb => Mb(kM(Lb.box, bb)))),
            wb = "reactor" === Lb.kind ? this.plans.layoutOf(Lb.box.ctrl) : null,
            Vb = pb && !Lb.formed ? FC(Lb, Mb, this.goal) : -1;
          Vb >= 0 && Hb.push([kM(Lb.box, Vb), mC(Lb.box, Vb)]);
          const gb = nM(Lb.box);
          for (let Hb = 0; Hb < gb; Hb++) {
            const gb = kM(Lb.box, Hb),
              lb = Mb(gb),
              Ib = null === lb ? null : CC(Lb, Hb, lb, bb, pb, wb);
            if (null !== Ib) {
              const bb = "wrong" !== Ib && sC(Lb.box, Hb, Vb),
                wb = bb ? `${Ib}Dim` : Ib;
              let Mb = eb.get(wb);
              Mb || (Mb = {
                draw: {
                  ghost: Ib,
                  dim: bb
                },
                list: []
              }, eb.set(wb, Mb)), Mb.list.push(gb)
            }
          }
        }
        if (pb && this.startsBattery && this.goal) {
          const [bb, wb, Hb] = this.goal, pb = [];
          for (const [eb, Vb, gb] of jC) {
            const lb = [bb + eb, wb + Vb, Hb + gb];
            "Air" === Mb(lb) && pb.push(lb)
          }
          if (pb.length > 0) {
            var Vb;
            const bb = null !== (Vb = eb.get("cell")) && void 0 !== Vb ? Vb : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            bb.list.push(...pb), eb.set("cell", bb)
          }
        }
        const gb = [...eb.keys()].sort(),
          lb = [...gb.map((bb => `${bb}:${eb.get(bb).list.join(";")}`)), `cue:${Hb.join(";")}`].join("|");
        if (lb !== this.shownKey) {
          this.shownKey = lb, this.clearMeshes(bb);
          for (const wb of gb) {
            const {
              draw: Mb,
              list: Hb
            } = eb.get(wb);
            this.meshes.push(this.build(bb, Mb, Hb))
          }
          for (const [wb, Mb] of Hb) this.cues.push(OC(bb, RC(wb, Mb), KC))
        }
      }
      build(bb, wb, Mb) {
        let {
          ghost: eb,
          dim: Hb
        } = wb;
        const {
          size: pb,
          colour: Vb,
          alpha: gb
        } = XC[eb], lb = Mb[0], Lb = [], Ib = [];
        for (const [Ob, Ub, tb] of Mb) IC(Lb, Ib, [Ob - lb[0] + .5, Ub - lb[1] + .5, tb - lb[2] + .5], [pb, pb, pb]);
        return bb.createGameMesh({
          positions: Lb,
          indices: Ib
        }, {
          rgb: Vb,
          alpha: gb * (Hb ? .3 : 1)
        }, lb)
      }
      clearMeshes(bb) {
        for (const wb of [...this.meshes, ...this.cues]) bb.disposeGameMesh(wb);
        this.meshes = [], this.cues = []
      }
    }
    const WC = [.56, .83, 1],
      JC = [1, .3, .25];
    class SC {
      constructor(bb) {
        this.plans = bb, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(bb, wb, Mb) {
        var eb;
        const Hb = performance.now();
        if (Hb - this.lastCheckMs < 150) return;
        this.lastCheckMs = Hb;
        const pb = wb => DC(bb, wb),
          Vb = null === (eb = bb.Leb(wb)) || void 0 === eb ? void 0 : eb.name,
          gb = Vb && "Reactor Frame" === ZM(Vb) ? bb.getTargetedBlock() : null,
          lb = gb ? [gb.VF[0], gb.VF[1], gb.VF[2]] : null,
          Lb = null !== lb && "Air" === pb(lb) && lb.every(((bb, wb) => Math.abs(bb + .5 - Mb[wb]) <= 8)) ? zC(lb, Mb, pb, (bb => this.inPlan(bb))) : null,
          Ib = Lb ? `${Lb.box.ctrl.join()}|${Lb.box.rot}|${Lb.fits}` : "";
        Ib !== this.shownKey && this.show(bb, Ib, Lb)
      }
      dispose(bb) {
        this.clear(bb), this.shownKey = ""
      }
      inPlan(bb) {
        return this.plans.all().some((wb => be(wb.box, bb) >= 0))
      }
      show(bb, wb, Mb) {
        if (this.clear(bb), this.shownKey = wb, !Mb) return;
        const {
          box: eb,
          fits: Hb
        } = Mb, pb = Hb ? WC : JC, {
          lo: Vb,
          hi: gb
        } = Kl(eb);
        this.meshes.push(OC(bb, rl(Vb, gb, .05), {
          rgb: pb,
          alpha: 1
        }));
        const lb = [],
          Lb = kM(eb, 0)[1];
        for (let Ib = 0; Ib < eb.w * eb.d; Ib++) {
          const [bb, , wb] = kM(eb, Ib);
          lb.push([
            [bb + .5, Lb + .02 + .01, wb + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(OC(bb, lb, {
          rgb: pb,
          alpha: .25
        }))
      }
      clear(bb) {
        for (const wb of this.meshes) bb.disposeGameMesh(wb);
        this.meshes = []
      }
    }
    const NC = "buildAFactory2Game:";

    function vC(bb, wb, Mb) {
      const eb = bb => {
          const [Mb, eb, Hb] = bb.box.ctrl;
          return Mb === wb[0] && eb === wb[1] && Hb === wb[2]
        },
        Hb = bb.find((bb => eb(bb) || be(bb.box, wb) >= 0));
      if (!Hb) return null;
      const pb = function(bb, wb, Mb) {
        const {
          w: eb,
          h: Hb,
          d: pb
        } = bb.box, Vb = "reactor" === bb.kind ? `${NC}rxTitle` : `${NC}batTitle`;
        if (bb.formed) return {
          key: `${NC}lookPlanFormed`,
          kindKey: Vb,
          w: eb,
          h: Hb,
          d: pb,
          count: 0
        };
        let gb = 0,
          lb = 0;
        for (let Ib = 0; Ib < nM(bb.box); Ib++) {
          const wb = Mb(kM(bb.box, Ib)),
            eb = null === wb ? "ok" : pe(bb.kind, we(bb.box, Ib), wb);
          gb += "missing" === eb ? 1 : 0, lb += "wrong" === eb || "blocked" === eb ? 1 : 0
        }
        const Lb = function(bb, wb, Mb) {
          if (wb < 0 || null === Mb) return;
          const eb = we(bb.box, wb),
            Hb = pe(bb.kind, eb, Mb);
          return "blocked" === Hb ? `${NC}lookWhy_blocked` : "wrong" === Hb ? "ctrl" === eb ? `${NC}lookWhy_ctrl` : `${NC}lookWhy_reactor_${eb}` : void 0
        }(bb, be(bb.box, wb), Mb([wb[0], wb[1], wb[2]]));
        if (gb > 0) return {
          key: `${NC}lookPlanToBuild`,
          kindKey: Vb,
          w: eb,
          h: Hb,
          d: pb,
          count: gb,
          why: Lb
        };
        if (lb > 0) return {
          key: `${NC}lookPlanTakeOut`,
          kindKey: Vb,
          w: eb,
          h: Hb,
          d: pb,
          count: lb,
          why: Lb
        };
        return {
          key: "reactor" === bb.kind ? `${NC}lookPlanNoRods` : `${NC}lookPlanDone`,
          kindKey: Vb,
          w: eb,
          h: Hb,
          d: pb,
          count: 0
        }
      }(Hb, wb, Mb);
      return "reactor" === Hb.kind && eb(Hb) ? {
        ...pb,
        ctrl: !0
      } : pb
    }

    function QC(bb, wb) {
      return bb === wb || null !== bb && null !== wb && bb.key === wb.key && bb.kindKey === wb.kindKey && bb.w === wb.w && bb.h === wb.h && bb.d === wb.d && bb.count === wb.count && bb.why === wb.why && bb.ctrl === wb.ctrl
    }

    function GC() {
      return performance.now()
    }
    class qC {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GC;
        this.ticket = bb, this.sent = wb, this.backstopMs = Mb, this.now = eb, this.queuedAt = void 0, this.queuedAt = eb()
      }
      answered() {
        const bb = this.now(),
          wb = this.sent.leftAt(this.ticket);
        return null !== wb && bb - wb > 4e3 || bb - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class aC {
      constructor() {
        this.echoes = []
      }
      add(bb) {
        this.echoes = this.echoes.filter((bb => !bb.answered())), this.echoes.push(bb)
      }
      answered() {
        var bb, wb;
        return null === (bb = null === (wb = this.echoes.at(-1)) || void 0 === wb ? void 0 : wb.answered()) || void 0 === bb || bb
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((bb => bb.answered()))
      }
      age() {
        var bb, wb;
        return null !== (bb = null === (wb = this.echoes.at(-1)) || void 0 === wb ? void 0 : wb.age()) && void 0 !== bb ? bb : null
      }
      clear() {
        this.echoes = []
      }
    }
    class iC {
      constructor(bb) {
        this.send = bb, this.value = null, this.sent = null, this.echoes = new aC, this.down = !1, this.timer = null
      }
      shown(bb) {
        return null === this.value ? bb : this.down || this.value !== this.sent ? this.value : bb === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), bb) : this.value
      }
      pendingFor(bb) {
        return null !== this.value && this.value === this.sent && bb !== this.value ? this.echoes.age() : null
      }
      assume(bb, wb) {
        this.disarm(), this.down = !1, this.value = bb, this.sent = bb, this.echoes.clear(), this.echoes.add(wb)
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
    class uC {
      constructor() {
        this.pending = new Map
      }
      set(bb, wb, Mb) {
        var eb;
        const Hb = null !== (eb = this.pending.get(bb)) && void 0 !== eb ? eb : {
          on: wb,
          echoes: new aC
        };
        Hb.on = wb, Hb.echoes.add(Mb), this.pending.set(bb, Hb)
      }
      shown(bb) {
        let wb = bb;
        for (const [Mb, {
            on: eb,
            echoes: Hb
          }] of this.pending) 0 !== (bb & Mb) === eb && Hb.agreeCounts() || Hb.answered() ? this.pending.delete(Mb) : wb = eb ? wb | Mb : wb & ~Mb;
        return wb
      }
      pendingMask() {
        let bb = 0;
        for (const wb of this.pending.keys()) bb |= wb;
        return bb
      }
      pendingFor(bb) {
        let wb = null;
        for (const [eb, {
            on: Hb,
            echoes: pb
          }] of this.pending) {
          if (void 0 !== bb && 0 !== (bb & eb) === Hb) continue;
          const Vb = pb.age();
          var Mb;
          if (null !== Vb) wb = Math.max(null !== (Mb = wb) && void 0 !== Mb ? Mb : 0, Vb)
        }
        return wb
      }
      clear() {
        this.pending.clear()
      }
    }
    class dC {
      constructor() {
        this.dims = null, this.echoes = new aC, this.unmet = null
      }
      shown(bb) {
        var wb;
        return this.dims && (PC(this.dims, bb) && this.echoes.agreeCounts() || this.echoes.answered()) && (PC(this.dims, bb) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (wb = this.dims) && void 0 !== wb ? wb : bb
      }
      takeUnmet() {
        const bb = this.unmet;
        return this.unmet = null, bb
      }
      set(bb, wb) {
        this.dims = bb, this.echoes.add(wb)
      }
      pendingFor(bb) {
        return null === this.dims || bb && PC(this.dims, bb) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function PC(bb, wb) {
      return bb[0] === wb[0] && bb[1] === wb[1] && bb[2] === wb[2]
    }
    class nC {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GC;
        this.now = bb, this.taps = new Map
      }
      tap(bb, wb, Mb) {
        return !this.busy(bb) && (this.taps.set(bb, {
          at: this.now(),
          done: wb
        }), Mb(), !0)
      }
      settle(bb) {
        for (const [wb, Mb] of [...this.taps]) Mb.done(bb) && this.taps.delete(wb)
      }
      busy(bb) {
        const wb = this.taps.get(bb);
        return !!wb && (!(this.now() - wb.at >= 3e3) || (this.taps.delete(bb), !1))
      }
      busyIds() {
        const bb = new Set;
        for (const wb of [...this.taps.keys()]) this.busy(wb) && bb.add(wb);
        return bb
      }
      clear() {
        this.taps.clear()
      }
    }

    function yC(bb) {
      return {
        send: wb => bb.track(wb),
        sendUrgent: (wb, Mb) => bb.track(wb, {
          urgent: !0,
          supersedes: Mb
        }),
        leftAt: wb => bb.leftAt(wb),
        holdReserve: () => bb.holdUrgentReserve(),
        answerMs: RV
      }
    }

    function oC() {
      return performance.now()
    }

    function TC(bb) {
      const wb = bb.baf2RxNeed.map((bb => {
        let [wb, Mb] = bb;
        return [wb, Mb]
      }));
      return JSON.stringify([bb.baf2RxFormed, wb, bb.baf2RxBad, bb.baf2RxCells])
    }

    function kC(bb, wb) {
      const Mb = 0 !== (wb & Uw),
        eb = 0 !== (bb.baf2RxFlags & Uw);
      return !Mb || eb || "running" !== bb.baf2RxState && "idle" !== bb.baf2RxState ? !Mb && eb && "scram" === bb.baf2RxState && bb.baf2RxFuel > 0 ? "idle" : bb.baf2RxState : "scram"
    }

    function bE(bb) {
      return JSON.stringify([bb.baf2BatFormed, bb.baf2BatNeed, bb.baf2BatBad])
    }

    function wE(bb) {
      return bb.join(",")
    }
    class ME {
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
    class eE {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(bb, wb) {
        this.lastAt = bb, this.lastUntil = bb + wb
      }
      answered(bb) {
        return this.lastAt >= bb || bb < this.lastUntil
      }
    }
    class HE {
      constructor(bb, wb) {
        this.link = bb, this.now = wb, this.hold = new dC, this.picked = null, this.notTaken = null
      }
      shown(bb) {
        const wb = this.hold.shown(bb);
        if (this.hold.takeUnmet() && this.picked) {
          var Mb;
          const {
            plans: wb,
            ctrl: eb,
            at: Hb
          } = this.picked;
          this.picked = null, wb.unpredict(eb), null === (Mb = this.notTaken) || void 0 === Mb || Mb.call(this, bb, Hb)
        }
        return wb
      }
      pendingFor(bb) {
        return this.hold.pendingFor(bb)
      }
      Vt(bb, wb, Mb) {
        bb.predictSize(wb, Mb), this.picked = {
          plans: bb,
          ctrl: wb,
          at: this.now()
        };
        const eb = this.link.send(Ow(wb, "plan", ...Mb));
        this.hold.set(Mb, new qC(eb, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class pE {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : oC;
        this.plans = bb, this.readInterior = wb, this.link = Mb, this.now = eb, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new uC, this.throttle = void 0, this.oneShots = void 0, this.listeners = new ME, this.redraw = null, this.releaseReserve = null, this.size = new HE(Mb, eb), this.oneShots = new nC(eb), this.throttle = new iC((bb => this.echo(this.link.send(this.command("throttle", bb)))))
      }
      set(bb) {
        !bb.baf2RxOpen && this.raw && wE(this.raw.baf2RxAt) === wE(bb.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(bb), this.iI(bb)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(bb) {
        this.size.notTaken = bb
      }
      resize(bb) {
        this.raw && (this.size.Vt(this.plans, this.raw.baf2RxAt, bb), this.iI(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const bb = this.raw.baf2RxAt;
        this.plans.setStarter(bb, !this.plans.showsStarter(bb)), this.iI(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.iI(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.iI(this.raw)
      }
      send(bb) {
        if (this.raw) {
          for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
          this.link.send(this.command(bb, ...Mb))
        }
      }
      tap(bb, wb) {
        this.raw && this.oneShots.tap(bb, function(bb, wb) {
          if ("start" === bb) return bb => 0 === (bb.baf2RxFlags & Uw);
          if ("odConfirm" === bb) return bb => 0 !== (bb.baf2RxFlags & tw);
          const Mb = TC(wb);
          return bb => TC(bb) !== Mb
        }(bb, this.raw), wb) && ("start" === bb && (this.startedAt = this.now()), this.iI(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(Uw, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(bb, wb) {
        if (!this.raw) return;
        const Mb = bb === Uw ? this.command(wb ? "scram" : "start") : this.command("od", wb ? 1 : 0),
          eb = wb && bb === Uw,
          Hb = `${Iw} ${this.raw.baf2RxAt.join(" ")} `,
          pb = this.echo(eb ? this.link.sendUrgent(Mb, (bb => {
            const wb = bb.startsWith(Hb) ? bb.slice(Hb.length).split(" ")[0] : null;
            return "throttle" === wb || "start" === wb
          })) : this.link.send(Mb));
        this.flags.set(bb, wb, pb), eb && this.throttle.assume(0, pb), this.iI(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(bb) {
        this.throttle.drag(bb), this.raw && this.iI(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.iI(this.raw)
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
        for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
        return Ow(this.raw.baf2RxAt, bb, ...Mb)
      }
      echo(bb) {
        return new qC(bb, this.link, this.link.answerMs, this.now)
      }
      iI(bb) {
        var wb;
        this.raw = bb;
        const Mb = this.flags.shown(bb.baf2RxFlags),
          eb = {
            ...bb,
            baf2RxFlags: Mb,
            baf2RxTarget: this.throttle.shown(bb.baf2RxTarget),
            baf2RxState: kC(bb, Mb)
          },
          Hb = this.size.shown(eb.baf2RxDims),
          pb = this.throttle.pendingFor(),
          Vb = [this.throttle.pendingFor(bb.baf2RxTarget), this.flags.pendingFor(bb.baf2RxFlags), this.size.pendingFor(bb.baf2RxDims)].filter((bb => null !== bb)),
          gb = Vb.length > 0 ? Math.max(...Vb) : null,
          lb = this.oneShots.busyIds(),
          Lb = eb.baf2RxAt;
        let Ib, Ob, Ub = null,
          tb = [Math.max(0, Hb[0] - 2), Math.max(0, Hb[1] - 2), Math.max(0, Hb[2] - 2)];
        if (eb.baf2RxFormed) {
          const [bb, wb, Mb] = eb.baf2RxDims;
          tb = [Math.max(0, bb - 2), Math.max(0, wb - 2), Math.max(0, Mb - 2)], Ib = Array.from(eb.baf2RxCells, Number), Ob = `${tb.join(",")}:${eb.baf2RxCells}`
        } else {
          var Cb;
          const bb = null === (Cb = this.plans.planAt(Lb)) || void 0 === Cb ? void 0 : Cb.box,
            wb = bb ? uM(bb, "reactor", ...Hb) : aM(Lb, 1, ...Hb, iM("reactor", Hb[0])),
            Mb = this.readInterior(wb);
          Ub = Pg(tb, Mb), Ib = Mb, Ob = `${tb.join(",")}:${Mb.join("")}`
        }(null === (wb = this.looksOf) || void 0 === wb ? void 0 : wb.key) !== Ob && (this.looksOf = {
          key: Ob,
          looks: bl(tb, Ib)
        }), this.view = {
          status: eb,
          dims: Hb,
          plan: Ub,
          inner: tb,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Lb),
          odConfirmed: this.odConfirmed || 0 !== (eb.baf2RxFlags & mw),
          guide: this.plans.guideOn(),
          throttlePending: null !== pb,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== gb && gb >= 5e3,
          busy: lb,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== gb || lb.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.iI(this.raw)
        }), 250))
      }
    }
    class VE {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oC;
        this.plans = bb, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new ME, this.redraw = null, this.size = new HE(wb, Mb), this.oneShots = new nC(Mb)
      }
      set(bb) {
        !bb.baf2BatOpen && this.view && wE(this.view.status.baf2BatAt) === wE(bb.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(bb), this.iI(bb)
      }
      tap(bb, wb) {
        if (!this.view) return;
        const Mb = bE(this.view.status);
        this.oneShots.tap(bb, (bb => bE(bb) !== Mb), wb) && this.iI(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(bb) {
        this.size.notTaken = bb
      }
      resize(bb) {
        this.view && (this.size.Vt(this.plans, this.view.status.baf2BatAt, bb), this.iI(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.iI(this.view.status)
      }
      subscribe(bb) {
        return this.listeners.subscribe(bb)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      iI(bb) {
        const wb = this.size.shown(bb.baf2BatDims),
          Mb = this.oneShots.busyIds();
        this.view = {
          status: bb,
          dims: wb,
          qO: Cl(wb, bb.baf2BatDims) ? bb.baf2BatCapacity : el(...wb),
          guide: this.plans.guideOn(),
          busy: Mb
        }, this.listeners.notify(), Mb.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.iI(this.view.status)
        }), 250))
      }
    }
    const gE = "buildAFactory2Game:";

    function lE() {
      var bb;
      const wb = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!wb) return null;
      const Mb = wb.querySelector(".ExitButton");
      return function(bb, wb) {
        const Mb = wb ? wb.left - 8 : bb.right;
        return {
          left: bb.left,
          top: bb.top,
          width: Math.max(0, Mb - bb.left),
          height: bb.height
        }
      }(wb.getBoundingClientRect(), null !== (bb = null === Mb || void 0 === Mb ? void 0 : Mb.getBoundingClientRect()) && void 0 !== bb ? bb : null)
    }
    const LE = (0, eb.memo)((function(bb) {
      let {
        store: wb
      } = bb;
      const {
        t: Mb
      } = (0, KH.C)(), [Hb, pb] = (0, eb.useState)((() => wb.get())), [Vb, gb] = (0, eb.useState)((() => performance.now()));
      (0, eb.useEffect)((() => (pb(wb.get()), wb.subscribe((() => {
        pb(wb.get()), gb(performance.now())
      })))), [wb]);
      const {
        alarm: lb,
        boomAt: Lb
      } = Hb, Ib = null !== lb && null !== lb.secs, [Ob, Ub] = (0, eb.useState)(null);
      (0, eb.useEffect)((() => {
        if (!Ib) return;
        Ub(lE());
        const bb = setInterval((() => {
          gb(performance.now()), Ub(lE())
        }), 250);
        return () => {
          clearInterval(bb)
        }
      }), [Ib]);
      const [tb, Cb] = (0, eb.useState)(!1);
      return (0, eb.useEffect)((() => {
        if (Lb === -1 / 0) return;
        Cb(!0);
        const bb = setTimeout((() => {
          Cb(!1)
        }), 1300);
        return () => {
          clearTimeout(bb)
        }
      }), [Lb]), (0, sp.jsxs)(sp.Fragment, {
        children: [null !== lb && (0, sp.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: Mb(lb.hot ? `${gE}rxAlarmSiren` : `${gE}rxAlarmDamaged`, {
            amount: String(lb.damage)
          })
        }), null !== lb && null !== lb.secs && (0, sp.jsx)("div", {
          className: Ob ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Ob && void 0 !== Ob ? Ob : void 0,
          "aria-live": "assertive",
          children: Mb(`${gE}rxAlarmCountdown`, {
            amount: String((Eb = lb.secs, Fb = Vb - lb.receivedAt, Math.max(1, Math.ceil(Eb - Fb / 1e3))))
          })
        }), tb && (0, sp.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Eb, Fb
    }));
    class IE {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      Tm(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Mb = bb.baf2RxAlarmAt.join(",");
        let eb = this.snapshot.boomAt;
        if (bb.baf2RxAlarmBoom) this.byReactor.delete(Mb), eb = wb;
        else if (bb.baf2RxAlarmDamage <= 0) this.byReactor.delete(Mb);
        else {
          var Hb;
          this.byReactor.set(Mb, {
            damage: bb.baf2RxAlarmDamage,
            secs: null !== (Hb = bb.baf2RxAlarmSecs) && void 0 !== Hb ? Hb : null,
            hot: !0 === bb.baf2RxAlarmHot,
            receivedAt: wb
          })
        }
        this.iI(eb)
      }
      retain(bb) {
        let wb = !1;
        for (const Mb of [...this.byReactor.keys()]) bb.has(Mb) || (this.byReactor.delete(Mb), wb = !0);
        wb && this.iI(this.snapshot.boomAt)
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
      iI(bb) {
        let wb = null;
        for (const Mb of this.byReactor.values())(!wb || Mb.damage > wb.damage) && (wb = Mb);
        this.snapshot = {
          alarm: wb,
          boomAt: bb
        };
        for (const Mb of this.listeners) Mb()
      }
    }
    const OE = {
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

    function UE(bb) {
      return [bb[0], bb[1], bb[2]]
    }

    function tE(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }
    class CE {
      constructor(bb) {
        if (this.plans = bb, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var bb;
            return {
              active: this.glows.flatMap((bb => {
                let {
                  record: wb
                } = bb;
                return wb ? [wb] : []
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
      check(bb, wb, Mb) {
        const eb = new Set(wb.map((bb => tE(bb.box.ctrl))));
        for (const Vb of function(bb, wb) {
            const Mb = [],
              eb = new Map(bb);
            bb.clear();
            for (const Hb of wb) {
              const wb = pC(Hb.box.ctrl),
                pb = Hb.formed ? Hb.level : 0;
              bb.set(wb, pb), pb > 0 && 0 === eb.get(wb) && Mb.push(Hb)
            }
            return Mb
          }(this.levels, this.plans.all())) eb.has(tE(Vb.box.ctrl)) && this.show(bb, Vb, "on", Mb);
        const Hb = this.plans.lastFormed();
        if (null === Hb || Hb.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Hb.receivedAt;
        const pb = function(bb, wb) {
          var Mb;
          const eb = pC(bb);
          return null !== (Mb = wb.find((bb => pC(bb.box.ctrl) === eb))) && void 0 !== Mb ? Mb : null
        }(Hb.ctrl, wb);
        return pb && this.show(bb, pb, "formed", Mb), pb
      }
      fade(bb, wb) {
        0 !== this.glows.length && (this.glows = this.glows.filter((Mb => {
          let {
            mesh: eb,
            glow: Hb,
            startMs: pb,
            record: Vb
          } = Mb;
          const gb = (wb - pb) / OE[Hb].ms;
          return gb >= 1 ? (bb.disposeGameMesh(eb), Vb && (Vb.endMs = wb), !1) : (bb.setGameMesh(eb, {
            visibility: "formed" === Hb ? 1 - gb : Math.sin(Math.PI * gb)
          }), !0)
        })))
      }
      dispose(bb) {
        for (const {
            mesh: Mb
          }
          of this.glows) bb.disposeGameMesh(Mb);
        this.glows = [], this.levels.clear();
        const wb = "undefined" !== typeof window ? window : null;
        (null === wb || void 0 === wb ? void 0 : wb.baf2Glows) === this.devAccessor && delete wb.baf2Glows
      }
      show(bb, wb, Mb, eb) {
        const {
          lo: Hb,
          hi: pb
        } = Kl(wb.box);
        let Vb = null;
        this.devLog && (Vb = {
          glow: Mb,
          ctrl: UE(wb.box.ctrl),
          lo: UE(Hb),
          hi: UE(pb),
          startMs: eb,
          endMs: null
        }, this.devLog.push(Vb), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(bb, Mb, rl(Hb, pb, OE[Mb].thick)),
          glow: Mb,
          startMs: eb,
          record: Vb
        })
      }
      build(bb, wb, Mb) {
        const eb = OC(bb, Mb, {
          rgb: OE[wb].colour,
          alpha: 1
        });
        return bb.setGameMesh(eb, {
          visibility: 0
        }), eb
      }
    }
    const EE = 1 / .6,
      FE = {
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
        blendMode: Dg.d.Standard,
        soft: !0
      },
      BE = {
        ...FE,
        size: [.25, .4],
        count: 2
      };

    function sE(bb) {
      return {
        colours: [bb, bb],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Dg.d.Add,
        soft: !1
      }
    }
    const mE = sE([150, 225, 255]),
      hE = sE([185, 145, 255]),
      zE = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function XE(bb) {
      const wb = Ww[bb];
      return null === wb.fuelSlot || pM(wb) ? zE.includes(bb) ? hE : mE : FE
    }
    const xE = {
        kind: "smokePuff"
      },
      jE = [.2, .025, .2];

    function KE(bb, wb) {
      const [
        [Mb, eb, Hb],
        [pb, Vb, gb]
      ] = bb.colours;
      return {
        texture: bb.soft ? xE : "square_particle",
        qO: wb,
        minLifeTime: bb.life[0] / EE,
        maxLifeTime: bb.life[1] / EE,
        minEmitPower: bb.power[0] * EE,
        maxEmitPower: bb.power[1] * EE,
        minSize: bb.size[0],
        maxSize: bb.size[1],
        emitRate: 0,
        gravity: [0, bb.lift * EE * EE, 0],
        dir1: [-bb.spread, 1, -bb.spread],
        dir2: [bb.spread, 1, bb.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [Mb, eb, Hb, bb.alpha],
          maxColor: [pb, Vb, gb, bb.alpha]
        }, {
          timeFraction: 1,
          minColor: [Mb, eb, Hb, 0],
          maxColor: [pb, Vb, gb, 0]
        }],
        blendMode: bb.blendMode
      }
    }
    class rE {
      constructor(bb) {
        this.fixed = bb, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(bb, wb, Mb) {
        var eb;
        if (Mb === this.lastFrame) return !1;
        this.lastFrame = Mb;
        const Hb = this.at;
        Hb[0] = wb[0] + .5, Hb[1] = wb[1] + 1.025, Hb[2] = wb[2] + .5;
        const pb = null !== (eb = this.fixed) && void 0 !== eb ? eb : gb() ? BE : FE;
        let Vb = this.particles.get(pb);
        return Vb || (Vb = bb.createParticles(function(bb) {
          return KE(bb, Math.ceil(12 * bb.count * bb.life[1]) + bb.count)
        }(pb), {
          pos: Hb,
          half: jE
        }), this.particles.set(pb, Vb)), Vb.moveTo(Hb), Vb.emit(pb.count), !0
      }
      dispose() {
        for (const bb of this.particles.values()) bb.stop();
        this.particles.clear()
      }
    }
    class RE {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(bb) {
        this.indexed = !0;
        for (const wb of Rw) {
          const Mb = XE(wb);
          for (let eb = 1; eb <= 4; eb++) {
            const Hb = bb.blockNameToBlockId(`${wb}|meta|rot${eb}|Running`, !0);
            if (null === Hb) continue;
            let pb = this.pufferIndexByStyle.get(Mb);
            void 0 === pb && (pb = this.pufferList.push(new rE(Mb === FE ? null : Mb)) - 1, this.pufferIndexByStyle.set(Mb, pb)), this.pufferIndexById[Hb] = pb + 1
          }
        }
      }
      onAfterRender(bb, wb) {
        this.indexed || this.index(bb);
        const Mb = performance.now(),
          eb = 0 === this.lastMs ? 0 : Math.min(Mb - this.lastMs, 250) / 1e3;
        this.lastMs = Mb, this.frame++, bb.particlesEnabled() ? (this.scan(bb, wb), this.puff(bb, eb)) : this.sources = []
      }
      dispose() {
        for (const bb of this.pufferList) bb.dispose();
        this.sources = [], this.found = []
      }
      scan(bb, wb) {
        0 === this.scanRow && (this.origin = [Math.floor(wb[0]) - 12, Math.floor(wb[1]) - 6, Math.floor(wb[2]) - 12]);
        const Mb = Math.min(this.scanRow + 16, 325),
          [eb, Hb, pb] = this.origin,
          Vb = this.hits;
        Vb.length = 0;
        for (let gb = this.scanRow; gb < Mb; gb++) {
          const wb = eb + gb % 25,
            Mb = Hb + Math.floor(gb / 25);
          bb.scanBlocks(wb, Mb, pb, wb + 1, Mb + 1, pb + 25, this.pufferIndexById, Vb)
        }
        for (let gb = 0; gb < Vb.length; gb += 4) {
          const bb = Vb[gb + 3];
          this.found.push({
            pos: [Vb[gb], Vb[gb + 1], Vb[gb + 2]],
            Lg: bb,
            puffer: this.pufferList[this.pufferIndexById[bb] - 1]
          })
        }
        this.scanRow = Mb, 325 === Mb && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(bb, wb) {
        const Mb = this.sources.length;
        if (0 !== Mb) {
          this.budget = Math.min(this.budget + Math.min(Mb / 1.2, 12) * wb, 2);
          for (let wb = 0; wb < Mb && this.budget >= 1; wb++) {
            const wb = this.sources[this.cursor % Mb];
            this.cursor = (this.cursor + 1) % Mb, bb.getBlockId(wb.pos[0], wb.pos[1], wb.pos[2]) === wb.Lg && (wb.puffer.puff(bb, wb.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const DE = {
        ...sE([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      cE = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function YE(bb) {
      return 0 === bb.spots.length ? 0 : Math.min(1 * bb.level, 4)
    }

    function ZE(bb) {
      return 0 === bb.glass.length ? 0 : Math.min(.75 * bb.level, 3)
    }

    function fE(bb) {
      return `${bb.ctrl.join(",")}:${bb.rot}:${bb.cu},${bb.cv}:${bb.w},${bb.h},${bb.d}`
    }

    function AE(bb, wb) {
      const Mb = wb.w - 2,
        eb = wb.h - 2,
        Hb = wb.d - 2,
        pb = [];
      for (let Vb = 0; Vb < Mb * eb * Hb; Vb++) {
        const gb = Vb % Mb,
          lb = Math.floor(Vb / Mb) % Hb,
          Lb = Math.floor(Vb / (Mb * Hb));
        if (gb > 0 && gb < Mb - 1 && lb > 0 && lb < Hb - 1 && Lb > 0 && Lb < eb - 1) continue;
        const Ib = kM(wb, ee(wb, Vb)),
          Ob = DC(bb, Ib);
        if (null !== Ob && "Fuel Rod" === ZM(Ob))
          for (const wb of cE) {
            const Mb = [Ib[0] + wb[0], Ib[1] + wb[1], Ib[2] + wb[2]];
            JE(bb, Mb) && pb.push(SE(Mb, wb))
          }
      }
      return pb
    }

    function WE(bb, wb) {
      const {
        lo: Mb,
        hi: eb
      } = Kl(wb), Hb = [];
      for (let pb = Mb[0]; pb < eb[0]; pb++)
        for (let wb = Mb[1]; wb < eb[1]; wb++) {
          const Vb = pb === Mb[0] || pb === eb[0] - 1 || wb === Mb[1] || wb === eb[1] - 1 ? 1 : Math.max(1, eb[2] - 1 - Mb[2]);
          for (let gb = Mb[2]; gb < eb[2]; gb += Vb) {
            const Vb = [pb, wb, gb];
            if (!JE(bb, Vb)) continue;
            const lb = pb === Mb[0] ? cE[1] : pb === eb[0] - 1 ? cE[0] : gb === Mb[2] ? cE[5] : gb === eb[2] - 1 ? cE[4] : wb === Mb[1] ? cE[3] : cE[2];
            Hb.push(SE(Vb, lb))
          }
        }
      return Hb
    }

    function JE(bb, wb) {
      const Mb = DC(bb, wb);
      return null !== Mb && "Reactor Glass" === ZM(Mb)
    }

    function SE(bb, wb) {
      return [
        [bb[0] + .5 + .55 * wb[0], bb[1] + .5 + .55 * wb[1], bb[2] + .5 + .55 * wb[2]],
        [0 === wb[0] ? .4 : .02, 0 === wb[1] ? .4 : .02, 0 === wb[2] ? .4 : .02]
      ]
    }
    class NE {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(bb, wb, Mb, eb) {
        const Hb = [],
          pb = new Set;
        for (const Lb of wb) {
          var Vb, gb, lb;
          const {
            box: wb
          } = Lb;
          if ("reactor" !== Lb.kind || Lb.level <= 0 || (wb.ctrl[0] - Mb[0]) ** 2 + (wb.ctrl[1] - Mb[1]) ** 2 + (wb.ctrl[2] - Mb[2]) ** 2 > 576) continue;
          const Ib = fE(wb);
          pb.add(Ib);
          let Ob = this.spots.get(Ib);
          if ((!Ob || eb - Ob.at > 3e3) && (Ob = {
              at: eb,
              spots: AE(bb, wb),
              glass: WE(bb, wb)
            }, this.spots.set(Ib, Ob)), 0 === Ob.spots.length && 0 === Ob.glass.length) continue;
          const Ub = this.sparking.find((bb => bb.key === Ib));
          Hb.push({
            key: Ib,
            level: Lb.level,
            spots: Ob.spots,
            glass: Ob.glass,
            budget: null !== (Vb = null === Ub || void 0 === Ub ? void 0 : Ub.budget) && void 0 !== Vb ? Vb : 0,
            cursor: null !== (gb = null === Ub || void 0 === Ub ? void 0 : Ub.cursor) && void 0 !== gb ? gb : 0,
            glassBudget: null !== (lb = null === Ub || void 0 === Ub ? void 0 : Ub.glassBudget) && void 0 !== lb ? lb : 0
          })
        }
        for (const Lb of this.spots.keys()) pb.has(Lb) || this.spots.delete(Lb);
        this.sparking = Hb
      }
      emit(bb, wb, Mb) {
        var eb;
        if (0 === this.sparking.length || !bb.particlesEnabled() || Mb === this.lastFrame) return;
        this.lastFrame = Mb;
        let Hb = 0,
          pb = 0;
        for (const Cb of this.sparking) Hb += YE(Cb), pb += ZE(Cb);
        const Vb = Hb > 8 ? 8 / Hb : 1,
          gb = pb > 6 ? 6 / pb : 1;
        let lb, Lb = null,
          Ib = null;
        for (const Cb of this.sparking) Cb.budget = Math.min(Cb.budget + YE(Cb) * Vb * wb, 2), Cb.budget >= 1 && (!Lb || Cb.budget > Lb.budget) && (Lb = Cb), Cb.glassBudget = Math.min(Cb.glassBudget + ZE(Cb) * gb * wb, 2), Cb.glassBudget >= 1 && (!Ib || Cb.glassBudget > Ib.glassBudget) && (Ib = Cb);
        if (Lb) Lb.budget--, lb = Lb.spots[Lb.cursor++ % Lb.spots.length];
        else {
          if (!Ib) return;
          Ib.glassBudget--, lb = Ib.glass[Math.floor(Math.random() * Ib.glass.length)]
        }
        const [Ob, Ub] = lb, tb = null !== (eb = this.emitter) && void 0 !== eb ? eb : this.create(bb, Ob, Ub);
        tb.moveTo(Ob, Ub), tb.emit(DE.count)
      }
      dispose() {
        var bb;
        null === (bb = this.emitter) || void 0 === bb || bb.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(bb, wb, Mb) {
        const eb = Math.ceil(14 * DE.count * DE.life[1]) + DE.count;
        return this.emitter = bb.createParticles(KE(DE, eb), {
          pos: wb,
          half: Mb
        }), this.emitter
      }
    }
    const vE = [2, 3.2],
      QE = 1 / 3,
      GE = 1 / .6,
      qE = {
        texture: xE,
        qO: Math.ceil(18 * vE[1]) + 4,
        minLifeTime: vE[0] / GE,
        maxLifeTime: vE[1] / GE,
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
        blendMode: Dg.d.Standard
      };
    class aE {
      constructor(bb) {
        this.plans = bb, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new NE, this.frame = 0, this.outline = new CE(bb)
      }
      onAfterRender(bb, wb, Mb) {
        const eb = performance.now(),
          Hb = 0 === this.lastMs ? 0 : Math.min(eb - this.lastMs, 250) / 1e3;
        if (this.lastMs = eb, this.outline.fade(bb, eb), this.puff(bb, Hb, Mb), this.sparks.emit(bb, Hb, this.frame++), eb - this.lastCheckMs < 150) return;
        this.lastCheckMs = eb;
        const pb = this.plans.all().filter((bb => bb.formed && iE(bb.box.ctrl, Mb) <= 4096));
        this.plumes = pb.filter((bb => "reactor" === bb.kind && bb.level > 0)).map((bb => ({
          box: bb.box,
          level: bb.level
        }))), this.updateHums(bb, wb, pb, Mb), this.sparks.update(bb, pb, Mb, eb), this.chimeFormed(bb, wb, pb, eb)
      }
      dispose(bb) {
        var wb;
        this.outline.dispose(bb), null === (wb = this.steam) || void 0 === wb || wb.dispose(), this.steam = null, this.sparks.dispose();
        for (const Mb of this.hums.values()) Mb.stop();
        this.hums.clear()
      }
      chimeFormed(bb, wb, Mb, eb) {
        const Hb = this.outline.check(bb, Mb, eb);
        Hb && bb.playSound(wb, "exp_levelup", .6, 1, {
          yM: [Hb.box.ctrl[0] + .5, Hb.box.ctrl[1], Hb.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(bb, wb, Mb) {
        const eb = this.plumes;
        if (0 === eb.length || !bb.particlesEnabled()) return void(this.plumeBudget = 0);
        const Hb = eb.reduce(((bb, wb) => bb + 3 * wb.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Hb * wb, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let pb = this.plumeCursor % (Hb / 3);
        this.plumeCursor++;
        let Vb = eb[0];
        for (const Ob of eb) {
          if (pb < Ob.level) {
            Vb = Ob;
            break
          }
          pb -= Ob.level
        }
        const {
          lo: gb,
          hi: lb
        } = Kl(Vb.box);
        if (function(bb, wb, Mb) {
            const eb = Math.max(bb[0] - Mb[0], 0, Mb[0] - wb[0]),
              Hb = Math.max(bb[2] - Mb[2], 0, Mb[2] - wb[2]);
            return Math.hypot(eb, Mb[1] - wb[1], Hb)
          }(gb, lb, Mb) < 6 && Math.random() > QE) return;
        const Lb = [(gb[0] + lb[0]) / 2, lb[1] + .05, (gb[2] + lb[2]) / 2],
          Ib = [(lb[0] - gb[0]) / 2 - .5, .05, (lb[2] - gb[2]) / 2 - .5];
        this.steam ??= bb.createParticles(qE, {
          pos: Lb,
          half: Ib
        }), this.steam.moveTo(Lb, Ib), this.steam.emit(1)
      }
      updateHums(bb, wb, Mb, eb) {
        const Hb = new Map;
        for (const Vb of Mb) "reactor" === Vb.kind && Vb.level > 0 && iE(Vb.box.ctrl, eb) <= 576 && Hb.set(`${pb=Vb.box.ctrl,`${pb[0]},${pb[1]},${pb[2]}`}:${Vb.level}`, Vb);
        var pb;
        for (const [Vb, gb] of this.hums) Hb.has(Vb) || (gb.stop(), this.hums.delete(Vb));
        for (const [Vb, gb] of Hb) {
          if (this.hums.has(Vb)) continue;
          const {
            lo: Mb,
            hi: eb
          } = Kl(gb.box), Hb = [(Mb[0] + eb[0]) / 2, Mb[1], (Mb[2] + eb[2]) / 2], pb = bb.playSound(wb, "rocketEngineLoop", .08 + .06 * gb.level, .55, {
            yM: Hb,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          pb && this.hums.set(Vb, pb)
        }
      }
    }

    function iE(bb, wb) {
      return (bb[0] - wb[0]) ** 2 + (bb[1] - wb[1]) ** 2 + (bb[2] - wb[2]) ** 2
    }
    class uE {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      Tm(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const eb = [bb.baf2BombAt[0], bb.baf2BombAt[1], bb.baf2BombAt[2]],
          Hb = bb.baf2BombR;
        if (bb.baf2BombBoom) {
          const bb = Math.hypot(wb[0] - eb[0], wb[1] - eb[1], wb[2] - eb[2]);
          this.iI({
            fuse: null,
            blast: {
              at: eb,
              r: Hb,
              receivedAt: Mb,
              distance: bb,
              flash: bb <= 3 * Hb
            }
          })
        } else this.iI({
          ...this.snapshot,
          fuse: bb.baf2BombMs > 0 ? {
            at: eb,
            r: Hb,
            endsAt: Mb + bb.baf2BombMs
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
      iI(bb) {
        this.snapshot = bb;
        for (const wb of this.listeners) wb()
      }
    }
    const dE = (0, eb.memo)((function(bb) {
      var wb;
      let {
        store: Mb
      } = bb;
      const {
        t: Hb
      } = (0, KH.C)(), [pb, Vb] = (0, eb.useState)((() => Mb.get())), [gb, lb] = (0, eb.useState)((() => performance.now()));
      (0, eb.useEffect)((() => (Vb(Mb.get()), Mb.subscribe((() => {
        Vb(Mb.get()), lb(performance.now())
      })))), [Mb]);
      const {
        fuse: Lb,
        blast: Ib
      } = pb;
      (0, eb.useEffect)((() => {
        if (!Lb) return;
        const bb = setInterval((() => {
          lb(performance.now())
        }), 250);
        return () => {
          clearInterval(bb)
        }
      }), [Lb]);
      const [Ob, Ub] = (0, eb.useState)(!1);
      (0, eb.useEffect)((() => {
        if (null === Ib || void 0 === Ib || !Ib.flash) return;
        Ub(!0);
        const bb = setTimeout((() => {
          Ub(!1)
        }), 2500);
        return () => {
          clearTimeout(bb)
        }
      }), [Ib]);
      const tb = Lb ? function(bb, wb) {
        return bb.endsAt <= wb ? 0 : Math.ceil((bb.endsAt - wb) / 1e3)
      }(Lb, gb) : 0;
      return (0, sp.jsxs)(sp.Fragment, {
        children: [tb > 0 && (0, sp.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Hb("buildAFactory2Game:bombCountdown", {
            amount: String(tb),
            radius: String(null !== (wb = null === Lb || void 0 === Lb ? void 0 : Lb.r) && void 0 !== wb ? wb : 0)
          })
        }), Ob && (0, sp.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function PE(bb) {
      const wb = Math.min(4, Math.max(1, bb / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * bb / 4)),
        capSpread: Math.min(5 * bb / 8, 24 * wb),
        capThick: 6 * wb,
        stemHalfWidth: 3 * wb,
        puffScale: wb
      }
    }
    class nE {
      constructor() {
        this.dg = !1
      }
      hold(bb) {
        bb.getCameraFar() < 1e3 && (bb.setCameraFar(1e3), this.dg = !0)
      }
      release(bb) {
        this.dg && (this.dg = !1, bb.setCameraFar(null))
      }
    }
    const yE = 1 / .6,
      oE = [.2, .1, .2],
      TE = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      kE = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Dg.d.Standard,
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
      bF = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Dg.d.Standard,
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
      wF = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Dg.d.Standard,
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
      MF = {
        texture: xE,
        qO: Math.ceil(120) + 4,
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
        blendMode: Dg.d.Add
      };
    class eF {
      constructor(bb) {
        this.store = bb, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new nE, this.timers = []
      }
      onAfterRender(bb, wb) {
        const Mb = performance.now(),
          eb = 0 === this.lastMs ? 0 : Math.min(Mb - this.lastMs, 250) / 1e3;
        this.lastMs = Mb;
        const {
          fuse: Hb,
          blast: pb
        } = this.store.get();
        null !== pb && pb !== this.shownBlast && (this.shownBlast = pb, this.startBlast(bb, wb, pb, Mb));
        const Vb = bb.particlesEnabled();
        null !== Hb && Hb.endsAt > Mb && Vb ? this.emitBeacon(bb, Hb, eb, Mb) : this.beaconBudget = 0, null !== this.cloud && (Mb - this.cloud.startMs > 33e3 ? this.disposeCloud(bb) : (this.far.hold(bb), Vb && this.emitCloud(bb, eb, Mb)))
      }
      dispose(bb) {
        var wb;
        null === (wb = this.beacon) || void 0 === wb || wb.dispose(), this.beacon = null, this.disposeCloud(bb);
        for (const Mb of this.timers) clearTimeout(Mb);
        this.timers.length = 0
      }
      emitBeacon(bb, wb, Mb, eb) {
        const Hb = wb.endsAt - eb < 5e3 ? 350 : 1e3,
          pb = .5 + .5 * Math.sin(2 * Math.PI * eb / Hb);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * pb * Mb, 4), this.beaconBudget < 1) return;
        const Vb = Math.floor(this.beaconBudget);
        this.beaconBudget -= Vb;
        const [gb, lb, Lb] = wb.at, Ib = [gb + .5, lb + 1.1, Lb + .5];
        this.beacon ??= bb.createParticles(MF, {
          pos: Ib,
          half: oE
        }), this.beacon.moveTo(Ib), this.beacon.emit(Vb)
      }
      startBlast(bb, wb, Mb, eb) {
        var Hb;
        null === (Hb = this.beacon) || void 0 === Hb || Hb.dispose(), this.beacon = null, this.disposeCloud(bb);
        const pb = (0, rg.isMobile)() ? .5 : 1;
        this.streams = [kE, bF, wF].map((bb => {
          const wb = Math.round(bb.count * pb);
          return {
            spec: bb,
            particles: null,
            rate: wb / ((bb.toMs - bb.fromMs) / 1e3),
            budget: 0,
            left: wb
          }
        })), this.cloud = {
          blast: Mb,
          startMs: eb
        };
        const Vb = Math.max(.25, 1 - Mb.distance / (6 * Mb.r)),
          gb = Mb.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [Mb, eb, Hb] of TE) pF(bb, wb, Mb, Vb * eb, Hb)
        }), gb))
      }
      emitCloud(bb, wb, Mb) {
        const {
          blast: eb,
          startMs: Hb
        } = this.cloud, pb = Mb - Hb, [Vb, gb, lb] = eb.at, Lb = PE(eb.r);
        for (const Ib of this.streams) {
          const {
            spec: Mb
          } = Ib;
          if (Ib.left <= 0 || pb < Mb.fromMs) continue;
          Ib.budget += Ib.rate * wb;
          const Hb = Math.min(Math.floor(Ib.budget), Ib.left);
          if (Hb < 1) continue;
          Ib.budget -= Hb, Ib.left -= Hb;
          const Ob = Ib.particles ??= this.createStream(bb, Mb, eb);
          if (Mb === kE) {
            const bb = Lb.stemHalfWidth;
            Ob.moveTo([Vb, gb + 1, lb], [bb, 1, bb])
          } else if (Mb === bF) {
            const bb = Lb.capSpread * Math.min(1, (pb - Mb.fromMs) / 3e3),
              wb = Math.sqrt(Math.random()),
              eb = 2 * Math.random() * Math.PI,
              Hb = Math.cos(eb) * wb,
              Ib = Math.sin(eb) * wb,
              Ub = Vb + Hb * bb,
              tb = lb + Ib * bb,
              Cb = Lb.capThick,
              Eb = gb + Lb.capHeight + Cb * (1 - wb * wb) * 2;
            Ob.setDirections([.7 * Hb, .05, .7 * Ib], [Hb, .2, Ib]), Ob.moveTo([Ub, Eb, tb], [Cb, Cb, Cb])
          } else {
            this.ringAngle += 2.39996;
            const bb = Math.cos(this.ringAngle),
              wb = Math.sin(this.ringAngle);
            Ob.setDirections([bb, .05, wb], [bb, .1, wb]), Ob.moveTo([Vb + 2 * bb, gb + .5, lb + 2 * wb], [0, .5, 0])
          }
          Ob.emit(Hb)
        }
      }
      createStream(bb, wb, Mb) {
        const {
          r: eb
        } = Mb, Hb = Math.max(wb.life[0], eb / 25), pb = wb === wF ? [.9 * Hb, Hb] : wb.life, Vb = PE(eb), gb = wb === wF ? 1 : Vb.puffScale, lb = {
          texture: xE,
          qO: wb.count + 4,
          minLifeTime: pb[0] / yE,
          maxLifeTime: pb[1] / yE,
          minSize: wb.size[0] * gb,
          maxSize: wb.size[1] * gb,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, wb.gravity * yE * yE, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: wb.from[0],
            maxColor: wb.from[1]
          }, {
            timeFraction: .6,
            minColor: HF(wb.from[0], wb.to[0]),
            maxColor: HF(wb.from[1], wb.to[1])
          }, {
            timeFraction: 1,
            minColor: wb.to[0],
            maxColor: wb.to[1]
          }],
          blendMode: wb.blend
        };
        if (wb === kE) {
          const bb = Vb.capHeight / ((pb[0] + pb[1]) / 2);
          lb.minEmitPower = .9 * bb * yE, lb.maxEmitPower = 1.05 * bb * yE, lb.dir1 = [-.1, 1, -.1], lb.dir2 = [.1, 1, .1]
        } else wb === bF ? (lb.minEmitPower = 1.2, lb.maxEmitPower = 2, lb.dir1 = [-1, .05, -1], lb.dir2 = [1, .2, 1]) : (lb.minEmitPower = 39.583333333333336, lb.maxEmitPower = 41.66666666666667, lb.dir1 = [1, 0, 0], lb.dir2 = [1, 0, 0]);
        return bb.createParticles(lb, {
          pos: Mb.at
        })
      }
      disposeCloud(bb) {
        for (const Mb of this.streams) {
          var wb;
          null === (wb = Mb.particles) || void 0 === wb || wb.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(bb)
      }
    }

    function HF(bb, wb) {
      return [(bb[0] + wb[0]) / 2, (bb[1] + wb[1]) / 2, (bb[2] + wb[2]) / 2, .75 * bb[3]]
    }

    function pF(bb, wb, Mb, eb, Hb) {
      try {
        bb.playSound(wb, Mb, eb, Hb)
      } catch (pb) {
        console.error(pb)
      }
    }
    const VF = {
        qO: 720,
        perS: 100
      },
      gF = {
        qO: 320,
        perS: 44
      };
    class lF {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(bb, wb) {
        this.zone = {
          centre: [...bb.centre],
          r: bb.r,
          band: bb.band ? [bb.band[0], bb.band[1]] : void 0
        }, this.endsAt = wb
      }
      stop() {
        this.zone = null
      }
      Tm(bb, wb) {
        const {
          baf2FalloutMs: Mb,
          baf2FalloutAt: eb,
          baf2FalloutR: Hb,
          baf2FalloutY: pb
        } = bb;
        Mb > 0 && eb && void 0 !== Hb ? this.start({
          centre: eb,
          r: Hb,
          band: pb
        }, wb + Mb) : this.stop()
      }
      perS(bb, wb, Mb) {
        const eb = this.zone;
        if (!eb) return 0;
        const Hb = this.endsAt - bb;
        return Hb <= 0 ? (this.zone = null, 0) : eb.band && (wb[1] < eb.band[0] || wb[1] > eb.band[1]) || Math.hypot(wb[0] - eb.centre[0], wb[2] - eb.centre[2]) > eb.r ? 0 : Mb.perS * Math.min(1, Hb / 5e3)
      }
    }
    const LF = [5, 7],
      IF = [24, 8, 24],
      OF = .5,
      UF = 1 / .6,
      tF = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class CF {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, rg.isMobile)();
        this.state = new lF, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(bb) {
          return bb ? gF : VF
        }(bb)
      }
      startFallout(bb, wb) {
        this.state.start(bb, wb)
      }
      stopFallout() {
        this.state.stop()
      }
      Tm(bb) {
        this.state.Tm(bb, performance.now())
      }
      onAfterRender(bb, wb) {
        var Mb;
        const eb = performance.now(),
          Hb = 0 === this.lastMs ? 0 : Math.min(eb - this.lastMs, 250) / 1e3;
        this.lastMs = eb;
        const pb = this.state.perS(eb, wb, this.tier);
        if (pb <= 0 || !bb.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + pb * Hb, pb / 4);
        const Vb = Math.floor(this.budget);
        if (Vb < 1) return;
        this.budget -= Vb;
        const gb = this.at;
        gb[0] = wb[0], gb[1] = wb[1] + 12, gb[2] = wb[2];
        const lb = null !== (Mb = this.systems) && void 0 !== Mb ? Mb : this.create(bb, gb),
          Lb = this.amounts;
        Lb[0] = 0, Lb[1] = 0;
        for (let Ib = 0; Ib < Vb; Ib++) Lb[Math.random() < .3 ? 1 : 0]++;
        for (let Ib = 0; Ib < lb.length; Ib++) Lb[Ib] > 0 && (lb[Ib].moveTo(gb, IF), lb[Ib].emit(Lb[Ib]))
      }
      dispose() {
        for (const wb of null !== (bb = this.systems) && void 0 !== bb ? bb : []) {
          var bb;
          wb.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(bb, wb) {
        return this.systems = tF.map((Mb => {
          let {
            rgba: [eb, Hb, pb, Vb],
            share: gb
          } = Mb;
          const lb = {
            texture: "square_particle",
            qO: Math.ceil(this.tier.qO * gb),
            minLifeTime: LF[0] / UF,
            maxLifeTime: LF[1] / UF,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [OF, -1, OF],
            colorGradients: [{
              timeFraction: 0,
              minColor: [eb, Hb, pb, 0]
            }, {
              timeFraction: .15,
              minColor: [eb, Hb, pb, Vb]
            }, {
              timeFraction: .8,
              minColor: [eb, Hb, pb, Vb]
            }, {
              timeFraction: 1,
              minColor: [eb, Hb, pb, 0]
            }],
            blendMode: Dg.d.Standard
          };
          return bb.createParticles(lb, {
            pos: wb,
            half: IF
          })
        })), this.systems
      }
    }
    const EF = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function FF(bb) {
      const wb = /\|rot(\d)/.exec(bb);
      return EF[wb ? Number(wb[1]) : 1]
    }
    var BF = Mb(655),
      sF = Mb(39687);
    const mF = new Set(BF.n);

    function hF(bb) {
      if (-2 !== bb.count) return null;
      const wb = ab(bb.item);
      return null !== wb && mF.has(wb) ? wb : null
    }

    function zF(bb) {
      const {
        width: wb,
        height: Mb
      } = (0, sF.c)(bb).hitBoxDimensions;
      return .55 / Math.max(wb, Mb)
    }

    function XF(bb, wb, Mb) {
      if (!Mb) return !1;
      const eb = bb[0] + .5 - wb[0],
        Hb = bb[1] + .5 - wb[1],
        pb = bb[2] + .5 - wb[2];
      return eb * eb + Hb * Hb + pb * pb <= 576
    }

    function xF(bb, wb) {
      return Math.atan2(bb[0], bb[2]) + Math.PI + wb
    }

    function jF(bb, wb) {
      const Mb = 2 * Math.PI;
      return (bb + Mb * wb / 1e4) % Mb
    }
    class KF {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = bb, this.now = wb, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = bb.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(bb, wb) {
        if (0 === this.farms.size) return;
        const Mb = this.now(),
          eb = Number.isNaN(this.frameMs) ? 0 : Math.min(Mb - this.frameMs, 100);
        this.frameMs = Mb, Mb - this.checkedMs >= 1e3 && (this.checkedMs = Mb, this.check(bb, wb));
        for (const Hb of this.farms.values()) Hb.shown && Hb.running && null !== Hb.model && eb > 0 && (Hb.spin = jF(Hb.spin, eb), Hb.model.setPose(Hb.feet, xF(Hb.front, Hb.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const bb of this.farms.values()) this.drop(bb);
        this.farms.clear()
      }
      sync() {
        const bb = new Set;
        for (const wb of this.labels.list()) {
          const Mb = hF(wb);
          if (null === Mb) continue;
          bb.add(wb.key);
          const eb = this.farms.get(wb.key);
          if ((null === eb || void 0 === eb ? void 0 : eb.mob) === Mb) continue;
          eb && this.drop(eb);
          const [Hb, pb, Vb] = wb.pos;
          this.farms.set(wb.key, {
            pos: wb.pos,
            feet: [Hb + .5, pb + 1, Vb + .5],
            mob: Mb,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [wb, Mb] of this.farms) bb.has(wb) || (this.drop(Mb), this.farms.delete(wb));
        this.checkedMs = -1 / 0
      }
      check(bb, wb) {
        for (const Mb of this.farms.values()) {
          const [eb, Hb, pb] = Mb.pos, Vb = DC(bb, Mb.pos);
          null !== Vb && ZM(Vb) === Wb && XF(Mb.pos, wb, "Air" === DC(bb, [eb, Hb + 1, pb])) ? (Mb.running = Vb.endsWith("|Running"), Mb.front = FF(Vb), null === Mb.model && (Mb.model = bb.createMobModel(Mb.mob, zF(Mb.mob)), null === Mb.model) || (Mb.model.setPose(Mb.feet, xF(Mb.front, Mb.spin)), Mb.shown || (Mb.model.setVisible(!0), Mb.shown = !0))) : (Mb.shown && null !== Mb.model && Mb.model.setVisible(!1), Mb.shown = !1)
        }
      }
      drop(bb) {
        var wb;
        null === (wb = bb.model) || void 0 === wb || wb.dispose(), bb.model = null, bb.shown = !1
      }
    }
    class rF {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(bb) {
        var wb;
        this.island = bb.baf2ColIsland, this.islandSite = (wb = bb.baf2ColSite) && 8 === wb.length ? {
          spawnXZ: [wb[0], wb[1]],
          coreXZ: [wb[2], wb[3]],
          minXZ: [wb[4], wb[5]],
          maxXZ: [wb[6], wb[7]]
        } : null, this.views = bb.baf2ColList.map((bb => ({
          entry: pH(bb)
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
        var wb;
        return null === (wb = this.views.find((wb => {
          let {
            entry: Mb
          } = wb;
          return Mb.focus[0] === bb[0] && Mb.focus[1] === bb[1] + 1 && Mb.focus[2] === bb[2]
        }))) || void 0 === wb ? void 0 : wb.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(bb, wb) {
        return fl(this.entries(), bb, wb)
      }
      lookSource() {
        return {
          handles: bb => te(bb) >= 0 || Ce(bb),
          line: (bb, wb) => this.lookLine(bb, wb),
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
    const RF = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((bb => bb / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((bb => [bb, bb + 1, bb + 2, bb, bb + 2, bb + 3]))
    };

    function DF(bb, wb, Mb, eb, Hb, pb, Vb) {
      let gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const lb = Math.cos(gb),
        Lb = Math.sin(gb),
        Ib = bb.positions.length / 3,
        {
          positions: Ob,
          indices: Ub
        } = RF;
      for (let tb = 0; tb < Ob.length; tb += 3) {
        const gb = Ob[tb] * Hb,
          Ib = Ob[tb + 2] * Vb;
        bb.positions.push(wb + gb * lb + Ib * Lb, Mb + Ob[tb + 1] * pb, eb - gb * Lb + Ib * lb)
      }
      for (const tb of Ub) bb.indices.push(Ib + tb)
    }

    function cF(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return wb < 1 ? {
        rgb: bb,
        alpha: wb
      } : {
        rgb: bb,
        alpha: 1,
        opaque: !0
      }
    }
    class YF {
      constructor(bb, wb) {
        this.style = bb, this.perSource = wb, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(bb) {
        this.sources = bb, 0 === bb.length && (this.budget = 0)
      }
      sO(bb, wb, Mb) {
        const eb = this.sources.length;
        if (0 !== eb) {
          var Hb, pb;
          this.budget = Math.min(this.budget + (Hb = eb, pb = this.perSource, Math.min(Hb * pb, Pl) * wb), 2);
          for (let wb = 0; wb < eb && this.budget >= 1; wb++) {
            const wb = this.sources[this.cursor % eb];
            this.cursor = (this.cursor + 1) % eb;
            if (!(Math.max(Math.abs(wb.x - Mb[0]), Math.abs(wb.y - Mb[1]), Math.abs(wb.z - Mb[2])) > 32)) return this.puff(bb, wb), void this.budget--
          }
        }
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.dispose(), this.particles = null, this.sources = []
      }
      puff(bb, wb) {
        let {
          x: Mb,
          y: eb,
          z: Hb,
          h: pb,
          faces: Vb
        } = wb;
        const gb = function(bb, wb, Mb, eb, Hb) {
            const [pb, Vb, gb] = Hb[Math.floor(Math.random() * Hb.length)], lb = .04, Lb = (bb, wb, Mb) => bb > 0 ? wb + Mb + lb : bb < 0 ? wb - lb : wb + .1, Ib = (bb, wb, Mb) => bb > 0 ? wb + Mb + lb : bb < 0 ? wb - lb : wb + Mb - .1, Ob = [Lb(pb, bb, 1), Lb(Vb, wb, eb), Lb(gb, Mb, 1)], Ub = [Ib(pb, bb, 1), Ib(Vb, wb, eb), Ib(gb, Mb, 1)];
            return {
              pos: [(Ob[0] + Ub[0]) / 2, (Ob[1] + Ub[1]) / 2, (Ob[2] + Ub[2]) / 2],
              half: [(Ub[0] - Ob[0]) / 2, (Ub[1] - Ob[1]) / 2, (Ub[2] - Ob[2]) / 2],
              out: [pb, Vb, gb]
            }
          }(Mb, eb, Hb, pb, Vb),
          {
            style: lb
          } = this,
          Lb = this.particles ??= bb.createParticles(KE(lb, Math.ceil(lb.count * Pl * lb.life[1]) + 4), gb);
        Lb.moveTo(gb.pos, gb.half);
        const [Ib, Ob, Ub] = gb.out, tb = lb.spread;
        Lb.setDirections([Ib - tb, .6 + Ob, Ub - tb], [Ib + tb, 1 + Ob, Ub + tb]), Lb.emit(lb.count)
      }
    }
    const ZF = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class fF {
      constructor() {
        this.green = new YF(yl.green, ul), this.pink = new YF(yl.pink, dl), this.colliders = [], this.lastMs = 0
      }
      setSources(bb) {
        this.colliders = bb;
        const wb = [],
          Mb = [];
        for (const eb of bb) {
          const [bb, Hb, pb] = eb.focus;
          wb.push({
            x: bb,
            y: Hb - 1,
            z: pb,
            h: 2,
            faces: ZF
          });
          for (let wb = 0; wb < 4; wb++) {
            if (!eb.live[wb]) continue;
            const [bb, Hb, pb] = Be(eb.focus, wb, ge.LASER_D), [Vb, , gb] = Fe[wb], lb = ZF.filter((bb => bb[0] !== Vb || bb[2] !== gb || 0 !== bb[1]));
            Mb.push({
              x: bb,
              y: Hb,
              z: pb,
              h: 1,
              faces: lb
            })
          }
        }
        this.green.setSources(wb), this.pink.setSources(Mb)
      }
      onAfterRender(bb) {
        const wb = performance.now(),
          Mb = 0 === this.lastMs ? 0 : Math.min(wb - this.lastMs, 250) / 1e3;
        if (this.lastMs = wb, 0 === this.colliders.length || !bb.particlesEnabled()) return;
        const eb = bb.getCameraPosition();
        this.green.sO(bb, Mb, eb), this.pink.sO(bb, Mb, eb)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const AF = 1.04,
      WF = cF([1, 120 / 255, 220 / 255]),
      JF = cF([1, .25, .25], .35);
    class SF {
      constructor(bb) {
        this.store = bb, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new fF
      }
      onAfterRender(bb) {
        this.store.version() !== this.builtVersion && this.rebuild(bb);
        const wb = performance.now();
        for (const Mb of this.beams) {
          const eb = 1 + .35 * Math.sin(wb / 700 * Math.PI * 2 + Mb.phase);
          bb.setGameMesh(Mb.mesh, {
            scale: [Mb.alongX ? 1 : eb, eb, Mb.alongX ? eb : 1]
          })
        }
        this.glow.onAfterRender(bb)
      }
      dispose(bb) {
        this.clear(bb), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(bb) {
        this.clear(bb), this.builtVersion = this.store.version();
        const wb = [];
        for (const {
            entry: Mb
          }
          of this.store.colliders()) Mb.on && Mb.live.some(Boolean) && (this.addBeams(bb, Mb), wb.push(Mb)), Mb.blockers.length > 0 && this.addMarkers(bb, Mb);
        this.glow.setSources(wb)
      }
      addBeams(bb, wb) {
        const [Mb, eb, Hb] = wb.focus, pb = il - .25, Vb = (.25 + il) / 2;
        for (let gb = 0; gb < 4; gb++) {
          if (!wb.live[gb]) continue;
          const [lb, , Lb] = Fe[gb], Ib = 0 !== lb, Ob = {
            positions: [],
            indices: []
          };
          DF(Ob, 0, 0, 0, Ib ? pb : .2, .2, Ib ? .2 : pb);
          const Ub = [Mb + .5 + lb * Vb, eb + .5, Hb + .5 + Lb * Vb],
            tb = bb.createGameMesh(Ob, WF, Ub);
          this.meshes.push(tb), this.beams.push({
            mesh: tb,
            alongX: Ib,
            phase: gb * Math.PI / 2
          })
        }
      }
      addMarkers(bb, wb) {
        const Mb = wb.blockers[0],
          eb = {
            positions: [],
            indices: []
          };
        for (const [Hb, pb, Vb] of wb.blockers) DF(eb, Hb - Mb[0] + .5, pb - Mb[1] + .5, Vb - Mb[2] + .5, AF, AF, AF);
        this.meshes.push(bb.createGameMesh(eb, JF, Mb))
      }
      clear(bb) {
        for (const wb of this.meshes) bb.disposeGameMesh(wb);
        this.meshes = [], this.beams = []
      }
    }
    const NF = [.56, .83, 1],
      vF = [1, .73, .08],
      QF = [1, .25, .25],
      GF = [.85, .85, .85],
      qF = [.3, .45, .6];

    function aF(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Vb = Hb / 2,
        gb = Hb + pb;
      for (const lb of [-Vb, Vb])
        for (const Hb of [-Vb, Vb]) DF(bb, wb, Mb + lb, eb + Hb, gb, pb, pb), DF(bb, wb + lb, Mb, eb + Hb, pb, gb, pb), DF(bb, wb + lb, Mb + Hb, eb, pb, pb, gb)
    }

    function iF(bb) {
      return wb => bb.isBlockInLoadedChunk(wb[0], wb[1], wb[2]) && 0 === bb.getBlockId(wb[0], wb[1], wb[2])
    }

    function uF(bb) {
      return bb.map((bb => {
        let {
          free: wb,
          blocked: Mb,
          gaps: eb,
          supports: Hb
        } = bb;
        return `${wb.join(";")}|${Mb.join(";")}|${eb.join(";")}|${Hb.join(";")}`
      })).join("/")
    }

    function dF(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const pb = wb[0],
        Vb = {
          positions: [],
          indices: []
        };
      for (const [gb, lb, Lb] of wb) aF(Vb, gb - pb[0] + .5, lb - pb[1] + .5, Lb - pb[2] + .5, eb, Hb);
      return bb.createGameMesh(Vb, Mb, pb)
    }
    class PF {
      constructor(bb) {
        this.store = bb, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(bb, wb, Mb) {
        var eb;
        const Hb = null === (eb = bb.Leb(wb)) || void 0 === eb ? void 0 : eb.name;
        if (Hb !== Le && Hb !== le) return void("" !== this.shownKey && this.show(bb, "", []));
        const pb = performance.now();
        if (pb - this.lastCheckMs >= 200 && (this.lastCheckMs = pb, Hb === Le ? this.check(bb, Mb) : this.preview(bb, Mb)), this.pulses.length > 0) {
          const wb = 1 + .12 * Math.sin(pb / 1e3 * 1.25 * Math.PI * 2),
            Mb = [wb, wb, wb];
          for (const eb of this.pulses) bb.setGameMesh(eb, {
            scale: Mb
          })
        }
      }
      dispose(bb) {
        this.clear(bb), this.shownKey = ""
      }
      check(bb, wb) {
        const Mb = iF(bb),
          eb = [];
        for (const {
            entry: pb
          }
          of this.store.colliders()) {
          pb.focus.every(((bb, Mb) => Math.abs(bb + .5 - wb[Mb]) <= ge.GHOST_REACH)) && eb.push(al(pb, Mb))
        }
        const Hb = uF(eb);
        Hb !== this.shownKey && this.show(bb, Hb, eb)
      }
      preview(bb, wb) {
        const Mb = bb.getTargetedBlock(),
          eb = Mb ? [Mb.VF[0], Mb.VF[1], Mb.VF[2]] : null,
          Hb = null !== eb && eb.every(((bb, Mb) => Math.abs(bb + .5 - wb[Mb]) <= 8)),
          pb = this.store.site(),
          Vb = Hb && pb ? function(bb, wb, Mb) {
            const eb = Ee(bb);
            if (!eb.every(wb)) return null;
            const Hb = he(bb, Mb);
            return {
              column: eb,
              spots: al({
                focus: eb[1],
                lasers: [!1, !1, !1, !1],
                open: Hb,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, wb),
              fits: Hb.filter(Boolean).length >= ge.MIN_SPOTS
            }
          }(eb, iF(bb), pb) : null,
          gb = Vb ? [Vb.spots] : [],
          lb = Vb ? `preview ${eb.join(",")}|${Vb.fits}|${uF(gb)}` : "";
        var Lb, Ib;
        lb !== this.shownKey && this.show(bb, lb, gb, null !== (Lb = null === Vb || void 0 === Vb ? void 0 : Vb.column) && void 0 !== Lb ? Lb : [], null === (Ib = null === Vb || void 0 === Vb ? void 0 : Vb.fits) || void 0 === Ib || Ib)
      }
      show(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Hb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(bb), this.shownKey = wb, eb.length > 0 && this.meshes.push(dF(bb, eb, cF(Hb ? GF : QF)));
        for (const {
            free: pb,
            blocked: Vb,
            gaps: gb,
            supports: lb
          }
          of Mb) {
          for (const [wb, Mb, eb] of pb) {
            const Hb = {
              positions: [],
              indices: []
            };
            aF(Hb, 0, 0, 0);
            const pb = bb.createGameMesh(Hb, cF(NF), [wb + .5, Mb + .5, eb + .5]);
            this.meshes.push(pb), this.pulses.push(pb)
          }
          Vb.length > 0 && this.meshes.push(dF(bb, Vb, cF(vF))), gb.length > 0 && this.meshes.push(dF(bb, gb, cF(QF), 1.06, .07)), lb.length > 0 && this.meshes.push(dF(bb, lb, cF(qF)))
        }
      }
      clear(bb) {
        for (const wb of this.meshes) bb.disposeGameMesh(wb);
        this.meshes = [], this.pulses = []
      }
    }
    class nF {
      constructor() {
        this.stored = new Map, this.dg = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(bb) {
        if (!bb.baf2TermOpen) return !1;
        bb.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [wb, Mb] of bb.baf2TermItems) Mb > 0 ? this.stored.set(wb, Mb) : this.stored.delete(wb);
        if (bb.baf2TermHeld && (this.dg = new Map(bb.baf2TermHeld)), this.pending = this.pending.filter((wb => wb.seq > bb.baf2TermAcked)), this.silos = bb.baf2TermSilos, this.readOnly = bb.baf2TermReadOnly, this.pocket = !0 === bb.baf2TermPocket, bb.baf2TermReset) this.resort();
        else {
          const bb = new Set(this.order);
          for (const wb of this.stored.keys()) bb.has(wb) || this.order.push(wb)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((bb, wb) => this.amount(wb) - this.amount(bb) || bb.localeCompare(wb))), this.changed()
      }
      take(bb, wb) {
        const Mb = gw(bb, this.amount(wb));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: wb,
          amount: Mb,
          put: !1
        }), this.recents = [wb, ...this.recents.filter((bb => bb !== wb))].slice(0, 6), this.changed(), Mw(this.seq, bb, wb)
      }
      put(bb, wb) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: wb,
          amount: gw(bb, this.heldAmount(wb)),
          put: !0
        }), this.changed(), ew(this.seq, bb, wb)
      }
      putAll() {
        this.seq++;
        for (const bb of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: bb,
          amount: this.heldAmount(bb),
          put: !0
        });
        return this.changed(), Hw(this.seq)
      }
      amount(bb) {
        var wb;
        let Mb = null !== (wb = this.stored.get(bb)) && void 0 !== wb ? wb : 0;
        for (const eb of this.pending) eb.item === bb && (Mb += eb.put ? eb.amount : -eb.amount);
        return Math.max(0, Mb)
      }
      heldAmount(bb) {
        var wb;
        let Mb = null !== (wb = this.dg.get(bb)) && void 0 !== wb ? wb : 0;
        for (const eb of this.pending) eb.put && eb.item === bb && (Mb -= eb.amount);
        return Math.max(0, Mb)
      }
      heldItems() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((wb => wb === bb || this.heldAmount(wb) > 0))
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
    var yF = Mb(39635);
    const oF = {
      isBlock: bb => void 0 !== Yb.g[bb],
      harvestType: bb => {
        var wb;
        return null === (wb = Yb.g[bb]) || void 0 === wb ? void 0 : wb.harvestType
      },
      harvestLevel: bb => {
        var wb;
        return null === (wb = Yb.g[bb]) || void 0 === wb ? void 0 : wb.harvestLevel
      },
      dropsNothing: bb => {
        var wb;
        return null === (null === (wb = Yb.g[bb]) || void 0 === wb ? void 0 : wb.drops)
      },
      displayName: bb => {
        var wb;
        return null === (wb = dV.o[bb]) || void 0 === wb ? void 0 : wb.displayName
      },
      description: bb => {
        var wb;
        return null === (wb = dV.o[bb]) || void 0 === wb ? void 0 : wb.description
      },
      harvests: bb => {
        var wb;
        return null === (wb = dV.o[bb]) || void 0 === wb ? void 0 : wb.harvests
      },
      level: bb => {
        var wb;
        return null === (wb = dV.o[bb]) || void 0 === wb ? void 0 : wb.level
      }
    };

    function TF(bb, wb, Mb) {
      return function(bb, wb, Mb, eb) {
        var Hb, pb;
        const Vb = wb.split("|")[0],
          gb = bb.isBlock(wb) ? wb : bb.isBlock(Vb) ? Vb : null;
        if (null === gb || "rock" !== bb.harvestType(gb) || bb.dropsNothing(gb) && !Se.has(Vb)) return null;
        const lb = Mb && "rock" === bb.harvests(Mb) ? null !== (Hb = bb.level(Mb)) && void 0 !== Hb ? Hb : 0 : null,
          Lb = null !== (pb = null !== eb && void 0 !== eb ? eb : bb.harvestLevel(gb)) && void 0 !== pb ? pb : 0;
        return (null !== lb ? Lb <= lb : 0 === bb.harvestLevel(gb)) ? null : Re(bb, Lb)
      }(oF, bb, wb, Mb)
    }

    function kF(bb, wb) {
      return function(bb, wb, Mb) {
        if (wb === re[0]) return [(0, Ab.de)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Ab.O.whiteUiText)];
        const eb = Mb.split("|")[0],
          Hb = bb.isBlock(eb) ? bb.displayName(eb) : void 0,
          pb = "string" === typeof Hb ? Hb : Hb && "translationKey" in Hb ? `$t(${Hb.translationKey})` : eb;
        return [(0, Ab.de)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: pb
          }
        }, Ab.O.whiteUiText), (0, Ab.de)({
          translationKey: `item:${(0,Ab.De)(wb)}`
        }, Ab.O.yellowUiText)]
      }(oF, bb, wb)
    }
    const bB = "buildAFactory2Game:";
    const wB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function MB(bb) {
      return bb.endsWith(" Ore")
    }
    const eB = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      HB = [],
      pB = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: eB,
        plan: null,
        atomic: HB
      },
      VB = "buildAFactory2Game:",
      gB = new Set(["Splitter", "Sorting Gate"]),
      lB = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class LB {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = bb, this.planAt = wb, this.tierOf = Mb, this.Lg = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.dg = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = pB, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(bb, wb, Mb) {
        var eb, Hb, pb;
        let Vb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const gb = null !== (eb = null === (Hb = bb.Leb(wb)) || void 0 === Hb ? void 0 : Hb.name) && void 0 !== eb ? eb : null,
          lb = bb.isPlayerCrouching(wb),
          Lb = 0 === Mb ? null : this.resolve(bb, Mb),
          Ib = null !== Lb && null !== Vb && gB.has(Lb.rootName) && function(bb, wb) {
            return lB.some((Mb => {
              let [eb, Hb] = Mb;
              const pb = bb.getBlockId(wb[0] + eb, wb[1], wb[2] + Hb);
              return 0 !== pb && "Express Belt" === bb.getMetaInfo(pb).rootName
            }))
          }(bb, Vb),
          Ob = this.updatePlan(0 === Mb ? null : Vb),
          Ub = this.tierOf(),
          tb = null === Vb ? null : (0, yF.f)(Mb),
          Cb = null !== tb && null !== Vb && (0, yF.j)(function(bb) {
            return (wb, Mb, eb) => bb.getBlockId(wb, Mb, eb)
          }(bb), Vb[0], Vb[1], Vb[2], tb),
          Eb = this.readAfloat(bb, Mb, Vb);
        if (Mb === this.Lg && Cb === this.missesMaker && Eb === this.afloat && gb === this.dg && lb === this.crouching && Ib === this.express && Ub === this.tier && !Ob && (!this.targetsLive || !this.liveMoved(Vb))) return;
        this.Lg = Mb, this.missesMaker = Cb, this.afloat = Eb, this.dg = gb, this.crouching = lb, this.express = Ib;
        const Fb = Ib && Lb ? function(bb) {
          if (null === bb.info) return null;
          return bb.express ??= {
            ...bb.info,
            detail: `${VB}lookKeepsUpExpress`,
            detailItem: null
          }, bb.express
        }(Lb) : null !== Lb && Cb && null !== tb ? this.besideMaker(Lb, Mb, tb) : null !== Lb && Eb ? this.hanging(Lb) : null !== (pb = null === Lb || void 0 === Lb ? void 0 : Lb.info) && void 0 !== pb ? pb : null;
        this.tier = Ub;
        const Bb = Lb && Fb ? function(bb, wb) {
          var Mb, eb;
          const Hb = Yb.g[bb];
          if (!bb.endsWith(" Ore") || "rock" !== (null === Hb || void 0 === Hb ? void 0 : Hb.harvestType) || 0 === Hb.harvestLevel) return null;
          const pb = null !== (Mb = Hb.harvestLevel) && void 0 !== Mb ? Mb : 0,
            Vb = wb ? dV.o[wb] : void 0;
          if ("rock" === (null === Vb || void 0 === Vb ? void 0 : Vb.harvests) && (null !== (eb = Vb.level) && void 0 !== eb ? eb : 0) >= pb) return null;
          const gb = (lb = pb, Re(oF, lb));
          var lb;
          if (null === gb) return null;
          const Lb = (0, kH.d)(gb),
            Ib = /^[AEIOU]/.test(gb) ? "An" : "";
          if ("rock" === (null === Vb || void 0 === Vb ? void 0 : Vb.harvests) && wb) return {
            key: `${VB}lookToolTooWeak${Ib}`,
            dg: (0, kH.d)(wb),
            needed: Lb
          };
          return {
            key: gb === re[0] ? `${VB}lookNeedAnyPickaxe` : `${VB}lookNeedPickaxe${Ib}`,
            dg: null,
            needed: Lb
          }
        }(Lb.rootName, gb) : null;
        this.targetsLive = !0 === (null === Lb || void 0 === Lb ? void 0 : Lb.live) && null !== Vb;
        let sb = null;
        this.targetsLive && Lb && Vb && this.live && (this.livePos[0] = Vb[0], this.livePos[1] = Vb[1], this.livePos[2] = Vb[2], this.liveVersion = this.live.version(), sb = this.live.line(Lb.rootName, Vb));
        const mb = null === Fb ? eB : function(bb, wb, Mb) {
            const eb = function(bb, wb, Mb) {
              const eb = AM(bb);
              if (null === eb) return null;
              const Hb = `${bB}lookPortMode_${eb}`,
                pb = Qe(wb);
              if (pb && Mb) return {
                mode: null,
                detail: Hb,
                next: `${bB}lookWrenchPickUp`,
                nextState: null
              };
              const Vb = WM(bb),
                gb = null === Vb ? null : AM(Vb);
              return null === gb ? {
                mode: null,
                detail: Hb,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Hb,
                next: pb ? `${bB}lookWrenchNext` : `${bB}lookPortWrench`,
                nextState: `${bB}lookPortState_${gb}`
              }
            }(bb, wb, Mb);
            if (null !== eb) return eb;
            const Hb = wH(bb, wb, Mb);
            return null === Hb.mode && null === Hb.next ? eB : Hb
          }(bb.blockIdToBlockName(Mb), gb, lb),
          hb = this.plan,
          zb = Lb && Fb ? this.rowsOf(Lb.rootName, Ub) : HB,
          Xb = this.snapshot;
        if (!(null === Fb ? !Xb.visible : Xb.visible && Fb === Xb.info && (xb = Bb, jb = Xb.tool, xb === jb || null !== xb && null !== jb && xb.key === jb.key && xb.dg === jb.dg && xb.needed === jb.needed) && function(bb, wb) {
            return bb === wb || null !== bb && null !== wb && bb.key === wb.key && JSON.stringify([bb.params, bb.keys]) === JSON.stringify([wb.params, wb.keys])
          }(sb, Xb.live) && function(bb, wb) {
            return bb.mode === wb.mode && bb.detail === wb.detail && bb.next === wb.next && bb.nextState === wb.nextState
          }(mb, Xb.wrench) && QC(hb, Xb.plan) && zb === Xb.atomic)) {
          var xb, jb;
          this.snapshot = null === Fb ? {
            ...Xb,
            visible: !1
          } : {
            info: Fb,
            visible: !0,
            tool: Bb,
            live: sb,
            wrench: mb,
            plan: hb,
            atomic: zb
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = pB, this.Lg = 0, this.dg = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(bb, wb, Mb) {
        if (null === Mb || 0 === wb || !gb() || !MB(this.resolve(bb, wb).rootName)) return !1;
        const eb = `${Mb[0]},${Mb[1]},${Mb[2]},${wb}`,
          Hb = performance.now();
        return eb === this.afloatKey && Hb - this.afloatAt < IB ? this.afloat : (this.afloatKey = eb, this.afloatAt = Hb, function(bb, wb) {
          for (const [Mb, eb, Hb] of wB) {
            const pb = wb(bb[0] + Mb, bb[1] + eb, bb[2] + Hb);
            if (void 0 === pb || null !== pb && !MB(pb)) return !1
          }
          return !0
        }(Mb, ((wb, Mb, eb) => function(bb, wb, Mb, eb) {
          if (!bb.isBlockInLoadedChunk(wb, Mb, eb)) return;
          const Hb = bb.getBlockId(wb, Mb, eb);
          return 0 === Hb ? null : bb.getMetaInfo(Hb).rootName
        }(bb, wb, Mb, eb))))
      }
      liveMoved(bb) {
        var wb;
        const {
          livePos: Mb
        } = this;
        return null === bb || bb[0] !== Mb[0] || bb[1] !== Mb[1] || bb[2] !== Mb[2] || (null === (wb = this.live) || void 0 === wb ? void 0 : wb.version()) !== this.liveVersion
      }
      updatePlan(bb) {
        const wb = null === bb ? "" : bb.join(","),
          Mb = performance.now();
        if (wb === this.planPos && Mb - this.planMs < 250) return !1;
        this.planPos = wb, this.planMs = Mb;
        const eb = null === bb ? null : this.planAt([bb[0], bb[1], bb[2]]),
          Hb = !QC(eb, this.plan);
        return this.plan = eb, Hb
      }
      besideMaker(bb, wb, Mb) {
        let {
          info: eb
        } = bb;
        if (null === eb) return null;
        let Hb = this.besideMakerById.get(wb);
        if (void 0 === Hb) {
          const bb = "cryo" === Mb ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Hb = {
            ...eb,
            detail: `${VB}${bb}`,
            detailItem: null
          }, this.besideMakerById.set(wb, Hb)
        }
        return Hb
      }
      hanging(bb) {
        let {
          info: wb,
          rootName: Mb
        } = bb;
        if (null === wb) return null;
        let eb = this.afloatByRoot.get(Mb);
        return void 0 === eb && (eb = {
          ...wb,
          detail: `${VB}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(Mb, eb)), eb
      }
      rowsOf(bb, wb) {
        if (null === wb) return HB;
        const Mb = `${bb}|${wb}`;
        let eb = this.rowsByKey.get(Mb);
        if (void 0 === eb) {
          const Hb = function(bb, wb) {
            var Mb;
            if (!(bb in Ww)) return [];
            const eb = null !== (Mb = Jw[bb]) && void 0 !== Mb ? Mb : [],
              Hb = new Map;
            for (const Vb of Wp(bb, wb))
              if ((eb.includes(Vb) || Ap(Vb.output) && Zp(Vb.output) > yb(bb)) && Zp(Vb.output) <= wb) {
                var pb;
                const bb = null !== (pb = Hb.get(Vb.output)) && void 0 !== pb ? pb : [];
                bb.push(Vb.input), Hb.set(Vb.output, bb)
              } return Sp([...Hb], (bb => {
              let [wb] = bb;
              return -Zp(wb)
            })).map((bb => {
              let [wb, Mb] = bb;
              return {
                output: wb,
                inputs: Mb
              }
            }))
          }(bb, wb);
          eb = Hb.length > 0 ? Hb : HB, this.rowsByKey.set(Mb, eb)
        }
        return eb
      }
      resolve(bb, wb) {
        const {
          rootId: Mb,
          rootName: eb
        } = bb.getMetaInfo(wb), Hb = (0, EM.j)(eb) ? wb : Mb;
        let pb = this.byRootId.get(Hb);
        const Vb = gb();
        if (void 0 === pb || pb.nuclear !== Vb) {
          var lb;
          const Mb = function(bb) {
            return We(oF, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb)
          }(eb, bb.blockIdToBlockName(wb));
          pb = {
            info: Mb,
            rootName: eb,
            live: null !== Mb && !0 === (null === (lb = this.live) || void 0 === lb ? void 0 : lb.handles(eb)),
            nuclear: Vb
          }, this.byRootId.set(Hb, pb)
        }
        return pb
      }
    }
    const IB = 500;
    const OB = (0, eb.memo)((function(bb) {
      var wb, Mb;
      let {
        store: Hb
      } = bb;
      const {
        t: pb
      } = (0, KH.C)(), [Vb, gb] = (0, eb.useState)((() => Hb.get()));
      (0, eb.useEffect)((() => (gb(Hb.get()), Hb.subscribe((() => {
        gb(Hb.get())
      })))), [Hb]);
      const {
        openInGameMenuName: lb,
        openEverythingMenuName: Lb,
        isTouchScreen: Ib
      } = (0, sH.o)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Ob,
        tool: Ub,
        live: tb,
        wrench: Cb,
        atomic: Eb
      } = Vb, Fb = Vb.visible && null === lb && null === Lb;
      if (null === Ob) return null;
      const Bb = null !== Cb.detail ? pb(Cb.detail) : null !== (wb = Vb.plan) && void 0 !== wb && wb.ctrl ? pb("buildAFactory2Game:lookPlanCtrl") : null !== Ob.detail ? pb(Ob.detail, null === Ob.detailItem ? void 0 : {
        item: pb(Ob.detailItem)
      }) : null;
      return (0, sp.jsxs)("div", {
        className: zH()("Baf2LookTarget", {
          Visible: Fb
        }),
        "aria-hidden": !Fb,
        children: [(0, sp.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: pb(Ob.name)
        }), null !== Vb.plan && (0, sp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: pb(Vb.plan.key, {
            kind: pb(Vb.plan.kindKey),
            w: String(Vb.plan.w),
            h: String(Vb.plan.h),
            d: String(Vb.plan.d),
            count: String(Vb.plan.count)
          })
        }), void 0 !== (null === (Mb = Vb.plan) || void 0 === Mb ? void 0 : Mb.why) && (0, sp.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: pb(Vb.plan.why)
        }), null !== Cb.mode && (0, sp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: pb(Cb.mode)
        }), null !== Ub ? (0, sp.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: pb(Ub.key, {
            item: pb(Ub.needed),
            dg: null === Ub.dg ? "" : pb(Ub.dg)
          })
        }) : null !== tb ? (0, sp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: pb(tb.key, ol(pb, tb))
        }) : null !== Bb && (0, sp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Bb
        }), Eb.length > 0 && (0, sp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: pb("buildAFactory2Game:lookAtomicRecipes", {
            list: Eb.map((bb => {
              let {
                output: wb,
                inputs: Mb
              } = bb;
              const eb = Mb.length > 1 ? ` ${pb("buildAFactory2Game:recipeMore",{count:String(Mb.length-1)})}` : "";
              return `${pb((0,kH.d)(Mb[0]))}${eb} \u2192 ${pb((0,kH.d)(wb))}`
            })).join(", ")
          })
        }), null !== Cb.next && (0, sp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: pb(Cb.next, {
            state: null === Cb.nextState ? "" : pb(Cb.nextState),
            use: pb(Ib ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var UB = Mb(39756);
    const tB = [],
      CB = [
        [0, -1, 0]
      ];

    function EB(bb) {
      const wb = [bb];
      for (let Mb = 1; Mb <= 4; Mb++) Mb > 1 && wb.push(`${bb}|meta|rot${Mb}`), wb.push(`${bb}|meta|rot${Mb}|Running`);
      return wb
    }

    function FB(bb, wb) {
      return [Math.floor(bb[0] / wb), Math.floor(bb[1] / wb), Math.floor(bb[2] / wb)]
    }

    function BB(bb, wb, Mb) {
      return `${bb},${wb},${Mb}`
    }

    function sB(bb) {
      const wb = bb.split("|")[0];
      if (!IM(wb)) return tB;
      const Mb = Ww[wb];
      if (MM(Mb)) return CB;
      const eb = FF(bb);
      return eM(Mb) ? [
        [-eb[0], -eb[1], -eb[2]]
      ] : XH(Mb) ? function(bb, wb) {
        const Mb = bb[0] - 2 * wb[0],
          eb = bb[2] - 2 * wb[2],
          Hb = [];
        for (let pb = -1; pb <= 1; pb++)
          for (let wb = -1; wb <= 1; wb++) Hb.push([Mb + pb, bb[1], eb + wb]);
        return Hb
      }([0, 0, 0], eb) : tB
    }
    const mB = [.5, .5, .5],
      hB = [.2, .8, .3],
      zB = [.45, 1, .5];
    class XB {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(bb) {
        this.indexed = !0;
        for (const wb of Rw)
          for (const Mb of EB(wb)) {
            const wb = bb.blockNameToBlockId(Mb, !0),
              eb = sB(Mb);
            null !== wb && eb.length > 0 && (this.offsetsList.push(eb), this.offsetsIndexById[wb] = this.offsetsList.length)
          }
      }
      onAfterRender(bb, wb) {
        this.indexed || this.index(bb);
        const Mb = performance.now();
        if (Mb - this.lastCheckMs < 100) return;
        this.lastCheckMs = Mb, this.checks++;
        const eb = lC.e.gO,
          [Hb, pb, Vb] = FB(wb, eb);
        let gb = !1;
        const lb = [];
        let Lb = 0;
        for (let Ib = Hb - 2; Ib <= Hb + 2; Ib++)
          for (let wb = pb - 1; wb <= pb + 1; wb++)
            for (let Hb = Vb - 2; Hb <= Vb + 2; Hb++) {
              const pb = Lb++,
                Vb = BB(Ib, wb, Hb),
                Ob = bb.getChunkVersion(Ib, wb, Hb);
              let Ub = this.chunks.get(Vb);
              null !== Ob ? (Ub || (Ub = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Vb, Ub)), Ub.seenAt = this.checks, Ub.checkedVersion !== Ob && (Ub.checkedVersion = Ob, gb = !0), Ub.scannedVersion !== Ob && Mb - Ub.scannedAt >= 500 && lb.push({
                slot: pb,
                entry: Ub,
                origin: [Ib * eb, wb * eb, Hb * eb]
              })) : (gb ||= void 0 !== Ub, this.chunks.delete(Vb))
            }
        this.scanDue(bb, lb) && (gb = !0);
        for (const [Ib, Ob] of this.chunks) Ob.seenAt !== this.checks && (gb ||= Ob.machines.length > 0, this.chunks.delete(Ib));
        for (const Ib of this.chunks.values())
          for (const [wb, Mb, eb] of Ib.cellChunks)(Math.abs(wb - Hb) > 2 || Math.abs(Mb - pb) > 1 || Math.abs(eb - Vb) > 2) && this.watchCellChunk(bb, wb, Mb, eb) && (gb = !0);
        for (const [Ib, Ob] of this.cellChunks) Ob.seenAt !== this.checks && this.cellChunks.delete(Ib);
        gb && this.refresh(bb)
      }
      dispose(bb) {
        this.clearMeshes(bb), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(bb, wb) {
        const Mb = Math.max(wb.findIndex((bb => {
          let {
            slot: wb
          } = bb;
          return wb >= this.scanFrom
        })), 0);
        let eb = 96;
        for (let Hb = 0; Hb < wb.length; Hb++) {
          const {
            slot: pb,
            entry: Vb,
            origin: gb
          } = wb[(Mb + Hb) % wb.length];
          if (eb -= this.scan(bb, Vb, gb), eb <= 0) {
            this.scanFrom = pb + 1;
            break
          }
        }
        return wb.length > 0
      }
      scan(bb, wb, Mb) {
        let [eb, Hb, pb] = Mb;
        const Vb = lC.e.gO,
          gb = this.hits;
        gb.length = 0;
        const lb = bb.scanBlocks(eb, Hb, pb, eb + Vb, Hb + Vb, pb + Vb, this.offsetsIndexById, gb),
          Lb = [];
        for (let Ib = 0; Ib < gb.length; Ib += 4) Lb.push({
          pos: [gb[Ib], gb[Ib + 1], gb[Ib + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[gb[Ib + 3]] - 1]
        });
        return wb.machines = Lb, wb.cellChunks = function(bb, wb) {
          const Mb = new Set,
            eb = [];
          for (const {
              pos: Hb,
              offsets: pb
            }
            of bb)
            for (const [bb, Vb, gb] of pb) {
              const pb = FB([Hb[0] + bb, Hb[1] + Vb, Hb[2] + gb], wb),
                lb = BB(...pb);
              Mb.has(lb) || (Mb.add(lb), eb.push(pb))
            }
          return eb
        }(Lb, Vb), wb.scannedVersion = wb.checkedVersion, wb.scannedAt = performance.now(), Math.max(lb, 1)
      }
      watchCellChunk(bb, wb, Mb, eb) {
        const Hb = BB(wb, Mb, eb),
          pb = bb.getChunkVersion(wb, Mb, eb),
          Vb = this.cellChunks.get(Hb);
        return null === pb ? this.cellChunks.delete(Hb) : (null === Vb || void 0 === Vb ? void 0 : Vb.version) === pb ? (Vb.seenAt = this.checks, !1) : (this.cellChunks.set(Hb, {
          version: pb,
          seenAt: this.checks
        }), !0)
      }
      refresh(bb) {
        const wb = function(bb, wb) {
            const Mb = new Set,
              eb = [];
            for (const {
                pos: Hb,
                offsets: pb
              }
              of bb)
              for (const [bb, Vb, gb] of pb) {
                const pb = Hb[0] + bb,
                  lb = Hb[1] + Vb,
                  Lb = Hb[2] + gb,
                  Ib = `${pb},${lb},${Lb}`;
                Mb.has(Ib) || (Mb.add(Ib), wb(pb, lb, Lb) && eb.push([pb, lb, Lb]))
              }
            return eb
          }([...this.chunks.values()].flatMap((bb => bb.machines)), ((wb, Mb, eb) => bb.isBlockInLoadedChunk(wb, Mb, eb) && 0 === bb.getBlockId(wb, Mb, eb))),
          Mb = wb.join(";");
        Mb !== this.shownKey && (this.shownKey = Mb, this.clearMeshes(bb), wb.length > 0 && (this.meshes = [this.build(bb, wb, !1), this.build(bb, wb, !0)]))
      }
      build(bb, wb, Mb) {
        const eb = wb[0],
          Hb = [],
          pb = [];
        for (const [Vb, gb, lb] of wb)(0, UB.c)(Hb, pb, [Vb - eb[0] + .5, gb - eb[1] + .5, lb - eb[2] + .5], mB, Mb);
        return bb.createGameMesh({
          positions: Hb,
          indices: pb
        }, {
          rgb: Mb ? zB : hB,
          alpha: .4
        }, eb)
      }
      clearMeshes(bb) {
        for (const wb of this.meshes) bb.disposeGameMesh(wb);
        this.meshes = []
      }
    }
    const xB = 1 / .6,
      jB = 200,
      KB = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      rB = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      RB = 2 * Math.PI / 3;
    class DB {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KB;
        this.style = bb, this.particles = null, this.points = new Float32Array(800), this.budget = jB, this.lastMs = 0
      }
      static blade() {
        return new DB(rB)
      }
      Tm(bb, wb) {
        const Mb = Math.min(wb.arcStruck, wb.arcPoints.length);
        this.draw(bb, [wb.arcFrom, ...wb.arcPoints], wb.arcPoints.slice(0, Mb))
      }
      onBlade(bb, wb) {
        const [Mb, eb, Hb] = wb.bladeCentre, [pb, Vb] = wb.bladeFacing, gb = Mb - 1.5 * pb, lb = Hb - 1.5 * Vb, Lb = Math.atan2(Vb, pb), Ib = [];
        for (let Ob = 0; Ob <= 8; Ob++) {
          const bb = Lb - RB / 2 + RB * Ob / 8;
          Ib.push([gb + 2.5 * Math.cos(bb), eb, lb + 2.5 * Math.sin(bb)])
        }
        this.draw(bb, Ib, wb.bladeStruck)
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null
      }
      draw(bb, wb, Mb) {
        if (!bb.particlesEnabled() || wb.length < 2) return;
        const eb = performance.now();
        this.budget = Math.min(jB, this.budget + (eb - this.lastMs) / 1e3 * jB), this.lastMs = eb;
        const Hb = [];
        let pb = 0,
          Vb = wb[0];
        for (const Bb of wb.slice(1)) {
          const bb = Math.min(48, Math.round(Math.hypot(Bb[0] - Vb[0], Bb[1] - Vb[1], Bb[2] - Vb[2]) * this.style.perBlock));
          Hb.push([Vb, Bb, bb]), pb += bb, Vb = Bb
        }
        const gb = Mb.length;
        pb += 10 * gb;
        const lb = pb > this.budget ? this.budget / pb : 1;
        if (0 === pb || lb * pb < 1) return;
        const Lb = wb[0],
          [Ib, Ob, Ub] = Lb,
          tb = this.points;
        let Cb = 0;
        const Eb = (bb, wb, Mb, eb) => {
          const Hb = 4 * Cb;
          tb[Hb] = bb - Ib, tb[Hb + 1] = wb - Ob, tb[Hb + 2] = Mb - Ub, tb[Hb + 3] = eb, Cb++
        };
        Hb.forEach(((bb, wb) => {
          let [Mb, eb, Hb] = bb;
          const pb = Math.min(Math.floor(Hb * lb), jB - Cb),
            Vb = Math.hypot(eb[0] - Mb[0], eb[1] - Mb[1], eb[2] - Mb[2]),
            gb = 0 === wb && Vb > 0 ? Math.min(.5, .1 * Vb) / Vb : 0;
          for (let lb = 0; lb < pb; lb++) {
            const bb = gb + (lb + .5) / pb * (1 - gb);
            Eb(Mb[0] + (eb[0] - Mb[0]) * bb, Mb[1] + (eb[1] - Mb[1]) * bb, Mb[2] + (eb[2] - Mb[2]) * bb, .15)
          }
        }));
        const Fb = Math.floor(10 * lb);
        for (let Bb = 0; Bb < gb; Bb++) {
          const [bb, wb, eb] = Mb[Bb];
          for (let Mb = 0; Mb < Fb && Cb < jB; Mb++) Eb(bb, wb, eb, 2.5)
        }
        this.budget -= Cb, this.particles ??= bb.createParticles(function(bb) {
          const [wb, Mb] = bb.colours;
          return {
            texture: "square_particle",
            qO: 400,
            minLifeTime: bb.life[0] / xB,
            maxLifeTime: bb.life[1] / xB,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [wb[0], wb[1], wb[2], 1],
              maxColor: [Mb[0], Mb[1], Mb[2], 1]
            }, {
              timeFraction: 1,
              minColor: [wb[0], wb[1], wb[2], 0],
              maxColor: [Mb[0], Mb[1], Mb[2], 0]
            }],
            blendMode: Dg.d.Add
          }
        }(this.style), {
          pos: Lb
        }), this.particles.emitPoints(Lb, tb, Cb)
      }
    }
    const cB = new Set(["Sky Spring"]);

    function YB(bb, wb, Mb) {
      const eb = bb.split("|")[0];
      return "Air" !== wb || Mb || ! function(bb) {
        const wb = bb.split("|")[0];
        return void 0 !== gM[wb] || cB.has(wb)
      }(eb) ? null : bb
    }
    class ZB {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(bb) {
        const wb = bb - this.lastTapAt >= 300;
        return this.lastTapAt = bb, wb
      }
    }
    class fB {
      constructor() {
        this.presses = new ZB, this.predicted = null
      }
      tap(bb, wb) {
        const Mb = this.presses.isNewPress(wb);
        return Mb && (this.predicted = {
          station: bb,
          at: wb
        }), Mb
      }
      consumeServerOpen(bb, wb) {
        const Mb = this.predicted;
        return !(null === Mb || Mb.station !== bb || wb - Mb.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class AB {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(bb, wb) {
        return bb && (this.thrustAt = wb), wb - this.thrustAt < 200
      }
    }
    const WB = [.1, .05, .1],
      JB = {
        texture: "effect_5",
        qO: Math.ceil(48),
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
        blendMode: Dg.d.OneOne
      };
    class SB {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new AB, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      Tm(bb, wb) {
        for (const [Mb, eb] of wb.baf2JetFlames) bb.isLocalPlayer(Mb) || (eb ? this.lit.add(Mb) : this.lit.delete(Mb))
      }
      onAfterRender(bb, wb) {
        const Mb = performance.now(),
          eb = this.hold.lit(this.selfThrusting(bb, wb), Mb);
        for (const [Hb, pb] of this.flames)(Hb === wb ? eb : this.lit.has(Hb)) || this.setEmitting(pb, !1), Hb === wb || bb.getPositionView(Hb) ? !pb.emitting && Mb - pb.offAt >= 1300 && (pb.particles.stop(), this.flames.delete(Hb)) : (pb.particles.dispose(), this.flames.delete(Hb), this.lit.delete(Hb));
        eb && this.draw(bb, wb, wb);
        for (const Hb of this.lit) this.draw(bb, wb, Hb)
      }
      dispose() {
        for (const bb of this.flames.values()) bb.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(bb, wb) {
        var Mb;
        const eb = bb.getLocalPlayerMovement();
        return !!eb && (null !== (Hb = {
          option: null !== (Mb = bb.getClientOption(wb, "jumpHoldThrust")) && void 0 !== Mb ? Mb : null,
          jumping: eb.jumpHeld,
          onGround: eb.onGround,
          alive: bb.isAlive(wb)
        }).option && Hb.option.maxUpSpeed >= 0 && Hb.jumping && !Hb.onGround && Hb.alive);
        var Hb
      }
      draw(bb, wb, Mb) {
        var eb, Hb;
        const pb = this.pos;
        if (!bb.readDrawnPosition(Mb, pb)) return;
        const Vb = bb.readDrawnPosition(wb, this.camera) ? this.camera : pb;
        if (!((pb[0] - Vb[0]) ** 2 + (pb[1] - Vb[1]) ** 2 + (pb[2] - Vb[2]) ** 2 < 1600) || !bb.particlesEnabled()) {
          const bb = this.flames.get(Mb);
          return void(bb && this.setEmitting(bb, !1))
        }
        const gb = null !== (eb = this.flames.get(Mb)) && void 0 !== eb ? eb : this.create(bb, Mb, pb),
          lb = null !== (Hb = bb.getDrawnHeading(Mb)) && void 0 !== Hb ? Hb : 0,
          Lb = this.at;
        Lb[0] = pb[0] - .35 * Math.sin(lb), Lb[1] = pb[1] + 1.05, Lb[2] = pb[2] - .35 * Math.cos(lb), gb.particles.moveTo(Lb), this.setEmitting(gb, !0)
      }
      setEmitting(bb, wb) {
        bb.emitting !== wb && (bb.emitting = wb, wb || (bb.offAt = performance.now()), bb.particles.setEmitRate(wb ? 60 : 0))
      }
      create(bb, wb, Mb) {
        const eb = {
          particles: bb.createParticles(JB, {
            pos: Mb,
            half: WB
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(wb, eb), eb
      }
    }

    function NB(bb) {
      return "Reactor Frame" === He("reactor", bb)
    }

    function vB(bb) {
      return vM("reactor", bb) && !NB(bb) && (bb.startsWith("Reactor Glass") || bb.startsWith("Reactor Port"))
    }
    const QB = "baf2Goal";
    class GB {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [ZH.k.subscribe("setDirectionArrow", (bb => {
          let {
            id: wb,
            position: Mb
          } = bb;
          wb === QB && (this.goal = Mb, this.checkedAt = -1 / 0)
        })), ZH.k.subscribe("clearDirectionArrow", (bb => {
          let {
            id: wb
          } = bb;
          null !== wb && wb !== QB || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const bb of this.subs) ZH.k.unsubscribe(bb)
      }
      sideOf(bb, wb, Mb, eb) {
        const Hb = this.goal;
        if (!Hb) return 0;
        Mb - this.checkedAt > 1e3 && (this.checkedAt = Mb, this.open = function(bb, wb) {
          const [Mb, eb, Hb] = bb.map(Math.floor);
          if (!vB(wb(Mb, eb, Hb))) return null;
          for (const [pb, Vb] of [
              [1, 0],
              [0, 1]
            ]) {
            const bb = wb(Mb + pb, eb, Hb + Vb),
              gb = wb(Mb - pb, eb, Hb - Vb);
            if (NB(gb) && vB(bb)) return [pb, 0, Vb];
            if (NB(bb) && vB(gb)) return [0 - pb, 0, 0 - Vb]
          }
          return null
        }(Hb, ((wb, Mb, eb) => bb.blockIdToBlockName(bb.getBlockId(wb, Mb, eb)))));
        const pb = this.open;
        if (!pb) return 0;
        const Vb = eb(Hb);
        if (Math.abs(Vb.x - wb.x) > .05 || Math.abs(Vb.y - wb.y) > .05) return 0;
        const gb = eb([Hb[0] + pb[0], Hb[1], Hb[2] + pb[2]]).x - Vb.x;
        return Math.abs(gb) < .3 ? 0 : gb > 0 ? 1 : -1
      }
    }
    class qB {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new GB, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.BC = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Rm = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((bb => {
          for (const wb of bb) wb.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(wb.target, wb.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.BC || this.clear()
        }, window.addEventListener("resize", this.Rm)
      }
      onAfterRender(bb, wb) {
        var Mb;
        this.api = bb, this.project = null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.projectWorldPosToScreenPos) && void 0 !== Mb ? Mb : null, this.queued || this.BC || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.BC = !0;
        for (const bb of this.moved.keys()) bb.style.transform = "";
        this.moved.clear();
        for (const bb of this.sideLabels.keys()) bb.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Rm)
      }
      clear() {
        for (const pb of this.moved.keys()) pb.isConnected || this.moved.delete(pb);
        for (const pb of this.sideLabels.keys()) pb.isConnected || this.sideLabels.delete(pb);
        if (0 === this.arrows.length) return;
        const bb = performance.now(),
          wb = bb - this.refreshedAt > 1e3;
        wb && (this.refreshedAt = bb, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const Mb = this.trackerBox(),
          eb = this.barsBox(),
          Hb = this.toastBox(wb);
        (Mb || eb || Hb) && wb && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let pb = 0; pb < this.arrows.length; pb++) {
          const wb = this.arrows[pb];
          this.labelOffsets.set(wb, this.runLabelAside(wb, bb));
          const Vb = (Mb ? this.shiftLeftOf(wb, Mb) : 0) || this.shiftOnScreen(wb),
            gb = Math.min(eb ? this.liftAbove(wb, eb, Vb) : 0, Hb ? this.liftAbove(wb, Hb, Vb) : 0),
            lb = this.moved.get(wb);
          if (0 !== Vb || 0 !== gb) {
            const bb = 0 === gb ? `translateX(${Vb}px)` : `translate(${Vb}px, ${gb}px)`;
            lb !== bb && (wb.style.transform = bb, this.moved.set(wb, bb))
          } else void 0 !== lb && (wb.style.transform = "", this.moved.delete(wb))
        }
      }
      trackerBox() {
        var bb, wb;
        const Mb = null !== (bb = this.tracker) && void 0 !== bb && bb.isConnected ? this.tracker : null !== (wb = this.trackers[0]) && void 0 !== wb ? wb : null;
        if (Mb !== this.tracker && this.watch(Mb), this.boxStale && Mb) {
          var eb, Hb, pb;
          this.boxStale = !1;
          const bb = Mb.closest(".NoRoom") ? null : Mb.getBoundingClientRect(),
            wb = bb && bb.width > 0 ? null === (eb = this.hud) || void 0 === eb ? void 0 : eb.getBoundingClientRect() : void 0,
            Vb = bb && wb ? Math.max(bb.top, wb.top) : null !== (Hb = null === bb || void 0 === bb ? void 0 : bb.top) && void 0 !== Hb ? Hb : 0,
            gb = bb && wb ? Math.min(bb.bottom, wb.bottom) : null !== (pb = null === bb || void 0 === bb ? void 0 : bb.bottom) && void 0 !== pb ? pb : 0;
          this.box = bb && bb.width > 0 && gb > Vb ? {
            left: bb.left,
            top: Vb,
            right: bb.right,
            bottom: gb
          } : null
        }
        return Mb ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var bb;
          this.barsStale = !1;
          const wb = null === (bb = this.statBars[0]) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
          this.bars = wb && wb.width > 0 && wb.height > 0 ? {
            left: wb.left,
            top: wb.top,
            right: wb.right,
            bottom: wb.bottom
          } : null
        }
        return this.bars
      }
      toastBox(bb) {
        var wb;
        const Mb = null !== (wb = this.toasts[0]) && void 0 !== wb ? wb : null;
        if (Mb !== this.toastEl || bb && Mb) {
          this.toastEl = Mb;
          const bb = null === Mb || void 0 === Mb ? void 0 : Mb.getBoundingClientRect();
          this.toast = bb && bb.width > 0 && bb.height > 0 ? {
            left: bb.left,
            top: bb.top,
            right: bb.right,
            bottom: bb.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(bb, wb, Mb) {
        var eb;
        const Hb = this.anchorOf(bb);
        if (!Hb) return 0;
        const pb = Hb.x + Mb + (null !== (eb = this.labelOffsets.get(bb)) && void 0 !== eb ? eb : 0),
          {
            halfWidth: Vb,
            labelled: gb
          } = this.extentOf(bb),
          lb = Hb.y + this.em * (gb ? 6.2 : 3);
        return lb < wb.top - 6 || pb + Vb < wb.left - 6 || pb - Vb > wb.right + 6 ? 0 : wb.top - 6 - lb
      }
      watch(bb) {
        var wb, Mb;
        this.tracker && this.sizes.unobserve(this.tracker), null === (wb = this.hud) || void 0 === wb || wb.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = bb, this.hud = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.closest(".Baf2QuestHud")) && void 0 !== Mb ? Mb : null, this.box = null, this.boxStale = !0, bb && this.sizes.observe(bb), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(bb, wb) {
        var Mb;
        const eb = this.anchorOf(bb);
        if (!eb) return 0;
        const {
          y: Hb
        } = eb, pb = eb.x + (null !== (Mb = this.labelOffsets.get(bb)) && void 0 !== Mb ? Mb : 0), Vb = this.em, {
          halfWidth: gb,
          labelled: lb
        } = this.extentOf(bb), Lb = Hb - Vb, Ib = pb + gb;
        return Hb + Vb * (lb ? 6.2 : 3) < wb.top || Lb > wb.bottom || Ib < wb.left - 6 || pb - gb > wb.right ? 0 : Math.max(wb.left - 6 - Ib, 6 - (pb - gb))
      }
      shiftOnScreen(bb) {
        var wb;
        const Mb = this.anchorOf(bb);
        if (!Mb) return 0;
        const {
          halfWidth: eb
        } = this.extentOf(bb), Hb = Mb.x + (null !== (wb = this.labelOffsets.get(bb)) && void 0 !== wb ? wb : 0), pb = Hb + eb - (this.innerWidth - 6);
        return pb > 0 ? -pb : Math.max(0, 6 - (Hb - eb))
      }
      runLabelAside(bb, wb) {
        var Mb;
        let eb = null;
        for (let Vb = 0; Vb < bb.children.length; Vb++) bb.children[Vb].classList.contains("DirectionArrowLabel") && (eb = bb.children[Vb]);
        if (!eb) return 0;
        const Hb = bb.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(bb) : null,
          pb = (Hb && this.api ? this.side.sideOf(this.api, {
            x: Hb.x / this.innerWidth * 100,
            y: Hb.y / this.innerHeight * 100
          }, wb, this.project) : 0) * this.halfWidthOf(eb);
        return pb !== (null !== (Mb = this.sideLabels.get(eb)) && void 0 !== Mb ? Mb : 0) && (eb.style.transform = 0 === pb ? "" : `translateX(-50%) translateX(${pb}px)`, 0 === pb ? this.sideLabels.delete(eb) : this.sideLabels.set(eb, pb)), pb
      }
      extentOf(bb) {
        let wb = this.em,
          Mb = !1;
        for (let eb = 0; eb < bb.children.length; eb++) {
          const Hb = bb.children[eb],
            pb = Hb.classList.contains("DirectionArrowLabel");
          Mb ||= pb, (pb || Hb.classList.contains("DirectionArrowDistance")) && (wb = Math.max(wb, this.halfWidthOf(Hb)))
        }
        return {
          halfWidth: wb,
          labelled: Mb
        }
      }
      halfWidthOf(bb) {
        let wb = this.halfWidths.get(bb);
        return void 0 === wb && (wb = bb.offsetWidth / 2, this.halfWidths.set(bb, wb), this.sizes.observe(bb), this.labels.add(bb)), wb
      }
      forgetGoneLabels() {
        for (const bb of this.labels) bb.isConnected || (this.sizes.unobserve(bb), this.halfWidths.delete(bb), this.labels.delete(bb))
      }
      anchorOf(bb) {
        const wb = bb.style.translate,
          Mb = this.anchors.get(bb);
        if (Mb && Mb.translate === wb && Mb.innerWidth === this.innerWidth && Mb.innerHeight === this.innerHeight) return Mb;
        const eb = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(wb);
        if (!eb) return null;
        const Hb = {
          translate: wb,
          x: parseFloat(eb[1]) / 100 * this.innerWidth,
          y: parseFloat(eb[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(bb, Hb), Hb
      }
    }
    const aB = "Baf2ArrowText";

    function iB(bb, wb) {
      const Mb = bb.rows.find((bb => bb.current));
      return fb(bb.tutorial) && null !== Mb && void 0 !== Mb && Mb.item && qH(Mb) && Db(Mb.item).includes(wb) ? Mb.item : null
    }
    const uB = new class {
      constructor(bb) {
        this.select = bb, this.picks = new Map
      }
      open(bb, wb, Mb) {
        const eb = iB(wb, bb);
        null !== eb && this.Vt(bb, eb, Mb)
      }
      follow(bb, wb) {
        if (gb())
          for (const [Mb, {
              item: eb,
              had: Hb
            }] of this.picks) {
            const pb = iB(bb, Mb);
            pb !== eb && (null !== pb && wb(eb) > Hb ? this.Vt(Mb, pb, wb) : this.picks.delete(Mb))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Vt(bb, wb, Mb) {
        this.picks.set(bb, {
          item: wb,
          had: Mb(wb)
        }), this.select(bb, wb)
      }
    }(fH.q);

    function dB(bb) {
      return wb => {
        let Mb = 0;
        for (const eb of bb.getInventoryItems())(null === eb || void 0 === eb ? void 0 : eb.name) === wb && (Mb += null === eb.amount ? 1 : Math.max(eb.amount, 0));
        return Mb
      }
    }

    function PB(bb, wb, Mb, eb) {
      bb.getClientOption(wb, "canCraft") && "inventory" !== sH.c.get("openInGameMenuName") && (uB.open(Mb, eb.get(), dB(bb)), ZH.k.iI("toggleMenu", `inventory|${Mb}`))
    }
    let nB = null,
      yB = !1;

    function oB(bb) {
      const wb = (0, Bp.d)();
      bb === nB && wb === yB || (nB = bb, yB = wb, (0, fH.s)(function(bb, wb) {
        const Mb = new Map;
        for (let eb = bb + 1; eb <= Hb.length; eb++) {
          const Hb = Np(eb, bb, wb);
          if (Hb)
            for (const wb of Bb(eb).unlocks) Mb.set(wb, {
              ...Hb,
              stepsAway: eb - bb
            })
        }
        return Mb
      }(bb, wb)))
    }

    function TB() {
      return (0, fH.w)(Sp(Object.keys(Rb), Zp)), () => {
        (0, fH.w)([])
      }
    }

    function kB(bb, wb, Mb) {
      var eb, Hb;
      const pb = bb.getTargetedBlock();
      if (!pb || ! function(bb, wb, Mb) {
          if ("Chest" !== wb) return !1;
          const eb = bb.split("|")[0];
          if (!IM(eb) || 0 === Ww[eb].outputSlots.length) return !1;
          const Hb = FF(bb);
          return Mb[0] === Hb[0] && Mb[1] === Hb[1] && Mb[2] === Hb[2]
        }(Mb, null === (eb = bb.Leb(wb)) || void 0 === eb ? void 0 : eb.name, pb.normal)) return !1;
      const [Vb, gb, lb] = pb.VF, Lb = bb.getBlockId(Vb, gb, lb);
      return 0 === Lb || !0 === (null === (Hb = Yb.g[Lb]) || void 0 === Hb ? void 0 : Hb.canBePlacedOver)
    }
    var bs = Mb(37630);
    const ws = new Set(FM.d);
    class Ms {
      constructor(bb) {
        this.toasts = bb, this.lastAt = -1 / 0
      }
      onAltAction(bb, wb, Mb) {
        const eb = bb.getTargetedBlock();
        if (!eb || function(bb) {
            const wb = bb.split("|")[0];
            return IM(wb) || null !== je(wb) || Kb(wb) || FM.d.includes(wb)
          }(Mb) && !ws.has(Mb.split("|")[0])) return;
        const Hb = bb.Leb(wb);
        if (!Hb || !ws.has(Hb.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const pb = Hb.typeObj.id,
          [Vb, gb, lb] = eb.VF,
          Lb = bb.getBlockId(Vb, gb, lb),
          Ib = Yb.g[Lb];
        (0 === Lb || null !== Ib && void 0 !== Ib && Ib.ht || null !== Ib && void 0 !== Ib && Ib.canBePlacedOver) && bb.isSolidToPlayerBlockId(pb) && bb.canModifyBlockAt(Vb, gb, lb) && bb.DMb(Vb, gb, lb, pb) && !bb.DMb(Vb, gb, lb, pb, wb) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Ab.de)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Ab.O.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class es {
      constructor(bb) {
        this.show = bb, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(bb, wb, Mb) {
        var eb;
        if (!wb) return this.started = null, void this.gatedThisHold.clear();
        if (!bb) return void(this.started = null);
        const Hb = `${bb.x},${bb.y},${bb.z},${bb.dg}`;
        if (Hb === this.started) return;
        this.started = Hb;
        const pb = Je(bb.y) ? TF(bb.block, bb.dg, bb.level) : null;
        if (null === pb || this.gatedThisHold.has(Hb)) return;
        this.gatedThisHold.add(Hb);
        const Vb = bb.block.split("|")[0];
        Mb - (null !== (eb = this.hintedAt.get(Vb)) && void 0 !== eb ? eb : -1 / 0) < 5e3 || (this.hintedAt.set(Vb, Mb), this.show({
          baf2ToastText: kF(pb, bb.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Hs = Mb(43);

    function ps(bb, wb) {
      const Mb = [...bb.baf2CoreBankPaused];
      for (const [Hb] of bb.baf2CoreBanked) Mb.push(Hb);
      for (const Vb of Hb) {
        for (const {
            item: bb
          }
          of Vb.cost) Mb.push(bb);
        for (const bb of Vb.newDeposits) Mb.push(bb.block);
        for (const bb of Vb.unlocks) Mb.push(bb, cb(bb));
        Vb.reward && Mb.push(Vb.reward);
        for (const {
            item: bb
          }
          of null !== (eb = null === (pb = Vb.charge) || void 0 === pb ? void 0 : pb.items) && void 0 !== eb ? eb : []) {
          var eb, pb;
          Mb.push(bb)
        }
      }
      return {
        message: bb,
        itemNames: wb([...new Set(Mb)])
      }
    }
    const Vs = "baf2MultiblockGuide";
    const gs = new Map;
    const ls = function(bb, wb, Mb, Hb) {
      let {
        localPlayerId: pb
      } = Hb;
      const Vb = new Ig,
        gb = new TU,
        Lb = new pt,
        Ib = new et(Lb),
        Ob = (bb, wb) => {
          wb ? Ib.observe(bb) : Ib.unobserve(bb)
        },
        Ub = new Mt,
        tb = new gt(Ob),
        Cb = bb => tb.covers(bb),
        Eb = new rt;
      let Fb;
      const Bb = new fV((bb => {
          Fb.sendCommand(bb)
        })),
        sb = () => {
          Bb.send("baf2questbook")
        },
        mb = bb => function(bb, wb, Mb) {
          const eb = {};
          for (const Hb of Mb) {
            let Mb = gs.get(Hb);
            void 0 === Mb && (Mb = bb.getItemStat(wb, Hb, "displayName"), gs.set(Hb, Mb)), eb[Hb] = Mb
          }
          return eb
        }(Fb, pb, bb),
        hb = new SH(sb),
        zb = new Nt((() => sH.c.get("loadingOverlayVisible"))),
        Xb = new mI(Bb, hb, zb),
        xb = new it,
        jb = new Ms(zb),
        rb = new es((bb => {
          zb.show(bb, bb.baf2ToastMs)
        })),
        Rb = new bC(Ob),
        Db = new KF(Rb),
        cb = new sV,
        Zb = new nF,
        fb = new yV,
        Jb = new gC({
          read: () => !1 !== Hs.i.getItem(Vs),
          write: bb => {
            Hs.i.setItem(Vs, bb)
          }
        }),
        Sb = new AC(Jb),
        Nb = new SC(Jb),
        vb = new pE(Jb, (bb => function(bb, wb) {
          const Mb = dg(wb.w, wb.h, wb.d),
            eb = new Uint8Array(Mb);
          for (let Hb = 0; Hb < Mb; Hb++) {
            const Mb = DC(bb, kM(wb, ee(wb, Hb)));
            eb[Hb] = null === Mb ? 0 : qg(Mb)
          }
          return eb
        }(Fb, bb)), yC(Bb)),
        Qb = new VE(Jb, yC(Bb)),
        Gb = new eE,
        ib = (bb, wb) => {
          let [Mb, eb, Hb] = bb;
          Gb.answered(wb) || zb.show({
            baf2ToastText: [(0, Ab.de)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: Mb,
                h: eb,
                d: Hb
              }
            }, Ab.O.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      vb.onSizeNotTaken(ib), Qb.onSizeNotTaken(ib);
      const ub = new IE,
        db = new aE(Jb),
        nb = new uE,
        yb = new eF(nb),
        ob = new CF,
        kb = new rF,
        bw = new SF(kb),
        ww = new PF(kb),
        Mw = kb.lookSource(),
        ew = new LB({
          handles: bb => Mw.handles(bb) || bb === Wb,
          line: (bb, wb) => bb === Wb ? function(bb, wb, Mb) {
            var eb;
            const Hb = ab(null === (eb = wb.at(Mb)) || void 0 === eb ? void 0 : eb.item);
            return null === Hb ? {
              key: `${VB}lookFarmEmpty`
            } : {
              key: bb.blockIdToBlockName(bb.getBlockId(Mb[0], Mb[1], Mb[2])).endsWith("|Running") ? `${VB}lookFarmRunning` : `${VB}lookFarmWaiting`,
              keys: {
                mob: qb(Hb)
              }
            }
          }(Fb, Rb, wb) : Mw.line(bb, wb),
          version: () => Mw.version() + Rb.version()
        }, (bb => vC(Jb.all(), bb, (bb => DC(Fb, bb)))), (() => hb.get().tier)),
        Hw = new RE,
        pw = new XB,
        Vw = new DB,
        gw = DB.blade(),
        lw = new SB,
        Lw = new Pt,
        Iw = new qB,
        Uw = new fB,
        tw = new ZB;
      let Cw = -1 / 0,
        Ew = 0,
        Fw = -1 / 0,
        Bw = -1 / 0;
      const sw = () => {
          Bb.send("baf2islandsclose"), Bw = Date.now()
        },
        mw = [];

      function hw(bb) {
        var wb, Mb, eb, Hb, pb, Vb, lb;
        "core" === (null === (wb = gb.get()) || void 0 === wb ? void 0 : wb.kind) && "core" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Bb.send("baf2coreclose"), "power" === (null === (Mb = gb.get()) || void 0 === Mb ? void 0 : Mb.kind) && "power" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Bb.send("baf2powerclose"), "water" === (null === (eb = gb.get()) || void 0 === eb ? void 0 : eb.kind) && "water" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Bb.send(Tb.w), "terminal" === (null === (Hb = gb.get()) || void 0 === Hb ? void 0 : Hb.kind) && "terminal" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Bb.send("baf2terminalclose"), "islands" === (null === (pb = gb.get()) || void 0 === pb ? void 0 : pb.kind) && "islands" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && sw();
        const Lb = kb.getStatus();
        "collider" === (null === (Vb = gb.get()) || void 0 === Vb ? void 0 : Vb.kind) && "collider" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && Lb && Bb.send(cl(Lb, "close"));
        const Ib = bb => "reactor" === bb || "battery" === bb;
        if (Ib(null === (lb = gb.get()) || void 0 === lb ? void 0 : lb.kind) && !Ib(null === bb || void 0 === bb ? void 0 : bb.kind)) {
          var Ob, Ub, tb;
          const bb = "reactor" === (null === (Ob = gb.get()) || void 0 === Ob ? void 0 : Ob.kind) ? null === (Ub = vb.get()) || void 0 === Ub ? void 0 : Ub.status.baf2RxAt : null === (tb = Qb.get()) || void 0 === tb ? void 0 : tb.status.baf2BatAt;
          bb && Bb.send(Ow(bb, "close"))
        }
        "quests" === (null === bb || void 0 === bb ? void 0 : bb.kind) && sb(), gb.set(bb), null === bb && xb.release()
      }

      function zw() {
        (0, BH.l)(), hw(null)
      }
      let Xw = new Set,
        xw = !1;
      const jw = {
        onCreate: bb => {
          Fb = bb, Fb.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const wb of Rw) {
            const bb = Ww[wb].inputSlots ? Kg(Vb) : Xg(wb, Vb, cb, Bb);
            mw.push((0, EH.f)(wb, bb))
          }
          mw.push((0, BH.J)((0, eb.createElement)(eb.Fragment, null, (0, eb.createElement)(It, {
            controller: tb
          }), (0, eb.createElement)(eC, {
            store: Rb
          }), (0, eb.createElement)(OB, {
            store: ew
          }), (0, eb.createElement)(Jt, {
            store: hb
          }), (0, eb.createElement)(Gt, {
            store: zb
          }), (0, eb.createElement)(ut, {
            store: xb
          }), (0, eb.createElement)(yt, {
            store: Lw
          }), (0, eb.createElement)(LE, {
            store: ub
          }), (0, eb.createElement)(dE, {
            store: nb
          })), {
            content: (0, eb.createElement)(kU, {
              commands: Bb,
              store: gb,
              power: cb,
              water: fb,
              reactor: vb,
              battery: Qb,
              collider: kb,
              terminal: Zb,
              quests: hb,
              tutorial: Xb,
              close: BH.o,
              leave: () => {
                xb.dropHeld(), (0, BH.l)()
              },
              askIslands: () => {
                Bw = -1 / 0, Cw = Date.now(), Ew = Bb.send(Pb)
              },
              openSocial: () => {
                (0, BH.l)(), sH.c.set({
                  openEverythingMenuName: UM.l.SOCIAL
                })
              },
              showCore: bb => {
                hw({
                  kind: "core",
                  core: bb
                }), Bb.send("baf2corereopen")
              }
            }),
            onClose: () => {
              hw(null)
            }
          })), mw.push((0, FH.s)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              hw({
                kind: "quests"
              }), (0, BH.y)()
            }
          })), mw.push(function(bb, wb) {
            let Mb = null,
              eb = () => {};
            const Hb = wb => {
              var Hb;
              let {
                tutorial: pb,
                tutorialKnown: Vb
              } = wb;
              (null === (Hb = Mb) || void 0 === Hb ? void 0 : Hb.tutorial) === pb && Mb.tutorialKnown === Vb || (Mb = {
                tutorial: pb,
                tutorialKnown: Vb
              }, eb = (0, FH.s)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: BI[pb],
                icon: {
                  kind: "icon",
                  name: FI[pb]
                },
                iconOnly: !0,
                disabled: !Vb,
                className: "Baf2TutorialButton",
                onClick: () => {
                  bb.next()
                }
              }))
            };
            Hb(wb.get());
            const pb = ZH.k.subscribe(AH, Hb);
            return () => {
              ZH.k.unsubscribe(pb), eb()
            }
          }(Xb, hb)), xw = !1, mw.push((0, Bp.l)((() => {
            null !== nB && oB(nB)
          }))), mw.push(TB()), mw.push(function() {
            const bb = ZH.k.subscribe(AH, oH),
              wb = () => {
                if (yH) {
                  const bb = yH;
                  yH = null, (0, fH.t)(bb)
                }
              },
              Mb = ZH.k.subscribe("toggleMenu", (bb => {
                "inventory" === (null === bb || void 0 === bb ? void 0 : bb.split("|")[0]) && wb()
              })),
              eb = ZH.k.subscribe("appManagerUpdated|openInGameMenuName", (bb => {
                "inventory" === bb && wb()
              }));
            return () => {
              ZH.k.unsubscribe(bb), ZH.k.unsubscribe(Mb), ZH.k.unsubscribe(eb)
            }
          }()), mw.push(function(bb) {
            const wb = dB(bb),
              Mb = ZH.k.subscribe(AH, (bb => {
                uB.follow(bb, wb)
              }));
            return () => {
              ZH.k.unsubscribe(Mb), uB.clear()
            }
          }(Fb)), mw.push(function() {
            const bb = document.documentElement,
              wb = (0, Dt.e)(".InvenBodyRight", [], (() => {
                const wb = document.querySelector(".InvenBodyRight");
                wb && bb.style.setProperty("--baf2-backpack-width", `${wb.offsetWidth}px`)
              }));
            return () => {
              wb(), bb.style.removeProperty("--baf2-backpack-width")
            }
          }()), mw.push(function() {
            const bb = document.documentElement;
            return bb.classList.add(aB), () => {
              bb.classList.remove(aB)
            }
          }()), mw.push((() => {
            Ib.dispose(), Lb.dispose()
          })), Eb.start(Fb), mw.push((() => {
            Eb.dispose(), lw.dispose(), Db.dispose()
          }))
        },
        onClose: () => {
          (0, fH.t)([]), yH = null, nH = new Set, nB = null, (0, fH.s)(new Map), gs.clear();
          for (const bb of mw) bb();
          hb.dispose(), ew.dispose(), zb.dispose(), xb.dispose(), Hw.dispose(), pw.dispose(Fb), Sb.dispose(Fb), Nb.dispose(Fb), db.dispose(Fb), yb.dispose(Fb), nb.dispose(), ob.dispose(), Jb.dispose(), vb.dispose(), Qb.dispose(), ub.dispose(), Vw.dispose(), gw.dispose(), Lw.dispose(), bw.dispose(Fb), ww.dispose(Fb), kb.dispose(), Iw.dispose(), Bb.clear()
        },
        onAfterRender: (bb, wb) => {
          var Mb, eb, Hb;
          try {
            Eb.onAfterRender(wb)
          } catch (Lb) {
            console.error("Error drawing BAF2 belt items", Lb)
          }
          try {
            lw.onAfterRender(Fb, pb)
          } catch (Lb) {
            console.error("Error drawing BAF2 jet flames", Lb)
          }
          xw || (xw = !0, Bb.send("baf2clientready"));
          const Vb = Fb.getPositionView(pb);
          tb.onAfterRender(wb, Vb, Ub), Rb.onAfterRender(wb, Vb, Ub, Cb), Ib.run(Ub), Hw.onAfterRender(Fb, Vb), pw.onAfterRender(Fb, Vb), Db.onAfterRender(Fb, Vb), Sb.onAfterRender(Fb, Vb), Nb.onAfterRender(Fb, pb, Vb), db.onAfterRender(Fb, pb, Vb), yb.onAfterRender(Fb, pb), ob.onAfterRender(Fb, Vb), hb.onPlayerY(Vb[1]), bw.onAfterRender(Fb), ww.onAfterRender(Fb, pb, Vb);
          const lb = Fb.getTargetedBlock();
          ew.onAfterRender(Fb, pb, null !== (Mb = null === lb || void 0 === lb ? void 0 : lb.X3) && void 0 !== Mb ? Mb : 0, null !== (eb = null === lb || void 0 === lb ? void 0 : lb.position) && void 0 !== eb ? eb : null), Iw.onAfterRender(Fb, wb), rb.onMining(function(bb, wb) {
            var Mb, eb;
            const Hb = bb.getMiningBlock();
            if (!Hb) return null;
            const pb = (0, Yb.f)(bb.getBlockId(Hb[0], Hb[1], Hb[2])),
              Vb = null !== (Mb = null === (eb = bb.Leb(wb)) || void 0 === eb ? void 0 : eb.name) && void 0 !== Mb ? Mb : null,
              gb = bb.getItemStat(wb, pb.split("|")[0], "harvestLevel");
            return {
              block: pb,
              x: Hb[0],
              y: Hb[1],
              z: Hb[2],
              dg: Vb,
              level: gb
            }
          }(Fb, pb), Fb.isMining(), performance.now()), "dropMap" === (null === (Hb = gb.get()) || void 0 === Hb ? void 0 : Hb.kind) && Je(Vb[1]) && zw()
        },
        onPlayerChangeBlock: (bb, wb, Mb, eb, Hb, Vb) => {
          bb === pb && function(bb, wb, Mb, eb, Hb, pb, Vb) {
            const gb = YB(pb, Vb, bb.isPlayerCrouching(wb));
            if (null === gb) return;
            if (bb.jW(Mb, eb, Hb, gb), !bb.getClientOption(wb, "canPickUpItems")) return;
            const lb = gM[gb.split("|")[0]];
            var Lb, Ib, Ob;
            void 0 !== lb && (Lb = bb.getInventoryItems(), Ib = lb, Ob = lC.e.maxItemStackSize, bb.getInventoryFreeSlotCount(wb) > 0 || Lb.some((bb => null !== bb && bb.name === Ib && null !== bb.amount && bb.amount < Ob))) && bb.playSound(wb, (0, bs.f)("pickUp"), .5, 1)
          }(Fb, bb, wb, Mb, eb, Hb, Vb)
        },
        onPlayerAltAction: (bb, wb, Mb, eb, Hb) => {
          var Vb, gb;
          if (!Fb.getClientOption(pb, "canPickUpItems")) return;
          const lb = null !== (Vb = null === (gb = Fb.Leb(pb)) || void 0 === gb ? void 0 : gb.name) && void 0 !== Vb ? Vb : null,
            Lb = function(bb, wb) {
              const Mb = bb.split("|")[0];
              return Kb(Mb) && wb !== VH && "Sky Pack" !== wb ? Mb : null
            }(Hb, lb);
          if (null !== Lb) return void(Uw.tap(Lb, performance.now()) && PB(Fb, pb, Lb, hb));
          if (!Qe(lb)) return;
          const Ib = tw.isNewPress(performance.now()),
            Ob = function(bb, wb, Mb) {
              return !Qe(wb) || Mb ? null : ye(bb)
            }(Hb, lb, Fb.isPlayerCrouching(pb));
          null !== Ob && Ib && Fb.jW(wb, Mb, eb, Ob)
        },
        onPlayerAttemptAltAction: (bb, wb, Mb, eb, Hb) => {
          if (function(bb, wb, Mb, eb, Hb) {
              "Workbench" === eb.split("|")[0] && bb.getClientOption(Mb, "canCraft") && (uB.open("Workbench", Hb.get(), dB(bb)), wb.send("baf2station Workbench"))
            }(Fb, Bb, pb, Hb, hb), kB(Fb, pb, Hb)) return "preventAction";
          jb.onAltAction(Fb, pb, Hb)
        },
        onReceivedMessageFromServer: (bb, wb) => {
          if ("baf2MachineStatus" === bb) {
            var Mb, eb, Hb, Lb, Ib, Ob, Ub, Cb, sb, Xb, jb, Kb, rb, Db, Yb, Ab;
            const bb = wb,
              pb = bb.baf2MachineTaught;
            Vb.set(bb.baf2MachinePos, {
              status: bb.baf2MachineStatus,
              power: null !== (Mb = bb.baf2MachinePower) && void 0 !== Mb ? Mb : null,
              opLeftMs: null !== (eb = bb.baf2MachineOpLeftMs) && void 0 !== eb ? eb : null,
              dug: bb.baf2MachineYield ? {
                item: bb.baf2MachineYield,
                name: mb([bb.baf2MachineYield])[bb.baf2MachineYield]
              } : null,
              powerCap: null !== (Hb = bb.baf2MachinePowerCap) && void 0 !== Hb ? Hb : null,
              powerRates: null !== (Lb = bb.baf2MachinePowerRates) && void 0 !== Lb ? Lb : null,
              coupled: !0 === bb.baf2MachineCoupled,
              couplerLevel: null !== (Ib = bb.baf2MachineCoupler) && void 0 !== Ib ? Ib : 1,
              taught: pb,
              taughtName: pb ? mb([pb])[pb] : null,
              tier: null !== (Ob = bb.baf2MachineTier) && void 0 !== Ob ? Ob : null,
              input: null !== (Ub = bb.baf2MachineInput) && void 0 !== Ub ? Ub : null,
              inertCoupler: null !== (Cb = bb.baf2MachineInertCoupler) && void 0 !== Cb ? Cb : null,
              inputShort: null !== (sb = bb.baf2MachineInputShort) && void 0 !== sb ? sb : null,
              field: null !== (Xb = bb.baf2MachineField) && void 0 !== Xb ? Xb : null,
              noSeeds: !0 === bb.baf2MachineNoSeeds,
              fuelFed: !0 === bb.baf2MachineFuelFed,
              fuelFeeds: !0 === bb.baf2MachineFuelFeeds,
              coreFull: !0 === bb.baf2MachineCoreFull,
              waterUnpowered: !0 === bb.baf2MachineWaterUnpowered,
              powerShort: !0 === bb.baf2MachinePowerShort,
              powerWait: !0 === bb.baf2MachinePowerWait,
              reactorPowered: !0 === bb.baf2MachineReactorPowered,
              fuelLeftMs: null !== (jb = bb.baf2MachineFuelLeftMs) && void 0 !== jb ? jb : null,
              burning: null !== (Kb = bb.baf2MachineBurning) && void 0 !== Kb ? Kb : null,
              fuelKeep: null !== (rb = bb.baf2MachineFuelKeep) && void 0 !== rb ? rb : null,
              water: null !== (Db = bb.baf2MachineWater) && void 0 !== Db ? Db : null,
              farm: null !== (Yb = bb.baf2MachineFarm) && void 0 !== Yb ? Yb : null,
              cryo: null !== (Ab = bb.baf2MachineCryo) && void 0 !== Ab ? Ab : null
            })
          } else if ("baf2StationOpen" === bb) {
            const bb = wb.baf2Station;
            Uw.consumeServerOpen(bb, performance.now()) || PB(Fb, pb, bb, hb)
          } else if ("baf2Power" === bb) {
            const bb = wb;
            cb.set(bb), bb.baf2PowerOpen && (hw({
              kind: "power"
            }), (0, BH.y)())
          } else if (bb === Tb.B) {
            const bb = wb;
            fb.set(bb), bb.baf2WaterOpen && (hw({
              kind: "water"
            }), (0, BH.y)())
          } else if ("baf2RxPlans" === bb) {
            var Wb, Sb, Nb;
            const bb = wb;
            Jb.Tm(bb);
            const Mb = new Set(bb.baf2RxPlanList.map((bb => {
              let [wb, Mb, eb] = bb;
              return `${wb},${Mb},${eb}`
            })));
            ub.retain(Mb);
            const eb = null === (Wb = gb.get()) || void 0 === Wb ? void 0 : Wb.kind,
              Hb = "reactor" === eb ? null === (Sb = vb.get()) || void 0 === Sb ? void 0 : Sb.status.baf2RxAt : "battery" === eb ? null === (Nb = Qb.get()) || void 0 === Nb ? void 0 : Nb.status.baf2BatAt : void 0;
            Hb && Xw.has(Hb.join(",")) && !Mb.has(Hb.join(",")) && zw(), Xw = Mb
          } else if ("baf2RxStatus" === bb) {
            const bb = wb;
            vb.set(bb), bb.baf2RxOpen && (hw({
              kind: "reactor"
            }), (0, BH.y)())
          } else if ("baf2BatStatus" === bb) {
            const bb = wb;
            Qb.set(bb), bb.baf2BatOpen && (hw({
              kind: "battery"
            }), (0, BH.y)())
          } else if ("baf2RxAlarm" === bb) ub.Tm(wb);
          else if ("baf2Bomb" === bb) nb.Tm(wb, Fb.getPositionView(pb));
          else if ("baf2Fallout" === bb) ob.Tm(wb);
          else if ("baf2ColBeams" === bb) kb.onBeams(wb);
          else if ("baf2ColStatus" === bb) {
            const bb = wb;
            var qb, ab;
            if (kb.onStatus(bb), bb.baf2ColOpen) kb.onOpen(null !== (qb = null === (ab = Fb.Leb(pb)) || void 0 === ab ? void 0 : ab.name) && void 0 !== qb ? qb : null), hw({
              kind: "collider"
            }), (0, BH.y)()
          } else if ("baf2Terminal" === bb) {
            const bb = wb;
            var ib;
            if (Zb.apply(bb)) bb.baf2TermReset && (hw({
              kind: "terminal"
            }), (0, BH.y)());
            else "terminal" === (null === (ib = gb.get()) || void 0 === ib ? void 0 : ib.kind) && (gb.set(null), (0, BH.l)())
          } else if ("baf2Core" === bb) {
            var db;
            const bb = wb;
            if (lb(!0 === bb.baf2CoreNuclear), function(bb, wb) {
                return "core" === (null === bb || void 0 === bb ? void 0 : bb.kind) && wb.baf2CoreTier > bb.core.message.baf2CoreTier
              }(gb.get(), bb)) return void(0, BH.l)();
            if (bb.baf2CoreRefresh && "core" !== (null === (db = gb.get()) || void 0 === db ? void 0 : db.kind)) return;
            hw({
              kind: "core",
              core: ps(bb, mb)
            }), bb.baf2CoreRefresh || (0, BH.y)()
          } else if ("baf2WrenchUndo" === bb) {
            const {
              baf2WrenchPos: bb,
              baf2WrenchBlock: Mb
            } = wb;
            Fb.jW(bb[0], bb[1], bb[2], Mb)
          } else if ("baf2Toast" === bb) {
            const bb = wb;
            Gb.heard(performance.now(), bb.baf2ToastMs), zb.show(bb)
          } else if ("baf2Area" === bb) xb.arrive(wb, null !== gb.get());
          else if ("baf2Quest" === bb) {
            const bb = wb;
            lb(!0 === bb.baf2QuestNuclear), hb.set(bb, function(bb, wb) {
              var Mb, eb, Hb, pb, Vb;
              const gb = [];
              for (const [, , Ib, , , , , , Ob, Ub] of bb.baf2QuestSteps) null !== Ib && gb.push(Ib), gb.push(...null !== Ob && void 0 !== Ob ? Ob : [], ...null !== Ub && void 0 !== Ub ? Ub : []);
              bb.baf2QuestReward && gb.push(bb.baf2QuestReward);
              const lb = null === (Mb = bb.baf2QuestSide) || void 0 === Mb ? void 0 : Mb[2][2];
              lb && gb.push(lb), gb.push(...null !== (eb = null === (Hb = bb.baf2QuestSide) || void 0 === Hb ? void 0 : Hb[2][8]) && void 0 !== eb ? eb : [], ...null !== (pb = null === (Vb = bb.baf2QuestSide) || void 0 === Vb ? void 0 : Vb[2][9]) && void 0 !== pb ? pb : []);
              for (const [Ib] of null !== (Lb = bb.baf2QuestAlso) && void 0 !== Lb ? Lb : []) {
                var Lb;
                gb.push(Ib)
              }
              return wb(gb)
            }(bb, mb)), oB(bb.baf2QuestTier)
          } else if ("baf2Route" === bb) ! function(bb, wb) {
            let {
              baf2RouteCells: Mb,
              baf2RouteInto: eb
            } = wb;
            0 !== Mb.length && eb ? bb.setRouteChevrons({
              cells: Mb.map(((bb, wb) => {
                const [Hb, , pb] = function(bb, wb, Mb) {
                  const eb = Mb + 1 < bb.length ? bb[Mb + 1] : wb;
                  return [eb[0] - bb[Mb][0], 0, eb[2] - bb[Mb][2]]
                }(Mb, eb, wb);
                return {
                  pos: bb,
                  way: [Hb, pb]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : bb.setRouteChevrons(null)
          }(Fb, wb);
          else if ("baf2QuestBook" === bb) hb.setBook(wb);
          else if ("baf2Stalls" === bb) tb.set(wb.baf2StallCells);
          else if (bb === FM.m) Eb.onMoves(wb);
          else if (bb === FM.i) Eb.onLines(wb);
          else if ("baf2Labels" === bb) Rb.Tm(wb);
          else if ("baf2DropMap" === bb) hw({
            kind: "dropMap",
            dropMap: wb
          }), (0, BH.y)();
          else if ("baf2Islands" === bb) {
            var yb, bw;
            const bb = wb;
            if (Bb.syncIslandEdits(bb.baf2IslandsAnswered), !bb.baf2IslandsOpen && "islands" !== (null === (yb = gb.get()) || void 0 === yb ? void 0 : yb.kind)) return;
            if (bb.baf2IslandsOpen) {
              var ww, Mw;
              const wb = sH.c.get("openEverythingMenuName"),
                Mb = Bb.sent() >= Ew,
                eb = "other" !== (tw = {
                  askedAtMs: Cw,
                  askSent: Mb,
                  reaskedAtMs: Fw,
                  nowMs: Date.now(),
                  panel: null !== (ww = null === (Mw = gb.get()) || void 0 === Mw ? void 0 : Mw.kind) && void 0 !== ww ? ww : null,
                  inGameMenu: sH.c.get("openInGameMenuName"),
                  everythingMenu: null === wb ? null : wb === UM.l.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== bb.baf2IslandsFocusInvite
                }).everythingMenu && (!!tw.focusInvite || "islands" === tw.panel && "clientGame" === tw.inGameMenu || !(tw.nowMs - tw.reaskedAtMs < KL) && (tw.askSent && tw.nowMs - tw.askedAtMs < KL ? "core" === tw.panel && "clientGame" === tw.inGameMenu && null === tw.everythingMenu : "shop" === tw.everythingMenu || null === tw.inGameMenu));
              if (Mb && (Cw = -1 / 0), Fw = -1 / 0, !eb) return void sw()
            }
            const Mb = (Hw = bb.baf2IslandsOpen, pw = "islands" === (null === (bw = gb.get()) || void 0 === bw ? void 0 : bw.kind), Iw = Bw, Ow = Date.now(), Hw && !pw && Ow - Iw < KL);
            hw({
              kind: "islands",
              islands: bb,
              arrivedAtMs: Date.now(),
              backToCore: rL(gb.get())
            }), Mb && (Bw = -1 / 0, Fw = Date.now(), Bb.send(Pb)), bb.baf2IslandsOpen && ("clientGame" !== sH.c.get("openInGameMenuName") && (0, mH.g)(), (0, BH.y)())
          } else if ("baf2CoopTransfer" === bb) {
            var ew;
            const bb = wb;
            bb.baf2TransferOn ? (hw({
              kind: "transfer",
              transfer: bb,
              arrivedAtMs: Date.now()
            }), (0, BH.y)()) : "transfer" === (null === (ew = gb.get()) || void 0 === ew ? void 0 : ew.kind) && (0, BH.l)()
          } else "baf2IslandLeft" === bb ? (xb.dropHeld(), null !== gb.get() && zw(), "inventory" === sH.c.get("openInGameMenuName") && (0, mH.g)()) : "baf2Arc" === bb ? Vw.Tm(Fb, wb) : "baf2Blade" === bb ? gw.onBlade(Fb, wb) : "baf2JetFlame" === bb ? lw.Tm(Fb, wb) : "baf2GearPower" === bb && Lw.Tm(wb);
          var Hw, pw, Iw, Ow, tw
        }
      };
      return jw
    }
  },
  39714: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      f: () => gb
    });
    var eb = Mb(382),
      Hb = Mb(35334),
      pb = Mb(4659);

    function Vb(bb) {
      const wb = (0, pb.c)(bb);
      return (0, eb._b)(bb, void 0 === wb ? void 0 : (0, Hb.displayNameOf)(wb))
    }

    function gb(bb, wb) {
      return bb(Vb(wb))
    }
  },
  39752: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      const eb = new Set,
        Hb = new ResizeObserver(Mb),
        pb = () => {
          const wb = new Set(document.querySelectorAll(bb));
          let pb = !1;
          for (const bb of eb) wb.has(bb) || (Hb.unobserve(bb), eb.delete(bb), pb = !0);
          for (const bb of wb) eb.has(bb) || (Hb.observe(bb), Vb.observe(bb, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), eb.add(bb));
          pb && Mb()
        },
        Vb = new MutationObserver((wb => {
          wb.some((bb => "attributes" === bb.type)) && Mb(), wb.some((wb => function(bb, wb, Mb) {
            if ("childList" !== bb.type) return !1;
            for (const eb of bb.addedNodes)
              if (eb instanceof Element && (eb.matches(wb) || eb.querySelector(wb))) return !0;
            for (const eb of bb.removedNodes)
              if (eb instanceof Element)
                for (const bb of Mb)
                  if (eb.contains(bb)) return !0;
            return !1
          }(wb, bb, eb))) && pb()
        }));
      Vb.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const gb of wb) Hb.observe(gb);
      return window.addEventListener("resize", Mb), pb(), Mb(), () => {
        Hb.disconnect(), Vb.disconnect(), window.removeEventListener("resize", Mb)
      }
    }
    Mb.d(wb, {
      e: () => eb
    })
  },
  39727: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb
    });
    var eb = Mb(39723);
    const Hb = 5,
      pb = [0, 0, 0],
      Vb = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function gb(bb, wb, Mb, gb, lb, Lb) {
      let [Ib, Ob, Ub] = gb;
      const tb = (Ib + .5 - Mb[0]) ** 2 + (Ob - Mb[1]) ** 2 + (Ub + .5 - Mb[2]) ** 2;
      let Cb = null;
      tb <= Lb ** 2 && (pb[0] = Ib + .5, pb[1] = Ob + lb, pb[2] = Ub + .5, Cb = wb.projectWorldPosToViewport(pb));
      const Eb = null !== Cb && Cb.x > -Hb && Cb.x < 100 + Hb && Cb.y > -Hb && Cb.y < 100 + Hb;
      return (0, eb.f)(bb, !Eb), Eb ? (Vb.x = Cb.x, Vb.y = Cb.y, Vb.distSq = tb, Vb) : null
    }
  },
  39721: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      h: () => gb,
      l: () => Vb
    });
    var eb = Mb(3639);
    const Hb = "(max-height: 420px), (max-width: 650px)";

    function pb() {
      return (0, eb.c)(Hb)
    }

    function Vb(bb) {
      return (0, eb.g)(Hb, bb)
    }

    function gb() {
      return (0, eb.e)(Hb)
    }
  },
  39723: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      f: () => pb
    });
    const eb = new WeakMap;

    function Hb(bb) {
      let wb = eb.get(bb);
      return wb || (wb = {
        hidden: bb.hidden,
        x: NaN,
        y: NaN
      }, eb.set(bb, wb)), wb
    }

    function pb(bb, wb) {
      const Mb = Hb(bb);
      Mb.hidden !== wb && (Mb.hidden = wb, bb.hidden = wb)
    }

    function Vb(bb, wb, Mb) {
      const eb = Hb(bb);
      eb.x === wb && eb.y === Mb || (eb.x = wb, eb.y = Mb, bb.style.translate = `${wb}vw ${Mb}vh`)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);