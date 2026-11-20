export const id = 237;
export const ids = [237];
export const modules = {
  38473: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq = gq(38477);
    const lq = [0, 0, 0];
    class Oq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lq;
        this.pool = qq, this.origin = Eq, this.count = 0, this.free = []
      }
      take() {
        var qq;
        const Eq = null !== (qq = this.free.pop()) && void 0 !== qq ? qq : this.count++;
        return Eq >= this.pool.WB && this.pool.grow(Math.max(2 * this.pool.WB, Eq + 1)), this.hide(Eq), Eq
      }
      release(qq) {
        this.hide(qq), this.free.push(qq)
      }
      write(qq, Eq, gq, lq) {
        const {
          records: Oq
        } = this.pool, {
          origin: mq
        } = this, xq = qq * Yq.e;
        Oq[xq] = Eq - mq[0], Oq[xq + 1] = gq - mq[1], Oq[xq + 2] = lq - mq[2], Oq[xq + Yq.g] = 0, this.pool.markDirty(qq)
      }
      hide(qq) {
        this.pool.records[qq * Yq.e + Yq.g] = 1, this.pool.markDirty(qq)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class mq {
      constructor(qq, Eq, gq) {
        this.api = qq, this.model = Eq, this.initialCapacity = gq, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(qq) {
        let Eq = this.kinds.get(qq);
        if (void 0 === Eq) {
          const gq = this.api.createInstancePool({
            ...this.model,
            item: qq
          }, this.initialCapacity);
          null === gq || void 0 === gq || gq.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Eq = gq && new Oq(gq, this.origin), this.kinds.set(qq, Eq)
        }
        return Eq
      }
      follow(qq) {
        const {
          origin: Eq
        } = this;
        if (Math.abs(qq[0] - Eq[0]) <= 512 && Math.abs(qq[1] - Eq[1]) <= 512 && Math.abs(qq[2] - Eq[2]) <= 512) return !1;
        Eq[0] = Math.floor(qq[0]), Eq[1] = Math.floor(qq[1]), Eq[2] = Math.floor(qq[2]);
        for (const gq of this.kinds.values()) null === gq || void 0 === gq || gq.pool.setOrigin(Eq[0], Eq[1], Eq[2]);
        return !0
      }
      commit() {
        for (const qq of this.kinds.values()) null === qq || void 0 === qq || qq.commit()
      }
      dispose() {
        for (const qq of this.kinds.values()) null === qq || void 0 === qq || qq.dispose();
        this.kinds.clear()
      }
    }
  },
  38486: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      g: () => xq,
      i: () => Aq
    });
    const Yq = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      lq = [0, 1, 2, 0, 2, 3],
      Oq = [4, 5];

    function mq(qq, Eq, gq, Yq, lq) {
      for (let mq = 0; mq < 6; mq++) Oq.includes(mq) === lq && cq(qq, Eq, gq, Yq, mq)
    }

    function xq(qq, Eq, gq, Yq) {
      for (let lq = 0; lq < 6; lq++) cq(qq, Eq, gq, Yq, lq)
    }

    function Aq(qq, Eq, gq, Oq, mq) {
      for (let xq = 0; xq < 6; xq++)
        for (const Aq of [0, 1]) {
          const [cq, uq, Bq] = [Aq + 2, Aq + 1, (Aq + 3) % 4], Wq = qq.length / 3;
          for (const [Eq, lq] of [
              [Aq, uq],
              [cq, uq],
              [cq, Bq],
              [Aq, Bq]
            ])
            for (let Aq = 0; Aq < 3; Aq++) {
              const cq = Yq[3 * (4 * xq + Eq) + Aq],
                uq = Yq[3 * (4 * xq + lq) + Aq];
              qq.push((cq + (uq - cq) * mq) * Oq / 2 + gq[Aq])
            }
          for (const qq of lq) Eq.push(Wq + qq)
        }
    }

    function cq(qq, Eq, gq, Oq, mq) {
      let [xq, Aq, cq] = gq, [uq, Bq, Wq] = Oq;
      const Nq = qq.length / 3;
      for (let lq = 4 * mq; lq < 4 * mq + 4; lq++) qq.push(Yq[3 * lq] * uq / 2 + xq, Yq[3 * lq + 1] * Bq / 2 + Aq, Yq[3 * lq + 2] * Wq / 2 + cq);
      for (const Yq of lq) Eq.push(Nq + Yq)
    }
  },
  38469: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => dH
    });
    var Yq = gq(57);
    const lq = [{
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
      Oq = 10;
    let mq = !0;

    function xq() {
      return mq
    }

    function Aq(qq) {
      mq = qq
    }
    const cq = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function uq() {
      return mq ? lq.length : Oq
    }

    function Bq(qq) {
      var Eq, gq;
      return null !== (Eq = null === (gq = lq[qq - 1]) || void 0 === gq ? void 0 : gq.reactorTier) && void 0 !== Eq ? Eq : 0
    }

    function Wq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bq(qq) > 0;
      return gq && !mq ? "hidden" : qq <= Eq ? "open" : gq ? Eq < 5 ? "hidden" : Eq < Oq ? "teaser" : "locked" : "locked"
    }

    function Nq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Yq,
        n: lq
      } = dq(qq);
      return {
        key: Eq[Yq],
        params: {
          [Yq]: gq ? String(lq) : lq
        }
      }
    }
    const aq = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Vq(qq, Eq) {
      return Bq(qq) > 0 && Eq < Oq
    }

    function dq(qq) {
      const Eq = Bq(qq);
      if (Eq > 0) return {
        kind: "atomic",
        n: Eq,
        short: `A${Eq}`
      };
      const gq = function(qq) {
        return qq >= 6 && qq <= 10 ? qq - 6 + 1 : 0
      }(qq);
      return gq > 0 ? {
        kind: "stage",
        n: gq,
        short: `S${gq}`
      } : {
        kind: "tier",
        n: qq,
        short: String(qq)
      }
    }

    function jq(qq) {
      return lq[Math.max(1, Math.min(qq, lq.length)) - 1]
    }

    function Hq(qq, Eq) {
      return qq < Eq ? function(qq) {
        var Eq;
        return null !== (Eq = lq[qq]) && void 0 !== Eq ? Eq : null
      }(qq) : null
    }
    const oq = "baf2coresubmit",
      Pq = "baf2corebankpause",
      Qq = "baf2coredeposit",
      yq = "baf2corechargepause";

    function tq(qq) {
      var Eq;
      return null !== (Eq = qq.baf2CoreOpen) && void 0 !== Eq ? Eq : Oq
    }
    const rq = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function vq(qq) {
      return rq.includes(qq)
    }
    const hq = (qq, Eq) => Eq.map((Eq => [Eq, [qq]])),
      nq = Object.fromEntries([...hq("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...hq("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...hq("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...hq("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...hq("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...hq("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...hq("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...hq("Parts Bench", ["Focus Lens"]), ...hq("Machine Bench", ["Laser", "Collider"]), ...hq("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...hq("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...hq("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...hq("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...hq("Tool Bench", ["Mob Cage"]), ...hq("Tool Bench", ["Pocket Terminal"]), ...hq("Tool Bench", ["Comet Beacon"]), ...hq("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function bq(qq) {
      var Eq;
      return null !== (Eq = nq[qq]) && void 0 !== Eq ? Eq : ["Workbench"]
    }

    function iq(qq) {
      return bq(qq)[0]
    }
    lq.slice(1).map(((qq, Eq) => `Core Tier ${Eq+2}`));
    var Zq = gq(9379);
    const fq = ["on", "hud", "off"];

    function Mq(qq) {
      return "on" === qq
    }
    var Tq = gq(307);
    const zq = "Mob Farm",
      Sq = {
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
      pq = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Gq = {
        1: 20,
        2: 60,
        3: 120
      },
      Lq = "baf2farmvoid",
      Jq = "Caged ",
      kq = " Spawner Block";

    function Rq(qq) {
      return `lifeform:${(0,Tq.ue)(qq)}`
    }

    function Uq(qq) {
      if (!qq) return null;
      if (qq.startsWith(Jq)) {
        const Eq = qq.slice(6);
        return pq.includes(Eq) ? Eq : null
      }
      if (qq.endsWith(kq)) {
        const Eq = qq.slice(0, -14);
        return void 0 !== Sq[Eq] ? Eq : null
      }
      return null
    }

    function Fq(qq) {
      return !0 === qq.mobFarm
    }

    function sq(qq, Eq) {
      return Gq[Sq[Eq]] * qq.opMs / 1e3
    }
    const Xq = new Map;
    const wq = "baf2islands",
      Kq = "baf2islandnew";

    function Cq(qq) {
      const Eq = lq.findIndex((Eq => Eq.unlocks.includes(qq)));
      return Eq < 0 ? 1 : Eq + 1
    }

    function Iq(qq) {
      return Math.floor(qq).toLocaleString("en-US")
    }
    var eq = gq(38412);
    const Dq = "baf2terminaltake",
      qE = "baf2terminalput",
      EE = ["one", "stack", "fill"];

    function gE(qq, Eq, gq) {
      return `${Dq} ${qq} ${Eq} ${gq}`
    }

    function YE(qq, Eq, gq) {
      return `${qE} ${qq} ${Eq} ${gq}`
    }

    function lE(qq) {
      return `${qE} ${qq}`
    }
    const OE = [
      [`${Dq} `, "take"],
      [`${qE} `, "put"]
    ];

    function mE(qq) {
      const Eq = OE.find((Eq => {
        let [gq] = Eq;
        return qq.startsWith(gq)
      }));
      if (!Eq) return null;
      const [gq, Yq] = Eq, [lq, Oq, ...mq] = qq.slice(gq.length).trim().split(" "), xq = Number(lq);
      if (!Number.isSafeInteger(xq) || xq <= 0) return null;
      if ("put" === Yq && void 0 === Oq) return {
        kind: "putAll",
        seq: xq
      };
      const Aq = function(qq) {
        if (EE.includes(qq)) return qq;
        const Eq = Number(qq);
        return /^\d+$/.test(qq) && Number.isSafeInteger(Eq) && Eq > 0 ? Eq : null
      }(null !== Oq && void 0 !== Oq ? Oq : "");
      return null === Aq || 0 === mq.length ? null : {
        kind: Yq,
        seq: xq,
        mode: Aq,
        item: mq.join(" ")
      }
    }

    function xE(qq, Eq) {
      const gq = "number" === typeof qq ? qq : "one" === qq ? 1 : "stack" === qq ? 99 : Eq;
      return Math.min(Eq, gq)
    }

    function AE(qq, Eq) {
      const gq = qq => "number" === typeof qq ? qq : "one" === qq ? 1 : 99;
      return "fill" === qq || "fill" === Eq ? "fill" : gq(qq) + gq(Eq)
    }

    function cE(qq, Eq) {
      const gq = mE(qq),
        Yq = mE(Eq),
        lq = gq && Yq ? function(qq, Eq) {
          return "take" === qq.kind || "take" === Eq.kind ? "take" === qq.kind && "take" === Eq.kind && qq.item === Eq.item ? {
            ...Eq,
            mode: AE(qq.mode, Eq.mode)
          } : null : "putAll" === qq.kind || "putAll" === Eq.kind ? {
            kind: "putAll",
            seq: Eq.seq
          } : qq.item === Eq.item ? {
            ...Eq,
            mode: AE(qq.mode, Eq.mode)
          } : null
        }(gq, Yq) : null;
      return lq ? "putAll" === (Oq = lq).kind ? lE(Oq.seq) : "put" === Oq.kind ? YE(Oq.seq, Oq.mode, Oq.item) : gE(Oq.seq, Oq.mode, Oq.item) : null;
      var Oq
    }
    const uE = "baf2rx";

    function BE(qq, Eq) {
      for (var gq = arguments.length, Yq = new Array(gq > 2 ? gq - 2 : 0), lq = 2; lq < gq; lq++) Yq[lq - 2] = arguments[lq];
      return [uE, qq[0], qq[1], qq[2], Eq, ...Yq].join(" ")
    }
    const WE = 2,
      NE = 4,
      aE = 8,
      VE = 16,
      dE = 32,
      jE = 64,
      HE = 128,
      oE = 256,
      PE = 512,
      QE = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      yE = [{
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
    const tE = "Biomass",
      rE = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function vE(qq) {
      return {
        input: tE,
        inputAmount: 1,
        output: qq,
        outputAmount: 1
      }
    }
    const hE = "baf2synth",
      nE = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      bE = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      iE = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      ZE = function(qq, Eq) {
        return {
          input: qq,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: Eq,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      fE = function(qq, Eq) {
        return {
          ...ZE(qq, Eq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      ME = bE.map((qq => fE(qq, "Biomass", 2))),
      TE = {
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
          recipes: [ZE("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), ZE("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), ZE("Raw Gold", "Gold Grit", 2), ZE("Messy Stone", "Sand"), ZE("Gravel", "Sand"), ZE("Raw Voltite", "Voltite Dust", 2), ZE("Moonstone", "Moonstone Dust", 4), ZE("Wheat Seeds", "Fertiliser"), ZE("Raw Uranium", "Uranium Grit", 2), fE("Mossy Messy Stone", "Sand"), ...ME],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [ZE("Iron Grit", "Iron Bar"), ZE("Copper Grit", "Copper Bar"), ZE("Gold Grit", "Gold Bar"), ZE("Raw Iron", "Iron Bar"), ZE("Raw Copper", "Copper Bar"), ZE("Raw Gold", "Gold Bar"), ZE("Sand", "Glass"), ZE("Messy Stone", "Stone"), ...Tq.$c.map((qq => ZE(qq, "Charcoal", 1, 4))), ZE("Wheat", "Bread", 1, 2), ...bE.map(((qq, Eq) => fE(qq, iE[Eq])))],
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
          recipes: [ZE("Iron Bar", "Iron Plate"), ZE("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [ZE("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [ZE("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [ZE("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), ZE("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), ZE("Raw Gold", "Gold Grit", 3), ZE("Raw Voltite", "Voltite Dust", 3), ZE("Messy Stone", "Sand", 2), ZE("Gravel", "Sand", 2), ZE("Moonstone", "Moonstone Dust", 6), ZE("Raw Uranium", "Uranium Grit", 3), fE("Mossy Messy Stone", "Sand", 2), ...ME],
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
          table: QE
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [ZE("Coal", "Diamond", 1, 24), ZE("Voltite Dust", "Moonstone", 1, 12)],
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
        ...eq.j
      },
      zE = {
        Crusher: [ZE("Spent Pellet", "Glow Dust"), ZE("Wheat Seeds", "Biomass"), ZE("Wheat", "Biomass"), ZE("Dead Bush", "Biomass"), ZE("Dusk Moss", "Biomass"), ZE("Rotten Flesh", "Biomass"), ZE("Bone", "Biomass", 2)],
        "Shatter Mill": [ZE("Spent Pellet", "Glow Dust"), ZE("Wheat Seeds", "Biomass"), ZE("Wheat", "Biomass"), ZE("Dead Bush", "Biomass"), ZE("Dusk Moss", "Biomass"), ZE("Rotten Flesh", "Biomass"), ZE("Bone", "Biomass", 2), ...Tq.$c.map((qq => ZE(qq, "Biomass")))],
        Smelter: [ZE("Biomass", "Fertiliser", 2)],
        Press: [ZE("Coal", "Graphite", 1, 4)]
      },
      SE = "Power Coupler",
      pE = "Advanced Coupler",
      GE = "Nova Coupler",
      LE = [{
        item: SE,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: pE,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: GE,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const JE = new Map;

    function kE(qq) {
      var Eq, gq;
      return null !== (Eq = null !== (gq = qq.fuelSlot) && void 0 !== gq ? gq : qq.couplerSlot) && void 0 !== Eq ? Eq : null
    }

    function RE(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!qq.couplable) throw new Error(`${qq.kind} takes no Power Coupler`);
      let gq = JE.get(qq);
      gq || (gq = [], JE.set(qq, gq));
      let Yq = gq[Eq];
      if (!Yq) {
        var lq;
        const {
          divisor: Oq,
          powerPerS: mq
        } = LE[Eq - 1], xq = qq.opMs / Oq, Aq = void 0 !== qq.fluidMade || void 0 !== qq.cryoMade ? qq.powerPerOp : mq * xq / 1e3;
        Yq = {
          ...qq,
          fuelSlot: null,
          couplerSlot: null !== (lq = kE(qq)) && void 0 !== lq ? lq : void 0,
          opMs: xq,
          powerPerOp: Aq,
          coupled: !0
        }, Eq > 1 && (Yq = {
          ...Yq,
          couplerLevel: Eq
        }), gq[Eq] = Yq
      }
      return Yq
    }
    const UE = new Map;
    const FE = new Map;

    function sE(qq, Eq) {
      if (null === Eq || (gq = Eq, !rE.includes(gq))) return qq;
      var gq;
      let Yq = FE.get(Eq);
      return Yq || (Yq = {
        ...qq,
        recipes: [vE(Eq)]
      }, FE.set(Eq, Yq)), Yq
    }

    function XE(qq) {
      return !0 === qq.synth
    }
    const wE = (qq, Eq, gq, Yq) => ({
        output: qq,
        outputAmount: Eq,
        tier: gq,
        inputs: Yq.map((qq => {
          let [Eq, gq] = qq;
          return {
            item: Eq,
            amount: gq
          }
        }))
      }),
      KE = Object.fromEntries([wE("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), wE("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), wE("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), wE("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), wE("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), wE("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), wE("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), wE("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), wE("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), wE("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), wE("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), wE("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), wE("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), wE("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), wE("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), wE("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), wE("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), wE("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), wE("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), wE("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), wE("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), wE("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), wE("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), wE("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), wE("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), wE("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), wE("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), wE("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), wE("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), wE("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((qq => [qq.output, qq]))),
      CE = new Map;

    function IE(qq, Eq) {
      let gq = TE[qq];
      if (Eq.atomic && (gq = function(qq) {
          const Eq = zE[qq.kind];
          if (!Eq) return qq;
          let gq = UE.get(qq.kind);
          if (!gq) {
            const Yq = new Set(Eq.map((qq => qq.input))),
              lq = qq.recipes.filter((qq => !Yq.has(qq.input)));
            gq = {
              ...qq,
              recipes: [...lq, ...Eq]
            }, UE.set(qq.kind, gq)
          }
          return gq
        }(gq)), gq.synth) return sE(gq, Eq.taught);
      if (Eq.coupled && gq.couplable) return RE(gq, Eq.level);
      const Yq = gq.inputSlots && null !== Eq.taught ? KE[Eq.taught] : void 0;
      if (!Yq) return gq;
      const lq = `${qq}|${Yq.output}`;
      let Oq = CE.get(lq);
      return Oq || (Oq = {
        ...gq,
        bench: Yq
      }, CE.set(lq, Oq)), Oq
    }
    const eE = ["Diamond", "Moonstone"];

    function DE(qq) {
      return new Set(qq.flatMap((qq => qq.bonus ? [qq.output, qq.bonus.item] : [qq.output])).filter((qq => !eE.includes(qq))))
    }
    const qg = Object.values(TE).flatMap((qq => qq.recipes));
    DE(qg.filter((qq => !0 !== qq.nuclear))), DE([...qg.filter((qq => !0 === qq.nuclear)), ...Object.values(zE).flat()]);

    function Eg(qq) {
      return null === qq.inputSlot && void 0 === qq.inputSlots && void 0 === qq.powerMade && void 0 === qq.fluidMade && !qq.treeCutter && void 0 === qq.table
    }

    function gg(qq) {
      return !0 === qq.treeCutter
    }
    const Yg = ["Voltite Cell"];

    function lg(qq) {
      var Eq, gq;
      return null !== (Eq = null === (gq = qq.fuels) || void 0 === gq ? void 0 : gq.some((qq => Yg.includes(qq)))) && void 0 !== Eq && Eq
    }
    const Og = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Tq.$c.map((qq => [qq, 8e3]))),
        ...Object.fromEntries(Tq.Ad.map((qq => [qq, 2e3]))),
        "Voltite Cell": 12e4
      },
      mg = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      xg = {
        "Uranium Deposit": 4e3
      };

    function Ag(qq) {
      var Eq;
      return null !== (Eq = Object.keys(mg).find((Eq => mg[Eq] === qq))) && void 0 !== Eq ? Eq : null
    }

    function cg(qq) {
      return nE.includes(qq)
    }

    function ug(qq) {
      return !0 !== qq.nuclear || xq()
    }
    var Bg = gq(296);
    var Wg = gq(9457),
      Ng = gq(9393),
      ag = gq(9460),
      Vg = gq(9450);
    const dg = "Reactor Controller",
      jg = "Reactor Port",
      Hg = "Battery Cell",
      og = ["fuel", "water", "waste"],
      Pg = {
        fuel: jg,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Qg = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      yg = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      tg = "Reactor Frame",
      rg = "Reactor Glass",
      vg = {
        edge: [tg],
        cap: [rg, jg],
        wall: [rg, jg],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [dg]
      },
      hg = {
        edge: [Hg],
        cap: [Hg],
        wall: [Hg],
        inside: [Hg],
        ctrl: [Hg]
      },
      ng = ["edge", "cap", "wall", "inside"],
      bg = ["Reactor Slag"];

    function ig(qq) {
      return bg.includes(Zg(qq))
    }

    function Zg(qq) {
      const Eq = qq.indexOf("|");
      return Eq < 0 ? qq : qq.slice(0, Eq)
    }

    function fg(qq) {
      return Zg(qq) === dg ? "reactor" : null
    }

    function Mg(qq) {
      return Zg(qq) !== jg ? null : qq.endsWith("|Water") ? "water" : qq.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Tg(qq) {
      const Eq = Mg(qq);
      return null === Eq ? null : pg(Pg[og[(og.indexOf(Eq) + 1) % og.length]], function(qq) {
        return qq.includes(zg)
      }(qq))
    }
    const zg = "|meta|rot1|Formed",
      Sg = new Set([tg, rg, jg]);

    function pg(qq, Eq) {
      var gq;
      const Yq = Zg(qq);
      if (!Sg.has(Yq)) return qq;
      if (Yq !== jg) return Eq ? Yq + zg : Yq;
      const lq = null !== (gq = Mg(qq)) && void 0 !== gq ? gq : "fuel";
      return Eq ? "fuel" === lq ? Yq + zg : `${Yq}${zg}|${"water"===lq?"Water":"Waste"}` : Pg[lq]
    }

    function Gg(qq, Eq) {
      const gq = YY(qq, Eq);
      if ("Air" === gq) return !1;
      const Yq = "reactor" === qq ? vg : hg;
      return ng.some((qq => Yq[qq].includes(gq))) || "reactor" === qq && bg.includes(gq)
    }

    function Lg(qq) {
      return yg[qq]
    }

    function Jg(qq) {
      var Eq;
      return null !== (Eq = Qg[qq]) && void 0 !== Eq ? Eq : Qg[1]
    }

    function kg(qq) {
      const [Eq, , gq] = Jg(qq);
      return [gq, 0, -Eq]
    }

    function Rg(qq, Eq, gq, Yq, lq, Oq) {
      return {
        ctrl: [qq[0], qq[1], qq[2]],
        rot: Qg[Eq] ? Eq : 1,
        w: gq,
        h: Yq,
        d: lq,
        cu: Oq[0],
        cv: Oq[1]
      }
    }

    function Ug(qq, Eq) {
      return "reactor" === qq ? [Math.floor((Eq - 1) / 2), 0] : [0, 0]
    }

    function Fg(qq, Eq, gq, Yq, lq) {
      let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : qq.rot;
      if (gq === qq.w && Yq === qq.h && lq === qq.d && Oq === qq.rot) return qq;
      const [mq] = Ug(Eq, qq.w);
      if (qq.cu === mq && qq.cv <= 1) return Rg(qq.ctrl, Oq, gq, Yq, lq, Ug(Eq, gq));
      const xq = (qq, Eq) => Math.max(1, Math.min(Eq, qq));
      return Rg(qq.ctrl, Oq, gq, Yq, lq, [xq(qq.cu, gq - 2), 0 === qq.cv ? 0 : xq(qq.cv, Yq - 2)])
    }
    const sg = 11,
      Xg = 2 * sg + 1;
    new Uint8Array(Xg * Xg * Xg);

    function wg(qq) {
      return qq.w * qq.h * qq.d
    }

    function Kg(qq) {
      const Eq = kg(qq.rot);
      return [qq.ctrl[0] - Eq[0] * qq.cu, qq.ctrl[1] - qq.cv, qq.ctrl[2] - Eq[2] * qq.cu]
    }

    function Cg(qq) {
      return qq.cv * qq.d * qq.w + qq.cu
    }

    function Ig(qq, Eq) {
      const gq = Eq % qq.w,
        Yq = Math.floor(Eq / qq.w) % qq.d;
      return [gq, Math.floor(Eq / (qq.w * qq.d)), Yq]
    }

    function eg(qq, Eq) {
      const [gq, Yq, lq] = Ig(qq, Eq), Oq = Kg(qq), mq = Jg(qq.rot), xq = kg(qq.rot);
      return [Oq[0] + xq[0] * gq - mq[0] * lq, Oq[1] + Yq, Oq[2] + xq[2] * gq - mq[2] * lq]
    }

    function Dg(qq, Eq) {
      const gq = Kg(qq),
        Yq = Jg(qq.rot),
        lq = kg(qq.rot),
        Oq = Eq[0] - gq[0],
        mq = Eq[2] - gq[2],
        xq = Oq * lq[0] + mq * lq[2],
        Aq = -(Oq * Yq[0] + mq * Yq[2]),
        cq = Eq[1] - gq[1];
      return xq < 0 || xq >= qq.w || cq < 0 || cq >= qq.h || Aq < 0 || Aq >= qq.d ? -1 : (cq * qq.d + Aq) * qq.w + xq
    }

    function qY(qq, Eq) {
      if (Eq === Cg(qq)) return "ctrl";
      const [gq, Yq, lq] = Ig(qq, Eq), Oq = 0 === Yq || Yq === qq.h - 1, mq = Number(0 === gq || gq === qq.w - 1) + Number(Oq) + Number(0 === lq || lq === qq.d - 1);
      return mq >= 2 ? "edge" : 1 === mq ? Oq ? "cap" : "wall" : "inside"
    }

    function EY(qq, Eq) {
      const [gq, Yq, lq] = Ig(qq, Eq);
      return 0 === gq || gq === qq.w - 1 || 0 === Yq || Yq === qq.h - 1 || 0 === lq || lq === qq.d - 1 ? -1 : ((Yq - 1) * (qq.d - 2) + (lq - 1)) * (qq.w - 2) + (gq - 1)
    }

    function gY(qq, Eq) {
      const gq = qq.w - 2,
        Yq = qq.d - 2,
        lq = Eq % gq + 1,
        Oq = Math.floor(Eq / gq) % Yq + 1;
      return ((Math.floor(Eq / (gq * Yq)) + 1) * qq.d + Oq) * qq.w + lq
    }

    function YY(qq, Eq) {
      const gq = Zg(Eq);
      return "reactor" === qq && gq === dg ? tg : gq
    }

    function lY(qq, Eq, gq) {
      const Yq = "ctrl" === Eq ? Zg(gq) : YY(qq, gq);
      return ("reactor" === qq ? vg : hg)[Eq].includes(Yq) ? "ok" : "Air" === Yq ? "missing" : Gg(qq, gq) ? "wrong" : "blocked"
    }

    function OY(qq, Eq) {
      return "battery" === qq ? Hg : "inside" === Eq ? null : function(qq, Eq) {
        if ("inside" === Eq || "ctrl" === Eq || "battery" === qq) return null;
        return "edge" === Eq ? tg : rg
      }(qq, Eq)
    }
    const mY = {
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
      xY = "Collider",
      AY = "Laser",
      cY = "Star Alloy",
      uY = "Glow Dust",
      BY = [xY, "_Collider Focus"];

    function WY(qq) {
      return BY.indexOf(Zg(qq))
    }

    function NY(qq) {
      return Zg(qq) === AY
    }

    function aY(qq) {
      return [
        [qq[0], qq[1], qq[2]],
        [qq[0], qq[1] + 1, qq[2]]
      ]
    }
    const VY = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function dY(qq, Eq, gq) {
      const Yq = VY[Eq];
      return [qq[0] + Yq[0] * gq, qq[1], qq[2] + Yq[2] * gq]
    }

    function jY(qq, Eq) {
      if (Eq[1] !== qq[1]) return null;
      const gq = Eq[0] - qq[0],
        Yq = Eq[2] - qq[2];
      if (0 !== gq === (0 !== Yq)) return null;
      const lq = Math.abs(gq + Yq);
      if (lq > mY.LASER_D) return null;
      return {
        dir: Yq < 0 ? 0 : gq > 0 ? 1 : Yq > 0 ? 2 : 3,
        KO: lq
      }
    }

    function HY(qq, Eq, gq) {
      const Yq = Eq => Math.abs(qq[0] - Eq[0]) <= 1 && Math.abs(qq[1] - Eq[1]) <= 1;
      return Yq(Eq) || Yq(gq)
    }

    function oY(qq, Eq) {
      return function(qq, Eq, gq, Yq) {
        return [0, 1, 2, 3].map((lq => {
          for (let Oq = 1; Oq <= mY.LASER_D; Oq++) {
            const mq = dY(qq, lq, Oq);
            if (HY([mq[0], mq[2]], Eq, gq) || !Yq(mq)) return !1
          }
          return !0
        }))
      }(aY(qq)[1], Eq.spawnXZ, Eq.coreXZ, (qq => qq[1] >= Wg.o && qq[1] < Wg.o + Wg.p && qq[0] >= Eq.minXZ[0] && qq[0] <= Eq.maxXZ[0] && qq[2] >= Eq.minXZ[1] && qq[2] <= Eq.maxXZ[1]))
    }
    const PY = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function QY(qq) {
      return Math.max(48 + 16 * qq, jq(qq).machineAllowance)
    }
    const yY = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function tY(qq) {
      const Eq = qq.split("|")[0];
      return yY.includes(Eq) ? "Solar Panel" : Eq === ag.b ? "Fluid Pipe" : WY(Eq) >= 0 ? "Collider" : (gq = Eq, PY.includes(gq) ? Eq : null);
      var gq
    }
    const rY = "buildAFactory2Game:solarPanelDescription";
    const vY = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function hY(qq, Eq) {
      var gq;
      return null !== (gq = vY.find((gq => {
        var Yq;
        return (null !== (Yq = qq.level(gq)) && void 0 !== Yq ? Yq : 0) >= Eq
      }))) && void 0 !== gq ? gq : null
    }
    const nY = "buildAFactory2Game:";
    let bY = null;
    const iY = {
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
      ZY = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      fY = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      MY = {
        "Loot Chest": `${nY}lookRuinChestName`
      };

    function TY(qq) {
      return "object" === typeof qq && null !== qq && "translationKey" in qq && "string" === typeof qq.translationKey ? qq.translationKey : null
    }

    function zY(qq, Eq) {
      var gq;
      return null !== (gq = TY(qq.displayName(Eq))) && void 0 !== gq ? gq : `item:${(0,Tq.ue)(Eq)}`
    }

    function SY(qq, Eq) {
      var gq, Yq, lq, Oq;
      let mq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq;
      if ("Solar Panel" === tY(Eq)) return {
        name: TY(qq.displayName("Solar Panel")),
        detail: rY,
        detailItem: null
      };
      const Aq = Eq.endsWith(" Ore"),
        cq = (bY ??= new Set([...Object.keys((0, Ng.m)()), ...Object.keys((0, ag.m)())].map((qq => qq.split("|")[0]))), bY).has(Eq),
        uq = Aq || cq ? null : function(qq) {
          var Eq;
          return qq.endsWith(" Log") && !qq.startsWith("Barkless ") ? "lookLog" : qq.endsWith(" Sapling") ? "lookSapling" : qq.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (Eq = iY[qq]) && void 0 !== Eq ? Eq : null
        }(Eq);
      if (!qq.isBlock(Eq) || !Aq && !cq && null === uq) return null;
      const Bq = null !== (gq = null !== (Yq = MY[Eq]) && void 0 !== Yq ? Yq : TY(null !== (lq = qq.displayName(mq)) && void 0 !== lq ? lq : qq.displayName(Eq))) && void 0 !== gq ? gq : `item:${(0,Tq.ue)(Eq)}`;
      if (null !== uq) return {
        name: Bq,
        detail: `${nY}${uq}`,
        detailItem: null
      };
      const Wq = null !== (Oq = ZY[Eq]) && void 0 !== Oq ? Oq : xq() ? fY[Eq] : void 0;
      if (cq && void 0 !== Wq) return {
        name: Bq,
        detail: `${nY}${Wq}`,
        detailItem: null
      };
      const Nq = mg[Eq];
      if (void 0 !== Nq) return {
        name: Bq,
        detail: `${nY}lookDeposit`,
        detailItem: zY(qq, Nq)
      };
      const aq = qq.harvestLevel(Eq);
      if (Aq && "rock" === qq.harvestType(Eq) && 0 !== aq) {
        const Eq = hY(qq, null !== aq && void 0 !== aq ? aq : 0);
        if (Eq === vY[0]) return {
          name: Bq,
          detail: `${nY}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== Eq) return {
          name: Bq,
          detail: `${nY}lookPickaxe`,
          detailItem: zY(qq, Eq)
        }
      }
      return {
        name: Bq,
        detail: TY(qq.description(Eq)),
        detailItem: null
      }
    }

    function pY(qq) {
      return qq < Wg.o - 24
    }
    const GY = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const LY = "Wrench",
      JY = "Nova Wrench";

    function kY(qq) {
      return qq === LY || qq === JY
    }
    const RY = [...Wg.F, "Belt Lift", "Belt Drop"];
    const UY = ["Belt Lift", "Belt Drop"],
      FY = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function sY(qq) {
      return qq.split("|")[0]
    }

    function XY(qq) {
      const Eq = /\|rot(\d)/.exec(qq);
      return Eq ? Number(Eq[1]) : 1
    }

    function wY(qq) {
      return qq % 4 + 1
    }

    function KY(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === Eq && "" === gq ? qq : `${qq}|meta|rot${Eq}${gq}`
    }

    function CY(qq) {
      return sY(qq) === Wg.v ? (0, Wg.P)(qq) ? "gateRight" : "gateLeft" : (0, Wg.S)(qq)
    }

    function IY(qq) {
      const Eq = sY(qq),
        gq = XY(qq);
      if (Wg.F.includes(Eq)) return (0, Wg.H)(Eq, wY(gq), null);
      if (Eq === Wg.g) return (0, Wg.X)(wY(gq), (0, Wg.Q)(qq));
      if (Eq === Wg.x) {
        const Yq = FY[(0, Wg.S)(qq)];
        return null === Yq ? KY(Eq, wY(gq)) : KY(Eq, gq, Wg.B[Yq])
      }
      return Eq === Wg.v ? (0, Wg.P)(qq) ? KY(Eq, wY(gq)) : KY(Eq, gq, Wg.m) : Vg.b.includes(Eq) && !UY.includes(Eq) || cg(Eq) ? KY(Eq, wY(gq)) : null
    }

    function eY(qq) {
      return Vg.b.includes(qq) || cg(qq) || null !== tY(qq)
    }

    function DY(qq) {
      return "Solar Panel" === tY(qq)
    }
    const ql = "buildAFactory2Game:",
      El = {
        leftFront: `${ql}lookSplitDetail_leftFront`,
        frontRight: `${ql}lookSplitDetail_frontRight`,
        gateRight: `${ql}lookGateDetail_gateRight`
      };

    function gl(qq, Eq) {
      var gq;
      let Yq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const lq = CY(qq),
        Oq = null === lq ? null : `${ql}${lq.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${lq}`,
        mq = null === lq ? null : null !== (gq = El[lq]) && void 0 !== gq ? gq : null;
      if (kY(Eq) && Yq) {
        const gq = sY(qq);
        return Eq === JY && xq() && function(qq) {
          return RY.includes(sY(qq))
        }(qq) ? {
          mode: Oq,
          detail: mq,
          next: `${ql}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Oq,
          detail: mq,
          next: eY(gq) && !DY(gq) ? `${ql}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Aq = kY(Eq) ? IY(qq) : null;
      if (null === Aq) return {
        mode: Oq,
        detail: mq,
        next: null,
        nextState: null
      };
      const cq = CY(Aq);
      return null === cq || XY(Aq) !== XY(qq) ? {
        mode: Oq,
        detail: mq,
        next: `${ql}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Oq,
        detail: mq,
        next: `${ql}lookWrenchNext`,
        nextState: `${ql}lookWrenchState_${cq}`
      }
    }
    const Yl = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const ll = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function Ol(qq) {
      return [0, 1, 2, 3].map((Eq => 0 !== (qq & 1 << Eq)))
    }

    function ml(qq) {
      const Eq = [];
      for (let gq = 8; gq + 2 < qq.length; gq += 3) Eq.push([qq[gq], qq[gq + 1], qq[gq + 2]]);
      return {
        focus: [qq[0], qq[1], qq[2]],
        lasers: Ol(qq[3]),
        open: Ol(qq[4]),
        live: Ol(qq[5]),
        on: 1 === qq[6],
        state: ll[qq[7]],
        blockers: Eq
      }
    }
    const xl = "Arc Caster",
      Al = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      cl = (Object.values(Al), "Jet Chestplate"),
      ul = "Nova Jet Chestplate",
      Bl = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Wl = Object.values(Bl);

    function Nl(qq, Eq, gq) {
      return Math.min(function(qq) {
        return xq() && Bq(qq) >= 5 ? 20 : 10
      }(gq), Math.floor(function(qq, Eq) {
        return Math.max(0, qq) + (xq() ? Math.max(0, Eq) : 0)
      }(qq, Eq) / 5))
    }

    function al(qq, Eq, gq) {
      const Yq = Nl(Eq, gq, qq),
        lq = Bq(qq),
        Oq = (lq >= 3 ? 55 : lq >= 1 ? 50 : qq >= 8 ? 45 : 30) + Yq,
        mq = Math.max(100 + Yq, 2 * Oq);
      return {
        arcDamage: Oq,
        arcPierce: qq >= 7 ? 2 : 1,
        arcChain: qq >= 10,
        barrierMax: (lq >= 4 ? 100 : lq >= 2 ? 90 : qq >= 9 ? 80 : qq >= 6 ? 60 : 40) + 5 * Yq,
        barrierRegenPerS: lq >= 5 ? 20 : qq >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Yq,
        novaShieldRegenPerS: 32,
        bladeDamage: mq,
        bladePunch: Math.round(.5 * mq),
        forgeRank: Yq
      }
    }
    const Vl = {
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
    var dl = gq(36880),
      jl = gq(36662),
      Hl = gq(36657),
      ol = gq(24),
      Pl = gq(1622),
      Ql = gq(1018),
      yl = gq.n(Ql);

    function tl(qq) {
      return !0 === qq.field
    }
    const rl = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function vl(qq) {
      return rl.has(qq) ? `buildAFactory2Game:itemPlural_${(0,Tq.ue)(qq)}` : null
    }
    var hl = gq(1183),
      nl = gq(1025),
      bl = gq(1895),
      il = gq(1876),
      Zl = gq(36866),
      fl = gq(36874),
      Ml = gq(31),
      Tl = gq(36859);
    const zl = "baf2QuestView",
      Sl = "baf2PlayerY",
      pl = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class Gl {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = qq, this.view = {
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
      set(qq, Eq) {
        var gq, Yq, lq, Oq, mq, xq, Aq, cq;
        const uq = JSON.stringify(qq.baf2QuestName) === JSON.stringify(this.view.name),
          Bq = new Set(this.view.rows.filter((qq => qq.done)).map((qq => qq.id))),
          Wq = new Set(this.view.rows.filter((qq => qq.justFinished)).map((qq => qq.id))),
          Nq = qq.baf2QuestSide,
          aq = null !== Nq && !0 === qq.baf2QuestSideFocus;
        let Vq = !1,
          dq = 0;
        const jq = qq.baf2QuestSteps.map((qq => {
            const Eq = Xl(qq, pl.has(qq[0]) ? qq[0] : "" + dq++),
              gq = uq && Eq.done && !Bq.has(Eq.id);
            return Eq.justFinished = gq || uq && Eq.done && Wq.has(Eq.id), Vq ||= gq, Eq
          })),
          Hq = sl(jq);
        Hq >= 0 && !aq && (jq[Hq].current = !0);
        const oq = !uq && null !== qq.baf2QuestName,
          Pq = JSON.stringify(Nq && [Nq[0], Nq[1]]),
          Qq = Pq === JSON.stringify(null !== (gq = null === (Yq = this.view.side) || void 0 === Yq ? void 0 : Yq.name) && void 0 !== gq ? gq : null),
          yq = null !== Nq && !this.sidesSeen.has(Pq);
        yq && this.sidesSeen.add(Pq), this.serverTutorial = null !== (lq = qq.baf2QuestTutorial) && void 0 !== lq ? lq : "on", (null !== (Oq = qq.baf2QuestTutorialSeq) && void 0 !== Oq ? Oq : 0) >= this.pickSeq && this.endPick();
        const tq = !uq || !Qq || qq.baf2QuestTier !== this.view.tier;
        this.view = {
          name: qq.baf2QuestName,
          rows: jq,
          reward: qq.baf2QuestReward,
          goal: qq.baf2QuestGoal,
          pulse: this.view.pulse + (Vq || oq ? 1 : 0),
          itemNames: Eq,
          side: Nq && {
            name: [Nq[0], Nq[1]],
            row: {
              ...Xl(Nq[2], "side"),
              current: aq
            },
            goal: null !== (mq = Nq[3]) && void 0 !== mq ? mq : null
          },
          sideCameUpAt: yq ? Date.now() : this.view.sideCameUpAt,
          tier: qq.baf2QuestTier,
          core: qq.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (xq = qq.baf2QuestAlso) && void 0 !== xq ? xq : [],
          depth: null !== (Aq = qq.baf2QuestDepth) && void 0 !== Aq ? Aq : null,
          tutorial: null !== (cq = this.pickedTutorial) && void 0 !== cq ? cq : this.serverTutorial,
          tutorialKnown: !0
        }, this.TV(), Vq && this.scheduleClear(), tq && this.requestBook()
      }
      setTutorial(qq) {
        return this.endPick(), this.pickedTutorial = qq, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.TV()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: qq
        }, this.TV(), this.pickSeq
      }
      onPlayerY(qq) {
        const Eq = Math.floor(qq);
        Eq !== this.playerY && (this.playerY = Eq, this.view.depth && Ml.i.TV(Sl, Eq))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(qq) {
        this.view = {
          ...this.view,
          chapters: qq.baf2BookChapters
        }, this.TV()
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
            rows: this.view.rows.map((qq => qq.justFinished ? {
              ...qq,
              justFinished: !1
            } : qq))
          }, this.TV()
        }), 2400)
      }
      TV() {
        Ml.i.TV(zl, this.view, !0)
      }
    }

    function Ll(qq, Eq) {
      return qq.sideCameUpAt > 0 && Eq - qq.sideCameUpAt < 2400
    }

    function Jl(qq) {
      return (null === qq.name || kl(qq)) && null === qq.side && null !== qq.chapters
    }

    function kl(qq) {
      var Eq;
      return "quest_forgeOngoing" === (null === (Eq = qq.name) || void 0 === Eq ? void 0 : Eq[0])
    }

    function Rl(qq) {
      return qq.filter((qq => !pl.has(qq.key)))
    }

    function Ul(qq) {
      return qq.key.startsWith("stepCraft")
    }

    function Fl(qq, Eq) {
      const gq = new Set,
        Yq = qq.side ? [...qq.rows, qq.side.row] : qq.rows;
      for (const Oq of Yq)
        if (!Oq.done) {
          !Oq.item || Eq && !Ul(Oq) || gq.add(Oq.item);
          for (const [qq, Eq, Yq] of null !== (lq = Oq.chips) && void 0 !== lq ? lq : []) {
            var lq;
            Eq < Yq && gq.add(qq)
          }
        } return gq
    }

    function sl(qq) {
      const Eq = qq.findIndex((qq => !qq.done && !qq.away));
      return Eq >= 0 ? Eq : qq.findIndex((qq => !qq.done))
    }

    function Xl(qq, Eq) {
      let [gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq] = qq;
      return {
        id: Eq,
        key: gq,
        params: Yq,
        item: lq,
        amount: Oq,
        total: mq,
        done: xq,
        chips: null !== Aq && void 0 !== Aq ? Aq : null,
        current: !1,
        away: !0 === cq,
        madeFor: null !== uq && void 0 !== uq ? uq : [],
        also: null !== Bq && void 0 !== Bq ? Bq : [],
        justFinished: !1
      }
    }
    const wl = "baf2QuestItems",
      Kl = new Set;
    let Cl = new Set,
      Il = null;

    function el(qq) {
      const Eq = Mq(qq.tutorial),
        gq = Eq ? Fl(qq, !0) : Kl;
      "inventory" === ol.b.get("openInGameMenuName") ? (Il = null, (0, Tl.A)(gq)) : Il = gq;
      const Yq = Eq ? Fl(qq, !1) : Kl;
      (0, fl.c)(Yq, Cl) || (Cl = Yq, Ml.i.TV(wl, Cl))
    }

    function Dl() {
      return (0, Zl.e)(wl, (() => Cl))
    }
    var qO = gq(9301),
      EO = gq(3166);

    function gO(qq) {
      const Eq = (0, EO.e)(qq),
        gq = void 0 === Eq ? void 0 : (0, qO.displayNameOf)(Eq);
      return "object" === typeof gq && null !== gq && "translationKey" in gq && "string" === typeof gq.translationKey ? gq.translationKey : `item:${(0,Tq.ue)(qq)}`
    }

    function YO(qq, Eq) {
      return qq(gO(Eq))
    }
    const lO = [{
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

    function OO(qq, Eq) {
      return [`Deposit Seed (${qq})`, {
        item: mg[`${qq} Deposit`],
        amount: Eq
      }]
    }
    const mO = Object.fromEntries([OO("Coal", 8), OO("Iron", 8), OO("Copper", 8), OO("Gold", 6), OO("Voltite", 4), OO("Uranium", 4)]),
      xO = "Relay Coil",
      AO = new Map;

    function cO(qq) {
      let Eq = AO.get(qq);
      if (!Eq) {
        const gq = Math.max(1, qq);
        Eq = lO.filter((qq => {
          var Eq;
          return gq >= qq.fromTier && gq <= (null !== (Eq = qq.untilTier) && void 0 !== Eq ? Eq : 1 / 0)
        })).map((qq => qq.later && gq >= qq.later.tier ? {
          ...qq,
          weight: qq.later.weight
        } : qq)), AO.set(qq, Eq)
      }
      return Eq
    }

    function uO(qq) {
      return cO(qq).some((qq => {
        let {
          item: Eq
        } = qq;
        return Eq === xO
      }))
    }

    function BO(qq) {
      return qq.startsWith("Deposit Seed (")
    }

    function WO(qq, Eq) {
      const gq = cO(qq);
      return Eq ? gq.filter((qq => Eq(qq.item))) : gq
    }

    function NO(qq) {
      return qq.reduce(((qq, Eq) => qq + Eq.weight), 0)
    }

    function aO(qq, Eq) {
      const gq = WO(qq, Eq),
        Yq = NO(gq);
      return gq.map((qq => ({
        find: qq,
        chance: qq.weight / Yq
      })))
    }
    const VO = 6e4,
      dO = new Intl.NumberFormat("en-US");

    function jO(qq, Eq) {
      const gq = qq >= 10 ? Math.round(qq) : Math.round(10 * qq) / 10;
      return 0 === gq ? "0" : `${Eq}${dO.format(gq)}`
    }

    function HO(qq) {
      return qq < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? dO.format(qq) : qq < 1e6 ? `${qq<1e5?Math.floor(qq/100)/10:Math.floor(qq/1e3)}k` : Math.floor(qq / 1e5) / 10 + "M"
    }

    function oO(qq) {
      return qq < 0 ? "\u2212" + -qq : String(qq)
    }

    function PO(qq, Eq) {
      const gq = Math.max(1, Math.round(Eq));
      if (gq < 60) return qq("buildAFactory2Game:durationSeconds", {
        seconds: String(gq)
      });
      const Yq = Math.round(gq / 60);
      if (Yq < 60) return qq("buildAFactory2Game:durationMinutes", {
        minutes: String(Yq)
      });
      const lq = String(Math.floor(Yq / 60));
      return Yq % 60 === 0 ? qq("buildAFactory2Game:durationWholeHours", {
        hours: lq
      }) : qq("buildAFactory2Game:durationHours", {
        hours: lq,
        minutes: String(Yq % 60)
      })
    }
    const QO = "(max-height: 420px), (max-width: 650px)";

    function yO() {
      return "undefined" !== typeof window && window.matchMedia(QO).matches
    }

    function tO(qq) {
      const Eq = window.matchMedia(QO),
        gq = () => {
          qq(Eq.matches)
        };
      return Eq.addEventListener("change", gq), () => {
        Eq.removeEventListener("change", gq)
      }
    }
    var rO = gq(1070);

    function vO(qq, Eq) {
      return null !== qq && qq > Eq + 1
    }

    function hO(qq) {
      const Eq = 100 * qq;
      return String(Eq <= 0 || Eq >= 1 ? Math.round(Eq) : Math.max(.1, Math.round(10 * Eq) / 10))
    }

    function nO(qq) {
      let {
        item: Eq,
        amount: gq
      } = qq;
      return (0, rO.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, rO.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, rO.jsx)(bl.e, {
            itemName: Eq,
            amount: 0
          })
        }), gq > 1 && (0, rO.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", gq]
        })]
      })
    }

    function bO(qq) {
      let {
        label: Eq,
        names: gq
      } = qq;
      const [lq, Oq] = (0, Yq.useState)(!1), mq = gq.join(" / ");
      return (0, rO.jsxs)(rO.Fragment, {
        children: [(0, rO.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: mq,
          "aria-expanded": lq,
          onClick: () => {
            Oq(!lq)
          },
          children: Eq
        }), lq && (0, rO.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: mq
        })]
      })
    }

    function iO(qq) {
      let {
        tier: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)(), {
        key: Yq,
        params: lq
      } = Nq(Eq, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Oq = gq(`buildAFactory2Game:${Yq}`, lq);
      return (0, rO.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, rO.jsx)(nl.d, {
          name: "lock"
        }), Oq]
      })
    }
    const ZO = (0, Yq.createContext)(null);

    function fO() {
      const {
        t: qq
      } = (0, hl.v)(), Eq = (0, Yq.useContext)(ZO);
      return (0, Yq.useEffect)((() => null === Eq || void 0 === Eq ? void 0 : Eq()), [Eq]), (0, rO.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: qq("buildAFactory2Game:recipeForQuest"),
        "aria-label": qq("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function MO(qq) {
      let {
        title: Eq,
        count: gq,
        children: lq,
        startOpen: Oq = !0
      } = qq;
      const {
        t: mq
      } = (0, hl.v)(), [xq, Aq] = (0, Yq.useState)((() => Oq && !yO())), [cq, uq] = (0, Yq.useState)(0), Bq = (0, Yq.useCallback)((() => (uq((qq => qq + 1)), () => {
        uq((qq => qq - 1))
      })), []);
      return (0, rO.jsxs)("div", {
        className: yl()("Baf2Recipes", {
          Open: xq
        }),
        children: [(0, rO.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Aq(!xq)
          },
          "aria-expanded": xq,
          children: [mq("buildAFactory2Game:recipesToggle", {
            title: Eq,
            count: String(gq)
          }), (0, rO.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: xq ? "\u25be" : "\u25b8"
          })]
        }), xq && (0, rO.jsxs)(ZO.Provider, {
          value: Bq,
          children: [(0, rO.jsx)("ul", {
            className: "Baf2RecipeList",
            children: lq
          }), cq > 0 && (0, rO.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, rO.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), mq("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const TO = "buildAFactory2Game:",
      zO = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const SO = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      pO = {
        "Uranium Grit": Oq,
        "Raw Uranium": Oq
      };

    function GO(qq) {
      var Eq;
      return null !== (Eq = pO[qq]) && void 0 !== Eq ? Eq : Math.max(Cq(qq), SO[qq] ? Cq(SO[qq]) : 1, function(qq) {
        const Eq = lq.findIndex((Eq => Eq.cost.some((Eq => Eq.item === qq))));
        return Eq > Oq ? Eq : 1
      }(qq))
    }

    function LO(qq, Eq) {
      return JO(Eq) ? GO(Eq) : function(qq) {
        if (zO.has(qq)) return 1;
        const Eq = lq.findIndex((Eq => Eq.newDeposits.some((Eq => {
          let {
            block: gq
          } = Eq;
          return gq === qq
        }))));
        return Eq < 0 ? 1 : Eq + 1
      }(qq)
    }

    function JO(qq) {
      return qq in pO || Bq(GO(qq)) > 0
    }

    function kO(qq, Eq) {
      return IE(qq, {
        coupled: !1,
        taught: null,
        atomic: xq() && Eq >= 11
      }).recipes
    }

    function RO(qq, Eq) {
      const gq = Wq(qq, Eq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bq(qq) > 0);
      return "open" === gq || "locked" === gq
    }

    function UO(qq, Eq) {
      return qq.map(((qq, gq) => ({
        value: qq,
        idx: gq,
        tier: Eq(qq)
      }))).sort(((qq, Eq) => qq.tier - Eq.tier || qq.idx - Eq.idx)).map((qq => {
        let {
          value: Eq
        } = qq;
        return Eq
      }))
    }

    function FO(qq, Eq, gq) {
      const Yq = Wq(qq, Eq);
      if ("hidden" === Yq || "open" === Yq) return null;
      if ("teaser" === Yq) return {
        tag: {
          translationKey: `${TO}${gq?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${TO}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const lq = Nq(qq, {
          tier: gq ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Oq = Nq(qq, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${TO}${lq.key}`,
          params: lq.params
        },
        reason: {
          translationKey: `${TO}${Oq.key}`,
          params: Oq.params
        }
      }
    }

    function sO(qq) {
      return !BO(qq)
    }

    function XO(qq) {
      let {
        seconds: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)();
      return (0, rO.jsx)(MO, {
        title: gq("buildAFactory2Game:recipesCuts", {
          seconds: Eq
        }),
        count: 1,
        children: (0, rO.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, rO.jsx)(nO, {
            item: "Maple Sapling",
            amount: 1
          }), (0, rO.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, rO.jsx)(nO, {
            item: "Maple Log",
            amount: 1
          }), (0, rO.jsx)("span", {
            className: "Baf2RecipeName",
            children: gq("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function wO(qq) {
      let {
        fertilised: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)();
      return (0, rO.jsxs)(MO, {
        title: gq("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, rO.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, rO.jsx)(nO, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, rO.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, rO.jsx)(nO, {
            item: "Wheat",
            amount: 1
          }), (0, rO.jsx)(nO, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, rO.jsx)("span", {
            className: "Baf2RecipeName",
            children: gq("buildAFactory2Game:recipeField")
          })]
        }), (0, rO.jsxs)("li", {
          className: yl()("Baf2Recipe", {
            InUse: Eq
          }),
          children: [(0, rO.jsx)(nO, {
            item: "Fertiliser",
            amount: 1
          }), (0, rO.jsx)("span", {
            className: "Baf2RecipeName",
            children: gq("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function KO(qq) {
      let {
        tier: Eq,
        seconds: gq
      } = qq;
      const {
        t: Yq
      } = (0, hl.v)(), lq = function(qq) {
        return qq >= 5 ? yE : QE
      }(Eq);
      return (0, rO.jsx)(MO, {
        title: Yq("buildAFactory2Game:recipesBringsUp", {
          seconds: gq
        }),
        count: lq.length,
        children: lq.map((qq => {
          let {
            item: Eq,
            chance: gq
          } = qq;
          return (0, rO.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, rO.jsx)(nO, {
              item: Eq,
              amount: 1
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeName",
              children: YO(Yq, Eq)
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Yq("buildAFactory2Game:recipeChance", {
                percent: hO(gq)
              })
            })]
          }, Eq)
        }))
      })
    }

    function CO(qq) {
      let {
        tier: Eq,
        seconds: gq,
        noSeeds: Yq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)(), Oq = Dl(), mq = aO(Eq, Yq ? sO : void 0), xq = Yq && aO(Eq).length > mq.length, Aq = uO(Eq);
      return (0, rO.jsxs)(MO, {
        title: lq("buildAFactory2Game:recipesRecycles", {
          seconds: gq
        }),
        count: mq.length,
        children: [mq.map((qq => {
          let {
            find: Eq,
            chance: gq
          } = qq;
          return (0, rO.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Oq.has(Eq.item) && (0, rO.jsx)(fO, {}), (0, rO.jsx)(nO, {
              item: Eq.item,
              amount: Eq.amount
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeName",
              children: YO(lq, Eq.item)
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: lq("buildAFactory2Game:recipeChance", {
                percent: hO(gq)
              })
            })]
          }, Eq.item)
        })), xq && (0, rO.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, rO.jsx)("span", {
            className: "Baf2RecipeName",
            children: lq("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Aq && (0, rO.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, rO.jsx)("span", {
            className: "Baf2RecipeName",
            children: lq("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function IO(qq) {
      let {
        tier: Eq,
        seconds: gq
      } = qq;
      const {
        t: Yq
      } = (0, hl.v)(), lq = Object.entries(mO).filter((qq => {
        let [, {
          item: gq
        }] = qq;
        return RO(GO(gq), Eq, JO(gq))
      }));
      return (0, rO.jsx)(MO, {
        title: Yq("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: gq
        }),
        count: lq.length,
        children: lq.map((qq => {
          let [Eq, {
            item: gq,
            amount: lq
          }] = qq;
          return (0, rO.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, rO.jsx)(nO, {
              item: Eq,
              amount: 1
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, rO.jsx)(nO, {
              item: gq,
              amount: lq
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeName",
              children: YO(Yq, gq)
            })]
          }, Eq)
        }))
      })
    }

    function eO(qq) {
      let {
        tier: Eq,
        seconds: gq
      } = qq;
      const {
        t: Yq
      } = (0, hl.v)(), lq = Dl(), Oq = UO(Object.entries(mg).filter((qq => {
        let [gq, Yq] = qq;
        return RO(LO(gq, Yq), Eq, JO(Yq))
      })), (qq => {
        let [Eq, gq] = qq;
        return LO(Eq, gq)
      }));
      return (0, rO.jsx)(MO, {
        title: Yq("buildAFactory2Game:recipesDigs", {
          seconds: gq
        }),
        count: Oq.length,
        children: Oq.map((qq => {
          let [gq, Oq] = qq;
          const mq = LO(gq, Oq),
            xq = mq > Eq ? mq : null,
            Aq = xg[gq],
            cq = null === xq && lq.has(Oq);
          return (0, rO.jsxs)("li", {
            className: yl()("Baf2Recipe", {
              Locked: null !== xq,
              Far: vO(xq, Eq)
            }),
            children: [cq && (0, rO.jsx)(fO, {}), (0, rO.jsx)(nO, {
              item: gq,
              amount: 1
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, rO.jsx)(nO, {
              item: Oq,
              amount: 1
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeName",
              children: YO(Yq, Oq)
            }), void 0 !== Aq && (0, rO.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Yq("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Aq)
              })
            }), null !== xq && (0, rO.jsx)(iO, {
              tier: xq
            })]
          }, gq)
        }))
      })
    }

    function DO(qq) {
      var Eq;
      let {
        def: gq,
        seconds: Yq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)();
      return (0, rO.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, rO.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (Eq = gq.fuels) && void 0 !== Eq ? Eq : []).map((qq => (0, rO.jsx)(nO, {
            item: qq,
            amount: 1
          }, qq))), (0, rO.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, rO.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, rO.jsx)(nl.d, {
              name: "bolt"
            }), lq("buildAFactory2Game:recipePower", {
              power: Iq(gq.powerMade),
              seconds: Yq
            })]
          })]
        })
      })
    }

    function qm(qq) {
      let {
        def: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)();
      return (0, rO.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, rO.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, rO.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, rO.jsx)(nl.d, {
              name: "bolt"
            }), gq("buildAFactory2Game:recipeMixer", {
              cryo: jO((0, eq.H)(Eq, Eq.cryoMade), "")
            })]
          })
        })
      })
    }

    function Em(qq) {
      let {
        def: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)();
      return (0, rO.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, rO.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, rO.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, rO.jsx)(nl.d, {
              name: "bolt"
            }), gq("buildAFactory2Game:recipeCondenser", {
              power: jO((0, eq.H)(Eq, Eq.powerPerOp), ""),
              water: jO((0, eq.H)(Eq, Eq.fluidMade), "")
            })]
          })
        })
      })
    }

    function gm(qq) {
      let {
        kind: Eq,
        def: gq,
        input: Yq,
        tier: lq,
        noSeeds: Oq = !1
      } = qq;
      const mq = String(gq.opMs / 1e3);
      return gg(gq) ? (0, rO.jsx)(XO, {
        seconds: mq
      }) : gq.field ? (0, rO.jsx)(wO, {
        fertilised: null !== Yq
      }) : gq.table ? (0, rO.jsx)(KO, {
        tier: lq,
        seconds: mq
      }) : gq.recycles ? (0, rO.jsxs)(rO.Fragment, {
        children: [(0, rO.jsx)(CO, {
          tier: lq,
          seconds: mq,
          noSeeds: Oq
        }), (0, rO.jsx)(IO, {
          tier: lq,
          seconds: mq
        })]
      }) : Eg(gq) ? (0, rO.jsx)(eO, {
        tier: lq,
        seconds: mq
      }) : void 0 !== gq.fluidMade ? (0, rO.jsx)(Em, {
        def: gq
      }) : void 0 !== gq.cryoMade ? (0, rO.jsx)(qm, {
        def: gq
      }) : void 0 !== gq.powerMade ? (0, rO.jsx)(DO, {
        def: gq,
        seconds: mq
      }) : (0, rO.jsx)(Ym, {
        kind: Eq,
        input: Yq,
        tier: lq,
        seconds: mq
      })
    }

    function Ym(qq) {
      let {
        kind: Eq,
        input: gq,
        tier: Yq,
        seconds: lq
      } = qq;
      const {
        t: Oq
      } = (0, hl.v)(), mq = Dl(), xq = UO(function(qq) {
        const Eq = new Map;
        for (const lq of qq) {
          var gq, Yq;
          const qq = [lq.output, lq.outputAmount, lq.inputAmount, null === (gq = lq.bonus) || void 0 === gq ? void 0 : gq.item, null === (Yq = lq.bonus) || void 0 === Yq ? void 0 : Yq.chance].join("|"),
            Oq = Eq.get(qq);
          Oq ? Oq.inputs.push(lq.input) : Eq.set(qq, {
            inputs: [lq.input],
            inputAmount: lq.inputAmount,
            output: lq.output,
            outputAmount: lq.outputAmount,
            bonus: lq.bonus
          })
        }
        return [...Eq.values()]
      }(kO(Eq, Yq).filter(ug)), (qq => GO(qq.output))).filter((qq => RO(GO(qq.output), Yq, JO(qq.output))));
      return (0, rO.jsx)(MO, {
        title: Oq("buildAFactory2Game:recipesEach", {
          seconds: lq
        }),
        count: xq.length,
        children: xq.map((qq => {
          const Eq = null !== gq && qq.inputs.includes(gq),
            lq = qq.inputs.length > 3 ? [Eq ? gq : qq.inputs[0]] : qq.inputs,
            xq = GO(qq.output) > Yq ? GO(qq.output) : null,
            Aq = null === xq && mq.has(qq.output);
          return (0, rO.jsxs)("li", {
            className: yl()("Baf2Recipe", {
              InUse: Eq,
              Locked: null !== xq,
              Far: vO(xq, Yq)
            }),
            children: [Aq && (0, rO.jsx)(fO, {}), lq.map(((Eq, gq) => (0, rO.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [gq > 0 && (0, rO.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, rO.jsx)(nO, {
                item: Eq,
                amount: qq.inputAmount
              })]
            }, Eq))), lq.length < qq.inputs.length && (0, rO.jsx)(bO, {
              label: Oq("buildAFactory2Game:recipeMore", {
                count: String(qq.inputs.length - lq.length)
              }),
              names: qq.inputs.filter((qq => !lq.includes(qq))).map((qq => YO(Oq, qq)))
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, rO.jsx)(nO, {
              item: qq.output,
              amount: qq.outputAmount
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeName",
              children: YO(Oq, qq.output)
            }), qq.bonus && (0, rO.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Oq("buildAFactory2Game:recipeBonus", {
                percent: hO(qq.bonus.chance)
              }), (0, rO.jsx)(nO, {
                item: qq.bonus.item,
                amount: 1
              })]
            }), null !== xq && (0, rO.jsx)(iO, {
              tier: xq
            })]
          }, `${qq.output}|${qq.inputs[0]}`)
        }))
      })
    }

    function lm(qq) {
      let {
        taught: Eq,
        tier: gq
      } = qq;
      const {
        t: Yq
      } = (0, hl.v)(), lq = Dl(), Oq = UO(Object.values(KE), (qq => qq.tier)).filter((qq => RO(qq.tier, gq)));
      return (0, rO.jsx)(MO, {
        title: Yq("buildAFactory2Game:benchCanMake"),
        count: Oq.length,
        startOpen: !1,
        children: Oq.map((qq => {
          const Oq = qq.tier > gq,
            mq = !Oq && lq.has(qq.output);
          return (0, rO.jsxs)("li", {
            className: yl()("Baf2Recipe", {
              InUse: qq.output === Eq,
              Locked: Oq,
              Far: vO(Oq ? qq.tier : null, gq)
            }),
            children: [mq && (0, rO.jsx)(fO, {}), (0, rO.jsx)(nO, {
              item: qq.output,
              amount: qq.outputAmount
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeName",
              children: YO(Yq, qq.output)
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), qq.inputs.map((qq => (0, rO.jsx)(nO, {
              item: qq.item,
              amount: qq.amount
            }, qq.item))), Oq && (0, rO.jsx)(iO, {
              tier: qq.tier
            })]
          }, qq.output)
        }))
      })
    }
    var Om, mm, xm, Am, cm;
    const um = TE.Generator,
      Bm = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Wm = 1e3 * (null !== (Om = um.powerMade) && void 0 !== Om ? Om : 0) / um.opMs,
      Nm = Math.min(...(null !== (mm = um.fuels) && void 0 !== mm ? mm : []).map((qq => Og[qq]))) / 1e3,
      am = TE["Volt Engine"],
      Vm = 1e3 * (null !== (xm = am.powerMade) && void 0 !== xm ? xm : 0) / am.opMs,
      dm = Og[null !== (Am = null === (cm = am.fuels) || void 0 === cm ? void 0 : cm[0]) && void 0 !== Am ? Am : ""] / 1e3;

    function jm(qq) {
      let {
        item: Eq,
        label: gq,
        value: Yq,
        note: lq,
        dim: Oq
      } = qq;
      return (0, rO.jsxs)("li", {
        className: yl()("Baf2PowerRow", {
          Dim: Oq
        }),
        children: [(0, rO.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, rO.jsx)(bl.e, {
            itemName: Eq,
            amount: 0
          })
        }), (0, rO.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, rO.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: gq
          }), lq && (0, rO.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: lq
          })]
        }), (0, rO.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Yq
        })]
      })
    }

    function Hm(qq, Eq, gq, Yq) {
      var lq;
      const Oq = void 0 === Yq ? TE[qq] : function(qq, Eq) {
          if (null === Eq) return qq;
          let gq = Xq.get(Eq);
          return gq || (gq = {
            ...qq,
            powerPerOp: sq(qq, Eq),
            farmMob: Eq
          }, Xq.set(Eq, gq)), gq
        }(TE[qq], Yq),
        mq = Eq && Oq.couplable ? RE(Oq, gq) : Oq;
      return 1e3 * (null !== (lq = mq.powerPerOp) && void 0 !== lq ? lq : 0) / mq.opMs
    }

    function om(qq) {
      var Eq, gq, Yq, lq, Oq, mq, xq, Aq;
      let {
        message: cq
      } = qq;
      const {
        t: uq
      } = (0, hl.v)(), Bq = (qq, Eq) => uq("buildAFactory2Game:powerPerSecond", {
        rate: jO(qq, Eq)
      }), [Wq, Nq] = cq.baf2PowerGenerators, aq = cq.baf2PowerGeneratorFuel, Vq = cq.baf2PowerSunPanels, dq = null !== (Eq = cq.baf2PowerSunShare) && void 0 !== Eq ? Eq : 1, jq = cq.baf2PowerVaults, Hq = cq.baf2PowerUsers, [oq, Pq] = null !== (gq = cq.baf2PowerEngines) && void 0 !== gq ? gq : [0, 0], Qq = null !== (Yq = cq.baf2PowerEngineCells) && void 0 !== Yq ? Yq : 0, yq = null !== (lq = cq.baf2PowerPads) && void 0 !== lq ? lq : 0, tq = null !== (Oq = cq.baf2PowerCharge) && void 0 !== Oq ? Oq : 0, [rq, vq] = null !== (mq = cq.baf2PowerReactors) && void 0 !== mq ? mq : [0, 0], [hq, nq] = null !== (xq = cq.baf2PowerBatteries) && void 0 !== xq ? xq : [0, 0];
      let bq = uq("buildAFactory2Game:powerEngineCells", {
        amount: String(Qq)
      });
      Qq > 0 && Pq > 0 && (bq = uq("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Qq),
        time: PO(uq, Qq * dm / Pq)
      }));
      let iq = uq("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(aq)
      });
      aq > 0 && Nq > 0 && (iq = uq("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(aq),
        time: PO(uq, aq * Nm / Nq)
      }));
      const Zq = Wq + oq + Vq + rq;
      return (0, rO.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, rO.jsxs)("section", {
          children: [(0, rO.jsxs)("h3", {
            children: [uq("buildAFactory2Game:powerMaking"), (0, rO.jsx)("span", {
              children: Bq(cq.baf2PowerMadePerS, "+")
            })]
          }), (0, rO.jsxs)("ul", {
            children: [0 === Zq && (0, rO.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: uq("buildAFactory2Game:powerNoMakers")
            }), Wq > 0 && (0, rO.jsx)(jm, {
              item: "Generator",
              label: `${YO(uq,"Generator")} \xd7${Wq}`,
              note: `${uq("buildAFactory2Game:powerRunning",{amount:String(Nq)})} \xb7 ${iq}`,
              value: Bq(Nq * Wm, "+"),
              dim: 0 === Nq
            }), oq > 0 && (0, rO.jsx)(jm, {
              item: "Volt Engine",
              label: `${YO(uq,"Volt Engine")} \xd7${oq}`,
              note: `${uq("buildAFactory2Game:powerRunning",{amount:String(Pq)})} \xb7 ${bq}`,
              value: Bq(Pq * Vm, "+"),
              dim: 0 === Pq
            }), Vq > 0 && (0, rO.jsx)(jm, {
              item: "Solar Panel",
              label: `${YO(uq,"Solar Panel")} \xd7${Vq}`,
              note: uq(dq < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Bq(4 * Vq * dq, "+")
            }), rq > 0 && (0, rO.jsx)(jm, {
              item: "Reactor Frame",
              label: `${uq("buildAFactory2Game:powerReactors")} \xd7${rq}`,
              note: uq("buildAFactory2Game:powerRunning", {
                amount: String(vq)
              }),
              value: Bq(null !== (Aq = cq.baf2PowerReactorPerS) && void 0 !== Aq ? Aq : 0, "+"),
              dim: 0 === vq
            })]
          })]
        }), (0, rO.jsxs)("section", {
          children: [(0, rO.jsxs)("h3", {
            children: [uq("buildAFactory2Game:powerStorage"), (0, rO.jsx)("span", {
              children: Iq(cq.baf2PowerCap)
            })]
          }), (jq > 0 || hq > 0) && (0, rO.jsxs)("ul", {
            children: [jq > 0 && (0, rO.jsx)(jm, {
              item: "Charge Vault",
              label: `${YO(uq,"Charge Vault")} \xd7${jq}`,
              value: `+${Iq(8e3*jq)}`
            }), hq > 0 && (0, rO.jsx)(jm, {
              item: "Battery Cell",
              label: `${uq("buildAFactory2Game:powerBatteries")} \xd7${hq}`,
              value: `+${Iq(nq)}`
            })]
          })]
        }), (0, rO.jsxs)("section", {
          children: [(0, rO.jsxs)("h3", {
            children: [uq("buildAFactory2Game:powerUsing"), (0, rO.jsx)("span", {
              children: Bq(cq.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, rO.jsxs)("ul", {
            children: [0 === Hq.length && 0 === yq && 0 === tq && (0, rO.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: uq("buildAFactory2Game:powerNoUsers")
            }), Hq.map((qq => {
              let [Eq, gq, Yq, lq, Oq = 1, mq] = qq, xq = gq ? uq(Bm[Oq - 1], {
                name: YO(uq, Eq)
              }) : YO(uq, Eq);
              return void 0 !== mq && (xq = uq("buildAFactory2Game:powerFarmName", {
                name: xq,
                mob: uq(Rq(mq))
              })), (0, rO.jsx)(jm, {
                item: Eq,
                label: `${xq} \xd7${Yq}`,
                note: uq("buildAFactory2Game:powerRunning", {
                  amount: String(lq)
                }),
                value: lq > 0 ? Bq(lq * Hm(Eq, gq, Oq, mq), "\u2212") : uq("buildAFactory2Game:powerIdle"),
                dim: 0 === lq
              }, `${Eq}|${gq}|${Oq}|${mq}`)
            })), yq > 0 && (0, rO.jsx)(jm, {
              item: "Charging Pad",
              label: `${YO(uq,"Charging Pad")} \xd7${yq}`,
              value: uq("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), tq > 0 && (0, rO.jsx)(jm, {
              item: "Homestead Core",
              label: uq("buildAFactory2Game:powerCharge"),
              value: Bq(tq, "\u2212")
            }), cq.baf2PowerStarved > 0 && (0, rO.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, rO.jsx)(nl.d, {
                name: "triangle-exclamation"
              }), uq("buildAFactory2Game:powerStarved", {
                amount: String(cq.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Pm = gq(4359),
      Qm = gq(1422);
    class ym {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(qq) {
        this.message = qq;
        for (const Eq of this.listeners) Eq()
      }
      get() {
        return this.message
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
    }
    class tm extends ym {}

    function rm(qq, Eq) {
      const gq = () => {
          const gq = qq.get();
          if (!gq || !Eq) return gq;
          const [Yq, lq, Oq] = gq.baf2PowerAt;
          return Yq === Eq[0] && lq === Eq[1] && Oq === Eq[2] ? gq : null
        },
        [lq, Oq] = (0, Yq.useState)(gq);
      return (0, Yq.useEffect)((() => (Oq(gq()), qq.subscribe((() => {
        Oq(gq())
      })))), [qq, ...null !== Eq && void 0 !== Eq ? Eq : []]), lq
    }

    function hm(qq) {
      return {
        stored: qq.baf2PowerStored,
        cap: qq.baf2PowerCap,
        madePerS: qq.baf2PowerMadePerS,
        usedPerS: qq.baf2PowerUsedPerS
      }
    }

    function nm(qq) {
      let {
        stored: Eq,
        cap: gq
      } = qq;
      return (0, rO.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, rO.jsx)("div", {
          style: {
            width: `${Math.min(100,100*Eq/Math.max(1,gq))}%`
          }
        })
      })
    }

    function bm(qq) {
      let {
        figures: Eq,
        labelled: gq = !1
      } = qq;
      const {
        t: Yq
      } = (0, hl.v)(), lq = Eq.madePerS - Eq.usedPerS, {
        text: Oq,
        draining: mq
      } = function(qq, Eq) {
        let {
          stored: gq,
          cap: Yq,
          madePerS: lq,
          usedPerS: Oq
        } = Eq;
        const mq = lq - Oq;
        return gq >= Yq ? {
          text: qq("buildAFactory2Game:powerFull"),
          draining: !1
        } : mq > .05 ? {
          text: qq("buildAFactory2Game:powerFullIn", {
            time: PO(qq, (Yq - gq) / mq)
          }),
          draining: !1
        } : mq < -.05 ? {
          text: qq("buildAFactory2Game:powerEmptyIn", {
            time: PO(qq, gq / -mq)
          }),
          draining: !0
        } : {
          text: qq("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Yq, Eq);
      return (0, rO.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, rO.jsx)(nm, {
          stored: Eq.stored,
          cap: Eq.cap
        }), (0, rO.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, rO.jsx)("span", {
            children: Yq(gq ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: Iq(Eq.stored),
              cap: Iq(Eq.cap)
            })
          }), (0, rO.jsxs)("span", {
            className: yl()("Baf2PowerNet", {
              Draining: mq
            }),
            children: [Yq("buildAFactory2Game:powerPerSecond", {
              rate: jO(Math.abs(lq), lq < 0 ? "\u2212" : "+")
            }), " \xb7 ", Oq]
          })]
        })]
      })
    }

    function im(qq) {
      let {
        stored: Eq,
        cap: gq,
        rates: Yq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)();
      return Yq ? (0, rO.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, rO.jsx)(bm, {
          figures: {
            stored: Eq,
            cap: gq,
            madePerS: Yq[0],
            usedPerS: Yq[1]
          },
          labelled: !0
        })
      }) : (0, rO.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, rO.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, rO.jsx)(nm, {
            stored: Eq,
            cap: gq
          }), (0, rO.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, rO.jsx)("span", {
              children: lq("buildAFactory2Game:powerStoredLabelled", {
                stored: Iq(Eq),
                cap: Iq(gq)
              })
            })
          })]
        })
      })
    }

    function Zm(qq) {
      let {
        store: Eq,
        close: gq
      } = qq;
      const {
        t: Yq
      } = (0, hl.v)(), lq = rm(Eq);
      return (0, rO.jsx)(Pm.c, {
        close: gq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, rO.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsxs)("div", {
              children: [(0, rO.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Yq("buildAFactory2Game:powerTitle")
              }), (0, rO.jsx)("p", {
                children: Yq("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, rO.jsx)(Qm.m, {
              onClick: gq
            })]
          }), lq && (0, rO.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, rO.jsx)(bm, {
              figures: hm(lq)
            }), (0, rO.jsx)(om, {
              message: lq
            })]
          })]
        })
      })
    }

    function fm(qq) {
      var Eq;
      let {
        kind: gq,
        def: lq,
        Uq: Oq,
        power: mq,
        stored: xq,
        cap: Aq
      } = qq;
      const {
        t: cq
      } = (0, hl.v)(), uq = rm(mq, Oq), [Bq, Wq] = (0, Yq.useState)(!1);
      return (0, rO.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, rO.jsx)(gm, {
          kind: gq,
          def: lq,
          input: null,
          tier: null !== (Eq = null === uq || void 0 === uq ? void 0 : uq.baf2PowerTier) && void 0 !== Eq ? Eq : 1
        }), (0, rO.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: cq("buildAFactory2Game:powerTitle")
        }), uq && (0, rO.jsx)(bm, {
          figures: hm(uq)
        }), !uq && (0, rO.jsx)(im, {
          stored: xq,
          cap: Aq,
          rates: null
        }), uq && (0, rO.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Wq(!Bq)
          },
          "aria-expanded": Bq,
          children: cq(Bq ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), uq && Bq && (0, rO.jsx)(om, {
          message: uq
        })]
      })
    }
    const Mm = 2500,
      Tm = 17500,
      zm = `${Qq} `;
    const Sm = ["plan", "throttle"];

    function pm(qq) {
      if (qq.startsWith(`${hE} `)) return qq.slice(0, qq.lastIndexOf(" "));
      const Eq = qq.split(" ");
      return Eq[0] === uE && Sm.includes(Eq[4]) ? Eq.slice(0, 5).join(" ") : null
    }
    class Gm {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = qq, this.now = Eq, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.Llq = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = Eq()
      }
      enqueue(qq) {
        this.queue(qq, this.nextTicket());
        const Eq = this.Llq + this.pending.length;
        return this.flush(), Eq
      }
      track(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gq = this.nextTicket();
        if (!Eq.urgent) return this.queue(qq, gq), this.flush(), gq;
        const {
          supersedes: Yq
        } = Eq;
        for (let Oq = this.pending.length - 1; Oq >= this.urgent; Oq--) {
          const Eq = this.pending[Oq];
          (Eq.command === qq || null !== Yq && void 0 !== Yq && Yq(Eq.command)) && (this.pending.splice(Oq, 1), this.markLeft(Eq.tickets))
        }
        const lq = this.pending.findIndex((Eq => {
          let {
            command: gq
          } = Eq;
          return gq === qq
        }));
        return -1 !== lq ? this.pending[lq].tickets.push(gq) : (this.pending.splice(this.urgent, 0, {
          command: qq,
          tickets: [gq]
        }), this.urgent += 1), this.flush(), gq
      }
      leftAt(qq) {
        const Eq = this.leftTimes.get(qq);
        return void 0 !== Eq ? Eq : this.pending.some((Eq => {
          let {
            tickets: gq
          } = Eq;
          return gq.includes(qq)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let qq = !0;
        return () => {
          qq && (qq = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(qq) {
        var Eq;
        return (null === (Eq = this.pending.at(-1)) || void 0 === Eq ? void 0 : Eq.command) === qq
      }
      sent() {
        return this.Llq
      }
      clear() {
        for (const {
            tickets: qq
          }
          of this.pending) this.markLeft(qq);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(qq) {
        const Eq = this.now();
        for (const gq of qq) this.leftTimes.set(gq, Eq);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(qq, Eq) {
        const gq = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === gq || void 0 === gq ? void 0 : gq.command) === qq) return void(! function(qq) {
          return qq === yq || qq.startsWith(`${Pq} `) || qq.startsWith(`${Lq} `)
        }(qq) ? gq.tickets.push(Eq) : (this.pending.pop(), this.markLeft([...gq.tickets, Eq])));
        const Yq = void 0 === gq ? null : cE(gq.command, qq);
        if (null !== Yq && void 0 !== gq) return gq.command = Yq, void gq.tickets.push(Eq);
        const lq = pm(qq);
        if (null !== lq && void 0 !== gq && pm(gq.command) === lq) return gq.command = qq, void gq.tickets.push(Eq);
        if (null !== gq && void 0 !== gq && gq.command.startsWith(zm) && qq.startsWith(zm)) {
          const Yq = qq.slice(zm.length);
          if (gq.command.slice(zm.length).split(",").includes(Yq)) return void gq.tickets.push(Eq);
          const lq = `${gq.command},${Yq}`;
          if (lq.length <= 119) return gq.command = lq, void gq.tickets.push(Eq)
        }
        this.pending.push({
          command: qq,
          tickets: [Eq]
        })
      }
      flush() {
        const qq = this.now();
        for (this.tokens = Math.min(5, this.tokens + (qq - this.refilledAt) / Mm), this.refilledAt = qq; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.Llq += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: qq,
            tickets: Eq
          } = this.pending.shift();
          this.markLeft(Eq), this.send(qq)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Mm)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Lm {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new Gm(qq, Eq)
      }
      send(qq) {
        return this.queue.enqueue(qq)
      }
      sent() {
        return this.queue.sent()
      }
      track(qq, Eq) {
        return this.queue.track(qq, Eq)
      }
      leftAt(qq) {
        return this.queue.leftAt(qq)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(qq) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = Eq, this.send(qq), this.islandEdits.count
      }
      syncIslandEdits(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: gq
        } = this, Yq = Eq - gq.lastAtMs < Tm;
        gq.count = Yq ? Math.max(gq.count, qq) : qq
      }
      clear() {
        this.queue.clear()
      }
    }
    const Jm = (0, Yq.createContext)(null);

    function km() {
      const qq = (0, Yq.useContext)(Jm);
      if (!qq) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return qq
    }

    function Rm(qq, Eq) {
      return null !== Eq && void 0 !== Eq ? Eq : 1 === qq
    }

    function Um(qq, Eq) {
      return qq.every((qq => {
        var gq;
        let [Yq, , lq] = qq;
        return !Rm(lq, null === (gq = Eq.get(Yq)) || void 0 === gq ? void 0 : gq.jN)
      }))
    }

    function Fm(qq, Eq, gq) {
      if (0 === qq.size) return qq;
      const Yq = new Map(qq);
      for (const [lq, Oq] of qq) {
        const qq = Eq.find((qq => {
          let [Eq] = qq;
          return Eq === lq
        }));
        (!qq || Oq.jN === (1 === qq[2]) || Oq.atMs < gq) && Yq.delete(lq)
      }
      return Yq
    }

    function sm(qq) {
      var Eq;
      let {
        Uq: gq,
        input: lq,
        drops: Oq,
        seconds: mq
      } = qq;
      const {
        t: xq
      } = (0, hl.v)(), Aq = km(), [cq, uq] = (0, Yq.useState)(new Map);
      (0, Yq.useEffect)((() => {
        Oq && uq((qq => Fm(qq, Oq, Date.now() - Tm)))
      }), [Oq]), (0, Yq.useEffect)((() => {
        const qq = function(qq, Eq) {
          let gq = null;
          for (const {
              atMs: Yq
            }
            of qq.values()) gq = null === gq ? Yq : Math.min(gq, Yq);
          return null === gq ? null : gq + Eq
        }(cq, Tm);
        if (null === qq || !Oq) return;
        const Eq = setTimeout((() => {
          uq((qq => Fm(qq, Oq, Date.now() - Tm)))
        }), Math.max(0, qq - Date.now()) + 1);
        return () => {
          clearTimeout(Eq)
        }
      }), [cq, Oq]);
      const Bq = Uq(lq),
        Wq = null !== Bq && null !== Oq && Um(Oq, cq),
        Nq = function(qq, Eq, gq) {
          return null === qq || null === Eq || Um(Eq, gq) ? 0 : Gq[Sq[qq]]
        }(Bq, Oq, cq);
      return (0, rO.jsxs)(MO, {
        title: xq("buildAFactory2Game:farmDropsTitle", {
          seconds: mq
        }),
        count: null !== (Eq = null === Oq || void 0 === Oq ? void 0 : Oq.length) && void 0 !== Eq ? Eq : 0,
        children: [Nq > 0 && (0, rO.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: xq("buildAFactory2Game:farmDropsPower", {
            power: String(Nq)
          })
        }), (null === Bq || !Oq) && (0, rO.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: xq("buildAFactory2Game:farmDropsEmpty")
        }), Wq && (0, rO.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: xq("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Bq && (null === Oq || void 0 === Oq ? void 0 : Oq.map((qq => {
          var Eq;
          let [Yq, lq, Oq] = qq;
          const mq = lq < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Bq = Rm(Oq, null === (Eq = cq.get(Yq)) || void 0 === Eq ? void 0 : Eq.jN);
          return (0, rO.jsxs)("li", {
            className: yl()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Bq
            }),
            children: [(0, rO.jsx)(nO, {
              item: Yq,
              amount: 1
            }), (0, rO.jsx)("span", {
              className: "Baf2RecipeName",
              children: YO(xq, Yq)
            }), (0, rO.jsx)("span", {
              className: "Baf2FarmRate",
              children: xq(mq, {
                amount: String(lq)
              })
            }), (0, rO.jsx)("button", {
              type: "button",
              className: yl()("Baf2FarmToggle SmallTextBold", {
                Kept: Bq
              }),
              "aria-pressed": Bq,
              onClick: () => {
                uq(new Map(cq).set(Yq, {
                  jN: !Bq,
                  atMs: Date.now()
                })), Aq.send(function(qq, Eq, gq, Yq) {
                  return `${Lq} ${qq} ${Eq} ${gq} ${Yq}`
                }(gq[0], gq[1], gq[2], Yq))
              },
              children: xq(Bq ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Yq)
        })))]
      })
    }
    var Xm;
    const wm = String(null !== (Xm = TE.Synthesizer.waterPerOp) && void 0 !== Xm ? Xm : 0);

    function Km(qq) {
      let {
        Uq: Eq,
        taught: gq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)(), Oq = km(), [mq, xq] = (0, Yq.useState)(null);
      (0, Yq.useEffect)((() => {
        null !== mq && gq === mq && xq(null)
      }), [mq, gq]);
      const Aq = null !== mq && void 0 !== mq ? mq : gq;
      let cq = lq("buildAFactory2Game:synthPick");
      return null !== Aq && (cq = lq("buildAFactory2Game:synthGrows", {
        name: YO(lq, Aq),
        input: YO(lq, tE),
        water: wm
      })), (0, rO.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, rO.jsx)("div", {
          className: yl()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Aq
          }),
          children: cq
        }), (0, rO.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: rE.map(((qq, gq) => {
            const Yq = YO(lq, qq),
              mq = qq === Aq;
            return (0, rO.jsx)("li", {
              children: (0, rO.jsx)("button", {
                type: "button",
                className: yl()("Baf2SynthTile", {
                  Selected: mq
                }),
                title: Yq,
                "aria-label": Yq,
                "aria-pressed": mq,
                onClick: () => {
                  mq || (xq(qq), Oq.send(`${hE} ${Eq[0]} ${Eq[1]} ${Eq[2]} ${gq}`))
                },
                children: (0, rO.jsx)(bl.e, {
                  itemName: qq,
                  amount: 0
                })
              })
            }, qq)
          }))
        })]
      })
    }
    const Cm = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function Im(qq) {
      let {
        kind: Eq,
        tier: gq,
        coupled: Yq,
        level: lq,
        slot: Oq
      } = qq;
      const {
        t: mq
      } = (0, hl.v)(), Aq = Cq(SE);
      if (!Yq && null !== gq && gq < Aq) return (0, rO.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, rO.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, rO.jsx)(nl.d, {
            name: "lock"
          })
        }), (0, rO.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: mq("buildAFactory2Game:upgradeLocked")
        }), (0, rO.jsx)("span", {
          className: "Baf2TierTag",
          children: mq("buildAFactory2Game:tierTag", {
            tier: String(Aq)
          })
        })]
      });
      const cq = function(qq, Eq) {
          if (xq() && "Crusher" !== qq && null !== Eq) {
            if (em(GE, Eq)) return {
              item: GE,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (em(pE, Eq)) return {
              item: pE,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: SE,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(Eq, gq),
        uq = mq(Yq ? Cm[lq - 1] : cq.emptyKey),
        Bq = null !== gq ? function(qq, Eq, gq, Yq) {
          if (!xq() || !gq || "Crusher" === qq || Eq < 10) return null;
          const lq = Cq(GE);
          if (Yq < 3 && lq > 1 && (2 === Yq || Eq >= lq)) return {
            tier: lq,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Oq = Cq(pE);
          if (1 === Yq && Oq > 1) return {
            tier: Oq,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(Eq, gq, Yq, lq) : null;
      return (0, rO.jsxs)("div", {
        className: yl()("Baf2UpgradeSocket", {
          Fitted: Yq
        }),
        children: [(0, rO.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Yq && Oq, !Yq && (0, rO.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, rO.jsx)(bl.e, {
              itemName: cq.item,
              amount: 0
            })
          })]
        }), (0, rO.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, rO.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: mq("buildAFactory2Game:upgradeTitle")
          }), (0, rO.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: uq
          }), Yq && lq >= 2 && "Crusher" === Eq && (0, rO.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: mq("buildAFactory2Game:couplerCrusherHint")
          }), Bq && null !== gq && gq < Bq.tier && (0, rO.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, rO.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, rO.jsx)(nl.d, {
                name: "lock"
              })
            }), mq(Bq.lockedKey), (0, rO.jsx)("span", {
              className: "Baf2TierTag",
              children: mq("buildAFactory2Game:tierTag", {
                tier: String(Bq.tier)
              })
            })]
          }), Bq && null !== gq && gq >= Bq.tier && (0, rO.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: mq(Bq.nextKey)
          })]
        })]
      })
    }

    function em(qq, Eq) {
      const gq = Cq(qq);
      return gq > 1 && Eq >= gq
    }
    var Dm = gq(37086);
    const qx = (0, eq.H)(TE.Condenser, TE.Condenser.fluidMade),
      Ex = .05;
    class gx extends ym {}

    function Yx(qq) {
      return jO(qq, "")
    }

    function lx(qq, Eq, gq) {
      return qq(Eq ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: gq
      })
    }

    function Ox(qq, Eq, gq, Yq) {
      return gq <= Ex && Yq <= Ex ? null : Yq <= Ex || gq <= Ex ? lx(qq, Eq, Yq <= Ex ? jO(gq, "+") : jO(Yq, "\u2212")) : qq(Eq ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: Yx(gq),
        used: Yx(Yq)
      })
    }

    function mx(qq, Eq) {
      return Math.min(100, 100 * qq / Math.max(1, Eq))
    }

    function xx(qq) {
      let {
        stored: Eq,
        cap: gq,
        netPerS: Yq,
        rates: lq,
        cryo: Oq
      } = qq;
      const {
        t: mq
      } = (0, hl.v)(), xq = function(qq, Eq, gq, Yq) {
        return gq <= 0 ? qq("buildAFactory2Game:waterNoStorage") : Eq >= gq ? qq("buildAFactory2Game:powerFull") : Yq > Ex ? qq("buildAFactory2Game:powerFullIn", {
          time: PO(qq, (gq - Eq) / Yq)
        }) : Yq < -.05 ? Eq <= 0 ? qq("buildAFactory2Game:waterEmpty") : qq("buildAFactory2Game:powerEmptyIn", {
          time: PO(qq, Eq / -Yq)
        }) : qq("buildAFactory2Game:powerSteady")
      }(mq, Eq, gq, Yq), Aq = gq > 0 && Eq < gq && Math.abs(Yq) <= Ex, cq = mq(Oq ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), uq = null !== lq ? `${lq} \xb7 ${xq}` : Aq ? cq : `${cq} \xb7 ${xq}`;
      return (0, rO.jsxs)(rO.Fragment, {
        children: [(0, rO.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, rO.jsx)("div", {
            style: {
              width: `${mx(Eq,gq)}%`
            }
          })
        }), (0, rO.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, rO.jsx)("span", {
            children: gq > 0 && mq("buildAFactory2Game:powerStored", {
              stored: (0, eq.P)(Eq),
              cap: (0, eq.P)(gq)
            })
          }), (0, rO.jsx)("span", {
            className: yl()("Baf2WaterNet", {
              Draining: Yq < -.05
            }),
            children: uq
          })]
        })]
      })
    }

    function Ax(qq) {
      let {
        water: Eq,
        at: gq,
        side: Yq = null
      } = qq;
      const {
        t: lq
      } = (0, hl.v)(), Oq = km(), [mq, xq, Aq] = Eq;
      return (0, rO.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, rO.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, rO.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: lq(null === Yq ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Yq}`)
          }), (0, rO.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Oq.send(`${eq.E} ${gq[0]} ${gq[1]} ${gq[2]}${"cryoOut"===Yq?" cryo":""}`)
            },
            children: lq("buildAFactory2Game:waterDetails")
          })]
        }), (0, rO.jsx)(xx, {
          stored: mq,
          cap: xq,
          netPerS: Aq,
          rates: lx(lq, "cryoOut" === Yq, jO(Math.abs(Aq), Aq < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Yq
        })]
      })
    }

    function cx(qq, Eq) {
      var gq, Yq, lq;
      const Oq = !0 === Eq.baf2WaterCryo,
        mq = null !== (gq = null === (Yq = Eq.baf2WaterMakers.find((qq => qq[0] === (Oq ? eq.d : "Condenser")))) || void 0 === Yq ? void 0 : Yq[1]) && void 0 !== gq ? gq : 0,
        xq = [],
        Aq = (Eq, gq, Yq) => {
          Eq > 0 && xq.push(qq(1 === Eq ? gq : Yq, {
            count: String(Eq)
          }))
        };
      return Oq ? Aq(mq, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Aq(mq, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Aq(null !== (lq = Eq.baf2WaterPipes) && void 0 !== lq ? lq : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Aq(Eq.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), xq.join(" \xb7 ")
    }

    function ux(qq, Eq) {
      if (!0 === Eq.baf2WaterCryo) return function(qq, Eq) {
        const gq = TE[eq.d];
        switch (Eq.baf2WaterThis) {
          case "pipe":
            return {
              text: qq("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: qq("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: qq("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: qq("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: qq("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: qq("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: qq("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var Yq;
            const [lq, Oq] = null !== (Yq = Eq.baf2WaterThisRates) && void 0 !== Yq ? Yq : [(0, eq.H)(gq, gq.cryoMade), (0, eq.H)(gq, gq.powerPerOp)];
            return !0 === Eq.baf2WaterDriven ? {
              text: qq("buildAFactory2Game:cryoThisMixerDriven", {
                rate: Yx(lq)
              }),
              bad: !1
            } : {
              text: qq("buildAFactory2Game:cryoThisMixer", {
                rate: Yx(lq),
                power: Yx(Oq)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: qq("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(qq, Eq);
      const gq = !0 === Eq.baf2WaterDriven,
        Yq = TE.Condenser;
      switch (Eq.baf2WaterThis) {
        case "pipe":
          return {
            text: qq("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: qq("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: qq("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: qq("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: qq("buildAFactory2Game:waterThisTank", {
              tank: (0, eq.P)(eq.t),
              cap: (0, eq.P)(Eq.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var lq;
          const [Oq, mq] = null !== (lq = Eq.baf2WaterThisRates) && void 0 !== lq ? lq : [qx, (0, eq.H)(Yq, Yq.powerPerOp)];
          return gq ? {
            text: qq("buildAFactory2Game:waterThisCondenserDriven", {
              rate: Yx(Oq)
            }),
            bad: !1
          } : {
            text: qq("buildAFactory2Game:waterThisCondenser", {
              rate: Yx(Oq),
              power: Yx(mq)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: qq("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function Bx(qq, Eq) {
      const gq = Eq.baf2WaterMakers.some((qq => !0 === qq[5]));
      if (!0 === Eq.baf2WaterCryo) {
        const Yq = Eq.baf2WaterUsedPerS - Eq.baf2WaterMadePerS,
          lq = gq || Yq <= Ex ? 0 : (0, eq.G)(Yq);
        return 0 === lq ? null : lq > 1 ? qq("buildAFactory2Game:cryoNextMixers", {
          mixers: String(lq)
        }) : qq("buildAFactory2Game:cryoNextOne")
      }
      const Yq = gq ? null : function(qq, Eq) {
        const gq = Eq - qq;
        return gq <= Ex ? null : Math.ceil(gq / qx)
      }(Eq.baf2WaterMadePerS, Eq.baf2WaterUsedPerS);
      return null === Yq ? null : Yq > 1 ? qq("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Yq)
      }) : qq("buildAFactory2Game:waterNextOne")
    }

    function Wx(qq) {
      let {
        item: Eq,
        label: gq,
        note: Yq,
        value: lq,
        dim: Oq,
        bad: mq
      } = qq;
      return (0, rO.jsxs)("li", {
        className: yl()("Baf2WaterRow", {
          Dim: Oq,
          Bad: mq
        }),
        children: [(0, rO.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, rO.jsx)(bl.e, {
            itemName: Eq,
            amount: 0
          })
        }), (0, rO.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, rO.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: gq
          }), Yq && (0, rO.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Yq
          })]
        }), (0, rO.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: lq
        })]
      })
    }

    function Nx(qq) {
      return Dm.m[qq] ? qq : "Reactor Port"
    }

    function ax(qq) {
      let {
        message: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)(), Yq = !0 === Eq.baf2WaterCryo, lq = (qq, Eq) => lx(gq, Yq, jO(qq, Eq));
      return (0, rO.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, rO.jsxs)("section", {
          children: [(0, rO.jsxs)("h3", {
            children: [gq("buildAFactory2Game:waterMakes"), (0, rO.jsx)("span", {
              children: lq(Eq.baf2WaterMadePerS, "+")
            })]
          }), (0, rO.jsxs)("ul", {
            children: [0 === Eq.baf2WaterMakers.length && (0, rO.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: gq(Yq ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), Eq.baf2WaterMakers.map((qq => {
              let [Eq, Yq, Oq, mq, xq, Aq] = qq;
              const cq = gq("buildAFactory2Game:powerRunning", {
                amount: String(Oq)
              });
              let uq = xq > 0 ? gq("buildAFactory2Game:waterMakerPower", {
                running: cq,
                power: Yx(xq)
              }) : cq;
              return Aq && (uq = gq(0 === Oq && mq <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, rO.jsx)(Wx, {
                item: Eq,
                label: `${YO(gq,Eq)} \xd7${Yq}`,
                note: uq,
                value: Oq > 0 || Aq && mq > 0 ? lq(mq, "+") : gq("buildAFactory2Game:powerIdle"),
                dim: 0 === Oq && !Aq,
                bad: Aq
              }, Eq)
            }))]
          })]
        }), (0, rO.jsxs)("section", {
          children: [(0, rO.jsxs)("h3", {
            children: [gq("buildAFactory2Game:waterUses"), (0, rO.jsx)("span", {
              children: lq(Eq.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, rO.jsxs)("ul", {
            children: [0 === Eq.baf2WaterUsers.length && (0, rO.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: gq(Yq ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), Eq.baf2WaterUsers.map((qq => {
              let [Eq, Yq, Oq, mq] = qq;
              const xq = Dm.m[Eq] ? YO(gq, Eq) : Eq;
              return (0, rO.jsx)(Wx, {
                item: Nx(Eq),
                label: Yq > 1 ? `${xq} \xd7${Yq}` : xq,
                note: mq ? gq("buildAFactory2Game:waterPortFirst") : void 0,
                value: Oq > 0 ? lq(Oq, "\u2212") : gq("buildAFactory2Game:powerIdle"),
                dim: 0 === Oq
              }, Eq)
            }))]
          })]
        })]
      })
    }

    function Vx(qq) {
      var Eq, gq, lq, Oq, mq;
      let {
        store: xq,
        close: Aq
      } = qq;
      const {
        t: cq
      } = (0, hl.v)(), uq = function(qq) {
        const [Eq, gq] = (0, Yq.useState)((() => qq.get()));
        return (0, Yq.useEffect)((() => (gq(qq.get()), qq.subscribe((() => {
          gq(qq.get())
        })))), [qq]), Eq
      }(xq), Bq = null !== (Eq = null === uq || void 0 === uq ? void 0 : uq.baf2WaterStored) && void 0 !== Eq ? Eq : 0, Wq = null !== (gq = null === uq || void 0 === uq ? void 0 : uq.baf2WaterCap) && void 0 !== gq ? gq : 0, Nq = null !== (lq = null === uq || void 0 === uq ? void 0 : uq.baf2WaterMadePerS) && void 0 !== lq ? lq : 0, aq = null !== (Oq = null === uq || void 0 === uq ? void 0 : uq.baf2WaterUsedPerS) && void 0 !== Oq ? Oq : 0, Vq = null !== (mq = null === uq || void 0 === uq ? void 0 : uq.baf2WaterNetPerS) && void 0 !== mq ? mq : Nq - aq, dq = uq && ux(cq, uq), jq = uq && Bx(cq, uq), Hq = !0 === (null === uq || void 0 === uq ? void 0 : uq.baf2WaterCryo);
      return (0, rO.jsx)(Pm.c, {
        close: Aq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, rO.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== uq && Wq <= 0 ? (0, rO.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, rO.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, rO.jsx)(bl.e, {
                  itemName: Hq ? ag.d : eq.m,
                  amount: 0
                })
              }), (0, rO.jsxs)("div", {
                children: [(0, rO.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: cq(Hq ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), uq && (0, rO.jsx)("p", {
                  children: cx(cq, uq)
                })]
              })]
            }), (0, rO.jsx)(Qm.m, {
              onClick: Aq
            })]
          }), uq && dq && (0, rO.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, rO.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, rO.jsx)(xx, {
                stored: Bq,
                cap: Wq,
                netPerS: Vq,
                cryo: Hq,
                rates: Ox(cq, Hq, Nq, aq)
              })
            }), (0, rO.jsx)("div", {
              className: yl()("Baf2WaterThis", {
                Bad: dq.bad
              }),
              children: dq.text
            }), uq.baf2WaterDriven && (0, rO.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, rO.jsx)(nl.d, {
                name: "bolt"
              }), cq(Hq ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), jq && (0, rO.jsx)("p", {
              className: "Baf2WaterNext",
              children: jq
            }), (0, rO.jsx)(ax, {
              message: uq
            })]
          })]
        })
      })
    }
    class dx {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(qq, Eq) {
        const gq = this.get(qq);
        gq && null === Eq.opLeftMs && null === Eq.fuelLeftMs && Eq.status === gq.status ? Eq = {
          ...Eq,
          opLeftMs: gq.opLeftMs,
          fuelLeftMs: gq.fuelLeftMs,
          burning: gq.burning
        } : this.updates++, this.pos = qq, this.view = Eq;
        for (const Yq of this.listeners) Yq()
      }
      get(qq) {
        return null !== this.pos && this.pos[0] === qq[0] && this.pos[1] === qq[1] && this.pos[2] === qq[2] ? this.view : null
      }
      forget(qq) {
        null !== this.get(qq) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
    }

    function jx(qq, Eq, gq, Yq) {
      return "noFuel" === Eq && Yq && !lg(TE[qq]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === Eq && !0 === (null === gq || void 0 === gq ? void 0 : gq.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === Eq && !0 === (null === gq || void 0 === gq ? void 0 : gq.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === Eq && !0 === (null === gq || void 0 === gq ? void 0 : gq.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === Eq && !0 === (null === gq || void 0 === gq ? void 0 : gq.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Hx(Eq, gq) ? "buildAFactory2Game:machineStatus_noInputShort" : function(qq, Eq) {
        const gq = TE[qq];
        if ("noFuel" === Eq && void 0 !== gq.fuels) return lg(gq) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (gq.mobFarm && ("noInput" === Eq || "badInput" === Eq)) return `buildAFactory2Game:machineStatus_${Eq}MobFarm`;
        if ("outputFull" === Eq && (void 0 !== gq.table || gq.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === Eq && XE(gq)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== gq.cryoMade && ("noInput" === Eq || "noOutlet" === Eq || "fluidFull" === Eq)) return `buildAFactory2Game:machineStatus_${Eq}Mixer`;
        return `buildAFactory2Game:machineStatus_${Eq}`
      }(qq, Eq)
    }

    function Hx(qq, Eq) {
      return "noInput" === qq && null !== Eq && void 0 !== Eq && Eq.input && Eq.inputShort ? {
        input: Eq.input,
        short: Eq.inputShort
      } : null
    }

    function ox(qq) {
      return tl(qq) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== qq.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Px(qq) {
      const Eq = (0, Tq.ue)(qq);
      return `Baf2Pane Baf2Pane${Eq.charAt(0).toUpperCase()}${Eq.slice(1)}`
    }

    function Qx(qq, Eq) {
      const [gq, lq] = (0, Yq.useState)((() => qq.get(Eq)));
      return (0, Yq.useEffect)((() => {
        lq(qq.get(Eq));
        const gq = qq.subscribe((() => {
          lq(qq.get(Eq))
        }));
        return () => {
          gq(), qq.forget(Eq)
        }
      }), [qq, ...Eq]), gq
    }

    function yx(qq, Eq, gq, Yq) {
      const lq = TE[qq],
        Oq = Eq && lq.couplable ? RE(lq, gq) : lq,
        mq = null !== Yq && Eg(Oq) ? function(qq, Eq) {
          var gq;
          return null !== (gq = null !== Eq && Eg(qq) ? xg[Eq] : void 0) && void 0 !== gq ? gq : qq.opMs
        }(Oq, Ag(Yq)) : Oq.opMs;
      return mq === Oq.opMs ? Oq : {
        ...Oq,
        opMs: mq
      }
    }

    function tx(qq) {
      let {
        running: Eq,
        opMs: gq,
        opLeftMs: Yq,
        updateCount: lq
      } = qq;
      return (0, rO.jsx)("div", {
        className: yl()("Baf2MachineProgress", {
          Running: Eq
        }),
        children: (0, rO.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: gq / 1e3 + "s",
            animationDelay: null === Yq ? void 0 : (Yq - gq) / 1e3 + "s"
          }
        }, lq)
      })
    }

    function rx(qq) {
      let {
        running: Eq,
        leftMs: gq,
        periodMs: Yq,
        updateCount: lq
      } = qq;
      const {
        t: Oq
      } = (0, hl.v)(), mq = Math.min(Math.max(null !== gq && void 0 !== gq ? gq : 0, 0), Yq), xq = Eq && mq > 0, Aq = Oq("buildAFactory2Game:machineBarFuel");
      return (0, rO.jsx)("div", {
        className: yl()("Baf2FuelBurn", {
          Draining: xq
        }),
        role: "img",
        title: Aq,
        "aria-label": Aq,
        children: (0, rO.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: xq ? {
            animationDuration: Yq / 1e3 + "s",
            animationDelay: (mq - Yq) / 1e3 + "s"
          } : {
            transform: `scaleY(${mq/Yq})`
          }
        }, lq)
      })
    }

    function vx(qq, Eq, gq) {
      let [Yq, lq] = gq;
      const Oq = 1 !== Yq ? vl(Eq) : null;
      return {
        amount: Yq,
        have: lq,
        item: qq(Oq || gO(Eq))
      }
    }

    function hx(qq) {
      return Eg(qq) ? "buildAFactory2Game:machineBarMining" : gg(qq) ? "buildAFactory2Game:machineBarCutting" : void 0 !== qq.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function nx(qq) {
      var Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq;
      let {
        kind: Pq,
        Uq: Qq,
        store: yq,
        power: tq,
        renderSlot: rq
      } = qq;
      const {
        t: vq
      } = (0, hl.v)(), hq = Qx(yq, Qq), nq = TE[Pq], bq = null !== (Eq = null === hq || void 0 === hq ? void 0 : hq.coupled) && void 0 !== Eq && Eq, iq = null !== (gq = null === hq || void 0 === hq ? void 0 : hq.couplerLevel) && void 0 !== gq ? gq : 1, Zq = yx(Pq, bq, iq, null !== (Yq = null === hq || void 0 === hq || null === (lq = hq.dug) || void 0 === lq ? void 0 : lq.item) && void 0 !== Yq ? Yq : null), fq = null !== (Oq = null === hq || void 0 === hq ? void 0 : hq.status) && void 0 !== Oq ? Oq : null, Mq = null !== (mq = null === hq || void 0 === hq ? void 0 : hq.power) && void 0 !== mq ? mq : null, Tq = null !== (xq = null === hq || void 0 === hq ? void 0 : hq.opLeftMs) && void 0 !== xq ? xq : null, zq = null !== (Aq = null === hq || void 0 === hq ? void 0 : hq.dug) && void 0 !== Aq ? Aq : null, Sq = null !== zq && Eg(nq) ? xg[null !== (cq = Ag(zq.item)) && void 0 !== cq ? cq : ""] : void 0, pq = void 0 === Sq ? null : 6e4 / Sq, Gq = null !== (uq = null === hq || void 0 === hq ? void 0 : hq.powerCap) && void 0 !== uq ? uq : 4e3, Lq = null !== (Bq = null === hq || void 0 === hq ? void 0 : hq.tier) && void 0 !== Bq ? Bq : null, Jq = void 0 !== Zq.powerMade, kq = null !== nq.fuelSlot ? rq(nq.fuelSlot) : null, Rq = kE(nq), Uq = !bq && !0 === (null === hq || void 0 === hq ? void 0 : hq.fuelFed), sq = !bq && !0 === (null === hq || void 0 === hq ? void 0 : hq.fuelFeeds), Xq = null !== nq.fuelSlot && !bq, wq = null !== (Wq = null === hq || void 0 === hq ? void 0 : hq.fuelLeftMs) && void 0 !== Wq ? Wq : null, Kq = function(qq, Eq, gq) {
        var Yq;
        const lq = null === Eq ? void 0 : Og[Eq];
        return Math.max(null !== (Yq = null !== lq && void 0 !== lq ? lq : gq) && void 0 !== Yq ? Yq : 0, qq.opMs)
      }(Zq, null !== (Nq = null === hq || void 0 === hq ? void 0 : hq.burning) && void 0 !== Nq ? Nq : null, wq), Cq = null !== (aq = null === hq || void 0 === hq ? void 0 : hq.fuelKeep) && void 0 !== aq ? aq : null, Iq = null === fq ? null : jx(Pq, fq, hq, Uq), eq = null === fq ? null : Hx(fq, hq);
      return (0, rO.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, rO.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, rO.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: vq(gO(Pq))
          }), zq && (0, rO.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [vq("Tree Cutter" === Pq ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, rO.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, rO.jsx)(bl.e, {
                itemName: zq.item,
                amount: 0
              })
            }), (0, rO.jsx)(il.c, {
              text: zq.name
            })]
          }), null !== pq && (0, rO.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: vq("buildAFactory2Game:machineDigsFixed", {
              perMin: String(pq)
            })
          }), (null === hq || void 0 === hq ? void 0 : hq.field) && (0, rO.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, rO.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, rO.jsx)(bl.e, {
                itemName: "Wheat",
                amount: 0
              })
            }), vq("buildAFactory2Game:machineField", {
              planted: String(hq.field[0]),
              ripe: String(hq.field[1])
            })]
          }), (0, rO.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, rO.jsxs)("div", {
              className: yl()("Baf2MachineColumn", {
                Baf2Burns: Xq
              }),
              children: [null !== Zq.inputSlot && (0, rO.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, rO.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: vq(ox(Zq))
                }), rq(Zq.inputSlot)]
              }), null !== nq.fuelSlot && !bq && (0, rO.jsxs)("div", {
                className: yl()("Baf2MachineSlot", {
                  Baf2FuelFed: Uq
                }),
                children: [(0, rO.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [Uq && (0, rO.jsx)(nl.d, {
                    name: "fire"
                  }), vq("buildAFactory2Game:machineFuel")]
                }), (0, rO.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, rO.jsx)(rx, {
                    running: "running" === fq,
                    leftMs: wq,
                    periodMs: Kq,
                    updateCount: yq.updateCount
                  }), kq]
                })]
              }), null !== nq.fuelSlot && bq && (0, rO.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, rO.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: vq("buildAFactory2Game:machineFuel")
                }), (0, rO.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: vq("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": vq("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, rO.jsx)(nl.d, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, rO.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, rO.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: vq(hx(Zq))
              }), (0, rO.jsx)(tx, {
                running: "running" === fq,
                opMs: Zq.opMs,
                opLeftMs: Tq,
                updateCount: yq.updateCount
              })]
            }), Zq.outputSlots.length > 0 && (0, rO.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, rO.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: vq("buildAFactory2Game:machineOutput")
              }), (0, rO.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Zq.outputSlots.map((qq => (0, rO.jsx)("div", {
                  children: rq(qq)
                }, qq)))
              })]
            }), null !== Mq && Jq && (0, rO.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, rO.jsx)("div", {
                style: {
                  height: 100 * Mq / Gq + "%"
                }
              })
            })]
          }), Xq && null !== Cq && (0, rO.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, rO.jsx)(nl.d, {
              name: "arrows-rotate"
            }), vq(gg(Zq) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Cq)
            })]
          }), (Uq || sq) && (0, rO.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, rO.jsx)(nl.d, {
              name: "fire"
            }), vq(Uq ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), nq.couplable && (0, rO.jsx)(Im, {
            kind: Pq,
            tier: Lq,
            coupled: bq,
            level: iq,
            slot: Rq === nq.fuelSlot ? kq : null !== Rq ? rq(Rq) : null
          }), null !== Mq && !Jq && !0 === (null === hq || void 0 === hq ? void 0 : hq.reactorPowered) && (0, rO.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: vq("buildAFactory2Game:machineReactorPowered")
          }), null !== Mq && !Jq && !0 !== (null === hq || void 0 === hq ? void 0 : hq.reactorPowered) && (0, rO.jsx)(im, {
            stored: Mq,
            cap: Gq,
            rates: null !== (Vq = null === hq || void 0 === hq ? void 0 : hq.powerRates) && void 0 !== Vq ? Vq : null
          }), (null === hq || void 0 === hq ? void 0 : hq.water) && (0, rO.jsx)(Ax, {
            water: hq.water,
            at: Qq,
            side: hq.cryo ? "waterIn" : null
          }), (null === hq || void 0 === hq ? void 0 : hq.cryo) && (0, rO.jsx)(Ax, {
            water: hq.cryo,
            at: Qq,
            side: "cryoOut"
          }), null !== hq && void 0 !== hq && hq.inertCoupler ? (0, rO.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: vq("buildAFactory2Game:machineStatus_couplerOff", {
              item: YO(vq, hq.inertCoupler)
            })
          }) : null !== Iq && (0, rO.jsx)("div", {
            className: yl()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== fq
            }),
            children: vq(Iq, eq ? vx(vq, eq.input, eq.short) : void 0)
          })]
        }), (0, rO.jsxs)("div", {
          className: yl()("Baf2MachineSide", {
            Baf2SynthSide: XE(nq)
          }),
          children: [XE(nq) && (0, rO.jsx)(Km, {
            Uq: Qq,
            taught: null !== (dq = null === hq || void 0 === hq ? void 0 : hq.taught) && void 0 !== dq ? dq : null
          }, Qq.join(",")), Jq && (0, rO.jsx)(fm, {
            kind: Pq,
            def: Zq,
            Uq: Qq,
            power: tq,
            stored: null !== Mq && void 0 !== Mq ? Mq : 0,
            cap: Gq
          }), Fq(nq) && (0, rO.jsx)(sm, {
            Uq: Qq,
            input: null !== (jq = null === hq || void 0 === hq ? void 0 : hq.input) && void 0 !== jq ? jq : null,
            drops: null !== (Hq = null === hq || void 0 === hq ? void 0 : hq.farm) && void 0 !== Hq ? Hq : null,
            seconds: String(Zq.opMs / 1e3)
          }), !Jq && !Fq(nq) && !XE(nq) && (0, rO.jsx)(gm, {
            kind: Pq,
            def: Zq,
            input: null !== (oq = null === hq || void 0 === hq ? void 0 : hq.input) && void 0 !== oq ? oq : null,
            tier: null !== Lq && void 0 !== Lq ? Lq : 1,
            noSeeds: !0 === (null === hq || void 0 === hq ? void 0 : hq.noSeeds)
          })]
        })]
      })
    }

    function bx(qq, Eq, gq, Yq) {
      var lq;
      const Oq = TE[qq],
        mq = [Oq.inputSlot, Oq.fuelSlot, ...null !== (lq = Oq.inputSlots) && void 0 !== lq ? lq : []].filter((qq => null !== qq));
      return {
        render: lq => {
          let {
            Uq: Oq,
            renderSlot: mq
          } = lq;
          return (0, rO.jsx)(Jm.Provider, {
            value: Yq,
            children: (0, rO.jsx)(nx, {
              kind: qq,
              Uq: Oq,
              store: Eq,
              power: gq,
              renderSlot: mq
            })
          })
        },
        quickMoveRange: mq.length > 0 ? [Math.min(...mq), Math.max(...mq) + 1] : [0, 0],
        className: Px(qq)
      }
    }
    const ix = "Assembler";

    function Zx(qq) {
      var Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq;
      let {
        Uq: uq,
        store: Bq,
        renderSlot: Wq
      } = qq;
      const {
        t: Nq
      } = (0, hl.v)(), aq = Qx(Bq, uq), Vq = null !== (Eq = null === aq || void 0 === aq ? void 0 : aq.tier) && void 0 !== Eq ? Eq : 1, dq = null !== (gq = null === aq || void 0 === aq ? void 0 : aq.taught) && void 0 !== gq ? gq : null, jq = IE(ix, {
        coupled: !1,
        taught: dq
      }), Hq = null !== (Yq = jq.bench) && void 0 !== Yq ? Yq : null, oq = null !== (lq = null === aq || void 0 === aq ? void 0 : aq.status) && void 0 !== lq ? lq : null, Pq = null !== (Oq = null === aq || void 0 === aq ? void 0 : aq.power) && void 0 !== Oq ? Oq : null, Qq = null !== (mq = null === aq || void 0 === aq ? void 0 : aq.powerCap) && void 0 !== mq ? mq : 4e3;
      return (0, rO.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, rO.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, rO.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Nq(gO(ix))
          }), Hq && (0, rO.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Nq("buildAFactory2Game:benchMakes"), (0, rO.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, rO.jsx)(bl.e, {
                itemName: Hq.output,
                amount: 0
              })
            }), (null === aq || void 0 === aq ? void 0 : aq.taughtName) && (0, rO.jsx)(il.c, {
              text: aq.taughtName
            }), Hq.outputAmount > 1 && (0, rO.jsxs)("span", {
              children: ["\xd7", Hq.outputAmount]
            })]
          }), !Hq && (0, rO.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Nq("buildAFactory2Game:benchTeachHint")
          }), (0, rO.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, rO.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (xq = jq.inputSlots) && void 0 !== xq ? xq : []).map(((qq, Eq) => {
                const gq = null === Hq || void 0 === Hq ? void 0 : Hq.inputs[Eq];
                return (0, rO.jsxs)("div", {
                  className: yl()("Baf2BenchInput", {
                    Spare: !gq
                  }),
                  children: [(0, rO.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Wq(qq), gq && (0, rO.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, rO.jsx)(bl.e, {
                        itemName: gq.item,
                        amount: 0
                      })
                    })]
                  }), (0, rO.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: gq ? `\xd7${gq.amount}` : "\xa0"
                  })]
                }, qq)
              }))
            }), (0, rO.jsx)(tx, {
              running: "running" === oq,
              opMs: jq.opMs,
              opLeftMs: null !== (Aq = null === aq || void 0 === aq ? void 0 : aq.opLeftMs) && void 0 !== Aq ? Aq : null,
              updateCount: Bq.updateCount
            }), (0, rO.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, rO.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Nq("buildAFactory2Game:machineOutput")
              }), (0, rO.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: jq.outputSlots.map((qq => (0, rO.jsx)("div", {
                  children: Wq(qq)
                }, qq)))
              })]
            })]
          }), null !== Pq && (0, rO.jsx)(im, {
            stored: Pq,
            cap: Qq,
            rates: null !== (cq = null === aq || void 0 === aq ? void 0 : aq.powerRates) && void 0 !== cq ? cq : null
          }), null !== oq && (0, rO.jsx)("div", {
            className: yl()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== oq
            }),
            children: Nq(jx(ix, oq, aq, !1))
          }), Hq && Hq.inputs.length > 1 && (0, rO.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Nq("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, rO.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, rO.jsx)(lm, {
            taught: dq,
            tier: Vq
          }), Hq && (0, rO.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Nq("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function fx(qq) {
      var Eq;
      const gq = null !== (Eq = TE[ix].inputSlots) && void 0 !== Eq ? Eq : [];
      return {
        render: Eq => {
          let {
            Uq: gq,
            renderSlot: Yq
          } = Eq;
          return (0, rO.jsx)(Zx, {
            Uq: gq,
            store: qq,
            renderSlot: Yq
          })
        },
        quickMoveRange: [Math.min(...gq), Math.max(...gq) + 1],
        className: Px(ix)
      }
    }
    var Mx = gq(96),
      Tx = gq(1101),
      zx = gq(4096);
    const Sx = 600,
      px = .5,
      Gx = 4,
      Lx = 1200,
      Jx = 140,
      kx = 100,
      Rx = 32,
      Ux = 16,
      Fx = 100.5,
      sx = 90,
      Xx = 1.5,
      wx = 50;

    function Kx(qq) {
      switch (Zg(qq)) {
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
    const Cx = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Ix(qq) {
      const Eq = Math.ceil(60 * qq / kx);
      return {
        fuel: Math.max(Rx, Eq),
        waste: Math.max(Ux, Eq)
      }
    }

    function ex(qq, Eq, gq) {
      const [Yq, lq, Oq] = [qq - 2, Eq - 2, gq - 2];
      return 2 * (Yq * lq + lq * Oq + Oq * Yq) * Jx
    }

    function Dx(qq, Eq, gq) {
      return Math.max(0, qq - 2) * Math.max(0, Eq - 2) * Math.max(0, gq - 2)
    }

    function qA(qq, Eq) {
      const [gq, Yq, lq] = qq, Oq = gq * Yq * lq, mq = new Float32Array(Oq);
      let xq = 0,
        Aq = 0,
        cq = 0,
        uq = 0,
        Bq = 0;
      const Wq = (qq, Oq, mq) => qq < 0 || qq >= gq || Oq < 0 || Oq >= Yq || mq < 0 || mq >= lq ? 0 : Eq[(Oq * lq + mq) * gq + qq];
      for (let dq = 0; dq < Yq; dq++)
        for (let qq = 0; qq < lq; qq++)
          for (let Yq = 0; Yq < gq; Yq++) {
            const Oq = (dq * lq + qq) * gq + Yq,
              Nq = Eq[Oq];
            if (1 === Nq) {
              xq++;
              let Eq = 0;
              for (const [gq, lq, Oq] of Cx) {
                const mq = Wq(Yq + gq, dq + lq, qq + Oq);
                1 !== mq && 2 !== mq || Eq++
              }
              mq[Oq] = Sx * (1 + px * Math.min(Eq, Gx)), uq += mq[Oq]
            } else if (2 === Nq) Aq++;
            else if (3 === Nq) {
              cq++;
              Cx.some((Eq => {
                let [gq, lq, Oq] = Eq;
                return 1 === Wq(Yq + gq, dq + lq, qq + Oq)
              })) && (Bq += Lx)
            }
          }
      const Nq = ex(gq + 2, Yq + 2, lq + 2),
        aq = Math.min(uq, Bq, Nq),
        Vq = xq > 0 ? uq * kx / xq : 0;
      return {
        rods: xq,
        graphite: Aq,
        channels: cq,
        fuelHeat: uq,
        cooling: Bq,
        size: Nq,
        max: aq,
        vol: Oq,
        powerPerUnit: Vq,
        pelletsPerMin: Vq > 0 ? aq / Vq * 60 : 0,
        waterPerS: aq * eq.r,
        rodHeat: mq
      }
    }
    const EA = 0,
      gA = 1,
      YA = 6,
      lA = 7,
      OA = 8;

    function mA(qq, Eq) {
      const [gq, Yq, lq] = qq, Oq = new Uint8Array(gq * Yq * lq), mq = (qq, Oq, mq) => qq < 0 || qq >= gq || Oq < 0 || Oq >= Yq || mq < 0 || mq >= lq ? 0 : Eq[(Oq * lq + mq) * gq + qq];
      for (let xq = 0; xq < Yq; xq++)
        for (let qq = 0; qq < lq; qq++)
          for (let Yq = 0; Yq < gq; Yq++) {
            const Aq = (xq * lq + qq) * gq + Yq,
              cq = Eq[Aq];
            if (1 === cq) {
              let Eq = 0;
              for (const [gq, lq, Oq] of Cx) {
                const Aq = mq(Yq + gq, xq + lq, qq + Oq);
                Eq += 1 === Aq || 2 === Aq ? 1 : 0
              }
              Oq[Aq] = gA + Math.min(Eq, Gx)
            } else if (3 === cq) {
              const Eq = Cx.some((Eq => {
                let [gq, lq, Oq] = Eq;
                return 1 === mq(Yq + gq, xq + lq, qq + Oq)
              }));
              Oq[Aq] = Eq ? YA : lA
            } else 2 === cq && (Oq[Aq] = OA)
          }
      return Oq
    }

    function xA(qq) {
      return qq.fuelHeat <= qq.cooling && qq.fuelHeat <= qq.size ? "fuel" : qq.cooling <= qq.size ? "cooling" : "size"
    }
    const AA = sx;

    function cA(qq, Eq, gq) {
      return Math.round(qq * Eq * gq * 25e3 * (1 + .25 * (Math.min(qq, Eq, gq) - 2)))
    }

    function uA(qq) {
      return Math.max(0, Math.min(eq.h, qq))
    }

    function BA(qq, Eq, gq) {
      const Yq = Eq * uA(gq);
      return qq <= 0 ? 0 : Yq > 0 ? Math.min(200, 100 * qq / Yq) : 200
    }

    function WA(qq, Eq) {
      const gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Xx : 1;
      return Math.min(qq.fuelHeat * gq, qq.cooling * uA(Eq), qq.size * gq)
    }

    function NA(qq) {
      return 2 + qq / 10
    }
    const aA = "buildAFactory2Game:";

    function VA(qq) {
      var Eq;
      return null !== (Eq = qq.baf2RxMood) && void 0 !== Eq ? Eq : function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const gq = [
          ["calm", 50],
          ["warm", AA],
          ["hot", Fx]
        ];
        for (const [Yq, lq] of gq)
          if (qq < lq + (Yq === Eq ? 3 : 0)) return Yq;
        return "alarm"
      }(qq.baf2RxHeat)
    }
    const dA = 120;

    function jA(qq) {
      const Eq = qq.baf2RxState;
      if ("running" === Eq && qq.baf2RxHeat > Fx) return {
        label: `${aA}rxState_tooHot`,
        tone: "bad",
        fix: `${aA}rxFix_tooHot`
      };
      switch (Eq) {
        case "running":
          return {
            label: `${aA}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${aA}rxState_idle`, tone: "off", fix: `${aA}rxFix_idle`
          };
        case "scram":
          return {
            label: `${aA}rxState_scram`, tone: "off", fix: qq.baf2RxHeat < wx ? `${aA}rxFix_scramCool` : `${aA}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${aA}rxState_${Eq}`, tone: "off", fix: `${aA}rxFix_${Eq}`
          };
        case "melted":
          return {
            label: `${aA}rxState_melted`, tone: "bad", fix: `${aA}rxFix_melted`
          };
        default:
          return {
            label: `${aA}rxState_${Eq}`, tone: "warn", fix: `${aA}rxFix_${Eq}`
          }
      }
    }

    function HA(qq) {
      const [Eq, gq, Yq] = qq.baf2RxStats;
      return {
        fuelHeat: Eq,
        cooling: gq * (qq.baf2RxCryo ? Math.max(1, uA(qq.baf2RxWater / 100)) : 1),
        size: Yq
      }
    }

    function oA(qq) {
      var Eq;
      const gq = "idle" === qq.baf2RxState || "running" === qq.baf2RxState && qq.baf2RxHeat <= Fx || "scram" === qq.baf2RxState && qq.baf2RxHeat < wx;
      if (0 === (qq.baf2RxFlags & PE) || !qq.baf2RxFormed || !gq) return null;
      const {
        fuelHeat: Yq,
        cooling: lq,
        size: Oq
      } = HA(qq), mq = Math.min(Yq, lq, Oq), xq = xA({
        fuelHeat: Yq,
        cooling: lq,
        size: Oq
      }), Aq = "cooling" === xq && !0 === qq.baf2RxCryoOpen && !qq.baf2RxCryo, cq = null !== (Eq = qq.baf2RxCells) && void 0 !== Eq ? Eq : "", uq = ("fuel" === xq || "cooling" === xq && !0 === qq.baf2RxCryo) && cq.length > 0 && !cq.includes(String(0)), Bq = Aq ? "Cryo" : "scram" === qq.baf2RxState ? "Off" : "";
      return mq < 12e3 ? {
        key: `${aA}rxGrow_${uq?"full":xq}${Bq}`,
        amount: mq
      } : null
    }

    function PA(qq, Eq) {
      return qq[0] === Eq[0] && qq[1] === Eq[1] && qq[2] === Eq[2]
    }

    function QA(qq) {
      return [...qq].sort(((qq, Eq) => Number(Eq[2] < Eq[1]) - Number(qq[2] < qq[1])))
    }

    function yA(qq, Eq) {
      return Eq.some((Eq => {
        let [gq, Yq] = Eq;
        return !(Yq <= 0) && ["edge", "cap", "wall", "inside"].some((Eq => gq === OY(qq, Eq)))
      }))
    }

    function tA(qq, Eq, gq) {
      const Yq = qq.baf2RxFuel - qq.baf2RxPu > 0 ? gq : 0;
      return {
        full: qq.baf2RxWaste > Eq - 3,
        fullInS: Yq > 0 ? Math.max(0, Eq - qq.baf2RxWaste) / Yq : null
      }
    }
    const rA = {
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

    function vA(qq) {
      return hA[qq]
    }
    const hA = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function nA(qq) {
      let [Eq, gq, Yq] = qq;
      return Math.ceil(ex(Eq, gq, Yq) * eq.r)
    }

    function bA(qq, Eq) {
      return "battery" === qq ? Eq[0] * Eq[1] * Eq[2] : function(qq) {
        let [Eq, gq, Yq] = qq;
        return Eq * gq * Yq - Math.max(0, Eq - 2) * Math.max(0, gq - 2) * Math.max(0, Yq - 2)
      }(Eq) - 1
    }

    function iA(qq) {
      const Eq = Math.max(0, qq);
      if (Eq < 10) return String(Math.round(10 * Eq) / 10);
      if (Eq < 1e4) return Math.round(Eq).toLocaleString("en-US");
      if (Eq < 1e6) return `${Eq<1e5?(Math.floor(Eq/100)/10).toFixed(1):Math.floor(Eq/1e3)}k`;
      const gq = Eq / 1e6;
      return `${gq<10?(Math.floor(100*gq)/100).toFixed(2):gq<100?(Math.floor(10*gq)/10).toFixed(1):Math.floor(gq)}M`
    }

    function ZA(qq) {
      return qq <= 0 ? "0" : qq >= 10 ? String(Math.round(qq)) : qq.toFixed(qq >= 1 ? 1 : 2)
    }

    function fA(qq) {
      const Eq = eg(qq, 0),
        gq = eg(qq, wg(qq) - 1);
      return {
        lo: [Math.min(Eq[0], gq[0]), Math.min(Eq[1], gq[1]), Math.min(Eq[2], gq[2])],
        hi: [Math.max(Eq[0], gq[0]) + 1, Math.max(Eq[1], gq[1]) + 1, Math.max(Eq[2], gq[2]) + 1]
      }
    }

    function MA(qq, Eq, gq) {
      const Yq = [Eq[0] - qq[0], Eq[1] - qq[1], Eq[2] - qq[2]],
        lq = [(qq[0] + Eq[0]) / 2, (qq[1] + Eq[1]) / 2, (qq[2] + Eq[2]) / 2],
        Oq = [];
      for (let mq = 0; mq < 3; mq++) {
        const xq = (mq + 1) % 3,
          Aq = (mq + 2) % 3;
        for (const cq of [qq[xq], Eq[xq]])
          for (const uq of [qq[Aq], Eq[Aq]]) {
            const qq = [0, 0, 0],
              Eq = [gq, gq, gq];
            qq[mq] = lq[mq], Eq[mq] = Yq[mq] + gq, qq[xq] = cq, qq[Aq] = uq, Oq.push([qq, Eq])
          }
      }
      return Oq
    }
    const TA = "buildAFactory2Game:",
      zA = [`${TA}colNorth`, `${TA}colEast`, `${TA}colSouth`, `${TA}colWest`];

    function SA(qq, Eq) {
      const [gq, Yq, lq] = qq.baf2ColAt;
      return `baf2col ${gq} ${Yq} ${lq} ${Eq}`
    }

    function pA(qq) {
      return function(qq) {
        if (!Number.isFinite(qq)) return "";
        const Eq = Math.max(1, Math.round(qq));
        if (Eq < 60) return `${Eq}s`;
        const gq = Eq % 60;
        return 0 === gq ? Eq / 60 + "m" : `${Math.floor(Eq/60)}m ${gq}s`
      }(function(qq) {
        const Eq = mY.FOCUS_BY_LASERS[Math.max(0, Math.min(4, qq))];
        return Eq > 0 ? mY.NOVA_FOCUS / Eq : 1 / 0
      }(qq))
    }

    function GA(qq) {
      const Eq = Math.abs(Math.round(qq));
      return Eq < 1e3 ? Math.round(qq).toLocaleString("en-US") : Eq < 1e6 ? `${Eq<1e5?(qq/1e3).toFixed(1).replace(/\.0$/,""):Math.round(qq/1e3)}k` : `${(qq/1e6).toFixed(Eq<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function LA(qq, Eq, gq) {
      if (WY(Eq) >= 0) {
        const Eq = function(qq, Eq) {
          return qq.find((qq => {
            let {
              focus: gq
            } = qq;
            return gq[0] === Eq[0] && gq[2] === Eq[2] && (Eq[1] === gq[1] || Eq[1] === gq[1] - 1)
          }))
        }(qq, gq);
        if (!Eq) return null;
        const lq = function(qq) {
          let Eq = 0,
            gq = 0;
          for (let Yq = 0; Yq < 4; Yq++) Eq += qq.laser[Yq] ? 1 : 0, gq += qq.live[Yq] ? 1 : 0;
          return {
            lasers: Eq,
            live: gq,
            focusPerS: mY.FOCUS_BY_LASERS[gq],
            drawPerS: mY.LASER_DRAW * gq
          }
        }({
          laser: Eq.lasers,
          live: Eq.live
        });
        if (0 === lq.lasers || "noLasers" === Eq.state) return {
          key: `${TA}lookColNoLasers`
        };
        if (0 === lq.live) return {
          key: `${TA}lookColOff_blocked`
        };
        if (!(Eq.on && lq.live > 0) && ("running" !== (Yq = Eq.state) && "slowed" !== Yq)) return {
          key: `${TA}lookColOff_${Eq.state}`
        };
        if (lq.live < lq.lasers) return {
          key: `${TA}lookColLasersSome`,
          params: {
            lasers: String(lq.lasers),
            live: String(lq.live)
          }
        };
        const Oq = Eq.open.filter(Boolean).length;
        return Oq < 4 ? {
          key: `${TA}lookColLasersSpots`,
          params: {
            live: String(lq.live),
            spots: String(Oq),
            time: pA(lq.live)
          }
        } : {
          key: `${TA}lookColLasers`,
          params: {
            live: String(lq.live),
            time: pA(lq.live)
          }
        }
      }
      var Yq;
      if (!NY(Eq)) return null;
      const lq = function(qq, Eq) {
        for (const gq of qq) {
          const qq = jY(gq.focus, [Eq[0], Eq[1], Eq[2]]);
          if (qq && qq.KO === mY.LASER_D && gq.lasers[qq.dir]) return {
            entry: gq,
            dir: qq.dir
          }
        }
        return null
      }(qq, gq);
      if (!lq) return {
        key: `${TA}lookLaserNoCollider`
      };
      const {
        entry: Oq,
        dir: mq
      } = lq;
      return Oq.open[mq] ? Oq.live[mq] ? {
        key: Oq.on ? `${TA}lookLaserFiring` : `${TA}lookLaserReady`
      } : {
        key: `${TA}lookLaserBlocked`
      } : {
        key: `${TA}lookLaserClosed`
      }
    }

    function JA(qq, Eq) {
      const gq = [];
      for (let Yq = 1; Yq < mY.LASER_D; Yq++) qq & 1 << Eq * (mY.LASER_D - 1) + Yq - 1 && gq.push(Yq);
      return gq
    }
    const kA = {
      firing: `${TA}colSlotFiring`,
      ready: `${TA}colSlotReady`,
      blocked: `${TA}colSlotBlocked`,
      empty: `${TA}colSlotEmpty`,
      closed: `${TA}colSlotClosed`
    };

    function RA(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Oq = Ol(qq),
        mq = Ol(Eq),
        xq = Ol(gq),
        Aq = xq.filter(Boolean).length,
        cq = Oq.filter(Boolean).length,
        uq = [0, 1, 2, 3].map((qq => mq[qq] ? Oq[qq] ? xq[qq] ? Yq ? "firing" : "ready" : "blocked" : (qq => JA(lq, qq).length > 0)(qq) ? "blocked" : "empty" : "closed")),
        Bq = uq.indexOf("blocked"),
        Wq = Bq < 0 && cq > 0 ? uq.indexOf("empty") : -1;
      return uq.map(((qq, Eq) => {
        const gq = Eq === Bq ? {
          key: `${TA}colSlotClear`
        } : Eq === Wq ? {
          key: `${TA}colSlotAdd`,
          params: {
            time: pA(Math.min(4, Aq + 1))
          }
        } : null;
        return {
          dir: Eq,
          tone: qq,
          title: {
            key: "blocked" !== qq || Oq[Eq] ? kA[qq] : `${TA}colSlotGap`,
            keys: {
              dir: zA[Eq]
            }
          },
          hint: gq
        }
      }))
    }

    function UA(qq) {
      var Eq;
      return "noPower" === qq.baf2ColState && qq.baf2ColRxState ? jA({
        baf2RxState: qq.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (Eq = qq.baf2ColRxHeat) && void 0 !== Eq ? Eq : 0
      }) : null
    }

    function FA(qq) {
      const Eq = Ol(qq.baf2ColSpots).filter(Boolean).length,
        gq = Ol(qq.baf2ColLive);
      let Yq = 0,
        lq = 0;
      return Ol(qq.baf2ColLasers).forEach(((qq, Eq) => {
        qq && (Yq++, lq += gq[Eq] ? 0 : 1)
      })), lq > 0 ? {
        key: `${TA}colSubSome`,
        params: {
          blocked: String(lq),
          lasers: String(Yq)
        }
      } : Eq < 4 ? {
        key: `${TA}colSubSpots`,
        params: {
          lasers: String(Yq),
          spots: String(Eq)
        }
      } : {
        key: `${TA}colSub`,
        params: {
          lasers: String(Yq)
        }
      }
    }

    function sA(qq) {
      const Eq = UA(qq);
      if ("idle" === qq.baf2ColRxState && Eq) return {
        key: `${TA}colState_noPowerIdle`
      };
      if (Eq) return {
        key: `${TA}colState_noPowerReactor`,
        keys: {
          state: Eq.label
        }
      };
      if ("noInput" !== qq.baf2ColState) return {
        key: `${TA}colState_${qq.baf2ColState}`
      };
      const gq = String(Math.max(0, mY.NOVA_SA - qq.baf2ColSa)),
        Yq = String(Math.max(0, mY.NOVA_GD - qq.baf2ColGd));
      return "0" !== gq && "0" !== Yq ? {
        key: `${TA}colState_noInput`,
        params: {
          sa: gq,
          gd: Yq
        }
      } : "0" !== gq ? {
        key: `${TA}colState_noStarAlloy`,
        params: {
          sa: gq
        }
      } : "0" !== Yq ? {
        key: `${TA}colState_noGlowDust`,
        params: {
          gd: Yq
        }
      } : {
        key: `${TA}colState_running`
      }
    }

    function XA(qq) {
      return qq.baf2ColP < 0 ? `${TA}colNext` : function(qq) {
        const Eq = qq.baf2ColState;
        return qq.baf2ColP >= 0 && ("blocked" === Eq || "noLasers" === Eq || "noPower" === Eq)
      }(qq) ? `${TA}colStalled` : null === wA(qq) ? `${TA}colMaking` : `${TA}colNovaIn`
    }

    function wA(qq) {
      if (qq.baf2ColP < 0 || qq.baf2ColWant <= 0) return null;
      const Eq = qq.baf2ColFocusPerS * Math.min(1, qq.baf2ColDraw / qq.baf2ColWant);
      return Eq > 0 ? Math.max(0, mY.NOVA_FOCUS - qq.baf2ColP) / Eq : null
    }

    function KA(qq, Eq) {
      const gq = [];
      for (let Yq = 1; Yq <= 3; Yq++) {
        const lq = [qq[0], qq[1] - Yq, qq[2]];
        if (!Eq(lq)) return gq;
        gq.push(lq)
      }
      return []
    }

    function CA(qq, Eq) {
      const gq = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Yq = 0; Yq < 4; Yq++) {
        const lq = Yq,
          Oq = dY(qq.focus, lq, mY.LASER_D);
        if (qq.lasers[Yq] || !qq.open[Yq] || !Eq(Oq)) continue;
        const mq = [];
        for (let gq = 1; gq < mY.LASER_D; gq++) {
          const Yq = dY(qq.focus, lq, gq);
          Eq(Yq) || mq.push(Yq)
        }
        gq.supports.push(...KA(Oq, Eq)), 0 === mq.length ? gq.free.push(Oq) : (gq.blocked.push(Oq), gq.gaps.push(...mq))
      }
      return gq
    }
    const IA = mY.LASER_D - .25,
      eA = 4,
      DA = 2,
      qc = 16;
    const Ec = {
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
        blendMode: zx.h.Standard,
        soft: !0
      },
      gc = {
        green: Ec,
        pink: {
          ...Ec,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function Yc(qq, Eq) {
      const gq = {
        ...Eq.params
      };
      for (const [lq, Oq] of Object.entries(null !== (Yq = Eq.keys) && void 0 !== Yq ? Yq : {})) {
        var Yq;
        gq[lq] = qq(Oq)
      }
      return gq
    }
    const lc = "buildAFactory2Game:",
      Oc = 2 * mY.LASER_D + 1,
      mc = mY.LASER_D;

    function xc(qq) {
      return qq(`${lc}colFocusTip`, {
        need: GA(mY.NOVA_FOCUS)
      })
    }

    function Ac(qq, Eq) {
      return qq(Eq.key, Yc(qq, Eq))
    }

    function cc(qq) {
      const Eq = qq.getStatus();
      return {
        status: Eq,
        entry: Eq ? qq.entryAtRoot(Eq.baf2ColAt) : void 0
      }
    }

    function uc(qq, Eq) {
      return {
        left: 100 * (mc + qq) / Oc + "%",
        top: 100 * (mc + Eq) / Oc + "%"
      }
    }

    function Bc(qq) {
      let {
        status: Eq,
        entry: gq
      } = qq;
      const Yq = Ol(Eq.baf2ColLasers),
        lq = Ol(Eq.baf2ColSpots),
        Oq = Ol(Eq.baf2ColLive),
        mq = !0 === (null === gq || void 0 === gq ? void 0 : gq.on),
        xq = mY.LASER_D,
        Aq = [];
      for (let Nq = 0; Nq < 4; Nq++) {
        const [qq, , Eq] = VY[Nq];
        if (Oq[Nq]) {
          const gq = 100 * (xq - 1) / Oc,
            Yq = qq + Eq > 0 ? 100 * (mc + 1) / Oc : 100 * (mc - (xq - 1)) / Oc,
            lq = 100 * (mc + .35) / Oc,
            Oq = 30 / Oc,
            cq = 0 !== qq ? {
              left: `${Yq}%`,
              width: `${gq}%`,
              top: `${lq}%`,
              height: `${Oq}%`
            } : {
              top: `${Yq}%`,
              height: `${gq}%`,
              left: `${lq}%`,
              width: `${Oq}%`
            };
          Aq.push((0, rO.jsx)("i", {
            className: yl()("Baf2ColDiagramBeam", {
              Off: !mq
            }),
            style: cq
          }, `beam${Nq}`))
        }
        const gq = Yq[Nq] ? "Baf2ColDiagramLaser" : lq[Nq] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Aq.push((0, rO.jsx)("i", {
          className: gq,
          style: uc(qq * xq, Eq * xq)
        }, `spot${Nq}`))
      }
      for (let Nq = 0; Nq < 4; Nq++) {
        if (Yq[Nq] || !lq[Nq]) continue;
        const [qq, , gq] = VY[Nq];
        for (const Yq of JA(null !== (cq = Eq.baf2ColGaps) && void 0 !== cq ? cq : 0, Nq)) {
          var cq;
          Aq.push((0, rO.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: uc(qq * Yq, gq * Yq)
          }, `gap${Nq},${Yq}`))
        }
      }
      for (const [Nq, , aq] of null !== (uq = null === gq || void 0 === gq ? void 0 : gq.blockers) && void 0 !== uq ? uq : []) {
        var uq, Bq, Wq;
        const qq = Nq - (null !== (Bq = null === gq || void 0 === gq ? void 0 : gq.focus[0]) && void 0 !== Bq ? Bq : 0),
          Eq = aq - (null !== (Wq = null === gq || void 0 === gq ? void 0 : gq.focus[2]) && void 0 !== Wq ? Wq : 0);
        Aq.push((0, rO.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: uc(qq, Eq)
        }, `block${qq},${Eq}`))
      }
      return (0, rO.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Aq, (0, rO.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Wc(qq) {
      let {
        status: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)(), Yq = Ol(Eq.baf2ColLive).filter(Boolean).length;
      return (0, rO.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, rO.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: xc(gq),
          children: gq(`${lc}colLadder`)
        }), (0, rO.jsx)("ul", {
          children: [1, 2, 3, 4].map((qq => (0, rO.jsx)("li", {
            className: yl()({
              On: qq === Yq
            }),
            children: gq(`${lc}colLadderChip`, {
              lasers: String(qq),
              time: pA(qq)
            })
          }, qq)))
        })]
      })
    }

    function Nc(qq) {
      let {
        item: Eq,
        Fc: gq,
        need: Yq,
        cap: lq
      } = qq;
      const {
        t: Oq
      } = (0, hl.v)(), mq = Math.min(gq, Yq);
      return (0, rO.jsxs)("li", {
        className: yl()("Baf2ColTile", {
          Short: gq < Yq
        }),
        children: [(0, rO.jsx)(ac, {
          item: Eq
        }), (0, rO.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Oq(`${lc}colOutOf`, {
            amount: String(mq),
            cap: String(Yq)
          })
        }), (0, rO.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, rO.jsx)("i", {
            style: {
              width: 100 * mq / Yq + "%"
            }
          })
        }), gq > Yq && (0, rO.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Oq(`${lc}colIntakeHeld`, {
            amount: String(gq),
            cap: String(lq)
          })
        })]
      })
    }

    function ac(qq) {
      let {
        item: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)();
      return (0, rO.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, rO.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, rO.jsx)(bl.e, {
            itemName: Eq,
            amount: 0
          })
        }), (0, rO.jsx)("span", {
          className: "Baf2ColTileName",
          children: YO(gq, Eq)
        })]
      })
    }

    function Vc(qq) {
      switch (qq.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function dc(qq) {
      var Eq, gq, lq;
      let {
        store: Oq,
        close: mq
      } = qq;
      const {
        t: xq
      } = (0, hl.v)(), Aq = km(), {
        status: cq,
        entry: uq
      } = function(qq) {
        const [Eq, gq] = (0, Yq.useState)((() => cc(qq)));
        return (0, Yq.useEffect)((() => (gq(cc(qq)), qq.subscribe((() => {
          gq(cc(qq))
        })))), [qq]), Eq
      }(Oq), [Bq, Wq] = (0, Yq.useState)(null), Nq = null === cq || void 0 === cq ? void 0 : cq.baf2ColHold;
      (0, Yq.useEffect)((() => {
        Wq(null)
      }), [Nq]);
      const aq = (0, Yq.useRef)({
          p: -1,
          n: 0
        }),
        Vq = null !== (Eq = null === cq || void 0 === cq ? void 0 : cq.baf2ColP) && void 0 !== Eq ? Eq : -1;
      Vq < aq.current.p && aq.current.n++, aq.current.p = Vq;
      const dq = (0, Yq.useRef)(null),
        [jq] = (0, Yq.useState)((() => {
          return (qq = Oq.heldAtOpen()) === cY || qq === uY ? {
            key: `${TA}colBeltItIn`,
            item: qq
          } : null;
          var qq
        }));
      if (!cq) return null;
      const Hq = cq.baf2ColMember,
        oq = cq.baf2ColP >= 0,
        Pq = function(qq, Eq) {
          if (qq.baf2ColP >= 0 && qq.baf2ColDraw > 0) {
            const Eq = qq.baf2ColWant > 0 ? Math.min(1, qq.baf2ColDraw / qq.baf2ColWant) : 0;
            return {
              focus: qq.baf2ColFocusPerS * Eq,
              draw: qq.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === qq.baf2ColState && Eq && Eq.draw > 0 ? {
            ...Eq,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(cq, dq.current);
      dq.current = Pq.draw > 0 ? Pq : null;
      const Qq = "slowed" === cq.baf2ColState || "noPower" === cq.baf2ColState,
        yq = wA(cq),
        tq = null !== Bq && void 0 !== Bq ? Bq : cq.baf2ColHold,
        rq = function(qq) {
          var Eq, gq;
          return "idle" === qq.baf2ColRxState ? null : null !== (Eq = null === (gq = UA(qq)) || void 0 === gq ? void 0 : gq.fix) && void 0 !== Eq ? Eq : null
        }(cq),
        vq = null === rq && null === jq ? function(qq) {
          var Eq;
          const gq = qq.baf2ColSentTo;
          if (!gq) return null;
          const Yq = null !== (Eq = qq.baf2ColSentHeld) && void 0 !== Eq ? Eq : null;
          return {
            key: null === Yq ? `${TA}colNovaSentToMachine` : `${TA}colNovaSentTo`,
            target: gq,
            Fc: Yq
          }
        }(cq) : null,
        hq = oq ? xq(`${lc}colFocusOf`, {
          focus: GA(cq.baf2ColP),
          need: GA(mY.NOVA_FOCUS)
        }) : null;
      return (0, rO.jsx)(Pm.c, {
        close: mq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, rO.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, rO.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, rO.jsx)(bl.e, {
                  itemName: xY,
                  amount: 0
                })
              }), (0, rO.jsxs)("div", {
                children: [(0, rO.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: YO(xq, xY)
                }), (0, rO.jsx)("p", {
                  children: Ac(xq, FA(cq))
                })]
              })]
            }), (0, rO.jsx)(Qm.m, {
              onClick: mq
            })]
          }), (0, rO.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, rO.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, rO.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, rO.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: xq(XA(cq), {
                    time: null === yq ? "" : PO(xq, yq)
                  })
                }), (0, rO.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, rO.jsx)("i", {
                    style: {
                      width: (oq ? 100 * cq.baf2ColP / mY.NOVA_FOCUS : 0) + "%"
                    }
                  }, aq.current.n)
                }), (0, rO.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, rO.jsxs)("span", {
                    title: xc(xq),
                    children: [(0, rO.jsx)("b", {
                      children: GA(Pq.focus)
                    }), " ", xq(`${lc}colFocusPerS`)]
                  }), (0, rO.jsxs)("span", {
                    className: yl()("Baf2ColDraw", {
                      Short: Qq
                    }),
                    children: [(0, rO.jsx)(nl.d, {
                      name: "bolt"
                    }), Qq ? xq(`${lc}colDrawOf`, {
                      draw: GA(cq.baf2ColDraw),
                      want: GA(cq.baf2ColWant)
                    }) : xq(`${lc}colPowerPerS`, {
                      rate: GA(Pq.draw)
                    })]
                  }), null !== hq && (0, rO.jsx)("span", {
                    className: "Soft",
                    children: hq
                  })]
                })]
              }), (0, rO.jsx)("p", {
                className: yl()("Baf2ColState", Vc(cq)),
                children: Ac(xq, sA(cq))
              }), null !== rq && (0, rO.jsx)("p", {
                className: "Baf2ColStateFix",
                children: xq(rq)
              }), null === rq && null !== jq && (0, rO.jsx)("p", {
                className: "Baf2ColStateFix",
                children: xq(jq.key, {
                  item: YO(xq, jq.item)
                })
              }), vq && (0, rO.jsx)("p", {
                className: "Baf2ColStateFix",
                children: xq(vq.key, {
                  target: YO(xq, vq.target),
                  amount: String(null !== (gq = vq.Fc) && void 0 !== gq ? gq : 0)
                })
              }), (0, rO.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, rO.jsx)(Nc, {
                  item: cY,
                  Fc: cq.baf2ColSa,
                  need: mY.NOVA_SA,
                  cap: mY.SA_CAP
                }), (0, rO.jsx)(Nc, {
                  item: uY,
                  Fc: cq.baf2ColGd,
                  need: mY.NOVA_GD,
                  cap: mY.GD_CAP
                }), (0, rO.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, rO.jsx)(ac, {
                    item: "Nova Matter"
                  }), (0, rO.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: xq(`${lc}colNovaHeld`, {
                      amount: String(cq.baf2ColOut),
                      cap: String(mY.OUT_CAP)
                    })
                  }), Hq && (0, rO.jsx)(Qm.p, {
                    className: "Baf2ColTake",
                    disabled: 0 === cq.baf2ColOut,
                    onClick: () => {
                      Aq.send(SA(cq, "take"))
                    },
                    children: xq(`${lc}colTake`)
                  })]
                })]
              }), Hq && (0, rO.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": tq,
                className: yl()("Baf2ColHold", {
                  On: tq
                }),
                onClick: qq => {
                  qq.detail > 0 && qq.currentTarget.blur(), Wq(!tq), Aq.send(SA(cq, "hold " + (tq ? 0 : 1)))
                },
                children: [(0, rO.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, rO.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, rO.jsx)("b", {
                    children: xq(`${lc}colHold`)
                  }), (0, rO.jsx)("span", {
                    children: xq(`${lc}colHoldNote`)
                  })]
                })]
              })]
            }), (0, rO.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, rO.jsx)(Bc, {
                status: cq,
                entry: uq
              }), (0, rO.jsx)("ul", {
                className: "Baf2ColSlots",
                children: RA(cq.baf2ColLasers, cq.baf2ColSpots, cq.baf2ColLive, Pq.beamsOn, null !== (lq = cq.baf2ColGaps) && void 0 !== lq ? lq : 0).map((qq => (0, rO.jsxs)("li", {
                  className: qq.tone,
                  children: [(0, rO.jsx)("b", {
                    children: Ac(xq, qq.title)
                  }), null !== qq.hint && (0, rO.jsx)("span", {
                    children: Ac(xq, qq.hint)
                  })]
                }, qq.dir)))
              }), (0, rO.jsx)(Wc, {
                status: cq
              })]
            })]
          })]
        })
      })
    }
    const jc = "buildAFactory2Game:",
      Hc = 36e5,
      oc = 864e5;

    function Pc(qq, Eq, gq) {
      return Math.max(0, Math.ceil((qq + Eq - Math.max(gq, qq)) / 1e3))
    }

    function Qc(qq) {
      return qq.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function yc(qq) {
      return "Homestead" === qq
    }

    function tc(qq) {
      return function(qq) {
        let Eq = 0;
        for (const gq of qq) {
          const qq = /^Island ([1-9]\d{0,5})$/.exec(gq);
          qq && (Eq = Math.max(Eq, Number(qq[1])))
        }
        return `Island ${Eq+1}`
      }(qq.map((qq => qq.baf2IslandName)))
    }

    function rc(qq, Eq) {
      return function(qq) {
        return `${jc}islandsBlocked${qq[0].toUpperCase()}${qq.slice(1)}`
      }("degraded" === qq && 0 === Eq ? "stuck" : qq)
    }

    function vc(qq) {
      return qq.filter((qq => {
        var Eq;
        return !qq.baf2IslandActive && void 0 === qq.baf2IslandUnreadable && void 0 === (null === (Eq = qq.baf2IslandCoop) || void 0 === Eq ? void 0 : Eq.baf2CoopState)
      })).length
    }

    function hc(qq) {
      return "coopMoving" === qq || "coopUnreachable" === qq
    }

    function nc(qq, Eq) {
      const gq = Eq > 0;
      return {
        change: null === qq && !gq,
        switch: (null === qq || "degraded" === qq || hc(qq)) && !gq,
        rename: "loading" !== qq && "degraded" !== qq && "stuck" !== qq
      }
    }

    function bc(qq, Eq) {
      return void 0 === qq || "corrupt" === qq && Eq
    }
    const ic = Tm;

    function Zc(qq, Eq, gq) {
      if (null !== qq && void 0 !== qq && qq.untilGone) {
        var Yq;
        return !("dismiss" === qq.untilGone && void 0 === (null === (Yq = Eq.baf2IslandCoop) || void 0 === Yq ? void 0 : Yq.baf2CoopState)) && gq - qq.atMs < 32500
      }
      return void 0 !== qq && gq - qq.atMs < ic && Eq.baf2IslandName === qq.from
    }
    const fc = Tm;

    function Mc(qq) {
      return "core" === (null === qq || void 0 === qq ? void 0 : qq.kind) ? qq.core : "islands" === (null === qq || void 0 === qq ? void 0 : qq.kind) ? qq.backToCore : void 0
    }

    function Tc(qq) {
      return `\0${qq}\0`
    }

    function zc(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Yq = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Oq of Object.keys(gq)) Yq[Oq] = Tc(Oq);
      let lq = Object.keys(Yq).length > 0 ? qq(Eq, Yq) : qq(Eq);
      for (const [Oq, mq] of Object.entries(gq)) lq = lq.split(Tc(Oq)).join(mq);
      return lq
    }

    function Sc(qq, Eq) {
      return qq ? Eq ? "enabled" : "disabled" : "hidden"
    }
    const pc = {
      removed: `${jc}islandsCoopRemoved`,
      deleted: `${jc}islandsCoopDeleted`,
      notReady: `${jc}islandsCoopNotReady`,
      gone: `${jc}islandsCoopGone`
    };

    function Gc(qq) {
      var Eq;
      return "member" !== (null === (Eq = qq.baf2IslandCoop) || void 0 === Eq ? void 0 : Eq.baf2CoopRole) && "newer" !== qq.baf2IslandUnreadable
    }

    function Lc(qq, Eq, gq, Yq, lq, Oq) {
      const mq = qq.baf2IslandActive,
        xq = qq.baf2IslandUnreadable,
        Aq = qq.baf2IslandCoop,
        cq = function(qq, Eq, gq) {
          return {
            switch: qq.switch && void 0 === Eq,
            delete: qq.change && bc(Eq, gq)
          }
        }(Eq, xq, Yq),
        uq = mq && void 0 !== Aq && void 0 === Aq.baf2CoopState && "coopUnreachable" === Oq,
        Bq = {
          switch: Sc((!mq || uq) && void 0 === xq, uq || cq.switch),
          switchLabel: uq ? "tryAgain" : "switch",
          rename: Sc(!0, Eq.rename),
          delete: Sc(!mq, cq.delete),
          deleteWaits: !mq && bc(xq, Yq),
          people: Sc(void 0 !== qq.baf2IslandInvitable || lq && mq && void 0 === xq && void 0 === Aq, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Wq = !mq && cq.delete;
      if (void 0 === Aq) return gq ? {
        ...Bq,
        delete: Sc(!mq, !1),
        deleteWaits: !1,
        note: Wq ? {
          key: `${jc}islandsCoopKeepOwn`
        } : null
      } : Bq;
      const Nq = Aq.baf2CoopState,
        aq = Aq.baf2CoopMembers.length > 1,
        Vq = {
          ...Bq,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Nq && "member" === Aq.baf2CoopRole) return {
        ...Vq,
        dismiss: Sc(!0, Eq.rename),
        note: {
          key: pc[Nq],
          names: {
            owner: Aq.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Nq) {
        let qq = {
          key: `${jc}islandsCoopOwnLost`
        };
        return Wq && aq ? qq = {
          key: `${jc}islandsCoopDeleteMembers`
        } : Wq && gq && (qq = {
          key: `${jc}islandsCoopKeepOwn`
        }), {
          ...Vq,
          delete: Sc(!mq, cq.delete && !aq && !gq),
          deleteWaits: Bq.deleteWaits && !aq && !gq,
          note: qq
        }
      }
      if ("member" === Aq.baf2CoopRole) return {
        ...Bq,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Sc(!0, mq ? Eq.switch : Eq.rename)
      };
      const dq = Aq.baf2CoopManageHere;
      let jq = null;
      var Hq;
      dq || mq ? Wq && aq ? jq = {
        key: `${jc}islandsCoopDeleteMembers`
      } : Wq && gq && (jq = {
        key: `${jc}islandsCoopKeepOwn`
      }) : jq = {
        key: null !== (Hq = Aq.baf2CoopLeft) && void 0 !== Hq && Hq.length ? `${jc}islandsCoopManageThereClaim` : `${jc}islandsCoopManageThere`
      };
      return {
        ...Bq,
        rename: Sc(!0, Eq.rename && dq),
        delete: Sc(!mq, cq.delete && !aq && !gq),
        deleteWaits: Bq.deleteWaits && !aq && !gq,
        people: "enabled",
        peopleLabel: "players",
        unshare: Sc(dq && mq && !aq, Eq.change),
        remove: dq,
        note: jq
      }
    }

    function Jc(qq) {
      var Eq;
      const gq = qq.baf2IslandCoop;
      if ("owner" !== (null === gq || void 0 === gq ? void 0 : gq.baf2CoopRole) || void 0 !== gq.baf2CoopState || null === (Eq = gq.baf2CoopLeft) || void 0 === Eq || !Eq.length) return null;
      const Yq = qq.baf2IslandActive && gq.baf2CoopManageHere;
      return {
        left: gq.baf2CoopLeft,
        claim: Yq,
        goThere: !Yq && gq.baf2CoopManageHere
      }
    }

    function kc(qq) {
      return qq.baf2CoopMembers.length >= qq.baf2CoopMax
    }

    function Rc(qq, Eq, gq) {
      return void 0 !== qq && Eq < qq.answer && gq - qq.atMs < ic
    }
    const Uc = "buildAFactory2Game:";

    function Fc(qq, Eq) {
      return {
        onKeyDown: gq => {
          gq.stopPropagation(), gq.nativeEvent.isComposing || 229 === gq.nativeEvent.keyCode || ("Enter" === gq.key ? (gq.preventDefault(), qq()) : "Escape" === gq.key && (gq.preventDefault(), Eq()))
        }
      }
    }

    function sc(qq) {
      return {
        onKeyDown: Eq => {
          "Escape" !== Eq.key || Eq.nativeEvent.isComposing || (Eq.preventDefault(), Eq.stopPropagation(), qq())
        }
      }
    }

    function Xc(qq) {
      qq.currentTarget.select()
    }

    function wc(qq, Eq) {
      (0, Yq.useEffect)((() => {
        var gq;
        qq && (null === (gq = Eq.current) || void 0 === gq || gq.scrollIntoView({
          block: "nearest"
        }))
      }), [qq, Eq])
    }

    function Kc(qq) {
      const [Eq, gq] = (0, Yq.useState)(null);
      return (0, Yq.useEffect)((() => {
        const Eq = document.querySelector(".UiRequests"),
          Yq = qq.current;
        if (!Eq || !Yq || "undefined" === typeof ResizeObserver) return;
        const lq = () => {
          const qq = Eq.getBoundingClientRect(),
            lq = Yq.getBoundingClientRect(),
            Oq = Yq.parentElement,
            mq = Oq && parseFloat(getComputedStyle(Oq).paddingTop) || 0,
            xq = function(qq, Eq, gq, Yq) {
              if (!qq || qq.height <= 0 || qq.right <= Eq.left || qq.left >= Eq.right) return null;
              const lq = Math.max(Yq, qq.bottom + 8);
              return {
                marginTop: Math.round(lq - Yq),
                maxHeight: Math.max(0, Math.floor(gq - lq - Yq))
              }
            }(qq, lq, window.innerHeight, mq);
          gq((qq => (null === qq || void 0 === qq ? void 0 : qq.marginTop) === (null === xq || void 0 === xq ? void 0 : xq.marginTop) && (null === qq || void 0 === qq ? void 0 : qq.maxHeight) === (null === xq || void 0 === xq ? void 0 : xq.maxHeight) ? qq : xq))
        };
        lq();
        const Oq = new ResizeObserver(lq);
        return Oq.observe(Eq), window.addEventListener("resize", lq), () => {
          Oq.disconnect(), window.removeEventListener("resize", lq)
        }
      }), [qq]), Eq
    }

    function Cc() {
      (0, Yq.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function Ic(qq) {
      (0, Yq.useEffect)((() => {
        var Eq;
        null === (Eq = qq.current) || void 0 === Eq || Eq.focus()
      }), [qq])
    }

    function ec(qq) {
      const [Eq, gq] = (0, Yq.useState)(Date.now);
      return (0, Yq.useEffect)((() => {
        const Eq = window.setInterval((() => {
          gq(Date.now())
        }), qq);
        return () => {
          window.clearInterval(Eq)
        }
      }), [qq]), Eq
    }

    function Dc(qq) {
      let {
        tier: Eq,
        t: gq
      } = qq;
      const {
        kind: Yq,
        short: lq
      } = dq(Eq), Oq = Nq(Eq, aq), mq = gq(`${Uc}${Oq.key}`, {
        ...Oq.params,
        name: gq(`${Uc}${jq(Eq).nameKey}`)
      });
      return (0, rO.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, rO.jsx)("span", {
          className: yl()("Baf2IslandTierPip", {
            Stage: "tier" !== Yq
          }),
          "aria-hidden": "true",
          children: lq
        }), mq]
      })
    }

    function qu(qq) {
      let {
        note: Eq,
        className: gq,
        t: Yq
      } = qq;
      return (0, rO.jsx)("p", {
        className: yl()("Baf2IslandNote", gq),
        children: zc(Yq, Eq.key, Eq.names, Eq.params)
      })
    }
    const Eu = "buildAFactory2Game:";

    function gu(qq) {
      let {
        message: Eq,
        arrivedAtMs: gq,
        close: lq,
        leave: Oq
      } = qq;
      const mq = km(),
        {
          t: xq
        } = (0, hl.v)(),
        Aq = ec(1e3),
        cq = (0, Yq.useRef)(null);
      Cc(), (0, Yq.useEffect)((() => {
        var qq;
        null === (qq = cq.current) || void 0 === qq || qq.focus()
      }), []);
      const uq = Pc(gq, Eq.baf2TransferInMs, Aq),
        Bq = gq + Eq.baf2TransferInMs - 1e3,
        [Wq, Nq] = (0, Yq.useState)(null);
      (0, Yq.useEffect)((() => {
        const qq = window.setTimeout((() => {
          Nq(Bq)
        }), Math.max(0, Bq - Date.now()));
        return () => {
          window.clearTimeout(qq)
        }
      }), [Bq]);
      const aq = Wq === Bq || Aq >= Bq,
        Vq = Eq.baf2TransferIsland,
        dq = Eq.baf2TransferOwner;
      return (0, rO.jsx)(Pm.c, {
        close: lq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, rO.jsxs)("section", {
          ref: cq,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsxs)("div", {
              children: [(0, rO.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === dq ? zc(xq, `${Eu}islandsTransferOwn`, {
                  island: Vq
                }) : zc(xq, `${Eu}islandsTransfer`, {
                  island: Vq,
                  owner: dq
                })
              }), (0, rO.jsx)("p", {
                children: aq ? xq(`${Eu}islandsTransferNow`) : xq(`${Eu}islandsTransferIn`, {
                  time: PO(xq, uq)
                })
              })]
            }), (0, rO.jsx)(Qm.m, {
              ariaLabel: xq(`${Eu}islandsClose`),
              onClick: lq
            })]
          }), !aq && (0, rO.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, rO.jsx)("p", {
              className: "Baf2TransferNote",
              children: xq(`${Eu}islandsTransferNote`)
            }), (0, rO.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, rO.jsx)(Qm.g, {
                onClick: () => {
                  mq.send("baf2coopstay"), Oq()
                },
                children: xq(`${Eu}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var Yu = gq(1416),
      lu = gq(1117),
      Ou = gq.n(lu);
    const mu = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const xu = "buildAFactory2Game:",
      Au = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function cu(qq, Eq, gq) {
      return void 0 === Eq ? gq : "string" === typeof Eq ? Eq : Array.isArray(Eq) ? Eq.map((Eq => "string" === typeof Eq ? Eq : "translationKey" in Eq ? qq(Eq.translationKey) : "")).join("") : qq(Eq.translationKey)
    }

    function uu(qq) {
      const Eq = {};
      for (const [gq, Yq] of Object.entries(null !== qq && void 0 !== qq ? qq : {})) Eq[gq] = Yq < 0 ? oO(Yq) : Yq.toLocaleString("en-US");
      return Eq
    }

    function Bu(qq, Eq) {
      const gq = Eq ? "touch" : "mouse";
      return {
        use: qq(`${xu}lookUse_${gq}`),
        Use: qq(`${xu}lookUseStart_${gq}`)
      }
    }
    const Wu = (0, Yq.memo)((function(qq) {
      let {
        item: Eq
      } = qq;
      return (0, rO.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, rO.jsx)(bl.e, {
          itemName: Eq,
          amount: 0
        })
      })
    }));

    function Nu(qq) {
      let {
        label: Eq,
        percent: gq,
        progress: Yq
      } = qq;
      return (0, rO.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, rO.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${Eq}: ${Yq}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": gq,
          children: (0, rO.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${gq}%`
            }
          })
        }), (0, rO.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Yq
        })]
      })
    }

    function au(qq) {
      let {
        chips: Eq
      } = qq;
      return (0, rO.jsx)("span", {
        className: "Baf2QuestChips",
        children: Eq.map((qq => {
          let [Eq, gq, Yq] = qq;
          const lq = gq >= Yq;
          return (0, rO.jsxs)("span", {
            className: yl()("Baf2QuestChip", {
              Met: lq
            }),
            children: [(0, rO.jsx)(Wu, {
              item: Eq
            }), (0, rO.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: lq ? `\u2713${Yq}` : `${gq}/${Yq}`
            })]
          }, Eq)
        }))
      })
    }

    function Vu(qq, Eq) {
      const {
        key: gq,
        params: Yq
      } = Nq(Eq, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return qq(`${xu}${gq}`, {
        ...Yq,
        name: qq(`${xu}${jq(Eq).nameKey}`)
      })
    }

    function du(qq) {
      let {
        core: Eq,
        t: gq
      } = qq;
      const [Yq, lq] = Eq, Oq = lq > 0 ? Math.floor(100 * Yq / lq) : 100;
      return (0, rO.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": gq(`${xu}questCoreLabel`, {
          have: String(Yq),
          need: String(lq)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Oq,
        children: [(0, rO.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: gq(`${xu}questCore`, {
            percent: String(Oq)
          })
        }), (0, rO.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, rO.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Oq}%`
            }
          })
        })]
      })
    }

    function ju(qq) {
      let {
        rows: Eq,
        t: gq
      } = qq;
      const Yq = Eq.filter((qq => qq.done)).length;
      return (0, rO.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": gq(`${xu}questStepsProgress`, {
          done: String(Yq),
          total: String(Eq.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": Eq.length,
        "aria-valuenow": Yq,
        children: Eq.map((qq => (0, rO.jsx)("span", {
          className: yl()("Baf2QuestSegment", {
            Done: qq.done,
            Current: qq.current
          })
        }, qq.id)))
      })
    }
    const Hu = (0, Yq.memo)(Pu, ou);

    function ou(qq, Eq) {
      const gq = gq => qq.view.itemNames[gq] === Eq.view.itemNames[gq];
      return qq.t === Eq.t && qq.extra === Eq.extra && (null === qq.row.item || gq(qq.row.item)) && qq.row.madeFor.every(gq) && qq.row.also.every(gq) && Ou()(qq.row, Eq.row)
    }

    function Pu(qq) {
      let {
        row: Eq,
        view: gq,
        t: Yq,
        extra: lq
      } = qq;
      const {
        isTouchScreen: Oq
      } = (0, ol.j)(["isTouchScreen"]), mq = Eq.item ? function(qq, Eq, gq) {
        return 1 !== gq && mu.has(qq) ? vl(Eq) : null
      }(Eq.key, Eq.item, Eq.total) : null, xq = mq ? Yq(mq) : Eq.item ? cu(Yq, gq.itemNames[Eq.item], Eq.item) : "", Aq = Eq.also.map((qq => cu(Yq, gq.itemNames[qq], qq))), cq = Aq.join(", "), uq = function(qq, Eq) {
        var gq;
        return Eq.length < 2 ? null !== (gq = Eq[0]) && void 0 !== gq ? gq : "" : qq(`${xu}listAnd`, {
          rest: Eq.slice(0, -1).join(qq(`${xu}listComma`)),
          last: Eq[Eq.length - 1]
        })
      }(Yq, [xq, ...Aq]), Bq = Yq(`${xu}${Eq.key}`, {
        ...Bu(Yq, Oq),
        ...uu(Eq.params),
        item: xq,
        also: cq,
        itemList: uq,
        total: String(Eq.total)
      }), [Wq, ...Nq] = Bq.split("\n"), aq = Eq.total > 1 && !Eq.done && !Eq.away;
      return (0, rO.jsxs)("li", {
        className: yl()("Baf2QuestStep", {
          Done: Eq.done,
          Current: Eq.current,
          JustFinished: Eq.justFinished,
          Away: Eq.away
        }),
        children: [!Eq.done && null !== Eq.item && (0, rO.jsx)(Wu, {
          item: Eq.item
        }), (Eq.done || null === Eq.item) && (0, rO.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: Eq.done ? "\u2713" : "\u25cb"
        }), (0, rO.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, rO.jsx)("strong", {
            children: Wq
          }), Nq.length > 0 && (0, rO.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Nq.join(" ")
          }), !Eq.done && Eq.madeFor.length > 0 && (0, rO.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Yq("buildAFactory2Game:questRowFor", {
              items: Eq.madeFor.map((qq => cu(Yq, gq.itemNames[qq], qq))).join(" \u2192 ")
            })
          }), aq && (0, rO.jsx)(Nu, {
            label: Wq,
            percent: Math.round(100 * Eq.amount / Eq.total),
            progress: `${Eq.amount.toLocaleString("en-US")}/${Eq.total.toLocaleString("en-US")}`
          }), !Eq.done && !Eq.away && Eq.chips && Eq.chips.length > 0 && (0, rO.jsx)(au, {
            chips: Eq.chips
          }), lq]
        })]
      })
    }

    function Qu(qq, Eq) {
      let [gq, Yq] = Eq;
      return qq(`${xu}${gq}`, uu(Yq))
    }

    function yu(qq) {
      let [Eq, gq] = qq;
      return Eq + JSON.stringify(gq)
    }

    function tu(qq) {
      let {
        goal: Eq,
        t: gq
      } = qq;
      return Eq ? (0, rO.jsx)("span", {
        className: "Baf2BookGoal",
        children: gq(`${xu}${Eq}`)
      }) : null
    }

    function ru(qq) {
      let {
        view: Eq,
        t: gq
      } = qq;
      if (!Eq.name) return null;
      const Yq = Rl(Eq.rows);
      return (0, rO.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, rO.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: gq(`${xu}currentQuest`)
        }), (0, rO.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Qu(gq, Eq.name)
        }), (0, rO.jsx)(tu, {
          goal: Eq.goal,
          t: gq
        }), Yq.length > 1 && (0, rO.jsx)(ju, {
          rows: Yq,
          t: gq
        }), (0, rO.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: Eq.rows.map((qq => (0, rO.jsx)(Hu, {
            row: qq,
            view: Eq,
            t: gq
          }, qq.id)))
        }), Eq.reward && (0, rO.jsxs)("span", {
          className: "Baf2BookReward",
          children: [gq(`${xu}questReward`), (0, rO.jsx)(Wu, {
            item: Eq.reward
          }), cu(gq, Eq.itemNames[Eq.reward], Eq.reward)]
        })]
      })
    }

    function vu(qq) {
      let {
        quest: Eq,
        upcoming: gq,
        t: Yq
      } = qq;
      return (0, rO.jsxs)("li", {
        className: yl()("Baf2BookQuest", {
          Done: Eq[3],
          Upcoming: gq
        }),
        children: [(0, rO.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: Eq[3] ? "\u2713" : "\u25cb"
        }), (0, rO.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, rO.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Qu(Yq, Eq)
          }), (0, rO.jsx)(tu, {
            goal: Eq[2],
            t: Yq
          })]
        })]
      })
    }

    function hu(qq) {
      let {
        done: Eq,
        total: gq,
        t: Yq
      } = qq;
      const lq = gq > 0 ? Math.round(100 * Eq / gq) : 0,
        Oq = Yq(`${xu}questBookChapterProgress`, {
          done: String(Eq),
          total: String(gq)
        });
      return (0, rO.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, rO.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Oq,
          "aria-valuemin": 0,
          "aria-valuemax": gq,
          "aria-valuenow": Eq,
          children: (0, rO.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${lq}%`
            }
          })
        }), (0, rO.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Oq
        })]
      })
    }

    function nu(qq) {
      let {
        view: Eq,
        tier: gq,
        quests: Yq,
        t: lq
      } = qq;
      const Oq = gq === Eq.tier,
        mq = (null !== Yq && void 0 !== Yq ? Yq : []).filter((qq => !qq[4])),
        xq = (null !== Yq && void 0 !== Yq ? Yq : []).filter((qq => qq[4])),
        Aq = mq.filter((qq => qq[3])).length,
        cq = Oq && Eq.name ? yu(Eq.name) : null,
        uq = mq.findIndex((qq => !qq[3] && yu(qq) === cq));
      return (0, rO.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, rO.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, rO.jsx)("h3", {
            children: Vu(lq, gq)
          }), mq.length > 0 && (0, rO.jsx)(hu, {
            done: Aq,
            total: mq.length,
            t: lq
          }), Oq && Eq.core && (0, rO.jsx)(du, {
            core: Eq.core,
            t: lq
          })]
        }), (0, rO.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Yq && Oq && (0, rO.jsx)(ru, {
            view: Eq,
            t: lq
          }), mq.map(((qq, gq) => gq === uq ? (0, rO.jsx)(ru, {
            view: Eq,
            t: lq
          }, yu(qq)) : (0, rO.jsx)(vu, {
            quest: qq,
            upcoming: !qq[3],
            t: lq
          }, yu(qq))))]
        }), Oq && Eq.side && (0, rO.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, rO.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: lq(`${xu}questSide`)
          }), (0, rO.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Qu(lq, Eq.side.name)
          }), (0, rO.jsx)(tu, {
            goal: Eq.side.goal,
            t: lq
          }), (0, rO.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, rO.jsx)(Hu, {
              row: Eq.side.row,
              view: Eq,
              t: lq
            })
          })]
        }), xq.length > 0 && (0, rO.jsxs)(rO.Fragment, {
          children: [(0, rO.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: lq(`${xu}questBookSidesDone`)
          }), (0, rO.jsx)("ol", {
            className: "Baf2BookQuests",
            children: xq.map((qq => (0, rO.jsx)(vu, {
              quest: qq,
              upcoming: !1,
              t: lq
            }, yu(qq))))
          })]
        })]
      })
    }

    function bu(qq) {
      var Eq, gq, Oq;
      let {
        store: mq,
        close: xq
      } = qq;
      const {
        t: Aq
      } = (0, hl.v)(), cq = (0, Yu.h)(zl, mq.get()), Bq = null !== (Eq = cq.tier) && void 0 !== Eq ? Eq : 1, [Wq, Nq] = (0, Yq.useState)(null), aq = (null === Wq || void 0 === Wq ? void 0 : Wq.at) === Bq ? Wq.tier : Bq, jq = (0, Yq.useRef)(null), Hq = null !== cq.chapters;
      (0, Yq.useEffect)((() => {
        var qq;
        jq.current && (jq.current.scrollTop = 0);
        const Eq = null === (qq = jq.current) || void 0 === qq ? void 0 : qq.querySelector(".Baf2BookQuest.Current");
        if (jq.current && Eq) {
          const qq = Eq.getBoundingClientRect().bottom - jq.current.getBoundingClientRect().bottom;
          qq > 0 && (jq.current.scrollTop += Math.min(qq, Eq.getBoundingClientRect().top - jq.current.getBoundingClientRect().top))
        }
      }), [aq, Hq]);
      const oq = null === (gq = cq.chapters) || void 0 === gq ? void 0 : gq.find((qq => {
        let [Eq] = qq;
        return Eq === aq
      }));
      return (0, rO.jsx)(Pm.c, {
        close: xq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, rO.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: Au,
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Aq(`${xu}questBookTitle`)
            }), (0, rO.jsx)(Qm.m, {
              onClick: xq
            })]
          }), (0, rO.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Aq(`${xu}questBookChapters`),
            children: lq.slice(0, uq()).map(((qq, Eq) => {
              const gq = Eq + 1,
                {
                  kind: Yq,
                  short: lq
                } = dq(gq),
                Oq = Vq(gq, Bq),
                mq = Oq ? Aq(`${xu}coreAtomicHidden`) : Vu(Aq, gq);
              return (0, rO.jsx)("li", {
                children: (0, rO.jsx)("button", {
                  type: "button",
                  className: yl()({
                    Stage: "tier" !== Yq,
                    Atomic: "atomic" === Yq,
                    Current: gq === Bq,
                    Selected: gq === aq
                  }),
                  disabled: gq > Bq,
                  "aria-pressed": gq === aq,
                  "aria-label": mq,
                  title: Oq ? void 0 : mq,
                  onClick: () => {
                    Nq({
                      tier: gq,
                      at: Bq
                    })
                  },
                  children: Oq ? "?" : lq
                })
              }, qq.nameKey)
            }))
          }), (0, rO.jsxs)("div", {
            ref: jq,
            className: "Baf2BookBody",
            children: [Jl(cq) && aq === Bq && (0, rO.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Aq(`${xu}questBookAllDone`)
            }), (0, rO.jsx)(nu, {
              view: cq,
              tier: aq,
              quests: null !== (Oq = null === oq || void 0 === oq ? void 0 : oq[1]) && void 0 !== Oq ? Oq : null,
              t: Aq
            })]
          })]
        })
      })
    }
    const iu = "buildAFactory2Game:";

    function Zu(qq) {
      let {
        tiers: Eq,
        from: gq,
        tier: Yq,
        shown: lq,
        zW: Oq
      } = qq;
      const {
        t: mq
      } = (0, hl.v)(), xq = Eq.map(((qq, Eq) => {
        const xq = gq + Eq,
          {
            kind: Aq,
            short: cq
          } = dq(xq),
          uq = Vq(xq, Yq);
        return (0, rO.jsx)("li", {
          children: (0, rO.jsx)("button", {
            type: "button",
            className: yl()({
              Stage: "tier" !== Aq,
              Silhouette: uq,
              Reached: xq <= Yq,
              Current: xq === Yq,
              Next: xq === Yq + 1,
              Selected: xq === lq
            }),
            disabled: uq,
            "aria-pressed": xq === lq,
            "aria-label": uq ? mq(`${iu}coreAtomicHidden`) : void 0,
            title: uq ? void 0 : mq(`${iu}${qq.nameKey}`),
            onClick: () => {
              Oq(xq)
            },
            children: uq ? "?" : cq
          })
        }, qq.nameKey)
      }));
      return (0, rO.jsx)(rO.Fragment, {
        children: xq
      })
    }

    function fu(qq) {
      let {
        id: Eq,
        label: gq,
        tiers: Yq,
        from: lq,
        ...Oq
      } = qq;
      return (0, rO.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, rO.jsx)("span", {
          id: Eq,
          className: "Baf2CoreLadderLabel",
          children: gq
        }), (0, rO.jsx)("ol", {
          "aria-labelledby": Eq,
          children: (0, rO.jsx)(Zu, {
            ...Oq,
            tiers: Yq,
            from: lq
          })
        })]
      })
    }

    function Mu(qq) {
      const {
        t: Eq
      } = (0, hl.v)(), gq = lq.findIndex((qq => void 0 !== qq.stage)), Yq = lq.findIndex((qq => void 0 !== qq.reactorTier)), Oq = gq < 0 ? lq : lq.slice(0, gq), mq = gq < 0 ? [] : lq.slice(gq, Yq < 0 ? void 0 : Yq), Aq = Yq < 0 || !xq() ? [] : lq.slice(Yq);
      return (0, rO.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, rO.jsx)(fu, {
          ...qq,
          id: "baf2CoreTiersLabel",
          label: Eq(`${iu}coreTiersLabel`),
          tiers: Oq,
          from: 1
        }), mq.length > 0 && (0, rO.jsx)(fu, {
          ...qq,
          id: "baf2CoreStagesLabel",
          label: Eq(`${iu}coreStagesLabel`),
          tiers: mq,
          from: gq + 1
        }), Aq.length > 0 && (0, rO.jsx)(fu, {
          ...qq,
          id: "baf2CoreAtomicLabel",
          label: Eq(`${iu}coreAtomicLabel`),
          tiers: Aq,
          from: Yq + 1
        })]
      })
    }
    const Tu = "buildAFactory2Game:";

    function zu(qq) {
      let {
        item: Eq,
        itemNames: gq,
        children: Yq
      } = qq;
      return (0, rO.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, rO.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, rO.jsx)(bl.e, {
            itemName: Eq,
            amount: 0
          })
        }), (0, rO.jsx)(il.c, {
          text: gq[Eq]
        }), Yq]
      })
    }

    function Su(qq) {
      const Eq = new Map;
      for (const {
          block: Yq
        }
        of qq.newDeposits) {
        var gq;
        Eq.set(Yq, (null !== (gq = Eq.get(Yq)) && void 0 !== gq ? gq : 0) + 1)
      }
      return [...Eq]
    }

    function pu(qq) {
      let {
        value: Eq,
        label: gq,
        more: Yq
      } = qq;
      return (0, rO.jsxs)("li", {
        children: [(0, rO.jsx)("strong", {
          children: Eq
        }), (0, rO.jsx)("span", {
          children: gq
        }), Yq > 0 && (0, rO.jsxs)("em", {
          children: ["+", Yq]
        })]
      })
    }

    function Gu(qq) {
      let {
        items: Eq,
        itemNames: gq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)(), [Oq, mq] = (0, Yq.useState)(null), xq = null !== Oq && Eq.includes(Oq) ? Oq : null;
      return (0, rO.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, rO.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: lq(`${Tu}coreRewardUnlocks`)
        }), (0, rO.jsx)("ul", {
          children: Eq.map((qq => (0, rO.jsx)("li", {
            children: (0, rO.jsx)("button", {
              type: "button",
              className: yl()("Baf2PanelIcon", {
                Picked: qq === xq
              }),
              title: YO(lq, qq),
              "aria-label": YO(lq, qq),
              "aria-pressed": qq === xq,
              onClick: () => {
                mq(qq === xq ? null : qq)
              },
              children: (0, rO.jsx)(bl.e, {
                itemName: qq,
                amount: 0
              })
            })
          }, qq)))
        }), (0, rO.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== xq && (0, rO.jsxs)(rO.Fragment, {
            children: [(0, rO.jsx)(il.c, {
              text: gq[xq]
            }), " \xb7 ", (0, rO.jsx)(il.c, {
              text: gq[iq(xq)]
            })]
          }), null === xq && lq(`${Tu}coreRecipeTap`)]
        })]
      })
    }

    function Lu(qq) {
      var Eq, gq;
      let {
        def: Yq,
        tier: lq,
        itemNames: Oq
      } = qq;
      const {
        t: mq
      } = (0, hl.v)(), xq = lq > 1 ? jq(lq - 1) : void 0, Aq = Math.round(2 * Yq.islandRadius), cq = xq ? Math.round(2 * xq.islandRadius) : Aq, uq = lq >= 3 ? QY(lq) : null;
      return (0, rO.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, rO.jsxs)("ul", {
          className: yl()("Baf2CoreStats", {
            Four: null !== uq
          }),
          children: [(0, rO.jsx)(pu, {
            value: `${Aq}\xd7${Aq}`,
            label: mq(`${Tu}coreStatIsland`),
            more: Aq - cq
          }), (0, rO.jsx)(pu, {
            value: String(Yq.machineAllowance),
            label: mq(`${Tu}coreStatMachines`),
            more: Yq.machineAllowance - (null !== (Eq = null === xq || void 0 === xq ? void 0 : xq.machineAllowance) && void 0 !== Eq ? Eq : Yq.machineAllowance)
          }), (0, rO.jsx)(pu, {
            value: String(Yq.beltAllowance),
            label: mq(`${Tu}coreStatBelts`),
            more: Yq.beltAllowance - (null !== (gq = null === xq || void 0 === xq ? void 0 : xq.beltAllowance) && void 0 !== gq ? gq : Yq.beltAllowance)
          }), null !== uq && (0, rO.jsx)(pu, {
            value: String(uq),
            label: mq(`${Tu}coreStatStorage`),
            more: uq - (xq ? QY(lq - 1) : uq)
          })]
        }), Yq.reward && (0, rO.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, rO.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: mq(`${Tu}coreRewardItem`)
          }), (0, rO.jsx)(zu, {
            item: Yq.reward,
            itemNames: Oq
          })]
        }), Yq.newDeposits.length > 0 && (0, rO.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, rO.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: mq(Yq.newDeposits.length > 1 ? `${Tu}coreRewardDeposits` : `${Tu}coreRewardDeposit`)
          }), Su(Yq).map((qq => {
            let [Eq, gq] = qq;
            return (0, rO.jsx)(zu, {
              item: Eq,
              itemNames: Oq,
              children: gq > 1 && ` \xd7${gq}`
            }, Eq)
          }))]
        }), Yq.unlocks.length > 0 && (0, rO.jsx)(Gu, {
          items: Yq.unlocks,
          itemNames: Oq
        }), (0, rO.jsx)(Ju, {
          tier: lq
        })]
      })
    }

    function Ju(qq) {
      let {
        tier: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)(), Yq = Vl[Eq];
      if (!Yq) return null;
      const lq = al(Eq, 0, 0).barrierMax !== al(Eq - 1, 0, 0).barrierMax;
      return (0, rO.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, rO.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, rO.jsx)(bl.e, {
            itemName: lq ? Al.Chestplate : xl,
            amount: 0
          })
        }), gq(`${Tu}gearPerkLine`, {
          perk: gq(`${Tu}${Yq}`)
        })]
      })
    }

    function ku(qq, Eq) {
      return null === qq ? Eq : qq.value
    }

    function Ru(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === qq || gq - qq.atMs >= Yq ? null : lq(qq.value, Eq) ? qq.armed ? null : qq : qq.armed ? qq : {
        ...qq,
        armed: !0
      }
    }

    function Uu(qq, Eq) {
      const gq = Eq.filter((Eq => {
        var gq;
        return !1 !== (null === (gq = qq.get(Eq)) || void 0 === gq ? void 0 : gq.value)
      }));
      for (const [Yq, lq] of qq) lq.value && !Eq.includes(Yq) && gq.push(Yq);
      return gq
    }

    function Fu(qq, Eq, gq, lq) {
      const [Oq, mq] = (0, Yq.useState)((() => new Map)), xq = () => {
        mq((Eq => function(qq, Eq, gq, Yq) {
          var lq;
          let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            mq = null;
          for (const [xq, Aq] of qq) {
            const lq = Ru(Aq, Eq(xq), gq, Yq, Oq);
            lq !== Aq && (mq ??= new Map(qq), null === lq ? mq.delete(xq) : mq.set(xq, lq))
          }
          return null !== (lq = mq) && void 0 !== lq ? lq : qq
        }(Eq, qq, Date.now(), gq, lq)))
      };
      (0, Yq.useEffect)((() => {
        xq()
      }), [Eq, gq]), (0, Yq.useEffect)((() => {
        if (0 === Oq.size) return;
        const qq = Math.min(...[...Oq.values()].map((qq => qq.atMs))),
          Eq = setTimeout(xq, Math.max(0, qq + gq - Date.now()) + 1);
        return () => {
          clearTimeout(Eq)
        }
      }), [Oq, Eq, gq]);
      return [Oq, (Eq, gq) => {
        mq((Yq => {
          const Oq = new Map(Yq);
          return Oq.set(Eq, function(qq, Eq, gq) {
            return {
              value: qq,
              atMs: gq,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(qq, Eq)
            }
          }(gq, qq(Eq), Date.now(), lq)), Oq
        }))
      }]
    }
    const su = "buildAFactory2Game:";

    function Xu(qq) {
      let {
        message: Eq,
        itemNames: gq
      } = qq;
      const lq = km(),
        {
          t: Oq
        } = (0, hl.v)(),
        [mq, xq] = (0, Yq.useState)(!1),
        [Aq, cq] = function(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tm;
          const [gq, Yq] = Fu((Eq => qq.includes(Eq)), qq, Eq, Object.is);
          return [Uu(gq, qq), Yq]
        }(Eq.baf2CoreBankPaused),
        uq = new Set(Aq),
        Bq = [...Eq.baf2CoreBanked];
      for (const Yq of uq) Bq.some((qq => {
        let [Eq] = qq;
        return Eq === Yq
      })) || Bq.push([Yq, 0]);
      return 0 === Bq.length ? null : (0, rO.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, rO.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": mq,
          onClick: () => {
            xq(!mq)
          },
          children: [(0, rO.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Oq(`${su}coreBankedLater`)
          }), (0, rO.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Bq.map((qq => {
              let [Eq, gq] = qq;
              const Yq = uq.has(Eq);
              return (0, rO.jsxs)("span", {
                className: yl()({
                  Paused: Yq
                }),
                title: Yq ? Oq(`${su}coreBankPausedTag`) : void 0,
                children: [(0, rO.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, rO.jsx)(bl.e, {
                    itemName: Eq,
                    amount: 0
                  })
                }), gq, Yq && (0, rO.jsx)(nl.d, {
                  name: "pause"
                })]
              }, Eq)
            }))
          }), (0, rO.jsx)(nl.d, {
            name: mq ? "angle-up" : "angle-down"
          })]
        }), mq && (0, rO.jsxs)(rO.Fragment, {
          children: [(0, rO.jsx)("ul", {
            children: Bq.map((qq => {
              let [Eq, Yq] = qq;
              const mq = uq.has(Eq);
              return (0, rO.jsxs)("li", {
                children: [(0, rO.jsxs)(zu, {
                  item: Eq,
                  itemNames: gq,
                  children: [(0, rO.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Yq
                  }), mq && (0, rO.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Oq(`${su}coreBankPausedTag`)
                  })]
                }), (0, rO.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, rO.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Yq,
                    onClick: () => {
                      lq.send(`baf2corewithdraw ${Yq} ${Eq}`)
                    },
                    children: Oq(`${su}coreTake`)
                  }), (0, rO.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      lq.send(`${Pq} ${Eq}`), cq(Eq, !mq)
                    },
                    children: Oq(mq ? `${su}coreBankResume` : `${su}coreBankStop`)
                  })]
                })]
              }, Eq)
            }))
          }), (0, rO.jsx)("p", {
            className: "Baf2CoreHint",
            children: Oq(`${su}coreBankNote`)
          })]
        })]
      })
    }
    const wu = "buildAFactory2Game:";

    function Ku(qq) {
      const Eq = Math.max(0, Math.floor(qq));
      return `${Math.floor(Eq/60)}:${String(Eq%60).padStart(2,"0")}`
    }

    function Cu(qq) {
      let {
        item: Eq
      } = qq;
      return (0, rO.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, rO.jsx)(bl.e, {
          itemName: Eq,
          amount: 0
        })
      })
    }

    function Iu() {
      return (0, rO.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, rO.jsx)(nl.d, {
          name: "bolt"
        })
      })
    }

    function eu(qq) {
      let {
        charge: Eq,
        hint: gq,
        itemNames: Yq
      } = qq;
      const lq = km(),
        {
          t: Oq
        } = (0, hl.v)(),
        [mq, xq, Aq, cq, uq, Bq, Wq] = Eq,
        [Nq, aq] = function(qq) {
          var Eq;
          let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tm,
            Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [lq, Oq] = Fu((() => qq), qq, gq, Yq);
          return [ku(null !== (Eq = lq.get("")) && void 0 !== Eq ? Eq : null, qq), qq => {
            Oq("", qq)
          }]
        }(Wq),
        Vq = Nq === Wq ? Bq : !Nq,
        dq = cq >= uq,
        jq = mq.find((qq => {
          let [, Eq, gq] = qq;
          return gq < .9 * Eq
        }));
      let Hq = `${wu}coreChargeWaiting`,
        oq = {};
      return dq ? Hq = `${wu}coreChargeDone` : Nq ? Hq = `${wu}coreChargeStopped` : Vq && gq ? (Hq = `${wu}${gq[0]}`, oq = {
        item: YO(Oq, gq[1])
      }) : Vq && jq ? (Hq = `${wu}coreChargeShort`, oq = {
        item: YO(Oq, jq[0])
      }) : Vq && xq > 0 && !Aq ? Hq = `${wu}coreChargePower` : Vq && (Hq = `${wu}coreChargeRunning`), (0, rO.jsxs)("div", {
        className: yl()("Baf2CoreCharge", {
          Waiting: !Vq && !dq,
          Done: dq
        }),
        children: [(0, rO.jsxs)("h4", {
          children: [Oq(`${wu}coreChargeTitle`), (0, rO.jsx)("span", {
            children: Oq(`${wu}coreChargeProgress`, {
              done: Ku(cq),
              need: Ku(uq)
            })
          })]
        }), (0, rO.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, rO.jsx)("div", {
            style: {
              width: 100 * Math.min(cq, uq) / uq + "%"
            }
          })
        }), (0, rO.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [mq.map((qq => {
            var Eq;
            let [gq, lq, mq] = qq;
            const xq = mq >= .9 * lq;
            return (0, rO.jsxs)("li", {
              className: yl()({
                Done: xq,
                Short: Vq && !xq
              }),
              children: [(0, rO.jsx)(Cu, {
                item: gq
              }), (0, rO.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, rO.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, rO.jsx)(il.c, {
                    text: null !== (Eq = Yq[gq]) && void 0 !== Eq ? Eq : gq
                  }), (0, rO.jsx)("span", {
                    children: Oq(`${wu}coreChargeItem`, {
                      now: String(mq),
                      need: String(lq)
                    })
                  })]
                }), (0, rO.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, rO.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*mq/lq)}%`
                    }
                  })
                })]
              })]
            }, gq)
          })), xq > 0 && (0, rO.jsxs)("li", {
            className: yl()("Baf2CoreChargePower", {
              Short: Vq && !Aq
            }),
            children: [(0, rO.jsx)(Iu, {}), (0, rO.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, rO.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, rO.jsx)("span", {
                  children: Oq(`${wu}coreChargePowerRow`, {
                    power: Iq(xq)
                  })
                })
              })
            })]
          })]
        }), (0, rO.jsx)("p", {
          className: "Baf2CoreHint",
          children: Oq(Hq, oq)
        }), !dq && (Vq || Nq) && (0, rO.jsx)("button", {
          type: "button",
          className: yl()("Baf2CoreChargeToggle", {
            Stopped: Nq
          }),
          onClick: () => {
            lq.send(yq), aq(!Nq)
          },
          children: Oq(Nq ? `${wu}coreChargeRestart` : `${wu}coreChargeStop`)
        })]
      })
    }

    function Du(qq) {
      let {
        charge: Eq,
        reached: gq,
        itemNames: Yq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)();
      return (0, rO.jsxs)("div", {
        className: yl()("Baf2CoreCharge", {
          Done: gq
        }),
        children: [(0, rO.jsxs)("h4", {
          children: [lq(`${wu}coreChargeTitle`), (0, rO.jsx)("span", {
            children: lq(`${wu}coreChargeSpecTime`, {
              time: Ku(Eq.seconds)
            })
          })]
        }), (0, rO.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Eq.items.map((qq => {
            var Eq;
            let {
              item: Oq,
              amount: mq
            } = qq;
            return (0, rO.jsxs)("li", {
              className: yl()({
                Done: gq
              }),
              children: [(0, rO.jsx)(Cu, {
                item: Oq
              }), (0, rO.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, rO.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, rO.jsx)(il.c, {
                    text: null !== (Eq = Yq[Oq]) && void 0 !== Eq ? Eq : Oq
                  }), (0, rO.jsx)("span", {
                    children: lq(`${wu}coreChargeSpecItem`, {
                      need: String(mq)
                    })
                  })]
                })
              })]
            }, Oq)
          })), Eq.powerPerS > 0 && (0, rO.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, rO.jsx)(Iu, {}), (0, rO.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, rO.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, rO.jsx)("span", {
                  children: lq(`${wu}coreChargePowerRow`, {
                    power: Iq(Eq.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const qB = "buildAFactory2Game:";

    function EB(qq) {
      let {
        def: Eq,
        reached: gq,
        banked: Yq,
        itemNames: lq
      } = qq;
      const {
        t: Oq
      } = (0, hl.v)();
      return (0, rO.jsx)("ul", {
        className: "Baf2CoreCost",
        children: Eq.cost.map((qq => {
          let {
            item: Eq,
            amount: mq
          } = qq;
          const xq = gq ? 0 : Yq(Eq);
          return (0, rO.jsx)("li", {
            children: (0, rO.jsx)(zu, {
              item: Eq,
              itemNames: lq,
              children: (0, rO.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: xq > 0 ? Oq(`${qB}coreBankedFor`, {
                  amount: String(xq),
                  total: String(mq)
                }) : `\xd7${mq}`
              })
            })
          }, Eq)
        }))
      })
    }

    function gB(qq, Eq) {
      if (Eq >= uq()) return qq(`${qB}coreMaxTier`);
      const gq = cq[Eq + 1];
      return gq && !gq.startsWith("upgradeCore") ? qq(`${qB}coreGateQuest`, {
        quest: qq(`${qB}quest_${gq}`)
      }) : qq(`${qB}coreGateClosed`)
    }

    function YB() {
      const {
        t: qq
      } = (0, hl.v)(), Eq = km(), gq = (0, Yq.useRef)(null), lq = (0, Yq.useRef)(Date.now());
      return wc(!0, gq), (0, rO.jsx)("div", {
        ref: gq,
        className: "Baf2CoreGrow",
        children: (0, rO.jsx)(Qm.p, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - lq.current >= 600 && Eq.send(oq)
          },
          children: qq(`${qB}coreGrow`)
        })
      })
    }

    function lB(qq) {
      let {
        message: Eq,
        itemNames: gq,
        next: Yq
      } = qq;
      const lq = km(),
        {
          t: Oq
        } = (0, hl.v)(),
        mq = Eq.baf2CoreTier,
        xq = Eq.baf2CoreReady,
        Aq = Eq.baf2CoreNeeds.filter((qq => {
          let [, Eq, gq, Yq] = qq;
          return Yq > 0 && Eq < gq
        })),
        cq = Eq.baf2CoreNeeds.every((qq => {
          let [, Eq, gq] = qq;
          return Eq >= gq
        })),
        uq = Eq.baf2CoreKeep;
      return (0, rO.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, rO.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [xq && (0, rO.jsx)(YB, {}), (0, rO.jsx)("h3", {
            children: Oq(`${qB}coreBring`)
          }), (0, rO.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: Eq.baf2CoreNeeds.map((qq => {
              let [Eq, Yq, mq, xq] = qq;
              return (0, rO.jsxs)("li", {
                className: yl()({
                  Done: Yq >= mq
                }),
                children: [(0, rO.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, rO.jsx)(bl.e, {
                    itemName: Eq,
                    amount: 0
                  })
                }), (0, rO.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, rO.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, rO.jsx)(il.c, {
                      text: gq[Eq]
                    }), (0, rO.jsxs)("span", {
                      children: [Yq, "/", mq]
                    })]
                  }), (0, rO.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, rO.jsx)("div", {
                      style: {
                        width: 100 * Yq / mq + "%"
                      }
                    }), xq > 0 && (0, rO.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * xq / mq + "%"
                      }
                    })]
                  })]
                }), xq > 0 && Yq < mq && (0, rO.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    lq.send(`${Qq} ${Eq}`)
                  },
                  children: Oq(`${qB}coreDeposit`, {
                    amount: String(xq)
                  })
                })]
              }, Eq)
            }))
          }), Eq.baf2CoreCharge && (0, rO.jsx)(eu, {
            charge: Eq.baf2CoreCharge,
            hint: Eq.baf2CoreChargeHint,
            itemNames: gq
          }), !xq && Aq.length > 1 && (0, rO.jsx)(Qm.p, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              lq.send(oq)
            },
            children: Oq(`${qB}coreHandOver`)
          }), !xq && void 0 !== uq && (0, rO.jsx)("p", {
            className: "Baf2CoreHint",
            children: Oq(`${qB}coreKeepRest`, {
              item: YO(Oq, uq)
            })
          }), !xq && !cq && 0 === Aq.length && void 0 === uq && (0, rO.jsx)("p", {
            className: "Baf2CoreHint",
            children: Oq(`${qB}coreNothingHeld`)
          }), (0, rO.jsx)(Xu, {
            message: Eq,
            itemNames: gq
          })]
        }), (0, rO.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, rO.jsx)("h3", {
            children: Oq(`${qB}coreRewards`)
          }), (0, rO.jsx)(Lu, {
            def: Yq,
            tier: mq + 1,
            itemNames: gq
          })]
        })]
      })
    }

    function OB(qq) {
      let {
        message: Eq,
        itemNames: gq,
        shown: Yq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)(), Oq = Eq.baf2CoreTier, mq = jq(Yq), xq = Yq <= Oq, Aq = new Map(Eq.baf2CoreBanked), cq = !Hq(Oq, tq(Eq)) && Yq === Oq;
      return (0, rO.jsxs)("div", {
        className: yl()("Baf2CoreBody", {
          Locked: !xq
        }),
        children: [(0, rO.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, rO.jsx)("h3", {
            children: lq(xq ? `${qB}coreItTook` : `${qB}coreItNeeds`)
          }), 0 === mq.cost.length && (0, rO.jsx)("p", {
            className: "Baf2CoreHint",
            children: lq(`${qB}coreTierStart`)
          }), mq.cost.length > 0 && (0, rO.jsx)(EB, {
            def: mq,
            reached: xq,
            banked: qq => {
              var Eq;
              return function(qq, Eq, gq, Yq) {
                let lq = qq;
                for (let mq = Eq + 2; mq <= gq; mq++) {
                  var Oq;
                  const qq = jq(mq).cost.find((qq => qq.item === Yq)),
                    Eq = Math.min(lq, null !== (Oq = null === qq || void 0 === qq ? void 0 : qq.amount) && void 0 !== Oq ? Oq : 0);
                  if (mq === gq) return Eq;
                  lq -= Eq
                }
                return 0
              }(null !== (Eq = Aq.get(qq)) && void 0 !== Eq ? Eq : 0, Oq, Yq, qq)
            },
            itemNames: gq
          }), mq.charge && (0, rO.jsx)(Du, {
            charge: mq.charge,
            reached: xq,
            itemNames: gq
          }), cq && (0, rO.jsxs)(rO.Fragment, {
            children: [(0, rO.jsx)("p", {
              className: "Baf2CoreHint",
              children: gB(lq, Oq)
            }), (0, rO.jsx)(Xu, {
              message: Eq,
              itemNames: gq
            })]
          })]
        }), (0, rO.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, rO.jsx)("h3", {
            children: lq(xq ? `${qB}coreGave` : `${qB}coreLockedRewards`)
          }), (0, rO.jsx)(Lu, {
            def: mq,
            tier: Yq,
            itemNames: gq
          })]
        })]
      })
    }

    function mB(qq, Eq) {
      const {
        key: gq,
        params: Yq
      } = Nq(Eq - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return qq(`${qB}${gq}`, Yq)
    }
    const xB = "buildAFactory2Game:",
      AB = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      cB = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function uB(qq) {
      let {
        view: Eq,
        close: gq,
        askIslands: lq
      } = qq;
      const {
        t: Oq
      } = (0, hl.v)(), [mq, xq] = (0, Yq.useState)(!1);
      (0, Yq.useEffect)((() => {
        if (!mq) return;
        const qq = window.setTimeout((() => {
          xq(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(qq)
        }
      }), [mq]);
      const {
        message: Aq,
        itemNames: cq
      } = Eq, uq = Aq.baf2CoreTier, Bq = jq(uq), Wq = Hq(uq, tq(Aq)), [Vq, dq] = Aq.baf2CoreMachines, [oq, Pq] = Aq.baf2CoreBelts, Qq = Aq.baf2CoreStorage, yq = Aq.baf2CoreReady, [rq, vq] = (0, Yq.useState)(null), hq = (null === rq || void 0 === rq ? void 0 : rq.at) === uq && rq.ready === yq ? rq.tier : Wq ? uq + 1 : uq;
      let nq = "coreTierLocked";
      hq <= uq ? nq = "coreTierReached" : hq === uq + 1 && (nq = "coreTierNext");
      const bq = Oq(`${xB}${jq(hq).nameKey}`),
        iq = hq === uq + 1 ? Wq : null,
        Zq = Nq(hq, {
          tier: nq,
          stage: AB[nq],
          atomic: cB[nq]
        }),
        fq = Oq(`${xB}${Zq.key}`, {
          ...Zq.params,
          name: bq
        }),
        Mq = Nq(uq, aq),
        Tq = Oq(`${xB}${Mq.key}`, {
          ...Mq.params,
          name: Oq(`${xB}${Bq.nameKey}`)
        });
      return (0, rO.jsx)(Pm.c, {
        close: gq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, rO.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsxs)("div", {
              children: [(0, rO.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Oq(`${xB}coreTitle`)
              }), void 0 !== Aq.baf2CoreIslandName && (0, rO.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Aq.baf2CoreIslandName
              }), (0, rO.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, rO.jsx)("span", {
                  children: Tq
                }), (0, rO.jsx)("span", {
                  className: yl()({
                    Full: Vq >= dq
                  }),
                  children: Oq(`${xB}coreMachineCount`, {
                    amount: String(Vq),
                    total: String(dq)
                  })
                }), (0, rO.jsx)("span", {
                  className: yl()({
                    Full: oq >= Pq
                  }),
                  children: Oq(`${xB}coreBeltCount`, {
                    amount: String(oq),
                    total: String(Pq)
                  })
                }), void 0 !== Qq && (0, rO.jsx)("span", {
                  className: yl()({
                    Full: Qq[0] >= Qq[1]
                  }),
                  children: Oq(`${xB}coreStorageCount`, {
                    amount: String(Qq[0]),
                    total: String(Qq[1])
                  })
                })]
              })]
            }), (0, rO.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Aq.baf2CoreIslands && (0, rO.jsx)(Qm.g, {
                className: "Baf2CoreIslandsButton",
                disabled: mq,
                onClick: () => {
                  xq(!0), lq()
                },
                children: Oq(`${xB}islandsOpenButton`)
              }), (0, rO.jsx)(Qm.m, {
                onClick: gq
              })]
            })]
          }), (0, rO.jsx)(Mu, {
            tier: uq,
            shown: hq,
            zW: qq => {
              vq({
                tier: qq,
                at: uq,
                ready: yq
              })
            }
          }), (0, rO.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [fq, hq > uq + 1 && (0, rO.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: mB(Oq, hq)
            })]
          }), 6 === hq && hq > uq && (0, rO.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Oq(`${xB}coreStagesNote`)
          }), 11 === hq && hq > uq && (0, rO.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Oq(`${xB}coreAtomicNote`)
          }), iq && (0, rO.jsx)(lB, {
            message: Aq,
            itemNames: cq,
            next: iq
          }), !iq && (0, rO.jsx)(OB, {
            message: Aq,
            itemNames: cq,
            shown: hq
          })]
        })
      })
    }
    const BB = {
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
    const WB = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: xO,
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

    function NB(qq) {
      return qq.baf2DropCometOreOnly ? "dropCometOre" : qq.baf2DropCometIsotope ? "seed" === qq.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function aB(qq) {
      let {
        message: Eq,
        quests: gq,
        close: lq,
        leave: Oq
      } = qq;
      const mq = km(),
        {
          t: xq
        } = (0, hl.v)(),
        Aq = (0, Yu.h)(zl, gq.get()),
        cq = function(qq) {
          var Eq;
          if (!Mq(qq.tutorial)) return null;
          const gq = qq.rows.find((qq => qq.current)),
            Yq = gq ? BB[gq.key] : void 0;
          return null !== (Eq = null !== Yq && void 0 !== Yq ? Yq : qq.side ? BB[qq.side.row.key] : void 0) && void 0 !== Eq ? Eq : null
        }(Aq),
        uq = null === Aq.tier || uO(Aq.tier),
        Bq = uq ? WB : WB.filter((qq => {
          let {
            item: Eq
          } = qq;
          return Eq !== xO
        })),
        [Wq, Nq] = (0, Yq.useState)(null),
        aq = null !== Wq && void 0 !== Wq ? Wq : !Eq.baf2DropFoundSalvage && uq,
        Vq = Eq.baf2DropRuinDistance,
        dq = Eq.baf2DropComet,
        jq = Eq.baf2DropOldWorks,
        Hq = Eq.baf2DropGrove,
        oq = function(qq) {
          return 2 + Number(void 0 !== qq.baf2DropComet) + Number(!!qq.baf2DropOwedComet || void 0 !== qq.baf2DropOwedWaitMinutes) + Number(void 0 !== qq.baf2DropDigDistance) + Number(void 0 !== qq.baf2DropOldWorks) + Number(void 0 !== qq.baf2DropGrove)
        }(Eq),
        Pq = qq => {
          mq.send(function(qq) {
            return `baf2drop ${qq}`
          }(qq)), Oq()
        };
      let Qq = xq("buildAFactory2Game:dropRuinNone");
      if (null !== Vq) {
        let qq = Eq.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        Eq.baf2DropRuinOldWorks && (qq = "dropRuinOldWorks");
        const gq = void 0 === Eq.baf2DropRuinCluster ? xq("buildAFactory2Game:dropRuinOpen") : xq("buildAFactory2Game:dropRuinCluster", {
          count: String(Eq.baf2DropRuinCluster)
        });
        Qq = `${xq(`buildAFactory2Game:${qq}`,{distance:String(Vq)})} ${gq}`
      }
      let yq = xq("buildAFactory2Game:dropBelowDescription");
      void 0 !== Eq.baf2DropBelowLook && (yq = xq("buildAFactory2Game:dropBelowLook", {
        look: xq(Eq.baf2DropBelowLook)
      }));
      const tq = "buildAFactory2Game:wildsRegion_survivorGrove" === Eq.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        rq = PO(xq, 60 * function(qq) {
          const [Eq, gq] = (0, Yq.useState)((() => Date.now())), [lq, Oq] = (0, Yq.useState)(Eq);
          return (0, Yq.useEffect)((() => {
            const qq = Date.now();
            gq(qq), Oq(qq)
          }), [qq]), (0, Yq.useEffect)((() => {
            const qq = window.setInterval((() => {
              Oq(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(qq)
            }
          }), []), Math.max(1, qq.baf2DropRenewMinutes - Math.floor((lq - Eq) / 6e4))
        }(Eq)),
        vq = function(qq, Eq, gq) {
          return "ruin" === qq && !gq || "owed" === qq && !Eq.baf2DropOwedComet ? null : qq
        }(cq, Eq, null !== Vq),
        hq = function(qq) {
          for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
          return yl()("Baf2DropTile", ...gq, {
            Wanted: vq === qq
          })
        };
      return (0, rO.jsx)(Pm.c, {
        close: lq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, rO.jsxs)("section", {
          className: yl()("Baf2Panel Baf2DropMap", {
            Many: oq >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsxs)("div", {
              children: [(0, rO.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: xq("buildAFactory2Game:dropMapTitle")
              }), (0, rO.jsx)("p", {
                children: xq("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, rO.jsx)(Qm.m, {
              onClick: lq
            })]
          }), (0, rO.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== dq && (0, rO.jsxs)(Qm.A, {
              className: hq("comet", "Baf2DropComet"),
              onClick: () => {
                Pq("comet")
              },
              children: [(0, rO.jsx)("strong", {
                children: xq("buildAFactory2Game:dropComet")
              }), (0, rO.jsx)("span", {
                children: xq(`buildAFactory2Game:${NB(Eq)}`, {
                  distance: String(dq)
                })
              })]
            }), Eq.baf2DropOwedComet && (0, rO.jsxs)(Qm.A, {
              className: hq("owed", "Baf2DropComet"),
              onClick: () => {
                Pq("owed")
              },
              children: [(0, rO.jsx)("strong", {
                children: xq("buildAFactory2Game:dropOwedComet")
              }), (0, rO.jsx)("span", {
                children: Eq.baf2DropOwedIsotope ? xq("buildAFactory2Game:dropOwedIsotopeDescription") : xq("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== Eq.baf2DropOwedWaitMinutes && (0, rO.jsxs)(Qm.A, {
              className: hq("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, rO.jsx)("strong", {
                children: xq("buildAFactory2Game:dropOwedComet")
              }), (0, rO.jsx)("span", {
                children: xq("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(Eq.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, rO.jsxs)(Qm.g, {
              className: hq("below"),
              onClick: () => {
                Pq("below")
              },
              children: [(0, rO.jsx)("strong", {
                children: xq("buildAFactory2Game:dropBelow")
              }), (0, rO.jsx)("span", {
                children: yq
              })]
            }), void 0 !== Eq.baf2DropDigDistance && (0, rO.jsxs)(Qm.v, {
              className: hq("dig"),
              onClick: () => {
                Pq("dig")
              },
              children: [(0, rO.jsx)("strong", {
                children: xq("buildAFactory2Game:dropDig")
              }), (0, rO.jsx)("span", {
                children: xq("buildAFactory2Game:dropDigDescription", {
                  distance: String(Eq.baf2DropDigDistance),
                  y: oO(Eq.baf2DropDigY)
                })
              })]
            }), void 0 !== Hq && (0, rO.jsxs)(Qm.v, {
              className: hq("grove", "Baf2DropGrove"),
              onClick: () => {
                Pq("grove")
              },
              children: [(0, rO.jsx)("strong", {
                children: xq("buildAFactory2Game:dropGrove")
              }), (0, rO.jsx)("span", {
                children: xq(`buildAFactory2Game:${tq}`, {
                  distance: String(Hq)
                })
              })]
            }), (0, rO.jsxs)(Qm.p, {
              className: hq("ruin"),
              disabled: null === Vq,
              onClick: () => {
                Pq("ruin")
              },
              children: [(0, rO.jsx)("strong", {
                children: xq("buildAFactory2Game:dropRuin")
              }), (0, rO.jsx)("span", {
                children: Qq
              })]
            }), void 0 !== jq && (0, rO.jsxs)(Qm.K, {
              className: hq("works"),
              onClick: () => {
                Pq("works")
              },
              children: [(0, rO.jsx)("strong", {
                children: xq("buildAFactory2Game:dropOldWorks")
              }), (0, rO.jsx)("span", {
                children: xq("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(jq)
                })
              })]
            })]
          }), (0, rO.jsx)("p", {
            className: "Baf2DropRenew",
            children: xq("buildAFactory2Game:dropRenew", {
              time: rq
            })
          }), (0, rO.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: aq,
            onToggle: qq => {
              qq.currentTarget.open !== aq && Nq(qq.currentTarget.open)
            },
            children: [(0, rO.jsx)("summary", {
              children: xq("buildAFactory2Game:dropSalvageWhat")
            }), (0, rO.jsx)("p", {
              children: xq("buildAFactory2Game:dropSalvageIntro")
            }), (0, rO.jsx)("ul", {
              children: Bq.map((qq => {
                let {
                  item: Eq,
                  nameKey: gq,
                  useKey: Yq,
                  params: lq
                } = qq;
                return (0, rO.jsxs)("li", {
                  children: [(0, rO.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, rO.jsx)(bl.e, {
                      itemName: Eq,
                      amount: 0
                    })
                  }), (0, rO.jsxs)("span", {
                    children: [(0, rO.jsx)("strong", {
                      children: xq(gq)
                    }), ": ", xq(Yq, lq)]
                  })]
                }, Eq)
              }))
            })]
          })]
        })
      })
    }
    const VB = "buildAFactory2Game:";

    function dB(qq, Eq) {
      return qq.sendIslandEdit(`baf2coopleave ${Eq.baf2IslandId}`)
    }

    function jB(qq) {
      let {
        card: Eq,
        canRename: gq,
        done: lq,
        t: Oq
      } = qq;
      const mq = km(),
        [xq, Aq] = (0, Yq.useState)(Eq.baf2IslandName),
        cq = Qc(xq),
        uq = "" === cq || yc(cq),
        Bq = () => {
          !uq && gq && (cq !== Eq.baf2IslandName ? lq(mq.sendIslandEdit(`baf2islandrename ${Eq.baf2IslandId} ${cq}`)) : lq(null))
        },
        Wq = () => {
          lq(null)
        };
      return (0, rO.jsxs)("div", {
        className: "Baf2IslandForm",
        ...sc(Wq),
        children: [(0, rO.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Oq(`${VB}islandsRenameLabel`), (0, rO.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: xq,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Xc,
            onChange: qq => {
              Aq(qq.target.value)
            },
            ...Fc(Bq, Wq)
          })]
        }), "" === cq && (0, rO.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Oq(`${VB}islandsRenameEmpty`)
        }), yc(cq) && (0, rO.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Oq(`${VB}islandsNameReserved`)
        }), (0, rO.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, rO.jsx)(Qm.v, {
            disabled: uq || !gq,
            onClick: Bq,
            children: Oq(`${VB}islandsRenameSave`)
          }), (0, rO.jsx)(Qm.g, {
            onClick: Wq,
            children: Oq(`${VB}islandsCancel`)
          })]
        })]
      })
    }

    function HB(qq) {
      let {
        card: Eq,
        canDelete: gq,
        done: lq,
        t: Oq
      } = qq;
      const mq = km(),
        [xq, Aq] = (0, Yq.useState)(""),
        cq = function(qq, Eq) {
          return Qc(qq).toLowerCase() === Qc(Eq).toLowerCase()
        }(xq, Eq.baf2IslandName),
        uq = () => {
          cq && gq && lq(mq.sendIslandEdit(`baf2islanddelete ${Eq.baf2IslandId}`))
        },
        Bq = () => {
          lq(null)
        },
        Wq = Tc("name"),
        [Nq, aq = ""] = Oq(`${VB}islandsDeleteConfirm`, {
          name: Wq
        }).split(Wq);
      return (0, rO.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...sc(Bq),
        children: [(0, rO.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, rO.jsxs)("span", {
            children: [Nq, (0, rO.jsx)("strong", {
              children: Eq.baf2IslandName
            }), aq]
          }), (0, rO.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: xq,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Xc,
            onChange: qq => {
              Aq(qq.target.value)
            },
            ...Fc(uq, Bq)
          })]
        }), Jc(Eq) && (0, rO.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Oq(`${VB}islandsDeleteLeftBack`)
        }), (0, rO.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, rO.jsx)(Qm.K, {
            disabled: !cq || !gq,
            onClick: uq,
            children: Oq(`${VB}islandsDeleteForGood`)
          }), (0, rO.jsx)(Qm.g, {
            onClick: Bq,
            children: Oq(`${VB}islandsCancel`)
          })]
        })]
      })
    }

    function oB(qq) {
      let {
        members: Eq,
        t: gq
      } = qq;
      const Yq = Eq.length;
      return (0, rO.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, rO.jsxs)("span", {
          children: [1 === Yq ? gq(`${VB}islandsPlayersOne`) : gq(`${VB}islandsPlayers`, {
            count: String(Yq)
          }), " "]
        }), Eq.map(((qq, Eq) => (0, rO.jsxs)("span", {
          className: yl()("Baf2IslandMember", {
            Here: qq.baf2MemberHere
          }),
          title: qq.baf2MemberHere ? gq(`${VB}islandsPlayerHere`) : void 0,
          children: [qq.baf2MemberName, Eq < Yq - 1 ? ", " : ""]
        }, qq.baf2MemberKey)))]
      })
    }

    function PB(qq) {
      let {
        card: Eq,
        answered: gq,
        nowMs: lq,
        t: Oq
      } = qq;
      const mq = km(),
        [xq, Aq] = (0, Yq.useState)(new Map),
        cq = Jc(Eq);
      if (!cq) return null;
      return (0, rO.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, rO.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Oq(`${VB}islandsLeftTitle`)
        }), (0, rO.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: cq.left.map((qq => {
            const Yq = qq.baf2LeftKey,
              uq = Rc(xq.get(Yq), gq, lq),
              Bq = function(qq) {
                return 1 === qq ? [`${jc}islandsLeftItemsOne`] : [`${jc}islandsLeftItems`, {
                  count: String(qq)
                }]
              }(qq.baf2LeftItems);
            return (0, rO.jsx)("li", {
              className: yl()("Baf2IslandPerson", {
                Pending: uq
              }),
              children: (0, rO.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, rO.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: qq.baf2LeftName
                }), (0, rO.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Oq(Bq[0], Bq[1])
                }), cq.claim && (0, rO.jsx)(Qm.v, {
                  className: "Baf2IslandPersonButton",
                  disabled: uq,
                  onClick: () => {
                    (qq => {
                      const gq = mq.sendIslandEdit(`baf2coopclaim ${Eq.baf2IslandId} ${qq}`);
                      Aq((Eq => new Map(Eq).set(qq, {
                        atMs: Date.now(),
                        answer: gq
                      })))
                    })(Yq)
                  },
                  children: Oq(`${VB}islandsClaim`)
                })]
              })
            }, Yq)
          }))
        }), cq.goThere && (0, rO.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Oq(`${VB}islandsClaimGoThere`)
        })]
      })
    }

    function QB(qq) {
      let {
        card: Eq,
        view: gq,
        blocked: lq,
        maxIslands: Oq,
        answered: mq,
        nowMs: xq,
        done: Aq,
        openSocial: cq,
        t: uq
      } = qq;
      const Bq = km(),
        [Wq, Nq] = (0, Yq.useState)(new Map),
        [aq, Vq] = (0, Yq.useState)(new Map),
        [dq, jq] = (0, Yq.useState)(null),
        Hq = (0, Yq.useRef)(null);
      Ic(Hq);
      const oq = Eq.baf2IslandId,
        Pq = Eq.baf2IslandCoop,
        Qq = null !== Pq && void 0 !== Pq && Pq.baf2CoopMembers.some((qq => qq.baf2MemberKey === dq)) ? dq : null,
        yq = function(qq, Eq) {
          const gq = qq.baf2IslandCoop;
          return gq && kc(gq) || null !== Eq ? void 0 : qq.baf2IslandInvitable
        }(Eq, lq),
        tq = function(qq, Eq) {
          const gq = qq.baf2IslandCoop;
          return gq && kc(gq) ? {
            key: `${jc}islandsCoopFull`,
            params: {
              max: String(gq.baf2CoopMax)
            }
          } : void 0 !== qq.baf2IslandInvitable && null === Eq || gq && !gq.baf2CoopManageHere ? null : "degraded" === Eq || "stuck" === Eq ? {
            key: `${jc}islandsInviteNotLoaded`
          } : null === Eq || function(qq) {
            return "notHome" === qq || "wilds" === qq || "visiting" === qq
          }(Eq) || hc(Eq) ? {
            key: `${jc}islandsInviteGoThere`
          } : {
            key: `${jc}islandsInviteBusy`
          }
        }(Eq, lq),
        rq = () => {
          var qq;
          jq(null), null === (qq = Hq.current) || void 0 === qq || qq.focus()
        };
      return (0, rO.jsxs)("div", {
        ref: Hq,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...sc(null === Qq ? Aq : rq),
        children: [Pq && (0, rO.jsxs)(rO.Fragment, {
          children: [(0, rO.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: uq(`${VB}islandsPlayersTitle`, {
              count: String(Pq.baf2CoopMembers.length),
              max: String(Pq.baf2CoopMax)
            })
          }), (0, rO.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: Pq.baf2CoopMembers.map(((qq, Eq) => {
              const Yq = qq.baf2MemberKey,
                lq = Rc(Wq.get(Yq), mq, xq);
              return (0, rO.jsxs)("li", {
                className: yl()("Baf2IslandPerson", {
                  Pending: lq
                }),
                children: [(0, rO.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, rO.jsx)("span", {
                    className: yl()("Baf2IslandPersonName", {
                      Here: qq.baf2MemberHere
                    }),
                    children: qq.baf2MemberName
                  }), qq.baf2MemberHere && (0, rO.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: uq(`${VB}islandsPlayerHere`)
                  }), 0 === Eq && (0, rO.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: uq(`${VB}islandsPlayerOwner`)
                  }), gq.remove && Eq > 0 && !lq && Qq !== Yq && (0, rO.jsx)(Qm.L, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var qq;
                      jq(Yq), null === (qq = Hq.current) || void 0 === qq || qq.focus()
                    },
                    children: uq(`${VB}islandsRemove`)
                  })]
                }), Qq === Yq && (0, rO.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, rO.jsx)("p", {
                    children: zc(uq, `${VB}islandsRemoveConfirm`, {
                      player: qq.baf2MemberName
                    })
                  }), (0, rO.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, rO.jsx)(Qm.K, {
                      onClick: () => {
                        (qq => {
                          const Eq = Bq.sendIslandEdit(`baf2coopremove ${oq} ${qq.baf2MemberKey}`);
                          Nq((gq => new Map(gq).set(qq.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: Eq
                          }))), rq()
                        })(qq)
                      },
                      children: uq(`${VB}islandsRemoveYes`)
                    }), (0, rO.jsx)(Qm.g, {
                      onClick: rq,
                      children: uq(`${VB}islandsCancel`)
                    })]
                  })]
                })]
              }, Yq)
            }))
          })]
        }), (void 0 !== yq || null !== tq) && (0, rO.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: uq(`${VB}islandsInviteTitle`)
        }), !Pq && (void 0 !== yq || null !== tq) && (0, rO.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: uq(`${VB}islandsInviteShareNote`)
        }), 0 === (null === yq || void 0 === yq ? void 0 : yq.length) && (0, rO.jsx)(yB, {
          openSocial: cq,
          t: uq
        }), void 0 !== yq && yq.length > 0 && (0, rO.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: yq.map((qq => {
            const Eq = !0 === qq.baf2InvitableSent || Rc(aq.get(qq.baf2InvitableId), mq, xq);
            return (0, rO.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, rO.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, rO.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: qq.baf2InvitableName
                }), qq.baf2InvitableFull && !Eq && (0, rO.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: uq(`${VB}islandsInviteTheirFull`, {
                    max: String(Oq)
                  })
                }), (Eq || !qq.baf2InvitableFull) && (0, rO.jsx)(Qm.v, {
                  className: "Baf2IslandPersonButton",
                  disabled: Eq,
                  onClick: () => {
                    (qq => {
                      const Eq = Bq.sendIslandEdit(`baf2coopinvite ${oq} ${qq}`);
                      Vq((gq => new Map(gq).set(qq, {
                        atMs: Date.now(),
                        answer: Eq
                      })))
                    })(qq.baf2InvitableId)
                  },
                  children: uq(Eq ? `${VB}islandsInvited` : `${VB}islandsInvite`)
                })]
              })
            }, qq.baf2InvitableId)
          }))
        }), tq && (0, rO.jsx)(qu, {
          note: tq,
          t: uq
        }), (0, rO.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, rO.jsx)(Qm.g, {
            onClick: Aq,
            children: uq(`${VB}islandsDone`)
          })
        })]
      })
    }

    function yB(qq) {
      let {
        openSocial: Eq,
        t: gq
      } = qq;
      return (0, rO.jsxs)(rO.Fragment, {
        children: [(0, rO.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: gq(Eq ? `${VB}islandsInviteNobody` : `${VB}islandsInviteNobodyGuest`)
        }), Eq && (0, rO.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, rO.jsx)(Qm.g, {
            onClick: Eq,
            children: gq("socialBar:social")
          })
        })]
      })
    }

    function tB(qq) {
      let {
        className: Eq,
        text: gq,
        ConfirmButton: lq,
        confirmLabel: Oq,
        canConfirm: mq,
        send: xq,
        done: Aq,
        t: cq
      } = qq;
      const uq = (0, Yq.useRef)(null);
      Ic(uq);
      const Bq = () => {
        Aq(null)
      };
      return (0, rO.jsxs)("div", {
        ref: uq,
        tabIndex: -1,
        className: yl()("Baf2IslandForm", Eq),
        ...sc(Bq),
        children: [(0, rO.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: gq
        }), (0, rO.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, rO.jsx)(lq, {
            disabled: !mq,
            onClick: () => {
              mq && Aq(xq())
            },
            children: Oq
          }), (0, rO.jsx)(Qm.g, {
            onClick: Bq,
            children: cq(`${VB}islandsCancel`)
          })]
        })]
      })
    }

    function rB(qq) {
      return "hidden" !== qq
    }

    function vB(qq) {
      var Eq, gq;
      let {
        card: lq,
        keepOwn: Oq,
        blocked: mq,
        maxIslands: xq,
        serverNowMs: Aq,
        nowMs: cq,
        actions: uq,
        full: Bq,
        waits: Wq,
        answered: Nq,
        mode: aq,
        setMode: Vq,
        pending: dq,
        onSent: jq,
        switchTo: Hq,
        leave: oq,
        coopOn: Pq,
        openSocial: Qq,
        t: yq
      } = qq;
      const tq = km(),
        rq = lq.baf2IslandActive,
        vq = rq ? null : function(qq, Eq) {
          if (qq <= 0) return null;
          const gq = Eq - qq;
          if (gq < VO) return [`${jc}islandsPlayedJustNow`];
          if (gq < Hc) return [`${jc}islandsPlayedMinutes`, {
            minutes: String(Math.floor(gq / VO))
          }];
          if (gq < oc) return [`${jc}islandsPlayedHours`, {
            hours: String(Math.floor(gq / Hc))
          }];
          const Yq = Math.floor(gq / oc);
          return 1 === Yq ? [`${jc}islandsPlayedDay`] : [`${jc}islandsPlayedDays`, {
            days: String(Yq)
          }]
        }(lq.baf2IslandLastPlayedMs, Aq),
        hq = void 0 === (nq = lq.baf2IslandItems) ? null : 0 === nq ? [`${jc}islandsItemsNone`] : 1 === nq ? [`${jc}islandsItemsOne`] : [`${jc}islandsItems`, {
          count: String(nq)
        }];
      var nq;
      const bq = function(qq) {
          return qq ? 1 === qq ? [`${jc}islandsWaitingOne`] : [`${jc}islandsWaiting`, {
            count: String(qq)
          }] : null
        }(lq.baf2IslandWaiting),
        iq = lq.baf2IslandUnreadable,
        Zq = lq.baf2IslandCoop,
        fq = Lc(lq, uq, Oq, Bq, Pq, mq),
        Mq = (0, Yq.useRef)(null);
      wc(null !== aq, Mq);
      const Tq = () => {
          var qq;
          Vq(null), null === (qq = Mq.current) || void 0 === qq || qq.focus()
        },
        zq = (qq, Eq) => {
          Tq(), null !== qq && jq(qq, Eq)
        },
        Sq = (qq, Eq) => yq(`${VB}${qq}`, {
          time: PO(yq, Eq)
        });
      return (0, rO.jsxs)("li", {
        ref: Mq,
        tabIndex: -1,
        className: yl()("Baf2IslandCard", {
          Active: rq,
          Pending: dq,
          Shared: void 0 !== Zq
        }),
        children: [(0, rO.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, rO.jsx)("strong", {
            className: "Baf2IslandName",
            children: lq.baf2IslandName
          }), rq && (0, rO.jsx)("span", {
            className: "Baf2IslandBadge",
            children: yq(`${VB}islandsOnThis`)
          }), Zq && (0, rO.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: yq(`${VB}islandsShared`)
          })]
        }), "member" === (null === Zq || void 0 === Zq ? void 0 : Zq.baf2CoopRole) && (0, rO.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: zc(yq, `${VB}islandsSharedBy`, {
            owner: Zq.baf2CoopOwner
          })
        }), void 0 !== iq && (0, rO.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: yq("newer" === iq ? `${VB}islandsUnreadable` : `${VB}islandsDamaged`)
        }), "corrupt" === iq && Bq && (0, rO.jsx)("p", {
          className: "Baf2IslandStats",
          children: yq(`${VB}islandsDamagedFull`)
        }), void 0 === iq && (0, rO.jsxs)(rO.Fragment, {
          children: [(0, rO.jsx)(Dc, {
            tier: lq.baf2IslandTier,
            t: yq
          }), (0, rO.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, rO.jsx)("span", {
              children: 1 === lq.baf2IslandQuestsDone ? yq(`${VB}islandsQuestsDoneOne`) : yq(`${VB}islandsQuestsDone`, {
                count: String(lq.baf2IslandQuestsDone)
              })
            }), (0, rO.jsx)("span", {
              children: 1 === lq.baf2IslandMachines ? yq(`${VB}islandsMachinesOne`) : yq(`${VB}islandsMachines`, {
                count: String(lq.baf2IslandMachines)
              })
            }), hq && (0, rO.jsx)("span", {
              children: yq(hq[0], hq[1])
            }), bq && (0, rO.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: yq(bq[0], bq[1])
            }), vq && (0, rO.jsx)("span", {
              children: yq(vq[0], vq[1])
            })]
          })]
        }), Zq && void 0 === Zq.baf2CoopState && "people" !== aq && (0, rO.jsx)(oB, {
          members: Zq.baf2CoopMembers,
          t: yq
        }), null === aq && (0, rO.jsx)(PB, {
          card: lq,
          answered: Nq,
          nowMs: cq,
          t: yq
        }), fq.note && (0, rO.jsx)(qu, {
          note: fq.note,
          className: yl()({
            Unreachable: void 0 !== (null === Zq || void 0 === Zq ? void 0 : Zq.baf2CoopState)
          }),
          t: yq
        }), "rename" === aq && (0, rO.jsx)(jB, {
          card: lq,
          canRename: "enabled" === fq.rename,
          done: zq,
          t: yq
        }), "delete" === aq && (0, rO.jsx)(HB, {
          card: lq,
          canDelete: "enabled" === fq.delete,
          done: qq => {
            zq(qq, Zq ? "delete" : void 0)
          },
          t: yq
        }), "people" === aq && (0, rO.jsx)(QB, {
          card: lq,
          view: fq,
          blocked: mq,
          maxIslands: xq,
          answered: Nq,
          nowMs: cq,
          done: Tq,
          openSocial: Qq,
          t: yq
        }), "leave" === aq && (0, rO.jsx)(tB, {
          className: "Leave",
          text: zc(yq, `${VB}islandsLeaveConfirm`, {
            island: lq.baf2IslandName,
            owner: null !== (Eq = null === (gq = lq.baf2IslandCoop) || void 0 === gq ? void 0 : gq.baf2CoopOwner) && void 0 !== Eq ? Eq : ""
          }),
          ConfirmButton: Qm.K,
          confirmLabel: yq(`${VB}islandsLeaveYes`),
          canConfirm: "enabled" === fq.leave,
          send: () => dB(tq, lq),
          done: qq => {
            zq(qq, "leave"), null !== qq && rq && oq()
          },
          t: yq
        }), "unshare" === aq && (0, rO.jsx)(tB, {
          className: "Unshare",
          text: zc(yq, `${VB}islandsStopSharingConfirm`, {
            island: lq.baf2IslandName
          }),
          ConfirmButton: Qm.v,
          confirmLabel: yq(`${VB}islandsStopSharing`),
          canConfirm: "enabled" === fq.unshare,
          send: () => tq.sendIslandEdit(`baf2coopunshare ${lq.baf2IslandId}`),
          done: qq => {
            zq(qq), null !== qq && oq()
          },
          t: yq
        }), null === aq && !dq && (0, rO.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": lq.baf2IslandName,
          children: [rB(fq.switch) && (0, rO.jsx)(Qm.v, {
            disabled: "enabled" !== fq.switch,
            onClick: Hq,
            children: "tryAgain" === fq.switchLabel ? yq(`${VB}islandsTryAgain`) : Wq.switch > 0 ? Sq("islandsSwitchIn", Wq.switch) : yq(`${VB}islandsSwitch`)
          }), rB(fq.rename) && (0, rO.jsx)(Qm.g, {
            disabled: "enabled" !== fq.rename,
            onClick: () => {
              Vq("rename")
            },
            children: yq(`${VB}islandsRename`)
          }), rB(fq.people) && (0, rO.jsx)(Qm.g, {
            disabled: "enabled" !== fq.people,
            onClick: () => {
              Vq("people")
            },
            children: yq("players" === fq.peopleLabel ? `${VB}islandsPlayersButton` : `${VB}islandsInviteButton`)
          }), rB(fq.unshare) && (0, rO.jsx)(Qm.g, {
            disabled: "enabled" !== fq.unshare,
            onClick: () => {
              Vq("unshare")
            },
            children: yq(`${VB}islandsStopSharing`)
          }), rB(fq.dismiss) && (0, rO.jsx)(Qm.g, {
            disabled: "enabled" !== fq.dismiss,
            onClick: () => {
              jq(dB(tq, lq), "dismiss"), rq && oq()
            },
            children: yq(`${VB}islandsDismiss`)
          }), rB(fq.leave) && (0, rO.jsx)(Qm.L, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== fq.leave,
            onClick: () => {
              Vq("leave")
            },
            children: rq && Wq.switch > 0 ? Sq("islandsLeaveIn", Wq.switch) : yq(`${VB}islandsLeave`)
          }), rB(fq.delete) && (0, rO.jsx)(Qm.L, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== fq.delete,
            onClick: () => {
              Vq("delete")
            },
            children: Wq.change > 0 && fq.deleteWaits ? Sq("islandsDeleteIn", Wq.change) : yq(`${VB}islandsDelete`)
          })]
        })]
      })
    }
    const hB = "buildAFactory2Game:";

    function nB(qq) {
      let {
        invite: Eq,
        actions: gq,
        full: lq,
        maxIslands: Oq,
        waitSeconds: mq,
        focus: xq,
        focused: Aq,
        join: cq,
        decline: uq,
        t: Bq
      } = qq;
      const [Wq, Nq] = (0, Yq.useState)(!1), aq = (0, Yq.useRef)(null);
      wc(Wq, aq), (0, Yq.useEffect)((() => {
        var qq;
        xq && (Nq(!0), null === (qq = aq.current) || void 0 === qq || qq.focus(), Aq())
      }), [xq, Aq]);
      const Vq = function(qq, Eq, gq, Yq, lq) {
          return gq ? {
            join: !1,
            note: {
              key: `${jc}islandsJoinTooMany`,
              params: {
                max: String(Yq)
              }
            }
          } : qq.baf2InvitePlayers >= lq ? {
            join: !1,
            note: {
              key: `${jc}islandsJoinFull`
            }
          } : {
            join: Eq.switch,
            note: null
          }
        }(Eq, gq, lq, Oq, 10),
        dq = Eq.baf2InviteIsland,
        jq = Eq.baf2InvitePlayers,
        Hq = () => {
          var qq;
          Nq(!1), null === (qq = aq.current) || void 0 === qq || qq.focus()
        },
        oq = mq > 0 && null === Vq.note ? Bq(`${hB}islandsJoinIn`, {
          time: PO(Bq, mq)
        }) : Bq(`${hB}islandsJoin`);
      return (0, rO.jsxs)("li", {
        ref: aq,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Wq ? sc(Hq) : {},
        children: [(0, rO.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, rO.jsx)("strong", {
            className: "Baf2IslandName",
            children: dq
          })
        }), (0, rO.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: zc(Bq, `${hB}islandsInvitedBy`, {
            owner: Eq.baf2InviteOwner
          })
        }), (0, rO.jsx)(Dc, {
          tier: Eq.baf2InviteTier,
          t: Bq
        }), (0, rO.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, rO.jsx)("span", {
            children: 1 === jq ? Bq(`${hB}islandsPlayersCountOne`) : Bq(`${hB}islandsPlayersCount`, {
              count: String(jq)
            })
          })
        }), Vq.note && (0, rO.jsx)(qu, {
          note: Vq.note,
          t: Bq
        }), Wq && (0, rO.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: zc(Bq, `${hB}islandsJoinConfirm`, {
            island: dq
          })
        }), !Wq && (0, rO.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": dq,
          children: [(0, rO.jsx)(Qm.v, {
            disabled: !Vq.join,
            onClick: () => {
              var qq;
              Nq(!0), null === (qq = aq.current) || void 0 === qq || qq.focus()
            },
            children: oq
          }), (0, rO.jsx)(Qm.g, {
            onClick: uq,
            children: Bq(`${hB}islandsDecline`)
          })]
        }), Wq && (0, rO.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, rO.jsx)(Qm.v, {
            disabled: !Vq.join,
            onClick: cq,
            children: Bq(`${hB}islandsJoinYes`)
          }), (0, rO.jsx)(Qm.g, {
            onClick: Hq,
            children: Bq(`${hB}islandsCancel`)
          })]
        })]
      })
    }

    function bB(qq) {
      let {
        invites: Eq,
        actions: gq,
        full: Yq,
        maxIslands: lq,
        waitSeconds: Oq,
        focus: mq,
        focused: xq,
        leave: Aq,
        declined: cq,
        t: uq
      } = qq;
      const Bq = km();
      return (0, rO.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, rO.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: uq(`${hB}islandsInvitesTitle`)
        }), (0, rO.jsx)("ul", {
          className: "Baf2IslandCards",
          children: Eq.map((qq => {
            const Eq = qq.baf2InviteId;
            return (0, rO.jsx)(nB, {
              invite: qq,
              actions: gq,
              full: Yq,
              maxIslands: lq,
              waitSeconds: Oq,
              focus: mq === Eq,
              focused: xq,
              join: () => {
                Bq.send(`baf2coopaccept ${Eq}`), Aq()
              },
              decline: () => {
                Bq.send(`baf2coopdecline ${Eq}`), cq(Eq)
              },
              t: uq
            }, Eq)
          }))
        })]
      })
    }
    const iB = "buildAFactory2Game:";

    function ZB(qq) {
      let {
        cards: Eq,
        activeName: gq,
        canStart: lq,
        waitSeconds: Oq,
        leave: mq,
        t: xq
      } = qq;
      const Aq = km(),
        [cq, uq] = (0, Yq.useState)(!1),
        [Bq, Wq] = (0, Yq.useState)(""),
        Nq = (0, Yq.useRef)(null);
      wc(cq, Nq), (0, Yq.useEffect)((() => {
        var qq;
        cq && (null === (qq = Nq.current) || void 0 === qq || qq.focus())
      }), [cq]);
      const aq = tc(Eq),
        Vq = Qc(Bq),
        dq = yc(Vq),
        jq = () => {
          lq && !dq && (Aq.send("" === Vq || Vq === aq ? Kq : `${Kq} ${Vq}`), mq())
        },
        Hq = () => {
          var qq;
          uq(!1), null === (qq = Nq.current) || void 0 === qq || qq.focus()
        };
      return (0, rO.jsxs)("li", {
        ref: Nq,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...cq ? sc(Hq) : {},
        children: [(0, rO.jsx)("strong", {
          className: "Baf2IslandName",
          children: xq(`${iB}islandsNewTitle`)
        }), !cq && (0, rO.jsx)("p", {
          className: "Baf2IslandStats",
          children: xq(`${iB}islandsNewNote`)
        }), cq && (0, rO.jsxs)(rO.Fragment, {
          children: [(0, rO.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: zc(xq, `${iB}islandsNewConfirm`, {
              name: gq
            })
          }), (0, rO.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [xq(`${iB}islandsNewNameLabel`), (0, rO.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Bq,
              placeholder: aq,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Xc,
              onChange: qq => {
                Wq(qq.target.value)
              },
              ...Fc(jq, Hq)
            })]
          }), dq && (0, rO.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: xq(`${iB}islandsNameReserved`)
          })]
        }), (0, rO.jsxs)("div", {
          className: yl()("Baf2IslandButtons", {
            Stacked: cq
          }),
          children: [(0, rO.jsx)(Qm.v, {
            disabled: !lq || cq && dq,
            onClick: () => {
              if (!cq) return Wq(aq), void uq(!0);
              jq()
            },
            children: Oq > 0 ? xq(`${iB}islandsNewIn`, {
              time: PO(xq, Oq)
            }) : xq(cq ? `${iB}islandsNewConfirmButton` : `${iB}islandsNew`)
          }), cq && (0, rO.jsx)(Qm.g, {
            onClick: Hq,
            children: xq(`${iB}islandsCancel`)
          })]
        })]
      })
    }

    function fB(qq) {
      var Eq, gq;
      let {
        message: lq,
        arrivedAtMs: Oq,
        close: mq,
        leave: xq,
        openSocial: Aq
      } = qq;
      const cq = km(),
        {
          t: uq
        } = (0, hl.v)(),
        Bq = ec(1e3),
        [Wq, Nq] = (0, Yq.useState)(null),
        [aq, Vq] = (0, Yq.useState)(new Map),
        [dq, jq] = (0, Yq.useState)(new Set),
        Hq = lq.baf2IslandCards,
        oq = function(qq, Eq, gq, Yq) {
          return (null !== qq && void 0 !== qq ? qq : []).filter((qq => Eq + qq.baf2InviteLeftMs > gq && !Yq.has(qq.baf2InviteId)))
        }(lq.baf2IslandsInvites, Oq, Bq, dq),
        Pq = oq.map((qq => qq.baf2InviteId)).join(" "),
        Qq = (0, Yq.useRef)(null),
        yq = Kc(Qq);
      Cc(), (0, Yq.useEffect)((() => {
        var qq, Eq;
        null !== (qq = Qq.current) && void 0 !== qq && qq.contains(document.activeElement) || (null === (Eq = Qq.current) || void 0 === Eq || Eq.focus())
      }), [lq, Pq]), (0, Yq.useEffect)((() => {
        Vq((qq => function(qq, Eq, gq, Yq) {
          const lq = new Map;
          for (const Oq of Eq) {
            const Eq = qq.get(Oq.baf2IslandId);
            Eq && (void 0 !== Eq.untilGone || Yq < Eq.answer) && Zc(Eq, Oq, gq) && lq.set(Oq.baf2IslandId, Eq)
          }
          return lq.size === qq.size ? qq : lq
        }(qq, lq.baf2IslandCards, Date.now(), lq.baf2IslandsAnswered)))
      }), [lq]);
      const tq = Pc(Oq, lq.baf2IslandsWaitMs, Bq),
        rq = lq.baf2IslandsBlocked,
        vq = nc(rq, tq),
        hq = function(qq, Eq) {
          const gq = nc(qq, 0);
          return {
            switch: gq.switch ? Eq : 0,
            change: gq.change ? Eq : 0
          }
        }(rq, tq),
        nq = Hq.length >= lq.baf2IslandsMax,
        bq = Hq.length > 0,
        iq = function(qq, Eq, gq) {
          return qq + Math.max(0, gq - Eq)
        }(lq.baf2IslandsNowMs, Oq, Bq),
        Zq = null !== (Eq = null === (gq = Hq.find((qq => qq.baf2IslandActive))) || void 0 === gq ? void 0 : gq.baf2IslandName) && void 0 !== Eq ? Eq : "",
        fq = function(qq) {
          const Eq = qq.filter(Gc).length;
          return Eq <= 1 && Eq < qq.length
        }(Hq),
        Mq = !0 === lq.baf2IslandsCoop,
        Tq = function(qq, Eq) {
          const gq = qq.find((qq => qq.baf2IslandActive)),
            Yq = null === gq || void 0 === gq ? void 0 : gq.baf2IslandCoop;
          return gq && "member" === (null === Yq || void 0 === Yq ? void 0 : Yq.baf2CoopRole) ? {
            key: `${jc}islandsKeepOwnMember`,
            names: {
              owner: Yq.baf2CoopOwner,
              island: gq.baf2IslandName
            }
          } : {
            key: Eq ? `${jc}islandsKeepOwn` : `${jc}islandsKeepOwnSolo`
          }
        }(Hq, Mq),
        [zq, Sq] = (0, Yq.useState)(null);
      (0, Yq.useEffect)((() => {
        void 0 !== lq.baf2IslandsFocusInvite && Sq(lq.baf2IslandsFocusInvite)
      }), [lq]);
      const pq = (0, Yq.useCallback)((() => {
          Sq(null)
        }), []),
        Gq = Wq ? Hq.find((qq => qq.baf2IslandId === Wq.id)) : void 0,
        Lq = Wq && Gq && "hidden" !== Lc(Gq, vq, fq, nq, Mq, rq)[Wq.mode] ? Wq : null;
      return (0, rO.jsx)(Pm.c, {
        close: mq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, rO.jsxs)("section", {
          ref: Qq,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: yq ? {
            marginTop: `${yq.marginTop}px`,
            maxHeight: `${yq.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsxs)("div", {
              children: [(0, rO.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: uq(`${iB}islandsTitle`)
              }), bq && (0, rO.jsx)("p", {
                children: uq(`${iB}islandsSubtitle`, {
                  count: String(Hq.length),
                  max: String(lq.baf2IslandsMax)
                })
              })]
            }), (0, rO.jsx)(Qm.m, {
              ariaLabel: uq(`${iB}islandsClose`),
              onClick: mq
            })]
          }), (0, rO.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== rq && (0, rO.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: zc(uq, rc(rq, vc(Hq)), {
                island: Zq
              })
            }), bq && oq.length > 0 && (0, rO.jsx)(bB, {
              invites: oq,
              actions: vq,
              full: nq,
              maxIslands: lq.baf2IslandsMax,
              waitSeconds: hq.switch,
              focus: zq,
              focused: pq,
              leave: xq,
              declined: qq => {
                jq((Eq => new Set(Eq).add(qq)))
              },
              t: uq
            }), bq && (0, rO.jsxs)(rO.Fragment, {
              children: [nq && (0, rO.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: uq(`${iB}islandsFull`, {
                  max: String(lq.baf2IslandsMax)
                })
              }), (0, rO.jsx)("p", {
                className: "Baf2IslandsNote",
                children: zc(uq, Tq.key, Tq.names)
              }), (0, rO.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Hq.map((qq => {
                  const Eq = qq.baf2IslandId;
                  return (0, rO.jsx)(vB, {
                    card: qq,
                    keepOwn: fq,
                    coopOn: Mq,
                    openSocial: Aq,
                    blocked: rq,
                    maxIslands: lq.baf2IslandsMax,
                    serverNowMs: iq,
                    nowMs: Bq,
                    actions: vq,
                    full: nq,
                    waits: hq,
                    answered: lq.baf2IslandsAnswered,
                    mode: (null === Lq || void 0 === Lq ? void 0 : Lq.id) === Eq ? Lq.mode : null,
                    setMode: qq => {
                      Nq(null === qq ? null : {
                        id: Eq,
                        mode: qq
                      })
                    },
                    pending: Zc(aq.get(Eq), qq, Bq),
                    onSent: (gq, Yq) => {
                      Vq((lq => {
                        const Oq = {
                          atMs: Date.now(),
                          from: qq.baf2IslandName,
                          answer: gq
                        };
                        return new Map(lq).set(Eq, Yq ? {
                          ...Oq,
                          untilGone: Yq
                        } : Oq)
                      }))
                    },
                    leave: xq,
                    switchTo: () => {
                      cq.send(`baf2islandswitch ${Eq}`), xq()
                    },
                    t: uq
                  }, Eq)
                })), !nq && (0, rO.jsx)(ZB, {
                  cards: Hq,
                  activeName: Zq,
                  canStart: vq.change,
                  waitSeconds: hq.change,
                  leave: xq,
                  t: uq
                })]
              })]
            })]
          })]
        })
      })
    }
    var MB = gq(4858);
    const TB = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        tO: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      zB = Object.keys(TB),
      SB = new Set([...Object.keys(KE), ...[...TE.Press.recipes, ...TE["Wire Mill"].recipes].map((qq => qq.output))]),
      pB = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      GB = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      LB = / Bar$|Alloy$/,
      JB = /Porkchop|Beef|Mutton|Venison|Steak/,
      kB = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const RB = (0, Yq.memo)((function(qq) {
      let {
        item: Eq,
        name: gq,
        amount: Yq,
        selected: lq,
        small: Oq,
        onPick: mq
      } = qq;
      return (0, rO.jsxs)("button", {
        type: "button",
        className: yl()("Baf2TermTile", {
          On: lq,
          Small: Oq
        }),
        "aria-label": `${gq}: ${Yq}`,
        "aria-pressed": lq,
        onClick: () => {
          mq(Eq)
        },
        children: [(0, rO.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, rO.jsx)(bl.e, {
            itemName: Eq,
            amount: 0
          })
        }), (0, rO.jsx)("span", {
          className: "Baf2TermCount",
          children: HO(Yq, 1e4)
        }), !Oq && (0, rO.jsx)("span", {
          className: "Baf2TermName",
          children: gq
        })]
      })
    }));

    function UB(qq) {
      let {
        store: Eq,
        close: gq,
        send: lq
      } = qq;
      const {
        t: Oq
      } = (0, hl.v)(), {
        isTouchScreen: mq
      } = (0, ol.j)(["isTouchScreen"]);
      ! function(qq) {
        const [Eq, gq] = (0, Yq.useState)(qq.version);
        (0, Yq.useEffect)((() => (gq(qq.version), qq.subscribe((() => {
          gq(qq.version)
        })))), [qq])
      }(Eq);
      const [xq, Aq] = (0, Yq.useState)("all"), [cq, uq] = (0, Yq.useState)(!1), [Bq, Wq] = (0, Yq.useState)(""), [Nq, aq] = (0, Yq.useState)(""), [Vq, dq] = (0, Yq.useState)(null), [jq, Hq] = (0, Yq.useState)(!1), [oq, Pq, Qq] = function() {
        const qq = (0, Yq.useRef)(null),
          [Eq, gq] = (0, Yq.useState)(!1),
          lq = () => {
            const Eq = qq.current;
            gq(null !== Eq && Eq.scrollLeft + Eq.clientWidth < Eq.scrollWidth - 1)
          };
        return (0, Yq.useEffect)(lq), (0, Yq.useEffect)((() => {
          const Eq = qq.current;
          if (!Eq) return;
          const gq = new ResizeObserver(lq);
          return gq.observe(Eq), () => {
            gq.disconnect()
          }
        }), []), [qq, Eq, lq]
      }(), yq = (0, Yq.useMemo)((() => new Map), [Oq]), tq = qq => {
        let Eq = yq.get(qq);
        return void 0 === Eq && (Eq = function(qq, Eq) {
          const gq = /^(.+) \((.+)\)$/.exec(qq);
          return gq ? Eq(gq[2], gq[1]) : qq
        }(YO(Oq, qq), ((qq, Eq) => Oq("buildAFactory2Game:terminalTileKind", {
          kind: qq,
          base: Eq
        }))), yq.set(qq, Eq)), Eq
      }, rq = Eq.isReadOnly(), vq = jq && !rq, hq = Eq.recent(), nq = Eq.items(), bq = Nq.trim().toLowerCase(), iq = vq ? Eq.heldItems(Vq) : ("recent" === xq ? hq : nq).filter((qq => {
        const Eq = tq(qq);
        return ("all" === xq || "recent" === xq || function(qq) {
          return BO(qq) ? "farm" : pB.test(qq) ? "nuclear" : LB.test(qq) ? "bars" : JB.test(qq) ? "farm" : GB.test(qq) ? "tO" : SB.has(qq) ? "parts" : kB.test(qq) ? "farm" : "other"
        }(qq) === xq) && ("" === bq || Eq.toLowerCase().includes(bq)) && ("" === Bq || Eq.toUpperCase().startsWith(Bq))
      })), Zq = new Set(nq.map((qq => tq(qq).charAt(0).toUpperCase()))), fq = qq => vq ? Eq.heldAmount(qq) : Eq.amount(qq), Mq = !vq && "recent" !== xq && hq.length > 0, Tq = function(qq, Eq) {
        return null !== qq && Eq.includes(qq) ? qq : null
      }(Vq, Mq ? [...iq, ...hq] : iq), zq = null === Tq ? 0 : Eq.amount(Tq), Sq = null === Tq ? 0 : fq(Tq), pq = (0, Yq.useCallback)((qq => {
        dq((Eq => Eq === qq ? null : qq))
      }), []), Gq = qq => Sq > 0 || vq && null === Tq && "fill" === qq && iq.length > 0, Lq = vq ? [
        ["one", Oq("buildAFactory2Game:terminalStoreOne")],
        ["stack", Oq("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Oq(null === Tq ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Oq("buildAFactory2Game:terminalTakeOne")],
        ["stack", Oq("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Oq("buildAFactory2Game:terminalFill")]
      ], Jq = vq ? Oq("buildAFactory2Game:terminalStoreEmpty") : "" !== Bq ? Oq("buildAFactory2Game:terminalEmptyLetter", {
        letter: Bq
      }) : "" !== bq ? Oq("buildAFactory2Game:terminalEmptySearch", {
        query: Nq
      }) : Oq("buildAFactory2Game:terminalEmpty");
      return (0, rO.jsx)(Pm.c, {
        close: gq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, rO.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsxs)("div", {
              children: [(0, rO.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Oq(Eq.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, rO.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, rO.jsx)("span", {
                  className: yl()({
                    Off: vq
                  }),
                  children: Oq("buildAFactory2Game:terminalSubtitle", {
                    count: String(Eq.siloCount())
                  })
                }), !rq && (0, rO.jsx)("span", {
                  className: yl()({
                    Off: !vq
                  }),
                  children: Oq("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !rq && (0, rO.jsx)(MB.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Oq("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Oq("buildAFactory2Game:terminalModeStore")
              }],
              value: vq ? "store" : "take",
              onChange: qq => {
                Hq("store" === qq), dq(null)
              },
              ariaLabel: Oq("buildAFactory2Game:terminalModes")
            }), (0, rO.jsx)(Qm.m, {
              onClick: gq
            })]
          }), (0, rO.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, rO.jsxs)("div", {
              className: yl()("Baf2TermTools", {
                Hidden: vq
              }),
              children: [(0, rO.jsx)("div", {
                ref: oq,
                className: yl()("Baf2TermChips", {
                  MoreRight: Pq
                }),
                onScroll: Qq,
                children: cq ? (0, rO.jsxs)(rO.Fragment, {
                  children: [(0, rO.jsx)("button", {
                    type: "button",
                    "aria-label": Oq("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      uq(!1), Wq("")
                    },
                    children: "\u2190"
                  }), [...Zq].sort().map((qq => (0, rO.jsx)("button", {
                    type: "button",
                    className: yl()({
                      On: Bq === qq
                    }),
                    onClick: () => {
                      Wq(Bq === qq ? "" : qq)
                    },
                    children: qq
                  }, qq)))]
                }) : (0, rO.jsxs)(rO.Fragment, {
                  children: [(0, rO.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      uq(!0)
                    },
                    children: Oq("buildAFactory2Game:terminalLetters")
                  }), zB.map((qq => (0, rO.jsx)("button", {
                    type: "button",
                    className: yl()({
                      On: xq === qq
                    }),
                    onClick: () => {
                      Aq(qq)
                    },
                    children: Oq(TB[qq])
                  }, qq)))]
                })
              }), !mq && (0, rO.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Nq,
                placeholder: Oq("buildAFactory2Game:terminalSearch"),
                "aria-label": Oq("buildAFactory2Game:terminalSearch"),
                onChange: qq => {
                  aq(qq.target.value)
                },
                onKeyDown: qq => {
                  qq.stopPropagation()
                }
              }), (0, rO.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Oq("buildAFactory2Game:terminalResort"),
                title: Oq("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  Eq.resort()
                },
                children: "\u21c5"
              })]
            }), Mq && (0, rO.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, rO.jsx)("span", {
                children: Oq(TB.recent)
              }), hq.map((qq => (0, rO.jsx)(RB, {
                item: qq,
                name: tq(qq),
                amount: Eq.amount(qq),
                selected: Tq === qq,
                small: !0,
                onPick: pq
              }, qq)))]
            }), (0, rO.jsx)("div", {
              className: "Baf2TermTiles",
              children: iq.length > 0 ? iq.map((qq => (0, rO.jsx)(RB, {
                item: qq,
                name: tq(qq),
                amount: fq(qq),
                selected: Tq === qq,
                onPick: pq
              }, qq))) : (0, rO.jsx)("p", {
                className: "Baf2TermEmpty",
                children: Jq
              })
            }), (0, rO.jsxs)("div", {
              className: yl()("Baf2TermActions", {
                Hidden: vq && 0 === iq.length
              }),
              children: [(0, rO.jsx)("span", {
                className: "Baf2TermPicked",
                children: rq ? (0, rO.jsxs)(rO.Fragment, {
                  children: [null !== Tq && zq > 0 ? tq(Tq) : Oq("buildAFactory2Game:terminalVisiting"), (0, rO.jsx)("small", {
                    children: Oq("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Tq ? (0, rO.jsxs)(rO.Fragment, {
                  children: [tq(Tq), (0, rO.jsx)("small", {
                    children: Oq("buildAFactory2Game:terminalStored", {
                      amount: zq.toLocaleString()
                    })
                  })]
                }) : Oq(vq ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !rq && Lq.map((qq => {
                let [gq, Yq] = qq;
                const Oq = "fill" === gq ? Qm.p : Qm.g;
                return (0, rO.jsx)(Oq, {
                  className: "Baf2TermTake",
                  disabled: !Gq(gq),
                  onClick: () => {
                    (qq => {
                      Gq(qq) && lq(null === Tq ? Eq.putAll() : vq ? Eq.put(qq, Tq) : Eq.take(qq, Tq))
                    })(gq)
                  },
                  children: Yq
                }, gq)
              }))]
            })]
          })]
        })
      })
    }

    function FB(qq) {
      let {
        kind: Eq,
        icon: gq,
        label: Yq,
        number: lq,
        preview: Oq,
        note: mq,
        tone: xq = null,
        share: Aq,
        onExplain: cq
      } = qq;
      return (0, rO.jsxs)("button", {
        type: "button",
        className: yl()("NxLane", Eq, {
          Warn: "warn" === xq,
          Danger: "danger" === xq
        }),
        onClick: cq,
        children: [(0, rO.jsxs)("span", {
          className: "NxLaneHead",
          children: [gq, (0, rO.jsx)("span", {
            className: "NxLaneLabel",
            children: Yq
          })]
        }), (0, rO.jsxs)("span", {
          className: "NxLaneNum",
          children: [lq, Oq && (0, rO.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Oq]
          })]
        }), (0, rO.jsx)("span", {
          className: "NxLaneNote",
          children: mq
        }), void 0 !== Aq && (0, rO.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Aq)) + "%"
          }
        })]
      })
    }

    function sB(qq) {
      let {
        kind: Eq,
        step: gq,
        short: Yq,
        planned: lq
      } = qq;
      return (0, rO.jsx)("i", {
        className: yl()("NxPipe", Eq, `Step${gq}`, {
          Short: Yq,
          Planned: lq
        }),
        "aria-hidden": "true"
      })
    }

    function XB(qq) {
      let {
        max: Eq,
        bands: gq,
        ticks: Yq,
        now: lq,
        settle: Oq,
        settleTone: mq,
        onExplain: xq
      } = qq;
      const Aq = qq => Math.max(0, Math.min(Eq, qq)) / Eq * 100 + "%";
      let cq = 0;
      return (0, rO.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: xq,
        children: [(0, rO.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [gq.map((qq => {
            const Eq = {
              bottom: Aq(cq),
              height: `calc(${Aq(qq.upTo)} - ${Aq(cq)})`
            };
            return cq = qq.upTo, (0, rO.jsx)("i", {
              className: yl()("NxGaugeBand", qq.kind),
              style: Eq
            }, qq.kind)
          })), null !== lq && (0, rO.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Aq(lq)
            }
          }), void 0 !== Oq && null !== Oq && (0, rO.jsx)("i", {
            className: yl()("NxGaugeSettle", {
              Bad: "bad" === mq
            }),
            style: {
              bottom: Aq(Oq)
            }
          })]
        }), (0, rO.jsx)("span", {
          className: "NxGaugeTicks",
          children: Yq.map((qq => (0, rO.jsx)("small", {
            style: {
              bottom: Aq(qq)
            },
            children: qq
          }, qq)))
        })]
      })
    }

    function wB(qq) {
      const [Eq, gq] = (0, Yq.useState)(null), [lq, Oq] = (0, Yq.useState)((() => {
        try {
          return null === window.localStorage.getItem(qq)
        } catch {
          return !1
        }
      })), mq = (0, Yq.useRef)(null);
      (0, Yq.useEffect)((() => () => {
        null !== mq.current && clearTimeout(mq.current)
      }), []);
      const xq = (0, Yq.useCallback)((Eq => {
          gq(Eq), Oq(!1);
          try {
            window.localStorage.setItem(qq, "1")
          } catch {}
          null !== mq.current && clearTimeout(mq.current), mq.current = setTimeout((() => {
            mq.current = null, gq(null)
          }), 5e3)
        }), [qq]),
        Aq = (0, Yq.useCallback)(((Eq, gq) => {
          const Yq = `${qq}:${Eq}`;
          try {
            if (null !== window.localStorage.getItem(Yq)) return;
            window.localStorage.setItem(Yq, "1")
          } catch {
            return
          }
          xq(gq)
        }), [xq, qq]);
      return {
        explained: Eq,
        hinting: lq,
        explain: xq,
        explainOnce: Aq
      }
    }

    function KB(qq) {
      let {
        text: Eq,
        tone: gq,
        explained: Yq
      } = qq;
      return (0, rO.jsxs)("p", {
        className: yl()("NxStatus", null === Yq ? gq : "Explain"),
        "aria-live": "polite",
        children: [null !== Yq && (0, rO.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Yq && void 0 !== Yq ? Yq : Eq]
      })
    }
    const CB = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function IB(qq, Eq) {
      const gq = Number(qq[Eq]);
      return 1 === gq || 2 === gq || 3 === gq ? gq : 0
    }

    function eB(qq) {
      return !!yA("reactor", qq.baf2RxNeed) || void 0 !== qq.baf2RxLayout && qq.baf2RxNeed.some((qq => {
        let [Eq, gq] = qq;
        return gq > 0 && CB.includes(Eq)
      }))
    }
    const DB = "buildAFactory2Game:";

    function qW(qq) {
      let {
        status: Eq,
        store: gq,
        busy: Yq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)();
      return function(qq) {
        return 0 !== (qq.baf2RxFlags & VE) && (!qq.baf2RxFormed || void 0 !== qq.baf2RxLayout)
      }(Eq) ? (0, rO.jsx)(Qm.p, {
        disabled: !eB(Eq) || Yq,
        onClick: () => {
          gq.tap("fill", (() => {
            gq.send("fill")
          }))
        },
        children: lq(void 0 !== Eq.baf2RxLayout ? `${DB}rxFillLayout` : `${DB}rxFill`)
      }) : null
    }

    function EW(qq) {
      let {
        status: Eq,
        store: gq,
        readOnly: lq,
        bare: Oq = !1
      } = qq;
      const {
        t: mq
      } = (0, hl.v)(), xq = Eq.baf2RxLayout, [Aq, cq, uq] = Eq.baf2RxDims, Bq = (0, Yq.useMemo)((() => {
        if (void 0 === xq) return 0;
        const qq = Uint8Array.from(xq, ((qq, Eq) => IB(xq, Eq)));
        return qA([Aq - 2, cq - 2, uq - 2], qq).max
      }), [xq, Aq, cq, uq]);
      return void 0 === xq ? null : (0, rO.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Oq && (0, rO.jsx)("span", {
          className: "Baf2RxHint",
          children: mq(`${DB}rxLayoutLine`, {
            amount: iA(Bq)
          })
        }), !lq && (0, rO.jsx)(Qm.g, {
          onClick: () => {
            gq.send("layout", 0)
          },
          children: mq(`${DB}rxLayoutHide`)
        })]
      })
    }
    const gW = "buildAFactory2Game:",
      YW = {
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

    function lW(qq) {
      let {
        id: Eq,
        title: gq,
        body: Yq,
        bodyParams: lq,
        yes: Oq,
        cancel: mq,
        confirm: xq
      } = qq;
      const {
        t: Aq
      } = (0, hl.v)();
      return (0, rO.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": Eq,
        children: [(0, rO.jsx)("h3", {
          id: Eq,
          children: Aq(gq)
        }), (0, rO.jsx)("p", {
          children: Aq(Yq, lq)
        }), (0, rO.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, rO.jsx)(Qm.i, {
            onClick: mq,
            children: Aq(`${gW}rxCancel`)
          }), (0, rO.jsx)(Qm.K, {
            onClick: xq,
            children: Aq(Oq)
          })]
        })]
      })
    }

    function OW(qq) {
      const [Eq, gq] = (0, Yq.useState)((() => qq.get()));
      return (0, Yq.useEffect)((() => (gq(qq.get()), qq.subscribe((() => {
        gq(qq.get())
      })))), [qq]), Eq
    }

    function mW(qq) {
      let {
        kind: Eq,
        cap: gq,
        busy: lq = !1,
        whyNot: Oq = null,
        apart: mq
      } = qq;
      const {
        t: xq
      } = (0, hl.v)(), [Aq, cq] = (0, Yq.useState)(!1), uq = null !== Oq, Bq = (0, Yq.useRef)(null);
      if ((0, Yq.useEffect)((() => {
          uq && cq(!1)
        }), [uq]), (0, Yq.useLayoutEffect)((() => {
          var qq;
          const Eq = null === (qq = Bq.current) || void 0 === qq ? void 0 : qq.firstElementChild;
          uq ? null === Eq || void 0 === Eq || Eq.setAttribute("aria-disabled", "true") : lq || null === Eq || void 0 === Eq || Eq.removeAttribute("aria-disabled")
        })), !Aq || uq) return (0, rO.jsx)("span", {
        ref: Bq,
        className: "Baf2RxApartWrap",
        children: (0, rO.jsx)(Qm.i, {
          disabled: lq,
          className: yl()({
            Baf2RxNotYet: uq
          }),
          onClick: () => {
            Oq ? Oq() : cq(!0)
          },
          children: xq(`${gW}rxApart`)
        })
      });
      const Wq = "battery" === Eq,
        Nq = void 0 === gq ? `${gW}batApartConfirmBodyPlan` : `${gW}batApartConfirmBody`;
      return (0, rO.jsx)(lW, {
        id: `baf2ApartTitle_${Eq}`,
        title: Wq ? `${gW}batApartConfirmTitle` : `${gW}rxApartConfirmTitle`,
        body: Wq ? Nq : `${gW}rxApartConfirmBody`,
        bodyParams: void 0 === gq ? void 0 : {
          cap: gq
        },
        yes: `${gW}rxApart`,
        cancel: () => {
          cq(!1)
        },
        confirm: () => {
          cq(!1), mq()
        }
      })
    }

    function xW(qq) {
      let {
        mood: Eq,
        big: gq
      } = qq;
      const Yq = YW[Eq],
        lq = [];
      return Yq.rows.forEach(((qq, Eq) => {
        for (let gq = 0; gq < qq.length; gq++) "." !== qq[gq] && lq.push((0, rO.jsx)("rect", {
          x: gq + 1,
          y: Eq + 1,
          width: 1,
          height: 1,
          fill: "w" === qq[gq] ? "#8fd3ff" : Yq.colour
        }, `${gq},${Eq}`))
      })), (0, rO.jsxs)("svg", {
        className: yl()("Baf2RxFace", {
          Big: gq,
          Alarm: "alarm" === Eq
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, rO.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, rO.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), lq]
      })
    }

    function AW(qq) {
      return jO(qq, "+").replace("+", "")
    }

    function cW(qq) {
      let {
        kind: Eq,
        dims: gq,
        cap: Yq,
        disabled: lq,
        compact: Oq,
        resize: mq
      } = qq;
      const {
        t: xq
      } = (0, hl.v)(), {
        min: Aq,
        max: cq
      } = Lg(Eq), uq = Math.min(Yq, cq), Bq = [`${gW}rxWide`, `${gW}rxTall`, `${gW}rxDeep`], Wq = {
        w: String(gq[0]),
        h: String(gq[1]),
        d: String(gq[2]),
        blocks: String(bA(Eq, gq))
      };
      return (0, rO.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, rO.jsx)("div", {
          className: "Baf2RxSteppers",
          children: gq.map(((qq, Eq) => {
            const Oq = Yq => {
                const lq = [gq[0], gq[1], gq[2]];
                lq[Eq] = qq + Yq, mq(lq)
              },
              Wq = qq >= uq;
            return (0, rO.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, rO.jsx)("button", {
                type: "button",
                "aria-label": xq(`${gW}rxSmaller`),
                disabled: lq || qq <= Aq,
                onClick: () => {
                  Oq(-1)
                },
                children: "\u2212"
              }), (0, rO.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [qq, (0, rO.jsx)("small", {
                  children: xq(Bq[Eq])
                })]
              }), (0, rO.jsx)("button", {
                type: "button",
                "aria-label": xq(`${gW}rxBigger`),
                disabled: lq || Wq,
                onClick: () => {
                  Oq(1)
                },
                children: Wq && Yq < cq ? "\ud83d\udd12" : "+"
              })]
            }, Bq[Eq])
          }))
        }), !Oq && (0, rO.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === Eq ? xq(`${gW}rxSizeLine`, {
            ...Wq,
            water: String(nA(gq))
          }) : xq(`${gW}batSizeLine`, Wq)
        })]
      })
    }

    function uW(qq) {
      let {
        on: Eq,
        label: gq,
        disabled: Yq,
        locked: lq,
        pending: Oq,
        toggle: mq
      } = qq;
      return (0, rO.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": Eq,
        disabled: Yq,
        "aria-disabled": lq || void 0,
        className: yl()("Baf2RxSwitch", {
          On: Eq,
          Locked: lq,
          Pending: Oq
        }),
        onClick: mq,
        children: [(0, rO.jsx)("span", {
          className: "Baf2RxKnob"
        }), gq]
      })
    }
    const BW = "buildAFactory2Game:",
      WW = .95;

    function NW(qq, Eq) {
      return 0 !== (qq.baf2RxFlags & Eq)
    }

    function aW(qq) {
      return "cryo" === qq ? eq.q : eq.r
    }

    function VW(qq) {
      var Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq;
      return qq.baf2RxCryo ? {
        wW: "cryo",
        usePerS: null !== (lq = qq.baf2RxCryoUse) && void 0 !== lq ? lq : 0,
        needPerS: null !== (Oq = qq.baf2RxCryoNeed) && void 0 !== Oq ? Oq : 0,
        inPerS: null !== (mq = qq.baf2RxCryoIn) && void 0 !== mq ? mq : 0,
        stored: null !== (xq = qq.baf2RxCryoStored) && void 0 !== xq ? xq : 0,
        makersShort: null !== (Aq = qq.baf2RxMixersShort) && void 0 !== Aq ? Aq : 0,
        waterBeside: null !== (cq = qq.baf2RxWaterUse) && void 0 !== cq ? cq : 0,
        pct: qq.baf2RxWater
      } : {
        wW: "water",
        usePerS: null !== (Eq = qq.baf2RxWaterUse) && void 0 !== Eq ? Eq : 0,
        needPerS: null !== (gq = qq.baf2RxWaterNeed) && void 0 !== gq ? gq : 0,
        inPerS: qq.baf2RxWaterIn,
        stored: qq.baf2RxWaterStored,
        makersShort: null !== (Yq = qq.baf2RxCondensersShort) && void 0 !== Yq ? Yq : 0,
        waterBeside: 0,
        pct: qq.baf2RxWater
      }
    }

    function dW(qq) {
      const Eq = "running" === qq.baf2RxState || "idle" === qq.baf2RxState;
      return qq.baf2RxFormed && qq.baf2RxTarget !== qq.baf2RxThrottle && Eq ? jW(qq, qq.baf2RxTarget) : null
    }

    function jW(qq, Eq) {
      const [gq, Yq, lq, , , , Oq, , mq] = qq.baf2RxStats, xq = NW(qq, NE), Aq = VW(qq), cq = Aq.pct / 100, {
        gen: uq,
        out: Bq,
        load: Wq
      } = function(qq, Eq, gq, Yq) {
        const lq = gq ? Xx : 1,
          Oq = Math.min(qq.fuelHeat * lq * Math.max(0, Math.min(1, Eq)), qq.size * lq);
        return {
          gen: Oq,
          out: Oq,
          load: BA(Oq, qq.cooling, Yq)
        }
      }({
        fuelHeat: gq,
        cooling: Yq,
        size: lq
      }, Eq / 100, xq, cq), Nq = NA(Oq || Dx(...qq.baf2RxDims)), aq = qq.baf2RxHeat, Vq = Math.abs(Wq - aq), dq = function(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : eq.r;
        const Oq = gq ? Xx : 1,
          mq = Math.min(qq.fuelHeat * Oq * Eq / 100, qq.size * Oq),
          xq = mq,
          Aq = qq.fuelHeat * Oq,
          cq = qq.cooling * uA(Yq.pct / 100),
          uq = Aq > 0 && cq < qq.size * Oq ? Math.floor(100 * cq / Aq) : 100,
          Bq = mq * lq - Yq.inPerS;
        return {
          out: xq,
          hotAbove: uq >= 100 ? null : Math.max(0, uq),
          waterSecs: Yq.pct >= 100 && Bq > 1e-6 ? Math.max(0, Yq.stored) / Bq : null
        }
      }({
        fuelHeat: gq,
        cooling: Yq,
        size: lq
      }, Eq, xq, {
        pct: Aq.pct,
        inPerS: Aq.inPerS,
        stored: Aq.stored
      }, aW(Aq.wW));
      return {
        pct: Eq,
        out: Bq,
        coolPerS: uq * aW(Aq.wW),
        pelletsPerMin: mq > 0 ? Bq / mq * 60 : 0,
        settle: Wq,
        settleS: Vq > 2 ? Nq * Math.log(Vq / 2) : 0,
        overheatS: Wq > 100 && aq < 100 ? Nq * Math.log((Wq - aq) / (Wq - 100)) : null,
        hotAbove: dq.hotAbove,
        coolantSecs: dq.waterSecs
      }
    }

    function HW(qq) {
      return qq.baf2RxThrottle <= 0 && "running" !== qq.baf2RxState ? 0 : jW(qq, qq.baf2RxTarget).pelletsPerMin / 60
    }

    function oW(qq, Eq) {
      if (qq <= 0 || Eq <= 0) return 0;
      const gq = qq / Eq;
      return gq < .25 ? 1 : gq < .5 ? 2 : gq < .8 ? 3 : 4
    }

    function PW(qq, Eq) {
      const gq = {};
      for (const [Yq, lq] of Object.entries(Eq.params)) gq[Yq] = "time" === Yq ? PO(qq, lq) : "amount" === Yq ? iA(lq) : String(Math.round(lq));
      return qq(Eq.key, gq)
    }

    function QW(qq, Eq) {
      return {
        key: `${BW}${qq}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: Eq
      }
    }

    function yW(qq) {
      var Eq;
      const gq = NW(qq, NE),
        Yq = "running" === qq.baf2RxState,
        lq = jA(qq),
        Oq = qq.baf2RxHeat;
      var mq;
      if (Yq && Oq > Fx) return {
        key: null !== (mq = lq.fix) && void 0 !== mq ? mq : `${BW}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const xq = Yq ? jW(qq, qq.baf2RxTarget).coolantSecs : null,
        Aq = "cryo" === VW(qq).wW;
      if (null !== xq && xq >= 1 && xq <= 30) return QW(Aq ? "rxWarnCryo" : "rxWarnWater", "bad");
      const cq = Ix(Dx(...qq.baf2RxDims)).waste,
        uq = Yq ? tA(qq, cq, HW(qq)).fullInS : null;
      if (null !== uq && uq <= 120 && qq.baf2RxWaste >= .5 * cq) return QW("rxWarnWaste", "warn");
      if (null !== xq && xq >= 1) return QW(Aq ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: xq
      });
      const Bq = "noWater" === qq.baf2RxState && Oq > Fx;
      if (qq.baf2RxDamage >= 1 && !Bq) return QW("rxDamagedHeals", "warn", {
        pct: qq.baf2RxDamage
      });
      if (qq.baf2RxCryoCut) return QW("rxFix_cryoCut", "warn");
      const Wq = VW(qq);
      if ("noWater" === qq.baf2RxState && "cryo" === Wq.wW) return QW("noWater" === qq.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Nq = lq.fix === `${BW}rxFix_scramCool` || "idle" === qq.baf2RxState && qq.baf2RxTarget <= 0;
      if (Nq && qq.baf2RxFuel <= 0) return QW("rxFix_noFuel", "warn");
      if (Nq && qq.baf2RxWaterIn <= 0 && (null !== (Eq = qq.baf2RxCryoIn) && void 0 !== Eq ? Eq : 0) <= 0) return QW("rxFix_noWater", "warn");
      const aq = lq.fix === `${BW}rxFix_scramCool` ? oA(qq) : null;
      if (null !== aq) return {
        key: aq.key,
        params: {
          amount: aq.amount
        },
        tone: "info"
      };
      if ("running" !== qq.baf2RxState && "idle" !== qq.baf2RxState && null !== lq.fix) return {
        key: lq.fix,
        params: {},
        tone: "scram" === qq.baf2RxState ? "info" : Bq ? "bad" : "warn"
      };
      var Vq;
      if ("idle" === qq.baf2RxState && qq.baf2RxTarget <= 0) return {
        key: null !== (Vq = lq.fix) && void 0 !== Vq ? Vq : `${BW}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const dq = qq.baf2RxCryoStarved;
      if ("cryo" === Wq.wW && dq && Wq.needPerS > 0 && Wq.usePerS < WW * Wq.needPerS) return QW("noWater" === dq ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const jq = "cryo" === Wq.wW,
        Hq = Wq.needPerS > 0 && Wq.usePerS < WW * Wq.needPerS;
      if (jq ? Hq || Wq.makersShort > 0 && Wq.pct < 100 : Wq.pct < 100) {
        const Eq = jq && Hq ? Math.floor(100 * Wq.usePerS / Wq.needPerS) : Math.min(100, Wq.pct);
        if (Wq.makersShort > 0) {
          return QW(`${jq?"rxCryoShortLine":"rxWaterShortLine"}${1===Wq.makersShort?"One":""}${!jq&&qq.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: Eq,
            count: Wq.makersShort
          })
        }
        return QW(jq ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: Eq
        })
      }
      const oq = function(qq) {
        const [Eq, gq, Yq] = qq.baf2RxStats, lq = VW(qq), Oq = WA({
          fuelHeat: Eq,
          cooling: gq,
          size: Yq
        }, "cryo" === lq.wW ? eq.h : 1, !0);
        return Math.max(0, Oq * aW(lq.wW) - lq.inPerS)
      }(qq);
      if (gq && oq > 0) return QW("cryo" === Wq.wW ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(oq)
      });
      if (Oq >= AA) return QW("rxHotLine", "warn");
      const Pq = jW(qq, qq.baf2RxTarget);
      var Qq;
      if (null !== Pq.overheatS) return QW("rxWillOverheat", "bad", {
        pct: qq.baf2RxTarget,
        time: Pq.overheatS,
        safe: null !== (Qq = Pq.hotAbove) && void 0 !== Qq ? Qq : 100
      });
      if (Math.abs(Pq.settle - Oq) >= 3) return QW("rxSettling", "info", {
        pct: qq.baf2RxTarget,
        heat: Math.round(Pq.settle),
        time: Pq.settleS
      });
      const yq = oA(qq);
      if (null !== yq) return {
        key: yq.key,
        params: {
          amount: yq.amount
        },
        tone: "info"
      };
      const tq = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== Eq && ("running" !== Eq || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === qq.rods ? `${aA}rxLimitNoRods` : `${aA}rxLimit_${xA(qq)}`
      }({
        rods: qq.baf2RxStats[3],
        ...HA(qq)
      }, qq.baf2RxState, qq.baf2RxOut >= WW * qq.baf2RxMaxNow, !1);
      if (tq === `${BW}rxLimit_size`) {
        const [Eq, , gq, Yq] = qq.baf2RxStats, lq = Yq > 0 && Eq > 0 ? Math.ceil(gq / (Eq / Yq) - 1e-9) : Yq, Oq = qq.baf2RxDims.every((qq => qq >= Lg("reactor").max));
        if (lq < Yq) return QW(Oq ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: lq,
          have: Yq
        });
        if (Oq) return QW("rxLimit_sizeMax", "info")
      }
      return null !== tq ? {
        key: tq,
        params: {},
        tone: "info"
      } : QW("rxSteady", "ok", {
        pct: qq.baf2RxTarget
      })
    }

    function tW(qq) {
      var Eq;
      if (qq.melted) return QW("rxMeltedBody", "bad");
      if (-1 === qq.bad) return QW("rxFix_noRoom", "warn");
      if (qq.bad > 0) return QW(1 === qq.bad ? "rxBadOne" : "rxBad", "warn", {
        count: qq.bad
      });
      if (qq.left > 0) {
        const Eq = 1 === qq.left ? "One" : "";
        return QW(qq.canFill ? `rxPlanLeft${Eq}` : `rxPlanLeftNoFill${Eq}`, "info", {
          count: qq.left
        })
      }
      if (0 === qq.rods) return QW("rxLimitNoRods", "warn");
      const gq = null !== (Eq = qq.idle) && void 0 !== Eq ? Eq : 0;
      return gq > 0 ? QW(1 === gq ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: gq
      }) : QW("rxPlanReady", "ok")
    }

    function rW(qq) {
      return Math.floor(Math.max(0, qq[1] - 1) / 2)
    }

    function vW(qq) {
      if (qq >= gA && qq < YA) {
        const Eq = qq - gA;
        return {
          key: 0 === Eq ? `${BW}rxWhy_rodAlone` : 1 === Eq ? `${BW}rxWhy_rodOne` : `${BW}rxWhy_rod`,
          params: {
            count: String(Eq),
            heat: String(Sx * (1 + px * Eq))
          }
        }
      }
      return qq === YA ? {
        key: `${BW}rxWhy_channel`,
        params: {
          amount: String(Lx)
        }
      } : qq === lA ? {
        key: `${BW}rxWhy_deadChannel`,
        params: {}
      } : qq === OA ? {
        key: `${BW}rxWhy_graphite`,
        params: {}
      } : {
        key: `${BW}rxWhy_core`,
        params: {}
      }
    }
    const hW = "buildAFactory2Game:";

    function nW(qq, Eq) {
      return 0 !== (qq.baf2RxFlags & Eq)
    }

    function bW(qq) {
      let {
        status: Eq,
        pending: gq,
        store: Yq,
        explain: lq
      } = qq;
      const {
        t: Oq
      } = (0, hl.v)(), mq = nW(Eq, WE), xq = Eq.baf2RxTarget, Aq = Eq.baf2RxThrottle, cq = function(qq) {
        return {
          press: () => {
            qq.throttlePress()
          },
          drag: Eq => {
            qq.throttleDrag(Eq)
          },
          release: () => {
            qq.throttleRelease()
          }
        }
      }(Yq), uq = null === (Bq = jW(Eq, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Bq - 10),
        red: Bq
      };
      var Bq;
      return (0, rO.jsxs)("div", {
        className: yl()("Baf2RxThrottle", {
          Off: mq
        }),
        onClick: () => {
          mq && lq(`${hW}rxWhy_startFirst`)
        },
        children: [(0, rO.jsx)("span", {
          className: "HideNarrow",
          children: Oq(`${hW}rxThrottle`)
        }), (0, rO.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, rO.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: xq,
            disabled: mq,
            style: mq ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Oq(`${hW}rxThrottle`),
            onPointerDown: () => {
              cq.press();
              const qq = () => {
                window.removeEventListener("pointerup", qq), window.removeEventListener("pointercancel", qq), cq.release()
              };
              window.addEventListener("pointerup", qq), window.addEventListener("pointercancel", qq)
            },
            onKeyUp: cq.release,
            onChange: qq => {
              cq.drag(Number(qq.target.value))
            }
          }), (0, rO.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${uq.amber}%, #ffb020 ${uq.amber}% ${uq.red}%, #ff3b30 ${uq.red}%)`
            },
            "aria-hidden": "true"
          }), (0, rO.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Aq}% + ${8*(1-Aq/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, rO.jsxs)("b", {
          children: [`${xq}%`, (0, rO.jsx)("i", {
            className: yl()("Baf2RxPendingDot", {
              On: gq
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function iW(qq) {
      let {
        status: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)(), Yq = jW(Eq, Eq.baf2RxTarget), lq = VW(Eq).wW, Oq = gq("cryo" === lq ? `${hW}rxRateCryo` : `${hW}rxRateWater`, {
        rate: AW(Yq.coolPerS)
      }), mq = gq(`${hW}rxChain`, {
        pct: String(Eq.baf2RxTarget),
        out: iA(Yq.out),
        heat: String(Math.round(Yq.settle)),
        coolant: Oq
      }), xq = null !== Yq.coolantSecs ? Yq.coolantSecs >= 1 ? gq("cryo" === lq ? `${hW}rxThrottleCryoOut` : `${hW}rxThrottleWaterOut`, {
        time: PO(gq, Yq.coolantSecs)
      }) : gq("cryo" === lq ? `${hW}rxThrottleCryoDry` : `${hW}rxThrottleWaterDry`) : null;
      return (0, rO.jsxs)("p", {
        className: "Baf2RxChain",
        children: [mq, null !== xq ? (0, rO.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", xq]
        }) : (0, rO.jsxs)("span", {
          children: [" \xb7 ", gq(`${hW}rxChainPellets`, {
            amount: ZA(Yq.pelletsPerMin)
          })]
        })]
      })
    }

    function ZW(qq) {
      let {
        view: Eq,
        store: gq,
        explain: lq,
        explainOnce: Oq
      } = qq;
      const {
        t: mq
      } = (0, hl.v)(), {
        status: xq
      } = Eq, [Aq, cq] = (0, Yq.useState)(!1), uq = nW(xq, WE), Wq = nW(xq, NE), Nq = !nW(xq, dE), aq = xq.baf2RxHeat > 100;
      return (0, rO.jsxs)(rO.Fragment, {
        children: [(0, rO.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, rO.jsx)(bW, {
            status: xq,
            pending: Eq.throttlePending,
            store: gq,
            explain: lq
          }), (0, rO.jsx)(uW, {
            on: Wq,
            label: Wq ? mq(`${hW}rxOdLeft`, {
              time: PO(mq, xq.baf2RxOdLeft)
            }) : mq(`${hW}rxOverdrive`),
            locked: Nq,
            pending: 0 !== (Eq.pendingFlags & NE),
            toggle: () => {
              Nq ? lq(`${hW}rxOverdriveTier`, {
                amount: String(Bq(13))
              }) : Wq ? gq.setFlag(NE, !1) : Eq.odConfirmed ? gq.setFlag(NE, !0) : cq(!0)
            }
          }), uq || Eq.startGuard ? (0, rO.jsx)(Qm.v, {
            disabled: Eq.busy.has("start") || Eq.startGuard,
            onClick: () => {
              gq.tap("start", (() => {
                gq.setFlag(WE, !1)
              }))
            },
            children: mq(Eq.startGuard ? `${hW}rxStarting` : `${hW}rxStart`)
          }) : (0, rO.jsx)("span", {
            className: yl()("Baf2RxScram", {
              Pulse: aq
            }),
            children: (0, rO.jsx)(Qm.K, {
              onClick: () => {
                gq.shutDown()
              },
              children: mq(`${hW}rxScram`)
            })
          })]
        }), (0, rO.jsx)(iW, {
          status: xq
        }), Aq && (0, rO.jsx)(lW, {
          id: "baf2RxOdTitle",
          title: `${hW}rxOdConfirmTitle`,
          body: `${hW}rxOdConfirmBody`,
          yes: `${hW}rxOdConfirm`,
          cancel: () => {
            cq(!1)
          },
          confirm: () => {
            cq(!1), gq.tap("odConfirm", (() => {
              gq.confirmOverdrive(), gq.setFlag(NE, !0)
            })), Oq(`${hW}rxWhy_overdrive`)
          }
        })]
      })
    }

    function fW(qq) {
      let {
        view: Eq,
        store: gq,
        keepSize: Yq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)(), {
        status: Oq
      } = Eq;
      return (0, rO.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, rO.jsx)(cW, {
          kind: "reactor",
          dims: Eq.dims,
          cap: Oq.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: qq => {
            gq.resize(qq)
          }
        }), Yq ? (0, rO.jsx)(Qm.i, {
          onClick: Yq,
          children: lq(`${hW}rxKeepSize`)
        }) : (0, rO.jsxs)(rO.Fragment, {
          children: [(0, rO.jsx)(uW, {
            on: Eq.guide,
            label: lq(`${hW}rxGuide`),
            toggle: () => {
              gq.toggleGuide()
            }
          }), nW(Oq, HE) && (0, rO.jsx)(uW, {
            on: Eq.starter,
            label: lq(`${hW}rxStarter`),
            toggle: () => {
              gq.toggleStarter()
            }
          }), (0, rO.jsx)(qW, {
            status: Oq,
            store: gq,
            busy: Eq.busy.has("fill")
          })]
        })]
      })
    }

    function MW(qq) {
      let {
        need: Eq,
        kind: gq = "reactor",
        explain: Yq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)(), Oq = Eq.length <= 3, mq = Eq.reduce(((qq, Eq) => {
        let [, gq] = Eq;
        return qq + gq
      }), 0);
      return (0, rO.jsxs)("div", {
        className: yl()("Baf2RxParts", {
          Compact: !Oq
        }),
        onClick: () => {
          Yq("battery" === gq ? `${hW}batWhy_store` : `${hW}rxShellHint`)
        },
        children: [mq > 0 && (0, rO.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === mq ? lq(`${hW}rxBlocksOne`) : lq(`${hW}rxBlocks`, {
            blocks: String(mq)
          })
        }), 0 === Eq.length ? (0, rO.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: lq("battery" === gq ? `${hW}batPartsDone` : `${hW}rxShellDone`)
        }) : QA(Eq).map((qq => {
          let [Eq, gq, Yq] = qq;
          const mq = function(qq) {
            const Eq = hA[qq];
            if (void 0 === Eq) return null;
            const [gq, Yq, lq] = rA[Eq].colour.map((qq => Math.round(255 * qq)));
            return `rgb(${gq}, ${Yq}, ${lq})`
          }(Eq);
          return (0, rO.jsxs)("span", {
            className: "Baf2RxChip",
            title: YO(lq, Eq),
            children: [(0, rO.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === mq ? {
                visibility: "hidden"
              } : {
                background: mq
              },
              title: lq(`${hW}rxShopGhost`)
            }), (0, rO.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, rO.jsx)(bl.e, {
                itemName: Eq,
                amount: 0
              })
            }), (0, rO.jsx)("span", {
              className: "Baf2RxChipName",
              children: Oq ? `${gq} ${xq=YO(lq,Eq),xq.replace(/^(Reactor|Battery) (?=\S)/,"")}` : gq
            }), Yq >= gq ? (0, rO.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, rO.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Oq ? lq(`${hW}rxShopShort`, {
                count: String(gq - Yq)
              }) : "\u2212" + (gq - Yq)
            })]
          }, Eq);
          var xq
        }))]
      })
    }
    const TW = "buildAFactory2Game:";

    function zW(qq) {
      var Eq, gq, lq, Oq, mq, xq, Aq;
      let {
        store: cq,
        close: uq
      } = qq;
      const {
        t: Bq
      } = (0, hl.v)(), Wq = km(), Nq = OW(cq), {
        explained: aq,
        explain: Vq
      } = wB("baf2RxExplained"), dq = (0, Yq.useCallback)(((qq, Eq) => {
        Vq(Bq(qq, Eq))
      }), [Vq, Bq]), jq = null === Nq || void 0 === Nq ? void 0 : Nq.status, Hq = !0 === (null === jq || void 0 === jq ? void 0 : jq.baf2BatReadOnly), oq = qq => {
        jq && Wq.send(BE(jq.baf2BatAt, qq))
      }, [Pq, Qq, yq] = null !== (Eq = null === Nq || void 0 === Nq ? void 0 : Nq.dims) && void 0 !== Eq ? Eq : [0, 0, 0], tq = iA(null !== (gq = null === Nq || void 0 === Nq ? void 0 : Nq.WB) && void 0 !== gq ? gq : 0), rq = !0 === (null === jq || void 0 === jq ? void 0 : jq.baf2BatFormed), vq = null !== (lq = null === jq || void 0 === jq ? void 0 : jq.baf2BatStored) && void 0 !== lq ? lq : 0, hq = Math.max(1, null !== (Oq = null === jq || void 0 === jq ? void 0 : jq.baf2BatIslandCap) && void 0 !== Oq ? Oq : 1), nq = Math.min(100, 100 * vq / hq), bq = null === jq || void 0 === jq ? void 0 : jq.baf2BatNetPerS, iq = function(qq, Eq, gq) {
        return gq > 0 && Eq >= gq ? "full" : void 0 !== qq && qq >= .05 ? "charging" : void 0 !== qq && qq <= -.05 && Eq > 0 ? "draining" : "steady"
      }(bq, vq, null !== (mq = null === jq || void 0 === jq ? void 0 : jq.baf2BatIslandCap) && void 0 !== mq ? mq : 0), Zq = null !== (xq = null === jq || void 0 === jq ? void 0 : jq.baf2BatMadePerS) && void 0 !== xq ? xq : 0, fq = null !== (Aq = null === jq || void 0 === jq ? void 0 : jq.baf2BatUsedPerS) && void 0 !== Aq ? Aq : 0;
      let Mq, Tq = {},
        zq = "info";
      if (jq)
        if (rq) "charging" === iq ? (Mq = `${TW}batLine_charging`, Tq = {
          time: PO(Bq, (hq - vq) / Math.max(.05, null !== bq && void 0 !== bq ? bq : 0))
        }, zq = "ok") : "draining" === iq ? (Mq = `${TW}batLine_draining`, Tq = {
          time: PO(Bq, vq / Math.max(.05, -(null !== bq && void 0 !== bq ? bq : 0)))
        }, zq = "warn") : Mq = "full" === iq ? `${TW}batLine_full` : vq <= 0 && fq > 0 ? `${TW}batLine_empty` : `${TW}batLine_steady`;
        else {
          var Sq;
          const qq = tW({
            left: jq.baf2BatNeed.reduce(((qq, Eq) => {
              let [, gq] = Eq;
              return qq + gq
            }), 0),
            bad: jq.baf2BatBad,
            rods: 1,
            canFill: !0 === jq.baf2BatCanFill,
            melted: !1
          });
          Mq = qq.key, Tq = {
            count: String(null !== (Sq = qq.params.count) && void 0 !== Sq ? Sq : 0)
          }, zq = qq.tone
        }
      else Mq = `${TW}batLine_steady`;
      const pq = Math.max(Zq, fq, 1);
      return (0, rO.jsx)(Pm.c, {
        close: uq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, rO.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, rO.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, rO.jsx)(bl.e, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, rO.jsxs)("div", {
                children: [(0, rO.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Bq(`${TW}batTitle`)
                }), jq && (0, rO.jsxs)("p", {
                  className: yl()("Baf2RxSubtitle", {
                    good: rq && "charging" === iq,
                    warn: rq && "draining" === iq
                  }),
                  children: [Pq, "\xd7", Qq, "\xd7", yq, " \xb7 ", Bq(rq ? `${TW}batState_${iq}` : `${TW}rxSubPlanShort`)]
                })]
              })]
            }), (0, rO.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [jq && !Hq && (0, rO.jsx)(mW, {
                kind: "battery",
                cap: rq ? tq : void 0,
                busy: null === Nq || void 0 === Nq ? void 0 : Nq.busy.has("apart"),
                apart: () => {
                  cq.tap("apart", (() => {
                    oq("apart")
                  }))
                }
              }), (0, rO.jsx)(Qm.m, {
                onClick: uq
              })]
            })]
          }), Nq && jq && (0, rO.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, rO.jsxs)("div", {
              className: yl()("Baf2RxFlow Baf2BatFlow", {
                Plan: !rq
              }),
              children: [(0, rO.jsx)(FB, {
                kind: "Power",
                label: Bq(`${TW}batMade`),
                number: rq ? `\u26a1 ${iA(Zq)}/s` : "\u2014",
                note: Bq(`${TW}batMadeNote`),
                share: rq ? Zq / pq : void 0,
                onExplain: () => {
                  dq(`${TW}batWhy_made`)
                }
              }), (0, rO.jsx)(sB, {
                kind: "Power",
                step: rq ? oW(Zq, pq) : 0,
                planned: !rq
              }), (0, rO.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  dq(`${TW}batWhy_store`)
                },
                children: [(0, rO.jsx)(XB, {
                  max: 100,
                  bands: [{
                    upTo: rq ? nq : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, rO.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, rO.jsx)("b", {
                    className: "Baf2BatStored",
                    children: rq ? Bq(`${TW}batStoredOf`, {
                      amount: iA(vq),
                      cap: iA(jq.baf2BatIslandCap)
                    }) : Bq(`${TW}batWillHold`, {
                      cap: tq
                    })
                  }), (0, rO.jsx)("span", {
                    children: Bq(`${TW}batAdds`, {
                      cap: tq
                    })
                  }), rq && (0, rO.jsx)("small", {
                    children: Bq(`${TW}batBreakNote`, {
                      cap: tq
                    })
                  })]
                })]
              }), (0, rO.jsx)(sB, {
                kind: "Power",
                step: rq ? oW(fq, pq) : 0,
                planned: !rq
              }), (0, rO.jsx)(FB, {
                kind: "Power",
                label: Bq(`${TW}batUsed`),
                number: rq ? `\u26a1 ${iA(fq)}/s` : "\u2014",
                note: Bq(`${TW}batUsedNote`),
                share: rq ? fq / pq : void 0,
                onExplain: () => {
                  dq(`${TW}batWhy_used`)
                }
              })]
            }), (0, rO.jsx)(KB, {
              text: Bq(Mq, Tq),
              tone: zq,
              explained: aq
            }), Hq ? (0, rO.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Bq(`${TW}rxNotYours`)
            }) : !rq && (0, rO.jsxs)(rO.Fragment, {
              children: [(0, rO.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, rO.jsx)(cW, {
                  kind: "battery",
                  dims: Nq.dims,
                  cap: jq.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: qq => {
                    cq.resize(qq)
                  }
                }), (0, rO.jsx)(uW, {
                  on: Nq.guide,
                  label: Bq(`${TW}rxGuide`),
                  toggle: () => {
                    cq.toggleGuide()
                  }
                }), jq.baf2BatCanFill && (0, rO.jsx)(Qm.p, {
                  disabled: !yA("battery", jq.baf2BatNeed) || Nq.busy.has("fill"),
                  onClick: () => {
                    cq.tap("fill", (() => {
                      oq("fill")
                    }))
                  },
                  children: Bq(`${TW}rxFill`)
                })]
              }), (0, rO.jsx)(MW, {
                need: jq.baf2BatNeed,
                kind: "battery",
                explain: dq
              })]
            })]
          })]
        })
      })
    }
    const SW = "buildAFactory2Game:",
      pW = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function GW(qq, Eq) {
      return qq === EA ? null : Eq ? "#4a4440" : qq < YA ? pW[qq - gA] : qq === YA ? "#3fd0f0" : qq === lA ? "#2c3e4c" : "#55585e"
    }

    function LW(qq) {
      let {
        inner: Eq,
        looks: gq,
        layer: Yq,
        setLayer: lq,
        glow: Oq,
        melted: mq,
        explain: xq
      } = qq;
      const {
        t: Aq
      } = (0, hl.v)(), [cq, uq, Bq] = Eq, Wq = Math.max(0, Math.min(uq - 1, Yq)), Nq = [];
      for (let Vq = 0; Vq < Bq; Vq++)
        for (let qq = 0; qq < cq; qq++) {
          var aq;
          const Eq = null !== (aq = gq[(Wq * Bq + Vq) * cq + qq]) && void 0 !== aq ? aq : EA,
            Yq = GW(Eq, mq),
            lq = Eq >= gA && Eq < YA;
          Nq.push(null === Yq ? (0, rO.jsx)("circle", {
            cx: qq + .5,
            cy: Vq + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${qq},${Vq}`) : (0, rO.jsx)("rect", {
            x: qq + .06,
            y: Vq + .06,
            width: .88,
            height: .88,
            fill: Yq,
            opacity: lq && !mq ? .5 + .5 * Oq : 1,
            onClick: qq => {
              qq.stopPropagation();
              const gq = vW(Eq);
              xq(gq.key, gq.params)
            }
          }, `${qq},${Vq}`))
        }
      return (0, rO.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, rO.jsx)("svg", {
          className: yl()("Baf2RxMapGrid", {
            Melted: mq
          }),
          viewBox: `0 0 ${Math.max(1,cq)} ${Math.max(1,Bq)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Aq(`${SW}rxWhy_core`),
          onClick: () => {
            xq(`${SW}rxWhy_core`, {})
          },
          children: Nq
        }), uq > 1 && (0, rO.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, rO.jsx)("button", {
            type: "button",
            "aria-label": Aq(`${SW}rxLayerDown`),
            disabled: Wq <= 0,
            onClick: () => {
              lq(Wq - 1)
            },
            children: "\u25bc"
          }), (0, rO.jsxs)("span", {
            children: [(0, rO.jsx)("span", {
              className: "HideNarrow",
              children: Aq(`${SW}rxLayer`, {
                n: String(Wq + 1),
                of: String(uq)
              })
            }), (0, rO.jsx)("span", {
              className: "ShowNarrow",
              children: Aq(`${SW}rxLayerShort`, {
                n: String(Wq + 1),
                of: String(uq)
              })
            })]
          }), (0, rO.jsx)("button", {
            type: "button",
            "aria-label": Aq(`${SW}rxLayerUp`),
            disabled: Wq >= uq - 1,
            onClick: () => {
              lq(Wq + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const JW = "buildAFactory2Game:",
      kW = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: sx,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: dA,
        kind: "red"
      }],
      RW = [50, sx, 100];

    function UW(qq) {
      let {
        stats: Eq,
        t: gq,
        explain: Yq
      } = qq;
      const lq = xA(Eq),
        Oq = Math.max(1, Eq.fuelHeat, Eq.cooling, Eq.size),
        mq = [
          ["fuel", `${JW}rxBarRods`, Eq.fuelHeat],
          ["cooling", `${JW}rxBarCooling`, Eq.cooling],
          ["size", `${JW}rxBarSize`, Eq.size]
        ];
      return (0, rO.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Yq(`${JW}rxWhy_bars`)
        },
        children: [(0, rO.jsx)("span", {
          className: "Baf2RxMostLine",
          children: gq(`${JW}rxMost`, {
            amount: iA(Math.min(Eq.fuelHeat, Eq.cooling, Eq.size))
          })
        }), (0, rO.jsx)("span", {
          className: "Baf2RxMostBars",
          children: mq.map((qq => {
            let [Eq, Yq, mq] = qq;
            return (0, rO.jsxs)("span", {
              className: yl()("Baf2RxMostBar", Eq, {
                Low: Eq === lq
              }),
              children: [(0, rO.jsx)("small", {
                children: gq(Yq)
              }), (0, rO.jsx)("i", {
                children: (0, rO.jsx)("b", {
                  style: {
                    width: 100 * mq / Oq + "%"
                  }
                })
              })]
            }, Eq)
          }))
        })]
      })
    }

    function FW(qq) {
      var Eq;
      let {
        view: gq,
        heat: lq,
        settle: Oq,
        settleLine: mq,
        settleBad: xq,
        explain: Aq
      } = qq;
      const {
        t: cq
      } = (0, hl.v)(), {
        status: uq
      } = gq, Bq = uq.baf2RxAt.join(","), [Wq, Nq] = (0, Yq.useState)((() => rW(gq.inner)));
      (0, Yq.useEffect)((() => {
        Nq(rW(gq.inner))
      }), [Bq, gq.inner[1]]);
      const aq = null !== (Eq = gq.plan) && void 0 !== Eq ? Eq : HA(uq),
        Vq = gq.plan ? gq.plan.powerPerUnit : uq.baf2RxStats[8],
        dq = null === lq ? null : "alarm" === (jq = VA(uq)) ? "red" : "hot" === jq ? "hot" : "warm" === jq ? "warm" : "cold";
      var jq;
      const Hq = !uq.baf2RxFormed && function(qq, Eq) {
          return 0 !== (qq.baf2RxFlags & Eq)
        }(uq, aE),
        oq = uq.baf2RxDamage,
        Pq = uq.baf2RxDamageTrend;
      return (0, rO.jsxs)("div", {
        className: yl()("Baf2RxCore", null !== dq && void 0 !== dq ? dq : "plan"),
        children: [(0, rO.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, rO.jsx)(LW, {
            inner: gq.inner,
            looks: gq.looks,
            layer: Wq,
            setLayer: Nq,
            glow: uq.baf2RxFormed ? uq.baf2RxThrottle / 100 : 1,
            melted: Hq,
            explain: Aq
          }), (0, rO.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Aq(`${JW}rxWhy_heat`)
            },
            children: [null !== lq ? (0, rO.jsxs)(rO.Fragment, {
              children: [(0, rO.jsx)("b", {
                children: cq(`${JW}rxHeatPct`, {
                  pct: String(lq)
                })
              }), (0, rO.jsx)("span", {
                className: yl()("Baf2RxBand", dq),
                children: cq(`${JW}rxBand_${dq}`)
              })]
            }) : (0, rO.jsx)("b", {
              children: cq(`${JW}rxHeat`)
            }), null !== mq && (0, rO.jsx)("span", {
              className: yl()("Baf2RxSettle", {
                Bad: xq
              }),
              children: mq
            }), oq >= 1 && (0, rO.jsxs)("span", {
              className: yl()("Baf2RxDamage", Pq),
              children: [cq(`${JW}rxDamageLine`, {
                pct: String(oq)
              }), " \xb7 ", cq(`${JW}rxDamage_${Pq}`), (0, rO.jsx)("i", {
                children: (0, rO.jsx)("b", {
                  style: {
                    width: `${Math.min(100,oq)}%`
                  }
                })
              })]
            })]
          }), (0, rO.jsx)(XB, {
            max: dA,
            bands: kW,
            ticks: RW,
            now: lq,
            settle: Oq,
            settleTone: xq ? "bad" : null,
            onExplain: () => {
              Aq(`${JW}rxWhy_heat`)
            }
          })]
        }), (0, rO.jsx)(UW, {
          stats: aq,
          t: cq,
          explain: Aq
        }), Vq > 0 && (0, rO.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Aq(`${JW}rxWhy_perPellet`)
          },
          children: cq(`${JW}rxPerPellet`, {
            amount: iA(Vq)
          })
        })]
      })
    }

    function sW(qq, Eq) {
      var gq;
      if (!qq.baf2RxStore) return {
        note: Eq(`${JW}rxUpTo`, {
          amount: iA(qq.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Yq, lq] = qq.baf2RxStore, Oq = lq > 0 ? Yq / lq : 0, mq = String(Math.floor(100 * Oq)), xq = null !== (gq = qq.baf2RxStoreNetPerS) && void 0 !== gq ? gq : 0, Aq = function(qq) {
        var Eq, gq;
        const [Yq, lq] = null !== (Eq = qq.baf2RxStore) && void 0 !== Eq ? Eq : [0, 0], Oq = null !== (gq = qq.baf2RxStoreNetPerS) && void 0 !== gq ? gq : 0;
        return lq > 0 && Yq >= lq - 1 ? "running" === qq.baf2RxState ? `${BW}rxStoreFull` : `${BW}rxStoreFullOnly` : Oq > .05 ? `${BW}rxStoreLine` : Oq < -.05 ? "running" === qq.baf2RxState ? `${BW}rxStoreUsesMore` : `${BW}rxStoreDraining` : `${BW}rxStorePct`
      }(qq);
      return {
        note: Eq(Aq, Aq === `${JW}rxStoreLine` ? {
          pct: mq,
          time: PO(Eq, (lq - Yq) / xq)
        } : {
          pct: mq
        }),
        share: Oq
      }
    }

    function XW(qq) {
      let {
        view: Eq,
        explain: gq,
        preview: Yq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)(), {
        status: Oq
      } = Eq, mq = Ix(Dx(...Eq.dims)), xq = HW(Oq), Aq = Math.min(Math.round(Oq.baf2RxFuel), mq.fuel), cq = "running" === Oq.baf2RxState, uq = cq ? oW(Oq.baf2RxOut, Oq.baf2RxMaxNow) : 0, Bq = function(qq, Eq, gq) {
        const Yq = VW(qq),
          lq = "cryo" === Yq.wW,
          Oq = gq ? gq.coolantSecs : Yq.pct >= 100 && qq.baf2RxOut >= 1 ? jW(qq, qq.baf2RxThrottle).coolantSecs : null;
        let mq, xq = !1;
        if (Yq.pct < 100) {
          const gq = 1 === Yq.makersShort,
            Oq = !lq && qq.baf2RxCryoOpen ? "OrCryo" : "";
          mq = Yq.makersShort > 0 ? Eq(lq ? `${JW}rxCryoAddMixer${gq?"":"s"}` : `${JW}rxWaterAddCondenser${gq?"":"s"}${Oq}`, {
            count: String(Yq.makersShort)
          }) : Eq(`${JW}rxWaterNeeds`, {
            rate: AW(Yq.needPerS)
          })
        } else if (null !== Oq) mq = Eq(`${JW}rxWaterRunsOut`, {
          time: PO(Eq, Oq)
        });
        else if (Yq.waterBeside > 0) mq = Eq(`${JW}rxCryoPlusWater`, {
          rate: AW(Yq.waterBeside)
        });
        else {
          const qq = function(qq) {
            return qq.inPerS <= 0 ? "rxWaterNoSupply" : qq.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Yq);
          xq = "rxWaterNoSupply" === qq, mq = Eq(`${JW}${qq}`, {
            amount: iA(Yq.stored)
          })
        }
        return {
          kind: lq ? "Cryo" : "Water",
          label: Eq(lq ? `${JW}rxCryo` : `${JW}rxWater`),
          number: `${AW(Yq.usePerS)}/s`,
          preview: gq ? `${AW(gq.coolPerS)}/s` : null,
          note: mq,
          tone: "noWater" === qq.baf2RxState ? "danger" : xq ? "warn" : (Aq = Yq.pct, cq = Oq, Aq < 100 ? "danger" : null === cq ? null : cq < 300 ? "danger" : "warn"),
          share: Yq.pct / 100,
          why: lq ? `${JW}rxWhy_cryo` : `${JW}rxWhy_water`,
          short: Yq.pct < 100
        };
        var Aq, cq
      }(Oq, lq, Yq), Wq = tA(Oq, mq.waste, xq), Nq = sW(Oq, lq), aq = jW(Oq, Oq.baf2RxTarget), Vq = cq && Math.abs(aq.settle - Oq.baf2RxHeat) >= 3, dq = Yq ? Yq.pelletsPerMin / 60 : null;
      return (0, rO.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, rO.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, rO.jsx)(FB, {
            kind: "Fuel",
            label: lq(`${JW}rxFuel`),
            number: String(Aq),
            preview: null !== dq && dq > 0 && Oq.baf2RxFuel > 0 ? PO(lq, Oq.baf2RxFuel / dq) : null,
            note: Oq.baf2RxFuel <= 0 ? lq(`${JW}rxFuelEmpty`) : xq > 0 ? lq(`${JW}rxFuelLeft`, {
              time: PO(lq, Oq.baf2RxFuel / xq)
            }) : lq(1 === Aq ? `${JW}rxFuelPellet` : `${JW}rxFuelPellets`),
            tone: "noFuel" === Oq.baf2RxState ? "danger" : Oq.baf2RxFuel < 2 ? "warn" : null,
            share: Oq.baf2RxFuel / mq.fuel,
            onExplain: () => {
              gq(`${JW}rxWhy_fuel`)
            }
          }), (0, rO.jsx)(FB, {
            kind: Bq.kind,
            label: Bq.label,
            number: Bq.number,
            preview: Bq.preview,
            note: Bq.note,
            tone: Bq.tone,
            share: Bq.share,
            onExplain: () => {
              gq(Bq.why)
            }
          })]
        }), (0, rO.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, rO.jsx)(sB, {
            kind: "Fuel",
            step: uq,
            short: "noFuel" === Oq.baf2RxState
          }), (0, rO.jsx)(sB, {
            kind: Bq.kind,
            step: uq,
            short: Bq.short || "noWater" === Oq.baf2RxState
          })]
        }), (0, rO.jsx)(FW, {
          view: Eq,
          heat: Oq.baf2RxHeat,
          settle: Math.min(dA, aq.settle),
          settleLine: Vq ? lq(`${JW}rxHeatSettles`, {
            pct: String(Math.round(aq.settle)),
            time: PO(lq, aq.settleS)
          }) : null,
          settleBad: aq.settle > 100,
          explain: gq
        }), (0, rO.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, rO.jsx)(sB, {
            kind: "Power",
            step: uq
          }), (0, rO.jsx)(sB, {
            kind: "Waste",
            step: cq && Oq.baf2RxFuel - Oq.baf2RxPu > 0 ? uq : 0,
            short: Wq.full
          })]
        }), (0, rO.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, rO.jsx)(FB, {
            kind: "Power",
            label: lq(`${JW}rxPowerOut`),
            number: `\u26a1 ${iA(Oq.baf2RxOut)}/s`,
            preview: Yq ? iA(Yq.out) : null,
            note: Nq.note,
            share: Nq.share,
            onExplain: () => {
              gq(`${JW}rxWhy_power`)
            }
          }), (0, rO.jsx)(FB, {
            kind: "Waste",
            label: lq(`${JW}rxWaste`),
            number: `${Math.floor(Oq.baf2RxWaste)}/${mq.waste}`,
            note: Wq.full ? lq(`${JW}rxWasteFull`) : null !== Wq.fullInS ? lq(`${JW}rxWasteFullIn`, {
              time: PO(lq, Wq.fullInS)
            }) : lq(`${JW}rxWasteSpent`),
            tone: "wasteFull" === Oq.baf2RxState ? "danger" : Wq.full ? "warn" : null,
            share: Oq.baf2RxWaste / mq.waste,
            onExplain: () => {
              gq(`${JW}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function wW(qq) {
      let {
        view: Eq,
        explain: gq
      } = qq;
      const {
        t: Yq
      } = (0, hl.v)(), lq = Eq.plan;
      if (!lq) return null;
      const Oq = lq.fuelHeat <= 0 ? null : lq.cooling > 0 ? Math.min(dA, 100 * lq.fuelHeat / lq.cooling) : dA,
        mq = Yq(`${JW}rxPlanAtFull`);
      return (0, rO.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, rO.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, rO.jsx)(FB, {
            kind: "Fuel",
            label: Yq(`${JW}rxFuel`),
            number: Yq(`${JW}rxPlanPerMin`, {
              amount: ZA(lq.pelletsPerMin)
            }),
            note: Yq(`${JW}rxPlanPellets`),
            onExplain: () => {
              gq(`${JW}rxWhy_fuel`)
            }
          }), (0, rO.jsx)(FB, {
            kind: "Water",
            label: Yq(`${JW}rxWater`),
            number: `${AW(lq.waterPerS)}/s`,
            note: Eq.status.baf2RxCryoOpen && lq.waterPerS > 0 ? Yq(`${JW}rxPlanOrCryo`, {
              rate: AW(WA(lq, eq.h) * eq.q)
            }) : mq,
            onExplain: () => {
              gq(`${JW}rxWhy_water`)
            }
          })]
        }), (0, rO.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, rO.jsx)(sB, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, rO.jsx)(sB, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, rO.jsx)(FW, {
          view: Eq,
          heat: null,
          settle: Oq,
          settleLine: null === Oq ? null : Yq(`${JW}rxPlanHeat`, {
            pct: String(Math.round(Oq))
          }),
          settleBad: null !== Oq && Oq > 100,
          explain: gq
        }), (0, rO.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, rO.jsx)(sB, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, rO.jsx)(sB, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, rO.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, rO.jsx)(FB, {
            kind: "Power",
            label: Yq(`${JW}rxPowerOut`),
            number: `\u26a1 ${iA(lq.max)}/s`,
            note: mq,
            onExplain: () => {
              gq(`${JW}rxWhy_power`)
            }
          }), (0, rO.jsx)(FB, {
            kind: "Waste",
            label: Yq(`${JW}rxWaste`),
            number: Yq(`${JW}rxPlanPerMin`, {
              amount: ZA(lq.pelletsPerMin)
            }),
            note: Yq(`${JW}rxWasteSpent`),
            onExplain: () => {
              gq(`${JW}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const KW = "buildAFactory2Game:",
      CW = {
        key: `${KW}rxWaiting`,
        params: {},
        tone: "info"
      };

    function IW(qq, Eq) {
      return 0 !== (qq.baf2RxFlags & Eq)
    }

    function eW(qq) {
      var Eq, gq;
      let {
        store: lq,
        close: Oq
      } = qq;
      const {
        t: mq
      } = (0, hl.v)(), xq = OW(lq), {
        explained: Aq,
        hinting: cq,
        explain: uq,
        explainOnce: Bq
      } = wB("baf2RxExplained"), Wq = (0, Yq.useCallback)(((qq, Eq) => {
        uq(mq(qq, Eq))
      }), [uq, mq]), Nq = (0, Yq.useCallback)(((qq, Eq) => {
        Bq(qq, mq(qq, Eq))
      }), [Bq, mq]), [aq, Vq] = (0, Yq.useState)(!1), [dq, jq] = (0, Yq.useState)(!1), Hq = null === xq || void 0 === xq ? void 0 : xq.status, oq = null === Hq || void 0 === Hq ? void 0 : Hq.baf2RxAt.join(","), Pq = !0 === (null === Hq || void 0 === Hq ? void 0 : Hq.baf2RxFormed);
      (0, Yq.useEffect)((() => {
        jq(!1), Vq(!1)
      }), [oq, Pq]), (0, Yq.useEffect)((() => (lq.opened(), () => {
        lq.closed()
      })), [lq]);
      const Qq = void 0 !== Hq && IW(Hq, jE),
        yq = Hq ? Pq ? VA(Hq) : null !== xq && void 0 !== xq && xq.plan ? function(qq, Eq) {
          if (qq <= 0) return "off";
          if (Eq <= 0) return "alarm";
          const gq = 100 * qq / Eq;
          return gq < 50 ? "calm" : gq < AA ? "warm" : gq <= 100 ? "hot" : "alarm"
        }(xq.plan.fuelHeat, xq.plan.cooling) : "off" : "off",
        tq = Hq ? jA(Hq) : null,
        rq = xq ? xq.waiting ? CW : Pq ? yW(xq.status) : function(qq) {
          var Eq, gq;
          const {
            status: Yq
          } = qq;
          return tW({
            left: Yq.baf2RxNeed.reduce(((qq, Eq) => {
              let [, gq] = Eq;
              return qq + gq
            }), 0),
            bad: Yq.baf2RxBad,
            rods: null !== (Eq = null === (gq = qq.plan) || void 0 === gq ? void 0 : gq.rods) && void 0 !== Eq ? Eq : 0,
            canFill: IW(Yq, VE),
            melted: IW(Yq, aE),
            idle: qq.looks.reduce(((qq, Eq) => qq + (Eq === lA ? 1 : 0)), 0)
          })
        }(xq) : null,
        vq = cq && null !== rq && ("ok" === rq.tone || "info" === rq.tone),
        hq = Hq ? function(qq) {
          const Eq = 0 !== (qq.baf2RxFlags & WE),
            gq = qq.baf2RxHeat < wx;
          return 0 !== (qq.baf2RxFlags & aE) || gq && (Eq || !qq.baf2RxFormed) ? null : qq.baf2RxFormed && !Eq ? {
            key: `${aA}rxApartScram`,
            params: {}
          } : {
            key: `${aA}rxApartCooling`,
            params: {
              pct: String(wx)
            }
          }
        }(Hq) : null,
        [nq, bq, iq] = null !== (Eq = null === xq || void 0 === xq ? void 0 : xq.dims) && void 0 !== Eq ? Eq : [0, 0, 0],
        Zq = `${nq}\xd7${bq}\xd7${iq}`;
      return (0, rO.jsx)(Pm.c, {
        close: Oq,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, rO.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, rO.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, rO.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, rO.jsx)(xW, {
                mood: yq
              }), (0, rO.jsxs)("div", {
                children: [(0, rO.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: mq(`${KW}rxTitle`)
                }), xq && (0, rO.jsxs)("p", {
                  className: yl()("Baf2RxSubtitle", Pq && (null === tq || void 0 === tq ? void 0 : tq.tone)),
                  children: [Pq && !Qq ? (0, rO.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": mq(`${KW}rxChangeSize`),
                    onClick: () => {
                      if (!Hq) return;
                      const qq = IW(Hq, WE);
                      var Eq;
                      (Eq = {
                        scram: qq,
                        heat: Hq.baf2RxHeat
                      }).scram && Eq.heat < wx ? Vq(!0) : Wq(qq ? `${KW}rxResizeCooling` : `${KW}rxResizeHot`, {
                        pct: String(wx)
                      })
                    },
                    children: [Zq, " \u270e"]
                  }) : Zq, " \xb7 ", mq(Pq ? null !== (gq = null === tq || void 0 === tq ? void 0 : tq.label) && void 0 !== gq ? gq : `${KW}rxState_running` : `${KW}rxSubPlanShort`)]
                })]
              })]
            }), (0, rO.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [xq && !Qq && (0, rO.jsx)(mW, {
                kind: "reactor",
                busy: xq.busy.has("apart"),
                whyNot: hq ? () => {
                  Wq(hq.key, hq.params)
                } : null,
                apart: () => {
                  lq.tap("apart", (() => {
                    lq.send("apart")
                  }))
                }
              }), (0, rO.jsx)(Qm.m, {
                onClick: Oq
              })]
            })]
          }), xq && rq && (0, rO.jsxs)("div", {
            className: "Baf2RxBody",
            children: [Pq ? (0, rO.jsx)(XW, {
              view: xq,
              explain: Wq,
              preview: dW(xq.status)
            }) : (0, rO.jsx)(wW, {
              view: xq,
              explain: Wq
            }), (0, rO.jsx)(KB, {
              text: vq ? `${PW(mq,rq)} ${mq(`${KW}rxTapHint`)}` : PW(mq, rq),
              tone: rq.tone,
              explained: Aq
            }), Qq ? (0, rO.jsxs)(rO.Fragment, {
              children: [(0, rO.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: mq(`${KW}rxNotYours`)
              }), (0, rO.jsx)(EW, {
                status: xq.status,
                store: lq,
                readOnly: !0
              })]
            }) : Pq && !dq ? (0, rO.jsxs)(rO.Fragment, {
              children: [(0, rO.jsx)(ZW, {
                view: xq,
                store: lq,
                explain: Wq,
                explainOnce: Nq
              }), void 0 !== xq.status.baf2RxLayout && eB(xq.status) && (0, rO.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, rO.jsx)(EW, {
                  status: xq.status,
                  store: lq,
                  readOnly: !1,
                  bare: !0
                }), (0, rO.jsx)(qW, {
                  status: xq.status,
                  store: lq,
                  busy: xq.busy.has("fill")
                })]
              })]
            }) : (0, rO.jsxs)(rO.Fragment, {
              children: [(0, rO.jsx)(fW, {
                view: xq,
                store: lq,
                keepSize: Pq ? () => {
                  jq(!1)
                } : void 0
              }), PA(xq.dims, xq.status.baf2RxDims) && (0, rO.jsx)(MW, {
                need: xq.status.baf2RxNeed,
                explain: Wq
              }), (0, rO.jsx)(EW, {
                status: xq.status,
                store: lq,
                readOnly: !1
              })]
            }), aq && (0, rO.jsx)(lW, {
              id: "baf2ResizeTitle",
              title: `${KW}rxResizeConfirmTitle`,
              body: `${KW}rxResizeConfirmBody`,
              yes: `${KW}rxChangeSize`,
              cancel: () => {
                Vq(!1)
              },
              confirm: () => {
                Vq(!1), jq(!0)
              }
            })]
          })]
        })
      })
    }
    class DW {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(qq) {
        this.view = qq;
        for (const Eq of this.listeners) Eq()
      }
      get() {
        return this.view
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
    }

    function qN(qq) {
      let {
        commands: Eq,
        store: gq,
        power: lq,
        water: Oq,
        reactor: mq,
        battery: xq,
        collider: Aq,
        terminal: cq,
        quests: uq,
        close: Bq,
        leave: Wq,
        askIslands: Nq,
        showCore: aq,
        openSocial: Vq
      } = qq;
      const {
        userContext: dq
      } = (0, Tx.c)(), jq = Mx.featureFlags.useSocialFeatures && dq.isLoggedIn(), [Hq, oq] = (0, Yq.useState)((() => gq.get()));
      (0, Yq.useEffect)((() => gq.subscribe((() => {
        oq(gq.get())
      }))), [gq]);
      const Pq = "islands" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) ? Hq.backToCore : void 0;
      return (0, rO.jsxs)(Jm.Provider, {
        value: Eq,
        children: ["core" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(uB, {
          view: Hq.core,
          close: Bq,
          askIslands: Nq
        }), "dropMap" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(aB, {
          message: Hq.dropMap,
          quests: uq,
          close: Bq,
          leave: Wq
        }), "islands" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(fB, {
          message: Hq.islands,
          arrivedAtMs: Hq.arrivedAtMs,
          close: Pq ? () => {
            aq(Pq)
          } : Bq,
          leave: Wq,
          openSocial: jq ? Vq : null
        }), "quests" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(bu, {
          store: uq,
          close: Bq
        }), "transfer" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(gu, {
          message: Hq.transfer,
          arrivedAtMs: Hq.arrivedAtMs,
          close: Bq,
          leave: Wq
        }), "power" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(Zm, {
          store: lq,
          close: Bq
        }), "water" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(Vx, {
          store: Oq,
          close: Bq
        }), "reactor" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(eW, {
          store: mq,
          close: Bq
        }), "battery" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(zW, {
          store: xq,
          close: Bq
        }), "collider" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(dc, {
          store: Aq,
          close: Bq
        }), "terminal" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind) && (0, rO.jsx)(UB, {
          store: cq,
          close: Bq,
          send: qq => {
            Eq.send(qq)
          }
        })]
      })
    }
    var EN = gq(38471);

    function gN(qq, Eq) {
      return qq.distSq - Eq.distSq
    }
    class YN {
      constructor() {
        this.list = [], this.pool = []
      }
      add(qq, Eq, gq, Yq) {
        let lq = this.pool[this.list.length];
        lq || (lq = {
          x: 0,
          y: 0,
          distSq: 0,
          element: Eq,
          liftRem: gq,
          dot: Yq
        }, this.pool.push(lq)), lq.x = qq.x, lq.y = qq.y, lq.distSq = qq.distSq, lq.element = Eq, lq.liftRem = gq, lq.dot = Yq, this.list.push(lq)
      }
    }
    class lN {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = qq, this.sizes = new WeakMap, this.observer = new ResizeObserver((qq => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const Eq of qq) {
            const qq = Eq.borderBoxSize[0];
            "dot" !== Eq.target.dataset.crowded && 0 !== qq.inlineSize && 0 !== qq.blockSize && this.sizes.set(Eq.target, {
              width: qq.inlineSize,
              height: qq.blockSize
            })
          }
        })), this.remPx = 16, this.jN = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.EQ = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.EQ)
      }
      observe(qq) {
        this.observer.observe(qq)
      }
      unobserve(qq) {
        this.observer.unobserve(qq)
      }
      run(qq) {
        const Eq = qq.list;
        Eq.sort(gN);
        const gq = this.pxPerVw,
          Yq = this.pxPerVh;
        this.jN.length = 0, this.hud && this.jN.push(...this.hud.boxes(performance.now()));
        for (const Oq of Eq) {
          var lq;
          const qq = this.sizes.get(Oq.element);
          let Eq = "no";
          if (qq && qq.width > 0) {
            const lq = Oq.x * gq,
              mq = Oq.y * Yq - Oq.liftRem * this.remPx;
            this.fit(lq, mq, qq.width, qq.height) || (Eq = Oq.dot && this.fit(lq, mq, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (lq = Oq.element.dataset.crowded) && void 0 !== lq ? lq : "no") !== Eq && ("no" === Eq ? delete Oq.element.dataset.crowded : Oq.element.dataset.crowded = Eq), "hidden" !== Eq && (0, EN.d)(Oq.element, Oq.x, Oq.y)
        }
        Eq.length = 0
      }
      fit(qq, Eq, gq, Yq) {
        const lq = qq - gq / 2,
          Oq = qq + gq / 2,
          mq = Eq - Yq,
          xq = this.jN;
        for (let Aq = 0; Aq < xq.length; Aq += 4)
          if (lq < xq[Aq + 1] - 2 && Oq > xq[Aq] + 2 && mq < xq[Aq + 3] - 2 && Eq > xq[Aq + 2] + 2) return !1;
        return xq.push(lq, Oq, mq, Eq), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.EQ)
      }
    }
    const ON = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class mN {
      constructor() {
        this.cards = ON.map((qq => document.getElementsByClassName(qq))), this.watched = ON.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(qq) {
        qq - this.refreshedAt > 1e3 && (this.refreshedAt = qq, this.stale = !0);
        for (let gq = 0; gq < this.cards.length; gq++) {
          var Eq;
          const qq = null !== (Eq = this.cards[gq][0]) && void 0 !== Eq ? Eq : null;
          qq !== this.watched[gq] && this.watch(gq, qq)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let qq = 0; qq < this.watched.length; qq++) this.watch(qq, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const qq = this.list;
        qq.length = 0;
        for (const Eq of this.watched) {
          if (!Eq || Eq.closest(".NoRoom")) continue;
          const gq = Eq.getBoundingClientRect();
          let Yq = gq.top,
            lq = gq.bottom;
          if (Eq === this.watched[0] && this.hud) {
            const qq = this.hud.getBoundingClientRect();
            Yq = Math.max(Yq, qq.top), lq = Math.min(lq, qq.bottom)
          }
          gq.width > 0 && lq > Yq && qq.push(gq.left, gq.right, Yq, lq)
        }
      }
      watch(qq, Eq) {
        const gq = this.watched[qq];
        var Yq, lq;
        (gq && this.sizes.unobserve(gq), this.watched[qq] = Eq, this.stale = !0, Eq && this.sizes.observe(Eq), 0 === qq) && (null === (Yq = this.hud) || void 0 === Yq || Yq.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (lq = null === Eq || void 0 === Eq ? void 0 : Eq.closest(".Baf2QuestHud")) && void 0 !== lq ? lq : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const xN = [0, 0, 0],
      AN = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function cN(qq, Eq, gq, Yq, lq, Oq) {
      let [mq, xq, Aq] = Yq;
      const cq = (mq + .5 - gq[0]) ** 2 + (xq - gq[1]) ** 2 + (Aq + .5 - gq[2]) ** 2;
      let uq = null;
      cq <= Oq ** 2 && (xN[0] = mq + .5, xN[1] = xq + lq, xN[2] = Aq + .5, uq = Eq.projectWorldPosToViewport(xN));
      const Bq = null !== uq && uq.x > -5 && uq.x < 105 && uq.y > -5 && uq.y < 105;
      return (0, EN.e)(qq, !Bq), Bq ? (AN.x = uq.x, AN.y = uq.y, AN.distSq = cq, AN) : null
    }
    class uN {
      constructor(qq) {
        this.onElement = qq, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(qq) {
        const Eq = [];
        for (let gq = 0; gq + 4 < qq.length; gq += 5) {
          const Yq = [qq[gq], qq[gq + 1], qq[gq + 2]];
          Eq.push({
            key: Yq.join(","),
            pos: Yq,
            status: Yl[qq[gq + 3]],
            kind: nE[qq[gq + 4]]
          })
        }
        this.markers = Eq, this.keys = new Set(Eq.map((qq => {
          let {
            key: Eq
          } = qq;
          return Eq
        }))), this.notify()
      }
      covers(qq) {
        return this.keys.has(qq)
      }
      get() {
        return this.markers
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      bind(qq) {
        let Eq = this.refs.get(qq);
        return Eq || (Eq = Eq => {
          const gq = this.elements.get(qq);
          var Yq, lq;
          gq && (null === (Yq = this.onElement) || void 0 === Yq || Yq.call(this, gq, !1));
          Eq ? (this.elements.set(qq, Eq), null === (lq = this.onElement) || void 0 === lq || lq.call(this, Eq, !0)) : (this.elements.delete(qq), this.refs.delete(qq))
        }, this.refs.set(qq, Eq)), Eq
      }
      onAfterRender(qq, Eq, gq) {
        for (const Yq of this.markers) {
          const lq = this.elements.get(Yq.key);
          if (!lq) continue;
          const Oq = cN(lq, qq, Eq, Yq.pos, 1.05, 24);
          Oq && gq.add(Oq, lq, .45, !0)
        }
      }
      notify() {
        for (const qq of this.listeners) qq()
      }
    }
    const BN = {
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
    const WN = (0, Yq.memo)((function(qq) {
        let {
          status: Eq,
          kind: gq,
          bindRef: Yq
        } = qq;
        const {
          t: lq
        } = (0, hl.v)(), Oq = function(qq, Eq) {
          var gq;
          if ("noFuel" === qq) {
            var Yq, lq;
            const qq = null === (Yq = TE[Eq]) || void 0 === Yq || null === (lq = Yq.fuels) || void 0 === lq ? void 0 : lq.find((qq => Yg.includes(qq)));
            return null !== qq && void 0 !== qq ? qq : BN.noFuel
          }
          return void 0 !== (null === (gq = TE[Eq]) || void 0 === gq ? void 0 : gq.cryoMade) ? "noOutlet" === qq ? "Fluid Pipe" : "noInput" === qq ? "Biomass" : BN[qq] : BN[qq]
        }(Eq, gq);
        return (0, rO.jsxs)("div", {
          className: yl()("Baf2StallMarker", Eq),
          ref: Yq,
          hidden: !0,
          children: [Oq && (0, rO.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, rO.jsx)(bl.e, {
              itemName: Oq,
              amount: 0
            })
          }), (0, rO.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === Eq ? "?" : "!"
          }), (0, rO.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: lq(`buildAFactory2Game:stallTag_${Eq}`)
          })]
        })
      })),
      NN = (0, Yq.memo)((function(qq) {
        let {
          controller: Eq
        } = qq;
        const [gq, lq] = (0, Yq.useState)((() => Eq.get()));
        return (0, Yq.useEffect)((() => (lq(Eq.get()), Eq.subscribe((() => {
          lq(Eq.get())
        })))), [Eq]), (0, rO.jsx)("div", {
          className: "Baf2StallMarkers",
          children: gq.map((qq => (0, rO.jsx)(WN, {
            status: qq.status,
            kind: qq.kind,
            bindRef: Eq.bind(qq.key)
          }, qq.key)))
        })
      })),
      aN = Vg.k + 150;
    class VN {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(qq, Eq) {
        const gq = Eq - qq;
        null === this.offset || gq < this.offset ? this.offset = gq : this.offset = Math.min(gq, this.offset + .02 * (Eq - this.sampledAt)), this.sampledAt = Eq
      }
      toLocal(qq) {
        var Eq;
        return qq + (null !== (Eq = this.offset) && void 0 !== Eq ? Eq : 0) + aN
      }
    }
    var dN = gq(38473);
    const jN = 15 * Math.PI / 180,
      HN = Math.SQRT2,
      oN = [4, 2];

    function PN(qq, Eq) {
      const gq = [1 / 0, 1 / 0, 1 / 0],
        Yq = [-1 / 0, -1 / 0, -1 / 0];
      for (const Aq of qq)
        for (let qq = 0; qq < 3; qq++) gq[qq] = Math.min(gq[qq], Aq[qq]), Yq[qq] = Math.max(Yq[qq], Aq[qq]);
      const lq = (gq[0] + Yq[0]) / 2,
        Oq = (gq[1] + Yq[1]) / 2,
        mq = (gq[2] + Yq[2]) / 2;
      let xq = 0;
      for (const Aq of qq) xq = Math.max(xq, Math.hypot(Aq[0] - lq, Aq[1] - Oq, Aq[2] - mq));
      return {
        x: lq,
        y: Oq,
        z: mq,
        r: xq + Eq
      }
    }

    function QN(qq, Eq, gq) {
      const Yq = Eq.x - qq.x,
        lq = Eq.y - qq.y,
        Oq = Eq.z - qq.z,
        mq = Math.sqrt(Yq * Yq + lq * lq + Oq * Oq);
      if (mq <= Eq.r + 8) return 1;
      const xq = Eq.r / mq,
        Aq = Math.sqrt(1 - xq * xq),
        cq = Aq < -qq.cosHalf,
        uq = (Yq * qq.dx + lq * qq.dy + Oq * qq.dz) / mq;
      if (!cq && uq < qq.cosHalf * Aq - qq.sinHalf * xq) return 0;
      const Bq = gq * HN * qq.frameMs * qq.pxPerBlock / (mq - Eq.r);
      for (let Wq = 0; Wq < oN.length; Wq++)
        if (Bq * oN[Wq] <= 1) return oN[Wq];
      return 1
    }

    function yN(qq, Eq) {
      return {
        name: qq,
        at: Eq,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const tN = [0, 0, 0];

    function rN(qq, Eq, gq) {
      let [, Yq, lq, Oq, mq, xq] = Eq;
      const Aq = Vg.e * (null !== mq && void 0 !== mq ? mq : 1),
        cq = [];
      for (let Nq = 0; Nq < Yq.length; Nq += 3) cq.push([Yq[Nq] + .5, Yq[Nq + 1] + .65, Yq[Nq + 2] + .5]);
      const uq = [];
      for (let Nq = 0; Nq < cq.length - 1; Nq++) {
        const [qq, Eq] = [cq[Nq], cq[Nq + 1]];
        uq.push([(qq[0] + Eq[0]) / 2, (qq[1] + Eq[1]) / 2, (qq[2] + Eq[2]) / 2])
      }
      const Bq = cq.slice(1, -1),
        Wq = new Uint8Array(Bq.length);
      for (const Nq of null !== xq && void 0 !== xq ? xq : []) Wq[Nq >> 1] |= 1 & Nq ? 2 : 1;
      return {
        island: qq,
        length: Bq.length,
        loop: Oq,
        cellsPerMs: Aq,
        edges: uq,
        bu: Bq,
        bounds: PN([...uq, ...Bq], .3),
        changed: !0,
        culled: !1,
        hide: Wq,
        items: lq.map((qq => {
          let [Eq, Yq] = qq;
          return yN(Eq, (0, Vg.G)(Eq, Yq, gq, Aq).at)
        }))
      }
    }

    function vN(qq, Eq) {
      const {
        items: gq
      } = qq;
      if (0 === gq.length) return;
      const Yq = qq.length / qq.cellsPerMs,
        lq = Math.floor((Eq - gq[0].at) / Yq) - 1;
      if (lq > 0)
        for (const Oq of gq) Oq.at += lq * Yq
    }

    function hN(qq, Eq) {
      const gq = Math.min(Math.floor(Eq), qq.length - 1),
        Yq = qq.hide[gq];
      return 0 !== Yq && 0 !== (Yq & (Eq - gq < .5 ? 1 : 2))
    }

    function nN(qq, Eq) {
      const gq = Math.min(Math.floor(Eq), qq.length - 1),
        Yq = Eq - gq,
        lq = Yq < .5,
        Oq = lq ? qq.edges[gq] : qq.bu[gq],
        mq = lq ? qq.bu[gq] : qq.edges[gq + 1],
        xq = lq ? 2 * Yq : 2 * Yq - 1;
      tN[0] = Oq[0] + (mq[0] - Oq[0]) * xq, tN[1] = Oq[1] + (mq[1] - Oq[1]) * xq, tN[2] = Oq[2] + (mq[2] - Oq[2]) * xq
    }
    const bN = Math.PI / 4;
    class iN {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new VN, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.EQ = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(qq) {
        const Eq = performance.now();
        this.clock.sample(qq.baf2BeltLinesAt, Eq), this.queue(qq.baf2BeltLinesAt, qq, 0, null, null, 0), this.applyDue(Eq)
      }
      onMoves(qq) {
        const Eq = performance.now(),
          gq = qq.baf2BeltMovesAt;
        this.clock.sample(gq, Eq);
        for (const [Yq, lq, Oq, mq] of qq.baf2BeltMoveList) null === lq ? this.queue(gq - Oq, null, Yq, null, null, null !== mq && void 0 !== mq ? mq : 0) : this.queue(gq - Oq, null, Yq, lq, null !== mq && void 0 !== mq ? mq : null, 0);
        this.applyDue(Eq)
      }
      start(qq) {
        this.pool = new dN.b(qq, {
          scale: .3,
          yaw: bN
        }, 64), this.EQ(), window.addEventListener("resize", this.EQ)
      }
      onAfterRender(qq) {
        const {
          pool: Eq
        } = this;
        if (!Eq) return;
        const gq = performance.now(),
          Yq = gq - this.lastRenderAt;
        this.lastRenderAt = gq, Yq < 100 && (this.frameMs += .1 * (Yq - this.frameMs));
        const lq = gq + this.frameMs;
        this.applyDue(lq);
        const Oq = qq.cameraPosition,
          mq = Eq.follow(Oq);
        this.setView(qq, Oq);
        const xq = this.frame++;
        for (let Aq = 0; Aq < this.shown.length; Aq++) {
          const qq = this.shown[Aq],
            gq = QN(this.view, qq.bounds, qq.cellsPerMs),
            Yq = qq.culled && 0 !== gq;
          if (qq.culled = 0 === gq, !mq && !qq.changed && !Yq && (0 === gq || (xq + Aq) % gq !== 0)) continue;
          qq.changed = !1, qq.loop && (vN(qq, lq), (0, Vg.z)(qq.items, qq.length, lq, qq.cellsPerMs));
          let Oq = qq.length;
          for (let xq = 0; xq < qq.items.length; xq++) {
            const gq = qq.items[xq],
              Yq = (0, Vg.J)(gq.at, Oq, lq, qq.cellsPerMs);
            if (Oq = Yq - Vg.q, hN(qq, Yq)) {
              null === gq.kind || gq.hidden || (gq.kind.hide(gq.slot), gq.hidden = !0);
              continue
            }
            let Aq = gq.kind;
            if (null === Aq) {
              if (Aq = Eq.kindOf(gq.name), null === Aq) continue;
              gq.kind = Aq, gq.slot = Aq.take(), gq.hidden = !0, gq.drawn = NaN
            } else if (Yq === gq.drawn && !gq.hidden && !mq) continue;
            nN(qq, Yq), Aq.write(gq.slot, tN[0], tN[1], tN[2]), gq.hidden = !1, gq.drawn = Yq
          }
        }
        Eq.commit()
      }
      dispose() {
        var qq;
        window.removeEventListener("resize", this.EQ), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (qq = this.pool) || void 0 === qq || qq.dispose(), this.pool = null
      }
      setView(qq, Eq) {
        const {
          cameraDir: gq,
          lastDir: Yq
        } = this, lq = qq.cameraDirection;
        for (let uq = 0; uq < 3; uq++) Yq[uq] = gq[uq], gq[uq] = lq[uq];
        const Oq = gq[0] * Yq[0] + gq[1] * Yq[1] + gq[2] * Yq[2],
          mq = Number.isNaN(Oq) ? 0 : Math.acos(Math.min(1, Math.max(-1, Oq))),
          {
            width: xq,
            height: Aq
          } = this,
          cq = qq.tanHalfFovX;
        ! function(qq, Eq, gq, Yq, lq, Oq, mq) {
          let xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          qq.x = Eq[0], qq.y = Eq[1], qq.z = Eq[2], qq.dx = gq[0], qq.dy = gq[1], qq.dz = gq[2];
          const Aq = Math.min(Math.PI, Math.atan(Math.sqrt(Yq * Yq + lq * lq)) + jN + xq);
          qq.cosHalf = Math.cos(Aq), qq.sinHalf = Math.sin(Aq), qq.pxPerBlock = Oq / (2 * lq), qq.frameMs = mq
        }(this.view, Eq, gq, cq, cq * Aq / xq, Aq * window.devicePixelRatio, this.frameMs, mq)
      }
      queue(qq, Eq, gq, Yq, lq, Oq) {
        const mq = Math.max(this.clock.toLocal(qq), this.lastPendingAt);
        this.lastPendingAt = mq, this.pending.push({
          at: mq,
          lines: Eq,
          line: gq,
          name: Yq,
          pos: lq,
          idx: Oq
        })
      }
      applyDue(qq) {
        const {
          pending: Eq
        } = this;
        for (; this.pendingHead < Eq.length && Eq[this.pendingHead].at <= qq;) {
          const qq = Eq[this.pendingHead++];
          if (qq.lines) this.applyLines(qq.lines, qq.at), qq.lines = null;
          else {
            const Eq = this.lines.get(qq.line);
            Eq && this.applyMove(Eq, qq, qq.at)
          }
        }
        this.pendingHead === Eq.length ? (Eq.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > Eq.length && (Eq.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(qq, Eq) {
        this.clearIsland(qq.baf2BeltIsland);
        for (const gq of qq.baf2BeltLineList) this.lines.set(gq[0], rN(qq.baf2BeltIsland, gq, Eq));
        this.shown = [...this.lines.values()]
      }
      applyMove(qq, Eq, gq) {
        let {
          name: Yq,
          pos: lq,
          idx: Oq
        } = Eq;
        qq.changed = !0, qq.loop && (vN(qq, gq), (0, Vg.z)(qq.items, qq.length, gq, qq.cellsPerMs)), null !== Yq && null !== lq ? (0, Vg.D)(qq.items, qq.length, yN(Yq, gq), lq, gq, qq.cellsPerMs) : null !== Yq ? qq.items.push(yN(Yq, gq)) : qq.items.length > Oq && this.release((0, Vg.N)(qq.items, qq.length, gq, qq.cellsPerMs, Oq))
      }
      clearIsland(qq) {
        for (const [Eq, gq] of this.lines)
          if (gq.island === qq) {
            for (const qq of gq.items) this.release(qq);
            this.lines.delete(Eq)
          }
      }
      release(qq) {
        null !== qq.kind && (qq.kind.release(qq.slot), qq.kind = null, qq.slot = -1, qq.hidden = !0, qq.drawn = NaN)
      }
    }
    var ZN = gq(36648),
      fN = gq(38479);

    function MN(qq) {
      let {
        depth: Eq,
        store: gq,
        t: lq
      } = qq;
      const Oq = function(qq) {
        const [Eq, gq] = (0, Yq.useState)(qq.lastPlayerY());
        return (0, Yu.f)(Sl, gq), (0, Yq.useEffect)((() => {
          gq(qq.lastPlayerY())
        }), [qq]), Eq
      }(gq);
      if (null === Oq) return null;
      const [mq, xq] = Eq, Aq = Oq > mq ? mq : null !== xq && Oq < xq ? xq : null, cq = {
        y: oO(Oq),
        target: null === Aq ? "" : oO(Aq)
      };
      return (0, rO.jsx)("span", {
        className: yl()("Baf2QuestDepth", {
          Reached: null === Aq
        }),
        children: lq(`${xu}${null===Aq?"questDepthReached":"questDepth"}`, cq)
      })
    }

    function TN(qq) {
      let {
        also: Eq,
        view: gq,
        t: Yq
      } = qq;
      return (0, rO.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, rO.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, rO.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, rO.jsx)("strong", {
            children: Yq(`${xu}questAlsoDownHere`)
          }), (0, rO.jsx)("span", {
            className: "Baf2QuestChips",
            children: Eq.map((qq => {
              let [Eq, lq, Oq, mq] = qq;
              return (0, rO.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Yq(`${xu}questAlsoItem`, {
                  item: cu(Yq, gq.itemNames[Eq], Eq),
                  have: String(lq),
                  need: String(Oq)
                }),
                children: [(0, rO.jsx)(Wu, {
                  item: Eq
                }), (0, rO.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${lq}/${Oq}`
                }), null !== mq && (0, rO.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Yq(`${xu}questAlsoDepth`, {
                    y: oO(mq)
                  })
                })]
              }, Eq)
            }))
          })]
        })]
      })
    }
    var zN = gq(3273);

    function SN(qq) {
      let {
        expanded: Eq,
        inventoryOpen: gq,
        children: lq
      } = qq;
      const Oq = (0, Yq.useRef)(null);
      return (0, Yq.useEffect)((() => {
        const qq = Oq.current,
          Eq = null === qq || void 0 === qq ? void 0 : qq.closest(".RightElements"),
          Yq = null === qq || void 0 === qq ? void 0 : qq.firstElementChild;
        if (!qq || !Eq || !Yq) return;
        return (0, fN.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Eq, Yq], (() => {
          const lq = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === lq.length) return;
          const Oq = Math.max(...lq.map((qq => qq.getBoundingClientRect().bottom))),
            mq = Eq.getBoundingClientRect(),
            xq = gq ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (xq) {
            const Eq = parseFloat(getComputedStyle(Yq).marginLeft) + parseFloat(getComputedStyle(Yq).marginRight),
              gq = mq.right - xq.getBoundingClientRect().right - 8 - Eq;
            qq.style.setProperty("--baf2-quest-room", `${gq}px`), qq.classList.toggle("NoRoom", gq < 150)
          } else qq.style.removeProperty("--baf2-quest-room"), qq.classList.remove("NoRoom");
          const Aq = Oq - mq.top + 8,
            cq = function(qq, Eq, gq) {
              const Yq = Eq.getBoundingClientRect(),
                lq = qq.getBoundingClientRect(),
                Oq = (0, zN.g)(lq.left, lq.right, Yq.top + gq);
              if (null !== Oq && Oq < Yq.bottom) return Oq - Yq.top;
              return Yq.height - (parseFloat(getComputedStyle(Eq).paddingBottom) || 0)
            }(qq, Eq, Aq) - 8,
            uq = window.innerHeight / 2 - mq.top,
            {
              top: Bq,
              maxHeight: Wq
            } = function(qq, Eq, gq, Yq, lq) {
              const Oq = Math.min(gq, Math.max(0, Eq - qq)),
                mq = lq ? qq : Math.max(qq, Math.min(Yq - Oq / 2, Eq - Oq));
              return {
                top: mq,
                maxHeight: Math.max(0, Eq - mq)
              }
            }(Aq, cq, function(qq) {
              const Eq = qq.firstElementChild,
                gq = Eq ? Eq.scrollHeight - Eq.clientHeight : 0;
              return qq.getBoundingClientRect().height + Math.max(0, gq)
            }(Yq), uq, yO());
          qq.style.top = `${Bq}px`, qq.style.maxHeight = `${Wq}px`
        }))
      }), [gq]), (0, rO.jsx)("div", {
        ref: Oq,
        className: yl()("Baf2QuestHud", {
          Expanded: Eq
        }),
        children: lq
      })
    }

    function pN(qq) {
      let {
        amount: Eq,
        t: gq
      } = qq;
      return (0, rO.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, rO.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, rO.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: gq(`${xu}questStepsDone`, {
            amount: String(Eq)
          })
        })]
      })
    }

    function GN(qq) {
      let {
        pulse: Eq
      } = qq;
      return 0 === Eq ? null : (0, rO.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, Eq)
    }

    function LN(qq) {
      var Eq;
      let {
        store: gq
      } = qq;
      const lq = (0, Yu.h)(zl, gq.get()),
        [Oq, mq] = (0, Yq.useState)(!1),
        {
          t: xq
        } = (0, hl.v)(),
        Aq = function() {
          const [qq, Eq] = (0, Yq.useState)(yO);
          return (0, Yq.useEffect)((() => (Eq(yO()), tO(Eq))), []), qq
        }(),
        {
          openInGameMenuName: cq,
          openEverythingMenuName: uq
        } = (0, ol.j)(["openInGameMenuName", "openEverythingMenuName"]),
        Bq = "inventory" === cq && null === uq,
        Wq = null !== cq && !Bq || null !== uq;
      if (! function(qq) {
          return null !== qq.name || null !== qq.side
        }(lq) || Wq || "off" === lq.tutorial) return null;
      const Nq = Rl(lq.rows),
        aq = Nq.filter((qq => qq.done)).length,
        Vq = function(qq, Eq) {
          const gq = sl(qq);
          let Yq = 0;
          return qq.filter(((qq, lq) => !!qq.justFinished || !(qq.done || lq < gq || Yq > Eq) && (Yq++, !0)))
        }(lq.rows, Aq ? 0 : 2),
        dq = Aq ? Vq : function(qq, Eq) {
          const gq = Eq.filter((qq => !qq.justFinished));
          if (gq.length < 2) return [...Eq];
          const Yq = qq.indexOf(gq[0]),
            lq = qq.indexOf(gq[gq.length - 1]),
            Oq = new Set(Rl(qq));
          return qq.filter(((qq, gq) => Eq.includes(qq) || qq.done && Oq.has(qq) && gq > Yq && gq < lq))
        }(lq.rows, Vq),
        jq = Oq ? lq.rows : dq,
        Hq = Oq || Aq ? [] : function(qq, Eq) {
          const gq = new Array(Eq.length + 1).fill(0),
            Yq = new Set(Rl(qq));
          let lq = 0;
          for (const Oq of qq) lq < Eq.length && Oq === Eq[lq] ? lq++ : Oq.done && Yq.has(Oq) && gq[lq]++;
          return gq
        }(lq.rows, dq),
        oq = Oq || dq.length < lq.rows.length || null !== lq.reward,
        Pq = kl(lq),
        Qq = Pq ? xq(`${xu}questLineComplete`) : lq.tier ? Vu(xq, lq.tier) : xq(`${xu}currentQuest`),
        yq = function(qq) {
          var Eq, gq;
          if (kl(qq)) return null;
          const Yq = null === (Eq = qq.chapters) || void 0 === Eq ? void 0 : Eq.find((Eq => {
            let [gq] = Eq;
            return gq === qq.tier
          }));
          if (!Yq) return null;
          const lq = Yq[1].filter((qq => !qq[4]));
          if (0 === lq.length) return null;
          const Oq = null === (gq = qq.name) || void 0 === gq ? void 0 : gq[0],
            mq = qq => lq.findIndex((Eq => Eq[0] === Oq && (!qq || !Eq[3]))),
            xq = mq(!0),
            Aq = xq >= 0 ? xq : mq(!1);
          if (Aq >= 0) return [Aq + 1, lq.length];
          const cq = lq.filter((qq => qq[3])).length;
          return [Math.min(cq + 1, lq.length), lq.length]
        }(lq);
      return (0, rO.jsx)(ZN.g, {
        placement: "topRight",
        children: (0, rO.jsx)(SN, {
          expanded: Oq,
          inventoryOpen: Bq,
          children: (0, rO.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: Au,
            children: [null !== lq.name && (0, rO.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, rO.jsx)(GN, {
                pulse: lq.pulse
              }), (0, rO.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, rO.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Qq, yq && (0, rO.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": xq(`${xu}questPlaceLabel`, {
                      n: String(yq[0]),
                      total: String(yq[1])
                    }),
                    children: xq(`${xu}questPlace`, {
                      n: String(yq[0]),
                      total: String(yq[1])
                    })
                  }), lq.tier && lq.core && !Pq && (0, rO.jsx)(du, {
                    core: lq.core,
                    t: xq
                  })]
                })
              }), (0, rO.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: xq(`${xu}${lq.name[0]}`, uu(lq.name[1]))
              }), (Nq.length > 1 || oq) && (0, rO.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Nq.length > 1 && (0, rO.jsx)(ju, {
                  rows: Nq,
                  t: xq
                }), oq && (0, rO.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Oq,
                  onClick: () => {
                    mq(!Oq)
                  },
                  children: [(0, rO.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: xq(`${xu}questStepsToggle`, {
                      done: String(aq),
                      total: String(Nq.length)
                    })
                  }), (0, rO.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Oq ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, rO.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [jq.map(((qq, Eq) => {
                  var Oq;
                  const mq = qq.current && lq.depth;
                  return (0, rO.jsxs)(Yq.Fragment, {
                    children: [(null !== (Oq = Hq[Eq]) && void 0 !== Oq ? Oq : 0) > 0 && (0, rO.jsx)(pN, {
                      amount: Hq[Eq],
                      t: xq
                    }), (0, rO.jsx)(Hu, {
                      row: qq,
                      view: lq,
                      t: xq,
                      extra: mq && (0, rO.jsx)(MN, {
                        depth: mq,
                        store: gq,
                        t: xq
                      })
                    })]
                  }, qq.id)
                })), (null !== (Eq = Hq[jq.length]) && void 0 !== Eq ? Eq : 0) > 0 && (0, rO.jsx)(pN, {
                  amount: Hq[jq.length],
                  t: xq
                }), lq.also.length > 0 && (0, rO.jsx)(TN, {
                  also: lq.also,
                  view: lq,
                  t: xq
                })]
              }), Oq && lq.reward && (0, rO.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [xq(`${xu}questReward`), (0, rO.jsx)(Wu, {
                  item: lq.reward
                }), cu(xq, lq.itemNames[lq.reward], lq.reward)]
              })]
            }), lq.side && (0, rO.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Ll(lq, Date.now()) && (0, rO.jsx)(GN, {
                pulse: lq.sideCameUpAt
              }), (0, rO.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: xq(`${xu}questSide`)
              }), (0, rO.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: xq(`${xu}${lq.side.name[0]}`, uu(lq.side.name[1]))
              }), (0, rO.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, rO.jsx)(Hu, {
                  row: lq.side.row,
                  view: lq,
                  t: xq
                })
              })]
            })]
          })
        })
      })
    }
    const JN = "baf2ToastView";
    class kN {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = qq, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: qq,
          holdMs: Eq
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const qq = this.dropCovered();
          qq && this.show(qq.message, qq.holdMs)
        }), 250));
        const gq = this.dropCovered();
        null !== gq && (gq.holdMs > 0 || "baf2ToastCelebrate" === gq.message.baf2ToastStyle) && "baf2ToastCelebrate" !== qq.baf2ToastStyle && this.show(gq.message, gq.holdMs);
        const Yq = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== qq.baf2ToastStyle && Yq > 0) return this.pending = {
          message: qq,
          holdMs: Eq
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const qq = this.pending;
          this.pending = null, qq && this.present(qq.message, qq.holdMs)
        }), Yq));
        this.present(qq, Eq)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(qq, Eq) {
        this.clearTimers(), this.pending = null;
        const gq = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: qq.baf2ToastText,
          style: qq.baf2ToastStyle,
          swapped: gq,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === qq.baf2ToastStyle ? 1500 : Eq), this.TV();
        const Yq = Math.min(8e3, Math.max(1e3, qq.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Yq)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.TV(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.TV()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const qq = this.covering;
        return this.covering = null, qq
      }
      TV() {
        Ml.i.TV(JN, this.view, !0)
      }
    }
    var RN = gq(71);
    const UN = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function FN(qq) {
      let {
        store: Eq
      } = qq;
      const gq = (0, Yu.h)(JN, Eq.get()),
        {
          openInGameMenuName: Yq,
          openEverythingMenuName: lq
        } = (0, ol.j)(["openInGameMenuName", "openEverythingMenuName"]),
        Oq = gq && (0, rO.jsxs)("div", {
          className: yl()("Baf2Toast", UN[gq.style], {
            Swapped: gq.swapped,
            Leaving: gq.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === gq.style && (0, rO.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, rO.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, rO.jsx)(il.c, {
              text: gq.text
            })
          })]
        }, gq.id);
      return null !== Yq && null === lq ? (0, RN.createPortal)((0, rO.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Oq
      }), document.body) : (0, rO.jsx)(ZN.g, {
        children: Oq
      })
    }
    const sN = "baf2AreaView";
    class XN {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Fc = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Fc = null
      }
      arrive(qq, Eq) {
        Eq && function(qq) {
          return "home" === qq.baf2AreaPlace && void 0 !== qq.baf2AreaNameText
        }(qq) ? this.Fc = qq : this.show(qq)
      }
      release() {
        const qq = this.Fc;
        null !== qq && this.show(qq)
      }
      show(qq) {
        this.clearTimer(), this.Fc = null;
        const Eq = void 0 === qq.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: qq,
          ms: Eq
        }, this.TV(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.TV()
        }), Eq)
      }
      dispose() {
        this.clearTimer(), this.Fc = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      TV() {
        Ml.i.TV(sN, this.view, !0)
      }
    }

    function wN(qq) {
      var Eq;
      let {
        store: gq
      } = qq;
      const {
        t: Yq
      } = (0, hl.v)(), lq = (0, Yu.h)(sN, gq.get());
      if (!lq) return null;
      const {
        area: Oq
      } = lq, mq = Oq.baf2AreaResetMinutes;
      return (0, rO.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Oq.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${lq.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, rO.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Oq.baf2AreaHeading && (0, rO.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Yq(Oq.baf2AreaHeading)
        }), (0, rO.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (Eq = Oq.baf2AreaNameText) && void 0 !== Eq ? Eq : Yq(Oq.baf2AreaName)
        }), Oq.baf2AreaNote && (0, rO.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Yq(Oq.baf2AreaNote)
        }), void 0 !== mq && (0, rO.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Yq("buildAFactory2Game:areaWildsReset", {
            time: PO(Yq, 60 * mq)
          })
        })]
      }, lq.id)
    }
    const KN = "baf2GearGauge";
    class CN {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      vy(qq) {
        var Eq;
        if (this.clearLinger(), null === qq.gearPowerKind) return void this.set(null);
        const gq = "jetpack" === qq.gearPowerKind && (Yq = qq.gearChargeState, lq = qq.gearCharge, "flying" === Yq || "charging" === Yq || "outOfCharge" === Yq || "ceiling" === Yq || "offPlot" === Yq || "noPower" === Yq && lq <= 0);
        var Yq, lq;
        const Oq = !0 === (null === (Eq = this.view) || void 0 === Eq ? void 0 : Eq.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          mq = gq || "jetpack" === qq.gearPowerKind && Oq;
        this.set({
          gauge: qq,
          jetShown: mq
        }), mq && !gq && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(qq) {
        this.view = qq, Ml.i.TV(KN, qq, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const IN = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function eN(qq) {
      let {
        store: Eq
      } = qq;
      const gq = (0, Yu.h)(KN, Eq.get());
      return gq ? "jetpack" === gq.gauge.gearPowerKind ? (0, rO.jsx)(DN, {
        view: gq
      }) : (0, rO.jsx)(qa, {
        gauge: gq.gauge
      }) : null
    }

    function DN(qq) {
      let {
        view: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)(), {
        gauge: Yq
      } = Eq, lq = Yq.gearChargeMax > 0 ? Math.max(0, Math.min(1, Yq.gearCharge / Yq.gearChargeMax)) : 0, Oq = IN[Yq.gearChargeState], mq = Oq ? gq(Oq) : null;
      return (0, rO.jsxs)("div", {
        className: yl()("Baf2JetArc", {
          Shown: Eq.jetShown,
          Low: lq < .2,
          Warm: lq >= .2 && lq < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - lq)
        },
        "aria-hidden": !Eq.jetShown,
        children: [(0, rO.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, rO.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Ea,
            pathLength: 100
          }), (0, rO.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Ea,
            pathLength: 100
          })]
        }), (0, rO.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * lq), "%"]
        }), mq && (0, rO.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: mq
        })]
      })
    }

    function qa(qq) {
      let {
        gauge: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)(), Yq = function(qq, Eq) {
        switch (Eq.gearPowerKind) {
          case "skyPack":
            return qq("buildAFactory2Game:gearSkyPack", {
              charge: Eq.gearCharge,
              max: Eq.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return qq("buildAFactory2Game:gearIslandDraw", {
              power: Iq(Eq.gearIslandPower),
              cost: Iq(Eq.gearCostPerUse)
            });
          case "barrier":
            return qq("buildAFactory2Game:gearBarrier", {
              shield: Math.round(Eq.gearCharge),
              max: Eq.gearChargeMax,
              power: Iq(Eq.gearIslandPower)
            });
          default:
            return null
        }
      }(gq, Eq);
      return null === Yq ? null : (0, rO.jsx)(ZN.g, {
        children: (0, rO.jsx)("div", {
          className: yl()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === Eq.gearChargeState || "outOfCharge" === Eq.gearChargeState
          }),
          role: "status",
          children: Yq
        })
      })
    }
    const Ea = (() => {
      const qq = qq => {
        const Eq = qq * Math.PI / 180;
        return `${(40*Math.cos(Eq)).toFixed(2)} ${(40*Math.sin(Eq)).toFixed(2)}`
      };
      return `M ${qq(160)} A 40 40 0 1 1 ${qq(380)}`
    })();
    class ga {
      constructor(qq) {
        this.onElement = qq, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      vy(qq) {
        let Eq = qq.baf2LabelsReset || qq.baf2LabelsIsland !== this.island;
        Eq && (this.labels.clear(), this.island = qq.baf2LabelsIsland);
        for (const [gq, Yq, lq, Oq, mq] of qq.baf2LabelsList) {
          const qq = `${gq},${Yq},${lq}`,
            xq = this.labels.get(qq);
          null === Oq ? Eq = this.labels.delete(qq) || Eq : xq && xq.item === Oq && (xq.count === mq || xq.count >= 0 && mq >= 0) ? xq.count !== mq && (xq.count = mq, this.writeCount(qq, mq)) : (this.labels.set(qq, {
            key: qq,
            pos: [gq, Yq, lq],
            item: Oq,
            count: mq
          }), this.writeCount(qq, mq), Eq = !0)
        }
        if (this.changes++, Eq) {
          this.snapshot = [...this.labels.values()];
          for (const qq of this.listeners) qq()
        }
      }
      bindCount(qq) {
        const Eq = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${qq}`;
        let gq = this.countRefs.get(Eq);
        return gq || (gq = gq => {
          var Yq, lq;
          gq ? (this.countElements.set(Eq, gq), this.writeCount(qq, null !== (Yq = null === (lq = this.labels.get(qq)) || void 0 === lq ? void 0 : lq.count) && void 0 !== Yq ? Yq : -1)) : (this.countElements.delete(Eq), this.countRefs.delete(Eq))
        }, this.countRefs.set(Eq, gq)), gq
      }
      setCountWords(qq) {
        this.countWords = qq;
        for (const [Eq, gq] of this.labels) this.writePart(`words|${Eq}`, qq(gq.count), gq.count)
      }
      writeCount(qq, Eq) {
        this.writePart(`bare|${qq}`, HO(Eq), Eq), this.countElements.has(`words|${qq}`) && this.writePart(`words|${qq}`, this.countWords(Eq), Eq)
      }
      writePart(qq, Eq, gq) {
        const Yq = this.countElements.get(qq);
        if (!Yq || gq < 0) return;
        const lq = Yq.firstChild;
        lq && 3 === lq.nodeType && !lq.nextSibling ? lq.nodeValue !== Eq && (lq.nodeValue = Eq) : Yq.textContent !== Eq && (Yq.textContent = Eq)
      }
      list() {
        return this.snapshot
      }
      at(qq) {
        return this.labels.get(`${qq[0]},${qq[1]},${qq[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      bind(qq) {
        let Eq = this.refs.get(qq);
        return Eq || (Eq = Eq => {
          const gq = this.elements.get(qq);
          var Yq, lq;
          gq && (null === (Yq = this.onElement) || void 0 === Yq || Yq.call(this, gq, !1));
          Eq ? (this.elements.set(qq, Eq), null === (lq = this.onElement) || void 0 === lq || lq.call(this, Eq, !0)) : (this.elements.delete(qq), this.refs.delete(qq))
        }, this.refs.set(qq, Eq)), Eq
      }
      onAfterRender(qq, Eq, gq, Yq) {
        for (const lq of this.snapshot) {
          const Oq = this.elements.get(lq.key);
          if (!Oq) continue;
          if (Yq(lq.key)) {
            (0, EN.e)(Oq, !0);
            continue
          }
          const mq = cN(Oq, qq, Eq, lq.pos, 1.1, 24);
          mq && gq.add(mq, Oq, 0, !1)
        }
      }
    }
    const Ya = (0, Yq.memo)((function(qq) {
        let {
          item: Eq
        } = qq;
        return (0, rO.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, rO.jsx)(bl.e, {
            itemName: Eq,
            amount: 0
          })
        })
      })),
      la = (0, Yq.memo)((function(qq) {
        let {
          label: Eq,
          bindRef: gq,
          countRef: Yq,
          wordsRef: lq
        } = qq;
        return (0, rO.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: gq,
          hidden: !0,
          children: [(0, rO.jsx)(Ya, {
            item: Eq.item
          }), Eq.count >= 0 && (0, rO.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, rO.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: lq
            }), (0, rO.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Yq
            })]
          })]
        })
      })),
      Oa = (0, Yq.memo)((function(qq) {
        let {
          store: Eq
        } = qq;
        const {
          t: gq
        } = (0, hl.v)(), [lq, Oq] = (0, Yq.useState)((() => Eq.list()));
        return (0, Yq.useEffect)((() => (Oq(Eq.list()), Eq.subscribe((() => {
          Oq(Eq.list())
        })))), [Eq]), (0, Yq.useEffect)((() => {
          Eq.setCountWords((qq => gq("buildAFactory2Game:labelSiloCount", {
            count: HO(qq)
          })))
        }), [Eq, gq]), (0, rO.jsx)("div", {
          className: "Baf2IslandLabels",
          children: lq.map((qq => -2 === qq.count ? null : (0, rO.jsx)(la, {
            label: qq,
            bindRef: Eq.bind(qq.key),
            countRef: Eq.bindCount(qq.key),
            wordsRef: Eq.bindCount(qq.key, "words")
          }, qq.key)))
        })
      })),
      ma = {
        read: () => !0,
        write: () => {}
      };

    function xa(qq) {
      return `${qq[0]},${qq[1]},${qq[2]}`
    }

    function Aa(qq) {
      let [Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq] = qq;
      const Nq = void 0 === Bq || void 0 === Wq ? function(qq) {
        return [Math.floor((qq - 1) / 2), 0]
      }(Oq) : [Bq, Wq];
      return {
        kind: 0 === Aq ? "reactor" : "battery",
        box: Rg([Eq, gq, Yq], lq, Oq, mq, xq, Nq),
        formed: 1 === cq,
        level: uq
      }
    }
    class ca {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ma;
        this.guideSetting = qq, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = qq.read()
      }
      vy(qq) {
        var Eq;
        const gq = new Map;
        for (const Yq of qq.baf2RxPlanList) {
          const qq = Aa(Yq);
          gq.set(xa(qq.box.ctrl), qq)
        }
        this.plans = gq, this.layouts = new Map((null !== (Eq = qq.baf2RxLayouts) && void 0 !== Eq ? Eq : []).map((qq => {
          let [Eq, gq, Yq, lq] = qq;
          return [xa([Eq, gq, Yq]), lq]
        }))), this.predicted.clear(), qq.baf2RxFormedAt && (this.formed = {
          ctrl: qq.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Yq of [...this.startersOff]) {
          const qq = gq.get(Yq);
          qq && !qq.formed || this.startersOff.delete(Yq)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((qq => this.planByKey(qq)))
      }
      planAt(qq) {
        return this.planByKey(xa(qq))
      }
      predictSize(qq, Eq) {
        this.predicted.set(xa(qq), Eq), this.changed()
      }
      unpredict(qq) {
        this.predicted.delete(xa(qq)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(qq) {
        var Eq;
        const gq = xa(qq);
        return this.predicted.has(gq) ? null : null !== (Eq = this.layouts.get(gq)) && void 0 !== Eq ? Eq : null
      }
      showsStarter(qq) {
        return !this.startersOff.has(xa(qq))
      }
      setStarter(qq, Eq) {
        const gq = xa(qq);
        Eq ? this.startersOff.delete(gq) : this.startersOff.add(gq), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(qq) {
        this.guide = qq, this.guideSetting.write(qq), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(qq) {
        const Eq = this.plans.get(qq);
        if (!Eq) return null;
        const gq = this.predicted.get(qq);
        return gq ? {
          ...Eq,
          box: Fg(Eq.box, Eq.kind, gq[0], gq[1], gq[2])
        } : Eq
      }
      changed() {
        this.version++;
        for (const qq of this.listeners) qq()
      }
    }
    var ua = gq(190);
    const Ba = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Wa(qq, Eq, gq, Yq) {
      const lq = qq.length / 3;
      for (let Oq = 0; Oq < Ba.length / 3; Oq++) qq.push(Ba[3 * Oq] * Yq[0] / 2 + gq[0], Ba[3 * Oq + 1] * Yq[1] / 2 + gq[1], Ba[3 * Oq + 2] * Yq[2] / 2 + gq[2]);
      for (let Oq = lq; Oq < lq + 24; Oq += 4) Eq.push(Oq, Oq + 1, Oq + 2, Oq, Oq + 2, Oq + 3)
    }

    function Na(qq, Eq, gq) {
      const Yq = Eq[0][0],
        lq = [],
        Oq = [];
      for (const [mq, xq] of Eq) Wa(lq, Oq, [mq[0] - Yq[0], mq[1] - Yq[1], mq[2] - Yq[2]], xq);
      return qq.createGameMesh({
        positions: lq,
        indices: Oq
      }, gq, Yq)
    }

    function aa(qq, Eq) {
      const gq = qq.w - 2,
        Yq = qq.d - 2;
      return 1 === function(qq, Eq, gq, Yq) {
        const [lq, Oq, mq] = qq;
        if (Number(lq <= 2) + Number(Oq <= 2) + Number(mq <= 2) >= 2) return function(qq, Eq, gq) {
          return (qq + Eq + gq) % 2 === 0 ? 1 : 3
        }(Eq, gq, Yq);
        const [xq, Aq] = lq >= Oq && lq >= mq ? [gq, Yq] : Oq >= mq ? [Eq, Yq] : [Eq, gq];
        return xq % 2 === 0 && Aq % 2 === 0 ? 1 : 3
      }([gq, qq.h - 2, Yq], Eq % gq, Math.floor(Eq / (gq * Yq)), Math.floor(Eq / gq) % Yq) ? "rod" : "channel"
    }

    function Va(qq, Eq, gq) {
      if ("reactor" !== qq.kind || qq.formed || !Eq) return !1;
      const Yq = wg(qq.box);
      for (let lq = 0; lq < Yq; lq++) {
        const qq = gq(lq);
        if (null !== qq && ig(qq)) return !1
      }
      return !0
    }

    function da(qq, Eq, gq, Yq, lq) {
      var Oq;
      let mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const xq = qY(qq.box, Eq),
        Aq = lY(qq.kind, xq, gq);
      if ("wrong" === Aq || "blocked" === Aq) return "wrong";
      if (!lq) return null;
      if ("inside" === xq && "reactor" === qq.kind && "Air" === Zg(gq)) {
        if (null !== mq) {
          var cq;
          const gq = CB[IB(mq, EY(qq.box, Eq))];
          return gq && null !== (cq = vA(gq)) && void 0 !== cq ? cq : null
        }
        if (Yq) return aa(qq.box, EY(qq.box, Eq))
      }
      if ("missing" !== Aq) return null;
      const uq = OY(qq.kind, xq);
      return null === uq ? null : null !== (Oq = vA(uq)) && void 0 !== Oq ? Oq : null
    }
    const ja = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Ha(qq, Eq, gq) {
      const Yq = gq => {
        const Yq = Eq(eg(qq.box, gq));
        return null !== Yq && function(qq, Eq) {
          return "reactor" !== qq.kind || Eq !== Cg(qq.box) && "inside" !== qY(qq.box, Eq)
        }(qq, gq) && "ok" !== lY(qq.kind, qY(qq.box, gq), Yq)
      };
      if (gq) {
        const Oq = Dg(qq.box, [Math.floor(gq[0]), Math.floor(gq[1]), Math.floor(gq[2])]);
        if (Oq >= 0 && (Yq(Oq) || (lq = Oq, "reactor" === qq.kind && "inside" === qY(qq.box, lq) && "Air" === Eq(eg(qq.box, lq))))) return Oq
      }
      var lq;
      const Oq = wg(qq.box);
      for (let mq = 0; mq < Oq; mq++)
        if (Yq(mq)) return mq;
      return -1
    }

    function oa(qq, Eq) {
      return Math.floor(Eq / (qq.w * qq.d))
    }

    function Pa(qq, Eq, gq) {
      return gq >= 0 && oa(qq, Eq) > oa(qq, gq)
    }

    function Qa(qq, Eq) {
      return Eq >= 0 && qq.h >= 3 && oa(qq, Eq) === qq.h - 1
    }

    function ya(qq) {
      const Eq = Zg(qq);
      return Eq === Hg || "Collider" === Eq || "Laser" === Eq || Eq.startsWith("_Collider ")
    }

    function ta(qq, Eq, gq, Yq) {
      if (Yq(qq)) return null;
      if (!ja.every((Eq => {
          let [Yq, lq, Oq] = Eq;
          const mq = gq([qq[0] + Yq, qq[1] + lq, qq[2] + Oq]);
          return null !== mq && !Gg("reactor", mq) && "reactor" !== fg(mq)
        }))) return null;
      const lq = Lg("reactor").min,
        Oq = Rg([qq[0], qq[1], qq[2]], function(qq, Eq) {
          const gq = Eq[0] - (qq[0] + .5),
            Yq = Eq[2] - (qq[2] + .5);
          return Math.abs(gq) >= Math.abs(Yq) ? gq >= 0 ? 2 : 4 : Yq >= 0 ? 1 : 3
        }(qq, Eq), lq, lq, lq, Ug("reactor", lq)),
        mq = Cg(Oq);
      let xq = !0;
      for (let Aq = 0; Aq < wg(Oq) && xq; Aq++) {
        if (Aq === mq) continue;
        const qq = eg(Oq, Aq),
          Eq = gq(qq);
        xq = !Yq(qq) && (null === Eq || !ya(Eq))
      }
      return {
        box: Oq,
        fits: xq
      }
    }
    const ra = rA,
      va = "baf2Goal",
      ha = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      na = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      ba = .4;

    function ia(qq, Eq) {
      let [gq, Yq, lq] = qq;
      const Oq = MA([gq - .02, Yq - .02, lq - .02], [gq + 1.02, Yq + 1.02, lq + 1.02], .07);
      return Eq && (Oq.push([
        [gq + .5, Yq + 1 + .7, lq + .5],
        [.08, 1.4, .08]
      ]), Oq.push([
        [gq + .5, Yq + 1 + 1.4 + .2, lq + .5],
        [ba, ba, ba]
      ])), Oq
    }

    function Za(qq, Eq) {
      let [gq, Yq, lq] = Eq;
      return qq.isBlockInLoadedChunk(gq, Yq, lq) ? qq.blockIdToBlockName(qq.getBlockId(gq, Yq, lq)) : null
    }
    let fa = null;
    const Ma = new Set;
    let Ta = null;

    function za(qq) {
      fa = qq;
      for (const Eq of Ma) Eq(qq)
    }
    class Sa {
      constructor(qq) {
        var Eq;
        this.plans = qq, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (Eq = qq => {
          var Eq, gq;
          this.setGoal(null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.goal) && void 0 !== Eq ? Eq : null, null !== (gq = null === qq || void 0 === qq ? void 0 : qq.startsBattery) && void 0 !== gq && gq)
        }, Ta ??= [Ml.i.subscribe("setDirectionArrow", (qq => {
          let {
            id: Eq,
            position: gq,
            text: Yq
          } = qq;
          Eq === va && za({
            goal: [Math.floor(gq[0]), Math.floor(gq[1]), Math.floor(gq[2])],
            startsBattery: JSON.stringify(null !== Yq && void 0 !== Yq ? Yq : null).includes("arrowStartBattery")
          })
        })), Ml.i.subscribe("clearDirectionArrow", (qq => {
          let {
            id: Eq
          } = qq;
          null !== Eq && Eq !== va || za(null)
        }))], Ma.add(Eq), Eq(fa), () => {
          Ma.delete(Eq)
        })
      }
      onAfterRender(qq, Eq) {
        const gq = performance.now();
        if (this.cues.length > 0) {
          const Eq = .55 + .45 * Math.sin(gq / 1100 * Math.PI * 2);
          for (const gq of this.cues) qq.setGameMesh(gq, {
            visibility: Eq
          })
        }
        if (gq - this.lastCheckMs < 150) return;
        this.lastCheckMs = gq;
        const Yq = this.plans.all().filter((qq => {
            const [gq, Yq, lq] = qq.box.ctrl;
            return (!qq.formed || null !== this.plans.layoutOf(qq.box.ctrl)) && (gq - Eq[0]) ** 2 + (Yq - Eq[1]) ** 2 + (lq - Eq[2]) ** 2 <= 2304
          })),
          lq = function(qq, Eq) {
            const gq = ua.c.Oa,
              Yq = new Map;
            for (const Oq of Eq) {
              const Eq = eg(Oq.box, 0),
                mq = eg(Oq.box, wg(Oq.box) - 1),
                xq = [Math.min(Eq[0], mq[0]), Math.min(Eq[1], mq[1]), Math.min(Eq[2], mq[2])].map((qq => Math.floor(qq / gq))),
                Aq = [Math.max(Eq[0], mq[0]), Math.max(Eq[1], mq[1]), Math.max(Eq[2], mq[2])].map((qq => Math.floor(qq / gq)));
              for (let gq = xq[0]; gq <= Aq[0]; gq++)
                for (let Eq = xq[1]; Eq <= Aq[1]; Eq++)
                  for (let Oq = xq[2]; Oq <= Aq[2]; Oq++) {
                    var lq;
                    Yq.set(`${gq},${Eq},${Oq}`, null !== (lq = qq.getChunkVersion(gq, Eq, Oq)) && void 0 !== lq ? lq : -1)
                  }
            }
            return Yq
          }(qq, Yq);
        this.plans.getVersion() === this.storeVersion && (function(qq, Eq) {
          if (qq.size !== Eq.size) return !1;
          for (const [gq, Yq] of qq)
            if (Eq.get(gq) !== Yq) return !1;
          return !0
        }(lq, this.chunkVersions) || gq - this.lastRescanMs < 600) || (this.lastRescanMs = gq, this.storeVersion = this.plans.getVersion(), this.chunkVersions = lq, this.redraw(qq, Yq))
      }
      dispose(qq) {
        this.unwatch(), fa = null, this.clearMeshes(qq), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(qq, Eq) {
        var gq;
        (null === qq || void 0 === qq ? void 0 : qq.join()) === (null === (gq = this.goal) || void 0 === gq ? void 0 : gq.join()) && Eq === this.startsBattery || (this.goal = qq, this.startsBattery = Eq, this.storeVersion = -1)
      }
      redraw(qq, Eq) {
        const gq = Eq => Za(qq, Eq),
          Yq = new Map,
          lq = [],
          Oq = this.plans.guideOn();
        for (const cq of Eq) {
          const qq = Oq && Va(cq, this.plans.showsStarter(cq.box.ctrl), (qq => gq(eg(cq.box, qq)))),
            Eq = "reactor" === cq.kind ? this.plans.layoutOf(cq.box.ctrl) : null,
            mq = Oq && !cq.formed ? Ha(cq, gq, this.goal) : -1;
          mq >= 0 && lq.push([eg(cq.box, mq), Qa(cq.box, mq)]);
          const xq = wg(cq.box);
          for (let lq = 0; lq < xq; lq++) {
            const xq = eg(cq.box, lq),
              Aq = gq(xq),
              uq = null === Aq ? null : da(cq, lq, Aq, qq, Oq, Eq);
            if (null !== uq) {
              const qq = "wrong" !== uq && Pa(cq.box, lq, mq),
                Eq = qq ? `${uq}Dim` : uq;
              let gq = Yq.get(Eq);
              gq || (gq = {
                draw: {
                  ghost: uq,
                  dim: qq
                },
                list: []
              }, Yq.set(Eq, gq)), gq.list.push(xq)
            }
          }
        }
        if (Oq && this.startsBattery && this.goal) {
          const [qq, Eq, lq] = this.goal, Oq = [];
          for (const [Yq, mq, xq] of ha) {
            const Aq = [qq + Yq, Eq + mq, lq + xq];
            "Air" === gq(Aq) && Oq.push(Aq)
          }
          if (Oq.length > 0) {
            var mq;
            const qq = null !== (mq = Yq.get("cell")) && void 0 !== mq ? mq : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            qq.list.push(...Oq), Yq.set("cell", qq)
          }
        }
        const xq = [...Yq.keys()].sort(),
          Aq = [...xq.map((qq => `${qq}:${Yq.get(qq).list.join(";")}`)), `cue:${lq.join(";")}`].join("|");
        if (Aq !== this.shownKey) {
          this.shownKey = Aq, this.clearMeshes(qq);
          for (const Eq of xq) {
            const {
              draw: gq,
              list: lq
            } = Yq.get(Eq);
            this.meshes.push(this.build(qq, gq, lq))
          }
          for (const [Eq, gq] of lq) this.cues.push(Na(qq, ia(Eq, gq), na))
        }
      }
      build(qq, Eq, gq) {
        let {
          ghost: Yq,
          dim: lq
        } = Eq;
        const {
          size: Oq,
          colour: mq,
          alpha: xq
        } = ra[Yq], Aq = gq[0], cq = [], uq = [];
        for (const [Bq, Wq, Nq] of gq) Wa(cq, uq, [Bq - Aq[0] + .5, Wq - Aq[1] + .5, Nq - Aq[2] + .5], [Oq, Oq, Oq]);
        return qq.createGameMesh({
          positions: cq,
          indices: uq
        }, {
          rgb: mq,
          alpha: xq * (lq ? .3 : 1)
        }, Aq)
      }
      clearMeshes(qq) {
        for (const Eq of [...this.meshes, ...this.cues]) qq.disposeGameMesh(Eq);
        this.meshes = [], this.cues = []
      }
    }
    const pa = [.56, .83, 1],
      Ga = [1, .3, .25];
    class La {
      constructor(qq) {
        this.plans = qq, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(qq, Eq, gq) {
        var Yq;
        const lq = performance.now();
        if (lq - this.lastCheckMs < 150) return;
        this.lastCheckMs = lq;
        const Oq = Eq => Za(qq, Eq),
          mq = null === (Yq = qq.Ngq(Eq)) || void 0 === Yq ? void 0 : Yq.name,
          xq = mq && "Reactor Frame" === Zg(mq) ? qq.getTargetedBlock() : null,
          Aq = xq ? [xq.MV[0], xq.MV[1], xq.MV[2]] : null,
          cq = null !== Aq && "Air" === Oq(Aq) && Aq.every(((qq, Eq) => Math.abs(qq + .5 - gq[Eq]) <= 8)) ? ta(Aq, gq, Oq, (qq => this.inPlan(qq))) : null,
          uq = cq ? `${cq.box.ctrl.join()}|${cq.box.rot}|${cq.fits}` : "";
        uq !== this.shownKey && this.show(qq, uq, cq)
      }
      dispose(qq) {
        this.clear(qq), this.shownKey = ""
      }
      inPlan(qq) {
        return this.plans.all().some((Eq => Dg(Eq.box, qq) >= 0))
      }
      show(qq, Eq, gq) {
        if (this.clear(qq), this.shownKey = Eq, !gq) return;
        const {
          box: Yq,
          fits: lq
        } = gq, Oq = lq ? pa : Ga, {
          lo: mq,
          hi: xq
        } = fA(Yq);
        this.meshes.push(Na(qq, MA(mq, xq, .05), {
          rgb: Oq,
          alpha: 1
        }));
        const Aq = [],
          cq = eg(Yq, 0)[1];
        for (let uq = 0; uq < Yq.w * Yq.d; uq++) {
          const [qq, , Eq] = eg(Yq, uq);
          Aq.push([
            [qq + .5, cq + .02 + .01, Eq + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Na(qq, Aq, {
          rgb: Oq,
          alpha: .25
        }))
      }
      clear(qq) {
        for (const Eq of this.meshes) qq.disposeGameMesh(Eq);
        this.meshes = []
      }
    }
    const Ja = "buildAFactory2Game:";

    function ka(qq, Eq, gq) {
      const Yq = qq => {
          const [gq, Yq, lq] = qq.box.ctrl;
          return gq === Eq[0] && Yq === Eq[1] && lq === Eq[2]
        },
        lq = qq.find((qq => Yq(qq) || Dg(qq.box, Eq) >= 0));
      if (!lq) return null;
      const Oq = function(qq, Eq, gq) {
        const {
          w: Yq,
          h: lq,
          d: Oq
        } = qq.box, mq = "reactor" === qq.kind ? `${Ja}rxTitle` : `${Ja}batTitle`;
        if (qq.formed) return {
          key: `${Ja}lookPlanFormed`,
          kindKey: mq,
          w: Yq,
          h: lq,
          d: Oq,
          count: 0
        };
        let xq = 0,
          Aq = 0;
        for (let uq = 0; uq < wg(qq.box); uq++) {
          const Eq = gq(eg(qq.box, uq)),
            Yq = null === Eq ? "ok" : lY(qq.kind, qY(qq.box, uq), Eq);
          xq += "missing" === Yq ? 1 : 0, Aq += "wrong" === Yq || "blocked" === Yq ? 1 : 0
        }
        const cq = function(qq, Eq, gq) {
          if (Eq < 0 || null === gq) return;
          const Yq = qY(qq.box, Eq),
            lq = lY(qq.kind, Yq, gq);
          return "blocked" === lq ? `${Ja}lookWhy_blocked` : "wrong" === lq ? "ctrl" === Yq ? `${Ja}lookWhy_ctrl` : `${Ja}lookWhy_reactor_${Yq}` : void 0
        }(qq, Dg(qq.box, Eq), gq([Eq[0], Eq[1], Eq[2]]));
        if (xq > 0) return {
          key: `${Ja}lookPlanToBuild`,
          kindKey: mq,
          w: Yq,
          h: lq,
          d: Oq,
          count: xq,
          why: cq
        };
        if (Aq > 0) return {
          key: `${Ja}lookPlanTakeOut`,
          kindKey: mq,
          w: Yq,
          h: lq,
          d: Oq,
          count: Aq,
          why: cq
        };
        return {
          key: "reactor" === qq.kind ? `${Ja}lookPlanNoRods` : `${Ja}lookPlanDone`,
          kindKey: mq,
          w: Yq,
          h: lq,
          d: Oq,
          count: 0
        }
      }(lq, Eq, gq);
      return "reactor" === lq.kind && Yq(lq) ? {
        ...Oq,
        ctrl: !0
      } : Oq
    }

    function Ra(qq, Eq) {
      return qq === Eq || null !== qq && null !== Eq && qq.key === Eq.key && qq.kindKey === Eq.kindKey && qq.w === Eq.w && qq.h === Eq.h && qq.d === Eq.d && qq.count === Eq.count && qq.why === Eq.why && qq.ctrl === Eq.ctrl
    }

    function Ua() {
      return performance.now()
    }
    class Fa {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ua;
        this.ticket = qq, this.sent = Eq, this.backstopMs = gq, this.now = Yq, this.queuedAt = void 0, this.queuedAt = Yq()
      }
      answered() {
        const qq = this.now(),
          Eq = this.sent.leftAt(this.ticket);
        return null !== Eq && qq - Eq > 4e3 || qq - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class sa {
      constructor() {
        this.echoes = []
      }
      add(qq) {
        this.echoes = this.echoes.filter((qq => !qq.answered())), this.echoes.push(qq)
      }
      answered() {
        var qq, Eq;
        return null === (qq = null === (Eq = this.echoes.at(-1)) || void 0 === Eq ? void 0 : Eq.answered()) || void 0 === qq || qq
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((qq => qq.answered()))
      }
      age() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.echoes.at(-1)) || void 0 === Eq ? void 0 : Eq.age()) && void 0 !== qq ? qq : null
      }
      clear() {
        this.echoes = []
      }
    }
    class Xa {
      constructor(qq) {
        this.send = qq, this.value = null, this.sent = null, this.echoes = new sa, this.down = !1, this.timer = null
      }
      shown(qq) {
        return null === this.value ? qq : this.down || this.value !== this.sent ? this.value : qq === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), qq) : this.value
      }
      pendingFor(qq) {
        return null !== this.value && this.value === this.sent && qq !== this.value ? this.echoes.age() : null
      }
      assume(qq, Eq) {
        this.disarm(), this.down = !1, this.value = qq, this.sent = qq, this.echoes.clear(), this.echoes.add(Eq)
      }
      press() {
        this.down = !0
      }
      drag(qq) {
        this.value = qq, this.arm(this.down ? 1e3 : 400)
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
      arm(qq) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), qq)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class wa {
      constructor() {
        this.pending = new Map
      }
      set(qq, Eq, gq) {
        var Yq;
        const lq = null !== (Yq = this.pending.get(qq)) && void 0 !== Yq ? Yq : {
          on: Eq,
          echoes: new sa
        };
        lq.on = Eq, lq.echoes.add(gq), this.pending.set(qq, lq)
      }
      shown(qq) {
        let Eq = qq;
        for (const [gq, {
            on: Yq,
            echoes: lq
          }] of this.pending) 0 !== (qq & gq) === Yq && lq.agreeCounts() || lq.answered() ? this.pending.delete(gq) : Eq = Yq ? Eq | gq : Eq & ~gq;
        return Eq
      }
      pendingMask() {
        let qq = 0;
        for (const Eq of this.pending.keys()) qq |= Eq;
        return qq
      }
      pendingFor(qq) {
        let Eq = null;
        for (const [Yq, {
            on: lq,
            echoes: Oq
          }] of this.pending) {
          if (void 0 !== qq && 0 !== (qq & Yq) === lq) continue;
          const mq = Oq.age();
          var gq;
          if (null !== mq) Eq = Math.max(null !== (gq = Eq) && void 0 !== gq ? gq : 0, mq)
        }
        return Eq
      }
      clear() {
        this.pending.clear()
      }
    }
    class Ka {
      constructor() {
        this.dims = null, this.echoes = new sa, this.unmet = null
      }
      shown(qq) {
        var Eq;
        return this.dims && (Ca(this.dims, qq) && this.echoes.agreeCounts() || this.echoes.answered()) && (Ca(this.dims, qq) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Eq = this.dims) && void 0 !== Eq ? Eq : qq
      }
      takeUnmet() {
        const qq = this.unmet;
        return this.unmet = null, qq
      }
      set(qq, Eq) {
        this.dims = qq, this.echoes.add(Eq)
      }
      pendingFor(qq) {
        return null === this.dims || qq && Ca(this.dims, qq) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function Ca(qq, Eq) {
      return qq[0] === Eq[0] && qq[1] === Eq[1] && qq[2] === Eq[2]
    }
    class Ia {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ua;
        this.now = qq, this.taps = new Map
      }
      tap(qq, Eq, gq) {
        return !this.busy(qq) && (this.taps.set(qq, {
          at: this.now(),
          done: Eq
        }), gq(), !0)
      }
      settle(qq) {
        for (const [Eq, gq] of [...this.taps]) gq.done(qq) && this.taps.delete(Eq)
      }
      busy(qq) {
        const Eq = this.taps.get(qq);
        return !!Eq && (!(this.now() - Eq.at >= 3e3) || (this.taps.delete(qq), !1))
      }
      busyIds() {
        const qq = new Set;
        for (const Eq of [...this.taps.keys()]) this.busy(Eq) && qq.add(Eq);
        return qq
      }
      clear() {
        this.taps.clear()
      }
    }

    function ea(qq) {
      return {
        send: Eq => qq.track(Eq),
        sendUrgent: (Eq, gq) => qq.track(Eq, {
          urgent: !0,
          supersedes: gq
        }),
        leftAt: Eq => qq.leftAt(Eq),
        holdReserve: () => qq.holdUrgentReserve(),
        answerMs: Tm
      }
    }

    function Da() {
      return performance.now()
    }

    function qV(qq) {
      const Eq = qq.baf2RxNeed.map((qq => {
        let [Eq, gq] = qq;
        return [Eq, gq]
      }));
      return JSON.stringify([qq.baf2RxFormed, Eq, qq.baf2RxBad, qq.baf2RxCells])
    }

    function EV(qq, Eq) {
      const gq = 0 !== (Eq & WE),
        Yq = 0 !== (qq.baf2RxFlags & WE);
      return !gq || Yq || "running" !== qq.baf2RxState && "idle" !== qq.baf2RxState ? !gq && Yq && "scram" === qq.baf2RxState && qq.baf2RxFuel > 0 ? "idle" : qq.baf2RxState : "scram"
    }

    function gV(qq) {
      return JSON.stringify([qq.baf2BatFormed, qq.baf2BatNeed, qq.baf2BatBad])
    }

    function YV(qq) {
      return qq.join(",")
    }
    class lV {
      constructor() {
        this.listeners = new Set
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      notify() {
        for (const qq of this.listeners) qq()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class OV {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(qq, Eq) {
        this.lastAt = qq, this.lastUntil = qq + Eq
      }
      answered(qq) {
        return this.lastAt >= qq || qq < this.lastUntil
      }
    }
    class mV {
      constructor(qq, Eq) {
        this.link = qq, this.now = Eq, this.hold = new Ka, this.picked = null, this.notTaken = null
      }
      shown(qq) {
        const Eq = this.hold.shown(qq);
        if (this.hold.takeUnmet() && this.picked) {
          var gq;
          const {
            plans: Eq,
            ctrl: Yq,
            at: lq
          } = this.picked;
          this.picked = null, Eq.unpredict(Yq), null === (gq = this.notTaken) || void 0 === gq || gq.call(this, qq, lq)
        }
        return Eq
      }
      pendingFor(qq) {
        return this.hold.pendingFor(qq)
      }
      zW(qq, Eq, gq) {
        qq.predictSize(Eq, gq), this.picked = {
          plans: qq,
          ctrl: Eq,
          at: this.now()
        };
        const Yq = this.link.send(BE(Eq, "plan", ...gq));
        this.hold.set(gq, new Fa(Yq, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class xV {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Da;
        this.plans = qq, this.readInterior = Eq, this.link = gq, this.now = Yq, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new wa, this.throttle = void 0, this.oneShots = void 0, this.listeners = new lV, this.redraw = null, this.releaseReserve = null, this.size = new mV(gq, Yq), this.oneShots = new Ia(Yq), this.throttle = new Xa((qq => this.echo(this.link.send(this.command("throttle", qq)))))
      }
      set(qq) {
        !qq.baf2RxOpen && this.raw && YV(this.raw.baf2RxAt) === YV(qq.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(qq), this.TV(qq)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(qq) {
        this.size.notTaken = qq
      }
      resize(qq) {
        this.raw && (this.size.zW(this.plans, this.raw.baf2RxAt, qq), this.TV(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const qq = this.raw.baf2RxAt;
        this.plans.setStarter(qq, !this.plans.showsStarter(qq)), this.TV(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.TV(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.TV(this.raw)
      }
      send(qq) {
        if (this.raw) {
          for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
          this.link.send(this.command(qq, ...gq))
        }
      }
      tap(qq, Eq) {
        this.raw && this.oneShots.tap(qq, function(qq, Eq) {
          if ("start" === qq) return qq => 0 === (qq.baf2RxFlags & WE);
          if ("odConfirm" === qq) return qq => 0 !== (qq.baf2RxFlags & NE);
          const gq = qV(Eq);
          return qq => qV(qq) !== gq
        }(qq, this.raw), Eq) && ("start" === qq && (this.startedAt = this.now()), this.TV(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(WE, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(qq, Eq) {
        if (!this.raw) return;
        const gq = qq === WE ? this.command(Eq ? "scram" : "start") : this.command("od", Eq ? 1 : 0),
          Yq = Eq && qq === WE,
          lq = `${uE} ${this.raw.baf2RxAt.join(" ")} `,
          Oq = this.echo(Yq ? this.link.sendUrgent(gq, (qq => {
            const Eq = qq.startsWith(lq) ? qq.slice(lq.length).split(" ")[0] : null;
            return "throttle" === Eq || "start" === Eq
          })) : this.link.send(gq));
        this.flags.set(qq, Eq, Oq), Yq && this.throttle.assume(0, Oq), this.TV(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(qq) {
        this.throttle.drag(qq), this.raw && this.TV(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.TV(this.raw)
      }
      subscribe(qq) {
        return this.listeners.subscribe(qq)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var qq;
        this.throttle.release(), null === (qq = this.releaseReserve) || void 0 === qq || qq.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(qq) {
        for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
        return BE(this.raw.baf2RxAt, qq, ...gq)
      }
      echo(qq) {
        return new Fa(qq, this.link, this.link.answerMs, this.now)
      }
      TV(qq) {
        var Eq;
        this.raw = qq;
        const gq = this.flags.shown(qq.baf2RxFlags),
          Yq = {
            ...qq,
            baf2RxFlags: gq,
            baf2RxTarget: this.throttle.shown(qq.baf2RxTarget),
            baf2RxState: EV(qq, gq)
          },
          lq = this.size.shown(Yq.baf2RxDims),
          Oq = this.throttle.pendingFor(),
          mq = [this.throttle.pendingFor(qq.baf2RxTarget), this.flags.pendingFor(qq.baf2RxFlags), this.size.pendingFor(qq.baf2RxDims)].filter((qq => null !== qq)),
          xq = mq.length > 0 ? Math.max(...mq) : null,
          Aq = this.oneShots.busyIds(),
          cq = Yq.baf2RxAt;
        let uq, Bq, Wq = null,
          Nq = [Math.max(0, lq[0] - 2), Math.max(0, lq[1] - 2), Math.max(0, lq[2] - 2)];
        if (Yq.baf2RxFormed) {
          const [qq, Eq, gq] = Yq.baf2RxDims;
          Nq = [Math.max(0, qq - 2), Math.max(0, Eq - 2), Math.max(0, gq - 2)], uq = Array.from(Yq.baf2RxCells, Number), Bq = `${Nq.join(",")}:${Yq.baf2RxCells}`
        } else {
          var aq;
          const qq = null === (aq = this.plans.planAt(cq)) || void 0 === aq ? void 0 : aq.box,
            Eq = qq ? Fg(qq, "reactor", ...lq) : Rg(cq, 1, ...lq, Ug("reactor", lq[0])),
            gq = this.readInterior(Eq);
          Wq = qA(Nq, gq), uq = gq, Bq = `${Nq.join(",")}:${gq.join("")}`
        }(null === (Eq = this.looksOf) || void 0 === Eq ? void 0 : Eq.key) !== Bq && (this.looksOf = {
          key: Bq,
          looks: mA(Nq, uq)
        }), this.view = {
          status: Yq,
          dims: lq,
          plan: Wq,
          inner: Nq,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(cq),
          odConfirmed: this.odConfirmed || 0 !== (Yq.baf2RxFlags & oE),
          guide: this.plans.guideOn(),
          throttlePending: null !== Oq,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== xq && xq >= 5e3,
          busy: Aq,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== xq || Aq.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.TV(this.raw)
        }), 250))
      }
    }
    class AV {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Da;
        this.plans = qq, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new lV, this.redraw = null, this.size = new mV(Eq, gq), this.oneShots = new Ia(gq)
      }
      set(qq) {
        !qq.baf2BatOpen && this.view && YV(this.view.status.baf2BatAt) === YV(qq.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(qq), this.TV(qq)
      }
      tap(qq, Eq) {
        if (!this.view) return;
        const gq = gV(this.view.status);
        this.oneShots.tap(qq, (qq => gV(qq) !== gq), Eq) && this.TV(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(qq) {
        this.size.notTaken = qq
      }
      resize(qq) {
        this.view && (this.size.zW(this.plans, this.view.status.baf2BatAt, qq), this.TV(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.TV(this.view.status)
      }
      subscribe(qq) {
        return this.listeners.subscribe(qq)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      TV(qq) {
        const Eq = this.size.shown(qq.baf2BatDims),
          gq = this.oneShots.busyIds();
        this.view = {
          status: qq,
          dims: Eq,
          WB: PA(Eq, qq.baf2BatDims) ? qq.baf2BatCapacity : cA(...Eq),
          guide: this.plans.guideOn(),
          busy: gq
        }, this.listeners.notify(), gq.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.TV(this.view.status)
        }), 250))
      }
    }
    const cV = "buildAFactory2Game:";

    function uV() {
      var qq;
      const Eq = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!Eq) return null;
      const gq = Eq.querySelector(".ExitButton");
      return function(qq, Eq) {
        const gq = Eq ? Eq.left - 8 : qq.right;
        return {
          left: qq.left,
          top: qq.top,
          width: Math.max(0, gq - qq.left),
          height: qq.height
        }
      }(Eq.getBoundingClientRect(), null !== (qq = null === gq || void 0 === gq ? void 0 : gq.getBoundingClientRect()) && void 0 !== qq ? qq : null)
    }
    const BV = (0, Yq.memo)((function(qq) {
      let {
        store: Eq
      } = qq;
      const {
        t: gq
      } = (0, hl.v)(), [lq, Oq] = (0, Yq.useState)((() => Eq.get())), [mq, xq] = (0, Yq.useState)((() => performance.now()));
      (0, Yq.useEffect)((() => (Oq(Eq.get()), Eq.subscribe((() => {
        Oq(Eq.get()), xq(performance.now())
      })))), [Eq]);
      const {
        alarm: Aq,
        boomAt: cq
      } = lq, uq = null !== Aq && null !== Aq.secs, [Bq, Wq] = (0, Yq.useState)(null);
      (0, Yq.useEffect)((() => {
        if (!uq) return;
        Wq(uV());
        const qq = setInterval((() => {
          xq(performance.now()), Wq(uV())
        }), 250);
        return () => {
          clearInterval(qq)
        }
      }), [uq]);
      const [Nq, aq] = (0, Yq.useState)(!1);
      return (0, Yq.useEffect)((() => {
        if (cq === -1 / 0) return;
        aq(!0);
        const qq = setTimeout((() => {
          aq(!1)
        }), 1300);
        return () => {
          clearTimeout(qq)
        }
      }), [cq]), (0, rO.jsxs)(rO.Fragment, {
        children: [null !== Aq && (0, rO.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: gq(Aq.hot ? `${cV}rxAlarmSiren` : `${cV}rxAlarmDamaged`, {
            amount: String(Aq.damage)
          })
        }), null !== Aq && null !== Aq.secs && (0, rO.jsx)("div", {
          className: Bq ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Bq && void 0 !== Bq ? Bq : void 0,
          "aria-live": "assertive",
          children: gq(`${cV}rxAlarmCountdown`, {
            amount: String((Vq = Aq.secs, dq = mq - Aq.receivedAt, Math.max(1, Math.ceil(Vq - dq / 1e3))))
          })
        }), Nq && (0, rO.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Vq, dq
    }));
    class WV {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      vy(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const gq = qq.baf2RxAlarmAt.join(",");
        let Yq = this.snapshot.boomAt;
        if (qq.baf2RxAlarmBoom) this.byReactor.delete(gq), Yq = Eq;
        else if (qq.baf2RxAlarmDamage <= 0) this.byReactor.delete(gq);
        else {
          var lq;
          this.byReactor.set(gq, {
            damage: qq.baf2RxAlarmDamage,
            secs: null !== (lq = qq.baf2RxAlarmSecs) && void 0 !== lq ? lq : null,
            hot: !0 === qq.baf2RxAlarmHot,
            receivedAt: Eq
          })
        }
        this.TV(Yq)
      }
      retain(qq) {
        let Eq = !1;
        for (const gq of [...this.byReactor.keys()]) qq.has(gq) || (this.byReactor.delete(gq), Eq = !0);
        Eq && this.TV(this.snapshot.boomAt)
      }
      has(qq) {
        return this.byReactor.has(qq)
      }
      get() {
        return this.snapshot
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      TV(qq) {
        let Eq = null;
        for (const gq of this.byReactor.values())(!Eq || gq.damage > Eq.damage) && (Eq = gq);
        this.snapshot = {
          alarm: Eq,
          boomAt: qq
        };
        for (const gq of this.listeners) gq()
      }
    }
    const NV = {
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

    function aV(qq) {
      return [qq[0], qq[1], qq[2]]
    }

    function VV(qq) {
      return `${qq[0]},${qq[1]},${qq[2]}`
    }
    class dV {
      constructor(qq) {
        if (this.plans = qq, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var qq;
            return {
              active: this.glows.flatMap((qq => {
                let {
                  record: Eq
                } = qq;
                return Eq ? [Eq] : []
              })),
              log: [...null !== (qq = this.devLog) && void 0 !== qq ? qq : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var qq;
        return null !== (qq = this.devLog) && void 0 !== qq ? qq : []
      }
      check(qq, Eq, gq) {
        const Yq = new Set(Eq.map((qq => VV(qq.box.ctrl))));
        for (const mq of function(qq, Eq) {
            const gq = [],
              Yq = new Map(qq);
            qq.clear();
            for (const lq of Eq) {
              const Eq = xa(lq.box.ctrl),
                Oq = lq.formed ? lq.level : 0;
              qq.set(Eq, Oq), Oq > 0 && 0 === Yq.get(Eq) && gq.push(lq)
            }
            return gq
          }(this.levels, this.plans.all())) Yq.has(VV(mq.box.ctrl)) && this.show(qq, mq, "on", gq);
        const lq = this.plans.lastFormed();
        if (null === lq || lq.receivedAt <= this.flashedAt) return null;
        this.flashedAt = lq.receivedAt;
        const Oq = function(qq, Eq) {
          var gq;
          const Yq = xa(qq);
          return null !== (gq = Eq.find((qq => xa(qq.box.ctrl) === Yq))) && void 0 !== gq ? gq : null
        }(lq.ctrl, Eq);
        return Oq && this.show(qq, Oq, "formed", gq), Oq
      }
      fade(qq, Eq) {
        0 !== this.glows.length && (this.glows = this.glows.filter((gq => {
          let {
            mesh: Yq,
            glow: lq,
            startMs: Oq,
            record: mq
          } = gq;
          const xq = (Eq - Oq) / NV[lq].ms;
          return xq >= 1 ? (qq.disposeGameMesh(Yq), mq && (mq.endMs = Eq), !1) : (qq.setGameMesh(Yq, {
            visibility: "formed" === lq ? 1 - xq : Math.sin(Math.PI * xq)
          }), !0)
        })))
      }
      dispose(qq) {
        for (const {
            mesh: gq
          }
          of this.glows) qq.disposeGameMesh(gq);
        this.glows = [], this.levels.clear();
        const Eq = "undefined" !== typeof window ? window : null;
        (null === Eq || void 0 === Eq ? void 0 : Eq.baf2Glows) === this.devAccessor && delete Eq.baf2Glows
      }
      show(qq, Eq, gq, Yq) {
        const {
          lo: lq,
          hi: Oq
        } = fA(Eq.box);
        let mq = null;
        this.devLog && (mq = {
          glow: gq,
          ctrl: aV(Eq.box.ctrl),
          lo: aV(lq),
          hi: aV(Oq),
          startMs: Yq,
          endMs: null
        }, this.devLog.push(mq), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(qq, gq, MA(lq, Oq, NV[gq].thick)),
          glow: gq,
          startMs: Yq,
          record: mq
        })
      }
      build(qq, Eq, gq) {
        const Yq = Na(qq, gq, {
          rgb: NV[Eq].colour,
          alpha: 1
        });
        return qq.setGameMesh(Yq, {
          visibility: 0
        }), Yq
      }
    }
    const jV = 1 / .6,
      HV = {
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
        blendMode: zx.h.Standard,
        soft: !0
      },
      oV = {
        ...HV,
        size: [.25, .4],
        count: 2
      };

    function PV(qq) {
      return {
        colours: [qq, qq],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: zx.h.Add,
        soft: !1
      }
    }
    const QV = PV([150, 225, 255]),
      yV = PV([185, 145, 255]),
      tV = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function rV(qq) {
      const Eq = TE[qq];
      return null === Eq.fuelSlot || lg(Eq) ? tV.includes(qq) ? yV : QV : HV
    }
    const vV = {
        kind: "smokePuff"
      },
      hV = [.2, .025, .2];

    function nV(qq, Eq) {
      const [
        [gq, Yq, lq],
        [Oq, mq, xq]
      ] = qq.colours;
      return {
        texture: qq.soft ? vV : "square_particle",
        WB: Eq,
        minLifeTime: qq.life[0] / jV,
        maxLifeTime: qq.life[1] / jV,
        minEmitPower: qq.power[0] * jV,
        maxEmitPower: qq.power[1] * jV,
        minSize: qq.size[0],
        maxSize: qq.size[1],
        emitRate: 0,
        gravity: [0, qq.lift * jV * jV, 0],
        dir1: [-qq.spread, 1, -qq.spread],
        dir2: [qq.spread, 1, qq.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [gq, Yq, lq, qq.alpha],
          maxColor: [Oq, mq, xq, qq.alpha]
        }, {
          timeFraction: 1,
          minColor: [gq, Yq, lq, 0],
          maxColor: [Oq, mq, xq, 0]
        }],
        blendMode: qq.blendMode
      }
    }
    class bV {
      constructor(qq) {
        this.fixed = qq, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(qq, Eq, gq) {
        var Yq;
        if (gq === this.lastFrame) return !1;
        this.lastFrame = gq;
        const lq = this.at;
        lq[0] = Eq[0] + .5, lq[1] = Eq[1] + 1.025, lq[2] = Eq[2] + .5;
        const Oq = null !== (Yq = this.fixed) && void 0 !== Yq ? Yq : xq() ? oV : HV;
        let mq = this.particles.get(Oq);
        return mq || (mq = qq.createParticles(function(qq) {
          return nV(qq, Math.ceil(12 * qq.count * qq.life[1]) + qq.count)
        }(Oq), {
          pos: lq,
          half: hV
        }), this.particles.set(Oq, mq)), mq.moveTo(lq), mq.emit(Oq.count), !0
      }
      dispose() {
        for (const qq of this.particles.values()) qq.stop();
        this.particles.clear()
      }
    }
    class iV {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(qq) {
        this.indexed = !0;
        for (const Eq of nE) {
          const gq = rV(Eq);
          for (let Yq = 1; Yq <= 4; Yq++) {
            const lq = qq.blockNameToBlockId(`${Eq}|meta|rot${Yq}|Running`, !0);
            if (null === lq) continue;
            let Oq = this.pufferIndexByStyle.get(gq);
            void 0 === Oq && (Oq = this.pufferList.push(new bV(gq === HV ? null : gq)) - 1, this.pufferIndexByStyle.set(gq, Oq)), this.pufferIndexById[lq] = Oq + 1
          }
        }
      }
      onAfterRender(qq, Eq) {
        this.indexed || this.index(qq);
        const gq = performance.now(),
          Yq = 0 === this.lastMs ? 0 : Math.min(gq - this.lastMs, 250) / 1e3;
        this.lastMs = gq, this.frame++, qq.particlesEnabled() ? (this.scan(qq, Eq), this.puff(qq, Yq)) : this.sources = []
      }
      dispose() {
        for (const qq of this.pufferList) qq.dispose();
        this.sources = [], this.found = []
      }
      scan(qq, Eq) {
        0 === this.scanRow && (this.origin = [Math.floor(Eq[0]) - 12, Math.floor(Eq[1]) - 6, Math.floor(Eq[2]) - 12]);
        const gq = Math.min(this.scanRow + 16, 325),
          [Yq, lq, Oq] = this.origin,
          mq = this.hits;
        mq.length = 0;
        for (let xq = this.scanRow; xq < gq; xq++) {
          const Eq = Yq + xq % 25,
            gq = lq + Math.floor(xq / 25);
          qq.scanBlocks(Eq, gq, Oq, Eq + 1, gq + 1, Oq + 25, this.pufferIndexById, mq)
        }
        for (let xq = 0; xq < mq.length; xq += 4) {
          const qq = mq[xq + 3];
          this.found.push({
            pos: [mq[xq], mq[xq + 1], mq[xq + 2]],
            lc: qq,
            puffer: this.pufferList[this.pufferIndexById[qq] - 1]
          })
        }
        this.scanRow = gq, 325 === gq && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(qq, Eq) {
        const gq = this.sources.length;
        if (0 !== gq) {
          this.budget = Math.min(this.budget + Math.min(gq / 1.2, 12) * Eq, 2);
          for (let Eq = 0; Eq < gq && this.budget >= 1; Eq++) {
            const Eq = this.sources[this.cursor % gq];
            this.cursor = (this.cursor + 1) % gq, qq.getBlockId(Eq.pos[0], Eq.pos[1], Eq.pos[2]) === Eq.lc && (Eq.puffer.puff(qq, Eq.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const ZV = {
        ...PV([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      fV = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function MV(qq) {
      return 0 === qq.spots.length ? 0 : Math.min(1 * qq.level, 4)
    }

    function TV(qq) {
      return 0 === qq.glass.length ? 0 : Math.min(.75 * qq.level, 3)
    }

    function zV(qq) {
      return `${qq.ctrl.join(",")}:${qq.rot}:${qq.cu},${qq.cv}:${qq.w},${qq.h},${qq.d}`
    }

    function SV(qq, Eq) {
      const gq = Eq.w - 2,
        Yq = Eq.h - 2,
        lq = Eq.d - 2,
        Oq = [];
      for (let mq = 0; mq < gq * Yq * lq; mq++) {
        const xq = mq % gq,
          Aq = Math.floor(mq / gq) % lq,
          cq = Math.floor(mq / (gq * lq));
        if (xq > 0 && xq < gq - 1 && Aq > 0 && Aq < lq - 1 && cq > 0 && cq < Yq - 1) continue;
        const uq = eg(Eq, gY(Eq, mq)),
          Bq = Za(qq, uq);
        if (null !== Bq && "Fuel Rod" === Zg(Bq))
          for (const Eq of fV) {
            const gq = [uq[0] + Eq[0], uq[1] + Eq[1], uq[2] + Eq[2]];
            GV(qq, gq) && Oq.push(LV(gq, Eq))
          }
      }
      return Oq
    }

    function pV(qq, Eq) {
      const {
        lo: gq,
        hi: Yq
      } = fA(Eq), lq = [];
      for (let Oq = gq[0]; Oq < Yq[0]; Oq++)
        for (let Eq = gq[1]; Eq < Yq[1]; Eq++) {
          const mq = Oq === gq[0] || Oq === Yq[0] - 1 || Eq === gq[1] || Eq === Yq[1] - 1 ? 1 : Math.max(1, Yq[2] - 1 - gq[2]);
          for (let xq = gq[2]; xq < Yq[2]; xq += mq) {
            const mq = [Oq, Eq, xq];
            if (!GV(qq, mq)) continue;
            const Aq = Oq === gq[0] ? fV[1] : Oq === Yq[0] - 1 ? fV[0] : xq === gq[2] ? fV[5] : xq === Yq[2] - 1 ? fV[4] : Eq === gq[1] ? fV[3] : fV[2];
            lq.push(LV(mq, Aq))
          }
        }
      return lq
    }

    function GV(qq, Eq) {
      const gq = Za(qq, Eq);
      return null !== gq && "Reactor Glass" === Zg(gq)
    }

    function LV(qq, Eq) {
      return [
        [qq[0] + .5 + .55 * Eq[0], qq[1] + .5 + .55 * Eq[1], qq[2] + .5 + .55 * Eq[2]],
        [0 === Eq[0] ? .4 : .02, 0 === Eq[1] ? .4 : .02, 0 === Eq[2] ? .4 : .02]
      ]
    }
    class JV {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(qq, Eq, gq, Yq) {
        const lq = [],
          Oq = new Set;
        for (const cq of Eq) {
          var mq, xq, Aq;
          const {
            box: Eq
          } = cq;
          if ("reactor" !== cq.kind || cq.level <= 0 || (Eq.ctrl[0] - gq[0]) ** 2 + (Eq.ctrl[1] - gq[1]) ** 2 + (Eq.ctrl[2] - gq[2]) ** 2 > 576) continue;
          const uq = zV(Eq);
          Oq.add(uq);
          let Bq = this.spots.get(uq);
          if ((!Bq || Yq - Bq.at > 3e3) && (Bq = {
              at: Yq,
              spots: SV(qq, Eq),
              glass: pV(qq, Eq)
            }, this.spots.set(uq, Bq)), 0 === Bq.spots.length && 0 === Bq.glass.length) continue;
          const Wq = this.sparking.find((qq => qq.key === uq));
          lq.push({
            key: uq,
            level: cq.level,
            spots: Bq.spots,
            glass: Bq.glass,
            budget: null !== (mq = null === Wq || void 0 === Wq ? void 0 : Wq.budget) && void 0 !== mq ? mq : 0,
            cursor: null !== (xq = null === Wq || void 0 === Wq ? void 0 : Wq.cursor) && void 0 !== xq ? xq : 0,
            glassBudget: null !== (Aq = null === Wq || void 0 === Wq ? void 0 : Wq.glassBudget) && void 0 !== Aq ? Aq : 0
          })
        }
        for (const cq of this.spots.keys()) Oq.has(cq) || this.spots.delete(cq);
        this.sparking = lq
      }
      emit(qq, Eq, gq) {
        var Yq;
        if (0 === this.sparking.length || !qq.particlesEnabled() || gq === this.lastFrame) return;
        this.lastFrame = gq;
        let lq = 0,
          Oq = 0;
        for (const aq of this.sparking) lq += MV(aq), Oq += TV(aq);
        const mq = lq > 8 ? 8 / lq : 1,
          xq = Oq > 6 ? 6 / Oq : 1;
        let Aq, cq = null,
          uq = null;
        for (const aq of this.sparking) aq.budget = Math.min(aq.budget + MV(aq) * mq * Eq, 2), aq.budget >= 1 && (!cq || aq.budget > cq.budget) && (cq = aq), aq.glassBudget = Math.min(aq.glassBudget + TV(aq) * xq * Eq, 2), aq.glassBudget >= 1 && (!uq || aq.glassBudget > uq.glassBudget) && (uq = aq);
        if (cq) cq.budget--, Aq = cq.spots[cq.cursor++ % cq.spots.length];
        else {
          if (!uq) return;
          uq.glassBudget--, Aq = uq.glass[Math.floor(Math.random() * uq.glass.length)]
        }
        const [Bq, Wq] = Aq, Nq = null !== (Yq = this.emitter) && void 0 !== Yq ? Yq : this.create(qq, Bq, Wq);
        Nq.moveTo(Bq, Wq), Nq.emit(ZV.count)
      }
      dispose() {
        var qq;
        null === (qq = this.emitter) || void 0 === qq || qq.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(qq, Eq, gq) {
        const Yq = Math.ceil(14 * ZV.count * ZV.life[1]) + ZV.count;
        return this.emitter = qq.createParticles(nV(ZV, Yq), {
          pos: Eq,
          half: gq
        }), this.emitter
      }
    }
    const kV = [2, 3.2],
      RV = 1 / 3,
      UV = 1 / .6,
      FV = {
        texture: vV,
        WB: Math.ceil(18 * kV[1]) + 4,
        minLifeTime: kV[0] / UV,
        maxLifeTime: kV[1] / UV,
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
        blendMode: zx.h.Standard
      };
    class sV {
      constructor(qq) {
        this.plans = qq, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new JV, this.frame = 0, this.outline = new dV(qq)
      }
      onAfterRender(qq, Eq, gq) {
        const Yq = performance.now(),
          lq = 0 === this.lastMs ? 0 : Math.min(Yq - this.lastMs, 250) / 1e3;
        if (this.lastMs = Yq, this.outline.fade(qq, Yq), this.puff(qq, lq, gq), this.sparks.emit(qq, lq, this.frame++), Yq - this.lastCheckMs < 150) return;
        this.lastCheckMs = Yq;
        const Oq = this.plans.all().filter((qq => qq.formed && XV(qq.box.ctrl, gq) <= 4096));
        this.plumes = Oq.filter((qq => "reactor" === qq.kind && qq.level > 0)).map((qq => ({
          box: qq.box,
          level: qq.level
        }))), this.updateHums(qq, Eq, Oq, gq), this.sparks.update(qq, Oq, gq, Yq), this.chimeFormed(qq, Eq, Oq, Yq)
      }
      dispose(qq) {
        var Eq;
        this.outline.dispose(qq), null === (Eq = this.steam) || void 0 === Eq || Eq.dispose(), this.steam = null, this.sparks.dispose();
        for (const gq of this.hums.values()) gq.stop();
        this.hums.clear()
      }
      chimeFormed(qq, Eq, gq, Yq) {
        const lq = this.outline.check(qq, gq, Yq);
        lq && qq.playSound(Eq, "exp_levelup", .6, 1, {
          DE: [lq.box.ctrl[0] + .5, lq.box.ctrl[1], lq.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(qq, Eq, gq) {
        const Yq = this.plumes;
        if (0 === Yq.length || !qq.particlesEnabled()) return void(this.plumeBudget = 0);
        const lq = Yq.reduce(((qq, Eq) => qq + 3 * Eq.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + lq * Eq, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Oq = this.plumeCursor % (lq / 3);
        this.plumeCursor++;
        let mq = Yq[0];
        for (const Bq of Yq) {
          if (Oq < Bq.level) {
            mq = Bq;
            break
          }
          Oq -= Bq.level
        }
        const {
          lo: xq,
          hi: Aq
        } = fA(mq.box);
        if (function(qq, Eq, gq) {
            const Yq = Math.max(qq[0] - gq[0], 0, gq[0] - Eq[0]),
              lq = Math.max(qq[2] - gq[2], 0, gq[2] - Eq[2]);
            return Math.hypot(Yq, gq[1] - Eq[1], lq)
          }(xq, Aq, gq) < 6 && Math.random() > RV) return;
        const cq = [(xq[0] + Aq[0]) / 2, Aq[1] + .05, (xq[2] + Aq[2]) / 2],
          uq = [(Aq[0] - xq[0]) / 2 - .5, .05, (Aq[2] - xq[2]) / 2 - .5];
        this.steam ??= qq.createParticles(FV, {
          pos: cq,
          half: uq
        }), this.steam.moveTo(cq, uq), this.steam.emit(1)
      }
      updateHums(qq, Eq, gq, Yq) {
        const lq = new Map;
        for (const mq of gq) "reactor" === mq.kind && mq.level > 0 && XV(mq.box.ctrl, Yq) <= 576 && lq.set(`${Oq=mq.box.ctrl,`${Oq[0]},${Oq[1]},${Oq[2]}`}:${mq.level}`, mq);
        var Oq;
        for (const [mq, xq] of this.hums) lq.has(mq) || (xq.stop(), this.hums.delete(mq));
        for (const [mq, xq] of lq) {
          if (this.hums.has(mq)) continue;
          const {
            lo: gq,
            hi: Yq
          } = fA(xq.box), lq = [(gq[0] + Yq[0]) / 2, gq[1], (gq[2] + Yq[2]) / 2], Oq = qq.playSound(Eq, "rocketEngineLoop", .08 + .06 * xq.level, .55, {
            DE: lq,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Oq && this.hums.set(mq, Oq)
        }
      }
    }

    function XV(qq, Eq) {
      return (qq[0] - Eq[0]) ** 2 + (qq[1] - Eq[1]) ** 2 + (qq[2] - Eq[2]) ** 2
    }
    class wV {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      vy(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Yq = [qq.baf2BombAt[0], qq.baf2BombAt[1], qq.baf2BombAt[2]],
          lq = qq.baf2BombR;
        if (qq.baf2BombBoom) {
          const qq = Math.hypot(Eq[0] - Yq[0], Eq[1] - Yq[1], Eq[2] - Yq[2]);
          this.TV({
            fuse: null,
            blast: {
              at: Yq,
              r: lq,
              receivedAt: gq,
              distance: qq,
              flash: qq <= 3 * lq
            }
          })
        } else this.TV({
          ...this.snapshot,
          fuse: qq.baf2BombMs > 0 ? {
            at: Yq,
            r: lq,
            endsAt: gq + qq.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      TV(qq) {
        this.snapshot = qq;
        for (const Eq of this.listeners) Eq()
      }
    }
    const KV = (0, Yq.memo)((function(qq) {
      var Eq;
      let {
        store: gq
      } = qq;
      const {
        t: lq
      } = (0, hl.v)(), [Oq, mq] = (0, Yq.useState)((() => gq.get())), [xq, Aq] = (0, Yq.useState)((() => performance.now()));
      (0, Yq.useEffect)((() => (mq(gq.get()), gq.subscribe((() => {
        mq(gq.get()), Aq(performance.now())
      })))), [gq]);
      const {
        fuse: cq,
        blast: uq
      } = Oq;
      (0, Yq.useEffect)((() => {
        if (!cq) return;
        const qq = setInterval((() => {
          Aq(performance.now())
        }), 250);
        return () => {
          clearInterval(qq)
        }
      }), [cq]);
      const [Bq, Wq] = (0, Yq.useState)(!1);
      (0, Yq.useEffect)((() => {
        if (null === uq || void 0 === uq || !uq.flash) return;
        Wq(!0);
        const qq = setTimeout((() => {
          Wq(!1)
        }), 2500);
        return () => {
          clearTimeout(qq)
        }
      }), [uq]);
      const Nq = cq ? function(qq, Eq) {
        return qq.endsAt <= Eq ? 0 : Math.ceil((qq.endsAt - Eq) / 1e3)
      }(cq, xq) : 0;
      return (0, rO.jsxs)(rO.Fragment, {
        children: [Nq > 0 && (0, rO.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: lq("buildAFactory2Game:bombCountdown", {
            amount: String(Nq),
            radius: String(null !== (Eq = null === cq || void 0 === cq ? void 0 : cq.r) && void 0 !== Eq ? Eq : 0)
          })
        }), Bq && (0, rO.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function CV(qq) {
      const Eq = Math.min(4, Math.max(1, qq / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * qq / 4)),
        capSpread: Math.min(5 * qq / 8, 24 * Eq),
        capThick: 6 * Eq,
        stemHalfWidth: 3 * Eq,
        puffScale: Eq
      }
    }
    class IV {
      constructor() {
        this.Fc = !1
      }
      hold(qq) {
        qq.getCameraFar() < 1e3 && (qq.setCameraFar(1e3), this.Fc = !0)
      }
      release(qq) {
        this.Fc && (this.Fc = !1, qq.setCameraFar(null))
      }
    }
    const eV = 1 / .6,
      DV = [.2, .1, .2],
      qd = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Ed = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: zx.h.Standard,
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
      gd = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: zx.h.Standard,
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
      Yd = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: zx.h.Standard,
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
      ld = {
        texture: vV,
        WB: Math.ceil(120) + 4,
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
        blendMode: zx.h.Add
      };
    class Od {
      constructor(qq) {
        this.store = qq, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new IV, this.timers = []
      }
      onAfterRender(qq, Eq) {
        const gq = performance.now(),
          Yq = 0 === this.lastMs ? 0 : Math.min(gq - this.lastMs, 250) / 1e3;
        this.lastMs = gq;
        const {
          fuse: lq,
          blast: Oq
        } = this.store.get();
        null !== Oq && Oq !== this.shownBlast && (this.shownBlast = Oq, this.startBlast(qq, Eq, Oq, gq));
        const mq = qq.particlesEnabled();
        null !== lq && lq.endsAt > gq && mq ? this.emitBeacon(qq, lq, Yq, gq) : this.beaconBudget = 0, null !== this.cloud && (gq - this.cloud.startMs > 33e3 ? this.disposeCloud(qq) : (this.far.hold(qq), mq && this.emitCloud(qq, Yq, gq)))
      }
      dispose(qq) {
        var Eq;
        null === (Eq = this.beacon) || void 0 === Eq || Eq.dispose(), this.beacon = null, this.disposeCloud(qq);
        for (const gq of this.timers) clearTimeout(gq);
        this.timers.length = 0
      }
      emitBeacon(qq, Eq, gq, Yq) {
        const lq = Eq.endsAt - Yq < 5e3 ? 350 : 1e3,
          Oq = .5 + .5 * Math.sin(2 * Math.PI * Yq / lq);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Oq * gq, 4), this.beaconBudget < 1) return;
        const mq = Math.floor(this.beaconBudget);
        this.beaconBudget -= mq;
        const [xq, Aq, cq] = Eq.at, uq = [xq + .5, Aq + 1.1, cq + .5];
        this.beacon ??= qq.createParticles(ld, {
          pos: uq,
          half: DV
        }), this.beacon.moveTo(uq), this.beacon.emit(mq)
      }
      startBlast(qq, Eq, gq, Yq) {
        var lq;
        null === (lq = this.beacon) || void 0 === lq || lq.dispose(), this.beacon = null, this.disposeCloud(qq);
        const Oq = (0, Mx.isMobile)() ? .5 : 1;
        this.streams = [Ed, gd, Yd].map((qq => {
          const Eq = Math.round(qq.count * Oq);
          return {
            spec: qq,
            particles: null,
            rate: Eq / ((qq.toMs - qq.fromMs) / 1e3),
            budget: 0,
            left: Eq
          }
        })), this.cloud = {
          blast: gq,
          startMs: Yq
        };
        const mq = Math.max(.25, 1 - gq.distance / (6 * gq.r)),
          xq = gq.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [gq, Yq, lq] of qd) xd(qq, Eq, gq, mq * Yq, lq)
        }), xq))
      }
      emitCloud(qq, Eq, gq) {
        const {
          blast: Yq,
          startMs: lq
        } = this.cloud, Oq = gq - lq, [mq, xq, Aq] = Yq.at, cq = CV(Yq.r);
        for (const uq of this.streams) {
          const {
            spec: gq
          } = uq;
          if (uq.left <= 0 || Oq < gq.fromMs) continue;
          uq.budget += uq.rate * Eq;
          const lq = Math.min(Math.floor(uq.budget), uq.left);
          if (lq < 1) continue;
          uq.budget -= lq, uq.left -= lq;
          const Bq = uq.particles ??= this.createStream(qq, gq, Yq);
          if (gq === Ed) {
            const qq = cq.stemHalfWidth;
            Bq.moveTo([mq, xq + 1, Aq], [qq, 1, qq])
          } else if (gq === gd) {
            const qq = cq.capSpread * Math.min(1, (Oq - gq.fromMs) / 3e3),
              Eq = Math.sqrt(Math.random()),
              Yq = 2 * Math.random() * Math.PI,
              lq = Math.cos(Yq) * Eq,
              uq = Math.sin(Yq) * Eq,
              Wq = mq + lq * qq,
              Nq = Aq + uq * qq,
              aq = cq.capThick,
              Vq = xq + cq.capHeight + aq * (1 - Eq * Eq) * 2;
            Bq.setDirections([.7 * lq, .05, .7 * uq], [lq, .2, uq]), Bq.moveTo([Wq, Vq, Nq], [aq, aq, aq])
          } else {
            this.ringAngle += 2.39996;
            const qq = Math.cos(this.ringAngle),
              Eq = Math.sin(this.ringAngle);
            Bq.setDirections([qq, .05, Eq], [qq, .1, Eq]), Bq.moveTo([mq + 2 * qq, xq + .5, Aq + 2 * Eq], [0, .5, 0])
          }
          Bq.emit(lq)
        }
      }
      createStream(qq, Eq, gq) {
        const {
          r: Yq
        } = gq, lq = Math.max(Eq.life[0], Yq / 25), Oq = Eq === Yd ? [.9 * lq, lq] : Eq.life, mq = CV(Yq), xq = Eq === Yd ? 1 : mq.puffScale, Aq = {
          texture: vV,
          WB: Eq.count + 4,
          minLifeTime: Oq[0] / eV,
          maxLifeTime: Oq[1] / eV,
          minSize: Eq.size[0] * xq,
          maxSize: Eq.size[1] * xq,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, Eq.gravity * eV * eV, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: Eq.from[0],
            maxColor: Eq.from[1]
          }, {
            timeFraction: .6,
            minColor: md(Eq.from[0], Eq.to[0]),
            maxColor: md(Eq.from[1], Eq.to[1])
          }, {
            timeFraction: 1,
            minColor: Eq.to[0],
            maxColor: Eq.to[1]
          }],
          blendMode: Eq.blend
        };
        if (Eq === Ed) {
          const qq = mq.capHeight / ((Oq[0] + Oq[1]) / 2);
          Aq.minEmitPower = .9 * qq * eV, Aq.maxEmitPower = 1.05 * qq * eV, Aq.dir1 = [-.1, 1, -.1], Aq.dir2 = [.1, 1, .1]
        } else Eq === gd ? (Aq.minEmitPower = 1.2, Aq.maxEmitPower = 2, Aq.dir1 = [-1, .05, -1], Aq.dir2 = [1, .2, 1]) : (Aq.minEmitPower = 39.583333333333336, Aq.maxEmitPower = 41.66666666666667, Aq.dir1 = [1, 0, 0], Aq.dir2 = [1, 0, 0]);
        return qq.createParticles(Aq, {
          pos: gq.at
        })
      }
      disposeCloud(qq) {
        for (const gq of this.streams) {
          var Eq;
          null === (Eq = gq.particles) || void 0 === Eq || Eq.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(qq)
      }
    }

    function md(qq, Eq) {
      return [(qq[0] + Eq[0]) / 2, (qq[1] + Eq[1]) / 2, (qq[2] + Eq[2]) / 2, .75 * qq[3]]
    }

    function xd(qq, Eq, gq, Yq, lq) {
      try {
        qq.playSound(Eq, gq, Yq, lq)
      } catch (Oq) {
        console.error(Oq)
      }
    }
    const Ad = {
        WB: 720,
        perS: 100
      },
      cd = {
        WB: 320,
        perS: 44
      };
    class ud {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(qq, Eq) {
        this.zone = {
          centre: [...qq.centre],
          r: qq.r,
          band: qq.band ? [qq.band[0], qq.band[1]] : void 0
        }, this.endsAt = Eq
      }
      stop() {
        this.zone = null
      }
      vy(qq, Eq) {
        const {
          baf2FalloutMs: gq,
          baf2FalloutAt: Yq,
          baf2FalloutR: lq,
          baf2FalloutY: Oq
        } = qq;
        gq > 0 && Yq && void 0 !== lq ? this.start({
          centre: Yq,
          r: lq,
          band: Oq
        }, Eq + gq) : this.stop()
      }
      perS(qq, Eq, gq) {
        const Yq = this.zone;
        if (!Yq) return 0;
        const lq = this.endsAt - qq;
        return lq <= 0 ? (this.zone = null, 0) : Yq.band && (Eq[1] < Yq.band[0] || Eq[1] > Yq.band[1]) || Math.hypot(Eq[0] - Yq.centre[0], Eq[2] - Yq.centre[2]) > Yq.r ? 0 : gq.perS * Math.min(1, lq / 5e3)
      }
    }
    const Bd = [5, 7],
      Wd = [24, 8, 24],
      Nd = .5,
      ad = 1 / .6,
      Vd = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class dd {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Mx.isMobile)();
        this.state = new ud, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(qq) {
          return qq ? cd : Ad
        }(qq)
      }
      startFallout(qq, Eq) {
        this.state.start(qq, Eq)
      }
      stopFallout() {
        this.state.stop()
      }
      vy(qq) {
        this.state.vy(qq, performance.now())
      }
      onAfterRender(qq, Eq) {
        var gq;
        const Yq = performance.now(),
          lq = 0 === this.lastMs ? 0 : Math.min(Yq - this.lastMs, 250) / 1e3;
        this.lastMs = Yq;
        const Oq = this.state.perS(Yq, Eq, this.tier);
        if (Oq <= 0 || !qq.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Oq * lq, Oq / 4);
        const mq = Math.floor(this.budget);
        if (mq < 1) return;
        this.budget -= mq;
        const xq = this.at;
        xq[0] = Eq[0], xq[1] = Eq[1] + 12, xq[2] = Eq[2];
        const Aq = null !== (gq = this.systems) && void 0 !== gq ? gq : this.create(qq, xq),
          cq = this.amounts;
        cq[0] = 0, cq[1] = 0;
        for (let uq = 0; uq < mq; uq++) cq[Math.random() < .3 ? 1 : 0]++;
        for (let uq = 0; uq < Aq.length; uq++) cq[uq] > 0 && (Aq[uq].moveTo(xq, Wd), Aq[uq].emit(cq[uq]))
      }
      dispose() {
        for (const Eq of null !== (qq = this.systems) && void 0 !== qq ? qq : []) {
          var qq;
          Eq.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(qq, Eq) {
        return this.systems = Vd.map((gq => {
          let {
            rgba: [Yq, lq, Oq, mq],
            share: xq
          } = gq;
          const Aq = {
            texture: "square_particle",
            WB: Math.ceil(this.tier.WB * xq),
            minLifeTime: Bd[0] / ad,
            maxLifeTime: Bd[1] / ad,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Nd, -1, Nd],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Yq, lq, Oq, 0]
            }, {
              timeFraction: .15,
              minColor: [Yq, lq, Oq, mq]
            }, {
              timeFraction: .8,
              minColor: [Yq, lq, Oq, mq]
            }, {
              timeFraction: 1,
              minColor: [Yq, lq, Oq, 0]
            }],
            blendMode: zx.h.Standard
          };
          return qq.createParticles(Aq, {
            pos: Eq,
            half: Wd
          })
        })), this.systems
      }
    }
    const jd = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Hd(qq) {
      const Eq = /\|rot(\d)/.exec(qq);
      return jd[Eq ? Number(Eq[1]) : 1]
    }
    var od = gq(590),
      Pd = gq(38455);
    const Qd = new Set(od.j);

    function yd(qq) {
      if (-2 !== qq.count) return null;
      const Eq = Uq(qq.item);
      return null !== Eq && Qd.has(Eq) ? Eq : null
    }

    function td(qq) {
      const {
        width: Eq,
        height: gq
      } = (0, Pd.c)(qq).hitBoxDimensions;
      return .55 / Math.max(Eq, gq)
    }

    function rd(qq, Eq, gq) {
      if (!gq) return !1;
      const Yq = qq[0] + .5 - Eq[0],
        lq = qq[1] + .5 - Eq[1],
        Oq = qq[2] + .5 - Eq[2];
      return Yq * Yq + lq * lq + Oq * Oq <= 576
    }

    function vd(qq, Eq) {
      return Math.atan2(qq[0], qq[2]) + Math.PI + Eq
    }

    function hd(qq, Eq) {
      const gq = 2 * Math.PI;
      return (qq + gq * Eq / 1e4) % gq
    }
    class nd {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = qq, this.now = Eq, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = qq.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(qq, Eq) {
        if (0 === this.farms.size) return;
        const gq = this.now(),
          Yq = Number.isNaN(this.frameMs) ? 0 : Math.min(gq - this.frameMs, 100);
        this.frameMs = gq, gq - this.checkedMs >= 1e3 && (this.checkedMs = gq, this.check(qq, Eq));
        for (const lq of this.farms.values()) lq.shown && lq.running && null !== lq.model && Yq > 0 && (lq.spin = hd(lq.spin, Yq), lq.model.setPose(lq.feet, vd(lq.front, lq.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const qq of this.farms.values()) this.drop(qq);
        this.farms.clear()
      }
      sync() {
        const qq = new Set;
        for (const Eq of this.labels.list()) {
          const gq = yd(Eq);
          if (null === gq) continue;
          qq.add(Eq.key);
          const Yq = this.farms.get(Eq.key);
          if ((null === Yq || void 0 === Yq ? void 0 : Yq.mob) === gq) continue;
          Yq && this.drop(Yq);
          const [lq, Oq, mq] = Eq.pos;
          this.farms.set(Eq.key, {
            pos: Eq.pos,
            feet: [lq + .5, Oq + 1, mq + .5],
            mob: gq,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [Eq, gq] of this.farms) qq.has(Eq) || (this.drop(gq), this.farms.delete(Eq));
        this.checkedMs = -1 / 0
      }
      check(qq, Eq) {
        for (const gq of this.farms.values()) {
          const [Yq, lq, Oq] = gq.pos, mq = Za(qq, gq.pos);
          null !== mq && Zg(mq) === zq && rd(gq.pos, Eq, "Air" === Za(qq, [Yq, lq + 1, Oq])) ? (gq.running = mq.endsWith("|Running"), gq.front = Hd(mq), null === gq.model && (gq.model = qq.createMobModel(gq.mob, td(gq.mob)), null === gq.model) || (gq.model.setPose(gq.feet, vd(gq.front, gq.spin)), gq.shown || (gq.model.setVisible(!0), gq.shown = !0))) : (gq.shown && null !== gq.model && gq.model.setVisible(!1), gq.shown = !1)
        }
      }
      drop(qq) {
        var Eq;
        null === (Eq = qq.model) || void 0 === Eq || Eq.dispose(), qq.model = null, qq.shown = !1
      }
    }
    class bd {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(qq) {
        var Eq;
        this.island = qq.baf2ColIsland, this.islandSite = (Eq = qq.baf2ColSite) && 8 === Eq.length ? {
          spawnXZ: [Eq[0], Eq[1]],
          coreXZ: [Eq[2], Eq[3]],
          minXZ: [Eq[4], Eq[5]],
          maxXZ: [Eq[6], Eq[7]]
        } : null, this.views = qq.baf2ColList.map((qq => ({
          entry: ml(qq)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(qq) {
        this.status = qq, this.emit()
      }
      onOpen(qq) {
        this.openHeld = qq
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
        return this.views.map((qq => qq.entry))
      }
      entryAtRoot(qq) {
        var Eq;
        return null === (Eq = this.views.find((Eq => {
          let {
            entry: gq
          } = Eq;
          return gq.focus[0] === qq[0] && gq.focus[1] === qq[1] + 1 && gq.focus[2] === qq[2]
        }))) || void 0 === Eq ? void 0 : Eq.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(qq, Eq) {
        return LA(this.entries(), qq, Eq)
      }
      lookSource() {
        return {
          handles: qq => WY(qq) >= 0 || NY(qq),
          line: (qq, Eq) => this.lookLine(qq, Eq),
          version: () => this.beamsVersion
        }
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const qq of this.listeners) qq()
      }
    }
    const Zd = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((qq => qq / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((qq => [qq, qq + 1, qq + 2, qq, qq + 2, qq + 3]))
    };

    function fd(qq, Eq, gq, Yq, lq, Oq, mq) {
      let xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Aq = Math.cos(xq),
        cq = Math.sin(xq),
        uq = qq.positions.length / 3,
        {
          positions: Bq,
          indices: Wq
        } = Zd;
      for (let Nq = 0; Nq < Bq.length; Nq += 3) {
        const xq = Bq[Nq] * lq,
          uq = Bq[Nq + 2] * mq;
        qq.positions.push(Eq + xq * Aq + uq * cq, gq + Bq[Nq + 1] * Oq, Yq - xq * cq + uq * Aq)
      }
      for (const Nq of Wq) qq.indices.push(uq + Nq)
    }

    function Md(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return Eq < 1 ? {
        rgb: qq,
        alpha: Eq
      } : {
        rgb: qq,
        alpha: 1,
        opaque: !0
      }
    }
    class Td {
      constructor(qq, Eq) {
        this.style = qq, this.perSource = Eq, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(qq) {
        this.sources = qq, 0 === qq.length && (this.budget = 0)
      }
      SB(qq, Eq, gq) {
        const Yq = this.sources.length;
        if (0 !== Yq) {
          var lq, Oq;
          this.budget = Math.min(this.budget + (lq = Yq, Oq = this.perSource, Math.min(lq * Oq, qc) * Eq), 2);
          for (let Eq = 0; Eq < Yq && this.budget >= 1; Eq++) {
            const Eq = this.sources[this.cursor % Yq];
            this.cursor = (this.cursor + 1) % Yq;
            if (!(Math.max(Math.abs(Eq.x - gq[0]), Math.abs(Eq.y - gq[1]), Math.abs(Eq.z - gq[2])) > 32)) return this.puff(qq, Eq), void this.budget--
          }
        }
      }
      dispose() {
        var qq;
        null === (qq = this.particles) || void 0 === qq || qq.dispose(), this.particles = null, this.sources = []
      }
      puff(qq, Eq) {
        let {
          x: gq,
          y: Yq,
          z: lq,
          h: Oq,
          faces: mq
        } = Eq;
        const xq = function(qq, Eq, gq, Yq, lq) {
            const [Oq, mq, xq] = lq[Math.floor(Math.random() * lq.length)], Aq = .04, cq = (qq, Eq, gq) => qq > 0 ? Eq + gq + Aq : qq < 0 ? Eq - Aq : Eq + .1, uq = (qq, Eq, gq) => qq > 0 ? Eq + gq + Aq : qq < 0 ? Eq - Aq : Eq + gq - .1, Bq = [cq(Oq, qq, 1), cq(mq, Eq, Yq), cq(xq, gq, 1)], Wq = [uq(Oq, qq, 1), uq(mq, Eq, Yq), uq(xq, gq, 1)];
            return {
              pos: [(Bq[0] + Wq[0]) / 2, (Bq[1] + Wq[1]) / 2, (Bq[2] + Wq[2]) / 2],
              half: [(Wq[0] - Bq[0]) / 2, (Wq[1] - Bq[1]) / 2, (Wq[2] - Bq[2]) / 2],
              out: [Oq, mq, xq]
            }
          }(gq, Yq, lq, Oq, mq),
          {
            style: Aq
          } = this,
          cq = this.particles ??= qq.createParticles(nV(Aq, Math.ceil(Aq.count * qc * Aq.life[1]) + 4), xq);
        cq.moveTo(xq.pos, xq.half);
        const [uq, Bq, Wq] = xq.out, Nq = Aq.spread;
        cq.setDirections([uq - Nq, .6 + Bq, Wq - Nq], [uq + Nq, 1 + Bq, Wq + Nq]), cq.emit(Aq.count)
      }
    }
    const zd = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Sd {
      constructor() {
        this.green = new Td(gc.green, eA), this.pink = new Td(gc.pink, DA), this.colliders = [], this.lastMs = 0
      }
      setSources(qq) {
        this.colliders = qq;
        const Eq = [],
          gq = [];
        for (const Yq of qq) {
          const [qq, lq, Oq] = Yq.focus;
          Eq.push({
            x: qq,
            y: lq - 1,
            z: Oq,
            h: 2,
            faces: zd
          });
          for (let Eq = 0; Eq < 4; Eq++) {
            if (!Yq.live[Eq]) continue;
            const [qq, lq, Oq] = dY(Yq.focus, Eq, mY.LASER_D), [mq, , xq] = VY[Eq], Aq = zd.filter((qq => qq[0] !== mq || qq[2] !== xq || 0 !== qq[1]));
            gq.push({
              x: qq,
              y: lq,
              z: Oq,
              h: 1,
              faces: Aq
            })
          }
        }
        this.green.setSources(Eq), this.pink.setSources(gq)
      }
      onAfterRender(qq) {
        const Eq = performance.now(),
          gq = 0 === this.lastMs ? 0 : Math.min(Eq - this.lastMs, 250) / 1e3;
        if (this.lastMs = Eq, 0 === this.colliders.length || !qq.particlesEnabled()) return;
        const Yq = qq.getCameraPosition();
        this.green.SB(qq, gq, Yq), this.pink.SB(qq, gq, Yq)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const pd = 1.04,
      Gd = Md([1, 120 / 255, 220 / 255]),
      Ld = Md([1, .25, .25], .35);
    class Jd {
      constructor(qq) {
        this.store = qq, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Sd
      }
      onAfterRender(qq) {
        this.store.version() !== this.builtVersion && this.rebuild(qq);
        const Eq = performance.now();
        for (const gq of this.beams) {
          const Yq = 1 + .35 * Math.sin(Eq / 700 * Math.PI * 2 + gq.phase);
          qq.setGameMesh(gq.mesh, {
            scale: [gq.alongX ? 1 : Yq, Yq, gq.alongX ? Yq : 1]
          })
        }
        this.glow.onAfterRender(qq)
      }
      dispose(qq) {
        this.clear(qq), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(qq) {
        this.clear(qq), this.builtVersion = this.store.version();
        const Eq = [];
        for (const {
            entry: gq
          }
          of this.store.colliders()) gq.on && gq.live.some(Boolean) && (this.addBeams(qq, gq), Eq.push(gq)), gq.blockers.length > 0 && this.addMarkers(qq, gq);
        this.glow.setSources(Eq)
      }
      addBeams(qq, Eq) {
        const [gq, Yq, lq] = Eq.focus, Oq = IA - .25, mq = (.25 + IA) / 2;
        for (let xq = 0; xq < 4; xq++) {
          if (!Eq.live[xq]) continue;
          const [Aq, , cq] = VY[xq], uq = 0 !== Aq, Bq = {
            positions: [],
            indices: []
          };
          fd(Bq, 0, 0, 0, uq ? Oq : .2, .2, uq ? .2 : Oq);
          const Wq = [gq + .5 + Aq * mq, Yq + .5, lq + .5 + cq * mq],
            Nq = qq.createGameMesh(Bq, Gd, Wq);
          this.meshes.push(Nq), this.beams.push({
            mesh: Nq,
            alongX: uq,
            phase: xq * Math.PI / 2
          })
        }
      }
      addMarkers(qq, Eq) {
        const gq = Eq.blockers[0],
          Yq = {
            positions: [],
            indices: []
          };
        for (const [lq, Oq, mq] of Eq.blockers) fd(Yq, lq - gq[0] + .5, Oq - gq[1] + .5, mq - gq[2] + .5, pd, pd, pd);
        this.meshes.push(qq.createGameMesh(Yq, Ld, gq))
      }
      clear(qq) {
        for (const Eq of this.meshes) qq.disposeGameMesh(Eq);
        this.meshes = [], this.beams = []
      }
    }
    const kd = [.56, .83, 1],
      Rd = [1, .73, .08],
      Ud = [1, .25, .25],
      Fd = [.85, .85, .85],
      sd = [.3, .45, .6];

    function Xd(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const mq = lq / 2,
        xq = lq + Oq;
      for (const Aq of [-mq, mq])
        for (const lq of [-mq, mq]) fd(qq, Eq, gq + Aq, Yq + lq, xq, Oq, Oq), fd(qq, Eq + Aq, gq, Yq + lq, Oq, xq, Oq), fd(qq, Eq + Aq, gq + lq, Yq, Oq, Oq, xq)
    }

    function wd(qq) {
      return Eq => qq.isBlockInLoadedChunk(Eq[0], Eq[1], Eq[2]) && 0 === qq.getBlockId(Eq[0], Eq[1], Eq[2])
    }

    function Kd(qq) {
      return qq.map((qq => {
        let {
          free: Eq,
          blocked: gq,
          gaps: Yq,
          supports: lq
        } = qq;
        return `${Eq.join(";")}|${gq.join(";")}|${Yq.join(";")}|${lq.join(";")}`
      })).join("/")
    }

    function Cd(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Oq = Eq[0],
        mq = {
          positions: [],
          indices: []
        };
      for (const [xq, Aq, cq] of Eq) Xd(mq, xq - Oq[0] + .5, Aq - Oq[1] + .5, cq - Oq[2] + .5, Yq, lq);
      return qq.createGameMesh(mq, gq, Oq)
    }
    class Id {
      constructor(qq) {
        this.store = qq, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(qq, Eq, gq) {
        var Yq;
        const lq = null === (Yq = qq.Ngq(Eq)) || void 0 === Yq ? void 0 : Yq.name;
        if (lq !== AY && lq !== xY) return void("" !== this.shownKey && this.show(qq, "", []));
        const Oq = performance.now();
        if (Oq - this.lastCheckMs >= 200 && (this.lastCheckMs = Oq, lq === AY ? this.check(qq, gq) : this.preview(qq, gq)), this.pulses.length > 0) {
          const Eq = 1 + .12 * Math.sin(Oq / 1e3 * 1.25 * Math.PI * 2),
            gq = [Eq, Eq, Eq];
          for (const Yq of this.pulses) qq.setGameMesh(Yq, {
            scale: gq
          })
        }
      }
      dispose(qq) {
        this.clear(qq), this.shownKey = ""
      }
      check(qq, Eq) {
        const gq = wd(qq),
          Yq = [];
        for (const {
            entry: Oq
          }
          of this.store.colliders()) {
          Oq.focus.every(((qq, gq) => Math.abs(qq + .5 - Eq[gq]) <= mY.GHOST_REACH)) && Yq.push(CA(Oq, gq))
        }
        const lq = Kd(Yq);
        lq !== this.shownKey && this.show(qq, lq, Yq)
      }
      preview(qq, Eq) {
        const gq = qq.getTargetedBlock(),
          Yq = gq ? [gq.MV[0], gq.MV[1], gq.MV[2]] : null,
          lq = null !== Yq && Yq.every(((qq, gq) => Math.abs(qq + .5 - Eq[gq]) <= 8)),
          Oq = this.store.site(),
          mq = lq && Oq ? function(qq, Eq, gq) {
            const Yq = aY(qq);
            if (!Yq.every(Eq)) return null;
            const lq = oY(qq, gq);
            return {
              column: Yq,
              spots: CA({
                focus: Yq[1],
                lasers: [!1, !1, !1, !1],
                open: lq,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, Eq),
              fits: lq.filter(Boolean).length >= mY.MIN_SPOTS
            }
          }(Yq, wd(qq), Oq) : null,
          xq = mq ? [mq.spots] : [],
          Aq = mq ? `preview ${Yq.join(",")}|${mq.fits}|${Kd(xq)}` : "";
        var cq, uq;
        Aq !== this.shownKey && this.show(qq, Aq, xq, null !== (cq = null === mq || void 0 === mq ? void 0 : mq.column) && void 0 !== cq ? cq : [], null === (uq = null === mq || void 0 === mq ? void 0 : mq.fits) || void 0 === uq || uq)
      }
      show(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(qq), this.shownKey = Eq, Yq.length > 0 && this.meshes.push(Cd(qq, Yq, Md(lq ? Fd : Ud)));
        for (const {
            free: Oq,
            blocked: mq,
            gaps: xq,
            supports: Aq
          }
          of gq) {
          for (const [Eq, gq, Yq] of Oq) {
            const lq = {
              positions: [],
              indices: []
            };
            Xd(lq, 0, 0, 0);
            const Oq = qq.createGameMesh(lq, Md(kd), [Eq + .5, gq + .5, Yq + .5]);
            this.meshes.push(Oq), this.pulses.push(Oq)
          }
          mq.length > 0 && this.meshes.push(Cd(qq, mq, Md(Rd))), xq.length > 0 && this.meshes.push(Cd(qq, xq, Md(Ud), 1.06, .07)), Aq.length > 0 && this.meshes.push(Cd(qq, Aq, Md(sd)))
        }
      }
      clear(qq) {
        for (const Eq of this.meshes) qq.disposeGameMesh(Eq);
        this.meshes = [], this.pulses = []
      }
    }
    class ed {
      constructor() {
        this.stored = new Map, this.Fc = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(qq) {
        if (!qq.baf2TermOpen) return !1;
        qq.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [Eq, gq] of qq.baf2TermItems) gq > 0 ? this.stored.set(Eq, gq) : this.stored.delete(Eq);
        if (qq.baf2TermHeld && (this.Fc = new Map(qq.baf2TermHeld)), this.pending = this.pending.filter((Eq => Eq.seq > qq.baf2TermAcked)), this.silos = qq.baf2TermSilos, this.readOnly = qq.baf2TermReadOnly, this.pocket = !0 === qq.baf2TermPocket, qq.baf2TermReset) this.resort();
        else {
          const qq = new Set(this.order);
          for (const Eq of this.stored.keys()) qq.has(Eq) || this.order.push(Eq)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((qq, Eq) => this.amount(Eq) - this.amount(qq) || qq.localeCompare(Eq))), this.changed()
      }
      take(qq, Eq) {
        const gq = xE(qq, this.amount(Eq));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Eq,
          amount: gq,
          put: !1
        }), this.recents = [Eq, ...this.recents.filter((qq => qq !== Eq))].slice(0, 6), this.changed(), gE(this.seq, qq, Eq)
      }
      put(qq, Eq) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Eq,
          amount: xE(qq, this.heldAmount(Eq)),
          put: !0
        }), this.changed(), YE(this.seq, qq, Eq)
      }
      putAll() {
        this.seq++;
        for (const qq of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: qq,
          amount: this.heldAmount(qq),
          put: !0
        });
        return this.changed(), lE(this.seq)
      }
      amount(qq) {
        var Eq;
        let gq = null !== (Eq = this.stored.get(qq)) && void 0 !== Eq ? Eq : 0;
        for (const Yq of this.pending) Yq.item === qq && (gq += Yq.put ? Yq.amount : -Yq.amount);
        return Math.max(0, gq)
      }
      heldAmount(qq) {
        var Eq;
        let gq = null !== (Eq = this.Fc.get(qq)) && void 0 !== Eq ? Eq : 0;
        for (const Yq of this.pending) Yq.put && Yq.item === qq && (gq -= Yq.amount);
        return Math.max(0, gq)
      }
      heldItems() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((Eq => Eq === qq || this.heldAmount(Eq) > 0))
      }
      items() {
        return this.order.filter((qq => this.amount(qq) > 0))
      }
      recent() {
        return this.recents.filter((qq => this.amount(qq) > 0))
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
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      changed() {
        this.version++;
        for (const qq of this.listeners) qq()
      }
    }
    var Dd = gq(38408);
    const qj = {
      isBlock: qq => void 0 !== Zq.i[qq],
      harvestType: qq => {
        var Eq;
        return null === (Eq = Zq.i[qq]) || void 0 === Eq ? void 0 : Eq.harvestType
      },
      harvestLevel: qq => {
        var Eq;
        return null === (Eq = Zq.i[qq]) || void 0 === Eq ? void 0 : Eq.harvestLevel
      },
      dropsNothing: qq => {
        var Eq;
        return null === (null === (Eq = Zq.i[qq]) || void 0 === Eq ? void 0 : Eq.drops)
      },
      displayName: qq => {
        var Eq;
        return null === (Eq = Dm.m[qq]) || void 0 === Eq ? void 0 : Eq.displayName
      },
      description: qq => {
        var Eq;
        return null === (Eq = Dm.m[qq]) || void 0 === Eq ? void 0 : Eq.description
      },
      harvests: qq => {
        var Eq;
        return null === (Eq = Dm.m[qq]) || void 0 === Eq ? void 0 : Eq.harvests
      },
      level: qq => {
        var Eq;
        return null === (Eq = Dm.m[qq]) || void 0 === Eq ? void 0 : Eq.level
      }
    };

    function Ej(qq, Eq, gq) {
      return function(qq, Eq, gq, Yq) {
        var lq, Oq;
        const mq = Eq.split("|")[0],
          xq = qq.isBlock(Eq) ? Eq : qq.isBlock(mq) ? mq : null;
        if (null === xq || "rock" !== qq.harvestType(xq) || qq.dropsNothing(xq) && !GY.has(mq)) return null;
        const Aq = gq && "rock" === qq.harvests(gq) ? null !== (lq = qq.level(gq)) && void 0 !== lq ? lq : 0 : null,
          cq = null !== (Oq = null !== Yq && void 0 !== Yq ? Yq : qq.harvestLevel(xq)) && void 0 !== Oq ? Oq : 0;
        return (null !== Aq ? cq <= Aq : 0 === qq.harvestLevel(xq)) ? null : hY(qq, cq)
      }(qj, qq, Eq, gq)
    }

    function gj(qq, Eq) {
      return function(qq, Eq, gq) {
        if (Eq === vY[0]) return [(0, Tq.Yd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Tq.M.whiteUiText)];
        const Yq = gq.split("|")[0],
          lq = qq.isBlock(Yq) ? qq.displayName(Yq) : void 0,
          Oq = "string" === typeof lq ? lq : lq && "translationKey" in lq ? `$t(${lq.translationKey})` : Yq;
        return [(0, Tq.Yd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Oq
          }
        }, Tq.M.whiteUiText), (0, Tq.Yd)({
          translationKey: `item:${(0,Tq.ue)(Eq)}`
        }, Tq.M.yellowUiText)]
      }(qj, qq, Eq)
    }
    const Yj = "buildAFactory2Game:";
    const lj = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Oj(qq) {
      return qq.endsWith(" Ore")
    }
    const mj = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      xj = [],
      Aj = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: mj,
        plan: null,
        atomic: xj
      },
      cj = "buildAFactory2Game:",
      uj = new Set(["Splitter", "Sorting Gate"]),
      Bj = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Wj {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = qq, this.planAt = Eq, this.tierOf = gq, this.lc = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Fc = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Aj, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(qq, Eq, gq) {
        var Yq, lq, Oq;
        let mq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const xq = null !== (Yq = null === (lq = qq.Ngq(Eq)) || void 0 === lq ? void 0 : lq.name) && void 0 !== Yq ? Yq : null,
          Aq = qq.isPlayerCrouching(Eq),
          cq = 0 === gq ? null : this.resolve(qq, gq),
          uq = null !== cq && null !== mq && uj.has(cq.rootName) && function(qq, Eq) {
            return Bj.some((gq => {
              let [Yq, lq] = gq;
              const Oq = qq.getBlockId(Eq[0] + Yq, Eq[1], Eq[2] + lq);
              return 0 !== Oq && "Express Belt" === qq.getMetaInfo(Oq).rootName
            }))
          }(qq, mq),
          Bq = this.updatePlan(0 === gq ? null : mq),
          Wq = this.tierOf(),
          Nq = null === mq ? null : (0, Dd.d)(gq),
          aq = null !== Nq && null !== mq && (0, Dd.e)(function(qq) {
            return (Eq, gq, Yq) => qq.getBlockId(Eq, gq, Yq)
          }(qq), mq[0], mq[1], mq[2], Nq),
          Vq = this.readAfloat(qq, gq, mq);
        if (gq === this.lc && aq === this.missesMaker && Vq === this.afloat && xq === this.Fc && Aq === this.crouching && uq === this.express && Wq === this.tier && !Bq && (!this.targetsLive || !this.liveMoved(mq))) return;
        this.lc = gq, this.missesMaker = aq, this.afloat = Vq, this.Fc = xq, this.crouching = Aq, this.express = uq;
        const dq = uq && cq ? function(qq) {
          if (null === qq.info) return null;
          return qq.express ??= {
            ...qq.info,
            detail: `${cj}lookKeepsUpExpress`,
            detailItem: null
          }, qq.express
        }(cq) : null !== cq && aq && null !== Nq ? this.besideMaker(cq, gq, Nq) : null !== cq && Vq ? this.hanging(cq) : null !== (Oq = null === cq || void 0 === cq ? void 0 : cq.info) && void 0 !== Oq ? Oq : null;
        this.tier = Wq;
        const jq = cq && dq ? function(qq, Eq) {
          var gq, Yq;
          const lq = Zq.i[qq];
          if (!qq.endsWith(" Ore") || "rock" !== (null === lq || void 0 === lq ? void 0 : lq.harvestType) || 0 === lq.harvestLevel) return null;
          const Oq = null !== (gq = lq.harvestLevel) && void 0 !== gq ? gq : 0,
            mq = Eq ? Dm.m[Eq] : void 0;
          if ("rock" === (null === mq || void 0 === mq ? void 0 : mq.harvests) && (null !== (Yq = mq.level) && void 0 !== Yq ? Yq : 0) >= Oq) return null;
          const xq = (Aq = Oq, hY(qj, Aq));
          var Aq;
          if (null === xq) return null;
          const cq = gO(xq),
            uq = /^[AEIOU]/.test(xq) ? "An" : "";
          if ("rock" === (null === mq || void 0 === mq ? void 0 : mq.harvests) && Eq) return {
            key: `${cj}lookToolTooWeak${uq}`,
            Fc: gO(Eq),
            needed: cq
          };
          return {
            key: xq === vY[0] ? `${cj}lookNeedAnyPickaxe` : `${cj}lookNeedPickaxe${uq}`,
            Fc: null,
            needed: cq
          }
        }(cq.rootName, xq) : null;
        this.targetsLive = !0 === (null === cq || void 0 === cq ? void 0 : cq.live) && null !== mq;
        let Hq = null;
        this.targetsLive && cq && mq && this.live && (this.livePos[0] = mq[0], this.livePos[1] = mq[1], this.livePos[2] = mq[2], this.liveVersion = this.live.version(), Hq = this.live.line(cq.rootName, mq));
        const oq = null === dq ? mj : function(qq, Eq, gq) {
            const Yq = function(qq, Eq, gq) {
              const Yq = Mg(qq);
              if (null === Yq) return null;
              const lq = `${Yj}lookPortMode_${Yq}`,
                Oq = kY(Eq);
              if (Oq && gq) return {
                mode: null,
                detail: lq,
                next: `${Yj}lookWrenchPickUp`,
                nextState: null
              };
              const mq = Tg(qq),
                xq = null === mq ? null : Mg(mq);
              return null === xq ? {
                mode: null,
                detail: lq,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: lq,
                next: Oq ? `${Yj}lookWrenchNext` : `${Yj}lookPortWrench`,
                nextState: `${Yj}lookPortState_${xq}`
              }
            }(qq, Eq, gq);
            if (null !== Yq) return Yq;
            const lq = gl(qq, Eq, gq);
            return null === lq.mode && null === lq.next ? mj : lq
          }(qq.blockIdToBlockName(gq), xq, Aq),
          Pq = this.plan,
          Qq = cq && dq ? this.rowsOf(cq.rootName, Wq) : xj,
          yq = this.snapshot;
        if (!(null === dq ? !yq.visible : yq.visible && dq === yq.info && (tq = jq, rq = yq.tool, tq === rq || null !== tq && null !== rq && tq.key === rq.key && tq.Fc === rq.Fc && tq.needed === rq.needed) && function(qq, Eq) {
            return qq === Eq || null !== qq && null !== Eq && qq.key === Eq.key && JSON.stringify([qq.params, qq.keys]) === JSON.stringify([Eq.params, Eq.keys])
          }(Hq, yq.live) && function(qq, Eq) {
            return qq.mode === Eq.mode && qq.detail === Eq.detail && qq.next === Eq.next && qq.nextState === Eq.nextState
          }(oq, yq.wrench) && Ra(Pq, yq.plan) && Qq === yq.atomic)) {
          var tq, rq;
          this.snapshot = null === dq ? {
            ...yq,
            visible: !1
          } : {
            info: dq,
            visible: !0,
            tool: jq,
            live: Hq,
            wrench: oq,
            plan: Pq,
            atomic: Qq
          };
          for (const qq of this.listeners) qq()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Aj, this.lc = 0, this.Fc = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(qq, Eq, gq) {
        if (null === gq || 0 === Eq || !xq() || !Oj(this.resolve(qq, Eq).rootName)) return !1;
        const Yq = `${gq[0]},${gq[1]},${gq[2]},${Eq}`,
          lq = performance.now();
        return Yq === this.afloatKey && lq - this.afloatAt < Nj ? this.afloat : (this.afloatKey = Yq, this.afloatAt = lq, function(qq, Eq) {
          for (const [gq, Yq, lq] of lj) {
            const Oq = Eq(qq[0] + gq, qq[1] + Yq, qq[2] + lq);
            if (void 0 === Oq || null !== Oq && !Oj(Oq)) return !1
          }
          return !0
        }(gq, ((Eq, gq, Yq) => function(qq, Eq, gq, Yq) {
          if (!qq.isBlockInLoadedChunk(Eq, gq, Yq)) return;
          const lq = qq.getBlockId(Eq, gq, Yq);
          return 0 === lq ? null : qq.getMetaInfo(lq).rootName
        }(qq, Eq, gq, Yq))))
      }
      liveMoved(qq) {
        var Eq;
        const {
          livePos: gq
        } = this;
        return null === qq || qq[0] !== gq[0] || qq[1] !== gq[1] || qq[2] !== gq[2] || (null === (Eq = this.live) || void 0 === Eq ? void 0 : Eq.version()) !== this.liveVersion
      }
      updatePlan(qq) {
        const Eq = null === qq ? "" : qq.join(","),
          gq = performance.now();
        if (Eq === this.planPos && gq - this.planMs < 250) return !1;
        this.planPos = Eq, this.planMs = gq;
        const Yq = null === qq ? null : this.planAt([qq[0], qq[1], qq[2]]),
          lq = !Ra(Yq, this.plan);
        return this.plan = Yq, lq
      }
      besideMaker(qq, Eq, gq) {
        let {
          info: Yq
        } = qq;
        if (null === Yq) return null;
        let lq = this.besideMakerById.get(Eq);
        if (void 0 === lq) {
          const qq = "cryo" === gq ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          lq = {
            ...Yq,
            detail: `${cj}${qq}`,
            detailItem: null
          }, this.besideMakerById.set(Eq, lq)
        }
        return lq
      }
      hanging(qq) {
        let {
          info: Eq,
          rootName: gq
        } = qq;
        if (null === Eq) return null;
        let Yq = this.afloatByRoot.get(gq);
        return void 0 === Yq && (Yq = {
          ...Eq,
          detail: `${cj}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(gq, Yq)), Yq
      }
      rowsOf(qq, Eq) {
        if (null === Eq) return xj;
        const gq = `${qq}|${Eq}`;
        let Yq = this.rowsByKey.get(gq);
        if (void 0 === Yq) {
          const lq = function(qq, Eq) {
            var gq;
            if (!(qq in TE)) return [];
            const Yq = null !== (gq = zE[qq]) && void 0 !== gq ? gq : [],
              lq = new Map;
            for (const mq of kO(qq, Eq))
              if ((Yq.includes(mq) || JO(mq.output) && GO(mq.output) > Cq(qq)) && GO(mq.output) <= Eq) {
                var Oq;
                const qq = null !== (Oq = lq.get(mq.output)) && void 0 !== Oq ? Oq : [];
                qq.push(mq.input), lq.set(mq.output, qq)
              } return UO([...lq], (qq => {
              let [Eq] = qq;
              return -GO(Eq)
            })).map((qq => {
              let [Eq, gq] = qq;
              return {
                output: Eq,
                inputs: gq
              }
            }))
          }(qq, Eq);
          Yq = lq.length > 0 ? lq : xj, this.rowsByKey.set(gq, Yq)
        }
        return Yq
      }
      resolve(qq, Eq) {
        const {
          rootId: gq,
          rootName: Yq
        } = qq.getMetaInfo(Eq), lq = (0, ag.g)(Yq) ? Eq : gq;
        let Oq = this.byRootId.get(lq);
        const mq = xq();
        if (void 0 === Oq || Oq.nuclear !== mq) {
          var Aq;
          const gq = function(qq) {
            return SY(qj, qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq)
          }(Yq, qq.blockIdToBlockName(Eq));
          Oq = {
            info: gq,
            rootName: Yq,
            live: null !== gq && !0 === (null === (Aq = this.live) || void 0 === Aq ? void 0 : Aq.handles(Yq)),
            nuclear: mq
          }, this.byRootId.set(lq, Oq)
        }
        return Oq
      }
    }
    const Nj = 500;
    const aj = (0, Yq.memo)((function(qq) {
      var Eq, gq;
      let {
        store: lq
      } = qq;
      const {
        t: Oq
      } = (0, hl.v)(), [mq, xq] = (0, Yq.useState)((() => lq.get()));
      (0, Yq.useEffect)((() => (xq(lq.get()), lq.subscribe((() => {
        xq(lq.get())
      })))), [lq]);
      const {
        openInGameMenuName: Aq,
        openEverythingMenuName: cq,
        isTouchScreen: uq
      } = (0, ol.j)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Bq,
        tool: Wq,
        live: Nq,
        wrench: aq,
        atomic: Vq
      } = mq, dq = mq.visible && null === Aq && null === cq;
      if (null === Bq) return null;
      const jq = null !== aq.detail ? Oq(aq.detail) : null !== (Eq = mq.plan) && void 0 !== Eq && Eq.ctrl ? Oq("buildAFactory2Game:lookPlanCtrl") : null !== Bq.detail ? Oq(Bq.detail, null === Bq.detailItem ? void 0 : {
        item: Oq(Bq.detailItem)
      }) : null;
      return (0, rO.jsxs)("div", {
        className: yl()("Baf2LookTarget", {
          Visible: dq
        }),
        "aria-hidden": !dq,
        children: [(0, rO.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Oq(Bq.name)
        }), null !== mq.plan && (0, rO.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Oq(mq.plan.key, {
            kind: Oq(mq.plan.kindKey),
            w: String(mq.plan.w),
            h: String(mq.plan.h),
            d: String(mq.plan.d),
            count: String(mq.plan.count)
          })
        }), void 0 !== (null === (gq = mq.plan) || void 0 === gq ? void 0 : gq.why) && (0, rO.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Oq(mq.plan.why)
        }), null !== aq.mode && (0, rO.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Oq(aq.mode)
        }), null !== Wq ? (0, rO.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Oq(Wq.key, {
            item: Oq(Wq.needed),
            Fc: null === Wq.Fc ? "" : Oq(Wq.Fc)
          })
        }) : null !== Nq ? (0, rO.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Oq(Nq.key, Yc(Oq, Nq))
        }) : null !== jq && (0, rO.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: jq
        }), Vq.length > 0 && (0, rO.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Oq("buildAFactory2Game:lookAtomicRecipes", {
            list: Vq.map((qq => {
              let {
                output: Eq,
                inputs: gq
              } = qq;
              const Yq = gq.length > 1 ? ` ${Oq("buildAFactory2Game:recipeMore",{count:String(gq.length-1)})}` : "";
              return `${Oq(gO(gq[0]))}${Yq} \u2192 ${Oq(gO(Eq))}`
            })).join(", ")
          })
        }), null !== aq.next && (0, rO.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Oq(aq.next, {
            state: null === aq.nextState ? "" : Oq(aq.nextState),
            use: Oq(uq ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Vj = gq(38486);
    const dj = [],
      jj = [
        [0, -1, 0]
      ];

    function Hj(qq) {
      const Eq = [qq];
      for (let gq = 1; gq <= 4; gq++) gq > 1 && Eq.push(`${qq}|meta|rot${gq}`), Eq.push(`${qq}|meta|rot${gq}|Running`);
      return Eq
    }

    function oj(qq, Eq) {
      return [Math.floor(qq[0] / Eq), Math.floor(qq[1] / Eq), Math.floor(qq[2] / Eq)]
    }

    function Pj(qq, Eq, gq) {
      return `${qq},${Eq},${gq}`
    }

    function Qj(qq) {
      const Eq = qq.split("|")[0];
      if (!cg(Eq)) return dj;
      const gq = TE[Eq];
      if (Eg(gq)) return jj;
      const Yq = Hd(qq);
      return gg(gq) ? [
        [-Yq[0], -Yq[1], -Yq[2]]
      ] : tl(gq) ? function(qq, Eq) {
        const gq = qq[0] - 2 * Eq[0],
          Yq = qq[2] - 2 * Eq[2],
          lq = [];
        for (let Oq = -1; Oq <= 1; Oq++)
          for (let Eq = -1; Eq <= 1; Eq++) lq.push([gq + Oq, qq[1], Yq + Eq]);
        return lq
      }([0, 0, 0], Yq) : dj
    }
    const yj = [.5, .5, .5],
      tj = [.2, .8, .3],
      rj = [.45, 1, .5];
    class vj {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(qq) {
        this.indexed = !0;
        for (const Eq of nE)
          for (const gq of Hj(Eq)) {
            const Eq = qq.blockNameToBlockId(gq, !0),
              Yq = Qj(gq);
            null !== Eq && Yq.length > 0 && (this.offsetsList.push(Yq), this.offsetsIndexById[Eq] = this.offsetsList.length)
          }
      }
      onAfterRender(qq, Eq) {
        this.indexed || this.index(qq);
        const gq = performance.now();
        if (gq - this.lastCheckMs < 100) return;
        this.lastCheckMs = gq, this.checks++;
        const Yq = ua.c.Oa,
          [lq, Oq, mq] = oj(Eq, Yq);
        let xq = !1;
        const Aq = [];
        let cq = 0;
        for (let uq = lq - 2; uq <= lq + 2; uq++)
          for (let Eq = Oq - 1; Eq <= Oq + 1; Eq++)
            for (let lq = mq - 2; lq <= mq + 2; lq++) {
              const Oq = cq++,
                mq = Pj(uq, Eq, lq),
                Bq = qq.getChunkVersion(uq, Eq, lq);
              let Wq = this.chunks.get(mq);
              null !== Bq ? (Wq || (Wq = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(mq, Wq)), Wq.seenAt = this.checks, Wq.checkedVersion !== Bq && (Wq.checkedVersion = Bq, xq = !0), Wq.scannedVersion !== Bq && gq - Wq.scannedAt >= 500 && Aq.push({
                slot: Oq,
                entry: Wq,
                origin: [uq * Yq, Eq * Yq, lq * Yq]
              })) : (xq ||= void 0 !== Wq, this.chunks.delete(mq))
            }
        this.scanDue(qq, Aq) && (xq = !0);
        for (const [uq, Bq] of this.chunks) Bq.seenAt !== this.checks && (xq ||= Bq.machines.length > 0, this.chunks.delete(uq));
        for (const uq of this.chunks.values())
          for (const [Eq, gq, Yq] of uq.cellChunks)(Math.abs(Eq - lq) > 2 || Math.abs(gq - Oq) > 1 || Math.abs(Yq - mq) > 2) && this.watchCellChunk(qq, Eq, gq, Yq) && (xq = !0);
        for (const [uq, Bq] of this.cellChunks) Bq.seenAt !== this.checks && this.cellChunks.delete(uq);
        xq && this.refresh(qq)
      }
      dispose(qq) {
        this.clearMeshes(qq), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(qq, Eq) {
        const gq = Math.max(Eq.findIndex((qq => {
          let {
            slot: Eq
          } = qq;
          return Eq >= this.scanFrom
        })), 0);
        let Yq = 96;
        for (let lq = 0; lq < Eq.length; lq++) {
          const {
            slot: Oq,
            entry: mq,
            origin: xq
          } = Eq[(gq + lq) % Eq.length];
          if (Yq -= this.scan(qq, mq, xq), Yq <= 0) {
            this.scanFrom = Oq + 1;
            break
          }
        }
        return Eq.length > 0
      }
      scan(qq, Eq, gq) {
        let [Yq, lq, Oq] = gq;
        const mq = ua.c.Oa,
          xq = this.hits;
        xq.length = 0;
        const Aq = qq.scanBlocks(Yq, lq, Oq, Yq + mq, lq + mq, Oq + mq, this.offsetsIndexById, xq),
          cq = [];
        for (let uq = 0; uq < xq.length; uq += 4) cq.push({
          pos: [xq[uq], xq[uq + 1], xq[uq + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[xq[uq + 3]] - 1]
        });
        return Eq.machines = cq, Eq.cellChunks = function(qq, Eq) {
          const gq = new Set,
            Yq = [];
          for (const {
              pos: lq,
              offsets: Oq
            }
            of qq)
            for (const [qq, mq, xq] of Oq) {
              const Oq = oj([lq[0] + qq, lq[1] + mq, lq[2] + xq], Eq),
                Aq = Pj(...Oq);
              gq.has(Aq) || (gq.add(Aq), Yq.push(Oq))
            }
          return Yq
        }(cq, mq), Eq.scannedVersion = Eq.checkedVersion, Eq.scannedAt = performance.now(), Math.max(Aq, 1)
      }
      watchCellChunk(qq, Eq, gq, Yq) {
        const lq = Pj(Eq, gq, Yq),
          Oq = qq.getChunkVersion(Eq, gq, Yq),
          mq = this.cellChunks.get(lq);
        return null === Oq ? this.cellChunks.delete(lq) : (null === mq || void 0 === mq ? void 0 : mq.version) === Oq ? (mq.seenAt = this.checks, !1) : (this.cellChunks.set(lq, {
          version: Oq,
          seenAt: this.checks
        }), !0)
      }
      refresh(qq) {
        const Eq = function(qq, Eq) {
            const gq = new Set,
              Yq = [];
            for (const {
                pos: lq,
                offsets: Oq
              }
              of qq)
              for (const [qq, mq, xq] of Oq) {
                const Oq = lq[0] + qq,
                  Aq = lq[1] + mq,
                  cq = lq[2] + xq,
                  uq = `${Oq},${Aq},${cq}`;
                gq.has(uq) || (gq.add(uq), Eq(Oq, Aq, cq) && Yq.push([Oq, Aq, cq]))
              }
            return Yq
          }([...this.chunks.values()].flatMap((qq => qq.machines)), ((Eq, gq, Yq) => qq.isBlockInLoadedChunk(Eq, gq, Yq) && 0 === qq.getBlockId(Eq, gq, Yq))),
          gq = Eq.join(";");
        gq !== this.shownKey && (this.shownKey = gq, this.clearMeshes(qq), Eq.length > 0 && (this.meshes = [this.build(qq, Eq, !1), this.build(qq, Eq, !0)]))
      }
      build(qq, Eq, gq) {
        const Yq = Eq[0],
          lq = [],
          Oq = [];
        for (const [mq, xq, Aq] of Eq)(0, Vj.d)(lq, Oq, [mq - Yq[0] + .5, xq - Yq[1] + .5, Aq - Yq[2] + .5], yj, gq);
        return qq.createGameMesh({
          positions: lq,
          indices: Oq
        }, {
          rgb: gq ? rj : tj,
          alpha: .4
        }, Yq)
      }
      clearMeshes(qq) {
        for (const Eq of this.meshes) qq.disposeGameMesh(Eq);
        this.meshes = []
      }
    }
    const hj = 1 / .6,
      nj = 200,
      bj = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      ij = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Zj = 2 * Math.PI / 3;
    class fj {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bj;
        this.style = qq, this.particles = null, this.points = new Float32Array(800), this.budget = nj, this.lastMs = 0
      }
      static blade() {
        return new fj(ij)
      }
      vy(qq, Eq) {
        const gq = Math.min(Eq.arcStruck, Eq.arcPoints.length);
        this.draw(qq, [Eq.arcFrom, ...Eq.arcPoints], Eq.arcPoints.slice(0, gq))
      }
      onBlade(qq, Eq) {
        const [gq, Yq, lq] = Eq.bladeCentre, [Oq, mq] = Eq.bladeFacing, xq = gq - 1.5 * Oq, Aq = lq - 1.5 * mq, cq = Math.atan2(mq, Oq), uq = [];
        for (let Bq = 0; Bq <= 8; Bq++) {
          const qq = cq - Zj / 2 + Zj * Bq / 8;
          uq.push([xq + 2.5 * Math.cos(qq), Yq, Aq + 2.5 * Math.sin(qq)])
        }
        this.draw(qq, uq, Eq.bladeStruck)
      }
      dispose() {
        var qq;
        null === (qq = this.particles) || void 0 === qq || qq.stop(), this.particles = null
      }
      draw(qq, Eq, gq) {
        if (!qq.particlesEnabled() || Eq.length < 2) return;
        const Yq = performance.now();
        this.budget = Math.min(nj, this.budget + (Yq - this.lastMs) / 1e3 * nj), this.lastMs = Yq;
        const lq = [];
        let Oq = 0,
          mq = Eq[0];
        for (const jq of Eq.slice(1)) {
          const qq = Math.min(48, Math.round(Math.hypot(jq[0] - mq[0], jq[1] - mq[1], jq[2] - mq[2]) * this.style.perBlock));
          lq.push([mq, jq, qq]), Oq += qq, mq = jq
        }
        const xq = gq.length;
        Oq += 10 * xq;
        const Aq = Oq > this.budget ? this.budget / Oq : 1;
        if (0 === Oq || Aq * Oq < 1) return;
        const cq = Eq[0],
          [uq, Bq, Wq] = cq,
          Nq = this.points;
        let aq = 0;
        const Vq = (qq, Eq, gq, Yq) => {
          const lq = 4 * aq;
          Nq[lq] = qq - uq, Nq[lq + 1] = Eq - Bq, Nq[lq + 2] = gq - Wq, Nq[lq + 3] = Yq, aq++
        };
        lq.forEach(((qq, Eq) => {
          let [gq, Yq, lq] = qq;
          const Oq = Math.min(Math.floor(lq * Aq), nj - aq),
            mq = Math.hypot(Yq[0] - gq[0], Yq[1] - gq[1], Yq[2] - gq[2]),
            xq = 0 === Eq && mq > 0 ? Math.min(.5, .1 * mq) / mq : 0;
          for (let Aq = 0; Aq < Oq; Aq++) {
            const qq = xq + (Aq + .5) / Oq * (1 - xq);
            Vq(gq[0] + (Yq[0] - gq[0]) * qq, gq[1] + (Yq[1] - gq[1]) * qq, gq[2] + (Yq[2] - gq[2]) * qq, .15)
          }
        }));
        const dq = Math.floor(10 * Aq);
        for (let jq = 0; jq < xq; jq++) {
          const [qq, Eq, Yq] = gq[jq];
          for (let gq = 0; gq < dq && aq < nj; gq++) Vq(qq, Eq, Yq, 2.5)
        }
        this.budget -= aq, this.particles ??= qq.createParticles(function(qq) {
          const [Eq, gq] = qq.colours;
          return {
            texture: "square_particle",
            WB: 400,
            minLifeTime: qq.life[0] / hj,
            maxLifeTime: qq.life[1] / hj,
            minSize: qq.size[0],
            maxSize: qq.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [Eq[0], Eq[1], Eq[2], 1],
              maxColor: [gq[0], gq[1], gq[2], 1]
            }, {
              timeFraction: 1,
              minColor: [Eq[0], Eq[1], Eq[2], 0],
              maxColor: [gq[0], gq[1], gq[2], 0]
            }],
            blendMode: zx.h.Add
          }
        }(this.style), {
          pos: cq
        }), this.particles.emitPoints(cq, Nq, aq)
      }
    }
    const Mj = new Set(["Sky Spring"]);

    function Tj(qq, Eq, gq) {
      const Yq = qq.split("|")[0];
      return "Air" !== Eq || gq || ! function(qq) {
        const Eq = qq.split("|")[0];
        return void 0 !== mg[Eq] || Mj.has(Eq)
      }(Yq) ? null : qq
    }
    class zj {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(qq) {
        const Eq = qq - this.lastTapAt >= 300;
        return this.lastTapAt = qq, Eq
      }
    }
    class Sj {
      constructor() {
        this.presses = new zj, this.predicted = null
      }
      tap(qq, Eq) {
        const gq = this.presses.isNewPress(Eq);
        return gq && (this.predicted = {
          station: qq,
          at: Eq
        }), gq
      }
      consumeServerOpen(qq, Eq) {
        const gq = this.predicted;
        return !(null === gq || gq.station !== qq || Eq - gq.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class pj {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(qq, Eq) {
        return qq && (this.thrustAt = Eq), Eq - this.thrustAt < 200
      }
    }
    const Gj = [.1, .05, .1],
      Lj = {
        texture: "effect_5",
        WB: Math.ceil(48),
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
        blendMode: zx.h.OneOne
      };
    class Jj {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new pj, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      vy(qq, Eq) {
        for (const [gq, Yq] of Eq.baf2JetFlames) qq.isLocalPlayer(gq) || (Yq ? this.lit.add(gq) : this.lit.delete(gq))
      }
      onAfterRender(qq, Eq) {
        const gq = performance.now(),
          Yq = this.hold.lit(this.selfThrusting(qq, Eq), gq);
        for (const [lq, Oq] of this.flames)(lq === Eq ? Yq : this.lit.has(lq)) || this.setEmitting(Oq, !1), lq === Eq || qq.getPositionView(lq) ? !Oq.emitting && gq - Oq.offAt >= 1300 && (Oq.particles.stop(), this.flames.delete(lq)) : (Oq.particles.dispose(), this.flames.delete(lq), this.lit.delete(lq));
        Yq && this.draw(qq, Eq, Eq);
        for (const lq of this.lit) this.draw(qq, Eq, lq)
      }
      dispose() {
        for (const qq of this.flames.values()) qq.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(qq, Eq) {
        var gq;
        const Yq = qq.getLocalPlayerMovement();
        return !!Yq && (null !== (lq = {
          option: null !== (gq = qq.getClientOption(Eq, "jumpHoldThrust")) && void 0 !== gq ? gq : null,
          jumping: Yq.jumpHeld,
          onGround: Yq.onGround,
          alive: qq.isAlive(Eq)
        }).option && lq.option.maxUpSpeed >= 0 && lq.jumping && !lq.onGround && lq.alive);
        var lq
      }
      draw(qq, Eq, gq) {
        var Yq, lq;
        const Oq = this.pos;
        if (!qq.readDrawnPosition(gq, Oq)) return;
        const mq = qq.readDrawnPosition(Eq, this.camera) ? this.camera : Oq;
        if (!((Oq[0] - mq[0]) ** 2 + (Oq[1] - mq[1]) ** 2 + (Oq[2] - mq[2]) ** 2 < 1600) || !qq.particlesEnabled()) {
          const qq = this.flames.get(gq);
          return void(qq && this.setEmitting(qq, !1))
        }
        const xq = null !== (Yq = this.flames.get(gq)) && void 0 !== Yq ? Yq : this.create(qq, gq, Oq),
          Aq = null !== (lq = qq.getDrawnHeading(gq)) && void 0 !== lq ? lq : 0,
          cq = this.at;
        cq[0] = Oq[0] - .35 * Math.sin(Aq), cq[1] = Oq[1] + 1.05, cq[2] = Oq[2] - .35 * Math.cos(Aq), xq.particles.moveTo(cq), this.setEmitting(xq, !0)
      }
      setEmitting(qq, Eq) {
        qq.emitting !== Eq && (qq.emitting = Eq, Eq || (qq.offAt = performance.now()), qq.particles.setEmitRate(Eq ? 60 : 0))
      }
      create(qq, Eq, gq) {
        const Yq = {
          particles: qq.createParticles(Lj, {
            pos: gq,
            half: Gj
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(Eq, Yq), Yq
      }
    }

    function kj(qq) {
      return "Reactor Frame" === YY("reactor", qq)
    }

    function Rj(qq) {
      return Gg("reactor", qq) && !kj(qq) && (qq.startsWith("Reactor Glass") || qq.startsWith("Reactor Port"))
    }
    const Uj = "baf2Goal";
    class Fj {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Ml.i.subscribe("setDirectionArrow", (qq => {
          let {
            id: Eq,
            position: gq
          } = qq;
          Eq === Uj && (this.goal = gq, this.checkedAt = -1 / 0)
        })), Ml.i.subscribe("clearDirectionArrow", (qq => {
          let {
            id: Eq
          } = qq;
          null !== Eq && Eq !== Uj || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const qq of this.subs) Ml.i.unsubscribe(qq)
      }
      sideOf(qq, Eq, gq, Yq) {
        const lq = this.goal;
        if (!lq) return 0;
        gq - this.checkedAt > 1e3 && (this.checkedAt = gq, this.open = function(qq, Eq) {
          const [gq, Yq, lq] = qq.map(Math.floor);
          if (!Rj(Eq(gq, Yq, lq))) return null;
          for (const [Oq, mq] of [
              [1, 0],
              [0, 1]
            ]) {
            const qq = Eq(gq + Oq, Yq, lq + mq),
              xq = Eq(gq - Oq, Yq, lq - mq);
            if (kj(xq) && Rj(qq)) return [Oq, 0, mq];
            if (kj(qq) && Rj(xq)) return [0 - Oq, 0, 0 - mq]
          }
          return null
        }(lq, ((Eq, gq, Yq) => qq.blockIdToBlockName(qq.getBlockId(Eq, gq, Yq)))));
        const Oq = this.open;
        if (!Oq) return 0;
        const mq = Yq(lq);
        if (Math.abs(mq.x - Eq.x) > .05 || Math.abs(mq.y - Eq.y) > .05) return 0;
        const xq = Yq([lq[0] + Oq[0], lq[1], lq[2] + Oq[2]]).x - mq.x;
        return Math.abs(xq) < .3 ? 0 : xq > 0 ? 1 : -1
      }
    }
    class sj {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Fj, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.eN = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.EQ = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((qq => {
          for (const Eq of qq) Eq.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Eq.target, Eq.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.eN || this.clear()
        }, window.addEventListener("resize", this.EQ)
      }
      onAfterRender(qq, Eq) {
        var gq;
        this.api = qq, this.project = null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.projectWorldPosToScreenPos) && void 0 !== gq ? gq : null, this.queued || this.eN || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.eN = !0;
        for (const qq of this.moved.keys()) qq.style.transform = "";
        this.moved.clear();
        for (const qq of this.sideLabels.keys()) qq.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.EQ)
      }
      clear() {
        for (const Oq of this.moved.keys()) Oq.isConnected || this.moved.delete(Oq);
        for (const Oq of this.sideLabels.keys()) Oq.isConnected || this.sideLabels.delete(Oq);
        if (0 === this.arrows.length) return;
        const qq = performance.now(),
          Eq = qq - this.refreshedAt > 1e3;
        Eq && (this.refreshedAt = qq, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const gq = this.trackerBox(),
          Yq = this.barsBox(),
          lq = this.toastBox(Eq);
        (gq || Yq || lq) && Eq && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Oq = 0; Oq < this.arrows.length; Oq++) {
          const Eq = this.arrows[Oq];
          this.labelOffsets.set(Eq, this.runLabelAside(Eq, qq));
          const mq = (gq ? this.shiftLeftOf(Eq, gq) : 0) || this.shiftOnScreen(Eq),
            xq = Math.min(Yq ? this.liftAbove(Eq, Yq, mq) : 0, lq ? this.liftAbove(Eq, lq, mq) : 0),
            Aq = this.moved.get(Eq);
          if (0 !== mq || 0 !== xq) {
            const qq = 0 === xq ? `translateX(${mq}px)` : `translate(${mq}px, ${xq}px)`;
            Aq !== qq && (Eq.style.transform = qq, this.moved.set(Eq, qq))
          } else void 0 !== Aq && (Eq.style.transform = "", this.moved.delete(Eq))
        }
      }
      trackerBox() {
        var qq, Eq;
        const gq = null !== (qq = this.tracker) && void 0 !== qq && qq.isConnected ? this.tracker : null !== (Eq = this.trackers[0]) && void 0 !== Eq ? Eq : null;
        if (gq !== this.tracker && this.watch(gq), this.boxStale && gq) {
          var Yq, lq, Oq;
          this.boxStale = !1;
          const qq = gq.closest(".NoRoom") ? null : gq.getBoundingClientRect(),
            Eq = qq && qq.width > 0 ? null === (Yq = this.hud) || void 0 === Yq ? void 0 : Yq.getBoundingClientRect() : void 0,
            mq = qq && Eq ? Math.max(qq.top, Eq.top) : null !== (lq = null === qq || void 0 === qq ? void 0 : qq.top) && void 0 !== lq ? lq : 0,
            xq = qq && Eq ? Math.min(qq.bottom, Eq.bottom) : null !== (Oq = null === qq || void 0 === qq ? void 0 : qq.bottom) && void 0 !== Oq ? Oq : 0;
          this.box = qq && qq.width > 0 && xq > mq ? {
            left: qq.left,
            top: mq,
            right: qq.right,
            bottom: xq
          } : null
        }
        return gq ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var qq;
          this.barsStale = !1;
          const Eq = null === (qq = this.statBars[0]) || void 0 === qq ? void 0 : qq.getBoundingClientRect();
          this.bars = Eq && Eq.width > 0 && Eq.height > 0 ? {
            left: Eq.left,
            top: Eq.top,
            right: Eq.right,
            bottom: Eq.bottom
          } : null
        }
        return this.bars
      }
      toastBox(qq) {
        var Eq;
        const gq = null !== (Eq = this.toasts[0]) && void 0 !== Eq ? Eq : null;
        if (gq !== this.toastEl || qq && gq) {
          this.toastEl = gq;
          const qq = null === gq || void 0 === gq ? void 0 : gq.getBoundingClientRect();
          this.toast = qq && qq.width > 0 && qq.height > 0 ? {
            left: qq.left,
            top: qq.top,
            right: qq.right,
            bottom: qq.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(qq, Eq, gq) {
        var Yq;
        const lq = this.anchorOf(qq);
        if (!lq) return 0;
        const Oq = lq.x + gq + (null !== (Yq = this.labelOffsets.get(qq)) && void 0 !== Yq ? Yq : 0),
          {
            halfWidth: mq,
            labelled: xq
          } = this.extentOf(qq),
          Aq = lq.y + this.em * (xq ? 6.2 : 3);
        return Aq < Eq.top - 6 || Oq + mq < Eq.left - 6 || Oq - mq > Eq.right + 6 ? 0 : Eq.top - 6 - Aq
      }
      watch(qq) {
        var Eq, gq;
        this.tracker && this.sizes.unobserve(this.tracker), null === (Eq = this.hud) || void 0 === Eq || Eq.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = qq, this.hud = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.closest(".Baf2QuestHud")) && void 0 !== gq ? gq : null, this.box = null, this.boxStale = !0, qq && this.sizes.observe(qq), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(qq, Eq) {
        var gq;
        const Yq = this.anchorOf(qq);
        if (!Yq) return 0;
        const {
          y: lq
        } = Yq, Oq = Yq.x + (null !== (gq = this.labelOffsets.get(qq)) && void 0 !== gq ? gq : 0), mq = this.em, {
          halfWidth: xq,
          labelled: Aq
        } = this.extentOf(qq), cq = lq - mq, uq = Oq + xq;
        return lq + mq * (Aq ? 6.2 : 3) < Eq.top || cq > Eq.bottom || uq < Eq.left - 6 || Oq - xq > Eq.right ? 0 : Math.max(Eq.left - 6 - uq, 6 - (Oq - xq))
      }
      shiftOnScreen(qq) {
        var Eq;
        const gq = this.anchorOf(qq);
        if (!gq) return 0;
        const {
          halfWidth: Yq
        } = this.extentOf(qq), lq = gq.x + (null !== (Eq = this.labelOffsets.get(qq)) && void 0 !== Eq ? Eq : 0), Oq = lq + Yq - (this.innerWidth - 6);
        return Oq > 0 ? -Oq : Math.max(0, 6 - (lq - Yq))
      }
      runLabelAside(qq, Eq) {
        var gq;
        let Yq = null;
        for (let mq = 0; mq < qq.children.length; mq++) qq.children[mq].classList.contains("DirectionArrowLabel") && (Yq = qq.children[mq]);
        if (!Yq) return 0;
        const lq = qq.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(qq) : null,
          Oq = (lq && this.api ? this.side.sideOf(this.api, {
            x: lq.x / this.innerWidth * 100,
            y: lq.y / this.innerHeight * 100
          }, Eq, this.project) : 0) * this.halfWidthOf(Yq);
        return Oq !== (null !== (gq = this.sideLabels.get(Yq)) && void 0 !== gq ? gq : 0) && (Yq.style.transform = 0 === Oq ? "" : `translateX(-50%) translateX(${Oq}px)`, 0 === Oq ? this.sideLabels.delete(Yq) : this.sideLabels.set(Yq, Oq)), Oq
      }
      extentOf(qq) {
        let Eq = this.em,
          gq = !1;
        for (let Yq = 0; Yq < qq.children.length; Yq++) {
          const lq = qq.children[Yq],
            Oq = lq.classList.contains("DirectionArrowLabel");
          gq ||= Oq, (Oq || lq.classList.contains("DirectionArrowDistance")) && (Eq = Math.max(Eq, this.halfWidthOf(lq)))
        }
        return {
          halfWidth: Eq,
          labelled: gq
        }
      }
      halfWidthOf(qq) {
        let Eq = this.halfWidths.get(qq);
        return void 0 === Eq && (Eq = qq.offsetWidth / 2, this.halfWidths.set(qq, Eq), this.sizes.observe(qq), this.labels.add(qq)), Eq
      }
      forgetGoneLabels() {
        for (const qq of this.labels) qq.isConnected || (this.sizes.unobserve(qq), this.halfWidths.delete(qq), this.labels.delete(qq))
      }
      anchorOf(qq) {
        const Eq = qq.style.translate,
          gq = this.anchors.get(qq);
        if (gq && gq.translate === Eq && gq.innerWidth === this.innerWidth && gq.innerHeight === this.innerHeight) return gq;
        const Yq = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Eq);
        if (!Yq) return null;
        const lq = {
          translate: Eq,
          x: parseFloat(Yq[1]) / 100 * this.innerWidth,
          y: parseFloat(Yq[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(qq, lq), lq
      }
    }
    const Xj = "Baf2ArrowText";

    function wj(qq, Eq) {
      const gq = qq.rows.find((qq => qq.current));
      return Mq(qq.tutorial) && null !== gq && void 0 !== gq && gq.item && Ul(gq) && bq(gq.item).includes(Eq) ? gq.item : null
    }
    const Kj = new class {
      constructor(qq) {
        this.select = qq, this.picks = new Map
      }
      open(qq, Eq, gq) {
        const Yq = wj(Eq, qq);
        null !== Yq && this.zW(qq, Yq, gq)
      }
      follow(qq, Eq) {
        if (xq())
          for (const [gq, {
              item: Yq,
              had: lq
            }] of this.picks) {
            const Oq = wj(qq, gq);
            Oq !== Yq && (null !== Oq && Eq(Yq) > lq ? this.zW(gq, Oq, Eq) : this.picks.delete(gq))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      zW(qq, Eq, gq) {
        this.picks.set(qq, {
          item: Eq,
          had: gq(Eq)
        }), this.select(qq, Eq)
      }
    }(Tl.v);

    function Cj(qq) {
      return Eq => {
        let gq = 0;
        for (const Yq of qq.getInventoryItems())(null === Yq || void 0 === Yq ? void 0 : Yq.name) === Eq && (gq += null === Yq.amount ? 1 : Math.max(Yq.amount, 0));
        return gq
      }
    }

    function Ij(qq, Eq, gq, Yq) {
      qq.getClientOption(Eq, "canCraft") && "inventory" !== ol.b.get("openInGameMenuName") && (Kj.open(gq, Yq.get(), Cj(qq)), Ml.i.TV("toggleMenu", `inventory|${gq}`))
    }
    let ej = null,
      Dj = !1;

    function qH(qq) {
      const Eq = yO();
      qq === ej && Eq === Dj || (ej = qq, Dj = Eq, (0, Tl.z)(function(qq, Eq) {
        const gq = new Map;
        for (let Yq = qq + 1; Yq <= lq.length; Yq++) {
          const lq = FO(Yq, qq, Eq);
          if (lq)
            for (const Eq of jq(Yq).unlocks) gq.set(Eq, {
              ...lq,
              stepsAway: Yq - qq
            })
        }
        return gq
      }(qq, Eq)))
    }

    function EH() {
      return (0, Tl.C)(UO(Object.keys(nq), GO)), () => {
        (0, Tl.C)([])
      }
    }
    const gH = "buildAFactory2Game:",
      YH = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      lH = {
        on: `${gH}tutorialButtonOn`,
        hud: `${gH}tutorialButtonHud`,
        off: `${gH}tutorialButtonOff`
      },
      OH = {
        on: `${gH}tutorialPickedOn`,
        hud: `${gH}tutorialPickedHud`,
        off: `${gH}tutorialPickedOff`
      };

    function mH(qq, Eq, gq) {
      let Yq = null,
        lq = () => {};
      const Oq = Oq => {
        var mq;
        let {
          tutorial: xq,
          tutorialKnown: Aq
        } = Oq;
        (null === (mq = Yq) || void 0 === mq ? void 0 : mq.tutorial) === xq && Yq.tutorialKnown === Aq || (Yq = {
          tutorial: xq,
          tutorialKnown: Aq
        }, lq = (0, jl.p)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: lH[xq],
          icon: {
            kind: "icon",
            name: YH[xq]
          },
          iconOnly: !0,
          disabled: !Aq,
          className: "Baf2TutorialButton",
          onClick: () => {
            var Yq;
            (Yq => {
              const lq = Eq.setTutorial(Yq);
              qq.send(`baf2tutorial ${Yq} ${lq}`), gq.show({
                baf2ToastText: [(0, Tq.Yd)({
                  translationKey: OH[Yq]
                }, Tq.M.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((Yq = Eq.get().tutorial, fq[(fq.indexOf(Yq) + 1) % fq.length]))
          }
        }))
      };
      Oq(Eq.get());
      const mq = Ml.i.subscribe(zl, Oq);
      return () => {
        Ml.i.unsubscribe(mq), lq()
      }
    }

    function xH(qq, Eq, gq) {
      var Yq, lq;
      const Oq = qq.getTargetedBlock();
      if (!Oq || ! function(qq, Eq, gq) {
          if ("Chest" !== Eq) return !1;
          const Yq = qq.split("|")[0];
          if (!cg(Yq) || 0 === TE[Yq].outputSlots.length) return !1;
          const lq = Hd(qq);
          return gq[0] === lq[0] && gq[1] === lq[1] && gq[2] === lq[2]
        }(gq, null === (Yq = qq.Ngq(Eq)) || void 0 === Yq ? void 0 : Yq.name, Oq.normal)) return !1;
      const [mq, xq, Aq] = Oq.MV, cq = qq.getBlockId(mq, xq, Aq);
      return 0 === cq || !0 === (null === (lq = Zq.i[cq]) || void 0 === lq ? void 0 : lq.canBePlacedOver)
    }
    var AH = gq(36796);
    const cH = new Set(Vg.b);
    class uH {
      constructor(qq) {
        this.toasts = qq, this.lastAt = -1 / 0
      }
      onAltAction(qq, Eq, gq) {
        const Yq = qq.getTargetedBlock();
        if (!Yq || function(qq) {
            const Eq = qq.split("|")[0];
            return cg(Eq) || null !== tY(Eq) || vq(Eq) || Vg.b.includes(Eq)
          }(gq) && !cH.has(gq.split("|")[0])) return;
        const lq = qq.Ngq(Eq);
        if (!lq || !cH.has(lq.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Oq = lq.typeObj.id,
          [mq, xq, Aq] = Yq.MV,
          cq = qq.getBlockId(mq, xq, Aq),
          uq = Zq.i[cq];
        (0 === cq || null !== uq && void 0 !== uq && uq.wW || null !== uq && void 0 !== uq && uq.canBePlacedOver) && qq.isSolidToPlayerBlockId(Oq) && qq.canModifyBlockAt(mq, xq, Aq) && qq.MEq(mq, xq, Aq, Oq) && !qq.MEq(mq, xq, Aq, Oq, Eq) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Tq.Yd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Tq.M.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class BH {
      constructor(qq) {
        this.show = qq, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(qq, Eq, gq) {
        var Yq;
        if (!Eq) return this.started = null, void this.gatedThisHold.clear();
        if (!qq) return void(this.started = null);
        const lq = `${qq.x},${qq.y},${qq.z},${qq.Fc}`;
        if (lq === this.started) return;
        this.started = lq;
        const Oq = pY(qq.y) ? Ej(qq.block, qq.Fc, qq.level) : null;
        if (null === Oq || this.gatedThisHold.has(lq)) return;
        this.gatedThisHold.add(lq);
        const mq = qq.block.split("|")[0];
        gq - (null !== (Yq = this.hintedAt.get(mq)) && void 0 !== Yq ? Yq : -1 / 0) < 5e3 || (this.hintedAt.set(mq, gq), this.show({
          baf2ToastText: gj(Oq, qq.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var WH = gq(38);

    function NH(qq, Eq) {
      const gq = [...qq.baf2CoreBankPaused];
      for (const [lq] of qq.baf2CoreBanked) gq.push(lq);
      for (const mq of lq) {
        for (const {
            item: qq
          }
          of mq.cost) gq.push(qq);
        for (const qq of mq.newDeposits) gq.push(qq.block);
        for (const qq of mq.unlocks) gq.push(qq, iq(qq));
        mq.reward && gq.push(mq.reward);
        for (const {
            item: qq
          }
          of null !== (Yq = null === (Oq = mq.charge) || void 0 === Oq ? void 0 : Oq.items) && void 0 !== Yq ? Yq : []) {
          var Yq, Oq;
          gq.push(qq)
        }
      }
      return {
        message: qq,
        itemNames: Eq([...new Set(gq)])
      }
    }
    const aH = "baf2MultiblockGuide";
    const VH = new Map;
    const dH = function(qq, Eq, gq, lq) {
      let {
        localPlayerId: Oq
      } = lq;
      const mq = new dx,
        xq = new DW,
        cq = new mN,
        uq = new lN(cq),
        Bq = (qq, Eq) => {
          Eq ? uq.observe(qq) : uq.unobserve(qq)
        },
        Wq = new YN,
        Nq = new uN(Bq),
        aq = qq => Nq.covers(qq),
        Vq = new iN;
      let dq;
      const jq = new Lm((qq => {
          dq.sendCommand(qq)
        })),
        Hq = () => {
          jq.send("baf2questbook")
        },
        oq = qq => function(qq, Eq, gq) {
          const Yq = {};
          for (const lq of gq) {
            let gq = VH.get(lq);
            void 0 === gq && (gq = qq.getItemStat(Eq, lq, "displayName"), VH.set(lq, gq)), Yq[lq] = gq
          }
          return Yq
        }(dq, Oq, qq),
        Pq = new Gl(Hq),
        Qq = new kN((() => ol.b.get("loadingOverlayVisible"))),
        yq = new XN,
        tq = new uH(Qq),
        rq = new BH((qq => {
          Qq.show(qq, qq.baf2ToastMs)
        })),
        hq = new ga(Bq),
        nq = new nd(hq),
        bq = new tm,
        iq = new ed,
        fq = new gx,
        Mq = new ca({
          read: () => !1 !== WH.i.getItem(aH),
          write: qq => {
            WH.i.setItem(aH, qq)
          }
        }),
        Sq = new Sa(Mq),
        pq = new La(Mq),
        Gq = new xV(Mq, (qq => function(qq, Eq) {
          const gq = Dx(Eq.w, Eq.h, Eq.d),
            Yq = new Uint8Array(gq);
          for (let lq = 0; lq < gq; lq++) {
            const gq = Za(qq, eg(Eq, gY(Eq, lq)));
            Yq[lq] = null === gq ? 0 : Kx(gq)
          }
          return Yq
        }(dq, qq)), ea(jq)),
        Lq = new AV(Mq, ea(jq)),
        Jq = new OV,
        kq = (qq, Eq) => {
          let [gq, Yq, lq] = qq;
          Jq.answered(Eq) || Qq.show({
            baf2ToastText: [(0, Tq.Yd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: gq,
                h: Yq,
                d: lq
              }
            }, Tq.M.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      Gq.onSizeNotTaken(kq), Lq.onSizeNotTaken(kq);
      const Fq = new WV,
        sq = new sV(Mq),
        Xq = new wV,
        Kq = new Od(Xq),
        Cq = new dd,
        Iq = new bd,
        Dq = new Jd(Iq),
        qE = new Id(Iq),
        EE = Iq.lookSource(),
        gE = new Wj({
          handles: qq => EE.handles(qq) || qq === zq,
          line: (qq, Eq) => qq === zq ? function(qq, Eq, gq) {
            var Yq;
            const lq = Uq(null === (Yq = Eq.at(gq)) || void 0 === Yq ? void 0 : Yq.item);
            return null === lq ? {
              key: `${cj}lookFarmEmpty`
            } : {
              key: qq.blockIdToBlockName(qq.getBlockId(gq[0], gq[1], gq[2])).endsWith("|Running") ? `${cj}lookFarmRunning` : `${cj}lookFarmWaiting`,
              keys: {
                mob: Rq(lq)
              }
            }
          }(dq, hq, Eq) : EE.line(qq, Eq),
          version: () => EE.version() + hq.version()
        }, (qq => ka(Mq.all(), qq, (qq => Za(dq, qq)))), (() => Pq.get().tier)),
        YE = new iV,
        lE = new vj,
        OE = new fj,
        mE = fj.blade(),
        xE = new Jj,
        AE = new CN,
        cE = new sj,
        uE = new Sj,
        WE = new zj;
      let NE = -1 / 0,
        aE = 0,
        VE = -1 / 0,
        dE = -1 / 0;
      const jE = () => {
          jq.send("baf2islandsclose"), dE = Date.now()
        },
        HE = [];

      function oE(qq) {
        var Eq, gq, Yq, lq, Oq, mq, Aq;
        "core" === (null === (Eq = xq.get()) || void 0 === Eq ? void 0 : Eq.kind) && "core" !== (null === qq || void 0 === qq ? void 0 : qq.kind) && jq.send("baf2coreclose"), "power" === (null === (gq = xq.get()) || void 0 === gq ? void 0 : gq.kind) && "power" !== (null === qq || void 0 === qq ? void 0 : qq.kind) && jq.send("baf2powerclose"), "water" === (null === (Yq = xq.get()) || void 0 === Yq ? void 0 : Yq.kind) && "water" !== (null === qq || void 0 === qq ? void 0 : qq.kind) && jq.send(eq.x), "terminal" === (null === (lq = xq.get()) || void 0 === lq ? void 0 : lq.kind) && "terminal" !== (null === qq || void 0 === qq ? void 0 : qq.kind) && jq.send("baf2terminalclose"), "islands" === (null === (Oq = xq.get()) || void 0 === Oq ? void 0 : Oq.kind) && "islands" !== (null === qq || void 0 === qq ? void 0 : qq.kind) && jE();
        const cq = Iq.getStatus();
        "collider" === (null === (mq = xq.get()) || void 0 === mq ? void 0 : mq.kind) && "collider" !== (null === qq || void 0 === qq ? void 0 : qq.kind) && cq && jq.send(SA(cq, "close"));
        const uq = qq => "reactor" === qq || "battery" === qq;
        if (uq(null === (Aq = xq.get()) || void 0 === Aq ? void 0 : Aq.kind) && !uq(null === qq || void 0 === qq ? void 0 : qq.kind)) {
          var Bq, Wq, Nq;
          const qq = "reactor" === (null === (Bq = xq.get()) || void 0 === Bq ? void 0 : Bq.kind) ? null === (Wq = Gq.get()) || void 0 === Wq ? void 0 : Wq.status.baf2RxAt : null === (Nq = Lq.get()) || void 0 === Nq ? void 0 : Nq.status.baf2BatAt;
          qq && jq.send(BE(qq, "close"))
        }
        "quests" === (null === qq || void 0 === qq ? void 0 : qq.kind) && Hq(), xq.set(qq), null === qq && yq.release()
      }

      function PE() {
        (0, Hl.e)(), oE(null)
      }
      let QE = new Set,
        yE = !1;
      const tE = {
        onCreate: qq => {
          dq = qq, dq.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const Eq of nE) {
            const qq = TE[Eq].inputSlots ? fx(mq) : bx(Eq, mq, bq, jq);
            HE.push((0, dl.h)(Eq, qq))
          }
          HE.push((0, Hl.r)((0, Yq.createElement)(Yq.Fragment, null, (0, Yq.createElement)(NN, {
            controller: Nq
          }), (0, Yq.createElement)(Oa, {
            store: hq
          }), (0, Yq.createElement)(aj, {
            store: gE
          }), (0, Yq.createElement)(LN, {
            store: Pq
          }), (0, Yq.createElement)(FN, {
            store: Qq
          }), (0, Yq.createElement)(wN, {
            store: yq
          }), (0, Yq.createElement)(eN, {
            store: AE
          }), (0, Yq.createElement)(BV, {
            store: Fq
          }), (0, Yq.createElement)(KV, {
            store: Xq
          })), {
            content: (0, Yq.createElement)(qN, {
              commands: jq,
              store: xq,
              power: bq,
              water: fq,
              reactor: Gq,
              battery: Lq,
              collider: Iq,
              terminal: iq,
              quests: Pq,
              close: Hl.h,
              leave: () => {
                yq.dropHeld(), (0, Hl.e)()
              },
              askIslands: () => {
                dE = -1 / 0, NE = Date.now(), aE = jq.send(wq)
              },
              openSocial: () => {
                (0, Hl.e)(), ol.b.set({
                  openEverythingMenuName: Bg.p.SOCIAL
                })
              },
              showCore: qq => {
                oE({
                  kind: "core",
                  core: qq
                }), jq.send("baf2corereopen")
              }
            }),
            onClose: () => {
              oE(null)
            }
          })), HE.push((0, jl.p)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              oE({
                kind: "quests"
              }), (0, Hl.m)()
            }
          })), HE.push(mH(jq, Pq, Qq)), yE = !1, HE.push(tO((() => {
            null !== ej && qH(ej)
          }))), HE.push(EH()), HE.push(function() {
            const qq = Ml.i.subscribe(zl, el),
              Eq = () => {
                if (Il) {
                  const qq = Il;
                  Il = null, (0, Tl.A)(qq)
                }
              },
              gq = Ml.i.subscribe("toggleMenu", (qq => {
                "inventory" === (null === qq || void 0 === qq ? void 0 : qq.split("|")[0]) && Eq()
              })),
              Yq = Ml.i.subscribe("appManagerUpdated|openInGameMenuName", (qq => {
                "inventory" === qq && Eq()
              }));
            return () => {
              Ml.i.unsubscribe(qq), Ml.i.unsubscribe(gq), Ml.i.unsubscribe(Yq)
            }
          }()), HE.push(function(qq) {
            const Eq = Cj(qq),
              gq = Ml.i.subscribe(zl, (qq => {
                Kj.follow(qq, Eq)
              }));
            return () => {
              Ml.i.unsubscribe(gq), Kj.clear()
            }
          }(dq)), HE.push(function() {
            const qq = document.documentElement,
              Eq = (0, fN.b)(".InvenBodyRight", [], (() => {
                const Eq = document.querySelector(".InvenBodyRight");
                Eq && qq.style.setProperty("--baf2-backpack-width", `${Eq.offsetWidth}px`)
              }));
            return () => {
              Eq(), qq.style.removeProperty("--baf2-backpack-width")
            }
          }()), HE.push(function() {
            const qq = document.documentElement;
            return qq.classList.add(Xj), () => {
              qq.classList.remove(Xj)
            }
          }()), HE.push((() => {
            uq.dispose(), cq.dispose()
          })), Vq.start(dq), HE.push((() => {
            Vq.dispose(), xE.dispose(), nq.dispose()
          }))
        },
        onClose: () => {
          (0, Tl.A)([]), Il = null, Cl = new Set, ej = null, (0, Tl.z)(new Map), VH.clear();
          for (const qq of HE) qq();
          Pq.dispose(), gE.dispose(), Qq.dispose(), yq.dispose(), YE.dispose(), lE.dispose(dq), Sq.dispose(dq), pq.dispose(dq), sq.dispose(dq), Kq.dispose(dq), Xq.dispose(), Cq.dispose(), Mq.dispose(), Gq.dispose(), Lq.dispose(), Fq.dispose(), OE.dispose(), mE.dispose(), AE.dispose(), Dq.dispose(dq), qE.dispose(dq), Iq.dispose(), cE.dispose(), jq.clear()
        },
        onAfterRender: (qq, Eq) => {
          var gq, Yq, lq;
          try {
            Vq.onAfterRender(Eq)
          } catch (cq) {
            console.error("Error drawing BAF2 belt items", cq)
          }
          try {
            xE.onAfterRender(dq, Oq)
          } catch (cq) {
            console.error("Error drawing BAF2 jet flames", cq)
          }
          yE || (yE = !0, jq.send("baf2clientready"));
          const mq = dq.getPositionView(Oq);
          Nq.onAfterRender(Eq, mq, Wq), hq.onAfterRender(Eq, mq, Wq, aq), uq.run(Wq), YE.onAfterRender(dq, mq), lE.onAfterRender(dq, mq), nq.onAfterRender(dq, mq), Sq.onAfterRender(dq, mq), pq.onAfterRender(dq, Oq, mq), sq.onAfterRender(dq, Oq, mq), Kq.onAfterRender(dq, Oq), Cq.onAfterRender(dq, mq), Pq.onPlayerY(mq[1]), Dq.onAfterRender(dq), qE.onAfterRender(dq, Oq, mq);
          const Aq = dq.getTargetedBlock();
          gE.onAfterRender(dq, Oq, null !== (gq = null === Aq || void 0 === Aq ? void 0 : Aq.Y_) && void 0 !== gq ? gq : 0, null !== (Yq = null === Aq || void 0 === Aq ? void 0 : Aq.position) && void 0 !== Yq ? Yq : null), cE.onAfterRender(dq, Eq), rq.onMining(function(qq, Eq) {
            var gq, Yq;
            const lq = qq.getMiningBlock();
            if (!lq) return null;
            const Oq = (0, Zq.h)(qq.getBlockId(lq[0], lq[1], lq[2])),
              mq = null !== (gq = null === (Yq = qq.Ngq(Eq)) || void 0 === Yq ? void 0 : Yq.name) && void 0 !== gq ? gq : null,
              xq = qq.getItemStat(Eq, Oq.split("|")[0], "harvestLevel");
            return {
              block: Oq,
              x: lq[0],
              y: lq[1],
              z: lq[2],
              Fc: mq,
              level: xq
            }
          }(dq, Oq), dq.isMining(), performance.now()), "dropMap" === (null === (lq = xq.get()) || void 0 === lq ? void 0 : lq.kind) && pY(mq[1]) && PE()
        },
        onPlayerChangeBlock: (qq, Eq, gq, Yq, lq, mq) => {
          qq === Oq && function(qq, Eq, gq, Yq, lq, Oq, mq) {
            const xq = Tj(Oq, mq, qq.isPlayerCrouching(Eq));
            if (null === xq) return;
            if (qq.xJ(gq, Yq, lq, xq), !qq.getClientOption(Eq, "canPickUpItems")) return;
            const Aq = mg[xq.split("|")[0]];
            var cq, uq, Bq;
            void 0 !== Aq && (cq = qq.getInventoryItems(), uq = Aq, Bq = ua.c.maxItemStackSize, qq.getInventoryFreeSlotCount(Eq) > 0 || cq.some((qq => null !== qq && qq.name === uq && null !== qq.amount && qq.amount < Bq))) && qq.playSound(Eq, (0, AH.c)("pickUp"), .5, 1)
          }(dq, qq, Eq, gq, Yq, lq, mq)
        },
        onPlayerAltAction: (qq, Eq, gq, Yq, lq) => {
          var mq, xq;
          if (!dq.getClientOption(Oq, "canPickUpItems")) return;
          const Aq = null !== (mq = null === (xq = dq.Ngq(Oq)) || void 0 === xq ? void 0 : xq.name) && void 0 !== mq ? mq : null,
            cq = function(qq, Eq) {
              const gq = qq.split("|")[0];
              return vq(gq) && Eq !== xl && "Sky Pack" !== Eq ? gq : null
            }(lq, Aq);
          if (null !== cq) return void(uE.tap(cq, performance.now()) && Ij(dq, Oq, cq, Pq));
          if (!kY(Aq)) return;
          const uq = WE.isNewPress(performance.now()),
            Bq = function(qq, Eq, gq) {
              return !kY(Eq) || gq ? null : IY(qq)
            }(lq, Aq, dq.isPlayerCrouching(Oq));
          null !== Bq && uq && dq.xJ(Eq, gq, Yq, Bq)
        },
        onPlayerAttemptAltAction: (qq, Eq, gq, Yq, lq) => {
          if (function(qq, Eq, gq, Yq, lq) {
              "Workbench" === Yq.split("|")[0] && qq.getClientOption(gq, "canCraft") && (Kj.open("Workbench", lq.get(), Cj(qq)), Eq.send("baf2station Workbench"))
            }(dq, jq, Oq, lq, Pq), xH(dq, Oq, lq)) return "preventAction";
          tq.onAltAction(dq, Oq, lq)
        },
        onReceivedMessageFromServer: (qq, Eq) => {
          if ("baf2MachineStatus" === qq) {
            var gq, Yq, lq, cq, uq, Bq, Wq, aq, Hq, tq, rq, vq, nq, Zq, Tq, zq;
            const qq = Eq,
              Oq = qq.baf2MachineTaught;
            mq.set(qq.baf2MachinePos, {
              status: qq.baf2MachineStatus,
              power: null !== (gq = qq.baf2MachinePower) && void 0 !== gq ? gq : null,
              opLeftMs: null !== (Yq = qq.baf2MachineOpLeftMs) && void 0 !== Yq ? Yq : null,
              dug: qq.baf2MachineYield ? {
                item: qq.baf2MachineYield,
                name: oq([qq.baf2MachineYield])[qq.baf2MachineYield]
              } : null,
              powerCap: null !== (lq = qq.baf2MachinePowerCap) && void 0 !== lq ? lq : null,
              powerRates: null !== (cq = qq.baf2MachinePowerRates) && void 0 !== cq ? cq : null,
              coupled: !0 === qq.baf2MachineCoupled,
              couplerLevel: null !== (uq = qq.baf2MachineCoupler) && void 0 !== uq ? uq : 1,
              taught: Oq,
              taughtName: Oq ? oq([Oq])[Oq] : null,
              tier: null !== (Bq = qq.baf2MachineTier) && void 0 !== Bq ? Bq : null,
              input: null !== (Wq = qq.baf2MachineInput) && void 0 !== Wq ? Wq : null,
              inertCoupler: null !== (aq = qq.baf2MachineInertCoupler) && void 0 !== aq ? aq : null,
              inputShort: null !== (Hq = qq.baf2MachineInputShort) && void 0 !== Hq ? Hq : null,
              field: null !== (tq = qq.baf2MachineField) && void 0 !== tq ? tq : null,
              noSeeds: !0 === qq.baf2MachineNoSeeds,
              fuelFed: !0 === qq.baf2MachineFuelFed,
              fuelFeeds: !0 === qq.baf2MachineFuelFeeds,
              coreFull: !0 === qq.baf2MachineCoreFull,
              waterUnpowered: !0 === qq.baf2MachineWaterUnpowered,
              powerShort: !0 === qq.baf2MachinePowerShort,
              powerWait: !0 === qq.baf2MachinePowerWait,
              reactorPowered: !0 === qq.baf2MachineReactorPowered,
              fuelLeftMs: null !== (rq = qq.baf2MachineFuelLeftMs) && void 0 !== rq ? rq : null,
              burning: null !== (vq = qq.baf2MachineBurning) && void 0 !== vq ? vq : null,
              fuelKeep: null !== (nq = qq.baf2MachineFuelKeep) && void 0 !== nq ? nq : null,
              water: null !== (Zq = qq.baf2MachineWater) && void 0 !== Zq ? Zq : null,
              farm: null !== (Tq = qq.baf2MachineFarm) && void 0 !== Tq ? Tq : null,
              cryo: null !== (zq = qq.baf2MachineCryo) && void 0 !== zq ? zq : null
            })
          } else if ("baf2StationOpen" === qq) {
            const qq = Eq.baf2Station;
            uE.consumeServerOpen(qq, performance.now()) || Ij(dq, Oq, qq, Pq)
          } else if ("baf2Power" === qq) {
            const qq = Eq;
            bq.set(qq), qq.baf2PowerOpen && (oE({
              kind: "power"
            }), (0, Hl.m)())
          } else if (qq === eq.C) {
            const qq = Eq;
            fq.set(qq), qq.baf2WaterOpen && (oE({
              kind: "water"
            }), (0, Hl.m)())
          } else if ("baf2RxPlans" === qq) {
            var Sq, pq, kq;
            const qq = Eq;
            Mq.vy(qq);
            const gq = new Set(qq.baf2RxPlanList.map((qq => {
              let [Eq, gq, Yq] = qq;
              return `${Eq},${gq},${Yq}`
            })));
            Fq.retain(gq);
            const Yq = null === (Sq = xq.get()) || void 0 === Sq ? void 0 : Sq.kind,
              lq = "reactor" === Yq ? null === (pq = Gq.get()) || void 0 === pq ? void 0 : pq.status.baf2RxAt : "battery" === Yq ? null === (kq = Lq.get()) || void 0 === kq ? void 0 : kq.status.baf2BatAt : void 0;
            lq && QE.has(lq.join(",")) && !gq.has(lq.join(",")) && PE(), QE = gq
          } else if ("baf2RxStatus" === qq) {
            const qq = Eq;
            Gq.set(qq), qq.baf2RxOpen && (oE({
              kind: "reactor"
            }), (0, Hl.m)())
          } else if ("baf2BatStatus" === qq) {
            const qq = Eq;
            Lq.set(qq), qq.baf2BatOpen && (oE({
              kind: "battery"
            }), (0, Hl.m)())
          } else if ("baf2RxAlarm" === qq) Fq.vy(Eq);
          else if ("baf2Bomb" === qq) Xq.vy(Eq, dq.getPositionView(Oq));
          else if ("baf2Fallout" === qq) Cq.vy(Eq);
          else if ("baf2ColBeams" === qq) Iq.onBeams(Eq);
          else if ("baf2ColStatus" === qq) {
            const qq = Eq;
            var Rq, Uq;
            if (Iq.onStatus(qq), qq.baf2ColOpen) Iq.onOpen(null !== (Rq = null === (Uq = dq.Ngq(Oq)) || void 0 === Uq ? void 0 : Uq.name) && void 0 !== Rq ? Rq : null), oE({
              kind: "collider"
            }), (0, Hl.m)()
          } else if ("baf2Terminal" === qq) {
            const qq = Eq;
            var sq;
            if (iq.apply(qq)) qq.baf2TermReset && (oE({
              kind: "terminal"
            }), (0, Hl.m)());
            else "terminal" === (null === (sq = xq.get()) || void 0 === sq ? void 0 : sq.kind) && (xq.set(null), (0, Hl.e)())
          } else if ("baf2Core" === qq) {
            var Kq;
            const qq = Eq;
            if (Aq(!0 === qq.baf2CoreNuclear), function(qq, Eq) {
                return "core" === (null === qq || void 0 === qq ? void 0 : qq.kind) && Eq.baf2CoreTier > qq.core.message.baf2CoreTier
              }(xq.get(), qq)) return void(0, Hl.e)();
            if (qq.baf2CoreRefresh && "core" !== (null === (Kq = xq.get()) || void 0 === Kq ? void 0 : Kq.kind)) return;
            oE({
              kind: "core",
              core: NH(qq, oq)
            }), qq.baf2CoreRefresh || (0, Hl.m)()
          } else if ("baf2WrenchUndo" === qq) {
            const {
              baf2WrenchPos: qq,
              baf2WrenchBlock: gq
            } = Eq;
            dq.xJ(qq[0], qq[1], qq[2], gq)
          } else if ("baf2Toast" === qq) {
            const qq = Eq;
            Jq.heard(performance.now(), qq.baf2ToastMs), Qq.show(qq)
          } else if ("baf2Area" === qq) yq.arrive(Eq, null !== xq.get());
          else if ("baf2Quest" === qq) {
            const qq = Eq;
            Aq(!0 === qq.baf2QuestNuclear), Pq.set(qq, function(qq, Eq) {
              var gq, Yq, lq, Oq, mq;
              const xq = [];
              for (const [, , uq, , , , , , Bq, Wq] of qq.baf2QuestSteps) null !== uq && xq.push(uq), xq.push(...null !== Bq && void 0 !== Bq ? Bq : [], ...null !== Wq && void 0 !== Wq ? Wq : []);
              qq.baf2QuestReward && xq.push(qq.baf2QuestReward);
              const Aq = null === (gq = qq.baf2QuestSide) || void 0 === gq ? void 0 : gq[2][2];
              Aq && xq.push(Aq), xq.push(...null !== (Yq = null === (lq = qq.baf2QuestSide) || void 0 === lq ? void 0 : lq[2][8]) && void 0 !== Yq ? Yq : [], ...null !== (Oq = null === (mq = qq.baf2QuestSide) || void 0 === mq ? void 0 : mq[2][9]) && void 0 !== Oq ? Oq : []);
              for (const [uq] of null !== (cq = qq.baf2QuestAlso) && void 0 !== cq ? cq : []) {
                var cq;
                xq.push(uq)
              }
              return Eq(xq)
            }(qq, oq)), qH(qq.baf2QuestTier)
          } else if ("baf2Route" === qq) ! function(qq, Eq) {
            let {
              baf2RouteCells: gq,
              baf2RouteInto: Yq
            } = Eq;
            0 !== gq.length && Yq ? qq.setRouteChevrons({
              cells: gq.map(((qq, Eq) => {
                const [lq, , Oq] = function(qq, Eq, gq) {
                  const Yq = gq + 1 < qq.length ? qq[gq + 1] : Eq;
                  return [Yq[0] - qq[gq][0], 0, Yq[2] - qq[gq][2]]
                }(gq, Yq, Eq);
                return {
                  pos: qq,
                  way: [lq, Oq]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : qq.setRouteChevrons(null)
          }(dq, Eq);
          else if ("baf2QuestBook" === qq) Pq.setBook(Eq);
          else if ("baf2Stalls" === qq) Nq.set(Eq.baf2StallCells);
          else if (qq === Vg.n) Vq.onMoves(Eq);
          else if (qq === Vg.h) Vq.onLines(Eq);
          else if ("baf2Labels" === qq) hq.vy(Eq);
          else if ("baf2DropMap" === qq) oE({
            kind: "dropMap",
            dropMap: Eq
          }), (0, Hl.m)();
          else if ("baf2Islands" === qq) {
            var Dq, qE;
            const qq = Eq;
            if (jq.syncIslandEdits(qq.baf2IslandsAnswered), !qq.baf2IslandsOpen && "islands" !== (null === (Dq = xq.get()) || void 0 === Dq ? void 0 : Dq.kind)) return;
            if (qq.baf2IslandsOpen) {
              var EE, gE;
              const Eq = ol.b.get("openEverythingMenuName"),
                gq = jq.sent() >= aE,
                Yq = "other" !== (HE = {
                  askedAtMs: NE,
                  askSent: gq,
                  reaskedAtMs: VE,
                  nowMs: Date.now(),
                  panel: null !== (EE = null === (gE = xq.get()) || void 0 === gE ? void 0 : gE.kind) && void 0 !== EE ? EE : null,
                  inGameMenu: ol.b.get("openInGameMenuName"),
                  everythingMenu: null === Eq ? null : Eq === Bg.p.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== qq.baf2IslandsFocusInvite
                }).everythingMenu && (!!HE.focusInvite || "islands" === HE.panel && "clientGame" === HE.inGameMenu || !(HE.nowMs - HE.reaskedAtMs < fc) && (HE.askSent && HE.nowMs - HE.askedAtMs < fc ? "core" === HE.panel && "clientGame" === HE.inGameMenu && null === HE.everythingMenu : "shop" === HE.everythingMenu || null === HE.inGameMenu));
              if (gq && (NE = -1 / 0), VE = -1 / 0, !Yq) return void jE()
            }
            const gq = (lE = qq.baf2IslandsOpen, cE = "islands" === (null === (qE = xq.get()) || void 0 === qE ? void 0 : qE.kind), BE = dE, WE = Date.now(), lE && !cE && WE - BE < fc);
            oE({
              kind: "islands",
              islands: qq,
              arrivedAtMs: Date.now(),
              backToCore: Mc(xq.get())
            }), gq && (dE = -1 / 0, VE = Date.now(), jq.send(wq)), qq.baf2IslandsOpen && ("clientGame" !== ol.b.get("openInGameMenuName") && (0, Pl.f)(), (0, Hl.m)())
          } else if ("baf2CoopTransfer" === qq) {
            var YE;
            const qq = Eq;
            qq.baf2TransferOn ? (oE({
              kind: "transfer",
              transfer: qq,
              arrivedAtMs: Date.now()
            }), (0, Hl.m)()) : "transfer" === (null === (YE = xq.get()) || void 0 === YE ? void 0 : YE.kind) && (0, Hl.e)()
          } else "baf2IslandLeft" === qq ? (yq.dropHeld(), null !== xq.get() && PE(), "inventory" === ol.b.get("openInGameMenuName") && (0, Pl.f)()) : "baf2Arc" === qq ? OE.vy(dq, Eq) : "baf2Blade" === qq ? mE.onBlade(dq, Eq) : "baf2JetFlame" === qq ? xE.vy(dq, Eq) : "baf2GearPower" === qq && AE.vy(Eq);
          var lE, cE, BE, WE, HE
        }
      };
      return tE
    }
  },
  38479: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq) {
      const Yq = new Set,
        lq = new ResizeObserver(gq),
        Oq = () => {
          const Eq = new Set(document.querySelectorAll(qq));
          let Oq = !1;
          for (const qq of Yq) Eq.has(qq) || (lq.unobserve(qq), Yq.delete(qq), Oq = !0);
          for (const qq of Eq) Yq.has(qq) || (lq.observe(qq), mq.observe(qq, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Yq.add(qq));
          Oq && gq()
        },
        mq = new MutationObserver((Eq => {
          Eq.some((qq => "attributes" === qq.type)) && gq(), Eq.some((Eq => function(qq, Eq, gq) {
            if ("childList" !== qq.type) return !1;
            for (const Yq of qq.addedNodes)
              if (Yq instanceof Element && (Yq.matches(Eq) || Yq.querySelector(Eq))) return !0;
            for (const Yq of qq.removedNodes)
              if (Yq instanceof Element)
                for (const qq of gq)
                  if (Yq.contains(qq)) return !0;
            return !1
          }(Eq, qq, Yq))) && Oq()
        }));
      mq.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const xq of Eq) lq.observe(xq);
      return window.addEventListener("resize", gq), Oq(), gq(), () => {
        lq.disconnect(), mq.disconnect(), window.removeEventListener("resize", gq)
      }
    }
    gq.d(Eq, {
      b: () => Yq
    })
  },
  38471: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      e: () => Oq
    });
    const Yq = new WeakMap;

    function lq(qq) {
      let Eq = Yq.get(qq);
      return Eq || (Eq = {
        hidden: qq.hidden,
        x: NaN,
        y: NaN
      }, Yq.set(qq, Eq)), Eq
    }

    function Oq(qq, Eq) {
      const gq = lq(qq);
      gq.hidden !== Eq && (gq.hidden = Eq, qq.hidden = Eq)
    }

    function mq(qq, Eq, gq) {
      const Yq = lq(qq);
      Yq.x === Eq && Yq.y === gq || (Yq.x = Eq, Yq.y = gq, qq.style.translate = `${Eq}vw ${gq}vh`)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);