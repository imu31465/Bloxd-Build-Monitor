export const id = 235;
export const ids = [235];
export const modules = {
  37834: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(37837);
    const Mb = [0, 0, 0];
    class Tb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mb;
        this.pool = bb, this.origin = ab, this.count = 0, this.free = []
      }
      take() {
        var bb;
        const ab = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.count++;
        return ab >= this.pool.PL && this.pool.grow(Math.max(2 * this.pool.PL, ab + 1)), this.hide(ab), ab
      }
      release(bb) {
        this.hide(bb), this.free.push(bb)
      }
      write(bb, ab, Ub, Mb) {
        const {
          records: Tb
        } = this.pool, {
          origin: Eb
        } = this, Yb = bb * Ab.c;
        Tb[Yb] = ab - Eb[0], Tb[Yb + 1] = Ub - Eb[1], Tb[Yb + 2] = Mb - Eb[2], Tb[Yb + Ab.f] = 0, this.pool.markDirty(bb)
      }
      hide(bb) {
        this.pool.records[bb * Ab.c + Ab.f] = 1, this.pool.markDirty(bb)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Eb {
      constructor(bb, ab, Ub) {
        this.api = bb, this.model = ab, this.initialCapacity = Ub, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(bb) {
        let ab = this.kinds.get(bb);
        if (void 0 === ab) {
          const Ub = this.api.createInstancePool({
            ...this.model,
            item: bb
          }, this.initialCapacity);
          null === Ub || void 0 === Ub || Ub.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ab = Ub && new Tb(Ub, this.origin), this.kinds.set(bb, ab)
        }
        return ab
      }
      follow(bb) {
        const {
          origin: ab
        } = this;
        if (Math.abs(bb[0] - ab[0]) <= 512 && Math.abs(bb[1] - ab[1]) <= 512 && Math.abs(bb[2] - ab[2]) <= 512) return !1;
        ab[0] = Math.floor(bb[0]), ab[1] = Math.floor(bb[1]), ab[2] = Math.floor(bb[2]);
        for (const Ub of this.kinds.values()) null === Ub || void 0 === Ub || Ub.pool.setOrigin(ab[0], ab[1], ab[2]);
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
  37849: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      e: () => Yb,
      h: () => Bb
    });
    const Ab = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Mb = [0, 1, 2, 0, 2, 3],
      Tb = [4, 5];

    function Eb(bb, ab, Ub, Ab, Mb) {
      for (let Eb = 0; Eb < 6; Eb++) Tb.includes(Eb) === Mb && eb(bb, ab, Ub, Ab, Eb)
    }

    function Yb(bb, ab, Ub, Ab) {
      for (let Mb = 0; Mb < 6; Mb++) eb(bb, ab, Ub, Ab, Mb)
    }

    function Bb(bb, ab, Ub, Tb, Eb) {
      for (let Yb = 0; Yb < 6; Yb++)
        for (const Bb of [0, 1]) {
          const [eb, vb, Lb] = [Bb + 2, Bb + 1, (Bb + 3) % 4], Pb = bb.length / 3;
          for (const [ab, Mb] of [
              [Bb, vb],
              [eb, vb],
              [eb, Lb],
              [Bb, Lb]
            ])
            for (let Bb = 0; Bb < 3; Bb++) {
              const eb = Ab[3 * (4 * Yb + ab) + Bb],
                vb = Ab[3 * (4 * Yb + Mb) + Bb];
              bb.push((eb + (vb - eb) * Eb) * Tb / 2 + Ub[Bb])
            }
          for (const bb of Mb) ab.push(Pb + bb)
        }
    }

    function eb(bb, ab, Ub, Tb, Eb) {
      let [Yb, Bb, eb] = Ub, [vb, Lb, Pb] = Tb;
      const Xb = bb.length / 3;
      for (let Mb = 4 * Eb; Mb < 4 * Eb + 4; Mb++) bb.push(Ab[3 * Mb] * vb / 2 + Yb, Ab[3 * Mb + 1] * Lb / 2 + Bb, Ab[3 * Mb + 2] * Pb / 2 + eb);
      for (const Ab of Mb) ab.push(Xb + Ab)
    }
  },
  37822: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => jZ
    });
    var Ab = Ub(52);
    const Mb = [{
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
      Tb = 10;
    let Eb = !0;

    function Yb() {
      return Eb
    }

    function Bb(bb) {
      Eb = bb
    }
    const eb = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function vb() {
      return Eb ? Mb.length : Tb
    }

    function Lb(bb) {
      var ab, Ub;
      return null !== (ab = null === (Ub = Mb[bb - 1]) || void 0 === Ub ? void 0 : Ub.reactorTier) && void 0 !== ab ? ab : 0
    }

    function Pb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Lb(bb) > 0;
      return Ub && !Eb ? "hidden" : bb <= ab ? "open" : Ub ? ab < 5 ? "hidden" : ab < Tb ? "teaser" : "locked" : "locked"
    }

    function Xb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Ab,
        n: Mb
      } = kb(bb);
      return {
        key: ab[Ab],
        params: {
          [Ab]: Ub ? String(Mb) : Mb
        }
      }
    }
    const jb = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Rb(bb, ab) {
      return Lb(bb) > 0 && ab < Tb
    }

    function kb(bb) {
      const ab = Lb(bb);
      if (ab > 0) return {
        kind: "atomic",
        n: ab,
        short: `A${ab}`
      };
      const Ub = function(bb) {
        return bb >= 6 && bb <= 10 ? bb - 6 + 1 : 0
      }(bb);
      return Ub > 0 ? {
        kind: "stage",
        n: Ub,
        short: `S${Ub}`
      } : {
        kind: "tier",
        n: bb,
        short: String(bb)
      }
    }

    function yb(bb) {
      return Mb[Math.max(1, Math.min(bb, Mb.length)) - 1]
    }

    function Zb(bb, ab) {
      return bb < ab ? function(bb) {
        var ab;
        return null !== (ab = Mb[bb]) && void 0 !== ab ? ab : null
      }(bb) : null
    }
    const Db = "baf2coresubmit",
      zb = "baf2corebankpause",
      xb = "baf2coredeposit",
      ib = "baf2corechargepause";

    function fb(bb) {
      var ab;
      return null !== (ab = bb.baf2CoreOpen) && void 0 !== ab ? ab : Tb
    }
    const mb = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function pb(bb) {
      return mb.includes(bb)
    }
    const Nb = (bb, ab) => ab.map((ab => [ab, [bb]])),
      Wb = Object.fromEntries([...Nb("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Nb("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Nb("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Nb("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Nb("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Nb("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Nb("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Nb("Parts Bench", ["Focus Lens"]), ...Nb("Machine Bench", ["Laser", "Collider"]), ...Nb("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Nb("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Nb("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Nb("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Nb("Tool Bench", ["Mob Cage"]), ...Nb("Tool Bench", ["Pocket Terminal"]), ...Nb("Tool Bench", ["Comet Beacon"]), ...Nb("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Hb(bb) {
      var ab;
      return null !== (ab = Wb[bb]) && void 0 !== ab ? ab : ["Workbench"]
    }

    function Ib(bb) {
      return Hb(bb)[0]
    }
    Mb.slice(1).map(((bb, ab) => `Core Tier ${ab+2}`));
    var db = Ub(9007);
    const Fb = ["on", "hud", "off"];

    function hb(bb) {
      return "on" === bb
    }
    var Gb = Ub(325);
    const Qb = "Mob Farm",
      qb = {
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
      ub = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      rb = {
        1: 20,
        2: 60,
        3: 120
      },
      Kb = "baf2farmvoid",
      ob = "Caged ",
      lb = " Spawner Block";

    function tb(bb) {
      return `lifeform:${(0,Gb.he)(bb)}`
    }

    function wb(bb) {
      if (!bb) return null;
      if (bb.startsWith(ob)) {
        const ab = bb.slice(6);
        return ub.includes(ab) ? ab : null
      }
      if (bb.endsWith(lb)) {
        const ab = bb.slice(0, -14);
        return void 0 !== qb[ab] ? ab : null
      }
      return null
    }

    function sb(bb) {
      return !0 === bb.mobFarm
    }

    function gb(bb, ab) {
      return rb[qb[ab]] * bb.opMs / 1e3
    }
    const Cb = new Map;
    const Vb = "baf2islands",
      Ob = "baf2islandnew";

    function cb(bb) {
      const ab = Mb.findIndex((ab => ab.unlocks.includes(bb)));
      return ab < 0 ? 1 : ab + 1
    }

    function Jb(bb) {
      return Math.floor(bb).toLocaleString("en-US")
    }
    var nb = Ub(37760);
    const Sb = "baf2terminaltake",
      ba = "baf2terminalput",
      aa = ["one", "stack", "fill"];

    function Ua(bb, ab, Ub) {
      return `${Sb} ${bb} ${ab} ${Ub}`
    }

    function Aa(bb, ab, Ub) {
      return `${ba} ${bb} ${ab} ${Ub}`
    }

    function Ma(bb) {
      return `${ba} ${bb}`
    }
    const Ta = [
      [`${Sb} `, "take"],
      [`${ba} `, "put"]
    ];

    function Ea(bb) {
      const ab = Ta.find((ab => {
        let [Ub] = ab;
        return bb.startsWith(Ub)
      }));
      if (!ab) return null;
      const [Ub, Ab] = ab, [Mb, Tb, ...Eb] = bb.slice(Ub.length).trim().split(" "), Yb = Number(Mb);
      if (!Number.isSafeInteger(Yb) || Yb <= 0) return null;
      if ("put" === Ab && void 0 === Tb) return {
        kind: "putAll",
        seq: Yb
      };
      const Bb = function(bb) {
        if (aa.includes(bb)) return bb;
        const ab = Number(bb);
        return /^\d+$/.test(bb) && Number.isSafeInteger(ab) && ab > 0 ? ab : null
      }(null !== Tb && void 0 !== Tb ? Tb : "");
      return null === Bb || 0 === Eb.length ? null : {
        kind: Ab,
        seq: Yb,
        mode: Bb,
        item: Eb.join(" ")
      }
    }

    function Ya(bb, ab) {
      const Ub = "number" === typeof bb ? bb : "one" === bb ? 1 : "stack" === bb ? 99 : ab;
      return Math.min(ab, Ub)
    }

    function Ba(bb, ab) {
      const Ub = bb => "number" === typeof bb ? bb : "one" === bb ? 1 : 99;
      return "fill" === bb || "fill" === ab ? "fill" : Ub(bb) + Ub(ab)
    }

    function ea(bb, ab) {
      const Ub = Ea(bb),
        Ab = Ea(ab),
        Mb = Ub && Ab ? function(bb, ab) {
          return "take" === bb.kind || "take" === ab.kind ? "take" === bb.kind && "take" === ab.kind && bb.item === ab.item ? {
            ...ab,
            mode: Ba(bb.mode, ab.mode)
          } : null : "putAll" === bb.kind || "putAll" === ab.kind ? {
            kind: "putAll",
            seq: ab.seq
          } : bb.item === ab.item ? {
            ...ab,
            mode: Ba(bb.mode, ab.mode)
          } : null
        }(Ub, Ab) : null;
      return Mb ? "putAll" === (Tb = Mb).kind ? Ma(Tb.seq) : "put" === Tb.kind ? Aa(Tb.seq, Tb.mode, Tb.item) : Ua(Tb.seq, Tb.mode, Tb.item) : null;
      var Tb
    }
    const va = "baf2rx";

    function La(bb, ab) {
      for (var Ub = arguments.length, Ab = new Array(Ub > 2 ? Ub - 2 : 0), Mb = 2; Mb < Ub; Mb++) Ab[Mb - 2] = arguments[Mb];
      return [va, bb[0], bb[1], bb[2], ab, ...Ab].join(" ")
    }
    const Pa = 2,
      Xa = 4,
      ja = 8,
      Ra = 16,
      ka = 32,
      ya = 64,
      Za = 128,
      Da = 256,
      za = 512,
      xa = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      ia = [{
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
    const fa = "Biomass",
      ma = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function pa(bb) {
      return {
        input: fa,
        inputAmount: 1,
        output: bb,
        outputAmount: 1
      }
    }
    const Na = "baf2synth",
      Wa = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Ha = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Ia = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      da = function(bb, ab) {
        return {
          input: bb,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: ab,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Fa = function(bb, ab) {
        return {
          ...da(bb, ab, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      ha = Ha.map((bb => Fa(bb, "Biomass", 2))),
      Ga = {
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
          recipes: [da("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), da("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), da("Raw Gold", "Gold Grit", 2), da("Messy Stone", "Sand"), da("Gravel", "Sand"), da("Raw Voltite", "Voltite Dust", 2), da("Moonstone", "Moonstone Dust", 4), da("Wheat Seeds", "Fertiliser"), da("Raw Uranium", "Uranium Grit", 2), Fa("Mossy Messy Stone", "Sand"), ...ha],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [da("Iron Grit", "Iron Bar"), da("Copper Grit", "Copper Bar"), da("Gold Grit", "Gold Bar"), da("Raw Iron", "Iron Bar"), da("Raw Copper", "Copper Bar"), da("Raw Gold", "Gold Bar"), da("Sand", "Glass"), da("Messy Stone", "Stone"), ...Gb.Dc.map((bb => da(bb, "Charcoal", 1, 4))), da("Wheat", "Bread", 1, 2), ...Ha.map(((bb, ab) => Fa(bb, Ia[ab])))],
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
          recipes: [da("Iron Bar", "Iron Plate"), da("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [da("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [da("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [da("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), da("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), da("Raw Gold", "Gold Grit", 3), da("Raw Voltite", "Voltite Dust", 3), da("Messy Stone", "Sand", 2), da("Gravel", "Sand", 2), da("Moonstone", "Moonstone Dust", 6), da("Raw Uranium", "Uranium Grit", 3), Fa("Mossy Messy Stone", "Sand", 2), ...ha],
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
          table: xa
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [da("Coal", "Diamond", 1, 24), da("Voltite Dust", "Moonstone", 1, 12)],
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
        ...nb.e
      },
      Qa = {
        Crusher: [da("Spent Pellet", "Glow Dust"), da("Wheat Seeds", "Biomass"), da("Wheat", "Biomass"), da("Dead Bush", "Biomass"), da("Dusk Moss", "Biomass"), da("Rotten Flesh", "Biomass"), da("Bone", "Biomass", 2)],
        "Shatter Mill": [da("Spent Pellet", "Glow Dust"), da("Wheat Seeds", "Biomass"), da("Wheat", "Biomass"), da("Dead Bush", "Biomass"), da("Dusk Moss", "Biomass"), da("Rotten Flesh", "Biomass"), da("Bone", "Biomass", 2), ...Gb.Dc.map((bb => da(bb, "Biomass")))],
        Smelter: [da("Biomass", "Fertiliser", 2)],
        Press: [da("Coal", "Graphite", 1, 4)]
      },
      qa = "Power Coupler",
      ua = "Advanced Coupler",
      ra = "Nova Coupler",
      Ka = [{
        item: qa,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: ua,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: ra,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const oa = new Map;

    function la(bb) {
      var ab, Ub;
      return null !== (ab = null !== (Ub = bb.fuelSlot) && void 0 !== Ub ? Ub : bb.couplerSlot) && void 0 !== ab ? ab : null
    }

    function ta(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!bb.couplable) throw new Error(`${bb.kind} takes no Power Coupler`);
      let Ub = oa.get(bb);
      Ub || (Ub = [], oa.set(bb, Ub));
      let Ab = Ub[ab];
      if (!Ab) {
        var Mb;
        const {
          divisor: Tb,
          powerPerS: Eb
        } = Ka[ab - 1], Yb = bb.opMs / Tb, Bb = void 0 !== bb.fluidMade || void 0 !== bb.cryoMade ? bb.powerPerOp : Eb * Yb / 1e3;
        Ab = {
          ...bb,
          fuelSlot: null,
          couplerSlot: null !== (Mb = la(bb)) && void 0 !== Mb ? Mb : void 0,
          opMs: Yb,
          powerPerOp: Bb,
          coupled: !0
        }, ab > 1 && (Ab = {
          ...Ab,
          couplerLevel: ab
        }), Ub[ab] = Ab
      }
      return Ab
    }
    const wa = new Map;
    const sa = new Map;

    function ga(bb, ab) {
      if (null === ab || (Ub = ab, !ma.includes(Ub))) return bb;
      var Ub;
      let Ab = sa.get(ab);
      return Ab || (Ab = {
        ...bb,
        recipes: [pa(ab)]
      }, sa.set(ab, Ab)), Ab
    }

    function Ca(bb) {
      return !0 === bb.synth
    }
    const Va = (bb, ab, Ub, Ab) => ({
        output: bb,
        outputAmount: ab,
        tier: Ub,
        inputs: Ab.map((bb => {
          let [ab, Ub] = bb;
          return {
            item: ab,
            amount: Ub
          }
        }))
      }),
      Oa = Object.fromEntries([Va("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), Va("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), Va("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Va("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), Va("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), Va("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), Va("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), Va("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), Va("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), Va("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), Va("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), Va("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), Va("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), Va("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), Va("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Va("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), Va("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Va("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), Va("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Va("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), Va("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), Va("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), Va("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), Va("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), Va("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), Va("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), Va("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), Va("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), Va("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), Va("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((bb => [bb.output, bb]))),
      ca = new Map;

    function Ja(bb, ab) {
      let Ub = Ga[bb];
      if (ab.atomic && (Ub = function(bb) {
          const ab = Qa[bb.kind];
          if (!ab) return bb;
          let Ub = wa.get(bb.kind);
          if (!Ub) {
            const Ab = new Set(ab.map((bb => bb.input))),
              Mb = bb.recipes.filter((bb => !Ab.has(bb.input)));
            Ub = {
              ...bb,
              recipes: [...Mb, ...ab]
            }, wa.set(bb.kind, Ub)
          }
          return Ub
        }(Ub)), Ub.synth) return ga(Ub, ab.taught);
      if (ab.coupled && Ub.couplable) return ta(Ub, ab.level);
      const Ab = Ub.inputSlots && null !== ab.taught ? Oa[ab.taught] : void 0;
      if (!Ab) return Ub;
      const Mb = `${bb}|${Ab.output}`;
      let Tb = ca.get(Mb);
      return Tb || (Tb = {
        ...Ub,
        bench: Ab
      }, ca.set(Mb, Tb)), Tb
    }
    const na = ["Diamond", "Moonstone"];

    function Sa(bb) {
      return new Set(bb.flatMap((bb => bb.bonus ? [bb.output, bb.bonus.item] : [bb.output])).filter((bb => !na.includes(bb))))
    }
    const bU = Object.values(Ga).flatMap((bb => bb.recipes));
    Sa(bU.filter((bb => !0 !== bb.nuclear))), Sa([...bU.filter((bb => !0 === bb.nuclear)), ...Object.values(Qa).flat()]);

    function aU(bb) {
      return null === bb.inputSlot && void 0 === bb.inputSlots && void 0 === bb.powerMade && void 0 === bb.fluidMade && !bb.treeCutter && void 0 === bb.table
    }

    function UU(bb) {
      return !0 === bb.treeCutter
    }
    const AU = ["Voltite Cell"];

    function MU(bb) {
      var ab, Ub;
      return null !== (ab = null === (Ub = bb.fuels) || void 0 === Ub ? void 0 : Ub.some((bb => AU.includes(bb)))) && void 0 !== ab && ab
    }
    const TU = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Gb.Dc.map((bb => [bb, 8e3]))),
        ...Object.fromEntries(Gb.pd.map((bb => [bb, 2e3]))),
        "Voltite Cell": 12e4
      },
      EU = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      YU = {
        "Uranium Deposit": 4e3
      };

    function BU(bb) {
      var ab;
      return null !== (ab = Object.keys(EU).find((ab => EU[ab] === bb))) && void 0 !== ab ? ab : null
    }

    function eU(bb) {
      return Wa.includes(bb)
    }

    function vU(bb) {
      return !0 !== bb.nuclear || Yb()
    }
    var LU = Ub(307);
    var PU = Ub(9077),
      XU = Ub(9017),
      jU = Ub(9086),
      RU = Ub(9071);
    const kU = "Reactor Controller",
      yU = "Reactor Port",
      ZU = "Battery Cell",
      DU = ["fuel", "water", "waste"],
      zU = {
        fuel: yU,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      xU = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      iU = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      fU = "Reactor Frame",
      mU = "Reactor Glass",
      pU = {
        edge: [fU],
        cap: [mU, yU],
        wall: [mU, yU],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [kU]
      },
      NU = {
        edge: [ZU],
        cap: [ZU],
        wall: [ZU],
        inside: [ZU],
        ctrl: [ZU]
      },
      WU = ["edge", "cap", "wall", "inside"],
      HU = ["Reactor Slag"];

    function IU(bb) {
      return HU.includes(dU(bb))
    }

    function dU(bb) {
      const ab = bb.indexOf("|");
      return ab < 0 ? bb : bb.slice(0, ab)
    }

    function FU(bb) {
      return dU(bb) === kU ? "reactor" : null
    }

    function hU(bb) {
      return dU(bb) !== yU ? null : bb.endsWith("|Water") ? "water" : bb.endsWith("|Waste") ? "waste" : "fuel"
    }

    function GU(bb) {
      const ab = hU(bb);
      return null === ab ? null : uU(zU[DU[(DU.indexOf(ab) + 1) % DU.length]], function(bb) {
        return bb.includes(QU)
      }(bb))
    }
    const QU = "|meta|rot1|Formed",
      qU = new Set([fU, mU, yU]);

    function uU(bb, ab) {
      var Ub;
      const Ab = dU(bb);
      if (!qU.has(Ab)) return bb;
      if (Ab !== yU) return ab ? Ab + QU : Ab;
      const Mb = null !== (Ub = hU(bb)) && void 0 !== Ub ? Ub : "fuel";
      return ab ? "fuel" === Mb ? Ab + QU : `${Ab}${QU}|${"water"===Mb?"Water":"Waste"}` : zU[Mb]
    }

    function rU(bb, ab) {
      const Ub = AA(bb, ab);
      if ("Air" === Ub) return !1;
      const Ab = "reactor" === bb ? pU : NU;
      return WU.some((bb => Ab[bb].includes(Ub))) || "reactor" === bb && HU.includes(Ub)
    }

    function KU(bb) {
      return iU[bb]
    }

    function oU(bb) {
      var ab;
      return null !== (ab = xU[bb]) && void 0 !== ab ? ab : xU[1]
    }

    function lU(bb) {
      const [ab, , Ub] = oU(bb);
      return [Ub, 0, -ab]
    }

    function tU(bb, ab, Ub, Ab, Mb, Tb) {
      return {
        ctrl: [bb[0], bb[1], bb[2]],
        rot: xU[ab] ? ab : 1,
        w: Ub,
        h: Ab,
        d: Mb,
        cu: Tb[0],
        cv: Tb[1]
      }
    }

    function wU(bb, ab) {
      return "reactor" === bb ? [Math.floor((ab - 1) / 2), 0] : [0, 0]
    }

    function sU(bb, ab, Ub, Ab, Mb) {
      let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb.rot;
      if (Ub === bb.w && Ab === bb.h && Mb === bb.d && Tb === bb.rot) return bb;
      const [Eb] = wU(ab, bb.w);
      if (bb.cu === Eb && bb.cv <= 1) return tU(bb.ctrl, Tb, Ub, Ab, Mb, wU(ab, Ub));
      const Yb = (bb, ab) => Math.max(1, Math.min(ab, bb));
      return tU(bb.ctrl, Tb, Ub, Ab, Mb, [Yb(bb.cu, Ub - 2), 0 === bb.cv ? 0 : Yb(bb.cv, Ab - 2)])
    }
    const gU = 11,
      CU = 2 * gU + 1;
    new Uint8Array(CU * CU * CU);

    function VU(bb) {
      return bb.w * bb.h * bb.d
    }

    function OU(bb) {
      const ab = lU(bb.rot);
      return [bb.ctrl[0] - ab[0] * bb.cu, bb.ctrl[1] - bb.cv, bb.ctrl[2] - ab[2] * bb.cu]
    }

    function cU(bb) {
      return bb.cv * bb.d * bb.w + bb.cu
    }

    function JU(bb, ab) {
      const Ub = ab % bb.w,
        Ab = Math.floor(ab / bb.w) % bb.d;
      return [Ub, Math.floor(ab / (bb.w * bb.d)), Ab]
    }

    function nU(bb, ab) {
      const [Ub, Ab, Mb] = JU(bb, ab), Tb = OU(bb), Eb = oU(bb.rot), Yb = lU(bb.rot);
      return [Tb[0] + Yb[0] * Ub - Eb[0] * Mb, Tb[1] + Ab, Tb[2] + Yb[2] * Ub - Eb[2] * Mb]
    }

    function SU(bb, ab) {
      const Ub = OU(bb),
        Ab = oU(bb.rot),
        Mb = lU(bb.rot),
        Tb = ab[0] - Ub[0],
        Eb = ab[2] - Ub[2],
        Yb = Tb * Mb[0] + Eb * Mb[2],
        Bb = -(Tb * Ab[0] + Eb * Ab[2]),
        eb = ab[1] - Ub[1];
      return Yb < 0 || Yb >= bb.w || eb < 0 || eb >= bb.h || Bb < 0 || Bb >= bb.d ? -1 : (eb * bb.d + Bb) * bb.w + Yb
    }

    function bA(bb, ab) {
      if (ab === cU(bb)) return "ctrl";
      const [Ub, Ab, Mb] = JU(bb, ab), Tb = 0 === Ab || Ab === bb.h - 1, Eb = Number(0 === Ub || Ub === bb.w - 1) + Number(Tb) + Number(0 === Mb || Mb === bb.d - 1);
      return Eb >= 2 ? "edge" : 1 === Eb ? Tb ? "cap" : "wall" : "inside"
    }

    function aA(bb, ab) {
      const [Ub, Ab, Mb] = JU(bb, ab);
      return 0 === Ub || Ub === bb.w - 1 || 0 === Ab || Ab === bb.h - 1 || 0 === Mb || Mb === bb.d - 1 ? -1 : ((Ab - 1) * (bb.d - 2) + (Mb - 1)) * (bb.w - 2) + (Ub - 1)
    }

    function UA(bb, ab) {
      const Ub = bb.w - 2,
        Ab = bb.d - 2,
        Mb = ab % Ub + 1,
        Tb = Math.floor(ab / Ub) % Ab + 1;
      return ((Math.floor(ab / (Ub * Ab)) + 1) * bb.d + Tb) * bb.w + Mb
    }

    function AA(bb, ab) {
      const Ub = dU(ab);
      return "reactor" === bb && Ub === kU ? fU : Ub
    }

    function MA(bb, ab, Ub) {
      const Ab = "ctrl" === ab ? dU(Ub) : AA(bb, Ub);
      return ("reactor" === bb ? pU : NU)[ab].includes(Ab) ? "ok" : "Air" === Ab ? "missing" : rU(bb, Ub) ? "wrong" : "blocked"
    }

    function TA(bb, ab) {
      return "battery" === bb ? ZU : "inside" === ab ? null : function(bb, ab) {
        if ("inside" === ab || "ctrl" === ab || "battery" === bb) return null;
        return "edge" === ab ? fU : mU
      }(bb, ab)
    }
    const EA = {
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
      YA = "Collider",
      BA = "Laser",
      eA = "Star Alloy",
      vA = "Glow Dust",
      LA = [YA, "_Collider Focus"];

    function PA(bb) {
      return LA.indexOf(dU(bb))
    }

    function XA(bb) {
      return dU(bb) === BA
    }

    function jA(bb) {
      return [
        [bb[0], bb[1], bb[2]],
        [bb[0], bb[1] + 1, bb[2]]
      ]
    }
    const RA = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function kA(bb, ab, Ub) {
      const Ab = RA[ab];
      return [bb[0] + Ab[0] * Ub, bb[1], bb[2] + Ab[2] * Ub]
    }

    function yA(bb, ab) {
      if (ab[1] !== bb[1]) return null;
      const Ub = ab[0] - bb[0],
        Ab = ab[2] - bb[2];
      if (0 !== Ub === (0 !== Ab)) return null;
      const Mb = Math.abs(Ub + Ab);
      if (Mb > EA.LASER_D) return null;
      return {
        dir: Ab < 0 ? 0 : Ub > 0 ? 1 : Ab > 0 ? 2 : 3,
        CE: Mb
      }
    }

    function ZA(bb, ab, Ub) {
      const Ab = ab => Math.abs(bb[0] - ab[0]) <= 1 && Math.abs(bb[1] - ab[1]) <= 1;
      return Ab(ab) || Ab(Ub)
    }

    function DA(bb, ab) {
      return function(bb, ab, Ub, Ab) {
        return [0, 1, 2, 3].map((Mb => {
          for (let Tb = 1; Tb <= EA.LASER_D; Tb++) {
            const Eb = kA(bb, Mb, Tb);
            if (ZA([Eb[0], Eb[2]], ab, Ub) || !Ab(Eb)) return !1
          }
          return !0
        }))
      }(jA(bb)[1], ab.spawnXZ, ab.coreXZ, (bb => bb[1] >= PU.q && bb[1] < PU.q + PU.r && bb[0] >= ab.minXZ[0] && bb[0] <= ab.maxXZ[0] && bb[2] >= ab.minXZ[1] && bb[2] <= ab.maxXZ[1]))
    }
    const zA = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function xA(bb) {
      return Math.max(48 + 16 * bb, yb(bb).machineAllowance)
    }
    const iA = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function fA(bb) {
      const ab = bb.split("|")[0];
      return iA.includes(ab) ? "Solar Panel" : ab === jU.c ? "Fluid Pipe" : PA(ab) >= 0 ? "Collider" : (Ub = ab, zA.includes(Ub) ? ab : null);
      var Ub
    }
    const mA = "buildAFactory2Game:solarPanelDescription";
    const pA = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function NA(bb, ab) {
      var Ub;
      return null !== (Ub = pA.find((Ub => {
        var Ab;
        return (null !== (Ab = bb.level(Ub)) && void 0 !== Ab ? Ab : 0) >= ab
      }))) && void 0 !== Ub ? Ub : null
    }
    const WA = "buildAFactory2Game:";
    let HA = null;
    const IA = {
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
      dA = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      FA = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      hA = {
        "Loot Chest": `${WA}lookRuinChestName`
      };

    function GA(bb) {
      return "object" === typeof bb && null !== bb && "translationKey" in bb && "string" === typeof bb.translationKey ? bb.translationKey : null
    }

    function QA(bb, ab) {
      var Ub;
      return null !== (Ub = GA(bb.displayName(ab))) && void 0 !== Ub ? Ub : `item:${(0,Gb.he)(ab)}`
    }

    function qA(bb, ab) {
      var Ub, Ab, Mb, Tb;
      let Eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ab;
      if ("Solar Panel" === fA(ab)) return {
        name: GA(bb.displayName("Solar Panel")),
        detail: mA,
        detailItem: null
      };
      const Bb = ab.endsWith(" Ore"),
        eb = (HA ??= new Set([...Object.keys((0, XU.h)()), ...Object.keys((0, jU.t)())].map((bb => bb.split("|")[0]))), HA).has(ab),
        vb = Bb || eb ? null : function(bb) {
          var ab;
          return bb.endsWith(" Log") && !bb.startsWith("Barkless ") ? "lookLog" : bb.endsWith(" Sapling") ? "lookSapling" : bb.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (ab = IA[bb]) && void 0 !== ab ? ab : null
        }(ab);
      if (!bb.isBlock(ab) || !Bb && !eb && null === vb) return null;
      const Lb = null !== (Ub = null !== (Ab = hA[ab]) && void 0 !== Ab ? Ab : GA(null !== (Mb = bb.displayName(Eb)) && void 0 !== Mb ? Mb : bb.displayName(ab))) && void 0 !== Ub ? Ub : `item:${(0,Gb.he)(ab)}`;
      if (null !== vb) return {
        name: Lb,
        detail: `${WA}${vb}`,
        detailItem: null
      };
      const Pb = null !== (Tb = dA[ab]) && void 0 !== Tb ? Tb : Yb() ? FA[ab] : void 0;
      if (eb && void 0 !== Pb) return {
        name: Lb,
        detail: `${WA}${Pb}`,
        detailItem: null
      };
      const Xb = EU[ab];
      if (void 0 !== Xb) return {
        name: Lb,
        detail: `${WA}lookDeposit`,
        detailItem: QA(bb, Xb)
      };
      const jb = bb.harvestLevel(ab);
      if (Bb && "rock" === bb.harvestType(ab) && 0 !== jb) {
        const ab = NA(bb, null !== jb && void 0 !== jb ? jb : 0);
        if (ab === pA[0]) return {
          name: Lb,
          detail: `${WA}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== ab) return {
          name: Lb,
          detail: `${WA}lookPickaxe`,
          detailItem: QA(bb, ab)
        }
      }
      return {
        name: Lb,
        detail: GA(bb.description(ab)),
        detailItem: null
      }
    }

    function uA(bb) {
      return bb < PU.q - 24
    }
    const rA = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const KA = "Wrench",
      oA = "Nova Wrench";

    function lA(bb) {
      return bb === KA || bb === oA
    }
    const tA = [...PU.O, "Belt Lift", "Belt Drop"];
    const wA = ["Belt Lift", "Belt Drop"],
      sA = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function gA(bb) {
      return bb.split("|")[0]
    }

    function CA(bb) {
      const ab = /\|rot(\d)/.exec(bb);
      return ab ? Number(ab[1]) : 1
    }

    function VA(bb) {
      return bb % 4 + 1
    }

    function OA(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === ab && "" === Ub ? bb : `${bb}|meta|rot${ab}${Ub}`
    }

    function cA(bb) {
      return gA(bb) === PU.z ? (0, PU.V)(bb) ? "gateRight" : "gateLeft" : (0, PU.ab)(bb)
    }

    function JA(bb) {
      const ab = gA(bb),
        Ub = CA(bb);
      if (PU.O.includes(ab)) return (0, PU.P)(ab, VA(Ub), null);
      if (ab === PU.k) return (0, PU.hb)(VA(Ub), (0, PU.Z)(bb));
      if (ab === PU.C) {
        const Ab = sA[(0, PU.ab)(bb)];
        return null === Ab ? OA(ab, VA(Ub)) : OA(ab, Ub, PU.G[Ab])
      }
      return ab === PU.z ? (0, PU.V)(bb) ? OA(ab, VA(Ub)) : OA(ab, Ub, PU.o) : RU.c.includes(ab) && !wA.includes(ab) || eU(ab) ? OA(ab, VA(Ub)) : null
    }

    function nA(bb) {
      return RU.c.includes(bb) || eU(bb) || null !== fA(bb)
    }

    function SA(bb) {
      return "Solar Panel" === fA(bb)
    }
    const bM = "buildAFactory2Game:",
      aM = {
        leftFront: `${bM}lookSplitDetail_leftFront`,
        frontRight: `${bM}lookSplitDetail_frontRight`,
        gateRight: `${bM}lookGateDetail_gateRight`
      };

    function UM(bb, ab) {
      var Ub;
      let Ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Mb = cA(bb),
        Tb = null === Mb ? null : `${bM}${Mb.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Mb}`,
        Eb = null === Mb ? null : null !== (Ub = aM[Mb]) && void 0 !== Ub ? Ub : null;
      if (lA(ab) && Ab) {
        const Ub = gA(bb);
        return ab === oA && Yb() && function(bb) {
          return tA.includes(gA(bb))
        }(bb) ? {
          mode: Tb,
          detail: Eb,
          next: `${bM}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Tb,
          detail: Eb,
          next: nA(Ub) && !SA(Ub) ? `${bM}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Bb = lA(ab) ? JA(bb) : null;
      if (null === Bb) return {
        mode: Tb,
        detail: Eb,
        next: null,
        nextState: null
      };
      const eb = cA(Bb);
      return null === eb || CA(Bb) !== CA(bb) ? {
        mode: Tb,
        detail: Eb,
        next: `${bM}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Tb,
        detail: Eb,
        next: `${bM}lookWrenchNext`,
        nextState: `${bM}lookWrenchState_${eb}`
      }
    }
    const AM = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const MM = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function TM(bb) {
      return [0, 1, 2, 3].map((ab => 0 !== (bb & 1 << ab)))
    }

    function EM(bb) {
      const ab = [];
      for (let Ub = 8; Ub + 2 < bb.length; Ub += 3) ab.push([bb[Ub], bb[Ub + 1], bb[Ub + 2]]);
      return {
        focus: [bb[0], bb[1], bb[2]],
        lasers: TM(bb[3]),
        open: TM(bb[4]),
        live: TM(bb[5]),
        on: 1 === bb[6],
        state: MM[bb[7]],
        blockers: ab
      }
    }
    const YM = "Arc Caster",
      BM = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      eM = (Object.values(BM), "Jet Chestplate"),
      vM = "Nova Jet Chestplate",
      LM = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      PM = Object.values(LM);

    function XM(bb, ab, Ub) {
      return Math.min(function(bb) {
        return Yb() && Lb(bb) >= 5 ? 20 : 10
      }(Ub), Math.floor(function(bb, ab) {
        return Math.max(0, bb) + (Yb() ? Math.max(0, ab) : 0)
      }(bb, ab) / 5))
    }

    function jM(bb, ab, Ub) {
      const Ab = XM(ab, Ub, bb),
        Mb = Lb(bb),
        Tb = (Mb >= 3 ? 55 : Mb >= 1 ? 50 : bb >= 8 ? 45 : 30) + Ab,
        Eb = Math.max(100 + Ab, 2 * Tb);
      return {
        arcDamage: Tb,
        arcPierce: bb >= 7 ? 2 : 1,
        arcChain: bb >= 10,
        barrierMax: (Mb >= 4 ? 100 : Mb >= 2 ? 90 : bb >= 9 ? 80 : bb >= 6 ? 60 : 40) + 5 * Ab,
        barrierRegenPerS: Mb >= 5 ? 20 : bb >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Ab,
        novaShieldRegenPerS: 32,
        bladeDamage: Eb,
        bladePunch: Math.round(.5 * Eb),
        forgeRank: Ab
      }
    }
    const RM = {
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
    var kM = Ub(36160),
      yM = Ub(36023),
      ZM = Ub(36017),
      DM = Ub(19),
      zM = Ub(1548),
      xM = Ub(984),
      iM = Ub.n(xM);

    function fM(bb) {
      return !0 === bb.field
    }
    const mM = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function pM(bb) {
      return mM.has(bb) ? `buildAFactory2Game:itemPlural_${(0,Gb.he)(bb)}` : null
    }
    var NM = Ub(1134),
      WM = Ub(990),
      HM = Ub(1812),
      IM = Ub(1794),
      dM = Ub(36144),
      FM = Ub(36153),
      hM = Ub(22),
      GM = Ub(36137);
    const QM = "baf2QuestView",
      qM = "baf2PlayerY",
      uM = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class rM {
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
      set(bb, ab) {
        var Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb;
        const vb = JSON.stringify(bb.baf2QuestName) === JSON.stringify(this.view.name),
          Lb = new Set(this.view.rows.filter((bb => bb.done)).map((bb => bb.id))),
          Pb = new Set(this.view.rows.filter((bb => bb.justFinished)).map((bb => bb.id))),
          Xb = bb.baf2QuestSide,
          jb = null !== Xb && !0 === bb.baf2QuestSideFocus;
        let Rb = !1,
          kb = 0;
        const yb = bb.baf2QuestSteps.map((bb => {
            const ab = CM(bb, uM.has(bb[0]) ? bb[0] : "" + kb++),
              Ub = vb && ab.done && !Lb.has(ab.id);
            return ab.justFinished = Ub || vb && ab.done && Pb.has(ab.id), Rb ||= Ub, ab
          })),
          Zb = gM(yb);
        Zb >= 0 && !jb && (yb[Zb].current = !0);
        const Db = !vb && null !== bb.baf2QuestName,
          zb = JSON.stringify(Xb && [Xb[0], Xb[1]]),
          xb = zb === JSON.stringify(null !== (Ub = null === (Ab = this.view.side) || void 0 === Ab ? void 0 : Ab.name) && void 0 !== Ub ? Ub : null),
          ib = null !== Xb && !this.sidesSeen.has(zb);
        ib && this.sidesSeen.add(zb), this.serverTutorial = null !== (Mb = bb.baf2QuestTutorial) && void 0 !== Mb ? Mb : "on", (null !== (Tb = bb.baf2QuestTutorialSeq) && void 0 !== Tb ? Tb : 0) >= this.pickSeq && this.endPick();
        const fb = !vb || !xb || bb.baf2QuestTier !== this.view.tier;
        this.view = {
          name: bb.baf2QuestName,
          rows: yb,
          reward: bb.baf2QuestReward,
          goal: bb.baf2QuestGoal,
          pulse: this.view.pulse + (Rb || Db ? 1 : 0),
          itemNames: ab,
          side: Xb && {
            name: [Xb[0], Xb[1]],
            row: {
              ...CM(Xb[2], "side"),
              current: jb
            },
            goal: null !== (Eb = Xb[3]) && void 0 !== Eb ? Eb : null
          },
          sideCameUpAt: ib ? Date.now() : this.view.sideCameUpAt,
          tier: bb.baf2QuestTier,
          core: bb.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (Yb = bb.baf2QuestAlso) && void 0 !== Yb ? Yb : [],
          depth: null !== (Bb = bb.baf2QuestDepth) && void 0 !== Bb ? Bb : null,
          tutorial: null !== (eb = this.pickedTutorial) && void 0 !== eb ? eb : this.serverTutorial,
          tutorialKnown: !0
        }, this.IR(), Rb && this.scheduleClear(), fb && this.requestBook()
      }
      setTutorial(bb) {
        return this.endPick(), this.pickedTutorial = bb, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.IR()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: bb
        }, this.IR(), this.pickSeq
      }
      onPlayerY(bb) {
        const ab = Math.floor(bb);
        ab !== this.playerY && (this.playerY = ab, this.view.depth && hM.m.IR(qM, ab))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(bb) {
        this.view = {
          ...this.view,
          chapters: bb.baf2BookChapters
        }, this.IR()
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
          }, this.IR()
        }), 2400)
      }
      IR() {
        hM.m.IR(QM, this.view, !0)
      }
    }

    function KM(bb, ab) {
      return bb.sideCameUpAt > 0 && ab - bb.sideCameUpAt < 2400
    }

    function oM(bb) {
      return (null === bb.name || lM(bb)) && null === bb.side && null !== bb.chapters
    }

    function lM(bb) {
      var ab;
      return "quest_forgeOngoing" === (null === (ab = bb.name) || void 0 === ab ? void 0 : ab[0])
    }

    function tM(bb) {
      return bb.filter((bb => !uM.has(bb.key)))
    }

    function wM(bb) {
      return bb.key.startsWith("stepCraft")
    }

    function sM(bb, ab) {
      const Ub = new Set,
        Ab = bb.side ? [...bb.rows, bb.side.row] : bb.rows;
      for (const Tb of Ab)
        if (!Tb.done) {
          !Tb.item || ab && !wM(Tb) || Ub.add(Tb.item);
          for (const [bb, ab, Ab] of null !== (Mb = Tb.chips) && void 0 !== Mb ? Mb : []) {
            var Mb;
            ab < Ab && Ub.add(bb)
          }
        } return Ub
    }

    function gM(bb) {
      const ab = bb.findIndex((bb => !bb.done && !bb.away));
      return ab >= 0 ? ab : bb.findIndex((bb => !bb.done))
    }

    function CM(bb, ab) {
      let [Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb] = bb;
      return {
        id: ab,
        key: Ub,
        params: Ab,
        item: Mb,
        amount: Tb,
        total: Eb,
        done: Yb,
        chips: null !== Bb && void 0 !== Bb ? Bb : null,
        current: !1,
        away: !0 === eb,
        madeFor: null !== vb && void 0 !== vb ? vb : [],
        also: null !== Lb && void 0 !== Lb ? Lb : [],
        justFinished: !1
      }
    }
    const VM = "baf2QuestItems",
      OM = new Set;
    let cM = new Set,
      JM = null;

    function nM(bb) {
      const ab = hb(bb.tutorial),
        Ub = ab ? sM(bb, !0) : OM;
      "inventory" === DM.c.get("openInGameMenuName") ? (JM = null, (0, GM.w)(Ub)) : JM = Ub;
      const Ab = ab ? sM(bb, !1) : OM;
      (0, FM.b)(Ab, cM) || (cM = Ab, hM.m.IR(VM, cM))
    }

    function SM() {
      return (0, dM.d)(VM, (() => cM))
    }
    var bT = Ub(8922),
      aT = Ub(2989);

    function UT(bb) {
      const ab = (0, aT.d)(bb),
        Ub = void 0 === ab ? void 0 : (0, bT.displayNameOf)(ab);
      return "object" === typeof Ub && null !== Ub && "translationKey" in Ub && "string" === typeof Ub.translationKey ? Ub.translationKey : `item:${(0,Gb.he)(bb)}`
    }

    function AT(bb, ab) {
      return bb(UT(ab))
    }
    const MT = [{
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

    function TT(bb, ab) {
      return [`Deposit Seed (${bb})`, {
        item: EU[`${bb} Deposit`],
        amount: ab
      }]
    }
    const ET = Object.fromEntries([TT("Coal", 8), TT("Iron", 8), TT("Copper", 8), TT("Gold", 6), TT("Voltite", 4), TT("Uranium", 4)]),
      YT = "Relay Coil",
      BT = new Map;

    function eT(bb) {
      let ab = BT.get(bb);
      if (!ab) {
        const Ub = Math.max(1, bb);
        ab = MT.filter((bb => {
          var ab;
          return Ub >= bb.fromTier && Ub <= (null !== (ab = bb.untilTier) && void 0 !== ab ? ab : 1 / 0)
        })).map((bb => bb.later && Ub >= bb.later.tier ? {
          ...bb,
          weight: bb.later.weight
        } : bb)), BT.set(bb, ab)
      }
      return ab
    }

    function vT(bb) {
      return eT(bb).some((bb => {
        let {
          item: ab
        } = bb;
        return ab === YT
      }))
    }

    function LT(bb) {
      return bb.startsWith("Deposit Seed (")
    }

    function PT(bb, ab) {
      const Ub = eT(bb);
      return ab ? Ub.filter((bb => ab(bb.item))) : Ub
    }

    function XT(bb) {
      return bb.reduce(((bb, ab) => bb + ab.weight), 0)
    }

    function jT(bb, ab) {
      const Ub = PT(bb, ab),
        Ab = XT(Ub);
      return Ub.map((bb => ({
        find: bb,
        chance: bb.weight / Ab
      })))
    }
    const RT = 6e4,
      kT = new Intl.NumberFormat("en-US");

    function yT(bb, ab) {
      const Ub = bb >= 10 ? Math.round(bb) : Math.round(10 * bb) / 10;
      return 0 === Ub ? "0" : `${ab}${kT.format(Ub)}`
    }

    function ZT(bb) {
      return bb < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? kT.format(bb) : bb < 1e6 ? `${bb<1e5?Math.floor(bb/100)/10:Math.floor(bb/1e3)}k` : Math.floor(bb / 1e5) / 10 + "M"
    }

    function DT(bb) {
      return bb < 0 ? "\u2212" + -bb : String(bb)
    }

    function zT(bb, ab) {
      const Ub = Math.max(1, Math.round(ab));
      if (Ub < 60) return bb("buildAFactory2Game:durationSeconds", {
        seconds: String(Ub)
      });
      const Ab = Math.round(Ub / 60);
      if (Ab < 60) return bb("buildAFactory2Game:durationMinutes", {
        minutes: String(Ab)
      });
      const Mb = String(Math.floor(Ab / 60));
      return Ab % 60 === 0 ? bb("buildAFactory2Game:durationWholeHours", {
        hours: Mb
      }) : bb("buildAFactory2Game:durationHours", {
        hours: Mb,
        minutes: String(Ab % 60)
      })
    }
    const xT = "(max-height: 420px), (max-width: 650px)";

    function iT() {
      return "undefined" !== typeof window && window.matchMedia(xT).matches
    }

    function fT(bb) {
      const ab = window.matchMedia(xT),
        Ub = () => {
          bb(ab.matches)
        };
      return ab.addEventListener("change", Ub), () => {
        ab.removeEventListener("change", Ub)
      }
    }
    var mT = Ub(1023);

    function pT(bb, ab) {
      return null !== bb && bb > ab + 1
    }

    function NT(bb) {
      const ab = 100 * bb;
      return String(ab <= 0 || ab >= 1 ? Math.round(ab) : Math.max(.1, Math.round(10 * ab) / 10))
    }

    function WT(bb) {
      let {
        item: ab,
        amount: Ub
      } = bb;
      return (0, mT.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, mT.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, mT.jsx)(HM.c, {
            itemName: ab,
            amount: 0
          })
        }), Ub > 1 && (0, mT.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", Ub]
        })]
      })
    }

    function HT(bb) {
      let {
        label: ab,
        names: Ub
      } = bb;
      const [Mb, Tb] = (0, Ab.useState)(!1), Eb = Ub.join(" / ");
      return (0, mT.jsxs)(mT.Fragment, {
        children: [(0, mT.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Eb,
          "aria-expanded": Mb,
          onClick: () => {
            Tb(!Mb)
          },
          children: ab
        }), Mb && (0, mT.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Eb
        })]
      })
    }

    function IT(bb) {
      let {
        tier: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)(), {
        key: Ab,
        params: Mb
      } = Xb(ab, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Tb = Ub(`buildAFactory2Game:${Ab}`, Mb);
      return (0, mT.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, mT.jsx)(WM.e, {
          name: "lock"
        }), Tb]
      })
    }
    const dT = (0, Ab.createContext)(null);

    function FT() {
      const {
        t: bb
      } = (0, NM.A)(), ab = (0, Ab.useContext)(dT);
      return (0, Ab.useEffect)((() => null === ab || void 0 === ab ? void 0 : ab()), [ab]), (0, mT.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: bb("buildAFactory2Game:recipeForQuest"),
        "aria-label": bb("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function hT(bb) {
      let {
        title: ab,
        count: Ub,
        children: Mb,
        startOpen: Tb = !0
      } = bb;
      const {
        t: Eb
      } = (0, NM.A)(), [Yb, Bb] = (0, Ab.useState)((() => Tb && !iT())), [eb, vb] = (0, Ab.useState)(0), Lb = (0, Ab.useCallback)((() => (vb((bb => bb + 1)), () => {
        vb((bb => bb - 1))
      })), []);
      return (0, mT.jsxs)("div", {
        className: iM()("Baf2Recipes", {
          Open: Yb
        }),
        children: [(0, mT.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Bb(!Yb)
          },
          "aria-expanded": Yb,
          children: [Eb("buildAFactory2Game:recipesToggle", {
            title: ab,
            count: String(Ub)
          }), (0, mT.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: Yb ? "\u25be" : "\u25b8"
          })]
        }), Yb && (0, mT.jsxs)(dT.Provider, {
          value: Lb,
          children: [(0, mT.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Mb
          }), eb > 0 && (0, mT.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, mT.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Eb("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const GT = "buildAFactory2Game:",
      QT = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const qT = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      uT = {
        "Uranium Grit": Tb,
        "Raw Uranium": Tb
      };

    function rT(bb) {
      var ab;
      return null !== (ab = uT[bb]) && void 0 !== ab ? ab : Math.max(cb(bb), qT[bb] ? cb(qT[bb]) : 1, function(bb) {
        const ab = Mb.findIndex((ab => ab.cost.some((ab => ab.item === bb))));
        return ab > Tb ? ab : 1
      }(bb))
    }

    function KT(bb, ab) {
      return oT(ab) ? rT(ab) : function(bb) {
        if (QT.has(bb)) return 1;
        const ab = Mb.findIndex((ab => ab.newDeposits.some((ab => {
          let {
            block: Ub
          } = ab;
          return Ub === bb
        }))));
        return ab < 0 ? 1 : ab + 1
      }(bb)
    }

    function oT(bb) {
      return bb in uT || Lb(rT(bb)) > 0
    }

    function lT(bb, ab) {
      return Ja(bb, {
        coupled: !1,
        taught: null,
        atomic: Yb() && ab >= 11
      }).recipes
    }

    function tT(bb, ab) {
      const Ub = Pb(bb, ab, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Lb(bb) > 0);
      return "open" === Ub || "locked" === Ub
    }

    function wT(bb, ab) {
      return bb.map(((bb, Ub) => ({
        value: bb,
        idx: Ub,
        tier: ab(bb)
      }))).sort(((bb, ab) => bb.tier - ab.tier || bb.idx - ab.idx)).map((bb => {
        let {
          value: ab
        } = bb;
        return ab
      }))
    }

    function sT(bb, ab, Ub) {
      const Ab = Pb(bb, ab);
      if ("hidden" === Ab || "open" === Ab) return null;
      if ("teaser" === Ab) return {
        tag: {
          translationKey: `${GT}${Ub?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${GT}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Mb = Xb(bb, {
          tier: Ub ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Tb = Xb(bb, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${GT}${Mb.key}`,
          params: Mb.params
        },
        reason: {
          translationKey: `${GT}${Tb.key}`,
          params: Tb.params
        }
      }
    }

    function gT(bb) {
      return !LT(bb)
    }

    function CT(bb) {
      let {
        seconds: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)();
      return (0, mT.jsx)(hT, {
        title: Ub("buildAFactory2Game:recipesCuts", {
          seconds: ab
        }),
        count: 1,
        children: (0, mT.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, mT.jsx)(WT, {
            item: "Maple Sapling",
            amount: 1
          }), (0, mT.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mT.jsx)(WT, {
            item: "Maple Log",
            amount: 1
          }), (0, mT.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ub("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function VT(bb) {
      let {
        fertilised: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)();
      return (0, mT.jsxs)(hT, {
        title: Ub("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, mT.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, mT.jsx)(WT, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, mT.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mT.jsx)(WT, {
            item: "Wheat",
            amount: 1
          }), (0, mT.jsx)(WT, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, mT.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ub("buildAFactory2Game:recipeField")
          })]
        }), (0, mT.jsxs)("li", {
          className: iM()("Baf2Recipe", {
            InUse: ab
          }),
          children: [(0, mT.jsx)(WT, {
            item: "Fertiliser",
            amount: 1
          }), (0, mT.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ub("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function OT(bb) {
      let {
        tier: ab,
        seconds: Ub
      } = bb;
      const {
        t: Ab
      } = (0, NM.A)(), Mb = function(bb) {
        return bb >= 5 ? ia : xa
      }(ab);
      return (0, mT.jsx)(hT, {
        title: Ab("buildAFactory2Game:recipesBringsUp", {
          seconds: Ub
        }),
        count: Mb.length,
        children: Mb.map((bb => {
          let {
            item: ab,
            chance: Ub
          } = bb;
          return (0, mT.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, mT.jsx)(WT, {
              item: ab,
              amount: 1
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeName",
              children: AT(Ab, ab)
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Ab("buildAFactory2Game:recipeChance", {
                percent: NT(Ub)
              })
            })]
          }, ab)
        }))
      })
    }

    function cT(bb) {
      let {
        tier: ab,
        seconds: Ub,
        noSeeds: Ab
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)(), Tb = SM(), Eb = jT(ab, Ab ? gT : void 0), Yb = Ab && jT(ab).length > Eb.length, Bb = vT(ab);
      return (0, mT.jsxs)(hT, {
        title: Mb("buildAFactory2Game:recipesRecycles", {
          seconds: Ub
        }),
        count: Eb.length,
        children: [Eb.map((bb => {
          let {
            find: ab,
            chance: Ub
          } = bb;
          return (0, mT.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Tb.has(ab.item) && (0, mT.jsx)(FT, {}), (0, mT.jsx)(WT, {
              item: ab.item,
              amount: ab.amount
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeName",
              children: AT(Mb, ab.item)
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Mb("buildAFactory2Game:recipeChance", {
                percent: NT(Ub)
              })
            })]
          }, ab.item)
        })), Yb && (0, mT.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mT.jsx)("span", {
            className: "Baf2RecipeName",
            children: Mb("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Bb && (0, mT.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mT.jsx)("span", {
            className: "Baf2RecipeName",
            children: Mb("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function JT(bb) {
      let {
        tier: ab,
        seconds: Ub
      } = bb;
      const {
        t: Ab
      } = (0, NM.A)(), Mb = Object.entries(ET).filter((bb => {
        let [, {
          item: Ub
        }] = bb;
        return tT(rT(Ub), ab, oT(Ub))
      }));
      return (0, mT.jsx)(hT, {
        title: Ab("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: Ub
        }),
        count: Mb.length,
        children: Mb.map((bb => {
          let [ab, {
            item: Ub,
            amount: Mb
          }] = bb;
          return (0, mT.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, mT.jsx)(WT, {
              item: ab,
              amount: 1
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mT.jsx)(WT, {
              item: Ub,
              amount: Mb
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeName",
              children: AT(Ab, Ub)
            })]
          }, ab)
        }))
      })
    }

    function nT(bb) {
      let {
        tier: ab,
        seconds: Ub
      } = bb;
      const {
        t: Ab
      } = (0, NM.A)(), Mb = SM(), Tb = wT(Object.entries(EU).filter((bb => {
        let [Ub, Ab] = bb;
        return tT(KT(Ub, Ab), ab, oT(Ab))
      })), (bb => {
        let [ab, Ub] = bb;
        return KT(ab, Ub)
      }));
      return (0, mT.jsx)(hT, {
        title: Ab("buildAFactory2Game:recipesDigs", {
          seconds: Ub
        }),
        count: Tb.length,
        children: Tb.map((bb => {
          let [Ub, Tb] = bb;
          const Eb = KT(Ub, Tb),
            Yb = Eb > ab ? Eb : null,
            Bb = YU[Ub],
            eb = null === Yb && Mb.has(Tb);
          return (0, mT.jsxs)("li", {
            className: iM()("Baf2Recipe", {
              Locked: null !== Yb,
              Far: pT(Yb, ab)
            }),
            children: [eb && (0, mT.jsx)(FT, {}), (0, mT.jsx)(WT, {
              item: Ub,
              amount: 1
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mT.jsx)(WT, {
              item: Tb,
              amount: 1
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeName",
              children: AT(Ab, Tb)
            }), void 0 !== Bb && (0, mT.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Ab("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Bb)
              })
            }), null !== Yb && (0, mT.jsx)(IT, {
              tier: Yb
            })]
          }, Ub)
        }))
      })
    }

    function ST(bb) {
      var ab;
      let {
        def: Ub,
        seconds: Ab
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)();
      return (0, mT.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mT.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (ab = Ub.fuels) && void 0 !== ab ? ab : []).map((bb => (0, mT.jsx)(WT, {
            item: bb,
            amount: 1
          }, bb))), (0, mT.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mT.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mT.jsx)(WM.e, {
              name: "bolt"
            }), Mb("buildAFactory2Game:recipePower", {
              power: Jb(Ub.powerMade),
              seconds: Ab
            })]
          })]
        })
      })
    }

    function bE(bb) {
      let {
        def: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)();
      return (0, mT.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mT.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mT.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mT.jsx)(WM.e, {
              name: "bolt"
            }), Ub("buildAFactory2Game:recipeMixer", {
              cryo: yT((0, nb.y)(ab, ab.cryoMade), "")
            })]
          })
        })
      })
    }

    function aE(bb) {
      let {
        def: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)();
      return (0, mT.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mT.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mT.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mT.jsx)(WM.e, {
              name: "bolt"
            }), Ub("buildAFactory2Game:recipeCondenser", {
              power: yT((0, nb.y)(ab, ab.powerPerOp), ""),
              water: yT((0, nb.y)(ab, ab.fluidMade), "")
            })]
          })
        })
      })
    }

    function UE(bb) {
      let {
        kind: ab,
        def: Ub,
        input: Ab,
        tier: Mb,
        noSeeds: Tb = !1
      } = bb;
      const Eb = String(Ub.opMs / 1e3);
      return UU(Ub) ? (0, mT.jsx)(CT, {
        seconds: Eb
      }) : Ub.field ? (0, mT.jsx)(VT, {
        fertilised: null !== Ab
      }) : Ub.table ? (0, mT.jsx)(OT, {
        tier: Mb,
        seconds: Eb
      }) : Ub.recycles ? (0, mT.jsxs)(mT.Fragment, {
        children: [(0, mT.jsx)(cT, {
          tier: Mb,
          seconds: Eb,
          noSeeds: Tb
        }), (0, mT.jsx)(JT, {
          tier: Mb,
          seconds: Eb
        })]
      }) : aU(Ub) ? (0, mT.jsx)(nT, {
        tier: Mb,
        seconds: Eb
      }) : void 0 !== Ub.fluidMade ? (0, mT.jsx)(aE, {
        def: Ub
      }) : void 0 !== Ub.cryoMade ? (0, mT.jsx)(bE, {
        def: Ub
      }) : void 0 !== Ub.powerMade ? (0, mT.jsx)(ST, {
        def: Ub,
        seconds: Eb
      }) : (0, mT.jsx)(AE, {
        kind: ab,
        input: Ab,
        tier: Mb,
        seconds: Eb
      })
    }

    function AE(bb) {
      let {
        kind: ab,
        input: Ub,
        tier: Ab,
        seconds: Mb
      } = bb;
      const {
        t: Tb
      } = (0, NM.A)(), Eb = SM(), Yb = wT(function(bb) {
        const ab = new Map;
        for (const Mb of bb) {
          var Ub, Ab;
          const bb = [Mb.output, Mb.outputAmount, Mb.inputAmount, null === (Ub = Mb.bonus) || void 0 === Ub ? void 0 : Ub.item, null === (Ab = Mb.bonus) || void 0 === Ab ? void 0 : Ab.chance].join("|"),
            Tb = ab.get(bb);
          Tb ? Tb.inputs.push(Mb.input) : ab.set(bb, {
            inputs: [Mb.input],
            inputAmount: Mb.inputAmount,
            output: Mb.output,
            outputAmount: Mb.outputAmount,
            bonus: Mb.bonus
          })
        }
        return [...ab.values()]
      }(lT(ab, Ab).filter(vU)), (bb => rT(bb.output))).filter((bb => tT(rT(bb.output), Ab, oT(bb.output))));
      return (0, mT.jsx)(hT, {
        title: Tb("buildAFactory2Game:recipesEach", {
          seconds: Mb
        }),
        count: Yb.length,
        children: Yb.map((bb => {
          const ab = null !== Ub && bb.inputs.includes(Ub),
            Mb = bb.inputs.length > 3 ? [ab ? Ub : bb.inputs[0]] : bb.inputs,
            Yb = rT(bb.output) > Ab ? rT(bb.output) : null,
            Bb = null === Yb && Eb.has(bb.output);
          return (0, mT.jsxs)("li", {
            className: iM()("Baf2Recipe", {
              InUse: ab,
              Locked: null !== Yb,
              Far: pT(Yb, Ab)
            }),
            children: [Bb && (0, mT.jsx)(FT, {}), Mb.map(((ab, Ub) => (0, mT.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [Ub > 0 && (0, mT.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, mT.jsx)(WT, {
                item: ab,
                amount: bb.inputAmount
              })]
            }, ab))), Mb.length < bb.inputs.length && (0, mT.jsx)(HT, {
              label: Tb("buildAFactory2Game:recipeMore", {
                count: String(bb.inputs.length - Mb.length)
              }),
              names: bb.inputs.filter((bb => !Mb.includes(bb))).map((bb => AT(Tb, bb)))
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mT.jsx)(WT, {
              item: bb.output,
              amount: bb.outputAmount
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeName",
              children: AT(Tb, bb.output)
            }), bb.bonus && (0, mT.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Tb("buildAFactory2Game:recipeBonus", {
                percent: NT(bb.bonus.chance)
              }), (0, mT.jsx)(WT, {
                item: bb.bonus.item,
                amount: 1
              })]
            }), null !== Yb && (0, mT.jsx)(IT, {
              tier: Yb
            })]
          }, `${bb.output}|${bb.inputs[0]}`)
        }))
      })
    }

    function ME(bb) {
      let {
        taught: ab,
        tier: Ub
      } = bb;
      const {
        t: Ab
      } = (0, NM.A)(), Mb = SM(), Tb = wT(Object.values(Oa), (bb => bb.tier)).filter((bb => tT(bb.tier, Ub)));
      return (0, mT.jsx)(hT, {
        title: Ab("buildAFactory2Game:benchCanMake"),
        count: Tb.length,
        startOpen: !1,
        children: Tb.map((bb => {
          const Tb = bb.tier > Ub,
            Eb = !Tb && Mb.has(bb.output);
          return (0, mT.jsxs)("li", {
            className: iM()("Baf2Recipe", {
              InUse: bb.output === ab,
              Locked: Tb,
              Far: pT(Tb ? bb.tier : null, Ub)
            }),
            children: [Eb && (0, mT.jsx)(FT, {}), (0, mT.jsx)(WT, {
              item: bb.output,
              amount: bb.outputAmount
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeName",
              children: AT(Ab, bb.output)
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), bb.inputs.map((bb => (0, mT.jsx)(WT, {
              item: bb.item,
              amount: bb.amount
            }, bb.item))), Tb && (0, mT.jsx)(IT, {
              tier: bb.tier
            })]
          }, bb.output)
        }))
      })
    }
    var TE, EE, YE, BE, eE;
    const vE = Ga.Generator,
      LE = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      PE = 1e3 * (null !== (TE = vE.powerMade) && void 0 !== TE ? TE : 0) / vE.opMs,
      XE = Math.min(...(null !== (EE = vE.fuels) && void 0 !== EE ? EE : []).map((bb => TU[bb]))) / 1e3,
      jE = Ga["Volt Engine"],
      RE = 1e3 * (null !== (YE = jE.powerMade) && void 0 !== YE ? YE : 0) / jE.opMs,
      kE = TU[null !== (BE = null === (eE = jE.fuels) || void 0 === eE ? void 0 : eE[0]) && void 0 !== BE ? BE : ""] / 1e3;

    function yE(bb) {
      let {
        item: ab,
        label: Ub,
        value: Ab,
        note: Mb,
        dim: Tb
      } = bb;
      return (0, mT.jsxs)("li", {
        className: iM()("Baf2PowerRow", {
          Dim: Tb
        }),
        children: [(0, mT.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, mT.jsx)(HM.c, {
            itemName: ab,
            amount: 0
          })
        }), (0, mT.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, mT.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: Ub
          }), Mb && (0, mT.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Mb
          })]
        }), (0, mT.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Ab
        })]
      })
    }

    function ZE(bb, ab, Ub, Ab) {
      var Mb;
      const Tb = void 0 === Ab ? Ga[bb] : function(bb, ab) {
          if (null === ab) return bb;
          let Ub = Cb.get(ab);
          return Ub || (Ub = {
            ...bb,
            powerPerOp: gb(bb, ab),
            farmMob: ab
          }, Cb.set(ab, Ub)), Ub
        }(Ga[bb], Ab),
        Eb = ab && Tb.couplable ? ta(Tb, Ub) : Tb;
      return 1e3 * (null !== (Mb = Eb.powerPerOp) && void 0 !== Mb ? Mb : 0) / Eb.opMs
    }

    function DE(bb) {
      var ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb;
      let {
        message: eb
      } = bb;
      const {
        t: vb
      } = (0, NM.A)(), Lb = (bb, ab) => vb("buildAFactory2Game:powerPerSecond", {
        rate: yT(bb, ab)
      }), [Pb, Xb] = eb.baf2PowerGenerators, jb = eb.baf2PowerGeneratorFuel, Rb = eb.baf2PowerSunPanels, kb = null !== (ab = eb.baf2PowerSunShare) && void 0 !== ab ? ab : 1, yb = eb.baf2PowerVaults, Zb = eb.baf2PowerUsers, [Db, zb] = null !== (Ub = eb.baf2PowerEngines) && void 0 !== Ub ? Ub : [0, 0], xb = null !== (Ab = eb.baf2PowerEngineCells) && void 0 !== Ab ? Ab : 0, ib = null !== (Mb = eb.baf2PowerPads) && void 0 !== Mb ? Mb : 0, fb = null !== (Tb = eb.baf2PowerCharge) && void 0 !== Tb ? Tb : 0, [mb, pb] = null !== (Eb = eb.baf2PowerReactors) && void 0 !== Eb ? Eb : [0, 0], [Nb, Wb] = null !== (Yb = eb.baf2PowerBatteries) && void 0 !== Yb ? Yb : [0, 0];
      let Hb = vb("buildAFactory2Game:powerEngineCells", {
        amount: String(xb)
      });
      xb > 0 && zb > 0 && (Hb = vb("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(xb),
        time: zT(vb, xb * kE / zb)
      }));
      let Ib = vb("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(jb)
      });
      jb > 0 && Xb > 0 && (Ib = vb("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(jb),
        time: zT(vb, jb * XE / Xb)
      }));
      const db = Pb + Db + Rb + mb;
      return (0, mT.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, mT.jsxs)("section", {
          children: [(0, mT.jsxs)("h3", {
            children: [vb("buildAFactory2Game:powerMaking"), (0, mT.jsx)("span", {
              children: Lb(eb.baf2PowerMadePerS, "+")
            })]
          }), (0, mT.jsxs)("ul", {
            children: [0 === db && (0, mT.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: vb("buildAFactory2Game:powerNoMakers")
            }), Pb > 0 && (0, mT.jsx)(yE, {
              item: "Generator",
              label: `${AT(vb,"Generator")} \xd7${Pb}`,
              note: `${vb("buildAFactory2Game:powerRunning",{amount:String(Xb)})} \xb7 ${Ib}`,
              value: Lb(Xb * PE, "+"),
              dim: 0 === Xb
            }), Db > 0 && (0, mT.jsx)(yE, {
              item: "Volt Engine",
              label: `${AT(vb,"Volt Engine")} \xd7${Db}`,
              note: `${vb("buildAFactory2Game:powerRunning",{amount:String(zb)})} \xb7 ${Hb}`,
              value: Lb(zb * RE, "+"),
              dim: 0 === zb
            }), Rb > 0 && (0, mT.jsx)(yE, {
              item: "Solar Panel",
              label: `${AT(vb,"Solar Panel")} \xd7${Rb}`,
              note: vb(kb < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Lb(4 * Rb * kb, "+")
            }), mb > 0 && (0, mT.jsx)(yE, {
              item: "Reactor Frame",
              label: `${vb("buildAFactory2Game:powerReactors")} \xd7${mb}`,
              note: vb("buildAFactory2Game:powerRunning", {
                amount: String(pb)
              }),
              value: Lb(null !== (Bb = eb.baf2PowerReactorPerS) && void 0 !== Bb ? Bb : 0, "+"),
              dim: 0 === pb
            })]
          })]
        }), (0, mT.jsxs)("section", {
          children: [(0, mT.jsxs)("h3", {
            children: [vb("buildAFactory2Game:powerStorage"), (0, mT.jsx)("span", {
              children: Jb(eb.baf2PowerCap)
            })]
          }), (yb > 0 || Nb > 0) && (0, mT.jsxs)("ul", {
            children: [yb > 0 && (0, mT.jsx)(yE, {
              item: "Charge Vault",
              label: `${AT(vb,"Charge Vault")} \xd7${yb}`,
              value: `+${Jb(8e3*yb)}`
            }), Nb > 0 && (0, mT.jsx)(yE, {
              item: "Battery Cell",
              label: `${vb("buildAFactory2Game:powerBatteries")} \xd7${Nb}`,
              value: `+${Jb(Wb)}`
            })]
          })]
        }), (0, mT.jsxs)("section", {
          children: [(0, mT.jsxs)("h3", {
            children: [vb("buildAFactory2Game:powerUsing"), (0, mT.jsx)("span", {
              children: Lb(eb.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, mT.jsxs)("ul", {
            children: [0 === Zb.length && 0 === ib && 0 === fb && (0, mT.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: vb("buildAFactory2Game:powerNoUsers")
            }), Zb.map((bb => {
              let [ab, Ub, Ab, Mb, Tb = 1, Eb] = bb, Yb = Ub ? vb(LE[Tb - 1], {
                name: AT(vb, ab)
              }) : AT(vb, ab);
              return void 0 !== Eb && (Yb = vb("buildAFactory2Game:powerFarmName", {
                name: Yb,
                mob: vb(tb(Eb))
              })), (0, mT.jsx)(yE, {
                item: ab,
                label: `${Yb} \xd7${Ab}`,
                note: vb("buildAFactory2Game:powerRunning", {
                  amount: String(Mb)
                }),
                value: Mb > 0 ? Lb(Mb * ZE(ab, Ub, Tb, Eb), "\u2212") : vb("buildAFactory2Game:powerIdle"),
                dim: 0 === Mb
              }, `${ab}|${Ub}|${Tb}|${Eb}`)
            })), ib > 0 && (0, mT.jsx)(yE, {
              item: "Charging Pad",
              label: `${AT(vb,"Charging Pad")} \xd7${ib}`,
              value: vb("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), fb > 0 && (0, mT.jsx)(yE, {
              item: "Homestead Core",
              label: vb("buildAFactory2Game:powerCharge"),
              value: Lb(fb, "\u2212")
            }), eb.baf2PowerStarved > 0 && (0, mT.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, mT.jsx)(WM.e, {
                name: "triangle-exclamation"
              }), vb("buildAFactory2Game:powerStarved", {
                amount: String(eb.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var zE = Ub(4211),
      xE = Ub(1352);
    class iE {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(bb) {
        this.message = bb;
        for (const ab of this.listeners) ab()
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
    class fE extends iE {}

    function mE(bb, ab) {
      const Ub = () => {
          const Ub = bb.get();
          if (!Ub || !ab) return Ub;
          const [Ab, Mb, Tb] = Ub.baf2PowerAt;
          return Ab === ab[0] && Mb === ab[1] && Tb === ab[2] ? Ub : null
        },
        [Mb, Tb] = (0, Ab.useState)(Ub);
      return (0, Ab.useEffect)((() => (Tb(Ub()), bb.subscribe((() => {
        Tb(Ub())
      })))), [bb, ...null !== ab && void 0 !== ab ? ab : []]), Mb
    }

    function pE(bb) {
      return {
        stored: bb.baf2PowerStored,
        cap: bb.baf2PowerCap,
        madePerS: bb.baf2PowerMadePerS,
        usedPerS: bb.baf2PowerUsedPerS
      }
    }

    function NE(bb) {
      let {
        stored: ab,
        cap: Ub
      } = bb;
      return (0, mT.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, mT.jsx)("div", {
          style: {
            width: `${Math.min(100,100*ab/Math.max(1,Ub))}%`
          }
        })
      })
    }

    function WE(bb) {
      let {
        figures: ab,
        labelled: Ub = !1
      } = bb;
      const {
        t: Ab
      } = (0, NM.A)(), Mb = ab.madePerS - ab.usedPerS, {
        text: Tb,
        draining: Eb
      } = function(bb, ab) {
        let {
          stored: Ub,
          cap: Ab,
          madePerS: Mb,
          usedPerS: Tb
        } = ab;
        const Eb = Mb - Tb;
        return Ub >= Ab ? {
          text: bb("buildAFactory2Game:powerFull"),
          draining: !1
        } : Eb > .05 ? {
          text: bb("buildAFactory2Game:powerFullIn", {
            time: zT(bb, (Ab - Ub) / Eb)
          }),
          draining: !1
        } : Eb < -.05 ? {
          text: bb("buildAFactory2Game:powerEmptyIn", {
            time: zT(bb, Ub / -Eb)
          }),
          draining: !0
        } : {
          text: bb("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Ab, ab);
      return (0, mT.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, mT.jsx)(NE, {
          stored: ab.stored,
          cap: ab.cap
        }), (0, mT.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, mT.jsx)("span", {
            children: Ab(Ub ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: Jb(ab.stored),
              cap: Jb(ab.cap)
            })
          }), (0, mT.jsxs)("span", {
            className: iM()("Baf2PowerNet", {
              Draining: Eb
            }),
            children: [Ab("buildAFactory2Game:powerPerSecond", {
              rate: yT(Math.abs(Mb), Mb < 0 ? "\u2212" : "+")
            }), " \xb7 ", Tb]
          })]
        })]
      })
    }

    function HE(bb) {
      let {
        stored: ab,
        cap: Ub,
        rates: Ab
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)();
      return Ab ? (0, mT.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, mT.jsx)(WE, {
          figures: {
            stored: ab,
            cap: Ub,
            madePerS: Ab[0],
            usedPerS: Ab[1]
          },
          labelled: !0
        })
      }) : (0, mT.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, mT.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, mT.jsx)(NE, {
            stored: ab,
            cap: Ub
          }), (0, mT.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, mT.jsx)("span", {
              children: Mb("buildAFactory2Game:powerStoredLabelled", {
                stored: Jb(ab),
                cap: Jb(Ub)
              })
            })
          })]
        })
      })
    }

    function IE(bb) {
      let {
        store: ab,
        close: Ub
      } = bb;
      const {
        t: Ab
      } = (0, NM.A)(), Mb = mE(ab);
      return (0, mT.jsx)(zE.d, {
        close: Ub,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mT.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsxs)("div", {
              children: [(0, mT.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Ab("buildAFactory2Game:powerTitle")
              }), (0, mT.jsx)("p", {
                children: Ab("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, mT.jsx)(xE.k, {
              onClick: Ub
            })]
          }), Mb && (0, mT.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, mT.jsx)(WE, {
              figures: pE(Mb)
            }), (0, mT.jsx)(DE, {
              message: Mb
            })]
          })]
        })
      })
    }

    function dE(bb) {
      var ab;
      let {
        kind: Ub,
        def: Mb,
        uT: Tb,
        power: Eb,
        stored: Yb,
        cap: Bb
      } = bb;
      const {
        t: eb
      } = (0, NM.A)(), vb = mE(Eb, Tb), [Lb, Pb] = (0, Ab.useState)(!1);
      return (0, mT.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, mT.jsx)(UE, {
          kind: Ub,
          def: Mb,
          input: null,
          tier: null !== (ab = null === vb || void 0 === vb ? void 0 : vb.baf2PowerTier) && void 0 !== ab ? ab : 1
        }), (0, mT.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: eb("buildAFactory2Game:powerTitle")
        }), vb && (0, mT.jsx)(WE, {
          figures: pE(vb)
        }), !vb && (0, mT.jsx)(HE, {
          stored: Yb,
          cap: Bb,
          rates: null
        }), vb && (0, mT.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Pb(!Lb)
          },
          "aria-expanded": Lb,
          children: eb(Lb ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), vb && Lb && (0, mT.jsx)(DE, {
          message: vb
        })]
      })
    }
    const FE = 2500,
      hE = 17500,
      GE = `${xb} `;
    const QE = ["plan", "throttle"];

    function qE(bb) {
      if (bb.startsWith(`${Na} `)) return bb.slice(0, bb.lastIndexOf(" "));
      const ab = bb.split(" ");
      return ab[0] === va && QE.includes(ab[4]) ? ab.slice(0, 5).join(" ") : null
    }
    class uE {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = bb, this.now = ab, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.nAb = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = ab()
      }
      enqueue(bb) {
        this.queue(bb, this.nextTicket());
        const ab = this.nAb + this.pending.length;
        return this.flush(), ab
      }
      track(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ub = this.nextTicket();
        if (!ab.urgent) return this.queue(bb, Ub), this.flush(), Ub;
        const {
          supersedes: Ab
        } = ab;
        for (let Tb = this.pending.length - 1; Tb >= this.urgent; Tb--) {
          const ab = this.pending[Tb];
          (ab.command === bb || null !== Ab && void 0 !== Ab && Ab(ab.command)) && (this.pending.splice(Tb, 1), this.markLeft(ab.tickets))
        }
        const Mb = this.pending.findIndex((ab => {
          let {
            command: Ub
          } = ab;
          return Ub === bb
        }));
        return -1 !== Mb ? this.pending[Mb].tickets.push(Ub) : (this.pending.splice(this.urgent, 0, {
          command: bb,
          tickets: [Ub]
        }), this.urgent += 1), this.flush(), Ub
      }
      leftAt(bb) {
        const ab = this.leftTimes.get(bb);
        return void 0 !== ab ? ab : this.pending.some((ab => {
          let {
            tickets: Ub
          } = ab;
          return Ub.includes(bb)
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
        var ab;
        return (null === (ab = this.pending.at(-1)) || void 0 === ab ? void 0 : ab.command) === bb
      }
      sent() {
        return this.nAb
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
        const ab = this.now();
        for (const Ub of bb) this.leftTimes.set(Ub, ab);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(bb, ab) {
        const Ub = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === Ub || void 0 === Ub ? void 0 : Ub.command) === bb) return void(! function(bb) {
          return bb === ib || bb.startsWith(`${zb} `) || bb.startsWith(`${Kb} `)
        }(bb) ? Ub.tickets.push(ab) : (this.pending.pop(), this.markLeft([...Ub.tickets, ab])));
        const Ab = void 0 === Ub ? null : ea(Ub.command, bb);
        if (null !== Ab && void 0 !== Ub) return Ub.command = Ab, void Ub.tickets.push(ab);
        const Mb = qE(bb);
        if (null !== Mb && void 0 !== Ub && qE(Ub.command) === Mb) return Ub.command = bb, void Ub.tickets.push(ab);
        if (null !== Ub && void 0 !== Ub && Ub.command.startsWith(GE) && bb.startsWith(GE)) {
          const Ab = bb.slice(GE.length);
          if (Ub.command.slice(GE.length).split(",").includes(Ab)) return void Ub.tickets.push(ab);
          const Mb = `${Ub.command},${Ab}`;
          if (Mb.length <= 119) return Ub.command = Mb, void Ub.tickets.push(ab)
        }
        this.pending.push({
          command: bb,
          tickets: [ab]
        })
      }
      flush() {
        const bb = this.now();
        for (this.tokens = Math.min(5, this.tokens + (bb - this.refilledAt) / FE), this.refilledAt = bb; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.nAb += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: bb,
            tickets: ab
          } = this.pending.shift();
          this.markLeft(ab), this.send(bb)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * FE)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class rE {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new uE(bb, ab)
      }
      send(bb) {
        return this.queue.enqueue(bb)
      }
      sent() {
        return this.queue.sent()
      }
      track(bb, ab) {
        return this.queue.track(bb, ab)
      }
      leftAt(bb) {
        return this.queue.leftAt(bb)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(bb) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = ab, this.send(bb), this.islandEdits.count
      }
      syncIslandEdits(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: Ub
        } = this, Ab = ab - Ub.lastAtMs < hE;
        Ub.count = Ab ? Math.max(Ub.count, bb) : bb
      }
      clear() {
        this.queue.clear()
      }
    }
    const KE = (0, Ab.createContext)(null);

    function oE() {
      const bb = (0, Ab.useContext)(KE);
      if (!bb) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return bb
    }

    function lE(bb, ab) {
      return null !== ab && void 0 !== ab ? ab : 1 === bb
    }

    function tE(bb, ab) {
      return bb.every((bb => {
        var Ub;
        let [Ab, , Mb] = bb;
        return !lE(Mb, null === (Ub = ab.get(Ab)) || void 0 === Ub ? void 0 : Ub.RX)
      }))
    }

    function wE(bb, ab, Ub) {
      if (0 === bb.size) return bb;
      const Ab = new Map(bb);
      for (const [Mb, Tb] of bb) {
        const bb = ab.find((bb => {
          let [ab] = bb;
          return ab === Mb
        }));
        (!bb || Tb.RX === (1 === bb[2]) || Tb.atMs < Ub) && Ab.delete(Mb)
      }
      return Ab
    }

    function sE(bb) {
      var ab;
      let {
        uT: Ub,
        input: Mb,
        drops: Tb,
        seconds: Eb
      } = bb;
      const {
        t: Yb
      } = (0, NM.A)(), Bb = oE(), [eb, vb] = (0, Ab.useState)(new Map);
      (0, Ab.useEffect)((() => {
        Tb && vb((bb => wE(bb, Tb, Date.now() - hE)))
      }), [Tb]), (0, Ab.useEffect)((() => {
        const bb = function(bb, ab) {
          let Ub = null;
          for (const {
              atMs: Ab
            }
            of bb.values()) Ub = null === Ub ? Ab : Math.min(Ub, Ab);
          return null === Ub ? null : Ub + ab
        }(eb, hE);
        if (null === bb || !Tb) return;
        const ab = setTimeout((() => {
          vb((bb => wE(bb, Tb, Date.now() - hE)))
        }), Math.max(0, bb - Date.now()) + 1);
        return () => {
          clearTimeout(ab)
        }
      }), [eb, Tb]);
      const Lb = wb(Mb),
        Pb = null !== Lb && null !== Tb && tE(Tb, eb),
        Xb = function(bb, ab, Ub) {
          return null === bb || null === ab || tE(ab, Ub) ? 0 : rb[qb[bb]]
        }(Lb, Tb, eb);
      return (0, mT.jsxs)(hT, {
        title: Yb("buildAFactory2Game:farmDropsTitle", {
          seconds: Eb
        }),
        count: null !== (ab = null === Tb || void 0 === Tb ? void 0 : Tb.length) && void 0 !== ab ? ab : 0,
        children: [Xb > 0 && (0, mT.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: Yb("buildAFactory2Game:farmDropsPower", {
            power: String(Xb)
          })
        }), (null === Lb || !Tb) && (0, mT.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: Yb("buildAFactory2Game:farmDropsEmpty")
        }), Pb && (0, mT.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: Yb("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Lb && (null === Tb || void 0 === Tb ? void 0 : Tb.map((bb => {
          var ab;
          let [Ab, Mb, Tb] = bb;
          const Eb = Mb < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Lb = lE(Tb, null === (ab = eb.get(Ab)) || void 0 === ab ? void 0 : ab.RX);
          return (0, mT.jsxs)("li", {
            className: iM()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Lb
            }),
            children: [(0, mT.jsx)(WT, {
              item: Ab,
              amount: 1
            }), (0, mT.jsx)("span", {
              className: "Baf2RecipeName",
              children: AT(Yb, Ab)
            }), (0, mT.jsx)("span", {
              className: "Baf2FarmRate",
              children: Yb(Eb, {
                amount: String(Mb)
              })
            }), (0, mT.jsx)("button", {
              type: "button",
              className: iM()("Baf2FarmToggle SmallTextBold", {
                Kept: Lb
              }),
              "aria-pressed": Lb,
              onClick: () => {
                vb(new Map(eb).set(Ab, {
                  RX: !Lb,
                  atMs: Date.now()
                })), Bb.send(function(bb, ab, Ub, Ab) {
                  return `${Kb} ${bb} ${ab} ${Ub} ${Ab}`
                }(Ub[0], Ub[1], Ub[2], Ab))
              },
              children: Yb(Lb ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Ab)
        })))]
      })
    }
    var gE;
    const CE = String(null !== (gE = Ga.Synthesizer.waterPerOp) && void 0 !== gE ? gE : 0);

    function VE(bb) {
      let {
        uT: ab,
        taught: Ub
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)(), Tb = oE(), [Eb, Yb] = (0, Ab.useState)(null);
      (0, Ab.useEffect)((() => {
        null !== Eb && Ub === Eb && Yb(null)
      }), [Eb, Ub]);
      const Bb = null !== Eb && void 0 !== Eb ? Eb : Ub;
      let eb = Mb("buildAFactory2Game:synthPick");
      return null !== Bb && (eb = Mb("buildAFactory2Game:synthGrows", {
        name: AT(Mb, Bb),
        input: AT(Mb, fa),
        water: CE
      })), (0, mT.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, mT.jsx)("div", {
          className: iM()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Bb
          }),
          children: eb
        }), (0, mT.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: ma.map(((bb, Ub) => {
            const Ab = AT(Mb, bb),
              Eb = bb === Bb;
            return (0, mT.jsx)("li", {
              children: (0, mT.jsx)("button", {
                type: "button",
                className: iM()("Baf2SynthTile", {
                  Selected: Eb
                }),
                title: Ab,
                "aria-label": Ab,
                "aria-pressed": Eb,
                onClick: () => {
                  Eb || (Yb(bb), Tb.send(`${Na} ${ab[0]} ${ab[1]} ${ab[2]} ${Ub}`))
                },
                children: (0, mT.jsx)(HM.c, {
                  itemName: bb,
                  amount: 0
                })
              })
            }, bb)
          }))
        })]
      })
    }
    const OE = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function cE(bb) {
      let {
        kind: ab,
        tier: Ub,
        coupled: Ab,
        level: Mb,
        slot: Tb
      } = bb;
      const {
        t: Eb
      } = (0, NM.A)(), Bb = cb(qa);
      if (!Ab && null !== Ub && Ub < Bb) return (0, mT.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, mT.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, mT.jsx)(WM.e, {
            name: "lock"
          })
        }), (0, mT.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Eb("buildAFactory2Game:upgradeLocked")
        }), (0, mT.jsx)("span", {
          className: "Baf2TierTag",
          children: Eb("buildAFactory2Game:tierTag", {
            tier: String(Bb)
          })
        })]
      });
      const eb = function(bb, ab) {
          if (Yb() && "Crusher" !== bb && null !== ab) {
            if (JE(ra, ab)) return {
              item: ra,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (JE(ua, ab)) return {
              item: ua,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: qa,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(ab, Ub),
        vb = Eb(Ab ? OE[Mb - 1] : eb.emptyKey),
        Lb = null !== Ub ? function(bb, ab, Ub, Ab) {
          if (!Yb() || !Ub || "Crusher" === bb || ab < 10) return null;
          const Mb = cb(ra);
          if (Ab < 3 && Mb > 1 && (2 === Ab || ab >= Mb)) return {
            tier: Mb,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Tb = cb(ua);
          if (1 === Ab && Tb > 1) return {
            tier: Tb,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(ab, Ub, Ab, Mb) : null;
      return (0, mT.jsxs)("div", {
        className: iM()("Baf2UpgradeSocket", {
          Fitted: Ab
        }),
        children: [(0, mT.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Ab && Tb, !Ab && (0, mT.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, mT.jsx)(HM.c, {
              itemName: eb.item,
              amount: 0
            })
          })]
        }), (0, mT.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, mT.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Eb("buildAFactory2Game:upgradeTitle")
          }), (0, mT.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: vb
          }), Ab && Mb >= 2 && "Crusher" === ab && (0, mT.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Eb("buildAFactory2Game:couplerCrusherHint")
          }), Lb && null !== Ub && Ub < Lb.tier && (0, mT.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, mT.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, mT.jsx)(WM.e, {
                name: "lock"
              })
            }), Eb(Lb.lockedKey), (0, mT.jsx)("span", {
              className: "Baf2TierTag",
              children: Eb("buildAFactory2Game:tierTag", {
                tier: String(Lb.tier)
              })
            })]
          }), Lb && null !== Ub && Ub >= Lb.tier && (0, mT.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Eb(Lb.nextKey)
          })]
        })]
      })
    }

    function JE(bb, ab) {
      const Ub = cb(bb);
      return Ub > 1 && ab >= Ub
    }
    var nE = Ub(36359);
    const SE = (0, nb.y)(Ga.Condenser, Ga.Condenser.fluidMade),
      bY = .05;
    class aY extends iE {}

    function UY(bb) {
      return yT(bb, "")
    }

    function AY(bb, ab, Ub) {
      return bb(ab ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: Ub
      })
    }

    function MY(bb, ab, Ub, Ab) {
      return Ub <= bY && Ab <= bY ? null : Ab <= bY || Ub <= bY ? AY(bb, ab, Ab <= bY ? yT(Ub, "+") : yT(Ab, "\u2212")) : bb(ab ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: UY(Ub),
        used: UY(Ab)
      })
    }

    function TY(bb, ab) {
      return Math.min(100, 100 * bb / Math.max(1, ab))
    }

    function EY(bb) {
      let {
        stored: ab,
        cap: Ub,
        netPerS: Ab,
        rates: Mb,
        cryo: Tb
      } = bb;
      const {
        t: Eb
      } = (0, NM.A)(), Yb = function(bb, ab, Ub, Ab) {
        return Ub <= 0 ? bb("buildAFactory2Game:waterNoStorage") : ab >= Ub ? bb("buildAFactory2Game:powerFull") : Ab > bY ? bb("buildAFactory2Game:powerFullIn", {
          time: zT(bb, (Ub - ab) / Ab)
        }) : Ab < -.05 ? ab <= 0 ? bb("buildAFactory2Game:waterEmpty") : bb("buildAFactory2Game:powerEmptyIn", {
          time: zT(bb, ab / -Ab)
        }) : bb("buildAFactory2Game:powerSteady")
      }(Eb, ab, Ub, Ab), Bb = Ub > 0 && ab < Ub && Math.abs(Ab) <= bY, eb = Eb(Tb ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), vb = null !== Mb ? `${Mb} \xb7 ${Yb}` : Bb ? eb : `${eb} \xb7 ${Yb}`;
      return (0, mT.jsxs)(mT.Fragment, {
        children: [(0, mT.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, mT.jsx)("div", {
            style: {
              width: `${TY(ab,Ub)}%`
            }
          })
        }), (0, mT.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, mT.jsx)("span", {
            children: Ub > 0 && Eb("buildAFactory2Game:powerStored", {
              stored: (0, nb.H)(ab),
              cap: (0, nb.H)(Ub)
            })
          }), (0, mT.jsx)("span", {
            className: iM()("Baf2WaterNet", {
              Draining: Ab < -.05
            }),
            children: vb
          })]
        })]
      })
    }

    function YY(bb) {
      let {
        water: ab,
        at: Ub,
        side: Ab = null
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)(), Tb = oE(), [Eb, Yb, Bb] = ab;
      return (0, mT.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, mT.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, mT.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Mb(null === Ab ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Ab}`)
          }), (0, mT.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Tb.send(`${nb.u} ${Ub[0]} ${Ub[1]} ${Ub[2]}${"cryoOut"===Ab?" cryo":""}`)
            },
            children: Mb("buildAFactory2Game:waterDetails")
          })]
        }), (0, mT.jsx)(EY, {
          stored: Eb,
          cap: Yb,
          netPerS: Bb,
          rates: AY(Mb, "cryoOut" === Ab, yT(Math.abs(Bb), Bb < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Ab
        })]
      })
    }

    function BY(bb, ab) {
      var Ub, Ab, Mb;
      const Tb = !0 === ab.baf2WaterCryo,
        Eb = null !== (Ub = null === (Ab = ab.baf2WaterMakers.find((bb => bb[0] === (Tb ? nb.c : "Condenser")))) || void 0 === Ab ? void 0 : Ab[1]) && void 0 !== Ub ? Ub : 0,
        Yb = [],
        Bb = (ab, Ub, Ab) => {
          ab > 0 && Yb.push(bb(1 === ab ? Ub : Ab, {
            count: String(ab)
          }))
        };
      return Tb ? Bb(Eb, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Bb(Eb, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Bb(null !== (Mb = ab.baf2WaterPipes) && void 0 !== Mb ? Mb : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Bb(ab.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), Yb.join(" \xb7 ")
    }

    function eY(bb, ab) {
      if (!0 === ab.baf2WaterCryo) return function(bb, ab) {
        const Ub = Ga[nb.c];
        switch (ab.baf2WaterThis) {
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
            var Ab;
            const [Mb, Tb] = null !== (Ab = ab.baf2WaterThisRates) && void 0 !== Ab ? Ab : [(0, nb.y)(Ub, Ub.cryoMade), (0, nb.y)(Ub, Ub.powerPerOp)];
            return !0 === ab.baf2WaterDriven ? {
              text: bb("buildAFactory2Game:cryoThisMixerDriven", {
                rate: UY(Mb)
              }),
              bad: !1
            } : {
              text: bb("buildAFactory2Game:cryoThisMixer", {
                rate: UY(Mb),
                power: UY(Tb)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: bb("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(bb, ab);
      const Ub = !0 === ab.baf2WaterDriven,
        Ab = Ga.Condenser;
      switch (ab.baf2WaterThis) {
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
              tank: (0, nb.H)(nb.l),
              cap: (0, nb.H)(ab.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Mb;
          const [Tb, Eb] = null !== (Mb = ab.baf2WaterThisRates) && void 0 !== Mb ? Mb : [SE, (0, nb.y)(Ab, Ab.powerPerOp)];
          return Ub ? {
            text: bb("buildAFactory2Game:waterThisCondenserDriven", {
              rate: UY(Tb)
            }),
            bad: !1
          } : {
            text: bb("buildAFactory2Game:waterThisCondenser", {
              rate: UY(Tb),
              power: UY(Eb)
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

    function vY(bb, ab) {
      const Ub = ab.baf2WaterMakers.some((bb => !0 === bb[5]));
      if (!0 === ab.baf2WaterCryo) {
        const Ab = ab.baf2WaterUsedPerS - ab.baf2WaterMadePerS,
          Mb = Ub || Ab <= bY ? 0 : (0, nb.w)(Ab);
        return 0 === Mb ? null : Mb > 1 ? bb("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Mb)
        }) : bb("buildAFactory2Game:cryoNextOne")
      }
      const Ab = Ub ? null : function(bb, ab) {
        const Ub = ab - bb;
        return Ub <= bY ? null : Math.ceil(Ub / SE)
      }(ab.baf2WaterMadePerS, ab.baf2WaterUsedPerS);
      return null === Ab ? null : Ab > 1 ? bb("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Ab)
      }) : bb("buildAFactory2Game:waterNextOne")
    }

    function LY(bb) {
      let {
        item: ab,
        label: Ub,
        note: Ab,
        value: Mb,
        dim: Tb,
        bad: Eb
      } = bb;
      return (0, mT.jsxs)("li", {
        className: iM()("Baf2WaterRow", {
          Dim: Tb,
          Bad: Eb
        }),
        children: [(0, mT.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, mT.jsx)(HM.c, {
            itemName: ab,
            amount: 0
          })
        }), (0, mT.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, mT.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: Ub
          }), Ab && (0, mT.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Ab
          })]
        }), (0, mT.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Mb
        })]
      })
    }

    function PY(bb) {
      return nE.g[bb] ? bb : "Reactor Port"
    }

    function XY(bb) {
      let {
        message: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)(), Ab = !0 === ab.baf2WaterCryo, Mb = (bb, ab) => AY(Ub, Ab, yT(bb, ab));
      return (0, mT.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, mT.jsxs)("section", {
          children: [(0, mT.jsxs)("h3", {
            children: [Ub("buildAFactory2Game:waterMakes"), (0, mT.jsx)("span", {
              children: Mb(ab.baf2WaterMadePerS, "+")
            })]
          }), (0, mT.jsxs)("ul", {
            children: [0 === ab.baf2WaterMakers.length && (0, mT.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Ub(Ab ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), ab.baf2WaterMakers.map((bb => {
              let [ab, Ab, Tb, Eb, Yb, Bb] = bb;
              const eb = Ub("buildAFactory2Game:powerRunning", {
                amount: String(Tb)
              });
              let vb = Yb > 0 ? Ub("buildAFactory2Game:waterMakerPower", {
                running: eb,
                power: UY(Yb)
              }) : eb;
              return Bb && (vb = Ub(0 === Tb && Eb <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, mT.jsx)(LY, {
                item: ab,
                label: `${AT(Ub,ab)} \xd7${Ab}`,
                note: vb,
                value: Tb > 0 || Bb && Eb > 0 ? Mb(Eb, "+") : Ub("buildAFactory2Game:powerIdle"),
                dim: 0 === Tb && !Bb,
                bad: Bb
              }, ab)
            }))]
          })]
        }), (0, mT.jsxs)("section", {
          children: [(0, mT.jsxs)("h3", {
            children: [Ub("buildAFactory2Game:waterUses"), (0, mT.jsx)("span", {
              children: Mb(ab.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, mT.jsxs)("ul", {
            children: [0 === ab.baf2WaterUsers.length && (0, mT.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Ub(Ab ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), ab.baf2WaterUsers.map((bb => {
              let [ab, Ab, Tb, Eb] = bb;
              const Yb = nE.g[ab] ? AT(Ub, ab) : ab;
              return (0, mT.jsx)(LY, {
                item: PY(ab),
                label: Ab > 1 ? `${Yb} \xd7${Ab}` : Yb,
                note: Eb ? Ub("buildAFactory2Game:waterPortFirst") : void 0,
                value: Tb > 0 ? Mb(Tb, "\u2212") : Ub("buildAFactory2Game:powerIdle"),
                dim: 0 === Tb
              }, ab)
            }))]
          })]
        })]
      })
    }

    function jY(bb) {
      var ab, Ub, Mb, Tb, Eb;
      let {
        store: Yb,
        close: Bb
      } = bb;
      const {
        t: eb
      } = (0, NM.A)(), vb = function(bb) {
        const [ab, Ub] = (0, Ab.useState)((() => bb.get()));
        return (0, Ab.useEffect)((() => (Ub(bb.get()), bb.subscribe((() => {
          Ub(bb.get())
        })))), [bb]), ab
      }(Yb), Lb = null !== (ab = null === vb || void 0 === vb ? void 0 : vb.baf2WaterStored) && void 0 !== ab ? ab : 0, Pb = null !== (Ub = null === vb || void 0 === vb ? void 0 : vb.baf2WaterCap) && void 0 !== Ub ? Ub : 0, Xb = null !== (Mb = null === vb || void 0 === vb ? void 0 : vb.baf2WaterMadePerS) && void 0 !== Mb ? Mb : 0, jb = null !== (Tb = null === vb || void 0 === vb ? void 0 : vb.baf2WaterUsedPerS) && void 0 !== Tb ? Tb : 0, Rb = null !== (Eb = null === vb || void 0 === vb ? void 0 : vb.baf2WaterNetPerS) && void 0 !== Eb ? Eb : Xb - jb, kb = vb && eY(eb, vb), yb = vb && vY(eb, vb), Zb = !0 === (null === vb || void 0 === vb ? void 0 : vb.baf2WaterCryo);
      return (0, mT.jsx)(zE.d, {
        close: Bb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mT.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== vb && Pb <= 0 ? (0, mT.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, mT.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, mT.jsx)(HM.c, {
                  itemName: Zb ? jU.f : nb.f,
                  amount: 0
                })
              }), (0, mT.jsxs)("div", {
                children: [(0, mT.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: eb(Zb ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), vb && (0, mT.jsx)("p", {
                  children: BY(eb, vb)
                })]
              })]
            }), (0, mT.jsx)(xE.k, {
              onClick: Bb
            })]
          }), vb && kb && (0, mT.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, mT.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, mT.jsx)(EY, {
                stored: Lb,
                cap: Pb,
                netPerS: Rb,
                cryo: Zb,
                rates: MY(eb, Zb, Xb, jb)
              })
            }), (0, mT.jsx)("div", {
              className: iM()("Baf2WaterThis", {
                Bad: kb.bad
              }),
              children: kb.text
            }), vb.baf2WaterDriven && (0, mT.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, mT.jsx)(WM.e, {
                name: "bolt"
              }), eb(Zb ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), yb && (0, mT.jsx)("p", {
              className: "Baf2WaterNext",
              children: yb
            }), (0, mT.jsx)(XY, {
              message: vb
            })]
          })]
        })
      })
    }
    class RY {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(bb, ab) {
        const Ub = this.get(bb);
        Ub && null === ab.opLeftMs && null === ab.fuelLeftMs && ab.status === Ub.status ? ab = {
          ...ab,
          opLeftMs: Ub.opLeftMs,
          fuelLeftMs: Ub.fuelLeftMs,
          burning: Ub.burning
        } : this.updates++, this.pos = bb, this.view = ab;
        for (const Ab of this.listeners) Ab()
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

    function kY(bb, ab, Ub, Ab) {
      return "noFuel" === ab && Ab && !MU(Ga[bb]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === ab && !0 === (null === Ub || void 0 === Ub ? void 0 : Ub.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === ab && !0 === (null === Ub || void 0 === Ub ? void 0 : Ub.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === ab && !0 === (null === Ub || void 0 === Ub ? void 0 : Ub.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === ab && !0 === (null === Ub || void 0 === Ub ? void 0 : Ub.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : yY(ab, Ub) ? "buildAFactory2Game:machineStatus_noInputShort" : function(bb, ab) {
        const Ub = Ga[bb];
        if ("noFuel" === ab && void 0 !== Ub.fuels) return MU(Ub) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (Ub.mobFarm && ("noInput" === ab || "badInput" === ab)) return `buildAFactory2Game:machineStatus_${ab}MobFarm`;
        if ("outputFull" === ab && (void 0 !== Ub.table || Ub.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === ab && Ca(Ub)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== Ub.cryoMade && ("noInput" === ab || "noOutlet" === ab || "fluidFull" === ab)) return `buildAFactory2Game:machineStatus_${ab}Mixer`;
        return `buildAFactory2Game:machineStatus_${ab}`
      }(bb, ab)
    }

    function yY(bb, ab) {
      return "noInput" === bb && null !== ab && void 0 !== ab && ab.input && ab.inputShort ? {
        input: ab.input,
        short: ab.inputShort
      } : null
    }

    function ZY(bb) {
      return fM(bb) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== bb.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function DY(bb) {
      const ab = (0, Gb.he)(bb);
      return `Baf2Pane Baf2Pane${ab.charAt(0).toUpperCase()}${ab.slice(1)}`
    }

    function zY(bb, ab) {
      const [Ub, Mb] = (0, Ab.useState)((() => bb.get(ab)));
      return (0, Ab.useEffect)((() => {
        Mb(bb.get(ab));
        const Ub = bb.subscribe((() => {
          Mb(bb.get(ab))
        }));
        return () => {
          Ub(), bb.forget(ab)
        }
      }), [bb, ...ab]), Ub
    }

    function xY(bb, ab, Ub, Ab) {
      const Mb = Ga[bb],
        Tb = ab && Mb.couplable ? ta(Mb, Ub) : Mb,
        Eb = null !== Ab && aU(Tb) ? function(bb, ab) {
          var Ub;
          return null !== (Ub = null !== ab && aU(bb) ? YU[ab] : void 0) && void 0 !== Ub ? Ub : bb.opMs
        }(Tb, BU(Ab)) : Tb.opMs;
      return Eb === Tb.opMs ? Tb : {
        ...Tb,
        opMs: Eb
      }
    }

    function iY(bb) {
      let {
        running: ab,
        opMs: Ub,
        opLeftMs: Ab,
        updateCount: Mb
      } = bb;
      return (0, mT.jsx)("div", {
        className: iM()("Baf2MachineProgress", {
          Running: ab
        }),
        children: (0, mT.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: Ub / 1e3 + "s",
            animationDelay: null === Ab ? void 0 : (Ab - Ub) / 1e3 + "s"
          }
        }, Mb)
      })
    }

    function fY(bb) {
      let {
        running: ab,
        leftMs: Ub,
        periodMs: Ab,
        updateCount: Mb
      } = bb;
      const {
        t: Tb
      } = (0, NM.A)(), Eb = Math.min(Math.max(null !== Ub && void 0 !== Ub ? Ub : 0, 0), Ab), Yb = ab && Eb > 0, Bb = Tb("buildAFactory2Game:machineBarFuel");
      return (0, mT.jsx)("div", {
        className: iM()("Baf2FuelBurn", {
          Draining: Yb
        }),
        role: "img",
        title: Bb,
        "aria-label": Bb,
        children: (0, mT.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: Yb ? {
            animationDuration: Ab / 1e3 + "s",
            animationDelay: (Eb - Ab) / 1e3 + "s"
          } : {
            transform: `scaleY(${Eb/Ab})`
          }
        }, Mb)
      })
    }

    function mY(bb, ab, Ub) {
      let [Ab, Mb] = Ub;
      const Tb = 1 !== Ab ? pM(ab) : null;
      return {
        amount: Ab,
        have: Mb,
        item: bb(Tb || UT(ab))
      }
    }

    function pY(bb) {
      return aU(bb) ? "buildAFactory2Game:machineBarMining" : UU(bb) ? "buildAFactory2Game:machineBarCutting" : void 0 !== bb.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function NY(bb) {
      var ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Db;
      let {
        kind: zb,
        uT: xb,
        store: ib,
        power: fb,
        renderSlot: mb
      } = bb;
      const {
        t: pb
      } = (0, NM.A)(), Nb = zY(ib, xb), Wb = Ga[zb], Hb = null !== (ab = null === Nb || void 0 === Nb ? void 0 : Nb.coupled) && void 0 !== ab && ab, Ib = null !== (Ub = null === Nb || void 0 === Nb ? void 0 : Nb.couplerLevel) && void 0 !== Ub ? Ub : 1, db = xY(zb, Hb, Ib, null !== (Ab = null === Nb || void 0 === Nb || null === (Mb = Nb.dug) || void 0 === Mb ? void 0 : Mb.item) && void 0 !== Ab ? Ab : null), Fb = null !== (Tb = null === Nb || void 0 === Nb ? void 0 : Nb.status) && void 0 !== Tb ? Tb : null, hb = null !== (Eb = null === Nb || void 0 === Nb ? void 0 : Nb.power) && void 0 !== Eb ? Eb : null, Gb = null !== (Yb = null === Nb || void 0 === Nb ? void 0 : Nb.opLeftMs) && void 0 !== Yb ? Yb : null, Qb = null !== (Bb = null === Nb || void 0 === Nb ? void 0 : Nb.dug) && void 0 !== Bb ? Bb : null, qb = null !== Qb && aU(Wb) ? YU[null !== (eb = BU(Qb.item)) && void 0 !== eb ? eb : ""] : void 0, ub = void 0 === qb ? null : 6e4 / qb, rb = null !== (vb = null === Nb || void 0 === Nb ? void 0 : Nb.powerCap) && void 0 !== vb ? vb : 4e3, Kb = null !== (Lb = null === Nb || void 0 === Nb ? void 0 : Nb.tier) && void 0 !== Lb ? Lb : null, ob = void 0 !== db.powerMade, lb = null !== Wb.fuelSlot ? mb(Wb.fuelSlot) : null, tb = la(Wb), wb = !Hb && !0 === (null === Nb || void 0 === Nb ? void 0 : Nb.fuelFed), gb = !Hb && !0 === (null === Nb || void 0 === Nb ? void 0 : Nb.fuelFeeds), Cb = null !== Wb.fuelSlot && !Hb, Vb = null !== (Pb = null === Nb || void 0 === Nb ? void 0 : Nb.fuelLeftMs) && void 0 !== Pb ? Pb : null, Ob = function(bb, ab, Ub) {
        var Ab;
        const Mb = null === ab ? void 0 : TU[ab];
        return Math.max(null !== (Ab = null !== Mb && void 0 !== Mb ? Mb : Ub) && void 0 !== Ab ? Ab : 0, bb.opMs)
      }(db, null !== (Xb = null === Nb || void 0 === Nb ? void 0 : Nb.burning) && void 0 !== Xb ? Xb : null, Vb), cb = null !== (jb = null === Nb || void 0 === Nb ? void 0 : Nb.fuelKeep) && void 0 !== jb ? jb : null, Jb = null === Fb ? null : kY(zb, Fb, Nb, wb), nb = null === Fb ? null : yY(Fb, Nb);
      return (0, mT.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, mT.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, mT.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: pb(UT(zb))
          }), Qb && (0, mT.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [pb("Tree Cutter" === zb ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, mT.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, mT.jsx)(HM.c, {
                itemName: Qb.item,
                amount: 0
              })
            }), (0, mT.jsx)(IM.c, {
              text: Qb.name
            })]
          }), null !== ub && (0, mT.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: pb("buildAFactory2Game:machineDigsFixed", {
              perMin: String(ub)
            })
          }), (null === Nb || void 0 === Nb ? void 0 : Nb.field) && (0, mT.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, mT.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, mT.jsx)(HM.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), pb("buildAFactory2Game:machineField", {
              planted: String(Nb.field[0]),
              ripe: String(Nb.field[1])
            })]
          }), (0, mT.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, mT.jsxs)("div", {
              className: iM()("Baf2MachineColumn", {
                Baf2Burns: Cb
              }),
              children: [null !== db.inputSlot && (0, mT.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, mT.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: pb(ZY(db))
                }), mb(db.inputSlot)]
              }), null !== Wb.fuelSlot && !Hb && (0, mT.jsxs)("div", {
                className: iM()("Baf2MachineSlot", {
                  Baf2FuelFed: wb
                }),
                children: [(0, mT.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [wb && (0, mT.jsx)(WM.e, {
                    name: "fire"
                  }), pb("buildAFactory2Game:machineFuel")]
                }), (0, mT.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, mT.jsx)(fY, {
                    running: "running" === Fb,
                    leftMs: Vb,
                    periodMs: Ob,
                    updateCount: ib.updateCount
                  }), lb]
                })]
              }), null !== Wb.fuelSlot && Hb && (0, mT.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, mT.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: pb("buildAFactory2Game:machineFuel")
                }), (0, mT.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: pb("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": pb("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, mT.jsx)(WM.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, mT.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, mT.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: pb(pY(db))
              }), (0, mT.jsx)(iY, {
                running: "running" === Fb,
                opMs: db.opMs,
                opLeftMs: Gb,
                updateCount: ib.updateCount
              })]
            }), db.outputSlots.length > 0 && (0, mT.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, mT.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: pb("buildAFactory2Game:machineOutput")
              }), (0, mT.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: db.outputSlots.map((bb => (0, mT.jsx)("div", {
                  children: mb(bb)
                }, bb)))
              })]
            }), null !== hb && ob && (0, mT.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, mT.jsx)("div", {
                style: {
                  height: 100 * hb / rb + "%"
                }
              })
            })]
          }), Cb && null !== cb && (0, mT.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, mT.jsx)(WM.e, {
              name: "arrows-rotate"
            }), pb(UU(db) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(cb)
            })]
          }), (wb || gb) && (0, mT.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, mT.jsx)(WM.e, {
              name: "fire"
            }), pb(wb ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Wb.couplable && (0, mT.jsx)(cE, {
            kind: zb,
            tier: Kb,
            coupled: Hb,
            level: Ib,
            slot: tb === Wb.fuelSlot ? lb : null !== tb ? mb(tb) : null
          }), null !== hb && !ob && !0 === (null === Nb || void 0 === Nb ? void 0 : Nb.reactorPowered) && (0, mT.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: pb("buildAFactory2Game:machineReactorPowered")
          }), null !== hb && !ob && !0 !== (null === Nb || void 0 === Nb ? void 0 : Nb.reactorPowered) && (0, mT.jsx)(HE, {
            stored: hb,
            cap: rb,
            rates: null !== (Rb = null === Nb || void 0 === Nb ? void 0 : Nb.powerRates) && void 0 !== Rb ? Rb : null
          }), (null === Nb || void 0 === Nb ? void 0 : Nb.water) && (0, mT.jsx)(YY, {
            water: Nb.water,
            at: xb,
            side: Nb.cryo ? "waterIn" : null
          }), (null === Nb || void 0 === Nb ? void 0 : Nb.cryo) && (0, mT.jsx)(YY, {
            water: Nb.cryo,
            at: xb,
            side: "cryoOut"
          }), null !== Nb && void 0 !== Nb && Nb.inertCoupler ? (0, mT.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: pb("buildAFactory2Game:machineStatus_couplerOff", {
              item: AT(pb, Nb.inertCoupler)
            })
          }) : null !== Jb && (0, mT.jsx)("div", {
            className: iM()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Fb
            }),
            children: pb(Jb, nb ? mY(pb, nb.input, nb.short) : void 0)
          })]
        }), (0, mT.jsxs)("div", {
          className: iM()("Baf2MachineSide", {
            Baf2SynthSide: Ca(Wb)
          }),
          children: [Ca(Wb) && (0, mT.jsx)(VE, {
            uT: xb,
            taught: null !== (kb = null === Nb || void 0 === Nb ? void 0 : Nb.taught) && void 0 !== kb ? kb : null
          }, xb.join(",")), ob && (0, mT.jsx)(dE, {
            kind: zb,
            def: db,
            uT: xb,
            power: fb,
            stored: null !== hb && void 0 !== hb ? hb : 0,
            cap: rb
          }), sb(Wb) && (0, mT.jsx)(sE, {
            uT: xb,
            input: null !== (yb = null === Nb || void 0 === Nb ? void 0 : Nb.input) && void 0 !== yb ? yb : null,
            drops: null !== (Zb = null === Nb || void 0 === Nb ? void 0 : Nb.farm) && void 0 !== Zb ? Zb : null,
            seconds: String(db.opMs / 1e3)
          }), !ob && !sb(Wb) && !Ca(Wb) && (0, mT.jsx)(UE, {
            kind: zb,
            def: db,
            input: null !== (Db = null === Nb || void 0 === Nb ? void 0 : Nb.input) && void 0 !== Db ? Db : null,
            tier: null !== Kb && void 0 !== Kb ? Kb : 1,
            noSeeds: !0 === (null === Nb || void 0 === Nb ? void 0 : Nb.noSeeds)
          })]
        })]
      })
    }

    function WY(bb, ab, Ub, Ab) {
      var Mb;
      const Tb = Ga[bb],
        Eb = [Tb.inputSlot, Tb.fuelSlot, ...null !== (Mb = Tb.inputSlots) && void 0 !== Mb ? Mb : []].filter((bb => null !== bb));
      return {
        render: Mb => {
          let {
            uT: Tb,
            renderSlot: Eb
          } = Mb;
          return (0, mT.jsx)(KE.Provider, {
            value: Ab,
            children: (0, mT.jsx)(NY, {
              kind: bb,
              uT: Tb,
              store: ab,
              power: Ub,
              renderSlot: Eb
            })
          })
        },
        quickMoveRange: Eb.length > 0 ? [Math.min(...Eb), Math.max(...Eb) + 1] : [0, 0],
        className: DY(bb)
      }
    }
    const HY = "Assembler";

    function IY(bb) {
      var ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb;
      let {
        uT: vb,
        store: Lb,
        renderSlot: Pb
      } = bb;
      const {
        t: Xb
      } = (0, NM.A)(), jb = zY(Lb, vb), Rb = null !== (ab = null === jb || void 0 === jb ? void 0 : jb.tier) && void 0 !== ab ? ab : 1, kb = null !== (Ub = null === jb || void 0 === jb ? void 0 : jb.taught) && void 0 !== Ub ? Ub : null, yb = Ja(HY, {
        coupled: !1,
        taught: kb
      }), Zb = null !== (Ab = yb.bench) && void 0 !== Ab ? Ab : null, Db = null !== (Mb = null === jb || void 0 === jb ? void 0 : jb.status) && void 0 !== Mb ? Mb : null, zb = null !== (Tb = null === jb || void 0 === jb ? void 0 : jb.power) && void 0 !== Tb ? Tb : null, xb = null !== (Eb = null === jb || void 0 === jb ? void 0 : jb.powerCap) && void 0 !== Eb ? Eb : 4e3;
      return (0, mT.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, mT.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, mT.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Xb(UT(HY))
          }), Zb && (0, mT.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Xb("buildAFactory2Game:benchMakes"), (0, mT.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, mT.jsx)(HM.c, {
                itemName: Zb.output,
                amount: 0
              })
            }), (null === jb || void 0 === jb ? void 0 : jb.taughtName) && (0, mT.jsx)(IM.c, {
              text: jb.taughtName
            }), Zb.outputAmount > 1 && (0, mT.jsxs)("span", {
              children: ["\xd7", Zb.outputAmount]
            })]
          }), !Zb && (0, mT.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Xb("buildAFactory2Game:benchTeachHint")
          }), (0, mT.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, mT.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (Yb = yb.inputSlots) && void 0 !== Yb ? Yb : []).map(((bb, ab) => {
                const Ub = null === Zb || void 0 === Zb ? void 0 : Zb.inputs[ab];
                return (0, mT.jsxs)("div", {
                  className: iM()("Baf2BenchInput", {
                    Spare: !Ub
                  }),
                  children: [(0, mT.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Pb(bb), Ub && (0, mT.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, mT.jsx)(HM.c, {
                        itemName: Ub.item,
                        amount: 0
                      })
                    })]
                  }), (0, mT.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: Ub ? `\xd7${Ub.amount}` : "\xa0"
                  })]
                }, bb)
              }))
            }), (0, mT.jsx)(iY, {
              running: "running" === Db,
              opMs: yb.opMs,
              opLeftMs: null !== (Bb = null === jb || void 0 === jb ? void 0 : jb.opLeftMs) && void 0 !== Bb ? Bb : null,
              updateCount: Lb.updateCount
            }), (0, mT.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, mT.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Xb("buildAFactory2Game:machineOutput")
              }), (0, mT.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: yb.outputSlots.map((bb => (0, mT.jsx)("div", {
                  children: Pb(bb)
                }, bb)))
              })]
            })]
          }), null !== zb && (0, mT.jsx)(HE, {
            stored: zb,
            cap: xb,
            rates: null !== (eb = null === jb || void 0 === jb ? void 0 : jb.powerRates) && void 0 !== eb ? eb : null
          }), null !== Db && (0, mT.jsx)("div", {
            className: iM()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Db
            }),
            children: Xb(kY(HY, Db, jb, !1))
          }), Zb && Zb.inputs.length > 1 && (0, mT.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Xb("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, mT.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, mT.jsx)(ME, {
            taught: kb,
            tier: Rb
          }), Zb && (0, mT.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Xb("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function dY(bb) {
      var ab;
      const Ub = null !== (ab = Ga[HY].inputSlots) && void 0 !== ab ? ab : [];
      return {
        render: ab => {
          let {
            uT: Ub,
            renderSlot: Ab
          } = ab;
          return (0, mT.jsx)(IY, {
            uT: Ub,
            store: bb,
            renderSlot: Ab
          })
        },
        quickMoveRange: [Math.min(...Ub), Math.max(...Ub) + 1],
        className: DY(HY)
      }
    }
    var FY = Ub(101),
      hY = Ub(1060),
      GY = Ub(3959);
    const QY = 600,
      qY = .5,
      uY = 4,
      rY = 1200,
      KY = 140,
      oY = 100,
      lY = 32,
      tY = 16,
      wY = 100.5,
      sY = 90,
      gY = 1.5,
      CY = 50;

    function VY(bb) {
      switch (dU(bb)) {
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
    const OY = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function cY(bb) {
      const ab = Math.ceil(60 * bb / oY);
      return {
        fuel: Math.max(lY, ab),
        waste: Math.max(tY, ab)
      }
    }

    function JY(bb, ab, Ub) {
      const [Ab, Mb, Tb] = [bb - 2, ab - 2, Ub - 2];
      return 2 * (Ab * Mb + Mb * Tb + Tb * Ab) * KY
    }

    function nY(bb, ab, Ub) {
      return Math.max(0, bb - 2) * Math.max(0, ab - 2) * Math.max(0, Ub - 2)
    }

    function SY(bb, ab) {
      const [Ub, Ab, Mb] = bb, Tb = Ub * Ab * Mb, Eb = new Float32Array(Tb);
      let Yb = 0,
        Bb = 0,
        eb = 0,
        vb = 0,
        Lb = 0;
      const Pb = (bb, Tb, Eb) => bb < 0 || bb >= Ub || Tb < 0 || Tb >= Ab || Eb < 0 || Eb >= Mb ? 0 : ab[(Tb * Mb + Eb) * Ub + bb];
      for (let kb = 0; kb < Ab; kb++)
        for (let bb = 0; bb < Mb; bb++)
          for (let Ab = 0; Ab < Ub; Ab++) {
            const Tb = (kb * Mb + bb) * Ub + Ab,
              Xb = ab[Tb];
            if (1 === Xb) {
              Yb++;
              let ab = 0;
              for (const [Ub, Mb, Tb] of OY) {
                const Eb = Pb(Ab + Ub, kb + Mb, bb + Tb);
                1 !== Eb && 2 !== Eb || ab++
              }
              Eb[Tb] = QY * (1 + qY * Math.min(ab, uY)), vb += Eb[Tb]
            } else if (2 === Xb) Bb++;
            else if (3 === Xb) {
              eb++;
              OY.some((ab => {
                let [Ub, Mb, Tb] = ab;
                return 1 === Pb(Ab + Ub, kb + Mb, bb + Tb)
              })) && (Lb += rY)
            }
          }
      const Xb = JY(Ub + 2, Ab + 2, Mb + 2),
        jb = Math.min(vb, Lb, Xb),
        Rb = Yb > 0 ? vb * oY / Yb : 0;
      return {
        rods: Yb,
        graphite: Bb,
        channels: eb,
        fuelHeat: vb,
        cooling: Lb,
        size: Xb,
        max: jb,
        vol: Tb,
        powerPerUnit: Rb,
        pelletsPerMin: Rb > 0 ? jb / Rb * 60 : 0,
        waterPerS: jb * nb.k,
        rodHeat: Eb
      }
    }
    const bB = 0,
      aB = 1,
      UB = 6,
      AB = 7,
      MB = 8;

    function TB(bb, ab) {
      const [Ub, Ab, Mb] = bb, Tb = new Uint8Array(Ub * Ab * Mb), Eb = (bb, Tb, Eb) => bb < 0 || bb >= Ub || Tb < 0 || Tb >= Ab || Eb < 0 || Eb >= Mb ? 0 : ab[(Tb * Mb + Eb) * Ub + bb];
      for (let Yb = 0; Yb < Ab; Yb++)
        for (let bb = 0; bb < Mb; bb++)
          for (let Ab = 0; Ab < Ub; Ab++) {
            const Bb = (Yb * Mb + bb) * Ub + Ab,
              eb = ab[Bb];
            if (1 === eb) {
              let ab = 0;
              for (const [Ub, Mb, Tb] of OY) {
                const Bb = Eb(Ab + Ub, Yb + Mb, bb + Tb);
                ab += 1 === Bb || 2 === Bb ? 1 : 0
              }
              Tb[Bb] = aB + Math.min(ab, uY)
            } else if (3 === eb) {
              const ab = OY.some((ab => {
                let [Ub, Mb, Tb] = ab;
                return 1 === Eb(Ab + Ub, Yb + Mb, bb + Tb)
              }));
              Tb[Bb] = ab ? UB : AB
            } else 2 === eb && (Tb[Bb] = MB)
          }
      return Tb
    }

    function EB(bb) {
      return bb.fuelHeat <= bb.cooling && bb.fuelHeat <= bb.size ? "fuel" : bb.cooling <= bb.size ? "cooling" : "size"
    }
    const YB = sY;

    function BB(bb, ab, Ub) {
      return Math.round(bb * ab * Ub * 25e3 * (1 + .25 * (Math.min(bb, ab, Ub) - 2)))
    }

    function eB(bb) {
      return Math.max(0, Math.min(nb.d, bb))
    }

    function vB(bb, ab, Ub) {
      const Ab = ab * eB(Ub);
      return bb <= 0 ? 0 : Ab > 0 ? Math.min(200, 100 * bb / Ab) : 200
    }

    function LB(bb, ab) {
      const Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? gY : 1;
      return Math.min(bb.fuelHeat * Ub, bb.cooling * eB(ab), bb.size * Ub)
    }

    function PB(bb) {
      return 2 + bb / 10
    }
    const XB = "buildAFactory2Game:";

    function jB(bb) {
      var ab;
      return null !== (ab = bb.baf2RxMood) && void 0 !== ab ? ab : function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const Ub = [
          ["calm", 50],
          ["warm", YB],
          ["hot", wY]
        ];
        for (const [Ab, Mb] of Ub)
          if (bb < Mb + (Ab === ab ? 3 : 0)) return Ab;
        return "alarm"
      }(bb.baf2RxHeat)
    }
    const RB = 120;

    function kB(bb) {
      const ab = bb.baf2RxState;
      if ("running" === ab && bb.baf2RxHeat > wY) return {
        label: `${XB}rxState_tooHot`,
        tone: "bad",
        fix: `${XB}rxFix_tooHot`
      };
      switch (ab) {
        case "running":
          return {
            label: `${XB}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${XB}rxState_idle`, tone: "off", fix: `${XB}rxFix_idle`
          };
        case "scram":
          return {
            label: `${XB}rxState_scram`, tone: "off", fix: bb.baf2RxHeat < CY ? `${XB}rxFix_scramCool` : `${XB}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${XB}rxState_${ab}`, tone: "off", fix: `${XB}rxFix_${ab}`
          };
        case "melted":
          return {
            label: `${XB}rxState_melted`, tone: "bad", fix: `${XB}rxFix_melted`
          };
        default:
          return {
            label: `${XB}rxState_${ab}`, tone: "warn", fix: `${XB}rxFix_${ab}`
          }
      }
    }

    function yB(bb) {
      const [ab, Ub, Ab] = bb.baf2RxStats;
      return {
        fuelHeat: ab,
        cooling: Ub * (bb.baf2RxCryo ? Math.max(1, eB(bb.baf2RxWater / 100)) : 1),
        size: Ab
      }
    }

    function ZB(bb) {
      var ab;
      const Ub = "idle" === bb.baf2RxState || "running" === bb.baf2RxState && bb.baf2RxHeat <= wY || "scram" === bb.baf2RxState && bb.baf2RxHeat < CY;
      if (0 === (bb.baf2RxFlags & za) || !bb.baf2RxFormed || !Ub) return null;
      const {
        fuelHeat: Ab,
        cooling: Mb,
        size: Tb
      } = yB(bb), Eb = Math.min(Ab, Mb, Tb), Yb = EB({
        fuelHeat: Ab,
        cooling: Mb,
        size: Tb
      }), Bb = "cooling" === Yb && !0 === bb.baf2RxCryoOpen && !bb.baf2RxCryo, eb = null !== (ab = bb.baf2RxCells) && void 0 !== ab ? ab : "", vb = ("fuel" === Yb || "cooling" === Yb && !0 === bb.baf2RxCryo) && eb.length > 0 && !eb.includes(String(0)), Lb = Bb ? "Cryo" : "scram" === bb.baf2RxState ? "Off" : "";
      return Eb < 12e3 ? {
        key: `${XB}rxGrow_${vb?"full":Yb}${Lb}`,
        amount: Eb
      } : null
    }

    function DB(bb, ab) {
      return bb[0] === ab[0] && bb[1] === ab[1] && bb[2] === ab[2]
    }

    function zB(bb) {
      return [...bb].sort(((bb, ab) => Number(ab[2] < ab[1]) - Number(bb[2] < bb[1])))
    }

    function xB(bb, ab) {
      return ab.some((ab => {
        let [Ub, Ab] = ab;
        return !(Ab <= 0) && ["edge", "cap", "wall", "inside"].some((ab => Ub === TA(bb, ab)))
      }))
    }

    function iB(bb, ab, Ub) {
      const Ab = bb.baf2RxFuel - bb.baf2RxPu > 0 ? Ub : 0;
      return {
        full: bb.baf2RxWaste > ab - 3,
        fullInS: Ab > 0 ? Math.max(0, ab - bb.baf2RxWaste) / Ab : null
      }
    }
    const fB = {
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

    function mB(bb) {
      return pB[bb]
    }
    const pB = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function NB(bb) {
      let [ab, Ub, Ab] = bb;
      return Math.ceil(JY(ab, Ub, Ab) * nb.k)
    }

    function WB(bb, ab) {
      return "battery" === bb ? ab[0] * ab[1] * ab[2] : function(bb) {
        let [ab, Ub, Ab] = bb;
        return ab * Ub * Ab - Math.max(0, ab - 2) * Math.max(0, Ub - 2) * Math.max(0, Ab - 2)
      }(ab) - 1
    }

    function HB(bb) {
      const ab = Math.max(0, bb);
      if (ab < 10) return String(Math.round(10 * ab) / 10);
      if (ab < 1e4) return Math.round(ab).toLocaleString("en-US");
      if (ab < 1e6) return `${ab<1e5?(Math.floor(ab/100)/10).toFixed(1):Math.floor(ab/1e3)}k`;
      const Ub = ab / 1e6;
      return `${Ub<10?(Math.floor(100*Ub)/100).toFixed(2):Ub<100?(Math.floor(10*Ub)/10).toFixed(1):Math.floor(Ub)}M`
    }

    function IB(bb) {
      return bb <= 0 ? "0" : bb >= 10 ? String(Math.round(bb)) : bb.toFixed(bb >= 1 ? 1 : 2)
    }

    function dB(bb) {
      const ab = nU(bb, 0),
        Ub = nU(bb, VU(bb) - 1);
      return {
        lo: [Math.min(ab[0], Ub[0]), Math.min(ab[1], Ub[1]), Math.min(ab[2], Ub[2])],
        hi: [Math.max(ab[0], Ub[0]) + 1, Math.max(ab[1], Ub[1]) + 1, Math.max(ab[2], Ub[2]) + 1]
      }
    }

    function FB(bb, ab, Ub) {
      const Ab = [ab[0] - bb[0], ab[1] - bb[1], ab[2] - bb[2]],
        Mb = [(bb[0] + ab[0]) / 2, (bb[1] + ab[1]) / 2, (bb[2] + ab[2]) / 2],
        Tb = [];
      for (let Eb = 0; Eb < 3; Eb++) {
        const Yb = (Eb + 1) % 3,
          Bb = (Eb + 2) % 3;
        for (const eb of [bb[Yb], ab[Yb]])
          for (const vb of [bb[Bb], ab[Bb]]) {
            const bb = [0, 0, 0],
              ab = [Ub, Ub, Ub];
            bb[Eb] = Mb[Eb], ab[Eb] = Ab[Eb] + Ub, bb[Yb] = eb, bb[Bb] = vb, Tb.push([bb, ab])
          }
      }
      return Tb
    }
    const hB = "buildAFactory2Game:",
      GB = [`${hB}colNorth`, `${hB}colEast`, `${hB}colSouth`, `${hB}colWest`];

    function QB(bb, ab) {
      const [Ub, Ab, Mb] = bb.baf2ColAt;
      return `baf2col ${Ub} ${Ab} ${Mb} ${ab}`
    }

    function qB(bb) {
      return function(bb) {
        if (!Number.isFinite(bb)) return "";
        const ab = Math.max(1, Math.round(bb));
        if (ab < 60) return `${ab}s`;
        const Ub = ab % 60;
        return 0 === Ub ? ab / 60 + "m" : `${Math.floor(ab/60)}m ${Ub}s`
      }(function(bb) {
        const ab = EA.FOCUS_BY_LASERS[Math.max(0, Math.min(4, bb))];
        return ab > 0 ? EA.NOVA_FOCUS / ab : 1 / 0
      }(bb))
    }

    function uB(bb) {
      const ab = Math.abs(Math.round(bb));
      return ab < 1e3 ? Math.round(bb).toLocaleString("en-US") : ab < 1e6 ? `${ab<1e5?(bb/1e3).toFixed(1).replace(/\.0$/,""):Math.round(bb/1e3)}k` : `${(bb/1e6).toFixed(ab<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function rB(bb, ab, Ub) {
      if (PA(ab) >= 0) {
        const ab = function(bb, ab) {
          return bb.find((bb => {
            let {
              focus: Ub
            } = bb;
            return Ub[0] === ab[0] && Ub[2] === ab[2] && (ab[1] === Ub[1] || ab[1] === Ub[1] - 1)
          }))
        }(bb, Ub);
        if (!ab) return null;
        const Mb = function(bb) {
          let ab = 0,
            Ub = 0;
          for (let Ab = 0; Ab < 4; Ab++) ab += bb.laser[Ab] ? 1 : 0, Ub += bb.live[Ab] ? 1 : 0;
          return {
            lasers: ab,
            live: Ub,
            focusPerS: EA.FOCUS_BY_LASERS[Ub],
            drawPerS: EA.LASER_DRAW * Ub
          }
        }({
          laser: ab.lasers,
          live: ab.live
        });
        if (0 === Mb.lasers || "noLasers" === ab.state) return {
          key: `${hB}lookColNoLasers`
        };
        if (0 === Mb.live) return {
          key: `${hB}lookColOff_blocked`
        };
        if (!(ab.on && Mb.live > 0) && ("running" !== (Ab = ab.state) && "slowed" !== Ab)) return {
          key: `${hB}lookColOff_${ab.state}`
        };
        if (Mb.live < Mb.lasers) return {
          key: `${hB}lookColLasersSome`,
          params: {
            lasers: String(Mb.lasers),
            live: String(Mb.live)
          }
        };
        const Tb = ab.open.filter(Boolean).length;
        return Tb < 4 ? {
          key: `${hB}lookColLasersSpots`,
          params: {
            live: String(Mb.live),
            spots: String(Tb),
            time: qB(Mb.live)
          }
        } : {
          key: `${hB}lookColLasers`,
          params: {
            live: String(Mb.live),
            time: qB(Mb.live)
          }
        }
      }
      var Ab;
      if (!XA(ab)) return null;
      const Mb = function(bb, ab) {
        for (const Ub of bb) {
          const bb = yA(Ub.focus, [ab[0], ab[1], ab[2]]);
          if (bb && bb.CE === EA.LASER_D && Ub.lasers[bb.dir]) return {
            entry: Ub,
            dir: bb.dir
          }
        }
        return null
      }(bb, Ub);
      if (!Mb) return {
        key: `${hB}lookLaserNoCollider`
      };
      const {
        entry: Tb,
        dir: Eb
      } = Mb;
      return Tb.open[Eb] ? Tb.live[Eb] ? {
        key: Tb.on ? `${hB}lookLaserFiring` : `${hB}lookLaserReady`
      } : {
        key: `${hB}lookLaserBlocked`
      } : {
        key: `${hB}lookLaserClosed`
      }
    }

    function KB(bb, ab) {
      const Ub = [];
      for (let Ab = 1; Ab < EA.LASER_D; Ab++) bb & 1 << ab * (EA.LASER_D - 1) + Ab - 1 && Ub.push(Ab);
      return Ub
    }
    const oB = {
      firing: `${hB}colSlotFiring`,
      ready: `${hB}colSlotReady`,
      blocked: `${hB}colSlotBlocked`,
      empty: `${hB}colSlotEmpty`,
      closed: `${hB}colSlotClosed`
    };

    function lB(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Tb = TM(bb),
        Eb = TM(ab),
        Yb = TM(Ub),
        Bb = Yb.filter(Boolean).length,
        eb = Tb.filter(Boolean).length,
        vb = [0, 1, 2, 3].map((bb => Eb[bb] ? Tb[bb] ? Yb[bb] ? Ab ? "firing" : "ready" : "blocked" : (bb => KB(Mb, bb).length > 0)(bb) ? "blocked" : "empty" : "closed")),
        Lb = vb.indexOf("blocked"),
        Pb = Lb < 0 && eb > 0 ? vb.indexOf("empty") : -1;
      return vb.map(((bb, ab) => {
        const Ub = ab === Lb ? {
          key: `${hB}colSlotClear`
        } : ab === Pb ? {
          key: `${hB}colSlotAdd`,
          params: {
            time: qB(Math.min(4, Bb + 1))
          }
        } : null;
        return {
          dir: ab,
          tone: bb,
          title: {
            key: "blocked" !== bb || Tb[ab] ? oB[bb] : `${hB}colSlotGap`,
            keys: {
              dir: GB[ab]
            }
          },
          hint: Ub
        }
      }))
    }

    function tB(bb) {
      var ab;
      return "noPower" === bb.baf2ColState && bb.baf2ColRxState ? kB({
        baf2RxState: bb.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (ab = bb.baf2ColRxHeat) && void 0 !== ab ? ab : 0
      }) : null
    }

    function wB(bb) {
      const ab = TM(bb.baf2ColSpots).filter(Boolean).length,
        Ub = TM(bb.baf2ColLive);
      let Ab = 0,
        Mb = 0;
      return TM(bb.baf2ColLasers).forEach(((bb, ab) => {
        bb && (Ab++, Mb += Ub[ab] ? 0 : 1)
      })), Mb > 0 ? {
        key: `${hB}colSubSome`,
        params: {
          blocked: String(Mb),
          lasers: String(Ab)
        }
      } : ab < 4 ? {
        key: `${hB}colSubSpots`,
        params: {
          lasers: String(Ab),
          spots: String(ab)
        }
      } : {
        key: `${hB}colSub`,
        params: {
          lasers: String(Ab)
        }
      }
    }

    function sB(bb) {
      const ab = tB(bb);
      if ("idle" === bb.baf2ColRxState && ab) return {
        key: `${hB}colState_noPowerIdle`
      };
      if (ab) return {
        key: `${hB}colState_noPowerReactor`,
        keys: {
          state: ab.label
        }
      };
      if ("noInput" !== bb.baf2ColState) return {
        key: `${hB}colState_${bb.baf2ColState}`
      };
      const Ub = String(Math.max(0, EA.NOVA_SA - bb.baf2ColSa)),
        Ab = String(Math.max(0, EA.NOVA_GD - bb.baf2ColGd));
      return "0" !== Ub && "0" !== Ab ? {
        key: `${hB}colState_noInput`,
        params: {
          sa: Ub,
          gd: Ab
        }
      } : "0" !== Ub ? {
        key: `${hB}colState_noStarAlloy`,
        params: {
          sa: Ub
        }
      } : "0" !== Ab ? {
        key: `${hB}colState_noGlowDust`,
        params: {
          gd: Ab
        }
      } : {
        key: `${hB}colState_running`
      }
    }

    function gB(bb) {
      return bb.baf2ColP < 0 ? `${hB}colNext` : function(bb) {
        const ab = bb.baf2ColState;
        return bb.baf2ColP >= 0 && ("blocked" === ab || "noLasers" === ab || "noPower" === ab)
      }(bb) ? `${hB}colStalled` : null === CB(bb) ? `${hB}colMaking` : `${hB}colNovaIn`
    }

    function CB(bb) {
      if (bb.baf2ColP < 0 || bb.baf2ColWant <= 0) return null;
      const ab = bb.baf2ColFocusPerS * Math.min(1, bb.baf2ColDraw / bb.baf2ColWant);
      return ab > 0 ? Math.max(0, EA.NOVA_FOCUS - bb.baf2ColP) / ab : null
    }

    function VB(bb, ab) {
      const Ub = [];
      for (let Ab = 1; Ab <= 3; Ab++) {
        const Mb = [bb[0], bb[1] - Ab, bb[2]];
        if (!ab(Mb)) return Ub;
        Ub.push(Mb)
      }
      return []
    }

    function OB(bb, ab) {
      const Ub = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Ab = 0; Ab < 4; Ab++) {
        const Mb = Ab,
          Tb = kA(bb.focus, Mb, EA.LASER_D);
        if (bb.lasers[Ab] || !bb.open[Ab] || !ab(Tb)) continue;
        const Eb = [];
        for (let Ub = 1; Ub < EA.LASER_D; Ub++) {
          const Ab = kA(bb.focus, Mb, Ub);
          ab(Ab) || Eb.push(Ab)
        }
        Ub.supports.push(...VB(Tb, ab)), 0 === Eb.length ? Ub.free.push(Tb) : (Ub.blocked.push(Tb), Ub.gaps.push(...Eb))
      }
      return Ub
    }
    const cB = EA.LASER_D - .25,
      JB = 4,
      nB = 2,
      SB = 16;
    const be = {
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
        blendMode: GY.f.Standard,
        soft: !0
      },
      ae = {
        green: be,
        pink: {
          ...be,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function Ue(bb, ab) {
      const Ub = {
        ...ab.params
      };
      for (const [Mb, Tb] of Object.entries(null !== (Ab = ab.keys) && void 0 !== Ab ? Ab : {})) {
        var Ab;
        Ub[Mb] = bb(Tb)
      }
      return Ub
    }
    const Ae = "buildAFactory2Game:",
      Me = 2 * EA.LASER_D + 1,
      Te = EA.LASER_D;

    function Ee(bb) {
      return bb(`${Ae}colFocusTip`, {
        need: uB(EA.NOVA_FOCUS)
      })
    }

    function Ye(bb, ab) {
      return bb(ab.key, Ue(bb, ab))
    }

    function Be(bb) {
      const ab = bb.getStatus();
      return {
        status: ab,
        entry: ab ? bb.entryAtRoot(ab.baf2ColAt) : void 0
      }
    }

    function ee(bb, ab) {
      return {
        left: 100 * (Te + bb) / Me + "%",
        top: 100 * (Te + ab) / Me + "%"
      }
    }

    function ve(bb) {
      let {
        status: ab,
        entry: Ub
      } = bb;
      const Ab = TM(ab.baf2ColLasers),
        Mb = TM(ab.baf2ColSpots),
        Tb = TM(ab.baf2ColLive),
        Eb = !0 === (null === Ub || void 0 === Ub ? void 0 : Ub.on),
        Yb = EA.LASER_D,
        Bb = [];
      for (let Xb = 0; Xb < 4; Xb++) {
        const [bb, , ab] = RA[Xb];
        if (Tb[Xb]) {
          const Ub = 100 * (Yb - 1) / Me,
            Ab = bb + ab > 0 ? 100 * (Te + 1) / Me : 100 * (Te - (Yb - 1)) / Me,
            Mb = 100 * (Te + .35) / Me,
            Tb = 30 / Me,
            eb = 0 !== bb ? {
              left: `${Ab}%`,
              width: `${Ub}%`,
              top: `${Mb}%`,
              height: `${Tb}%`
            } : {
              top: `${Ab}%`,
              height: `${Ub}%`,
              left: `${Mb}%`,
              width: `${Tb}%`
            };
          Bb.push((0, mT.jsx)("i", {
            className: iM()("Baf2ColDiagramBeam", {
              Off: !Eb
            }),
            style: eb
          }, `beam${Xb}`))
        }
        const Ub = Ab[Xb] ? "Baf2ColDiagramLaser" : Mb[Xb] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Bb.push((0, mT.jsx)("i", {
          className: Ub,
          style: ee(bb * Yb, ab * Yb)
        }, `spot${Xb}`))
      }
      for (let Xb = 0; Xb < 4; Xb++) {
        if (Ab[Xb] || !Mb[Xb]) continue;
        const [bb, , Ub] = RA[Xb];
        for (const Ab of KB(null !== (eb = ab.baf2ColGaps) && void 0 !== eb ? eb : 0, Xb)) {
          var eb;
          Bb.push((0, mT.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: ee(bb * Ab, Ub * Ab)
          }, `gap${Xb},${Ab}`))
        }
      }
      for (const [Xb, , jb] of null !== (vb = null === Ub || void 0 === Ub ? void 0 : Ub.blockers) && void 0 !== vb ? vb : []) {
        var vb, Lb, Pb;
        const bb = Xb - (null !== (Lb = null === Ub || void 0 === Ub ? void 0 : Ub.focus[0]) && void 0 !== Lb ? Lb : 0),
          ab = jb - (null !== (Pb = null === Ub || void 0 === Ub ? void 0 : Ub.focus[2]) && void 0 !== Pb ? Pb : 0);
        Bb.push((0, mT.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: ee(bb, ab)
        }, `block${bb},${ab}`))
      }
      return (0, mT.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Bb, (0, mT.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Le(bb) {
      let {
        status: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)(), Ab = TM(ab.baf2ColLive).filter(Boolean).length;
      return (0, mT.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, mT.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Ee(Ub),
          children: Ub(`${Ae}colLadder`)
        }), (0, mT.jsx)("ul", {
          children: [1, 2, 3, 4].map((bb => (0, mT.jsx)("li", {
            className: iM()({
              On: bb === Ab
            }),
            children: Ub(`${Ae}colLadderChip`, {
              lasers: String(bb),
              time: qB(bb)
            })
          }, bb)))
        })]
      })
    }

    function Pe(bb) {
      let {
        item: ab,
        PY: Ub,
        need: Ab,
        cap: Mb
      } = bb;
      const {
        t: Tb
      } = (0, NM.A)(), Eb = Math.min(Ub, Ab);
      return (0, mT.jsxs)("li", {
        className: iM()("Baf2ColTile", {
          Short: Ub < Ab
        }),
        children: [(0, mT.jsx)(Xe, {
          item: ab
        }), (0, mT.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Tb(`${Ae}colOutOf`, {
            amount: String(Eb),
            cap: String(Ab)
          })
        }), (0, mT.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, mT.jsx)("i", {
            style: {
              width: 100 * Eb / Ab + "%"
            }
          })
        }), Ub > Ab && (0, mT.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Tb(`${Ae}colIntakeHeld`, {
            amount: String(Ub),
            cap: String(Mb)
          })
        })]
      })
    }

    function Xe(bb) {
      let {
        item: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)();
      return (0, mT.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, mT.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, mT.jsx)(HM.c, {
            itemName: ab,
            amount: 0
          })
        }), (0, mT.jsx)("span", {
          className: "Baf2ColTileName",
          children: AT(Ub, ab)
        })]
      })
    }

    function je(bb) {
      switch (bb.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function Re(bb) {
      var ab, Ub, Mb;
      let {
        store: Tb,
        close: Eb
      } = bb;
      const {
        t: Yb
      } = (0, NM.A)(), Bb = oE(), {
        status: eb,
        entry: vb
      } = function(bb) {
        const [ab, Ub] = (0, Ab.useState)((() => Be(bb)));
        return (0, Ab.useEffect)((() => (Ub(Be(bb)), bb.subscribe((() => {
          Ub(Be(bb))
        })))), [bb]), ab
      }(Tb), [Lb, Pb] = (0, Ab.useState)(null), Xb = null === eb || void 0 === eb ? void 0 : eb.baf2ColHold;
      (0, Ab.useEffect)((() => {
        Pb(null)
      }), [Xb]);
      const jb = (0, Ab.useRef)({
          p: -1,
          n: 0
        }),
        Rb = null !== (ab = null === eb || void 0 === eb ? void 0 : eb.baf2ColP) && void 0 !== ab ? ab : -1;
      Rb < jb.current.p && jb.current.n++, jb.current.p = Rb;
      const kb = (0, Ab.useRef)(null),
        [yb] = (0, Ab.useState)((() => {
          return (bb = Tb.heldAtOpen()) === eA || bb === vA ? {
            key: `${hB}colBeltItIn`,
            item: bb
          } : null;
          var bb
        }));
      if (!eb) return null;
      const Zb = eb.baf2ColMember,
        Db = eb.baf2ColP >= 0,
        zb = function(bb, ab) {
          if (bb.baf2ColP >= 0 && bb.baf2ColDraw > 0) {
            const ab = bb.baf2ColWant > 0 ? Math.min(1, bb.baf2ColDraw / bb.baf2ColWant) : 0;
            return {
              focus: bb.baf2ColFocusPerS * ab,
              draw: bb.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === bb.baf2ColState && ab && ab.draw > 0 ? {
            ...ab,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(eb, kb.current);
      kb.current = zb.draw > 0 ? zb : null;
      const xb = "slowed" === eb.baf2ColState || "noPower" === eb.baf2ColState,
        ib = CB(eb),
        fb = null !== Lb && void 0 !== Lb ? Lb : eb.baf2ColHold,
        mb = function(bb) {
          var ab, Ub;
          return "idle" === bb.baf2ColRxState ? null : null !== (ab = null === (Ub = tB(bb)) || void 0 === Ub ? void 0 : Ub.fix) && void 0 !== ab ? ab : null
        }(eb),
        pb = null === mb && null === yb ? function(bb) {
          var ab;
          const Ub = bb.baf2ColSentTo;
          if (!Ub) return null;
          const Ab = null !== (ab = bb.baf2ColSentHeld) && void 0 !== ab ? ab : null;
          return {
            key: null === Ab ? `${hB}colNovaSentToMachine` : `${hB}colNovaSentTo`,
            target: Ub,
            PY: Ab
          }
        }(eb) : null,
        Nb = Db ? Yb(`${Ae}colFocusOf`, {
          focus: uB(eb.baf2ColP),
          need: uB(EA.NOVA_FOCUS)
        }) : null;
      return (0, mT.jsx)(zE.d, {
        close: Eb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, mT.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, mT.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, mT.jsx)(HM.c, {
                  itemName: YA,
                  amount: 0
                })
              }), (0, mT.jsxs)("div", {
                children: [(0, mT.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: AT(Yb, YA)
                }), (0, mT.jsx)("p", {
                  children: Ye(Yb, wB(eb))
                })]
              })]
            }), (0, mT.jsx)(xE.k, {
              onClick: Eb
            })]
          }), (0, mT.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, mT.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, mT.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, mT.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: Yb(gB(eb), {
                    time: null === ib ? "" : zT(Yb, ib)
                  })
                }), (0, mT.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, mT.jsx)("i", {
                    style: {
                      width: (Db ? 100 * eb.baf2ColP / EA.NOVA_FOCUS : 0) + "%"
                    }
                  }, jb.current.n)
                }), (0, mT.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, mT.jsxs)("span", {
                    title: Ee(Yb),
                    children: [(0, mT.jsx)("b", {
                      children: uB(zb.focus)
                    }), " ", Yb(`${Ae}colFocusPerS`)]
                  }), (0, mT.jsxs)("span", {
                    className: iM()("Baf2ColDraw", {
                      Short: xb
                    }),
                    children: [(0, mT.jsx)(WM.e, {
                      name: "bolt"
                    }), xb ? Yb(`${Ae}colDrawOf`, {
                      draw: uB(eb.baf2ColDraw),
                      want: uB(eb.baf2ColWant)
                    }) : Yb(`${Ae}colPowerPerS`, {
                      rate: uB(zb.draw)
                    })]
                  }), null !== Nb && (0, mT.jsx)("span", {
                    className: "Soft",
                    children: Nb
                  })]
                })]
              }), (0, mT.jsx)("p", {
                className: iM()("Baf2ColState", je(eb)),
                children: Ye(Yb, sB(eb))
              }), null !== mb && (0, mT.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Yb(mb)
              }), null === mb && null !== yb && (0, mT.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Yb(yb.key, {
                  item: AT(Yb, yb.item)
                })
              }), pb && (0, mT.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Yb(pb.key, {
                  target: AT(Yb, pb.target),
                  amount: String(null !== (Ub = pb.PY) && void 0 !== Ub ? Ub : 0)
                })
              }), (0, mT.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, mT.jsx)(Pe, {
                  item: eA,
                  PY: eb.baf2ColSa,
                  need: EA.NOVA_SA,
                  cap: EA.SA_CAP
                }), (0, mT.jsx)(Pe, {
                  item: vA,
                  PY: eb.baf2ColGd,
                  need: EA.NOVA_GD,
                  cap: EA.GD_CAP
                }), (0, mT.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, mT.jsx)(Xe, {
                    item: "Nova Matter"
                  }), (0, mT.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: Yb(`${Ae}colNovaHeld`, {
                      amount: String(eb.baf2ColOut),
                      cap: String(EA.OUT_CAP)
                    })
                  }), Zb && (0, mT.jsx)(xE.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === eb.baf2ColOut,
                    onClick: () => {
                      Bb.send(QB(eb, "take"))
                    },
                    children: Yb(`${Ae}colTake`)
                  })]
                })]
              }), Zb && (0, mT.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": fb,
                className: iM()("Baf2ColHold", {
                  On: fb
                }),
                onClick: bb => {
                  bb.detail > 0 && bb.currentTarget.blur(), Pb(!fb), Bb.send(QB(eb, "hold " + (fb ? 0 : 1)))
                },
                children: [(0, mT.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, mT.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, mT.jsx)("b", {
                    children: Yb(`${Ae}colHold`)
                  }), (0, mT.jsx)("span", {
                    children: Yb(`${Ae}colHoldNote`)
                  })]
                })]
              })]
            }), (0, mT.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, mT.jsx)(ve, {
                status: eb,
                entry: vb
              }), (0, mT.jsx)("ul", {
                className: "Baf2ColSlots",
                children: lB(eb.baf2ColLasers, eb.baf2ColSpots, eb.baf2ColLive, zb.beamsOn, null !== (Mb = eb.baf2ColGaps) && void 0 !== Mb ? Mb : 0).map((bb => (0, mT.jsxs)("li", {
                  className: bb.tone,
                  children: [(0, mT.jsx)("b", {
                    children: Ye(Yb, bb.title)
                  }), null !== bb.hint && (0, mT.jsx)("span", {
                    children: Ye(Yb, bb.hint)
                  })]
                }, bb.dir)))
              }), (0, mT.jsx)(Le, {
                status: eb
              })]
            })]
          })]
        })
      })
    }
    const ke = "buildAFactory2Game:",
      ye = 36e5,
      Ze = 864e5;

    function De(bb, ab, Ub) {
      return Math.max(0, Math.ceil((bb + ab - Math.max(Ub, bb)) / 1e3))
    }

    function ze(bb) {
      return bb.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function xe(bb) {
      return "Homestead" === bb
    }

    function ie(bb) {
      return function(bb) {
        let ab = 0;
        for (const Ub of bb) {
          const bb = /^Island ([1-9]\d{0,5})$/.exec(Ub);
          bb && (ab = Math.max(ab, Number(bb[1])))
        }
        return `Island ${ab+1}`
      }(bb.map((bb => bb.baf2IslandName)))
    }

    function fe(bb, ab) {
      return function(bb) {
        return `${ke}islandsBlocked${bb[0].toUpperCase()}${bb.slice(1)}`
      }("degraded" === bb && 0 === ab ? "stuck" : bb)
    }

    function me(bb) {
      return bb.filter((bb => {
        var ab;
        return !bb.baf2IslandActive && void 0 === bb.baf2IslandUnreadable && void 0 === (null === (ab = bb.baf2IslandCoop) || void 0 === ab ? void 0 : ab.baf2CoopState)
      })).length
    }

    function pe(bb) {
      return "coopMoving" === bb || "coopUnreachable" === bb
    }

    function Ne(bb, ab) {
      const Ub = ab > 0;
      return {
        change: null === bb && !Ub,
        switch: (null === bb || "degraded" === bb || pe(bb)) && !Ub,
        rename: "loading" !== bb && "degraded" !== bb && "stuck" !== bb
      }
    }

    function We(bb, ab) {
      return void 0 === bb || "corrupt" === bb && ab
    }
    const He = hE;

    function Ie(bb, ab, Ub) {
      if (null !== bb && void 0 !== bb && bb.untilGone) {
        var Ab;
        return !("dismiss" === bb.untilGone && void 0 === (null === (Ab = ab.baf2IslandCoop) || void 0 === Ab ? void 0 : Ab.baf2CoopState)) && Ub - bb.atMs < 32500
      }
      return void 0 !== bb && Ub - bb.atMs < He && ab.baf2IslandName === bb.from
    }
    const de = hE;

    function Fe(bb) {
      return "core" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.core : "islands" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.backToCore : void 0
    }

    function he(bb) {
      return `\0${bb}\0`
    }

    function Ge(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Ab = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Tb of Object.keys(Ub)) Ab[Tb] = he(Tb);
      let Mb = Object.keys(Ab).length > 0 ? bb(ab, Ab) : bb(ab);
      for (const [Tb, Eb] of Object.entries(Ub)) Mb = Mb.split(he(Tb)).join(Eb);
      return Mb
    }

    function Qe(bb, ab) {
      return bb ? ab ? "enabled" : "disabled" : "hidden"
    }
    const qe = {
      removed: `${ke}islandsCoopRemoved`,
      deleted: `${ke}islandsCoopDeleted`,
      notReady: `${ke}islandsCoopNotReady`,
      gone: `${ke}islandsCoopGone`
    };

    function ue(bb) {
      var ab;
      return "member" !== (null === (ab = bb.baf2IslandCoop) || void 0 === ab ? void 0 : ab.baf2CoopRole) && "newer" !== bb.baf2IslandUnreadable
    }

    function re(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = bb.baf2IslandActive,
        Yb = bb.baf2IslandUnreadable,
        Bb = bb.baf2IslandCoop,
        eb = function(bb, ab, Ub) {
          return {
            switch: bb.switch && void 0 === ab,
            delete: bb.change && We(ab, Ub)
          }
        }(ab, Yb, Ab),
        vb = Eb && void 0 !== Bb && void 0 === Bb.baf2CoopState && "coopUnreachable" === Tb,
        Lb = {
          switch: Qe((!Eb || vb) && void 0 === Yb, vb || eb.switch),
          switchLabel: vb ? "tryAgain" : "switch",
          rename: Qe(!0, ab.rename),
          delete: Qe(!Eb, eb.delete),
          deleteWaits: !Eb && We(Yb, Ab),
          people: Qe(void 0 !== bb.baf2IslandInvitable || Mb && Eb && void 0 === Yb && void 0 === Bb, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Pb = !Eb && eb.delete;
      if (void 0 === Bb) return Ub ? {
        ...Lb,
        delete: Qe(!Eb, !1),
        deleteWaits: !1,
        note: Pb ? {
          key: `${ke}islandsCoopKeepOwn`
        } : null
      } : Lb;
      const Xb = Bb.baf2CoopState,
        jb = Bb.baf2CoopMembers.length > 1,
        Rb = {
          ...Lb,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Xb && "member" === Bb.baf2CoopRole) return {
        ...Rb,
        dismiss: Qe(!0, ab.rename),
        note: {
          key: qe[Xb],
          names: {
            owner: Bb.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Xb) {
        let bb = {
          key: `${ke}islandsCoopOwnLost`
        };
        return Pb && jb ? bb = {
          key: `${ke}islandsCoopDeleteMembers`
        } : Pb && Ub && (bb = {
          key: `${ke}islandsCoopKeepOwn`
        }), {
          ...Rb,
          delete: Qe(!Eb, eb.delete && !jb && !Ub),
          deleteWaits: Lb.deleteWaits && !jb && !Ub,
          note: bb
        }
      }
      if ("member" === Bb.baf2CoopRole) return {
        ...Lb,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Qe(!0, Eb ? ab.switch : ab.rename)
      };
      const kb = Bb.baf2CoopManageHere;
      let yb = null;
      var Zb;
      kb || Eb ? Pb && jb ? yb = {
        key: `${ke}islandsCoopDeleteMembers`
      } : Pb && Ub && (yb = {
        key: `${ke}islandsCoopKeepOwn`
      }) : yb = {
        key: null !== (Zb = Bb.baf2CoopLeft) && void 0 !== Zb && Zb.length ? `${ke}islandsCoopManageThereClaim` : `${ke}islandsCoopManageThere`
      };
      return {
        ...Lb,
        rename: Qe(!0, ab.rename && kb),
        delete: Qe(!Eb, eb.delete && !jb && !Ub),
        deleteWaits: Lb.deleteWaits && !jb && !Ub,
        people: "enabled",
        peopleLabel: "players",
        unshare: Qe(kb && Eb && !jb, ab.change),
        remove: kb,
        note: yb
      }
    }

    function Ke(bb) {
      var ab;
      const Ub = bb.baf2IslandCoop;
      if ("owner" !== (null === Ub || void 0 === Ub ? void 0 : Ub.baf2CoopRole) || void 0 !== Ub.baf2CoopState || null === (ab = Ub.baf2CoopLeft) || void 0 === ab || !ab.length) return null;
      const Ab = bb.baf2IslandActive && Ub.baf2CoopManageHere;
      return {
        left: Ub.baf2CoopLeft,
        claim: Ab,
        goThere: !Ab && Ub.baf2CoopManageHere
      }
    }

    function oe(bb) {
      return bb.baf2CoopMembers.length >= bb.baf2CoopMax
    }

    function le(bb, ab, Ub) {
      return void 0 !== bb && ab < bb.answer && Ub - bb.atMs < He
    }
    const te = "buildAFactory2Game:";

    function we(bb, ab) {
      return {
        onKeyDown: Ub => {
          Ub.stopPropagation(), Ub.nativeEvent.isComposing || 229 === Ub.nativeEvent.keyCode || ("Enter" === Ub.key ? (Ub.preventDefault(), bb()) : "Escape" === Ub.key && (Ub.preventDefault(), ab()))
        }
      }
    }

    function se(bb) {
      return {
        onKeyDown: ab => {
          "Escape" !== ab.key || ab.nativeEvent.isComposing || (ab.preventDefault(), ab.stopPropagation(), bb())
        }
      }
    }

    function ge(bb) {
      bb.currentTarget.select()
    }

    function Ce(bb, ab) {
      (0, Ab.useEffect)((() => {
        var Ub;
        bb && (null === (Ub = ab.current) || void 0 === Ub || Ub.scrollIntoView({
          block: "nearest"
        }))
      }), [bb, ab])
    }

    function Ve(bb) {
      const [ab, Ub] = (0, Ab.useState)(null);
      return (0, Ab.useEffect)((() => {
        const ab = document.querySelector(".UiRequests"),
          Ab = bb.current;
        if (!ab || !Ab || "undefined" === typeof ResizeObserver) return;
        const Mb = () => {
          const bb = ab.getBoundingClientRect(),
            Mb = Ab.getBoundingClientRect(),
            Tb = Ab.parentElement,
            Eb = Tb && parseFloat(getComputedStyle(Tb).paddingTop) || 0,
            Yb = function(bb, ab, Ub, Ab) {
              if (!bb || bb.height <= 0 || bb.right <= ab.left || bb.left >= ab.right) return null;
              const Mb = Math.max(Ab, bb.bottom + 8);
              return {
                marginTop: Math.round(Mb - Ab),
                maxHeight: Math.max(0, Math.floor(Ub - Mb - Ab))
              }
            }(bb, Mb, window.innerHeight, Eb);
          Ub((bb => (null === bb || void 0 === bb ? void 0 : bb.marginTop) === (null === Yb || void 0 === Yb ? void 0 : Yb.marginTop) && (null === bb || void 0 === bb ? void 0 : bb.maxHeight) === (null === Yb || void 0 === Yb ? void 0 : Yb.maxHeight) ? bb : Yb))
        };
        Mb();
        const Tb = new ResizeObserver(Mb);
        return Tb.observe(ab), window.addEventListener("resize", Mb), () => {
          Tb.disconnect(), window.removeEventListener("resize", Mb)
        }
      }), [bb]), ab
    }

    function Oe(bb) {
      (0, Ab.useEffect)((() => {
        var ab;
        null === (ab = bb.current) || void 0 === ab || ab.focus()
      }), [bb])
    }

    function ce(bb) {
      const [ab, Ub] = (0, Ab.useState)(Date.now);
      return (0, Ab.useEffect)((() => {
        const ab = window.setInterval((() => {
          Ub(Date.now())
        }), bb);
        return () => {
          window.clearInterval(ab)
        }
      }), [bb]), ab
    }

    function Je(bb) {
      let {
        tier: ab,
        t: Ub
      } = bb;
      const {
        kind: Ab,
        short: Mb
      } = kb(ab), Tb = Xb(ab, jb), Eb = Ub(`${te}${Tb.key}`, {
        ...Tb.params,
        name: Ub(`${te}${yb(ab).nameKey}`)
      });
      return (0, mT.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, mT.jsx)("span", {
          className: iM()("Baf2IslandTierPip", {
            Stage: "tier" !== Ab
          }),
          "aria-hidden": "true",
          children: Mb
        }), Eb]
      })
    }

    function ne(bb) {
      let {
        note: ab,
        className: Ub,
        t: Ab
      } = bb;
      return (0, mT.jsx)("p", {
        className: iM()("Baf2IslandNote", Ub),
        children: Ge(Ab, ab.key, ab.names, ab.params)
      })
    }
    const Se = "buildAFactory2Game:";

    function bv(bb) {
      let {
        message: ab,
        arrivedAtMs: Ub,
        close: Mb,
        leave: Tb
      } = bb;
      const Eb = oE(),
        {
          t: Yb
        } = (0, NM.A)(),
        Bb = ce(1e3),
        eb = (0, Ab.useRef)(null);
      (0, Ab.useEffect)((() => {
        var bb;
        null === (bb = eb.current) || void 0 === bb || bb.focus()
      }), []);
      const vb = De(Ub, ab.baf2TransferInMs, Bb),
        Lb = Ub + ab.baf2TransferInMs - 1e3,
        [Pb, Xb] = (0, Ab.useState)(null);
      (0, Ab.useEffect)((() => {
        const bb = window.setTimeout((() => {
          Xb(Lb)
        }), Math.max(0, Lb - Date.now()));
        return () => {
          window.clearTimeout(bb)
        }
      }), [Lb]);
      const jb = Pb === Lb || Bb >= Lb,
        Rb = ab.baf2TransferIsland,
        kb = ab.baf2TransferOwner;
      return (0, mT.jsx)(zE.d, {
        close: Mb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, mT.jsxs)("section", {
          ref: eb,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsxs)("div", {
              children: [(0, mT.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === kb ? Ge(Yb, `${Se}islandsTransferOwn`, {
                  island: Rb
                }) : Ge(Yb, `${Se}islandsTransfer`, {
                  island: Rb,
                  owner: kb
                })
              }), (0, mT.jsx)("p", {
                children: jb ? Yb(`${Se}islandsTransferNow`) : Yb(`${Se}islandsTransferIn`, {
                  time: zT(Yb, vb)
                })
              })]
            }), (0, mT.jsx)(xE.k, {
              ariaLabel: Yb(`${Se}islandsClose`),
              onClick: Mb
            })]
          }), !jb && (0, mT.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, mT.jsx)("p", {
              className: "Baf2TransferNote",
              children: Yb(`${Se}islandsTransferNote`)
            }), (0, mT.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, mT.jsx)(xE.g, {
                onClick: () => {
                  Eb.send("baf2coopstay"), Tb()
                },
                children: Yb(`${Se}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var av = Ub(1345),
      Uv = Ub(1068),
      Av = Ub.n(Uv);
    const Mv = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const Tv = "buildAFactory2Game:",
      Ev = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Yv(bb, ab, Ub) {
      return void 0 === ab ? Ub : "string" === typeof ab ? ab : Array.isArray(ab) ? ab.map((ab => "string" === typeof ab ? ab : "translationKey" in ab ? bb(ab.translationKey) : "")).join("") : bb(ab.translationKey)
    }

    function Bv(bb) {
      const ab = {};
      for (const [Ub, Ab] of Object.entries(null !== bb && void 0 !== bb ? bb : {})) ab[Ub] = Ab < 0 ? DT(Ab) : Ab.toLocaleString("en-US");
      return ab
    }

    function ev(bb, ab) {
      const Ub = ab ? "touch" : "mouse";
      return {
        use: bb(`${Tv}lookUse_${Ub}`),
        Use: bb(`${Tv}lookUseStart_${Ub}`)
      }
    }
    const vv = (0, Ab.memo)((function(bb) {
      let {
        item: ab
      } = bb;
      return (0, mT.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, mT.jsx)(HM.c, {
          itemName: ab,
          amount: 0
        })
      })
    }));

    function Lv(bb) {
      let {
        label: ab,
        percent: Ub,
        progress: Ab
      } = bb;
      return (0, mT.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, mT.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${ab}: ${Ab}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Ub,
          children: (0, mT.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${Ub}%`
            }
          })
        }), (0, mT.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Ab
        })]
      })
    }

    function Pv(bb) {
      let {
        chips: ab
      } = bb;
      return (0, mT.jsx)("span", {
        className: "Baf2QuestChips",
        children: ab.map((bb => {
          let [ab, Ub, Ab] = bb;
          const Mb = Ub >= Ab;
          return (0, mT.jsxs)("span", {
            className: iM()("Baf2QuestChip", {
              Met: Mb
            }),
            children: [(0, mT.jsx)(vv, {
              item: ab
            }), (0, mT.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Mb ? `\u2713${Ab}` : `${Ub}/${Ab}`
            })]
          }, ab)
        }))
      })
    }

    function Xv(bb, ab) {
      const {
        key: Ub,
        params: Ab
      } = Xb(ab, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return bb(`${Tv}${Ub}`, {
        ...Ab,
        name: bb(`${Tv}${yb(ab).nameKey}`)
      })
    }

    function jv(bb) {
      let {
        core: ab,
        t: Ub
      } = bb;
      const [Ab, Mb] = ab, Tb = Mb > 0 ? Math.floor(100 * Ab / Mb) : 100;
      return (0, mT.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": Ub(`${Tv}questCoreLabel`, {
          have: String(Ab),
          need: String(Mb)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Tb,
        children: [(0, mT.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: Ub(`${Tv}questCore`, {
            percent: String(Tb)
          })
        }), (0, mT.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, mT.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Tb}%`
            }
          })
        })]
      })
    }

    function Rv(bb) {
      let {
        rows: ab,
        t: Ub
      } = bb;
      const Ab = ab.filter((bb => bb.done)).length;
      return (0, mT.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": Ub(`${Tv}questStepsProgress`, {
          done: String(Ab),
          total: String(ab.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": ab.length,
        "aria-valuenow": Ab,
        children: ab.map((bb => (0, mT.jsx)("span", {
          className: iM()("Baf2QuestSegment", {
            Done: bb.done,
            Current: bb.current
          })
        }, bb.id)))
      })
    }
    const kv = (0, Ab.memo)(Zv, yv);

    function yv(bb, ab) {
      const Ub = Ub => bb.view.itemNames[Ub] === ab.view.itemNames[Ub];
      return bb.t === ab.t && bb.extra === ab.extra && (null === bb.row.item || Ub(bb.row.item)) && bb.row.madeFor.every(Ub) && bb.row.also.every(Ub) && Av()(bb.row, ab.row)
    }

    function Zv(bb) {
      let {
        row: ab,
        view: Ub,
        t: Ab,
        extra: Mb
      } = bb;
      const {
        isTouchScreen: Tb
      } = (0, DM.n)(["isTouchScreen"]), Eb = ab.item ? function(bb, ab, Ub) {
        return 1 !== Ub && Mv.has(bb) ? pM(ab) : null
      }(ab.key, ab.item, ab.total) : null, Yb = Eb ? Ab(Eb) : ab.item ? Yv(Ab, Ub.itemNames[ab.item], ab.item) : "", Bb = ab.also.map((bb => Yv(Ab, Ub.itemNames[bb], bb))), eb = Bb.join(", "), vb = function(bb, ab) {
        var Ub;
        return ab.length < 2 ? null !== (Ub = ab[0]) && void 0 !== Ub ? Ub : "" : bb(`${Tv}listAnd`, {
          rest: ab.slice(0, -1).join(bb(`${Tv}listComma`)),
          last: ab[ab.length - 1]
        })
      }(Ab, [Yb, ...Bb]), Lb = Ab(`${Tv}${ab.key}`, {
        ...ev(Ab, Tb),
        ...Bv(ab.params),
        item: Yb,
        also: eb,
        itemList: vb,
        total: String(ab.total)
      }), [Pb, ...Xb] = Lb.split("\n"), jb = ab.total > 1 && !ab.done && !ab.away;
      return (0, mT.jsxs)("li", {
        className: iM()("Baf2QuestStep", {
          Done: ab.done,
          Current: ab.current,
          JustFinished: ab.justFinished,
          Away: ab.away
        }),
        children: [!ab.done && null !== ab.item && (0, mT.jsx)(vv, {
          item: ab.item
        }), (ab.done || null === ab.item) && (0, mT.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: ab.done ? "\u2713" : "\u25cb"
        }), (0, mT.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, mT.jsx)("strong", {
            children: Pb
          }), Xb.length > 0 && (0, mT.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Xb.join(" ")
          }), !ab.done && ab.madeFor.length > 0 && (0, mT.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Ab("buildAFactory2Game:questRowFor", {
              items: ab.madeFor.map((bb => Yv(Ab, Ub.itemNames[bb], bb))).join(" \u2192 ")
            })
          }), jb && (0, mT.jsx)(Lv, {
            label: Pb,
            percent: Math.round(100 * ab.amount / ab.total),
            progress: `${ab.amount.toLocaleString("en-US")}/${ab.total.toLocaleString("en-US")}`
          }), !ab.done && !ab.away && ab.chips && ab.chips.length > 0 && (0, mT.jsx)(Pv, {
            chips: ab.chips
          }), Mb]
        })]
      })
    }

    function Dv(bb, ab) {
      let [Ub, Ab] = ab;
      return bb(`${Tv}${Ub}`, Bv(Ab))
    }

    function zv(bb) {
      let [ab, Ub] = bb;
      return ab + JSON.stringify(Ub)
    }

    function xv(bb) {
      let {
        goal: ab,
        t: Ub
      } = bb;
      return ab ? (0, mT.jsx)("span", {
        className: "Baf2BookGoal",
        children: Ub(`${Tv}${ab}`)
      }) : null
    }

    function iv(bb) {
      let {
        view: ab,
        t: Ub
      } = bb;
      if (!ab.name) return null;
      const Ab = tM(ab.rows);
      return (0, mT.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, mT.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: Ub(`${Tv}currentQuest`)
        }), (0, mT.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Dv(Ub, ab.name)
        }), (0, mT.jsx)(xv, {
          goal: ab.goal,
          t: Ub
        }), Ab.length > 1 && (0, mT.jsx)(Rv, {
          rows: Ab,
          t: Ub
        }), (0, mT.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: ab.rows.map((bb => (0, mT.jsx)(kv, {
            row: bb,
            view: ab,
            t: Ub
          }, bb.id)))
        }), ab.reward && (0, mT.jsxs)("span", {
          className: "Baf2BookReward",
          children: [Ub(`${Tv}questReward`), (0, mT.jsx)(vv, {
            item: ab.reward
          }), Yv(Ub, ab.itemNames[ab.reward], ab.reward)]
        })]
      })
    }

    function fv(bb) {
      let {
        quest: ab,
        upcoming: Ub,
        t: Ab
      } = bb;
      return (0, mT.jsxs)("li", {
        className: iM()("Baf2BookQuest", {
          Done: ab[3],
          Upcoming: Ub
        }),
        children: [(0, mT.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: ab[3] ? "\u2713" : "\u25cb"
        }), (0, mT.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, mT.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Dv(Ab, ab)
          }), (0, mT.jsx)(xv, {
            goal: ab[2],
            t: Ab
          })]
        })]
      })
    }

    function mv(bb) {
      let {
        done: ab,
        total: Ub,
        t: Ab
      } = bb;
      const Mb = Ub > 0 ? Math.round(100 * ab / Ub) : 0,
        Tb = Ab(`${Tv}questBookChapterProgress`, {
          done: String(ab),
          total: String(Ub)
        });
      return (0, mT.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, mT.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Tb,
          "aria-valuemin": 0,
          "aria-valuemax": Ub,
          "aria-valuenow": ab,
          children: (0, mT.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Mb}%`
            }
          })
        }), (0, mT.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Tb
        })]
      })
    }

    function pv(bb) {
      let {
        view: ab,
        tier: Ub,
        quests: Ab,
        t: Mb
      } = bb;
      const Tb = Ub === ab.tier,
        Eb = (null !== Ab && void 0 !== Ab ? Ab : []).filter((bb => !bb[4])),
        Yb = (null !== Ab && void 0 !== Ab ? Ab : []).filter((bb => bb[4])),
        Bb = Eb.filter((bb => bb[3])).length,
        eb = Tb && ab.name ? zv(ab.name) : null,
        vb = Eb.findIndex((bb => !bb[3] && zv(bb) === eb));
      return (0, mT.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, mT.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, mT.jsx)("h3", {
            children: Xv(Mb, Ub)
          }), Eb.length > 0 && (0, mT.jsx)(mv, {
            done: Bb,
            total: Eb.length,
            t: Mb
          }), Tb && ab.core && (0, mT.jsx)(jv, {
            core: ab.core,
            t: Mb
          })]
        }), (0, mT.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Ab && Tb && (0, mT.jsx)(iv, {
            view: ab,
            t: Mb
          }), Eb.map(((bb, Ub) => Ub === vb ? (0, mT.jsx)(iv, {
            view: ab,
            t: Mb
          }, zv(bb)) : (0, mT.jsx)(fv, {
            quest: bb,
            upcoming: !bb[3],
            t: Mb
          }, zv(bb))))]
        }), Tb && ab.side && (0, mT.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, mT.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Mb(`${Tv}questSide`)
          }), (0, mT.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Dv(Mb, ab.side.name)
          }), (0, mT.jsx)(xv, {
            goal: ab.side.goal,
            t: Mb
          }), (0, mT.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, mT.jsx)(kv, {
              row: ab.side.row,
              view: ab,
              t: Mb
            })
          })]
        }), Yb.length > 0 && (0, mT.jsxs)(mT.Fragment, {
          children: [(0, mT.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Mb(`${Tv}questBookSidesDone`)
          }), (0, mT.jsx)("ol", {
            className: "Baf2BookQuests",
            children: Yb.map((bb => (0, mT.jsx)(fv, {
              quest: bb,
              upcoming: !1,
              t: Mb
            }, zv(bb))))
          })]
        })]
      })
    }

    function Nv(bb) {
      var ab, Ub, Tb;
      let {
        store: Eb,
        close: Yb
      } = bb;
      const {
        t: Bb
      } = (0, NM.A)(), eb = (0, av.i)(QM, Eb.get()), Lb = null !== (ab = eb.tier) && void 0 !== ab ? ab : 1, [Pb, Xb] = (0, Ab.useState)(null), jb = (null === Pb || void 0 === Pb ? void 0 : Pb.at) === Lb ? Pb.tier : Lb, yb = (0, Ab.useRef)(null), Zb = null !== eb.chapters;
      (0, Ab.useEffect)((() => {
        var bb;
        yb.current && (yb.current.scrollTop = 0);
        const ab = null === (bb = yb.current) || void 0 === bb ? void 0 : bb.querySelector(".Baf2BookQuest.Current");
        if (yb.current && ab) {
          const bb = ab.getBoundingClientRect().bottom - yb.current.getBoundingClientRect().bottom;
          bb > 0 && (yb.current.scrollTop += Math.min(bb, ab.getBoundingClientRect().top - yb.current.getBoundingClientRect().top))
        }
      }), [jb, Zb]);
      const Db = null === (Ub = eb.chapters) || void 0 === Ub ? void 0 : Ub.find((bb => {
        let [ab] = bb;
        return ab === jb
      }));
      return (0, mT.jsx)(zE.d, {
        close: Yb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mT.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: Ev,
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Bb(`${Tv}questBookTitle`)
            }), (0, mT.jsx)(xE.k, {
              onClick: Yb
            })]
          }), (0, mT.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Bb(`${Tv}questBookChapters`),
            children: Mb.slice(0, vb()).map(((bb, ab) => {
              const Ub = ab + 1,
                {
                  kind: Ab,
                  short: Mb
                } = kb(Ub),
                Tb = Rb(Ub, Lb),
                Eb = Tb ? Bb(`${Tv}coreAtomicHidden`) : Xv(Bb, Ub);
              return (0, mT.jsx)("li", {
                children: (0, mT.jsx)("button", {
                  type: "button",
                  className: iM()({
                    Stage: "tier" !== Ab,
                    Atomic: "atomic" === Ab,
                    Current: Ub === Lb,
                    Selected: Ub === jb
                  }),
                  disabled: Ub > Lb,
                  "aria-pressed": Ub === jb,
                  "aria-label": Eb,
                  title: Tb ? void 0 : Eb,
                  onClick: () => {
                    Xb({
                      tier: Ub,
                      at: Lb
                    })
                  },
                  children: Tb ? "?" : Mb
                })
              }, bb.nameKey)
            }))
          }), (0, mT.jsxs)("div", {
            ref: yb,
            className: "Baf2BookBody",
            children: [oM(eb) && jb === Lb && (0, mT.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Bb(`${Tv}questBookAllDone`)
            }), (0, mT.jsx)(pv, {
              view: eb,
              tier: jb,
              quests: null !== (Tb = null === Db || void 0 === Db ? void 0 : Db[1]) && void 0 !== Tb ? Tb : null,
              t: Bb
            })]
          })]
        })
      })
    }
    const Wv = "buildAFactory2Game:";

    function Hv(bb) {
      let {
        tiers: ab,
        from: Ub,
        tier: Ab,
        shown: Mb,
        GP: Tb
      } = bb;
      const {
        t: Eb
      } = (0, NM.A)(), Yb = ab.map(((bb, ab) => {
        const Yb = Ub + ab,
          {
            kind: Bb,
            short: eb
          } = kb(Yb),
          vb = Rb(Yb, Ab);
        return (0, mT.jsx)("li", {
          children: (0, mT.jsx)("button", {
            type: "button",
            className: iM()({
              Stage: "tier" !== Bb,
              Silhouette: vb,
              Reached: Yb <= Ab,
              Current: Yb === Ab,
              Next: Yb === Ab + 1,
              Selected: Yb === Mb
            }),
            disabled: vb,
            "aria-pressed": Yb === Mb,
            "aria-label": vb ? Eb(`${Wv}coreAtomicHidden`) : void 0,
            title: vb ? void 0 : Eb(`${Wv}${bb.nameKey}`),
            onClick: () => {
              Tb(Yb)
            },
            children: vb ? "?" : eb
          })
        }, bb.nameKey)
      }));
      return (0, mT.jsx)(mT.Fragment, {
        children: Yb
      })
    }

    function Iv(bb) {
      let {
        id: ab,
        label: Ub,
        tiers: Ab,
        from: Mb,
        ...Tb
      } = bb;
      return (0, mT.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, mT.jsx)("span", {
          id: ab,
          className: "Baf2CoreLadderLabel",
          children: Ub
        }), (0, mT.jsx)("ol", {
          "aria-labelledby": ab,
          children: (0, mT.jsx)(Hv, {
            ...Tb,
            tiers: Ab,
            from: Mb
          })
        })]
      })
    }

    function dv(bb) {
      const {
        t: ab
      } = (0, NM.A)(), Ub = Mb.findIndex((bb => void 0 !== bb.stage)), Ab = Mb.findIndex((bb => void 0 !== bb.reactorTier)), Tb = Ub < 0 ? Mb : Mb.slice(0, Ub), Eb = Ub < 0 ? [] : Mb.slice(Ub, Ab < 0 ? void 0 : Ab), Bb = Ab < 0 || !Yb() ? [] : Mb.slice(Ab);
      return (0, mT.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, mT.jsx)(Iv, {
          ...bb,
          id: "baf2CoreTiersLabel",
          label: ab(`${Wv}coreTiersLabel`),
          tiers: Tb,
          from: 1
        }), Eb.length > 0 && (0, mT.jsx)(Iv, {
          ...bb,
          id: "baf2CoreStagesLabel",
          label: ab(`${Wv}coreStagesLabel`),
          tiers: Eb,
          from: Ub + 1
        }), Bb.length > 0 && (0, mT.jsx)(Iv, {
          ...bb,
          id: "baf2CoreAtomicLabel",
          label: ab(`${Wv}coreAtomicLabel`),
          tiers: Bb,
          from: Ab + 1
        })]
      })
    }
    const Fv = "buildAFactory2Game:";

    function hv(bb) {
      let {
        item: ab,
        itemNames: Ub,
        children: Ab
      } = bb;
      return (0, mT.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, mT.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, mT.jsx)(HM.c, {
            itemName: ab,
            amount: 0
          })
        }), (0, mT.jsx)(IM.c, {
          text: Ub[ab]
        }), Ab]
      })
    }

    function Gv(bb) {
      const ab = new Map;
      for (const {
          block: Ab
        }
        of bb.newDeposits) {
        var Ub;
        ab.set(Ab, (null !== (Ub = ab.get(Ab)) && void 0 !== Ub ? Ub : 0) + 1)
      }
      return [...ab]
    }

    function Qv(bb) {
      let {
        value: ab,
        label: Ub,
        more: Ab
      } = bb;
      return (0, mT.jsxs)("li", {
        children: [(0, mT.jsx)("strong", {
          children: ab
        }), (0, mT.jsx)("span", {
          children: Ub
        }), Ab > 0 && (0, mT.jsxs)("em", {
          children: ["+", Ab]
        })]
      })
    }

    function qv(bb) {
      let {
        items: ab,
        itemNames: Ub
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)(), [Tb, Eb] = (0, Ab.useState)(null), Yb = null !== Tb && ab.includes(Tb) ? Tb : null;
      return (0, mT.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, mT.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Mb(`${Fv}coreRewardUnlocks`)
        }), (0, mT.jsx)("ul", {
          children: ab.map((bb => (0, mT.jsx)("li", {
            children: (0, mT.jsx)("button", {
              type: "button",
              className: iM()("Baf2PanelIcon", {
                Picked: bb === Yb
              }),
              title: AT(Mb, bb),
              "aria-label": AT(Mb, bb),
              "aria-pressed": bb === Yb,
              onClick: () => {
                Eb(bb === Yb ? null : bb)
              },
              children: (0, mT.jsx)(HM.c, {
                itemName: bb,
                amount: 0
              })
            })
          }, bb)))
        }), (0, mT.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== Yb && (0, mT.jsxs)(mT.Fragment, {
            children: [(0, mT.jsx)(IM.c, {
              text: Ub[Yb]
            }), " \xb7 ", (0, mT.jsx)(IM.c, {
              text: Ub[Ib(Yb)]
            })]
          }), null === Yb && Mb(`${Fv}coreRecipeTap`)]
        })]
      })
    }

    function uv(bb) {
      var ab, Ub;
      let {
        def: Ab,
        tier: Mb,
        itemNames: Tb
      } = bb;
      const {
        t: Eb
      } = (0, NM.A)(), Yb = Mb > 1 ? yb(Mb - 1) : void 0, Bb = Math.round(2 * Ab.islandRadius), eb = Yb ? Math.round(2 * Yb.islandRadius) : Bb, vb = Mb >= 3 ? xA(Mb) : null;
      return (0, mT.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, mT.jsxs)("ul", {
          className: iM()("Baf2CoreStats", {
            Four: null !== vb
          }),
          children: [(0, mT.jsx)(Qv, {
            value: `${Bb}\xd7${Bb}`,
            label: Eb(`${Fv}coreStatIsland`),
            more: Bb - eb
          }), (0, mT.jsx)(Qv, {
            value: String(Ab.machineAllowance),
            label: Eb(`${Fv}coreStatMachines`),
            more: Ab.machineAllowance - (null !== (ab = null === Yb || void 0 === Yb ? void 0 : Yb.machineAllowance) && void 0 !== ab ? ab : Ab.machineAllowance)
          }), (0, mT.jsx)(Qv, {
            value: String(Ab.beltAllowance),
            label: Eb(`${Fv}coreStatBelts`),
            more: Ab.beltAllowance - (null !== (Ub = null === Yb || void 0 === Yb ? void 0 : Yb.beltAllowance) && void 0 !== Ub ? Ub : Ab.beltAllowance)
          }), null !== vb && (0, mT.jsx)(Qv, {
            value: String(vb),
            label: Eb(`${Fv}coreStatStorage`),
            more: vb - (Yb ? xA(Mb - 1) : vb)
          })]
        }), Ab.reward && (0, mT.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, mT.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Eb(`${Fv}coreRewardItem`)
          }), (0, mT.jsx)(hv, {
            item: Ab.reward,
            itemNames: Tb
          })]
        }), Ab.newDeposits.length > 0 && (0, mT.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, mT.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Eb(Ab.newDeposits.length > 1 ? `${Fv}coreRewardDeposits` : `${Fv}coreRewardDeposit`)
          }), Gv(Ab).map((bb => {
            let [ab, Ub] = bb;
            return (0, mT.jsx)(hv, {
              item: ab,
              itemNames: Tb,
              children: Ub > 1 && ` \xd7${Ub}`
            }, ab)
          }))]
        }), Ab.unlocks.length > 0 && (0, mT.jsx)(qv, {
          items: Ab.unlocks,
          itemNames: Tb
        }), (0, mT.jsx)(rv, {
          tier: Mb
        })]
      })
    }

    function rv(bb) {
      let {
        tier: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)(), Ab = RM[ab];
      if (!Ab) return null;
      const Mb = jM(ab, 0, 0).barrierMax !== jM(ab - 1, 0, 0).barrierMax;
      return (0, mT.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, mT.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, mT.jsx)(HM.c, {
            itemName: Mb ? BM.Chestplate : YM,
            amount: 0
          })
        }), Ub(`${Fv}gearPerkLine`, {
          perk: Ub(`${Fv}${Ab}`)
        })]
      })
    }

    function Kv(bb, ab) {
      return null === bb ? ab : bb.value
    }

    function ov(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === bb || Ub - bb.atMs >= Ab ? null : Mb(bb.value, ab) ? bb.armed ? null : bb : bb.armed ? bb : {
        ...bb,
        armed: !0
      }
    }

    function lv(bb, ab) {
      const Ub = ab.filter((ab => {
        var Ub;
        return !1 !== (null === (Ub = bb.get(ab)) || void 0 === Ub ? void 0 : Ub.value)
      }));
      for (const [Ab, Mb] of bb) Mb.value && !ab.includes(Ab) && Ub.push(Ab);
      return Ub
    }

    function tv(bb, ab, Ub, Mb) {
      const [Tb, Eb] = (0, Ab.useState)((() => new Map)), Yb = () => {
        Eb((ab => function(bb, ab, Ub, Ab) {
          var Mb;
          let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Eb = null;
          for (const [Yb, Bb] of bb) {
            const Mb = ov(Bb, ab(Yb), Ub, Ab, Tb);
            Mb !== Bb && (Eb ??= new Map(bb), null === Mb ? Eb.delete(Yb) : Eb.set(Yb, Mb))
          }
          return null !== (Mb = Eb) && void 0 !== Mb ? Mb : bb
        }(ab, bb, Date.now(), Ub, Mb)))
      };
      (0, Ab.useEffect)((() => {
        Yb()
      }), [ab, Ub]), (0, Ab.useEffect)((() => {
        if (0 === Tb.size) return;
        const bb = Math.min(...[...Tb.values()].map((bb => bb.atMs))),
          ab = setTimeout(Yb, Math.max(0, bb + Ub - Date.now()) + 1);
        return () => {
          clearTimeout(ab)
        }
      }), [Tb, ab, Ub]);
      return [Tb, (ab, Ub) => {
        Eb((Ab => {
          const Tb = new Map(Ab);
          return Tb.set(ab, function(bb, ab, Ub) {
            return {
              value: bb,
              atMs: Ub,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(bb, ab)
            }
          }(Ub, bb(ab), Date.now(), Mb)), Tb
        }))
      }]
    }
    const wv = "buildAFactory2Game:";

    function sv(bb) {
      let {
        message: ab,
        itemNames: Ub
      } = bb;
      const Mb = oE(),
        {
          t: Tb
        } = (0, NM.A)(),
        [Eb, Yb] = (0, Ab.useState)(!1),
        [Bb, eb] = function(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hE;
          const [Ub, Ab] = tv((ab => bb.includes(ab)), bb, ab, Object.is);
          return [lv(Ub, bb), Ab]
        }(ab.baf2CoreBankPaused),
        vb = new Set(Bb),
        Lb = [...ab.baf2CoreBanked];
      for (const Ab of vb) Lb.some((bb => {
        let [ab] = bb;
        return ab === Ab
      })) || Lb.push([Ab, 0]);
      return 0 === Lb.length ? null : (0, mT.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, mT.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Eb,
          onClick: () => {
            Yb(!Eb)
          },
          children: [(0, mT.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Tb(`${wv}coreBankedLater`)
          }), (0, mT.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Lb.map((bb => {
              let [ab, Ub] = bb;
              const Ab = vb.has(ab);
              return (0, mT.jsxs)("span", {
                className: iM()({
                  Paused: Ab
                }),
                title: Ab ? Tb(`${wv}coreBankPausedTag`) : void 0,
                children: [(0, mT.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, mT.jsx)(HM.c, {
                    itemName: ab,
                    amount: 0
                  })
                }), Ub, Ab && (0, mT.jsx)(WM.e, {
                  name: "pause"
                })]
              }, ab)
            }))
          }), (0, mT.jsx)(WM.e, {
            name: Eb ? "angle-up" : "angle-down"
          })]
        }), Eb && (0, mT.jsxs)(mT.Fragment, {
          children: [(0, mT.jsx)("ul", {
            children: Lb.map((bb => {
              let [ab, Ab] = bb;
              const Eb = vb.has(ab);
              return (0, mT.jsxs)("li", {
                children: [(0, mT.jsxs)(hv, {
                  item: ab,
                  itemNames: Ub,
                  children: [(0, mT.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Ab
                  }), Eb && (0, mT.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Tb(`${wv}coreBankPausedTag`)
                  })]
                }), (0, mT.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, mT.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Ab,
                    onClick: () => {
                      Mb.send(`baf2corewithdraw ${Ab} ${ab}`)
                    },
                    children: Tb(`${wv}coreTake`)
                  }), (0, mT.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Mb.send(`${zb} ${ab}`), eb(ab, !Eb)
                    },
                    children: Tb(Eb ? `${wv}coreBankResume` : `${wv}coreBankStop`)
                  })]
                })]
              }, ab)
            }))
          }), (0, mT.jsx)("p", {
            className: "Baf2CoreHint",
            children: Tb(`${wv}coreBankNote`)
          })]
        })]
      })
    }
    const gv = "buildAFactory2Game:";

    function Cv(bb) {
      const ab = Math.max(0, Math.floor(bb));
      return `${Math.floor(ab/60)}:${String(ab%60).padStart(2,"0")}`
    }

    function Vv(bb) {
      let {
        item: ab
      } = bb;
      return (0, mT.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, mT.jsx)(HM.c, {
          itemName: ab,
          amount: 0
        })
      })
    }

    function Ov() {
      return (0, mT.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, mT.jsx)(WM.e, {
          name: "bolt"
        })
      })
    }

    function cv(bb) {
      let {
        charge: ab,
        hint: Ub,
        itemNames: Ab
      } = bb;
      const Mb = oE(),
        {
          t: Tb
        } = (0, NM.A)(),
        [Eb, Yb, Bb, eb, vb, Lb, Pb] = ab,
        [Xb, jb] = function(bb) {
          var ab;
          let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hE,
            Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Mb, Tb] = tv((() => bb), bb, Ub, Ab);
          return [Kv(null !== (ab = Mb.get("")) && void 0 !== ab ? ab : null, bb), bb => {
            Tb("", bb)
          }]
        }(Pb),
        Rb = Xb === Pb ? Lb : !Xb,
        kb = eb >= vb,
        yb = Eb.find((bb => {
          let [, ab, Ub] = bb;
          return Ub < .9 * ab
        }));
      let Zb = `${gv}coreChargeWaiting`,
        Db = {};
      return kb ? Zb = `${gv}coreChargeDone` : Xb ? Zb = `${gv}coreChargeStopped` : Rb && Ub ? (Zb = `${gv}${Ub[0]}`, Db = {
        item: AT(Tb, Ub[1])
      }) : Rb && yb ? (Zb = `${gv}coreChargeShort`, Db = {
        item: AT(Tb, yb[0])
      }) : Rb && Yb > 0 && !Bb ? Zb = `${gv}coreChargePower` : Rb && (Zb = `${gv}coreChargeRunning`), (0, mT.jsxs)("div", {
        className: iM()("Baf2CoreCharge", {
          Waiting: !Rb && !kb,
          Done: kb
        }),
        children: [(0, mT.jsxs)("h4", {
          children: [Tb(`${gv}coreChargeTitle`), (0, mT.jsx)("span", {
            children: Tb(`${gv}coreChargeProgress`, {
              done: Cv(eb),
              need: Cv(vb)
            })
          })]
        }), (0, mT.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, mT.jsx)("div", {
            style: {
              width: 100 * Math.min(eb, vb) / vb + "%"
            }
          })
        }), (0, mT.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Eb.map((bb => {
            var ab;
            let [Ub, Mb, Eb] = bb;
            const Yb = Eb >= .9 * Mb;
            return (0, mT.jsxs)("li", {
              className: iM()({
                Done: Yb,
                Short: Rb && !Yb
              }),
              children: [(0, mT.jsx)(Vv, {
                item: Ub
              }), (0, mT.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, mT.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, mT.jsx)(IM.c, {
                    text: null !== (ab = Ab[Ub]) && void 0 !== ab ? ab : Ub
                  }), (0, mT.jsx)("span", {
                    children: Tb(`${gv}coreChargeItem`, {
                      now: String(Eb),
                      need: String(Mb)
                    })
                  })]
                }), (0, mT.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, mT.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Eb/Mb)}%`
                    }
                  })
                })]
              })]
            }, Ub)
          })), Yb > 0 && (0, mT.jsxs)("li", {
            className: iM()("Baf2CoreChargePower", {
              Short: Rb && !Bb
            }),
            children: [(0, mT.jsx)(Ov, {}), (0, mT.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, mT.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, mT.jsx)("span", {
                  children: Tb(`${gv}coreChargePowerRow`, {
                    power: Jb(Yb)
                  })
                })
              })
            })]
          })]
        }), (0, mT.jsx)("p", {
          className: "Baf2CoreHint",
          children: Tb(Zb, Db)
        }), !kb && (Rb || Xb) && (0, mT.jsx)("button", {
          type: "button",
          className: iM()("Baf2CoreChargeToggle", {
            Stopped: Xb
          }),
          onClick: () => {
            Mb.send(ib), jb(!Xb)
          },
          children: Tb(Xb ? `${gv}coreChargeRestart` : `${gv}coreChargeStop`)
        })]
      })
    }

    function Jv(bb) {
      let {
        charge: ab,
        reached: Ub,
        itemNames: Ab
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)();
      return (0, mT.jsxs)("div", {
        className: iM()("Baf2CoreCharge", {
          Done: Ub
        }),
        children: [(0, mT.jsxs)("h4", {
          children: [Mb(`${gv}coreChargeTitle`), (0, mT.jsx)("span", {
            children: Mb(`${gv}coreChargeSpecTime`, {
              time: Cv(ab.seconds)
            })
          })]
        }), (0, mT.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [ab.items.map((bb => {
            var ab;
            let {
              item: Tb,
              amount: Eb
            } = bb;
            return (0, mT.jsxs)("li", {
              className: iM()({
                Done: Ub
              }),
              children: [(0, mT.jsx)(Vv, {
                item: Tb
              }), (0, mT.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, mT.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, mT.jsx)(IM.c, {
                    text: null !== (ab = Ab[Tb]) && void 0 !== ab ? ab : Tb
                  }), (0, mT.jsx)("span", {
                    children: Mb(`${gv}coreChargeSpecItem`, {
                      need: String(Eb)
                    })
                  })]
                })
              })]
            }, Tb)
          })), ab.powerPerS > 0 && (0, mT.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, mT.jsx)(Ov, {}), (0, mT.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, mT.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, mT.jsx)("span", {
                  children: Mb(`${gv}coreChargePowerRow`, {
                    power: Jb(ab.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const nv = "buildAFactory2Game:";

    function Sv(bb) {
      let {
        def: ab,
        reached: Ub,
        banked: Ab,
        itemNames: Mb
      } = bb;
      const {
        t: Tb
      } = (0, NM.A)();
      return (0, mT.jsx)("ul", {
        className: "Baf2CoreCost",
        children: ab.cost.map((bb => {
          let {
            item: ab,
            amount: Eb
          } = bb;
          const Yb = Ub ? 0 : Ab(ab);
          return (0, mT.jsx)("li", {
            children: (0, mT.jsx)(hv, {
              item: ab,
              itemNames: Mb,
              children: (0, mT.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: Yb > 0 ? Tb(`${nv}coreBankedFor`, {
                  amount: String(Yb),
                  total: String(Eb)
                }) : `\xd7${Eb}`
              })
            })
          }, ab)
        }))
      })
    }

    function bL(bb, ab) {
      if (ab >= vb()) return bb(`${nv}coreMaxTier`);
      const Ub = eb[ab + 1];
      return Ub && !Ub.startsWith("upgradeCore") ? bb(`${nv}coreGateQuest`, {
        quest: bb(`${nv}quest_${Ub}`)
      }) : bb(`${nv}coreGateClosed`)
    }

    function aL() {
      const {
        t: bb
      } = (0, NM.A)(), ab = oE(), Ub = (0, Ab.useRef)(null), Mb = (0, Ab.useRef)(Date.now());
      return Ce(!0, Ub), (0, mT.jsx)("div", {
        ref: Ub,
        className: "Baf2CoreGrow",
        children: (0, mT.jsx)(xE.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Mb.current >= 600 && ab.send(Db)
          },
          children: bb(`${nv}coreGrow`)
        })
      })
    }

    function UL(bb) {
      let {
        message: ab,
        itemNames: Ub,
        next: Ab
      } = bb;
      const Mb = oE(),
        {
          t: Tb
        } = (0, NM.A)(),
        Eb = ab.baf2CoreTier,
        Yb = ab.baf2CoreReady,
        Bb = ab.baf2CoreNeeds.filter((bb => {
          let [, ab, Ub, Ab] = bb;
          return Ab > 0 && ab < Ub
        })),
        eb = ab.baf2CoreNeeds.every((bb => {
          let [, ab, Ub] = bb;
          return ab >= Ub
        })),
        vb = ab.baf2CoreKeep;
      return (0, mT.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, mT.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [Yb && (0, mT.jsx)(aL, {}), (0, mT.jsx)("h3", {
            children: Tb(`${nv}coreBring`)
          }), (0, mT.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: ab.baf2CoreNeeds.map((bb => {
              let [ab, Ab, Eb, Yb] = bb;
              return (0, mT.jsxs)("li", {
                className: iM()({
                  Done: Ab >= Eb
                }),
                children: [(0, mT.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, mT.jsx)(HM.c, {
                    itemName: ab,
                    amount: 0
                  })
                }), (0, mT.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, mT.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, mT.jsx)(IM.c, {
                      text: Ub[ab]
                    }), (0, mT.jsxs)("span", {
                      children: [Ab, "/", Eb]
                    })]
                  }), (0, mT.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, mT.jsx)("div", {
                      style: {
                        width: 100 * Ab / Eb + "%"
                      }
                    }), Yb > 0 && (0, mT.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * Yb / Eb + "%"
                      }
                    })]
                  })]
                }), Yb > 0 && Ab < Eb && (0, mT.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Mb.send(`${xb} ${ab}`)
                  },
                  children: Tb(`${nv}coreDeposit`, {
                    amount: String(Yb)
                  })
                })]
              }, ab)
            }))
          }), ab.baf2CoreCharge && (0, mT.jsx)(cv, {
            charge: ab.baf2CoreCharge,
            hint: ab.baf2CoreChargeHint,
            itemNames: Ub
          }), !Yb && Bb.length > 1 && (0, mT.jsx)(xE.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Mb.send(Db)
            },
            children: Tb(`${nv}coreHandOver`)
          }), !Yb && void 0 !== vb && (0, mT.jsx)("p", {
            className: "Baf2CoreHint",
            children: Tb(`${nv}coreKeepRest`, {
              item: AT(Tb, vb)
            })
          }), !Yb && !eb && 0 === Bb.length && void 0 === vb && (0, mT.jsx)("p", {
            className: "Baf2CoreHint",
            children: Tb(`${nv}coreNothingHeld`)
          }), (0, mT.jsx)(sv, {
            message: ab,
            itemNames: Ub
          })]
        }), (0, mT.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mT.jsx)("h3", {
            children: Tb(`${nv}coreRewards`)
          }), (0, mT.jsx)(uv, {
            def: Ab,
            tier: Eb + 1,
            itemNames: Ub
          })]
        })]
      })
    }

    function AL(bb) {
      let {
        message: ab,
        itemNames: Ub,
        shown: Ab
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)(), Tb = ab.baf2CoreTier, Eb = yb(Ab), Yb = Ab <= Tb, Bb = new Map(ab.baf2CoreBanked), eb = !Zb(Tb, fb(ab)) && Ab === Tb;
      return (0, mT.jsxs)("div", {
        className: iM()("Baf2CoreBody", {
          Locked: !Yb
        }),
        children: [(0, mT.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mT.jsx)("h3", {
            children: Mb(Yb ? `${nv}coreItTook` : `${nv}coreItNeeds`)
          }), 0 === Eb.cost.length && (0, mT.jsx)("p", {
            className: "Baf2CoreHint",
            children: Mb(`${nv}coreTierStart`)
          }), Eb.cost.length > 0 && (0, mT.jsx)(Sv, {
            def: Eb,
            reached: Yb,
            banked: bb => {
              var ab;
              return function(bb, ab, Ub, Ab) {
                let Mb = bb;
                for (let Eb = ab + 2; Eb <= Ub; Eb++) {
                  var Tb;
                  const bb = yb(Eb).cost.find((bb => bb.item === Ab)),
                    ab = Math.min(Mb, null !== (Tb = null === bb || void 0 === bb ? void 0 : bb.amount) && void 0 !== Tb ? Tb : 0);
                  if (Eb === Ub) return ab;
                  Mb -= ab
                }
                return 0
              }(null !== (ab = Bb.get(bb)) && void 0 !== ab ? ab : 0, Tb, Ab, bb)
            },
            itemNames: Ub
          }), Eb.charge && (0, mT.jsx)(Jv, {
            charge: Eb.charge,
            reached: Yb,
            itemNames: Ub
          }), eb && (0, mT.jsxs)(mT.Fragment, {
            children: [(0, mT.jsx)("p", {
              className: "Baf2CoreHint",
              children: bL(Mb, Tb)
            }), (0, mT.jsx)(sv, {
              message: ab,
              itemNames: Ub
            })]
          })]
        }), (0, mT.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mT.jsx)("h3", {
            children: Mb(Yb ? `${nv}coreGave` : `${nv}coreLockedRewards`)
          }), (0, mT.jsx)(uv, {
            def: Eb,
            tier: Ab,
            itemNames: Ub
          })]
        })]
      })
    }

    function ML(bb, ab) {
      const {
        key: Ub,
        params: Ab
      } = Xb(ab - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return bb(`${nv}${Ub}`, Ab)
    }
    const TL = "buildAFactory2Game:",
      EL = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      YL = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function BL(bb) {
      let {
        view: ab,
        close: Ub,
        askIslands: Mb
      } = bb;
      const {
        t: Tb
      } = (0, NM.A)(), [Eb, Yb] = (0, Ab.useState)(!1);
      (0, Ab.useEffect)((() => {
        if (!Eb) return;
        const bb = window.setTimeout((() => {
          Yb(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(bb)
        }
      }), [Eb]);
      const {
        message: Bb,
        itemNames: eb
      } = ab, vb = Bb.baf2CoreTier, Lb = yb(vb), Pb = Zb(vb, fb(Bb)), [Rb, kb] = Bb.baf2CoreMachines, [Db, zb] = Bb.baf2CoreBelts, xb = Bb.baf2CoreStorage, ib = Bb.baf2CoreReady, [mb, pb] = (0, Ab.useState)(null), Nb = (null === mb || void 0 === mb ? void 0 : mb.at) === vb && mb.ready === ib ? mb.tier : Pb ? vb + 1 : vb;
      let Wb = "coreTierLocked";
      Nb <= vb ? Wb = "coreTierReached" : Nb === vb + 1 && (Wb = "coreTierNext");
      const Hb = Tb(`${TL}${yb(Nb).nameKey}`),
        Ib = Nb === vb + 1 ? Pb : null,
        db = Xb(Nb, {
          tier: Wb,
          stage: EL[Wb],
          atomic: YL[Wb]
        }),
        Fb = Tb(`${TL}${db.key}`, {
          ...db.params,
          name: Hb
        }),
        hb = Xb(vb, jb),
        Gb = Tb(`${TL}${hb.key}`, {
          ...hb.params,
          name: Tb(`${TL}${Lb.nameKey}`)
        });
      return (0, mT.jsx)(zE.d, {
        close: Ub,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, mT.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsxs)("div", {
              children: [(0, mT.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Tb(`${TL}coreTitle`)
              }), void 0 !== Bb.baf2CoreIslandName && (0, mT.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Bb.baf2CoreIslandName
              }), (0, mT.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, mT.jsx)("span", {
                  children: Gb
                }), (0, mT.jsx)("span", {
                  className: iM()({
                    Full: Rb >= kb
                  }),
                  children: Tb(`${TL}coreMachineCount`, {
                    amount: String(Rb),
                    total: String(kb)
                  })
                }), (0, mT.jsx)("span", {
                  className: iM()({
                    Full: Db >= zb
                  }),
                  children: Tb(`${TL}coreBeltCount`, {
                    amount: String(Db),
                    total: String(zb)
                  })
                }), void 0 !== xb && (0, mT.jsx)("span", {
                  className: iM()({
                    Full: xb[0] >= xb[1]
                  }),
                  children: Tb(`${TL}coreStorageCount`, {
                    amount: String(xb[0]),
                    total: String(xb[1])
                  })
                })]
              })]
            }), (0, mT.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Bb.baf2CoreIslands && (0, mT.jsx)(xE.g, {
                className: "Baf2CoreIslandsButton",
                disabled: Eb,
                onClick: () => {
                  Yb(!0), Mb()
                },
                children: Tb(`${TL}islandsOpenButton`)
              }), (0, mT.jsx)(xE.k, {
                onClick: Ub
              })]
            })]
          }), (0, mT.jsx)(dv, {
            tier: vb,
            shown: Nb,
            GP: bb => {
              pb({
                tier: bb,
                at: vb,
                ready: ib
              })
            }
          }), (0, mT.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Fb, Nb > vb + 1 && (0, mT.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: ML(Tb, Nb)
            })]
          }), 6 === Nb && Nb > vb && (0, mT.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Tb(`${TL}coreStagesNote`)
          }), 11 === Nb && Nb > vb && (0, mT.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Tb(`${TL}coreAtomicNote`)
          }), Ib && (0, mT.jsx)(UL, {
            message: Bb,
            itemNames: eb,
            next: Ib
          }), !Ib && (0, mT.jsx)(AL, {
            message: Bb,
            itemNames: eb,
            shown: Nb
          })]
        })
      })
    }
    const eL = {
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
    const vL = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: YT,
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

    function LL(bb) {
      return bb.baf2DropCometOreOnly ? "dropCometOre" : bb.baf2DropCometIsotope ? "seed" === bb.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function PL(bb) {
      let {
        message: ab,
        quests: Ub,
        close: Mb,
        leave: Tb
      } = bb;
      const Eb = oE(),
        {
          t: Yb
        } = (0, NM.A)(),
        Bb = (0, av.i)(QM, Ub.get()),
        eb = function(bb) {
          var ab;
          if (!hb(bb.tutorial)) return null;
          const Ub = bb.rows.find((bb => bb.current)),
            Ab = Ub ? eL[Ub.key] : void 0;
          return null !== (ab = null !== Ab && void 0 !== Ab ? Ab : bb.side ? eL[bb.side.row.key] : void 0) && void 0 !== ab ? ab : null
        }(Bb),
        vb = null === Bb.tier || vT(Bb.tier),
        Lb = vb ? vL : vL.filter((bb => {
          let {
            item: ab
          } = bb;
          return ab !== YT
        })),
        [Pb, Xb] = (0, Ab.useState)(null),
        jb = null !== Pb && void 0 !== Pb ? Pb : !ab.baf2DropFoundSalvage && vb,
        Rb = ab.baf2DropRuinDistance,
        kb = ab.baf2DropComet,
        yb = ab.baf2DropOldWorks,
        Zb = ab.baf2DropGrove,
        Db = function(bb) {
          return 2 + Number(void 0 !== bb.baf2DropComet) + Number(!!bb.baf2DropOwedComet || void 0 !== bb.baf2DropOwedWaitMinutes) + Number(void 0 !== bb.baf2DropDigDistance) + Number(void 0 !== bb.baf2DropOldWorks) + Number(void 0 !== bb.baf2DropGrove)
        }(ab),
        zb = bb => {
          Eb.send(function(bb) {
            return `baf2drop ${bb}`
          }(bb)), Tb()
        };
      let xb = Yb("buildAFactory2Game:dropRuinNone");
      if (null !== Rb) {
        let bb = ab.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        ab.baf2DropRuinOldWorks && (bb = "dropRuinOldWorks");
        const Ub = void 0 === ab.baf2DropRuinCluster ? Yb("buildAFactory2Game:dropRuinOpen") : Yb("buildAFactory2Game:dropRuinCluster", {
          count: String(ab.baf2DropRuinCluster)
        });
        xb = `${Yb(`buildAFactory2Game:${bb}`,{distance:String(Rb)})} ${Ub}`
      }
      let ib = Yb("buildAFactory2Game:dropBelowDescription");
      void 0 !== ab.baf2DropBelowLook && (ib = Yb("buildAFactory2Game:dropBelowLook", {
        look: Yb(ab.baf2DropBelowLook)
      }));
      const fb = "buildAFactory2Game:wildsRegion_survivorGrove" === ab.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        mb = zT(Yb, 60 * function(bb) {
          const [ab, Ub] = (0, Ab.useState)((() => Date.now())), [Mb, Tb] = (0, Ab.useState)(ab);
          return (0, Ab.useEffect)((() => {
            const bb = Date.now();
            Ub(bb), Tb(bb)
          }), [bb]), (0, Ab.useEffect)((() => {
            const bb = window.setInterval((() => {
              Tb(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(bb)
            }
          }), []), Math.max(1, bb.baf2DropRenewMinutes - Math.floor((Mb - ab) / 6e4))
        }(ab)),
        pb = function(bb, ab, Ub) {
          return "ruin" === bb && !Ub || "owed" === bb && !ab.baf2DropOwedComet ? null : bb
        }(eb, ab, null !== Rb),
        Nb = function(bb) {
          for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
          return iM()("Baf2DropTile", ...Ub, {
            Wanted: pb === bb
          })
        };
      return (0, mT.jsx)(zE.d, {
        close: Mb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mT.jsxs)("section", {
          className: iM()("Baf2Panel Baf2DropMap", {
            Many: Db >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsxs)("div", {
              children: [(0, mT.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: Yb("buildAFactory2Game:dropMapTitle")
              }), (0, mT.jsx)("p", {
                children: Yb("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, mT.jsx)(xE.k, {
              onClick: Mb
            })]
          }), (0, mT.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== kb && (0, mT.jsxs)(xE.x, {
              className: Nb("comet", "Baf2DropComet"),
              onClick: () => {
                zb("comet")
              },
              children: [(0, mT.jsx)("strong", {
                children: Yb("buildAFactory2Game:dropComet")
              }), (0, mT.jsx)("span", {
                children: Yb(`buildAFactory2Game:${LL(ab)}`, {
                  distance: String(kb)
                })
              })]
            }), ab.baf2DropOwedComet && (0, mT.jsxs)(xE.x, {
              className: Nb("owed", "Baf2DropComet"),
              onClick: () => {
                zb("owed")
              },
              children: [(0, mT.jsx)("strong", {
                children: Yb("buildAFactory2Game:dropOwedComet")
              }), (0, mT.jsx)("span", {
                children: ab.baf2DropOwedIsotope ? Yb("buildAFactory2Game:dropOwedIsotopeDescription") : Yb("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== ab.baf2DropOwedWaitMinutes && (0, mT.jsxs)(xE.x, {
              className: Nb("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, mT.jsx)("strong", {
                children: Yb("buildAFactory2Game:dropOwedComet")
              }), (0, mT.jsx)("span", {
                children: Yb("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(ab.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, mT.jsxs)(xE.g, {
              className: Nb("below"),
              onClick: () => {
                zb("below")
              },
              children: [(0, mT.jsx)("strong", {
                children: Yb("buildAFactory2Game:dropBelow")
              }), (0, mT.jsx)("span", {
                children: ib
              })]
            }), void 0 !== ab.baf2DropDigDistance && (0, mT.jsxs)(xE.s, {
              className: Nb("dig"),
              onClick: () => {
                zb("dig")
              },
              children: [(0, mT.jsx)("strong", {
                children: Yb("buildAFactory2Game:dropDig")
              }), (0, mT.jsx)("span", {
                children: Yb("buildAFactory2Game:dropDigDescription", {
                  distance: String(ab.baf2DropDigDistance),
                  y: DT(ab.baf2DropDigY)
                })
              })]
            }), void 0 !== Zb && (0, mT.jsxs)(xE.s, {
              className: Nb("grove", "Baf2DropGrove"),
              onClick: () => {
                zb("grove")
              },
              children: [(0, mT.jsx)("strong", {
                children: Yb("buildAFactory2Game:dropGrove")
              }), (0, mT.jsx)("span", {
                children: Yb(`buildAFactory2Game:${fb}`, {
                  distance: String(Zb)
                })
              })]
            }), (0, mT.jsxs)(xE.m, {
              className: Nb("ruin"),
              disabled: null === Rb,
              onClick: () => {
                zb("ruin")
              },
              children: [(0, mT.jsx)("strong", {
                children: Yb("buildAFactory2Game:dropRuin")
              }), (0, mT.jsx)("span", {
                children: xb
              })]
            }), void 0 !== yb && (0, mT.jsxs)(xE.D, {
              className: Nb("works"),
              onClick: () => {
                zb("works")
              },
              children: [(0, mT.jsx)("strong", {
                children: Yb("buildAFactory2Game:dropOldWorks")
              }), (0, mT.jsx)("span", {
                children: Yb("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(yb)
                })
              })]
            })]
          }), (0, mT.jsx)("p", {
            className: "Baf2DropRenew",
            children: Yb("buildAFactory2Game:dropRenew", {
              time: mb
            })
          }), (0, mT.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: jb,
            onToggle: bb => {
              bb.currentTarget.open !== jb && Xb(bb.currentTarget.open)
            },
            children: [(0, mT.jsx)("summary", {
              children: Yb("buildAFactory2Game:dropSalvageWhat")
            }), (0, mT.jsx)("p", {
              children: Yb("buildAFactory2Game:dropSalvageIntro")
            }), (0, mT.jsx)("ul", {
              children: Lb.map((bb => {
                let {
                  item: ab,
                  nameKey: Ub,
                  useKey: Ab,
                  params: Mb
                } = bb;
                return (0, mT.jsxs)("li", {
                  children: [(0, mT.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, mT.jsx)(HM.c, {
                      itemName: ab,
                      amount: 0
                    })
                  }), (0, mT.jsxs)("span", {
                    children: [(0, mT.jsx)("strong", {
                      children: Yb(Ub)
                    }), ": ", Yb(Ab, Mb)]
                  })]
                }, ab)
              }))
            })]
          })]
        })
      })
    }
    const XL = "buildAFactory2Game:";

    function jL(bb, ab) {
      return bb.sendIslandEdit(`baf2coopleave ${ab.baf2IslandId}`)
    }

    function RL(bb) {
      let {
        card: ab,
        canRename: Ub,
        done: Mb,
        t: Tb
      } = bb;
      const Eb = oE(),
        [Yb, Bb] = (0, Ab.useState)(ab.baf2IslandName),
        eb = ze(Yb),
        vb = "" === eb || xe(eb),
        Lb = () => {
          !vb && Ub && (eb !== ab.baf2IslandName ? Mb(Eb.sendIslandEdit(`baf2islandrename ${ab.baf2IslandId} ${eb}`)) : Mb(null))
        },
        Pb = () => {
          Mb(null)
        };
      return (0, mT.jsxs)("div", {
        className: "Baf2IslandForm",
        ...se(Pb),
        children: [(0, mT.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Tb(`${XL}islandsRenameLabel`), (0, mT.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Yb,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: ge,
            onChange: bb => {
              Bb(bb.target.value)
            },
            ...we(Lb, Pb)
          })]
        }), "" === eb && (0, mT.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Tb(`${XL}islandsRenameEmpty`)
        }), xe(eb) && (0, mT.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Tb(`${XL}islandsNameReserved`)
        }), (0, mT.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, mT.jsx)(xE.s, {
            disabled: vb || !Ub,
            onClick: Lb,
            children: Tb(`${XL}islandsRenameSave`)
          }), (0, mT.jsx)(xE.g, {
            onClick: Pb,
            children: Tb(`${XL}islandsCancel`)
          })]
        })]
      })
    }

    function kL(bb) {
      let {
        card: ab,
        canDelete: Ub,
        done: Mb,
        t: Tb
      } = bb;
      const Eb = oE(),
        [Yb, Bb] = (0, Ab.useState)(""),
        eb = function(bb, ab) {
          return ze(bb).toLowerCase() === ze(ab).toLowerCase()
        }(Yb, ab.baf2IslandName),
        vb = () => {
          eb && Ub && Mb(Eb.sendIslandEdit(`baf2islanddelete ${ab.baf2IslandId}`))
        },
        Lb = () => {
          Mb(null)
        },
        Pb = he("name"),
        [Xb, jb = ""] = Tb(`${XL}islandsDeleteConfirm`, {
          name: Pb
        }).split(Pb);
      return (0, mT.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...se(Lb),
        children: [(0, mT.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, mT.jsxs)("span", {
            children: [Xb, (0, mT.jsx)("strong", {
              children: ab.baf2IslandName
            }), jb]
          }), (0, mT.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Yb,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: ge,
            onChange: bb => {
              Bb(bb.target.value)
            },
            ...we(vb, Lb)
          })]
        }), Ke(ab) && (0, mT.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Tb(`${XL}islandsDeleteLeftBack`)
        }), (0, mT.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, mT.jsx)(xE.D, {
            disabled: !eb || !Ub,
            onClick: vb,
            children: Tb(`${XL}islandsDeleteForGood`)
          }), (0, mT.jsx)(xE.g, {
            onClick: Lb,
            children: Tb(`${XL}islandsCancel`)
          })]
        })]
      })
    }

    function yL(bb) {
      let {
        members: ab,
        t: Ub
      } = bb;
      const Ab = ab.length;
      return (0, mT.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, mT.jsxs)("span", {
          children: [1 === Ab ? Ub(`${XL}islandsPlayersOne`) : Ub(`${XL}islandsPlayers`, {
            count: String(Ab)
          }), " "]
        }), ab.map(((bb, ab) => (0, mT.jsxs)("span", {
          className: iM()("Baf2IslandMember", {
            Here: bb.baf2MemberHere
          }),
          title: bb.baf2MemberHere ? Ub(`${XL}islandsPlayerHere`) : void 0,
          children: [bb.baf2MemberName, ab < Ab - 1 ? ", " : ""]
        }, bb.baf2MemberKey)))]
      })
    }

    function ZL(bb) {
      let {
        card: ab,
        answered: Ub,
        nowMs: Mb,
        t: Tb
      } = bb;
      const Eb = oE(),
        [Yb, Bb] = (0, Ab.useState)(new Map),
        eb = Ke(ab);
      if (!eb) return null;
      return (0, mT.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, mT.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Tb(`${XL}islandsLeftTitle`)
        }), (0, mT.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: eb.left.map((bb => {
            const Ab = bb.baf2LeftKey,
              vb = le(Yb.get(Ab), Ub, Mb),
              Lb = function(bb) {
                return 1 === bb ? [`${ke}islandsLeftItemsOne`] : [`${ke}islandsLeftItems`, {
                  count: String(bb)
                }]
              }(bb.baf2LeftItems);
            return (0, mT.jsx)("li", {
              className: iM()("Baf2IslandPerson", {
                Pending: vb
              }),
              children: (0, mT.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, mT.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: bb.baf2LeftName
                }), (0, mT.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Tb(Lb[0], Lb[1])
                }), eb.claim && (0, mT.jsx)(xE.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: vb,
                  onClick: () => {
                    (bb => {
                      const Ub = Eb.sendIslandEdit(`baf2coopclaim ${ab.baf2IslandId} ${bb}`);
                      Bb((ab => new Map(ab).set(bb, {
                        atMs: Date.now(),
                        answer: Ub
                      })))
                    })(Ab)
                  },
                  children: Tb(`${XL}islandsClaim`)
                })]
              })
            }, Ab)
          }))
        }), eb.goThere && (0, mT.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Tb(`${XL}islandsClaimGoThere`)
        })]
      })
    }

    function DL(bb) {
      let {
        card: ab,
        view: Ub,
        blocked: Mb,
        maxIslands: Tb,
        answered: Eb,
        nowMs: Yb,
        done: Bb,
        openSocial: eb,
        t: vb
      } = bb;
      const Lb = oE(),
        [Pb, Xb] = (0, Ab.useState)(new Map),
        [jb, Rb] = (0, Ab.useState)(new Map),
        [kb, yb] = (0, Ab.useState)(null),
        Zb = (0, Ab.useRef)(null);
      Oe(Zb);
      const Db = ab.baf2IslandId,
        zb = ab.baf2IslandCoop,
        xb = null !== zb && void 0 !== zb && zb.baf2CoopMembers.some((bb => bb.baf2MemberKey === kb)) ? kb : null,
        ib = function(bb, ab) {
          const Ub = bb.baf2IslandCoop;
          return Ub && oe(Ub) || null !== ab ? void 0 : bb.baf2IslandInvitable
        }(ab, Mb),
        fb = function(bb, ab) {
          const Ub = bb.baf2IslandCoop;
          return Ub && oe(Ub) ? {
            key: `${ke}islandsCoopFull`,
            params: {
              max: String(Ub.baf2CoopMax)
            }
          } : void 0 !== bb.baf2IslandInvitable && null === ab || Ub && !Ub.baf2CoopManageHere ? null : "degraded" === ab || "stuck" === ab ? {
            key: `${ke}islandsInviteNotLoaded`
          } : null === ab || function(bb) {
            return "notHome" === bb || "wilds" === bb || "visiting" === bb
          }(ab) || pe(ab) ? {
            key: `${ke}islandsInviteGoThere`
          } : {
            key: `${ke}islandsInviteBusy`
          }
        }(ab, Mb),
        mb = () => {
          var bb;
          yb(null), null === (bb = Zb.current) || void 0 === bb || bb.focus()
        };
      return (0, mT.jsxs)("div", {
        ref: Zb,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...se(null === xb ? Bb : mb),
        children: [zb && (0, mT.jsxs)(mT.Fragment, {
          children: [(0, mT.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: vb(`${XL}islandsPlayersTitle`, {
              count: String(zb.baf2CoopMembers.length),
              max: String(zb.baf2CoopMax)
            })
          }), (0, mT.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: zb.baf2CoopMembers.map(((bb, ab) => {
              const Ab = bb.baf2MemberKey,
                Mb = le(Pb.get(Ab), Eb, Yb);
              return (0, mT.jsxs)("li", {
                className: iM()("Baf2IslandPerson", {
                  Pending: Mb
                }),
                children: [(0, mT.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, mT.jsx)("span", {
                    className: iM()("Baf2IslandPersonName", {
                      Here: bb.baf2MemberHere
                    }),
                    children: bb.baf2MemberName
                  }), bb.baf2MemberHere && (0, mT.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: vb(`${XL}islandsPlayerHere`)
                  }), 0 === ab && (0, mT.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: vb(`${XL}islandsPlayerOwner`)
                  }), Ub.remove && ab > 0 && !Mb && xb !== Ab && (0, mT.jsx)(xE.F, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var bb;
                      yb(Ab), null === (bb = Zb.current) || void 0 === bb || bb.focus()
                    },
                    children: vb(`${XL}islandsRemove`)
                  })]
                }), xb === Ab && (0, mT.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, mT.jsx)("p", {
                    children: Ge(vb, `${XL}islandsRemoveConfirm`, {
                      player: bb.baf2MemberName
                    })
                  }), (0, mT.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, mT.jsx)(xE.D, {
                      onClick: () => {
                        (bb => {
                          const ab = Lb.sendIslandEdit(`baf2coopremove ${Db} ${bb.baf2MemberKey}`);
                          Xb((Ub => new Map(Ub).set(bb.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: ab
                          }))), mb()
                        })(bb)
                      },
                      children: vb(`${XL}islandsRemoveYes`)
                    }), (0, mT.jsx)(xE.g, {
                      onClick: mb,
                      children: vb(`${XL}islandsCancel`)
                    })]
                  })]
                })]
              }, Ab)
            }))
          })]
        }), (void 0 !== ib || null !== fb) && (0, mT.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: vb(`${XL}islandsInviteTitle`)
        }), !zb && (void 0 !== ib || null !== fb) && (0, mT.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: vb(`${XL}islandsInviteShareNote`)
        }), 0 === (null === ib || void 0 === ib ? void 0 : ib.length) && (0, mT.jsx)(zL, {
          openSocial: eb,
          t: vb
        }), void 0 !== ib && ib.length > 0 && (0, mT.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: ib.map((bb => {
            const ab = !0 === bb.baf2InvitableSent || le(jb.get(bb.baf2InvitableId), Eb, Yb);
            return (0, mT.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, mT.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, mT.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: bb.baf2InvitableName
                }), bb.baf2InvitableFull && !ab && (0, mT.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: vb(`${XL}islandsInviteTheirFull`, {
                    max: String(Tb)
                  })
                }), (ab || !bb.baf2InvitableFull) && (0, mT.jsx)(xE.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: ab,
                  onClick: () => {
                    (bb => {
                      const ab = Lb.sendIslandEdit(`baf2coopinvite ${Db} ${bb}`);
                      Rb((Ub => new Map(Ub).set(bb, {
                        atMs: Date.now(),
                        answer: ab
                      })))
                    })(bb.baf2InvitableId)
                  },
                  children: vb(ab ? `${XL}islandsInvited` : `${XL}islandsInvite`)
                })]
              })
            }, bb.baf2InvitableId)
          }))
        }), fb && (0, mT.jsx)(ne, {
          note: fb,
          t: vb
        }), (0, mT.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, mT.jsx)(xE.g, {
            onClick: Bb,
            children: vb(`${XL}islandsDone`)
          })
        })]
      })
    }

    function zL(bb) {
      let {
        openSocial: ab,
        t: Ub
      } = bb;
      return (0, mT.jsxs)(mT.Fragment, {
        children: [(0, mT.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Ub(ab ? `${XL}islandsInviteNobody` : `${XL}islandsInviteNobodyGuest`)
        }), ab && (0, mT.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, mT.jsx)(xE.g, {
            onClick: ab,
            children: Ub("socialBar:social")
          })
        })]
      })
    }

    function xL(bb) {
      let {
        className: ab,
        text: Ub,
        ConfirmButton: Mb,
        confirmLabel: Tb,
        canConfirm: Eb,
        send: Yb,
        done: Bb,
        t: eb
      } = bb;
      const vb = (0, Ab.useRef)(null);
      Oe(vb);
      const Lb = () => {
        Bb(null)
      };
      return (0, mT.jsxs)("div", {
        ref: vb,
        tabIndex: -1,
        className: iM()("Baf2IslandForm", ab),
        ...se(Lb),
        children: [(0, mT.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Ub
        }), (0, mT.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, mT.jsx)(Mb, {
            disabled: !Eb,
            onClick: () => {
              Eb && Bb(Yb())
            },
            children: Tb
          }), (0, mT.jsx)(xE.g, {
            onClick: Lb,
            children: eb(`${XL}islandsCancel`)
          })]
        })]
      })
    }

    function iL(bb) {
      return "hidden" !== bb
    }

    function fL(bb) {
      var ab, Ub;
      let {
        card: Mb,
        keepOwn: Tb,
        blocked: Eb,
        maxIslands: Yb,
        serverNowMs: Bb,
        nowMs: eb,
        actions: vb,
        full: Lb,
        waits: Pb,
        answered: Xb,
        mode: jb,
        setMode: Rb,
        pending: kb,
        onSent: yb,
        switchTo: Zb,
        leave: Db,
        coopOn: zb,
        openSocial: xb,
        t: ib
      } = bb;
      const fb = oE(),
        mb = Mb.baf2IslandActive,
        pb = mb ? null : function(bb, ab) {
          if (bb <= 0) return null;
          const Ub = ab - bb;
          if (Ub < RT) return [`${ke}islandsPlayedJustNow`];
          if (Ub < ye) return [`${ke}islandsPlayedMinutes`, {
            minutes: String(Math.floor(Ub / RT))
          }];
          if (Ub < Ze) return [`${ke}islandsPlayedHours`, {
            hours: String(Math.floor(Ub / ye))
          }];
          const Ab = Math.floor(Ub / Ze);
          return 1 === Ab ? [`${ke}islandsPlayedDay`] : [`${ke}islandsPlayedDays`, {
            days: String(Ab)
          }]
        }(Mb.baf2IslandLastPlayedMs, Bb),
        Nb = void 0 === (Wb = Mb.baf2IslandItems) ? null : 0 === Wb ? [`${ke}islandsItemsNone`] : 1 === Wb ? [`${ke}islandsItemsOne`] : [`${ke}islandsItems`, {
          count: String(Wb)
        }];
      var Wb;
      const Hb = function(bb) {
          return bb ? 1 === bb ? [`${ke}islandsWaitingOne`] : [`${ke}islandsWaiting`, {
            count: String(bb)
          }] : null
        }(Mb.baf2IslandWaiting),
        Ib = Mb.baf2IslandUnreadable,
        db = Mb.baf2IslandCoop,
        Fb = re(Mb, vb, Tb, Lb, zb, Eb),
        hb = (0, Ab.useRef)(null);
      Ce(null !== jb, hb);
      const Gb = () => {
          var bb;
          Rb(null), null === (bb = hb.current) || void 0 === bb || bb.focus()
        },
        Qb = (bb, ab) => {
          Gb(), null !== bb && yb(bb, ab)
        },
        qb = (bb, ab) => ib(`${XL}${bb}`, {
          time: zT(ib, ab)
        });
      return (0, mT.jsxs)("li", {
        ref: hb,
        tabIndex: -1,
        className: iM()("Baf2IslandCard", {
          Active: mb,
          Pending: kb,
          Shared: void 0 !== db
        }),
        children: [(0, mT.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, mT.jsx)("strong", {
            className: "Baf2IslandName",
            children: Mb.baf2IslandName
          }), mb && (0, mT.jsx)("span", {
            className: "Baf2IslandBadge",
            children: ib(`${XL}islandsOnThis`)
          }), db && (0, mT.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: ib(`${XL}islandsShared`)
          })]
        }), "member" === (null === db || void 0 === db ? void 0 : db.baf2CoopRole) && (0, mT.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Ge(ib, `${XL}islandsSharedBy`, {
            owner: db.baf2CoopOwner
          })
        }), void 0 !== Ib && (0, mT.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: ib("newer" === Ib ? `${XL}islandsUnreadable` : `${XL}islandsDamaged`)
        }), "corrupt" === Ib && Lb && (0, mT.jsx)("p", {
          className: "Baf2IslandStats",
          children: ib(`${XL}islandsDamagedFull`)
        }), void 0 === Ib && (0, mT.jsxs)(mT.Fragment, {
          children: [(0, mT.jsx)(Je, {
            tier: Mb.baf2IslandTier,
            t: ib
          }), (0, mT.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, mT.jsx)("span", {
              children: 1 === Mb.baf2IslandQuestsDone ? ib(`${XL}islandsQuestsDoneOne`) : ib(`${XL}islandsQuestsDone`, {
                count: String(Mb.baf2IslandQuestsDone)
              })
            }), (0, mT.jsx)("span", {
              children: 1 === Mb.baf2IslandMachines ? ib(`${XL}islandsMachinesOne`) : ib(`${XL}islandsMachines`, {
                count: String(Mb.baf2IslandMachines)
              })
            }), Nb && (0, mT.jsx)("span", {
              children: ib(Nb[0], Nb[1])
            }), Hb && (0, mT.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: ib(Hb[0], Hb[1])
            }), pb && (0, mT.jsx)("span", {
              children: ib(pb[0], pb[1])
            })]
          })]
        }), db && void 0 === db.baf2CoopState && "people" !== jb && (0, mT.jsx)(yL, {
          members: db.baf2CoopMembers,
          t: ib
        }), null === jb && (0, mT.jsx)(ZL, {
          card: Mb,
          answered: Xb,
          nowMs: eb,
          t: ib
        }), Fb.note && (0, mT.jsx)(ne, {
          note: Fb.note,
          className: iM()({
            Unreachable: void 0 !== (null === db || void 0 === db ? void 0 : db.baf2CoopState)
          }),
          t: ib
        }), "rename" === jb && (0, mT.jsx)(RL, {
          card: Mb,
          canRename: "enabled" === Fb.rename,
          done: Qb,
          t: ib
        }), "delete" === jb && (0, mT.jsx)(kL, {
          card: Mb,
          canDelete: "enabled" === Fb.delete,
          done: bb => {
            Qb(bb, db ? "delete" : void 0)
          },
          t: ib
        }), "people" === jb && (0, mT.jsx)(DL, {
          card: Mb,
          view: Fb,
          blocked: Eb,
          maxIslands: Yb,
          answered: Xb,
          nowMs: eb,
          done: Gb,
          openSocial: xb,
          t: ib
        }), "leave" === jb && (0, mT.jsx)(xL, {
          className: "Leave",
          text: Ge(ib, `${XL}islandsLeaveConfirm`, {
            island: Mb.baf2IslandName,
            owner: null !== (ab = null === (Ub = Mb.baf2IslandCoop) || void 0 === Ub ? void 0 : Ub.baf2CoopOwner) && void 0 !== ab ? ab : ""
          }),
          ConfirmButton: xE.D,
          confirmLabel: ib(`${XL}islandsLeaveYes`),
          canConfirm: "enabled" === Fb.leave,
          send: () => jL(fb, Mb),
          done: bb => {
            Qb(bb, "leave"), null !== bb && mb && Db()
          },
          t: ib
        }), "unshare" === jb && (0, mT.jsx)(xL, {
          className: "Unshare",
          text: Ge(ib, `${XL}islandsStopSharingConfirm`, {
            island: Mb.baf2IslandName
          }),
          ConfirmButton: xE.s,
          confirmLabel: ib(`${XL}islandsStopSharing`),
          canConfirm: "enabled" === Fb.unshare,
          send: () => fb.sendIslandEdit(`baf2coopunshare ${Mb.baf2IslandId}`),
          done: bb => {
            Qb(bb), null !== bb && Db()
          },
          t: ib
        }), null === jb && !kb && (0, mT.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Mb.baf2IslandName,
          children: [iL(Fb.switch) && (0, mT.jsx)(xE.s, {
            disabled: "enabled" !== Fb.switch,
            onClick: Zb,
            children: "tryAgain" === Fb.switchLabel ? ib(`${XL}islandsTryAgain`) : Pb.switch > 0 ? qb("islandsSwitchIn", Pb.switch) : ib(`${XL}islandsSwitch`)
          }), iL(Fb.rename) && (0, mT.jsx)(xE.g, {
            disabled: "enabled" !== Fb.rename,
            onClick: () => {
              Rb("rename")
            },
            children: ib(`${XL}islandsRename`)
          }), iL(Fb.people) && (0, mT.jsx)(xE.g, {
            disabled: "enabled" !== Fb.people,
            onClick: () => {
              Rb("people")
            },
            children: ib("players" === Fb.peopleLabel ? `${XL}islandsPlayersButton` : `${XL}islandsInviteButton`)
          }), iL(Fb.unshare) && (0, mT.jsx)(xE.g, {
            disabled: "enabled" !== Fb.unshare,
            onClick: () => {
              Rb("unshare")
            },
            children: ib(`${XL}islandsStopSharing`)
          }), iL(Fb.dismiss) && (0, mT.jsx)(xE.g, {
            disabled: "enabled" !== Fb.dismiss,
            onClick: () => {
              yb(jL(fb, Mb), "dismiss"), mb && Db()
            },
            children: ib(`${XL}islandsDismiss`)
          }), iL(Fb.leave) && (0, mT.jsx)(xE.F, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Fb.leave,
            onClick: () => {
              Rb("leave")
            },
            children: mb && Pb.switch > 0 ? qb("islandsLeaveIn", Pb.switch) : ib(`${XL}islandsLeave`)
          }), iL(Fb.delete) && (0, mT.jsx)(xE.F, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Fb.delete,
            onClick: () => {
              Rb("delete")
            },
            children: Pb.change > 0 && Fb.deleteWaits ? qb("islandsDeleteIn", Pb.change) : ib(`${XL}islandsDelete`)
          })]
        })]
      })
    }
    const mL = "buildAFactory2Game:";

    function pL(bb) {
      let {
        invite: ab,
        actions: Ub,
        full: Mb,
        maxIslands: Tb,
        waitSeconds: Eb,
        focus: Yb,
        focused: Bb,
        join: eb,
        decline: vb,
        t: Lb
      } = bb;
      const [Pb, Xb] = (0, Ab.useState)(!1), jb = (0, Ab.useRef)(null);
      Ce(Pb, jb), (0, Ab.useEffect)((() => {
        var bb;
        Yb && (Xb(!0), null === (bb = jb.current) || void 0 === bb || bb.focus(), Bb())
      }), [Yb, Bb]);
      const Rb = function(bb, ab, Ub, Ab, Mb) {
          return Ub ? {
            join: !1,
            note: {
              key: `${ke}islandsJoinTooMany`,
              params: {
                max: String(Ab)
              }
            }
          } : bb.baf2InvitePlayers >= Mb ? {
            join: !1,
            note: {
              key: `${ke}islandsJoinFull`
            }
          } : {
            join: ab.switch,
            note: null
          }
        }(ab, Ub, Mb, Tb, 10),
        kb = ab.baf2InviteIsland,
        yb = ab.baf2InvitePlayers,
        Zb = () => {
          var bb;
          Xb(!1), null === (bb = jb.current) || void 0 === bb || bb.focus()
        },
        Db = Eb > 0 && null === Rb.note ? Lb(`${mL}islandsJoinIn`, {
          time: zT(Lb, Eb)
        }) : Lb(`${mL}islandsJoin`);
      return (0, mT.jsxs)("li", {
        ref: jb,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Pb ? se(Zb) : {},
        children: [(0, mT.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, mT.jsx)("strong", {
            className: "Baf2IslandName",
            children: kb
          })
        }), (0, mT.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Ge(Lb, `${mL}islandsInvitedBy`, {
            owner: ab.baf2InviteOwner
          })
        }), (0, mT.jsx)(Je, {
          tier: ab.baf2InviteTier,
          t: Lb
        }), (0, mT.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, mT.jsx)("span", {
            children: 1 === yb ? Lb(`${mL}islandsPlayersCountOne`) : Lb(`${mL}islandsPlayersCount`, {
              count: String(yb)
            })
          })
        }), Rb.note && (0, mT.jsx)(ne, {
          note: Rb.note,
          t: Lb
        }), Pb && (0, mT.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Ge(Lb, `${mL}islandsJoinConfirm`, {
            island: kb
          })
        }), !Pb && (0, mT.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": kb,
          children: [(0, mT.jsx)(xE.s, {
            disabled: !Rb.join,
            onClick: () => {
              var bb;
              Xb(!0), null === (bb = jb.current) || void 0 === bb || bb.focus()
            },
            children: Db
          }), (0, mT.jsx)(xE.g, {
            onClick: vb,
            children: Lb(`${mL}islandsDecline`)
          })]
        }), Pb && (0, mT.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, mT.jsx)(xE.s, {
            disabled: !Rb.join,
            onClick: eb,
            children: Lb(`${mL}islandsJoinYes`)
          }), (0, mT.jsx)(xE.g, {
            onClick: Zb,
            children: Lb(`${mL}islandsCancel`)
          })]
        })]
      })
    }

    function NL(bb) {
      let {
        invites: ab,
        actions: Ub,
        full: Ab,
        maxIslands: Mb,
        waitSeconds: Tb,
        focus: Eb,
        focused: Yb,
        leave: Bb,
        declined: eb,
        t: vb
      } = bb;
      const Lb = oE();
      return (0, mT.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, mT.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: vb(`${mL}islandsInvitesTitle`)
        }), (0, mT.jsx)("ul", {
          className: "Baf2IslandCards",
          children: ab.map((bb => {
            const ab = bb.baf2InviteId;
            return (0, mT.jsx)(pL, {
              invite: bb,
              actions: Ub,
              full: Ab,
              maxIslands: Mb,
              waitSeconds: Tb,
              focus: Eb === ab,
              focused: Yb,
              join: () => {
                Lb.send(`baf2coopaccept ${ab}`), Bb()
              },
              decline: () => {
                Lb.send(`baf2coopdecline ${ab}`), eb(ab)
              },
              t: vb
            }, ab)
          }))
        })]
      })
    }
    const WL = "buildAFactory2Game:";

    function HL(bb) {
      let {
        cards: ab,
        activeName: Ub,
        canStart: Mb,
        waitSeconds: Tb,
        leave: Eb,
        t: Yb
      } = bb;
      const Bb = oE(),
        [eb, vb] = (0, Ab.useState)(!1),
        [Lb, Pb] = (0, Ab.useState)(""),
        Xb = (0, Ab.useRef)(null);
      Ce(eb, Xb), (0, Ab.useEffect)((() => {
        var bb;
        eb && (null === (bb = Xb.current) || void 0 === bb || bb.focus())
      }), [eb]);
      const jb = ie(ab),
        Rb = ze(Lb),
        kb = xe(Rb),
        yb = () => {
          Mb && !kb && (Bb.send("" === Rb || Rb === jb ? Ob : `${Ob} ${Rb}`), Eb())
        },
        Zb = () => {
          var bb;
          vb(!1), null === (bb = Xb.current) || void 0 === bb || bb.focus()
        };
      return (0, mT.jsxs)("li", {
        ref: Xb,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...eb ? se(Zb) : {},
        children: [(0, mT.jsx)("strong", {
          className: "Baf2IslandName",
          children: Yb(`${WL}islandsNewTitle`)
        }), !eb && (0, mT.jsx)("p", {
          className: "Baf2IslandStats",
          children: Yb(`${WL}islandsNewNote`)
        }), eb && (0, mT.jsxs)(mT.Fragment, {
          children: [(0, mT.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Ge(Yb, `${WL}islandsNewConfirm`, {
              name: Ub
            })
          }), (0, mT.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [Yb(`${WL}islandsNewNameLabel`), (0, mT.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Lb,
              placeholder: jb,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: ge,
              onChange: bb => {
                Pb(bb.target.value)
              },
              ...we(yb, Zb)
            })]
          }), kb && (0, mT.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: Yb(`${WL}islandsNameReserved`)
          })]
        }), (0, mT.jsxs)("div", {
          className: iM()("Baf2IslandButtons", {
            Stacked: eb
          }),
          children: [(0, mT.jsx)(xE.s, {
            disabled: !Mb || eb && kb,
            onClick: () => {
              if (!eb) return Pb(jb), void vb(!0);
              yb()
            },
            children: Tb > 0 ? Yb(`${WL}islandsNewIn`, {
              time: zT(Yb, Tb)
            }) : Yb(eb ? `${WL}islandsNewConfirmButton` : `${WL}islandsNew`)
          }), eb && (0, mT.jsx)(xE.g, {
            onClick: Zb,
            children: Yb(`${WL}islandsCancel`)
          })]
        })]
      })
    }

    function IL(bb) {
      var ab, Ub;
      let {
        message: Mb,
        arrivedAtMs: Tb,
        close: Eb,
        leave: Yb,
        openSocial: Bb
      } = bb;
      const eb = oE(),
        {
          t: vb
        } = (0, NM.A)(),
        Lb = ce(1e3),
        [Pb, Xb] = (0, Ab.useState)(null),
        [jb, Rb] = (0, Ab.useState)(new Map),
        [kb, yb] = (0, Ab.useState)(new Set),
        Zb = Mb.baf2IslandCards,
        Db = function(bb, ab, Ub, Ab) {
          return (null !== bb && void 0 !== bb ? bb : []).filter((bb => ab + bb.baf2InviteLeftMs > Ub && !Ab.has(bb.baf2InviteId)))
        }(Mb.baf2IslandsInvites, Tb, Lb, kb),
        zb = Db.map((bb => bb.baf2InviteId)).join(" "),
        xb = (0, Ab.useRef)(null),
        ib = Ve(xb);
      (0, Ab.useEffect)((() => {
        var bb, ab;
        null !== (bb = xb.current) && void 0 !== bb && bb.contains(document.activeElement) || (null === (ab = xb.current) || void 0 === ab || ab.focus())
      }), [Mb, zb]), (0, Ab.useEffect)((() => {
        Rb((bb => function(bb, ab, Ub, Ab) {
          const Mb = new Map;
          for (const Tb of ab) {
            const ab = bb.get(Tb.baf2IslandId);
            ab && (void 0 !== ab.untilGone || Ab < ab.answer) && Ie(ab, Tb, Ub) && Mb.set(Tb.baf2IslandId, ab)
          }
          return Mb.size === bb.size ? bb : Mb
        }(bb, Mb.baf2IslandCards, Date.now(), Mb.baf2IslandsAnswered)))
      }), [Mb]);
      const fb = De(Tb, Mb.baf2IslandsWaitMs, Lb),
        mb = Mb.baf2IslandsBlocked,
        pb = Ne(mb, fb),
        Nb = function(bb, ab) {
          const Ub = Ne(bb, 0);
          return {
            switch: Ub.switch ? ab : 0,
            change: Ub.change ? ab : 0
          }
        }(mb, fb),
        Wb = Zb.length >= Mb.baf2IslandsMax,
        Hb = Zb.length > 0,
        Ib = function(bb, ab, Ub) {
          return bb + Math.max(0, Ub - ab)
        }(Mb.baf2IslandsNowMs, Tb, Lb),
        db = null !== (ab = null === (Ub = Zb.find((bb => bb.baf2IslandActive))) || void 0 === Ub ? void 0 : Ub.baf2IslandName) && void 0 !== ab ? ab : "",
        Fb = function(bb) {
          const ab = bb.filter(ue).length;
          return ab <= 1 && ab < bb.length
        }(Zb),
        hb = !0 === Mb.baf2IslandsCoop,
        Gb = function(bb, ab) {
          const Ub = bb.find((bb => bb.baf2IslandActive)),
            Ab = null === Ub || void 0 === Ub ? void 0 : Ub.baf2IslandCoop;
          return Ub && "member" === (null === Ab || void 0 === Ab ? void 0 : Ab.baf2CoopRole) ? {
            key: `${ke}islandsKeepOwnMember`,
            names: {
              owner: Ab.baf2CoopOwner,
              island: Ub.baf2IslandName
            }
          } : {
            key: ab ? `${ke}islandsKeepOwn` : `${ke}islandsKeepOwnSolo`
          }
        }(Zb, hb),
        [Qb, qb] = (0, Ab.useState)(null);
      (0, Ab.useEffect)((() => {
        void 0 !== Mb.baf2IslandsFocusInvite && qb(Mb.baf2IslandsFocusInvite)
      }), [Mb]);
      const ub = (0, Ab.useCallback)((() => {
          qb(null)
        }), []),
        rb = Pb ? Zb.find((bb => bb.baf2IslandId === Pb.id)) : void 0,
        Kb = Pb && rb && "hidden" !== re(rb, pb, Fb, Wb, hb, mb)[Pb.mode] ? Pb : null;
      return (0, mT.jsx)(zE.d, {
        close: Eb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, mT.jsxs)("section", {
          ref: xb,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: ib ? {
            marginTop: `${ib.marginTop}px`,
            maxHeight: `${ib.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsxs)("div", {
              children: [(0, mT.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: vb(`${WL}islandsTitle`)
              }), Hb && (0, mT.jsx)("p", {
                children: vb(`${WL}islandsSubtitle`, {
                  count: String(Zb.length),
                  max: String(Mb.baf2IslandsMax)
                })
              })]
            }), (0, mT.jsx)(xE.k, {
              ariaLabel: vb(`${WL}islandsClose`),
              onClick: Eb
            })]
          }), (0, mT.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== mb && (0, mT.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Ge(vb, fe(mb, me(Zb)), {
                island: db
              })
            }), Hb && Db.length > 0 && (0, mT.jsx)(NL, {
              invites: Db,
              actions: pb,
              full: Wb,
              maxIslands: Mb.baf2IslandsMax,
              waitSeconds: Nb.switch,
              focus: Qb,
              focused: ub,
              leave: Yb,
              declined: bb => {
                yb((ab => new Set(ab).add(bb)))
              },
              t: vb
            }), Hb && (0, mT.jsxs)(mT.Fragment, {
              children: [Wb && (0, mT.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: vb(`${WL}islandsFull`, {
                  max: String(Mb.baf2IslandsMax)
                })
              }), (0, mT.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Ge(vb, Gb.key, Gb.names)
              }), (0, mT.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Zb.map((bb => {
                  const ab = bb.baf2IslandId;
                  return (0, mT.jsx)(fL, {
                    card: bb,
                    keepOwn: Fb,
                    coopOn: hb,
                    openSocial: Bb,
                    blocked: mb,
                    maxIslands: Mb.baf2IslandsMax,
                    serverNowMs: Ib,
                    nowMs: Lb,
                    actions: pb,
                    full: Wb,
                    waits: Nb,
                    answered: Mb.baf2IslandsAnswered,
                    mode: (null === Kb || void 0 === Kb ? void 0 : Kb.id) === ab ? Kb.mode : null,
                    setMode: bb => {
                      Xb(null === bb ? null : {
                        id: ab,
                        mode: bb
                      })
                    },
                    pending: Ie(jb.get(ab), bb, Lb),
                    onSent: (Ub, Ab) => {
                      Rb((Mb => {
                        const Tb = {
                          atMs: Date.now(),
                          from: bb.baf2IslandName,
                          answer: Ub
                        };
                        return new Map(Mb).set(ab, Ab ? {
                          ...Tb,
                          untilGone: Ab
                        } : Tb)
                      }))
                    },
                    leave: Yb,
                    switchTo: () => {
                      eb.send(`baf2islandswitch ${ab}`), Yb()
                    },
                    t: vb
                  }, ab)
                })), !Wb && (0, mT.jsx)(HL, {
                  cards: Zb,
                  activeName: db,
                  canStart: pb.change,
                  waitSeconds: Nb.change,
                  leave: Yb,
                  t: vb
                })]
              })]
            })]
          })]
        })
      })
    }
    var dL = Ub(4690);
    const FL = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        bM: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      hL = Object.keys(FL),
      GL = new Set([...Object.keys(Oa), ...[...Ga.Press.recipes, ...Ga["Wire Mill"].recipes].map((bb => bb.output))]),
      QL = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      qL = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      uL = / Bar$|Alloy$/,
      rL = /Porkchop|Beef|Mutton|Venison|Steak/,
      KL = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const oL = (0, Ab.memo)((function(bb) {
      let {
        item: ab,
        name: Ub,
        amount: Ab,
        selected: Mb,
        small: Tb,
        onPick: Eb
      } = bb;
      return (0, mT.jsxs)("button", {
        type: "button",
        className: iM()("Baf2TermTile", {
          On: Mb,
          Small: Tb
        }),
        "aria-label": `${Ub}: ${Ab}`,
        "aria-pressed": Mb,
        onClick: () => {
          Eb(ab)
        },
        children: [(0, mT.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, mT.jsx)(HM.c, {
            itemName: ab,
            amount: 0
          })
        }), (0, mT.jsx)("span", {
          className: "Baf2TermCount",
          children: ZT(Ab, 1e4)
        }), !Tb && (0, mT.jsx)("span", {
          className: "Baf2TermName",
          children: Ub
        })]
      })
    }));

    function lL(bb) {
      let {
        store: ab,
        close: Ub,
        send: Mb
      } = bb;
      const {
        t: Tb
      } = (0, NM.A)(), {
        isTouchScreen: Eb
      } = (0, DM.n)(["isTouchScreen"]);
      ! function(bb) {
        const [ab, Ub] = (0, Ab.useState)(bb.version);
        (0, Ab.useEffect)((() => (Ub(bb.version), bb.subscribe((() => {
          Ub(bb.version)
        })))), [bb])
      }(ab);
      const [Yb, Bb] = (0, Ab.useState)("all"), [eb, vb] = (0, Ab.useState)(!1), [Lb, Pb] = (0, Ab.useState)(""), [Xb, jb] = (0, Ab.useState)(""), [Rb, kb] = (0, Ab.useState)(null), [yb, Zb] = (0, Ab.useState)(!1), [Db, zb, xb] = function() {
        const bb = (0, Ab.useRef)(null),
          [ab, Ub] = (0, Ab.useState)(!1),
          Mb = () => {
            const ab = bb.current;
            Ub(null !== ab && ab.scrollLeft + ab.clientWidth < ab.scrollWidth - 1)
          };
        return (0, Ab.useEffect)(Mb), (0, Ab.useEffect)((() => {
          const ab = bb.current;
          if (!ab) return;
          const Ub = new ResizeObserver(Mb);
          return Ub.observe(ab), () => {
            Ub.disconnect()
          }
        }), []), [bb, ab, Mb]
      }(), ib = (0, Ab.useMemo)((() => new Map), [Tb]), fb = bb => {
        let ab = ib.get(bb);
        return void 0 === ab && (ab = function(bb, ab) {
          const Ub = /^(.+) \((.+)\)$/.exec(bb);
          return Ub ? ab(Ub[2], Ub[1]) : bb
        }(AT(Tb, bb), ((bb, ab) => Tb("buildAFactory2Game:terminalTileKind", {
          kind: bb,
          base: ab
        }))), ib.set(bb, ab)), ab
      }, mb = ab.isReadOnly(), pb = yb && !mb, Nb = ab.recent(), Wb = ab.items(), Hb = Xb.trim().toLowerCase(), Ib = pb ? ab.heldItems(Rb) : ("recent" === Yb ? Nb : Wb).filter((bb => {
        const ab = fb(bb);
        return ("all" === Yb || "recent" === Yb || function(bb) {
          return LT(bb) ? "farm" : QL.test(bb) ? "nuclear" : uL.test(bb) ? "bars" : rL.test(bb) ? "farm" : qL.test(bb) ? "bM" : GL.has(bb) ? "parts" : KL.test(bb) ? "farm" : "other"
        }(bb) === Yb) && ("" === Hb || ab.toLowerCase().includes(Hb)) && ("" === Lb || ab.toUpperCase().startsWith(Lb))
      })), db = new Set(Wb.map((bb => fb(bb).charAt(0).toUpperCase()))), Fb = bb => pb ? ab.heldAmount(bb) : ab.amount(bb), hb = !pb && "recent" !== Yb && Nb.length > 0, Gb = function(bb, ab) {
        return null !== bb && ab.includes(bb) ? bb : null
      }(Rb, hb ? [...Ib, ...Nb] : Ib), Qb = null === Gb ? 0 : ab.amount(Gb), qb = null === Gb ? 0 : Fb(Gb), ub = (0, Ab.useCallback)((bb => {
        kb((ab => ab === bb ? null : bb))
      }), []), rb = bb => qb > 0 || pb && null === Gb && "fill" === bb && Ib.length > 0, Kb = pb ? [
        ["one", Tb("buildAFactory2Game:terminalStoreOne")],
        ["stack", Tb("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Tb(null === Gb ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Tb("buildAFactory2Game:terminalTakeOne")],
        ["stack", Tb("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Tb("buildAFactory2Game:terminalFill")]
      ], ob = pb ? Tb("buildAFactory2Game:terminalStoreEmpty") : "" !== Lb ? Tb("buildAFactory2Game:terminalEmptyLetter", {
        letter: Lb
      }) : "" !== Hb ? Tb("buildAFactory2Game:terminalEmptySearch", {
        query: Xb
      }) : Tb("buildAFactory2Game:terminalEmpty");
      return (0, mT.jsx)(zE.d, {
        close: Ub,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, mT.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsxs)("div", {
              children: [(0, mT.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Tb(ab.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, mT.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, mT.jsx)("span", {
                  className: iM()({
                    Off: pb
                  }),
                  children: Tb("buildAFactory2Game:terminalSubtitle", {
                    count: String(ab.siloCount())
                  })
                }), !mb && (0, mT.jsx)("span", {
                  className: iM()({
                    Off: !pb
                  }),
                  children: Tb("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !mb && (0, mT.jsx)(dL.e, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Tb("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Tb("buildAFactory2Game:terminalModeStore")
              }],
              value: pb ? "store" : "take",
              onChange: bb => {
                Zb("store" === bb), kb(null)
              },
              ariaLabel: Tb("buildAFactory2Game:terminalModes")
            }), (0, mT.jsx)(xE.k, {
              onClick: Ub
            })]
          }), (0, mT.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, mT.jsxs)("div", {
              className: iM()("Baf2TermTools", {
                Hidden: pb
              }),
              children: [(0, mT.jsx)("div", {
                ref: Db,
                className: iM()("Baf2TermChips", {
                  MoreRight: zb
                }),
                onScroll: xb,
                children: eb ? (0, mT.jsxs)(mT.Fragment, {
                  children: [(0, mT.jsx)("button", {
                    type: "button",
                    "aria-label": Tb("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      vb(!1), Pb("")
                    },
                    children: "\u2190"
                  }), [...db].sort().map((bb => (0, mT.jsx)("button", {
                    type: "button",
                    className: iM()({
                      On: Lb === bb
                    }),
                    onClick: () => {
                      Pb(Lb === bb ? "" : bb)
                    },
                    children: bb
                  }, bb)))]
                }) : (0, mT.jsxs)(mT.Fragment, {
                  children: [(0, mT.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      vb(!0)
                    },
                    children: Tb("buildAFactory2Game:terminalLetters")
                  }), hL.map((bb => (0, mT.jsx)("button", {
                    type: "button",
                    className: iM()({
                      On: Yb === bb
                    }),
                    onClick: () => {
                      Bb(bb)
                    },
                    children: Tb(FL[bb])
                  }, bb)))]
                })
              }), !Eb && (0, mT.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Xb,
                placeholder: Tb("buildAFactory2Game:terminalSearch"),
                "aria-label": Tb("buildAFactory2Game:terminalSearch"),
                onChange: bb => {
                  jb(bb.target.value)
                },
                onKeyDown: bb => {
                  bb.stopPropagation()
                }
              }), (0, mT.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Tb("buildAFactory2Game:terminalResort"),
                title: Tb("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  ab.resort()
                },
                children: "\u21c5"
              })]
            }), hb && (0, mT.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, mT.jsx)("span", {
                children: Tb(FL.recent)
              }), Nb.map((bb => (0, mT.jsx)(oL, {
                item: bb,
                name: fb(bb),
                amount: ab.amount(bb),
                selected: Gb === bb,
                small: !0,
                onPick: ub
              }, bb)))]
            }), (0, mT.jsx)("div", {
              className: "Baf2TermTiles",
              children: Ib.length > 0 ? Ib.map((bb => (0, mT.jsx)(oL, {
                item: bb,
                name: fb(bb),
                amount: Fb(bb),
                selected: Gb === bb,
                onPick: ub
              }, bb))) : (0, mT.jsx)("p", {
                className: "Baf2TermEmpty",
                children: ob
              })
            }), (0, mT.jsxs)("div", {
              className: iM()("Baf2TermActions", {
                Hidden: pb && 0 === Ib.length
              }),
              children: [(0, mT.jsx)("span", {
                className: "Baf2TermPicked",
                children: mb ? (0, mT.jsxs)(mT.Fragment, {
                  children: [null !== Gb && Qb > 0 ? fb(Gb) : Tb("buildAFactory2Game:terminalVisiting"), (0, mT.jsx)("small", {
                    children: Tb("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Gb ? (0, mT.jsxs)(mT.Fragment, {
                  children: [fb(Gb), (0, mT.jsx)("small", {
                    children: Tb("buildAFactory2Game:terminalStored", {
                      amount: Qb.toLocaleString()
                    })
                  })]
                }) : Tb(pb ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !mb && Kb.map((bb => {
                let [Ub, Ab] = bb;
                const Tb = "fill" === Ub ? xE.m : xE.g;
                return (0, mT.jsx)(Tb, {
                  className: "Baf2TermTake",
                  disabled: !rb(Ub),
                  onClick: () => {
                    (bb => {
                      rb(bb) && Mb(null === Gb ? ab.putAll() : pb ? ab.put(bb, Gb) : ab.take(bb, Gb))
                    })(Ub)
                  },
                  children: Ab
                }, Ub)
              }))]
            })]
          })]
        })
      })
    }

    function tL(bb) {
      let {
        kind: ab,
        icon: Ub,
        label: Ab,
        number: Mb,
        preview: Tb,
        note: Eb,
        tone: Yb = null,
        share: Bb,
        onExplain: eb
      } = bb;
      return (0, mT.jsxs)("button", {
        type: "button",
        className: iM()("NxLane", ab, {
          Warn: "warn" === Yb,
          Danger: "danger" === Yb
        }),
        onClick: eb,
        children: [(0, mT.jsxs)("span", {
          className: "NxLaneHead",
          children: [Ub, (0, mT.jsx)("span", {
            className: "NxLaneLabel",
            children: Ab
          })]
        }), (0, mT.jsxs)("span", {
          className: "NxLaneNum",
          children: [Mb, Tb && (0, mT.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Tb]
          })]
        }), (0, mT.jsx)("span", {
          className: "NxLaneNote",
          children: Eb
        }), void 0 !== Bb && (0, mT.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Bb)) + "%"
          }
        })]
      })
    }

    function wL(bb) {
      let {
        kind: ab,
        step: Ub,
        short: Ab,
        planned: Mb
      } = bb;
      return (0, mT.jsx)("i", {
        className: iM()("NxPipe", ab, `Step${Ub}`, {
          Short: Ab,
          Planned: Mb
        }),
        "aria-hidden": "true"
      })
    }

    function sL(bb) {
      let {
        max: ab,
        bands: Ub,
        ticks: Ab,
        now: Mb,
        settle: Tb,
        settleTone: Eb,
        onExplain: Yb
      } = bb;
      const Bb = bb => Math.max(0, Math.min(ab, bb)) / ab * 100 + "%";
      let eb = 0;
      return (0, mT.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: Yb,
        children: [(0, mT.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [Ub.map((bb => {
            const ab = {
              bottom: Bb(eb),
              height: `calc(${Bb(bb.upTo)} - ${Bb(eb)})`
            };
            return eb = bb.upTo, (0, mT.jsx)("i", {
              className: iM()("NxGaugeBand", bb.kind),
              style: ab
            }, bb.kind)
          })), null !== Mb && (0, mT.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Bb(Mb)
            }
          }), void 0 !== Tb && null !== Tb && (0, mT.jsx)("i", {
            className: iM()("NxGaugeSettle", {
              Bad: "bad" === Eb
            }),
            style: {
              bottom: Bb(Tb)
            }
          })]
        }), (0, mT.jsx)("span", {
          className: "NxGaugeTicks",
          children: Ab.map((bb => (0, mT.jsx)("small", {
            style: {
              bottom: Bb(bb)
            },
            children: bb
          }, bb)))
        })]
      })
    }

    function gL(bb) {
      const [ab, Ub] = (0, Ab.useState)(null), [Mb, Tb] = (0, Ab.useState)((() => {
        try {
          return null === window.localStorage.getItem(bb)
        } catch {
          return !1
        }
      })), Eb = (0, Ab.useRef)(null);
      (0, Ab.useEffect)((() => () => {
        null !== Eb.current && clearTimeout(Eb.current)
      }), []);
      const Yb = (0, Ab.useCallback)((ab => {
          Ub(ab), Tb(!1);
          try {
            window.localStorage.setItem(bb, "1")
          } catch {}
          null !== Eb.current && clearTimeout(Eb.current), Eb.current = setTimeout((() => {
            Eb.current = null, Ub(null)
          }), 5e3)
        }), [bb]),
        Bb = (0, Ab.useCallback)(((ab, Ub) => {
          const Ab = `${bb}:${ab}`;
          try {
            if (null !== window.localStorage.getItem(Ab)) return;
            window.localStorage.setItem(Ab, "1")
          } catch {
            return
          }
          Yb(Ub)
        }), [Yb, bb]);
      return {
        explained: ab,
        hinting: Mb,
        explain: Yb,
        explainOnce: Bb
      }
    }

    function CL(bb) {
      let {
        text: ab,
        tone: Ub,
        explained: Ab
      } = bb;
      return (0, mT.jsxs)("p", {
        className: iM()("NxStatus", null === Ab ? Ub : "Explain"),
        "aria-live": "polite",
        children: [null !== Ab && (0, mT.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Ab && void 0 !== Ab ? Ab : ab]
      })
    }
    const VL = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function OL(bb, ab) {
      const Ub = Number(bb[ab]);
      return 1 === Ub || 2 === Ub || 3 === Ub ? Ub : 0
    }

    function cL(bb) {
      return !!xB("reactor", bb.baf2RxNeed) || void 0 !== bb.baf2RxLayout && bb.baf2RxNeed.some((bb => {
        let [ab, Ub] = bb;
        return Ub > 0 && VL.includes(ab)
      }))
    }
    const JL = "buildAFactory2Game:";

    function nL(bb) {
      let {
        status: ab,
        store: Ub,
        busy: Ab
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)();
      return function(bb) {
        return 0 !== (bb.baf2RxFlags & Ra) && (!bb.baf2RxFormed || void 0 !== bb.baf2RxLayout)
      }(ab) ? (0, mT.jsx)(xE.m, {
        disabled: !cL(ab) || Ab,
        onClick: () => {
          Ub.tap("fill", (() => {
            Ub.send("fill")
          }))
        },
        children: Mb(void 0 !== ab.baf2RxLayout ? `${JL}rxFillLayout` : `${JL}rxFill`)
      }) : null
    }

    function SL(bb) {
      let {
        status: ab,
        store: Ub,
        readOnly: Mb,
        bare: Tb = !1
      } = bb;
      const {
        t: Eb
      } = (0, NM.A)(), Yb = ab.baf2RxLayout, [Bb, eb, vb] = ab.baf2RxDims, Lb = (0, Ab.useMemo)((() => {
        if (void 0 === Yb) return 0;
        const bb = Uint8Array.from(Yb, ((bb, ab) => OL(Yb, ab)));
        return SY([Bb - 2, eb - 2, vb - 2], bb).max
      }), [Yb, Bb, eb, vb]);
      return void 0 === Yb ? null : (0, mT.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Tb && (0, mT.jsx)("span", {
          className: "Baf2RxHint",
          children: Eb(`${JL}rxLayoutLine`, {
            amount: HB(Lb)
          })
        }), !Mb && (0, mT.jsx)(xE.g, {
          onClick: () => {
            Ub.send("layout", 0)
          },
          children: Eb(`${JL}rxLayoutHide`)
        })]
      })
    }
    const bP = "buildAFactory2Game:",
      aP = {
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

    function UP(bb) {
      let {
        id: ab,
        title: Ub,
        body: Ab,
        bodyParams: Mb,
        yes: Tb,
        cancel: Eb,
        confirm: Yb
      } = bb;
      const {
        t: Bb
      } = (0, NM.A)();
      return (0, mT.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": ab,
        children: [(0, mT.jsx)("h3", {
          id: ab,
          children: Bb(Ub)
        }), (0, mT.jsx)("p", {
          children: Bb(Ab, Mb)
        }), (0, mT.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, mT.jsx)(xE.h, {
            onClick: Eb,
            children: Bb(`${bP}rxCancel`)
          }), (0, mT.jsx)(xE.D, {
            onClick: Yb,
            children: Bb(Tb)
          })]
        })]
      })
    }

    function AP(bb) {
      const [ab, Ub] = (0, Ab.useState)((() => bb.get()));
      return (0, Ab.useEffect)((() => (Ub(bb.get()), bb.subscribe((() => {
        Ub(bb.get())
      })))), [bb]), ab
    }

    function MP(bb) {
      let {
        kind: ab,
        cap: Ub,
        busy: Mb = !1,
        whyNot: Tb = null,
        apart: Eb
      } = bb;
      const {
        t: Yb
      } = (0, NM.A)(), [Bb, eb] = (0, Ab.useState)(!1), vb = null !== Tb, Lb = (0, Ab.useRef)(null);
      if ((0, Ab.useEffect)((() => {
          vb && eb(!1)
        }), [vb]), (0, Ab.useLayoutEffect)((() => {
          var bb;
          const ab = null === (bb = Lb.current) || void 0 === bb ? void 0 : bb.firstElementChild;
          vb ? null === ab || void 0 === ab || ab.setAttribute("aria-disabled", "true") : Mb || null === ab || void 0 === ab || ab.removeAttribute("aria-disabled")
        })), !Bb || vb) return (0, mT.jsx)("span", {
        ref: Lb,
        className: "Baf2RxApartWrap",
        children: (0, mT.jsx)(xE.h, {
          disabled: Mb,
          className: iM()({
            Baf2RxNotYet: vb
          }),
          onClick: () => {
            Tb ? Tb() : eb(!0)
          },
          children: Yb(`${bP}rxApart`)
        })
      });
      const Pb = "battery" === ab,
        Xb = void 0 === Ub ? `${bP}batApartConfirmBodyPlan` : `${bP}batApartConfirmBody`;
      return (0, mT.jsx)(UP, {
        id: `baf2ApartTitle_${ab}`,
        title: Pb ? `${bP}batApartConfirmTitle` : `${bP}rxApartConfirmTitle`,
        body: Pb ? Xb : `${bP}rxApartConfirmBody`,
        bodyParams: void 0 === Ub ? void 0 : {
          cap: Ub
        },
        yes: `${bP}rxApart`,
        cancel: () => {
          eb(!1)
        },
        confirm: () => {
          eb(!1), Eb()
        }
      })
    }

    function TP(bb) {
      let {
        mood: ab,
        big: Ub
      } = bb;
      const Ab = aP[ab],
        Mb = [];
      return Ab.rows.forEach(((bb, ab) => {
        for (let Ub = 0; Ub < bb.length; Ub++) "." !== bb[Ub] && Mb.push((0, mT.jsx)("rect", {
          x: Ub + 1,
          y: ab + 1,
          width: 1,
          height: 1,
          fill: "w" === bb[Ub] ? "#8fd3ff" : Ab.colour
        }, `${Ub},${ab}`))
      })), (0, mT.jsxs)("svg", {
        className: iM()("Baf2RxFace", {
          Big: Ub,
          Alarm: "alarm" === ab
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, mT.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, mT.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Mb]
      })
    }

    function EP(bb) {
      return yT(bb, "+").replace("+", "")
    }

    function YP(bb) {
      let {
        kind: ab,
        dims: Ub,
        cap: Ab,
        disabled: Mb,
        compact: Tb,
        resize: Eb
      } = bb;
      const {
        t: Yb
      } = (0, NM.A)(), {
        min: Bb,
        max: eb
      } = KU(ab), vb = Math.min(Ab, eb), Lb = [`${bP}rxWide`, `${bP}rxTall`, `${bP}rxDeep`], Pb = {
        w: String(Ub[0]),
        h: String(Ub[1]),
        d: String(Ub[2]),
        blocks: String(WB(ab, Ub))
      };
      return (0, mT.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, mT.jsx)("div", {
          className: "Baf2RxSteppers",
          children: Ub.map(((bb, ab) => {
            const Tb = Ab => {
                const Mb = [Ub[0], Ub[1], Ub[2]];
                Mb[ab] = bb + Ab, Eb(Mb)
              },
              Pb = bb >= vb;
            return (0, mT.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, mT.jsx)("button", {
                type: "button",
                "aria-label": Yb(`${bP}rxSmaller`),
                disabled: Mb || bb <= Bb,
                onClick: () => {
                  Tb(-1)
                },
                children: "\u2212"
              }), (0, mT.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [bb, (0, mT.jsx)("small", {
                  children: Yb(Lb[ab])
                })]
              }), (0, mT.jsx)("button", {
                type: "button",
                "aria-label": Yb(`${bP}rxBigger`),
                disabled: Mb || Pb,
                onClick: () => {
                  Tb(1)
                },
                children: Pb && Ab < eb ? "\ud83d\udd12" : "+"
              })]
            }, Lb[ab])
          }))
        }), !Tb && (0, mT.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === ab ? Yb(`${bP}rxSizeLine`, {
            ...Pb,
            water: String(NB(Ub))
          }) : Yb(`${bP}batSizeLine`, Pb)
        })]
      })
    }

    function BP(bb) {
      let {
        on: ab,
        label: Ub,
        disabled: Ab,
        locked: Mb,
        pending: Tb,
        toggle: Eb
      } = bb;
      return (0, mT.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": ab,
        disabled: Ab,
        "aria-disabled": Mb || void 0,
        className: iM()("Baf2RxSwitch", {
          On: ab,
          Locked: Mb,
          Pending: Tb
        }),
        onClick: Eb,
        children: [(0, mT.jsx)("span", {
          className: "Baf2RxKnob"
        }), Ub]
      })
    }
    const eP = "buildAFactory2Game:",
      vP = .95;

    function LP(bb, ab) {
      return 0 !== (bb.baf2RxFlags & ab)
    }

    function PP(bb) {
      return "cryo" === bb ? nb.h : nb.k
    }

    function XP(bb) {
      var ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb;
      return bb.baf2RxCryo ? {
        CP: "cryo",
        usePerS: null !== (Mb = bb.baf2RxCryoUse) && void 0 !== Mb ? Mb : 0,
        needPerS: null !== (Tb = bb.baf2RxCryoNeed) && void 0 !== Tb ? Tb : 0,
        inPerS: null !== (Eb = bb.baf2RxCryoIn) && void 0 !== Eb ? Eb : 0,
        stored: null !== (Yb = bb.baf2RxCryoStored) && void 0 !== Yb ? Yb : 0,
        makersShort: null !== (Bb = bb.baf2RxMixersShort) && void 0 !== Bb ? Bb : 0,
        waterBeside: null !== (eb = bb.baf2RxWaterUse) && void 0 !== eb ? eb : 0,
        pct: bb.baf2RxWater
      } : {
        CP: "water",
        usePerS: null !== (ab = bb.baf2RxWaterUse) && void 0 !== ab ? ab : 0,
        needPerS: null !== (Ub = bb.baf2RxWaterNeed) && void 0 !== Ub ? Ub : 0,
        inPerS: bb.baf2RxWaterIn,
        stored: bb.baf2RxWaterStored,
        makersShort: null !== (Ab = bb.baf2RxCondensersShort) && void 0 !== Ab ? Ab : 0,
        waterBeside: 0,
        pct: bb.baf2RxWater
      }
    }

    function jP(bb) {
      const ab = "running" === bb.baf2RxState || "idle" === bb.baf2RxState;
      return bb.baf2RxFormed && bb.baf2RxTarget !== bb.baf2RxThrottle && ab ? RP(bb, bb.baf2RxTarget) : null
    }

    function RP(bb, ab) {
      const [Ub, Ab, Mb, , , , Tb, , Eb] = bb.baf2RxStats, Yb = LP(bb, Xa), Bb = XP(bb), eb = Bb.pct / 100, {
        gen: vb,
        out: Lb,
        load: Pb
      } = function(bb, ab, Ub, Ab) {
        const Mb = Ub ? gY : 1,
          Tb = Math.min(bb.fuelHeat * Mb * Math.max(0, Math.min(1, ab)), bb.size * Mb);
        return {
          gen: Tb,
          out: Tb,
          load: vB(Tb, bb.cooling, Ab)
        }
      }({
        fuelHeat: Ub,
        cooling: Ab,
        size: Mb
      }, ab / 100, Yb, eb), Xb = PB(Tb || nY(...bb.baf2RxDims)), jb = bb.baf2RxHeat, Rb = Math.abs(Pb - jb), kb = function(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nb.k;
        const Tb = Ub ? gY : 1,
          Eb = Math.min(bb.fuelHeat * Tb * ab / 100, bb.size * Tb),
          Yb = Eb,
          Bb = bb.fuelHeat * Tb,
          eb = bb.cooling * eB(Ab.pct / 100),
          vb = Bb > 0 && eb < bb.size * Tb ? Math.floor(100 * eb / Bb) : 100,
          Lb = Eb * Mb - Ab.inPerS;
        return {
          out: Yb,
          hotAbove: vb >= 100 ? null : Math.max(0, vb),
          waterSecs: Ab.pct >= 100 && Lb > 1e-6 ? Math.max(0, Ab.stored) / Lb : null
        }
      }({
        fuelHeat: Ub,
        cooling: Ab,
        size: Mb
      }, ab, Yb, {
        pct: Bb.pct,
        inPerS: Bb.inPerS,
        stored: Bb.stored
      }, PP(Bb.CP));
      return {
        pct: ab,
        out: Lb,
        coolPerS: vb * PP(Bb.CP),
        pelletsPerMin: Eb > 0 ? Lb / Eb * 60 : 0,
        settle: Pb,
        settleS: Rb > 2 ? Xb * Math.log(Rb / 2) : 0,
        overheatS: Pb > 100 && jb < 100 ? Xb * Math.log((Pb - jb) / (Pb - 100)) : null,
        hotAbove: kb.hotAbove,
        coolantSecs: kb.waterSecs
      }
    }

    function kP(bb) {
      return bb.baf2RxThrottle <= 0 && "running" !== bb.baf2RxState ? 0 : RP(bb, bb.baf2RxTarget).pelletsPerMin / 60
    }

    function yP(bb, ab) {
      if (bb <= 0 || ab <= 0) return 0;
      const Ub = bb / ab;
      return Ub < .25 ? 1 : Ub < .5 ? 2 : Ub < .8 ? 3 : 4
    }

    function ZP(bb, ab) {
      const Ub = {};
      for (const [Ab, Mb] of Object.entries(ab.params)) Ub[Ab] = "time" === Ab ? zT(bb, Mb) : "amount" === Ab ? HB(Mb) : String(Math.round(Mb));
      return bb(ab.key, Ub)
    }

    function DP(bb, ab) {
      return {
        key: `${eP}${bb}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: ab
      }
    }

    function zP(bb) {
      var ab;
      const Ub = LP(bb, Xa),
        Ab = "running" === bb.baf2RxState,
        Mb = kB(bb),
        Tb = bb.baf2RxHeat;
      var Eb;
      if (Ab && Tb > wY) return {
        key: null !== (Eb = Mb.fix) && void 0 !== Eb ? Eb : `${eP}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const Yb = Ab ? RP(bb, bb.baf2RxTarget).coolantSecs : null,
        Bb = "cryo" === XP(bb).CP;
      if (null !== Yb && Yb >= 1 && Yb <= 30) return DP(Bb ? "rxWarnCryo" : "rxWarnWater", "bad");
      const eb = cY(nY(...bb.baf2RxDims)).waste,
        vb = Ab ? iB(bb, eb, kP(bb)).fullInS : null;
      if (null !== vb && vb <= 120 && bb.baf2RxWaste >= .5 * eb) return DP("rxWarnWaste", "warn");
      if (null !== Yb && Yb >= 1) return DP(Bb ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: Yb
      });
      const Lb = "noWater" === bb.baf2RxState && Tb > wY;
      if (bb.baf2RxDamage >= 1 && !Lb) return DP("rxDamagedHeals", "warn", {
        pct: bb.baf2RxDamage
      });
      if (bb.baf2RxCryoCut) return DP("rxFix_cryoCut", "warn");
      const Pb = XP(bb);
      if ("noWater" === bb.baf2RxState && "cryo" === Pb.CP) return DP("noWater" === bb.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Xb = Mb.fix === `${eP}rxFix_scramCool` || "idle" === bb.baf2RxState && bb.baf2RxTarget <= 0;
      if (Xb && bb.baf2RxFuel <= 0) return DP("rxFix_noFuel", "warn");
      if (Xb && bb.baf2RxWaterIn <= 0 && (null !== (ab = bb.baf2RxCryoIn) && void 0 !== ab ? ab : 0) <= 0) return DP("rxFix_noWater", "warn");
      const jb = Mb.fix === `${eP}rxFix_scramCool` ? ZB(bb) : null;
      if (null !== jb) return {
        key: jb.key,
        params: {
          amount: jb.amount
        },
        tone: "info"
      };
      if ("running" !== bb.baf2RxState && "idle" !== bb.baf2RxState && null !== Mb.fix) return {
        key: Mb.fix,
        params: {},
        tone: "scram" === bb.baf2RxState ? "info" : Lb ? "bad" : "warn"
      };
      var Rb;
      if ("idle" === bb.baf2RxState && bb.baf2RxTarget <= 0) return {
        key: null !== (Rb = Mb.fix) && void 0 !== Rb ? Rb : `${eP}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const kb = bb.baf2RxCryoStarved;
      if ("cryo" === Pb.CP && kb && Pb.needPerS > 0 && Pb.usePerS < vP * Pb.needPerS) return DP("noWater" === kb ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const yb = "cryo" === Pb.CP,
        Zb = Pb.needPerS > 0 && Pb.usePerS < vP * Pb.needPerS;
      if (yb ? Zb || Pb.makersShort > 0 && Pb.pct < 100 : Pb.pct < 100) {
        const ab = yb && Zb ? Math.floor(100 * Pb.usePerS / Pb.needPerS) : Math.min(100, Pb.pct);
        if (Pb.makersShort > 0) {
          return DP(`${yb?"rxCryoShortLine":"rxWaterShortLine"}${1===Pb.makersShort?"One":""}${!yb&&bb.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: ab,
            count: Pb.makersShort
          })
        }
        return DP(yb ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: ab
        })
      }
      const Db = function(bb) {
        const [ab, Ub, Ab] = bb.baf2RxStats, Mb = XP(bb), Tb = LB({
          fuelHeat: ab,
          cooling: Ub,
          size: Ab
        }, "cryo" === Mb.CP ? nb.d : 1, !0);
        return Math.max(0, Tb * PP(Mb.CP) - Mb.inPerS)
      }(bb);
      if (Ub && Db > 0) return DP("cryo" === Pb.CP ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Db)
      });
      if (Tb >= YB) return DP("rxHotLine", "warn");
      const zb = RP(bb, bb.baf2RxTarget);
      var xb;
      if (null !== zb.overheatS) return DP("rxWillOverheat", "bad", {
        pct: bb.baf2RxTarget,
        time: zb.overheatS,
        safe: null !== (xb = zb.hotAbove) && void 0 !== xb ? xb : 100
      });
      if (Math.abs(zb.settle - Tb) >= 3) return DP("rxSettling", "info", {
        pct: bb.baf2RxTarget,
        heat: Math.round(zb.settle),
        time: zb.settleS
      });
      const ib = ZB(bb);
      if (null !== ib) return {
        key: ib.key,
        params: {
          amount: ib.amount
        },
        tone: "info"
      };
      const fb = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== ab && ("running" !== ab || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === bb.rods ? `${XB}rxLimitNoRods` : `${XB}rxLimit_${EB(bb)}`
      }({
        rods: bb.baf2RxStats[3],
        ...yB(bb)
      }, bb.baf2RxState, bb.baf2RxOut >= vP * bb.baf2RxMaxNow, !1);
      if (fb === `${eP}rxLimit_size`) {
        const [ab, , Ub, Ab] = bb.baf2RxStats, Mb = Ab > 0 && ab > 0 ? Math.ceil(Ub / (ab / Ab) - 1e-9) : Ab, Tb = bb.baf2RxDims.every((bb => bb >= KU("reactor").max));
        if (Mb < Ab) return DP(Tb ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Mb,
          have: Ab
        });
        if (Tb) return DP("rxLimit_sizeMax", "info")
      }
      return null !== fb ? {
        key: fb,
        params: {},
        tone: "info"
      } : DP("rxSteady", "ok", {
        pct: bb.baf2RxTarget
      })
    }

    function xP(bb) {
      var ab;
      if (bb.melted) return DP("rxMeltedBody", "bad");
      if (-1 === bb.bad) return DP("rxFix_noRoom", "warn");
      if (bb.bad > 0) return DP(1 === bb.bad ? "rxBadOne" : "rxBad", "warn", {
        count: bb.bad
      });
      if (bb.left > 0) {
        const ab = 1 === bb.left ? "One" : "";
        return DP(bb.canFill ? `rxPlanLeft${ab}` : `rxPlanLeftNoFill${ab}`, "info", {
          count: bb.left
        })
      }
      if (0 === bb.rods) return DP("rxLimitNoRods", "warn");
      const Ub = null !== (ab = bb.idle) && void 0 !== ab ? ab : 0;
      return Ub > 0 ? DP(1 === Ub ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: Ub
      }) : DP("rxPlanReady", "ok")
    }

    function iP(bb) {
      return Math.floor(Math.max(0, bb[1] - 1) / 2)
    }

    function fP(bb) {
      if (bb >= aB && bb < UB) {
        const ab = bb - aB;
        return {
          key: 0 === ab ? `${eP}rxWhy_rodAlone` : 1 === ab ? `${eP}rxWhy_rodOne` : `${eP}rxWhy_rod`,
          params: {
            count: String(ab),
            heat: String(QY * (1 + qY * ab))
          }
        }
      }
      return bb === UB ? {
        key: `${eP}rxWhy_channel`,
        params: {
          amount: String(rY)
        }
      } : bb === AB ? {
        key: `${eP}rxWhy_deadChannel`,
        params: {}
      } : bb === MB ? {
        key: `${eP}rxWhy_graphite`,
        params: {}
      } : {
        key: `${eP}rxWhy_core`,
        params: {}
      }
    }
    const mP = "buildAFactory2Game:";

    function pP(bb, ab) {
      return 0 !== (bb.baf2RxFlags & ab)
    }

    function NP(bb) {
      let {
        status: ab,
        pending: Ub,
        store: Ab,
        explain: Mb
      } = bb;
      const {
        t: Tb
      } = (0, NM.A)(), Eb = pP(ab, Pa), Yb = ab.baf2RxTarget, Bb = ab.baf2RxThrottle, eb = function(bb) {
        return {
          press: () => {
            bb.throttlePress()
          },
          drag: ab => {
            bb.throttleDrag(ab)
          },
          release: () => {
            bb.throttleRelease()
          }
        }
      }(Ab), vb = null === (Lb = RP(ab, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Lb - 10),
        red: Lb
      };
      var Lb;
      return (0, mT.jsxs)("div", {
        className: iM()("Baf2RxThrottle", {
          Off: Eb
        }),
        onClick: () => {
          Eb && Mb(`${mP}rxWhy_startFirst`)
        },
        children: [(0, mT.jsx)("span", {
          className: "HideNarrow",
          children: Tb(`${mP}rxThrottle`)
        }), (0, mT.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, mT.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: Yb,
            disabled: Eb,
            style: Eb ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Tb(`${mP}rxThrottle`),
            onPointerDown: () => {
              eb.press();
              const bb = () => {
                window.removeEventListener("pointerup", bb), window.removeEventListener("pointercancel", bb), eb.release()
              };
              window.addEventListener("pointerup", bb), window.addEventListener("pointercancel", bb)
            },
            onKeyUp: eb.release,
            onChange: bb => {
              eb.drag(Number(bb.target.value))
            }
          }), (0, mT.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${vb.amber}%, #ffb020 ${vb.amber}% ${vb.red}%, #ff3b30 ${vb.red}%)`
            },
            "aria-hidden": "true"
          }), (0, mT.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Bb}% + ${8*(1-Bb/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, mT.jsxs)("b", {
          children: [`${Yb}%`, (0, mT.jsx)("i", {
            className: iM()("Baf2RxPendingDot", {
              On: Ub
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function WP(bb) {
      let {
        status: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)(), Ab = RP(ab, ab.baf2RxTarget), Mb = XP(ab).CP, Tb = Ub("cryo" === Mb ? `${mP}rxRateCryo` : `${mP}rxRateWater`, {
        rate: EP(Ab.coolPerS)
      }), Eb = Ub(`${mP}rxChain`, {
        pct: String(ab.baf2RxTarget),
        out: HB(Ab.out),
        heat: String(Math.round(Ab.settle)),
        coolant: Tb
      }), Yb = null !== Ab.coolantSecs ? Ab.coolantSecs >= 1 ? Ub("cryo" === Mb ? `${mP}rxThrottleCryoOut` : `${mP}rxThrottleWaterOut`, {
        time: zT(Ub, Ab.coolantSecs)
      }) : Ub("cryo" === Mb ? `${mP}rxThrottleCryoDry` : `${mP}rxThrottleWaterDry`) : null;
      return (0, mT.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Eb, null !== Yb ? (0, mT.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", Yb]
        }) : (0, mT.jsxs)("span", {
          children: [" \xb7 ", Ub(`${mP}rxChainPellets`, {
            amount: IB(Ab.pelletsPerMin)
          })]
        })]
      })
    }

    function HP(bb) {
      let {
        view: ab,
        store: Ub,
        explain: Mb,
        explainOnce: Tb
      } = bb;
      const {
        t: Eb
      } = (0, NM.A)(), {
        status: Yb
      } = ab, [Bb, eb] = (0, Ab.useState)(!1), vb = pP(Yb, Pa), Pb = pP(Yb, Xa), Xb = !pP(Yb, ka), jb = Yb.baf2RxHeat > 100;
      return (0, mT.jsxs)(mT.Fragment, {
        children: [(0, mT.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, mT.jsx)(NP, {
            status: Yb,
            pending: ab.throttlePending,
            store: Ub,
            explain: Mb
          }), (0, mT.jsx)(BP, {
            on: Pb,
            label: Pb ? Eb(`${mP}rxOdLeft`, {
              time: zT(Eb, Yb.baf2RxOdLeft)
            }) : Eb(`${mP}rxOverdrive`),
            locked: Xb,
            pending: 0 !== (ab.pendingFlags & Xa),
            toggle: () => {
              Xb ? Mb(`${mP}rxOverdriveTier`, {
                amount: String(Lb(13))
              }) : Pb ? Ub.setFlag(Xa, !1) : ab.odConfirmed ? Ub.setFlag(Xa, !0) : eb(!0)
            }
          }), vb || ab.startGuard ? (0, mT.jsx)(xE.s, {
            disabled: ab.busy.has("start") || ab.startGuard,
            onClick: () => {
              Ub.tap("start", (() => {
                Ub.setFlag(Pa, !1)
              }))
            },
            children: Eb(ab.startGuard ? `${mP}rxStarting` : `${mP}rxStart`)
          }) : (0, mT.jsx)("span", {
            className: iM()("Baf2RxScram", {
              Pulse: jb
            }),
            children: (0, mT.jsx)(xE.D, {
              onClick: () => {
                Ub.shutDown()
              },
              children: Eb(`${mP}rxScram`)
            })
          })]
        }), (0, mT.jsx)(WP, {
          status: Yb
        }), Bb && (0, mT.jsx)(UP, {
          id: "baf2RxOdTitle",
          title: `${mP}rxOdConfirmTitle`,
          body: `${mP}rxOdConfirmBody`,
          yes: `${mP}rxOdConfirm`,
          cancel: () => {
            eb(!1)
          },
          confirm: () => {
            eb(!1), Ub.tap("odConfirm", (() => {
              Ub.confirmOverdrive(), Ub.setFlag(Xa, !0)
            })), Tb(`${mP}rxWhy_overdrive`)
          }
        })]
      })
    }

    function IP(bb) {
      let {
        view: ab,
        store: Ub,
        keepSize: Ab
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)(), {
        status: Tb
      } = ab;
      return (0, mT.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, mT.jsx)(YP, {
          kind: "reactor",
          dims: ab.dims,
          cap: Tb.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: bb => {
            Ub.resize(bb)
          }
        }), Ab ? (0, mT.jsx)(xE.h, {
          onClick: Ab,
          children: Mb(`${mP}rxKeepSize`)
        }) : (0, mT.jsxs)(mT.Fragment, {
          children: [(0, mT.jsx)(BP, {
            on: ab.guide,
            label: Mb(`${mP}rxGuide`),
            toggle: () => {
              Ub.toggleGuide()
            }
          }), pP(Tb, Za) && (0, mT.jsx)(BP, {
            on: ab.starter,
            label: Mb(`${mP}rxStarter`),
            toggle: () => {
              Ub.toggleStarter()
            }
          }), (0, mT.jsx)(nL, {
            status: Tb,
            store: Ub,
            busy: ab.busy.has("fill")
          })]
        })]
      })
    }

    function dP(bb) {
      let {
        need: ab,
        kind: Ub = "reactor",
        explain: Ab
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)(), Tb = ab.length <= 3, Eb = ab.reduce(((bb, ab) => {
        let [, Ub] = ab;
        return bb + Ub
      }), 0);
      return (0, mT.jsxs)("div", {
        className: iM()("Baf2RxParts", {
          Compact: !Tb
        }),
        onClick: () => {
          Ab("battery" === Ub ? `${mP}batWhy_store` : `${mP}rxShellHint`)
        },
        children: [Eb > 0 && (0, mT.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Eb ? Mb(`${mP}rxBlocksOne`) : Mb(`${mP}rxBlocks`, {
            blocks: String(Eb)
          })
        }), 0 === ab.length ? (0, mT.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Mb("battery" === Ub ? `${mP}batPartsDone` : `${mP}rxShellDone`)
        }) : zB(ab).map((bb => {
          let [ab, Ub, Ab] = bb;
          const Eb = function(bb) {
            const ab = pB[bb];
            if (void 0 === ab) return null;
            const [Ub, Ab, Mb] = fB[ab].colour.map((bb => Math.round(255 * bb)));
            return `rgb(${Ub}, ${Ab}, ${Mb})`
          }(ab);
          return (0, mT.jsxs)("span", {
            className: "Baf2RxChip",
            title: AT(Mb, ab),
            children: [(0, mT.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Eb ? {
                visibility: "hidden"
              } : {
                background: Eb
              },
              title: Mb(`${mP}rxShopGhost`)
            }), (0, mT.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, mT.jsx)(HM.c, {
                itemName: ab,
                amount: 0
              })
            }), (0, mT.jsx)("span", {
              className: "Baf2RxChipName",
              children: Tb ? `${Ub} ${Yb=AT(Mb,ab),Yb.replace(/^(Reactor|Battery) (?=\S)/,"")}` : Ub
            }), Ab >= Ub ? (0, mT.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, mT.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Tb ? Mb(`${mP}rxShopShort`, {
                count: String(Ub - Ab)
              }) : "\u2212" + (Ub - Ab)
            })]
          }, ab);
          var Yb
        }))]
      })
    }
    const FP = "buildAFactory2Game:";

    function hP(bb) {
      var ab, Ub, Mb, Tb, Eb, Yb, Bb;
      let {
        store: eb,
        close: vb
      } = bb;
      const {
        t: Lb
      } = (0, NM.A)(), Pb = oE(), Xb = AP(eb), {
        explained: jb,
        explain: Rb
      } = gL("baf2RxExplained"), kb = (0, Ab.useCallback)(((bb, ab) => {
        Rb(Lb(bb, ab))
      }), [Rb, Lb]), yb = null === Xb || void 0 === Xb ? void 0 : Xb.status, Zb = !0 === (null === yb || void 0 === yb ? void 0 : yb.baf2BatReadOnly), Db = bb => {
        yb && Pb.send(La(yb.baf2BatAt, bb))
      }, [zb, xb, ib] = null !== (ab = null === Xb || void 0 === Xb ? void 0 : Xb.dims) && void 0 !== ab ? ab : [0, 0, 0], fb = HB(null !== (Ub = null === Xb || void 0 === Xb ? void 0 : Xb.PL) && void 0 !== Ub ? Ub : 0), mb = !0 === (null === yb || void 0 === yb ? void 0 : yb.baf2BatFormed), pb = null !== (Mb = null === yb || void 0 === yb ? void 0 : yb.baf2BatStored) && void 0 !== Mb ? Mb : 0, Nb = Math.max(1, null !== (Tb = null === yb || void 0 === yb ? void 0 : yb.baf2BatIslandCap) && void 0 !== Tb ? Tb : 1), Wb = Math.min(100, 100 * pb / Nb), Hb = null === yb || void 0 === yb ? void 0 : yb.baf2BatNetPerS, Ib = function(bb, ab, Ub) {
        return Ub > 0 && ab >= Ub ? "full" : void 0 !== bb && bb >= .05 ? "charging" : void 0 !== bb && bb <= -.05 && ab > 0 ? "draining" : "steady"
      }(Hb, pb, null !== (Eb = null === yb || void 0 === yb ? void 0 : yb.baf2BatIslandCap) && void 0 !== Eb ? Eb : 0), db = null !== (Yb = null === yb || void 0 === yb ? void 0 : yb.baf2BatMadePerS) && void 0 !== Yb ? Yb : 0, Fb = null !== (Bb = null === yb || void 0 === yb ? void 0 : yb.baf2BatUsedPerS) && void 0 !== Bb ? Bb : 0;
      let hb, Gb = {},
        Qb = "info";
      if (yb)
        if (mb) "charging" === Ib ? (hb = `${FP}batLine_charging`, Gb = {
          time: zT(Lb, (Nb - pb) / Math.max(.05, null !== Hb && void 0 !== Hb ? Hb : 0))
        }, Qb = "ok") : "draining" === Ib ? (hb = `${FP}batLine_draining`, Gb = {
          time: zT(Lb, pb / Math.max(.05, -(null !== Hb && void 0 !== Hb ? Hb : 0)))
        }, Qb = "warn") : hb = "full" === Ib ? `${FP}batLine_full` : pb <= 0 && Fb > 0 ? `${FP}batLine_empty` : `${FP}batLine_steady`;
        else {
          var qb;
          const bb = xP({
            left: yb.baf2BatNeed.reduce(((bb, ab) => {
              let [, Ub] = ab;
              return bb + Ub
            }), 0),
            bad: yb.baf2BatBad,
            rods: 1,
            canFill: !0 === yb.baf2BatCanFill,
            melted: !1
          });
          hb = bb.key, Gb = {
            count: String(null !== (qb = bb.params.count) && void 0 !== qb ? qb : 0)
          }, Qb = bb.tone
        }
      else hb = `${FP}batLine_steady`;
      const ub = Math.max(db, Fb, 1);
      return (0, mT.jsx)(zE.d, {
        close: vb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, mT.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, mT.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, mT.jsx)(HM.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, mT.jsxs)("div", {
                children: [(0, mT.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Lb(`${FP}batTitle`)
                }), yb && (0, mT.jsxs)("p", {
                  className: iM()("Baf2RxSubtitle", {
                    good: mb && "charging" === Ib,
                    warn: mb && "draining" === Ib
                  }),
                  children: [zb, "\xd7", xb, "\xd7", ib, " \xb7 ", Lb(mb ? `${FP}batState_${Ib}` : `${FP}rxSubPlanShort`)]
                })]
              })]
            }), (0, mT.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [yb && !Zb && (0, mT.jsx)(MP, {
                kind: "battery",
                cap: mb ? fb : void 0,
                busy: null === Xb || void 0 === Xb ? void 0 : Xb.busy.has("apart"),
                apart: () => {
                  eb.tap("apart", (() => {
                    Db("apart")
                  }))
                }
              }), (0, mT.jsx)(xE.k, {
                onClick: vb
              })]
            })]
          }), Xb && yb && (0, mT.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, mT.jsxs)("div", {
              className: iM()("Baf2RxFlow Baf2BatFlow", {
                Plan: !mb
              }),
              children: [(0, mT.jsx)(tL, {
                kind: "Power",
                label: Lb(`${FP}batMade`),
                number: mb ? `\u26a1 ${HB(db)}/s` : "\u2014",
                note: Lb(`${FP}batMadeNote`),
                share: mb ? db / ub : void 0,
                onExplain: () => {
                  kb(`${FP}batWhy_made`)
                }
              }), (0, mT.jsx)(wL, {
                kind: "Power",
                step: mb ? yP(db, ub) : 0,
                planned: !mb
              }), (0, mT.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  kb(`${FP}batWhy_store`)
                },
                children: [(0, mT.jsx)(sL, {
                  max: 100,
                  bands: [{
                    upTo: mb ? Wb : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, mT.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, mT.jsx)("b", {
                    className: "Baf2BatStored",
                    children: mb ? Lb(`${FP}batStoredOf`, {
                      amount: HB(pb),
                      cap: HB(yb.baf2BatIslandCap)
                    }) : Lb(`${FP}batWillHold`, {
                      cap: fb
                    })
                  }), (0, mT.jsx)("span", {
                    children: Lb(`${FP}batAdds`, {
                      cap: fb
                    })
                  }), mb && (0, mT.jsx)("small", {
                    children: Lb(`${FP}batBreakNote`, {
                      cap: fb
                    })
                  })]
                })]
              }), (0, mT.jsx)(wL, {
                kind: "Power",
                step: mb ? yP(Fb, ub) : 0,
                planned: !mb
              }), (0, mT.jsx)(tL, {
                kind: "Power",
                label: Lb(`${FP}batUsed`),
                number: mb ? `\u26a1 ${HB(Fb)}/s` : "\u2014",
                note: Lb(`${FP}batUsedNote`),
                share: mb ? Fb / ub : void 0,
                onExplain: () => {
                  kb(`${FP}batWhy_used`)
                }
              })]
            }), (0, mT.jsx)(CL, {
              text: Lb(hb, Gb),
              tone: Qb,
              explained: jb
            }), Zb ? (0, mT.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Lb(`${FP}rxNotYours`)
            }) : !mb && (0, mT.jsxs)(mT.Fragment, {
              children: [(0, mT.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, mT.jsx)(YP, {
                  kind: "battery",
                  dims: Xb.dims,
                  cap: yb.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: bb => {
                    eb.resize(bb)
                  }
                }), (0, mT.jsx)(BP, {
                  on: Xb.guide,
                  label: Lb(`${FP}rxGuide`),
                  toggle: () => {
                    eb.toggleGuide()
                  }
                }), yb.baf2BatCanFill && (0, mT.jsx)(xE.m, {
                  disabled: !xB("battery", yb.baf2BatNeed) || Xb.busy.has("fill"),
                  onClick: () => {
                    eb.tap("fill", (() => {
                      Db("fill")
                    }))
                  },
                  children: Lb(`${FP}rxFill`)
                })]
              }), (0, mT.jsx)(dP, {
                need: yb.baf2BatNeed,
                kind: "battery",
                explain: kb
              })]
            })]
          })]
        })
      })
    }
    const GP = "buildAFactory2Game:",
      QP = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function qP(bb, ab) {
      return bb === bB ? null : ab ? "#4a4440" : bb < UB ? QP[bb - aB] : bb === UB ? "#3fd0f0" : bb === AB ? "#2c3e4c" : "#55585e"
    }

    function uP(bb) {
      let {
        inner: ab,
        looks: Ub,
        layer: Ab,
        setLayer: Mb,
        glow: Tb,
        melted: Eb,
        explain: Yb
      } = bb;
      const {
        t: Bb
      } = (0, NM.A)(), [eb, vb, Lb] = ab, Pb = Math.max(0, Math.min(vb - 1, Ab)), Xb = [];
      for (let Rb = 0; Rb < Lb; Rb++)
        for (let bb = 0; bb < eb; bb++) {
          var jb;
          const ab = null !== (jb = Ub[(Pb * Lb + Rb) * eb + bb]) && void 0 !== jb ? jb : bB,
            Ab = qP(ab, Eb),
            Mb = ab >= aB && ab < UB;
          Xb.push(null === Ab ? (0, mT.jsx)("circle", {
            cx: bb + .5,
            cy: Rb + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${bb},${Rb}`) : (0, mT.jsx)("rect", {
            x: bb + .06,
            y: Rb + .06,
            width: .88,
            height: .88,
            fill: Ab,
            opacity: Mb && !Eb ? .5 + .5 * Tb : 1,
            onClick: bb => {
              bb.stopPropagation();
              const Ub = fP(ab);
              Yb(Ub.key, Ub.params)
            }
          }, `${bb},${Rb}`))
        }
      return (0, mT.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, mT.jsx)("svg", {
          className: iM()("Baf2RxMapGrid", {
            Melted: Eb
          }),
          viewBox: `0 0 ${Math.max(1,eb)} ${Math.max(1,Lb)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Bb(`${GP}rxWhy_core`),
          onClick: () => {
            Yb(`${GP}rxWhy_core`, {})
          },
          children: Xb
        }), vb > 1 && (0, mT.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, mT.jsx)("button", {
            type: "button",
            "aria-label": Bb(`${GP}rxLayerDown`),
            disabled: Pb <= 0,
            onClick: () => {
              Mb(Pb - 1)
            },
            children: "\u25bc"
          }), (0, mT.jsxs)("span", {
            children: [(0, mT.jsx)("span", {
              className: "HideNarrow",
              children: Bb(`${GP}rxLayer`, {
                n: String(Pb + 1),
                of: String(vb)
              })
            }), (0, mT.jsx)("span", {
              className: "ShowNarrow",
              children: Bb(`${GP}rxLayerShort`, {
                n: String(Pb + 1),
                of: String(vb)
              })
            })]
          }), (0, mT.jsx)("button", {
            type: "button",
            "aria-label": Bb(`${GP}rxLayerUp`),
            disabled: Pb >= vb - 1,
            onClick: () => {
              Mb(Pb + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const rP = "buildAFactory2Game:",
      KP = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: sY,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: RB,
        kind: "red"
      }],
      oP = [50, sY, 100];

    function lP(bb) {
      let {
        stats: ab,
        t: Ub,
        explain: Ab
      } = bb;
      const Mb = EB(ab),
        Tb = Math.max(1, ab.fuelHeat, ab.cooling, ab.size),
        Eb = [
          ["fuel", `${rP}rxBarRods`, ab.fuelHeat],
          ["cooling", `${rP}rxBarCooling`, ab.cooling],
          ["size", `${rP}rxBarSize`, ab.size]
        ];
      return (0, mT.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Ab(`${rP}rxWhy_bars`)
        },
        children: [(0, mT.jsx)("span", {
          className: "Baf2RxMostLine",
          children: Ub(`${rP}rxMost`, {
            amount: HB(Math.min(ab.fuelHeat, ab.cooling, ab.size))
          })
        }), (0, mT.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Eb.map((bb => {
            let [ab, Ab, Eb] = bb;
            return (0, mT.jsxs)("span", {
              className: iM()("Baf2RxMostBar", ab, {
                Low: ab === Mb
              }),
              children: [(0, mT.jsx)("small", {
                children: Ub(Ab)
              }), (0, mT.jsx)("i", {
                children: (0, mT.jsx)("b", {
                  style: {
                    width: 100 * Eb / Tb + "%"
                  }
                })
              })]
            }, ab)
          }))
        })]
      })
    }

    function tP(bb) {
      var ab;
      let {
        view: Ub,
        heat: Mb,
        settle: Tb,
        settleLine: Eb,
        settleBad: Yb,
        explain: Bb
      } = bb;
      const {
        t: eb
      } = (0, NM.A)(), {
        status: vb
      } = Ub, Lb = vb.baf2RxAt.join(","), [Pb, Xb] = (0, Ab.useState)((() => iP(Ub.inner)));
      (0, Ab.useEffect)((() => {
        Xb(iP(Ub.inner))
      }), [Lb, Ub.inner[1]]);
      const jb = null !== (ab = Ub.plan) && void 0 !== ab ? ab : yB(vb),
        Rb = Ub.plan ? Ub.plan.powerPerUnit : vb.baf2RxStats[8],
        kb = null === Mb ? null : "alarm" === (yb = jB(vb)) ? "red" : "hot" === yb ? "hot" : "warm" === yb ? "warm" : "cold";
      var yb;
      const Zb = !vb.baf2RxFormed && function(bb, ab) {
          return 0 !== (bb.baf2RxFlags & ab)
        }(vb, ja),
        Db = vb.baf2RxDamage,
        zb = vb.baf2RxDamageTrend;
      return (0, mT.jsxs)("div", {
        className: iM()("Baf2RxCore", null !== kb && void 0 !== kb ? kb : "plan"),
        children: [(0, mT.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, mT.jsx)(uP, {
            inner: Ub.inner,
            looks: Ub.looks,
            layer: Pb,
            setLayer: Xb,
            glow: vb.baf2RxFormed ? vb.baf2RxThrottle / 100 : 1,
            melted: Zb,
            explain: Bb
          }), (0, mT.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Bb(`${rP}rxWhy_heat`)
            },
            children: [null !== Mb ? (0, mT.jsxs)(mT.Fragment, {
              children: [(0, mT.jsx)("b", {
                children: eb(`${rP}rxHeatPct`, {
                  pct: String(Mb)
                })
              }), (0, mT.jsx)("span", {
                className: iM()("Baf2RxBand", kb),
                children: eb(`${rP}rxBand_${kb}`)
              })]
            }) : (0, mT.jsx)("b", {
              children: eb(`${rP}rxHeat`)
            }), null !== Eb && (0, mT.jsx)("span", {
              className: iM()("Baf2RxSettle", {
                Bad: Yb
              }),
              children: Eb
            }), Db >= 1 && (0, mT.jsxs)("span", {
              className: iM()("Baf2RxDamage", zb),
              children: [eb(`${rP}rxDamageLine`, {
                pct: String(Db)
              }), " \xb7 ", eb(`${rP}rxDamage_${zb}`), (0, mT.jsx)("i", {
                children: (0, mT.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Db)}%`
                  }
                })
              })]
            })]
          }), (0, mT.jsx)(sL, {
            max: RB,
            bands: KP,
            ticks: oP,
            now: Mb,
            settle: Tb,
            settleTone: Yb ? "bad" : null,
            onExplain: () => {
              Bb(`${rP}rxWhy_heat`)
            }
          })]
        }), (0, mT.jsx)(lP, {
          stats: jb,
          t: eb,
          explain: Bb
        }), Rb > 0 && (0, mT.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Bb(`${rP}rxWhy_perPellet`)
          },
          children: eb(`${rP}rxPerPellet`, {
            amount: HB(Rb)
          })
        })]
      })
    }

    function wP(bb, ab) {
      var Ub;
      if (!bb.baf2RxStore) return {
        note: ab(`${rP}rxUpTo`, {
          amount: HB(bb.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Ab, Mb] = bb.baf2RxStore, Tb = Mb > 0 ? Ab / Mb : 0, Eb = String(Math.floor(100 * Tb)), Yb = null !== (Ub = bb.baf2RxStoreNetPerS) && void 0 !== Ub ? Ub : 0, Bb = function(bb) {
        var ab, Ub;
        const [Ab, Mb] = null !== (ab = bb.baf2RxStore) && void 0 !== ab ? ab : [0, 0], Tb = null !== (Ub = bb.baf2RxStoreNetPerS) && void 0 !== Ub ? Ub : 0;
        return Mb > 0 && Ab >= Mb - 1 ? "running" === bb.baf2RxState ? `${eP}rxStoreFull` : `${eP}rxStoreFullOnly` : Tb > .05 ? `${eP}rxStoreLine` : Tb < -.05 ? "running" === bb.baf2RxState ? `${eP}rxStoreUsesMore` : `${eP}rxStoreDraining` : `${eP}rxStorePct`
      }(bb);
      return {
        note: ab(Bb, Bb === `${rP}rxStoreLine` ? {
          pct: Eb,
          time: zT(ab, (Mb - Ab) / Yb)
        } : {
          pct: Eb
        }),
        share: Tb
      }
    }

    function sP(bb) {
      let {
        view: ab,
        explain: Ub,
        preview: Ab
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)(), {
        status: Tb
      } = ab, Eb = cY(nY(...ab.dims)), Yb = kP(Tb), Bb = Math.min(Math.round(Tb.baf2RxFuel), Eb.fuel), eb = "running" === Tb.baf2RxState, vb = eb ? yP(Tb.baf2RxOut, Tb.baf2RxMaxNow) : 0, Lb = function(bb, ab, Ub) {
        const Ab = XP(bb),
          Mb = "cryo" === Ab.CP,
          Tb = Ub ? Ub.coolantSecs : Ab.pct >= 100 && bb.baf2RxOut >= 1 ? RP(bb, bb.baf2RxThrottle).coolantSecs : null;
        let Eb, Yb = !1;
        if (Ab.pct < 100) {
          const Ub = 1 === Ab.makersShort,
            Tb = !Mb && bb.baf2RxCryoOpen ? "OrCryo" : "";
          Eb = Ab.makersShort > 0 ? ab(Mb ? `${rP}rxCryoAddMixer${Ub?"":"s"}` : `${rP}rxWaterAddCondenser${Ub?"":"s"}${Tb}`, {
            count: String(Ab.makersShort)
          }) : ab(`${rP}rxWaterNeeds`, {
            rate: EP(Ab.needPerS)
          })
        } else if (null !== Tb) Eb = ab(`${rP}rxWaterRunsOut`, {
          time: zT(ab, Tb)
        });
        else if (Ab.waterBeside > 0) Eb = ab(`${rP}rxCryoPlusWater`, {
          rate: EP(Ab.waterBeside)
        });
        else {
          const bb = function(bb) {
            return bb.inPerS <= 0 ? "rxWaterNoSupply" : bb.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Ab);
          Yb = "rxWaterNoSupply" === bb, Eb = ab(`${rP}${bb}`, {
            amount: HB(Ab.stored)
          })
        }
        return {
          kind: Mb ? "Cryo" : "Water",
          label: ab(Mb ? `${rP}rxCryo` : `${rP}rxWater`),
          number: `${EP(Ab.usePerS)}/s`,
          preview: Ub ? `${EP(Ub.coolPerS)}/s` : null,
          note: Eb,
          tone: "noWater" === bb.baf2RxState ? "danger" : Yb ? "warn" : (Bb = Ab.pct, eb = Tb, Bb < 100 ? "danger" : null === eb ? null : eb < 300 ? "danger" : "warn"),
          share: Ab.pct / 100,
          why: Mb ? `${rP}rxWhy_cryo` : `${rP}rxWhy_water`,
          short: Ab.pct < 100
        };
        var Bb, eb
      }(Tb, Mb, Ab), Pb = iB(Tb, Eb.waste, Yb), Xb = wP(Tb, Mb), jb = RP(Tb, Tb.baf2RxTarget), Rb = eb && Math.abs(jb.settle - Tb.baf2RxHeat) >= 3, kb = Ab ? Ab.pelletsPerMin / 60 : null;
      return (0, mT.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, mT.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mT.jsx)(tL, {
            kind: "Fuel",
            label: Mb(`${rP}rxFuel`),
            number: String(Bb),
            preview: null !== kb && kb > 0 && Tb.baf2RxFuel > 0 ? zT(Mb, Tb.baf2RxFuel / kb) : null,
            note: Tb.baf2RxFuel <= 0 ? Mb(`${rP}rxFuelEmpty`) : Yb > 0 ? Mb(`${rP}rxFuelLeft`, {
              time: zT(Mb, Tb.baf2RxFuel / Yb)
            }) : Mb(1 === Bb ? `${rP}rxFuelPellet` : `${rP}rxFuelPellets`),
            tone: "noFuel" === Tb.baf2RxState ? "danger" : Tb.baf2RxFuel < 2 ? "warn" : null,
            share: Tb.baf2RxFuel / Eb.fuel,
            onExplain: () => {
              Ub(`${rP}rxWhy_fuel`)
            }
          }), (0, mT.jsx)(tL, {
            kind: Lb.kind,
            label: Lb.label,
            number: Lb.number,
            preview: Lb.preview,
            note: Lb.note,
            tone: Lb.tone,
            share: Lb.share,
            onExplain: () => {
              Ub(Lb.why)
            }
          })]
        }), (0, mT.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mT.jsx)(wL, {
            kind: "Fuel",
            step: vb,
            short: "noFuel" === Tb.baf2RxState
          }), (0, mT.jsx)(wL, {
            kind: Lb.kind,
            step: vb,
            short: Lb.short || "noWater" === Tb.baf2RxState
          })]
        }), (0, mT.jsx)(tP, {
          view: ab,
          heat: Tb.baf2RxHeat,
          settle: Math.min(RB, jb.settle),
          settleLine: Rb ? Mb(`${rP}rxHeatSettles`, {
            pct: String(Math.round(jb.settle)),
            time: zT(Mb, jb.settleS)
          }) : null,
          settleBad: jb.settle > 100,
          explain: Ub
        }), (0, mT.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mT.jsx)(wL, {
            kind: "Power",
            step: vb
          }), (0, mT.jsx)(wL, {
            kind: "Waste",
            step: eb && Tb.baf2RxFuel - Tb.baf2RxPu > 0 ? vb : 0,
            short: Pb.full
          })]
        }), (0, mT.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mT.jsx)(tL, {
            kind: "Power",
            label: Mb(`${rP}rxPowerOut`),
            number: `\u26a1 ${HB(Tb.baf2RxOut)}/s`,
            preview: Ab ? HB(Ab.out) : null,
            note: Xb.note,
            share: Xb.share,
            onExplain: () => {
              Ub(`${rP}rxWhy_power`)
            }
          }), (0, mT.jsx)(tL, {
            kind: "Waste",
            label: Mb(`${rP}rxWaste`),
            number: `${Math.floor(Tb.baf2RxWaste)}/${Eb.waste}`,
            note: Pb.full ? Mb(`${rP}rxWasteFull`) : null !== Pb.fullInS ? Mb(`${rP}rxWasteFullIn`, {
              time: zT(Mb, Pb.fullInS)
            }) : Mb(`${rP}rxWasteSpent`),
            tone: "wasteFull" === Tb.baf2RxState ? "danger" : Pb.full ? "warn" : null,
            share: Tb.baf2RxWaste / Eb.waste,
            onExplain: () => {
              Ub(`${rP}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function gP(bb) {
      let {
        view: ab,
        explain: Ub
      } = bb;
      const {
        t: Ab
      } = (0, NM.A)(), Mb = ab.plan;
      if (!Mb) return null;
      const Tb = Mb.fuelHeat <= 0 ? null : Mb.cooling > 0 ? Math.min(RB, 100 * Mb.fuelHeat / Mb.cooling) : RB,
        Eb = Ab(`${rP}rxPlanAtFull`);
      return (0, mT.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, mT.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mT.jsx)(tL, {
            kind: "Fuel",
            label: Ab(`${rP}rxFuel`),
            number: Ab(`${rP}rxPlanPerMin`, {
              amount: IB(Mb.pelletsPerMin)
            }),
            note: Ab(`${rP}rxPlanPellets`),
            onExplain: () => {
              Ub(`${rP}rxWhy_fuel`)
            }
          }), (0, mT.jsx)(tL, {
            kind: "Water",
            label: Ab(`${rP}rxWater`),
            number: `${EP(Mb.waterPerS)}/s`,
            note: ab.status.baf2RxCryoOpen && Mb.waterPerS > 0 ? Ab(`${rP}rxPlanOrCryo`, {
              rate: EP(LB(Mb, nb.d) * nb.h)
            }) : Eb,
            onExplain: () => {
              Ub(`${rP}rxWhy_water`)
            }
          })]
        }), (0, mT.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mT.jsx)(wL, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, mT.jsx)(wL, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, mT.jsx)(tP, {
          view: ab,
          heat: null,
          settle: Tb,
          settleLine: null === Tb ? null : Ab(`${rP}rxPlanHeat`, {
            pct: String(Math.round(Tb))
          }),
          settleBad: null !== Tb && Tb > 100,
          explain: Ub
        }), (0, mT.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mT.jsx)(wL, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, mT.jsx)(wL, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, mT.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mT.jsx)(tL, {
            kind: "Power",
            label: Ab(`${rP}rxPowerOut`),
            number: `\u26a1 ${HB(Mb.max)}/s`,
            note: Eb,
            onExplain: () => {
              Ub(`${rP}rxWhy_power`)
            }
          }), (0, mT.jsx)(tL, {
            kind: "Waste",
            label: Ab(`${rP}rxWaste`),
            number: Ab(`${rP}rxPlanPerMin`, {
              amount: IB(Mb.pelletsPerMin)
            }),
            note: Ab(`${rP}rxWasteSpent`),
            onExplain: () => {
              Ub(`${rP}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const CP = "buildAFactory2Game:",
      VP = {
        key: `${CP}rxWaiting`,
        params: {},
        tone: "info"
      };

    function OP(bb, ab) {
      return 0 !== (bb.baf2RxFlags & ab)
    }

    function cP(bb) {
      var ab, Ub;
      let {
        store: Mb,
        close: Tb
      } = bb;
      const {
        t: Eb
      } = (0, NM.A)(), Yb = AP(Mb), {
        explained: Bb,
        hinting: eb,
        explain: vb,
        explainOnce: Lb
      } = gL("baf2RxExplained"), Pb = (0, Ab.useCallback)(((bb, ab) => {
        vb(Eb(bb, ab))
      }), [vb, Eb]), Xb = (0, Ab.useCallback)(((bb, ab) => {
        Lb(bb, Eb(bb, ab))
      }), [Lb, Eb]), [jb, Rb] = (0, Ab.useState)(!1), [kb, yb] = (0, Ab.useState)(!1), Zb = null === Yb || void 0 === Yb ? void 0 : Yb.status, Db = null === Zb || void 0 === Zb ? void 0 : Zb.baf2RxAt.join(","), zb = !0 === (null === Zb || void 0 === Zb ? void 0 : Zb.baf2RxFormed);
      (0, Ab.useEffect)((() => {
        yb(!1), Rb(!1)
      }), [Db, zb]), (0, Ab.useEffect)((() => (Mb.opened(), () => {
        Mb.closed()
      })), [Mb]);
      const xb = void 0 !== Zb && OP(Zb, ya),
        ib = Zb ? zb ? jB(Zb) : null !== Yb && void 0 !== Yb && Yb.plan ? function(bb, ab) {
          if (bb <= 0) return "off";
          if (ab <= 0) return "alarm";
          const Ub = 100 * bb / ab;
          return Ub < 50 ? "calm" : Ub < YB ? "warm" : Ub <= 100 ? "hot" : "alarm"
        }(Yb.plan.fuelHeat, Yb.plan.cooling) : "off" : "off",
        fb = Zb ? kB(Zb) : null,
        mb = Yb ? Yb.waiting ? VP : zb ? zP(Yb.status) : function(bb) {
          var ab, Ub;
          const {
            status: Ab
          } = bb;
          return xP({
            left: Ab.baf2RxNeed.reduce(((bb, ab) => {
              let [, Ub] = ab;
              return bb + Ub
            }), 0),
            bad: Ab.baf2RxBad,
            rods: null !== (ab = null === (Ub = bb.plan) || void 0 === Ub ? void 0 : Ub.rods) && void 0 !== ab ? ab : 0,
            canFill: OP(Ab, Ra),
            melted: OP(Ab, ja),
            idle: bb.looks.reduce(((bb, ab) => bb + (ab === AB ? 1 : 0)), 0)
          })
        }(Yb) : null,
        pb = eb && null !== mb && ("ok" === mb.tone || "info" === mb.tone),
        Nb = Zb ? function(bb) {
          const ab = 0 !== (bb.baf2RxFlags & Pa),
            Ub = bb.baf2RxHeat < CY;
          return 0 !== (bb.baf2RxFlags & ja) || Ub && (ab || !bb.baf2RxFormed) ? null : bb.baf2RxFormed && !ab ? {
            key: `${XB}rxApartScram`,
            params: {}
          } : {
            key: `${XB}rxApartCooling`,
            params: {
              pct: String(CY)
            }
          }
        }(Zb) : null,
        [Wb, Hb, Ib] = null !== (ab = null === Yb || void 0 === Yb ? void 0 : Yb.dims) && void 0 !== ab ? ab : [0, 0, 0],
        db = `${Wb}\xd7${Hb}\xd7${Ib}`;
      return (0, mT.jsx)(zE.d, {
        close: Tb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, mT.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, mT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mT.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, mT.jsx)(TP, {
                mood: ib
              }), (0, mT.jsxs)("div", {
                children: [(0, mT.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Eb(`${CP}rxTitle`)
                }), Yb && (0, mT.jsxs)("p", {
                  className: iM()("Baf2RxSubtitle", zb && (null === fb || void 0 === fb ? void 0 : fb.tone)),
                  children: [zb && !xb ? (0, mT.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Eb(`${CP}rxChangeSize`),
                    onClick: () => {
                      if (!Zb) return;
                      const bb = OP(Zb, Pa);
                      var ab;
                      (ab = {
                        scram: bb,
                        heat: Zb.baf2RxHeat
                      }).scram && ab.heat < CY ? Rb(!0) : Pb(bb ? `${CP}rxResizeCooling` : `${CP}rxResizeHot`, {
                        pct: String(CY)
                      })
                    },
                    children: [db, " \u270e"]
                  }) : db, " \xb7 ", Eb(zb ? null !== (Ub = null === fb || void 0 === fb ? void 0 : fb.label) && void 0 !== Ub ? Ub : `${CP}rxState_running` : `${CP}rxSubPlanShort`)]
                })]
              })]
            }), (0, mT.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Yb && !xb && (0, mT.jsx)(MP, {
                kind: "reactor",
                busy: Yb.busy.has("apart"),
                whyNot: Nb ? () => {
                  Pb(Nb.key, Nb.params)
                } : null,
                apart: () => {
                  Mb.tap("apart", (() => {
                    Mb.send("apart")
                  }))
                }
              }), (0, mT.jsx)(xE.k, {
                onClick: Tb
              })]
            })]
          }), Yb && mb && (0, mT.jsxs)("div", {
            className: "Baf2RxBody",
            children: [zb ? (0, mT.jsx)(sP, {
              view: Yb,
              explain: Pb,
              preview: jP(Yb.status)
            }) : (0, mT.jsx)(gP, {
              view: Yb,
              explain: Pb
            }), (0, mT.jsx)(CL, {
              text: pb ? `${ZP(Eb,mb)} ${Eb(`${CP}rxTapHint`)}` : ZP(Eb, mb),
              tone: mb.tone,
              explained: Bb
            }), xb ? (0, mT.jsxs)(mT.Fragment, {
              children: [(0, mT.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Eb(`${CP}rxNotYours`)
              }), (0, mT.jsx)(SL, {
                status: Yb.status,
                store: Mb,
                readOnly: !0
              })]
            }) : zb && !kb ? (0, mT.jsxs)(mT.Fragment, {
              children: [(0, mT.jsx)(HP, {
                view: Yb,
                store: Mb,
                explain: Pb,
                explainOnce: Xb
              }), void 0 !== Yb.status.baf2RxLayout && cL(Yb.status) && (0, mT.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, mT.jsx)(SL, {
                  status: Yb.status,
                  store: Mb,
                  readOnly: !1,
                  bare: !0
                }), (0, mT.jsx)(nL, {
                  status: Yb.status,
                  store: Mb,
                  busy: Yb.busy.has("fill")
                })]
              })]
            }) : (0, mT.jsxs)(mT.Fragment, {
              children: [(0, mT.jsx)(IP, {
                view: Yb,
                store: Mb,
                keepSize: zb ? () => {
                  yb(!1)
                } : void 0
              }), DB(Yb.dims, Yb.status.baf2RxDims) && (0, mT.jsx)(dP, {
                need: Yb.status.baf2RxNeed,
                explain: Pb
              }), (0, mT.jsx)(SL, {
                status: Yb.status,
                store: Mb,
                readOnly: !1
              })]
            }), jb && (0, mT.jsx)(UP, {
              id: "baf2ResizeTitle",
              title: `${CP}rxResizeConfirmTitle`,
              body: `${CP}rxResizeConfirmBody`,
              yes: `${CP}rxChangeSize`,
              cancel: () => {
                Rb(!1)
              },
              confirm: () => {
                Rb(!1), yb(!0)
              }
            })]
          })]
        })
      })
    }
    class JP {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(bb) {
        this.view = bb;
        for (const ab of this.listeners) ab()
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

    function nP(bb) {
      let {
        commands: ab,
        store: Ub,
        power: Mb,
        water: Tb,
        reactor: Eb,
        battery: Yb,
        collider: Bb,
        terminal: eb,
        quests: vb,
        close: Lb,
        leave: Pb,
        askIslands: Xb,
        showCore: jb,
        openSocial: Rb
      } = bb;
      const {
        userContext: kb
      } = (0, hY.c)(), yb = FY.featureFlags.useSocialFeatures && kb.isLoggedIn(), [Zb, Db] = (0, Ab.useState)((() => Ub.get()));
      (0, Ab.useEffect)((() => Ub.subscribe((() => {
        Db(Ub.get())
      }))), [Ub]);
      const zb = "islands" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) ? Zb.backToCore : void 0;
      return (0, mT.jsxs)(KE.Provider, {
        value: ab,
        children: ["core" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(BL, {
          view: Zb.core,
          close: Lb,
          askIslands: Xb
        }), "dropMap" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(PL, {
          message: Zb.dropMap,
          quests: vb,
          close: Lb,
          leave: Pb
        }), "islands" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(IL, {
          message: Zb.islands,
          arrivedAtMs: Zb.arrivedAtMs,
          close: zb ? () => {
            jb(zb)
          } : Lb,
          leave: Pb,
          openSocial: yb ? Rb : null
        }), "quests" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(Nv, {
          store: vb,
          close: Lb
        }), "transfer" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(bv, {
          message: Zb.transfer,
          arrivedAtMs: Zb.arrivedAtMs,
          close: Lb,
          leave: Pb
        }), "power" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(IE, {
          store: Mb,
          close: Lb
        }), "water" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(jY, {
          store: Tb,
          close: Lb
        }), "reactor" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(cP, {
          store: Eb,
          close: Lb
        }), "battery" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(hP, {
          store: Yb,
          close: Lb
        }), "collider" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(Re, {
          store: Bb,
          close: Lb
        }), "terminal" === (null === Zb || void 0 === Zb ? void 0 : Zb.kind) && (0, mT.jsx)(lL, {
          store: eb,
          close: Lb,
          send: bb => {
            ab.send(bb)
          }
        })]
      })
    }
    var SP = Ub(37827);

    function bX(bb, ab) {
      return bb.distSq - ab.distSq
    }
    class aX {
      constructor() {
        this.list = [], this.pool = []
      }
      add(bb, ab, Ub, Ab) {
        let Mb = this.pool[this.list.length];
        Mb || (Mb = {
          x: 0,
          y: 0,
          distSq: 0,
          element: ab,
          liftRem: Ub,
          dot: Ab
        }, this.pool.push(Mb)), Mb.x = bb.x, Mb.y = bb.y, Mb.distSq = bb.distSq, Mb.element = ab, Mb.liftRem = Ub, Mb.dot = Ab, this.list.push(Mb)
      }
    }
    class UX {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = bb, this.sizes = new WeakMap, this.observer = new ResizeObserver((bb => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const ab of bb) {
            const bb = ab.borderBoxSize[0];
            "dot" !== ab.target.dataset.crowded && 0 !== bb.inlineSize && 0 !== bb.blockSize && this.sizes.set(ab.target, {
              width: bb.inlineSize,
              height: bb.blockSize
            })
          }
        })), this.remPx = 16, this.RX = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.bZ = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.bZ)
      }
      observe(bb) {
        this.observer.observe(bb)
      }
      unobserve(bb) {
        this.observer.unobserve(bb)
      }
      run(bb) {
        const ab = bb.list;
        ab.sort(bX);
        const Ub = this.pxPerVw,
          Ab = this.pxPerVh;
        this.RX.length = 0, this.hud && this.RX.push(...this.hud.boxes(performance.now()));
        for (const Tb of ab) {
          var Mb;
          const bb = this.sizes.get(Tb.element);
          let ab = "no";
          if (bb && bb.width > 0) {
            const Mb = Tb.x * Ub,
              Eb = Tb.y * Ab - Tb.liftRem * this.remPx;
            this.fit(Mb, Eb, bb.width, bb.height) || (ab = Tb.dot && this.fit(Mb, Eb, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Mb = Tb.element.dataset.crowded) && void 0 !== Mb ? Mb : "no") !== ab && ("no" === ab ? delete Tb.element.dataset.crowded : Tb.element.dataset.crowded = ab), "hidden" !== ab && (0, SP.d)(Tb.element, Tb.x, Tb.y)
        }
        ab.length = 0
      }
      fit(bb, ab, Ub, Ab) {
        const Mb = bb - Ub / 2,
          Tb = bb + Ub / 2,
          Eb = ab - Ab,
          Yb = this.RX;
        for (let Bb = 0; Bb < Yb.length; Bb += 4)
          if (Mb < Yb[Bb + 1] - 2 && Tb > Yb[Bb] + 2 && Eb < Yb[Bb + 3] - 2 && ab > Yb[Bb + 2] + 2) return !1;
        return Yb.push(Mb, Tb, Eb, ab), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.bZ)
      }
    }
    const AX = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class MX {
      constructor() {
        this.cards = AX.map((bb => document.getElementsByClassName(bb))), this.watched = AX.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(bb) {
        bb - this.refreshedAt > 1e3 && (this.refreshedAt = bb, this.stale = !0);
        for (let Ub = 0; Ub < this.cards.length; Ub++) {
          var ab;
          const bb = null !== (ab = this.cards[Ub][0]) && void 0 !== ab ? ab : null;
          bb !== this.watched[Ub] && this.watch(Ub, bb)
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
        for (const ab of this.watched) {
          if (!ab || ab.closest(".NoRoom")) continue;
          const Ub = ab.getBoundingClientRect();
          let Ab = Ub.top,
            Mb = Ub.bottom;
          if (ab === this.watched[0] && this.hud) {
            const bb = this.hud.getBoundingClientRect();
            Ab = Math.max(Ab, bb.top), Mb = Math.min(Mb, bb.bottom)
          }
          Ub.width > 0 && Mb > Ab && bb.push(Ub.left, Ub.right, Ab, Mb)
        }
      }
      watch(bb, ab) {
        const Ub = this.watched[bb];
        var Ab, Mb;
        (Ub && this.sizes.unobserve(Ub), this.watched[bb] = ab, this.stale = !0, ab && this.sizes.observe(ab), 0 === bb) && (null === (Ab = this.hud) || void 0 === Ab || Ab.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Mb = null === ab || void 0 === ab ? void 0 : ab.closest(".Baf2QuestHud")) && void 0 !== Mb ? Mb : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const TX = [0, 0, 0],
      EX = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function YX(bb, ab, Ub, Ab, Mb, Tb) {
      let [Eb, Yb, Bb] = Ab;
      const eb = (Eb + .5 - Ub[0]) ** 2 + (Yb - Ub[1]) ** 2 + (Bb + .5 - Ub[2]) ** 2;
      let vb = null;
      eb <= Tb ** 2 && (TX[0] = Eb + .5, TX[1] = Yb + Mb, TX[2] = Bb + .5, vb = ab.projectWorldPosToViewport(TX));
      const Lb = null !== vb && vb.x > -5 && vb.x < 105 && vb.y > -5 && vb.y < 105;
      return (0, SP.e)(bb, !Lb), Lb ? (EX.x = vb.x, EX.y = vb.y, EX.distSq = eb, EX) : null
    }
    class BX {
      constructor(bb) {
        this.onElement = bb, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(bb) {
        const ab = [];
        for (let Ub = 0; Ub + 4 < bb.length; Ub += 5) {
          const Ab = [bb[Ub], bb[Ub + 1], bb[Ub + 2]];
          ab.push({
            key: Ab.join(","),
            pos: Ab,
            status: AM[bb[Ub + 3]],
            kind: Wa[bb[Ub + 4]]
          })
        }
        this.markers = ab, this.keys = new Set(ab.map((bb => {
          let {
            key: ab
          } = bb;
          return ab
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
        let ab = this.refs.get(bb);
        return ab || (ab = ab => {
          const Ub = this.elements.get(bb);
          var Ab, Mb;
          Ub && (null === (Ab = this.onElement) || void 0 === Ab || Ab.call(this, Ub, !1));
          ab ? (this.elements.set(bb, ab), null === (Mb = this.onElement) || void 0 === Mb || Mb.call(this, ab, !0)) : (this.elements.delete(bb), this.refs.delete(bb))
        }, this.refs.set(bb, ab)), ab
      }
      onAfterRender(bb, ab, Ub) {
        for (const Ab of this.markers) {
          const Mb = this.elements.get(Ab.key);
          if (!Mb) continue;
          const Tb = YX(Mb, bb, ab, Ab.pos, 1.05, 24);
          Tb && Ub.add(Tb, Mb, .45, !0)
        }
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
    }
    const eX = {
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
    const vX = (0, Ab.memo)((function(bb) {
        let {
          status: ab,
          kind: Ub,
          bindRef: Ab
        } = bb;
        const {
          t: Mb
        } = (0, NM.A)(), Tb = function(bb, ab) {
          var Ub;
          if ("noFuel" === bb) {
            var Ab, Mb;
            const bb = null === (Ab = Ga[ab]) || void 0 === Ab || null === (Mb = Ab.fuels) || void 0 === Mb ? void 0 : Mb.find((bb => AU.includes(bb)));
            return null !== bb && void 0 !== bb ? bb : eX.noFuel
          }
          return void 0 !== (null === (Ub = Ga[ab]) || void 0 === Ub ? void 0 : Ub.cryoMade) ? "noOutlet" === bb ? "Fluid Pipe" : "noInput" === bb ? "Biomass" : eX[bb] : eX[bb]
        }(ab, Ub);
        return (0, mT.jsxs)("div", {
          className: iM()("Baf2StallMarker", ab),
          ref: Ab,
          hidden: !0,
          children: [Tb && (0, mT.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, mT.jsx)(HM.c, {
              itemName: Tb,
              amount: 0
            })
          }), (0, mT.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === ab ? "?" : "!"
          }), (0, mT.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Mb(`buildAFactory2Game:stallTag_${ab}`)
          })]
        })
      })),
      LX = (0, Ab.memo)((function(bb) {
        let {
          controller: ab
        } = bb;
        const [Ub, Mb] = (0, Ab.useState)((() => ab.get()));
        return (0, Ab.useEffect)((() => (Mb(ab.get()), ab.subscribe((() => {
          Mb(ab.get())
        })))), [ab]), (0, mT.jsx)("div", {
          className: "Baf2StallMarkers",
          children: Ub.map((bb => (0, mT.jsx)(vX, {
            status: bb.status,
            kind: bb.kind,
            bindRef: ab.bind(bb.key)
          }, bb.key)))
        })
      })),
      PX = RU.i + 150;
    class XX {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(bb, ab) {
        const Ub = ab - bb;
        null === this.offset || Ub < this.offset ? this.offset = Ub : this.offset = Math.min(Ub, this.offset + .02 * (ab - this.sampledAt)), this.sampledAt = ab
      }
      toLocal(bb) {
        var ab;
        return bb + (null !== (ab = this.offset) && void 0 !== ab ? ab : 0) + PX
      }
    }
    var jX = Ub(37834);
    const RX = 15 * Math.PI / 180,
      kX = Math.SQRT2,
      yX = [4, 2];

    function ZX(bb, ab) {
      const Ub = [1 / 0, 1 / 0, 1 / 0],
        Ab = [-1 / 0, -1 / 0, -1 / 0];
      for (const Bb of bb)
        for (let bb = 0; bb < 3; bb++) Ub[bb] = Math.min(Ub[bb], Bb[bb]), Ab[bb] = Math.max(Ab[bb], Bb[bb]);
      const Mb = (Ub[0] + Ab[0]) / 2,
        Tb = (Ub[1] + Ab[1]) / 2,
        Eb = (Ub[2] + Ab[2]) / 2;
      let Yb = 0;
      for (const Bb of bb) Yb = Math.max(Yb, Math.hypot(Bb[0] - Mb, Bb[1] - Tb, Bb[2] - Eb));
      return {
        x: Mb,
        y: Tb,
        z: Eb,
        r: Yb + ab
      }
    }

    function DX(bb, ab, Ub) {
      const Ab = ab.x - bb.x,
        Mb = ab.y - bb.y,
        Tb = ab.z - bb.z,
        Eb = Math.sqrt(Ab * Ab + Mb * Mb + Tb * Tb);
      if (Eb <= ab.r + 8) return 1;
      const Yb = ab.r / Eb,
        Bb = Math.sqrt(1 - Yb * Yb),
        eb = Bb < -bb.cosHalf,
        vb = (Ab * bb.dx + Mb * bb.dy + Tb * bb.dz) / Eb;
      if (!eb && vb < bb.cosHalf * Bb - bb.sinHalf * Yb) return 0;
      const Lb = Ub * kX * bb.frameMs * bb.pxPerBlock / (Eb - ab.r);
      for (let Pb = 0; Pb < yX.length; Pb++)
        if (Lb * yX[Pb] <= 1) return yX[Pb];
      return 1
    }

    function zX(bb, ab) {
      return {
        name: bb,
        at: ab,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const xX = [0, 0, 0];

    function iX(bb, ab, Ub) {
      let [, Ab, Mb, Tb, Eb, Yb] = ab;
      const Bb = RU.d * (null !== Eb && void 0 !== Eb ? Eb : 1),
        eb = [];
      for (let Xb = 0; Xb < Ab.length; Xb += 3) eb.push([Ab[Xb] + .5, Ab[Xb + 1] + .65, Ab[Xb + 2] + .5]);
      const vb = [];
      for (let Xb = 0; Xb < eb.length - 1; Xb++) {
        const [bb, ab] = [eb[Xb], eb[Xb + 1]];
        vb.push([(bb[0] + ab[0]) / 2, (bb[1] + ab[1]) / 2, (bb[2] + ab[2]) / 2])
      }
      const Lb = eb.slice(1, -1),
        Pb = new Uint8Array(Lb.length);
      for (const Xb of null !== Yb && void 0 !== Yb ? Yb : []) Pb[Xb >> 1] |= 1 & Xb ? 2 : 1;
      return {
        island: bb,
        length: Lb.length,
        loop: Tb,
        cellsPerMs: Bb,
        edges: vb,
        ge: Lb,
        bounds: ZX([...vb, ...Lb], .3),
        changed: !0,
        culled: !1,
        hide: Pb,
        items: Mb.map((bb => {
          let [ab, Ab] = bb;
          return zX(ab, (0, RU.B)(ab, Ab, Ub, Bb).at)
        }))
      }
    }

    function fX(bb, ab) {
      const {
        items: Ub
      } = bb;
      if (0 === Ub.length) return;
      const Ab = bb.length / bb.cellsPerMs,
        Mb = Math.floor((ab - Ub[0].at) / Ab) - 1;
      if (Mb > 0)
        for (const Tb of Ub) Tb.at += Mb * Ab
    }

    function mX(bb, ab) {
      const Ub = Math.min(Math.floor(ab), bb.length - 1),
        Ab = bb.hide[Ub];
      return 0 !== Ab && 0 !== (Ab & (ab - Ub < .5 ? 1 : 2))
    }

    function pX(bb, ab) {
      const Ub = Math.min(Math.floor(ab), bb.length - 1),
        Ab = ab - Ub,
        Mb = Ab < .5,
        Tb = Mb ? bb.edges[Ub] : bb.ge[Ub],
        Eb = Mb ? bb.ge[Ub] : bb.edges[Ub + 1],
        Yb = Mb ? 2 * Ab : 2 * Ab - 1;
      xX[0] = Tb[0] + (Eb[0] - Tb[0]) * Yb, xX[1] = Tb[1] + (Eb[1] - Tb[1]) * Yb, xX[2] = Tb[2] + (Eb[2] - Tb[2]) * Yb
    }
    const NX = Math.PI / 4;
    class WX {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new XX, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.bZ = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(bb) {
        const ab = performance.now();
        this.clock.sample(bb.baf2BeltLinesAt, ab), this.queue(bb.baf2BeltLinesAt, bb, 0, null, null, 0), this.applyDue(ab)
      }
      onMoves(bb) {
        const ab = performance.now(),
          Ub = bb.baf2BeltMovesAt;
        this.clock.sample(Ub, ab);
        for (const [Ab, Mb, Tb, Eb] of bb.baf2BeltMoveList) null === Mb ? this.queue(Ub - Tb, null, Ab, null, null, null !== Eb && void 0 !== Eb ? Eb : 0) : this.queue(Ub - Tb, null, Ab, Mb, null !== Eb && void 0 !== Eb ? Eb : null, 0);
        this.applyDue(ab)
      }
      start(bb) {
        this.pool = new jX.b(bb, {
          scale: .3,
          yaw: NX
        }, 64), this.bZ(), window.addEventListener("resize", this.bZ)
      }
      onAfterRender(bb) {
        const {
          pool: ab
        } = this;
        if (!ab) return;
        const Ub = performance.now(),
          Ab = Ub - this.lastRenderAt;
        this.lastRenderAt = Ub, Ab < 100 && (this.frameMs += .1 * (Ab - this.frameMs));
        const Mb = Ub + this.frameMs;
        this.applyDue(Mb);
        const Tb = bb.cameraPosition,
          Eb = ab.follow(Tb);
        this.setView(bb, Tb);
        const Yb = this.frame++;
        for (let Bb = 0; Bb < this.shown.length; Bb++) {
          const bb = this.shown[Bb],
            Ub = DX(this.view, bb.bounds, bb.cellsPerMs),
            Ab = bb.culled && 0 !== Ub;
          if (bb.culled = 0 === Ub, !Eb && !bb.changed && !Ab && (0 === Ub || (Yb + Bb) % Ub !== 0)) continue;
          bb.changed = !1, bb.loop && (fX(bb, Mb), (0, RU.v)(bb.items, bb.length, Mb, bb.cellsPerMs));
          let Tb = bb.length;
          for (let Yb = 0; Yb < bb.items.length; Yb++) {
            const Ub = bb.items[Yb],
              Ab = (0, RU.D)(Ub.at, Tb, Mb, bb.cellsPerMs);
            if (Tb = Ab - RU.n, mX(bb, Ab)) {
              null === Ub.kind || Ub.hidden || (Ub.kind.hide(Ub.slot), Ub.hidden = !0);
              continue
            }
            let Bb = Ub.kind;
            if (null === Bb) {
              if (Bb = ab.kindOf(Ub.name), null === Bb) continue;
              Ub.kind = Bb, Ub.slot = Bb.take(), Ub.hidden = !0, Ub.drawn = NaN
            } else if (Ab === Ub.drawn && !Ub.hidden && !Eb) continue;
            pX(bb, Ab), Bb.write(Ub.slot, xX[0], xX[1], xX[2]), Ub.hidden = !1, Ub.drawn = Ab
          }
        }
        ab.commit()
      }
      dispose() {
        var bb;
        window.removeEventListener("resize", this.bZ), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (bb = this.pool) || void 0 === bb || bb.dispose(), this.pool = null
      }
      setView(bb, ab) {
        const {
          cameraDir: Ub,
          lastDir: Ab
        } = this, Mb = bb.cameraDirection;
        for (let vb = 0; vb < 3; vb++) Ab[vb] = Ub[vb], Ub[vb] = Mb[vb];
        const Tb = Ub[0] * Ab[0] + Ub[1] * Ab[1] + Ub[2] * Ab[2],
          Eb = Number.isNaN(Tb) ? 0 : Math.acos(Math.min(1, Math.max(-1, Tb))),
          {
            width: Yb,
            height: Bb
          } = this,
          eb = bb.tanHalfFovX;
        ! function(bb, ab, Ub, Ab, Mb, Tb, Eb) {
          let Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          bb.x = ab[0], bb.y = ab[1], bb.z = ab[2], bb.dx = Ub[0], bb.dy = Ub[1], bb.dz = Ub[2];
          const Bb = Math.min(Math.PI, Math.atan(Math.sqrt(Ab * Ab + Mb * Mb)) + RX + Yb);
          bb.cosHalf = Math.cos(Bb), bb.sinHalf = Math.sin(Bb), bb.pxPerBlock = Tb / (2 * Mb), bb.frameMs = Eb
        }(this.view, ab, Ub, eb, eb * Bb / Yb, Bb * window.devicePixelRatio, this.frameMs, Eb)
      }
      queue(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = Math.max(this.clock.toLocal(bb), this.lastPendingAt);
        this.lastPendingAt = Eb, this.pending.push({
          at: Eb,
          lines: ab,
          line: Ub,
          name: Ab,
          pos: Mb,
          idx: Tb
        })
      }
      applyDue(bb) {
        const {
          pending: ab
        } = this;
        for (; this.pendingHead < ab.length && ab[this.pendingHead].at <= bb;) {
          const bb = ab[this.pendingHead++];
          if (bb.lines) this.applyLines(bb.lines, bb.at), bb.lines = null;
          else {
            const ab = this.lines.get(bb.line);
            ab && this.applyMove(ab, bb, bb.at)
          }
        }
        this.pendingHead === ab.length ? (ab.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > ab.length && (ab.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(bb, ab) {
        this.clearIsland(bb.baf2BeltIsland);
        for (const Ub of bb.baf2BeltLineList) this.lines.set(Ub[0], iX(bb.baf2BeltIsland, Ub, ab));
        this.shown = [...this.lines.values()]
      }
      applyMove(bb, ab, Ub) {
        let {
          name: Ab,
          pos: Mb,
          idx: Tb
        } = ab;
        bb.changed = !0, bb.loop && (fX(bb, Ub), (0, RU.v)(bb.items, bb.length, Ub, bb.cellsPerMs)), null !== Ab && null !== Mb ? (0, RU.z)(bb.items, bb.length, zX(Ab, Ub), Mb, Ub, bb.cellsPerMs) : null !== Ab ? bb.items.push(zX(Ab, Ub)) : bb.items.length > Tb && this.release((0, RU.F)(bb.items, bb.length, Ub, bb.cellsPerMs, Tb))
      }
      clearIsland(bb) {
        for (const [ab, Ub] of this.lines)
          if (Ub.island === bb) {
            for (const bb of Ub.items) this.release(bb);
            this.lines.delete(ab)
          }
      }
      release(bb) {
        null !== bb.kind && (bb.kind.release(bb.slot), bb.kind = null, bb.slot = -1, bb.hidden = !0, bb.drawn = NaN)
      }
    }
    var HX = Ub(36013),
      IX = Ub(37843);

    function dX(bb) {
      let {
        depth: ab,
        store: Ub,
        t: Mb
      } = bb;
      const Tb = function(bb) {
        const [ab, Ub] = (0, Ab.useState)(bb.lastPlayerY());
        return (0, av.f)(qM, Ub), (0, Ab.useEffect)((() => {
          Ub(bb.lastPlayerY())
        }), [bb]), ab
      }(Ub);
      if (null === Tb) return null;
      const [Eb, Yb] = ab, Bb = Tb > Eb ? Eb : null !== Yb && Tb < Yb ? Yb : null, eb = {
        y: DT(Tb),
        target: null === Bb ? "" : DT(Bb)
      };
      return (0, mT.jsx)("span", {
        className: iM()("Baf2QuestDepth", {
          Reached: null === Bb
        }),
        children: Mb(`${Tv}${null===Bb?"questDepthReached":"questDepth"}`, eb)
      })
    }

    function FX(bb) {
      let {
        also: ab,
        view: Ub,
        t: Ab
      } = bb;
      return (0, mT.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, mT.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, mT.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, mT.jsx)("strong", {
            children: Ab(`${Tv}questAlsoDownHere`)
          }), (0, mT.jsx)("span", {
            className: "Baf2QuestChips",
            children: ab.map((bb => {
              let [ab, Mb, Tb, Eb] = bb;
              return (0, mT.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Ab(`${Tv}questAlsoItem`, {
                  item: Yv(Ab, Ub.itemNames[ab], ab),
                  have: String(Mb),
                  need: String(Tb)
                }),
                children: [(0, mT.jsx)(vv, {
                  item: ab
                }), (0, mT.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Mb}/${Tb}`
                }), null !== Eb && (0, mT.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Ab(`${Tv}questAlsoDepth`, {
                    y: DT(Eb)
                  })
                })]
              }, ab)
            }))
          })]
        })]
      })
    }
    var hX = Ub(3083);

    function GX(bb) {
      let {
        expanded: ab,
        inventoryOpen: Ub,
        children: Mb
      } = bb;
      const Tb = (0, Ab.useRef)(null);
      return (0, Ab.useEffect)((() => {
        const bb = Tb.current,
          ab = null === bb || void 0 === bb ? void 0 : bb.closest(".RightElements"),
          Ab = null === bb || void 0 === bb ? void 0 : bb.firstElementChild;
        if (!bb || !ab || !Ab) return;
        return (0, IX.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [ab, Ab], (() => {
          const Mb = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Mb.length) return;
          const Tb = Math.max(...Mb.map((bb => bb.getBoundingClientRect().bottom))),
            Eb = ab.getBoundingClientRect(),
            Yb = Ub ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (Yb) {
            const ab = parseFloat(getComputedStyle(Ab).marginLeft) + parseFloat(getComputedStyle(Ab).marginRight),
              Ub = Eb.right - Yb.getBoundingClientRect().right - 8 - ab;
            bb.style.setProperty("--baf2-quest-room", `${Ub}px`), bb.classList.toggle("NoRoom", Ub < 150)
          } else bb.style.removeProperty("--baf2-quest-room"), bb.classList.remove("NoRoom");
          const Bb = Tb - Eb.top + 8,
            eb = function(bb, ab, Ub) {
              const Ab = ab.getBoundingClientRect(),
                Mb = bb.getBoundingClientRect(),
                Tb = (0, hX.g)(Mb.left, Mb.right, Ab.top + Ub);
              if (null !== Tb && Tb < Ab.bottom) return Tb - Ab.top;
              return Ab.height - (parseFloat(getComputedStyle(ab).paddingBottom) || 0)
            }(bb, ab, Bb) - 8,
            vb = window.innerHeight / 2 - Eb.top,
            {
              top: Lb,
              maxHeight: Pb
            } = function(bb, ab, Ub, Ab, Mb) {
              const Tb = Math.min(Ub, Math.max(0, ab - bb)),
                Eb = Mb ? bb : Math.max(bb, Math.min(Ab - Tb / 2, ab - Tb));
              return {
                top: Eb,
                maxHeight: Math.max(0, ab - Eb)
              }
            }(Bb, eb, function(bb) {
              const ab = bb.firstElementChild,
                Ub = ab ? ab.scrollHeight - ab.clientHeight : 0;
              return bb.getBoundingClientRect().height + Math.max(0, Ub)
            }(Ab), vb, iT());
          bb.style.top = `${Lb}px`, bb.style.maxHeight = `${Pb}px`
        }))
      }), [Ub]), (0, mT.jsx)("div", {
        ref: Tb,
        className: iM()("Baf2QuestHud", {
          Expanded: ab
        }),
        children: Mb
      })
    }

    function QX(bb) {
      let {
        amount: ab,
        t: Ub
      } = bb;
      return (0, mT.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, mT.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, mT.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: Ub(`${Tv}questStepsDone`, {
            amount: String(ab)
          })
        })]
      })
    }

    function qX(bb) {
      let {
        pulse: ab
      } = bb;
      return 0 === ab ? null : (0, mT.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, ab)
    }

    function uX(bb) {
      var ab;
      let {
        store: Ub
      } = bb;
      const Mb = (0, av.i)(QM, Ub.get()),
        [Tb, Eb] = (0, Ab.useState)(!1),
        {
          t: Yb
        } = (0, NM.A)(),
        Bb = function() {
          const [bb, ab] = (0, Ab.useState)(iT);
          return (0, Ab.useEffect)((() => (ab(iT()), fT(ab))), []), bb
        }(),
        {
          openInGameMenuName: eb,
          openEverythingMenuName: vb
        } = (0, DM.n)(["openInGameMenuName", "openEverythingMenuName"]),
        Lb = "inventory" === eb && null === vb,
        Pb = null !== eb && !Lb || null !== vb;
      if (! function(bb) {
          return null !== bb.name || null !== bb.side
        }(Mb) || Pb || "off" === Mb.tutorial) return null;
      const Xb = tM(Mb.rows),
        jb = Xb.filter((bb => bb.done)).length,
        Rb = function(bb, ab) {
          const Ub = gM(bb);
          let Ab = 0;
          return bb.filter(((bb, Mb) => !!bb.justFinished || !(bb.done || Mb < Ub || Ab > ab) && (Ab++, !0)))
        }(Mb.rows, Bb ? 0 : 2),
        kb = Bb ? Rb : function(bb, ab) {
          const Ub = ab.filter((bb => !bb.justFinished));
          if (Ub.length < 2) return [...ab];
          const Ab = bb.indexOf(Ub[0]),
            Mb = bb.indexOf(Ub[Ub.length - 1]),
            Tb = new Set(tM(bb));
          return bb.filter(((bb, Ub) => ab.includes(bb) || bb.done && Tb.has(bb) && Ub > Ab && Ub < Mb))
        }(Mb.rows, Rb),
        yb = Tb ? Mb.rows : kb,
        Zb = Tb || Bb ? [] : function(bb, ab) {
          const Ub = new Array(ab.length + 1).fill(0),
            Ab = new Set(tM(bb));
          let Mb = 0;
          for (const Tb of bb) Mb < ab.length && Tb === ab[Mb] ? Mb++ : Tb.done && Ab.has(Tb) && Ub[Mb]++;
          return Ub
        }(Mb.rows, kb),
        Db = Tb || kb.length < Mb.rows.length || null !== Mb.reward,
        zb = lM(Mb),
        xb = zb ? Yb(`${Tv}questLineComplete`) : Mb.tier ? Xv(Yb, Mb.tier) : Yb(`${Tv}currentQuest`),
        ib = function(bb) {
          var ab, Ub;
          if (lM(bb)) return null;
          const Ab = null === (ab = bb.chapters) || void 0 === ab ? void 0 : ab.find((ab => {
            let [Ub] = ab;
            return Ub === bb.tier
          }));
          if (!Ab) return null;
          const Mb = Ab[1].filter((bb => !bb[4]));
          if (0 === Mb.length) return null;
          const Tb = null === (Ub = bb.name) || void 0 === Ub ? void 0 : Ub[0],
            Eb = bb => Mb.findIndex((ab => ab[0] === Tb && (!bb || !ab[3]))),
            Yb = Eb(!0),
            Bb = Yb >= 0 ? Yb : Eb(!1);
          if (Bb >= 0) return [Bb + 1, Mb.length];
          const eb = Mb.filter((bb => bb[3])).length;
          return [Math.min(eb + 1, Mb.length), Mb.length]
        }(Mb);
      return (0, mT.jsx)(HX.e, {
        placement: "topRight",
        children: (0, mT.jsx)(GX, {
          expanded: Tb,
          inventoryOpen: Lb,
          children: (0, mT.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: Ev,
            children: [null !== Mb.name && (0, mT.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, mT.jsx)(qX, {
                pulse: Mb.pulse
              }), (0, mT.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, mT.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [xb, ib && (0, mT.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": Yb(`${Tv}questPlaceLabel`, {
                      n: String(ib[0]),
                      total: String(ib[1])
                    }),
                    children: Yb(`${Tv}questPlace`, {
                      n: String(ib[0]),
                      total: String(ib[1])
                    })
                  }), Mb.tier && Mb.core && !zb && (0, mT.jsx)(jv, {
                    core: Mb.core,
                    t: Yb
                  })]
                })
              }), (0, mT.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Yb(`${Tv}${Mb.name[0]}`, Bv(Mb.name[1]))
              }), (Xb.length > 1 || Db) && (0, mT.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Xb.length > 1 && (0, mT.jsx)(Rv, {
                  rows: Xb,
                  t: Yb
                }), Db && (0, mT.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Tb,
                  onClick: () => {
                    Eb(!Tb)
                  },
                  children: [(0, mT.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: Yb(`${Tv}questStepsToggle`, {
                      done: String(jb),
                      total: String(Xb.length)
                    })
                  }), (0, mT.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Tb ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, mT.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [yb.map(((bb, ab) => {
                  var Tb;
                  const Eb = bb.current && Mb.depth;
                  return (0, mT.jsxs)(Ab.Fragment, {
                    children: [(null !== (Tb = Zb[ab]) && void 0 !== Tb ? Tb : 0) > 0 && (0, mT.jsx)(QX, {
                      amount: Zb[ab],
                      t: Yb
                    }), (0, mT.jsx)(kv, {
                      row: bb,
                      view: Mb,
                      t: Yb,
                      extra: Eb && (0, mT.jsx)(dX, {
                        depth: Eb,
                        store: Ub,
                        t: Yb
                      })
                    })]
                  }, bb.id)
                })), (null !== (ab = Zb[yb.length]) && void 0 !== ab ? ab : 0) > 0 && (0, mT.jsx)(QX, {
                  amount: Zb[yb.length],
                  t: Yb
                }), Mb.also.length > 0 && (0, mT.jsx)(FX, {
                  also: Mb.also,
                  view: Mb,
                  t: Yb
                })]
              }), Tb && Mb.reward && (0, mT.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [Yb(`${Tv}questReward`), (0, mT.jsx)(vv, {
                  item: Mb.reward
                }), Yv(Yb, Mb.itemNames[Mb.reward], Mb.reward)]
              })]
            }), Mb.side && (0, mT.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [KM(Mb, Date.now()) && (0, mT.jsx)(qX, {
                pulse: Mb.sideCameUpAt
              }), (0, mT.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: Yb(`${Tv}questSide`)
              }), (0, mT.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Yb(`${Tv}${Mb.side.name[0]}`, Bv(Mb.side.name[1]))
              }), (0, mT.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, mT.jsx)(kv, {
                  row: Mb.side.row,
                  view: Mb,
                  t: Yb
                })
              })]
            })]
          })
        })
      })
    }
    const rX = "baf2ToastView";
    class KX {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = bb, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: bb,
          holdMs: ab
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const bb = this.dropCovered();
          bb && this.show(bb.message, bb.holdMs)
        }), 250));
        const Ub = this.dropCovered();
        null !== Ub && (Ub.holdMs > 0 || "baf2ToastCelebrate" === Ub.message.baf2ToastStyle) && "baf2ToastCelebrate" !== bb.baf2ToastStyle && this.show(Ub.message, Ub.holdMs);
        const Ab = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== bb.baf2ToastStyle && Ab > 0) return this.pending = {
          message: bb,
          holdMs: ab
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const bb = this.pending;
          this.pending = null, bb && this.present(bb.message, bb.holdMs)
        }), Ab));
        this.present(bb, ab)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(bb, ab) {
        this.clearTimers(), this.pending = null;
        const Ub = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: bb.baf2ToastText,
          style: bb.baf2ToastStyle,
          swapped: Ub,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === bb.baf2ToastStyle ? 1500 : ab), this.IR();
        const Ab = Math.min(8e3, Math.max(1e3, bb.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Ab)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.IR(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.IR()
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
      IR() {
        hM.m.IR(rX, this.view, !0)
      }
    }
    var oX = Ub(75);
    const lX = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function tX(bb) {
      let {
        store: ab
      } = bb;
      const Ub = (0, av.i)(rX, ab.get()),
        {
          openInGameMenuName: Ab,
          openEverythingMenuName: Mb
        } = (0, DM.n)(["openInGameMenuName", "openEverythingMenuName"]),
        Tb = Ub && (0, mT.jsxs)("div", {
          className: iM()("Baf2Toast", lX[Ub.style], {
            Swapped: Ub.swapped,
            Leaving: Ub.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === Ub.style && (0, mT.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, mT.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, mT.jsx)(IM.c, {
              text: Ub.text
            })
          })]
        }, Ub.id);
      return null !== Ab && null === Mb ? (0, oX.createPortal)((0, mT.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Tb
      }), document.body) : (0, mT.jsx)(HX.e, {
        children: Tb
      })
    }
    const wX = "baf2AreaView";
    class sX {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.PY = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.PY = null
      }
      arrive(bb, ab) {
        ab && function(bb) {
          return "home" === bb.baf2AreaPlace && void 0 !== bb.baf2AreaNameText
        }(bb) ? this.PY = bb : this.show(bb)
      }
      release() {
        const bb = this.PY;
        null !== bb && this.show(bb)
      }
      show(bb) {
        this.clearTimer(), this.PY = null;
        const ab = void 0 === bb.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: bb,
          ms: ab
        }, this.IR(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.IR()
        }), ab)
      }
      dispose() {
        this.clearTimer(), this.PY = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      IR() {
        hM.m.IR(wX, this.view, !0)
      }
    }

    function gX(bb) {
      var ab;
      let {
        store: Ub
      } = bb;
      const {
        t: Ab
      } = (0, NM.A)(), Mb = (0, av.i)(wX, Ub.get());
      if (!Mb) return null;
      const {
        area: Tb
      } = Mb, Eb = Tb.baf2AreaResetMinutes;
      return (0, mT.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Tb.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Mb.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, mT.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Tb.baf2AreaHeading && (0, mT.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Ab(Tb.baf2AreaHeading)
        }), (0, mT.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (ab = Tb.baf2AreaNameText) && void 0 !== ab ? ab : Ab(Tb.baf2AreaName)
        }), Tb.baf2AreaNote && (0, mT.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Ab(Tb.baf2AreaNote)
        }), void 0 !== Eb && (0, mT.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Ab("buildAFactory2Game:areaWildsReset", {
            time: zT(Ab, 60 * Eb)
          })
        })]
      }, Mb.id)
    }
    const CX = "baf2GearGauge";
    class VX {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      ZZ(bb) {
        var ab;
        if (this.clearLinger(), null === bb.gearPowerKind) return void this.set(null);
        const Ub = "jetpack" === bb.gearPowerKind && (Ab = bb.gearChargeState, Mb = bb.gearCharge, "flying" === Ab || "charging" === Ab || "outOfCharge" === Ab || "ceiling" === Ab || "offPlot" === Ab || "noPower" === Ab && Mb <= 0);
        var Ab, Mb;
        const Tb = !0 === (null === (ab = this.view) || void 0 === ab ? void 0 : ab.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Eb = Ub || "jetpack" === bb.gearPowerKind && Tb;
        this.set({
          gauge: bb,
          jetShown: Eb
        }), Eb && !Ub && (this.lingerTimer = setTimeout((() => {
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
        this.view = bb, hM.m.IR(CX, bb, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const OX = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function cX(bb) {
      let {
        store: ab
      } = bb;
      const Ub = (0, av.i)(CX, ab.get());
      return Ub ? "jetpack" === Ub.gauge.gearPowerKind ? (0, mT.jsx)(JX, {
        view: Ub
      }) : (0, mT.jsx)(nX, {
        gauge: Ub.gauge
      }) : null
    }

    function JX(bb) {
      let {
        view: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)(), {
        gauge: Ab
      } = ab, Mb = Ab.gearChargeMax > 0 ? Math.max(0, Math.min(1, Ab.gearCharge / Ab.gearChargeMax)) : 0, Tb = OX[Ab.gearChargeState], Eb = Tb ? Ub(Tb) : null;
      return (0, mT.jsxs)("div", {
        className: iM()("Baf2JetArc", {
          Shown: ab.jetShown,
          Low: Mb < .2,
          Warm: Mb >= .2 && Mb < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Mb)
        },
        "aria-hidden": !ab.jetShown,
        children: [(0, mT.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, mT.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: SX,
            pathLength: 100
          }), (0, mT.jsx)("path", {
            className: "Baf2JetArcFill",
            d: SX,
            pathLength: 100
          })]
        }), (0, mT.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Mb), "%"]
        }), Eb && (0, mT.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Eb
        })]
      })
    }

    function nX(bb) {
      let {
        gauge: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)(), Ab = function(bb, ab) {
        switch (ab.gearPowerKind) {
          case "skyPack":
            return bb("buildAFactory2Game:gearSkyPack", {
              charge: ab.gearCharge,
              max: ab.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return bb("buildAFactory2Game:gearIslandDraw", {
              power: Jb(ab.gearIslandPower),
              cost: Jb(ab.gearCostPerUse)
            });
          case "barrier":
            return bb("buildAFactory2Game:gearBarrier", {
              shield: Math.round(ab.gearCharge),
              max: ab.gearChargeMax,
              power: Jb(ab.gearIslandPower)
            });
          default:
            return null
        }
      }(Ub, ab);
      return null === Ab ? null : (0, mT.jsx)(HX.e, {
        children: (0, mT.jsx)("div", {
          className: iM()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === ab.gearChargeState || "outOfCharge" === ab.gearChargeState
          }),
          role: "status",
          children: Ab
        })
      })
    }
    const SX = (() => {
      const bb = bb => {
        const ab = bb * Math.PI / 180;
        return `${(40*Math.cos(ab)).toFixed(2)} ${(40*Math.sin(ab)).toFixed(2)}`
      };
      return `M ${bb(160)} A 40 40 0 1 1 ${bb(380)}`
    })();
    class bj {
      constructor(bb) {
        this.onElement = bb, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      ZZ(bb) {
        let ab = bb.baf2LabelsReset || bb.baf2LabelsIsland !== this.island;
        ab && (this.labels.clear(), this.island = bb.baf2LabelsIsland);
        for (const [Ub, Ab, Mb, Tb, Eb] of bb.baf2LabelsList) {
          const bb = `${Ub},${Ab},${Mb}`,
            Yb = this.labels.get(bb);
          null === Tb ? ab = this.labels.delete(bb) || ab : Yb && Yb.item === Tb && (Yb.count === Eb || Yb.count >= 0 && Eb >= 0) ? Yb.count !== Eb && (Yb.count = Eb, this.writeCount(bb, Eb)) : (this.labels.set(bb, {
            key: bb,
            pos: [Ub, Ab, Mb],
            item: Tb,
            count: Eb
          }), this.writeCount(bb, Eb), ab = !0)
        }
        if (this.changes++, ab) {
          this.snapshot = [...this.labels.values()];
          for (const bb of this.listeners) bb()
        }
      }
      bindCount(bb) {
        const ab = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${bb}`;
        let Ub = this.countRefs.get(ab);
        return Ub || (Ub = Ub => {
          var Ab, Mb;
          Ub ? (this.countElements.set(ab, Ub), this.writeCount(bb, null !== (Ab = null === (Mb = this.labels.get(bb)) || void 0 === Mb ? void 0 : Mb.count) && void 0 !== Ab ? Ab : -1)) : (this.countElements.delete(ab), this.countRefs.delete(ab))
        }, this.countRefs.set(ab, Ub)), Ub
      }
      setCountWords(bb) {
        this.countWords = bb;
        for (const [ab, Ub] of this.labels) this.writePart(`words|${ab}`, bb(Ub.count), Ub.count)
      }
      writeCount(bb, ab) {
        this.writePart(`bare|${bb}`, ZT(ab), ab), this.countElements.has(`words|${bb}`) && this.writePart(`words|${bb}`, this.countWords(ab), ab)
      }
      writePart(bb, ab, Ub) {
        const Ab = this.countElements.get(bb);
        if (!Ab || Ub < 0) return;
        const Mb = Ab.firstChild;
        Mb && 3 === Mb.nodeType && !Mb.nextSibling ? Mb.nodeValue !== ab && (Mb.nodeValue = ab) : Ab.textContent !== ab && (Ab.textContent = ab)
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
        let ab = this.refs.get(bb);
        return ab || (ab = ab => {
          const Ub = this.elements.get(bb);
          var Ab, Mb;
          Ub && (null === (Ab = this.onElement) || void 0 === Ab || Ab.call(this, Ub, !1));
          ab ? (this.elements.set(bb, ab), null === (Mb = this.onElement) || void 0 === Mb || Mb.call(this, ab, !0)) : (this.elements.delete(bb), this.refs.delete(bb))
        }, this.refs.set(bb, ab)), ab
      }
      onAfterRender(bb, ab, Ub, Ab) {
        for (const Mb of this.snapshot) {
          const Tb = this.elements.get(Mb.key);
          if (!Tb) continue;
          if (Ab(Mb.key)) {
            (0, SP.e)(Tb, !0);
            continue
          }
          const Eb = YX(Tb, bb, ab, Mb.pos, 1.1, 24);
          Eb && Ub.add(Eb, Tb, 0, !1)
        }
      }
    }
    const aj = (0, Ab.memo)((function(bb) {
        let {
          item: ab
        } = bb;
        return (0, mT.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, mT.jsx)(HM.c, {
            itemName: ab,
            amount: 0
          })
        })
      })),
      Uj = (0, Ab.memo)((function(bb) {
        let {
          label: ab,
          bindRef: Ub,
          countRef: Ab,
          wordsRef: Mb
        } = bb;
        return (0, mT.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: Ub,
          hidden: !0,
          children: [(0, mT.jsx)(aj, {
            item: ab.item
          }), ab.count >= 0 && (0, mT.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, mT.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Mb
            }), (0, mT.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Ab
            })]
          })]
        })
      })),
      Aj = (0, Ab.memo)((function(bb) {
        let {
          store: ab
        } = bb;
        const {
          t: Ub
        } = (0, NM.A)(), [Mb, Tb] = (0, Ab.useState)((() => ab.list()));
        return (0, Ab.useEffect)((() => (Tb(ab.list()), ab.subscribe((() => {
          Tb(ab.list())
        })))), [ab]), (0, Ab.useEffect)((() => {
          ab.setCountWords((bb => Ub("buildAFactory2Game:labelSiloCount", {
            count: ZT(bb)
          })))
        }), [ab, Ub]), (0, mT.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Mb.map((bb => -2 === bb.count ? null : (0, mT.jsx)(Uj, {
            label: bb,
            bindRef: ab.bind(bb.key),
            countRef: ab.bindCount(bb.key),
            wordsRef: ab.bindCount(bb.key, "words")
          }, bb.key)))
        })
      })),
      Mj = {
        read: () => !0,
        write: () => {}
      };

    function Tj(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }

    function Ej(bb) {
      let [ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb] = bb;
      const Xb = void 0 === Lb || void 0 === Pb ? function(bb) {
        return [Math.floor((bb - 1) / 2), 0]
      }(Tb) : [Lb, Pb];
      return {
        kind: 0 === Bb ? "reactor" : "battery",
        box: tU([ab, Ub, Ab], Mb, Tb, Eb, Yb, Xb),
        formed: 1 === eb,
        level: vb
      }
    }
    class Yj {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mj;
        this.guideSetting = bb, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = bb.read()
      }
      ZZ(bb) {
        var ab;
        const Ub = new Map;
        for (const Ab of bb.baf2RxPlanList) {
          const bb = Ej(Ab);
          Ub.set(Tj(bb.box.ctrl), bb)
        }
        this.plans = Ub, this.layouts = new Map((null !== (ab = bb.baf2RxLayouts) && void 0 !== ab ? ab : []).map((bb => {
          let [ab, Ub, Ab, Mb] = bb;
          return [Tj([ab, Ub, Ab]), Mb]
        }))), this.predicted.clear(), bb.baf2RxFormedAt && (this.formed = {
          ctrl: bb.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Ab of [...this.startersOff]) {
          const bb = Ub.get(Ab);
          bb && !bb.formed || this.startersOff.delete(Ab)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((bb => this.planByKey(bb)))
      }
      planAt(bb) {
        return this.planByKey(Tj(bb))
      }
      predictSize(bb, ab) {
        this.predicted.set(Tj(bb), ab), this.changed()
      }
      unpredict(bb) {
        this.predicted.delete(Tj(bb)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(bb) {
        var ab;
        const Ub = Tj(bb);
        return this.predicted.has(Ub) ? null : null !== (ab = this.layouts.get(Ub)) && void 0 !== ab ? ab : null
      }
      showsStarter(bb) {
        return !this.startersOff.has(Tj(bb))
      }
      setStarter(bb, ab) {
        const Ub = Tj(bb);
        ab ? this.startersOff.delete(Ub) : this.startersOff.add(Ub), this.changed()
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
        const ab = this.plans.get(bb);
        if (!ab) return null;
        const Ub = this.predicted.get(bb);
        return Ub ? {
          ...ab,
          box: sU(ab.box, ab.kind, Ub[0], Ub[1], Ub[2])
        } : ab
      }
      changed() {
        this.version++;
        for (const bb of this.listeners) bb()
      }
    }
    var Bj = Ub(205);
    const ej = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function vj(bb, ab, Ub, Ab) {
      const Mb = bb.length / 3;
      for (let Tb = 0; Tb < ej.length / 3; Tb++) bb.push(ej[3 * Tb] * Ab[0] / 2 + Ub[0], ej[3 * Tb + 1] * Ab[1] / 2 + Ub[1], ej[3 * Tb + 2] * Ab[2] / 2 + Ub[2]);
      for (let Tb = Mb; Tb < Mb + 24; Tb += 4) ab.push(Tb, Tb + 1, Tb + 2, Tb, Tb + 2, Tb + 3)
    }

    function Lj(bb, ab, Ub) {
      const Ab = ab[0][0],
        Mb = [],
        Tb = [];
      for (const [Eb, Yb] of ab) vj(Mb, Tb, [Eb[0] - Ab[0], Eb[1] - Ab[1], Eb[2] - Ab[2]], Yb);
      return bb.createGameMesh({
        positions: Mb,
        indices: Tb
      }, Ub, Ab)
    }

    function Pj(bb, ab) {
      const Ub = bb.w - 2,
        Ab = bb.d - 2;
      return 1 === function(bb, ab, Ub, Ab) {
        const [Mb, Tb, Eb] = bb;
        if (Number(Mb <= 2) + Number(Tb <= 2) + Number(Eb <= 2) >= 2) return function(bb, ab, Ub) {
          return (bb + ab + Ub) % 2 === 0 ? 1 : 3
        }(ab, Ub, Ab);
        const [Yb, Bb] = Mb >= Tb && Mb >= Eb ? [Ub, Ab] : Tb >= Eb ? [ab, Ab] : [ab, Ub];
        return Yb % 2 === 0 && Bb % 2 === 0 ? 1 : 3
      }([Ub, bb.h - 2, Ab], ab % Ub, Math.floor(ab / (Ub * Ab)), Math.floor(ab / Ub) % Ab) ? "rod" : "channel"
    }

    function Xj(bb, ab, Ub) {
      if ("reactor" !== bb.kind || bb.formed || !ab) return !1;
      const Ab = VU(bb.box);
      for (let Mb = 0; Mb < Ab; Mb++) {
        const bb = Ub(Mb);
        if (null !== bb && IU(bb)) return !1
      }
      return !0
    }

    function jj(bb, ab, Ub, Ab, Mb) {
      var Tb;
      let Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const Yb = bA(bb.box, ab),
        Bb = MA(bb.kind, Yb, Ub);
      if ("wrong" === Bb || "blocked" === Bb) return "wrong";
      if (!Mb) return null;
      if ("inside" === Yb && "reactor" === bb.kind && "Air" === dU(Ub)) {
        if (null !== Eb) {
          var eb;
          const Ub = VL[OL(Eb, aA(bb.box, ab))];
          return Ub && null !== (eb = mB(Ub)) && void 0 !== eb ? eb : null
        }
        if (Ab) return Pj(bb.box, aA(bb.box, ab))
      }
      if ("missing" !== Bb) return null;
      const vb = TA(bb.kind, Yb);
      return null === vb ? null : null !== (Tb = mB(vb)) && void 0 !== Tb ? Tb : null
    }
    const Rj = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function kj(bb, ab, Ub) {
      const Ab = Ub => {
        const Ab = ab(nU(bb.box, Ub));
        return null !== Ab && function(bb, ab) {
          return "reactor" !== bb.kind || ab !== cU(bb.box) && "inside" !== bA(bb.box, ab)
        }(bb, Ub) && "ok" !== MA(bb.kind, bA(bb.box, Ub), Ab)
      };
      if (Ub) {
        const Tb = SU(bb.box, [Math.floor(Ub[0]), Math.floor(Ub[1]), Math.floor(Ub[2])]);
        if (Tb >= 0 && (Ab(Tb) || (Mb = Tb, "reactor" === bb.kind && "inside" === bA(bb.box, Mb) && "Air" === ab(nU(bb.box, Mb))))) return Tb
      }
      var Mb;
      const Tb = VU(bb.box);
      for (let Eb = 0; Eb < Tb; Eb++)
        if (Ab(Eb)) return Eb;
      return -1
    }

    function yj(bb, ab) {
      return Math.floor(ab / (bb.w * bb.d))
    }

    function Zj(bb, ab, Ub) {
      return Ub >= 0 && yj(bb, ab) > yj(bb, Ub)
    }

    function Dj(bb, ab) {
      return ab >= 0 && bb.h >= 3 && yj(bb, ab) === bb.h - 1
    }

    function zj(bb) {
      const ab = dU(bb);
      return ab === ZU || "Collider" === ab || "Laser" === ab || ab.startsWith("_Collider ")
    }

    function xj(bb, ab, Ub, Ab) {
      if (Ab(bb)) return null;
      if (!Rj.every((ab => {
          let [Ab, Mb, Tb] = ab;
          const Eb = Ub([bb[0] + Ab, bb[1] + Mb, bb[2] + Tb]);
          return null !== Eb && !rU("reactor", Eb) && "reactor" !== FU(Eb)
        }))) return null;
      const Mb = KU("reactor").min,
        Tb = tU([bb[0], bb[1], bb[2]], function(bb, ab) {
          const Ub = ab[0] - (bb[0] + .5),
            Ab = ab[2] - (bb[2] + .5);
          return Math.abs(Ub) >= Math.abs(Ab) ? Ub >= 0 ? 2 : 4 : Ab >= 0 ? 1 : 3
        }(bb, ab), Mb, Mb, Mb, wU("reactor", Mb)),
        Eb = cU(Tb);
      let Yb = !0;
      for (let Bb = 0; Bb < VU(Tb) && Yb; Bb++) {
        if (Bb === Eb) continue;
        const bb = nU(Tb, Bb),
          ab = Ub(bb);
        Yb = !Ab(bb) && (null === ab || !zj(ab))
      }
      return {
        box: Tb,
        fits: Yb
      }
    }
    const ij = fB,
      fj = "baf2Goal",
      mj = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      pj = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Nj = .4;

    function Wj(bb, ab) {
      let [Ub, Ab, Mb] = bb;
      const Tb = FB([Ub - .02, Ab - .02, Mb - .02], [Ub + 1.02, Ab + 1.02, Mb + 1.02], .07);
      return ab && (Tb.push([
        [Ub + .5, Ab + 1 + .7, Mb + .5],
        [.08, 1.4, .08]
      ]), Tb.push([
        [Ub + .5, Ab + 1 + 1.4 + .2, Mb + .5],
        [Nj, Nj, Nj]
      ])), Tb
    }

    function Hj(bb, ab) {
      let [Ub, Ab, Mb] = ab;
      return bb.isBlockInLoadedChunk(Ub, Ab, Mb) ? bb.blockIdToBlockName(bb.getBlockId(Ub, Ab, Mb)) : null
    }
    let Ij = null;
    const dj = new Set;
    let Fj = null;

    function hj(bb) {
      Ij = bb;
      for (const ab of dj) ab(bb)
    }
    class Gj {
      constructor(bb) {
        var ab;
        this.plans = bb, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (ab = bb => {
          var ab, Ub;
          this.setGoal(null !== (ab = null === bb || void 0 === bb ? void 0 : bb.goal) && void 0 !== ab ? ab : null, null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.startsBattery) && void 0 !== Ub && Ub)
        }, Fj ??= [hM.m.subscribe("setDirectionArrow", (bb => {
          let {
            id: ab,
            position: Ub,
            text: Ab
          } = bb;
          ab === fj && hj({
            goal: [Math.floor(Ub[0]), Math.floor(Ub[1]), Math.floor(Ub[2])],
            startsBattery: JSON.stringify(null !== Ab && void 0 !== Ab ? Ab : null).includes("arrowStartBattery")
          })
        })), hM.m.subscribe("clearDirectionArrow", (bb => {
          let {
            id: ab
          } = bb;
          null !== ab && ab !== fj || hj(null)
        }))], dj.add(ab), ab(Ij), () => {
          dj.delete(ab)
        })
      }
      onAfterRender(bb, ab) {
        const Ub = performance.now();
        if (this.cues.length > 0) {
          const ab = .55 + .45 * Math.sin(Ub / 1100 * Math.PI * 2);
          for (const Ub of this.cues) bb.setGameMesh(Ub, {
            visibility: ab
          })
        }
        if (Ub - this.lastCheckMs < 150) return;
        this.lastCheckMs = Ub;
        const Ab = this.plans.all().filter((bb => {
            const [Ub, Ab, Mb] = bb.box.ctrl;
            return (!bb.formed || null !== this.plans.layoutOf(bb.box.ctrl)) && (Ub - ab[0]) ** 2 + (Ab - ab[1]) ** 2 + (Mb - ab[2]) ** 2 <= 2304
          })),
          Mb = function(bb, ab) {
            const Ub = Bj.c.Mj,
              Ab = new Map;
            for (const Tb of ab) {
              const ab = nU(Tb.box, 0),
                Eb = nU(Tb.box, VU(Tb.box) - 1),
                Yb = [Math.min(ab[0], Eb[0]), Math.min(ab[1], Eb[1]), Math.min(ab[2], Eb[2])].map((bb => Math.floor(bb / Ub))),
                Bb = [Math.max(ab[0], Eb[0]), Math.max(ab[1], Eb[1]), Math.max(ab[2], Eb[2])].map((bb => Math.floor(bb / Ub)));
              for (let Ub = Yb[0]; Ub <= Bb[0]; Ub++)
                for (let ab = Yb[1]; ab <= Bb[1]; ab++)
                  for (let Tb = Yb[2]; Tb <= Bb[2]; Tb++) {
                    var Mb;
                    Ab.set(`${Ub},${ab},${Tb}`, null !== (Mb = bb.getChunkVersion(Ub, ab, Tb)) && void 0 !== Mb ? Mb : -1)
                  }
            }
            return Ab
          }(bb, Ab);
        this.plans.getVersion() === this.storeVersion && (function(bb, ab) {
          if (bb.size !== ab.size) return !1;
          for (const [Ub, Ab] of bb)
            if (ab.get(Ub) !== Ab) return !1;
          return !0
        }(Mb, this.chunkVersions) || Ub - this.lastRescanMs < 600) || (this.lastRescanMs = Ub, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Mb, this.redraw(bb, Ab))
      }
      dispose(bb) {
        this.unwatch(), Ij = null, this.clearMeshes(bb), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(bb, ab) {
        var Ub;
        (null === bb || void 0 === bb ? void 0 : bb.join()) === (null === (Ub = this.goal) || void 0 === Ub ? void 0 : Ub.join()) && ab === this.startsBattery || (this.goal = bb, this.startsBattery = ab, this.storeVersion = -1)
      }
      redraw(bb, ab) {
        const Ub = ab => Hj(bb, ab),
          Ab = new Map,
          Mb = [],
          Tb = this.plans.guideOn();
        for (const eb of ab) {
          const bb = Tb && Xj(eb, this.plans.showsStarter(eb.box.ctrl), (bb => Ub(nU(eb.box, bb)))),
            ab = "reactor" === eb.kind ? this.plans.layoutOf(eb.box.ctrl) : null,
            Eb = Tb && !eb.formed ? kj(eb, Ub, this.goal) : -1;
          Eb >= 0 && Mb.push([nU(eb.box, Eb), Dj(eb.box, Eb)]);
          const Yb = VU(eb.box);
          for (let Mb = 0; Mb < Yb; Mb++) {
            const Yb = nU(eb.box, Mb),
              Bb = Ub(Yb),
              vb = null === Bb ? null : jj(eb, Mb, Bb, bb, Tb, ab);
            if (null !== vb) {
              const bb = "wrong" !== vb && Zj(eb.box, Mb, Eb),
                ab = bb ? `${vb}Dim` : vb;
              let Ub = Ab.get(ab);
              Ub || (Ub = {
                draw: {
                  ghost: vb,
                  dim: bb
                },
                list: []
              }, Ab.set(ab, Ub)), Ub.list.push(Yb)
            }
          }
        }
        if (Tb && this.startsBattery && this.goal) {
          const [bb, ab, Mb] = this.goal, Tb = [];
          for (const [Ab, Eb, Yb] of mj) {
            const Bb = [bb + Ab, ab + Eb, Mb + Yb];
            "Air" === Ub(Bb) && Tb.push(Bb)
          }
          if (Tb.length > 0) {
            var Eb;
            const bb = null !== (Eb = Ab.get("cell")) && void 0 !== Eb ? Eb : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            bb.list.push(...Tb), Ab.set("cell", bb)
          }
        }
        const Yb = [...Ab.keys()].sort(),
          Bb = [...Yb.map((bb => `${bb}:${Ab.get(bb).list.join(";")}`)), `cue:${Mb.join(";")}`].join("|");
        if (Bb !== this.shownKey) {
          this.shownKey = Bb, this.clearMeshes(bb);
          for (const ab of Yb) {
            const {
              draw: Ub,
              list: Mb
            } = Ab.get(ab);
            this.meshes.push(this.build(bb, Ub, Mb))
          }
          for (const [ab, Ub] of Mb) this.cues.push(Lj(bb, Wj(ab, Ub), pj))
        }
      }
      build(bb, ab, Ub) {
        let {
          ghost: Ab,
          dim: Mb
        } = ab;
        const {
          size: Tb,
          colour: Eb,
          alpha: Yb
        } = ij[Ab], Bb = Ub[0], eb = [], vb = [];
        for (const [Lb, Pb, Xb] of Ub) vj(eb, vb, [Lb - Bb[0] + .5, Pb - Bb[1] + .5, Xb - Bb[2] + .5], [Tb, Tb, Tb]);
        return bb.createGameMesh({
          positions: eb,
          indices: vb
        }, {
          rgb: Eb,
          alpha: Yb * (Mb ? .3 : 1)
        }, Bb)
      }
      clearMeshes(bb) {
        for (const ab of [...this.meshes, ...this.cues]) bb.disposeGameMesh(ab);
        this.meshes = [], this.cues = []
      }
    }
    const Qj = [.56, .83, 1],
      qj = [1, .3, .25];
    class uj {
      constructor(bb) {
        this.plans = bb, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(bb, ab, Ub) {
        var Ab;
        const Mb = performance.now();
        if (Mb - this.lastCheckMs < 150) return;
        this.lastCheckMs = Mb;
        const Tb = ab => Hj(bb, ab),
          Eb = null === (Ab = bb.vab(ab)) || void 0 === Ab ? void 0 : Ab.name,
          Yb = Eb && "Reactor Frame" === dU(Eb) ? bb.getTargetedBlock() : null,
          Bb = Yb ? [Yb.nX[0], Yb.nX[1], Yb.nX[2]] : null,
          eb = null !== Bb && "Air" === Tb(Bb) && Bb.every(((bb, ab) => Math.abs(bb + .5 - Ub[ab]) <= 8)) ? xj(Bb, Ub, Tb, (bb => this.inPlan(bb))) : null,
          vb = eb ? `${eb.box.ctrl.join()}|${eb.box.rot}|${eb.fits}` : "";
        vb !== this.shownKey && this.show(bb, vb, eb)
      }
      dispose(bb) {
        this.clear(bb), this.shownKey = ""
      }
      inPlan(bb) {
        return this.plans.all().some((ab => SU(ab.box, bb) >= 0))
      }
      show(bb, ab, Ub) {
        if (this.clear(bb), this.shownKey = ab, !Ub) return;
        const {
          box: Ab,
          fits: Mb
        } = Ub, Tb = Mb ? Qj : qj, {
          lo: Eb,
          hi: Yb
        } = dB(Ab);
        this.meshes.push(Lj(bb, FB(Eb, Yb, .05), {
          rgb: Tb,
          alpha: 1
        }));
        const Bb = [],
          eb = nU(Ab, 0)[1];
        for (let vb = 0; vb < Ab.w * Ab.d; vb++) {
          const [bb, , ab] = nU(Ab, vb);
          Bb.push([
            [bb + .5, eb + .02 + .01, ab + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Lj(bb, Bb, {
          rgb: Tb,
          alpha: .25
        }))
      }
      clear(bb) {
        for (const ab of this.meshes) bb.disposeGameMesh(ab);
        this.meshes = []
      }
    }
    const rj = "buildAFactory2Game:";

    function Kj(bb, ab, Ub) {
      const Ab = bb => {
          const [Ub, Ab, Mb] = bb.box.ctrl;
          return Ub === ab[0] && Ab === ab[1] && Mb === ab[2]
        },
        Mb = bb.find((bb => Ab(bb) || SU(bb.box, ab) >= 0));
      if (!Mb) return null;
      const Tb = function(bb, ab, Ub) {
        const {
          w: Ab,
          h: Mb,
          d: Tb
        } = bb.box, Eb = "reactor" === bb.kind ? `${rj}rxTitle` : `${rj}batTitle`;
        if (bb.formed) return {
          key: `${rj}lookPlanFormed`,
          kindKey: Eb,
          w: Ab,
          h: Mb,
          d: Tb,
          count: 0
        };
        let Yb = 0,
          Bb = 0;
        for (let vb = 0; vb < VU(bb.box); vb++) {
          const ab = Ub(nU(bb.box, vb)),
            Ab = null === ab ? "ok" : MA(bb.kind, bA(bb.box, vb), ab);
          Yb += "missing" === Ab ? 1 : 0, Bb += "wrong" === Ab || "blocked" === Ab ? 1 : 0
        }
        const eb = function(bb, ab, Ub) {
          if (ab < 0 || null === Ub) return;
          const Ab = bA(bb.box, ab),
            Mb = MA(bb.kind, Ab, Ub);
          return "blocked" === Mb ? `${rj}lookWhy_blocked` : "wrong" === Mb ? "ctrl" === Ab ? `${rj}lookWhy_ctrl` : `${rj}lookWhy_reactor_${Ab}` : void 0
        }(bb, SU(bb.box, ab), Ub([ab[0], ab[1], ab[2]]));
        if (Yb > 0) return {
          key: `${rj}lookPlanToBuild`,
          kindKey: Eb,
          w: Ab,
          h: Mb,
          d: Tb,
          count: Yb,
          why: eb
        };
        if (Bb > 0) return {
          key: `${rj}lookPlanTakeOut`,
          kindKey: Eb,
          w: Ab,
          h: Mb,
          d: Tb,
          count: Bb,
          why: eb
        };
        return {
          key: "reactor" === bb.kind ? `${rj}lookPlanNoRods` : `${rj}lookPlanDone`,
          kindKey: Eb,
          w: Ab,
          h: Mb,
          d: Tb,
          count: 0
        }
      }(Mb, ab, Ub);
      return "reactor" === Mb.kind && Ab(Mb) ? {
        ...Tb,
        ctrl: !0
      } : Tb
    }

    function oj(bb, ab) {
      return bb === ab || null !== bb && null !== ab && bb.key === ab.key && bb.kindKey === ab.kindKey && bb.w === ab.w && bb.h === ab.h && bb.d === ab.d && bb.count === ab.count && bb.why === ab.why && bb.ctrl === ab.ctrl
    }

    function lj() {
      return performance.now()
    }
    class tj {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lj;
        this.ticket = bb, this.sent = ab, this.backstopMs = Ub, this.now = Ab, this.queuedAt = void 0, this.queuedAt = Ab()
      }
      answered() {
        const bb = this.now(),
          ab = this.sent.leftAt(this.ticket);
        return null !== ab && bb - ab > 4e3 || bb - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class wj {
      constructor() {
        this.echoes = []
      }
      add(bb) {
        this.echoes = this.echoes.filter((bb => !bb.answered())), this.echoes.push(bb)
      }
      answered() {
        var bb, ab;
        return null === (bb = null === (ab = this.echoes.at(-1)) || void 0 === ab ? void 0 : ab.answered()) || void 0 === bb || bb
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((bb => bb.answered()))
      }
      age() {
        var bb, ab;
        return null !== (bb = null === (ab = this.echoes.at(-1)) || void 0 === ab ? void 0 : ab.age()) && void 0 !== bb ? bb : null
      }
      clear() {
        this.echoes = []
      }
    }
    class sj {
      constructor(bb) {
        this.send = bb, this.value = null, this.sent = null, this.echoes = new wj, this.down = !1, this.timer = null
      }
      shown(bb) {
        return null === this.value ? bb : this.down || this.value !== this.sent ? this.value : bb === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), bb) : this.value
      }
      pendingFor(bb) {
        return null !== this.value && this.value === this.sent && bb !== this.value ? this.echoes.age() : null
      }
      assume(bb, ab) {
        this.disarm(), this.down = !1, this.value = bb, this.sent = bb, this.echoes.clear(), this.echoes.add(ab)
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
    class gj {
      constructor() {
        this.pending = new Map
      }
      set(bb, ab, Ub) {
        var Ab;
        const Mb = null !== (Ab = this.pending.get(bb)) && void 0 !== Ab ? Ab : {
          on: ab,
          echoes: new wj
        };
        Mb.on = ab, Mb.echoes.add(Ub), this.pending.set(bb, Mb)
      }
      shown(bb) {
        let ab = bb;
        for (const [Ub, {
            on: Ab,
            echoes: Mb
          }] of this.pending) 0 !== (bb & Ub) === Ab && Mb.agreeCounts() || Mb.answered() ? this.pending.delete(Ub) : ab = Ab ? ab | Ub : ab & ~Ub;
        return ab
      }
      pendingMask() {
        let bb = 0;
        for (const ab of this.pending.keys()) bb |= ab;
        return bb
      }
      pendingFor(bb) {
        let ab = null;
        for (const [Ab, {
            on: Mb,
            echoes: Tb
          }] of this.pending) {
          if (void 0 !== bb && 0 !== (bb & Ab) === Mb) continue;
          const Eb = Tb.age();
          var Ub;
          if (null !== Eb) ab = Math.max(null !== (Ub = ab) && void 0 !== Ub ? Ub : 0, Eb)
        }
        return ab
      }
      clear() {
        this.pending.clear()
      }
    }
    class Cj {
      constructor() {
        this.dims = null, this.echoes = new wj, this.unmet = null
      }
      shown(bb) {
        var ab;
        return this.dims && (Vj(this.dims, bb) && this.echoes.agreeCounts() || this.echoes.answered()) && (Vj(this.dims, bb) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (ab = this.dims) && void 0 !== ab ? ab : bb
      }
      takeUnmet() {
        const bb = this.unmet;
        return this.unmet = null, bb
      }
      set(bb, ab) {
        this.dims = bb, this.echoes.add(ab)
      }
      pendingFor(bb) {
        return null === this.dims || bb && Vj(this.dims, bb) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function Vj(bb, ab) {
      return bb[0] === ab[0] && bb[1] === ab[1] && bb[2] === ab[2]
    }
    class Oj {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lj;
        this.now = bb, this.taps = new Map
      }
      tap(bb, ab, Ub) {
        return !this.busy(bb) && (this.taps.set(bb, {
          at: this.now(),
          done: ab
        }), Ub(), !0)
      }
      settle(bb) {
        for (const [ab, Ub] of [...this.taps]) Ub.done(bb) && this.taps.delete(ab)
      }
      busy(bb) {
        const ab = this.taps.get(bb);
        return !!ab && (!(this.now() - ab.at >= 3e3) || (this.taps.delete(bb), !1))
      }
      busyIds() {
        const bb = new Set;
        for (const ab of [...this.taps.keys()]) this.busy(ab) && bb.add(ab);
        return bb
      }
      clear() {
        this.taps.clear()
      }
    }

    function cj(bb) {
      return {
        send: ab => bb.track(ab),
        sendUrgent: (ab, Ub) => bb.track(ab, {
          urgent: !0,
          supersedes: Ub
        }),
        leftAt: ab => bb.leftAt(ab),
        holdReserve: () => bb.holdUrgentReserve(),
        answerMs: hE
      }
    }

    function Jj() {
      return performance.now()
    }

    function nj(bb) {
      const ab = bb.baf2RxNeed.map((bb => {
        let [ab, Ub] = bb;
        return [ab, Ub]
      }));
      return JSON.stringify([bb.baf2RxFormed, ab, bb.baf2RxBad, bb.baf2RxCells])
    }

    function Sj(bb, ab) {
      const Ub = 0 !== (ab & Pa),
        Ab = 0 !== (bb.baf2RxFlags & Pa);
      return !Ub || Ab || "running" !== bb.baf2RxState && "idle" !== bb.baf2RxState ? !Ub && Ab && "scram" === bb.baf2RxState && bb.baf2RxFuel > 0 ? "idle" : bb.baf2RxState : "scram"
    }

    function bR(bb) {
      return JSON.stringify([bb.baf2BatFormed, bb.baf2BatNeed, bb.baf2BatBad])
    }

    function aR(bb) {
      return bb.join(",")
    }
    class UR {
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
    class AR {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(bb, ab) {
        this.lastAt = bb, this.lastUntil = bb + ab
      }
      answered(bb) {
        return this.lastAt >= bb || bb < this.lastUntil
      }
    }
    class MR {
      constructor(bb, ab) {
        this.link = bb, this.now = ab, this.hold = new Cj, this.picked = null, this.notTaken = null
      }
      shown(bb) {
        const ab = this.hold.shown(bb);
        if (this.hold.takeUnmet() && this.picked) {
          var Ub;
          const {
            plans: ab,
            ctrl: Ab,
            at: Mb
          } = this.picked;
          this.picked = null, ab.unpredict(Ab), null === (Ub = this.notTaken) || void 0 === Ub || Ub.call(this, bb, Mb)
        }
        return ab
      }
      pendingFor(bb) {
        return this.hold.pendingFor(bb)
      }
      GP(bb, ab, Ub) {
        bb.predictSize(ab, Ub), this.picked = {
          plans: bb,
          ctrl: ab,
          at: this.now()
        };
        const Ab = this.link.send(La(ab, "plan", ...Ub));
        this.hold.set(Ub, new tj(Ab, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class TR {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Jj;
        this.plans = bb, this.readInterior = ab, this.link = Ub, this.now = Ab, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new gj, this.throttle = void 0, this.oneShots = void 0, this.listeners = new UR, this.redraw = null, this.releaseReserve = null, this.size = new MR(Ub, Ab), this.oneShots = new Oj(Ab), this.throttle = new sj((bb => this.echo(this.link.send(this.command("throttle", bb)))))
      }
      set(bb) {
        !bb.baf2RxOpen && this.raw && aR(this.raw.baf2RxAt) === aR(bb.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(bb), this.IR(bb)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(bb) {
        this.size.notTaken = bb
      }
      resize(bb) {
        this.raw && (this.size.GP(this.plans, this.raw.baf2RxAt, bb), this.IR(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const bb = this.raw.baf2RxAt;
        this.plans.setStarter(bb, !this.plans.showsStarter(bb)), this.IR(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.IR(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.IR(this.raw)
      }
      send(bb) {
        if (this.raw) {
          for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
          this.link.send(this.command(bb, ...Ub))
        }
      }
      tap(bb, ab) {
        this.raw && this.oneShots.tap(bb, function(bb, ab) {
          if ("start" === bb) return bb => 0 === (bb.baf2RxFlags & Pa);
          if ("odConfirm" === bb) return bb => 0 !== (bb.baf2RxFlags & Xa);
          const Ub = nj(ab);
          return bb => nj(bb) !== Ub
        }(bb, this.raw), ab) && ("start" === bb && (this.startedAt = this.now()), this.IR(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(Pa, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(bb, ab) {
        if (!this.raw) return;
        const Ub = bb === Pa ? this.command(ab ? "scram" : "start") : this.command("od", ab ? 1 : 0),
          Ab = ab && bb === Pa,
          Mb = `${va} ${this.raw.baf2RxAt.join(" ")} `,
          Tb = this.echo(Ab ? this.link.sendUrgent(Ub, (bb => {
            const ab = bb.startsWith(Mb) ? bb.slice(Mb.length).split(" ")[0] : null;
            return "throttle" === ab || "start" === ab
          })) : this.link.send(Ub));
        this.flags.set(bb, ab, Tb), Ab && this.throttle.assume(0, Tb), this.IR(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(bb) {
        this.throttle.drag(bb), this.raw && this.IR(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.IR(this.raw)
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
        for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
        return La(this.raw.baf2RxAt, bb, ...Ub)
      }
      echo(bb) {
        return new tj(bb, this.link, this.link.answerMs, this.now)
      }
      IR(bb) {
        var ab;
        this.raw = bb;
        const Ub = this.flags.shown(bb.baf2RxFlags),
          Ab = {
            ...bb,
            baf2RxFlags: Ub,
            baf2RxTarget: this.throttle.shown(bb.baf2RxTarget),
            baf2RxState: Sj(bb, Ub)
          },
          Mb = this.size.shown(Ab.baf2RxDims),
          Tb = this.throttle.pendingFor(),
          Eb = [this.throttle.pendingFor(bb.baf2RxTarget), this.flags.pendingFor(bb.baf2RxFlags), this.size.pendingFor(bb.baf2RxDims)].filter((bb => null !== bb)),
          Yb = Eb.length > 0 ? Math.max(...Eb) : null,
          Bb = this.oneShots.busyIds(),
          eb = Ab.baf2RxAt;
        let vb, Lb, Pb = null,
          Xb = [Math.max(0, Mb[0] - 2), Math.max(0, Mb[1] - 2), Math.max(0, Mb[2] - 2)];
        if (Ab.baf2RxFormed) {
          const [bb, ab, Ub] = Ab.baf2RxDims;
          Xb = [Math.max(0, bb - 2), Math.max(0, ab - 2), Math.max(0, Ub - 2)], vb = Array.from(Ab.baf2RxCells, Number), Lb = `${Xb.join(",")}:${Ab.baf2RxCells}`
        } else {
          var jb;
          const bb = null === (jb = this.plans.planAt(eb)) || void 0 === jb ? void 0 : jb.box,
            ab = bb ? sU(bb, "reactor", ...Mb) : tU(eb, 1, ...Mb, wU("reactor", Mb[0])),
            Ub = this.readInterior(ab);
          Pb = SY(Xb, Ub), vb = Ub, Lb = `${Xb.join(",")}:${Ub.join("")}`
        }(null === (ab = this.looksOf) || void 0 === ab ? void 0 : ab.key) !== Lb && (this.looksOf = {
          key: Lb,
          looks: TB(Xb, vb)
        }), this.view = {
          status: Ab,
          dims: Mb,
          plan: Pb,
          inner: Xb,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(eb),
          odConfirmed: this.odConfirmed || 0 !== (Ab.baf2RxFlags & Da),
          guide: this.plans.guideOn(),
          throttlePending: null !== Tb,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== Yb && Yb >= 5e3,
          busy: Bb,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== Yb || Bb.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.IR(this.raw)
        }), 250))
      }
    }
    class ER {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jj;
        this.plans = bb, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new UR, this.redraw = null, this.size = new MR(ab, Ub), this.oneShots = new Oj(Ub)
      }
      set(bb) {
        !bb.baf2BatOpen && this.view && aR(this.view.status.baf2BatAt) === aR(bb.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(bb), this.IR(bb)
      }
      tap(bb, ab) {
        if (!this.view) return;
        const Ub = bR(this.view.status);
        this.oneShots.tap(bb, (bb => bR(bb) !== Ub), ab) && this.IR(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(bb) {
        this.size.notTaken = bb
      }
      resize(bb) {
        this.view && (this.size.GP(this.plans, this.view.status.baf2BatAt, bb), this.IR(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.IR(this.view.status)
      }
      subscribe(bb) {
        return this.listeners.subscribe(bb)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      IR(bb) {
        const ab = this.size.shown(bb.baf2BatDims),
          Ub = this.oneShots.busyIds();
        this.view = {
          status: bb,
          dims: ab,
          PL: DB(ab, bb.baf2BatDims) ? bb.baf2BatCapacity : BB(...ab),
          guide: this.plans.guideOn(),
          busy: Ub
        }, this.listeners.notify(), Ub.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.IR(this.view.status)
        }), 250))
      }
    }
    const YR = "buildAFactory2Game:";

    function BR() {
      var bb;
      const ab = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!ab) return null;
      const Ub = ab.querySelector(".ExitButton");
      return function(bb, ab) {
        const Ub = ab ? ab.left - 8 : bb.right;
        return {
          left: bb.left,
          top: bb.top,
          width: Math.max(0, Ub - bb.left),
          height: bb.height
        }
      }(ab.getBoundingClientRect(), null !== (bb = null === Ub || void 0 === Ub ? void 0 : Ub.getBoundingClientRect()) && void 0 !== bb ? bb : null)
    }
    const eR = (0, Ab.memo)((function(bb) {
      let {
        store: ab
      } = bb;
      const {
        t: Ub
      } = (0, NM.A)(), [Mb, Tb] = (0, Ab.useState)((() => ab.get())), [Eb, Yb] = (0, Ab.useState)((() => performance.now()));
      (0, Ab.useEffect)((() => (Tb(ab.get()), ab.subscribe((() => {
        Tb(ab.get()), Yb(performance.now())
      })))), [ab]);
      const {
        alarm: Bb,
        boomAt: eb
      } = Mb, vb = null !== Bb && null !== Bb.secs, [Lb, Pb] = (0, Ab.useState)(null);
      (0, Ab.useEffect)((() => {
        if (!vb) return;
        Pb(BR());
        const bb = setInterval((() => {
          Yb(performance.now()), Pb(BR())
        }), 250);
        return () => {
          clearInterval(bb)
        }
      }), [vb]);
      const [Xb, jb] = (0, Ab.useState)(!1);
      return (0, Ab.useEffect)((() => {
        if (eb === -1 / 0) return;
        jb(!0);
        const bb = setTimeout((() => {
          jb(!1)
        }), 1300);
        return () => {
          clearTimeout(bb)
        }
      }), [eb]), (0, mT.jsxs)(mT.Fragment, {
        children: [null !== Bb && (0, mT.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: Ub(Bb.hot ? `${YR}rxAlarmSiren` : `${YR}rxAlarmDamaged`, {
            amount: String(Bb.damage)
          })
        }), null !== Bb && null !== Bb.secs && (0, mT.jsx)("div", {
          className: Lb ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Lb && void 0 !== Lb ? Lb : void 0,
          "aria-live": "assertive",
          children: Ub(`${YR}rxAlarmCountdown`, {
            amount: String((Rb = Bb.secs, kb = Eb - Bb.receivedAt, Math.max(1, Math.ceil(Rb - kb / 1e3))))
          })
        }), Xb && (0, mT.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Rb, kb
    }));
    class vR {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      ZZ(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Ub = bb.baf2RxAlarmAt.join(",");
        let Ab = this.snapshot.boomAt;
        if (bb.baf2RxAlarmBoom) this.byReactor.delete(Ub), Ab = ab;
        else if (bb.baf2RxAlarmDamage <= 0) this.byReactor.delete(Ub);
        else {
          var Mb;
          this.byReactor.set(Ub, {
            damage: bb.baf2RxAlarmDamage,
            secs: null !== (Mb = bb.baf2RxAlarmSecs) && void 0 !== Mb ? Mb : null,
            hot: !0 === bb.baf2RxAlarmHot,
            receivedAt: ab
          })
        }
        this.IR(Ab)
      }
      retain(bb) {
        let ab = !1;
        for (const Ub of [...this.byReactor.keys()]) bb.has(Ub) || (this.byReactor.delete(Ub), ab = !0);
        ab && this.IR(this.snapshot.boomAt)
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
      IR(bb) {
        let ab = null;
        for (const Ub of this.byReactor.values())(!ab || Ub.damage > ab.damage) && (ab = Ub);
        this.snapshot = {
          alarm: ab,
          boomAt: bb
        };
        for (const Ub of this.listeners) Ub()
      }
    }
    const LR = {
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

    function PR(bb) {
      return [bb[0], bb[1], bb[2]]
    }

    function XR(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }
    class jR {
      constructor(bb) {
        if (this.plans = bb, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var bb;
            return {
              active: this.glows.flatMap((bb => {
                let {
                  record: ab
                } = bb;
                return ab ? [ab] : []
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
      check(bb, ab, Ub) {
        const Ab = new Set(ab.map((bb => XR(bb.box.ctrl))));
        for (const Eb of function(bb, ab) {
            const Ub = [],
              Ab = new Map(bb);
            bb.clear();
            for (const Mb of ab) {
              const ab = Tj(Mb.box.ctrl),
                Tb = Mb.formed ? Mb.level : 0;
              bb.set(ab, Tb), Tb > 0 && 0 === Ab.get(ab) && Ub.push(Mb)
            }
            return Ub
          }(this.levels, this.plans.all())) Ab.has(XR(Eb.box.ctrl)) && this.show(bb, Eb, "on", Ub);
        const Mb = this.plans.lastFormed();
        if (null === Mb || Mb.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Mb.receivedAt;
        const Tb = function(bb, ab) {
          var Ub;
          const Ab = Tj(bb);
          return null !== (Ub = ab.find((bb => Tj(bb.box.ctrl) === Ab))) && void 0 !== Ub ? Ub : null
        }(Mb.ctrl, ab);
        return Tb && this.show(bb, Tb, "formed", Ub), Tb
      }
      fade(bb, ab) {
        0 !== this.glows.length && (this.glows = this.glows.filter((Ub => {
          let {
            mesh: Ab,
            glow: Mb,
            startMs: Tb,
            record: Eb
          } = Ub;
          const Yb = (ab - Tb) / LR[Mb].ms;
          return Yb >= 1 ? (bb.disposeGameMesh(Ab), Eb && (Eb.endMs = ab), !1) : (bb.setGameMesh(Ab, {
            visibility: "formed" === Mb ? 1 - Yb : Math.sin(Math.PI * Yb)
          }), !0)
        })))
      }
      dispose(bb) {
        for (const {
            mesh: Ub
          }
          of this.glows) bb.disposeGameMesh(Ub);
        this.glows = [], this.levels.clear();
        const ab = "undefined" !== typeof window ? window : null;
        (null === ab || void 0 === ab ? void 0 : ab.baf2Glows) === this.devAccessor && delete ab.baf2Glows
      }
      show(bb, ab, Ub, Ab) {
        const {
          lo: Mb,
          hi: Tb
        } = dB(ab.box);
        let Eb = null;
        this.devLog && (Eb = {
          glow: Ub,
          ctrl: PR(ab.box.ctrl),
          lo: PR(Mb),
          hi: PR(Tb),
          startMs: Ab,
          endMs: null
        }, this.devLog.push(Eb), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(bb, Ub, FB(Mb, Tb, LR[Ub].thick)),
          glow: Ub,
          startMs: Ab,
          record: Eb
        })
      }
      build(bb, ab, Ub) {
        const Ab = Lj(bb, Ub, {
          rgb: LR[ab].colour,
          alpha: 1
        });
        return bb.setGameMesh(Ab, {
          visibility: 0
        }), Ab
      }
    }
    const RR = 1 / .6,
      kR = {
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
        blendMode: GY.f.Standard,
        soft: !0
      },
      yR = {
        ...kR,
        size: [.25, .4],
        count: 2
      };

    function ZR(bb) {
      return {
        colours: [bb, bb],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: GY.f.Add,
        soft: !1
      }
    }
    const DR = ZR([150, 225, 255]),
      zR = ZR([185, 145, 255]),
      xR = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function iR(bb) {
      const ab = Ga[bb];
      return null === ab.fuelSlot || MU(ab) ? xR.includes(bb) ? zR : DR : kR
    }
    const fR = {
        kind: "smokePuff"
      },
      mR = [.2, .025, .2];

    function pR(bb, ab) {
      const [
        [Ub, Ab, Mb],
        [Tb, Eb, Yb]
      ] = bb.colours;
      return {
        texture: bb.soft ? fR : "square_particle",
        PL: ab,
        minLifeTime: bb.life[0] / RR,
        maxLifeTime: bb.life[1] / RR,
        minEmitPower: bb.power[0] * RR,
        maxEmitPower: bb.power[1] * RR,
        minSize: bb.size[0],
        maxSize: bb.size[1],
        emitRate: 0,
        gravity: [0, bb.lift * RR * RR, 0],
        dir1: [-bb.spread, 1, -bb.spread],
        dir2: [bb.spread, 1, bb.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [Ub, Ab, Mb, bb.alpha],
          maxColor: [Tb, Eb, Yb, bb.alpha]
        }, {
          timeFraction: 1,
          minColor: [Ub, Ab, Mb, 0],
          maxColor: [Tb, Eb, Yb, 0]
        }],
        blendMode: bb.blendMode
      }
    }
    class NR {
      constructor(bb) {
        this.fixed = bb, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(bb, ab, Ub) {
        var Ab;
        if (Ub === this.lastFrame) return !1;
        this.lastFrame = Ub;
        const Mb = this.at;
        Mb[0] = ab[0] + .5, Mb[1] = ab[1] + 1.025, Mb[2] = ab[2] + .5;
        const Tb = null !== (Ab = this.fixed) && void 0 !== Ab ? Ab : Yb() ? yR : kR;
        let Eb = this.particles.get(Tb);
        return Eb || (Eb = bb.createParticles(function(bb) {
          return pR(bb, Math.ceil(12 * bb.count * bb.life[1]) + bb.count)
        }(Tb), {
          pos: Mb,
          half: mR
        }), this.particles.set(Tb, Eb)), Eb.moveTo(Mb), Eb.emit(Tb.count), !0
      }
      dispose() {
        for (const bb of this.particles.values()) bb.stop();
        this.particles.clear()
      }
    }
    class WR {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(bb) {
        this.indexed = !0;
        for (const ab of Wa) {
          const Ub = iR(ab);
          for (let Ab = 1; Ab <= 4; Ab++) {
            const Mb = bb.blockNameToBlockId(`${ab}|meta|rot${Ab}|Running`, !0);
            if (null === Mb) continue;
            let Tb = this.pufferIndexByStyle.get(Ub);
            void 0 === Tb && (Tb = this.pufferList.push(new NR(Ub === kR ? null : Ub)) - 1, this.pufferIndexByStyle.set(Ub, Tb)), this.pufferIndexById[Mb] = Tb + 1
          }
        }
      }
      onAfterRender(bb, ab) {
        this.indexed || this.index(bb);
        const Ub = performance.now(),
          Ab = 0 === this.lastMs ? 0 : Math.min(Ub - this.lastMs, 250) / 1e3;
        this.lastMs = Ub, this.frame++, bb.particlesEnabled() ? (this.scan(bb, ab), this.puff(bb, Ab)) : this.sources = []
      }
      dispose() {
        for (const bb of this.pufferList) bb.dispose();
        this.sources = [], this.found = []
      }
      scan(bb, ab) {
        0 === this.scanRow && (this.origin = [Math.floor(ab[0]) - 12, Math.floor(ab[1]) - 6, Math.floor(ab[2]) - 12]);
        const Ub = Math.min(this.scanRow + 16, 325),
          [Ab, Mb, Tb] = this.origin,
          Eb = this.hits;
        Eb.length = 0;
        for (let Yb = this.scanRow; Yb < Ub; Yb++) {
          const ab = Ab + Yb % 25,
            Ub = Mb + Math.floor(Yb / 25);
          bb.scanBlocks(ab, Ub, Tb, ab + 1, Ub + 1, Tb + 25, this.pufferIndexById, Eb)
        }
        for (let Yb = 0; Yb < Eb.length; Yb += 4) {
          const bb = Eb[Yb + 3];
          this.found.push({
            pos: [Eb[Yb], Eb[Yb + 1], Eb[Yb + 2]],
            Av: bb,
            puffer: this.pufferList[this.pufferIndexById[bb] - 1]
          })
        }
        this.scanRow = Ub, 325 === Ub && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(bb, ab) {
        const Ub = this.sources.length;
        if (0 !== Ub) {
          this.budget = Math.min(this.budget + Math.min(Ub / 1.2, 12) * ab, 2);
          for (let ab = 0; ab < Ub && this.budget >= 1; ab++) {
            const ab = this.sources[this.cursor % Ub];
            this.cursor = (this.cursor + 1) % Ub, bb.getBlockId(ab.pos[0], ab.pos[1], ab.pos[2]) === ab.Av && (ab.puffer.puff(bb, ab.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const HR = {
        ...ZR([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      IR = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function dR(bb) {
      return 0 === bb.spots.length ? 0 : Math.min(1 * bb.level, 4)
    }

    function FR(bb) {
      return 0 === bb.glass.length ? 0 : Math.min(.75 * bb.level, 3)
    }

    function hR(bb) {
      return `${bb.ctrl.join(",")}:${bb.rot}:${bb.cu},${bb.cv}:${bb.w},${bb.h},${bb.d}`
    }

    function GR(bb, ab) {
      const Ub = ab.w - 2,
        Ab = ab.h - 2,
        Mb = ab.d - 2,
        Tb = [];
      for (let Eb = 0; Eb < Ub * Ab * Mb; Eb++) {
        const Yb = Eb % Ub,
          Bb = Math.floor(Eb / Ub) % Mb,
          eb = Math.floor(Eb / (Ub * Mb));
        if (Yb > 0 && Yb < Ub - 1 && Bb > 0 && Bb < Mb - 1 && eb > 0 && eb < Ab - 1) continue;
        const vb = nU(ab, UA(ab, Eb)),
          Lb = Hj(bb, vb);
        if (null !== Lb && "Fuel Rod" === dU(Lb))
          for (const ab of IR) {
            const Ub = [vb[0] + ab[0], vb[1] + ab[1], vb[2] + ab[2]];
            qR(bb, Ub) && Tb.push(uR(Ub, ab))
          }
      }
      return Tb
    }

    function QR(bb, ab) {
      const {
        lo: Ub,
        hi: Ab
      } = dB(ab), Mb = [];
      for (let Tb = Ub[0]; Tb < Ab[0]; Tb++)
        for (let ab = Ub[1]; ab < Ab[1]; ab++) {
          const Eb = Tb === Ub[0] || Tb === Ab[0] - 1 || ab === Ub[1] || ab === Ab[1] - 1 ? 1 : Math.max(1, Ab[2] - 1 - Ub[2]);
          for (let Yb = Ub[2]; Yb < Ab[2]; Yb += Eb) {
            const Eb = [Tb, ab, Yb];
            if (!qR(bb, Eb)) continue;
            const Bb = Tb === Ub[0] ? IR[1] : Tb === Ab[0] - 1 ? IR[0] : Yb === Ub[2] ? IR[5] : Yb === Ab[2] - 1 ? IR[4] : ab === Ub[1] ? IR[3] : IR[2];
            Mb.push(uR(Eb, Bb))
          }
        }
      return Mb
    }

    function qR(bb, ab) {
      const Ub = Hj(bb, ab);
      return null !== Ub && "Reactor Glass" === dU(Ub)
    }

    function uR(bb, ab) {
      return [
        [bb[0] + .5 + .55 * ab[0], bb[1] + .5 + .55 * ab[1], bb[2] + .5 + .55 * ab[2]],
        [0 === ab[0] ? .4 : .02, 0 === ab[1] ? .4 : .02, 0 === ab[2] ? .4 : .02]
      ]
    }
    class rR {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(bb, ab, Ub, Ab) {
        const Mb = [],
          Tb = new Set;
        for (const eb of ab) {
          var Eb, Yb, Bb;
          const {
            box: ab
          } = eb;
          if ("reactor" !== eb.kind || eb.level <= 0 || (ab.ctrl[0] - Ub[0]) ** 2 + (ab.ctrl[1] - Ub[1]) ** 2 + (ab.ctrl[2] - Ub[2]) ** 2 > 576) continue;
          const vb = hR(ab);
          Tb.add(vb);
          let Lb = this.spots.get(vb);
          if ((!Lb || Ab - Lb.at > 3e3) && (Lb = {
              at: Ab,
              spots: GR(bb, ab),
              glass: QR(bb, ab)
            }, this.spots.set(vb, Lb)), 0 === Lb.spots.length && 0 === Lb.glass.length) continue;
          const Pb = this.sparking.find((bb => bb.key === vb));
          Mb.push({
            key: vb,
            level: eb.level,
            spots: Lb.spots,
            glass: Lb.glass,
            budget: null !== (Eb = null === Pb || void 0 === Pb ? void 0 : Pb.budget) && void 0 !== Eb ? Eb : 0,
            cursor: null !== (Yb = null === Pb || void 0 === Pb ? void 0 : Pb.cursor) && void 0 !== Yb ? Yb : 0,
            glassBudget: null !== (Bb = null === Pb || void 0 === Pb ? void 0 : Pb.glassBudget) && void 0 !== Bb ? Bb : 0
          })
        }
        for (const eb of this.spots.keys()) Tb.has(eb) || this.spots.delete(eb);
        this.sparking = Mb
      }
      emit(bb, ab, Ub) {
        var Ab;
        if (0 === this.sparking.length || !bb.particlesEnabled() || Ub === this.lastFrame) return;
        this.lastFrame = Ub;
        let Mb = 0,
          Tb = 0;
        for (const jb of this.sparking) Mb += dR(jb), Tb += FR(jb);
        const Eb = Mb > 8 ? 8 / Mb : 1,
          Yb = Tb > 6 ? 6 / Tb : 1;
        let Bb, eb = null,
          vb = null;
        for (const jb of this.sparking) jb.budget = Math.min(jb.budget + dR(jb) * Eb * ab, 2), jb.budget >= 1 && (!eb || jb.budget > eb.budget) && (eb = jb), jb.glassBudget = Math.min(jb.glassBudget + FR(jb) * Yb * ab, 2), jb.glassBudget >= 1 && (!vb || jb.glassBudget > vb.glassBudget) && (vb = jb);
        if (eb) eb.budget--, Bb = eb.spots[eb.cursor++ % eb.spots.length];
        else {
          if (!vb) return;
          vb.glassBudget--, Bb = vb.glass[Math.floor(Math.random() * vb.glass.length)]
        }
        const [Lb, Pb] = Bb, Xb = null !== (Ab = this.emitter) && void 0 !== Ab ? Ab : this.create(bb, Lb, Pb);
        Xb.moveTo(Lb, Pb), Xb.emit(HR.count)
      }
      dispose() {
        var bb;
        null === (bb = this.emitter) || void 0 === bb || bb.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(bb, ab, Ub) {
        const Ab = Math.ceil(14 * HR.count * HR.life[1]) + HR.count;
        return this.emitter = bb.createParticles(pR(HR, Ab), {
          pos: ab,
          half: Ub
        }), this.emitter
      }
    }
    const KR = [2, 3.2],
      oR = 1 / 3,
      lR = 1 / .6,
      tR = {
        texture: fR,
        PL: Math.ceil(18 * KR[1]) + 4,
        minLifeTime: KR[0] / lR,
        maxLifeTime: KR[1] / lR,
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
        blendMode: GY.f.Standard
      };
    class wR {
      constructor(bb) {
        this.plans = bb, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new rR, this.frame = 0, this.outline = new jR(bb)
      }
      onAfterRender(bb, ab, Ub) {
        const Ab = performance.now(),
          Mb = 0 === this.lastMs ? 0 : Math.min(Ab - this.lastMs, 250) / 1e3;
        if (this.lastMs = Ab, this.outline.fade(bb, Ab), this.puff(bb, Mb, Ub), this.sparks.emit(bb, Mb, this.frame++), Ab - this.lastCheckMs < 150) return;
        this.lastCheckMs = Ab;
        const Tb = this.plans.all().filter((bb => bb.formed && sR(bb.box.ctrl, Ub) <= 4096));
        this.plumes = Tb.filter((bb => "reactor" === bb.kind && bb.level > 0)).map((bb => ({
          box: bb.box,
          level: bb.level
        }))), this.updateHums(bb, ab, Tb, Ub), this.sparks.update(bb, Tb, Ub, Ab), this.chimeFormed(bb, ab, Tb, Ab)
      }
      dispose(bb) {
        var ab;
        this.outline.dispose(bb), null === (ab = this.steam) || void 0 === ab || ab.dispose(), this.steam = null, this.sparks.dispose();
        for (const Ub of this.hums.values()) Ub.stop();
        this.hums.clear()
      }
      chimeFormed(bb, ab, Ub, Ab) {
        const Mb = this.outline.check(bb, Ub, Ab);
        Mb && bb.playSound(ab, "exp_levelup", .6, 1, {
          HM: [Mb.box.ctrl[0] + .5, Mb.box.ctrl[1], Mb.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(bb, ab, Ub) {
        const Ab = this.plumes;
        if (0 === Ab.length || !bb.particlesEnabled()) return void(this.plumeBudget = 0);
        const Mb = Ab.reduce(((bb, ab) => bb + 3 * ab.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Mb * ab, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Tb = this.plumeCursor % (Mb / 3);
        this.plumeCursor++;
        let Eb = Ab[0];
        for (const Lb of Ab) {
          if (Tb < Lb.level) {
            Eb = Lb;
            break
          }
          Tb -= Lb.level
        }
        const {
          lo: Yb,
          hi: Bb
        } = dB(Eb.box);
        if (function(bb, ab, Ub) {
            const Ab = Math.max(bb[0] - Ub[0], 0, Ub[0] - ab[0]),
              Mb = Math.max(bb[2] - Ub[2], 0, Ub[2] - ab[2]);
            return Math.hypot(Ab, Ub[1] - ab[1], Mb)
          }(Yb, Bb, Ub) < 6 && Math.random() > oR) return;
        const eb = [(Yb[0] + Bb[0]) / 2, Bb[1] + .05, (Yb[2] + Bb[2]) / 2],
          vb = [(Bb[0] - Yb[0]) / 2 - .5, .05, (Bb[2] - Yb[2]) / 2 - .5];
        this.steam ??= bb.createParticles(tR, {
          pos: eb,
          half: vb
        }), this.steam.moveTo(eb, vb), this.steam.emit(1)
      }
      updateHums(bb, ab, Ub, Ab) {
        const Mb = new Map;
        for (const Eb of Ub) "reactor" === Eb.kind && Eb.level > 0 && sR(Eb.box.ctrl, Ab) <= 576 && Mb.set(`${Tb=Eb.box.ctrl,`${Tb[0]},${Tb[1]},${Tb[2]}`}:${Eb.level}`, Eb);
        var Tb;
        for (const [Eb, Yb] of this.hums) Mb.has(Eb) || (Yb.stop(), this.hums.delete(Eb));
        for (const [Eb, Yb] of Mb) {
          if (this.hums.has(Eb)) continue;
          const {
            lo: Ub,
            hi: Ab
          } = dB(Yb.box), Mb = [(Ub[0] + Ab[0]) / 2, Ub[1], (Ub[2] + Ab[2]) / 2], Tb = bb.playSound(ab, "rocketEngineLoop", .08 + .06 * Yb.level, .55, {
            HM: Mb,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Tb && this.hums.set(Eb, Tb)
        }
      }
    }

    function sR(bb, ab) {
      return (bb[0] - ab[0]) ** 2 + (bb[1] - ab[1]) ** 2 + (bb[2] - ab[2]) ** 2
    }
    class gR {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      ZZ(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Ab = [bb.baf2BombAt[0], bb.baf2BombAt[1], bb.baf2BombAt[2]],
          Mb = bb.baf2BombR;
        if (bb.baf2BombBoom) {
          const bb = Math.hypot(ab[0] - Ab[0], ab[1] - Ab[1], ab[2] - Ab[2]);
          this.IR({
            fuse: null,
            blast: {
              at: Ab,
              r: Mb,
              receivedAt: Ub,
              distance: bb,
              flash: bb <= 3 * Mb
            }
          })
        } else this.IR({
          ...this.snapshot,
          fuse: bb.baf2BombMs > 0 ? {
            at: Ab,
            r: Mb,
            endsAt: Ub + bb.baf2BombMs
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
      IR(bb) {
        this.snapshot = bb;
        for (const ab of this.listeners) ab()
      }
    }
    const CR = (0, Ab.memo)((function(bb) {
      var ab;
      let {
        store: Ub
      } = bb;
      const {
        t: Mb
      } = (0, NM.A)(), [Tb, Eb] = (0, Ab.useState)((() => Ub.get())), [Yb, Bb] = (0, Ab.useState)((() => performance.now()));
      (0, Ab.useEffect)((() => (Eb(Ub.get()), Ub.subscribe((() => {
        Eb(Ub.get()), Bb(performance.now())
      })))), [Ub]);
      const {
        fuse: eb,
        blast: vb
      } = Tb;
      (0, Ab.useEffect)((() => {
        if (!eb) return;
        const bb = setInterval((() => {
          Bb(performance.now())
        }), 250);
        return () => {
          clearInterval(bb)
        }
      }), [eb]);
      const [Lb, Pb] = (0, Ab.useState)(!1);
      (0, Ab.useEffect)((() => {
        if (null === vb || void 0 === vb || !vb.flash) return;
        Pb(!0);
        const bb = setTimeout((() => {
          Pb(!1)
        }), 2500);
        return () => {
          clearTimeout(bb)
        }
      }), [vb]);
      const Xb = eb ? function(bb, ab) {
        return bb.endsAt <= ab ? 0 : Math.ceil((bb.endsAt - ab) / 1e3)
      }(eb, Yb) : 0;
      return (0, mT.jsxs)(mT.Fragment, {
        children: [Xb > 0 && (0, mT.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Mb("buildAFactory2Game:bombCountdown", {
            amount: String(Xb),
            radius: String(null !== (ab = null === eb || void 0 === eb ? void 0 : eb.r) && void 0 !== ab ? ab : 0)
          })
        }), Lb && (0, mT.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function VR(bb) {
      const ab = Math.min(4, Math.max(1, bb / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * bb / 4)),
        capSpread: Math.min(5 * bb / 8, 24 * ab),
        capThick: 6 * ab,
        stemHalfWidth: 3 * ab,
        puffScale: ab
      }
    }
    class OR {
      constructor() {
        this.PY = !1
      }
      hold(bb) {
        bb.getCameraFar() < 1e3 && (bb.setCameraFar(1e3), this.PY = !0)
      }
      release(bb) {
        this.PY && (this.PY = !1, bb.setCameraFar(null))
      }
    }
    const cR = 1 / .6,
      JR = [.2, .1, .2],
      nR = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      SR = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: GY.f.Standard,
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
      bk = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: GY.f.Standard,
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
      ak = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: GY.f.Standard,
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
      Uk = {
        texture: fR,
        PL: Math.ceil(120) + 4,
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
        blendMode: GY.f.Add
      };
    class Ak {
      constructor(bb) {
        this.store = bb, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new OR, this.timers = []
      }
      onAfterRender(bb, ab) {
        const Ub = performance.now(),
          Ab = 0 === this.lastMs ? 0 : Math.min(Ub - this.lastMs, 250) / 1e3;
        this.lastMs = Ub;
        const {
          fuse: Mb,
          blast: Tb
        } = this.store.get();
        null !== Tb && Tb !== this.shownBlast && (this.shownBlast = Tb, this.startBlast(bb, ab, Tb, Ub));
        const Eb = bb.particlesEnabled();
        null !== Mb && Mb.endsAt > Ub && Eb ? this.emitBeacon(bb, Mb, Ab, Ub) : this.beaconBudget = 0, null !== this.cloud && (Ub - this.cloud.startMs > 33e3 ? this.disposeCloud(bb) : (this.far.hold(bb), Eb && this.emitCloud(bb, Ab, Ub)))
      }
      dispose(bb) {
        var ab;
        null === (ab = this.beacon) || void 0 === ab || ab.dispose(), this.beacon = null, this.disposeCloud(bb);
        for (const Ub of this.timers) clearTimeout(Ub);
        this.timers.length = 0
      }
      emitBeacon(bb, ab, Ub, Ab) {
        const Mb = ab.endsAt - Ab < 5e3 ? 350 : 1e3,
          Tb = .5 + .5 * Math.sin(2 * Math.PI * Ab / Mb);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Tb * Ub, 4), this.beaconBudget < 1) return;
        const Eb = Math.floor(this.beaconBudget);
        this.beaconBudget -= Eb;
        const [Yb, Bb, eb] = ab.at, vb = [Yb + .5, Bb + 1.1, eb + .5];
        this.beacon ??= bb.createParticles(Uk, {
          pos: vb,
          half: JR
        }), this.beacon.moveTo(vb), this.beacon.emit(Eb)
      }
      startBlast(bb, ab, Ub, Ab) {
        var Mb;
        null === (Mb = this.beacon) || void 0 === Mb || Mb.dispose(), this.beacon = null, this.disposeCloud(bb);
        const Tb = (0, FY.isMobile)() ? .5 : 1;
        this.streams = [SR, bk, ak].map((bb => {
          const ab = Math.round(bb.count * Tb);
          return {
            spec: bb,
            particles: null,
            rate: ab / ((bb.toMs - bb.fromMs) / 1e3),
            budget: 0,
            left: ab
          }
        })), this.cloud = {
          blast: Ub,
          startMs: Ab
        };
        const Eb = Math.max(.25, 1 - Ub.distance / (6 * Ub.r)),
          Yb = Ub.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [Ub, Ab, Mb] of nR) Tk(bb, ab, Ub, Eb * Ab, Mb)
        }), Yb))
      }
      emitCloud(bb, ab, Ub) {
        const {
          blast: Ab,
          startMs: Mb
        } = this.cloud, Tb = Ub - Mb, [Eb, Yb, Bb] = Ab.at, eb = VR(Ab.r);
        for (const vb of this.streams) {
          const {
            spec: Ub
          } = vb;
          if (vb.left <= 0 || Tb < Ub.fromMs) continue;
          vb.budget += vb.rate * ab;
          const Mb = Math.min(Math.floor(vb.budget), vb.left);
          if (Mb < 1) continue;
          vb.budget -= Mb, vb.left -= Mb;
          const Lb = vb.particles ??= this.createStream(bb, Ub, Ab);
          if (Ub === SR) {
            const bb = eb.stemHalfWidth;
            Lb.moveTo([Eb, Yb + 1, Bb], [bb, 1, bb])
          } else if (Ub === bk) {
            const bb = eb.capSpread * Math.min(1, (Tb - Ub.fromMs) / 3e3),
              ab = Math.sqrt(Math.random()),
              Ab = 2 * Math.random() * Math.PI,
              Mb = Math.cos(Ab) * ab,
              vb = Math.sin(Ab) * ab,
              Pb = Eb + Mb * bb,
              Xb = Bb + vb * bb,
              jb = eb.capThick,
              Rb = Yb + eb.capHeight + jb * (1 - ab * ab) * 2;
            Lb.setDirections([.7 * Mb, .05, .7 * vb], [Mb, .2, vb]), Lb.moveTo([Pb, Rb, Xb], [jb, jb, jb])
          } else {
            this.ringAngle += 2.39996;
            const bb = Math.cos(this.ringAngle),
              ab = Math.sin(this.ringAngle);
            Lb.setDirections([bb, .05, ab], [bb, .1, ab]), Lb.moveTo([Eb + 2 * bb, Yb + .5, Bb + 2 * ab], [0, .5, 0])
          }
          Lb.emit(Mb)
        }
      }
      createStream(bb, ab, Ub) {
        const {
          r: Ab
        } = Ub, Mb = Math.max(ab.life[0], Ab / 25), Tb = ab === ak ? [.9 * Mb, Mb] : ab.life, Eb = VR(Ab), Yb = ab === ak ? 1 : Eb.puffScale, Bb = {
          texture: fR,
          PL: ab.count + 4,
          minLifeTime: Tb[0] / cR,
          maxLifeTime: Tb[1] / cR,
          minSize: ab.size[0] * Yb,
          maxSize: ab.size[1] * Yb,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, ab.gravity * cR * cR, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: ab.from[0],
            maxColor: ab.from[1]
          }, {
            timeFraction: .6,
            minColor: Mk(ab.from[0], ab.to[0]),
            maxColor: Mk(ab.from[1], ab.to[1])
          }, {
            timeFraction: 1,
            minColor: ab.to[0],
            maxColor: ab.to[1]
          }],
          blendMode: ab.blend
        };
        if (ab === SR) {
          const bb = Eb.capHeight / ((Tb[0] + Tb[1]) / 2);
          Bb.minEmitPower = .9 * bb * cR, Bb.maxEmitPower = 1.05 * bb * cR, Bb.dir1 = [-.1, 1, -.1], Bb.dir2 = [.1, 1, .1]
        } else ab === bk ? (Bb.minEmitPower = 1.2, Bb.maxEmitPower = 2, Bb.dir1 = [-1, .05, -1], Bb.dir2 = [1, .2, 1]) : (Bb.minEmitPower = 39.583333333333336, Bb.maxEmitPower = 41.66666666666667, Bb.dir1 = [1, 0, 0], Bb.dir2 = [1, 0, 0]);
        return bb.createParticles(Bb, {
          pos: Ub.at
        })
      }
      disposeCloud(bb) {
        for (const Ub of this.streams) {
          var ab;
          null === (ab = Ub.particles) || void 0 === ab || ab.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(bb)
      }
    }

    function Mk(bb, ab) {
      return [(bb[0] + ab[0]) / 2, (bb[1] + ab[1]) / 2, (bb[2] + ab[2]) / 2, .75 * bb[3]]
    }

    function Tk(bb, ab, Ub, Ab, Mb) {
      try {
        bb.playSound(ab, Ub, Ab, Mb)
      } catch (Tb) {
        console.error(Tb)
      }
    }
    const Ek = {
        PL: 720,
        perS: 100
      },
      Yk = {
        PL: 320,
        perS: 44
      };
    class Bk {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(bb, ab) {
        this.zone = {
          centre: [...bb.centre],
          r: bb.r,
          band: bb.band ? [bb.band[0], bb.band[1]] : void 0
        }, this.endsAt = ab
      }
      stop() {
        this.zone = null
      }
      ZZ(bb, ab) {
        const {
          baf2FalloutMs: Ub,
          baf2FalloutAt: Ab,
          baf2FalloutR: Mb,
          baf2FalloutY: Tb
        } = bb;
        Ub > 0 && Ab && void 0 !== Mb ? this.start({
          centre: Ab,
          r: Mb,
          band: Tb
        }, ab + Ub) : this.stop()
      }
      perS(bb, ab, Ub) {
        const Ab = this.zone;
        if (!Ab) return 0;
        const Mb = this.endsAt - bb;
        return Mb <= 0 ? (this.zone = null, 0) : Ab.band && (ab[1] < Ab.band[0] || ab[1] > Ab.band[1]) || Math.hypot(ab[0] - Ab.centre[0], ab[2] - Ab.centre[2]) > Ab.r ? 0 : Ub.perS * Math.min(1, Mb / 5e3)
      }
    }
    const ek = [5, 7],
      vk = [24, 8, 24],
      Lk = .5,
      Pk = 1 / .6,
      Xk = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class jk {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.isMobile)();
        this.state = new Bk, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(bb) {
          return bb ? Yk : Ek
        }(bb)
      }
      startFallout(bb, ab) {
        this.state.start(bb, ab)
      }
      stopFallout() {
        this.state.stop()
      }
      ZZ(bb) {
        this.state.ZZ(bb, performance.now())
      }
      onAfterRender(bb, ab) {
        var Ub;
        const Ab = performance.now(),
          Mb = 0 === this.lastMs ? 0 : Math.min(Ab - this.lastMs, 250) / 1e3;
        this.lastMs = Ab;
        const Tb = this.state.perS(Ab, ab, this.tier);
        if (Tb <= 0 || !bb.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Tb * Mb, Tb / 4);
        const Eb = Math.floor(this.budget);
        if (Eb < 1) return;
        this.budget -= Eb;
        const Yb = this.at;
        Yb[0] = ab[0], Yb[1] = ab[1] + 12, Yb[2] = ab[2];
        const Bb = null !== (Ub = this.systems) && void 0 !== Ub ? Ub : this.create(bb, Yb),
          eb = this.amounts;
        eb[0] = 0, eb[1] = 0;
        for (let vb = 0; vb < Eb; vb++) eb[Math.random() < .3 ? 1 : 0]++;
        for (let vb = 0; vb < Bb.length; vb++) eb[vb] > 0 && (Bb[vb].moveTo(Yb, vk), Bb[vb].emit(eb[vb]))
      }
      dispose() {
        for (const ab of null !== (bb = this.systems) && void 0 !== bb ? bb : []) {
          var bb;
          ab.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(bb, ab) {
        return this.systems = Xk.map((Ub => {
          let {
            rgba: [Ab, Mb, Tb, Eb],
            share: Yb
          } = Ub;
          const Bb = {
            texture: "square_particle",
            PL: Math.ceil(this.tier.PL * Yb),
            minLifeTime: ek[0] / Pk,
            maxLifeTime: ek[1] / Pk,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Lk, -1, Lk],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Ab, Mb, Tb, 0]
            }, {
              timeFraction: .15,
              minColor: [Ab, Mb, Tb, Eb]
            }, {
              timeFraction: .8,
              minColor: [Ab, Mb, Tb, Eb]
            }, {
              timeFraction: 1,
              minColor: [Ab, Mb, Tb, 0]
            }],
            blendMode: GY.f.Standard
          };
          return bb.createParticles(Bb, {
            pos: ab,
            half: vk
          })
        })), this.systems
      }
    }
    const Rk = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function kk(bb) {
      const ab = /\|rot(\d)/.exec(bb);
      return Rk[ab ? Number(ab[1]) : 1]
    }
    var yk = Ub(583),
      Zk = Ub(37803);
    const Dk = new Set(yk.n);

    function zk(bb) {
      if (-2 !== bb.count) return null;
      const ab = wb(bb.item);
      return null !== ab && Dk.has(ab) ? ab : null
    }

    function xk(bb) {
      const {
        width: ab,
        height: Ub
      } = (0, Zk.b)(bb).hitBoxDimensions;
      return .55 / Math.max(ab, Ub)
    }

    function ik(bb, ab, Ub) {
      if (!Ub) return !1;
      const Ab = bb[0] + .5 - ab[0],
        Mb = bb[1] + .5 - ab[1],
        Tb = bb[2] + .5 - ab[2];
      return Ab * Ab + Mb * Mb + Tb * Tb <= 576
    }

    function fk(bb, ab) {
      return Math.atan2(bb[0], bb[2]) + Math.PI + ab
    }

    function mk(bb, ab) {
      const Ub = 2 * Math.PI;
      return (bb + Ub * ab / 1e4) % Ub
    }
    class pk {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = bb, this.now = ab, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = bb.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(bb, ab) {
        if (0 === this.farms.size) return;
        const Ub = this.now(),
          Ab = Number.isNaN(this.frameMs) ? 0 : Math.min(Ub - this.frameMs, 100);
        this.frameMs = Ub, Ub - this.checkedMs >= 1e3 && (this.checkedMs = Ub, this.check(bb, ab));
        for (const Mb of this.farms.values()) Mb.shown && Mb.running && null !== Mb.model && Ab > 0 && (Mb.spin = mk(Mb.spin, Ab), Mb.model.setPose(Mb.feet, fk(Mb.front, Mb.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const bb of this.farms.values()) this.drop(bb);
        this.farms.clear()
      }
      sync() {
        const bb = new Set;
        for (const ab of this.labels.list()) {
          const Ub = zk(ab);
          if (null === Ub) continue;
          bb.add(ab.key);
          const Ab = this.farms.get(ab.key);
          if ((null === Ab || void 0 === Ab ? void 0 : Ab.mob) === Ub) continue;
          Ab && this.drop(Ab);
          const [Mb, Tb, Eb] = ab.pos;
          this.farms.set(ab.key, {
            pos: ab.pos,
            feet: [Mb + .5, Tb + 1, Eb + .5],
            mob: Ub,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [ab, Ub] of this.farms) bb.has(ab) || (this.drop(Ub), this.farms.delete(ab));
        this.checkedMs = -1 / 0
      }
      check(bb, ab) {
        for (const Ub of this.farms.values()) {
          const [Ab, Mb, Tb] = Ub.pos, Eb = Hj(bb, Ub.pos);
          null !== Eb && dU(Eb) === Qb && ik(Ub.pos, ab, "Air" === Hj(bb, [Ab, Mb + 1, Tb])) ? (Ub.running = Eb.endsWith("|Running"), Ub.front = kk(Eb), null === Ub.model && (Ub.model = bb.createMobModel(Ub.mob, xk(Ub.mob)), null === Ub.model) || (Ub.model.setPose(Ub.feet, fk(Ub.front, Ub.spin)), Ub.shown || (Ub.model.setVisible(!0), Ub.shown = !0))) : (Ub.shown && null !== Ub.model && Ub.model.setVisible(!1), Ub.shown = !1)
        }
      }
      drop(bb) {
        var ab;
        null === (ab = bb.model) || void 0 === ab || ab.dispose(), bb.model = null, bb.shown = !1
      }
    }
    class Nk {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(bb) {
        var ab;
        this.island = bb.baf2ColIsland, this.islandSite = (ab = bb.baf2ColSite) && 8 === ab.length ? {
          spawnXZ: [ab[0], ab[1]],
          coreXZ: [ab[2], ab[3]],
          minXZ: [ab[4], ab[5]],
          maxXZ: [ab[6], ab[7]]
        } : null, this.views = bb.baf2ColList.map((bb => ({
          entry: EM(bb)
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
        var ab;
        return null === (ab = this.views.find((ab => {
          let {
            entry: Ub
          } = ab;
          return Ub.focus[0] === bb[0] && Ub.focus[1] === bb[1] + 1 && Ub.focus[2] === bb[2]
        }))) || void 0 === ab ? void 0 : ab.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(bb, ab) {
        return rB(this.entries(), bb, ab)
      }
      lookSource() {
        return {
          handles: bb => PA(bb) >= 0 || XA(bb),
          line: (bb, ab) => this.lookLine(bb, ab),
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
    const Wk = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((bb => bb / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((bb => [bb, bb + 1, bb + 2, bb, bb + 2, bb + 3]))
    };

    function Hk(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      let Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Bb = Math.cos(Yb),
        eb = Math.sin(Yb),
        vb = bb.positions.length / 3,
        {
          positions: Lb,
          indices: Pb
        } = Wk;
      for (let Xb = 0; Xb < Lb.length; Xb += 3) {
        const Yb = Lb[Xb] * Mb,
          vb = Lb[Xb + 2] * Eb;
        bb.positions.push(ab + Yb * Bb + vb * eb, Ub + Lb[Xb + 1] * Tb, Ab - Yb * eb + vb * Bb)
      }
      for (const Xb of Pb) bb.indices.push(vb + Xb)
    }

    function Ik(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return ab < 1 ? {
        rgb: bb,
        alpha: ab
      } : {
        rgb: bb,
        alpha: 1,
        opaque: !0
      }
    }
    class dk {
      constructor(bb, ab) {
        this.style = bb, this.perSource = ab, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(bb) {
        this.sources = bb, 0 === bb.length && (this.budget = 0)
      }
      qL(bb, ab, Ub) {
        const Ab = this.sources.length;
        if (0 !== Ab) {
          var Mb, Tb;
          this.budget = Math.min(this.budget + (Mb = Ab, Tb = this.perSource, Math.min(Mb * Tb, SB) * ab), 2);
          for (let ab = 0; ab < Ab && this.budget >= 1; ab++) {
            const ab = this.sources[this.cursor % Ab];
            this.cursor = (this.cursor + 1) % Ab;
            if (!(Math.max(Math.abs(ab.x - Ub[0]), Math.abs(ab.y - Ub[1]), Math.abs(ab.z - Ub[2])) > 32)) return this.puff(bb, ab), void this.budget--
          }
        }
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.dispose(), this.particles = null, this.sources = []
      }
      puff(bb, ab) {
        let {
          x: Ub,
          y: Ab,
          z: Mb,
          h: Tb,
          faces: Eb
        } = ab;
        const Yb = function(bb, ab, Ub, Ab, Mb) {
            const [Tb, Eb, Yb] = Mb[Math.floor(Math.random() * Mb.length)], Bb = .04, eb = (bb, ab, Ub) => bb > 0 ? ab + Ub + Bb : bb < 0 ? ab - Bb : ab + .1, vb = (bb, ab, Ub) => bb > 0 ? ab + Ub + Bb : bb < 0 ? ab - Bb : ab + Ub - .1, Lb = [eb(Tb, bb, 1), eb(Eb, ab, Ab), eb(Yb, Ub, 1)], Pb = [vb(Tb, bb, 1), vb(Eb, ab, Ab), vb(Yb, Ub, 1)];
            return {
              pos: [(Lb[0] + Pb[0]) / 2, (Lb[1] + Pb[1]) / 2, (Lb[2] + Pb[2]) / 2],
              half: [(Pb[0] - Lb[0]) / 2, (Pb[1] - Lb[1]) / 2, (Pb[2] - Lb[2]) / 2],
              out: [Tb, Eb, Yb]
            }
          }(Ub, Ab, Mb, Tb, Eb),
          {
            style: Bb
          } = this,
          eb = this.particles ??= bb.createParticles(pR(Bb, Math.ceil(Bb.count * SB * Bb.life[1]) + 4), Yb);
        eb.moveTo(Yb.pos, Yb.half);
        const [vb, Lb, Pb] = Yb.out, Xb = Bb.spread;
        eb.setDirections([vb - Xb, .6 + Lb, Pb - Xb], [vb + Xb, 1 + Lb, Pb + Xb]), eb.emit(Bb.count)
      }
    }
    const Fk = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class hk {
      constructor() {
        this.green = new dk(ae.green, JB), this.pink = new dk(ae.pink, nB), this.colliders = [], this.lastMs = 0
      }
      setSources(bb) {
        this.colliders = bb;
        const ab = [],
          Ub = [];
        for (const Ab of bb) {
          const [bb, Mb, Tb] = Ab.focus;
          ab.push({
            x: bb,
            y: Mb - 1,
            z: Tb,
            h: 2,
            faces: Fk
          });
          for (let ab = 0; ab < 4; ab++) {
            if (!Ab.live[ab]) continue;
            const [bb, Mb, Tb] = kA(Ab.focus, ab, EA.LASER_D), [Eb, , Yb] = RA[ab], Bb = Fk.filter((bb => bb[0] !== Eb || bb[2] !== Yb || 0 !== bb[1]));
            Ub.push({
              x: bb,
              y: Mb,
              z: Tb,
              h: 1,
              faces: Bb
            })
          }
        }
        this.green.setSources(ab), this.pink.setSources(Ub)
      }
      onAfterRender(bb) {
        const ab = performance.now(),
          Ub = 0 === this.lastMs ? 0 : Math.min(ab - this.lastMs, 250) / 1e3;
        if (this.lastMs = ab, 0 === this.colliders.length || !bb.particlesEnabled()) return;
        const Ab = bb.getCameraPosition();
        this.green.qL(bb, Ub, Ab), this.pink.qL(bb, Ub, Ab)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Gk = 1.04,
      Qk = Ik([1, 120 / 255, 220 / 255]),
      qk = Ik([1, .25, .25], .35);
    class uk {
      constructor(bb) {
        this.store = bb, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new hk
      }
      onAfterRender(bb) {
        this.store.version() !== this.builtVersion && this.rebuild(bb);
        const ab = performance.now();
        for (const Ub of this.beams) {
          const Ab = 1 + .35 * Math.sin(ab / 700 * Math.PI * 2 + Ub.phase);
          bb.setGameMesh(Ub.mesh, {
            scale: [Ub.alongX ? 1 : Ab, Ab, Ub.alongX ? Ab : 1]
          })
        }
        this.glow.onAfterRender(bb)
      }
      dispose(bb) {
        this.clear(bb), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(bb) {
        this.clear(bb), this.builtVersion = this.store.version();
        const ab = [];
        for (const {
            entry: Ub
          }
          of this.store.colliders()) Ub.on && Ub.live.some(Boolean) && (this.addBeams(bb, Ub), ab.push(Ub)), Ub.blockers.length > 0 && this.addMarkers(bb, Ub);
        this.glow.setSources(ab)
      }
      addBeams(bb, ab) {
        const [Ub, Ab, Mb] = ab.focus, Tb = cB - .25, Eb = (.25 + cB) / 2;
        for (let Yb = 0; Yb < 4; Yb++) {
          if (!ab.live[Yb]) continue;
          const [Bb, , eb] = RA[Yb], vb = 0 !== Bb, Lb = {
            positions: [],
            indices: []
          };
          Hk(Lb, 0, 0, 0, vb ? Tb : .2, .2, vb ? .2 : Tb);
          const Pb = [Ub + .5 + Bb * Eb, Ab + .5, Mb + .5 + eb * Eb],
            Xb = bb.createGameMesh(Lb, Qk, Pb);
          this.meshes.push(Xb), this.beams.push({
            mesh: Xb,
            alongX: vb,
            phase: Yb * Math.PI / 2
          })
        }
      }
      addMarkers(bb, ab) {
        const Ub = ab.blockers[0],
          Ab = {
            positions: [],
            indices: []
          };
        for (const [Mb, Tb, Eb] of ab.blockers) Hk(Ab, Mb - Ub[0] + .5, Tb - Ub[1] + .5, Eb - Ub[2] + .5, Gk, Gk, Gk);
        this.meshes.push(bb.createGameMesh(Ab, qk, Ub))
      }
      clear(bb) {
        for (const ab of this.meshes) bb.disposeGameMesh(ab);
        this.meshes = [], this.beams = []
      }
    }
    const rk = [.56, .83, 1],
      Kk = [1, .73, .08],
      lk = [1, .25, .25],
      tk = [.85, .85, .85],
      wk = [.3, .45, .6];

    function sk(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Eb = Mb / 2,
        Yb = Mb + Tb;
      for (const Bb of [-Eb, Eb])
        for (const Mb of [-Eb, Eb]) Hk(bb, ab, Ub + Bb, Ab + Mb, Yb, Tb, Tb), Hk(bb, ab + Bb, Ub, Ab + Mb, Tb, Yb, Tb), Hk(bb, ab + Bb, Ub + Mb, Ab, Tb, Tb, Yb)
    }

    function gk(bb) {
      return ab => bb.isBlockInLoadedChunk(ab[0], ab[1], ab[2]) && 0 === bb.getBlockId(ab[0], ab[1], ab[2])
    }

    function Ck(bb) {
      return bb.map((bb => {
        let {
          free: ab,
          blocked: Ub,
          gaps: Ab,
          supports: Mb
        } = bb;
        return `${ab.join(";")}|${Ub.join(";")}|${Ab.join(";")}|${Mb.join(";")}`
      })).join("/")
    }

    function Vk(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Tb = ab[0],
        Eb = {
          positions: [],
          indices: []
        };
      for (const [Yb, Bb, eb] of ab) sk(Eb, Yb - Tb[0] + .5, Bb - Tb[1] + .5, eb - Tb[2] + .5, Ab, Mb);
      return bb.createGameMesh(Eb, Ub, Tb)
    }
    class Ok {
      constructor(bb) {
        this.store = bb, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(bb, ab, Ub) {
        var Ab;
        const Mb = null === (Ab = bb.vab(ab)) || void 0 === Ab ? void 0 : Ab.name;
        if (Mb !== BA && Mb !== YA) return void("" !== this.shownKey && this.show(bb, "", []));
        const Tb = performance.now();
        if (Tb - this.lastCheckMs >= 200 && (this.lastCheckMs = Tb, Mb === BA ? this.check(bb, Ub) : this.preview(bb, Ub)), this.pulses.length > 0) {
          const ab = 1 + .12 * Math.sin(Tb / 1e3 * 1.25 * Math.PI * 2),
            Ub = [ab, ab, ab];
          for (const Ab of this.pulses) bb.setGameMesh(Ab, {
            scale: Ub
          })
        }
      }
      dispose(bb) {
        this.clear(bb), this.shownKey = ""
      }
      check(bb, ab) {
        const Ub = gk(bb),
          Ab = [];
        for (const {
            entry: Tb
          }
          of this.store.colliders()) {
          Tb.focus.every(((bb, Ub) => Math.abs(bb + .5 - ab[Ub]) <= EA.GHOST_REACH)) && Ab.push(OB(Tb, Ub))
        }
        const Mb = Ck(Ab);
        Mb !== this.shownKey && this.show(bb, Mb, Ab)
      }
      preview(bb, ab) {
        const Ub = bb.getTargetedBlock(),
          Ab = Ub ? [Ub.nX[0], Ub.nX[1], Ub.nX[2]] : null,
          Mb = null !== Ab && Ab.every(((bb, Ub) => Math.abs(bb + .5 - ab[Ub]) <= 8)),
          Tb = this.store.site(),
          Eb = Mb && Tb ? function(bb, ab, Ub) {
            const Ab = jA(bb);
            if (!Ab.every(ab)) return null;
            const Mb = DA(bb, Ub);
            return {
              column: Ab,
              spots: OB({
                focus: Ab[1],
                lasers: [!1, !1, !1, !1],
                open: Mb,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, ab),
              fits: Mb.filter(Boolean).length >= EA.MIN_SPOTS
            }
          }(Ab, gk(bb), Tb) : null,
          Yb = Eb ? [Eb.spots] : [],
          Bb = Eb ? `preview ${Ab.join(",")}|${Eb.fits}|${Ck(Yb)}` : "";
        var eb, vb;
        Bb !== this.shownKey && this.show(bb, Bb, Yb, null !== (eb = null === Eb || void 0 === Eb ? void 0 : Eb.column) && void 0 !== eb ? eb : [], null === (vb = null === Eb || void 0 === Eb ? void 0 : Eb.fits) || void 0 === vb || vb)
      }
      show(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Mb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(bb), this.shownKey = ab, Ab.length > 0 && this.meshes.push(Vk(bb, Ab, Ik(Mb ? tk : lk)));
        for (const {
            free: Tb,
            blocked: Eb,
            gaps: Yb,
            supports: Bb
          }
          of Ub) {
          for (const [ab, Ub, Ab] of Tb) {
            const Mb = {
              positions: [],
              indices: []
            };
            sk(Mb, 0, 0, 0);
            const Tb = bb.createGameMesh(Mb, Ik(rk), [ab + .5, Ub + .5, Ab + .5]);
            this.meshes.push(Tb), this.pulses.push(Tb)
          }
          Eb.length > 0 && this.meshes.push(Vk(bb, Eb, Ik(Kk))), Yb.length > 0 && this.meshes.push(Vk(bb, Yb, Ik(lk), 1.06, .07)), Bb.length > 0 && this.meshes.push(Vk(bb, Bb, Ik(wk)))
        }
      }
      clear(bb) {
        for (const ab of this.meshes) bb.disposeGameMesh(ab);
        this.meshes = [], this.pulses = []
      }
    }
    class ck {
      constructor() {
        this.stored = new Map, this.PY = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(bb) {
        if (!bb.baf2TermOpen) return !1;
        bb.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [ab, Ub] of bb.baf2TermItems) Ub > 0 ? this.stored.set(ab, Ub) : this.stored.delete(ab);
        if (bb.baf2TermHeld && (this.PY = new Map(bb.baf2TermHeld)), this.pending = this.pending.filter((ab => ab.seq > bb.baf2TermAcked)), this.silos = bb.baf2TermSilos, this.readOnly = bb.baf2TermReadOnly, this.pocket = !0 === bb.baf2TermPocket, bb.baf2TermReset) this.resort();
        else {
          const bb = new Set(this.order);
          for (const ab of this.stored.keys()) bb.has(ab) || this.order.push(ab)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((bb, ab) => this.amount(ab) - this.amount(bb) || bb.localeCompare(ab))), this.changed()
      }
      take(bb, ab) {
        const Ub = Ya(bb, this.amount(ab));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: ab,
          amount: Ub,
          put: !1
        }), this.recents = [ab, ...this.recents.filter((bb => bb !== ab))].slice(0, 6), this.changed(), Ua(this.seq, bb, ab)
      }
      put(bb, ab) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: ab,
          amount: Ya(bb, this.heldAmount(ab)),
          put: !0
        }), this.changed(), Aa(this.seq, bb, ab)
      }
      putAll() {
        this.seq++;
        for (const bb of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: bb,
          amount: this.heldAmount(bb),
          put: !0
        });
        return this.changed(), Ma(this.seq)
      }
      amount(bb) {
        var ab;
        let Ub = null !== (ab = this.stored.get(bb)) && void 0 !== ab ? ab : 0;
        for (const Ab of this.pending) Ab.item === bb && (Ub += Ab.put ? Ab.amount : -Ab.amount);
        return Math.max(0, Ub)
      }
      heldAmount(bb) {
        var ab;
        let Ub = null !== (ab = this.PY.get(bb)) && void 0 !== ab ? ab : 0;
        for (const Ab of this.pending) Ab.put && Ab.item === bb && (Ub -= Ab.amount);
        return Math.max(0, Ub)
      }
      heldItems() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((ab => ab === bb || this.heldAmount(ab) > 0))
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
    var Jk = Ub(37757);
    const nk = {
      isBlock: bb => void 0 !== db.h[bb],
      harvestType: bb => {
        var ab;
        return null === (ab = db.h[bb]) || void 0 === ab ? void 0 : ab.harvestType
      },
      harvestLevel: bb => {
        var ab;
        return null === (ab = db.h[bb]) || void 0 === ab ? void 0 : ab.harvestLevel
      },
      dropsNothing: bb => {
        var ab;
        return null === (null === (ab = db.h[bb]) || void 0 === ab ? void 0 : ab.drops)
      },
      displayName: bb => {
        var ab;
        return null === (ab = nE.g[bb]) || void 0 === ab ? void 0 : ab.displayName
      },
      description: bb => {
        var ab;
        return null === (ab = nE.g[bb]) || void 0 === ab ? void 0 : ab.description
      },
      harvests: bb => {
        var ab;
        return null === (ab = nE.g[bb]) || void 0 === ab ? void 0 : ab.harvests
      },
      level: bb => {
        var ab;
        return null === (ab = nE.g[bb]) || void 0 === ab ? void 0 : ab.level
      }
    };

    function Sk(bb, ab, Ub) {
      return function(bb, ab, Ub, Ab) {
        var Mb, Tb;
        const Eb = ab.split("|")[0],
          Yb = bb.isBlock(ab) ? ab : bb.isBlock(Eb) ? Eb : null;
        if (null === Yb || "rock" !== bb.harvestType(Yb) || bb.dropsNothing(Yb) && !rA.has(Eb)) return null;
        const Bb = Ub && "rock" === bb.harvests(Ub) ? null !== (Mb = bb.level(Ub)) && void 0 !== Mb ? Mb : 0 : null,
          eb = null !== (Tb = null !== Ab && void 0 !== Ab ? Ab : bb.harvestLevel(Yb)) && void 0 !== Tb ? Tb : 0;
        return (null !== Bb ? eb <= Bb : 0 === bb.harvestLevel(Yb)) ? null : NA(bb, eb)
      }(nk, bb, ab, Ub)
    }

    function by(bb, ab) {
      return function(bb, ab, Ub) {
        if (ab === pA[0]) return [(0, Gb.Od)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Gb.E.whiteUiText)];
        const Ab = Ub.split("|")[0],
          Mb = bb.isBlock(Ab) ? bb.displayName(Ab) : void 0,
          Tb = "string" === typeof Mb ? Mb : Mb && "translationKey" in Mb ? `$t(${Mb.translationKey})` : Ab;
        return [(0, Gb.Od)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Tb
          }
        }, Gb.E.whiteUiText), (0, Gb.Od)({
          translationKey: `item:${(0,Gb.he)(ab)}`
        }, Gb.E.yellowUiText)]
      }(nk, bb, ab)
    }
    const ay = "buildAFactory2Game:";
    const Uy = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Ay(bb) {
      return bb.endsWith(" Ore")
    }
    const My = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Ty = [],
      Ey = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: My,
        plan: null,
        atomic: Ty
      },
      Yy = "buildAFactory2Game:",
      By = new Set(["Splitter", "Sorting Gate"]),
      ey = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class vy {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = bb, this.planAt = ab, this.tierOf = Ub, this.Av = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.PY = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Ey, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(bb, ab, Ub) {
        var Ab, Mb, Tb;
        let Eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Yb = null !== (Ab = null === (Mb = bb.vab(ab)) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== Ab ? Ab : null,
          Bb = bb.isPlayerCrouching(ab),
          eb = 0 === Ub ? null : this.resolve(bb, Ub),
          vb = null !== eb && null !== Eb && By.has(eb.rootName) && function(bb, ab) {
            return ey.some((Ub => {
              let [Ab, Mb] = Ub;
              const Tb = bb.getBlockId(ab[0] + Ab, ab[1], ab[2] + Mb);
              return 0 !== Tb && "Express Belt" === bb.getMetaInfo(Tb).rootName
            }))
          }(bb, Eb),
          Lb = this.updatePlan(0 === Ub ? null : Eb),
          Pb = this.tierOf(),
          Xb = null === Eb ? null : (0, Jk.d)(Ub),
          jb = null !== Xb && null !== Eb && (0, Jk.g)(function(bb) {
            return (ab, Ub, Ab) => bb.getBlockId(ab, Ub, Ab)
          }(bb), Eb[0], Eb[1], Eb[2], Xb),
          Rb = this.readAfloat(bb, Ub, Eb);
        if (Ub === this.Av && jb === this.missesMaker && Rb === this.afloat && Yb === this.PY && Bb === this.crouching && vb === this.express && Pb === this.tier && !Lb && (!this.targetsLive || !this.liveMoved(Eb))) return;
        this.Av = Ub, this.missesMaker = jb, this.afloat = Rb, this.PY = Yb, this.crouching = Bb, this.express = vb;
        const kb = vb && eb ? function(bb) {
          if (null === bb.info) return null;
          return bb.express ??= {
            ...bb.info,
            detail: `${Yy}lookKeepsUpExpress`,
            detailItem: null
          }, bb.express
        }(eb) : null !== eb && jb && null !== Xb ? this.besideMaker(eb, Ub, Xb) : null !== eb && Rb ? this.hanging(eb) : null !== (Tb = null === eb || void 0 === eb ? void 0 : eb.info) && void 0 !== Tb ? Tb : null;
        this.tier = Pb;
        const yb = eb && kb ? function(bb, ab) {
          var Ub, Ab;
          const Mb = db.h[bb];
          if (!bb.endsWith(" Ore") || "rock" !== (null === Mb || void 0 === Mb ? void 0 : Mb.harvestType) || 0 === Mb.harvestLevel) return null;
          const Tb = null !== (Ub = Mb.harvestLevel) && void 0 !== Ub ? Ub : 0,
            Eb = ab ? nE.g[ab] : void 0;
          if ("rock" === (null === Eb || void 0 === Eb ? void 0 : Eb.harvests) && (null !== (Ab = Eb.level) && void 0 !== Ab ? Ab : 0) >= Tb) return null;
          const Yb = (Bb = Tb, NA(nk, Bb));
          var Bb;
          if (null === Yb) return null;
          const eb = UT(Yb),
            vb = /^[AEIOU]/.test(Yb) ? "An" : "";
          if ("rock" === (null === Eb || void 0 === Eb ? void 0 : Eb.harvests) && ab) return {
            key: `${Yy}lookToolTooWeak${vb}`,
            PY: UT(ab),
            needed: eb
          };
          return {
            key: Yb === pA[0] ? `${Yy}lookNeedAnyPickaxe` : `${Yy}lookNeedPickaxe${vb}`,
            PY: null,
            needed: eb
          }
        }(eb.rootName, Yb) : null;
        this.targetsLive = !0 === (null === eb || void 0 === eb ? void 0 : eb.live) && null !== Eb;
        let Zb = null;
        this.targetsLive && eb && Eb && this.live && (this.livePos[0] = Eb[0], this.livePos[1] = Eb[1], this.livePos[2] = Eb[2], this.liveVersion = this.live.version(), Zb = this.live.line(eb.rootName, Eb));
        const Db = null === kb ? My : function(bb, ab, Ub) {
            const Ab = function(bb, ab, Ub) {
              const Ab = hU(bb);
              if (null === Ab) return null;
              const Mb = `${ay}lookPortMode_${Ab}`,
                Tb = lA(ab);
              if (Tb && Ub) return {
                mode: null,
                detail: Mb,
                next: `${ay}lookWrenchPickUp`,
                nextState: null
              };
              const Eb = GU(bb),
                Yb = null === Eb ? null : hU(Eb);
              return null === Yb ? {
                mode: null,
                detail: Mb,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Mb,
                next: Tb ? `${ay}lookWrenchNext` : `${ay}lookPortWrench`,
                nextState: `${ay}lookPortState_${Yb}`
              }
            }(bb, ab, Ub);
            if (null !== Ab) return Ab;
            const Mb = UM(bb, ab, Ub);
            return null === Mb.mode && null === Mb.next ? My : Mb
          }(bb.blockIdToBlockName(Ub), Yb, Bb),
          zb = this.plan,
          xb = eb && kb ? this.rowsOf(eb.rootName, Pb) : Ty,
          ib = this.snapshot;
        if (!(null === kb ? !ib.visible : ib.visible && kb === ib.info && (fb = yb, mb = ib.tool, fb === mb || null !== fb && null !== mb && fb.key === mb.key && fb.PY === mb.PY && fb.needed === mb.needed) && function(bb, ab) {
            return bb === ab || null !== bb && null !== ab && bb.key === ab.key && JSON.stringify([bb.params, bb.keys]) === JSON.stringify([ab.params, ab.keys])
          }(Zb, ib.live) && function(bb, ab) {
            return bb.mode === ab.mode && bb.detail === ab.detail && bb.next === ab.next && bb.nextState === ab.nextState
          }(Db, ib.wrench) && oj(zb, ib.plan) && xb === ib.atomic)) {
          var fb, mb;
          this.snapshot = null === kb ? {
            ...ib,
            visible: !1
          } : {
            info: kb,
            visible: !0,
            tool: yb,
            live: Zb,
            wrench: Db,
            plan: zb,
            atomic: xb
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Ey, this.Av = 0, this.PY = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(bb, ab, Ub) {
        if (null === Ub || 0 === ab || !Yb() || !Ay(this.resolve(bb, ab).rootName)) return !1;
        const Ab = `${Ub[0]},${Ub[1]},${Ub[2]},${ab}`,
          Mb = performance.now();
        return Ab === this.afloatKey && Mb - this.afloatAt < Ly ? this.afloat : (this.afloatKey = Ab, this.afloatAt = Mb, function(bb, ab) {
          for (const [Ub, Ab, Mb] of Uy) {
            const Tb = ab(bb[0] + Ub, bb[1] + Ab, bb[2] + Mb);
            if (void 0 === Tb || null !== Tb && !Ay(Tb)) return !1
          }
          return !0
        }(Ub, ((ab, Ub, Ab) => function(bb, ab, Ub, Ab) {
          if (!bb.isBlockInLoadedChunk(ab, Ub, Ab)) return;
          const Mb = bb.getBlockId(ab, Ub, Ab);
          return 0 === Mb ? null : bb.getMetaInfo(Mb).rootName
        }(bb, ab, Ub, Ab))))
      }
      liveMoved(bb) {
        var ab;
        const {
          livePos: Ub
        } = this;
        return null === bb || bb[0] !== Ub[0] || bb[1] !== Ub[1] || bb[2] !== Ub[2] || (null === (ab = this.live) || void 0 === ab ? void 0 : ab.version()) !== this.liveVersion
      }
      updatePlan(bb) {
        const ab = null === bb ? "" : bb.join(","),
          Ub = performance.now();
        if (ab === this.planPos && Ub - this.planMs < 250) return !1;
        this.planPos = ab, this.planMs = Ub;
        const Ab = null === bb ? null : this.planAt([bb[0], bb[1], bb[2]]),
          Mb = !oj(Ab, this.plan);
        return this.plan = Ab, Mb
      }
      besideMaker(bb, ab, Ub) {
        let {
          info: Ab
        } = bb;
        if (null === Ab) return null;
        let Mb = this.besideMakerById.get(ab);
        if (void 0 === Mb) {
          const bb = "cryo" === Ub ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Mb = {
            ...Ab,
            detail: `${Yy}${bb}`,
            detailItem: null
          }, this.besideMakerById.set(ab, Mb)
        }
        return Mb
      }
      hanging(bb) {
        let {
          info: ab,
          rootName: Ub
        } = bb;
        if (null === ab) return null;
        let Ab = this.afloatByRoot.get(Ub);
        return void 0 === Ab && (Ab = {
          ...ab,
          detail: `${Yy}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(Ub, Ab)), Ab
      }
      rowsOf(bb, ab) {
        if (null === ab) return Ty;
        const Ub = `${bb}|${ab}`;
        let Ab = this.rowsByKey.get(Ub);
        if (void 0 === Ab) {
          const Mb = function(bb, ab) {
            var Ub;
            if (!(bb in Ga)) return [];
            const Ab = null !== (Ub = Qa[bb]) && void 0 !== Ub ? Ub : [],
              Mb = new Map;
            for (const Eb of lT(bb, ab))
              if ((Ab.includes(Eb) || oT(Eb.output) && rT(Eb.output) > cb(bb)) && rT(Eb.output) <= ab) {
                var Tb;
                const bb = null !== (Tb = Mb.get(Eb.output)) && void 0 !== Tb ? Tb : [];
                bb.push(Eb.input), Mb.set(Eb.output, bb)
              } return wT([...Mb], (bb => {
              let [ab] = bb;
              return -rT(ab)
            })).map((bb => {
              let [ab, Ub] = bb;
              return {
                output: ab,
                inputs: Ub
              }
            }))
          }(bb, ab);
          Ab = Mb.length > 0 ? Mb : Ty, this.rowsByKey.set(Ub, Ab)
        }
        return Ab
      }
      resolve(bb, ab) {
        const {
          rootId: Ub,
          rootName: Ab
        } = bb.getMetaInfo(ab), Mb = (0, jU.k)(Ab) ? ab : Ub;
        let Tb = this.byRootId.get(Mb);
        const Eb = Yb();
        if (void 0 === Tb || Tb.nuclear !== Eb) {
          var Bb;
          const Ub = function(bb) {
            return qA(nk, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb)
          }(Ab, bb.blockIdToBlockName(ab));
          Tb = {
            info: Ub,
            rootName: Ab,
            live: null !== Ub && !0 === (null === (Bb = this.live) || void 0 === Bb ? void 0 : Bb.handles(Ab)),
            nuclear: Eb
          }, this.byRootId.set(Mb, Tb)
        }
        return Tb
      }
    }
    const Ly = 500;
    const Py = (0, Ab.memo)((function(bb) {
      var ab, Ub;
      let {
        store: Mb
      } = bb;
      const {
        t: Tb
      } = (0, NM.A)(), [Eb, Yb] = (0, Ab.useState)((() => Mb.get()));
      (0, Ab.useEffect)((() => (Yb(Mb.get()), Mb.subscribe((() => {
        Yb(Mb.get())
      })))), [Mb]);
      const {
        openInGameMenuName: Bb,
        openEverythingMenuName: eb,
        isTouchScreen: vb
      } = (0, DM.n)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Lb,
        tool: Pb,
        live: Xb,
        wrench: jb,
        atomic: Rb
      } = Eb, kb = Eb.visible && null === Bb && null === eb;
      if (null === Lb) return null;
      const yb = null !== jb.detail ? Tb(jb.detail) : null !== (ab = Eb.plan) && void 0 !== ab && ab.ctrl ? Tb("buildAFactory2Game:lookPlanCtrl") : null !== Lb.detail ? Tb(Lb.detail, null === Lb.detailItem ? void 0 : {
        item: Tb(Lb.detailItem)
      }) : null;
      return (0, mT.jsxs)("div", {
        className: iM()("Baf2LookTarget", {
          Visible: kb
        }),
        "aria-hidden": !kb,
        children: [(0, mT.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Tb(Lb.name)
        }), null !== Eb.plan && (0, mT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Tb(Eb.plan.key, {
            kind: Tb(Eb.plan.kindKey),
            w: String(Eb.plan.w),
            h: String(Eb.plan.h),
            d: String(Eb.plan.d),
            count: String(Eb.plan.count)
          })
        }), void 0 !== (null === (Ub = Eb.plan) || void 0 === Ub ? void 0 : Ub.why) && (0, mT.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Tb(Eb.plan.why)
        }), null !== jb.mode && (0, mT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Tb(jb.mode)
        }), null !== Pb ? (0, mT.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Tb(Pb.key, {
            item: Tb(Pb.needed),
            PY: null === Pb.PY ? "" : Tb(Pb.PY)
          })
        }) : null !== Xb ? (0, mT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Tb(Xb.key, Ue(Tb, Xb))
        }) : null !== yb && (0, mT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: yb
        }), Rb.length > 0 && (0, mT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Tb("buildAFactory2Game:lookAtomicRecipes", {
            list: Rb.map((bb => {
              let {
                output: ab,
                inputs: Ub
              } = bb;
              const Ab = Ub.length > 1 ? ` ${Tb("buildAFactory2Game:recipeMore",{count:String(Ub.length-1)})}` : "";
              return `${Tb(UT(Ub[0]))}${Ab} \u2192 ${Tb(UT(ab))}`
            })).join(", ")
          })
        }), null !== jb.next && (0, mT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Tb(jb.next, {
            state: null === jb.nextState ? "" : Tb(jb.nextState),
            use: Tb(vb ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Xy = Ub(37849);
    const jy = [],
      Ry = [
        [0, -1, 0]
      ];

    function ky(bb) {
      const ab = [bb];
      for (let Ub = 1; Ub <= 4; Ub++) Ub > 1 && ab.push(`${bb}|meta|rot${Ub}`), ab.push(`${bb}|meta|rot${Ub}|Running`);
      return ab
    }

    function yy(bb, ab) {
      return [Math.floor(bb[0] / ab), Math.floor(bb[1] / ab), Math.floor(bb[2] / ab)]
    }

    function Zy(bb, ab, Ub) {
      return `${bb},${ab},${Ub}`
    }

    function Dy(bb) {
      const ab = bb.split("|")[0];
      if (!eU(ab)) return jy;
      const Ub = Ga[ab];
      if (aU(Ub)) return Ry;
      const Ab = kk(bb);
      return UU(Ub) ? [
        [-Ab[0], -Ab[1], -Ab[2]]
      ] : fM(Ub) ? function(bb, ab) {
        const Ub = bb[0] - 2 * ab[0],
          Ab = bb[2] - 2 * ab[2],
          Mb = [];
        for (let Tb = -1; Tb <= 1; Tb++)
          for (let ab = -1; ab <= 1; ab++) Mb.push([Ub + Tb, bb[1], Ab + ab]);
        return Mb
      }([0, 0, 0], Ab) : jy
    }
    const zy = [.5, .5, .5],
      xy = [.2, .8, .3],
      iy = [.45, 1, .5];
    class fy {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(bb) {
        this.indexed = !0;
        for (const ab of Wa)
          for (const Ub of ky(ab)) {
            const ab = bb.blockNameToBlockId(Ub, !0),
              Ab = Dy(Ub);
            null !== ab && Ab.length > 0 && (this.offsetsList.push(Ab), this.offsetsIndexById[ab] = this.offsetsList.length)
          }
      }
      onAfterRender(bb, ab) {
        this.indexed || this.index(bb);
        const Ub = performance.now();
        if (Ub - this.lastCheckMs < 100) return;
        this.lastCheckMs = Ub, this.checks++;
        const Ab = Bj.c.Mj,
          [Mb, Tb, Eb] = yy(ab, Ab);
        let Yb = !1;
        const Bb = [];
        let eb = 0;
        for (let vb = Mb - 2; vb <= Mb + 2; vb++)
          for (let ab = Tb - 1; ab <= Tb + 1; ab++)
            for (let Mb = Eb - 2; Mb <= Eb + 2; Mb++) {
              const Tb = eb++,
                Eb = Zy(vb, ab, Mb),
                Lb = bb.getChunkVersion(vb, ab, Mb);
              let Pb = this.chunks.get(Eb);
              null !== Lb ? (Pb || (Pb = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Eb, Pb)), Pb.seenAt = this.checks, Pb.checkedVersion !== Lb && (Pb.checkedVersion = Lb, Yb = !0), Pb.scannedVersion !== Lb && Ub - Pb.scannedAt >= 500 && Bb.push({
                slot: Tb,
                entry: Pb,
                origin: [vb * Ab, ab * Ab, Mb * Ab]
              })) : (Yb ||= void 0 !== Pb, this.chunks.delete(Eb))
            }
        this.scanDue(bb, Bb) && (Yb = !0);
        for (const [vb, Lb] of this.chunks) Lb.seenAt !== this.checks && (Yb ||= Lb.machines.length > 0, this.chunks.delete(vb));
        for (const vb of this.chunks.values())
          for (const [ab, Ub, Ab] of vb.cellChunks)(Math.abs(ab - Mb) > 2 || Math.abs(Ub - Tb) > 1 || Math.abs(Ab - Eb) > 2) && this.watchCellChunk(bb, ab, Ub, Ab) && (Yb = !0);
        for (const [vb, Lb] of this.cellChunks) Lb.seenAt !== this.checks && this.cellChunks.delete(vb);
        Yb && this.refresh(bb)
      }
      dispose(bb) {
        this.clearMeshes(bb), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(bb, ab) {
        const Ub = Math.max(ab.findIndex((bb => {
          let {
            slot: ab
          } = bb;
          return ab >= this.scanFrom
        })), 0);
        let Ab = 96;
        for (let Mb = 0; Mb < ab.length; Mb++) {
          const {
            slot: Tb,
            entry: Eb,
            origin: Yb
          } = ab[(Ub + Mb) % ab.length];
          if (Ab -= this.scan(bb, Eb, Yb), Ab <= 0) {
            this.scanFrom = Tb + 1;
            break
          }
        }
        return ab.length > 0
      }
      scan(bb, ab, Ub) {
        let [Ab, Mb, Tb] = Ub;
        const Eb = Bj.c.Mj,
          Yb = this.hits;
        Yb.length = 0;
        const Bb = bb.scanBlocks(Ab, Mb, Tb, Ab + Eb, Mb + Eb, Tb + Eb, this.offsetsIndexById, Yb),
          eb = [];
        for (let vb = 0; vb < Yb.length; vb += 4) eb.push({
          pos: [Yb[vb], Yb[vb + 1], Yb[vb + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[Yb[vb + 3]] - 1]
        });
        return ab.machines = eb, ab.cellChunks = function(bb, ab) {
          const Ub = new Set,
            Ab = [];
          for (const {
              pos: Mb,
              offsets: Tb
            }
            of bb)
            for (const [bb, Eb, Yb] of Tb) {
              const Tb = yy([Mb[0] + bb, Mb[1] + Eb, Mb[2] + Yb], ab),
                Bb = Zy(...Tb);
              Ub.has(Bb) || (Ub.add(Bb), Ab.push(Tb))
            }
          return Ab
        }(eb, Eb), ab.scannedVersion = ab.checkedVersion, ab.scannedAt = performance.now(), Math.max(Bb, 1)
      }
      watchCellChunk(bb, ab, Ub, Ab) {
        const Mb = Zy(ab, Ub, Ab),
          Tb = bb.getChunkVersion(ab, Ub, Ab),
          Eb = this.cellChunks.get(Mb);
        return null === Tb ? this.cellChunks.delete(Mb) : (null === Eb || void 0 === Eb ? void 0 : Eb.version) === Tb ? (Eb.seenAt = this.checks, !1) : (this.cellChunks.set(Mb, {
          version: Tb,
          seenAt: this.checks
        }), !0)
      }
      refresh(bb) {
        const ab = function(bb, ab) {
            const Ub = new Set,
              Ab = [];
            for (const {
                pos: Mb,
                offsets: Tb
              }
              of bb)
              for (const [bb, Eb, Yb] of Tb) {
                const Tb = Mb[0] + bb,
                  Bb = Mb[1] + Eb,
                  eb = Mb[2] + Yb,
                  vb = `${Tb},${Bb},${eb}`;
                Ub.has(vb) || (Ub.add(vb), ab(Tb, Bb, eb) && Ab.push([Tb, Bb, eb]))
              }
            return Ab
          }([...this.chunks.values()].flatMap((bb => bb.machines)), ((ab, Ub, Ab) => bb.isBlockInLoadedChunk(ab, Ub, Ab) && 0 === bb.getBlockId(ab, Ub, Ab))),
          Ub = ab.join(";");
        Ub !== this.shownKey && (this.shownKey = Ub, this.clearMeshes(bb), ab.length > 0 && (this.meshes = [this.build(bb, ab, !1), this.build(bb, ab, !0)]))
      }
      build(bb, ab, Ub) {
        const Ab = ab[0],
          Mb = [],
          Tb = [];
        for (const [Eb, Yb, Bb] of ab)(0, Xy.c)(Mb, Tb, [Eb - Ab[0] + .5, Yb - Ab[1] + .5, Bb - Ab[2] + .5], zy, Ub);
        return bb.createGameMesh({
          positions: Mb,
          indices: Tb
        }, {
          rgb: Ub ? iy : xy,
          alpha: .4
        }, Ab)
      }
      clearMeshes(bb) {
        for (const ab of this.meshes) bb.disposeGameMesh(ab);
        this.meshes = []
      }
    }
    const my = 1 / .6,
      py = 200,
      Ny = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Wy = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Hy = 2 * Math.PI / 3;
    class Iy {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ny;
        this.style = bb, this.particles = null, this.points = new Float32Array(800), this.budget = py, this.lastMs = 0
      }
      static blade() {
        return new Iy(Wy)
      }
      ZZ(bb, ab) {
        const Ub = Math.min(ab.arcStruck, ab.arcPoints.length);
        this.draw(bb, [ab.arcFrom, ...ab.arcPoints], ab.arcPoints.slice(0, Ub))
      }
      onBlade(bb, ab) {
        const [Ub, Ab, Mb] = ab.bladeCentre, [Tb, Eb] = ab.bladeFacing, Yb = Ub - 1.5 * Tb, Bb = Mb - 1.5 * Eb, eb = Math.atan2(Eb, Tb), vb = [];
        for (let Lb = 0; Lb <= 8; Lb++) {
          const bb = eb - Hy / 2 + Hy * Lb / 8;
          vb.push([Yb + 2.5 * Math.cos(bb), Ab, Bb + 2.5 * Math.sin(bb)])
        }
        this.draw(bb, vb, ab.bladeStruck)
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null
      }
      draw(bb, ab, Ub) {
        if (!bb.particlesEnabled() || ab.length < 2) return;
        const Ab = performance.now();
        this.budget = Math.min(py, this.budget + (Ab - this.lastMs) / 1e3 * py), this.lastMs = Ab;
        const Mb = [];
        let Tb = 0,
          Eb = ab[0];
        for (const yb of ab.slice(1)) {
          const bb = Math.min(48, Math.round(Math.hypot(yb[0] - Eb[0], yb[1] - Eb[1], yb[2] - Eb[2]) * this.style.perBlock));
          Mb.push([Eb, yb, bb]), Tb += bb, Eb = yb
        }
        const Yb = Ub.length;
        Tb += 10 * Yb;
        const Bb = Tb > this.budget ? this.budget / Tb : 1;
        if (0 === Tb || Bb * Tb < 1) return;
        const eb = ab[0],
          [vb, Lb, Pb] = eb,
          Xb = this.points;
        let jb = 0;
        const Rb = (bb, ab, Ub, Ab) => {
          const Mb = 4 * jb;
          Xb[Mb] = bb - vb, Xb[Mb + 1] = ab - Lb, Xb[Mb + 2] = Ub - Pb, Xb[Mb + 3] = Ab, jb++
        };
        Mb.forEach(((bb, ab) => {
          let [Ub, Ab, Mb] = bb;
          const Tb = Math.min(Math.floor(Mb * Bb), py - jb),
            Eb = Math.hypot(Ab[0] - Ub[0], Ab[1] - Ub[1], Ab[2] - Ub[2]),
            Yb = 0 === ab && Eb > 0 ? Math.min(.5, .1 * Eb) / Eb : 0;
          for (let Bb = 0; Bb < Tb; Bb++) {
            const bb = Yb + (Bb + .5) / Tb * (1 - Yb);
            Rb(Ub[0] + (Ab[0] - Ub[0]) * bb, Ub[1] + (Ab[1] - Ub[1]) * bb, Ub[2] + (Ab[2] - Ub[2]) * bb, .15)
          }
        }));
        const kb = Math.floor(10 * Bb);
        for (let yb = 0; yb < Yb; yb++) {
          const [bb, ab, Ab] = Ub[yb];
          for (let Ub = 0; Ub < kb && jb < py; Ub++) Rb(bb, ab, Ab, 2.5)
        }
        this.budget -= jb, this.particles ??= bb.createParticles(function(bb) {
          const [ab, Ub] = bb.colours;
          return {
            texture: "square_particle",
            PL: 400,
            minLifeTime: bb.life[0] / my,
            maxLifeTime: bb.life[1] / my,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [ab[0], ab[1], ab[2], 1],
              maxColor: [Ub[0], Ub[1], Ub[2], 1]
            }, {
              timeFraction: 1,
              minColor: [ab[0], ab[1], ab[2], 0],
              maxColor: [Ub[0], Ub[1], Ub[2], 0]
            }],
            blendMode: GY.f.Add
          }
        }(this.style), {
          pos: eb
        }), this.particles.emitPoints(eb, Xb, jb)
      }
    }
    const dy = new Set(["Sky Spring"]);

    function Fy(bb, ab, Ub) {
      const Ab = bb.split("|")[0];
      return "Air" !== ab || Ub || ! function(bb) {
        const ab = bb.split("|")[0];
        return void 0 !== EU[ab] || dy.has(ab)
      }(Ab) ? null : bb
    }
    class hy {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(bb) {
        const ab = bb - this.lastTapAt >= 300;
        return this.lastTapAt = bb, ab
      }
    }
    class Gy {
      constructor() {
        this.presses = new hy, this.predicted = null
      }
      tap(bb, ab) {
        const Ub = this.presses.isNewPress(ab);
        return Ub && (this.predicted = {
          station: bb,
          at: ab
        }), Ub
      }
      consumeServerOpen(bb, ab) {
        const Ub = this.predicted;
        return !(null === Ub || Ub.station !== bb || ab - Ub.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Qy {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(bb, ab) {
        return bb && (this.thrustAt = ab), ab - this.thrustAt < 200
      }
    }
    const qy = [.1, .05, .1],
      uy = {
        texture: "effect_5",
        PL: Math.ceil(48),
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
        blendMode: GY.f.OneOne
      };
    class ry {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Qy, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      ZZ(bb, ab) {
        for (const [Ub, Ab] of ab.baf2JetFlames) bb.isLocalPlayer(Ub) || (Ab ? this.lit.add(Ub) : this.lit.delete(Ub))
      }
      onAfterRender(bb, ab) {
        const Ub = performance.now(),
          Ab = this.hold.lit(this.selfThrusting(bb, ab), Ub);
        for (const [Mb, Tb] of this.flames)(Mb === ab ? Ab : this.lit.has(Mb)) || this.setEmitting(Tb, !1), Mb === ab || bb.getPositionView(Mb) ? !Tb.emitting && Ub - Tb.offAt >= 1300 && (Tb.particles.stop(), this.flames.delete(Mb)) : (Tb.particles.dispose(), this.flames.delete(Mb), this.lit.delete(Mb));
        Ab && this.draw(bb, ab, ab);
        for (const Mb of this.lit) this.draw(bb, ab, Mb)
      }
      dispose() {
        for (const bb of this.flames.values()) bb.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(bb, ab) {
        var Ub;
        const Ab = bb.getLocalPlayerMovement();
        return !!Ab && (null !== (Mb = {
          option: null !== (Ub = bb.getClientOption(ab, "jumpHoldThrust")) && void 0 !== Ub ? Ub : null,
          jumping: Ab.jumpHeld,
          onGround: Ab.onGround,
          alive: bb.isAlive(ab)
        }).option && Mb.option.maxUpSpeed >= 0 && Mb.jumping && !Mb.onGround && Mb.alive);
        var Mb
      }
      draw(bb, ab, Ub) {
        var Ab, Mb;
        const Tb = this.pos;
        if (!bb.readDrawnPosition(Ub, Tb)) return;
        const Eb = bb.readDrawnPosition(ab, this.camera) ? this.camera : Tb;
        if (!((Tb[0] - Eb[0]) ** 2 + (Tb[1] - Eb[1]) ** 2 + (Tb[2] - Eb[2]) ** 2 < 1600) || !bb.particlesEnabled()) {
          const bb = this.flames.get(Ub);
          return void(bb && this.setEmitting(bb, !1))
        }
        const Yb = null !== (Ab = this.flames.get(Ub)) && void 0 !== Ab ? Ab : this.create(bb, Ub, Tb),
          Bb = null !== (Mb = bb.getDrawnHeading(Ub)) && void 0 !== Mb ? Mb : 0,
          eb = this.at;
        eb[0] = Tb[0] - .35 * Math.sin(Bb), eb[1] = Tb[1] + 1.05, eb[2] = Tb[2] - .35 * Math.cos(Bb), Yb.particles.moveTo(eb), this.setEmitting(Yb, !0)
      }
      setEmitting(bb, ab) {
        bb.emitting !== ab && (bb.emitting = ab, ab || (bb.offAt = performance.now()), bb.particles.setEmitRate(ab ? 60 : 0))
      }
      create(bb, ab, Ub) {
        const Ab = {
          particles: bb.createParticles(uy, {
            pos: Ub,
            half: qy
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(ab, Ab), Ab
      }
    }

    function Ky(bb) {
      return "Reactor Frame" === AA("reactor", bb)
    }

    function oy(bb) {
      return rU("reactor", bb) && !Ky(bb) && (bb.startsWith("Reactor Glass") || bb.startsWith("Reactor Port"))
    }
    const ly = "baf2Goal";
    class ty {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [hM.m.subscribe("setDirectionArrow", (bb => {
          let {
            id: ab,
            position: Ub
          } = bb;
          ab === ly && (this.goal = Ub, this.checkedAt = -1 / 0)
        })), hM.m.subscribe("clearDirectionArrow", (bb => {
          let {
            id: ab
          } = bb;
          null !== ab && ab !== ly || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const bb of this.subs) hM.m.unsubscribe(bb)
      }
      sideOf(bb, ab, Ub, Ab) {
        const Mb = this.goal;
        if (!Mb) return 0;
        Ub - this.checkedAt > 1e3 && (this.checkedAt = Ub, this.open = function(bb, ab) {
          const [Ub, Ab, Mb] = bb.map(Math.floor);
          if (!oy(ab(Ub, Ab, Mb))) return null;
          for (const [Tb, Eb] of [
              [1, 0],
              [0, 1]
            ]) {
            const bb = ab(Ub + Tb, Ab, Mb + Eb),
              Yb = ab(Ub - Tb, Ab, Mb - Eb);
            if (Ky(Yb) && oy(bb)) return [Tb, 0, Eb];
            if (Ky(bb) && oy(Yb)) return [0 - Tb, 0, 0 - Eb]
          }
          return null
        }(Mb, ((ab, Ub, Ab) => bb.blockIdToBlockName(bb.getBlockId(ab, Ub, Ab)))));
        const Tb = this.open;
        if (!Tb) return 0;
        const Eb = Ab(Mb);
        if (Math.abs(Eb.x - ab.x) > .05 || Math.abs(Eb.y - ab.y) > .05) return 0;
        const Yb = Ab([Mb[0] + Tb[0], Mb[1], Mb[2] + Tb[2]]).x - Eb.x;
        return Math.abs(Yb) < .3 ? 0 : Yb > 0 ? 1 : -1
      }
    }
    class wy {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new ty, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.cX = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.bZ = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((bb => {
          for (const ab of bb) ab.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(ab.target, ab.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.cX || this.clear()
        }, window.addEventListener("resize", this.bZ)
      }
      onAfterRender(bb, ab) {
        var Ub;
        this.api = bb, this.project = null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.projectWorldPosToScreenPos) && void 0 !== Ub ? Ub : null, this.queued || this.cX || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.cX = !0;
        for (const bb of this.moved.keys()) bb.style.transform = "";
        this.moved.clear();
        for (const bb of this.sideLabels.keys()) bb.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.bZ)
      }
      clear() {
        for (const Tb of this.moved.keys()) Tb.isConnected || this.moved.delete(Tb);
        for (const Tb of this.sideLabels.keys()) Tb.isConnected || this.sideLabels.delete(Tb);
        if (0 === this.arrows.length) return;
        const bb = performance.now(),
          ab = bb - this.refreshedAt > 1e3;
        ab && (this.refreshedAt = bb, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const Ub = this.trackerBox(),
          Ab = this.barsBox(),
          Mb = this.toastBox(ab);
        (Ub || Ab || Mb) && ab && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Tb = 0; Tb < this.arrows.length; Tb++) {
          const ab = this.arrows[Tb];
          this.labelOffsets.set(ab, this.runLabelAside(ab, bb));
          const Eb = (Ub ? this.shiftLeftOf(ab, Ub) : 0) || this.shiftOnScreen(ab),
            Yb = Math.min(Ab ? this.liftAbove(ab, Ab, Eb) : 0, Mb ? this.liftAbove(ab, Mb, Eb) : 0),
            Bb = this.moved.get(ab);
          if (0 !== Eb || 0 !== Yb) {
            const bb = 0 === Yb ? `translateX(${Eb}px)` : `translate(${Eb}px, ${Yb}px)`;
            Bb !== bb && (ab.style.transform = bb, this.moved.set(ab, bb))
          } else void 0 !== Bb && (ab.style.transform = "", this.moved.delete(ab))
        }
      }
      trackerBox() {
        var bb, ab;
        const Ub = null !== (bb = this.tracker) && void 0 !== bb && bb.isConnected ? this.tracker : null !== (ab = this.trackers[0]) && void 0 !== ab ? ab : null;
        if (Ub !== this.tracker && this.watch(Ub), this.boxStale && Ub) {
          var Ab, Mb, Tb;
          this.boxStale = !1;
          const bb = Ub.closest(".NoRoom") ? null : Ub.getBoundingClientRect(),
            ab = bb && bb.width > 0 ? null === (Ab = this.hud) || void 0 === Ab ? void 0 : Ab.getBoundingClientRect() : void 0,
            Eb = bb && ab ? Math.max(bb.top, ab.top) : null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.top) && void 0 !== Mb ? Mb : 0,
            Yb = bb && ab ? Math.min(bb.bottom, ab.bottom) : null !== (Tb = null === bb || void 0 === bb ? void 0 : bb.bottom) && void 0 !== Tb ? Tb : 0;
          this.box = bb && bb.width > 0 && Yb > Eb ? {
            left: bb.left,
            top: Eb,
            right: bb.right,
            bottom: Yb
          } : null
        }
        return Ub ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var bb;
          this.barsStale = !1;
          const ab = null === (bb = this.statBars[0]) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
          this.bars = ab && ab.width > 0 && ab.height > 0 ? {
            left: ab.left,
            top: ab.top,
            right: ab.right,
            bottom: ab.bottom
          } : null
        }
        return this.bars
      }
      toastBox(bb) {
        var ab;
        const Ub = null !== (ab = this.toasts[0]) && void 0 !== ab ? ab : null;
        if (Ub !== this.toastEl || bb && Ub) {
          this.toastEl = Ub;
          const bb = null === Ub || void 0 === Ub ? void 0 : Ub.getBoundingClientRect();
          this.toast = bb && bb.width > 0 && bb.height > 0 ? {
            left: bb.left,
            top: bb.top,
            right: bb.right,
            bottom: bb.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(bb, ab, Ub) {
        var Ab;
        const Mb = this.anchorOf(bb);
        if (!Mb) return 0;
        const Tb = Mb.x + Ub + (null !== (Ab = this.labelOffsets.get(bb)) && void 0 !== Ab ? Ab : 0),
          {
            halfWidth: Eb,
            labelled: Yb
          } = this.extentOf(bb),
          Bb = Mb.y + this.em * (Yb ? 6.2 : 3);
        return Bb < ab.top - 6 || Tb + Eb < ab.left - 6 || Tb - Eb > ab.right + 6 ? 0 : ab.top - 6 - Bb
      }
      watch(bb) {
        var ab, Ub;
        this.tracker && this.sizes.unobserve(this.tracker), null === (ab = this.hud) || void 0 === ab || ab.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = bb, this.hud = null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.closest(".Baf2QuestHud")) && void 0 !== Ub ? Ub : null, this.box = null, this.boxStale = !0, bb && this.sizes.observe(bb), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(bb, ab) {
        var Ub;
        const Ab = this.anchorOf(bb);
        if (!Ab) return 0;
        const {
          y: Mb
        } = Ab, Tb = Ab.x + (null !== (Ub = this.labelOffsets.get(bb)) && void 0 !== Ub ? Ub : 0), Eb = this.em, {
          halfWidth: Yb,
          labelled: Bb
        } = this.extentOf(bb), eb = Mb - Eb, vb = Tb + Yb;
        return Mb + Eb * (Bb ? 6.2 : 3) < ab.top || eb > ab.bottom || vb < ab.left - 6 || Tb - Yb > ab.right ? 0 : Math.max(ab.left - 6 - vb, 6 - (Tb - Yb))
      }
      shiftOnScreen(bb) {
        var ab;
        const Ub = this.anchorOf(bb);
        if (!Ub) return 0;
        const {
          halfWidth: Ab
        } = this.extentOf(bb), Mb = Ub.x + (null !== (ab = this.labelOffsets.get(bb)) && void 0 !== ab ? ab : 0), Tb = Mb + Ab - (this.innerWidth - 6);
        return Tb > 0 ? -Tb : Math.max(0, 6 - (Mb - Ab))
      }
      runLabelAside(bb, ab) {
        var Ub;
        let Ab = null;
        for (let Eb = 0; Eb < bb.children.length; Eb++) bb.children[Eb].classList.contains("DirectionArrowLabel") && (Ab = bb.children[Eb]);
        if (!Ab) return 0;
        const Mb = bb.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(bb) : null,
          Tb = (Mb && this.api ? this.side.sideOf(this.api, {
            x: Mb.x / this.innerWidth * 100,
            y: Mb.y / this.innerHeight * 100
          }, ab, this.project) : 0) * this.halfWidthOf(Ab);
        return Tb !== (null !== (Ub = this.sideLabels.get(Ab)) && void 0 !== Ub ? Ub : 0) && (Ab.style.transform = 0 === Tb ? "" : `translateX(-50%) translateX(${Tb}px)`, 0 === Tb ? this.sideLabels.delete(Ab) : this.sideLabels.set(Ab, Tb)), Tb
      }
      extentOf(bb) {
        let ab = this.em,
          Ub = !1;
        for (let Ab = 0; Ab < bb.children.length; Ab++) {
          const Mb = bb.children[Ab],
            Tb = Mb.classList.contains("DirectionArrowLabel");
          Ub ||= Tb, (Tb || Mb.classList.contains("DirectionArrowDistance")) && (ab = Math.max(ab, this.halfWidthOf(Mb)))
        }
        return {
          halfWidth: ab,
          labelled: Ub
        }
      }
      halfWidthOf(bb) {
        let ab = this.halfWidths.get(bb);
        return void 0 === ab && (ab = bb.offsetWidth / 2, this.halfWidths.set(bb, ab), this.sizes.observe(bb), this.labels.add(bb)), ab
      }
      forgetGoneLabels() {
        for (const bb of this.labels) bb.isConnected || (this.sizes.unobserve(bb), this.halfWidths.delete(bb), this.labels.delete(bb))
      }
      anchorOf(bb) {
        const ab = bb.style.translate,
          Ub = this.anchors.get(bb);
        if (Ub && Ub.translate === ab && Ub.innerWidth === this.innerWidth && Ub.innerHeight === this.innerHeight) return Ub;
        const Ab = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(ab);
        if (!Ab) return null;
        const Mb = {
          translate: ab,
          x: parseFloat(Ab[1]) / 100 * this.innerWidth,
          y: parseFloat(Ab[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(bb, Mb), Mb
      }
    }
    const sy = "Baf2ArrowText";

    function gy(bb, ab) {
      const Ub = bb.rows.find((bb => bb.current));
      return hb(bb.tutorial) && null !== Ub && void 0 !== Ub && Ub.item && wM(Ub) && Hb(Ub.item).includes(ab) ? Ub.item : null
    }
    const Cy = new class {
      constructor(bb) {
        this.select = bb, this.picks = new Map
      }
      open(bb, ab, Ub) {
        const Ab = gy(ab, bb);
        null !== Ab && this.GP(bb, Ab, Ub)
      }
      follow(bb, ab) {
        if (Yb())
          for (const [Ub, {
              item: Ab,
              had: Mb
            }] of this.picks) {
            const Tb = gy(bb, Ub);
            Tb !== Ab && (null !== Tb && ab(Ab) > Mb ? this.GP(Ub, Tb, ab) : this.picks.delete(Ub))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      GP(bb, ab, Ub) {
        this.picks.set(bb, {
          item: ab,
          had: Ub(ab)
        }), this.select(bb, ab)
      }
    }(GM.q);

    function Vy(bb) {
      return ab => {
        let Ub = 0;
        for (const Ab of bb.getInventoryItems())(null === Ab || void 0 === Ab ? void 0 : Ab.name) === ab && (Ub += null === Ab.amount ? 1 : Math.max(Ab.amount, 0));
        return Ub
      }
    }

    function Oy(bb, ab, Ub, Ab) {
      bb.getClientOption(ab, "canCraft") && "inventory" !== DM.c.get("openInGameMenuName") && (Cy.open(Ub, Ab.get(), Vy(bb)), hM.m.IR("toggleMenu", `inventory|${Ub}`))
    }
    let cy = null,
      Jy = !1;

    function ny(bb) {
      const ab = iT();
      bb === cy && ab === Jy || (cy = bb, Jy = ab, (0, GM.s)(function(bb, ab) {
        const Ub = new Map;
        for (let Ab = bb + 1; Ab <= Mb.length; Ab++) {
          const Mb = sT(Ab, bb, ab);
          if (Mb)
            for (const ab of yb(Ab).unlocks) Ub.set(ab, {
              ...Mb,
              stepsAway: Ab - bb
            })
        }
        return Ub
      }(bb, ab)))
    }

    function Sy() {
      return (0, GM.z)(wT(Object.keys(Wb), rT)), () => {
        (0, GM.z)([])
      }
    }
    const bZ = "buildAFactory2Game:",
      aZ = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      UZ = {
        on: `${bZ}tutorialButtonOn`,
        hud: `${bZ}tutorialButtonHud`,
        off: `${bZ}tutorialButtonOff`
      },
      AZ = {
        on: `${bZ}tutorialPickedOn`,
        hud: `${bZ}tutorialPickedHud`,
        off: `${bZ}tutorialPickedOff`
      };

    function MZ(bb, ab, Ub) {
      let Ab = null,
        Mb = () => {};
      const Tb = Tb => {
        var Eb;
        let {
          tutorial: Yb,
          tutorialKnown: Bb
        } = Tb;
        (null === (Eb = Ab) || void 0 === Eb ? void 0 : Eb.tutorial) === Yb && Ab.tutorialKnown === Bb || (Ab = {
          tutorial: Yb,
          tutorialKnown: Bb
        }, Mb = (0, yM.u)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: UZ[Yb],
          icon: {
            kind: "icon",
            name: aZ[Yb]
          },
          iconOnly: !0,
          disabled: !Bb,
          className: "Baf2TutorialButton",
          onClick: () => {
            var Ab;
            (Ab => {
              const Mb = ab.setTutorial(Ab);
              bb.send(`baf2tutorial ${Ab} ${Mb}`), Ub.show({
                baf2ToastText: [(0, Gb.Od)({
                  translationKey: AZ[Ab]
                }, Gb.E.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((Ab = ab.get().tutorial, Fb[(Fb.indexOf(Ab) + 1) % Fb.length]))
          }
        }))
      };
      Tb(ab.get());
      const Eb = hM.m.subscribe(QM, Tb);
      return () => {
        hM.m.unsubscribe(Eb), Mb()
      }
    }

    function TZ(bb, ab, Ub) {
      var Ab, Mb;
      const Tb = bb.getTargetedBlock();
      if (!Tb || ! function(bb, ab, Ub) {
          if ("Chest" !== ab) return !1;
          const Ab = bb.split("|")[0];
          if (!eU(Ab) || 0 === Ga[Ab].outputSlots.length) return !1;
          const Mb = kk(bb);
          return Ub[0] === Mb[0] && Ub[1] === Mb[1] && Ub[2] === Mb[2]
        }(Ub, null === (Ab = bb.vab(ab)) || void 0 === Ab ? void 0 : Ab.name, Tb.normal)) return !1;
      const [Eb, Yb, Bb] = Tb.nX, eb = bb.getBlockId(Eb, Yb, Bb);
      return 0 === eb || !0 === (null === (Mb = db.h[eb]) || void 0 === Mb ? void 0 : Mb.canBePlacedOver)
    }
    var EZ = Ub(36108);
    const YZ = new Set(RU.c);
    class BZ {
      constructor(bb) {
        this.toasts = bb, this.lastAt = -1 / 0
      }
      onAltAction(bb, ab, Ub) {
        const Ab = bb.getTargetedBlock();
        if (!Ab || function(bb) {
            const ab = bb.split("|")[0];
            return eU(ab) || null !== fA(ab) || pb(ab) || RU.c.includes(ab)
          }(Ub) && !YZ.has(Ub.split("|")[0])) return;
        const Mb = bb.vab(ab);
        if (!Mb || !YZ.has(Mb.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Tb = Mb.typeObj.id,
          [Eb, Yb, Bb] = Ab.nX,
          eb = bb.getBlockId(Eb, Yb, Bb),
          vb = db.h[eb];
        (0 === eb || null !== vb && void 0 !== vb && vb.CP || null !== vb && void 0 !== vb && vb.canBePlacedOver) && bb.isSolidToPlayerBlockId(Tb) && bb.canModifyBlockAt(Eb, Yb, Bb) && bb.Wbb(Eb, Yb, Bb, Tb) && !bb.Wbb(Eb, Yb, Bb, Tb, ab) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Gb.Od)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Gb.E.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class eZ {
      constructor(bb) {
        this.show = bb, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(bb, ab, Ub) {
        var Ab;
        if (!ab) return this.started = null, void this.gatedThisHold.clear();
        if (!bb) return void(this.started = null);
        const Mb = `${bb.x},${bb.y},${bb.z},${bb.PY}`;
        if (Mb === this.started) return;
        this.started = Mb;
        const Tb = uA(bb.y) ? Sk(bb.block, bb.PY, bb.level) : null;
        if (null === Tb || this.gatedThisHold.has(Mb)) return;
        this.gatedThisHold.add(Mb);
        const Eb = bb.block.split("|")[0];
        Ub - (null !== (Ab = this.hintedAt.get(Eb)) && void 0 !== Ab ? Ab : -1 / 0) < 5e3 || (this.hintedAt.set(Eb, Ub), this.show({
          baf2ToastText: by(Tb, bb.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var vZ = Ub(31);

    function LZ(bb, ab) {
      const Ub = [...bb.baf2CoreBankPaused];
      for (const [Mb] of bb.baf2CoreBanked) Ub.push(Mb);
      for (const Eb of Mb) {
        for (const {
            item: bb
          }
          of Eb.cost) Ub.push(bb);
        for (const bb of Eb.newDeposits) Ub.push(bb.block);
        for (const bb of Eb.unlocks) Ub.push(bb, Ib(bb));
        Eb.reward && Ub.push(Eb.reward);
        for (const {
            item: bb
          }
          of null !== (Ab = null === (Tb = Eb.charge) || void 0 === Tb ? void 0 : Tb.items) && void 0 !== Ab ? Ab : []) {
          var Ab, Tb;
          Ub.push(bb)
        }
      }
      return {
        message: bb,
        itemNames: ab([...new Set(Ub)])
      }
    }
    const PZ = "baf2MultiblockGuide";
    const XZ = new Map;
    const jZ = function(bb, ab, Ub, Mb) {
      let {
        localPlayerId: Tb
      } = Mb;
      const Eb = new RY,
        Yb = new JP,
        eb = new MX,
        vb = new UX(eb),
        Lb = (bb, ab) => {
          ab ? vb.observe(bb) : vb.unobserve(bb)
        },
        Pb = new aX,
        Xb = new BX(Lb),
        jb = bb => Xb.covers(bb),
        Rb = new WX;
      let kb;
      const yb = new rE((bb => {
          kb.sendCommand(bb)
        })),
        Zb = () => {
          yb.send("baf2questbook")
        },
        Db = bb => function(bb, ab, Ub) {
          const Ab = {};
          for (const Mb of Ub) {
            let Ub = XZ.get(Mb);
            void 0 === Ub && (Ub = bb.getItemStat(ab, Mb, "displayName"), XZ.set(Mb, Ub)), Ab[Mb] = Ub
          }
          return Ab
        }(kb, Tb, bb),
        zb = new rM(Zb),
        xb = new KX((() => DM.c.get("loadingOverlayVisible"))),
        ib = new sX,
        fb = new BZ(xb),
        mb = new eZ((bb => {
          xb.show(bb, bb.baf2ToastMs)
        })),
        Nb = new bj(Lb),
        Wb = new pk(Nb),
        Hb = new fE,
        Ib = new ck,
        Fb = new aY,
        hb = new Yj({
          read: () => !1 !== vZ.f.getItem(PZ),
          write: bb => {
            vZ.f.setItem(PZ, bb)
          }
        }),
        qb = new Gj(hb),
        ub = new uj(hb),
        rb = new TR(hb, (bb => function(bb, ab) {
          const Ub = nY(ab.w, ab.h, ab.d),
            Ab = new Uint8Array(Ub);
          for (let Mb = 0; Mb < Ub; Mb++) {
            const Ub = Hj(bb, nU(ab, UA(ab, Mb)));
            Ab[Mb] = null === Ub ? 0 : VY(Ub)
          }
          return Ab
        }(kb, bb)), cj(yb)),
        Kb = new ER(hb, cj(yb)),
        ob = new AR,
        lb = (bb, ab) => {
          let [Ub, Ab, Mb] = bb;
          ob.answered(ab) || xb.show({
            baf2ToastText: [(0, Gb.Od)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: Ub,
                h: Ab,
                d: Mb
              }
            }, Gb.E.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      rb.onSizeNotTaken(lb), Kb.onSizeNotTaken(lb);
      const sb = new vR,
        gb = new wR(hb),
        Cb = new gR,
        Ob = new Ak(Cb),
        cb = new jk,
        Jb = new Nk,
        Sb = new uk(Jb),
        ba = new Ok(Jb),
        aa = Jb.lookSource(),
        Ua = new vy({
          handles: bb => aa.handles(bb) || bb === Qb,
          line: (bb, ab) => bb === Qb ? function(bb, ab, Ub) {
            var Ab;
            const Mb = wb(null === (Ab = ab.at(Ub)) || void 0 === Ab ? void 0 : Ab.item);
            return null === Mb ? {
              key: `${Yy}lookFarmEmpty`
            } : {
              key: bb.blockIdToBlockName(bb.getBlockId(Ub[0], Ub[1], Ub[2])).endsWith("|Running") ? `${Yy}lookFarmRunning` : `${Yy}lookFarmWaiting`,
              keys: {
                mob: tb(Mb)
              }
            }
          }(kb, Nb, ab) : aa.line(bb, ab),
          version: () => aa.version() + Nb.version()
        }, (bb => Kj(hb.all(), bb, (bb => Hj(kb, bb)))), (() => zb.get().tier)),
        Aa = new WR,
        Ma = new fy,
        Ta = new Iy,
        Ea = Iy.blade(),
        Ya = new ry,
        Ba = new VX,
        ea = new wy,
        va = new Gy,
        Pa = new hy;
      let Xa = -1 / 0,
        ja = 0,
        Ra = -1 / 0,
        ka = -1 / 0;
      const ya = () => {
          yb.send("baf2islandsclose"), ka = Date.now()
        },
        Za = [];

      function Da(bb) {
        var ab, Ub, Ab, Mb, Tb, Eb, Bb;
        "core" === (null === (ab = Yb.get()) || void 0 === ab ? void 0 : ab.kind) && "core" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && yb.send("baf2coreclose"), "power" === (null === (Ub = Yb.get()) || void 0 === Ub ? void 0 : Ub.kind) && "power" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && yb.send("baf2powerclose"), "water" === (null === (Ab = Yb.get()) || void 0 === Ab ? void 0 : Ab.kind) && "water" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && yb.send(nb.p), "terminal" === (null === (Mb = Yb.get()) || void 0 === Mb ? void 0 : Mb.kind) && "terminal" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && yb.send("baf2terminalclose"), "islands" === (null === (Tb = Yb.get()) || void 0 === Tb ? void 0 : Tb.kind) && "islands" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && ya();
        const eb = Jb.getStatus();
        "collider" === (null === (Eb = Yb.get()) || void 0 === Eb ? void 0 : Eb.kind) && "collider" !== (null === bb || void 0 === bb ? void 0 : bb.kind) && eb && yb.send(QB(eb, "close"));
        const vb = bb => "reactor" === bb || "battery" === bb;
        if (vb(null === (Bb = Yb.get()) || void 0 === Bb ? void 0 : Bb.kind) && !vb(null === bb || void 0 === bb ? void 0 : bb.kind)) {
          var Lb, Pb, Xb;
          const bb = "reactor" === (null === (Lb = Yb.get()) || void 0 === Lb ? void 0 : Lb.kind) ? null === (Pb = rb.get()) || void 0 === Pb ? void 0 : Pb.status.baf2RxAt : null === (Xb = Kb.get()) || void 0 === Xb ? void 0 : Xb.status.baf2BatAt;
          bb && yb.send(La(bb, "close"))
        }
        "quests" === (null === bb || void 0 === bb ? void 0 : bb.kind) && Zb(), Yb.set(bb), null === bb && ib.release()
      }

      function za() {
        (0, ZM.g)(), Da(null)
      }
      let xa = new Set,
        ia = !1;
      const fa = {
        onCreate: bb => {
          kb = bb, kb.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const ab of Wa) {
            const bb = Ga[ab].inputSlots ? dY(Eb) : WY(ab, Eb, Hb, yb);
            Za.push((0, kM.f)(ab, bb))
          }
          Za.push((0, ZM.w)((0, Ab.createElement)(Ab.Fragment, null, (0, Ab.createElement)(LX, {
            controller: Xb
          }), (0, Ab.createElement)(Aj, {
            store: Nb
          }), (0, Ab.createElement)(Py, {
            store: Ua
          }), (0, Ab.createElement)(uX, {
            store: zb
          }), (0, Ab.createElement)(tX, {
            store: xb
          }), (0, Ab.createElement)(gX, {
            store: ib
          }), (0, Ab.createElement)(cX, {
            store: Ba
          }), (0, Ab.createElement)(eR, {
            store: sb
          }), (0, Ab.createElement)(CR, {
            store: Cb
          })), {
            content: (0, Ab.createElement)(nP, {
              commands: yb,
              store: Yb,
              power: Hb,
              water: Fb,
              reactor: rb,
              battery: Kb,
              collider: Jb,
              terminal: Ib,
              quests: zb,
              close: ZM.i,
              leave: () => {
                ib.dropHeld(), (0, ZM.g)()
              },
              askIslands: () => {
                ka = -1 / 0, Xa = Date.now(), ja = yb.send(Vb)
              },
              openSocial: () => {
                (0, ZM.g)(), DM.c.set({
                  openEverythingMenuName: LU.j.SOCIAL
                })
              },
              showCore: bb => {
                Da({
                  kind: "core",
                  core: bb
                }), yb.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Da(null)
            }
          })), Za.push((0, yM.u)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Da({
                kind: "quests"
              }), (0, ZM.o)()
            }
          })), Za.push(MZ(yb, zb, xb)), ia = !1, Za.push(fT((() => {
            null !== cy && ny(cy)
          }))), Za.push(Sy()), Za.push(function() {
            const bb = hM.m.subscribe(QM, nM),
              ab = () => {
                if (JM) {
                  const bb = JM;
                  JM = null, (0, GM.w)(bb)
                }
              },
              Ub = hM.m.subscribe("toggleMenu", (bb => {
                "inventory" === (null === bb || void 0 === bb ? void 0 : bb.split("|")[0]) && ab()
              })),
              Ab = hM.m.subscribe("appManagerUpdated|openInGameMenuName", (bb => {
                "inventory" === bb && ab()
              }));
            return () => {
              hM.m.unsubscribe(bb), hM.m.unsubscribe(Ub), hM.m.unsubscribe(Ab)
            }
          }()), Za.push(function(bb) {
            const ab = Vy(bb),
              Ub = hM.m.subscribe(QM, (bb => {
                Cy.follow(bb, ab)
              }));
            return () => {
              hM.m.unsubscribe(Ub), Cy.clear()
            }
          }(kb)), Za.push(function() {
            const bb = document.documentElement,
              ab = (0, IX.e)(".InvenBodyRight", [], (() => {
                const ab = document.querySelector(".InvenBodyRight");
                ab && bb.style.setProperty("--baf2-backpack-width", `${ab.offsetWidth}px`)
              }));
            return () => {
              ab(), bb.style.removeProperty("--baf2-backpack-width")
            }
          }()), Za.push(function() {
            const bb = document.documentElement;
            return bb.classList.add(sy), () => {
              bb.classList.remove(sy)
            }
          }()), Za.push((() => {
            vb.dispose(), eb.dispose()
          })), Rb.start(kb), Za.push((() => {
            Rb.dispose(), Ya.dispose(), Wb.dispose()
          }))
        },
        onClose: () => {
          (0, GM.w)([]), JM = null, cM = new Set, cy = null, (0, GM.s)(new Map), XZ.clear();
          for (const bb of Za) bb();
          zb.dispose(), Ua.dispose(), xb.dispose(), ib.dispose(), Aa.dispose(), Ma.dispose(kb), qb.dispose(kb), ub.dispose(kb), gb.dispose(kb), Ob.dispose(kb), Cb.dispose(), cb.dispose(), hb.dispose(), rb.dispose(), Kb.dispose(), sb.dispose(), Ta.dispose(), Ea.dispose(), Ba.dispose(), Sb.dispose(kb), ba.dispose(kb), Jb.dispose(), ea.dispose(), yb.clear()
        },
        onAfterRender: (bb, ab) => {
          var Ub, Ab, Mb;
          try {
            Rb.onAfterRender(ab)
          } catch (eb) {
            console.error("Error drawing BAF2 belt items", eb)
          }
          try {
            Ya.onAfterRender(kb, Tb)
          } catch (eb) {
            console.error("Error drawing BAF2 jet flames", eb)
          }
          ia || (ia = !0, yb.send("baf2clientready"));
          const Eb = kb.getPositionView(Tb);
          Xb.onAfterRender(ab, Eb, Pb), Nb.onAfterRender(ab, Eb, Pb, jb), vb.run(Pb), Aa.onAfterRender(kb, Eb), Ma.onAfterRender(kb, Eb), Wb.onAfterRender(kb, Eb), qb.onAfterRender(kb, Eb), ub.onAfterRender(kb, Tb, Eb), gb.onAfterRender(kb, Tb, Eb), Ob.onAfterRender(kb, Tb), cb.onAfterRender(kb, Eb), zb.onPlayerY(Eb[1]), Sb.onAfterRender(kb), ba.onAfterRender(kb, Tb, Eb);
          const Bb = kb.getTargetedBlock();
          Ua.onAfterRender(kb, Tb, null !== (Ub = null === Bb || void 0 === Bb ? void 0 : Bb.xV) && void 0 !== Ub ? Ub : 0, null !== (Ab = null === Bb || void 0 === Bb ? void 0 : Bb.position) && void 0 !== Ab ? Ab : null), ea.onAfterRender(kb, ab), mb.onMining(function(bb, ab) {
            var Ub, Ab;
            const Mb = bb.getMiningBlock();
            if (!Mb) return null;
            const Tb = (0, db.e)(bb.getBlockId(Mb[0], Mb[1], Mb[2])),
              Eb = null !== (Ub = null === (Ab = bb.vab(ab)) || void 0 === Ab ? void 0 : Ab.name) && void 0 !== Ub ? Ub : null,
              Yb = bb.getItemStat(ab, Tb.split("|")[0], "harvestLevel");
            return {
              block: Tb,
              x: Mb[0],
              y: Mb[1],
              z: Mb[2],
              PY: Eb,
              level: Yb
            }
          }(kb, Tb), kb.isMining(), performance.now()), "dropMap" === (null === (Mb = Yb.get()) || void 0 === Mb ? void 0 : Mb.kind) && uA(Eb[1]) && za()
        },
        onPlayerChangeBlock: (bb, ab, Ub, Ab, Mb, Eb) => {
          bb === Tb && function(bb, ab, Ub, Ab, Mb, Tb, Eb) {
            const Yb = Fy(Tb, Eb, bb.isPlayerCrouching(ab));
            if (null === Yb) return;
            if (bb.Qp(Ub, Ab, Mb, Yb), !bb.getClientOption(ab, "canPickUpItems")) return;
            const Bb = EU[Yb.split("|")[0]];
            var eb, vb, Lb;
            void 0 !== Bb && (eb = bb.getInventoryItems(), vb = Bb, Lb = Bj.c.maxItemStackSize, bb.getInventoryFreeSlotCount(ab) > 0 || eb.some((bb => null !== bb && bb.name === vb && null !== bb.amount && bb.amount < Lb))) && bb.playSound(ab, (0, EZ.e)("pickUp"), .5, 1)
          }(kb, bb, ab, Ub, Ab, Mb, Eb)
        },
        onPlayerAltAction: (bb, ab, Ub, Ab, Mb) => {
          var Eb, Yb;
          if (!kb.getClientOption(Tb, "canPickUpItems")) return;
          const Bb = null !== (Eb = null === (Yb = kb.vab(Tb)) || void 0 === Yb ? void 0 : Yb.name) && void 0 !== Eb ? Eb : null,
            eb = function(bb, ab) {
              const Ub = bb.split("|")[0];
              return pb(Ub) && ab !== YM && "Sky Pack" !== ab ? Ub : null
            }(Mb, Bb);
          if (null !== eb) return void(va.tap(eb, performance.now()) && Oy(kb, Tb, eb, zb));
          if (!lA(Bb)) return;
          const vb = Pa.isNewPress(performance.now()),
            Lb = function(bb, ab, Ub) {
              return !lA(ab) || Ub ? null : JA(bb)
            }(Mb, Bb, kb.isPlayerCrouching(Tb));
          null !== Lb && vb && kb.Qp(ab, Ub, Ab, Lb)
        },
        onPlayerAttemptAltAction: (bb, ab, Ub, Ab, Mb) => {
          if (function(bb, ab, Ub, Ab, Mb) {
              "Workbench" === Ab.split("|")[0] && bb.getClientOption(Ub, "canCraft") && (Cy.open("Workbench", Mb.get(), Vy(bb)), ab.send("baf2station Workbench"))
            }(kb, yb, Tb, Mb, zb), TZ(kb, Tb, Mb)) return "preventAction";
          fb.onAltAction(kb, Tb, Mb)
        },
        onReceivedMessageFromServer: (bb, ab) => {
          if ("baf2MachineStatus" === bb) {
            var Ub, Ab, Mb, eb, vb, Lb, Pb, jb, Zb, fb, mb, pb, Wb, db, Gb, Qb;
            const bb = ab,
              Tb = bb.baf2MachineTaught;
            Eb.set(bb.baf2MachinePos, {
              status: bb.baf2MachineStatus,
              power: null !== (Ub = bb.baf2MachinePower) && void 0 !== Ub ? Ub : null,
              opLeftMs: null !== (Ab = bb.baf2MachineOpLeftMs) && void 0 !== Ab ? Ab : null,
              dug: bb.baf2MachineYield ? {
                item: bb.baf2MachineYield,
                name: Db([bb.baf2MachineYield])[bb.baf2MachineYield]
              } : null,
              powerCap: null !== (Mb = bb.baf2MachinePowerCap) && void 0 !== Mb ? Mb : null,
              powerRates: null !== (eb = bb.baf2MachinePowerRates) && void 0 !== eb ? eb : null,
              coupled: !0 === bb.baf2MachineCoupled,
              couplerLevel: null !== (vb = bb.baf2MachineCoupler) && void 0 !== vb ? vb : 1,
              taught: Tb,
              taughtName: Tb ? Db([Tb])[Tb] : null,
              tier: null !== (Lb = bb.baf2MachineTier) && void 0 !== Lb ? Lb : null,
              input: null !== (Pb = bb.baf2MachineInput) && void 0 !== Pb ? Pb : null,
              inertCoupler: null !== (jb = bb.baf2MachineInertCoupler) && void 0 !== jb ? jb : null,
              inputShort: null !== (Zb = bb.baf2MachineInputShort) && void 0 !== Zb ? Zb : null,
              field: null !== (fb = bb.baf2MachineField) && void 0 !== fb ? fb : null,
              noSeeds: !0 === bb.baf2MachineNoSeeds,
              fuelFed: !0 === bb.baf2MachineFuelFed,
              fuelFeeds: !0 === bb.baf2MachineFuelFeeds,
              coreFull: !0 === bb.baf2MachineCoreFull,
              waterUnpowered: !0 === bb.baf2MachineWaterUnpowered,
              powerShort: !0 === bb.baf2MachinePowerShort,
              powerWait: !0 === bb.baf2MachinePowerWait,
              reactorPowered: !0 === bb.baf2MachineReactorPowered,
              fuelLeftMs: null !== (mb = bb.baf2MachineFuelLeftMs) && void 0 !== mb ? mb : null,
              burning: null !== (pb = bb.baf2MachineBurning) && void 0 !== pb ? pb : null,
              fuelKeep: null !== (Wb = bb.baf2MachineFuelKeep) && void 0 !== Wb ? Wb : null,
              water: null !== (db = bb.baf2MachineWater) && void 0 !== db ? db : null,
              farm: null !== (Gb = bb.baf2MachineFarm) && void 0 !== Gb ? Gb : null,
              cryo: null !== (Qb = bb.baf2MachineCryo) && void 0 !== Qb ? Qb : null
            })
          } else if ("baf2StationOpen" === bb) {
            const bb = ab.baf2Station;
            va.consumeServerOpen(bb, performance.now()) || Oy(kb, Tb, bb, zb)
          } else if ("baf2Power" === bb) {
            const bb = ab;
            Hb.set(bb), bb.baf2PowerOpen && (Da({
              kind: "power"
            }), (0, ZM.o)())
          } else if (bb === nb.s) {
            const bb = ab;
            Fb.set(bb), bb.baf2WaterOpen && (Da({
              kind: "water"
            }), (0, ZM.o)())
          } else if ("baf2RxPlans" === bb) {
            var qb, ub, lb;
            const bb = ab;
            hb.ZZ(bb);
            const Ub = new Set(bb.baf2RxPlanList.map((bb => {
              let [ab, Ub, Ab] = bb;
              return `${ab},${Ub},${Ab}`
            })));
            sb.retain(Ub);
            const Ab = null === (qb = Yb.get()) || void 0 === qb ? void 0 : qb.kind,
              Mb = "reactor" === Ab ? null === (ub = rb.get()) || void 0 === ub ? void 0 : ub.status.baf2RxAt : "battery" === Ab ? null === (lb = Kb.get()) || void 0 === lb ? void 0 : lb.status.baf2BatAt : void 0;
            Mb && xa.has(Mb.join(",")) && !Ub.has(Mb.join(",")) && za(), xa = Ub
          } else if ("baf2RxStatus" === bb) {
            const bb = ab;
            rb.set(bb), bb.baf2RxOpen && (Da({
              kind: "reactor"
            }), (0, ZM.o)())
          } else if ("baf2BatStatus" === bb) {
            const bb = ab;
            Kb.set(bb), bb.baf2BatOpen && (Da({
              kind: "battery"
            }), (0, ZM.o)())
          } else if ("baf2RxAlarm" === bb) sb.ZZ(ab);
          else if ("baf2Bomb" === bb) Cb.ZZ(ab, kb.getPositionView(Tb));
          else if ("baf2Fallout" === bb) cb.ZZ(ab);
          else if ("baf2ColBeams" === bb) Jb.onBeams(ab);
          else if ("baf2ColStatus" === bb) {
            const bb = ab;
            var tb, wb;
            if (Jb.onStatus(bb), bb.baf2ColOpen) Jb.onOpen(null !== (tb = null === (wb = kb.vab(Tb)) || void 0 === wb ? void 0 : wb.name) && void 0 !== tb ? tb : null), Da({
              kind: "collider"
            }), (0, ZM.o)()
          } else if ("baf2Terminal" === bb) {
            const bb = ab;
            var gb;
            if (Ib.apply(bb)) bb.baf2TermReset && (Da({
              kind: "terminal"
            }), (0, ZM.o)());
            else "terminal" === (null === (gb = Yb.get()) || void 0 === gb ? void 0 : gb.kind) && (Yb.set(null), (0, ZM.g)())
          } else if ("baf2Core" === bb) {
            var Ob;
            const bb = ab;
            if (Bb(!0 === bb.baf2CoreNuclear), function(bb, ab) {
                return "core" === (null === bb || void 0 === bb ? void 0 : bb.kind) && ab.baf2CoreTier > bb.core.message.baf2CoreTier
              }(Yb.get(), bb)) return void(0, ZM.g)();
            if (bb.baf2CoreRefresh && "core" !== (null === (Ob = Yb.get()) || void 0 === Ob ? void 0 : Ob.kind)) return;
            Da({
              kind: "core",
              core: LZ(bb, Db)
            }), bb.baf2CoreRefresh || (0, ZM.o)()
          } else if ("baf2WrenchUndo" === bb) {
            const {
              baf2WrenchPos: bb,
              baf2WrenchBlock: Ub
            } = ab;
            kb.Qp(bb[0], bb[1], bb[2], Ub)
          } else if ("baf2Toast" === bb) {
            const bb = ab;
            ob.heard(performance.now(), bb.baf2ToastMs), xb.show(bb)
          } else if ("baf2Area" === bb) ib.arrive(ab, null !== Yb.get());
          else if ("baf2Quest" === bb) {
            const bb = ab;
            Bb(!0 === bb.baf2QuestNuclear), zb.set(bb, function(bb, ab) {
              var Ub, Ab, Mb, Tb, Eb;
              const Yb = [];
              for (const [, , vb, , , , , , Lb, Pb] of bb.baf2QuestSteps) null !== vb && Yb.push(vb), Yb.push(...null !== Lb && void 0 !== Lb ? Lb : [], ...null !== Pb && void 0 !== Pb ? Pb : []);
              bb.baf2QuestReward && Yb.push(bb.baf2QuestReward);
              const Bb = null === (Ub = bb.baf2QuestSide) || void 0 === Ub ? void 0 : Ub[2][2];
              Bb && Yb.push(Bb), Yb.push(...null !== (Ab = null === (Mb = bb.baf2QuestSide) || void 0 === Mb ? void 0 : Mb[2][8]) && void 0 !== Ab ? Ab : [], ...null !== (Tb = null === (Eb = bb.baf2QuestSide) || void 0 === Eb ? void 0 : Eb[2][9]) && void 0 !== Tb ? Tb : []);
              for (const [vb] of null !== (eb = bb.baf2QuestAlso) && void 0 !== eb ? eb : []) {
                var eb;
                Yb.push(vb)
              }
              return ab(Yb)
            }(bb, Db)), ny(bb.baf2QuestTier)
          } else if ("baf2Route" === bb) ! function(bb, ab) {
            let {
              baf2RouteCells: Ub,
              baf2RouteInto: Ab
            } = ab;
            0 !== Ub.length && Ab ? bb.setRouteChevrons({
              cells: Ub.map(((bb, ab) => {
                const [Mb, , Tb] = function(bb, ab, Ub) {
                  const Ab = Ub + 1 < bb.length ? bb[Ub + 1] : ab;
                  return [Ab[0] - bb[Ub][0], 0, Ab[2] - bb[Ub][2]]
                }(Ub, Ab, ab);
                return {
                  pos: bb,
                  way: [Mb, Tb]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : bb.setRouteChevrons(null)
          }(kb, ab);
          else if ("baf2QuestBook" === bb) zb.setBook(ab);
          else if ("baf2Stalls" === bb) Xb.set(ab.baf2StallCells);
          else if (bb === RU.k) Rb.onMoves(ab);
          else if (bb === RU.f) Rb.onLines(ab);
          else if ("baf2Labels" === bb) Nb.ZZ(ab);
          else if ("baf2DropMap" === bb) Da({
            kind: "dropMap",
            dropMap: ab
          }), (0, ZM.o)();
          else if ("baf2Islands" === bb) {
            var Sb, ba;
            const bb = ab;
            if (yb.syncIslandEdits(bb.baf2IslandsAnswered), !bb.baf2IslandsOpen && "islands" !== (null === (Sb = Yb.get()) || void 0 === Sb ? void 0 : Sb.kind)) return;
            if (bb.baf2IslandsOpen) {
              var aa, Ua;
              const ab = DM.c.get("openEverythingMenuName"),
                Ub = yb.sent() >= ja,
                Ab = "other" !== (Za = {
                  askedAtMs: Xa,
                  askSent: Ub,
                  reaskedAtMs: Ra,
                  nowMs: Date.now(),
                  panel: null !== (aa = null === (Ua = Yb.get()) || void 0 === Ua ? void 0 : Ua.kind) && void 0 !== aa ? aa : null,
                  inGameMenu: DM.c.get("openInGameMenuName"),
                  everythingMenu: null === ab ? null : ab === LU.j.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== bb.baf2IslandsFocusInvite
                }).everythingMenu && (!!Za.focusInvite || "islands" === Za.panel && "clientGame" === Za.inGameMenu || !(Za.nowMs - Za.reaskedAtMs < de) && (Za.askSent && Za.nowMs - Za.askedAtMs < de ? "core" === Za.panel && "clientGame" === Za.inGameMenu && null === Za.everythingMenu : "shop" === Za.everythingMenu || null === Za.inGameMenu));
              if (Ub && (Xa = -1 / 0), Ra = -1 / 0, !Ab) return void ya()
            }
            const Ub = (Ma = bb.baf2IslandsOpen, ea = "islands" === (null === (ba = Yb.get()) || void 0 === ba ? void 0 : ba.kind), La = ka, Pa = Date.now(), Ma && !ea && Pa - La < de);
            Da({
              kind: "islands",
              islands: bb,
              arrivedAtMs: Date.now(),
              backToCore: Fe(Yb.get())
            }), Ub && (ka = -1 / 0, Ra = Date.now(), yb.send(Vb)), bb.baf2IslandsOpen && ("clientGame" !== DM.c.get("openInGameMenuName") && (0, zM.e)(), (0, ZM.o)())
          } else if ("baf2CoopTransfer" === bb) {
            var Aa;
            const bb = ab;
            bb.baf2TransferOn ? (Da({
              kind: "transfer",
              transfer: bb,
              arrivedAtMs: Date.now()
            }), (0, ZM.o)()) : "transfer" === (null === (Aa = Yb.get()) || void 0 === Aa ? void 0 : Aa.kind) && (0, ZM.g)()
          } else "baf2IslandLeft" === bb ? (ib.dropHeld(), null !== Yb.get() && za(), "inventory" === DM.c.get("openInGameMenuName") && (0, zM.e)()) : "baf2Arc" === bb ? Ta.ZZ(kb, ab) : "baf2Blade" === bb ? Ea.onBlade(kb, ab) : "baf2JetFlame" === bb ? Ya.ZZ(kb, ab) : "baf2GearPower" === bb && Ba.ZZ(ab);
          var Ma, ea, La, Pa, Za
        }
      };
      return fa
    }
  },
  37843: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub) {
      const Ab = new Set,
        Mb = new ResizeObserver(Ub),
        Tb = () => {
          const ab = new Set(document.querySelectorAll(bb));
          let Tb = !1;
          for (const bb of Ab) ab.has(bb) || (Mb.unobserve(bb), Ab.delete(bb), Tb = !0);
          for (const bb of ab) Ab.has(bb) || (Mb.observe(bb), Eb.observe(bb, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Ab.add(bb));
          Tb && Ub()
        },
        Eb = new MutationObserver((ab => {
          ab.some((bb => "attributes" === bb.type)) && Ub(), ab.some((ab => function(bb, ab, Ub) {
            if ("childList" !== bb.type) return !1;
            for (const Ab of bb.addedNodes)
              if (Ab instanceof Element && (Ab.matches(ab) || Ab.querySelector(ab))) return !0;
            for (const Ab of bb.removedNodes)
              if (Ab instanceof Element)
                for (const bb of Ub)
                  if (Ab.contains(bb)) return !0;
            return !1
          }(ab, bb, Ab))) && Tb()
        }));
      Eb.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Yb of ab) Mb.observe(Yb);
      return window.addEventListener("resize", Ub), Tb(), Ub(), () => {
        Mb.disconnect(), Eb.disconnect(), window.removeEventListener("resize", Ub)
      }
    }
    Ub.d(ab, {
      e: () => Ab
    })
  },
  37827: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      e: () => Tb
    });
    const Ab = new WeakMap;

    function Mb(bb) {
      let ab = Ab.get(bb);
      return ab || (ab = {
        hidden: bb.hidden,
        x: NaN,
        y: NaN
      }, Ab.set(bb, ab)), ab
    }

    function Tb(bb, ab) {
      const Ub = Mb(bb);
      Ub.hidden !== ab && (Ub.hidden = ab, bb.hidden = ab)
    }

    function Eb(bb, ab, Ub) {
      const Ab = Mb(bb);
      Ab.x === ab && Ab.y === Ub || (Ab.x = ab, Ab.y = Ub, bb.style.translate = `${ab}vw ${Ub}vh`)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);