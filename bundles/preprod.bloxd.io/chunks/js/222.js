export const id = 222;
export const ids = [222];
export const modules = {
  37179: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(37188);
    const hy = [0, 0, 0];
    class fy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hy;
        this.pool = yb, this.origin = bb, this.count = 0, this.free = []
      }
      take() {
        var yb;
        const bb = null !== (yb = this.free.pop()) && void 0 !== yb ? yb : this.count++;
        return bb >= this.pool.Hy && this.pool.grow(Math.max(2 * this.pool.Hy, bb + 1)), this.hide(bb), bb
      }
      release(yb) {
        this.hide(yb), this.free.push(yb)
      }
      write(yb, bb, Wy, hy) {
        const {
          records: fy
        } = this.pool, {
          origin: Zy
        } = this, cb = yb * Uy.d;
        fy[cb] = bb - Zy[0], fy[cb + 1] = Wy - Zy[1], fy[cb + 2] = hy - Zy[2], fy[cb + Uy.h] = 0, this.pool.markDirty(yb)
      }
      hide(yb) {
        this.pool.records[yb * Uy.d + Uy.h] = 1, this.pool.markDirty(yb)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Zy {
      constructor(yb, bb, Wy) {
        this.api = yb, this.model = bb, this.initialCapacity = Wy, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(yb) {
        let bb = this.kinds.get(yb);
        if (void 0 === bb) {
          const Wy = this.api.createInstancePool({
            ...this.model,
            item: yb
          }, this.initialCapacity);
          null === Wy || void 0 === Wy || Wy.setOrigin(this.origin[0], this.origin[1], this.origin[2]), bb = Wy && new fy(Wy, this.origin), this.kinds.set(yb, bb)
        }
        return bb
      }
      follow(yb) {
        const {
          origin: bb
        } = this;
        if (Math.abs(yb[0] - bb[0]) <= 512 && Math.abs(yb[1] - bb[1]) <= 512 && Math.abs(yb[2] - bb[2]) <= 512) return !1;
        bb[0] = Math.floor(yb[0]), bb[1] = Math.floor(yb[1]), bb[2] = Math.floor(yb[2]);
        for (const Wy of this.kinds.values()) null === Wy || void 0 === Wy || Wy.pool.setOrigin(bb[0], bb[1], bb[2]);
        return !0
      }
      commit() {
        for (const yb of this.kinds.values()) null === yb || void 0 === yb || yb.commit()
      }
      dispose() {
        for (const yb of this.kinds.values()) null === yb || void 0 === yb || yb.dispose();
        this.kinds.clear()
      }
    }
  },
  37200: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      g: () => cb,
      i: () => Py
    });
    const Uy = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      hy = [0, 1, 2, 0, 2, 3],
      fy = [4, 5];

    function Zy(yb, bb, Wy, Uy, hy) {
      for (let Zy = 0; Zy < 6; Zy++) fy.includes(Zy) === hy && oy(yb, bb, Wy, Uy, Zy)
    }

    function cb(yb, bb, Wy, Uy) {
      for (let hy = 0; hy < 6; hy++) oy(yb, bb, Wy, Uy, hy)
    }

    function Py(yb, bb, Wy, fy, Zy) {
      for (let cb = 0; cb < 6; cb++)
        for (const Py of [0, 1]) {
          const [oy, By, Ky] = [Py + 2, Py + 1, (Py + 3) % 4], ey = yb.length / 3;
          for (const [bb, hy] of [
              [Py, By],
              [oy, By],
              [oy, Ky],
              [Py, Ky]
            ])
            for (let Py = 0; Py < 3; Py++) {
              const oy = Uy[3 * (4 * cb + bb) + Py],
                By = Uy[3 * (4 * cb + hy) + Py];
              yb.push((oy + (By - oy) * Zy) * fy / 2 + Wy[Py])
            }
          for (const yb of hy) bb.push(ey + yb)
        }
    }

    function oy(yb, bb, Wy, fy, Zy) {
      let [cb, Py, oy] = Wy, [By, Ky, ey] = fy;
      const qb = yb.length / 3;
      for (let hy = 4 * Zy; hy < 4 * Zy + 4; hy++) yb.push(Uy[3 * hy] * By / 2 + cb, Uy[3 * hy + 1] * Ky / 2 + Py, Uy[3 * hy + 2] * ey / 2 + oy);
      for (const Uy of hy) bb.push(qb + Uy)
    }
  },
  37172: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => cC
    });
    var Uy = Wy(55);
    const hy = [{
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
      fy = 10;
    let Zy = !0;

    function cb() {
      return Zy
    }

    function Py(yb) {
      Zy = yb
    }
    const oy = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function By() {
      return Zy ? hy.length : fy
    }

    function Ky(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = hy[yb - 1]) || void 0 === Wy ? void 0 : Wy.reactorTier) && void 0 !== bb ? bb : 0
    }

    function ey(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ky(yb) > 0;
      return Wy && !Zy ? "hidden" : yb <= bb ? "open" : Wy ? bb < 5 ? "hidden" : bb < fy ? "teaser" : "locked" : "locked"
    }

    function qb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Uy,
        n: hy
      } = Ey(yb);
      return {
        key: bb[Uy],
        params: {
          [Uy]: Wy ? String(hy) : hy
        }
      }
    }
    const sy = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Sy(yb, bb) {
      return Ky(yb) > 0 && bb < fy
    }

    function Ey(yb) {
      const bb = Ky(yb);
      if (bb > 0) return {
        kind: "atomic",
        n: bb,
        short: `A${bb}`
      };
      const Wy = function(yb) {
        return yb >= 6 && yb <= 10 ? yb - 6 + 1 : 0
      }(yb);
      return Wy > 0 ? {
        kind: "stage",
        n: Wy,
        short: `S${Wy}`
      } : {
        kind: "tier",
        n: yb,
        short: String(yb)
      }
    }

    function ly(yb) {
      return hy[Math.max(1, Math.min(yb, hy.length)) - 1]
    }

    function mb(yb, bb) {
      return yb < bb ? function(yb) {
        var bb;
        return null !== (bb = hy[yb]) && void 0 !== bb ? bb : null
      }(yb) : null
    }
    const Cy = "baf2coresubmit",
      Ty = "baf2corebankpause",
      Vy = "baf2coredeposit",
      Jy = "baf2corechargepause";

    function gb(yb) {
      var bb;
      return null !== (bb = yb.baf2CoreOpen) && void 0 !== bb ? bb : fy
    }
    const Gy = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function Oy(yb) {
      return Gy.includes(yb)
    }
    const Ry = (yb, bb) => bb.map((bb => [bb, [yb]])),
      vb = Object.fromEntries([...Ry("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Ry("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Ry("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Ry("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Ry("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Ry("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Ry("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Ry("Parts Bench", ["Focus Lens"]), ...Ry("Machine Bench", ["Laser", "Collider"]), ...Ry("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Ry("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Ry("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Ry("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Ry("Tool Bench", ["Mob Cage"]), ...Ry("Tool Bench", ["Pocket Terminal"]), ...Ry("Tool Bench", ["Comet Beacon"]), ...Ry("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function ib(yb) {
      var bb;
      return null !== (bb = vb[yb]) && void 0 !== bb ? bb : ["Workbench"]
    }

    function My(yb) {
      return ib(yb)[0]
    }
    hy.slice(1).map(((yb, bb) => `Core Tier ${bb+2}`));
    var Yy = Wy(8459);
    const Xy = ["on", "hud", "off"];

    function ny(yb) {
      return "on" === yb
    }
    var uy = Wy(258);
    const rb = "Mob Farm",
      Hy = {
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
      ab = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Fy = {
        1: 20,
        2: 60,
        3: 120
      },
      py = "baf2farmvoid",
      Ly = "Caged ",
      Qy = " Spawner Block";

    function jb(yb) {
      return `lifeform:${(0,uy.oe)(yb)}`
    }

    function Dy(yb) {
      if (!yb) return null;
      if (yb.startsWith(Ly)) {
        const bb = yb.slice(6);
        return ab.includes(bb) ? bb : null
      }
      if (yb.endsWith(Qy)) {
        const bb = yb.slice(0, -14);
        return void 0 !== Hy[bb] ? bb : null
      }
      return null
    }

    function tb(yb) {
      return !0 === yb.mobFarm
    }

    function wy(yb, bb) {
      return Fy[Hy[bb]] * yb.opMs / 1e3
    }
    const kb = new Map;
    const Ny = "baf2islands",
      zb = "baf2islandnew";

    function Iy(yb) {
      const bb = hy.findIndex((bb => bb.unlocks.includes(yb)));
      return bb < 0 ? 1 : bb + 1
    }

    function xb(yb) {
      return Math.floor(yb).toLocaleString("en-US")
    }
    var Ay = Wy(37116);
    const dy = "baf2terminaltake",
      yW = ["one", "stack", "fill"];

    function bW(yb, bb, Wy) {
      return `${dy} ${yb} ${bb} ${Wy}`
    }

    function Wb(yb) {
      const [bb, Wy, ...Uy] = yb.trim().split(" "), hy = Number(bb), fy = function(yb) {
        if (yW.includes(yb)) return yb;
        const bb = Number(yb);
        return /^\d+$/.test(yb) && Number.isSafeInteger(bb) && bb > 0 ? bb : null
      }(null !== Wy && void 0 !== Wy ? Wy : "");
      return !Number.isSafeInteger(hy) || hy <= 0 || null === fy || 0 === Uy.length ? null : {
        seq: hy,
        mode: fy,
        item: Uy.join(" ")
      }
    }
    const Ub = "baf2rx";

    function hb(yb, bb) {
      for (var Wy = arguments.length, Uy = new Array(Wy > 2 ? Wy - 2 : 0), hy = 2; hy < Wy; hy++) Uy[hy - 2] = arguments[hy];
      return [Ub, yb[0], yb[1], yb[2], bb, ...Uy].join(" ")
    }
    const fb = 2,
      Zb = 4,
      cW = 8,
      Pb = 16,
      ob = 32,
      Bb = 64,
      Kb = 128,
      eb = 256,
      qW = 512,
      sb = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Sb = [{
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
    const Eb = "Biomass",
      lb = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function mW(yb) {
      return {
        input: Eb,
        inputAmount: 1,
        output: yb,
        outputAmount: 1
      }
    }
    const Cb = "baf2synth",
      Tb = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Vb = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Jb = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      gW = function(yb, bb) {
        return {
          input: yb,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: bb,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Gb = function(yb, bb) {
        return {
          ...gW(yb, bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      Ob = Vb.map((yb => Gb(yb, "Biomass", 2))),
      Rb = {
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
          recipes: [gW("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), gW("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), gW("Raw Gold", "Gold Grit", 2), gW("Messy Stone", "Sand"), gW("Gravel", "Sand"), gW("Raw Voltite", "Voltite Dust", 2), gW("Moonstone", "Moonstone Dust", 4), gW("Wheat Seeds", "Fertiliser"), gW("Raw Uranium", "Uranium Grit", 2), Gb("Mossy Messy Stone", "Sand"), ...Ob],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [gW("Iron Grit", "Iron Bar"), gW("Copper Grit", "Copper Bar"), gW("Gold Grit", "Gold Bar"), gW("Raw Iron", "Iron Bar"), gW("Raw Copper", "Copper Bar"), gW("Raw Gold", "Gold Bar"), gW("Sand", "Glass"), gW("Messy Stone", "Stone"), ...uy.Mc.map((yb => gW(yb, "Charcoal", 1, 4))), gW("Wheat", "Bread", 1, 2), ...Vb.map(((yb, bb) => Gb(yb, Jb[bb])))],
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
          recipes: [gW("Iron Bar", "Iron Plate"), gW("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [gW("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [gW("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [gW("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), gW("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), gW("Raw Gold", "Gold Grit", 3), gW("Raw Voltite", "Voltite Dust", 3), gW("Messy Stone", "Sand", 2), gW("Gravel", "Sand", 2), gW("Moonstone", "Moonstone Dust", 6), gW("Raw Uranium", "Uranium Grit", 3), Gb("Mossy Messy Stone", "Sand", 2), ...Ob],
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
          table: sb
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [gW("Coal", "Diamond", 1, 24), gW("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Ay.i
      },
      vW = {
        Crusher: [gW("Spent Pellet", "Glow Dust"), gW("Wheat Seeds", "Biomass"), gW("Wheat", "Biomass"), gW("Dead Bush", "Biomass"), gW("Dusk Moss", "Biomass"), gW("Rotten Flesh", "Biomass"), gW("Bone", "Biomass", 2)],
        "Shatter Mill": [gW("Spent Pellet", "Glow Dust"), gW("Wheat Seeds", "Biomass"), gW("Wheat", "Biomass"), gW("Dead Bush", "Biomass"), gW("Dusk Moss", "Biomass"), gW("Rotten Flesh", "Biomass"), gW("Bone", "Biomass", 2), ...uy.Mc.map((yb => gW(yb, "Biomass")))],
        Smelter: [gW("Biomass", "Fertiliser", 2)],
        Press: [gW("Coal", "Graphite", 1, 4)]
      },
      iW = "Power Coupler",
      Mb = "Advanced Coupler",
      Yb = "Nova Coupler",
      Xb = [{
        item: iW,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Mb,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: Yb,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const nb = new Map;

    function ub(yb) {
      var bb, Wy;
      return null !== (bb = null !== (Wy = yb.fuelSlot) && void 0 !== Wy ? Wy : yb.couplerSlot) && void 0 !== bb ? bb : null
    }

    function rW(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!yb.couplable) throw new Error(`${yb.kind} takes no Power Coupler`);
      let Wy = nb.get(yb);
      Wy || (Wy = [], nb.set(yb, Wy));
      let Uy = Wy[bb];
      if (!Uy) {
        var hy;
        const {
          divisor: fy,
          powerPerS: Zy
        } = Xb[bb - 1], cb = yb.opMs / fy, Py = void 0 !== yb.fluidMade || void 0 !== yb.cryoMade ? yb.powerPerOp : Zy * cb / 1e3;
        Uy = {
          ...yb,
          fuelSlot: null,
          couplerSlot: null !== (hy = ub(yb)) && void 0 !== hy ? hy : void 0,
          opMs: cb,
          powerPerOp: Py,
          coupled: !0
        }, bb > 1 && (Uy = {
          ...Uy,
          couplerLevel: bb
        }), Wy[bb] = Uy
      }
      return Uy
    }
    const Hb = new Map;
    const aW = new Map;

    function Fb(yb, bb) {
      if (null === bb || (Wy = bb, !lb.includes(Wy))) return yb;
      var Wy;
      let Uy = aW.get(bb);
      return Uy || (Uy = {
        ...yb,
        recipes: [mW(bb)]
      }, aW.set(bb, Uy)), Uy
    }

    function pb(yb) {
      return !0 === yb.synth
    }
    const Lb = (yb, bb, Wy, Uy) => ({
        output: yb,
        outputAmount: bb,
        tier: Wy,
        inputs: Uy.map((yb => {
          let [bb, Wy] = yb;
          return {
            item: bb,
            amount: Wy
          }
        }))
      }),
      Qb = Object.fromEntries([Lb("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), Lb("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), Lb("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Lb("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), Lb("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), Lb("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), Lb("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), Lb("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), Lb("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), Lb("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), Lb("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), Lb("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), Lb("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), Lb("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), Lb("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Lb("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), Lb("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Lb("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), Lb("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Lb("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), Lb("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), Lb("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), Lb("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), Lb("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), Lb("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), Lb("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), Lb("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), Lb("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), Lb("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), Lb("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((yb => [yb.output, yb]))),
      jW = new Map;

    function Db(yb, bb) {
      let Wy = Rb[yb];
      if (bb.atomic && (Wy = function(yb) {
          const bb = vW[yb.kind];
          if (!bb) return yb;
          let Wy = Hb.get(yb.kind);
          if (!Wy) {
            const Uy = new Set(bb.map((yb => yb.input))),
              hy = yb.recipes.filter((yb => !Uy.has(yb.input)));
            Wy = {
              ...yb,
              recipes: [...hy, ...bb]
            }, Hb.set(yb.kind, Wy)
          }
          return Wy
        }(Wy)), Wy.synth) return Fb(Wy, bb.taught);
      if (bb.coupled && Wy.couplable) return rW(Wy, bb.level);
      const Uy = Wy.inputSlots && null !== bb.taught ? Qb[bb.taught] : void 0;
      if (!Uy) return Wy;
      const hy = `${yb}|${Uy.output}`;
      let fy = jW.get(hy);
      return fy || (fy = {
        ...Wy,
        bench: Uy
      }, jW.set(hy, fy)), fy
    }
    const tW = ["Diamond", "Moonstone"];

    function wb(yb) {
      return new Set(yb.flatMap((yb => yb.bonus ? [yb.output, yb.bonus.item] : [yb.output])).filter((yb => !tW.includes(yb))))
    }
    const kW = Object.values(Rb).flatMap((yb => yb.recipes));
    wb(kW.filter((yb => !0 !== yb.nuclear))), wb([...kW.filter((yb => !0 === yb.nuclear)), ...Object.values(vW).flat()]);

    function Nb(yb) {
      return null === yb.inputSlot && void 0 === yb.inputSlots && void 0 === yb.powerMade && void 0 === yb.fluidMade && !yb.treeCutter && void 0 === yb.table
    }

    function zW(yb) {
      return !0 === yb.treeCutter
    }
    const Ib = ["Voltite Cell"];

    function xW(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = yb.fuels) || void 0 === Wy ? void 0 : Wy.some((yb => Ib.includes(yb)))) && void 0 !== bb && bb
    }
    const Ab = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(uy.Mc.map((yb => [yb, 8e3]))),
        ...Object.fromEntries(uy.nd.map((yb => [yb, 2e3]))),
        "Voltite Cell": 12e4
      },
      db = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      yU = {
        "Uranium Deposit": 4e3
      };

    function bU(yb) {
      var bb;
      return null !== (bb = Object.keys(db).find((bb => db[bb] === yb))) && void 0 !== bb ? bb : null
    }

    function WW(yb) {
      return Tb.includes(yb)
    }

    function UW(yb) {
      return !0 !== yb.nuclear || cb()
    }
    var hW = Wy(248);
    var fW = Wy(8543),
      ZW = Wy(8475),
      cU = Wy(8551),
      PW = Wy(8534);
    const oW = "Reactor Controller",
      BW = "Reactor Port",
      KW = "Battery Cell",
      eW = ["fuel", "water", "waste"],
      qU = {
        fuel: BW,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      sW = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      SW = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      EW = "Reactor Frame",
      lW = "Reactor Glass",
      mU = {
        edge: [EW],
        cap: [lW, BW],
        wall: [lW, BW],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [oW]
      },
      CW = {
        edge: [KW],
        cap: [KW],
        wall: [KW],
        inside: [KW],
        ctrl: [KW]
      },
      TW = ["edge", "cap", "wall", "inside"],
      VW = ["Reactor Slag"];

    function JW(yb) {
      return VW.includes(gU(yb))
    }

    function gU(yb) {
      const bb = yb.indexOf("|");
      return bb < 0 ? yb : yb.slice(0, bb)
    }

    function GW(yb) {
      return gU(yb) === oW ? "reactor" : null
    }

    function OW(yb) {
      return gU(yb) !== BW ? null : yb.endsWith("|Water") ? "water" : yb.endsWith("|Waste") ? "waste" : "fuel"
    }

    function RW(yb) {
      const bb = OW(yb);
      return null === bb ? null : MW(qU[eW[(eW.indexOf(bb) + 1) % eW.length]], function(yb) {
        return yb.includes(vU)
      }(yb))
    }
    const vU = "|meta|rot1|Formed",
      iU = new Set([EW, lW, BW]);

    function MW(yb, bb) {
      var Wy;
      const Uy = gU(yb);
      if (!iU.has(Uy)) return yb;
      if (Uy !== BW) return bb ? Uy + vU : Uy;
      const hy = null !== (Wy = OW(yb)) && void 0 !== Wy ? Wy : "fuel";
      return bb ? "fuel" === hy ? Uy + vU : `${Uy}${vU}|${"water"===hy?"Water":"Waste"}` : qU[hy]
    }

    function YW(yb, bb) {
      const Wy = IW(yb, bb);
      if ("Air" === Wy) return !1;
      const Uy = "reactor" === yb ? mU : CW;
      return TW.some((yb => Uy[yb].includes(Wy))) || "reactor" === yb && VW.includes(Wy)
    }

    function XW(yb) {
      return SW[yb]
    }

    function nW(yb) {
      var bb;
      return null !== (bb = sW[yb]) && void 0 !== bb ? bb : sW[1]
    }

    function uW(yb) {
      const [bb, , Wy] = nW(yb);
      return [Wy, 0, -bb]
    }

    function rU(yb, bb, Wy, Uy, hy, fy) {
      return {
        ctrl: [yb[0], yb[1], yb[2]],
        rot: sW[bb] ? bb : 1,
        w: Wy,
        h: Uy,
        d: hy,
        cu: fy[0],
        cv: fy[1]
      }
    }

    function HW(yb, bb) {
      return "reactor" === yb ? [Math.floor((bb - 1) / 2), 0] : [0, 0]
    }

    function aU(yb, bb, Wy, Uy, hy) {
      let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yb.rot;
      if (Wy === yb.w && Uy === yb.h && hy === yb.d && fy === yb.rot) return yb;
      const [Zy] = HW(bb, yb.w);
      if (yb.cu === Zy && yb.cv <= 1) return rU(yb.ctrl, fy, Wy, Uy, hy, HW(bb, Wy));
      const cb = (yb, bb) => Math.max(1, Math.min(bb, yb));
      return rU(yb.ctrl, fy, Wy, Uy, hy, [cb(yb.cu, Wy - 2), 0 === yb.cv ? 0 : cb(yb.cv, Uy - 2)])
    }
    const FW = 11,
      pW = 2 * FW + 1;
    new Uint8Array(pW * pW * pW);

    function LW(yb) {
      return yb.w * yb.h * yb.d
    }

    function QW(yb) {
      const bb = uW(yb.rot);
      return [yb.ctrl[0] - bb[0] * yb.cu, yb.ctrl[1] - yb.cv, yb.ctrl[2] - bb[2] * yb.cu]
    }

    function jU(yb) {
      return yb.cv * yb.d * yb.w + yb.cu
    }

    function DW(yb, bb) {
      const Wy = bb % yb.w,
        Uy = Math.floor(bb / yb.w) % yb.d;
      return [Wy, Math.floor(bb / (yb.w * yb.d)), Uy]
    }

    function tU(yb, bb) {
      const [Wy, Uy, hy] = DW(yb, bb), fy = QW(yb), Zy = nW(yb.rot), cb = uW(yb.rot);
      return [fy[0] + cb[0] * Wy - Zy[0] * hy, fy[1] + Uy, fy[2] + cb[2] * Wy - Zy[2] * hy]
    }

    function wW(yb, bb) {
      const Wy = QW(yb),
        Uy = nW(yb.rot),
        hy = uW(yb.rot),
        fy = bb[0] - Wy[0],
        Zy = bb[2] - Wy[2],
        cb = fy * hy[0] + Zy * hy[2],
        Py = -(fy * Uy[0] + Zy * Uy[2]),
        oy = bb[1] - Wy[1];
      return cb < 0 || cb >= yb.w || oy < 0 || oy >= yb.h || Py < 0 || Py >= yb.d ? -1 : (oy * yb.d + Py) * yb.w + cb
    }

    function kU(yb, bb) {
      if (bb === jU(yb)) return "ctrl";
      const [Wy, Uy, hy] = DW(yb, bb), fy = 0 === Uy || Uy === yb.h - 1, Zy = Number(0 === Wy || Wy === yb.w - 1) + Number(fy) + Number(0 === hy || hy === yb.d - 1);
      return Zy >= 2 ? "edge" : 1 === Zy ? fy ? "cap" : "wall" : "inside"
    }

    function NW(yb, bb) {
      const [Wy, Uy, hy] = DW(yb, bb);
      return 0 === Wy || Wy === yb.w - 1 || 0 === Uy || Uy === yb.h - 1 || 0 === hy || hy === yb.d - 1 ? -1 : ((Uy - 1) * (yb.d - 2) + (hy - 1)) * (yb.w - 2) + (Wy - 1)
    }

    function zU(yb, bb) {
      const Wy = yb.w - 2,
        Uy = yb.d - 2,
        hy = bb % Wy + 1,
        fy = Math.floor(bb / Wy) % Uy + 1;
      return ((Math.floor(bb / (Wy * Uy)) + 1) * yb.d + fy) * yb.w + hy
    }

    function IW(yb, bb) {
      const Wy = gU(bb);
      return "reactor" === yb && Wy === oW ? EW : Wy
    }

    function xU(yb, bb, Wy) {
      const Uy = "ctrl" === bb ? gU(Wy) : IW(yb, Wy);
      return ("reactor" === yb ? mU : CW)[bb].includes(Uy) ? "ok" : "Air" === Uy ? "missing" : YW(yb, Wy) ? "wrong" : "blocked"
    }

    function AW(yb, bb) {
      return "battery" === yb ? KW : "inside" === bb ? null : function(yb, bb) {
        if ("inside" === bb || "ctrl" === bb || "battery" === yb) return null;
        return "edge" === bb ? EW : lW
      }(yb, bb)
    }
    const dW = {
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
      yh = "Collider",
      bh = "Laser",
      WU = "Star Alloy",
      UU = "Glow Dust",
      hU = [yh, "_Collider Focus"];

    function fU(yb) {
      return hU.indexOf(gU(yb))
    }

    function ZU(yb) {
      return gU(yb) === bh
    }

    function ch(yb) {
      return [
        [yb[0], yb[1], yb[2]],
        [yb[0], yb[1] + 1, yb[2]]
      ]
    }
    const PU = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function oU(yb, bb, Wy) {
      const Uy = PU[bb];
      return [yb[0] + Uy[0] * Wy, yb[1], yb[2] + Uy[2] * Wy]
    }

    function BU(yb, bb) {
      if (bb[1] !== yb[1]) return null;
      const Wy = bb[0] - yb[0],
        Uy = bb[2] - yb[2];
      if (0 !== Wy === (0 !== Uy)) return null;
      const hy = Math.abs(Wy + Uy);
      if (hy > dW.LASER_D) return null;
      return {
        dir: Uy < 0 ? 0 : Wy > 0 ? 1 : Uy > 0 ? 2 : 3,
        yb: hy
      }
    }

    function KU(yb, bb, Wy) {
      const Uy = bb => Math.abs(yb[0] - bb[0]) <= 1 && Math.abs(yb[1] - bb[1]) <= 1;
      return Uy(bb) || Uy(Wy)
    }

    function eU(yb, bb) {
      return function(yb, bb, Wy, Uy) {
        return [0, 1, 2, 3].map((hy => {
          for (let fy = 1; fy <= dW.LASER_D; fy++) {
            const Zy = oU(yb, hy, fy);
            if (KU([Zy[0], Zy[2]], bb, Wy) || !Uy(Zy)) return !1
          }
          return !0
        }))
      }(ch(yb)[1], bb.spawnXZ, bb.coreXZ, (yb => yb[1] >= fW.p && yb[1] < fW.p + fW.r && yb[0] >= bb.minXZ[0] && yb[0] <= bb.maxXZ[0] && yb[2] >= bb.minXZ[1] && yb[2] <= bb.maxXZ[1]))
    }
    const qh = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function sU(yb) {
      return Math.max(48 + 16 * yb, ly(yb).machineAllowance)
    }
    const SU = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function EU(yb) {
      const bb = yb.split("|")[0];
      return SU.includes(bb) ? "Solar Panel" : bb === cU.d ? "Fluid Pipe" : fU(bb) >= 0 ? "Collider" : (Wy = bb, qh.includes(Wy) ? bb : null);
      var Wy
    }
    const lU = "buildAFactory2Game:solarPanelDescription";
    const mh = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function CU(yb, bb) {
      var Wy;
      return null !== (Wy = mh.find((Wy => {
        var Uy;
        return (null !== (Uy = yb.level(Wy)) && void 0 !== Uy ? Uy : 0) >= bb
      }))) && void 0 !== Wy ? Wy : null
    }
    const TU = "buildAFactory2Game:";
    let VU = null;
    const JU = {
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
      gh = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      GU = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      OU = {
        "Loot Chest": `${TU}lookRuinChestName`
      };

    function RU(yb) {
      return "object" === typeof yb && null !== yb && "translationKey" in yb && "string" === typeof yb.translationKey ? yb.translationKey : null
    }

    function vh(yb, bb) {
      var Wy;
      return null !== (Wy = RU(yb.displayName(bb))) && void 0 !== Wy ? Wy : `item:${(0,uy.oe)(bb)}`
    }

    function ih(yb, bb) {
      var Wy, Uy, hy, fy;
      let Zy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb;
      if ("Solar Panel" === EU(bb)) return {
        name: RU(yb.displayName("Solar Panel")),
        detail: lU,
        detailItem: null
      };
      const Py = bb.endsWith(" Ore"),
        oy = (VU ??= new Set([...Object.keys((0, ZW.k)()), ...Object.keys((0, cU.t)())].map((yb => yb.split("|")[0]))), VU).has(bb),
        By = Py || oy ? null : function(yb) {
          var bb;
          return yb.endsWith(" Log") && !yb.startsWith("Barkless ") ? "lookLog" : yb.endsWith(" Sapling") ? "lookSapling" : yb.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (bb = JU[yb]) && void 0 !== bb ? bb : null
        }(bb);
      if (!yb.isBlock(bb) || !Py && !oy && null === By) return null;
      const Ky = null !== (Wy = null !== (Uy = OU[bb]) && void 0 !== Uy ? Uy : RU(null !== (hy = yb.displayName(Zy)) && void 0 !== hy ? hy : yb.displayName(bb))) && void 0 !== Wy ? Wy : `item:${(0,uy.oe)(bb)}`;
      if (null !== By) return {
        name: Ky,
        detail: `${TU}${By}`,
        detailItem: null
      };
      const ey = null !== (fy = gh[bb]) && void 0 !== fy ? fy : cb() ? GU[bb] : void 0;
      if (oy && void 0 !== ey) return {
        name: Ky,
        detail: `${TU}${ey}`,
        detailItem: null
      };
      const qb = db[bb];
      if (void 0 !== qb) return {
        name: Ky,
        detail: `${TU}lookDeposit`,
        detailItem: vh(yb, qb)
      };
      const sy = yb.harvestLevel(bb);
      if (Py && "rock" === yb.harvestType(bb) && 0 !== sy) {
        const bb = CU(yb, null !== sy && void 0 !== sy ? sy : 0);
        if (bb === mh[0]) return {
          name: Ky,
          detail: `${TU}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== bb) return {
          name: Ky,
          detail: `${TU}lookPickaxe`,
          detailItem: vh(yb, bb)
        }
      }
      return {
        name: Ky,
        detail: RU(yb.description(bb)),
        detailItem: null
      }
    }

    function MU(yb) {
      return yb < fW.p - 24
    }
    const YU = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const XU = "Wrench",
      nU = "Nova Wrench";

    function uU(yb) {
      return yb === XU || yb === nU
    }
    const rh = [...fW.D, "Belt Lift", "Belt Drop"];
    const HU = ["Belt Lift", "Belt Drop"],
      ah = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function FU(yb) {
      return yb.split("|")[0]
    }

    function pU(yb) {
      const bb = /\|rot(\d)/.exec(yb);
      return bb ? Number(bb[1]) : 1
    }

    function LU(yb) {
      return yb % 4 + 1
    }

    function QU(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === bb && "" === Wy ? yb : `${yb}|meta|rot${bb}${Wy}`
    }

    function jh(yb) {
      return FU(yb) === fW.x ? (0, fW.N)(yb) ? "gateRight" : "gateLeft" : (0, fW.V)(yb)
    }

    function DU(yb) {
      const bb = FU(yb),
        Wy = pU(yb);
      if (fW.D.includes(bb)) return (0, fW.G)(bb, LU(Wy), null);
      if (bb === fW.h) return (0, fW.X)(LU(Wy), (0, fW.R)(yb));
      if (bb === fW.A) {
        const Uy = ah[(0, fW.V)(yb)];
        return null === Uy ? QU(bb, LU(Wy)) : QU(bb, Wy, fW.B[Uy])
      }
      return bb === fW.x ? (0, fW.N)(yb) ? QU(bb, LU(Wy)) : QU(bb, Wy, fW.m) : PW.b.includes(bb) && !HU.includes(bb) || WW(bb) ? QU(bb, LU(Wy)) : null
    }

    function th(yb) {
      return PW.b.includes(yb) || WW(yb) || null !== EU(yb)
    }

    function wU(yb) {
      return "Solar Panel" === EU(yb)
    }
    const kh = "buildAFactory2Game:",
      NU = {
        leftFront: `${kh}lookSplitDetail_leftFront`,
        frontRight: `${kh}lookSplitDetail_frontRight`,
        gateRight: `${kh}lookGateDetail_gateRight`
      };

    function zh(yb, bb) {
      var Wy;
      let Uy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const hy = jh(yb),
        fy = null === hy ? null : `${kh}${hy.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${hy}`,
        Zy = null === hy ? null : null !== (Wy = NU[hy]) && void 0 !== Wy ? Wy : null;
      if (uU(bb) && Uy) {
        const Wy = FU(yb);
        return bb === nU && cb() && function(yb) {
          return rh.includes(FU(yb))
        }(yb) ? {
          mode: fy,
          detail: Zy,
          next: `${kh}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: fy,
          detail: Zy,
          next: th(Wy) && !wU(Wy) ? `${kh}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Py = uU(bb) ? DU(yb) : null;
      if (null === Py) return {
        mode: fy,
        detail: Zy,
        next: null,
        nextState: null
      };
      const oy = jh(Py);
      return null === oy || pU(Py) !== pU(yb) ? {
        mode: fy,
        detail: Zy,
        next: `${kh}lookWrenchTurn`,
        nextState: null
      } : {
        mode: fy,
        detail: Zy,
        next: `${kh}lookWrenchNext`,
        nextState: `${kh}lookWrenchState_${oy}`
      }
    }
    const IU = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const xh = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function AU(yb) {
      return [0, 1, 2, 3].map((bb => 0 !== (yb & 1 << bb)))
    }

    function dU(yb) {
      const bb = [];
      for (let Wy = 8; Wy + 2 < yb.length; Wy += 3) bb.push([yb[Wy], yb[Wy + 1], yb[Wy + 2]]);
      return {
        focus: [yb[0], yb[1], yb[2]],
        lasers: AU(yb[3]),
        open: AU(yb[4]),
        live: AU(yb[5]),
        on: 1 === yb[6],
        state: xh[yb[7]],
        blockers: bb
      }
    }
    const yf = "Arc Caster",
      bf = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      Wh = (Object.values(bf), "Jet Chestplate"),
      Uh = "Nova Jet Chestplate",
      hh = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      fh = Object.values(hh);

    function Zh(yb, bb, Wy) {
      return Math.min(function(yb) {
        return cb() && Ky(yb) >= 5 ? 20 : 10
      }(Wy), Math.floor(function(yb, bb) {
        return Math.max(0, yb) + (cb() ? Math.max(0, bb) : 0)
      }(yb, bb) / 5))
    }

    function cf(yb, bb, Wy) {
      const Uy = Zh(bb, Wy, yb),
        hy = Ky(yb),
        fy = (hy >= 3 ? 55 : hy >= 1 ? 50 : yb >= 8 ? 45 : 30) + Uy,
        Zy = Math.max(100 + Uy, 2 * fy);
      return {
        arcDamage: fy,
        arcPierce: yb >= 7 ? 2 : 1,
        arcChain: yb >= 10,
        barrierMax: (hy >= 4 ? 100 : hy >= 2 ? 90 : yb >= 9 ? 80 : yb >= 6 ? 60 : 40) + 5 * Uy,
        barrierRegenPerS: hy >= 5 ? 20 : yb >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Uy,
        novaShieldRegenPerS: 32,
        bladeDamage: Zy,
        bladePunch: Math.round(.5 * Zy),
        forgeRank: Uy
      }
    }
    const Ph = {
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
    var oh = Wy(35569),
      Bh = Wy(35383),
      Kh = Wy(35379),
      eh = Wy(19),
      qf = Wy(1458),
      sh = Wy(898),
      Sh = Wy.n(sh);

    function Eh(yb) {
      return !0 === yb.field
    }
    const lh = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function mf(yb) {
      return lh.has(yb) ? `buildAFactory2Game:itemPlural_${(0,uy.oe)(yb)}` : null
    }
    var Ch = Wy(1042),
      Th = Wy(910),
      Vh = Wy(1556),
      Jh = Wy(1546),
      gf = Wy(35555),
      Gh = Wy(35562),
      Oh = Wy(23),
      Rh = Wy(35551);
    const vf = "baf2QuestView",
      Mh = "baf2PlayerY",
      Yh = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class Xh {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = yb, this.view = {
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
      set(yb, bb) {
        var Wy, Uy, hy, fy, Zy, cb, Py, oy;
        const By = JSON.stringify(yb.baf2QuestName) === JSON.stringify(this.view.name),
          Ky = new Set(this.view.rows.filter((yb => yb.done)).map((yb => yb.id))),
          ey = new Set(this.view.rows.filter((yb => yb.justFinished)).map((yb => yb.id))),
          qb = yb.baf2QuestSide,
          sy = null !== qb && !0 === yb.baf2QuestSideFocus;
        let Sy = !1,
          Ey = 0;
        const ly = yb.baf2QuestSteps.map((yb => {
            const bb = Lh(yb, Yh.has(yb[0]) ? yb[0] : "" + Ey++),
              Wy = By && bb.done && !Ky.has(bb.id);
            return bb.justFinished = Wy || By && bb.done && ey.has(bb.id), Sy ||= Wy, bb
          })),
          mb = ph(ly);
        mb >= 0 && !sy && (ly[mb].current = !0);
        const Cy = !By && null !== yb.baf2QuestName,
          Ty = JSON.stringify(qb && [qb[0], qb[1]]),
          Vy = Ty === JSON.stringify(null !== (Wy = null === (Uy = this.view.side) || void 0 === Uy ? void 0 : Uy.name) && void 0 !== Wy ? Wy : null),
          Jy = null !== qb && !this.sidesSeen.has(Ty);
        Jy && this.sidesSeen.add(Ty), this.serverTutorial = null !== (hy = yb.baf2QuestTutorial) && void 0 !== hy ? hy : "on", (null !== (fy = yb.baf2QuestTutorialSeq) && void 0 !== fy ? fy : 0) >= this.pickSeq && this.endPick();
        const gb = !By || !Vy || yb.baf2QuestTier !== this.view.tier;
        this.view = {
          name: yb.baf2QuestName,
          rows: ly,
          reward: yb.baf2QuestReward,
          goal: yb.baf2QuestGoal,
          pulse: this.view.pulse + (Sy || Cy ? 1 : 0),
          itemNames: bb,
          side: qb && {
            name: [qb[0], qb[1]],
            row: {
              ...Lh(qb[2], "side"),
              current: sy
            },
            goal: null !== (Zy = qb[3]) && void 0 !== Zy ? Zy : null
          },
          sideCameUpAt: Jy ? Date.now() : this.view.sideCameUpAt,
          tier: yb.baf2QuestTier,
          core: yb.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (cb = yb.baf2QuestAlso) && void 0 !== cb ? cb : [],
          depth: null !== (Py = yb.baf2QuestDepth) && void 0 !== Py ? Py : null,
          tutorial: null !== (oy = this.pickedTutorial) && void 0 !== oy ? oy : this.serverTutorial,
          tutorialKnown: !0
        }, this.EZ(), Sy && this.scheduleClear(), gb && this.requestBook()
      }
      setTutorial(yb) {
        return this.endPick(), this.pickedTutorial = yb, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.EZ()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: yb
        }, this.EZ(), this.pickSeq
      }
      onPlayerY(yb) {
        const bb = Math.floor(yb);
        bb !== this.playerY && (this.playerY = bb, this.view.depth && Oh.g.EZ(Mh, bb))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(yb) {
        this.view = {
          ...this.view,
          chapters: yb.baf2BookChapters
        }, this.EZ()
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
            rows: this.view.rows.map((yb => yb.justFinished ? {
              ...yb,
              justFinished: !1
            } : yb))
          }, this.EZ()
        }), 2400)
      }
      EZ() {
        Oh.g.EZ(vf, this.view, !0)
      }
    }

    function nh(yb, bb) {
      return yb.sideCameUpAt > 0 && bb - yb.sideCameUpAt < 2400
    }

    function uh(yb) {
      return (null === yb.name || rf(yb)) && null === yb.side && null !== yb.chapters
    }

    function rf(yb) {
      var bb;
      return "quest_forgeOngoing" === (null === (bb = yb.name) || void 0 === bb ? void 0 : bb[0])
    }

    function Hh(yb) {
      return yb.filter((yb => !Yh.has(yb.key)))
    }

    function af(yb) {
      return yb.key.startsWith("stepCraft")
    }

    function Fh(yb, bb) {
      const Wy = new Set,
        Uy = yb.side ? [...yb.rows, yb.side.row] : yb.rows;
      for (const fy of Uy)
        if (!fy.done) {
          !fy.item || bb && !af(fy) || Wy.add(fy.item);
          for (const [yb, bb, Uy] of null !== (hy = fy.chips) && void 0 !== hy ? hy : []) {
            var hy;
            bb < Uy && Wy.add(yb)
          }
        } return Wy
    }

    function ph(yb) {
      const bb = yb.findIndex((yb => !yb.done && !yb.away));
      return bb >= 0 ? bb : yb.findIndex((yb => !yb.done))
    }

    function Lh(yb, bb) {
      let [Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky] = yb;
      return {
        id: bb,
        key: Wy,
        params: Uy,
        item: hy,
        amount: fy,
        total: Zy,
        done: cb,
        chips: null !== Py && void 0 !== Py ? Py : null,
        current: !1,
        away: !0 === oy,
        madeFor: null !== By && void 0 !== By ? By : [],
        also: null !== Ky && void 0 !== Ky ? Ky : [],
        justFinished: !1
      }
    }
    const Qh = "baf2QuestItems",
      jf = new Set;
    let Dh = new Set,
      tf = null;

    function wh(yb) {
      const bb = ny(yb.tutorial),
        Wy = bb ? Fh(yb, !0) : jf;
      "inventory" === eh.d.get("openInGameMenuName") ? (tf = null, (0, Rh.s)(Wy)) : tf = Wy;
      const Uy = bb ? Fh(yb, !1) : jf;
      (0, Gh.c)(Uy, Dh) || (Dh = Uy, Oh.g.EZ(Qh, Dh))
    }

    function kf() {
      return (0, gf.c)(Qh, (() => Dh))
    }
    var Nh = Wy(35464),
      zf = Wy(2597);

    function Ih(yb) {
      const bb = (0, zf.b)(yb),
        Wy = void 0 === bb ? void 0 : (0, Nh.displayNameOf)(bb);
      return "object" === typeof Wy && null !== Wy && "translationKey" in Wy && "string" === typeof Wy.translationKey ? Wy.translationKey : `item:${(0,uy.oe)(yb)}`
    }

    function xf(yb, bb) {
      return yb(Ih(bb))
    }
    const Ah = [{
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

    function dh(yb, bb) {
      return [`Deposit Seed (${yb})`, {
        item: db[`${yb} Deposit`],
        amount: bb
      }]
    }
    const yZ = Object.fromEntries([dh("Coal", 8), dh("Iron", 8), dh("Copper", 8), dh("Gold", 6), dh("Voltite", 4), dh("Uranium", 4)]),
      bZ = "Relay Coil",
      Wf = new Map;

    function Uf(yb) {
      let bb = Wf.get(yb);
      if (!bb) {
        const Wy = Math.max(1, yb);
        bb = Ah.filter((yb => {
          var bb;
          return Wy >= yb.fromTier && Wy <= (null !== (bb = yb.untilTier) && void 0 !== bb ? bb : 1 / 0)
        })).map((yb => yb.later && Wy >= yb.later.tier ? {
          ...yb,
          weight: yb.later.weight
        } : yb)), Wf.set(yb, bb)
      }
      return bb
    }

    function hf(yb) {
      return Uf(yb).some((yb => {
        let {
          item: bb
        } = yb;
        return bb === bZ
      }))
    }

    function ff(yb) {
      return yb.startsWith("Deposit Seed (")
    }

    function Zf(yb, bb) {
      const Wy = Uf(yb);
      return bb ? Wy.filter((yb => bb(yb.item))) : Wy
    }

    function cZ(yb) {
      return yb.reduce(((yb, bb) => yb + bb.weight), 0)
    }

    function Pf(yb, bb) {
      const Wy = Zf(yb, bb),
        Uy = cZ(Wy);
      return Wy.map((yb => ({
        find: yb,
        chance: yb.weight / Uy
      })))
    }
    const of = 6e4, Bf = new Intl.NumberFormat("en-US");

    function Kf(yb, bb) {
      const Wy = yb >= 10 ? Math.round(yb) : Math.round(10 * yb) / 10;
      return 0 === Wy ? "0" : `${bb}${Bf.format(Wy)}`
    }

    function ef(yb) {
      return yb < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Bf.format(yb) : yb < 1e6 ? `${yb<1e5?Math.floor(yb/100)/10:Math.floor(yb/1e3)}k` : Math.floor(yb / 1e5) / 10 + "M"
    }

    function qZ(yb) {
      return yb < 0 ? "\u2212" + -yb : String(yb)
    }

    function sf(yb, bb) {
      const Wy = Math.max(1, Math.round(bb));
      if (Wy < 60) return yb("buildAFactory2Game:durationSeconds", {
        seconds: String(Wy)
      });
      const Uy = Math.round(Wy / 60);
      if (Uy < 60) return yb("buildAFactory2Game:durationMinutes", {
        minutes: String(Uy)
      });
      const hy = String(Math.floor(Uy / 60));
      return Uy % 60 === 0 ? yb("buildAFactory2Game:durationWholeHours", {
        hours: hy
      }) : yb("buildAFactory2Game:durationHours", {
        hours: hy,
        minutes: String(Uy % 60)
      })
    }
    const Sf = "(max-height: 420px), (max-width: 650px)";

    function Ef() {
      return "undefined" !== typeof window && window.matchMedia(Sf).matches
    }

    function lf(yb) {
      const bb = window.matchMedia(Sf),
        Wy = () => {
          yb(bb.matches)
        };
      return bb.addEventListener("change", Wy), () => {
        bb.removeEventListener("change", Wy)
      }
    }
    var mZ = Wy(952);

    function Cf(yb, bb) {
      return null !== yb && yb > bb + 1
    }

    function Tf(yb) {
      const bb = 100 * yb;
      return String(bb <= 0 || bb >= 1 ? Math.round(bb) : Math.max(.1, Math.round(10 * bb) / 10))
    }

    function Vf(yb) {
      let {
        item: bb,
        amount: Wy
      } = yb;
      return (0, mZ.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, mZ.jsx)(Vh.d, {
            itemName: bb,
            amount: 0
          })
        }), Wy > 1 && (0, mZ.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", Wy]
        })]
      })
    }

    function Jf(yb) {
      let {
        label: bb,
        names: Wy
      } = yb;
      const [hy, fy] = (0, Uy.useState)(!1), Zy = Wy.join(" / ");
      return (0, mZ.jsxs)(mZ.Fragment, {
        children: [(0, mZ.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Zy,
          "aria-expanded": hy,
          onClick: () => {
            fy(!hy)
          },
          children: bb
        }), hy && (0, mZ.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Zy
        })]
      })
    }

    function gZ(yb) {
      let {
        tier: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)(), {
        key: Uy,
        params: hy
      } = qb(bb, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), fy = Wy(`buildAFactory2Game:${Uy}`, hy);
      return (0, mZ.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, mZ.jsx)(Th.e, {
          name: "lock"
        }), fy]
      })
    }
    const Gf = (0, Uy.createContext)(null);

    function Of() {
      const {
        t: yb
      } = (0, Ch.D)(), bb = (0, Uy.useContext)(Gf);
      return (0, Uy.useEffect)((() => null === bb || void 0 === bb ? void 0 : bb()), [bb]), (0, mZ.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: yb("buildAFactory2Game:recipeForQuest"),
        "aria-label": yb("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Rf(yb) {
      let {
        title: bb,
        count: Wy,
        children: hy,
        startOpen: fy = !0
      } = yb;
      const {
        t: Zy
      } = (0, Ch.D)(), [cb, Py] = (0, Uy.useState)((() => fy && !Ef())), [oy, By] = (0, Uy.useState)(0), Ky = (0, Uy.useCallback)((() => (By((yb => yb + 1)), () => {
        By((yb => yb - 1))
      })), []);
      return (0, mZ.jsxs)("div", {
        className: Sh()("Baf2Recipes", {
          Open: cb
        }),
        children: [(0, mZ.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Py(!cb)
          },
          "aria-expanded": cb,
          children: [Zy("buildAFactory2Game:recipesToggle", {
            title: bb,
            count: String(Wy)
          }), (0, mZ.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: cb ? "\u25be" : "\u25b8"
          })]
        }), cb && (0, mZ.jsxs)(Gf.Provider, {
          value: Ky,
          children: [(0, mZ.jsx)("ul", {
            className: "Baf2RecipeList",
            children: hy
          }), oy > 0 && (0, mZ.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, mZ.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Zy("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const vZ = "buildAFactory2Game:",
      iZ = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Mf = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      Yf = {
        "Uranium Grit": fy,
        "Raw Uranium": fy
      };

    function Xf(yb) {
      var bb;
      return null !== (bb = Yf[yb]) && void 0 !== bb ? bb : Math.max(Iy(yb), Mf[yb] ? Iy(Mf[yb]) : 1, function(yb) {
        const bb = hy.findIndex((bb => bb.cost.some((bb => bb.item === yb))));
        return bb > fy ? bb : 1
      }(yb))
    }

    function nf(yb, bb) {
      return uf(bb) ? Xf(bb) : function(yb) {
        if (iZ.has(yb)) return 1;
        const bb = hy.findIndex((bb => bb.newDeposits.some((bb => {
          let {
            block: Wy
          } = bb;
          return Wy === yb
        }))));
        return bb < 0 ? 1 : bb + 1
      }(yb)
    }

    function uf(yb) {
      return yb in Yf || Ky(Xf(yb)) > 0
    }

    function rZ(yb, bb) {
      return Db(yb, {
        coupled: !1,
        taught: null,
        atomic: cb() && bb >= 11
      }).recipes
    }

    function Hf(yb, bb) {
      const Wy = ey(yb, bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ky(yb) > 0);
      return "open" === Wy || "locked" === Wy
    }

    function aZ(yb, bb) {
      return yb.map(((yb, Wy) => ({
        value: yb,
        idx: Wy,
        tier: bb(yb)
      }))).sort(((yb, bb) => yb.tier - bb.tier || yb.idx - bb.idx)).map((yb => {
        let {
          value: bb
        } = yb;
        return bb
      }))
    }

    function Ff(yb, bb, Wy) {
      const Uy = ey(yb, bb);
      if ("hidden" === Uy || "open" === Uy) return null;
      if ("teaser" === Uy) return {
        tag: {
          translationKey: `${vZ}${Wy?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${vZ}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const hy = qb(yb, {
          tier: Wy ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        fy = qb(yb, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${vZ}${hy.key}`,
          params: hy.params
        },
        reason: {
          translationKey: `${vZ}${fy.key}`,
          params: fy.params
        }
      }
    }

    function pf(yb) {
      return !ff(yb)
    }

    function Lf(yb) {
      let {
        seconds: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)();
      return (0, mZ.jsx)(Rf, {
        title: Wy("buildAFactory2Game:recipesCuts", {
          seconds: bb
        }),
        count: 1,
        children: (0, mZ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, mZ.jsx)(Vf, {
            item: "Maple Sapling",
            amount: 1
          }), (0, mZ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mZ.jsx)(Vf, {
            item: "Maple Log",
            amount: 1
          }), (0, mZ.jsx)("span", {
            className: "Baf2RecipeName",
            children: Wy("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Qf(yb) {
      let {
        fertilised: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)();
      return (0, mZ.jsxs)(Rf, {
        title: Wy("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, mZ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, mZ.jsx)(Vf, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, mZ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mZ.jsx)(Vf, {
            item: "Wheat",
            amount: 1
          }), (0, mZ.jsx)(Vf, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, mZ.jsx)("span", {
            className: "Baf2RecipeName",
            children: Wy("buildAFactory2Game:recipeField")
          })]
        }), (0, mZ.jsxs)("li", {
          className: Sh()("Baf2Recipe", {
            InUse: bb
          }),
          children: [(0, mZ.jsx)(Vf, {
            item: "Fertiliser",
            amount: 1
          }), (0, mZ.jsx)("span", {
            className: "Baf2RecipeName",
            children: Wy("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function jZ(yb) {
      let {
        tier: bb,
        seconds: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ch.D)(), hy = function(yb) {
        return yb >= 5 ? Sb : sb
      }(bb);
      return (0, mZ.jsx)(Rf, {
        title: Uy("buildAFactory2Game:recipesBringsUp", {
          seconds: Wy
        }),
        count: hy.length,
        children: hy.map((yb => {
          let {
            item: bb,
            chance: Wy
          } = yb;
          return (0, mZ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, mZ.jsx)(Vf, {
              item: bb,
              amount: 1
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: xf(Uy, bb)
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Uy("buildAFactory2Game:recipeChance", {
                percent: Tf(Wy)
              })
            })]
          }, bb)
        }))
      })
    }

    function Df(yb) {
      let {
        tier: bb,
        seconds: Wy,
        noSeeds: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)(), fy = kf(), Zy = Pf(bb, Uy ? pf : void 0), cb = Uy && Pf(bb).length > Zy.length, Py = hf(bb);
      return (0, mZ.jsxs)(Rf, {
        title: hy("buildAFactory2Game:recipesRecycles", {
          seconds: Wy
        }),
        count: Zy.length,
        children: [Zy.map((yb => {
          let {
            find: bb,
            chance: Wy
          } = yb;
          return (0, mZ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [fy.has(bb.item) && (0, mZ.jsx)(Of, {}), (0, mZ.jsx)(Vf, {
              item: bb.item,
              amount: bb.amount
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: xf(hy, bb.item)
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: hy("buildAFactory2Game:recipeChance", {
                percent: Tf(Wy)
              })
            })]
          }, bb.item)
        })), cb && (0, mZ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mZ.jsx)("span", {
            className: "Baf2RecipeName",
            children: hy("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Py && (0, mZ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mZ.jsx)("span", {
            className: "Baf2RecipeName",
            children: hy("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function tZ(yb) {
      let {
        tier: bb,
        seconds: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ch.D)(), hy = Object.entries(yZ).filter((yb => {
        let [, {
          item: Wy
        }] = yb;
        return Hf(Xf(Wy), bb, uf(Wy))
      }));
      return (0, mZ.jsx)(Rf, {
        title: Uy("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: Wy
        }),
        count: hy.length,
        children: hy.map((yb => {
          let [bb, {
            item: Wy,
            amount: hy
          }] = yb;
          return (0, mZ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, mZ.jsx)(Vf, {
              item: bb,
              amount: 1
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mZ.jsx)(Vf, {
              item: Wy,
              amount: hy
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: xf(Uy, Wy)
            })]
          }, bb)
        }))
      })
    }

    function wf(yb) {
      let {
        tier: bb,
        seconds: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ch.D)(), hy = kf(), fy = aZ(Object.entries(db).filter((yb => {
        let [Wy, Uy] = yb;
        return Hf(nf(Wy, Uy), bb, uf(Uy))
      })), (yb => {
        let [bb, Wy] = yb;
        return nf(bb, Wy)
      }));
      return (0, mZ.jsx)(Rf, {
        title: Uy("buildAFactory2Game:recipesDigs", {
          seconds: Wy
        }),
        count: fy.length,
        children: fy.map((yb => {
          let [Wy, fy] = yb;
          const Zy = nf(Wy, fy),
            cb = Zy > bb ? Zy : null,
            Py = yU[Wy],
            oy = null === cb && hy.has(fy);
          return (0, mZ.jsxs)("li", {
            className: Sh()("Baf2Recipe", {
              Locked: null !== cb,
              Far: Cf(cb, bb)
            }),
            children: [oy && (0, mZ.jsx)(Of, {}), (0, mZ.jsx)(Vf, {
              item: Wy,
              amount: 1
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mZ.jsx)(Vf, {
              item: fy,
              amount: 1
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: xf(Uy, fy)
            }), void 0 !== Py && (0, mZ.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Uy("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Py)
              })
            }), null !== cb && (0, mZ.jsx)(gZ, {
              tier: cb
            })]
          }, Wy)
        }))
      })
    }

    function kZ(yb) {
      var bb;
      let {
        def: Wy,
        seconds: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)();
      return (0, mZ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mZ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (bb = Wy.fuels) && void 0 !== bb ? bb : []).map((yb => (0, mZ.jsx)(Vf, {
            item: yb,
            amount: 1
          }, yb))), (0, mZ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mZ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mZ.jsx)(Th.e, {
              name: "bolt"
            }), hy("buildAFactory2Game:recipePower", {
              power: xb(Wy.powerMade),
              seconds: Uy
            })]
          })]
        })
      })
    }

    function Nf(yb) {
      let {
        def: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)();
      return (0, mZ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mZ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mZ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mZ.jsx)(Th.e, {
              name: "bolt"
            }), Wy("buildAFactory2Game:recipeMixer", {
              cryo: Kf((0, Ay.C)(bb, bb.cryoMade), "")
            })]
          })
        })
      })
    }

    function zZ(yb) {
      let {
        def: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)();
      return (0, mZ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mZ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mZ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mZ.jsx)(Th.e, {
              name: "bolt"
            }), Wy("buildAFactory2Game:recipeCondenser", {
              power: Kf((0, Ay.C)(bb, bb.powerPerOp), ""),
              water: Kf((0, Ay.C)(bb, bb.fluidMade), "")
            })]
          })
        })
      })
    }

    function If(yb) {
      let {
        kind: bb,
        def: Wy,
        input: Uy,
        tier: hy,
        noSeeds: fy = !1
      } = yb;
      const Zy = String(Wy.opMs / 1e3);
      return zW(Wy) ? (0, mZ.jsx)(Lf, {
        seconds: Zy
      }) : Wy.field ? (0, mZ.jsx)(Qf, {
        fertilised: null !== Uy
      }) : Wy.table ? (0, mZ.jsx)(jZ, {
        tier: hy,
        seconds: Zy
      }) : Wy.recycles ? (0, mZ.jsxs)(mZ.Fragment, {
        children: [(0, mZ.jsx)(Df, {
          tier: hy,
          seconds: Zy,
          noSeeds: fy
        }), (0, mZ.jsx)(tZ, {
          tier: hy,
          seconds: Zy
        })]
      }) : Nb(Wy) ? (0, mZ.jsx)(wf, {
        tier: hy,
        seconds: Zy
      }) : void 0 !== Wy.fluidMade ? (0, mZ.jsx)(zZ, {
        def: Wy
      }) : void 0 !== Wy.cryoMade ? (0, mZ.jsx)(Nf, {
        def: Wy
      }) : void 0 !== Wy.powerMade ? (0, mZ.jsx)(kZ, {
        def: Wy,
        seconds: Zy
      }) : (0, mZ.jsx)(xZ, {
        kind: bb,
        input: Uy,
        tier: hy,
        seconds: Zy
      })
    }

    function xZ(yb) {
      let {
        kind: bb,
        input: Wy,
        tier: Uy,
        seconds: hy
      } = yb;
      const {
        t: fy
      } = (0, Ch.D)(), Zy = kf(), cb = aZ(function(yb) {
        const bb = new Map;
        for (const hy of yb) {
          var Wy, Uy;
          const yb = [hy.output, hy.outputAmount, hy.inputAmount, null === (Wy = hy.bonus) || void 0 === Wy ? void 0 : Wy.item, null === (Uy = hy.bonus) || void 0 === Uy ? void 0 : Uy.chance].join("|"),
            fy = bb.get(yb);
          fy ? fy.inputs.push(hy.input) : bb.set(yb, {
            inputs: [hy.input],
            inputAmount: hy.inputAmount,
            output: hy.output,
            outputAmount: hy.outputAmount,
            bonus: hy.bonus
          })
        }
        return [...bb.values()]
      }(rZ(bb, Uy).filter(UW)), (yb => Xf(yb.output))).filter((yb => Hf(Xf(yb.output), Uy, uf(yb.output))));
      return (0, mZ.jsx)(Rf, {
        title: fy("buildAFactory2Game:recipesEach", {
          seconds: hy
        }),
        count: cb.length,
        children: cb.map((yb => {
          const bb = null !== Wy && yb.inputs.includes(Wy),
            hy = yb.inputs.length > 3 ? [bb ? Wy : yb.inputs[0]] : yb.inputs,
            cb = Xf(yb.output) > Uy ? Xf(yb.output) : null,
            Py = null === cb && Zy.has(yb.output);
          return (0, mZ.jsxs)("li", {
            className: Sh()("Baf2Recipe", {
              InUse: bb,
              Locked: null !== cb,
              Far: Cf(cb, Uy)
            }),
            children: [Py && (0, mZ.jsx)(Of, {}), hy.map(((bb, Wy) => (0, mZ.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [Wy > 0 && (0, mZ.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, mZ.jsx)(Vf, {
                item: bb,
                amount: yb.inputAmount
              })]
            }, bb))), hy.length < yb.inputs.length && (0, mZ.jsx)(Jf, {
              label: fy("buildAFactory2Game:recipeMore", {
                count: String(yb.inputs.length - hy.length)
              }),
              names: yb.inputs.filter((yb => !hy.includes(yb))).map((yb => xf(fy, yb)))
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mZ.jsx)(Vf, {
              item: yb.output,
              amount: yb.outputAmount
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: xf(fy, yb.output)
            }), yb.bonus && (0, mZ.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [fy("buildAFactory2Game:recipeBonus", {
                percent: Tf(yb.bonus.chance)
              }), (0, mZ.jsx)(Vf, {
                item: yb.bonus.item,
                amount: 1
              })]
            }), null !== cb && (0, mZ.jsx)(gZ, {
              tier: cb
            })]
          }, `${yb.output}|${yb.inputs[0]}`)
        }))
      })
    }

    function Af(yb) {
      let {
        taught: bb,
        tier: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ch.D)(), hy = kf(), fy = aZ(Object.values(Qb), (yb => yb.tier)).filter((yb => Hf(yb.tier, Wy)));
      return (0, mZ.jsx)(Rf, {
        title: Uy("buildAFactory2Game:benchCanMake"),
        count: fy.length,
        startOpen: !1,
        children: fy.map((yb => {
          const fy = yb.tier > Wy,
            Zy = !fy && hy.has(yb.output);
          return (0, mZ.jsxs)("li", {
            className: Sh()("Baf2Recipe", {
              InUse: yb.output === bb,
              Locked: fy,
              Far: Cf(fy ? yb.tier : null, Wy)
            }),
            children: [Zy && (0, mZ.jsx)(Of, {}), (0, mZ.jsx)(Vf, {
              item: yb.output,
              amount: yb.outputAmount
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: xf(Uy, yb.output)
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), yb.inputs.map((yb => (0, mZ.jsx)(Vf, {
              item: yb.item,
              amount: yb.amount
            }, yb.item))), fy && (0, mZ.jsx)(gZ, {
              tier: yb.tier
            })]
          }, yb.output)
        }))
      })
    }
    var df, yc, bc, WZ, UZ;
    const hZ = Rb.Generator,
      fZ = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      ZZ = 1e3 * (null !== (df = hZ.powerMade) && void 0 !== df ? df : 0) / hZ.opMs,
      cc = Math.min(...(null !== (yc = hZ.fuels) && void 0 !== yc ? yc : []).map((yb => Ab[yb]))) / 1e3,
      PZ = Rb["Volt Engine"],
      oZ = 1e3 * (null !== (bc = PZ.powerMade) && void 0 !== bc ? bc : 0) / PZ.opMs,
      BZ = Ab[null !== (WZ = null === (UZ = PZ.fuels) || void 0 === UZ ? void 0 : UZ[0]) && void 0 !== WZ ? WZ : ""] / 1e3;

    function KZ(yb) {
      let {
        item: bb,
        label: Wy,
        value: Uy,
        note: hy,
        dim: fy
      } = yb;
      return (0, mZ.jsxs)("li", {
        className: Sh()("Baf2PowerRow", {
          Dim: fy
        }),
        children: [(0, mZ.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, mZ.jsx)(Vh.d, {
            itemName: bb,
            amount: 0
          })
        }), (0, mZ.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, mZ.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: Wy
          }), hy && (0, mZ.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: hy
          })]
        }), (0, mZ.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Uy
        })]
      })
    }

    function eZ(yb, bb, Wy, Uy) {
      var hy;
      const fy = void 0 === Uy ? Rb[yb] : function(yb, bb) {
          if (null === bb) return yb;
          let Wy = kb.get(bb);
          return Wy || (Wy = {
            ...yb,
            powerPerOp: wy(yb, bb),
            farmMob: bb
          }, kb.set(bb, Wy)), Wy
        }(Rb[yb], Uy),
        Zy = bb && fy.couplable ? rW(fy, Wy) : fy;
      return 1e3 * (null !== (hy = Zy.powerPerOp) && void 0 !== hy ? hy : 0) / Zy.opMs
    }

    function qc(yb) {
      var bb, Wy, Uy, hy, fy, Zy, cb, Py;
      let {
        message: oy
      } = yb;
      const {
        t: By
      } = (0, Ch.D)(), Ky = (yb, bb) => By("buildAFactory2Game:powerPerSecond", {
        rate: Kf(yb, bb)
      }), [ey, qb] = oy.baf2PowerGenerators, sy = oy.baf2PowerGeneratorFuel, Sy = oy.baf2PowerSunPanels, Ey = null !== (bb = oy.baf2PowerSunShare) && void 0 !== bb ? bb : 1, ly = oy.baf2PowerVaults, mb = oy.baf2PowerUsers, [Cy, Ty] = null !== (Wy = oy.baf2PowerEngines) && void 0 !== Wy ? Wy : [0, 0], Vy = null !== (Uy = oy.baf2PowerEngineCells) && void 0 !== Uy ? Uy : 0, Jy = null !== (hy = oy.baf2PowerPads) && void 0 !== hy ? hy : 0, gb = null !== (fy = oy.baf2PowerCharge) && void 0 !== fy ? fy : 0, [Gy, Oy] = null !== (Zy = oy.baf2PowerReactors) && void 0 !== Zy ? Zy : [0, 0], [Ry, vb] = null !== (cb = oy.baf2PowerBatteries) && void 0 !== cb ? cb : [0, 0];
      let ib = By("buildAFactory2Game:powerEngineCells", {
        amount: String(Vy)
      });
      Vy > 0 && Ty > 0 && (ib = By("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Vy),
        time: sf(By, Vy * BZ / Ty)
      }));
      let My = By("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(sy)
      });
      sy > 0 && qb > 0 && (My = By("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(sy),
        time: sf(By, sy * cc / qb)
      }));
      const Yy = ey + Cy + Sy + Gy;
      return (0, mZ.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, mZ.jsxs)("section", {
          children: [(0, mZ.jsxs)("h3", {
            children: [By("buildAFactory2Game:powerMaking"), (0, mZ.jsx)("span", {
              children: Ky(oy.baf2PowerMadePerS, "+")
            })]
          }), (0, mZ.jsxs)("ul", {
            children: [0 === Yy && (0, mZ.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: By("buildAFactory2Game:powerNoMakers")
            }), ey > 0 && (0, mZ.jsx)(KZ, {
              item: "Generator",
              label: `${xf(By,"Generator")} \xd7${ey}`,
              note: `${By("buildAFactory2Game:powerRunning",{amount:String(qb)})} \xb7 ${My}`,
              value: Ky(qb * ZZ, "+"),
              dim: 0 === qb
            }), Cy > 0 && (0, mZ.jsx)(KZ, {
              item: "Volt Engine",
              label: `${xf(By,"Volt Engine")} \xd7${Cy}`,
              note: `${By("buildAFactory2Game:powerRunning",{amount:String(Ty)})} \xb7 ${ib}`,
              value: Ky(Ty * oZ, "+"),
              dim: 0 === Ty
            }), Sy > 0 && (0, mZ.jsx)(KZ, {
              item: "Solar Panel",
              label: `${xf(By,"Solar Panel")} \xd7${Sy}`,
              note: By(Ey < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Ky(4 * Sy * Ey, "+")
            }), Gy > 0 && (0, mZ.jsx)(KZ, {
              item: "Reactor Frame",
              label: `${By("buildAFactory2Game:powerReactors")} \xd7${Gy}`,
              note: By("buildAFactory2Game:powerRunning", {
                amount: String(Oy)
              }),
              value: Ky(null !== (Py = oy.baf2PowerReactorPerS) && void 0 !== Py ? Py : 0, "+"),
              dim: 0 === Oy
            })]
          })]
        }), (0, mZ.jsxs)("section", {
          children: [(0, mZ.jsxs)("h3", {
            children: [By("buildAFactory2Game:powerStorage"), (0, mZ.jsx)("span", {
              children: xb(oy.baf2PowerCap)
            })]
          }), (ly > 0 || Ry > 0) && (0, mZ.jsxs)("ul", {
            children: [ly > 0 && (0, mZ.jsx)(KZ, {
              item: "Charge Vault",
              label: `${xf(By,"Charge Vault")} \xd7${ly}`,
              value: `+${xb(8e3*ly)}`
            }), Ry > 0 && (0, mZ.jsx)(KZ, {
              item: "Battery Cell",
              label: `${By("buildAFactory2Game:powerBatteries")} \xd7${Ry}`,
              value: `+${xb(vb)}`
            })]
          })]
        }), (0, mZ.jsxs)("section", {
          children: [(0, mZ.jsxs)("h3", {
            children: [By("buildAFactory2Game:powerUsing"), (0, mZ.jsx)("span", {
              children: Ky(oy.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, mZ.jsxs)("ul", {
            children: [0 === mb.length && 0 === Jy && 0 === gb && (0, mZ.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: By("buildAFactory2Game:powerNoUsers")
            }), mb.map((yb => {
              let [bb, Wy, Uy, hy, fy = 1, Zy] = yb, cb = Wy ? By(fZ[fy - 1], {
                name: xf(By, bb)
              }) : xf(By, bb);
              return void 0 !== Zy && (cb = By("buildAFactory2Game:powerFarmName", {
                name: cb,
                mob: By(jb(Zy))
              })), (0, mZ.jsx)(KZ, {
                item: bb,
                label: `${cb} \xd7${Uy}`,
                note: By("buildAFactory2Game:powerRunning", {
                  amount: String(hy)
                }),
                value: hy > 0 ? Ky(hy * eZ(bb, Wy, fy, Zy), "\u2212") : By("buildAFactory2Game:powerIdle"),
                dim: 0 === hy
              }, `${bb}|${Wy}|${fy}|${Zy}`)
            })), Jy > 0 && (0, mZ.jsx)(KZ, {
              item: "Charging Pad",
              label: `${xf(By,"Charging Pad")} \xd7${Jy}`,
              value: By("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), gb > 0 && (0, mZ.jsx)(KZ, {
              item: "Homestead Core",
              label: By("buildAFactory2Game:powerCharge"),
              value: Ky(gb, "\u2212")
            }), oy.baf2PowerStarved > 0 && (0, mZ.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, mZ.jsx)(Th.e, {
                name: "triangle-exclamation"
              }), By("buildAFactory2Game:powerStarved", {
                amount: String(oy.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var sZ = Wy(3732),
      SZ = Wy(1273);
    class EZ {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(yb) {
        this.message = yb;
        for (const bb of this.listeners) bb()
      }
      get() {
        return this.message
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
    }
    class lZ extends EZ {}

    function mc(yb, bb) {
      const Wy = () => {
          const Wy = yb.get();
          if (!Wy || !bb) return Wy;
          const [Uy, hy, fy] = Wy.baf2PowerAt;
          return Uy === bb[0] && hy === bb[1] && fy === bb[2] ? Wy : null
        },
        [hy, fy] = (0, Uy.useState)(Wy);
      return (0, Uy.useEffect)((() => (fy(Wy()), yb.subscribe((() => {
        fy(Wy())
      })))), [yb, ...null !== bb && void 0 !== bb ? bb : []]), hy
    }

    function CZ(yb) {
      return {
        stored: yb.baf2PowerStored,
        cap: yb.baf2PowerCap,
        madePerS: yb.baf2PowerMadePerS,
        usedPerS: yb.baf2PowerUsedPerS
      }
    }

    function TZ(yb) {
      let {
        stored: bb,
        cap: Wy
      } = yb;
      return (0, mZ.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, mZ.jsx)("div", {
          style: {
            width: `${Math.min(100,100*bb/Math.max(1,Wy))}%`
          }
        })
      })
    }

    function VZ(yb) {
      let {
        figures: bb,
        labelled: Wy = !1
      } = yb;
      const {
        t: Uy
      } = (0, Ch.D)(), hy = bb.madePerS - bb.usedPerS, {
        text: fy,
        draining: Zy
      } = function(yb, bb) {
        let {
          stored: Wy,
          cap: Uy,
          madePerS: hy,
          usedPerS: fy
        } = bb;
        const Zy = hy - fy;
        return Wy >= Uy ? {
          text: yb("buildAFactory2Game:powerFull"),
          draining: !1
        } : Zy > .05 ? {
          text: yb("buildAFactory2Game:powerFullIn", {
            time: sf(yb, (Uy - Wy) / Zy)
          }),
          draining: !1
        } : Zy < -.05 ? {
          text: yb("buildAFactory2Game:powerEmptyIn", {
            time: sf(yb, Wy / -Zy)
          }),
          draining: !0
        } : {
          text: yb("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Uy, bb);
      return (0, mZ.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, mZ.jsx)(TZ, {
          stored: bb.stored,
          cap: bb.cap
        }), (0, mZ.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, mZ.jsx)("span", {
            children: Uy(Wy ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: xb(bb.stored),
              cap: xb(bb.cap)
            })
          }), (0, mZ.jsxs)("span", {
            className: Sh()("Baf2PowerNet", {
              Draining: Zy
            }),
            children: [Uy("buildAFactory2Game:powerPerSecond", {
              rate: Kf(Math.abs(hy), hy < 0 ? "\u2212" : "+")
            }), " \xb7 ", fy]
          })]
        })]
      })
    }

    function JZ(yb) {
      let {
        stored: bb,
        cap: Wy,
        rates: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)();
      return Uy ? (0, mZ.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, mZ.jsx)(VZ, {
          figures: {
            stored: bb,
            cap: Wy,
            madePerS: Uy[0],
            usedPerS: Uy[1]
          },
          labelled: !0
        })
      }) : (0, mZ.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, mZ.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, mZ.jsx)(TZ, {
            stored: bb,
            cap: Wy
          }), (0, mZ.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, mZ.jsx)("span", {
              children: hy("buildAFactory2Game:powerStoredLabelled", {
                stored: xb(bb),
                cap: xb(Wy)
              })
            })
          })]
        })
      })
    }

    function gc(yb) {
      let {
        store: bb,
        close: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ch.D)(), hy = mc(bb);
      return (0, mZ.jsx)(sZ.c, {
        close: Wy,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mZ.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsxs)("div", {
              children: [(0, mZ.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Uy("buildAFactory2Game:powerTitle")
              }), (0, mZ.jsx)("p", {
                children: Uy("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, mZ.jsx)(SZ.h, {
              onClick: Wy
            })]
          }), hy && (0, mZ.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, mZ.jsx)(VZ, {
              figures: CZ(hy)
            }), (0, mZ.jsx)(qc, {
              message: hy
            })]
          })]
        })
      })
    }

    function GZ(yb) {
      var bb;
      let {
        kind: Wy,
        def: hy,
        Dv: fy,
        power: Zy,
        stored: cb,
        cap: Py
      } = yb;
      const {
        t: oy
      } = (0, Ch.D)(), By = mc(Zy, fy), [Ky, ey] = (0, Uy.useState)(!1);
      return (0, mZ.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, mZ.jsx)(If, {
          kind: Wy,
          def: hy,
          input: null,
          tier: null !== (bb = null === By || void 0 === By ? void 0 : By.baf2PowerTier) && void 0 !== bb ? bb : 1
        }), (0, mZ.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: oy("buildAFactory2Game:powerTitle")
        }), By && (0, mZ.jsx)(VZ, {
          figures: CZ(By)
        }), !By && (0, mZ.jsx)(JZ, {
          stored: cb,
          cap: Py,
          rates: null
        }), By && (0, mZ.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            ey(!Ky)
          },
          "aria-expanded": Ky,
          children: oy(Ky ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), By && Ky && (0, mZ.jsx)(qc, {
          message: By
        })]
      })
    }
    const OZ = 2500,
      RZ = 17500,
      vc = `${Vy} `;
    const ic = ["plan", "throttle"];

    function MZ(yb) {
      if (yb.startsWith(`${Cb} `)) return yb.slice(0, yb.lastIndexOf(" "));
      const bb = yb.split(" ");
      return bb[0] === Ub && ic.includes(bb[4]) ? bb.slice(0, 5).join(" ") : null
    }
    class YZ {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = yb, this.now = bb, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.SKy = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = bb()
      }
      enqueue(yb) {
        this.queue(yb, this.nextTicket());
        const bb = this.SKy + this.pending.length;
        return this.flush(), bb
      }
      track(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Wy = this.nextTicket();
        if (!bb.urgent) return this.queue(yb, Wy), this.flush(), Wy;
        const {
          supersedes: Uy
        } = bb;
        for (let fy = this.pending.length - 1; fy >= this.urgent; fy--) {
          const bb = this.pending[fy];
          (bb.command === yb || null !== Uy && void 0 !== Uy && Uy(bb.command)) && (this.pending.splice(fy, 1), this.markLeft(bb.tickets))
        }
        const hy = this.pending.findIndex((bb => {
          let {
            command: Wy
          } = bb;
          return Wy === yb
        }));
        return -1 !== hy ? this.pending[hy].tickets.push(Wy) : (this.pending.splice(this.urgent, 0, {
          command: yb,
          tickets: [Wy]
        }), this.urgent += 1), this.flush(), Wy
      }
      leftAt(yb) {
        const bb = this.leftTimes.get(yb);
        return void 0 !== bb ? bb : this.pending.some((bb => {
          let {
            tickets: Wy
          } = bb;
          return Wy.includes(yb)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let yb = !0;
        return () => {
          yb && (yb = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(yb) {
        var bb;
        return (null === (bb = this.pending.at(-1)) || void 0 === bb ? void 0 : bb.command) === yb
      }
      sent() {
        return this.SKy
      }
      clear() {
        for (const {
            tickets: yb
          }
          of this.pending) this.markLeft(yb);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(yb) {
        const bb = this.now();
        for (const Wy of yb) this.leftTimes.set(Wy, bb);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(yb, bb) {
        const Wy = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === Wy || void 0 === Wy ? void 0 : Wy.command) === yb) return void(! function(yb) {
          return yb === Jy || yb.startsWith(`${Ty} `) || yb.startsWith(`${py} `)
        }(yb) ? Wy.tickets.push(bb) : (this.pending.pop(), this.markLeft([...Wy.tickets, bb])));
        const Uy = void 0 === Wy ? null : function(yb, bb) {
          const Wy = `${dy} `;
          if (!yb.startsWith(Wy) || !bb.startsWith(Wy)) return null;
          const Uy = Wb(yb.slice(Wy.length)),
            hy = Wb(bb.slice(Wy.length));
          return Uy && hy && Uy.item === hy.item ? bW(hy.seq, function(yb, bb) {
            const Wy = yb => "number" === typeof yb ? yb : "one" === yb ? 1 : 99;
            return "fill" === yb || "fill" === bb ? "fill" : Wy(yb) + Wy(bb)
          }(Uy.mode, hy.mode), hy.item) : null
        }(Wy.command, yb);
        if (null !== Uy && void 0 !== Wy) return Wy.command = Uy, void Wy.tickets.push(bb);
        const hy = MZ(yb);
        if (null !== hy && void 0 !== Wy && MZ(Wy.command) === hy) return Wy.command = yb, void Wy.tickets.push(bb);
        if (null !== Wy && void 0 !== Wy && Wy.command.startsWith(vc) && yb.startsWith(vc)) {
          const Uy = yb.slice(vc.length);
          if (Wy.command.slice(vc.length).split(",").includes(Uy)) return void Wy.tickets.push(bb);
          const hy = `${Wy.command},${Uy}`;
          if (hy.length <= 119) return Wy.command = hy, void Wy.tickets.push(bb)
        }
        this.pending.push({
          command: yb,
          tickets: [bb]
        })
      }
      flush() {
        const yb = this.now();
        for (this.tokens = Math.min(5, this.tokens + (yb - this.refilledAt) / OZ), this.refilledAt = yb; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.SKy += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: yb,
            tickets: bb
          } = this.pending.shift();
          this.markLeft(bb), this.send(yb)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * OZ)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class XZ {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new YZ(yb, bb)
      }
      send(yb) {
        return this.queue.enqueue(yb)
      }
      sent() {
        return this.queue.sent()
      }
      track(yb, bb) {
        return this.queue.track(yb, bb)
      }
      leftAt(yb) {
        return this.queue.leftAt(yb)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(yb) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = bb, this.send(yb), this.islandEdits.count
      }
      syncIslandEdits(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: Wy
        } = this, Uy = bb - Wy.lastAtMs < RZ;
        Wy.count = Uy ? Math.max(Wy.count, yb) : yb
      }
      clear() {
        this.queue.clear()
      }
    }
    const nZ = (0, Uy.createContext)(null);

    function uZ() {
      const yb = (0, Uy.useContext)(nZ);
      if (!yb) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return yb
    }

    function rc(yb, bb) {
      return null !== bb && void 0 !== bb ? bb : 1 === yb
    }

    function HZ(yb, bb) {
      return yb.every((yb => {
        var Wy;
        let [Uy, , hy] = yb;
        return !rc(hy, null === (Wy = bb.get(Uy)) || void 0 === Wy ? void 0 : Wy.DW)
      }))
    }

    function ac(yb, bb, Wy) {
      if (0 === yb.size) return yb;
      const Uy = new Map(yb);
      for (const [hy, fy] of yb) {
        const yb = bb.find((yb => {
          let [bb] = yb;
          return bb === hy
        }));
        (!yb || fy.DW === (1 === yb[2]) || fy.atMs < Wy) && Uy.delete(hy)
      }
      return Uy
    }

    function FZ(yb) {
      var bb;
      let {
        Dv: Wy,
        input: hy,
        drops: fy,
        seconds: Zy
      } = yb;
      const {
        t: cb
      } = (0, Ch.D)(), Py = uZ(), [oy, By] = (0, Uy.useState)(new Map);
      (0, Uy.useEffect)((() => {
        fy && By((yb => ac(yb, fy, Date.now() - RZ)))
      }), [fy]), (0, Uy.useEffect)((() => {
        const yb = function(yb, bb) {
          let Wy = null;
          for (const {
              atMs: Uy
            }
            of yb.values()) Wy = null === Wy ? Uy : Math.min(Wy, Uy);
          return null === Wy ? null : Wy + bb
        }(oy, RZ);
        if (null === yb || !fy) return;
        const bb = setTimeout((() => {
          By((yb => ac(yb, fy, Date.now() - RZ)))
        }), Math.max(0, yb - Date.now()) + 1);
        return () => {
          clearTimeout(bb)
        }
      }), [oy, fy]);
      const Ky = Dy(hy),
        ey = null !== Ky && null !== fy && HZ(fy, oy),
        qb = function(yb, bb, Wy) {
          return null === yb || null === bb || HZ(bb, Wy) ? 0 : Fy[Hy[yb]]
        }(Ky, fy, oy);
      return (0, mZ.jsxs)(Rf, {
        title: cb("buildAFactory2Game:farmDropsTitle", {
          seconds: Zy
        }),
        count: null !== (bb = null === fy || void 0 === fy ? void 0 : fy.length) && void 0 !== bb ? bb : 0,
        children: [qb > 0 && (0, mZ.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: cb("buildAFactory2Game:farmDropsPower", {
            power: String(qb)
          })
        }), (null === Ky || !fy) && (0, mZ.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: cb("buildAFactory2Game:farmDropsEmpty")
        }), ey && (0, mZ.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: cb("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Ky && (null === fy || void 0 === fy ? void 0 : fy.map((yb => {
          var bb;
          let [Uy, hy, fy] = yb;
          const Zy = hy < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Ky = rc(fy, null === (bb = oy.get(Uy)) || void 0 === bb ? void 0 : bb.DW);
          return (0, mZ.jsxs)("li", {
            className: Sh()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Ky
            }),
            children: [(0, mZ.jsx)(Vf, {
              item: Uy,
              amount: 1
            }), (0, mZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: xf(cb, Uy)
            }), (0, mZ.jsx)("span", {
              className: "Baf2FarmRate",
              children: cb(Zy, {
                amount: String(hy)
              })
            }), (0, mZ.jsx)("button", {
              type: "button",
              className: Sh()("Baf2FarmToggle SmallTextBold", {
                Kept: Ky
              }),
              "aria-pressed": Ky,
              onClick: () => {
                By(new Map(oy).set(Uy, {
                  DW: !Ky,
                  atMs: Date.now()
                })), Py.send(function(yb, bb, Wy, Uy) {
                  return `${py} ${yb} ${bb} ${Wy} ${Uy}`
                }(Wy[0], Wy[1], Wy[2], Uy))
              },
              children: cb(Ky ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Uy)
        })))]
      })
    }
    var pZ;
    const LZ = String(null !== (pZ = Rb.Synthesizer.waterPerOp) && void 0 !== pZ ? pZ : 0);

    function QZ(yb) {
      let {
        Dv: bb,
        taught: Wy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)(), fy = uZ(), [Zy, cb] = (0, Uy.useState)(null);
      (0, Uy.useEffect)((() => {
        null !== Zy && Wy === Zy && cb(null)
      }), [Zy, Wy]);
      const Py = null !== Zy && void 0 !== Zy ? Zy : Wy;
      let oy = hy("buildAFactory2Game:synthPick");
      return null !== Py && (oy = hy("buildAFactory2Game:synthGrows", {
        name: xf(hy, Py),
        input: xf(hy, Eb),
        water: LZ
      })), (0, mZ.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, mZ.jsx)("div", {
          className: Sh()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Py
          }),
          children: oy
        }), (0, mZ.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: lb.map(((yb, Wy) => {
            const Uy = xf(hy, yb),
              Zy = yb === Py;
            return (0, mZ.jsx)("li", {
              children: (0, mZ.jsx)("button", {
                type: "button",
                className: Sh()("Baf2SynthTile", {
                  Selected: Zy
                }),
                title: Uy,
                "aria-label": Uy,
                "aria-pressed": Zy,
                onClick: () => {
                  Zy || (cb(yb), fy.send(`${Cb} ${bb[0]} ${bb[1]} ${bb[2]} ${Wy}`))
                },
                children: (0, mZ.jsx)(Vh.d, {
                  itemName: yb,
                  amount: 0
                })
              })
            }, yb)
          }))
        })]
      })
    }
    const jc = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function DZ(yb) {
      let {
        kind: bb,
        tier: Wy,
        coupled: Uy,
        level: hy,
        slot: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ch.D)(), Py = Iy(iW);
      if (!Uy && null !== Wy && Wy < Py) return (0, mZ.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, mZ.jsx)(Th.e, {
            name: "lock"
          })
        }), (0, mZ.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Zy("buildAFactory2Game:upgradeLocked")
        }), (0, mZ.jsx)("span", {
          className: "Baf2TierTag",
          children: Zy("buildAFactory2Game:tierTag", {
            tier: String(Py)
          })
        })]
      });
      const oy = function(yb, bb) {
          if (cb() && "Crusher" !== yb && null !== bb) {
            if (tc(Yb, bb)) return {
              item: Yb,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (tc(Mb, bb)) return {
              item: Mb,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: iW,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(bb, Wy),
        By = Zy(Uy ? jc[hy - 1] : oy.emptyKey),
        Ky = null !== Wy ? function(yb, bb, Wy, Uy) {
          if (!cb() || !Wy || "Crusher" === yb || bb < 10) return null;
          const hy = Iy(Yb);
          if (Uy < 3 && hy > 1 && (2 === Uy || bb >= hy)) return {
            tier: hy,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const fy = Iy(Mb);
          if (1 === Uy && fy > 1) return {
            tier: fy,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(bb, Wy, Uy, hy) : null;
      return (0, mZ.jsxs)("div", {
        className: Sh()("Baf2UpgradeSocket", {
          Fitted: Uy
        }),
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Uy && fy, !Uy && (0, mZ.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, mZ.jsx)(Vh.d, {
              itemName: oy.item,
              amount: 0
            })
          })]
        }), (0, mZ.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, mZ.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Zy("buildAFactory2Game:upgradeTitle")
          }), (0, mZ.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: By
          }), Uy && hy >= 2 && "Crusher" === bb && (0, mZ.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Zy("buildAFactory2Game:couplerCrusherHint")
          }), Ky && null !== Wy && Wy < Ky.tier && (0, mZ.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, mZ.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, mZ.jsx)(Th.e, {
                name: "lock"
              })
            }), Zy(Ky.lockedKey), (0, mZ.jsx)("span", {
              className: "Baf2TierTag",
              children: Zy("buildAFactory2Game:tierTag", {
                tier: String(Ky.tier)
              })
            })]
          }), Ky && null !== Wy && Wy >= Ky.tier && (0, mZ.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Zy(Ky.nextKey)
          })]
        })]
      })
    }

    function tc(yb, bb) {
      const Wy = Iy(yb);
      return Wy > 1 && bb >= Wy
    }
    var wZ = Wy(35746);
    const kc = (0, Ay.C)(Rb.Condenser, Rb.Condenser.fluidMade),
      NZ = .05;
    class zc extends EZ {}

    function IZ(yb) {
      return Kf(yb, "")
    }

    function xc(yb, bb, Wy) {
      return yb(bb ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: Wy
      })
    }

    function AZ(yb, bb, Wy, Uy) {
      return Wy <= NZ && Uy <= NZ ? null : Uy <= NZ || Wy <= NZ ? xc(yb, bb, Uy <= NZ ? Kf(Wy, "+") : Kf(Uy, "\u2212")) : yb(bb ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: IZ(Wy),
        used: IZ(Uy)
      })
    }

    function dZ(yb, bb) {
      return Math.min(100, 100 * yb / Math.max(1, bb))
    }

    function yP(yb) {
      let {
        stored: bb,
        cap: Wy,
        netPerS: Uy,
        rates: hy,
        cryo: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ch.D)(), cb = function(yb, bb, Wy, Uy) {
        return Wy <= 0 ? yb("buildAFactory2Game:waterNoStorage") : bb >= Wy ? yb("buildAFactory2Game:powerFull") : Uy > NZ ? yb("buildAFactory2Game:powerFullIn", {
          time: sf(yb, (Wy - bb) / Uy)
        }) : Uy < -.05 ? bb <= 0 ? yb("buildAFactory2Game:waterEmpty") : yb("buildAFactory2Game:powerEmptyIn", {
          time: sf(yb, bb / -Uy)
        }) : yb("buildAFactory2Game:powerSteady")
      }(Zy, bb, Wy, Uy), Py = Wy > 0 && bb < Wy && Math.abs(Uy) <= NZ, oy = Zy(fy ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), By = null !== hy ? `${hy} \xb7 ${cb}` : Py ? oy : `${oy} \xb7 ${cb}`;
      return (0, mZ.jsxs)(mZ.Fragment, {
        children: [(0, mZ.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, mZ.jsx)("div", {
            style: {
              width: `${dZ(bb,Wy)}%`
            }
          })
        }), (0, mZ.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, mZ.jsx)("span", {
            children: Wy > 0 && Zy("buildAFactory2Game:powerStored", {
              stored: (0, Ay.J)(bb),
              cap: (0, Ay.J)(Wy)
            })
          }), (0, mZ.jsx)("span", {
            className: Sh()("Baf2WaterNet", {
              Draining: Uy < -.05
            }),
            children: By
          })]
        })]
      })
    }

    function bP(yb) {
      let {
        water: bb,
        at: Wy,
        side: Uy = null
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)(), fy = uZ(), [Zy, cb, Py] = bb;
      return (0, mZ.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, mZ.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: hy(null === Uy ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Uy}`)
          }), (0, mZ.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              fy.send(`${Ay.x} ${Wy[0]} ${Wy[1]} ${Wy[2]}${"cryoOut"===Uy?" cryo":""}`)
            },
            children: hy("buildAFactory2Game:waterDetails")
          })]
        }), (0, mZ.jsx)(yP, {
          stored: Zy,
          cap: cb,
          netPerS: Py,
          rates: xc(hy, "cryoOut" === Uy, Kf(Math.abs(Py), Py < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Uy
        })]
      })
    }

    function Wc(yb, bb) {
      var Wy, Uy, hy;
      const fy = !0 === bb.baf2WaterCryo,
        Zy = null !== (Wy = null === (Uy = bb.baf2WaterMakers.find((yb => yb[0] === (fy ? Ay.e : "Condenser")))) || void 0 === Uy ? void 0 : Uy[1]) && void 0 !== Wy ? Wy : 0,
        cb = [],
        Py = (bb, Wy, Uy) => {
          bb > 0 && cb.push(yb(1 === bb ? Wy : Uy, {
            count: String(bb)
          }))
        };
      return fy ? Py(Zy, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Py(Zy, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Py(null !== (hy = bb.baf2WaterPipes) && void 0 !== hy ? hy : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Py(bb.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), cb.join(" \xb7 ")
    }

    function Uc(yb, bb) {
      if (!0 === bb.baf2WaterCryo) return function(yb, bb) {
        const Wy = Rb[Ay.e];
        switch (bb.baf2WaterThis) {
          case "pipe":
            return {
              text: yb("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: yb("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: yb("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: yb("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: yb("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: yb("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: yb("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var Uy;
            const [hy, fy] = null !== (Uy = bb.baf2WaterThisRates) && void 0 !== Uy ? Uy : [(0, Ay.C)(Wy, Wy.cryoMade), (0, Ay.C)(Wy, Wy.powerPerOp)];
            return !0 === bb.baf2WaterDriven ? {
              text: yb("buildAFactory2Game:cryoThisMixerDriven", {
                rate: IZ(hy)
              }),
              bad: !1
            } : {
              text: yb("buildAFactory2Game:cryoThisMixer", {
                rate: IZ(hy),
                power: IZ(fy)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: yb("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(yb, bb);
      const Wy = !0 === bb.baf2WaterDriven,
        Uy = Rb.Condenser;
      switch (bb.baf2WaterThis) {
        case "pipe":
          return {
            text: yb("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: yb("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: yb("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: yb("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: yb("buildAFactory2Game:waterThisTank", {
              tank: (0, Ay.J)(Ay.s),
              cap: (0, Ay.J)(bb.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var hy;
          const [fy, Zy] = null !== (hy = bb.baf2WaterThisRates) && void 0 !== hy ? hy : [kc, (0, Ay.C)(Uy, Uy.powerPerOp)];
          return Wy ? {
            text: yb("buildAFactory2Game:waterThisCondenserDriven", {
              rate: IZ(fy)
            }),
            bad: !1
          } : {
            text: yb("buildAFactory2Game:waterThisCondenser", {
              rate: IZ(fy),
              power: IZ(Zy)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: yb("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function hc(yb, bb) {
      const Wy = bb.baf2WaterMakers.some((yb => !0 === yb[5]));
      if (!0 === bb.baf2WaterCryo) {
        const Uy = bb.baf2WaterUsedPerS - bb.baf2WaterMadePerS,
          hy = Wy || Uy <= NZ ? 0 : (0, Ay.B)(Uy);
        return 0 === hy ? null : hy > 1 ? yb("buildAFactory2Game:cryoNextMixers", {
          mixers: String(hy)
        }) : yb("buildAFactory2Game:cryoNextOne")
      }
      const Uy = Wy ? null : function(yb, bb) {
        const Wy = bb - yb;
        return Wy <= NZ ? null : Math.ceil(Wy / kc)
      }(bb.baf2WaterMadePerS, bb.baf2WaterUsedPerS);
      return null === Uy ? null : Uy > 1 ? yb("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Uy)
      }) : yb("buildAFactory2Game:waterNextOne")
    }

    function fc(yb) {
      let {
        item: bb,
        label: Wy,
        note: Uy,
        value: hy,
        dim: fy,
        bad: Zy
      } = yb;
      return (0, mZ.jsxs)("li", {
        className: Sh()("Baf2WaterRow", {
          Dim: fy,
          Bad: Zy
        }),
        children: [(0, mZ.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, mZ.jsx)(Vh.d, {
            itemName: bb,
            amount: 0
          })
        }), (0, mZ.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, mZ.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: Wy
          }), Uy && (0, mZ.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Uy
          })]
        }), (0, mZ.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: hy
        })]
      })
    }

    function Zc(yb) {
      return wZ.l[yb] ? yb : "Reactor Port"
    }

    function cP(yb) {
      let {
        message: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)(), Uy = !0 === bb.baf2WaterCryo, hy = (yb, bb) => xc(Wy, Uy, Kf(yb, bb));
      return (0, mZ.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, mZ.jsxs)("section", {
          children: [(0, mZ.jsxs)("h3", {
            children: [Wy("buildAFactory2Game:waterMakes"), (0, mZ.jsx)("span", {
              children: hy(bb.baf2WaterMadePerS, "+")
            })]
          }), (0, mZ.jsxs)("ul", {
            children: [0 === bb.baf2WaterMakers.length && (0, mZ.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Wy(Uy ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), bb.baf2WaterMakers.map((yb => {
              let [bb, Uy, fy, Zy, cb, Py] = yb;
              const oy = Wy("buildAFactory2Game:powerRunning", {
                amount: String(fy)
              });
              let By = cb > 0 ? Wy("buildAFactory2Game:waterMakerPower", {
                running: oy,
                power: IZ(cb)
              }) : oy;
              return Py && (By = Wy(0 === fy && Zy <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, mZ.jsx)(fc, {
                item: bb,
                label: `${xf(Wy,bb)} \xd7${Uy}`,
                note: By,
                value: fy > 0 || Py && Zy > 0 ? hy(Zy, "+") : Wy("buildAFactory2Game:powerIdle"),
                dim: 0 === fy && !Py,
                bad: Py
              }, bb)
            }))]
          })]
        }), (0, mZ.jsxs)("section", {
          children: [(0, mZ.jsxs)("h3", {
            children: [Wy("buildAFactory2Game:waterUses"), (0, mZ.jsx)("span", {
              children: hy(bb.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, mZ.jsxs)("ul", {
            children: [0 === bb.baf2WaterUsers.length && (0, mZ.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Wy(Uy ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), bb.baf2WaterUsers.map((yb => {
              let [bb, Uy, fy, Zy] = yb;
              const cb = wZ.l[bb] ? xf(Wy, bb) : bb;
              return (0, mZ.jsx)(fc, {
                item: Zc(bb),
                label: Uy > 1 ? `${cb} \xd7${Uy}` : cb,
                note: Zy ? Wy("buildAFactory2Game:waterPortFirst") : void 0,
                value: fy > 0 ? hy(fy, "\u2212") : Wy("buildAFactory2Game:powerIdle"),
                dim: 0 === fy
              }, bb)
            }))]
          })]
        })]
      })
    }

    function Pc(yb) {
      var bb, Wy, hy, fy, Zy;
      let {
        store: cb,
        close: Py
      } = yb;
      const {
        t: oy
      } = (0, Ch.D)(), By = function(yb) {
        const [bb, Wy] = (0, Uy.useState)((() => yb.get()));
        return (0, Uy.useEffect)((() => (Wy(yb.get()), yb.subscribe((() => {
          Wy(yb.get())
        })))), [yb]), bb
      }(cb), Ky = null !== (bb = null === By || void 0 === By ? void 0 : By.baf2WaterStored) && void 0 !== bb ? bb : 0, ey = null !== (Wy = null === By || void 0 === By ? void 0 : By.baf2WaterCap) && void 0 !== Wy ? Wy : 0, qb = null !== (hy = null === By || void 0 === By ? void 0 : By.baf2WaterMadePerS) && void 0 !== hy ? hy : 0, sy = null !== (fy = null === By || void 0 === By ? void 0 : By.baf2WaterUsedPerS) && void 0 !== fy ? fy : 0, Sy = null !== (Zy = null === By || void 0 === By ? void 0 : By.baf2WaterNetPerS) && void 0 !== Zy ? Zy : qb - sy, Ey = By && Uc(oy, By), ly = By && hc(oy, By), mb = !0 === (null === By || void 0 === By ? void 0 : By.baf2WaterCryo);
      return (0, mZ.jsx)(sZ.c, {
        close: Py,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mZ.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== By && ey <= 0 ? (0, mZ.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, mZ.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, mZ.jsx)(Vh.d, {
                  itemName: mb ? cU.f : Ay.m,
                  amount: 0
                })
              }), (0, mZ.jsxs)("div", {
                children: [(0, mZ.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: oy(mb ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), By && (0, mZ.jsx)("p", {
                  children: Wc(oy, By)
                })]
              })]
            }), (0, mZ.jsx)(SZ.h, {
              onClick: Py
            })]
          }), By && Ey && (0, mZ.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, mZ.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, mZ.jsx)(yP, {
                stored: Ky,
                cap: ey,
                netPerS: Sy,
                cryo: mb,
                rates: AZ(oy, mb, qb, sy)
              })
            }), (0, mZ.jsx)("div", {
              className: Sh()("Baf2WaterThis", {
                Bad: Ey.bad
              }),
              children: Ey.text
            }), By.baf2WaterDriven && (0, mZ.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, mZ.jsx)(Th.e, {
                name: "bolt"
              }), oy(mb ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), ly && (0, mZ.jsx)("p", {
              className: "Baf2WaterNext",
              children: ly
            }), (0, mZ.jsx)(cP, {
              message: By
            })]
          })]
        })
      })
    }
    class oc {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(yb, bb) {
        const Wy = this.get(yb);
        Wy && null === bb.opLeftMs && null === bb.fuelLeftMs && bb.status === Wy.status ? bb = {
          ...bb,
          opLeftMs: Wy.opLeftMs,
          fuelLeftMs: Wy.fuelLeftMs,
          burning: Wy.burning
        } : this.updates++, this.pos = yb, this.view = bb;
        for (const Uy of this.listeners) Uy()
      }
      get(yb) {
        return null !== this.pos && this.pos[0] === yb[0] && this.pos[1] === yb[1] && this.pos[2] === yb[2] ? this.view : null
      }
      forget(yb) {
        null !== this.get(yb) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
    }

    function Bc(yb, bb, Wy, Uy) {
      return "noFuel" === bb && Uy && !xW(Rb[yb]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === bb && !0 === (null === Wy || void 0 === Wy ? void 0 : Wy.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === bb && !0 === (null === Wy || void 0 === Wy ? void 0 : Wy.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === bb && !0 === (null === Wy || void 0 === Wy ? void 0 : Wy.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === bb && !0 === (null === Wy || void 0 === Wy ? void 0 : Wy.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Kc(bb, Wy) ? "buildAFactory2Game:machineStatus_noInputShort" : function(yb, bb) {
        const Wy = Rb[yb];
        if ("noFuel" === bb && void 0 !== Wy.fuels) return xW(Wy) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (Wy.mobFarm && ("noInput" === bb || "badInput" === bb)) return `buildAFactory2Game:machineStatus_${bb}MobFarm`;
        if ("outputFull" === bb && (void 0 !== Wy.table || Wy.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === bb && pb(Wy)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== Wy.cryoMade && ("noInput" === bb || "noOutlet" === bb || "fluidFull" === bb)) return `buildAFactory2Game:machineStatus_${bb}Mixer`;
        return `buildAFactory2Game:machineStatus_${bb}`
      }(yb, bb)
    }

    function Kc(yb, bb) {
      return "noInput" === yb && null !== bb && void 0 !== bb && bb.input && bb.inputShort ? {
        input: bb.input,
        short: bb.inputShort
      } : null
    }

    function ec(yb) {
      return Eh(yb) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== yb.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function qP(yb) {
      const bb = (0, uy.oe)(yb);
      return `Baf2Pane Baf2Pane${bb.charAt(0).toUpperCase()}${bb.slice(1)}`
    }

    function sc(yb, bb) {
      const [Wy, hy] = (0, Uy.useState)((() => yb.get(bb)));
      return (0, Uy.useEffect)((() => {
        hy(yb.get(bb));
        const Wy = yb.subscribe((() => {
          hy(yb.get(bb))
        }));
        return () => {
          Wy(), yb.forget(bb)
        }
      }), [yb, ...bb]), Wy
    }

    function Sc(yb, bb, Wy, Uy) {
      const hy = Rb[yb],
        fy = bb && hy.couplable ? rW(hy, Wy) : hy,
        Zy = null !== Uy && Nb(fy) ? function(yb, bb) {
          var Wy;
          return null !== (Wy = null !== bb && Nb(yb) ? yU[bb] : void 0) && void 0 !== Wy ? Wy : yb.opMs
        }(fy, bU(Uy)) : fy.opMs;
      return Zy === fy.opMs ? fy : {
        ...fy,
        opMs: Zy
      }
    }

    function Ec(yb) {
      let {
        running: bb,
        opMs: Wy,
        opLeftMs: Uy,
        updateCount: hy
      } = yb;
      return (0, mZ.jsx)("div", {
        className: Sh()("Baf2MachineProgress", {
          Running: bb
        }),
        children: (0, mZ.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: Wy / 1e3 + "s",
            animationDelay: null === Uy ? void 0 : (Uy - Wy) / 1e3 + "s"
          }
        }, hy)
      })
    }

    function lc(yb) {
      let {
        running: bb,
        leftMs: Wy,
        periodMs: Uy,
        updateCount: hy
      } = yb;
      const {
        t: fy
      } = (0, Ch.D)(), Zy = Math.min(Math.max(null !== Wy && void 0 !== Wy ? Wy : 0, 0), Uy), cb = bb && Zy > 0, Py = fy("buildAFactory2Game:machineBarFuel");
      return (0, mZ.jsx)("div", {
        className: Sh()("Baf2FuelBurn", {
          Draining: cb
        }),
        role: "img",
        title: Py,
        "aria-label": Py,
        children: (0, mZ.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: cb ? {
            animationDuration: Uy / 1e3 + "s",
            animationDelay: (Zy - Uy) / 1e3 + "s"
          } : {
            transform: `scaleY(${Zy/Uy})`
          }
        }, hy)
      })
    }

    function mP(yb, bb, Wy) {
      let [Uy, hy] = Wy;
      const fy = 1 !== Uy ? mf(bb) : null;
      return {
        amount: Uy,
        have: hy,
        item: yb(fy || Ih(bb))
      }
    }

    function Cc(yb) {
      return Nb(yb) ? "buildAFactory2Game:machineBarMining" : zW(yb) ? "buildAFactory2Game:machineBarCutting" : void 0 !== yb.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Tc(yb) {
      var bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly, mb, Cy;
      let {
        kind: Ty,
        Dv: Vy,
        store: Jy,
        power: gb,
        renderSlot: Gy
      } = yb;
      const {
        t: Oy
      } = (0, Ch.D)(), Ry = sc(Jy, Vy), vb = Rb[Ty], ib = null !== (bb = null === Ry || void 0 === Ry ? void 0 : Ry.coupled) && void 0 !== bb && bb, My = null !== (Wy = null === Ry || void 0 === Ry ? void 0 : Ry.couplerLevel) && void 0 !== Wy ? Wy : 1, Yy = Sc(Ty, ib, My, null !== (Uy = null === Ry || void 0 === Ry || null === (hy = Ry.dug) || void 0 === hy ? void 0 : hy.item) && void 0 !== Uy ? Uy : null), Xy = null !== (fy = null === Ry || void 0 === Ry ? void 0 : Ry.status) && void 0 !== fy ? fy : null, ny = null !== (Zy = null === Ry || void 0 === Ry ? void 0 : Ry.power) && void 0 !== Zy ? Zy : null, uy = null !== (cb = null === Ry || void 0 === Ry ? void 0 : Ry.opLeftMs) && void 0 !== cb ? cb : null, rb = null !== (Py = null === Ry || void 0 === Ry ? void 0 : Ry.dug) && void 0 !== Py ? Py : null, Hy = null !== rb && Nb(vb) ? yU[null !== (oy = bU(rb.item)) && void 0 !== oy ? oy : ""] : void 0, ab = void 0 === Hy ? null : 6e4 / Hy, Fy = null !== (By = null === Ry || void 0 === Ry ? void 0 : Ry.powerCap) && void 0 !== By ? By : 4e3, py = null !== (Ky = null === Ry || void 0 === Ry ? void 0 : Ry.tier) && void 0 !== Ky ? Ky : null, Ly = void 0 !== Yy.powerMade, Qy = null !== vb.fuelSlot ? Gy(vb.fuelSlot) : null, jb = ub(vb), Dy = !ib && !0 === (null === Ry || void 0 === Ry ? void 0 : Ry.fuelFed), wy = !ib && !0 === (null === Ry || void 0 === Ry ? void 0 : Ry.fuelFeeds), kb = null !== vb.fuelSlot && !ib, Ny = null !== (ey = null === Ry || void 0 === Ry ? void 0 : Ry.fuelLeftMs) && void 0 !== ey ? ey : null, zb = function(yb, bb, Wy) {
        var Uy;
        const hy = null === bb ? void 0 : Ab[bb];
        return Math.max(null !== (Uy = null !== hy && void 0 !== hy ? hy : Wy) && void 0 !== Uy ? Uy : 0, yb.opMs)
      }(Yy, null !== (qb = null === Ry || void 0 === Ry ? void 0 : Ry.burning) && void 0 !== qb ? qb : null, Ny), Iy = null !== (sy = null === Ry || void 0 === Ry ? void 0 : Ry.fuelKeep) && void 0 !== sy ? sy : null, xb = null === Xy ? null : Bc(Ty, Xy, Ry, Dy), Ay = null === Xy ? null : Kc(Xy, Ry);
      return (0, mZ.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, mZ.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Oy(Ih(Ty))
          }), rb && (0, mZ.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [Oy("Tree Cutter" === Ty ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, mZ.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, mZ.jsx)(Vh.d, {
                itemName: rb.item,
                amount: 0
              })
            }), (0, mZ.jsx)(Jh.d, {
              text: rb.name
            })]
          }), null !== ab && (0, mZ.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: Oy("buildAFactory2Game:machineDigsFixed", {
              perMin: String(ab)
            })
          }), (null === Ry || void 0 === Ry ? void 0 : Ry.field) && (0, mZ.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, mZ.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, mZ.jsx)(Vh.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), Oy("buildAFactory2Game:machineField", {
              planted: String(Ry.field[0]),
              ripe: String(Ry.field[1])
            })]
          }), (0, mZ.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, mZ.jsxs)("div", {
              className: Sh()("Baf2MachineColumn", {
                Baf2Burns: kb
              }),
              children: [null !== Yy.inputSlot && (0, mZ.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, mZ.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Oy(ec(Yy))
                }), Gy(Yy.inputSlot)]
              }), null !== vb.fuelSlot && !ib && (0, mZ.jsxs)("div", {
                className: Sh()("Baf2MachineSlot", {
                  Baf2FuelFed: Dy
                }),
                children: [(0, mZ.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [Dy && (0, mZ.jsx)(Th.e, {
                    name: "fire"
                  }), Oy("buildAFactory2Game:machineFuel")]
                }), (0, mZ.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, mZ.jsx)(lc, {
                    running: "running" === Xy,
                    leftMs: Ny,
                    periodMs: zb,
                    updateCount: Jy.updateCount
                  }), Qy]
                })]
              }), null !== vb.fuelSlot && ib && (0, mZ.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, mZ.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Oy("buildAFactory2Game:machineFuel")
                }), (0, mZ.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: Oy("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": Oy("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, mZ.jsx)(Th.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, mZ.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, mZ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Oy(Cc(Yy))
              }), (0, mZ.jsx)(Ec, {
                running: "running" === Xy,
                opMs: Yy.opMs,
                opLeftMs: uy,
                updateCount: Jy.updateCount
              })]
            }), Yy.outputSlots.length > 0 && (0, mZ.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, mZ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Oy("buildAFactory2Game:machineOutput")
              }), (0, mZ.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Yy.outputSlots.map((yb => (0, mZ.jsx)("div", {
                  children: Gy(yb)
                }, yb)))
              })]
            }), null !== ny && Ly && (0, mZ.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, mZ.jsx)("div", {
                style: {
                  height: 100 * ny / Fy + "%"
                }
              })
            })]
          }), kb && null !== Iy && (0, mZ.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, mZ.jsx)(Th.e, {
              name: "arrows-rotate"
            }), Oy(zW(Yy) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Iy)
            })]
          }), (Dy || wy) && (0, mZ.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, mZ.jsx)(Th.e, {
              name: "fire"
            }), Oy(Dy ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), vb.couplable && (0, mZ.jsx)(DZ, {
            kind: Ty,
            tier: py,
            coupled: ib,
            level: My,
            slot: jb === vb.fuelSlot ? Qy : null !== jb ? Gy(jb) : null
          }), null !== ny && !Ly && !0 === (null === Ry || void 0 === Ry ? void 0 : Ry.reactorPowered) && (0, mZ.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: Oy("buildAFactory2Game:machineReactorPowered")
          }), null !== ny && !Ly && !0 !== (null === Ry || void 0 === Ry ? void 0 : Ry.reactorPowered) && (0, mZ.jsx)(JZ, {
            stored: ny,
            cap: Fy,
            rates: null !== (Sy = null === Ry || void 0 === Ry ? void 0 : Ry.powerRates) && void 0 !== Sy ? Sy : null
          }), (null === Ry || void 0 === Ry ? void 0 : Ry.water) && (0, mZ.jsx)(bP, {
            water: Ry.water,
            at: Vy,
            side: Ry.cryo ? "waterIn" : null
          }), (null === Ry || void 0 === Ry ? void 0 : Ry.cryo) && (0, mZ.jsx)(bP, {
            water: Ry.cryo,
            at: Vy,
            side: "cryoOut"
          }), null !== Ry && void 0 !== Ry && Ry.inertCoupler ? (0, mZ.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: Oy("buildAFactory2Game:machineStatus_couplerOff", {
              item: xf(Oy, Ry.inertCoupler)
            })
          }) : null !== xb && (0, mZ.jsx)("div", {
            className: Sh()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Xy
            }),
            children: Oy(xb, Ay ? mP(Oy, Ay.input, Ay.short) : void 0)
          })]
        }), (0, mZ.jsxs)("div", {
          className: Sh()("Baf2MachineSide", {
            Baf2SynthSide: pb(vb)
          }),
          children: [pb(vb) && (0, mZ.jsx)(QZ, {
            Dv: Vy,
            taught: null !== (Ey = null === Ry || void 0 === Ry ? void 0 : Ry.taught) && void 0 !== Ey ? Ey : null
          }, Vy.join(",")), Ly && (0, mZ.jsx)(GZ, {
            kind: Ty,
            def: Yy,
            Dv: Vy,
            power: gb,
            stored: null !== ny && void 0 !== ny ? ny : 0,
            cap: Fy
          }), tb(vb) && (0, mZ.jsx)(FZ, {
            Dv: Vy,
            input: null !== (ly = null === Ry || void 0 === Ry ? void 0 : Ry.input) && void 0 !== ly ? ly : null,
            drops: null !== (mb = null === Ry || void 0 === Ry ? void 0 : Ry.farm) && void 0 !== mb ? mb : null,
            seconds: String(Yy.opMs / 1e3)
          }), !Ly && !tb(vb) && !pb(vb) && (0, mZ.jsx)(If, {
            kind: Ty,
            def: Yy,
            input: null !== (Cy = null === Ry || void 0 === Ry ? void 0 : Ry.input) && void 0 !== Cy ? Cy : null,
            tier: null !== py && void 0 !== py ? py : 1,
            noSeeds: !0 === (null === Ry || void 0 === Ry ? void 0 : Ry.noSeeds)
          })]
        })]
      })
    }

    function Vc(yb, bb, Wy, Uy) {
      var hy;
      const fy = Rb[yb],
        Zy = [fy.inputSlot, fy.fuelSlot, ...null !== (hy = fy.inputSlots) && void 0 !== hy ? hy : []].filter((yb => null !== yb));
      return {
        render: hy => {
          let {
            Dv: fy,
            renderSlot: Zy
          } = hy;
          return (0, mZ.jsx)(nZ.Provider, {
            value: Uy,
            children: (0, mZ.jsx)(Tc, {
              kind: yb,
              Dv: fy,
              store: bb,
              power: Wy,
              renderSlot: Zy
            })
          })
        },
        quickMoveRange: Zy.length > 0 ? [Math.min(...Zy), Math.max(...Zy) + 1] : [0, 0],
        className: qP(yb)
      }
    }
    const Jc = "Assembler";

    function gP(yb) {
      var bb, Wy, Uy, hy, fy, Zy, cb, Py, oy;
      let {
        Dv: By,
        store: Ky,
        renderSlot: ey
      } = yb;
      const {
        t: qb
      } = (0, Ch.D)(), sy = sc(Ky, By), Sy = null !== (bb = null === sy || void 0 === sy ? void 0 : sy.tier) && void 0 !== bb ? bb : 1, Ey = null !== (Wy = null === sy || void 0 === sy ? void 0 : sy.taught) && void 0 !== Wy ? Wy : null, ly = Db(Jc, {
        coupled: !1,
        taught: Ey
      }), mb = null !== (Uy = ly.bench) && void 0 !== Uy ? Uy : null, Cy = null !== (hy = null === sy || void 0 === sy ? void 0 : sy.status) && void 0 !== hy ? hy : null, Ty = null !== (fy = null === sy || void 0 === sy ? void 0 : sy.power) && void 0 !== fy ? fy : null, Vy = null !== (Zy = null === sy || void 0 === sy ? void 0 : sy.powerCap) && void 0 !== Zy ? Zy : 4e3;
      return (0, mZ.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, mZ.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: qb(Ih(Jc))
          }), mb && (0, mZ.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [qb("buildAFactory2Game:benchMakes"), (0, mZ.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, mZ.jsx)(Vh.d, {
                itemName: mb.output,
                amount: 0
              })
            }), (null === sy || void 0 === sy ? void 0 : sy.taughtName) && (0, mZ.jsx)(Jh.d, {
              text: sy.taughtName
            }), mb.outputAmount > 1 && (0, mZ.jsxs)("span", {
              children: ["\xd7", mb.outputAmount]
            })]
          }), !mb && (0, mZ.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: qb("buildAFactory2Game:benchTeachHint")
          }), (0, mZ.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, mZ.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (cb = ly.inputSlots) && void 0 !== cb ? cb : []).map(((yb, bb) => {
                const Wy = null === mb || void 0 === mb ? void 0 : mb.inputs[bb];
                return (0, mZ.jsxs)("div", {
                  className: Sh()("Baf2BenchInput", {
                    Spare: !Wy
                  }),
                  children: [(0, mZ.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [ey(yb), Wy && (0, mZ.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, mZ.jsx)(Vh.d, {
                        itemName: Wy.item,
                        amount: 0
                      })
                    })]
                  }), (0, mZ.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: Wy ? `\xd7${Wy.amount}` : "\xa0"
                  })]
                }, yb)
              }))
            }), (0, mZ.jsx)(Ec, {
              running: "running" === Cy,
              opMs: ly.opMs,
              opLeftMs: null !== (Py = null === sy || void 0 === sy ? void 0 : sy.opLeftMs) && void 0 !== Py ? Py : null,
              updateCount: Ky.updateCount
            }), (0, mZ.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, mZ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: qb("buildAFactory2Game:machineOutput")
              }), (0, mZ.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: ly.outputSlots.map((yb => (0, mZ.jsx)("div", {
                  children: ey(yb)
                }, yb)))
              })]
            })]
          }), null !== Ty && (0, mZ.jsx)(JZ, {
            stored: Ty,
            cap: Vy,
            rates: null !== (oy = null === sy || void 0 === sy ? void 0 : sy.powerRates) && void 0 !== oy ? oy : null
          }), null !== Cy && (0, mZ.jsx)("div", {
            className: Sh()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Cy
            }),
            children: qb(Bc(Jc, Cy, sy, !1))
          }), mb && mb.inputs.length > 1 && (0, mZ.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: qb("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, mZ.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, mZ.jsx)(Af, {
            taught: Ey,
            tier: Sy
          }), mb && (0, mZ.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: qb("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Gc(yb) {
      var bb;
      const Wy = null !== (bb = Rb[Jc].inputSlots) && void 0 !== bb ? bb : [];
      return {
        render: bb => {
          let {
            Dv: Wy,
            renderSlot: Uy
          } = bb;
          return (0, mZ.jsx)(gP, {
            Dv: Wy,
            store: yb,
            renderSlot: Uy
          })
        },
        quickMoveRange: [Math.min(...Wy), Math.max(...Wy) + 1],
        className: qP(Jc)
      }
    }
    var Oc = Wy(94),
      Rc = Wy(980),
      vP = Wy(3525);
    const iP = 600,
      Mc = .5,
      Yc = 4,
      Xc = 1200,
      nc = 140,
      uc = 100,
      rP = 32,
      Hc = 16,
      aP = 100.5,
      Fc = 90,
      pc = 1.5,
      Lc = 50;

    function Qc(yb) {
      switch (gU(yb)) {
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
    const jP = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Dc(yb) {
      const bb = Math.ceil(60 * yb / uc);
      return {
        fuel: Math.max(rP, bb),
        waste: Math.max(Hc, bb)
      }
    }

    function tP(yb, bb, Wy) {
      const [Uy, hy, fy] = [yb - 2, bb - 2, Wy - 2];
      return 2 * (Uy * hy + hy * fy + fy * Uy) * nc
    }

    function wc(yb, bb, Wy) {
      return Math.max(0, yb - 2) * Math.max(0, bb - 2) * Math.max(0, Wy - 2)
    }

    function kP(yb, bb) {
      const [Wy, Uy, hy] = yb, fy = Wy * Uy * hy, Zy = new Float32Array(fy);
      let cb = 0,
        Py = 0,
        oy = 0,
        By = 0,
        Ky = 0;
      const ey = (yb, fy, Zy) => yb < 0 || yb >= Wy || fy < 0 || fy >= Uy || Zy < 0 || Zy >= hy ? 0 : bb[(fy * hy + Zy) * Wy + yb];
      for (let Ey = 0; Ey < Uy; Ey++)
        for (let yb = 0; yb < hy; yb++)
          for (let Uy = 0; Uy < Wy; Uy++) {
            const fy = (Ey * hy + yb) * Wy + Uy,
              qb = bb[fy];
            if (1 === qb) {
              cb++;
              let bb = 0;
              for (const [Wy, hy, fy] of jP) {
                const Zy = ey(Uy + Wy, Ey + hy, yb + fy);
                1 !== Zy && 2 !== Zy || bb++
              }
              Zy[fy] = iP * (1 + Mc * Math.min(bb, Yc)), By += Zy[fy]
            } else if (2 === qb) Py++;
            else if (3 === qb) {
              oy++;
              jP.some((bb => {
                let [Wy, hy, fy] = bb;
                return 1 === ey(Uy + Wy, Ey + hy, yb + fy)
              })) && (Ky += Xc)
            }
          }
      const qb = tP(Wy + 2, Uy + 2, hy + 2),
        sy = Math.min(By, Ky, qb),
        Sy = cb > 0 ? By * uc / cb : 0;
      return {
        rods: cb,
        graphite: Py,
        channels: oy,
        fuelHeat: By,
        cooling: Ky,
        size: qb,
        max: sy,
        vol: fy,
        powerPerUnit: Sy,
        pelletsPerMin: Sy > 0 ? sy / Sy * 60 : 0,
        waterPerS: sy * Ay.q,
        rodHeat: Zy
      }
    }
    const Nc = 0,
      zP = 1,
      Ic = 6,
      xP = 7,
      Ac = 8;

    function dc(yb, bb) {
      const [Wy, Uy, hy] = yb, fy = new Uint8Array(Wy * Uy * hy), Zy = (yb, fy, Zy) => yb < 0 || yb >= Wy || fy < 0 || fy >= Uy || Zy < 0 || Zy >= hy ? 0 : bb[(fy * hy + Zy) * Wy + yb];
      for (let cb = 0; cb < Uy; cb++)
        for (let yb = 0; yb < hy; yb++)
          for (let Uy = 0; Uy < Wy; Uy++) {
            const Py = (cb * hy + yb) * Wy + Uy,
              oy = bb[Py];
            if (1 === oy) {
              let bb = 0;
              for (const [Wy, hy, fy] of jP) {
                const Py = Zy(Uy + Wy, cb + hy, yb + fy);
                bb += 1 === Py || 2 === Py ? 1 : 0
              }
              fy[Py] = zP + Math.min(bb, Yc)
            } else if (3 === oy) {
              const bb = jP.some((bb => {
                let [Wy, hy, fy] = bb;
                return 1 === Zy(Uy + Wy, cb + hy, yb + fy)
              }));
              fy[Py] = bb ? Ic : xP
            } else 2 === oy && (fy[Py] = Ac)
          }
      return fy
    }

    function yo(yb) {
      return yb.fuelHeat <= yb.cooling && yb.fuelHeat <= yb.size ? "fuel" : yb.cooling <= yb.size ? "cooling" : "size"
    }
    const bo = Fc;

    function WP(yb, bb, Wy) {
      return Math.round(yb * bb * Wy * 25e3 * (1 + .25 * (Math.min(yb, bb, Wy) - 2)))
    }

    function UP(yb) {
      return Math.max(0, Math.min(Ay.f, yb))
    }

    function hP(yb, bb, Wy) {
      const Uy = bb * UP(Wy);
      return yb <= 0 ? 0 : Uy > 0 ? Math.min(200, 100 * yb / Uy) : 200
    }

    function fP(yb, bb) {
      const Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? pc : 1;
      return Math.min(yb.fuelHeat * Wy, yb.cooling * UP(bb), yb.size * Wy)
    }

    function ZP(yb) {
      return 2 + yb / 10
    }
    const co = "buildAFactory2Game:";

    function PP(yb) {
      var bb;
      return null !== (bb = yb.baf2RxMood) && void 0 !== bb ? bb : function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const Wy = [
          ["calm", 50],
          ["warm", bo],
          ["hot", aP]
        ];
        for (const [Uy, hy] of Wy)
          if (yb < hy + (Uy === bb ? 3 : 0)) return Uy;
        return "alarm"
      }(yb.baf2RxHeat)
    }
    const oP = 120;

    function BP(yb) {
      const bb = yb.baf2RxState;
      if ("running" === bb && yb.baf2RxHeat > aP) return {
        label: `${co}rxState_tooHot`,
        tone: "bad",
        fix: `${co}rxFix_tooHot`
      };
      switch (bb) {
        case "running":
          return {
            label: `${co}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${co}rxState_idle`, tone: "off", fix: `${co}rxFix_idle`
          };
        case "scram":
          return {
            label: `${co}rxState_scram`, tone: "off", fix: yb.baf2RxHeat < Lc ? `${co}rxFix_scramCool` : `${co}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${co}rxState_${bb}`, tone: "off", fix: `${co}rxFix_${bb}`
          };
        case "melted":
          return {
            label: `${co}rxState_melted`, tone: "bad", fix: `${co}rxFix_melted`
          };
        default:
          return {
            label: `${co}rxState_${bb}`, tone: "warn", fix: `${co}rxFix_${bb}`
          }
      }
    }

    function KP(yb) {
      const [bb, Wy, Uy] = yb.baf2RxStats;
      return {
        fuelHeat: bb,
        cooling: Wy * (yb.baf2RxCryo ? Math.max(1, UP(yb.baf2RxWater / 100)) : 1),
        size: Uy
      }
    }

    function eP(yb) {
      var bb;
      const Wy = "idle" === yb.baf2RxState || "running" === yb.baf2RxState && yb.baf2RxHeat <= aP || "scram" === yb.baf2RxState && yb.baf2RxHeat < Lc;
      if (0 === (yb.baf2RxFlags & qW) || !yb.baf2RxFormed || !Wy) return null;
      const {
        fuelHeat: Uy,
        cooling: hy,
        size: fy
      } = KP(yb), Zy = Math.min(Uy, hy, fy), cb = yo({
        fuelHeat: Uy,
        cooling: hy,
        size: fy
      }), Py = "cooling" === cb && !0 === yb.baf2RxCryoOpen && !yb.baf2RxCryo, oy = null !== (bb = yb.baf2RxCells) && void 0 !== bb ? bb : "", By = ("fuel" === cb || "cooling" === cb && !0 === yb.baf2RxCryo) && oy.length > 0 && !oy.includes(String(0)), Ky = Py ? "Cryo" : "scram" === yb.baf2RxState ? "Off" : "";
      return Zy < 12e3 ? {
        key: `${co}rxGrow_${By?"full":cb}${Ky}`,
        amount: Zy
      } : null
    }

    function qo(yb, bb) {
      return yb[0] === bb[0] && yb[1] === bb[1] && yb[2] === bb[2]
    }

    function sP(yb) {
      return [...yb].sort(((yb, bb) => Number(bb[2] < bb[1]) - Number(yb[2] < yb[1])))
    }

    function SP(yb, bb) {
      return bb.some((bb => {
        let [Wy, Uy] = bb;
        return !(Uy <= 0) && ["edge", "cap", "wall", "inside"].some((bb => Wy === AW(yb, bb)))
      }))
    }

    function EP(yb, bb, Wy) {
      const Uy = yb.baf2RxFuel - yb.baf2RxPu > 0 ? Wy : 0;
      return {
        full: yb.baf2RxWaste > bb - 3,
        fullInS: Uy > 0 ? Math.max(0, bb - yb.baf2RxWaste) / Uy : null
      }
    }
    const lP = {
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

    function mo(yb) {
      return CP[yb]
    }
    const CP = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function TP(yb) {
      let [bb, Wy, Uy] = yb;
      return Math.ceil(tP(bb, Wy, Uy) * Ay.q)
    }

    function VP(yb, bb) {
      return "battery" === yb ? bb[0] * bb[1] * bb[2] : function(yb) {
        let [bb, Wy, Uy] = yb;
        return bb * Wy * Uy - Math.max(0, bb - 2) * Math.max(0, Wy - 2) * Math.max(0, Uy - 2)
      }(bb) - 1
    }

    function JP(yb) {
      const bb = Math.max(0, yb);
      if (bb < 10) return String(Math.round(10 * bb) / 10);
      if (bb < 1e4) return Math.round(bb).toLocaleString("en-US");
      if (bb < 1e6) return `${bb<1e5?(Math.floor(bb/100)/10).toFixed(1):Math.floor(bb/1e3)}k`;
      const Wy = bb / 1e6;
      return `${Wy<10?(Math.floor(100*Wy)/100).toFixed(2):Wy<100?(Math.floor(10*Wy)/10).toFixed(1):Math.floor(Wy)}M`
    }

    function go(yb) {
      return yb <= 0 ? "0" : yb >= 10 ? String(Math.round(yb)) : yb.toFixed(yb >= 1 ? 1 : 2)
    }

    function GP(yb) {
      const bb = tU(yb, 0),
        Wy = tU(yb, LW(yb) - 1);
      return {
        lo: [Math.min(bb[0], Wy[0]), Math.min(bb[1], Wy[1]), Math.min(bb[2], Wy[2])],
        hi: [Math.max(bb[0], Wy[0]) + 1, Math.max(bb[1], Wy[1]) + 1, Math.max(bb[2], Wy[2]) + 1]
      }
    }

    function OP(yb, bb, Wy) {
      const Uy = [bb[0] - yb[0], bb[1] - yb[1], bb[2] - yb[2]],
        hy = [(yb[0] + bb[0]) / 2, (yb[1] + bb[1]) / 2, (yb[2] + bb[2]) / 2],
        fy = [];
      for (let Zy = 0; Zy < 3; Zy++) {
        const cb = (Zy + 1) % 3,
          Py = (Zy + 2) % 3;
        for (const oy of [yb[cb], bb[cb]])
          for (const By of [yb[Py], bb[Py]]) {
            const yb = [0, 0, 0],
              bb = [Wy, Wy, Wy];
            yb[Zy] = hy[Zy], bb[Zy] = Uy[Zy] + Wy, yb[cb] = oy, yb[Py] = By, fy.push([yb, bb])
          }
      }
      return fy
    }
    const RP = "buildAFactory2Game:",
      vo = [`${RP}colNorth`, `${RP}colEast`, `${RP}colSouth`, `${RP}colWest`];

    function io(yb, bb) {
      const [Wy, Uy, hy] = yb.baf2ColAt;
      return `baf2col ${Wy} ${Uy} ${hy} ${bb}`
    }

    function MP(yb) {
      return function(yb) {
        if (!Number.isFinite(yb)) return "";
        const bb = Math.max(1, Math.round(yb));
        if (bb < 60) return `${bb}s`;
        const Wy = bb % 60;
        return 0 === Wy ? bb / 60 + "m" : `${Math.floor(bb/60)}m ${Wy}s`
      }(function(yb) {
        const bb = dW.FOCUS_BY_LASERS[Math.max(0, Math.min(4, yb))];
        return bb > 0 ? dW.NOVA_FOCUS / bb : 1 / 0
      }(yb))
    }

    function YP(yb) {
      const bb = Math.abs(Math.round(yb));
      return bb < 1e3 ? Math.round(yb).toLocaleString("en-US") : bb < 1e6 ? `${bb<1e5?(yb/1e3).toFixed(1).replace(/\.0$/,""):Math.round(yb/1e3)}k` : `${(yb/1e6).toFixed(bb<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function XP(yb, bb, Wy) {
      if (fU(bb) >= 0) {
        const bb = function(yb, bb) {
          return yb.find((yb => {
            let {
              focus: Wy
            } = yb;
            return Wy[0] === bb[0] && Wy[2] === bb[2] && (bb[1] === Wy[1] || bb[1] === Wy[1] - 1)
          }))
        }(yb, Wy);
        if (!bb) return null;
        const hy = function(yb) {
          let bb = 0,
            Wy = 0;
          for (let Uy = 0; Uy < 4; Uy++) bb += yb.laser[Uy] ? 1 : 0, Wy += yb.live[Uy] ? 1 : 0;
          return {
            lasers: bb,
            live: Wy,
            focusPerS: dW.FOCUS_BY_LASERS[Wy],
            drawPerS: dW.LASER_DRAW * Wy
          }
        }({
          laser: bb.lasers,
          live: bb.live
        });
        if (0 === hy.lasers || "noLasers" === bb.state) return {
          key: `${RP}lookColNoLasers`
        };
        if (0 === hy.live) return {
          key: `${RP}lookColOff_blocked`
        };
        if (!(bb.on && hy.live > 0) && ("running" !== (Uy = bb.state) && "slowed" !== Uy)) return {
          key: `${RP}lookColOff_${bb.state}`
        };
        if (hy.live < hy.lasers) return {
          key: `${RP}lookColLasersSome`,
          params: {
            lasers: String(hy.lasers),
            live: String(hy.live)
          }
        };
        const fy = bb.open.filter(Boolean).length;
        return fy < 4 ? {
          key: `${RP}lookColLasersSpots`,
          params: {
            live: String(hy.live),
            spots: String(fy),
            time: MP(hy.live)
          }
        } : {
          key: `${RP}lookColLasers`,
          params: {
            live: String(hy.live),
            time: MP(hy.live)
          }
        }
      }
      var Uy;
      if (!ZU(bb)) return null;
      const hy = function(yb, bb) {
        for (const Wy of yb) {
          const yb = BU(Wy.focus, [bb[0], bb[1], bb[2]]);
          if (yb && yb.yb === dW.LASER_D && Wy.lasers[yb.dir]) return {
            entry: Wy,
            dir: yb.dir
          }
        }
        return null
      }(yb, Wy);
      if (!hy) return {
        key: `${RP}lookLaserNoCollider`
      };
      const {
        entry: fy,
        dir: Zy
      } = hy;
      return fy.open[Zy] ? fy.live[Zy] ? {
        key: fy.on ? `${RP}lookLaserFiring` : `${RP}lookLaserReady`
      } : {
        key: `${RP}lookLaserBlocked`
      } : {
        key: `${RP}lookLaserClosed`
      }
    }

    function nP(yb, bb) {
      const Wy = [];
      for (let Uy = 1; Uy < dW.LASER_D; Uy++) yb & 1 << bb * (dW.LASER_D - 1) + Uy - 1 && Wy.push(Uy);
      return Wy
    }
    const uP = {
      firing: `${RP}colSlotFiring`,
      ready: `${RP}colSlotReady`,
      blocked: `${RP}colSlotBlocked`,
      empty: `${RP}colSlotEmpty`,
      closed: `${RP}colSlotClosed`
    };

    function ro(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const fy = AU(yb),
        Zy = AU(bb),
        cb = AU(Wy),
        Py = cb.filter(Boolean).length,
        oy = fy.filter(Boolean).length,
        By = [0, 1, 2, 3].map((yb => Zy[yb] ? fy[yb] ? cb[yb] ? Uy ? "firing" : "ready" : "blocked" : (yb => nP(hy, yb).length > 0)(yb) ? "blocked" : "empty" : "closed")),
        Ky = By.indexOf("blocked"),
        ey = Ky < 0 && oy > 0 ? By.indexOf("empty") : -1;
      return By.map(((yb, bb) => {
        const Wy = bb === Ky ? {
          key: `${RP}colSlotClear`
        } : bb === ey ? {
          key: `${RP}colSlotAdd`,
          params: {
            time: MP(Math.min(4, Py + 1))
          }
        } : null;
        return {
          dir: bb,
          tone: yb,
          title: {
            key: "blocked" !== yb || fy[bb] ? uP[yb] : `${RP}colSlotGap`,
            keys: {
              dir: vo[bb]
            }
          },
          hint: Wy
        }
      }))
    }

    function HP(yb) {
      var bb;
      return "noPower" === yb.baf2ColState && yb.baf2ColRxState ? BP({
        baf2RxState: yb.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (bb = yb.baf2ColRxHeat) && void 0 !== bb ? bb : 0
      }) : null
    }

    function ao(yb) {
      const bb = AU(yb.baf2ColSpots).filter(Boolean).length,
        Wy = AU(yb.baf2ColLive);
      let Uy = 0,
        hy = 0;
      return AU(yb.baf2ColLasers).forEach(((yb, bb) => {
        yb && (Uy++, hy += Wy[bb] ? 0 : 1)
      })), hy > 0 ? {
        key: `${RP}colSubSome`,
        params: {
          blocked: String(hy),
          lasers: String(Uy)
        }
      } : bb < 4 ? {
        key: `${RP}colSubSpots`,
        params: {
          lasers: String(Uy),
          spots: String(bb)
        }
      } : {
        key: `${RP}colSub`,
        params: {
          lasers: String(Uy)
        }
      }
    }

    function FP(yb) {
      const bb = HP(yb);
      if ("idle" === yb.baf2ColRxState && bb) return {
        key: `${RP}colState_noPowerIdle`
      };
      if (bb) return {
        key: `${RP}colState_noPowerReactor`,
        keys: {
          state: bb.label
        }
      };
      if ("noInput" !== yb.baf2ColState) return {
        key: `${RP}colState_${yb.baf2ColState}`
      };
      const Wy = String(Math.max(0, dW.NOVA_SA - yb.baf2ColSa)),
        Uy = String(Math.max(0, dW.NOVA_GD - yb.baf2ColGd));
      return "0" !== Wy && "0" !== Uy ? {
        key: `${RP}colState_noInput`,
        params: {
          sa: Wy,
          gd: Uy
        }
      } : "0" !== Wy ? {
        key: `${RP}colState_noStarAlloy`,
        params: {
          sa: Wy
        }
      } : "0" !== Uy ? {
        key: `${RP}colState_noGlowDust`,
        params: {
          gd: Uy
        }
      } : {
        key: `${RP}colState_running`
      }
    }

    function pP(yb) {
      return yb.baf2ColP < 0 ? `${RP}colNext` : function(yb) {
        const bb = yb.baf2ColState;
        return yb.baf2ColP >= 0 && ("blocked" === bb || "noLasers" === bb || "noPower" === bb)
      }(yb) ? `${RP}colStalled` : null === LP(yb) ? `${RP}colMaking` : `${RP}colNovaIn`
    }

    function LP(yb) {
      if (yb.baf2ColP < 0 || yb.baf2ColWant <= 0) return null;
      const bb = yb.baf2ColFocusPerS * Math.min(1, yb.baf2ColDraw / yb.baf2ColWant);
      return bb > 0 ? Math.max(0, dW.NOVA_FOCUS - yb.baf2ColP) / bb : null
    }

    function QP(yb, bb) {
      const Wy = [];
      for (let Uy = 1; Uy <= 3; Uy++) {
        const hy = [yb[0], yb[1] - Uy, yb[2]];
        if (!bb(hy)) return Wy;
        Wy.push(hy)
      }
      return []
    }

    function jo(yb, bb) {
      const Wy = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Uy = 0; Uy < 4; Uy++) {
        const hy = Uy,
          fy = oU(yb.focus, hy, dW.LASER_D);
        if (yb.lasers[Uy] || !yb.open[Uy] || !bb(fy)) continue;
        const Zy = [];
        for (let Wy = 1; Wy < dW.LASER_D; Wy++) {
          const Uy = oU(yb.focus, hy, Wy);
          bb(Uy) || Zy.push(Uy)
        }
        Wy.supports.push(...QP(fy, bb)), 0 === Zy.length ? Wy.free.push(fy) : (Wy.blocked.push(fy), Wy.gaps.push(...Zy))
      }
      return Wy
    }
    const DP = dW.LASER_D - .25,
      to = 4,
      wP = 2,
      ko = 16;
    const NP = {
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
        blendMode: vP.e.Standard,
        soft: !0
      },
      zo = {
        green: NP,
        pink: {
          ...NP,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function IP(yb, bb) {
      const Wy = {
        ...bb.params
      };
      for (const [hy, fy] of Object.entries(null !== (Uy = bb.keys) && void 0 !== Uy ? Uy : {})) {
        var Uy;
        Wy[hy] = yb(fy)
      }
      return Wy
    }
    const xo = "buildAFactory2Game:",
      AP = 2 * dW.LASER_D + 1,
      dP = dW.LASER_D;

    function yB(yb) {
      return yb(`${xo}colFocusTip`, {
        need: YP(dW.NOVA_FOCUS)
      })
    }

    function bB(yb, bb) {
      return yb(bb.key, IP(yb, bb))
    }

    function Wo(yb) {
      const bb = yb.getStatus();
      return {
        status: bb,
        entry: bb ? yb.entryAtRoot(bb.baf2ColAt) : void 0
      }
    }

    function Uo(yb, bb) {
      return {
        left: 100 * (dP + yb) / AP + "%",
        top: 100 * (dP + bb) / AP + "%"
      }
    }

    function ho(yb) {
      let {
        status: bb,
        entry: Wy
      } = yb;
      const Uy = AU(bb.baf2ColLasers),
        hy = AU(bb.baf2ColSpots),
        fy = AU(bb.baf2ColLive),
        Zy = !0 === (null === Wy || void 0 === Wy ? void 0 : Wy.on),
        cb = dW.LASER_D,
        Py = [];
      for (let qb = 0; qb < 4; qb++) {
        const [yb, , bb] = PU[qb];
        if (fy[qb]) {
          const Wy = 100 * (cb - 1) / AP,
            Uy = yb + bb > 0 ? 100 * (dP + 1) / AP : 100 * (dP - (cb - 1)) / AP,
            hy = 100 * (dP + .35) / AP,
            fy = 30 / AP,
            oy = 0 !== yb ? {
              left: `${Uy}%`,
              width: `${Wy}%`,
              top: `${hy}%`,
              height: `${fy}%`
            } : {
              top: `${Uy}%`,
              height: `${Wy}%`,
              left: `${hy}%`,
              width: `${fy}%`
            };
          Py.push((0, mZ.jsx)("i", {
            className: Sh()("Baf2ColDiagramBeam", {
              Off: !Zy
            }),
            style: oy
          }, `beam${qb}`))
        }
        const Wy = Uy[qb] ? "Baf2ColDiagramLaser" : hy[qb] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Py.push((0, mZ.jsx)("i", {
          className: Wy,
          style: Uo(yb * cb, bb * cb)
        }, `spot${qb}`))
      }
      for (let qb = 0; qb < 4; qb++) {
        if (Uy[qb] || !hy[qb]) continue;
        const [yb, , Wy] = PU[qb];
        for (const Uy of nP(null !== (oy = bb.baf2ColGaps) && void 0 !== oy ? oy : 0, qb)) {
          var oy;
          Py.push((0, mZ.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Uo(yb * Uy, Wy * Uy)
          }, `gap${qb},${Uy}`))
        }
      }
      for (const [qb, , sy] of null !== (By = null === Wy || void 0 === Wy ? void 0 : Wy.blockers) && void 0 !== By ? By : []) {
        var By, Ky, ey;
        const yb = qb - (null !== (Ky = null === Wy || void 0 === Wy ? void 0 : Wy.focus[0]) && void 0 !== Ky ? Ky : 0),
          bb = sy - (null !== (ey = null === Wy || void 0 === Wy ? void 0 : Wy.focus[2]) && void 0 !== ey ? ey : 0);
        Py.push((0, mZ.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Uo(yb, bb)
        }, `block${yb},${bb}`))
      }
      return (0, mZ.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Py, (0, mZ.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function fo(yb) {
      let {
        status: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)(), Uy = AU(bb.baf2ColLive).filter(Boolean).length;
      return (0, mZ.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: yB(Wy),
          children: Wy(`${xo}colLadder`)
        }), (0, mZ.jsx)("ul", {
          children: [1, 2, 3, 4].map((yb => (0, mZ.jsx)("li", {
            className: Sh()({
              On: yb === Uy
            }),
            children: Wy(`${xo}colLadderChip`, {
              lasers: String(yb),
              time: MP(yb)
            })
          }, yb)))
        })]
      })
    }

    function Zo(yb) {
      let {
        item: bb,
        kW: Wy,
        need: Uy,
        cap: hy
      } = yb;
      const {
        t: fy
      } = (0, Ch.D)(), Zy = Math.min(Wy, Uy);
      return (0, mZ.jsxs)("li", {
        className: Sh()("Baf2ColTile", {
          Short: Wy < Uy
        }),
        children: [(0, mZ.jsx)(cB, {
          item: bb
        }), (0, mZ.jsx)("b", {
          className: "Baf2ColTileValue",
          children: fy(`${xo}colOutOf`, {
            amount: String(Zy),
            cap: String(Uy)
          })
        }), (0, mZ.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, mZ.jsx)("i", {
            style: {
              width: 100 * Zy / Uy + "%"
            }
          })
        }), Wy > Uy && (0, mZ.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: fy(`${xo}colIntakeHeld`, {
            amount: String(Wy),
            cap: String(hy)
          })
        })]
      })
    }

    function cB(yb) {
      let {
        item: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)();
      return (0, mZ.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, mZ.jsx)(Vh.d, {
            itemName: bb,
            amount: 0
          })
        }), (0, mZ.jsx)("span", {
          className: "Baf2ColTileName",
          children: xf(Wy, bb)
        })]
      })
    }

    function Po(yb) {
      switch (yb.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function oo(yb) {
      var bb, Wy, hy;
      let {
        store: fy,
        close: Zy
      } = yb;
      const {
        t: cb
      } = (0, Ch.D)(), Py = uZ(), {
        status: oy,
        entry: By
      } = function(yb) {
        const [bb, Wy] = (0, Uy.useState)((() => Wo(yb)));
        return (0, Uy.useEffect)((() => (Wy(Wo(yb)), yb.subscribe((() => {
          Wy(Wo(yb))
        })))), [yb]), bb
      }(fy), [Ky, ey] = (0, Uy.useState)(null), qb = null === oy || void 0 === oy ? void 0 : oy.baf2ColHold;
      (0, Uy.useEffect)((() => {
        ey(null)
      }), [qb]);
      const sy = (0, Uy.useRef)({
          p: -1,
          n: 0
        }),
        Sy = null !== (bb = null === oy || void 0 === oy ? void 0 : oy.baf2ColP) && void 0 !== bb ? bb : -1;
      Sy < sy.current.p && sy.current.n++, sy.current.p = Sy;
      const Ey = (0, Uy.useRef)(null),
        [ly] = (0, Uy.useState)((() => {
          return (yb = fy.heldAtOpen()) === WU || yb === UU ? {
            key: `${RP}colBeltItIn`,
            item: yb
          } : null;
          var yb
        }));
      if (!oy) return null;
      const mb = oy.baf2ColMember,
        Cy = oy.baf2ColP >= 0,
        Ty = function(yb, bb) {
          if (yb.baf2ColP >= 0 && yb.baf2ColDraw > 0) {
            const bb = yb.baf2ColWant > 0 ? Math.min(1, yb.baf2ColDraw / yb.baf2ColWant) : 0;
            return {
              focus: yb.baf2ColFocusPerS * bb,
              draw: yb.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === yb.baf2ColState && bb && bb.draw > 0 ? {
            ...bb,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(oy, Ey.current);
      Ey.current = Ty.draw > 0 ? Ty : null;
      const Vy = "slowed" === oy.baf2ColState || "noPower" === oy.baf2ColState,
        Jy = LP(oy),
        gb = null !== Ky && void 0 !== Ky ? Ky : oy.baf2ColHold,
        Gy = function(yb) {
          var bb, Wy;
          return "idle" === yb.baf2ColRxState ? null : null !== (bb = null === (Wy = HP(yb)) || void 0 === Wy ? void 0 : Wy.fix) && void 0 !== bb ? bb : null
        }(oy),
        Oy = null === Gy && null === ly ? function(yb) {
          var bb;
          const Wy = yb.baf2ColSentTo;
          if (!Wy) return null;
          const Uy = null !== (bb = yb.baf2ColSentHeld) && void 0 !== bb ? bb : null;
          return {
            key: null === Uy ? `${RP}colNovaSentToMachine` : `${RP}colNovaSentTo`,
            target: Wy,
            kW: Uy
          }
        }(oy) : null,
        Ry = Cy ? cb(`${xo}colFocusOf`, {
          focus: YP(oy.baf2ColP),
          need: YP(dW.NOVA_FOCUS)
        }) : null;
      return (0, mZ.jsx)(sZ.c, {
        close: Zy,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, mZ.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, mZ.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, mZ.jsx)(Vh.d, {
                  itemName: yh,
                  amount: 0
                })
              }), (0, mZ.jsxs)("div", {
                children: [(0, mZ.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: xf(cb, yh)
                }), (0, mZ.jsx)("p", {
                  children: bB(cb, ao(oy))
                })]
              })]
            }), (0, mZ.jsx)(SZ.h, {
              onClick: Zy
            })]
          }), (0, mZ.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, mZ.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, mZ.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, mZ.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: cb(pP(oy), {
                    time: null === Jy ? "" : sf(cb, Jy)
                  })
                }), (0, mZ.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, mZ.jsx)("i", {
                    style: {
                      width: (Cy ? 100 * oy.baf2ColP / dW.NOVA_FOCUS : 0) + "%"
                    }
                  }, sy.current.n)
                }), (0, mZ.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, mZ.jsxs)("span", {
                    title: yB(cb),
                    children: [(0, mZ.jsx)("b", {
                      children: YP(Ty.focus)
                    }), " ", cb(`${xo}colFocusPerS`)]
                  }), (0, mZ.jsxs)("span", {
                    className: Sh()("Baf2ColDraw", {
                      Short: Vy
                    }),
                    children: [(0, mZ.jsx)(Th.e, {
                      name: "bolt"
                    }), Vy ? cb(`${xo}colDrawOf`, {
                      draw: YP(oy.baf2ColDraw),
                      want: YP(oy.baf2ColWant)
                    }) : cb(`${xo}colPowerPerS`, {
                      rate: YP(Ty.draw)
                    })]
                  }), null !== Ry && (0, mZ.jsx)("span", {
                    className: "Soft",
                    children: Ry
                  })]
                })]
              }), (0, mZ.jsx)("p", {
                className: Sh()("Baf2ColState", Po(oy)),
                children: bB(cb, FP(oy))
              }), null !== Gy && (0, mZ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: cb(Gy)
              }), null === Gy && null !== ly && (0, mZ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: cb(ly.key, {
                  item: xf(cb, ly.item)
                })
              }), Oy && (0, mZ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: cb(Oy.key, {
                  target: xf(cb, Oy.target),
                  amount: String(null !== (Wy = Oy.kW) && void 0 !== Wy ? Wy : 0)
                })
              }), (0, mZ.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, mZ.jsx)(Zo, {
                  item: WU,
                  kW: oy.baf2ColSa,
                  need: dW.NOVA_SA,
                  cap: dW.SA_CAP
                }), (0, mZ.jsx)(Zo, {
                  item: UU,
                  kW: oy.baf2ColGd,
                  need: dW.NOVA_GD,
                  cap: dW.GD_CAP
                }), (0, mZ.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, mZ.jsx)(cB, {
                    item: "Nova Matter"
                  }), (0, mZ.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: cb(`${xo}colNovaHeld`, {
                      amount: String(oy.baf2ColOut),
                      cap: String(dW.OUT_CAP)
                    })
                  }), mb && (0, mZ.jsx)(SZ.i, {
                    className: "Baf2ColTake",
                    disabled: 0 === oy.baf2ColOut,
                    onClick: () => {
                      Py.send(io(oy, "take"))
                    },
                    children: cb(`${xo}colTake`)
                  })]
                })]
              }), mb && (0, mZ.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": gb,
                className: Sh()("Baf2ColHold", {
                  On: gb
                }),
                onClick: yb => {
                  yb.detail > 0 && yb.currentTarget.blur(), ey(!gb), Py.send(io(oy, "hold " + (gb ? 0 : 1)))
                },
                children: [(0, mZ.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, mZ.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, mZ.jsx)("b", {
                    children: cb(`${xo}colHold`)
                  }), (0, mZ.jsx)("span", {
                    children: cb(`${xo}colHoldNote`)
                  })]
                })]
              })]
            }), (0, mZ.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, mZ.jsx)(ho, {
                status: oy,
                entry: By
              }), (0, mZ.jsx)("ul", {
                className: "Baf2ColSlots",
                children: ro(oy.baf2ColLasers, oy.baf2ColSpots, oy.baf2ColLive, Ty.beamsOn, null !== (hy = oy.baf2ColGaps) && void 0 !== hy ? hy : 0).map((yb => (0, mZ.jsxs)("li", {
                  className: yb.tone,
                  children: [(0, mZ.jsx)("b", {
                    children: bB(cb, yb.title)
                  }), null !== yb.hint && (0, mZ.jsx)("span", {
                    children: bB(cb, yb.hint)
                  })]
                }, yb.dir)))
              }), (0, mZ.jsx)(fo, {
                status: oy
              })]
            })]
          })]
        })
      })
    }
    const Bo = "buildAFactory2Game:",
      Ko = 36e5,
      eo = 864e5;

    function qB(yb, bb, Wy) {
      return Math.max(0, Math.ceil((yb + bb - Math.max(Wy, yb)) / 1e3))
    }

    function so(yb) {
      return yb.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function So(yb) {
      return "Homestead" === yb
    }

    function Eo(yb) {
      return function(yb) {
        let bb = 0;
        for (const Wy of yb) {
          const yb = /^Island ([1-9]\d{0,5})$/.exec(Wy);
          yb && (bb = Math.max(bb, Number(yb[1])))
        }
        return `Island ${bb+1}`
      }(yb.map((yb => yb.baf2IslandName)))
    }

    function loy(yb, bb) {
      return function(yb) {
        return `${Bo}islandsBlocked${yb[0].toUpperCase()}${yb.slice(1)}`
      }("degraded" === yb && 0 === bb ? "stuck" : yb)
    }

    function mB(yb) {
      return yb.filter((yb => {
        var bb;
        return !yb.baf2IslandActive && void 0 === yb.baf2IslandUnreadable && void 0 === (null === (bb = yb.baf2IslandCoop) || void 0 === bb ? void 0 : bb.baf2CoopState)
      })).length
    }

    function Co(yb) {
      return "coopMoving" === yb || "coopUnreachable" === yb
    }

    function To(yb, bb) {
      const Wy = bb > 0;
      return {
        change: null === yb && !Wy,
        switch: (null === yb || "degraded" === yb || Co(yb)) && !Wy,
        rename: "loading" !== yb && "degraded" !== yb && "stuck" !== yb
      }
    }

    function Vo(yb, bb) {
      return void 0 === yb || "corrupt" === yb && bb
    }
    const Jo = RZ;

    function gB(yb, bb, Wy) {
      if (null !== yb && void 0 !== yb && yb.untilGone) {
        var Uy;
        return !("dismiss" === yb.untilGone && void 0 === (null === (Uy = bb.baf2IslandCoop) || void 0 === Uy ? void 0 : Uy.baf2CoopState)) && Wy - yb.atMs < 32500
      }
      return void 0 !== yb && Wy - yb.atMs < Jo && bb.baf2IslandName === yb.from
    }
    const Go = RZ;

    function Oo(yb) {
      return "core" === (null === yb || void 0 === yb ? void 0 : yb.kind) ? yb.core : "islands" === (null === yb || void 0 === yb ? void 0 : yb.kind) ? yb.backToCore : void 0
    }

    function Ro(yb) {
      return `\0${yb}\0`
    }

    function vB(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Uy = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const fy of Object.keys(Wy)) Uy[fy] = Ro(fy);
      let hy = Object.keys(Uy).length > 0 ? yb(bb, Uy) : yb(bb);
      for (const [fy, Zy] of Object.entries(Wy)) hy = hy.split(Ro(fy)).join(Zy);
      return hy
    }

    function iB(yb, bb) {
      return yb ? bb ? "enabled" : "disabled" : "hidden"
    }
    const Mo = {
      removed: `${Bo}islandsCoopRemoved`,
      deleted: `${Bo}islandsCoopDeleted`,
      notReady: `${Bo}islandsCoopNotReady`,
      gone: `${Bo}islandsCoopGone`
    };

    function Yo(yb) {
      var bb;
      return "member" !== (null === (bb = yb.baf2IslandCoop) || void 0 === bb ? void 0 : bb.baf2CoopRole) && "newer" !== yb.baf2IslandUnreadable
    }

    function Xo(yb, bb, Wy, Uy, hy) {
      const fy = yb.baf2IslandActive,
        Zy = yb.baf2IslandUnreadable,
        cb = yb.baf2IslandCoop,
        Py = function(yb, bb, Wy) {
          return {
            switch: yb.switch && void 0 === bb,
            delete: yb.change && Vo(bb, Wy)
          }
        }(bb, Zy, Uy),
        oy = {
          switch: iB(!fy && void 0 === Zy, Py.switch),
          rename: iB(!0, bb.rename),
          delete: iB(!fy, Py.delete),
          deleteWaits: !fy && Vo(Zy, Uy),
          people: iB(void 0 !== yb.baf2IslandInvitable || hy && fy && void 0 === Zy && void 0 === cb, !0),
          peopleLabel: "invite",
          qh: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        By = !fy && Py.delete;
      if (void 0 === cb) return Wy ? {
        ...oy,
        delete: iB(!fy, !1),
        deleteWaits: !1,
        note: By ? {
          key: `${Bo}islandsCoopKeepOwn`
        } : null
      } : oy;
      const Ky = cb.baf2CoopState,
        ey = cb.baf2CoopMembers.length > 1,
        qb = {
          ...oy,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Ky && "member" === cb.baf2CoopRole) return {
        ...qb,
        dismiss: iB(!0, bb.rename),
        note: {
          key: Mo[Ky],
          names: {
            owner: cb.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Ky) {
        let yb = {
          key: `${Bo}islandsCoopOwnLost`
        };
        return By && ey ? yb = {
          key: `${Bo}islandsCoopDeleteMembers`
        } : By && Wy && (yb = {
          key: `${Bo}islandsCoopKeepOwn`
        }), {
          ...qb,
          delete: iB(!fy, Py.delete && !ey && !Wy),
          deleteWaits: oy.deleteWaits && !ey && !Wy,
          note: yb
        }
      }
      if ("member" === cb.baf2CoopRole) return {
        ...oy,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        qh: iB(!0, fy ? bb.switch : bb.rename)
      };
      const sy = cb.baf2CoopManageHere;
      let Sy = null;
      var Ey;
      sy ? By && ey ? Sy = {
        key: `${Bo}islandsCoopDeleteMembers`
      } : By && Wy && (Sy = {
        key: `${Bo}islandsCoopKeepOwn`
      }) : Sy = {
        key: null !== (Ey = cb.baf2CoopLeft) && void 0 !== Ey && Ey.length ? `${Bo}islandsCoopManageThereClaim` : `${Bo}islandsCoopManageThere`
      };
      return {
        ...oy,
        rename: iB(!0, bb.rename && sy),
        delete: iB(!fy, Py.delete && !ey && !Wy),
        deleteWaits: oy.deleteWaits && !ey && !Wy,
        people: "enabled",
        peopleLabel: "players",
        unshare: iB(sy && fy && !ey, bb.change),
        remove: sy,
        note: Sy
      }
    }

    function no(yb) {
      var bb;
      const Wy = yb.baf2IslandCoop;
      if ("owner" !== (null === Wy || void 0 === Wy ? void 0 : Wy.baf2CoopRole) || void 0 !== Wy.baf2CoopState || null === (bb = Wy.baf2CoopLeft) || void 0 === bb || !bb.length) return null;
      const Uy = yb.baf2IslandActive && Wy.baf2CoopManageHere;
      return {
        left: Wy.baf2CoopLeft,
        claim: Uy,
        goThere: !Uy && Wy.baf2CoopManageHere
      }
    }

    function uo(yb) {
      return yb.baf2CoopMembers.length >= yb.baf2CoopMax
    }

    function rB(yb, bb, Wy) {
      return void 0 !== yb && bb < yb.answer && Wy - yb.atMs < Jo
    }
    const Ho = "buildAFactory2Game:";

    function aB(yb, bb) {
      return {
        onKeyDown: Wy => {
          Wy.stopPropagation(), Wy.nativeEvent.isComposing || 229 === Wy.nativeEvent.keyCode || ("Enter" === Wy.key ? (Wy.preventDefault(), yb()) : "Escape" === Wy.key && (Wy.preventDefault(), bb()))
        }
      }
    }

    function Fo(yb) {
      return {
        onKeyDown: bb => {
          "Escape" !== bb.key || bb.nativeEvent.isComposing || (bb.preventDefault(), bb.stopPropagation(), yb())
        }
      }
    }

    function po(yb) {
      yb.currentTarget.select()
    }

    function Lo(yb, bb) {
      (0, Uy.useEffect)((() => {
        var Wy;
        yb && (null === (Wy = bb.current) || void 0 === Wy || Wy.scrollIntoView({
          block: "nearest"
        }))
      }), [yb, bb])
    }

    function Qo(yb) {
      const [bb, Wy] = (0, Uy.useState)(null);
      return (0, Uy.useEffect)((() => {
        const bb = document.querySelector(".UiRequests"),
          Uy = yb.current;
        if (!bb || !Uy || "undefined" === typeof ResizeObserver) return;
        const hy = () => {
          const yb = bb.getBoundingClientRect(),
            hy = Uy.getBoundingClientRect(),
            fy = Uy.parentElement,
            Zy = fy && parseFloat(getComputedStyle(fy).paddingTop) || 0,
            cb = function(yb, bb, Wy, Uy) {
              if (!yb || yb.height <= 0 || yb.right <= bb.left || yb.left >= bb.right) return null;
              const hy = Math.max(Uy, yb.bottom + 8);
              return {
                marginTop: Math.round(hy - Uy),
                maxHeight: Math.max(0, Math.floor(Wy - hy - Uy))
              }
            }(yb, hy, window.innerHeight, Zy);
          Wy((yb => (null === yb || void 0 === yb ? void 0 : yb.marginTop) === (null === cb || void 0 === cb ? void 0 : cb.marginTop) && (null === yb || void 0 === yb ? void 0 : yb.maxHeight) === (null === cb || void 0 === cb ? void 0 : cb.maxHeight) ? yb : cb))
        };
        hy();
        const fy = new ResizeObserver(hy);
        return fy.observe(bb), window.addEventListener("resize", hy), () => {
          fy.disconnect(), window.removeEventListener("resize", hy)
        }
      }), [yb]), bb
    }

    function jB(yb) {
      (0, Uy.useEffect)((() => {
        var bb;
        null === (bb = yb.current) || void 0 === bb || bb.focus()
      }), [yb])
    }

    function Do(yb) {
      const [bb, Wy] = (0, Uy.useState)(Date.now);
      return (0, Uy.useEffect)((() => {
        const bb = window.setInterval((() => {
          Wy(Date.now())
        }), yb);
        return () => {
          window.clearInterval(bb)
        }
      }), [yb]), bb
    }

    function tB(yb) {
      let {
        tier: bb,
        t: Wy
      } = yb;
      const {
        kind: Uy,
        short: hy
      } = Ey(bb), fy = qb(bb, sy), Zy = Wy(`${Ho}${fy.key}`, {
        ...fy.params,
        name: Wy(`${Ho}${ly(bb).nameKey}`)
      });
      return (0, mZ.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, mZ.jsx)("span", {
          className: Sh()("Baf2IslandTierPip", {
            Stage: "tier" !== Uy
          }),
          "aria-hidden": "true",
          children: hy
        }), Zy]
      })
    }

    function wo(yb) {
      let {
        note: bb,
        className: Wy,
        t: Uy
      } = yb;
      return (0, mZ.jsx)("p", {
        className: Sh()("Baf2IslandNote", Wy),
        children: vB(Uy, bb.key, bb.names, bb.params)
      })
    }
    const kB = "buildAFactory2Game:";

    function No(yb) {
      let {
        message: bb,
        arrivedAtMs: Wy,
        close: hy,
        qh: fy
      } = yb;
      const Zy = uZ(),
        {
          t: cb
        } = (0, Ch.D)(),
        Py = Do(1e3),
        oy = (0, Uy.useRef)(null);
      (0, Uy.useEffect)((() => {
        var yb;
        null === (yb = oy.current) || void 0 === yb || yb.focus()
      }), []);
      const By = qB(Wy, bb.baf2TransferInMs, Py),
        Ky = Wy + bb.baf2TransferInMs - 1e3,
        [ey, qb] = (0, Uy.useState)(null);
      (0, Uy.useEffect)((() => {
        const yb = window.setTimeout((() => {
          qb(Ky)
        }), Math.max(0, Ky - Date.now()));
        return () => {
          window.clearTimeout(yb)
        }
      }), [Ky]);
      const sy = ey === Ky || Py >= Ky,
        Sy = bb.baf2TransferIsland,
        Ey = bb.baf2TransferOwner;
      return (0, mZ.jsx)(sZ.c, {
        close: hy,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, mZ.jsxs)("section", {
          ref: oy,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsxs)("div", {
              children: [(0, mZ.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === Ey ? vB(cb, `${kB}islandsTransferOwn`, {
                  island: Sy
                }) : vB(cb, `${kB}islandsTransfer`, {
                  island: Sy,
                  owner: Ey
                })
              }), (0, mZ.jsx)("p", {
                children: sy ? cb(`${kB}islandsTransferNow`) : cb(`${kB}islandsTransferIn`, {
                  time: sf(cb, By)
                })
              })]
            }), (0, mZ.jsx)(SZ.h, {
              ariaLabel: cb(`${kB}islandsClose`),
              onClick: hy
            })]
          }), !sy && (0, mZ.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, mZ.jsx)("p", {
              className: "Baf2TransferNote",
              children: cb(`${kB}islandsTransferNote`)
            }), (0, mZ.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, mZ.jsx)(SZ.f, {
                onClick: () => {
                  Zy.send("baf2coopstay"), fy()
                },
                children: cb(`${kB}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var zB = Wy(1268),
      Io = Wy(35479),
      xB = Wy.n(Io);
    const Ao = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const yK = "buildAFactory2Game:",
      bK = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function WB(yb, bb, Wy) {
      return void 0 === bb ? Wy : "string" === typeof bb ? bb : Array.isArray(bb) ? bb.map((bb => "string" === typeof bb ? bb : "translationKey" in bb ? yb(bb.translationKey) : "")).join("") : yb(bb.translationKey)
    }

    function UB(yb) {
      const bb = {};
      for (const [Wy, Uy] of Object.entries(null !== yb && void 0 !== yb ? yb : {})) bb[Wy] = Uy < 0 ? qZ(Uy) : Uy.toLocaleString("en-US");
      return bb
    }

    function hB(yb, bb) {
      const Wy = bb ? "touch" : "mouse";
      return {
        use: yb(`${yK}lookUse_${Wy}`),
        Use: yb(`${yK}lookUseStart_${Wy}`)
      }
    }
    const fB = (0, Uy.memo)((function(yb) {
      let {
        item: bb
      } = yb;
      return (0, mZ.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, mZ.jsx)(Vh.d, {
          itemName: bb,
          amount: 0
        })
      })
    }));

    function ZB(yb) {
      let {
        label: bb,
        percent: Wy,
        progress: Uy
      } = yb;
      return (0, mZ.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${bb}: ${Uy}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Wy,
          children: (0, mZ.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${Wy}%`
            }
          })
        }), (0, mZ.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Uy
        })]
      })
    }

    function cK(yb) {
      let {
        chips: bb
      } = yb;
      return (0, mZ.jsx)("span", {
        className: "Baf2QuestChips",
        children: bb.map((yb => {
          let [bb, Wy, Uy] = yb;
          const hy = Wy >= Uy;
          return (0, mZ.jsxs)("span", {
            className: Sh()("Baf2QuestChip", {
              Met: hy
            }),
            children: [(0, mZ.jsx)(fB, {
              item: bb
            }), (0, mZ.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: hy ? `\u2713${Uy}` : `${Wy}/${Uy}`
            })]
          }, bb)
        }))
      })
    }

    function PB(yb, bb) {
      const {
        key: Wy,
        params: Uy
      } = qb(bb, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return yb(`${yK}${Wy}`, {
        ...Uy,
        name: yb(`${yK}${ly(bb).nameKey}`)
      })
    }

    function oB(yb) {
      let {
        core: bb,
        t: Wy
      } = yb;
      const [Uy, hy] = bb, fy = hy > 0 ? Math.floor(100 * Uy / hy) : 100;
      return (0, mZ.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": Wy(`${yK}questCoreLabel`, {
          have: String(Uy),
          need: String(hy)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": fy,
        children: [(0, mZ.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: Wy(`${yK}questCore`, {
            percent: String(fy)
          })
        }), (0, mZ.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, mZ.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${fy}%`
            }
          })
        })]
      })
    }

    function BB(yb) {
      let {
        rows: bb,
        t: Wy
      } = yb;
      const Uy = bb.filter((yb => yb.done)).length;
      return (0, mZ.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": Wy(`${yK}questStepsProgress`, {
          done: String(Uy),
          total: String(bb.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": bb.length,
        "aria-valuenow": Uy,
        children: bb.map((yb => (0, mZ.jsx)("span", {
          className: Sh()("Baf2QuestSegment", {
            Done: yb.done,
            Current: yb.current
          })
        }, yb.id)))
      })
    }
    const KB = (0, Uy.memo)(qK, eB);

    function eB(yb, bb) {
      const Wy = Wy => yb.view.itemNames[Wy] === bb.view.itemNames[Wy];
      return yb.t === bb.t && yb.extra === bb.extra && (null === yb.row.item || Wy(yb.row.item)) && yb.row.madeFor.every(Wy) && yb.row.also.every(Wy) && xB()(yb.row, bb.row)
    }

    function qK(yb) {
      let {
        row: bb,
        view: Wy,
        t: Uy,
        extra: hy
      } = yb;
      const {
        isTouchScreen: fy
      } = (0, eh.h)(["isTouchScreen"]), Zy = bb.item ? function(yb, bb, Wy) {
        return 1 !== Wy && Ao.has(yb) ? mf(bb) : null
      }(bb.key, bb.item, bb.total) : null, cb = Zy ? Uy(Zy) : bb.item ? WB(Uy, Wy.itemNames[bb.item], bb.item) : "", Py = bb.also.map((yb => WB(Uy, Wy.itemNames[yb], yb))), oy = Py.join(", "), By = function(yb, bb) {
        var Wy;
        return bb.length < 2 ? null !== (Wy = bb[0]) && void 0 !== Wy ? Wy : "" : yb(`${yK}listAnd`, {
          rest: bb.slice(0, -1).join(yb(`${yK}listComma`)),
          last: bb[bb.length - 1]
        })
      }(Uy, [cb, ...Py]), Ky = Uy(`${yK}${bb.key}`, {
        ...hB(Uy, fy),
        ...UB(bb.params),
        item: cb,
        also: oy,
        itemList: By,
        total: String(bb.total)
      }), [ey, ...qb] = Ky.split("\n"), sy = bb.total > 1 && !bb.done && !bb.away;
      return (0, mZ.jsxs)("li", {
        className: Sh()("Baf2QuestStep", {
          Done: bb.done,
          Current: bb.current,
          JustFinished: bb.justFinished,
          Away: bb.away
        }),
        children: [!bb.done && null !== bb.item && (0, mZ.jsx)(fB, {
          item: bb.item
        }), (bb.done || null === bb.item) && (0, mZ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: bb.done ? "\u2713" : "\u25cb"
        }), (0, mZ.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, mZ.jsx)("strong", {
            children: ey
          }), qb.length > 0 && (0, mZ.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: qb.join(" ")
          }), !bb.done && bb.madeFor.length > 0 && (0, mZ.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Uy("buildAFactory2Game:questRowFor", {
              items: bb.madeFor.map((yb => WB(Uy, Wy.itemNames[yb], yb))).join(" \u2192 ")
            })
          }), sy && (0, mZ.jsx)(ZB, {
            label: ey,
            percent: Math.round(100 * bb.amount / bb.total),
            progress: `${bb.amount.toLocaleString("en-US")}/${bb.total.toLocaleString("en-US")}`
          }), !bb.done && !bb.away && bb.chips && bb.chips.length > 0 && (0, mZ.jsx)(cK, {
            chips: bb.chips
          }), hy]
        })]
      })
    }

    function sB(yb, bb) {
      let [Wy, Uy] = bb;
      return yb(`${yK}${Wy}`, UB(Uy))
    }

    function SB(yb) {
      let [bb, Wy] = yb;
      return bb + JSON.stringify(Wy)
    }

    function EB(yb) {
      let {
        goal: bb,
        t: Wy
      } = yb;
      return bb ? (0, mZ.jsx)("span", {
        className: "Baf2BookGoal",
        children: Wy(`${yK}${bb}`)
      }) : null
    }

    function lB(yb) {
      let {
        view: bb,
        t: Wy
      } = yb;
      if (!bb.name) return null;
      const Uy = Hh(bb.rows);
      return (0, mZ.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: Wy(`${yK}currentQuest`)
        }), (0, mZ.jsx)("strong", {
          className: "Baf2BookTitle",
          children: sB(Wy, bb.name)
        }), (0, mZ.jsx)(EB, {
          goal: bb.goal,
          t: Wy
        }), Uy.length > 1 && (0, mZ.jsx)(BB, {
          rows: Uy,
          t: Wy
        }), (0, mZ.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: bb.rows.map((yb => (0, mZ.jsx)(KB, {
            row: yb,
            view: bb,
            t: Wy
          }, yb.id)))
        }), bb.reward && (0, mZ.jsxs)("span", {
          className: "Baf2BookReward",
          children: [Wy(`${yK}questReward`), (0, mZ.jsx)(fB, {
            item: bb.reward
          }), WB(Wy, bb.itemNames[bb.reward], bb.reward)]
        })]
      })
    }

    function mK(yb) {
      let {
        quest: bb,
        upcoming: Wy,
        t: Uy
      } = yb;
      return (0, mZ.jsxs)("li", {
        className: Sh()("Baf2BookQuest", {
          Done: bb[3],
          Upcoming: Wy
        }),
        children: [(0, mZ.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: bb[3] ? "\u2713" : "\u25cb"
        }), (0, mZ.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, mZ.jsx)("strong", {
            className: "Baf2BookTitle",
            children: sB(Uy, bb)
          }), (0, mZ.jsx)(EB, {
            goal: bb[2],
            t: Uy
          })]
        })]
      })
    }

    function CB(yb) {
      let {
        done: bb,
        total: Wy,
        t: Uy
      } = yb;
      const hy = Wy > 0 ? Math.round(100 * bb / Wy) : 0,
        fy = Uy(`${yK}questBookChapterProgress`, {
          done: String(bb),
          total: String(Wy)
        });
      return (0, mZ.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": fy,
          "aria-valuemin": 0,
          "aria-valuemax": Wy,
          "aria-valuenow": bb,
          children: (0, mZ.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${hy}%`
            }
          })
        }), (0, mZ.jsx)("span", {
          className: "Baf2BookProgressText",
          children: fy
        })]
      })
    }

    function TB(yb) {
      let {
        view: bb,
        tier: Wy,
        quests: Uy,
        t: hy
      } = yb;
      const fy = Wy === bb.tier,
        Zy = (null !== Uy && void 0 !== Uy ? Uy : []).filter((yb => !yb[4])),
        cb = (null !== Uy && void 0 !== Uy ? Uy : []).filter((yb => yb[4])),
        Py = Zy.filter((yb => yb[3])).length,
        oy = fy && bb.name ? SB(bb.name) : null,
        By = Zy.findIndex((yb => !yb[3] && SB(yb) === oy));
      return (0, mZ.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, mZ.jsx)("h3", {
            children: PB(hy, Wy)
          }), Zy.length > 0 && (0, mZ.jsx)(CB, {
            done: Py,
            total: Zy.length,
            t: hy
          }), fy && bb.core && (0, mZ.jsx)(oB, {
            core: bb.core,
            t: hy
          })]
        }), (0, mZ.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Uy && fy && (0, mZ.jsx)(lB, {
            view: bb,
            t: hy
          }), Zy.map(((yb, Wy) => Wy === By ? (0, mZ.jsx)(lB, {
            view: bb,
            t: hy
          }, SB(yb)) : (0, mZ.jsx)(mK, {
            quest: yb,
            upcoming: !yb[3],
            t: hy
          }, SB(yb))))]
        }), fy && bb.side && (0, mZ.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, mZ.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: hy(`${yK}questSide`)
          }), (0, mZ.jsx)("strong", {
            className: "Baf2BookTitle",
            children: sB(hy, bb.side.name)
          }), (0, mZ.jsx)(EB, {
            goal: bb.side.goal,
            t: hy
          }), (0, mZ.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, mZ.jsx)(KB, {
              row: bb.side.row,
              view: bb,
              t: hy
            })
          })]
        }), cb.length > 0 && (0, mZ.jsxs)(mZ.Fragment, {
          children: [(0, mZ.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: hy(`${yK}questBookSidesDone`)
          }), (0, mZ.jsx)("ol", {
            className: "Baf2BookQuests",
            children: cb.map((yb => (0, mZ.jsx)(mK, {
              quest: yb,
              upcoming: !1,
              t: hy
            }, SB(yb))))
          })]
        })]
      })
    }

    function VB(yb) {
      var bb, Wy, fy;
      let {
        store: Zy,
        close: cb
      } = yb;
      const {
        t: Py
      } = (0, Ch.D)(), oy = (0, zB.m)(vf, Zy.get()), Ky = null !== (bb = oy.tier) && void 0 !== bb ? bb : 1, [ey, qb] = (0, Uy.useState)(null), sy = (null === ey || void 0 === ey ? void 0 : ey.at) === Ky ? ey.tier : Ky, ly = (0, Uy.useRef)(null), mb = null !== oy.chapters;
      (0, Uy.useEffect)((() => {
        var yb;
        ly.current && (ly.current.scrollTop = 0);
        const bb = null === (yb = ly.current) || void 0 === yb ? void 0 : yb.querySelector(".Baf2BookQuest.Current");
        if (ly.current && bb) {
          const yb = bb.getBoundingClientRect().bottom - ly.current.getBoundingClientRect().bottom;
          yb > 0 && (ly.current.scrollTop += Math.min(yb, bb.getBoundingClientRect().top - ly.current.getBoundingClientRect().top))
        }
      }), [sy, mb]);
      const Cy = null === (Wy = oy.chapters) || void 0 === Wy ? void 0 : Wy.find((yb => {
        let [bb] = yb;
        return bb === sy
      }));
      return (0, mZ.jsx)(sZ.c, {
        close: cb,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mZ.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: bK,
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Py(`${yK}questBookTitle`)
            }), (0, mZ.jsx)(SZ.h, {
              onClick: cb
            })]
          }), (0, mZ.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Py(`${yK}questBookChapters`),
            children: hy.slice(0, By()).map(((yb, bb) => {
              const Wy = bb + 1,
                {
                  kind: Uy,
                  short: hy
                } = Ey(Wy),
                fy = Sy(Wy, Ky),
                Zy = fy ? Py(`${yK}coreAtomicHidden`) : PB(Py, Wy);
              return (0, mZ.jsx)("li", {
                children: (0, mZ.jsx)("button", {
                  type: "button",
                  className: Sh()({
                    Stage: "tier" !== Uy,
                    Atomic: "atomic" === Uy,
                    Current: Wy === Ky,
                    Selected: Wy === sy
                  }),
                  disabled: Wy > Ky,
                  "aria-pressed": Wy === sy,
                  "aria-label": Zy,
                  title: fy ? void 0 : Zy,
                  onClick: () => {
                    qb({
                      tier: Wy,
                      at: Ky
                    })
                  },
                  children: fy ? "?" : hy
                })
              }, yb.nameKey)
            }))
          }), (0, mZ.jsxs)("div", {
            ref: ly,
            className: "Baf2BookBody",
            children: [uh(oy) && sy === Ky && (0, mZ.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Py(`${yK}questBookAllDone`)
            }), (0, mZ.jsx)(TB, {
              view: oy,
              tier: sy,
              quests: null !== (fy = null === Cy || void 0 === Cy ? void 0 : Cy[1]) && void 0 !== fy ? fy : null,
              t: Py
            })]
          })]
        })
      })
    }
    const JB = "buildAFactory2Game:";

    function gK(yb) {
      let {
        tiers: bb,
        from: Wy,
        tier: Uy,
        shown: hy,
        cU: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ch.D)(), cb = bb.map(((yb, bb) => {
        const cb = Wy + bb,
          {
            kind: Py,
            short: oy
          } = Ey(cb),
          By = Sy(cb, Uy);
        return (0, mZ.jsx)("li", {
          children: (0, mZ.jsx)("button", {
            type: "button",
            className: Sh()({
              Stage: "tier" !== Py,
              Silhouette: By,
              Reached: cb <= Uy,
              Current: cb === Uy,
              Next: cb === Uy + 1,
              Selected: cb === hy
            }),
            disabled: By,
            "aria-pressed": cb === hy,
            "aria-label": By ? Zy(`${JB}coreAtomicHidden`) : void 0,
            title: By ? void 0 : Zy(`${JB}${yb.nameKey}`),
            onClick: () => {
              fy(cb)
            },
            children: By ? "?" : oy
          })
        }, yb.nameKey)
      }));
      return (0, mZ.jsx)(mZ.Fragment, {
        children: cb
      })
    }

    function GB(yb) {
      let {
        id: bb,
        label: Wy,
        tiers: Uy,
        from: hy,
        ...fy
      } = yb;
      return (0, mZ.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, mZ.jsx)("span", {
          id: bb,
          className: "Baf2CoreLadderLabel",
          children: Wy
        }), (0, mZ.jsx)("ol", {
          "aria-labelledby": bb,
          children: (0, mZ.jsx)(gK, {
            ...fy,
            tiers: Uy,
            from: hy
          })
        })]
      })
    }

    function OB(yb) {
      const {
        t: bb
      } = (0, Ch.D)(), Wy = hy.findIndex((yb => void 0 !== yb.stage)), Uy = hy.findIndex((yb => void 0 !== yb.reactorTier)), fy = Wy < 0 ? hy : hy.slice(0, Wy), Zy = Wy < 0 ? [] : hy.slice(Wy, Uy < 0 ? void 0 : Uy), Py = Uy < 0 || !cb() ? [] : hy.slice(Uy);
      return (0, mZ.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, mZ.jsx)(GB, {
          ...yb,
          id: "baf2CoreTiersLabel",
          label: bb(`${JB}coreTiersLabel`),
          tiers: fy,
          from: 1
        }), Zy.length > 0 && (0, mZ.jsx)(GB, {
          ...yb,
          id: "baf2CoreStagesLabel",
          label: bb(`${JB}coreStagesLabel`),
          tiers: Zy,
          from: Wy + 1
        }), Py.length > 0 && (0, mZ.jsx)(GB, {
          ...yb,
          id: "baf2CoreAtomicLabel",
          label: bb(`${JB}coreAtomicLabel`),
          tiers: Py,
          from: Uy + 1
        })]
      })
    }
    const RB = "buildAFactory2Game:";

    function vK(yb) {
      let {
        item: bb,
        itemNames: Wy,
        children: Uy
      } = yb;
      return (0, mZ.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, mZ.jsx)(Vh.d, {
            itemName: bb,
            amount: 0
          })
        }), (0, mZ.jsx)(Jh.d, {
          text: Wy[bb]
        }), Uy]
      })
    }

    function iK(yb) {
      const bb = new Map;
      for (const {
          block: Uy
        }
        of yb.newDeposits) {
        var Wy;
        bb.set(Uy, (null !== (Wy = bb.get(Uy)) && void 0 !== Wy ? Wy : 0) + 1)
      }
      return [...bb]
    }

    function MB(yb) {
      let {
        value: bb,
        label: Wy,
        more: Uy
      } = yb;
      return (0, mZ.jsxs)("li", {
        children: [(0, mZ.jsx)("strong", {
          children: bb
        }), (0, mZ.jsx)("span", {
          children: Wy
        }), Uy > 0 && (0, mZ.jsxs)("em", {
          children: ["+", Uy]
        })]
      })
    }

    function YB(yb) {
      let {
        items: bb,
        itemNames: Wy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)(), [fy, Zy] = (0, Uy.useState)(null), cb = null !== fy && bb.includes(fy) ? fy : null;
      return (0, mZ.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, mZ.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: hy(`${RB}coreRewardUnlocks`)
        }), (0, mZ.jsx)("ul", {
          children: bb.map((yb => (0, mZ.jsx)("li", {
            children: (0, mZ.jsx)("button", {
              type: "button",
              className: Sh()("Baf2PanelIcon", {
                Picked: yb === cb
              }),
              title: xf(hy, yb),
              "aria-label": xf(hy, yb),
              "aria-pressed": yb === cb,
              onClick: () => {
                Zy(yb === cb ? null : yb)
              },
              children: (0, mZ.jsx)(Vh.d, {
                itemName: yb,
                amount: 0
              })
            })
          }, yb)))
        }), (0, mZ.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== cb && (0, mZ.jsxs)(mZ.Fragment, {
            children: [(0, mZ.jsx)(Jh.d, {
              text: Wy[cb]
            }), " \xb7 ", (0, mZ.jsx)(Jh.d, {
              text: Wy[My(cb)]
            })]
          }), null === cb && hy(`${RB}coreRecipeTap`)]
        })]
      })
    }

    function XB(yb) {
      var bb, Wy;
      let {
        def: Uy,
        tier: hy,
        itemNames: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ch.D)(), cb = hy > 1 ? ly(hy - 1) : void 0, Py = Math.round(2 * Uy.islandRadius), oy = cb ? Math.round(2 * cb.islandRadius) : Py, By = hy >= 3 ? sU(hy) : null;
      return (0, mZ.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, mZ.jsxs)("ul", {
          className: Sh()("Baf2CoreStats", {
            Four: null !== By
          }),
          children: [(0, mZ.jsx)(MB, {
            value: `${Py}\xd7${Py}`,
            label: Zy(`${RB}coreStatIsland`),
            more: Py - oy
          }), (0, mZ.jsx)(MB, {
            value: String(Uy.machineAllowance),
            label: Zy(`${RB}coreStatMachines`),
            more: Uy.machineAllowance - (null !== (bb = null === cb || void 0 === cb ? void 0 : cb.machineAllowance) && void 0 !== bb ? bb : Uy.machineAllowance)
          }), (0, mZ.jsx)(MB, {
            value: String(Uy.beltAllowance),
            label: Zy(`${RB}coreStatBelts`),
            more: Uy.beltAllowance - (null !== (Wy = null === cb || void 0 === cb ? void 0 : cb.beltAllowance) && void 0 !== Wy ? Wy : Uy.beltAllowance)
          }), null !== By && (0, mZ.jsx)(MB, {
            value: String(By),
            label: Zy(`${RB}coreStatStorage`),
            more: By - (cb ? sU(hy - 1) : By)
          })]
        }), Uy.reward && (0, mZ.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, mZ.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Zy(`${RB}coreRewardItem`)
          }), (0, mZ.jsx)(vK, {
            item: Uy.reward,
            itemNames: fy
          })]
        }), Uy.newDeposits.length > 0 && (0, mZ.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, mZ.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Zy(Uy.newDeposits.length > 1 ? `${RB}coreRewardDeposits` : `${RB}coreRewardDeposit`)
          }), iK(Uy).map((yb => {
            let [bb, Wy] = yb;
            return (0, mZ.jsx)(vK, {
              item: bb,
              itemNames: fy,
              children: Wy > 1 && ` \xd7${Wy}`
            }, bb)
          }))]
        }), Uy.unlocks.length > 0 && (0, mZ.jsx)(YB, {
          items: Uy.unlocks,
          itemNames: fy
        }), (0, mZ.jsx)(nB, {
          tier: hy
        })]
      })
    }

    function nB(yb) {
      let {
        tier: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)(), Uy = Ph[bb];
      if (!Uy) return null;
      const hy = cf(bb, 0, 0).barrierMax !== cf(bb - 1, 0, 0).barrierMax;
      return (0, mZ.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, mZ.jsx)(Vh.d, {
            itemName: hy ? bf.Chestplate : yf,
            amount: 0
          })
        }), Wy(`${RB}gearPerkLine`, {
          perk: Wy(`${RB}${Uy}`)
        })]
      })
    }

    function uB(yb, bb) {
      return null === yb ? bb : yb.value
    }

    function rK(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === yb || Wy - yb.atMs >= Uy ? null : hy(yb.value, bb) ? yb.armed ? null : yb : yb.armed ? yb : {
        ...yb,
        armed: !0
      }
    }

    function HB(yb, bb) {
      const Wy = bb.filter((bb => {
        var Wy;
        return !1 !== (null === (Wy = yb.get(bb)) || void 0 === Wy ? void 0 : Wy.value)
      }));
      for (const [Uy, hy] of yb) hy.value && !bb.includes(Uy) && Wy.push(Uy);
      return Wy
    }

    function aK(yb, bb, Wy, hy) {
      const [fy, Zy] = (0, Uy.useState)((() => new Map)), cb = () => {
        Zy((bb => function(yb, bb, Wy, Uy) {
          var hy;
          let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Zy = null;
          for (const [cb, Py] of yb) {
            const hy = rK(Py, bb(cb), Wy, Uy, fy);
            hy !== Py && (Zy ??= new Map(yb), null === hy ? Zy.delete(cb) : Zy.set(cb, hy))
          }
          return null !== (hy = Zy) && void 0 !== hy ? hy : yb
        }(bb, yb, Date.now(), Wy, hy)))
      };
      (0, Uy.useEffect)((() => {
        cb()
      }), [bb, Wy]), (0, Uy.useEffect)((() => {
        if (0 === fy.size) return;
        const yb = Math.min(...[...fy.values()].map((yb => yb.atMs))),
          bb = setTimeout(cb, Math.max(0, yb + Wy - Date.now()) + 1);
        return () => {
          clearTimeout(bb)
        }
      }), [fy, bb, Wy]);
      return [fy, (bb, Wy) => {
        Zy((Uy => {
          const fy = new Map(Uy);
          return fy.set(bb, function(yb, bb, Wy) {
            return {
              value: yb,
              atMs: Wy,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(yb, bb)
            }
          }(Wy, yb(bb), Date.now(), hy)), fy
        }))
      }]
    }
    const FB = "buildAFactory2Game:";

    function pB(yb) {
      let {
        message: bb,
        itemNames: Wy
      } = yb;
      const hy = uZ(),
        {
          t: fy
        } = (0, Ch.D)(),
        [Zy, cb] = (0, Uy.useState)(!1),
        [Py, oy] = function(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RZ;
          const [Wy, Uy] = aK((bb => yb.includes(bb)), yb, bb, Object.is);
          return [HB(Wy, yb), Uy]
        }(bb.baf2CoreBankPaused),
        By = new Set(Py),
        Ky = [...bb.baf2CoreBanked];
      for (const Uy of By) Ky.some((yb => {
        let [bb] = yb;
        return bb === Uy
      })) || Ky.push([Uy, 0]);
      return 0 === Ky.length ? null : (0, mZ.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, mZ.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Zy,
          onClick: () => {
            cb(!Zy)
          },
          children: [(0, mZ.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: fy(`${FB}coreBankedLater`)
          }), (0, mZ.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Ky.map((yb => {
              let [bb, Wy] = yb;
              const Uy = By.has(bb);
              return (0, mZ.jsxs)("span", {
                className: Sh()({
                  Paused: Uy
                }),
                title: Uy ? fy(`${FB}coreBankPausedTag`) : void 0,
                children: [(0, mZ.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, mZ.jsx)(Vh.d, {
                    itemName: bb,
                    amount: 0
                  })
                }), Wy, Uy && (0, mZ.jsx)(Th.e, {
                  name: "pause"
                })]
              }, bb)
            }))
          }), (0, mZ.jsx)(Th.e, {
            name: Zy ? "angle-up" : "angle-down"
          })]
        }), Zy && (0, mZ.jsxs)(mZ.Fragment, {
          children: [(0, mZ.jsx)("ul", {
            children: Ky.map((yb => {
              let [bb, Uy] = yb;
              const Zy = By.has(bb);
              return (0, mZ.jsxs)("li", {
                children: [(0, mZ.jsxs)(vK, {
                  item: bb,
                  itemNames: Wy,
                  children: [(0, mZ.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Uy
                  }), Zy && (0, mZ.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: fy(`${FB}coreBankPausedTag`)
                  })]
                }), (0, mZ.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, mZ.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Uy,
                    onClick: () => {
                      hy.send(`baf2corewithdraw ${Uy} ${bb}`)
                    },
                    children: fy(`${FB}coreTake`)
                  }), (0, mZ.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      hy.send(`${Ty} ${bb}`), oy(bb, !Zy)
                    },
                    children: fy(Zy ? `${FB}coreBankResume` : `${FB}coreBankStop`)
                  })]
                })]
              }, bb)
            }))
          }), (0, mZ.jsx)("p", {
            className: "Baf2CoreHint",
            children: fy(`${FB}coreBankNote`)
          })]
        })]
      })
    }
    const LB = "buildAFactory2Game:";

    function QB(yb) {
      const bb = Math.max(0, Math.floor(yb));
      return `${Math.floor(bb/60)}:${String(bb%60).padStart(2,"0")}`
    }

    function jK(yb) {
      let {
        item: bb
      } = yb;
      return (0, mZ.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, mZ.jsx)(Vh.d, {
          itemName: bb,
          amount: 0
        })
      })
    }

    function DB() {
      return (0, mZ.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, mZ.jsx)(Th.e, {
          name: "bolt"
        })
      })
    }

    function tK(yb) {
      let {
        charge: bb,
        hint: Wy,
        itemNames: Uy
      } = yb;
      const hy = uZ(),
        {
          t: fy
        } = (0, Ch.D)(),
        [Zy, cb, Py, oy, By, Ky, ey] = bb,
        [qb, sy] = function(yb) {
          var bb;
          let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RZ,
            Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [hy, fy] = aK((() => yb), yb, Wy, Uy);
          return [uB(null !== (bb = hy.get("")) && void 0 !== bb ? bb : null, yb), yb => {
            fy("", yb)
          }]
        }(ey),
        Sy = qb === ey ? Ky : !qb,
        Ey = oy >= By,
        ly = Zy.find((yb => {
          let [, bb, Wy] = yb;
          return Wy < .9 * bb
        }));
      let mb = `${LB}coreChargeWaiting`,
        Cy = {};
      return Ey ? mb = `${LB}coreChargeDone` : qb ? mb = `${LB}coreChargeStopped` : Sy && Wy ? (mb = `${LB}${Wy[0]}`, Cy = {
        item: xf(fy, Wy[1])
      }) : Sy && ly ? (mb = `${LB}coreChargeShort`, Cy = {
        item: xf(fy, ly[0])
      }) : Sy && cb > 0 && !Py ? mb = `${LB}coreChargePower` : Sy && (mb = `${LB}coreChargeRunning`), (0, mZ.jsxs)("div", {
        className: Sh()("Baf2CoreCharge", {
          Waiting: !Sy && !Ey,
          Done: Ey
        }),
        children: [(0, mZ.jsxs)("h4", {
          children: [fy(`${LB}coreChargeTitle`), (0, mZ.jsx)("span", {
            children: fy(`${LB}coreChargeProgress`, {
              done: QB(oy),
              need: QB(By)
            })
          })]
        }), (0, mZ.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, mZ.jsx)("div", {
            style: {
              width: 100 * Math.min(oy, By) / By + "%"
            }
          })
        }), (0, mZ.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Zy.map((yb => {
            var bb;
            let [Wy, hy, Zy] = yb;
            const cb = Zy >= .9 * hy;
            return (0, mZ.jsxs)("li", {
              className: Sh()({
                Done: cb,
                Short: Sy && !cb
              }),
              children: [(0, mZ.jsx)(jK, {
                item: Wy
              }), (0, mZ.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, mZ.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, mZ.jsx)(Jh.d, {
                    text: null !== (bb = Uy[Wy]) && void 0 !== bb ? bb : Wy
                  }), (0, mZ.jsx)("span", {
                    children: fy(`${LB}coreChargeItem`, {
                      now: String(Zy),
                      need: String(hy)
                    })
                  })]
                }), (0, mZ.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, mZ.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Zy/hy)}%`
                    }
                  })
                })]
              })]
            }, Wy)
          })), cb > 0 && (0, mZ.jsxs)("li", {
            className: Sh()("Baf2CoreChargePower", {
              Short: Sy && !Py
            }),
            children: [(0, mZ.jsx)(DB, {}), (0, mZ.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, mZ.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, mZ.jsx)("span", {
                  children: fy(`${LB}coreChargePowerRow`, {
                    power: xb(cb)
                  })
                })
              })
            })]
          })]
        }), (0, mZ.jsx)("p", {
          className: "Baf2CoreHint",
          children: fy(mb, Cy)
        }), !Ey && (Sy || qb) && (0, mZ.jsx)("button", {
          type: "button",
          className: Sh()("Baf2CoreChargeToggle", {
            Stopped: qb
          }),
          onClick: () => {
            hy.send(Jy), sy(!qb)
          },
          children: fy(qb ? `${LB}coreChargeRestart` : `${LB}coreChargeStop`)
        })]
      })
    }

    function wB(yb) {
      let {
        charge: bb,
        reached: Wy,
        itemNames: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)();
      return (0, mZ.jsxs)("div", {
        className: Sh()("Baf2CoreCharge", {
          Done: Wy
        }),
        children: [(0, mZ.jsxs)("h4", {
          children: [hy(`${LB}coreChargeTitle`), (0, mZ.jsx)("span", {
            children: hy(`${LB}coreChargeSpecTime`, {
              time: QB(bb.seconds)
            })
          })]
        }), (0, mZ.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [bb.items.map((yb => {
            var bb;
            let {
              item: fy,
              amount: Zy
            } = yb;
            return (0, mZ.jsxs)("li", {
              className: Sh()({
                Done: Wy
              }),
              children: [(0, mZ.jsx)(jK, {
                item: fy
              }), (0, mZ.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, mZ.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, mZ.jsx)(Jh.d, {
                    text: null !== (bb = Uy[fy]) && void 0 !== bb ? bb : fy
                  }), (0, mZ.jsx)("span", {
                    children: hy(`${LB}coreChargeSpecItem`, {
                      need: String(Zy)
                    })
                  })]
                })
              })]
            }, fy)
          })), bb.powerPerS > 0 && (0, mZ.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, mZ.jsx)(DB, {}), (0, mZ.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, mZ.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, mZ.jsx)("span", {
                  children: hy(`${LB}coreChargePowerRow`, {
                    power: xb(bb.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const kK = "buildAFactory2Game:";

    function NB(yb) {
      let {
        def: bb,
        reached: Wy,
        banked: Uy,
        itemNames: hy
      } = yb;
      const {
        t: fy
      } = (0, Ch.D)();
      return (0, mZ.jsx)("ul", {
        className: "Baf2CoreCost",
        children: bb.cost.map((yb => {
          let {
            item: bb,
            amount: Zy
          } = yb;
          const cb = Wy ? 0 : Uy(bb);
          return (0, mZ.jsx)("li", {
            children: (0, mZ.jsx)(vK, {
              item: bb,
              itemNames: hy,
              children: (0, mZ.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: cb > 0 ? fy(`${kK}coreBankedFor`, {
                  amount: String(cb),
                  total: String(Zy)
                }) : `\xd7${Zy}`
              })
            })
          }, bb)
        }))
      })
    }

    function zK(yb, bb) {
      if (bb >= By()) return yb(`${kK}coreMaxTier`);
      const Wy = oy[bb + 1];
      return Wy && !Wy.startsWith("upgradeCore") ? yb(`${kK}coreGateQuest`, {
        quest: yb(`${kK}quest_${Wy}`)
      }) : yb(`${kK}coreGateClosed`)
    }

    function IB() {
      const {
        t: yb
      } = (0, Ch.D)(), bb = uZ(), Wy = (0, Uy.useRef)(null), hy = (0, Uy.useRef)(Date.now());
      return Lo(!0, Wy), (0, mZ.jsx)("div", {
        ref: Wy,
        className: "Baf2CoreGrow",
        children: (0, mZ.jsx)(SZ.i, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - hy.current >= 600 && bb.send(Cy)
          },
          children: yb(`${kK}coreGrow`)
        })
      })
    }

    function xK(yb) {
      let {
        message: bb,
        itemNames: Wy,
        next: Uy
      } = yb;
      const hy = uZ(),
        {
          t: fy
        } = (0, Ch.D)(),
        Zy = bb.baf2CoreTier,
        cb = bb.baf2CoreReady,
        Py = bb.baf2CoreNeeds.filter((yb => {
          let [, bb, Wy, Uy] = yb;
          return Uy > 0 && bb < Wy
        })),
        oy = bb.baf2CoreNeeds.every((yb => {
          let [, bb, Wy] = yb;
          return bb >= Wy
        })),
        By = bb.baf2CoreKeep;
      return (0, mZ.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [cb && (0, mZ.jsx)(IB, {}), (0, mZ.jsx)("h3", {
            children: fy(`${kK}coreBring`)
          }), (0, mZ.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: bb.baf2CoreNeeds.map((yb => {
              let [bb, Uy, Zy, cb] = yb;
              return (0, mZ.jsxs)("li", {
                className: Sh()({
                  Done: Uy >= Zy
                }),
                children: [(0, mZ.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, mZ.jsx)(Vh.d, {
                    itemName: bb,
                    amount: 0
                  })
                }), (0, mZ.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, mZ.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, mZ.jsx)(Jh.d, {
                      text: Wy[bb]
                    }), (0, mZ.jsxs)("span", {
                      children: [Uy, "/", Zy]
                    })]
                  }), (0, mZ.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, mZ.jsx)("div", {
                      style: {
                        width: 100 * Uy / Zy + "%"
                      }
                    }), cb > 0 && (0, mZ.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * cb / Zy + "%"
                      }
                    })]
                  })]
                }), cb > 0 && Uy < Zy && (0, mZ.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    hy.send(`${Vy} ${bb}`)
                  },
                  children: fy(`${kK}coreDeposit`, {
                    amount: String(cb)
                  })
                })]
              }, bb)
            }))
          }), bb.baf2CoreCharge && (0, mZ.jsx)(tK, {
            charge: bb.baf2CoreCharge,
            hint: bb.baf2CoreChargeHint,
            itemNames: Wy
          }), !cb && Py.length > 1 && (0, mZ.jsx)(SZ.i, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              hy.send(Cy)
            },
            children: fy(`${kK}coreHandOver`)
          }), !cb && void 0 !== By && (0, mZ.jsx)("p", {
            className: "Baf2CoreHint",
            children: fy(`${kK}coreKeepRest`, {
              item: xf(fy, By)
            })
          }), !cb && !oy && 0 === Py.length && void 0 === By && (0, mZ.jsx)("p", {
            className: "Baf2CoreHint",
            children: fy(`${kK}coreNothingHeld`)
          }), (0, mZ.jsx)(pB, {
            message: bb,
            itemNames: Wy
          })]
        }), (0, mZ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mZ.jsx)("h3", {
            children: fy(`${kK}coreRewards`)
          }), (0, mZ.jsx)(XB, {
            def: Uy,
            tier: Zy + 1,
            itemNames: Wy
          })]
        })]
      })
    }

    function AB(yb) {
      let {
        message: bb,
        itemNames: Wy,
        shown: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)(), fy = bb.baf2CoreTier, Zy = ly(Uy), cb = Uy <= fy, Py = new Map(bb.baf2CoreBanked), oy = !mb(fy, gb(bb)) && Uy === fy;
      return (0, mZ.jsxs)("div", {
        className: Sh()("Baf2CoreBody", {
          Locked: !cb
        }),
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mZ.jsx)("h3", {
            children: hy(cb ? `${kK}coreItTook` : `${kK}coreItNeeds`)
          }), 0 === Zy.cost.length && (0, mZ.jsx)("p", {
            className: "Baf2CoreHint",
            children: hy(`${kK}coreTierStart`)
          }), Zy.cost.length > 0 && (0, mZ.jsx)(NB, {
            def: Zy,
            reached: cb,
            banked: yb => {
              var bb;
              return function(yb, bb, Wy, Uy) {
                let hy = yb;
                for (let Zy = bb + 2; Zy <= Wy; Zy++) {
                  var fy;
                  const yb = ly(Zy).cost.find((yb => yb.item === Uy)),
                    bb = Math.min(hy, null !== (fy = null === yb || void 0 === yb ? void 0 : yb.amount) && void 0 !== fy ? fy : 0);
                  if (Zy === Wy) return bb;
                  hy -= bb
                }
                return 0
              }(null !== (bb = Py.get(yb)) && void 0 !== bb ? bb : 0, fy, Uy, yb)
            },
            itemNames: Wy
          }), Zy.charge && (0, mZ.jsx)(wB, {
            charge: Zy.charge,
            reached: cb,
            itemNames: Wy
          }), oy && (0, mZ.jsxs)(mZ.Fragment, {
            children: [(0, mZ.jsx)("p", {
              className: "Baf2CoreHint",
              children: zK(hy, fy)
            }), (0, mZ.jsx)(pB, {
              message: bb,
              itemNames: Wy
            })]
          })]
        }), (0, mZ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mZ.jsx)("h3", {
            children: hy(cb ? `${kK}coreGave` : `${kK}coreLockedRewards`)
          }), (0, mZ.jsx)(XB, {
            def: Zy,
            tier: Uy,
            itemNames: Wy
          })]
        })]
      })
    }

    function dB(yb, bb) {
      const {
        key: Wy,
        params: Uy
      } = qb(bb - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return yb(`${kK}${Wy}`, Uy)
    }
    const ye = "buildAFactory2Game:",
      be = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      WK = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function UK(yb) {
      let {
        view: bb,
        close: Wy,
        askIslands: hy
      } = yb;
      const {
        t: fy
      } = (0, Ch.D)(), [Zy, cb] = (0, Uy.useState)(!1);
      (0, Uy.useEffect)((() => {
        if (!Zy) return;
        const yb = window.setTimeout((() => {
          cb(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(yb)
        }
      }), [Zy]);
      const {
        message: Py,
        itemNames: oy
      } = bb, By = Py.baf2CoreTier, Ky = ly(By), ey = mb(By, gb(Py)), [Sy, Ey] = Py.baf2CoreMachines, [Cy, Ty] = Py.baf2CoreBelts, Vy = Py.baf2CoreStorage, Jy = Py.baf2CoreReady, [Gy, Oy] = (0, Uy.useState)(null), Ry = (null === Gy || void 0 === Gy ? void 0 : Gy.at) === By && Gy.ready === Jy ? Gy.tier : ey ? By + 1 : By;
      let vb = "coreTierLocked";
      Ry <= By ? vb = "coreTierReached" : Ry === By + 1 && (vb = "coreTierNext");
      const ib = fy(`${ye}${ly(Ry).nameKey}`),
        My = Ry === By + 1 ? ey : null,
        Yy = qb(Ry, {
          tier: vb,
          stage: be[vb],
          atomic: WK[vb]
        }),
        Xy = fy(`${ye}${Yy.key}`, {
          ...Yy.params,
          name: ib
        }),
        ny = qb(By, sy),
        uy = fy(`${ye}${ny.key}`, {
          ...ny.params,
          name: fy(`${ye}${Ky.nameKey}`)
        });
      return (0, mZ.jsx)(sZ.c, {
        close: Wy,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, mZ.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsxs)("div", {
              children: [(0, mZ.jsx)("h2", {
                id: "baf2CoreTitle",
                children: fy(`${ye}coreTitle`)
              }), void 0 !== Py.baf2CoreIslandName && (0, mZ.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Py.baf2CoreIslandName
              }), (0, mZ.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, mZ.jsx)("span", {
                  children: uy
                }), (0, mZ.jsx)("span", {
                  className: Sh()({
                    Full: Sy >= Ey
                  }),
                  children: fy(`${ye}coreMachineCount`, {
                    amount: String(Sy),
                    total: String(Ey)
                  })
                }), (0, mZ.jsx)("span", {
                  className: Sh()({
                    Full: Cy >= Ty
                  }),
                  children: fy(`${ye}coreBeltCount`, {
                    amount: String(Cy),
                    total: String(Ty)
                  })
                }), void 0 !== Vy && (0, mZ.jsx)("span", {
                  className: Sh()({
                    Full: Vy[0] >= Vy[1]
                  }),
                  children: fy(`${ye}coreStorageCount`, {
                    amount: String(Vy[0]),
                    total: String(Vy[1])
                  })
                })]
              })]
            }), (0, mZ.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Py.baf2CoreIslands && (0, mZ.jsx)(SZ.f, {
                className: "Baf2CoreIslandsButton",
                disabled: Zy,
                onClick: () => {
                  cb(!0), hy()
                },
                children: fy(`${ye}islandsOpenButton`)
              }), (0, mZ.jsx)(SZ.h, {
                onClick: Wy
              })]
            })]
          }), (0, mZ.jsx)(OB, {
            tier: By,
            shown: Ry,
            cU: yb => {
              Oy({
                tier: yb,
                at: By,
                ready: Jy
              })
            }
          }), (0, mZ.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Xy, Ry > By + 1 && (0, mZ.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: dB(fy, Ry)
            })]
          }), 6 === Ry && Ry > By && (0, mZ.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: fy(`${ye}coreStagesNote`)
          }), 11 === Ry && Ry > By && (0, mZ.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: fy(`${ye}coreAtomicNote`)
          }), My && (0, mZ.jsx)(xK, {
            message: Py,
            itemNames: oy,
            next: My
          }), !My && (0, mZ.jsx)(AB, {
            message: Py,
            itemNames: oy,
            shown: Ry
          })]
        })
      })
    }
    const hK = {
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
    const fK = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: bZ,
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

    function ZK(yb) {
      return yb.baf2DropCometOreOnly ? "dropCometOre" : yb.baf2DropCometIsotope ? "seed" === yb.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function ce(yb) {
      let {
        message: bb,
        quests: Wy,
        close: hy,
        qh: fy
      } = yb;
      const Zy = uZ(),
        {
          t: cb
        } = (0, Ch.D)(),
        Py = (0, zB.m)(vf, Wy.get()),
        oy = function(yb) {
          var bb;
          if (!ny(yb.tutorial)) return null;
          const Wy = yb.rows.find((yb => yb.current)),
            Uy = Wy ? hK[Wy.key] : void 0;
          return null !== (bb = null !== Uy && void 0 !== Uy ? Uy : yb.side ? hK[yb.side.row.key] : void 0) && void 0 !== bb ? bb : null
        }(Py),
        By = null === Py.tier || hf(Py.tier),
        Ky = By ? fK : fK.filter((yb => {
          let {
            item: bb
          } = yb;
          return bb !== bZ
        })),
        [ey, qb] = (0, Uy.useState)(null),
        sy = null !== ey && void 0 !== ey ? ey : !bb.baf2DropFoundSalvage && By,
        Sy = bb.baf2DropRuinDistance,
        Ey = bb.baf2DropComet,
        ly = bb.baf2DropOldWorks,
        mb = bb.baf2DropGrove,
        Cy = function(yb) {
          return 2 + Number(void 0 !== yb.baf2DropComet) + Number(!!yb.baf2DropOwedComet || void 0 !== yb.baf2DropOwedWaitMinutes) + Number(void 0 !== yb.baf2DropDigDistance) + Number(void 0 !== yb.baf2DropOldWorks) + Number(void 0 !== yb.baf2DropGrove)
        }(bb),
        Ty = yb => {
          Zy.send(function(yb) {
            return `baf2drop ${yb}`
          }(yb)), fy()
        };
      let Vy = cb("buildAFactory2Game:dropRuinNone");
      if (null !== Sy) {
        let yb = bb.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        bb.baf2DropRuinOldWorks && (yb = "dropRuinOldWorks");
        const Wy = void 0 === bb.baf2DropRuinCluster ? cb("buildAFactory2Game:dropRuinOpen") : cb("buildAFactory2Game:dropRuinCluster", {
          count: String(bb.baf2DropRuinCluster)
        });
        Vy = `${cb(`buildAFactory2Game:${yb}`,{distance:String(Sy)})} ${Wy}`
      }
      let Jy = cb("buildAFactory2Game:dropBelowDescription");
      void 0 !== bb.baf2DropBelowLook && (Jy = cb("buildAFactory2Game:dropBelowLook", {
        look: cb(bb.baf2DropBelowLook)
      }));
      const gb = "buildAFactory2Game:wildsRegion_survivorGrove" === bb.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        Gy = sf(cb, 60 * function(yb) {
          const [bb, Wy] = (0, Uy.useState)((() => Date.now())), [hy, fy] = (0, Uy.useState)(bb);
          return (0, Uy.useEffect)((() => {
            const yb = Date.now();
            Wy(yb), fy(yb)
          }), [yb]), (0, Uy.useEffect)((() => {
            const yb = window.setInterval((() => {
              fy(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(yb)
            }
          }), []), Math.max(1, yb.baf2DropRenewMinutes - Math.floor((hy - bb) / 6e4))
        }(bb)),
        Oy = function(yb, bb, Wy) {
          return "ruin" === yb && !Wy || "owed" === yb && !bb.baf2DropOwedComet ? null : yb
        }(oy, bb, null !== Sy),
        Ry = function(yb) {
          for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
          return Sh()("Baf2DropTile", ...Wy, {
            Wanted: Oy === yb
          })
        };
      return (0, mZ.jsx)(sZ.c, {
        close: hy,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mZ.jsxs)("section", {
          className: Sh()("Baf2Panel Baf2DropMap", {
            Many: Cy >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsxs)("div", {
              children: [(0, mZ.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: cb("buildAFactory2Game:dropMapTitle")
              }), (0, mZ.jsx)("p", {
                children: cb("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, mZ.jsx)(SZ.h, {
              onClick: hy
            })]
          }), (0, mZ.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== Ey && (0, mZ.jsxs)(SZ.r, {
              className: Ry("comet", "Baf2DropComet"),
              onClick: () => {
                Ty("comet")
              },
              children: [(0, mZ.jsx)("strong", {
                children: cb("buildAFactory2Game:dropComet")
              }), (0, mZ.jsx)("span", {
                children: cb(`buildAFactory2Game:${ZK(bb)}`, {
                  distance: String(Ey)
                })
              })]
            }), bb.baf2DropOwedComet && (0, mZ.jsxs)(SZ.r, {
              className: Ry("owed", "Baf2DropComet"),
              onClick: () => {
                Ty("owed")
              },
              children: [(0, mZ.jsx)("strong", {
                children: cb("buildAFactory2Game:dropOwedComet")
              }), (0, mZ.jsx)("span", {
                children: bb.baf2DropOwedIsotope ? cb("buildAFactory2Game:dropOwedIsotopeDescription") : cb("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== bb.baf2DropOwedWaitMinutes && (0, mZ.jsxs)(SZ.r, {
              className: Ry("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, mZ.jsx)("strong", {
                children: cb("buildAFactory2Game:dropOwedComet")
              }), (0, mZ.jsx)("span", {
                children: cb("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(bb.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, mZ.jsxs)(SZ.f, {
              className: Ry("below"),
              onClick: () => {
                Ty("below")
              },
              children: [(0, mZ.jsx)("strong", {
                children: cb("buildAFactory2Game:dropBelow")
              }), (0, mZ.jsx)("span", {
                children: Jy
              })]
            }), void 0 !== bb.baf2DropDigDistance && (0, mZ.jsxs)(SZ.l, {
              className: Ry("dig"),
              onClick: () => {
                Ty("dig")
              },
              children: [(0, mZ.jsx)("strong", {
                children: cb("buildAFactory2Game:dropDig")
              }), (0, mZ.jsx)("span", {
                children: cb("buildAFactory2Game:dropDigDescription", {
                  distance: String(bb.baf2DropDigDistance),
                  y: qZ(bb.baf2DropDigY)
                })
              })]
            }), void 0 !== mb && (0, mZ.jsxs)(SZ.l, {
              className: Ry("grove", "Baf2DropGrove"),
              onClick: () => {
                Ty("grove")
              },
              children: [(0, mZ.jsx)("strong", {
                children: cb("buildAFactory2Game:dropGrove")
              }), (0, mZ.jsx)("span", {
                children: cb(`buildAFactory2Game:${gb}`, {
                  distance: String(mb)
                })
              })]
            }), (0, mZ.jsxs)(SZ.i, {
              className: Ry("ruin"),
              disabled: null === Sy,
              onClick: () => {
                Ty("ruin")
              },
              children: [(0, mZ.jsx)("strong", {
                children: cb("buildAFactory2Game:dropRuin")
              }), (0, mZ.jsx)("span", {
                children: Vy
              })]
            }), void 0 !== ly && (0, mZ.jsxs)(SZ.C, {
              className: Ry("works"),
              onClick: () => {
                Ty("works")
              },
              children: [(0, mZ.jsx)("strong", {
                children: cb("buildAFactory2Game:dropOldWorks")
              }), (0, mZ.jsx)("span", {
                children: cb("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(ly)
                })
              })]
            })]
          }), (0, mZ.jsx)("p", {
            className: "Baf2DropRenew",
            children: cb("buildAFactory2Game:dropRenew", {
              time: Gy
            })
          }), (0, mZ.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: sy,
            onToggle: yb => {
              yb.currentTarget.open !== sy && qb(yb.currentTarget.open)
            },
            children: [(0, mZ.jsx)("summary", {
              children: cb("buildAFactory2Game:dropSalvageWhat")
            }), (0, mZ.jsx)("p", {
              children: cb("buildAFactory2Game:dropSalvageIntro")
            }), (0, mZ.jsx)("ul", {
              children: Ky.map((yb => {
                let {
                  item: bb,
                  nameKey: Wy,
                  useKey: Uy,
                  params: hy
                } = yb;
                return (0, mZ.jsxs)("li", {
                  children: [(0, mZ.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, mZ.jsx)(Vh.d, {
                      itemName: bb,
                      amount: 0
                    })
                  }), (0, mZ.jsxs)("span", {
                    children: [(0, mZ.jsx)("strong", {
                      children: cb(Wy)
                    }), ": ", cb(Uy, hy)]
                  })]
                }, bb)
              }))
            })]
          })]
        })
      })
    }
    const PK = "buildAFactory2Game:";

    function oK(yb, bb) {
      return yb.sendIslandEdit(`baf2coopleave ${bb.baf2IslandId}`)
    }

    function BK(yb) {
      let {
        card: bb,
        canRename: Wy,
        done: hy,
        t: fy
      } = yb;
      const Zy = uZ(),
        [cb, Py] = (0, Uy.useState)(bb.baf2IslandName),
        oy = so(cb),
        By = "" === oy || So(oy),
        Ky = () => {
          !By && Wy && (oy !== bb.baf2IslandName ? hy(Zy.sendIslandEdit(`baf2islandrename ${bb.baf2IslandId} ${oy}`)) : hy(null))
        },
        ey = () => {
          hy(null)
        };
      return (0, mZ.jsxs)("div", {
        className: "Baf2IslandForm",
        ...Fo(ey),
        children: [(0, mZ.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [fy(`${PK}islandsRenameLabel`), (0, mZ.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: cb,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: po,
            onChange: yb => {
              Py(yb.target.value)
            },
            ...aB(Ky, ey)
          })]
        }), "" === oy && (0, mZ.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: fy(`${PK}islandsRenameEmpty`)
        }), So(oy) && (0, mZ.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: fy(`${PK}islandsNameReserved`)
        }), (0, mZ.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, mZ.jsx)(SZ.l, {
            disabled: By || !Wy,
            onClick: Ky,
            children: fy(`${PK}islandsRenameSave`)
          }), (0, mZ.jsx)(SZ.f, {
            onClick: ey,
            children: fy(`${PK}islandsCancel`)
          })]
        })]
      })
    }

    function KK(yb) {
      let {
        card: bb,
        canDelete: Wy,
        done: hy,
        t: fy
      } = yb;
      const Zy = uZ(),
        [cb, Py] = (0, Uy.useState)(""),
        oy = function(yb, bb) {
          return so(yb).toLowerCase() === so(bb).toLowerCase()
        }(cb, bb.baf2IslandName),
        By = () => {
          oy && Wy && hy(Zy.sendIslandEdit(`baf2islanddelete ${bb.baf2IslandId}`))
        },
        Ky = () => {
          hy(null)
        },
        ey = Ro("name"),
        [qb, sy = ""] = fy(`${PK}islandsDeleteConfirm`, {
          name: ey
        }).split(ey);
      return (0, mZ.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...Fo(Ky),
        children: [(0, mZ.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, mZ.jsxs)("span", {
            children: [qb, (0, mZ.jsx)("strong", {
              children: bb.baf2IslandName
            }), sy]
          }), (0, mZ.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: cb,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: po,
            onChange: yb => {
              Py(yb.target.value)
            },
            ...aB(By, Ky)
          })]
        }), no(bb) && (0, mZ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: fy(`${PK}islandsDeleteLeftBack`)
        }), (0, mZ.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, mZ.jsx)(SZ.C, {
            disabled: !oy || !Wy,
            onClick: By,
            children: fy(`${PK}islandsDeleteForGood`)
          }), (0, mZ.jsx)(SZ.f, {
            onClick: Ky,
            children: fy(`${PK}islandsCancel`)
          })]
        })]
      })
    }

    function eK(yb) {
      let {
        members: bb,
        t: Wy
      } = yb;
      const Uy = bb.length;
      return (0, mZ.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, mZ.jsxs)("span", {
          children: [1 === Uy ? Wy(`${PK}islandsPlayersOne`) : Wy(`${PK}islandsPlayers`, {
            count: String(Uy)
          }), " "]
        }), bb.map(((yb, bb) => (0, mZ.jsxs)("span", {
          className: Sh()("Baf2IslandMember", {
            Here: yb.baf2MemberHere
          }),
          title: yb.baf2MemberHere ? Wy(`${PK}islandsPlayerHere`) : void 0,
          children: [yb.baf2MemberName, bb < Uy - 1 ? ", " : ""]
        }, yb.baf2MemberKey)))]
      })
    }

    function qe(yb) {
      let {
        card: bb,
        answered: Wy,
        nowMs: hy,
        t: fy
      } = yb;
      const Zy = uZ(),
        [cb, Py] = (0, Uy.useState)(new Map),
        oy = no(bb);
      if (!oy) return null;
      return (0, mZ.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, mZ.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: fy(`${PK}islandsLeftTitle`)
        }), (0, mZ.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: oy.left.map((yb => {
            const Uy = yb.baf2LeftKey,
              By = rB(cb.get(Uy), Wy, hy),
              Ky = function(yb) {
                return 1 === yb ? [`${Bo}islandsLeftItemsOne`] : [`${Bo}islandsLeftItems`, {
                  count: String(yb)
                }]
              }(yb.baf2LeftItems);
            return (0, mZ.jsx)("li", {
              className: Sh()("Baf2IslandPerson", {
                Pending: By
              }),
              children: (0, mZ.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, mZ.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: yb.baf2LeftName
                }), (0, mZ.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: fy(Ky[0], Ky[1])
                }), oy.claim && (0, mZ.jsx)(SZ.l, {
                  className: "Baf2IslandPersonButton",
                  disabled: By,
                  onClick: () => {
                    (yb => {
                      const Wy = Zy.sendIslandEdit(`baf2coopclaim ${bb.baf2IslandId} ${yb}`);
                      Py((bb => new Map(bb).set(yb, {
                        atMs: Date.now(),
                        answer: Wy
                      })))
                    })(Uy)
                  },
                  children: fy(`${PK}islandsClaim`)
                })]
              })
            }, Uy)
          }))
        }), oy.goThere && (0, mZ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: fy(`${PK}islandsClaimGoThere`)
        })]
      })
    }

    function sK(yb) {
      let {
        card: bb,
        view: Wy,
        blocked: hy,
        maxIslands: fy,
        answered: Zy,
        nowMs: cb,
        done: Py,
        openSocial: oy,
        t: By
      } = yb;
      const Ky = uZ(),
        [ey, qb] = (0, Uy.useState)(new Map),
        [sy, Sy] = (0, Uy.useState)(new Map),
        [Ey, ly] = (0, Uy.useState)(null),
        mb = (0, Uy.useRef)(null);
      jB(mb);
      const Cy = bb.baf2IslandId,
        Ty = bb.baf2IslandCoop,
        Vy = null !== Ty && void 0 !== Ty && Ty.baf2CoopMembers.some((yb => yb.baf2MemberKey === Ey)) ? Ey : null,
        Jy = function(yb, bb) {
          const Wy = yb.baf2IslandCoop;
          return Wy && uo(Wy) || null !== bb ? void 0 : yb.baf2IslandInvitable
        }(bb, hy),
        gb = function(yb, bb) {
          const Wy = yb.baf2IslandCoop;
          return Wy && uo(Wy) ? {
            key: `${Bo}islandsCoopFull`,
            params: {
              max: String(Wy.baf2CoopMax)
            }
          } : void 0 !== yb.baf2IslandInvitable && null === bb || Wy && !Wy.baf2CoopManageHere ? null : "degraded" === bb || "stuck" === bb ? {
            key: `${Bo}islandsInviteNotLoaded`
          } : null === bb || function(yb) {
            return "notHome" === yb || "wilds" === yb || "visiting" === yb
          }(bb) || Co(bb) ? {
            key: `${Bo}islandsInviteGoThere`
          } : {
            key: `${Bo}islandsInviteBusy`
          }
        }(bb, hy),
        Gy = () => {
          var yb;
          ly(null), null === (yb = mb.current) || void 0 === yb || yb.focus()
        };
      return (0, mZ.jsxs)("div", {
        ref: mb,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...Fo(null === Vy ? Py : Gy),
        children: [Ty && (0, mZ.jsxs)(mZ.Fragment, {
          children: [(0, mZ.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: By(`${PK}islandsPlayersTitle`, {
              count: String(Ty.baf2CoopMembers.length),
              max: String(Ty.baf2CoopMax)
            })
          }), (0, mZ.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: Ty.baf2CoopMembers.map(((yb, bb) => {
              const Uy = yb.baf2MemberKey,
                hy = rB(ey.get(Uy), Zy, cb);
              return (0, mZ.jsxs)("li", {
                className: Sh()("Baf2IslandPerson", {
                  Pending: hy
                }),
                children: [(0, mZ.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, mZ.jsx)("span", {
                    className: Sh()("Baf2IslandPersonName", {
                      Here: yb.baf2MemberHere
                    }),
                    children: yb.baf2MemberName
                  }), yb.baf2MemberHere && (0, mZ.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: By(`${PK}islandsPlayerHere`)
                  }), 0 === bb && (0, mZ.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: By(`${PK}islandsPlayerOwner`)
                  }), Wy.remove && bb > 0 && !hy && Vy !== Uy && (0, mZ.jsx)(SZ.F, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var yb;
                      ly(Uy), null === (yb = mb.current) || void 0 === yb || yb.focus()
                    },
                    children: By(`${PK}islandsRemove`)
                  })]
                }), Vy === Uy && (0, mZ.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, mZ.jsx)("p", {
                    children: vB(By, `${PK}islandsRemoveConfirm`, {
                      player: yb.baf2MemberName
                    })
                  }), (0, mZ.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, mZ.jsx)(SZ.C, {
                      onClick: () => {
                        (yb => {
                          const bb = Ky.sendIslandEdit(`baf2coopremove ${Cy} ${yb.baf2MemberKey}`);
                          qb((Wy => new Map(Wy).set(yb.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: bb
                          }))), Gy()
                        })(yb)
                      },
                      children: By(`${PK}islandsRemoveYes`)
                    }), (0, mZ.jsx)(SZ.f, {
                      onClick: Gy,
                      children: By(`${PK}islandsCancel`)
                    })]
                  })]
                })]
              }, Uy)
            }))
          })]
        }), (void 0 !== Jy || null !== gb) && (0, mZ.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: By(`${PK}islandsInviteTitle`)
        }), !Ty && (void 0 !== Jy || null !== gb) && (0, mZ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: By(`${PK}islandsInviteShareNote`)
        }), 0 === (null === Jy || void 0 === Jy ? void 0 : Jy.length) && (0, mZ.jsx)(SK, {
          openSocial: oy,
          t: By
        }), void 0 !== Jy && Jy.length > 0 && (0, mZ.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Jy.map((yb => {
            const bb = !0 === yb.baf2InvitableSent || rB(sy.get(yb.baf2InvitableId), Zy, cb);
            return (0, mZ.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, mZ.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, mZ.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: yb.baf2InvitableName
                }), yb.baf2InvitableFull && !bb && (0, mZ.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: By(`${PK}islandsInviteTheirFull`, {
                    max: String(fy)
                  })
                }), (bb || !yb.baf2InvitableFull) && (0, mZ.jsx)(SZ.l, {
                  className: "Baf2IslandPersonButton",
                  disabled: bb,
                  onClick: () => {
                    (yb => {
                      const bb = Ky.sendIslandEdit(`baf2coopinvite ${Cy} ${yb}`);
                      Sy((Wy => new Map(Wy).set(yb, {
                        atMs: Date.now(),
                        answer: bb
                      })))
                    })(yb.baf2InvitableId)
                  },
                  children: By(bb ? `${PK}islandsInvited` : `${PK}islandsInvite`)
                })]
              })
            }, yb.baf2InvitableId)
          }))
        }), gb && (0, mZ.jsx)(wo, {
          note: gb,
          t: By
        }), (0, mZ.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, mZ.jsx)(SZ.f, {
            onClick: Py,
            children: By(`${PK}islandsDone`)
          })
        })]
      })
    }

    function SK(yb) {
      let {
        openSocial: bb,
        t: Wy
      } = yb;
      return (0, mZ.jsxs)(mZ.Fragment, {
        children: [(0, mZ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Wy(bb ? `${PK}islandsInviteNobody` : `${PK}islandsInviteNobodyGuest`)
        }), bb && (0, mZ.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, mZ.jsx)(SZ.f, {
            onClick: bb,
            children: Wy("socialBar:social")
          })
        })]
      })
    }

    function EK(yb) {
      let {
        className: bb,
        text: Wy,
        ConfirmButton: hy,
        confirmLabel: fy,
        canConfirm: Zy,
        send: cb,
        done: Py,
        t: oy
      } = yb;
      const By = (0, Uy.useRef)(null);
      jB(By);
      const Ky = () => {
        Py(null)
      };
      return (0, mZ.jsxs)("div", {
        ref: By,
        tabIndex: -1,
        className: Sh()("Baf2IslandForm", bb),
        ...Fo(Ky),
        children: [(0, mZ.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Wy
        }), (0, mZ.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, mZ.jsx)(hy, {
            disabled: !Zy,
            onClick: () => {
              Zy && Py(cb())
            },
            children: fy
          }), (0, mZ.jsx)(SZ.f, {
            onClick: Ky,
            children: oy(`${PK}islandsCancel`)
          })]
        })]
      })
    }

    function lK(yb) {
      return "hidden" !== yb
    }

    function me(yb) {
      var bb, Wy;
      let {
        card: hy,
        keepOwn: fy,
        blocked: Zy,
        maxIslands: cb,
        serverNowMs: Py,
        nowMs: oy,
        actions: By,
        full: Ky,
        waits: ey,
        answered: qb,
        mode: sy,
        setMode: Sy,
        pending: Ey,
        onSent: ly,
        switchTo: mb,
        qh: Cy,
        coopOn: Ty,
        openSocial: Vy,
        t: Jy
      } = yb;
      const gb = uZ(),
        Gy = hy.baf2IslandActive,
        Oy = Gy ? null : function(yb, bb) {
          if (yb <= 0) return null;
          const Wy = bb - yb;
          if (Wy < of) return [`${Bo}islandsPlayedJustNow`];
          if (Wy < Ko) return [`${Bo}islandsPlayedMinutes`, {
            minutes: String(Math.floor(Wy / of))
          }];
          if (Wy < eo) return [`${Bo}islandsPlayedHours`, {
            hours: String(Math.floor(Wy / Ko))
          }];
          const Uy = Math.floor(Wy / eo);
          return 1 === Uy ? [`${Bo}islandsPlayedDay`] : [`${Bo}islandsPlayedDays`, {
            days: String(Uy)
          }]
        }(hy.baf2IslandLastPlayedMs, Py),
        Ry = void 0 === (vb = hy.baf2IslandItems) ? null : 0 === vb ? [`${Bo}islandsItemsNone`] : 1 === vb ? [`${Bo}islandsItemsOne`] : [`${Bo}islandsItems`, {
          count: String(vb)
        }];
      var vb;
      const ib = function(yb) {
          return yb ? 1 === yb ? [`${Bo}islandsWaitingOne`] : [`${Bo}islandsWaiting`, {
            count: String(yb)
          }] : null
        }(hy.baf2IslandWaiting),
        My = hy.baf2IslandUnreadable,
        Yy = hy.baf2IslandCoop,
        Xy = Xo(hy, By, fy, Ky, Ty),
        ny = (0, Uy.useRef)(null);
      Lo(null !== sy, ny);
      const uy = () => {
          var yb;
          Sy(null), null === (yb = ny.current) || void 0 === yb || yb.focus()
        },
        rb = (yb, bb) => {
          uy(), null !== yb && ly(yb, bb)
        },
        Hy = (yb, bb) => Jy(`${PK}${yb}`, {
          time: sf(Jy, bb)
        });
      return (0, mZ.jsxs)("li", {
        ref: ny,
        tabIndex: -1,
        className: Sh()("Baf2IslandCard", {
          Active: Gy,
          Pending: Ey,
          Shared: void 0 !== Yy
        }),
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, mZ.jsx)("strong", {
            className: "Baf2IslandName",
            children: hy.baf2IslandName
          }), Gy && (0, mZ.jsx)("span", {
            className: "Baf2IslandBadge",
            children: Jy(`${PK}islandsOnThis`)
          }), Yy && (0, mZ.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: Jy(`${PK}islandsShared`)
          })]
        }), "member" === (null === Yy || void 0 === Yy ? void 0 : Yy.baf2CoopRole) && (0, mZ.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: vB(Jy, `${PK}islandsSharedBy`, {
            owner: Yy.baf2CoopOwner
          })
        }), void 0 !== My && (0, mZ.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: Jy("newer" === My ? `${PK}islandsUnreadable` : `${PK}islandsDamaged`)
        }), "corrupt" === My && Ky && (0, mZ.jsx)("p", {
          className: "Baf2IslandStats",
          children: Jy(`${PK}islandsDamagedFull`)
        }), void 0 === My && (0, mZ.jsxs)(mZ.Fragment, {
          children: [(0, mZ.jsx)(tB, {
            tier: hy.baf2IslandTier,
            t: Jy
          }), (0, mZ.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, mZ.jsx)("span", {
              children: 1 === hy.baf2IslandQuestsDone ? Jy(`${PK}islandsQuestsDoneOne`) : Jy(`${PK}islandsQuestsDone`, {
                count: String(hy.baf2IslandQuestsDone)
              })
            }), (0, mZ.jsx)("span", {
              children: 1 === hy.baf2IslandMachines ? Jy(`${PK}islandsMachinesOne`) : Jy(`${PK}islandsMachines`, {
                count: String(hy.baf2IslandMachines)
              })
            }), Ry && (0, mZ.jsx)("span", {
              children: Jy(Ry[0], Ry[1])
            }), ib && (0, mZ.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: Jy(ib[0], ib[1])
            }), Oy && (0, mZ.jsx)("span", {
              children: Jy(Oy[0], Oy[1])
            })]
          })]
        }), Yy && void 0 === Yy.baf2CoopState && "people" !== sy && (0, mZ.jsx)(eK, {
          members: Yy.baf2CoopMembers,
          t: Jy
        }), null === sy && (0, mZ.jsx)(qe, {
          card: hy,
          answered: qb,
          nowMs: oy,
          t: Jy
        }), Xy.note && (0, mZ.jsx)(wo, {
          note: Xy.note,
          className: Sh()({
            Unreachable: void 0 !== (null === Yy || void 0 === Yy ? void 0 : Yy.baf2CoopState)
          }),
          t: Jy
        }), "rename" === sy && (0, mZ.jsx)(BK, {
          card: hy,
          canRename: "enabled" === Xy.rename,
          done: rb,
          t: Jy
        }), "delete" === sy && (0, mZ.jsx)(KK, {
          card: hy,
          canDelete: "enabled" === Xy.delete,
          done: yb => {
            rb(yb, Yy ? "delete" : void 0)
          },
          t: Jy
        }), "people" === sy && (0, mZ.jsx)(sK, {
          card: hy,
          view: Xy,
          blocked: Zy,
          maxIslands: cb,
          answered: qb,
          nowMs: oy,
          done: uy,
          openSocial: Vy,
          t: Jy
        }), "qh" === sy && (0, mZ.jsx)(EK, {
          className: "Leave",
          text: vB(Jy, `${PK}islandsLeaveConfirm`, {
            island: hy.baf2IslandName,
            owner: null !== (bb = null === (Wy = hy.baf2IslandCoop) || void 0 === Wy ? void 0 : Wy.baf2CoopOwner) && void 0 !== bb ? bb : ""
          }),
          ConfirmButton: SZ.C,
          confirmLabel: Jy(`${PK}islandsLeaveYes`),
          canConfirm: "enabled" === Xy.qh,
          send: () => oK(gb, hy),
          done: yb => {
            rb(yb, "qh"), null !== yb && Gy && Cy()
          },
          t: Jy
        }), "unshare" === sy && (0, mZ.jsx)(EK, {
          className: "Unshare",
          text: vB(Jy, `${PK}islandsStopSharingConfirm`, {
            island: hy.baf2IslandName
          }),
          ConfirmButton: SZ.l,
          confirmLabel: Jy(`${PK}islandsStopSharing`),
          canConfirm: "enabled" === Xy.unshare,
          send: () => gb.sendIslandEdit(`baf2coopunshare ${hy.baf2IslandId}`),
          done: yb => {
            rb(yb), null !== yb && Cy()
          },
          t: Jy
        }), null === sy && !Ey && (0, mZ.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": hy.baf2IslandName,
          children: [lK(Xy.switch) && (0, mZ.jsx)(SZ.l, {
            disabled: "enabled" !== Xy.switch,
            onClick: mb,
            children: ey.switch > 0 ? Hy("islandsSwitchIn", ey.switch) : Jy(`${PK}islandsSwitch`)
          }), lK(Xy.rename) && (0, mZ.jsx)(SZ.f, {
            disabled: "enabled" !== Xy.rename,
            onClick: () => {
              Sy("rename")
            },
            children: Jy(`${PK}islandsRename`)
          }), lK(Xy.people) && (0, mZ.jsx)(SZ.f, {
            disabled: "enabled" !== Xy.people,
            onClick: () => {
              Sy("people")
            },
            children: Jy("players" === Xy.peopleLabel ? `${PK}islandsPlayersButton` : `${PK}islandsInviteButton`)
          }), lK(Xy.unshare) && (0, mZ.jsx)(SZ.f, {
            disabled: "enabled" !== Xy.unshare,
            onClick: () => {
              Sy("unshare")
            },
            children: Jy(`${PK}islandsStopSharing`)
          }), lK(Xy.dismiss) && (0, mZ.jsx)(SZ.f, {
            disabled: "enabled" !== Xy.dismiss,
            onClick: () => {
              ly(oK(gb, hy), "dismiss"), Gy && Cy()
            },
            children: Jy(`${PK}islandsDismiss`)
          }), lK(Xy.qh) && (0, mZ.jsx)(SZ.F, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Xy.qh,
            onClick: () => {
              Sy("qh")
            },
            children: Gy && ey.switch > 0 ? Hy("islandsLeaveIn", ey.switch) : Jy(`${PK}islandsLeave`)
          }), lK(Xy.delete) && (0, mZ.jsx)(SZ.F, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Xy.delete,
            onClick: () => {
              Sy("delete")
            },
            children: ey.change > 0 && Xy.deleteWaits ? Hy("islandsDeleteIn", ey.change) : Jy(`${PK}islandsDelete`)
          })]
        })]
      })
    }
    const CK = "buildAFactory2Game:";

    function TK(yb) {
      let {
        invite: bb,
        actions: Wy,
        full: hy,
        maxIslands: fy,
        waitSeconds: Zy,
        focus: cb,
        focused: Py,
        join: oy,
        decline: By,
        t: Ky
      } = yb;
      const [ey, qb] = (0, Uy.useState)(!1), sy = (0, Uy.useRef)(null);
      Lo(ey, sy), (0, Uy.useEffect)((() => {
        var yb;
        cb && (qb(!0), null === (yb = sy.current) || void 0 === yb || yb.focus(), Py())
      }), [cb, Py]);
      const Sy = function(yb, bb, Wy, Uy, hy) {
          return Wy ? {
            join: !1,
            note: {
              key: `${Bo}islandsJoinTooMany`,
              params: {
                max: String(Uy)
              }
            }
          } : yb.baf2InvitePlayers >= hy ? {
            join: !1,
            note: {
              key: `${Bo}islandsJoinFull`
            }
          } : {
            join: bb.switch,
            note: null
          }
        }(bb, Wy, hy, fy, 10),
        Ey = bb.baf2InviteIsland,
        ly = bb.baf2InvitePlayers,
        mb = () => {
          var yb;
          qb(!1), null === (yb = sy.current) || void 0 === yb || yb.focus()
        },
        Cy = Zy > 0 && null === Sy.note ? Ky(`${CK}islandsJoinIn`, {
          time: sf(Ky, Zy)
        }) : Ky(`${CK}islandsJoin`);
      return (0, mZ.jsxs)("li", {
        ref: sy,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...ey ? Fo(mb) : {},
        children: [(0, mZ.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, mZ.jsx)("strong", {
            className: "Baf2IslandName",
            children: Ey
          })
        }), (0, mZ.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: vB(Ky, `${CK}islandsInvitedBy`, {
            owner: bb.baf2InviteOwner
          })
        }), (0, mZ.jsx)(tB, {
          tier: bb.baf2InviteTier,
          t: Ky
        }), (0, mZ.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, mZ.jsx)("span", {
            children: 1 === ly ? Ky(`${CK}islandsPlayersCountOne`) : Ky(`${CK}islandsPlayersCount`, {
              count: String(ly)
            })
          })
        }), Sy.note && (0, mZ.jsx)(wo, {
          note: Sy.note,
          t: Ky
        }), ey && (0, mZ.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: vB(Ky, `${CK}islandsJoinConfirm`, {
            island: Ey
          })
        }), !ey && (0, mZ.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Ey,
          children: [(0, mZ.jsx)(SZ.l, {
            disabled: !Sy.join,
            onClick: () => {
              var yb;
              qb(!0), null === (yb = sy.current) || void 0 === yb || yb.focus()
            },
            children: Cy
          }), (0, mZ.jsx)(SZ.f, {
            onClick: By,
            children: Ky(`${CK}islandsDecline`)
          })]
        }), ey && (0, mZ.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, mZ.jsx)(SZ.l, {
            disabled: !Sy.join,
            onClick: oy,
            children: Ky(`${CK}islandsJoinYes`)
          }), (0, mZ.jsx)(SZ.f, {
            onClick: mb,
            children: Ky(`${CK}islandsCancel`)
          })]
        })]
      })
    }

    function VK(yb) {
      let {
        invites: bb,
        actions: Wy,
        full: Uy,
        maxIslands: hy,
        waitSeconds: fy,
        focus: Zy,
        focused: cb,
        qh: Py,
        declined: oy,
        t: By
      } = yb;
      const Ky = uZ();
      return (0, mZ.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, mZ.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: By(`${CK}islandsInvitesTitle`)
        }), (0, mZ.jsx)("ul", {
          className: "Baf2IslandCards",
          children: bb.map((yb => {
            const bb = yb.baf2InviteId;
            return (0, mZ.jsx)(TK, {
              invite: yb,
              actions: Wy,
              full: Uy,
              maxIslands: hy,
              waitSeconds: fy,
              focus: Zy === bb,
              focused: cb,
              join: () => {
                Ky.send(`baf2coopaccept ${bb}`), Py()
              },
              decline: () => {
                Ky.send(`baf2coopdecline ${bb}`), oy(bb)
              },
              t: By
            }, bb)
          }))
        })]
      })
    }
    const JK = "buildAFactory2Game:";

    function ge(yb) {
      let {
        cards: bb,
        activeName: Wy,
        canStart: hy,
        waitSeconds: fy,
        qh: Zy,
        t: cb
      } = yb;
      const Py = uZ(),
        [oy, By] = (0, Uy.useState)(!1),
        [Ky, ey] = (0, Uy.useState)(""),
        qb = (0, Uy.useRef)(null);
      Lo(oy, qb), (0, Uy.useEffect)((() => {
        var yb;
        oy && (null === (yb = qb.current) || void 0 === yb || yb.focus())
      }), [oy]);
      const sy = Eo(bb),
        Sy = so(Ky),
        Ey = So(Sy),
        ly = () => {
          hy && !Ey && (Py.send("" === Sy || Sy === sy ? zb : `${zb} ${Sy}`), Zy())
        },
        mb = () => {
          var yb;
          By(!1), null === (yb = qb.current) || void 0 === yb || yb.focus()
        };
      return (0, mZ.jsxs)("li", {
        ref: qb,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...oy ? Fo(mb) : {},
        children: [(0, mZ.jsx)("strong", {
          className: "Baf2IslandName",
          children: cb(`${JK}islandsNewTitle`)
        }), !oy && (0, mZ.jsx)("p", {
          className: "Baf2IslandStats",
          children: cb(`${JK}islandsNewNote`)
        }), oy && (0, mZ.jsxs)(mZ.Fragment, {
          children: [(0, mZ.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: vB(cb, `${JK}islandsNewConfirm`, {
              name: Wy
            })
          }), (0, mZ.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [cb(`${JK}islandsNewNameLabel`), (0, mZ.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Ky,
              placeholder: sy,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: po,
              onChange: yb => {
                ey(yb.target.value)
              },
              ...aB(ly, mb)
            })]
          }), Ey && (0, mZ.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: cb(`${JK}islandsNameReserved`)
          })]
        }), (0, mZ.jsxs)("div", {
          className: Sh()("Baf2IslandButtons", {
            Stacked: oy
          }),
          children: [(0, mZ.jsx)(SZ.l, {
            disabled: !hy || oy && Ey,
            onClick: () => {
              if (!oy) return ey(sy), void By(!0);
              ly()
            },
            children: fy > 0 ? cb(`${JK}islandsNewIn`, {
              time: sf(cb, fy)
            }) : cb(oy ? `${JK}islandsNewConfirmButton` : `${JK}islandsNew`)
          }), oy && (0, mZ.jsx)(SZ.f, {
            onClick: mb,
            children: cb(`${JK}islandsCancel`)
          })]
        })]
      })
    }

    function GK(yb) {
      var bb, Wy;
      let {
        message: hy,
        arrivedAtMs: fy,
        close: Zy,
        qh: cb,
        openSocial: Py
      } = yb;
      const oy = uZ(),
        {
          t: By
        } = (0, Ch.D)(),
        Ky = Do(1e3),
        [ey, qb] = (0, Uy.useState)(null),
        [sy, Sy] = (0, Uy.useState)(new Map),
        [Ey, ly] = (0, Uy.useState)(new Set),
        mb = hy.baf2IslandCards,
        Cy = function(yb, bb, Wy, Uy) {
          return (null !== yb && void 0 !== yb ? yb : []).filter((yb => bb + yb.baf2InviteLeftMs > Wy && !Uy.has(yb.baf2InviteId)))
        }(hy.baf2IslandsInvites, fy, Ky, Ey),
        Ty = Cy.map((yb => yb.baf2InviteId)).join(" "),
        Vy = (0, Uy.useRef)(null),
        Jy = Qo(Vy);
      (0, Uy.useEffect)((() => {
        var yb, bb;
        null !== (yb = Vy.current) && void 0 !== yb && yb.contains(document.activeElement) || (null === (bb = Vy.current) || void 0 === bb || bb.focus())
      }), [hy, Ty]), (0, Uy.useEffect)((() => {
        Sy((yb => function(yb, bb, Wy, Uy) {
          const hy = new Map;
          for (const fy of bb) {
            const bb = yb.get(fy.baf2IslandId);
            bb && (void 0 !== bb.untilGone || Uy < bb.answer) && gB(bb, fy, Wy) && hy.set(fy.baf2IslandId, bb)
          }
          return hy.size === yb.size ? yb : hy
        }(yb, hy.baf2IslandCards, Date.now(), hy.baf2IslandsAnswered)))
      }), [hy]);
      const gb = qB(fy, hy.baf2IslandsWaitMs, Ky),
        Gy = hy.baf2IslandsBlocked,
        Oy = To(Gy, gb),
        Ry = function(yb, bb) {
          const Wy = To(yb, 0);
          return {
            switch: Wy.switch ? bb : 0,
            change: Wy.change ? bb : 0
          }
        }(Gy, gb),
        vb = mb.length >= hy.baf2IslandsMax,
        ib = mb.length > 0,
        My = function(yb, bb, Wy) {
          return yb + Math.max(0, Wy - bb)
        }(hy.baf2IslandsNowMs, fy, Ky),
        Yy = null !== (bb = null === (Wy = mb.find((yb => yb.baf2IslandActive))) || void 0 === Wy ? void 0 : Wy.baf2IslandName) && void 0 !== bb ? bb : "",
        Xy = function(yb) {
          const bb = yb.filter(Yo).length;
          return bb <= 1 && bb < yb.length
        }(mb),
        ny = !0 === hy.baf2IslandsCoop,
        uy = function(yb, bb) {
          const Wy = yb.find((yb => yb.baf2IslandActive)),
            Uy = null === Wy || void 0 === Wy ? void 0 : Wy.baf2IslandCoop;
          return Wy && "member" === (null === Uy || void 0 === Uy ? void 0 : Uy.baf2CoopRole) ? {
            key: `${Bo}islandsKeepOwnMember`,
            names: {
              owner: Uy.baf2CoopOwner,
              island: Wy.baf2IslandName
            }
          } : {
            key: bb ? `${Bo}islandsKeepOwn` : `${Bo}islandsKeepOwnSolo`
          }
        }(mb, ny),
        [rb, Hy] = (0, Uy.useState)(null);
      (0, Uy.useEffect)((() => {
        void 0 !== hy.baf2IslandsFocusInvite && Hy(hy.baf2IslandsFocusInvite)
      }), [hy]);
      const ab = (0, Uy.useCallback)((() => {
          Hy(null)
        }), []),
        Fy = ey ? mb.find((yb => yb.baf2IslandId === ey.id)) : void 0,
        py = ey && Fy && "hidden" !== Xo(Fy, Oy, Xy, vb, ny)[ey.mode] ? ey : null;
      return (0, mZ.jsx)(sZ.c, {
        close: Zy,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, mZ.jsxs)("section", {
          ref: Vy,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: Jy ? {
            marginTop: `${Jy.marginTop}px`,
            maxHeight: `${Jy.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsxs)("div", {
              children: [(0, mZ.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: By(`${JK}islandsTitle`)
              }), ib && (0, mZ.jsx)("p", {
                children: By(`${JK}islandsSubtitle`, {
                  count: String(mb.length),
                  max: String(hy.baf2IslandsMax)
                })
              })]
            }), (0, mZ.jsx)(SZ.h, {
              ariaLabel: By(`${JK}islandsClose`),
              onClick: Zy
            })]
          }), (0, mZ.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== Gy && (0, mZ.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: vB(By, loy(Gy, mB(mb)), {
                island: Yy
              })
            }), ib && Cy.length > 0 && (0, mZ.jsx)(VK, {
              invites: Cy,
              actions: Oy,
              full: vb,
              maxIslands: hy.baf2IslandsMax,
              waitSeconds: Ry.switch,
              focus: rb,
              focused: ab,
              qh: cb,
              declined: yb => {
                ly((bb => new Set(bb).add(yb)))
              },
              t: By
            }), ib && (0, mZ.jsxs)(mZ.Fragment, {
              children: [vb && (0, mZ.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: By(`${JK}islandsFull`, {
                  max: String(hy.baf2IslandsMax)
                })
              }), (0, mZ.jsx)("p", {
                className: "Baf2IslandsNote",
                children: vB(By, uy.key, uy.names)
              }), (0, mZ.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [mb.map((yb => {
                  const bb = yb.baf2IslandId;
                  return (0, mZ.jsx)(me, {
                    card: yb,
                    keepOwn: Xy,
                    coopOn: ny,
                    openSocial: Py,
                    blocked: Gy,
                    maxIslands: hy.baf2IslandsMax,
                    serverNowMs: My,
                    nowMs: Ky,
                    actions: Oy,
                    full: vb,
                    waits: Ry,
                    answered: hy.baf2IslandsAnswered,
                    mode: (null === py || void 0 === py ? void 0 : py.id) === bb ? py.mode : null,
                    setMode: yb => {
                      qb(null === yb ? null : {
                        id: bb,
                        mode: yb
                      })
                    },
                    pending: gB(sy.get(bb), yb, Ky),
                    onSent: (Wy, Uy) => {
                      Sy((hy => {
                        const fy = {
                          atMs: Date.now(),
                          from: yb.baf2IslandName,
                          answer: Wy
                        };
                        return new Map(hy).set(bb, Uy ? {
                          ...fy,
                          untilGone: Uy
                        } : fy)
                      }))
                    },
                    qh: cb,
                    switchTo: () => {
                      oy.send(`baf2islandswitch ${bb}`), cb()
                    },
                    t: By
                  }, bb)
                })), !vb && (0, mZ.jsx)(ge, {
                  cards: mb,
                  activeName: Yy,
                  canStart: Oy.change,
                  waitSeconds: Ry.change,
                  qh: cb,
                  t: By
                })]
              })]
            })]
          })]
        })
      })
    }
    const OK = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Mf: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      RK = Object.keys(OK),
      ve = new Set([...Object.keys(Qb), ...[...Rb.Press.recipes, ...Rb["Wire Mill"].recipes].map((yb => yb.output))]),
      ie = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      MK = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      YK = / Bar$|Alloy$/,
      XK = /Porkchop|Beef|Mutton|Venison|Steak/,
      nK = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;

    function uK(yb) {
      let {
        item: bb,
        name: Wy,
        amount: Uy,
        selected: hy,
        small: fy,
        onPick: Zy
      } = yb;
      return (0, mZ.jsxs)("button", {
        type: "button",
        className: Sh()("Baf2TermTile", {
          On: hy,
          Small: fy
        }),
        "aria-label": `${Wy}: ${Uy}`,
        "aria-pressed": hy,
        onClick: Zy,
        children: [(0, mZ.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, mZ.jsx)(Vh.d, {
            itemName: bb,
            amount: 0
          })
        }), (0, mZ.jsx)("span", {
          className: "Baf2TermCount",
          children: ef(Uy, 1e4)
        }), !fy && (0, mZ.jsx)("span", {
          className: "Baf2TermName",
          children: Wy
        })]
      })
    }

    function re(yb) {
      let {
        store: bb,
        close: Wy,
        send: hy
      } = yb;
      const {
        t: fy
      } = (0, Ch.D)(), {
        isTouchScreen: Zy
      } = (0, eh.h)(["isTouchScreen"]);
      ! function(yb) {
        const [bb, Wy] = (0, Uy.useState)(yb.version);
        (0, Uy.useEffect)((() => (Wy(yb.version), yb.subscribe((() => {
          Wy(yb.version)
        })))), [yb])
      }(bb);
      const [cb, Py] = (0, Uy.useState)("all"), [oy, By] = (0, Uy.useState)(!1), [Ky, ey] = (0, Uy.useState)(""), [qb, sy] = (0, Uy.useState)(""), [Sy, Ey] = (0, Uy.useState)(null), [ly, mb, Cy] = function() {
        const yb = (0, Uy.useRef)(null),
          [bb, Wy] = (0, Uy.useState)(!1),
          hy = () => {
            const bb = yb.current;
            Wy(null !== bb && bb.scrollLeft + bb.clientWidth < bb.scrollWidth - 1)
          };
        return (0, Uy.useEffect)(hy), (0, Uy.useEffect)((() => {
          const bb = yb.current;
          if (!bb) return;
          const Wy = new ResizeObserver(hy);
          return Wy.observe(bb), () => {
            Wy.disconnect()
          }
        }), []), [yb, bb, hy]
      }(), Ty = (0, Uy.useMemo)((() => new Map), [fy]), Vy = yb => {
        let bb = Ty.get(yb);
        return void 0 === bb && (bb = function(yb, bb) {
          const Wy = /^(.+) \((.+)\)$/.exec(yb);
          return Wy ? bb(Wy[2], Wy[1]) : yb
        }(xf(fy, yb), ((yb, bb) => fy("buildAFactory2Game:terminalTileKind", {
          kind: yb,
          base: bb
        }))), Ty.set(yb, bb)), bb
      }, Jy = bb.isReadOnly(), gb = bb.recent(), Gy = bb.items(), Oy = qb.trim().toLowerCase(), Ry = ("recent" === cb ? gb : Gy).filter((yb => {
        const bb = Vy(yb);
        return ("all" === cb || "recent" === cb || function(yb) {
          return ff(yb) ? "farm" : ie.test(yb) ? "nuclear" : YK.test(yb) ? "bars" : XK.test(yb) ? "farm" : MK.test(yb) ? "Mf" : ve.has(yb) ? "parts" : nK.test(yb) ? "farm" : "other"
        }(yb) === cb) && ("" === Oy || bb.toLowerCase().includes(Oy)) && ("" === Ky || bb.toUpperCase().startsWith(Ky))
      })), vb = new Set(Gy.map((yb => Vy(yb).charAt(0).toUpperCase()))), ib = "recent" !== cb && gb.length > 0, My = function(yb, bb) {
        return null !== yb && bb.includes(yb) ? yb : null
      }(Sy, ib ? [...Ry, ...gb] : Ry), Yy = null === My ? 0 : bb.amount(My), Xy = yb => {
        Ey(My === yb ? null : yb)
      }, ny = yb => {
        null !== My && Yy > 0 && hy(bb.take(yb, My))
      }, uy = "" !== Ky ? fy("buildAFactory2Game:terminalEmptyLetter", {
        letter: Ky
      }) : "" !== Oy ? fy("buildAFactory2Game:terminalEmptySearch", {
        query: qb
      }) : fy("buildAFactory2Game:terminalEmpty");
      return (0, mZ.jsx)(sZ.c, {
        close: Wy,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mZ.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsxs)("div", {
              children: [(0, mZ.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: fy(bb.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, mZ.jsx)("p", {
                children: fy("buildAFactory2Game:terminalSubtitle", {
                  count: String(bb.siloCount())
                })
              })]
            }), (0, mZ.jsx)(SZ.h, {
              onClick: Wy
            })]
          }), (0, mZ.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, mZ.jsxs)("div", {
              className: "Baf2TermTools",
              children: [(0, mZ.jsx)("div", {
                ref: ly,
                className: Sh()("Baf2TermChips", {
                  MoreRight: mb
                }),
                onScroll: Cy,
                children: oy ? (0, mZ.jsxs)(mZ.Fragment, {
                  children: [(0, mZ.jsx)("button", {
                    type: "button",
                    "aria-label": fy("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      By(!1), ey("")
                    },
                    children: "\u2190"
                  }), [...vb].sort().map((yb => (0, mZ.jsx)("button", {
                    type: "button",
                    className: Sh()({
                      On: Ky === yb
                    }),
                    onClick: () => {
                      ey(Ky === yb ? "" : yb)
                    },
                    children: yb
                  }, yb)))]
                }) : (0, mZ.jsxs)(mZ.Fragment, {
                  children: [(0, mZ.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      By(!0)
                    },
                    children: fy("buildAFactory2Game:terminalLetters")
                  }), RK.map((yb => (0, mZ.jsx)("button", {
                    type: "button",
                    className: Sh()({
                      On: cb === yb
                    }),
                    onClick: () => {
                      Py(yb)
                    },
                    children: fy(OK[yb])
                  }, yb)))]
                })
              }), !Zy && (0, mZ.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: qb,
                placeholder: fy("buildAFactory2Game:terminalSearch"),
                "aria-label": fy("buildAFactory2Game:terminalSearch"),
                onChange: yb => {
                  sy(yb.target.value)
                },
                onKeyDown: yb => {
                  yb.stopPropagation()
                }
              }), (0, mZ.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": fy("buildAFactory2Game:terminalResort"),
                title: fy("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  bb.resort()
                },
                children: "\u21c5"
              })]
            }), ib && (0, mZ.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, mZ.jsx)("span", {
                children: fy(OK.recent)
              }), gb.map((yb => (0, mZ.jsx)(uK, {
                item: yb,
                name: Vy(yb),
                amount: bb.amount(yb),
                selected: My === yb,
                small: !0,
                onPick: () => {
                  Xy(yb)
                }
              }, yb)))]
            }), (0, mZ.jsx)("div", {
              className: "Baf2TermTiles",
              children: Ry.length > 0 ? Ry.map((yb => (0, mZ.jsx)(uK, {
                item: yb,
                name: Vy(yb),
                amount: bb.amount(yb),
                selected: My === yb,
                onPick: () => {
                  Xy(yb)
                }
              }, yb))) : (0, mZ.jsx)("p", {
                className: "Baf2TermEmpty",
                children: uy
              })
            }), (0, mZ.jsxs)("div", {
              className: "Baf2TermActions",
              children: [(0, mZ.jsx)("span", {
                className: "Baf2TermPicked",
                children: Jy ? (0, mZ.jsxs)(mZ.Fragment, {
                  children: [null !== My && Yy > 0 ? Vy(My) : fy("buildAFactory2Game:terminalVisiting"), (0, mZ.jsx)("small", {
                    children: fy("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== My && Yy > 0 ? (0, mZ.jsxs)(mZ.Fragment, {
                  children: [Vy(My), (0, mZ.jsx)("small", {
                    children: fy("buildAFactory2Game:terminalStored", {
                      amount: Yy.toLocaleString()
                    })
                  })]
                }) : fy("buildAFactory2Game:terminalPick")
              }), !Jy && (0, mZ.jsxs)(mZ.Fragment, {
                children: [(0, mZ.jsx)(SZ.f, {
                  className: "Baf2TermTake",
                  disabled: 0 === Yy,
                  onClick: () => {
                    ny("one")
                  },
                  children: fy("buildAFactory2Game:terminalTakeOne")
                }), (0, mZ.jsx)(SZ.f, {
                  className: "Baf2TermTake",
                  disabled: 0 === Yy,
                  onClick: () => {
                    ny("stack")
                  },
                  children: fy("buildAFactory2Game:terminalTakeStack", {
                    amount: String(99)
                  })
                }), (0, mZ.jsx)(SZ.i, {
                  className: "Baf2TermTake",
                  disabled: 0 === Yy,
                  onClick: () => {
                    ny("fill")
                  },
                  children: fy("buildAFactory2Game:terminalFill")
                })]
              })]
            })]
          })]
        })
      })
    }

    function HK(yb) {
      let {
        kind: bb,
        icon: Wy,
        label: Uy,
        number: hy,
        preview: fy,
        note: Zy,
        tone: cb = null,
        share: Py,
        onExplain: oy
      } = yb;
      return (0, mZ.jsxs)("button", {
        type: "button",
        className: Sh()("NxLane", bb, {
          Warn: "warn" === cb,
          Danger: "danger" === cb
        }),
        onClick: oy,
        children: [(0, mZ.jsxs)("span", {
          className: "NxLaneHead",
          children: [Wy, (0, mZ.jsx)("span", {
            className: "NxLaneLabel",
            children: Uy
          })]
        }), (0, mZ.jsxs)("span", {
          className: "NxLaneNum",
          children: [hy, fy && (0, mZ.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", fy]
          })]
        }), (0, mZ.jsx)("span", {
          className: "NxLaneNote",
          children: Zy
        }), void 0 !== Py && (0, mZ.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Py)) + "%"
          }
        })]
      })
    }

    function ae(yb) {
      let {
        kind: bb,
        step: Wy,
        short: Uy,
        planned: hy
      } = yb;
      return (0, mZ.jsx)("i", {
        className: Sh()("NxPipe", bb, `Step${Wy}`, {
          Short: Uy,
          Planned: hy
        }),
        "aria-hidden": "true"
      })
    }

    function FK(yb) {
      let {
        max: bb,
        bands: Wy,
        ticks: Uy,
        now: hy,
        settle: fy,
        settleTone: Zy,
        onExplain: cb
      } = yb;
      const Py = yb => Math.max(0, Math.min(bb, yb)) / bb * 100 + "%";
      let oy = 0;
      return (0, mZ.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: cb,
        children: [(0, mZ.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [Wy.map((yb => {
            const bb = {
              bottom: Py(oy),
              height: `calc(${Py(yb.upTo)} - ${Py(oy)})`
            };
            return oy = yb.upTo, (0, mZ.jsx)("i", {
              className: Sh()("NxGaugeBand", yb.kind),
              style: bb
            }, yb.kind)
          })), null !== hy && (0, mZ.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Py(hy)
            }
          }), void 0 !== fy && null !== fy && (0, mZ.jsx)("i", {
            className: Sh()("NxGaugeSettle", {
              Bad: "bad" === Zy
            }),
            style: {
              bottom: Py(fy)
            }
          })]
        }), (0, mZ.jsx)("span", {
          className: "NxGaugeTicks",
          children: Uy.map((yb => (0, mZ.jsx)("small", {
            style: {
              bottom: Py(yb)
            },
            children: yb
          }, yb)))
        })]
      })
    }

    function pK(yb) {
      const [bb, Wy] = (0, Uy.useState)(null), [hy, fy] = (0, Uy.useState)((() => {
        try {
          return null === window.localStorage.getItem(yb)
        } catch {
          return !1
        }
      })), Zy = (0, Uy.useRef)(null);
      (0, Uy.useEffect)((() => () => {
        null !== Zy.current && clearTimeout(Zy.current)
      }), []);
      const cb = (0, Uy.useCallback)((bb => {
          Wy(bb), fy(!1);
          try {
            window.localStorage.setItem(yb, "1")
          } catch {}
          null !== Zy.current && clearTimeout(Zy.current), Zy.current = setTimeout((() => {
            Zy.current = null, Wy(null)
          }), 5e3)
        }), [yb]),
        Py = (0, Uy.useCallback)(((bb, Wy) => {
          const Uy = `${yb}:${bb}`;
          try {
            if (null !== window.localStorage.getItem(Uy)) return;
            window.localStorage.setItem(Uy, "1")
          } catch {
            return
          }
          cb(Wy)
        }), [cb, yb]);
      return {
        explained: bb,
        hinting: hy,
        explain: cb,
        explainOnce: Py
      }
    }

    function LK(yb) {
      let {
        text: bb,
        tone: Wy,
        explained: Uy
      } = yb;
      return (0, mZ.jsxs)("p", {
        className: Sh()("NxStatus", null === Uy ? Wy : "Explain"),
        "aria-live": "polite",
        children: [null !== Uy && (0, mZ.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Uy && void 0 !== Uy ? Uy : bb]
      })
    }
    const QK = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function je(yb, bb) {
      const Wy = Number(yb[bb]);
      return 1 === Wy || 2 === Wy || 3 === Wy ? Wy : 0
    }

    function DK(yb) {
      return !!SP("reactor", yb.baf2RxNeed) || void 0 !== yb.baf2RxLayout && yb.baf2RxNeed.some((yb => {
        let [bb, Wy] = yb;
        return Wy > 0 && QK.includes(bb)
      }))
    }
    const te = "buildAFactory2Game:";

    function wK(yb) {
      let {
        status: bb,
        store: Wy,
        busy: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)();
      return function(yb) {
        return 0 !== (yb.baf2RxFlags & Pb) && (!yb.baf2RxFormed || void 0 !== yb.baf2RxLayout)
      }(bb) ? (0, mZ.jsx)(SZ.i, {
        disabled: !DK(bb) || Uy,
        onClick: () => {
          Wy.tap("fill", (() => {
            Wy.send("fill")
          }))
        },
        children: hy(void 0 !== bb.baf2RxLayout ? `${te}rxFillLayout` : `${te}rxFill`)
      }) : null
    }

    function ke(yb) {
      let {
        status: bb,
        store: Wy,
        readOnly: hy,
        bare: fy = !1
      } = yb;
      const {
        t: Zy
      } = (0, Ch.D)(), cb = bb.baf2RxLayout, [Py, oy, By] = bb.baf2RxDims, Ky = (0, Uy.useMemo)((() => {
        if (void 0 === cb) return 0;
        const yb = Uint8Array.from(cb, ((yb, bb) => je(cb, bb)));
        return kP([Py - 2, oy - 2, By - 2], yb).max
      }), [cb, Py, oy, By]);
      return void 0 === cb ? null : (0, mZ.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!fy && (0, mZ.jsx)("span", {
          className: "Baf2RxHint",
          children: Zy(`${te}rxLayoutLine`, {
            amount: JP(Ky)
          })
        }), !hy && (0, mZ.jsx)(SZ.f, {
          onClick: () => {
            Wy.send("layout", 0)
          },
          children: Zy(`${te}rxLayoutHide`)
        })]
      })
    }
    const NK = "buildAFactory2Game:",
      ze = {
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

    function IK(yb) {
      let {
        id: bb,
        title: Wy,
        body: Uy,
        bodyParams: hy,
        yes: fy,
        cancel: Zy,
        confirm: cb
      } = yb;
      const {
        t: Py
      } = (0, Ch.D)();
      return (0, mZ.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": bb,
        children: [(0, mZ.jsx)("h3", {
          id: bb,
          children: Py(Wy)
        }), (0, mZ.jsx)("p", {
          children: Py(Uy, hy)
        }), (0, mZ.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, mZ.jsx)(SZ.g, {
            onClick: Zy,
            children: Py(`${NK}rxCancel`)
          }), (0, mZ.jsx)(SZ.C, {
            onClick: cb,
            children: Py(fy)
          })]
        })]
      })
    }

    function xe(yb) {
      const [bb, Wy] = (0, Uy.useState)((() => yb.get()));
      return (0, Uy.useEffect)((() => (Wy(yb.get()), yb.subscribe((() => {
        Wy(yb.get())
      })))), [yb]), bb
    }

    function AK(yb) {
      let {
        kind: bb,
        cap: Wy,
        busy: hy = !1,
        whyNot: fy = null,
        apart: Zy
      } = yb;
      const {
        t: cb
      } = (0, Ch.D)(), [Py, oy] = (0, Uy.useState)(!1), By = null !== fy, Ky = (0, Uy.useRef)(null);
      if ((0, Uy.useEffect)((() => {
          By && oy(!1)
        }), [By]), (0, Uy.useLayoutEffect)((() => {
          var yb;
          const bb = null === (yb = Ky.current) || void 0 === yb ? void 0 : yb.firstElementChild;
          By ? null === bb || void 0 === bb || bb.setAttribute("aria-disabled", "true") : hy || null === bb || void 0 === bb || bb.removeAttribute("aria-disabled")
        })), !Py || By) return (0, mZ.jsx)("span", {
        ref: Ky,
        className: "Baf2RxApartWrap",
        children: (0, mZ.jsx)(SZ.g, {
          disabled: hy,
          className: Sh()({
            Baf2RxNotYet: By
          }),
          onClick: () => {
            fy ? fy() : oy(!0)
          },
          children: cb(`${NK}rxApart`)
        })
      });
      const ey = "battery" === bb,
        qb = void 0 === Wy ? `${NK}batApartConfirmBodyPlan` : `${NK}batApartConfirmBody`;
      return (0, mZ.jsx)(IK, {
        id: `baf2ApartTitle_${bb}`,
        title: ey ? `${NK}batApartConfirmTitle` : `${NK}rxApartConfirmTitle`,
        body: ey ? qb : `${NK}rxApartConfirmBody`,
        bodyParams: void 0 === Wy ? void 0 : {
          cap: Wy
        },
        yes: `${NK}rxApart`,
        cancel: () => {
          oy(!1)
        },
        confirm: () => {
          oy(!1), Zy()
        }
      })
    }

    function dK(yb) {
      let {
        mood: bb,
        big: Wy
      } = yb;
      const Uy = ze[bb],
        hy = [];
      return Uy.rows.forEach(((yb, bb) => {
        for (let Wy = 0; Wy < yb.length; Wy++) "." !== yb[Wy] && hy.push((0, mZ.jsx)("rect", {
          x: Wy + 1,
          y: bb + 1,
          width: 1,
          height: 1,
          fill: "w" === yb[Wy] ? "#8fd3ff" : Uy.colour
        }, `${Wy},${bb}`))
      })), (0, mZ.jsxs)("svg", {
        className: Sh()("Baf2RxFace", {
          Big: Wy,
          Alarm: "alarm" === bb
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, mZ.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, mZ.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), hy]
      })
    }

    function yq(yb) {
      return Kf(yb, "+").replace("+", "")
    }

    function bq(yb) {
      let {
        kind: bb,
        dims: Wy,
        cap: Uy,
        disabled: hy,
        compact: fy,
        resize: Zy
      } = yb;
      const {
        t: cb
      } = (0, Ch.D)(), {
        min: Py,
        max: oy
      } = XW(bb), By = Math.min(Uy, oy), Ky = [`${NK}rxWide`, `${NK}rxTall`, `${NK}rxDeep`], ey = {
        w: String(Wy[0]),
        h: String(Wy[1]),
        d: String(Wy[2]),
        blocks: String(VP(bb, Wy))
      };
      return (0, mZ.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, mZ.jsx)("div", {
          className: "Baf2RxSteppers",
          children: Wy.map(((yb, bb) => {
            const fy = Uy => {
                const hy = [Wy[0], Wy[1], Wy[2]];
                hy[bb] = yb + Uy, Zy(hy)
              },
              ey = yb >= By;
            return (0, mZ.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, mZ.jsx)("button", {
                type: "button",
                "aria-label": cb(`${NK}rxSmaller`),
                disabled: hy || yb <= Py,
                onClick: () => {
                  fy(-1)
                },
                children: "\u2212"
              }), (0, mZ.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [yb, (0, mZ.jsx)("small", {
                  children: cb(Ky[bb])
                })]
              }), (0, mZ.jsx)("button", {
                type: "button",
                "aria-label": cb(`${NK}rxBigger`),
                disabled: hy || ey,
                onClick: () => {
                  fy(1)
                },
                children: ey && Uy < oy ? "\ud83d\udd12" : "+"
              })]
            }, Ky[bb])
          }))
        }), !fy && (0, mZ.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === bb ? cb(`${NK}rxSizeLine`, {
            ...ey,
            water: String(TP(Wy))
          }) : cb(`${NK}batSizeLine`, ey)
        })]
      })
    }

    function We(yb) {
      let {
        on: bb,
        label: Wy,
        disabled: Uy,
        locked: hy,
        pending: fy,
        toggle: Zy
      } = yb;
      return (0, mZ.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": bb,
        disabled: Uy,
        "aria-disabled": hy || void 0,
        className: Sh()("Baf2RxSwitch", {
          On: bb,
          Locked: hy,
          Pending: fy
        }),
        onClick: Zy,
        children: [(0, mZ.jsx)("span", {
          className: "Baf2RxKnob"
        }), Wy]
      })
    }
    const Ue = "buildAFactory2Game:",
      he = .95;

    function fe(yb, bb) {
      return 0 !== (yb.baf2RxFlags & bb)
    }

    function Ze(yb) {
      return "cryo" === yb ? Ay.o : Ay.q
    }

    function cq(yb) {
      var bb, Wy, Uy, hy, fy, Zy, cb, Py, oy;
      return yb.baf2RxCryo ? {
        TW: "cryo",
        usePerS: null !== (hy = yb.baf2RxCryoUse) && void 0 !== hy ? hy : 0,
        needPerS: null !== (fy = yb.baf2RxCryoNeed) && void 0 !== fy ? fy : 0,
        inPerS: null !== (Zy = yb.baf2RxCryoIn) && void 0 !== Zy ? Zy : 0,
        stored: null !== (cb = yb.baf2RxCryoStored) && void 0 !== cb ? cb : 0,
        makersShort: null !== (Py = yb.baf2RxMixersShort) && void 0 !== Py ? Py : 0,
        waterBeside: null !== (oy = yb.baf2RxWaterUse) && void 0 !== oy ? oy : 0,
        pct: yb.baf2RxWater
      } : {
        TW: "water",
        usePerS: null !== (bb = yb.baf2RxWaterUse) && void 0 !== bb ? bb : 0,
        needPerS: null !== (Wy = yb.baf2RxWaterNeed) && void 0 !== Wy ? Wy : 0,
        inPerS: yb.baf2RxWaterIn,
        stored: yb.baf2RxWaterStored,
        makersShort: null !== (Uy = yb.baf2RxCondensersShort) && void 0 !== Uy ? Uy : 0,
        waterBeside: 0,
        pct: yb.baf2RxWater
      }
    }

    function Pe(yb) {
      const bb = "running" === yb.baf2RxState || "idle" === yb.baf2RxState;
      return yb.baf2RxFormed && yb.baf2RxTarget !== yb.baf2RxThrottle && bb ? oe(yb, yb.baf2RxTarget) : null
    }

    function oe(yb, bb) {
      const [Wy, Uy, hy, , , , fy, , Zy] = yb.baf2RxStats, cb = fe(yb, Zb), Py = cq(yb), oy = Py.pct / 100, {
        gen: By,
        out: Ky,
        load: ey
      } = function(yb, bb, Wy, Uy) {
        const hy = Wy ? pc : 1,
          fy = Math.min(yb.fuelHeat * hy * Math.max(0, Math.min(1, bb)), yb.size * hy);
        return {
          gen: fy,
          out: fy,
          load: hP(fy, yb.cooling, Uy)
        }
      }({
        fuelHeat: Wy,
        cooling: Uy,
        size: hy
      }, bb / 100, cb, oy), qb = ZP(fy || wc(...yb.baf2RxDims)), sy = yb.baf2RxHeat, Sy = Math.abs(ey - sy), Ey = function(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ay.q;
        const fy = Wy ? pc : 1,
          Zy = Math.min(yb.fuelHeat * fy * bb / 100, yb.size * fy),
          cb = Zy,
          Py = yb.fuelHeat * fy,
          oy = yb.cooling * UP(Uy.pct / 100),
          By = Py > 0 && oy < yb.size * fy ? Math.floor(100 * oy / Py) : 100,
          Ky = Zy * hy - Uy.inPerS;
        return {
          out: cb,
          hotAbove: By >= 100 ? null : Math.max(0, By),
          waterSecs: Uy.pct >= 100 && Ky > 1e-6 ? Math.max(0, Uy.stored) / Ky : null
        }
      }({
        fuelHeat: Wy,
        cooling: Uy,
        size: hy
      }, bb, cb, {
        pct: Py.pct,
        inPerS: Py.inPerS,
        stored: Py.stored
      }, Ze(Py.TW));
      return {
        pct: bb,
        out: Ky,
        coolPerS: By * Ze(Py.TW),
        pelletsPerMin: Zy > 0 ? Ky / Zy * 60 : 0,
        settle: ey,
        settleS: Sy > 2 ? qb * Math.log(Sy / 2) : 0,
        overheatS: ey > 100 && sy < 100 ? qb * Math.log((ey - sy) / (ey - 100)) : null,
        hotAbove: Ey.hotAbove,
        coolantSecs: Ey.waterSecs
      }
    }

    function Be(yb) {
      return yb.baf2RxThrottle <= 0 && "running" !== yb.baf2RxState ? 0 : oe(yb, yb.baf2RxTarget).pelletsPerMin / 60
    }

    function Ke(yb, bb) {
      if (yb <= 0 || bb <= 0) return 0;
      const Wy = yb / bb;
      return Wy < .25 ? 1 : Wy < .5 ? 2 : Wy < .8 ? 3 : 4
    }

    function ee(yb, bb) {
      const Wy = {};
      for (const [Uy, hy] of Object.entries(bb.params)) Wy[Uy] = "time" === Uy ? sf(yb, hy) : "amount" === Uy ? JP(hy) : String(Math.round(hy));
      return yb(bb.key, Wy)
    }

    function qq(yb, bb) {
      return {
        key: `${Ue}${yb}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: bb
      }
    }

    function se(yb) {
      var bb;
      const Wy = fe(yb, Zb),
        Uy = "running" === yb.baf2RxState,
        hy = BP(yb),
        fy = yb.baf2RxHeat;
      var Zy;
      if (Uy && fy > aP) return {
        key: null !== (Zy = hy.fix) && void 0 !== Zy ? Zy : `${Ue}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const cb = Uy ? oe(yb, yb.baf2RxTarget).coolantSecs : null,
        Py = "cryo" === cq(yb).TW;
      if (null !== cb && cb >= 1 && cb <= 30) return qq(Py ? "rxWarnCryo" : "rxWarnWater", "bad");
      const oy = Dc(wc(...yb.baf2RxDims)).waste,
        By = Uy ? EP(yb, oy, Be(yb)).fullInS : null;
      if (null !== By && By <= 120 && yb.baf2RxWaste >= .5 * oy) return qq("rxWarnWaste", "warn");
      if (null !== cb && cb >= 1) return qq(Py ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: cb
      });
      const Ky = "noWater" === yb.baf2RxState && fy > aP;
      if (yb.baf2RxDamage >= 1 && !Ky) return qq("rxDamagedHeals", "warn", {
        pct: yb.baf2RxDamage
      });
      if (yb.baf2RxCryoCut) return qq("rxFix_cryoCut", "warn");
      const ey = cq(yb);
      if ("noWater" === yb.baf2RxState && "cryo" === ey.TW) return qq("noWater" === yb.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const qb = hy.fix === `${Ue}rxFix_scramCool` || "idle" === yb.baf2RxState && yb.baf2RxTarget <= 0;
      if (qb && yb.baf2RxFuel <= 0) return qq("rxFix_noFuel", "warn");
      if (qb && yb.baf2RxWaterIn <= 0 && (null !== (bb = yb.baf2RxCryoIn) && void 0 !== bb ? bb : 0) <= 0) return qq("rxFix_noWater", "warn");
      const sy = hy.fix === `${Ue}rxFix_scramCool` ? eP(yb) : null;
      if (null !== sy) return {
        key: sy.key,
        params: {
          amount: sy.amount
        },
        tone: "info"
      };
      if ("running" !== yb.baf2RxState && "idle" !== yb.baf2RxState && null !== hy.fix) return {
        key: hy.fix,
        params: {},
        tone: "scram" === yb.baf2RxState ? "info" : Ky ? "bad" : "warn"
      };
      var Sy;
      if ("idle" === yb.baf2RxState && yb.baf2RxTarget <= 0) return {
        key: null !== (Sy = hy.fix) && void 0 !== Sy ? Sy : `${Ue}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const Ey = yb.baf2RxCryoStarved;
      if ("cryo" === ey.TW && Ey && ey.needPerS > 0 && ey.usePerS < he * ey.needPerS) return qq("noWater" === Ey ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const ly = "cryo" === ey.TW,
        mb = ey.needPerS > 0 && ey.usePerS < he * ey.needPerS;
      if (ly ? mb || ey.makersShort > 0 && ey.pct < 100 : ey.pct < 100) {
        const bb = ly && mb ? Math.floor(100 * ey.usePerS / ey.needPerS) : Math.min(100, ey.pct);
        if (ey.makersShort > 0) {
          return qq(`${ly?"rxCryoShortLine":"rxWaterShortLine"}${1===ey.makersShort?"One":""}${!ly&&yb.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: bb,
            count: ey.makersShort
          })
        }
        return qq(ly ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: bb
        })
      }
      const Cy = function(yb) {
        const [bb, Wy, Uy] = yb.baf2RxStats, hy = cq(yb), fy = fP({
          fuelHeat: bb,
          cooling: Wy,
          size: Uy
        }, "cryo" === hy.TW ? Ay.f : 1, !0);
        return Math.max(0, fy * Ze(hy.TW) - hy.inPerS)
      }(yb);
      if (Wy && Cy > 0) return qq("cryo" === ey.TW ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Cy)
      });
      if (fy >= bo) return qq("rxHotLine", "warn");
      const Ty = oe(yb, yb.baf2RxTarget);
      var Vy;
      if (null !== Ty.overheatS) return qq("rxWillOverheat", "bad", {
        pct: yb.baf2RxTarget,
        time: Ty.overheatS,
        safe: null !== (Vy = Ty.hotAbove) && void 0 !== Vy ? Vy : 100
      });
      if (Math.abs(Ty.settle - fy) >= 3) return qq("rxSettling", "info", {
        pct: yb.baf2RxTarget,
        heat: Math.round(Ty.settle),
        time: Ty.settleS
      });
      const Jy = eP(yb);
      if (null !== Jy) return {
        key: Jy.key,
        params: {
          amount: Jy.amount
        },
        tone: "info"
      };
      const gb = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== bb && ("running" !== bb || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === yb.rods ? `${co}rxLimitNoRods` : `${co}rxLimit_${yo(yb)}`
      }({
        rods: yb.baf2RxStats[3],
        ...KP(yb)
      }, yb.baf2RxState, yb.baf2RxOut >= he * yb.baf2RxMaxNow, !1);
      if (gb === `${Ue}rxLimit_size`) {
        const [bb, , Wy, Uy] = yb.baf2RxStats, hy = Uy > 0 && bb > 0 ? Math.ceil(Wy / (bb / Uy) - 1e-9) : Uy, fy = yb.baf2RxDims.every((yb => yb >= XW("reactor").max));
        if (hy < Uy) return qq(fy ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: hy,
          have: Uy
        });
        if (fy) return qq("rxLimit_sizeMax", "info")
      }
      return null !== gb ? {
        key: gb,
        params: {},
        tone: "info"
      } : qq("rxSteady", "ok", {
        pct: yb.baf2RxTarget
      })
    }

    function Se(yb) {
      var bb;
      if (yb.melted) return qq("rxMeltedBody", "bad");
      if (-1 === yb.bad) return qq("rxFix_noRoom", "warn");
      if (yb.bad > 0) return qq(1 === yb.bad ? "rxBadOne" : "rxBad", "warn", {
        count: yb.bad
      });
      if (yb.left > 0) {
        const bb = 1 === yb.left ? "One" : "";
        return qq(yb.canFill ? `rxPlanLeft${bb}` : `rxPlanLeftNoFill${bb}`, "info", {
          count: yb.left
        })
      }
      if (0 === yb.rods) return qq("rxLimitNoRods", "warn");
      const Wy = null !== (bb = yb.idle) && void 0 !== bb ? bb : 0;
      return Wy > 0 ? qq(1 === Wy ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: Wy
      }) : qq("rxPlanReady", "ok")
    }

    function Ee(yb) {
      return Math.floor(Math.max(0, yb[1] - 1) / 2)
    }

    function le(yb) {
      if (yb >= zP && yb < Ic) {
        const bb = yb - zP;
        return {
          key: 0 === bb ? `${Ue}rxWhy_rodAlone` : 1 === bb ? `${Ue}rxWhy_rodOne` : `${Ue}rxWhy_rod`,
          params: {
            count: String(bb),
            heat: String(iP * (1 + Mc * bb))
          }
        }
      }
      return yb === Ic ? {
        key: `${Ue}rxWhy_channel`,
        params: {
          amount: String(Xc)
        }
      } : yb === xP ? {
        key: `${Ue}rxWhy_deadChannel`,
        params: {}
      } : yb === Ac ? {
        key: `${Ue}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Ue}rxWhy_core`,
        params: {}
      }
    }
    const mq = "buildAFactory2Game:";

    function Ce(yb, bb) {
      return 0 !== (yb.baf2RxFlags & bb)
    }

    function Te(yb) {
      let {
        status: bb,
        pending: Wy,
        store: Uy,
        explain: hy
      } = yb;
      const {
        t: fy
      } = (0, Ch.D)(), Zy = Ce(bb, fb), cb = bb.baf2RxTarget, Py = bb.baf2RxThrottle, oy = function(yb) {
        return {
          press: () => {
            yb.throttlePress()
          },
          drag: bb => {
            yb.throttleDrag(bb)
          },
          release: () => {
            yb.throttleRelease()
          }
        }
      }(Uy), By = null === (Ky = oe(bb, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Ky - 10),
        red: Ky
      };
      var Ky;
      return (0, mZ.jsxs)("div", {
        className: Sh()("Baf2RxThrottle", {
          Off: Zy
        }),
        onClick: () => {
          Zy && hy(`${mq}rxWhy_startFirst`)
        },
        children: [(0, mZ.jsx)("span", {
          className: "HideNarrow",
          children: fy(`${mq}rxThrottle`)
        }), (0, mZ.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, mZ.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: cb,
            disabled: Zy,
            style: Zy ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": fy(`${mq}rxThrottle`),
            onPointerDown: () => {
              oy.press();
              const yb = () => {
                window.removeEventListener("pointerup", yb), window.removeEventListener("pointercancel", yb), oy.release()
              };
              window.addEventListener("pointerup", yb), window.addEventListener("pointercancel", yb)
            },
            onKeyUp: oy.release,
            onChange: yb => {
              oy.drag(Number(yb.target.value))
            }
          }), (0, mZ.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${By.amber}%, #ffb020 ${By.amber}% ${By.red}%, #ff3b30 ${By.red}%)`
            },
            "aria-hidden": "true"
          }), (0, mZ.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Py}% + ${8*(1-Py/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, mZ.jsxs)("b", {
          children: [`${cb}%`, (0, mZ.jsx)("i", {
            className: Sh()("Baf2RxPendingDot", {
              On: Wy
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function Ve(yb) {
      let {
        status: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)(), Uy = oe(bb, bb.baf2RxTarget), hy = cq(bb).TW, fy = Wy("cryo" === hy ? `${mq}rxRateCryo` : `${mq}rxRateWater`, {
        rate: yq(Uy.coolPerS)
      }), Zy = Wy(`${mq}rxChain`, {
        pct: String(bb.baf2RxTarget),
        out: JP(Uy.out),
        heat: String(Math.round(Uy.settle)),
        coolant: fy
      }), cb = null !== Uy.coolantSecs ? Uy.coolantSecs >= 1 ? Wy("cryo" === hy ? `${mq}rxThrottleCryoOut` : `${mq}rxThrottleWaterOut`, {
        time: sf(Wy, Uy.coolantSecs)
      }) : Wy("cryo" === hy ? `${mq}rxThrottleCryoDry` : `${mq}rxThrottleWaterDry`) : null;
      return (0, mZ.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Zy, null !== cb ? (0, mZ.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", cb]
        }) : (0, mZ.jsxs)("span", {
          children: [" \xb7 ", Wy(`${mq}rxChainPellets`, {
            amount: go(Uy.pelletsPerMin)
          })]
        })]
      })
    }

    function Je(yb) {
      let {
        view: bb,
        store: Wy,
        explain: hy,
        explainOnce: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ch.D)(), {
        status: cb
      } = bb, [Py, oy] = (0, Uy.useState)(!1), By = Ce(cb, fb), ey = Ce(cb, Zb), qb = !Ce(cb, ob), sy = cb.baf2RxHeat > 100;
      return (0, mZ.jsxs)(mZ.Fragment, {
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, mZ.jsx)(Te, {
            status: cb,
            pending: bb.throttlePending,
            store: Wy,
            explain: hy
          }), (0, mZ.jsx)(We, {
            on: ey,
            label: ey ? Zy(`${mq}rxOdLeft`, {
              time: sf(Zy, cb.baf2RxOdLeft)
            }) : Zy(`${mq}rxOverdrive`),
            locked: qb,
            pending: 0 !== (bb.pendingFlags & Zb),
            toggle: () => {
              qb ? hy(`${mq}rxOverdriveTier`, {
                amount: String(Ky(13))
              }) : ey ? Wy.setFlag(Zb, !1) : bb.odConfirmed ? Wy.setFlag(Zb, !0) : oy(!0)
            }
          }), By || bb.startGuard ? (0, mZ.jsx)(SZ.l, {
            disabled: bb.busy.has("start") || bb.startGuard,
            onClick: () => {
              Wy.tap("start", (() => {
                Wy.setFlag(fb, !1)
              }))
            },
            children: Zy(bb.startGuard ? `${mq}rxStarting` : `${mq}rxStart`)
          }) : (0, mZ.jsx)("span", {
            className: Sh()("Baf2RxScram", {
              Pulse: sy
            }),
            children: (0, mZ.jsx)(SZ.C, {
              onClick: () => {
                Wy.shutDown()
              },
              children: Zy(`${mq}rxScram`)
            })
          })]
        }), (0, mZ.jsx)(Ve, {
          status: cb
        }), Py && (0, mZ.jsx)(IK, {
          id: "baf2RxOdTitle",
          title: `${mq}rxOdConfirmTitle`,
          body: `${mq}rxOdConfirmBody`,
          yes: `${mq}rxOdConfirm`,
          cancel: () => {
            oy(!1)
          },
          confirm: () => {
            oy(!1), Wy.tap("odConfirm", (() => {
              Wy.confirmOverdrive(), Wy.setFlag(Zb, !0)
            })), fy(`${mq}rxWhy_overdrive`)
          }
        })]
      })
    }

    function gq(yb) {
      let {
        view: bb,
        store: Wy,
        keepSize: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)(), {
        status: fy
      } = bb;
      return (0, mZ.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, mZ.jsx)(bq, {
          kind: "reactor",
          dims: bb.dims,
          cap: fy.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: yb => {
            Wy.resize(yb)
          }
        }), Uy ? (0, mZ.jsx)(SZ.g, {
          onClick: Uy,
          children: hy(`${mq}rxKeepSize`)
        }) : (0, mZ.jsxs)(mZ.Fragment, {
          children: [(0, mZ.jsx)(We, {
            on: bb.guide,
            label: hy(`${mq}rxGuide`),
            toggle: () => {
              Wy.toggleGuide()
            }
          }), Ce(fy, Kb) && (0, mZ.jsx)(We, {
            on: bb.starter,
            label: hy(`${mq}rxStarter`),
            toggle: () => {
              Wy.toggleStarter()
            }
          }), (0, mZ.jsx)(wK, {
            status: fy,
            store: Wy,
            busy: bb.busy.has("fill")
          })]
        })]
      })
    }

    function Ge(yb) {
      let {
        need: bb,
        kind: Wy = "reactor",
        explain: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)(), fy = bb.length <= 3, Zy = bb.reduce(((yb, bb) => {
        let [, Wy] = bb;
        return yb + Wy
      }), 0);
      return (0, mZ.jsxs)("div", {
        className: Sh()("Baf2RxParts", {
          Compact: !fy
        }),
        onClick: () => {
          Uy("battery" === Wy ? `${mq}batWhy_store` : `${mq}rxShellHint`)
        },
        children: [Zy > 0 && (0, mZ.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Zy ? hy(`${mq}rxBlocksOne`) : hy(`${mq}rxBlocks`, {
            blocks: String(Zy)
          })
        }), 0 === bb.length ? (0, mZ.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: hy("battery" === Wy ? `${mq}batPartsDone` : `${mq}rxShellDone`)
        }) : sP(bb).map((yb => {
          let [bb, Wy, Uy] = yb;
          const Zy = function(yb) {
            const bb = CP[yb];
            if (void 0 === bb) return null;
            const [Wy, Uy, hy] = lP[bb].colour.map((yb => Math.round(255 * yb)));
            return `rgb(${Wy}, ${Uy}, ${hy})`
          }(bb);
          return (0, mZ.jsxs)("span", {
            className: "Baf2RxChip",
            title: xf(hy, bb),
            children: [(0, mZ.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Zy ? {
                visibility: "hidden"
              } : {
                background: Zy
              },
              title: hy(`${mq}rxShopGhost`)
            }), (0, mZ.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, mZ.jsx)(Vh.d, {
                itemName: bb,
                amount: 0
              })
            }), (0, mZ.jsx)("span", {
              className: "Baf2RxChipName",
              children: fy ? `${Wy} ${cb=xf(hy,bb),cb.replace(/^(Reactor|Battery) (?=\S)/,"")}` : Wy
            }), Uy >= Wy ? (0, mZ.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, mZ.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: fy ? hy(`${mq}rxShopShort`, {
                count: String(Wy - Uy)
              }) : "\u2212" + (Wy - Uy)
            })]
          }, bb);
          var cb
        }))]
      })
    }
    const Oe = "buildAFactory2Game:";

    function Re(yb) {
      var bb, Wy, hy, fy, Zy, cb, Py;
      let {
        store: oy,
        close: By
      } = yb;
      const {
        t: Ky
      } = (0, Ch.D)(), ey = uZ(), qb = xe(oy), {
        explained: sy,
        explain: Sy
      } = pK("baf2RxExplained"), Ey = (0, Uy.useCallback)(((yb, bb) => {
        Sy(Ky(yb, bb))
      }), [Sy, Ky]), ly = null === qb || void 0 === qb ? void 0 : qb.status, mb = !0 === (null === ly || void 0 === ly ? void 0 : ly.baf2BatReadOnly), Cy = yb => {
        ly && ey.send(hb(ly.baf2BatAt, yb))
      }, [Ty, Vy, Jy] = null !== (bb = null === qb || void 0 === qb ? void 0 : qb.dims) && void 0 !== bb ? bb : [0, 0, 0], gb = JP(null !== (Wy = null === qb || void 0 === qb ? void 0 : qb.Hy) && void 0 !== Wy ? Wy : 0), Gy = !0 === (null === ly || void 0 === ly ? void 0 : ly.baf2BatFormed), Oy = null !== (hy = null === ly || void 0 === ly ? void 0 : ly.baf2BatStored) && void 0 !== hy ? hy : 0, Ry = Math.max(1, null !== (fy = null === ly || void 0 === ly ? void 0 : ly.baf2BatIslandCap) && void 0 !== fy ? fy : 1), vb = Math.min(100, 100 * Oy / Ry), ib = null === ly || void 0 === ly ? void 0 : ly.baf2BatNetPerS, My = function(yb, bb, Wy) {
        return Wy > 0 && bb >= Wy ? "full" : void 0 !== yb && yb >= .05 ? "charging" : void 0 !== yb && yb <= -.05 && bb > 0 ? "draining" : "steady"
      }(ib, Oy, null !== (Zy = null === ly || void 0 === ly ? void 0 : ly.baf2BatIslandCap) && void 0 !== Zy ? Zy : 0), Yy = null !== (cb = null === ly || void 0 === ly ? void 0 : ly.baf2BatMadePerS) && void 0 !== cb ? cb : 0, Xy = null !== (Py = null === ly || void 0 === ly ? void 0 : ly.baf2BatUsedPerS) && void 0 !== Py ? Py : 0;
      let ny, uy = {},
        rb = "info";
      if (ly)
        if (Gy) "charging" === My ? (ny = `${Oe}batLine_charging`, uy = {
          time: sf(Ky, (Ry - Oy) / Math.max(.05, null !== ib && void 0 !== ib ? ib : 0))
        }, rb = "ok") : "draining" === My ? (ny = `${Oe}batLine_draining`, uy = {
          time: sf(Ky, Oy / Math.max(.05, -(null !== ib && void 0 !== ib ? ib : 0)))
        }, rb = "warn") : ny = "full" === My ? `${Oe}batLine_full` : Oy <= 0 && Xy > 0 ? `${Oe}batLine_empty` : `${Oe}batLine_steady`;
        else {
          var Hy;
          const yb = Se({
            left: ly.baf2BatNeed.reduce(((yb, bb) => {
              let [, Wy] = bb;
              return yb + Wy
            }), 0),
            bad: ly.baf2BatBad,
            rods: 1,
            canFill: !0 === ly.baf2BatCanFill,
            melted: !1
          });
          ny = yb.key, uy = {
            count: String(null !== (Hy = yb.params.count) && void 0 !== Hy ? Hy : 0)
          }, rb = yb.tone
        }
      else ny = `${Oe}batLine_steady`;
      const ab = Math.max(Yy, Xy, 1);
      return (0, mZ.jsx)(sZ.c, {
        close: By,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, mZ.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, mZ.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, mZ.jsx)(Vh.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, mZ.jsxs)("div", {
                children: [(0, mZ.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Ky(`${Oe}batTitle`)
                }), ly && (0, mZ.jsxs)("p", {
                  className: Sh()("Baf2RxSubtitle", {
                    good: Gy && "charging" === My,
                    warn: Gy && "draining" === My
                  }),
                  children: [Ty, "\xd7", Vy, "\xd7", Jy, " \xb7 ", Ky(Gy ? `${Oe}batState_${My}` : `${Oe}rxSubPlanShort`)]
                })]
              })]
            }), (0, mZ.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [ly && !mb && (0, mZ.jsx)(AK, {
                kind: "battery",
                cap: Gy ? gb : void 0,
                busy: null === qb || void 0 === qb ? void 0 : qb.busy.has("apart"),
                apart: () => {
                  oy.tap("apart", (() => {
                    Cy("apart")
                  }))
                }
              }), (0, mZ.jsx)(SZ.h, {
                onClick: By
              })]
            })]
          }), qb && ly && (0, mZ.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, mZ.jsxs)("div", {
              className: Sh()("Baf2RxFlow Baf2BatFlow", {
                Plan: !Gy
              }),
              children: [(0, mZ.jsx)(HK, {
                kind: "Power",
                label: Ky(`${Oe}batMade`),
                number: Gy ? `\u26a1 ${JP(Yy)}/s` : "\u2014",
                note: Ky(`${Oe}batMadeNote`),
                share: Gy ? Yy / ab : void 0,
                onExplain: () => {
                  Ey(`${Oe}batWhy_made`)
                }
              }), (0, mZ.jsx)(ae, {
                kind: "Power",
                step: Gy ? Ke(Yy, ab) : 0,
                planned: !Gy
              }), (0, mZ.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  Ey(`${Oe}batWhy_store`)
                },
                children: [(0, mZ.jsx)(FK, {
                  max: 100,
                  bands: [{
                    upTo: Gy ? vb : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, mZ.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, mZ.jsx)("b", {
                    className: "Baf2BatStored",
                    children: Gy ? Ky(`${Oe}batStoredOf`, {
                      amount: JP(Oy),
                      cap: JP(ly.baf2BatIslandCap)
                    }) : Ky(`${Oe}batWillHold`, {
                      cap: gb
                    })
                  }), (0, mZ.jsx)("span", {
                    children: Ky(`${Oe}batAdds`, {
                      cap: gb
                    })
                  }), Gy && (0, mZ.jsx)("small", {
                    children: Ky(`${Oe}batBreakNote`, {
                      cap: gb
                    })
                  })]
                })]
              }), (0, mZ.jsx)(ae, {
                kind: "Power",
                step: Gy ? Ke(Xy, ab) : 0,
                planned: !Gy
              }), (0, mZ.jsx)(HK, {
                kind: "Power",
                label: Ky(`${Oe}batUsed`),
                number: Gy ? `\u26a1 ${JP(Xy)}/s` : "\u2014",
                note: Ky(`${Oe}batUsedNote`),
                share: Gy ? Xy / ab : void 0,
                onExplain: () => {
                  Ey(`${Oe}batWhy_used`)
                }
              })]
            }), (0, mZ.jsx)(LK, {
              text: Ky(ny, uy),
              tone: rb,
              explained: sy
            }), mb ? (0, mZ.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Ky(`${Oe}rxNotYours`)
            }) : !Gy && (0, mZ.jsxs)(mZ.Fragment, {
              children: [(0, mZ.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, mZ.jsx)(bq, {
                  kind: "battery",
                  dims: qb.dims,
                  cap: ly.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: yb => {
                    oy.resize(yb)
                  }
                }), (0, mZ.jsx)(We, {
                  on: qb.guide,
                  label: Ky(`${Oe}rxGuide`),
                  toggle: () => {
                    oy.toggleGuide()
                  }
                }), ly.baf2BatCanFill && (0, mZ.jsx)(SZ.i, {
                  disabled: !SP("battery", ly.baf2BatNeed) || qb.busy.has("fill"),
                  onClick: () => {
                    oy.tap("fill", (() => {
                      Cy("fill")
                    }))
                  },
                  children: Ky(`${Oe}rxFill`)
                })]
              }), (0, mZ.jsx)(Ge, {
                need: ly.baf2BatNeed,
                kind: "battery",
                explain: Ey
              })]
            })]
          })]
        })
      })
    }
    const vq = "buildAFactory2Game:",
      iq = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Me(yb, bb) {
      return yb === Nc ? null : bb ? "#4a4440" : yb < Ic ? iq[yb - zP] : yb === Ic ? "#3fd0f0" : yb === xP ? "#2c3e4c" : "#55585e"
    }

    function Ye(yb) {
      let {
        inner: bb,
        looks: Wy,
        layer: Uy,
        setLayer: hy,
        glow: fy,
        melted: Zy,
        explain: cb
      } = yb;
      const {
        t: Py
      } = (0, Ch.D)(), [oy, By, Ky] = bb, ey = Math.max(0, Math.min(By - 1, Uy)), qb = [];
      for (let Sy = 0; Sy < Ky; Sy++)
        for (let yb = 0; yb < oy; yb++) {
          var sy;
          const bb = null !== (sy = Wy[(ey * Ky + Sy) * oy + yb]) && void 0 !== sy ? sy : Nc,
            Uy = Me(bb, Zy),
            hy = bb >= zP && bb < Ic;
          qb.push(null === Uy ? (0, mZ.jsx)("circle", {
            cx: yb + .5,
            cy: Sy + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${yb},${Sy}`) : (0, mZ.jsx)("rect", {
            x: yb + .06,
            y: Sy + .06,
            width: .88,
            height: .88,
            fill: Uy,
            opacity: hy && !Zy ? .5 + .5 * fy : 1,
            onClick: yb => {
              yb.stopPropagation();
              const Wy = le(bb);
              cb(Wy.key, Wy.params)
            }
          }, `${yb},${Sy}`))
        }
      return (0, mZ.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, mZ.jsx)("svg", {
          className: Sh()("Baf2RxMapGrid", {
            Melted: Zy
          }),
          viewBox: `0 0 ${Math.max(1,oy)} ${Math.max(1,Ky)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Py(`${vq}rxWhy_core`),
          onClick: () => {
            cb(`${vq}rxWhy_core`, {})
          },
          children: qb
        }), By > 1 && (0, mZ.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, mZ.jsx)("button", {
            type: "button",
            "aria-label": Py(`${vq}rxLayerDown`),
            disabled: ey <= 0,
            onClick: () => {
              hy(ey - 1)
            },
            children: "\u25bc"
          }), (0, mZ.jsxs)("span", {
            children: [(0, mZ.jsx)("span", {
              className: "HideNarrow",
              children: Py(`${vq}rxLayer`, {
                n: String(ey + 1),
                of: String(By)
              })
            }), (0, mZ.jsx)("span", {
              className: "ShowNarrow",
              children: Py(`${vq}rxLayerShort`, {
                n: String(ey + 1),
                of: String(By)
              })
            })]
          }), (0, mZ.jsx)("button", {
            type: "button",
            "aria-label": Py(`${vq}rxLayerUp`),
            disabled: ey >= By - 1,
            onClick: () => {
              hy(ey + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Xe = "buildAFactory2Game:",
      ne = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Fc,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: oP,
        kind: "red"
      }],
      ue = [50, Fc, 100];

    function rq(yb) {
      let {
        stats: bb,
        t: Wy,
        explain: Uy
      } = yb;
      const hy = yo(bb),
        fy = Math.max(1, bb.fuelHeat, bb.cooling, bb.size),
        Zy = [
          ["fuel", `${Xe}rxBarRods`, bb.fuelHeat],
          ["cooling", `${Xe}rxBarCooling`, bb.cooling],
          ["size", `${Xe}rxBarSize`, bb.size]
        ];
      return (0, mZ.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Uy(`${Xe}rxWhy_bars`)
        },
        children: [(0, mZ.jsx)("span", {
          className: "Baf2RxMostLine",
          children: Wy(`${Xe}rxMost`, {
            amount: JP(Math.min(bb.fuelHeat, bb.cooling, bb.size))
          })
        }), (0, mZ.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Zy.map((yb => {
            let [bb, Uy, Zy] = yb;
            return (0, mZ.jsxs)("span", {
              className: Sh()("Baf2RxMostBar", bb, {
                Low: bb === hy
              }),
              children: [(0, mZ.jsx)("small", {
                children: Wy(Uy)
              }), (0, mZ.jsx)("i", {
                children: (0, mZ.jsx)("b", {
                  style: {
                    width: 100 * Zy / fy + "%"
                  }
                })
              })]
            }, bb)
          }))
        })]
      })
    }

    function He(yb) {
      var bb;
      let {
        view: Wy,
        heat: hy,
        settle: fy,
        settleLine: Zy,
        settleBad: cb,
        explain: Py
      } = yb;
      const {
        t: oy
      } = (0, Ch.D)(), {
        status: By
      } = Wy, Ky = By.baf2RxAt.join(","), [ey, qb] = (0, Uy.useState)((() => Ee(Wy.inner)));
      (0, Uy.useEffect)((() => {
        qb(Ee(Wy.inner))
      }), [Ky, Wy.inner[1]]);
      const sy = null !== (bb = Wy.plan) && void 0 !== bb ? bb : KP(By),
        Sy = Wy.plan ? Wy.plan.powerPerUnit : By.baf2RxStats[8],
        Ey = null === hy ? null : "alarm" === (ly = PP(By)) ? "red" : "hot" === ly ? "hot" : "warm" === ly ? "warm" : "cold";
      var ly;
      const mb = !By.baf2RxFormed && function(yb, bb) {
          return 0 !== (yb.baf2RxFlags & bb)
        }(By, cW),
        Cy = By.baf2RxDamage,
        Ty = By.baf2RxDamageTrend;
      return (0, mZ.jsxs)("div", {
        className: Sh()("Baf2RxCore", null !== Ey && void 0 !== Ey ? Ey : "plan"),
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, mZ.jsx)(Ye, {
            inner: Wy.inner,
            looks: Wy.looks,
            layer: ey,
            setLayer: qb,
            glow: By.baf2RxFormed ? By.baf2RxThrottle / 100 : 1,
            melted: mb,
            explain: Py
          }), (0, mZ.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Py(`${Xe}rxWhy_heat`)
            },
            children: [null !== hy ? (0, mZ.jsxs)(mZ.Fragment, {
              children: [(0, mZ.jsx)("b", {
                children: oy(`${Xe}rxHeatPct`, {
                  pct: String(hy)
                })
              }), (0, mZ.jsx)("span", {
                className: Sh()("Baf2RxBand", Ey),
                children: oy(`${Xe}rxBand_${Ey}`)
              })]
            }) : (0, mZ.jsx)("b", {
              children: oy(`${Xe}rxHeat`)
            }), null !== Zy && (0, mZ.jsx)("span", {
              className: Sh()("Baf2RxSettle", {
                Bad: cb
              }),
              children: Zy
            }), Cy >= 1 && (0, mZ.jsxs)("span", {
              className: Sh()("Baf2RxDamage", Ty),
              children: [oy(`${Xe}rxDamageLine`, {
                pct: String(Cy)
              }), " \xb7 ", oy(`${Xe}rxDamage_${Ty}`), (0, mZ.jsx)("i", {
                children: (0, mZ.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Cy)}%`
                  }
                })
              })]
            })]
          }), (0, mZ.jsx)(FK, {
            max: oP,
            bands: ne,
            ticks: ue,
            now: hy,
            settle: fy,
            settleTone: cb ? "bad" : null,
            onExplain: () => {
              Py(`${Xe}rxWhy_heat`)
            }
          })]
        }), (0, mZ.jsx)(rq, {
          stats: sy,
          t: oy,
          explain: Py
        }), Sy > 0 && (0, mZ.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Py(`${Xe}rxWhy_perPellet`)
          },
          children: oy(`${Xe}rxPerPellet`, {
            amount: JP(Sy)
          })
        })]
      })
    }

    function aq(yb, bb) {
      var Wy;
      if (!yb.baf2RxStore) return {
        note: bb(`${Xe}rxUpTo`, {
          amount: JP(yb.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Uy, hy] = yb.baf2RxStore, fy = hy > 0 ? Uy / hy : 0, Zy = String(Math.floor(100 * fy)), cb = null !== (Wy = yb.baf2RxStoreNetPerS) && void 0 !== Wy ? Wy : 0, Py = function(yb) {
        var bb, Wy;
        const [Uy, hy] = null !== (bb = yb.baf2RxStore) && void 0 !== bb ? bb : [0, 0], fy = null !== (Wy = yb.baf2RxStoreNetPerS) && void 0 !== Wy ? Wy : 0;
        return hy > 0 && Uy >= hy - 1 ? "running" === yb.baf2RxState ? `${Ue}rxStoreFull` : `${Ue}rxStoreFullOnly` : fy > .05 ? `${Ue}rxStoreLine` : fy < -.05 ? "running" === yb.baf2RxState ? `${Ue}rxStoreUsesMore` : `${Ue}rxStoreDraining` : `${Ue}rxStorePct`
      }(yb);
      return {
        note: bb(Py, Py === `${Xe}rxStoreLine` ? {
          pct: Zy,
          time: sf(bb, (hy - Uy) / cb)
        } : {
          pct: Zy
        }),
        share: fy
      }
    }

    function Fe(yb) {
      let {
        view: bb,
        explain: Wy,
        preview: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)(), {
        status: fy
      } = bb, Zy = Dc(wc(...bb.dims)), cb = Be(fy), Py = Math.min(Math.round(fy.baf2RxFuel), Zy.fuel), oy = "running" === fy.baf2RxState, By = oy ? Ke(fy.baf2RxOut, fy.baf2RxMaxNow) : 0, Ky = function(yb, bb, Wy) {
        const Uy = cq(yb),
          hy = "cryo" === Uy.TW,
          fy = Wy ? Wy.coolantSecs : Uy.pct >= 100 && yb.baf2RxOut >= 1 ? oe(yb, yb.baf2RxThrottle).coolantSecs : null;
        let Zy, cb = !1;
        if (Uy.pct < 100) {
          const Wy = 1 === Uy.makersShort,
            fy = !hy && yb.baf2RxCryoOpen ? "OrCryo" : "";
          Zy = Uy.makersShort > 0 ? bb(hy ? `${Xe}rxCryoAddMixer${Wy?"":"s"}` : `${Xe}rxWaterAddCondenser${Wy?"":"s"}${fy}`, {
            count: String(Uy.makersShort)
          }) : bb(`${Xe}rxWaterNeeds`, {
            rate: yq(Uy.needPerS)
          })
        } else if (null !== fy) Zy = bb(`${Xe}rxWaterRunsOut`, {
          time: sf(bb, fy)
        });
        else if (Uy.waterBeside > 0) Zy = bb(`${Xe}rxCryoPlusWater`, {
          rate: yq(Uy.waterBeside)
        });
        else {
          const yb = function(yb) {
            return yb.inPerS <= 0 ? "rxWaterNoSupply" : yb.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Uy);
          cb = "rxWaterNoSupply" === yb, Zy = bb(`${Xe}${yb}`, {
            amount: JP(Uy.stored)
          })
        }
        return {
          kind: hy ? "Cryo" : "Water",
          label: bb(hy ? `${Xe}rxCryo` : `${Xe}rxWater`),
          number: `${yq(Uy.usePerS)}/s`,
          preview: Wy ? `${yq(Wy.coolPerS)}/s` : null,
          note: Zy,
          tone: "noWater" === yb.baf2RxState ? "danger" : cb ? "warn" : (Py = Uy.pct, oy = fy, Py < 100 ? "danger" : null === oy ? null : oy < 300 ? "danger" : "warn"),
          share: Uy.pct / 100,
          why: hy ? `${Xe}rxWhy_cryo` : `${Xe}rxWhy_water`,
          short: Uy.pct < 100
        };
        var Py, oy
      }(fy, hy, Uy), ey = EP(fy, Zy.waste, cb), qb = aq(fy, hy), sy = oe(fy, fy.baf2RxTarget), Sy = oy && Math.abs(sy.settle - fy.baf2RxHeat) >= 3, Ey = Uy ? Uy.pelletsPerMin / 60 : null;
      return (0, mZ.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mZ.jsx)(HK, {
            kind: "Fuel",
            label: hy(`${Xe}rxFuel`),
            number: String(Py),
            preview: null !== Ey && Ey > 0 && fy.baf2RxFuel > 0 ? sf(hy, fy.baf2RxFuel / Ey) : null,
            note: fy.baf2RxFuel <= 0 ? hy(`${Xe}rxFuelEmpty`) : cb > 0 ? hy(`${Xe}rxFuelLeft`, {
              time: sf(hy, fy.baf2RxFuel / cb)
            }) : hy(1 === Py ? `${Xe}rxFuelPellet` : `${Xe}rxFuelPellets`),
            tone: "noFuel" === fy.baf2RxState ? "danger" : fy.baf2RxFuel < 2 ? "warn" : null,
            share: fy.baf2RxFuel / Zy.fuel,
            onExplain: () => {
              Wy(`${Xe}rxWhy_fuel`)
            }
          }), (0, mZ.jsx)(HK, {
            kind: Ky.kind,
            label: Ky.label,
            number: Ky.number,
            preview: Ky.preview,
            note: Ky.note,
            tone: Ky.tone,
            share: Ky.share,
            onExplain: () => {
              Wy(Ky.why)
            }
          })]
        }), (0, mZ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mZ.jsx)(ae, {
            kind: "Fuel",
            step: By,
            short: "noFuel" === fy.baf2RxState
          }), (0, mZ.jsx)(ae, {
            kind: Ky.kind,
            step: By,
            short: Ky.short || "noWater" === fy.baf2RxState
          })]
        }), (0, mZ.jsx)(He, {
          view: bb,
          heat: fy.baf2RxHeat,
          settle: Math.min(oP, sy.settle),
          settleLine: Sy ? hy(`${Xe}rxHeatSettles`, {
            pct: String(Math.round(sy.settle)),
            time: sf(hy, sy.settleS)
          }) : null,
          settleBad: sy.settle > 100,
          explain: Wy
        }), (0, mZ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mZ.jsx)(ae, {
            kind: "Power",
            step: By
          }), (0, mZ.jsx)(ae, {
            kind: "Waste",
            step: oy && fy.baf2RxFuel - fy.baf2RxPu > 0 ? By : 0,
            short: ey.full
          })]
        }), (0, mZ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mZ.jsx)(HK, {
            kind: "Power",
            label: hy(`${Xe}rxPowerOut`),
            number: `\u26a1 ${JP(fy.baf2RxOut)}/s`,
            preview: Uy ? JP(Uy.out) : null,
            note: qb.note,
            share: qb.share,
            onExplain: () => {
              Wy(`${Xe}rxWhy_power`)
            }
          }), (0, mZ.jsx)(HK, {
            kind: "Waste",
            label: hy(`${Xe}rxWaste`),
            number: `${Math.floor(fy.baf2RxWaste)}/${Zy.waste}`,
            note: ey.full ? hy(`${Xe}rxWasteFull`) : null !== ey.fullInS ? hy(`${Xe}rxWasteFullIn`, {
              time: sf(hy, ey.fullInS)
            }) : hy(`${Xe}rxWasteSpent`),
            tone: "wasteFull" === fy.baf2RxState ? "danger" : ey.full ? "warn" : null,
            share: fy.baf2RxWaste / Zy.waste,
            onExplain: () => {
              Wy(`${Xe}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function pe(yb) {
      let {
        view: bb,
        explain: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ch.D)(), hy = bb.plan;
      if (!hy) return null;
      const fy = hy.fuelHeat <= 0 ? null : hy.cooling > 0 ? Math.min(oP, 100 * hy.fuelHeat / hy.cooling) : oP,
        Zy = Uy(`${Xe}rxPlanAtFull`);
      return (0, mZ.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, mZ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mZ.jsx)(HK, {
            kind: "Fuel",
            label: Uy(`${Xe}rxFuel`),
            number: Uy(`${Xe}rxPlanPerMin`, {
              amount: go(hy.pelletsPerMin)
            }),
            note: Uy(`${Xe}rxPlanPellets`),
            onExplain: () => {
              Wy(`${Xe}rxWhy_fuel`)
            }
          }), (0, mZ.jsx)(HK, {
            kind: "Water",
            label: Uy(`${Xe}rxWater`),
            number: `${yq(hy.waterPerS)}/s`,
            note: bb.status.baf2RxCryoOpen && hy.waterPerS > 0 ? Uy(`${Xe}rxPlanOrCryo`, {
              rate: yq(fP(hy, Ay.f) * Ay.o)
            }) : Zy,
            onExplain: () => {
              Wy(`${Xe}rxWhy_water`)
            }
          })]
        }), (0, mZ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mZ.jsx)(ae, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, mZ.jsx)(ae, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, mZ.jsx)(He, {
          view: bb,
          heat: null,
          settle: fy,
          settleLine: null === fy ? null : Uy(`${Xe}rxPlanHeat`, {
            pct: String(Math.round(fy))
          }),
          settleBad: null !== fy && fy > 100,
          explain: Wy
        }), (0, mZ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mZ.jsx)(ae, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, mZ.jsx)(ae, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, mZ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mZ.jsx)(HK, {
            kind: "Power",
            label: Uy(`${Xe}rxPowerOut`),
            number: `\u26a1 ${JP(hy.max)}/s`,
            note: Zy,
            onExplain: () => {
              Wy(`${Xe}rxWhy_power`)
            }
          }), (0, mZ.jsx)(HK, {
            kind: "Waste",
            label: Uy(`${Xe}rxWaste`),
            number: Uy(`${Xe}rxPlanPerMin`, {
              amount: go(hy.pelletsPerMin)
            }),
            note: Uy(`${Xe}rxWasteSpent`),
            onExplain: () => {
              Wy(`${Xe}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const Le = "buildAFactory2Game:",
      Qe = {
        key: `${Le}rxWaiting`,
        params: {},
        tone: "info"
      };

    function jq(yb, bb) {
      return 0 !== (yb.baf2RxFlags & bb)
    }

    function De(yb) {
      var bb, Wy;
      let {
        store: hy,
        close: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ch.D)(), cb = xe(hy), {
        explained: Py,
        hinting: oy,
        explain: By,
        explainOnce: Ky
      } = pK("baf2RxExplained"), ey = (0, Uy.useCallback)(((yb, bb) => {
        By(Zy(yb, bb))
      }), [By, Zy]), qb = (0, Uy.useCallback)(((yb, bb) => {
        Ky(yb, Zy(yb, bb))
      }), [Ky, Zy]), [sy, Sy] = (0, Uy.useState)(!1), [Ey, ly] = (0, Uy.useState)(!1), mb = null === cb || void 0 === cb ? void 0 : cb.status, Cy = null === mb || void 0 === mb ? void 0 : mb.baf2RxAt.join(","), Ty = !0 === (null === mb || void 0 === mb ? void 0 : mb.baf2RxFormed);
      (0, Uy.useEffect)((() => {
        ly(!1), Sy(!1)
      }), [Cy, Ty]), (0, Uy.useEffect)((() => (hy.opened(), () => {
        hy.closed()
      })), [hy]);
      const Vy = void 0 !== mb && jq(mb, Bb),
        Jy = mb ? Ty ? PP(mb) : null !== cb && void 0 !== cb && cb.plan ? function(yb, bb) {
          if (yb <= 0) return "off";
          if (bb <= 0) return "alarm";
          const Wy = 100 * yb / bb;
          return Wy < 50 ? "calm" : Wy < bo ? "warm" : Wy <= 100 ? "hot" : "alarm"
        }(cb.plan.fuelHeat, cb.plan.cooling) : "off" : "off",
        gb = mb ? BP(mb) : null,
        Gy = cb ? cb.waiting ? Qe : Ty ? se(cb.status) : function(yb) {
          var bb, Wy;
          const {
            status: Uy
          } = yb;
          return Se({
            left: Uy.baf2RxNeed.reduce(((yb, bb) => {
              let [, Wy] = bb;
              return yb + Wy
            }), 0),
            bad: Uy.baf2RxBad,
            rods: null !== (bb = null === (Wy = yb.plan) || void 0 === Wy ? void 0 : Wy.rods) && void 0 !== bb ? bb : 0,
            canFill: jq(Uy, Pb),
            melted: jq(Uy, cW),
            idle: yb.looks.reduce(((yb, bb) => yb + (bb === xP ? 1 : 0)), 0)
          })
        }(cb) : null,
        Oy = oy && null !== Gy && ("ok" === Gy.tone || "info" === Gy.tone),
        Ry = mb ? function(yb) {
          const bb = 0 !== (yb.baf2RxFlags & fb),
            Wy = yb.baf2RxHeat < Lc;
          return 0 !== (yb.baf2RxFlags & cW) || Wy && (bb || !yb.baf2RxFormed) ? null : yb.baf2RxFormed && !bb ? {
            key: `${co}rxApartScram`,
            params: {}
          } : {
            key: `${co}rxApartCooling`,
            params: {
              pct: String(Lc)
            }
          }
        }(mb) : null,
        [vb, ib, My] = null !== (bb = null === cb || void 0 === cb ? void 0 : cb.dims) && void 0 !== bb ? bb : [0, 0, 0],
        Yy = `${vb}\xd7${ib}\xd7${My}`;
      return (0, mZ.jsx)(sZ.c, {
        close: fy,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, mZ.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, mZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mZ.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, mZ.jsx)(dK, {
                mood: Jy
              }), (0, mZ.jsxs)("div", {
                children: [(0, mZ.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Zy(`${Le}rxTitle`)
                }), cb && (0, mZ.jsxs)("p", {
                  className: Sh()("Baf2RxSubtitle", Ty && (null === gb || void 0 === gb ? void 0 : gb.tone)),
                  children: [Ty && !Vy ? (0, mZ.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Zy(`${Le}rxChangeSize`),
                    onClick: () => {
                      if (!mb) return;
                      const yb = jq(mb, fb);
                      var bb;
                      (bb = {
                        scram: yb,
                        heat: mb.baf2RxHeat
                      }).scram && bb.heat < Lc ? Sy(!0) : ey(yb ? `${Le}rxResizeCooling` : `${Le}rxResizeHot`, {
                        pct: String(Lc)
                      })
                    },
                    children: [Yy, " \u270e"]
                  }) : Yy, " \xb7 ", Zy(Ty ? null !== (Wy = null === gb || void 0 === gb ? void 0 : gb.label) && void 0 !== Wy ? Wy : `${Le}rxState_running` : `${Le}rxSubPlanShort`)]
                })]
              })]
            }), (0, mZ.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [cb && !Vy && (0, mZ.jsx)(AK, {
                kind: "reactor",
                busy: cb.busy.has("apart"),
                whyNot: Ry ? () => {
                  ey(Ry.key, Ry.params)
                } : null,
                apart: () => {
                  hy.tap("apart", (() => {
                    hy.send("apart")
                  }))
                }
              }), (0, mZ.jsx)(SZ.h, {
                onClick: fy
              })]
            })]
          }), cb && Gy && (0, mZ.jsxs)("div", {
            className: "Baf2RxBody",
            children: [Ty ? (0, mZ.jsx)(Fe, {
              view: cb,
              explain: ey,
              preview: Pe(cb.status)
            }) : (0, mZ.jsx)(pe, {
              view: cb,
              explain: ey
            }), (0, mZ.jsx)(LK, {
              text: Oy ? `${ee(Zy,Gy)} ${Zy(`${Le}rxTapHint`)}` : ee(Zy, Gy),
              tone: Gy.tone,
              explained: Py
            }), Vy ? (0, mZ.jsxs)(mZ.Fragment, {
              children: [(0, mZ.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Zy(`${Le}rxNotYours`)
              }), (0, mZ.jsx)(ke, {
                status: cb.status,
                store: hy,
                readOnly: !0
              })]
            }) : Ty && !Ey ? (0, mZ.jsxs)(mZ.Fragment, {
              children: [(0, mZ.jsx)(Je, {
                view: cb,
                store: hy,
                explain: ey,
                explainOnce: qb
              }), void 0 !== cb.status.baf2RxLayout && DK(cb.status) && (0, mZ.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, mZ.jsx)(ke, {
                  status: cb.status,
                  store: hy,
                  readOnly: !1,
                  bare: !0
                }), (0, mZ.jsx)(wK, {
                  status: cb.status,
                  store: hy,
                  busy: cb.busy.has("fill")
                })]
              })]
            }) : (0, mZ.jsxs)(mZ.Fragment, {
              children: [(0, mZ.jsx)(gq, {
                view: cb,
                store: hy,
                keepSize: Ty ? () => {
                  ly(!1)
                } : void 0
              }), qo(cb.dims, cb.status.baf2RxDims) && (0, mZ.jsx)(Ge, {
                need: cb.status.baf2RxNeed,
                explain: ey
              }), (0, mZ.jsx)(ke, {
                status: cb.status,
                store: hy,
                readOnly: !1
              })]
            }), sy && (0, mZ.jsx)(IK, {
              id: "baf2ResizeTitle",
              title: `${Le}rxResizeConfirmTitle`,
              body: `${Le}rxResizeConfirmBody`,
              yes: `${Le}rxChangeSize`,
              cancel: () => {
                Sy(!1)
              },
              confirm: () => {
                Sy(!1), ly(!0)
              }
            })]
          })]
        })
      })
    }
    class tq {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(yb) {
        this.view = yb;
        for (const bb of this.listeners) bb()
      }
      get() {
        return this.view
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
    }

    function we(yb) {
      let {
        commands: bb,
        store: Wy,
        power: hy,
        water: fy,
        reactor: Zy,
        battery: cb,
        collider: Py,
        terminal: oy,
        quests: By,
        close: Ky,
        qh: ey,
        askIslands: qb,
        showCore: sy,
        openSocial: Sy
      } = yb;
      const {
        userContext: Ey
      } = (0, Rc.c)(), ly = Oc.featureFlags.useSocialFeatures && Ey.isLoggedIn(), [mb, Cy] = (0, Uy.useState)((() => Wy.get()));
      (0, Uy.useEffect)((() => Wy.subscribe((() => {
        Cy(Wy.get())
      }))), [Wy]);
      const Ty = "islands" === (null === mb || void 0 === mb ? void 0 : mb.kind) ? mb.backToCore : void 0;
      return (0, mZ.jsxs)(nZ.Provider, {
        value: bb,
        children: ["core" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(UK, {
          view: mb.core,
          close: Ky,
          askIslands: qb
        }), "dropMap" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(ce, {
          message: mb.dropMap,
          quests: By,
          close: Ky,
          qh: ey
        }), "islands" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(GK, {
          message: mb.islands,
          arrivedAtMs: mb.arrivedAtMs,
          close: Ty ? () => {
            sy(Ty)
          } : Ky,
          qh: ey,
          openSocial: ly ? Sy : null
        }), "quests" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(VB, {
          store: By,
          close: Ky
        }), "transfer" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(No, {
          message: mb.transfer,
          arrivedAtMs: mb.arrivedAtMs,
          close: Ky,
          qh: ey
        }), "power" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(gc, {
          store: hy,
          close: Ky
        }), "water" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(Pc, {
          store: fy,
          close: Ky
        }), "reactor" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(De, {
          store: Zy,
          close: Ky
        }), "battery" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(Re, {
          store: cb,
          close: Ky
        }), "collider" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(oo, {
          store: Py,
          close: Ky
        }), "terminal" === (null === mb || void 0 === mb ? void 0 : mb.kind) && (0, mZ.jsx)(re, {
          store: oy,
          close: Ky,
          send: yb => {
            bb.send(yb)
          }
        })]
      })
    }
    var kq = Wy(37177);

    function Ne(yb, bb) {
      return yb.distSq - bb.distSq
    }
    class zq {
      constructor() {
        this.list = [], this.pool = []
      }
      add(yb, bb, Wy, Uy) {
        let hy = this.pool[this.list.length];
        hy || (hy = {
          x: 0,
          y: 0,
          distSq: 0,
          element: bb,
          liftRem: Wy,
          dot: Uy
        }, this.pool.push(hy)), hy.x = yb.x, hy.y = yb.y, hy.distSq = yb.distSq, hy.element = bb, hy.liftRem = Wy, hy.dot = Uy, this.list.push(hy)
      }
    }
    class Ie {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = yb, this.sizes = new WeakMap, this.observer = new ResizeObserver((yb => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const bb of yb) {
            const yb = bb.borderBoxSize[0];
            "dot" !== bb.target.dataset.crowded && 0 !== yb.inlineSize && 0 !== yb.blockSize && this.sizes.set(bb.target, {
              width: yb.inlineSize,
              height: yb.blockSize
            })
          }
        })), this.remPx = 16, this.DW = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.pE = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.pE)
      }
      observe(yb) {
        this.observer.observe(yb)
      }
      unobserve(yb) {
        this.observer.unobserve(yb)
      }
      run(yb) {
        const bb = yb.list;
        bb.sort(Ne);
        const Wy = this.pxPerVw,
          Uy = this.pxPerVh;
        this.DW.length = 0, this.hud && this.DW.push(...this.hud.boxes(performance.now()));
        for (const fy of bb) {
          var hy;
          const yb = this.sizes.get(fy.element);
          let bb = "no";
          if (yb && yb.width > 0) {
            const hy = fy.x * Wy,
              Zy = fy.y * Uy - fy.liftRem * this.remPx;
            this.fit(hy, Zy, yb.width, yb.height) || (bb = fy.dot && this.fit(hy, Zy, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (hy = fy.element.dataset.crowded) && void 0 !== hy ? hy : "no") !== bb && ("no" === bb ? delete fy.element.dataset.crowded : fy.element.dataset.crowded = bb), "hidden" !== bb && (0, kq.b)(fy.element, fy.x, fy.y)
        }
        bb.length = 0
      }
      fit(yb, bb, Wy, Uy) {
        const hy = yb - Wy / 2,
          fy = yb + Wy / 2,
          Zy = bb - Uy,
          cb = this.DW;
        for (let Py = 0; Py < cb.length; Py += 4)
          if (hy < cb[Py + 1] - 2 && fy > cb[Py] + 2 && Zy < cb[Py + 3] - 2 && bb > cb[Py + 2] + 2) return !1;
        return cb.push(hy, fy, Zy, bb), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.pE)
      }
    }
    const xq = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class Ae {
      constructor() {
        this.cards = xq.map((yb => document.getElementsByClassName(yb))), this.watched = xq.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(yb) {
        yb - this.refreshedAt > 1e3 && (this.refreshedAt = yb, this.stale = !0);
        for (let Wy = 0; Wy < this.cards.length; Wy++) {
          var bb;
          const yb = null !== (bb = this.cards[Wy][0]) && void 0 !== bb ? bb : null;
          yb !== this.watched[Wy] && this.watch(Wy, yb)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let yb = 0; yb < this.watched.length; yb++) this.watch(yb, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const yb = this.list;
        yb.length = 0;
        for (const bb of this.watched) {
          if (!bb || bb.closest(".NoRoom")) continue;
          const Wy = bb.getBoundingClientRect();
          let Uy = Wy.top,
            hy = Wy.bottom;
          if (bb === this.watched[0] && this.hud) {
            const yb = this.hud.getBoundingClientRect();
            Uy = Math.max(Uy, yb.top), hy = Math.min(hy, yb.bottom)
          }
          Wy.width > 0 && hy > Uy && yb.push(Wy.left, Wy.right, Uy, hy)
        }
      }
      watch(yb, bb) {
        const Wy = this.watched[yb];
        var Uy, hy;
        (Wy && this.sizes.unobserve(Wy), this.watched[yb] = bb, this.stale = !0, bb && this.sizes.observe(bb), 0 === yb) && (null === (Uy = this.hud) || void 0 === Uy || Uy.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (hy = null === bb || void 0 === bb ? void 0 : bb.closest(".Baf2QuestHud")) && void 0 !== hy ? hy : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const de = [0, 0, 0],
      ys = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function bs(yb, bb, Wy, Uy, hy, fy) {
      let [Zy, cb, Py] = Uy;
      const oy = (Zy + .5 - Wy[0]) ** 2 + (cb - Wy[1]) ** 2 + (Py + .5 - Wy[2]) ** 2;
      let By = null;
      oy <= fy ** 2 && (de[0] = Zy + .5, de[1] = cb + hy, de[2] = Py + .5, By = bb.projectWorldPosToViewport(de));
      const Ky = null !== By && By.x > -5 && By.x < 105 && By.y > -5 && By.y < 105;
      return (0, kq.f)(yb, !Ky), Ky ? (ys.x = By.x, ys.y = By.y, ys.distSq = oy, ys) : null
    }
    class Wq {
      constructor(yb) {
        this.onElement = yb, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(yb) {
        const bb = [];
        for (let Wy = 0; Wy + 4 < yb.length; Wy += 5) {
          const Uy = [yb[Wy], yb[Wy + 1], yb[Wy + 2]];
          bb.push({
            key: Uy.join(","),
            pos: Uy,
            status: IU[yb[Wy + 3]],
            kind: Tb[yb[Wy + 4]]
          })
        }
        this.markers = bb, this.keys = new Set(bb.map((yb => {
          let {
            key: bb
          } = yb;
          return bb
        }))), this.notify()
      }
      covers(yb) {
        return this.keys.has(yb)
      }
      get() {
        return this.markers
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      bind(yb) {
        let bb = this.refs.get(yb);
        return bb || (bb = bb => {
          const Wy = this.elements.get(yb);
          var Uy, hy;
          Wy && (null === (Uy = this.onElement) || void 0 === Uy || Uy.call(this, Wy, !1));
          bb ? (this.elements.set(yb, bb), null === (hy = this.onElement) || void 0 === hy || hy.call(this, bb, !0)) : (this.elements.delete(yb), this.refs.delete(yb))
        }, this.refs.set(yb, bb)), bb
      }
      onAfterRender(yb, bb, Wy) {
        for (const Uy of this.markers) {
          const hy = this.elements.get(Uy.key);
          if (!hy) continue;
          const fy = bs(hy, yb, bb, Uy.pos, 1.05, 24);
          fy && Wy.add(fy, hy, .45, !0)
        }
      }
      notify() {
        for (const yb of this.listeners) yb()
      }
    }
    const Uq = {
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
    const hq = (0, Uy.memo)((function(yb) {
        let {
          status: bb,
          kind: Wy,
          bindRef: Uy
        } = yb;
        const {
          t: hy
        } = (0, Ch.D)(), fy = function(yb, bb) {
          var Wy;
          if ("noFuel" === yb) {
            var Uy, hy;
            const yb = null === (Uy = Rb[bb]) || void 0 === Uy || null === (hy = Uy.fuels) || void 0 === hy ? void 0 : hy.find((yb => Ib.includes(yb)));
            return null !== yb && void 0 !== yb ? yb : Uq.noFuel
          }
          return void 0 !== (null === (Wy = Rb[bb]) || void 0 === Wy ? void 0 : Wy.cryoMade) ? "noOutlet" === yb ? "Fluid Pipe" : "noInput" === yb ? "Biomass" : Uq[yb] : Uq[yb]
        }(bb, Wy);
        return (0, mZ.jsxs)("div", {
          className: Sh()("Baf2StallMarker", bb),
          ref: Uy,
          hidden: !0,
          children: [fy && (0, mZ.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, mZ.jsx)(Vh.d, {
              itemName: fy,
              amount: 0
            })
          }), (0, mZ.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === bb ? "?" : "!"
          }), (0, mZ.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: hy(`buildAFactory2Game:stallTag_${bb}`)
          })]
        })
      })),
      fq = (0, Uy.memo)((function(yb) {
        let {
          controller: bb
        } = yb;
        const [Wy, hy] = (0, Uy.useState)((() => bb.get()));
        return (0, Uy.useEffect)((() => (hy(bb.get()), bb.subscribe((() => {
          hy(bb.get())
        })))), [bb]), (0, mZ.jsx)("div", {
          className: "Baf2StallMarkers",
          children: Wy.map((yb => (0, mZ.jsx)(hq, {
            status: yb.status,
            kind: yb.kind,
            bindRef: bb.bind(yb.key)
          }, yb.key)))
        })
      })),
      Zq = PW.k + 150;
    class cs {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(yb, bb) {
        const Wy = bb - yb;
        null === this.offset || Wy < this.offset ? this.offset = Wy : this.offset = Math.min(Wy, this.offset + .02 * (bb - this.sampledAt)), this.sampledAt = bb
      }
      toLocal(yb) {
        var bb;
        return yb + (null !== (bb = this.offset) && void 0 !== bb ? bb : 0) + Zq
      }
    }
    var Pq = Wy(37179);
    const oq = 15 * Math.PI / 180,
      Bq = Math.SQRT2,
      Kq = [4, 2];

    function eq(yb, bb) {
      const Wy = [1 / 0, 1 / 0, 1 / 0],
        Uy = [-1 / 0, -1 / 0, -1 / 0];
      for (const Py of yb)
        for (let yb = 0; yb < 3; yb++) Wy[yb] = Math.min(Wy[yb], Py[yb]), Uy[yb] = Math.max(Uy[yb], Py[yb]);
      const hy = (Wy[0] + Uy[0]) / 2,
        fy = (Wy[1] + Uy[1]) / 2,
        Zy = (Wy[2] + Uy[2]) / 2;
      let cb = 0;
      for (const Py of yb) cb = Math.max(cb, Math.hypot(Py[0] - hy, Py[1] - fy, Py[2] - Zy));
      return {
        x: hy,
        y: fy,
        z: Zy,
        r: cb + bb
      }
    }

    function qs(yb, bb, Wy) {
      const Uy = bb.x - yb.x,
        hy = bb.y - yb.y,
        fy = bb.z - yb.z,
        Zy = Math.sqrt(Uy * Uy + hy * hy + fy * fy);
      if (Zy <= bb.r + 8) return 1;
      const cb = bb.r / Zy,
        Py = Math.sqrt(1 - cb * cb),
        oy = Py < -yb.cosHalf,
        By = (Uy * yb.dx + hy * yb.dy + fy * yb.dz) / Zy;
      if (!oy && By < yb.cosHalf * Py - yb.sinHalf * cb) return 0;
      const Ky = Wy * Bq * yb.frameMs * yb.pxPerBlock / (Zy - bb.r);
      for (let ey = 0; ey < Kq.length; ey++)
        if (Ky * Kq[ey] <= 1) return Kq[ey];
      return 1
    }

    function sq(yb, bb) {
      return {
        name: yb,
        at: bb,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Sq = [0, 0, 0];

    function Eq(yb, bb, Wy) {
      let [, Uy, hy, fy, Zy, cb] = bb;
      const Py = PW.e * (null !== Zy && void 0 !== Zy ? Zy : 1),
        oy = [];
      for (let qb = 0; qb < Uy.length; qb += 3) oy.push([Uy[qb] + .5, Uy[qb + 1] + .65, Uy[qb + 2] + .5]);
      const By = [];
      for (let qb = 0; qb < oy.length - 1; qb++) {
        const [yb, bb] = [oy[qb], oy[qb + 1]];
        By.push([(yb[0] + bb[0]) / 2, (yb[1] + bb[1]) / 2, (yb[2] + bb[2]) / 2])
      }
      const Ky = oy.slice(1, -1),
        ey = new Uint8Array(Ky.length);
      for (const qb of null !== cb && void 0 !== cb ? cb : []) ey[qb >> 1] |= 1 & qb ? 2 : 1;
      return {
        island: yb,
        length: Ky.length,
        loop: fy,
        cellsPerMs: Py,
        edges: By,
        Yf: Ky,
        bounds: eq([...By, ...Ky], .3),
        changed: !0,
        culled: !1,
        hide: ey,
        items: hy.map((yb => {
          let [bb, Uy] = yb;
          return sq(bb, (0, PW.D)(bb, Uy, Wy, Py).at)
        }))
      }
    }

    function lq(yb, bb) {
      const {
        items: Wy
      } = yb;
      if (0 === Wy.length) return;
      const Uy = yb.length / yb.cellsPerMs,
        hy = Math.floor((bb - Wy[0].at) / Uy) - 1;
      if (hy > 0)
        for (const fy of Wy) fy.at += hy * Uy
    }

    function ms(yb, bb) {
      const Wy = Math.min(Math.floor(bb), yb.length - 1),
        Uy = yb.hide[Wy];
      return 0 !== Uy && 0 !== (Uy & (bb - Wy < .5 ? 1 : 2))
    }

    function Cq(yb, bb) {
      const Wy = Math.min(Math.floor(bb), yb.length - 1),
        Uy = bb - Wy,
        hy = Uy < .5,
        fy = hy ? yb.edges[Wy] : yb.Yf[Wy],
        Zy = hy ? yb.Yf[Wy] : yb.edges[Wy + 1],
        cb = hy ? 2 * Uy : 2 * Uy - 1;
      Sq[0] = fy[0] + (Zy[0] - fy[0]) * cb, Sq[1] = fy[1] + (Zy[1] - fy[1]) * cb, Sq[2] = fy[2] + (Zy[2] - fy[2]) * cb
    }
    const Tq = Math.PI / 4;
    class Vq {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new cs, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.pE = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(yb) {
        const bb = performance.now();
        this.clock.sample(yb.baf2BeltLinesAt, bb), this.queue(yb.baf2BeltLinesAt, yb, 0, null, null, 0), this.applyDue(bb)
      }
      onMoves(yb) {
        const bb = performance.now(),
          Wy = yb.baf2BeltMovesAt;
        this.clock.sample(Wy, bb);
        for (const [Uy, hy, fy, Zy] of yb.baf2BeltMoveList) null === hy ? this.queue(Wy - fy, null, Uy, null, null, null !== Zy && void 0 !== Zy ? Zy : 0) : this.queue(Wy - fy, null, Uy, hy, null !== Zy && void 0 !== Zy ? Zy : null, 0);
        this.applyDue(bb)
      }
      start(yb) {
        this.pool = new Pq.c(yb, {
          scale: .3,
          yaw: Tq
        }, 64), this.pE(), window.addEventListener("resize", this.pE)
      }
      onAfterRender(yb) {
        const {
          pool: bb
        } = this;
        if (!bb) return;
        const Wy = performance.now(),
          Uy = Wy - this.lastRenderAt;
        this.lastRenderAt = Wy, Uy < 100 && (this.frameMs += .1 * (Uy - this.frameMs));
        const hy = Wy + this.frameMs;
        this.applyDue(hy);
        const fy = yb.cameraPosition,
          Zy = bb.follow(fy);
        this.setView(yb, fy);
        const cb = this.frame++;
        for (let Py = 0; Py < this.shown.length; Py++) {
          const yb = this.shown[Py],
            Wy = qs(this.view, yb.bounds, yb.cellsPerMs),
            Uy = yb.culled && 0 !== Wy;
          if (yb.culled = 0 === Wy, !Zy && !yb.changed && !Uy && (0 === Wy || (cb + Py) % Wy !== 0)) continue;
          yb.changed = !1, yb.loop && (lq(yb, hy), (0, PW.x)(yb.items, yb.length, hy, yb.cellsPerMs));
          let fy = yb.length;
          for (let cb = 0; cb < yb.items.length; cb++) {
            const Wy = yb.items[cb],
              Uy = (0, PW.H)(Wy.at, fy, hy, yb.cellsPerMs);
            if (fy = Uy - PW.o, ms(yb, Uy)) {
              null === Wy.kind || Wy.hidden || (Wy.kind.hide(Wy.slot), Wy.hidden = !0);
              continue
            }
            let Py = Wy.kind;
            if (null === Py) {
              if (Py = bb.kindOf(Wy.name), null === Py) continue;
              Wy.kind = Py, Wy.slot = Py.take(), Wy.hidden = !0, Wy.drawn = NaN
            } else if (Uy === Wy.drawn && !Wy.hidden && !Zy) continue;
            Cq(yb, Uy), Py.write(Wy.slot, Sq[0], Sq[1], Sq[2]), Wy.hidden = !1, Wy.drawn = Uy
          }
        }
        bb.commit()
      }
      dispose() {
        var yb;
        window.removeEventListener("resize", this.pE), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (yb = this.pool) || void 0 === yb || yb.dispose(), this.pool = null
      }
      setView(yb, bb) {
        const {
          cameraDir: Wy,
          lastDir: Uy
        } = this, hy = yb.cameraDirection;
        for (let By = 0; By < 3; By++) Uy[By] = Wy[By], Wy[By] = hy[By];
        const fy = Wy[0] * Uy[0] + Wy[1] * Uy[1] + Wy[2] * Uy[2],
          Zy = Number.isNaN(fy) ? 0 : Math.acos(Math.min(1, Math.max(-1, fy))),
          {
            width: cb,
            height: Py
          } = this,
          oy = yb.tanHalfFovX;
        ! function(yb, bb, Wy, Uy, hy, fy, Zy) {
          let cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          yb.x = bb[0], yb.y = bb[1], yb.z = bb[2], yb.dx = Wy[0], yb.dy = Wy[1], yb.dz = Wy[2];
          const Py = Math.min(Math.PI, Math.atan(Math.sqrt(Uy * Uy + hy * hy)) + oq + cb);
          yb.cosHalf = Math.cos(Py), yb.sinHalf = Math.sin(Py), yb.pxPerBlock = fy / (2 * hy), yb.frameMs = Zy
        }(this.view, bb, Wy, oy, oy * Py / cb, Py * window.devicePixelRatio, this.frameMs, Zy)
      }
      queue(yb, bb, Wy, Uy, hy, fy) {
        const Zy = Math.max(this.clock.toLocal(yb), this.lastPendingAt);
        this.lastPendingAt = Zy, this.pending.push({
          at: Zy,
          lines: bb,
          line: Wy,
          name: Uy,
          pos: hy,
          idx: fy
        })
      }
      applyDue(yb) {
        const {
          pending: bb
        } = this;
        for (; this.pendingHead < bb.length && bb[this.pendingHead].at <= yb;) {
          const yb = bb[this.pendingHead++];
          if (yb.lines) this.applyLines(yb.lines, yb.at), yb.lines = null;
          else {
            const bb = this.lines.get(yb.line);
            bb && this.applyMove(bb, yb, yb.at)
          }
        }
        this.pendingHead === bb.length ? (bb.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > bb.length && (bb.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(yb, bb) {
        this.clearIsland(yb.baf2BeltIsland);
        for (const Wy of yb.baf2BeltLineList) this.lines.set(Wy[0], Eq(yb.baf2BeltIsland, Wy, bb));
        this.shown = [...this.lines.values()]
      }
      applyMove(yb, bb, Wy) {
        let {
          name: Uy,
          pos: hy,
          idx: fy
        } = bb;
        yb.changed = !0, yb.loop && (lq(yb, Wy), (0, PW.x)(yb.items, yb.length, Wy, yb.cellsPerMs)), null !== Uy && null !== hy ? (0, PW.A)(yb.items, yb.length, sq(Uy, Wy), hy, Wy, yb.cellsPerMs) : null !== Uy ? yb.items.push(sq(Uy, Wy)) : yb.items.length > fy && this.release((0, PW.K)(yb.items, yb.length, Wy, yb.cellsPerMs, fy))
      }
      clearIsland(yb) {
        for (const [bb, Wy] of this.lines)
          if (Wy.island === yb) {
            for (const yb of Wy.items) this.release(yb);
            this.lines.delete(bb)
          }
      }
      release(yb) {
        null !== yb.kind && (yb.kind.release(yb.slot), yb.kind = null, yb.slot = -1, yb.hidden = !0, yb.drawn = NaN)
      }
    }
    var Jq = Wy(35370),
      gs = Wy(37197);

    function Gq(yb) {
      let {
        depth: bb,
        store: Wy,
        t: hy
      } = yb;
      const fy = function(yb) {
        const [bb, Wy] = (0, Uy.useState)(yb.lastPlayerY());
        return (0, zB.i)(Mh, Wy), (0, Uy.useEffect)((() => {
          Wy(yb.lastPlayerY())
        }), [yb]), bb
      }(Wy);
      if (null === fy) return null;
      const [Zy, cb] = bb, Py = fy > Zy ? Zy : null !== cb && fy < cb ? cb : null, oy = {
        y: qZ(fy),
        target: null === Py ? "" : qZ(Py)
      };
      return (0, mZ.jsx)("span", {
        className: Sh()("Baf2QuestDepth", {
          Reached: null === Py
        }),
        children: hy(`${yK}${null===Py?"questDepthReached":"questDepth"}`, oy)
      })
    }

    function Oq(yb) {
      let {
        also: bb,
        view: Wy,
        t: Uy
      } = yb;
      return (0, mZ.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, mZ.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, mZ.jsx)("strong", {
            children: Uy(`${yK}questAlsoDownHere`)
          }), (0, mZ.jsx)("span", {
            className: "Baf2QuestChips",
            children: bb.map((yb => {
              let [bb, hy, fy, Zy] = yb;
              return (0, mZ.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Uy(`${yK}questAlsoItem`, {
                  item: WB(Uy, Wy.itemNames[bb], bb),
                  have: String(hy),
                  need: String(fy)
                }),
                children: [(0, mZ.jsx)(fB, {
                  item: bb
                }), (0, mZ.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${hy}/${fy}`
                }), null !== Zy && (0, mZ.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Uy(`${yK}questAlsoDepth`, {
                    y: qZ(Zy)
                  })
                })]
              }, bb)
            }))
          })]
        })]
      })
    }
    var Rq = Wy(2714);

    function vs(yb) {
      let {
        expanded: bb,
        inventoryOpen: Wy,
        children: hy
      } = yb;
      const fy = (0, Uy.useRef)(null);
      return (0, Uy.useEffect)((() => {
        const yb = fy.current,
          bb = null === yb || void 0 === yb ? void 0 : yb.closest(".RightElements"),
          Uy = null === yb || void 0 === yb ? void 0 : yb.firstElementChild;
        if (!yb || !bb || !Uy) return;
        return (0, gs.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [bb, Uy], (() => {
          const hy = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === hy.length) return;
          const fy = Math.max(...hy.map((yb => yb.getBoundingClientRect().bottom))),
            Zy = bb.getBoundingClientRect(),
            cb = Wy ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (cb) {
            const bb = parseFloat(getComputedStyle(Uy).marginLeft) + parseFloat(getComputedStyle(Uy).marginRight),
              Wy = Zy.right - cb.getBoundingClientRect().right - 8 - bb;
            yb.style.setProperty("--baf2-quest-room", `${Wy}px`), yb.classList.toggle("NoRoom", Wy < 150)
          } else yb.style.removeProperty("--baf2-quest-room"), yb.classList.remove("NoRoom");
          const Py = fy - Zy.top + 8,
            oy = function(yb, bb, Wy) {
              const Uy = bb.getBoundingClientRect(),
                hy = yb.getBoundingClientRect(),
                fy = (0, Rq.f)(hy.left, hy.right, Uy.top + Wy);
              if (null !== fy && fy < Uy.bottom) return fy - Uy.top;
              return Uy.height - (parseFloat(getComputedStyle(bb).paddingBottom) || 0)
            }(yb, bb, Py) - 8,
            By = window.innerHeight / 2 - Zy.top,
            {
              top: Ky,
              maxHeight: ey
            } = function(yb, bb, Wy, Uy, hy) {
              const fy = Math.min(Wy, Math.max(0, bb - yb)),
                Zy = hy ? yb : Math.max(yb, Math.min(Uy - fy / 2, bb - fy));
              return {
                top: Zy,
                maxHeight: Math.max(0, bb - Zy)
              }
            }(Py, oy, function(yb) {
              const bb = yb.firstElementChild,
                Wy = bb ? bb.scrollHeight - bb.clientHeight : 0;
              return yb.getBoundingClientRect().height + Math.max(0, Wy)
            }(Uy), By, Ef());
          yb.style.top = `${Ky}px`, yb.style.maxHeight = `${ey}px`
        }))
      }), [Wy]), (0, mZ.jsx)("div", {
        ref: fy,
        className: Sh()("Baf2QuestHud", {
          Expanded: bb
        }),
        children: hy
      })
    }

    function is(yb) {
      let {
        amount: bb,
        t: Wy
      } = yb;
      return (0, mZ.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, mZ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, mZ.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: Wy(`${yK}questStepsDone`, {
            amount: String(bb)
          })
        })]
      })
    }

    function Mq(yb) {
      let {
        pulse: bb
      } = yb;
      return 0 === bb ? null : (0, mZ.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, bb)
    }

    function Yq(yb) {
      var bb;
      let {
        store: Wy
      } = yb;
      const hy = (0, zB.m)(vf, Wy.get()),
        [fy, Zy] = (0, Uy.useState)(!1),
        {
          t: cb
        } = (0, Ch.D)(),
        Py = function() {
          const [yb, bb] = (0, Uy.useState)(Ef);
          return (0, Uy.useEffect)((() => (bb(Ef()), lf(bb))), []), yb
        }(),
        {
          openInGameMenuName: oy,
          openEverythingMenuName: By
        } = (0, eh.h)(["openInGameMenuName", "openEverythingMenuName"]),
        Ky = "inventory" === oy && null === By,
        ey = null !== oy && !Ky || null !== By;
      if (! function(yb) {
          return null !== yb.name || null !== yb.side
        }(hy) || ey || "off" === hy.tutorial) return null;
      const qb = Hh(hy.rows),
        sy = qb.filter((yb => yb.done)).length,
        Sy = function(yb, bb) {
          const Wy = ph(yb);
          let Uy = 0;
          return yb.filter(((yb, hy) => !!yb.justFinished || !(yb.done || hy < Wy || Uy > bb) && (Uy++, !0)))
        }(hy.rows, Py ? 0 : 2),
        Ey = Py ? Sy : function(yb, bb) {
          const Wy = bb.filter((yb => !yb.justFinished));
          if (Wy.length < 2) return [...bb];
          const Uy = yb.indexOf(Wy[0]),
            hy = yb.indexOf(Wy[Wy.length - 1]),
            fy = new Set(Hh(yb));
          return yb.filter(((yb, Wy) => bb.includes(yb) || yb.done && fy.has(yb) && Wy > Uy && Wy < hy))
        }(hy.rows, Sy),
        ly = fy ? hy.rows : Ey,
        mb = fy || Py ? [] : function(yb, bb) {
          const Wy = new Array(bb.length + 1).fill(0),
            Uy = new Set(Hh(yb));
          let hy = 0;
          for (const fy of yb) hy < bb.length && fy === bb[hy] ? hy++ : fy.done && Uy.has(fy) && Wy[hy]++;
          return Wy
        }(hy.rows, Ey),
        Cy = fy || Ey.length < hy.rows.length || null !== hy.reward,
        Ty = rf(hy),
        Vy = Ty ? cb(`${yK}questLineComplete`) : hy.tier ? PB(cb, hy.tier) : cb(`${yK}currentQuest`),
        Jy = function(yb) {
          var bb, Wy;
          if (rf(yb)) return null;
          const Uy = null === (bb = yb.chapters) || void 0 === bb ? void 0 : bb.find((bb => {
            let [Wy] = bb;
            return Wy === yb.tier
          }));
          if (!Uy) return null;
          const hy = Uy[1].filter((yb => !yb[4]));
          if (0 === hy.length) return null;
          const fy = null === (Wy = yb.name) || void 0 === Wy ? void 0 : Wy[0],
            Zy = yb => hy.findIndex((bb => bb[0] === fy && (!yb || !bb[3]))),
            cb = Zy(!0),
            Py = cb >= 0 ? cb : Zy(!1);
          if (Py >= 0) return [Py + 1, hy.length];
          const oy = hy.filter((yb => yb[3])).length;
          return [Math.min(oy + 1, hy.length), hy.length]
        }(hy);
      return (0, mZ.jsx)(Jq.f, {
        placement: "topRight",
        children: (0, mZ.jsx)(vs, {
          expanded: fy,
          inventoryOpen: Ky,
          children: (0, mZ.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: bK,
            children: [null !== hy.name && (0, mZ.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, mZ.jsx)(Mq, {
                pulse: hy.pulse
              }), (0, mZ.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, mZ.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Vy, Jy && (0, mZ.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": cb(`${yK}questPlaceLabel`, {
                      n: String(Jy[0]),
                      total: String(Jy[1])
                    }),
                    children: cb(`${yK}questPlace`, {
                      n: String(Jy[0]),
                      total: String(Jy[1])
                    })
                  }), hy.tier && hy.core && !Ty && (0, mZ.jsx)(oB, {
                    core: hy.core,
                    t: cb
                  })]
                })
              }), (0, mZ.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: cb(`${yK}${hy.name[0]}`, UB(hy.name[1]))
              }), (qb.length > 1 || Cy) && (0, mZ.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [qb.length > 1 && (0, mZ.jsx)(BB, {
                  rows: qb,
                  t: cb
                }), Cy && (0, mZ.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": fy,
                  onClick: () => {
                    Zy(!fy)
                  },
                  children: [(0, mZ.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: cb(`${yK}questStepsToggle`, {
                      done: String(sy),
                      total: String(qb.length)
                    })
                  }), (0, mZ.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: fy ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, mZ.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [ly.map(((yb, bb) => {
                  var fy;
                  const Zy = yb.current && hy.depth;
                  return (0, mZ.jsxs)(Uy.Fragment, {
                    children: [(null !== (fy = mb[bb]) && void 0 !== fy ? fy : 0) > 0 && (0, mZ.jsx)(is, {
                      amount: mb[bb],
                      t: cb
                    }), (0, mZ.jsx)(KB, {
                      row: yb,
                      view: hy,
                      t: cb,
                      extra: Zy && (0, mZ.jsx)(Gq, {
                        depth: Zy,
                        store: Wy,
                        t: cb
                      })
                    })]
                  }, yb.id)
                })), (null !== (bb = mb[ly.length]) && void 0 !== bb ? bb : 0) > 0 && (0, mZ.jsx)(is, {
                  amount: mb[ly.length],
                  t: cb
                }), hy.also.length > 0 && (0, mZ.jsx)(Oq, {
                  also: hy.also,
                  view: hy,
                  t: cb
                })]
              }), fy && hy.reward && (0, mZ.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [cb(`${yK}questReward`), (0, mZ.jsx)(fB, {
                  item: hy.reward
                }), WB(cb, hy.itemNames[hy.reward], hy.reward)]
              })]
            }), hy.side && (0, mZ.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [nh(hy, Date.now()) && (0, mZ.jsx)(Mq, {
                pulse: hy.sideCameUpAt
              }), (0, mZ.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: cb(`${yK}questSide`)
              }), (0, mZ.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: cb(`${yK}${hy.side.name[0]}`, UB(hy.side.name[1]))
              }), (0, mZ.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, mZ.jsx)(KB, {
                  row: hy.side.row,
                  view: hy,
                  t: cb
                })
              })]
            })]
          })
        })
      })
    }
    const Xq = "baf2ToastView";
    class nq {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = yb, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: yb,
          holdMs: bb
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const yb = this.dropCovered();
          yb && this.show(yb.message, yb.holdMs)
        }), 250));
        const Wy = this.dropCovered();
        null !== Wy && (Wy.holdMs > 0 || "baf2ToastCelebrate" === Wy.message.baf2ToastStyle) && "baf2ToastCelebrate" !== yb.baf2ToastStyle && this.show(Wy.message, Wy.holdMs);
        const Uy = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== yb.baf2ToastStyle && Uy > 0) return this.pending = {
          message: yb,
          holdMs: bb
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const yb = this.pending;
          this.pending = null, yb && this.present(yb.message, yb.holdMs)
        }), Uy));
        this.present(yb, bb)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(yb, bb) {
        this.clearTimers(), this.pending = null;
        const Wy = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: yb.baf2ToastText,
          style: yb.baf2ToastStyle,
          swapped: Wy,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === yb.baf2ToastStyle ? 1500 : bb), this.EZ();
        const Uy = Math.min(8e3, Math.max(1e3, yb.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.qh()
        }), Uy)
      }
      qh() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.EZ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.EZ()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const yb = this.covering;
        return this.covering = null, yb
      }
      EZ() {
        Oh.g.EZ(Xq, this.view, !0)
      }
    }
    var uq = Wy(70);
    const rs = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Hq(yb) {
      let {
        store: bb
      } = yb;
      const Wy = (0, zB.m)(Xq, bb.get()),
        {
          openInGameMenuName: Uy,
          openEverythingMenuName: hy
        } = (0, eh.h)(["openInGameMenuName", "openEverythingMenuName"]),
        fy = Wy && (0, mZ.jsxs)("div", {
          className: Sh()("Baf2Toast", rs[Wy.style], {
            Swapped: Wy.swapped,
            Leaving: Wy.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === Wy.style && (0, mZ.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, mZ.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, mZ.jsx)(Jh.d, {
              text: Wy.text
            })
          })]
        }, Wy.id);
      return null !== Uy && null === hy ? (0, uq.createPortal)((0, mZ.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: fy
      }), document.body) : (0, mZ.jsx)(Jq.f, {
        children: fy
      })
    }
    const as = "baf2AreaView";
    class Fq {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.kW = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.kW = null
      }
      arrive(yb, bb) {
        bb && function(yb) {
          return "home" === yb.baf2AreaPlace && void 0 !== yb.baf2AreaNameText
        }(yb) ? this.kW = yb : this.show(yb)
      }
      release() {
        const yb = this.kW;
        null !== yb && this.show(yb)
      }
      show(yb) {
        this.clearTimer(), this.kW = null;
        const bb = void 0 === yb.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: yb,
          ms: bb
        }, this.EZ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.EZ()
        }), bb)
      }
      dispose() {
        this.clearTimer(), this.kW = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      EZ() {
        Oh.g.EZ(as, this.view, !0)
      }
    }

    function pq(yb) {
      var bb;
      let {
        store: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ch.D)(), hy = (0, zB.m)(as, Wy.get());
      if (!hy) return null;
      const {
        area: fy
      } = hy, Zy = fy.baf2AreaResetMinutes;
      return (0, mZ.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": fy.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${hy.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, mZ.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), fy.baf2AreaHeading && (0, mZ.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Uy(fy.baf2AreaHeading)
        }), (0, mZ.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (bb = fy.baf2AreaNameText) && void 0 !== bb ? bb : Uy(fy.baf2AreaName)
        }), fy.baf2AreaNote && (0, mZ.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Uy(fy.baf2AreaNote)
        }), void 0 !== Zy && (0, mZ.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Uy("buildAFactory2Game:areaWildsReset", {
            time: sf(Uy, 60 * Zy)
          })
        })]
      }, hy.id)
    }
    const Lq = "baf2GearGauge";
    class Qq {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      Gl(yb) {
        var bb;
        if (this.clearLinger(), null === yb.gearPowerKind) return void this.set(null);
        const Wy = "jetpack" === yb.gearPowerKind && (Uy = yb.gearChargeState, hy = yb.gearCharge, "flying" === Uy || "charging" === Uy || "outOfCharge" === Uy || "ceiling" === Uy || "offPlot" === Uy || "noPower" === Uy && hy <= 0);
        var Uy, hy;
        const fy = !0 === (null === (bb = this.view) || void 0 === bb ? void 0 : bb.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Zy = Wy || "jetpack" === yb.gearPowerKind && fy;
        this.set({
          gauge: yb,
          jetShown: Zy
        }), Zy && !Wy && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(yb) {
        this.view = yb, Oh.g.EZ(Lq, yb, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const jsy = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function Dq(yb) {
      let {
        store: bb
      } = yb;
      const Wy = (0, zB.m)(Lq, bb.get());
      return Wy ? "jetpack" === Wy.gauge.gearPowerKind ? (0, mZ.jsx)(ts, {
        view: Wy
      }) : (0, mZ.jsx)(wq, {
        gauge: Wy.gauge
      }) : null
    }

    function ts(yb) {
      let {
        view: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)(), {
        gauge: Uy
      } = bb, hy = Uy.gearChargeMax > 0 ? Math.max(0, Math.min(1, Uy.gearCharge / Uy.gearChargeMax)) : 0, fy = jsy[Uy.gearChargeState], Zy = fy ? Wy(fy) : null;
      return (0, mZ.jsxs)("div", {
        className: Sh()("Baf2JetArc", {
          Shown: bb.jetShown,
          Low: hy < .2,
          Warm: hy >= .2 && hy < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - hy)
        },
        "aria-hidden": !bb.jetShown,
        children: [(0, mZ.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, mZ.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: ks,
            pathLength: 100
          }), (0, mZ.jsx)("path", {
            className: "Baf2JetArcFill",
            d: ks,
            pathLength: 100
          })]
        }), (0, mZ.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * hy), "%"]
        }), Zy && (0, mZ.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Zy
        })]
      })
    }

    function wq(yb) {
      let {
        gauge: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)(), Uy = function(yb, bb) {
        switch (bb.gearPowerKind) {
          case "skyPack":
            return yb("buildAFactory2Game:gearSkyPack", {
              charge: bb.gearCharge,
              max: bb.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return yb("buildAFactory2Game:gearIslandDraw", {
              power: xb(bb.gearIslandPower),
              cost: xb(bb.gearCostPerUse)
            });
          case "barrier":
            return yb("buildAFactory2Game:gearBarrier", {
              shield: Math.round(bb.gearCharge),
              max: bb.gearChargeMax,
              power: xb(bb.gearIslandPower)
            });
          default:
            return null
        }
      }(Wy, bb);
      return null === Uy ? null : (0, mZ.jsx)(Jq.f, {
        children: (0, mZ.jsx)("div", {
          className: Sh()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === bb.gearChargeState || "outOfCharge" === bb.gearChargeState
          }),
          role: "status",
          children: Uy
        })
      })
    }
    const ks = (() => {
      const yb = yb => {
        const bb = yb * Math.PI / 180;
        return `${(40*Math.cos(bb)).toFixed(2)} ${(40*Math.sin(bb)).toFixed(2)}`
      };
      return `M ${yb(160)} A 40 40 0 1 1 ${yb(380)}`
    })();
    class Nq {
      constructor(yb) {
        this.onElement = yb, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      Gl(yb) {
        let bb = yb.baf2LabelsReset || yb.baf2LabelsIsland !== this.island;
        bb && (this.labels.clear(), this.island = yb.baf2LabelsIsland);
        for (const [Wy, Uy, hy, fy, Zy] of yb.baf2LabelsList) {
          const yb = `${Wy},${Uy},${hy}`,
            cb = this.labels.get(yb);
          null === fy ? bb = this.labels.delete(yb) || bb : cb && cb.item === fy && (cb.count === Zy || cb.count >= 0 && Zy >= 0) ? cb.count !== Zy && (cb.count = Zy, this.writeCount(yb, Zy)) : (this.labels.set(yb, {
            key: yb,
            pos: [Wy, Uy, hy],
            item: fy,
            count: Zy
          }), this.writeCount(yb, Zy), bb = !0)
        }
        if (this.changes++, bb) {
          this.snapshot = [...this.labels.values()];
          for (const yb of this.listeners) yb()
        }
      }
      bindCount(yb) {
        const bb = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${yb}`;
        let Wy = this.countRefs.get(bb);
        return Wy || (Wy = Wy => {
          var Uy, hy;
          Wy ? (this.countElements.set(bb, Wy), this.writeCount(yb, null !== (Uy = null === (hy = this.labels.get(yb)) || void 0 === hy ? void 0 : hy.count) && void 0 !== Uy ? Uy : -1)) : (this.countElements.delete(bb), this.countRefs.delete(bb))
        }, this.countRefs.set(bb, Wy)), Wy
      }
      setCountWords(yb) {
        this.countWords = yb;
        for (const [bb, Wy] of this.labels) this.writePart(`words|${bb}`, yb(Wy.count), Wy.count)
      }
      writeCount(yb, bb) {
        this.writePart(`bare|${yb}`, ef(bb), bb), this.countElements.has(`words|${yb}`) && this.writePart(`words|${yb}`, this.countWords(bb), bb)
      }
      writePart(yb, bb, Wy) {
        const Uy = this.countElements.get(yb);
        if (!Uy || Wy < 0) return;
        const hy = Uy.firstChild;
        hy && 3 === hy.nodeType && !hy.nextSibling ? hy.nodeValue !== bb && (hy.nodeValue = bb) : Uy.textContent !== bb && (Uy.textContent = bb)
      }
      list() {
        return this.snapshot
      }
      at(yb) {
        return this.labels.get(`${yb[0]},${yb[1]},${yb[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      bind(yb) {
        let bb = this.refs.get(yb);
        return bb || (bb = bb => {
          const Wy = this.elements.get(yb);
          var Uy, hy;
          Wy && (null === (Uy = this.onElement) || void 0 === Uy || Uy.call(this, Wy, !1));
          bb ? (this.elements.set(yb, bb), null === (hy = this.onElement) || void 0 === hy || hy.call(this, bb, !0)) : (this.elements.delete(yb), this.refs.delete(yb))
        }, this.refs.set(yb, bb)), bb
      }
      onAfterRender(yb, bb, Wy, Uy) {
        for (const hy of this.snapshot) {
          const fy = this.elements.get(hy.key);
          if (!fy) continue;
          if (Uy(hy.key)) {
            (0, kq.f)(fy, !0);
            continue
          }
          const Zy = bs(fy, yb, bb, hy.pos, 1.1, 24);
          Zy && Wy.add(Zy, fy, 0, !1)
        }
      }
    }
    const zs = (0, Uy.memo)((function(yb) {
        let {
          item: bb
        } = yb;
        return (0, mZ.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, mZ.jsx)(Vh.d, {
            itemName: bb,
            amount: 0
          })
        })
      })),
      Iq = (0, Uy.memo)((function(yb) {
        let {
          label: bb,
          bindRef: Wy,
          countRef: Uy,
          wordsRef: hy
        } = yb;
        return (0, mZ.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: Wy,
          hidden: !0,
          children: [(0, mZ.jsx)(zs, {
            item: bb.item
          }), bb.count >= 0 && (0, mZ.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, mZ.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: hy
            }), (0, mZ.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Uy
            })]
          })]
        })
      })),
      xs = (0, Uy.memo)((function(yb) {
        let {
          store: bb
        } = yb;
        const {
          t: Wy
        } = (0, Ch.D)(), [hy, fy] = (0, Uy.useState)((() => bb.list()));
        return (0, Uy.useEffect)((() => (fy(bb.list()), bb.subscribe((() => {
          fy(bb.list())
        })))), [bb]), (0, Uy.useEffect)((() => {
          bb.setCountWords((yb => Wy("buildAFactory2Game:labelSiloCount", {
            count: ef(yb)
          })))
        }), [bb, Wy]), (0, mZ.jsx)("div", {
          className: "Baf2IslandLabels",
          children: hy.map((yb => -2 === yb.count ? null : (0, mZ.jsx)(Iq, {
            label: yb,
            bindRef: bb.bind(yb.key),
            countRef: bb.bindCount(yb.key),
            wordsRef: bb.bindCount(yb.key, "words")
          }, yb.key)))
        })
      })),
      Aq = {
        read: () => !0,
        write: () => {}
      };

    function dq(yb) {
      return `${yb[0]},${yb[1]},${yb[2]}`
    }

    function yS(yb) {
      let [bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey] = yb;
      const qb = void 0 === Ky || void 0 === ey ? function(yb) {
        return [Math.floor((yb - 1) / 2), 0]
      }(fy) : [Ky, ey];
      return {
        kind: 0 === Py ? "reactor" : "battery",
        box: rU([bb, Wy, Uy], hy, fy, Zy, cb, qb),
        formed: 1 === oy,
        level: By
      }
    }
    class bS {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Aq;
        this.guideSetting = yb, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = yb.read()
      }
      Gl(yb) {
        var bb;
        const Wy = new Map;
        for (const Uy of yb.baf2RxPlanList) {
          const yb = yS(Uy);
          Wy.set(dq(yb.box.ctrl), yb)
        }
        this.plans = Wy, this.layouts = new Map((null !== (bb = yb.baf2RxLayouts) && void 0 !== bb ? bb : []).map((yb => {
          let [bb, Wy, Uy, hy] = yb;
          return [dq([bb, Wy, Uy]), hy]
        }))), this.predicted.clear(), yb.baf2RxFormedAt && (this.formed = {
          ctrl: yb.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Uy of [...this.startersOff]) {
          const yb = Wy.get(Uy);
          yb && !yb.formed || this.startersOff.delete(Uy)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((yb => this.planByKey(yb)))
      }
      planAt(yb) {
        return this.planByKey(dq(yb))
      }
      predictSize(yb, bb) {
        this.predicted.set(dq(yb), bb), this.changed()
      }
      unpredict(yb) {
        this.predicted.delete(dq(yb)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(yb) {
        var bb;
        const Wy = dq(yb);
        return this.predicted.has(Wy) ? null : null !== (bb = this.layouts.get(Wy)) && void 0 !== bb ? bb : null
      }
      showsStarter(yb) {
        return !this.startersOff.has(dq(yb))
      }
      setStarter(yb, bb) {
        const Wy = dq(yb);
        bb ? this.startersOff.delete(Wy) : this.startersOff.add(Wy), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(yb) {
        this.guide = yb, this.guideSetting.write(yb), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(yb) {
        const bb = this.plans.get(yb);
        if (!bb) return null;
        const Wy = this.predicted.get(yb);
        return Wy ? {
          ...bb,
          box: aU(bb.box, bb.kind, Wy[0], Wy[1], Wy[2])
        } : bb
      }
      changed() {
        this.version++;
        for (const yb of this.listeners) yb()
      }
    }
    var Ws = Wy(167);
    const Us = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function hs(yb, bb, Wy, Uy) {
      const hy = yb.length / 3;
      for (let fy = 0; fy < Us.length / 3; fy++) yb.push(Us[3 * fy] * Uy[0] / 2 + Wy[0], Us[3 * fy + 1] * Uy[1] / 2 + Wy[1], Us[3 * fy + 2] * Uy[2] / 2 + Wy[2]);
      for (let fy = hy; fy < hy + 24; fy += 4) bb.push(fy, fy + 1, fy + 2, fy, fy + 2, fy + 3)
    }

    function fs(yb, bb, Wy) {
      const Uy = bb[0][0],
        hy = [],
        fy = [];
      for (const [Zy, cb] of bb) hs(hy, fy, [Zy[0] - Uy[0], Zy[1] - Uy[1], Zy[2] - Uy[2]], cb);
      return yb.createGameMesh({
        positions: hy,
        indices: fy
      }, Wy, Uy)
    }

    function Zs(yb, bb) {
      const Wy = yb.w - 2,
        Uy = yb.d - 2;
      return 1 === function(yb, bb, Wy, Uy) {
        const [hy, fy, Zy] = yb;
        if (Number(hy <= 2) + Number(fy <= 2) + Number(Zy <= 2) >= 2) return function(yb, bb, Wy) {
          return (yb + bb + Wy) % 2 === 0 ? 1 : 3
        }(bb, Wy, Uy);
        const [cb, Py] = hy >= fy && hy >= Zy ? [Wy, Uy] : fy >= Zy ? [bb, Uy] : [bb, Wy];
        return cb % 2 === 0 && Py % 2 === 0 ? 1 : 3
      }([Wy, yb.h - 2, Uy], bb % Wy, Math.floor(bb / (Wy * Uy)), Math.floor(bb / Wy) % Uy) ? "rod" : "channel"
    }

    function cS(yb, bb, Wy) {
      if ("reactor" !== yb.kind || yb.formed || !bb) return !1;
      const Uy = LW(yb.box);
      for (let hy = 0; hy < Uy; hy++) {
        const yb = Wy(hy);
        if (null !== yb && JW(yb)) return !1
      }
      return !0
    }

    function Ps(yb, bb, Wy, Uy, hy) {
      var fy;
      let Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const cb = kU(yb.box, bb),
        Py = xU(yb.kind, cb, Wy);
      if ("wrong" === Py || "blocked" === Py) return "wrong";
      if (!hy) return null;
      if ("inside" === cb && "reactor" === yb.kind && "Air" === gU(Wy)) {
        if (null !== Zy) {
          var oy;
          const Wy = QK[je(Zy, NW(yb.box, bb))];
          return Wy && null !== (oy = mo(Wy)) && void 0 !== oy ? oy : null
        }
        if (Uy) return Zs(yb.box, NW(yb.box, bb))
      }
      if ("missing" !== Py) return null;
      const By = AW(yb.kind, cb);
      return null === By ? null : null !== (fy = mo(By)) && void 0 !== fy ? fy : null
    }
    const os = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Bs(yb, bb, Wy) {
      const Uy = Wy => {
        const Uy = bb(tU(yb.box, Wy));
        return null !== Uy && function(yb, bb) {
          return "reactor" !== yb.kind || bb !== jU(yb.box) && "inside" !== kU(yb.box, bb)
        }(yb, Wy) && "ok" !== xU(yb.kind, kU(yb.box, Wy), Uy)
      };
      if (Wy) {
        const fy = wW(yb.box, [Math.floor(Wy[0]), Math.floor(Wy[1]), Math.floor(Wy[2])]);
        if (fy >= 0 && (Uy(fy) || (hy = fy, "reactor" === yb.kind && "inside" === kU(yb.box, hy) && "Air" === bb(tU(yb.box, hy))))) return fy
      }
      var hy;
      const fy = LW(yb.box);
      for (let Zy = 0; Zy < fy; Zy++)
        if (Uy(Zy)) return Zy;
      return -1
    }

    function Ks(yb, bb) {
      return Math.floor(bb / (yb.w * yb.d))
    }

    function es(yb, bb, Wy) {
      return Wy >= 0 && Ks(yb, bb) > Ks(yb, Wy)
    }

    function qS(yb, bb) {
      return bb >= 0 && yb.h >= 3 && Ks(yb, bb) === yb.h - 1
    }

    function ss(yb) {
      const bb = gU(yb);
      return bb === KW || "Collider" === bb || "Laser" === bb || bb.startsWith("_Collider ")
    }

    function Ss(yb, bb, Wy, Uy) {
      if (Uy(yb)) return null;
      if (!os.every((bb => {
          let [Uy, hy, fy] = bb;
          const Zy = Wy([yb[0] + Uy, yb[1] + hy, yb[2] + fy]);
          return null !== Zy && !YW("reactor", Zy) && "reactor" !== GW(Zy)
        }))) return null;
      const hy = XW("reactor").min,
        fy = rU([yb[0], yb[1], yb[2]], function(yb, bb) {
          const Wy = bb[0] - (yb[0] + .5),
            Uy = bb[2] - (yb[2] + .5);
          return Math.abs(Wy) >= Math.abs(Uy) ? Wy >= 0 ? 2 : 4 : Uy >= 0 ? 1 : 3
        }(yb, bb), hy, hy, hy, HW("reactor", hy)),
        Zy = jU(fy);
      let cb = !0;
      for (let Py = 0; Py < LW(fy) && cb; Py++) {
        if (Py === Zy) continue;
        const yb = tU(fy, Py),
          bb = Wy(yb);
        cb = !Uy(yb) && (null === bb || !ss(bb))
      }
      return {
        box: fy,
        fits: cb
      }
    }
    const Es = lP,
      ls = "baf2Goal",
      mS = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Cs = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Ts = .4;

    function Vs(yb, bb) {
      let [Wy, Uy, hy] = yb;
      const fy = OP([Wy - .02, Uy - .02, hy - .02], [Wy + 1.02, Uy + 1.02, hy + 1.02], .07);
      return bb && (fy.push([
        [Wy + .5, Uy + 1 + .7, hy + .5],
        [.08, 1.4, .08]
      ]), fy.push([
        [Wy + .5, Uy + 1 + 1.4 + .2, hy + .5],
        [Ts, Ts, Ts]
      ])), fy
    }

    function Jsy(yb, bb) {
      let [Wy, Uy, hy] = bb;
      return yb.isBlockInLoadedChunk(Wy, Uy, hy) ? yb.blockIdToBlockName(yb.getBlockId(Wy, Uy, hy)) : null
    }
    let gS = null;
    const Gs = new Set;
    let Os = null;

    function Rs(yb) {
      gS = yb;
      for (const bb of Gs) bb(yb)
    }
    class vS {
      constructor(yb) {
        var bb;
        this.plans = yb, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (bb = yb => {
          var bb, Wy;
          this.setGoal(null !== (bb = null === yb || void 0 === yb ? void 0 : yb.goal) && void 0 !== bb ? bb : null, null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.startsBattery) && void 0 !== Wy && Wy)
        }, Os ??= [Oh.g.subscribe("setDirectionArrow", (yb => {
          let {
            id: bb,
            position: Wy,
            text: Uy
          } = yb;
          bb === ls && Rs({
            goal: [Math.floor(Wy[0]), Math.floor(Wy[1]), Math.floor(Wy[2])],
            startsBattery: JSON.stringify(null !== Uy && void 0 !== Uy ? Uy : null).includes("arrowStartBattery")
          })
        })), Oh.g.subscribe("clearDirectionArrow", (yb => {
          let {
            id: bb
          } = yb;
          null !== bb && bb !== ls || Rs(null)
        }))], Gs.add(bb), bb(gS), () => {
          Gs.delete(bb)
        })
      }
      onAfterRender(yb, bb) {
        const Wy = performance.now();
        if (this.cues.length > 0) {
          const bb = .55 + .45 * Math.sin(Wy / 1100 * Math.PI * 2);
          for (const Wy of this.cues) yb.setGameMesh(Wy, {
            visibility: bb
          })
        }
        if (Wy - this.lastCheckMs < 150) return;
        this.lastCheckMs = Wy;
        const Uy = this.plans.all().filter((yb => {
            const [Wy, Uy, hy] = yb.box.ctrl;
            return (!yb.formed || null !== this.plans.layoutOf(yb.box.ctrl)) && (Wy - bb[0]) ** 2 + (Uy - bb[1]) ** 2 + (hy - bb[2]) ** 2 <= 2304
          })),
          hy = function(yb, bb) {
            const Wy = Ws.c.DU,
              Uy = new Map;
            for (const fy of bb) {
              const bb = tU(fy.box, 0),
                Zy = tU(fy.box, LW(fy.box) - 1),
                cb = [Math.min(bb[0], Zy[0]), Math.min(bb[1], Zy[1]), Math.min(bb[2], Zy[2])].map((yb => Math.floor(yb / Wy))),
                Py = [Math.max(bb[0], Zy[0]), Math.max(bb[1], Zy[1]), Math.max(bb[2], Zy[2])].map((yb => Math.floor(yb / Wy)));
              for (let Wy = cb[0]; Wy <= Py[0]; Wy++)
                for (let bb = cb[1]; bb <= Py[1]; bb++)
                  for (let fy = cb[2]; fy <= Py[2]; fy++) {
                    var hy;
                    Uy.set(`${Wy},${bb},${fy}`, null !== (hy = yb.getChunkVersion(Wy, bb, fy)) && void 0 !== hy ? hy : -1)
                  }
            }
            return Uy
          }(yb, Uy);
        this.plans.getVersion() === this.storeVersion && (function(yb, bb) {
          if (yb.size !== bb.size) return !1;
          for (const [Wy, Uy] of yb)
            if (bb.get(Wy) !== Uy) return !1;
          return !0
        }(hy, this.chunkVersions) || Wy - this.lastRescanMs < 600) || (this.lastRescanMs = Wy, this.storeVersion = this.plans.getVersion(), this.chunkVersions = hy, this.redraw(yb, Uy))
      }
      dispose(yb) {
        this.unwatch(), gS = null, this.clearMeshes(yb), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(yb, bb) {
        var Wy;
        (null === yb || void 0 === yb ? void 0 : yb.join()) === (null === (Wy = this.goal) || void 0 === Wy ? void 0 : Wy.join()) && bb === this.startsBattery || (this.goal = yb, this.startsBattery = bb, this.storeVersion = -1)
      }
      redraw(yb, bb) {
        const Wy = bb => Jsy(yb, bb),
          Uy = new Map,
          hy = [],
          fy = this.plans.guideOn();
        for (const oy of bb) {
          const yb = fy && cS(oy, this.plans.showsStarter(oy.box.ctrl), (yb => Wy(tU(oy.box, yb)))),
            bb = "reactor" === oy.kind ? this.plans.layoutOf(oy.box.ctrl) : null,
            Zy = fy && !oy.formed ? Bs(oy, Wy, this.goal) : -1;
          Zy >= 0 && hy.push([tU(oy.box, Zy), qS(oy.box, Zy)]);
          const cb = LW(oy.box);
          for (let hy = 0; hy < cb; hy++) {
            const cb = tU(oy.box, hy),
              Py = Wy(cb),
              By = null === Py ? null : Ps(oy, hy, Py, yb, fy, bb);
            if (null !== By) {
              const yb = "wrong" !== By && es(oy.box, hy, Zy),
                bb = yb ? `${By}Dim` : By;
              let Wy = Uy.get(bb);
              Wy || (Wy = {
                draw: {
                  ghost: By,
                  dim: yb
                },
                list: []
              }, Uy.set(bb, Wy)), Wy.list.push(cb)
            }
          }
        }
        if (fy && this.startsBattery && this.goal) {
          const [yb, bb, hy] = this.goal, fy = [];
          for (const [Uy, Zy, cb] of mS) {
            const Py = [yb + Uy, bb + Zy, hy + cb];
            "Air" === Wy(Py) && fy.push(Py)
          }
          if (fy.length > 0) {
            var Zy;
            const yb = null !== (Zy = Uy.get("cell")) && void 0 !== Zy ? Zy : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            yb.list.push(...fy), Uy.set("cell", yb)
          }
        }
        const cb = [...Uy.keys()].sort(),
          Py = [...cb.map((yb => `${yb}:${Uy.get(yb).list.join(";")}`)), `cue:${hy.join(";")}`].join("|");
        if (Py !== this.shownKey) {
          this.shownKey = Py, this.clearMeshes(yb);
          for (const bb of cb) {
            const {
              draw: Wy,
              list: hy
            } = Uy.get(bb);
            this.meshes.push(this.build(yb, Wy, hy))
          }
          for (const [bb, Wy] of hy) this.cues.push(fs(yb, Vs(bb, Wy), Cs))
        }
      }
      build(yb, bb, Wy) {
        let {
          ghost: Uy,
          dim: hy
        } = bb;
        const {
          size: fy,
          colour: Zy,
          alpha: cb
        } = Es[Uy], Py = Wy[0], oy = [], By = [];
        for (const [Ky, ey, qb] of Wy) hs(oy, By, [Ky - Py[0] + .5, ey - Py[1] + .5, qb - Py[2] + .5], [fy, fy, fy]);
        return yb.createGameMesh({
          positions: oy,
          indices: By
        }, {
          rgb: Zy,
          alpha: cb * (hy ? .3 : 1)
        }, Py)
      }
      clearMeshes(yb) {
        for (const bb of [...this.meshes, ...this.cues]) yb.disposeGameMesh(bb);
        this.meshes = [], this.cues = []
      }
    }
    const iS = [.56, .83, 1],
      Ms = [1, .3, .25];
    class Ys {
      constructor(yb) {
        this.plans = yb, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(yb, bb, Wy) {
        var Uy;
        const hy = performance.now();
        if (hy - this.lastCheckMs < 150) return;
        this.lastCheckMs = hy;
        const fy = bb => Jsy(yb, bb),
          Zy = null === (Uy = yb.MPy(bb)) || void 0 === Uy ? void 0 : Uy.name,
          cb = Zy && "Reactor Frame" === gU(Zy) ? yb.getTargetedBlock() : null,
          Py = cb ? [cb.bc[0], cb.bc[1], cb.bc[2]] : null,
          oy = null !== Py && "Air" === fy(Py) && Py.every(((yb, bb) => Math.abs(yb + .5 - Wy[bb]) <= 8)) ? Ss(Py, Wy, fy, (yb => this.inPlan(yb))) : null,
          By = oy ? `${oy.box.ctrl.join()}|${oy.box.rot}|${oy.fits}` : "";
        By !== this.shownKey && this.show(yb, By, oy)
      }
      dispose(yb) {
        this.clear(yb), this.shownKey = ""
      }
      inPlan(yb) {
        return this.plans.all().some((bb => wW(bb.box, yb) >= 0))
      }
      show(yb, bb, Wy) {
        if (this.clear(yb), this.shownKey = bb, !Wy) return;
        const {
          box: Uy,
          fits: hy
        } = Wy, fy = hy ? iS : Ms, {
          lo: Zy,
          hi: cb
        } = GP(Uy);
        this.meshes.push(fs(yb, OP(Zy, cb, .05), {
          rgb: fy,
          alpha: 1
        }));
        const Py = [],
          oy = tU(Uy, 0)[1];
        for (let By = 0; By < Uy.w * Uy.d; By++) {
          const [yb, , bb] = tU(Uy, By);
          Py.push([
            [yb + .5, oy + .02 + .01, bb + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(fs(yb, Py, {
          rgb: fy,
          alpha: .25
        }))
      }
      clear(yb) {
        for (const bb of this.meshes) yb.disposeGameMesh(bb);
        this.meshes = []
      }
    }
    const Xs = "buildAFactory2Game:";

    function ns(yb, bb, Wy) {
      const Uy = yb => {
          const [Wy, Uy, hy] = yb.box.ctrl;
          return Wy === bb[0] && Uy === bb[1] && hy === bb[2]
        },
        hy = yb.find((yb => Uy(yb) || wW(yb.box, bb) >= 0));
      if (!hy) return null;
      const fy = function(yb, bb, Wy) {
        const {
          w: Uy,
          h: hy,
          d: fy
        } = yb.box, Zy = "reactor" === yb.kind ? `${Xs}rxTitle` : `${Xs}batTitle`;
        if (yb.formed) return {
          key: `${Xs}lookPlanFormed`,
          kindKey: Zy,
          w: Uy,
          h: hy,
          d: fy,
          count: 0
        };
        let cb = 0,
          Py = 0;
        for (let By = 0; By < LW(yb.box); By++) {
          const bb = Wy(tU(yb.box, By)),
            Uy = null === bb ? "ok" : xU(yb.kind, kU(yb.box, By), bb);
          cb += "missing" === Uy ? 1 : 0, Py += "wrong" === Uy || "blocked" === Uy ? 1 : 0
        }
        const oy = function(yb, bb, Wy) {
          if (bb < 0 || null === Wy) return;
          const Uy = kU(yb.box, bb),
            hy = xU(yb.kind, Uy, Wy);
          return "blocked" === hy ? `${Xs}lookWhy_blocked` : "wrong" === hy ? "ctrl" === Uy ? `${Xs}lookWhy_ctrl` : `${Xs}lookWhy_reactor_${Uy}` : void 0
        }(yb, wW(yb.box, bb), Wy([bb[0], bb[1], bb[2]]));
        if (cb > 0) return {
          key: `${Xs}lookPlanToBuild`,
          kindKey: Zy,
          w: Uy,
          h: hy,
          d: fy,
          count: cb,
          why: oy
        };
        if (Py > 0) return {
          key: `${Xs}lookPlanTakeOut`,
          kindKey: Zy,
          w: Uy,
          h: hy,
          d: fy,
          count: Py,
          why: oy
        };
        return {
          key: "reactor" === yb.kind ? `${Xs}lookPlanNoRods` : `${Xs}lookPlanDone`,
          kindKey: Zy,
          w: Uy,
          h: hy,
          d: fy,
          count: 0
        }
      }(hy, bb, Wy);
      return "reactor" === hy.kind && Uy(hy) ? {
        ...fy,
        ctrl: !0
      } : fy
    }

    function us(yb, bb) {
      return yb === bb || null !== yb && null !== bb && yb.key === bb.key && yb.kindKey === bb.kindKey && yb.w === bb.w && yb.h === bb.h && yb.d === bb.d && yb.count === bb.count && yb.why === bb.why && yb.ctrl === bb.ctrl
    }

    function rS() {
      return performance.now()
    }
    class Hs {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rS;
        this.ticket = yb, this.sent = bb, this.backstopMs = Wy, this.now = Uy, this.queuedAt = void 0, this.queuedAt = Uy()
      }
      answered() {
        const yb = this.now(),
          bb = this.sent.leftAt(this.ticket);
        return null !== bb && yb - bb > 4e3 || yb - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class aS {
      constructor() {
        this.echoes = []
      }
      add(yb) {
        this.echoes = this.echoes.filter((yb => !yb.answered())), this.echoes.push(yb)
      }
      answered() {
        var yb, bb;
        return null === (yb = null === (bb = this.echoes.at(-1)) || void 0 === bb ? void 0 : bb.answered()) || void 0 === yb || yb
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((yb => yb.answered()))
      }
      age() {
        var yb, bb;
        return null !== (yb = null === (bb = this.echoes.at(-1)) || void 0 === bb ? void 0 : bb.age()) && void 0 !== yb ? yb : null
      }
      clear() {
        this.echoes = []
      }
    }
    class Fs {
      constructor(yb) {
        this.send = yb, this.value = null, this.sent = null, this.echoes = new aS, this.down = !1, this.timer = null
      }
      shown(yb) {
        return null === this.value ? yb : this.down || this.value !== this.sent ? this.value : yb === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), yb) : this.value
      }
      pendingFor(yb) {
        return null !== this.value && this.value === this.sent && yb !== this.value ? this.echoes.age() : null
      }
      assume(yb, bb) {
        this.disarm(), this.down = !1, this.value = yb, this.sent = yb, this.echoes.clear(), this.echoes.add(bb)
      }
      press() {
        this.down = !0
      }
      drag(yb) {
        this.value = yb, this.arm(this.down ? 1e3 : 400)
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
      arm(yb) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), yb)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class ps {
      constructor() {
        this.pending = new Map
      }
      set(yb, bb, Wy) {
        var Uy;
        const hy = null !== (Uy = this.pending.get(yb)) && void 0 !== Uy ? Uy : {
          on: bb,
          echoes: new aS
        };
        hy.on = bb, hy.echoes.add(Wy), this.pending.set(yb, hy)
      }
      shown(yb) {
        let bb = yb;
        for (const [Wy, {
            on: Uy,
            echoes: hy
          }] of this.pending) 0 !== (yb & Wy) === Uy && hy.agreeCounts() || hy.answered() ? this.pending.delete(Wy) : bb = Uy ? bb | Wy : bb & ~Wy;
        return bb
      }
      pendingMask() {
        let yb = 0;
        for (const bb of this.pending.keys()) yb |= bb;
        return yb
      }
      pendingFor(yb) {
        let bb = null;
        for (const [Uy, {
            on: hy,
            echoes: fy
          }] of this.pending) {
          if (void 0 !== yb && 0 !== (yb & Uy) === hy) continue;
          const Zy = fy.age();
          var Wy;
          if (null !== Zy) bb = Math.max(null !== (Wy = bb) && void 0 !== Wy ? Wy : 0, Zy)
        }
        return bb
      }
      clear() {
        this.pending.clear()
      }
    }
    class Ls {
      constructor() {
        this.dims = null, this.echoes = new aS, this.unmet = null
      }
      shown(yb) {
        var bb;
        return this.dims && (Qs(this.dims, yb) && this.echoes.agreeCounts() || this.echoes.answered()) && (Qs(this.dims, yb) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (bb = this.dims) && void 0 !== bb ? bb : yb
      }
      takeUnmet() {
        const yb = this.unmet;
        return this.unmet = null, yb
      }
      set(yb, bb) {
        this.dims = yb, this.echoes.add(bb)
      }
      pendingFor(yb) {
        return null === this.dims || yb && Qs(this.dims, yb) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function Qs(yb, bb) {
      return yb[0] === bb[0] && yb[1] === bb[1] && yb[2] === bb[2]
    }
    class jS {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rS;
        this.now = yb, this.taps = new Map
      }
      tap(yb, bb, Wy) {
        return !this.busy(yb) && (this.taps.set(yb, {
          at: this.now(),
          done: bb
        }), Wy(), !0)
      }
      settle(yb) {
        for (const [bb, Wy] of [...this.taps]) Wy.done(yb) && this.taps.delete(bb)
      }
      busy(yb) {
        const bb = this.taps.get(yb);
        return !!bb && (!(this.now() - bb.at >= 3e3) || (this.taps.delete(yb), !1))
      }
      busyIds() {
        const yb = new Set;
        for (const bb of [...this.taps.keys()]) this.busy(bb) && yb.add(bb);
        return yb
      }
      clear() {
        this.taps.clear()
      }
    }

    function Ds(yb) {
      return {
        send: bb => yb.track(bb),
        sendUrgent: (bb, Wy) => yb.track(bb, {
          urgent: !0,
          supersedes: Wy
        }),
        leftAt: bb => yb.leftAt(bb),
        holdReserve: () => yb.holdUrgentReserve(),
        answerMs: RZ
      }
    }

    function tS() {
      return performance.now()
    }

    function ws(yb) {
      const bb = yb.baf2RxNeed.map((yb => {
        let [bb, Wy] = yb;
        return [bb, Wy]
      }));
      return JSON.stringify([yb.baf2RxFormed, bb, yb.baf2RxBad, yb.baf2RxCells])
    }

    function kS(yb, bb) {
      const Wy = 0 !== (bb & fb),
        Uy = 0 !== (yb.baf2RxFlags & fb);
      return !Wy || Uy || "running" !== yb.baf2RxState && "idle" !== yb.baf2RxState ? !Wy && Uy && "scram" === yb.baf2RxState && yb.baf2RxFuel > 0 ? "idle" : yb.baf2RxState : "scram"
    }

    function Ns(yb) {
      return JSON.stringify([yb.baf2BatFormed, yb.baf2BatNeed, yb.baf2BatBad])
    }

    function zS(yb) {
      return yb.join(",")
    }
    class Is {
      constructor() {
        this.listeners = new Set
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      notify() {
        for (const yb of this.listeners) yb()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class xS {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(yb, bb) {
        this.lastAt = yb, this.lastUntil = yb + bb
      }
      answered(yb) {
        return this.lastAt >= yb || yb < this.lastUntil
      }
    }
    class As {
      constructor(yb, bb) {
        this.link = yb, this.now = bb, this.hold = new Ls, this.picked = null, this.notTaken = null
      }
      shown(yb) {
        const bb = this.hold.shown(yb);
        if (this.hold.takeUnmet() && this.picked) {
          var Wy;
          const {
            plans: bb,
            ctrl: Uy,
            at: hy
          } = this.picked;
          this.picked = null, bb.unpredict(Uy), null === (Wy = this.notTaken) || void 0 === Wy || Wy.call(this, yb, hy)
        }
        return bb
      }
      pendingFor(yb) {
        return this.hold.pendingFor(yb)
      }
      cU(yb, bb, Wy) {
        yb.predictSize(bb, Wy), this.picked = {
          plans: yb,
          ctrl: bb,
          at: this.now()
        };
        const Uy = this.link.send(hb(bb, "plan", ...Wy));
        this.hold.set(Wy, new Hs(Uy, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class ds {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tS;
        this.plans = yb, this.readInterior = bb, this.link = Wy, this.now = Uy, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new ps, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Is, this.redraw = null, this.releaseReserve = null, this.size = new As(Wy, Uy), this.oneShots = new jS(Uy), this.throttle = new Fs((yb => this.echo(this.link.send(this.command("throttle", yb)))))
      }
      set(yb) {
        !yb.baf2RxOpen && this.raw && zS(this.raw.baf2RxAt) === zS(yb.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(yb), this.EZ(yb)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(yb) {
        this.size.notTaken = yb
      }
      resize(yb) {
        this.raw && (this.size.cU(this.plans, this.raw.baf2RxAt, yb), this.EZ(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const yb = this.raw.baf2RxAt;
        this.plans.setStarter(yb, !this.plans.showsStarter(yb)), this.EZ(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.EZ(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.EZ(this.raw)
      }
      send(yb) {
        if (this.raw) {
          for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
          this.link.send(this.command(yb, ...Wy))
        }
      }
      tap(yb, bb) {
        this.raw && this.oneShots.tap(yb, function(yb, bb) {
          if ("start" === yb) return yb => 0 === (yb.baf2RxFlags & fb);
          if ("odConfirm" === yb) return yb => 0 !== (yb.baf2RxFlags & Zb);
          const Wy = ws(bb);
          return yb => ws(yb) !== Wy
        }(yb, this.raw), bb) && ("start" === yb && (this.startedAt = this.now()), this.EZ(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(fb, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(yb, bb) {
        if (!this.raw) return;
        const Wy = yb === fb ? this.command(bb ? "scram" : "start") : this.command("od", bb ? 1 : 0),
          Uy = bb && yb === fb,
          hy = `${Ub} ${this.raw.baf2RxAt.join(" ")} `,
          fy = this.echo(Uy ? this.link.sendUrgent(Wy, (yb => {
            const bb = yb.startsWith(hy) ? yb.slice(hy.length).split(" ")[0] : null;
            return "throttle" === bb || "start" === bb
          })) : this.link.send(Wy));
        this.flags.set(yb, bb, fy), Uy && this.throttle.assume(0, fy), this.EZ(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(yb) {
        this.throttle.drag(yb), this.raw && this.EZ(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.EZ(this.raw)
      }
      subscribe(yb) {
        return this.listeners.subscribe(yb)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var yb;
        this.throttle.release(), null === (yb = this.releaseReserve) || void 0 === yb || yb.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(yb) {
        for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
        return hb(this.raw.baf2RxAt, yb, ...Wy)
      }
      echo(yb) {
        return new Hs(yb, this.link, this.link.answerMs, this.now)
      }
      EZ(yb) {
        var bb;
        this.raw = yb;
        const Wy = this.flags.shown(yb.baf2RxFlags),
          Uy = {
            ...yb,
            baf2RxFlags: Wy,
            baf2RxTarget: this.throttle.shown(yb.baf2RxTarget),
            baf2RxState: kS(yb, Wy)
          },
          hy = this.size.shown(Uy.baf2RxDims),
          fy = this.throttle.pendingFor(),
          Zy = [this.throttle.pendingFor(yb.baf2RxTarget), this.flags.pendingFor(yb.baf2RxFlags), this.size.pendingFor(yb.baf2RxDims)].filter((yb => null !== yb)),
          cb = Zy.length > 0 ? Math.max(...Zy) : null,
          Py = this.oneShots.busyIds(),
          oy = Uy.baf2RxAt;
        let By, Ky, ey = null,
          qb = [Math.max(0, hy[0] - 2), Math.max(0, hy[1] - 2), Math.max(0, hy[2] - 2)];
        if (Uy.baf2RxFormed) {
          const [yb, bb, Wy] = Uy.baf2RxDims;
          qb = [Math.max(0, yb - 2), Math.max(0, bb - 2), Math.max(0, Wy - 2)], By = Array.from(Uy.baf2RxCells, Number), Ky = `${qb.join(",")}:${Uy.baf2RxCells}`
        } else {
          var sy;
          const yb = null === (sy = this.plans.planAt(oy)) || void 0 === sy ? void 0 : sy.box,
            bb = yb ? aU(yb, "reactor", ...hy) : rU(oy, 1, ...hy, HW("reactor", hy[0])),
            Wy = this.readInterior(bb);
          ey = kP(qb, Wy), By = Wy, Ky = `${qb.join(",")}:${Wy.join("")}`
        }(null === (bb = this.looksOf) || void 0 === bb ? void 0 : bb.key) !== Ky && (this.looksOf = {
          key: Ky,
          looks: dc(qb, By)
        }), this.view = {
          status: Uy,
          dims: hy,
          plan: ey,
          inner: qb,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(oy),
          odConfirmed: this.odConfirmed || 0 !== (Uy.baf2RxFlags & eb),
          guide: this.plans.guideOn(),
          throttlePending: null !== fy,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== cb && cb >= 5e3,
          busy: Py,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== cb || Py.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.EZ(this.raw)
        }), 250))
      }
    }
    class yE {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tS;
        this.plans = yb, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Is, this.redraw = null, this.size = new As(bb, Wy), this.oneShots = new jS(Wy)
      }
      set(yb) {
        !yb.baf2BatOpen && this.view && zS(this.view.status.baf2BatAt) === zS(yb.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(yb), this.EZ(yb)
      }
      tap(yb, bb) {
        if (!this.view) return;
        const Wy = Ns(this.view.status);
        this.oneShots.tap(yb, (yb => Ns(yb) !== Wy), bb) && this.EZ(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(yb) {
        this.size.notTaken = yb
      }
      resize(yb) {
        this.view && (this.size.cU(this.plans, this.view.status.baf2BatAt, yb), this.EZ(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.EZ(this.view.status)
      }
      subscribe(yb) {
        return this.listeners.subscribe(yb)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      EZ(yb) {
        const bb = this.size.shown(yb.baf2BatDims),
          Wy = this.oneShots.busyIds();
        this.view = {
          status: yb,
          dims: bb,
          Hy: qo(bb, yb.baf2BatDims) ? yb.baf2BatCapacity : WP(...bb),
          guide: this.plans.guideOn(),
          busy: Wy
        }, this.listeners.notify(), Wy.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.EZ(this.view.status)
        }), 250))
      }
    }
    const bE = "buildAFactory2Game:";

    function WS() {
      var yb;
      const bb = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!bb) return null;
      const Wy = bb.querySelector(".ExitButton");
      return function(yb, bb) {
        const Wy = bb ? bb.left - 8 : yb.right;
        return {
          left: yb.left,
          top: yb.top,
          width: Math.max(0, Wy - yb.left),
          height: yb.height
        }
      }(bb.getBoundingClientRect(), null !== (yb = null === Wy || void 0 === Wy ? void 0 : Wy.getBoundingClientRect()) && void 0 !== yb ? yb : null)
    }
    const US = (0, Uy.memo)((function(yb) {
      let {
        store: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ch.D)(), [hy, fy] = (0, Uy.useState)((() => bb.get())), [Zy, cb] = (0, Uy.useState)((() => performance.now()));
      (0, Uy.useEffect)((() => (fy(bb.get()), bb.subscribe((() => {
        fy(bb.get()), cb(performance.now())
      })))), [bb]);
      const {
        alarm: Py,
        boomAt: oy
      } = hy, By = null !== Py && null !== Py.secs, [Ky, ey] = (0, Uy.useState)(null);
      (0, Uy.useEffect)((() => {
        if (!By) return;
        ey(WS());
        const yb = setInterval((() => {
          cb(performance.now()), ey(WS())
        }), 250);
        return () => {
          clearInterval(yb)
        }
      }), [By]);
      const [qb, sy] = (0, Uy.useState)(!1);
      return (0, Uy.useEffect)((() => {
        if (oy === -1 / 0) return;
        sy(!0);
        const yb = setTimeout((() => {
          sy(!1)
        }), 1300);
        return () => {
          clearTimeout(yb)
        }
      }), [oy]), (0, mZ.jsxs)(mZ.Fragment, {
        children: [null !== Py && (0, mZ.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: Wy(Py.hot ? `${bE}rxAlarmSiren` : `${bE}rxAlarmDamaged`, {
            amount: String(Py.damage)
          })
        }), null !== Py && null !== Py.secs && (0, mZ.jsx)("div", {
          className: Ky ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Ky && void 0 !== Ky ? Ky : void 0,
          "aria-live": "assertive",
          children: Wy(`${bE}rxAlarmCountdown`, {
            amount: String((Sy = Py.secs, Ey = Zy - Py.receivedAt, Math.max(1, Math.ceil(Sy - Ey / 1e3))))
          })
        }), qb && (0, mZ.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Sy, Ey
    }));
    class hS {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      Gl(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Wy = yb.baf2RxAlarmAt.join(",");
        let Uy = this.snapshot.boomAt;
        if (yb.baf2RxAlarmBoom) this.byReactor.delete(Wy), Uy = bb;
        else if (yb.baf2RxAlarmDamage <= 0) this.byReactor.delete(Wy);
        else {
          var hy;
          this.byReactor.set(Wy, {
            damage: yb.baf2RxAlarmDamage,
            secs: null !== (hy = yb.baf2RxAlarmSecs) && void 0 !== hy ? hy : null,
            hot: !0 === yb.baf2RxAlarmHot,
            receivedAt: bb
          })
        }
        this.EZ(Uy)
      }
      retain(yb) {
        let bb = !1;
        for (const Wy of [...this.byReactor.keys()]) yb.has(Wy) || (this.byReactor.delete(Wy), bb = !0);
        bb && this.EZ(this.snapshot.boomAt)
      }
      has(yb) {
        return this.byReactor.has(yb)
      }
      get() {
        return this.snapshot
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      EZ(yb) {
        let bb = null;
        for (const Wy of this.byReactor.values())(!bb || Wy.damage > bb.damage) && (bb = Wy);
        this.snapshot = {
          alarm: bb,
          boomAt: yb
        };
        for (const Wy of this.listeners) Wy()
      }
    }
    const fS = {
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

    function ZS(yb) {
      return [yb[0], yb[1], yb[2]]
    }

    function cE(yb) {
      return `${yb[0]},${yb[1]},${yb[2]}`
    }
    class PS {
      constructor(yb) {
        if (this.plans = yb, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var yb;
            return {
              active: this.glows.flatMap((yb => {
                let {
                  record: bb
                } = yb;
                return bb ? [bb] : []
              })),
              log: [...null !== (yb = this.devLog) && void 0 !== yb ? yb : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var yb;
        return null !== (yb = this.devLog) && void 0 !== yb ? yb : []
      }
      check(yb, bb, Wy) {
        const Uy = new Set(bb.map((yb => cE(yb.box.ctrl))));
        for (const Zy of function(yb, bb) {
            const Wy = [],
              Uy = new Map(yb);
            yb.clear();
            for (const hy of bb) {
              const bb = dq(hy.box.ctrl),
                fy = hy.formed ? hy.level : 0;
              yb.set(bb, fy), fy > 0 && 0 === Uy.get(bb) && Wy.push(hy)
            }
            return Wy
          }(this.levels, this.plans.all())) Uy.has(cE(Zy.box.ctrl)) && this.show(yb, Zy, "on", Wy);
        const hy = this.plans.lastFormed();
        if (null === hy || hy.receivedAt <= this.flashedAt) return null;
        this.flashedAt = hy.receivedAt;
        const fy = function(yb, bb) {
          var Wy;
          const Uy = dq(yb);
          return null !== (Wy = bb.find((yb => dq(yb.box.ctrl) === Uy))) && void 0 !== Wy ? Wy : null
        }(hy.ctrl, bb);
        return fy && this.show(yb, fy, "formed", Wy), fy
      }
      fade(yb, bb) {
        0 !== this.glows.length && (this.glows = this.glows.filter((Wy => {
          let {
            mesh: Uy,
            glow: hy,
            startMs: fy,
            record: Zy
          } = Wy;
          const cb = (bb - fy) / fS[hy].ms;
          return cb >= 1 ? (yb.disposeGameMesh(Uy), Zy && (Zy.endMs = bb), !1) : (yb.setGameMesh(Uy, {
            visibility: "formed" === hy ? 1 - cb : Math.sin(Math.PI * cb)
          }), !0)
        })))
      }
      dispose(yb) {
        for (const {
            mesh: Wy
          }
          of this.glows) yb.disposeGameMesh(Wy);
        this.glows = [], this.levels.clear();
        const bb = "undefined" !== typeof window ? window : null;
        (null === bb || void 0 === bb ? void 0 : bb.baf2Glows) === this.devAccessor && delete bb.baf2Glows
      }
      show(yb, bb, Wy, Uy) {
        const {
          lo: hy,
          hi: fy
        } = GP(bb.box);
        let Zy = null;
        this.devLog && (Zy = {
          glow: Wy,
          ctrl: ZS(bb.box.ctrl),
          lo: ZS(hy),
          hi: ZS(fy),
          startMs: Uy,
          endMs: null
        }, this.devLog.push(Zy), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(yb, Wy, OP(hy, fy, fS[Wy].thick)),
          glow: Wy,
          startMs: Uy,
          record: Zy
        })
      }
      build(yb, bb, Wy) {
        const Uy = fs(yb, Wy, {
          rgb: fS[bb].colour,
          alpha: 1
        });
        return yb.setGameMesh(Uy, {
          visibility: 0
        }), Uy
      }
    }
    const oS = 1 / .6,
      BS = {
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
        blendMode: vP.e.Standard,
        soft: !0
      },
      KS = {
        ...BS,
        size: [.25, .4],
        count: 2
      };

    function eS(yb) {
      return {
        colours: [yb, yb],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: vP.e.Add,
        soft: !1
      }
    }
    const qE = eS([150, 225, 255]),
      sS = eS([185, 145, 255]),
      SS = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function ES(yb) {
      const bb = Rb[yb];
      return null === bb.fuelSlot || xW(bb) ? SS.includes(yb) ? sS : qE : BS
    }
    const lS = {
        kind: "smokePuff"
      },
      mE = [.2, .025, .2];

    function CS(yb, bb) {
      const [
        [Wy, Uy, hy],
        [fy, Zy, cb]
      ] = yb.colours;
      return {
        texture: yb.soft ? lS : "square_particle",
        Hy: bb,
        minLifeTime: yb.life[0] / oS,
        maxLifeTime: yb.life[1] / oS,
        minEmitPower: yb.power[0] * oS,
        maxEmitPower: yb.power[1] * oS,
        minSize: yb.size[0],
        maxSize: yb.size[1],
        emitRate: 0,
        gravity: [0, yb.lift * oS * oS, 0],
        dir1: [-yb.spread, 1, -yb.spread],
        dir2: [yb.spread, 1, yb.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [Wy, Uy, hy, yb.alpha],
          maxColor: [fy, Zy, cb, yb.alpha]
        }, {
          timeFraction: 1,
          minColor: [Wy, Uy, hy, 0],
          maxColor: [fy, Zy, cb, 0]
        }],
        blendMode: yb.blendMode
      }
    }
    class TS {
      constructor(yb) {
        this.fixed = yb, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(yb, bb, Wy) {
        var Uy;
        if (Wy === this.lastFrame) return !1;
        this.lastFrame = Wy;
        const hy = this.at;
        hy[0] = bb[0] + .5, hy[1] = bb[1] + 1.025, hy[2] = bb[2] + .5;
        const fy = null !== (Uy = this.fixed) && void 0 !== Uy ? Uy : cb() ? KS : BS;
        let Zy = this.particles.get(fy);
        return Zy || (Zy = yb.createParticles(function(yb) {
          return CS(yb, Math.ceil(12 * yb.count * yb.life[1]) + yb.count)
        }(fy), {
          pos: hy,
          half: mE
        }), this.particles.set(fy, Zy)), Zy.moveTo(hy), Zy.emit(fy.count), !0
      }
      dispose() {
        for (const yb of this.particles.values()) yb.stop();
        this.particles.clear()
      }
    }
    class VS {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(yb) {
        this.indexed = !0;
        for (const bb of Tb) {
          const Wy = ES(bb);
          for (let Uy = 1; Uy <= 4; Uy++) {
            const hy = yb.blockNameToBlockId(`${bb}|meta|rot${Uy}|Running`, !0);
            if (null === hy) continue;
            let fy = this.pufferIndexByStyle.get(Wy);
            void 0 === fy && (fy = this.pufferList.push(new TS(Wy === BS ? null : Wy)) - 1, this.pufferIndexByStyle.set(Wy, fy)), this.pufferIndexById[hy] = fy + 1
          }
        }
      }
      onAfterRender(yb, bb) {
        this.indexed || this.index(yb);
        const Wy = performance.now(),
          Uy = 0 === this.lastMs ? 0 : Math.min(Wy - this.lastMs, 250) / 1e3;
        this.lastMs = Wy, this.frame++, yb.particlesEnabled() ? (this.scan(yb, bb), this.puff(yb, Uy)) : this.sources = []
      }
      dispose() {
        for (const yb of this.pufferList) yb.dispose();
        this.sources = [], this.found = []
      }
      scan(yb, bb) {
        0 === this.scanRow && (this.origin = [Math.floor(bb[0]) - 12, Math.floor(bb[1]) - 6, Math.floor(bb[2]) - 12]);
        const Wy = Math.min(this.scanRow + 16, 325),
          [Uy, hy, fy] = this.origin,
          Zy = this.hits;
        Zy.length = 0;
        for (let cb = this.scanRow; cb < Wy; cb++) {
          const bb = Uy + cb % 25,
            Wy = hy + Math.floor(cb / 25);
          yb.scanBlocks(bb, Wy, fy, bb + 1, Wy + 1, fy + 25, this.pufferIndexById, Zy)
        }
        for (let cb = 0; cb < Zy.length; cb += 4) {
          const yb = Zy[cb + 3];
          this.found.push({
            pos: [Zy[cb], Zy[cb + 1], Zy[cb + 2]],
            Df: yb,
            puffer: this.pufferList[this.pufferIndexById[yb] - 1]
          })
        }
        this.scanRow = Wy, 325 === Wy && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(yb, bb) {
        const Wy = this.sources.length;
        if (0 !== Wy) {
          this.budget = Math.min(this.budget + Math.min(Wy / 1.2, 12) * bb, 2);
          for (let bb = 0; bb < Wy && this.budget >= 1; bb++) {
            const bb = this.sources[this.cursor % Wy];
            this.cursor = (this.cursor + 1) % Wy, yb.getBlockId(bb.pos[0], bb.pos[1], bb.pos[2]) === bb.Df && (bb.puffer.puff(yb, bb.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const JS = {
        ...eS([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      gE = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function GS(yb) {
      return 0 === yb.spots.length ? 0 : Math.min(1 * yb.level, 4)
    }

    function OS(yb) {
      return 0 === yb.glass.length ? 0 : Math.min(.75 * yb.level, 3)
    }

    function RS(yb) {
      return `${yb.ctrl.join(",")}:${yb.rot}:${yb.cu},${yb.cv}:${yb.w},${yb.h},${yb.d}`
    }

    function vE(yb, bb) {
      const Wy = bb.w - 2,
        Uy = bb.h - 2,
        hy = bb.d - 2,
        fy = [];
      for (let Zy = 0; Zy < Wy * Uy * hy; Zy++) {
        const cb = Zy % Wy,
          Py = Math.floor(Zy / Wy) % hy,
          oy = Math.floor(Zy / (Wy * hy));
        if (cb > 0 && cb < Wy - 1 && Py > 0 && Py < hy - 1 && oy > 0 && oy < Uy - 1) continue;
        const By = tU(bb, zU(bb, Zy)),
          Ky = Jsy(yb, By);
        if (null !== Ky && "Fuel Rod" === gU(Ky))
          for (const bb of gE) {
            const Wy = [By[0] + bb[0], By[1] + bb[1], By[2] + bb[2]];
            MS(yb, Wy) && fy.push(YS(Wy, bb))
          }
      }
      return fy
    }

    function iE(yb, bb) {
      const {
        lo: Wy,
        hi: Uy
      } = GP(bb), hy = [];
      for (let fy = Wy[0]; fy < Uy[0]; fy++)
        for (let bb = Wy[1]; bb < Uy[1]; bb++) {
          const Zy = fy === Wy[0] || fy === Uy[0] - 1 || bb === Wy[1] || bb === Uy[1] - 1 ? 1 : Math.max(1, Uy[2] - 1 - Wy[2]);
          for (let cb = Wy[2]; cb < Uy[2]; cb += Zy) {
            const Zy = [fy, bb, cb];
            if (!MS(yb, Zy)) continue;
            const Py = fy === Wy[0] ? gE[1] : fy === Uy[0] - 1 ? gE[0] : cb === Wy[2] ? gE[5] : cb === Uy[2] - 1 ? gE[4] : bb === Wy[1] ? gE[3] : gE[2];
            hy.push(YS(Zy, Py))
          }
        }
      return hy
    }

    function MS(yb, bb) {
      const Wy = Jsy(yb, bb);
      return null !== Wy && "Reactor Glass" === gU(Wy)
    }

    function YS(yb, bb) {
      return [
        [yb[0] + .5 + .55 * bb[0], yb[1] + .5 + .55 * bb[1], yb[2] + .5 + .55 * bb[2]],
        [0 === bb[0] ? .4 : .02, 0 === bb[1] ? .4 : .02, 0 === bb[2] ? .4 : .02]
      ]
    }
    class XS {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(yb, bb, Wy, Uy) {
        const hy = [],
          fy = new Set;
        for (const oy of bb) {
          var Zy, cb, Py;
          const {
            box: bb
          } = oy;
          if ("reactor" !== oy.kind || oy.level <= 0 || (bb.ctrl[0] - Wy[0]) ** 2 + (bb.ctrl[1] - Wy[1]) ** 2 + (bb.ctrl[2] - Wy[2]) ** 2 > 576) continue;
          const By = RS(bb);
          fy.add(By);
          let Ky = this.spots.get(By);
          if ((!Ky || Uy - Ky.at > 3e3) && (Ky = {
              at: Uy,
              spots: vE(yb, bb),
              glass: iE(yb, bb)
            }, this.spots.set(By, Ky)), 0 === Ky.spots.length && 0 === Ky.glass.length) continue;
          const ey = this.sparking.find((yb => yb.key === By));
          hy.push({
            key: By,
            level: oy.level,
            spots: Ky.spots,
            glass: Ky.glass,
            budget: null !== (Zy = null === ey || void 0 === ey ? void 0 : ey.budget) && void 0 !== Zy ? Zy : 0,
            cursor: null !== (cb = null === ey || void 0 === ey ? void 0 : ey.cursor) && void 0 !== cb ? cb : 0,
            glassBudget: null !== (Py = null === ey || void 0 === ey ? void 0 : ey.glassBudget) && void 0 !== Py ? Py : 0
          })
        }
        for (const oy of this.spots.keys()) fy.has(oy) || this.spots.delete(oy);
        this.sparking = hy
      }
      emit(yb, bb, Wy) {
        var Uy;
        if (0 === this.sparking.length || !yb.particlesEnabled() || Wy === this.lastFrame) return;
        this.lastFrame = Wy;
        let hy = 0,
          fy = 0;
        for (const sy of this.sparking) hy += GS(sy), fy += OS(sy);
        const Zy = hy > 8 ? 8 / hy : 1,
          cb = fy > 6 ? 6 / fy : 1;
        let Py, oy = null,
          By = null;
        for (const sy of this.sparking) sy.budget = Math.min(sy.budget + GS(sy) * Zy * bb, 2), sy.budget >= 1 && (!oy || sy.budget > oy.budget) && (oy = sy), sy.glassBudget = Math.min(sy.glassBudget + OS(sy) * cb * bb, 2), sy.glassBudget >= 1 && (!By || sy.glassBudget > By.glassBudget) && (By = sy);
        if (oy) oy.budget--, Py = oy.spots[oy.cursor++ % oy.spots.length];
        else {
          if (!By) return;
          By.glassBudget--, Py = By.glass[Math.floor(Math.random() * By.glass.length)]
        }
        const [Ky, ey] = Py, qb = null !== (Uy = this.emitter) && void 0 !== Uy ? Uy : this.create(yb, Ky, ey);
        qb.moveTo(Ky, ey), qb.emit(JS.count)
      }
      dispose() {
        var yb;
        null === (yb = this.emitter) || void 0 === yb || yb.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(yb, bb, Wy) {
        const Uy = Math.ceil(14 * JS.count * JS.life[1]) + JS.count;
        return this.emitter = yb.createParticles(CS(JS, Uy), {
          pos: bb,
          half: Wy
        }), this.emitter
      }
    }
    const nS = [2, 3.2],
      uS = 1 / 3,
      rE = 1 / .6,
      HS = {
        texture: lS,
        Hy: Math.ceil(18 * nS[1]) + 4,
        minLifeTime: nS[0] / rE,
        maxLifeTime: nS[1] / rE,
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
        blendMode: vP.e.Standard
      };
    class aE {
      constructor(yb) {
        this.plans = yb, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new XS, this.frame = 0, this.outline = new PS(yb)
      }
      onAfterRender(yb, bb, Wy) {
        const Uy = performance.now(),
          hy = 0 === this.lastMs ? 0 : Math.min(Uy - this.lastMs, 250) / 1e3;
        if (this.lastMs = Uy, this.outline.fade(yb, Uy), this.puff(yb, hy, Wy), this.sparks.emit(yb, hy, this.frame++), Uy - this.lastCheckMs < 150) return;
        this.lastCheckMs = Uy;
        const fy = this.plans.all().filter((yb => yb.formed && FS(yb.box.ctrl, Wy) <= 4096));
        this.plumes = fy.filter((yb => "reactor" === yb.kind && yb.level > 0)).map((yb => ({
          box: yb.box,
          level: yb.level
        }))), this.updateHums(yb, bb, fy, Wy), this.sparks.update(yb, fy, Wy, Uy), this.chimeFormed(yb, bb, fy, Uy)
      }
      dispose(yb) {
        var bb;
        this.outline.dispose(yb), null === (bb = this.steam) || void 0 === bb || bb.dispose(), this.steam = null, this.sparks.dispose();
        for (const Wy of this.hums.values()) Wy.stop();
        this.hums.clear()
      }
      chimeFormed(yb, bb, Wy, Uy) {
        const hy = this.outline.check(yb, Wy, Uy);
        hy && yb.playSound(bb, "exp_levelup", .6, 1, {
          myy: [hy.box.ctrl[0] + .5, hy.box.ctrl[1], hy.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(yb, bb, Wy) {
        const Uy = this.plumes;
        if (0 === Uy.length || !yb.particlesEnabled()) return void(this.plumeBudget = 0);
        const hy = Uy.reduce(((yb, bb) => yb + 3 * bb.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + hy * bb, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let fy = this.plumeCursor % (hy / 3);
        this.plumeCursor++;
        let Zy = Uy[0];
        for (const Ky of Uy) {
          if (fy < Ky.level) {
            Zy = Ky;
            break
          }
          fy -= Ky.level
        }
        const {
          lo: cb,
          hi: Py
        } = GP(Zy.box);
        if (function(yb, bb, Wy) {
            const Uy = Math.max(yb[0] - Wy[0], 0, Wy[0] - bb[0]),
              hy = Math.max(yb[2] - Wy[2], 0, Wy[2] - bb[2]);
            return Math.hypot(Uy, Wy[1] - bb[1], hy)
          }(cb, Py, Wy) < 6 && Math.random() > uS) return;
        const oy = [(cb[0] + Py[0]) / 2, Py[1] + .05, (cb[2] + Py[2]) / 2],
          By = [(Py[0] - cb[0]) / 2 - .5, .05, (Py[2] - cb[2]) / 2 - .5];
        this.steam ??= yb.createParticles(HS, {
          pos: oy,
          half: By
        }), this.steam.moveTo(oy, By), this.steam.emit(1)
      }
      updateHums(yb, bb, Wy, Uy) {
        const hy = new Map;
        for (const Zy of Wy) "reactor" === Zy.kind && Zy.level > 0 && FS(Zy.box.ctrl, Uy) <= 576 && hy.set(`${fy=Zy.box.ctrl,`${fy[0]},${fy[1]},${fy[2]}`}:${Zy.level}`, Zy);
        var fy;
        for (const [Zy, cb] of this.hums) hy.has(Zy) || (cb.stop(), this.hums.delete(Zy));
        for (const [Zy, cb] of hy) {
          if (this.hums.has(Zy)) continue;
          const {
            lo: Wy,
            hi: Uy
          } = GP(cb.box), hy = [(Wy[0] + Uy[0]) / 2, Wy[1], (Wy[2] + Uy[2]) / 2], fy = yb.playSound(bb, "rocketEngineLoop", .08 + .06 * cb.level, .55, {
            myy: hy,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          fy && this.hums.set(Zy, fy)
        }
      }
    }

    function FS(yb, bb) {
      return (yb[0] - bb[0]) ** 2 + (yb[1] - bb[1]) ** 2 + (yb[2] - bb[2]) ** 2
    }
    class pS {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      Gl(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Uy = [yb.baf2BombAt[0], yb.baf2BombAt[1], yb.baf2BombAt[2]],
          hy = yb.baf2BombR;
        if (yb.baf2BombBoom) {
          const yb = Math.hypot(bb[0] - Uy[0], bb[1] - Uy[1], bb[2] - Uy[2]);
          this.EZ({
            fuse: null,
            blast: {
              at: Uy,
              r: hy,
              receivedAt: Wy,
              distance: yb,
              flash: yb <= 3 * hy
            }
          })
        } else this.EZ({
          ...this.snapshot,
          fuse: yb.baf2BombMs > 0 ? {
            at: Uy,
            r: hy,
            endsAt: Wy + yb.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      EZ(yb) {
        this.snapshot = yb;
        for (const bb of this.listeners) bb()
      }
    }
    const LS = (0, Uy.memo)((function(yb) {
      var bb;
      let {
        store: Wy
      } = yb;
      const {
        t: hy
      } = (0, Ch.D)(), [fy, Zy] = (0, Uy.useState)((() => Wy.get())), [cb, Py] = (0, Uy.useState)((() => performance.now()));
      (0, Uy.useEffect)((() => (Zy(Wy.get()), Wy.subscribe((() => {
        Zy(Wy.get()), Py(performance.now())
      })))), [Wy]);
      const {
        fuse: oy,
        blast: By
      } = fy;
      (0, Uy.useEffect)((() => {
        if (!oy) return;
        const yb = setInterval((() => {
          Py(performance.now())
        }), 250);
        return () => {
          clearInterval(yb)
        }
      }), [oy]);
      const [Ky, ey] = (0, Uy.useState)(!1);
      (0, Uy.useEffect)((() => {
        if (null === By || void 0 === By || !By.flash) return;
        ey(!0);
        const yb = setTimeout((() => {
          ey(!1)
        }), 2500);
        return () => {
          clearTimeout(yb)
        }
      }), [By]);
      const qb = oy ? function(yb, bb) {
        return yb.endsAt <= bb ? 0 : Math.ceil((yb.endsAt - bb) / 1e3)
      }(oy, cb) : 0;
      return (0, mZ.jsxs)(mZ.Fragment, {
        children: [qb > 0 && (0, mZ.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: hy("buildAFactory2Game:bombCountdown", {
            amount: String(qb),
            radius: String(null !== (bb = null === oy || void 0 === oy ? void 0 : oy.r) && void 0 !== bb ? bb : 0)
          })
        }), Ky && (0, mZ.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function QS(yb) {
      const bb = Math.min(4, Math.max(1, yb / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * yb / 4)),
        capSpread: Math.min(5 * yb / 8, 24 * bb),
        capThick: 6 * bb,
        stemHalfWidth: 3 * bb,
        puffScale: bb
      }
    }
    class jE {
      constructor() {
        this.kW = !1
      }
      hold(yb) {
        yb.getCameraFar() < 1e3 && (yb.setCameraFar(1e3), this.kW = !0)
      }
      release(yb) {
        this.kW && (this.kW = !1, yb.setCameraFar(null))
      }
    }
    const DS = 1 / .6,
      tE = [.2, .1, .2],
      wS = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      kE = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: vP.e.Standard,
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
      NS = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: vP.e.Standard,
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
      zE = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: vP.e.Standard,
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
      IS = {
        texture: lS,
        Hy: Math.ceil(120) + 4,
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
        blendMode: vP.e.Add
      };
    class xE {
      constructor(yb) {
        this.store = yb, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new jE, this.timers = []
      }
      onAfterRender(yb, bb) {
        const Wy = performance.now(),
          Uy = 0 === this.lastMs ? 0 : Math.min(Wy - this.lastMs, 250) / 1e3;
        this.lastMs = Wy;
        const {
          fuse: hy,
          blast: fy
        } = this.store.get();
        null !== fy && fy !== this.shownBlast && (this.shownBlast = fy, this.startBlast(yb, bb, fy, Wy));
        const Zy = yb.particlesEnabled();
        null !== hy && hy.endsAt > Wy && Zy ? this.emitBeacon(yb, hy, Uy, Wy) : this.beaconBudget = 0, null !== this.cloud && (Wy - this.cloud.startMs > 33e3 ? this.disposeCloud(yb) : (this.far.hold(yb), Zy && this.emitCloud(yb, Uy, Wy)))
      }
      dispose(yb) {
        var bb;
        null === (bb = this.beacon) || void 0 === bb || bb.dispose(), this.beacon = null, this.disposeCloud(yb);
        for (const Wy of this.timers) clearTimeout(Wy);
        this.timers.length = 0
      }
      emitBeacon(yb, bb, Wy, Uy) {
        const hy = bb.endsAt - Uy < 5e3 ? 350 : 1e3,
          fy = .5 + .5 * Math.sin(2 * Math.PI * Uy / hy);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * fy * Wy, 4), this.beaconBudget < 1) return;
        const Zy = Math.floor(this.beaconBudget);
        this.beaconBudget -= Zy;
        const [cb, Py, oy] = bb.at, By = [cb + .5, Py + 1.1, oy + .5];
        this.beacon ??= yb.createParticles(IS, {
          pos: By,
          half: tE
        }), this.beacon.moveTo(By), this.beacon.emit(Zy)
      }
      startBlast(yb, bb, Wy, Uy) {
        var hy;
        null === (hy = this.beacon) || void 0 === hy || hy.dispose(), this.beacon = null, this.disposeCloud(yb);
        const fy = (0, Oc.isMobile)() ? .5 : 1;
        this.streams = [kE, NS, zE].map((yb => {
          const bb = Math.round(yb.count * fy);
          return {
            spec: yb,
            particles: null,
            rate: bb / ((yb.toMs - yb.fromMs) / 1e3),
            budget: 0,
            left: bb
          }
        })), this.cloud = {
          blast: Wy,
          startMs: Uy
        };
        const Zy = Math.max(.25, 1 - Wy.distance / (6 * Wy.r)),
          cb = Wy.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [Wy, Uy, hy] of wS) dS(yb, bb, Wy, Zy * Uy, hy)
        }), cb))
      }
      emitCloud(yb, bb, Wy) {
        const {
          blast: Uy,
          startMs: hy
        } = this.cloud, fy = Wy - hy, [Zy, cb, Py] = Uy.at, oy = QS(Uy.r);
        for (const By of this.streams) {
          const {
            spec: Wy
          } = By;
          if (By.left <= 0 || fy < Wy.fromMs) continue;
          By.budget += By.rate * bb;
          const hy = Math.min(Math.floor(By.budget), By.left);
          if (hy < 1) continue;
          By.budget -= hy, By.left -= hy;
          const Ky = By.particles ??= this.createStream(yb, Wy, Uy);
          if (Wy === kE) {
            const yb = oy.stemHalfWidth;
            Ky.moveTo([Zy, cb + 1, Py], [yb, 1, yb])
          } else if (Wy === NS) {
            const yb = oy.capSpread * Math.min(1, (fy - Wy.fromMs) / 3e3),
              bb = Math.sqrt(Math.random()),
              Uy = 2 * Math.random() * Math.PI,
              hy = Math.cos(Uy) * bb,
              By = Math.sin(Uy) * bb,
              ey = Zy + hy * yb,
              qb = Py + By * yb,
              sy = oy.capThick,
              Sy = cb + oy.capHeight + sy * (1 - bb * bb) * 2;
            Ky.setDirections([.7 * hy, .05, .7 * By], [hy, .2, By]), Ky.moveTo([ey, Sy, qb], [sy, sy, sy])
          } else {
            this.ringAngle += 2.39996;
            const yb = Math.cos(this.ringAngle),
              bb = Math.sin(this.ringAngle);
            Ky.setDirections([yb, .05, bb], [yb, .1, bb]), Ky.moveTo([Zy + 2 * yb, cb + .5, Py + 2 * bb], [0, .5, 0])
          }
          Ky.emit(hy)
        }
      }
      createStream(yb, bb, Wy) {
        const {
          r: Uy
        } = Wy, hy = Math.max(bb.life[0], Uy / 25), fy = bb === zE ? [.9 * hy, hy] : bb.life, Zy = QS(Uy), cb = bb === zE ? 1 : Zy.puffScale, Py = {
          texture: lS,
          Hy: bb.count + 4,
          minLifeTime: fy[0] / DS,
          maxLifeTime: fy[1] / DS,
          minSize: bb.size[0] * cb,
          maxSize: bb.size[1] * cb,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, bb.gravity * DS * DS, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: bb.from[0],
            maxColor: bb.from[1]
          }, {
            timeFraction: .6,
            minColor: AS(bb.from[0], bb.to[0]),
            maxColor: AS(bb.from[1], bb.to[1])
          }, {
            timeFraction: 1,
            minColor: bb.to[0],
            maxColor: bb.to[1]
          }],
          blendMode: bb.blend
        };
        if (bb === kE) {
          const yb = Zy.capHeight / ((fy[0] + fy[1]) / 2);
          Py.minEmitPower = .9 * yb * DS, Py.maxEmitPower = 1.05 * yb * DS, Py.dir1 = [-.1, 1, -.1], Py.dir2 = [.1, 1, .1]
        } else bb === NS ? (Py.minEmitPower = 1.2, Py.maxEmitPower = 2, Py.dir1 = [-1, .05, -1], Py.dir2 = [1, .2, 1]) : (Py.minEmitPower = 39.583333333333336, Py.maxEmitPower = 41.66666666666667, Py.dir1 = [1, 0, 0], Py.dir2 = [1, 0, 0]);
        return yb.createParticles(Py, {
          pos: Wy.at
        })
      }
      disposeCloud(yb) {
        for (const Wy of this.streams) {
          var bb;
          null === (bb = Wy.particles) || void 0 === bb || bb.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(yb)
      }
    }

    function AS(yb, bb) {
      return [(yb[0] + bb[0]) / 2, (yb[1] + bb[1]) / 2, (yb[2] + bb[2]) / 2, .75 * yb[3]]
    }

    function dS(yb, bb, Wy, Uy, hy) {
      try {
        yb.playSound(bb, Wy, Uy, hy)
      } catch (fy) {
        console.error(fy)
      }
    }
    const yl = {
        Hy: 720,
        perS: 100
      },
      bl = {
        Hy: 320,
        perS: 44
      };
    class WE {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(yb, bb) {
        this.zone = {
          centre: [...yb.centre],
          r: yb.r,
          band: yb.band ? [yb.band[0], yb.band[1]] : void 0
        }, this.endsAt = bb
      }
      stop() {
        this.zone = null
      }
      Gl(yb, bb) {
        const {
          baf2FalloutMs: Wy,
          baf2FalloutAt: Uy,
          baf2FalloutR: hy,
          baf2FalloutY: fy
        } = yb;
        Wy > 0 && Uy && void 0 !== hy ? this.start({
          centre: Uy,
          r: hy,
          band: fy
        }, bb + Wy) : this.stop()
      }
      perS(yb, bb, Wy) {
        const Uy = this.zone;
        if (!Uy) return 0;
        const hy = this.endsAt - yb;
        return hy <= 0 ? (this.zone = null, 0) : Uy.band && (bb[1] < Uy.band[0] || bb[1] > Uy.band[1]) || Math.hypot(bb[0] - Uy.centre[0], bb[2] - Uy.centre[2]) > Uy.r ? 0 : Wy.perS * Math.min(1, hy / 5e3)
      }
    }
    const UE = [5, 7],
      hE = [24, 8, 24],
      fE = .5,
      ZE = 1 / .6,
      cl = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class PE {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Oc.isMobile)();
        this.state = new WE, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(yb) {
          return yb ? bl : yl
        }(yb)
      }
      startFallout(yb, bb) {
        this.state.start(yb, bb)
      }
      stopFallout() {
        this.state.stop()
      }
      Gl(yb) {
        this.state.Gl(yb, performance.now())
      }
      onAfterRender(yb, bb) {
        var Wy;
        const Uy = performance.now(),
          hy = 0 === this.lastMs ? 0 : Math.min(Uy - this.lastMs, 250) / 1e3;
        this.lastMs = Uy;
        const fy = this.state.perS(Uy, bb, this.tier);
        if (fy <= 0 || !yb.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + fy * hy, fy / 4);
        const Zy = Math.floor(this.budget);
        if (Zy < 1) return;
        this.budget -= Zy;
        const cb = this.at;
        cb[0] = bb[0], cb[1] = bb[1] + 12, cb[2] = bb[2];
        const Py = null !== (Wy = this.systems) && void 0 !== Wy ? Wy : this.create(yb, cb),
          oy = this.amounts;
        oy[0] = 0, oy[1] = 0;
        for (let By = 0; By < Zy; By++) oy[Math.random() < .3 ? 1 : 0]++;
        for (let By = 0; By < Py.length; By++) oy[By] > 0 && (Py[By].moveTo(cb, hE), Py[By].emit(oy[By]))
      }
      dispose() {
        for (const bb of null !== (yb = this.systems) && void 0 !== yb ? yb : []) {
          var yb;
          bb.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(yb, bb) {
        return this.systems = cl.map((Wy => {
          let {
            rgba: [Uy, hy, fy, Zy],
            share: cb
          } = Wy;
          const Py = {
            texture: "square_particle",
            Hy: Math.ceil(this.tier.Hy * cb),
            minLifeTime: UE[0] / ZE,
            maxLifeTime: UE[1] / ZE,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [fE, -1, fE],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Uy, hy, fy, 0]
            }, {
              timeFraction: .15,
              minColor: [Uy, hy, fy, Zy]
            }, {
              timeFraction: .8,
              minColor: [Uy, hy, fy, Zy]
            }, {
              timeFraction: 1,
              minColor: [Uy, hy, fy, 0]
            }],
            blendMode: vP.e.Standard
          };
          return yb.createParticles(Py, {
            pos: bb,
            half: hE
          })
        })), this.systems
      }
    }
    const oE = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function BE(yb) {
      const bb = /\|rot(\d)/.exec(yb);
      return oE[bb ? Number(bb[1]) : 1]
    }
    var KE = Wy(542),
      eE = Wy(37156);
    const ql = new Set(KE.i);

    function sE(yb) {
      if (-2 !== yb.count) return null;
      const bb = Dy(yb.item);
      return null !== bb && ql.has(bb) ? bb : null
    }

    function SE(yb) {
      const {
        width: bb,
        height: Wy
      } = (0, eE.c)(yb).hitBoxDimensions;
      return .55 / Math.max(bb, Wy)
    }

    function EE(yb, bb, Wy) {
      if (!Wy) return !1;
      const Uy = yb[0] + .5 - bb[0],
        hy = yb[1] + .5 - bb[1],
        fy = yb[2] + .5 - bb[2];
      return Uy * Uy + hy * hy + fy * fy <= 576
    }

    function lE(yb, bb) {
      return Math.atan2(yb[0], yb[2]) + Math.PI + bb
    }

    function ml(yb, bb) {
      const Wy = 2 * Math.PI;
      return (yb + Wy * bb / 1e4) % Wy
    }
    class CE {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = yb, this.now = bb, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = yb.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(yb, bb) {
        if (0 === this.farms.size) return;
        const Wy = this.now(),
          Uy = Number.isNaN(this.frameMs) ? 0 : Math.min(Wy - this.frameMs, 100);
        this.frameMs = Wy, Wy - this.checkedMs >= 1e3 && (this.checkedMs = Wy, this.check(yb, bb));
        for (const hy of this.farms.values()) hy.shown && hy.running && null !== hy.model && Uy > 0 && (hy.spin = ml(hy.spin, Uy), hy.model.setPose(hy.feet, lE(hy.front, hy.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const yb of this.farms.values()) this.drop(yb);
        this.farms.clear()
      }
      sync() {
        const yb = new Set;
        for (const bb of this.labels.list()) {
          const Wy = sE(bb);
          if (null === Wy) continue;
          yb.add(bb.key);
          const Uy = this.farms.get(bb.key);
          if ((null === Uy || void 0 === Uy ? void 0 : Uy.mob) === Wy) continue;
          Uy && this.drop(Uy);
          const [hy, fy, Zy] = bb.pos;
          this.farms.set(bb.key, {
            pos: bb.pos,
            feet: [hy + .5, fy + 1, Zy + .5],
            mob: Wy,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [bb, Wy] of this.farms) yb.has(bb) || (this.drop(Wy), this.farms.delete(bb));
        this.checkedMs = -1 / 0
      }
      check(yb, bb) {
        for (const Wy of this.farms.values()) {
          const [Uy, hy, fy] = Wy.pos, Zy = Jsy(yb, Wy.pos);
          null !== Zy && gU(Zy) === rb && EE(Wy.pos, bb, "Air" === Jsy(yb, [Uy, hy + 1, fy])) ? (Wy.running = Zy.endsWith("|Running"), Wy.front = BE(Zy), null === Wy.model && (Wy.model = yb.createMobModel(Wy.mob, SE(Wy.mob)), null === Wy.model) || (Wy.model.setPose(Wy.feet, lE(Wy.front, Wy.spin)), Wy.shown || (Wy.model.setVisible(!0), Wy.shown = !0))) : (Wy.shown && null !== Wy.model && Wy.model.setVisible(!1), Wy.shown = !1)
        }
      }
      drop(yb) {
        var bb;
        null === (bb = yb.model) || void 0 === bb || bb.dispose(), yb.model = null, yb.shown = !1
      }
    }
    class TE {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(yb) {
        var bb;
        this.island = yb.baf2ColIsland, this.islandSite = (bb = yb.baf2ColSite) && 8 === bb.length ? {
          spawnXZ: [bb[0], bb[1]],
          coreXZ: [bb[2], bb[3]],
          minXZ: [bb[4], bb[5]],
          maxXZ: [bb[6], bb[7]]
        } : null, this.views = yb.baf2ColList.map((yb => ({
          entry: dU(yb)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(yb) {
        this.status = yb, this.emit()
      }
      onOpen(yb) {
        this.openHeld = yb
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
        return this.views.map((yb => yb.entry))
      }
      entryAtRoot(yb) {
        var bb;
        return null === (bb = this.views.find((bb => {
          let {
            entry: Wy
          } = bb;
          return Wy.focus[0] === yb[0] && Wy.focus[1] === yb[1] + 1 && Wy.focus[2] === yb[2]
        }))) || void 0 === bb ? void 0 : bb.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(yb, bb) {
        return XP(this.entries(), yb, bb)
      }
      lookSource() {
        return {
          handles: yb => fU(yb) >= 0 || ZU(yb),
          line: (yb, bb) => this.lookLine(yb, bb),
          version: () => this.beamsVersion
        }
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const yb of this.listeners) yb()
      }
    }
    const VE = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((yb => yb / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((yb => [yb, yb + 1, yb + 2, yb, yb + 2, yb + 3]))
    };

    function JE(yb, bb, Wy, Uy, hy, fy, Zy) {
      let cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Py = Math.cos(cb),
        oy = Math.sin(cb),
        By = yb.positions.length / 3,
        {
          positions: Ky,
          indices: ey
        } = VE;
      for (let qb = 0; qb < Ky.length; qb += 3) {
        const cb = Ky[qb] * hy,
          By = Ky[qb + 2] * Zy;
        yb.positions.push(bb + cb * Py + By * oy, Wy + Ky[qb + 1] * fy, Uy - cb * oy + By * Py)
      }
      for (const qb of ey) yb.indices.push(By + qb)
    }

    function gl(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return bb < 1 ? {
        rgb: yb,
        alpha: bb
      } : {
        rgb: yb,
        alpha: 1,
        opaque: !0
      }
    }
    class GE {
      constructor(yb, bb) {
        this.style = yb, this.perSource = bb, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(yb) {
        this.sources = yb, 0 === yb.length && (this.budget = 0)
      }
      Zb(yb, bb, Wy) {
        const Uy = this.sources.length;
        if (0 !== Uy) {
          var hy, fy;
          this.budget = Math.min(this.budget + (hy = Uy, fy = this.perSource, Math.min(hy * fy, ko) * bb), 2);
          for (let bb = 0; bb < Uy && this.budget >= 1; bb++) {
            const bb = this.sources[this.cursor % Uy];
            this.cursor = (this.cursor + 1) % Uy;
            if (!(Math.max(Math.abs(bb.x - Wy[0]), Math.abs(bb.y - Wy[1]), Math.abs(bb.z - Wy[2])) > 32)) return this.puff(yb, bb), void this.budget--
          }
        }
      }
      dispose() {
        var yb;
        null === (yb = this.particles) || void 0 === yb || yb.dispose(), this.particles = null, this.sources = []
      }
      puff(yb, bb) {
        let {
          x: Wy,
          y: Uy,
          z: hy,
          h: fy,
          faces: Zy
        } = bb;
        const cb = function(yb, bb, Wy, Uy, hy) {
            const [fy, Zy, cb] = hy[Math.floor(Math.random() * hy.length)], Py = .04, oy = (yb, bb, Wy) => yb > 0 ? bb + Wy + Py : yb < 0 ? bb - Py : bb + .1, By = (yb, bb, Wy) => yb > 0 ? bb + Wy + Py : yb < 0 ? bb - Py : bb + Wy - .1, Ky = [oy(fy, yb, 1), oy(Zy, bb, Uy), oy(cb, Wy, 1)], ey = [By(fy, yb, 1), By(Zy, bb, Uy), By(cb, Wy, 1)];
            return {
              pos: [(Ky[0] + ey[0]) / 2, (Ky[1] + ey[1]) / 2, (Ky[2] + ey[2]) / 2],
              half: [(ey[0] - Ky[0]) / 2, (ey[1] - Ky[1]) / 2, (ey[2] - Ky[2]) / 2],
              out: [fy, Zy, cb]
            }
          }(Wy, Uy, hy, fy, Zy),
          {
            style: Py
          } = this,
          oy = this.particles ??= yb.createParticles(CS(Py, Math.ceil(Py.count * ko * Py.life[1]) + 4), cb);
        oy.moveTo(cb.pos, cb.half);
        const [By, Ky, ey] = cb.out, qb = Py.spread;
        oy.setDirections([By - qb, .6 + Ky, ey - qb], [By + qb, 1 + Ky, ey + qb]), oy.emit(Py.count)
      }
    }
    const OE = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class RE {
      constructor() {
        this.green = new GE(zo.green, to), this.pink = new GE(zo.pink, wP), this.colliders = [], this.lastMs = 0
      }
      setSources(yb) {
        this.colliders = yb;
        const bb = [],
          Wy = [];
        for (const Uy of yb) {
          const [yb, hy, fy] = Uy.focus;
          bb.push({
            x: yb,
            y: hy - 1,
            z: fy,
            h: 2,
            faces: OE
          });
          for (let bb = 0; bb < 4; bb++) {
            if (!Uy.live[bb]) continue;
            const [yb, hy, fy] = oU(Uy.focus, bb, dW.LASER_D), [Zy, , cb] = PU[bb], Py = OE.filter((yb => yb[0] !== Zy || yb[2] !== cb || 0 !== yb[1]));
            Wy.push({
              x: yb,
              y: hy,
              z: fy,
              h: 1,
              faces: Py
            })
          }
        }
        this.green.setSources(bb), this.pink.setSources(Wy)
      }
      onAfterRender(yb) {
        const bb = performance.now(),
          Wy = 0 === this.lastMs ? 0 : Math.min(bb - this.lastMs, 250) / 1e3;
        if (this.lastMs = bb, 0 === this.colliders.length || !yb.particlesEnabled()) return;
        const Uy = yb.getCameraPosition();
        this.green.Zb(yb, Wy, Uy), this.pink.Zb(yb, Wy, Uy)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const vl = 1.04,
      il = gl([1, 120 / 255, 220 / 255]),
      ME = gl([1, .25, .25], .35);
    class YE {
      constructor(yb) {
        this.store = yb, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new RE
      }
      onAfterRender(yb) {
        this.store.version() !== this.builtVersion && this.rebuild(yb);
        const bb = performance.now();
        for (const Wy of this.beams) {
          const Uy = 1 + .35 * Math.sin(bb / 700 * Math.PI * 2 + Wy.phase);
          yb.setGameMesh(Wy.mesh, {
            scale: [Wy.alongX ? 1 : Uy, Uy, Wy.alongX ? Uy : 1]
          })
        }
        this.glow.onAfterRender(yb)
      }
      dispose(yb) {
        this.clear(yb), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(yb) {
        this.clear(yb), this.builtVersion = this.store.version();
        const bb = [];
        for (const {
            entry: Wy
          }
          of this.store.colliders()) Wy.on && Wy.live.some(Boolean) && (this.addBeams(yb, Wy), bb.push(Wy)), Wy.blockers.length > 0 && this.addMarkers(yb, Wy);
        this.glow.setSources(bb)
      }
      addBeams(yb, bb) {
        const [Wy, Uy, hy] = bb.focus, fy = DP - .25, Zy = (.25 + DP) / 2;
        for (let cb = 0; cb < 4; cb++) {
          if (!bb.live[cb]) continue;
          const [Py, , oy] = PU[cb], By = 0 !== Py, Ky = {
            positions: [],
            indices: []
          };
          JE(Ky, 0, 0, 0, By ? fy : .2, .2, By ? .2 : fy);
          const ey = [Wy + .5 + Py * Zy, Uy + .5, hy + .5 + oy * Zy],
            qb = yb.createGameMesh(Ky, il, ey);
          this.meshes.push(qb), this.beams.push({
            mesh: qb,
            alongX: By,
            phase: cb * Math.PI / 2
          })
        }
      }
      addMarkers(yb, bb) {
        const Wy = bb.blockers[0],
          Uy = {
            positions: [],
            indices: []
          };
        for (const [hy, fy, Zy] of bb.blockers) JE(Uy, hy - Wy[0] + .5, fy - Wy[1] + .5, Zy - Wy[2] + .5, vl, vl, vl);
        this.meshes.push(yb.createGameMesh(Uy, ME, Wy))
      }
      clear(yb) {
        for (const bb of this.meshes) yb.disposeGameMesh(bb);
        this.meshes = [], this.beams = []
      }
    }
    const XE = [.56, .83, 1],
      nE = [1, .73, .08],
      uE = [1, .25, .25],
      rl = [.85, .85, .85],
      HE = [.3, .45, .6];

    function al(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Zy = hy / 2,
        cb = hy + fy;
      for (const Py of [-Zy, Zy])
        for (const hy of [-Zy, Zy]) JE(yb, bb, Wy + Py, Uy + hy, cb, fy, fy), JE(yb, bb + Py, Wy, Uy + hy, fy, cb, fy), JE(yb, bb + Py, Wy + hy, Uy, fy, fy, cb)
    }

    function FE(yb) {
      return bb => yb.isBlockInLoadedChunk(bb[0], bb[1], bb[2]) && 0 === yb.getBlockId(bb[0], bb[1], bb[2])
    }

    function pE(yb) {
      return yb.map((yb => {
        let {
          free: bb,
          blocked: Wy,
          gaps: Uy,
          supports: hy
        } = yb;
        return `${bb.join(";")}|${Wy.join(";")}|${Uy.join(";")}|${hy.join(";")}`
      })).join("/")
    }

    function LE(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const fy = bb[0],
        Zy = {
          positions: [],
          indices: []
        };
      for (const [cb, Py, oy] of bb) al(Zy, cb - fy[0] + .5, Py - fy[1] + .5, oy - fy[2] + .5, Uy, hy);
      return yb.createGameMesh(Zy, Wy, fy)
    }
    class QE {
      constructor(yb) {
        this.store = yb, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(yb, bb, Wy) {
        var Uy;
        const hy = null === (Uy = yb.MPy(bb)) || void 0 === Uy ? void 0 : Uy.name;
        if (hy !== bh && hy !== yh) return void("" !== this.shownKey && this.show(yb, "", []));
        const fy = performance.now();
        if (fy - this.lastCheckMs >= 200 && (this.lastCheckMs = fy, hy === bh ? this.check(yb, Wy) : this.preview(yb, Wy)), this.pulses.length > 0) {
          const bb = 1 + .12 * Math.sin(fy / 1e3 * 1.25 * Math.PI * 2),
            Wy = [bb, bb, bb];
          for (const Uy of this.pulses) yb.setGameMesh(Uy, {
            scale: Wy
          })
        }
      }
      dispose(yb) {
        this.clear(yb), this.shownKey = ""
      }
      check(yb, bb) {
        const Wy = FE(yb),
          Uy = [];
        for (const {
            entry: fy
          }
          of this.store.colliders()) {
          fy.focus.every(((yb, Wy) => Math.abs(yb + .5 - bb[Wy]) <= dW.GHOST_REACH)) && Uy.push(jo(fy, Wy))
        }
        const hy = pE(Uy);
        hy !== this.shownKey && this.show(yb, hy, Uy)
      }
      preview(yb, bb) {
        const Wy = yb.getTargetedBlock(),
          Uy = Wy ? [Wy.bc[0], Wy.bc[1], Wy.bc[2]] : null,
          hy = null !== Uy && Uy.every(((yb, Wy) => Math.abs(yb + .5 - bb[Wy]) <= 8)),
          fy = this.store.site(),
          Zy = hy && fy ? function(yb, bb, Wy) {
            const Uy = ch(yb);
            if (!Uy.every(bb)) return null;
            const hy = eU(yb, Wy);
            return {
              column: Uy,
              spots: jo({
                focus: Uy[1],
                lasers: [!1, !1, !1, !1],
                open: hy,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, bb),
              fits: hy.filter(Boolean).length >= dW.MIN_SPOTS
            }
          }(Uy, FE(yb), fy) : null,
          cb = Zy ? [Zy.spots] : [],
          Py = Zy ? `preview ${Uy.join(",")}|${Zy.fits}|${pE(cb)}` : "";
        var oy, By;
        Py !== this.shownKey && this.show(yb, Py, cb, null !== (oy = null === Zy || void 0 === Zy ? void 0 : Zy.column) && void 0 !== oy ? oy : [], null === (By = null === Zy || void 0 === Zy ? void 0 : Zy.fits) || void 0 === By || By)
      }
      show(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          hy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(yb), this.shownKey = bb, Uy.length > 0 && this.meshes.push(LE(yb, Uy, gl(hy ? rl : uE)));
        for (const {
            free: fy,
            blocked: Zy,
            gaps: cb,
            supports: Py
          }
          of Wy) {
          for (const [bb, Wy, Uy] of fy) {
            const hy = {
              positions: [],
              indices: []
            };
            al(hy, 0, 0, 0);
            const fy = yb.createGameMesh(hy, gl(XE), [bb + .5, Wy + .5, Uy + .5]);
            this.meshes.push(fy), this.pulses.push(fy)
          }
          Zy.length > 0 && this.meshes.push(LE(yb, Zy, gl(nE))), cb.length > 0 && this.meshes.push(LE(yb, cb, gl(uE), 1.06, .07)), Py.length > 0 && this.meshes.push(LE(yb, Py, gl(HE)))
        }
      }
      clear(yb) {
        for (const bb of this.meshes) yb.disposeGameMesh(bb);
        this.meshes = [], this.pulses = []
      }
    }
    class jl {
      constructor() {
        this.stored = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(yb) {
        if (!yb.baf2TermOpen) return !1;
        yb.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [bb, Wy] of yb.baf2TermItems) Wy > 0 ? this.stored.set(bb, Wy) : this.stored.delete(bb);
        if (this.pending = this.pending.filter((bb => bb.seq > yb.baf2TermAcked)), this.silos = yb.baf2TermSilos, this.readOnly = yb.baf2TermReadOnly, this.pocket = !0 === yb.baf2TermPocket, yb.baf2TermReset) this.resort();
        else
          for (const bb of this.stored.keys()) this.order.includes(bb) || this.order.push(bb);
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((yb, bb) => this.amount(bb) - this.amount(yb) || yb.localeCompare(bb))), this.changed()
      }
      take(yb, bb) {
        const Wy = function(yb, bb) {
          const Wy = "number" === typeof yb ? yb : "one" === yb ? 1 : "stack" === yb ? 99 : bb;
          return Math.min(bb, Wy)
        }(yb, this.amount(bb));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: bb,
          amount: Wy
        }), this.recents = [bb, ...this.recents.filter((yb => yb !== bb))].slice(0, 6), this.changed(), bW(this.seq, yb, bb)
      }
      amount(yb) {
        var bb;
        let Wy = null !== (bb = this.stored.get(yb)) && void 0 !== bb ? bb : 0;
        for (const Uy of this.pending) Uy.item === yb && (Wy -= Uy.amount);
        return Math.max(0, Wy)
      }
      items() {
        return this.order.filter((yb => this.amount(yb) > 0))
      }
      recent() {
        return this.recents.filter((yb => this.amount(yb) > 0))
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
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      changed() {
        this.version++;
        for (const yb of this.listeners) yb()
      }
    }
    var DE = Wy(37114);
    const tl = {
      isBlock: yb => void 0 !== Yy.h[yb],
      harvestType: yb => {
        var bb;
        return null === (bb = Yy.h[yb]) || void 0 === bb ? void 0 : bb.harvestType
      },
      harvestLevel: yb => {
        var bb;
        return null === (bb = Yy.h[yb]) || void 0 === bb ? void 0 : bb.harvestLevel
      },
      dropsNothing: yb => {
        var bb;
        return null === (null === (bb = Yy.h[yb]) || void 0 === bb ? void 0 : bb.drops)
      },
      displayName: yb => {
        var bb;
        return null === (bb = wZ.l[yb]) || void 0 === bb ? void 0 : bb.displayName
      },
      description: yb => {
        var bb;
        return null === (bb = wZ.l[yb]) || void 0 === bb ? void 0 : bb.description
      },
      harvests: yb => {
        var bb;
        return null === (bb = wZ.l[yb]) || void 0 === bb ? void 0 : bb.harvests
      },
      level: yb => {
        var bb;
        return null === (bb = wZ.l[yb]) || void 0 === bb ? void 0 : bb.level
      }
    };

    function wE(yb, bb, Wy) {
      return function(yb, bb, Wy, Uy) {
        var hy, fy;
        const Zy = bb.split("|")[0],
          cb = yb.isBlock(bb) ? bb : yb.isBlock(Zy) ? Zy : null;
        if (null === cb || "rock" !== yb.harvestType(cb) || yb.dropsNothing(cb) && !YU.has(Zy)) return null;
        const Py = Wy && "rock" === yb.harvests(Wy) ? null !== (hy = yb.level(Wy)) && void 0 !== hy ? hy : 0 : null,
          oy = null !== (fy = null !== Uy && void 0 !== Uy ? Uy : yb.harvestLevel(cb)) && void 0 !== fy ? fy : 0;
        return (null !== Py ? oy <= Py : 0 === yb.harvestLevel(cb)) ? null : CU(yb, oy)
      }(tl, yb, bb, Wy)
    }

    function kl(yb, bb) {
      return function(yb, bb, Wy) {
        if (bb === mh[0]) return [(0, uy.Ld)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, uy.K.whiteUiText)];
        const Uy = Wy.split("|")[0],
          hy = yb.isBlock(Uy) ? yb.displayName(Uy) : void 0,
          fy = "string" === typeof hy ? hy : hy && "translationKey" in hy ? `$t(${hy.translationKey})` : Uy;
        return [(0, uy.Ld)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: fy
          }
        }, uy.K.whiteUiText), (0, uy.Ld)({
          translationKey: `item:${(0,uy.oe)(bb)}`
        }, uy.K.yellowUiText)]
      }(tl, yb, bb)
    }
    const NE = "buildAFactory2Game:";
    const zl = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function IE(yb) {
      return yb.endsWith(" Ore")
    }
    const xl = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      AE = [],
      dE = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: xl,
        plan: null,
        atomic: AE
      },
      ym = "buildAFactory2Game:",
      bm = new Set(["Splitter", "Sorting Gate"]),
      Wl = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Ul {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = yb, this.planAt = bb, this.tierOf = Wy, this.Df = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.kW = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = dE, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(yb, bb, Wy) {
        var Uy, hy, fy;
        let Zy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const cb = null !== (Uy = null === (hy = yb.MPy(bb)) || void 0 === hy ? void 0 : hy.name) && void 0 !== Uy ? Uy : null,
          Py = yb.isPlayerCrouching(bb),
          oy = 0 === Wy ? null : this.resolve(yb, Wy),
          By = null !== oy && null !== Zy && bm.has(oy.rootName) && function(yb, bb) {
            return Wl.some((Wy => {
              let [Uy, hy] = Wy;
              const fy = yb.getBlockId(bb[0] + Uy, bb[1], bb[2] + hy);
              return 0 !== fy && "Express Belt" === yb.getMetaInfo(fy).rootName
            }))
          }(yb, Zy),
          Ky = this.updatePlan(0 === Wy ? null : Zy),
          ey = this.tierOf(),
          qb = null === Zy ? null : (0, DE.d)(Wy),
          sy = null !== qb && null !== Zy && (0, DE.e)(function(yb) {
            return (bb, Wy, Uy) => yb.getBlockId(bb, Wy, Uy)
          }(yb), Zy[0], Zy[1], Zy[2], qb),
          Sy = this.readAfloat(yb, Wy, Zy);
        if (Wy === this.Df && sy === this.missesMaker && Sy === this.afloat && cb === this.kW && Py === this.crouching && By === this.express && ey === this.tier && !Ky && (!this.targetsLive || !this.liveMoved(Zy))) return;
        this.Df = Wy, this.missesMaker = sy, this.afloat = Sy, this.kW = cb, this.crouching = Py, this.express = By;
        const Ey = By && oy ? function(yb) {
          if (null === yb.info) return null;
          return yb.express ??= {
            ...yb.info,
            detail: `${ym}lookKeepsUpExpress`,
            detailItem: null
          }, yb.express
        }(oy) : null !== oy && sy && null !== qb ? this.besideMaker(oy, Wy, qb) : null !== oy && Sy ? this.hanging(oy) : null !== (fy = null === oy || void 0 === oy ? void 0 : oy.info) && void 0 !== fy ? fy : null;
        this.tier = ey;
        const ly = oy && Ey ? function(yb, bb) {
          var Wy, Uy;
          const hy = Yy.h[yb];
          if (!yb.endsWith(" Ore") || "rock" !== (null === hy || void 0 === hy ? void 0 : hy.harvestType) || 0 === hy.harvestLevel) return null;
          const fy = null !== (Wy = hy.harvestLevel) && void 0 !== Wy ? Wy : 0,
            Zy = bb ? wZ.l[bb] : void 0;
          if ("rock" === (null === Zy || void 0 === Zy ? void 0 : Zy.harvests) && (null !== (Uy = Zy.level) && void 0 !== Uy ? Uy : 0) >= fy) return null;
          const cb = (Py = fy, CU(tl, Py));
          var Py;
          if (null === cb) return null;
          const oy = Ih(cb),
            By = /^[AEIOU]/.test(cb) ? "An" : "";
          if ("rock" === (null === Zy || void 0 === Zy ? void 0 : Zy.harvests) && bb) return {
            key: `${ym}lookToolTooWeak${By}`,
            kW: Ih(bb),
            needed: oy
          };
          return {
            key: cb === mh[0] ? `${ym}lookNeedAnyPickaxe` : `${ym}lookNeedPickaxe${By}`,
            kW: null,
            needed: oy
          }
        }(oy.rootName, cb) : null;
        this.targetsLive = !0 === (null === oy || void 0 === oy ? void 0 : oy.live) && null !== Zy;
        let mb = null;
        this.targetsLive && oy && Zy && this.live && (this.livePos[0] = Zy[0], this.livePos[1] = Zy[1], this.livePos[2] = Zy[2], this.liveVersion = this.live.version(), mb = this.live.line(oy.rootName, Zy));
        const Cy = null === Ey ? xl : function(yb, bb, Wy) {
            const Uy = function(yb, bb, Wy) {
              const Uy = OW(yb);
              if (null === Uy) return null;
              const hy = `${NE}lookPortMode_${Uy}`,
                fy = uU(bb);
              if (fy && Wy) return {
                mode: null,
                detail: hy,
                next: `${NE}lookWrenchPickUp`,
                nextState: null
              };
              const Zy = RW(yb),
                cb = null === Zy ? null : OW(Zy);
              return null === cb ? {
                mode: null,
                detail: hy,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: hy,
                next: fy ? `${NE}lookWrenchNext` : `${NE}lookPortWrench`,
                nextState: `${NE}lookPortState_${cb}`
              }
            }(yb, bb, Wy);
            if (null !== Uy) return Uy;
            const hy = zh(yb, bb, Wy);
            return null === hy.mode && null === hy.next ? xl : hy
          }(yb.blockIdToBlockName(Wy), cb, Py),
          Ty = this.plan,
          Vy = oy && Ey ? this.rowsOf(oy.rootName, ey) : AE,
          Jy = this.snapshot;
        if (!(null === Ey ? !Jy.visible : Jy.visible && Ey === Jy.info && (gb = ly, Gy = Jy.tool, gb === Gy || null !== gb && null !== Gy && gb.key === Gy.key && gb.kW === Gy.kW && gb.needed === Gy.needed) && function(yb, bb) {
            return yb === bb || null !== yb && null !== bb && yb.key === bb.key && JSON.stringify([yb.params, yb.keys]) === JSON.stringify([bb.params, bb.keys])
          }(mb, Jy.live) && function(yb, bb) {
            return yb.mode === bb.mode && yb.detail === bb.detail && yb.next === bb.next && yb.nextState === bb.nextState
          }(Cy, Jy.wrench) && us(Ty, Jy.plan) && Vy === Jy.atomic)) {
          var gb, Gy;
          this.snapshot = null === Ey ? {
            ...Jy,
            visible: !1
          } : {
            info: Ey,
            visible: !0,
            tool: ly,
            live: mb,
            wrench: Cy,
            plan: Ty,
            atomic: Vy
          };
          for (const yb of this.listeners) yb()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = dE, this.Df = 0, this.kW = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(yb, bb, Wy) {
        if (null === Wy || 0 === bb || !cb() || !IE(this.resolve(yb, bb).rootName)) return !1;
        const Uy = `${Wy[0]},${Wy[1]},${Wy[2]},${bb}`,
          hy = performance.now();
        return Uy === this.afloatKey && hy - this.afloatAt < hl ? this.afloat : (this.afloatKey = Uy, this.afloatAt = hy, function(yb, bb) {
          for (const [Wy, Uy, hy] of zl) {
            const fy = bb(yb[0] + Wy, yb[1] + Uy, yb[2] + hy);
            if (void 0 === fy || null !== fy && !IE(fy)) return !1
          }
          return !0
        }(Wy, ((bb, Wy, Uy) => function(yb, bb, Wy, Uy) {
          if (!yb.isBlockInLoadedChunk(bb, Wy, Uy)) return;
          const hy = yb.getBlockId(bb, Wy, Uy);
          return 0 === hy ? null : yb.getMetaInfo(hy).rootName
        }(yb, bb, Wy, Uy))))
      }
      liveMoved(yb) {
        var bb;
        const {
          livePos: Wy
        } = this;
        return null === yb || yb[0] !== Wy[0] || yb[1] !== Wy[1] || yb[2] !== Wy[2] || (null === (bb = this.live) || void 0 === bb ? void 0 : bb.version()) !== this.liveVersion
      }
      updatePlan(yb) {
        const bb = null === yb ? "" : yb.join(","),
          Wy = performance.now();
        if (bb === this.planPos && Wy - this.planMs < 250) return !1;
        this.planPos = bb, this.planMs = Wy;
        const Uy = null === yb ? null : this.planAt([yb[0], yb[1], yb[2]]),
          hy = !us(Uy, this.plan);
        return this.plan = Uy, hy
      }
      besideMaker(yb, bb, Wy) {
        let {
          info: Uy
        } = yb;
        if (null === Uy) return null;
        let hy = this.besideMakerById.get(bb);
        if (void 0 === hy) {
          const yb = "cryo" === Wy ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          hy = {
            ...Uy,
            detail: `${ym}${yb}`,
            detailItem: null
          }, this.besideMakerById.set(bb, hy)
        }
        return hy
      }
      hanging(yb) {
        let {
          info: bb,
          rootName: Wy
        } = yb;
        if (null === bb) return null;
        let Uy = this.afloatByRoot.get(Wy);
        return void 0 === Uy && (Uy = {
          ...bb,
          detail: `${ym}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(Wy, Uy)), Uy
      }
      rowsOf(yb, bb) {
        if (null === bb) return AE;
        const Wy = `${yb}|${bb}`;
        let Uy = this.rowsByKey.get(Wy);
        if (void 0 === Uy) {
          const hy = function(yb, bb) {
            var Wy;
            if (!(yb in Rb)) return [];
            const Uy = null !== (Wy = vW[yb]) && void 0 !== Wy ? Wy : [],
              hy = new Map;
            for (const Zy of rZ(yb, bb))
              if ((Uy.includes(Zy) || uf(Zy.output) && Xf(Zy.output) > Iy(yb)) && Xf(Zy.output) <= bb) {
                var fy;
                const yb = null !== (fy = hy.get(Zy.output)) && void 0 !== fy ? fy : [];
                yb.push(Zy.input), hy.set(Zy.output, yb)
              } return aZ([...hy], (yb => {
              let [bb] = yb;
              return -Xf(bb)
            })).map((yb => {
              let [bb, Wy] = yb;
              return {
                output: bb,
                inputs: Wy
              }
            }))
          }(yb, bb);
          Uy = hy.length > 0 ? hy : AE, this.rowsByKey.set(Wy, Uy)
        }
        return Uy
      }
      resolve(yb, bb) {
        const {
          rootId: Wy,
          rootName: Uy
        } = yb.getMetaInfo(bb), hy = (0, cU.l)(Uy) ? bb : Wy;
        let fy = this.byRootId.get(hy);
        const Zy = cb();
        if (void 0 === fy || fy.nuclear !== Zy) {
          var Py;
          const Wy = function(yb) {
            return ih(tl, yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb)
          }(Uy, yb.blockIdToBlockName(bb));
          fy = {
            info: Wy,
            rootName: Uy,
            live: null !== Wy && !0 === (null === (Py = this.live) || void 0 === Py ? void 0 : Py.handles(Uy)),
            nuclear: Zy
          }, this.byRootId.set(hy, fy)
        }
        return fy
      }
    }
    const hl = 500;
    const fl = (0, Uy.memo)((function(yb) {
      var bb, Wy;
      let {
        store: hy
      } = yb;
      const {
        t: fy
      } = (0, Ch.D)(), [Zy, cb] = (0, Uy.useState)((() => hy.get()));
      (0, Uy.useEffect)((() => (cb(hy.get()), hy.subscribe((() => {
        cb(hy.get())
      })))), [hy]);
      const {
        openInGameMenuName: Py,
        openEverythingMenuName: oy,
        isTouchScreen: By
      } = (0, eh.h)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Ky,
        tool: ey,
        live: qb,
        wrench: sy,
        atomic: Sy
      } = Zy, Ey = Zy.visible && null === Py && null === oy;
      if (null === Ky) return null;
      const ly = null !== sy.detail ? fy(sy.detail) : null !== (bb = Zy.plan) && void 0 !== bb && bb.ctrl ? fy("buildAFactory2Game:lookPlanCtrl") : null !== Ky.detail ? fy(Ky.detail, null === Ky.detailItem ? void 0 : {
        item: fy(Ky.detailItem)
      }) : null;
      return (0, mZ.jsxs)("div", {
        className: Sh()("Baf2LookTarget", {
          Visible: Ey
        }),
        "aria-hidden": !Ey,
        children: [(0, mZ.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: fy(Ky.name)
        }), null !== Zy.plan && (0, mZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: fy(Zy.plan.key, {
            kind: fy(Zy.plan.kindKey),
            w: String(Zy.plan.w),
            h: String(Zy.plan.h),
            d: String(Zy.plan.d),
            count: String(Zy.plan.count)
          })
        }), void 0 !== (null === (Wy = Zy.plan) || void 0 === Wy ? void 0 : Wy.why) && (0, mZ.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: fy(Zy.plan.why)
        }), null !== sy.mode && (0, mZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: fy(sy.mode)
        }), null !== ey ? (0, mZ.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: fy(ey.key, {
            item: fy(ey.needed),
            kW: null === ey.kW ? "" : fy(ey.kW)
          })
        }) : null !== qb ? (0, mZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: fy(qb.key, IP(fy, qb))
        }) : null !== ly && (0, mZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ly
        }), Sy.length > 0 && (0, mZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: fy("buildAFactory2Game:lookAtomicRecipes", {
            list: Sy.map((yb => {
              let {
                output: bb,
                inputs: Wy
              } = yb;
              const Uy = Wy.length > 1 ? ` ${fy("buildAFactory2Game:recipeMore",{count:String(Wy.length-1)})}` : "";
              return `${fy(Ih(Wy[0]))}${Uy} \u2192 ${fy(Ih(bb))}`
            })).join(", ")
          })
        }), null !== sy.next && (0, mZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: fy(sy.next, {
            state: null === sy.nextState ? "" : fy(sy.nextState),
            use: fy(By ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Zl = Wy(37200);
    const cm = [],
      Pl = [
        [0, -1, 0]
      ];

    function ol(yb) {
      const bb = [yb];
      for (let Wy = 1; Wy <= 4; Wy++) Wy > 1 && bb.push(`${yb}|meta|rot${Wy}`), bb.push(`${yb}|meta|rot${Wy}|Running`);
      return bb
    }

    function Bl(yb, bb) {
      return [Math.floor(yb[0] / bb), Math.floor(yb[1] / bb), Math.floor(yb[2] / bb)]
    }

    function Kl(yb, bb, Wy) {
      return `${yb},${bb},${Wy}`
    }

    function el(yb) {
      const bb = yb.split("|")[0];
      if (!WW(bb)) return cm;
      const Wy = Rb[bb];
      if (Nb(Wy)) return Pl;
      const Uy = BE(yb);
      return zW(Wy) ? [
        [-Uy[0], -Uy[1], -Uy[2]]
      ] : Eh(Wy) ? function(yb, bb) {
        const Wy = yb[0] - 2 * bb[0],
          Uy = yb[2] - 2 * bb[2],
          hy = [];
        for (let fy = -1; fy <= 1; fy++)
          for (let bb = -1; bb <= 1; bb++) hy.push([Wy + fy, yb[1], Uy + bb]);
        return hy
      }([0, 0, 0], Uy) : cm
    }
    const qm = [.5, .5, .5],
      sl = [.2, .8, .3],
      Sl = [.45, 1, .5];
    class El {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(yb) {
        this.indexed = !0;
        for (const bb of Tb)
          for (const Wy of ol(bb)) {
            const bb = yb.blockNameToBlockId(Wy, !0),
              Uy = el(Wy);
            null !== bb && Uy.length > 0 && (this.offsetsList.push(Uy), this.offsetsIndexById[bb] = this.offsetsList.length)
          }
      }
      onAfterRender(yb, bb) {
        this.indexed || this.index(yb);
        const Wy = performance.now();
        if (Wy - this.lastCheckMs < 100) return;
        this.lastCheckMs = Wy, this.checks++;
        const Uy = Ws.c.DU,
          [hy, fy, Zy] = Bl(bb, Uy);
        let cb = !1;
        const Py = [];
        let oy = 0;
        for (let By = hy - 2; By <= hy + 2; By++)
          for (let bb = fy - 1; bb <= fy + 1; bb++)
            for (let hy = Zy - 2; hy <= Zy + 2; hy++) {
              const fy = oy++,
                Zy = Kl(By, bb, hy),
                Ky = yb.getChunkVersion(By, bb, hy);
              let ey = this.chunks.get(Zy);
              null !== Ky ? (ey || (ey = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Zy, ey)), ey.seenAt = this.checks, ey.checkedVersion !== Ky && (ey.checkedVersion = Ky, cb = !0), ey.scannedVersion !== Ky && Wy - ey.scannedAt >= 500 && Py.push({
                slot: fy,
                entry: ey,
                origin: [By * Uy, bb * Uy, hy * Uy]
              })) : (cb ||= void 0 !== ey, this.chunks.delete(Zy))
            }
        this.scanDue(yb, Py) && (cb = !0);
        for (const [By, Ky] of this.chunks) Ky.seenAt !== this.checks && (cb ||= Ky.machines.length > 0, this.chunks.delete(By));
        for (const By of this.chunks.values())
          for (const [bb, Wy, Uy] of By.cellChunks)(Math.abs(bb - hy) > 2 || Math.abs(Wy - fy) > 1 || Math.abs(Uy - Zy) > 2) && this.watchCellChunk(yb, bb, Wy, Uy) && (cb = !0);
        for (const [By, Ky] of this.cellChunks) Ky.seenAt !== this.checks && this.cellChunks.delete(By);
        cb && this.refresh(yb)
      }
      dispose(yb) {
        this.clearMeshes(yb), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(yb, bb) {
        const Wy = Math.max(bb.findIndex((yb => {
          let {
            slot: bb
          } = yb;
          return bb >= this.scanFrom
        })), 0);
        let Uy = 96;
        for (let hy = 0; hy < bb.length; hy++) {
          const {
            slot: fy,
            entry: Zy,
            origin: cb
          } = bb[(Wy + hy) % bb.length];
          if (Uy -= this.scan(yb, Zy, cb), Uy <= 0) {
            this.scanFrom = fy + 1;
            break
          }
        }
        return bb.length > 0
      }
      scan(yb, bb, Wy) {
        let [Uy, hy, fy] = Wy;
        const Zy = Ws.c.DU,
          cb = this.hits;
        cb.length = 0;
        const Py = yb.scanBlocks(Uy, hy, fy, Uy + Zy, hy + Zy, fy + Zy, this.offsetsIndexById, cb),
          oy = [];
        for (let By = 0; By < cb.length; By += 4) oy.push({
          pos: [cb[By], cb[By + 1], cb[By + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[cb[By + 3]] - 1]
        });
        return bb.machines = oy, bb.cellChunks = function(yb, bb) {
          const Wy = new Set,
            Uy = [];
          for (const {
              pos: hy,
              offsets: fy
            }
            of yb)
            for (const [yb, Zy, cb] of fy) {
              const fy = Bl([hy[0] + yb, hy[1] + Zy, hy[2] + cb], bb),
                Py = Kl(...fy);
              Wy.has(Py) || (Wy.add(Py), Uy.push(fy))
            }
          return Uy
        }(oy, Zy), bb.scannedVersion = bb.checkedVersion, bb.scannedAt = performance.now(), Math.max(Py, 1)
      }
      watchCellChunk(yb, bb, Wy, Uy) {
        const hy = Kl(bb, Wy, Uy),
          fy = yb.getChunkVersion(bb, Wy, Uy),
          Zy = this.cellChunks.get(hy);
        return null === fy ? this.cellChunks.delete(hy) : (null === Zy || void 0 === Zy ? void 0 : Zy.version) === fy ? (Zy.seenAt = this.checks, !1) : (this.cellChunks.set(hy, {
          version: fy,
          seenAt: this.checks
        }), !0)
      }
      refresh(yb) {
        const bb = function(yb, bb) {
            const Wy = new Set,
              Uy = [];
            for (const {
                pos: hy,
                offsets: fy
              }
              of yb)
              for (const [yb, Zy, cb] of fy) {
                const fy = hy[0] + yb,
                  Py = hy[1] + Zy,
                  oy = hy[2] + cb,
                  By = `${fy},${Py},${oy}`;
                Wy.has(By) || (Wy.add(By), bb(fy, Py, oy) && Uy.push([fy, Py, oy]))
              }
            return Uy
          }([...this.chunks.values()].flatMap((yb => yb.machines)), ((bb, Wy, Uy) => yb.isBlockInLoadedChunk(bb, Wy, Uy) && 0 === yb.getBlockId(bb, Wy, Uy))),
          Wy = bb.join(";");
        Wy !== this.shownKey && (this.shownKey = Wy, this.clearMeshes(yb), bb.length > 0 && (this.meshes = [this.build(yb, bb, !1), this.build(yb, bb, !0)]))
      }
      build(yb, bb, Wy) {
        const Uy = bb[0],
          hy = [],
          fy = [];
        for (const [Zy, cb, Py] of bb)(0, Zl.d)(hy, fy, [Zy - Uy[0] + .5, cb - Uy[1] + .5, Py - Uy[2] + .5], qm, Wy);
        return yb.createGameMesh({
          positions: hy,
          indices: fy
        }, {
          rgb: Wy ? Sl : sl,
          alpha: .4
        }, Uy)
      }
      clearMeshes(yb) {
        for (const bb of this.meshes) yb.disposeGameMesh(bb);
        this.meshes = []
      }
    }
    const ll = 1 / .6,
      mm = 200,
      Cl = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Tl = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Vl = 2 * Math.PI / 3;
    class Jl {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cl;
        this.style = yb, this.particles = null, this.points = new Float32Array(800), this.budget = mm, this.lastMs = 0
      }
      static blade() {
        return new Jl(Tl)
      }
      Gl(yb, bb) {
        const Wy = Math.min(bb.arcStruck, bb.arcPoints.length);
        this.draw(yb, [bb.arcFrom, ...bb.arcPoints], bb.arcPoints.slice(0, Wy))
      }
      onBlade(yb, bb) {
        const [Wy, Uy, hy] = bb.bladeCentre, [fy, Zy] = bb.bladeFacing, cb = Wy - 1.5 * fy, Py = hy - 1.5 * Zy, oy = Math.atan2(Zy, fy), By = [];
        for (let Ky = 0; Ky <= 8; Ky++) {
          const yb = oy - Vl / 2 + Vl * Ky / 8;
          By.push([cb + 2.5 * Math.cos(yb), Uy, Py + 2.5 * Math.sin(yb)])
        }
        this.draw(yb, By, bb.bladeStruck)
      }
      dispose() {
        var yb;
        null === (yb = this.particles) || void 0 === yb || yb.stop(), this.particles = null
      }
      draw(yb, bb, Wy) {
        if (!yb.particlesEnabled() || bb.length < 2) return;
        const Uy = performance.now();
        this.budget = Math.min(mm, this.budget + (Uy - this.lastMs) / 1e3 * mm), this.lastMs = Uy;
        const hy = [];
        let fy = 0,
          Zy = bb[0];
        for (const ly of bb.slice(1)) {
          const yb = Math.min(48, Math.round(Math.hypot(ly[0] - Zy[0], ly[1] - Zy[1], ly[2] - Zy[2]) * this.style.perBlock));
          hy.push([Zy, ly, yb]), fy += yb, Zy = ly
        }
        const cb = Wy.length;
        fy += 10 * cb;
        const Py = fy > this.budget ? this.budget / fy : 1;
        if (0 === fy || Py * fy < 1) return;
        const oy = bb[0],
          [By, Ky, ey] = oy,
          qb = this.points;
        let sy = 0;
        const Sy = (yb, bb, Wy, Uy) => {
          const hy = 4 * sy;
          qb[hy] = yb - By, qb[hy + 1] = bb - Ky, qb[hy + 2] = Wy - ey, qb[hy + 3] = Uy, sy++
        };
        hy.forEach(((yb, bb) => {
          let [Wy, Uy, hy] = yb;
          const fy = Math.min(Math.floor(hy * Py), mm - sy),
            Zy = Math.hypot(Uy[0] - Wy[0], Uy[1] - Wy[1], Uy[2] - Wy[2]),
            cb = 0 === bb && Zy > 0 ? Math.min(.5, .1 * Zy) / Zy : 0;
          for (let Py = 0; Py < fy; Py++) {
            const yb = cb + (Py + .5) / fy * (1 - cb);
            Sy(Wy[0] + (Uy[0] - Wy[0]) * yb, Wy[1] + (Uy[1] - Wy[1]) * yb, Wy[2] + (Uy[2] - Wy[2]) * yb, .15)
          }
        }));
        const Ey = Math.floor(10 * Py);
        for (let ly = 0; ly < cb; ly++) {
          const [yb, bb, Uy] = Wy[ly];
          for (let Wy = 0; Wy < Ey && sy < mm; Wy++) Sy(yb, bb, Uy, 2.5)
        }
        this.budget -= sy, this.particles ??= yb.createParticles(function(yb) {
          const [bb, Wy] = yb.colours;
          return {
            texture: "square_particle",
            Hy: 400,
            minLifeTime: yb.life[0] / ll,
            maxLifeTime: yb.life[1] / ll,
            minSize: yb.size[0],
            maxSize: yb.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [bb[0], bb[1], bb[2], 1],
              maxColor: [Wy[0], Wy[1], Wy[2], 1]
            }, {
              timeFraction: 1,
              minColor: [bb[0], bb[1], bb[2], 0],
              maxColor: [Wy[0], Wy[1], Wy[2], 0]
            }],
            blendMode: vP.e.Add
          }
        }(this.style), {
          pos: oy
        }), this.particles.emitPoints(oy, qb, sy)
      }
    }
    const gm = new Set(["Sky Spring"]);

    function Gl(yb, bb, Wy) {
      const Uy = yb.split("|")[0];
      return "Air" !== bb || Wy || ! function(yb) {
        const bb = yb.split("|")[0];
        return void 0 !== db[bb] || gm.has(bb)
      }(Uy) ? null : yb
    }
    class Ol {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(yb) {
        const bb = yb - this.lastTapAt >= 300;
        return this.lastTapAt = yb, bb
      }
    }
    class Rl {
      constructor() {
        this.presses = new Ol, this.predicted = null
      }
      tap(yb, bb) {
        const Wy = this.presses.isNewPress(bb);
        return Wy && (this.predicted = {
          station: yb,
          at: bb
        }), Wy
      }
      consumeServerOpen(yb, bb) {
        const Wy = this.predicted;
        return !(null === Wy || Wy.station !== yb || bb - Wy.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class vmy {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(yb, bb) {
        return yb && (this.thrustAt = bb), bb - this.thrustAt < 200
      }
    }
    const im = [.1, .05, .1],
      Ml = {
        texture: "effect_5",
        Hy: Math.ceil(48),
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
        blendMode: vP.e.OneOne
      };
    class Yl {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new vmy, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      Gl(yb, bb) {
        for (const [Wy, Uy] of bb.baf2JetFlames) yb.isLocalPlayer(Wy) || (Uy ? this.lit.add(Wy) : this.lit.delete(Wy))
      }
      onAfterRender(yb, bb) {
        const Wy = performance.now(),
          Uy = this.hold.lit(this.selfThrusting(yb, bb), Wy);
        for (const [hy, fy] of this.flames)(hy === bb ? Uy : this.lit.has(hy)) || this.setEmitting(fy, !1), hy === bb || yb.getPositionView(hy) ? !fy.emitting && Wy - fy.offAt >= 1300 && (fy.particles.stop(), this.flames.delete(hy)) : (fy.particles.dispose(), this.flames.delete(hy), this.lit.delete(hy));
        Uy && this.draw(yb, bb, bb);
        for (const hy of this.lit) this.draw(yb, bb, hy)
      }
      dispose() {
        for (const yb of this.flames.values()) yb.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(yb, bb) {
        var Wy;
        const Uy = yb.getLocalPlayerMovement();
        return !!Uy && (null !== (hy = {
          option: null !== (Wy = yb.getClientOption(bb, "jumpHoldThrust")) && void 0 !== Wy ? Wy : null,
          jumping: Uy.jumpHeld,
          onGround: Uy.onGround,
          alive: yb.isAlive(bb)
        }).option && hy.option.maxUpSpeed >= 0 && hy.jumping && !hy.onGround && hy.alive);
        var hy
      }
      draw(yb, bb, Wy) {
        var Uy, hy;
        const fy = this.pos;
        if (!yb.readDrawnPosition(Wy, fy)) return;
        const Zy = yb.readDrawnPosition(bb, this.camera) ? this.camera : fy;
        if (!((fy[0] - Zy[0]) ** 2 + (fy[1] - Zy[1]) ** 2 + (fy[2] - Zy[2]) ** 2 < 1600) || !yb.particlesEnabled()) {
          const yb = this.flames.get(Wy);
          return void(yb && this.setEmitting(yb, !1))
        }
        const cb = null !== (Uy = this.flames.get(Wy)) && void 0 !== Uy ? Uy : this.create(yb, Wy, fy),
          Py = null !== (hy = yb.getDrawnHeading(Wy)) && void 0 !== hy ? hy : 0,
          oy = this.at;
        oy[0] = fy[0] - .35 * Math.sin(Py), oy[1] = fy[1] + 1.05, oy[2] = fy[2] - .35 * Math.cos(Py), cb.particles.moveTo(oy), this.setEmitting(cb, !0)
      }
      setEmitting(yb, bb) {
        yb.emitting !== bb && (yb.emitting = bb, bb || (yb.offAt = performance.now()), yb.particles.setEmitRate(bb ? 60 : 0))
      }
      create(yb, bb, Wy) {
        const Uy = {
          particles: yb.createParticles(Ml, {
            pos: Wy,
            half: im
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(bb, Uy), Uy
      }
    }

    function Xl(yb) {
      return "Reactor Frame" === IW("reactor", yb)
    }

    function nl(yb) {
      return YW("reactor", yb) && !Xl(yb) && (yb.startsWith("Reactor Glass") || yb.startsWith("Reactor Port"))
    }
    const ul = "baf2Goal";
    class rm {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Oh.g.subscribe("setDirectionArrow", (yb => {
          let {
            id: bb,
            position: Wy
          } = yb;
          bb === ul && (this.goal = Wy, this.checkedAt = -1 / 0)
        })), Oh.g.subscribe("clearDirectionArrow", (yb => {
          let {
            id: bb
          } = yb;
          null !== bb && bb !== ul || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const yb of this.subs) Oh.g.unsubscribe(yb)
      }
      sideOf(yb, bb, Wy, Uy) {
        const hy = this.goal;
        if (!hy) return 0;
        Wy - this.checkedAt > 1e3 && (this.checkedAt = Wy, this.open = function(yb, bb) {
          const [Wy, Uy, hy] = yb.map(Math.floor);
          if (!nl(bb(Wy, Uy, hy))) return null;
          for (const [fy, Zy] of [
              [1, 0],
              [0, 1]
            ]) {
            const yb = bb(Wy + fy, Uy, hy + Zy),
              cb = bb(Wy - fy, Uy, hy - Zy);
            if (Xl(cb) && nl(yb)) return [fy, 0, Zy];
            if (Xl(yb) && nl(cb)) return [0 - fy, 0, 0 - Zy]
          }
          return null
        }(hy, ((bb, Wy, Uy) => yb.blockIdToBlockName(yb.getBlockId(bb, Wy, Uy)))));
        const fy = this.open;
        if (!fy) return 0;
        const Zy = Uy(hy);
        if (Math.abs(Zy.x - bb.x) > .05 || Math.abs(Zy.y - bb.y) > .05) return 0;
        const cb = Uy([hy[0] + fy[0], hy[1], hy[2] + fy[2]]).x - Zy.x;
        return Math.abs(cb) < .3 ? 0 : cb > 0 ? 1 : -1
      }
    }
    class Hl {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new rm, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.rh = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.pE = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((yb => {
          for (const bb of yb) bb.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(bb.target, bb.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.rh || this.clear()
        }, window.addEventListener("resize", this.pE)
      }
      onAfterRender(yb, bb) {
        var Wy;
        this.api = yb, this.project = null !== (Wy = null === bb || void 0 === bb ? void 0 : bb.projectWorldPosToScreenPos) && void 0 !== Wy ? Wy : null, this.queued || this.rh || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.rh = !0;
        for (const yb of this.moved.keys()) yb.style.transform = "";
        this.moved.clear();
        for (const yb of this.sideLabels.keys()) yb.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.pE)
      }
      clear() {
        for (const fy of this.moved.keys()) fy.isConnected || this.moved.delete(fy);
        for (const fy of this.sideLabels.keys()) fy.isConnected || this.sideLabels.delete(fy);
        if (0 === this.arrows.length) return;
        const yb = performance.now(),
          bb = yb - this.refreshedAt > 1e3;
        bb && (this.refreshedAt = yb, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const Wy = this.trackerBox(),
          Uy = this.barsBox(),
          hy = this.toastBox(bb);
        (Wy || Uy || hy) && bb && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let fy = 0; fy < this.arrows.length; fy++) {
          const bb = this.arrows[fy];
          this.labelOffsets.set(bb, this.runLabelAside(bb, yb));
          const Zy = (Wy ? this.shiftLeftOf(bb, Wy) : 0) || this.shiftOnScreen(bb),
            cb = Math.min(Uy ? this.liftAbove(bb, Uy, Zy) : 0, hy ? this.liftAbove(bb, hy, Zy) : 0),
            Py = this.moved.get(bb);
          if (0 !== Zy || 0 !== cb) {
            const yb = 0 === cb ? `translateX(${Zy}px)` : `translate(${Zy}px, ${cb}px)`;
            Py !== yb && (bb.style.transform = yb, this.moved.set(bb, yb))
          } else void 0 !== Py && (bb.style.transform = "", this.moved.delete(bb))
        }
      }
      trackerBox() {
        var yb, bb;
        const Wy = null !== (yb = this.tracker) && void 0 !== yb && yb.isConnected ? this.tracker : null !== (bb = this.trackers[0]) && void 0 !== bb ? bb : null;
        if (Wy !== this.tracker && this.watch(Wy), this.boxStale && Wy) {
          var Uy, hy, fy;
          this.boxStale = !1;
          const yb = Wy.closest(".NoRoom") ? null : Wy.getBoundingClientRect(),
            bb = yb && yb.width > 0 ? null === (Uy = this.hud) || void 0 === Uy ? void 0 : Uy.getBoundingClientRect() : void 0,
            Zy = yb && bb ? Math.max(yb.top, bb.top) : null !== (hy = null === yb || void 0 === yb ? void 0 : yb.top) && void 0 !== hy ? hy : 0,
            cb = yb && bb ? Math.min(yb.bottom, bb.bottom) : null !== (fy = null === yb || void 0 === yb ? void 0 : yb.bottom) && void 0 !== fy ? fy : 0;
          this.box = yb && yb.width > 0 && cb > Zy ? {
            left: yb.left,
            top: Zy,
            right: yb.right,
            bottom: cb
          } : null
        }
        return Wy ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var yb;
          this.barsStale = !1;
          const bb = null === (yb = this.statBars[0]) || void 0 === yb ? void 0 : yb.getBoundingClientRect();
          this.bars = bb && bb.width > 0 && bb.height > 0 ? {
            left: bb.left,
            top: bb.top,
            right: bb.right,
            bottom: bb.bottom
          } : null
        }
        return this.bars
      }
      toastBox(yb) {
        var bb;
        const Wy = null !== (bb = this.toasts[0]) && void 0 !== bb ? bb : null;
        if (Wy !== this.toastEl || yb && Wy) {
          this.toastEl = Wy;
          const yb = null === Wy || void 0 === Wy ? void 0 : Wy.getBoundingClientRect();
          this.toast = yb && yb.width > 0 && yb.height > 0 ? {
            left: yb.left,
            top: yb.top,
            right: yb.right,
            bottom: yb.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(yb, bb, Wy) {
        var Uy;
        const hy = this.anchorOf(yb);
        if (!hy) return 0;
        const fy = hy.x + Wy + (null !== (Uy = this.labelOffsets.get(yb)) && void 0 !== Uy ? Uy : 0),
          {
            halfWidth: Zy,
            labelled: cb
          } = this.extentOf(yb),
          Py = hy.y + this.em * (cb ? 6.2 : 3);
        return Py < bb.top - 6 || fy + Zy < bb.left - 6 || fy - Zy > bb.right + 6 ? 0 : bb.top - 6 - Py
      }
      watch(yb) {
        var bb, Wy;
        this.tracker && this.sizes.unobserve(this.tracker), null === (bb = this.hud) || void 0 === bb || bb.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = yb, this.hud = null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.closest(".Baf2QuestHud")) && void 0 !== Wy ? Wy : null, this.box = null, this.boxStale = !0, yb && this.sizes.observe(yb), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(yb, bb) {
        var Wy;
        const Uy = this.anchorOf(yb);
        if (!Uy) return 0;
        const {
          y: hy
        } = Uy, fy = Uy.x + (null !== (Wy = this.labelOffsets.get(yb)) && void 0 !== Wy ? Wy : 0), Zy = this.em, {
          halfWidth: cb,
          labelled: Py
        } = this.extentOf(yb), oy = hy - Zy, By = fy + cb;
        return hy + Zy * (Py ? 6.2 : 3) < bb.top || oy > bb.bottom || By < bb.left - 6 || fy - cb > bb.right ? 0 : Math.max(bb.left - 6 - By, 6 - (fy - cb))
      }
      shiftOnScreen(yb) {
        var bb;
        const Wy = this.anchorOf(yb);
        if (!Wy) return 0;
        const {
          halfWidth: Uy
        } = this.extentOf(yb), hy = Wy.x + (null !== (bb = this.labelOffsets.get(yb)) && void 0 !== bb ? bb : 0), fy = hy + Uy - (this.innerWidth - 6);
        return fy > 0 ? -fy : Math.max(0, 6 - (hy - Uy))
      }
      runLabelAside(yb, bb) {
        var Wy;
        let Uy = null;
        for (let Zy = 0; Zy < yb.children.length; Zy++) yb.children[Zy].classList.contains("DirectionArrowLabel") && (Uy = yb.children[Zy]);
        if (!Uy) return 0;
        const hy = yb.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(yb) : null,
          fy = (hy && this.api ? this.side.sideOf(this.api, {
            x: hy.x / this.innerWidth * 100,
            y: hy.y / this.innerHeight * 100
          }, bb, this.project) : 0) * this.halfWidthOf(Uy);
        return fy !== (null !== (Wy = this.sideLabels.get(Uy)) && void 0 !== Wy ? Wy : 0) && (Uy.style.transform = 0 === fy ? "" : `translateX(-50%) translateX(${fy}px)`, 0 === fy ? this.sideLabels.delete(Uy) : this.sideLabels.set(Uy, fy)), fy
      }
      extentOf(yb) {
        let bb = this.em,
          Wy = !1;
        for (let Uy = 0; Uy < yb.children.length; Uy++) {
          const hy = yb.children[Uy],
            fy = hy.classList.contains("DirectionArrowLabel");
          Wy ||= fy, (fy || hy.classList.contains("DirectionArrowDistance")) && (bb = Math.max(bb, this.halfWidthOf(hy)))
        }
        return {
          halfWidth: bb,
          labelled: Wy
        }
      }
      halfWidthOf(yb) {
        let bb = this.halfWidths.get(yb);
        return void 0 === bb && (bb = yb.offsetWidth / 2, this.halfWidths.set(yb, bb), this.sizes.observe(yb), this.labels.add(yb)), bb
      }
      forgetGoneLabels() {
        for (const yb of this.labels) yb.isConnected || (this.sizes.unobserve(yb), this.halfWidths.delete(yb), this.labels.delete(yb))
      }
      anchorOf(yb) {
        const bb = yb.style.translate,
          Wy = this.anchors.get(yb);
        if (Wy && Wy.translate === bb && Wy.innerWidth === this.innerWidth && Wy.innerHeight === this.innerHeight) return Wy;
        const Uy = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(bb);
        if (!Uy) return null;
        const hy = {
          translate: bb,
          x: parseFloat(Uy[1]) / 100 * this.innerWidth,
          y: parseFloat(Uy[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(yb, hy), hy
      }
    }
    const am = "Baf2ArrowText";

    function Fl(yb, bb) {
      const Wy = yb.rows.find((yb => yb.current));
      return ny(yb.tutorial) && null !== Wy && void 0 !== Wy && Wy.item && af(Wy) && ib(Wy.item).includes(bb) ? Wy.item : null
    }
    const pl = new class {
      constructor(yb) {
        this.select = yb, this.picks = new Map
      }
      open(yb, bb, Wy) {
        const Uy = Fl(bb, yb);
        null !== Uy && this.cU(yb, Uy, Wy)
      }
      follow(yb, bb) {
        if (cb())
          for (const [Wy, {
              item: Uy,
              had: hy
            }] of this.picks) {
            const fy = Fl(yb, Wy);
            fy !== Uy && (null !== fy && bb(Uy) > hy ? this.cU(Wy, fy, bb) : this.picks.delete(Wy))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      cU(yb, bb, Wy) {
        this.picks.set(yb, {
          item: bb,
          had: Wy(bb)
        }), this.select(yb, bb)
      }
    }(Rh.p);

    function Ll(yb) {
      return bb => {
        let Wy = 0;
        for (const Uy of yb.getInventoryItems())(null === Uy || void 0 === Uy ? void 0 : Uy.name) === bb && (Wy += null === Uy.amount ? 1 : Math.max(Uy.amount, 0));
        return Wy
      }
    }

    function Ql(yb, bb, Wy, Uy) {
      yb.getClientOption(bb, "canCraft") && "inventory" !== eh.d.get("openInGameMenuName") && (pl.open(Wy, Uy.get(), Ll(yb)), Oh.g.EZ("toggleMenu", `inventory|${Wy}`))
    }
    let jm = null,
      Dl = !1;

    function tm(yb) {
      const bb = Ef();
      yb === jm && bb === Dl || (jm = yb, Dl = bb, (0, Rh.q)(function(yb, bb) {
        const Wy = new Map;
        for (let Uy = yb + 1; Uy <= hy.length; Uy++) {
          const hy = Ff(Uy, yb, bb);
          if (hy)
            for (const bb of ly(Uy).unlocks) Wy.set(bb, {
              ...hy,
              stepsAway: Uy - yb
            })
        }
        return Wy
      }(yb, bb)))
    }

    function wl() {
      return (0, Rh.w)(aZ(Object.keys(vb), Xf)), () => {
        (0, Rh.w)([])
      }
    }
    const km = "buildAFactory2Game:",
      Nl = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      zm = {
        on: `${km}tutorialButtonOn`,
        hud: `${km}tutorialButtonHud`,
        off: `${km}tutorialButtonOff`
      },
      Il = {
        on: `${km}tutorialPickedOn`,
        hud: `${km}tutorialPickedHud`,
        off: `${km}tutorialPickedOff`
      };

    function xm(yb, bb, Wy) {
      let Uy = null,
        hy = () => {};
      const fy = fy => {
        var Zy;
        let {
          tutorial: cb,
          tutorialKnown: Py
        } = fy;
        (null === (Zy = Uy) || void 0 === Zy ? void 0 : Zy.tutorial) === cb && Uy.tutorialKnown === Py || (Uy = {
          tutorial: cb,
          tutorialKnown: Py
        }, hy = (0, Bh.s)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: zm[cb],
          icon: {
            kind: "icon",
            name: Nl[cb]
          },
          iconOnly: !0,
          disabled: !Py,
          className: "Baf2TutorialButton",
          onClick: () => {
            var Uy;
            (Uy => {
              const hy = bb.setTutorial(Uy);
              yb.send(`baf2tutorial ${Uy} ${hy}`), Wy.show({
                baf2ToastText: [(0, uy.Ld)({
                  translationKey: Il[Uy]
                }, uy.K.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((Uy = bb.get().tutorial, Xy[(Xy.indexOf(Uy) + 1) % Xy.length]))
          }
        }))
      };
      fy(bb.get());
      const Zy = Oh.g.subscribe(vf, fy);
      return () => {
        Oh.g.unsubscribe(Zy), hy()
      }
    }

    function Al(yb, bb, Wy) {
      var Uy, hy;
      const fy = yb.getTargetedBlock();
      if (!fy || ! function(yb, bb, Wy) {
          if ("Chest" !== bb) return !1;
          const Uy = yb.split("|")[0];
          if (!WW(Uy) || 0 === Rb[Uy].outputSlots.length) return !1;
          const hy = BE(yb);
          return Wy[0] === hy[0] && Wy[1] === hy[1] && Wy[2] === hy[2]
        }(Wy, null === (Uy = yb.MPy(bb)) || void 0 === Uy ? void 0 : Uy.name, fy.normal)) return !1;
      const [Zy, cb, Py] = fy.bc, oy = yb.getBlockId(Zy, cb, Py);
      return 0 === oy || !0 === (null === (hy = Yy.h[oy]) || void 0 === hy ? void 0 : hy.canBePlacedOver)
    }
    var dl = Wy(35521);
    const yC = new Set(PW.b);
    class bC {
      constructor(yb) {
        this.toasts = yb, this.lastAt = -1 / 0
      }
      onAltAction(yb, bb, Wy) {
        const Uy = yb.getTargetedBlock();
        if (!Uy || function(yb) {
            const bb = yb.split("|")[0];
            return WW(bb) || null !== EU(bb) || Oy(bb) || PW.b.includes(bb)
          }(Wy) && !yC.has(Wy.split("|")[0])) return;
        const hy = yb.MPy(bb);
        if (!hy || !yC.has(hy.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const fy = hy.typeObj.id,
          [Zy, cb, Py] = Uy.bc,
          oy = yb.getBlockId(Zy, cb, Py),
          By = Yy.h[oy];
        (0 === oy || null !== By && void 0 !== By && By.TW || null !== By && void 0 !== By && By.canBePlacedOver) && yb.isSolidToPlayerBlockId(fy) && yb.canModifyBlockAt(Zy, cb, Py) && yb.Ncy(Zy, cb, Py, fy) && !yb.Ncy(Zy, cb, Py, fy, bb) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, uy.Ld)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, uy.K.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Wm {
      constructor(yb) {
        this.show = yb, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(yb, bb, Wy) {
        var Uy;
        if (!bb) return this.started = null, void this.gatedThisHold.clear();
        if (!yb) return void(this.started = null);
        const hy = `${yb.x},${yb.y},${yb.z},${yb.kW}`;
        if (hy === this.started) return;
        this.started = hy;
        const fy = MU(yb.y) ? wE(yb.block, yb.kW, yb.level) : null;
        if (null === fy || this.gatedThisHold.has(hy)) return;
        this.gatedThisHold.add(hy);
        const Zy = yb.block.split("|")[0];
        Wy - (null !== (Uy = this.hintedAt.get(Zy)) && void 0 !== Uy ? Uy : -1 / 0) < 5e3 || (this.hintedAt.set(Zy, Wy), this.show({
          baf2ToastText: kl(fy, yb.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Um = Wy(33);

    function hm(yb, bb) {
      const Wy = [...yb.baf2CoreBankPaused];
      for (const [hy] of yb.baf2CoreBanked) Wy.push(hy);
      for (const Zy of hy) {
        for (const {
            item: yb
          }
          of Zy.cost) Wy.push(yb);
        for (const yb of Zy.newDeposits) Wy.push(yb.block);
        for (const yb of Zy.unlocks) Wy.push(yb, My(yb));
        Zy.reward && Wy.push(Zy.reward);
        for (const {
            item: yb
          }
          of null !== (Uy = null === (fy = Zy.charge) || void 0 === fy ? void 0 : fy.items) && void 0 !== Uy ? Uy : []) {
          var Uy, fy;
          Wy.push(yb)
        }
      }
      return {
        message: yb,
        itemNames: bb([...new Set(Wy)])
      }
    }
    const fm = "baf2MultiblockGuide";
    const Zm = new Map;
    const cC = function(yb, bb, Wy, hy) {
      let {
        localPlayerId: fy
      } = hy;
      const Zy = new oc,
        cb = new tq,
        oy = new Ae,
        By = new Ie(oy),
        Ky = (yb, bb) => {
          bb ? By.observe(yb) : By.unobserve(yb)
        },
        ey = new zq,
        qb = new Wq(Ky),
        sy = yb => qb.covers(yb),
        Sy = new Vq;
      let Ey;
      const ly = new XZ((yb => {
          Ey.sendCommand(yb)
        })),
        mb = () => {
          ly.send("baf2questbook")
        },
        Cy = yb => function(yb, bb, Wy) {
          const Uy = {};
          for (const hy of Wy) {
            let Wy = Zm.get(hy);
            void 0 === Wy && (Wy = yb.getItemStat(bb, hy, "displayName"), Zm.set(hy, Wy)), Uy[hy] = Wy
          }
          return Uy
        }(Ey, fy, yb),
        Ty = new Xh(mb),
        Vy = new nq((() => eh.d.get("loadingOverlayVisible"))),
        Jy = new Fq,
        gb = new bC(Vy),
        Gy = new Wm((yb => {
          Vy.show(yb, yb.baf2ToastMs)
        })),
        Ry = new Nq(Ky),
        vb = new CE(Ry),
        ib = new lZ,
        My = new jl,
        Xy = new zc,
        ny = new bS({
          read: () => !1 !== Um.e.getItem(fm),
          write: yb => {
            Um.e.setItem(fm, yb)
          }
        }),
        Hy = new vS(ny),
        ab = new Ys(ny),
        Fy = new ds(ny, (yb => function(yb, bb) {
          const Wy = wc(bb.w, bb.h, bb.d),
            Uy = new Uint8Array(Wy);
          for (let hy = 0; hy < Wy; hy++) {
            const Wy = Jsy(yb, tU(bb, zU(bb, hy)));
            Uy[hy] = null === Wy ? 0 : Qc(Wy)
          }
          return Uy
        }(Ey, yb)), Ds(ly)),
        py = new yE(ny, Ds(ly)),
        Ly = new xS,
        Qy = (yb, bb) => {
          let [Wy, Uy, hy] = yb;
          Ly.answered(bb) || Vy.show({
            baf2ToastText: [(0, uy.Ld)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: Wy,
                h: Uy,
                d: hy
              }
            }, uy.K.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      Fy.onSizeNotTaken(Qy), py.onSizeNotTaken(Qy);
      const tb = new hS,
        wy = new aE(ny),
        kb = new pS,
        zb = new xE(kb),
        Iy = new PE,
        xb = new TE,
        dy = new YE(xb),
        yW = new QE(xb),
        bW = xb.lookSource(),
        Wb = new Ul({
          handles: yb => bW.handles(yb) || yb === rb,
          line: (yb, bb) => yb === rb ? function(yb, bb, Wy) {
            var Uy;
            const hy = Dy(null === (Uy = bb.at(Wy)) || void 0 === Uy ? void 0 : Uy.item);
            return null === hy ? {
              key: `${ym}lookFarmEmpty`
            } : {
              key: yb.blockIdToBlockName(yb.getBlockId(Wy[0], Wy[1], Wy[2])).endsWith("|Running") ? `${ym}lookFarmRunning` : `${ym}lookFarmWaiting`,
              keys: {
                mob: jb(hy)
              }
            }
          }(Ey, Ry, bb) : bW.line(yb, bb),
          version: () => bW.version() + Ry.version()
        }, (yb => ns(ny.all(), yb, (yb => Jsy(Ey, yb)))), (() => Ty.get().tier)),
        Ub = new VS,
        fb = new El,
        Zb = new Jl,
        cW = Jl.blade(),
        Pb = new Yl,
        ob = new Qq,
        Bb = new Hl,
        Kb = new Rl,
        eb = new Ol;
      let qW = -1 / 0,
        sb = 0,
        Sb = -1 / 0,
        Eb = -1 / 0;
      const lb = () => {
          ly.send("baf2islandsclose"), Eb = Date.now()
        },
        mW = [];

      function Cb(yb) {
        var bb, Wy, Uy, hy, fy, Zy, Py;
        "core" === (null === (bb = cb.get()) || void 0 === bb ? void 0 : bb.kind) && "core" !== (null === yb || void 0 === yb ? void 0 : yb.kind) && ly.send("baf2coreclose"), "power" === (null === (Wy = cb.get()) || void 0 === Wy ? void 0 : Wy.kind) && "power" !== (null === yb || void 0 === yb ? void 0 : yb.kind) && ly.send("baf2powerclose"), "water" === (null === (Uy = cb.get()) || void 0 === Uy ? void 0 : Uy.kind) && "water" !== (null === yb || void 0 === yb ? void 0 : yb.kind) && ly.send(Ay.u), "terminal" === (null === (hy = cb.get()) || void 0 === hy ? void 0 : hy.kind) && "terminal" !== (null === yb || void 0 === yb ? void 0 : yb.kind) && ly.send("baf2terminalclose"), "islands" === (null === (fy = cb.get()) || void 0 === fy ? void 0 : fy.kind) && "islands" !== (null === yb || void 0 === yb ? void 0 : yb.kind) && lb();
        const oy = xb.getStatus();
        "collider" === (null === (Zy = cb.get()) || void 0 === Zy ? void 0 : Zy.kind) && "collider" !== (null === yb || void 0 === yb ? void 0 : yb.kind) && oy && ly.send(io(oy, "close"));
        const By = yb => "reactor" === yb || "battery" === yb;
        if (By(null === (Py = cb.get()) || void 0 === Py ? void 0 : Py.kind) && !By(null === yb || void 0 === yb ? void 0 : yb.kind)) {
          var Ky, ey, qb;
          const yb = "reactor" === (null === (Ky = cb.get()) || void 0 === Ky ? void 0 : Ky.kind) ? null === (ey = Fy.get()) || void 0 === ey ? void 0 : ey.status.baf2RxAt : null === (qb = py.get()) || void 0 === qb ? void 0 : qb.status.baf2BatAt;
          yb && ly.send(hb(yb, "close"))
        }
        "quests" === (null === yb || void 0 === yb ? void 0 : yb.kind) && mb(), cb.set(yb), null === yb && Jy.release()
      }

      function Vb() {
        (0, Kh.h)(), Cb(null)
      }
      let Jb = new Set,
        gW = !1;
      const Gb = {
        onCreate: yb => {
          Ey = yb, Ey.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const bb of Tb) {
            const yb = Rb[bb].inputSlots ? Gc(Zy) : Vc(bb, Zy, ib, ly);
            mW.push((0, oh.d)(bb, yb))
          }
          mW.push((0, Kh.z)((0, Uy.createElement)(Uy.Fragment, null, (0, Uy.createElement)(fq, {
            controller: qb
          }), (0, Uy.createElement)(xs, {
            store: Ry
          }), (0, Uy.createElement)(fl, {
            store: Wb
          }), (0, Uy.createElement)(Yq, {
            store: Ty
          }), (0, Uy.createElement)(Hq, {
            store: Vy
          }), (0, Uy.createElement)(pq, {
            store: Jy
          }), (0, Uy.createElement)(Dq, {
            store: ob
          }), (0, Uy.createElement)(US, {
            store: tb
          }), (0, Uy.createElement)(LS, {
            store: kb
          })), {
            content: (0, Uy.createElement)(we, {
              commands: ly,
              store: cb,
              power: ib,
              water: Xy,
              reactor: Fy,
              battery: py,
              collider: xb,
              terminal: My,
              quests: Ty,
              close: Kh.k,
              qh: () => {
                Jy.dropHeld(), (0, Kh.h)()
              },
              askIslands: () => {
                Eb = -1 / 0, qW = Date.now(), sb = ly.send(Ny)
              },
              openSocial: () => {
                (0, Kh.h)(), eh.d.set({
                  openEverythingMenuName: hW.o.SOCIAL
                })
              },
              showCore: yb => {
                Cb({
                  kind: "core",
                  core: yb
                }), ly.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Cb(null)
            }
          })), mW.push((0, Bh.s)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Cb({
                kind: "quests"
              }), (0, Kh.t)()
            }
          })), mW.push(xm(ly, Ty, Vy)), gW = !1, mW.push(lf((() => {
            null !== jm && tm(jm)
          }))), mW.push(wl()), mW.push(function() {
            const yb = Oh.g.subscribe(vf, wh),
              bb = () => {
                if (tf) {
                  const yb = tf;
                  tf = null, (0, Rh.s)(yb)
                }
              },
              Wy = Oh.g.subscribe("toggleMenu", (yb => {
                "inventory" === (null === yb || void 0 === yb ? void 0 : yb.split("|")[0]) && bb()
              })),
              Uy = Oh.g.subscribe("appManagerUpdated|openInGameMenuName", (yb => {
                "inventory" === yb && bb()
              }));
            return () => {
              Oh.g.unsubscribe(yb), Oh.g.unsubscribe(Wy), Oh.g.unsubscribe(Uy)
            }
          }()), mW.push(function(yb) {
            const bb = Ll(yb),
              Wy = Oh.g.subscribe(vf, (yb => {
                pl.follow(yb, bb)
              }));
            return () => {
              Oh.g.unsubscribe(Wy), pl.clear()
            }
          }(Ey)), mW.push(function() {
            const yb = document.documentElement,
              bb = (0, gs.c)(".InvenBodyRight", [], (() => {
                const bb = document.querySelector(".InvenBodyRight");
                bb && yb.style.setProperty("--baf2-backpack-width", `${bb.offsetWidth}px`)
              }));
            return () => {
              bb(), yb.style.removeProperty("--baf2-backpack-width")
            }
          }()), mW.push(function() {
            const yb = document.documentElement;
            return yb.classList.add(am), () => {
              yb.classList.remove(am)
            }
          }()), mW.push((() => {
            By.dispose(), oy.dispose()
          })), Sy.start(Ey), mW.push((() => {
            Sy.dispose(), Pb.dispose(), vb.dispose()
          }))
        },
        onClose: () => {
          (0, Rh.s)([]), tf = null, Dh = new Set, jm = null, (0, Rh.q)(new Map), Zm.clear();
          for (const yb of mW) yb();
          Ty.dispose(), Wb.dispose(), Vy.dispose(), Jy.dispose(), Ub.dispose(), fb.dispose(Ey), Hy.dispose(Ey), ab.dispose(Ey), wy.dispose(Ey), zb.dispose(Ey), kb.dispose(), Iy.dispose(), ny.dispose(), Fy.dispose(), py.dispose(), tb.dispose(), Zb.dispose(), cW.dispose(), ob.dispose(), dy.dispose(Ey), yW.dispose(Ey), xb.dispose(), Bb.dispose(), ly.clear()
        },
        onAfterRender: (yb, bb) => {
          var Wy, Uy, hy;
          try {
            Sy.onAfterRender(bb)
          } catch (oy) {
            console.error("Error drawing BAF2 belt items", oy)
          }
          try {
            Pb.onAfterRender(Ey, fy)
          } catch (oy) {
            console.error("Error drawing BAF2 jet flames", oy)
          }
          gW || (gW = !0, ly.send("baf2clientready"));
          const Zy = Ey.getPositionView(fy);
          qb.onAfterRender(bb, Zy, ey), Ry.onAfterRender(bb, Zy, ey, sy), By.run(ey), Ub.onAfterRender(Ey, Zy), fb.onAfterRender(Ey, Zy), vb.onAfterRender(Ey, Zy), Hy.onAfterRender(Ey, Zy), ab.onAfterRender(Ey, fy, Zy), wy.onAfterRender(Ey, fy, Zy), zb.onAfterRender(Ey, fy), Iy.onAfterRender(Ey, Zy), Ty.onPlayerY(Zy[1]), dy.onAfterRender(Ey), yW.onAfterRender(Ey, fy, Zy);
          const Py = Ey.getTargetedBlock();
          Wb.onAfterRender(Ey, fy, null !== (Wy = null === Py || void 0 === Py ? void 0 : Py.Wfy) && void 0 !== Wy ? Wy : 0, null !== (Uy = null === Py || void 0 === Py ? void 0 : Py.position) && void 0 !== Uy ? Uy : null), Bb.onAfterRender(Ey, bb), Gy.onMining(function(yb, bb) {
            var Wy, Uy;
            const hy = yb.getMiningBlock();
            if (!hy) return null;
            const fy = (0, Yy.g)(yb.getBlockId(hy[0], hy[1], hy[2])),
              Zy = null !== (Wy = null === (Uy = yb.MPy(bb)) || void 0 === Uy ? void 0 : Uy.name) && void 0 !== Wy ? Wy : null,
              cb = yb.getItemStat(bb, fy.split("|")[0], "harvestLevel");
            return {
              block: fy,
              x: hy[0],
              y: hy[1],
              z: hy[2],
              kW: Zy,
              level: cb
            }
          }(Ey, fy), Ey.isMining(), performance.now()), "dropMap" === (null === (hy = cb.get()) || void 0 === hy ? void 0 : hy.kind) && MU(Zy[1]) && Vb()
        },
        onPlayerChangeBlock: (yb, bb, Wy, Uy, hy, Zy) => {
          yb === fy && function(yb, bb, Wy, Uy, hy, fy, Zy) {
            const cb = Gl(fy, Zy, yb.isPlayerCrouching(bb));
            if (null === cb) return;
            if (yb.uby(Wy, Uy, hy, cb), !yb.getClientOption(bb, "canPickUpItems")) return;
            const Py = db[cb.split("|")[0]];
            var oy, By, Ky;
            void 0 !== Py && (oy = yb.getInventoryItems(), By = Py, Ky = Ws.c.maxItemStackSize, yb.getInventoryFreeSlotCount(bb) > 0 || oy.some((yb => null !== yb && yb.name === By && null !== yb.amount && yb.amount < Ky))) && yb.playSound(bb, (0, dl.d)("pickUp"), .5, 1)
          }(Ey, yb, bb, Wy, Uy, hy, Zy)
        },
        onPlayerAltAction: (yb, bb, Wy, Uy, hy) => {
          var Zy, cb;
          if (!Ey.getClientOption(fy, "canPickUpItems")) return;
          const Py = null !== (Zy = null === (cb = Ey.MPy(fy)) || void 0 === cb ? void 0 : cb.name) && void 0 !== Zy ? Zy : null,
            oy = function(yb, bb) {
              const Wy = yb.split("|")[0];
              return Oy(Wy) && bb !== yf && "Sky Pack" !== bb ? Wy : null
            }(hy, Py);
          if (null !== oy) return void(Kb.tap(oy, performance.now()) && Ql(Ey, fy, oy, Ty));
          if (!uU(Py)) return;
          const By = eb.isNewPress(performance.now()),
            Ky = function(yb, bb, Wy) {
              return !uU(bb) || Wy ? null : DU(yb)
            }(hy, Py, Ey.isPlayerCrouching(fy));
          null !== Ky && By && Ey.uby(bb, Wy, Uy, Ky)
        },
        onPlayerAttemptAltAction: (yb, bb, Wy, Uy, hy) => {
          if (function(yb, bb, Wy, Uy, hy) {
              "Workbench" === Uy.split("|")[0] && yb.getClientOption(Wy, "canCraft") && (pl.open("Workbench", hy.get(), Ll(yb)), bb.send("baf2station Workbench"))
            }(Ey, ly, fy, hy, Ty), Al(Ey, fy, hy)) return "preventAction";
          gb.onAltAction(Ey, fy, hy)
        },
        onReceivedMessageFromServer: (yb, bb) => {
          if ("baf2MachineStatus" === yb) {
            var Wy, Uy, hy, oy, By, Ky, ey, sy, mb, gb, Gy, Oy, vb, Yy, uy, rb;
            const yb = bb,
              fy = yb.baf2MachineTaught;
            Zy.set(yb.baf2MachinePos, {
              status: yb.baf2MachineStatus,
              power: null !== (Wy = yb.baf2MachinePower) && void 0 !== Wy ? Wy : null,
              opLeftMs: null !== (Uy = yb.baf2MachineOpLeftMs) && void 0 !== Uy ? Uy : null,
              dug: yb.baf2MachineYield ? {
                item: yb.baf2MachineYield,
                name: Cy([yb.baf2MachineYield])[yb.baf2MachineYield]
              } : null,
              powerCap: null !== (hy = yb.baf2MachinePowerCap) && void 0 !== hy ? hy : null,
              powerRates: null !== (oy = yb.baf2MachinePowerRates) && void 0 !== oy ? oy : null,
              coupled: !0 === yb.baf2MachineCoupled,
              couplerLevel: null !== (By = yb.baf2MachineCoupler) && void 0 !== By ? By : 1,
              taught: fy,
              taughtName: fy ? Cy([fy])[fy] : null,
              tier: null !== (Ky = yb.baf2MachineTier) && void 0 !== Ky ? Ky : null,
              input: null !== (ey = yb.baf2MachineInput) && void 0 !== ey ? ey : null,
              inertCoupler: null !== (sy = yb.baf2MachineInertCoupler) && void 0 !== sy ? sy : null,
              inputShort: null !== (mb = yb.baf2MachineInputShort) && void 0 !== mb ? mb : null,
              field: null !== (gb = yb.baf2MachineField) && void 0 !== gb ? gb : null,
              noSeeds: !0 === yb.baf2MachineNoSeeds,
              fuelFed: !0 === yb.baf2MachineFuelFed,
              fuelFeeds: !0 === yb.baf2MachineFuelFeeds,
              coreFull: !0 === yb.baf2MachineCoreFull,
              waterUnpowered: !0 === yb.baf2MachineWaterUnpowered,
              powerShort: !0 === yb.baf2MachinePowerShort,
              powerWait: !0 === yb.baf2MachinePowerWait,
              reactorPowered: !0 === yb.baf2MachineReactorPowered,
              fuelLeftMs: null !== (Gy = yb.baf2MachineFuelLeftMs) && void 0 !== Gy ? Gy : null,
              burning: null !== (Oy = yb.baf2MachineBurning) && void 0 !== Oy ? Oy : null,
              fuelKeep: null !== (vb = yb.baf2MachineFuelKeep) && void 0 !== vb ? vb : null,
              water: null !== (Yy = yb.baf2MachineWater) && void 0 !== Yy ? Yy : null,
              farm: null !== (uy = yb.baf2MachineFarm) && void 0 !== uy ? uy : null,
              cryo: null !== (rb = yb.baf2MachineCryo) && void 0 !== rb ? rb : null
            })
          } else if ("baf2StationOpen" === yb) {
            const yb = bb.baf2Station;
            Kb.consumeServerOpen(yb, performance.now()) || Ql(Ey, fy, yb, Ty)
          } else if ("baf2Power" === yb) {
            const yb = bb;
            ib.set(yb), yb.baf2PowerOpen && (Cb({
              kind: "power"
            }), (0, Kh.t)())
          } else if (yb === Ay.w) {
            const yb = bb;
            Xy.set(yb), yb.baf2WaterOpen && (Cb({
              kind: "water"
            }), (0, Kh.t)())
          } else if ("baf2RxPlans" === yb) {
            var Hy, ab, Qy;
            const yb = bb;
            ny.Gl(yb);
            const Wy = new Set(yb.baf2RxPlanList.map((yb => {
              let [bb, Wy, Uy] = yb;
              return `${bb},${Wy},${Uy}`
            })));
            tb.retain(Wy);
            const Uy = null === (Hy = cb.get()) || void 0 === Hy ? void 0 : Hy.kind,
              hy = "reactor" === Uy ? null === (ab = Fy.get()) || void 0 === ab ? void 0 : ab.status.baf2RxAt : "battery" === Uy ? null === (Qy = py.get()) || void 0 === Qy ? void 0 : Qy.status.baf2BatAt : void 0;
            hy && Jb.has(hy.join(",")) && !Wy.has(hy.join(",")) && Vb(), Jb = Wy
          } else if ("baf2RxStatus" === yb) {
            const yb = bb;
            Fy.set(yb), yb.baf2RxOpen && (Cb({
              kind: "reactor"
            }), (0, Kh.t)())
          } else if ("baf2BatStatus" === yb) {
            const yb = bb;
            py.set(yb), yb.baf2BatOpen && (Cb({
              kind: "battery"
            }), (0, Kh.t)())
          } else if ("baf2RxAlarm" === yb) tb.Gl(bb);
          else if ("baf2Bomb" === yb) kb.Gl(bb, Ey.getPositionView(fy));
          else if ("baf2Fallout" === yb) Iy.Gl(bb);
          else if ("baf2ColBeams" === yb) xb.onBeams(bb);
          else if ("baf2ColStatus" === yb) {
            const yb = bb;
            var jb, Dy;
            if (xb.onStatus(yb), yb.baf2ColOpen) xb.onOpen(null !== (jb = null === (Dy = Ey.MPy(fy)) || void 0 === Dy ? void 0 : Dy.name) && void 0 !== jb ? jb : null), Cb({
              kind: "collider"
            }), (0, Kh.t)()
          } else if ("baf2Terminal" === yb) {
            const yb = bb;
            var wy;
            if (My.apply(yb)) yb.baf2TermReset && (Cb({
              kind: "terminal"
            }), (0, Kh.t)());
            else "terminal" === (null === (wy = cb.get()) || void 0 === wy ? void 0 : wy.kind) && (cb.set(null), (0, Kh.h)())
          } else if ("baf2Core" === yb) {
            var zb;
            const yb = bb;
            if (Py(!0 === yb.baf2CoreNuclear), function(yb, bb) {
                return "core" === (null === yb || void 0 === yb ? void 0 : yb.kind) && bb.baf2CoreTier > yb.core.message.baf2CoreTier
              }(cb.get(), yb)) return void(0, Kh.h)();
            if (yb.baf2CoreRefresh && "core" !== (null === (zb = cb.get()) || void 0 === zb ? void 0 : zb.kind)) return;
            Cb({
              kind: "core",
              core: hm(yb, Cy)
            }), yb.baf2CoreRefresh || (0, Kh.t)()
          } else if ("baf2WrenchUndo" === yb) {
            const {
              baf2WrenchPos: yb,
              baf2WrenchBlock: Wy
            } = bb;
            Ey.uby(yb[0], yb[1], yb[2], Wy)
          } else if ("baf2Toast" === yb) {
            const yb = bb;
            Ly.heard(performance.now(), yb.baf2ToastMs), Vy.show(yb)
          } else if ("baf2Area" === yb) Jy.arrive(bb, null !== cb.get());
          else if ("baf2Quest" === yb) {
            const yb = bb;
            Py(!0 === yb.baf2QuestNuclear), Ty.set(yb, function(yb, bb) {
              var Wy, Uy, hy, fy, Zy;
              const cb = [];
              for (const [, , By, , , , , , Ky, ey] of yb.baf2QuestSteps) null !== By && cb.push(By), cb.push(...null !== Ky && void 0 !== Ky ? Ky : [], ...null !== ey && void 0 !== ey ? ey : []);
              yb.baf2QuestReward && cb.push(yb.baf2QuestReward);
              const Py = null === (Wy = yb.baf2QuestSide) || void 0 === Wy ? void 0 : Wy[2][2];
              Py && cb.push(Py), cb.push(...null !== (Uy = null === (hy = yb.baf2QuestSide) || void 0 === hy ? void 0 : hy[2][8]) && void 0 !== Uy ? Uy : [], ...null !== (fy = null === (Zy = yb.baf2QuestSide) || void 0 === Zy ? void 0 : Zy[2][9]) && void 0 !== fy ? fy : []);
              for (const [By] of null !== (oy = yb.baf2QuestAlso) && void 0 !== oy ? oy : []) {
                var oy;
                cb.push(By)
              }
              return bb(cb)
            }(yb, Cy)), tm(yb.baf2QuestTier)
          } else if ("baf2Route" === yb) ! function(yb, bb) {
            let {
              baf2RouteCells: Wy,
              baf2RouteInto: Uy
            } = bb;
            0 !== Wy.length && Uy ? yb.setRouteChevrons({
              cells: Wy.map(((yb, bb) => {
                const [hy, , fy] = function(yb, bb, Wy) {
                  const Uy = Wy + 1 < yb.length ? yb[Wy + 1] : bb;
                  return [Uy[0] - yb[Wy][0], 0, Uy[2] - yb[Wy][2]]
                }(Wy, Uy, bb);
                return {
                  pos: yb,
                  way: [hy, fy]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : yb.setRouteChevrons(null)
          }(Ey, bb);
          else if ("baf2QuestBook" === yb) Ty.setBook(bb);
          else if ("baf2Stalls" === yb) qb.set(bb.baf2StallCells);
          else if (yb === PW.l) Sy.onMoves(bb);
          else if (yb === PW.i) Sy.onLines(bb);
          else if ("baf2Labels" === yb) Ry.Gl(bb);
          else if ("baf2DropMap" === yb) Cb({
            kind: "dropMap",
            dropMap: bb
          }), (0, Kh.t)();
          else if ("baf2Islands" === yb) {
            var dy, yW;
            const yb = bb;
            if (ly.syncIslandEdits(yb.baf2IslandsAnswered), !yb.baf2IslandsOpen && "islands" !== (null === (dy = cb.get()) || void 0 === dy ? void 0 : dy.kind)) return;
            if (yb.baf2IslandsOpen) {
              var bW, Wb;
              const bb = eh.d.get("openEverythingMenuName"),
                Wy = ly.sent() >= sb,
                Uy = "other" !== (mW = {
                  askedAtMs: qW,
                  askSent: Wy,
                  reaskedAtMs: Sb,
                  nowMs: Date.now(),
                  panel: null !== (bW = null === (Wb = cb.get()) || void 0 === Wb ? void 0 : Wb.kind) && void 0 !== bW ? bW : null,
                  inGameMenu: eh.d.get("openInGameMenuName"),
                  everythingMenu: null === bb ? null : bb === hW.o.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== yb.baf2IslandsFocusInvite
                }).everythingMenu && (!!mW.focusInvite || "islands" === mW.panel && "clientGame" === mW.inGameMenu || !(mW.nowMs - mW.reaskedAtMs < Go) && (mW.askSent && mW.nowMs - mW.askedAtMs < Go ? "core" === mW.panel && "clientGame" === mW.inGameMenu && null === mW.everythingMenu : "shop" === mW.everythingMenu || null === mW.inGameMenu));
              if (Wy && (qW = -1 / 0), Sb = -1 / 0, !Uy) return void lb()
            }
            const Wy = (hb = yb.baf2IslandsOpen, fb = "islands" === (null === (yW = cb.get()) || void 0 === yW ? void 0 : yW.kind), Bb = Eb, eb = Date.now(), hb && !fb && eb - Bb < Go);
            Cb({
              kind: "islands",
              islands: yb,
              arrivedAtMs: Date.now(),
              backToCore: Oo(cb.get())
            }), Wy && (Eb = -1 / 0, Sb = Date.now(), ly.send(Ny)), yb.baf2IslandsOpen && ("clientGame" !== eh.d.get("openInGameMenuName") && (0, qf.f)(), (0, Kh.t)())
          } else if ("baf2CoopTransfer" === yb) {
            var Ub;
            const yb = bb;
            yb.baf2TransferOn ? (Cb({
              kind: "transfer",
              transfer: yb,
              arrivedAtMs: Date.now()
            }), (0, Kh.t)()) : "transfer" === (null === (Ub = cb.get()) || void 0 === Ub ? void 0 : Ub.kind) && (0, Kh.h)()
          } else "baf2IslandLeft" === yb ? (Jy.dropHeld(), null !== cb.get() && Vb(), "inventory" === eh.d.get("openInGameMenuName") && (0, qf.f)()) : "baf2Arc" === yb ? Zb.Gl(Ey, bb) : "baf2Blade" === yb ? cW.onBlade(Ey, bb) : "baf2JetFlame" === yb ? Pb.Gl(Ey, bb) : "baf2GearPower" === yb && ob.Gl(bb);
          var hb, fb, Bb, eb, mW
        }
      };
      return Gb
    }
  },
  37197: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy) {
      const Uy = new Set,
        hy = new ResizeObserver(Wy),
        fy = () => {
          const bb = new Set(document.querySelectorAll(yb));
          let fy = !1;
          for (const yb of Uy) bb.has(yb) || (hy.unobserve(yb), Uy.delete(yb), fy = !0);
          for (const yb of bb) Uy.has(yb) || (hy.observe(yb), Zy.observe(yb, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Uy.add(yb));
          fy && Wy()
        },
        Zy = new MutationObserver((bb => {
          bb.some((yb => "attributes" === yb.type)) && Wy(), bb.some((bb => function(yb, bb, Wy) {
            if ("childList" !== yb.type) return !1;
            for (const Uy of yb.addedNodes)
              if (Uy instanceof Element && (Uy.matches(bb) || Uy.querySelector(bb))) return !0;
            for (const Uy of yb.removedNodes)
              if (Uy instanceof Element)
                for (const yb of Wy)
                  if (Uy.contains(yb)) return !0;
            return !1
          }(bb, yb, Uy))) && fy()
        }));
      Zy.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const cb of bb) hy.observe(cb);
      return window.addEventListener("resize", Wy), fy(), Wy(), () => {
        hy.disconnect(), Zy.disconnect(), window.removeEventListener("resize", Wy)
      }
    }
    Wy.d(bb, {
      c: () => Uy
    })
  },
  37177: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      f: () => fy
    });
    const Uy = new WeakMap;

    function hy(yb) {
      let bb = Uy.get(yb);
      return bb || (bb = {
        hidden: yb.hidden,
        x: NaN,
        y: NaN
      }, Uy.set(yb, bb)), bb
    }

    function fy(yb, bb) {
      const Wy = hy(yb);
      Wy.hidden !== bb && (Wy.hidden = bb, yb.hidden = bb)
    }

    function Zy(yb, bb, Wy) {
      const Uy = hy(yb);
      Uy.x === bb && Uy.y === Wy || (Uy.x = bb, Uy.y = Wy, yb.style.translate = `${bb}vw ${Wy}vh`)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);