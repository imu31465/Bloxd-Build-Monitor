export const id = 235;
export const ids = [235];
export const modules = {
  38264: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(38273);
    const Ku = [0, 0, 0];
    class Qu {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ku;
        this.pool = uu, this.origin = Ru, this.count = 0, this.free = []
      }
      take() {
        var uu;
        const Ru = null !== (uu = this.free.pop()) && void 0 !== uu ? uu : this.count++;
        return Ru >= this.pool.Nr && this.pool.grow(Math.max(2 * this.pool.Nr, Ru + 1)), this.hide(Ru), Ru
      }
      release(uu) {
        this.hide(uu), this.free.push(uu)
      }
      write(uu, Ru, yu, Ku) {
        const {
          records: Qu
        } = this.pool, {
          origin: mu
        } = this, Ju = uu * Eu.c;
        Qu[Ju] = Ru - mu[0], Qu[Ju + 1] = yu - mu[1], Qu[Ju + 2] = Ku - mu[2], Qu[Ju + Eu.f] = 0, this.pool.markDirty(uu)
      }
      hide(uu) {
        this.pool.records[uu * Eu.c + Eu.f] = 1, this.pool.markDirty(uu)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class mu {
      constructor(uu, Ru, yu) {
        this.api = uu, this.model = Ru, this.initialCapacity = yu, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(uu) {
        let Ru = this.kinds.get(uu);
        if (void 0 === Ru) {
          const yu = this.api.createInstancePool({
            ...this.model,
            item: uu
          }, this.initialCapacity);
          null === yu || void 0 === yu || yu.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Ru = yu && new Qu(yu, this.origin), this.kinds.set(uu, Ru)
        }
        return Ru
      }
      follow(uu) {
        const {
          origin: Ru
        } = this;
        if (Math.abs(uu[0] - Ru[0]) <= 512 && Math.abs(uu[1] - Ru[1]) <= 512 && Math.abs(uu[2] - Ru[2]) <= 512) return !1;
        Ru[0] = Math.floor(uu[0]), Ru[1] = Math.floor(uu[1]), Ru[2] = Math.floor(uu[2]);
        for (const yu of this.kinds.values()) null === yu || void 0 === yu || yu.pool.setOrigin(Ru[0], Ru[1], Ru[2]);
        return !0
      }
      commit() {
        for (const uu of this.kinds.values()) null === uu || void 0 === uu || uu.commit()
      }
      dispose() {
        for (const uu of this.kinds.values()) null === uu || void 0 === uu || uu.dispose();
        this.kinds.clear()
      }
    }
  },
  38281: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      i: () => Ju,
      l: () => Nu
    });
    const Eu = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Ku = [0, 1, 2, 0, 2, 3],
      Qu = [4, 5];

    function mu(uu, Ru, yu, Eu, Ku) {
      for (let mu = 0; mu < 6; mu++) Qu.includes(mu) === Ku && Xu(uu, Ru, yu, Eu, mu)
    }

    function Ju(uu, Ru, yu, Eu) {
      for (let Ku = 0; Ku < 6; Ku++) Xu(uu, Ru, yu, Eu, Ku)
    }

    function Nu(uu, Ru, yu, Qu, mu) {
      for (let Ju = 0; Ju < 6; Ju++)
        for (const Nu of [0, 1]) {
          const [Xu, Vu, ru] = [Nu + 2, Nu + 1, (Nu + 3) % 4], Bu = uu.length / 3;
          for (const [Ru, Ku] of [
              [Nu, Vu],
              [Xu, Vu],
              [Xu, ru],
              [Nu, ru]
            ])
            for (let Nu = 0; Nu < 3; Nu++) {
              const Xu = Eu[3 * (4 * Ju + Ru) + Nu],
                Vu = Eu[3 * (4 * Ju + Ku) + Nu];
              uu.push((Xu + (Vu - Xu) * mu) * Qu / 2 + yu[Nu])
            }
          for (const uu of Ku) Ru.push(Bu + uu)
        }
    }

    function Xu(uu, Ru, yu, Qu, mu) {
      let [Ju, Nu, Xu] = yu, [Vu, ru, Bu] = Qu;
      const xu = uu.length / 3;
      for (let Ku = 4 * mu; Ku < 4 * mu + 4; Ku++) uu.push(Eu[3 * Ku] * Vu / 2 + Ju, Eu[3 * Ku + 1] * ru / 2 + Nu, Eu[3 * Ku + 2] * Bu / 2 + Xu);
      for (const Eu of Ku) Ru.push(xu + Eu)
    }
  },
  38256: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => pj
    });
    var Eu = yu(64);
    const Ku = [{
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
      Qu = 10;
    let mu = !0;

    function Ju() {
      return mu
    }

    function Nu(uu) {
      mu = uu
    }
    const Xu = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Vu() {
      return mu ? Ku.length : Qu
    }

    function ru(uu) {
      var Ru, yu;
      return null !== (Ru = null === (yu = Ku[uu - 1]) || void 0 === yu ? void 0 : yu.reactorTier) && void 0 !== Ru ? Ru : 0
    }

    function Bu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ru(uu) > 0;
      return yu && !mu ? "hidden" : uu <= Ru ? "open" : yu ? Ru < 5 ? "hidden" : Ru < Qu ? "teaser" : "locked" : "locked"
    }

    function xu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Eu,
        n: Ku
      } = Tu(uu);
      return {
        key: Ru[Eu],
        params: {
          [Eu]: yu ? String(Ku) : Ku
        }
      }
    }
    const Su = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function pu(uu, Ru) {
      return ru(uu) > 0 && Ru < Qu
    }

    function Tu(uu) {
      const Ru = ru(uu);
      if (Ru > 0) return {
        kind: "atomic",
        n: Ru,
        short: `A${Ru}`
      };
      const yu = function(uu) {
        return uu >= 6 && uu <= 10 ? uu - 6 + 1 : 0
      }(uu);
      return yu > 0 ? {
        kind: "stage",
        n: yu,
        short: `S${yu}`
      } : {
        kind: "tier",
        n: uu,
        short: String(uu)
      }
    }

    function Wu(uu) {
      return Ku[Math.max(1, Math.min(uu, Ku.length)) - 1]
    }

    function ju(uu, Ru) {
      return uu < Ru ? function(uu) {
        var Ru;
        return null !== (Ru = Ku[uu]) && void 0 !== Ru ? Ru : null
      }(uu) : null
    }
    const Hu = "baf2coresubmit",
      du = "baf2corebankpause",
      bu = "baf2coredeposit",
      Cu = "baf2corechargepause";

    function ku(uu) {
      var Ru;
      return null !== (Ru = uu.baf2CoreOpen) && void 0 !== Ru ? Ru : Qu
    }
    const eu = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function Au(uu) {
      return eu.includes(uu)
    }
    const Du = (uu, Ru) => Ru.map((Ru => [Ru, [uu]])),
      Mu = Object.fromEntries([...Du("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Du("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Du("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Du("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Du("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Du("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Du("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Du("Parts Bench", ["Focus Lens"]), ...Du("Machine Bench", ["Laser", "Collider"]), ...Du("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Du("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Du("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Du("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Du("Tool Bench", ["Mob Cage"]), ...Du("Tool Bench", ["Pocket Terminal"]), ...Du("Tool Bench", ["Comet Beacon"]), ...Du("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Iu(uu) {
      var Ru;
      return null !== (Ru = Mu[uu]) && void 0 !== Ru ? Ru : ["Workbench"]
    }

    function Gu(uu) {
      return Iu(uu)[0]
    }
    Ku.slice(1).map(((uu, Ru) => `Core Tier ${Ru+2}`));
    var Uu = yu(9158);
    const nu = ["on", "hud", "off"];

    function su(uu) {
      return "on" === uu
    }
    var tu = yu(343);
    const lu = "Mob Farm",
      gu = {
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
      cu = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Lu = {
        1: 20,
        2: 60,
        3: 120
      },
      zu = "baf2farmvoid",
      Fu = "Caged ",
      wu = " Spawner Block";

    function Zu(uu) {
      return `lifeform:${(0,tu.xe)(uu)}`
    }

    function hu(uu) {
      if (!uu) return null;
      if (uu.startsWith(Fu)) {
        const Ru = uu.slice(6);
        return cu.includes(Ru) ? Ru : null
      }
      if (uu.endsWith(wu)) {
        const Ru = uu.slice(0, -14);
        return void 0 !== gu[Ru] ? Ru : null
      }
      return null
    }

    function Pu(uu) {
      return !0 === uu.mobFarm
    }

    function iu(uu, Ru) {
      return Lu[gu[Ru]] * uu.opMs / 1e3
    }
    const Yu = new Map;
    const ou = "baf2islands",
      qu = "baf2islandnew";

    function Ou(uu) {
      const Ru = Ku.findIndex((Ru => Ru.unlocks.includes(uu)));
      return Ru < 0 ? 1 : Ru + 1
    }

    function vu(uu) {
      return Math.floor(uu).toLocaleString("en-US")
    }
    var au = yu(38198);
    const fu = "baf2terminaltake",
      uR = "baf2terminalput",
      RR = ["one", "stack", "fill"];

    function yR(uu, Ru, yu) {
      return `${fu} ${uu} ${Ru} ${yu}`
    }

    function ER(uu, Ru, yu) {
      return `${uR} ${uu} ${Ru} ${yu}`
    }

    function KR(uu) {
      return `${uR} ${uu}`
    }
    const QR = [
      [`${fu} `, "take"],
      [`${uR} `, "put"]
    ];

    function mR(uu) {
      const Ru = QR.find((Ru => {
        let [yu] = Ru;
        return uu.startsWith(yu)
      }));
      if (!Ru) return null;
      const [yu, Eu] = Ru, [Ku, Qu, ...mu] = uu.slice(yu.length).trim().split(" "), Ju = Number(Ku);
      if (!Number.isSafeInteger(Ju) || Ju <= 0) return null;
      if ("put" === Eu && void 0 === Qu) return {
        kind: "putAll",
        seq: Ju
      };
      const Nu = function(uu) {
        if (RR.includes(uu)) return uu;
        const Ru = Number(uu);
        return /^\d+$/.test(uu) && Number.isSafeInteger(Ru) && Ru > 0 ? Ru : null
      }(null !== Qu && void 0 !== Qu ? Qu : "");
      return null === Nu || 0 === mu.length ? null : {
        kind: Eu,
        seq: Ju,
        mode: Nu,
        item: mu.join(" ")
      }
    }

    function JR(uu, Ru) {
      const yu = "number" === typeof uu ? uu : "one" === uu ? 1 : "stack" === uu ? 99 : Ru;
      return Math.min(Ru, yu)
    }

    function NR(uu, Ru) {
      const yu = uu => "number" === typeof uu ? uu : "one" === uu ? 1 : 99;
      return "fill" === uu || "fill" === Ru ? "fill" : yu(uu) + yu(Ru)
    }

    function XR(uu, Ru) {
      const yu = mR(uu),
        Eu = mR(Ru),
        Ku = yu && Eu ? function(uu, Ru) {
          return "take" === uu.kind || "take" === Ru.kind ? "take" === uu.kind && "take" === Ru.kind && uu.item === Ru.item ? {
            ...Ru,
            mode: NR(uu.mode, Ru.mode)
          } : null : "putAll" === uu.kind || "putAll" === Ru.kind ? {
            kind: "putAll",
            seq: Ru.seq
          } : uu.item === Ru.item ? {
            ...Ru,
            mode: NR(uu.mode, Ru.mode)
          } : null
        }(yu, Eu) : null;
      return Ku ? "putAll" === (Qu = Ku).kind ? KR(Qu.seq) : "put" === Qu.kind ? ER(Qu.seq, Qu.mode, Qu.item) : yR(Qu.seq, Qu.mode, Qu.item) : null;
      var Qu
    }
    const VR = "baf2rx";

    function rR(uu, Ru) {
      for (var yu = arguments.length, Eu = new Array(yu > 2 ? yu - 2 : 0), Ku = 2; Ku < yu; Ku++) Eu[Ku - 2] = arguments[Ku];
      return [VR, uu[0], uu[1], uu[2], Ru, ...Eu].join(" ")
    }
    const BR = 2,
      xR = 4,
      SR = 8,
      pR = 16,
      TR = 32,
      WR = 64,
      jR = 128,
      HR = 256,
      dR = 512,
      bR = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      CR = [{
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
    const kR = "Biomass",
      eR = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function AR(uu) {
      return {
        input: kR,
        inputAmount: 1,
        output: uu,
        outputAmount: 1
      }
    }
    const DR = "baf2synth",
      MR = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      IR = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      GR = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      UR = function(uu, Ru) {
        return {
          input: uu,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: Ru,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      nR = function(uu, Ru) {
        return {
          ...UR(uu, Ru, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      sR = IR.map((uu => nR(uu, "Biomass", 2))),
      tR = {
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
          recipes: [UR("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), UR("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), UR("Raw Gold", "Gold Grit", 2), UR("Messy Stone", "Sand"), UR("Gravel", "Sand"), UR("Raw Voltite", "Voltite Dust", 2), UR("Moonstone", "Moonstone Dust", 4), UR("Wheat Seeds", "Fertiliser"), UR("Raw Uranium", "Uranium Grit", 2), nR("Mossy Messy Stone", "Sand"), ...sR],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [UR("Iron Grit", "Iron Bar"), UR("Copper Grit", "Copper Bar"), UR("Gold Grit", "Gold Bar"), UR("Raw Iron", "Iron Bar"), UR("Raw Copper", "Copper Bar"), UR("Raw Gold", "Gold Bar"), UR("Sand", "Glass"), UR("Messy Stone", "Stone"), ...tu.cd.map((uu => UR(uu, "Charcoal", 1, 4))), UR("Wheat", "Bread", 1, 2), ...IR.map(((uu, Ru) => nR(uu, GR[Ru])))],
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
          recipes: [UR("Iron Bar", "Iron Plate"), UR("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [UR("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [UR("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [UR("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), UR("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), UR("Raw Gold", "Gold Grit", 3), UR("Raw Voltite", "Voltite Dust", 3), UR("Messy Stone", "Sand", 2), UR("Gravel", "Sand", 2), UR("Moonstone", "Moonstone Dust", 6), UR("Raw Uranium", "Uranium Grit", 3), nR("Mossy Messy Stone", "Sand", 2), ...sR],
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
          table: bR
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [UR("Coal", "Diamond", 1, 24), UR("Voltite Dust", "Moonstone", 1, 12)],
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
        ...au.h
      },
      lR = {
        Crusher: [UR("Spent Pellet", "Glow Dust"), UR("Wheat Seeds", "Biomass"), UR("Wheat", "Biomass"), UR("Dead Bush", "Biomass"), UR("Dusk Moss", "Biomass"), UR("Rotten Flesh", "Biomass"), UR("Bone", "Biomass", 2)],
        "Shatter Mill": [UR("Spent Pellet", "Glow Dust"), UR("Wheat Seeds", "Biomass"), UR("Wheat", "Biomass"), UR("Dead Bush", "Biomass"), UR("Dusk Moss", "Biomass"), UR("Rotten Flesh", "Biomass"), UR("Bone", "Biomass", 2), ...tu.cd.map((uu => UR(uu, "Biomass")))],
        Smelter: [UR("Biomass", "Fertiliser", 2)],
        Press: [UR("Coal", "Graphite", 1, 4)]
      },
      gR = "Power Coupler",
      cR = "Advanced Coupler",
      LR = "Nova Coupler",
      zR = [{
        item: gR,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: cR,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: LR,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const FR = new Map;

    function wR(uu) {
      var Ru, yu;
      return null !== (Ru = null !== (yu = uu.fuelSlot) && void 0 !== yu ? yu : uu.couplerSlot) && void 0 !== Ru ? Ru : null
    }

    function ZR(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!uu.couplable) throw new Error(`${uu.kind} takes no Power Coupler`);
      let yu = FR.get(uu);
      yu || (yu = [], FR.set(uu, yu));
      let Eu = yu[Ru];
      if (!Eu) {
        var Ku;
        const {
          divisor: Qu,
          powerPerS: mu
        } = zR[Ru - 1], Ju = uu.opMs / Qu, Nu = void 0 !== uu.fluidMade || void 0 !== uu.cryoMade ? uu.powerPerOp : mu * Ju / 1e3;
        Eu = {
          ...uu,
          fuelSlot: null,
          couplerSlot: null !== (Ku = wR(uu)) && void 0 !== Ku ? Ku : void 0,
          opMs: Ju,
          powerPerOp: Nu,
          coupled: !0
        }, Ru > 1 && (Eu = {
          ...Eu,
          couplerLevel: Ru
        }), yu[Ru] = Eu
      }
      return Eu
    }
    const hR = new Map;
    const PR = new Map;

    function iR(uu, Ru) {
      if (null === Ru || (yu = Ru, !eR.includes(yu))) return uu;
      var yu;
      let Eu = PR.get(Ru);
      return Eu || (Eu = {
        ...uu,
        recipes: [AR(Ru)]
      }, PR.set(Ru, Eu)), Eu
    }

    function YR(uu) {
      return !0 === uu.synth
    }
    const oR = (uu, Ru, yu, Eu) => ({
        output: uu,
        outputAmount: Ru,
        tier: yu,
        inputs: Eu.map((uu => {
          let [Ru, yu] = uu;
          return {
            item: Ru,
            amount: yu
          }
        }))
      }),
      qR = Object.fromEntries([oR("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), oR("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), oR("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), oR("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), oR("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), oR("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), oR("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), oR("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), oR("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), oR("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), oR("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), oR("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), oR("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), oR("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), oR("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), oR("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), oR("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), oR("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), oR("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), oR("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), oR("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), oR("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), oR("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), oR("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), oR("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), oR("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), oR("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), oR("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), oR("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), oR("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((uu => [uu.output, uu]))),
      OR = new Map;

    function vR(uu, Ru) {
      let yu = tR[uu];
      if (Ru.atomic && (yu = function(uu) {
          const Ru = lR[uu.kind];
          if (!Ru) return uu;
          let yu = hR.get(uu.kind);
          if (!yu) {
            const Eu = new Set(Ru.map((uu => uu.input))),
              Ku = uu.recipes.filter((uu => !Eu.has(uu.input)));
            yu = {
              ...uu,
              recipes: [...Ku, ...Ru]
            }, hR.set(uu.kind, yu)
          }
          return yu
        }(yu)), yu.synth) return iR(yu, Ru.taught);
      if (Ru.coupled && yu.couplable) return ZR(yu, Ru.level);
      const Eu = yu.inputSlots && null !== Ru.taught ? qR[Ru.taught] : void 0;
      if (!Eu) return yu;
      const Ku = `${uu}|${Eu.output}`;
      let Qu = OR.get(Ku);
      return Qu || (Qu = {
        ...yu,
        bench: Eu
      }, OR.set(Ku, Qu)), Qu
    }
    const aR = ["Diamond", "Moonstone"];

    function fR(uu) {
      return new Set(uu.flatMap((uu => uu.bonus ? [uu.output, uu.bonus.item] : [uu.output])).filter((uu => !aR.includes(uu))))
    }
    const uy = Object.values(tR).flatMap((uu => uu.recipes));
    fR(uy.filter((uu => !0 !== uu.nuclear))), fR([...uy.filter((uu => !0 === uu.nuclear)), ...Object.values(lR).flat()]);

    function Ry(uu) {
      return null === uu.inputSlot && void 0 === uu.inputSlots && void 0 === uu.powerMade && void 0 === uu.fluidMade && !uu.treeCutter && void 0 === uu.table
    }

    function yy(uu) {
      return !0 === uu.treeCutter
    }
    const Ey = ["Voltite Cell"];

    function Ky(uu) {
      var Ru, yu;
      return null !== (Ru = null === (yu = uu.fuels) || void 0 === yu ? void 0 : yu.some((uu => Ey.includes(uu)))) && void 0 !== Ru && Ru
    }
    const Qy = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(tu.cd.map((uu => [uu, 8e3]))),
        ...Object.fromEntries(tu.Id.map((uu => [uu, 2e3]))),
        "Voltite Cell": 12e4
      },
      my = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Jy = {
        "Uranium Deposit": 4e3
      };

    function Ny(uu) {
      var Ru;
      return null !== (Ru = Object.keys(my).find((Ru => my[Ru] === uu))) && void 0 !== Ru ? Ru : null
    }

    function Xy(uu) {
      return MR.includes(uu)
    }

    function Vy(uu) {
      return !0 !== uu.nuclear || Ju()
    }
    var ry = yu(330);
    var By = yu(9237),
      xy = yu(9172),
      Sy = yu(9243),
      py = yu(9228);
    const Ty = "Reactor Controller",
      Wy = "Reactor Port",
      jy = "Battery Cell",
      Hy = ["fuel", "water", "waste"],
      dy = {
        fuel: Wy,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      by = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      Cy = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      ky = "Reactor Frame",
      ey = "Reactor Glass",
      Ay = {
        edge: [ky],
        cap: [ey, Wy],
        wall: [ey, Wy],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Ty]
      },
      Dy = {
        edge: [jy],
        cap: [jy],
        wall: [jy],
        inside: [jy],
        ctrl: [jy]
      },
      My = ["edge", "cap", "wall", "inside"],
      Iy = ["Reactor Slag"];

    function Gy(uu) {
      return Iy.includes(Uy(uu))
    }

    function Uy(uu) {
      const Ru = uu.indexOf("|");
      return Ru < 0 ? uu : uu.slice(0, Ru)
    }

    function ny(uu) {
      return Uy(uu) === Ty ? "reactor" : null
    }

    function sy(uu) {
      return Uy(uu) !== Wy ? null : uu.endsWith("|Water") ? "water" : uu.endsWith("|Waste") ? "waste" : "fuel"
    }

    function ty(uu) {
      const Ru = sy(uu);
      return null === Ru ? null : cy(dy[Hy[(Hy.indexOf(Ru) + 1) % Hy.length]], function(uu) {
        return uu.includes(ly)
      }(uu))
    }
    const ly = "|meta|rot1|Formed",
      gy = new Set([ky, ey, Wy]);

    function cy(uu, Ru) {
      var yu;
      const Eu = Uy(uu);
      if (!gy.has(Eu)) return uu;
      if (Eu !== Wy) return Ru ? Eu + ly : Eu;
      const Ku = null !== (yu = sy(uu)) && void 0 !== yu ? yu : "fuel";
      return Ru ? "fuel" === Ku ? Eu + ly : `${Eu}${ly}|${"water"===Ku?"Water":"Waste"}` : dy[Ku]
    }

    function Ly(uu, Ru) {
      const yu = EE(uu, Ru);
      if ("Air" === yu) return !1;
      const Eu = "reactor" === uu ? Ay : Dy;
      return My.some((uu => Eu[uu].includes(yu))) || "reactor" === uu && Iy.includes(yu)
    }

    function zy(uu) {
      return Cy[uu]
    }

    function Fy(uu) {
      var Ru;
      return null !== (Ru = by[uu]) && void 0 !== Ru ? Ru : by[1]
    }

    function wy(uu) {
      const [Ru, , yu] = Fy(uu);
      return [yu, 0, -Ru]
    }

    function Zy(uu, Ru, yu, Eu, Ku, Qu) {
      return {
        ctrl: [uu[0], uu[1], uu[2]],
        rot: by[Ru] ? Ru : 1,
        w: yu,
        h: Eu,
        d: Ku,
        cu: Qu[0],
        cv: Qu[1]
      }
    }

    function hy(uu, Ru) {
      return "reactor" === uu ? [Math.floor((Ru - 1) / 2), 0] : [0, 0]
    }

    function Py(uu, Ru, yu, Eu, Ku) {
      let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uu.rot;
      if (yu === uu.w && Eu === uu.h && Ku === uu.d && Qu === uu.rot) return uu;
      const [mu] = hy(Ru, uu.w);
      if (uu.cu === mu && uu.cv <= 1) return Zy(uu.ctrl, Qu, yu, Eu, Ku, hy(Ru, yu));
      const Ju = (uu, Ru) => Math.max(1, Math.min(Ru, uu));
      return Zy(uu.ctrl, Qu, yu, Eu, Ku, [Ju(uu.cu, yu - 2), 0 === uu.cv ? 0 : Ju(uu.cv, Eu - 2)])
    }
    const iy = 11,
      Yy = 2 * iy + 1;
    new Uint8Array(Yy * Yy * Yy);

    function oy(uu) {
      return uu.w * uu.h * uu.d
    }

    function qy(uu) {
      const Ru = wy(uu.rot);
      return [uu.ctrl[0] - Ru[0] * uu.cu, uu.ctrl[1] - uu.cv, uu.ctrl[2] - Ru[2] * uu.cu]
    }

    function Oy(uu) {
      return uu.cv * uu.d * uu.w + uu.cu
    }

    function vy(uu, Ru) {
      const yu = Ru % uu.w,
        Eu = Math.floor(Ru / uu.w) % uu.d;
      return [yu, Math.floor(Ru / (uu.w * uu.d)), Eu]
    }

    function ay(uu, Ru) {
      const [yu, Eu, Ku] = vy(uu, Ru), Qu = qy(uu), mu = Fy(uu.rot), Ju = wy(uu.rot);
      return [Qu[0] + Ju[0] * yu - mu[0] * Ku, Qu[1] + Eu, Qu[2] + Ju[2] * yu - mu[2] * Ku]
    }

    function fy(uu, Ru) {
      const yu = qy(uu),
        Eu = Fy(uu.rot),
        Ku = wy(uu.rot),
        Qu = Ru[0] - yu[0],
        mu = Ru[2] - yu[2],
        Ju = Qu * Ku[0] + mu * Ku[2],
        Nu = -(Qu * Eu[0] + mu * Eu[2]),
        Xu = Ru[1] - yu[1];
      return Ju < 0 || Ju >= uu.w || Xu < 0 || Xu >= uu.h || Nu < 0 || Nu >= uu.d ? -1 : (Xu * uu.d + Nu) * uu.w + Ju
    }

    function uE(uu, Ru) {
      if (Ru === Oy(uu)) return "ctrl";
      const [yu, Eu, Ku] = vy(uu, Ru), Qu = 0 === Eu || Eu === uu.h - 1, mu = Number(0 === yu || yu === uu.w - 1) + Number(Qu) + Number(0 === Ku || Ku === uu.d - 1);
      return mu >= 2 ? "edge" : 1 === mu ? Qu ? "cap" : "wall" : "inside"
    }

    function RE(uu, Ru) {
      const [yu, Eu, Ku] = vy(uu, Ru);
      return 0 === yu || yu === uu.w - 1 || 0 === Eu || Eu === uu.h - 1 || 0 === Ku || Ku === uu.d - 1 ? -1 : ((Eu - 1) * (uu.d - 2) + (Ku - 1)) * (uu.w - 2) + (yu - 1)
    }

    function yE(uu, Ru) {
      const yu = uu.w - 2,
        Eu = uu.d - 2,
        Ku = Ru % yu + 1,
        Qu = Math.floor(Ru / yu) % Eu + 1;
      return ((Math.floor(Ru / (yu * Eu)) + 1) * uu.d + Qu) * uu.w + Ku
    }

    function EE(uu, Ru) {
      const yu = Uy(Ru);
      return "reactor" === uu && yu === Ty ? ky : yu
    }

    function KE(uu, Ru, yu) {
      const Eu = "ctrl" === Ru ? Uy(yu) : EE(uu, yu);
      return ("reactor" === uu ? Ay : Dy)[Ru].includes(Eu) ? "ok" : "Air" === Eu ? "missing" : Ly(uu, yu) ? "wrong" : "blocked"
    }

    function QE(uu, Ru) {
      return "battery" === uu ? jy : "inside" === Ru ? null : function(uu, Ru) {
        if ("inside" === Ru || "ctrl" === Ru || "battery" === uu) return null;
        return "edge" === Ru ? ky : ey
      }(uu, Ru)
    }
    const mE = {
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
      JE = "Collider",
      NE = "Laser",
      XE = "Star Alloy",
      VE = "Glow Dust",
      rE = [JE, "_Collider Focus"];

    function BE(uu) {
      return rE.indexOf(Uy(uu))
    }

    function xE(uu) {
      return Uy(uu) === NE
    }

    function SE(uu) {
      return [
        [uu[0], uu[1], uu[2]],
        [uu[0], uu[1] + 1, uu[2]]
      ]
    }
    const pE = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function TE(uu, Ru, yu) {
      const Eu = pE[Ru];
      return [uu[0] + Eu[0] * yu, uu[1], uu[2] + Eu[2] * yu]
    }

    function WE(uu, Ru) {
      if (Ru[1] !== uu[1]) return null;
      const yu = Ru[0] - uu[0],
        Eu = Ru[2] - uu[2];
      if (0 !== yu === (0 !== Eu)) return null;
      const Ku = Math.abs(yu + Eu);
      if (Ku > mE.LASER_D) return null;
      return {
        dir: Eu < 0 ? 0 : yu > 0 ? 1 : Eu > 0 ? 2 : 3,
        fm: Ku
      }
    }

    function jE(uu, Ru, yu) {
      const Eu = Ru => Math.abs(uu[0] - Ru[0]) <= 1 && Math.abs(uu[1] - Ru[1]) <= 1;
      return Eu(Ru) || Eu(yu)
    }

    function HE(uu, Ru) {
      return function(uu, Ru, yu, Eu) {
        return [0, 1, 2, 3].map((Ku => {
          for (let Qu = 1; Qu <= mE.LASER_D; Qu++) {
            const mu = TE(uu, Ku, Qu);
            if (jE([mu[0], mu[2]], Ru, yu) || !Eu(mu)) return !1
          }
          return !0
        }))
      }(SE(uu)[1], Ru.spawnXZ, Ru.coreXZ, (uu => uu[1] >= By.r && uu[1] < By.r + By.s && uu[0] >= Ru.minXZ[0] && uu[0] <= Ru.maxXZ[0] && uu[2] >= Ru.minXZ[1] && uu[2] <= Ru.maxXZ[1]))
    }
    const dE = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function bE(uu) {
      return Math.max(48 + 16 * uu, Wu(uu).machineAllowance)
    }
    const CE = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function kE(uu) {
      const Ru = uu.split("|")[0];
      return CE.includes(Ru) ? "Solar Panel" : Ru === Sy.e ? "Fluid Pipe" : BE(Ru) >= 0 ? "Collider" : (yu = Ru, dE.includes(yu) ? Ru : null);
      var yu
    }
    const eE = "buildAFactory2Game:solarPanelDescription";
    const AE = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function DE(uu, Ru) {
      var yu;
      return null !== (yu = AE.find((yu => {
        var Eu;
        return (null !== (Eu = uu.level(yu)) && void 0 !== Eu ? Eu : 0) >= Ru
      }))) && void 0 !== yu ? yu : null
    }
    const ME = "buildAFactory2Game:";
    let IE = null;
    const GE = {
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
      UE = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      nE = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      sE = {
        "Loot Chest": `${ME}lookRuinChestName`
      };

    function tE(uu) {
      return "object" === typeof uu && null !== uu && "translationKey" in uu && "string" === typeof uu.translationKey ? uu.translationKey : null
    }

    function lE(uu, Ru) {
      var yu;
      return null !== (yu = tE(uu.displayName(Ru))) && void 0 !== yu ? yu : `item:${(0,tu.xe)(Ru)}`
    }

    function gE(uu, Ru) {
      var yu, Eu, Ku, Qu;
      let mu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ru;
      if ("Solar Panel" === kE(Ru)) return {
        name: tE(uu.displayName("Solar Panel")),
        detail: eE,
        detailItem: null
      };
      const Nu = Ru.endsWith(" Ore"),
        Xu = (IE ??= new Set([...Object.keys((0, xy.i)()), ...Object.keys((0, Sy.t)())].map((uu => uu.split("|")[0]))), IE).has(Ru),
        Vu = Nu || Xu ? null : function(uu) {
          var Ru;
          return uu.endsWith(" Log") && !uu.startsWith("Barkless ") ? "lookLog" : uu.endsWith(" Sapling") ? "lookSapling" : uu.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (Ru = GE[uu]) && void 0 !== Ru ? Ru : null
        }(Ru);
      if (!uu.isBlock(Ru) || !Nu && !Xu && null === Vu) return null;
      const ru = null !== (yu = null !== (Eu = sE[Ru]) && void 0 !== Eu ? Eu : tE(null !== (Ku = uu.displayName(mu)) && void 0 !== Ku ? Ku : uu.displayName(Ru))) && void 0 !== yu ? yu : `item:${(0,tu.xe)(Ru)}`;
      if (null !== Vu) return {
        name: ru,
        detail: `${ME}${Vu}`,
        detailItem: null
      };
      const Bu = null !== (Qu = UE[Ru]) && void 0 !== Qu ? Qu : Ju() ? nE[Ru] : void 0;
      if (Xu && void 0 !== Bu) return {
        name: ru,
        detail: `${ME}${Bu}`,
        detailItem: null
      };
      const xu = my[Ru];
      if (void 0 !== xu) return {
        name: ru,
        detail: `${ME}lookDeposit`,
        detailItem: lE(uu, xu)
      };
      const Su = uu.harvestLevel(Ru);
      if (Nu && "rock" === uu.harvestType(Ru) && 0 !== Su) {
        const Ru = DE(uu, null !== Su && void 0 !== Su ? Su : 0);
        if (Ru === AE[0]) return {
          name: ru,
          detail: `${ME}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== Ru) return {
          name: ru,
          detail: `${ME}lookPickaxe`,
          detailItem: lE(uu, Ru)
        }
      }
      return {
        name: ru,
        detail: tE(uu.description(Ru)),
        detailItem: null
      }
    }

    function cE(uu) {
      return uu < By.r - 24
    }
    const LE = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const zE = "Wrench",
      FE = "Nova Wrench";

    function wE(uu) {
      return uu === zE || uu === FE
    }
    const ZE = [...By.L, "Belt Lift", "Belt Drop"];
    const hE = ["Belt Lift", "Belt Drop"],
      PE = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function iE(uu) {
      return uu.split("|")[0]
    }

    function YE(uu) {
      const Ru = /\|rot(\d)/.exec(uu);
      return Ru ? Number(Ru[1]) : 1
    }

    function oE(uu) {
      return uu % 4 + 1
    }

    function qE(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === Ru && "" === yu ? uu : `${uu}|meta|rot${Ru}${yu}`
    }

    function OE(uu) {
      return iE(uu) === By.A ? (0, By.S)(uu) ? "gateRight" : "gateLeft" : (0, By.X)(uu)
    }

    function vE(uu) {
      const Ru = iE(uu),
        yu = YE(uu);
      if (By.L.includes(Ru)) return (0, By.M)(Ru, oE(yu), null);
      if (Ru === By.i) return (0, By.$)(oE(yu), (0, By.U)(uu));
      if (Ru === By.E) {
        const Eu = PE[(0, By.X)(uu)];
        return null === Eu ? qE(Ru, oE(yu)) : qE(Ru, yu, By.H[Eu])
      }
      return Ru === By.A ? (0, By.S)(uu) ? qE(Ru, oE(yu)) : qE(Ru, yu, By.p) : py.c.includes(Ru) && !hE.includes(Ru) || Xy(Ru) ? qE(Ru, oE(yu)) : null
    }

    function aE(uu) {
      return py.c.includes(uu) || Xy(uu) || null !== kE(uu)
    }

    function fE(uu) {
      return "Solar Panel" === kE(uu)
    }
    const uK = "buildAFactory2Game:",
      RK = {
        leftFront: `${uK}lookSplitDetail_leftFront`,
        frontRight: `${uK}lookSplitDetail_frontRight`,
        gateRight: `${uK}lookGateDetail_gateRight`
      };

    function yK(uu, Ru) {
      var yu;
      let Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Ku = OE(uu),
        Qu = null === Ku ? null : `${uK}${Ku.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Ku}`,
        mu = null === Ku ? null : null !== (yu = RK[Ku]) && void 0 !== yu ? yu : null;
      if (wE(Ru) && Eu) {
        const yu = iE(uu);
        return Ru === FE && Ju() && function(uu) {
          return ZE.includes(iE(uu))
        }(uu) ? {
          mode: Qu,
          detail: mu,
          next: `${uK}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Qu,
          detail: mu,
          next: aE(yu) && !fE(yu) ? `${uK}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Nu = wE(Ru) ? vE(uu) : null;
      if (null === Nu) return {
        mode: Qu,
        detail: mu,
        next: null,
        nextState: null
      };
      const Xu = OE(Nu);
      return null === Xu || YE(Nu) !== YE(uu) ? {
        mode: Qu,
        detail: mu,
        next: `${uK}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Qu,
        detail: mu,
        next: `${uK}lookWrenchNext`,
        nextState: `${uK}lookWrenchState_${Xu}`
      }
    }
    const EK = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const KK = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function QK(uu) {
      return [0, 1, 2, 3].map((Ru => 0 !== (uu & 1 << Ru)))
    }

    function mK(uu) {
      const Ru = [];
      for (let yu = 8; yu + 2 < uu.length; yu += 3) Ru.push([uu[yu], uu[yu + 1], uu[yu + 2]]);
      return {
        focus: [uu[0], uu[1], uu[2]],
        lasers: QK(uu[3]),
        open: QK(uu[4]),
        live: QK(uu[5]),
        on: 1 === uu[6],
        state: KK[uu[7]],
        blockers: Ru
      }
    }
    const JK = "Arc Caster",
      NK = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      XK = (Object.values(NK), "Jet Chestplate"),
      VK = "Nova Jet Chestplate",
      rK = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      BK = Object.values(rK);

    function xK(uu, Ru, yu) {
      return Math.min(function(uu) {
        return Ju() && ru(uu) >= 5 ? 20 : 10
      }(yu), Math.floor(function(uu, Ru) {
        return Math.max(0, uu) + (Ju() ? Math.max(0, Ru) : 0)
      }(uu, Ru) / 5))
    }

    function SK(uu, Ru, yu) {
      const Eu = xK(Ru, yu, uu),
        Ku = ru(uu),
        Qu = (Ku >= 3 ? 55 : Ku >= 1 ? 50 : uu >= 8 ? 45 : 30) + Eu,
        mu = Math.max(100 + Eu, 2 * Qu);
      return {
        arcDamage: Qu,
        arcPierce: uu >= 7 ? 2 : 1,
        arcChain: uu >= 10,
        barrierMax: (Ku >= 4 ? 100 : Ku >= 2 ? 90 : uu >= 9 ? 80 : uu >= 6 ? 60 : 40) + 5 * Eu,
        barrierRegenPerS: Ku >= 5 ? 20 : uu >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Eu,
        novaShieldRegenPerS: 32,
        bladeDamage: mu,
        bladePunch: Math.round(.5 * mu),
        forgeRank: Eu
      }
    }
    const pK = {
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
    var TK = yu(36602),
      WK = yu(36449),
      jK = yu(36445),
      HK = yu(27),
      dK = yu(1583),
      bK = yu(1035),
      CK = yu.n(bK);

    function kK(uu) {
      return !0 === uu.field
    }
    const eK = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function AK(uu) {
      return eK.has(uu) ? `buildAFactory2Game:itemPlural_${(0,tu.xe)(uu)}` : null
    }
    var DK = yu(1170),
      MK = yu(1043),
      IK = yu(1841),
      GK = yu(1825),
      UK = yu(36593),
      nK = yu(36599),
      sK = yu(34),
      tK = yu(36590);
    const lK = "baf2QuestView",
      gK = "baf2PlayerY",
      cK = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class LK {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = uu, this.view = {
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
      set(uu, Ru) {
        var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu;
        const Vu = JSON.stringify(uu.baf2QuestName) === JSON.stringify(this.view.name),
          ru = new Set(this.view.rows.filter((uu => uu.done)).map((uu => uu.id))),
          Bu = new Set(this.view.rows.filter((uu => uu.justFinished)).map((uu => uu.id))),
          xu = uu.baf2QuestSide,
          Su = null !== xu && !0 === uu.baf2QuestSideFocus;
        let pu = !1,
          Tu = 0;
        const Wu = uu.baf2QuestSteps.map((uu => {
            const Ru = YK(uu, cK.has(uu[0]) ? uu[0] : "" + Tu++),
              yu = Vu && Ru.done && !ru.has(Ru.id);
            return Ru.justFinished = yu || Vu && Ru.done && Bu.has(Ru.id), pu ||= yu, Ru
          })),
          ju = iK(Wu);
        ju >= 0 && !Su && (Wu[ju].current = !0);
        const Hu = !Vu && null !== uu.baf2QuestName,
          du = JSON.stringify(xu && [xu[0], xu[1]]),
          bu = du === JSON.stringify(null !== (yu = null === (Eu = this.view.side) || void 0 === Eu ? void 0 : Eu.name) && void 0 !== yu ? yu : null),
          Cu = null !== xu && !this.sidesSeen.has(du);
        Cu && this.sidesSeen.add(du), this.serverTutorial = null !== (Ku = uu.baf2QuestTutorial) && void 0 !== Ku ? Ku : "on", (null !== (Qu = uu.baf2QuestTutorialSeq) && void 0 !== Qu ? Qu : 0) >= this.pickSeq && this.endPick();
        const ku = !Vu || !bu || uu.baf2QuestTier !== this.view.tier;
        this.view = {
          name: uu.baf2QuestName,
          rows: Wu,
          reward: uu.baf2QuestReward,
          goal: uu.baf2QuestGoal,
          pulse: this.view.pulse + (pu || Hu ? 1 : 0),
          itemNames: Ru,
          side: xu && {
            name: [xu[0], xu[1]],
            row: {
              ...YK(xu[2], "side"),
              current: Su
            },
            goal: null !== (mu = xu[3]) && void 0 !== mu ? mu : null
          },
          sideCameUpAt: Cu ? Date.now() : this.view.sideCameUpAt,
          tier: uu.baf2QuestTier,
          core: uu.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (Ju = uu.baf2QuestAlso) && void 0 !== Ju ? Ju : [],
          depth: null !== (Nu = uu.baf2QuestDepth) && void 0 !== Nu ? Nu : null,
          tutorial: null !== (Xu = this.pickedTutorial) && void 0 !== Xu ? Xu : this.serverTutorial,
          tutorialKnown: !0
        }, this.Op(), pu && this.scheduleClear(), ku && this.requestBook()
      }
      setTutorial(uu) {
        return this.endPick(), this.pickedTutorial = uu, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Op()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: uu
        }, this.Op(), this.pickSeq
      }
      onPlayerY(uu) {
        const Ru = Math.floor(uu);
        Ru !== this.playerY && (this.playerY = Ru, this.view.depth && sK.k.Op(gK, Ru))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(uu) {
        this.view = {
          ...this.view,
          chapters: uu.baf2BookChapters
        }, this.Op()
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
            rows: this.view.rows.map((uu => uu.justFinished ? {
              ...uu,
              justFinished: !1
            } : uu))
          }, this.Op()
        }), 2400)
      }
      Op() {
        sK.k.Op(lK, this.view, !0)
      }
    }

    function zK(uu, Ru) {
      return uu.sideCameUpAt > 0 && Ru - uu.sideCameUpAt < 2400
    }

    function FK(uu) {
      return (null === uu.name || wK(uu)) && null === uu.side && null !== uu.chapters
    }

    function wK(uu) {
      var Ru;
      return "quest_forgeOngoing" === (null === (Ru = uu.name) || void 0 === Ru ? void 0 : Ru[0])
    }

    function ZK(uu) {
      return uu.filter((uu => !cK.has(uu.key)))
    }

    function hK(uu) {
      return uu.key.startsWith("stepCraft")
    }

    function PK(uu, Ru) {
      const yu = new Set,
        Eu = uu.side ? [...uu.rows, uu.side.row] : uu.rows;
      for (const Qu of Eu)
        if (!Qu.done) {
          !Qu.item || Ru && !hK(Qu) || yu.add(Qu.item);
          for (const [uu, Ru, Eu] of null !== (Ku = Qu.chips) && void 0 !== Ku ? Ku : []) {
            var Ku;
            Ru < Eu && yu.add(uu)
          }
        } return yu
    }

    function iK(uu) {
      const Ru = uu.findIndex((uu => !uu.done && !uu.away));
      return Ru >= 0 ? Ru : uu.findIndex((uu => !uu.done))
    }

    function YK(uu, Ru) {
      let [yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru] = uu;
      return {
        id: Ru,
        key: yu,
        params: Eu,
        item: Ku,
        amount: Qu,
        total: mu,
        done: Ju,
        chips: null !== Nu && void 0 !== Nu ? Nu : null,
        current: !1,
        away: !0 === Xu,
        madeFor: null !== Vu && void 0 !== Vu ? Vu : [],
        also: null !== ru && void 0 !== ru ? ru : [],
        justFinished: !1
      }
    }
    const oK = "baf2QuestItems",
      qK = new Set;
    let OK = new Set,
      vK = null;

    function aK(uu) {
      const Ru = su(uu.tutorial),
        yu = Ru ? PK(uu, !0) : qK;
      "inventory" === HK.d.get("openInGameMenuName") ? (vK = null, (0, tK.y)(yu)) : vK = yu;
      const Eu = Ru ? PK(uu, !1) : qK;
      (0, nK.b)(Eu, OK) || (OK = Eu, sK.k.Op(oK, OK))
    }

    function fK() {
      return (0, UK.c)(oK, (() => OK))
    }
    var uQ = yu(9079),
      RQ = yu(3093);

    function yQ(uu) {
      const Ru = (0, RQ.b)(uu),
        yu = void 0 === Ru ? void 0 : (0, uQ.displayNameOf)(Ru);
      return "object" === typeof yu && null !== yu && "translationKey" in yu && "string" === typeof yu.translationKey ? yu.translationKey : `item:${(0,tu.xe)(uu)}`
    }

    function EQ(uu, Ru) {
      return uu(yQ(Ru))
    }
    const KQ = [{
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

    function QQ(uu, Ru) {
      return [`Deposit Seed (${uu})`, {
        item: my[`${uu} Deposit`],
        amount: Ru
      }]
    }
    const mQ = Object.fromEntries([QQ("Coal", 8), QQ("Iron", 8), QQ("Copper", 8), QQ("Gold", 6), QQ("Voltite", 4), QQ("Uranium", 4)]),
      JQ = "Relay Coil",
      NQ = new Map;

    function XQ(uu) {
      let Ru = NQ.get(uu);
      if (!Ru) {
        const yu = Math.max(1, uu);
        Ru = KQ.filter((uu => {
          var Ru;
          return yu >= uu.fromTier && yu <= (null !== (Ru = uu.untilTier) && void 0 !== Ru ? Ru : 1 / 0)
        })).map((uu => uu.later && yu >= uu.later.tier ? {
          ...uu,
          weight: uu.later.weight
        } : uu)), NQ.set(uu, Ru)
      }
      return Ru
    }

    function VQ(uu) {
      return XQ(uu).some((uu => {
        let {
          item: Ru
        } = uu;
        return Ru === JQ
      }))
    }

    function rQ(uu) {
      return uu.startsWith("Deposit Seed (")
    }

    function BQ(uu, Ru) {
      const yu = XQ(uu);
      return Ru ? yu.filter((uu => Ru(uu.item))) : yu
    }

    function xQ(uu) {
      return uu.reduce(((uu, Ru) => uu + Ru.weight), 0)
    }

    function SQ(uu, Ru) {
      const yu = BQ(uu, Ru),
        Eu = xQ(yu);
      return yu.map((uu => ({
        find: uu,
        chance: uu.weight / Eu
      })))
    }
    const pQ = 6e4,
      TQ = new Intl.NumberFormat("en-US");

    function WQ(uu, Ru) {
      const yu = uu >= 10 ? Math.round(uu) : Math.round(10 * uu) / 10;
      return 0 === yu ? "0" : `${Ru}${TQ.format(yu)}`
    }

    function jQ(uu) {
      return uu < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? TQ.format(uu) : uu < 1e6 ? `${uu<1e5?Math.floor(uu/100)/10:Math.floor(uu/1e3)}k` : Math.floor(uu / 1e5) / 10 + "M"
    }

    function HQ(uu) {
      return uu < 0 ? "\u2212" + -uu : String(uu)
    }

    function dQ(uu, Ru) {
      const yu = Math.max(1, Math.round(Ru));
      if (yu < 60) return uu("buildAFactory2Game:durationSeconds", {
        seconds: String(yu)
      });
      const Eu = Math.round(yu / 60);
      if (Eu < 60) return uu("buildAFactory2Game:durationMinutes", {
        minutes: String(Eu)
      });
      const Ku = String(Math.floor(Eu / 60));
      return Eu % 60 === 0 ? uu("buildAFactory2Game:durationWholeHours", {
        hours: Ku
      }) : uu("buildAFactory2Game:durationHours", {
        hours: Ku,
        minutes: String(Eu % 60)
      })
    }
    const bQ = "(max-height: 420px), (max-width: 650px)";

    function CQ() {
      return "undefined" !== typeof window && window.matchMedia(bQ).matches
    }

    function kQ(uu) {
      const Ru = window.matchMedia(bQ),
        yu = () => {
          uu(Ru.matches)
        };
      return Ru.addEventListener("change", yu), () => {
        Ru.removeEventListener("change", yu)
      }
    }
    var eQ = yu(1079);

    function AQ(uu, Ru) {
      return null !== uu && uu > Ru + 1
    }

    function DQ(uu) {
      const Ru = 100 * uu;
      return String(Ru <= 0 || Ru >= 1 ? Math.round(Ru) : Math.max(.1, Math.round(10 * Ru) / 10))
    }

    function MQ(uu) {
      let {
        item: Ru,
        amount: yu
      } = uu;
      return (0, eQ.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, eQ.jsx)(IK.c, {
            itemName: Ru,
            amount: 0
          })
        }), yu > 1 && (0, eQ.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", yu]
        })]
      })
    }

    function IQ(uu) {
      let {
        label: Ru,
        names: yu
      } = uu;
      const [Ku, Qu] = (0, Eu.useState)(!1), mu = yu.join(" / ");
      return (0, eQ.jsxs)(eQ.Fragment, {
        children: [(0, eQ.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: mu,
          "aria-expanded": Ku,
          onClick: () => {
            Qu(!Ku)
          },
          children: Ru
        }), Ku && (0, eQ.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: mu
        })]
      })
    }

    function GQ(uu) {
      let {
        tier: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)(), {
        key: Eu,
        params: Ku
      } = xu(Ru, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Qu = yu(`buildAFactory2Game:${Eu}`, Ku);
      return (0, eQ.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, eQ.jsx)(MK.c, {
          name: "lock"
        }), Qu]
      })
    }
    const UQ = (0, Eu.createContext)(null);

    function nQ() {
      const {
        t: uu
      } = (0, DK.E)(), Ru = (0, Eu.useContext)(UQ);
      return (0, Eu.useEffect)((() => null === Ru || void 0 === Ru ? void 0 : Ru()), [Ru]), (0, eQ.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: uu("buildAFactory2Game:recipeForQuest"),
        "aria-label": uu("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function sQ(uu) {
      let {
        title: Ru,
        count: yu,
        children: Ku,
        startOpen: Qu = !0
      } = uu;
      const {
        t: mu
      } = (0, DK.E)(), [Ju, Nu] = (0, Eu.useState)((() => Qu && !CQ())), [Xu, Vu] = (0, Eu.useState)(0), ru = (0, Eu.useCallback)((() => (Vu((uu => uu + 1)), () => {
        Vu((uu => uu - 1))
      })), []);
      return (0, eQ.jsxs)("div", {
        className: CK()("Baf2Recipes", {
          Open: Ju
        }),
        children: [(0, eQ.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Nu(!Ju)
          },
          "aria-expanded": Ju,
          children: [mu("buildAFactory2Game:recipesToggle", {
            title: Ru,
            count: String(yu)
          }), (0, eQ.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: Ju ? "\u25be" : "\u25b8"
          })]
        }), Ju && (0, eQ.jsxs)(UQ.Provider, {
          value: ru,
          children: [(0, eQ.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Ku
          }), Xu > 0 && (0, eQ.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, eQ.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), mu("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const tQ = "buildAFactory2Game:",
      lQ = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const gQ = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      cQ = {
        "Uranium Grit": Qu,
        "Raw Uranium": Qu
      };

    function LQ(uu) {
      var Ru;
      return null !== (Ru = cQ[uu]) && void 0 !== Ru ? Ru : Math.max(Ou(uu), gQ[uu] ? Ou(gQ[uu]) : 1, function(uu) {
        const Ru = Ku.findIndex((Ru => Ru.cost.some((Ru => Ru.item === uu))));
        return Ru > Qu ? Ru : 1
      }(uu))
    }

    function zQ(uu, Ru) {
      return FQ(Ru) ? LQ(Ru) : function(uu) {
        if (lQ.has(uu)) return 1;
        const Ru = Ku.findIndex((Ru => Ru.newDeposits.some((Ru => {
          let {
            block: yu
          } = Ru;
          return yu === uu
        }))));
        return Ru < 0 ? 1 : Ru + 1
      }(uu)
    }

    function FQ(uu) {
      return uu in cQ || ru(LQ(uu)) > 0
    }

    function wQ(uu, Ru) {
      return vR(uu, {
        coupled: !1,
        taught: null,
        atomic: Ju() && Ru >= 11
      }).recipes
    }

    function ZQ(uu, Ru) {
      const yu = Bu(uu, Ru, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ru(uu) > 0);
      return "open" === yu || "locked" === yu
    }

    function hQ(uu, Ru) {
      return uu.map(((uu, yu) => ({
        value: uu,
        idx: yu,
        tier: Ru(uu)
      }))).sort(((uu, Ru) => uu.tier - Ru.tier || uu.idx - Ru.idx)).map((uu => {
        let {
          value: Ru
        } = uu;
        return Ru
      }))
    }

    function PQ(uu, Ru, yu) {
      const Eu = Bu(uu, Ru);
      if ("hidden" === Eu || "open" === Eu) return null;
      if ("teaser" === Eu) return {
        tag: {
          translationKey: `${tQ}${yu?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${tQ}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Ku = xu(uu, {
          tier: yu ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Qu = xu(uu, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${tQ}${Ku.key}`,
          params: Ku.params
        },
        reason: {
          translationKey: `${tQ}${Qu.key}`,
          params: Qu.params
        }
      }
    }

    function iQ(uu) {
      return !rQ(uu)
    }

    function YQ(uu) {
      let {
        seconds: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)();
      return (0, eQ.jsx)(sQ, {
        title: yu("buildAFactory2Game:recipesCuts", {
          seconds: Ru
        }),
        count: 1,
        children: (0, eQ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, eQ.jsx)(MQ, {
            item: "Maple Sapling",
            amount: 1
          }), (0, eQ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, eQ.jsx)(MQ, {
            item: "Maple Log",
            amount: 1
          }), (0, eQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: yu("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function oQ(uu) {
      let {
        fertilised: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)();
      return (0, eQ.jsxs)(sQ, {
        title: yu("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, eQ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, eQ.jsx)(MQ, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, eQ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, eQ.jsx)(MQ, {
            item: "Wheat",
            amount: 1
          }), (0, eQ.jsx)(MQ, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, eQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: yu("buildAFactory2Game:recipeField")
          })]
        }), (0, eQ.jsxs)("li", {
          className: CK()("Baf2Recipe", {
            InUse: Ru
          }),
          children: [(0, eQ.jsx)(MQ, {
            item: "Fertiliser",
            amount: 1
          }), (0, eQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: yu("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function qQ(uu) {
      let {
        tier: Ru,
        seconds: yu
      } = uu;
      const {
        t: Eu
      } = (0, DK.E)(), Ku = function(uu) {
        return uu >= 5 ? CR : bR
      }(Ru);
      return (0, eQ.jsx)(sQ, {
        title: Eu("buildAFactory2Game:recipesBringsUp", {
          seconds: yu
        }),
        count: Ku.length,
        children: Ku.map((uu => {
          let {
            item: Ru,
            chance: yu
          } = uu;
          return (0, eQ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, eQ.jsx)(MQ, {
              item: Ru,
              amount: 1
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: EQ(Eu, Ru)
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Eu("buildAFactory2Game:recipeChance", {
                percent: DQ(yu)
              })
            })]
          }, Ru)
        }))
      })
    }

    function OQ(uu) {
      let {
        tier: Ru,
        seconds: yu,
        noSeeds: Eu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)(), Qu = fK(), mu = SQ(Ru, Eu ? iQ : void 0), Ju = Eu && SQ(Ru).length > mu.length, Nu = VQ(Ru);
      return (0, eQ.jsxs)(sQ, {
        title: Ku("buildAFactory2Game:recipesRecycles", {
          seconds: yu
        }),
        count: mu.length,
        children: [mu.map((uu => {
          let {
            find: Ru,
            chance: yu
          } = uu;
          return (0, eQ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Qu.has(Ru.item) && (0, eQ.jsx)(nQ, {}), (0, eQ.jsx)(MQ, {
              item: Ru.item,
              amount: Ru.amount
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: EQ(Ku, Ru.item)
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Ku("buildAFactory2Game:recipeChance", {
                percent: DQ(yu)
              })
            })]
          }, Ru.item)
        })), Ju && (0, eQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, eQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ku("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Nu && (0, eQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, eQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: Ku("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function vQ(uu) {
      let {
        tier: Ru,
        seconds: yu
      } = uu;
      const {
        t: Eu
      } = (0, DK.E)(), Ku = Object.entries(mQ).filter((uu => {
        let [, {
          item: yu
        }] = uu;
        return ZQ(LQ(yu), Ru, FQ(yu))
      }));
      return (0, eQ.jsx)(sQ, {
        title: Eu("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: yu
        }),
        count: Ku.length,
        children: Ku.map((uu => {
          let [Ru, {
            item: yu,
            amount: Ku
          }] = uu;
          return (0, eQ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, eQ.jsx)(MQ, {
              item: Ru,
              amount: 1
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, eQ.jsx)(MQ, {
              item: yu,
              amount: Ku
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: EQ(Eu, yu)
            })]
          }, Ru)
        }))
      })
    }

    function aQ(uu) {
      let {
        tier: Ru,
        seconds: yu
      } = uu;
      const {
        t: Eu
      } = (0, DK.E)(), Ku = fK(), Qu = hQ(Object.entries(my).filter((uu => {
        let [yu, Eu] = uu;
        return ZQ(zQ(yu, Eu), Ru, FQ(Eu))
      })), (uu => {
        let [Ru, yu] = uu;
        return zQ(Ru, yu)
      }));
      return (0, eQ.jsx)(sQ, {
        title: Eu("buildAFactory2Game:recipesDigs", {
          seconds: yu
        }),
        count: Qu.length,
        children: Qu.map((uu => {
          let [yu, Qu] = uu;
          const mu = zQ(yu, Qu),
            Ju = mu > Ru ? mu : null,
            Nu = Jy[yu],
            Xu = null === Ju && Ku.has(Qu);
          return (0, eQ.jsxs)("li", {
            className: CK()("Baf2Recipe", {
              Locked: null !== Ju,
              Far: AQ(Ju, Ru)
            }),
            children: [Xu && (0, eQ.jsx)(nQ, {}), (0, eQ.jsx)(MQ, {
              item: yu,
              amount: 1
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, eQ.jsx)(MQ, {
              item: Qu,
              amount: 1
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: EQ(Eu, Qu)
            }), void 0 !== Nu && (0, eQ.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Eu("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Nu)
              })
            }), null !== Ju && (0, eQ.jsx)(GQ, {
              tier: Ju
            })]
          }, yu)
        }))
      })
    }

    function fQ(uu) {
      var Ru;
      let {
        def: yu,
        seconds: Eu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)();
      return (0, eQ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, eQ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (Ru = yu.fuels) && void 0 !== Ru ? Ru : []).map((uu => (0, eQ.jsx)(MQ, {
            item: uu,
            amount: 1
          }, uu))), (0, eQ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, eQ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, eQ.jsx)(MK.c, {
              name: "bolt"
            }), Ku("buildAFactory2Game:recipePower", {
              power: vu(yu.powerMade),
              seconds: Eu
            })]
          })]
        })
      })
    }

    function um(uu) {
      let {
        def: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)();
      return (0, eQ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, eQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, eQ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, eQ.jsx)(MK.c, {
              name: "bolt"
            }), yu("buildAFactory2Game:recipeMixer", {
              cryo: WQ((0, au.J)(Ru, Ru.cryoMade), "")
            })]
          })
        })
      })
    }

    function Rm(uu) {
      let {
        def: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)();
      return (0, eQ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, eQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, eQ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, eQ.jsx)(MK.c, {
              name: "bolt"
            }), yu("buildAFactory2Game:recipeCondenser", {
              power: WQ((0, au.J)(Ru, Ru.powerPerOp), ""),
              water: WQ((0, au.J)(Ru, Ru.fluidMade), "")
            })]
          })
        })
      })
    }

    function ym(uu) {
      let {
        kind: Ru,
        def: yu,
        input: Eu,
        tier: Ku,
        noSeeds: Qu = !1
      } = uu;
      const mu = String(yu.opMs / 1e3);
      return yy(yu) ? (0, eQ.jsx)(YQ, {
        seconds: mu
      }) : yu.field ? (0, eQ.jsx)(oQ, {
        fertilised: null !== Eu
      }) : yu.table ? (0, eQ.jsx)(qQ, {
        tier: Ku,
        seconds: mu
      }) : yu.recycles ? (0, eQ.jsxs)(eQ.Fragment, {
        children: [(0, eQ.jsx)(OQ, {
          tier: Ku,
          seconds: mu,
          noSeeds: Qu
        }), (0, eQ.jsx)(vQ, {
          tier: Ku,
          seconds: mu
        })]
      }) : Ry(yu) ? (0, eQ.jsx)(aQ, {
        tier: Ku,
        seconds: mu
      }) : void 0 !== yu.fluidMade ? (0, eQ.jsx)(Rm, {
        def: yu
      }) : void 0 !== yu.cryoMade ? (0, eQ.jsx)(um, {
        def: yu
      }) : void 0 !== yu.powerMade ? (0, eQ.jsx)(fQ, {
        def: yu,
        seconds: mu
      }) : (0, eQ.jsx)(Em, {
        kind: Ru,
        input: Eu,
        tier: Ku,
        seconds: mu
      })
    }

    function Em(uu) {
      let {
        kind: Ru,
        input: yu,
        tier: Eu,
        seconds: Ku
      } = uu;
      const {
        t: Qu
      } = (0, DK.E)(), mu = fK(), Ju = hQ(function(uu) {
        const Ru = new Map;
        for (const Ku of uu) {
          var yu, Eu;
          const uu = [Ku.output, Ku.outputAmount, Ku.inputAmount, null === (yu = Ku.bonus) || void 0 === yu ? void 0 : yu.item, null === (Eu = Ku.bonus) || void 0 === Eu ? void 0 : Eu.chance].join("|"),
            Qu = Ru.get(uu);
          Qu ? Qu.inputs.push(Ku.input) : Ru.set(uu, {
            inputs: [Ku.input],
            inputAmount: Ku.inputAmount,
            output: Ku.output,
            outputAmount: Ku.outputAmount,
            bonus: Ku.bonus
          })
        }
        return [...Ru.values()]
      }(wQ(Ru, Eu).filter(Vy)), (uu => LQ(uu.output))).filter((uu => ZQ(LQ(uu.output), Eu, FQ(uu.output))));
      return (0, eQ.jsx)(sQ, {
        title: Qu("buildAFactory2Game:recipesEach", {
          seconds: Ku
        }),
        count: Ju.length,
        children: Ju.map((uu => {
          const Ru = null !== yu && uu.inputs.includes(yu),
            Ku = uu.inputs.length > 3 ? [Ru ? yu : uu.inputs[0]] : uu.inputs,
            Ju = LQ(uu.output) > Eu ? LQ(uu.output) : null,
            Nu = null === Ju && mu.has(uu.output);
          return (0, eQ.jsxs)("li", {
            className: CK()("Baf2Recipe", {
              InUse: Ru,
              Locked: null !== Ju,
              Far: AQ(Ju, Eu)
            }),
            children: [Nu && (0, eQ.jsx)(nQ, {}), Ku.map(((Ru, yu) => (0, eQ.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [yu > 0 && (0, eQ.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, eQ.jsx)(MQ, {
                item: Ru,
                amount: uu.inputAmount
              })]
            }, Ru))), Ku.length < uu.inputs.length && (0, eQ.jsx)(IQ, {
              label: Qu("buildAFactory2Game:recipeMore", {
                count: String(uu.inputs.length - Ku.length)
              }),
              names: uu.inputs.filter((uu => !Ku.includes(uu))).map((uu => EQ(Qu, uu)))
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, eQ.jsx)(MQ, {
              item: uu.output,
              amount: uu.outputAmount
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: EQ(Qu, uu.output)
            }), uu.bonus && (0, eQ.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Qu("buildAFactory2Game:recipeBonus", {
                percent: DQ(uu.bonus.chance)
              }), (0, eQ.jsx)(MQ, {
                item: uu.bonus.item,
                amount: 1
              })]
            }), null !== Ju && (0, eQ.jsx)(GQ, {
              tier: Ju
            })]
          }, `${uu.output}|${uu.inputs[0]}`)
        }))
      })
    }

    function Km(uu) {
      let {
        taught: Ru,
        tier: yu
      } = uu;
      const {
        t: Eu
      } = (0, DK.E)(), Ku = fK(), Qu = hQ(Object.values(qR), (uu => uu.tier)).filter((uu => ZQ(uu.tier, yu)));
      return (0, eQ.jsx)(sQ, {
        title: Eu("buildAFactory2Game:benchCanMake"),
        count: Qu.length,
        startOpen: !1,
        children: Qu.map((uu => {
          const Qu = uu.tier > yu,
            mu = !Qu && Ku.has(uu.output);
          return (0, eQ.jsxs)("li", {
            className: CK()("Baf2Recipe", {
              InUse: uu.output === Ru,
              Locked: Qu,
              Far: AQ(Qu ? uu.tier : null, yu)
            }),
            children: [mu && (0, eQ.jsx)(nQ, {}), (0, eQ.jsx)(MQ, {
              item: uu.output,
              amount: uu.outputAmount
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: EQ(Eu, uu.output)
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), uu.inputs.map((uu => (0, eQ.jsx)(MQ, {
              item: uu.item,
              amount: uu.amount
            }, uu.item))), Qu && (0, eQ.jsx)(GQ, {
              tier: uu.tier
            })]
          }, uu.output)
        }))
      })
    }
    var Qm, mm, Jm, Nm, Xm;
    const Vm = tR.Generator,
      rm = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Bm = 1e3 * (null !== (Qm = Vm.powerMade) && void 0 !== Qm ? Qm : 0) / Vm.opMs,
      xm = Math.min(...(null !== (mm = Vm.fuels) && void 0 !== mm ? mm : []).map((uu => Qy[uu]))) / 1e3,
      Sm = tR["Volt Engine"],
      pm = 1e3 * (null !== (Jm = Sm.powerMade) && void 0 !== Jm ? Jm : 0) / Sm.opMs,
      Tm = Qy[null !== (Nm = null === (Xm = Sm.fuels) || void 0 === Xm ? void 0 : Xm[0]) && void 0 !== Nm ? Nm : ""] / 1e3;

    function Wm(uu) {
      let {
        item: Ru,
        label: yu,
        value: Eu,
        note: Ku,
        dim: Qu
      } = uu;
      return (0, eQ.jsxs)("li", {
        className: CK()("Baf2PowerRow", {
          Dim: Qu
        }),
        children: [(0, eQ.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, eQ.jsx)(IK.c, {
            itemName: Ru,
            amount: 0
          })
        }), (0, eQ.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, eQ.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: yu
          }), Ku && (0, eQ.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Ku
          })]
        }), (0, eQ.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Eu
        })]
      })
    }

    function jm(uu, Ru, yu, Eu) {
      var Ku;
      const Qu = void 0 === Eu ? tR[uu] : function(uu, Ru) {
          if (null === Ru) return uu;
          let yu = Yu.get(Ru);
          return yu || (yu = {
            ...uu,
            powerPerOp: iu(uu, Ru),
            farmMob: Ru
          }, Yu.set(Ru, yu)), yu
        }(tR[uu], Eu),
        mu = Ru && Qu.couplable ? ZR(Qu, yu) : Qu;
      return 1e3 * (null !== (Ku = mu.powerPerOp) && void 0 !== Ku ? Ku : 0) / mu.opMs
    }

    function Hm(uu) {
      var Ru, yu, Eu, Ku, Qu, mu, Ju, Nu;
      let {
        message: Xu
      } = uu;
      const {
        t: Vu
      } = (0, DK.E)(), ru = (uu, Ru) => Vu("buildAFactory2Game:powerPerSecond", {
        rate: WQ(uu, Ru)
      }), [Bu, xu] = Xu.baf2PowerGenerators, Su = Xu.baf2PowerGeneratorFuel, pu = Xu.baf2PowerSunPanels, Tu = null !== (Ru = Xu.baf2PowerSunShare) && void 0 !== Ru ? Ru : 1, Wu = Xu.baf2PowerVaults, ju = Xu.baf2PowerUsers, [Hu, du] = null !== (yu = Xu.baf2PowerEngines) && void 0 !== yu ? yu : [0, 0], bu = null !== (Eu = Xu.baf2PowerEngineCells) && void 0 !== Eu ? Eu : 0, Cu = null !== (Ku = Xu.baf2PowerPads) && void 0 !== Ku ? Ku : 0, ku = null !== (Qu = Xu.baf2PowerCharge) && void 0 !== Qu ? Qu : 0, [eu, Au] = null !== (mu = Xu.baf2PowerReactors) && void 0 !== mu ? mu : [0, 0], [Du, Mu] = null !== (Ju = Xu.baf2PowerBatteries) && void 0 !== Ju ? Ju : [0, 0];
      let Iu = Vu("buildAFactory2Game:powerEngineCells", {
        amount: String(bu)
      });
      bu > 0 && du > 0 && (Iu = Vu("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(bu),
        time: dQ(Vu, bu * Tm / du)
      }));
      let Gu = Vu("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(Su)
      });
      Su > 0 && xu > 0 && (Gu = Vu("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(Su),
        time: dQ(Vu, Su * xm / xu)
      }));
      const Uu = Bu + Hu + pu + eu;
      return (0, eQ.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, eQ.jsxs)("section", {
          children: [(0, eQ.jsxs)("h3", {
            children: [Vu("buildAFactory2Game:powerMaking"), (0, eQ.jsx)("span", {
              children: ru(Xu.baf2PowerMadePerS, "+")
            })]
          }), (0, eQ.jsxs)("ul", {
            children: [0 === Uu && (0, eQ.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Vu("buildAFactory2Game:powerNoMakers")
            }), Bu > 0 && (0, eQ.jsx)(Wm, {
              item: "Generator",
              label: `${EQ(Vu,"Generator")} \xd7${Bu}`,
              note: `${Vu("buildAFactory2Game:powerRunning",{amount:String(xu)})} \xb7 ${Gu}`,
              value: ru(xu * Bm, "+"),
              dim: 0 === xu
            }), Hu > 0 && (0, eQ.jsx)(Wm, {
              item: "Volt Engine",
              label: `${EQ(Vu,"Volt Engine")} \xd7${Hu}`,
              note: `${Vu("buildAFactory2Game:powerRunning",{amount:String(du)})} \xb7 ${Iu}`,
              value: ru(du * pm, "+"),
              dim: 0 === du
            }), pu > 0 && (0, eQ.jsx)(Wm, {
              item: "Solar Panel",
              label: `${EQ(Vu,"Solar Panel")} \xd7${pu}`,
              note: Vu(Tu < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: ru(4 * pu * Tu, "+")
            }), eu > 0 && (0, eQ.jsx)(Wm, {
              item: "Reactor Frame",
              label: `${Vu("buildAFactory2Game:powerReactors")} \xd7${eu}`,
              note: Vu("buildAFactory2Game:powerRunning", {
                amount: String(Au)
              }),
              value: ru(null !== (Nu = Xu.baf2PowerReactorPerS) && void 0 !== Nu ? Nu : 0, "+"),
              dim: 0 === Au
            })]
          })]
        }), (0, eQ.jsxs)("section", {
          children: [(0, eQ.jsxs)("h3", {
            children: [Vu("buildAFactory2Game:powerStorage"), (0, eQ.jsx)("span", {
              children: vu(Xu.baf2PowerCap)
            })]
          }), (Wu > 0 || Du > 0) && (0, eQ.jsxs)("ul", {
            children: [Wu > 0 && (0, eQ.jsx)(Wm, {
              item: "Charge Vault",
              label: `${EQ(Vu,"Charge Vault")} \xd7${Wu}`,
              value: `+${vu(8e3*Wu)}`
            }), Du > 0 && (0, eQ.jsx)(Wm, {
              item: "Battery Cell",
              label: `${Vu("buildAFactory2Game:powerBatteries")} \xd7${Du}`,
              value: `+${vu(Mu)}`
            })]
          })]
        }), (0, eQ.jsxs)("section", {
          children: [(0, eQ.jsxs)("h3", {
            children: [Vu("buildAFactory2Game:powerUsing"), (0, eQ.jsx)("span", {
              children: ru(Xu.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, eQ.jsxs)("ul", {
            children: [0 === ju.length && 0 === Cu && 0 === ku && (0, eQ.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Vu("buildAFactory2Game:powerNoUsers")
            }), ju.map((uu => {
              let [Ru, yu, Eu, Ku, Qu = 1, mu] = uu, Ju = yu ? Vu(rm[Qu - 1], {
                name: EQ(Vu, Ru)
              }) : EQ(Vu, Ru);
              return void 0 !== mu && (Ju = Vu("buildAFactory2Game:powerFarmName", {
                name: Ju,
                mob: Vu(Zu(mu))
              })), (0, eQ.jsx)(Wm, {
                item: Ru,
                label: `${Ju} \xd7${Eu}`,
                note: Vu("buildAFactory2Game:powerRunning", {
                  amount: String(Ku)
                }),
                value: Ku > 0 ? ru(Ku * jm(Ru, yu, Qu, mu), "\u2212") : Vu("buildAFactory2Game:powerIdle"),
                dim: 0 === Ku
              }, `${Ru}|${yu}|${Qu}|${mu}`)
            })), Cu > 0 && (0, eQ.jsx)(Wm, {
              item: "Charging Pad",
              label: `${EQ(Vu,"Charging Pad")} \xd7${Cu}`,
              value: Vu("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), ku > 0 && (0, eQ.jsx)(Wm, {
              item: "Homestead Core",
              label: Vu("buildAFactory2Game:powerCharge"),
              value: ru(ku, "\u2212")
            }), Xu.baf2PowerStarved > 0 && (0, eQ.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, eQ.jsx)(MK.c, {
                name: "triangle-exclamation"
              }), Vu("buildAFactory2Game:powerStarved", {
                amount: String(Xu.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var dm = yu(4301),
      bm = yu(1408);
    class Cm {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(uu) {
        this.message = uu;
        for (const Ru of this.listeners) Ru()
      }
      get() {
        return this.message
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
    }
    class km extends Cm {}

    function em(uu, Ru) {
      const yu = () => {
          const yu = uu.get();
          if (!yu || !Ru) return yu;
          const [Eu, Ku, Qu] = yu.baf2PowerAt;
          return Eu === Ru[0] && Ku === Ru[1] && Qu === Ru[2] ? yu : null
        },
        [Ku, Qu] = (0, Eu.useState)(yu);
      return (0, Eu.useEffect)((() => (Qu(yu()), uu.subscribe((() => {
        Qu(yu())
      })))), [uu, ...null !== Ru && void 0 !== Ru ? Ru : []]), Ku
    }

    function Am(uu) {
      return {
        stored: uu.baf2PowerStored,
        cap: uu.baf2PowerCap,
        madePerS: uu.baf2PowerMadePerS,
        usedPerS: uu.baf2PowerUsedPerS
      }
    }

    function Dm(uu) {
      let {
        stored: Ru,
        cap: yu
      } = uu;
      return (0, eQ.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, eQ.jsx)("div", {
          style: {
            width: `${Math.min(100,100*Ru/Math.max(1,yu))}%`
          }
        })
      })
    }

    function Mm(uu) {
      let {
        figures: Ru,
        labelled: yu = !1
      } = uu;
      const {
        t: Eu
      } = (0, DK.E)(), Ku = Ru.madePerS - Ru.usedPerS, {
        text: Qu,
        draining: mu
      } = function(uu, Ru) {
        let {
          stored: yu,
          cap: Eu,
          madePerS: Ku,
          usedPerS: Qu
        } = Ru;
        const mu = Ku - Qu;
        return yu >= Eu ? {
          text: uu("buildAFactory2Game:powerFull"),
          draining: !1
        } : mu > .05 ? {
          text: uu("buildAFactory2Game:powerFullIn", {
            time: dQ(uu, (Eu - yu) / mu)
          }),
          draining: !1
        } : mu < -.05 ? {
          text: uu("buildAFactory2Game:powerEmptyIn", {
            time: dQ(uu, yu / -mu)
          }),
          draining: !0
        } : {
          text: uu("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Eu, Ru);
      return (0, eQ.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, eQ.jsx)(Dm, {
          stored: Ru.stored,
          cap: Ru.cap
        }), (0, eQ.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, eQ.jsx)("span", {
            children: Eu(yu ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: vu(Ru.stored),
              cap: vu(Ru.cap)
            })
          }), (0, eQ.jsxs)("span", {
            className: CK()("Baf2PowerNet", {
              Draining: mu
            }),
            children: [Eu("buildAFactory2Game:powerPerSecond", {
              rate: WQ(Math.abs(Ku), Ku < 0 ? "\u2212" : "+")
            }), " \xb7 ", Qu]
          })]
        })]
      })
    }

    function Im(uu) {
      let {
        stored: Ru,
        cap: yu,
        rates: Eu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)();
      return Eu ? (0, eQ.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, eQ.jsx)(Mm, {
          figures: {
            stored: Ru,
            cap: yu,
            madePerS: Eu[0],
            usedPerS: Eu[1]
          },
          labelled: !0
        })
      }) : (0, eQ.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, eQ.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, eQ.jsx)(Dm, {
            stored: Ru,
            cap: yu
          }), (0, eQ.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, eQ.jsx)("span", {
              children: Ku("buildAFactory2Game:powerStoredLabelled", {
                stored: vu(Ru),
                cap: vu(yu)
              })
            })
          })]
        })
      })
    }

    function Gm(uu) {
      let {
        store: Ru,
        close: yu
      } = uu;
      const {
        t: Eu
      } = (0, DK.E)(), Ku = em(Ru);
      return (0, eQ.jsx)(dm.e, {
        close: yu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, eQ.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsxs)("div", {
              children: [(0, eQ.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Eu("buildAFactory2Game:powerTitle")
              }), (0, eQ.jsx)("p", {
                children: Eu("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, eQ.jsx)(bm.h, {
              onClick: yu
            })]
          }), Ku && (0, eQ.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, eQ.jsx)(Mm, {
              figures: Am(Ku)
            }), (0, eQ.jsx)(Hm, {
              message: Ku
            })]
          })]
        })
      })
    }

    function Um(uu) {
      var Ru;
      let {
        kind: yu,
        def: Ku,
        zQ: Qu,
        power: mu,
        stored: Ju,
        cap: Nu
      } = uu;
      const {
        t: Xu
      } = (0, DK.E)(), Vu = em(mu, Qu), [ru, Bu] = (0, Eu.useState)(!1);
      return (0, eQ.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, eQ.jsx)(ym, {
          kind: yu,
          def: Ku,
          input: null,
          tier: null !== (Ru = null === Vu || void 0 === Vu ? void 0 : Vu.baf2PowerTier) && void 0 !== Ru ? Ru : 1
        }), (0, eQ.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Xu("buildAFactory2Game:powerTitle")
        }), Vu && (0, eQ.jsx)(Mm, {
          figures: Am(Vu)
        }), !Vu && (0, eQ.jsx)(Im, {
          stored: Ju,
          cap: Nu,
          rates: null
        }), Vu && (0, eQ.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Bu(!ru)
          },
          "aria-expanded": ru,
          children: Xu(ru ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Vu && ru && (0, eQ.jsx)(Hm, {
          message: Vu
        })]
      })
    }
    const nm = 2500,
      sm = 17500,
      tm = `${bu} `;
    const lm = ["plan", "throttle"];

    function gm(uu) {
      if (uu.startsWith(`${DR} `)) return uu.slice(0, uu.lastIndexOf(" "));
      const Ru = uu.split(" ");
      return Ru[0] === VR && lm.includes(Ru[4]) ? Ru.slice(0, 5).join(" ") : null
    }
    class cm {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = uu, this.now = Ru, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.FKu = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = Ru()
      }
      enqueue(uu) {
        this.queue(uu, this.nextTicket());
        const Ru = this.FKu + this.pending.length;
        return this.flush(), Ru
      }
      track(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const yu = this.nextTicket();
        if (!Ru.urgent) return this.queue(uu, yu), this.flush(), yu;
        const {
          supersedes: Eu
        } = Ru;
        for (let Qu = this.pending.length - 1; Qu >= this.urgent; Qu--) {
          const Ru = this.pending[Qu];
          (Ru.command === uu || null !== Eu && void 0 !== Eu && Eu(Ru.command)) && (this.pending.splice(Qu, 1), this.markLeft(Ru.tickets))
        }
        const Ku = this.pending.findIndex((Ru => {
          let {
            command: yu
          } = Ru;
          return yu === uu
        }));
        return -1 !== Ku ? this.pending[Ku].tickets.push(yu) : (this.pending.splice(this.urgent, 0, {
          command: uu,
          tickets: [yu]
        }), this.urgent += 1), this.flush(), yu
      }
      leftAt(uu) {
        const Ru = this.leftTimes.get(uu);
        return void 0 !== Ru ? Ru : this.pending.some((Ru => {
          let {
            tickets: yu
          } = Ru;
          return yu.includes(uu)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let uu = !0;
        return () => {
          uu && (uu = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(uu) {
        var Ru;
        return (null === (Ru = this.pending.at(-1)) || void 0 === Ru ? void 0 : Ru.command) === uu
      }
      sent() {
        return this.FKu
      }
      clear() {
        for (const {
            tickets: uu
          }
          of this.pending) this.markLeft(uu);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(uu) {
        const Ru = this.now();
        for (const yu of uu) this.leftTimes.set(yu, Ru);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(uu, Ru) {
        const yu = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === yu || void 0 === yu ? void 0 : yu.command) === uu) return void(! function(uu) {
          return uu === Cu || uu.startsWith(`${du} `) || uu.startsWith(`${zu} `)
        }(uu) ? yu.tickets.push(Ru) : (this.pending.pop(), this.markLeft([...yu.tickets, Ru])));
        const Eu = void 0 === yu ? null : XR(yu.command, uu);
        if (null !== Eu && void 0 !== yu) return yu.command = Eu, void yu.tickets.push(Ru);
        const Ku = gm(uu);
        if (null !== Ku && void 0 !== yu && gm(yu.command) === Ku) return yu.command = uu, void yu.tickets.push(Ru);
        if (null !== yu && void 0 !== yu && yu.command.startsWith(tm) && uu.startsWith(tm)) {
          const Eu = uu.slice(tm.length);
          if (yu.command.slice(tm.length).split(",").includes(Eu)) return void yu.tickets.push(Ru);
          const Ku = `${yu.command},${Eu}`;
          if (Ku.length <= 119) return yu.command = Ku, void yu.tickets.push(Ru)
        }
        this.pending.push({
          command: uu,
          tickets: [Ru]
        })
      }
      flush() {
        const uu = this.now();
        for (this.tokens = Math.min(5, this.tokens + (uu - this.refilledAt) / nm), this.refilledAt = uu; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.FKu += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: uu,
            tickets: Ru
          } = this.pending.shift();
          this.markLeft(Ru), this.send(uu)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * nm)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Lm {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new cm(uu, Ru)
      }
      send(uu) {
        return this.queue.enqueue(uu)
      }
      sent() {
        return this.queue.sent()
      }
      track(uu, Ru) {
        return this.queue.track(uu, Ru)
      }
      leftAt(uu) {
        return this.queue.leftAt(uu)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(uu) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = Ru, this.send(uu), this.islandEdits.count
      }
      syncIslandEdits(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: yu
        } = this, Eu = Ru - yu.lastAtMs < sm;
        yu.count = Eu ? Math.max(yu.count, uu) : uu
      }
      clear() {
        this.queue.clear()
      }
    }
    const zm = (0, Eu.createContext)(null);

    function Fm() {
      const uu = (0, Eu.useContext)(zm);
      if (!uu) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return uu
    }

    function wm(uu, Ru) {
      return null !== Ru && void 0 !== Ru ? Ru : 1 === uu
    }

    function Zm(uu, Ru) {
      return uu.every((uu => {
        var yu;
        let [Eu, , Ku] = uu;
        return !wm(Ku, null === (yu = Ru.get(Eu)) || void 0 === yu ? void 0 : yu.kx)
      }))
    }

    function hm(uu, Ru, yu) {
      if (0 === uu.size) return uu;
      const Eu = new Map(uu);
      for (const [Ku, Qu] of uu) {
        const uu = Ru.find((uu => {
          let [Ru] = uu;
          return Ru === Ku
        }));
        (!uu || Qu.kx === (1 === uu[2]) || Qu.atMs < yu) && Eu.delete(Ku)
      }
      return Eu
    }

    function Pm(uu) {
      var Ru;
      let {
        zQ: yu,
        input: Ku,
        drops: Qu,
        seconds: mu
      } = uu;
      const {
        t: Ju
      } = (0, DK.E)(), Nu = Fm(), [Xu, Vu] = (0, Eu.useState)(new Map);
      (0, Eu.useEffect)((() => {
        Qu && Vu((uu => hm(uu, Qu, Date.now() - sm)))
      }), [Qu]), (0, Eu.useEffect)((() => {
        const uu = function(uu, Ru) {
          let yu = null;
          for (const {
              atMs: Eu
            }
            of uu.values()) yu = null === yu ? Eu : Math.min(yu, Eu);
          return null === yu ? null : yu + Ru
        }(Xu, sm);
        if (null === uu || !Qu) return;
        const Ru = setTimeout((() => {
          Vu((uu => hm(uu, Qu, Date.now() - sm)))
        }), Math.max(0, uu - Date.now()) + 1);
        return () => {
          clearTimeout(Ru)
        }
      }), [Xu, Qu]);
      const ru = hu(Ku),
        Bu = null !== ru && null !== Qu && Zm(Qu, Xu),
        xu = function(uu, Ru, yu) {
          return null === uu || null === Ru || Zm(Ru, yu) ? 0 : Lu[gu[uu]]
        }(ru, Qu, Xu);
      return (0, eQ.jsxs)(sQ, {
        title: Ju("buildAFactory2Game:farmDropsTitle", {
          seconds: mu
        }),
        count: null !== (Ru = null === Qu || void 0 === Qu ? void 0 : Qu.length) && void 0 !== Ru ? Ru : 0,
        children: [xu > 0 && (0, eQ.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: Ju("buildAFactory2Game:farmDropsPower", {
            power: String(xu)
          })
        }), (null === ru || !Qu) && (0, eQ.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: Ju("buildAFactory2Game:farmDropsEmpty")
        }), Bu && (0, eQ.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: Ju("buildAFactory2Game:farmDropsAllVoided")
        }), null !== ru && (null === Qu || void 0 === Qu ? void 0 : Qu.map((uu => {
          var Ru;
          let [Eu, Ku, Qu] = uu;
          const mu = Ku < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            ru = wm(Qu, null === (Ru = Xu.get(Eu)) || void 0 === Ru ? void 0 : Ru.kx);
          return (0, eQ.jsxs)("li", {
            className: CK()("Baf2Recipe Baf2FarmDrop", {
              Voided: !ru
            }),
            children: [(0, eQ.jsx)(MQ, {
              item: Eu,
              amount: 1
            }), (0, eQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: EQ(Ju, Eu)
            }), (0, eQ.jsx)("span", {
              className: "Baf2FarmRate",
              children: Ju(mu, {
                amount: String(Ku)
              })
            }), (0, eQ.jsx)("button", {
              type: "button",
              className: CK()("Baf2FarmToggle SmallTextBold", {
                Kept: ru
              }),
              "aria-pressed": ru,
              onClick: () => {
                Vu(new Map(Xu).set(Eu, {
                  kx: !ru,
                  atMs: Date.now()
                })), Nu.send(function(uu, Ru, yu, Eu) {
                  return `${zu} ${uu} ${Ru} ${yu} ${Eu}`
                }(yu[0], yu[1], yu[2], Eu))
              },
              children: Ju(ru ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Eu)
        })))]
      })
    }
    var im;
    const Ym = String(null !== (im = tR.Synthesizer.waterPerOp) && void 0 !== im ? im : 0);

    function om(uu) {
      let {
        zQ: Ru,
        taught: yu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)(), Qu = Fm(), [mu, Ju] = (0, Eu.useState)(null);
      (0, Eu.useEffect)((() => {
        null !== mu && yu === mu && Ju(null)
      }), [mu, yu]);
      const Nu = null !== mu && void 0 !== mu ? mu : yu;
      let Xu = Ku("buildAFactory2Game:synthPick");
      return null !== Nu && (Xu = Ku("buildAFactory2Game:synthGrows", {
        name: EQ(Ku, Nu),
        input: EQ(Ku, kR),
        water: Ym
      })), (0, eQ.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, eQ.jsx)("div", {
          className: CK()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Nu
          }),
          children: Xu
        }), (0, eQ.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: eR.map(((uu, yu) => {
            const Eu = EQ(Ku, uu),
              mu = uu === Nu;
            return (0, eQ.jsx)("li", {
              children: (0, eQ.jsx)("button", {
                type: "button",
                className: CK()("Baf2SynthTile", {
                  Selected: mu
                }),
                title: Eu,
                "aria-label": Eu,
                "aria-pressed": mu,
                onClick: () => {
                  mu || (Ju(uu), Qu.send(`${DR} ${Ru[0]} ${Ru[1]} ${Ru[2]} ${yu}`))
                },
                children: (0, eQ.jsx)(IK.c, {
                  itemName: uu,
                  amount: 0
                })
              })
            }, uu)
          }))
        })]
      })
    }
    const qm = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function Om(uu) {
      let {
        kind: Ru,
        tier: yu,
        coupled: Eu,
        level: Ku,
        slot: Qu
      } = uu;
      const {
        t: mu
      } = (0, DK.E)(), Nu = Ou(gR);
      if (!Eu && null !== yu && yu < Nu) return (0, eQ.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, eQ.jsx)(MK.c, {
            name: "lock"
          })
        }), (0, eQ.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: mu("buildAFactory2Game:upgradeLocked")
        }), (0, eQ.jsx)("span", {
          className: "Baf2TierTag",
          children: mu("buildAFactory2Game:tierTag", {
            tier: String(Nu)
          })
        })]
      });
      const Xu = function(uu, Ru) {
          if (Ju() && "Crusher" !== uu && null !== Ru) {
            if (am(LR, Ru)) return {
              item: LR,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (am(cR, Ru)) return {
              item: cR,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: gR,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(Ru, yu),
        Vu = mu(Eu ? qm[Ku - 1] : Xu.emptyKey),
        ru = null !== yu ? function(uu, Ru, yu, Eu) {
          if (!Ju() || !yu || "Crusher" === uu || Ru < 10) return null;
          const Ku = Ou(LR);
          if (Eu < 3 && Ku > 1 && (2 === Eu || Ru >= Ku)) return {
            tier: Ku,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Qu = Ou(cR);
          if (1 === Eu && Qu > 1) return {
            tier: Qu,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(Ru, yu, Eu, Ku) : null;
      return (0, eQ.jsxs)("div", {
        className: CK()("Baf2UpgradeSocket", {
          Fitted: Eu
        }),
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Eu && Qu, !Eu && (0, eQ.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, eQ.jsx)(IK.c, {
              itemName: Xu.item,
              amount: 0
            })
          })]
        }), (0, eQ.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, eQ.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: mu("buildAFactory2Game:upgradeTitle")
          }), (0, eQ.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Vu
          }), Eu && Ku >= 2 && "Crusher" === Ru && (0, eQ.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: mu("buildAFactory2Game:couplerCrusherHint")
          }), ru && null !== yu && yu < ru.tier && (0, eQ.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, eQ.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, eQ.jsx)(MK.c, {
                name: "lock"
              })
            }), mu(ru.lockedKey), (0, eQ.jsx)("span", {
              className: "Baf2TierTag",
              children: mu("buildAFactory2Game:tierTag", {
                tier: String(ru.tier)
              })
            })]
          }), ru && null !== yu && yu >= ru.tier && (0, eQ.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: mu(ru.nextKey)
          })]
        })]
      })
    }

    function am(uu, Ru) {
      const yu = Ou(uu);
      return yu > 1 && Ru >= yu
    }
    var fm = yu(36788);
    const uJ = (0, au.J)(tR.Condenser, tR.Condenser.fluidMade),
      RJ = .05;
    class yJ extends Cm {}

    function EJ(uu) {
      return WQ(uu, "")
    }

    function KJ(uu, Ru, yu) {
      return uu(Ru ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: yu
      })
    }

    function QJ(uu, Ru, yu, Eu) {
      return yu <= RJ && Eu <= RJ ? null : Eu <= RJ || yu <= RJ ? KJ(uu, Ru, Eu <= RJ ? WQ(yu, "+") : WQ(Eu, "\u2212")) : uu(Ru ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: EJ(yu),
        used: EJ(Eu)
      })
    }

    function mJ(uu, Ru) {
      return Math.min(100, 100 * uu / Math.max(1, Ru))
    }

    function JJ(uu) {
      let {
        stored: Ru,
        cap: yu,
        netPerS: Eu,
        rates: Ku,
        cryo: Qu
      } = uu;
      const {
        t: mu
      } = (0, DK.E)(), Ju = function(uu, Ru, yu, Eu) {
        return yu <= 0 ? uu("buildAFactory2Game:waterNoStorage") : Ru >= yu ? uu("buildAFactory2Game:powerFull") : Eu > RJ ? uu("buildAFactory2Game:powerFullIn", {
          time: dQ(uu, (yu - Ru) / Eu)
        }) : Eu < -.05 ? Ru <= 0 ? uu("buildAFactory2Game:waterEmpty") : uu("buildAFactory2Game:powerEmptyIn", {
          time: dQ(uu, Ru / -Eu)
        }) : uu("buildAFactory2Game:powerSteady")
      }(mu, Ru, yu, Eu), Nu = yu > 0 && Ru < yu && Math.abs(Eu) <= RJ, Xu = mu(Qu ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Vu = null !== Ku ? `${Ku} \xb7 ${Ju}` : Nu ? Xu : `${Xu} \xb7 ${Ju}`;
      return (0, eQ.jsxs)(eQ.Fragment, {
        children: [(0, eQ.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, eQ.jsx)("div", {
            style: {
              width: `${mJ(Ru,yu)}%`
            }
          })
        }), (0, eQ.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, eQ.jsx)("span", {
            children: yu > 0 && mu("buildAFactory2Game:powerStored", {
              stored: (0, au.Q)(Ru),
              cap: (0, au.Q)(yu)
            })
          }), (0, eQ.jsx)("span", {
            className: CK()("Baf2WaterNet", {
              Draining: Eu < -.05
            }),
            children: Vu
          })]
        })]
      })
    }

    function NJ(uu) {
      let {
        water: Ru,
        at: yu,
        side: Eu = null
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)(), Qu = Fm(), [mu, Ju, Nu] = Ru;
      return (0, eQ.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, eQ.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Ku(null === Eu ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Eu}`)
          }), (0, eQ.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Qu.send(`${au.F} ${yu[0]} ${yu[1]} ${yu[2]}${"cryoOut"===Eu?" cryo":""}`)
            },
            children: Ku("buildAFactory2Game:waterDetails")
          })]
        }), (0, eQ.jsx)(JJ, {
          stored: mu,
          cap: Ju,
          netPerS: Nu,
          rates: KJ(Ku, "cryoOut" === Eu, WQ(Math.abs(Nu), Nu < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Eu
        })]
      })
    }

    function XJ(uu, Ru) {
      var yu, Eu, Ku;
      const Qu = !0 === Ru.baf2WaterCryo,
        mu = null !== (yu = null === (Eu = Ru.baf2WaterMakers.find((uu => uu[0] === (Qu ? au.d : "Condenser")))) || void 0 === Eu ? void 0 : Eu[1]) && void 0 !== yu ? yu : 0,
        Ju = [],
        Nu = (Ru, yu, Eu) => {
          Ru > 0 && Ju.push(uu(1 === Ru ? yu : Eu, {
            count: String(Ru)
          }))
        };
      return Qu ? Nu(mu, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Nu(mu, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Nu(null !== (Ku = Ru.baf2WaterPipes) && void 0 !== Ku ? Ku : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Nu(Ru.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), Ju.join(" \xb7 ")
    }

    function VJ(uu, Ru) {
      if (!0 === Ru.baf2WaterCryo) return function(uu, Ru) {
        const yu = tR[au.d];
        switch (Ru.baf2WaterThis) {
          case "pipe":
            return {
              text: uu("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var Eu;
            const [Ku, Qu] = null !== (Eu = Ru.baf2WaterThisRates) && void 0 !== Eu ? Eu : [(0, au.J)(yu, yu.cryoMade), (0, au.J)(yu, yu.powerPerOp)];
            return !0 === Ru.baf2WaterDriven ? {
              text: uu("buildAFactory2Game:cryoThisMixerDriven", {
                rate: EJ(Ku)
              }),
              bad: !1
            } : {
              text: uu("buildAFactory2Game:cryoThisMixer", {
                rate: EJ(Ku),
                power: EJ(Qu)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: uu("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(uu, Ru);
      const yu = !0 === Ru.baf2WaterDriven,
        Eu = tR.Condenser;
      switch (Ru.baf2WaterThis) {
        case "pipe":
          return {
            text: uu("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: uu("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: uu("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: uu("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: uu("buildAFactory2Game:waterThisTank", {
              tank: (0, au.Q)(au.u),
              cap: (0, au.Q)(Ru.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Ku;
          const [Qu, mu] = null !== (Ku = Ru.baf2WaterThisRates) && void 0 !== Ku ? Ku : [uJ, (0, au.J)(Eu, Eu.powerPerOp)];
          return yu ? {
            text: uu("buildAFactory2Game:waterThisCondenserDriven", {
              rate: EJ(Qu)
            }),
            bad: !1
          } : {
            text: uu("buildAFactory2Game:waterThisCondenser", {
              rate: EJ(Qu),
              power: EJ(mu)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: uu("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function rJ(uu, Ru) {
      const yu = Ru.baf2WaterMakers.some((uu => !0 === uu[5]));
      if (!0 === Ru.baf2WaterCryo) {
        const Eu = Ru.baf2WaterUsedPerS - Ru.baf2WaterMadePerS,
          Ku = yu || Eu <= RJ ? 0 : (0, au.I)(Eu);
        return 0 === Ku ? null : Ku > 1 ? uu("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Ku)
        }) : uu("buildAFactory2Game:cryoNextOne")
      }
      const Eu = yu ? null : function(uu, Ru) {
        const yu = Ru - uu;
        return yu <= RJ ? null : Math.ceil(yu / uJ)
      }(Ru.baf2WaterMadePerS, Ru.baf2WaterUsedPerS);
      return null === Eu ? null : Eu > 1 ? uu("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Eu)
      }) : uu("buildAFactory2Game:waterNextOne")
    }

    function BJ(uu) {
      let {
        item: Ru,
        label: yu,
        note: Eu,
        value: Ku,
        dim: Qu,
        bad: mu
      } = uu;
      return (0, eQ.jsxs)("li", {
        className: CK()("Baf2WaterRow", {
          Dim: Qu,
          Bad: mu
        }),
        children: [(0, eQ.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, eQ.jsx)(IK.c, {
            itemName: Ru,
            amount: 0
          })
        }), (0, eQ.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, eQ.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: yu
          }), Eu && (0, eQ.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Eu
          })]
        }), (0, eQ.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Ku
        })]
      })
    }

    function xJ(uu) {
      return fm.n[uu] ? uu : "Reactor Port"
    }

    function SJ(uu) {
      let {
        message: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)(), Eu = !0 === Ru.baf2WaterCryo, Ku = (uu, Ru) => KJ(yu, Eu, WQ(uu, Ru));
      return (0, eQ.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, eQ.jsxs)("section", {
          children: [(0, eQ.jsxs)("h3", {
            children: [yu("buildAFactory2Game:waterMakes"), (0, eQ.jsx)("span", {
              children: Ku(Ru.baf2WaterMadePerS, "+")
            })]
          }), (0, eQ.jsxs)("ul", {
            children: [0 === Ru.baf2WaterMakers.length && (0, eQ.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: yu(Eu ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), Ru.baf2WaterMakers.map((uu => {
              let [Ru, Eu, Qu, mu, Ju, Nu] = uu;
              const Xu = yu("buildAFactory2Game:powerRunning", {
                amount: String(Qu)
              });
              let Vu = Ju > 0 ? yu("buildAFactory2Game:waterMakerPower", {
                running: Xu,
                power: EJ(Ju)
              }) : Xu;
              return Nu && (Vu = yu(0 === Qu && mu <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, eQ.jsx)(BJ, {
                item: Ru,
                label: `${EQ(yu,Ru)} \xd7${Eu}`,
                note: Vu,
                value: Qu > 0 || Nu && mu > 0 ? Ku(mu, "+") : yu("buildAFactory2Game:powerIdle"),
                dim: 0 === Qu && !Nu,
                bad: Nu
              }, Ru)
            }))]
          })]
        }), (0, eQ.jsxs)("section", {
          children: [(0, eQ.jsxs)("h3", {
            children: [yu("buildAFactory2Game:waterUses"), (0, eQ.jsx)("span", {
              children: Ku(Ru.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, eQ.jsxs)("ul", {
            children: [0 === Ru.baf2WaterUsers.length && (0, eQ.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: yu(Eu ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), Ru.baf2WaterUsers.map((uu => {
              let [Ru, Eu, Qu, mu] = uu;
              const Ju = fm.n[Ru] ? EQ(yu, Ru) : Ru;
              return (0, eQ.jsx)(BJ, {
                item: xJ(Ru),
                label: Eu > 1 ? `${Ju} \xd7${Eu}` : Ju,
                note: mu ? yu("buildAFactory2Game:waterPortFirst") : void 0,
                value: Qu > 0 ? Ku(Qu, "\u2212") : yu("buildAFactory2Game:powerIdle"),
                dim: 0 === Qu
              }, Ru)
            }))]
          })]
        })]
      })
    }

    function pJ(uu) {
      var Ru, yu, Ku, Qu, mu;
      let {
        store: Ju,
        close: Nu
      } = uu;
      const {
        t: Xu
      } = (0, DK.E)(), Vu = function(uu) {
        const [Ru, yu] = (0, Eu.useState)((() => uu.get()));
        return (0, Eu.useEffect)((() => (yu(uu.get()), uu.subscribe((() => {
          yu(uu.get())
        })))), [uu]), Ru
      }(Ju), ru = null !== (Ru = null === Vu || void 0 === Vu ? void 0 : Vu.baf2WaterStored) && void 0 !== Ru ? Ru : 0, Bu = null !== (yu = null === Vu || void 0 === Vu ? void 0 : Vu.baf2WaterCap) && void 0 !== yu ? yu : 0, xu = null !== (Ku = null === Vu || void 0 === Vu ? void 0 : Vu.baf2WaterMadePerS) && void 0 !== Ku ? Ku : 0, Su = null !== (Qu = null === Vu || void 0 === Vu ? void 0 : Vu.baf2WaterUsedPerS) && void 0 !== Qu ? Qu : 0, pu = null !== (mu = null === Vu || void 0 === Vu ? void 0 : Vu.baf2WaterNetPerS) && void 0 !== mu ? mu : xu - Su, Tu = Vu && VJ(Xu, Vu), Wu = Vu && rJ(Xu, Vu), ju = !0 === (null === Vu || void 0 === Vu ? void 0 : Vu.baf2WaterCryo);
      return (0, eQ.jsx)(dm.e, {
        close: Nu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, eQ.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Vu && Bu <= 0 ? (0, eQ.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, eQ.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, eQ.jsx)(IK.c, {
                  itemName: ju ? Sy.f : au.k,
                  amount: 0
                })
              }), (0, eQ.jsxs)("div", {
                children: [(0, eQ.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Xu(ju ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Vu && (0, eQ.jsx)("p", {
                  children: XJ(Xu, Vu)
                })]
              })]
            }), (0, eQ.jsx)(bm.h, {
              onClick: Nu
            })]
          }), Vu && Tu && (0, eQ.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, eQ.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, eQ.jsx)(JJ, {
                stored: ru,
                cap: Bu,
                netPerS: pu,
                cryo: ju,
                rates: QJ(Xu, ju, xu, Su)
              })
            }), (0, eQ.jsx)("div", {
              className: CK()("Baf2WaterThis", {
                Bad: Tu.bad
              }),
              children: Tu.text
            }), Vu.baf2WaterDriven && (0, eQ.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, eQ.jsx)(MK.c, {
                name: "bolt"
              }), Xu(ju ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), Wu && (0, eQ.jsx)("p", {
              className: "Baf2WaterNext",
              children: Wu
            }), (0, eQ.jsx)(SJ, {
              message: Vu
            })]
          })]
        })
      })
    }
    class TJ {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(uu, Ru) {
        const yu = this.get(uu);
        yu && null === Ru.opLeftMs && null === Ru.fuelLeftMs && Ru.status === yu.status ? Ru = {
          ...Ru,
          opLeftMs: yu.opLeftMs,
          fuelLeftMs: yu.fuelLeftMs,
          burning: yu.burning
        } : this.updates++, this.pos = uu, this.view = Ru;
        for (const Eu of this.listeners) Eu()
      }
      get(uu) {
        return null !== this.pos && this.pos[0] === uu[0] && this.pos[1] === uu[1] && this.pos[2] === uu[2] ? this.view : null
      }
      forget(uu) {
        null !== this.get(uu) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
    }

    function WJ(uu, Ru, yu, Eu) {
      return "noFuel" === Ru && Eu && !Ky(tR[uu]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === Ru && !0 === (null === yu || void 0 === yu ? void 0 : yu.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === Ru && !0 === (null === yu || void 0 === yu ? void 0 : yu.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === Ru && !0 === (null === yu || void 0 === yu ? void 0 : yu.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === Ru && !0 === (null === yu || void 0 === yu ? void 0 : yu.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : jJ(Ru, yu) ? "buildAFactory2Game:machineStatus_noInputShort" : function(uu, Ru) {
        const yu = tR[uu];
        if ("noFuel" === Ru && void 0 !== yu.fuels) return Ky(yu) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (yu.mobFarm && ("noInput" === Ru || "badInput" === Ru)) return `buildAFactory2Game:machineStatus_${Ru}MobFarm`;
        if ("outputFull" === Ru && (void 0 !== yu.table || yu.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === Ru && YR(yu)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== yu.cryoMade && ("noInput" === Ru || "noOutlet" === Ru || "fluidFull" === Ru)) return `buildAFactory2Game:machineStatus_${Ru}Mixer`;
        return `buildAFactory2Game:machineStatus_${Ru}`
      }(uu, Ru)
    }

    function jJ(uu, Ru) {
      return "noInput" === uu && null !== Ru && void 0 !== Ru && Ru.input && Ru.inputShort ? {
        input: Ru.input,
        short: Ru.inputShort
      } : null
    }

    function HJ(uu) {
      return kK(uu) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== uu.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function dJ(uu) {
      const Ru = (0, tu.xe)(uu);
      return `Baf2Pane Baf2Pane${Ru.charAt(0).toUpperCase()}${Ru.slice(1)}`
    }

    function bJ(uu, Ru) {
      const [yu, Ku] = (0, Eu.useState)((() => uu.get(Ru)));
      return (0, Eu.useEffect)((() => {
        Ku(uu.get(Ru));
        const yu = uu.subscribe((() => {
          Ku(uu.get(Ru))
        }));
        return () => {
          yu(), uu.forget(Ru)
        }
      }), [uu, ...Ru]), yu
    }

    function CJ(uu, Ru, yu, Eu) {
      const Ku = tR[uu],
        Qu = Ru && Ku.couplable ? ZR(Ku, yu) : Ku,
        mu = null !== Eu && Ry(Qu) ? function(uu, Ru) {
          var yu;
          return null !== (yu = null !== Ru && Ry(uu) ? Jy[Ru] : void 0) && void 0 !== yu ? yu : uu.opMs
        }(Qu, Ny(Eu)) : Qu.opMs;
      return mu === Qu.opMs ? Qu : {
        ...Qu,
        opMs: mu
      }
    }

    function kJ(uu) {
      let {
        running: Ru,
        opMs: yu,
        opLeftMs: Eu,
        updateCount: Ku
      } = uu;
      return (0, eQ.jsx)("div", {
        className: CK()("Baf2MachineProgress", {
          Running: Ru
        }),
        children: (0, eQ.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: yu / 1e3 + "s",
            animationDelay: null === Eu ? void 0 : (Eu - yu) / 1e3 + "s"
          }
        }, Ku)
      })
    }

    function eJ(uu) {
      let {
        running: Ru,
        leftMs: yu,
        periodMs: Eu,
        updateCount: Ku
      } = uu;
      const {
        t: Qu
      } = (0, DK.E)(), mu = Math.min(Math.max(null !== yu && void 0 !== yu ? yu : 0, 0), Eu), Ju = Ru && mu > 0, Nu = Qu("buildAFactory2Game:machineBarFuel");
      return (0, eQ.jsx)("div", {
        className: CK()("Baf2FuelBurn", {
          Draining: Ju
        }),
        role: "img",
        title: Nu,
        "aria-label": Nu,
        children: (0, eQ.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: Ju ? {
            animationDuration: Eu / 1e3 + "s",
            animationDelay: (mu - Eu) / 1e3 + "s"
          } : {
            transform: `scaleY(${mu/Eu})`
          }
        }, Ku)
      })
    }

    function AJ(uu, Ru, yu) {
      let [Eu, Ku] = yu;
      const Qu = 1 !== Eu ? AK(Ru) : null;
      return {
        amount: Eu,
        have: Ku,
        item: uu(Qu || yQ(Ru))
      }
    }

    function DJ(uu) {
      return Ry(uu) ? "buildAFactory2Game:machineBarMining" : yy(uu) ? "buildAFactory2Game:machineBarCutting" : void 0 !== uu.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function MJ(uu) {
      var Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu;
      let {
        kind: du,
        zQ: bu,
        store: Cu,
        power: ku,
        renderSlot: eu
      } = uu;
      const {
        t: Au
      } = (0, DK.E)(), Du = bJ(Cu, bu), Mu = tR[du], Iu = null !== (Ru = null === Du || void 0 === Du ? void 0 : Du.coupled) && void 0 !== Ru && Ru, Gu = null !== (yu = null === Du || void 0 === Du ? void 0 : Du.couplerLevel) && void 0 !== yu ? yu : 1, Uu = CJ(du, Iu, Gu, null !== (Eu = null === Du || void 0 === Du || null === (Ku = Du.dug) || void 0 === Ku ? void 0 : Ku.item) && void 0 !== Eu ? Eu : null), nu = null !== (Qu = null === Du || void 0 === Du ? void 0 : Du.status) && void 0 !== Qu ? Qu : null, su = null !== (mu = null === Du || void 0 === Du ? void 0 : Du.power) && void 0 !== mu ? mu : null, tu = null !== (Ju = null === Du || void 0 === Du ? void 0 : Du.opLeftMs) && void 0 !== Ju ? Ju : null, lu = null !== (Nu = null === Du || void 0 === Du ? void 0 : Du.dug) && void 0 !== Nu ? Nu : null, gu = null !== lu && Ry(Mu) ? Jy[null !== (Xu = Ny(lu.item)) && void 0 !== Xu ? Xu : ""] : void 0, cu = void 0 === gu ? null : 6e4 / gu, Lu = null !== (Vu = null === Du || void 0 === Du ? void 0 : Du.powerCap) && void 0 !== Vu ? Vu : 4e3, zu = null !== (ru = null === Du || void 0 === Du ? void 0 : Du.tier) && void 0 !== ru ? ru : null, Fu = void 0 !== Uu.powerMade, wu = null !== Mu.fuelSlot ? eu(Mu.fuelSlot) : null, Zu = wR(Mu), hu = !Iu && !0 === (null === Du || void 0 === Du ? void 0 : Du.fuelFed), iu = !Iu && !0 === (null === Du || void 0 === Du ? void 0 : Du.fuelFeeds), Yu = null !== Mu.fuelSlot && !Iu, ou = null !== (Bu = null === Du || void 0 === Du ? void 0 : Du.fuelLeftMs) && void 0 !== Bu ? Bu : null, qu = function(uu, Ru, yu) {
        var Eu;
        const Ku = null === Ru ? void 0 : Qy[Ru];
        return Math.max(null !== (Eu = null !== Ku && void 0 !== Ku ? Ku : yu) && void 0 !== Eu ? Eu : 0, uu.opMs)
      }(Uu, null !== (xu = null === Du || void 0 === Du ? void 0 : Du.burning) && void 0 !== xu ? xu : null, ou), Ou = null !== (Su = null === Du || void 0 === Du ? void 0 : Du.fuelKeep) && void 0 !== Su ? Su : null, vu = null === nu ? null : WJ(du, nu, Du, hu), au = null === nu ? null : jJ(nu, Du);
      return (0, eQ.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, eQ.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Au(yQ(du))
          }), lu && (0, eQ.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [Au("Tree Cutter" === du ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, eQ.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, eQ.jsx)(IK.c, {
                itemName: lu.item,
                amount: 0
              })
            }), (0, eQ.jsx)(GK.d, {
              text: lu.name
            })]
          }), null !== cu && (0, eQ.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: Au("buildAFactory2Game:machineDigsFixed", {
              perMin: String(cu)
            })
          }), (null === Du || void 0 === Du ? void 0 : Du.field) && (0, eQ.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, eQ.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, eQ.jsx)(IK.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), Au("buildAFactory2Game:machineField", {
              planted: String(Du.field[0]),
              ripe: String(Du.field[1])
            })]
          }), (0, eQ.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, eQ.jsxs)("div", {
              className: CK()("Baf2MachineColumn", {
                Baf2Burns: Yu
              }),
              children: [null !== Uu.inputSlot && (0, eQ.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, eQ.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Au(HJ(Uu))
                }), eu(Uu.inputSlot)]
              }), null !== Mu.fuelSlot && !Iu && (0, eQ.jsxs)("div", {
                className: CK()("Baf2MachineSlot", {
                  Baf2FuelFed: hu
                }),
                children: [(0, eQ.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [hu && (0, eQ.jsx)(MK.c, {
                    name: "fire"
                  }), Au("buildAFactory2Game:machineFuel")]
                }), (0, eQ.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, eQ.jsx)(eJ, {
                    running: "running" === nu,
                    leftMs: ou,
                    periodMs: qu,
                    updateCount: Cu.updateCount
                  }), wu]
                })]
              }), null !== Mu.fuelSlot && Iu && (0, eQ.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, eQ.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Au("buildAFactory2Game:machineFuel")
                }), (0, eQ.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: Au("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": Au("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, eQ.jsx)(MK.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, eQ.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, eQ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Au(DJ(Uu))
              }), (0, eQ.jsx)(kJ, {
                running: "running" === nu,
                opMs: Uu.opMs,
                opLeftMs: tu,
                updateCount: Cu.updateCount
              })]
            }), Uu.outputSlots.length > 0 && (0, eQ.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, eQ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Au("buildAFactory2Game:machineOutput")
              }), (0, eQ.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Uu.outputSlots.map((uu => (0, eQ.jsx)("div", {
                  children: eu(uu)
                }, uu)))
              })]
            }), null !== su && Fu && (0, eQ.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, eQ.jsx)("div", {
                style: {
                  height: 100 * su / Lu + "%"
                }
              })
            })]
          }), Yu && null !== Ou && (0, eQ.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, eQ.jsx)(MK.c, {
              name: "arrows-rotate"
            }), Au(yy(Uu) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Ou)
            })]
          }), (hu || iu) && (0, eQ.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, eQ.jsx)(MK.c, {
              name: "fire"
            }), Au(hu ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Mu.couplable && (0, eQ.jsx)(Om, {
            kind: du,
            tier: zu,
            coupled: Iu,
            level: Gu,
            slot: Zu === Mu.fuelSlot ? wu : null !== Zu ? eu(Zu) : null
          }), null !== su && !Fu && !0 === (null === Du || void 0 === Du ? void 0 : Du.reactorPowered) && (0, eQ.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: Au("buildAFactory2Game:machineReactorPowered")
          }), null !== su && !Fu && !0 !== (null === Du || void 0 === Du ? void 0 : Du.reactorPowered) && (0, eQ.jsx)(Im, {
            stored: su,
            cap: Lu,
            rates: null !== (pu = null === Du || void 0 === Du ? void 0 : Du.powerRates) && void 0 !== pu ? pu : null
          }), (null === Du || void 0 === Du ? void 0 : Du.water) && (0, eQ.jsx)(NJ, {
            water: Du.water,
            at: bu,
            side: Du.cryo ? "waterIn" : null
          }), (null === Du || void 0 === Du ? void 0 : Du.cryo) && (0, eQ.jsx)(NJ, {
            water: Du.cryo,
            at: bu,
            side: "cryoOut"
          }), null !== Du && void 0 !== Du && Du.inertCoupler ? (0, eQ.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: Au("buildAFactory2Game:machineStatus_couplerOff", {
              item: EQ(Au, Du.inertCoupler)
            })
          }) : null !== vu && (0, eQ.jsx)("div", {
            className: CK()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== nu
            }),
            children: Au(vu, au ? AJ(Au, au.input, au.short) : void 0)
          })]
        }), (0, eQ.jsxs)("div", {
          className: CK()("Baf2MachineSide", {
            Baf2SynthSide: YR(Mu)
          }),
          children: [YR(Mu) && (0, eQ.jsx)(om, {
            zQ: bu,
            taught: null !== (Tu = null === Du || void 0 === Du ? void 0 : Du.taught) && void 0 !== Tu ? Tu : null
          }, bu.join(",")), Fu && (0, eQ.jsx)(Um, {
            kind: du,
            def: Uu,
            zQ: bu,
            power: ku,
            stored: null !== su && void 0 !== su ? su : 0,
            cap: Lu
          }), Pu(Mu) && (0, eQ.jsx)(Pm, {
            zQ: bu,
            input: null !== (Wu = null === Du || void 0 === Du ? void 0 : Du.input) && void 0 !== Wu ? Wu : null,
            drops: null !== (ju = null === Du || void 0 === Du ? void 0 : Du.farm) && void 0 !== ju ? ju : null,
            seconds: String(Uu.opMs / 1e3)
          }), !Fu && !Pu(Mu) && !YR(Mu) && (0, eQ.jsx)(ym, {
            kind: du,
            def: Uu,
            input: null !== (Hu = null === Du || void 0 === Du ? void 0 : Du.input) && void 0 !== Hu ? Hu : null,
            tier: null !== zu && void 0 !== zu ? zu : 1,
            noSeeds: !0 === (null === Du || void 0 === Du ? void 0 : Du.noSeeds)
          })]
        })]
      })
    }

    function IJ(uu, Ru, yu, Eu) {
      var Ku;
      const Qu = tR[uu],
        mu = [Qu.inputSlot, Qu.fuelSlot, ...null !== (Ku = Qu.inputSlots) && void 0 !== Ku ? Ku : []].filter((uu => null !== uu));
      return {
        render: Ku => {
          let {
            zQ: Qu,
            renderSlot: mu
          } = Ku;
          return (0, eQ.jsx)(zm.Provider, {
            value: Eu,
            children: (0, eQ.jsx)(MJ, {
              kind: uu,
              zQ: Qu,
              store: Ru,
              power: yu,
              renderSlot: mu
            })
          })
        },
        quickMoveRange: mu.length > 0 ? [Math.min(...mu), Math.max(...mu) + 1] : [0, 0],
        className: dJ(uu)
      }
    }
    const GJ = "Assembler";

    function UJ(uu) {
      var Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu;
      let {
        zQ: Vu,
        store: ru,
        renderSlot: Bu
      } = uu;
      const {
        t: xu
      } = (0, DK.E)(), Su = bJ(ru, Vu), pu = null !== (Ru = null === Su || void 0 === Su ? void 0 : Su.tier) && void 0 !== Ru ? Ru : 1, Tu = null !== (yu = null === Su || void 0 === Su ? void 0 : Su.taught) && void 0 !== yu ? yu : null, Wu = vR(GJ, {
        coupled: !1,
        taught: Tu
      }), ju = null !== (Eu = Wu.bench) && void 0 !== Eu ? Eu : null, Hu = null !== (Ku = null === Su || void 0 === Su ? void 0 : Su.status) && void 0 !== Ku ? Ku : null, du = null !== (Qu = null === Su || void 0 === Su ? void 0 : Su.power) && void 0 !== Qu ? Qu : null, bu = null !== (mu = null === Su || void 0 === Su ? void 0 : Su.powerCap) && void 0 !== mu ? mu : 4e3;
      return (0, eQ.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, eQ.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: xu(yQ(GJ))
          }), ju && (0, eQ.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [xu("buildAFactory2Game:benchMakes"), (0, eQ.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, eQ.jsx)(IK.c, {
                itemName: ju.output,
                amount: 0
              })
            }), (null === Su || void 0 === Su ? void 0 : Su.taughtName) && (0, eQ.jsx)(GK.d, {
              text: Su.taughtName
            }), ju.outputAmount > 1 && (0, eQ.jsxs)("span", {
              children: ["\xd7", ju.outputAmount]
            })]
          }), !ju && (0, eQ.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: xu("buildAFactory2Game:benchTeachHint")
          }), (0, eQ.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, eQ.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (Ju = Wu.inputSlots) && void 0 !== Ju ? Ju : []).map(((uu, Ru) => {
                const yu = null === ju || void 0 === ju ? void 0 : ju.inputs[Ru];
                return (0, eQ.jsxs)("div", {
                  className: CK()("Baf2BenchInput", {
                    Spare: !yu
                  }),
                  children: [(0, eQ.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Bu(uu), yu && (0, eQ.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, eQ.jsx)(IK.c, {
                        itemName: yu.item,
                        amount: 0
                      })
                    })]
                  }), (0, eQ.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: yu ? `\xd7${yu.amount}` : "\xa0"
                  })]
                }, uu)
              }))
            }), (0, eQ.jsx)(kJ, {
              running: "running" === Hu,
              opMs: Wu.opMs,
              opLeftMs: null !== (Nu = null === Su || void 0 === Su ? void 0 : Su.opLeftMs) && void 0 !== Nu ? Nu : null,
              updateCount: ru.updateCount
            }), (0, eQ.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, eQ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: xu("buildAFactory2Game:machineOutput")
              }), (0, eQ.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Wu.outputSlots.map((uu => (0, eQ.jsx)("div", {
                  children: Bu(uu)
                }, uu)))
              })]
            })]
          }), null !== du && (0, eQ.jsx)(Im, {
            stored: du,
            cap: bu,
            rates: null !== (Xu = null === Su || void 0 === Su ? void 0 : Su.powerRates) && void 0 !== Xu ? Xu : null
          }), null !== Hu && (0, eQ.jsx)("div", {
            className: CK()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Hu
            }),
            children: xu(WJ(GJ, Hu, Su, !1))
          }), ju && ju.inputs.length > 1 && (0, eQ.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: xu("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, eQ.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, eQ.jsx)(Km, {
            taught: Tu,
            tier: pu
          }), ju && (0, eQ.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: xu("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function nJ(uu) {
      var Ru;
      const yu = null !== (Ru = tR[GJ].inputSlots) && void 0 !== Ru ? Ru : [];
      return {
        render: Ru => {
          let {
            zQ: yu,
            renderSlot: Eu
          } = Ru;
          return (0, eQ.jsx)(UJ, {
            zQ: yu,
            store: uu,
            renderSlot: Eu
          })
        },
        quickMoveRange: [Math.min(...yu), Math.max(...yu) + 1],
        className: dJ(GJ)
      }
    }
    var sJ = yu(106),
      tJ = yu(1107),
      lJ = yu(4053);
    const gJ = 600,
      cJ = .5,
      LJ = 4,
      zJ = 1200,
      FJ = 140,
      wJ = 100,
      ZJ = 32,
      hJ = 16,
      PJ = 100.5,
      iJ = 90,
      YJ = 1.5,
      oJ = 50;

    function qJ(uu) {
      switch (Uy(uu)) {
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
    const OJ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function vJ(uu) {
      const Ru = Math.ceil(60 * uu / wJ);
      return {
        fuel: Math.max(ZJ, Ru),
        waste: Math.max(hJ, Ru)
      }
    }

    function aJ(uu, Ru, yu) {
      const [Eu, Ku, Qu] = [uu - 2, Ru - 2, yu - 2];
      return 2 * (Eu * Ku + Ku * Qu + Qu * Eu) * FJ
    }

    function fJ(uu, Ru, yu) {
      return Math.max(0, uu - 2) * Math.max(0, Ru - 2) * Math.max(0, yu - 2)
    }

    function uN(uu, Ru) {
      const [yu, Eu, Ku] = uu, Qu = yu * Eu * Ku, mu = new Float32Array(Qu);
      let Ju = 0,
        Nu = 0,
        Xu = 0,
        Vu = 0,
        ru = 0;
      const Bu = (uu, Qu, mu) => uu < 0 || uu >= yu || Qu < 0 || Qu >= Eu || mu < 0 || mu >= Ku ? 0 : Ru[(Qu * Ku + mu) * yu + uu];
      for (let Tu = 0; Tu < Eu; Tu++)
        for (let uu = 0; uu < Ku; uu++)
          for (let Eu = 0; Eu < yu; Eu++) {
            const Qu = (Tu * Ku + uu) * yu + Eu,
              xu = Ru[Qu];
            if (1 === xu) {
              Ju++;
              let Ru = 0;
              for (const [yu, Ku, Qu] of OJ) {
                const mu = Bu(Eu + yu, Tu + Ku, uu + Qu);
                1 !== mu && 2 !== mu || Ru++
              }
              mu[Qu] = gJ * (1 + cJ * Math.min(Ru, LJ)), Vu += mu[Qu]
            } else if (2 === xu) Nu++;
            else if (3 === xu) {
              Xu++;
              OJ.some((Ru => {
                let [yu, Ku, Qu] = Ru;
                return 1 === Bu(Eu + yu, Tu + Ku, uu + Qu)
              })) && (ru += zJ)
            }
          }
      const xu = aJ(yu + 2, Eu + 2, Ku + 2),
        Su = Math.min(Vu, ru, xu),
        pu = Ju > 0 ? Vu * wJ / Ju : 0;
      return {
        rods: Ju,
        graphite: Nu,
        channels: Xu,
        fuelHeat: Vu,
        cooling: ru,
        size: xu,
        max: Su,
        vol: Qu,
        powerPerUnit: pu,
        pelletsPerMin: pu > 0 ? Su / pu * 60 : 0,
        waterPerS: Su * au.q,
        rodHeat: mu
      }
    }
    const RN = 0,
      yN = 1,
      EN = 6,
      KN = 7,
      QN = 8;

    function mN(uu, Ru) {
      const [yu, Eu, Ku] = uu, Qu = new Uint8Array(yu * Eu * Ku), mu = (uu, Qu, mu) => uu < 0 || uu >= yu || Qu < 0 || Qu >= Eu || mu < 0 || mu >= Ku ? 0 : Ru[(Qu * Ku + mu) * yu + uu];
      for (let Ju = 0; Ju < Eu; Ju++)
        for (let uu = 0; uu < Ku; uu++)
          for (let Eu = 0; Eu < yu; Eu++) {
            const Nu = (Ju * Ku + uu) * yu + Eu,
              Xu = Ru[Nu];
            if (1 === Xu) {
              let Ru = 0;
              for (const [yu, Ku, Qu] of OJ) {
                const Nu = mu(Eu + yu, Ju + Ku, uu + Qu);
                Ru += 1 === Nu || 2 === Nu ? 1 : 0
              }
              Qu[Nu] = yN + Math.min(Ru, LJ)
            } else if (3 === Xu) {
              const Ru = OJ.some((Ru => {
                let [yu, Ku, Qu] = Ru;
                return 1 === mu(Eu + yu, Ju + Ku, uu + Qu)
              }));
              Qu[Nu] = Ru ? EN : KN
            } else 2 === Xu && (Qu[Nu] = QN)
          }
      return Qu
    }

    function JN(uu) {
      return uu.fuelHeat <= uu.cooling && uu.fuelHeat <= uu.size ? "fuel" : uu.cooling <= uu.size ? "cooling" : "size"
    }
    const NN = iJ;

    function XN(uu, Ru, yu) {
      return Math.round(uu * Ru * yu * 25e3 * (1 + .25 * (Math.min(uu, Ru, yu) - 2)))
    }

    function VN(uu) {
      return Math.max(0, Math.min(au.g, uu))
    }

    function rN(uu, Ru, yu) {
      const Eu = Ru * VN(yu);
      return uu <= 0 ? 0 : Eu > 0 ? Math.min(200, 100 * uu / Eu) : 200
    }

    function BN(uu, Ru) {
      const yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? YJ : 1;
      return Math.min(uu.fuelHeat * yu, uu.cooling * VN(Ru), uu.size * yu)
    }

    function xN(uu) {
      return 2 + uu / 10
    }
    const SN = "buildAFactory2Game:";

    function pN(uu) {
      var Ru;
      return null !== (Ru = uu.baf2RxMood) && void 0 !== Ru ? Ru : function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const yu = [
          ["calm", 50],
          ["warm", NN],
          ["hot", PJ]
        ];
        for (const [Eu, Ku] of yu)
          if (uu < Ku + (Eu === Ru ? 3 : 0)) return Eu;
        return "alarm"
      }(uu.baf2RxHeat)
    }
    const TN = 120;

    function WN(uu) {
      const Ru = uu.baf2RxState;
      if ("running" === Ru && uu.baf2RxHeat > PJ) return {
        label: `${SN}rxState_tooHot`,
        tone: "bad",
        fix: `${SN}rxFix_tooHot`
      };
      switch (Ru) {
        case "running":
          return {
            label: `${SN}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${SN}rxState_idle`, tone: "off", fix: `${SN}rxFix_idle`
          };
        case "scram":
          return {
            label: `${SN}rxState_scram`, tone: "off", fix: uu.baf2RxHeat < oJ ? `${SN}rxFix_scramCool` : `${SN}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${SN}rxState_${Ru}`, tone: "off", fix: `${SN}rxFix_${Ru}`
          };
        case "melted":
          return {
            label: `${SN}rxState_melted`, tone: "bad", fix: `${SN}rxFix_melted`
          };
        default:
          return {
            label: `${SN}rxState_${Ru}`, tone: "warn", fix: `${SN}rxFix_${Ru}`
          }
      }
    }

    function jN(uu) {
      const [Ru, yu, Eu] = uu.baf2RxStats;
      return {
        fuelHeat: Ru,
        cooling: yu * (uu.baf2RxCryo ? Math.max(1, VN(uu.baf2RxWater / 100)) : 1),
        size: Eu
      }
    }

    function HN(uu) {
      var Ru;
      const yu = "idle" === uu.baf2RxState || "running" === uu.baf2RxState && uu.baf2RxHeat <= PJ || "scram" === uu.baf2RxState && uu.baf2RxHeat < oJ;
      if (0 === (uu.baf2RxFlags & dR) || !uu.baf2RxFormed || !yu) return null;
      const {
        fuelHeat: Eu,
        cooling: Ku,
        size: Qu
      } = jN(uu), mu = Math.min(Eu, Ku, Qu), Ju = JN({
        fuelHeat: Eu,
        cooling: Ku,
        size: Qu
      }), Nu = "cooling" === Ju && !0 === uu.baf2RxCryoOpen && !uu.baf2RxCryo, Xu = null !== (Ru = uu.baf2RxCells) && void 0 !== Ru ? Ru : "", Vu = ("fuel" === Ju || "cooling" === Ju && !0 === uu.baf2RxCryo) && Xu.length > 0 && !Xu.includes(String(0)), ru = Nu ? "Cryo" : "scram" === uu.baf2RxState ? "Off" : "";
      return mu < 12e3 ? {
        key: `${SN}rxGrow_${Vu?"full":Ju}${ru}`,
        amount: mu
      } : null
    }

    function dN(uu, Ru) {
      return uu[0] === Ru[0] && uu[1] === Ru[1] && uu[2] === Ru[2]
    }

    function bN(uu) {
      return [...uu].sort(((uu, Ru) => Number(Ru[2] < Ru[1]) - Number(uu[2] < uu[1])))
    }

    function CN(uu, Ru) {
      return Ru.some((Ru => {
        let [yu, Eu] = Ru;
        return !(Eu <= 0) && ["edge", "cap", "wall", "inside"].some((Ru => yu === QE(uu, Ru)))
      }))
    }

    function kN(uu, Ru, yu) {
      const Eu = uu.baf2RxFuel - uu.baf2RxPu > 0 ? yu : 0;
      return {
        full: uu.baf2RxWaste > Ru - 3,
        fullInS: Eu > 0 ? Math.max(0, Ru - uu.baf2RxWaste) / Eu : null
      }
    }
    const eN = {
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

    function AN(uu) {
      return DN[uu]
    }
    const DN = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function MN(uu) {
      let [Ru, yu, Eu] = uu;
      return Math.ceil(aJ(Ru, yu, Eu) * au.q)
    }

    function IN(uu, Ru) {
      return "battery" === uu ? Ru[0] * Ru[1] * Ru[2] : function(uu) {
        let [Ru, yu, Eu] = uu;
        return Ru * yu * Eu - Math.max(0, Ru - 2) * Math.max(0, yu - 2) * Math.max(0, Eu - 2)
      }(Ru) - 1
    }

    function GN(uu) {
      const Ru = Math.max(0, uu);
      if (Ru < 10) return String(Math.round(10 * Ru) / 10);
      if (Ru < 1e4) return Math.round(Ru).toLocaleString("en-US");
      if (Ru < 1e6) return `${Ru<1e5?(Math.floor(Ru/100)/10).toFixed(1):Math.floor(Ru/1e3)}k`;
      const yu = Ru / 1e6;
      return `${yu<10?(Math.floor(100*yu)/100).toFixed(2):yu<100?(Math.floor(10*yu)/10).toFixed(1):Math.floor(yu)}M`
    }

    function UN(uu) {
      return uu <= 0 ? "0" : uu >= 10 ? String(Math.round(uu)) : uu.toFixed(uu >= 1 ? 1 : 2)
    }

    function nN(uu) {
      const Ru = ay(uu, 0),
        yu = ay(uu, oy(uu) - 1);
      return {
        lo: [Math.min(Ru[0], yu[0]), Math.min(Ru[1], yu[1]), Math.min(Ru[2], yu[2])],
        hi: [Math.max(Ru[0], yu[0]) + 1, Math.max(Ru[1], yu[1]) + 1, Math.max(Ru[2], yu[2]) + 1]
      }
    }

    function sN(uu, Ru, yu) {
      const Eu = [Ru[0] - uu[0], Ru[1] - uu[1], Ru[2] - uu[2]],
        Ku = [(uu[0] + Ru[0]) / 2, (uu[1] + Ru[1]) / 2, (uu[2] + Ru[2]) / 2],
        Qu = [];
      for (let mu = 0; mu < 3; mu++) {
        const Ju = (mu + 1) % 3,
          Nu = (mu + 2) % 3;
        for (const Xu of [uu[Ju], Ru[Ju]])
          for (const Vu of [uu[Nu], Ru[Nu]]) {
            const uu = [0, 0, 0],
              Ru = [yu, yu, yu];
            uu[mu] = Ku[mu], Ru[mu] = Eu[mu] + yu, uu[Ju] = Xu, uu[Nu] = Vu, Qu.push([uu, Ru])
          }
      }
      return Qu
    }
    const tN = "buildAFactory2Game:",
      lN = [`${tN}colNorth`, `${tN}colEast`, `${tN}colSouth`, `${tN}colWest`];

    function gN(uu, Ru) {
      const [yu, Eu, Ku] = uu.baf2ColAt;
      return `baf2col ${yu} ${Eu} ${Ku} ${Ru}`
    }

    function cN(uu) {
      return function(uu) {
        if (!Number.isFinite(uu)) return "";
        const Ru = Math.max(1, Math.round(uu));
        if (Ru < 60) return `${Ru}s`;
        const yu = Ru % 60;
        return 0 === yu ? Ru / 60 + "m" : `${Math.floor(Ru/60)}m ${yu}s`
      }(function(uu) {
        const Ru = mE.FOCUS_BY_LASERS[Math.max(0, Math.min(4, uu))];
        return Ru > 0 ? mE.NOVA_FOCUS / Ru : 1 / 0
      }(uu))
    }

    function LN(uu) {
      const Ru = Math.abs(Math.round(uu));
      return Ru < 1e3 ? Math.round(uu).toLocaleString("en-US") : Ru < 1e6 ? `${Ru<1e5?(uu/1e3).toFixed(1).replace(/\.0$/,""):Math.round(uu/1e3)}k` : `${(uu/1e6).toFixed(Ru<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function zN(uu, Ru, yu) {
      if (BE(Ru) >= 0) {
        const Ru = function(uu, Ru) {
          return uu.find((uu => {
            let {
              focus: yu
            } = uu;
            return yu[0] === Ru[0] && yu[2] === Ru[2] && (Ru[1] === yu[1] || Ru[1] === yu[1] - 1)
          }))
        }(uu, yu);
        if (!Ru) return null;
        const Ku = function(uu) {
          let Ru = 0,
            yu = 0;
          for (let Eu = 0; Eu < 4; Eu++) Ru += uu.laser[Eu] ? 1 : 0, yu += uu.live[Eu] ? 1 : 0;
          return {
            lasers: Ru,
            live: yu,
            focusPerS: mE.FOCUS_BY_LASERS[yu],
            drawPerS: mE.LASER_DRAW * yu
          }
        }({
          laser: Ru.lasers,
          live: Ru.live
        });
        if (0 === Ku.lasers || "noLasers" === Ru.state) return {
          key: `${tN}lookColNoLasers`
        };
        if (0 === Ku.live) return {
          key: `${tN}lookColOff_blocked`
        };
        if (!(Ru.on && Ku.live > 0) && ("running" !== (Eu = Ru.state) && "slowed" !== Eu)) return {
          key: `${tN}lookColOff_${Ru.state}`
        };
        if (Ku.live < Ku.lasers) return {
          key: `${tN}lookColLasersSome`,
          params: {
            lasers: String(Ku.lasers),
            live: String(Ku.live)
          }
        };
        const Qu = Ru.open.filter(Boolean).length;
        return Qu < 4 ? {
          key: `${tN}lookColLasersSpots`,
          params: {
            live: String(Ku.live),
            spots: String(Qu),
            time: cN(Ku.live)
          }
        } : {
          key: `${tN}lookColLasers`,
          params: {
            live: String(Ku.live),
            time: cN(Ku.live)
          }
        }
      }
      var Eu;
      if (!xE(Ru)) return null;
      const Ku = function(uu, Ru) {
        for (const yu of uu) {
          const uu = WE(yu.focus, [Ru[0], Ru[1], Ru[2]]);
          if (uu && uu.fm === mE.LASER_D && yu.lasers[uu.dir]) return {
            entry: yu,
            dir: uu.dir
          }
        }
        return null
      }(uu, yu);
      if (!Ku) return {
        key: `${tN}lookLaserNoCollider`
      };
      const {
        entry: Qu,
        dir: mu
      } = Ku;
      return Qu.open[mu] ? Qu.live[mu] ? {
        key: Qu.on ? `${tN}lookLaserFiring` : `${tN}lookLaserReady`
      } : {
        key: `${tN}lookLaserBlocked`
      } : {
        key: `${tN}lookLaserClosed`
      }
    }

    function FN(uu, Ru) {
      const yu = [];
      for (let Eu = 1; Eu < mE.LASER_D; Eu++) uu & 1 << Ru * (mE.LASER_D - 1) + Eu - 1 && yu.push(Eu);
      return yu
    }
    const wN = {
      firing: `${tN}colSlotFiring`,
      ready: `${tN}colSlotReady`,
      blocked: `${tN}colSlotBlocked`,
      empty: `${tN}colSlotEmpty`,
      closed: `${tN}colSlotClosed`
    };

    function ZN(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Qu = QK(uu),
        mu = QK(Ru),
        Ju = QK(yu),
        Nu = Ju.filter(Boolean).length,
        Xu = Qu.filter(Boolean).length,
        Vu = [0, 1, 2, 3].map((uu => mu[uu] ? Qu[uu] ? Ju[uu] ? Eu ? "firing" : "ready" : "blocked" : (uu => FN(Ku, uu).length > 0)(uu) ? "blocked" : "empty" : "closed")),
        ru = Vu.indexOf("blocked"),
        Bu = ru < 0 && Xu > 0 ? Vu.indexOf("empty") : -1;
      return Vu.map(((uu, Ru) => {
        const yu = Ru === ru ? {
          key: `${tN}colSlotClear`
        } : Ru === Bu ? {
          key: `${tN}colSlotAdd`,
          params: {
            time: cN(Math.min(4, Nu + 1))
          }
        } : null;
        return {
          dir: Ru,
          tone: uu,
          title: {
            key: "blocked" !== uu || Qu[Ru] ? wN[uu] : `${tN}colSlotGap`,
            keys: {
              dir: lN[Ru]
            }
          },
          hint: yu
        }
      }))
    }

    function hN(uu) {
      var Ru;
      return "noPower" === uu.baf2ColState && uu.baf2ColRxState ? WN({
        baf2RxState: uu.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (Ru = uu.baf2ColRxHeat) && void 0 !== Ru ? Ru : 0
      }) : null
    }

    function PN(uu) {
      const Ru = QK(uu.baf2ColSpots).filter(Boolean).length,
        yu = QK(uu.baf2ColLive);
      let Eu = 0,
        Ku = 0;
      return QK(uu.baf2ColLasers).forEach(((uu, Ru) => {
        uu && (Eu++, Ku += yu[Ru] ? 0 : 1)
      })), Ku > 0 ? {
        key: `${tN}colSubSome`,
        params: {
          blocked: String(Ku),
          lasers: String(Eu)
        }
      } : Ru < 4 ? {
        key: `${tN}colSubSpots`,
        params: {
          lasers: String(Eu),
          spots: String(Ru)
        }
      } : {
        key: `${tN}colSub`,
        params: {
          lasers: String(Eu)
        }
      }
    }

    function iN(uu) {
      const Ru = hN(uu);
      if ("idle" === uu.baf2ColRxState && Ru) return {
        key: `${tN}colState_noPowerIdle`
      };
      if (Ru) return {
        key: `${tN}colState_noPowerReactor`,
        keys: {
          state: Ru.label
        }
      };
      if ("noInput" !== uu.baf2ColState) return {
        key: `${tN}colState_${uu.baf2ColState}`
      };
      const yu = String(Math.max(0, mE.NOVA_SA - uu.baf2ColSa)),
        Eu = String(Math.max(0, mE.NOVA_GD - uu.baf2ColGd));
      return "0" !== yu && "0" !== Eu ? {
        key: `${tN}colState_noInput`,
        params: {
          sa: yu,
          gd: Eu
        }
      } : "0" !== yu ? {
        key: `${tN}colState_noStarAlloy`,
        params: {
          sa: yu
        }
      } : "0" !== Eu ? {
        key: `${tN}colState_noGlowDust`,
        params: {
          gd: Eu
        }
      } : {
        key: `${tN}colState_running`
      }
    }

    function YN(uu) {
      return uu.baf2ColP < 0 ? `${tN}colNext` : function(uu) {
        const Ru = uu.baf2ColState;
        return uu.baf2ColP >= 0 && ("blocked" === Ru || "noLasers" === Ru || "noPower" === Ru)
      }(uu) ? `${tN}colStalled` : null === oN(uu) ? `${tN}colMaking` : `${tN}colNovaIn`
    }

    function oN(uu) {
      if (uu.baf2ColP < 0 || uu.baf2ColWant <= 0) return null;
      const Ru = uu.baf2ColFocusPerS * Math.min(1, uu.baf2ColDraw / uu.baf2ColWant);
      return Ru > 0 ? Math.max(0, mE.NOVA_FOCUS - uu.baf2ColP) / Ru : null
    }

    function qN(uu, Ru) {
      const yu = [];
      for (let Eu = 1; Eu <= 3; Eu++) {
        const Ku = [uu[0], uu[1] - Eu, uu[2]];
        if (!Ru(Ku)) return yu;
        yu.push(Ku)
      }
      return []
    }

    function ON(uu, Ru) {
      const yu = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Eu = 0; Eu < 4; Eu++) {
        const Ku = Eu,
          Qu = TE(uu.focus, Ku, mE.LASER_D);
        if (uu.lasers[Eu] || !uu.open[Eu] || !Ru(Qu)) continue;
        const mu = [];
        for (let yu = 1; yu < mE.LASER_D; yu++) {
          const Eu = TE(uu.focus, Ku, yu);
          Ru(Eu) || mu.push(Eu)
        }
        yu.supports.push(...qN(Qu, Ru)), 0 === mu.length ? yu.free.push(Qu) : (yu.blocked.push(Qu), yu.gaps.push(...mu))
      }
      return yu
    }
    const vN = mE.LASER_D - .25,
      aN = 4,
      fN = 2,
      uX = 16;
    const RX = {
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
        blendMode: lJ.g.Standard,
        soft: !0
      },
      yX = {
        green: RX,
        pink: {
          ...RX,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function EX(uu, Ru) {
      const yu = {
        ...Ru.params
      };
      for (const [Ku, Qu] of Object.entries(null !== (Eu = Ru.keys) && void 0 !== Eu ? Eu : {})) {
        var Eu;
        yu[Ku] = uu(Qu)
      }
      return yu
    }
    const KX = "buildAFactory2Game:",
      QX = 2 * mE.LASER_D + 1,
      mX = mE.LASER_D;

    function JX(uu) {
      return uu(`${KX}colFocusTip`, {
        need: LN(mE.NOVA_FOCUS)
      })
    }

    function NX(uu, Ru) {
      return uu(Ru.key, EX(uu, Ru))
    }

    function XX(uu) {
      const Ru = uu.getStatus();
      return {
        status: Ru,
        entry: Ru ? uu.entryAtRoot(Ru.baf2ColAt) : void 0
      }
    }

    function VX(uu, Ru) {
      return {
        left: 100 * (mX + uu) / QX + "%",
        top: 100 * (mX + Ru) / QX + "%"
      }
    }

    function rX(uu) {
      let {
        status: Ru,
        entry: yu
      } = uu;
      const Eu = QK(Ru.baf2ColLasers),
        Ku = QK(Ru.baf2ColSpots),
        Qu = QK(Ru.baf2ColLive),
        mu = !0 === (null === yu || void 0 === yu ? void 0 : yu.on),
        Ju = mE.LASER_D,
        Nu = [];
      for (let xu = 0; xu < 4; xu++) {
        const [uu, , Ru] = pE[xu];
        if (Qu[xu]) {
          const yu = 100 * (Ju - 1) / QX,
            Eu = uu + Ru > 0 ? 100 * (mX + 1) / QX : 100 * (mX - (Ju - 1)) / QX,
            Ku = 100 * (mX + .35) / QX,
            Qu = 30 / QX,
            Xu = 0 !== uu ? {
              left: `${Eu}%`,
              width: `${yu}%`,
              top: `${Ku}%`,
              height: `${Qu}%`
            } : {
              top: `${Eu}%`,
              height: `${yu}%`,
              left: `${Ku}%`,
              width: `${Qu}%`
            };
          Nu.push((0, eQ.jsx)("i", {
            className: CK()("Baf2ColDiagramBeam", {
              Off: !mu
            }),
            style: Xu
          }, `beam${xu}`))
        }
        const yu = Eu[xu] ? "Baf2ColDiagramLaser" : Ku[xu] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Nu.push((0, eQ.jsx)("i", {
          className: yu,
          style: VX(uu * Ju, Ru * Ju)
        }, `spot${xu}`))
      }
      for (let xu = 0; xu < 4; xu++) {
        if (Eu[xu] || !Ku[xu]) continue;
        const [uu, , yu] = pE[xu];
        for (const Eu of FN(null !== (Xu = Ru.baf2ColGaps) && void 0 !== Xu ? Xu : 0, xu)) {
          var Xu;
          Nu.push((0, eQ.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: VX(uu * Eu, yu * Eu)
          }, `gap${xu},${Eu}`))
        }
      }
      for (const [xu, , Su] of null !== (Vu = null === yu || void 0 === yu ? void 0 : yu.blockers) && void 0 !== Vu ? Vu : []) {
        var Vu, ru, Bu;
        const uu = xu - (null !== (ru = null === yu || void 0 === yu ? void 0 : yu.focus[0]) && void 0 !== ru ? ru : 0),
          Ru = Su - (null !== (Bu = null === yu || void 0 === yu ? void 0 : yu.focus[2]) && void 0 !== Bu ? Bu : 0);
        Nu.push((0, eQ.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: VX(uu, Ru)
        }, `block${uu},${Ru}`))
      }
      return (0, eQ.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Nu, (0, eQ.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function BX(uu) {
      let {
        status: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)(), Eu = QK(Ru.baf2ColLive).filter(Boolean).length;
      return (0, eQ.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: JX(yu),
          children: yu(`${KX}colLadder`)
        }), (0, eQ.jsx)("ul", {
          children: [1, 2, 3, 4].map((uu => (0, eQ.jsx)("li", {
            className: CK()({
              On: uu === Eu
            }),
            children: yu(`${KX}colLadderChip`, {
              lasers: String(uu),
              time: cN(uu)
            })
          }, uu)))
        })]
      })
    }

    function xX(uu) {
      let {
        item: Ru,
        jJ: yu,
        need: Eu,
        cap: Ku
      } = uu;
      const {
        t: Qu
      } = (0, DK.E)(), mu = Math.min(yu, Eu);
      return (0, eQ.jsxs)("li", {
        className: CK()("Baf2ColTile", {
          Short: yu < Eu
        }),
        children: [(0, eQ.jsx)(SX, {
          item: Ru
        }), (0, eQ.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Qu(`${KX}colOutOf`, {
            amount: String(mu),
            cap: String(Eu)
          })
        }), (0, eQ.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, eQ.jsx)("i", {
            style: {
              width: 100 * mu / Eu + "%"
            }
          })
        }), yu > Eu && (0, eQ.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Qu(`${KX}colIntakeHeld`, {
            amount: String(yu),
            cap: String(Ku)
          })
        })]
      })
    }

    function SX(uu) {
      let {
        item: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)();
      return (0, eQ.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, eQ.jsx)(IK.c, {
            itemName: Ru,
            amount: 0
          })
        }), (0, eQ.jsx)("span", {
          className: "Baf2ColTileName",
          children: EQ(yu, Ru)
        })]
      })
    }

    function pX(uu) {
      switch (uu.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function TX(uu) {
      var Ru, yu, Ku;
      let {
        store: Qu,
        close: mu
      } = uu;
      const {
        t: Ju
      } = (0, DK.E)(), Nu = Fm(), {
        status: Xu,
        entry: Vu
      } = function(uu) {
        const [Ru, yu] = (0, Eu.useState)((() => XX(uu)));
        return (0, Eu.useEffect)((() => (yu(XX(uu)), uu.subscribe((() => {
          yu(XX(uu))
        })))), [uu]), Ru
      }(Qu), [ru, Bu] = (0, Eu.useState)(null), xu = null === Xu || void 0 === Xu ? void 0 : Xu.baf2ColHold;
      (0, Eu.useEffect)((() => {
        Bu(null)
      }), [xu]);
      const Su = (0, Eu.useRef)({
          p: -1,
          n: 0
        }),
        pu = null !== (Ru = null === Xu || void 0 === Xu ? void 0 : Xu.baf2ColP) && void 0 !== Ru ? Ru : -1;
      pu < Su.current.p && Su.current.n++, Su.current.p = pu;
      const Tu = (0, Eu.useRef)(null),
        [Wu] = (0, Eu.useState)((() => {
          return (uu = Qu.heldAtOpen()) === XE || uu === VE ? {
            key: `${tN}colBeltItIn`,
            item: uu
          } : null;
          var uu
        }));
      if (!Xu) return null;
      const ju = Xu.baf2ColMember,
        Hu = Xu.baf2ColP >= 0,
        du = function(uu, Ru) {
          if (uu.baf2ColP >= 0 && uu.baf2ColDraw > 0) {
            const Ru = uu.baf2ColWant > 0 ? Math.min(1, uu.baf2ColDraw / uu.baf2ColWant) : 0;
            return {
              focus: uu.baf2ColFocusPerS * Ru,
              draw: uu.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === uu.baf2ColState && Ru && Ru.draw > 0 ? {
            ...Ru,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Xu, Tu.current);
      Tu.current = du.draw > 0 ? du : null;
      const bu = "slowed" === Xu.baf2ColState || "noPower" === Xu.baf2ColState,
        Cu = oN(Xu),
        ku = null !== ru && void 0 !== ru ? ru : Xu.baf2ColHold,
        eu = function(uu) {
          var Ru, yu;
          return "idle" === uu.baf2ColRxState ? null : null !== (Ru = null === (yu = hN(uu)) || void 0 === yu ? void 0 : yu.fix) && void 0 !== Ru ? Ru : null
        }(Xu),
        Au = null === eu && null === Wu ? function(uu) {
          var Ru;
          const yu = uu.baf2ColSentTo;
          if (!yu) return null;
          const Eu = null !== (Ru = uu.baf2ColSentHeld) && void 0 !== Ru ? Ru : null;
          return {
            key: null === Eu ? `${tN}colNovaSentToMachine` : `${tN}colNovaSentTo`,
            target: yu,
            jJ: Eu
          }
        }(Xu) : null,
        Du = Hu ? Ju(`${KX}colFocusOf`, {
          focus: LN(Xu.baf2ColP),
          need: LN(mE.NOVA_FOCUS)
        }) : null;
      return (0, eQ.jsx)(dm.e, {
        close: mu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, eQ.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, eQ.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, eQ.jsx)(IK.c, {
                  itemName: JE,
                  amount: 0
                })
              }), (0, eQ.jsxs)("div", {
                children: [(0, eQ.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: EQ(Ju, JE)
                }), (0, eQ.jsx)("p", {
                  children: NX(Ju, PN(Xu))
                })]
              })]
            }), (0, eQ.jsx)(bm.h, {
              onClick: mu
            })]
          }), (0, eQ.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, eQ.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, eQ.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, eQ.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: Ju(YN(Xu), {
                    time: null === Cu ? "" : dQ(Ju, Cu)
                  })
                }), (0, eQ.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, eQ.jsx)("i", {
                    style: {
                      width: (Hu ? 100 * Xu.baf2ColP / mE.NOVA_FOCUS : 0) + "%"
                    }
                  }, Su.current.n)
                }), (0, eQ.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, eQ.jsxs)("span", {
                    title: JX(Ju),
                    children: [(0, eQ.jsx)("b", {
                      children: LN(du.focus)
                    }), " ", Ju(`${KX}colFocusPerS`)]
                  }), (0, eQ.jsxs)("span", {
                    className: CK()("Baf2ColDraw", {
                      Short: bu
                    }),
                    children: [(0, eQ.jsx)(MK.c, {
                      name: "bolt"
                    }), bu ? Ju(`${KX}colDrawOf`, {
                      draw: LN(Xu.baf2ColDraw),
                      want: LN(Xu.baf2ColWant)
                    }) : Ju(`${KX}colPowerPerS`, {
                      rate: LN(du.draw)
                    })]
                  }), null !== Du && (0, eQ.jsx)("span", {
                    className: "Soft",
                    children: Du
                  })]
                })]
              }), (0, eQ.jsx)("p", {
                className: CK()("Baf2ColState", pX(Xu)),
                children: NX(Ju, iN(Xu))
              }), null !== eu && (0, eQ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ju(eu)
              }), null === eu && null !== Wu && (0, eQ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ju(Wu.key, {
                  item: EQ(Ju, Wu.item)
                })
              }), Au && (0, eQ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ju(Au.key, {
                  target: EQ(Ju, Au.target),
                  amount: String(null !== (yu = Au.jJ) && void 0 !== yu ? yu : 0)
                })
              }), (0, eQ.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, eQ.jsx)(xX, {
                  item: XE,
                  jJ: Xu.baf2ColSa,
                  need: mE.NOVA_SA,
                  cap: mE.SA_CAP
                }), (0, eQ.jsx)(xX, {
                  item: VE,
                  jJ: Xu.baf2ColGd,
                  need: mE.NOVA_GD,
                  cap: mE.GD_CAP
                }), (0, eQ.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, eQ.jsx)(SX, {
                    item: "Nova Matter"
                  }), (0, eQ.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: Ju(`${KX}colNovaHeld`, {
                      amount: String(Xu.baf2ColOut),
                      cap: String(mE.OUT_CAP)
                    })
                  }), ju && (0, eQ.jsx)(bm.l, {
                    className: "Baf2ColTake",
                    disabled: 0 === Xu.baf2ColOut,
                    onClick: () => {
                      Nu.send(gN(Xu, "take"))
                    },
                    children: Ju(`${KX}colTake`)
                  })]
                })]
              }), ju && (0, eQ.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": ku,
                className: CK()("Baf2ColHold", {
                  On: ku
                }),
                onClick: uu => {
                  uu.detail > 0 && uu.currentTarget.blur(), Bu(!ku), Nu.send(gN(Xu, "hold " + (ku ? 0 : 1)))
                },
                children: [(0, eQ.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, eQ.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, eQ.jsx)("b", {
                    children: Ju(`${KX}colHold`)
                  }), (0, eQ.jsx)("span", {
                    children: Ju(`${KX}colHoldNote`)
                  })]
                })]
              })]
            }), (0, eQ.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, eQ.jsx)(rX, {
                status: Xu,
                entry: Vu
              }), (0, eQ.jsx)("ul", {
                className: "Baf2ColSlots",
                children: ZN(Xu.baf2ColLasers, Xu.baf2ColSpots, Xu.baf2ColLive, du.beamsOn, null !== (Ku = Xu.baf2ColGaps) && void 0 !== Ku ? Ku : 0).map((uu => (0, eQ.jsxs)("li", {
                  className: uu.tone,
                  children: [(0, eQ.jsx)("b", {
                    children: NX(Ju, uu.title)
                  }), null !== uu.hint && (0, eQ.jsx)("span", {
                    children: NX(Ju, uu.hint)
                  })]
                }, uu.dir)))
              }), (0, eQ.jsx)(BX, {
                status: Xu
              })]
            })]
          })]
        })
      })
    }
    const WX = "buildAFactory2Game:",
      jX = 36e5,
      HX = 864e5;

    function dX(uu, Ru, yu) {
      return Math.max(0, Math.ceil((uu + Ru - Math.max(yu, uu)) / 1e3))
    }

    function bX(uu) {
      return uu.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function CX(uu) {
      return "Homestead" === uu
    }

    function kX(uu) {
      return function(uu) {
        let Ru = 0;
        for (const yu of uu) {
          const uu = /^Island ([1-9]\d{0,5})$/.exec(yu);
          uu && (Ru = Math.max(Ru, Number(uu[1])))
        }
        return `Island ${Ru+1}`
      }(uu.map((uu => uu.baf2IslandName)))
    }

    function eX(uu, Ru) {
      return function(uu) {
        return `${WX}islandsBlocked${uu[0].toUpperCase()}${uu.slice(1)}`
      }("degraded" === uu && 0 === Ru ? "stuck" : uu)
    }

    function AX(uu) {
      return uu.filter((uu => {
        var Ru;
        return !uu.baf2IslandActive && void 0 === uu.baf2IslandUnreadable && void 0 === (null === (Ru = uu.baf2IslandCoop) || void 0 === Ru ? void 0 : Ru.baf2CoopState)
      })).length
    }

    function DX(uu) {
      return "coopMoving" === uu || "coopUnreachable" === uu
    }

    function MX(uu, Ru) {
      const yu = Ru > 0;
      return {
        change: null === uu && !yu,
        switch: (null === uu || "degraded" === uu || DX(uu)) && !yu,
        rename: "loading" !== uu && "degraded" !== uu && "stuck" !== uu
      }
    }

    function IX(uu, Ru) {
      return void 0 === uu || "corrupt" === uu && Ru
    }
    const GX = sm;

    function UX(uu, Ru, yu) {
      if (null !== uu && void 0 !== uu && uu.untilGone) {
        var Eu;
        return !("dismiss" === uu.untilGone && void 0 === (null === (Eu = Ru.baf2IslandCoop) || void 0 === Eu ? void 0 : Eu.baf2CoopState)) && yu - uu.atMs < 32500
      }
      return void 0 !== uu && yu - uu.atMs < GX && Ru.baf2IslandName === uu.from
    }
    const nX = sm;

    function sX(uu) {
      return "core" === (null === uu || void 0 === uu ? void 0 : uu.kind) ? uu.core : "islands" === (null === uu || void 0 === uu ? void 0 : uu.kind) ? uu.backToCore : void 0
    }

    function tX(uu) {
      return `\0${uu}\0`
    }

    function lX(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Eu = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Qu of Object.keys(yu)) Eu[Qu] = tX(Qu);
      let Ku = Object.keys(Eu).length > 0 ? uu(Ru, Eu) : uu(Ru);
      for (const [Qu, mu] of Object.entries(yu)) Ku = Ku.split(tX(Qu)).join(mu);
      return Ku
    }

    function gX(uu, Ru) {
      return uu ? Ru ? "enabled" : "disabled" : "hidden"
    }
    const cX = {
      removed: `${WX}islandsCoopRemoved`,
      deleted: `${WX}islandsCoopDeleted`,
      notReady: `${WX}islandsCoopNotReady`,
      gone: `${WX}islandsCoopGone`
    };

    function LX(uu) {
      var Ru;
      return "member" !== (null === (Ru = uu.baf2IslandCoop) || void 0 === Ru ? void 0 : Ru.baf2CoopRole) && "newer" !== uu.baf2IslandUnreadable
    }

    function zX(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = uu.baf2IslandActive,
        Ju = uu.baf2IslandUnreadable,
        Nu = uu.baf2IslandCoop,
        Xu = function(uu, Ru, yu) {
          return {
            switch: uu.switch && void 0 === Ru,
            delete: uu.change && IX(Ru, yu)
          }
        }(Ru, Ju, Eu),
        Vu = mu && void 0 !== Nu && void 0 === Nu.baf2CoopState && "coopUnreachable" === Qu,
        ru = {
          switch: gX((!mu || Vu) && void 0 === Ju, Vu || Xu.switch),
          switchLabel: Vu ? "tryAgain" : "switch",
          rename: gX(!0, Ru.rename),
          delete: gX(!mu, Xu.delete),
          deleteWaits: !mu && IX(Ju, Eu),
          people: gX(void 0 !== uu.baf2IslandInvitable || Ku && mu && void 0 === Ju && void 0 === Nu, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Bu = !mu && Xu.delete;
      if (void 0 === Nu) return yu ? {
        ...ru,
        delete: gX(!mu, !1),
        deleteWaits: !1,
        note: Bu ? {
          key: `${WX}islandsCoopKeepOwn`
        } : null
      } : ru;
      const xu = Nu.baf2CoopState,
        Su = Nu.baf2CoopMembers.length > 1,
        pu = {
          ...ru,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== xu && "member" === Nu.baf2CoopRole) return {
        ...pu,
        dismiss: gX(!0, Ru.rename),
        note: {
          key: cX[xu],
          names: {
            owner: Nu.baf2CoopOwner
          }
        }
      };
      if (void 0 !== xu) {
        let uu = {
          key: `${WX}islandsCoopOwnLost`
        };
        return Bu && Su ? uu = {
          key: `${WX}islandsCoopDeleteMembers`
        } : Bu && yu && (uu = {
          key: `${WX}islandsCoopKeepOwn`
        }), {
          ...pu,
          delete: gX(!mu, Xu.delete && !Su && !yu),
          deleteWaits: ru.deleteWaits && !Su && !yu,
          note: uu
        }
      }
      if ("member" === Nu.baf2CoopRole) return {
        ...ru,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: gX(!0, mu ? Ru.switch : Ru.rename)
      };
      const Tu = Nu.baf2CoopManageHere;
      let Wu = null;
      var ju;
      Tu || mu ? Bu && Su ? Wu = {
        key: `${WX}islandsCoopDeleteMembers`
      } : Bu && yu && (Wu = {
        key: `${WX}islandsCoopKeepOwn`
      }) : Wu = {
        key: null !== (ju = Nu.baf2CoopLeft) && void 0 !== ju && ju.length ? `${WX}islandsCoopManageThereClaim` : `${WX}islandsCoopManageThere`
      };
      return {
        ...ru,
        rename: gX(!0, Ru.rename && Tu),
        delete: gX(!mu, Xu.delete && !Su && !yu),
        deleteWaits: ru.deleteWaits && !Su && !yu,
        people: "enabled",
        peopleLabel: "players",
        unshare: gX(Tu && mu && !Su, Ru.change),
        remove: Tu,
        note: Wu
      }
    }

    function FX(uu) {
      var Ru;
      const yu = uu.baf2IslandCoop;
      if ("owner" !== (null === yu || void 0 === yu ? void 0 : yu.baf2CoopRole) || void 0 !== yu.baf2CoopState || null === (Ru = yu.baf2CoopLeft) || void 0 === Ru || !Ru.length) return null;
      const Eu = uu.baf2IslandActive && yu.baf2CoopManageHere;
      return {
        left: yu.baf2CoopLeft,
        claim: Eu,
        goThere: !Eu && yu.baf2CoopManageHere
      }
    }

    function wX(uu) {
      return uu.baf2CoopMembers.length >= uu.baf2CoopMax
    }

    function ZX(uu, Ru, yu) {
      return void 0 !== uu && Ru < uu.answer && yu - uu.atMs < GX
    }
    const hX = "buildAFactory2Game:";

    function PX(uu, Ru) {
      return {
        onKeyDown: yu => {
          yu.stopPropagation(), yu.nativeEvent.isComposing || 229 === yu.nativeEvent.keyCode || ("Enter" === yu.key ? (yu.preventDefault(), uu()) : "Escape" === yu.key && (yu.preventDefault(), Ru()))
        }
      }
    }

    function iX(uu) {
      return {
        onKeyDown: Ru => {
          "Escape" !== Ru.key || Ru.nativeEvent.isComposing || (Ru.preventDefault(), Ru.stopPropagation(), uu())
        }
      }
    }

    function YX(uu) {
      uu.currentTarget.select()
    }

    function oX(uu, Ru) {
      (0, Eu.useEffect)((() => {
        var yu;
        uu && (null === (yu = Ru.current) || void 0 === yu || yu.scrollIntoView({
          block: "nearest"
        }))
      }), [uu, Ru])
    }

    function qX(uu) {
      const [Ru, yu] = (0, Eu.useState)(null);
      return (0, Eu.useEffect)((() => {
        const Ru = document.querySelector(".UiRequests"),
          Eu = uu.current;
        if (!Ru || !Eu || "undefined" === typeof ResizeObserver) return;
        const Ku = () => {
          const uu = Ru.getBoundingClientRect(),
            Ku = Eu.getBoundingClientRect(),
            Qu = Eu.parentElement,
            mu = Qu && parseFloat(getComputedStyle(Qu).paddingTop) || 0,
            Ju = function(uu, Ru, yu, Eu) {
              if (!uu || uu.height <= 0 || uu.right <= Ru.left || uu.left >= Ru.right) return null;
              const Ku = Math.max(Eu, uu.bottom + 8);
              return {
                marginTop: Math.round(Ku - Eu),
                maxHeight: Math.max(0, Math.floor(yu - Ku - Eu))
              }
            }(uu, Ku, window.innerHeight, mu);
          yu((uu => (null === uu || void 0 === uu ? void 0 : uu.marginTop) === (null === Ju || void 0 === Ju ? void 0 : Ju.marginTop) && (null === uu || void 0 === uu ? void 0 : uu.maxHeight) === (null === Ju || void 0 === Ju ? void 0 : Ju.maxHeight) ? uu : Ju))
        };
        Ku();
        const Qu = new ResizeObserver(Ku);
        return Qu.observe(Ru), window.addEventListener("resize", Ku), () => {
          Qu.disconnect(), window.removeEventListener("resize", Ku)
        }
      }), [uu]), Ru
    }

    function OX(uu) {
      (0, Eu.useEffect)((() => {
        var Ru;
        null === (Ru = uu.current) || void 0 === Ru || Ru.focus()
      }), [uu])
    }

    function vX(uu) {
      const [Ru, yu] = (0, Eu.useState)(Date.now);
      return (0, Eu.useEffect)((() => {
        const Ru = window.setInterval((() => {
          yu(Date.now())
        }), uu);
        return () => {
          window.clearInterval(Ru)
        }
      }), [uu]), Ru
    }

    function aX(uu) {
      let {
        tier: Ru,
        t: yu
      } = uu;
      const {
        kind: Eu,
        short: Ku
      } = Tu(Ru), Qu = xu(Ru, Su), mu = yu(`${hX}${Qu.key}`, {
        ...Qu.params,
        name: yu(`${hX}${Wu(Ru).nameKey}`)
      });
      return (0, eQ.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, eQ.jsx)("span", {
          className: CK()("Baf2IslandTierPip", {
            Stage: "tier" !== Eu
          }),
          "aria-hidden": "true",
          children: Ku
        }), mu]
      })
    }

    function fX(uu) {
      let {
        note: Ru,
        className: yu,
        t: Eu
      } = uu;
      return (0, eQ.jsx)("p", {
        className: CK()("Baf2IslandNote", yu),
        children: lX(Eu, Ru.key, Ru.names, Ru.params)
      })
    }
    const uV = "buildAFactory2Game:";

    function RV(uu) {
      let {
        message: Ru,
        arrivedAtMs: yu,
        close: Ku,
        leave: Qu
      } = uu;
      const mu = Fm(),
        {
          t: Ju
        } = (0, DK.E)(),
        Nu = vX(1e3),
        Xu = (0, Eu.useRef)(null);
      (0, Eu.useEffect)((() => {
        var uu;
        null === (uu = Xu.current) || void 0 === uu || uu.focus()
      }), []);
      const Vu = dX(yu, Ru.baf2TransferInMs, Nu),
        ru = yu + Ru.baf2TransferInMs - 1e3,
        [Bu, xu] = (0, Eu.useState)(null);
      (0, Eu.useEffect)((() => {
        const uu = window.setTimeout((() => {
          xu(ru)
        }), Math.max(0, ru - Date.now()));
        return () => {
          window.clearTimeout(uu)
        }
      }), [ru]);
      const Su = Bu === ru || Nu >= ru,
        pu = Ru.baf2TransferIsland,
        Tu = Ru.baf2TransferOwner;
      return (0, eQ.jsx)(dm.e, {
        close: Ku,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, eQ.jsxs)("section", {
          ref: Xu,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsxs)("div", {
              children: [(0, eQ.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === Tu ? lX(Ju, `${uV}islandsTransferOwn`, {
                  island: pu
                }) : lX(Ju, `${uV}islandsTransfer`, {
                  island: pu,
                  owner: Tu
                })
              }), (0, eQ.jsx)("p", {
                children: Su ? Ju(`${uV}islandsTransferNow`) : Ju(`${uV}islandsTransferIn`, {
                  time: dQ(Ju, Vu)
                })
              })]
            }), (0, eQ.jsx)(bm.h, {
              ariaLabel: Ju(`${uV}islandsClose`),
              onClick: Ku
            })]
          }), !Su && (0, eQ.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, eQ.jsx)("p", {
              className: "Baf2TransferNote",
              children: Ju(`${uV}islandsTransferNote`)
            }), (0, eQ.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, eQ.jsx)(bm.e, {
                onClick: () => {
                  mu.send("baf2coopstay"), Qu()
                },
                children: Ju(`${uV}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var yV = yu(1400),
      EV = yu(1114),
      KV = yu.n(EV);
    const QV = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const mV = "buildAFactory2Game:",
      JV = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function NV(uu, Ru, yu) {
      return void 0 === Ru ? yu : "string" === typeof Ru ? Ru : Array.isArray(Ru) ? Ru.map((Ru => "string" === typeof Ru ? Ru : "translationKey" in Ru ? uu(Ru.translationKey) : "")).join("") : uu(Ru.translationKey)
    }

    function XV(uu) {
      const Ru = {};
      for (const [yu, Eu] of Object.entries(null !== uu && void 0 !== uu ? uu : {})) Ru[yu] = Eu < 0 ? HQ(Eu) : Eu.toLocaleString("en-US");
      return Ru
    }

    function VV(uu, Ru) {
      const yu = Ru ? "touch" : "mouse";
      return {
        use: uu(`${mV}lookUse_${yu}`),
        Use: uu(`${mV}lookUseStart_${yu}`)
      }
    }
    const rV = (0, Eu.memo)((function(uu) {
      let {
        item: Ru
      } = uu;
      return (0, eQ.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, eQ.jsx)(IK.c, {
          itemName: Ru,
          amount: 0
        })
      })
    }));

    function BV(uu) {
      let {
        label: Ru,
        percent: yu,
        progress: Eu
      } = uu;
      return (0, eQ.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${Ru}: ${Eu}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": yu,
          children: (0, eQ.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${yu}%`
            }
          })
        }), (0, eQ.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Eu
        })]
      })
    }

    function xV(uu) {
      let {
        chips: Ru
      } = uu;
      return (0, eQ.jsx)("span", {
        className: "Baf2QuestChips",
        children: Ru.map((uu => {
          let [Ru, yu, Eu] = uu;
          const Ku = yu >= Eu;
          return (0, eQ.jsxs)("span", {
            className: CK()("Baf2QuestChip", {
              Met: Ku
            }),
            children: [(0, eQ.jsx)(rV, {
              item: Ru
            }), (0, eQ.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Ku ? `\u2713${Eu}` : `${yu}/${Eu}`
            })]
          }, Ru)
        }))
      })
    }

    function SV(uu, Ru) {
      const {
        key: yu,
        params: Eu
      } = xu(Ru, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return uu(`${mV}${yu}`, {
        ...Eu,
        name: uu(`${mV}${Wu(Ru).nameKey}`)
      })
    }

    function pV(uu) {
      let {
        core: Ru,
        t: yu
      } = uu;
      const [Eu, Ku] = Ru, Qu = Ku > 0 ? Math.floor(100 * Eu / Ku) : 100;
      return (0, eQ.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": yu(`${mV}questCoreLabel`, {
          have: String(Eu),
          need: String(Ku)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Qu,
        children: [(0, eQ.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: yu(`${mV}questCore`, {
            percent: String(Qu)
          })
        }), (0, eQ.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, eQ.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Qu}%`
            }
          })
        })]
      })
    }

    function TV(uu) {
      let {
        rows: Ru,
        t: yu
      } = uu;
      const Eu = Ru.filter((uu => uu.done)).length;
      return (0, eQ.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": yu(`${mV}questStepsProgress`, {
          done: String(Eu),
          total: String(Ru.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": Ru.length,
        "aria-valuenow": Eu,
        children: Ru.map((uu => (0, eQ.jsx)("span", {
          className: CK()("Baf2QuestSegment", {
            Done: uu.done,
            Current: uu.current
          })
        }, uu.id)))
      })
    }
    const WV = (0, Eu.memo)(HV, jV);

    function jV(uu, Ru) {
      const yu = yu => uu.view.itemNames[yu] === Ru.view.itemNames[yu];
      return uu.t === Ru.t && uu.extra === Ru.extra && (null === uu.row.item || yu(uu.row.item)) && uu.row.madeFor.every(yu) && uu.row.also.every(yu) && KV()(uu.row, Ru.row)
    }

    function HV(uu) {
      let {
        row: Ru,
        view: yu,
        t: Eu,
        extra: Ku
      } = uu;
      const {
        isTouchScreen: Qu
      } = (0, HK.j)(["isTouchScreen"]), mu = Ru.item ? function(uu, Ru, yu) {
        return 1 !== yu && QV.has(uu) ? AK(Ru) : null
      }(Ru.key, Ru.item, Ru.total) : null, Ju = mu ? Eu(mu) : Ru.item ? NV(Eu, yu.itemNames[Ru.item], Ru.item) : "", Nu = Ru.also.map((uu => NV(Eu, yu.itemNames[uu], uu))), Xu = Nu.join(", "), Vu = function(uu, Ru) {
        var yu;
        return Ru.length < 2 ? null !== (yu = Ru[0]) && void 0 !== yu ? yu : "" : uu(`${mV}listAnd`, {
          rest: Ru.slice(0, -1).join(uu(`${mV}listComma`)),
          last: Ru[Ru.length - 1]
        })
      }(Eu, [Ju, ...Nu]), ru = Eu(`${mV}${Ru.key}`, {
        ...VV(Eu, Qu),
        ...XV(Ru.params),
        item: Ju,
        also: Xu,
        itemList: Vu,
        total: String(Ru.total)
      }), [Bu, ...xu] = ru.split("\n"), Su = Ru.total > 1 && !Ru.done && !Ru.away;
      return (0, eQ.jsxs)("li", {
        className: CK()("Baf2QuestStep", {
          Done: Ru.done,
          Current: Ru.current,
          JustFinished: Ru.justFinished,
          Away: Ru.away
        }),
        children: [!Ru.done && null !== Ru.item && (0, eQ.jsx)(rV, {
          item: Ru.item
        }), (Ru.done || null === Ru.item) && (0, eQ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: Ru.done ? "\u2713" : "\u25cb"
        }), (0, eQ.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, eQ.jsx)("strong", {
            children: Bu
          }), xu.length > 0 && (0, eQ.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: xu.join(" ")
          }), !Ru.done && Ru.madeFor.length > 0 && (0, eQ.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Eu("buildAFactory2Game:questRowFor", {
              items: Ru.madeFor.map((uu => NV(Eu, yu.itemNames[uu], uu))).join(" \u2192 ")
            })
          }), Su && (0, eQ.jsx)(BV, {
            label: Bu,
            percent: Math.round(100 * Ru.amount / Ru.total),
            progress: `${Ru.amount.toLocaleString("en-US")}/${Ru.total.toLocaleString("en-US")}`
          }), !Ru.done && !Ru.away && Ru.chips && Ru.chips.length > 0 && (0, eQ.jsx)(xV, {
            chips: Ru.chips
          }), Ku]
        })]
      })
    }

    function dV(uu, Ru) {
      let [yu, Eu] = Ru;
      return uu(`${mV}${yu}`, XV(Eu))
    }

    function bV(uu) {
      let [Ru, yu] = uu;
      return Ru + JSON.stringify(yu)
    }

    function CV(uu) {
      let {
        goal: Ru,
        t: yu
      } = uu;
      return Ru ? (0, eQ.jsx)("span", {
        className: "Baf2BookGoal",
        children: yu(`${mV}${Ru}`)
      }) : null
    }

    function kV(uu) {
      let {
        view: Ru,
        t: yu
      } = uu;
      if (!Ru.name) return null;
      const Eu = ZK(Ru.rows);
      return (0, eQ.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: yu(`${mV}currentQuest`)
        }), (0, eQ.jsx)("strong", {
          className: "Baf2BookTitle",
          children: dV(yu, Ru.name)
        }), (0, eQ.jsx)(CV, {
          goal: Ru.goal,
          t: yu
        }), Eu.length > 1 && (0, eQ.jsx)(TV, {
          rows: Eu,
          t: yu
        }), (0, eQ.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: Ru.rows.map((uu => (0, eQ.jsx)(WV, {
            row: uu,
            view: Ru,
            t: yu
          }, uu.id)))
        }), Ru.reward && (0, eQ.jsxs)("span", {
          className: "Baf2BookReward",
          children: [yu(`${mV}questReward`), (0, eQ.jsx)(rV, {
            item: Ru.reward
          }), NV(yu, Ru.itemNames[Ru.reward], Ru.reward)]
        })]
      })
    }

    function eV(uu) {
      let {
        quest: Ru,
        upcoming: yu,
        t: Eu
      } = uu;
      return (0, eQ.jsxs)("li", {
        className: CK()("Baf2BookQuest", {
          Done: Ru[3],
          Upcoming: yu
        }),
        children: [(0, eQ.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: Ru[3] ? "\u2713" : "\u25cb"
        }), (0, eQ.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, eQ.jsx)("strong", {
            className: "Baf2BookTitle",
            children: dV(Eu, Ru)
          }), (0, eQ.jsx)(CV, {
            goal: Ru[2],
            t: Eu
          })]
        })]
      })
    }

    function AV(uu) {
      let {
        done: Ru,
        total: yu,
        t: Eu
      } = uu;
      const Ku = yu > 0 ? Math.round(100 * Ru / yu) : 0,
        Qu = Eu(`${mV}questBookChapterProgress`, {
          done: String(Ru),
          total: String(yu)
        });
      return (0, eQ.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Qu,
          "aria-valuemin": 0,
          "aria-valuemax": yu,
          "aria-valuenow": Ru,
          children: (0, eQ.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Ku}%`
            }
          })
        }), (0, eQ.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Qu
        })]
      })
    }

    function DV(uu) {
      let {
        view: Ru,
        tier: yu,
        quests: Eu,
        t: Ku
      } = uu;
      const Qu = yu === Ru.tier,
        mu = (null !== Eu && void 0 !== Eu ? Eu : []).filter((uu => !uu[4])),
        Ju = (null !== Eu && void 0 !== Eu ? Eu : []).filter((uu => uu[4])),
        Nu = mu.filter((uu => uu[3])).length,
        Xu = Qu && Ru.name ? bV(Ru.name) : null,
        Vu = mu.findIndex((uu => !uu[3] && bV(uu) === Xu));
      return (0, eQ.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, eQ.jsx)("h3", {
            children: SV(Ku, yu)
          }), mu.length > 0 && (0, eQ.jsx)(AV, {
            done: Nu,
            total: mu.length,
            t: Ku
          }), Qu && Ru.core && (0, eQ.jsx)(pV, {
            core: Ru.core,
            t: Ku
          })]
        }), (0, eQ.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Eu && Qu && (0, eQ.jsx)(kV, {
            view: Ru,
            t: Ku
          }), mu.map(((uu, yu) => yu === Vu ? (0, eQ.jsx)(kV, {
            view: Ru,
            t: Ku
          }, bV(uu)) : (0, eQ.jsx)(eV, {
            quest: uu,
            upcoming: !uu[3],
            t: Ku
          }, bV(uu))))]
        }), Qu && Ru.side && (0, eQ.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, eQ.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Ku(`${mV}questSide`)
          }), (0, eQ.jsx)("strong", {
            className: "Baf2BookTitle",
            children: dV(Ku, Ru.side.name)
          }), (0, eQ.jsx)(CV, {
            goal: Ru.side.goal,
            t: Ku
          }), (0, eQ.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, eQ.jsx)(WV, {
              row: Ru.side.row,
              view: Ru,
              t: Ku
            })
          })]
        }), Ju.length > 0 && (0, eQ.jsxs)(eQ.Fragment, {
          children: [(0, eQ.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Ku(`${mV}questBookSidesDone`)
          }), (0, eQ.jsx)("ol", {
            className: "Baf2BookQuests",
            children: Ju.map((uu => (0, eQ.jsx)(eV, {
              quest: uu,
              upcoming: !1,
              t: Ku
            }, bV(uu))))
          })]
        })]
      })
    }

    function MV(uu) {
      var Ru, yu, Qu;
      let {
        store: mu,
        close: Ju
      } = uu;
      const {
        t: Nu
      } = (0, DK.E)(), Xu = (0, yV.h)(lK, mu.get()), ru = null !== (Ru = Xu.tier) && void 0 !== Ru ? Ru : 1, [Bu, xu] = (0, Eu.useState)(null), Su = (null === Bu || void 0 === Bu ? void 0 : Bu.at) === ru ? Bu.tier : ru, Wu = (0, Eu.useRef)(null), ju = null !== Xu.chapters;
      (0, Eu.useEffect)((() => {
        var uu;
        Wu.current && (Wu.current.scrollTop = 0);
        const Ru = null === (uu = Wu.current) || void 0 === uu ? void 0 : uu.querySelector(".Baf2BookQuest.Current");
        if (Wu.current && Ru) {
          const uu = Ru.getBoundingClientRect().bottom - Wu.current.getBoundingClientRect().bottom;
          uu > 0 && (Wu.current.scrollTop += Math.min(uu, Ru.getBoundingClientRect().top - Wu.current.getBoundingClientRect().top))
        }
      }), [Su, ju]);
      const Hu = null === (yu = Xu.chapters) || void 0 === yu ? void 0 : yu.find((uu => {
        let [Ru] = uu;
        return Ru === Su
      }));
      return (0, eQ.jsx)(dm.e, {
        close: Ju,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, eQ.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: JV,
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Nu(`${mV}questBookTitle`)
            }), (0, eQ.jsx)(bm.h, {
              onClick: Ju
            })]
          }), (0, eQ.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Nu(`${mV}questBookChapters`),
            children: Ku.slice(0, Vu()).map(((uu, Ru) => {
              const yu = Ru + 1,
                {
                  kind: Eu,
                  short: Ku
                } = Tu(yu),
                Qu = pu(yu, ru),
                mu = Qu ? Nu(`${mV}coreAtomicHidden`) : SV(Nu, yu);
              return (0, eQ.jsx)("li", {
                children: (0, eQ.jsx)("button", {
                  type: "button",
                  className: CK()({
                    Stage: "tier" !== Eu,
                    Atomic: "atomic" === Eu,
                    Current: yu === ru,
                    Selected: yu === Su
                  }),
                  disabled: yu > ru,
                  "aria-pressed": yu === Su,
                  "aria-label": mu,
                  title: Qu ? void 0 : mu,
                  onClick: () => {
                    xu({
                      tier: yu,
                      at: ru
                    })
                  },
                  children: Qu ? "?" : Ku
                })
              }, uu.nameKey)
            }))
          }), (0, eQ.jsxs)("div", {
            ref: Wu,
            className: "Baf2BookBody",
            children: [FK(Xu) && Su === ru && (0, eQ.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Nu(`${mV}questBookAllDone`)
            }), (0, eQ.jsx)(DV, {
              view: Xu,
              tier: Su,
              quests: null !== (Qu = null === Hu || void 0 === Hu ? void 0 : Hu[1]) && void 0 !== Qu ? Qu : null,
              t: Nu
            })]
          })]
        })
      })
    }
    const IV = "buildAFactory2Game:";

    function GV(uu) {
      let {
        tiers: Ru,
        from: yu,
        tier: Eu,
        shown: Ku,
        cB: Qu
      } = uu;
      const {
        t: mu
      } = (0, DK.E)(), Ju = Ru.map(((uu, Ru) => {
        const Ju = yu + Ru,
          {
            kind: Nu,
            short: Xu
          } = Tu(Ju),
          Vu = pu(Ju, Eu);
        return (0, eQ.jsx)("li", {
          children: (0, eQ.jsx)("button", {
            type: "button",
            className: CK()({
              Stage: "tier" !== Nu,
              Silhouette: Vu,
              Reached: Ju <= Eu,
              Current: Ju === Eu,
              Next: Ju === Eu + 1,
              Selected: Ju === Ku
            }),
            disabled: Vu,
            "aria-pressed": Ju === Ku,
            "aria-label": Vu ? mu(`${IV}coreAtomicHidden`) : void 0,
            title: Vu ? void 0 : mu(`${IV}${uu.nameKey}`),
            onClick: () => {
              Qu(Ju)
            },
            children: Vu ? "?" : Xu
          })
        }, uu.nameKey)
      }));
      return (0, eQ.jsx)(eQ.Fragment, {
        children: Ju
      })
    }

    function UV(uu) {
      let {
        id: Ru,
        label: yu,
        tiers: Eu,
        from: Ku,
        ...Qu
      } = uu;
      return (0, eQ.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, eQ.jsx)("span", {
          id: Ru,
          className: "Baf2CoreLadderLabel",
          children: yu
        }), (0, eQ.jsx)("ol", {
          "aria-labelledby": Ru,
          children: (0, eQ.jsx)(GV, {
            ...Qu,
            tiers: Eu,
            from: Ku
          })
        })]
      })
    }

    function nV(uu) {
      const {
        t: Ru
      } = (0, DK.E)(), yu = Ku.findIndex((uu => void 0 !== uu.stage)), Eu = Ku.findIndex((uu => void 0 !== uu.reactorTier)), Qu = yu < 0 ? Ku : Ku.slice(0, yu), mu = yu < 0 ? [] : Ku.slice(yu, Eu < 0 ? void 0 : Eu), Nu = Eu < 0 || !Ju() ? [] : Ku.slice(Eu);
      return (0, eQ.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, eQ.jsx)(UV, {
          ...uu,
          id: "baf2CoreTiersLabel",
          label: Ru(`${IV}coreTiersLabel`),
          tiers: Qu,
          from: 1
        }), mu.length > 0 && (0, eQ.jsx)(UV, {
          ...uu,
          id: "baf2CoreStagesLabel",
          label: Ru(`${IV}coreStagesLabel`),
          tiers: mu,
          from: yu + 1
        }), Nu.length > 0 && (0, eQ.jsx)(UV, {
          ...uu,
          id: "baf2CoreAtomicLabel",
          label: Ru(`${IV}coreAtomicLabel`),
          tiers: Nu,
          from: Eu + 1
        })]
      })
    }
    const sV = "buildAFactory2Game:";

    function tV(uu) {
      let {
        item: Ru,
        itemNames: yu,
        children: Eu
      } = uu;
      return (0, eQ.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, eQ.jsx)(IK.c, {
            itemName: Ru,
            amount: 0
          })
        }), (0, eQ.jsx)(GK.d, {
          text: yu[Ru]
        }), Eu]
      })
    }

    function lV(uu) {
      const Ru = new Map;
      for (const {
          block: Eu
        }
        of uu.newDeposits) {
        var yu;
        Ru.set(Eu, (null !== (yu = Ru.get(Eu)) && void 0 !== yu ? yu : 0) + 1)
      }
      return [...Ru]
    }

    function gV(uu) {
      let {
        value: Ru,
        label: yu,
        more: Eu
      } = uu;
      return (0, eQ.jsxs)("li", {
        children: [(0, eQ.jsx)("strong", {
          children: Ru
        }), (0, eQ.jsx)("span", {
          children: yu
        }), Eu > 0 && (0, eQ.jsxs)("em", {
          children: ["+", Eu]
        })]
      })
    }

    function cV(uu) {
      let {
        items: Ru,
        itemNames: yu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)(), [Qu, mu] = (0, Eu.useState)(null), Ju = null !== Qu && Ru.includes(Qu) ? Qu : null;
      return (0, eQ.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, eQ.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Ku(`${sV}coreRewardUnlocks`)
        }), (0, eQ.jsx)("ul", {
          children: Ru.map((uu => (0, eQ.jsx)("li", {
            children: (0, eQ.jsx)("button", {
              type: "button",
              className: CK()("Baf2PanelIcon", {
                Picked: uu === Ju
              }),
              title: EQ(Ku, uu),
              "aria-label": EQ(Ku, uu),
              "aria-pressed": uu === Ju,
              onClick: () => {
                mu(uu === Ju ? null : uu)
              },
              children: (0, eQ.jsx)(IK.c, {
                itemName: uu,
                amount: 0
              })
            })
          }, uu)))
        }), (0, eQ.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== Ju && (0, eQ.jsxs)(eQ.Fragment, {
            children: [(0, eQ.jsx)(GK.d, {
              text: yu[Ju]
            }), " \xb7 ", (0, eQ.jsx)(GK.d, {
              text: yu[Gu(Ju)]
            })]
          }), null === Ju && Ku(`${sV}coreRecipeTap`)]
        })]
      })
    }

    function LV(uu) {
      var Ru, yu;
      let {
        def: Eu,
        tier: Ku,
        itemNames: Qu
      } = uu;
      const {
        t: mu
      } = (0, DK.E)(), Ju = Ku > 1 ? Wu(Ku - 1) : void 0, Nu = Math.round(2 * Eu.islandRadius), Xu = Ju ? Math.round(2 * Ju.islandRadius) : Nu, Vu = Ku >= 3 ? bE(Ku) : null;
      return (0, eQ.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, eQ.jsxs)("ul", {
          className: CK()("Baf2CoreStats", {
            Four: null !== Vu
          }),
          children: [(0, eQ.jsx)(gV, {
            value: `${Nu}\xd7${Nu}`,
            label: mu(`${sV}coreStatIsland`),
            more: Nu - Xu
          }), (0, eQ.jsx)(gV, {
            value: String(Eu.machineAllowance),
            label: mu(`${sV}coreStatMachines`),
            more: Eu.machineAllowance - (null !== (Ru = null === Ju || void 0 === Ju ? void 0 : Ju.machineAllowance) && void 0 !== Ru ? Ru : Eu.machineAllowance)
          }), (0, eQ.jsx)(gV, {
            value: String(Eu.beltAllowance),
            label: mu(`${sV}coreStatBelts`),
            more: Eu.beltAllowance - (null !== (yu = null === Ju || void 0 === Ju ? void 0 : Ju.beltAllowance) && void 0 !== yu ? yu : Eu.beltAllowance)
          }), null !== Vu && (0, eQ.jsx)(gV, {
            value: String(Vu),
            label: mu(`${sV}coreStatStorage`),
            more: Vu - (Ju ? bE(Ku - 1) : Vu)
          })]
        }), Eu.reward && (0, eQ.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, eQ.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: mu(`${sV}coreRewardItem`)
          }), (0, eQ.jsx)(tV, {
            item: Eu.reward,
            itemNames: Qu
          })]
        }), Eu.newDeposits.length > 0 && (0, eQ.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, eQ.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: mu(Eu.newDeposits.length > 1 ? `${sV}coreRewardDeposits` : `${sV}coreRewardDeposit`)
          }), lV(Eu).map((uu => {
            let [Ru, yu] = uu;
            return (0, eQ.jsx)(tV, {
              item: Ru,
              itemNames: Qu,
              children: yu > 1 && ` \xd7${yu}`
            }, Ru)
          }))]
        }), Eu.unlocks.length > 0 && (0, eQ.jsx)(cV, {
          items: Eu.unlocks,
          itemNames: Qu
        }), (0, eQ.jsx)(zV, {
          tier: Ku
        })]
      })
    }

    function zV(uu) {
      let {
        tier: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)(), Eu = pK[Ru];
      if (!Eu) return null;
      const Ku = SK(Ru, 0, 0).barrierMax !== SK(Ru - 1, 0, 0).barrierMax;
      return (0, eQ.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, eQ.jsx)(IK.c, {
            itemName: Ku ? NK.Chestplate : JK,
            amount: 0
          })
        }), yu(`${sV}gearPerkLine`, {
          perk: yu(`${sV}${Eu}`)
        })]
      })
    }

    function FV(uu, Ru) {
      return null === uu ? Ru : uu.value
    }

    function wV(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === uu || yu - uu.atMs >= Eu ? null : Ku(uu.value, Ru) ? uu.armed ? null : uu : uu.armed ? uu : {
        ...uu,
        armed: !0
      }
    }

    function ZV(uu, Ru) {
      const yu = Ru.filter((Ru => {
        var yu;
        return !1 !== (null === (yu = uu.get(Ru)) || void 0 === yu ? void 0 : yu.value)
      }));
      for (const [Eu, Ku] of uu) Ku.value && !Ru.includes(Eu) && yu.push(Eu);
      return yu
    }

    function hV(uu, Ru, yu, Ku) {
      const [Qu, mu] = (0, Eu.useState)((() => new Map)), Ju = () => {
        mu((Ru => function(uu, Ru, yu, Eu) {
          var Ku;
          let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            mu = null;
          for (const [Ju, Nu] of uu) {
            const Ku = wV(Nu, Ru(Ju), yu, Eu, Qu);
            Ku !== Nu && (mu ??= new Map(uu), null === Ku ? mu.delete(Ju) : mu.set(Ju, Ku))
          }
          return null !== (Ku = mu) && void 0 !== Ku ? Ku : uu
        }(Ru, uu, Date.now(), yu, Ku)))
      };
      (0, Eu.useEffect)((() => {
        Ju()
      }), [Ru, yu]), (0, Eu.useEffect)((() => {
        if (0 === Qu.size) return;
        const uu = Math.min(...[...Qu.values()].map((uu => uu.atMs))),
          Ru = setTimeout(Ju, Math.max(0, uu + yu - Date.now()) + 1);
        return () => {
          clearTimeout(Ru)
        }
      }), [Qu, Ru, yu]);
      return [Qu, (Ru, yu) => {
        mu((Eu => {
          const Qu = new Map(Eu);
          return Qu.set(Ru, function(uu, Ru, yu) {
            return {
              value: uu,
              atMs: yu,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(uu, Ru)
            }
          }(yu, uu(Ru), Date.now(), Ku)), Qu
        }))
      }]
    }
    const PV = "buildAFactory2Game:";

    function iV(uu) {
      let {
        message: Ru,
        itemNames: yu
      } = uu;
      const Ku = Fm(),
        {
          t: Qu
        } = (0, DK.E)(),
        [mu, Ju] = (0, Eu.useState)(!1),
        [Nu, Xu] = function(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sm;
          const [yu, Eu] = hV((Ru => uu.includes(Ru)), uu, Ru, Object.is);
          return [ZV(yu, uu), Eu]
        }(Ru.baf2CoreBankPaused),
        Vu = new Set(Nu),
        ru = [...Ru.baf2CoreBanked];
      for (const Eu of Vu) ru.some((uu => {
        let [Ru] = uu;
        return Ru === Eu
      })) || ru.push([Eu, 0]);
      return 0 === ru.length ? null : (0, eQ.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, eQ.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": mu,
          onClick: () => {
            Ju(!mu)
          },
          children: [(0, eQ.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Qu(`${PV}coreBankedLater`)
          }), (0, eQ.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: ru.map((uu => {
              let [Ru, yu] = uu;
              const Eu = Vu.has(Ru);
              return (0, eQ.jsxs)("span", {
                className: CK()({
                  Paused: Eu
                }),
                title: Eu ? Qu(`${PV}coreBankPausedTag`) : void 0,
                children: [(0, eQ.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, eQ.jsx)(IK.c, {
                    itemName: Ru,
                    amount: 0
                  })
                }), yu, Eu && (0, eQ.jsx)(MK.c, {
                  name: "pause"
                })]
              }, Ru)
            }))
          }), (0, eQ.jsx)(MK.c, {
            name: mu ? "angle-up" : "angle-down"
          })]
        }), mu && (0, eQ.jsxs)(eQ.Fragment, {
          children: [(0, eQ.jsx)("ul", {
            children: ru.map((uu => {
              let [Ru, Eu] = uu;
              const mu = Vu.has(Ru);
              return (0, eQ.jsxs)("li", {
                children: [(0, eQ.jsxs)(tV, {
                  item: Ru,
                  itemNames: yu,
                  children: [(0, eQ.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Eu
                  }), mu && (0, eQ.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Qu(`${PV}coreBankPausedTag`)
                  })]
                }), (0, eQ.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, eQ.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Eu,
                    onClick: () => {
                      Ku.send(`baf2corewithdraw ${Eu} ${Ru}`)
                    },
                    children: Qu(`${PV}coreTake`)
                  }), (0, eQ.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Ku.send(`${du} ${Ru}`), Xu(Ru, !mu)
                    },
                    children: Qu(mu ? `${PV}coreBankResume` : `${PV}coreBankStop`)
                  })]
                })]
              }, Ru)
            }))
          }), (0, eQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: Qu(`${PV}coreBankNote`)
          })]
        })]
      })
    }
    const YV = "buildAFactory2Game:";

    function oV(uu) {
      const Ru = Math.max(0, Math.floor(uu));
      return `${Math.floor(Ru/60)}:${String(Ru%60).padStart(2,"0")}`
    }

    function qV(uu) {
      let {
        item: Ru
      } = uu;
      return (0, eQ.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, eQ.jsx)(IK.c, {
          itemName: Ru,
          amount: 0
        })
      })
    }

    function OV() {
      return (0, eQ.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, eQ.jsx)(MK.c, {
          name: "bolt"
        })
      })
    }

    function vV(uu) {
      let {
        charge: Ru,
        hint: yu,
        itemNames: Eu
      } = uu;
      const Ku = Fm(),
        {
          t: Qu
        } = (0, DK.E)(),
        [mu, Ju, Nu, Xu, Vu, ru, Bu] = Ru,
        [xu, Su] = function(uu) {
          var Ru;
          let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sm,
            Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Ku, Qu] = hV((() => uu), uu, yu, Eu);
          return [FV(null !== (Ru = Ku.get("")) && void 0 !== Ru ? Ru : null, uu), uu => {
            Qu("", uu)
          }]
        }(Bu),
        pu = xu === Bu ? ru : !xu,
        Tu = Xu >= Vu,
        Wu = mu.find((uu => {
          let [, Ru, yu] = uu;
          return yu < .9 * Ru
        }));
      let ju = `${YV}coreChargeWaiting`,
        Hu = {};
      return Tu ? ju = `${YV}coreChargeDone` : xu ? ju = `${YV}coreChargeStopped` : pu && yu ? (ju = `${YV}${yu[0]}`, Hu = {
        item: EQ(Qu, yu[1])
      }) : pu && Wu ? (ju = `${YV}coreChargeShort`, Hu = {
        item: EQ(Qu, Wu[0])
      }) : pu && Ju > 0 && !Nu ? ju = `${YV}coreChargePower` : pu && (ju = `${YV}coreChargeRunning`), (0, eQ.jsxs)("div", {
        className: CK()("Baf2CoreCharge", {
          Waiting: !pu && !Tu,
          Done: Tu
        }),
        children: [(0, eQ.jsxs)("h4", {
          children: [Qu(`${YV}coreChargeTitle`), (0, eQ.jsx)("span", {
            children: Qu(`${YV}coreChargeProgress`, {
              done: oV(Xu),
              need: oV(Vu)
            })
          })]
        }), (0, eQ.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, eQ.jsx)("div", {
            style: {
              width: 100 * Math.min(Xu, Vu) / Vu + "%"
            }
          })
        }), (0, eQ.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [mu.map((uu => {
            var Ru;
            let [yu, Ku, mu] = uu;
            const Ju = mu >= .9 * Ku;
            return (0, eQ.jsxs)("li", {
              className: CK()({
                Done: Ju,
                Short: pu && !Ju
              }),
              children: [(0, eQ.jsx)(qV, {
                item: yu
              }), (0, eQ.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, eQ.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, eQ.jsx)(GK.d, {
                    text: null !== (Ru = Eu[yu]) && void 0 !== Ru ? Ru : yu
                  }), (0, eQ.jsx)("span", {
                    children: Qu(`${YV}coreChargeItem`, {
                      now: String(mu),
                      need: String(Ku)
                    })
                  })]
                }), (0, eQ.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, eQ.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*mu/Ku)}%`
                    }
                  })
                })]
              })]
            }, yu)
          })), Ju > 0 && (0, eQ.jsxs)("li", {
            className: CK()("Baf2CoreChargePower", {
              Short: pu && !Nu
            }),
            children: [(0, eQ.jsx)(OV, {}), (0, eQ.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, eQ.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, eQ.jsx)("span", {
                  children: Qu(`${YV}coreChargePowerRow`, {
                    power: vu(Ju)
                  })
                })
              })
            })]
          })]
        }), (0, eQ.jsx)("p", {
          className: "Baf2CoreHint",
          children: Qu(ju, Hu)
        }), !Tu && (pu || xu) && (0, eQ.jsx)("button", {
          type: "button",
          className: CK()("Baf2CoreChargeToggle", {
            Stopped: xu
          }),
          onClick: () => {
            Ku.send(Cu), Su(!xu)
          },
          children: Qu(xu ? `${YV}coreChargeRestart` : `${YV}coreChargeStop`)
        })]
      })
    }

    function aV(uu) {
      let {
        charge: Ru,
        reached: yu,
        itemNames: Eu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)();
      return (0, eQ.jsxs)("div", {
        className: CK()("Baf2CoreCharge", {
          Done: yu
        }),
        children: [(0, eQ.jsxs)("h4", {
          children: [Ku(`${YV}coreChargeTitle`), (0, eQ.jsx)("span", {
            children: Ku(`${YV}coreChargeSpecTime`, {
              time: oV(Ru.seconds)
            })
          })]
        }), (0, eQ.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Ru.items.map((uu => {
            var Ru;
            let {
              item: Qu,
              amount: mu
            } = uu;
            return (0, eQ.jsxs)("li", {
              className: CK()({
                Done: yu
              }),
              children: [(0, eQ.jsx)(qV, {
                item: Qu
              }), (0, eQ.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, eQ.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, eQ.jsx)(GK.d, {
                    text: null !== (Ru = Eu[Qu]) && void 0 !== Ru ? Ru : Qu
                  }), (0, eQ.jsx)("span", {
                    children: Ku(`${YV}coreChargeSpecItem`, {
                      need: String(mu)
                    })
                  })]
                })
              })]
            }, Qu)
          })), Ru.powerPerS > 0 && (0, eQ.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, eQ.jsx)(OV, {}), (0, eQ.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, eQ.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, eQ.jsx)("span", {
                  children: Ku(`${YV}coreChargePowerRow`, {
                    power: vu(Ru.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const fV = "buildAFactory2Game:";

    function ur(uu) {
      let {
        def: Ru,
        reached: yu,
        banked: Eu,
        itemNames: Ku
      } = uu;
      const {
        t: Qu
      } = (0, DK.E)();
      return (0, eQ.jsx)("ul", {
        className: "Baf2CoreCost",
        children: Ru.cost.map((uu => {
          let {
            item: Ru,
            amount: mu
          } = uu;
          const Ju = yu ? 0 : Eu(Ru);
          return (0, eQ.jsx)("li", {
            children: (0, eQ.jsx)(tV, {
              item: Ru,
              itemNames: Ku,
              children: (0, eQ.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: Ju > 0 ? Qu(`${fV}coreBankedFor`, {
                  amount: String(Ju),
                  total: String(mu)
                }) : `\xd7${mu}`
              })
            })
          }, Ru)
        }))
      })
    }

    function Rr(uu, Ru) {
      if (Ru >= Vu()) return uu(`${fV}coreMaxTier`);
      const yu = Xu[Ru + 1];
      return yu && !yu.startsWith("upgradeCore") ? uu(`${fV}coreGateQuest`, {
        quest: uu(`${fV}quest_${yu}`)
      }) : uu(`${fV}coreGateClosed`)
    }

    function yr() {
      const {
        t: uu
      } = (0, DK.E)(), Ru = Fm(), yu = (0, Eu.useRef)(null), Ku = (0, Eu.useRef)(Date.now());
      return oX(!0, yu), (0, eQ.jsx)("div", {
        ref: yu,
        className: "Baf2CoreGrow",
        children: (0, eQ.jsx)(bm.l, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Ku.current >= 600 && Ru.send(Hu)
          },
          children: uu(`${fV}coreGrow`)
        })
      })
    }

    function Er(uu) {
      let {
        message: Ru,
        itemNames: yu,
        next: Eu
      } = uu;
      const Ku = Fm(),
        {
          t: Qu
        } = (0, DK.E)(),
        mu = Ru.baf2CoreTier,
        Ju = Ru.baf2CoreReady,
        Nu = Ru.baf2CoreNeeds.filter((uu => {
          let [, Ru, yu, Eu] = uu;
          return Eu > 0 && Ru < yu
        })),
        Xu = Ru.baf2CoreNeeds.every((uu => {
          let [, Ru, yu] = uu;
          return Ru >= yu
        })),
        Vu = Ru.baf2CoreKeep;
      return (0, eQ.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [Ju && (0, eQ.jsx)(yr, {}), (0, eQ.jsx)("h3", {
            children: Qu(`${fV}coreBring`)
          }), (0, eQ.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: Ru.baf2CoreNeeds.map((uu => {
              let [Ru, Eu, mu, Ju] = uu;
              return (0, eQ.jsxs)("li", {
                className: CK()({
                  Done: Eu >= mu
                }),
                children: [(0, eQ.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, eQ.jsx)(IK.c, {
                    itemName: Ru,
                    amount: 0
                  })
                }), (0, eQ.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, eQ.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, eQ.jsx)(GK.d, {
                      text: yu[Ru]
                    }), (0, eQ.jsxs)("span", {
                      children: [Eu, "/", mu]
                    })]
                  }), (0, eQ.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, eQ.jsx)("div", {
                      style: {
                        width: 100 * Eu / mu + "%"
                      }
                    }), Ju > 0 && (0, eQ.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * Ju / mu + "%"
                      }
                    })]
                  })]
                }), Ju > 0 && Eu < mu && (0, eQ.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Ku.send(`${bu} ${Ru}`)
                  },
                  children: Qu(`${fV}coreDeposit`, {
                    amount: String(Ju)
                  })
                })]
              }, Ru)
            }))
          }), Ru.baf2CoreCharge && (0, eQ.jsx)(vV, {
            charge: Ru.baf2CoreCharge,
            hint: Ru.baf2CoreChargeHint,
            itemNames: yu
          }), !Ju && Nu.length > 1 && (0, eQ.jsx)(bm.l, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Ku.send(Hu)
            },
            children: Qu(`${fV}coreHandOver`)
          }), !Ju && void 0 !== Vu && (0, eQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: Qu(`${fV}coreKeepRest`, {
              item: EQ(Qu, Vu)
            })
          }), !Ju && !Xu && 0 === Nu.length && void 0 === Vu && (0, eQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: Qu(`${fV}coreNothingHeld`)
          }), (0, eQ.jsx)(iV, {
            message: Ru,
            itemNames: yu
          })]
        }), (0, eQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, eQ.jsx)("h3", {
            children: Qu(`${fV}coreRewards`)
          }), (0, eQ.jsx)(LV, {
            def: Eu,
            tier: mu + 1,
            itemNames: yu
          })]
        })]
      })
    }

    function Kr(uu) {
      let {
        message: Ru,
        itemNames: yu,
        shown: Eu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)(), Qu = Ru.baf2CoreTier, mu = Wu(Eu), Ju = Eu <= Qu, Nu = new Map(Ru.baf2CoreBanked), Xu = !ju(Qu, ku(Ru)) && Eu === Qu;
      return (0, eQ.jsxs)("div", {
        className: CK()("Baf2CoreBody", {
          Locked: !Ju
        }),
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, eQ.jsx)("h3", {
            children: Ku(Ju ? `${fV}coreItTook` : `${fV}coreItNeeds`)
          }), 0 === mu.cost.length && (0, eQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: Ku(`${fV}coreTierStart`)
          }), mu.cost.length > 0 && (0, eQ.jsx)(ur, {
            def: mu,
            reached: Ju,
            banked: uu => {
              var Ru;
              return function(uu, Ru, yu, Eu) {
                let Ku = uu;
                for (let mu = Ru + 2; mu <= yu; mu++) {
                  var Qu;
                  const uu = Wu(mu).cost.find((uu => uu.item === Eu)),
                    Ru = Math.min(Ku, null !== (Qu = null === uu || void 0 === uu ? void 0 : uu.amount) && void 0 !== Qu ? Qu : 0);
                  if (mu === yu) return Ru;
                  Ku -= Ru
                }
                return 0
              }(null !== (Ru = Nu.get(uu)) && void 0 !== Ru ? Ru : 0, Qu, Eu, uu)
            },
            itemNames: yu
          }), mu.charge && (0, eQ.jsx)(aV, {
            charge: mu.charge,
            reached: Ju,
            itemNames: yu
          }), Xu && (0, eQ.jsxs)(eQ.Fragment, {
            children: [(0, eQ.jsx)("p", {
              className: "Baf2CoreHint",
              children: Rr(Ku, Qu)
            }), (0, eQ.jsx)(iV, {
              message: Ru,
              itemNames: yu
            })]
          })]
        }), (0, eQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, eQ.jsx)("h3", {
            children: Ku(Ju ? `${fV}coreGave` : `${fV}coreLockedRewards`)
          }), (0, eQ.jsx)(LV, {
            def: mu,
            tier: Eu,
            itemNames: yu
          })]
        })]
      })
    }

    function Qr(uu, Ru) {
      const {
        key: yu,
        params: Eu
      } = xu(Ru - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return uu(`${fV}${yu}`, Eu)
    }
    const mr = "buildAFactory2Game:",
      Jr = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Nr = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function Xr(uu) {
      let {
        view: Ru,
        close: yu,
        askIslands: Ku
      } = uu;
      const {
        t: Qu
      } = (0, DK.E)(), [mu, Ju] = (0, Eu.useState)(!1);
      (0, Eu.useEffect)((() => {
        if (!mu) return;
        const uu = window.setTimeout((() => {
          Ju(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(uu)
        }
      }), [mu]);
      const {
        message: Nu,
        itemNames: Xu
      } = Ru, Vu = Nu.baf2CoreTier, ru = Wu(Vu), Bu = ju(Vu, ku(Nu)), [pu, Tu] = Nu.baf2CoreMachines, [Hu, du] = Nu.baf2CoreBelts, bu = Nu.baf2CoreStorage, Cu = Nu.baf2CoreReady, [eu, Au] = (0, Eu.useState)(null), Du = (null === eu || void 0 === eu ? void 0 : eu.at) === Vu && eu.ready === Cu ? eu.tier : Bu ? Vu + 1 : Vu;
      let Mu = "coreTierLocked";
      Du <= Vu ? Mu = "coreTierReached" : Du === Vu + 1 && (Mu = "coreTierNext");
      const Iu = Qu(`${mr}${Wu(Du).nameKey}`),
        Gu = Du === Vu + 1 ? Bu : null,
        Uu = xu(Du, {
          tier: Mu,
          stage: Jr[Mu],
          atomic: Nr[Mu]
        }),
        nu = Qu(`${mr}${Uu.key}`, {
          ...Uu.params,
          name: Iu
        }),
        su = xu(Vu, Su),
        tu = Qu(`${mr}${su.key}`, {
          ...su.params,
          name: Qu(`${mr}${ru.nameKey}`)
        });
      return (0, eQ.jsx)(dm.e, {
        close: yu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, eQ.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsxs)("div", {
              children: [(0, eQ.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Qu(`${mr}coreTitle`)
              }), void 0 !== Nu.baf2CoreIslandName && (0, eQ.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Nu.baf2CoreIslandName
              }), (0, eQ.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, eQ.jsx)("span", {
                  children: tu
                }), (0, eQ.jsx)("span", {
                  className: CK()({
                    Full: pu >= Tu
                  }),
                  children: Qu(`${mr}coreMachineCount`, {
                    amount: String(pu),
                    total: String(Tu)
                  })
                }), (0, eQ.jsx)("span", {
                  className: CK()({
                    Full: Hu >= du
                  }),
                  children: Qu(`${mr}coreBeltCount`, {
                    amount: String(Hu),
                    total: String(du)
                  })
                }), void 0 !== bu && (0, eQ.jsx)("span", {
                  className: CK()({
                    Full: bu[0] >= bu[1]
                  }),
                  children: Qu(`${mr}coreStorageCount`, {
                    amount: String(bu[0]),
                    total: String(bu[1])
                  })
                })]
              })]
            }), (0, eQ.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Nu.baf2CoreIslands && (0, eQ.jsx)(bm.e, {
                className: "Baf2CoreIslandsButton",
                disabled: mu,
                onClick: () => {
                  Ju(!0), Ku()
                },
                children: Qu(`${mr}islandsOpenButton`)
              }), (0, eQ.jsx)(bm.h, {
                onClick: yu
              })]
            })]
          }), (0, eQ.jsx)(nV, {
            tier: Vu,
            shown: Du,
            cB: uu => {
              Au({
                tier: uu,
                at: Vu,
                ready: Cu
              })
            }
          }), (0, eQ.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [nu, Du > Vu + 1 && (0, eQ.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: Qr(Qu, Du)
            })]
          }), 6 === Du && Du > Vu && (0, eQ.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Qu(`${mr}coreStagesNote`)
          }), 11 === Du && Du > Vu && (0, eQ.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Qu(`${mr}coreAtomicNote`)
          }), Gu && (0, eQ.jsx)(Er, {
            message: Nu,
            itemNames: Xu,
            next: Gu
          }), !Gu && (0, eQ.jsx)(Kr, {
            message: Nu,
            itemNames: Xu,
            shown: Du
          })]
        })
      })
    }
    const Vr = {
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
    const rr = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: JQ,
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

    function Br(uu) {
      return uu.baf2DropCometOreOnly ? "dropCometOre" : uu.baf2DropCometIsotope ? "seed" === uu.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function xr(uu) {
      let {
        message: Ru,
        quests: yu,
        close: Ku,
        leave: Qu
      } = uu;
      const mu = Fm(),
        {
          t: Ju
        } = (0, DK.E)(),
        Nu = (0, yV.h)(lK, yu.get()),
        Xu = function(uu) {
          var Ru;
          if (!su(uu.tutorial)) return null;
          const yu = uu.rows.find((uu => uu.current)),
            Eu = yu ? Vr[yu.key] : void 0;
          return null !== (Ru = null !== Eu && void 0 !== Eu ? Eu : uu.side ? Vr[uu.side.row.key] : void 0) && void 0 !== Ru ? Ru : null
        }(Nu),
        Vu = null === Nu.tier || VQ(Nu.tier),
        ru = Vu ? rr : rr.filter((uu => {
          let {
            item: Ru
          } = uu;
          return Ru !== JQ
        })),
        [Bu, xu] = (0, Eu.useState)(null),
        Su = null !== Bu && void 0 !== Bu ? Bu : !Ru.baf2DropFoundSalvage && Vu,
        pu = Ru.baf2DropRuinDistance,
        Tu = Ru.baf2DropComet,
        Wu = Ru.baf2DropOldWorks,
        ju = Ru.baf2DropGrove,
        Hu = function(uu) {
          return 2 + Number(void 0 !== uu.baf2DropComet) + Number(!!uu.baf2DropOwedComet || void 0 !== uu.baf2DropOwedWaitMinutes) + Number(void 0 !== uu.baf2DropDigDistance) + Number(void 0 !== uu.baf2DropOldWorks) + Number(void 0 !== uu.baf2DropGrove)
        }(Ru),
        du = uu => {
          mu.send(function(uu) {
            return `baf2drop ${uu}`
          }(uu)), Qu()
        };
      let bu = Ju("buildAFactory2Game:dropRuinNone");
      if (null !== pu) {
        let uu = Ru.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        Ru.baf2DropRuinOldWorks && (uu = "dropRuinOldWorks");
        const yu = void 0 === Ru.baf2DropRuinCluster ? Ju("buildAFactory2Game:dropRuinOpen") : Ju("buildAFactory2Game:dropRuinCluster", {
          count: String(Ru.baf2DropRuinCluster)
        });
        bu = `${Ju(`buildAFactory2Game:${uu}`,{distance:String(pu)})} ${yu}`
      }
      let Cu = Ju("buildAFactory2Game:dropBelowDescription");
      void 0 !== Ru.baf2DropBelowLook && (Cu = Ju("buildAFactory2Game:dropBelowLook", {
        look: Ju(Ru.baf2DropBelowLook)
      }));
      const ku = "buildAFactory2Game:wildsRegion_survivorGrove" === Ru.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        eu = dQ(Ju, 60 * function(uu) {
          const [Ru, yu] = (0, Eu.useState)((() => Date.now())), [Ku, Qu] = (0, Eu.useState)(Ru);
          return (0, Eu.useEffect)((() => {
            const uu = Date.now();
            yu(uu), Qu(uu)
          }), [uu]), (0, Eu.useEffect)((() => {
            const uu = window.setInterval((() => {
              Qu(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(uu)
            }
          }), []), Math.max(1, uu.baf2DropRenewMinutes - Math.floor((Ku - Ru) / 6e4))
        }(Ru)),
        Au = function(uu, Ru, yu) {
          return "ruin" === uu && !yu || "owed" === uu && !Ru.baf2DropOwedComet ? null : uu
        }(Xu, Ru, null !== pu),
        Du = function(uu) {
          for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
          return CK()("Baf2DropTile", ...yu, {
            Wanted: Au === uu
          })
        };
      return (0, eQ.jsx)(dm.e, {
        close: Ku,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, eQ.jsxs)("section", {
          className: CK()("Baf2Panel Baf2DropMap", {
            Many: Hu >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsxs)("div", {
              children: [(0, eQ.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: Ju("buildAFactory2Game:dropMapTitle")
              }), (0, eQ.jsx)("p", {
                children: Ju("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, eQ.jsx)(bm.h, {
              onClick: Ku
            })]
          }), (0, eQ.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== Tu && (0, eQ.jsxs)(bm.s, {
              className: Du("comet", "Baf2DropComet"),
              onClick: () => {
                du("comet")
              },
              children: [(0, eQ.jsx)("strong", {
                children: Ju("buildAFactory2Game:dropComet")
              }), (0, eQ.jsx)("span", {
                children: Ju(`buildAFactory2Game:${Br(Ru)}`, {
                  distance: String(Tu)
                })
              })]
            }), Ru.baf2DropOwedComet && (0, eQ.jsxs)(bm.s, {
              className: Du("owed", "Baf2DropComet"),
              onClick: () => {
                du("owed")
              },
              children: [(0, eQ.jsx)("strong", {
                children: Ju("buildAFactory2Game:dropOwedComet")
              }), (0, eQ.jsx)("span", {
                children: Ru.baf2DropOwedIsotope ? Ju("buildAFactory2Game:dropOwedIsotopeDescription") : Ju("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== Ru.baf2DropOwedWaitMinutes && (0, eQ.jsxs)(bm.s, {
              className: Du("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, eQ.jsx)("strong", {
                children: Ju("buildAFactory2Game:dropOwedComet")
              }), (0, eQ.jsx)("span", {
                children: Ju("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(Ru.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, eQ.jsxs)(bm.e, {
              className: Du("below"),
              onClick: () => {
                du("below")
              },
              children: [(0, eQ.jsx)("strong", {
                children: Ju("buildAFactory2Game:dropBelow")
              }), (0, eQ.jsx)("span", {
                children: Cu
              })]
            }), void 0 !== Ru.baf2DropDigDistance && (0, eQ.jsxs)(bm.n, {
              className: Du("dig"),
              onClick: () => {
                du("dig")
              },
              children: [(0, eQ.jsx)("strong", {
                children: Ju("buildAFactory2Game:dropDig")
              }), (0, eQ.jsx)("span", {
                children: Ju("buildAFactory2Game:dropDigDescription", {
                  distance: String(Ru.baf2DropDigDistance),
                  y: HQ(Ru.baf2DropDigY)
                })
              })]
            }), void 0 !== ju && (0, eQ.jsxs)(bm.n, {
              className: Du("grove", "Baf2DropGrove"),
              onClick: () => {
                du("grove")
              },
              children: [(0, eQ.jsx)("strong", {
                children: Ju("buildAFactory2Game:dropGrove")
              }), (0, eQ.jsx)("span", {
                children: Ju(`buildAFactory2Game:${ku}`, {
                  distance: String(ju)
                })
              })]
            }), (0, eQ.jsxs)(bm.l, {
              className: Du("ruin"),
              disabled: null === pu,
              onClick: () => {
                du("ruin")
              },
              children: [(0, eQ.jsx)("strong", {
                children: Ju("buildAFactory2Game:dropRuin")
              }), (0, eQ.jsx)("span", {
                children: bu
              })]
            }), void 0 !== Wu && (0, eQ.jsxs)(bm.F, {
              className: Du("works"),
              onClick: () => {
                du("works")
              },
              children: [(0, eQ.jsx)("strong", {
                children: Ju("buildAFactory2Game:dropOldWorks")
              }), (0, eQ.jsx)("span", {
                children: Ju("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(Wu)
                })
              })]
            })]
          }), (0, eQ.jsx)("p", {
            className: "Baf2DropRenew",
            children: Ju("buildAFactory2Game:dropRenew", {
              time: eu
            })
          }), (0, eQ.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: Su,
            onToggle: uu => {
              uu.currentTarget.open !== Su && xu(uu.currentTarget.open)
            },
            children: [(0, eQ.jsx)("summary", {
              children: Ju("buildAFactory2Game:dropSalvageWhat")
            }), (0, eQ.jsx)("p", {
              children: Ju("buildAFactory2Game:dropSalvageIntro")
            }), (0, eQ.jsx)("ul", {
              children: ru.map((uu => {
                let {
                  item: Ru,
                  nameKey: yu,
                  useKey: Eu,
                  params: Ku
                } = uu;
                return (0, eQ.jsxs)("li", {
                  children: [(0, eQ.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, eQ.jsx)(IK.c, {
                      itemName: Ru,
                      amount: 0
                    })
                  }), (0, eQ.jsxs)("span", {
                    children: [(0, eQ.jsx)("strong", {
                      children: Ju(yu)
                    }), ": ", Ju(Eu, Ku)]
                  })]
                }, Ru)
              }))
            })]
          })]
        })
      })
    }
    const Sr = "buildAFactory2Game:";

    function pr(uu, Ru) {
      return uu.sendIslandEdit(`baf2coopleave ${Ru.baf2IslandId}`)
    }

    function Tr(uu) {
      let {
        card: Ru,
        canRename: yu,
        done: Ku,
        t: Qu
      } = uu;
      const mu = Fm(),
        [Ju, Nu] = (0, Eu.useState)(Ru.baf2IslandName),
        Xu = bX(Ju),
        Vu = "" === Xu || CX(Xu),
        ru = () => {
          !Vu && yu && (Xu !== Ru.baf2IslandName ? Ku(mu.sendIslandEdit(`baf2islandrename ${Ru.baf2IslandId} ${Xu}`)) : Ku(null))
        },
        Bu = () => {
          Ku(null)
        };
      return (0, eQ.jsxs)("div", {
        className: "Baf2IslandForm",
        ...iX(Bu),
        children: [(0, eQ.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Qu(`${Sr}islandsRenameLabel`), (0, eQ.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Ju,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: YX,
            onChange: uu => {
              Nu(uu.target.value)
            },
            ...PX(ru, Bu)
          })]
        }), "" === Xu && (0, eQ.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Qu(`${Sr}islandsRenameEmpty`)
        }), CX(Xu) && (0, eQ.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Qu(`${Sr}islandsNameReserved`)
        }), (0, eQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, eQ.jsx)(bm.n, {
            disabled: Vu || !yu,
            onClick: ru,
            children: Qu(`${Sr}islandsRenameSave`)
          }), (0, eQ.jsx)(bm.e, {
            onClick: Bu,
            children: Qu(`${Sr}islandsCancel`)
          })]
        })]
      })
    }

    function Wr(uu) {
      let {
        card: Ru,
        canDelete: yu,
        done: Ku,
        t: Qu
      } = uu;
      const mu = Fm(),
        [Ju, Nu] = (0, Eu.useState)(""),
        Xu = function(uu, Ru) {
          return bX(uu).toLowerCase() === bX(Ru).toLowerCase()
        }(Ju, Ru.baf2IslandName),
        Vu = () => {
          Xu && yu && Ku(mu.sendIslandEdit(`baf2islanddelete ${Ru.baf2IslandId}`))
        },
        ru = () => {
          Ku(null)
        },
        Bu = tX("name"),
        [xu, Su = ""] = Qu(`${Sr}islandsDeleteConfirm`, {
          name: Bu
        }).split(Bu);
      return (0, eQ.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...iX(ru),
        children: [(0, eQ.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, eQ.jsxs)("span", {
            children: [xu, (0, eQ.jsx)("strong", {
              children: Ru.baf2IslandName
            }), Su]
          }), (0, eQ.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Ju,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: YX,
            onChange: uu => {
              Nu(uu.target.value)
            },
            ...PX(Vu, ru)
          })]
        }), FX(Ru) && (0, eQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Qu(`${Sr}islandsDeleteLeftBack`)
        }), (0, eQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, eQ.jsx)(bm.F, {
            disabled: !Xu || !yu,
            onClick: Vu,
            children: Qu(`${Sr}islandsDeleteForGood`)
          }), (0, eQ.jsx)(bm.e, {
            onClick: ru,
            children: Qu(`${Sr}islandsCancel`)
          })]
        })]
      })
    }

    function jr(uu) {
      let {
        members: Ru,
        t: yu
      } = uu;
      const Eu = Ru.length;
      return (0, eQ.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, eQ.jsxs)("span", {
          children: [1 === Eu ? yu(`${Sr}islandsPlayersOne`) : yu(`${Sr}islandsPlayers`, {
            count: String(Eu)
          }), " "]
        }), Ru.map(((uu, Ru) => (0, eQ.jsxs)("span", {
          className: CK()("Baf2IslandMember", {
            Here: uu.baf2MemberHere
          }),
          title: uu.baf2MemberHere ? yu(`${Sr}islandsPlayerHere`) : void 0,
          children: [uu.baf2MemberName, Ru < Eu - 1 ? ", " : ""]
        }, uu.baf2MemberKey)))]
      })
    }

    function Hr(uu) {
      let {
        card: Ru,
        answered: yu,
        nowMs: Ku,
        t: Qu
      } = uu;
      const mu = Fm(),
        [Ju, Nu] = (0, Eu.useState)(new Map),
        Xu = FX(Ru);
      if (!Xu) return null;
      return (0, eQ.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, eQ.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Qu(`${Sr}islandsLeftTitle`)
        }), (0, eQ.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Xu.left.map((uu => {
            const Eu = uu.baf2LeftKey,
              Vu = ZX(Ju.get(Eu), yu, Ku),
              ru = function(uu) {
                return 1 === uu ? [`${WX}islandsLeftItemsOne`] : [`${WX}islandsLeftItems`, {
                  count: String(uu)
                }]
              }(uu.baf2LeftItems);
            return (0, eQ.jsx)("li", {
              className: CK()("Baf2IslandPerson", {
                Pending: Vu
              }),
              children: (0, eQ.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, eQ.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: uu.baf2LeftName
                }), (0, eQ.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Qu(ru[0], ru[1])
                }), Xu.claim && (0, eQ.jsx)(bm.n, {
                  className: "Baf2IslandPersonButton",
                  disabled: Vu,
                  onClick: () => {
                    (uu => {
                      const yu = mu.sendIslandEdit(`baf2coopclaim ${Ru.baf2IslandId} ${uu}`);
                      Nu((Ru => new Map(Ru).set(uu, {
                        atMs: Date.now(),
                        answer: yu
                      })))
                    })(Eu)
                  },
                  children: Qu(`${Sr}islandsClaim`)
                })]
              })
            }, Eu)
          }))
        }), Xu.goThere && (0, eQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Qu(`${Sr}islandsClaimGoThere`)
        })]
      })
    }

    function dr(uu) {
      let {
        card: Ru,
        view: yu,
        blocked: Ku,
        maxIslands: Qu,
        answered: mu,
        nowMs: Ju,
        done: Nu,
        openSocial: Xu,
        t: Vu
      } = uu;
      const ru = Fm(),
        [Bu, xu] = (0, Eu.useState)(new Map),
        [Su, pu] = (0, Eu.useState)(new Map),
        [Tu, Wu] = (0, Eu.useState)(null),
        ju = (0, Eu.useRef)(null);
      OX(ju);
      const Hu = Ru.baf2IslandId,
        du = Ru.baf2IslandCoop,
        bu = null !== du && void 0 !== du && du.baf2CoopMembers.some((uu => uu.baf2MemberKey === Tu)) ? Tu : null,
        Cu = function(uu, Ru) {
          const yu = uu.baf2IslandCoop;
          return yu && wX(yu) || null !== Ru ? void 0 : uu.baf2IslandInvitable
        }(Ru, Ku),
        ku = function(uu, Ru) {
          const yu = uu.baf2IslandCoop;
          return yu && wX(yu) ? {
            key: `${WX}islandsCoopFull`,
            params: {
              max: String(yu.baf2CoopMax)
            }
          } : void 0 !== uu.baf2IslandInvitable && null === Ru || yu && !yu.baf2CoopManageHere ? null : "degraded" === Ru || "stuck" === Ru ? {
            key: `${WX}islandsInviteNotLoaded`
          } : null === Ru || function(uu) {
            return "notHome" === uu || "wilds" === uu || "visiting" === uu
          }(Ru) || DX(Ru) ? {
            key: `${WX}islandsInviteGoThere`
          } : {
            key: `${WX}islandsInviteBusy`
          }
        }(Ru, Ku),
        eu = () => {
          var uu;
          Wu(null), null === (uu = ju.current) || void 0 === uu || uu.focus()
        };
      return (0, eQ.jsxs)("div", {
        ref: ju,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...iX(null === bu ? Nu : eu),
        children: [du && (0, eQ.jsxs)(eQ.Fragment, {
          children: [(0, eQ.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Vu(`${Sr}islandsPlayersTitle`, {
              count: String(du.baf2CoopMembers.length),
              max: String(du.baf2CoopMax)
            })
          }), (0, eQ.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: du.baf2CoopMembers.map(((uu, Ru) => {
              const Eu = uu.baf2MemberKey,
                Ku = ZX(Bu.get(Eu), mu, Ju);
              return (0, eQ.jsxs)("li", {
                className: CK()("Baf2IslandPerson", {
                  Pending: Ku
                }),
                children: [(0, eQ.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, eQ.jsx)("span", {
                    className: CK()("Baf2IslandPersonName", {
                      Here: uu.baf2MemberHere
                    }),
                    children: uu.baf2MemberName
                  }), uu.baf2MemberHere && (0, eQ.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Vu(`${Sr}islandsPlayerHere`)
                  }), 0 === Ru && (0, eQ.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Vu(`${Sr}islandsPlayerOwner`)
                  }), yu.remove && Ru > 0 && !Ku && bu !== Eu && (0, eQ.jsx)(bm.H, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var uu;
                      Wu(Eu), null === (uu = ju.current) || void 0 === uu || uu.focus()
                    },
                    children: Vu(`${Sr}islandsRemove`)
                  })]
                }), bu === Eu && (0, eQ.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, eQ.jsx)("p", {
                    children: lX(Vu, `${Sr}islandsRemoveConfirm`, {
                      player: uu.baf2MemberName
                    })
                  }), (0, eQ.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, eQ.jsx)(bm.F, {
                      onClick: () => {
                        (uu => {
                          const Ru = ru.sendIslandEdit(`baf2coopremove ${Hu} ${uu.baf2MemberKey}`);
                          xu((yu => new Map(yu).set(uu.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: Ru
                          }))), eu()
                        })(uu)
                      },
                      children: Vu(`${Sr}islandsRemoveYes`)
                    }), (0, eQ.jsx)(bm.e, {
                      onClick: eu,
                      children: Vu(`${Sr}islandsCancel`)
                    })]
                  })]
                })]
              }, Eu)
            }))
          })]
        }), (void 0 !== Cu || null !== ku) && (0, eQ.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Vu(`${Sr}islandsInviteTitle`)
        }), !du && (void 0 !== Cu || null !== ku) && (0, eQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Vu(`${Sr}islandsInviteShareNote`)
        }), 0 === (null === Cu || void 0 === Cu ? void 0 : Cu.length) && (0, eQ.jsx)(br, {
          openSocial: Xu,
          t: Vu
        }), void 0 !== Cu && Cu.length > 0 && (0, eQ.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Cu.map((uu => {
            const Ru = !0 === uu.baf2InvitableSent || ZX(Su.get(uu.baf2InvitableId), mu, Ju);
            return (0, eQ.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, eQ.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, eQ.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: uu.baf2InvitableName
                }), uu.baf2InvitableFull && !Ru && (0, eQ.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Vu(`${Sr}islandsInviteTheirFull`, {
                    max: String(Qu)
                  })
                }), (Ru || !uu.baf2InvitableFull) && (0, eQ.jsx)(bm.n, {
                  className: "Baf2IslandPersonButton",
                  disabled: Ru,
                  onClick: () => {
                    (uu => {
                      const Ru = ru.sendIslandEdit(`baf2coopinvite ${Hu} ${uu}`);
                      pu((yu => new Map(yu).set(uu, {
                        atMs: Date.now(),
                        answer: Ru
                      })))
                    })(uu.baf2InvitableId)
                  },
                  children: Vu(Ru ? `${Sr}islandsInvited` : `${Sr}islandsInvite`)
                })]
              })
            }, uu.baf2InvitableId)
          }))
        }), ku && (0, eQ.jsx)(fX, {
          note: ku,
          t: Vu
        }), (0, eQ.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, eQ.jsx)(bm.e, {
            onClick: Nu,
            children: Vu(`${Sr}islandsDone`)
          })
        })]
      })
    }

    function br(uu) {
      let {
        openSocial: Ru,
        t: yu
      } = uu;
      return (0, eQ.jsxs)(eQ.Fragment, {
        children: [(0, eQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: yu(Ru ? `${Sr}islandsInviteNobody` : `${Sr}islandsInviteNobodyGuest`)
        }), Ru && (0, eQ.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, eQ.jsx)(bm.e, {
            onClick: Ru,
            children: yu("socialBar:social")
          })
        })]
      })
    }

    function Cr(uu) {
      let {
        className: Ru,
        text: yu,
        ConfirmButton: Ku,
        confirmLabel: Qu,
        canConfirm: mu,
        send: Ju,
        done: Nu,
        t: Xu
      } = uu;
      const Vu = (0, Eu.useRef)(null);
      OX(Vu);
      const ru = () => {
        Nu(null)
      };
      return (0, eQ.jsxs)("div", {
        ref: Vu,
        tabIndex: -1,
        className: CK()("Baf2IslandForm", Ru),
        ...iX(ru),
        children: [(0, eQ.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: yu
        }), (0, eQ.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, eQ.jsx)(Ku, {
            disabled: !mu,
            onClick: () => {
              mu && Nu(Ju())
            },
            children: Qu
          }), (0, eQ.jsx)(bm.e, {
            onClick: ru,
            children: Xu(`${Sr}islandsCancel`)
          })]
        })]
      })
    }

    function kr(uu) {
      return "hidden" !== uu
    }

    function er(uu) {
      var Ru, yu;
      let {
        card: Ku,
        keepOwn: Qu,
        blocked: mu,
        maxIslands: Ju,
        serverNowMs: Nu,
        nowMs: Xu,
        actions: Vu,
        full: ru,
        waits: Bu,
        answered: xu,
        mode: Su,
        setMode: pu,
        pending: Tu,
        onSent: Wu,
        switchTo: ju,
        leave: Hu,
        coopOn: du,
        openSocial: bu,
        t: Cu
      } = uu;
      const ku = Fm(),
        eu = Ku.baf2IslandActive,
        Au = eu ? null : function(uu, Ru) {
          if (uu <= 0) return null;
          const yu = Ru - uu;
          if (yu < pQ) return [`${WX}islandsPlayedJustNow`];
          if (yu < jX) return [`${WX}islandsPlayedMinutes`, {
            minutes: String(Math.floor(yu / pQ))
          }];
          if (yu < HX) return [`${WX}islandsPlayedHours`, {
            hours: String(Math.floor(yu / jX))
          }];
          const Eu = Math.floor(yu / HX);
          return 1 === Eu ? [`${WX}islandsPlayedDay`] : [`${WX}islandsPlayedDays`, {
            days: String(Eu)
          }]
        }(Ku.baf2IslandLastPlayedMs, Nu),
        Du = void 0 === (Mu = Ku.baf2IslandItems) ? null : 0 === Mu ? [`${WX}islandsItemsNone`] : 1 === Mu ? [`${WX}islandsItemsOne`] : [`${WX}islandsItems`, {
          count: String(Mu)
        }];
      var Mu;
      const Iu = function(uu) {
          return uu ? 1 === uu ? [`${WX}islandsWaitingOne`] : [`${WX}islandsWaiting`, {
            count: String(uu)
          }] : null
        }(Ku.baf2IslandWaiting),
        Gu = Ku.baf2IslandUnreadable,
        Uu = Ku.baf2IslandCoop,
        nu = zX(Ku, Vu, Qu, ru, du, mu),
        su = (0, Eu.useRef)(null);
      oX(null !== Su, su);
      const tu = () => {
          var uu;
          pu(null), null === (uu = su.current) || void 0 === uu || uu.focus()
        },
        lu = (uu, Ru) => {
          tu(), null !== uu && Wu(uu, Ru)
        },
        gu = (uu, Ru) => Cu(`${Sr}${uu}`, {
          time: dQ(Cu, Ru)
        });
      return (0, eQ.jsxs)("li", {
        ref: su,
        tabIndex: -1,
        className: CK()("Baf2IslandCard", {
          Active: eu,
          Pending: Tu,
          Shared: void 0 !== Uu
        }),
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, eQ.jsx)("strong", {
            className: "Baf2IslandName",
            children: Ku.baf2IslandName
          }), eu && (0, eQ.jsx)("span", {
            className: "Baf2IslandBadge",
            children: Cu(`${Sr}islandsOnThis`)
          }), Uu && (0, eQ.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: Cu(`${Sr}islandsShared`)
          })]
        }), "member" === (null === Uu || void 0 === Uu ? void 0 : Uu.baf2CoopRole) && (0, eQ.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: lX(Cu, `${Sr}islandsSharedBy`, {
            owner: Uu.baf2CoopOwner
          })
        }), void 0 !== Gu && (0, eQ.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: Cu("newer" === Gu ? `${Sr}islandsUnreadable` : `${Sr}islandsDamaged`)
        }), "corrupt" === Gu && ru && (0, eQ.jsx)("p", {
          className: "Baf2IslandStats",
          children: Cu(`${Sr}islandsDamagedFull`)
        }), void 0 === Gu && (0, eQ.jsxs)(eQ.Fragment, {
          children: [(0, eQ.jsx)(aX, {
            tier: Ku.baf2IslandTier,
            t: Cu
          }), (0, eQ.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, eQ.jsx)("span", {
              children: 1 === Ku.baf2IslandQuestsDone ? Cu(`${Sr}islandsQuestsDoneOne`) : Cu(`${Sr}islandsQuestsDone`, {
                count: String(Ku.baf2IslandQuestsDone)
              })
            }), (0, eQ.jsx)("span", {
              children: 1 === Ku.baf2IslandMachines ? Cu(`${Sr}islandsMachinesOne`) : Cu(`${Sr}islandsMachines`, {
                count: String(Ku.baf2IslandMachines)
              })
            }), Du && (0, eQ.jsx)("span", {
              children: Cu(Du[0], Du[1])
            }), Iu && (0, eQ.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: Cu(Iu[0], Iu[1])
            }), Au && (0, eQ.jsx)("span", {
              children: Cu(Au[0], Au[1])
            })]
          })]
        }), Uu && void 0 === Uu.baf2CoopState && "people" !== Su && (0, eQ.jsx)(jr, {
          members: Uu.baf2CoopMembers,
          t: Cu
        }), null === Su && (0, eQ.jsx)(Hr, {
          card: Ku,
          answered: xu,
          nowMs: Xu,
          t: Cu
        }), nu.note && (0, eQ.jsx)(fX, {
          note: nu.note,
          className: CK()({
            Unreachable: void 0 !== (null === Uu || void 0 === Uu ? void 0 : Uu.baf2CoopState)
          }),
          t: Cu
        }), "rename" === Su && (0, eQ.jsx)(Tr, {
          card: Ku,
          canRename: "enabled" === nu.rename,
          done: lu,
          t: Cu
        }), "delete" === Su && (0, eQ.jsx)(Wr, {
          card: Ku,
          canDelete: "enabled" === nu.delete,
          done: uu => {
            lu(uu, Uu ? "delete" : void 0)
          },
          t: Cu
        }), "people" === Su && (0, eQ.jsx)(dr, {
          card: Ku,
          view: nu,
          blocked: mu,
          maxIslands: Ju,
          answered: xu,
          nowMs: Xu,
          done: tu,
          openSocial: bu,
          t: Cu
        }), "leave" === Su && (0, eQ.jsx)(Cr, {
          className: "Leave",
          text: lX(Cu, `${Sr}islandsLeaveConfirm`, {
            island: Ku.baf2IslandName,
            owner: null !== (Ru = null === (yu = Ku.baf2IslandCoop) || void 0 === yu ? void 0 : yu.baf2CoopOwner) && void 0 !== Ru ? Ru : ""
          }),
          ConfirmButton: bm.F,
          confirmLabel: Cu(`${Sr}islandsLeaveYes`),
          canConfirm: "enabled" === nu.leave,
          send: () => pr(ku, Ku),
          done: uu => {
            lu(uu, "leave"), null !== uu && eu && Hu()
          },
          t: Cu
        }), "unshare" === Su && (0, eQ.jsx)(Cr, {
          className: "Unshare",
          text: lX(Cu, `${Sr}islandsStopSharingConfirm`, {
            island: Ku.baf2IslandName
          }),
          ConfirmButton: bm.n,
          confirmLabel: Cu(`${Sr}islandsStopSharing`),
          canConfirm: "enabled" === nu.unshare,
          send: () => ku.sendIslandEdit(`baf2coopunshare ${Ku.baf2IslandId}`),
          done: uu => {
            lu(uu), null !== uu && Hu()
          },
          t: Cu
        }), null === Su && !Tu && (0, eQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Ku.baf2IslandName,
          children: [kr(nu.switch) && (0, eQ.jsx)(bm.n, {
            disabled: "enabled" !== nu.switch,
            onClick: ju,
            children: "tryAgain" === nu.switchLabel ? Cu(`${Sr}islandsTryAgain`) : Bu.switch > 0 ? gu("islandsSwitchIn", Bu.switch) : Cu(`${Sr}islandsSwitch`)
          }), kr(nu.rename) && (0, eQ.jsx)(bm.e, {
            disabled: "enabled" !== nu.rename,
            onClick: () => {
              pu("rename")
            },
            children: Cu(`${Sr}islandsRename`)
          }), kr(nu.people) && (0, eQ.jsx)(bm.e, {
            disabled: "enabled" !== nu.people,
            onClick: () => {
              pu("people")
            },
            children: Cu("players" === nu.peopleLabel ? `${Sr}islandsPlayersButton` : `${Sr}islandsInviteButton`)
          }), kr(nu.unshare) && (0, eQ.jsx)(bm.e, {
            disabled: "enabled" !== nu.unshare,
            onClick: () => {
              pu("unshare")
            },
            children: Cu(`${Sr}islandsStopSharing`)
          }), kr(nu.dismiss) && (0, eQ.jsx)(bm.e, {
            disabled: "enabled" !== nu.dismiss,
            onClick: () => {
              Wu(pr(ku, Ku), "dismiss"), eu && Hu()
            },
            children: Cu(`${Sr}islandsDismiss`)
          }), kr(nu.leave) && (0, eQ.jsx)(bm.H, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== nu.leave,
            onClick: () => {
              pu("leave")
            },
            children: eu && Bu.switch > 0 ? gu("islandsLeaveIn", Bu.switch) : Cu(`${Sr}islandsLeave`)
          }), kr(nu.delete) && (0, eQ.jsx)(bm.H, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== nu.delete,
            onClick: () => {
              pu("delete")
            },
            children: Bu.change > 0 && nu.deleteWaits ? gu("islandsDeleteIn", Bu.change) : Cu(`${Sr}islandsDelete`)
          })]
        })]
      })
    }
    const Ar = "buildAFactory2Game:";

    function Dr(uu) {
      let {
        invite: Ru,
        actions: yu,
        full: Ku,
        maxIslands: Qu,
        waitSeconds: mu,
        focus: Ju,
        focused: Nu,
        join: Xu,
        decline: Vu,
        t: ru
      } = uu;
      const [Bu, xu] = (0, Eu.useState)(!1), Su = (0, Eu.useRef)(null);
      oX(Bu, Su), (0, Eu.useEffect)((() => {
        var uu;
        Ju && (xu(!0), null === (uu = Su.current) || void 0 === uu || uu.focus(), Nu())
      }), [Ju, Nu]);
      const pu = function(uu, Ru, yu, Eu, Ku) {
          return yu ? {
            join: !1,
            note: {
              key: `${WX}islandsJoinTooMany`,
              params: {
                max: String(Eu)
              }
            }
          } : uu.baf2InvitePlayers >= Ku ? {
            join: !1,
            note: {
              key: `${WX}islandsJoinFull`
            }
          } : {
            join: Ru.switch,
            note: null
          }
        }(Ru, yu, Ku, Qu, 10),
        Tu = Ru.baf2InviteIsland,
        Wu = Ru.baf2InvitePlayers,
        ju = () => {
          var uu;
          xu(!1), null === (uu = Su.current) || void 0 === uu || uu.focus()
        },
        Hu = mu > 0 && null === pu.note ? ru(`${Ar}islandsJoinIn`, {
          time: dQ(ru, mu)
        }) : ru(`${Ar}islandsJoin`);
      return (0, eQ.jsxs)("li", {
        ref: Su,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Bu ? iX(ju) : {},
        children: [(0, eQ.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, eQ.jsx)("strong", {
            className: "Baf2IslandName",
            children: Tu
          })
        }), (0, eQ.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: lX(ru, `${Ar}islandsInvitedBy`, {
            owner: Ru.baf2InviteOwner
          })
        }), (0, eQ.jsx)(aX, {
          tier: Ru.baf2InviteTier,
          t: ru
        }), (0, eQ.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, eQ.jsx)("span", {
            children: 1 === Wu ? ru(`${Ar}islandsPlayersCountOne`) : ru(`${Ar}islandsPlayersCount`, {
              count: String(Wu)
            })
          })
        }), pu.note && (0, eQ.jsx)(fX, {
          note: pu.note,
          t: ru
        }), Bu && (0, eQ.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: lX(ru, `${Ar}islandsJoinConfirm`, {
            island: Tu
          })
        }), !Bu && (0, eQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Tu,
          children: [(0, eQ.jsx)(bm.n, {
            disabled: !pu.join,
            onClick: () => {
              var uu;
              xu(!0), null === (uu = Su.current) || void 0 === uu || uu.focus()
            },
            children: Hu
          }), (0, eQ.jsx)(bm.e, {
            onClick: Vu,
            children: ru(`${Ar}islandsDecline`)
          })]
        }), Bu && (0, eQ.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, eQ.jsx)(bm.n, {
            disabled: !pu.join,
            onClick: Xu,
            children: ru(`${Ar}islandsJoinYes`)
          }), (0, eQ.jsx)(bm.e, {
            onClick: ju,
            children: ru(`${Ar}islandsCancel`)
          })]
        })]
      })
    }

    function Mr(uu) {
      let {
        invites: Ru,
        actions: yu,
        full: Eu,
        maxIslands: Ku,
        waitSeconds: Qu,
        focus: mu,
        focused: Ju,
        leave: Nu,
        declined: Xu,
        t: Vu
      } = uu;
      const ru = Fm();
      return (0, eQ.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, eQ.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Vu(`${Ar}islandsInvitesTitle`)
        }), (0, eQ.jsx)("ul", {
          className: "Baf2IslandCards",
          children: Ru.map((uu => {
            const Ru = uu.baf2InviteId;
            return (0, eQ.jsx)(Dr, {
              invite: uu,
              actions: yu,
              full: Eu,
              maxIslands: Ku,
              waitSeconds: Qu,
              focus: mu === Ru,
              focused: Ju,
              join: () => {
                ru.send(`baf2coopaccept ${Ru}`), Nu()
              },
              decline: () => {
                ru.send(`baf2coopdecline ${Ru}`), Xu(Ru)
              },
              t: Vu
            }, Ru)
          }))
        })]
      })
    }
    const Ir = "buildAFactory2Game:";

    function Gr(uu) {
      let {
        cards: Ru,
        activeName: yu,
        canStart: Ku,
        waitSeconds: Qu,
        leave: mu,
        t: Ju
      } = uu;
      const Nu = Fm(),
        [Xu, Vu] = (0, Eu.useState)(!1),
        [ru, Bu] = (0, Eu.useState)(""),
        xu = (0, Eu.useRef)(null);
      oX(Xu, xu), (0, Eu.useEffect)((() => {
        var uu;
        Xu && (null === (uu = xu.current) || void 0 === uu || uu.focus())
      }), [Xu]);
      const Su = kX(Ru),
        pu = bX(ru),
        Tu = CX(pu),
        Wu = () => {
          Ku && !Tu && (Nu.send("" === pu || pu === Su ? qu : `${qu} ${pu}`), mu())
        },
        ju = () => {
          var uu;
          Vu(!1), null === (uu = xu.current) || void 0 === uu || uu.focus()
        };
      return (0, eQ.jsxs)("li", {
        ref: xu,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Xu ? iX(ju) : {},
        children: [(0, eQ.jsx)("strong", {
          className: "Baf2IslandName",
          children: Ju(`${Ir}islandsNewTitle`)
        }), !Xu && (0, eQ.jsx)("p", {
          className: "Baf2IslandStats",
          children: Ju(`${Ir}islandsNewNote`)
        }), Xu && (0, eQ.jsxs)(eQ.Fragment, {
          children: [(0, eQ.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: lX(Ju, `${Ir}islandsNewConfirm`, {
              name: yu
            })
          }), (0, eQ.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [Ju(`${Ir}islandsNewNameLabel`), (0, eQ.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: ru,
              placeholder: Su,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: YX,
              onChange: uu => {
                Bu(uu.target.value)
              },
              ...PX(Wu, ju)
            })]
          }), Tu && (0, eQ.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: Ju(`${Ir}islandsNameReserved`)
          })]
        }), (0, eQ.jsxs)("div", {
          className: CK()("Baf2IslandButtons", {
            Stacked: Xu
          }),
          children: [(0, eQ.jsx)(bm.n, {
            disabled: !Ku || Xu && Tu,
            onClick: () => {
              if (!Xu) return Bu(Su), void Vu(!0);
              Wu()
            },
            children: Qu > 0 ? Ju(`${Ir}islandsNewIn`, {
              time: dQ(Ju, Qu)
            }) : Ju(Xu ? `${Ir}islandsNewConfirmButton` : `${Ir}islandsNew`)
          }), Xu && (0, eQ.jsx)(bm.e, {
            onClick: ju,
            children: Ju(`${Ir}islandsCancel`)
          })]
        })]
      })
    }

    function Ur(uu) {
      var Ru, yu;
      let {
        message: Ku,
        arrivedAtMs: Qu,
        close: mu,
        leave: Ju,
        openSocial: Nu
      } = uu;
      const Xu = Fm(),
        {
          t: Vu
        } = (0, DK.E)(),
        ru = vX(1e3),
        [Bu, xu] = (0, Eu.useState)(null),
        [Su, pu] = (0, Eu.useState)(new Map),
        [Tu, Wu] = (0, Eu.useState)(new Set),
        ju = Ku.baf2IslandCards,
        Hu = function(uu, Ru, yu, Eu) {
          return (null !== uu && void 0 !== uu ? uu : []).filter((uu => Ru + uu.baf2InviteLeftMs > yu && !Eu.has(uu.baf2InviteId)))
        }(Ku.baf2IslandsInvites, Qu, ru, Tu),
        du = Hu.map((uu => uu.baf2InviteId)).join(" "),
        bu = (0, Eu.useRef)(null),
        Cu = qX(bu);
      (0, Eu.useEffect)((() => {
        var uu, Ru;
        null !== (uu = bu.current) && void 0 !== uu && uu.contains(document.activeElement) || (null === (Ru = bu.current) || void 0 === Ru || Ru.focus())
      }), [Ku, du]), (0, Eu.useEffect)((() => {
        pu((uu => function(uu, Ru, yu, Eu) {
          const Ku = new Map;
          for (const Qu of Ru) {
            const Ru = uu.get(Qu.baf2IslandId);
            Ru && (void 0 !== Ru.untilGone || Eu < Ru.answer) && UX(Ru, Qu, yu) && Ku.set(Qu.baf2IslandId, Ru)
          }
          return Ku.size === uu.size ? uu : Ku
        }(uu, Ku.baf2IslandCards, Date.now(), Ku.baf2IslandsAnswered)))
      }), [Ku]);
      const ku = dX(Qu, Ku.baf2IslandsWaitMs, ru),
        eu = Ku.baf2IslandsBlocked,
        Au = MX(eu, ku),
        Du = function(uu, Ru) {
          const yu = MX(uu, 0);
          return {
            switch: yu.switch ? Ru : 0,
            change: yu.change ? Ru : 0
          }
        }(eu, ku),
        Mu = ju.length >= Ku.baf2IslandsMax,
        Iu = ju.length > 0,
        Gu = function(uu, Ru, yu) {
          return uu + Math.max(0, yu - Ru)
        }(Ku.baf2IslandsNowMs, Qu, ru),
        Uu = null !== (Ru = null === (yu = ju.find((uu => uu.baf2IslandActive))) || void 0 === yu ? void 0 : yu.baf2IslandName) && void 0 !== Ru ? Ru : "",
        nu = function(uu) {
          const Ru = uu.filter(LX).length;
          return Ru <= 1 && Ru < uu.length
        }(ju),
        su = !0 === Ku.baf2IslandsCoop,
        tu = function(uu, Ru) {
          const yu = uu.find((uu => uu.baf2IslandActive)),
            Eu = null === yu || void 0 === yu ? void 0 : yu.baf2IslandCoop;
          return yu && "member" === (null === Eu || void 0 === Eu ? void 0 : Eu.baf2CoopRole) ? {
            key: `${WX}islandsKeepOwnMember`,
            names: {
              owner: Eu.baf2CoopOwner,
              island: yu.baf2IslandName
            }
          } : {
            key: Ru ? `${WX}islandsKeepOwn` : `${WX}islandsKeepOwnSolo`
          }
        }(ju, su),
        [lu, gu] = (0, Eu.useState)(null);
      (0, Eu.useEffect)((() => {
        void 0 !== Ku.baf2IslandsFocusInvite && gu(Ku.baf2IslandsFocusInvite)
      }), [Ku]);
      const cu = (0, Eu.useCallback)((() => {
          gu(null)
        }), []),
        Lu = Bu ? ju.find((uu => uu.baf2IslandId === Bu.id)) : void 0,
        zu = Bu && Lu && "hidden" !== zX(Lu, Au, nu, Mu, su, eu)[Bu.mode] ? Bu : null;
      return (0, eQ.jsx)(dm.e, {
        close: mu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, eQ.jsxs)("section", {
          ref: bu,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: Cu ? {
            marginTop: `${Cu.marginTop}px`,
            maxHeight: `${Cu.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsxs)("div", {
              children: [(0, eQ.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Vu(`${Ir}islandsTitle`)
              }), Iu && (0, eQ.jsx)("p", {
                children: Vu(`${Ir}islandsSubtitle`, {
                  count: String(ju.length),
                  max: String(Ku.baf2IslandsMax)
                })
              })]
            }), (0, eQ.jsx)(bm.h, {
              ariaLabel: Vu(`${Ir}islandsClose`),
              onClick: mu
            })]
          }), (0, eQ.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== eu && (0, eQ.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: lX(Vu, eX(eu, AX(ju)), {
                island: Uu
              })
            }), Iu && Hu.length > 0 && (0, eQ.jsx)(Mr, {
              invites: Hu,
              actions: Au,
              full: Mu,
              maxIslands: Ku.baf2IslandsMax,
              waitSeconds: Du.switch,
              focus: lu,
              focused: cu,
              leave: Ju,
              declined: uu => {
                Wu((Ru => new Set(Ru).add(uu)))
              },
              t: Vu
            }), Iu && (0, eQ.jsxs)(eQ.Fragment, {
              children: [Mu && (0, eQ.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Vu(`${Ir}islandsFull`, {
                  max: String(Ku.baf2IslandsMax)
                })
              }), (0, eQ.jsx)("p", {
                className: "Baf2IslandsNote",
                children: lX(Vu, tu.key, tu.names)
              }), (0, eQ.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [ju.map((uu => {
                  const Ru = uu.baf2IslandId;
                  return (0, eQ.jsx)(er, {
                    card: uu,
                    keepOwn: nu,
                    coopOn: su,
                    openSocial: Nu,
                    blocked: eu,
                    maxIslands: Ku.baf2IslandsMax,
                    serverNowMs: Gu,
                    nowMs: ru,
                    actions: Au,
                    full: Mu,
                    waits: Du,
                    answered: Ku.baf2IslandsAnswered,
                    mode: (null === zu || void 0 === zu ? void 0 : zu.id) === Ru ? zu.mode : null,
                    setMode: uu => {
                      xu(null === uu ? null : {
                        id: Ru,
                        mode: uu
                      })
                    },
                    pending: UX(Su.get(Ru), uu, ru),
                    onSent: (yu, Eu) => {
                      pu((Ku => {
                        const Qu = {
                          atMs: Date.now(),
                          from: uu.baf2IslandName,
                          answer: yu
                        };
                        return new Map(Ku).set(Ru, Eu ? {
                          ...Qu,
                          untilGone: Eu
                        } : Qu)
                      }))
                    },
                    leave: Ju,
                    switchTo: () => {
                      Xu.send(`baf2islandswitch ${Ru}`), Ju()
                    },
                    t: Vu
                  }, Ru)
                })), !Mu && (0, eQ.jsx)(Gr, {
                  cards: ju,
                  activeName: Uu,
                  canStart: Au.change,
                  waitSeconds: Du.change,
                  leave: Ju,
                  t: Vu
                })]
              })]
            })]
          })]
        })
      })
    }
    var nr = yu(4811);
    const sr = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        RK: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      tr = Object.keys(sr),
      lr = new Set([...Object.keys(qR), ...[...tR.Press.recipes, ...tR["Wire Mill"].recipes].map((uu => uu.output))]),
      gr = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      cr = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Lr = / Bar$|Alloy$/,
      zr = /Porkchop|Beef|Mutton|Venison|Steak/,
      Fr = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const wr = (0, Eu.memo)((function(uu) {
      let {
        item: Ru,
        name: yu,
        amount: Eu,
        selected: Ku,
        small: Qu,
        onPick: mu
      } = uu;
      return (0, eQ.jsxs)("button", {
        type: "button",
        className: CK()("Baf2TermTile", {
          On: Ku,
          Small: Qu
        }),
        "aria-label": `${yu}: ${Eu}`,
        "aria-pressed": Ku,
        onClick: () => {
          mu(Ru)
        },
        children: [(0, eQ.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, eQ.jsx)(IK.c, {
            itemName: Ru,
            amount: 0
          })
        }), (0, eQ.jsx)("span", {
          className: "Baf2TermCount",
          children: jQ(Eu, 1e4)
        }), !Qu && (0, eQ.jsx)("span", {
          className: "Baf2TermName",
          children: yu
        })]
      })
    }));

    function Zr(uu) {
      let {
        store: Ru,
        close: yu,
        send: Ku
      } = uu;
      const {
        t: Qu
      } = (0, DK.E)(), {
        isTouchScreen: mu
      } = (0, HK.j)(["isTouchScreen"]);
      ! function(uu) {
        const [Ru, yu] = (0, Eu.useState)(uu.version);
        (0, Eu.useEffect)((() => (yu(uu.version), uu.subscribe((() => {
          yu(uu.version)
        })))), [uu])
      }(Ru);
      const [Ju, Nu] = (0, Eu.useState)("all"), [Xu, Vu] = (0, Eu.useState)(!1), [ru, Bu] = (0, Eu.useState)(""), [xu, Su] = (0, Eu.useState)(""), [pu, Tu] = (0, Eu.useState)(null), [Wu, ju] = (0, Eu.useState)(!1), [Hu, du, bu] = function() {
        const uu = (0, Eu.useRef)(null),
          [Ru, yu] = (0, Eu.useState)(!1),
          Ku = () => {
            const Ru = uu.current;
            yu(null !== Ru && Ru.scrollLeft + Ru.clientWidth < Ru.scrollWidth - 1)
          };
        return (0, Eu.useEffect)(Ku), (0, Eu.useEffect)((() => {
          const Ru = uu.current;
          if (!Ru) return;
          const yu = new ResizeObserver(Ku);
          return yu.observe(Ru), () => {
            yu.disconnect()
          }
        }), []), [uu, Ru, Ku]
      }(), Cu = (0, Eu.useMemo)((() => new Map), [Qu]), ku = uu => {
        let Ru = Cu.get(uu);
        return void 0 === Ru && (Ru = function(uu, Ru) {
          const yu = /^(.+) \((.+)\)$/.exec(uu);
          return yu ? Ru(yu[2], yu[1]) : uu
        }(EQ(Qu, uu), ((uu, Ru) => Qu("buildAFactory2Game:terminalTileKind", {
          kind: uu,
          base: Ru
        }))), Cu.set(uu, Ru)), Ru
      }, eu = Ru.isReadOnly(), Au = Wu && !eu, Du = Ru.recent(), Mu = Ru.items(), Iu = xu.trim().toLowerCase(), Gu = Au ? Ru.heldItems(pu) : ("recent" === Ju ? Du : Mu).filter((uu => {
        const Ru = ku(uu);
        return ("all" === Ju || "recent" === Ju || function(uu) {
          return rQ(uu) ? "farm" : gr.test(uu) ? "nuclear" : Lr.test(uu) ? "bars" : zr.test(uu) ? "farm" : cr.test(uu) ? "RK" : lr.has(uu) ? "parts" : Fr.test(uu) ? "farm" : "other"
        }(uu) === Ju) && ("" === Iu || Ru.toLowerCase().includes(Iu)) && ("" === ru || Ru.toUpperCase().startsWith(ru))
      })), Uu = new Set(Mu.map((uu => ku(uu).charAt(0).toUpperCase()))), nu = uu => Au ? Ru.heldAmount(uu) : Ru.amount(uu), su = !Au && "recent" !== Ju && Du.length > 0, tu = function(uu, Ru) {
        return null !== uu && Ru.includes(uu) ? uu : null
      }(pu, su ? [...Gu, ...Du] : Gu), lu = null === tu ? 0 : Ru.amount(tu), gu = null === tu ? 0 : nu(tu), cu = (0, Eu.useCallback)((uu => {
        Tu((Ru => Ru === uu ? null : uu))
      }), []), Lu = uu => gu > 0 || Au && null === tu && "fill" === uu && Gu.length > 0, zu = Au ? [
        ["one", Qu("buildAFactory2Game:terminalStoreOne")],
        ["stack", Qu("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Qu(null === tu ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Qu("buildAFactory2Game:terminalTakeOne")],
        ["stack", Qu("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Qu("buildAFactory2Game:terminalFill")]
      ], Fu = Au ? Qu("buildAFactory2Game:terminalStoreEmpty") : "" !== ru ? Qu("buildAFactory2Game:terminalEmptyLetter", {
        letter: ru
      }) : "" !== Iu ? Qu("buildAFactory2Game:terminalEmptySearch", {
        query: xu
      }) : Qu("buildAFactory2Game:terminalEmpty");
      return (0, eQ.jsx)(dm.e, {
        close: yu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, eQ.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsxs)("div", {
              children: [(0, eQ.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Qu(Ru.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, eQ.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, eQ.jsx)("span", {
                  className: CK()({
                    Off: Au
                  }),
                  children: Qu("buildAFactory2Game:terminalSubtitle", {
                    count: String(Ru.siloCount())
                  })
                }), !eu && (0, eQ.jsx)("span", {
                  className: CK()({
                    Off: !Au
                  }),
                  children: Qu("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !eu && (0, eQ.jsx)(nr.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Qu("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Qu("buildAFactory2Game:terminalModeStore")
              }],
              value: Au ? "store" : "take",
              onChange: uu => {
                ju("store" === uu), Tu(null)
              },
              ariaLabel: Qu("buildAFactory2Game:terminalModes")
            }), (0, eQ.jsx)(bm.h, {
              onClick: yu
            })]
          }), (0, eQ.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, eQ.jsxs)("div", {
              className: CK()("Baf2TermTools", {
                Hidden: Au
              }),
              children: [(0, eQ.jsx)("div", {
                ref: Hu,
                className: CK()("Baf2TermChips", {
                  MoreRight: du
                }),
                onScroll: bu,
                children: Xu ? (0, eQ.jsxs)(eQ.Fragment, {
                  children: [(0, eQ.jsx)("button", {
                    type: "button",
                    "aria-label": Qu("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Vu(!1), Bu("")
                    },
                    children: "\u2190"
                  }), [...Uu].sort().map((uu => (0, eQ.jsx)("button", {
                    type: "button",
                    className: CK()({
                      On: ru === uu
                    }),
                    onClick: () => {
                      Bu(ru === uu ? "" : uu)
                    },
                    children: uu
                  }, uu)))]
                }) : (0, eQ.jsxs)(eQ.Fragment, {
                  children: [(0, eQ.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Vu(!0)
                    },
                    children: Qu("buildAFactory2Game:terminalLetters")
                  }), tr.map((uu => (0, eQ.jsx)("button", {
                    type: "button",
                    className: CK()({
                      On: Ju === uu
                    }),
                    onClick: () => {
                      Nu(uu)
                    },
                    children: Qu(sr[uu])
                  }, uu)))]
                })
              }), !mu && (0, eQ.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: xu,
                placeholder: Qu("buildAFactory2Game:terminalSearch"),
                "aria-label": Qu("buildAFactory2Game:terminalSearch"),
                onChange: uu => {
                  Su(uu.target.value)
                },
                onKeyDown: uu => {
                  uu.stopPropagation()
                }
              }), (0, eQ.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Qu("buildAFactory2Game:terminalResort"),
                title: Qu("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  Ru.resort()
                },
                children: "\u21c5"
              })]
            }), su && (0, eQ.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, eQ.jsx)("span", {
                children: Qu(sr.recent)
              }), Du.map((uu => (0, eQ.jsx)(wr, {
                item: uu,
                name: ku(uu),
                amount: Ru.amount(uu),
                selected: tu === uu,
                small: !0,
                onPick: cu
              }, uu)))]
            }), (0, eQ.jsx)("div", {
              className: "Baf2TermTiles",
              children: Gu.length > 0 ? Gu.map((uu => (0, eQ.jsx)(wr, {
                item: uu,
                name: ku(uu),
                amount: nu(uu),
                selected: tu === uu,
                onPick: cu
              }, uu))) : (0, eQ.jsx)("p", {
                className: "Baf2TermEmpty",
                children: Fu
              })
            }), (0, eQ.jsxs)("div", {
              className: CK()("Baf2TermActions", {
                Hidden: Au && 0 === Gu.length
              }),
              children: [(0, eQ.jsx)("span", {
                className: "Baf2TermPicked",
                children: eu ? (0, eQ.jsxs)(eQ.Fragment, {
                  children: [null !== tu && lu > 0 ? ku(tu) : Qu("buildAFactory2Game:terminalVisiting"), (0, eQ.jsx)("small", {
                    children: Qu("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== tu ? (0, eQ.jsxs)(eQ.Fragment, {
                  children: [ku(tu), (0, eQ.jsx)("small", {
                    children: Qu("buildAFactory2Game:terminalStored", {
                      amount: lu.toLocaleString()
                    })
                  })]
                }) : Qu(Au ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !eu && zu.map((uu => {
                let [yu, Eu] = uu;
                const Qu = "fill" === yu ? bm.l : bm.e;
                return (0, eQ.jsx)(Qu, {
                  className: "Baf2TermTake",
                  disabled: !Lu(yu),
                  onClick: () => {
                    (uu => {
                      Lu(uu) && Ku(null === tu ? Ru.putAll() : Au ? Ru.put(uu, tu) : Ru.take(uu, tu))
                    })(yu)
                  },
                  children: Eu
                }, yu)
              }))]
            })]
          })]
        })
      })
    }

    function hr(uu) {
      let {
        kind: Ru,
        icon: yu,
        label: Eu,
        number: Ku,
        preview: Qu,
        note: mu,
        tone: Ju = null,
        share: Nu,
        onExplain: Xu
      } = uu;
      return (0, eQ.jsxs)("button", {
        type: "button",
        className: CK()("NxLane", Ru, {
          Warn: "warn" === Ju,
          Danger: "danger" === Ju
        }),
        onClick: Xu,
        children: [(0, eQ.jsxs)("span", {
          className: "NxLaneHead",
          children: [yu, (0, eQ.jsx)("span", {
            className: "NxLaneLabel",
            children: Eu
          })]
        }), (0, eQ.jsxs)("span", {
          className: "NxLaneNum",
          children: [Ku, Qu && (0, eQ.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Qu]
          })]
        }), (0, eQ.jsx)("span", {
          className: "NxLaneNote",
          children: mu
        }), void 0 !== Nu && (0, eQ.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Nu)) + "%"
          }
        })]
      })
    }

    function Pr(uu) {
      let {
        kind: Ru,
        step: yu,
        short: Eu,
        planned: Ku
      } = uu;
      return (0, eQ.jsx)("i", {
        className: CK()("NxPipe", Ru, `Step${yu}`, {
          Short: Eu,
          Planned: Ku
        }),
        "aria-hidden": "true"
      })
    }

    function ir(uu) {
      let {
        max: Ru,
        bands: yu,
        ticks: Eu,
        now: Ku,
        settle: Qu,
        settleTone: mu,
        onExplain: Ju
      } = uu;
      const Nu = uu => Math.max(0, Math.min(Ru, uu)) / Ru * 100 + "%";
      let Xu = 0;
      return (0, eQ.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: Ju,
        children: [(0, eQ.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [yu.map((uu => {
            const Ru = {
              bottom: Nu(Xu),
              height: `calc(${Nu(uu.upTo)} - ${Nu(Xu)})`
            };
            return Xu = uu.upTo, (0, eQ.jsx)("i", {
              className: CK()("NxGaugeBand", uu.kind),
              style: Ru
            }, uu.kind)
          })), null !== Ku && (0, eQ.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Nu(Ku)
            }
          }), void 0 !== Qu && null !== Qu && (0, eQ.jsx)("i", {
            className: CK()("NxGaugeSettle", {
              Bad: "bad" === mu
            }),
            style: {
              bottom: Nu(Qu)
            }
          })]
        }), (0, eQ.jsx)("span", {
          className: "NxGaugeTicks",
          children: Eu.map((uu => (0, eQ.jsx)("small", {
            style: {
              bottom: Nu(uu)
            },
            children: uu
          }, uu)))
        })]
      })
    }

    function Yr(uu) {
      const [Ru, yu] = (0, Eu.useState)(null), [Ku, Qu] = (0, Eu.useState)((() => {
        try {
          return null === window.localStorage.getItem(uu)
        } catch {
          return !1
        }
      })), mu = (0, Eu.useRef)(null);
      (0, Eu.useEffect)((() => () => {
        null !== mu.current && clearTimeout(mu.current)
      }), []);
      const Ju = (0, Eu.useCallback)((Ru => {
          yu(Ru), Qu(!1);
          try {
            window.localStorage.setItem(uu, "1")
          } catch {}
          null !== mu.current && clearTimeout(mu.current), mu.current = setTimeout((() => {
            mu.current = null, yu(null)
          }), 5e3)
        }), [uu]),
        Nu = (0, Eu.useCallback)(((Ru, yu) => {
          const Eu = `${uu}:${Ru}`;
          try {
            if (null !== window.localStorage.getItem(Eu)) return;
            window.localStorage.setItem(Eu, "1")
          } catch {
            return
          }
          Ju(yu)
        }), [Ju, uu]);
      return {
        explained: Ru,
        hinting: Ku,
        explain: Ju,
        explainOnce: Nu
      }
    }

    function or(uu) {
      let {
        text: Ru,
        tone: yu,
        explained: Eu
      } = uu;
      return (0, eQ.jsxs)("p", {
        className: CK()("NxStatus", null === Eu ? yu : "Explain"),
        "aria-live": "polite",
        children: [null !== Eu && (0, eQ.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Eu && void 0 !== Eu ? Eu : Ru]
      })
    }
    const qr = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function Or(uu, Ru) {
      const yu = Number(uu[Ru]);
      return 1 === yu || 2 === yu || 3 === yu ? yu : 0
    }

    function vr(uu) {
      return !!CN("reactor", uu.baf2RxNeed) || void 0 !== uu.baf2RxLayout && uu.baf2RxNeed.some((uu => {
        let [Ru, yu] = uu;
        return yu > 0 && qr.includes(Ru)
      }))
    }
    const ar = "buildAFactory2Game:";

    function fr(uu) {
      let {
        status: Ru,
        store: yu,
        busy: Eu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)();
      return function(uu) {
        return 0 !== (uu.baf2RxFlags & pR) && (!uu.baf2RxFormed || void 0 !== uu.baf2RxLayout)
      }(Ru) ? (0, eQ.jsx)(bm.l, {
        disabled: !vr(Ru) || Eu,
        onClick: () => {
          yu.tap("fill", (() => {
            yu.send("fill")
          }))
        },
        children: Ku(void 0 !== Ru.baf2RxLayout ? `${ar}rxFillLayout` : `${ar}rxFill`)
      }) : null
    }

    function uB(uu) {
      let {
        status: Ru,
        store: yu,
        readOnly: Ku,
        bare: Qu = !1
      } = uu;
      const {
        t: mu
      } = (0, DK.E)(), Ju = Ru.baf2RxLayout, [Nu, Xu, Vu] = Ru.baf2RxDims, ru = (0, Eu.useMemo)((() => {
        if (void 0 === Ju) return 0;
        const uu = Uint8Array.from(Ju, ((uu, Ru) => Or(Ju, Ru)));
        return uN([Nu - 2, Xu - 2, Vu - 2], uu).max
      }), [Ju, Nu, Xu, Vu]);
      return void 0 === Ju ? null : (0, eQ.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Qu && (0, eQ.jsx)("span", {
          className: "Baf2RxHint",
          children: mu(`${ar}rxLayoutLine`, {
            amount: GN(ru)
          })
        }), !Ku && (0, eQ.jsx)(bm.e, {
          onClick: () => {
            yu.send("layout", 0)
          },
          children: mu(`${ar}rxLayoutHide`)
        })]
      })
    }
    const RB = "buildAFactory2Game:",
      yB = {
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

    function EB(uu) {
      let {
        id: Ru,
        title: yu,
        body: Eu,
        bodyParams: Ku,
        yes: Qu,
        cancel: mu,
        confirm: Ju
      } = uu;
      const {
        t: Nu
      } = (0, DK.E)();
      return (0, eQ.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": Ru,
        children: [(0, eQ.jsx)("h3", {
          id: Ru,
          children: Nu(yu)
        }), (0, eQ.jsx)("p", {
          children: Nu(Eu, Ku)
        }), (0, eQ.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, eQ.jsx)(bm.f, {
            onClick: mu,
            children: Nu(`${RB}rxCancel`)
          }), (0, eQ.jsx)(bm.F, {
            onClick: Ju,
            children: Nu(Qu)
          })]
        })]
      })
    }

    function KB(uu) {
      const [Ru, yu] = (0, Eu.useState)((() => uu.get()));
      return (0, Eu.useEffect)((() => (yu(uu.get()), uu.subscribe((() => {
        yu(uu.get())
      })))), [uu]), Ru
    }

    function QB(uu) {
      let {
        kind: Ru,
        cap: yu,
        busy: Ku = !1,
        whyNot: Qu = null,
        apart: mu
      } = uu;
      const {
        t: Ju
      } = (0, DK.E)(), [Nu, Xu] = (0, Eu.useState)(!1), Vu = null !== Qu, ru = (0, Eu.useRef)(null);
      if ((0, Eu.useEffect)((() => {
          Vu && Xu(!1)
        }), [Vu]), (0, Eu.useLayoutEffect)((() => {
          var uu;
          const Ru = null === (uu = ru.current) || void 0 === uu ? void 0 : uu.firstElementChild;
          Vu ? null === Ru || void 0 === Ru || Ru.setAttribute("aria-disabled", "true") : Ku || null === Ru || void 0 === Ru || Ru.removeAttribute("aria-disabled")
        })), !Nu || Vu) return (0, eQ.jsx)("span", {
        ref: ru,
        className: "Baf2RxApartWrap",
        children: (0, eQ.jsx)(bm.f, {
          disabled: Ku,
          className: CK()({
            Baf2RxNotYet: Vu
          }),
          onClick: () => {
            Qu ? Qu() : Xu(!0)
          },
          children: Ju(`${RB}rxApart`)
        })
      });
      const Bu = "battery" === Ru,
        xu = void 0 === yu ? `${RB}batApartConfirmBodyPlan` : `${RB}batApartConfirmBody`;
      return (0, eQ.jsx)(EB, {
        id: `baf2ApartTitle_${Ru}`,
        title: Bu ? `${RB}batApartConfirmTitle` : `${RB}rxApartConfirmTitle`,
        body: Bu ? xu : `${RB}rxApartConfirmBody`,
        bodyParams: void 0 === yu ? void 0 : {
          cap: yu
        },
        yes: `${RB}rxApart`,
        cancel: () => {
          Xu(!1)
        },
        confirm: () => {
          Xu(!1), mu()
        }
      })
    }

    function mB(uu) {
      let {
        mood: Ru,
        big: yu
      } = uu;
      const Eu = yB[Ru],
        Ku = [];
      return Eu.rows.forEach(((uu, Ru) => {
        for (let yu = 0; yu < uu.length; yu++) "." !== uu[yu] && Ku.push((0, eQ.jsx)("rect", {
          x: yu + 1,
          y: Ru + 1,
          width: 1,
          height: 1,
          fill: "w" === uu[yu] ? "#8fd3ff" : Eu.colour
        }, `${yu},${Ru}`))
      })), (0, eQ.jsxs)("svg", {
        className: CK()("Baf2RxFace", {
          Big: yu,
          Alarm: "alarm" === Ru
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, eQ.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, eQ.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Ku]
      })
    }

    function JB(uu) {
      return WQ(uu, "+").replace("+", "")
    }

    function NB(uu) {
      let {
        kind: Ru,
        dims: yu,
        cap: Eu,
        disabled: Ku,
        compact: Qu,
        resize: mu
      } = uu;
      const {
        t: Ju
      } = (0, DK.E)(), {
        min: Nu,
        max: Xu
      } = zy(Ru), Vu = Math.min(Eu, Xu), ru = [`${RB}rxWide`, `${RB}rxTall`, `${RB}rxDeep`], Bu = {
        w: String(yu[0]),
        h: String(yu[1]),
        d: String(yu[2]),
        blocks: String(IN(Ru, yu))
      };
      return (0, eQ.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, eQ.jsx)("div", {
          className: "Baf2RxSteppers",
          children: yu.map(((uu, Ru) => {
            const Qu = Eu => {
                const Ku = [yu[0], yu[1], yu[2]];
                Ku[Ru] = uu + Eu, mu(Ku)
              },
              Bu = uu >= Vu;
            return (0, eQ.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, eQ.jsx)("button", {
                type: "button",
                "aria-label": Ju(`${RB}rxSmaller`),
                disabled: Ku || uu <= Nu,
                onClick: () => {
                  Qu(-1)
                },
                children: "\u2212"
              }), (0, eQ.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [uu, (0, eQ.jsx)("small", {
                  children: Ju(ru[Ru])
                })]
              }), (0, eQ.jsx)("button", {
                type: "button",
                "aria-label": Ju(`${RB}rxBigger`),
                disabled: Ku || Bu,
                onClick: () => {
                  Qu(1)
                },
                children: Bu && Eu < Xu ? "\ud83d\udd12" : "+"
              })]
            }, ru[Ru])
          }))
        }), !Qu && (0, eQ.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === Ru ? Ju(`${RB}rxSizeLine`, {
            ...Bu,
            water: String(MN(yu))
          }) : Ju(`${RB}batSizeLine`, Bu)
        })]
      })
    }

    function XB(uu) {
      let {
        on: Ru,
        label: yu,
        disabled: Eu,
        locked: Ku,
        pending: Qu,
        toggle: mu
      } = uu;
      return (0, eQ.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": Ru,
        disabled: Eu,
        "aria-disabled": Ku || void 0,
        className: CK()("Baf2RxSwitch", {
          On: Ru,
          Locked: Ku,
          Pending: Qu
        }),
        onClick: mu,
        children: [(0, eQ.jsx)("span", {
          className: "Baf2RxKnob"
        }), yu]
      })
    }
    const VB = "buildAFactory2Game:",
      rB = .95;

    function BB(uu, Ru) {
      return 0 !== (uu.baf2RxFlags & Ru)
    }

    function xB(uu) {
      return "cryo" === uu ? au.o : au.q
    }

    function SB(uu) {
      var Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu;
      return uu.baf2RxCryo ? {
        OB: "cryo",
        usePerS: null !== (Ku = uu.baf2RxCryoUse) && void 0 !== Ku ? Ku : 0,
        needPerS: null !== (Qu = uu.baf2RxCryoNeed) && void 0 !== Qu ? Qu : 0,
        inPerS: null !== (mu = uu.baf2RxCryoIn) && void 0 !== mu ? mu : 0,
        stored: null !== (Ju = uu.baf2RxCryoStored) && void 0 !== Ju ? Ju : 0,
        makersShort: null !== (Nu = uu.baf2RxMixersShort) && void 0 !== Nu ? Nu : 0,
        waterBeside: null !== (Xu = uu.baf2RxWaterUse) && void 0 !== Xu ? Xu : 0,
        pct: uu.baf2RxWater
      } : {
        OB: "water",
        usePerS: null !== (Ru = uu.baf2RxWaterUse) && void 0 !== Ru ? Ru : 0,
        needPerS: null !== (yu = uu.baf2RxWaterNeed) && void 0 !== yu ? yu : 0,
        inPerS: uu.baf2RxWaterIn,
        stored: uu.baf2RxWaterStored,
        makersShort: null !== (Eu = uu.baf2RxCondensersShort) && void 0 !== Eu ? Eu : 0,
        waterBeside: 0,
        pct: uu.baf2RxWater
      }
    }

    function pB(uu) {
      const Ru = "running" === uu.baf2RxState || "idle" === uu.baf2RxState;
      return uu.baf2RxFormed && uu.baf2RxTarget !== uu.baf2RxThrottle && Ru ? TB(uu, uu.baf2RxTarget) : null
    }

    function TB(uu, Ru) {
      const [yu, Eu, Ku, , , , Qu, , mu] = uu.baf2RxStats, Ju = BB(uu, xR), Nu = SB(uu), Xu = Nu.pct / 100, {
        gen: Vu,
        out: ru,
        load: Bu
      } = function(uu, Ru, yu, Eu) {
        const Ku = yu ? YJ : 1,
          Qu = Math.min(uu.fuelHeat * Ku * Math.max(0, Math.min(1, Ru)), uu.size * Ku);
        return {
          gen: Qu,
          out: Qu,
          load: rN(Qu, uu.cooling, Eu)
        }
      }({
        fuelHeat: yu,
        cooling: Eu,
        size: Ku
      }, Ru / 100, Ju, Xu), xu = xN(Qu || fJ(...uu.baf2RxDims)), Su = uu.baf2RxHeat, pu = Math.abs(Bu - Su), Tu = function(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : au.q;
        const Qu = yu ? YJ : 1,
          mu = Math.min(uu.fuelHeat * Qu * Ru / 100, uu.size * Qu),
          Ju = mu,
          Nu = uu.fuelHeat * Qu,
          Xu = uu.cooling * VN(Eu.pct / 100),
          Vu = Nu > 0 && Xu < uu.size * Qu ? Math.floor(100 * Xu / Nu) : 100,
          ru = mu * Ku - Eu.inPerS;
        return {
          out: Ju,
          hotAbove: Vu >= 100 ? null : Math.max(0, Vu),
          waterSecs: Eu.pct >= 100 && ru > 1e-6 ? Math.max(0, Eu.stored) / ru : null
        }
      }({
        fuelHeat: yu,
        cooling: Eu,
        size: Ku
      }, Ru, Ju, {
        pct: Nu.pct,
        inPerS: Nu.inPerS,
        stored: Nu.stored
      }, xB(Nu.OB));
      return {
        pct: Ru,
        out: ru,
        coolPerS: Vu * xB(Nu.OB),
        pelletsPerMin: mu > 0 ? ru / mu * 60 : 0,
        settle: Bu,
        settleS: pu > 2 ? xu * Math.log(pu / 2) : 0,
        overheatS: Bu > 100 && Su < 100 ? xu * Math.log((Bu - Su) / (Bu - 100)) : null,
        hotAbove: Tu.hotAbove,
        coolantSecs: Tu.waterSecs
      }
    }

    function WB(uu) {
      return uu.baf2RxThrottle <= 0 && "running" !== uu.baf2RxState ? 0 : TB(uu, uu.baf2RxTarget).pelletsPerMin / 60
    }

    function jB(uu, Ru) {
      if (uu <= 0 || Ru <= 0) return 0;
      const yu = uu / Ru;
      return yu < .25 ? 1 : yu < .5 ? 2 : yu < .8 ? 3 : 4
    }

    function HB(uu, Ru) {
      const yu = {};
      for (const [Eu, Ku] of Object.entries(Ru.params)) yu[Eu] = "time" === Eu ? dQ(uu, Ku) : "amount" === Eu ? GN(Ku) : String(Math.round(Ku));
      return uu(Ru.key, yu)
    }

    function dB(uu, Ru) {
      return {
        key: `${VB}${uu}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: Ru
      }
    }

    function bB(uu) {
      var Ru;
      const yu = BB(uu, xR),
        Eu = "running" === uu.baf2RxState,
        Ku = WN(uu),
        Qu = uu.baf2RxHeat;
      var mu;
      if (Eu && Qu > PJ) return {
        key: null !== (mu = Ku.fix) && void 0 !== mu ? mu : `${VB}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const Ju = Eu ? TB(uu, uu.baf2RxTarget).coolantSecs : null,
        Nu = "cryo" === SB(uu).OB;
      if (null !== Ju && Ju >= 1 && Ju <= 30) return dB(Nu ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Xu = vJ(fJ(...uu.baf2RxDims)).waste,
        Vu = Eu ? kN(uu, Xu, WB(uu)).fullInS : null;
      if (null !== Vu && Vu <= 120 && uu.baf2RxWaste >= .5 * Xu) return dB("rxWarnWaste", "warn");
      if (null !== Ju && Ju >= 1) return dB(Nu ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: Ju
      });
      const ru = "noWater" === uu.baf2RxState && Qu > PJ;
      if (uu.baf2RxDamage >= 1 && !ru) return dB("rxDamagedHeals", "warn", {
        pct: uu.baf2RxDamage
      });
      if (uu.baf2RxCryoCut) return dB("rxFix_cryoCut", "warn");
      const Bu = SB(uu);
      if ("noWater" === uu.baf2RxState && "cryo" === Bu.OB) return dB("noWater" === uu.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const xu = Ku.fix === `${VB}rxFix_scramCool` || "idle" === uu.baf2RxState && uu.baf2RxTarget <= 0;
      if (xu && uu.baf2RxFuel <= 0) return dB("rxFix_noFuel", "warn");
      if (xu && uu.baf2RxWaterIn <= 0 && (null !== (Ru = uu.baf2RxCryoIn) && void 0 !== Ru ? Ru : 0) <= 0) return dB("rxFix_noWater", "warn");
      const Su = Ku.fix === `${VB}rxFix_scramCool` ? HN(uu) : null;
      if (null !== Su) return {
        key: Su.key,
        params: {
          amount: Su.amount
        },
        tone: "info"
      };
      if ("running" !== uu.baf2RxState && "idle" !== uu.baf2RxState && null !== Ku.fix) return {
        key: Ku.fix,
        params: {},
        tone: "scram" === uu.baf2RxState ? "info" : ru ? "bad" : "warn"
      };
      var pu;
      if ("idle" === uu.baf2RxState && uu.baf2RxTarget <= 0) return {
        key: null !== (pu = Ku.fix) && void 0 !== pu ? pu : `${VB}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const Tu = uu.baf2RxCryoStarved;
      if ("cryo" === Bu.OB && Tu && Bu.needPerS > 0 && Bu.usePerS < rB * Bu.needPerS) return dB("noWater" === Tu ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const Wu = "cryo" === Bu.OB,
        ju = Bu.needPerS > 0 && Bu.usePerS < rB * Bu.needPerS;
      if (Wu ? ju || Bu.makersShort > 0 && Bu.pct < 100 : Bu.pct < 100) {
        const Ru = Wu && ju ? Math.floor(100 * Bu.usePerS / Bu.needPerS) : Math.min(100, Bu.pct);
        if (Bu.makersShort > 0) {
          return dB(`${Wu?"rxCryoShortLine":"rxWaterShortLine"}${1===Bu.makersShort?"One":""}${!Wu&&uu.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: Ru,
            count: Bu.makersShort
          })
        }
        return dB(Wu ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: Ru
        })
      }
      const Hu = function(uu) {
        const [Ru, yu, Eu] = uu.baf2RxStats, Ku = SB(uu), Qu = BN({
          fuelHeat: Ru,
          cooling: yu,
          size: Eu
        }, "cryo" === Ku.OB ? au.g : 1, !0);
        return Math.max(0, Qu * xB(Ku.OB) - Ku.inPerS)
      }(uu);
      if (yu && Hu > 0) return dB("cryo" === Bu.OB ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Hu)
      });
      if (Qu >= NN) return dB("rxHotLine", "warn");
      const du = TB(uu, uu.baf2RxTarget);
      var bu;
      if (null !== du.overheatS) return dB("rxWillOverheat", "bad", {
        pct: uu.baf2RxTarget,
        time: du.overheatS,
        safe: null !== (bu = du.hotAbove) && void 0 !== bu ? bu : 100
      });
      if (Math.abs(du.settle - Qu) >= 3) return dB("rxSettling", "info", {
        pct: uu.baf2RxTarget,
        heat: Math.round(du.settle),
        time: du.settleS
      });
      const Cu = HN(uu);
      if (null !== Cu) return {
        key: Cu.key,
        params: {
          amount: Cu.amount
        },
        tone: "info"
      };
      const ku = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== Ru && ("running" !== Ru || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === uu.rods ? `${SN}rxLimitNoRods` : `${SN}rxLimit_${JN(uu)}`
      }({
        rods: uu.baf2RxStats[3],
        ...jN(uu)
      }, uu.baf2RxState, uu.baf2RxOut >= rB * uu.baf2RxMaxNow, !1);
      if (ku === `${VB}rxLimit_size`) {
        const [Ru, , yu, Eu] = uu.baf2RxStats, Ku = Eu > 0 && Ru > 0 ? Math.ceil(yu / (Ru / Eu) - 1e-9) : Eu, Qu = uu.baf2RxDims.every((uu => uu >= zy("reactor").max));
        if (Ku < Eu) return dB(Qu ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Ku,
          have: Eu
        });
        if (Qu) return dB("rxLimit_sizeMax", "info")
      }
      return null !== ku ? {
        key: ku,
        params: {},
        tone: "info"
      } : dB("rxSteady", "ok", {
        pct: uu.baf2RxTarget
      })
    }

    function CB(uu) {
      var Ru;
      if (uu.melted) return dB("rxMeltedBody", "bad");
      if (-1 === uu.bad) return dB("rxFix_noRoom", "warn");
      if (uu.bad > 0) return dB(1 === uu.bad ? "rxBadOne" : "rxBad", "warn", {
        count: uu.bad
      });
      if (uu.left > 0) {
        const Ru = 1 === uu.left ? "One" : "";
        return dB(uu.canFill ? `rxPlanLeft${Ru}` : `rxPlanLeftNoFill${Ru}`, "info", {
          count: uu.left
        })
      }
      if (0 === uu.rods) return dB("rxLimitNoRods", "warn");
      const yu = null !== (Ru = uu.idle) && void 0 !== Ru ? Ru : 0;
      return yu > 0 ? dB(1 === yu ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: yu
      }) : dB("rxPlanReady", "ok")
    }

    function kB(uu) {
      return Math.floor(Math.max(0, uu[1] - 1) / 2)
    }

    function eB(uu) {
      if (uu >= yN && uu < EN) {
        const Ru = uu - yN;
        return {
          key: 0 === Ru ? `${VB}rxWhy_rodAlone` : 1 === Ru ? `${VB}rxWhy_rodOne` : `${VB}rxWhy_rod`,
          params: {
            count: String(Ru),
            heat: String(gJ * (1 + cJ * Ru))
          }
        }
      }
      return uu === EN ? {
        key: `${VB}rxWhy_channel`,
        params: {
          amount: String(zJ)
        }
      } : uu === KN ? {
        key: `${VB}rxWhy_deadChannel`,
        params: {}
      } : uu === QN ? {
        key: `${VB}rxWhy_graphite`,
        params: {}
      } : {
        key: `${VB}rxWhy_core`,
        params: {}
      }
    }
    const AB = "buildAFactory2Game:";

    function DB(uu, Ru) {
      return 0 !== (uu.baf2RxFlags & Ru)
    }

    function MB(uu) {
      let {
        status: Ru,
        pending: yu,
        store: Eu,
        explain: Ku
      } = uu;
      const {
        t: Qu
      } = (0, DK.E)(), mu = DB(Ru, BR), Ju = Ru.baf2RxTarget, Nu = Ru.baf2RxThrottle, Xu = function(uu) {
        return {
          press: () => {
            uu.throttlePress()
          },
          drag: Ru => {
            uu.throttleDrag(Ru)
          },
          release: () => {
            uu.throttleRelease()
          }
        }
      }(Eu), Vu = null === (ru = TB(Ru, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, ru - 10),
        red: ru
      };
      var ru;
      return (0, eQ.jsxs)("div", {
        className: CK()("Baf2RxThrottle", {
          Off: mu
        }),
        onClick: () => {
          mu && Ku(`${AB}rxWhy_startFirst`)
        },
        children: [(0, eQ.jsx)("span", {
          className: "HideNarrow",
          children: Qu(`${AB}rxThrottle`)
        }), (0, eQ.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, eQ.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: Ju,
            disabled: mu,
            style: mu ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Qu(`${AB}rxThrottle`),
            onPointerDown: () => {
              Xu.press();
              const uu = () => {
                window.removeEventListener("pointerup", uu), window.removeEventListener("pointercancel", uu), Xu.release()
              };
              window.addEventListener("pointerup", uu), window.addEventListener("pointercancel", uu)
            },
            onKeyUp: Xu.release,
            onChange: uu => {
              Xu.drag(Number(uu.target.value))
            }
          }), (0, eQ.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Vu.amber}%, #ffb020 ${Vu.amber}% ${Vu.red}%, #ff3b30 ${Vu.red}%)`
            },
            "aria-hidden": "true"
          }), (0, eQ.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Nu}% + ${8*(1-Nu/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, eQ.jsxs)("b", {
          children: [`${Ju}%`, (0, eQ.jsx)("i", {
            className: CK()("Baf2RxPendingDot", {
              On: yu
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function IB(uu) {
      let {
        status: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)(), Eu = TB(Ru, Ru.baf2RxTarget), Ku = SB(Ru).OB, Qu = yu("cryo" === Ku ? `${AB}rxRateCryo` : `${AB}rxRateWater`, {
        rate: JB(Eu.coolPerS)
      }), mu = yu(`${AB}rxChain`, {
        pct: String(Ru.baf2RxTarget),
        out: GN(Eu.out),
        heat: String(Math.round(Eu.settle)),
        coolant: Qu
      }), Ju = null !== Eu.coolantSecs ? Eu.coolantSecs >= 1 ? yu("cryo" === Ku ? `${AB}rxThrottleCryoOut` : `${AB}rxThrottleWaterOut`, {
        time: dQ(yu, Eu.coolantSecs)
      }) : yu("cryo" === Ku ? `${AB}rxThrottleCryoDry` : `${AB}rxThrottleWaterDry`) : null;
      return (0, eQ.jsxs)("p", {
        className: "Baf2RxChain",
        children: [mu, null !== Ju ? (0, eQ.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", Ju]
        }) : (0, eQ.jsxs)("span", {
          children: [" \xb7 ", yu(`${AB}rxChainPellets`, {
            amount: UN(Eu.pelletsPerMin)
          })]
        })]
      })
    }

    function GB(uu) {
      let {
        view: Ru,
        store: yu,
        explain: Ku,
        explainOnce: Qu
      } = uu;
      const {
        t: mu
      } = (0, DK.E)(), {
        status: Ju
      } = Ru, [Nu, Xu] = (0, Eu.useState)(!1), Vu = DB(Ju, BR), Bu = DB(Ju, xR), xu = !DB(Ju, TR), Su = Ju.baf2RxHeat > 100;
      return (0, eQ.jsxs)(eQ.Fragment, {
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, eQ.jsx)(MB, {
            status: Ju,
            pending: Ru.throttlePending,
            store: yu,
            explain: Ku
          }), (0, eQ.jsx)(XB, {
            on: Bu,
            label: Bu ? mu(`${AB}rxOdLeft`, {
              time: dQ(mu, Ju.baf2RxOdLeft)
            }) : mu(`${AB}rxOverdrive`),
            locked: xu,
            pending: 0 !== (Ru.pendingFlags & xR),
            toggle: () => {
              xu ? Ku(`${AB}rxOverdriveTier`, {
                amount: String(ru(13))
              }) : Bu ? yu.setFlag(xR, !1) : Ru.odConfirmed ? yu.setFlag(xR, !0) : Xu(!0)
            }
          }), Vu || Ru.startGuard ? (0, eQ.jsx)(bm.n, {
            disabled: Ru.busy.has("start") || Ru.startGuard,
            onClick: () => {
              yu.tap("start", (() => {
                yu.setFlag(BR, !1)
              }))
            },
            children: mu(Ru.startGuard ? `${AB}rxStarting` : `${AB}rxStart`)
          }) : (0, eQ.jsx)("span", {
            className: CK()("Baf2RxScram", {
              Pulse: Su
            }),
            children: (0, eQ.jsx)(bm.F, {
              onClick: () => {
                yu.shutDown()
              },
              children: mu(`${AB}rxScram`)
            })
          })]
        }), (0, eQ.jsx)(IB, {
          status: Ju
        }), Nu && (0, eQ.jsx)(EB, {
          id: "baf2RxOdTitle",
          title: `${AB}rxOdConfirmTitle`,
          body: `${AB}rxOdConfirmBody`,
          yes: `${AB}rxOdConfirm`,
          cancel: () => {
            Xu(!1)
          },
          confirm: () => {
            Xu(!1), yu.tap("odConfirm", (() => {
              yu.confirmOverdrive(), yu.setFlag(xR, !0)
            })), Qu(`${AB}rxWhy_overdrive`)
          }
        })]
      })
    }

    function UB(uu) {
      let {
        view: Ru,
        store: yu,
        keepSize: Eu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)(), {
        status: Qu
      } = Ru;
      return (0, eQ.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, eQ.jsx)(NB, {
          kind: "reactor",
          dims: Ru.dims,
          cap: Qu.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: uu => {
            yu.resize(uu)
          }
        }), Eu ? (0, eQ.jsx)(bm.f, {
          onClick: Eu,
          children: Ku(`${AB}rxKeepSize`)
        }) : (0, eQ.jsxs)(eQ.Fragment, {
          children: [(0, eQ.jsx)(XB, {
            on: Ru.guide,
            label: Ku(`${AB}rxGuide`),
            toggle: () => {
              yu.toggleGuide()
            }
          }), DB(Qu, jR) && (0, eQ.jsx)(XB, {
            on: Ru.starter,
            label: Ku(`${AB}rxStarter`),
            toggle: () => {
              yu.toggleStarter()
            }
          }), (0, eQ.jsx)(fr, {
            status: Qu,
            store: yu,
            busy: Ru.busy.has("fill")
          })]
        })]
      })
    }

    function nB(uu) {
      let {
        need: Ru,
        kind: yu = "reactor",
        explain: Eu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)(), Qu = Ru.length <= 3, mu = Ru.reduce(((uu, Ru) => {
        let [, yu] = Ru;
        return uu + yu
      }), 0);
      return (0, eQ.jsxs)("div", {
        className: CK()("Baf2RxParts", {
          Compact: !Qu
        }),
        onClick: () => {
          Eu("battery" === yu ? `${AB}batWhy_store` : `${AB}rxShellHint`)
        },
        children: [mu > 0 && (0, eQ.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === mu ? Ku(`${AB}rxBlocksOne`) : Ku(`${AB}rxBlocks`, {
            blocks: String(mu)
          })
        }), 0 === Ru.length ? (0, eQ.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Ku("battery" === yu ? `${AB}batPartsDone` : `${AB}rxShellDone`)
        }) : bN(Ru).map((uu => {
          let [Ru, yu, Eu] = uu;
          const mu = function(uu) {
            const Ru = DN[uu];
            if (void 0 === Ru) return null;
            const [yu, Eu, Ku] = eN[Ru].colour.map((uu => Math.round(255 * uu)));
            return `rgb(${yu}, ${Eu}, ${Ku})`
          }(Ru);
          return (0, eQ.jsxs)("span", {
            className: "Baf2RxChip",
            title: EQ(Ku, Ru),
            children: [(0, eQ.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === mu ? {
                visibility: "hidden"
              } : {
                background: mu
              },
              title: Ku(`${AB}rxShopGhost`)
            }), (0, eQ.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, eQ.jsx)(IK.c, {
                itemName: Ru,
                amount: 0
              })
            }), (0, eQ.jsx)("span", {
              className: "Baf2RxChipName",
              children: Qu ? `${yu} ${Ju=EQ(Ku,Ru),Ju.replace(/^(Reactor|Battery) (?=\S)/,"")}` : yu
            }), Eu >= yu ? (0, eQ.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, eQ.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Qu ? Ku(`${AB}rxShopShort`, {
                count: String(yu - Eu)
              }) : "\u2212" + (yu - Eu)
            })]
          }, Ru);
          var Ju
        }))]
      })
    }
    const sB = "buildAFactory2Game:";

    function tB(uu) {
      var Ru, yu, Ku, Qu, mu, Ju, Nu;
      let {
        store: Xu,
        close: Vu
      } = uu;
      const {
        t: ru
      } = (0, DK.E)(), Bu = Fm(), xu = KB(Xu), {
        explained: Su,
        explain: pu
      } = Yr("baf2RxExplained"), Tu = (0, Eu.useCallback)(((uu, Ru) => {
        pu(ru(uu, Ru))
      }), [pu, ru]), Wu = null === xu || void 0 === xu ? void 0 : xu.status, ju = !0 === (null === Wu || void 0 === Wu ? void 0 : Wu.baf2BatReadOnly), Hu = uu => {
        Wu && Bu.send(rR(Wu.baf2BatAt, uu))
      }, [du, bu, Cu] = null !== (Ru = null === xu || void 0 === xu ? void 0 : xu.dims) && void 0 !== Ru ? Ru : [0, 0, 0], ku = GN(null !== (yu = null === xu || void 0 === xu ? void 0 : xu.Nr) && void 0 !== yu ? yu : 0), eu = !0 === (null === Wu || void 0 === Wu ? void 0 : Wu.baf2BatFormed), Au = null !== (Ku = null === Wu || void 0 === Wu ? void 0 : Wu.baf2BatStored) && void 0 !== Ku ? Ku : 0, Du = Math.max(1, null !== (Qu = null === Wu || void 0 === Wu ? void 0 : Wu.baf2BatIslandCap) && void 0 !== Qu ? Qu : 1), Mu = Math.min(100, 100 * Au / Du), Iu = null === Wu || void 0 === Wu ? void 0 : Wu.baf2BatNetPerS, Gu = function(uu, Ru, yu) {
        return yu > 0 && Ru >= yu ? "full" : void 0 !== uu && uu >= .05 ? "charging" : void 0 !== uu && uu <= -.05 && Ru > 0 ? "draining" : "steady"
      }(Iu, Au, null !== (mu = null === Wu || void 0 === Wu ? void 0 : Wu.baf2BatIslandCap) && void 0 !== mu ? mu : 0), Uu = null !== (Ju = null === Wu || void 0 === Wu ? void 0 : Wu.baf2BatMadePerS) && void 0 !== Ju ? Ju : 0, nu = null !== (Nu = null === Wu || void 0 === Wu ? void 0 : Wu.baf2BatUsedPerS) && void 0 !== Nu ? Nu : 0;
      let su, tu = {},
        lu = "info";
      if (Wu)
        if (eu) "charging" === Gu ? (su = `${sB}batLine_charging`, tu = {
          time: dQ(ru, (Du - Au) / Math.max(.05, null !== Iu && void 0 !== Iu ? Iu : 0))
        }, lu = "ok") : "draining" === Gu ? (su = `${sB}batLine_draining`, tu = {
          time: dQ(ru, Au / Math.max(.05, -(null !== Iu && void 0 !== Iu ? Iu : 0)))
        }, lu = "warn") : su = "full" === Gu ? `${sB}batLine_full` : Au <= 0 && nu > 0 ? `${sB}batLine_empty` : `${sB}batLine_steady`;
        else {
          var gu;
          const uu = CB({
            left: Wu.baf2BatNeed.reduce(((uu, Ru) => {
              let [, yu] = Ru;
              return uu + yu
            }), 0),
            bad: Wu.baf2BatBad,
            rods: 1,
            canFill: !0 === Wu.baf2BatCanFill,
            melted: !1
          });
          su = uu.key, tu = {
            count: String(null !== (gu = uu.params.count) && void 0 !== gu ? gu : 0)
          }, lu = uu.tone
        }
      else su = `${sB}batLine_steady`;
      const cu = Math.max(Uu, nu, 1);
      return (0, eQ.jsx)(dm.e, {
        close: Vu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, eQ.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, eQ.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, eQ.jsx)(IK.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, eQ.jsxs)("div", {
                children: [(0, eQ.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: ru(`${sB}batTitle`)
                }), Wu && (0, eQ.jsxs)("p", {
                  className: CK()("Baf2RxSubtitle", {
                    good: eu && "charging" === Gu,
                    warn: eu && "draining" === Gu
                  }),
                  children: [du, "\xd7", bu, "\xd7", Cu, " \xb7 ", ru(eu ? `${sB}batState_${Gu}` : `${sB}rxSubPlanShort`)]
                })]
              })]
            }), (0, eQ.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Wu && !ju && (0, eQ.jsx)(QB, {
                kind: "battery",
                cap: eu ? ku : void 0,
                busy: null === xu || void 0 === xu ? void 0 : xu.busy.has("apart"),
                apart: () => {
                  Xu.tap("apart", (() => {
                    Hu("apart")
                  }))
                }
              }), (0, eQ.jsx)(bm.h, {
                onClick: Vu
              })]
            })]
          }), xu && Wu && (0, eQ.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, eQ.jsxs)("div", {
              className: CK()("Baf2RxFlow Baf2BatFlow", {
                Plan: !eu
              }),
              children: [(0, eQ.jsx)(hr, {
                kind: "Power",
                label: ru(`${sB}batMade`),
                number: eu ? `\u26a1 ${GN(Uu)}/s` : "\u2014",
                note: ru(`${sB}batMadeNote`),
                share: eu ? Uu / cu : void 0,
                onExplain: () => {
                  Tu(`${sB}batWhy_made`)
                }
              }), (0, eQ.jsx)(Pr, {
                kind: "Power",
                step: eu ? jB(Uu, cu) : 0,
                planned: !eu
              }), (0, eQ.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  Tu(`${sB}batWhy_store`)
                },
                children: [(0, eQ.jsx)(ir, {
                  max: 100,
                  bands: [{
                    upTo: eu ? Mu : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, eQ.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, eQ.jsx)("b", {
                    className: "Baf2BatStored",
                    children: eu ? ru(`${sB}batStoredOf`, {
                      amount: GN(Au),
                      cap: GN(Wu.baf2BatIslandCap)
                    }) : ru(`${sB}batWillHold`, {
                      cap: ku
                    })
                  }), (0, eQ.jsx)("span", {
                    children: ru(`${sB}batAdds`, {
                      cap: ku
                    })
                  }), eu && (0, eQ.jsx)("small", {
                    children: ru(`${sB}batBreakNote`, {
                      cap: ku
                    })
                  })]
                })]
              }), (0, eQ.jsx)(Pr, {
                kind: "Power",
                step: eu ? jB(nu, cu) : 0,
                planned: !eu
              }), (0, eQ.jsx)(hr, {
                kind: "Power",
                label: ru(`${sB}batUsed`),
                number: eu ? `\u26a1 ${GN(nu)}/s` : "\u2014",
                note: ru(`${sB}batUsedNote`),
                share: eu ? nu / cu : void 0,
                onExplain: () => {
                  Tu(`${sB}batWhy_used`)
                }
              })]
            }), (0, eQ.jsx)(or, {
              text: ru(su, tu),
              tone: lu,
              explained: Su
            }), ju ? (0, eQ.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: ru(`${sB}rxNotYours`)
            }) : !eu && (0, eQ.jsxs)(eQ.Fragment, {
              children: [(0, eQ.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, eQ.jsx)(NB, {
                  kind: "battery",
                  dims: xu.dims,
                  cap: Wu.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: uu => {
                    Xu.resize(uu)
                  }
                }), (0, eQ.jsx)(XB, {
                  on: xu.guide,
                  label: ru(`${sB}rxGuide`),
                  toggle: () => {
                    Xu.toggleGuide()
                  }
                }), Wu.baf2BatCanFill && (0, eQ.jsx)(bm.l, {
                  disabled: !CN("battery", Wu.baf2BatNeed) || xu.busy.has("fill"),
                  onClick: () => {
                    Xu.tap("fill", (() => {
                      Hu("fill")
                    }))
                  },
                  children: ru(`${sB}rxFill`)
                })]
              }), (0, eQ.jsx)(nB, {
                need: Wu.baf2BatNeed,
                kind: "battery",
                explain: Tu
              })]
            })]
          })]
        })
      })
    }
    const lB = "buildAFactory2Game:",
      gB = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function cB(uu, Ru) {
      return uu === RN ? null : Ru ? "#4a4440" : uu < EN ? gB[uu - yN] : uu === EN ? "#3fd0f0" : uu === KN ? "#2c3e4c" : "#55585e"
    }

    function LB(uu) {
      let {
        inner: Ru,
        looks: yu,
        layer: Eu,
        setLayer: Ku,
        glow: Qu,
        melted: mu,
        explain: Ju
      } = uu;
      const {
        t: Nu
      } = (0, DK.E)(), [Xu, Vu, ru] = Ru, Bu = Math.max(0, Math.min(Vu - 1, Eu)), xu = [];
      for (let pu = 0; pu < ru; pu++)
        for (let uu = 0; uu < Xu; uu++) {
          var Su;
          const Ru = null !== (Su = yu[(Bu * ru + pu) * Xu + uu]) && void 0 !== Su ? Su : RN,
            Eu = cB(Ru, mu),
            Ku = Ru >= yN && Ru < EN;
          xu.push(null === Eu ? (0, eQ.jsx)("circle", {
            cx: uu + .5,
            cy: pu + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${uu},${pu}`) : (0, eQ.jsx)("rect", {
            x: uu + .06,
            y: pu + .06,
            width: .88,
            height: .88,
            fill: Eu,
            opacity: Ku && !mu ? .5 + .5 * Qu : 1,
            onClick: uu => {
              uu.stopPropagation();
              const yu = eB(Ru);
              Ju(yu.key, yu.params)
            }
          }, `${uu},${pu}`))
        }
      return (0, eQ.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, eQ.jsx)("svg", {
          className: CK()("Baf2RxMapGrid", {
            Melted: mu
          }),
          viewBox: `0 0 ${Math.max(1,Xu)} ${Math.max(1,ru)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Nu(`${lB}rxWhy_core`),
          onClick: () => {
            Ju(`${lB}rxWhy_core`, {})
          },
          children: xu
        }), Vu > 1 && (0, eQ.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, eQ.jsx)("button", {
            type: "button",
            "aria-label": Nu(`${lB}rxLayerDown`),
            disabled: Bu <= 0,
            onClick: () => {
              Ku(Bu - 1)
            },
            children: "\u25bc"
          }), (0, eQ.jsxs)("span", {
            children: [(0, eQ.jsx)("span", {
              className: "HideNarrow",
              children: Nu(`${lB}rxLayer`, {
                n: String(Bu + 1),
                of: String(Vu)
              })
            }), (0, eQ.jsx)("span", {
              className: "ShowNarrow",
              children: Nu(`${lB}rxLayerShort`, {
                n: String(Bu + 1),
                of: String(Vu)
              })
            })]
          }), (0, eQ.jsx)("button", {
            type: "button",
            "aria-label": Nu(`${lB}rxLayerUp`),
            disabled: Bu >= Vu - 1,
            onClick: () => {
              Ku(Bu + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const zB = "buildAFactory2Game:",
      FB = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: iJ,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: TN,
        kind: "red"
      }],
      wB = [50, iJ, 100];

    function ZB(uu) {
      let {
        stats: Ru,
        t: yu,
        explain: Eu
      } = uu;
      const Ku = JN(Ru),
        Qu = Math.max(1, Ru.fuelHeat, Ru.cooling, Ru.size),
        mu = [
          ["fuel", `${zB}rxBarRods`, Ru.fuelHeat],
          ["cooling", `${zB}rxBarCooling`, Ru.cooling],
          ["size", `${zB}rxBarSize`, Ru.size]
        ];
      return (0, eQ.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Eu(`${zB}rxWhy_bars`)
        },
        children: [(0, eQ.jsx)("span", {
          className: "Baf2RxMostLine",
          children: yu(`${zB}rxMost`, {
            amount: GN(Math.min(Ru.fuelHeat, Ru.cooling, Ru.size))
          })
        }), (0, eQ.jsx)("span", {
          className: "Baf2RxMostBars",
          children: mu.map((uu => {
            let [Ru, Eu, mu] = uu;
            return (0, eQ.jsxs)("span", {
              className: CK()("Baf2RxMostBar", Ru, {
                Low: Ru === Ku
              }),
              children: [(0, eQ.jsx)("small", {
                children: yu(Eu)
              }), (0, eQ.jsx)("i", {
                children: (0, eQ.jsx)("b", {
                  style: {
                    width: 100 * mu / Qu + "%"
                  }
                })
              })]
            }, Ru)
          }))
        })]
      })
    }

    function hB(uu) {
      var Ru;
      let {
        view: yu,
        heat: Ku,
        settle: Qu,
        settleLine: mu,
        settleBad: Ju,
        explain: Nu
      } = uu;
      const {
        t: Xu
      } = (0, DK.E)(), {
        status: Vu
      } = yu, ru = Vu.baf2RxAt.join(","), [Bu, xu] = (0, Eu.useState)((() => kB(yu.inner)));
      (0, Eu.useEffect)((() => {
        xu(kB(yu.inner))
      }), [ru, yu.inner[1]]);
      const Su = null !== (Ru = yu.plan) && void 0 !== Ru ? Ru : jN(Vu),
        pu = yu.plan ? yu.plan.powerPerUnit : Vu.baf2RxStats[8],
        Tu = null === Ku ? null : "alarm" === (Wu = pN(Vu)) ? "red" : "hot" === Wu ? "hot" : "warm" === Wu ? "warm" : "cold";
      var Wu;
      const ju = !Vu.baf2RxFormed && function(uu, Ru) {
          return 0 !== (uu.baf2RxFlags & Ru)
        }(Vu, SR),
        Hu = Vu.baf2RxDamage,
        du = Vu.baf2RxDamageTrend;
      return (0, eQ.jsxs)("div", {
        className: CK()("Baf2RxCore", null !== Tu && void 0 !== Tu ? Tu : "plan"),
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, eQ.jsx)(LB, {
            inner: yu.inner,
            looks: yu.looks,
            layer: Bu,
            setLayer: xu,
            glow: Vu.baf2RxFormed ? Vu.baf2RxThrottle / 100 : 1,
            melted: ju,
            explain: Nu
          }), (0, eQ.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Nu(`${zB}rxWhy_heat`)
            },
            children: [null !== Ku ? (0, eQ.jsxs)(eQ.Fragment, {
              children: [(0, eQ.jsx)("b", {
                children: Xu(`${zB}rxHeatPct`, {
                  pct: String(Ku)
                })
              }), (0, eQ.jsx)("span", {
                className: CK()("Baf2RxBand", Tu),
                children: Xu(`${zB}rxBand_${Tu}`)
              })]
            }) : (0, eQ.jsx)("b", {
              children: Xu(`${zB}rxHeat`)
            }), null !== mu && (0, eQ.jsx)("span", {
              className: CK()("Baf2RxSettle", {
                Bad: Ju
              }),
              children: mu
            }), Hu >= 1 && (0, eQ.jsxs)("span", {
              className: CK()("Baf2RxDamage", du),
              children: [Xu(`${zB}rxDamageLine`, {
                pct: String(Hu)
              }), " \xb7 ", Xu(`${zB}rxDamage_${du}`), (0, eQ.jsx)("i", {
                children: (0, eQ.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Hu)}%`
                  }
                })
              })]
            })]
          }), (0, eQ.jsx)(ir, {
            max: TN,
            bands: FB,
            ticks: wB,
            now: Ku,
            settle: Qu,
            settleTone: Ju ? "bad" : null,
            onExplain: () => {
              Nu(`${zB}rxWhy_heat`)
            }
          })]
        }), (0, eQ.jsx)(ZB, {
          stats: Su,
          t: Xu,
          explain: Nu
        }), pu > 0 && (0, eQ.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Nu(`${zB}rxWhy_perPellet`)
          },
          children: Xu(`${zB}rxPerPellet`, {
            amount: GN(pu)
          })
        })]
      })
    }

    function PB(uu, Ru) {
      var yu;
      if (!uu.baf2RxStore) return {
        note: Ru(`${zB}rxUpTo`, {
          amount: GN(uu.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Eu, Ku] = uu.baf2RxStore, Qu = Ku > 0 ? Eu / Ku : 0, mu = String(Math.floor(100 * Qu)), Ju = null !== (yu = uu.baf2RxStoreNetPerS) && void 0 !== yu ? yu : 0, Nu = function(uu) {
        var Ru, yu;
        const [Eu, Ku] = null !== (Ru = uu.baf2RxStore) && void 0 !== Ru ? Ru : [0, 0], Qu = null !== (yu = uu.baf2RxStoreNetPerS) && void 0 !== yu ? yu : 0;
        return Ku > 0 && Eu >= Ku - 1 ? "running" === uu.baf2RxState ? `${VB}rxStoreFull` : `${VB}rxStoreFullOnly` : Qu > .05 ? `${VB}rxStoreLine` : Qu < -.05 ? "running" === uu.baf2RxState ? `${VB}rxStoreUsesMore` : `${VB}rxStoreDraining` : `${VB}rxStorePct`
      }(uu);
      return {
        note: Ru(Nu, Nu === `${zB}rxStoreLine` ? {
          pct: mu,
          time: dQ(Ru, (Ku - Eu) / Ju)
        } : {
          pct: mu
        }),
        share: Qu
      }
    }

    function iB(uu) {
      let {
        view: Ru,
        explain: yu,
        preview: Eu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)(), {
        status: Qu
      } = Ru, mu = vJ(fJ(...Ru.dims)), Ju = WB(Qu), Nu = Math.min(Math.round(Qu.baf2RxFuel), mu.fuel), Xu = "running" === Qu.baf2RxState, Vu = Xu ? jB(Qu.baf2RxOut, Qu.baf2RxMaxNow) : 0, ru = function(uu, Ru, yu) {
        const Eu = SB(uu),
          Ku = "cryo" === Eu.OB,
          Qu = yu ? yu.coolantSecs : Eu.pct >= 100 && uu.baf2RxOut >= 1 ? TB(uu, uu.baf2RxThrottle).coolantSecs : null;
        let mu, Ju = !1;
        if (Eu.pct < 100) {
          const yu = 1 === Eu.makersShort,
            Qu = !Ku && uu.baf2RxCryoOpen ? "OrCryo" : "";
          mu = Eu.makersShort > 0 ? Ru(Ku ? `${zB}rxCryoAddMixer${yu?"":"s"}` : `${zB}rxWaterAddCondenser${yu?"":"s"}${Qu}`, {
            count: String(Eu.makersShort)
          }) : Ru(`${zB}rxWaterNeeds`, {
            rate: JB(Eu.needPerS)
          })
        } else if (null !== Qu) mu = Ru(`${zB}rxWaterRunsOut`, {
          time: dQ(Ru, Qu)
        });
        else if (Eu.waterBeside > 0) mu = Ru(`${zB}rxCryoPlusWater`, {
          rate: JB(Eu.waterBeside)
        });
        else {
          const uu = function(uu) {
            return uu.inPerS <= 0 ? "rxWaterNoSupply" : uu.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Eu);
          Ju = "rxWaterNoSupply" === uu, mu = Ru(`${zB}${uu}`, {
            amount: GN(Eu.stored)
          })
        }
        return {
          kind: Ku ? "Cryo" : "Water",
          label: Ru(Ku ? `${zB}rxCryo` : `${zB}rxWater`),
          number: `${JB(Eu.usePerS)}/s`,
          preview: yu ? `${JB(yu.coolPerS)}/s` : null,
          note: mu,
          tone: "noWater" === uu.baf2RxState ? "danger" : Ju ? "warn" : (Nu = Eu.pct, Xu = Qu, Nu < 100 ? "danger" : null === Xu ? null : Xu < 300 ? "danger" : "warn"),
          share: Eu.pct / 100,
          why: Ku ? `${zB}rxWhy_cryo` : `${zB}rxWhy_water`,
          short: Eu.pct < 100
        };
        var Nu, Xu
      }(Qu, Ku, Eu), Bu = kN(Qu, mu.waste, Ju), xu = PB(Qu, Ku), Su = TB(Qu, Qu.baf2RxTarget), pu = Xu && Math.abs(Su.settle - Qu.baf2RxHeat) >= 3, Tu = Eu ? Eu.pelletsPerMin / 60 : null;
      return (0, eQ.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, eQ.jsx)(hr, {
            kind: "Fuel",
            label: Ku(`${zB}rxFuel`),
            number: String(Nu),
            preview: null !== Tu && Tu > 0 && Qu.baf2RxFuel > 0 ? dQ(Ku, Qu.baf2RxFuel / Tu) : null,
            note: Qu.baf2RxFuel <= 0 ? Ku(`${zB}rxFuelEmpty`) : Ju > 0 ? Ku(`${zB}rxFuelLeft`, {
              time: dQ(Ku, Qu.baf2RxFuel / Ju)
            }) : Ku(1 === Nu ? `${zB}rxFuelPellet` : `${zB}rxFuelPellets`),
            tone: "noFuel" === Qu.baf2RxState ? "danger" : Qu.baf2RxFuel < 2 ? "warn" : null,
            share: Qu.baf2RxFuel / mu.fuel,
            onExplain: () => {
              yu(`${zB}rxWhy_fuel`)
            }
          }), (0, eQ.jsx)(hr, {
            kind: ru.kind,
            label: ru.label,
            number: ru.number,
            preview: ru.preview,
            note: ru.note,
            tone: ru.tone,
            share: ru.share,
            onExplain: () => {
              yu(ru.why)
            }
          })]
        }), (0, eQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, eQ.jsx)(Pr, {
            kind: "Fuel",
            step: Vu,
            short: "noFuel" === Qu.baf2RxState
          }), (0, eQ.jsx)(Pr, {
            kind: ru.kind,
            step: Vu,
            short: ru.short || "noWater" === Qu.baf2RxState
          })]
        }), (0, eQ.jsx)(hB, {
          view: Ru,
          heat: Qu.baf2RxHeat,
          settle: Math.min(TN, Su.settle),
          settleLine: pu ? Ku(`${zB}rxHeatSettles`, {
            pct: String(Math.round(Su.settle)),
            time: dQ(Ku, Su.settleS)
          }) : null,
          settleBad: Su.settle > 100,
          explain: yu
        }), (0, eQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, eQ.jsx)(Pr, {
            kind: "Power",
            step: Vu
          }), (0, eQ.jsx)(Pr, {
            kind: "Waste",
            step: Xu && Qu.baf2RxFuel - Qu.baf2RxPu > 0 ? Vu : 0,
            short: Bu.full
          })]
        }), (0, eQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, eQ.jsx)(hr, {
            kind: "Power",
            label: Ku(`${zB}rxPowerOut`),
            number: `\u26a1 ${GN(Qu.baf2RxOut)}/s`,
            preview: Eu ? GN(Eu.out) : null,
            note: xu.note,
            share: xu.share,
            onExplain: () => {
              yu(`${zB}rxWhy_power`)
            }
          }), (0, eQ.jsx)(hr, {
            kind: "Waste",
            label: Ku(`${zB}rxWaste`),
            number: `${Math.floor(Qu.baf2RxWaste)}/${mu.waste}`,
            note: Bu.full ? Ku(`${zB}rxWasteFull`) : null !== Bu.fullInS ? Ku(`${zB}rxWasteFullIn`, {
              time: dQ(Ku, Bu.fullInS)
            }) : Ku(`${zB}rxWasteSpent`),
            tone: "wasteFull" === Qu.baf2RxState ? "danger" : Bu.full ? "warn" : null,
            share: Qu.baf2RxWaste / mu.waste,
            onExplain: () => {
              yu(`${zB}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function YB(uu) {
      let {
        view: Ru,
        explain: yu
      } = uu;
      const {
        t: Eu
      } = (0, DK.E)(), Ku = Ru.plan;
      if (!Ku) return null;
      const Qu = Ku.fuelHeat <= 0 ? null : Ku.cooling > 0 ? Math.min(TN, 100 * Ku.fuelHeat / Ku.cooling) : TN,
        mu = Eu(`${zB}rxPlanAtFull`);
      return (0, eQ.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, eQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, eQ.jsx)(hr, {
            kind: "Fuel",
            label: Eu(`${zB}rxFuel`),
            number: Eu(`${zB}rxPlanPerMin`, {
              amount: UN(Ku.pelletsPerMin)
            }),
            note: Eu(`${zB}rxPlanPellets`),
            onExplain: () => {
              yu(`${zB}rxWhy_fuel`)
            }
          }), (0, eQ.jsx)(hr, {
            kind: "Water",
            label: Eu(`${zB}rxWater`),
            number: `${JB(Ku.waterPerS)}/s`,
            note: Ru.status.baf2RxCryoOpen && Ku.waterPerS > 0 ? Eu(`${zB}rxPlanOrCryo`, {
              rate: JB(BN(Ku, au.g) * au.o)
            }) : mu,
            onExplain: () => {
              yu(`${zB}rxWhy_water`)
            }
          })]
        }), (0, eQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, eQ.jsx)(Pr, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, eQ.jsx)(Pr, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, eQ.jsx)(hB, {
          view: Ru,
          heat: null,
          settle: Qu,
          settleLine: null === Qu ? null : Eu(`${zB}rxPlanHeat`, {
            pct: String(Math.round(Qu))
          }),
          settleBad: null !== Qu && Qu > 100,
          explain: yu
        }), (0, eQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, eQ.jsx)(Pr, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, eQ.jsx)(Pr, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, eQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, eQ.jsx)(hr, {
            kind: "Power",
            label: Eu(`${zB}rxPowerOut`),
            number: `\u26a1 ${GN(Ku.max)}/s`,
            note: mu,
            onExplain: () => {
              yu(`${zB}rxWhy_power`)
            }
          }), (0, eQ.jsx)(hr, {
            kind: "Waste",
            label: Eu(`${zB}rxWaste`),
            number: Eu(`${zB}rxPlanPerMin`, {
              amount: UN(Ku.pelletsPerMin)
            }),
            note: Eu(`${zB}rxWasteSpent`),
            onExplain: () => {
              yu(`${zB}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const oB = "buildAFactory2Game:",
      qB = {
        key: `${oB}rxWaiting`,
        params: {},
        tone: "info"
      };

    function OB(uu, Ru) {
      return 0 !== (uu.baf2RxFlags & Ru)
    }

    function vB(uu) {
      var Ru, yu;
      let {
        store: Ku,
        close: Qu
      } = uu;
      const {
        t: mu
      } = (0, DK.E)(), Ju = KB(Ku), {
        explained: Nu,
        hinting: Xu,
        explain: Vu,
        explainOnce: ru
      } = Yr("baf2RxExplained"), Bu = (0, Eu.useCallback)(((uu, Ru) => {
        Vu(mu(uu, Ru))
      }), [Vu, mu]), xu = (0, Eu.useCallback)(((uu, Ru) => {
        ru(uu, mu(uu, Ru))
      }), [ru, mu]), [Su, pu] = (0, Eu.useState)(!1), [Tu, Wu] = (0, Eu.useState)(!1), ju = null === Ju || void 0 === Ju ? void 0 : Ju.status, Hu = null === ju || void 0 === ju ? void 0 : ju.baf2RxAt.join(","), du = !0 === (null === ju || void 0 === ju ? void 0 : ju.baf2RxFormed);
      (0, Eu.useEffect)((() => {
        Wu(!1), pu(!1)
      }), [Hu, du]), (0, Eu.useEffect)((() => (Ku.opened(), () => {
        Ku.closed()
      })), [Ku]);
      const bu = void 0 !== ju && OB(ju, WR),
        Cu = ju ? du ? pN(ju) : null !== Ju && void 0 !== Ju && Ju.plan ? function(uu, Ru) {
          if (uu <= 0) return "off";
          if (Ru <= 0) return "alarm";
          const yu = 100 * uu / Ru;
          return yu < 50 ? "calm" : yu < NN ? "warm" : yu <= 100 ? "hot" : "alarm"
        }(Ju.plan.fuelHeat, Ju.plan.cooling) : "off" : "off",
        ku = ju ? WN(ju) : null,
        eu = Ju ? Ju.waiting ? qB : du ? bB(Ju.status) : function(uu) {
          var Ru, yu;
          const {
            status: Eu
          } = uu;
          return CB({
            left: Eu.baf2RxNeed.reduce(((uu, Ru) => {
              let [, yu] = Ru;
              return uu + yu
            }), 0),
            bad: Eu.baf2RxBad,
            rods: null !== (Ru = null === (yu = uu.plan) || void 0 === yu ? void 0 : yu.rods) && void 0 !== Ru ? Ru : 0,
            canFill: OB(Eu, pR),
            melted: OB(Eu, SR),
            idle: uu.looks.reduce(((uu, Ru) => uu + (Ru === KN ? 1 : 0)), 0)
          })
        }(Ju) : null,
        Au = Xu && null !== eu && ("ok" === eu.tone || "info" === eu.tone),
        Du = ju ? function(uu) {
          const Ru = 0 !== (uu.baf2RxFlags & BR),
            yu = uu.baf2RxHeat < oJ;
          return 0 !== (uu.baf2RxFlags & SR) || yu && (Ru || !uu.baf2RxFormed) ? null : uu.baf2RxFormed && !Ru ? {
            key: `${SN}rxApartScram`,
            params: {}
          } : {
            key: `${SN}rxApartCooling`,
            params: {
              pct: String(oJ)
            }
          }
        }(ju) : null,
        [Mu, Iu, Gu] = null !== (Ru = null === Ju || void 0 === Ju ? void 0 : Ju.dims) && void 0 !== Ru ? Ru : [0, 0, 0],
        Uu = `${Mu}\xd7${Iu}\xd7${Gu}`;
      return (0, eQ.jsx)(dm.e, {
        close: Qu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, eQ.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, eQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, eQ.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, eQ.jsx)(mB, {
                mood: Cu
              }), (0, eQ.jsxs)("div", {
                children: [(0, eQ.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: mu(`${oB}rxTitle`)
                }), Ju && (0, eQ.jsxs)("p", {
                  className: CK()("Baf2RxSubtitle", du && (null === ku || void 0 === ku ? void 0 : ku.tone)),
                  children: [du && !bu ? (0, eQ.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": mu(`${oB}rxChangeSize`),
                    onClick: () => {
                      if (!ju) return;
                      const uu = OB(ju, BR);
                      var Ru;
                      (Ru = {
                        scram: uu,
                        heat: ju.baf2RxHeat
                      }).scram && Ru.heat < oJ ? pu(!0) : Bu(uu ? `${oB}rxResizeCooling` : `${oB}rxResizeHot`, {
                        pct: String(oJ)
                      })
                    },
                    children: [Uu, " \u270e"]
                  }) : Uu, " \xb7 ", mu(du ? null !== (yu = null === ku || void 0 === ku ? void 0 : ku.label) && void 0 !== yu ? yu : `${oB}rxState_running` : `${oB}rxSubPlanShort`)]
                })]
              })]
            }), (0, eQ.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Ju && !bu && (0, eQ.jsx)(QB, {
                kind: "reactor",
                busy: Ju.busy.has("apart"),
                whyNot: Du ? () => {
                  Bu(Du.key, Du.params)
                } : null,
                apart: () => {
                  Ku.tap("apart", (() => {
                    Ku.send("apart")
                  }))
                }
              }), (0, eQ.jsx)(bm.h, {
                onClick: Qu
              })]
            })]
          }), Ju && eu && (0, eQ.jsxs)("div", {
            className: "Baf2RxBody",
            children: [du ? (0, eQ.jsx)(iB, {
              view: Ju,
              explain: Bu,
              preview: pB(Ju.status)
            }) : (0, eQ.jsx)(YB, {
              view: Ju,
              explain: Bu
            }), (0, eQ.jsx)(or, {
              text: Au ? `${HB(mu,eu)} ${mu(`${oB}rxTapHint`)}` : HB(mu, eu),
              tone: eu.tone,
              explained: Nu
            }), bu ? (0, eQ.jsxs)(eQ.Fragment, {
              children: [(0, eQ.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: mu(`${oB}rxNotYours`)
              }), (0, eQ.jsx)(uB, {
                status: Ju.status,
                store: Ku,
                readOnly: !0
              })]
            }) : du && !Tu ? (0, eQ.jsxs)(eQ.Fragment, {
              children: [(0, eQ.jsx)(GB, {
                view: Ju,
                store: Ku,
                explain: Bu,
                explainOnce: xu
              }), void 0 !== Ju.status.baf2RxLayout && vr(Ju.status) && (0, eQ.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, eQ.jsx)(uB, {
                  status: Ju.status,
                  store: Ku,
                  readOnly: !1,
                  bare: !0
                }), (0, eQ.jsx)(fr, {
                  status: Ju.status,
                  store: Ku,
                  busy: Ju.busy.has("fill")
                })]
              })]
            }) : (0, eQ.jsxs)(eQ.Fragment, {
              children: [(0, eQ.jsx)(UB, {
                view: Ju,
                store: Ku,
                keepSize: du ? () => {
                  Wu(!1)
                } : void 0
              }), dN(Ju.dims, Ju.status.baf2RxDims) && (0, eQ.jsx)(nB, {
                need: Ju.status.baf2RxNeed,
                explain: Bu
              }), (0, eQ.jsx)(uB, {
                status: Ju.status,
                store: Ku,
                readOnly: !1
              })]
            }), Su && (0, eQ.jsx)(EB, {
              id: "baf2ResizeTitle",
              title: `${oB}rxResizeConfirmTitle`,
              body: `${oB}rxResizeConfirmBody`,
              yes: `${oB}rxChangeSize`,
              cancel: () => {
                pu(!1)
              },
              confirm: () => {
                pu(!1), Wu(!0)
              }
            })]
          })]
        })
      })
    }
    class aB {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(uu) {
        this.view = uu;
        for (const Ru of this.listeners) Ru()
      }
      get() {
        return this.view
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
    }

    function fB(uu) {
      let {
        commands: Ru,
        store: yu,
        power: Ku,
        water: Qu,
        reactor: mu,
        battery: Ju,
        collider: Nu,
        terminal: Xu,
        quests: Vu,
        close: ru,
        leave: Bu,
        askIslands: xu,
        showCore: Su,
        openSocial: pu
      } = uu;
      const {
        userContext: Tu
      } = (0, tJ.d)(), Wu = sJ.featureFlags.useSocialFeatures && Tu.isLoggedIn(), [ju, Hu] = (0, Eu.useState)((() => yu.get()));
      (0, Eu.useEffect)((() => yu.subscribe((() => {
        Hu(yu.get())
      }))), [yu]);
      const du = "islands" === (null === ju || void 0 === ju ? void 0 : ju.kind) ? ju.backToCore : void 0;
      return (0, eQ.jsxs)(zm.Provider, {
        value: Ru,
        children: ["core" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(Xr, {
          view: ju.core,
          close: ru,
          askIslands: xu
        }), "dropMap" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(xr, {
          message: ju.dropMap,
          quests: Vu,
          close: ru,
          leave: Bu
        }), "islands" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(Ur, {
          message: ju.islands,
          arrivedAtMs: ju.arrivedAtMs,
          close: du ? () => {
            Su(du)
          } : ru,
          leave: Bu,
          openSocial: Wu ? pu : null
        }), "quests" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(MV, {
          store: Vu,
          close: ru
        }), "transfer" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(RV, {
          message: ju.transfer,
          arrivedAtMs: ju.arrivedAtMs,
          close: ru,
          leave: Bu
        }), "power" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(Gm, {
          store: Ku,
          close: ru
        }), "water" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(pJ, {
          store: Qu,
          close: ru
        }), "reactor" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(vB, {
          store: mu,
          close: ru
        }), "battery" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(tB, {
          store: Ju,
          close: ru
        }), "collider" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(TX, {
          store: Nu,
          close: ru
        }), "terminal" === (null === ju || void 0 === ju ? void 0 : ju.kind) && (0, eQ.jsx)(Zr, {
          store: Xu,
          close: ru,
          send: uu => {
            Ru.send(uu)
          }
        })]
      })
    }
    var ux = yu(38260);

    function Rx(uu, Ru) {
      return uu.distSq - Ru.distSq
    }
    class yx {
      constructor() {
        this.list = [], this.pool = []
      }
      add(uu, Ru, yu, Eu) {
        let Ku = this.pool[this.list.length];
        Ku || (Ku = {
          x: 0,
          y: 0,
          distSq: 0,
          element: Ru,
          liftRem: yu,
          dot: Eu
        }, this.pool.push(Ku)), Ku.x = uu.x, Ku.y = uu.y, Ku.distSq = uu.distSq, Ku.element = Ru, Ku.liftRem = yu, Ku.dot = Eu, this.list.push(Ku)
      }
    }
    class Ex {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = uu, this.sizes = new WeakMap, this.observer = new ResizeObserver((uu => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const Ru of uu) {
            const uu = Ru.borderBoxSize[0];
            "dot" !== Ru.target.dataset.crowded && 0 !== uu.inlineSize && 0 !== uu.blockSize && this.sizes.set(Ru.target, {
              width: uu.inlineSize,
              height: uu.blockSize
            })
          }
        })), this.remPx = 16, this.kx = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.fW = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.fW)
      }
      observe(uu) {
        this.observer.observe(uu)
      }
      unobserve(uu) {
        this.observer.unobserve(uu)
      }
      run(uu) {
        const Ru = uu.list;
        Ru.sort(Rx);
        const yu = this.pxPerVw,
          Eu = this.pxPerVh;
        this.kx.length = 0, this.hud && this.kx.push(...this.hud.boxes(performance.now()));
        for (const Qu of Ru) {
          var Ku;
          const uu = this.sizes.get(Qu.element);
          let Ru = "no";
          if (uu && uu.width > 0) {
            const Ku = Qu.x * yu,
              mu = Qu.y * Eu - Qu.liftRem * this.remPx;
            this.fit(Ku, mu, uu.width, uu.height) || (Ru = Qu.dot && this.fit(Ku, mu, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Ku = Qu.element.dataset.crowded) && void 0 !== Ku ? Ku : "no") !== Ru && ("no" === Ru ? delete Qu.element.dataset.crowded : Qu.element.dataset.crowded = Ru), "hidden" !== Ru && (0, ux.e)(Qu.element, Qu.x, Qu.y)
        }
        Ru.length = 0
      }
      fit(uu, Ru, yu, Eu) {
        const Ku = uu - yu / 2,
          Qu = uu + yu / 2,
          mu = Ru - Eu,
          Ju = this.kx;
        for (let Nu = 0; Nu < Ju.length; Nu += 4)
          if (Ku < Ju[Nu + 1] - 2 && Qu > Ju[Nu] + 2 && mu < Ju[Nu + 3] - 2 && Ru > Ju[Nu + 2] + 2) return !1;
        return Ju.push(Ku, Qu, mu, Ru), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.fW)
      }
    }
    const Kx = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class Qx {
      constructor() {
        this.cards = Kx.map((uu => document.getElementsByClassName(uu))), this.watched = Kx.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(uu) {
        uu - this.refreshedAt > 1e3 && (this.refreshedAt = uu, this.stale = !0);
        for (let yu = 0; yu < this.cards.length; yu++) {
          var Ru;
          const uu = null !== (Ru = this.cards[yu][0]) && void 0 !== Ru ? Ru : null;
          uu !== this.watched[yu] && this.watch(yu, uu)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let uu = 0; uu < this.watched.length; uu++) this.watch(uu, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const uu = this.list;
        uu.length = 0;
        for (const Ru of this.watched) {
          if (!Ru || Ru.closest(".NoRoom")) continue;
          const yu = Ru.getBoundingClientRect();
          let Eu = yu.top,
            Ku = yu.bottom;
          if (Ru === this.watched[0] && this.hud) {
            const uu = this.hud.getBoundingClientRect();
            Eu = Math.max(Eu, uu.top), Ku = Math.min(Ku, uu.bottom)
          }
          yu.width > 0 && Ku > Eu && uu.push(yu.left, yu.right, Eu, Ku)
        }
      }
      watch(uu, Ru) {
        const yu = this.watched[uu];
        var Eu, Ku;
        (yu && this.sizes.unobserve(yu), this.watched[uu] = Ru, this.stale = !0, Ru && this.sizes.observe(Ru), 0 === uu) && (null === (Eu = this.hud) || void 0 === Eu || Eu.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Ku = null === Ru || void 0 === Ru ? void 0 : Ru.closest(".Baf2QuestHud")) && void 0 !== Ku ? Ku : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const mx = [0, 0, 0],
      Jx = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Nx(uu, Ru, yu, Eu, Ku, Qu) {
      let [mu, Ju, Nu] = Eu;
      const Xu = (mu + .5 - yu[0]) ** 2 + (Ju - yu[1]) ** 2 + (Nu + .5 - yu[2]) ** 2;
      let Vu = null;
      Xu <= Qu ** 2 && (mx[0] = mu + .5, mx[1] = Ju + Ku, mx[2] = Nu + .5, Vu = Ru.projectWorldPosToViewport(mx));
      const ru = null !== Vu && Vu.x > -5 && Vu.x < 105 && Vu.y > -5 && Vu.y < 105;
      return (0, ux.i)(uu, !ru), ru ? (Jx.x = Vu.x, Jx.y = Vu.y, Jx.distSq = Xu, Jx) : null
    }
    class Xx {
      constructor(uu) {
        this.onElement = uu, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(uu) {
        const Ru = [];
        for (let yu = 0; yu + 4 < uu.length; yu += 5) {
          const Eu = [uu[yu], uu[yu + 1], uu[yu + 2]];
          Ru.push({
            key: Eu.join(","),
            pos: Eu,
            status: EK[uu[yu + 3]],
            kind: MR[uu[yu + 4]]
          })
        }
        this.markers = Ru, this.keys = new Set(Ru.map((uu => {
          let {
            key: Ru
          } = uu;
          return Ru
        }))), this.notify()
      }
      covers(uu) {
        return this.keys.has(uu)
      }
      get() {
        return this.markers
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      bind(uu) {
        let Ru = this.refs.get(uu);
        return Ru || (Ru = Ru => {
          const yu = this.elements.get(uu);
          var Eu, Ku;
          yu && (null === (Eu = this.onElement) || void 0 === Eu || Eu.call(this, yu, !1));
          Ru ? (this.elements.set(uu, Ru), null === (Ku = this.onElement) || void 0 === Ku || Ku.call(this, Ru, !0)) : (this.elements.delete(uu), this.refs.delete(uu))
        }, this.refs.set(uu, Ru)), Ru
      }
      onAfterRender(uu, Ru, yu) {
        for (const Eu of this.markers) {
          const Ku = this.elements.get(Eu.key);
          if (!Ku) continue;
          const Qu = Nx(Ku, uu, Ru, Eu.pos, 1.05, 24);
          Qu && yu.add(Qu, Ku, .45, !0)
        }
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
    }
    const Vx = {
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
    const rx = (0, Eu.memo)((function(uu) {
        let {
          status: Ru,
          kind: yu,
          bindRef: Eu
        } = uu;
        const {
          t: Ku
        } = (0, DK.E)(), Qu = function(uu, Ru) {
          var yu;
          if ("noFuel" === uu) {
            var Eu, Ku;
            const uu = null === (Eu = tR[Ru]) || void 0 === Eu || null === (Ku = Eu.fuels) || void 0 === Ku ? void 0 : Ku.find((uu => Ey.includes(uu)));
            return null !== uu && void 0 !== uu ? uu : Vx.noFuel
          }
          return void 0 !== (null === (yu = tR[Ru]) || void 0 === yu ? void 0 : yu.cryoMade) ? "noOutlet" === uu ? "Fluid Pipe" : "noInput" === uu ? "Biomass" : Vx[uu] : Vx[uu]
        }(Ru, yu);
        return (0, eQ.jsxs)("div", {
          className: CK()("Baf2StallMarker", Ru),
          ref: Eu,
          hidden: !0,
          children: [Qu && (0, eQ.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, eQ.jsx)(IK.c, {
              itemName: Qu,
              amount: 0
            })
          }), (0, eQ.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === Ru ? "?" : "!"
          }), (0, eQ.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Ku(`buildAFactory2Game:stallTag_${Ru}`)
          })]
        })
      })),
      Bx = (0, Eu.memo)((function(uu) {
        let {
          controller: Ru
        } = uu;
        const [yu, Ku] = (0, Eu.useState)((() => Ru.get()));
        return (0, Eu.useEffect)((() => (Ku(Ru.get()), Ru.subscribe((() => {
          Ku(Ru.get())
        })))), [Ru]), (0, eQ.jsx)("div", {
          className: "Baf2StallMarkers",
          children: yu.map((uu => (0, eQ.jsx)(rx, {
            status: uu.status,
            kind: uu.kind,
            bindRef: Ru.bind(uu.key)
          }, uu.key)))
        })
      })),
      xx = py.j + 150;
    class Sx {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(uu, Ru) {
        const yu = Ru - uu;
        null === this.offset || yu < this.offset ? this.offset = yu : this.offset = Math.min(yu, this.offset + .02 * (Ru - this.sampledAt)), this.sampledAt = Ru
      }
      toLocal(uu) {
        var Ru;
        return uu + (null !== (Ru = this.offset) && void 0 !== Ru ? Ru : 0) + xx
      }
    }
    var px = yu(38264);
    const Tx = 15 * Math.PI / 180,
      Wx = Math.SQRT2,
      jx = [4, 2];

    function Hx(uu, Ru) {
      const yu = [1 / 0, 1 / 0, 1 / 0],
        Eu = [-1 / 0, -1 / 0, -1 / 0];
      for (const Nu of uu)
        for (let uu = 0; uu < 3; uu++) yu[uu] = Math.min(yu[uu], Nu[uu]), Eu[uu] = Math.max(Eu[uu], Nu[uu]);
      const Ku = (yu[0] + Eu[0]) / 2,
        Qu = (yu[1] + Eu[1]) / 2,
        mu = (yu[2] + Eu[2]) / 2;
      let Ju = 0;
      for (const Nu of uu) Ju = Math.max(Ju, Math.hypot(Nu[0] - Ku, Nu[1] - Qu, Nu[2] - mu));
      return {
        x: Ku,
        y: Qu,
        z: mu,
        r: Ju + Ru
      }
    }

    function dx(uu, Ru, yu) {
      const Eu = Ru.x - uu.x,
        Ku = Ru.y - uu.y,
        Qu = Ru.z - uu.z,
        mu = Math.sqrt(Eu * Eu + Ku * Ku + Qu * Qu);
      if (mu <= Ru.r + 8) return 1;
      const Ju = Ru.r / mu,
        Nu = Math.sqrt(1 - Ju * Ju),
        Xu = Nu < -uu.cosHalf,
        Vu = (Eu * uu.dx + Ku * uu.dy + Qu * uu.dz) / mu;
      if (!Xu && Vu < uu.cosHalf * Nu - uu.sinHalf * Ju) return 0;
      const ru = yu * Wx * uu.frameMs * uu.pxPerBlock / (mu - Ru.r);
      for (let Bu = 0; Bu < jx.length; Bu++)
        if (ru * jx[Bu] <= 1) return jx[Bu];
      return 1
    }

    function bx(uu, Ru) {
      return {
        name: uu,
        at: Ru,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Cx = [0, 0, 0];

    function kx(uu, Ru, yu) {
      let [, Eu, Ku, Qu, mu, Ju] = Ru;
      const Nu = py.e * (null !== mu && void 0 !== mu ? mu : 1),
        Xu = [];
      for (let xu = 0; xu < Eu.length; xu += 3) Xu.push([Eu[xu] + .5, Eu[xu + 1] + .65, Eu[xu + 2] + .5]);
      const Vu = [];
      for (let xu = 0; xu < Xu.length - 1; xu++) {
        const [uu, Ru] = [Xu[xu], Xu[xu + 1]];
        Vu.push([(uu[0] + Ru[0]) / 2, (uu[1] + Ru[1]) / 2, (uu[2] + Ru[2]) / 2])
      }
      const ru = Xu.slice(1, -1),
        Bu = new Uint8Array(ru.length);
      for (const xu of null !== Ju && void 0 !== Ju ? Ju : []) Bu[xu >> 1] |= 1 & xu ? 2 : 1;
      return {
        island: uu,
        length: ru.length,
        loop: Qu,
        cellsPerMs: Nu,
        edges: Vu,
        gp: ru,
        bounds: Hx([...Vu, ...ru], .3),
        changed: !0,
        culled: !1,
        hide: Bu,
        items: Ku.map((uu => {
          let [Ru, Eu] = uu;
          return bx(Ru, (0, py.A)(Ru, Eu, yu, Nu).at)
        }))
      }
    }

    function ex(uu, Ru) {
      const {
        items: yu
      } = uu;
      if (0 === yu.length) return;
      const Eu = uu.length / uu.cellsPerMs,
        Ku = Math.floor((Ru - yu[0].at) / Eu) - 1;
      if (Ku > 0)
        for (const Qu of yu) Qu.at += Ku * Eu
    }

    function Ax(uu, Ru) {
      const yu = Math.min(Math.floor(Ru), uu.length - 1),
        Eu = uu.hide[yu];
      return 0 !== Eu && 0 !== (Eu & (Ru - yu < .5 ? 1 : 2))
    }

    function Dx(uu, Ru) {
      const yu = Math.min(Math.floor(Ru), uu.length - 1),
        Eu = Ru - yu,
        Ku = Eu < .5,
        Qu = Ku ? uu.edges[yu] : uu.gp[yu],
        mu = Ku ? uu.gp[yu] : uu.edges[yu + 1],
        Ju = Ku ? 2 * Eu : 2 * Eu - 1;
      Cx[0] = Qu[0] + (mu[0] - Qu[0]) * Ju, Cx[1] = Qu[1] + (mu[1] - Qu[1]) * Ju, Cx[2] = Qu[2] + (mu[2] - Qu[2]) * Ju
    }
    const Mx = Math.PI / 4;
    class Ix {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Sx, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.fW = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(uu) {
        const Ru = performance.now();
        this.clock.sample(uu.baf2BeltLinesAt, Ru), this.queue(uu.baf2BeltLinesAt, uu, 0, null, null, 0), this.applyDue(Ru)
      }
      onMoves(uu) {
        const Ru = performance.now(),
          yu = uu.baf2BeltMovesAt;
        this.clock.sample(yu, Ru);
        for (const [Eu, Ku, Qu, mu] of uu.baf2BeltMoveList) null === Ku ? this.queue(yu - Qu, null, Eu, null, null, null !== mu && void 0 !== mu ? mu : 0) : this.queue(yu - Qu, null, Eu, Ku, null !== mu && void 0 !== mu ? mu : null, 0);
        this.applyDue(Ru)
      }
      start(uu) {
        this.pool = new px.e(uu, {
          scale: .3,
          yaw: Mx
        }, 64), this.fW(), window.addEventListener("resize", this.fW)
      }
      onAfterRender(uu) {
        const {
          pool: Ru
        } = this;
        if (!Ru) return;
        const yu = performance.now(),
          Eu = yu - this.lastRenderAt;
        this.lastRenderAt = yu, Eu < 100 && (this.frameMs += .1 * (Eu - this.frameMs));
        const Ku = yu + this.frameMs;
        this.applyDue(Ku);
        const Qu = uu.cameraPosition,
          mu = Ru.follow(Qu);
        this.setView(uu, Qu);
        const Ju = this.frame++;
        for (let Nu = 0; Nu < this.shown.length; Nu++) {
          const uu = this.shown[Nu],
            yu = dx(this.view, uu.bounds, uu.cellsPerMs),
            Eu = uu.culled && 0 !== yu;
          if (uu.culled = 0 === yu, !mu && !uu.changed && !Eu && (0 === yu || (Ju + Nu) % yu !== 0)) continue;
          uu.changed = !1, uu.loop && (ex(uu, Ku), (0, py.x)(uu.items, uu.length, Ku, uu.cellsPerMs));
          let Qu = uu.length;
          for (let Ju = 0; Ju < uu.items.length; Ju++) {
            const yu = uu.items[Ju],
              Eu = (0, py.B)(yu.at, Qu, Ku, uu.cellsPerMs);
            if (Qu = Eu - py.p, Ax(uu, Eu)) {
              null === yu.kind || yu.hidden || (yu.kind.hide(yu.slot), yu.hidden = !0);
              continue
            }
            let Nu = yu.kind;
            if (null === Nu) {
              if (Nu = Ru.kindOf(yu.name), null === Nu) continue;
              yu.kind = Nu, yu.slot = Nu.take(), yu.hidden = !0, yu.drawn = NaN
            } else if (Eu === yu.drawn && !yu.hidden && !mu) continue;
            Dx(uu, Eu), Nu.write(yu.slot, Cx[0], Cx[1], Cx[2]), yu.hidden = !1, yu.drawn = Eu
          }
        }
        Ru.commit()
      }
      dispose() {
        var uu;
        window.removeEventListener("resize", this.fW), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (uu = this.pool) || void 0 === uu || uu.dispose(), this.pool = null
      }
      setView(uu, Ru) {
        const {
          cameraDir: yu,
          lastDir: Eu
        } = this, Ku = uu.cameraDirection;
        for (let Vu = 0; Vu < 3; Vu++) Eu[Vu] = yu[Vu], yu[Vu] = Ku[Vu];
        const Qu = yu[0] * Eu[0] + yu[1] * Eu[1] + yu[2] * Eu[2],
          mu = Number.isNaN(Qu) ? 0 : Math.acos(Math.min(1, Math.max(-1, Qu))),
          {
            width: Ju,
            height: Nu
          } = this,
          Xu = uu.tanHalfFovX;
        ! function(uu, Ru, yu, Eu, Ku, Qu, mu) {
          let Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          uu.x = Ru[0], uu.y = Ru[1], uu.z = Ru[2], uu.dx = yu[0], uu.dy = yu[1], uu.dz = yu[2];
          const Nu = Math.min(Math.PI, Math.atan(Math.sqrt(Eu * Eu + Ku * Ku)) + Tx + Ju);
          uu.cosHalf = Math.cos(Nu), uu.sinHalf = Math.sin(Nu), uu.pxPerBlock = Qu / (2 * Ku), uu.frameMs = mu
        }(this.view, Ru, yu, Xu, Xu * Nu / Ju, Nu * window.devicePixelRatio, this.frameMs, mu)
      }
      queue(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = Math.max(this.clock.toLocal(uu), this.lastPendingAt);
        this.lastPendingAt = mu, this.pending.push({
          at: mu,
          lines: Ru,
          line: yu,
          name: Eu,
          pos: Ku,
          idx: Qu
        })
      }
      applyDue(uu) {
        const {
          pending: Ru
        } = this;
        for (; this.pendingHead < Ru.length && Ru[this.pendingHead].at <= uu;) {
          const uu = Ru[this.pendingHead++];
          if (uu.lines) this.applyLines(uu.lines, uu.at), uu.lines = null;
          else {
            const Ru = this.lines.get(uu.line);
            Ru && this.applyMove(Ru, uu, uu.at)
          }
        }
        this.pendingHead === Ru.length ? (Ru.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > Ru.length && (Ru.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(uu, Ru) {
        this.clearIsland(uu.baf2BeltIsland);
        for (const yu of uu.baf2BeltLineList) this.lines.set(yu[0], kx(uu.baf2BeltIsland, yu, Ru));
        this.shown = [...this.lines.values()]
      }
      applyMove(uu, Ru, yu) {
        let {
          name: Eu,
          pos: Ku,
          idx: Qu
        } = Ru;
        uu.changed = !0, uu.loop && (ex(uu, yu), (0, py.x)(uu.items, uu.length, yu, uu.cellsPerMs)), null !== Eu && null !== Ku ? (0, py.y)(uu.items, uu.length, bx(Eu, yu), Ku, yu, uu.cellsPerMs) : null !== Eu ? uu.items.push(bx(Eu, yu)) : uu.items.length > Qu && this.release((0, py.C)(uu.items, uu.length, yu, uu.cellsPerMs, Qu))
      }
      clearIsland(uu) {
        for (const [Ru, yu] of this.lines)
          if (yu.island === uu) {
            for (const uu of yu.items) this.release(uu);
            this.lines.delete(Ru)
          }
      }
      release(uu) {
        null !== uu.kind && (uu.kind.release(uu.slot), uu.kind = null, uu.slot = -1, uu.hidden = !0, uu.drawn = NaN)
      }
    }
    var Gx = yu(36436),
      Ux = yu(38279);

    function nx(uu) {
      let {
        depth: Ru,
        store: yu,
        t: Ku
      } = uu;
      const Qu = function(uu) {
        const [Ru, yu] = (0, Eu.useState)(uu.lastPlayerY());
        return (0, yV.e)(gK, yu), (0, Eu.useEffect)((() => {
          yu(uu.lastPlayerY())
        }), [uu]), Ru
      }(yu);
      if (null === Qu) return null;
      const [mu, Ju] = Ru, Nu = Qu > mu ? mu : null !== Ju && Qu < Ju ? Ju : null, Xu = {
        y: HQ(Qu),
        target: null === Nu ? "" : HQ(Nu)
      };
      return (0, eQ.jsx)("span", {
        className: CK()("Baf2QuestDepth", {
          Reached: null === Nu
        }),
        children: Ku(`${mV}${null===Nu?"questDepthReached":"questDepth"}`, Xu)
      })
    }

    function sx(uu) {
      let {
        also: Ru,
        view: yu,
        t: Eu
      } = uu;
      return (0, eQ.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, eQ.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, eQ.jsx)("strong", {
            children: Eu(`${mV}questAlsoDownHere`)
          }), (0, eQ.jsx)("span", {
            className: "Baf2QuestChips",
            children: Ru.map((uu => {
              let [Ru, Ku, Qu, mu] = uu;
              return (0, eQ.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Eu(`${mV}questAlsoItem`, {
                  item: NV(Eu, yu.itemNames[Ru], Ru),
                  have: String(Ku),
                  need: String(Qu)
                }),
                children: [(0, eQ.jsx)(rV, {
                  item: Ru
                }), (0, eQ.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Ku}/${Qu}`
                }), null !== mu && (0, eQ.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Eu(`${mV}questAlsoDepth`, {
                    y: HQ(mu)
                  })
                })]
              }, Ru)
            }))
          })]
        })]
      })
    }
    var tx = yu(3208);

    function lx(uu) {
      let {
        expanded: Ru,
        inventoryOpen: yu,
        children: Ku
      } = uu;
      const Qu = (0, Eu.useRef)(null);
      return (0, Eu.useEffect)((() => {
        const uu = Qu.current,
          Ru = null === uu || void 0 === uu ? void 0 : uu.closest(".RightElements"),
          Eu = null === uu || void 0 === uu ? void 0 : uu.firstElementChild;
        if (!uu || !Ru || !Eu) return;
        return (0, Ux.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Ru, Eu], (() => {
          const Ku = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Ku.length) return;
          const Qu = Math.max(...Ku.map((uu => uu.getBoundingClientRect().bottom))),
            mu = Ru.getBoundingClientRect(),
            Ju = yu ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (Ju) {
            const Ru = parseFloat(getComputedStyle(Eu).marginLeft) + parseFloat(getComputedStyle(Eu).marginRight),
              yu = mu.right - Ju.getBoundingClientRect().right - 8 - Ru;
            uu.style.setProperty("--baf2-quest-room", `${yu}px`), uu.classList.toggle("NoRoom", yu < 150)
          } else uu.style.removeProperty("--baf2-quest-room"), uu.classList.remove("NoRoom");
          const Nu = Qu - mu.top + 8,
            Xu = function(uu, Ru, yu) {
              const Eu = Ru.getBoundingClientRect(),
                Ku = uu.getBoundingClientRect(),
                Qu = (0, tx.f)(Ku.left, Ku.right, Eu.top + yu);
              if (null !== Qu && Qu < Eu.bottom) return Qu - Eu.top;
              return Eu.height - (parseFloat(getComputedStyle(Ru).paddingBottom) || 0)
            }(uu, Ru, Nu) - 8,
            Vu = window.innerHeight / 2 - mu.top,
            {
              top: ru,
              maxHeight: Bu
            } = function(uu, Ru, yu, Eu, Ku) {
              const Qu = Math.min(yu, Math.max(0, Ru - uu)),
                mu = Ku ? uu : Math.max(uu, Math.min(Eu - Qu / 2, Ru - Qu));
              return {
                top: mu,
                maxHeight: Math.max(0, Ru - mu)
              }
            }(Nu, Xu, function(uu) {
              const Ru = uu.firstElementChild,
                yu = Ru ? Ru.scrollHeight - Ru.clientHeight : 0;
              return uu.getBoundingClientRect().height + Math.max(0, yu)
            }(Eu), Vu, CQ());
          uu.style.top = `${ru}px`, uu.style.maxHeight = `${Bu}px`
        }))
      }), [yu]), (0, eQ.jsx)("div", {
        ref: Qu,
        className: CK()("Baf2QuestHud", {
          Expanded: Ru
        }),
        children: Ku
      })
    }

    function gx(uu) {
      let {
        amount: Ru,
        t: yu
      } = uu;
      return (0, eQ.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, eQ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, eQ.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: yu(`${mV}questStepsDone`, {
            amount: String(Ru)
          })
        })]
      })
    }

    function cx(uu) {
      let {
        pulse: Ru
      } = uu;
      return 0 === Ru ? null : (0, eQ.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, Ru)
    }

    function Lx(uu) {
      var Ru;
      let {
        store: yu
      } = uu;
      const Ku = (0, yV.h)(lK, yu.get()),
        [Qu, mu] = (0, Eu.useState)(!1),
        {
          t: Ju
        } = (0, DK.E)(),
        Nu = function() {
          const [uu, Ru] = (0, Eu.useState)(CQ);
          return (0, Eu.useEffect)((() => (Ru(CQ()), kQ(Ru))), []), uu
        }(),
        {
          openInGameMenuName: Xu,
          openEverythingMenuName: Vu
        } = (0, HK.j)(["openInGameMenuName", "openEverythingMenuName"]),
        ru = "inventory" === Xu && null === Vu,
        Bu = null !== Xu && !ru || null !== Vu;
      if (! function(uu) {
          return null !== uu.name || null !== uu.side
        }(Ku) || Bu || "off" === Ku.tutorial) return null;
      const xu = ZK(Ku.rows),
        Su = xu.filter((uu => uu.done)).length,
        pu = function(uu, Ru) {
          const yu = iK(uu);
          let Eu = 0;
          return uu.filter(((uu, Ku) => !!uu.justFinished || !(uu.done || Ku < yu || Eu > Ru) && (Eu++, !0)))
        }(Ku.rows, Nu ? 0 : 2),
        Tu = Nu ? pu : function(uu, Ru) {
          const yu = Ru.filter((uu => !uu.justFinished));
          if (yu.length < 2) return [...Ru];
          const Eu = uu.indexOf(yu[0]),
            Ku = uu.indexOf(yu[yu.length - 1]),
            Qu = new Set(ZK(uu));
          return uu.filter(((uu, yu) => Ru.includes(uu) || uu.done && Qu.has(uu) && yu > Eu && yu < Ku))
        }(Ku.rows, pu),
        Wu = Qu ? Ku.rows : Tu,
        ju = Qu || Nu ? [] : function(uu, Ru) {
          const yu = new Array(Ru.length + 1).fill(0),
            Eu = new Set(ZK(uu));
          let Ku = 0;
          for (const Qu of uu) Ku < Ru.length && Qu === Ru[Ku] ? Ku++ : Qu.done && Eu.has(Qu) && yu[Ku]++;
          return yu
        }(Ku.rows, Tu),
        Hu = Qu || Tu.length < Ku.rows.length || null !== Ku.reward,
        du = wK(Ku),
        bu = du ? Ju(`${mV}questLineComplete`) : Ku.tier ? SV(Ju, Ku.tier) : Ju(`${mV}currentQuest`),
        Cu = function(uu) {
          var Ru, yu;
          if (wK(uu)) return null;
          const Eu = null === (Ru = uu.chapters) || void 0 === Ru ? void 0 : Ru.find((Ru => {
            let [yu] = Ru;
            return yu === uu.tier
          }));
          if (!Eu) return null;
          const Ku = Eu[1].filter((uu => !uu[4]));
          if (0 === Ku.length) return null;
          const Qu = null === (yu = uu.name) || void 0 === yu ? void 0 : yu[0],
            mu = uu => Ku.findIndex((Ru => Ru[0] === Qu && (!uu || !Ru[3]))),
            Ju = mu(!0),
            Nu = Ju >= 0 ? Ju : mu(!1);
          if (Nu >= 0) return [Nu + 1, Ku.length];
          const Xu = Ku.filter((uu => uu[3])).length;
          return [Math.min(Xu + 1, Ku.length), Ku.length]
        }(Ku);
      return (0, eQ.jsx)(Gx.d, {
        placement: "topRight",
        children: (0, eQ.jsx)(lx, {
          expanded: Qu,
          inventoryOpen: ru,
          children: (0, eQ.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: JV,
            children: [null !== Ku.name && (0, eQ.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, eQ.jsx)(cx, {
                pulse: Ku.pulse
              }), (0, eQ.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, eQ.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [bu, Cu && (0, eQ.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": Ju(`${mV}questPlaceLabel`, {
                      n: String(Cu[0]),
                      total: String(Cu[1])
                    }),
                    children: Ju(`${mV}questPlace`, {
                      n: String(Cu[0]),
                      total: String(Cu[1])
                    })
                  }), Ku.tier && Ku.core && !du && (0, eQ.jsx)(pV, {
                    core: Ku.core,
                    t: Ju
                  })]
                })
              }), (0, eQ.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Ju(`${mV}${Ku.name[0]}`, XV(Ku.name[1]))
              }), (xu.length > 1 || Hu) && (0, eQ.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [xu.length > 1 && (0, eQ.jsx)(TV, {
                  rows: xu,
                  t: Ju
                }), Hu && (0, eQ.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Qu,
                  onClick: () => {
                    mu(!Qu)
                  },
                  children: [(0, eQ.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: Ju(`${mV}questStepsToggle`, {
                      done: String(Su),
                      total: String(xu.length)
                    })
                  }), (0, eQ.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Qu ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, eQ.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [Wu.map(((uu, Ru) => {
                  var Qu;
                  const mu = uu.current && Ku.depth;
                  return (0, eQ.jsxs)(Eu.Fragment, {
                    children: [(null !== (Qu = ju[Ru]) && void 0 !== Qu ? Qu : 0) > 0 && (0, eQ.jsx)(gx, {
                      amount: ju[Ru],
                      t: Ju
                    }), (0, eQ.jsx)(WV, {
                      row: uu,
                      view: Ku,
                      t: Ju,
                      extra: mu && (0, eQ.jsx)(nx, {
                        depth: mu,
                        store: yu,
                        t: Ju
                      })
                    })]
                  }, uu.id)
                })), (null !== (Ru = ju[Wu.length]) && void 0 !== Ru ? Ru : 0) > 0 && (0, eQ.jsx)(gx, {
                  amount: ju[Wu.length],
                  t: Ju
                }), Ku.also.length > 0 && (0, eQ.jsx)(sx, {
                  also: Ku.also,
                  view: Ku,
                  t: Ju
                })]
              }), Qu && Ku.reward && (0, eQ.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [Ju(`${mV}questReward`), (0, eQ.jsx)(rV, {
                  item: Ku.reward
                }), NV(Ju, Ku.itemNames[Ku.reward], Ku.reward)]
              })]
            }), Ku.side && (0, eQ.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [zK(Ku, Date.now()) && (0, eQ.jsx)(cx, {
                pulse: Ku.sideCameUpAt
              }), (0, eQ.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: Ju(`${mV}questSide`)
              }), (0, eQ.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Ju(`${mV}${Ku.side.name[0]}`, XV(Ku.side.name[1]))
              }), (0, eQ.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, eQ.jsx)(WV, {
                  row: Ku.side.row,
                  view: Ku,
                  t: Ju
                })
              })]
            })]
          })
        })
      })
    }
    const zx = "baf2ToastView";
    class Fx {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = uu, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: uu,
          holdMs: Ru
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const uu = this.dropCovered();
          uu && this.show(uu.message, uu.holdMs)
        }), 250));
        const yu = this.dropCovered();
        null !== yu && (yu.holdMs > 0 || "baf2ToastCelebrate" === yu.message.baf2ToastStyle) && "baf2ToastCelebrate" !== uu.baf2ToastStyle && this.show(yu.message, yu.holdMs);
        const Eu = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== uu.baf2ToastStyle && Eu > 0) return this.pending = {
          message: uu,
          holdMs: Ru
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const uu = this.pending;
          this.pending = null, uu && this.present(uu.message, uu.holdMs)
        }), Eu));
        this.present(uu, Ru)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(uu, Ru) {
        this.clearTimers(), this.pending = null;
        const yu = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: uu.baf2ToastText,
          style: uu.baf2ToastStyle,
          swapped: yu,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === uu.baf2ToastStyle ? 1500 : Ru), this.Op();
        const Eu = Math.min(8e3, Math.max(1e3, uu.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Eu)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Op(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Op()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const uu = this.covering;
        return this.covering = null, uu
      }
      Op() {
        sK.k.Op(zx, this.view, !0)
      }
    }
    var wx = yu(80);
    const Zx = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function hx(uu) {
      let {
        store: Ru
      } = uu;
      const yu = (0, yV.h)(zx, Ru.get()),
        {
          openInGameMenuName: Eu,
          openEverythingMenuName: Ku
        } = (0, HK.j)(["openInGameMenuName", "openEverythingMenuName"]),
        Qu = yu && (0, eQ.jsxs)("div", {
          className: CK()("Baf2Toast", Zx[yu.style], {
            Swapped: yu.swapped,
            Leaving: yu.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === yu.style && (0, eQ.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, eQ.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, eQ.jsx)(GK.d, {
              text: yu.text
            })
          })]
        }, yu.id);
      return null !== Eu && null === Ku ? (0, wx.createPortal)((0, eQ.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Qu
      }), document.body) : (0, eQ.jsx)(Gx.d, {
        children: Qu
      })
    }
    const Px = "baf2AreaView";
    class ix {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.jJ = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.jJ = null
      }
      arrive(uu, Ru) {
        Ru && function(uu) {
          return "home" === uu.baf2AreaPlace && void 0 !== uu.baf2AreaNameText
        }(uu) ? this.jJ = uu : this.show(uu)
      }
      release() {
        const uu = this.jJ;
        null !== uu && this.show(uu)
      }
      show(uu) {
        this.clearTimer(), this.jJ = null;
        const Ru = void 0 === uu.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: uu,
          ms: Ru
        }, this.Op(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Op()
        }), Ru)
      }
      dispose() {
        this.clearTimer(), this.jJ = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Op() {
        sK.k.Op(Px, this.view, !0)
      }
    }

    function Yx(uu) {
      var Ru;
      let {
        store: yu
      } = uu;
      const {
        t: Eu
      } = (0, DK.E)(), Ku = (0, yV.h)(Px, yu.get());
      if (!Ku) return null;
      const {
        area: Qu
      } = Ku, mu = Qu.baf2AreaResetMinutes;
      return (0, eQ.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Qu.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Ku.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, eQ.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Qu.baf2AreaHeading && (0, eQ.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Eu(Qu.baf2AreaHeading)
        }), (0, eQ.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (Ru = Qu.baf2AreaNameText) && void 0 !== Ru ? Ru : Eu(Qu.baf2AreaName)
        }), Qu.baf2AreaNote && (0, eQ.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Eu(Qu.baf2AreaNote)
        }), void 0 !== mu && (0, eQ.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Eu("buildAFactory2Game:areaWildsReset", {
            time: dQ(Eu, 60 * mu)
          })
        })]
      }, Ku.id)
    }
    const ox = "baf2GearGauge";
    class qx {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      WH(uu) {
        var Ru;
        if (this.clearLinger(), null === uu.gearPowerKind) return void this.set(null);
        const yu = "jetpack" === uu.gearPowerKind && (Eu = uu.gearChargeState, Ku = uu.gearCharge, "flying" === Eu || "charging" === Eu || "outOfCharge" === Eu || "ceiling" === Eu || "offPlot" === Eu || "noPower" === Eu && Ku <= 0);
        var Eu, Ku;
        const Qu = !0 === (null === (Ru = this.view) || void 0 === Ru ? void 0 : Ru.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          mu = yu || "jetpack" === uu.gearPowerKind && Qu;
        this.set({
          gauge: uu,
          jetShown: mu
        }), mu && !yu && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(uu) {
        this.view = uu, sK.k.Op(ox, uu, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Ox = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function vx(uu) {
      let {
        store: Ru
      } = uu;
      const yu = (0, yV.h)(ox, Ru.get());
      return yu ? "jetpack" === yu.gauge.gearPowerKind ? (0, eQ.jsx)(ax, {
        view: yu
      }) : (0, eQ.jsx)(fx, {
        gauge: yu.gauge
      }) : null
    }

    function ax(uu) {
      let {
        view: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)(), {
        gauge: Eu
      } = Ru, Ku = Eu.gearChargeMax > 0 ? Math.max(0, Math.min(1, Eu.gearCharge / Eu.gearChargeMax)) : 0, Qu = Ox[Eu.gearChargeState], mu = Qu ? yu(Qu) : null;
      return (0, eQ.jsxs)("div", {
        className: CK()("Baf2JetArc", {
          Shown: Ru.jetShown,
          Low: Ku < .2,
          Warm: Ku >= .2 && Ku < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Ku)
        },
        "aria-hidden": !Ru.jetShown,
        children: [(0, eQ.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, eQ.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: uS,
            pathLength: 100
          }), (0, eQ.jsx)("path", {
            className: "Baf2JetArcFill",
            d: uS,
            pathLength: 100
          })]
        }), (0, eQ.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Ku), "%"]
        }), mu && (0, eQ.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: mu
        })]
      })
    }

    function fx(uu) {
      let {
        gauge: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)(), Eu = function(uu, Ru) {
        switch (Ru.gearPowerKind) {
          case "skyPack":
            return uu("buildAFactory2Game:gearSkyPack", {
              charge: Ru.gearCharge,
              max: Ru.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return uu("buildAFactory2Game:gearIslandDraw", {
              power: vu(Ru.gearIslandPower),
              cost: vu(Ru.gearCostPerUse)
            });
          case "barrier":
            return uu("buildAFactory2Game:gearBarrier", {
              shield: Math.round(Ru.gearCharge),
              max: Ru.gearChargeMax,
              power: vu(Ru.gearIslandPower)
            });
          default:
            return null
        }
      }(yu, Ru);
      return null === Eu ? null : (0, eQ.jsx)(Gx.d, {
        children: (0, eQ.jsx)("div", {
          className: CK()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === Ru.gearChargeState || "outOfCharge" === Ru.gearChargeState
          }),
          role: "status",
          children: Eu
        })
      })
    }
    const uS = (() => {
      const uu = uu => {
        const Ru = uu * Math.PI / 180;
        return `${(40*Math.cos(Ru)).toFixed(2)} ${(40*Math.sin(Ru)).toFixed(2)}`
      };
      return `M ${uu(160)} A 40 40 0 1 1 ${uu(380)}`
    })();
    class RS {
      constructor(uu) {
        this.onElement = uu, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      WH(uu) {
        let Ru = uu.baf2LabelsReset || uu.baf2LabelsIsland !== this.island;
        Ru && (this.labels.clear(), this.island = uu.baf2LabelsIsland);
        for (const [yu, Eu, Ku, Qu, mu] of uu.baf2LabelsList) {
          const uu = `${yu},${Eu},${Ku}`,
            Ju = this.labels.get(uu);
          null === Qu ? Ru = this.labels.delete(uu) || Ru : Ju && Ju.item === Qu && (Ju.count === mu || Ju.count >= 0 && mu >= 0) ? Ju.count !== mu && (Ju.count = mu, this.writeCount(uu, mu)) : (this.labels.set(uu, {
            key: uu,
            pos: [yu, Eu, Ku],
            item: Qu,
            count: mu
          }), this.writeCount(uu, mu), Ru = !0)
        }
        if (this.changes++, Ru) {
          this.snapshot = [...this.labels.values()];
          for (const uu of this.listeners) uu()
        }
      }
      bindCount(uu) {
        const Ru = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${uu}`;
        let yu = this.countRefs.get(Ru);
        return yu || (yu = yu => {
          var Eu, Ku;
          yu ? (this.countElements.set(Ru, yu), this.writeCount(uu, null !== (Eu = null === (Ku = this.labels.get(uu)) || void 0 === Ku ? void 0 : Ku.count) && void 0 !== Eu ? Eu : -1)) : (this.countElements.delete(Ru), this.countRefs.delete(Ru))
        }, this.countRefs.set(Ru, yu)), yu
      }
      setCountWords(uu) {
        this.countWords = uu;
        for (const [Ru, yu] of this.labels) this.writePart(`words|${Ru}`, uu(yu.count), yu.count)
      }
      writeCount(uu, Ru) {
        this.writePart(`bare|${uu}`, jQ(Ru), Ru), this.countElements.has(`words|${uu}`) && this.writePart(`words|${uu}`, this.countWords(Ru), Ru)
      }
      writePart(uu, Ru, yu) {
        const Eu = this.countElements.get(uu);
        if (!Eu || yu < 0) return;
        const Ku = Eu.firstChild;
        Ku && 3 === Ku.nodeType && !Ku.nextSibling ? Ku.nodeValue !== Ru && (Ku.nodeValue = Ru) : Eu.textContent !== Ru && (Eu.textContent = Ru)
      }
      list() {
        return this.snapshot
      }
      at(uu) {
        return this.labels.get(`${uu[0]},${uu[1]},${uu[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      bind(uu) {
        let Ru = this.refs.get(uu);
        return Ru || (Ru = Ru => {
          const yu = this.elements.get(uu);
          var Eu, Ku;
          yu && (null === (Eu = this.onElement) || void 0 === Eu || Eu.call(this, yu, !1));
          Ru ? (this.elements.set(uu, Ru), null === (Ku = this.onElement) || void 0 === Ku || Ku.call(this, Ru, !0)) : (this.elements.delete(uu), this.refs.delete(uu))
        }, this.refs.set(uu, Ru)), Ru
      }
      onAfterRender(uu, Ru, yu, Eu) {
        for (const Ku of this.snapshot) {
          const Qu = this.elements.get(Ku.key);
          if (!Qu) continue;
          if (Eu(Ku.key)) {
            (0, ux.i)(Qu, !0);
            continue
          }
          const mu = Nx(Qu, uu, Ru, Ku.pos, 1.1, 24);
          mu && yu.add(mu, Qu, 0, !1)
        }
      }
    }
    const yS = (0, Eu.memo)((function(uu) {
        let {
          item: Ru
        } = uu;
        return (0, eQ.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, eQ.jsx)(IK.c, {
            itemName: Ru,
            amount: 0
          })
        })
      })),
      ES = (0, Eu.memo)((function(uu) {
        let {
          label: Ru,
          bindRef: yu,
          countRef: Eu,
          wordsRef: Ku
        } = uu;
        return (0, eQ.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: yu,
          hidden: !0,
          children: [(0, eQ.jsx)(yS, {
            item: Ru.item
          }), Ru.count >= 0 && (0, eQ.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, eQ.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Ku
            }), (0, eQ.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Eu
            })]
          })]
        })
      })),
      KS = (0, Eu.memo)((function(uu) {
        let {
          store: Ru
        } = uu;
        const {
          t: yu
        } = (0, DK.E)(), [Ku, Qu] = (0, Eu.useState)((() => Ru.list()));
        return (0, Eu.useEffect)((() => (Qu(Ru.list()), Ru.subscribe((() => {
          Qu(Ru.list())
        })))), [Ru]), (0, Eu.useEffect)((() => {
          Ru.setCountWords((uu => yu("buildAFactory2Game:labelSiloCount", {
            count: jQ(uu)
          })))
        }), [Ru, yu]), (0, eQ.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Ku.map((uu => -2 === uu.count ? null : (0, eQ.jsx)(ES, {
            label: uu,
            bindRef: Ru.bind(uu.key),
            countRef: Ru.bindCount(uu.key),
            wordsRef: Ru.bindCount(uu.key, "words")
          }, uu.key)))
        })
      })),
      QS = {
        read: () => !0,
        write: () => {}
      };

    function mS(uu) {
      return `${uu[0]},${uu[1]},${uu[2]}`
    }

    function JS(uu) {
      let [Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu] = uu;
      const xu = void 0 === ru || void 0 === Bu ? function(uu) {
        return [Math.floor((uu - 1) / 2), 0]
      }(Qu) : [ru, Bu];
      return {
        kind: 0 === Nu ? "reactor" : "battery",
        box: Zy([Ru, yu, Eu], Ku, Qu, mu, Ju, xu),
        formed: 1 === Xu,
        level: Vu
      }
    }
    class NS {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QS;
        this.guideSetting = uu, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = uu.read()
      }
      WH(uu) {
        var Ru;
        const yu = new Map;
        for (const Eu of uu.baf2RxPlanList) {
          const uu = JS(Eu);
          yu.set(mS(uu.box.ctrl), uu)
        }
        this.plans = yu, this.layouts = new Map((null !== (Ru = uu.baf2RxLayouts) && void 0 !== Ru ? Ru : []).map((uu => {
          let [Ru, yu, Eu, Ku] = uu;
          return [mS([Ru, yu, Eu]), Ku]
        }))), this.predicted.clear(), uu.baf2RxFormedAt && (this.formed = {
          ctrl: uu.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Eu of [...this.startersOff]) {
          const uu = yu.get(Eu);
          uu && !uu.formed || this.startersOff.delete(Eu)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((uu => this.planByKey(uu)))
      }
      planAt(uu) {
        return this.planByKey(mS(uu))
      }
      predictSize(uu, Ru) {
        this.predicted.set(mS(uu), Ru), this.changed()
      }
      unpredict(uu) {
        this.predicted.delete(mS(uu)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(uu) {
        var Ru;
        const yu = mS(uu);
        return this.predicted.has(yu) ? null : null !== (Ru = this.layouts.get(yu)) && void 0 !== Ru ? Ru : null
      }
      showsStarter(uu) {
        return !this.startersOff.has(mS(uu))
      }
      setStarter(uu, Ru) {
        const yu = mS(uu);
        Ru ? this.startersOff.delete(yu) : this.startersOff.add(yu), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(uu) {
        this.guide = uu, this.guideSetting.write(uu), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(uu) {
        const Ru = this.plans.get(uu);
        if (!Ru) return null;
        const yu = this.predicted.get(uu);
        return yu ? {
          ...Ru,
          box: Py(Ru.box, Ru.kind, yu[0], yu[1], yu[2])
        } : Ru
      }
      changed() {
        this.version++;
        for (const uu of this.listeners) uu()
      }
    }
    var XS = yu(212);
    const VS = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function rS(uu, Ru, yu, Eu) {
      const Ku = uu.length / 3;
      for (let Qu = 0; Qu < VS.length / 3; Qu++) uu.push(VS[3 * Qu] * Eu[0] / 2 + yu[0], VS[3 * Qu + 1] * Eu[1] / 2 + yu[1], VS[3 * Qu + 2] * Eu[2] / 2 + yu[2]);
      for (let Qu = Ku; Qu < Ku + 24; Qu += 4) Ru.push(Qu, Qu + 1, Qu + 2, Qu, Qu + 2, Qu + 3)
    }

    function BS(uu, Ru, yu) {
      const Eu = Ru[0][0],
        Ku = [],
        Qu = [];
      for (const [mu, Ju] of Ru) rS(Ku, Qu, [mu[0] - Eu[0], mu[1] - Eu[1], mu[2] - Eu[2]], Ju);
      return uu.createGameMesh({
        positions: Ku,
        indices: Qu
      }, yu, Eu)
    }

    function xS(uu, Ru) {
      const yu = uu.w - 2,
        Eu = uu.d - 2;
      return 1 === function(uu, Ru, yu, Eu) {
        const [Ku, Qu, mu] = uu;
        if (Number(Ku <= 2) + Number(Qu <= 2) + Number(mu <= 2) >= 2) return function(uu, Ru, yu) {
          return (uu + Ru + yu) % 2 === 0 ? 1 : 3
        }(Ru, yu, Eu);
        const [Ju, Nu] = Ku >= Qu && Ku >= mu ? [yu, Eu] : Qu >= mu ? [Ru, Eu] : [Ru, yu];
        return Ju % 2 === 0 && Nu % 2 === 0 ? 1 : 3
      }([yu, uu.h - 2, Eu], Ru % yu, Math.floor(Ru / (yu * Eu)), Math.floor(Ru / yu) % Eu) ? "rod" : "channel"
    }

    function SS(uu, Ru, yu) {
      if ("reactor" !== uu.kind || uu.formed || !Ru) return !1;
      const Eu = oy(uu.box);
      for (let Ku = 0; Ku < Eu; Ku++) {
        const uu = yu(Ku);
        if (null !== uu && Gy(uu)) return !1
      }
      return !0
    }

    function pS(uu, Ru, yu, Eu, Ku) {
      var Qu;
      let mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const Ju = uE(uu.box, Ru),
        Nu = KE(uu.kind, Ju, yu);
      if ("wrong" === Nu || "blocked" === Nu) return "wrong";
      if (!Ku) return null;
      if ("inside" === Ju && "reactor" === uu.kind && "Air" === Uy(yu)) {
        if (null !== mu) {
          var Xu;
          const yu = qr[Or(mu, RE(uu.box, Ru))];
          return yu && null !== (Xu = AN(yu)) && void 0 !== Xu ? Xu : null
        }
        if (Eu) return xS(uu.box, RE(uu.box, Ru))
      }
      if ("missing" !== Nu) return null;
      const Vu = QE(uu.kind, Ju);
      return null === Vu ? null : null !== (Qu = AN(Vu)) && void 0 !== Qu ? Qu : null
    }
    const TS = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function WS(uu, Ru, yu) {
      const Eu = yu => {
        const Eu = Ru(ay(uu.box, yu));
        return null !== Eu && function(uu, Ru) {
          return "reactor" !== uu.kind || Ru !== Oy(uu.box) && "inside" !== uE(uu.box, Ru)
        }(uu, yu) && "ok" !== KE(uu.kind, uE(uu.box, yu), Eu)
      };
      if (yu) {
        const Qu = fy(uu.box, [Math.floor(yu[0]), Math.floor(yu[1]), Math.floor(yu[2])]);
        if (Qu >= 0 && (Eu(Qu) || (Ku = Qu, "reactor" === uu.kind && "inside" === uE(uu.box, Ku) && "Air" === Ru(ay(uu.box, Ku))))) return Qu
      }
      var Ku;
      const Qu = oy(uu.box);
      for (let mu = 0; mu < Qu; mu++)
        if (Eu(mu)) return mu;
      return -1
    }

    function jS(uu, Ru) {
      return Math.floor(Ru / (uu.w * uu.d))
    }

    function HS(uu, Ru, yu) {
      return yu >= 0 && jS(uu, Ru) > jS(uu, yu)
    }

    function dS(uu, Ru) {
      return Ru >= 0 && uu.h >= 3 && jS(uu, Ru) === uu.h - 1
    }

    function bS(uu) {
      const Ru = Uy(uu);
      return Ru === jy || "Collider" === Ru || "Laser" === Ru || Ru.startsWith("_Collider ")
    }

    function CS(uu, Ru, yu, Eu) {
      if (Eu(uu)) return null;
      if (!TS.every((Ru => {
          let [Eu, Ku, Qu] = Ru;
          const mu = yu([uu[0] + Eu, uu[1] + Ku, uu[2] + Qu]);
          return null !== mu && !Ly("reactor", mu) && "reactor" !== ny(mu)
        }))) return null;
      const Ku = zy("reactor").min,
        Qu = Zy([uu[0], uu[1], uu[2]], function(uu, Ru) {
          const yu = Ru[0] - (uu[0] + .5),
            Eu = Ru[2] - (uu[2] + .5);
          return Math.abs(yu) >= Math.abs(Eu) ? yu >= 0 ? 2 : 4 : Eu >= 0 ? 1 : 3
        }(uu, Ru), Ku, Ku, Ku, hy("reactor", Ku)),
        mu = Oy(Qu);
      let Ju = !0;
      for (let Nu = 0; Nu < oy(Qu) && Ju; Nu++) {
        if (Nu === mu) continue;
        const uu = ay(Qu, Nu),
          Ru = yu(uu);
        Ju = !Eu(uu) && (null === Ru || !bS(Ru))
      }
      return {
        box: Qu,
        fits: Ju
      }
    }
    const kS = eN,
      eS = "baf2Goal",
      AS = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      DS = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      MS = .4;

    function IS(uu, Ru) {
      let [yu, Eu, Ku] = uu;
      const Qu = sN([yu - .02, Eu - .02, Ku - .02], [yu + 1.02, Eu + 1.02, Ku + 1.02], .07);
      return Ru && (Qu.push([
        [yu + .5, Eu + 1 + .7, Ku + .5],
        [.08, 1.4, .08]
      ]), Qu.push([
        [yu + .5, Eu + 1 + 1.4 + .2, Ku + .5],
        [MS, MS, MS]
      ])), Qu
    }

    function GS(uu, Ru) {
      let [yu, Eu, Ku] = Ru;
      return uu.isBlockInLoadedChunk(yu, Eu, Ku) ? uu.blockIdToBlockName(uu.getBlockId(yu, Eu, Ku)) : null
    }
    let US = null;
    const nS = new Set;
    let sS = null;

    function tS(uu) {
      US = uu;
      for (const Ru of nS) Ru(uu)
    }
    class lS {
      constructor(uu) {
        var Ru;
        this.plans = uu, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (Ru = uu => {
          var Ru, yu;
          this.setGoal(null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.goal) && void 0 !== Ru ? Ru : null, null !== (yu = null === uu || void 0 === uu ? void 0 : uu.startsBattery) && void 0 !== yu && yu)
        }, sS ??= [sK.k.subscribe("setDirectionArrow", (uu => {
          let {
            id: Ru,
            position: yu,
            text: Eu
          } = uu;
          Ru === eS && tS({
            goal: [Math.floor(yu[0]), Math.floor(yu[1]), Math.floor(yu[2])],
            startsBattery: JSON.stringify(null !== Eu && void 0 !== Eu ? Eu : null).includes("arrowStartBattery")
          })
        })), sK.k.subscribe("clearDirectionArrow", (uu => {
          let {
            id: Ru
          } = uu;
          null !== Ru && Ru !== eS || tS(null)
        }))], nS.add(Ru), Ru(US), () => {
          nS.delete(Ru)
        })
      }
      onAfterRender(uu, Ru) {
        const yu = performance.now();
        if (this.cues.length > 0) {
          const Ru = .55 + .45 * Math.sin(yu / 1100 * Math.PI * 2);
          for (const yu of this.cues) uu.setGameMesh(yu, {
            visibility: Ru
          })
        }
        if (yu - this.lastCheckMs < 150) return;
        this.lastCheckMs = yu;
        const Eu = this.plans.all().filter((uu => {
            const [yu, Eu, Ku] = uu.box.ctrl;
            return (!uu.formed || null !== this.plans.layoutOf(uu.box.ctrl)) && (yu - Ru[0]) ** 2 + (Eu - Ru[1]) ** 2 + (Ku - Ru[2]) ** 2 <= 2304
          })),
          Ku = function(uu, Ru) {
            const yu = XS.f.jS,
              Eu = new Map;
            for (const Qu of Ru) {
              const Ru = ay(Qu.box, 0),
                mu = ay(Qu.box, oy(Qu.box) - 1),
                Ju = [Math.min(Ru[0], mu[0]), Math.min(Ru[1], mu[1]), Math.min(Ru[2], mu[2])].map((uu => Math.floor(uu / yu))),
                Nu = [Math.max(Ru[0], mu[0]), Math.max(Ru[1], mu[1]), Math.max(Ru[2], mu[2])].map((uu => Math.floor(uu / yu)));
              for (let yu = Ju[0]; yu <= Nu[0]; yu++)
                for (let Ru = Ju[1]; Ru <= Nu[1]; Ru++)
                  for (let Qu = Ju[2]; Qu <= Nu[2]; Qu++) {
                    var Ku;
                    Eu.set(`${yu},${Ru},${Qu}`, null !== (Ku = uu.getChunkVersion(yu, Ru, Qu)) && void 0 !== Ku ? Ku : -1)
                  }
            }
            return Eu
          }(uu, Eu);
        this.plans.getVersion() === this.storeVersion && (function(uu, Ru) {
          if (uu.size !== Ru.size) return !1;
          for (const [yu, Eu] of uu)
            if (Ru.get(yu) !== Eu) return !1;
          return !0
        }(Ku, this.chunkVersions) || yu - this.lastRescanMs < 600) || (this.lastRescanMs = yu, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Ku, this.redraw(uu, Eu))
      }
      dispose(uu) {
        this.unwatch(), US = null, this.clearMeshes(uu), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(uu, Ru) {
        var yu;
        (null === uu || void 0 === uu ? void 0 : uu.join()) === (null === (yu = this.goal) || void 0 === yu ? void 0 : yu.join()) && Ru === this.startsBattery || (this.goal = uu, this.startsBattery = Ru, this.storeVersion = -1)
      }
      redraw(uu, Ru) {
        const yu = Ru => GS(uu, Ru),
          Eu = new Map,
          Ku = [],
          Qu = this.plans.guideOn();
        for (const Xu of Ru) {
          const uu = Qu && SS(Xu, this.plans.showsStarter(Xu.box.ctrl), (uu => yu(ay(Xu.box, uu)))),
            Ru = "reactor" === Xu.kind ? this.plans.layoutOf(Xu.box.ctrl) : null,
            mu = Qu && !Xu.formed ? WS(Xu, yu, this.goal) : -1;
          mu >= 0 && Ku.push([ay(Xu.box, mu), dS(Xu.box, mu)]);
          const Ju = oy(Xu.box);
          for (let Ku = 0; Ku < Ju; Ku++) {
            const Ju = ay(Xu.box, Ku),
              Nu = yu(Ju),
              Vu = null === Nu ? null : pS(Xu, Ku, Nu, uu, Qu, Ru);
            if (null !== Vu) {
              const uu = "wrong" !== Vu && HS(Xu.box, Ku, mu),
                Ru = uu ? `${Vu}Dim` : Vu;
              let yu = Eu.get(Ru);
              yu || (yu = {
                draw: {
                  ghost: Vu,
                  dim: uu
                },
                list: []
              }, Eu.set(Ru, yu)), yu.list.push(Ju)
            }
          }
        }
        if (Qu && this.startsBattery && this.goal) {
          const [uu, Ru, Ku] = this.goal, Qu = [];
          for (const [Eu, mu, Ju] of AS) {
            const Nu = [uu + Eu, Ru + mu, Ku + Ju];
            "Air" === yu(Nu) && Qu.push(Nu)
          }
          if (Qu.length > 0) {
            var mu;
            const uu = null !== (mu = Eu.get("cell")) && void 0 !== mu ? mu : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            uu.list.push(...Qu), Eu.set("cell", uu)
          }
        }
        const Ju = [...Eu.keys()].sort(),
          Nu = [...Ju.map((uu => `${uu}:${Eu.get(uu).list.join(";")}`)), `cue:${Ku.join(";")}`].join("|");
        if (Nu !== this.shownKey) {
          this.shownKey = Nu, this.clearMeshes(uu);
          for (const Ru of Ju) {
            const {
              draw: yu,
              list: Ku
            } = Eu.get(Ru);
            this.meshes.push(this.build(uu, yu, Ku))
          }
          for (const [Ru, yu] of Ku) this.cues.push(BS(uu, IS(Ru, yu), DS))
        }
      }
      build(uu, Ru, yu) {
        let {
          ghost: Eu,
          dim: Ku
        } = Ru;
        const {
          size: Qu,
          colour: mu,
          alpha: Ju
        } = kS[Eu], Nu = yu[0], Xu = [], Vu = [];
        for (const [ru, Bu, xu] of yu) rS(Xu, Vu, [ru - Nu[0] + .5, Bu - Nu[1] + .5, xu - Nu[2] + .5], [Qu, Qu, Qu]);
        return uu.createGameMesh({
          positions: Xu,
          indices: Vu
        }, {
          rgb: mu,
          alpha: Ju * (Ku ? .3 : 1)
        }, Nu)
      }
      clearMeshes(uu) {
        for (const Ru of [...this.meshes, ...this.cues]) uu.disposeGameMesh(Ru);
        this.meshes = [], this.cues = []
      }
    }
    const gS = [.56, .83, 1],
      cS = [1, .3, .25];
    class LS {
      constructor(uu) {
        this.plans = uu, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(uu, Ru, yu) {
        var Eu;
        const Ku = performance.now();
        if (Ku - this.lastCheckMs < 150) return;
        this.lastCheckMs = Ku;
        const Qu = Ru => GS(uu, Ru),
          mu = null === (Eu = uu.Xyu(Ru)) || void 0 === Eu ? void 0 : Eu.name,
          Ju = mu && "Reactor Frame" === Uy(mu) ? uu.getTargetedBlock() : null,
          Nu = Ju ? [Ju.RT[0], Ju.RT[1], Ju.RT[2]] : null,
          Xu = null !== Nu && "Air" === Qu(Nu) && Nu.every(((uu, Ru) => Math.abs(uu + .5 - yu[Ru]) <= 8)) ? CS(Nu, yu, Qu, (uu => this.inPlan(uu))) : null,
          Vu = Xu ? `${Xu.box.ctrl.join()}|${Xu.box.rot}|${Xu.fits}` : "";
        Vu !== this.shownKey && this.show(uu, Vu, Xu)
      }
      dispose(uu) {
        this.clear(uu), this.shownKey = ""
      }
      inPlan(uu) {
        return this.plans.all().some((Ru => fy(Ru.box, uu) >= 0))
      }
      show(uu, Ru, yu) {
        if (this.clear(uu), this.shownKey = Ru, !yu) return;
        const {
          box: Eu,
          fits: Ku
        } = yu, Qu = Ku ? gS : cS, {
          lo: mu,
          hi: Ju
        } = nN(Eu);
        this.meshes.push(BS(uu, sN(mu, Ju, .05), {
          rgb: Qu,
          alpha: 1
        }));
        const Nu = [],
          Xu = ay(Eu, 0)[1];
        for (let Vu = 0; Vu < Eu.w * Eu.d; Vu++) {
          const [uu, , Ru] = ay(Eu, Vu);
          Nu.push([
            [uu + .5, Xu + .02 + .01, Ru + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(BS(uu, Nu, {
          rgb: Qu,
          alpha: .25
        }))
      }
      clear(uu) {
        for (const Ru of this.meshes) uu.disposeGameMesh(Ru);
        this.meshes = []
      }
    }
    const zS = "buildAFactory2Game:";

    function FS(uu, Ru, yu) {
      const Eu = uu => {
          const [yu, Eu, Ku] = uu.box.ctrl;
          return yu === Ru[0] && Eu === Ru[1] && Ku === Ru[2]
        },
        Ku = uu.find((uu => Eu(uu) || fy(uu.box, Ru) >= 0));
      if (!Ku) return null;
      const Qu = function(uu, Ru, yu) {
        const {
          w: Eu,
          h: Ku,
          d: Qu
        } = uu.box, mu = "reactor" === uu.kind ? `${zS}rxTitle` : `${zS}batTitle`;
        if (uu.formed) return {
          key: `${zS}lookPlanFormed`,
          kindKey: mu,
          w: Eu,
          h: Ku,
          d: Qu,
          count: 0
        };
        let Ju = 0,
          Nu = 0;
        for (let Vu = 0; Vu < oy(uu.box); Vu++) {
          const Ru = yu(ay(uu.box, Vu)),
            Eu = null === Ru ? "ok" : KE(uu.kind, uE(uu.box, Vu), Ru);
          Ju += "missing" === Eu ? 1 : 0, Nu += "wrong" === Eu || "blocked" === Eu ? 1 : 0
        }
        const Xu = function(uu, Ru, yu) {
          if (Ru < 0 || null === yu) return;
          const Eu = uE(uu.box, Ru),
            Ku = KE(uu.kind, Eu, yu);
          return "blocked" === Ku ? `${zS}lookWhy_blocked` : "wrong" === Ku ? "ctrl" === Eu ? `${zS}lookWhy_ctrl` : `${zS}lookWhy_reactor_${Eu}` : void 0
        }(uu, fy(uu.box, Ru), yu([Ru[0], Ru[1], Ru[2]]));
        if (Ju > 0) return {
          key: `${zS}lookPlanToBuild`,
          kindKey: mu,
          w: Eu,
          h: Ku,
          d: Qu,
          count: Ju,
          why: Xu
        };
        if (Nu > 0) return {
          key: `${zS}lookPlanTakeOut`,
          kindKey: mu,
          w: Eu,
          h: Ku,
          d: Qu,
          count: Nu,
          why: Xu
        };
        return {
          key: "reactor" === uu.kind ? `${zS}lookPlanNoRods` : `${zS}lookPlanDone`,
          kindKey: mu,
          w: Eu,
          h: Ku,
          d: Qu,
          count: 0
        }
      }(Ku, Ru, yu);
      return "reactor" === Ku.kind && Eu(Ku) ? {
        ...Qu,
        ctrl: !0
      } : Qu
    }

    function wS(uu, Ru) {
      return uu === Ru || null !== uu && null !== Ru && uu.key === Ru.key && uu.kindKey === Ru.kindKey && uu.w === Ru.w && uu.h === Ru.h && uu.d === Ru.d && uu.count === Ru.count && uu.why === Ru.why && uu.ctrl === Ru.ctrl
    }

    function ZS() {
      return performance.now()
    }
    class hS {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZS;
        this.ticket = uu, this.sent = Ru, this.backstopMs = yu, this.now = Eu, this.queuedAt = void 0, this.queuedAt = Eu()
      }
      answered() {
        const uu = this.now(),
          Ru = this.sent.leftAt(this.ticket);
        return null !== Ru && uu - Ru > 4e3 || uu - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class PS {
      constructor() {
        this.echoes = []
      }
      add(uu) {
        this.echoes = this.echoes.filter((uu => !uu.answered())), this.echoes.push(uu)
      }
      answered() {
        var uu, Ru;
        return null === (uu = null === (Ru = this.echoes.at(-1)) || void 0 === Ru ? void 0 : Ru.answered()) || void 0 === uu || uu
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((uu => uu.answered()))
      }
      age() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.echoes.at(-1)) || void 0 === Ru ? void 0 : Ru.age()) && void 0 !== uu ? uu : null
      }
      clear() {
        this.echoes = []
      }
    }
    class iS {
      constructor(uu) {
        this.send = uu, this.value = null, this.sent = null, this.echoes = new PS, this.down = !1, this.timer = null
      }
      shown(uu) {
        return null === this.value ? uu : this.down || this.value !== this.sent ? this.value : uu === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), uu) : this.value
      }
      pendingFor(uu) {
        return null !== this.value && this.value === this.sent && uu !== this.value ? this.echoes.age() : null
      }
      assume(uu, Ru) {
        this.disarm(), this.down = !1, this.value = uu, this.sent = uu, this.echoes.clear(), this.echoes.add(Ru)
      }
      press() {
        this.down = !0
      }
      drag(uu) {
        this.value = uu, this.arm(this.down ? 1e3 : 400)
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
      arm(uu) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), uu)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class YS {
      constructor() {
        this.pending = new Map
      }
      set(uu, Ru, yu) {
        var Eu;
        const Ku = null !== (Eu = this.pending.get(uu)) && void 0 !== Eu ? Eu : {
          on: Ru,
          echoes: new PS
        };
        Ku.on = Ru, Ku.echoes.add(yu), this.pending.set(uu, Ku)
      }
      shown(uu) {
        let Ru = uu;
        for (const [yu, {
            on: Eu,
            echoes: Ku
          }] of this.pending) 0 !== (uu & yu) === Eu && Ku.agreeCounts() || Ku.answered() ? this.pending.delete(yu) : Ru = Eu ? Ru | yu : Ru & ~yu;
        return Ru
      }
      pendingMask() {
        let uu = 0;
        for (const Ru of this.pending.keys()) uu |= Ru;
        return uu
      }
      pendingFor(uu) {
        let Ru = null;
        for (const [Eu, {
            on: Ku,
            echoes: Qu
          }] of this.pending) {
          if (void 0 !== uu && 0 !== (uu & Eu) === Ku) continue;
          const mu = Qu.age();
          var yu;
          if (null !== mu) Ru = Math.max(null !== (yu = Ru) && void 0 !== yu ? yu : 0, mu)
        }
        return Ru
      }
      clear() {
        this.pending.clear()
      }
    }
    class oS {
      constructor() {
        this.dims = null, this.echoes = new PS, this.unmet = null
      }
      shown(uu) {
        var Ru;
        return this.dims && (qS(this.dims, uu) && this.echoes.agreeCounts() || this.echoes.answered()) && (qS(this.dims, uu) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Ru = this.dims) && void 0 !== Ru ? Ru : uu
      }
      takeUnmet() {
        const uu = this.unmet;
        return this.unmet = null, uu
      }
      set(uu, Ru) {
        this.dims = uu, this.echoes.add(Ru)
      }
      pendingFor(uu) {
        return null === this.dims || uu && qS(this.dims, uu) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function qS(uu, Ru) {
      return uu[0] === Ru[0] && uu[1] === Ru[1] && uu[2] === Ru[2]
    }
    class OS {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZS;
        this.now = uu, this.taps = new Map
      }
      tap(uu, Ru, yu) {
        return !this.busy(uu) && (this.taps.set(uu, {
          at: this.now(),
          done: Ru
        }), yu(), !0)
      }
      settle(uu) {
        for (const [Ru, yu] of [...this.taps]) yu.done(uu) && this.taps.delete(Ru)
      }
      busy(uu) {
        const Ru = this.taps.get(uu);
        return !!Ru && (!(this.now() - Ru.at >= 3e3) || (this.taps.delete(uu), !1))
      }
      busyIds() {
        const uu = new Set;
        for (const Ru of [...this.taps.keys()]) this.busy(Ru) && uu.add(Ru);
        return uu
      }
      clear() {
        this.taps.clear()
      }
    }

    function vS(uu) {
      return {
        send: Ru => uu.track(Ru),
        sendUrgent: (Ru, yu) => uu.track(Ru, {
          urgent: !0,
          supersedes: yu
        }),
        leftAt: Ru => uu.leftAt(Ru),
        holdReserve: () => uu.holdUrgentReserve(),
        answerMs: sm
      }
    }

    function aS() {
      return performance.now()
    }

    function fS(uu) {
      const Ru = uu.baf2RxNeed.map((uu => {
        let [Ru, yu] = uu;
        return [Ru, yu]
      }));
      return JSON.stringify([uu.baf2RxFormed, Ru, uu.baf2RxBad, uu.baf2RxCells])
    }

    function Rp(uu, Ru) {
      const yu = 0 !== (Ru & BR),
        Eu = 0 !== (uu.baf2RxFlags & BR);
      return !yu || Eu || "running" !== uu.baf2RxState && "idle" !== uu.baf2RxState ? !yu && Eu && "scram" === uu.baf2RxState && uu.baf2RxFuel > 0 ? "idle" : uu.baf2RxState : "scram"
    }

    function yp(uu) {
      return JSON.stringify([uu.baf2BatFormed, uu.baf2BatNeed, uu.baf2BatBad])
    }

    function Ep(uu) {
      return uu.join(",")
    }
    class Kp {
      constructor() {
        this.listeners = new Set
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class Qp {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(uu, Ru) {
        this.lastAt = uu, this.lastUntil = uu + Ru
      }
      answered(uu) {
        return this.lastAt >= uu || uu < this.lastUntil
      }
    }
    class mp {
      constructor(uu, Ru) {
        this.link = uu, this.now = Ru, this.hold = new oS, this.picked = null, this.notTaken = null
      }
      shown(uu) {
        const Ru = this.hold.shown(uu);
        if (this.hold.takeUnmet() && this.picked) {
          var yu;
          const {
            plans: Ru,
            ctrl: Eu,
            at: Ku
          } = this.picked;
          this.picked = null, Ru.unpredict(Eu), null === (yu = this.notTaken) || void 0 === yu || yu.call(this, uu, Ku)
        }
        return Ru
      }
      pendingFor(uu) {
        return this.hold.pendingFor(uu)
      }
      cB(uu, Ru, yu) {
        uu.predictSize(Ru, yu), this.picked = {
          plans: uu,
          ctrl: Ru,
          at: this.now()
        };
        const Eu = this.link.send(rR(Ru, "plan", ...yu));
        this.hold.set(yu, new hS(Eu, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class Jp {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : aS;
        this.plans = uu, this.readInterior = Ru, this.link = yu, this.now = Eu, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new YS, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Kp, this.redraw = null, this.releaseReserve = null, this.size = new mp(yu, Eu), this.oneShots = new OS(Eu), this.throttle = new iS((uu => this.echo(this.link.send(this.command("throttle", uu)))))
      }
      set(uu) {
        !uu.baf2RxOpen && this.raw && Ep(this.raw.baf2RxAt) === Ep(uu.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(uu), this.Op(uu)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(uu) {
        this.size.notTaken = uu
      }
      resize(uu) {
        this.raw && (this.size.cB(this.plans, this.raw.baf2RxAt, uu), this.Op(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const uu = this.raw.baf2RxAt;
        this.plans.setStarter(uu, !this.plans.showsStarter(uu)), this.Op(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Op(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Op(this.raw)
      }
      send(uu) {
        if (this.raw) {
          for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
          this.link.send(this.command(uu, ...yu))
        }
      }
      tap(uu, Ru) {
        this.raw && this.oneShots.tap(uu, function(uu, Ru) {
          if ("start" === uu) return uu => 0 === (uu.baf2RxFlags & BR);
          if ("odConfirm" === uu) return uu => 0 !== (uu.baf2RxFlags & xR);
          const yu = fS(Ru);
          return uu => fS(uu) !== yu
        }(uu, this.raw), Ru) && ("start" === uu && (this.startedAt = this.now()), this.Op(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(BR, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(uu, Ru) {
        if (!this.raw) return;
        const yu = uu === BR ? this.command(Ru ? "scram" : "start") : this.command("od", Ru ? 1 : 0),
          Eu = Ru && uu === BR,
          Ku = `${VR} ${this.raw.baf2RxAt.join(" ")} `,
          Qu = this.echo(Eu ? this.link.sendUrgent(yu, (uu => {
            const Ru = uu.startsWith(Ku) ? uu.slice(Ku.length).split(" ")[0] : null;
            return "throttle" === Ru || "start" === Ru
          })) : this.link.send(yu));
        this.flags.set(uu, Ru, Qu), Eu && this.throttle.assume(0, Qu), this.Op(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(uu) {
        this.throttle.drag(uu), this.raw && this.Op(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Op(this.raw)
      }
      subscribe(uu) {
        return this.listeners.subscribe(uu)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var uu;
        this.throttle.release(), null === (uu = this.releaseReserve) || void 0 === uu || uu.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(uu) {
        for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
        return rR(this.raw.baf2RxAt, uu, ...yu)
      }
      echo(uu) {
        return new hS(uu, this.link, this.link.answerMs, this.now)
      }
      Op(uu) {
        var Ru;
        this.raw = uu;
        const yu = this.flags.shown(uu.baf2RxFlags),
          Eu = {
            ...uu,
            baf2RxFlags: yu,
            baf2RxTarget: this.throttle.shown(uu.baf2RxTarget),
            baf2RxState: Rp(uu, yu)
          },
          Ku = this.size.shown(Eu.baf2RxDims),
          Qu = this.throttle.pendingFor(),
          mu = [this.throttle.pendingFor(uu.baf2RxTarget), this.flags.pendingFor(uu.baf2RxFlags), this.size.pendingFor(uu.baf2RxDims)].filter((uu => null !== uu)),
          Ju = mu.length > 0 ? Math.max(...mu) : null,
          Nu = this.oneShots.busyIds(),
          Xu = Eu.baf2RxAt;
        let Vu, ru, Bu = null,
          xu = [Math.max(0, Ku[0] - 2), Math.max(0, Ku[1] - 2), Math.max(0, Ku[2] - 2)];
        if (Eu.baf2RxFormed) {
          const [uu, Ru, yu] = Eu.baf2RxDims;
          xu = [Math.max(0, uu - 2), Math.max(0, Ru - 2), Math.max(0, yu - 2)], Vu = Array.from(Eu.baf2RxCells, Number), ru = `${xu.join(",")}:${Eu.baf2RxCells}`
        } else {
          var Su;
          const uu = null === (Su = this.plans.planAt(Xu)) || void 0 === Su ? void 0 : Su.box,
            Ru = uu ? Py(uu, "reactor", ...Ku) : Zy(Xu, 1, ...Ku, hy("reactor", Ku[0])),
            yu = this.readInterior(Ru);
          Bu = uN(xu, yu), Vu = yu, ru = `${xu.join(",")}:${yu.join("")}`
        }(null === (Ru = this.looksOf) || void 0 === Ru ? void 0 : Ru.key) !== ru && (this.looksOf = {
          key: ru,
          looks: mN(xu, Vu)
        }), this.view = {
          status: Eu,
          dims: Ku,
          plan: Bu,
          inner: xu,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Xu),
          odConfirmed: this.odConfirmed || 0 !== (Eu.baf2RxFlags & HR),
          guide: this.plans.guideOn(),
          throttlePending: null !== Qu,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== Ju && Ju >= 5e3,
          busy: Nu,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== Ju || Nu.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Op(this.raw)
        }), 250))
      }
    }
    class Np {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aS;
        this.plans = uu, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Kp, this.redraw = null, this.size = new mp(Ru, yu), this.oneShots = new OS(yu)
      }
      set(uu) {
        !uu.baf2BatOpen && this.view && Ep(this.view.status.baf2BatAt) === Ep(uu.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(uu), this.Op(uu)
      }
      tap(uu, Ru) {
        if (!this.view) return;
        const yu = yp(this.view.status);
        this.oneShots.tap(uu, (uu => yp(uu) !== yu), Ru) && this.Op(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(uu) {
        this.size.notTaken = uu
      }
      resize(uu) {
        this.view && (this.size.cB(this.plans, this.view.status.baf2BatAt, uu), this.Op(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Op(this.view.status)
      }
      subscribe(uu) {
        return this.listeners.subscribe(uu)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Op(uu) {
        const Ru = this.size.shown(uu.baf2BatDims),
          yu = this.oneShots.busyIds();
        this.view = {
          status: uu,
          dims: Ru,
          Nr: dN(Ru, uu.baf2BatDims) ? uu.baf2BatCapacity : XN(...Ru),
          guide: this.plans.guideOn(),
          busy: yu
        }, this.listeners.notify(), yu.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Op(this.view.status)
        }), 250))
      }
    }
    const Xp = "buildAFactory2Game:";

    function Vp() {
      var uu;
      const Ru = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!Ru) return null;
      const yu = Ru.querySelector(".ExitButton");
      return function(uu, Ru) {
        const yu = Ru ? Ru.left - 8 : uu.right;
        return {
          left: uu.left,
          top: uu.top,
          width: Math.max(0, yu - uu.left),
          height: uu.height
        }
      }(Ru.getBoundingClientRect(), null !== (uu = null === yu || void 0 === yu ? void 0 : yu.getBoundingClientRect()) && void 0 !== uu ? uu : null)
    }
    const rp = (0, Eu.memo)((function(uu) {
      let {
        store: Ru
      } = uu;
      const {
        t: yu
      } = (0, DK.E)(), [Ku, Qu] = (0, Eu.useState)((() => Ru.get())), [mu, Ju] = (0, Eu.useState)((() => performance.now()));
      (0, Eu.useEffect)((() => (Qu(Ru.get()), Ru.subscribe((() => {
        Qu(Ru.get()), Ju(performance.now())
      })))), [Ru]);
      const {
        alarm: Nu,
        boomAt: Xu
      } = Ku, Vu = null !== Nu && null !== Nu.secs, [ru, Bu] = (0, Eu.useState)(null);
      (0, Eu.useEffect)((() => {
        if (!Vu) return;
        Bu(Vp());
        const uu = setInterval((() => {
          Ju(performance.now()), Bu(Vp())
        }), 250);
        return () => {
          clearInterval(uu)
        }
      }), [Vu]);
      const [xu, Su] = (0, Eu.useState)(!1);
      return (0, Eu.useEffect)((() => {
        if (Xu === -1 / 0) return;
        Su(!0);
        const uu = setTimeout((() => {
          Su(!1)
        }), 1300);
        return () => {
          clearTimeout(uu)
        }
      }), [Xu]), (0, eQ.jsxs)(eQ.Fragment, {
        children: [null !== Nu && (0, eQ.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: yu(Nu.hot ? `${Xp}rxAlarmSiren` : `${Xp}rxAlarmDamaged`, {
            amount: String(Nu.damage)
          })
        }), null !== Nu && null !== Nu.secs && (0, eQ.jsx)("div", {
          className: ru ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== ru && void 0 !== ru ? ru : void 0,
          "aria-live": "assertive",
          children: yu(`${Xp}rxAlarmCountdown`, {
            amount: String((pu = Nu.secs, Tu = mu - Nu.receivedAt, Math.max(1, Math.ceil(pu - Tu / 1e3))))
          })
        }), xu && (0, eQ.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var pu, Tu
    }));
    class Bp {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      WH(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const yu = uu.baf2RxAlarmAt.join(",");
        let Eu = this.snapshot.boomAt;
        if (uu.baf2RxAlarmBoom) this.byReactor.delete(yu), Eu = Ru;
        else if (uu.baf2RxAlarmDamage <= 0) this.byReactor.delete(yu);
        else {
          var Ku;
          this.byReactor.set(yu, {
            damage: uu.baf2RxAlarmDamage,
            secs: null !== (Ku = uu.baf2RxAlarmSecs) && void 0 !== Ku ? Ku : null,
            hot: !0 === uu.baf2RxAlarmHot,
            receivedAt: Ru
          })
        }
        this.Op(Eu)
      }
      retain(uu) {
        let Ru = !1;
        for (const yu of [...this.byReactor.keys()]) uu.has(yu) || (this.byReactor.delete(yu), Ru = !0);
        Ru && this.Op(this.snapshot.boomAt)
      }
      has(uu) {
        return this.byReactor.has(uu)
      }
      get() {
        return this.snapshot
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      Op(uu) {
        let Ru = null;
        for (const yu of this.byReactor.values())(!Ru || yu.damage > Ru.damage) && (Ru = yu);
        this.snapshot = {
          alarm: Ru,
          boomAt: uu
        };
        for (const yu of this.listeners) yu()
      }
    }
    const xp = {
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

    function Sp(uu) {
      return [uu[0], uu[1], uu[2]]
    }

    function pp(uu) {
      return `${uu[0]},${uu[1]},${uu[2]}`
    }
    class Tp {
      constructor(uu) {
        if (this.plans = uu, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var uu;
            return {
              active: this.glows.flatMap((uu => {
                let {
                  record: Ru
                } = uu;
                return Ru ? [Ru] : []
              })),
              log: [...null !== (uu = this.devLog) && void 0 !== uu ? uu : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var uu;
        return null !== (uu = this.devLog) && void 0 !== uu ? uu : []
      }
      check(uu, Ru, yu) {
        const Eu = new Set(Ru.map((uu => pp(uu.box.ctrl))));
        for (const mu of function(uu, Ru) {
            const yu = [],
              Eu = new Map(uu);
            uu.clear();
            for (const Ku of Ru) {
              const Ru = mS(Ku.box.ctrl),
                Qu = Ku.formed ? Ku.level : 0;
              uu.set(Ru, Qu), Qu > 0 && 0 === Eu.get(Ru) && yu.push(Ku)
            }
            return yu
          }(this.levels, this.plans.all())) Eu.has(pp(mu.box.ctrl)) && this.show(uu, mu, "on", yu);
        const Ku = this.plans.lastFormed();
        if (null === Ku || Ku.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Ku.receivedAt;
        const Qu = function(uu, Ru) {
          var yu;
          const Eu = mS(uu);
          return null !== (yu = Ru.find((uu => mS(uu.box.ctrl) === Eu))) && void 0 !== yu ? yu : null
        }(Ku.ctrl, Ru);
        return Qu && this.show(uu, Qu, "formed", yu), Qu
      }
      fade(uu, Ru) {
        0 !== this.glows.length && (this.glows = this.glows.filter((yu => {
          let {
            mesh: Eu,
            glow: Ku,
            startMs: Qu,
            record: mu
          } = yu;
          const Ju = (Ru - Qu) / xp[Ku].ms;
          return Ju >= 1 ? (uu.disposeGameMesh(Eu), mu && (mu.endMs = Ru), !1) : (uu.setGameMesh(Eu, {
            visibility: "formed" === Ku ? 1 - Ju : Math.sin(Math.PI * Ju)
          }), !0)
        })))
      }
      dispose(uu) {
        for (const {
            mesh: yu
          }
          of this.glows) uu.disposeGameMesh(yu);
        this.glows = [], this.levels.clear();
        const Ru = "undefined" !== typeof window ? window : null;
        (null === Ru || void 0 === Ru ? void 0 : Ru.baf2Glows) === this.devAccessor && delete Ru.baf2Glows
      }
      show(uu, Ru, yu, Eu) {
        const {
          lo: Ku,
          hi: Qu
        } = nN(Ru.box);
        let mu = null;
        this.devLog && (mu = {
          glow: yu,
          ctrl: Sp(Ru.box.ctrl),
          lo: Sp(Ku),
          hi: Sp(Qu),
          startMs: Eu,
          endMs: null
        }, this.devLog.push(mu), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(uu, yu, sN(Ku, Qu, xp[yu].thick)),
          glow: yu,
          startMs: Eu,
          record: mu
        })
      }
      build(uu, Ru, yu) {
        const Eu = BS(uu, yu, {
          rgb: xp[Ru].colour,
          alpha: 1
        });
        return uu.setGameMesh(Eu, {
          visibility: 0
        }), Eu
      }
    }
    const Wp = 1 / .6,
      jp = {
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
        blendMode: lJ.g.Standard,
        soft: !0
      },
      Hp = {
        ...jp,
        size: [.25, .4],
        count: 2
      };

    function dp(uu) {
      return {
        colours: [uu, uu],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: lJ.g.Add,
        soft: !1
      }
    }
    const bp = dp([150, 225, 255]),
      Cp = dp([185, 145, 255]),
      kp = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function ep(uu) {
      const Ru = tR[uu];
      return null === Ru.fuelSlot || Ky(Ru) ? kp.includes(uu) ? Cp : bp : jp
    }
    const Ap = {
        kind: "smokePuff"
      },
      Dp = [.2, .025, .2];

    function Mp(uu, Ru) {
      const [
        [yu, Eu, Ku],
        [Qu, mu, Ju]
      ] = uu.colours;
      return {
        texture: uu.soft ? Ap : "square_particle",
        Nr: Ru,
        minLifeTime: uu.life[0] / Wp,
        maxLifeTime: uu.life[1] / Wp,
        minEmitPower: uu.power[0] * Wp,
        maxEmitPower: uu.power[1] * Wp,
        minSize: uu.size[0],
        maxSize: uu.size[1],
        emitRate: 0,
        gravity: [0, uu.lift * Wp * Wp, 0],
        dir1: [-uu.spread, 1, -uu.spread],
        dir2: [uu.spread, 1, uu.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [yu, Eu, Ku, uu.alpha],
          maxColor: [Qu, mu, Ju, uu.alpha]
        }, {
          timeFraction: 1,
          minColor: [yu, Eu, Ku, 0],
          maxColor: [Qu, mu, Ju, 0]
        }],
        blendMode: uu.blendMode
      }
    }
    class Ip {
      constructor(uu) {
        this.fixed = uu, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(uu, Ru, yu) {
        var Eu;
        if (yu === this.lastFrame) return !1;
        this.lastFrame = yu;
        const Ku = this.at;
        Ku[0] = Ru[0] + .5, Ku[1] = Ru[1] + 1.025, Ku[2] = Ru[2] + .5;
        const Qu = null !== (Eu = this.fixed) && void 0 !== Eu ? Eu : Ju() ? Hp : jp;
        let mu = this.particles.get(Qu);
        return mu || (mu = uu.createParticles(function(uu) {
          return Mp(uu, Math.ceil(12 * uu.count * uu.life[1]) + uu.count)
        }(Qu), {
          pos: Ku,
          half: Dp
        }), this.particles.set(Qu, mu)), mu.moveTo(Ku), mu.emit(Qu.count), !0
      }
      dispose() {
        for (const uu of this.particles.values()) uu.stop();
        this.particles.clear()
      }
    }
    class Gp {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(uu) {
        this.indexed = !0;
        for (const Ru of MR) {
          const yu = ep(Ru);
          for (let Eu = 1; Eu <= 4; Eu++) {
            const Ku = uu.blockNameToBlockId(`${Ru}|meta|rot${Eu}|Running`, !0);
            if (null === Ku) continue;
            let Qu = this.pufferIndexByStyle.get(yu);
            void 0 === Qu && (Qu = this.pufferList.push(new Ip(yu === jp ? null : yu)) - 1, this.pufferIndexByStyle.set(yu, Qu)), this.pufferIndexById[Ku] = Qu + 1
          }
        }
      }
      onAfterRender(uu, Ru) {
        this.indexed || this.index(uu);
        const yu = performance.now(),
          Eu = 0 === this.lastMs ? 0 : Math.min(yu - this.lastMs, 250) / 1e3;
        this.lastMs = yu, this.frame++, uu.particlesEnabled() ? (this.scan(uu, Ru), this.puff(uu, Eu)) : this.sources = []
      }
      dispose() {
        for (const uu of this.pufferList) uu.dispose();
        this.sources = [], this.found = []
      }
      scan(uu, Ru) {
        0 === this.scanRow && (this.origin = [Math.floor(Ru[0]) - 12, Math.floor(Ru[1]) - 6, Math.floor(Ru[2]) - 12]);
        const yu = Math.min(this.scanRow + 16, 325),
          [Eu, Ku, Qu] = this.origin,
          mu = this.hits;
        mu.length = 0;
        for (let Ju = this.scanRow; Ju < yu; Ju++) {
          const Ru = Eu + Ju % 25,
            yu = Ku + Math.floor(Ju / 25);
          uu.scanBlocks(Ru, yu, Qu, Ru + 1, yu + 1, Qu + 25, this.pufferIndexById, mu)
        }
        for (let Ju = 0; Ju < mu.length; Ju += 4) {
          const uu = mu[Ju + 3];
          this.found.push({
            pos: [mu[Ju], mu[Ju + 1], mu[Ju + 2]],
            yV: uu,
            puffer: this.pufferList[this.pufferIndexById[uu] - 1]
          })
        }
        this.scanRow = yu, 325 === yu && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(uu, Ru) {
        const yu = this.sources.length;
        if (0 !== yu) {
          this.budget = Math.min(this.budget + Math.min(yu / 1.2, 12) * Ru, 2);
          for (let Ru = 0; Ru < yu && this.budget >= 1; Ru++) {
            const Ru = this.sources[this.cursor % yu];
            this.cursor = (this.cursor + 1) % yu, uu.getBlockId(Ru.pos[0], Ru.pos[1], Ru.pos[2]) === Ru.yV && (Ru.puffer.puff(uu, Ru.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Up = {
        ...dp([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      np = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function sp(uu) {
      return 0 === uu.spots.length ? 0 : Math.min(1 * uu.level, 4)
    }

    function tp(uu) {
      return 0 === uu.glass.length ? 0 : Math.min(.75 * uu.level, 3)
    }

    function lp(uu) {
      return `${uu.ctrl.join(",")}:${uu.rot}:${uu.cu},${uu.cv}:${uu.w},${uu.h},${uu.d}`
    }

    function gp(uu, Ru) {
      const yu = Ru.w - 2,
        Eu = Ru.h - 2,
        Ku = Ru.d - 2,
        Qu = [];
      for (let mu = 0; mu < yu * Eu * Ku; mu++) {
        const Ju = mu % yu,
          Nu = Math.floor(mu / yu) % Ku,
          Xu = Math.floor(mu / (yu * Ku));
        if (Ju > 0 && Ju < yu - 1 && Nu > 0 && Nu < Ku - 1 && Xu > 0 && Xu < Eu - 1) continue;
        const Vu = ay(Ru, yE(Ru, mu)),
          ru = GS(uu, Vu);
        if (null !== ru && "Fuel Rod" === Uy(ru))
          for (const Ru of np) {
            const yu = [Vu[0] + Ru[0], Vu[1] + Ru[1], Vu[2] + Ru[2]];
            Lp(uu, yu) && Qu.push(zp(yu, Ru))
          }
      }
      return Qu
    }

    function cp(uu, Ru) {
      const {
        lo: yu,
        hi: Eu
      } = nN(Ru), Ku = [];
      for (let Qu = yu[0]; Qu < Eu[0]; Qu++)
        for (let Ru = yu[1]; Ru < Eu[1]; Ru++) {
          const mu = Qu === yu[0] || Qu === Eu[0] - 1 || Ru === yu[1] || Ru === Eu[1] - 1 ? 1 : Math.max(1, Eu[2] - 1 - yu[2]);
          for (let Ju = yu[2]; Ju < Eu[2]; Ju += mu) {
            const mu = [Qu, Ru, Ju];
            if (!Lp(uu, mu)) continue;
            const Nu = Qu === yu[0] ? np[1] : Qu === Eu[0] - 1 ? np[0] : Ju === yu[2] ? np[5] : Ju === Eu[2] - 1 ? np[4] : Ru === yu[1] ? np[3] : np[2];
            Ku.push(zp(mu, Nu))
          }
        }
      return Ku
    }

    function Lp(uu, Ru) {
      const yu = GS(uu, Ru);
      return null !== yu && "Reactor Glass" === Uy(yu)
    }

    function zp(uu, Ru) {
      return [
        [uu[0] + .5 + .55 * Ru[0], uu[1] + .5 + .55 * Ru[1], uu[2] + .5 + .55 * Ru[2]],
        [0 === Ru[0] ? .4 : .02, 0 === Ru[1] ? .4 : .02, 0 === Ru[2] ? .4 : .02]
      ]
    }
    class Fp {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(uu, Ru, yu, Eu) {
        const Ku = [],
          Qu = new Set;
        for (const Xu of Ru) {
          var mu, Ju, Nu;
          const {
            box: Ru
          } = Xu;
          if ("reactor" !== Xu.kind || Xu.level <= 0 || (Ru.ctrl[0] - yu[0]) ** 2 + (Ru.ctrl[1] - yu[1]) ** 2 + (Ru.ctrl[2] - yu[2]) ** 2 > 576) continue;
          const Vu = lp(Ru);
          Qu.add(Vu);
          let ru = this.spots.get(Vu);
          if ((!ru || Eu - ru.at > 3e3) && (ru = {
              at: Eu,
              spots: gp(uu, Ru),
              glass: cp(uu, Ru)
            }, this.spots.set(Vu, ru)), 0 === ru.spots.length && 0 === ru.glass.length) continue;
          const Bu = this.sparking.find((uu => uu.key === Vu));
          Ku.push({
            key: Vu,
            level: Xu.level,
            spots: ru.spots,
            glass: ru.glass,
            budget: null !== (mu = null === Bu || void 0 === Bu ? void 0 : Bu.budget) && void 0 !== mu ? mu : 0,
            cursor: null !== (Ju = null === Bu || void 0 === Bu ? void 0 : Bu.cursor) && void 0 !== Ju ? Ju : 0,
            glassBudget: null !== (Nu = null === Bu || void 0 === Bu ? void 0 : Bu.glassBudget) && void 0 !== Nu ? Nu : 0
          })
        }
        for (const Xu of this.spots.keys()) Qu.has(Xu) || this.spots.delete(Xu);
        this.sparking = Ku
      }
      emit(uu, Ru, yu) {
        var Eu;
        if (0 === this.sparking.length || !uu.particlesEnabled() || yu === this.lastFrame) return;
        this.lastFrame = yu;
        let Ku = 0,
          Qu = 0;
        for (const Su of this.sparking) Ku += sp(Su), Qu += tp(Su);
        const mu = Ku > 8 ? 8 / Ku : 1,
          Ju = Qu > 6 ? 6 / Qu : 1;
        let Nu, Xu = null,
          Vu = null;
        for (const Su of this.sparking) Su.budget = Math.min(Su.budget + sp(Su) * mu * Ru, 2), Su.budget >= 1 && (!Xu || Su.budget > Xu.budget) && (Xu = Su), Su.glassBudget = Math.min(Su.glassBudget + tp(Su) * Ju * Ru, 2), Su.glassBudget >= 1 && (!Vu || Su.glassBudget > Vu.glassBudget) && (Vu = Su);
        if (Xu) Xu.budget--, Nu = Xu.spots[Xu.cursor++ % Xu.spots.length];
        else {
          if (!Vu) return;
          Vu.glassBudget--, Nu = Vu.glass[Math.floor(Math.random() * Vu.glass.length)]
        }
        const [ru, Bu] = Nu, xu = null !== (Eu = this.emitter) && void 0 !== Eu ? Eu : this.create(uu, ru, Bu);
        xu.moveTo(ru, Bu), xu.emit(Up.count)
      }
      dispose() {
        var uu;
        null === (uu = this.emitter) || void 0 === uu || uu.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(uu, Ru, yu) {
        const Eu = Math.ceil(14 * Up.count * Up.life[1]) + Up.count;
        return this.emitter = uu.createParticles(Mp(Up, Eu), {
          pos: Ru,
          half: yu
        }), this.emitter
      }
    }
    const wp = [2, 3.2],
      Zp = 1 / 3,
      hp = 1 / .6,
      Pp = {
        texture: Ap,
        Nr: Math.ceil(18 * wp[1]) + 4,
        minLifeTime: wp[0] / hp,
        maxLifeTime: wp[1] / hp,
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
        blendMode: lJ.g.Standard
      };
    class ip {
      constructor(uu) {
        this.plans = uu, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new Fp, this.frame = 0, this.outline = new Tp(uu)
      }
      onAfterRender(uu, Ru, yu) {
        const Eu = performance.now(),
          Ku = 0 === this.lastMs ? 0 : Math.min(Eu - this.lastMs, 250) / 1e3;
        if (this.lastMs = Eu, this.outline.fade(uu, Eu), this.puff(uu, Ku, yu), this.sparks.emit(uu, Ku, this.frame++), Eu - this.lastCheckMs < 150) return;
        this.lastCheckMs = Eu;
        const Qu = this.plans.all().filter((uu => uu.formed && Yp(uu.box.ctrl, yu) <= 4096));
        this.plumes = Qu.filter((uu => "reactor" === uu.kind && uu.level > 0)).map((uu => ({
          box: uu.box,
          level: uu.level
        }))), this.updateHums(uu, Ru, Qu, yu), this.sparks.update(uu, Qu, yu, Eu), this.chimeFormed(uu, Ru, Qu, Eu)
      }
      dispose(uu) {
        var Ru;
        this.outline.dispose(uu), null === (Ru = this.steam) || void 0 === Ru || Ru.dispose(), this.steam = null, this.sparks.dispose();
        for (const yu of this.hums.values()) yu.stop();
        this.hums.clear()
      }
      chimeFormed(uu, Ru, yu, Eu) {
        const Ku = this.outline.check(uu, yu, Eu);
        Ku && uu.playSound(Ru, "exp_levelup", .6, 1, {
          GK: [Ku.box.ctrl[0] + .5, Ku.box.ctrl[1], Ku.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(uu, Ru, yu) {
        const Eu = this.plumes;
        if (0 === Eu.length || !uu.particlesEnabled()) return void(this.plumeBudget = 0);
        const Ku = Eu.reduce(((uu, Ru) => uu + 3 * Ru.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Ku * Ru, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Qu = this.plumeCursor % (Ku / 3);
        this.plumeCursor++;
        let mu = Eu[0];
        for (const ru of Eu) {
          if (Qu < ru.level) {
            mu = ru;
            break
          }
          Qu -= ru.level
        }
        const {
          lo: Ju,
          hi: Nu
        } = nN(mu.box);
        if (function(uu, Ru, yu) {
            const Eu = Math.max(uu[0] - yu[0], 0, yu[0] - Ru[0]),
              Ku = Math.max(uu[2] - yu[2], 0, yu[2] - Ru[2]);
            return Math.hypot(Eu, yu[1] - Ru[1], Ku)
          }(Ju, Nu, yu) < 6 && Math.random() > Zp) return;
        const Xu = [(Ju[0] + Nu[0]) / 2, Nu[1] + .05, (Ju[2] + Nu[2]) / 2],
          Vu = [(Nu[0] - Ju[0]) / 2 - .5, .05, (Nu[2] - Ju[2]) / 2 - .5];
        this.steam ??= uu.createParticles(Pp, {
          pos: Xu,
          half: Vu
        }), this.steam.moveTo(Xu, Vu), this.steam.emit(1)
      }
      updateHums(uu, Ru, yu, Eu) {
        const Ku = new Map;
        for (const mu of yu) "reactor" === mu.kind && mu.level > 0 && Yp(mu.box.ctrl, Eu) <= 576 && Ku.set(`${Qu=mu.box.ctrl,`${Qu[0]},${Qu[1]},${Qu[2]}`}:${mu.level}`, mu);
        var Qu;
        for (const [mu, Ju] of this.hums) Ku.has(mu) || (Ju.stop(), this.hums.delete(mu));
        for (const [mu, Ju] of Ku) {
          if (this.hums.has(mu)) continue;
          const {
            lo: yu,
            hi: Eu
          } = nN(Ju.box), Ku = [(yu[0] + Eu[0]) / 2, yu[1], (yu[2] + Eu[2]) / 2], Qu = uu.playSound(Ru, "rocketEngineLoop", .08 + .06 * Ju.level, .55, {
            GK: Ku,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Qu && this.hums.set(mu, Qu)
        }
      }
    }

    function Yp(uu, Ru) {
      return (uu[0] - Ru[0]) ** 2 + (uu[1] - Ru[1]) ** 2 + (uu[2] - Ru[2]) ** 2
    }
    class op {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      WH(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Eu = [uu.baf2BombAt[0], uu.baf2BombAt[1], uu.baf2BombAt[2]],
          Ku = uu.baf2BombR;
        if (uu.baf2BombBoom) {
          const uu = Math.hypot(Ru[0] - Eu[0], Ru[1] - Eu[1], Ru[2] - Eu[2]);
          this.Op({
            fuse: null,
            blast: {
              at: Eu,
              r: Ku,
              receivedAt: yu,
              distance: uu,
              flash: uu <= 3 * Ku
            }
          })
        } else this.Op({
          ...this.snapshot,
          fuse: uu.baf2BombMs > 0 ? {
            at: Eu,
            r: Ku,
            endsAt: yu + uu.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      Op(uu) {
        this.snapshot = uu;
        for (const Ru of this.listeners) Ru()
      }
    }
    const qp = (0, Eu.memo)((function(uu) {
      var Ru;
      let {
        store: yu
      } = uu;
      const {
        t: Ku
      } = (0, DK.E)(), [Qu, mu] = (0, Eu.useState)((() => yu.get())), [Ju, Nu] = (0, Eu.useState)((() => performance.now()));
      (0, Eu.useEffect)((() => (mu(yu.get()), yu.subscribe((() => {
        mu(yu.get()), Nu(performance.now())
      })))), [yu]);
      const {
        fuse: Xu,
        blast: Vu
      } = Qu;
      (0, Eu.useEffect)((() => {
        if (!Xu) return;
        const uu = setInterval((() => {
          Nu(performance.now())
        }), 250);
        return () => {
          clearInterval(uu)
        }
      }), [Xu]);
      const [ru, Bu] = (0, Eu.useState)(!1);
      (0, Eu.useEffect)((() => {
        if (null === Vu || void 0 === Vu || !Vu.flash) return;
        Bu(!0);
        const uu = setTimeout((() => {
          Bu(!1)
        }), 2500);
        return () => {
          clearTimeout(uu)
        }
      }), [Vu]);
      const xu = Xu ? function(uu, Ru) {
        return uu.endsAt <= Ru ? 0 : Math.ceil((uu.endsAt - Ru) / 1e3)
      }(Xu, Ju) : 0;
      return (0, eQ.jsxs)(eQ.Fragment, {
        children: [xu > 0 && (0, eQ.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Ku("buildAFactory2Game:bombCountdown", {
            amount: String(xu),
            radius: String(null !== (Ru = null === Xu || void 0 === Xu ? void 0 : Xu.r) && void 0 !== Ru ? Ru : 0)
          })
        }), ru && (0, eQ.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Op(uu) {
      const Ru = Math.min(4, Math.max(1, uu / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * uu / 4)),
        capSpread: Math.min(5 * uu / 8, 24 * Ru),
        capThick: 6 * Ru,
        stemHalfWidth: 3 * Ru,
        puffScale: Ru
      }
    }
    class vp {
      constructor() {
        this.jJ = !1
      }
      hold(uu) {
        uu.getCameraFar() < 1e3 && (uu.setCameraFar(1e3), this.jJ = !0)
      }
      release(uu) {
        this.jJ && (this.jJ = !1, uu.setCameraFar(null))
      }
    }
    const ap = 1 / .6,
      fp = [.2, .1, .2],
      uT = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      RT = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: lJ.g.Standard,
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
      yT = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: lJ.g.Standard,
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
      ET = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: lJ.g.Standard,
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
      KT = {
        texture: Ap,
        Nr: Math.ceil(120) + 4,
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
        blendMode: lJ.g.Add
      };
    class QT {
      constructor(uu) {
        this.store = uu, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new vp, this.timers = []
      }
      onAfterRender(uu, Ru) {
        const yu = performance.now(),
          Eu = 0 === this.lastMs ? 0 : Math.min(yu - this.lastMs, 250) / 1e3;
        this.lastMs = yu;
        const {
          fuse: Ku,
          blast: Qu
        } = this.store.get();
        null !== Qu && Qu !== this.shownBlast && (this.shownBlast = Qu, this.startBlast(uu, Ru, Qu, yu));
        const mu = uu.particlesEnabled();
        null !== Ku && Ku.endsAt > yu && mu ? this.emitBeacon(uu, Ku, Eu, yu) : this.beaconBudget = 0, null !== this.cloud && (yu - this.cloud.startMs > 33e3 ? this.disposeCloud(uu) : (this.far.hold(uu), mu && this.emitCloud(uu, Eu, yu)))
      }
      dispose(uu) {
        var Ru;
        null === (Ru = this.beacon) || void 0 === Ru || Ru.dispose(), this.beacon = null, this.disposeCloud(uu);
        for (const yu of this.timers) clearTimeout(yu);
        this.timers.length = 0
      }
      emitBeacon(uu, Ru, yu, Eu) {
        const Ku = Ru.endsAt - Eu < 5e3 ? 350 : 1e3,
          Qu = .5 + .5 * Math.sin(2 * Math.PI * Eu / Ku);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Qu * yu, 4), this.beaconBudget < 1) return;
        const mu = Math.floor(this.beaconBudget);
        this.beaconBudget -= mu;
        const [Ju, Nu, Xu] = Ru.at, Vu = [Ju + .5, Nu + 1.1, Xu + .5];
        this.beacon ??= uu.createParticles(KT, {
          pos: Vu,
          half: fp
        }), this.beacon.moveTo(Vu), this.beacon.emit(mu)
      }
      startBlast(uu, Ru, yu, Eu) {
        var Ku;
        null === (Ku = this.beacon) || void 0 === Ku || Ku.dispose(), this.beacon = null, this.disposeCloud(uu);
        const Qu = (0, sJ.isMobile)() ? .5 : 1;
        this.streams = [RT, yT, ET].map((uu => {
          const Ru = Math.round(uu.count * Qu);
          return {
            spec: uu,
            particles: null,
            rate: Ru / ((uu.toMs - uu.fromMs) / 1e3),
            budget: 0,
            left: Ru
          }
        })), this.cloud = {
          blast: yu,
          startMs: Eu
        };
        const mu = Math.max(.25, 1 - yu.distance / (6 * yu.r)),
          Ju = yu.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [yu, Eu, Ku] of uT) JT(uu, Ru, yu, mu * Eu, Ku)
        }), Ju))
      }
      emitCloud(uu, Ru, yu) {
        const {
          blast: Eu,
          startMs: Ku
        } = this.cloud, Qu = yu - Ku, [mu, Ju, Nu] = Eu.at, Xu = Op(Eu.r);
        for (const Vu of this.streams) {
          const {
            spec: yu
          } = Vu;
          if (Vu.left <= 0 || Qu < yu.fromMs) continue;
          Vu.budget += Vu.rate * Ru;
          const Ku = Math.min(Math.floor(Vu.budget), Vu.left);
          if (Ku < 1) continue;
          Vu.budget -= Ku, Vu.left -= Ku;
          const ru = Vu.particles ??= this.createStream(uu, yu, Eu);
          if (yu === RT) {
            const uu = Xu.stemHalfWidth;
            ru.moveTo([mu, Ju + 1, Nu], [uu, 1, uu])
          } else if (yu === yT) {
            const uu = Xu.capSpread * Math.min(1, (Qu - yu.fromMs) / 3e3),
              Ru = Math.sqrt(Math.random()),
              Eu = 2 * Math.random() * Math.PI,
              Ku = Math.cos(Eu) * Ru,
              Vu = Math.sin(Eu) * Ru,
              Bu = mu + Ku * uu,
              xu = Nu + Vu * uu,
              Su = Xu.capThick,
              pu = Ju + Xu.capHeight + Su * (1 - Ru * Ru) * 2;
            ru.setDirections([.7 * Ku, .05, .7 * Vu], [Ku, .2, Vu]), ru.moveTo([Bu, pu, xu], [Su, Su, Su])
          } else {
            this.ringAngle += 2.39996;
            const uu = Math.cos(this.ringAngle),
              Ru = Math.sin(this.ringAngle);
            ru.setDirections([uu, .05, Ru], [uu, .1, Ru]), ru.moveTo([mu + 2 * uu, Ju + .5, Nu + 2 * Ru], [0, .5, 0])
          }
          ru.emit(Ku)
        }
      }
      createStream(uu, Ru, yu) {
        const {
          r: Eu
        } = yu, Ku = Math.max(Ru.life[0], Eu / 25), Qu = Ru === ET ? [.9 * Ku, Ku] : Ru.life, mu = Op(Eu), Ju = Ru === ET ? 1 : mu.puffScale, Nu = {
          texture: Ap,
          Nr: Ru.count + 4,
          minLifeTime: Qu[0] / ap,
          maxLifeTime: Qu[1] / ap,
          minSize: Ru.size[0] * Ju,
          maxSize: Ru.size[1] * Ju,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, Ru.gravity * ap * ap, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: Ru.from[0],
            maxColor: Ru.from[1]
          }, {
            timeFraction: .6,
            minColor: mT(Ru.from[0], Ru.to[0]),
            maxColor: mT(Ru.from[1], Ru.to[1])
          }, {
            timeFraction: 1,
            minColor: Ru.to[0],
            maxColor: Ru.to[1]
          }],
          blendMode: Ru.blend
        };
        if (Ru === RT) {
          const uu = mu.capHeight / ((Qu[0] + Qu[1]) / 2);
          Nu.minEmitPower = .9 * uu * ap, Nu.maxEmitPower = 1.05 * uu * ap, Nu.dir1 = [-.1, 1, -.1], Nu.dir2 = [.1, 1, .1]
        } else Ru === yT ? (Nu.minEmitPower = 1.2, Nu.maxEmitPower = 2, Nu.dir1 = [-1, .05, -1], Nu.dir2 = [1, .2, 1]) : (Nu.minEmitPower = 39.583333333333336, Nu.maxEmitPower = 41.66666666666667, Nu.dir1 = [1, 0, 0], Nu.dir2 = [1, 0, 0]);
        return uu.createParticles(Nu, {
          pos: yu.at
        })
      }
      disposeCloud(uu) {
        for (const yu of this.streams) {
          var Ru;
          null === (Ru = yu.particles) || void 0 === Ru || Ru.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(uu)
      }
    }

    function mT(uu, Ru) {
      return [(uu[0] + Ru[0]) / 2, (uu[1] + Ru[1]) / 2, (uu[2] + Ru[2]) / 2, .75 * uu[3]]
    }

    function JT(uu, Ru, yu, Eu, Ku) {
      try {
        uu.playSound(Ru, yu, Eu, Ku)
      } catch (Qu) {
        console.error(Qu)
      }
    }
    const NT = {
        Nr: 720,
        perS: 100
      },
      XT = {
        Nr: 320,
        perS: 44
      };
    class VT {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(uu, Ru) {
        this.zone = {
          centre: [...uu.centre],
          r: uu.r,
          band: uu.band ? [uu.band[0], uu.band[1]] : void 0
        }, this.endsAt = Ru
      }
      stop() {
        this.zone = null
      }
      WH(uu, Ru) {
        const {
          baf2FalloutMs: yu,
          baf2FalloutAt: Eu,
          baf2FalloutR: Ku,
          baf2FalloutY: Qu
        } = uu;
        yu > 0 && Eu && void 0 !== Ku ? this.start({
          centre: Eu,
          r: Ku,
          band: Qu
        }, Ru + yu) : this.stop()
      }
      perS(uu, Ru, yu) {
        const Eu = this.zone;
        if (!Eu) return 0;
        const Ku = this.endsAt - uu;
        return Ku <= 0 ? (this.zone = null, 0) : Eu.band && (Ru[1] < Eu.band[0] || Ru[1] > Eu.band[1]) || Math.hypot(Ru[0] - Eu.centre[0], Ru[2] - Eu.centre[2]) > Eu.r ? 0 : yu.perS * Math.min(1, Ku / 5e3)
      }
    }
    const rT = [5, 7],
      BT = [24, 8, 24],
      xT = .5,
      ST = 1 / .6,
      pT = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class TT {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, sJ.isMobile)();
        this.state = new VT, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(uu) {
          return uu ? XT : NT
        }(uu)
      }
      startFallout(uu, Ru) {
        this.state.start(uu, Ru)
      }
      stopFallout() {
        this.state.stop()
      }
      WH(uu) {
        this.state.WH(uu, performance.now())
      }
      onAfterRender(uu, Ru) {
        var yu;
        const Eu = performance.now(),
          Ku = 0 === this.lastMs ? 0 : Math.min(Eu - this.lastMs, 250) / 1e3;
        this.lastMs = Eu;
        const Qu = this.state.perS(Eu, Ru, this.tier);
        if (Qu <= 0 || !uu.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Qu * Ku, Qu / 4);
        const mu = Math.floor(this.budget);
        if (mu < 1) return;
        this.budget -= mu;
        const Ju = this.at;
        Ju[0] = Ru[0], Ju[1] = Ru[1] + 12, Ju[2] = Ru[2];
        const Nu = null !== (yu = this.systems) && void 0 !== yu ? yu : this.create(uu, Ju),
          Xu = this.amounts;
        Xu[0] = 0, Xu[1] = 0;
        for (let Vu = 0; Vu < mu; Vu++) Xu[Math.random() < .3 ? 1 : 0]++;
        for (let Vu = 0; Vu < Nu.length; Vu++) Xu[Vu] > 0 && (Nu[Vu].moveTo(Ju, BT), Nu[Vu].emit(Xu[Vu]))
      }
      dispose() {
        for (const Ru of null !== (uu = this.systems) && void 0 !== uu ? uu : []) {
          var uu;
          Ru.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(uu, Ru) {
        return this.systems = pT.map((yu => {
          let {
            rgba: [Eu, Ku, Qu, mu],
            share: Ju
          } = yu;
          const Nu = {
            texture: "square_particle",
            Nr: Math.ceil(this.tier.Nr * Ju),
            minLifeTime: rT[0] / ST,
            maxLifeTime: rT[1] / ST,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [xT, -1, xT],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Eu, Ku, Qu, 0]
            }, {
              timeFraction: .15,
              minColor: [Eu, Ku, Qu, mu]
            }, {
              timeFraction: .8,
              minColor: [Eu, Ku, Qu, mu]
            }, {
              timeFraction: 1,
              minColor: [Eu, Ku, Qu, 0]
            }],
            blendMode: lJ.g.Standard
          };
          return uu.createParticles(Nu, {
            pos: Ru,
            half: BT
          })
        })), this.systems
      }
    }
    const WT = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function jT(uu) {
      const Ru = /\|rot(\d)/.exec(uu);
      return WT[Ru ? Number(Ru[1]) : 1]
    }
    var HT = yu(602),
      dT = yu(38241);
    const bT = new Set(HT.k);

    function CT(uu) {
      if (-2 !== uu.count) return null;
      const Ru = hu(uu.item);
      return null !== Ru && bT.has(Ru) ? Ru : null
    }

    function kT(uu) {
      const {
        width: Ru,
        height: yu
      } = (0, dT.c)(uu).hitBoxDimensions;
      return .55 / Math.max(Ru, yu)
    }

    function eT(uu, Ru, yu) {
      if (!yu) return !1;
      const Eu = uu[0] + .5 - Ru[0],
        Ku = uu[1] + .5 - Ru[1],
        Qu = uu[2] + .5 - Ru[2];
      return Eu * Eu + Ku * Ku + Qu * Qu <= 576
    }

    function AT(uu, Ru) {
      return Math.atan2(uu[0], uu[2]) + Math.PI + Ru
    }

    function DT(uu, Ru) {
      const yu = 2 * Math.PI;
      return (uu + yu * Ru / 1e4) % yu
    }
    class MT {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = uu, this.now = Ru, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = uu.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(uu, Ru) {
        if (0 === this.farms.size) return;
        const yu = this.now(),
          Eu = Number.isNaN(this.frameMs) ? 0 : Math.min(yu - this.frameMs, 100);
        this.frameMs = yu, yu - this.checkedMs >= 1e3 && (this.checkedMs = yu, this.check(uu, Ru));
        for (const Ku of this.farms.values()) Ku.shown && Ku.running && null !== Ku.model && Eu > 0 && (Ku.spin = DT(Ku.spin, Eu), Ku.model.setPose(Ku.feet, AT(Ku.front, Ku.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const uu of this.farms.values()) this.drop(uu);
        this.farms.clear()
      }
      sync() {
        const uu = new Set;
        for (const Ru of this.labels.list()) {
          const yu = CT(Ru);
          if (null === yu) continue;
          uu.add(Ru.key);
          const Eu = this.farms.get(Ru.key);
          if ((null === Eu || void 0 === Eu ? void 0 : Eu.mob) === yu) continue;
          Eu && this.drop(Eu);
          const [Ku, Qu, mu] = Ru.pos;
          this.farms.set(Ru.key, {
            pos: Ru.pos,
            feet: [Ku + .5, Qu + 1, mu + .5],
            mob: yu,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [Ru, yu] of this.farms) uu.has(Ru) || (this.drop(yu), this.farms.delete(Ru));
        this.checkedMs = -1 / 0
      }
      check(uu, Ru) {
        for (const yu of this.farms.values()) {
          const [Eu, Ku, Qu] = yu.pos, mu = GS(uu, yu.pos);
          null !== mu && Uy(mu) === lu && eT(yu.pos, Ru, "Air" === GS(uu, [Eu, Ku + 1, Qu])) ? (yu.running = mu.endsWith("|Running"), yu.front = jT(mu), null === yu.model && (yu.model = uu.createMobModel(yu.mob, kT(yu.mob)), null === yu.model) || (yu.model.setPose(yu.feet, AT(yu.front, yu.spin)), yu.shown || (yu.model.setVisible(!0), yu.shown = !0))) : (yu.shown && null !== yu.model && yu.model.setVisible(!1), yu.shown = !1)
        }
      }
      drop(uu) {
        var Ru;
        null === (Ru = uu.model) || void 0 === Ru || Ru.dispose(), uu.model = null, uu.shown = !1
      }
    }
    class IT {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(uu) {
        var Ru;
        this.island = uu.baf2ColIsland, this.islandSite = (Ru = uu.baf2ColSite) && 8 === Ru.length ? {
          spawnXZ: [Ru[0], Ru[1]],
          coreXZ: [Ru[2], Ru[3]],
          minXZ: [Ru[4], Ru[5]],
          maxXZ: [Ru[6], Ru[7]]
        } : null, this.views = uu.baf2ColList.map((uu => ({
          entry: mK(uu)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(uu) {
        this.status = uu, this.emit()
      }
      onOpen(uu) {
        this.openHeld = uu
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
        return this.views.map((uu => uu.entry))
      }
      entryAtRoot(uu) {
        var Ru;
        return null === (Ru = this.views.find((Ru => {
          let {
            entry: yu
          } = Ru;
          return yu.focus[0] === uu[0] && yu.focus[1] === uu[1] + 1 && yu.focus[2] === uu[2]
        }))) || void 0 === Ru ? void 0 : Ru.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(uu, Ru) {
        return zN(this.entries(), uu, Ru)
      }
      lookSource() {
        return {
          handles: uu => BE(uu) >= 0 || xE(uu),
          line: (uu, Ru) => this.lookLine(uu, Ru),
          version: () => this.beamsVersion
        }
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const uu of this.listeners) uu()
      }
    }
    const GT = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((uu => uu / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((uu => [uu, uu + 1, uu + 2, uu, uu + 2, uu + 3]))
    };

    function UT(uu, Ru, yu, Eu, Ku, Qu, mu) {
      let Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Nu = Math.cos(Ju),
        Xu = Math.sin(Ju),
        Vu = uu.positions.length / 3,
        {
          positions: ru,
          indices: Bu
        } = GT;
      for (let xu = 0; xu < ru.length; xu += 3) {
        const Ju = ru[xu] * Ku,
          Vu = ru[xu + 2] * mu;
        uu.positions.push(Ru + Ju * Nu + Vu * Xu, yu + ru[xu + 1] * Qu, Eu - Ju * Xu + Vu * Nu)
      }
      for (const xu of Bu) uu.indices.push(Vu + xu)
    }

    function nT(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return Ru < 1 ? {
        rgb: uu,
        alpha: Ru
      } : {
        rgb: uu,
        alpha: 1,
        opaque: !0
      }
    }
    class sT {
      constructor(uu, Ru) {
        this.style = uu, this.perSource = Ru, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(uu) {
        this.sources = uu, 0 === uu.length && (this.budget = 0)
      }
      sr(uu, Ru, yu) {
        const Eu = this.sources.length;
        if (0 !== Eu) {
          var Ku, Qu;
          this.budget = Math.min(this.budget + (Ku = Eu, Qu = this.perSource, Math.min(Ku * Qu, uX) * Ru), 2);
          for (let Ru = 0; Ru < Eu && this.budget >= 1; Ru++) {
            const Ru = this.sources[this.cursor % Eu];
            this.cursor = (this.cursor + 1) % Eu;
            if (!(Math.max(Math.abs(Ru.x - yu[0]), Math.abs(Ru.y - yu[1]), Math.abs(Ru.z - yu[2])) > 32)) return this.puff(uu, Ru), void this.budget--
          }
        }
      }
      dispose() {
        var uu;
        null === (uu = this.particles) || void 0 === uu || uu.dispose(), this.particles = null, this.sources = []
      }
      puff(uu, Ru) {
        let {
          x: yu,
          y: Eu,
          z: Ku,
          h: Qu,
          faces: mu
        } = Ru;
        const Ju = function(uu, Ru, yu, Eu, Ku) {
            const [Qu, mu, Ju] = Ku[Math.floor(Math.random() * Ku.length)], Nu = .04, Xu = (uu, Ru, yu) => uu > 0 ? Ru + yu + Nu : uu < 0 ? Ru - Nu : Ru + .1, Vu = (uu, Ru, yu) => uu > 0 ? Ru + yu + Nu : uu < 0 ? Ru - Nu : Ru + yu - .1, ru = [Xu(Qu, uu, 1), Xu(mu, Ru, Eu), Xu(Ju, yu, 1)], Bu = [Vu(Qu, uu, 1), Vu(mu, Ru, Eu), Vu(Ju, yu, 1)];
            return {
              pos: [(ru[0] + Bu[0]) / 2, (ru[1] + Bu[1]) / 2, (ru[2] + Bu[2]) / 2],
              half: [(Bu[0] - ru[0]) / 2, (Bu[1] - ru[1]) / 2, (Bu[2] - ru[2]) / 2],
              out: [Qu, mu, Ju]
            }
          }(yu, Eu, Ku, Qu, mu),
          {
            style: Nu
          } = this,
          Xu = this.particles ??= uu.createParticles(Mp(Nu, Math.ceil(Nu.count * uX * Nu.life[1]) + 4), Ju);
        Xu.moveTo(Ju.pos, Ju.half);
        const [Vu, ru, Bu] = Ju.out, xu = Nu.spread;
        Xu.setDirections([Vu - xu, .6 + ru, Bu - xu], [Vu + xu, 1 + ru, Bu + xu]), Xu.emit(Nu.count)
      }
    }
    const tT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class lT {
      constructor() {
        this.green = new sT(yX.green, aN), this.pink = new sT(yX.pink, fN), this.colliders = [], this.lastMs = 0
      }
      setSources(uu) {
        this.colliders = uu;
        const Ru = [],
          yu = [];
        for (const Eu of uu) {
          const [uu, Ku, Qu] = Eu.focus;
          Ru.push({
            x: uu,
            y: Ku - 1,
            z: Qu,
            h: 2,
            faces: tT
          });
          for (let Ru = 0; Ru < 4; Ru++) {
            if (!Eu.live[Ru]) continue;
            const [uu, Ku, Qu] = TE(Eu.focus, Ru, mE.LASER_D), [mu, , Ju] = pE[Ru], Nu = tT.filter((uu => uu[0] !== mu || uu[2] !== Ju || 0 !== uu[1]));
            yu.push({
              x: uu,
              y: Ku,
              z: Qu,
              h: 1,
              faces: Nu
            })
          }
        }
        this.green.setSources(Ru), this.pink.setSources(yu)
      }
      onAfterRender(uu) {
        const Ru = performance.now(),
          yu = 0 === this.lastMs ? 0 : Math.min(Ru - this.lastMs, 250) / 1e3;
        if (this.lastMs = Ru, 0 === this.colliders.length || !uu.particlesEnabled()) return;
        const Eu = uu.getCameraPosition();
        this.green.sr(uu, yu, Eu), this.pink.sr(uu, yu, Eu)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const gT = 1.04,
      cT = nT([1, 120 / 255, 220 / 255]),
      LT = nT([1, .25, .25], .35);
    class zT {
      constructor(uu) {
        this.store = uu, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new lT
      }
      onAfterRender(uu) {
        this.store.version() !== this.builtVersion && this.rebuild(uu);
        const Ru = performance.now();
        for (const yu of this.beams) {
          const Eu = 1 + .35 * Math.sin(Ru / 700 * Math.PI * 2 + yu.phase);
          uu.setGameMesh(yu.mesh, {
            scale: [yu.alongX ? 1 : Eu, Eu, yu.alongX ? Eu : 1]
          })
        }
        this.glow.onAfterRender(uu)
      }
      dispose(uu) {
        this.clear(uu), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(uu) {
        this.clear(uu), this.builtVersion = this.store.version();
        const Ru = [];
        for (const {
            entry: yu
          }
          of this.store.colliders()) yu.on && yu.live.some(Boolean) && (this.addBeams(uu, yu), Ru.push(yu)), yu.blockers.length > 0 && this.addMarkers(uu, yu);
        this.glow.setSources(Ru)
      }
      addBeams(uu, Ru) {
        const [yu, Eu, Ku] = Ru.focus, Qu = vN - .25, mu = (.25 + vN) / 2;
        for (let Ju = 0; Ju < 4; Ju++) {
          if (!Ru.live[Ju]) continue;
          const [Nu, , Xu] = pE[Ju], Vu = 0 !== Nu, ru = {
            positions: [],
            indices: []
          };
          UT(ru, 0, 0, 0, Vu ? Qu : .2, .2, Vu ? .2 : Qu);
          const Bu = [yu + .5 + Nu * mu, Eu + .5, Ku + .5 + Xu * mu],
            xu = uu.createGameMesh(ru, cT, Bu);
          this.meshes.push(xu), this.beams.push({
            mesh: xu,
            alongX: Vu,
            phase: Ju * Math.PI / 2
          })
        }
      }
      addMarkers(uu, Ru) {
        const yu = Ru.blockers[0],
          Eu = {
            positions: [],
            indices: []
          };
        for (const [Ku, Qu, mu] of Ru.blockers) UT(Eu, Ku - yu[0] + .5, Qu - yu[1] + .5, mu - yu[2] + .5, gT, gT, gT);
        this.meshes.push(uu.createGameMesh(Eu, LT, yu))
      }
      clear(uu) {
        for (const Ru of this.meshes) uu.disposeGameMesh(Ru);
        this.meshes = [], this.beams = []
      }
    }
    const FT = [.56, .83, 1],
      wT = [1, .73, .08],
      ZT = [1, .25, .25],
      hT = [.85, .85, .85],
      PT = [.3, .45, .6];

    function iT(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const mu = Ku / 2,
        Ju = Ku + Qu;
      for (const Nu of [-mu, mu])
        for (const Ku of [-mu, mu]) UT(uu, Ru, yu + Nu, Eu + Ku, Ju, Qu, Qu), UT(uu, Ru + Nu, yu, Eu + Ku, Qu, Ju, Qu), UT(uu, Ru + Nu, yu + Ku, Eu, Qu, Qu, Ju)
    }

    function YT(uu) {
      return Ru => uu.isBlockInLoadedChunk(Ru[0], Ru[1], Ru[2]) && 0 === uu.getBlockId(Ru[0], Ru[1], Ru[2])
    }

    function oT(uu) {
      return uu.map((uu => {
        let {
          free: Ru,
          blocked: yu,
          gaps: Eu,
          supports: Ku
        } = uu;
        return `${Ru.join(";")}|${yu.join(";")}|${Eu.join(";")}|${Ku.join(";")}`
      })).join("/")
    }

    function qT(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Qu = Ru[0],
        mu = {
          positions: [],
          indices: []
        };
      for (const [Ju, Nu, Xu] of Ru) iT(mu, Ju - Qu[0] + .5, Nu - Qu[1] + .5, Xu - Qu[2] + .5, Eu, Ku);
      return uu.createGameMesh(mu, yu, Qu)
    }
    class OT {
      constructor(uu) {
        this.store = uu, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(uu, Ru, yu) {
        var Eu;
        const Ku = null === (Eu = uu.Xyu(Ru)) || void 0 === Eu ? void 0 : Eu.name;
        if (Ku !== NE && Ku !== JE) return void("" !== this.shownKey && this.show(uu, "", []));
        const Qu = performance.now();
        if (Qu - this.lastCheckMs >= 200 && (this.lastCheckMs = Qu, Ku === NE ? this.check(uu, yu) : this.preview(uu, yu)), this.pulses.length > 0) {
          const Ru = 1 + .12 * Math.sin(Qu / 1e3 * 1.25 * Math.PI * 2),
            yu = [Ru, Ru, Ru];
          for (const Eu of this.pulses) uu.setGameMesh(Eu, {
            scale: yu
          })
        }
      }
      dispose(uu) {
        this.clear(uu), this.shownKey = ""
      }
      check(uu, Ru) {
        const yu = YT(uu),
          Eu = [];
        for (const {
            entry: Qu
          }
          of this.store.colliders()) {
          Qu.focus.every(((uu, yu) => Math.abs(uu + .5 - Ru[yu]) <= mE.GHOST_REACH)) && Eu.push(ON(Qu, yu))
        }
        const Ku = oT(Eu);
        Ku !== this.shownKey && this.show(uu, Ku, Eu)
      }
      preview(uu, Ru) {
        const yu = uu.getTargetedBlock(),
          Eu = yu ? [yu.RT[0], yu.RT[1], yu.RT[2]] : null,
          Ku = null !== Eu && Eu.every(((uu, yu) => Math.abs(uu + .5 - Ru[yu]) <= 8)),
          Qu = this.store.site(),
          mu = Ku && Qu ? function(uu, Ru, yu) {
            const Eu = SE(uu);
            if (!Eu.every(Ru)) return null;
            const Ku = HE(uu, yu);
            return {
              column: Eu,
              spots: ON({
                focus: Eu[1],
                lasers: [!1, !1, !1, !1],
                open: Ku,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, Ru),
              fits: Ku.filter(Boolean).length >= mE.MIN_SPOTS
            }
          }(Eu, YT(uu), Qu) : null,
          Ju = mu ? [mu.spots] : [],
          Nu = mu ? `preview ${Eu.join(",")}|${mu.fits}|${oT(Ju)}` : "";
        var Xu, Vu;
        Nu !== this.shownKey && this.show(uu, Nu, Ju, null !== (Xu = null === mu || void 0 === mu ? void 0 : mu.column) && void 0 !== Xu ? Xu : [], null === (Vu = null === mu || void 0 === mu ? void 0 : mu.fits) || void 0 === Vu || Vu)
      }
      show(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Ku = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(uu), this.shownKey = Ru, Eu.length > 0 && this.meshes.push(qT(uu, Eu, nT(Ku ? hT : ZT)));
        for (const {
            free: Qu,
            blocked: mu,
            gaps: Ju,
            supports: Nu
          }
          of yu) {
          for (const [Ru, yu, Eu] of Qu) {
            const Ku = {
              positions: [],
              indices: []
            };
            iT(Ku, 0, 0, 0);
            const Qu = uu.createGameMesh(Ku, nT(FT), [Ru + .5, yu + .5, Eu + .5]);
            this.meshes.push(Qu), this.pulses.push(Qu)
          }
          mu.length > 0 && this.meshes.push(qT(uu, mu, nT(wT))), Ju.length > 0 && this.meshes.push(qT(uu, Ju, nT(ZT), 1.06, .07)), Nu.length > 0 && this.meshes.push(qT(uu, Nu, nT(PT)))
        }
      }
      clear(uu) {
        for (const Ru of this.meshes) uu.disposeGameMesh(Ru);
        this.meshes = [], this.pulses = []
      }
    }
    class vT {
      constructor() {
        this.stored = new Map, this.jJ = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(uu) {
        if (!uu.baf2TermOpen) return !1;
        uu.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [Ru, yu] of uu.baf2TermItems) yu > 0 ? this.stored.set(Ru, yu) : this.stored.delete(Ru);
        if (uu.baf2TermHeld && (this.jJ = new Map(uu.baf2TermHeld)), this.pending = this.pending.filter((Ru => Ru.seq > uu.baf2TermAcked)), this.silos = uu.baf2TermSilos, this.readOnly = uu.baf2TermReadOnly, this.pocket = !0 === uu.baf2TermPocket, uu.baf2TermReset) this.resort();
        else {
          const uu = new Set(this.order);
          for (const Ru of this.stored.keys()) uu.has(Ru) || this.order.push(Ru)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((uu, Ru) => this.amount(Ru) - this.amount(uu) || uu.localeCompare(Ru))), this.changed()
      }
      take(uu, Ru) {
        const yu = JR(uu, this.amount(Ru));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Ru,
          amount: yu,
          put: !1
        }), this.recents = [Ru, ...this.recents.filter((uu => uu !== Ru))].slice(0, 6), this.changed(), yR(this.seq, uu, Ru)
      }
      put(uu, Ru) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Ru,
          amount: JR(uu, this.heldAmount(Ru)),
          put: !0
        }), this.changed(), ER(this.seq, uu, Ru)
      }
      putAll() {
        this.seq++;
        for (const uu of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: uu,
          amount: this.heldAmount(uu),
          put: !0
        });
        return this.changed(), KR(this.seq)
      }
      amount(uu) {
        var Ru;
        let yu = null !== (Ru = this.stored.get(uu)) && void 0 !== Ru ? Ru : 0;
        for (const Eu of this.pending) Eu.item === uu && (yu += Eu.put ? Eu.amount : -Eu.amount);
        return Math.max(0, yu)
      }
      heldAmount(uu) {
        var Ru;
        let yu = null !== (Ru = this.jJ.get(uu)) && void 0 !== Ru ? Ru : 0;
        for (const Eu of this.pending) Eu.put && Eu.item === uu && (yu -= Eu.amount);
        return Math.max(0, yu)
      }
      heldItems() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((Ru => Ru === uu || this.heldAmount(Ru) > 0))
      }
      items() {
        return this.order.filter((uu => this.amount(uu) > 0))
      }
      recent() {
        return this.recents.filter((uu => this.amount(uu) > 0))
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
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      changed() {
        this.version++;
        for (const uu of this.listeners) uu()
      }
    }
    var aT = yu(38189);
    const fT = {
      isBlock: uu => void 0 !== Uu.j[uu],
      harvestType: uu => {
        var Ru;
        return null === (Ru = Uu.j[uu]) || void 0 === Ru ? void 0 : Ru.harvestType
      },
      harvestLevel: uu => {
        var Ru;
        return null === (Ru = Uu.j[uu]) || void 0 === Ru ? void 0 : Ru.harvestLevel
      },
      dropsNothing: uu => {
        var Ru;
        return null === (null === (Ru = Uu.j[uu]) || void 0 === Ru ? void 0 : Ru.drops)
      },
      displayName: uu => {
        var Ru;
        return null === (Ru = fm.n[uu]) || void 0 === Ru ? void 0 : Ru.displayName
      },
      description: uu => {
        var Ru;
        return null === (Ru = fm.n[uu]) || void 0 === Ru ? void 0 : Ru.description
      },
      harvests: uu => {
        var Ru;
        return null === (Ru = fm.n[uu]) || void 0 === Ru ? void 0 : Ru.harvests
      },
      level: uu => {
        var Ru;
        return null === (Ru = fm.n[uu]) || void 0 === Ru ? void 0 : Ru.level
      }
    };

    function uW(uu, Ru, yu) {
      return function(uu, Ru, yu, Eu) {
        var Ku, Qu;
        const mu = Ru.split("|")[0],
          Ju = uu.isBlock(Ru) ? Ru : uu.isBlock(mu) ? mu : null;
        if (null === Ju || "rock" !== uu.harvestType(Ju) || uu.dropsNothing(Ju) && !LE.has(mu)) return null;
        const Nu = yu && "rock" === uu.harvests(yu) ? null !== (Ku = uu.level(yu)) && void 0 !== Ku ? Ku : 0 : null,
          Xu = null !== (Qu = null !== Eu && void 0 !== Eu ? Eu : uu.harvestLevel(Ju)) && void 0 !== Qu ? Qu : 0;
        return (null !== Nu ? Xu <= Nu : 0 === uu.harvestLevel(Ju)) ? null : DE(uu, Xu)
      }(fT, uu, Ru, yu)
    }

    function RW(uu, Ru) {
      return function(uu, Ru, yu) {
        if (Ru === AE[0]) return [(0, tu.be)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, tu.L.whiteUiText)];
        const Eu = yu.split("|")[0],
          Ku = uu.isBlock(Eu) ? uu.displayName(Eu) : void 0,
          Qu = "string" === typeof Ku ? Ku : Ku && "translationKey" in Ku ? `$t(${Ku.translationKey})` : Eu;
        return [(0, tu.be)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Qu
          }
        }, tu.L.whiteUiText), (0, tu.be)({
          translationKey: `item:${(0,tu.xe)(Ru)}`
        }, tu.L.yellowUiText)]
      }(fT, uu, Ru)
    }
    const yW = "buildAFactory2Game:";
    const EW = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function KW(uu) {
      return uu.endsWith(" Ore")
    }
    const QW = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      mW = [],
      JW = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: QW,
        plan: null,
        atomic: mW
      },
      NW = "buildAFactory2Game:",
      XW = new Set(["Splitter", "Sorting Gate"]),
      VW = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class rW {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = uu, this.planAt = Ru, this.tierOf = yu, this.yV = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.jJ = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = JW, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(uu, Ru, yu) {
        var Eu, Ku, Qu;
        let mu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ju = null !== (Eu = null === (Ku = uu.Xyu(Ru)) || void 0 === Ku ? void 0 : Ku.name) && void 0 !== Eu ? Eu : null,
          Nu = uu.isPlayerCrouching(Ru),
          Xu = 0 === yu ? null : this.resolve(uu, yu),
          Vu = null !== Xu && null !== mu && XW.has(Xu.rootName) && function(uu, Ru) {
            return VW.some((yu => {
              let [Eu, Ku] = yu;
              const Qu = uu.getBlockId(Ru[0] + Eu, Ru[1], Ru[2] + Ku);
              return 0 !== Qu && "Express Belt" === uu.getMetaInfo(Qu).rootName
            }))
          }(uu, mu),
          ru = this.updatePlan(0 === yu ? null : mu),
          Bu = this.tierOf(),
          xu = null === mu ? null : (0, aT.e)(yu),
          Su = null !== xu && null !== mu && (0, aT.i)(function(uu) {
            return (Ru, yu, Eu) => uu.getBlockId(Ru, yu, Eu)
          }(uu), mu[0], mu[1], mu[2], xu),
          pu = this.readAfloat(uu, yu, mu);
        if (yu === this.yV && Su === this.missesMaker && pu === this.afloat && Ju === this.jJ && Nu === this.crouching && Vu === this.express && Bu === this.tier && !ru && (!this.targetsLive || !this.liveMoved(mu))) return;
        this.yV = yu, this.missesMaker = Su, this.afloat = pu, this.jJ = Ju, this.crouching = Nu, this.express = Vu;
        const Tu = Vu && Xu ? function(uu) {
          if (null === uu.info) return null;
          return uu.express ??= {
            ...uu.info,
            detail: `${NW}lookKeepsUpExpress`,
            detailItem: null
          }, uu.express
        }(Xu) : null !== Xu && Su && null !== xu ? this.besideMaker(Xu, yu, xu) : null !== Xu && pu ? this.hanging(Xu) : null !== (Qu = null === Xu || void 0 === Xu ? void 0 : Xu.info) && void 0 !== Qu ? Qu : null;
        this.tier = Bu;
        const Wu = Xu && Tu ? function(uu, Ru) {
          var yu, Eu;
          const Ku = Uu.j[uu];
          if (!uu.endsWith(" Ore") || "rock" !== (null === Ku || void 0 === Ku ? void 0 : Ku.harvestType) || 0 === Ku.harvestLevel) return null;
          const Qu = null !== (yu = Ku.harvestLevel) && void 0 !== yu ? yu : 0,
            mu = Ru ? fm.n[Ru] : void 0;
          if ("rock" === (null === mu || void 0 === mu ? void 0 : mu.harvests) && (null !== (Eu = mu.level) && void 0 !== Eu ? Eu : 0) >= Qu) return null;
          const Ju = (Nu = Qu, DE(fT, Nu));
          var Nu;
          if (null === Ju) return null;
          const Xu = yQ(Ju),
            Vu = /^[AEIOU]/.test(Ju) ? "An" : "";
          if ("rock" === (null === mu || void 0 === mu ? void 0 : mu.harvests) && Ru) return {
            key: `${NW}lookToolTooWeak${Vu}`,
            jJ: yQ(Ru),
            needed: Xu
          };
          return {
            key: Ju === AE[0] ? `${NW}lookNeedAnyPickaxe` : `${NW}lookNeedPickaxe${Vu}`,
            jJ: null,
            needed: Xu
          }
        }(Xu.rootName, Ju) : null;
        this.targetsLive = !0 === (null === Xu || void 0 === Xu ? void 0 : Xu.live) && null !== mu;
        let ju = null;
        this.targetsLive && Xu && mu && this.live && (this.livePos[0] = mu[0], this.livePos[1] = mu[1], this.livePos[2] = mu[2], this.liveVersion = this.live.version(), ju = this.live.line(Xu.rootName, mu));
        const Hu = null === Tu ? QW : function(uu, Ru, yu) {
            const Eu = function(uu, Ru, yu) {
              const Eu = sy(uu);
              if (null === Eu) return null;
              const Ku = `${yW}lookPortMode_${Eu}`,
                Qu = wE(Ru);
              if (Qu && yu) return {
                mode: null,
                detail: Ku,
                next: `${yW}lookWrenchPickUp`,
                nextState: null
              };
              const mu = ty(uu),
                Ju = null === mu ? null : sy(mu);
              return null === Ju ? {
                mode: null,
                detail: Ku,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Ku,
                next: Qu ? `${yW}lookWrenchNext` : `${yW}lookPortWrench`,
                nextState: `${yW}lookPortState_${Ju}`
              }
            }(uu, Ru, yu);
            if (null !== Eu) return Eu;
            const Ku = yK(uu, Ru, yu);
            return null === Ku.mode && null === Ku.next ? QW : Ku
          }(uu.blockIdToBlockName(yu), Ju, Nu),
          du = this.plan,
          bu = Xu && Tu ? this.rowsOf(Xu.rootName, Bu) : mW,
          Cu = this.snapshot;
        if (!(null === Tu ? !Cu.visible : Cu.visible && Tu === Cu.info && (ku = Wu, eu = Cu.tool, ku === eu || null !== ku && null !== eu && ku.key === eu.key && ku.jJ === eu.jJ && ku.needed === eu.needed) && function(uu, Ru) {
            return uu === Ru || null !== uu && null !== Ru && uu.key === Ru.key && JSON.stringify([uu.params, uu.keys]) === JSON.stringify([Ru.params, Ru.keys])
          }(ju, Cu.live) && function(uu, Ru) {
            return uu.mode === Ru.mode && uu.detail === Ru.detail && uu.next === Ru.next && uu.nextState === Ru.nextState
          }(Hu, Cu.wrench) && wS(du, Cu.plan) && bu === Cu.atomic)) {
          var ku, eu;
          this.snapshot = null === Tu ? {
            ...Cu,
            visible: !1
          } : {
            info: Tu,
            visible: !0,
            tool: Wu,
            live: ju,
            wrench: Hu,
            plan: du,
            atomic: bu
          };
          for (const uu of this.listeners) uu()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = JW, this.yV = 0, this.jJ = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(uu, Ru, yu) {
        if (null === yu || 0 === Ru || !Ju() || !KW(this.resolve(uu, Ru).rootName)) return !1;
        const Eu = `${yu[0]},${yu[1]},${yu[2]},${Ru}`,
          Ku = performance.now();
        return Eu === this.afloatKey && Ku - this.afloatAt < BW ? this.afloat : (this.afloatKey = Eu, this.afloatAt = Ku, function(uu, Ru) {
          for (const [yu, Eu, Ku] of EW) {
            const Qu = Ru(uu[0] + yu, uu[1] + Eu, uu[2] + Ku);
            if (void 0 === Qu || null !== Qu && !KW(Qu)) return !1
          }
          return !0
        }(yu, ((Ru, yu, Eu) => function(uu, Ru, yu, Eu) {
          if (!uu.isBlockInLoadedChunk(Ru, yu, Eu)) return;
          const Ku = uu.getBlockId(Ru, yu, Eu);
          return 0 === Ku ? null : uu.getMetaInfo(Ku).rootName
        }(uu, Ru, yu, Eu))))
      }
      liveMoved(uu) {
        var Ru;
        const {
          livePos: yu
        } = this;
        return null === uu || uu[0] !== yu[0] || uu[1] !== yu[1] || uu[2] !== yu[2] || (null === (Ru = this.live) || void 0 === Ru ? void 0 : Ru.version()) !== this.liveVersion
      }
      updatePlan(uu) {
        const Ru = null === uu ? "" : uu.join(","),
          yu = performance.now();
        if (Ru === this.planPos && yu - this.planMs < 250) return !1;
        this.planPos = Ru, this.planMs = yu;
        const Eu = null === uu ? null : this.planAt([uu[0], uu[1], uu[2]]),
          Ku = !wS(Eu, this.plan);
        return this.plan = Eu, Ku
      }
      besideMaker(uu, Ru, yu) {
        let {
          info: Eu
        } = uu;
        if (null === Eu) return null;
        let Ku = this.besideMakerById.get(Ru);
        if (void 0 === Ku) {
          const uu = "cryo" === yu ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Ku = {
            ...Eu,
            detail: `${NW}${uu}`,
            detailItem: null
          }, this.besideMakerById.set(Ru, Ku)
        }
        return Ku
      }
      hanging(uu) {
        let {
          info: Ru,
          rootName: yu
        } = uu;
        if (null === Ru) return null;
        let Eu = this.afloatByRoot.get(yu);
        return void 0 === Eu && (Eu = {
          ...Ru,
          detail: `${NW}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(yu, Eu)), Eu
      }
      rowsOf(uu, Ru) {
        if (null === Ru) return mW;
        const yu = `${uu}|${Ru}`;
        let Eu = this.rowsByKey.get(yu);
        if (void 0 === Eu) {
          const Ku = function(uu, Ru) {
            var yu;
            if (!(uu in tR)) return [];
            const Eu = null !== (yu = lR[uu]) && void 0 !== yu ? yu : [],
              Ku = new Map;
            for (const mu of wQ(uu, Ru))
              if ((Eu.includes(mu) || FQ(mu.output) && LQ(mu.output) > Ou(uu)) && LQ(mu.output) <= Ru) {
                var Qu;
                const uu = null !== (Qu = Ku.get(mu.output)) && void 0 !== Qu ? Qu : [];
                uu.push(mu.input), Ku.set(mu.output, uu)
              } return hQ([...Ku], (uu => {
              let [Ru] = uu;
              return -LQ(Ru)
            })).map((uu => {
              let [Ru, yu] = uu;
              return {
                output: Ru,
                inputs: yu
              }
            }))
          }(uu, Ru);
          Eu = Ku.length > 0 ? Ku : mW, this.rowsByKey.set(yu, Eu)
        }
        return Eu
      }
      resolve(uu, Ru) {
        const {
          rootId: yu,
          rootName: Eu
        } = uu.getMetaInfo(Ru), Ku = (0, Sy.k)(Eu) ? Ru : yu;
        let Qu = this.byRootId.get(Ku);
        const mu = Ju();
        if (void 0 === Qu || Qu.nuclear !== mu) {
          var Nu;
          const yu = function(uu) {
            return gE(fT, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu)
          }(Eu, uu.blockIdToBlockName(Ru));
          Qu = {
            info: yu,
            rootName: Eu,
            live: null !== yu && !0 === (null === (Nu = this.live) || void 0 === Nu ? void 0 : Nu.handles(Eu)),
            nuclear: mu
          }, this.byRootId.set(Ku, Qu)
        }
        return Qu
      }
    }
    const BW = 500;
    const xW = (0, Eu.memo)((function(uu) {
      var Ru, yu;
      let {
        store: Ku
      } = uu;
      const {
        t: Qu
      } = (0, DK.E)(), [mu, Ju] = (0, Eu.useState)((() => Ku.get()));
      (0, Eu.useEffect)((() => (Ju(Ku.get()), Ku.subscribe((() => {
        Ju(Ku.get())
      })))), [Ku]);
      const {
        openInGameMenuName: Nu,
        openEverythingMenuName: Xu,
        isTouchScreen: Vu
      } = (0, HK.j)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: ru,
        tool: Bu,
        live: xu,
        wrench: Su,
        atomic: pu
      } = mu, Tu = mu.visible && null === Nu && null === Xu;
      if (null === ru) return null;
      const Wu = null !== Su.detail ? Qu(Su.detail) : null !== (Ru = mu.plan) && void 0 !== Ru && Ru.ctrl ? Qu("buildAFactory2Game:lookPlanCtrl") : null !== ru.detail ? Qu(ru.detail, null === ru.detailItem ? void 0 : {
        item: Qu(ru.detailItem)
      }) : null;
      return (0, eQ.jsxs)("div", {
        className: CK()("Baf2LookTarget", {
          Visible: Tu
        }),
        "aria-hidden": !Tu,
        children: [(0, eQ.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Qu(ru.name)
        }), null !== mu.plan && (0, eQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Qu(mu.plan.key, {
            kind: Qu(mu.plan.kindKey),
            w: String(mu.plan.w),
            h: String(mu.plan.h),
            d: String(mu.plan.d),
            count: String(mu.plan.count)
          })
        }), void 0 !== (null === (yu = mu.plan) || void 0 === yu ? void 0 : yu.why) && (0, eQ.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Qu(mu.plan.why)
        }), null !== Su.mode && (0, eQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Qu(Su.mode)
        }), null !== Bu ? (0, eQ.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Qu(Bu.key, {
            item: Qu(Bu.needed),
            jJ: null === Bu.jJ ? "" : Qu(Bu.jJ)
          })
        }) : null !== xu ? (0, eQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Qu(xu.key, EX(Qu, xu))
        }) : null !== Wu && (0, eQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Wu
        }), pu.length > 0 && (0, eQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Qu("buildAFactory2Game:lookAtomicRecipes", {
            list: pu.map((uu => {
              let {
                output: Ru,
                inputs: yu
              } = uu;
              const Eu = yu.length > 1 ? ` ${Qu("buildAFactory2Game:recipeMore",{count:String(yu.length-1)})}` : "";
              return `${Qu(yQ(yu[0]))}${Eu} \u2192 ${Qu(yQ(Ru))}`
            })).join(", ")
          })
        }), null !== Su.next && (0, eQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Qu(Su.next, {
            state: null === Su.nextState ? "" : Qu(Su.nextState),
            use: Qu(Vu ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var SW = yu(38281);
    const pW = [],
      TW = [
        [0, -1, 0]
      ];

    function WW(uu) {
      const Ru = [uu];
      for (let yu = 1; yu <= 4; yu++) yu > 1 && Ru.push(`${uu}|meta|rot${yu}`), Ru.push(`${uu}|meta|rot${yu}|Running`);
      return Ru
    }

    function jW(uu, Ru) {
      return [Math.floor(uu[0] / Ru), Math.floor(uu[1] / Ru), Math.floor(uu[2] / Ru)]
    }

    function HW(uu, Ru, yu) {
      return `${uu},${Ru},${yu}`
    }

    function dW(uu) {
      const Ru = uu.split("|")[0];
      if (!Xy(Ru)) return pW;
      const yu = tR[Ru];
      if (Ry(yu)) return TW;
      const Eu = jT(uu);
      return yy(yu) ? [
        [-Eu[0], -Eu[1], -Eu[2]]
      ] : kK(yu) ? function(uu, Ru) {
        const yu = uu[0] - 2 * Ru[0],
          Eu = uu[2] - 2 * Ru[2],
          Ku = [];
        for (let Qu = -1; Qu <= 1; Qu++)
          for (let Ru = -1; Ru <= 1; Ru++) Ku.push([yu + Qu, uu[1], Eu + Ru]);
        return Ku
      }([0, 0, 0], Eu) : pW
    }
    const bW = [.5, .5, .5],
      CW = [.2, .8, .3],
      kW = [.45, 1, .5];
    class eW {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(uu) {
        this.indexed = !0;
        for (const Ru of MR)
          for (const yu of WW(Ru)) {
            const Ru = uu.blockNameToBlockId(yu, !0),
              Eu = dW(yu);
            null !== Ru && Eu.length > 0 && (this.offsetsList.push(Eu), this.offsetsIndexById[Ru] = this.offsetsList.length)
          }
      }
      onAfterRender(uu, Ru) {
        this.indexed || this.index(uu);
        const yu = performance.now();
        if (yu - this.lastCheckMs < 100) return;
        this.lastCheckMs = yu, this.checks++;
        const Eu = XS.f.jS,
          [Ku, Qu, mu] = jW(Ru, Eu);
        let Ju = !1;
        const Nu = [];
        let Xu = 0;
        for (let Vu = Ku - 2; Vu <= Ku + 2; Vu++)
          for (let Ru = Qu - 1; Ru <= Qu + 1; Ru++)
            for (let Ku = mu - 2; Ku <= mu + 2; Ku++) {
              const Qu = Xu++,
                mu = HW(Vu, Ru, Ku),
                ru = uu.getChunkVersion(Vu, Ru, Ku);
              let Bu = this.chunks.get(mu);
              null !== ru ? (Bu || (Bu = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(mu, Bu)), Bu.seenAt = this.checks, Bu.checkedVersion !== ru && (Bu.checkedVersion = ru, Ju = !0), Bu.scannedVersion !== ru && yu - Bu.scannedAt >= 500 && Nu.push({
                slot: Qu,
                entry: Bu,
                origin: [Vu * Eu, Ru * Eu, Ku * Eu]
              })) : (Ju ||= void 0 !== Bu, this.chunks.delete(mu))
            }
        this.scanDue(uu, Nu) && (Ju = !0);
        for (const [Vu, ru] of this.chunks) ru.seenAt !== this.checks && (Ju ||= ru.machines.length > 0, this.chunks.delete(Vu));
        for (const Vu of this.chunks.values())
          for (const [Ru, yu, Eu] of Vu.cellChunks)(Math.abs(Ru - Ku) > 2 || Math.abs(yu - Qu) > 1 || Math.abs(Eu - mu) > 2) && this.watchCellChunk(uu, Ru, yu, Eu) && (Ju = !0);
        for (const [Vu, ru] of this.cellChunks) ru.seenAt !== this.checks && this.cellChunks.delete(Vu);
        Ju && this.refresh(uu)
      }
      dispose(uu) {
        this.clearMeshes(uu), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(uu, Ru) {
        const yu = Math.max(Ru.findIndex((uu => {
          let {
            slot: Ru
          } = uu;
          return Ru >= this.scanFrom
        })), 0);
        let Eu = 96;
        for (let Ku = 0; Ku < Ru.length; Ku++) {
          const {
            slot: Qu,
            entry: mu,
            origin: Ju
          } = Ru[(yu + Ku) % Ru.length];
          if (Eu -= this.scan(uu, mu, Ju), Eu <= 0) {
            this.scanFrom = Qu + 1;
            break
          }
        }
        return Ru.length > 0
      }
      scan(uu, Ru, yu) {
        let [Eu, Ku, Qu] = yu;
        const mu = XS.f.jS,
          Ju = this.hits;
        Ju.length = 0;
        const Nu = uu.scanBlocks(Eu, Ku, Qu, Eu + mu, Ku + mu, Qu + mu, this.offsetsIndexById, Ju),
          Xu = [];
        for (let Vu = 0; Vu < Ju.length; Vu += 4) Xu.push({
          pos: [Ju[Vu], Ju[Vu + 1], Ju[Vu + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[Ju[Vu + 3]] - 1]
        });
        return Ru.machines = Xu, Ru.cellChunks = function(uu, Ru) {
          const yu = new Set,
            Eu = [];
          for (const {
              pos: Ku,
              offsets: Qu
            }
            of uu)
            for (const [uu, mu, Ju] of Qu) {
              const Qu = jW([Ku[0] + uu, Ku[1] + mu, Ku[2] + Ju], Ru),
                Nu = HW(...Qu);
              yu.has(Nu) || (yu.add(Nu), Eu.push(Qu))
            }
          return Eu
        }(Xu, mu), Ru.scannedVersion = Ru.checkedVersion, Ru.scannedAt = performance.now(), Math.max(Nu, 1)
      }
      watchCellChunk(uu, Ru, yu, Eu) {
        const Ku = HW(Ru, yu, Eu),
          Qu = uu.getChunkVersion(Ru, yu, Eu),
          mu = this.cellChunks.get(Ku);
        return null === Qu ? this.cellChunks.delete(Ku) : (null === mu || void 0 === mu ? void 0 : mu.version) === Qu ? (mu.seenAt = this.checks, !1) : (this.cellChunks.set(Ku, {
          version: Qu,
          seenAt: this.checks
        }), !0)
      }
      refresh(uu) {
        const Ru = function(uu, Ru) {
            const yu = new Set,
              Eu = [];
            for (const {
                pos: Ku,
                offsets: Qu
              }
              of uu)
              for (const [uu, mu, Ju] of Qu) {
                const Qu = Ku[0] + uu,
                  Nu = Ku[1] + mu,
                  Xu = Ku[2] + Ju,
                  Vu = `${Qu},${Nu},${Xu}`;
                yu.has(Vu) || (yu.add(Vu), Ru(Qu, Nu, Xu) && Eu.push([Qu, Nu, Xu]))
              }
            return Eu
          }([...this.chunks.values()].flatMap((uu => uu.machines)), ((Ru, yu, Eu) => uu.isBlockInLoadedChunk(Ru, yu, Eu) && 0 === uu.getBlockId(Ru, yu, Eu))),
          yu = Ru.join(";");
        yu !== this.shownKey && (this.shownKey = yu, this.clearMeshes(uu), Ru.length > 0 && (this.meshes = [this.build(uu, Ru, !1), this.build(uu, Ru, !0)]))
      }
      build(uu, Ru, yu) {
        const Eu = Ru[0],
          Ku = [],
          Qu = [];
        for (const [mu, Ju, Nu] of Ru)(0, SW.e)(Ku, Qu, [mu - Eu[0] + .5, Ju - Eu[1] + .5, Nu - Eu[2] + .5], bW, yu);
        return uu.createGameMesh({
          positions: Ku,
          indices: Qu
        }, {
          rgb: yu ? kW : CW,
          alpha: .4
        }, Eu)
      }
      clearMeshes(uu) {
        for (const Ru of this.meshes) uu.disposeGameMesh(Ru);
        this.meshes = []
      }
    }
    const AW = 1 / .6,
      DW = 200,
      MW = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      IW = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      GW = 2 * Math.PI / 3;
    class UW {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MW;
        this.style = uu, this.particles = null, this.points = new Float32Array(800), this.budget = DW, this.lastMs = 0
      }
      static blade() {
        return new UW(IW)
      }
      WH(uu, Ru) {
        const yu = Math.min(Ru.arcStruck, Ru.arcPoints.length);
        this.draw(uu, [Ru.arcFrom, ...Ru.arcPoints], Ru.arcPoints.slice(0, yu))
      }
      onBlade(uu, Ru) {
        const [yu, Eu, Ku] = Ru.bladeCentre, [Qu, mu] = Ru.bladeFacing, Ju = yu - 1.5 * Qu, Nu = Ku - 1.5 * mu, Xu = Math.atan2(mu, Qu), Vu = [];
        for (let ru = 0; ru <= 8; ru++) {
          const uu = Xu - GW / 2 + GW * ru / 8;
          Vu.push([Ju + 2.5 * Math.cos(uu), Eu, Nu + 2.5 * Math.sin(uu)])
        }
        this.draw(uu, Vu, Ru.bladeStruck)
      }
      dispose() {
        var uu;
        null === (uu = this.particles) || void 0 === uu || uu.stop(), this.particles = null
      }
      draw(uu, Ru, yu) {
        if (!uu.particlesEnabled() || Ru.length < 2) return;
        const Eu = performance.now();
        this.budget = Math.min(DW, this.budget + (Eu - this.lastMs) / 1e3 * DW), this.lastMs = Eu;
        const Ku = [];
        let Qu = 0,
          mu = Ru[0];
        for (const Wu of Ru.slice(1)) {
          const uu = Math.min(48, Math.round(Math.hypot(Wu[0] - mu[0], Wu[1] - mu[1], Wu[2] - mu[2]) * this.style.perBlock));
          Ku.push([mu, Wu, uu]), Qu += uu, mu = Wu
        }
        const Ju = yu.length;
        Qu += 10 * Ju;
        const Nu = Qu > this.budget ? this.budget / Qu : 1;
        if (0 === Qu || Nu * Qu < 1) return;
        const Xu = Ru[0],
          [Vu, ru, Bu] = Xu,
          xu = this.points;
        let Su = 0;
        const pu = (uu, Ru, yu, Eu) => {
          const Ku = 4 * Su;
          xu[Ku] = uu - Vu, xu[Ku + 1] = Ru - ru, xu[Ku + 2] = yu - Bu, xu[Ku + 3] = Eu, Su++
        };
        Ku.forEach(((uu, Ru) => {
          let [yu, Eu, Ku] = uu;
          const Qu = Math.min(Math.floor(Ku * Nu), DW - Su),
            mu = Math.hypot(Eu[0] - yu[0], Eu[1] - yu[1], Eu[2] - yu[2]),
            Ju = 0 === Ru && mu > 0 ? Math.min(.5, .1 * mu) / mu : 0;
          for (let Nu = 0; Nu < Qu; Nu++) {
            const uu = Ju + (Nu + .5) / Qu * (1 - Ju);
            pu(yu[0] + (Eu[0] - yu[0]) * uu, yu[1] + (Eu[1] - yu[1]) * uu, yu[2] + (Eu[2] - yu[2]) * uu, .15)
          }
        }));
        const Tu = Math.floor(10 * Nu);
        for (let Wu = 0; Wu < Ju; Wu++) {
          const [uu, Ru, Eu] = yu[Wu];
          for (let yu = 0; yu < Tu && Su < DW; yu++) pu(uu, Ru, Eu, 2.5)
        }
        this.budget -= Su, this.particles ??= uu.createParticles(function(uu) {
          const [Ru, yu] = uu.colours;
          return {
            texture: "square_particle",
            Nr: 400,
            minLifeTime: uu.life[0] / AW,
            maxLifeTime: uu.life[1] / AW,
            minSize: uu.size[0],
            maxSize: uu.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [Ru[0], Ru[1], Ru[2], 1],
              maxColor: [yu[0], yu[1], yu[2], 1]
            }, {
              timeFraction: 1,
              minColor: [Ru[0], Ru[1], Ru[2], 0],
              maxColor: [yu[0], yu[1], yu[2], 0]
            }],
            blendMode: lJ.g.Add
          }
        }(this.style), {
          pos: Xu
        }), this.particles.emitPoints(Xu, xu, Su)
      }
    }
    const nW = new Set(["Sky Spring"]);

    function sW(uu, Ru, yu) {
      const Eu = uu.split("|")[0];
      return "Air" !== Ru || yu || ! function(uu) {
        const Ru = uu.split("|")[0];
        return void 0 !== my[Ru] || nW.has(Ru)
      }(Eu) ? null : uu
    }
    class tW {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(uu) {
        const Ru = uu - this.lastTapAt >= 300;
        return this.lastTapAt = uu, Ru
      }
    }
    class lW {
      constructor() {
        this.presses = new tW, this.predicted = null
      }
      tap(uu, Ru) {
        const yu = this.presses.isNewPress(Ru);
        return yu && (this.predicted = {
          station: uu,
          at: Ru
        }), yu
      }
      consumeServerOpen(uu, Ru) {
        const yu = this.predicted;
        return !(null === yu || yu.station !== uu || Ru - yu.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class gW {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(uu, Ru) {
        return uu && (this.thrustAt = Ru), Ru - this.thrustAt < 200
      }
    }
    const cW = [.1, .05, .1],
      LW = {
        texture: "effect_5",
        Nr: Math.ceil(48),
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
        blendMode: lJ.g.OneOne
      };
    class zW {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new gW, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      WH(uu, Ru) {
        for (const [yu, Eu] of Ru.baf2JetFlames) uu.isLocalPlayer(yu) || (Eu ? this.lit.add(yu) : this.lit.delete(yu))
      }
      onAfterRender(uu, Ru) {
        const yu = performance.now(),
          Eu = this.hold.lit(this.selfThrusting(uu, Ru), yu);
        for (const [Ku, Qu] of this.flames)(Ku === Ru ? Eu : this.lit.has(Ku)) || this.setEmitting(Qu, !1), Ku === Ru || uu.getPositionView(Ku) ? !Qu.emitting && yu - Qu.offAt >= 1300 && (Qu.particles.stop(), this.flames.delete(Ku)) : (Qu.particles.dispose(), this.flames.delete(Ku), this.lit.delete(Ku));
        Eu && this.draw(uu, Ru, Ru);
        for (const Ku of this.lit) this.draw(uu, Ru, Ku)
      }
      dispose() {
        for (const uu of this.flames.values()) uu.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(uu, Ru) {
        var yu;
        const Eu = uu.getLocalPlayerMovement();
        return !!Eu && (null !== (Ku = {
          option: null !== (yu = uu.getClientOption(Ru, "jumpHoldThrust")) && void 0 !== yu ? yu : null,
          jumping: Eu.jumpHeld,
          onGround: Eu.onGround,
          alive: uu.isAlive(Ru)
        }).option && Ku.option.maxUpSpeed >= 0 && Ku.jumping && !Ku.onGround && Ku.alive);
        var Ku
      }
      draw(uu, Ru, yu) {
        var Eu, Ku;
        const Qu = this.pos;
        if (!uu.readDrawnPosition(yu, Qu)) return;
        const mu = uu.readDrawnPosition(Ru, this.camera) ? this.camera : Qu;
        if (!((Qu[0] - mu[0]) ** 2 + (Qu[1] - mu[1]) ** 2 + (Qu[2] - mu[2]) ** 2 < 1600) || !uu.particlesEnabled()) {
          const uu = this.flames.get(yu);
          return void(uu && this.setEmitting(uu, !1))
        }
        const Ju = null !== (Eu = this.flames.get(yu)) && void 0 !== Eu ? Eu : this.create(uu, yu, Qu),
          Nu = null !== (Ku = uu.getDrawnHeading(yu)) && void 0 !== Ku ? Ku : 0,
          Xu = this.at;
        Xu[0] = Qu[0] - .35 * Math.sin(Nu), Xu[1] = Qu[1] + 1.05, Xu[2] = Qu[2] - .35 * Math.cos(Nu), Ju.particles.moveTo(Xu), this.setEmitting(Ju, !0)
      }
      setEmitting(uu, Ru) {
        uu.emitting !== Ru && (uu.emitting = Ru, Ru || (uu.offAt = performance.now()), uu.particles.setEmitRate(Ru ? 60 : 0))
      }
      create(uu, Ru, yu) {
        const Eu = {
          particles: uu.createParticles(LW, {
            pos: yu,
            half: cW
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(Ru, Eu), Eu
      }
    }

    function FW(uu) {
      return "Reactor Frame" === EE("reactor", uu)
    }

    function wW(uu) {
      return Ly("reactor", uu) && !FW(uu) && (uu.startsWith("Reactor Glass") || uu.startsWith("Reactor Port"))
    }
    const ZW = "baf2Goal";
    class hW {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [sK.k.subscribe("setDirectionArrow", (uu => {
          let {
            id: Ru,
            position: yu
          } = uu;
          Ru === ZW && (this.goal = yu, this.checkedAt = -1 / 0)
        })), sK.k.subscribe("clearDirectionArrow", (uu => {
          let {
            id: Ru
          } = uu;
          null !== Ru && Ru !== ZW || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const uu of this.subs) sK.k.unsubscribe(uu)
      }
      sideOf(uu, Ru, yu, Eu) {
        const Ku = this.goal;
        if (!Ku) return 0;
        yu - this.checkedAt > 1e3 && (this.checkedAt = yu, this.open = function(uu, Ru) {
          const [yu, Eu, Ku] = uu.map(Math.floor);
          if (!wW(Ru(yu, Eu, Ku))) return null;
          for (const [Qu, mu] of [
              [1, 0],
              [0, 1]
            ]) {
            const uu = Ru(yu + Qu, Eu, Ku + mu),
              Ju = Ru(yu - Qu, Eu, Ku - mu);
            if (FW(Ju) && wW(uu)) return [Qu, 0, mu];
            if (FW(uu) && wW(Ju)) return [0 - Qu, 0, 0 - mu]
          }
          return null
        }(Ku, ((Ru, yu, Eu) => uu.blockIdToBlockName(uu.getBlockId(Ru, yu, Eu)))));
        const Qu = this.open;
        if (!Qu) return 0;
        const mu = Eu(Ku);
        if (Math.abs(mu.x - Ru.x) > .05 || Math.abs(mu.y - Ru.y) > .05) return 0;
        const Ju = Eu([Ku[0] + Qu[0], Ku[1], Ku[2] + Qu[2]]).x - mu.x;
        return Math.abs(Ju) < .3 ? 0 : Ju > 0 ? 1 : -1
      }
    }
    class PW {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new hW, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.VS = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.fW = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((uu => {
          for (const Ru of uu) Ru.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Ru.target, Ru.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.VS || this.clear()
        }, window.addEventListener("resize", this.fW)
      }
      onAfterRender(uu, Ru) {
        var yu;
        this.api = uu, this.project = null !== (yu = null === Ru || void 0 === Ru ? void 0 : Ru.projectWorldPosToScreenPos) && void 0 !== yu ? yu : null, this.queued || this.VS || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.VS = !0;
        for (const uu of this.moved.keys()) uu.style.transform = "";
        this.moved.clear();
        for (const uu of this.sideLabels.keys()) uu.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.fW)
      }
      clear() {
        for (const Qu of this.moved.keys()) Qu.isConnected || this.moved.delete(Qu);
        for (const Qu of this.sideLabels.keys()) Qu.isConnected || this.sideLabels.delete(Qu);
        if (0 === this.arrows.length) return;
        const uu = performance.now(),
          Ru = uu - this.refreshedAt > 1e3;
        Ru && (this.refreshedAt = uu, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const yu = this.trackerBox(),
          Eu = this.barsBox(),
          Ku = this.toastBox(Ru);
        (yu || Eu || Ku) && Ru && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Qu = 0; Qu < this.arrows.length; Qu++) {
          const Ru = this.arrows[Qu];
          this.labelOffsets.set(Ru, this.runLabelAside(Ru, uu));
          const mu = (yu ? this.shiftLeftOf(Ru, yu) : 0) || this.shiftOnScreen(Ru),
            Ju = Math.min(Eu ? this.liftAbove(Ru, Eu, mu) : 0, Ku ? this.liftAbove(Ru, Ku, mu) : 0),
            Nu = this.moved.get(Ru);
          if (0 !== mu || 0 !== Ju) {
            const uu = 0 === Ju ? `translateX(${mu}px)` : `translate(${mu}px, ${Ju}px)`;
            Nu !== uu && (Ru.style.transform = uu, this.moved.set(Ru, uu))
          } else void 0 !== Nu && (Ru.style.transform = "", this.moved.delete(Ru))
        }
      }
      trackerBox() {
        var uu, Ru;
        const yu = null !== (uu = this.tracker) && void 0 !== uu && uu.isConnected ? this.tracker : null !== (Ru = this.trackers[0]) && void 0 !== Ru ? Ru : null;
        if (yu !== this.tracker && this.watch(yu), this.boxStale && yu) {
          var Eu, Ku, Qu;
          this.boxStale = !1;
          const uu = yu.closest(".NoRoom") ? null : yu.getBoundingClientRect(),
            Ru = uu && uu.width > 0 ? null === (Eu = this.hud) || void 0 === Eu ? void 0 : Eu.getBoundingClientRect() : void 0,
            mu = uu && Ru ? Math.max(uu.top, Ru.top) : null !== (Ku = null === uu || void 0 === uu ? void 0 : uu.top) && void 0 !== Ku ? Ku : 0,
            Ju = uu && Ru ? Math.min(uu.bottom, Ru.bottom) : null !== (Qu = null === uu || void 0 === uu ? void 0 : uu.bottom) && void 0 !== Qu ? Qu : 0;
          this.box = uu && uu.width > 0 && Ju > mu ? {
            left: uu.left,
            top: mu,
            right: uu.right,
            bottom: Ju
          } : null
        }
        return yu ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var uu;
          this.barsStale = !1;
          const Ru = null === (uu = this.statBars[0]) || void 0 === uu ? void 0 : uu.getBoundingClientRect();
          this.bars = Ru && Ru.width > 0 && Ru.height > 0 ? {
            left: Ru.left,
            top: Ru.top,
            right: Ru.right,
            bottom: Ru.bottom
          } : null
        }
        return this.bars
      }
      toastBox(uu) {
        var Ru;
        const yu = null !== (Ru = this.toasts[0]) && void 0 !== Ru ? Ru : null;
        if (yu !== this.toastEl || uu && yu) {
          this.toastEl = yu;
          const uu = null === yu || void 0 === yu ? void 0 : yu.getBoundingClientRect();
          this.toast = uu && uu.width > 0 && uu.height > 0 ? {
            left: uu.left,
            top: uu.top,
            right: uu.right,
            bottom: uu.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(uu, Ru, yu) {
        var Eu;
        const Ku = this.anchorOf(uu);
        if (!Ku) return 0;
        const Qu = Ku.x + yu + (null !== (Eu = this.labelOffsets.get(uu)) && void 0 !== Eu ? Eu : 0),
          {
            halfWidth: mu,
            labelled: Ju
          } = this.extentOf(uu),
          Nu = Ku.y + this.em * (Ju ? 6.2 : 3);
        return Nu < Ru.top - 6 || Qu + mu < Ru.left - 6 || Qu - mu > Ru.right + 6 ? 0 : Ru.top - 6 - Nu
      }
      watch(uu) {
        var Ru, yu;
        this.tracker && this.sizes.unobserve(this.tracker), null === (Ru = this.hud) || void 0 === Ru || Ru.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = uu, this.hud = null !== (yu = null === uu || void 0 === uu ? void 0 : uu.closest(".Baf2QuestHud")) && void 0 !== yu ? yu : null, this.box = null, this.boxStale = !0, uu && this.sizes.observe(uu), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(uu, Ru) {
        var yu;
        const Eu = this.anchorOf(uu);
        if (!Eu) return 0;
        const {
          y: Ku
        } = Eu, Qu = Eu.x + (null !== (yu = this.labelOffsets.get(uu)) && void 0 !== yu ? yu : 0), mu = this.em, {
          halfWidth: Ju,
          labelled: Nu
        } = this.extentOf(uu), Xu = Ku - mu, Vu = Qu + Ju;
        return Ku + mu * (Nu ? 6.2 : 3) < Ru.top || Xu > Ru.bottom || Vu < Ru.left - 6 || Qu - Ju > Ru.right ? 0 : Math.max(Ru.left - 6 - Vu, 6 - (Qu - Ju))
      }
      shiftOnScreen(uu) {
        var Ru;
        const yu = this.anchorOf(uu);
        if (!yu) return 0;
        const {
          halfWidth: Eu
        } = this.extentOf(uu), Ku = yu.x + (null !== (Ru = this.labelOffsets.get(uu)) && void 0 !== Ru ? Ru : 0), Qu = Ku + Eu - (this.innerWidth - 6);
        return Qu > 0 ? -Qu : Math.max(0, 6 - (Ku - Eu))
      }
      runLabelAside(uu, Ru) {
        var yu;
        let Eu = null;
        for (let mu = 0; mu < uu.children.length; mu++) uu.children[mu].classList.contains("DirectionArrowLabel") && (Eu = uu.children[mu]);
        if (!Eu) return 0;
        const Ku = uu.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(uu) : null,
          Qu = (Ku && this.api ? this.side.sideOf(this.api, {
            x: Ku.x / this.innerWidth * 100,
            y: Ku.y / this.innerHeight * 100
          }, Ru, this.project) : 0) * this.halfWidthOf(Eu);
        return Qu !== (null !== (yu = this.sideLabels.get(Eu)) && void 0 !== yu ? yu : 0) && (Eu.style.transform = 0 === Qu ? "" : `translateX(-50%) translateX(${Qu}px)`, 0 === Qu ? this.sideLabels.delete(Eu) : this.sideLabels.set(Eu, Qu)), Qu
      }
      extentOf(uu) {
        let Ru = this.em,
          yu = !1;
        for (let Eu = 0; Eu < uu.children.length; Eu++) {
          const Ku = uu.children[Eu],
            Qu = Ku.classList.contains("DirectionArrowLabel");
          yu ||= Qu, (Qu || Ku.classList.contains("DirectionArrowDistance")) && (Ru = Math.max(Ru, this.halfWidthOf(Ku)))
        }
        return {
          halfWidth: Ru,
          labelled: yu
        }
      }
      halfWidthOf(uu) {
        let Ru = this.halfWidths.get(uu);
        return void 0 === Ru && (Ru = uu.offsetWidth / 2, this.halfWidths.set(uu, Ru), this.sizes.observe(uu), this.labels.add(uu)), Ru
      }
      forgetGoneLabels() {
        for (const uu of this.labels) uu.isConnected || (this.sizes.unobserve(uu), this.halfWidths.delete(uu), this.labels.delete(uu))
      }
      anchorOf(uu) {
        const Ru = uu.style.translate,
          yu = this.anchors.get(uu);
        if (yu && yu.translate === Ru && yu.innerWidth === this.innerWidth && yu.innerHeight === this.innerHeight) return yu;
        const Eu = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Ru);
        if (!Eu) return null;
        const Ku = {
          translate: Ru,
          x: parseFloat(Eu[1]) / 100 * this.innerWidth,
          y: parseFloat(Eu[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(uu, Ku), Ku
      }
    }
    const iW = "Baf2ArrowText";

    function YW(uu, Ru) {
      const yu = uu.rows.find((uu => uu.current));
      return su(uu.tutorial) && null !== yu && void 0 !== yu && yu.item && hK(yu) && Iu(yu.item).includes(Ru) ? yu.item : null
    }
    const oW = new class {
      constructor(uu) {
        this.select = uu, this.picks = new Map
      }
      open(uu, Ru, yu) {
        const Eu = YW(Ru, uu);
        null !== Eu && this.cB(uu, Eu, yu)
      }
      follow(uu, Ru) {
        if (Ju())
          for (const [yu, {
              item: Eu,
              had: Ku
            }] of this.picks) {
            const Qu = YW(uu, yu);
            Qu !== Eu && (null !== Qu && Ru(Eu) > Ku ? this.cB(yu, Qu, Ru) : this.picks.delete(yu))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      cB(uu, Ru, yu) {
        this.picks.set(uu, {
          item: Ru,
          had: yu(Ru)
        }), this.select(uu, Ru)
      }
    }(tK.r);

    function qW(uu) {
      return Ru => {
        let yu = 0;
        for (const Eu of uu.getInventoryItems())(null === Eu || void 0 === Eu ? void 0 : Eu.name) === Ru && (yu += null === Eu.amount ? 1 : Math.max(Eu.amount, 0));
        return yu
      }
    }

    function OW(uu, Ru, yu, Eu) {
      uu.getClientOption(Ru, "canCraft") && "inventory" !== HK.d.get("openInGameMenuName") && (oW.open(yu, Eu.get(), qW(uu)), sK.k.Op("toggleMenu", `inventory|${yu}`))
    }
    let vW = null,
      aW = !1;

    function fW(uu) {
      const Ru = CQ();
      uu === vW && Ru === aW || (vW = uu, aW = Ru, (0, tK.u)(function(uu, Ru) {
        const yu = new Map;
        for (let Eu = uu + 1; Eu <= Ku.length; Eu++) {
          const Ku = PQ(Eu, uu, Ru);
          if (Ku)
            for (const Ru of Wu(Eu).unlocks) yu.set(Ru, {
              ...Ku,
              stepsAway: Eu - uu
            })
        }
        return yu
      }(uu, Ru)))
    }

    function uj() {
      return (0, tK.z)(hQ(Object.keys(Mu), LQ)), () => {
        (0, tK.z)([])
      }
    }
    const Rj = "buildAFactory2Game:",
      yj = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      Ej = {
        on: `${Rj}tutorialButtonOn`,
        hud: `${Rj}tutorialButtonHud`,
        off: `${Rj}tutorialButtonOff`
      },
      Kj = {
        on: `${Rj}tutorialPickedOn`,
        hud: `${Rj}tutorialPickedHud`,
        off: `${Rj}tutorialPickedOff`
      };

    function Qj(uu, Ru, yu) {
      let Eu = null,
        Ku = () => {};
      const Qu = Qu => {
        var mu;
        let {
          tutorial: Ju,
          tutorialKnown: Nu
        } = Qu;
        (null === (mu = Eu) || void 0 === mu ? void 0 : mu.tutorial) === Ju && Eu.tutorialKnown === Nu || (Eu = {
          tutorial: Ju,
          tutorialKnown: Nu
        }, Ku = (0, WK.u)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: Ej[Ju],
          icon: {
            kind: "icon",
            name: yj[Ju]
          },
          iconOnly: !0,
          disabled: !Nu,
          className: "Baf2TutorialButton",
          onClick: () => {
            var Eu;
            (Eu => {
              const Ku = Ru.setTutorial(Eu);
              uu.send(`baf2tutorial ${Eu} ${Ku}`), yu.show({
                baf2ToastText: [(0, tu.be)({
                  translationKey: Kj[Eu]
                }, tu.L.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((Eu = Ru.get().tutorial, nu[(nu.indexOf(Eu) + 1) % nu.length]))
          }
        }))
      };
      Qu(Ru.get());
      const mu = sK.k.subscribe(lK, Qu);
      return () => {
        sK.k.unsubscribe(mu), Ku()
      }
    }

    function mj(uu, Ru, yu) {
      var Eu, Ku;
      const Qu = uu.getTargetedBlock();
      if (!Qu || ! function(uu, Ru, yu) {
          if ("Chest" !== Ru) return !1;
          const Eu = uu.split("|")[0];
          if (!Xy(Eu) || 0 === tR[Eu].outputSlots.length) return !1;
          const Ku = jT(uu);
          return yu[0] === Ku[0] && yu[1] === Ku[1] && yu[2] === Ku[2]
        }(yu, null === (Eu = uu.Xyu(Ru)) || void 0 === Eu ? void 0 : Eu.name, Qu.normal)) return !1;
      const [mu, Ju, Nu] = Qu.RT, Xu = uu.getBlockId(mu, Ju, Nu);
      return 0 === Xu || !0 === (null === (Ku = Uu.j[Xu]) || void 0 === Ku ? void 0 : Ku.canBePlacedOver)
    }
    var Jj = yu(36549);
    const Nj = new Set(py.c);
    class Xj {
      constructor(uu) {
        this.toasts = uu, this.lastAt = -1 / 0
      }
      onAltAction(uu, Ru, yu) {
        const Eu = uu.getTargetedBlock();
        if (!Eu || function(uu) {
            const Ru = uu.split("|")[0];
            return Xy(Ru) || null !== kE(Ru) || Au(Ru) || py.c.includes(Ru)
          }(yu) && !Nj.has(yu.split("|")[0])) return;
        const Ku = uu.Xyu(Ru);
        if (!Ku || !Nj.has(Ku.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Qu = Ku.typeObj.id,
          [mu, Ju, Nu] = Eu.RT,
          Xu = uu.getBlockId(mu, Ju, Nu),
          Vu = Uu.j[Xu];
        (0 === Xu || null !== Vu && void 0 !== Vu && Vu.OB || null !== Vu && void 0 !== Vu && Vu.canBePlacedOver) && uu.isSolidToPlayerBlockId(Qu) && uu.canModifyBlockAt(mu, Ju, Nu) && uu.MRu(mu, Ju, Nu, Qu) && !uu.MRu(mu, Ju, Nu, Qu, Ru) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, tu.be)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, tu.L.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Vj {
      constructor(uu) {
        this.show = uu, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(uu, Ru, yu) {
        var Eu;
        if (!Ru) return this.started = null, void this.gatedThisHold.clear();
        if (!uu) return void(this.started = null);
        const Ku = `${uu.x},${uu.y},${uu.z},${uu.jJ}`;
        if (Ku === this.started) return;
        this.started = Ku;
        const Qu = cE(uu.y) ? uW(uu.block, uu.jJ, uu.level) : null;
        if (null === Qu || this.gatedThisHold.has(Ku)) return;
        this.gatedThisHold.add(Ku);
        const mu = uu.block.split("|")[0];
        yu - (null !== (Eu = this.hintedAt.get(mu)) && void 0 !== Eu ? Eu : -1 / 0) < 5e3 || (this.hintedAt.set(mu, yu), this.show({
          baf2ToastText: RW(Qu, uu.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var rj = yu(47);

    function Bj(uu, Ru) {
      const yu = [...uu.baf2CoreBankPaused];
      for (const [Ku] of uu.baf2CoreBanked) yu.push(Ku);
      for (const mu of Ku) {
        for (const {
            item: uu
          }
          of mu.cost) yu.push(uu);
        for (const uu of mu.newDeposits) yu.push(uu.block);
        for (const uu of mu.unlocks) yu.push(uu, Gu(uu));
        mu.reward && yu.push(mu.reward);
        for (const {
            item: uu
          }
          of null !== (Eu = null === (Qu = mu.charge) || void 0 === Qu ? void 0 : Qu.items) && void 0 !== Eu ? Eu : []) {
          var Eu, Qu;
          yu.push(uu)
        }
      }
      return {
        message: uu,
        itemNames: Ru([...new Set(yu)])
      }
    }
    const xj = "baf2MultiblockGuide";
    const Sj = new Map;
    const pj = function(uu, Ru, yu, Ku) {
      let {
        localPlayerId: Qu
      } = Ku;
      const mu = new TJ,
        Ju = new aB,
        Xu = new Qx,
        Vu = new Ex(Xu),
        ru = (uu, Ru) => {
          Ru ? Vu.observe(uu) : Vu.unobserve(uu)
        },
        Bu = new yx,
        xu = new Xx(ru),
        Su = uu => xu.covers(uu),
        pu = new Ix;
      let Tu;
      const Wu = new Lm((uu => {
          Tu.sendCommand(uu)
        })),
        ju = () => {
          Wu.send("baf2questbook")
        },
        Hu = uu => function(uu, Ru, yu) {
          const Eu = {};
          for (const Ku of yu) {
            let yu = Sj.get(Ku);
            void 0 === yu && (yu = uu.getItemStat(Ru, Ku, "displayName"), Sj.set(Ku, yu)), Eu[Ku] = yu
          }
          return Eu
        }(Tu, Qu, uu),
        du = new LK(ju),
        bu = new Fx((() => HK.d.get("loadingOverlayVisible"))),
        Cu = new ix,
        ku = new Xj(bu),
        eu = new Vj((uu => {
          bu.show(uu, uu.baf2ToastMs)
        })),
        Du = new RS(ru),
        Mu = new MT(Du),
        Iu = new km,
        Gu = new vT,
        nu = new yJ,
        su = new NS({
          read: () => !1 !== rj.i.getItem(xj),
          write: uu => {
            rj.i.setItem(xj, uu)
          }
        }),
        gu = new lS(su),
        cu = new LS(su),
        Lu = new Jp(su, (uu => function(uu, Ru) {
          const yu = fJ(Ru.w, Ru.h, Ru.d),
            Eu = new Uint8Array(yu);
          for (let Ku = 0; Ku < yu; Ku++) {
            const yu = GS(uu, ay(Ru, yE(Ru, Ku)));
            Eu[Ku] = null === yu ? 0 : qJ(yu)
          }
          return Eu
        }(Tu, uu)), vS(Wu)),
        zu = new Np(su, vS(Wu)),
        Fu = new Qp,
        wu = (uu, Ru) => {
          let [yu, Eu, Ku] = uu;
          Fu.answered(Ru) || bu.show({
            baf2ToastText: [(0, tu.be)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: yu,
                h: Eu,
                d: Ku
              }
            }, tu.L.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      Lu.onSizeNotTaken(wu), zu.onSizeNotTaken(wu);
      const Pu = new Bp,
        iu = new ip(su),
        Yu = new op,
        qu = new QT(Yu),
        Ou = new TT,
        vu = new IT,
        fu = new zT(vu),
        uR = new OT(vu),
        RR = vu.lookSource(),
        yR = new rW({
          handles: uu => RR.handles(uu) || uu === lu,
          line: (uu, Ru) => uu === lu ? function(uu, Ru, yu) {
            var Eu;
            const Ku = hu(null === (Eu = Ru.at(yu)) || void 0 === Eu ? void 0 : Eu.item);
            return null === Ku ? {
              key: `${NW}lookFarmEmpty`
            } : {
              key: uu.blockIdToBlockName(uu.getBlockId(yu[0], yu[1], yu[2])).endsWith("|Running") ? `${NW}lookFarmRunning` : `${NW}lookFarmWaiting`,
              keys: {
                mob: Zu(Ku)
              }
            }
          }(Tu, Du, Ru) : RR.line(uu, Ru),
          version: () => RR.version() + Du.version()
        }, (uu => FS(su.all(), uu, (uu => GS(Tu, uu)))), (() => du.get().tier)),
        ER = new Gp,
        KR = new eW,
        QR = new UW,
        mR = UW.blade(),
        JR = new zW,
        NR = new qx,
        XR = new PW,
        VR = new lW,
        BR = new tW;
      let xR = -1 / 0,
        SR = 0,
        pR = -1 / 0,
        TR = -1 / 0;
      const WR = () => {
          Wu.send("baf2islandsclose"), TR = Date.now()
        },
        jR = [];

      function HR(uu) {
        var Ru, yu, Eu, Ku, Qu, mu, Nu;
        "core" === (null === (Ru = Ju.get()) || void 0 === Ru ? void 0 : Ru.kind) && "core" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && Wu.send("baf2coreclose"), "power" === (null === (yu = Ju.get()) || void 0 === yu ? void 0 : yu.kind) && "power" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && Wu.send("baf2powerclose"), "water" === (null === (Eu = Ju.get()) || void 0 === Eu ? void 0 : Eu.kind) && "water" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && Wu.send(au.w), "terminal" === (null === (Ku = Ju.get()) || void 0 === Ku ? void 0 : Ku.kind) && "terminal" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && Wu.send("baf2terminalclose"), "islands" === (null === (Qu = Ju.get()) || void 0 === Qu ? void 0 : Qu.kind) && "islands" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && WR();
        const Xu = vu.getStatus();
        "collider" === (null === (mu = Ju.get()) || void 0 === mu ? void 0 : mu.kind) && "collider" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && Xu && Wu.send(gN(Xu, "close"));
        const Vu = uu => "reactor" === uu || "battery" === uu;
        if (Vu(null === (Nu = Ju.get()) || void 0 === Nu ? void 0 : Nu.kind) && !Vu(null === uu || void 0 === uu ? void 0 : uu.kind)) {
          var ru, Bu, xu;
          const uu = "reactor" === (null === (ru = Ju.get()) || void 0 === ru ? void 0 : ru.kind) ? null === (Bu = Lu.get()) || void 0 === Bu ? void 0 : Bu.status.baf2RxAt : null === (xu = zu.get()) || void 0 === xu ? void 0 : xu.status.baf2BatAt;
          uu && Wu.send(rR(uu, "close"))
        }
        "quests" === (null === uu || void 0 === uu ? void 0 : uu.kind) && ju(), Ju.set(uu), null === uu && Cu.release()
      }

      function dR() {
        (0, jK.f)(), HR(null)
      }
      let bR = new Set,
        CR = !1;
      const kR = {
        onCreate: uu => {
          Tu = uu, Tu.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const Ru of MR) {
            const uu = tR[Ru].inputSlots ? nJ(mu) : IJ(Ru, mu, Iu, Wu);
            jR.push((0, TK.i)(Ru, uu))
          }
          jR.push((0, jK.w)((0, Eu.createElement)(Eu.Fragment, null, (0, Eu.createElement)(Bx, {
            controller: xu
          }), (0, Eu.createElement)(KS, {
            store: Du
          }), (0, Eu.createElement)(xW, {
            store: yR
          }), (0, Eu.createElement)(Lx, {
            store: du
          }), (0, Eu.createElement)(hx, {
            store: bu
          }), (0, Eu.createElement)(Yx, {
            store: Cu
          }), (0, Eu.createElement)(vx, {
            store: NR
          }), (0, Eu.createElement)(rp, {
            store: Pu
          }), (0, Eu.createElement)(qp, {
            store: Yu
          })), {
            content: (0, Eu.createElement)(fB, {
              commands: Wu,
              store: Ju,
              power: Iu,
              water: nu,
              reactor: Lu,
              battery: zu,
              collider: vu,
              terminal: Gu,
              quests: du,
              close: jK.i,
              leave: () => {
                Cu.dropHeld(), (0, jK.f)()
              },
              askIslands: () => {
                TR = -1 / 0, xR = Date.now(), SR = Wu.send(ou)
              },
              openSocial: () => {
                (0, jK.f)(), HK.d.set({
                  openEverythingMenuName: ry.s.SOCIAL
                })
              },
              showCore: uu => {
                HR({
                  kind: "core",
                  core: uu
                }), Wu.send("baf2corereopen")
              }
            }),
            onClose: () => {
              HR(null)
            }
          })), jR.push((0, WK.u)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              HR({
                kind: "quests"
              }), (0, jK.q)()
            }
          })), jR.push(Qj(Wu, du, bu)), CR = !1, jR.push(kQ((() => {
            null !== vW && fW(vW)
          }))), jR.push(uj()), jR.push(function() {
            const uu = sK.k.subscribe(lK, aK),
              Ru = () => {
                if (vK) {
                  const uu = vK;
                  vK = null, (0, tK.y)(uu)
                }
              },
              yu = sK.k.subscribe("toggleMenu", (uu => {
                "inventory" === (null === uu || void 0 === uu ? void 0 : uu.split("|")[0]) && Ru()
              })),
              Eu = sK.k.subscribe("appManagerUpdated|openInGameMenuName", (uu => {
                "inventory" === uu && Ru()
              }));
            return () => {
              sK.k.unsubscribe(uu), sK.k.unsubscribe(yu), sK.k.unsubscribe(Eu)
            }
          }()), jR.push(function(uu) {
            const Ru = qW(uu),
              yu = sK.k.subscribe(lK, (uu => {
                oW.follow(uu, Ru)
              }));
            return () => {
              sK.k.unsubscribe(yu), oW.clear()
            }
          }(Tu)), jR.push(function() {
            const uu = document.documentElement,
              Ru = (0, Ux.c)(".InvenBodyRight", [], (() => {
                const Ru = document.querySelector(".InvenBodyRight");
                Ru && uu.style.setProperty("--baf2-backpack-width", `${Ru.offsetWidth}px`)
              }));
            return () => {
              Ru(), uu.style.removeProperty("--baf2-backpack-width")
            }
          }()), jR.push(function() {
            const uu = document.documentElement;
            return uu.classList.add(iW), () => {
              uu.classList.remove(iW)
            }
          }()), jR.push((() => {
            Vu.dispose(), Xu.dispose()
          })), pu.start(Tu), jR.push((() => {
            pu.dispose(), JR.dispose(), Mu.dispose()
          }))
        },
        onClose: () => {
          (0, tK.y)([]), vK = null, OK = new Set, vW = null, (0, tK.u)(new Map), Sj.clear();
          for (const uu of jR) uu();
          du.dispose(), yR.dispose(), bu.dispose(), Cu.dispose(), ER.dispose(), KR.dispose(Tu), gu.dispose(Tu), cu.dispose(Tu), iu.dispose(Tu), qu.dispose(Tu), Yu.dispose(), Ou.dispose(), su.dispose(), Lu.dispose(), zu.dispose(), Pu.dispose(), QR.dispose(), mR.dispose(), NR.dispose(), fu.dispose(Tu), uR.dispose(Tu), vu.dispose(), XR.dispose(), Wu.clear()
        },
        onAfterRender: (uu, Ru) => {
          var yu, Eu, Ku;
          try {
            pu.onAfterRender(Ru)
          } catch (Xu) {
            console.error("Error drawing BAF2 belt items", Xu)
          }
          try {
            JR.onAfterRender(Tu, Qu)
          } catch (Xu) {
            console.error("Error drawing BAF2 jet flames", Xu)
          }
          CR || (CR = !0, Wu.send("baf2clientready"));
          const mu = Tu.getPositionView(Qu);
          xu.onAfterRender(Ru, mu, Bu), Du.onAfterRender(Ru, mu, Bu, Su), Vu.run(Bu), ER.onAfterRender(Tu, mu), KR.onAfterRender(Tu, mu), Mu.onAfterRender(Tu, mu), gu.onAfterRender(Tu, mu), cu.onAfterRender(Tu, Qu, mu), iu.onAfterRender(Tu, Qu, mu), qu.onAfterRender(Tu, Qu), Ou.onAfterRender(Tu, mu), du.onPlayerY(mu[1]), fu.onAfterRender(Tu), uR.onAfterRender(Tu, Qu, mu);
          const Nu = Tu.getTargetedBlock();
          yR.onAfterRender(Tu, Qu, null !== (yu = null === Nu || void 0 === Nu ? void 0 : Nu.M6) && void 0 !== yu ? yu : 0, null !== (Eu = null === Nu || void 0 === Nu ? void 0 : Nu.position) && void 0 !== Eu ? Eu : null), XR.onAfterRender(Tu, Ru), eu.onMining(function(uu, Ru) {
            var yu, Eu;
            const Ku = uu.getMiningBlock();
            if (!Ku) return null;
            const Qu = (0, Uu.g)(uu.getBlockId(Ku[0], Ku[1], Ku[2])),
              mu = null !== (yu = null === (Eu = uu.Xyu(Ru)) || void 0 === Eu ? void 0 : Eu.name) && void 0 !== yu ? yu : null,
              Ju = uu.getItemStat(Ru, Qu.split("|")[0], "harvestLevel");
            return {
              block: Qu,
              x: Ku[0],
              y: Ku[1],
              z: Ku[2],
              jJ: mu,
              level: Ju
            }
          }(Tu, Qu), Tu.isMining(), performance.now()), "dropMap" === (null === (Ku = Ju.get()) || void 0 === Ku ? void 0 : Ku.kind) && cE(mu[1]) && dR()
        },
        onPlayerChangeBlock: (uu, Ru, yu, Eu, Ku, mu) => {
          uu === Qu && function(uu, Ru, yu, Eu, Ku, Qu, mu) {
            const Ju = sW(Qu, mu, uu.isPlayerCrouching(Ru));
            if (null === Ju) return;
            if (uu.sA(yu, Eu, Ku, Ju), !uu.getClientOption(Ru, "canPickUpItems")) return;
            const Nu = my[Ju.split("|")[0]];
            var Xu, Vu, ru;
            void 0 !== Nu && (Xu = uu.getInventoryItems(), Vu = Nu, ru = XS.f.maxItemStackSize, uu.getInventoryFreeSlotCount(Ru) > 0 || Xu.some((uu => null !== uu && uu.name === Vu && null !== uu.amount && uu.amount < ru))) && uu.playSound(Ru, (0, Jj.d)("pickUp"), .5, 1)
          }(Tu, uu, Ru, yu, Eu, Ku, mu)
        },
        onPlayerAltAction: (uu, Ru, yu, Eu, Ku) => {
          var mu, Ju;
          if (!Tu.getClientOption(Qu, "canPickUpItems")) return;
          const Nu = null !== (mu = null === (Ju = Tu.Xyu(Qu)) || void 0 === Ju ? void 0 : Ju.name) && void 0 !== mu ? mu : null,
            Xu = function(uu, Ru) {
              const yu = uu.split("|")[0];
              return Au(yu) && Ru !== JK && "Sky Pack" !== Ru ? yu : null
            }(Ku, Nu);
          if (null !== Xu) return void(VR.tap(Xu, performance.now()) && OW(Tu, Qu, Xu, du));
          if (!wE(Nu)) return;
          const Vu = BR.isNewPress(performance.now()),
            ru = function(uu, Ru, yu) {
              return !wE(Ru) || yu ? null : vE(uu)
            }(Ku, Nu, Tu.isPlayerCrouching(Qu));
          null !== ru && Vu && Tu.sA(Ru, yu, Eu, ru)
        },
        onPlayerAttemptAltAction: (uu, Ru, yu, Eu, Ku) => {
          if (function(uu, Ru, yu, Eu, Ku) {
              "Workbench" === Eu.split("|")[0] && uu.getClientOption(yu, "canCraft") && (oW.open("Workbench", Ku.get(), qW(uu)), Ru.send("baf2station Workbench"))
            }(Tu, Wu, Qu, Ku, du), mj(Tu, Qu, Ku)) return "preventAction";
          ku.onAltAction(Tu, Qu, Ku)
        },
        onReceivedMessageFromServer: (uu, Ru) => {
          if ("baf2MachineStatus" === uu) {
            var yu, Eu, Ku, Xu, Vu, ru, Bu, Su, ju, ku, eu, Au, Mu, Uu, tu, lu;
            const uu = Ru,
              Qu = uu.baf2MachineTaught;
            mu.set(uu.baf2MachinePos, {
              status: uu.baf2MachineStatus,
              power: null !== (yu = uu.baf2MachinePower) && void 0 !== yu ? yu : null,
              opLeftMs: null !== (Eu = uu.baf2MachineOpLeftMs) && void 0 !== Eu ? Eu : null,
              dug: uu.baf2MachineYield ? {
                item: uu.baf2MachineYield,
                name: Hu([uu.baf2MachineYield])[uu.baf2MachineYield]
              } : null,
              powerCap: null !== (Ku = uu.baf2MachinePowerCap) && void 0 !== Ku ? Ku : null,
              powerRates: null !== (Xu = uu.baf2MachinePowerRates) && void 0 !== Xu ? Xu : null,
              coupled: !0 === uu.baf2MachineCoupled,
              couplerLevel: null !== (Vu = uu.baf2MachineCoupler) && void 0 !== Vu ? Vu : 1,
              taught: Qu,
              taughtName: Qu ? Hu([Qu])[Qu] : null,
              tier: null !== (ru = uu.baf2MachineTier) && void 0 !== ru ? ru : null,
              input: null !== (Bu = uu.baf2MachineInput) && void 0 !== Bu ? Bu : null,
              inertCoupler: null !== (Su = uu.baf2MachineInertCoupler) && void 0 !== Su ? Su : null,
              inputShort: null !== (ju = uu.baf2MachineInputShort) && void 0 !== ju ? ju : null,
              field: null !== (ku = uu.baf2MachineField) && void 0 !== ku ? ku : null,
              noSeeds: !0 === uu.baf2MachineNoSeeds,
              fuelFed: !0 === uu.baf2MachineFuelFed,
              fuelFeeds: !0 === uu.baf2MachineFuelFeeds,
              coreFull: !0 === uu.baf2MachineCoreFull,
              waterUnpowered: !0 === uu.baf2MachineWaterUnpowered,
              powerShort: !0 === uu.baf2MachinePowerShort,
              powerWait: !0 === uu.baf2MachinePowerWait,
              reactorPowered: !0 === uu.baf2MachineReactorPowered,
              fuelLeftMs: null !== (eu = uu.baf2MachineFuelLeftMs) && void 0 !== eu ? eu : null,
              burning: null !== (Au = uu.baf2MachineBurning) && void 0 !== Au ? Au : null,
              fuelKeep: null !== (Mu = uu.baf2MachineFuelKeep) && void 0 !== Mu ? Mu : null,
              water: null !== (Uu = uu.baf2MachineWater) && void 0 !== Uu ? Uu : null,
              farm: null !== (tu = uu.baf2MachineFarm) && void 0 !== tu ? tu : null,
              cryo: null !== (lu = uu.baf2MachineCryo) && void 0 !== lu ? lu : null
            })
          } else if ("baf2StationOpen" === uu) {
            const uu = Ru.baf2Station;
            VR.consumeServerOpen(uu, performance.now()) || OW(Tu, Qu, uu, du)
          } else if ("baf2Power" === uu) {
            const uu = Ru;
            Iu.set(uu), uu.baf2PowerOpen && (HR({
              kind: "power"
            }), (0, jK.q)())
          } else if (uu === au.C) {
            const uu = Ru;
            nu.set(uu), uu.baf2WaterOpen && (HR({
              kind: "water"
            }), (0, jK.q)())
          } else if ("baf2RxPlans" === uu) {
            var gu, cu, wu;
            const uu = Ru;
            su.WH(uu);
            const yu = new Set(uu.baf2RxPlanList.map((uu => {
              let [Ru, yu, Eu] = uu;
              return `${Ru},${yu},${Eu}`
            })));
            Pu.retain(yu);
            const Eu = null === (gu = Ju.get()) || void 0 === gu ? void 0 : gu.kind,
              Ku = "reactor" === Eu ? null === (cu = Lu.get()) || void 0 === cu ? void 0 : cu.status.baf2RxAt : "battery" === Eu ? null === (wu = zu.get()) || void 0 === wu ? void 0 : wu.status.baf2BatAt : void 0;
            Ku && bR.has(Ku.join(",")) && !yu.has(Ku.join(",")) && dR(), bR = yu
          } else if ("baf2RxStatus" === uu) {
            const uu = Ru;
            Lu.set(uu), uu.baf2RxOpen && (HR({
              kind: "reactor"
            }), (0, jK.q)())
          } else if ("baf2BatStatus" === uu) {
            const uu = Ru;
            zu.set(uu), uu.baf2BatOpen && (HR({
              kind: "battery"
            }), (0, jK.q)())
          } else if ("baf2RxAlarm" === uu) Pu.WH(Ru);
          else if ("baf2Bomb" === uu) Yu.WH(Ru, Tu.getPositionView(Qu));
          else if ("baf2Fallout" === uu) Ou.WH(Ru);
          else if ("baf2ColBeams" === uu) vu.onBeams(Ru);
          else if ("baf2ColStatus" === uu) {
            const uu = Ru;
            var Zu, hu;
            if (vu.onStatus(uu), uu.baf2ColOpen) vu.onOpen(null !== (Zu = null === (hu = Tu.Xyu(Qu)) || void 0 === hu ? void 0 : hu.name) && void 0 !== Zu ? Zu : null), HR({
              kind: "collider"
            }), (0, jK.q)()
          } else if ("baf2Terminal" === uu) {
            const uu = Ru;
            var iu;
            if (Gu.apply(uu)) uu.baf2TermReset && (HR({
              kind: "terminal"
            }), (0, jK.q)());
            else "terminal" === (null === (iu = Ju.get()) || void 0 === iu ? void 0 : iu.kind) && (Ju.set(null), (0, jK.f)())
          } else if ("baf2Core" === uu) {
            var qu;
            const uu = Ru;
            if (Nu(!0 === uu.baf2CoreNuclear), function(uu, Ru) {
                return "core" === (null === uu || void 0 === uu ? void 0 : uu.kind) && Ru.baf2CoreTier > uu.core.message.baf2CoreTier
              }(Ju.get(), uu)) return void(0, jK.f)();
            if (uu.baf2CoreRefresh && "core" !== (null === (qu = Ju.get()) || void 0 === qu ? void 0 : qu.kind)) return;
            HR({
              kind: "core",
              core: Bj(uu, Hu)
            }), uu.baf2CoreRefresh || (0, jK.q)()
          } else if ("baf2WrenchUndo" === uu) {
            const {
              baf2WrenchPos: uu,
              baf2WrenchBlock: yu
            } = Ru;
            Tu.sA(uu[0], uu[1], uu[2], yu)
          } else if ("baf2Toast" === uu) {
            const uu = Ru;
            Fu.heard(performance.now(), uu.baf2ToastMs), bu.show(uu)
          } else if ("baf2Area" === uu) Cu.arrive(Ru, null !== Ju.get());
          else if ("baf2Quest" === uu) {
            const uu = Ru;
            Nu(!0 === uu.baf2QuestNuclear), du.set(uu, function(uu, Ru) {
              var yu, Eu, Ku, Qu, mu;
              const Ju = [];
              for (const [, , Vu, , , , , , ru, Bu] of uu.baf2QuestSteps) null !== Vu && Ju.push(Vu), Ju.push(...null !== ru && void 0 !== ru ? ru : [], ...null !== Bu && void 0 !== Bu ? Bu : []);
              uu.baf2QuestReward && Ju.push(uu.baf2QuestReward);
              const Nu = null === (yu = uu.baf2QuestSide) || void 0 === yu ? void 0 : yu[2][2];
              Nu && Ju.push(Nu), Ju.push(...null !== (Eu = null === (Ku = uu.baf2QuestSide) || void 0 === Ku ? void 0 : Ku[2][8]) && void 0 !== Eu ? Eu : [], ...null !== (Qu = null === (mu = uu.baf2QuestSide) || void 0 === mu ? void 0 : mu[2][9]) && void 0 !== Qu ? Qu : []);
              for (const [Vu] of null !== (Xu = uu.baf2QuestAlso) && void 0 !== Xu ? Xu : []) {
                var Xu;
                Ju.push(Vu)
              }
              return Ru(Ju)
            }(uu, Hu)), fW(uu.baf2QuestTier)
          } else if ("baf2Route" === uu) ! function(uu, Ru) {
            let {
              baf2RouteCells: yu,
              baf2RouteInto: Eu
            } = Ru;
            0 !== yu.length && Eu ? uu.setRouteChevrons({
              cells: yu.map(((uu, Ru) => {
                const [Ku, , Qu] = function(uu, Ru, yu) {
                  const Eu = yu + 1 < uu.length ? uu[yu + 1] : Ru;
                  return [Eu[0] - uu[yu][0], 0, Eu[2] - uu[yu][2]]
                }(yu, Eu, Ru);
                return {
                  pos: uu,
                  way: [Ku, Qu]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : uu.setRouteChevrons(null)
          }(Tu, Ru);
          else if ("baf2QuestBook" === uu) du.setBook(Ru);
          else if ("baf2Stalls" === uu) xu.set(Ru.baf2StallCells);
          else if (uu === py.n) pu.onMoves(Ru);
          else if (uu === py.i) pu.onLines(Ru);
          else if ("baf2Labels" === uu) Du.WH(Ru);
          else if ("baf2DropMap" === uu) HR({
            kind: "dropMap",
            dropMap: Ru
          }), (0, jK.q)();
          else if ("baf2Islands" === uu) {
            var fu, uR;
            const uu = Ru;
            if (Wu.syncIslandEdits(uu.baf2IslandsAnswered), !uu.baf2IslandsOpen && "islands" !== (null === (fu = Ju.get()) || void 0 === fu ? void 0 : fu.kind)) return;
            if (uu.baf2IslandsOpen) {
              var RR, yR;
              const Ru = HK.d.get("openEverythingMenuName"),
                yu = Wu.sent() >= SR,
                Eu = "other" !== (jR = {
                  askedAtMs: xR,
                  askSent: yu,
                  reaskedAtMs: pR,
                  nowMs: Date.now(),
                  panel: null !== (RR = null === (yR = Ju.get()) || void 0 === yR ? void 0 : yR.kind) && void 0 !== RR ? RR : null,
                  inGameMenu: HK.d.get("openInGameMenuName"),
                  everythingMenu: null === Ru ? null : Ru === ry.s.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== uu.baf2IslandsFocusInvite
                }).everythingMenu && (!!jR.focusInvite || "islands" === jR.panel && "clientGame" === jR.inGameMenu || !(jR.nowMs - jR.reaskedAtMs < nX) && (jR.askSent && jR.nowMs - jR.askedAtMs < nX ? "core" === jR.panel && "clientGame" === jR.inGameMenu && null === jR.everythingMenu : "shop" === jR.everythingMenu || null === jR.inGameMenu));
              if (yu && (xR = -1 / 0), pR = -1 / 0, !Eu) return void WR()
            }
            const yu = (KR = uu.baf2IslandsOpen, XR = "islands" === (null === (uR = Ju.get()) || void 0 === uR ? void 0 : uR.kind), rR = TR, BR = Date.now(), KR && !XR && BR - rR < nX);
            HR({
              kind: "islands",
              islands: uu,
              arrivedAtMs: Date.now(),
              backToCore: sX(Ju.get())
            }), yu && (TR = -1 / 0, pR = Date.now(), Wu.send(ou)), uu.baf2IslandsOpen && ("clientGame" !== HK.d.get("openInGameMenuName") && (0, dK.h)(), (0, jK.q)())
          } else if ("baf2CoopTransfer" === uu) {
            var ER;
            const uu = Ru;
            uu.baf2TransferOn ? (HR({
              kind: "transfer",
              transfer: uu,
              arrivedAtMs: Date.now()
            }), (0, jK.q)()) : "transfer" === (null === (ER = Ju.get()) || void 0 === ER ? void 0 : ER.kind) && (0, jK.f)()
          } else "baf2IslandLeft" === uu ? (Cu.dropHeld(), null !== Ju.get() && dR(), "inventory" === HK.d.get("openInGameMenuName") && (0, dK.h)()) : "baf2Arc" === uu ? QR.WH(Tu, Ru) : "baf2Blade" === uu ? mR.onBlade(Tu, Ru) : "baf2JetFlame" === uu ? JR.WH(Tu, Ru) : "baf2GearPower" === uu && NR.WH(Ru);
          var KR, XR, rR, BR, jR
        }
      };
      return kR
    }
  },
  38279: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu) {
      const Eu = new Set,
        Ku = new ResizeObserver(yu),
        Qu = () => {
          const Ru = new Set(document.querySelectorAll(uu));
          let Qu = !1;
          for (const uu of Eu) Ru.has(uu) || (Ku.unobserve(uu), Eu.delete(uu), Qu = !0);
          for (const uu of Ru) Eu.has(uu) || (Ku.observe(uu), mu.observe(uu, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Eu.add(uu));
          Qu && yu()
        },
        mu = new MutationObserver((Ru => {
          Ru.some((uu => "attributes" === uu.type)) && yu(), Ru.some((Ru => function(uu, Ru, yu) {
            if ("childList" !== uu.type) return !1;
            for (const Eu of uu.addedNodes)
              if (Eu instanceof Element && (Eu.matches(Ru) || Eu.querySelector(Ru))) return !0;
            for (const Eu of uu.removedNodes)
              if (Eu instanceof Element)
                for (const uu of yu)
                  if (Eu.contains(uu)) return !0;
            return !1
          }(Ru, uu, Eu))) && Qu()
        }));
      mu.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Ju of Ru) Ku.observe(Ju);
      return window.addEventListener("resize", yu), Qu(), yu(), () => {
        Ku.disconnect(), mu.disconnect(), window.removeEventListener("resize", yu)
      }
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  38260: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      i: () => Qu
    });
    const Eu = new WeakMap;

    function Ku(uu) {
      let Ru = Eu.get(uu);
      return Ru || (Ru = {
        hidden: uu.hidden,
        x: NaN,
        y: NaN
      }, Eu.set(uu, Ru)), Ru
    }

    function Qu(uu, Ru) {
      const yu = Ku(uu);
      yu.hidden !== Ru && (yu.hidden = Ru, uu.hidden = Ru)
    }

    function mu(uu, Ru, yu) {
      const Eu = Ku(uu);
      Eu.x === Ru && Eu.y === yu || (Eu.x = Ru, Eu.y = yu, uu.style.translate = `${Ru}vw ${yu}vh`)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);